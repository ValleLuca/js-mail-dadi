const vincitore = document.getElementById("win"); //Prendere id per stampare in html il vinctore

//aggiungere variabili

let utente = (Math.floor(Math.random()*5+1)); //aggiungere generatore Utente
let pc = (Math.floor(Math.random()*5+1)); //aggiungere generatire pc

if(utente > pc){
    console.log(utente); //stampare il vincitore in console
    vincitore.innerHTML = "Il vincitore è Utente con un punteggio di: " + utente; //stampare il vincitore su schermo nell'html
}
else if(utente < pc){
    console.log(pc); //stampare il vincitore in console
    vincitore.innerHTML = "Il vincitore è Pc con un punteggio di: " + pc; //stampare il vincitore su schermo nell'html
}else if(utente = pc){
    vincitore.innerHTML = "PAREGGIO";
};
