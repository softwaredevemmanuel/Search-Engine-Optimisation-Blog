"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/signup",{

/***/ "./components/auth/SignupComponent.js":
/*!********************************************!*\
  !*** ./components/auth/SignupComponent.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar SignupComponent = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"Ryan\",\n        email: \"ryan@gmail.com\",\n        password: \"rrrrrr\",\n        error: \"\",\n        loading: false,\n        message: \"\",\n        showForm: true\n    }), values = ref[0], setValues = ref[1];\n    var name1 = values.name, email = values.email, password = values.password, error = values.error, loading = values.loading, message = values.message, showForm = values.showForm;\n    var handleSubmit = function(e) {\n        e.preventDefault();\n        console.table({\n            name: name1,\n            email: email,\n            password: password,\n            error: error,\n            loading: loading,\n            message: message,\n            showForm: showForm\n        });\n    };\n    var handleChange = function(name) {\n        return function(e) {\n            setValues(_objectSpread({}, values, _defineProperty({\n                error: false\n            }, name, e.target.value)));\n        };\n    };\n    var signupForm = function() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: name1,\n                        onChange: handleChange(\"name\"),\n                        type: \"text\",\n                        className: \"form-control\",\n                        placeholder: \"Type your name\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Emma/Desktop/My project/BANK APP/frontend/components/auth/SignupComponent.js\",\n                        lineNumber: 29,\n                        columnNumber: 21\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"/Users/Emma/Desktop/My project/BANK APP/frontend/components/auth/SignupComponent.js\",\n                    lineNumber: 28,\n                    columnNumber: 17\n                }, _this1),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: email,\n                        onChange: handleChange(\"email\"),\n                        type: \"email\",\n                        className: \"form-control\",\n                        placeholder: \"Type your email\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Emma/Desktop/My project/BANK APP/frontend/components/auth/SignupComponent.js\",\n                        lineNumber: 39,\n                        columnNumber: 21\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"/Users/Emma/Desktop/My project/BANK APP/frontend/components/auth/SignupComponent.js\",\n                    lineNumber: 38,\n                    columnNumber: 17\n                }, _this1),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: password,\n                        onChange: handleChange(\"password\"),\n                        type: \"password\",\n                        className: \"form-control\",\n                        placeholder: \"Type your password\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Emma/Desktop/My project/BANK APP/frontend/components/auth/SignupComponent.js\",\n                        lineNumber: 49,\n                        columnNumber: 21\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"/Users/Emma/Desktop/My project/BANK APP/frontend/components/auth/SignupComponent.js\",\n                    lineNumber: 48,\n                    columnNumber: 17\n                }, _this1),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-primary\",\n                        children: \"Signup\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Emma/Desktop/My project/BANK APP/frontend/components/auth/SignupComponent.js\",\n                        lineNumber: 59,\n                        columnNumber: 21\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"/Users/Emma/Desktop/My project/BANK APP/frontend/components/auth/SignupComponent.js\",\n                    lineNumber: 58,\n                    columnNumber: 17\n                }, _this1)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/Emma/Desktop/My project/BANK APP/frontend/components/auth/SignupComponent.js\",\n            lineNumber: 27,\n            columnNumber: 13\n        }, _this1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(React.Fragment, {\n        children: signupForm()\n    }, void 0, false, {\n        fileName: \"/Users/Emma/Desktop/My project/BANK APP/frontend/components/auth/SignupComponent.js\",\n        lineNumber: 65,\n        columnNumber: 12\n    }, _this);\n};\n_s(SignupComponent, \"Jk1E/YkkJdkfpHbiyruhHDElykU=\");\n_c = SignupComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignupComponent);\nvar _c;\n$RefreshReg$(_c, \"SignupComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0I7Ozs7OzhCQUNsQzs7Ozs7MEJBQ0E7OEJBRU4sOERBQUNMLEtBQUc7OEJBQ0EsNEVBQUNNLFFBQU07d0JBQUNMLFNBQVMsRUFBQyxpQkFBaUI7a0NBQUMsUUFBTTs7Ozs7OEJBQVM7Ozs7OzBCQUNqRDs7Ozs7O2tCQUNILENBQ1Q7S0FDTDtJQUVELHFCQUFPLDhEQUFDTSxLQUFLLENBQUNDLFFBQVE7a0JBQUVYLFVBQVUsRUFBRTs7Ozs7YUFBa0IsQ0FBQztDQUMxRDtHQS9ES2xCLGVBQWU7QUFBZkEsS0FBQUEsZUFBZTtBQWlFckIsK0RBQWVBLGVBQWUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2F1dGgvU2lnbnVwQ29tcG9uZW50LmpzPzdjMWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFNpZ251cENvbXBvbmVudCA9ICgpID0+IHtcbiAgICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xuICAgICAgICBuYW1lOiAnUnlhbicsXG4gICAgICAgIGVtYWlsOiAncnlhbkBnbWFpbC5jb20nLFxuICAgICAgICBwYXNzd29yZDogJ3JycnJycicsXG4gICAgICAgIGVycm9yOiAnJyxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6ICcnLFxuICAgICAgICBzaG93Rm9ybTogdHJ1ZVxuICAgIH0pO1xuXG4gICAgY29uc3QgeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIGVycm9yLCBsb2FkaW5nLCBtZXNzYWdlLCBzaG93Rm9ybSB9ID0gdmFsdWVzO1xuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc29sZS50YWJsZSh7IG5hbWUsIGVtYWlsLCBwYXNzd29yZCwgZXJyb3IsIGxvYWRpbmcsIG1lc3NhZ2UsIHNob3dGb3JtIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBuYW1lID0+IGUgPT4ge1xuICAgICAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGVycm9yOiBmYWxzZSwgW25hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2lnbnVwRm9ybSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgnbmFtZScpfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIG5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgnZW1haWwnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgncGFzc3dvcmQnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5TaWdudXA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIDxSZWFjdC5GcmFnbWVudD57c2lnbnVwRm9ybSgpfTwvUmVhY3QuRnJhZ21lbnQ+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwQ29tcG9uZW50O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiU2lnbnVwQ29tcG9uZW50IiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJlcnJvciIsImxvYWRpbmciLCJtZXNzYWdlIiwic2hvd0Zvcm0iLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwidGFibGUiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNpZ251cEZvcm0iLCJmb3JtIiwib25TdWJtaXQiLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsIm9uQ2hhbmdlIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwiUmVhY3QiLCJGcmFnbWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/auth/SignupComponent.js\n");

/***/ }),

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_auth_SignupComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/auth/SignupComponent */ \"./components/auth/SignupComponent.js\");\nvar _this = undefined;\n\n\n\n\nvar Signup = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Signup page\"\n            }, void 0, false, {\n                fileName: \"/Users/Emma/Desktop/My project/BANK APP/frontend/pages/signup.js\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    children: \"Home\"\n                }, void 0, false, {\n                    fileName: \"/Users/Emma/Desktop/My project/BANK APP/frontend/pages/signup.js\",\n                    lineNumber: 11,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/Emma/Desktop/My project/BANK APP/frontend/pages/signup.js\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Emma/Desktop/My project/BANK APP/frontend/pages/signup.js\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, _this);\n};\n_c = Signup;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Signup);\nvar _c;\n$RefreshReg$(_c, \"Signup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaWdudXAuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUEwQztBQUNiO0FBQ29DO0FBR2pFLElBQU1HLE1BQU0sR0FBRyxXQUFNO0lBQ2pCLHFCQUNJLDhEQUFDSCwwREFBTTs7MEJBQ0gsOERBQUNJLElBQUU7MEJBQUMsYUFBVzs7Ozs7cUJBQUs7MEJBQ3BCLDhEQUFDSCxrREFBSTtnQkFBQ0ksSUFBSSxFQUFDLEdBQUc7MEJBQ1YsNEVBQUNDLEdBQUM7OEJBQUMsTUFBSTs7Ozs7eUJBQUk7Ozs7O3FCQUNSOzs7Ozs7YUFDRixDQUNYO0NBQ0w7QUFUS0gsS0FBQUEsTUFBTTtBQVdaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzP2NhOGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFNpZ251cENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL2F1dGgvU2lnbnVwQ29tcG9uZW50JztcblxuXG5jb25zdCBTaWdudXAgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgIDxoMj5TaWdudXAgcGFnZTwvaDI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgIDxhPkhvbWU8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWdudXA7XG4iXSwibmFtZXMiOlsiTGF5b3V0IiwiTGluayIsIlNpZ251cENvbXBvbmVudCIsIlNpZ251cCIsImgyIiwiaHJlZiIsImEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/signup.js\n");

/***/ })

});