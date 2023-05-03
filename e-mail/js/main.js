const authorizedList = ["gianni@party.it", "giorgio@party.it", "fabio@party.it"];
let userMail, message;


// chiedo all'utente la sua e-mail per l'autorizzazione all'accesso

userMail = prompt("Inserisci la tua e-mail per accedere: ");
console.log(userMail);


// controllo se l'e-mail richiesta fa parte della lista e-mail con accesso autorizzato

for (let i = 0; i <= authorizedList.length - 1; i++){

    if( authorizedList[i] == userMail ){
         message = "Sei dei nostri, entra pure e divertiti capitano! :)";
         i = authorizedList.length;
    }
    else{
        message = "Non fai parte dei cool boys, mi dispiace ritenta la prossima volta :/";
    }
    console.log(authorizedList[i]);
    
}
// stampo in output un messaggio appropriato per l'utente (alert)
console.log(message);
alert(message);
