(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"), require("fp-small"));
	else if(typeof define === 'function' && define.amd)
		define("infinity-react-transition", ["React", "prop-types", "fp-small"], factory);
	else if(typeof exports === 'object')
		exports["infinity-react-transition"] = factory(require("react"), require("prop-types"), require("fp-small"));
	else
		root["infinity-react-transition"] = factory(root["React"], root["prop-types"], root["fp-small"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Transition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transition_css__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transition_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__transition_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_fp_small__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_fp_small___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_fp_small__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/**
 * A Helper class to extract single Element
 * @param {PropTypes.element} children
 * @param {object} props
 * @returns {ReactNode}
 */

var getTransitionElement = function getTransitionElement(children) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return Object(__WEBPACK_IMPORTED_MODULE_3_fp_small__["tryCatch"])(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.only, children).map(function (x) {
    return x;
  }).fold(function () {
    return {
      valid: false,
      elem: children
    };
  }, function (x) {
    return {
      valid: true,
      elem: x
    };
  });
};

var getPropFromEvents = function getPropFromEvents(events, event, prop) {
  return Object(__WEBPACK_IMPORTED_MODULE_3_fp_small__["safeProp"])(event, events).map(Object(__WEBPACK_IMPORTED_MODULE_3_fp_small__["safeProp"])(prop)).chain(function (x) {
    return x;
  }).fold(function () {
    return "";
  }, function (x) {
    return x;
  });
};
/**
 * A Component that adds transition to it's Children on Mount and UnMount
 * @class Transition
 */


var Transition =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Transition, _React$Component);

  function Transition() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Transition);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Transition)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "mount", false);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "ref", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createRef());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "transitionEndHandler", function (e) {
      _this.props.onTransitionEnd && _this.props.onTransitionEnd(_this.emittedEvent || _this.props.event, e);
      _this.emittedEvent = "";
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "emittedEvent", "");

    return _this;
  }

  _createClass(Transition, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.mount = true;

      if (this.props.listenToEvents && this.ref.current) {
        Object.entries(this.props.eventHandlers).map(function (x, i) {
          _this2.ref.current.addEventListener(x[0], function (e) {
            _this2.emittedEvent = x[0];
            var _x$1$style = x[1].style,
                style = _x$1$style === void 0 ? {} : _x$1$style;

            for (var name in style) {
              _this2.ref.current.style[name] = style[name];
            }
          });

          return x;
        });
      }
    } // componentWillUnmount() {
    //   const node = this.ref.current;
    //   if (node) {
    //     node.removeEventListener("animationend", this.transitionEndHandler);
    //     node.removeEventListener("transitionend", this.transitionEndHandler);
    //   }
    // }

    /**
     * Adding Transition when Mounted
     * @method onMount
     */

  }, {
    key: "onMount",
    value: function onMount() {}
    /**
     * Adding Transition when Un Mounting
     * @method onUnMount
     */

  }, {
    key: "onUnMount",
    value: function onUnMount() {}
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          _this$props$eventHand = _this$props.eventHandlers,
          eventHandlers = _this$props$eventHand === void 0 ? {} : _this$props$eventHand,
          event = _this$props.event,
          _this$props$delay = _this$props.delay,
          delay = _this$props$delay === void 0 ? 0 : _this$props$delay,
          _this$props$duration = _this$props.duration,
          duration = _this$props$duration === void 0 ? "1s" : _this$props$duration,
          _this$props$timingFun = _this$props.timingFunction,
          timingFunction = _this$props$timingFun === void 0 ? "ease" : _this$props$timingFun,
          _this$props$animation = _this$props.animationFillMode,
          animationFillMode = _this$props$animation === void 0 ? "forwards" : _this$props$animation,
          _this$props$property = _this$props.property,
          property = _this$props$property === void 0 ? "none" : _this$props$property,
          otherProps = _objectWithoutProperties(_this$props, ["children", "eventHandlers", "event", "delay", "duration", "timingFunction", "animationFillMode", "property"]);

      var _getTransitionElement = getTransitionElement(children, otherProps),
          valid = _getTransitionElement.valid,
          elem = _getTransitionElement.elem,
          _getTransitionElement2 = _getTransitionElement.elem.props,
          _getTransitionElement3 = _getTransitionElement2.className,
          elemClassName = _getTransitionElement3 === void 0 ? "" : _getTransitionElement3,
          _getTransitionElement4 = _getTransitionElement2.style,
          elemStyle = _getTransitionElement4 === void 0 ? {} : _getTransitionElement4;

      var className = getPropFromEvents(eventHandlers, !this.mount ? "mount" : event, "className");

      var style = _objectSpread({}, elemStyle, {
        animationDuration: duration,
        transitionDuration: duration,
        animationDelay: delay,
        transitionDelay: delay,
        transitionTimingFunction: timingFunction,
        animationTimingFunction: timingFunction,
        transitionProperty: property,
        animationFillMode: animationFillMode
      }, getPropFromEvents(eventHandlers, event ? event : !this.mount ? "mount" : "", "style") || {});

      return valid ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(elem.type, _extends({}, elem.props, {
        style: style,
        className: elemClassName + " transition " + className,
        onAnimationEnd: this.transitionEndHandler,
        onTransitionEnd: this.transitionEndHandler,
        ref: this.ref
      })) : elem;
    }
  }]);

  return Transition;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

_defineProperty(Transition, "propTypes", {
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.element.isRequired,
  onTransitionEnd: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  eventHandlers: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.objectOf(__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.shape({
    className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
    style: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object
  })),
  event: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  duration: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string]),
  delay: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string]),
  timingFunction: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
});



/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ })
/******/ ]);
});