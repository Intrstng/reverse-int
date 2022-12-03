module.exports = function reverse (n) {
  let newArr = n.toString().split('').reverse();

  if (newArr[newArr.length - 1] === '-') newArr.pop();
  return parseInt(newArr.join(''));
}