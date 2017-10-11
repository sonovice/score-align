webpackJsonp([1],{

/***/ "0zr6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hello"
  }, [_c('h1', [_vm._v(_vm._s(_vm.msg))]), _vm._v(" "), _c('h2', [_vm._v("Essential Links")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('h2', [_vm._v("Ecosystem")]), _vm._v(" "), _vm._m(1)])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', [_c('li', [_c('a', {
    attrs: {
      "href": "https://vuejs.org",
      "target": "_blank"
    }
  }, [_vm._v("Core Docs")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "https://forum.vuejs.org",
      "target": "_blank"
    }
  }, [_vm._v("Forum")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "https://gitter.im/vuejs/vue",
      "target": "_blank"
    }
  }, [_vm._v("Gitter Chat")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "https://twitter.com/vuejs",
      "target": "_blank"
    }
  }, [_vm._v("Twitter")])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "http://vuejs-templates.github.io/webpack/",
      "target": "_blank"
    }
  }, [_vm._v("Docs for This Template")])])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', [_c('li', [_c('a', {
    attrs: {
      "href": "http://router.vuejs.org/",
      "target": "_blank"
    }
  }, [_vm._v("vue-router")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "http://vuex.vuejs.org/",
      "target": "_blank"
    }
  }, [_vm._v("vuex")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "http://vue-loader.vuejs.org/",
      "target": "_blank"
    }
  }, [_vm._v("vue-loader")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "https://github.com/vuejs/awesome-vue",
      "target": "_blank"
    }
  }, [_vm._v("awesome-vue")])])])
}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "25eA":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "4OaV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_vm._m(0), _vm._v(" "), _c('section', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showInput),
      expression: "showInput"
    }],
    staticClass: "section main"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('b-tabs', {
    staticClass: "block",
    attrs: {
      "position": "is-centered"
    },
    model: {
      value: (_vm.activeTab),
      callback: function($$v) {
        _vm.activeTab = $$v
      },
      expression: "activeTab"
    }
  }, [_c('b-tab-item', {
    attrs: {
      "label": "Audio",
      "icon": "file-audio-o"
    }
  }, [_c('b-field', [_c('b-upload', {
    attrs: {
      "accept": ".mei"
    },
    model: {
      value: (_vm.fileMei),
      callback: function($$v) {
        _vm.fileMei = $$v
      },
      expression: "fileMei"
    }
  }, [_c('a', {
    staticClass: "button is-primary"
  }, [_c('b-icon', {
    attrs: {
      "icon": "file-code-o"
    }
  }), _vm._v(" "), _c('span', [_vm._v("MEI-Datei")])], 1)]), _vm._v(" "), (_vm.fileMei && _vm.fileMei.length) ? _c('div', [_c('span', {
    staticClass: "file-name"
  }, [_vm._v("\n                  " + _vm._s(_vm.fileMei[0].name) + "\n              ")])]) : _vm._e()], 1), _vm._v(" "), _c('b-field', [_c('b-upload', {
    attrs: {
      "accept": "audio/*"
    },
    model: {
      value: (_vm.fileAudio),
      callback: function($$v) {
        _vm.fileAudio = $$v
      },
      expression: "fileAudio"
    }
  }, [_c('a', {
    staticClass: "button is-primary"
  }, [_c('b-icon', {
    attrs: {
      "icon": "file-audio-o"
    }
  }), _vm._v(" "), _c('span', [_vm._v("Audio-Datei")])], 1)]), _vm._v(" "), (_vm.fileAudio && _vm.fileAudio.length) ? _c('div', [_c('span', {
    staticClass: "file-name"
  }, [_vm._v("\n                  " + _vm._s(_vm.fileAudio[0].name) + "\n              ")])]) : _vm._e()], 1), _vm._v(" "), _c('a', {
    staticClass: "button is-primary",
    on: {
      "click": _vm.uploadAudio
    }
  }, [_vm._v("Hochladen")])], 1), _vm._v(" "), _c('b-tab-item', {
    attrs: {
      "label": "YouTube",
      "icon": "youtube"
    }
  }, [_c('b-field', [_c('b-upload', {
    attrs: {
      "accept": ".mei"
    },
    model: {
      value: (_vm.fileMei),
      callback: function($$v) {
        _vm.fileMei = $$v
      },
      expression: "fileMei"
    }
  }, [_c('a', {
    staticClass: "button is-primary"
  }, [_c('b-icon', {
    attrs: {
      "icon": "file-code-o"
    }
  }), _vm._v(" "), _c('span', [_vm._v("MEI-Datei")])], 1)]), _vm._v(" "), (_vm.fileMei && _vm.fileMei.length) ? _c('div', [_c('span', {
    staticClass: "file-name"
  }, [_vm._v("\n                  " + _vm._s(_vm.fileMei[0].name) + "\n              ")])]) : _vm._e()], 1), _vm._v(" "), _c('b-field', {
    attrs: {
      "label": "YouTube Link"
    }
  }, [_c('b-input', {
    model: {
      value: (_vm.youtubeUrl),
      callback: function($$v) {
        _vm.youtubeUrl = $$v
      },
      expression: "youtubeUrl"
    }
  })], 1), _vm._v(" "), _c('a', {
    staticClass: "button is-primary",
    on: {
      "click": _vm.uploadYoutube
    }
  }, [_vm._v("Hochladen")])], 1)], 1)], 1)]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('div', {
    staticStyle: {
      "cursor": "crosshair",
      "overflow": "scroll"
    },
    attrs: {
      "id": "svgMei"
    }
  })])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('nav', {
    staticClass: "nav has-shadow",
    attrs: {
      "id": "top"
    }
  }, [_c('div', {
    staticClass: "nav-left"
  }, [_c('a', {
    staticClass: "nav-item",
    attrs: {
      "href": "../index.html"
    }
  }, [_vm._v("\n        ScoreTube\n      ")])])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticStyle: {
      "text-align": "center",
      "background-color": "#000000"
    }
  }, [_c('div', {
    staticClass: ".text-center",
    attrs: {
      "id": "youtube"
    }
  })])
}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "AB3I":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_TabItem_vue__ = __webpack_require__("js3C");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_e53867c6_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_vue_loader_lib_selector_type_template_index_0_TabItem_vue__ = __webpack_require__("KUgH");
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_TabItem_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_e53867c6_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_vue_loader_lib_selector_type_template_index_0_TabItem_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "KUgH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": _vm.transitionName
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isActive),
      expression: "isActive"
    }],
    staticClass: "tab-item"
  }, [_vm._t("default")], 2)])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "M93x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__("xJD8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_57c15c3f_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__("4OaV");
