//creation liste

let fs = require('fs');


//on lit le fichier texte et on récupère le contenu
const dictionnaire = fs.readFileSync('./randomWords.txt','utf-8', function(err,data){
    if (err) throw err;
    return data;    
});

const listeMots = dictionnaire.split('\n');

let nombreDeMots = listeMots.length;

let nombreAleatoire = Math.floor(Math.random() * nombreDeMots);

let motAleatoire = listeMots[nombreAleatoire];

console.log(motAleatoire);

// for(i=0; i<listeMots.length; i++)
// {

// }

//#region notes
/*
de manière conventionnelle au niveau du nommage des variables 
_ est utilisé au début pour les variables privées
$ pour un alias de la main function dans la libraby js

les variables déclarées avec let ne sont accessibles que dans le bloc dans lequel elles ont été déclarées
exemple:  
{
    let test = 2;
}
console.log(test);
ne fonctionnera pas
les variables déclarées avec var ne sont pas soumises à cette contrainte
*/
//#endregion
