/**
 * 原型模式（Prototype）
 * 用原型实例指向创建对象的类，使用于创建心的对象的类共享原型对象的属性和方法
 */
// 原始实现
// 图片轮播类
var LoopImages1 = function(imgArr, container) {
  this.imageArray = imgArr; // 轮播图片数组
  this.container = container; // 轮播图片容器
  this.createImage = function() {} // 创建轮播图片
  this.changeImage = function() {} // 切换下一张图片
}

// 上下滑动切换类
var SlideLoopImg1 = function(imgArr, container) {
  // 构造函数继承图片轮播类
  LoopImages1.call(this, imgArr, container);
  // 重写继承的切换下一张图片的方法
  this.changeImage = function() {
    console.log('SlideLoopImg changeImage function');
  }
}
// 渐隐切换类
var FadeLoopImg1 = function(imgArr, container, arrow) {
  // 构造函数继承图片轮播类
  LoopImages1.call(this, imgArr, container);
  // 切换箭头私有变量
  this.arrow = arrow;
  // 重写继承的切换下一张图片的方法
  this.changeImage = function() {
    console.log('FadeLoopImg changeImage function');
  }
}
// 实例化一个渐隐切换图片类
var fadeImg = new FadeLoopImg1(['01.jpg', '02.jpg', '03.jpg'], 'slide', ['lefy.jpg', 'right.jpg']);
fadeImg.changeImage();

// 原型模式
var LoopImages = function(imgArr, container) {
  this.imageArray = imgArr; // 轮播图片数组
  this.container = container; // 轮播图片容器
}
LoopImages.prototype = {
  // 创建轮播图片
  createImage: function() {
    console.log('LoopImages createImage function');
  },
  // 切换下一张图片
  changeImage: function() {
    console.log('LoopImages changeImage function');
  }
}
// 上下滑动切换类
var SlideLoopImg = function(imgArr, container) {
  // 构造函数继承图片轮播类
  LoopImages.call(this, imgArr, container);
}
SlideLoopImg.prototype = new LoopImages();
// 重写继承的切换下一张图片的方法
SlideLoopImg.prototype.changeImage = function() {
  console.log('SlideLoopImg changeImage function');
}
// 渐隐切换类
var FadeLoopImg = function(imgArr, container, arrow) {
  // 构造函数继承图片轮播类
  LoopImages.call(this, imgArr, container);
  // 切换箭头私有变量
  this.arrow = arrow;
}
FadeLoopImg.prototype = new LoopImages();
// 重写继承的切换下一张图片的方法
FadeLoopImg.prototype.changeImage = function() {
  console.log('FadeLoopImg changeImage function');
}

// 测试用例
var fadeImg = new FadeLoopImg(['01.jpg', '02.jpg', '03.jpg'], 'slide', ['lefy.jpg', 'right.jpg']);
fadeImg.changeImage();


/**
 * 基于已经存在的模版对象克隆出新对象的模式
 * arguments[0], arguments[1], arguments[2]: 参数1， 参数2， 参数3 表示模版对象
 * 注意。这里对模版引用类型的属性实质上进行了浅复制（引用类型属性共享），当然根据需求可以自行深复制（引用类型属性复制）
 */
function prototypeExtend() {
  var F = function() {}, // 缓存类，为实例化返回对象临时创建
    args = arguments,
    i = 0,
    len = args.length;
  for (; i < len; i++) {
    // 遍历每个模版对象中的属性
    for (var j in args[i]) {
      // 将这些属性复制到缓存类原型中
      F.prototype[j] = args[i][j];
    }
  }
  // 返回缓存类的一个实例
  return new F();
}
// 企鹅对象
var penguin = prototypeExtend({
  speed: 20,
  swim: function() {
    console.log('游泳速度' + this.speed);
  }
}, {
  run: function(speed) {
    console.log('奔跑速度' + speed);
  }
}, {
  jump: function() {
    console.log('跳跃动作');
  }
});

penguin.swim();
penguin.run(10);
penguin.jump();
