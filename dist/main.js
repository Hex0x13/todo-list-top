/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles/style.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/styles/style.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n    --black: #222831;\r\n    --lighter-black: #31363f;\r\n    --cyan: #76ABAE;\r\n    --dirty-white: #EEEEEE;\r\n    --side-bar-w: 200px;\r\n    --todo-btn-geometry: 16px;\r\n    --todo-btn-w: 20px;\r\n    --todo-btn-hover-color: cyan;\r\n    --todo-checkbox-geometry: 15px;\r\n    --todo-item-gap: 10px;\r\n    --project-delete-btn-size: 12px;\r\n}\r\n\r\nhtml,\r\n*,\r\n*::before,\r\n*::after {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n    background-color: var(--lighter-black);\r\n    color: var(--dirty-white);\r\n}\r\n\r\nbody {\r\n    height: 100vh;\r\n    display: grid;\r\n    grid-template-columns: var(--side-bar-w) 1fr;\r\n    grid-template-rows: 80px 1fr;\r\n}\r\n\r\n.header {\r\n    background: var(--black);\r\n    grid-column: span 2;\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 5px 20px;\r\n    box-shadow: inset 0px -3px 5px -4px rgb(255, 255, 255);\r\n}\r\n\r\n.side-bar button {\r\n    margin: 2px 10px;\r\n    font-weight: 100;\r\n    font-size: 16px;\r\n    padding: 10px 20px;\r\n    border-radius: 12px;\r\n    border: none;\r\n    user-select: none;\r\n    width: calc(var(--side-bar-w) - 20px);\r\n    text-align: left;\r\n    cursor: pointer;\r\n    -moz-user-select: none;\r\n    -webkit-user-select: none;\r\n}\r\n\r\n.side-bar {\r\n    margin-top: 10px;\r\n    border-right: 1px solid var(--black);\r\n}\r\n\r\n.nav-list-filter .active {\r\n    filter: brightness(0.9);\r\n    font-weight: 500;\r\n}\r\n\r\n.side-bar button:hover:not(.active) {\r\n    filter: brightness(0.9);\r\n}\r\n\r\n.side-bar button:active:not(.active) {\r\n    transform: translate(-1px, -1px);\r\n}\r\n\r\n.project-header {\r\n    font-size: 22px;\r\n    font-weight: 600;\r\n    padding: 20px 0px 10px 20px;\r\n    cursor: default;\r\n    user-select: none;\r\n    -moz-user-select: none;\r\n    -webkit-user-select: none;\r\n}\r\n\r\n.content {\r\n    margin-top: 22px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.task {\r\n    width: 600px;\r\n    background-color: var(--black);\r\n    margin: 5px;\r\n    border-radius: 5px;\r\n    display: grid;\r\n    grid-template-columns:\r\n        var(--todo-checkbox-geometry) 1fr 74px var(--todo-btn-w) var(--todo-btn-w);\r\n    padding: 10px 15px;\r\n    gap: var(--todo-item-gap);\r\n}\r\n\r\n.task * {\r\n    background-color: transparent;\r\n    font-size: 16px;\r\n    display: flex;\r\n    align-items: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.task .due-date {\r\n    font-size: 14px;\r\n    user-select: none;\r\n    -moz-user-select: none;\r\n    -webkit-user-select: none;\r\n}\r\n\r\n.edit-btn,\r\n.delete-btn {\r\n    border: none;\r\n    background: transparent;\r\n}\r\n\r\n.edit-btn svg,\r\n.delete-btn svg {\r\n    width: var(--todo-btn-geometry);\r\n    height: var(--todo-btn-geometry);\r\n    transition: all 600ms;\r\n}\r\n\r\n.delete-btn svg {\r\n    fill: var(--dirty-white);\r\n}\r\n\r\n.edit-btn svg {\r\n    stroke: var(--dirty-white);\r\n    fill: transparent;\r\n}\r\n\r\n.delete-btn svg:hover {\r\n    fill: var(--todo-btn-hover-color);\r\n}\r\n\r\n.edit-btn svg:hover {\r\n    stroke: var(--todo-btn-hover-color);\r\n}\r\n\r\n.delete-btn svg:active,\r\n.edit-btn svg:active {\r\n    transform: scale(1.4);\r\n}\r\n\r\n.due-date:active {\r\n    transform: scale(1.02);\r\n}\r\n\r\n.add-btn {\r\n    margin-top: 10px;\r\n    padding: 10px;\r\n    width: 300px;\r\n    border-radius: 6px;\r\n    border: none;\r\n    background-color: var(--black);\r\n    cursor: pointer;\r\n}\r\n\r\ninput[type=\"checkbox\"] {\r\n    opacity: 0;\r\n    cursor: pointer;\r\n    z-index: 1;\r\n}\r\n\r\ninput[type=\"checkbox\"]+label {\r\n    position: relative;\r\n}\r\n\r\ninput[type=\"checkbox\"]+label::before {\r\n    content: '';\r\n    width: var(--todo-checkbox-geometry);\r\n    height: var(--todo-checkbox-geometry);\r\n    position: absolute;\r\n    top: 1px;\r\n    left: calc(calc(var(--todo-checkbox-geometry) + var(--todo-item-gap)) * -1);\r\n    background: white;\r\n    border: 1px solid white;\r\n    border-radius: 3px;\r\n}\r\n\r\ninput[type=\"checkbox\"]:checked+label::before {\r\n    content: '\\\\002714';\r\n    font-size: 11px;\r\n    font-weight: 100;\r\n    background-color: var(--lighter-black);\r\n    color: white;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\ninput[type=\"checkbox\"]:checked+label {\r\n    text-decoration: line-through;\r\n    color: gray;\r\n}\r\n\r\n.add-project-btn {\r\n    font-size: 18px;\r\n    display: flex;\r\n    align-items: center;\r\n    color: gray;\r\n    transition: all 500ms;\r\n}\r\n\r\n.add-project-btn::before {\r\n    color: gray;\r\n    content: '\\\\002b';\r\n    font-size: 22px;\r\n    margin-right: 8px;\r\n    transition: all 500ms;\r\n}\r\n\r\n.add-project-btn:hover {\r\n    color: cyan;\r\n}\r\n\r\n.add-project-btn:hover::before {\r\n    color: cyan;\r\n}\r\n\r\n.add-project-input {\r\n    display: grid;\r\n    grid-template-areas:\r\n        \"name-input name-input\"\r\n        \"add-button cancel-button\";\r\n    justify-content: center;\r\n    align-items: center;\r\n    row-gap: 8px;\r\n}\r\n\r\n.add-project-input input {\r\n    grid-area: name-input;\r\n    border: 1px solid gray;\r\n    width: 90%;\r\n    justify-self: center;\r\n    align-self: center;\r\n    height: 40px;\r\n    padding: 5px 10px;\r\n    border-radius: 18px;\r\n}\r\n\r\n.add-project-input input:focus {\r\n    outline: 1px solid #76ABAE;\r\n}\r\n\r\n.add-project-input .add-button {\r\n    grid-area: add-button;\r\n    background-color: rgb(47, 182, 141);\r\n}\r\n\r\n.add-project-input .cancel-button {\r\n    grid-area: cancel-button;\r\n    background-color: rgb(201, 57, 57);\r\n}\r\n\r\n.add-project-input button {\r\n    width: 90%;\r\n    padding: 10px 0;\r\n    text-align: center;\r\n}\r\n\r\n.hide-element {\r\n    display: none;\r\n}\r\n\r\n\r\n.nav-list-projects {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding: 0;\r\n}\r\n\r\n.project-container {\r\n    height: 20px;\r\n    width: 180px;\r\n    padding: 20px 0px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin: 5px 0;\r\n    border-bottom: 1px solid rgba(128, 128, 128, 0.26);\r\n}\r\n\r\n.project-container .project-name {\r\n    width: 148px;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    overflow: hidden;\r\n    padding: 10px 0px 10px 10px;\r\n    margin: 2px 10px 2px 0px;\r\n    text-overflow: ellipsis;\r\n    -ms-text-overflow: ellipsis;\r\n    -o-text-overflow: ellipsis;\r\n    text-wrap: nowrap;\r\n}\r\n\r\n.project-container .delete-project-btn {\r\n    margin: 0;\r\n    padding: 0;\r\n    border: none;\r\n    background: transparent;\r\n    display: inline-block;\r\n    flex-grow: 0;\r\n    flex-shrink: 1;\r\n    width: var(--project-delete-btn-size);\r\n    height: inherit;\r\n}\r\n\r\n.delete-project-btn svg {\r\n    width: var(--project-delete-btn-size);\r\n    height: var(--project-delete-btn-size);\r\n    transition: all 600ms;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.delete-project-btn svg {\r\n    fill: var(--dirty-white);\r\n}\r\n\r\n.delete-project-btn svg:hover {\r\n    fill: var(--todo-btn-hover-color);\r\n}\r\n\r\n.delete-project-btn svg:active {\r\n    transform: scale(1.4);\r\n}\r\n\r\n.modal {\r\n    display: none;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: auto;\r\n    background-color: rgb(0, 0, 0);\r\n    background-color: rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.modal-content {\r\n    background-color: #fefefe;\r\n    margin: 15% auto;\r\n    padding: 20px;\r\n    border: 1px solid #888;\r\n    width: 80%;\r\n}\r\n\r\n.close {\r\n    color: #aaa;\r\n    float: right;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n}\r\n\r\n.close:hover,\r\n.close:focus {\r\n    color: black;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/assets/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/assets/styles/style.css":
/*!*************************************!*\
  !*** ./src/assets/styles/style.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/assets/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets/icons/delete-icon.svg":
/*!******************************************!*\
  !*** ./src/assets/icons/delete-icon.svg ***!
  \******************************************/
