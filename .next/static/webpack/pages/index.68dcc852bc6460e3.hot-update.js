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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_spring_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-spring/web */ \"./node_modules/@react-spring/web/dist/react-spring-web.esm.js\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/Home.module.scss */ \"./src/styles/Home.module.scss\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst X_LINES = 40;\nconst PAGE_COUNT = 5;\nconst INITIAL_WIDTH = 20;\nfunction Home() {\n    _s();\n    const containerRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);\n    const barContainerRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);\n    const duration = 5;\n    const [time, setTime] = react__WEBPACK_IMPORTED_MODULE_1__.useState(0);\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{\n        let int = .05;\n        const intervalId = setInterval(()=>{\n            setTime((prevTime)=>prevTime + int);\n            if (time / duration > 0.7) {\n                textApi.start({\n                    y: \"0\"\n                });\n            } else {\n                textApi.start({\n                    y: \"100%\"\n                });\n            }\n            if (time >= duration) {\n                int = 0.02;\n            }\n        }, int);\n    }, []);\n    console.log(time);\n    const [textStyles, textApi] = (0,_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.useSpring)(()=>({\n            y: \"100%\"\n        }));\n    // const { scrollYProgress } = useScroll({\n    //   onChange: ({ value: { scrollYProgress } }) => {\n    //     console.log(scrollYProgress)\n    //   },\n    //   default: {\n    //     immediate: false,\n    //   },\n    // })\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: containerRef,\n        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().body),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().animated__layers),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.animated.div, {\n                        ref: barContainerRef,\n                        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().bar__container),\n                        children: Array.from({\n                            length: X_LINES\n                        }).map((_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.animated.div, {\n                                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().bar),\n                                style: {\n                                    width: new _react_spring_web__WEBPACK_IMPORTED_MODULE_2__.SpringValue(time / duration).to((scrollP)=>{\n                                        const percentilePosition = (i + 1) / X_LINES;\n                                        return INITIAL_WIDTH / 4 + 40 * Math.cos((percentilePosition - scrollP) * Math.PI / 1.5) ** 32;\n                                    })\n                                }\n                            }, i, false, {\n                                fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.animated.div, {\n                        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().bar__container__inverted),\n                        children: Array.from({\n                            length: X_LINES\n                        }).map((_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.animated.div, {\n                                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().bar),\n                                style: {\n                                    width: new _react_spring_web__WEBPACK_IMPORTED_MODULE_2__.SpringValue(time / duration).to((scrollP)=>{\n                                        const percentilePosition = 1 - (i + 1) / X_LINES;\n                                        return INITIAL_WIDTH / 4 + 40 * Math.cos((percentilePosition - scrollP) * Math.PI / 1.5) ** 32;\n                                    })\n                                }\n                            }, i, false, {\n                                fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.animated.div, {\n                        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().dot),\n                        style: {\n                            clipPath: new _react_spring_web__WEBPACK_IMPORTED_MODULE_2__.SpringValue(time / duration).to((val)=>\"circle(\".concat(val * 100, \"%)\"))\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().card),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.animated.span, {\n                                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().logo),\n                                children: [\n                                    \"DakotahFerrari Studios\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n                                        lineNumber: 101,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        style: {\n                                            fontSize: \"20px\",\n                                            padding: \"20px\"\n                                        },\n                                        children: \"Coming Soon\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n                                        lineNumber: 102,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n                                lineNumber: 99,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n                            lineNumber: 98,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            new Array(PAGE_COUNT).fill(null).map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().full__page)\n                }, index, false, {\n                    fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n                    lineNumber: 110,\n                    columnNumber: 9\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n        lineNumber: 59,\n        columnNumber: 7\n    }, this);\n}\n_s(Home, \"PjS1WSdXaR8l9vhkVhntOu2NiUY=\", false, function() {\n    return [\n        _react_spring_web__WEBPACK_IMPORTED_MODULE_2__.useSpring\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUFBLE1BQU8sVUFBb0IsT0FBVkEsTUFBTSxLQUFJO3dCQUN6RTtrQ0FDQSw0RUFBQ0M7NEJBQUd2QixXQUFXekIsc0VBQVc7c0NBQ3hCLDRFQUFDSCw0REFBYTtnQ0FBQzRCLFdBQVd6QixzRUFBVzs7b0NBQUU7a0RBRXJDLDhEQUFDb0Q7Ozs7O2tEQUNELDhEQUFDRjt3Q0FBS2QsT0FBTzs0Q0FBQ2lCLFVBQVU7NENBQVFDLFNBQVM7d0NBQU07a0RBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPekQsSUFBSXpCLE1BQU0zQixZQUFZcUQsSUFBSSxDQUFDLElBQUksRUFBRXZCLEdBQUcsQ0FBQyxDQUFDQyxHQUFHdUIsc0JBQ3hDLDhEQUFDakM7b0JBQUlFLFdBQVd6Qiw0RUFBaUI7bUJBQU93RDs7Ozs7Ozs7Ozs7QUFJaEQsQ0FBQztHQW5HdUJwRDs7UUE0QlFOLHdEQUFTQTs7O0tBNUJqQk0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU2Nyb2xsLCBhbmltYXRlZCwgdXNlU3ByaW5nLCBTcHJpbmdWYWx1ZSB9IGZyb20gJ0ByZWFjdC1zcHJpbmcvd2ViJ1xuXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvSG9tZS5tb2R1bGUuc2NzcydcblxuY29uc3QgWF9MSU5FUyA9IDQwXG5cbmNvbnN0IFBBR0VfQ09VTlQgPSA1XG5cbmNvbnN0IElOSVRJQUxfV0lEVEggPSAyMFxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgY29uc3QgY29udGFpbmVyUmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsISlcbiAgY29uc3QgYmFyQ29udGFpbmVyUmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsISlcblxuICBjb25zdCBkdXJhdGlvbiA9IDVcbiAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gUmVhY3QudXNlU3RhdGUoMCk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgaW50ID0gLjA1XG5cbiAgICBjb25zdCBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2V0VGltZSgocHJldlRpbWUpID0+IHByZXZUaW1lICsgaW50KTtcbiAgICAgIGlmICh0aW1lL2R1cmF0aW9uID4gMC43KSB7XG4gICAgICAgIHRleHRBcGkuc3RhcnQoeyB5OiAnMCcgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRleHRBcGkuc3RhcnQoeyB5OiAnMTAwJScgfSlcbiAgICAgIH1cbiAgICAgIGlmICh0aW1lID49IGR1cmF0aW9uKSB7XG4gICAgICAgIGludCA9IDAuMDJcbiAgICAgIH1cbiAgICB9LCBpbnQpO1xuICB9LCBbXSk7XG4gIGNvbnNvbGUubG9nKHRpbWUpXG5cblxuXG5cbiAgY29uc3QgW3RleHRTdHlsZXMsIHRleHRBcGldID0gdXNlU3ByaW5nKCgpID0+ICh7XG4gICAgeTogJzEwMCUnLFxuICB9KSlcblxuICAvLyBjb25zdCB7IHNjcm9sbFlQcm9ncmVzcyB9ID0gdXNlU2Nyb2xsKHtcbiAgLy8gICBvbkNoYW5nZTogKHsgdmFsdWU6IHsgc2Nyb2xsWVByb2dyZXNzIH0gfSkgPT4ge1xuICAvLyAgICAgY29uc29sZS5sb2coc2Nyb2xsWVByb2dyZXNzKVxuICAgICAgXG4gIC8vICAgfSxcbiAgLy8gICBkZWZhdWx0OiB7XG4gIC8vICAgICBpbW1lZGlhdGU6IGZhbHNlLFxuICAvLyAgIH0sXG4gIC8vIH0pXG5cblxuICByZXR1cm4gKFxuICAgICAgPGRpdiByZWY9e2NvbnRhaW5lclJlZn0gY2xhc3NOYW1lPXtzdHlsZXMuYm9keX0+XG4gICAgICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYW5pbWF0ZWRfX2xheWVyc30+XG4gICAgICAgIDxhbmltYXRlZC5kaXYgcmVmPXtiYXJDb250YWluZXJSZWZ9IGNsYXNzTmFtZT17c3R5bGVzLmJhcl9fY29udGFpbmVyfT5cbiAgICAgICAgICB7QXJyYXkuZnJvbSh7IGxlbmd0aDogWF9MSU5FUyB9KS5tYXAoKF8sIGkpID0+IChcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGFuaW1hdGVkLmRpdlxuICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJhcn1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICB3aWR0aDogbmV3IFNwcmluZ1ZhbHVlKHRpbWUvZHVyYXRpb24pLnRvKHNjcm9sbFAgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgcGVyY2VudGlsZVBvc2l0aW9uID0gKGkgKyAxKSAvIFhfTElORVNcblxuICAgICAgICAgICAgICAgICAgcmV0dXJuIElOSVRJQUxfV0lEVEggLyA0ICsgNDAgKiBNYXRoLmNvcygoKHBlcmNlbnRpbGVQb3NpdGlvbiAtIHNjcm9sbFApICogTWF0aC5QSSkgLyAxLjUpICoqIDMyXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2FuaW1hdGVkLmRpdj5cbiAgICAgICAgPGFuaW1hdGVkLmRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYXJfX2NvbnRhaW5lcl9faW52ZXJ0ZWR9PlxuICAgICAgICAgIHtBcnJheS5mcm9tKHsgbGVuZ3RoOiBYX0xJTkVTIH0pLm1hcCgoXywgaSkgPT4gKFxuICAgICAgICAgICAgPGFuaW1hdGVkLmRpdlxuICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJhcn1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICB3aWR0aDogbmV3IFNwcmluZ1ZhbHVlKHRpbWUvZHVyYXRpb24pLnRvKHNjcm9sbFAgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgcGVyY2VudGlsZVBvc2l0aW9uID0gMSAtIChpICsgMSkgLyBYX0xJTkVTXG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiBJTklUSUFMX1dJRFRIIC8gNCArIDQwICogTWF0aC5jb3MoKChwZXJjZW50aWxlUG9zaXRpb24gLSBzY3JvbGxQKSAqIE1hdGguUEkpIC8gMS41KSAqKiAzMlxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9hbmltYXRlZC5kaXY+XG4gICAgICAgIDxhbmltYXRlZC5kaXZcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kb3R9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGNsaXBQYXRoOiBuZXcgU3ByaW5nVmFsdWUodGltZS9kdXJhdGlvbikudG8odmFsID0+IGBjaXJjbGUoJHt2YWwgKiAxMDB9JSlgKSxcbiAgICAgICAgICB9fT5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XG4gICAgICAgICAgICA8YW5pbWF0ZWQuc3BhbiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5cbiAgICAgICAgICAgICAgRGFrb3RhaEZlcnJhcmkgU3R1ZGlvc1xuICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2ZvbnRTaXplOiAnMjBweCcsIHBhZGRpbmc6ICcyMHB4J319PkNvbWluZyBTb29uPC9zcGFuPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvYW5pbWF0ZWQuc3Bhbj5cbiAgICAgICAgICAgIFxuICAgICAgICAgIDwvaDI+XG4gICAgICAgIDwvYW5pbWF0ZWQuZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7bmV3IEFycmF5KFBBR0VfQ09VTlQpLmZpbGwobnVsbCkubWFwKChfLCBpbmRleCkgPT4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZ1bGxfX3BhZ2V9IGtleT17aW5kZXh9IC8+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiYW5pbWF0ZWQiLCJ1c2VTcHJpbmciLCJTcHJpbmdWYWx1ZSIsInN0eWxlcyIsIlhfTElORVMiLCJQQUdFX0NPVU5UIiwiSU5JVElBTF9XSURUSCIsIkhvbWUiLCJjb250YWluZXJSZWYiLCJ1c2VSZWYiLCJiYXJDb250YWluZXJSZWYiLCJkdXJhdGlvbiIsInRpbWUiLCJzZXRUaW1lIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJpbnQiLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJwcmV2VGltZSIsInRleHRBcGkiLCJzdGFydCIsInkiLCJjb25zb2xlIiwibG9nIiwidGV4dFN0eWxlcyIsImRpdiIsInJlZiIsImNsYXNzTmFtZSIsImJvZHkiLCJhbmltYXRlZF9fbGF5ZXJzIiwiYmFyX19jb250YWluZXIiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJtYXAiLCJfIiwiaSIsImJhciIsInN0eWxlIiwid2lkdGgiLCJ0byIsInNjcm9sbFAiLCJwZXJjZW50aWxlUG9zaXRpb24iLCJNYXRoIiwiY29zIiwiUEkiLCJiYXJfX2NvbnRhaW5lcl9faW52ZXJ0ZWQiLCJkb3QiLCJjbGlwUGF0aCIsInZhbCIsImgyIiwiY2FyZCIsInNwYW4iLCJsb2dvIiwiYnIiLCJmb250U2l6ZSIsInBhZGRpbmciLCJmaWxsIiwiaW5kZXgiLCJmdWxsX19wYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});