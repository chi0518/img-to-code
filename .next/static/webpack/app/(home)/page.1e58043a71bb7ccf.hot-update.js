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

/***/ "(app-pages-browser)/./src/components/atoms/ChatText.tsx":
/*!*******************************************!*\
  !*** ./src/components/atoms/ChatText.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ChatText = (param)=>{\n    let { tagMessage } = param;\n    const messageText = ()=>{\n        switch(tagMessage){\n            case \"Input\":\n                return \"input 태그로 바꿔주고 input에 스타일을 넣어줘 텍스트는 placeholder로 넣어줘\";\n            case \"Select\":\n                return \"select 태그로 바꿔주고 텍스트는 옵션으로 넣어줘\";\n            case \"Checkbox\":\n                return \"img태그는 checkbox 태그로 바꿔주고 스타일을 적용해줘\";\n            case \"Radio\":\n                return \"img태그는 checkbox 태그로 바꿔주고 스타일을 적용해줘\";\n            case \"Textarea\":\n                return \"\";\n            case \"Button\":\n                return \"\";\n            case \"Pagination\":\n                return \"\";\n            case \"Calendar\":\n                return \"\";\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: \"bg-gray-100 rounded my-10 p-3 italic\",\n        children: messageText()\n    }, void 0, false, {\n        fileName: \"/Users/hen/nextjs14-react-basic/img-to-code/src/components/atoms/ChatText.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ChatText;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatText);\nvar _c;\n$RefreshReg$(_c, \"ChatText\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2F0b21zL0NoYXRUZXh0LnRzeCIsIm1hcHBpbmdzIjoiOzs7OztBQUErQjtBQU0vQixNQUFNQyxXQUFXO1FBQUMsRUFBRUMsVUFBVSxFQUFpQjtJQUM3QyxNQUFNQyxjQUFjO1FBQ2xCLE9BQVFEO1lBQ04sS0FBSztnQkFDSCxPQUFPO1lBQ1QsS0FBSztnQkFDSCxPQUFPO1lBQ1QsS0FBSztnQkFDSCxPQUFPO1lBQ1QsS0FBSztnQkFDSCxPQUFPO1lBQ1QsS0FBSztnQkFDSCxPQUFPO1lBQ1QsS0FBSztnQkFDSCxPQUFPO1lBQ1QsS0FBSztnQkFDSCxPQUFPO1lBQ1QsS0FBSztnQkFDSCxPQUFPO1FBQ1g7SUFDRjtJQUVBLHFCQUNFLDhEQUFDRTtRQUFFQyxXQUFVO2tCQUF3Q0Y7Ozs7OztBQUV6RDtLQXpCTUY7QUEwQk4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYXRvbXMvQ2hhdFRleHQudHN4P2E2MGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBDaGF0VGV4dFByb3BzIHtcbiAgdGFnTWVzc2FnZTogc3RyaW5nO1xufVxuXG5jb25zdCBDaGF0VGV4dCA9ICh7IHRhZ01lc3NhZ2UgfTogQ2hhdFRleHRQcm9wcykgPT4ge1xuICBjb25zdCBtZXNzYWdlVGV4dCA9ICgpID0+IHtcbiAgICBzd2l0Y2ggKHRhZ01lc3NhZ2UpIHtcbiAgICAgIGNhc2UgXCJJbnB1dFwiOlxuICAgICAgICByZXR1cm4gXCJpbnB1dCDtg5zqt7jroZwg67CU6r+U7KO86rOgIGlucHV07JeQIOyKpO2DgOydvOydhCDrhKPslrTspJgg7YWN7Iqk7Yq464qUIHBsYWNlaG9sZGVy66GcIOuEo+yWtOykmFwiO1xuICAgICAgY2FzZSBcIlNlbGVjdFwiOlxuICAgICAgICByZXR1cm4gXCJzZWxlY3Qg7YOc6re466GcIOuwlOq/lOyjvOqzoCDthY3siqTtirjripQg7Ji17IWY7Jy866GcIOuEo+yWtOykmFwiO1xuICAgICAgY2FzZSBcIkNoZWNrYm94XCI6XG4gICAgICAgIHJldHVybiBcImltZ+2DnOq3uOuKlCBjaGVja2JveCDtg5zqt7jroZwg67CU6r+U7KO86rOgIOyKpO2DgOydvOydhCDsoIHsmqntlbTspJhcIjtcbiAgICAgIGNhc2UgXCJSYWRpb1wiOlxuICAgICAgICByZXR1cm4gXCJpbWftg5zqt7jripQgY2hlY2tib3gg7YOc6re466GcIOuwlOq/lOyjvOqzoCDsiqTtg4DsnbzsnYQg7KCB7Jqp7ZW07KSYXCI7XG4gICAgICBjYXNlIFwiVGV4dGFyZWFcIjpcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICBjYXNlIFwiQnV0dG9uXCI6XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgY2FzZSBcIlBhZ2luYXRpb25cIjpcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICBjYXNlIFwiQ2FsZW5kYXJcIjpcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPHAgY2xhc3NOYW1lPVwiYmctZ3JheS0xMDAgcm91bmRlZCBteS0xMCBwLTMgaXRhbGljXCI+e21lc3NhZ2VUZXh0KCl9PC9wPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IENoYXRUZXh0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2hhdFRleHQiLCJ0YWdNZXNzYWdlIiwibWVzc2FnZVRleHQiLCJwIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/atoms/ChatText.tsx\n"));

/***/ })

});