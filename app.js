const grid = document.querySelector('.grid')
const blocWidth = 100
const blockHeight =20
const boardWidth = 560

const userStart = [230,10]
let currentPostion = userStart

//create a block
class Block{
    constructor(xAxis , yAxis){
        this.bottomLeft = [xAxis, yAxis]
        this.bottomRight = [xAxis + blocWidth + yAxis]
        this.topLeft = [xAxis,yAxis + blockHeight]
        this.topRight = [xAxis+blocWidth , yAxis+blockHeight]
    }
}

//all blogs
const blocks=[
    new Block(10,270),
    new Block(120,270),
    new Block(230,270),
    new Block(340,270),
    new Block(450,270),
    new Block(10,240),
    new Block(120,240),
    new Block(230,240),
    new Block(340,240),
    new Block(450,240),
    new Block(10,210),
    new Block(120,210),
    new Block(230,210),
    new Block(340,210),
    new Block(450,210),
]
console.log(blocks[0]);

//draw my block
function addBlock(){

for(let i = 0; i<blocks.length; i++){
const block = document.createElement('div')
block.classList.add('block')
block.style.left=blocks[i].bottomLeft[0] + 'px'
block.style.bottom = blocks[i].bottomLeft[1] + 'px'
grid.appendChild(block)
}
}

addBlock()

//add user 
const user = document.createElement('div')
drawUser()
user.classList.add('user')

grid.appendChild(user)

//draw a user
function drawUser(){
    user.style.left = currentPostion[0]+'px'
    user.style.bottom = currentPostion[1]+'px'
}

//move usesr
function moveUser(e){
    switch(e.key){
        case 'ArrowLeft':
            if(currentPostion[0]>0){
                currentPostion[0] -=10
            drawUser()          
        
        }
        break;
        case 'ArrowRight':
            if(currentPostion[0]<boardWidth-blocWidth){
                currentPostion[0] +=10
                drawUser()
            }
            break;
}
}

document.addEventListener('keydown', moveUser)

//add ball
const ball = document.createElement('div')
ball.classList.add('ball')
grid.appendChild(ball)