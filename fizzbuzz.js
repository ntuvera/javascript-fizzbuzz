// for (let i = 1; i < 101; i++) {
//   i % 3 == 0
//     ? i % 5 == 0
//       ? console.log('fizzbuzz')
//       : console.log('fizz')
//     : i % 5 == 0
//       ? console.log('buzz')
//       : console.log(i);
// }

// console.log('-----------');

for (let i = 1; i < 101; i++) {
  let string = '';
  if (i % 3 == 0) {
    string += 'fizz';
  }
  if (i % 5 == 0) {
    string += 'buzz';
  }
  string = string ? string : i;

  console.log(string);
}
console.log('-----------');
