(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{CZQh:function(t,e,r){"use strict";r("DQi7")},DQi7:function(t,e,r){var n=r("Fiyb");"string"==typeof n&&(n=[[t.i,n,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};r("aET+")(n,s);n.locals&&(t.exports=n.locals)},Fiyb:function(t,e,r){(t.exports=r("I1BE")(!1)).push([t.i,".badge[data-v-211360dd]{font-size:.875rem;font-weight:500;text-transform:none}",""])},nVY4:function(t,e,r){"use strict";var n={props:["field","row"],computed:{entry:function(){var t=_.split(this.field,".");return{key:t[0],field:t[1]}}}},s=(r("CZQh"),r("KHd+")),a=Object(s.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._l(t.row[t.entry.key],(function(e,n){return r("span",{key:n,staticClass:"badge badge-pill badge-azure mr-1"},[t._v("\n    "+t._s(e[t.entry.field])+"\n  ")])})),t._v(" "),0===t.row[t.entry.key].length?r("span",{staticClass:"badge badge-pill badge-orange"},[t._v("\n    Not Assigned\n  ")]):t._e()],2)}),[],!1,null,"211360dd",null);e.a=a.exports},rsiS:function(t,e,r){"use strict";r.r(e);var n=r("L2JU");function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var c={components:{DatatableList:r("nVY4").a},data:function(){return{}},beforeDestroy:function(){this.resetState()},computed:a({},Object(n.c)("StudentsSingle",["entry"])),watch:{"$route.params.id":{immediate:!0,handler:function(){this.resetState(),this.fetchShowData(this.$route.params.id)}}},methods:a({},Object(n.b)("StudentsSingle",["fetchShowData","resetState"]))},o=r("KHd+"),d=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"card"},[t._m(0),t._v(" "),r("div",{staticClass:"card-body"},[r("back-button")],1),t._v(" "),r("div",{staticClass:"card-body"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"table-responsive"},[r("div",{staticClass:"table"},[r("tbody",[r("tr",[r("td",{staticClass:"text-primary"},[t._v("\n                        Name\n                      ")]),t._v(" "),r("td",[t._v("\n                        "+t._s(t.entry.name)+"\n                      ")])]),t._v(" "),r("tr",[r("td",{staticClass:"text-primary"},[t._v("\n                        Admission Number\n                      ")]),t._v(" "),r("td",[t._v("\n                        "+t._s(t.entry.admission_number)+"\n                      ")])]),t._v(" "),r("tr",[r("td",{staticClass:"text-primary"},[t._v("\n                          Date of Birth\n                      ")]),t._v(" "),r("td",[t._v("\n                        "+t._s(t.entry.doc)+"\n                      ")])])])])])])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header card-header-primary card-header-icon"},[e("div",{staticClass:"card-icon"},[e("i",{staticClass:"material-icons"},[this._v("remove_red_eye")])]),this._v(" "),e("h4",{staticClass:"card-title"},[this._v("View Student")])])}],!1,null,null,null);e.default=d.exports}}]);