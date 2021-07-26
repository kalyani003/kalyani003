// Import stylesheets
import './style.css';

const numDuplicates = (name, height, weight) => {
  let hashMap = {};
  // create hashmap with name,height, weight
  name.forEach((n, index) => {
    hashMap[name[index] + height[index] + weight[index]] =
      hashMap[name[index] + height[index] + weight[index]] + 1 || 1;
  });

  // check if same element present more than one time,
  // if yes, then increase count and return count.
  let count = 0;
  for (let el in hashMap) {
    if (hashMap[el] >= 2) {
      count += hashMap[el] - 1;
    }
  }
  return count;
};

console.log(
  numDuplicates(
    ['ball', 'ball', 'ball', 'ball', 'box', 'box', 'box'],
    [2, 2, 2, 2, 2, 3, 3],
    [1, 1, 1, 1, 3, 2, 2]
  )
);

console.log(
  numDuplicates(
    ['ball', 'bat', 'glove', 'glove', 'glove'],
    [2, 3, 1, 2, 1],
    [2, 5, 1, 1, 1]
  )
);
