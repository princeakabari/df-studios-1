"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_spring_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-spring/web */ \"./node_modules/@react-spring/web/dist/react-spring-web.esm.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/Home.module.scss */ \"./src/styles/Home.module.scss\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst X_LINES = 40;\nconst PAGE_COUNT = 5;\nconst INITIAL_WIDTH = 20;\nfunction Home() {\n    _s();\n    const containerRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);\n    const barContainerRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);\n    const [textStyles, textApi] = (0,_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.useSpring)(()=>({\n            y: \"100%\"\n        }));\n    const { scrollYProgress  } = (0,_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.useScroll)({\n        container: containerRef,\n        onChange: (param)=>{\n            let { value: { scrollYProgress  }  } = param;\n            console.log(scrollYProgress);\n            if (scrollYProgress > 0.7) {\n                textApi.start({\n                    y: \"0\"\n                });\n            } else {\n                textApi.start({\n                    y: \"100%\"\n                });\n            }\n        },\n        default: {\n            immediate: true\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: containerRef,\n        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().body),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().animated__layers),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.animated.div, {\n                        ref: barContainerRef,\n                        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().bar__container),\n                        children: Array.from({\n                            length: X_LINES\n                        }).map((_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.animated.div, {\n                                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().bar),\n                                style: {\n                                    width: scrollYProgress.to((scrollP)=>{\n                                        const percentilePosition = (i + 1) / X_LINES;\n                                        return INITIAL_WIDTH / 4 + 40 * Math.cos((percentilePosition - scrollP) * Math.PI / 1.5) ** 32;\n                                    })\n                                }\n                            }, i, false, {\n                                fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.animated.div, {\n                        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().bar__container__inverted),\n                        children: Array.from({\n                            length: X_LINES\n                        }).map((_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.animated.div, {\n                                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().bar),\n                                style: {\n                                    width: scrollYProgress.to((scrollP)=>{\n                                        const percentilePosition = 1 - (i + 1) / X_LINES;\n                                        return INITIAL_WIDTH / 4 + 40 * Math.cos((percentilePosition - scrollP) * Math.PI / 1.5) ** 32;\n                                    })\n                                }\n                            }, i, false, {\n                                fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.animated.div, {\n                        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().dot),\n                        style: {\n                            clipPath: scrollYProgress.to((val)=>\"circle(\".concat(val * 100, \"%)\"))\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().card),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.animated.span, {\n                                    style: textStyles,\n                                    className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().logo),\n                                    children: \"DakotahFerrari Studios\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 13\n                                }, this),\n                                \"Coming Soon\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            new Array(PAGE_COUNT).fill(null).map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().full__page)\n                }, index, false, {\n                    fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n                    lineNumber: 94,\n                    columnNumber: 9\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n        lineNumber: 41,\n        columnNumber: 7\n    }, this);\n}\n_s(Home, \"P4R6gkCHmNzLqDlOm0FB19KK+mE=\", false, function() {\n    return [\n        _react_spring_web__WEBPACK_IMPORTED_MODULE_2__.useSpring,\n        _react_spring_web__WEBPACK_IMPORTED_MODULE_2__.useScroll\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQzs0QkFBRzlCLFdBQVd0QixzRUFBVzs7OENBQ3hCLDhEQUFDSCw0REFBYTtvQ0FBQzJDLE9BQU9oQztvQ0FBWWMsV0FBV3RCLHNFQUFXOzhDQUFFOzs7Ozs7Z0NBRTFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLckIsSUFBSWlDLE1BQU0vQixZQUFZc0QsSUFBSSxDQUFDLElBQUksRUFBRXBCLEdBQUcsQ0FBQyxDQUFDQyxHQUFHb0Isc0JBQ3hDLDhEQUFDckM7b0JBQUlFLFdBQVd0Qiw0RUFBaUI7bUJBQU95RDs7Ozs7Ozs7Ozs7QUFJaEQsQ0FBQztHQW5GdUJyRDs7UUFLUU4sd0RBQVNBO1FBSVhGLHdEQUFTQTs7O0tBVGZRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVNjcm9sbCwgYW5pbWF0ZWQsIHVzZVNwcmluZyB9IGZyb20gJ0ByZWFjdC1zcHJpbmcvd2ViJ1xuXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvSG9tZS5tb2R1bGUuc2NzcydcblxuY29uc3QgWF9MSU5FUyA9IDQwXG5cbmNvbnN0IFBBR0VfQ09VTlQgPSA1XG5cbmNvbnN0IElOSVRJQUxfV0lEVEggPSAyMFxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgY29uc3QgY29udGFpbmVyUmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsISlcbiAgY29uc3QgYmFyQ29udGFpbmVyUmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsISlcblxuICBjb25zdCBbdGV4dFN0eWxlcywgdGV4dEFwaV0gPSB1c2VTcHJpbmcoKCkgPT4gKHtcbiAgICB5OiAnMTAwJScsXG4gIH0pKVxuXG4gIGNvbnN0IHsgc2Nyb2xsWVByb2dyZXNzIH0gPSB1c2VTY3JvbGwoe1xuICAgIGNvbnRhaW5lcjogY29udGFpbmVyUmVmLFxuICAgIG9uQ2hhbmdlOiAoeyB2YWx1ZTogeyBzY3JvbGxZUHJvZ3Jlc3MgfSB9KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhzY3JvbGxZUHJvZ3Jlc3MpXG4gICAgICBpZiAoc2Nyb2xsWVByb2dyZXNzID4gMC43KSB7XG4gICAgICAgIHRleHRBcGkuc3RhcnQoeyB5OiAnMCcgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRleHRBcGkuc3RhcnQoeyB5OiAnMTAwJScgfSlcbiAgICAgIH1cbiAgICB9LFxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIGltbWVkaWF0ZTogdHJ1ZSxcbiAgICB9LFxuICB9KVxuXG5cbiAgcmV0dXJuIChcbiAgICAgIDxkaXYgcmVmPXtjb250YWluZXJSZWZ9IGNsYXNzTmFtZT17c3R5bGVzLmJvZHl9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgXG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFuaW1hdGVkX19sYXllcnN9PlxuICAgICAgICA8YW5pbWF0ZWQuZGl2IHJlZj17YmFyQ29udGFpbmVyUmVmfSBjbGFzc05hbWU9e3N0eWxlcy5iYXJfX2NvbnRhaW5lcn0+XG4gICAgICAgICAge0FycmF5LmZyb20oeyBsZW5ndGg6IFhfTElORVMgfSkubWFwKChfLCBpKSA9PiAoXG4gICAgICAgICAgICA8YW5pbWF0ZWQuZGl2XG4gICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYmFyfVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHdpZHRoOiBzY3JvbGxZUHJvZ3Jlc3MudG8oc2Nyb2xsUCA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBwZXJjZW50aWxlUG9zaXRpb24gPSAoaSArIDEpIC8gWF9MSU5FU1xuXG4gICAgICAgICAgICAgICAgICByZXR1cm4gSU5JVElBTF9XSURUSCAvIDQgKyA0MCAqIE1hdGguY29zKCgocGVyY2VudGlsZVBvc2l0aW9uIC0gc2Nyb2xsUCkgKiBNYXRoLlBJKSAvIDEuNSkgKiogMzJcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvYW5pbWF0ZWQuZGl2PlxuICAgICAgICA8YW5pbWF0ZWQuZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhcl9fY29udGFpbmVyX19pbnZlcnRlZH0+XG4gICAgICAgICAge0FycmF5LmZyb20oeyBsZW5ndGg6IFhfTElORVMgfSkubWFwKChfLCBpKSA9PiAoXG4gICAgICAgICAgICA8YW5pbWF0ZWQuZGl2XG4gICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYmFyfVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHdpZHRoOiBzY3JvbGxZUHJvZ3Jlc3MudG8oc2Nyb2xsUCA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBwZXJjZW50aWxlUG9zaXRpb24gPSAxIC0gKGkgKyAxKSAvIFhfTElORVNcblxuICAgICAgICAgICAgICAgICAgcmV0dXJuIElOSVRJQUxfV0lEVEggLyA0ICsgNDAgKiBNYXRoLmNvcygoKHBlcmNlbnRpbGVQb3NpdGlvbiAtIHNjcm9sbFApICogTWF0aC5QSSkgLyAxLjUpICoqIDMyXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2FuaW1hdGVkLmRpdj5cbiAgICAgICAgPGFuaW1hdGVkLmRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRvdH1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgY2xpcFBhdGg6IHNjcm9sbFlQcm9ncmVzcy50byh2YWwgPT4gYGNpcmNsZSgke3ZhbCAqIDEwMH0lKWApLFxuICAgICAgICAgIH19PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cbiAgICAgICAgICAgIDxhbmltYXRlZC5zcGFuIHN0eWxlPXt0ZXh0U3R5bGVzfSBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5cbiAgICAgICAgICAgICAgRGFrb3RhaEZlcnJhcmkgU3R1ZGlvc1xuICAgICAgICAgICAgPC9hbmltYXRlZC5zcGFuPlxuICAgICAgICAgICAgQ29taW5nIFNvb25cbiAgICAgICAgICA8L2gxPlxuICAgICAgICA8L2FuaW1hdGVkLmRpdj5cbiAgICAgIDwvZGl2PlxuICAgICAge25ldyBBcnJheShQQUdFX0NPVU5UKS5maWxsKG51bGwpLm1hcCgoXywgaW5kZXgpID0+IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mdWxsX19wYWdlfSBrZXk9e2luZGV4fSAvPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVNjcm9sbCIsImFuaW1hdGVkIiwidXNlU3ByaW5nIiwiSGVhZCIsInN0eWxlcyIsIlhfTElORVMiLCJQQUdFX0NPVU5UIiwiSU5JVElBTF9XSURUSCIsIkhvbWUiLCJjb250YWluZXJSZWYiLCJ1c2VSZWYiLCJiYXJDb250YWluZXJSZWYiLCJ0ZXh0U3R5bGVzIiwidGV4dEFwaSIsInkiLCJzY3JvbGxZUHJvZ3Jlc3MiLCJjb250YWluZXIiLCJvbkNoYW5nZSIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsInN0YXJ0IiwiZGVmYXVsdCIsImltbWVkaWF0ZSIsImRpdiIsInJlZiIsImNsYXNzTmFtZSIsImJvZHkiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwiYW5pbWF0ZWRfX2xheWVycyIsImJhcl9fY29udGFpbmVyIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwibWFwIiwiXyIsImkiLCJiYXIiLCJzdHlsZSIsIndpZHRoIiwidG8iLCJzY3JvbGxQIiwicGVyY2VudGlsZVBvc2l0aW9uIiwiTWF0aCIsImNvcyIsIlBJIiwiYmFyX19jb250YWluZXJfX2ludmVydGVkIiwiZG90IiwiY2xpcFBhdGgiLCJ2YWwiLCJoMSIsImNhcmQiLCJzcGFuIiwibG9nbyIsImZpbGwiLCJpbmRleCIsImZ1bGxfX3BhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});