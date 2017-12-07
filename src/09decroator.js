/**
 * 装饰者模式（Decroator）
 * 在不改变原对象的基础上，通过对其进行包装拓展（添加属性或者方法）使原有对象可以满足用户的更复杂需求。
 */

// 原始代码
// 输入框元素
var telInput = document.getElementById('tel_input');
// 输入格式提示文案
var telWarnText = document.getElementById('tel_warn_text');
// 点击输入框显示输入格式提示文案
input.onclick = function() {
  telWarnText.style.display = 'inline-block';
}

// 增加需求
// 输入框元素
var telInput = document.getElementById('tel_input');
// 输入框格式提示文案
var telWarnText = document.getElementById('tel_warn_text');
// 输入框提示文案
var telDemoText = document.getElementById('tel_demo_text');
// 点击输入框显示输入框格式提示文案并隐藏输入提示文案
input.onclick = function() {
  telWarnText.style.display = 'inline-block';
  telDemoText.style.display = 'none';
}

/**
 * 装饰已有的功能对象
 */
// 装饰者
var decorator = function(input, fn) {
  // 获取事件源
  var input = document.getElementById(input);
  // 若原事件源已绑定事件
  if(typeof input.onclick = 'function'){
    // 缓存事件源原有回调函数
    var oldClickFn = input.onclick;
    // 为事件源定义新的事件
    input.onclick = function(){
      oldClickFn();
      fn();
    }
  } else {
    // 事件源未绑定事件，直接为事件源添加新增回调函数
    input.onclick = fn;
  }
  // 做其他事情
}

/**
 * 为输入框添砖加瓦
 */
// 电话输入框功能装饰
decorator('tel_input', function(){
  document.getElementById('tel_demo_text').style.display = 'none';
})
// 姓名输入框功能装饰
decorator('name_input', function(){
  document.getElementById('name_demo_text').style.display = 'none';
})
// 地址输入框功能装饰
decorator('address_input', function(){
  document.getElementById('address_demo_text').style.display = 'none';
})

