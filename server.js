const express = require('express')
const path = require('path')
const { Client } = require('pg')

const app = express()

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'danben',
  password: 'danbenerick',
  database: 'almacen'
})

client.connect()

app.use(express.static("dist"))

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
    // console.log('Datos:', JSON.parse(res.rows))
  })

})


app.post('/save-product', (req, res) => {

})

app.post('/save-kardex', (req, res) => {

})

app.listen(3000, function() {
  console.log("El servidor esta en: http://localhost:3000")
})