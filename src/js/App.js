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
        <div className="ui section divider"></div>
        <Formulario />
        <div className="ui section divider"></div>
        <Tabla />
        <div className="ui section divider"></div>
      </div>
    </Provider>
  )  
}

export default App