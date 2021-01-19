/*jsnack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal (backtick `)*/

var bici = [
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

var biciLeggera = bici[0];

for (var y = 1; y < bici.length; y++){
  if(bici[y].peso < biciLeggera.peso){
    biciLeggera = bici[y];
  }
}

console.log(biciLeggera.nome);

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

var teams = [
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

for (var i = 0; i < teams.length; i++){
  var thisTeams = teams[i];
  thisTeams.falli = randomNumber(0, 10);
  thisTeams.punti = randomNumber(0, 10);
}

console.log(teams);

var newTeams = [];

for (var x = 0; x < teams.length; x++){
  var oldTeams = teams[x];
  newTeams.push({
    nome: oldTeams.nome,
    falli: oldTeams.falli
  })
}

console.log(newTeams);
