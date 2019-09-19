// for (let i = 1; i < 101; i++) {
//   let string = '';
//   i % 3 == 0
//     ? i % 5 == 0
//       ? (string += 'fizzbuzz')
//       : (string += 'fizz')
//     : i % 5 == 0
//       ? (string += 'buzz')
//       : (string += i);
//   console.log(string);
// }

// Now with less Ternary! also returns numbers not as Strings

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
