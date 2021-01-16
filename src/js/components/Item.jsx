import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { connect } from 'react-redux'




const Item = (props) => {
  
  const [ item, setItem ] = useState({
    items: []
  })

  const getItems = _ => {
    axios.get('/get-products')
      .then( response => {
        props.setItemsToStore(response.data)
        setItem({
          items: response.data
        })        
      })
      .catch(err => {
        console.log('Ocurrio un error', err)
      })
  }

  useEffect(function() {
    getItems()
    // console.log('Se ejecuto otra vez')
  },[])

  const handleChangeItem = (event) => {
    // console.log("Select:", event.target)
    props.setIdProductKardex(event.target.value, event.target[event.target.selectedIndex].text)
  }

  return (
    <div>
      <div className="">
        <h1>Almacen</h1>
        <form>
          <div className="ui form">
            {/* <div className="one fields"> */}
              <div className="field">
                <select onChange={handleChangeItem}>
                  <option value="null">Selecciona un Item</option>
                  {
                    item.items.map(element => (
                      <option key={element.id} value={element.id}>{element.nombre}</option>
                    ))
                  }
                </select>
              </div>
            {/* </div> */}
          </div>
        </form>
      </div>
    </div>
  )
}


const mapStateToProps = state => ({
  items: state.items
})

const mapDispatchToProps = dispatch => ({
  setItemsToStore(items) {
    dispatch({
      type: 'SET_ITEMS_TO_STORE',
      items: items
    })
  },
  setIdProductKardex(id, name) {
    dispatch({
      type: 'GET_KARDEX_PRODUCT',
      product_selected: id,
      name_product: name
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Item)