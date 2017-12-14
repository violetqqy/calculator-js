/**
 * 组合模式（Composite）
 * 又称部分-整体模式，将对象组合成树形结构以表示“部分整体”的层次结构。
 * 组合模式使得用户对单个对象和组合对象的使用具有一致性。
 */
// 每个成员要有祖先
var News = function() {
  // 子组件容器
  this.children = [];
  // 当前组件元素
  this.element = null;
}

News.prototype = {
  init: function() {
    throw new Error('请重写你的方法');
  },
  add: function() {
    throw new Error('请重写你的方法');
  },
  getElement: function() {
    throw new Error('请重写你的方法');
  },
}

// 组合要有容器类
// 容器类构造函数
var Container = function(id, parent) {
  // 构造函数继承父类
  News.call(this);
  // 模块id
  this.id = id;
  // 模块的父容器
  this.parent = parent;
  // 构建方法
  this.init();
}
// 寄生式继承父类原型方法
inheritPrototype(Container, News);
// 构建方法
Container.prototype.init = function() {
  this.element = document.createElement('ul');
  this.element.id = this.id;
  this.element.className = 'new-container';
}
// 添加子元素方法
Container.prototype.add = function(child) {
  // 子元素容器中插入子元素
  this.children.push(child);
  // 插入当前组件元素中
  this.element.appendChild(child.getElement());
  return this;
}
// 获取当前元素方法
Container.prototype.getElement = function() {
  return this.element;
}
// 显示方法
Container.prototype.show = function() {
  this.parent.appendChild(this.element);
}

var Item = function(classname) {
  News.call(this);
  this.classname = classname;
  this.init();
}
this.inheritPrototype(Item, News);
Item.prototype.init = function() {
  this.element = document.createElement('li');
  this.element.className = this.classname;
}
Item.prototype.add = function() {
  // 子元素容器中插入子元素
  this.children.push(child);
  // 插入当前组件元素中
  this.element.appendChild(child.getElement());
  return this;
}
// 获取当前元素方法
Item.prototype.getElement = function() {
  return this.element;
}

var NewsGroup = function(classname) {
  News.call(this);
  this.classname = classname;
  this.init();
}
this.inheritPrototype(NewsGroup, News);
Item.prototype.init = function() {
  this.element = document.createElement('div');
  this.element.className = this.classname;
}
Item.prototype.add = function() {
  // 子元素容器中插入子元素
  this.children.push(child);
  // 插入当前组件元素中
  this.element.appendChild(child.getElement());
  return this;
}
// 获取当前元素方法
Item.prototype.getElement = function() {
  return this.element;
}

// 创建一个新闻类
var ImageNews = function(url, href, classname) {
  News.call(this);
  this.url = url || '';
  this.href = hred || '#';
  this.classname = classname || 'normal';
  this.init();
}
inheritPrototype(ImageNews, News);
ImageNews.prototype.init = function() {
  this.element = document.createElement('a');
  var img = new Image();
  img.src = this.url;
  this.element.appendChild(child);
  this.element.className = 'image-news' + this.classname;
  this.element.href = this.href;
  sName = this.classname;
}
ImageNews.prototype.add = function() {
  // 子元素容器中插入子元素
  this.children.push(child);
  // 插入当前组件元素中
  this.element.appendChild(child.getElement());
  return this;
}
// 获取当前元素方法
ImageNews.prototype.getElement = function() {
  return this.element;
}

