const express = require('express')
const path = require('path')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://localhost:27017/practica',{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:')); // enlaza el track de error a la consola (proceso actual)
db.once('open', () => {
  console.log('connected'); // si esta todo ok, imprime esto
});

const kardexSchema = new mongoose.Schema({
  fecha: Date,
  detalles: String,
  valor_unitario: Number,
  entrada: {
      cantidad: Number,
      total: Number
  },
  salida: {
      cantidad: Number,
      total: Number
  },
  saldo: {
      cantidad: Number,
      total: Number
  }
}, {
  collection: 'kardex'
})

const Kardex = mongoose.model('kardex', kardexSchema)

  const kardex = new Kardex({
    fecha: '10-10-10',
    detalles: 'Ventas',
    valor_unitario: 10,
    entrada: {
        cantidad: 10,
        total: 10
    },
    salida: {
        cantidad: 0,
        total: 0
    },
    saldo: {
        cantidad: 20,
        total: 20
    }
  })
  kardex.save()
  const KardexCollection = async function() {
    return await Kardex.find({})
  }
console.log(KardexCollection().then(data => data))


app.use(express.static("dist"))

app.get('/', function(req, res) {

  res.sendFile(path.join(__dirname, 'index.html'))
})

app.post('/save-product', (req, res) => {

})

app.post('/save-kardex', (req, res) => {

})

app.listen(3000, function() {
  console.log("El servidor esta en: http://localhost:3000")
})