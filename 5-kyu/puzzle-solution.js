// Build a program that finds the sequence of moves to solve a sliding squares puzzle using node.js. The grid is then scrambled by moving numbers into an adjacent empty square. To solve the puzzle, the numbers must be unscrambled in the same way, by sliding numbers into the empty square. A properly solved puzzle has all of its numbers sorted in row-first order, with the lowest number in the top left and the empty square in the bottom right.
// Alright, I'll provide an A* solution for the sliding puzzle. The A* algorithm works by using both a cost function to get to the current state and a heuristic function to estimate the cost to get to the goal state.

// For the sliding puzzle, we can use the Manhattan distance as a heuristic. The Manhattan distance for a tile is the distance between its current position and its position in the goal configuration. The heuristic for the entire puzzle is the sum of the Manhattan distances for each tile.

const axios = require('axios');
const PriorityQueue = require('priorityqueuejs');

const HOSTNAME = 'https://code-test-sliding-squares-rrskuhktnq-uc.a.run.app';

async function getPuzzle(size, difficulty) {
    const response = await axios.get(`${HOSTNAME}/puzzle?size=${size}&difficulty=${difficulty}`);
    return response.data;
}

async function verifySolution(size, id, difficulty, moves) {
    const response = await axios.post(`${HOSTNAME}/verify?size=${size}&id=${id}&difficulty=${difficulty}`, { moves }, {
        headers: {
            'Content-type': 'application/json'
        }
    });
    return response.data;
}

function getEmptySquarePosition(grid) {
    const index = grid.indexOf(null);
    const width = Math.sqrt(grid.length);
    return [index % width, Math.floor(index / width)];
}

function getPossibleMoves(position, width, height) {
    const [x, y] = position;
    const moves = [];
    if (x > 0) moves.push([x - 1, y]); 
    if (x < width - 1) moves.push([x + 1, y]);
    if (y > 0) moves.push([x, y - 1]);
    if (y < height - 1) moves.push([x, y + 1]);
    return moves;
}

function swap(grid, pos1, pos2) {
    const newGrid = [...grid];
    const index1 = pos1[1] * Math.sqrt(grid.length) + pos1[0];
    const index2 = pos2[1] * Math.sqrt(grid.length) + pos2[0];
    [newGrid[index1], newGrid[index2]] = [newGrid[index2], newGrid[index1]];
    return newGrid;
}

function manhattanDistance(pos1, pos2) {
    return Math.abs(pos1[0] - pos2[0]) + Math.abs(pos1[1] - pos2[1]);
}

function heuristic(grid) {
    const width = Math.sqrt(grid.length);
    let distance = 0;
    for (let y = 0; y < width; y++) {
        for (let x = 0; x < width; x++) {
            const value = grid[y * width + x];
            if (value !== null) {
                const targetX = value % width;
                const targetY = Math.floor(value / width);
                distance += manhattanDistance([x, y], [targetX, targetY]);
            }
        }
    }
    return distance;
}

function solvePuzzleAStar(grid, width, height) {
    const target = [...Array(width * height - 1).keys(), null];
    const visited = new Set();
    const queue = new PriorityQueue((a, b) => b.f - a.f); 
    const startNode = {
        grid,
        g: 0,
        moves: [],
    };
    startNode.f = startNode.g + heuristic(grid);
    queue.enq(startNode);

    while (queue.size() > 0) {
        const current = queue.deq();

        if (current.grid.toString() === target.toString()) {
            return current.moves;
        }

        if (visited.has(current.grid.toString())) {
            continue;
        }

        visited.add(current.grid.toString());

        const emptyPos = getEmptySquarePosition(current.grid);
        const possibleMoves = getPossibleMoves(emptyPos, width, height);
        
        for (let move of possibleMoves) {
            const newGrid = swap(current.grid, emptyPos, move);
            const newMove = [move[0], move[1]];
            const newMoves = [...current.moves, newMove];
            const newNode = {
                grid: newGrid,
                g: current.g + 1,
                moves: newMoves,
            };
            newNode.f = newNode.g + heuristic(newGrid);
            queue.enq(newNode);
        }
    }
    return null; 
}

async function main(size, difficulty) {
    const puzzle = await getPuzzle(size, difficulty);
    console.log("Puzzle: ", puzzle.grid);

    const moves = solvePuzzleAStar(puzzle.grid, puzzle.width, puzzle.height);
    console.log("Solution: ", moves);

    const verification = await verifySolution(size, puzzle.id, difficulty, moves);
    console.log("Verification: ", verification.valid);
}

const args = process.argv.slice(2);
const [size, difficulty] = args;
main(size, difficulty);


// Note: For this solution, you'll need to install the `priorityqueuejs` library:
// npm install priorityqueuejs


// Run the program using:
// bash
// node solver.js 3 8


// The A* algorithm with the Manhattan distance heuristic tends to be faster than BFS for this kind of puzzle, especially as the grid size or difficulty increases.