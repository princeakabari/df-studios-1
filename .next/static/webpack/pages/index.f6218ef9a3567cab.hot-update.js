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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_spring_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-spring/web */ \"./node_modules/@react-spring/web/dist/react-spring-web.esm.js\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/Home.module.scss */ \"./src/styles/Home.module.scss\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst X_LINES = 40;\nconst PAGE_COUNT = 5;\nconst INITIAL_WIDTH = 20;\nfunction Home() {\n    _s();\n    const containerRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);\n    const barContainerRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);\n    const duration = 3;\n    const [time, setTime] = react__WEBPACK_IMPORTED_MODULE_1__.useState(0);\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{\n        const intervalId = setInterval(()=>{\n            setTime((prevTime)=>prevTime + .000001);\n            if (time / duration > 0.7) {\n                textApi.start({\n                    y: \"0\"\n                });\n            } else {\n                textApi.start({\n                    y: \"100%\"\n                });\n            }\n            if (time >= duration) {\n                clearInterval(intervalId);\n            }\n        }, 1);\n    }, []);\n    console.log(time);\n    const [textStyles, textApi] = (0,_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.useSpring)(()=>({\n            y: \"100%\"\n        }));\n    // const { scrollYProgress } = useScroll({\n    //   onChange: ({ value: { scrollYProgress } }) => {\n    //     console.log(scrollYProgress)\n    //   },\n    //   default: {\n    //     immediate: false,\n    //   },\n    // })\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: containerRef,\n        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().body),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().animated__layers),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.animated.div, {\n                        ref: barContainerRef,\n                        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().bar__container),\n                        children: Array.from({\n                            length: X_LINES\n                        }).map((_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.animated.div, {\n                                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().bar),\n                                style: {\n                                    width: new _react_spring_web__WEBPACK_IMPORTED_MODULE_2__.SpringValue(time / duration).to((scrollP)=>{\n                                        const percentilePosition = (i + 1) / X_LINES;\n                                        return INITIAL_WIDTH / 4 + 40 * Math.cos((percentilePosition - scrollP) * Math.PI / 1.5) ** 32;\n                                    })\n                                }\n                            }, i, false, {\n                                fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.animated.div, {\n                        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().bar__container__inverted),\n                        children: Array.from({\n                            length: X_LINES\n                        }).map((_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.animated.div, {\n                                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().bar),\n                                style: {\n                                    width: new _react_spring_web__WEBPACK_IMPORTED_MODULE_2__.SpringValue(time / duration).to((scrollP)=>{\n                                        const percentilePosition = 1 - (i + 1) / X_LINES;\n                                        return INITIAL_WIDTH / 4 + 40 * Math.cos((percentilePosition - scrollP) * Math.PI / 1.5) ** 32;\n                                    })\n                                }\n                            }, i, false, {\n                                fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.animated.div, {\n                        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().dot),\n                        style: {\n                            clipPath: new _react_spring_web__WEBPACK_IMPORTED_MODULE_2__.SpringValue(time / duration).to((val)=>\"circle(\".concat(val * 100, \"%)\"))\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().card),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.animated.span, {\n                                    style: textStyles,\n                                    className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().logo),\n                                    children: \"DakotahFerrari Studios\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 13\n                                }, this),\n                                \"Coming Soon\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            new Array(PAGE_COUNT).fill(null).map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().full__page)\n                }, index, false, {\n                    fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n                    lineNumber: 105,\n                    columnNumber: 9\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n        lineNumber: 57,\n        columnNumber: 7\n    }, this);\n}\n_s(Home, \"PjS1WSdXaR8l9vhkVhntOu2NiUY=\", false, function() {\n    return [\n        _react_spring_web__WEBPACK_IMPORTED_MODULE_2__.useSpring\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixPQUFWQSxNQUFNLEtBQUk7d0JBQ3pFO2tDQUNBLDRFQUFDQzs0QkFBR3ZCLFdBQVd6QixzRUFBVzs7OENBQ3hCLDhEQUFDSCw0REFBYTtvQ0FBQ3VDLE9BQU9kO29DQUFZRyxXQUFXekIsc0VBQVc7OENBQUU7Ozs7OztnQ0FFMUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtyQixJQUFJNkIsTUFBTTNCLFlBQVlrRCxJQUFJLENBQUMsSUFBSSxFQUFFcEIsR0FBRyxDQUFDLENBQUNDLEdBQUdvQixzQkFDeEMsOERBQUM5QjtvQkFBSUUsV0FBV3pCLDRFQUFpQjttQkFBT3FEOzs7Ozs7Ozs7OztBQUloRCxDQUFDO0dBOUZ1QmpEOztRQTBCUU4sd0RBQVNBOzs7S0ExQmpCTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTY3JvbGwsIGFuaW1hdGVkLCB1c2VTcHJpbmcsIFNwcmluZ1ZhbHVlIH0gZnJvbSAnQHJlYWN0LXNwcmluZy93ZWInXG5cbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9Ib21lLm1vZHVsZS5zY3NzJ1xuXG5jb25zdCBYX0xJTkVTID0gNDBcblxuY29uc3QgUEFHRV9DT1VOVCA9IDVcblxuY29uc3QgSU5JVElBTF9XSURUSCA9IDIwXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICBjb25zdCBjb250YWluZXJSZWYgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwhKVxuICBjb25zdCBiYXJDb250YWluZXJSZWYgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwhKVxuXG4gIGNvbnN0IGR1cmF0aW9uID0gM1xuICBjb25zdCBbdGltZSwgc2V0VGltZV0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZXRUaW1lKChwcmV2VGltZSkgPT4gcHJldlRpbWUgKyAuMDAwMDAxKTtcbiAgICAgIGlmICh0aW1lL2R1cmF0aW9uID4gMC43KSB7XG4gICAgICAgIHRleHRBcGkuc3RhcnQoeyB5OiAnMCcgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRleHRBcGkuc3RhcnQoeyB5OiAnMTAwJScgfSlcbiAgICAgIH1cbiAgICAgIGlmICh0aW1lID49IGR1cmF0aW9uKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG4gICAgICB9XG4gICAgfSwgMSk7XG4gIH0sIFtdKTtcbiAgY29uc29sZS5sb2codGltZSlcblxuXG5cblxuICBjb25zdCBbdGV4dFN0eWxlcywgdGV4dEFwaV0gPSB1c2VTcHJpbmcoKCkgPT4gKHtcbiAgICB5OiAnMTAwJScsXG4gIH0pKVxuXG4gIC8vIGNvbnN0IHsgc2Nyb2xsWVByb2dyZXNzIH0gPSB1c2VTY3JvbGwoe1xuICAvLyAgIG9uQ2hhbmdlOiAoeyB2YWx1ZTogeyBzY3JvbGxZUHJvZ3Jlc3MgfSB9KSA9PiB7XG4gIC8vICAgICBjb25zb2xlLmxvZyhzY3JvbGxZUHJvZ3Jlc3MpXG4gICAgICBcbiAgLy8gICB9LFxuICAvLyAgIGRlZmF1bHQ6IHtcbiAgLy8gICAgIGltbWVkaWF0ZTogZmFsc2UsXG4gIC8vICAgfSxcbiAgLy8gfSlcblxuXG4gIHJldHVybiAoXG4gICAgICA8ZGl2IHJlZj17Y29udGFpbmVyUmVmfSBjbGFzc05hbWU9e3N0eWxlcy5ib2R5fT5cbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hbmltYXRlZF9fbGF5ZXJzfT5cbiAgICAgICAgPGFuaW1hdGVkLmRpdiByZWY9e2JhckNvbnRhaW5lclJlZn0gY2xhc3NOYW1lPXtzdHlsZXMuYmFyX19jb250YWluZXJ9PlxuICAgICAgICAgIHtBcnJheS5mcm9tKHsgbGVuZ3RoOiBYX0xJTkVTIH0pLm1hcCgoXywgaSkgPT4gKFxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8YW5pbWF0ZWQuZGl2XG4gICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYmFyfVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHdpZHRoOiBuZXcgU3ByaW5nVmFsdWUodGltZS9kdXJhdGlvbikudG8oc2Nyb2xsUCA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBwZXJjZW50aWxlUG9zaXRpb24gPSAoaSArIDEpIC8gWF9MSU5FU1xuXG4gICAgICAgICAgICAgICAgICByZXR1cm4gSU5JVElBTF9XSURUSCAvIDQgKyA0MCAqIE1hdGguY29zKCgocGVyY2VudGlsZVBvc2l0aW9uIC0gc2Nyb2xsUCkgKiBNYXRoLlBJKSAvIDEuNSkgKiogMzJcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvYW5pbWF0ZWQuZGl2PlxuICAgICAgICA8YW5pbWF0ZWQuZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhcl9fY29udGFpbmVyX19pbnZlcnRlZH0+XG4gICAgICAgICAge0FycmF5LmZyb20oeyBsZW5ndGg6IFhfTElORVMgfSkubWFwKChfLCBpKSA9PiAoXG4gICAgICAgICAgICA8YW5pbWF0ZWQuZGl2XG4gICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYmFyfVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHdpZHRoOiBuZXcgU3ByaW5nVmFsdWUodGltZS9kdXJhdGlvbikudG8oc2Nyb2xsUCA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBwZXJjZW50aWxlUG9zaXRpb24gPSAxIC0gKGkgKyAxKSAvIFhfTElORVNcblxuICAgICAgICAgICAgICAgICAgcmV0dXJuIElOSVRJQUxfV0lEVEggLyA0ICsgNDAgKiBNYXRoLmNvcygoKHBlcmNlbnRpbGVQb3NpdGlvbiAtIHNjcm9sbFApICogTWF0aC5QSSkgLyAxLjUpICoqIDMyXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2FuaW1hdGVkLmRpdj5cbiAgICAgICAgPGFuaW1hdGVkLmRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRvdH1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgY2xpcFBhdGg6IG5ldyBTcHJpbmdWYWx1ZSh0aW1lL2R1cmF0aW9uKS50byh2YWwgPT4gYGNpcmNsZSgke3ZhbCAqIDEwMH0lKWApLFxuICAgICAgICAgIH19PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cbiAgICAgICAgICAgIDxhbmltYXRlZC5zcGFuIHN0eWxlPXt0ZXh0U3R5bGVzfSBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5cbiAgICAgICAgICAgICAgRGFrb3RhaEZlcnJhcmkgU3R1ZGlvc1xuICAgICAgICAgICAgPC9hbmltYXRlZC5zcGFuPlxuICAgICAgICAgICAgQ29taW5nIFNvb25cbiAgICAgICAgICA8L2gxPlxuICAgICAgICA8L2FuaW1hdGVkLmRpdj5cbiAgICAgIDwvZGl2PlxuICAgICAge25ldyBBcnJheShQQUdFX0NPVU5UKS5maWxsKG51bGwpLm1hcCgoXywgaW5kZXgpID0+IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mdWxsX19wYWdlfSBrZXk9e2luZGV4fSAvPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsImFuaW1hdGVkIiwidXNlU3ByaW5nIiwiU3ByaW5nVmFsdWUiLCJzdHlsZXMiLCJYX0xJTkVTIiwiUEFHRV9DT1VOVCIsIklOSVRJQUxfV0lEVEgiLCJIb21lIiwiY29udGFpbmVyUmVmIiwidXNlUmVmIiwiYmFyQ29udGFpbmVyUmVmIiwiZHVyYXRpb24iLCJ0aW1lIiwic2V0VGltZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwicHJldlRpbWUiLCJ0ZXh0QXBpIiwic3RhcnQiLCJ5IiwiY2xlYXJJbnRlcnZhbCIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0U3R5bGVzIiwiZGl2IiwicmVmIiwiY2xhc3NOYW1lIiwiYm9keSIsImFuaW1hdGVkX19sYXllcnMiLCJiYXJfX2NvbnRhaW5lciIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsIm1hcCIsIl8iLCJpIiwiYmFyIiwic3R5bGUiLCJ3aWR0aCIsInRvIiwic2Nyb2xsUCIsInBlcmNlbnRpbGVQb3NpdGlvbiIsIk1hdGgiLCJjb3MiLCJQSSIsImJhcl9fY29udGFpbmVyX19pbnZlcnRlZCIsImRvdCIsImNsaXBQYXRoIiwidmFsIiwiaDEiLCJjYXJkIiwic3BhbiIsImxvZ28iLCJmaWxsIiwiaW5kZXgiLCJmdWxsX19wYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});