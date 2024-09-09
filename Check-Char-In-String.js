const str = 'Hello world';

const checkChar = char => {
  let isTrue = false;
  for (let i = 0; i < str.length; i++) {
    if (char === str[i]) {
      isTrue = true;
    }
  }
  return isTrue;
};

console.log(checkChar('d'));
