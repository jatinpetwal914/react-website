const jsQuestions = [
  {
    id: 'javascript-1',
    folder: '18 Feb',
    number: 1,
    tech: 'JavaScript',
    title: 'Credit Card Validation',
    code: `function validateCard(num) {
  const clean = num.replace(/\\D/g, '');
  const isVisa = /^4(\\d{12}|\\d{15})$/.test(clean);
  const isMaster = /^5[1-5]\\d{14}$/.test(clean);
  const isAmex = /^(34|37)\\d{13}$/.test(clean);
  return isVisa || isMaster || isAmex;
}`,
  },
  {
    id: 'javascript-2',
    folder: '18 Feb',
    number: 2,
    tech: 'JavaScript',
    title: 'Name, Email and Password Validation',
    code: `const rules = {
  name: /^[A-Za-z\\s]{3,}$/,
  email: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/,
  password: /^(?=.*[A-Z])(?=.*\\d).{8,}$/
};`,
  },
  {
    id: 'javascript-3',
    folder: '18 Feb',
    number: 3,
    tech: 'JavaScript',
    title: 'Country-Capital Match Checker',
    code: `const capitals = { India: 'New Delhi', Japan: 'Tokyo', France: 'Paris' };
function check(country, capital) {
  return capitals[country] === capital ? 'Correct answer' : 'Wrong. Correct: ' + capitals[country];
}`,
  },
  {
    id: 'javascript-4',
    folder: '18 Feb',
    number: 4,
    tech: 'JavaScript',
    title: 'Simple Calculator',
    code: `function calculate(a, b, op) {
  if (op === '+') return a + b;
  if (op === '-') return a - b;
  if (op === '*') return a * b;
  if (op === '/') return b === 0 ? 'Cannot divide by zero' : a / b;
  return 'Invalid operator';
}`,
  },
  {
    id: 'javascript-5',
    folder: '19 Feb',
    number: 5,
    tech: 'JavaScript',
    title: 'Self-Modifying Page Every Minute',
    code: `setInterval(function () {
  const now = new Date().toLocaleTimeString();
  document.getElementById('status').textContent = 'Page updated at ' + now;
}, 60000);`,
  },
  {
    id: 'javascript-6',
    folder: '19 Feb',
    number: 6,
    tech: 'JavaScript',
    title: 'Running Clock',
    code: `setInterval(function () {
  document.getElementById('clock').textContent = new Date().toLocaleTimeString();
}, 1000);`,
  },
  {
    id: 'javascript-7',
    folder: '19 Feb',
    number: 7,
    tech: 'JavaScript',
    title: 'Birthdate to Day of Week',
    code: `function showDay(value) {
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const day = days[new Date(value).getDay()];
  alert('Day is: ' + day);
}`,
  },
  {
    id: 'javascript-8',
    folder: '19 Feb',
    number: 8,
    tech: 'JavaScript',
    title: 'Telephone Split Tokenization',
    code: `const phone = '(555)555-5555';
const parts = phone.split('-');
const area = parts[0].replace('(', '').replace(')', '');
const number = parts[1];
console.log(area, number);`,
  },
  {
    id: 'javascript-9',
    folder: '21 Feb',
    number: 9,
    tech: 'JavaScript',
    title: 'Left-most Vowel Position and Reverse Number',
    code: `function leftMostVowel(str) {
  const index = str.search(/[aeiou]/i);
  return index >= 0 ? index : -1;
}
function reverseNumber(n) {
  return Number(String(n).split('').reverse().join(''));
}`,
  },
  {
    id: 'javascript-10',
    folder: '21 Feb',
    number: 10,
    tech: 'JavaScript',
    title: 'Case Toggle Converter',
    code: `function toggleCase(text) {
  return text.split('').map(function (ch) {
    return ch === ch.toUpperCase() ? ch.toLowerCase() : ch.toUpperCase();
  }).join('');
}`,
  },
  {
    id: 'javascript-11',
    folder: '21 Feb',
    number: 11,
    tech: 'JavaScript',
    title: 'Maruti Model Survey by Metro City',
    code: `const report = {
  Delhi: { K10: 12, Zen: 7, Wagnor: 9, SX4: 4 },
  Mumbai: { K10: 8, Zen: 5, Wagnor: 11, SX4: 6 },
  Chennai: { K10: 6, Zen: 9, Wagnor: 8, SX4: 3 },
  Kolkatta: { K10: 7, Zen: 8, Wagnor: 6, SX4: 5 }
};`,
  },
]

export default jsQuestions
