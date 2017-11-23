/**
 * 原始面向过程编程
 * 缺点：创建了很多变量 很容易被覆盖
 */
var addition = function(x, y) {
  return x + y;
}
var subtraction = function(x, y) {
  return x - y;
}
var multiplication = function(x, y) {
  return x * y;
}
var division = function(x, y) {
  return x / y;
}

/**
 * 用对象收编变量
 * 缺点：不能复制对象 无法使用new关键字创建对象继承该方法
 */
var CalculatorObj1 = {
  addition: function(x, y) {
    return x + y;
  },
  subtraction: function(x, y) {
    return x - y;
  },
  multiplication: function(x, y) {
    return x * y;
  },
  division: function(x, y) {
    return x / y;
  }
}
var a = CalculatorObj1;
console.log('[a === CalculatorObj1]: ' + (a === CalculatorObj1)); // true 
console.log('[a.addition(1, 1)]: ' + a.addition(1, 1));

/**
 * 真假对象
 * 将方法放在一个函数对象中（每次调用这个函数，就把对象返回出来）
 * 当别人每次调用该函数是都返回了新对象
 */
var CalculatorObj2 = function() {
  return {
    addition: function(x, y) {
      return x + y;
    },
    subtraction: function(x, y) {
      return x - y;
    },
    multiplication: function(x, y) {
      return x * y;
    },
    division: function(x, y) {
      return x / y;
    }
  }
}
var b = CalculatorObj2();
console.log('[b === CalculatorObj2()]: ' + (b === CalculatorObj2())); // false
console.log('[b.addition(1, 1)]: ' + b.addition(1, 1));
// 链式调用
var CalculatorObj2Copy = function() {
  return {
    result: 0,
    addition: function(x) {
      this.result += x;
      return this;
    },
    subtraction: function(x) {
      this.result -= x;
      return this;
    },
    multiplication: function(x) {
      this.result *= x;
      return this;
    },
    division: function(x) {
      this.result /= x;
      return this;
    }
  }
}
var b1 = CalculatorObj2Copy();
b1.addition(3).subtraction(1).multiplication(6).division(3); // (3-1)*6/3=4
console.log('[b1.result]: ' + b1.result);

/**
 * 使用类
 */
var CalculatorObj3 = function() {
  this.addition = function(x, y) {
    return x + y;
  };
  this.subtraction = function(x, y) {
    return x - y;
  };
  this.multiplication = function(x, y) {
    return x * y;
  };
  this.division = function(x, y) {
    return x / y;
  };
}
var c = new CalculatorObj3(); // 实例化
console.log('[c.__proto__ === CalculatorObj3.prototype]: ' + (c.__proto__ === CalculatorObj3.prototype)); // true
console.log('[c.addition(1, 1)]: ' + c.addition(1, 1));

/**
 * 优化类
 * 使用this定义函数内部的方法 每次使用new关键字创建新对象时 新对象都会对类的this进行复制
 * 新对象都会有自己的一套方法 从而造成很大的消耗
 */
var CalculatorObj4 = function() {}
CalculatorObj4.prototype = {
  addition: function(x, y) {
    return x + y;
  },
  subtraction: function(x, y) {
    return x - y;
  },
  multiplication: function(x, y) {
    return x * y;
  },
  division: function(x, y) {
    return x / y;
  }
}
var d = new CalculatorObj4(); // 实例化
console.log('[d.addition(1, 1)]: ' + d.addition(1, 1));
console.log('[d.subtraction(1, 1)]: ' + d.subtraction(1, 1));
console.log('[d.multiplication(1, 1)]: ' + d.multiplication(1, 1));
console.log('[d.division(1, 1)]: ' + d.division(1, 1));

/**
 * 链式调用类
 */
var CalculatorObj5 = function() {}
console.log(CalculatorObj5.prototype.constructor); // CalculatorObj5
// 重写 CalculatorObj5.prototype
// CalculatorObj5.prototype.constructor 指向 Object
CalculatorObj5.prototype = {
  result: 0,
  addition: function(x) {
    this.result += x;
    return this;
  },
  subtraction: function(x) {
    this.result -= x;
    return this;
  },
  multiplication: function(x) {
    this.result *= x;
    return this;
  },
  division: function(x) {
    this.result /= x;
    return this;
  },
  reset: function() {
    this.result = 0;
    return this;
  }
}
console.log(CalculatorObj5.prototype.constructor); // Object
CalculatorObj5.prototype.constructor = CalculatorObj5; // 恢复CalculatorObj5.prototype.constructor指向
var e = new CalculatorObj5(); // 实例化
e.addition(3).subtraction(1).multiplication(6).division(3); // (3-1)*6/3=4
console.log('[e.result]: ' + e.result);
console.log(CalculatorObj5 == e.constructor);
