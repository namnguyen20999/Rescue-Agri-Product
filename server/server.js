const express = require('express')

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Server is working !!!")
})

const port = process.env.PORT || 5001

app.listen(port, () => 'Server is working on port !!!')


