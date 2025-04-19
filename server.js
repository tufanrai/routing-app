const express = require('express')
const app = express()  // app instant

app.get('/', (req,res) => { 
    res.send('this is a landing page') //responce to the request ofthe user in the home page
})

app.get('/users', (req,res) => {
    res.send('this is a users page') // responce to the request of the user  in the users page
})

app.get('/users/:id', (req,res) => {
    res.send(`this is a page of user with id ${req.params.id}`) // responce to the request of the user in the selective id page
})

app.listen(8000, () => console.log('server started at http://localhost:8000'))
