// O(n) - Time | O(n) - Space
function spiralTraverse(array) {
  let startRow = 0;
  let endRow = array.length-1;
  let startColumn = 0;
  let endColumn = array[0].length-1;
  let results = [];
  while(startRow <= endRow && startColumn <= endColumn){
    // startColumn -> endColumn
    for(let c = startColumn; c < endColumn+1; c++){
      results.push(array[startRow][c]);
    }
    // startRow -> endRow
    if(startRow === endRow) break;
    for(let r = startRow + 1; r < endRow+1; r++){
      results.push(array[r][endColumn]);
    }
    // endColumn -> startColumn
    if(startColumn === endColumn) break;
    for(let c = endColumn-1; c >= startColumn; c--){
      results.push(array[endRow][c]);
    }
    // endRow -> startRow
    for(let r = endRow-1; r >= startRow+1; r--){
      results.push(array[r][startColumn]);
    }
    startRow++;
    endRow--;
    startColumn++;
    endColumn--;
  }
  return results

}
spiralTraverse(
  [
    [1, 2, 3, 4],
    [12,13,14,5],
    [11,16,15,6],
    [10, 9, 8,7]
  ]
)

