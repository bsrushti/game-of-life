const fillConsecutiveNumbersArray = function(limit){
  let array = [];
  for(let index = 0; index < limit ; index++){
    array.push(index+1);
  }
  return array;
}

module.exports = { fillConsecutiveNumbersArray }
