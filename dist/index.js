"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./transition.css");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _fpSmall = require("fp-small");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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
  return (0, _fpSmall.tryCatch)(_react.default.Children.only, children).map(function (x) {
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
  return (0, _fpSmall.safeProp)(event, events).map((0, _fpSmall.safeProp)(prop)).chain(function (x) {
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
function (_PureComponent) {
  _inherits(Transition, _PureComponent);

  function Transition() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Transition);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Transition)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "mount", false);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "ref", _react.default.createRef());

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

      return valid ? _react.default.createElement(elem.type, _extends({}, elem.props, {
        style: style,
        className: elemClassName + " transition " + className,
        onAnimationEnd: this.transitionEndHandler,
        onTransitionEnd: this.transitionEndHandler,
        ref: this.ref
      })) : elem;
    }
  }]);

  return Transition;
}(_react.PureComponent);

exports.default = Transition;

_defineProperty(Transition, "propTypes", {
  children: _propTypes.default.element.isRequired,
  onTransitionEnd: _propTypes.default.func,
  eventHandlers: _propTypes.default.objectOf(_propTypes.default.shape({
    className: _propTypes.default.string,
    style: _propTypes.default.object
  })),
  event: _propTypes.default.string,
  duration: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  delay: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  timingFunction: _propTypes.default.string
});