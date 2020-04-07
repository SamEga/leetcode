const reverseString = function (s) {
  if (s.constructor !== Array) { return 'Wrong type!'; }
  const input = s;
  const result = [];

  function recursion(input) {
    while (input.length) {
      result.unshift(input[0]);
      input.splice(0, 1);
    }
  }
  recursion(input);
  return result;
};

module.exports = reverseString;