/***/ ((module) => {

eval("module.exports = \"<svg viewBox=\\\"0 0 448 512\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M432 80h-82.38l-34-56.75C306.1 8.827 291.4 0 274.6 0H173.4C156.6 0 141 8.827 132.4 23.25L98.38 80H16C7.125 80 0 87.13 0 96v16C0 120.9 7.125 128 16 128H32v320c0 35.35 28.65 64 64 64h256c35.35 0 64-28.65 64-64V128h16C440.9 128 448 120.9 448 112V96C448 87.13 440.9 80 432 80zM171.9 50.88C172.9 49.13 174.9 48 177 48h94c2.125 0 4.125 1.125 5.125 2.875L293.6 80H154.4L171.9 50.88zM352 464H96c-8.837 0-16-7.163-16-16V128h288v320C368 456.8 360.8 464 352 464zM224 416c8.844 0 16-7.156 16-16V192c0-8.844-7.156-16-16-16S208 183.2 208 192v208C208 408.8 215.2 416 224 416zM144 416C152.8 416 160 408.8 160 400V192c0-8.844-7.156-16-16-16S128 183.2 128 192v208C128 408.8 135.2 416 144 416zM304 416c8.844 0 16-7.156 16-16V192c0-8.844-7.156-16-16-16S288 183.2 288 192v208C288 408.8 295.2 416 304 416z\\\"></path></svg>\"\n\n//# sourceURL=webpack://todo-list/./src/assets/icons/delete-icon.svg?");

/***/ }),

