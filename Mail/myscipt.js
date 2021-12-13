const aggMail = prompt("Inserire la propria mail"); // input utente attraverso l'utente

const mailnelDatabase = [ "pippo@gmail.com", "pluto@gmail.com", "105@gmail.com" ]; //aggiunta array con mail preinserite

for(let i = 0; i < mailnelDatabase.length; i++){ //creare un ciclo per controllare se si ha gia una mail
    
    if( mailnelDatabase[i] == aggMail){
        console.log("Mail già usata"); //Se la mail è stata già confermata stampare "mail già usata"
    }
    else if (mailnelDatabase[i] != aggMail){
        console.log("Mail disponibile"); //confermare mail se non è stata già utilizzata
    }
} 

