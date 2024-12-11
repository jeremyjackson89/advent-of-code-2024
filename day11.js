console.time("Day 11");
// var input = "125 17";
var input = "70949 6183 4 3825336 613971 0 15 182";

var stones = input.split(" ");

// Originally used in p1
var stonesAux = [];
function blink(times) {
    for (var i = 0; i < times; i++) {
        for (var j = 0; j < stones.length; j++) {
            if (stones[j] == "0") {
                stonesAux.push("1");
            } else if (stones[j].length % 2 == 0) {
                stonesAux.push(parseInt(stones[j].substring(0, stones[j].length/2)).toString());
                stonesAux.push(parseInt(stones[j].substring(stones[j].length/2)).toString());
            } else {
                stonesAux.push((parseInt(stones[j]) * 2024).toString())
            }
        }
        stones = stonesAux.slice();
        stonesAux.length = 0;
    }
}

// Refactored after p1 solution 💩'd the bed on p2
var stoneCount = {};
function countStone(stone, blinks) {
    var key = `${stone}_${blinks}`;

    if (stoneCount.hasOwnProperty(key)) {
        return stoneCount[key];
    }

    if (blinks == 0) {
        return 1;
    }

    if (stone == "0") {
        stoneCount[key] = countStone("1", blinks - 1);
    } else if (stone.length % 2 == 0) {
        var left = stone.substring(0, stone.length/2);
        var right = parseInt(stone.substring(stone.length/2)).toString();
        stoneCount[key] = countStone(left, blinks - 1) + countStone(right, blinks - 1);
    } else {
        stoneCount[key] = countStone((parseInt(stone) * 2024).toString(), blinks - 1);
    }

    return stoneCount[key];
}

//p1: 185205
//p2: 221280540398419
// blink(25);
// console.log(`Stones: ${ stones.length }`);
console.log(`Stones p1: ${ stones.map(stone => countStone(stone, 25)).reduce((a, b) => a + b) }`);
console.log(`Stones p2: ${ stones.map(stone => countStone(stone, 75)).reduce((a, b) => a + b) }`);
console.timeEnd("Day 11");