import React, { useState } from 'react'
import axios from 'axios'


const Item = () => {

  const [ item, setItem ] = useState({
    name: null
  })

  const getItems = (event) => {
    axios.get('/get-products')
      .then( response => {
        console.log('Datos:',response.data)
      })
      .catch(err => {
        console.log('Ocurrio un error')
      })
  }

  const handleChangeItem = (event) => {
    setItem({
      name: event.target.value
    })
    console.log(`
      id_item: ${item.name}
    `)
  }

  return (
    <div>
      <div className="">
        <h1>Item</h1>
        <form action="">
          <div className="ui form">
            {/* <div className="one fields"> */}
              <div className="field">
                <select onChange={handleChangeItem} value={item.name || ''}>
                  <option value="0">Item ... </option> 
                  <option value="1">Pastillas </option> 
                  <option value="2">Cake</option> 
                  <option value="3">BlueBerris</option> 
                </select>
              </div>
            {/* </div> */}
          </div>
        </form>
        <button onClick={getItems}>Probar</button>
      </div>
    </div>
  )
}

export default Item