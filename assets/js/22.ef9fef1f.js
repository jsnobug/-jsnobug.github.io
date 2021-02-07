(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{513:function(t,s,a){"use strict";a.r(s);var n=a(21),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"设计模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设计模式"}},[t._v("#")]),t._v(" 设计模式")]),t._v(" "),a("p",[t._v("学习用高内聚，低耦合的封装代码。")]),t._v(" "),a("p",[t._v("new作用：")]),t._v(" "),a("ol",[a("li",[t._v("创建一个新对象；")]),t._v(" "),a("li",[t._v("将构造函数的作用域赋给新对象(this指向了这个新对象)")]),t._v(" "),a("li",[t._v("执行构造函数中的代码(为这个新对象添加属性);")]),t._v(" "),a("li",[t._v("返回新对象")])]),t._v(" "),a("ul",[a("li",[t._v("能用健壮的代码去解决具体的问题；")]),t._v(" "),a("li",[t._v("能用抽象的思维去应对复杂的系统；")]),t._v(" "),a("li",[t._v("能用工程化的思想去规划更大规模的业务。")])]),t._v(" "),a("p",[t._v("https://mp.weixin.qq.com/s/rC0pbOW91oVVfnWNwBrhmg")]),t._v(" "),a("h2",{attrs:{id:"职责链模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#职责链模式"}},[t._v("#")]),t._v(" 职责链模式")]),t._v(" "),a("p",[t._v("职责链模式顾名思义就是一个链条，这个链条上串联了很多的职责，一个事件过来，可以被链条上的职责依次处理。他的好处是链条上的各个职责，只需要关心自己的事情就行了，不需要知道自己的上一步是什么，下一步是什么，跟上下的职责都不耦合，这样当上下职责变化了，自己也不受影响，往链条上添加或者减少职责也非常方便。")]),t._v(" "),a("h2",{attrs:{id:"观察者模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#观察者模式"}},[t._v("#")]),t._v(" 观察者模式")]),t._v(" "),a("p",[t._v("观察者模式还有个名字叫发布订阅模式，这在Js的世界里可是大名鼎鼎，大家或多或少都用到过，最常见的就是事件绑定了，有些面试还会要求面试者手写一个事件中心，其实就是一个观察者模式。观察者模式的优点是可以让事件的产生者和消费者相互不知道，只需要产生和消费相应的事件就行，特别适合事件的生产者和消费者不方便直接调用的情况，比如异步中。")]),t._v(" "),a("h2",{attrs:{id:"装饰器模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#装饰器模式"}},[t._v("#")]),t._v(" 装饰器模式")]),t._v(" "),a("p",[t._v("熟悉Vue响应式原理的朋友都知道(不熟悉的朋友可以看这里)，Vue 2.x对象的响应式是通过 Object.defineProperty实现的，但是这个方法不能监听数组的改变，那数组怎么监听的呢？数组操作一般就是 push， shift这些方法，这些方法是数组原生的方法，我们当然不能去改他，那会了装饰器模式，我们完全可以在保持他之前功能的基础上给他扩展功能")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" oldFunc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("click "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 先存储老方法")]),t._v("\ndom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onclick")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 重新绑定事件")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("oldFunc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 先执行老方法")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 添加新的方法")]),t._v("\n\tconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 避免重复代码继续封装")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("decorator")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("dom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" oldFunc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("click "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 先存储老方法")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" oldFunc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'function'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tdom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onclick")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 重新绑定事件")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("oldFunc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 先执行老方法")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 添加新的方法")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("decorator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("这种方式特别适合我们引入的第三方UI组件，有些UI组件自己封装了很多功能，但是并没有暴露出接口，如果我们要添加功能，又不能直接修改他的源码，最好的方法就是这样使用装饰器模式来扩展，而且有了装饰工厂之后，我们还可以快速批量修改。")]),t._v(" "),a("h2",{attrs:{id:"适配器模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#适配器模式"}},[t._v("#")]),t._v(" 适配器模式")]),t._v(" "),a("p",[t._v("适配器想必大家都用过，我家里的老显卡只有HDMI接口，但是显示器是DP接口，这两个插不上，怎么办呢？答案就是买个适配器，将DP接口转换为HDMI的就行了。这里的适配器模式原理类似，当我们面临接口不通用，接口参数不匹配等情况，我们可以在他外面再包一个方法，这个方法接收我们现在的名字和参数，里面调用老方法传入以前的参数形式。")]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("ol",[a("li",[t._v("高扩展性的核心其实就是高内聚，低耦合，各个模块都专注在自己的功能，尽量减少对外部的直接依赖。")]),t._v(" "),a("li",[t._v("职责链模式和观察者模式主要是用来降低模块间耦合的，耦合低了就可以很方便的对他们进行组织，给他们扩展功能，适配器模式和装饰器模式主要是用来在不影响原有代码的基础上进行扩展的。")]),t._v(" "),a("li",[t._v("如果我们需要对某个对象进行一系列的操作，这些操作可以组织成一个链条，那我们可以考虑使用职责链模式。链条上的具体任务不需要知道其他任务的存在，只专注自己的工作，消息的传递由链条负责。使用了职责链模式，链条上的任务可以很方便的增加，删除或者重新组织成新的链条，就像一个流水线一样。")]),t._v(" "),a("li",[t._v("如果我们有两个对象在不确定的时间点需要异步通讯，我们可以考虑使用观察者模式，使用者不需要一直关注其他特定的对象，他只要在消息中心注册一个消息，当这个消息出现时，消息中心会负责来通知他。")]),t._v(" "),a("li",[t._v("如果我们已经拿到了一些旧代码，但是这些旧代码不能满足我们的需求，我们又不能随意更改他，我们可以考虑使用装饰器模式来增强他的功能。")]),t._v(" "),a("li",[t._v("对于旧代码改造或者新模块引入，我们可能面临接口不通用的情况，这时候我们可以考虑写一个适配器来适配他们。适配器模式同样适用于参数适配的情况。")]),t._v(" "),a("li",[t._v("还是那句话，设计模式更注重的是思想，不用生搬硬套代码模板。也不要在所有地方硬套设计模式，而是在真正需要的时候才使用他来增加我们代码的可扩展性。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);