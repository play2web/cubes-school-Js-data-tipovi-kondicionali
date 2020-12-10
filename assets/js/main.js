// TASK 1
var numbers = [15, -2, 22, 0, 13];
var largestNumber = getLargestNumber(numbers);

function getLargestNumber(array) {
    var largestNumber = 0;
    for (i = 0; i <= largestNumber; i++) {
        if (array[i] > largestNumber) {
            var largestNumber = array[i];
        }
    }
    return largestNumber;
}

console.log('Write a JavaScript conditional statement to find the largest of five numbers. Console log the result in the string format (sentence + number variable)');
console.log('This is largest number ' + largestNumber);

// TASK 2
var numbersProduct = [3, -7, 2];
var multiply = multiplyTotalResult(numbersProduct);

function multiplyTotalResult(array) {
    var sum = 1;
    for (var i = 0; i < array.length; i++) {
        sum = sum * array[i];
    }
    return sum;
}

console.log('Write a JavaScript conditional statement to find the sign (+ or -) of product of three numbers');
(multiply < 0) ? console.log('The sign is -') : console.log('The sign is +');

// TASK 3
var currentlanguage = 'nl';
var currentMessage = getCurrentTranslatedMessage(currentlanguage);

function getCurrentTranslatedMessage(language) {
    var message;
    switch (language) {
        case 'nl':
            message = 'Hello World NL';
            break;
        case 'de':
            message = 'Hello World DE';
            break;
        case 'ft':
            message = 'Hello World FR';
            break;
        case 'ru':
            message = 'Hello World RU';
            break;
        default:
            message = 'Hello World EN';
            break;
    }
    return message;
}

console.log('Write a switch statement to console log "Hello world" in 5 different languages');
console.log('Current message ' + currentMessage);

// TASK 4
var userAge = 58;
var maxAge = 28;
var userAgeIsBiggerThanMaxAge = (userAge >= maxAge) ? true : false;

function checkUserAge(isBiggerThanMaxAge) {
    var message;
    if (!isBiggerThanMaxAge) {
        message = 'User is younger than ' + maxAge + ' years old';
    } else {
        if (userAge > maxAge) {
            message = 'User is older than ' + maxAge + ' years old';
        } else {
            message = 'User is ' + maxAge + ' years old';
        }
    }
    return message;
}

console.log('Check user age');
console.log(checkUserAge(userAgeIsBiggerThanMaxAge));
