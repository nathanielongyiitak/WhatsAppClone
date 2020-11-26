webpackHotUpdate("main",{

/***/ "./src/app/modules/Admin/index.jsx":
/*!*****************************************!*\
  !*** ./src/app/modules/Admin/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _capbay_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_capbay/layout */ "./src/_capbay/layout/index.js");
/* harmony import */ var _capbay_layout_components_content_ContentRoute__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_capbay/layout/components/content/ContentRoute */ "./src/_capbay/layout/components/content/ContentRoute.jsx");
/* harmony import */ var _pages_Dashboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/Dashboard */ "./src/app/modules/Admin/pages/Dashboard/index.jsx");
/* harmony import */ var _pages_Roles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/Roles */ "./src/app/modules/Admin/pages/Roles/index.jsx");
/* harmony import */ var _pages_Companies__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/Companies */ "./src/app/modules/Admin/pages/Companies/index.jsx");
/* harmony import */ var _pages_Users__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/Users */ "./src/app/modules/Admin/pages/Users/index.jsx");
/* harmony import */ var _pages_BSFP__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/BSFP */ "./src/app/modules/Admin/pages/BSFP/index.jsx");
/* harmony import */ var _pages_Invoices__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/Invoices */ "./src/app/modules/Admin/pages/Invoices/index.jsx");
/* harmony import */ var _redux_Roles_roleAction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_redux/Roles/roleAction */ "./src/app/modules/Admin/_redux/Roles/roleAction.js");
/* harmony import */ var _config_helpers_ProtectedRoute__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../config/helpers/ProtectedRoute */ "./src/config/helpers/ProtectedRoute.jsx");
/* harmony import */ var _config_helpers_PermissionComponent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../config/helpers/PermissionComponent */ "./src/config/helpers/PermissionComponent.jsx");
var _this = undefined,
    _jsxFileName = "/home/nat/Desktop/Codes/CapBay/sa-reactjs/src/app/modules/Admin/index.jsx";
















var Admin = function Admin() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch(Object(_redux_Roles_roleAction__WEBPACK_IMPORTED_MODULE_11__["getRoleList"])());
  }, [dispatch]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_capbay_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutSplashScreen"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 25
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
    exact: true,
    from: "/admin",
    to: "/admin/dashboard",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_capbay_layout_components_content_ContentRoute__WEBPACK_IMPORTED_MODULE_4__["default"], {
    path: "/admin/dashboard",
    component: _pages_Dashboard__WEBPACK_IMPORTED_MODULE_5__["default"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_config_helpers_ProtectedRoute__WEBPACK_IMPORTED_MODULE_12__["default"], {
    permissionId: 1,
    path: "/admin/roles",
    component: _pages_Roles__WEBPACK_IMPORTED_MODULE_6__["default"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_config_helpers_PermissionComponent__WEBPACK_IMPORTED_MODULE_13__["default"], {
    permissionId: 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_capbay_layout_components_content_ContentRoute__WEBPACK_IMPORTED_MODULE_4__["default"], {
    path: "/admin/companies",
    component: _pages_Companies__WEBPACK_IMPORTED_MODULE_7__["default"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_capbay_layout_components_content_ContentRoute__WEBPACK_IMPORTED_MODULE_4__["default"], {
    path: "/admin/users",
    component: _pages_Users__WEBPACK_IMPORTED_MODULE_8__["default"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_capbay_layout_components_content_ContentRoute__WEBPACK_IMPORTED_MODULE_4__["default"], {
    path: "/admin/bsfp",
    component: _pages_BSFP__WEBPACK_IMPORTED_MODULE_9__["default"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_capbay_layout_components_content_ContentRoute__WEBPACK_IMPORTED_MODULE_4__["default"], {
    path: "/admin/invoices",
    component: _pages_Invoices__WEBPACK_IMPORTED_MODULE_10__["default"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
    to: "/error/error-v1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Admin);

/***/ })

})
//# sourceMappingURL=main.b3a67806a76ccd329b83.hot-update.js.map