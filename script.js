'use strict';
// declareing needed variables
let checknum, randnum, range=20, highscore=0, score = 20 ;

//random number genrator Function
randfun();
function randfun(){
    randnum = Math.floor(Math.random()*range+1);
    console.log(randnum);
}

//Score Calculator Function
function scorecalc(){
    if(score > 0){
        --score
        document.querySelector('.score').textContent = score;
    }else if( score == 0){
        gameover()
    } 
}

//Highscore Function
function sethighscore(){
    if(score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }
}

//Gamewin Function
function gamewin(){
    document.querySelector('.message').textContent ='🤩Correct! You Win😎';
    document.body.style.backgroundColor = 'green';
    document.querySelector('.number').textContent = randnum;
    sethighscore();
}

// Game Over Function
function gameover(){
    document.body.style.backgroundColor = 'darkred';
    document.querySelector('.message').textContent ='😢Game Over😭';
}

//model close function
const close = function(){
    document.querySelector(".model").classList.add("hidden");
    document.querySelector(".overlay").classList.add("hidden");
}

//model show function
const open = function(){
    document.querySelector(".model").classList.remove("hidden");
    document.querySelector(".overlay").classList.remove("hidden");
}

//check function
document.querySelector('.check').addEventListener('click',function(){
    checknum = document.querySelector('.input').value;
    if (!checknum){
        document.querySelector('.message').textContent ='🧐Enter Value😑';
    }else if(checknum < 0){
        document.querySelector('.message').textContent ='❌Enter Valid Value❌';
    }else if(checknum > randnum){
        document.querySelector('.message').textContent ='🔻Pick Small Value🔻';
        scorecalc();
    }else if(checknum < randnum){
        document.querySelector('.message').textContent ='🔺Pick Bigger Value🔺';
        scorecalc();
    }else if(checknum == randnum){
        gamewin();
    }else{
        document.querySelector('.message').textContent ='Enter Valid Value';
    }
})

// Again Function
document.querySelector('.again').addEventListener('click',function(){
    document.body.style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent ='Start guessing...';
    document.querySelector('.score').textContent = '20';
    randfun();
    score = 20;
})

//setting the range 
document.querySelector('.setrange').addEventListener('click',function(){
    range = document.querySelector('.range').value;
    // console.log(range);
    document.querySelector('.between').textContent ='Between 1 and '+ range;
    close();
})




//range show model pop-up
document.querySelector('.open').addEventListener('click',open)

// close model pop-up
document.querySelector('.closebtn').addEventListener('click',close);
document.querySelector('.overlay').addEventListener('click',close)