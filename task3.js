function countZeros(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
    count += array[i] === 0 ? 1 : 0; // add 1 if the current element is 0, else add 0 to the count
    }
    return count;
}
const num_array = [0, 2, 0, 0, 4, 0, 0, 0, 0, 8];
const zeroCounting = countZeros(num_array);
console.log(zeroCounting);
