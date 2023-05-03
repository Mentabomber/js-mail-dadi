


let userRoll, computerRoll, buttonInteraction;

buttonInteraction = document.getElementById("buttonId");

buttonInteraction.addEventListener('click',
    function(){

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
function getRandomInt(max) {
    return Math.floor(Math.random() * 6 + 1);
  }

  userRoll = getRandomInt();
  computerRoll = getRandomInt();
//   console.log("l'utente ha rollato il numero: " + userRoll);
//   console.log("il computer ha rollato il numero: " + computerRoll);

// Stabilire il vincitore, in base a chi fa il punteggio più alto.
  if (userRoll === computerRoll){
    message = "pari, ritira"
  }
  else if ( userRoll < computerRoll ){
    message = "il computer vince"
  }
  else{
    message = "hai vinto"
  }

//   console.log(message);
  document.getElementById("userRoll").innerHTML = ("l'utente ha rollato il numero: " + userRoll);
  document.getElementById("computerRoll").innerHTML = ("il computer ha rollato il numero: " + computerRoll);
  document.getElementById("result").innerHTML = (message);
}
);