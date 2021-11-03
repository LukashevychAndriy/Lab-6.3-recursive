function genArr(arr, min, max, amount) {
  if (arr.length < amount) {
    const intN = Math.floor(min + Math.random() * (max - min + 1));

    arr.push(intN);

    return genArr(arr, min, max, amount)
  }

  return arr;
}

function getMin(arr, min, i) {
  if (i >= arr.length) return min;

  if (min > arr[i]) {
    min = arr[i];
  }

  return getMin(arr, min, ++i);
}

function getMax(arr, max, i) {
  if (i >= arr.length) return max;

  if (max < arr[i]) {
    max = arr[i];
  }

  return getMax(arr, max, ++i);
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
console.log('Min:', getMin(arr, arr[0], 1));
console.log('Max:', getMax(arr, arr[0], 1));
