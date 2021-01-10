import React from 'react'

const Formulario = () => {

  return (
    <div>
      <div>
        <h1>Formulario</h1>
        <form action="" >
          <div className="ui form">
            <div className="three fields" wfd-id="351">
              <div className="field" wfd-id="356">
                <label wfd-id="357">Fecha</label>
                <input type="date" spellcheck="false" data-ms-editor="true" />
              </div>
              <div className="field">
                <label>Detalles</label>
                <input type="text" placeholder="Detalles" spellcheck="false" data-ms-editor="true" />
              </div>
              <div className="field">
                <label>Valor Unitario</label>
                <input type="number" placeholder="Valor" spellcheck="false" data-ms-editor="true" />
              </div>  
            </div>
            <div className="two fields">
              <div className="field">
                <label>Opcion</label>
                <select name="" id="">
                  <option value="0">Seccionar una opcion...</option>
                  <option value="1">Entrada</option>
                  <option value="2">Salida</option>
                </select>
              </div>
              <div className="field">
                <label>Cantidad</label>
                <input type="number" placeholder="Cantidad" spellcheck="false" data-ms-editor="true" />
              </div>
            </div>
            <div className="three fields">
              <div className="field">
                <button className="ui primary button">Guardar</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Formulario