function injectStyle (ssrContext) {
  __webpack_require__("w60s")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_57c15c3f_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__("M93x");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__("YaEn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_buefy__ = __webpack_require__("MMSg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_buefy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_buefy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_font_awesome_scss_font_awesome_scss__ = __webpack_require__("lGVK");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_font_awesome_scss_font_awesome_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_font_awesome_scss_font_awesome_scss__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.






__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_3_buefy___default.a, {
  defaultIconPack: 'fa'
});

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

/* eslint-disable no-new */
var app = new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */] }
});

/***/ }),

/***/ "YaEn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__("/ocq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Hello__ = __webpack_require__("qSdX");




__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/',
    name: 'Hello',
    component: __WEBPACK_IMPORTED_MODULE_2__components_Hello__["a" /* default */]
  }]
}));

/***/ }),

/***/ "js3C":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'bTabItem',
    props: {
        label: String,
        icon: String,
        iconPack: String
    },
    data: function data() {
        return {
            isActive: false,
            transitionName: null
        };
    },

    methods: {
        /**
         * Activate tab, alter animation name based on the index.
         */
        activate: function activate(oldIndex, index) {
            if (!this.$parent.animated) {
                this.transitionName = null;
            } else {
                this.transitionName = index < oldIndex ? 'slide-next' : 'slide-prev';
            }
            this.isActive = true;
        },


        /**
         * Deactivate tab, alter animation name based on the index.
         */
        deactivate: function deactivate(oldIndex, index) {
            if (!this.$parent.animated) {
                this.transitionName = null;
            } else {
                this.transitionName = index < oldIndex ? 'slide-next' : 'slide-prev';
            }
            this.isActive = false;
        }
    },
    created: function created() {
        if (!this.$parent.$data._isTabs) {
            this.$destroy();
            throw new Error('You should wrap bTabItem on a bTabs');
        }

        this.$parent.tabItems.push(this);
    },
    beforeDestroy: function beforeDestroy() {
        var index = this.$parent.tabItems.indexOf(this);
        if (index >= 0) {
            this.$parent.tabItems.splice(index, 1);
        }
    }
});

