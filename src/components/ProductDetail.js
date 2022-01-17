import {useSelector} from 'react-redux'
import {useParams } from 'react-router-dom'
import { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productActions'
import { fetchProduct } from '../redux/actions/productActions'

const ProductDetail = () =>{
    // nie ma dostepu bo nie wywolalismy go z innego komponentu ktory ma dostep ---> const products = useSelector(state => state.allProducts.products)
    const product = useSelector(state => state.product)
    const dispatch = useDispatch()
    let {itemId} = useParams() //destruk bo tak nazwalismy zmienna z id
    const {id, title, image} = product

    //console.log(product)

    // const fetchItems = async () =>{
    //     const res = await fetch(`https://fakestoreapi.com/products/${itemId}`)
    //     const json = await res.json()
    //     dispatch(selectedProduct(json))
    // }

    useEffect(()=>{
        if(itemId && itemId !== '')
        dispatch(fetchProduct(itemId))
        return (()=>{
            dispatch(removeSelectedProduct())
        })
    },[itemId])

    return(
        <div>
            {Object.keys(product).length === 0 ? (
               <div>
                   Loading...
                </div>
            ) : (
                <div> 
                    <h5>Item deatil</h5>
                <div>
                    {id}. {title}
                    <img src={image} style={{width: "50px"}} alt='image' />
                </div>  
        </div>      
            )}
            
        </div>
    )
}

export default ProductDetail