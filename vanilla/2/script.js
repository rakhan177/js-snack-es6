/*Si scriva una funzione che accetti tre argomenti, un array e due numeri (A più piccolo di B).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri*/


var array = ['uno', 'due', 'tre', 'quattro', 'cinque', 'sei', 'sette', 'otto', 'nove'];

var min = Number(prompt('Inserisci un valore minimo.'));
var max = Number(prompt('Inserisci un valore massimo.'));

function arrayFilter(array, numMin, numMax){
  var array1 = [];
  for(var x = 0; x < array.length; x++){
    if(x >= numMin && x < numMax){
      array1.push(array[x]);
    }
  }
  return array1;
}

var newA = arrayFilter(array, min, max);
console.log(newA)
