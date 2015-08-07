'use strict';

var expect = require('expect');

var fizzbuzz = require('../');

describe('FizzBuzz', function() {
  describe('.wordFor()', function() {
    it('returns "Buzz" for numbers divisible by just 5', function() {
      expect(fizzbuzz.wordFor(25)).toBe('Buzz');
    });

    it('returns "Fizz" for numbers divisible by just 3', function() {
      expect(fizzbuzz.wordFor(72)).toBe('Fizz');
    });

    it('returns the number for numbers not divisble by either', function() {
      expect(fizzbuzz.wordFor(7)).toBe('7');
    });

    context('when customized', function() {
      before(function() {
        fizzbuzz.combinations.push({
          number: 7,
          word: 'Dog'
        });
      });

      after(function() {
        fizzbuzz.combinations.pop();
      });

      it('returns "Dog" for numbers divisible by just 7', function() {
        expect(fizzbuzz.wordFor(7)).toBe('Dog');
      });

      it('returns "FizzDog" for numbers divisible by 3 and 7', function() {
        expect(fizzbuzz.wordFor(21)).toBe('FizzDog');
      });
    });
  });
});
