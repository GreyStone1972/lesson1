const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
	console.log(req.url)
    const body = req.url === '/style.css'
    ? fs.readFileSync('style.css')
	: req.url === '/script.js'
	? fs.readFileSync('script.js')	
	: req.url === '/img/567567.png'
	? fs.readFileSync('./img/567567.png')	
    : fs.readFileSync('index.html')
  res.end(body)
})

const port = process.env.PORT || 3000
server.listen(port)

console.log(`Server started on port ${port}!`)
