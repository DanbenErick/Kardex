import { createStore } from 'redux'
import axios from 'axios'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {
  items: [],
  product_selected: '',
  name_product_selected: '',
  last_item_kardex: {}
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
      product_selected: action.product_selected,
      last_item_kardex: {},
      name_product_selected: action.name_product
    }
  }
  if(action.type === "ADD_REGISTER_TO_KARDEX") {
    console.log("Boton: ",state)
    return {
      ...state,
      last_item_kardex: action.itemSend
    }
  }
  if(action.type === "SET_ITEMS_TO_STORE") {
    return {
      ...state,
      items: action.items
    }
  }
  return state
}

export default createStore(reducerKardex, composeWithDevTools())