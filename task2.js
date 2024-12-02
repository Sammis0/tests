function IsPrime(num){
    if (num < 2) // numbers smaller than 2 isnt prime
        return false;
    for (let i = 2; i <= Math.sqrt(num); i++) { //choosing all number that arent prime
        if (num % i === 0) 
            return false;
    return true;
}
}
//getting all the prime number and printing them
function printPrimes(limit) {
    for (let i = 2; i < limit; i++) {
        if (IsPrime(i)) {
            console.log(i);
    }
    }
}

printPrimes(237);