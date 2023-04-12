const express = require("express")
const waxRoutes = require('./wax/routes')

const app = express()
const port = 3000

app.use(express.json())

app.get("/", (req, res) => {
    res.send("hello hello hello hello UH")
});

app.use('/api/wax', waxRoutes)

app.listen(port, () => console.log(`app listening on ${port}`))