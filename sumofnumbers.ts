function sumFor(array : number[]) : number {
  let output = 0;
  for (let x = 0; x < array.length; x++) {
    output += array[x];
  }
  return output;
}

function sumWhile(array : number[]) {
  let output = 0;
  let x = 0;
  while (x < array.length) {
    output += array[x];
    x++;
  }
  return output;
}

function sumRecursion(array : number[]) : number {
  if (array.length === 0) {
    return 0;
  }
  return array[0] + sumRecursion(array.slice(1));
}

function sumTheFunctionalWay(array : number[]) : number {
  let output = 0;
  array.forEach((item) => {
    output += item;
  });
  return output;
}

console.log(sumFor([1, 2, 3, 4]));
console.log(sumWhile([1, 2, 3, 4]));
console.log(sumRecursion([1, 2, 3, 4]));
console.log(sumTheFunctionalWay([1, 2, 3, 4]));
