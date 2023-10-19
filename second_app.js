// alert("Second app.js is linked")

// Creation of grid
// Creation of game
// Creation of win and lose

/*----- constants -----*/
const cookieContainer = document.querySelector('.cookie-container');
const turnButton = document.getElementById('turn-button');
const gamesBoardContainer = document.querySelector('#gamesboard-container')
const optionCookies = Array.from(cookieContainer.children)
const width = 10
const allPlayerCookieBlocks = document.querySelectorAll(`#player div`)



// /*----- state variables -----*/
let angle = 0
let draggedCookie;
// /*----- cached elements  -----*/


// /*----- event listeners -----*/
turnButton.addEventListener('click', turn);
optionCookies.forEach(optionCookie => optionCookie.addEventListener('dragstart', dragStart))
allPlayerCookieBlocks.forEach(playerCookie => {
    playerCookie.addEventListener(`dragover`, dragOver)
    playerCookie.addEventListener(`drop`, dropCookie)
})



// /*----- functions -----*/
function turn() {
    const optionCookies = Array.from(cookieContainer.children)
    if (angle === 0) {
        angle = 90;
    } else {
        angle = 0;
    }
    optionCookies.forEach(optionCookie => optionCookie.style.transform = `rotate(${angle}deg)`)
    console.log("Rotation is sure enough in motion", cookieContainer.children)
}

function createGrid(color, user) {
    const gameBoardContainer = document.createElement('div');
    gameBoardContainer.classList.add('game-board');
    gameBoardContainer.style.backgroundColor = color
    gameBoardContainer.id = user


    for (let i = 0; i < width * width; i++) {
        const block = document.createElement('div')
        block.classList.add('block')
        block.id = i
        gameBoardContainer.append(block)
    }
    gamesBoardContainer.append(gameBoardContainer);
}
createGrid('blue', 'player')
createGrid('yellow', 'computer')


class Cookie {
    constructor(name, length) {
        this.name = name;
        this.length = length;
    }
}
const cruncher = new Cookie('cruncher', 2)
console.log(cruncher)
const macODame = new Cookie('mac-o-dame', 3)
console.log(macODame)
const swirler = new Cookie('swirler', 3)
console.log(swirler)
const nuttyWhip = new Cookie('nutty-whip', 4)
console.log(nuttyWhip)
const crumbler = new Cookie('crumbler', 5)
console.log(crumbler)


const cookies = [cruncher, macODame, swirler, nuttyWhip, crumbler]

let notDropped;


function addCookie(user, cookie, startId) {
    const allCookieBlocks = document.querySelectorAll(`#${user} div`);
    console.log(allCookieBlocks);
    let randomBoolean = Math.random() < 0.5;
    let isHorizontal;
    if (user === 'player') {
        if (angle === 0) {
            isHorizontal = true;
        } else {
            isHorizontal = randomBoolean;
        }
    }
    let randomStartIndex = Math.floor(Math.random() * width * width);
    console.log(randomStartIndex);

    let startIndex;

    if (startId) {
        startIndex = startId;
    } else {
        startIndex = randomStartIndex;
    }

    let validStart;

    if (isHorizontal) {
        if (startIndex <= width * width - cookie.length) {
            validStart = startIndex;
        } else {
            validStart = width * width - cookie.length;
        }
    } else {
        if (startIndex <= width * width - width * cookie.length) {
            validStart = startIndex;
        } else {
            validStart = randomStartIndex - (cookie.length * width) + width;
        }
        console.log(validStart)
    }


    let cookieBlocks = [];

    for (let i = 0; i < cookie.length; i++) {
        if (isHorizontal) {
            console.log(allCookieBlocks[Number(validStart) + i]);
            cookieBlocks.push(allCookieBlocks[Number(validStart) + i]);
        } else {
            cookieBlocks.push(allCookieBlocks[Number(validStart) + i * width]);

        }
    }

    let valid;

    if (isHorizontal) {
        cookieBlocks.every((_cookieBlock, index) =>
            valid = cookieBlocks[0].id % width !== width - (cookieBlocks.length - (index + 1)))
    } else {
        cookieBlocks.every((_cookieBlock, index) =>
            valid = cookieBlocks[0].id < 90 + (width * index + 1)
        )
    }

    const notOccupied = cookieBlocks.every(cookieBlock => !cookieBlock.classList.contains('occupied'))

    if (valid && notOccupied) {
        console.log(cookieBlocks)
        cookieBlocks.forEach(cookieBlock => {
            cookieBlock.classList.add(cookie.name)
            cookieBlock.classList.add('occupied')
        })
    } else {
        if (user === 'computer') addCookie(cookie)
        if (user === 'player') notDropped = true
    }

}


cookies.forEach(cookie => addCookie('computer', cookie))



function dragStart(e) {
    console.log(e.target);
    notDropped = false;
    draggedCookie = e.target;
}

function dragOver(e) {
    e.preventDefault()
}

function dropCookie(e) {
    const startId = e.target.id;
    const cookie = cookies[draggedCookie.id];
    addCookie('player', cookie, startId);
    if (!notDropped) {
        draggedCookie.remove();
    }
}