/***/ "./src/assets/icons/edit-icon.svg":
/*!****************************************!*\
  !*** ./src/assets/icons/edit-icon.svg ***!
  \****************************************/
/***/ ((module) => {

eval("module.exports = \"<svg stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" stroke-width=\\\"2\\\" viewBox=\\\"0 0 24 24\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7\\\"></path><path d=\\\"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z\\\"></path></svg>\"\n\n//# sourceURL=webpack://todo-list/./src/assets/icons/edit-icon.svg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/styles/style.css */ \"./src/assets/styles/style.css\");\n/* harmony import */ var _modules_listener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/listener */ \"./src/modules/listener.js\");\n/* harmony import */ var _modules_todo_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/todo-list */ \"./src/modules/todo-list.js\");\n\r\n\r\n\r\n\r\nwindow.onload = () => {\r\n    (0,_modules_todo_list__WEBPACK_IMPORTED_MODULE_2__.showAllTask)();\r\n    (0,_modules_todo_list__WEBPACK_IMPORTED_MODULE_2__.renderProjects)();\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/add-task-modal.js":
/*!***************************************!*\
  !*** ./src/modules/add-task-modal.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createAddTaskBtn)\n/* harmony export */ });\nconst modal = document.getElementById('add-task-modal');\r\nconst closeSpan = document.querySelector('.close');\r\nconst modalInputs = Array.from(modal.querySelectorAll('input,select'));\r\nconst navListProject = document.querySelector('.nav-list-projects');\r\n\r\nfunction loadProjectOpts() {\r\n    const taskProject = document.querySelector('#task-project');\r\n    taskProject.innerHTML = '';\r\n\r\n    navListProject.querySelectorAll('.project-name').forEach((element) => {\r\n        const opt = document.createElement('option');\r\n        if (element.textContent.toLowerCase() === 'ungroup') {\r\n            opt.setAttribute('value', 'none')\r\n            opt.textContent = 'none';\r\n        } else {\r\n            opt.setAttribute('value', element.textContent);\r\n            opt.textContent = element.textContent;\r\n        }\r\n        taskProject.appendChild(opt);\r\n    });\r\n}\r\n\r\ncloseSpan.onclick = () => {\r\n    modal.style.display = 'none';\r\n}\r\n\r\nwindow.onclick = (event) => {\r\n    if (event.target == modal) {\r\n        modal.style.display = 'none';\r\n    }\r\n}\r\n\r\nfunction createAddTaskBtn() {\r\n    const addBtn = document.createElement('button');\r\n    addBtn.classList.add('add-btn');\r\n    addBtn.textContent = 'Add';\r\n\r\n    addBtn.onclick = () => {\r\n        modal.style.display = 'block';\r\n        modal.querySelector('#title').focus();\r\n        loadProjectOpts();\r\n    }\r\n\r\n    return addBtn;\r\n}\r\n\r\ndocument.addEventListener('keydown', (event) => {\r\n    if (event.key === 'Tab' && modal.style.display === 'block') {\r\n        if (document.activeElement === modalInputs[modalInputs.length - 1]) {\r\n            document.querySelector('.add-btn').focus();\r\n        } else if (!modalInputs.includes(document.activeElement)){\r\n            event.preventDefault();\r\n        }\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/add-task-modal.js?");

/***/ }),

/***/ "./src/modules/function.js":
/*!*********************************!*\
  !*** ./src/modules/function.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toggleActive: () => (/* binding */ toggleActive)\n/* harmony export */ });\nconst navList = document.querySelector('.nav-list-filter').children;\r\n\r\nfunction toggleActive(elem, callback, ...arg) {\r\n    if (!elem.classList.contains('active')) {\r\n        for (const child of navList) {\r\n           child.classList.remove('active'); \r\n        };\r\n        if (callback) {\r\n            callback(...arg);\r\n        }\r\n        elem.classList.add('active');\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/function.js?");

/***/ }),

