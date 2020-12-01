let takeUntil = (array, callback) => {
  let num = 0;
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array.slice(0, num);
    } else {
      num += 1;
    }
  }
  return array;
};
module.exports = takeUntil;
