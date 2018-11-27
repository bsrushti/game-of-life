const fillConsecutiveNumbersArray = function(limit){
  let array = [];
  for(let index = 0; index < limit ; index++){
    array.push(index+1);
  }
  return array;
}

const createArray = function(length,filler){
  return new Array(length).fill(filler);
};

module.exports = { 
  fillConsecutiveNumbersArray,
  createArray
};
