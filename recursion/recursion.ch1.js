const reverseString = function (s) {
  if (s.constructor !== Array) { return 'Wrong type!'; }
  const input = s;
  const result = [];

  function recursion(value) {
    while (value.length) {
      result.unshift(value[0]);
      value.splice(0, 1);
    }
  }
  recursion(input);
  return result;
};

module.exports = reverseString;