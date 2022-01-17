import { useEffect } from "react"
import {useDispatch, useSelector} from 'react-redux'
import { setProducts, fetchProducts } from "../redux/actions/productActions"
import Product from "./Product"
import SearchBar from "./SearchBar"
import MainPicture from './MainPicture'

const ProductList = () =>{
    const products = useSelector(state => state)
    const dispatch = useDispatch()

    // const fetchItems = async () =>{
    //     const res = await fetch('https://fakestoreapi.com/products')
    //     const json = await res.json()
    //     dispatch(setProducts(json))
    // }

    useEffect(()=>{
        dispatch(fetchProducts())
    },[])

    return(
        <div>
            {/* <SearchBar /> */}
            <MainPicture />
            <Product />
        </div>
    )
}

export default ProductList