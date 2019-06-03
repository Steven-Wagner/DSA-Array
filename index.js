const TestArray = require ('./array');

const array = new TestArray();

array.push(1);

array.push(5);
array.push(15);
array.push(19);
array.push(45);
array.push(10);

console.log(array);

array.pop();
array.pop();
array.pop();

console.log(array);

const item = array.get(0);

console.log('first item in array', item);

//empty array
array.empty();

console.log('empty array', array);

array.push(5)

console.log('array', array);

const item2 = array.get(0);

console.log(item2);

//Array functions

//URLify
const URLify = function(string) {
    let newString = '';
    let currentLetter;
    
    for(let i=0; i<string.length; i++) {
        if(string.charAt(i) == ' ') {
            currentLetter = '%02';
            newString = newString + currentLetter;
        }
        else {
            currentLetter = string.charAt(i);
            newString = newString + currentLetter;
        }
    }
    return newString
}

console.log(URLify('hello world'));

//remove numbers under 5 from array



const filterBelowFive = function(array) {
    const newArray = [];
    array.forEach(number => {
        if(number >= 5) {
            newArray.push(number);
        }
    })
    return newArray;
}

const anArray = [1,10,4,7,3]

console.log(filterBelowFive(anArray));

//max sequence

const maxSequence = function(array) {
    heightestTotal = 0;
    for(let j=0; j<array.length; j++) {
        currentTotal = 0;
        for(let i=j; i<array.length; i++) {
            currentTotal = array[i] + currentTotal;
            if((currentTotal) > heightestTotal) {
                heightestTotal = currentTotal;
            }
        }
    }
    return heightestTotal;
}

const maxArray = [4, -6, 3, 5, -2, 1];

console.log(maxSequence(maxArray));

//merge two arrays

const mergeArrays = function(array1, array2) {
    const mergedArray = [];
    let j = 0;
    for(let i=0; i<array1.length; i++) {
        let array1Num = parseInt(array1[i]);
        let array2Num = parseInt(array2[j])
        while(array1Num > array2Num && j < array2.length) {
            mergedArray.push(array2[j])
            j++;
            array2Num = parseInt(array2[j])
        }
        mergedArray.push(array1[i])
    }
    while(array2[j]) {
        mergedArray.push(array2[j])
        j++
    }
    return mergedArray;
}

const firstArray = [1, 3, 6, 8, 10, 13, 14, 16, 22];
const secondArray = [2, 3, 5, 8, 9, 10, 12, 12, 12];

console.log(mergeArrays(firstArray, secondArray))

//remove vowels

const remove = function(string, toRemove) {
    let newString = '';
    for(let i=0; i<string.length; i++) {
        let currentLetter = string[i];
        for(let j=0; j<toRemove.length; j++) {
            if(string[i] == toRemove[j]) {
                currentLetter = ''
            }
        }
        newString += currentLetter;
    }
    return newString
}

console.log(remove('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));

//product

const product = function(array) {
    const newArray = [];
    for(let i=0; i<array.length; i++) {
        let product = 1;
        for(let j=0; j<array.length; j++) {
            if(i !== j) {
                product = product*array[j];
            }
        }
        newArray.push(product);
    }
    return newArray
}

console.log(product([1, 3, 9, 4]));

//2d array

const arrayZerosAndOnes = function(array2D) {
    const newArray = [];
    for(let c=0; c<array2D.length; c++) {
        newArray.push([])
    }
    for(let i=0; i<array2D.length; i++) {
        for(let j=0; j<array2D[i].length; j++) {
            if(array2D[i][j] === 0) {
                console.log('j first', j)
                for(let a=0; a<array2D[i].length; a++) {
                    newArray[i][a] = 0;
                }
                for(let b=0; b<array2D.length; b++) {
                    console.log(j)
                    newArray[b][j] = 0;
                }
            }
            if(newArray[i][j] == undefined) {
                newArray[i][j] = 1;
            }
        }
    }
    return newArray;
}

console.log(arrayZerosAndOnes([[1,0,1,1,0],
    [0,1,1,1,0],
    [1,1,1,1,1],
    [1,0,1,1,1],
    [1,1,1,1,1]]))


//string rotation

const stringRotation = function(string1, string2) {
    let testString = string2;
    for(let i=0; i<string2.length; i++) {
        testString = testString.substring(1) + testString.charAt(0)
        console.log(testString)
        if(testString == string1) {
            return true;
        }
    }
    return false;
}

console.log(stringRotation('amazon', 'azonma'))