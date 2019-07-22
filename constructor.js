/**
 * 借用构造函数继承
 * 优点：
 * 1、父类的引用属性不会被所有子类实例共享
 * 2、子类构建实例时可以向父类传递参数
 * 缺点：
 * 函数也是引用类型，也不能被共享了
 * 导致父类的方法不能复用
 */

function Person(name) {
  this.name = name;
  this.hobbies = ['music', 'reading'];

  this.say = function () {
    console.log('my name is ' + this.name)
  }
}

function Student(name) {
  Person.call(this, name)
}

let stu1 = new Student('stu1');
let stu2 = new Student('stu2');

stu1.hobbies.push('dancing');

console.log(stu1.hobbies);
console.log(stu2.hobbies);
console.log(stu1.name);
console.log(stu2.name);

stu1.say();
stu2.say();

console.log(stu1.say === stu2.say);
