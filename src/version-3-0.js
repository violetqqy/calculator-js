(function() {
  var Calculator = function() {
    this.result = '';
    this.symbol = '';
    this.tempNo = '';
  }

  var Operation = function(symbol, tempNo, result) {
    switch (symbol) {
      case '+':
        return tempNo + result;
      case '-':
        return tempNo - result;
      case '*':
        return tempNo * result;
      case '/':
        return tempNo / result;
      case '%':
        return tempNo % result;
    }
  }

})()
