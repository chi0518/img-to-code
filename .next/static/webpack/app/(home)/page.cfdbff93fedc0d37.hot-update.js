"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(home)/page",{

/***/ "(app-pages-browser)/./src/components/template/Accordion.tsx":
/*!***********************************************!*\
  !*** ./src/components/template/Accordion.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n// src/components/Accordion.tsx\n\nvar _s = $RefreshSig$();\n\n\nconst Accordion = (param)=>{\n    let { question, answer } = param;\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleAccordion = ()=>{\n        setIsOpen(!isOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"border rounded overflow-hidden transition-all duration-300 \".concat(isOpen ? \"h-auto\" : \"h-14\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-4 cursor-pointer flex justify-between items-center \".concat(isOpen ? \"bg-blue-500 text-white\" : \"hover:bg-blue-500 hover:text-white\"),\n                onClick: toggleAccordion,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-lg font-semibold\",\n                        children: question\n                    }, void 0, false, {\n                        fileName: \"/Users/hen/nextjs14-react-basic/img-to-code/src/components/template/Accordion.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-xl\",\n                        children: isOpen ? \"-\" : \"+\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hen/nextjs14-react-basic/img-to-code/src/components/template/Accordion.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hen/nextjs14-react-basic/img-to-code/src/components/template/Accordion.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-4 border-t \".concat(isOpen ? \"block\" : \"hidden\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        width: 600,\n                        height: 0,\n                        src: \"/images/\".concat(question, \".png\"),\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hen/nextjs14-react-basic/img-to-code/src/components/template/Accordion.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined),\n                    typeof answer === \"function\" ? answer() : answer\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hen/nextjs14-react-basic/img-to-code/src/components/template/Accordion.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hen/nextjs14-react-basic/img-to-code/src/components/template/Accordion.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Accordion, \"+sus0Lb0ewKHdwiUhiTAJFoFyQ0=\");\n_c = Accordion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Accordion);\nvar _c;\n$RefreshReg$(_c, \"Accordion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3RlbXBsYXRlL0FjY29yZGlvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsK0JBQStCOzs7QUFDb0I7QUFDcEI7QUFNL0IsTUFBTUcsWUFBc0M7UUFBQyxFQUFFQyxRQUFRLEVBQUVDLE1BQU0sRUFBRTs7SUFDL0QsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdOLCtDQUFRQSxDQUFDO0lBRXJDLE1BQU1PLGtCQUFrQjtRQUN0QkQsVUFBVSxDQUFDRDtJQUNiO0lBRUEscUJBQ0UsOERBQUNHO1FBQ0NDLFdBQVcsOERBRVYsT0FEQ0osU0FBUyxXQUFXOzswQkFHdEIsOERBQUNHO2dCQUNDQyxXQUFXLHdEQUlWLE9BSENKLFNBQ0ksMkJBQ0E7Z0JBRU5LLFNBQVNIOztrQ0FFVCw4REFBQ0k7d0JBQUdGLFdBQVU7a0NBQXlCTjs7Ozs7O2tDQUN2Qyw4REFBQ1M7d0JBQUtILFdBQVU7a0NBQVdKLFNBQVMsTUFBTTs7Ozs7Ozs7Ozs7OzBCQUU1Qyw4REFBQ0c7Z0JBQUlDLFdBQVcsZ0JBQTRDLE9BQTVCSixTQUFTLFVBQVU7O2tDQUNqRCw4REFBQ0osbURBQUtBO3dCQUNKWSxPQUFPO3dCQUNQQyxRQUFRO3dCQUNSQyxLQUFLLFdBQW9CLE9BQVRaLFVBQVM7d0JBQ3pCYSxLQUFLOzs7Ozs7b0JBRU4sT0FBT1osV0FBVyxhQUFhLFdBQWdDQTs7Ozs7Ozs7Ozs7OztBQUl4RTtHQW5DTUY7S0FBQUE7QUFxQ04sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGVtcGxhdGUvQWNjb3JkaW9uLnRzeD9mYjUxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9jb21wb25lbnRzL0FjY29yZGlvbi50c3hcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmludGVyZmFjZSBBY2NvcmRpb25Qcm9wcyB7XG4gIHF1ZXN0aW9uOiBzdHJpbmc7XG4gIGFuc3dlcjogUmVhY3ROb2RlIHwgKCgpID0+IEpTWC5FbGVtZW50KTtcbn1cblxuY29uc3QgQWNjb3JkaW9uOiBSZWFjdC5GQzxBY2NvcmRpb25Qcm9wcz4gPSAoeyBxdWVzdGlvbiwgYW5zd2VyIH0pID0+IHtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB0b2dnbGVBY2NvcmRpb24gPSAoKSA9PiB7XG4gICAgc2V0SXNPcGVuKCFpc09wZW4pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtgYm9yZGVyIHJvdW5kZWQgb3ZlcmZsb3ctaGlkZGVuIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCAke1xuICAgICAgICBpc09wZW4gPyBcImgtYXV0b1wiIDogXCJoLTE0XCJcbiAgICAgIH1gfVxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgcC00IGN1cnNvci1wb2ludGVyIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciAke1xuICAgICAgICAgIGlzT3BlblxuICAgICAgICAgICAgPyBcImJnLWJsdWUtNTAwIHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgOiBcImhvdmVyOmJnLWJsdWUtNTAwIGhvdmVyOnRleHQtd2hpdGVcIlxuICAgICAgICB9YH1cbiAgICAgICAgb25DbGljaz17dG9nZ2xlQWNjb3JkaW9ufVxuICAgICAgPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkXCI+e3F1ZXN0aW9ufTwvaDI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteGxcIj57aXNPcGVuID8gXCItXCIgOiBcIitcIn08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcC00IGJvcmRlci10ICR7aXNPcGVuID8gXCJibG9ja1wiIDogXCJoaWRkZW5cIn1gfT5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgd2lkdGg9ezYwMH1cbiAgICAgICAgICBoZWlnaHQ9ezB9XG4gICAgICAgICAgc3JjPXtgL2ltYWdlcy8ke3F1ZXN0aW9ufS5wbmdgfVxuICAgICAgICAgIGFsdD17XCJcIn1cbiAgICAgICAgLz5cbiAgICAgICAge3R5cGVvZiBhbnN3ZXIgPT09IFwiZnVuY3Rpb25cIiA/IChhbnN3ZXIgYXMgKCkgPT4gUmVhY3ROb2RlKSgpIDogYW5zd2VyfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBY2NvcmRpb247XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiQWNjb3JkaW9uIiwicXVlc3Rpb24iLCJhbnN3ZXIiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJ0b2dnbGVBY2NvcmRpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiaDIiLCJzcGFuIiwid2lkdGgiLCJoZWlnaHQiLCJzcmMiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/template/Accordion.tsx\n"));

/***/ })

});