module.exports = {
    "env": {
        "browser": true, // 运行在浏览器
        "commonjs": true, // 支持commonjs模块化
        "es2021": true // 支持到ES2021
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": { // 解析器选项
        "parser": "babel-eslint", // 默认解析器是Espree，我们指定解析器为babel-eslint(一个对babel解析器的安装，使其与eslint兼容)
        "ecmaFeatures": { // 想使用额外的语言特性
            "jsx": true // 这里启用了jsx的语言特性
        },
        "ecmaVersion": 12, // 指定使用的ECMAScript版本
        "sourceType": "module" // 默认为script，如果代码是ECMAScript模块需要设置为module
    },
    "plugins": [
        "react"
    ],
    "rules": { // 定义eslint插件的约束
      // 规则名：规则值 【off / 0 : 关闭规则； warn / 1:打开的规则作为警告； error / 2: 规则作为一个错误】
      "no-alert": 1,
      "no-console": 0,
      "no-debugger": 1
    }
};
