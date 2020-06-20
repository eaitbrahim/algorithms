// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
  //S1
  //   let step = '';
  //   for (let i = 0; i < n; i++) {
  //     step += '#';
  //     let space = '';
  //     for (let j = 0; j < n - i - 1; j++) {
  //       space += ' ';
  //     }
  //     console.log(step + space);
  //   }

  //S2
  //   for (let i = 0; i < n; i++) {
  //     let stair = '';
  //     for (let j = 0; j < n; j++) {
  //       if (j <= i) stair += '#';
  //       else stair += ' ';
  //     }
  //     console.log(stair);
  //   }

  //S3
  if (n === row) return;

  if (stair.length === n) {
    console.log(stair);
    return steps(n, row + 1);
  }

  stair.length <= row ? (stair += '#') : (stair += ' ');

  steps(n, row, stair);
}

module.exports = steps;
