const fillConsecutiveNumbersArray = function(limit){
  let array = [];
  for(let index = 0; index < limit ; index++){
    array.push(index);
  }
  return array;
}

const fillArray = function(filler){
  return function(length) {
    return new Array(length).fill(filler);
  }
};

const dashline = function(length){
  if(length==0){
    return "";
  };
  return fillArray("-")(length*4+2).join("");
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

const initialBoard = function(length) { 
  let arrayOfRowLength = fillArray(length)(length);
  return printBoard(arrayOfRowLength.map(fillArray(" ")));
};

const initialGrid = function(size) { 
  let grid = new Array(size).fill(size).map(x => new Array(x).fill(0));
  return grid;
};

const generateWorld  = function(grid,aliveCells) {
  for(let aliveCell of aliveCells){
    grid[aliveCell[0]][aliveCell[1]] = 1;
  };
  return grid;
};

const cartesian = function(set1,set2){
  let resultSet = [];
  let length = set1.length;
  for(let rowIndex = 0; rowIndex < length; rowIndex++){
    for(let columnIndex = 0; columnIndex < length; columnIndex++){
      resultSet.push([set1[rowIndex],set2[columnIndex]]);
    };
  };
  return resultSet;
};

const predicate = function(cell, neighbour) {
  return !(cell[0]==neighbour[0] && cell[1]==neighbour[1]);
};

const checkRangeForNegativeNumbers = function(cell) {
  return (cell[0] >= 0 && cell[1] >= 0);
};

const isCoordinatesGreaterThanBoard = function(boardSize, cell) {
  return (cell[0] < boardSize && cell[1] < boardSize);
};

const validNeighbors = function(possibleNeighbors, cell, size) {
  let isVallid = predicate.bind(null,cell);
  let validNeighbors = possibleNeighbors.filter(isVallid);
  validNeighbors = validNeighbors.filter(checkRangeForNegativeNumbers);
  let checkGreaterThanBoard = isCoordinatesGreaterThanBoard.bind(null,size);
  validNeighbors = validNeighbors.filter(checkGreaterThanBoard);
  return validNeighbors;
};

const findingNeighbors = function(size, cell) {
  let rowCoordinates = [cell[0]-1, cell[0], cell[0]+1];
  let coloumnCoordinates = [cell[1]-1, cell[1], cell[1]+1];
  let possibleNeighbors = cartesian(rowCoordinates, coloumnCoordinates);
  let neighbors = validNeighbors(possibleNeighbors, cell, size);
  return neighbors;
};

module.exports = { 
  fillConsecutiveNumbersArray,
  fillArray,
  dashline,
  addSpaces,
  createRow,
  printBoard,
  initialBoard,
  initialGrid,
  generateWorld,
  cartesian,
  validNeighbors,
  findingNeighbors
};
