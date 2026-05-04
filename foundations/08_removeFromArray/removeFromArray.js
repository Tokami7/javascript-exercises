const removeFromArray = function(array, ...args) {
    newArray = [];
    
    for (const element of array) {
            if (!args.includes(element)) {
                newArray.push(element);
            };
    };

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
