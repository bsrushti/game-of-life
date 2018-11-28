const {deepEqual, equal} = require('assert');
const {
  fillConsecutiveNumbersArray,
  printBoard,
  addSpaces,
  createArray,
  dashline,
  createRow
} = require('../src/library.js'); 

describe('fillConsecutiveNumbersArray', () => {
  it('should give empty array while passing zero', () => {
    deepEqual(fillConsecutiveNumbersArray(0),[]);
  });

  it('should give with list of consecutive numbers according to the size', () => {
    deepEqual(fillConsecutiveNumbersArray(3),[1,2,3]);
  });
});

describe('printBoard', () => {
  it('should return empty board', () => {
    deepEqual(printBoard([[]]),[""]);
  });

  it('should return board with size 2*2 if input is array containing 2 arrays', () => {
    let expectedOutput = [ '---------', 
      '| 1 | 2 |', 
      '---------', 
      '| 3 | 4 |', 
      '---------' ];
    deepEqual(printBoard([[1,2],[3,4]]),expectedOutput);
  });

  it('should return board with size 4*4 if input is array containing 2 arrays', () => {
    let expectedOutput = [ '-----------------',
      '| 1 | 2 | 3 | 4 |',
      '-----------------',
      '| 4 | 5 | 6 | 7 |',
      '-----------------',
      '| 8 | 9 | 0 | 1 |',
      '-----------------',
      '| 2 | 3 | 4 | 5 |',
      '-----------------' ];
    deepEqual(printBoard([[1,2,3,4],[4,5,6,7],[8,9,0,1],[2,3,4,5]]),expectedOutput);
  });
});

describe('addSpaces',()=>{
  it('should add a space before and after the text',()=>{
    equal(addSpaces("game")," game ");
  });
  it('should return empty if you dont pass anything',()=>{
    equal(addSpaces(),"");
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

describe('createRow',()=>{
  it('should return row as per given array and current postion',()=>{
    deepEqual(createRow([1,2,3]),['| 1 | 2 | 3 |','-------------']);
    deepEqual(createRow([2,3]),[ '| 2 | 3 |', '---------' ]);
    deepEqual(createRow([3]),[ '| 3 |', '-----' ]);
  });
  it('should return empty if user passes empty',()=>{
    deepEqual(createRow([]),[]);
  });
});
