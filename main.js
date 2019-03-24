/*
# ========================================================
# = Initialization
# ========================================================
*/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];

window.onload = init;

function init() {
    const d6Roll = document.querySelector('#d6-roll');
    d6Roll.addEventListener('click', rollD6);

    const doubleD6Roll1 = document.querySelector('#double-d6-roll-1');
    doubleD6Roll1.addEventListener('click', rollDoubleD6);
    const doubleD6Roll2 = document.querySelector('#double-d6-roll-2');
    doubleD6Roll2.addEventListener('click', rollDoubleD6);

    const d12Roll = document.querySelector('#d12-roll');
    d12Roll.addEventListener('click', rollD12);
    
    const d20Roll = document.querySelector('#d20-roll');
    d20Roll.addEventListener('click', rollD20);

    const resetButton = document.querySelector('#reset-button')
    resetButton.addEventListener('click', resetAllRolls);

    setStartingImages();
}

function setStartingImages() {
    const START_DIRECTORY = './images/start'
    const SIX_SIDED_START_IMAGE = `${START_DIRECTORY}/d6.png`;
   

    const d6Roll = document.querySelector('#d6-roll');
    d6Roll.src = SIX_SIDED_START_IMAGE;
    
    const doubleD12Roll1 = document.querySelector('#double-d6-roll-1')
    const doubleD12Roll2 = document.querySelector('#double-d6-roll-2');
    doubleD12Roll1.src = SIX_SIDED_START_IMAGE;
    doubleD12Roll2.src = SIX_SIDED_START_IMAGE;

    const d12Roll = document.querySelector('#d12-roll');
    d12Roll.src = `${START_DIRECTORY}/d12.jpeg`;
    
    const d20Roll = document.querySelector('#d20-roll');
    d20Roll.src = `${START_DIRECTORY}/d20.jpg`;
}

/*
# ========================================================
# = Roll Functions
# ========================================================
*/
function rollD6() {
   // const rand =  Math.random();
    const roll = Math.ceil(Math.random()* 6);
    sixes.push(roll)
    
   // const average = (roll / roll.length) * .length;
    //const min = Math.ceil(1);
    //const max = Math.floor(6);
    //roll.push(sixes);
    document.getElementById('d6').innerText = roll;
    let total = 0;
    for (let i = 0; i < roll.length; i+=1) {
    total += roll[i];
    }
    let average = total/roll.length;
    
    
    
    //document.getElementById('d6-averages').innerText= average;

}
    median(sixes)

    function median(number){
        let sum = 0
        let numsLen = number.length;
        number.sort();
 
    if(
        numsLen % 2 === 0 // is even
    ) {
        // average of two middle numbers
        sum = (number[numsLen / 2 - 1] + number[numsLen / 2]) / 2;
    } else { // is odd
        // middle number only
        sum = number[(numsLen - 1) / 2];
    }
 
    return sum;
    }




function rollDoubleD6() {


}

function rollD12(){


}

function rollD20(){


}

function resetAllRolls(){

    
}

/*
# ========================================================
# = Math Functions
# ========================================================
*/

/*
# ========================================================
# = Helper Functions - Stretch Goals!
# ========================================================
*/

