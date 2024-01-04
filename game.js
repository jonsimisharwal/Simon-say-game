let gamesequence=[];
let usersequence=[];
let started=false;
let level=0;
let btns=["red","yellow","green","blue"];
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
  if(started==false){
   console.log("game started");
   started = true;
  }
  levelup();
});
function gameflash(btn){
   btn.classList.add("Gameflash");
   setTimeout(function(){
      btn.classList.remove("Gameflash");
   }, 1000);
}
function userflash(btn){
btn.classList.add("UserFlash");
setTimeout(function(){
   btn.classList.remove("UserFlash");
},250);
}
function levelup(){
   usersequence=[];
   level++;
h2.innerText=`level${level} `;
let randomidx=Math.floor(Math.random()*3);
let randomcolor=btns[randomidx];
let randombtn=document.querySelector(`.${randomcolor}`);
gamesequence.push(randomcolor);
console.log(gamesequence);
gameflash(randombtn);
}

function checkAns(idx){
     
     if(gamesequence[idx]=== usersequence[idx]){
      if(usersequence.length===gamesequence.length){
         setTimeout(levelup,1000);
      }
     }else{
      h2.innerHTML=`game over! your score was <b>${level}</b><br>press any key to start</br>`;
      for(let key=0;key<=usersequence.length-1;key++){
         console.log("highest score is",key);
      }
     document.querySelector("body").style.backgroundColor="red";
      setTimeout(function(){
         document.querySelector("body").style.backgroundColor="white";
      },150);
      reset();
     }
}

function btnpress(){
   console.log(this);
   let btn=this;
   userflash(btn);
  usercolor=btn.getAttribute("id");
    usersequence.push(usercolor);


    checkAns(usersequence.length-1);
}

let allbtns=document.querySelectorAll(`.btn`);
for(btn of allbtns){
   btn.addEventListener("click",btnpress);
} 


function reset(){
   started=false;
   gamesequence=[];
   usersequence=[];
   level=0;
}