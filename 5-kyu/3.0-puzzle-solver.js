// Puzzle solution using Breadth-first search. With HOT URL and API endpoints, need to replace HOST URL with actual HOST NAME
const https = require('https');

const HOST_URL = 'https://code-test-sliding-squares-rrskuhktnq-uc.a.run.app';

async function getPuzzle(size, difficulty) {
  const url = `${HOST_URL}/puzzle?size=${size}&difficulty=${difficulty}`;
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      let data = '';
      response.on('data', (chunk) => {
        data += chunk;
      });
      response.on('end', () => {
        resolve(JSON.parse(data));
      });
    }).on('error', (error) => {
      reject(error);
    });
  });
}

async function verifySolution(size, id, difficulty, moves) {
  const url = `${HOST_URL}/verify?size=${size}&id=${id}&difficulty=${difficulty}`;
  const postData = JSON.stringify(moves);
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': postData.length
    }
  };
  return new Promise((resolve, reject) => {
    const req = https.request(url, options, (response) => {
      let data = '';
      response.on('data', (chunk) => {
        data += chunk;
      });
      response.on('end', () => {
        resolve(JSON.parse(data));
      });
    }).on('error', (error) => {
      reject(error);
    });
    req.write(postData);
    req.end();
  });
}

async function solvePuzzle(size, difficulty) {
  try {
    const puzzle = await getPuzzle(size, difficulty);
    const targetGrid = [...Array(size * size - 1).keys(), null]; // The solved state

    const initialState = {
      grid: puzzle.grid,
      emptyIndex: puzzle.grid.indexOf(null),
      moves: []
    };

    const queue = [initialState];
    const visited = new Set([initialState.grid.toString()]);

    while (queue.length > 0) {
      const currentState = queue.shift();

      if (currentState.grid.toString() === targetGrid.toString()) {
        console.log('Puzzle Solved!');
        console.log('Puzzle:');
        printPuzzle(currentState.grid, size);
        console.log('Solution:', currentState.moves);
        const verification = await verifySolution(size, puzzle.id, difficulty, currentState.moves);
        console.log('Verification:', verification);
        return;
      }

      addNeighborsToQueue(queue, visited, currentState, size);
    }

    console.log('Solution not found.');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

function addNeighborsToQueue(queue, visited, currentState, size) {
  const { grid, emptyIndex, moves } = currentState;
  const emptyRow = Math.floor(emptyIndex / size);
  const emptyCol = emptyIndex % size;

  const possibleMoves = [
    [-1, 0], [1, 0], [0, -1], [0, 1]
  ];

  for (const [rowDelta, colDelta] of possibleMoves) {
    const newRow = emptyRow + rowDelta;
    const newCol = emptyCol + colDelta;
    if (newRow >= 0 && newRow < size && newCol >= 0 && newCol < size) {
      const newIndex = newRow * size + newCol;
      const newGrid = [...grid];
      [newGrid[emptyIndex], newGrid[newIndex]] = [newGrid[newIndex], newGrid[emptyIndex]];
      const newMoves = moves.concat([[newCol, newRow]]);
      const newNeighbor = { grid: newGrid, emptyIndex: newIndex, moves: newMoves };

      const neighborString = newGrid.toString();
      if (!visited.has(neighborString)) {
        queue.push(newNeighbor);
        visited.add(neighborString);
      }
    }
  }
}

function printPuzzle(grid, width) {
  for (let i = 0; i < grid.length; i += width) {
    console.log(grid.slice(i, i + width).join('\t'));
  }
}

const size = process.argv[2] || 3;
const difficulty = process.argv[3] || 8;
solvePuzzle(size, difficulty);
