const readline = require('readline-sync'); 
const {initialGrid, generateNextWorld, generateWorld, printBoard} = require('./src/library.js'); 

const main = function() {
  let size = +readline.question("Enter size of grid:");
  let aliveCells = readline.question("Enter alive cells co-ordinates:");
  let iterations = +readline.question("Enter number of iterations:");
  let grid = generateWorld(initialGrid(size),JSON.parse(aliveCells));
  let currentState;
  console.log(printBoard(grid).join("\n") + "\n");
  for(let iteration = 0; iteration < size; iteration++) {
  let nextWorld = generateNextWorld(grid);
  currentState = printBoard(nextWorld).join("\n");
  };
  console.log(currentState); 
};

main();
