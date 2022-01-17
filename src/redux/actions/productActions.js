import { ActionTypes } from "../constants/actionTypes"

export const fetchProducts = () =>{
    return async function (dispatch){
        const res = await fetch('https://fakestoreapi.com/products')
        const json = await res.json()

        dispatch({type: ActionTypes.FETCH_PRODUCTS, payload: json})
    }
    // return {
    //     type: ActionTypes.FETCH_PRODUCTS,
    //     payload: json
    // }
}

export const fetchProduct = (id) => async (dispatch) =>{
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    const json = await res.json()
    dispatch({type: ActionTypes.SELECTED_PRODUCT, payload: json})
}

export const setProducts = (products) =>({
    type: ActionTypes.SET_PRODUCTS,
    payload: products
})

export const selectedProduct = (product) =>({
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product
})

export const removeSelectedProduct = () =>({
    type: ActionTypes.REMOVE_SELECTED_PRODUCT
})

export const addFavorite = (product) =>({
    type: ActionTypes.ADD_FAVORITE,
    payload: product
})

export const removeFavoriteProduct = (product) =>({
    type: ActionTypes.REMOVE_FAVORITE_PRODUCT,
    payload: product
})

export const addFilterProducts = (products) =>({
    type: ActionTypes.ADD_FILTER_PRODUCTS,
    payload: products
})