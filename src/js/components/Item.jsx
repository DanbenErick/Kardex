import React, { useState, useEffect } from 'react'
import axios from 'axios'




const Item = () => {
  
  const [ item, setItem ] = useState({
    items: []
  })

  const getItems = () => {
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
    
  }

  return (
    <div>
      <div className="">
        <h1>Item</h1>
        <form action="">
          <div className="ui form">
            {/* <div className="one fields"> */}
              <div className="field">
                <select> 
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

export default Item