const express = require('express')
const path = require('path')
const { Client } = require('pg')

const app = express()

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'danben',
  password: 'danbenerick',
  database: 'almacen'
})

client.connect()

app.use(express.static("dist"))

// Rutas 

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))  
})

app.get('/get-products', (req, res) => {
  const sql = "SELECT * FROM productos"
  client.query(sql, (error, response) => {
    if(error) {
      console.log('Ocurrio un error')
    }
    res.json(response.rows)
  })
})

app.get('/get-kardex', (req, res) => {
  const sql = ""
})

app.get('/get-kardex-product/:id', (req, res) => {
  const sql = `SELECT * FROM kardex WHERE id_producto = ${req.params.id}`
  client.query(sql, (err, response) => {
    if(err) {
      console.log("Ocurrio un error")
    }
    res.json(response.rows)  
  })
})


app.post('/save-product', (req, res) => {
  const sql = "INSERT INTO kardex (fecha, detalle, valor_unitario, entrada_cantidad, entrada_total, salida_cantidad, salida_total, saldo_cantidad, saldo_total, id_producto) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)"

  if(req.body.opcion == 1) {
    // Entrada
    const data = [
      new Date(req.body.fecha),
      req.body.detalle,
      req.body.valor_unitario,
      req.body.cantidad,
      req.body.cantidad,
      0,
      0,
      req.body.cantidad,
      req.body.cantidad,
      req.body.id_product]
      client.query(sql, data)
        .then(response => {
          console.log('Respuesta OP1:', response)
        })
  }else if(req.body.opcion == 2) {
    // Salida
    
    const data = [
      new Date(req.body.fecha),
      req.body.detalle,
      req.body.valor_unitario,
      0,
      0,
      req.body.cantidad,
      req.body.cantidad,
      req.body.cantidad,
      req.body.cantidad,
      req.body.id_product
    ]
    client.query(sql, data)
      .then(response => {
        console.log('Respuesta OP2:', response)
      })
  }
  console.log(req.body)
  res.json({
    ok: true
  })
})

app.post('/save-kardex', (req, res) => {

})

app.listen(3000, function() {
  console.log("El servidor esta en: http://localhost:3000")
})