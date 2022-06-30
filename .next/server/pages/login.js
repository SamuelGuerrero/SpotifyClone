"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Login({ providers  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center bg-black min-h-screen w-full justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"w-52 mb-5\",\n                src: \"https://links.papareact.com/9xl\",\n                alt: \"\"\n            }, void 0, false, {\n                fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/pages/login.js\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, this),\n            Object.values(providers).map((provider)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-[#18D860] text-white p-5 rounded-full\",\n                        onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(provider.id, {\n                                callbackUrl: \"/\"\n                            }),\n                        children: [\n                            \"Login with \",\n                            provider.name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/pages/login.js\",\n                        lineNumber: 10,\n                        columnNumber: 11\n                    }, this)\n                }, provider.name, false, {\n                    fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/pages/login.js\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/pages/login.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\nasync function getServerSideProps() {\n    const providers = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getProviders)();\n    return {\n        props: {\n            providers\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUF1RDtBQUV2RCxTQUFTRSxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFLEVBQUU7SUFDNUIscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLHdFQUF3RTs7MEJBQ3JGLDhEQUFDQyxLQUFHO2dCQUFDRCxTQUFTLEVBQUMsV0FBVztnQkFBQ0UsR0FBRyxFQUFDLGlDQUFpQztnQkFBQ0MsR0FBRyxFQUFDLEVBQUU7Ozs7O29CQUFHO1lBRXpFQyxNQUFNLENBQUNDLE1BQU0sQ0FBQ1AsU0FBUyxDQUFDLENBQUNRLEdBQUcsQ0FBQyxDQUFDQyxRQUFRLGlCQUNyQyw4REFBQ1IsS0FBRzs4QkFDRiw0RUFBQ1MsUUFBTTt3QkFBQ1IsU0FBUyxFQUFDLDBDQUEwQzt3QkFBQ1MsT0FBTyxFQUFFLElBQU1iLHVEQUFNLENBQUNXLFFBQVEsQ0FBQ0csRUFBRSxFQUFFO2dDQUFDQyxXQUFXLEVBQUUsR0FBRzs2QkFBQyxDQUFDOzs0QkFBRSxhQUN4Rzs0QkFBQ0osUUFBUSxDQUFDSyxJQUFJOzs7Ozs7NEJBQ2xCO21CQUhETCxRQUFRLENBQUNLLElBQUk7Ozs7d0JBSWpCLENBQ047Ozs7OztZQUNFLENBQ047Q0FDSDtBQUVELGlFQUFlZixLQUFLLEVBQUM7QUFFZCxlQUFlZ0Isa0JBQWtCLEdBQUc7SUFDekMsTUFBTWYsU0FBUyxHQUFHLE1BQU1ILDZEQUFZLEVBQUU7SUFFdEMsT0FBTztRQUNMbUIsS0FBSyxFQUFFO1lBQ0xoQixTQUFTO1NBQ1Y7S0FDRixDQUFDO0NBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2dpbi5qcz84MWIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFByb3ZpZGVycywgc2lnbkluIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuXG5mdW5jdGlvbiBMb2dpbih7IHByb3ZpZGVycyB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBiZy1ibGFjayBtaW4taC1zY3JlZW4gdy1mdWxsIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICA8aW1nIGNsYXNzTmFtZT1cInctNTIgbWItNVwiIHNyYz1cImh0dHBzOi8vbGlua3MucGFwYXJlYWN0LmNvbS85eGxcIiBhbHQ9XCJcIiAvPlxuXG4gICAgICB7T2JqZWN0LnZhbHVlcyhwcm92aWRlcnMpLm1hcCgocHJvdmlkZXIpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e3Byb3ZpZGVyLm5hbWV9PlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctWyMxOEQ4NjBdIHRleHQtd2hpdGUgcC01IHJvdW5kZWQtZnVsbFwiIG9uQ2xpY2s9eygpID0+IHNpZ25Jbihwcm92aWRlci5pZCwge2NhbGxiYWNrVXJsOiBcIi9cIn0pfT5cbiAgICAgICAgICAgIExvZ2luIHdpdGgge3Byb3ZpZGVyLm5hbWV9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuICBjb25zdCBwcm92aWRlcnMgPSBhd2FpdCBnZXRQcm92aWRlcnMoKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwcm92aWRlcnMsXG4gICAgfSxcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJnZXRQcm92aWRlcnMiLCJzaWduSW4iLCJMb2dpbiIsInByb3ZpZGVycyIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImFsdCIsIk9iamVjdCIsInZhbHVlcyIsIm1hcCIsInByb3ZpZGVyIiwiYnV0dG9uIiwib25DbGljayIsImlkIiwiY2FsbGJhY2tVcmwiLCJuYW1lIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/login.js"));
module.exports = __webpack_exports__;

})();