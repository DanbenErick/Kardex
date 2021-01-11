import React from 'react'

const Tabla = function() {
  return (
    <div>
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
          <tr>
            <td>1 de junio 2020</td>
            <td>Compra</td>
            <td>1400</td>
            <td>300</td>
            <td>1000</td>
            <td></td>
            <td></td>
            <td>1200</td>
            <td>2400</td>
          </tr>
          <tr>
            <td>1 de junio 2020</td>
            <td>Compra</td>
            <td>1400</td>
            <td>300</td>
            <td>1000</td>
            <td></td>
            <td></td>
            <td>1200</td>
            <td>2400</td>
          </tr><tr>
            <td>1 de junio 2020</td>
            <td>Compra</td>
            <td>1400</td>
            <td>300</td>
            <td>1000</td>
            <td></td>
            <td></td>
            <td>1200</td>
            <td>2400</td>
          </tr>
        </tbody>
    </table>
  </div>
  )
}

export default Tabla