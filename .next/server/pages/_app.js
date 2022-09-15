/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./hooks/useDarkMode/DarkModeProvider.tsx":
/*!************************************************!*\
  !*** ./hooks/useDarkMode/DarkModeProvider.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DarkModeContext\": () => (/* binding */ DarkModeContext),\n/* harmony export */   \"default\": () => (/* binding */ DarkModeProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst DarkModeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    isDarkTheme: true,\n    handleSetIsDarkTheme: ()=>{}\n});\nfunction DarkModeProvider({ children  }) {\n    const { 0: isDarkTheme , 1: setIsDarkTheme  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleSetIsDarkTheme = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {\n        setIsDarkTheme(!isDarkTheme);\n    }, [\n        setIsDarkTheme,\n        isDarkTheme\n    ]);\n    const getMediaQueryPreference = ()=>{\n        const mediaQuery = \"(prefers-color-scheme: dark)\";\n        const mql = window.matchMedia(mediaQuery);\n        const hasPreference = typeof mql.matches === \"boolean\";\n        if (hasPreference) {\n            return mql.matches ? \"dark\" : \"light\";\n        }\n    };\n    const storeUserSetPreference = (preference)=>{\n        localStorage.setItem(\"theme\", preference);\n    };\n    const getUserSetPreference = ()=>{\n        return localStorage.getItem(\"theme\");\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const userSetPreference = getUserSetPreference();\n        if (userSetPreference !== null) {\n            setIsDarkTheme(userSetPreference === \"dark\");\n        } else {\n            const mediaQueryPreference = getMediaQueryPreference();\n            setIsDarkTheme(mediaQueryPreference === \"dark\");\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const root = document.documentElement;\n        if (isDarkTheme !== undefined) {\n            if (isDarkTheme) {\n                root.setAttribute(\"data-theme\", \"dark\");\n                storeUserSetPreference(\"dark\");\n            } else {\n                root.removeAttribute(\"data-theme\");\n                storeUserSetPreference(\"light\");\n            }\n        }\n    }, [\n        isDarkTheme\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DarkModeContext.Provider, {\n        value: {\n            handleSetIsDarkTheme,\n            isDarkTheme\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/tom.keogh/Development/tom-portfolio-four/hooks/useDarkMode/DarkModeProvider.tsx\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VEYXJrTW9kZS9EYXJrTW9kZVByb3ZpZGVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQU1lO0FBTVIsTUFBTUksZUFBZSxpQkFBR0osb0RBQWEsQ0FBa0I7SUFDNURLLFdBQVcsRUFBRSxJQUFJO0lBQ2pCQyxvQkFBb0IsRUFBRSxJQUFNLENBQUMsQ0FBQztDQUMvQixDQUFDLENBQUM7QUFNWSxTQUFTQyxnQkFBZ0IsQ0FBQyxFQUFFQyxRQUFRLEdBQXlCLEVBQUU7SUFDNUUsTUFBTSxLQUFDSCxXQUFXLE1BQUVJLGNBQWMsTUFBSVIsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFFckQsTUFBTUssb0JBQW9CLEdBQUdKLGtEQUFXLENBQ3RDLFdBQVk7UUFDVk8sY0FBYyxDQUFDLENBQUNKLFdBQVcsQ0FBQyxDQUFDO0lBQy9CLENBQUMsRUFDRDtRQUFDSSxjQUFjO1FBQUVKLFdBQVc7S0FBQyxDQUM5QjtJQUVELE1BQU1LLHVCQUF1QixHQUFHLElBQU07UUFDcEMsTUFBTUMsVUFBVSxHQUFHLDhCQUE4QjtRQUNqRCxNQUFNQyxHQUFHLEdBQUdDLE1BQU0sQ0FBQ0MsVUFBVSxDQUFDSCxVQUFVLENBQUM7UUFDekMsTUFBTUksYUFBYSxHQUFHLE9BQU9ILEdBQUcsQ0FBQ0ksT0FBTyxLQUFLLFNBQVM7UUFDdEQsSUFBSUQsYUFBYSxFQUFFO1lBQ2pCLE9BQU9ILEdBQUcsQ0FBQ0ksT0FBTyxHQUFHLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFDeEMsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNQyxzQkFBc0IsR0FBRyxDQUFDQyxVQUFrQixHQUFLO1FBQ3JEQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxPQUFPLEVBQUVGLFVBQVUsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDRCxNQUFNRyxvQkFBb0IsR0FBRyxJQUFNO1FBQ2pDLE9BQU9GLFlBQVksQ0FBQ0csT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRG5CLGdEQUFTLENBQUMsSUFBTTtRQUNkLE1BQU1vQixpQkFBaUIsR0FBR0Ysb0JBQW9CLEVBQUU7UUFDaEQsSUFBSUUsaUJBQWlCLEtBQUssSUFBSSxFQUFFO1lBQzlCZCxjQUFjLENBQUNjLGlCQUFpQixLQUFLLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLE9BQU87WUFDTCxNQUFNQyxvQkFBb0IsR0FBR2QsdUJBQXVCLEVBQUU7WUFDdERELGNBQWMsQ0FBQ2Usb0JBQW9CLEtBQUssTUFBTSxDQUFDLENBQUM7UUFDbEQsQ0FBQztJQUNILENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQckIsZ0RBQVMsQ0FBQyxJQUFNO1FBQ2QsTUFBTXNCLElBQUksR0FBR0MsUUFBUSxDQUFDQyxlQUFlO1FBQ3JDLElBQUl0QixXQUFXLEtBQUt1QixTQUFTLEVBQUU7WUFDN0IsSUFBSXZCLFdBQVcsRUFBRTtnQkFDZm9CLElBQUksQ0FBQ0ksWUFBWSxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDeENaLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pDLE9BQU87Z0JBQ0xRLElBQUksQ0FBQ0ssZUFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNuQ2Isc0JBQXNCLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbEMsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDLEVBQUU7UUFBQ1osV0FBVztLQUFDLENBQUMsQ0FBQztJQUVsQixxQkFDRSw4REFBQ0QsZUFBZSxDQUFDMkIsUUFBUTtRQUFDQyxLQUFLLEVBQUU7WUFBRTFCLG9CQUFvQjtZQUFFRCxXQUFXO1NBQUU7a0JBQ25FRyxRQUFROzs7OztZQUNnQixDQUMzQjtBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob29rcy91c2VEYXJrTW9kZS9EYXJrTW9kZVByb3ZpZGVyLnRzeD8yMTczIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGNyZWF0ZUNvbnRleHQsXG4gIFJlYWN0Tm9kZSxcbiAgdXNlU3RhdGUsXG4gIHVzZUNhbGxiYWNrLFxuICB1c2VFZmZlY3QsXG59IGZyb20gJ3JlYWN0JztcblxudHlwZSBEYXJrTW9kZUNvbnRleHQgPSB7XG4gIGlzRGFya1RoZW1lOiBib29sZWFuO1xuICBoYW5kbGVTZXRJc0RhcmtUaGVtZTogKHByZWZlcmVuY2U6IHN0cmluZykgPT4gdm9pZDtcbn07XG5leHBvcnQgY29uc3QgRGFya01vZGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxEYXJrTW9kZUNvbnRleHQ+KHtcbiAgaXNEYXJrVGhlbWU6IHRydWUsXG4gIGhhbmRsZVNldElzRGFya1RoZW1lOiAoKSA9PiB7fSxcbn0pO1xuXG50eXBlIERhcmtNb2RlUHJvdmlkZXJQcm9wcyA9IHtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhcmtNb2RlUHJvdmlkZXIoeyBjaGlsZHJlbiB9OiBEYXJrTW9kZVByb3ZpZGVyUHJvcHMpIHtcbiAgY29uc3QgW2lzRGFya1RoZW1lLCBzZXRJc0RhcmtUaGVtZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlU2V0SXNEYXJrVGhlbWUgPSB1c2VDYWxsYmFjayhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICBzZXRJc0RhcmtUaGVtZSghaXNEYXJrVGhlbWUpO1xuICAgIH0sXG4gICAgW3NldElzRGFya1RoZW1lLCBpc0RhcmtUaGVtZV1cbiAgKTtcblxuICBjb25zdCBnZXRNZWRpYVF1ZXJ5UHJlZmVyZW5jZSA9ICgpID0+IHtcbiAgICBjb25zdCBtZWRpYVF1ZXJ5ID0gJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknO1xuICAgIGNvbnN0IG1xbCA9IHdpbmRvdy5tYXRjaE1lZGlhKG1lZGlhUXVlcnkpO1xuICAgIGNvbnN0IGhhc1ByZWZlcmVuY2UgPSB0eXBlb2YgbXFsLm1hdGNoZXMgPT09ICdib29sZWFuJztcbiAgICBpZiAoaGFzUHJlZmVyZW5jZSkge1xuICAgICAgcmV0dXJuIG1xbC5tYXRjaGVzID8gJ2RhcmsnIDogJ2xpZ2h0JztcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc3RvcmVVc2VyU2V0UHJlZmVyZW5jZSA9IChwcmVmZXJlbmNlOiBzdHJpbmcpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCBwcmVmZXJlbmNlKTtcbiAgfTtcbiAgY29uc3QgZ2V0VXNlclNldFByZWZlcmVuY2UgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdXNlclNldFByZWZlcmVuY2UgPSBnZXRVc2VyU2V0UHJlZmVyZW5jZSgpO1xuICAgIGlmICh1c2VyU2V0UHJlZmVyZW5jZSAhPT0gbnVsbCkge1xuICAgICAgc2V0SXNEYXJrVGhlbWUodXNlclNldFByZWZlcmVuY2UgPT09ICdkYXJrJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1lZGlhUXVlcnlQcmVmZXJlbmNlID0gZ2V0TWVkaWFRdWVyeVByZWZlcmVuY2UoKTtcbiAgICAgIHNldElzRGFya1RoZW1lKG1lZGlhUXVlcnlQcmVmZXJlbmNlID09PSAnZGFyaycpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICBpZiAoaXNEYXJrVGhlbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKGlzRGFya1RoZW1lKSB7XG4gICAgICAgIHJvb3Quc2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJywgJ2RhcmsnKTtcbiAgICAgICAgc3RvcmVVc2VyU2V0UHJlZmVyZW5jZSgnZGFyaycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcm9vdC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnKTtcbiAgICAgICAgc3RvcmVVc2VyU2V0UHJlZmVyZW5jZSgnbGlnaHQnKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtpc0RhcmtUaGVtZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPERhcmtNb2RlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBoYW5kbGVTZXRJc0RhcmtUaGVtZSwgaXNEYXJrVGhlbWUgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9EYXJrTW9kZUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJEYXJrTW9kZUNvbnRleHQiLCJpc0RhcmtUaGVtZSIsImhhbmRsZVNldElzRGFya1RoZW1lIiwiRGFya01vZGVQcm92aWRlciIsImNoaWxkcmVuIiwic2V0SXNEYXJrVGhlbWUiLCJnZXRNZWRpYVF1ZXJ5UHJlZmVyZW5jZSIsIm1lZGlhUXVlcnkiLCJtcWwiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwiaGFzUHJlZmVyZW5jZSIsIm1hdGNoZXMiLCJzdG9yZVVzZXJTZXRQcmVmZXJlbmNlIiwicHJlZmVyZW5jZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJnZXRVc2VyU2V0UHJlZmVyZW5jZSIsImdldEl0ZW0iLCJ1c2VyU2V0UHJlZmVyZW5jZSIsIm1lZGlhUXVlcnlQcmVmZXJlbmNlIiwicm9vdCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwidW5kZWZpbmVkIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/useDarkMode/DarkModeProvider.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useDarkMode_DarkModeProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useDarkMode/DarkModeProvider */ \"./hooks/useDarkMode/DarkModeProvider.tsx\");\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_hooks_useDarkMode_DarkModeProvider__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/tom.keogh/Development/tom-portfolio-four/pages/_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/tom.keogh/Development/tom-portfolio-four/pages/_app.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUErQjtBQUVzQztBQUVyRSxTQUFTQyxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQVksRUFBRTtJQUNqRCxxQkFDRSw4REFBQ0gsMkVBQWdCO2tCQUNmLDRFQUFDRSxTQUFTO1lBQUUsR0FBR0MsU0FBUzs7Ozs7Z0JBQUk7Ozs7O1lBQ1gsQ0FDbkI7QUFDSixDQUFDO0FBRUQsaUVBQWVGLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCBEYXJrTW9kZVByb3ZpZGVyIGZyb20gJy4uL2hvb2tzL3VzZURhcmtNb2RlL0RhcmtNb2RlUHJvdmlkZXInO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPERhcmtNb2RlUHJvdmlkZXI+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9EYXJrTW9kZVByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJEYXJrTW9kZVByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();