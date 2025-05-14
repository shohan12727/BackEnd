const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
  res.send('Shohan')
} )

app.get('/home', (req, res) => {
  res.send("<h1>You are at home</h1>")
})

app.get ('/card', (req,res) => {
  res.send("<section>you are at card </section>")
})

app.get('/male', (req,res) => [
  res.send("<h1> Male section </h1>")
])

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})





