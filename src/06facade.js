/**
 * 外观模式（Facade）
 * 为一组复杂的子系统接口提供一个更高级的统一的接口，通过这个接口使得对子系统接口的访问更容易。
 * 在JavaScript中有时也会用于对底层结构兼容性做统一封装来简化用户使用。
 */

// 对JavaScript事件的封装
// DOM0级事件 onclick
// DOM1级事件 addEventListener removeEventListener（捕获、处于目标、冒泡）
// IE中的事件 attachEvent detachEvent（冒泡）
var EventUtil = {
  addHandler: function(element, type, handler) {
    if (element.addEventListener) {
      element.addEventListener(type, handler, false);
    } else if (element.attachEvent) {
      element.attachEvent('on' + type, handler);
    } else {
      element['on' + type] = handler;
    }
  },
  removeHandler: function(element, type, handler) {
    if (element.removeEventListener) {
      element.removeEventListener(type, handler, false);
    } else if (element.detachEvent) {
      element.detachEvent('on' + type, handler);
    } else {
      element['on' + type] = null;
    }
  },
  getEvent: function(event) {
    return event ? event : window.event;
  },
  getTarget: function(event) {
    return event.target || event.srcElement;
  },
  preventDefault: function(event) {
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  },
  stopPropagation: function(event) {
    if (event.stopPropagation) {
      event.stopPropagation();
    } else {
      event.cancelBubble = true;
    }
  }
}

// 简约版属性样式方法库
var A = {
  // 通过id获取元素
  g: function(id) {
    return document.getElementById(id);
  },
  // 设置元素css属性
  css: function(id, key, value) {
    document.getElementById(id).style[key] = value;
  },
  // 设置元素的属性
  attr: function(id, key, value) {
    document.getElementById(id)[key] = value;
  },
  html: function(id, html) {
    document.getElementById(id).innerHTML = html;
  },
  on: function(id, type, fn) {
    document.getElementById(id)['on' + type] = fn;
  }
};

A.css('box', 'background', 'red'); // 设置css样式
A.attr('box', 'className', 'box'); // 设置class
A.html('box', 'This is new add.'); // 设置内容
A.on('box', 'click', function() { //绑定事件
  A.css('box', 'width', '500px');
})
