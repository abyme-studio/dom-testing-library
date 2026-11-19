"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  within: true,
  queries: true,
  queryHelpers: true,
  getDefaultNormalizer: true,
  getRoles: true,
  logRoles: true,
  isInaccessible: true,
  configure: true,
  getConfig: true
};
Object.defineProperty(exports, "configure", {
  enumerable: true,
  get: function () {
    return _config.configure;
  }
});
Object.defineProperty(exports, "getConfig", {
  enumerable: true,
  get: function () {
    return _config.getConfig;
  }
});
Object.defineProperty(exports, "getDefaultNormalizer", {
  enumerable: true,
  get: function () {
    return _matches.getDefaultNormalizer;
  }
});
Object.defineProperty(exports, "getRoles", {
  enumerable: true,
  get: function () {
    return _roleHelpers.getRoles;
  }
});
Object.defineProperty(exports, "isInaccessible", {
  enumerable: true,
  get: function () {
    return _roleHelpers.isInaccessible;
  }
});
Object.defineProperty(exports, "logRoles", {
  enumerable: true,
  get: function () {
    return _roleHelpers.logRoles;
  }
});
exports.queryHelpers = exports.queries = void 0;
Object.defineProperty(exports, "within", {
  enumerable: true,
  get: function () {
    return _getQueriesForElement.getQueriesForElement;
  }
});
var _getQueriesForElement = require("./get-queries-for-element");
Object.keys(_getQueriesForElement).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _getQueriesForElement[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getQueriesForElement[key];
    }
  });
});
var queries = _interopRequireWildcard(require("./queries"));
exports.queries = queries;
Object.keys(queries).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === queries[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return queries[key];
    }
  });
});
var queryHelpers = _interopRequireWildcard(require("./query-helpers"));
exports.queryHelpers = queryHelpers;
Object.keys(queryHelpers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === queryHelpers[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return queryHelpers[key];
    }
  });
});
var _waitFor = require("./wait-for");
Object.keys(_waitFor).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _waitFor[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _waitFor[key];
    }
  });
});
var _waitForElementToBeRemoved = require("./wait-for-element-to-be-removed");
Object.keys(_waitForElementToBeRemoved).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _waitForElementToBeRemoved[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _waitForElementToBeRemoved[key];
    }
  });
});
var _matches = require("./matches");
var _getNodeText = require("./get-node-text");
Object.keys(_getNodeText).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _getNodeText[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getNodeText[key];
    }
  });
});
var _events = require("./events");
Object.keys(_events).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _events[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _events[key];
    }
  });
});
var _screen = require("./screen");
Object.keys(_screen).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _screen[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _screen[key];
    }
  });
});
var _roleHelpers = require("./role-helpers");
var _prettyDom = require("./pretty-dom");
Object.keys(_prettyDom).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _prettyDom[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _prettyDom[key];
    }
  });
});
var _config = require("./config");
var _suggestions = require("./suggestions");
Object.keys(_suggestions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _suggestions[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _suggestions[key];
    }
  });
});
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }