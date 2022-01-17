import {combineReducers} from 'redux'
import {productReducer, selectedProduct, favoriteReducer, filterReducer} from './reducers'


export const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProduct,
    favorites: favoriteReducer,
    filterProducts: filterReducer
})