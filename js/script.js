// DICHIARAZIONE DEI DATI
//chiedere all'utente il nome
const userName = prompt ('Inserisci qui il tuo nome');
console.log(userName);
//chiedere all'utente il cognome
const userSurName = prompt ('Inserisci qui il tuo cognome');
console.log(userSurName);
//chiedere all'utente il colore preferito
const favouriteColor = prompt ('Inserisci qui il tuo colore preferito');
console.log(favouriteColor);

// ELABORAZIONE
//creare il messaggio da visualizzare in fase di output
const yourPassword = `La tua password sicurissima è: ${userName}${userSurName}${favouriteColor}21`;
console.log(yourPassword, typeof(yourPassword));

// OUTPUT
//stampare il messaggio sul browser
document.getElementById('my-password').innerHTML = yourPassword;