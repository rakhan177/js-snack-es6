/*jsnack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal (backtick `)*/

const bici = [
  {
    'nome': 'bibu',
    'peso': 40,
  },{
    'nome': 'gigi',
    'peso': 35,
  },{
    'nome': 'ruby',
    'peso': 50,
  },
];

let biciLeggera = bici[0];

for (let x = 1; x < bici.length; x++){
  if(bici[x].peso < biciLeggera.peso){
    biciLeggera = bici[x];
  }
}

console.log(biciLeggera);

const {nome, peso} = biciLeggera;

document.getElementById('container').innerHTML = `<ul><li>Nome: ${nome}</li><li>Peso: ${peso}</li></ul>`;


/*jsnack 2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/

function randomNumber(min, max) {
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
}

const teams = [
  {
    'nome': 'Milan',
    'punti': 0,
    'falli': 0,
  },{
    'nome': 'Inter',
    'punti': 0,
    'falli': 0,
  },{
    'nome': 'Juve',
    'punti': 0,
    'falli': 0,
  },
]

for (let i = 0; i < teams.length; i++){
  let thisTeams = teams[i];
  thisTeams.falli = randomNumber(0, 10);
  thisTeams.punti = randomNumber(0, 10);
}

console.log(teams);

const newTeams = [];

for (let x = 0; x < teams.length; x++){
  let oldTeams = teams[x];
  const {nome, falli} = oldTeams;
  newTeams.push({
    nome,
    falli,
  });
}

console.log(newTeams);
