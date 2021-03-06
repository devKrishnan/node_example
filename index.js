console.log('hello from Node.js')
const express = require('express')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const app = express()
const port = 3000
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.listen(port, (error) => {
  if (error)
    return console.log('something bad happened',error)
})

app.post('/shotupload', upload.single('image'), function (req, res, next) {
  console.log('request image',req.file)
  if (req.file) {
    const responseJSON = {
      data: {
        id: "30970182",
      },
      meta: {
        code: 200
      }
    }
    res.send(JSON.stringify(responseJSON))
  }else{
    res.send('Error ')
  }
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
})
app.get('/',(request, response) => {
  console.log(`server is listening in port ${port}`)
  response.send('Hello from express')
})
app.post('/temp',(request, response) => {
  console.log('request',request.file)
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
