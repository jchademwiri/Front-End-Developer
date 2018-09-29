function getRandomNumber(lower, upper) {
    if (isNaN(lower)|| isNaN(upper)) {
        throw new Error('both arguments must be numbers');
        
    }
    return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}
console.log( getRandomNumber(1, 5));
console.log( getRandomNumber(1, 50));
console.log( getRandomNumber(1, 100));
console.log( getRandomNumber(200, 100));