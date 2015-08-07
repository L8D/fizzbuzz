'use strict';

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports === 'object') {
    factory(exports);
  } else {
    root.FizzBuzz = {};

    factory(root.FizzBuzz);
  }
})(this, function(exports) {
  exports.combinations = [
    {number: 3, word: 'Fizz'},
    {number: 5, word: 'Buzz'}
  ];

  exports.wordFor = wordFor;
  exports.run = run;

  function wordFor(number) {
    var result = '';

    exports.combinations.forEach(function(combination) {
      if (number % combination.number === 0) {
        result += combination.word;
      }
    });

    return result || number.toString();
  }

  function run() {
    for (var i = 1; i <= 100; i++) {
      console.log(findWord(i));
    }
  }
});
