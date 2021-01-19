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
var control = 0;


for(var i = 0; i < array.length; i++){
  if(array[0] < array[1]){
    control = 1;
  }else if(array[1] < array[2]){
    control = 2;
  }else{
    control = 3;
  }
}

if(control === 1){
  console.log(bici[0].nome)
}else if(control === 2){
  console.log(bici[1].nome)
}else{
  console.log(bici[2].nome)
}