/***/ "./src/modules/listener.js":
/*!*********************************!*\
  !*** ./src/modules/listener.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function */ \"./src/modules/function.js\");\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-list */ \"./src/modules/todo-list.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst allBtn = document.querySelector('.all');\r\nconst todayBtn = document.querySelector('.today');\r\nconst weekBtn = document.querySelector('.week');\r\nconst addProjectBtn = document.querySelector('.add-project-btn');\r\nconst addProjectInput = document.querySelector('.add-project-input');\r\nconst addBtnProject = addProjectInput.querySelector('.add-button');\r\nconst cancelBtnProject = addProjectInput.querySelector('.cancel-button');\r\nconst projectNameInput = addProjectInput.querySelector('input');\r\n\r\nallBtn.onclick = showAll;\r\ntodayBtn.onclick = showToday;\r\nweekBtn.onclick = showWeek;\r\naddProjectBtn.onclick = addProject;\r\naddBtnProject.onclick = confirmProject;\r\ncancelBtnProject.onclick = cancelProject;\r\n\r\nfunction showAll() {\r\n    (0,_function__WEBPACK_IMPORTED_MODULE_0__.toggleActive)(allBtn, _todo_list__WEBPACK_IMPORTED_MODULE_1__.showAllTask);\r\n}\r\n\r\nfunction showToday() {\r\n    (0,_function__WEBPACK_IMPORTED_MODULE_0__.toggleActive)(todayBtn, _todo_list__WEBPACK_IMPORTED_MODULE_1__.showTodayTask);\r\n}\r\n\r\nfunction showWeek() {\r\n    (0,_function__WEBPACK_IMPORTED_MODULE_0__.toggleActive)(weekBtn, _todo_list__WEBPACK_IMPORTED_MODULE_1__.showThisWeekTask);\r\n}\r\n\r\nfunction addProject() {\r\n    addProjectBtn.classList.add('hide-element');\r\n    addProjectInput.classList.remove('hide-element');\r\n}\r\n\r\nfunction confirmProject() {\r\n    if (projectNameInput.value == '') {\r\n        return;\r\n    }\r\n    (0,_todo_list__WEBPACK_IMPORTED_MODULE_1__.addNewProject)(projectNameInput.value);\r\n    projectNameInput.value = '';\r\n    addProjectBtn.classList.remove('hide-element');\r\n    addProjectInput.classList.add('hide-element');\r\n}\r\n\r\nfunction cancelProject() {\r\n    addProjectBtn.classList.remove('hide-element');\r\n    addProjectInput.classList.add('hide-element');\r\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/listener.js?");

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\r\n    constructor(name) {\r\n        this.name = name;\r\n        this.tasks = [];\r\n    }\r\n\r\n    addTaskList(tasks) {\r\n        this.tasks.push(...tasks);\r\n    }\r\n\r\n    addTask(task) {\r\n        this.tasks.push(task);\r\n    }\r\n\r\n    removeTask(id) {\r\n        this.tasks.forEach((task, index) => {\r\n            if (task.id == id) {\r\n                this.tasks.splice(index, 1);\r\n            }\r\n        });\r\n    }\r\n\r\n    editTask(id, updatedTask) {\r\n        this.tasks.forEach((task, index) => {\r\n            if (task.id == id) {\r\n                this.tasks[index] = updatedTask;\r\n            }\r\n        });\r\n    }\r\n\r\n    getAllTask() {\r\n        return this.tasks;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/project.js?");

/***/ }),

