// check for subsequence
const isValidSequece = (array, sequence) => {
  let arrIdx = 0;
  let seqIdx = 0;

  while (arrIdx < array.length && seqIdx < sequence.length) {
    if (array[arrIdx] === sequence[seqIdx]) {
      seqIdx++;
    }
    arrIdx++;
  }
  return seqIdx === sequence.length;
};

// sum 2 numbers to get a target number
const twoNumberSum = (array, targetSum) => {
  for (let i = 0; i < array.length - 1; i++) {
    const firstNum = array[i];
    for (let j = i + 1; j < array.length; j++) {
      const secondNum = array[j];
      if (firstNum + secondNum === targetSum) {
        return [firstNum, secondNum];
      }
    }
  }
  return [];
};

function tournamentWinner(competitions, results) {
  // Write your code here.
  let finalResult = new Map();
  let highestScore = 0;
  let winner = '';
  for (let i = 0; i < competitions.length; i++) {
    if (!finalResult.has(competitions[i][0])) {
      finalResult.set(competitions[i][0], 0);
    }
    if (!finalResult.has(competitions[i][1])) {
      finalResult.set(competitions[i][1], 0);
    }
    if (results[i] === 0) {
      const prevPoints = finalResult.get(competitions[i][1]);
      finalResult.set(competitions[i][1], prevPoints + 3);
    } else {
      const prevPoints = finalResult.get(competitions[i][0]);
      finalResult.set(competitions[i][0], prevPoints + 3);
    }
  }
  for (let [key, value] of finalResult) {
    if (value > highestScore) {
      highestScore = value;
      winner = key;
    }
  }

  return winner;
}

function threeNumberSum(arr, targetSum) {
  arr.sort((a, b) => a - b);
  let numberSums = [];
  for (let i = 0; i < arr.length; i++) {
    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      currSum = arr[i] + arr[left] + arr[right];
      if (currSum === targetSum) {
        numberSums.push([arr[i], arr[left], arr[right]]);
        left++;
        right--;
      }
      if (currSum > targetSum) {
        right--;
      }
      if (currSum < targetSum) {
        left++;
      }
    }
  }
  return numberSums;
}

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0));

console.log(
  tournamentWinner(
    [
      ['HTML', 'C#'],
      ['C#', 'Python'],
      ['Python', 'HTML']
    ],
    [0, 0, 1]
  )
);
// [1, 6, -1, 10]
console.log(
  isValidSequece([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 25, 6, -1, 8, 10])
);
console.log('----------');
twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10);
