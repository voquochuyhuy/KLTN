"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _index = _interopRequireDefault(require("./routes/index"));

var _users = _interopRequireDefault(require("./routes/users"));

var _posts = _interopRequireDefault(require("./routes/posts"));

var _auth = _interopRequireDefault(require("./routes/auth"));

var _log = _interopRequireDefault(require("./routes/log"));

var _userAdmin = _interopRequireDefault(require("./routes/user-admin"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _cookieParser["default"])());
app.use(_bodyParser["default"].json());
app.use(_express["default"]["static"](_path["default"].join(__dirname, '../public')));
app.use((0, _cors["default"])());
app.use('/', _index["default"]);
app.use('/users', _users["default"]);
app.use('/posts', _posts["default"]);
app.use('/auth', _auth["default"]);
app.use('/log', _log["default"]);
app.use('/user-admin', _userAdmin["default"]);
var _default = app;
exports["default"] = _default;