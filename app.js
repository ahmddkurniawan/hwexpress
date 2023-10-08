const express = require('express')
const app = express()
const port = 3000
const router = require("./routes")

//menerima req body dari postman
app.use(espress.json())

//menerima req urlencoded dari postman 
app.use(express.urlencoded({extended: false}))

app.use(router);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})