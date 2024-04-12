var timer=60;
var score =0;
var hitrn =0;

//jispe click karoge wo element par event raise hoga or event lustener na milne par event element ke parent pe lisner dhundega waha bhi na milne pr event kparent ke parent ke parent par listener dhundega



function increseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent=score;
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;
}

function runTimer(){

    var time = setInterval(function(){
       
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent=timer
        }else{
            clearInterval(time);
        }

    },1000)
}

function makeBubble(){
    var cluster = "";

    for( var i=1; i<=176; i++){
        var rn = Math.floor(Math.random()*10);
        cluster += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML=cluster;
}

document.querySelector("#pbtm")
.addEventListener("click",function(details){
   var clickednumber = Number(details.target.textContent);
     if(clickednumber===hitrn){
        increseScore();
        makeBubble();
        getNewHit();
     }
});


makeBubble();
runTimer();
getNewHit();
