

/* 


                                b👀merang


*/

// ---- parameters ----
const mail = 'bogdan.bermel@gmail.com';
const port = 8080;
const redirecturl = 'https://pbs.twimg.com/media/EDJhNquU4AEaDHT.jpg';



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

// setup express server
const express = require('express'); 
const path = require('path'); 
const fs = require('fs');
const app = express();

// construct a get trap
const sendmail = require('sendmail')({
    logger: {
      debug: console.log,
      info: console.info,
      warn: console.warn,
      error: console.error
    },
    silent: false,
});
app.get('/',function(request, response){

    // collect headers
    headers = request.rawHeaders;

    sendmail({
        from: mail,
        to: mail,
        subject: 'ALERT: Boomerang',
        html: `Someone klicked the trap link. Collected header information:\n${headers}`,
      }, function(err, reply) {
        console.log(err && err.stack);
        console.dir(reply);
    });

    // redirect requester
    response.writeHead(302, {
        'Location': redirecturl
    });
    response.end();
});

// run service
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
        or copy a custom text to clipboard.

        2] Create a new file "wallet.txt" on 
        your desktop and paste the text there.
        Save and close - the trap is set.
    `);
});