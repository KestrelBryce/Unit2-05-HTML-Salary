'use strict'
/**
 * This function calculates the amount of tax the Canadian government takes from your paycheck.
 */

function calculate() {
  // input
  let worked = parseInt(document.getElementById('number-hours-worked').value)
  let rate = parseInt(document.getElementById('hourly-pay-rate').value)

  // process
  const TAX_RATE = 0.1805
  let beforeTax = worked * rate 
  let tax = TAX_RATE * beforeTax
  let afterTax = beforeTax - tax

  // output
  document.getElementById('area').innerHTML = 'Your salary is $' + beforeTax.toFixed(2) + ', but the final salary that you will recieve is $' + afterTax.toFixed(2) + ". This is because the government needs your money more than you and took $" + tax.toFixed(2) + " straight out of your pocket. Spend your money before they can take it, they can't take what you don't have."
}