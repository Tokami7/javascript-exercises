const palindromes = function (string) {
    const forward = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reverse = forward.split("").reverse().join("");
    return forward === reverse;
};

// Do not edit below this line
module.exports = palindromes;
