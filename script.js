'use strict';
// declareing needed variables
let checknum, randnum, highscore=0, score = 20 ;

//random number genrator Function
randfun();
function randfun(){
    randnum = Math.floor(Math.random()*20+1);
}

//Score Calculator Function
function scorecalc(){
    --score
    document.querySelector('.score').textContent = score;
    if(score == 0){
    gameover()
    };  
}

//Highscore Function
function sethighscore(){
    // console.log(highscore)
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

//check function
console.log(randnum);
document.querySelector('.check').addEventListener('click',function(){
    checknum = document.querySelector('.guess').value;
    if (!checknum){
        document.querySelector('.message').textContent ='🧐Enter Value😑';
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
    console.log(randnum);
    score = 20;
})

