const input = [
  { a: 23, b: "asdf" },
  { a: 344, b: "eee" },
  { a: 444, b: "22" },
  { a: 333, b: "ere" },
];

const concatEvenStrings = function (input) {
  let result = [];
  input.map(function (item) {
    if (item.a % 2 === 0) {
      result.push(item.b);
    }
  });
  return result.join("|");
};

console.log(concatEvenStrings(input));
