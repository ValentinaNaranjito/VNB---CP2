/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/button/button.ts":
/*!*****************************************!*\
  !*** ./src/components/button/button.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"attributebutton\": () => (/* binding */ attributebutton),\n/* harmony export */   \"default\": () => (/* binding */ button)\n/* harmony export */ });\nvar attributebutton;\n(function (attributebutton) {\n    attributebutton[\"btn_text\"] = \"btn_text\";\n})(attributebutton || (attributebutton = {}));\nclass button extends HTMLElement {\n    static get observedAttributes() {\n        const attrs = {\n            btn_text: null,\n        };\n        return Object.keys(attrs);\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\r\n                <section>\r\n               <button class=\"boton\">NEXT</button>\r\n                </section>\r\n            `;\n        }\n    }\n}\ncustomElements.define('app-button', button);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/button/button.ts?");

/***/ }),

/***/ "./src/components/card/card.ts":
/*!*************************************!*\
  !*** ./src/components/card/card.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"attributecard\": () => (/* binding */ attributecard),\n/* harmony export */   \"default\": () => (/* binding */ card)\n/* harmony export */ });\n/* harmony import */ var _button_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../button/button */ \"./src/components/button/button.ts\");\n/* harmony import */ var _figure_figure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../figure/figure */ \"./src/components/figure/figure.ts\");\n\n\nvar attributecard;\n(function (attributecard) {\n    attributecard[\"fact\"] = \"fact\";\n    attributecard[\"url\"] = \"url\";\n    attributecard[\"btn_text\"] = \"btn_text\";\n})(attributecard || (attributecard = {}));\nclass card extends HTMLElement {\n    static get observedAttributes() {\n        const attrs = {\n            fact: null,\n            url: null,\n            btn_text: null\n        };\n        return Object.keys(attrs);\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n        this.render();\n    }\n    constructor() {\n        super();\n        this.fact = \"\";\n        this.url = \"\";\n        this.btn_text = \"\";\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = '';\n        const container = this.ownerDocument.createElement('section');\n        const figure = this.ownerDocument.createElement('app-figure');\n        figure.setAttribute(_figure_figure__WEBPACK_IMPORTED_MODULE_1__.attributefigure.fact, this.fact);\n        figure.setAttribute(_figure_figure__WEBPACK_IMPORTED_MODULE_1__.attributefigure.url, this.url);\n        const button = this.ownerDocument.createElement('app-button');\n        button.setAttribute(_button_button__WEBPACK_IMPORTED_MODULE_0__.attributebutton.btn_text, this.btn_text);\n        container.appendChild(figure);\n        container.appendChild(button);\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(container);\n    }\n}\ncustomElements.define('app-card', Card);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/card/card.ts?");

/***/ }),

/***/ "./src/components/export.ts":
/*!**********************************!*\
  !*** ./src/components/export.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"button\": () => (/* reexport safe */ _button_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   \"card\": () => (/* reexport safe */ _card_card__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"figure\": () => (/* reexport safe */ _figure_figure__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _figure_figure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./figure/figure */ \"./src/components/figure/figure.ts\");\n/* harmony import */ var _card_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card/card */ \"./src/components/card/card.ts\");\n/* harmony import */ var _button_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button/button */ \"./src/components/button/button.ts\");\n\n\n\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/export.ts?");

/***/ }),

/***/ "./src/components/figure/figure.ts":
/*!*****************************************!*\
  !*** ./src/components/figure/figure.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"attributefigure\": () => (/* binding */ attributefigure),\n/* harmony export */   \"default\": () => (/* binding */ figure)\n/* harmony export */ });\nvar attributefigure;\n(function (attributefigure) {\n    attributefigure[\"fact\"] = \"fact\";\n    attributefigure[\"url\"] = \"url\";\n})(attributefigure || (attributefigure = {}));\nclass figure extends HTMLElement {\n    static get observedAttributes() {\n        const attrs = {\n            fact: null,\n            url: null\n        };\n        return Object.keys(attrs);\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\r\n                <section>\r\n               <h1 class=\"titulo\">CATSMEMES</h1>\r\n                <p>${this.fact}</p>\r\n                <img src=\"${this.url}\">\r\n                </section>\r\n            `;\n        }\n    }\n}\ncustomElements.define('app-figure', figure);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/figure/figure.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/export */ \"./src/components/export.ts\");\n\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        const something = this.ownerDocument.createElement('app-dashboard');\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(something);\n    }\n}\ncustomElements.define('app-container', AppContainer);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/index.ts?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;