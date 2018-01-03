// javascript事件
// DOM0级事件 onclick
// DOM2级事件 addEventListener removeEventListener（捕获、处于目标、冒泡）
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

//数组去重
Array.prototype.method1 = function() {
    var arrResult = [];
    var arrCopy = this;
    for (var i = 0; i < arrCopy.length; i++) {
        if (arrResult.indexOf(arrCopy[i]) === -1) {
            arrResult.push(arrCopy[i]);
        }
    }
    return arrResult;
}

Array.prototype.method2 = function() {
    var arrResult = [];
    var arrCopy = this;
    for (var i = 0; i < arrCopy.length; i++) {
        for (var j = i + 1; j < arrCopy.length; j++) {
            var tempi = arrCopy[i]; //获取第一个值，并与后一个值比较
            var tempj = arrCopy[j];
            if (tempi > tempj) {
                arrCopy[i] = tempj;
                arrCopy[j] = tempi; //如果前一个值比后一个值大，那么相互交换

            }
        }
        return arrCopy;
    }
}

// 冒泡排序
Array.prototype.BubbleSort = function() {
    var arr = this.slice(0);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log(this);
    console.log(arr);
    return arr;
}

var array1 = [1, 4, '7', '4', 6, 2, 3, 4, 6];
// console.log(array1.method2());
array1.BubbleSort();
