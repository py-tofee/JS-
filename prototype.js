/**
 * 原型链继承
 * 优点：父类方法可以复用
 * 缺点：
 * 1、父类的引用属性会被所有子类实例共享
 * 2、子类构建实例时不能向父类传递参数
 */
function Person(name, age) {
  this.name = name || 'unknown';
  this.age = age || 0;
  this.hobbies = ['music', 'reading']
}

Person.prototype.say = function () {
  console.log('i am a person');
  console.log(this); // Person { name: 'lily', score: 80 }
  console.log(this.score)
};

function Student(name) {
  this.name = name;
  this.score = 80
}

Student.prototype = new Person();

Student.prototype.run = function () {
  console.log(this); // Person { name: 'lily', score: 80 }
  console.log('i am running')
};


let stu1 = new Student('lily');


console.log(stu1.name);
console.log(Student.prototype.name);
console.log(stu1.age);
console.log(stu1.score);
console.log('name' in stu1);
if (stu1 instanceof Person) {
  console.log('stu instanceof Person')
}

if (stu1 instanceof Student) {
  console.log('stu instanceof Student')
}

stu1.say();
stu1.run();

stu1.hobbies.push('dancing');

let stu2 = new Student();
console.log(stu1.hobbies);
console.log(stu2.hobbies);
