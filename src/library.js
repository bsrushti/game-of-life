const fillConsecutiveNumbersArray = function(limit){
  let array = [];
  for(let index = 0; index < limit ; index++){
    array.push(index+1);
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

module.exports = { 
  fillConsecutiveNumbersArray,
  fillArray,
  dashline,
  addSpaces
};
