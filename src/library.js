const fillConsecutiveNumbersArray = function(limit){
  let array = [];
  for(let index = 0; index < limit ; index++){
    array.push(index+1);
  };
  return array;
};

const createArray = function(length,filler){
  return new Array(length).fill(filler);
};

const dashline = function(length){
  if(length==0){
    return "";
  };
  return createArray(length*4+1,"-").join("");
};

const printBoard = function(array){
  let board = [];
  let length = array[0].length;
  board.push(dashline(length));
  for(let row = 0;row < length;row++){
    board = board.concat(createRow(array[row]));
  };
  return board;
};

const createRow = function(array){
  let row = [];
  if(array.length == 0){
    return array;
  }
  let column = array.map(addSpaces).join("|");
  let cell = "|"+column+"|";
  row.push(cell);
  row.push(dashline(array.length));
  return row;
};

const addSpaces = function(text){
  if(text != undefined){
    return " "+text+" ";
  };
  return "";
};

module.exports = { 
  fillConsecutiveNumbersArray,
  printBoard,
  addSpaces,
  createArray,
  dashline,
  createRow
};
