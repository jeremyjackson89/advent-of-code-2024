var test =`
....#.....
.........#
..........
..#.......
.......#..
..........
.#..^.....
........#.
#.........
......#...
`.trim();

var input = `
....#.................#......................#..........................#..................#....##..#...........#.................
...................................#...............................#......#..#...............................#....................
..........................#................#......##.....#.....................................#...............#..#...............
.......................................................................................................#..........................
...................#....#.........................#..............#.....#......................................................#...
.....#.........................................................................................................#..................
.........................................................#....................#..#............#................#..................
..............#...............#..................................................................#......#.........................
.........#.....#.......#......#.......................#.............#..#........#.......#............#.......#....#..#.......#....
........................#....#...............................................#...#.#.........................................#....
.........................#........................................................................#.....................#.........
.#..........#...#...............#..................#...#......#.................................#....................#.......#....
............................................................#......#.........................................................#....
.......................#...#..................#.#.............#......................#.............#..............................
............................................................................................................#.........#...........
....#..................###........#.............................#.#....................#..........#.....................#.........
................................................................................................#.......................#.#.......
..........................................................................#........#...#.................#.......#................
..........................#.#..#.#...............................................#..........#..............................#......
..............#........#.#...............#............................#..........#....................................#........#.#
#..................................................................................................#...........#................#.
...............................................#........................................#.................................#.......
.....#..#......#.......#..............#........#........#...........................................................#.............
.......#..........#.......#.#...........#................#.................................................#......................
....#.....#...............#....#.......#...#.............................................................#...................#....
............................................#....#.......#................................#......#......................#.....#...
.....................#...................................#....#...........................................................#.......
..#..............................#...........#...........................#.................................#......................
........#.............................##...................#.....................#................................................
................#.#.#......#...............................................#...###.........#....#.................................
.......#.............#.............#...........#..#...............................#..................................#.....#.....#
.....#...#.......#.........................................#..............................#........................#.............#
...............................................#.....#..............................................................#.............
.........#.......................................#.......................#...........#............................................
.......................#.....#.....................................................#....................................#.........
.............................#......................#.....................#..............#..#.......................#.............
......#......................................#.......#.....................#.....#...........#..........#.....................#...
..................................................#....................#.......#....#.......#...#.................................
......................................#......#........#.....#........................................#.............#..............
#......................#.#..............#.....#.........#...............................#...............................#.........
#......#...............#.........................................................................................#..#.............
.#..............................................#.................#.......#.......................................................
...#.......#.....#.............#...................................................................................#..............
..........................#........#........#.....................................#........................#..............#..#....
.......#..........#.......#...................................................#.##.....#.#.........#....#.................#.......
..##...................#.......................................#..............#.#........#........................................
#.......#..............#...........#.....#....#....#............#........#..................................#.#.........#.........
..................#.......................................................................................................#.......
............................#.........#....................#...............................#..........#...........................
.............#.....................................................................#.....#.................#......................
...#...#............#..........................#..........................................#.......................................
..#.............#.#........................#...#.......................#.........#....................##....#.....................
...........................................................................................................#.........#...#........
.............................#.#..........................................................................................#.......
....................#........................#.#......#...............#......#.............................#......................
....#...#.......#..................#..........................................................#........................#..........
.#...........#..............................................#...........................................#.........................
..............................#...........#...........................................#.........#...........................#....#
............#.......#......#....#.......................................................................#.........................
.........................................#...#..................#..................#.....................................#........
................#..................#........#.........................#...................#......................................#
............................................................#.....#........#......................................................
..............................#............#.........................................#.............#.......#..#...................
...#............#........................................................................#..................................#....#
..............................#.......#.............#.................................................#...........................
.....#.................................................#..........#...............................#..##..........................#
.............#.........................................................#.............................#..#..............#........#.
....................#...............#................................................................................#....#......#
........#....#..#...........................................................................#................#..............#.....
....#......................#...............#..........#......#.........#..^....#..........#..................#.......#............
...........................#.#...................................................#...............................#................
#..#.........................................................#.....#........................#.....................................
.#.#....#.......................................#......#..........#................#..#...........................................
...#.....#..........#...................#.......#............................#....................................................
.............#......................................................#............#.....................#.....................#....
...................#.............................................................................................#................
...................#.....#...................................................................................................#....
................#............#......................#.......#..................#..#.....................#..............#........#.
#....#...................................................................#.......##....#..........#...............................
.........................................#............#......#.......................#........#..............#.#..................
.##........#.....#...........................................................................................#..............#.....
#...........................................................#.......#....#......#..#...................................#..#.#.....
.............#........................................#...............................#...........................................
......................#..................................................................#..................................#.....
...#.#........................................#.................................................................................#.
.............#.......................#............................#.#................................#.......#..#...........#.....
...#..#...............................................................................#................#..........................
.......#.............................#............#..#........#.....#.........................#..................#................
......#...............................................................................##.................................#....#...
........#..................#.......................................................................#......#..........#............
...........#.......#........#..........................................#........#..............#.................#.........#......
...................#..............................#...............................#.....................#.....#...................
.............#..#..................#.#..#.....#..#..........................................................................#.....
..............................#...................................................#.......................#..............#........
.......#......................#.............................#...........................#.....#...#.................#........#....
.........#.......#....##..........................................................................................................
........................................................................#......................#..................................
.......................#..........##.#................................................#..#.....#......#......#.................#..
......................................#......................................................................#....................
.....................................#....#...............................................#...#.....#.......#...#...........#.....
...................#..#................................................................................#..........................
..............#.................#..............................#..............#...........#.#..................#...#.............#
................#..#......#.........................#.....#.....#..............#..#.........................................#.....
.....#.........................#........................................#.....#.......#...........#...................#...........
......#....................##......................................................................................#..............
............................................................................###...............................#...................
#..................................#......#..............................................................................#.......#
.....#...................#.....#............................................................#.....................#...#...........
.......#......#........................#.....................#.#..##............#......#.................#.....................#..
.....#..............#.................#........#..................#..#..........................##.....#..#...................#...
........#................#................#...........#.........................................#....................#............
.........#.........#....#................#........#........#...............#....#.................................................
...........#...#............#..................#.............................#.#..#....................#.#........................
.#............#..#..#................#.#................................................................##.............#..........
...........#.......................#.........................................................#....................................
..#..........................#...........#......#................................#.#..............................................
............................................................#..................#...........#.....##.................#.............
....#.........#............................##..........................................#.....#....#..........#....................
..................#..............#........#........#....................#..............#....................#.....................
....#...................................#.....................................................#.............#...................#.
.........#...........#...#.............................#.............##..#................................................#.#.....
............................##..............#................#..#........................................#....................#...
.............................#.#......................................................##.....#..................................#.
.............................................................................#..................#...#.................#...........
........................#...........#..................#......#...................................................................
.....#.......................#......#................#............#..................#.................................#..........
#..........#...................................................................#...................#...#...............#..........
....................#............................................#...............#........................##....#..#..............
.#.....#............................#...............#.#.#..........................#.........#..............#.....................
.............................#....................................#..#......#........................#............................
`.trim();

var UP = [-1, 0];
var RIGHT = [0, 1];
var DOWN = [1, 0];
var LEFT = [0, -1];
var DIRECTIONS = [UP, RIGHT, DOWN, LEFT];
var FACING_DIRECTION = ["^", ">", "V", "<"];

var GROUND = ".";
var OBSTRUCTION = "#";

var map;
var maxRow;
var maxCol;

var startPosition;
var startDirection;
var startDirectionIndex;

var guardPosition;
var guardDirection;
var directionIndex;

var distinctPositions;

function setMap(data) {
    map = data.split("\n").map(l => l.split(""));
    maxRow = map.length;
    maxCol = map[0].length;
}

function addVector2D(a, b) {
    return [a[0] + b[0], a[1] + b[1]];
}

function isSameVector(a, b) {
    return a[0] == b[0] && a[1] == b[1];
}

function turnGuard() {
    directionIndex = (directionIndex + DIRECTIONS.length + 1) % DIRECTIONS.length;
    guardDirection = DIRECTIONS[directionIndex];
}

function isValidPosition(position) {
    return position[0] >= 0 && position[0] < map.length && position[1] >= 0 && position[1] < map[0].length;
}

function isDistinct(position) {
    for (var dp of distinctPositions) {
        if (isSameVector(dp, position)) {
            return false;
        }
    }
    return true;
}

function setStartPosition() {
    directionIndex = -1
    guardPosition = [];
    distinctPositions = [];

    var entity;
    for (var row = 0; row < map.length; row++) {
        for (var col = 0; col < map[row].length; col++) {
            entity = map[row][col];
            if (entity != GROUND && entity != OBSTRUCTION) {
                guardPosition = [row, col];
                directionIndex = FACING_DIRECTION.indexOf(entity);
                guardDirection = DIRECTIONS[directionIndex];
                break;
            }
        }
        if (guardPosition.length) {
            break;
        }
    }

    distinctPositions.push(guardPosition);

    startPosition = guardPosition;
    startDirection = guardDirection;
    startDirectionIndex = directionIndex;
}

function walkMap() {
    while (true) {
        var next = addVector2D(guardPosition, guardDirection);
        if (!isValidPosition(next)) {
            return;
        }

        if (map[next[0]][next[1]] == OBSTRUCTION) {
            turnGuard();
            continue;
        }

        guardPosition = next;
        if (isDistinct(next)) {
            distinctPositions.push(next);
        }
    }
}


function findLoopCausingPoints() {
    obstructionOptions = [];

    for (var possibleObstructionPoint of distinctPositions) {

        var currentPath = [JSON.stringify({ point: startPosition, dir: startDirection })];

        guardPosition = startPosition;
        guardDirection = startDirection;
        directionIndex = startDirectionIndex;

        while (true) {
            var next = addVector2D(guardPosition, guardDirection);
            if (!isValidPosition(next)) {
                break;
            }

            if (map[next[0]][next[1]] == OBSTRUCTION || isSameVector(next, possibleObstructionPoint)) {
                turnGuard();
                continue;
            }

            var nextObj = JSON.stringify({ point: next, dir: guardDirection });

            if (currentPath.includes(nextObj) && !isSameVector(next, startPosition)) {
                obstructionOptions.push(possibleObstructionPoint);
                break;
            }

            guardPosition = next;
            currentPath.push(nextObj);
        }
    }
}

// setMap(test);
setMap(input);
setStartPosition();
walkMap();
findLoopCausingPoints();

console.log(`Part 1: ${ distinctPositions.length }`);
console.log(`Part 2: ${ obstructionOptions.length }`);
