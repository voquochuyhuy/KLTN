"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _moment = _interopRequireDefault(require("moment"));

var _regeneratorRuntime = require("regenerator-runtime");

var _databaseConnection = _interopRequireDefault(require("../databaseConnection"));

var _authencationJWT = require("../middleware/authencationJWT");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var router = _express["default"].Router();
/* GET LOG */


router.post("/api", /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var limit, data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            limit = req.body.limit;
            if (!limit) res.status(400);
            _context.next = 4;
            return (0, _databaseConnection["default"])("SELECT TOP ".concat(limit, " * FROM Logs ORDER BY Score DESC"));

          case 4:
            data = _context.sent;
            res.send({
              data: data
            });

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
/* CREATE LOG */

router.post("/api/", _authencationJWT.authenticateJWT, /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var _req$body, typeId, userId, CreationDate, queryString, data;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, typeId = _req$body.typeId, userId = _req$body.userId;
            if (!typeId || !userId) res.status(400);
            CreationDate = (0, _moment["default"])(new Date()).format('YYYY-MM-DD hh-mm-ss');
            queryString = "insert into Logs values(".concat(typeId, ",").concat(userId, ",'").concat(CreationDate, ")");
            _context2.next = 6;
            return (0, _databaseConnection["default"])(queryString);

          case 6:
            data = _context2.sent;
            if (data) res.send({
              data: data
            });else {
              res.status(500);
            }

          case 8:
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