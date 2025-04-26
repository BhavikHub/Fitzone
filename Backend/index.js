const connectDB = require('./db'); 
const express = require('express')
const cors = require('cors')
// connect to database
connectDB();

const app = express()
const port = 5000

app.use(cors())
app.use(express.json())
app.use('/api/auth', require('./Routes/auth'))

app.listen(port, () => {
  console.log(`Example app listening http://localhost:${port}`)
})