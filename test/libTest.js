const {deepEqual, equal} = require('assert');
const {fillConsecutiveNumbersArray} = require('../src/library.js'); 

describe('fillConsecutiveNumbersArray', () => {
  it('should give empty array while passing zero', () => {
    deepEqual(fillConsecutiveNumbersArray(0),[]);
  });

  it('should give with list of consecutive numbers according to the size', () => {
    deepEqual(fillConsecutiveNumbersArray(3),[1,2,3]);
  });
});
