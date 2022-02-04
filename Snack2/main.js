// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. 

let campionato=[
    {
        'nome': 'montagna',
        'punti_fatti':0,
        'falli_subiti':0
    },
    {
        'nome': 'pianura',
        'punti_fatti':0,
        'falli_subiti':0
    },
    {
        'nome':'mare',
        'punti_fatti':0,
        'falli_subiti':0
    }
];

for(let i=0; i<campionato.length; i++){
    campionato[i].punti_fatti= getRandomNumber(0,50);
    campionato[i].falli_subiti= getRandomNumber(0,18);

}


let myArrayFalliNomi=[];
for(let i=0; i<campionato.length; i++){
    let squadra=campionato[i];
    let{ nome, falli_subiti}=squadra;
    
    myArrayFalliNomi.push({nome, falli_subiti})
}
console.log(myArrayFalliNomi)

function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min +1)) + min;
}