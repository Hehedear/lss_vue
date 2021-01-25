(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{527:function(s,e,t){"use strict";t.r(e);var a=t(3),r=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("vue-resource是Vue.js的一款插件，它可以通过XMLHttpRequest或JSONP发起请求并处理响应，也就是说，jQuery中ajax能做的事情，vue-resource插件一样也能做到，而且vue-resource的API更为简洁")])]),s._v(" "),t("li",[t("p",[s._v("vue-resource体积很小，在压缩以后只有大约12KB，服务端启用gzip压缩后只有4.5KB大小，这远比jQuery的体积要小得多。")])])]),s._v(" "),t("h2",{attrs:{id:"vue-resource的安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-resource的安装"}},[s._v("#")]),s._v(" vue-resource的安装")]),s._v(" "),t("ul",[t("li",[s._v("方式一：")])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("npm install vue"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("resource "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("save\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" VueResource "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vue-resource'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//引入")]),s._v("\nVue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("VueResource"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//使用")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ul",[t("li",[t("p",[s._v("方式二：")])]),s._v(" "),t("li",[t("p",[s._v("直接在页面中，通过script标签，引入 vue-resource的脚本文件")])]),s._v(" "),t("li",[t("p",[s._v("需注意vue插件都需要在vue.js之后加载，所以引入vue.js和vue-resource.js,注意先后顺序，先引vue.js")])])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script src"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"js/vue.js"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script src"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"js/vue-resource.js"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"使用vue-resource发送请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用vue-resource发送请求"}},[s._v("#")]),s._v(" 使用vue-resource发送请求")]),s._v(" "),t("ul",[t("li",[s._v("get")])]),s._v(" "),t("div",{staticClass:"language-null line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("this.$http.get('/get').then(function (result) {\n            // 通过 result.body 拿到服务器返回的成功的数据\n            // console.log(result.body)\n          })\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("ul",[t("li",[s._v("post")])]),s._v(" "),t("div",{staticClass:"language-null line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("this.$http.post('/post', {}, { emulateJSON: true }).then(result => {\n            console.log(result.body)\n          })\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ul",[t("li",[s._v("json")])]),s._v(" "),t("div",{staticClass:"language-null line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("this.$http.jsonp('/jsonp').then(result => {\n            console.log(result.body)\n          })\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ul",[t("li",[s._v("请求API如下：\n"),t("ul",[t("li",[s._v("get(url, [options])")]),s._v(" "),t("li",[s._v("head(url, [options])")]),s._v(" "),t("li",[s._v("delete(url, [options])")]),s._v(" "),t("li",[s._v("jsonp(url, [options])")]),s._v(" "),t("li",[s._v("post(url, [body], [options])")]),s._v(" "),t("li",[s._v("put(url, [body], [options])")]),s._v(" "),t("li",[s._v("patch(url, [body], [options])")])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);