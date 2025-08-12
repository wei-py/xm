Function.prototype.myBind = function (context, ...presetArgs) {
  if (typeof this !== "function") {
    throw new TypeError("Bind must be called on a function");
  }

  const func = this;

  const boundFunc = function (...args) {
    if (new.target) {
      return new func(...presetArgs, ...args);
    }
    return func.apply(context, [...presetArgs, ...args]);
  };

  // 继承原型
  if (func.prototype) {
    const F = function () {};
    F.prototype = func.prototype;
    boundFunc.prototype = new F();
  }

  return boundFunc;
};

function Person(name, age) {
  this.name = name;
  this.age = age;
  return this;
}

Person.prototype.sayHi = function () {
  console.log(`Hi, I'm ${this.name}`);
};

const BoundPerson = Person.myBind({ sex: "99" }, "Alice");
const p = new BoundPerson(25);

console.log(BoundPerson("222"));

console.log(p);
p.sayHi(); // Hi, I'm Alice ✅ 继承了原型方法
