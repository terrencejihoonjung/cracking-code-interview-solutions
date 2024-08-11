function setZeroes(matrix: number[][]): void {
  const rowSet = new Set();
  const colSet = new Set();

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      if (matrix[r][c] === 0) {
        rowSet.add(r);
        colSet.add(c);
      }
    }
  }

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      if (rowSet.has(r) || colSet.has(c)) matrix[r][c] = 0;
    }
  }
}

/*
iterate through the matrix and add row and col indices of cells where there were zeros
iterate through matrix again, and if the row or col index is in the set, set to zero
*/
