function genArr(arr, min, max, amount) {
  if (arr.length < amount) {
    const intN = Math.floor(min + Math.random() * (max - min + 1));

    arr.push(intN);

    return genArr(arr, min, max, amount)
  }

  return arr;
}

function getMin(arr, min, minIdx, i) {
  if (i >= arr.length) return minIdx;

  if (min > arr[i]) {
    min = arr[i];
    minIdx = i;
  }

  return getMin(arr, min, minIdx, ++i);
}

function getMax(arr, max, maxIdx, i) {
  if (i >= arr.length) return maxIdx;

  if (max < arr[i]) {
    max = arr[i];
    maxIdx = i;
  }

  return getMax(arr, max, maxIdx, ++i);
}

function arrToString(arr, i, string) {
  if (i < arr.length) {
    string += `${i}:\t${arr[i]}\n`;

    return arrToString(arr, ++i, string);
  }

  return string;
}

const n = +prompt('Введіть значення n');

const arr = genArr([], -100000, 100000, n);

console.log('Initial array:\n', arrToString(arr, 0, ''));
console.log('Index of min num:', getMin(arr, arr[0], 0, 1));
console.log('Index of max num:', getMax(arr, arr[0], 0, 1));
