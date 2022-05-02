


let artist = [{  
    name:"Michael Jackson",
    places:"Gary, Indiana",
    imgURL:"images/theCarter.jpg",

   Albums:["Off the wall", "Thriller", "Bad"]
 },
 {  
    name:"Prince",
    places:"Minneapolis, Minnesota",
    imgURL:"images/FreeWeezy.jpg",

    Albums:["1999", "contraversy", "Purple Rain"]
 }
]

console.log(artist)




const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express();

const server = http.createServer(app);

app.get('/', (req, res) => {
    res.send(`Hello World!`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
