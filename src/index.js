const express = require('express')
const app = express()
const path = require('path');
const dist = path.join(__dirname, '../dist');


app.get('/',function(req,res){
    console.log('Sending Index');
    res.sendFile(path.join(dist, 'index.html'));
});

app.use('/', express.static(dist));

app.listen(3000, () => console.log('Example app listening on port 3000!'))
