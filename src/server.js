const express = require('express')
const app = express()

const PORT = 3000

app.get('/', (req, res) => {
    ll('--Pagina / cargada --')
    res.send('<h1>Bienvenido a Dynecore!</h1> <br /> Sistemas en linea!')
})

app.listen(PORT)
ll('Servidor iniciado en puerto', PORT)