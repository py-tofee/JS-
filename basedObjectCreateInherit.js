/**
 * ================================================原型式继承================================================
 * 核心：本质上是对参数对象的一个浅复制
 * 优点：父类方法可以复用
 * 缺点：
 * 1、父类的引用属性会被所有子类实例共享
 * 2、子类构建实例时不能向父类传递参数
 */

function clone(prototype) {
  function F() {}

  F.prototype = prototype;

  return new F();
}

let person = {
  name: 'lily',
  hobbies: ['music', 'reading']
};

let stu1 = clone(person);
let stu2 = clone(person);

stu1.name = 'stu1';
stu1.hobbies.push('dancing');

console.log(stu1.name, stu2.name);
console.log(stu1.hobbies, stu2.hobbies);

/**
 * ECMAScript 5 通过新增 Object.create()方法规范化了原型式继承。
 * 这个方法接收两个参数:
 * 一 个用作新对象原型的对象和(可选的)一个为新对象定义额外属性的对象。
 * 在传入一个参数的情况下， Object.create()与 object()方法的行为相同。
 * ——《JAVASCript高级编程》
 */
let stu3 = Object.create(person);

console.log(stu3.name);
console.log(stu3.hobbies);

/**
 * ================================================寄生式继承================================================
 * 在原型式继承的基础上,做了一些增强
 */
function clone1(prototype) {
  function F() {}

  F.prototype = prototype;

  let f = new F();

  // 在实例上添加的引用属性跟 构造函数 模式一样，不会被所有实例共享
  f.say = function () {
    console.log('i am a person')
  };

  return f
}

let stu4 = clone1(person);
let stu5 = clone1(person);

console.log(stu4.say === stu5.say);

/**
 * ================================================寄生组合式继承================================================
 */
function inherit(subType, superType) {
  let prototype = Object(superType.prototype); // 创建了父类原型的浅复制
  prototype.constructor = subType; // 修正原型的构造函数
  subType.prototype = prototype; // 将子类的原型替换为这个原型
}

function SuperType(name) {
  this.name = name;
  this.colors = ['red', 'blue'];
}

SuperType.prototype.sayName = function () {
  console.log(this.name)
};

function SubType(name, age) {
  SuperType.call(this, name);
  this.age = age;
}

// 核心：因为是对父类原型的复制，不包含父类原型的构造函数，所以不会调用两次父类构造函数造成浪费
inherit(SubType, SuperType);

SubType.prototype.sayAge = function () {
  console.log(this.age)
};

let sub1 = new SubType('sub1', 10);
let sub2 = new SubType('sub2', 20);

console.log(sub1.name);
console.log(sub2.name);
sub1.sayAge();
sub2.sayAge();
sub1.sayName();
sub2.sayName();

sub1.colors.push('green');

console.log(sub1.colors);
console.log(sub2.colors);

/**
 * ================================================ES6 Class Extends================================================
 */

