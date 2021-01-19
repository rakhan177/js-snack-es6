/*Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore*/

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

for (var x = 1; x < bici.length; x++){
  if(bici[x].peso < biciLeggera.peso){
    biciLeggera = bici[x];
  }
}

console.log(biciLeggera.nome);
