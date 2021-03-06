console.log(`Welcome to this riddle game!`);

// This line randomly generates a number between 1 and 100
const soluce = Math.floor(Math.random() * 100) + 1;
console.log(`The solution is ${soluce}`);

// Add code 

/*function getNumber() 
{ 
  let number = document.getElementById("number").value; 
  console.log(number);
}*/

let number = Number(prompt(`Entrez un nombre :`));
let attempt = 0;
 
while((number !== soluce) && (attempt < 6)){
  if (number > soluce) {
    console.log(`${number} est trop grand`);
  } else if (number < soluce) {
    console.log(`${number} est trop petit`);
  }
  attempt++;
  //number = document.getElementById("number").value;
  number = Number(prompt(`Entrez un nombre:`));
}
 
if(number == soluce) {
    console.log(`Bravo ! La solution est ${soluce}`);
} else {
    console.log(`Vous avez perdu!`);
}

// DOM interaction
window.addEventListener('DOMContentLoaded', function() {
    // The DOM is ready, we can handle it
    let intro = window.document.querySelector('#intro');
    intro.innerHTML = `Welcome to this riddle game!`;
    let showSoluce = window.document.querySelector('#soluce');
    showSoluce.innerHTML = `The solution is ${soluce}`;
});


