let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 2 * box,
    y: 6 * box
}
//inicia a cobrinha sempre indo pra direita
let direction = "right";

//cria valores aleatorios para usar na posicao da comida
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}
     
//cria o fundo na cor verde claro
function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);

}
//cria a cobrinha
function criarcobrinha() {
    for(i = 0; i < snake.length; i++) {
        context.fillStyle = "green";
        context. fillRect(snake[i].x, snake[i].y, box, box);
       
    }

}

//desenha a comida em algum lugar aleatorio
function drawfood() {
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}


//identifica o toque no teclado
document.addEventListener('keydown', update);

function update (event) {
    if (event.keyCode == 37 && direction != "right") direction = "left";
    if (event.keyCode == 38 && direction != "up") direction = "down"; 
    if (event.keyCode == 39 && direction != "left") direction = "right";
    if (event.keyCode == 40 && direction != "down") direction = "up"; 

    


} 

//inicia o jogo
function iniciarjogo() {

//faz a cobrinha mudar atravessar a parede de um lado e sair do outro
    if(snake[0].x > 14 * box && direction =="right") snake[0].x = 0; 
    if(snake[0].x < 1 && direction =="left") snake[0].x = 16 * box;
    if(snake[0].y > 14 * box && direction =="up") snake[0].y = 0; 
    if(snake[0].y < 1 && direction =="down") snake[0].y = 15 * box;  

//chama as funcoes
    criarBG();
    criarcobrinha();
    drawfood();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

// move a cobrinha
    if (direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if (direction == "up") snakeY += box;
    if(direction == "down") snakeY -= box;

//remove o ultimo valor do array da cobrinha exceto quando ela esta comendo a comida 
//remove a comida e adiciona outra em algum lugar

if (snake[0].x == food.x && snake[0].y == food.y)  {
        food.x = Math.floor(Math.random() * 15 + 1) * box,
        food.y = Math.floor(Math.random() * 15 + 1) * box
} else { snake.pop() }



    let newhead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newhead);

}
let jogo = setInterval(iniciarjogo, 100);


