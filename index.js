console.log('hello from Node.js')
const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const mutler = require('mutler')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.listen(port, (error) => {
  if (error)
    return console.log('something bad happened',error)
})
app.post('/profile', upload.single('image'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
})
app.get('/',(request, response) => {
  console.log(`server is listening in port ${port}`)
  response.send('Hello from express')
})
app.post('/shotupload',(request, response) => {
  console.log('body',request.body)
  if (request.image) {
    console.log(`image data is ${request.image}`)
  }
  response.send('Hello from express')
})
// const requestHandler = (request, response) => {
//   console.log('request URL',request.url)
//   response.end('hello node.js server')
// }
// const server =  http.createServer(requestHandler)
// server.listen(port, (error)=>{
//   if (error)
//     return console.log('something bad happened',error)
//   console.log(`server is listening in port ${port}`)
// })
