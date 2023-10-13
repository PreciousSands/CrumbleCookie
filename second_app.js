// alert("Second app.js is linked")

// Creation of grid
// Creation of game
// Creation of win and lose

/*----- constants -----*/
const cookieContainer = document.querySelector(`.cookie-container`);
const turnButton = document.getElementById(`turnButton`);
const cookies = Array.from(cookieContainer.children)

/*----- state variables -----*/
let angle = 0

/*----- cached elements  -----*/


/*----- event listeners -----*/
turnButton.addEventListener(`click`,turn);





/*----- functions -----*/
function turn () { 
console.log("Rotation is sure enough in motion" , cookieContainer.children)
if (angle === 0) {
    angle = 90; 
} else {
    angle = 0;
}
cookies.forEach(cookies => cookies.style.transform = `rotate(${angle}deg)`)
}
