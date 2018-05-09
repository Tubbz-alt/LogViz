const express = require('express')
const app = express()
const path = require('path');
const dist = path.join(__dirname, '../dist');

const config = require('./config.js');
const database_manager = require('./db/database_manager');

// Create Database-Manager
const db_mgr = new database_manager(config);

app.get('/',function(req,res){
    console.log('Sending Index');
    res.sendFile(path.join(dist, 'index.html'));
});

app.get('/db', function(req, res){
    console.log('Received DB Request');

    const db_req = req.param('req');
    let response_str = '';

    // Check request type
    if( db_req == 'get_db_info' ){
        response_str = JSON.stringify(db_mgr.Get_Database_Info());
        response_str.merge({status: 'SUCCESS',
                            message: '' });
    } else {
        response_str = { status: 'ERROR',
                         message: 'Unsupported request (' + db_req + ')' };
    }

    // Create the needed response
    res.send(JSON.stringify(response_str));
});

app.use('/', express.static(dist));

app.listen(3000, () => console.log('Example app listening on port 3000!'))
