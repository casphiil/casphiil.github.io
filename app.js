localStorage.clear();
console.log(localStorage);
const diceFaces = [1,2,3,4,5,6];

let container = document.getElementById('container');
let dice;
let rollBtn = document.getElementById('btn');
let numOfDice = document.getElementById('num').value;
let sound1 = new Audio("sounds/DICE.mp3");




function randomRoll(i){    

    let result = Math.floor(Math.random()*diceFaces.length+1);

    if(dice[i].firstElementChild.className==`rotate-${result}`){
                randomRoll(i);        
    }else{
        dice[i].firstElementChild.setAttribute('CLASS',`rotate-${result}`);
        sound1.currentTime = 0 ;
        sound1.play(); 
    }    
}

rollBtn.addEventListener('click',function(){
    let spark = document.getElementById('spark');
    spark.style.display='block';
    setTimeout(()=>{
        spark.style.display='none';
    },400)
})

function roll(){
    for(let i=0; i<numOfDice; i++){ 
        randomRoll(i) 
    }    
}

function createStage(){
    numOfDice = document.getElementById('num').value;
    let snippet='';

    for(i=0; i<numOfDice ; i++ ){
        container.style.display="flex";

        snippet +=`<div class="dice-container">
                        <ul id="dice-2" >
                            <li id="front" class="faces"></li>
                            <li id="back" class="faces"></li>
                            <li id="right" class="faces"></li>
                            <li id="left" class="faces"></li>
                            <li id="bottom" class="faces"></li>
                            <li id="top" class="faces"></li>            
                        </ul>
                    </div>`
    }

    container.innerHTML=snippet;
    dice = document.querySelectorAll('.dice-container');
                                                                    
    setTimeout(function(){
        roll();
    },1);
}

