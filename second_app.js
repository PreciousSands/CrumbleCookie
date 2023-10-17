// alert("Second app.js is linked")

// Creation of grid
// Creation of game
// Creation of win and lose

/*----- constants -----*/
const cookieContainer = document.querySelector(`.cookie-container`);
const turnButton = document.getElementById(`turnButton`);
const gamesBoardContainer = document.querySelector(`#gamesboard-container`)
const cookies = Array.from(cookieContainer.children)
const width = 10


/*----- state variables -----*/
let angle = 0


/*----- cached elements  -----*/


/*----- event listeners -----*/
turnButton.addEventListener(`click`, turn);





/*----- functions -----*/
function turn() {
    if (angle === 0) {
        angle = 90;
    } else {
        angle = 0;
    }
    cookies.forEach(cookie => cookie.style.transform = `rotate(${angle}deg)`)
    console.log("Rotation is sure enough in motion", cookieContainer.children)
}

function createGrid(color, user) {
    const gameBoardContainer = document.createElement(`div`);
    gameBoardContainer.classList.add(`game-board`);
    gameBoardContainer.style.backgroundColor = color
    gameBoardContainer.id = user
    

    for(let i = 0; i < width * width; i++) {
        const circle = document.createElement(`div`)
        circle.classList.add(`circle`)
        circle.id = i
        gameBoardContainer.append(circle)
    }
    gamesBoardContainer.append(gameBoardContainer);
}
createGrid(`gold`, `player`)
createGrid(`blue`, `computer`)
