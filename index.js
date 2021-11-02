function genArr(arr, min, max, amount) {
  if (arr.length < amount) {
    const intN = Math.floor(min + Math.random() * (max - min + 1));

    arr.push(intN);

    return genArr(arr, min, max, amount)
  }

  return arr;
}

function getSum(arr, i, sum) {
  if (i < arr.length) {
    if (arr[i] % 2 === 0 || !(i % 8 === 0)) {
      sum += arr[i];
    }

    return getSum(arr, ++i, sum);
  }

  return sum;
}

function getAmount(arr, i, amount) {
  if (i < arr.length) {
    if (arr[i] % 2 === 0 || !(i % 8 === 0)) {
      amount++
    }

    return getAmount(arr, ++i, amount);
  }

  return amount;
}

function setZero(arr, i) {
  if (i < arr.length) {
    if (arr[i] % 2 === 0 || !(i % 8 === 0)) {
      arr[i] = 0;
    }

    return setZero(arr, ++i);
  }
}

function arrToString(arr, i, string) {
  if (i < arr.length) {
    string += `${i}:\t${arr[i]}\n`;

    return arrToString(arr, ++i, string);
  }

  return string;
}

const arr = genArr([], 5, 90, 25);

console.log('Initial array:\n', arrToString(arr, 0, ''));
console.log('Sum:', getSum(arr, 0, 0));
console.log('Amount:', getAmount(arr, 0, 0));
setZero(arr, 0);
console.log('Changed array:\n', arrToString(arr, 0, ''));
