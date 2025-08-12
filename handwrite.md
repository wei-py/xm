- apply

  - 其中使用到了 symbol() 唯一标识符
  - 使用 globalThis 因为更通用（兼容 Node.js、Web Workers 等）
  - !args || args.length === 0 第二个参数必须是数组或类数组对象

- bind

  - 考虑的原型

- 逻辑赋值运算符

  - user.theme ||= 'light';
  - user.isLoggedIn &&= checkPermissions(user);
  - settings.timeout ??= 3000;
