const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {

  let row = matrix[0].length
  let column = matrix.length
  let result = []
    for (let i = 0; i < column; i++) {
      result.push([])
    }

  for (let i = 0; i < row; i++) {
      for (let j = 0; j < column; j++) {
        let mines = 0;
        if (i == 0 && j == 0) {           //Top-left
                if (matrix[j + 1][i] == true) {     //below
                    mines += 1
                }
                if (matrix[j][i + 1] == true) {     //right
                  mines += 1
                }
                if (matrix[j + 1][i + 1] == true) {   //below-right
                  mines += 1
                }
        } 
        
        else if (i == (row - 1) && j == 0) {    //Top-right
                if (matrix[j + 1][i] == true) {     //below
                    mines += 1
                }
                if (matrix[j][i - 1] == true) {     //left
                  mines += 1
                }
                if (matrix[j + 1][i - 1] == true) {   //below-left
                  mines += 1
                }
        } 
        
        else if (j == 0) {                  //Top-center
              if (matrix[j + 1][i] == true) {     //below
                  mines += 1
              }
              if (matrix[j][i - 1] == true) {     //left
                mines += 1
              }
              if (matrix[j + 1][i - 1] == true) {   //below-left
                mines += 1
              }
              if (matrix[j][i + 1] == true) {     //right
                mines += 1
              }
              if (matrix[j + 1][i + 1] == true) {   //below-right
                mines += 1
              }
        } 
        
        else if (j == (column - 1) && i == 0) {  //Bottom-left
                if (matrix[j - 1][i] == true) {       //over
                  mines += 1
                }
                if (matrix[j][i + 1] == true) {       //right
                  mines += 1
                }
                if (matrix[j - 1][i + 1] == true) {     //over-right
                  mines += 1
                }
        } 
        
        else if (j == (column - 1) && i == (row - 1)) { //Bottom-right
                  if (matrix[j - 1][i] == true) {    //over
                    mines += 1
                  }
                  if (matrix[j][i - 1] == true) {     //left
                    mines += 1
                  }
                  if (matrix[j - 1][i - 1] == true) {   //over-left
                    mines += 1
                  }
        } 
        
        else if (j == (column - 1)) {             //Bottom-center
                  if (matrix[j - 1][i] == true) {    //over
                    mines += 1
                  }
                  if (matrix[j][i - 1] == true) {     //left
                    mines += 1
                  }
                  if (matrix[j - 1][i - 1] == true) {   //over-left
                    mines += 1
                  }
                  if (matrix[j][i + 1] == true) {     //right
                    mines += 1
                  }
                  if (matrix[j - 1][i + 1] == true) {   //over-right
                    mines += 1
                  }
        } 
        
        else if (i == 0) {                      // Center-left
                if (matrix[j - 1][i] == true) {    //over
                  mines += 1
                }
                if (matrix[j][i + 1] == true) {     //right
                  mines += 1
                }
                if (matrix[j - 1][i + 1] == true) {   //over-right
                  mines += 1
                }
                if (matrix[j + 1][i] == true) {     //below
                  mines += 1
                }
                if (matrix[j + 1][i + 1] == true) {   //below-right
                  mines += 1
                }
        } 
        
        else if (i == (row - 1)) {               // center-right
                    if (matrix[j - 1][i] == true) {    //over
                      mines += 1
                    }
                    if (matrix[j][i - 1] == true) {     //left
                      mines += 1
                    }
                    if (matrix[j - 1][i - 1] == true) {   //over-left
                      mines += 1
                    }
                    if (matrix[j + 1][i] == true) {     //below
                      mines += 1
                  }
                  if (matrix[j + 1][i - 1] == true) {   //below-left
                    mines += 1
                  } 
        } 
        
        else {                                //center-center
              if (matrix[j + 1][i] == true) {     //below
                  mines += 1
              }
              if (matrix[j - 1][i] == true) {    //over
                mines += 1
              }
              if (matrix[j][i + 1] == true) {     //right
                mines += 1
              }
              if (matrix[j][i - 1] == true) {     //left
                mines += 1
              }
              if (matrix[j + 1][i + 1] == true) {   //below-right
                mines += 1
              }
              if (matrix[j - 1][i - 1] == true) {   //over-left
                mines += 1
              }
              if (matrix[j + 1][i - 1] == true) {   //below-left
                mines += 1
              }
              if (matrix[j - 1][i + 1] == true) {   //over-right
                mines += 1
              }
        }      
        result[j][i] = mines
      }
  }
return result
}

module.exports = {
  minesweeper
};
