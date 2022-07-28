const express = require('express')
const port = process.env.port || 5000
const app = express()


app.get('/', (req, res) => {
    return res.send('Welcome to api!')
})

app.listen(port, () => {
    console.log(`app is running on port ${port}`)
})