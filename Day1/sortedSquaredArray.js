const sortedSquaredArray = (array) => {
  let leftPointer = 0;
  let rightPointer = array.length - 1;
  const newArray = new Array(array.length).fill(0);

  for (let i = newArray.length; i > 0; i--) {
    const leftPointerValue = Math.pow(array[leftPointer], 2);
    const rightPointerValue = Math.pow(array[rightPointer], 2);

    if (leftPointerValue > rightPointerValue) {
      newArray[i] = leftPointerValue;
      leftPointer++;
    } else {
      newArray[i] = rightPointerValue;
      rightPointer--;
    }
  }

  return newArray;
};

const array = [-12, -5, 5, 9, 18, 44];
console.log(sortedSquaredArray(array));
