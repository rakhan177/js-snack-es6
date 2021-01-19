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

var array = [];

for(var x = 0; x < bici.length; x++){
  for(var key in bici[x]){
    if(key === 'peso'){
      array.push(bici[x][key])
    }
  }
}

console.log(array);

for(var i = 0; i < array.length; i++){
  if(array[0] < array[1]){
    console.log('quella che pesa meno pesa: ' + array[0])
  }else if(array[1] < array[2]){
    console.log('quella che pesa meno pesa: ' + array[1])
  }else{
    console.log('quella che pesa meno pesa: ' + array[2])
  }
}
