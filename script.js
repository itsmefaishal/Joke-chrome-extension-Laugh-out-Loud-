let randomNumber = Math.floor(Math.random() * 100000)
console.log(randomNumber);

let jokeDisplay = document.getElementById("display");

fetch("https://api.imgflip.com/get_memes/")
    .then( response => response.json)
    .then( json => jsonData)
    .then( jsonData => jsonData.data )

    let meme = jsonData.data.memes[randomNumber].name;

    jokeDisplay.innerHTML = meme;