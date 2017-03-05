webpackJsonp([1,2],{

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_components_Tip_vue__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_components_Tip_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_components_Tip_vue__);


__WEBPACK_IMPORTED_MODULE_0__src_components_Tip_vue___default.a.version = '1.0.2';

__WEBPACK_IMPORTED_MODULE_0__src_components_Tip_vue___default.a.install = (Vue) => {
  Vue.component('tip', __WEBPACK_IMPORTED_MODULE_0__src_components_Tip_vue___default.a);
};

if (typeof window !== 'undefined') {
  window.Tip = __WEBPACK_IMPORTED_MODULE_0__src_components_Tip_vue___default.a;
}

/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__src_components_Tip_vue___default.a;


/***/ }),

/***/ 126:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(342)

var Component = __webpack_require__(123)(
  /* script */
  __webpack_require__(130),
  /* template */
  __webpack_require__(347),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = {
  name: 'app',
  data: function data() {
    return {
      opts: {
        top: {
          text: "返回顶部"
        }
      }
    };
  },

  components: {}
};

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);



/* harmony default export */ __webpack_exports__["default"] = {
  props: ['opts'],
  data: function data() {
    return {
      showTop: true,
      msg: '联系信息1111111',
      defaultOpts: {
        top: {
          type: 'always',
          el: "#header",
          icon: 'fa fa-chevron-up fa-3x',
          text: "返回顶部"
        },
        share: {
          icon: "fa fa-share-alt fa-3x",
          text: "分享"
        },
        star: {
          icon: "fa fa-star-o fa-3x",
          text: "收藏"
        }
      }
    };
  },

  computed: {
    sets: function sets() {
      var opts = this.opts || {};
      opts.top = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(this.defaultOpts.top, opts.top);
      opts.share = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(this.defaultOpts.share, opts.share);
      opts.star = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(this.defaultOpts.star, opts.star);
      return opts;
    }
  },
  methods: {
    handleScroll: function handleScroll() {
      if (this.opts.top.type == "always") this.showTop = true;else this.showTop = window.scrollY > 0;
    }
  },
  mounted: function mounted() {
    this.handleScroll();
    window.addEventListener('scroll', this.handleScroll);
  }
};

/***/ }),

/***/ 342:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 343:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(343)

var Component = __webpack_require__(123)(
  /* script */
  __webpack_require__(131),
  /* template */
  __webpack_require__(348),
  /* scopeId */
  "data-v-7706dfa0",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 347:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('div', {
    staticClass: "content",
    attrs: {
      "id": "header"
    }
  }, [_vm._v("\n    手机/微信:17074221129 EMAIL:xcwang@vip.qq.com\n  ")]), _vm._v(" "), _c('tip', {
    attrs: {
      "opts": _vm.opts
    }
  })], 1)
},staticRenderFns: []}

/***/ }),

/***/ 348:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "share"
  }, [_c('ul', [_c('li', [_c('i', {
    class: _vm.sets.share.icon,
    attrs: {
      "aria-hidden": "true"
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.sets.share.text))])])]), _vm._v(" "), _c('li', [_c('i', {
    class: _vm.sets.star.icon,
    attrs: {
      "aria-hidden": "true"
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.sets.star.text))])])]), _vm._v(" "), (_vm.showTop) ? _c('li', {
    directives: [{
      name: "scroll-to",
      rawName: "v-scroll-to",
      value: (_vm.sets.top.el),
      expression: "sets.top.el"
    }]
  }, [_c('i', {
    class: _vm.sets.top.icon,
    attrs: {
      "aria-hidden": "true"
    }
  }, [_c('span', {
    staticClass: "back-top"
  }, [_vm._v(_vm._s(_vm.sets.top.text))])])]) : _vm._e()])])
},staticRenderFns: []}

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_scrollTo__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_scrollTo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_scrollTo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_polyfill__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_polyfill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_font_awesome_css_font_awesome_min_css__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_font_awesome_css_font_awesome_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_font_awesome_css_font_awesome_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__index_js__ = __webpack_require__(124);








__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_2_vue_scrollTo___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_5__index_js__["a" /* default */]);

new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
});

/***/ })

},[350]);
//# sourceMappingURL=app.28c6fb748d4a1519da41.js.map