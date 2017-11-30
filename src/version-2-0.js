// Calculator 类 实现简单的加减乘除计算
var Calculator = function() {}
Calculator.prototype = {
  sTempA: '', // 暂存值A
  sTempB: '', // 暂存值B
  fResult: 0, // 结果值 
  symbol: '', // 符号
  fnCalculator: function(symbol) {
    switch (symbol) {
      case '+':
        this.fResult = this.fnAddition(this.sTempA, this.sTempB);
        this.setResult(this.fResult).resetSymbol();
        break;
      case '-':
        this.fResult = this.fnSubtraction(this.sTempA, this.sTempB);
        this.setResult(this.fResult).resetSymbol();
        break;
      case '*':
        this.fResult = this.fnMultiplication(this.sTempA, this.sTempB);
        this.setResult(this.fResult).resetSymbol();
        break;
      case '/':
        this.fResult = this.fnDivision(this.sTempA, this.sTempB);
        this.setResult(this.fResult).resetSymbol();
        break;
      case '%':
        this.fResult = this.fnAddition(this.sTempA, this.sTempB);
        this.setResult(this.fResult).resetSymbol();
        break;
      case '~':
        // this.fResult = this.fnNegative(this.sTempA);
        // this.setResult(this.fResult);
        break;
      default:
        this.fResult = this.fnAddition(this.sTempA, this.sTempB);
        this.setResult(this.fResult);
        break;
    }
  },
  fnToInt: function(x, y) {
    var iPoint = 0;
    var tempA;
    var tempB;
    var regex = new RegExp(/^\d*\.?\d*$/);
    if (regex.test(x) && regex.test(y)) {
      tempA = x.indexOf('.') > -1 ? Number(x.split('.')[0] + x.split('.')[1]) : Number(x);
      iPoint += x.indexOf('.') > -1 ? x.split('.')[1].length : 0;
      tempB = y.indexOf('.') > -1 ? Number(y.split('.')[0] + y.split('.')[1]) : Number(y);
      iPoint += y.indexOf('.') > -1 ? y.split('.')[1].length : 0;
    } else {
      throw new Error('数字格式错误');
    }
    return [tempA, tempB, iPoint];
  },
  fnToResult: function(result, iPoint) {
    var resCopy = result.toString();
    var length = resCopy.length;
    var res;
    if (iPoint == 0) {
      res = resCopy;
    } else {
      res = length == iPoint ? '0.' + resCopy : resCopy.slice(0, -iPoint) + '.' + resCopy.slice(-iPoint, length);
    }
    return Number(res);
  },
  fnAddition: function(x, y) {
    var expr = this.fnToInt(x, y);
    var result = expr[0] + expr[1];
    return this.fnToResult(result, expr[2]);
  },
  fnSubtraction: function(x, y) {
    var expr = this.fnToInt(x, y);
    var result = expr[0] - expr[1];
    return this.fnToResult(result, expr[2]);
  },
  fnMultiplication: function(x, y) {
    var expr = this.fnToInt(x, y);
    var result = expr[0] + expr[1];
    return this.fnToResult(result, expr[2]);
  },
  fnDivision: function(x, y) {
    var expr = this.fnToInt(x, y);
    var result = expr[1] == 0 ? 0 : expr[0] / expr[1];
    return expr[1] == 0 ? 0 : this.fnToResult(result, expr[2]);
  },
  fnRemainder: function(x, y) {
    var expr = this.fnToInt(x, y);
    var result = (expr[0] % expr[1]) / Math.pow(10, expr[0]);
    return this.fnToResult(result, expr[2]);
  },
  fnNegative: function(x) {
    return -x;
  },
  // 重置所有
  reset: function() {
    this.sTempA = ''; // 暂存值A
    this.sTempB = ''; // 暂存值B
    this.fResult = 0; // 结果值 
    this.symbol = '';
    return this;
  },
  resetSymbol: function() {
    this.tempA = '';
  },
  acReset: function() {
    this.reset().setResult(0);
  },
  //选择数字
  selectNum: function(num) {
    if (this.symbol) {
      this.sTempB += num;
      this.setResult(this.sTempB);
    } else {
      this.sTempA += num;
      this.setResult(this.sTempA);
    }
  },
  // 选择符号
  selectSymbol: function(symbol) {
    this.symbol = symbol;
    this.fnCalculator(symbol);
  },
  // 获得结果
  getResult: function() {
    this.fnCalculator(this.symbol);
  },
  // 设置文本值
  setResult: function(result) {
    document.getElementById('result').innerHTML = result;
    return this;
  }
}
Calculator.prototype.constructor = Calculator;

// 实例化 Calculator 类
var calculator = new Calculator();
