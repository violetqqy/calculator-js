/**
 * 单例模式（Singleton）
 * 又被称为单体模式，是只允许实例化一次的对象类。有时我们也用一个对象来规划一个命名空间，
 * 井井有条地管理对象上的属性与方法。
 */
// 小型代码库
var A = {
  Util: {
    util_method1: function() {},
    util_method2: function() {}
    // ...
  },
  Tool: {
    tool_method1: function() {},
    tool_method2: function() {}
    // ...
  },
  Ajax: {
    ajax_method1: function() {},
    ajax_method2: function() {}
    // ...
  },
  others: {
    // ...
  }
  // ...
}

// 无法改变的静态变量
var Conf = (function() {
  // 私有变量
  var conf = {
    MAX_NUM: 100,
    MIN_NUM: 1,
    COUNT: 100,
  }
  // 返回取值器
  return {
    // 取值器方法
    get: function(name) {
      return conf[name] ? conf[name] : null;
    }
  }
})();
var count = Conf.get('COUNT');
console.log(count);

/**
 * 有些时候对于单例对象需要延迟创建，所以在单例中还存在一种延迟创建的形式，有人也称之为“惰性创建”。
 */
// 惰性单例
var LazySingle = (function() {
  // 单例实例引用
  var _instence = null;
  // 单例
  function Single() {
    // 这里定义私有属性和方法
    return {
      publicMethod: function() {},
      publicProperty: '1.0'
    }
  }
  // 获取单例对象接口
  return function() {
    // 如果未创建单例将创建单例
    if (!_instence) {
      _instence = Single();
    }
    // 返回单例
    return _instence;
  }
})();
console.log(LazySingle().publicProperty);
