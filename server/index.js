const express = require('express')
const mongooes = require('mongoose')
const cookie = require('cookie-parser')
const cors = require('cors')

mongooes.connect('mongodb+srv://sankaranarayananit002:lQX5HSptLL1jmf8S@moms-cake.inihy.mongodb.net/')
try {
    console.log("DB connected")
} catch (error) {
    console.error(error)
    
}
const app = express();
const PORT = process.env.Port || 5000
app.use(cors({
    origin:'http://localhost:5173/',
    methods :['GET','POST','PUT','DELETE'],
    allowedHeaders : [
        "Content-Type",
        "Authorization",
        "Cache-Control",
        'Expires',
        'Pragma'
    ],
    credentials : true
}))
app.use(cookie)
app.use(express.json)
app.listen (PORT,()=>

    console.log(`Server is runs on ${PORT}`)
)