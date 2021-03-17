(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{515:function(s,n,a){"use strict";a.r(n);var t=a(3),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"限制所有人使用并重定向至原网址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#限制所有人使用并重定向至原网址"}},[s._v("#")]),s._v(" 限制所有人使用并重定向至原网址")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<script type="text/javascript">\nif (window!=top) // 判断当前的window对象是否是top对象\ntop.location.href = window.location.href; // 如果不是，将top对象的网址自动导向被嵌入网页的网址\n<\/script>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ul",[a("li",[s._v("使用该代码后所有人只要把你的网页嵌入框架，就会重定向到你的网页网址")])]),s._v(" "),a("h2",{attrs:{id:"只允许自己使用的域名嵌入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#只允许自己使用的域名嵌入"}},[s._v("#")]),s._v(" 只允许自己使用的域名嵌入")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("try{\n\n　　top.location.hostname;\n\n}\n\ncatch(e){\n\n　　top.location.href = window.location.href;\n\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("ul",[a("li",[a("p",[s._v('在IE和火狐等浏览器上top.location.hostname会报错，这种错误叫做"没有权限"。进一步说，浏览器甚至不允许你查看top.location.hostname，跨域情况下，一看到这个对象，就直接报错。')])]),s._v(" "),a("li",[a("p",[s._v("所以以上代码判断如果存在跨域报错，即表示嵌入网页域名不是属于自己的，于是重定向至原网页")])]),s._v(" "),a("li",[a("p",[s._v("存在一个特殊情况是在跨域情况下，Chrome对top.location.hostname不报错！")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("try{\n\n　　top.location.hostname;\n\n　　if (top.location.hostname != window.location.hostname) {\n\n　　　　top.location.href =window.location.href;\n\n　　}\n\n}\n\ncatch(e){\n\n　　top.location.href = window.location.href;\n\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("ul",[a("li",[s._v("以上是完善Chrome存在特殊情况的代码。使用以上代码其他域名一律无法将你的网页嵌入框架")])])])}),[],!1,null,null,null);n.default=e.exports}}]);