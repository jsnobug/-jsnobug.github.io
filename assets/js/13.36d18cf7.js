(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{362:function(t,a,s){"use strict";s.r(a);var e=s(25),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"布局单位"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#布局单位"}},[t._v("#")]),t._v(" 布局单位")]),t._v(" "),s("h2",{attrs:{id:"基础"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础"}},[t._v("#")]),t._v(" 基础")]),t._v(" "),s("h4",{attrs:{id:"物理像素（physical-pixel）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#物理像素（physical-pixel）"}},[t._v("#")]),t._v(" 物理像素（physical pixel）")]),t._v(" "),s("p",[t._v("就是反映显示屏的硬件条件，反映的就是显示屏内部led灯的数量，可以简单理解，一组三色led代表一个物理像素，当然根据屏幕物理属性以及处理led的方法不一样。强调这是物理的，因为这是一个纯硬件指标。比如我把屏幕锯了一半，物理像素就只有一半。")]),t._v(" "),s("h4",{attrs:{id:"渲染像素（render-pixel）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#渲染像素（render-pixel）"}},[t._v("#")]),t._v(" 渲染像素（render pixel）")]),t._v(" "),s("p",[t._v("是在系统内部对物理像素的分配进行再一次的调整，在pc上，渲染像素其实就是设置里边的分辨率。对于显示设备，系统为显示设备提供渲染尺寸，由显示设备的“缩放引擎”（带存储器阵列的数字视频处理器）处理。这种“缩放引擎”一般内部有一系列的合理分辨率和一个推荐分辨率。一般推荐分辨率就是最大渲染像素，也是设备的物理分辨率（为了最佳表现）。这是一个软硬件（偏硬）结合的缩放方案。由于部分设备不能设置渲染像素，所以下文部分场景为了简化模型，直接跳过渲染像素，直接等同于物理像素.")]),t._v(" "),s("h4",{attrs:{id:"逻辑像素-点（device-point-device-pixel-point-）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#逻辑像素-点（device-point-device-pixel-point-）"}},[t._v("#")]),t._v(" 逻辑像素/点（device point / device pixel / point ）")]),t._v(" "),s("p",[t._v("是为了调和距离不一样导致的差异，将所有设备根据距离，透视缩放到一个相等水平的观看距离之后得到的尺寸，是一个抽象的概念，这个单位就是ios开发的px，安卓开发的dp。对于pc，包括win（8+） linux，mac，由各自系统的或者对应软件（比如webview内部）提供的图像界面处理引擎处理进行缩放")]),t._v(" "),s("p",[t._v("在win上，可以通过显示设置缩放比例来调整部分应用的逻辑像素。对于linux，可以通过x和wayland的缩放比例来调整，而苹果，众所周知的hidpi")]),t._v(" "),s("p",[t._v("但是，由于这个是一个纯软件的方案，如果部分软件不遵循开发规则，或者使用老旧的api，就会导致逻辑像素不合理，导致缩放问题。例如win10中部分旧的软件在高分屏的设备会导致界面偏小。因为他们实际是使用的是渲染像素而不是逻辑像素")]),t._v(" "),s("p",[t._v("各种设备，手机，平板，笔记本等逻辑像素")]),t._v(" "),s("p",[t._v("手机：逻辑像素在3xx-4xx（短边）之间")]),t._v(" "),s("p",[t._v("平板：10寸平板7xx-8xx（短边）")]),t._v(" "),s("p",[t._v("笔记本：13寸 1280 （长边）")]),t._v(" "),s("p",[t._v("24寸显示屏：1920（长边）")]),t._v(" "),s("p",[t._v("你会发现如果设置width=device-width下，无论是否高分屏，在浏览器得到的screen.width仍然符合上述的尺寸")]),t._v(" "),s("p",[t._v("逻辑像素的引入，简单来说，就是为了消除了不同屏幕观看距离和不同ppi（见下文）之间的差异，衍生出来的一个虚拟的尺寸")]),t._v(" "),s("h4",{attrs:{id:"ppi（pixel-per-inch）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ppi（pixel-per-inch）"}},[t._v("#")]),t._v(" ppi（pixel per inch）")]),t._v(" "),s("p",[t._v("每英寸像素，指的是屏幕在每英寸的"),s("strong",[t._v("物理像素")]),t._v("，更高的ppi意味着屏幕的清晰度更佳。")]),t._v(" "),s("p",[t._v("所谓高分屏，其实就是指ppi大于同类设备的屏幕。比如对于桌面设备，大于96ppi。对于移动设备，大于160ppi")]),t._v(" "),s("p",[t._v("所谓视网膜屏，其实就是指在该观看距离内超出人类的辨认能力的屏幕。比如对于桌面设备，大于192ppi。对于移动设备大于326ppi")]),t._v(" "),s("p",[t._v("ppi，对于移动设备而言，一般来说ppi以160为一个档次")]),t._v(" "),s("p",[t._v("也就是假设一个ppi160，2寸x3寸的屏幕，物理像素应该是320x480。同理ppi320，同样尺寸的屏幕，物理像素是640x960")]),t._v(" "),s("p",[t._v("由于它们尺寸一致，假设它们观看距离一致，那么消除掉ppi的影响，他们的逻辑像素是一致的")]),t._v(" "),s("p",[t._v("也就是")]),t._v(" "),s("p",[t._v("逻辑像素长度 = 物理像素长度 * 160 / ppi")]),t._v(" "),s("p",[t._v("得出都是 320 x 480")]),t._v(" "),s("p",[t._v("当然，由于生产标准不一致，不可能做到绝对的160ppi作为标准，所以ppi的等级划分是动态的")]),t._v(" "),s("h4",{attrs:{id:"dpr-（device-point-ratio-device-pixel-ratio）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dpr-（device-point-ratio-device-pixel-ratio）"}},[t._v("#")]),t._v(" dpr （device point ratio / device pixel ratio）")]),t._v(" "),s("p",[t._v("渲染像素与逻辑像素的比例。由于渲染像素一般等于逻辑像素，如果ppi是以160为基准的话，那么 dpr = ppi / 160")]),t._v(" "),s("p",[t._v("多少倍屏或者多少x（三倍屏，3x，意思就是3dpr），一般来说就是说的是这个值")]),t._v(" "),s("h4",{attrs:{id:"viewport像素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#viewport像素"}},[t._v("#")]),t._v(" viewport像素")]),t._v(" "),s("p",[t._v("它本质是DIP（Device Independent Pixels），中文意思设备无关像素，是与上述所有像素都无绝对逻辑关系的一个单位。其实是浏览器内部对逻辑像素进行再处理的结果，简单来理解就是调整逻辑像素的缩放来达到适应设备的一个中间层对于pc，viewport是不生效的，所以在pc上，px其实就是逻辑像素（chrome）。但是逻辑像素是与软件实现有关的，所以会出现一些问题。比如在win上，对于部分国产马甲浏览器，viewport内部没有适配系统的缩放等级，导致渲染的内容过小。")]),t._v(" "),s("h2",{attrs:{id:"面向逻辑像素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#面向逻辑像素"}},[t._v("#")]),t._v(" 面向逻辑像素")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("在head 设置width=device-width的viewport")])]),t._v(" "),s("li",[s("p",[t._v("在css中使用px")])]),t._v(" "),s("li",[s("p",[t._v("在适当的场景使用flex布局，或者配合vw进行自适应")])]),t._v(" "),s("li",[s("p",[t._v("在"),s("strong",[t._v("跨设备类型的时候")]),t._v("（pc <-> 手机 <-> 平板）使用媒体查询")])]),t._v(" "),s("li",[s("p",[t._v("在跨设备类型如果交互差异太大的情况，考虑分开项目开发")])])]),t._v(" "),s("p",[t._v("viewport width=device-width是让viewport的尺寸等于"),s("strong",[t._v("逻辑像素")]),t._v("的尺寸")]),t._v(" "),s("h3",{attrs:{id:"盒子模型调整样式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#盒子模型调整样式"}},[t._v("#")]),t._v(" 盒子模型调整样式")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("Margin(外边距)")]),t._v(" - 清除边框外的区域，外边距是透明的。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("Border(边框)")]),t._v(" - 围绕在内边距和内容外的边框。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("Padding(内边距)")]),t._v(" - 清除内容周围的区域，内边距是透明的。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("Content(内容)")]),t._v(" - 盒子的内容，显示文本和图像。")]),t._v(" "),s("h4",{attrs:{id:"box-sizing属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#box-sizing属性"}},[t._v("#")]),t._v(" box-sizing属性")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("box-sizing: content-box|border-box|inherit;\n")])])]),s("p",[t._v("border-box ： width 和 height 属性包括内容，内边距和边框，但不包括外边距。")]),t._v(" "),s("p",[t._v("content-box ：只包含width和height。")]),t._v(" "),s("p",[t._v("inherit ：从父元素继承。")])])]),t._v(" "),s("h3",{attrs:{id:"流式布局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#流式布局"}},[t._v("#")]),t._v(" 流式布局")]),t._v(" "),s("p",[t._v("宽度百分比自适应。")]),t._v(" "),s("h3",{attrs:{id:"float布局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#float布局"}},[t._v("#")]),t._v(" float布局")]),t._v(" "),s("p",[t._v("左边float: left, 右边float: right。")]),t._v(" "),s("h3",{attrs:{id:"flex布局-非常好用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flex布局-非常好用"}},[t._v("#")]),t._v(" flex布局(非常好用)")]),t._v(" "),s("p",[t._v("flex可以伸缩的布局。")]),t._v(" "),s("h4",{attrs:{id:"布局容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#布局容器"}},[t._v("#")]),t._v(" 布局容器")]),t._v(" "),s("p",[t._v("元素设置了**display: flex;**该元素就是容器。")]),t._v(" "),s("h5",{attrs:{id:"容器属性："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#容器属性："}},[t._v("#")]),t._v(" 容器属性：")]),t._v(" "),s("h6",{attrs:{id:"flex-direction-属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flex-direction-属性"}},[t._v("#")]),t._v(" flex-direction 属性")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".faBox")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-direction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n      row 横向 | \n      row-reverse | \n      column 纵向| \n      column-reverse | \n      initial 最初的| \n      inherit 继承父元素属性"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h6",{attrs:{id:"flex-wrap-属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flex-wrap-属性"}},[t._v("#")]),t._v(" flex-wrap 属性")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".faBox")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-wrap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nowrap | wrap | wrap-reverse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h6",{attrs:{id:"flex-flow-属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flex-flow-属性"}},[t._v("#")]),t._v(" flex-flow 属性")]),t._v(" "),s("p",[t._v("该属性是 "),s("code",[t._v("flex-wrap")]),t._v(" 和 "),s("code",[t._v("flex-direction")]),t._v(" 的简写方式。")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".faBox")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-flow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <flex-direction> || <flex-wrap>"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h6",{attrs:{id:"justify-content-属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#justify-content-属性"}},[t._v("#")]),t._v(" justify-content 属性")]),t._v(" "),s("p",[t._v("该属性负责主轴的对齐方式。")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".faBox")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("justify-content")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex-start | flex-end | center | space-between | space-around"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h6",{attrs:{id:"align-items-属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#align-items-属性"}},[t._v("#")]),t._v(" align-items 属性")]),t._v(" "),s("p",[t._v("该属性负责交叉轴的对齐方式。(单行)")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".faBox")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("justify-content")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex-start | flex-end | center | stretch | baseline"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h6",{attrs:{id:"align-content-属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#align-content-属性"}},[t._v("#")]),t._v(" align-content 属性")]),t._v(" "),s("p",[t._v("设置多根主轴时候的对齐方式，如果只有一条轴线，不起作用。（多行）")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".faBox")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("align-content")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex-start | flex-end | center | space-between | space-around | stretch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目"}},[t._v("#")]),t._v(" 项目")]),t._v(" "),s("p",[t._v("容器里面的每项")]),t._v(" "),s("h5",{attrs:{id:"项目属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目属性"}},[t._v("#")]),t._v(" 项目属性")]),t._v(" "),s("h6",{attrs:{id:"order-属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#order-属性"}},[t._v("#")]),t._v(" order 属性")]),t._v(" "),s("p",[s("code",[t._v("order")]),t._v(" 英文意思秩序，该属性可以设置项目的排列顺序，从小到大。")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".sonBox1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("order")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <integer>"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h6",{attrs:{id:"flex-grow-属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flex-grow-属性"}},[t._v("#")]),t._v(" flex-grow 属性")]),t._v(" "),s("p",[t._v("定义项目的放大比例，默认 "),s("code",[t._v("0")]),t._v(" ，不参与放大。")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".sonBox1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-grow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <number>"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* default 0 */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h6",{attrs:{id:"flex-shrink-属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flex-shrink-属性"}},[t._v("#")]),t._v(" flex-shrink 属性")]),t._v(" "),s("p",[t._v("定义项目缩放。")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".sonBox1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-shrink")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <number>"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* default 1 */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h6",{attrs:{id:"flex-basis-属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flex-basis-属性"}},[t._v("#")]),t._v(" flex-basis 属性")]),t._v(" "),s("p",[t._v("属性定义了在分配多余空间之前，项目占据的主轴空间。")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".sonBox1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-shrink")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <number>"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* default 1 */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h6",{attrs:{id:"flex-属性（推荐）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flex-属性（推荐）"}},[t._v("#")]),t._v(" flex 属性（推荐）")]),t._v(" "),s("p",[s("code",[t._v("flex-grow")]),t._v("，"),s("code",[t._v("flex-shrink")]),t._v(" 和 "),s("code",[t._v("flex-basis")]),t._v(" 的简写。")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".sonBox1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none | [ <"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'flex-grow'")]),t._v("> <"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'flex-shrink'")]),t._v("> || <"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'flex-basis'")]),t._v("> ]\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h6",{attrs:{id:"align-self-属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#align-self-属性"}},[t._v("#")]),t._v(" align-self 属性")]),t._v(" "),s("p",[t._v("可给子元素设置单独的对齐方式。"),s("code",[t._v("auto")]),t._v(" 的时候是继承父元素的 "),s("code",[t._v("align-item")])]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".sonBox1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("align-self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" auto | flex-start | flex-end | center | baseline | stretch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"vw、vh"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vw、vh"}},[t._v("#")]),t._v(" vw、vh")]),t._v(" "),s("p",[t._v("视口单位，根据浏览器窗口大小单位进行自适应。")]),t._v(" "),s("p",[t._v("vw可视窗口的宽度单位，1vw = 可视窗口宽度的百分之一，width=1800px，1vw=18px。和百分比不一样的是，vw始终相对于可视窗口的宽度，而百分比和其父元素的宽度有关。")]),t._v(" "),s("p",[t._v("vh就是可视窗口的高度的单位。")]),t._v(" "),s("p",[t._v("vmin：选vw和vh中最小。")]),t._v(" "),s("p",[t._v("vmax：选vw和vh中最大。")]),t._v(" "),s("h3",{attrs:{id:"clac函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clac函数"}},[t._v("#")]),t._v(" clac函数")]),t._v(" "),s("p",[t._v("calc() 函数用于动态计算长度值。")]),t._v(" "),s("p",[t._v("● 需要注意的是，运算符前后都需要保留一个空格，例如：width: calc(100% - 10px)；")]),t._v(" "),s("p",[t._v("● 任何长度值都可以使用calc()函数进行计算；（vw\\vh\\百分比\\px等）")]),t._v(" "),s("p",[t._v('● calc()函数支持 "+", "-", "*", "/" 运算；')]),t._v(" "),s("p",[t._v("● calc()函数使用标准的数学运算优先级规则；")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("calc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("100% - 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("calc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("100%/3 - 5px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("calc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("5px*3 /2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("calc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("100vw -50px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n...\n")])])]),s("h2",{attrs:{id:"rem-flexible"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rem-flexible"}},[t._v("#")]),t._v(" rem+flexible")]),t._v(" "),s("p",[t._v("已停止更新，只是等比缩放大小")]),t._v(" "),s("h2",{attrs:{id:"小程序rpx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小程序rpx"}},[t._v("#")]),t._v(" 小程序rpx")]),t._v(" "),s("p",[t._v("同上")])])}),[],!1,null,null,null);a.default=r.exports}}]);