"use strict"
function solveEquation(a, b, c) {
  
  const discriminant = b ** 2 - 4 * a * c;

  // Проверка значения дискриминанта
  if (discriminant < 0) {
      return [];
  } else if (discriminant === 0) {
      const root = -b / (2 * a);
      return [root];
  } else {
      const sqrtDiscriminant = Math.sqrt(discriminant);
      const root1 = (-b + sqrtDiscriminant) / (2 * a);
      const root2 = (-b - sqrtDiscriminant) / (2 * a);
      return [root1, root2]; 
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

    const monthlyInterestRate = (percent / 100) / 12;
    
    const principalAmount = amount - contribution;

    const monthlyPayment = principalAmount * (monthlyInterestRate + (monthlyInterestRate /((Math.pow(1 + monthlyInterestRate, countMonths)) - 1)));
    
    const totalMortgage = monthlyPayment * countMonths;
    
    return Number(totalMortgage.toFixed(2));
}
