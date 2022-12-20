const BCount = document.querySelector('.BCount')
const GCount = document.querySelector('.GCount')
const voteBoy = document.querySelector('.voteBoy'); 
const voteGirl = document.querySelector('.voteGirl'); 

//! logic that starts off the count
let boyCount = 0; 

let girlCount = 0; 

//! functions that set the original counts 
function setBoyCount() {
    BCount.textContent = boyCount; 
}
function setGirlCount() {
    GCount.textContent = girlCount; 
}

//! functions that handle increment count 
function voteForBoy() {
    boyCount++; 
    console.log(boyCount); 
    setBoyCount(); 
}

function voteForGirl() {
    girlCount++; 
    console.log(girlCount); 
    setGirlCount(); 
}
//! event handlers
voteBoy.addEventListener('click', voteForBoy); 

voteGirl.addEventListener('click', voteForGirl); 

//! functions that need to be running 
setBoyCount(); 
setGirlCount(); 
