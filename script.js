
let jokeDisplay = document.getElementById("display");
const errorHandler = (error) => {
    console.error(error);
    alert(error);
}

fetch("https://icanhazdadjoke.com/slack")
    .then( response => response.json())
    .then( json => {
        let joke = json.attachments[0].text;
        jokeDisplay.innerHTML = joke;
    })
    .catch(errorHandler);
