const express = require("express")
const app = express()
const port = process.env.PORT || 5000


app.get("/", (req,res) => {
    console.log("Website is running")
})

app.listen(port, ()=> {
    console.log(`Server is running at http://localhost:${port}`)
})