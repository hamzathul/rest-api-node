const express = require('express')
const crypto = require('crypto')
// const productsRoute = require('./routes/productsRoute')

const app = express()
app.use(express.json())

app.use('/products', require('./routes/productsRoute'))
// app.use('/user', require('./routes/usersRoute'))


app.listen(3000, ()=>console.log('Server started'))