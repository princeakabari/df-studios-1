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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_spring_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-spring/web */ \"./node_modules/@react-spring/web/dist/react-spring-web.esm.js\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/Home.module.scss */ \"./src/styles/Home.module.scss\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst X_LINES = 40;\nconst PAGE_COUNT = 5;\nconst INITIAL_WIDTH = 20;\nfunction Home() {\n    _s();\n    const containerRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);\n    const barContainerRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);\n    const duration = 5;\n    const [time, setTime] = react__WEBPACK_IMPORTED_MODULE_1__.useState(0);\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{\n        let int = .05;\n        const intervalId = setInterval(()=>{\n            setTime((prevTime)=>prevTime + int);\n            if (time / duration > 0.7) {\n                textApi.start({\n                    y: \"0\"\n                });\n            } else {\n                textApi.start({\n                    y: \"100%\"\n                });\n            }\n            if (time >= duration) {\n                int = 0.02;\n            }\n        }, int);\n    }, []);\n    console.log(time);\n    const [textStyles, textApi] = (0,_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.useSpring)(()=>({\n            y: \"100%\"\n        }));\n    // const { scrollYProgress } = useScroll({\n    //   onChange: ({ value: { scrollYProgress } }) => {\n    //     console.log(scrollYProgress)\n    //   },\n    //   default: {\n    //     immediate: false,\n    //   },\n    // })\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: containerRef,\n        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().body),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().animated__layers),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.animated.div, {\n                        ref: barContainerRef,\n                        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().bar__container),\n                        children: Array.from({\n                            length: X_LINES\n                        }).map((_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.animated.div, {\n                                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().bar),\n                                style: {\n                                    width: new _react_spring_web__WEBPACK_IMPORTED_MODULE_2__.SpringValue(time / duration).to((scrollP)=>{\n                                        const percentilePosition = (i + 1) / X_LINES;\n                                        return INITIAL_WIDTH / 4 + 40 * Math.cos((percentilePosition - scrollP) * Math.PI / 1.5) ** 32;\n                                    })\n                                }\n                            }, i, false, {\n                                fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.animated.div, {\n                        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().bar__container__inverted),\n                        children: Array.from({\n                            length: X_LINES\n                        }).map((_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.animated.div, {\n                                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().bar),\n                                style: {\n                                    width: new _react_spring_web__WEBPACK_IMPORTED_MODULE_2__.SpringValue(time / duration).to((scrollP)=>{\n                                        const percentilePosition = 1 - (i + 1) / X_LINES;\n                                        return INITIAL_WIDTH / 4 + 40 * Math.cos((percentilePosition - scrollP) * Math.PI / 1.5) ** 32;\n                                    })\n                                }\n                            }, i, false, {\n                                fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.animated.div, {\n                        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().dot),\n                        style: {\n                            clipPath: new _react_spring_web__WEBPACK_IMPORTED_MODULE_2__.SpringValue(time / duration).to((val)=>\"circle(\".concat(val * 100, \"%)\"))\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_web__WEBPACK_IMPORTED_MODULE_2__.animated.span, {\n                            className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().logo),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().name),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        style: {\n                                            padding: \"10px\"\n                                        },\n                                        children: \"DakotahFerrari Studios\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n                                        lineNumber: 101,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n                                    lineNumber: 100,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n                                    lineNumber: 103,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n                            lineNumber: 99,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            new Array(PAGE_COUNT).fill(null).map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().full__page)\n                }, index, false, {\n                    fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n                    lineNumber: 112,\n                    columnNumber: 9\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lucasraza/Desktop/df-studios/src/pages/index.tsx\",\n        lineNumber: 59,\n        columnNumber: 7\n    }, this);\n}\n_s(Home, \"PjS1WSdXaR8l9vhkVhntOu2NiUY=\", false, function() {\n    return [\n        _react_spring_web__WEBPACK_IMPORTED_MODULE_2__.useSpring\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUFBLE1BQU8sVUFBb0IsT0FBVkEsTUFBTSxLQUFJO3dCQUN6RTtrQ0FFRSw0RUFBQ2xELDREQUFhOzRCQUFDNEIsV0FBV3pCLHNFQUFXOzs4Q0FDbkMsOERBQUNrRDtvQ0FBR3pCLFdBQVd6QixzRUFBVzs4Q0FDeEIsNEVBQUNnRDt3Q0FBS1osT0FBTzs0Q0FBQ2dCLFNBQVM7d0NBQU07a0RBQUc7Ozs7Ozs7Ozs7OzhDQUVsQyw4REFBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFRUixJQUFJeEIsTUFBTTNCLFlBQVlvRCxJQUFJLENBQUMsSUFBSSxFQUFFdEIsR0FBRyxDQUFDLENBQUNDLEdBQUdzQixzQkFDeEMsOERBQUNoQztvQkFBSUUsV0FBV3pCLDRFQUFpQjttQkFBT3VEOzs7Ozs7Ozs7OztBQUtoRCxDQUFDO0dBdEd1Qm5EOztRQTRCUU4sd0RBQVNBOzs7S0E1QmpCTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTY3JvbGwsIGFuaW1hdGVkLCB1c2VTcHJpbmcsIFNwcmluZ1ZhbHVlIH0gZnJvbSAnQHJlYWN0LXNwcmluZy93ZWInXG5cbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9Ib21lLm1vZHVsZS5zY3NzJ1xuXG5jb25zdCBYX0xJTkVTID0gNDBcblxuY29uc3QgUEFHRV9DT1VOVCA9IDVcblxuY29uc3QgSU5JVElBTF9XSURUSCA9IDIwXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICBjb25zdCBjb250YWluZXJSZWYgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwhKVxuICBjb25zdCBiYXJDb250YWluZXJSZWYgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwhKVxuXG4gIGNvbnN0IGR1cmF0aW9uID0gNVxuICBjb25zdCBbdGltZSwgc2V0VGltZV0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBpbnQgPSAuMDVcblxuICAgIGNvbnN0IGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZXRUaW1lKChwcmV2VGltZSkgPT4gcHJldlRpbWUgKyBpbnQpO1xuICAgICAgaWYgKHRpbWUvZHVyYXRpb24gPiAwLjcpIHtcbiAgICAgICAgdGV4dEFwaS5zdGFydCh7IHk6ICcwJyB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGV4dEFwaS5zdGFydCh7IHk6ICcxMDAlJyB9KVxuICAgICAgfVxuICAgICAgaWYgKHRpbWUgPj0gZHVyYXRpb24pIHtcbiAgICAgICAgaW50ID0gMC4wMlxuICAgICAgfVxuICAgIH0sIGludCk7XG4gIH0sIFtdKTtcbiAgY29uc29sZS5sb2codGltZSlcblxuXG5cblxuICBjb25zdCBbdGV4dFN0eWxlcywgdGV4dEFwaV0gPSB1c2VTcHJpbmcoKCkgPT4gKHtcbiAgICB5OiAnMTAwJScsXG4gIH0pKVxuXG4gIC8vIGNvbnN0IHsgc2Nyb2xsWVByb2dyZXNzIH0gPSB1c2VTY3JvbGwoe1xuICAvLyAgIG9uQ2hhbmdlOiAoeyB2YWx1ZTogeyBzY3JvbGxZUHJvZ3Jlc3MgfSB9KSA9PiB7XG4gIC8vICAgICBjb25zb2xlLmxvZyhzY3JvbGxZUHJvZ3Jlc3MpXG4gICAgICBcbiAgLy8gICB9LFxuICAvLyAgIGRlZmF1bHQ6IHtcbiAgLy8gICAgIGltbWVkaWF0ZTogZmFsc2UsXG4gIC8vICAgfSxcbiAgLy8gfSlcblxuXG4gIHJldHVybiAoXG4gICAgICA8ZGl2IHJlZj17Y29udGFpbmVyUmVmfSBjbGFzc05hbWU9e3N0eWxlcy5ib2R5fT5cbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hbmltYXRlZF9fbGF5ZXJzfT5cbiAgICAgICAgPGFuaW1hdGVkLmRpdiByZWY9e2JhckNvbnRhaW5lclJlZn0gY2xhc3NOYW1lPXtzdHlsZXMuYmFyX19jb250YWluZXJ9PlxuICAgICAgICAgIHtBcnJheS5mcm9tKHsgbGVuZ3RoOiBYX0xJTkVTIH0pLm1hcCgoXywgaSkgPT4gKFxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8YW5pbWF0ZWQuZGl2XG4gICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYmFyfVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHdpZHRoOiBuZXcgU3ByaW5nVmFsdWUodGltZS9kdXJhdGlvbikudG8oc2Nyb2xsUCA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBwZXJjZW50aWxlUG9zaXRpb24gPSAoaSArIDEpIC8gWF9MSU5FU1xuXG4gICAgICAgICAgICAgICAgICByZXR1cm4gSU5JVElBTF9XSURUSCAvIDQgKyA0MCAqIE1hdGguY29zKCgocGVyY2VudGlsZVBvc2l0aW9uIC0gc2Nyb2xsUCkgKiBNYXRoLlBJKSAvIDEuNSkgKiogMzJcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvYW5pbWF0ZWQuZGl2PlxuICAgICAgICA8YW5pbWF0ZWQuZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhcl9fY29udGFpbmVyX19pbnZlcnRlZH0+XG4gICAgICAgICAge0FycmF5LmZyb20oeyBsZW5ndGg6IFhfTElORVMgfSkubWFwKChfLCBpKSA9PiAoXG4gICAgICAgICAgICA8YW5pbWF0ZWQuZGl2XG4gICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYmFyfVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHdpZHRoOiBuZXcgU3ByaW5nVmFsdWUodGltZS9kdXJhdGlvbikudG8oc2Nyb2xsUCA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBwZXJjZW50aWxlUG9zaXRpb24gPSAxIC0gKGkgKyAxKSAvIFhfTElORVNcblxuICAgICAgICAgICAgICAgICAgcmV0dXJuIElOSVRJQUxfV0lEVEggLyA0ICsgNDAgKiBNYXRoLmNvcygoKHBlcmNlbnRpbGVQb3NpdGlvbiAtIHNjcm9sbFApICogTWF0aC5QSSkgLyAxLjUpICoqIDMyXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2FuaW1hdGVkLmRpdj5cbiAgICAgICAgPGFuaW1hdGVkLmRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRvdH1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgY2xpcFBhdGg6IG5ldyBTcHJpbmdWYWx1ZSh0aW1lL2R1cmF0aW9uKS50byh2YWwgPT4gYGNpcmNsZSgke3ZhbCAqIDEwMH0lKWApLFxuICAgICAgICAgIH19PlxuICAgICAgICAgIFxuICAgICAgICAgICAgPGFuaW1hdGVkLnNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubG9nb30+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5uYW1lfT5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e3BhZGRpbmc6ICcxMHB4J319PkRha290YWhGZXJyYXJpIFN0dWRpb3M8L3NwYW4+XG4gICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvYW5pbWF0ZWQuc3Bhbj5cbiAgICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICA8L2FuaW1hdGVkLmRpdj5cbiAgICAgIDwvZGl2PlxuICAgICAge25ldyBBcnJheShQQUdFX0NPVU5UKS5maWxsKG51bGwpLm1hcCgoXywgaW5kZXgpID0+IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mdWxsX19wYWdlfSBrZXk9e2luZGV4fSAvPlxuICAgICAgKSl9XG4gICAgICBcbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiYW5pbWF0ZWQiLCJ1c2VTcHJpbmciLCJTcHJpbmdWYWx1ZSIsInN0eWxlcyIsIlhfTElORVMiLCJQQUdFX0NPVU5UIiwiSU5JVElBTF9XSURUSCIsIkhvbWUiLCJjb250YWluZXJSZWYiLCJ1c2VSZWYiLCJiYXJDb250YWluZXJSZWYiLCJkdXJhdGlvbiIsInRpbWUiLCJzZXRUaW1lIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJpbnQiLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJwcmV2VGltZSIsInRleHRBcGkiLCJzdGFydCIsInkiLCJjb25zb2xlIiwibG9nIiwidGV4dFN0eWxlcyIsImRpdiIsInJlZiIsImNsYXNzTmFtZSIsImJvZHkiLCJhbmltYXRlZF9fbGF5ZXJzIiwiYmFyX19jb250YWluZXIiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJtYXAiLCJfIiwiaSIsImJhciIsInN0eWxlIiwid2lkdGgiLCJ0byIsInNjcm9sbFAiLCJwZXJjZW50aWxlUG9zaXRpb24iLCJNYXRoIiwiY29zIiwiUEkiLCJiYXJfX2NvbnRhaW5lcl9faW52ZXJ0ZWQiLCJkb3QiLCJjbGlwUGF0aCIsInZhbCIsInNwYW4iLCJsb2dvIiwiaDIiLCJuYW1lIiwicGFkZGluZyIsImJyIiwiZmlsbCIsImluZGV4IiwiZnVsbF9fcGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});