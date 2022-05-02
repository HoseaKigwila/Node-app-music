


let artist = [{  
    name:"Michael Jackson",
    places:"Gary, Indiana",
    imgURL:"images/theCarter.jpg",

   Albums:["Off the wall", "Thriller", "Bad"]
 },
 {  
    name:"Prince",
    places:"Minneapolis, Minnesota",
    imgURL:"https://www.thisisdig.com/wp-content/uploads/2020/11/Prince.jpg",

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
    res.send(`<h1> Prince <h1>
               <p> Prince's early music career saw the release of Prince, Dirty Mind and Controversy, which drew attention for their fusion of religious and sexual themes. He then released the popular albums 1999 and Purple Rain, cementing his superstar status with No. 1 hits like "When Doves Cry" and "Let's Go Crazy." A seven-time Grammy winner, Prince had a prodigious output that included later albums like Diamonds and Pearls, The Gold Experience and Musicology. He died on April 21, 2016, from an accidental drug overdose. <p> 
     <img src="https://www.thisisdig.com/wp-content/uploads/2020/11/Prince.jpg" alt="Girl in a jacket" width="500" height="600">
     <img src="https://www.thisisdig.com/wp-content/uploads/2020/11/Prince.jpg" alt="Girl in a jacket" width="500" height="600">
     `);
});

app.get('/', (req, res) => {
    res.send(`<h1> Prince <h1>
               <p> Prince's early music career saw the release of Prince, Dirty Mind and Controversy, which drew attention for their fusion of religious and sexual themes. He then released the popular albums 1999 and Purple Rain, cementing his superstar status with No. 1 hits like "When Doves Cry" and "Let's Go Crazy." A seven-time Grammy winner, Prince had a prodigious output that included later albums like Diamonds and Pearls, The Gold Experience and Musicology. He died on April 21, 2016, from an accidental drug overdose. <p> `);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
