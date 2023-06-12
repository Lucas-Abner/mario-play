let mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const points = document.querySelector(".points span");
const gameOver = document.querySelector(".game-over");
const pointsTotal = document.querySelector(".game-over span");

let point = 0;
let load = null;

document.addEventListener("keydown", jump);

function jump() {
    mario.classList.add("jump");

    setTimeout(() => {
        mario.classList.remove("jump");
    }, 600);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = parseInt(window.getComputedStyle(mario).bottom);

    console.log(marioPosition);

    if (pipePosition <= 105 && pipePosition > 0 && marioPosition < 90) {
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`;
        mario.src = "./public/assets/image/gameover.png";
        mario.style.width = "60px";

        gameOver.style.display = "block";
        pointsTotal.innerHTML = point;

        clearInterval(loop);
    }else if (pipePosition <= 104 && pipePosition > 0 && marioPosition >= 179) {
        point++;
        points.innerHTML = point;
    }
}, 16);
