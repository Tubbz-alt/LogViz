
// MongoDB Dependencies
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

class Database_Manager
{
    constructor( config )
    {
        this.config=config.db;
        console.log('Database-Manager Constructor: ' + JSON.stringify(this.config));
        const db_name = this.config.db_name;
        
        // Try to connect to the database
        MongoClient.connect( this.config.url, function(err, client){
        
                assert.equal(null, err);
                console.log("Connected successfully to server.");
                console.log("Connecting to Database: " + db_name);
                const db = client.db(db_name);

                client.close();
            });
    }
};


module.exports = Database_Manager;
