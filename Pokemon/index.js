'use strict';
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let numPok  = getRandomInt(1, 898)
Pokemon.getPokemon(numPok)

document.querySelector("#Siguiente")
document.querySelector("#Anterior")

document.querySelector("#Siguiente").addEventListener("click", function(){
    if( numPok == 10228)
    {
        numPok = 1
    }
    else{
        numPok = numPok + 1
    }
    Pokemon.getPokemon(numPok)
})
document.querySelector("#Anterior").addEventListener("click", function(){
    if(numPok == 1){
        numPok = 10228
    }
    else{ 
        numPok = numPok - 1
    }
    Pokemon.getPokemon(numPok)
})