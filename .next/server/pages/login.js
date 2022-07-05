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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Login({ providers  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center bg-black min-h-screen w-full justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"w-52 mb-5\",\n                src: \"https://links.papareact.com/9xl\",\n                alt: \"\"\n            }, void 0, false, {\n                fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/pages/login.js\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, this),\n            Object.values(providers).map((provider)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-[#18D860] text-white p-5 rounded-full\",\n                        onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(provider.id, {\n                                callbackUrl: \"/\"\n                            })\n                        ,\n                        children: [\n                            \"Login with \",\n                            provider.name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/pages/login.js\",\n                        lineNumber: 10,\n                        columnNumber: 11\n                    }, this)\n                }, provider.name, false, {\n                    fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/pages/login.js\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, this)\n            )\n        ]\n    }, void 0, true, {\n        fileName: \"/home/toprak44kmpl/Documentos/GitHub/spotify-clone-1/pages/login.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\nasync function getServerSideProps() {\n    const providers = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getProviders)();\n    return {\n        props: {\n            providers\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUF1RDtBQUV2RCxTQUFTRSxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFLEVBQUU7SUFDNUIscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLHdFQUF3RTs7MEJBQ3JGLDhEQUFDQyxLQUFHO2dCQUFDRCxTQUFTLEVBQUMsV0FBVztnQkFBQ0UsR0FBRyxFQUFDLGlDQUFpQztnQkFBQ0MsR0FBRyxFQUFDLEVBQUU7Ozs7O29CQUFHO1lBRXpFQyxNQUFNLENBQUNDLE1BQU0sQ0FBQ1AsU0FBUyxDQUFDLENBQUNRLEdBQUcsQ0FBQyxDQUFDQyxRQUFRLGlCQUNyQyw4REFBQ1IsS0FBRzs4QkFDRiw0RUFBQ1MsUUFBTTt3QkFBQ1IsU0FBUyxFQUFDLDBDQUEwQzt3QkFBQ1MsT0FBTyxFQUFFLElBQU1iLHVEQUFNLENBQUNXLFFBQVEsQ0FBQ0csRUFBRSxFQUFFO2dDQUFDQyxXQUFXLEVBQUUsR0FBRzs2QkFBQyxDQUFDO3dCQUFBOzs0QkFBRSxhQUN4Rzs0QkFBQ0osUUFBUSxDQUFDSyxJQUFJOzs7Ozs7NEJBQ2xCO21CQUhETCxRQUFRLENBQUNLLElBQUk7Ozs7d0JBSWpCO1lBQ1AsQ0FBQzs7Ozs7O1lBQ0UsQ0FDTjtDQUNIO0FBRUQsaUVBQWVmLEtBQUssRUFBQztBQUVkLGVBQWVnQixrQkFBa0IsR0FBRztJQUN6QyxNQUFNZixTQUFTLEdBQUcsTUFBTUgsNkRBQVksRUFBRTtJQUV0QyxPQUFPO1FBQ0xtQixLQUFLLEVBQUU7WUFDTGhCLFNBQVM7U0FDVjtLQUNGLENBQUM7Q0FDSCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2xvZ2luLmpzPzgxYjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0UHJvdmlkZXJzLCBzaWduSW4gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5cbmZ1bmN0aW9uIExvZ2luKHsgcHJvdmlkZXJzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGJnLWJsYWNrIG1pbi1oLXNjcmVlbiB3LWZ1bGwganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy01MiBtYi01XCIgc3JjPVwiaHR0cHM6Ly9saW5rcy5wYXBhcmVhY3QuY29tLzl4bFwiIGFsdD1cIlwiIC8+XG5cbiAgICAgIHtPYmplY3QudmFsdWVzKHByb3ZpZGVycykubWFwKChwcm92aWRlcikgPT4gKFxuICAgICAgICA8ZGl2IGtleT17cHJvdmlkZXIubmFtZX0+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1bIzE4RDg2MF0gdGV4dC13aGl0ZSBwLTUgcm91bmRlZC1mdWxsXCIgb25DbGljaz17KCkgPT4gc2lnbkluKHByb3ZpZGVyLmlkLCB7Y2FsbGJhY2tVcmw6IFwiL1wifSl9PlxuICAgICAgICAgICAgTG9naW4gd2l0aCB7cHJvdmlkZXIubmFtZX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW47XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4gIGNvbnN0IHByb3ZpZGVycyA9IGF3YWl0IGdldFByb3ZpZGVycygpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHByb3ZpZGVycyxcbiAgICB9LFxuICB9O1xufVxuIl0sIm5hbWVzIjpbImdldFByb3ZpZGVycyIsInNpZ25JbiIsIkxvZ2luIiwicHJvdmlkZXJzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiYWx0IiwiT2JqZWN0IiwidmFsdWVzIiwibWFwIiwicHJvdmlkZXIiLCJidXR0b24iLCJvbkNsaWNrIiwiaWQiLCJjYWxsYmFja1VybCIsIm5hbWUiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/login.js\n");

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