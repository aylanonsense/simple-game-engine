const express = require('express')

// Create a new express app
const app = express()

// Serve all of the files under the /public directory
app.use(express.static('public'))

// Start the server
const port = process.env.PORT || 3000
app.listen(port)
console.log(`Server listening on port ${port}!`)
console.log(`(Try visiting http://localhost:${port}/ in your browser)`)
