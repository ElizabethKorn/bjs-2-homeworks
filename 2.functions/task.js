function getArrayParams(...arr) {
  let max = arr[0];
  let min = arr[0];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr.length === 0) {
      return 0;
    }
    else if (arr[i] > max) {
      max = arr[i];
    }
    else if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
    avg = sum / arr.length;
    avg = Number(parseFloat(avg.toFixed(2)));
  }
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;
  if (arr.length === 0) {
      return 0;
  }
  else {
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
      return 0;
  }
  else {
    var max = Math.max(...arr);
    var min = Math.min(...arr);
  }
  return (max - min);
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0, sumOddElement = 0;
  if (arr.length === 0) {
      return 0;
  }
  else 
  {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement+=arr[i];
      }
      else {
        sumOddElement+=arr[i];
      }
    }
  }
  return (sumEvenElement - sumOddElement);
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0, countEvenElement = 0;
  if (arr.length === 0) {
      return 0;
  }
  else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement+=arr[i];
        countEvenElement++;
      }
      else {
        continue;
      }
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
