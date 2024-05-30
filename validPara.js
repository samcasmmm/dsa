var isValid = function (s) {
  const arr = [];

  for (let i = 0; i < s.length; i++) {
    const x = arr[arr.length - 1];
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      arr.push(s[i]);
    } else if (s[i] === ')' && x === '(' && arr.length !== 0) {
      arr.pop();
    } else if (s[i] === '}' && x === '{' && arr.length !== 0) {
      arr.pop();
    } else if (s[i] === ']' && x === '[' && arr.length !== 0) {
      arr.pop();
    } else {
      return false;
    }
  }
  console.log('hmm');
  return arr.length === 0 ? true : false;
};

isValid('()');
