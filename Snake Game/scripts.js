const board = document.querySelector('.board')
const startGameModal = document.querySelector('.start-game')
const gameOverModal = document.querySelector('.game-over')
const startButton = document.querySelector('.btn-start')
const restartButton = document.querySelector('.btn-restart')
const Modal = document.querySelector('.modal')
let timer = null
let timerId = null
const blockWidth = 50
const blockHeight = 50
const cols = Math.floor(board.clientWidth / blockWidth)
const rows = Math.floor(board.clientHeight / blockHeight)
const highScoreElement = document.querySelector('.high-score')
const scoreElement = document.querySelector('.score')
const timeElement = document.querySelector('.time')

let highScore = localStorage.getItem('highScore') || 50
let score = 0
let time = `00-00`||0

let food = {
    x: Math.floor(Math.random() * rows), y: Math.floor(Math.random() * cols)
}

const blocks = []
let snake = [
    { x: 1, y: 3 },
]

let direction = 'down'
// for(let i =0;i<rows*cols;i++){
//     const block = document.createElement('div')
//     block.classList.add('block')
//     board.appendChild(block)
// }


for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
        const block = document.createElement('div')
        block.classList.add('block')
        board.appendChild(block)
        block.innerText = `${row}-${col}`
        blocks[`${row}-${col}`] = block

    }
}



function render() {
    let head = null
    highScoreElement.textContent = highScore
    blocks[`${food.x}-${food.y}`].classList.add('food')

    if (direction === 'left') {
        head = { x: snake[0].x, y: snake[0].y - 1 }
        // console.log('Helllo');
    }
    else if (direction === 'right') {
        head = { x: snake[0].x, y: snake[0].y + 1 }
    }
    else if (direction === 'up') {
        head = { x: snake[0].x - 1, y: snake[0].y }
    }
    else if (direction === 'down') {
        head = { x: snake[0].x + 1, y: snake[0].y }
    }


    // Game Over Logic is there

    if (head.x < 0 || head.x >= rows || head.y < 0 || head.y >= cols) {
        // alert("Game Over")
        Modal.style.display = 'flex'
        startGameModal.style.display = 'none'
        gameOverModal.style.display = 'flex'
        clearInterval(timer)
    }

    if (head.x == food.x && head.y == food.y) {
        blocks[`${food.x}-${food.y}`].classList.remove('food')
        food = {
            x: Math.floor(Math.random() * rows), y: Math.floor(Math.random() * cols)
        }
        blocks[`${food.x}-${food.y}`].classList.add('food')
        snake.unshift(head)
        score += 10
        scoreElement.textContent = score
        timeElement.textContent=time

        if (score > highScore) {
            highScore = score
            localStorage.setItem('highScore', highScore.toString())
        }


    }
    snake.forEach(segment => {
        blocks[`${segment.x}-${segment.y}`].classList.remove('fill')
    })

    snake.unshift(head)
    snake.pop()
    snake.forEach(segment => {
        blocks[`${segment.x}-${segment.y}`].classList.add('fill')
    });
}



startButton.addEventListener('click', () => {
    timer = setInterval(() => {
        console.log('its working');

        Modal.style.display = 'none'
        render()
    }, 100)
    timerId = setInterval(() => {
        let [min, sec] = time.split('-').map(Number)
        if (sec==59){
            min+=1
            sec=0
        }
        else{
            sec+=1
        }
        time=`${min}-${sec}`
        timeElement.textContent=time
        }, 1000); 
})

restartButton.addEventListener('click', restartGame)
function restartGame() {
    blocks[`${food.x}-${food.y}`].classList.remove('food')

    score = 0
    scoreElement.textContent = score

    time = `00:00`
    // snake.forEach(segment => {
    //     blocks[`${segment.x}-${segment.y}`].classList.remove('fill')
    // })
    direction = 'down'
    Modal.style.display = 'none'
    snake = [{ x: 1, y: 3 }]
    food = {
        x: Math.floor(Math.random() * rows), y: Math.floor(Math.random() * cols)
    }
    timer = setInterval(() => { render() }, 100)
}

addEventListener('keydown', (event) => {
    console.log(event.key);
    if (event.key === 'ArrowUp' || event.key === 'w') {
        console.log('working');

        direction = 'up'
    }
    else if (event.key === 'ArrowDown' || event.key === 's') {

        direction = 'down'
    }
    else if (event.key === 'ArrowLeft' || event.key === 'a') {

        direction = 'left'
    }
    else if (event.key === 'ArrowRight' || event.key === 'd') {
        direction = 'right'
    }


})