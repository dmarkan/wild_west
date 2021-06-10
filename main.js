let cowboy1_1 = document.querySelector(".cowboy1_1");
let cowboy1_2 = document.querySelector(".cowboy1_2");
let cowboy1_3 = document.querySelector(".cowboy1_3");
let cowboy1_4 = document.querySelector(".cowboy1_4");
let cowboy2_1 = document.querySelector(".cowboy2_1");
let cowboy2_2 = document.querySelector(".cowboy2_2");
let cowboy2_3 = document.querySelector(".cowboy2_3");
let cowboy2_4 = document.querySelector(".cowboy2_4");
let cowboy3 = document.querySelector(".cowboy3");
let girl_1 = document.querySelector(".girl_1");
let girl_2 = document.querySelector(".girl_2");
let girl_3 = document.querySelector(".girl_3");
let girl_4 = document.querySelector(".girl_4");
let oldman = document.querySelector(".oldman");
let timer = document.querySelector(".timer");
let btn = document.querySelector(".btn");
let i = 0;
let begin;
let seconds = 60;

let shot = new Audio();
shot.src = "sound/shot.mp3";

function gun() {
    shot.play();
  }

function brojac() {
    seconds -= 1;
    if (seconds == 0) {
        alert("Time is up! " + document.querySelector('.score').value);
        location.reload()
    }
    timer.innerText = "Time: " + seconds;
}

function start() {
    begin = setInterval(game, 1000);
}

function start2() {
    begin2 = setInterval(game2, 5000);
}

function start3() {
    begin3 = setInterval(game3, 5000);
}

function start4() {
    begin4 = setInterval(game4, 5000);
}

function start5() {
    begin5 = setInterval(game5, 5000);
}

function game() {
    score = 0;
    brojac();
    start2();
    let random = Math.floor(Math.random() * 4);
    switch (random) {
        case 0:
            cowboy1_1.style.visibility = "visible";
            cowboy1_2.style.visibility = "hidden";
            cowboy1_3.style.visibility = "hidden";
            cowboy1_4.style.visibility = "hidden";
            break;
        case 1:
            cowboy1_1.style.visibility = "hidden";
            cowboy1_2.style.visibility = "visible";
            cowboy1_3.style.visibility = "hidden";
            cowboy1_4.style.visibility = "hidden";
            break;
        case 2:
            cowboy1_1.style.visibility = "hidden";
            cowboy1_2.style.visibility = "hidden";
            cowboy1_3.style.visibility = "visible";
            cowboy1_4.style.visibility = "hidden";
            break;
        case 3:
            cowboy1_1.style.visibility = "hidden";
            cowboy1_2.style.visibility = "hidden";
            cowboy1_3.style.visibility = "hidden";
            cowboy1_4.style.visibility = "visible";
            break;
    }
    cowboy1_1.addEventListener("click", function() {
        cowboy1_1.style.visibility = "hidden";
    });
    cowboy1_2.addEventListener("click", function() {
        cowboy1_2.style.visibility = "hidden";
    });
    cowboy1_3.addEventListener("click", function() {
        cowboy1_3.style.visibility = "hidden";
    });
    cowboy1_4.addEventListener("click", function() {
        cowboy1_4.style.visibility = "hidden";
    });
}

cowboy1_1.addEventListener("click", function () {
    document.querySelector('.score').value = "Score: " + ++i;
})
cowboy1_2.addEventListener("click", function () {
    document.querySelector('.score').value = "Score: " + ++i;
})
cowboy1_3.addEventListener("click", function () {
    document.querySelector('.score').value = "Score: " + ++i;
})
cowboy1_4.addEventListener("click", function () {
    document.querySelector('.score').value = "Score: " + ++i;
})

