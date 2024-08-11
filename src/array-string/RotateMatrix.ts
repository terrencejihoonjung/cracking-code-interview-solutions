function rotate(matrix: number[][]): void {
  let left = 0;
  let right = matrix[0].length - 1;
  while (left < right) {
    let top = left;
    let bottom = right;

    for (let i = 0; i < right - left; i++) {
      const temp = matrix[top][left + i];

      matrix[top][left + i] = matrix[bottom - i][left];
      matrix[bottom - i][left] = matrix[bottom][right - i];
      matrix[bottom][right - i] = matrix[top + i][right];
      matrix[top + i][right] = temp;
    }
    left++;
    right--;
  }
}

/*
keep track of start/end row and col. after rotating one layer, increment/decrement them
- while iterating through each cell of a layer, replace the cell and its corresponding cells on each side 
- copy the first cell for each iteration
- once start/end rows or cols cross each other, finish
*/
