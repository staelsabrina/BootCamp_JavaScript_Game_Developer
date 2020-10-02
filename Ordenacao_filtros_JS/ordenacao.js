let val = [];
let n = parseInt(gets());

for (i=1; i <= n; i++){
  val.push(parseInt(gets()));
}

let pares = val.filter((num) => {
  return (num % 2 == 0);
});

let impares = val.filter((num) => {
  return (num % 2 != 0);
});

function comPares(n1, n2){
  return n1-n2;
}

function comImpares(n1, n2){
  return n2-n1;
}

pares.sort(comPares);
impares.sort(comImpares);

for (i=0; i < pares.length; i++){
    console.log(pares[i]);
}
  
for (i=0; i < impares.length; i++){
console.log(impares[i]);
}