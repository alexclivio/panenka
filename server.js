const express = require('express')
const fetch = require('node-fetch')

const app = express()

app.use(express.static('public'))

app.get('/*', (req, res) => {
  res.sendFile(__dirname+'/public/index.html')
})

app.listen(4000, () => {
  console.log('🚀 Server ready');
}) 