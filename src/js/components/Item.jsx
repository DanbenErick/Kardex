import React, { useState } from 'react'
import axios from 'axios'


const Item = () => {

  const [ item, setItem ] = useState({
    nombre: '',
    items: []
  })

  const getItems = (event) => {
    axios.get('/get-products')
      .then( response => {
        console.log('Datos:',response.data)
        setItem({
          nombre: item.nombre,
          items: response.data
        })
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
                  {
                    item != null 
                    ?
                      item.items.forEach(element => {
                        <option value={element.id}>{element.nombre}</option> 
                      })
                    :
                      <option value="">No Hay valores</option>
                  }
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