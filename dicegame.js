const rolldice=document.querySelector(".rolldice");
const newgame=document.querySelector(".newgame");
const dice=document.querySelector(".dice");
const hold=document.querySelector(".hold");
const score1=document.querySelector(".score-1");
const score2=document.querySelector(".score-2");
const currentscore1=document.querySelector(".currentscore1");
const winner1=document.getElementById("pl1");
const winner2=document.getElementById("pl2");
const test=currentscore1.innerHTML;
let currentscore2=document.querySelector(".currentscore2");
let score=0;
let finalscore0=0;
let finalscore1=0;
let a=0;
let b=0;
const players=[currentscore1,currentscore2];
const scores=[score1,score2]
const finalscores=[finalscore0,finalscore1]
const winners=[winner1,winner2];
const lasttest=["me","you"];




let getnum=function(n){
    const number=Math.floor(Math.random()*6 + 1);
    lastnumber=number<=6?number:Math.floor(number);
    return(lastnumber*n); 
    
}

function switchplayer(){
    
    score=0;
    a==0?a=1:a=0;
    a==1?b=0:b=1;

}


rolldice.addEventListener("click",diceturn);
function diceturn(){
    getnum();
    dice.src=`dice-${lastnumber}.png`;
    score+=lastnumber;
    if(lastnumber!==1){
        finalscores[a]+=lastnumber;
        players[a].innerHTML=score;
    }else{  
        switchplayer();
    }  
}

hold.addEventListener("click",holdscore);
function holdscore(){
    if(lastnumber!==1){
        scores[a].innerHTML=finalscores[a];
         players[b].innerHTML=0;
         score=0;
         if(finalscores[a]>20){
            winners[a].innerText=`PLAYER-${a+1} is winner`; 
            rolldice.removeEventListener("click",diceturn); 
    }
    }else{
        scores[b].innerHTML=finalscores[b];
         console.log(finalscores[b]);
         players[b].innerHTML=0;
         score=0;
    }      
}

newgame.addEventListener("click",newg);
function newg(){
    scores[0].innerHTML=0;
    scores[1].innerHTML=0;
    players[0].innerHTML=0;
    players[1].innerHTML=0;
    winners[b].innerText=`PLAYER-${b+1}`;
    getnum(0);
    finalscores[0]=0;
    finalscores[1]=0;
     score=0;
     a=0;
     b=0;

}

     







 










    

