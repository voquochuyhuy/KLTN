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
/* GET reported-post */


router.get("/api/lastest-posts", /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _databaseConnection["default"])("SELECT * FROM Report");

          case 2:
            data = _context.sent;
            res.send({
              data: data
            });

          case 4:
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
/*GET post detail*/

router.get("/api/:id", /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var id, data;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.next = 3;
            return (0, _databaseConnection["default"])("select * from Posts JOIN Comments ON Posts.Id = Comments.PostId WHERE Users.Id = '".concat(id, "'"));

          case 3:
            data = _context2.sent;

            if (data) {
              res.send({
                data: data.recordset[0]
              });
            } else {
              res.status(500);
            }

          case 5:
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
/* CREATE post */

router.post("/api/", _authencationJWT.authenticateJWT, /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
    var _req$body, userId, title, tags, isAudioQuestion, content, CreationDate, queryString, data;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, userId = _req$body.userId, title = _req$body.title, tags = _req$body.tags, isAudioQuestion = _req$body.isAudioQuestion, content = _req$body.content;
            CreationDate = (0, _moment["default"])(new Date()).format('YYYY-MM-DD');
            queryString = "insert into Posts \n  (PostTypeId, ParentId, CreationDate, \n  Score, ViewCount, OwnerUserId, \n  LastEditorUserId, LastEditorDisplayName, \n  LastActivityDate, Title, Tags, AnswerCount, \n  CommentCount, FavouriteCount, ClosedDate, \n  CommunityOwnedDate, isAudioQuestion, Content) \n  values(null,null,'".concat(CreationDate, "',0,0,'").concat(userId, "','").concat(userId, "',null,'").concat(CreationDate, "','").concat(title, "','").concat(tags, "',0,0,0,null,null,'").concat(isAudioQuestion, "','").concat(content, "')");
            _context3.next = 5;
            return (0, _databaseConnection["default"])(queryString);

          case 5:
            data = _context3.sent;
            if (data) res.send({
              data: data
            });else {
              res.status(500);
            }

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}());
/* UPDATE post */

router.put("/api/", _authencationJWT.authenticateJWT, /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res, next) {
    var _req$body2, id, title, tags, isAudioQuestion, content, queryString, lastActivityDate, data;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body2 = req.body, id = _req$body2.id, title = _req$body2.title, tags = _req$body2.tags, isAudioQuestion = _req$body2.isAudioQuestion, content = _req$body2.content;
            queryString = "UPDATE Posts SET ";

            if (title) {
              queryString = queryString.concat("Title = '".concat(title, "', "));
            }

            if (tags !== undefined) {
              queryString = queryString.concat("Tags = '".concat(tags, "', "));
            }

            if (isAudioQuestion !== undefined) {
              queryString = queryString.concat("isAudioQuestion = ".concat(isAudioQuestion, ", "));
            }

            if (content !== undefined) {
              queryString = queryString.concat("Content = '".concat(content, "', "));
            }

            lastActivityDate = (0, _moment["default"])(new Date()).format('YYYY-MM-DD');
            queryString = queryString.concat("LastActivityDate = '".concat(lastActivityDate, "' WHERE id = ").concat(id));
            _context4.next = 10;
            return (0, _databaseConnection["default"])(queryString);

          case 10:
            data = _context4.sent;
            res.send({
              data: data
            });

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}());
/* DELETE post*/

router["delete"]("/api/:id", _authencationJWT.authenticateJWT, /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res, next) {
    var id, data;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _context5.next = 3;
            return (0, _databaseConnection["default"])("DELETE FROM Posts WHERE id='".concat(id, "'"));

          case 3:
            data = _context5.sent;
            res.send({
              data: data
            });

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function (_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}());
var _default = router;
exports["default"] = _default;