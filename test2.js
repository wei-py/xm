// 修正：使用正确的Object.create方法
function inheritPrototype(subType, superType) {
  const prototype = Object.create(superType.prototype); // 创建父类原型的深复制
  prototype.constructor = subType; // 修正原型的构造函数
  subType.prototype = prototype; // 将子类的原型替换为这个原型
}

function SuperType(name) {
  this.name = name;
  this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function () {
  console.log(this.name);
};

function SubType(name, age) {
  SuperType.call(this, name); // 调用父类构造函数
  this.age = age;
}

// 核心：因为是对父类原型的复制，所以不包含父类的构造函数，也就不会调用两次父类的构造函数造成浪费
inheritPrototype(SubType, SuperType);
SubType.prototype.sayAge = function () {
  console.log(this.age);
};

// 测试代码
const instance1 = new SubType("Nicholas", 29);
instance1.sayName(); // "Nicholas"
instance1.sayAge(); // 29
instance1.colors.push("black");
console.log(instance1.colors); // "red,blue,green,black"

const instance2 = new SubType("Greg", 27);
console.log(instance2.colors); // "red,blue,green" - 不会受到instance1的影响
