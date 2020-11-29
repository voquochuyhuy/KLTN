"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _regeneratorRuntime = require("regenerator-runtime");

var _authencationJWT = require("../middleware/authencationJWT");

var _aesJs = _interopRequireDefault(require("aes-js"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var router = _express["default"].Router();
/* GET users listing. */


router.get("/api", _authencationJWT.authenticateJWT, /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return runQuery("SELECT * FROM Users ");

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
/* GET user detail. */

router.get("/api/:id", _authencationJWT.authenticateJWT, /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var id, data;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.next = 3;
            return runQuery("SELECT * FROM Users INNER JOIN Badges ON Users.Id = Badges.Id WHERE Users.Id = '".concat(id, "';"));

          case 3:
            data = _context2.sent;
            res.send({
              data: data
            });

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
/* CREATE user . */

router.post("/api", _authencationJWT.authenticateJWT, /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res, next) {
    var _req$body, displayName, websiteUrl, region, aboutMe, profileImageUrl, email, age, account, passwordHash, saltRounds, creationDate, lastAccessDate;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, displayName = _req$body.displayName, websiteUrl = _req$body.websiteUrl, region = _req$body.region, aboutMe = _req$body.aboutMe, profileImageUrl = _req$body.profileImageUrl, email = _req$body.email, age = _req$body.age, account = _req$body.account, passwordHash = _req$body.passwordHash;
            saltRounds = 10;
            creationDate = new Date();
            lastAccessDate = new Date();

            _bcrypt["default"].genSalt(saltRounds, function (err, salt) {
              _bcrypt["default"].hash(passwordHash, salt, /*#__PURE__*/function () {
                var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(err, hash) {
                  var data;
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          _context3.next = 2;
                          return runQuery("insert into Users \n      (CreationDate, DisplayName, LastAccessDate, \n      WebsiteUrl, Region, AboutMe, \n      UpVotes, DownVotes, ProfileImageUrl, \n      Email, Age, Account, PasswordHash) \n      values(".concat(creationDate, ",").concat(displayName, ",").concat(lastAccessDate, ",").concat(websiteUrl, ",").concat(region, ",").concat(aboutMe, ",0,0,").concat(profileImageUrl, ",").concat(email, ",").concat(age, ",").concat(account, ",").concat(hash, "\n      )"));

                        case 2:
                          data = _context3.sent;
                          res.send({
                            data: data
                          });

                        case 4:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3);
                }));

                return function (_x10, _x11) {
                  return _ref4.apply(this, arguments);
                };
              }());
            });

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}());
/* UPDATE user. */

router.put("/api", _authencationJWT.authenticateJWT, /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res, next) {
    var _req$body2, id, displayName, websiteUrl, region, aboutMe, profileImageUrl, email, age, account, queryString, data;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _req$body2 = req.body, id = _req$body2.id, displayName = _req$body2.displayName, websiteUrl = _req$body2.websiteUrl, region = _req$body2.region, aboutMe = _req$body2.aboutMe, profileImageUrl = _req$body2.profileImageUrl, email = _req$body2.email, age = _req$body2.age, account = _req$body2.account;
            queryString = "UPDATE Users SET ";

            if (displayName) {
              queryString = queryString.concat("DisplayName = '".concat(displayName, "', "));
            }

            if (websiteUrl) {
              queryString = queryString.concat("WebsiteUrl = '".concat(websiteUrl, "', "));
            }

            if (region) {
              queryString = queryString.concat("Region = '".concat(region, "', "));
            }

            if (aboutMe) {
              queryString = queryString.concat("AboutMe = '".concat(aboutMe, "', "));
            }

            if (profileImageUrl) {
              queryString = queryString.concat("ProfileImageUrl = '".concat(profileImageUrl, "', "));
            }

            if (email) {
              queryString = queryString.concat("Email = '".concat(email, "', "));
            }

            if (age) {
              queryString = queryString.concat("Age = '".concat(age, "', "));
            }

            if (account) {
              queryString = queryString.concat("Account = '".concat(account, "', "));
            }

            queryString = queryString.concat("WHERE Id = ".concat(id));
            _context5.prev = 11;
            _context5.next = 14;
            return runQuery(queryString);

          case 14:
            data = _context5.sent;
            res.send({
              data: data
            });
            _context5.next = 21;
            break;

          case 18:
            _context5.prev = 18;
            _context5.t0 = _context5["catch"](11);
            res.status(500);

          case 21:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[11, 18]]);
  }));

  return function (_x12, _x13, _x14) {
    return _ref5.apply(this, arguments);
  };
}());
/* UPDATE password. */

router.put("/api", _authencationJWT.authenticateJWT, /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res, next) {
    var _req$body3, id, passwordHash, queryString, data;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _req$body3 = req.body, id = _req$body3.id, passwordHash = _req$body3.passwordHash;
            queryString = "UPDATE Users SET";

            if (displayName) {}

            if (displayName) {}

            _context6.next = 6;
            return runQuery(queryString);

          case 6:
            data = _context6.sent;
            res.send({
              data: data
            });

          case 8:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function (_x15, _x16, _x17) {
    return _ref6.apply(this, arguments);
  };
}());
/* Delete user . */

router["delete"]("/api/:id", /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res, next) {
    var id, data;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            id = req.params.id;
            _context7.next = 3;
            return runQuery("DELETE FROM Users WHERE id=".concat(id));

          case 3:
            data = _context7.sent;
            res.send({
              data: data
            });

          case 5:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function (_x18, _x19, _x20) {
    return _ref7.apply(this, arguments);
  };
}());
var _default = router;
exports["default"] = _default;