"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "components_comments_Giscus_js";
exports.ids = ["components_comments_Giscus_js"];
exports.modules = {

/***/ "./components/comments/Giscus.js":
/*!***************************************!*\
  !*** ./components/comments/Giscus.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-themes */ \"next-themes\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/data/siteMetadata */ \"./data/siteMetadata.js\");\n/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst Giscus = ({ mapping  })=>{\n    const { 0: enableLoadComments , 1: setEnabledLoadComments  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const { theme , resolvedTheme  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme)();\n    const commentsTheme = (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default().comment.giscusConfig.themeURL) === '' ? theme === 'dark' || resolvedTheme === 'dark' ? (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default().comment.giscusConfig.darkTheme) : (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default().comment.giscusConfig.theme) : (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default().comment.giscusConfig.themeURL);\n    const COMMENTS_ID = 'comments-container';\n    const LoadComments = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        setEnabledLoadComments(false);\n        const script = document.createElement('script');\n        script.src = 'https://giscus.app/client.js';\n        script.setAttribute('data-repo', (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default().comment.giscusConfig.repo));\n        script.setAttribute('data-repo-id', (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default().comment.giscusConfig.repositoryId));\n        script.setAttribute('data-category', (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default().comment.giscusConfig.category));\n        script.setAttribute('data-category-id', (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default().comment.giscusConfig.categoryId));\n        script.setAttribute('data-mapping', mapping);\n        script.setAttribute('data-reactions-enabled', (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default().comment.giscusConfig.reactions));\n        script.setAttribute('data-emit-metadata', (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default().comment.giscusConfig.metadata));\n        script.setAttribute('data-theme', commentsTheme);\n        script.setAttribute('crossorigin', 'anonymous');\n        script.async = true;\n        const comments1 = document.getElementById(COMMENTS_ID);\n        if (comments1) comments1.appendChild(script);\n        return ()=>{\n            const comments = document.getElementById(COMMENTS_ID);\n            if (comments) comments.innerHTML = '';\n        };\n    }, [\n        commentsTheme,\n        mapping\n    ]);\n    // Reload on theme change\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const iframe = document.querySelector('iframe.giscus-frame');\n        if (!iframe) return;\n        LoadComments();\n    }, [\n        LoadComments\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"pt-6 pb-6 text-center text-gray-700 dark:text-gray-300\",\n        __source: {\n            fileName: \"/home/svn/porto/components/comments/Giscus.js\",\n            lineNumber: 50,\n            columnNumber: 5\n        },\n        __self: undefined,\n        children: [\n            enableLoadComments && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                onClick: LoadComments,\n                __source: {\n                    fileName: \"/home/svn/porto/components/comments/Giscus.js\",\n                    lineNumber: 51,\n                    columnNumber: 30\n                },\n                __self: undefined,\n                children: \"Load Comments\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"giscus\",\n                id: COMMENTS_ID,\n                __source: {\n                    fileName: \"/home/svn/porto/components/comments/Giscus.js\",\n                    lineNumber: 52,\n                    columnNumber: 7\n                },\n                __self: undefined\n            })\n        ]\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Giscus);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LXN0YXJ0ZXItYmxvZy8uL2NvbXBvbmVudHMvY29tbWVudHMvR2lzY3VzLmpzPzliNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ25leHQtdGhlbWVzJ1xuXG5pbXBvcnQgc2l0ZU1ldGFkYXRhIGZyb20gJ0AvZGF0YS9zaXRlTWV0YWRhdGEnXG5cbmNvbnN0IEdpc2N1cyA9ICh7IG1hcHBpbmcgfSkgPT4ge1xuICBjb25zdCBbZW5hYmxlTG9hZENvbW1lbnRzLCBzZXRFbmFibGVkTG9hZENvbW1lbnRzXSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IHsgdGhlbWUsIHJlc29sdmVkVGhlbWUgfSA9IHVzZVRoZW1lKClcbiAgY29uc3QgY29tbWVudHNUaGVtZSA9XG4gICAgc2l0ZU1ldGFkYXRhLmNvbW1lbnQuZ2lzY3VzQ29uZmlnLnRoZW1lVVJMID09PSAnJ1xuICAgICAgPyB0aGVtZSA9PT0gJ2RhcmsnIHx8IHJlc29sdmVkVGhlbWUgPT09ICdkYXJrJ1xuICAgICAgICA/IHNpdGVNZXRhZGF0YS5jb21tZW50Lmdpc2N1c0NvbmZpZy5kYXJrVGhlbWVcbiAgICAgICAgOiBzaXRlTWV0YWRhdGEuY29tbWVudC5naXNjdXNDb25maWcudGhlbWVcbiAgICAgIDogc2l0ZU1ldGFkYXRhLmNvbW1lbnQuZ2lzY3VzQ29uZmlnLnRoZW1lVVJMXG5cbiAgY29uc3QgQ09NTUVOVFNfSUQgPSAnY29tbWVudHMtY29udGFpbmVyJ1xuXG4gIGNvbnN0IExvYWRDb21tZW50cyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRFbmFibGVkTG9hZENvbW1lbnRzKGZhbHNlKVxuICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG4gICAgc2NyaXB0LnNyYyA9ICdodHRwczovL2dpc2N1cy5hcHAvY2xpZW50LmpzJ1xuICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcmVwbycsIHNpdGVNZXRhZGF0YS5jb21tZW50Lmdpc2N1c0NvbmZpZy5yZXBvKVxuICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcmVwby1pZCcsIHNpdGVNZXRhZGF0YS5jb21tZW50Lmdpc2N1c0NvbmZpZy5yZXBvc2l0b3J5SWQpXG4gICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnZGF0YS1jYXRlZ29yeScsIHNpdGVNZXRhZGF0YS5jb21tZW50Lmdpc2N1c0NvbmZpZy5jYXRlZ29yeSlcbiAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdkYXRhLWNhdGVnb3J5LWlkJywgc2l0ZU1ldGFkYXRhLmNvbW1lbnQuZ2lzY3VzQ29uZmlnLmNhdGVnb3J5SWQpXG4gICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnZGF0YS1tYXBwaW5nJywgbWFwcGluZylcbiAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdkYXRhLXJlYWN0aW9ucy1lbmFibGVkJywgc2l0ZU1ldGFkYXRhLmNvbW1lbnQuZ2lzY3VzQ29uZmlnLnJlYWN0aW9ucylcbiAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdkYXRhLWVtaXQtbWV0YWRhdGEnLCBzaXRlTWV0YWRhdGEuY29tbWVudC5naXNjdXNDb25maWcubWV0YWRhdGEpXG4gICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnZGF0YS10aGVtZScsIGNvbW1lbnRzVGhlbWUpXG4gICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnY3Jvc3NvcmlnaW4nLCAnYW5vbnltb3VzJylcbiAgICBzY3JpcHQuYXN5bmMgPSB0cnVlXG5cbiAgICBjb25zdCBjb21tZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKENPTU1FTlRTX0lEKVxuICAgIGlmIChjb21tZW50cykgY29tbWVudHMuYXBwZW5kQ2hpbGQoc2NyaXB0KVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGNvbW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoQ09NTUVOVFNfSUQpXG4gICAgICBpZiAoY29tbWVudHMpIGNvbW1lbnRzLmlubmVySFRNTCA9ICcnXG4gICAgfVxuICB9LCBbY29tbWVudHNUaGVtZSwgbWFwcGluZ10pXG5cbiAgLy8gUmVsb2FkIG9uIHRoZW1lIGNoYW5nZVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGlmcmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lmcmFtZS5naXNjdXMtZnJhbWUnKVxuICAgIGlmICghaWZyYW1lKSByZXR1cm5cbiAgICBMb2FkQ29tbWVudHMoKVxuICB9LCBbTG9hZENvbW1lbnRzXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNiBwYi02IHRleHQtY2VudGVyIHRleHQtZ3JheS03MDAgZGFyazp0ZXh0LWdyYXktMzAwXCI+XG4gICAgICB7ZW5hYmxlTG9hZENvbW1lbnRzICYmIDxidXR0b24gb25DbGljaz17TG9hZENvbW1lbnRzfT5Mb2FkIENvbW1lbnRzPC9idXR0b24+fVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJnaXNjdXNcIiBpZD17Q09NTUVOVFNfSUR9IC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgR2lzY3VzXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNhbGxiYWNrIiwidXNlVGhlbWUiLCJzaXRlTWV0YWRhdGEiLCJHaXNjdXMiLCJtYXBwaW5nIiwiZW5hYmxlTG9hZENvbW1lbnRzIiwic2V0RW5hYmxlZExvYWRDb21tZW50cyIsInRoZW1lIiwicmVzb2x2ZWRUaGVtZSIsImNvbW1lbnRzVGhlbWUiLCJjb21tZW50IiwiZ2lzY3VzQ29uZmlnIiwidGhlbWVVUkwiLCJkYXJrVGhlbWUiLCJDT01NRU5UU19JRCIsIkxvYWRDb21tZW50cyIsInNjcmlwdCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNyYyIsInNldEF0dHJpYnV0ZSIsInJlcG8iLCJyZXBvc2l0b3J5SWQiLCJjYXRlZ29yeSIsImNhdGVnb3J5SWQiLCJyZWFjdGlvbnMiLCJtZXRhZGF0YSIsImFzeW5jIiwiY29tbWVudHMiLCJnZXRFbGVtZW50QnlJZCIsImFwcGVuZENoaWxkIiwiaW5uZXJIVE1MIiwiaWZyYW1lIiwicXVlcnlTZWxlY3RvciIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/comments/Giscus.js\n");

/***/ })

};
;