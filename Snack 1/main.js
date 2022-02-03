// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

let vetrina=[
    {
        nome:'bici comune',
        peso:15
    },

    {
        nome:'bici da corsa',
        peso:8
    },

    {
        nome:'mountain bike',
        peso:12
    },

    {
        nome:'bici leggera',
        peso:5
    },

];

//Creo una variabile a cui do come valore il primo valore dell'array
let biciLeggera=vetrina[0];
//creo un ciclo for che scorre tutti gli elementi dell'array
for(let i=0; i<vetrina.length;i++){
    //condizione per cui assegno il valore iesimo di vetrina a bici leggera
    if(biciLeggera.peso>=vetrina[i].peso){
        biciLeggera=vetrina[i]
    }
}


let {peso,nome}=biciLeggera
console.log('Il peso è  ' + peso)
console.log('Il nome è  ' + nome)

