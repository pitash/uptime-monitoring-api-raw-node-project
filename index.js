/*
 * Title: Uptime Monitoring Application
 * Description: A RESTFul API to monitor up or down time of user defined links
 *
 */
// dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');
const environment = require('./helpers/environments');
const data = require('./lib/data');

// app object - module scaffolding
const app = {};


//testing file system

// data.create('test', 'newFile', { name: 'bd', language: 'bangla' }, (err) => {
//     if (err) {
//         console.error('An error occurred:', err);
//     } else {
//         console.log('File created successfully');
//     }
// });

// data.read('test', 'newFile', (err, result) => {
//     console.log(err, result);
// });

// data.update('test', 'newFile', { name: 'Japan', language: 'Japanies' }, (err) => {
//     if (err) {
//         console.error('An error occurred:', err);
//     } else {
//         console.log('File update successfully');
//     }
// });

// data.delete('test', 'newFile', (err) => {
//     console.log(err);
// });

// configuration
app.config = {
    port: 3000,
};

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(environment.port, () => {
        console.log(`listening to port ${environment.port}`);
    });
};

// handle Request Response

app.handleReqRes = handleReqRes;


// start the server
app.createServer();