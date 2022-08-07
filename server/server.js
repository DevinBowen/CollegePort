const bodyParser = require('body-parser')
    ,express = require('express')
    ,cors = require('cors')
require('dotenv').config();


const app = express();
app.use(bodyParser.json());
app.use( cors() );


const port = process.env.SERVER_PORT;
app.listen(port, console.log(`this server is testing on port ${port}.`))