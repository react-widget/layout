
"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = Header;
exports.Content = Content;
exports.Footer = Footer;
exports.Sider = Sider;
exports.default = exports.Layout = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var LayoutItem =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(LayoutItem, _React$Component);

  function LayoutItem() {
    (0, _classCallCheck2.default)(this, LayoutItem);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(LayoutItem).apply(this, arguments));
  }

  (0, _createClass2.default)(LayoutItem, [{
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          prefixCls = _this$props.prefixCls,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["className", "children", "prefixCls"]);
      var classString = (0, _classnames.default)((_classNames = {}, (0, _defineProperty2.default)(_classNames, prefixCls, true), (0, _defineProperty2.default)(_classNames, className, className), _classNames));
      return _react.default.createElement("div", (0, _extends2.default)({
        className: classString
      }, props), children);
    }
  }]);
  return LayoutItem;
}(_react.default.Component);

var Layout =
/*#__PURE__*/
function (_React$Component2) {
  (0, _inherits2.default)(Layout, _React$Component2);

  function Layout() {
    (0, _classCallCheck2.default)(this, Layout);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Layout).apply(this, arguments));
  }

  (0, _createClass2.default)(Layout, [{
    key: "render",
    value: function render() {
      var _classNames2;

      var _this$props2 = this.props,
          className = _this$props2.className,
          _this$props2$children = _this$props2.children,
          children = _this$props2$children === void 0 ? [] : _this$props2$children,
          prefixCls = _this$props2.prefixCls,
          props = (0, _objectWithoutProperties2.default)(_this$props2, ["className", "children", "prefixCls"]);
      var hasSidebar = false;

      _react.default.Children.forEach(children, function (item) {
        if (item.type && item.type.IS_LAYOUT_SIDER) {
          hasSidebar = true;
        }
      });

      var classString = (0, _classnames.default)((_classNames2 = {}, (0, _defineProperty2.default)(_classNames2, prefixCls, true), (0, _defineProperty2.default)(_classNames2, className, className), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-has-sider"), hasSidebar), _classNames2));
      return _react.default.createElement("div", (0, _extends2.default)({}, props, {
        className: classString
      }), children);
    }
  }]);
  return Layout;
}(_react.default.Component);

exports.Layout = Layout;
(0, _defineProperty2.default)(Layout, "propTypes", {
  prefixCls: _propTypes.default.string
});
(0, _defineProperty2.default)(Layout, "defaultProps", {
  prefixCls: 'rw-layout'
});

function Header(props) {
  return _react.default.createElement(LayoutItem, (0, _extends2.default)({
    prefixCls: "rw-layout-header"
  }, props));
}

function Content(props) {
  return _react.default.createElement(LayoutItem, (0, _extends2.default)({
    prefixCls: "rw-layout-content"
  }, props));
}

function Footer(props) {
  return _react.default.createElement(LayoutItem, (0, _extends2.default)({
    prefixCls: "rw-layout-footer"
  }, props));
}

function Sider(props) {
  return _react.default.createElement(LayoutItem, (0, _extends2.default)({
    prefixCls: "rw-layout-sider"
  }, props));
}

Sider.IS_LAYOUT_SIDER = true;
Layout.Header = Header;
Layout.Content = Content;
Layout.Footer = Footer;
Layout.Sider = Sider;
var _default = Layout;
exports.default = _default;