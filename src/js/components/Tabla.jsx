import React, { useState ,useEffect } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import moment from 'moment'

import Loader from './Loader.jsx'

const Tabla = function(props) {
  
  const [kardex, setKardex] = useState({
    init: true,
    id: props.product_selected || '',
    kardex: [],
    load: false
  })
  const getKardex = async () => {
    if(props.product_selected != '') {
      setKardex({
        init: false,
        id: props.product_selected,
        kardex: [],
        load: true
      })
      try {
        const respuesta = await axios.get(`get-kardex-product/${props.product_selected}`)
        setKardex({
          init: false,
          id: props.product_selected,
          kardex: [...respuesta.data, props.last_item_kardex],
          load: false
        })
      }catch(error) {
        console.log('Ocurrio un error', error)
      }
    }
  }

  useEffect(function() {
      getKardex()
  },[props.product_selected])

  const Cargando = _ => (
    <tbody>
      <tr>
        <td colSpan="9">
          <Loader />
        </td>
      </tr>
    </tbody>
  )

  const TablaCargado = _ => (
    <tbody>
      {
        kardex.kardex.map((element, index) => (
          <tr key={index}>
            <td>{moment(element.fecha).format("DD/MM/YYYY")}</td>
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
  )

  return (
    <div>
      <h1>{props.name_product}</h1>
      <table className="ui celled table">
        <thead>
          <tr>
            <th colSpan="3">{props.name_product}</th>
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
        {
          kardex.init ?
            (
              <tbody></tbody>
            )
          :

            kardex.load ?
              (
                <Cargando />
              )
              :
              (
                <TablaCargado />  
              )
        }
    </table>
  </div>
  )
}

const mapStateToProps = (state) => {
  // console.log("Estado tabla:", state)
  return {
    product_selected: state.product_selected,
    last_item_kardex: state.last_item_kardex,
    name_product: state.name_product_selected
  }
}

const mapDispatchToProps = dispatch => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(Tabla)