/**
 * 桥接模式（Bridge）
 * 在系统沿着多个维度变化的同时，又不增加其复杂度并已达到解耦
 */

// 原始代码
var spans = document.getElementsByTagName('span');
// 为用户名绑定特效
span[0].onmouseover = function() {
  this.style.color = 'red';
  this.style.background = '#ddd';
}
span[0].onmouseout = function() {
  this.style.color = '#333';
  this.style.background = '#f5f5f5';
}
// 为等级绑定特效
span[1].onmouseover = function() {
  this.getElementsByTagName('strong')[0].style.color = 'red';
  this.getElementsByTagName('strong')[0].style.background = '#ddd';
}
span[1].onmouseout = function() {
  this.getElementsByTagName('strong')[0].style.color = '#333';
  this.getElementsByTagName('strong')[0].style.background = '#f5f5f5';
}

/**
 * 提取共同特点
 */
// 抽象
function changeColor(dom, color, bg) {
  // 设置元素的字体颜色
  dom.style.color = color;
  // 设置元素的背景颜色
  dom.style.background = bg;
}

/**
 * 事件与业务逻辑之间的桥梁
 */
// 为用户名绑定特效
span[0].onmouseover = function() {
  changeColor(this, 'red', '#ddd');
}
span[0].onmouseout = function() {
  changeColor(this, '#333', '#f5f5f5');
}
// 为等级绑定特效
span[1].onmouseover = function() {
  changeColor(this.getElementsByTagName('strong')[0], 'red', '#ddd');
}
span[1].onmouseout = function() {
  changeColor(this.getElementsByTagName('strong')[0], '#333', '#f5f5f5');
}

/**
 * 多元化对象
 */
// 多维变量类
// 运动单元
function Speed(x, y) {
  this.x = x;
  this.y = y;
}
Speed.prototype.run = function() {
  console.log('运动起来');
}
// 着色单元
function Color(cl) {
  this.color = cl;
}
Color.prototype.draw = function() {
  console.log('绘制色彩');
}
// 变形单元
function Shape(sp) {
  this.shape = sp;
}
Shape.prototype.change = function() {
  console.log('改变形状');
}
// 说话单元
function Speek(wd) {
  this.word = wd;
}
Speek.prototype.say = {
  console.log('书写字体');
}

// 球类
function Ball(x, y, c) {
  // 实现运动单元
  this.speed = new Speed(x, y);
  // 实现着色单元
  this.color = new Color(c);
}
Ball.prototype.init = function() {
  // 实现运动
  this.speed.run();
  // 实现着色
  this.color.draw();
}

// 人类
function People(x, y, f) {
  this.speed = new Speed(x, y);
  this.font = new Speek(c);
}
People.prototype.init = function() {
  this.speed.run();
  this.font.say();
}

// 精灵类
function Spirite(x, y, c, s) {
  this.speed = new Speed(x, y);
  this.color = new Color(c);
  this.shape = new Shape(s);
}
Spirite.prototype.init = function() {
  this.speed.run();
  this.color.draw();
  this.shape.change();
}

// 实例
var p = new People(10, 12, 16);
p.init();