function game2() {
    start3();
    let random2 = Math.floor(Math.random() * 4);
    switch (random2) {
        case 0:
            cowboy2_1.style.visibility = "visible";
            cowboy2_2.style.visibility = "hidden";
            cowboy2_3.style.visibility = "hidden";
            cowboy2_4.style.visibility = "hidden";
            break;
        case 1:
            cowboy2_1.style.visibility = "hidden";
            cowboy2_2.style.visibility = "visible";
            cowboy2_3.style.visibility = "hidden";
            cowboy2_4.style.visibility = "hidden";
            break;
        case 2:
            cowboy2_1.style.visibility = "hidden";
            cowboy2_2.style.visibility = "hidden";
            cowboy2_3.style.visibility = "visible";
            cowboy2_4.style.visibility = "hidden";
            break;
        case 3:
            cowboy2_1.style.visibility = "hidden";
            cowboy2_2.style.visibility = "hidden";
            cowboy2_3.style.visibility = "hidden";
            cowboy2_4.style.visibility = "visible";
            break;
    }
    cowboy2_1.addEventListener("click", function() {
        cowboy2_1.style.visibility = "hidden";
    });
    cowboy2_2.addEventListener("click", function() {
        cowboy2_2.style.visibility = "hidden";
    });
    cowboy2_3.addEventListener("click", function() {
        cowboy2_3.style.visibility = "hidden";
    });
    cowboy2_4.addEventListener("click", function() {
        cowboy2_4.style.visibility = "hidden";
    });
}

cowboy2_1.addEventListener("click", function () {
    document.querySelector('.score').value = "Score: " + ++i;
})
cowboy2_2.addEventListener("click", function () {
    document.querySelector('.score').value = "Score: " + ++i;
})
cowboy2_3.addEventListener("click", function () {
    document.querySelector('.score').value = "Score: " + ++i;
})
cowboy2_4.addEventListener("click", function () {
    document.querySelector('.score').value = "Score: " + ++i;
})

function game3() {
    start4();
    let random3 = Math.floor(Math.random() * 2);
    switch (random3) {
        case 0:
            cowboy3.style.visibility = "visible";
            break;
        case 1:
            cowboy3.style.visibility = "hidden";
            break;
    }
    cowboy3.addEventListener("click", function() {
        cowboy3.style.visibility = "hidden";
    });
}

cowboy3.addEventListener("click", function () {
    document.querySelector('.score').value = "Score: " + ++i;
})

function game4() {
    start5();
    let random4 = Math.floor(Math.random() * 4);
    switch (random4) {
        case 0:
            girl_1.style.visibility = "visible";
            girl_2.style.visibility = "hidden";
            girl_3.style.visibility = "hidden";
            girl_4.style.visibility = "hidden";
            break;
        case 1:
            girl_1.style.visibility = "hidden";
            girl_2.style.visibility = "visible";
            girl_2.style.visibility = "hidden";
            girl_3.style.visibility = "hidden";
            break;
        case 2:
            girl_1.style.visibility = "hidden";
            girl_2.style.visibility = "hidden";
            girl_3.style.visibility = "visible";
            girl_3.style.visibility = "hidden";
            break;
        case 3:
            girl_1.style.visibility = "hidden";
            girl_2.style.visibility = "hidden";
            girl_3.style.visibility = "hidden";
            girl_4.style.visibility = "visible";
            break;
    }
    girl_1.addEventListener("click", function() {
        girl_1.style.visibility = "hidden";
    });
    girl_2.addEventListener("click", function() {
        girl_2.style.visibility = "hidden";
    });
    girl_3.addEventListener("click", function() {
        girl_3.style.visibility = "hidden";
    });
    girl_4.addEventListener("click", function() {
        girl_4.style.visibility = "hidden";
    });
}

girl_1.addEventListener("click", function () {
    document.querySelector('.score').value = "Score: " + --i;
})
girl_2.addEventListener("click", function () {
    document.querySelector('.score').value = "Score: " + --i;
})
girl_3.addEventListener("click", function () {
    document.querySelector('.score').value = "Score: " + --i;
})
girl_4.addEventListener("click", function () {
    document.querySelector('.score').value = "Score: " + --i;
})

function game5() {
    let random5 = Math.floor(Math.random() * 2);
    switch (random5) {
        case 0:
            oldman.style.visibility = "visible";
            break;
        case 1:
            oldman.style.visibility = "hidden";
            break;
    }
    cowboy3.addEventListener("click", function() {
        cowboy3.style.visibility = "hidden";
    });
}

oldman.addEventListener("click", function () {
    document.querySelector('.score').value = "Score: " + --i;
})




