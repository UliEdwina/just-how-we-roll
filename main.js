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
    const d6Roll = document.querySelector('#d6-button');
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
    const roll = Math.ceil(Math.random() * 6);
    sixes.push(roll);

    let inputs = sixes;

    // const average = (roll / roll.length) * .length;
    //const min = Math.ceil(1);
    //const max = Math.floor(6);

    // Appends last roll
   // document.getElementById('d6').innerText = roll;

    let total = 0;
    
    
    // 
    for (let i = 0; i < inputs.length; i += 1) {
        total += inputs[i];
    }

    // Calculates mean
    const mean = total / inputs.length;

    // Shows mean
    document.getElementById('d6-rolls-mean').innerText = mean;

    // Updates dice image // Note that we can also use querySelector instead of getElementById
    const imagePath = './images/d6/' + roll + '.png';
    document.querySelector('#d6-roll').setAttribute('src', imagePath);
//median

    

    const list = sixes;
   // const mid = Math.floor(list.length / 2);

    list.sort();
    const sortedNumbers = list.sort();
    const median = Math.floor(sortedNumbers.length / 2);
     
   // return sortedNumbers[middleIndex];
        document.getElementById('d6-rolls-median').innerText = median;

    //if(list.length % 2 === 0) {
      //  return list[Math.floor()];
    //} else {
   //     return list[mid]; 
   // }
        
       
    }
    
    


    function rollDoubleD6() {
        // const roll = Math.ceil(Math.random() * 6);
        const roll1 = getRandomRoll();
        const roll2 = getRandomRoll();
        doubleSixes.push(roll1);
        doubleSixes.push(roll2);
        let inputs = doubleSixes;
    
        let total = 0;
        
        
        // 
        for (let i = 0; i < inputs.length; i += 1) {
            total += inputs[i];
        }
    
        // Calculates mean
        const mean = total / inputs.length;
    
        // Shows mean
        document.getElementById('double-d6-rolls-mean').innerText = mean;
        
        const list = doubleSixes;
        list.sort();
        const sortedNumbers = list.sort();
        const median = Math.floor(sortedNumbers.length / 2);
     
   //   shows median
        document.getElementById('double-d6-rolls-median').innerText = median;


        const imagePath = './images/d6/' + roll1 + '.png';
        document.querySelector('#double-d6-roll-1').setAttribute('src', imagePath);

        const imagePath2 = './images/d6/' + roll2 + '.png';
        document.querySelector('#double-d6-roll-2').setAttribute('src', imagePath2);
        }
        
        function rollD12() {
            const roll = Math.ceil(Math.random() * 20);
        twelves.push(roll);
        let inputs = twelves;
    
        let total = 0;
        
        
        // 
        for (let i = 0; i < inputs.length; i += 1) {
            total += inputs[i];
        }
    
        // Calculates mean
        const mean = total / inputs.length;
    
        // Shows mean
        document.getElementById('d12-rolls-mean').innerText = mean;
        
        const list = twelves;
        list.sort();
        const sortedNumbers = list.sort();
        const median = Math.floor(sortedNumbers.length / 2);
     
   //   shows median
        document.getElementById('d12-rolls-median').innerText = median;
            const imagePath = './images/numbers/' + roll + '.png';
            document.querySelector('#d12-roll').setAttribute('src', imagePath);
            
        }
        
        function rollD20() {
            const roll = Math.ceil(Math.random() * 20);
            twenties.push(roll);
            let inputs = twenties;
        
            let total = 0;
            
            
            // 
            for (let i = 0; i < inputs.length; i += 1) {
                total += inputs[i];
            }
        
            // Calculates mean
            const mean = total / inputs.length;
        
            // Shows mean
            document.getElementById('d20-rolls-mean').innerText = mean;
            
            const list = twenties;
            list.sort();
            const sortedNumbers = list.sort();
            const median = Math.floor(sortedNumbers.length / 2);
         
       //   shows median
            document.getElementById('d20-rolls-median').innerText = median;
                const imagePath = './images/numbers/' + roll + '.png';
                document.querySelector('#d20-roll').setAttribute('src', imagePath);
        
        }

function resetAllRolls(){
    sixes = [];
    doubleSixes = [];
    twelves = [];
    twenties = [];

    setStartingImages();
}

/*
# ========================================================
# = Math Functions
# ========================================================
*/
function getRandomRoll(max){
    const roll = Math.ceil(Math.random() * 6);

    return roll;
}

/*
# ========================================================
# = Helper Functions - Stretch Goals!
# ========================================================
*/

function getMedian (numbers) {
    const list = [...numbers];
    const mid = Math.floor(list.length / 2);

    list.sort();

    if(list.length % 2 === 0) {
        return list[Math.floor()];
    } else {
        return list[mid]; 
    }
}