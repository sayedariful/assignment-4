function cubeNumber(number) {
  let numberTypeCheck = typeof number;
  if (numberTypeCheck !== "number") {
    return "please give me valid number";
  } else {
    let result = number ** 3;
    return result;
  }
}


function matchFinder(string1, string2) {
  let result = false;
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "please enter valid string ";
  } else {
    let checked1 = string1.includes(string2);
    if (checked1 === true) {
      return true;
    }
    return result;
  }
}


function sortMaker(arr) {
  let result = [];
  if (!Array.isArray(arr)) {
    return "Please enter valid number type array";
  } else {
    if (arr[0] > arr[1]) {
      if (arr[0] < 0 || 0 > arr[1]) {
        return "Invalid Input";
      }
      result.push(arr[0], arr[1]);
      return result;
    } else if (arr[1] > arr[0]) {
      if (arr[0] < 0 || 0 > arr[1]) {
        return "Invalid Input";
      }
      result.push(arr[1], arr[0]);
      return result;
    } else if (arr[1] === arr[0]) {
      if (arr[0] < 0 || 0 > arr[1]) {
        return "Invalid Input";
      }
      return "equal";
    }
  }
}


function findAddress(obj) {
  let street1 = obj.street;
  if (typeof street1 === "undefined") {
    street1 = "__";
  }
  let house2 = obj.house;
  if (typeof house2 === "undefined") {
    house2 = "__";
  }
  let society3 = obj.society;
  if (typeof society3 === "undefined") {
    society3 = "__";
  }

  let result = street1 + ", " + house2 + ", " + society3;
  return result;
}


function canPay(changeArray, totalDue) {
  if (!Array.isArray(changeArray) || typeof totalDue !== "number") {
    return "please enter valid array and number.";
  } else if (changeArray.length < 1) {
    return "Empty array not allowed.";
  } else {
    let arraySum = 0;
    for (let i = 0; i < changeArray.length; i++) {
      arraySum += changeArray[i];
    }
    if (arraySum < totalDue) {
      return false;
    }
    if (arraySum > totalDue) {
      return true;
    }

    return;
  }
}