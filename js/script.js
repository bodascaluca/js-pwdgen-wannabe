// Chiedi all’utente il suo nome
const userName = prompt(`Come ti chiami`)
console.log(userName);

// poi chiedi il suo cognome
const userBackName = prompt(`Qual'è il tuo cognome`)
console.log(userBackName);

// poi chiedi il suo colore preferito
const myFavoritColor = prompt(`Qual'è il tuo colore preferito`)
console.log(myFavoritColor);

// Numero 21
const myNumber = `12`;
console.log(myNumber);

// Sommare tutti i dati 
const greeting = `${userName} ${userBackName} ${myFavoritColor} ${myNumber}`;
console.log(greeting);

// Infine scrivi sulla pagina nomecognomecolorepreferito21
document.getElementById(`my-title`).innerHTML = greeting;




// alert('ciao')
// document.writeln('hello word')
// document.getElementById('my-title').innerHTML = 'Hello world' ;
 
// const myVariable1 = 'Ciao';
// console.log(myVariable1); 
// document.getElementById('my-title').innerHTML = myVariable1; 

// let myVaryable2 = 'Ciao mondo';
// console.log(myVariable1); /* MA SE METTIAMO QUESTO VEDIAMO PRIMA QUESTO E POI L'ALTRA STRISCIA DI CODICE */
// myVaryable2 = 'Ciao Classe 62 ' /* Il valore che vediamo èquesto ed è possibile farlo perché E' let, infatti su console possiamo vederlo */
// console.log(myVaryable2) 

// const myVariable4 = '4'; /* per il CONST dobbiamo dicchiare e assegnare un valore */

// console.log(myVariable4);

// let myVariable5 ;
// myVariable5 = '5';

// console.log(myVariable5);  

//  const myVariable = 'Ciao'; /* ALL'INTERNO DELLE VIRGOLETTE OGNI SPAZIO ALLA SUA CODIFICA QUINDI OGNI SPAZIO HA IL SUO VALORE */
//  const myVariable1 = 'Classe'

//  Type of ci dice sulla console che cos'è stringa/numero ecc..
//   console.log(myVariable, typeof(myVariable)); /* ATTENZIONE ALLE PARENTESI  */

// Con il più andiamo a cocatenare dei valori che mettiamo insime solo se sono della stessa categoria

// const myNumber = '8' ESSENDO CHE HO MESSO DENTRO LE VVIRGOLETE E' UNA STRINGA
// const myNumber = 62; /* COSI PRENDE VALORE DI NUMERO */

// const greeting = myVariable + '' + myVariable1 + '' + myNumber; /* Lo sapzio tra le due parole si vede solo se mettiamo le virgolette dentro i due plus   */

// Con questo ordine scriviamo Ciao Classe 62


// ESEMPIO 3 questo simbolo viene fatto  ` =(option + \)
// const greeting = `Buona giornata ${myVariable} ${myNumber}`; /* ATTENZIONE ALLE PARENTESI, SONO GRAFFE */

// console.log(greeting);

// const nextClass = myNumber + 1;
// console.log(nextClass); /* in questo sommiamo i due numeri */

// const result = myNumber *2;
// console.log(result);

// const myNumber3 = '12';
// const result2 = 10 + myNumber3;
//  console.log(result2, typeof(result2));// Otteniamo scritta 1012 perchè 12 è una stringa ATTENZIONE ALLA VIRGOLA DOPO RESULT2

// const myVariable1 = '12';/* Se mettiamo una stringa fin dall'inizio anche quelli dopo sono delle stringhe */
                        // Se fosse anche solo l'ultimo come stringa, sommerebbe i primi die numeri e poi mette il numero come una stringa
                        // Questo non accade con la moltiplicazione
// const myVariable2 = 10;
// const myVariable3 = 5;

// const myVariable1AsNumber = parseInt(myVariable1); /* Questa funzione ci poermtte di estrapolare i numeri delle stringhe e fare i relativi calcoli  */
                                                    // Questo è valido se il primo elemto è un nuemro cioè non jiji12, 12jijimo
                                                    // Prende solo il primo non anche i numeri quelli dopo 45jinin7njbnu8
// console.log(myVariable1AsNumber, typeof(myVariable1AsNumber));

/* il numero diventa una stringa */
// const myVariable2AsString = myVariable2.toString();
// console.log(myVariable2AsString, typeof(myVariable2AsString));

// const result = myVariable1 + myVariable2 + myVariable3;

// console.log(result, typeof(result));

/* Questione di bedtic ` oppure "" */




/* Back slash ci serve per non creare un errore di sintassi */
// const myString = `Che bello l\albero "Ma posso utilizzare li apici doppi"`

// console.log(myString);

/* ATTENZIONE ALLE VIRGOLETTE/ IL SEGNO DELLA MOLTIPLICAZIONE CHE NON C'E' */
// const myString2 = "Ciao che bello l'albero, \"ma utilizzare devo mettere dei bach slash \""

// console.log(myString2);








// Chiedere al suo utemnte e salutarlo PROMPT 

// DOCUMENTAZIONI E DATI UTENTE
// const userName = prompt (`Dimmi il tuo nome `) /* Quello che il nostro cliente scrive dentro viene salvato dentor userName */
// console.log(userName);/*  Dobbiaomo mettere questo per andare avanrti */

// ELABORAZIONE
// const hello = `Buong giorno ${userName}` /* Attenzione a queste parentesi graffe */
// console.log(hello);

// OUTPUT
// document.getElementById(`my-title`).innerHTML = hello;



