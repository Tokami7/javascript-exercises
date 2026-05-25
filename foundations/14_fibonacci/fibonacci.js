const fibonacci = function(num) {
    let numnum
    if (typeof num !== 'number') {
        numnum = parseInt(num)
    } else {
        numnum = num
    }

    if (numnum < 0) return "OOPS";
    if (numnum == 0) return 0;

    let number2 = 1;
    let number1 = 0;

    for (let i = 2; i <= numnum; i++) {
        let current = number1 + number2;
        number1 = number2;
        number2 = current;
    }

    return number2;
};

// Do not edit below this line
module.exports = fibonacci;