/***/ }),

/***/ "jwH6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_Upload_vue__ = __webpack_require__("qmaD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_e51b174e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_vue_loader_lib_selector_type_template_index_0_Upload_vue__ = __webpack_require__("wB2H");
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_Upload_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_e51b174e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_vue_loader_lib_selector_type_template_index_0_Upload_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "lGVK":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "pMZz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'hello',
  data: function data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  }
});

/***/ }),

/***/ "qSdX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Hello_vue__ = __webpack_require__("pMZz");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c8e317aa_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Hello_vue__ = __webpack_require__("0zr6");
function injectStyle (ssrContext) {
  __webpack_require__("25eA")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-c8e317aa"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Hello_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c8e317aa_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Hello_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "qmaD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_FormElementMixin__ = __webpack_require__("WQZH");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'bUpload',
    mixins: [__WEBPACK_IMPORTED_MODULE_0__utils_FormElementMixin__["a" /* default */]],
    props: {
        value: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        multiple: Boolean,
        disabled: Boolean,
        dragDrop: Boolean,
        type: {
            type: String,
            default: 'is-primary'
        }
    },
    data: function data() {
        return {
            newValue: this.value || [],
            dragDropFocus: false,
            _elementRef: 'input'
        };
    },

    watch: {
        /**
         * When v-model is changed:
         *   1. Set internal value.
         *   2. If it's invalid, validate again.
         */
        value: function value(_value) {
            this.newValue = _value;
            !this.isValid && !this.dragDrop && this.checkHtml5Validity();
        }
    },
    methods: {
        /**
         * Listen change event on input type 'file',
         * emit 'input' event and validate
         */
        onFileChange: function onFileChange(event) {
            if (!this.disabled && !this.loading) {
                if (this.dragDrop) {
                    this.updateDragDropFocus(false);
                }
                var value = event.target.files || event.dataTransfer.files;
                if (value && value.length) {
                    if (!this.multiple) {
                        // only one element in case drag drop mode and isn't multiple
                        if (this.dragDrop) {
                            if (value.length === 1) {
                                this.newValue = [];
                            } else {
                                return false;
                            }
                        } else {
                            this.newValue = [];
                        }
                    }
                    for (var i = 0; i < value.length; i++) {
                        this.newValue.push(value[i]);
                    }
                }
                this.$emit('input', this.newValue);
                !this.dragDrop && this.checkHtml5Validity();
            }
        },


        /**
         * Listen drag-drop to update internal variable
         */
        updateDragDropFocus: function updateDragDropFocus(focus) {
            if (!this.disabled && !this.loading) {
                this.dragDropFocus = focus;
            }
        }
    }
});

/***/ }),

