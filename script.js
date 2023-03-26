// let randomNumber = Math.floor(Math.random() * 100000);
// console.log(randomNumber);

let jokeDisplay = document.getElementById("display");
const errorHandler = (error) => {
    console.error(error);
    alert(error);
}

fetch("https://icanhazdadjoke.com/slack")
    .then( response => response.json())
    .then( json => {
        let meme = json.attachments[0].text;
        jokeDisplay.innerHTML = meme;
    })
    .catch(errorHandler);
