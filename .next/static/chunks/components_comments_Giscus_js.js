"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["components_comments_Giscus_js"],{

/***/ "./components/comments/Giscus.js":
/*!***************************************!*\
  !*** ./components/comments/Giscus.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-themes */ \"./node_modules/next-themes/dist/index.modern.js\");\n/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/data/siteMetadata */ \"./data/siteMetadata.js\");\n/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Giscus = function(param) {\n    var mapping = param.mapping;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), enableLoadComments = ref[0], setEnabledLoadComments = ref[1];\n    var ref1 = (0,next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme)(), theme = ref1.theme, resolvedTheme = ref1.resolvedTheme;\n    var commentsTheme = (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default().comment.giscusConfig.themeURL) === '' ? theme === 'dark' || resolvedTheme === 'dark' ? (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default().comment.giscusConfig.darkTheme) : (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default().comment.giscusConfig.theme) : (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default().comment.giscusConfig.themeURL);\n    var COMMENTS_ID = 'comments-container';\n    var LoadComments = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {\n        setEnabledLoadComments(false);\n        var script = document.createElement('script');\n        script.src = 'https://giscus.app/client.js';\n        script.setAttribute('data-repo', (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default().comment.giscusConfig.repo));\n        script.setAttribute('data-repo-id', (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default().comment.giscusConfig.repositoryId));\n        script.setAttribute('data-category', (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default().comment.giscusConfig.category));\n        script.setAttribute('data-category-id', (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default().comment.giscusConfig.categoryId));\n        script.setAttribute('data-mapping', mapping);\n        script.setAttribute('data-reactions-enabled', (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default().comment.giscusConfig.reactions));\n        script.setAttribute('data-emit-metadata', (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default().comment.giscusConfig.metadata));\n        script.setAttribute('data-theme', commentsTheme);\n        script.setAttribute('crossorigin', 'anonymous');\n        script.async = true;\n        var comments1 = document.getElementById(COMMENTS_ID);\n        if (comments1) comments1.appendChild(script);\n        return function() {\n            var comments = document.getElementById(COMMENTS_ID);\n            if (comments) comments.innerHTML = '';\n        };\n    }, [\n        commentsTheme,\n        mapping\n    ]);\n    // Reload on theme change\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var iframe = document.querySelector('iframe.giscus-frame');\n        if (!iframe) return;\n        LoadComments();\n    }, [\n        LoadComments\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"pt-6 pb-6 text-center text-gray-700 dark:text-gray-300\",\n        __source: {\n            fileName: \"/home/svn/porto/components/comments/Giscus.js\",\n            lineNumber: 50,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            enableLoadComments && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                onClick: LoadComments,\n                __source: {\n                    fileName: \"/home/svn/porto/components/comments/Giscus.js\",\n                    lineNumber: 51,\n                    columnNumber: 30\n                },\n                __self: _this,\n                children: \"Load Comments\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"giscus\",\n                id: COMMENTS_ID,\n                __source: {\n                    fileName: \"/home/svn/porto/components/comments/Giscus.js\",\n                    lineNumber: 52,\n                    columnNumber: 7\n                },\n                __self: _this\n            })\n        ]\n    }));\n};\n_s(Giscus, \"QoSFMeNXcKbsbttQCOWXG1zryKM=\", false, function() {\n    return [\n        next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme\n    ];\n});\n_c = Giscus;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Giscus);\nvar _c;\n$RefreshReg$(_c, \"Giscus\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVMsRUFBQyxDQUFRO2dCQUFDRyxFQUFFLEVBQUV4QixXQUFXOzs7Ozs7Ozs7O0FBRzdDLENBQUM7R0FqREtYLE1BQU07O1FBRXVCRixpREFBUTs7O0tBRnJDRSxNQUFNO0FBbURaLCtEQUFlQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY29tbWVudHMvR2lzY3VzLmpzPzliNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ25leHQtdGhlbWVzJ1xuXG5pbXBvcnQgc2l0ZU1ldGFkYXRhIGZyb20gJ0AvZGF0YS9zaXRlTWV0YWRhdGEnXG5cbmNvbnN0IEdpc2N1cyA9ICh7IG1hcHBpbmcgfSkgPT4ge1xuICBjb25zdCBbZW5hYmxlTG9hZENvbW1lbnRzLCBzZXRFbmFibGVkTG9hZENvbW1lbnRzXSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IHsgdGhlbWUsIHJlc29sdmVkVGhlbWUgfSA9IHVzZVRoZW1lKClcbiAgY29uc3QgY29tbWVudHNUaGVtZSA9XG4gICAgc2l0ZU1ldGFkYXRhLmNvbW1lbnQuZ2lzY3VzQ29uZmlnLnRoZW1lVVJMID09PSAnJ1xuICAgICAgPyB0aGVtZSA9PT0gJ2RhcmsnIHx8IHJlc29sdmVkVGhlbWUgPT09ICdkYXJrJ1xuICAgICAgICA/IHNpdGVNZXRhZGF0YS5jb21tZW50Lmdpc2N1c0NvbmZpZy5kYXJrVGhlbWVcbiAgICAgICAgOiBzaXRlTWV0YWRhdGEuY29tbWVudC5naXNjdXNDb25maWcudGhlbWVcbiAgICAgIDogc2l0ZU1ldGFkYXRhLmNvbW1lbnQuZ2lzY3VzQ29uZmlnLnRoZW1lVVJMXG5cbiAgY29uc3QgQ09NTUVOVFNfSUQgPSAnY29tbWVudHMtY29udGFpbmVyJ1xuXG4gIGNvbnN0IExvYWRDb21tZW50cyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRFbmFibGVkTG9hZENvbW1lbnRzKGZhbHNlKVxuICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG4gICAgc2NyaXB0LnNyYyA9ICdodHRwczovL2dpc2N1cy5hcHAvY2xpZW50LmpzJ1xuICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcmVwbycsIHNpdGVNZXRhZGF0YS5jb21tZW50Lmdpc2N1c0NvbmZpZy5yZXBvKVxuICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcmVwby1pZCcsIHNpdGVNZXRhZGF0YS5jb21tZW50Lmdpc2N1c0NvbmZpZy5yZXBvc2l0b3J5SWQpXG4gICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnZGF0YS1jYXRlZ29yeScsIHNpdGVNZXRhZGF0YS5jb21tZW50Lmdpc2N1c0NvbmZpZy5jYXRlZ29yeSlcbiAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdkYXRhLWNhdGVnb3J5LWlkJywgc2l0ZU1ldGFkYXRhLmNvbW1lbnQuZ2lzY3VzQ29uZmlnLmNhdGVnb3J5SWQpXG4gICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnZGF0YS1tYXBwaW5nJywgbWFwcGluZylcbiAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdkYXRhLXJlYWN0aW9ucy1lbmFibGVkJywgc2l0ZU1ldGFkYXRhLmNvbW1lbnQuZ2lzY3VzQ29uZmlnLnJlYWN0aW9ucylcbiAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdkYXRhLWVtaXQtbWV0YWRhdGEnLCBzaXRlTWV0YWRhdGEuY29tbWVudC5naXNjdXNDb25maWcubWV0YWRhdGEpXG4gICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnZGF0YS10aGVtZScsIGNvbW1lbnRzVGhlbWUpXG4gICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnY3Jvc3NvcmlnaW4nLCAnYW5vbnltb3VzJylcbiAgICBzY3JpcHQuYXN5bmMgPSB0cnVlXG5cbiAgICBjb25zdCBjb21tZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKENPTU1FTlRTX0lEKVxuICAgIGlmIChjb21tZW50cykgY29tbWVudHMuYXBwZW5kQ2hpbGQoc2NyaXB0KVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGNvbW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoQ09NTUVOVFNfSUQpXG4gICAgICBpZiAoY29tbWVudHMpIGNvbW1lbnRzLmlubmVySFRNTCA9ICcnXG4gICAgfVxuICB9LCBbY29tbWVudHNUaGVtZSwgbWFwcGluZ10pXG5cbiAgLy8gUmVsb2FkIG9uIHRoZW1lIGNoYW5nZVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGlmcmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lmcmFtZS5naXNjdXMtZnJhbWUnKVxuICAgIGlmICghaWZyYW1lKSByZXR1cm5cbiAgICBMb2FkQ29tbWVudHMoKVxuICB9LCBbTG9hZENvbW1lbnRzXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNiBwYi02IHRleHQtY2VudGVyIHRleHQtZ3JheS03MDAgZGFyazp0ZXh0LWdyYXktMzAwXCI+XG4gICAgICB7ZW5hYmxlTG9hZENvbW1lbnRzICYmIDxidXR0b24gb25DbGljaz17TG9hZENvbW1lbnRzfT5Mb2FkIENvbW1lbnRzPC9idXR0b24+fVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJnaXNjdXNcIiBpZD17Q09NTUVOVFNfSUR9IC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgR2lzY3VzXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNhbGxiYWNrIiwidXNlVGhlbWUiLCJzaXRlTWV0YWRhdGEiLCJHaXNjdXMiLCJtYXBwaW5nIiwiZW5hYmxlTG9hZENvbW1lbnRzIiwic2V0RW5hYmxlZExvYWRDb21tZW50cyIsInRoZW1lIiwicmVzb2x2ZWRUaGVtZSIsImNvbW1lbnRzVGhlbWUiLCJjb21tZW50IiwiZ2lzY3VzQ29uZmlnIiwidGhlbWVVUkwiLCJkYXJrVGhlbWUiLCJDT01NRU5UU19JRCIsIkxvYWRDb21tZW50cyIsInNjcmlwdCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNyYyIsInNldEF0dHJpYnV0ZSIsInJlcG8iLCJyZXBvc2l0b3J5SWQiLCJjYXRlZ29yeSIsImNhdGVnb3J5SWQiLCJyZWFjdGlvbnMiLCJtZXRhZGF0YSIsImFzeW5jIiwiY29tbWVudHMiLCJnZXRFbGVtZW50QnlJZCIsImFwcGVuZENoaWxkIiwiaW5uZXJIVE1MIiwiaWZyYW1lIiwicXVlcnlTZWxlY3RvciIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/comments/Giscus.js\n");

/***/ })

}]);