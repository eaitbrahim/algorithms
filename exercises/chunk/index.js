// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  //S1
  //   const chunkedArray = [];
  //   let chunkArr = [];
  //   for (let i of array) {
  //     chunkArr.push(i);
  //     if (chunkArr.length >= size) {
  //       chunkedArray.push(chunkArr);
  //       chunkArr = [];
  //     }
  //   }
  //   if (chunkArr.length > 0) chunkedArray.push(chunkArr);
  //   console.log(chunkedArray);
  //   return chunkedArray;

  //S2
  const chunked = [];
  //   for (let element of array) {
  //     const last = chunked[chunked.length - 1];
  //     if (!last || last.length === size) {
  //       chunked.push([element]);
  //     } else {
  //       last.push(element);
  //     }
  //   }

  //S3
  for (let i = 0; i < array.length; i = i + size) {
    chunked.push(array.slice(i, i + size));
  }
  return chunked;
}

module.exports = chunk;
