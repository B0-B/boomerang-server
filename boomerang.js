

/* 
                                                                                                
_|_|_|                                                                                          
_|    _|    _|_|      _|_|    _|_|_|  _|_|      _|_|    _|  _|_|    _|_|_|  _|_|_|      _|_|_|  
_|_|_|    _|    _|  _|    _|  _|    _|    _|  _|_|_|_|  _|_|      _|    _|  _|    _|  _|    _|  
_|    _|  _|    _|  _|    _|  _|    _|    _|  _|        _|        _|    _|  _|    _|  _|    _|  
_|_|_|      _|_|      _|_|    _|    _|    _|    _|_|_|  _|          _|_|_|  _|    _|    _|_|_|  
                                                                                            _|  
                                                                                        _|_|  
*/

// ---- parameters ----
const port = 8080
const redirecturl = 'https://pbs.twimg.com/media/EDJhNquU4AEaDHT.jpg'



// find ip
const { networkInterfaces } = require('os');
const nets = networkInterfaces();
const results = Object.create(null); // Or just '{}', an empty object
for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
        // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
        if (net.family === 'IPv4' && !net.internal) {
            if (!results[name]) {
                results[name] = [];
            }
            results[name].push(net.address);
        }
    }
} const ip = Object.values(results)[0][0]


var express = require('express'); 
var fs = require('fs'); 
var path = require('path'); 
const bodyParser = require('body-parser'); 
const { exit } = require('process');
var app = express();
const dir = path.join(__dirname, '/');
app.get('/',function(request, response){
    response.writeHead(302, {
        'Location': redirecturl
    });
    response.end();
});

// zu guter letzt den server starten
app.listen(port, function () {
    var host;
    if (port == 80) {
        host = `http://${ip}`;
    } else {
        host = `http://${ip}:${port}`;
    }
    console.log(`
        GUIDE

        1] Copy the following text
        --------- copy below ---------
        wallet keys & cash database
        Link: ${host}
        Password: ${(Math.random() + 1).toString(36).substring(7)+(Math.random() + 1).toString(36).substring(7)}
        ---------- copy end ----------
    `);
});