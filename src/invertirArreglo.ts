let dimensionArray: number = Number(prompt(`Ingrese la dimension del arreglo`));
let num: number[] = new Array(dimensionArray);
let i: number;
let reverse: number[] = [];

for (i = 0; i < num.length; i++) {
  num[i] = Number(prompt(`Ingrese numero de la posicion ${i + 1}`));
}
for (i = num.length - 1; i >= 0; i--) {
  reverse.push(num[i]);
}
console.log(`Los numeros del array son: ${num}`);
console.log(`Los numeros invertidos del array son: ${reverse}`);
