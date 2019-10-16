module.exports = function zeros(expression) {

  let arr = expression.split('*');

  let doubleFac;
  let fac;
  let doubleFacArr = [];
  let facArr = [];
  let factorial = 1;
  let resultArray = [];

  arr.forEach(element => {
    if (element[element.length - 1] === '!' &&  element[element.length - 2] === '!') {
      doubleFac = BigInt(element.slice(0, (element.length - 2)));
      doubleFacArr.push(doubleFac)
    }else {
      fac = BigInt(element.slice(0, (element.length - 1)))
      facArr.push(fac)
    }
  });

  doubleFacArr.forEach(element => {
    if (element % BigInt(2) == 0) { 
      for (let index = 2; index <= element; index = index + 2) { // even double factorial to number
       factorial = BigInt(factorial) * BigInt(index) 
      }
      resultArray.push(BigInt(factorial))
      factorial = 1
    } else {
      for (let index = 1; index <= element; index = index + 2) { // odd double factorial to number
       factorial = BigInt(factorial) * BigInt(index) 
      }
      resultArray.push(BigInt(factorial))
      factorial = 1
    }
  });
  facArr.forEach(element => {
      for (let index = 1; index <= element; index++) { // usual factorial to number
       factorial = BigInt(factorial) * BigInt(index)   
      }
      resultArray.push(BigInt(factorial))
      factorial = 1
  });

  let multiplyResultArray = resultArray.reduce(function(multiply, current) { // multiply all elements in array
    return multiply * current
  });

  strTotal = `${multiplyResultArray}` // result of multiply to string

  zerosAmount = 0;
 if (strTotal[strTotal.length - 1] != '0') { // if there are no zeros
    zerosAmount = 0;
  } else {
    for (let index = 1; index < strTotal.length; index++) { // count zeros
      if (strTotal[strTotal.length - index] == '0') {
        zerosAmount++;  
      }else break;
    }
  }

  return zerosAmount;
}

 