/***/ "./src/modules/projectList.js":
/*!************************************!*\
  !*** ./src/modules/projectList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst ProjectList = (() => {\r\n    let instance;\r\n\r\n    function createInstance() {\r\n        let list = {};\r\n\r\n        function add(key, value) {\r\n            list[key] = value;\r\n        }\r\n\r\n        function remove(key) {\r\n            delete list[key];\r\n        }\r\n\r\n        function get(key) {\r\n            return list[key];\r\n        }\r\n\r\n        function getAll() {\r\n            return Object.values(list);\r\n        }\r\n\r\n        return { add, remove, get, getAll };\r\n    }\r\n\r\n    function getInstance() {\r\n        if (!instance) {\r\n            instance = createInstance();\r\n        }\r\n        return instance;\r\n    }\r\n\r\n    return { getInstance };\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectList);\n\n//# sourceURL=webpack://todo-list/./src/modules/projectList.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task{\r\n    constructor (taskObj) {\r\n        this.setValue(taskObj);\r\n    }\r\n\r\n    setValue(taskObj) {\r\n        this.id = taskObj.id;\r\n        this.title = taskObj.title;\r\n        this.description = taskObj.description;\r\n        this.due_date = taskObj.due_date;\r\n        this.priority = taskObj.priority;\r\n        this.done = taskObj.done;\r\n    }\r\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/task.js?");

/***/ }),