/***/ "w60s":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "wB2H":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "upload control"
  }, [(!_vm.dragDrop) ? [_vm._t("default")] : _c('div', {
    staticClass: "upload-draggable",
    class: [_vm.type, {
      'is-loading': _vm.loading,
      'is-disabled': _vm.disabled,
      'is-hovered': _vm.dragDropFocus
    }],
    on: {
      "dragover": function($event) {
        $event.preventDefault();
        _vm.updateDragDropFocus(true)
      },
      "dragleave": function($event) {
        $event.preventDefault();
        _vm.updateDragDropFocus(false)
      },
      "dragenter": function($event) {
        $event.preventDefault();
        _vm.updateDragDropFocus(true)
      },
      "drop": function($event) {
        $event.preventDefault();
        _vm.onFileChange($event)
      }
    }
  }, [_vm._t("default")], 2), _vm._v(" "), _c('input', _vm._b({
    ref: "input",
    attrs: {
      "type": "file",
      "multiple": _vm.multiple,
      "disabled": _vm.disabled
    },
    on: {
      "change": _vm.onFileChange
    }
  }, 'input', _vm.$attrs, false))], 2)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "xJD8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__("fZjL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Hello__ = __webpack_require__("qSdX");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_buefy_src_components_tabs_TabItem_vue__ = __webpack_require__("AB3I");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_buefy_src_components_upload_Upload_vue__ = __webpack_require__("jwH6");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_get_youtube_id__ = __webpack_require__("Qflu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_get_youtube_id___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_get_youtube_id__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






function binaryIndexOf(searchElement) {
  'use strict';

  var minIndex = 0;
  var maxIndex = this.length - 1;
  var currentIndex = void 0;
  var currentElement = void 0;

  while (minIndex <= maxIndex) {
    currentIndex = (minIndex + maxIndex) / 2 | 0;
    currentElement = this[currentIndex];

    if (currentElement < searchElement) {
      minIndex = currentIndex + 1;
    } else if (currentElement > searchElement) {
      maxIndex = currentIndex - 1;
    } else {
      return currentIndex;
    }
  }
  return [maxIndex, minIndex];
}

// Re-maps a number from one range to another.
function map(x, in_min, in_max, out_min, out_max) {
  return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

var vrv = new verovio.toolkit();
vrv.setOptions({
  scale: 30,
  noLayout: 1,
  ignoreLayout: 1
});

var svg = void 0;
var meiData = void 0;
var pixelToTime = {};
var timeToPixel = {};

var barline = void 0;

var xmlParser = new DOMParser();

var reader = new FileReader();
reader.onloadend = function () {
  meiData = reader.result;
  svg = vrv.renderData(meiData, {});
};

function getTimeFromPixel(pixel) {
  var array = pixelToTime;
  var keyArray = $.map(array, function (value, key) {
    return key;
  });
  var indices = binaryIndexOf.call(keyArray, pixel);
  var keyLeft = keyArray[indices[0]];
  var keyRight = keyArray[indices[1]];
  var valueLeft = array[keyLeft];
  var valueRight = array[keyRight];

  var currentTime = 0;
  if (keyLeft !== null) currentTime = map(pixel, keyLeft, keyRight, valueLeft, valueRight);

  return currentTime;
}

function getPixelFromTime(time) {
  var array = timeToPixel;
  var keyArray = $.map(array, function (value, key) {
    return key;
  });
  var indices = binaryIndexOf.call(keyArray, time);
  var keyLeft = keyArray[indices[0]];
  var keyRight = keyArray[indices[1]];
  var valueLeft = array[keyLeft];
  var valueRight = array[keyRight];

  return map(time, keyLeft, keyRight, valueLeft, valueRight);
}

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'app',
  components: {
    BUpload: __WEBPACK_IMPORTED_MODULE_3_buefy_src_components_upload_Upload_vue__["a" /* default */],
    BTabItem: __WEBPACK_IMPORTED_MODULE_2_buefy_src_components_tabs_TabItem_vue__["a" /* default */],
    Hello: __WEBPACK_IMPORTED_MODULE_1__components_Hello__["a" /* default */]
  },
  data: function data() {
    return {
      activeTab: 0,
      showInput: true,
      showYoutube: false,
      fileAudio: '',
      fileMei: '',
      youtubeUrl: ''
    };
  },

  methods: {
    uploadAudio: function uploadAudio() {
      var app = this;

      var loadingComponent = app.$loading.open();
      this.$forceUpdate();

      reader.readAsText(this.$data.fileMei[0]);

      var audio = new Audio(URL.createObjectURL(app.$data.fileAudio[0]));

      $(document).on("keypress", function (e) {
        switch (e.which) {
          case 32:
            // Spacebar
            togglePause();
        }
      });

      function togglePause() {
        if (audio.paused) {
          audio.play();
        } else {
          audio.pause();
        }
      }

      function updateBarline() {
        var pixel = getPixelFromTime(audio.currentTime);
        if (isNaN(pixel)) {
          barline.attr("x1", -10);
          barline.attr("x2", -10);
        } else {
          barline.attr("x1", pixel);
          barline.attr("x2", pixel);
        }
      }

      var fd = new FormData();
      fd.append('mei', new File([this.$data.fileMei[0]], this.$data.fileMei[0].name));
      fd.append('audio', new File([this.$data.fileAudio[0]], this.$data.fileAudio[0].name));

      $.ajax({
        url: 'http://nashira.uni-paderborn.de:8000/get_alignment_from_audio',
        method: "POST",
        crossDomain: true,
        contentType: false,
        processData: false,
        cache: false,
        data: fd,
        success: function success(idToTime) {
          app.$data.showInput = false;

          console.log(idToTime);

          $("#svgMei").html(svg);
          var svgElem = d3.select('#svgMei svg');
          svgElem.selectAll(".system").each(function () {
            d3.select(this).append("rect").attr("x", this.getBBox().x).attr("y", this.getBBox().y).attr("width", this.getBBox().width).attr("height", this.getBBox().height).attr("id", d3.select(this).attr("id")).style("fill", "#df5b5b").style("opacity", "0.0").on("click", function () {
              //                      $audio = $('audio')[0]
              var newTime = getTimeFromPixel(d3.mouse(this)[0]);
              audio.currentTime = newTime;
              audio.play();
            });
          });

          __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(idToTime).forEach(function (key) {
            var x = svgElem.select('#' + key).node().getBBox().x;
            pixelToTime[x.toString()] = idToTime[key];
            timeToPixel[idToTime[key].toString()] = x;
          });

          d3.select(".page-margin").append("line").attr("id", "barline").attr("x1", -10).attr("x2", -10).attr("y1", 0).attr("y2", "100%").attr("stroke-width", 20).attr("stroke", "red");

          barline = d3.select("#barline");
          setInterval(updateBarline, 20);

          loadingComponent.close();
        },
        error: function error(request, status, _error) {
          alert('Es ist leider ein Fehler aufgetreten.');
        }
      });
    },
    uploadYoutube: function uploadYoutube() {
      var app = this;

      var loadingComponent = app.$loading.open();
      this.$forceUpdate();

      reader.readAsText(this.$data.fileMei[0]);

      var player = new YT.Player('youtube', {
        height: '390',
        width: '640',
        videoId: __WEBPACK_IMPORTED_MODULE_4_get_youtube_id___default()(app.$data.youtubeUrl)
      });

      $(document).on("keypress", function (e) {
        switch (e.which) {
          case 32:
            // Spacebar
            togglePause();
        }
      });

      function togglePause() {
        if (player.getPlayerState() !== 1) {
          player.playVideo();
        } else {
          player.pauseVideo();
        }
      }

      function updateBarline() {
        var pixel = getPixelFromTime(player.getCurrentTime());
        if (isNaN(pixel)) {
          barline.attr("x1", -10);
          barline.attr("x2", -10);
        } else {
          barline.attr("x1", pixel);
          barline.attr("x2", pixel);
        }
      }

      var fd = new FormData();
      var url = app.$data.youtubeUrl.indexOf('://') === -1 ? 'http://' + app.$data.youtubeUrl : app.$data.youtubeUrl;
      fd.append('mei', new File([this.$data.fileMei[0]], this.$data.fileMei[0].name));
      fd.append('youtube-url', url);

      $.ajax({
        url: 'http://nashira.uni-paderborn.de:8000/get_alignment_from_yt',
        method: "POST",
        crossDomain: true,
        contentType: false,
        processData: false,
        cache: false,
        data: fd,
        success: function success(idToTime) {
          app.$data.showInput = false;
          app.$data.showYoutube = true;
          console.log(idToTime);

          $("#svgMei").html(svg);
          var svgElem = d3.select('#svgMei svg');
          svgElem.selectAll(".system").each(function () {
            d3.select(this).append("rect").attr("x", this.getBBox().x).attr("y", this.getBBox().y).attr("width", this.getBBox().width).attr("height", this.getBBox().height).attr("id", d3.select(this).attr("id")).style("fill", "#df5b5b").style("opacity", "0.0").on("click", function () {
              var newTime = getTimeFromPixel(d3.mouse(this)[0]);
              player.seekTo(newTime, true);
            });
          });

          __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(idToTime).forEach(function (key) {
            var x = svgElem.select('#' + key).node().getBBox().x;
            pixelToTime[x.toString()] = idToTime[key];
            timeToPixel[idToTime[key].toString()] = x;
          });

          d3.select(".page-margin").append("line").attr("id", "barline").attr("x1", -10).attr("x2", -10).attr("y1", 0).attr("y2", "100%").attr("stroke-width", 20).attr("stroke", "red");

          barline = d3.select("#barline");
          setInterval(updateBarline, 20);

          loadingComponent.close();
        },
        error: function error(request, status, _error2) {
          alert('Es ist leider ein Fehler aufgetreten.');
        }
      });
    }
  }
});

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.8fdb5b64c8bba5c58941.js.map