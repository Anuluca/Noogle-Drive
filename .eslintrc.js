module.exports = {
  extends: "react-app",
  rules: {
    "no-multi-spaces": 1,
    "react/jsx-space-before-closing": 1, // 总是在自动关闭的标签前加一个空格，正常情况下也不需要换行
    "jsx-quotes": 1,
    "react/jsx-closing-bracket-location": 1, // 遵循JSX语法缩进/格式
    "react/jsx-boolean-value": 1, // 如果属性值为 true, 可以直接省略
    "react/no-string-refs": 1, // 总是在Refs里使用回调函数
    "react/self-closing-comp": 1, // 对于没有子元素的标签来说总是自己关闭标签
    "react/jsx-no-bind": 1, // 当在 render() 里使用事件处理方法时，提前在构造函数里把 this 绑定上去
    "react/sort-comp": 1, // 按照具体规范的React.createClass 的生命周期函数书写代码
    "react/jsx-pascal-case": 1, // React模块名使用帕斯卡命名，实例使用骆驼式命名
    // 关闭语句强制分号结尾
    semi: [0],
    //空行最多不能超过100行
    "no-multiple-empty-lines": [0, { max: 100 }],
    //关闭禁止混用tab和空格
    "no-mixed-spaces-and-tabs": [0],
    camelcase: "off",
    "no-unused-vars": "off",
    "prefer-const": "off",
    "no-extra-semi": "off",
    "@typescript-eslint/type-annotation-spacing": 0,
    "@typescript-eslint/camelcase": 0,
    "@typescript-eslint/no-inferrable-types": 0,
    "no-multi-spaces": 0,
    "react/self-closing-comp":0,
    "no-useless-constructor":0,
    "default-case":0,
    "eqeqeq":0
  },
};
