/**
 * 原始代码
 */
// 警示框类
var LoginAlert = function(text) {
  this.content = text;
}

LoginAlert.prototype.show = function() {
  alert(this.content);
  // 显示警示框
}

var userNameAlert = new LoginAlert('用户名不能多于16个字母或数字');
userNameAlert.show();

var passwordAlert = new LoginAlert('输入的密码不正确');
passwordAlert.show();

// 确认框类
var LoginConfirm = function(text) {
  this.content = text;
}

LoginConfirm.prototype.show = function() {
  alert(this.content);
  // 显示确认框（加注册按钮）
}

// 自定义提示框类
var LoginPrompt = function(text) {
  this.content = text;
}

LoginPrompt.prototype.show = function() {
  alert(this.content);
  // 显示提示框（加取消按钮）
}

/**
 * 简单工厂类
 */
var PopFactory = function(name, text) {
  switch (name) {
    case 'alert':
      return new LoginAlert(text);
    case 'confirm':
      return new LoginConfirm(text);
    case 'prompt':
      return new LoginPrompt(text);
  }
}

/**
 * 抽象 用简单工厂模式实现
 */
function createPop(type, text) {
  // 创建一个对象，并对对象拓展属性和方法
  var o = new Object();
  o.content = text;
  o.show = function() {
    // 显示方法
  }
  if (type === 'alert') {
    // 警示框差异部分
  }
  if (type === 'confirm') {
    // 警示框差异部分
  }
  if (type === 'prompt') {
    // 警示框差异部分
  }
  return o;
}
// 创建警示框
var userNameAlert1 = createPop('alert', '用户名不能多于16个字母或数字');

/**
 * 差异
 * 第一种是通过类实例化对象创建的
 * 第二种是通过创建一个新对象然后包装增强其属性和功能来实现的
 * 他们之间的差异性也造成前面通过类创建的对象，如果这些类继承同一父亲，那么他们的父亲原型上的方法是可以公用的
 * 而后面寄生方式创建的对象都是一个新的个体，所以他们的方法就不能共用了
 */
