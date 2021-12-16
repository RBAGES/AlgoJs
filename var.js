//3 manières de déclarer des variables en js: le var, le let (ne se définit qu'une seule fois) et const pour les constantes

//#region declarations

let bonjour = 'Bonjour'; // string
let number = 10; //int
let vraiFaux = true; //bool
const lol = ['tank','mid','top'];

let prenom = 'Rémy';
let age = 27;
let activite = 'dessiner';

let listeVar = new Array();
listeVar.push(prenom);
listeVar.push(age);
listeVar.push(activite);
listeVar.push(vraiFaux);

//#endregion

//#region functions

function sayHello(){
    console.log('\n' + bonjour + ' je m\'appelle ' + prenom + ', j\'ai '+ age + ' et j\'aime '+ activite + ' sur mon temps libre.' );
}

sayHello();

//#endregion

//#region testPerso 
console.log('')
listeVar.forEach(element =>{
    console.log('type de '+ element + ' = ' + typeof element);
});
// console.log('\n' + 'type de vraiFaux : '+ typeof(vraiFaux)); //typeOf permet d'afficher le type d'une variable
let tableau10 = new Array(10); //declare an empty array of a defined size
for(i=0; i<tableau10.length; i++){
    tableau10[i] = i;
}
tableau10.forEach(element => {
    // console.log(element);
});
//#endregion

//#region tryItYourself
var x = 5, y = 6.23, z = x + y; 
console.log(z);
var person = "John Doe";

var x = 2;    // Allowed
// let x = 3;    // Not allowed

{
let x = 2;    // Allowed
// let x = 3     // Not allowed
}

{
let x = 2;    // Allowed
// var x = 3     // Not allowed
}
 // You can create a const object:
 const car = {type:"Fiat", model:"500", color:"white"};

 // You can change a property:
 car.color = "red";
 
 // You can add a property:
 car.owner = "Johnson"; 

 console.log(car);

//#endregion

//#region notes

//principe kiss = keep it simple and stupid. Décomposer les problèmes en petits morceaux simples

//#endregion notes