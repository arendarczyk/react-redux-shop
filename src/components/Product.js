import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {addFavorite} from '../redux/actions/productActions'

const Product = () =>{
    const dispatch = useDispatch()
    const products = useSelector(state => state.allProducts.products)

    const renderList = products.map(product =>{
        const {id, title, image} = product
        return(
            <div key={id}>
                <Link to={`/product/${id}`}>
                    {id}. <img src={image} />
                </Link>
                <button onClick={()=>dispatch(addFavorite(products[id-1]))}>☆</button>
            </div>
        )
    })

    return(
        <>
            {renderList}
        </>
    )
}

export default Product