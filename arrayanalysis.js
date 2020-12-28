const myFunction = (arr) => {
  const object = {
    average: arr.reduce((a, b) => a + b) / arr.length,
    max: Math.max(...arr),
    min: Math.min(...arr),
    length: arr.length,
  };
  return object;
};

myFunction([1, 8, 3, 4, 2, 6]);

module.exports = myFunction;
