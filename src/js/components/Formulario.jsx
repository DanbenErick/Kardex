import React, { useState } from 'react'
import axios from 'axios'

const Formulario = (props) => {

  const [ kardex, setKardex ] = useState({
    fecha: '',
    detalle: '',
    valor_unitario: '',
    opcion: '',
    cantidad: ''
  })

  const handleChangeDate = (event) => {
    setKardex({
      fecha: event.target.value,
      detalle: kardex.detalle || '',
      valor_unitario: kardex.valor_unitario || '',
      opcion: kardex.opcion || '',
      cantidad: kardex.cantidad || ''
    })
  }

  const handleChangeDetails = (event) => {
    setKardex({
      fecha: kardex.fecha || '',
      detalle: event.target.value,
      valor_unitario: kardex.valor_unitario || '',
      opcion: kardex.opcion || '',
      cantidad: kardex.cantidad || ''
    })
  }

  const handleChangeValueUnitary = (event) => {
    setKardex({
      fecha: kardex.fecha || '',
      detalle: kardex.detalle,
      valor_unitario: event.target.value,
      opcion: kardex.opcion || '',
      cantidad: kardex.cantidad || ''
    })
  }

  const handleChangeOption = (event) => {
    setKardex({
      fecha: kardex.fecha || '',
      detalle: kardex.detalle || '',
      valor_unitario: kardex.valor_unitario || '',
      opcion: event.target.value,
      cantidad: kardex.cantidad || ''
    })
  }

  const handleChangeQuantity = (event) => {
    setKardex({
      fecha: kardex.fecha || '',
      detalle: kardex.detalle || '',
      valor_unitario: kardex.valor_unitario || '',
      opcion: kardex.opcion || '',
      cantidad: event.target.value
    })
  }

  const sendData = (event) => {
    event.preventDefault()
    console.log(`
      Enviaste los siguienes datos:
        fecha: ${kardex.fecha}
        detalle: ${kardex.detalle}
        valor unitario: ${kardex.valor_unitario}
        opcion: ${kardex.opcion}
        cantidad: ${kardex.cantidad}
    `)
  }

  return (
    <div>
      <div>
        <h1>Formulario</h1>
        <form onSubmit={sendData} >
          <div className="ui form">
            <div className="three fields">
              <div className="field">
                <label>Fecha</label>
                <input 
                  type="date"
                  data-ms-editor="true"
                  value={kardex.fecha}
                  onChange={handleChangeDate} 
                />
              </div>
              <div className="field">
                <label>Detalles</label>
                <input 
                  type="text"
                  placeholder="Detalles"
                  data-ms-editor="true" 
                  value={kardex.detalle}
                  onChange={handleChangeDetails}
                />
              </div>
              <div className="field">
                <label>Valor Unitario</label>
                <input
                  type="number"
                  placeholder="Valor"
                  data-ms-editor="true"
                  value={kardex.valor_unitario}
                  onChange={handleChangeValueUnitary}
                />
              </div>  
            </div>
            <div className="two fields">
              <div className="field">
                <label>Opcion</label>
                <select value={kardex.opcion} onChange={handleChangeOption}>
                  <option value="0">Seccionar una opcion...</option>
                  <option value="1">Entrada</option>
                  <option value="2">Salida</option>
                </select>
              </div>
              <div className="field">
                <label>Cantidad</label>
                <input
                  type="number"
                  placeholder="Cantidad"
                  data-ms-editor="true"
                  value={kardex.cantidad}
                  onChange={handleChangeQuantity}
                />
              </div>
            </div>
            <div className="three fields">
              <div className="field">
                <button type="submit" className="ui primary button">Guardar</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}



export default Formulario