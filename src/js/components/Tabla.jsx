import React, { useState ,useEffect } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'


const Tabla = function(props) {
  
  const [kardex, setKardex] = useState({
    id: props.product_selected,
    kardex: []
  })
  const getKardex = async () => {
    try {
      const resp = await axios.get(`/get-kardex-product/${kardex.id || 0}`)
      setKardex({
        id: props.product_selected,
        kardex: resp.data
      })
    }catch(error) {
      console.log('Ocurrio un error', error)
    }
  }

  useEffect(function() {
      getKardex()
  },[props.product_selected])

  return (
    <div>
      <h1>Id de Producto {props.product_selected}</h1>
      <table className="ui celled table">
        <thead>
          <tr>
            <th colSpan="3"></th>
            <th colSpan="2">Entrada</th>
            <th colSpan="2">Salida</th>
            <th colSpan="2">Saldo</th>
          </tr>
          <tr>
            <th>Fecha</th>
            <th>Detalle</th>
            <th>Valor Unitario</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th>Cantidad</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {
            kardex.kardex.map((element) => (
              <tr>
                <td>{element.fecha}</td>
                <td>{element.detalle}</td>
                <td>{element.valor_unitario}</td>
                <td>{element.entrada_cantidad}</td>
                <td>{element.entrada_total}</td>
                <td>{element.salida_cantidad}</td>
                <td>{element.salida_total}</td>
                <td>{element.saldo_cantidad}</td>
                <td>{element.saldo_total}</td>
              </tr>
              )
            )
          }
        </tbody>
    </table>
  </div>
  )
}

const mapStateToProps = (state) => {
  return {
    product_selected: state.product_selected
  }
}


export default connect(mapStateToProps)(Tabla)