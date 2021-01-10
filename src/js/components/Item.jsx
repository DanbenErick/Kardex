import React, { useState } from 'react'

const Item = () => {

  const [ item, setItem ] = useState({
    name: null
  })

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
                <select onChange={handleChangeItem} value={item.name}>
                  <option value="0">Item ... </option> 
                  <option value="1">Pastillas </option> 
                  <option value="2">Cake</option> 
                  <option value="3">BlueBerris</option> 
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