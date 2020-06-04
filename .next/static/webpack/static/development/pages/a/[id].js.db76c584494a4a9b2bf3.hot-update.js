webpackHotUpdate("static\\development\\pages\\a\\[id].js",{

/***/ "./components/NavigationBar.js":
/*!*************************************!*\
  !*** ./components/NavigationBar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/auth */ "./utils/auth.js");






var _jsxFileName = "F:\\ruler\\work\\online-auction\\components\\NavigationBar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var NavigationBar = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(NavigationBar, _React$Component);

  var _super = _createSuper(NavigationBar);

  function NavigationBar(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NavigationBar);

    _this = _super.call(this, props);
    _this.toggle = _this.toggle.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.state = {
      isOpen: false
    };
    _this.handleLogout = _this.handleLogout.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NavigationBar, [{
    key: "toggle",
    value: function toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: "handleLogout",
    value: function handleLogout() {
      Object(_utils_auth__WEBPACK_IMPORTED_MODULE_10__["logout"])();
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Navbar"], {
        color: "light",
        light: true,
        expand: "md",
        style: {
          boxShadow: "0px 10px 5px 0px #eee",
          minHeight: "70px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 7
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavbarBrand"], {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 9
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faGavel"],
        width: "16",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }
      }), " Auction"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavbarToggler"], {
        onClick: this.toggle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 9
        }
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Collapse"], {
        isOpen: this.state.isOpen,
        navbar: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 9
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Nav"], {
        className: "ml-auto",
        navbar: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavItem"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 13
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
        className: this.props.page === "home" ? "active" : "",
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 15
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faHome"],
        width: "16",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 17
        }
      }), " Home page")), this.props.loggedIn ? "" : __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavItem"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 15
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
        className: this.props.page === "registration" ? "active" : "",
        href: "/registration",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 17
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faList"],
        width: "16",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 19
        }
      }), " Registration")), this.props.loggedIn ? "" : __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavItem"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 15
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
        className: this.props.page === "login" ? "active" : "",
        href: "/login",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 17
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faSignInAlt"],
        width: "16",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 19
        }
      }), " Login")), this.props.loggedIn ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavItem"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 15
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
        className: this.props.page === "sell" ? "active" : "",
        href: "/sell",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 17
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faClipboard"],
        width: "16",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 19
        }
      }), " Start Sales")) : "", __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavItem"], {
        style: {
          marginLeft: "10px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 13
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Input"], {
        type: "search",
        name: "search",
        id: "exampleSearch",
        placeholder: "arama yap\u0131n...",
        onKeyUp: this.props.handleSearch,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 15
        }
      })), this.props.loggedIn ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["UncontrolledDropdown"], {
        nav: true,
        inNavbar: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 15
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["DropdownToggle"], {
        className: this.props.page === "me" ? "active" : "",
        nav: true,
        caret: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 17
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faUser"],
        width: "16",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 19
        }
      }), " ", this.props.user.nameSurname ? this.props.user.nameSurname : ""), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["DropdownMenu"], {
        right: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 17
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["DropdownItem"], {
        href: "/sales",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 19
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faHandHoldingUsd"],
        width: "16",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 21
        }
      }), " Who sold"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["DropdownItem"], {
        href: "/purchases",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 19
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faShoppingCart"],
        width: "16",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 21
        }
      }), " ", "Received"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["DropdownItem"], {
        divider: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 19
        }
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["DropdownItem"], {
        onClick: this.handleLogout,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 19
        }
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faSignOutAlt"],
        width: "16",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 21
        }
      }), " Logout"))) : "")));
    }
  }]);

  return NavigationBar;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (NavigationBar);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdmlnYXRpb25CYXIuanMiXSwibmFtZXMiOlsiTmF2aWdhdGlvbkJhciIsInByb3BzIiwidG9nZ2xlIiwiYmluZCIsInN0YXRlIiwiaXNPcGVuIiwiaGFuZGxlTG9nb3V0Iiwic2V0U3RhdGUiLCJsb2dvdXQiLCJib3hTaGFkb3ciLCJtaW5IZWlnaHQiLCJmYUdhdmVsIiwicGFnZSIsImZhSG9tZSIsImxvZ2dlZEluIiwiZmFMaXN0IiwiZmFTaWduSW5BbHQiLCJmYUNsaXBib2FyZCIsIm1hcmdpbkxlZnQiLCJoYW5kbGVTZWFyY2giLCJmYVVzZXIiLCJ1c2VyIiwibmFtZVN1cm5hbWUiLCJmYUhhbmRIb2xkaW5nVXNkIiwiZmFTaG9wcGluZ0NhcnQiLCJmYVNpZ25PdXRBbHQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBa0JBO0FBQ0E7QUFXQTs7SUFFTUEsYTs7Ozs7QUFDSix5QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLE1BQUwsR0FBYyxNQUFLQSxNQUFMLENBQVlDLElBQVoseUdBQWQ7QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsWUFBTSxFQUFFO0FBREcsS0FBYjtBQUdBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkgsSUFBbEIseUdBQXBCO0FBTmlCO0FBT2xCOzs7OzZCQUNRO0FBQ1AsV0FBS0ksUUFBTCxDQUFjO0FBQ1pGLGNBQU0sRUFBRSxDQUFDLEtBQUtELEtBQUwsQ0FBV0M7QUFEUixPQUFkO0FBR0Q7OzttQ0FDYztBQUNiRyxpRUFBTTtBQUNQOzs7NkJBQ1E7QUFDUCxhQUNFLE1BQUMsaURBQUQ7QUFDRSxhQUFLLEVBQUMsT0FEUjtBQUVFLGFBQUssTUFGUDtBQUdFLGNBQU0sRUFBQyxJQUhUO0FBSUUsYUFBSyxFQUFF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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsdURBQUQ7QUFBYyxZQUFJLEVBQUMsUUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsOEVBQUQ7QUFBaUIsWUFBSSxFQUFFQyxrRkFBdkI7QUFBeUMsYUFBSyxFQUFDLElBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixjQURGLEVBS0UsTUFBQyx1REFBRDtBQUFjLFlBQUksRUFBQyxZQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyw4RUFBRDtBQUFpQixZQUFJLEVBQUVDLGdGQUF2QjtBQUF1QyxhQUFLLEVBQUMsSUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLEVBQ3VELEdBRHZELGFBTEYsRUFTRSxNQUFDLHVEQUFEO0FBQWMsZUFBTyxNQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBVEYsRUFVRSxNQUFDLHVEQUFEO0FBQWMsZUFBTyxFQUFFLEtBQUtsQixZQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyw4RUFBRDtBQUFpQixZQUFJLEVBQUVtQiw4RUFBdkI7QUFBcUMsYUFBSyxFQUFDLElBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixZQVZGLENBWEYsQ0FERCxHQTRCQyxFQWxGSixDQURGLENBVkYsQ0FERjtBQW9HRDs7OztFQXRIeUJDLDRDQUFLLENBQUNDLFM7O0FBeUhuQjNCLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxhXFxbaWRdLmpzLmRiNzZjNTg0NDk0YTRhOWIyYmYzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbGxhcHNlLFxyXG4gIE5hdmJhcixcclxuICBOYXZiYXJUb2dnbGVyLFxyXG4gIE5hdmJhckJyYW5kLFxyXG4gIE5hdixcclxuICBOYXZJdGVtLFxyXG4gIE5hdkxpbmssXHJcbiAgRm9ybSxcclxuICBGb3JtR3JvdXAsXHJcbiAgTGFiZWwsXHJcbiAgSW5wdXQsXHJcbiAgVW5jb250cm9sbGVkRHJvcGRvd24sXHJcbiAgRHJvcGRvd25Ub2dnbGUsXHJcbiAgRHJvcGRvd25NZW51LFxyXG4gIERyb3Bkb3duSXRlbSxcclxufSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5cclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQge1xyXG4gIGZhSG9tZSxcclxuICBmYVNpZ25JbkFsdCxcclxuICBmYUxpc3QsXHJcbiAgZmFHYXZlbCxcclxuICBmYVVzZXIsXHJcbiAgZmFTaWduT3V0QWx0LFxyXG4gIGZhSGFuZEhvbGRpbmdVc2QsXHJcbiAgZmFTaG9wcGluZ0NhcnQsXHJcbiAgZmFDbGlwYm9hcmQsXHJcbn0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgeyBsb2dvdXQgfSBmcm9tIFwiLi4vdXRpbHMvYXV0aFwiO1xyXG5cclxuY2xhc3MgTmF2aWdhdGlvbkJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMudG9nZ2xlID0gdGhpcy50b2dnbGUuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGlzT3BlbjogZmFsc2UsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5oYW5kbGVMb2dvdXQgPSB0aGlzLmhhbmRsZUxvZ291dC5iaW5kKHRoaXMpO1xyXG4gIH1cclxuICB0b2dnbGUoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgaXNPcGVuOiAhdGhpcy5zdGF0ZS5pc09wZW4sXHJcbiAgICB9KTtcclxuICB9XHJcbiAgaGFuZGxlTG9nb3V0KCkge1xyXG4gICAgbG9nb3V0KCk7XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxOYXZiYXJcclxuICAgICAgICBjb2xvcj1cImxpZ2h0XCJcclxuICAgICAgICBsaWdodFxyXG4gICAgICAgIGV4cGFuZD1cIm1kXCJcclxuICAgICAgICBzdHlsZT17eyBib3hTaGFkb3c6IFwiMHB4IDEwcHggNXB4IDBweCAjZWVlXCIsIG1pbkhlaWdodDogXCI3MHB4XCIgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxOYXZiYXJCcmFuZCBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUdhdmVsfSB3aWR0aD1cIjE2XCIgLz4gQXVjdGlvblxyXG4gICAgICAgIDwvTmF2YmFyQnJhbmQ+XHJcbiAgICAgICAgPE5hdmJhclRvZ2dsZXIgb25DbGljaz17dGhpcy50b2dnbGV9IC8+XHJcbiAgICAgICAgPENvbGxhcHNlIGlzT3Blbj17dGhpcy5zdGF0ZS5pc09wZW59IG5hdmJhcj5cclxuICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibWwtYXV0b1wiIG5hdmJhcj5cclxuICAgICAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmtcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5wYWdlID09PSBcImhvbWVcIiA/IFwiYWN0aXZlXCIgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgaHJlZj1cIi9cIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFIb21lfSB3aWR0aD1cIjE2XCIgLz4gSG9tZSBwYWdlXHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmxvZ2dlZEluID8gKFxyXG4gICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5wYWdlID09PSBcInJlZ2lzdHJhdGlvblwiID8gXCJhY3RpdmVcIiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIvcmVnaXN0cmF0aW9uXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUxpc3R9IHdpZHRoPVwiMTZcIiAvPiBSZWdpc3RyYXRpb25cclxuICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmxvZ2dlZEluID8gKFxyXG4gICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5wYWdlID09PSBcImxvZ2luXCIgPyBcImFjdGl2ZVwiIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgaHJlZj1cIi9sb2dpblwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTaWduSW5BbHR9IHdpZHRoPVwiMTZcIiAvPiBMb2dpblxyXG4gICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAge3RoaXMucHJvcHMubG9nZ2VkSW4gPyAoXHJcbiAgICAgICAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMucHJvcHMucGFnZSA9PT0gXCJzZWxsXCIgPyBcImFjdGl2ZVwiIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgaHJlZj1cIi9zZWxsXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNsaXBib2FyZH0gd2lkdGg9XCIxNlwiIC8+IFN0YXJ0IFNhbGVzXHJcbiAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPE5hdkl0ZW0gc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJzZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJleGFtcGxlU2VhcmNoXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiYXJhbWEgeWFwxLFuLi4uXCJcclxuICAgICAgICAgICAgICAgIG9uS2V5VXA9e3RoaXMucHJvcHMuaGFuZGxlU2VhcmNofVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMubG9nZ2VkSW4gPyAoXHJcbiAgICAgICAgICAgICAgPFVuY29udHJvbGxlZERyb3Bkb3duIG5hdiBpbk5hdmJhcj5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93blRvZ2dsZVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMucHJvcHMucGFnZSA9PT0gXCJtZVwiID8gXCJhY3RpdmVcIiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgIG5hdlxyXG4gICAgICAgICAgICAgICAgICBjYXJldFxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXNlcn0gd2lkdGg9XCIxNlwiIC8+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy51c2VyLm5hbWVTdXJuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnByb3BzLnVzZXIubmFtZVN1cm5hbWVcclxuICAgICAgICAgICAgICAgICAgICA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duVG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudSByaWdodD5cclxuICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBocmVmPVwiL3NhbGVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUhhbmRIb2xkaW5nVXNkfSB3aWR0aD1cIjE2XCIgLz4gV2hvXHJcbiAgICAgICAgICAgICAgICAgICAgc29sZFxyXG4gICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBocmVmPVwiL3B1cmNoYXNlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTaG9wcGluZ0NhcnR9IHdpZHRoPVwiMTZcIiAvPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICBSZWNlaXZlZFxyXG4gICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBkaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gb25DbGljaz17dGhpcy5oYW5kbGVMb2dvdXR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTaWduT3V0QWx0fSB3aWR0aD1cIjE2XCIgLz4gTG9nb3V0XHJcbiAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnU+XHJcbiAgICAgICAgICAgICAgPC9VbmNvbnRyb2xsZWREcm9wZG93bj5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L05hdj5cclxuICAgICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICA8L05hdmJhcj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uQmFyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9