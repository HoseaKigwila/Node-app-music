module.exports = [{
    albumNumber:"0",  
    name:"Michael Jackson",
    publishDate:"1982",
    imgURL:"https://aboutthe80s.com/wp-content/uploads/2020/07/Michael-Jackson.jpg",

   Albums:["Off the wall", "Thriller", "Bad"]
 },
 {  
    albumNumber:"1",  
    name:"Prince",
    places:"Minneapolis, Minnesota",
    imgURL:"https://www.thisisdig.com/wp-content/uploads/2020/11/Prince.jpg",

    Albums:["1999", "contraversy", "Purple Rain"]
 }
]








app.get('/albums/:albumOrder', (req, res)=> {
    const {albumOrder} = req.params;
    const song = songs.find(s => s.albumOrder === albumOrder);
    if(song){
        let htmlData = ` `;
        htmlData += `<h1>${song.name}</h1>`;
        htmlData += `<img src="${song.imgURL}" alt=" " width="300" height="300">`
        htmlData += `<h3>Year Released: ${song.publishDate}</h3>`;
        htmlData += `<h3>${song.description}</h3>`;
        htmlData += `<h3>${song.Albums}</h3>`;
        res.send(htmlData);
    }else{
        res.send('There is no Album associated with this Number');
    }

    // this code was used from an example from a fellow class mate.
});
