import React from 'react'
import { Provider } from 'react-redux'

import store from './redux/store'

import Tabla from './components/Tabla.jsx'
import Item from './components/Item.jsx'
import Formulario from './components/Formulario.jsx'

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Item />
        <Formulario />
        <Tabla />
      </div>
    </Provider>
  )  
}

export default App