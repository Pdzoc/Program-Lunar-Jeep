let main = document.querySelector('main');
let lamp = document.querySelector('#lamp');
let boardSize = window.innerWidth > 400 ? 400 : 300;
let elSize = boardSize/10;
let interval;

const canvas = document.querySelector('canvas');
canvas.setAttribute('width',`${boardSize}`);
canvas.setAttribute('height',`${boardSize}`);
const ctx = canvas.getContext('2d');
ctx.strokeStyle = '#ffd262';

let paragraph = document.querySelector('#mission-counter');

let firstDraw = true;
let player = {
    x: 0,
    y: 0
}

let exit = {
    x: 0,
    y: 0
}

let actions = [];
let coords = [];
let currentLevel = 1;
const section = document.querySelector('section');

function drawNest() {
    if(firstDraw) {
        for(let i=elSize; i<boardSize; i+= elSize)
        {
            ctx.moveTo(0, i);
            ctx.lineTo(boardSize,i);
            ctx.moveTo(i,0);
            ctx.lineTo(i, boardSize);
        }
        firstDraw = false;
}
    ctx.stroke();
}

function clear() {
    ctx.clearRect(0,0, boardSize, boardSize);
    actions = [];
    coords = [];
    section.innerText = "Actions:";
    clearInterval(interval);
}

function drawPlayer(x,y) {
    ctx.fillStyle = 'green';
    ctx.fillRect(x*elSize, y*elSize, elSize, elSize)
}

function drawExit(x,y) {
    ctx.fillStyle = 'blue';
    ctx.fillRect(x*elSize, y*elSize, elSize, elSize)
}

function drawWall(x,y) {
    ctx.fillStyle = 'grey';
    ctx.fillRect(x*elSize, y*elSize, elSize, elSize)
}

function move(x,y) {
    if(x>0) actions.push('R');
    if(x<0) actions.push('L');
    if(y>0) actions.push('D');
    if(y<0) actions.push('U');
    coords.push([y,x])
    section.innerText = `Actions: ${actions.join(" ")}`
}

function back() {
    actions.pop();
    coords.pop();
    section.innerText = `Actions: ${actions.join(" ")}`
}

function drawMessage(color, text) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.50)';
    ctx.fillRect(0,0, boardSize, boardSize);
    ctx.textAlign = 'center';
    ctx.fillStyle = color;
    ctx.font = '40px arial';
    ctx.fillText(text.toUpperCase(), boardSize/2, boardSize/2);
    section.innerText = `Actions: ${actions.join(" ")} ${text}!`;
}

function drawTrack() {
    let pos = [player.y, player.x];
    if(coords.length == 0) {
        drawMessage('red', 'lost');
        setTimeout(getLevelData, 800);
        return;
    }


    coords.forEach(el => {
        pos[0] += el[0];
        pos[1] += el[1];
        ctx.fillStyle = '#0D0';
    if(boardSize==400) ctx.fillRect(pos[1]*elSize+15, pos[0]*elSize+15, 10, 10)
    if(boardSize==300) ctx.fillRect(pos[1]*elSize+10, pos[0]*elSize+10, 10, 10)
    
    if(!levels[currentLevel][pos[0]]) {
        drawMessage('red', 'Lost');
        setTimeout(getLevelData, 800);
        return;
    }
    
    if(levels[currentLevel][pos[0]][pos[1]]==1) {
        drawMessage('red', 'Collision');
        setTimeout(getLevelData, 800);
        throw new Error('collision!')
    }
    })
    if(levels[currentLevel][pos[0]][pos[1]]==3) {
        drawMessage('#0D0', 'Completed');
        lamp.style.background = 'lime';
        ++currentLevel;
        if(currentLevel > Object.keys(levels).length) {
            section.innerText = `Actions: ${actions.join(" ")} Completed! It was the last level. Thanks for playing!`;
            return;
        }
        setTimeout(getLevelData, 800);
        return;
    }
    if(!levels[currentLevel][pos[0]][pos[1]] || levels[currentLevel][pos[0]][pos[1]]==0) {
        drawMessage('red', 'Lost')
        setTimeout(getLevelData, 800);
    }
}

function getLevelData() {
    clear();
    activateButtons();
    lamp.style.background = 'darkred';

    interval = setInterval(()=> {
            if(lamp.style.background == 'darkred') {lamp.style.background = 'red'}
            else {lamp.style.background = 'darkred'}
        },1000)

    paragraph.innerText = `Mission ${currentLevel} / ${Object.keys(levels).length}`
    for(let y=0; y<10; ++y) {
        for(let x=0; x<10; ++x)
        {
            if(levels[currentLevel][y][x]==1) {
                drawWall(x,y);
            }
            if(levels[currentLevel][y][x]==2) {
                player.x = x;
                player.y = y;
                drawPlayer(x,y)
            }
            if(levels[currentLevel][y][x]==3) {
                exit.x = x;
                exit.y = y;
                drawExit(x,y)
            }

        }
    }
    drawNest();
}

function disableButtons() {
    let buttons = document.querySelectorAll('button');
    buttons.forEach(el => {
        el.setAttribute('disabled', true);
    })
}

function activateButtons() {
    let buttons = document.querySelectorAll('button');
    buttons.forEach(el => {
        el.removeAttribute('disabled');
    })
}

function start() {
    disableButtons();
    drawTrack();
}

function startGame() {
    main.style.visibility = 'hidden';
    getLevelData();
}

