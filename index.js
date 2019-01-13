let express = require('express')
let app = express()
const path = require('path')
let history = require('connect-history-api-fallback');
app.use(history())
history({
    index: '/static/index.html'
});
app.use(express.static('static'))
app.listen(8080,'0.0.0.0',function(){
    console.log(1)
})

