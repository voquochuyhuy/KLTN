"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _regeneratorRuntime = require("regenerator-runtime");

var _databaseConnection = _interopRequireDefault(require("../databaseConnection"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _authencationJWT = require("../middleware/authencationJWT");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var router = _express["default"].Router();
/* LOGIN */


router.post('/api/login', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var _req$body, username, password, data, accessToken;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, username = _req$body.username, password = _req$body.password;
            console.log("select * from Users where Account = \"".concat(username, "\" and PasswordHash = \"").concat(password, "\""));
            _context.next = 4;
            return (0, _databaseConnection["default"])("SELECT * FROM Users WHERE Account = '".concat(username, "' AND CONVERT(VARCHAR, PasswordHash) = '").concat(password, "'"));

          case 4:
            data = _context.sent;

            if (data) {
              accessToken = _jsonwebtoken["default"].sign({
                username: data.recordset[0].DisplayName,
                role: 1
              }, _authencationJWT.accessTokenSecret);
              res.json({
                accessToken: accessToken
              });
            } else {
              res.send('Username or password incorrect');
            }

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());
/* LOGOUT */

router.put('/api/logout', /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var data;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _databaseConnection["default"])('select * from Posts');

          case 2:
            data = _context2.sent;
            res.send({
              data: data
            });

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}());
var _default = router;
exports["default"] = _default;