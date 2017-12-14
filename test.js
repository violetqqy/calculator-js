'use strict';

// (function() {
//   console.log(varTest); //输出undefined(注意要注释掉下面一行才能运行)
//   console.log(letTest); //直接报错：ReferenceError: letTest is not defined

//   var varTest = 'test var OK.';
//   let letTest = 'test let OK.';
// }());
function f() { console.log('I am outside!'); }

(function() {
  if (false) {
    // 重复声明一次函数f
    function f() { console.log('I am inside!'); }
  }

  f();
}());
