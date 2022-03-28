'use strict'
/**
 * This function calculates area and perimeter of a triangle.
 */
function calculate () {
  // input
  const length = parseInt(document.getElementById('length-of-triangle').value)
  const width = parseInt(document.getElementById('width-of-triangle').value)

  // process
  const area = length * width
  const perimeter = 2 * (length + width)

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
  document.getElementById('perimeter').innerHTML = 'Perimeter is: ' + perimeter + ' cm'
}