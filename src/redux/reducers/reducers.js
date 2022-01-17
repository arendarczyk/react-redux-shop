import { ActionTypes } from "../constants/actionTypes"
//const _ = require('lodash')
import _ from 'lodash'

const initialState ={
    products: []
}

export const productReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case ActionTypes.SET_PRODUCTS:
            return {...state, products: payload} // products: [...payload] JEST JAKAS ROZNICA? chyba nie, a niepotrzebnie destrukturyzujemy 
        case ActionTypes.FETCH_PRODUCTS:
            return {...state, products: payload}
        default:
            return state
    }
}

export const selectedProduct = (state={}, {type, payload}) =>{
    switch(type){
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...payload}
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {}
        default:
            return state
    }
}

export const favoriteReducer = (state={ favorites: []}, {type, payload})=>{ //tu musi byc poczatkowe pole takie inicjujace bo inaczej nie da sie iterowac po nim
    switch(type){
        case ActionTypes.ADD_FAVORITE:
            const tab = {...state, favorites: [...state.favorites, payload]}
            const uniqueProducts = _.uniqBy(tab.favorites, 'id')
            return {...state, favorites: uniqueProducts }
        case ActionTypes.REMOVE_FAVORITE_PRODUCT:
            //funkcja ktora usunie z tablicy ten payload
            const newFavorite = _.remove(state.favorites, {id: payload})    //ZOPTYMALIZOWAĆ
            console.log("state -> ",state.favorites)
            console.log("NEW state -> ",newFavorite)
            return {...state, favorites: [...state.favorites]} //tu w favorites zmienic tylko reszta ok
        default:
            return state
    }
}

export const filterReducer = (state = [], {type, payload}) =>{
    switch(type){
        case ActionTypes.ADD_FILTER_PRODUCTS:
            return state
        default:
            return state
    }
}