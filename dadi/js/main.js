


let userRoll, computerRoll;

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
function getRandomInt(max) {
    return Math.floor(Math.random() * 6 + 1);
  }

  userRoll = getRandomInt();
  computerRoll = getRandomInt();
  console.log("l'utente ha rollato il numero: " + userRoll);
  console.log("il computer ha rollato il numero: " + computerRoll);
  
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

  console.log(message);