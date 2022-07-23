const express = require('express')
const provinciaRoutes = require('./routes/provincia')
const Bairros = require('./config')
const port = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use(provinciaRoutes)

app.listen(port, () => {
    console.log('Server is running on port', port)
})