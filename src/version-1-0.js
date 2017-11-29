// Calculator 类 实现简单的加减乘除计算
var Calculator = function() {}
Calculator.prototype = {
  result: 0, // 结果值
  template: '', // 暂存值
  symbol: null, // 符号
  // 实现加法
  addition: function(x) {
    this.getLog();
    this.result += Number(x);
    this.template = '';
    return this;
  },
  // 实现减法
  subtraction: function(x) {
    this.getLog();
    this.result -= Number(x);
    this.template = '';
    return this;
  },
  // 实现乘法
  multiplication: function(x) {
    this.getLog();
    this.result *= Number(x);
    this.template = '';
    return this;
  },
  // 实现除法
  division: function(x) {
    this.getLog();
    if (this.result) {
      this.result /= Number(x);
    }
    this.template = '';
    return this;
  },
  // 取负数
  negative: function() {
    this.getLog();
    this.result = -Number(this.result);
    return this;
  },
  // 实现取余数
  remainder: function(x) {
    this.getLog();
    if (this.template) {
      this.result %= Number(x);
    }
    this.template = '';
    return this;
  },
  // 重置所有
  reset: function() {
    this.result = 0;
    this.template = '';
    this.symbol = null;
    return this;
  },
  acReset: function() {
    this.reset().setResult(0);
  },
  // 选择数字
  selectNum: function(num) {
    this.template += num;
    this.setResult(this.template);
  },
  // 选择符号
  selectSymbol: function(symbol) {
    this.switchResult(this.symbol);
    this.symbol = symbol;
    if (symbol == '~') {
      this.switchResult(this.symbol);
    }
  },
  // 获得结果
  getResult: function() {
    this.switchResult(this.symbol);
  },
  // 判断符号并进行相应的计算
  switchResult: function(symbol) {
    switch (symbol) {
      case '+':
        this.addition(this.template).setResult(this.result);
        break;
      case '-':
        this.subtraction(this.template).setResult(this.result);
        break;
      case '*':
        this.multiplication(this.template).setResult(this.result);
        break;
      case '/':
        this.division(this.template).setResult(this.result);
        break;
      case '~':
        this.negative().setResult(this.result);
        break;
      case '%':
        this.remainder(this.template).setResult(this.result);
        break;
      default:
        this.addition(this.template).setResult(this.result);
        break;
    }
  },
  // 设置文本值
  setResult: function(result) {
    document.getElementById('result').innerHTML = result;
    return this;
  },
  // 打印
  getLog: function() {
    console.table({
      result: this.result,
      symbol: this.symbol,
      template: this.template
    })
  }
}
Calculator.prototype.constructor = Calculator;

// 实例化 Calculator 类
var calculator = new Calculator();
