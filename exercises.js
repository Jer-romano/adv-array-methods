function hasOddNumber(arr) {
   return arr.some(function(val) {
        return val % 2 === 1;
    });
}

//console.log(hasOddNumber([2, 8, 4]));

function hasAZero(num) {
    return num.toString().split("").some(function(val) {
        return val == 0;
    });
}

//console.log(hasAZero(57849304567));

function hasOnlyOddNumbers(arr) {
       return arr.every(function(val) {
        return val % 2 === 1;
    });
}

function hasNoDuplicates(arr) {
    return arr.every(function(val, i) {
        for(let k = i+1; k < arr.length; k++) {
            if(val == arr[k]) return false;
        }
        return true;
    })
}

//console.log(hasNoDuplicates([9,8]));

function hasCertainKey(arr, key) {
    return arr.every(function(val) {
        return val[key] !== undefined;
    });
}

function hasCertainValue(arr, key, value) {
    return arr.every(function(obj) {
        return obj[key] == value;
    });
}