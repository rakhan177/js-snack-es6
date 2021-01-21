/*Si scriva una funzione che accetti tre argomenti, un array e due numeri (A più piccolo di B).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri*/


const array = ['uno', 'due', 'tre', 'quattro', 'cinque', 'sei', 'sette', 'otto', 'nove'];

const min = Number(prompt('Inserisci un valore minimo.'));
const max = Number(prompt('Inserisci un valore massimo.'));

function arrayFilter(array, numMin, numMax){
  // FOR EACH
  // const array1 = [];
  /*elemento array e suo indice, se mettiamo solo index prenderà il nome dell' elemento,
  se invece aggiungiamo index farà riferimento al suo indice.*/

  // array.forEach((item, i) => {
  //   if(i >= numMin && i <= numMax){
  //     array1.push(item);
  //   }
  // });

  // FILTER
  const array1 = array.filter((index, i) => {
    return i >= numMin && i <= numMax;
  })

  return array1;
}

var newA = arrayFilter(array, min, max);
console.log(newA)

//MAP serve a modificare tutti gli elementi dell array.
