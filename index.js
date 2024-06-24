require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {       // '/' represents home directory
  res.send('Hello World!')
})
app.get('/sourav',(req,res) => {
    res.send("My server is ready")
})
 app.get('/log',(req,res) =>{
    res.send('<h3>Please log in here</h3>')
 })
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
