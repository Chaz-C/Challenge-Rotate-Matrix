const Direction = require("./Direction").Direction;

/*  MatrixRotator(matrix)
 *
 *  @param matrix                        a multidimensional array containing the matrix
 *
 *  @public property matrix              the matrix
 *
 *  @public method rotate(direction)     direction is either
 *                                       Direction.CW or Direction.CWW
 *        @returns the rotated matrix
 */
module.exports = class MatrixRotator {
  constructor( matrix ) {
    this.matrix = matrix;
  }

  //      |-- Must be Direction.CW
  //      v        or Direction.CCW
  rotate (direction) {

    let PA = this.matrix;

    var NewPA = [];

    if ( direction === Direction.CW ) {

      for (var i = 0; i <= PA.length-1; i++) {
        var NewCA = [];
        NewPA.push(NewCA);

       for (var j = PA.length-1; j >= 0; j--) {
          NewCA.push(PA[j][i]);
       }
      }

      this.matrix = NewPA;
    } else {

      for (var i = 0; i <= PA.length-1; i++){
        var NewCA = [];
        NewPA.unshift(NewCA);

       for (var j = PA.length-1; j >= 0; j--){
          NewCA.unshift(PA[j][i]);
       }
      }

      this.matrix = NewPA;

    }





  }


};
