const authorizedList = ["gianni@party.it", "giorgio@party.it", "fabio@party.it"];
let userMail, message, buttonInteraction;

buttonInteraction = document.getElementById("buttonId");
// chiedo all'utente la sua e-mail per l'autorizzazione all'accesso

buttonInteraction.addEventListener('click',
    function(){
        userMail = document.querySelector("input").value;
        console.log(userMail);

        // controllo se l'e-mail richiesta fa parte della lista e-mail con accesso autorizzato

        for (let i = 0; i <= authorizedList.length - 1; i++){

            if( authorizedList[i] == userMail ){
                message = "Sei dei nostri, entra pure e divertiti capitano! :)";
                i = authorizedList.length; // oppure break; oppure ancora eliminare linea 17 e l'else e dare di base a message un messaggio di fallimento log in cosi da che il messaggio cambia in output è diverso solo se le mail sono uguali sul controllo se no non avviene l'accesso
            }
            else{
                message = "Non fai parte dei cool boys, mi dispiace ritenta la prossima volta :/";
            }
            console.log(authorizedList[i]);
            
        }
        // stampo in output un messaggio appropriato per l'utente (alert)
        console.log(message);
        alert(message);
        }
            
    
);







