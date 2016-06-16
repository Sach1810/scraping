var arrA = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
var arrB = [ 0, 0, 0, 0, 0, 1, 0, 0, 0, 0];
var arrC = [ 0, 1, 0, 1, 1, 0, 0, 1, 0, 1];

var currentPosition = -1;
var jumpQty = 3;


var newMove = function(array){
    var startPoint = currentPosition + 1;
    var endPoint = currentPosition + jumpQty;

    for ( var i = endPoint; i >= startPoint; i-- ) {
      if ( array[i] == 0 ) {
        currentPosition = i;

        return newMove(array);
      };

    };

    if ( currentPosition >= array.length - jumpQty ) {
      reset();
      return true;  
    } else {
      reset();
      return false;
    };
};

var reset = function(){
  currentPosition= -1;
};