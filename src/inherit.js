/**
 * 子类的原型对象—— 类式继承
 */
// 声明父类
function SuperClass1() {
  this.superValue = true;
}
// 为父类添加共有方法
SuperClass1.prototype.getSuperValue = function() {
  return this.superValue;
}
// 声明子类
function SubClass1() {
  this.subValue = false;
}
// 继承父类
SubClass1.prototype = new SuperClass1();
// 为子类添加共有方法
SubClass1.prototype.getSubValue = function() {
  return this.subValue;
}

/**
 * 类式继承的缺点
 * 一、由于子类通过其原型prototype对父类实例化，继承了父类。所以父类中的共有属性要是引用类型，就会在子类中被所有实例公用，
 * 因此一个子类的实例更改了子类原型从父类构造函数中继承来的共有属性就会直接影响到其他子类。
 * 二、由于子类实现的继承是靠其原型prototype对父类的实例化实现，因此在创建父类的时候，是无法向父类传递参数的，
 * 因而在实例化父类的时候也无法对父类构造函数内的属性进行初始化
 *
 * 解决方案
 * 创建即继承——构造函数继承
 */
// 声明父类
function SuperClass2(id) {
  // 引用类型共有属性
  this.books = ['Javascript', 'html', 'css'];
  // 值类型共有属性
  this.id = id;
}
// 父类声明原型方法
SuperClass2.prototype.showBooks = function() {
  console.log(this.books);
}
// 声明子类
function SubClass2(id) {
  SuperClass2.call(this, id);
}
// 创建第一个子类的实例
var ins1 = new SubClass2(10);
// 创建第二个子类的实例
var ins2 = new SubClass2(11);

ins1.books.push('设计模式');
// console.log(ins1.books);
// console.log(ins1.id);
// // console.log(ins1.showBooks()); // TypeError: ins1.showBooks is not a function
// console.log(ins2.books);
// console.log(ins2.id);

/**
 * 构造函数继承的缺点
 * 没有涉及原型prototype，父类的原型方法不会被子类继承
 *
 * 将优点为我所用——组合继承
 */
// 声明父类
function SuperClass3(name) {
  // 值类型共有属性
  this.name = name;
  // 引用类型共有属性
  this.books = ['html', 'css', 'javascript'];
}
// 父类原型共有方法
SuperClass3.prototype.getName = function() {
  return this.name;
}
// 声明子类
function SubClass3(name, time) {
  // 构造函数式继承父类name属性
  SuperClass3.call(this, name);
  this.time = time;
}
// 类式继承 子类原型继承父类
SubClass3.prototype = new SuperClass3();
// 子类原型方法
SubClass3.prototype.getTime = function() {
  return this.time;
}

// 创建第一个子类的实例
var ins3 = new SubClass3('one', 10);
// 创建第二个子类的实例
var ins4 = new SubClass3('two', 12);

ins3.books.push('设计模式');
// console.log(ins3.books);
// console.log(ins3.name);
// console.log(ins3.getName());
// console.log(ins3.getTime());
// console.log(ins4.books);
// console.log(ins4.name);
// console.log(ins4.getName());
// console.log(ins4.getTime());

/**
 * 组合式继承的缺点
 * 我们在使用构造函数继承式执行了一遍父类的构造函数，而在实现子类原型的类式继承式又调用了一遍父类构造函数
 * 因此父类构造函数调用了两遍，所以这不是最完美的方式
 *
 * 洁净的继承者——原型式继承
 */
// 原型式继承(对类式继承的一个封装)
function inheritObject(o) {
  // 声明一个过渡的函数对象
  function F() {}
  // 过渡对象的原型继承父对象
  F.prototype = o;
  // 返回过渡对象的一个实例，该实例的原型继承了父对象
  return new F();
}

/**
 * 如虎添翼——寄生式继承
 * 对原型继承的二次封装，并且在这第二次封装过程中对继承的对象进行了拓展
 */
// 声明基对象
var book = {
  name: 'js book',
  akikeBook: ['css book', 'html book']
}

function createBook(obj) {
  // 通过原型继承方式创建新对象
  var o = new inheritObject(obj);
  // 拓展新对象
  o.geName = function() {
    return name;
  }
  // 返回拓展后的新对象
  return o;
}

/**
 * 终极继承者——寄生组合式继承
 * 寄生式继承 继承原型
 * 传递参数 subClass 子类
 * 传递参数 superClass 父类
 */
function inheritPrototype(subClass, superClass){
  // 复制一份父类的原型副本保存在变量中
  var p = inheritObject(superClass.prototype);
  // 修正因为重写子类原型导致子类的constructor属性被修改
  p.constructor = subClass;
  // 设置子类的原型
  subClass.prototype = p;
}

