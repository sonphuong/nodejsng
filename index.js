const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const cors = require('cors')
const app = express()
app.use(cors())
  .use(express.static(path.join(__dirname, 'dist')))
  .get('/', (req, res) => res.render('./dist/index.html'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
