/**
 * 原型链和构造函数的 组合继承
 * 普通属性使用 构造函数继承，函数 使用原型链继承
 * 总结：
 * 1、原型链继承,会共享引用属性
 * 2、构造函数继承,会独享所有属性,包括引用属性(重点是函数)
 * 3、组合继承,利用原型链继承要共享的属性,利用构造函数继承要独享的属性,实现相对完美的继承
 * 缺点：父类构造函数代码会执行2遍
 */

function Person(name) {
  this.name = name;
  this.hobbies = ['music', 'reading'];
}

Person.prototype.say = function () {
  console.log('my name is ' + this.name)
};

function Student(name) {
  Person.call(this, name)
}

Student.prototype = new Person();

let stu1 = new Student('stu1');
let stu2 = new Student('stu2');

stu1.hobbies.push('dancing');

console.log(stu1.hobbies);
console.log(stu2.hobbies);

stu1.say();
stu2.say();

console.log(stu1.say === stu2.say);

