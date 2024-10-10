/// to figure out the time complexity of the task, you just need to count the number of simple operations computer has to do
// calculation cost 1, indentification cost 1

const countNumber = (n) => {
  // Method 1
  // it's just a caculation so there are 3 operations here multiplication, addition and division
  return ((n - 1) * n) / 2;
};

const countNumber1 = (n) => {
  // method 2

  sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }
  return sum;

  // in this method, we must identify all the number in the array, each identification cost 1 operation and it has 4 numbers here so there are 4 operations, therefore it means n - 1 operations
  // beside that, we have 3 addictive operations here so it means we have n - 2 more operations
  // finally, we plus all of this and it has 2n -3 operations to accomplish the task by using this method
};

n = 5;
console.log("1", countNumber(n));
console.log("2", countNumber1(n));
