const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello, you are visiting the / from Node.js in Docker!')
})


app.get('/coffee', (req, res) => {
  res.send('Hello, you are visiting the /coffee from Node.js in Docker!')
})


app.get('/tea', (req, res) => {
  res.send('Hello, you are visiting the /tea from Node.js in Docker!')
})


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
