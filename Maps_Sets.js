// What does the following code return?

// new Set([1,1,2,2,3,4])
// {1,2,3,4}

// [...new Set("referee")].join("")
//{"ref"}

// What does the Map m look like after running the following code?
// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);

//   0: {Array(3) => true}
//   1: {Array(3) => false}


// const hasDuplicate = (arr) => new Set(arr).size !== arr.length
  

// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

function isVowel(char) {
    return "aeiou".includes(char);
}

function vowelCount() {
    const vowelMap = new Map;
    for(let char of str) {
        let lowerCased = char.toLowerCase()
        if(isVowel.has(lowerCased)){
            vowelMap.set(lowerCased,vowelMap.get(lowerCased) + 1)
        }else {
            vowelMap.set(lowerCased, 1)
        }
    }
    return vowelMap
}



