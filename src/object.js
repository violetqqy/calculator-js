/**
 * 属性与方法的封装
 */
var Book1 = function(id, name, price) {
  // 私有属性
  var num = 1;
  // 私有方法
  function checkId() {

  };
  // 特权方法
  this.getName = function() {};
  this.getPrice = function() {};
  this.setName = function() {};
  this.setPrice = function() {};
  // 对象公有属性
  this.id = id;
  // 对象公有方法
  this.copy = function() {};
  // 构造器
  this.setName(name);
  this.setPrice(price);
}

// 类静态公有属性（对象不能访问）
Book1.isChinese = true;
// 类静态公有方法（对象不能访问）
Book1.resetTime = function() {
  console.log('new Time');
}

Book1.prototype = {
  // 公有属性
  isJSBook: false,
  // 公有方法
  display: function() {}
}

var b = new Book1(11, 'Javascript', 50);
console.log(b.num); // undefined
console.log(b.isJSBook); // true
console.log(b.id); // 11
console.log(b.isChinese); // undefined
console.log(Book1.isChinese); // true
Book1.resetTime(); // new Time

/**
 * 利用闭包实现
 */
var Book2 = (function() {
  // 静态私有变量
  var bookNum = 0;
  // 静态私有方法
  function checkBook(name) {}
  // 返回构造函数
  return function(newId, newName, newPrice) {
    // 私有变量
    var name, price;
    // 私有方法
    function checkID(id) {}
    // 特权方法
    this.getName = function() {}
    this.getPrice = function() {}
    this.setName = function() {}
    this.setPrice = function() {}
    // 公有属性
    this.id = newId;
    // 公有方法
    this.copy = function() {}
    bookNum++
    if (bookNum > 100) {
      throw new Error('我们仅出版100本书')
    }
    // 构造器
    this.setName(price);
    this.setPrice(name);
  }
})();

Book2.prototype = {
  // 静态公有属性
  isJSBook: false,
  // 静态公有方法
  display: function() {}
}

var b = new Book2(11, 'Javascript', 50);
console.log(b.bookNum); // undefined
console.log(b.isJSBook); // false
console.log(b.id); // 11
console.log(b.isChinese); // undefined

// 利用闭包实现
var Book3 = (function() {
  // 静态私有变量
  var bookNum = 0;
  // 静态私有方法
  function checkBook(name) {}
  // 创建类
  function _book(newId, newName, newPrice) {
    // 私有变量
    var name, price;
    // 私有方法
    function checkID(id) {}
    // 特权方法
    this.getName = function() {}
    this.getPrice = function() {}
    this.setName = function() {}
    this.setPrice = function() {}
    // 公有属性
    this.id = newId;
    // 公有方法
    this.copy = function() {}
    bookNum++;
    if (bookNum > 100) {
      throw new Error('我们仅出版了100本书');
    }
    // 构造器
    this.setName(name);
    this.setPrice(price);
  }
  // 构建原型
  _book.prototype = {
    // 静态公有属性
    isJSBook: false,
    // 静态公有方法
    display: function() {}
  }
  // 返回类
  return _book;
})();

/**
 * 创建对象的安全模式
 */
var Book4 = function(title, time, type) {
  // 判断执行过程中this是否是当前这个对象「如果是说明是用new创建的」
  if (this instanceof Book4) {
    this.title = title;
    this.time = time;
    this.type = type;
    // 否则重新创建这个对象
  } else {
    return new Book4(title, time, type);
  }
}
