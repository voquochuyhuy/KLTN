"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.refreshTokens = exports.refreshTokenSecret = exports.accessTokenSecret = exports.authenticateJWT = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var accessTokenSecret = 'KLTN';
exports.accessTokenSecret = accessTokenSecret;
var refreshTokenSecret = 'KLTN';
exports.refreshTokenSecret = refreshTokenSecret;
var refreshTokens = [];
exports.refreshTokens = refreshTokens;

var authenticateJWT = function authenticateJWT(req, res, next) {
  var authHeader = req.headers.authorization;

  if (authHeader) {
    var token = authHeader;

    _jsonwebtoken["default"].verify(token, accessTokenSecret, function (err, user) {
      if (err) {
        return res.sendStatus(403);
      }

      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

exports.authenticateJWT = authenticateJWT;