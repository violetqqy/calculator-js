/**
 * 工厂方法
 * 1.简单工厂模式（Simple Factory）
 * 又叫静态工厂方法，由一个工厂对象决定创建某一种产品对象类的实例。主要用来创建同一类对象。
 * 2.工厂方法模式（Factory Method）
 * 通过对产品类的抽象使其创建业务的主要负责用于创建多类产品的实例。
 * 3.抽象工厂模式
 * 通过对类的工厂抽象使其业务用于对产品类簇的创建，而不负责创建某一产品的实例。
 */
// 安全模式创建的工厂类
var Factory = function(type, content) {
  if (this instanceof Factory) {
    var a = new this[type](content);
  } else {
    return new Factory(type, content);
  }
}
// 工厂原型中设置创建所有类型数据对象的基类
Factory.prototype = {
  Java: function(content) {
    // 将内容保存 以备日后使用
    this.content = content;
    // 创建对象时 通过闭包 直接执行 将内容按需求的样式插入到页面内
    (function(content) {
      var div = document.createElement('div');
      div.innerHTML = content;
      div.style.border = '1px solid yellow';
      document.getElementById('container').appendChild(div);
    })(content);
  },
  JavaScript: function(content) {
    this.content = content;
    (function(content) {
      var div = document.createElement('div');
      div.innerHTML = content;
      div.style.border = '1px solid blue';
      document.getElementById('container').appendChild(div);
    })(content);
  },
  UI: function(content) {
    this.content = content;
    (function(content) {
      var div = document.createElement('div');
      div.innerHTML = content;
      div.style.border = '1px solid red';
      document.getElementById('container').appendChild(div);
    })(content);
  },
  PHP: function(content) {
    this.content = content;
    (function(content) {
      var div = document.createElement('div');
      div.innerHTML = content;
      div.style.border = '1px solid green';
      document.getElementById('container').appendChild(div);
    })(content);
  },
}

var test = new Factory('Java', 'it\'s java');

/**
 * 抽象工厂模式（Abstract Factory）
 * 通过对类的工厂抽象使其业务用于对产品类簇的创建，而不负责创建某一类产品的实例
 */
// 汽车抽象类 当使用其实例对象的方法时会抛出错误
var Car = function() {};
Car.prototype = {
  getPrice: function() {
    return new Error('抽象方法不能调用');
  },
  getSpeed: function() {
    return new Error('抽象方法不能调用');
  },
}

// 抽象工厂方法
var VehicleFactory = function(subType, superType) {
  // 判断抽象工厂方法中是否有该抽象类
  if (typeof VehicleFactory[superType] === 'function') {
    // 缓存类
    function F() {};
    // 继承父类属性和方法
    F.prototype = new VehicleFactory[superType]();
    // 将子类的constructor指向子类
    subType.constructor = subType;
    // 子类原型继承 父类[]
    subType.prototype = new F();
  } else {
    // 不存在该抽象类抛出错误
    throw new Error('未创建该抽象类');
  }
}
// 小汽车抽象类
VehicleFactory.Car = function() {
  this.type = 'car';
}
VehicleFactory.Car.prototype = {
  getPrice: function() {
    return new Error('抽象方法不能调用');
  },
  getSpeed: function() {
    return new Error('抽象方法不能调用');
  }
}
// 公交车抽象类
VehicleFactory.Bus = function() {
  this.type = 'bus';
}
VehicleFactory.Bus.prototype = {
  getPrice: function() {
    return new Error('抽象方法不能调用');
  },
  getPassageNumber: function() {
    return new Error('抽象方法不能调用');
  }
}
// 货车抽象类
VehicleFactory.Truck = function() {
  this.type = 'truck';
}
VehicleFactory.Truck.prototype = {
  getPrice: function() {
    return new Error('抽象方法不能调用');
  },
  getTrainload: function() {
    return new Error('抽象方法不能调用');
  }
}
/**
 * 抽象与实现
 */
// 宝马汽车类
var BMW = function(price, speed) {
  this.price = price;
  this.speed = speed;
}
// 抽象工厂实现对Car抽象类的继承
VehicleFactory(BMW, 'Car');
BMW.prototype.getPrice = function() {
  return this.price;
}
BMW.prototype.getSpeed = function() {
  return this.speed;
}

//TEST
var car = new BMW(100000, 100);
console.log(car.getPrice());
console.log(car.getSpeed());
