"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let D = Math.pow(b, 2) - 4 * a * c;
  if (D < 0)
    arr = [];
  else if (D === 0)
    arr.push(-b / (2 * a));
  else
    {
      arr.push((-b + Math.sqrt(D) ) / (2 * a), (-b - Math.sqrt(D) ) / (2 * a));
    }

  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthlyInterest = percent / 100 / 12;
  let debt = amount - contribution;
  let monthlyAmount = debt * ( monthlyInterest + ( monthlyInterest / (((1 + monthlyInterest) ** countMonths) - 1)));
  let totalPayment = monthlyAmount * countMonths;
  return parseFloat(totalPayment.toFixed(2));
}

