const aggMail = prompt("Inserire la propria mail"); // input utente attraverso l'utente
let mailPresente = false; //variabile booleana per verificare le mail nell'array
let stampaMailyes = document.getElementById("yesmail");
let stampaMailno = document.getElementById("nomail");


const mailnelDatabase = [ "pippo@gmail.com", "pluto@gmail.com", "105@gmail.com" ]; //aggiunta array con mail preinserite

for(let i = 0; i < mailnelDatabase.length; i++){ //creare un ciclo per controllare se si ha gia una mail
    
    if( mailnelDatabase[i] == aggMail){
        mailPresente = true; //Se la mail è stata già confermata stampare "mail già usata"
    }
} 

if( mailPresente ){
    console.log("Mail già usata"); //Se la mail è stata già confermata stampare "mail già usata"
    stampaMailyes.innerHTML = "Mail già usata";
}
else {
    console.log("Mail disponibile"); //confermare mail se non è stata già utilizzata
    stampaMailno.innerHTML =  "Mail disponibile";
}