/***/ "./src/modules/todo-list.js":
/*!**********************************!*\
  !*** ./src/modules/todo-list.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addNewProject: () => (/* binding */ addNewProject),\n/* harmony export */   renderProjects: () => (/* binding */ renderProjects),\n/* harmony export */   showAllTask: () => (/* binding */ showAllTask),\n/* harmony export */   showThisWeekTask: () => (/* binding */ showThisWeekTask),\n/* harmony export */   showTodayTask: () => (/* binding */ showTodayTask)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/modules/task.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/modules/project.js\");\n/* harmony import */ var _assets_icons_delete_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icons/delete-icon.svg */ \"./src/assets/icons/delete-icon.svg\");\n/* harmony import */ var _assets_icons_delete_icon_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_delete_icon_svg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_icons_edit_icon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/icons/edit-icon.svg */ \"./src/assets/icons/edit-icon.svg\");\n/* harmony import */ var _assets_icons_edit_icon_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_edit_icon_svg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _projectList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projectList */ \"./src/modules/projectList.js\");\n/* harmony import */ var _add_task_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-task-modal */ \"./src/modules/add-task-modal.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet taskID = 1;\r\nlet projectID = 1;\r\nconst projectList = _projectList__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getInstance();\r\n\r\nfunction autoIncrementTaskID() {\r\n    const tmp = taskID;\r\n    ++taskID;\r\n    return tmp;\r\n}\r\n\r\nfunction autoIncrementProjectID() {\r\n    const tmp = projectID;\r\n    ++projectID;\r\n    return tmp;\r\n}\r\n\r\nconst ungroupTask = new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Ungroup');\r\nungroupTask.addTaskList([\r\n    new _task__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n        id: autoIncrementTaskID(),\r\n        title: 'Go to beach',\r\n        description: 'Just relax',\r\n        due_date: '03-16-2024',\r\n        priority: 'low',\r\n        done: false\r\n    }),\r\n    new _task__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n        id: autoIncrementTaskID(),\r\n        title: 'Study',\r\n        description: 'for my science exam',\r\n        due_date: '03-22-2024',\r\n        priority: 'high',\r\n        done: false\r\n    }),\r\n    new _task__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n        id: autoIncrementTaskID(),\r\n        title: 'buy a coffee',\r\n        description: '',\r\n        due_date: '03-15-2024',\r\n        priority: 'medium',\r\n        done: false\r\n    })\r\n]);\r\n\r\n\r\nprojectList.add(autoIncrementProjectID(), ungroupTask);\r\n\r\nconst taskContent = document.querySelector('.content');\r\nconst projectContent = document.querySelector('.nav-list-projects');\r\n\r\nfunction createTaskElement(id, task) {\r\n    /* Todo item structure:\r\n    <div class=\"todo-item\" id=\"{index}\">\r\n        <input id=\"item-{index}\" type=\"checkbox\">\r\n        <label for=\"item-{index}\">Title</label>\r\n        <button class=\"detail-btn\">details</button>\r\n        <span class=\"due-date\"></span>\r\n        <button class=\"edit-btn\">edit</button>\r\n        <button class=\"delete-btn\">delete</button>\r\n    </div>*/\r\n\r\n    const todoItem = document.createElement('div');\r\n    const checkBtn = document.createElement('input');\r\n    const title = document.createElement('label');\r\n    const dueDate = document.createElement('span');\r\n    const editBtn = document.createElement('button');\r\n    const deleteBtn = document.createElement('button');\r\n\r\n    todoItem.classList.add('task');\r\n    todoItem.id = id;\r\n    checkBtn.type = 'checkbox';\r\n    checkBtn.id = `item-${id}`;\r\n    title.classList.add('title');\r\n\r\n    title.textContent = task.title;\r\n    dueDate.textContent = task.due_date;\r\n    dueDate.classList.add('due-date');\r\n    editBtn.classList.add('edit-btn');\r\n    editBtn.innerHTML = (_assets_icons_edit_icon_svg__WEBPACK_IMPORTED_MODULE_3___default());\r\n    deleteBtn.classList.add('delete-btn')\r\n    deleteBtn.innerHTML = (_assets_icons_delete_icon_svg__WEBPACK_IMPORTED_MODULE_2___default());\r\n\r\n    todoItem.appendChild(checkBtn);\r\n    todoItem.appendChild(title);\r\n    todoItem.appendChild(dueDate);\r\n    todoItem.appendChild(editBtn);\r\n    todoItem.appendChild(deleteBtn);\r\n\r\n    return todoItem;\r\n}\r\n\r\nfunction clearTasks() {\r\n    taskContent.innerHTML = '';\r\n}\r\nfunction createProjectElement(project) {\r\n    const projectContainer = document.createElement('div');\r\n    const projectName = document.createElement('button');\r\n    const deleteButton = document.createElement('button');\r\n\r\n    projectContainer.classList.add('project-container');\r\n    projectName.classList.add('project-name');\r\n    deleteButton.classList.add('delete-project-btn');\r\n\r\n    projectName.textContent = project.name;\r\n    deleteButton.innerHTML = (_assets_icons_delete_icon_svg__WEBPACK_IMPORTED_MODULE_2___default());\r\n\r\n    projectContainer.appendChild(projectName);\r\n    projectContainer.appendChild(deleteButton);\r\n    return projectContainer;\r\n}\r\n\r\nfunction clearProjectContent() {\r\n    projectContent.innerHTML = '';\r\n}\r\n\r\nfunction showAllTask() {\r\n    clearTasks();\r\n    projectList.getAll().forEach((project) => {\r\n        project.getAllTask().forEach((task, index) => {\r\n            const taskElement = createTaskElement(\r\n                index,\r\n                task\r\n            );\r\n            taskContent.appendChild(taskElement);\r\n        });\r\n    });\r\n    taskContent.appendChild((0,_add_task_modal__WEBPACK_IMPORTED_MODULE_5__[\"default\"])());\r\n}\r\n\r\nfunction showTodayTask() {\r\n    clearTasks();\r\n    taskContent.textContent = 'Today';\r\n}\r\n\r\nfunction showThisWeekTask() {\r\n    clearTasks();\r\n    taskContent.textContent = 'This Week';\r\n}\r\n\r\nfunction addNewProject(name) {\r\n    projectList.add(autoIncrementProjectID(), new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](name));\r\n    renderProjects();\r\n}\r\n\r\nfunction renderProjects() {\r\n    clearProjectContent();\r\n    for (const project of projectList.getAll()) {\r\n        projectContent.appendChild(createProjectElement(project));\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/todo-list.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;