let express = require('express')
let app = express()
const path = require('path')
app.use(express.static('static'))
app.listen(8080,'0.0.0.0',function(){
    console.log(1)
})

