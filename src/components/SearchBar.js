import { useState, useEffect } from "react"
import {useSelector, useDispatch} from 'react-redux'
import {setProducts} from '../redux/actions/productActions'

const SearchBar = () =>{
    const dispatch = useDispatch()
    const [input, setInput] = useState('')

    const products = useSelector(state => state.allProducts.products)

    let productsCopy = [...products]
    
    const smallProducts = productsCopy.map(product => ({
        ...product, 
        title:product.title.toLowerCase()
        }))
    
    //filter
    let sortedProducts = smallProducts.filter(product => product.title.includes(input))
    
    console.log('products ->', products)
    console.log('COPY ->', productsCopy)
    console.log('sorted ->', sortedProducts)

    useEffect(()=>{
        dispatch(setProducts(sortedProducts))
    },[input])

    //let sorted = products.filter(product => product)
    

    return(
        <div>
            <input value={input} onChange={(e)=>setInput(e.target.value.toLowerCase())} />
        </div>
    )
}

export default SearchBar