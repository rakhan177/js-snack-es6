/*Si scriva una funzione che accetti tre argomenti, un array e due numeri (A più piccolo di B).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri*/


var arr = ['uno', 'due', 'tre', 'quattro', 'cinque', 'sei', 'sette', 'otto', 'nove'];

function extractArray(array, numMin, numMax){
  var array1 = [];
  var a = numMin;
  for(var x = 0; x < array.length; x++){
    if(array[a]){
      array1.push(array[a]);
      a += 1;
    }
    if(a === numMax + 1){
      break;
    }
  }
  return array1;
}

var nuovo = extractArray(arr, 2, 6);
console.log(nuovo);
