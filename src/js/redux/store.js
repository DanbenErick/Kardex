import { createStore } from 'redux'
import axios from 'axios'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {
  product_selected: ''
}

const reducerKardex = (state = initialState, action) => {

  if(action.type === "AGREGAR_REGISTRO_KARDEX") {
    return {
      ...state
    }
  }
  if(action.type === "TRAER_PRODUCTOS"){
    return {
      ...state,
      items: state.items
    }
  }
  if(action.type === "GET_KARDEX_PRODUCT") {
    console.log(action)
    return {
      ...state,
      product_selected: action.product_selected
    }
  }
  return state
}

export default createStore(reducerKardex, composeWithDevTools())