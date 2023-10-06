const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')
const data = require('./places.json')
const hotelData = require('./hotelData.json')

app.use(cors())

app.get('/',(req,res) => {
    res.send('coding run')
})
app.get('/places',(req,res) => {
    res.send(data)
})

app.get('/places/:id',(req,res) => {
    const selectedPlace = req.params.id
    const destination = data.find( p => p.id == selectedPlace)
    res.send(destination)
    console.log(`destination ${destination}`)
})
// all datas of diffrent hotels
app.get('/hotel',(req,res) => {
    res.send(hotelData)
})

// specific hotel  data 
app.get('/hotel/:id',(req,res) => {
    const hotelId = req.params.id
    const hotelName = hotelData.find(hotel => hotel.id ==hotelId)
    res.send(hotelName)
})

app.listen(port, ()=>{
    console.log('server is running on the port',port)
})