const express = require('express')
const app = express()

app.get('/', (req,res) => {
    res.send('this is a landing page')
})

app.get('/users', (req,res) => {
    res.send('this is a users page')
})

app.get('/users/:id', (req,res) => {
    res.send(`this is a page of user with id ${req.params.id}`)
})

app.listen(8000, () => console.log('server started at http://localhost:8000'))
