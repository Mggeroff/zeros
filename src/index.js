module.exports = function getZerosCount(number) {
    let count = 0;
    let temp = number;
    while (temp > 0) {
        temp = Math.floor(temp / 5);
        count += temp;
    }
    return count;
}
