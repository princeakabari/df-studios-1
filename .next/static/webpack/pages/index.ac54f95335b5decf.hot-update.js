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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_spring_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-spring/web */ \"./node_modules/@react-spring/web/dist/react-spring-web.esm.js\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/Home.module.scss */ \"./src/styles/Home.module.scss\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst X_LINES = 40;\nconst PAGE_COUNT = 5;\nconst INITIAL_WIDTH = 20;\nfunction Home() {\n    _s();\n    const containerRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);\n    const barContainerRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);\n    const duration = 5;\n    const [time, setTime] = react__WEBPACK_IMPORTED_MODULE_1__.useState(0);\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{\n        let int = .05;\n        const intervalId = setInterval(()=>{\n            setTime((prevTime)=>prevTime + int);\n            if (time / duration > 0.7) {\n                textApi.start({\n                    y: \"0\"\n                });\n            } else {\n                textApi.start({\n                    y: \"100%\"\n                });\n            }\n            if (time >= duration) {\n                int = 0.02;\n            }\n        }, int);\n    }, []);\n    console.log(time);\n    const [textStyles, textApi] = (0,_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.useSpring)(()=>({\n            y: \"100%\"\n        }));\n    // const { scrollYProgress } = useScroll({\n    //   onChange: ({ value: { scrollYProgress } }) => {\n    //     console.log(scrollYProgress)\n    //   },\n    //   default: {\n    //     immediate: false,\n    //   },\n    // })\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: containerRef,\n        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().body),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().coming_soon),\n                children: \"Coming Soon\"\n            }, void 0, false, {\n                fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().animated__layers),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.animated.div, {\n                        ref: barContainerRef,\n                        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().bar__container),\n                        children: Array.from({\n                            length: X_LINES\n                        }).map((_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.animated.div, {\n                                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().bar),\n                                style: {\n                                    width: new _react_spring_web__WEBPACK_IMPORTED_MODULE_2__.SpringValue(time / duration).to((scrollP)=>{\n                                        const percentilePosition = (i + 1) / X_LINES;\n                                        return INITIAL_WIDTH / 4 + 40 * Math.cos((percentilePosition - scrollP) * Math.PI / 1.5) ** 32;\n                                    })\n                                }\n                            }, i, false, {\n                                fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.animated.div, {\n                        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().bar__container__inverted),\n                        children: Array.from({\n                            length: X_LINES\n                        }).map((_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.animated.div, {\n                                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().bar),\n                                style: {\n                                    width: new _react_spring_web__WEBPACK_IMPORTED_MODULE_2__.SpringValue(time / duration).to((scrollP)=>{\n                                        const percentilePosition = 1 - (i + 1) / X_LINES;\n                                        return INITIAL_WIDTH / 4 + 40 * Math.cos((percentilePosition - scrollP) * Math.PI / 1.5) ** 32;\n                                    })\n                                }\n                            }, i, false, {\n                                fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.animated.div, {\n                        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().dot),\n                        style: {\n                            clipPath: new _react_spring_web__WEBPACK_IMPORTED_MODULE_2__.SpringValue(time / duration).to((val)=>\"circle(\".concat(val * 100, \"%)\"))\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.animated.span, {\n                            className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().logo),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().name),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        style: {\n                                            padding: \"10px\"\n                                        },\n                                        children: \"DakotahFerrari Studios\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n                                        lineNumber: 101,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n                                    lineNumber: 100,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n                                    lineNumber: 103,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n                            lineNumber: 99,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            new Array(PAGE_COUNT).fill(null).map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().full__page)\n                }, index, false, {\n                    fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n                    lineNumber: 112,\n                    columnNumber: 9\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n        lineNumber: 59,\n        columnNumber: 7\n    }, this);\n}\n_s(Home, \"PjS1WSdXaR8l9vhkVhntOu2NiUY=\", false, function() {\n    return [\n        _react_spring_web__WEBPACK_IMPORTED_MODULE_2__.useSpring\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLElBQUlqRCwwREFBV0EsQ0FBQ1UsT0FBS0QsVUFBVWdDLEVBQUUsQ0FBQ1MsQ0FBQUEsTUFBTyxVQUFvQixPQUFWQSxNQUFNLEtBQUk7d0JBQ3pFO2tDQUVFLDRFQUFDcEQsNERBQWE7NEJBQUM0QixXQUFXekIsc0VBQVc7OzhDQUNuQyw4REFBQ21EO29DQUFHMUIsV0FBV3pCLHNFQUFXOzhDQUN4Qiw0RUFBQzJCO3dDQUFLVyxPQUFPOzRDQUFDZSxTQUFTO3dDQUFNO2tEQUFHOzs7Ozs7Ozs7Ozs4Q0FFbEMsOERBQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUVIsSUFBSXZCLE1BQU03QixZQUFZcUQsSUFBSSxDQUFDLElBQUksRUFBRXJCLEdBQUcsQ0FBQyxDQUFDQyxHQUFHcUIsc0JBQ3hDLDhEQUFDakM7b0JBQUlFLFdBQVd6Qiw0RUFBaUI7bUJBQU93RDs7Ozs7Ozs7Ozs7QUFLaEQsQ0FBQztHQXRHdUJwRDs7UUE0QlFOLHdEQUFTQTs7O0tBNUJqQk0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU2Nyb2xsLCBhbmltYXRlZCwgdXNlU3ByaW5nLCBTcHJpbmdWYWx1ZSB9IGZyb20gJ0ByZWFjdC1zcHJpbmcvd2ViJ1xuXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvSG9tZS5tb2R1bGUuc2NzcydcblxuY29uc3QgWF9MSU5FUyA9IDQwXG5cbmNvbnN0IFBBR0VfQ09VTlQgPSA1XG5cbmNvbnN0IElOSVRJQUxfV0lEVEggPSAyMFxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgY29uc3QgY29udGFpbmVyUmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsISlcbiAgY29uc3QgYmFyQ29udGFpbmVyUmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsISlcblxuICBjb25zdCBkdXJhdGlvbiA9IDVcbiAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gUmVhY3QudXNlU3RhdGUoMCk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgaW50ID0gLjA1XG5cbiAgICBjb25zdCBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2V0VGltZSgocHJldlRpbWUpID0+IHByZXZUaW1lICsgaW50KTtcbiAgICAgIGlmICh0aW1lL2R1cmF0aW9uID4gMC43KSB7XG4gICAgICAgIHRleHRBcGkuc3RhcnQoeyB5OiAnMCcgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRleHRBcGkuc3RhcnQoeyB5OiAnMTAwJScgfSlcbiAgICAgIH1cbiAgICAgIGlmICh0aW1lID49IGR1cmF0aW9uKSB7XG4gICAgICAgIGludCA9IDAuMDJcbiAgICAgIH1cbiAgICB9LCBpbnQpO1xuICB9LCBbXSk7XG4gIGNvbnNvbGUubG9nKHRpbWUpXG5cblxuXG5cbiAgY29uc3QgW3RleHRTdHlsZXMsIHRleHRBcGldID0gdXNlU3ByaW5nKCgpID0+ICh7XG4gICAgeTogJzEwMCUnLFxuICB9KSlcblxuICAvLyBjb25zdCB7IHNjcm9sbFlQcm9ncmVzcyB9ID0gdXNlU2Nyb2xsKHtcbiAgLy8gICBvbkNoYW5nZTogKHsgdmFsdWU6IHsgc2Nyb2xsWVByb2dyZXNzIH0gfSkgPT4ge1xuICAvLyAgICAgY29uc29sZS5sb2coc2Nyb2xsWVByb2dyZXNzKVxuICAgICAgXG4gIC8vICAgfSxcbiAgLy8gICBkZWZhdWx0OiB7XG4gIC8vICAgICBpbW1lZGlhdGU6IGZhbHNlLFxuICAvLyAgIH0sXG4gIC8vIH0pXG5cblxuICByZXR1cm4gKFxuICAgICAgPGRpdiByZWY9e2NvbnRhaW5lclJlZn0gY2xhc3NOYW1lPXtzdHlsZXMuYm9keX0+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb21pbmdfc29vbn0+Q29taW5nIFNvb248L3NwYW4+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFuaW1hdGVkX19sYXllcnN9PlxuICAgICAgICA8YW5pbWF0ZWQuZGl2IHJlZj17YmFyQ29udGFpbmVyUmVmfSBjbGFzc05hbWU9e3N0eWxlcy5iYXJfX2NvbnRhaW5lcn0+XG4gICAgICAgICAge0FycmF5LmZyb20oeyBsZW5ndGg6IFhfTElORVMgfSkubWFwKChfLCBpKSA9PiAoXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxhbmltYXRlZC5kaXZcbiAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5iYXJ9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgd2lkdGg6IG5ldyBTcHJpbmdWYWx1ZSh0aW1lL2R1cmF0aW9uKS50byhzY3JvbGxQID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHBlcmNlbnRpbGVQb3NpdGlvbiA9IChpICsgMSkgLyBYX0xJTkVTXG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiBJTklUSUFMX1dJRFRIIC8gNCArIDQwICogTWF0aC5jb3MoKChwZXJjZW50aWxlUG9zaXRpb24gLSBzY3JvbGxQKSAqIE1hdGguUEkpIC8gMS41KSAqKiAzMlxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9hbmltYXRlZC5kaXY+XG4gICAgICAgIDxhbmltYXRlZC5kaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFyX19jb250YWluZXJfX2ludmVydGVkfT5cbiAgICAgICAgICB7QXJyYXkuZnJvbSh7IGxlbmd0aDogWF9MSU5FUyB9KS5tYXAoKF8sIGkpID0+IChcbiAgICAgICAgICAgIDxhbmltYXRlZC5kaXZcbiAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5iYXJ9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgd2lkdGg6IG5ldyBTcHJpbmdWYWx1ZSh0aW1lL2R1cmF0aW9uKS50byhzY3JvbGxQID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHBlcmNlbnRpbGVQb3NpdGlvbiA9IDEgLSAoaSArIDEpIC8gWF9MSU5FU1xuXG4gICAgICAgICAgICAgICAgICByZXR1cm4gSU5JVElBTF9XSURUSCAvIDQgKyA0MCAqIE1hdGguY29zKCgocGVyY2VudGlsZVBvc2l0aW9uIC0gc2Nyb2xsUCkgKiBNYXRoLlBJKSAvIDEuNSkgKiogMzJcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvYW5pbWF0ZWQuZGl2PlxuICAgICAgICA8YW5pbWF0ZWQuZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZG90fVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBjbGlwUGF0aDogbmV3IFNwcmluZ1ZhbHVlKHRpbWUvZHVyYXRpb24pLnRvKHZhbCA9PiBgY2lyY2xlKCR7dmFsICogMTAwfSUpYCksXG4gICAgICAgICAgfX0+XG4gICAgICAgICAgXG4gICAgICAgICAgICA8YW5pbWF0ZWQuc3BhbiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLm5hbWV9PlxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7cGFkZGluZzogJzEwcHgnfX0+RGFrb3RhaEZlcnJhcmkgU3R1ZGlvczwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9hbmltYXRlZC5zcGFuPlxuICAgICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgIDwvYW5pbWF0ZWQuZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7bmV3IEFycmF5KFBBR0VfQ09VTlQpLmZpbGwobnVsbCkubWFwKChfLCBpbmRleCkgPT4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZ1bGxfX3BhZ2V9IGtleT17aW5kZXh9IC8+XG4gICAgICApKX1cbiAgICAgIFxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJhbmltYXRlZCIsInVzZVNwcmluZyIsIlNwcmluZ1ZhbHVlIiwic3R5bGVzIiwiWF9MSU5FUyIsIlBBR0VfQ09VTlQiLCJJTklUSUFMX1dJRFRIIiwiSG9tZSIsImNvbnRhaW5lclJlZiIsInVzZVJlZiIsImJhckNvbnRhaW5lclJlZiIsImR1cmF0aW9uIiwidGltZSIsInNldFRpbWUiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImludCIsImludGVydmFsSWQiLCJzZXRJbnRlcnZhbCIsInByZXZUaW1lIiwidGV4dEFwaSIsInN0YXJ0IiwieSIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0U3R5bGVzIiwiZGl2IiwicmVmIiwiY2xhc3NOYW1lIiwiYm9keSIsInNwYW4iLCJjb21pbmdfc29vbiIsImFuaW1hdGVkX19sYXllcnMiLCJiYXJfX2NvbnRhaW5lciIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsIm1hcCIsIl8iLCJpIiwiYmFyIiwic3R5bGUiLCJ3aWR0aCIsInRvIiwic2Nyb2xsUCIsInBlcmNlbnRpbGVQb3NpdGlvbiIsIk1hdGgiLCJjb3MiLCJQSSIsImJhcl9fY29udGFpbmVyX19pbnZlcnRlZCIsImRvdCIsImNsaXBQYXRoIiwidmFsIiwibG9nbyIsImgyIiwibmFtZSIsInBhZGRpbmciLCJiciIsImZpbGwiLCJpbmRleCIsImZ1bGxfX3BhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});