//var dichiara una variabile visibile globalmente
//dichiarazione di una variabile
let message;  // Creazione di uno "spazio di memoria con nome" 
//assegnazione di un valore in js
message='Hello'; 
//TIpi di dati
//stringa
let name='Pietro'; 
//intero
let age=18;
//decimal
let pi=3.14;
//boolean
let isLogged=true;
//variabile null
let empty=null;
//array omogeneo
let colors=['red','green','blue'];
//array eterogeneo
let user=[name,age,isLogged];
//stampo le variabili e il loro tipo
console.log(name, typeof name);
console.log(age, typeof age);
console.log(pi, typeof pi);
console.log(isLogged, typeof isLogged);
console.log(empty, typeof empty);
console.log(colors, typeof colors);
console.log(user, typeof user);

const newElement =document.createElement('div');
newElement.textContent ='New Element';
document.body.appendChild(newElement);

newElement.addEventListener('click', ()=>{
    console.log('Clicked');
})