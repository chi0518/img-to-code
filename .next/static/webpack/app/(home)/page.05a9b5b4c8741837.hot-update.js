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

/***/ "(app-pages-browser)/./src/components/atoms/Table.tsx":
/*!****************************************!*\
  !*** ./src/components/atoms/Table.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SelectAll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SelectAll */ \"(app-pages-browser)/./src/components/atoms/SelectAll.tsx\");\n/* harmony import */ var _InputAll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InputAll */ \"(app-pages-browser)/./src/components/atoms/InputAll.tsx\");\n/* harmony import */ var _CheckboxAll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CheckboxAll */ \"(app-pages-browser)/./src/components/atoms/CheckboxAll.tsx\");\n/* harmony import */ var _RadioAll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RadioAll */ \"(app-pages-browser)/./src/components/atoms/RadioAll.tsx\");\n\n\n\n\n\n\nconst SelectArray = _SelectAll__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\nconst InputArray = _InputAll__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\nconst CheckboxArray = _CheckboxAll__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\nconst RadioArray = _RadioAll__WEBPACK_IMPORTED_MODULE_5__[\"default\"];\nconst getTargetArray = (tag)=>{\n    switch(tag){\n        case \"Input\":\n            return InputArray;\n        case \"Select\":\n            return SelectArray;\n        case \"Checkbox\":\n            return CheckboxArray;\n        case \"Radio\":\n            return RadioArray;\n        case \"Textarea\":\n            return TextareaArray;\n        case \"Button\":\n            return ButtonArray;\n        case \"Pagination\":\n            return PaginationArray;\n        case \"Calendar\":\n            return CalendarArray;\n        default:\n            return [];\n    }\n};\nconst Table = (param)=>{\n    let { tag } = param;\n    const targetArray = getTargetArray(tag);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"overflow-x-auto\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"min-w-full bg-white shadow-md rounded-xl\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            className: \"bg-blue-gray-100 text-gray-700\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"py-3 px-4 text-left\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/hen/nextjs14-react-basic/img-to-code/src/components/atoms/Table.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"py-3 px-4 text-left\",\n                                    children: \"Builder.io\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/hen/nextjs14-react-basic/img-to-code/src/components/atoms/Table.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"py-3 px-4 text-left\",\n                                    children: \"Anima\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/hen/nextjs14-react-basic/img-to-code/src/components/atoms/Table.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/hen/nextjs14-react-basic/img-to-code/src/components/atoms/Table.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/hen/nextjs14-react-basic/img-to-code/src/components/atoms/Table.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        className: \"text-blue-gray-900\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                className: \"border-b border-blue-gray-200\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"py-3 px-4\",\n                                        children: \"Basic\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hen/nextjs14-react-basic/img-to-code/src/components/atoms/Table.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"py-3 px-4\",\n                                        children: targetArray[0] ? targetArray[0]() : \"\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hen/nextjs14-react-basic/img-to-code/src/components/atoms/Table.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"py-3 px-4\",\n                                        children: targetArray[3] ? targetArray[3]() : \"\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hen/nextjs14-react-basic/img-to-code/src/components/atoms/Table.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/hen/nextjs14-react-basic/img-to-code/src/components/atoms/Table.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                className: \"border-b border-blue-gray-200\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"py-3 px-4\",\n                                        children: \"Quality\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hen/nextjs14-react-basic/img-to-code/src/components/atoms/Table.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"py-3 px-4\",\n                                        children: targetArray[1] ? targetArray[1]() : \"\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hen/nextjs14-react-basic/img-to-code/src/components/atoms/Table.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"py-3 px-4\",\n                                        children: targetArray[4] ? targetArray[4]() : \"\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hen/nextjs14-react-basic/img-to-code/src/components/atoms/Table.tsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/hen/nextjs14-react-basic/img-to-code/src/components/atoms/Table.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                className: \"border-b border-blue-gray-200\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"py-3 px-4\",\n                                        children: \"Basic + Chat GPT3.5\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hen/nextjs14-react-basic/img-to-code/src/components/atoms/Table.tsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"py-3 px-4\",\n                                        children: targetArray[2] ? targetArray[2]() : \"\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hen/nextjs14-react-basic/img-to-code/src/components/atoms/Table.tsx\",\n                                        lineNumber: 92,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"py-3 px-4\",\n                                        children: targetArray[5] ? targetArray[5]() : \"\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hen/nextjs14-react-basic/img-to-code/src/components/atoms/Table.tsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/hen/nextjs14-react-basic/img-to-code/src/components/atoms/Table.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hen/nextjs14-react-basic/img-to-code/src/components/atoms/Table.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hen/nextjs14-react-basic/img-to-code/src/components/atoms/Table.tsx\",\n                lineNumber: 46,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/hen/nextjs14-react-basic/img-to-code/src/components/atoms/Table.tsx\",\n            lineNumber: 45,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/hen/nextjs14-react-basic/img-to-code/src/components/atoms/Table.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Table;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Table);\nvar _c;\n$RefreshReg$(_c, \"Table\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2F0b21zL1RhYmxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBK0I7QUFDSztBQUNGO0FBQ007QUFDTjtBQU1sQyxNQUFNSyxjQUFjSixrREFBU0E7QUFDN0IsTUFBTUssYUFBYUosaURBQVFBO0FBQzNCLE1BQU1LLGdCQUFnQkosb0RBQVdBO0FBQ2pDLE1BQU1LLGFBQWFKLGlEQUFRQTtBQUUzQixNQUFNSyxpQkFBaUIsQ0FBQ0M7SUFDdEIsT0FBUUE7UUFDTixLQUFLO1lBQ0gsT0FBT0o7UUFDVCxLQUFLO1lBQ0gsT0FBT0Q7UUFDVCxLQUFLO1lBQ0gsT0FBT0U7UUFDVCxLQUFLO1lBQ0gsT0FBT0M7UUFDVCxLQUFLO1lBQ0gsT0FBT0c7UUFDVCxLQUFLO1lBQ0gsT0FBT0M7UUFDVCxLQUFLO1lBQ0gsT0FBT0M7UUFDVCxLQUFLO1lBQ0gsT0FBT0M7UUFFVDtZQUNFLE9BQU8sRUFBRTtJQUNiO0FBQ0Y7QUFFQSxNQUFNQyxRQUFRO1FBQUMsRUFBRUwsR0FBRyxFQUFjO0lBQ2hDLE1BQU1NLGNBQWNQLGVBQWVDO0lBRW5DLHFCQUNFLDhEQUFDTztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVO3NCQUNiLDRFQUFDQztnQkFBTUQsV0FBVTs7a0NBQ2YsOERBQUNFO2tDQUNDLDRFQUFDQzs0QkFBR0gsV0FBVTs7OENBQ1osOERBQUNJO29DQUFHSixXQUFVOzs7Ozs7OENBQ2QsOERBQUNJO29DQUFHSixXQUFVOzhDQUFzQjs7Ozs7OzhDQUNwQyw4REFBQ0k7b0NBQUdKLFdBQVU7OENBQXNCOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJeEMsOERBQUNLO3dCQUFNTCxXQUFVOzswQ0FDZiw4REFBQ0c7Z0NBQUdILFdBQVU7O2tEQUNaLDhEQUFDTTt3Q0FBR04sV0FBVTtrREFBWTs7Ozs7O2tEQUMxQiw4REFBQ007d0NBQUdOLFdBQVU7a0RBQ1hGLFdBQVcsQ0FBQyxFQUFFLEdBQUdBLFdBQVcsQ0FBQyxFQUFFLEtBQUs7Ozs7OztrREFFdkMsOERBQUNRO3dDQUFHTixXQUFVO2tEQUNYRixXQUFXLENBQUMsRUFBRSxHQUFHQSxXQUFXLENBQUMsRUFBRSxLQUFLOzs7Ozs7Ozs7Ozs7MENBV3pDLDhEQUFDSztnQ0FBR0gsV0FBVTs7a0RBQ1osOERBQUNNO3dDQUFHTixXQUFVO2tEQUFZOzs7Ozs7a0RBQzFCLDhEQUFDTTt3Q0FBR04sV0FBVTtrREFDWEYsV0FBVyxDQUFDLEVBQUUsR0FBR0EsV0FBVyxDQUFDLEVBQUUsS0FBSzs7Ozs7O2tEQUV2Qyw4REFBQ1E7d0NBQUdOLFdBQVU7a0RBQ1hGLFdBQVcsQ0FBQyxFQUFFLEdBQUdBLFdBQVcsQ0FBQyxFQUFFLEtBQUs7Ozs7Ozs7Ozs7OzswQ0FXekMsOERBQUNLO2dDQUFHSCxXQUFVOztrREFDWiw4REFBQ007d0NBQUdOLFdBQVU7a0RBQVk7Ozs7OztrREFDMUIsOERBQUNNO3dDQUFHTixXQUFVO2tEQUNYRixXQUFXLENBQUMsRUFBRSxHQUFHQSxXQUFXLENBQUMsRUFBRSxLQUFLOzs7Ozs7a0RBRXZDLDhEQUFDUTt3Q0FBR04sV0FBVTtrREFDWEYsV0FBVyxDQUFDLEVBQUUsR0FBR0EsV0FBVyxDQUFDLEVBQUUsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCckQ7S0F4RU1EO0FBeUVOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2F0b21zL1RhYmxlLnRzeD9hOGNjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNlbGVjdEFsbCBmcm9tIFwiLi9TZWxlY3RBbGxcIjtcbmltcG9ydCBJbnB1dEFsbCBmcm9tIFwiLi9JbnB1dEFsbFwiO1xuaW1wb3J0IENoZWNrYm94QWxsIGZyb20gXCIuL0NoZWNrYm94QWxsXCI7XG5pbXBvcnQgUmFkaW9BbGwgZnJvbSBcIi4vUmFkaW9BbGxcIjtcblxuaW50ZXJmYWNlIFRhYmxlUHJvcHMge1xuICB0YWc6IHN0cmluZztcbn1cblxuY29uc3QgU2VsZWN0QXJyYXkgPSBTZWxlY3RBbGw7XG5jb25zdCBJbnB1dEFycmF5ID0gSW5wdXRBbGw7XG5jb25zdCBDaGVja2JveEFycmF5ID0gQ2hlY2tib3hBbGw7XG5jb25zdCBSYWRpb0FycmF5ID0gUmFkaW9BbGw7XG5cbmNvbnN0IGdldFRhcmdldEFycmF5ID0gKHRhZzogc3RyaW5nKSA9PiB7XG4gIHN3aXRjaCAodGFnKSB7XG4gICAgY2FzZSBcIklucHV0XCI6XG4gICAgICByZXR1cm4gSW5wdXRBcnJheTtcbiAgICBjYXNlIFwiU2VsZWN0XCI6XG4gICAgICByZXR1cm4gU2VsZWN0QXJyYXk7XG4gICAgY2FzZSBcIkNoZWNrYm94XCI6XG4gICAgICByZXR1cm4gQ2hlY2tib3hBcnJheTtcbiAgICBjYXNlIFwiUmFkaW9cIjpcbiAgICAgIHJldHVybiBSYWRpb0FycmF5O1xuICAgIGNhc2UgXCJUZXh0YXJlYVwiOlxuICAgICAgcmV0dXJuIFRleHRhcmVhQXJyYXk7XG4gICAgY2FzZSBcIkJ1dHRvblwiOlxuICAgICAgcmV0dXJuIEJ1dHRvbkFycmF5O1xuICAgIGNhc2UgXCJQYWdpbmF0aW9uXCI6XG4gICAgICByZXR1cm4gUGFnaW5hdGlvbkFycmF5O1xuICAgIGNhc2UgXCJDYWxlbmRhclwiOlxuICAgICAgcmV0dXJuIENhbGVuZGFyQXJyYXk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFtdO1xuICB9XG59O1xuXG5jb25zdCBUYWJsZSA9ICh7IHRhZyB9OiBUYWJsZVByb3BzKSA9PiB7XG4gIGNvbnN0IHRhcmdldEFycmF5ID0gZ2V0VGFyZ2V0QXJyYXkodGFnKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3cteC1hdXRvXCI+XG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJtaW4tdy1mdWxsIGJnLXdoaXRlIHNoYWRvdy1tZCByb3VuZGVkLXhsXCI+XG4gICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJnLWJsdWUtZ3JheS0xMDAgdGV4dC1ncmF5LTcwMFwiPlxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHktMyBweC00IHRleHQtbGVmdFwiPjwvdGg+XG4gICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweS0zIHB4LTQgdGV4dC1sZWZ0XCI+QnVpbGRlci5pbzwvdGg+XG4gICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweS0zIHB4LTQgdGV4dC1sZWZ0XCI+QW5pbWE8L3RoPlxuICAgICAgICAgICAgICB7LyogPHRoIGNsYXNzTmFtZT1cInB5LTMgcHgtNCB0ZXh0LWxlZnRcIj5BY3Rpb248L3RoPiAqL31cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICA8dGJvZHkgY2xhc3NOYW1lPVwidGV4dC1ibHVlLWdyYXktOTAwXCI+XG4gICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYm9yZGVyLWIgYm9yZGVyLWJsdWUtZ3JheS0yMDBcIj5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTMgcHgtNFwiPkJhc2ljPC90ZD5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTMgcHgtNFwiPlxuICAgICAgICAgICAgICAgIHt0YXJnZXRBcnJheVswXSA/IHRhcmdldEFycmF5WzBdKCkgOiBcIlwifVxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMyBweC00XCI+XG4gICAgICAgICAgICAgICAge3RhcmdldEFycmF5WzNdID8gdGFyZ2V0QXJyYXlbM10oKSA6IFwiXCJ9XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIHsvKiA8dGQgY2xhc3NOYW1lPVwicHktMyBweC00XCI+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQtYmx1ZS02MDAgaG92ZXI6dGV4dC1ibHVlLTgwMFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgRWRpdFxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC90ZD4gKi99XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJvcmRlci1iIGJvcmRlci1ibHVlLWdyYXktMjAwXCI+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0zIHB4LTRcIj5RdWFsaXR5PC90ZD5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTMgcHgtNFwiPlxuICAgICAgICAgICAgICAgIHt0YXJnZXRBcnJheVsxXSA/IHRhcmdldEFycmF5WzFdKCkgOiBcIlwifVxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMyBweC00XCI+XG4gICAgICAgICAgICAgICAge3RhcmdldEFycmF5WzRdID8gdGFyZ2V0QXJyYXlbNF0oKSA6IFwiXCJ9XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIHsvKiA8dGQgY2xhc3NOYW1lPVwicHktMyBweC00XCI+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQtYmx1ZS02MDAgaG92ZXI6dGV4dC1ibHVlLTgwMFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgRWRpdFxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC90ZD4gKi99XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJvcmRlci1iIGJvcmRlci1ibHVlLWdyYXktMjAwXCI+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweS0zIHB4LTRcIj5CYXNpYyArIENoYXQgR1BUMy41PC90ZD5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB5LTMgcHgtNFwiPlxuICAgICAgICAgICAgICAgIHt0YXJnZXRBcnJheVsyXSA/IHRhcmdldEFycmF5WzJdKCkgOiBcIlwifVxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHktMyBweC00XCI+XG4gICAgICAgICAgICAgICAge3RhcmdldEFycmF5WzVdID8gdGFyZ2V0QXJyYXlbNV0oKSA6IFwiXCJ9XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIHsvKiA8dGQgY2xhc3NOYW1lPVwicHktMyBweC00XCI+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQtYmx1ZS02MDAgaG92ZXI6dGV4dC1ibHVlLTgwMFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgRWRpdFxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC90ZD4gKi99XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBUYWJsZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlNlbGVjdEFsbCIsIklucHV0QWxsIiwiQ2hlY2tib3hBbGwiLCJSYWRpb0FsbCIsIlNlbGVjdEFycmF5IiwiSW5wdXRBcnJheSIsIkNoZWNrYm94QXJyYXkiLCJSYWRpb0FycmF5IiwiZ2V0VGFyZ2V0QXJyYXkiLCJ0YWciLCJUZXh0YXJlYUFycmF5IiwiQnV0dG9uQXJyYXkiLCJQYWdpbmF0aW9uQXJyYXkiLCJDYWxlbmRhckFycmF5IiwiVGFibGUiLCJ0YXJnZXRBcnJheSIsImRpdiIsImNsYXNzTmFtZSIsInRhYmxlIiwidGhlYWQiLCJ0ciIsInRoIiwidGJvZHkiLCJ0ZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/atoms/Table.tsx\n"));

/***/ })

});