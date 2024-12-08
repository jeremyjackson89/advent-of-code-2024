var testInput1 = `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`;

var digitRegex = /\d+/g;

function part1(data) {
    var memoryRegex = /mul\(\d+,\d+\)/gm;
    var uncorrupted = data.match(memoryRegex);

    var sum = 0;

    for (var i = 0; i < uncorrupted.length; i++) {
        var digits = uncorrupted[i].match(digitRegex);
        sum += digits[0] * digits[1];
    }

    console.log(`part1`, sum);
}

var testInput2 = `xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`;

function part2(data) {
    var memoryRegex = /do(n't)?\(\)|mul\(\d+,\d+\)/gm;
    var uncorrupted = data.match(memoryRegex);

    var sum = 0;
    var enabled = true;

    var enabledFlag = "do()";
    var disabledFlag = "don't()";

    for (var i = 0; i < uncorrupted.length; i++) {
        if (uncorrupted[i] == disabledFlag) {
            enabled = false;
        }

        if (uncorrupted[i] == enabledFlag) {
            enabled = true;
        } else if (enabled) {
            var digits = uncorrupted[i].match(digitRegex);
            sum += digits[0] * digits[1];
        }

    }

    console.log(`part2`, sum);
}
