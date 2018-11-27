const {deepEqual, equal} = require('assert');
const {
  fillConsecutiveNumbersArray,
  createArray
} = require('../src/library.js'); 

describe('fillConsecutiveNumbersArray', () => {
  it('should give empty array while passing zero', () => {
    deepEqual(fillConsecutiveNumbersArray(0),[]);
  });

  it('should give with list of consecutive numbers according to the size', () => {
    deepEqual(fillConsecutiveNumbersArray(3),[1,2,3]);
  });
});

describe('createArray',()=>{
  it('should return empty array for 0 as input',()=>{
    deepEqual(createArray(0,0),[]);
  });
  it('should return array for given size and fill that as per input',()=>{
    deepEqual(createArray(1,0),[0]);
  });
  it('should return array for given size and fill that as per input',()=>{
    deepEqual(createArray(2,"a"),["a","a"]);
  });
});

