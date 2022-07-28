const express = require('express')
const port = process.env.port || 5000
const http = require("http");
const cors = require("cors");
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.get('/', (req, res) => {
    return res.send('Welcome to api!')
})

app.get('/api/*', (req, res) => {
    return res.send('Welcome to all api routes!')
})
const server = http.createServer(app);
server.listen(port, () => {
    console.log(`app is running on port ${port}`)
})