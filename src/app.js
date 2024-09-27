import express from "express"

const app = express()

app.get('/server', (req, res) => {
        res.send("Server connected succesfully..!!")
    })


export {app}