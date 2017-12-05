/**
 * 建造者模式（Builder）
 * 将一个复杂对象的构建层与其表示层相互分离，同样的构建过程可采用不同的表示
 */
// 创建一位人类
var Human = function(param) {
  // 技能
  this.skill = param && param.skill || '保密';
  // 兴趣爱好
  this.hobby = param && param.hobby || '保密';
}
// 人类原型方法
Human.prototype = {
  getSkill: function() {
    return this.skill;
  },
  getHobby: function() {
    return this.hobby;
  }
}
// 实例化姓名类
var Named = function(name) {
  var that = this;
  // 构造器
  // 构造函数解析姓名的姓与名
  (function(name, that) {
    that.wholeName = name;
    if (name.indexOf(' ') > -1) {
      that.FirstName = name.slice(0, name.indexOf(' '));
      that.SecondName = name.slice(name.indexOf(' '));
    }
  })(name, that);
}
// 实例化职位类
var Work = function(work) {
  var that = this;
  // 构造器
  // 构造函数中通过传入的职位特征来设置相应的职位以及描述
  (function(work, that) {
    switch (work) {
      case 'code':
        that.work = '工程师';
        that.workDescript = '每天沉醉于编程';
        break;
      case 'UI':
      case 'UE':
        that.work = '设计师';
        that.workDescript = '设计更似一种艺术';
        break;
      case 'teach':
        that.work = '教师';
        that.workDescript = '分享也是一种快乐';
        break;
      default:
        that.work = work;
        that.workDescript = '对不起，我们还不清楚你所选择职位的相关描述';
    }
  })(work, that)
}
// 更换期望的职位
Work.prototype.changeWork = function(work) {
  this.work = work;
}
// 添加对职位的描述
Work.prototype.changeDesprict = function(setence) {
  this.workDescript = setence;
}
/**
 * 应聘建造者
 * 参数：name 全名
 * 参数：work 期望职位
 */
var Person = function(name, work) {
  // 创建应聘者缓存对象
  var _person = new Human();
  // 创建应聘者姓名解析对象
  _person.name = new Named(name);
  // 创建应聘者期望职位
  _person.work = new Work(work);
  // 将创建的应聘者对象返回
  return _person;
}
var person = new Person('xiao ming', 'code');
console.log(person.skill);
console.log(person.name.FirstName);
console.log(person.work.work);
console.log(person.work.workDescript);
person.work.changeDesprict('更改一下职位描述');
console.log(person.work.workDescript);
