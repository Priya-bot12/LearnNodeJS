const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!!')
})
//now i dont need to use the if else condition
app.get('/about', (req, res) => {
    res.send('this is about page')
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})