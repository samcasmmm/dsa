const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter the number of test cases: ', (t) => {
  t = parseInt(t);

  for (let k = 0; k < t; k++) {
    rl.question(
      'Enter number of steps, grid rows, and grid columns separated by space: ',
      (input) => {
        const [c, p, q] = input.split(' ').map(Number);
        let grid = [];

        // Read the initial state of the grid
        for (let i = 0; i < p; i++) {
          rl.question('Enter grid row ' + (i + 1) + ': ', (line) => {
            grid.push(line.split(''));
            if (grid.length === p) {
              // Apply the moves
              let position = [0, 0]; // Starting position at top-left corner
              for (let i = 0; i < c; i++) {
                if (position[1] < q - 1) {
                  // Move 1: Move right within the same row
                  position[1]++;
                } else if (position[0] < p - 1) {
                  // Move 2: Move to the beginning of the next row
                  position[0]++;
                  position[1] = 0;
                } else {
                  // Move 3: Move to the top-left corner of the grid
                  position[0] = 0;
                  position[1] = 0;
                }
              }

              // Print the final state of the grid
              for (let i = 0; i < p; i++) {
                console.log(grid[(i + position[0]) % p].join(' '));
              }
              rl.close();
            }
          });
        }
      }
    );
  }
});
