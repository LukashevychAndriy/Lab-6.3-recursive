function genArr(arr, min, max, amount) {
  if (arr.length < amount) {
    const intN = Math.floor(min + Math.random() * (max - min + 1));

    arr.push(intN);

    return genArr(arr, min, max, amount)
  }

  return arr;
}

function getOddAmount(arr, amount, i) {
  if (arr.length <= i) {
    return amount;
  }

  if (arr[i] % 2 !== 0) {
    amount++;
  }

  return getOddAmount(arr, amount, ++i);
}

function arrToString(arr, i, string) {
  if (i < arr.length) {
    string += `${i}:\t${arr[i]}\n`;

    return arrToString(arr, ++i, string);
  }

  return string;
}

const arr = genArr([], -100, 100, 10);

console.log('Initial array:\n', arrToString(arr, 0, ''));
console.log('Amount of odd numbers:', getOddAmount(arr, 0, 0));
