const findTheOldest = function(people) {
    const currentYear = (new Date()).getFullYear();
    for (let element of people){
        if ("yearOfDeath" in element === false) {
            element.yearOfDeath = currentYear
        };
    };

    let oldest = people.sort(function(a, b) {
        const lastGuy = a.yearOfDeath - a.yearOfBirth;
        console.log(lastGuy)
        const nextGuy = b.yearOfDeath - b.yearOfBirth;
        console.log(nextGuy)
        return lastGuy > nextGuy ? -1 : 1;
    });

    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
