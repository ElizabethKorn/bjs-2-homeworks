function getArrayParams(...arr) {
  let max = arr[0];
  let min = arr[0];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(...arr);
    min = Math.min(...arr);
    sum += arr[i]; 
  }
  avg = sum / arr.length;
  avg = Number(parseFloat(avg.toFixed(2)));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;
  if (arr.length === 0) {
      return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
      return 0;
  }
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return (max - min);
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0, sumOddElement = 0;
  if (arr.length === 0) {
      return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement+=arr[i];
    }
    else {
      sumOddElement+=arr[i];
    }
  }
  return (sumEvenElement - sumOddElement);
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0, countEvenElement = 0;
  if (arr.length === 0) {
      return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement+=arr[i];
      countEvenElement++;
    }
  }
  return (sumEvenElement / countEvenElement);
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = func(...arrOfArr[0]);
  for (let i = 0; i < arrOfArr.length; i++) {
    let element = func(...arrOfArr[i]);
    if (element > maxWorkerResult) {
      maxWorkerResult = element;
    }
  }
  return maxWorkerResult;
}
