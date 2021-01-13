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
    console.log('Se ejecuto otra vez')
  },[])

  const handleChangeItem = (event) => {
    props.setIdProductKardex(event.target.value)
  }

  return (
    <div>
      <div className="">
        <h1>Item</h1>
        <form action="">
          <div className="ui form">
            {/* <div className="one fields"> */}
              <div className="field">
                <select onChange={handleChangeItem}> 
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
  setIdProductKardex(id) {
    dispatch({
      type: 'GET_KARDEX_PRODUCT',
      product_selected: id
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Item)