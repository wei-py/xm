// instanceof
// Object.prototype.isPrototypeOf

// 借用构造函数
// 问题一: 当原型链中包含引用类型值的原型时,该引用类型值会被所有实例共享;
// 问题二: 在创建子类型(例如创建Son的实例)时,不能向超类型(例如Father)的构造函数中传递参数.

// 组合继承

function Father(name) {
  this.name = name;
  this.colors = ["red", "blue", "green"];
}

Father.prototype.sayName = function () {
  alert(this.name);
};

function Son(name, age) {
  Father.call(this, name); // 继承实例属性,第一次调用Father()
  this.age = age;
}

Son.prototype = new Father(); //继承父类方法,第二次调用Father()
Son.prototype.sayAge = function () {
  alert(this.age);
};

let instance1 = new Son("louis", 5);
instance1.colors.push("black");
console.log(instance1.colors); //"red,blue,green,black"
instance1.sayName(); //louis
instance1.sayAge(); //5

instance1 = new Son("zhai", 10);
console.log(instance1.colors); //"red,blue,green"
instance1.sayName(); //zhai
instance1.sayAge(); //10
