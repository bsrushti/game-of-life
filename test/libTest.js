const {deepEqual, equal} = require('assert');
const {
  fillConsecutiveNumbersArray,
  fillArray,
  dashline
} = require('../src/library.js'); 

describe('fillConsecutiveNumbersArray', () => {
  it('should give empty array while passing zero', () => {
    deepEqual(fillConsecutiveNumbersArray(0),[]);
  });

  it('should give with list of consecutive numbers according to the size', () => {
    deepEqual(fillConsecutiveNumbersArray(3),[1,2,3]);
  });
});

describe('fillArray',()=>{
  it('should return empty array for 0 as input',()=>{
    deepEqual(fillArray(0,0),[]);
  });
  it('should return array for given size and fill that as per input',()=>{
    deepEqual(fillArray(1,0),[0]);
  });
  it('should return array for given size and fill that as per input',()=>{
    deepEqual(fillArray(2,"a"),["a","a"]);
  });
});

describe('dashline',()=>{
  it('should return nothing if the input is 0',()=>{
    equal(dashline(0),"");
  });
  it('should return dashes as per the given input',()=>{
    equal(dashline(1),"-----");
    equal(dashline(2),"---------");
    equal(dashline(3),"-------------");
  });
});

