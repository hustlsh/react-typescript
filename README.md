# react-typescript
react-typescript

tsconfig.json

**jsx** preserve，该模式下生成的代码会保留JSX以供后续的Babel操作转换

vscode下，ctrl+shift+b，执行tsc:build - tsconfig.json，转换include中的所有文件

报错Cannot compile namespaces when the '--isolatedModules' flag is provided.因为设置了isolatedModules：true 将每个文件作为单独的模块，既然是module，就必须有一个export将内容提供出来，这里的module一律指es6 module，所以node端的module.exports = 的导出方式也会招到报错，或者提示“File is a CommonJS module; it may be converted to an ES6 module.”

**target** typescript只是将自身语言的特性转成对应的js版本，typescript加入了很多esnext的特性（箭头函数、symbol、Decorator、generator）,如果出现esnext中支持的，而typescript本身不支持，需要额外的lib来支持，此时就没有办法实现转换了，比如Promise。换句话说，就是tsc只能转换自己认识的语法。而且babel对es的支持是很迅速的，如果想使用最新es特性，babel是必不可少的，对应的typescript支持就会慢的多。

**lib** 指定要包含在编译中的库文件

# nodejs上typescript

**tsc**

npm install @type/node @type/express

tsconfig.json配置，运行tsc，生成js文件，node启动生成后的js

**babel（7以上）**

npm install @type/node @type/express @babel/core @babel/core @babel/typescript @babel/register

require('@babel/register')(babel.config.js)//extensions:[".es6", ".es", ".jsx", ".js", ".mjs", ".ts", ".tsx"]

# browser上typescript

**tsc**

tsconfig.json配置，运行tsc，生成js文件，启用babel，转换为es5

**babel（7以上）**

babel.config.js配置，webpack，生成js
