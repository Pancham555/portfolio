const express = require('express')
const app = express()
const port = 3000 || process.env.PORT

app.get('/', (req, res) => res.sendFile(__dirname + '/out/index.html'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))