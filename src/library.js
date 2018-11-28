const fillConsecutiveNumbersArray = function(limit){
  let array = [];
  for(let index = 0; index < limit ; index++){
    array.push(index);
  }
  return array;
}

const fillArray = function(length,filler){
  return new Array(length).fill(filler);
};

const dashline = function(length){
  if(length==0){
    return "";
  };
  return fillArray(length*4+1,"-").join("");
};

const addSpaces = function(text){
  if(text != undefined){
    return " "+text+" ";
  };
  return "";
};

const xAxis = function(length) { 
  let axis = fillConsecutiveNumbersArray(length).map(addSpaces).join("|");
  axis = [" |" + axis + "|"]; 
  axis =  axis.concat(dashline(length));
  return axis;
};

const createRow = function(array, currRow){
  let row = [];
  let column = array.map(addSpaces).join("|");
  let cell = currRow + "|"+ column +"|";
  row.push(cell);
  row.push(dashline(array.length));
  return row;
}

const printBoard = function(array){
  let board = [];
  let length = array[0].length;
  if(array[0].length == 0){
    return [""];
  }
  board = board.concat(xAxis(length));
  for(let row = 0;row < length;row++){
    board = board.concat(createRow(array[row], row));
  };
  return board;
};

module.exports = { 
  fillConsecutiveNumbersArray,
  fillArray,
  dashline,
  addSpaces,
  createRow,
  printBoard
};
