import pr, { useState as Ot, useCallback as ot, useMemo as er, useRef as Ut, useEffect as Fe } from "react";
import { createPortal as Ir } from "react-dom";
var ke = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Dr(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var He = { exports: {} }, we = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rr;
function Fr() {
  if (rr) return we;
  rr = 1;
  var t = pr, o = Symbol.for("react.element"), r = Symbol.for("react.fragment"), f = Object.prototype.hasOwnProperty, c = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, n = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(i, l, _) {
    var x, b = {}, v = null, h = null;
    _ !== void 0 && (v = "" + _), l.key !== void 0 && (v = "" + l.key), l.ref !== void 0 && (h = l.ref);
    for (x in l) f.call(l, x) && !n.hasOwnProperty(x) && (b[x] = l[x]);
    if (i && i.defaultProps) for (x in l = i.defaultProps, l) b[x] === void 0 && (b[x] = l[x]);
    return { $$typeof: o, type: i, key: v, ref: h, props: b, _owner: c.current };
  }
  return we.Fragment = r, we.jsx = a, we.jsxs = a, we;
}
var ve = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nr;
function Br() {
  return nr || (nr = 1, process.env.NODE_ENV !== "production" && function() {
    var t = pr, o = Symbol.for("react.element"), r = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), x = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), y = Symbol.iterator, u = "@@iterator";
    function m(k) {
      if (k === null || typeof k != "object")
        return null;
      var X = y && k[y] || k[u];
      return typeof X == "function" ? X : null;
    }
    var d = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(k) {
      {
        for (var X = arguments.length, tt = new Array(X > 1 ? X - 1 : 0), lt = 1; lt < X; lt++)
          tt[lt - 1] = arguments[lt];
        S("error", k, tt);
      }
    }
    function S(k, X, tt) {
      {
        var lt = d.ReactDebugCurrentFrame, yt = lt.getStackAddendum();
        yt !== "" && (X += "%s", tt = tt.concat([yt]));
        var bt = tt.map(function(mt) {
          return String(mt);
        });
        bt.unshift("Warning: " + X), Function.prototype.apply.call(console[k], console, bt);
      }
    }
    var A = !1, T = !1, L = !1, D = !1, Z = !1, P;
    P = Symbol.for("react.module.reference");
    function H(k) {
      return !!(typeof k == "string" || typeof k == "function" || k === f || k === n || Z || k === c || k === _ || k === x || D || k === h || A || T || L || typeof k == "object" && k !== null && (k.$$typeof === v || k.$$typeof === b || k.$$typeof === a || k.$$typeof === i || k.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      k.$$typeof === P || k.getModuleId !== void 0));
    }
    function st(k, X, tt) {
      var lt = k.displayName;
      if (lt)
        return lt;
      var yt = X.displayName || X.name || "";
      return yt !== "" ? tt + "(" + yt + ")" : tt;
    }
    function E(k) {
      return k.displayName || "Context";
    }
    function F(k) {
      if (k == null)
        return null;
      if (typeof k.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof k == "function")
        return k.displayName || k.name || null;
      if (typeof k == "string")
        return k;
      switch (k) {
        case f:
          return "Fragment";
        case r:
          return "Portal";
        case n:
          return "Profiler";
        case c:
          return "StrictMode";
        case _:
          return "Suspense";
        case x:
          return "SuspenseList";
      }
      if (typeof k == "object")
        switch (k.$$typeof) {
          case i:
            var X = k;
            return E(X) + ".Consumer";
          case a:
            var tt = k;
            return E(tt._context) + ".Provider";
          case l:
            return st(k, k.render, "ForwardRef");
          case b:
            var lt = k.displayName || null;
            return lt !== null ? lt : F(k.type) || "Memo";
          case v: {
            var yt = k, bt = yt._payload, mt = yt._init;
            try {
              return F(mt(bt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var s = Object.assign, M = 0, ct, Y, ht, K, it, j, z;
    function nt() {
    }
    nt.__reactDisabledLog = !0;
    function et() {
      {
        if (M === 0) {
          ct = console.log, Y = console.info, ht = console.warn, K = console.error, it = console.group, j = console.groupCollapsed, z = console.groupEnd;
          var k = {
            configurable: !0,
            enumerable: !0,
            value: nt,
            writable: !0
          };
          Object.defineProperties(console, {
            info: k,
            log: k,
            warn: k,
            error: k,
            group: k,
            groupCollapsed: k,
            groupEnd: k
          });
        }
        M++;
      }
    }
    function J() {
      {
        if (M--, M === 0) {
          var k = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: s({}, k, {
              value: ct
            }),
            info: s({}, k, {
              value: Y
            }),
            warn: s({}, k, {
              value: ht
            }),
            error: s({}, k, {
              value: K
            }),
            group: s({}, k, {
              value: it
            }),
            groupCollapsed: s({}, k, {
              value: j
            }),
            groupEnd: s({}, k, {
              value: z
            })
          });
        }
        M < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var _t = d.ReactCurrentDispatcher, kt;
    function ut(k, X, tt) {
      {
        if (kt === void 0)
          try {
            throw Error();
          } catch (yt) {
            var lt = yt.stack.trim().match(/\n( *(at )?)/);
            kt = lt && lt[1] || "";
          }
        return `
` + kt + k;
      }
    }
    var dt = !1, Et;
    {
      var St = typeof WeakMap == "function" ? WeakMap : Map;
      Et = new St();
    }
    function jt(k, X) {
      if (!k || dt)
        return "";
      {
        var tt = Et.get(k);
        if (tt !== void 0)
          return tt;
      }
      var lt;
      dt = !0;
      var yt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var bt;
      bt = _t.current, _t.current = null, et();
      try {
        if (X) {
          var mt = function() {
            throw Error();
          };
          if (Object.defineProperty(mt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(mt, []);
            } catch (Pt) {
              lt = Pt;
            }
            Reflect.construct(k, [], mt);
          } else {
            try {
              mt.call();
            } catch (Pt) {
              lt = Pt;
            }
            k.call(mt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Pt) {
            lt = Pt;
          }
          k();
        }
      } catch (Pt) {
        if (Pt && lt && typeof Pt.stack == "string") {
          for (var ft = Pt.stack.split(`
`), zt = lt.stack.split(`
`), Ct = ft.length - 1, Tt = zt.length - 1; Ct >= 1 && Tt >= 0 && ft[Ct] !== zt[Tt]; )
            Tt--;
          for (; Ct >= 1 && Tt >= 0; Ct--, Tt--)
            if (ft[Ct] !== zt[Tt]) {
              if (Ct !== 1 || Tt !== 1)
                do
                  if (Ct--, Tt--, Tt < 0 || ft[Ct] !== zt[Tt]) {
                    var It = `
` + ft[Ct].replace(" at new ", " at ");
                    return k.displayName && It.includes("<anonymous>") && (It = It.replace("<anonymous>", k.displayName)), typeof k == "function" && Et.set(k, It), It;
                  }
                while (Ct >= 1 && Tt >= 0);
              break;
            }
        }
      } finally {
        dt = !1, _t.current = bt, J(), Error.prepareStackTrace = yt;
      }
      var Jt = k ? k.displayName || k.name : "", Gt = Jt ? ut(Jt) : "";
      return typeof k == "function" && Et.set(k, Gt), Gt;
    }
    function At(k, X, tt) {
      return jt(k, !1);
    }
    function e(k) {
      var X = k.prototype;
      return !!(X && X.isReactComponent);
    }
    function I(k, X, tt) {
      if (k == null)
        return "";
      if (typeof k == "function")
        return jt(k, e(k));
      if (typeof k == "string")
        return ut(k);
      switch (k) {
        case _:
          return ut("Suspense");
        case x:
          return ut("SuspenseList");
      }
      if (typeof k == "object")
        switch (k.$$typeof) {
          case l:
            return At(k.render);
          case b:
            return I(k.type, X, tt);
          case v: {
            var lt = k, yt = lt._payload, bt = lt._init;
            try {
              return I(bt(yt), X, tt);
            } catch {
            }
          }
        }
      return "";
    }
    var N = Object.prototype.hasOwnProperty, g = {}, p = d.ReactDebugCurrentFrame;
    function R(k) {
      if (k) {
        var X = k._owner, tt = I(k.type, k._source, X ? X.type : null);
        p.setExtraStackFrame(tt);
      } else
        p.setExtraStackFrame(null);
    }
    function W(k, X, tt, lt, yt) {
      {
        var bt = Function.call.bind(N);
        for (var mt in k)
          if (bt(k, mt)) {
            var ft = void 0;
            try {
              if (typeof k[mt] != "function") {
                var zt = Error((lt || "React class") + ": " + tt + " type `" + mt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof k[mt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw zt.name = "Invariant Violation", zt;
              }
              ft = k[mt](X, mt, lt, tt, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ct) {
              ft = Ct;
            }
            ft && !(ft instanceof Error) && (R(yt), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", lt || "React class", tt, mt, typeof ft), R(null)), ft instanceof Error && !(ft.message in g) && (g[ft.message] = !0, R(yt), w("Failed %s type: %s", tt, ft.message), R(null));
          }
      }
    }
    var V = Array.isArray;
    function O(k) {
      return V(k);
    }
    function G(k) {
      {
        var X = typeof Symbol == "function" && Symbol.toStringTag, tt = X && k[Symbol.toStringTag] || k.constructor.name || "Object";
        return tt;
      }
    }
    function Q(k) {
      try {
        return q(k), !1;
      } catch {
        return !0;
      }
    }
    function q(k) {
      return "" + k;
    }
    function rt(k) {
      if (Q(k))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", G(k)), q(k);
    }
    var wt = d.ReactCurrentOwner, pt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Rt, Kt;
    function Nt(k) {
      if (N.call(k, "ref")) {
        var X = Object.getOwnPropertyDescriptor(k, "ref").get;
        if (X && X.isReactWarning)
          return !1;
      }
      return k.ref !== void 0;
    }
    function Ht(k) {
      if (N.call(k, "key")) {
        var X = Object.getOwnPropertyDescriptor(k, "key").get;
        if (X && X.isReactWarning)
          return !1;
      }
      return k.key !== void 0;
    }
    function xt(k, X) {
      typeof k.ref == "string" && wt.current;
    }
    function $t(k, X) {
      {
        var tt = function() {
          Rt || (Rt = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", X));
        };
        tt.isReactWarning = !0, Object.defineProperty(k, "key", {
          get: tt,
          configurable: !0
        });
      }
    }
    function te(k, X) {
      {
        var tt = function() {
          Kt || (Kt = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", X));
        };
        tt.isReactWarning = !0, Object.defineProperty(k, "ref", {
          get: tt,
          configurable: !0
        });
      }
    }
    var Dt = function(k, X, tt, lt, yt, bt, mt) {
      var ft = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
        // Built-in properties that belong on the element
        type: k,
        key: X,
        ref: tt,
        props: mt,
        // Record the component responsible for creating this element.
        _owner: bt
      };
      return ft._store = {}, Object.defineProperty(ft._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ft, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: lt
      }), Object.defineProperty(ft, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: yt
      }), Object.freeze && (Object.freeze(ft.props), Object.freeze(ft)), ft;
    };
    function ee(k, X, tt, lt, yt) {
      {
        var bt, mt = {}, ft = null, zt = null;
        tt !== void 0 && (rt(tt), ft = "" + tt), Ht(X) && (rt(X.key), ft = "" + X.key), Nt(X) && (zt = X.ref, xt(X, yt));
        for (bt in X)
          N.call(X, bt) && !pt.hasOwnProperty(bt) && (mt[bt] = X[bt]);
        if (k && k.defaultProps) {
          var Ct = k.defaultProps;
          for (bt in Ct)
            mt[bt] === void 0 && (mt[bt] = Ct[bt]);
        }
        if (ft || zt) {
          var Tt = typeof k == "function" ? k.displayName || k.name || "Unknown" : k;
          ft && $t(mt, Tt), zt && te(mt, Tt);
        }
        return Dt(k, ft, zt, yt, lt, wt.current, mt);
      }
    }
    var Wt = d.ReactCurrentOwner, vt = d.ReactDebugCurrentFrame;
    function Ft(k) {
      if (k) {
        var X = k._owner, tt = I(k.type, k._source, X ? X.type : null);
        vt.setExtraStackFrame(tt);
      } else
        vt.setExtraStackFrame(null);
    }
    var qt;
    qt = !1;
    function Lt(k) {
      return typeof k == "object" && k !== null && k.$$typeof === o;
    }
    function Vt() {
      {
        if (Wt.current) {
          var k = F(Wt.current.type);
          if (k)
            return `

Check the render method of \`` + k + "`.";
        }
        return "";
      }
    }
    function ye(k) {
      return "";
    }
    var he = {};
    function _e(k) {
      {
        var X = Vt();
        if (!X) {
          var tt = typeof k == "string" ? k : k.displayName || k.name;
          tt && (X = `

Check the top-level render call using <` + tt + ">.");
        }
        return X;
      }
    }
    function re(k, X) {
      {
        if (!k._store || k._store.validated || k.key != null)
          return;
        k._store.validated = !0;
        var tt = _e(X);
        if (he[tt])
          return;
        he[tt] = !0;
        var lt = "";
        k && k._owner && k._owner !== Wt.current && (lt = " It was passed a child from " + F(k._owner.type) + "."), Ft(k), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', tt, lt), Ft(null);
      }
    }
    function Yt(k, X) {
      {
        if (typeof k != "object")
          return;
        if (O(k))
          for (var tt = 0; tt < k.length; tt++) {
            var lt = k[tt];
            Lt(lt) && re(lt, X);
          }
        else if (Lt(k))
          k._store && (k._store.validated = !0);
        else if (k) {
          var yt = m(k);
          if (typeof yt == "function" && yt !== k.entries)
            for (var bt = yt.call(k), mt; !(mt = bt.next()).done; )
              Lt(mt.value) && re(mt.value, X);
        }
      }
    }
    function ae(k) {
      {
        var X = k.type;
        if (X == null || typeof X == "string")
          return;
        var tt;
        if (typeof X == "function")
          tt = X.propTypes;
        else if (typeof X == "object" && (X.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        X.$$typeof === b))
          tt = X.propTypes;
        else
          return;
        if (tt) {
          var lt = F(X);
          W(tt, k.props, "prop", lt, k);
        } else if (X.PropTypes !== void 0 && !qt) {
          qt = !0;
          var yt = F(X);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", yt || "Unknown");
        }
        typeof X.getDefaultProps == "function" && !X.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function be(k) {
      {
        for (var X = Object.keys(k.props), tt = 0; tt < X.length; tt++) {
          var lt = X[tt];
          if (lt !== "children" && lt !== "key") {
            Ft(k), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", lt), Ft(null);
            break;
          }
        }
        k.ref !== null && (Ft(k), w("Invalid attribute `ref` supplied to `React.Fragment`."), Ft(null));
      }
    }
    var fe = {};
    function ne(k, X, tt, lt, yt, bt) {
      {
        var mt = H(k);
        if (!mt) {
          var ft = "";
          (k === void 0 || typeof k == "object" && k !== null && Object.keys(k).length === 0) && (ft += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var zt = ye();
          zt ? ft += zt : ft += Vt();
          var Ct;
          k === null ? Ct = "null" : O(k) ? Ct = "array" : k !== void 0 && k.$$typeof === o ? (Ct = "<" + (F(k.type) || "Unknown") + " />", ft = " Did you accidentally export a JSX literal instead of a component?") : Ct = typeof k, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ct, ft);
        }
        var Tt = ee(k, X, tt, yt, bt);
        if (Tt == null)
          return Tt;
        if (mt) {
          var It = X.children;
          if (It !== void 0)
            if (lt)
              if (O(It)) {
                for (var Jt = 0; Jt < It.length; Jt++)
                  Yt(It[Jt], k);
                Object.freeze && Object.freeze(It);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Yt(It, k);
        }
        if (N.call(X, "key")) {
          var Gt = F(k), Pt = Object.keys(X).filter(function(pe) {
            return pe !== "key";
          }), oe = Pt.length > 0 ? "{key: someKey, " + Pt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!fe[Gt + oe]) {
            var de = Pt.length > 0 ? "{" + Pt.join(": ..., ") + ": ...}" : "{}";
            w(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, oe, Gt, de, Gt), fe[Gt + oe] = !0;
          }
        }
        return k === f ? be(Tt) : ae(Tt), Tt;
      }
    }
    function Oe(k, X, tt) {
      return ne(k, X, tt, !0);
    }
    function xe(k, X, tt) {
      return ne(k, X, tt, !1);
    }
    var ze = xe, je = Oe;
    ve.Fragment = f, ve.jsx = ze, ve.jsxs = je;
  }()), ve;
}
process.env.NODE_ENV === "production" ? He.exports = Fr() : He.exports = Br();
var B = He.exports;
function Se(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var mr = { exports: {} };
/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/
(function(t, o) {
  (function(r) {
    t.exports = r();
  })(function() {
    return function r(f, c, n) {
      function a(_, x) {
        if (!c[_]) {
          if (!f[_]) {
            var b = typeof Se == "function" && Se;
            if (!x && b) return b(_, !0);
            if (i) return i(_, !0);
            var v = new Error("Cannot find module '" + _ + "'");
            throw v.code = "MODULE_NOT_FOUND", v;
          }
          var h = c[_] = { exports: {} };
          f[_][0].call(h.exports, function(y) {
            var u = f[_][1][y];
            return a(u || y);
          }, h, h.exports, r, f, c, n);
        }
        return c[_].exports;
      }
      for (var i = typeof Se == "function" && Se, l = 0; l < n.length; l++) a(n[l]);
      return a;
    }({ 1: [function(r, f, c) {
      var n = r("./utils"), a = r("./support"), i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      c.encode = function(l) {
        for (var _, x, b, v, h, y, u, m = [], d = 0, w = l.length, S = w, A = n.getTypeOf(l) !== "string"; d < l.length; ) S = w - d, b = A ? (_ = l[d++], x = d < w ? l[d++] : 0, d < w ? l[d++] : 0) : (_ = l.charCodeAt(d++), x = d < w ? l.charCodeAt(d++) : 0, d < w ? l.charCodeAt(d++) : 0), v = _ >> 2, h = (3 & _) << 4 | x >> 4, y = 1 < S ? (15 & x) << 2 | b >> 6 : 64, u = 2 < S ? 63 & b : 64, m.push(i.charAt(v) + i.charAt(h) + i.charAt(y) + i.charAt(u));
        return m.join("");
      }, c.decode = function(l) {
        var _, x, b, v, h, y, u = 0, m = 0, d = "data:";
        if (l.substr(0, d.length) === d) throw new Error("Invalid base64 input, it looks like a data url.");
        var w, S = 3 * (l = l.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
        if (l.charAt(l.length - 1) === i.charAt(64) && S--, l.charAt(l.length - 2) === i.charAt(64) && S--, S % 1 != 0) throw new Error("Invalid base64 input, bad content length.");
        for (w = a.uint8array ? new Uint8Array(0 | S) : new Array(0 | S); u < l.length; ) _ = i.indexOf(l.charAt(u++)) << 2 | (v = i.indexOf(l.charAt(u++))) >> 4, x = (15 & v) << 4 | (h = i.indexOf(l.charAt(u++))) >> 2, b = (3 & h) << 6 | (y = i.indexOf(l.charAt(u++))), w[m++] = _, h !== 64 && (w[m++] = x), y !== 64 && (w[m++] = b);
        return w;
      };
    }, { "./support": 30, "./utils": 32 }], 2: [function(r, f, c) {
      var n = r("./external"), a = r("./stream/DataWorker"), i = r("./stream/Crc32Probe"), l = r("./stream/DataLengthProbe");
      function _(x, b, v, h, y) {
        this.compressedSize = x, this.uncompressedSize = b, this.crc32 = v, this.compression = h, this.compressedContent = y;
      }
      _.prototype = { getContentWorker: function() {
        var x = new a(n.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")), b = this;
        return x.on("end", function() {
          if (this.streamInfo.data_length !== b.uncompressedSize) throw new Error("Bug : uncompressed data size mismatch");
        }), x;
      }, getCompressedWorker: function() {
        return new a(n.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
      } }, _.createWorkerFrom = function(x, b, v) {
        return x.pipe(new i()).pipe(new l("uncompressedSize")).pipe(b.compressWorker(v)).pipe(new l("compressedSize")).withStreamInfo("compression", b);
      }, f.exports = _;
    }, { "./external": 6, "./stream/Crc32Probe": 25, "./stream/DataLengthProbe": 26, "./stream/DataWorker": 27 }], 3: [function(r, f, c) {
      var n = r("./stream/GenericWorker");
      c.STORE = { magic: "\0\0", compressWorker: function() {
        return new n("STORE compression");
      }, uncompressWorker: function() {
        return new n("STORE decompression");
      } }, c.DEFLATE = r("./flate");
    }, { "./flate": 7, "./stream/GenericWorker": 28 }], 4: [function(r, f, c) {
      var n = r("./utils"), a = function() {
        for (var i, l = [], _ = 0; _ < 256; _++) {
          i = _;
          for (var x = 0; x < 8; x++) i = 1 & i ? 3988292384 ^ i >>> 1 : i >>> 1;
          l[_] = i;
        }
        return l;
      }();
      f.exports = function(i, l) {
        return i !== void 0 && i.length ? n.getTypeOf(i) !== "string" ? function(_, x, b, v) {
          var h = a, y = v + b;
          _ ^= -1;
          for (var u = v; u < y; u++) _ = _ >>> 8 ^ h[255 & (_ ^ x[u])];
          return -1 ^ _;
        }(0 | l, i, i.length, 0) : function(_, x, b, v) {
          var h = a, y = v + b;
          _ ^= -1;
          for (var u = v; u < y; u++) _ = _ >>> 8 ^ h[255 & (_ ^ x.charCodeAt(u))];
          return -1 ^ _;
        }(0 | l, i, i.length, 0) : 0;
      };
    }, { "./utils": 32 }], 5: [function(r, f, c) {
      c.base64 = !1, c.binary = !1, c.dir = !1, c.createFolders = !0, c.date = null, c.compression = null, c.compressionOptions = null, c.comment = null, c.unixPermissions = null, c.dosPermissions = null;
    }, {}], 6: [function(r, f, c) {
      var n = null;
      n = typeof Promise < "u" ? Promise : r("lie"), f.exports = { Promise: n };
    }, { lie: 37 }], 7: [function(r, f, c) {
      var n = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Uint32Array < "u", a = r("pako"), i = r("./utils"), l = r("./stream/GenericWorker"), _ = n ? "uint8array" : "array";
      function x(b, v) {
        l.call(this, "FlateWorker/" + b), this._pako = null, this._pakoAction = b, this._pakoOptions = v, this.meta = {};
      }
      c.magic = "\b\0", i.inherits(x, l), x.prototype.processChunk = function(b) {
        this.meta = b.meta, this._pako === null && this._createPako(), this._pako.push(i.transformTo(_, b.data), !1);
      }, x.prototype.flush = function() {
        l.prototype.flush.call(this), this._pako === null && this._createPako(), this._pako.push([], !0);
      }, x.prototype.cleanUp = function() {
        l.prototype.cleanUp.call(this), this._pako = null;
      }, x.prototype._createPako = function() {
        this._pako = new a[this._pakoAction]({ raw: !0, level: this._pakoOptions.level || -1 });
        var b = this;
        this._pako.onData = function(v) {
          b.push({ data: v, meta: b.meta });
        };
      }, c.compressWorker = function(b) {
        return new x("Deflate", b);
      }, c.uncompressWorker = function() {
        return new x("Inflate", {});
      };
    }, { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 }], 8: [function(r, f, c) {
      function n(h, y) {
        var u, m = "";
        for (u = 0; u < y; u++) m += String.fromCharCode(255 & h), h >>>= 8;
        return m;
      }
      function a(h, y, u, m, d, w) {
        var S, A, T = h.file, L = h.compression, D = w !== _.utf8encode, Z = i.transformTo("string", w(T.name)), P = i.transformTo("string", _.utf8encode(T.name)), H = T.comment, st = i.transformTo("string", w(H)), E = i.transformTo("string", _.utf8encode(H)), F = P.length !== T.name.length, s = E.length !== H.length, M = "", ct = "", Y = "", ht = T.dir, K = T.date, it = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
        y && !u || (it.crc32 = h.crc32, it.compressedSize = h.compressedSize, it.uncompressedSize = h.uncompressedSize);
        var j = 0;
        y && (j |= 8), D || !F && !s || (j |= 2048);
        var z = 0, nt = 0;
        ht && (z |= 16), d === "UNIX" ? (nt = 798, z |= function(J, _t) {
          var kt = J;
          return J || (kt = _t ? 16893 : 33204), (65535 & kt) << 16;
        }(T.unixPermissions, ht)) : (nt = 20, z |= function(J) {
          return 63 & (J || 0);
        }(T.dosPermissions)), S = K.getUTCHours(), S <<= 6, S |= K.getUTCMinutes(), S <<= 5, S |= K.getUTCSeconds() / 2, A = K.getUTCFullYear() - 1980, A <<= 4, A |= K.getUTCMonth() + 1, A <<= 5, A |= K.getUTCDate(), F && (ct = n(1, 1) + n(x(Z), 4) + P, M += "up" + n(ct.length, 2) + ct), s && (Y = n(1, 1) + n(x(st), 4) + E, M += "uc" + n(Y.length, 2) + Y);
        var et = "";
        return et += `
\0`, et += n(j, 2), et += L.magic, et += n(S, 2), et += n(A, 2), et += n(it.crc32, 4), et += n(it.compressedSize, 4), et += n(it.uncompressedSize, 4), et += n(Z.length, 2), et += n(M.length, 2), { fileRecord: b.LOCAL_FILE_HEADER + et + Z + M, dirRecord: b.CENTRAL_FILE_HEADER + n(nt, 2) + et + n(st.length, 2) + "\0\0\0\0" + n(z, 4) + n(m, 4) + Z + M + st };
      }
      var i = r("../utils"), l = r("../stream/GenericWorker"), _ = r("../utf8"), x = r("../crc32"), b = r("../signature");
      function v(h, y, u, m) {
        l.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = y, this.zipPlatform = u, this.encodeFileName = m, this.streamFiles = h, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
      }
      i.inherits(v, l), v.prototype.push = function(h) {
        var y = h.meta.percent || 0, u = this.entriesCount, m = this._sources.length;
        this.accumulate ? this.contentBuffer.push(h) : (this.bytesWritten += h.data.length, l.prototype.push.call(this, { data: h.data, meta: { currentFile: this.currentFile, percent: u ? (y + 100 * (u - m - 1)) / u : 100 } }));
      }, v.prototype.openedSource = function(h) {
        this.currentSourceOffset = this.bytesWritten, this.currentFile = h.file.name;
        var y = this.streamFiles && !h.file.dir;
        if (y) {
          var u = a(h, y, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
          this.push({ data: u.fileRecord, meta: { percent: 0 } });
        } else this.accumulate = !0;
      }, v.prototype.closedSource = function(h) {
        this.accumulate = !1;
        var y = this.streamFiles && !h.file.dir, u = a(h, y, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
        if (this.dirRecords.push(u.dirRecord), y) this.push({ data: function(m) {
          return b.DATA_DESCRIPTOR + n(m.crc32, 4) + n(m.compressedSize, 4) + n(m.uncompressedSize, 4);
        }(h), meta: { percent: 100 } });
        else for (this.push({ data: u.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length; ) this.push(this.contentBuffer.shift());
        this.currentFile = null;
      }, v.prototype.flush = function() {
        for (var h = this.bytesWritten, y = 0; y < this.dirRecords.length; y++) this.push({ data: this.dirRecords[y], meta: { percent: 100 } });
        var u = this.bytesWritten - h, m = function(d, w, S, A, T) {
          var L = i.transformTo("string", T(A));
          return b.CENTRAL_DIRECTORY_END + "\0\0\0\0" + n(d, 2) + n(d, 2) + n(w, 4) + n(S, 4) + n(L.length, 2) + L;
        }(this.dirRecords.length, u, h, this.zipComment, this.encodeFileName);
        this.push({ data: m, meta: { percent: 100 } });
      }, v.prototype.prepareNextSource = function() {
        this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
      }, v.prototype.registerPrevious = function(h) {
        this._sources.push(h);
        var y = this;
        return h.on("data", function(u) {
          y.processChunk(u);
        }), h.on("end", function() {
          y.closedSource(y.previous.streamInfo), y._sources.length ? y.prepareNextSource() : y.end();
        }), h.on("error", function(u) {
          y.error(u);
        }), this;
      }, v.prototype.resume = function() {
        return !!l.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0));
      }, v.prototype.error = function(h) {
        var y = this._sources;
        if (!l.prototype.error.call(this, h)) return !1;
        for (var u = 0; u < y.length; u++) try {
          y[u].error(h);
        } catch {
        }
        return !0;
      }, v.prototype.lock = function() {
        l.prototype.lock.call(this);
        for (var h = this._sources, y = 0; y < h.length; y++) h[y].lock();
      }, f.exports = v;
    }, { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 }], 9: [function(r, f, c) {
      var n = r("../compressions"), a = r("./ZipFileWorker");
      c.generateWorker = function(i, l, _) {
        var x = new a(l.streamFiles, _, l.platform, l.encodeFileName), b = 0;
        try {
          i.forEach(function(v, h) {
            b++;
            var y = function(w, S) {
              var A = w || S, T = n[A];
              if (!T) throw new Error(A + " is not a valid compression method !");
              return T;
            }(h.options.compression, l.compression), u = h.options.compressionOptions || l.compressionOptions || {}, m = h.dir, d = h.date;
            h._compressWorker(y, u).withStreamInfo("file", { name: v, dir: m, date: d, comment: h.comment || "", unixPermissions: h.unixPermissions, dosPermissions: h.dosPermissions }).pipe(x);
          }), x.entriesCount = b;
        } catch (v) {
          x.error(v);
        }
        return x;
      };
    }, { "../compressions": 3, "./ZipFileWorker": 8 }], 10: [function(r, f, c) {
      function n() {
        if (!(this instanceof n)) return new n();
        if (arguments.length) throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
        this.files = /* @__PURE__ */ Object.create(null), this.comment = null, this.root = "", this.clone = function() {
          var a = new n();
          for (var i in this) typeof this[i] != "function" && (a[i] = this[i]);
          return a;
        };
      }
      (n.prototype = r("./object")).loadAsync = r("./load"), n.support = r("./support"), n.defaults = r("./defaults"), n.version = "3.10.1", n.loadAsync = function(a, i) {
        return new n().loadAsync(a, i);
      }, n.external = r("./external"), f.exports = n;
    }, { "./defaults": 5, "./external": 6, "./load": 11, "./object": 15, "./support": 30 }], 11: [function(r, f, c) {
      var n = r("./utils"), a = r("./external"), i = r("./utf8"), l = r("./zipEntries"), _ = r("./stream/Crc32Probe"), x = r("./nodejsUtils");
      function b(v) {
        return new a.Promise(function(h, y) {
          var u = v.decompressed.getContentWorker().pipe(new _());
          u.on("error", function(m) {
            y(m);
          }).on("end", function() {
            u.streamInfo.crc32 !== v.decompressed.crc32 ? y(new Error("Corrupted zip : CRC32 mismatch")) : h();
          }).resume();
        });
      }
      f.exports = function(v, h) {
        var y = this;
        return h = n.extend(h || {}, { base64: !1, checkCRC32: !1, optimizedBinaryString: !1, createFolders: !1, decodeFileName: i.utf8decode }), x.isNode && x.isStream(v) ? a.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : n.prepareContent("the loaded zip file", v, !0, h.optimizedBinaryString, h.base64).then(function(u) {
          var m = new l(h);
          return m.load(u), m;
        }).then(function(u) {
          var m = [a.Promise.resolve(u)], d = u.files;
          if (h.checkCRC32) for (var w = 0; w < d.length; w++) m.push(b(d[w]));
          return a.Promise.all(m);
        }).then(function(u) {
          for (var m = u.shift(), d = m.files, w = 0; w < d.length; w++) {
            var S = d[w], A = S.fileNameStr, T = n.resolve(S.fileNameStr);
            y.file(T, S.decompressed, { binary: !0, optimizedBinaryString: !0, date: S.date, dir: S.dir, comment: S.fileCommentStr.length ? S.fileCommentStr : null, unixPermissions: S.unixPermissions, dosPermissions: S.dosPermissions, createFolders: h.createFolders }), S.dir || (y.file(T).unsafeOriginalName = A);
          }
          return m.zipComment.length && (y.comment = m.zipComment), y;
        });
      };
    }, { "./external": 6, "./nodejsUtils": 14, "./stream/Crc32Probe": 25, "./utf8": 31, "./utils": 32, "./zipEntries": 33 }], 12: [function(r, f, c) {
      var n = r("../utils"), a = r("../stream/GenericWorker");
      function i(l, _) {
        a.call(this, "Nodejs stream input adapter for " + l), this._upstreamEnded = !1, this._bindStream(_);
      }
      n.inherits(i, a), i.prototype._bindStream = function(l) {
        var _ = this;
        (this._stream = l).pause(), l.on("data", function(x) {
          _.push({ data: x, meta: { percent: 0 } });
        }).on("error", function(x) {
          _.isPaused ? this.generatedError = x : _.error(x);
        }).on("end", function() {
          _.isPaused ? _._upstreamEnded = !0 : _.end();
        });
      }, i.prototype.pause = function() {
        return !!a.prototype.pause.call(this) && (this._stream.pause(), !0);
      }, i.prototype.resume = function() {
        return !!a.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), !0);
      }, f.exports = i;
    }, { "../stream/GenericWorker": 28, "../utils": 32 }], 13: [function(r, f, c) {
      var n = r("readable-stream").Readable;
      function a(i, l, _) {
        n.call(this, l), this._helper = i;
        var x = this;
        i.on("data", function(b, v) {
          x.push(b) || x._helper.pause(), _ && _(v);
        }).on("error", function(b) {
          x.emit("error", b);
        }).on("end", function() {
          x.push(null);
        });
      }
      r("../utils").inherits(a, n), a.prototype._read = function() {
        this._helper.resume();
      }, f.exports = a;
    }, { "../utils": 32, "readable-stream": 16 }], 14: [function(r, f, c) {
      f.exports = { isNode: typeof Buffer < "u", newBufferFrom: function(n, a) {
        if (Buffer.from && Buffer.from !== Uint8Array.from) return Buffer.from(n, a);
        if (typeof n == "number") throw new Error('The "data" argument must not be a number');
        return new Buffer(n, a);
      }, allocBuffer: function(n) {
        if (Buffer.alloc) return Buffer.alloc(n);
        var a = new Buffer(n);
        return a.fill(0), a;
      }, isBuffer: function(n) {
        return Buffer.isBuffer(n);
      }, isStream: function(n) {
        return n && typeof n.on == "function" && typeof n.pause == "function" && typeof n.resume == "function";
      } };
    }, {}], 15: [function(r, f, c) {
      function n(T, L, D) {
        var Z, P = i.getTypeOf(L), H = i.extend(D || {}, x);
        H.date = H.date || /* @__PURE__ */ new Date(), H.compression !== null && (H.compression = H.compression.toUpperCase()), typeof H.unixPermissions == "string" && (H.unixPermissions = parseInt(H.unixPermissions, 8)), H.unixPermissions && 16384 & H.unixPermissions && (H.dir = !0), H.dosPermissions && 16 & H.dosPermissions && (H.dir = !0), H.dir && (T = d(T)), H.createFolders && (Z = m(T)) && w.call(this, Z, !0);
        var st = P === "string" && H.binary === !1 && H.base64 === !1;
        D && D.binary !== void 0 || (H.binary = !st), (L instanceof b && L.uncompressedSize === 0 || H.dir || !L || L.length === 0) && (H.base64 = !1, H.binary = !0, L = "", H.compression = "STORE", P = "string");
        var E = null;
        E = L instanceof b || L instanceof l ? L : y.isNode && y.isStream(L) ? new u(T, L) : i.prepareContent(T, L, H.binary, H.optimizedBinaryString, H.base64);
        var F = new v(T, E, H);
        this.files[T] = F;
      }
      var a = r("./utf8"), i = r("./utils"), l = r("./stream/GenericWorker"), _ = r("./stream/StreamHelper"), x = r("./defaults"), b = r("./compressedObject"), v = r("./zipObject"), h = r("./generate"), y = r("./nodejsUtils"), u = r("./nodejs/NodejsStreamInputAdapter"), m = function(T) {
        T.slice(-1) === "/" && (T = T.substring(0, T.length - 1));
        var L = T.lastIndexOf("/");
        return 0 < L ? T.substring(0, L) : "";
      }, d = function(T) {
        return T.slice(-1) !== "/" && (T += "/"), T;
      }, w = function(T, L) {
        return L = L !== void 0 ? L : x.createFolders, T = d(T), this.files[T] || n.call(this, T, null, { dir: !0, createFolders: L }), this.files[T];
      };
      function S(T) {
        return Object.prototype.toString.call(T) === "[object RegExp]";
      }
      var A = { load: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, forEach: function(T) {
        var L, D, Z;
        for (L in this.files) Z = this.files[L], (D = L.slice(this.root.length, L.length)) && L.slice(0, this.root.length) === this.root && T(D, Z);
      }, filter: function(T) {
        var L = [];
        return this.forEach(function(D, Z) {
          T(D, Z) && L.push(Z);
        }), L;
      }, file: function(T, L, D) {
        if (arguments.length !== 1) return T = this.root + T, n.call(this, T, L, D), this;
        if (S(T)) {
          var Z = T;
          return this.filter(function(H, st) {
            return !st.dir && Z.test(H);
          });
        }
        var P = this.files[this.root + T];
        return P && !P.dir ? P : null;
      }, folder: function(T) {
        if (!T) return this;
        if (S(T)) return this.filter(function(P, H) {
          return H.dir && T.test(P);
        });
        var L = this.root + T, D = w.call(this, L), Z = this.clone();
        return Z.root = D.name, Z;
      }, remove: function(T) {
        T = this.root + T;
        var L = this.files[T];
        if (L || (T.slice(-1) !== "/" && (T += "/"), L = this.files[T]), L && !L.dir) delete this.files[T];
        else for (var D = this.filter(function(P, H) {
          return H.name.slice(0, T.length) === T;
        }), Z = 0; Z < D.length; Z++) delete this.files[D[Z].name];
        return this;
      }, generate: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, generateInternalStream: function(T) {
        var L, D = {};
        try {
          if ((D = i.extend(T || {}, { streamFiles: !1, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: a.utf8encode })).type = D.type.toLowerCase(), D.compression = D.compression.toUpperCase(), D.type === "binarystring" && (D.type = "string"), !D.type) throw new Error("No output type specified.");
          i.checkSupport(D.type), D.platform !== "darwin" && D.platform !== "freebsd" && D.platform !== "linux" && D.platform !== "sunos" || (D.platform = "UNIX"), D.platform === "win32" && (D.platform = "DOS");
          var Z = D.comment || this.comment || "";
          L = h.generateWorker(this, D, Z);
        } catch (P) {
          (L = new l("error")).error(P);
        }
        return new _(L, D.type || "string", D.mimeType);
      }, generateAsync: function(T, L) {
        return this.generateInternalStream(T).accumulate(L);
      }, generateNodeStream: function(T, L) {
        return (T = T || {}).type || (T.type = "nodebuffer"), this.generateInternalStream(T).toNodejsStream(L);
      } };
      f.exports = A;
    }, { "./compressedObject": 2, "./defaults": 5, "./generate": 9, "./nodejs/NodejsStreamInputAdapter": 12, "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31, "./utils": 32, "./zipObject": 35 }], 16: [function(r, f, c) {
      f.exports = r("stream");
    }, { stream: void 0 }], 17: [function(r, f, c) {
      var n = r("./DataReader");
      function a(i) {
        n.call(this, i);
        for (var l = 0; l < this.data.length; l++) i[l] = 255 & i[l];
      }
      r("../utils").inherits(a, n), a.prototype.byteAt = function(i) {
        return this.data[this.zero + i];
      }, a.prototype.lastIndexOfSignature = function(i) {
        for (var l = i.charCodeAt(0), _ = i.charCodeAt(1), x = i.charCodeAt(2), b = i.charCodeAt(3), v = this.length - 4; 0 <= v; --v) if (this.data[v] === l && this.data[v + 1] === _ && this.data[v + 2] === x && this.data[v + 3] === b) return v - this.zero;
        return -1;
      }, a.prototype.readAndCheckSignature = function(i) {
        var l = i.charCodeAt(0), _ = i.charCodeAt(1), x = i.charCodeAt(2), b = i.charCodeAt(3), v = this.readData(4);
        return l === v[0] && _ === v[1] && x === v[2] && b === v[3];
      }, a.prototype.readData = function(i) {
        if (this.checkOffset(i), i === 0) return [];
        var l = this.data.slice(this.zero + this.index, this.zero + this.index + i);
        return this.index += i, l;
      }, f.exports = a;
    }, { "../utils": 32, "./DataReader": 18 }], 18: [function(r, f, c) {
      var n = r("../utils");
      function a(i) {
        this.data = i, this.length = i.length, this.index = 0, this.zero = 0;
      }
      a.prototype = { checkOffset: function(i) {
        this.checkIndex(this.index + i);
      }, checkIndex: function(i) {
        if (this.length < this.zero + i || i < 0) throw new Error("End of data reached (data length = " + this.length + ", asked index = " + i + "). Corrupted zip ?");
      }, setIndex: function(i) {
        this.checkIndex(i), this.index = i;
      }, skip: function(i) {
        this.setIndex(this.index + i);
      }, byteAt: function() {
      }, readInt: function(i) {
        var l, _ = 0;
        for (this.checkOffset(i), l = this.index + i - 1; l >= this.index; l--) _ = (_ << 8) + this.byteAt(l);
        return this.index += i, _;
      }, readString: function(i) {
        return n.transformTo("string", this.readData(i));
      }, readData: function() {
      }, lastIndexOfSignature: function() {
      }, readAndCheckSignature: function() {
      }, readDate: function() {
        var i = this.readInt(4);
        return new Date(Date.UTC(1980 + (i >> 25 & 127), (i >> 21 & 15) - 1, i >> 16 & 31, i >> 11 & 31, i >> 5 & 63, (31 & i) << 1));
      } }, f.exports = a;
    }, { "../utils": 32 }], 19: [function(r, f, c) {
      var n = r("./Uint8ArrayReader");
      function a(i) {
        n.call(this, i);
      }
      r("../utils").inherits(a, n), a.prototype.readData = function(i) {
        this.checkOffset(i);
        var l = this.data.slice(this.zero + this.index, this.zero + this.index + i);
        return this.index += i, l;
      }, f.exports = a;
    }, { "../utils": 32, "./Uint8ArrayReader": 21 }], 20: [function(r, f, c) {
      var n = r("./DataReader");
      function a(i) {
        n.call(this, i);
      }
      r("../utils").inherits(a, n), a.prototype.byteAt = function(i) {
        return this.data.charCodeAt(this.zero + i);
      }, a.prototype.lastIndexOfSignature = function(i) {
        return this.data.lastIndexOf(i) - this.zero;
      }, a.prototype.readAndCheckSignature = function(i) {
        return i === this.readData(4);
      }, a.prototype.readData = function(i) {
        this.checkOffset(i);
        var l = this.data.slice(this.zero + this.index, this.zero + this.index + i);
        return this.index += i, l;
      }, f.exports = a;
    }, { "../utils": 32, "./DataReader": 18 }], 21: [function(r, f, c) {
      var n = r("./ArrayReader");
      function a(i) {
        n.call(this, i);
      }
      r("../utils").inherits(a, n), a.prototype.readData = function(i) {
        if (this.checkOffset(i), i === 0) return new Uint8Array(0);
        var l = this.data.subarray(this.zero + this.index, this.zero + this.index + i);
        return this.index += i, l;
      }, f.exports = a;
    }, { "../utils": 32, "./ArrayReader": 17 }], 22: [function(r, f, c) {
      var n = r("../utils"), a = r("../support"), i = r("./ArrayReader"), l = r("./StringReader"), _ = r("./NodeBufferReader"), x = r("./Uint8ArrayReader");
      f.exports = function(b) {
        var v = n.getTypeOf(b);
        return n.checkSupport(v), v !== "string" || a.uint8array ? v === "nodebuffer" ? new _(b) : a.uint8array ? new x(n.transformTo("uint8array", b)) : new i(n.transformTo("array", b)) : new l(b);
      };
    }, { "../support": 30, "../utils": 32, "./ArrayReader": 17, "./NodeBufferReader": 19, "./StringReader": 20, "./Uint8ArrayReader": 21 }], 23: [function(r, f, c) {
      c.LOCAL_FILE_HEADER = "PK", c.CENTRAL_FILE_HEADER = "PK", c.CENTRAL_DIRECTORY_END = "PK", c.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", c.ZIP64_CENTRAL_DIRECTORY_END = "PK", c.DATA_DESCRIPTOR = "PK\x07\b";
    }, {}], 24: [function(r, f, c) {
      var n = r("./GenericWorker"), a = r("../utils");
      function i(l) {
        n.call(this, "ConvertWorker to " + l), this.destType = l;
      }
      a.inherits(i, n), i.prototype.processChunk = function(l) {
        this.push({ data: a.transformTo(this.destType, l.data), meta: l.meta });
      }, f.exports = i;
    }, { "../utils": 32, "./GenericWorker": 28 }], 25: [function(r, f, c) {
      var n = r("./GenericWorker"), a = r("../crc32");
      function i() {
        n.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
      }
      r("../utils").inherits(i, n), i.prototype.processChunk = function(l) {
        this.streamInfo.crc32 = a(l.data, this.streamInfo.crc32 || 0), this.push(l);
      }, f.exports = i;
    }, { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 }], 26: [function(r, f, c) {
      var n = r("../utils"), a = r("./GenericWorker");
      function i(l) {
        a.call(this, "DataLengthProbe for " + l), this.propName = l, this.withStreamInfo(l, 0);
      }
      n.inherits(i, a), i.prototype.processChunk = function(l) {
        if (l) {
          var _ = this.streamInfo[this.propName] || 0;
          this.streamInfo[this.propName] = _ + l.data.length;
        }
        a.prototype.processChunk.call(this, l);
      }, f.exports = i;
    }, { "../utils": 32, "./GenericWorker": 28 }], 27: [function(r, f, c) {
      var n = r("../utils"), a = r("./GenericWorker");
      function i(l) {
        a.call(this, "DataWorker");
        var _ = this;
        this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, l.then(function(x) {
          _.dataIsReady = !0, _.data = x, _.max = x && x.length || 0, _.type = n.getTypeOf(x), _.isPaused || _._tickAndRepeat();
        }, function(x) {
          _.error(x);
        });
      }
      n.inherits(i, a), i.prototype.cleanUp = function() {
        a.prototype.cleanUp.call(this), this.data = null;
      }, i.prototype.resume = function() {
        return !!a.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = !0, n.delay(this._tickAndRepeat, [], this)), !0);
      }, i.prototype._tickAndRepeat = function() {
        this._tickScheduled = !1, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (n.delay(this._tickAndRepeat, [], this), this._tickScheduled = !0));
      }, i.prototype._tick = function() {
        if (this.isPaused || this.isFinished) return !1;
        var l = null, _ = Math.min(this.max, this.index + 16384);
        if (this.index >= this.max) return this.end();
        switch (this.type) {
          case "string":
            l = this.data.substring(this.index, _);
            break;
          case "uint8array":
            l = this.data.subarray(this.index, _);
            break;
          case "array":
          case "nodebuffer":
            l = this.data.slice(this.index, _);
        }
        return this.index = _, this.push({ data: l, meta: { percent: this.max ? this.index / this.max * 100 : 0 } });
      }, f.exports = i;
    }, { "../utils": 32, "./GenericWorker": 28 }], 28: [function(r, f, c) {
      function n(a) {
        this.name = a || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = !0, this.isFinished = !1, this.isLocked = !1, this._listeners = { data: [], end: [], error: [] }, this.previous = null;
      }
      n.prototype = { push: function(a) {
        this.emit("data", a);
      }, end: function() {
        if (this.isFinished) return !1;
        this.flush();
        try {
          this.emit("end"), this.cleanUp(), this.isFinished = !0;
        } catch (a) {
          this.emit("error", a);
        }
        return !0;
      }, error: function(a) {
        return !this.isFinished && (this.isPaused ? this.generatedError = a : (this.isFinished = !0, this.emit("error", a), this.previous && this.previous.error(a), this.cleanUp()), !0);
      }, on: function(a, i) {
        return this._listeners[a].push(i), this;
      }, cleanUp: function() {
        this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
      }, emit: function(a, i) {
        if (this._listeners[a]) for (var l = 0; l < this._listeners[a].length; l++) this._listeners[a][l].call(this, i);
      }, pipe: function(a) {
        return a.registerPrevious(this);
      }, registerPrevious: function(a) {
        if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
        this.streamInfo = a.streamInfo, this.mergeStreamInfo(), this.previous = a;
        var i = this;
        return a.on("data", function(l) {
          i.processChunk(l);
        }), a.on("end", function() {
          i.end();
        }), a.on("error", function(l) {
          i.error(l);
        }), this;
      }, pause: function() {
        return !this.isPaused && !this.isFinished && (this.isPaused = !0, this.previous && this.previous.pause(), !0);
      }, resume: function() {
        if (!this.isPaused || this.isFinished) return !1;
        var a = this.isPaused = !1;
        return this.generatedError && (this.error(this.generatedError), a = !0), this.previous && this.previous.resume(), !a;
      }, flush: function() {
      }, processChunk: function(a) {
        this.push(a);
      }, withStreamInfo: function(a, i) {
        return this.extraStreamInfo[a] = i, this.mergeStreamInfo(), this;
      }, mergeStreamInfo: function() {
        for (var a in this.extraStreamInfo) Object.prototype.hasOwnProperty.call(this.extraStreamInfo, a) && (this.streamInfo[a] = this.extraStreamInfo[a]);
      }, lock: function() {
        if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
        this.isLocked = !0, this.previous && this.previous.lock();
      }, toString: function() {
        var a = "Worker " + this.name;
        return this.previous ? this.previous + " -> " + a : a;
      } }, f.exports = n;
    }, {}], 29: [function(r, f, c) {
      var n = r("../utils"), a = r("./ConvertWorker"), i = r("./GenericWorker"), l = r("../base64"), _ = r("../support"), x = r("../external"), b = null;
      if (_.nodestream) try {
        b = r("../nodejs/NodejsStreamOutputAdapter");
      } catch {
      }
      function v(y, u) {
        return new x.Promise(function(m, d) {
          var w = [], S = y._internalType, A = y._outputType, T = y._mimeType;
          y.on("data", function(L, D) {
            w.push(L), u && u(D);
          }).on("error", function(L) {
            w = [], d(L);
          }).on("end", function() {
            try {
              var L = function(D, Z, P) {
                switch (D) {
                  case "blob":
                    return n.newBlob(n.transformTo("arraybuffer", Z), P);
                  case "base64":
                    return l.encode(Z);
                  default:
                    return n.transformTo(D, Z);
                }
              }(A, function(D, Z) {
                var P, H = 0, st = null, E = 0;
                for (P = 0; P < Z.length; P++) E += Z[P].length;
                switch (D) {
                  case "string":
                    return Z.join("");
                  case "array":
                    return Array.prototype.concat.apply([], Z);
                  case "uint8array":
                    for (st = new Uint8Array(E), P = 0; P < Z.length; P++) st.set(Z[P], H), H += Z[P].length;
                    return st;
                  case "nodebuffer":
                    return Buffer.concat(Z);
                  default:
                    throw new Error("concat : unsupported type '" + D + "'");
                }
              }(S, w), T);
              m(L);
            } catch (D) {
              d(D);
            }
            w = [];
          }).resume();
        });
      }
      function h(y, u, m) {
        var d = u;
        switch (u) {
          case "blob":
          case "arraybuffer":
            d = "uint8array";
            break;
          case "base64":
            d = "string";
        }
        try {
          this._internalType = d, this._outputType = u, this._mimeType = m, n.checkSupport(d), this._worker = y.pipe(new a(d)), y.lock();
        } catch (w) {
          this._worker = new i("error"), this._worker.error(w);
        }
      }
      h.prototype = { accumulate: function(y) {
        return v(this, y);
      }, on: function(y, u) {
        var m = this;
        return y === "data" ? this._worker.on(y, function(d) {
          u.call(m, d.data, d.meta);
        }) : this._worker.on(y, function() {
          n.delay(u, arguments, m);
        }), this;
      }, resume: function() {
        return n.delay(this._worker.resume, [], this._worker), this;
      }, pause: function() {
        return this._worker.pause(), this;
      }, toNodejsStream: function(y) {
        if (n.checkSupport("nodestream"), this._outputType !== "nodebuffer") throw new Error(this._outputType + " is not supported by this method");
        return new b(this, { objectMode: this._outputType !== "nodebuffer" }, y);
      } }, f.exports = h;
    }, { "../base64": 1, "../external": 6, "../nodejs/NodejsStreamOutputAdapter": 13, "../support": 30, "../utils": 32, "./ConvertWorker": 24, "./GenericWorker": 28 }], 30: [function(r, f, c) {
      if (c.base64 = !0, c.array = !0, c.string = !0, c.arraybuffer = typeof ArrayBuffer < "u" && typeof Uint8Array < "u", c.nodebuffer = typeof Buffer < "u", c.uint8array = typeof Uint8Array < "u", typeof ArrayBuffer > "u") c.blob = !1;
      else {
        var n = new ArrayBuffer(0);
        try {
          c.blob = new Blob([n], { type: "application/zip" }).size === 0;
        } catch {
          try {
            var a = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            a.append(n), c.blob = a.getBlob("application/zip").size === 0;
          } catch {
            c.blob = !1;
          }
        }
      }
      try {
        c.nodestream = !!r("readable-stream").Readable;
      } catch {
        c.nodestream = !1;
      }
    }, { "readable-stream": 16 }], 31: [function(r, f, c) {
      for (var n = r("./utils"), a = r("./support"), i = r("./nodejsUtils"), l = r("./stream/GenericWorker"), _ = new Array(256), x = 0; x < 256; x++) _[x] = 252 <= x ? 6 : 248 <= x ? 5 : 240 <= x ? 4 : 224 <= x ? 3 : 192 <= x ? 2 : 1;
      _[254] = _[254] = 1;
      function b() {
        l.call(this, "utf-8 decode"), this.leftOver = null;
      }
      function v() {
        l.call(this, "utf-8 encode");
      }
      c.utf8encode = function(h) {
        return a.nodebuffer ? i.newBufferFrom(h, "utf-8") : function(y) {
          var u, m, d, w, S, A = y.length, T = 0;
          for (w = 0; w < A; w++) (64512 & (m = y.charCodeAt(w))) == 55296 && w + 1 < A && (64512 & (d = y.charCodeAt(w + 1))) == 56320 && (m = 65536 + (m - 55296 << 10) + (d - 56320), w++), T += m < 128 ? 1 : m < 2048 ? 2 : m < 65536 ? 3 : 4;
          for (u = a.uint8array ? new Uint8Array(T) : new Array(T), w = S = 0; S < T; w++) (64512 & (m = y.charCodeAt(w))) == 55296 && w + 1 < A && (64512 & (d = y.charCodeAt(w + 1))) == 56320 && (m = 65536 + (m - 55296 << 10) + (d - 56320), w++), m < 128 ? u[S++] = m : (m < 2048 ? u[S++] = 192 | m >>> 6 : (m < 65536 ? u[S++] = 224 | m >>> 12 : (u[S++] = 240 | m >>> 18, u[S++] = 128 | m >>> 12 & 63), u[S++] = 128 | m >>> 6 & 63), u[S++] = 128 | 63 & m);
          return u;
        }(h);
      }, c.utf8decode = function(h) {
        return a.nodebuffer ? n.transformTo("nodebuffer", h).toString("utf-8") : function(y) {
          var u, m, d, w, S = y.length, A = new Array(2 * S);
          for (u = m = 0; u < S; ) if ((d = y[u++]) < 128) A[m++] = d;
          else if (4 < (w = _[d])) A[m++] = 65533, u += w - 1;
          else {
            for (d &= w === 2 ? 31 : w === 3 ? 15 : 7; 1 < w && u < S; ) d = d << 6 | 63 & y[u++], w--;
            1 < w ? A[m++] = 65533 : d < 65536 ? A[m++] = d : (d -= 65536, A[m++] = 55296 | d >> 10 & 1023, A[m++] = 56320 | 1023 & d);
          }
          return A.length !== m && (A.subarray ? A = A.subarray(0, m) : A.length = m), n.applyFromCharCode(A);
        }(h = n.transformTo(a.uint8array ? "uint8array" : "array", h));
      }, n.inherits(b, l), b.prototype.processChunk = function(h) {
        var y = n.transformTo(a.uint8array ? "uint8array" : "array", h.data);
        if (this.leftOver && this.leftOver.length) {
          if (a.uint8array) {
            var u = y;
            (y = new Uint8Array(u.length + this.leftOver.length)).set(this.leftOver, 0), y.set(u, this.leftOver.length);
          } else y = this.leftOver.concat(y);
          this.leftOver = null;
        }
        var m = function(w, S) {
          var A;
          for ((S = S || w.length) > w.length && (S = w.length), A = S - 1; 0 <= A && (192 & w[A]) == 128; ) A--;
          return A < 0 || A === 0 ? S : A + _[w[A]] > S ? A : S;
        }(y), d = y;
        m !== y.length && (a.uint8array ? (d = y.subarray(0, m), this.leftOver = y.subarray(m, y.length)) : (d = y.slice(0, m), this.leftOver = y.slice(m, y.length))), this.push({ data: c.utf8decode(d), meta: h.meta });
      }, b.prototype.flush = function() {
        this.leftOver && this.leftOver.length && (this.push({ data: c.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
      }, c.Utf8DecodeWorker = b, n.inherits(v, l), v.prototype.processChunk = function(h) {
        this.push({ data: c.utf8encode(h.data), meta: h.meta });
      }, c.Utf8EncodeWorker = v;
    }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }], 32: [function(r, f, c) {
      var n = r("./support"), a = r("./base64"), i = r("./nodejsUtils"), l = r("./external");
      function _(u) {
        return u;
      }
      function x(u, m) {
        for (var d = 0; d < u.length; ++d) m[d] = 255 & u.charCodeAt(d);
        return m;
      }
      r("setimmediate"), c.newBlob = function(u, m) {
        c.checkSupport("blob");
        try {
          return new Blob([u], { type: m });
        } catch {
          try {
            var d = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            return d.append(u), d.getBlob(m);
          } catch {
            throw new Error("Bug : can't construct the Blob.");
          }
        }
      };
      var b = { stringifyByChunk: function(u, m, d) {
        var w = [], S = 0, A = u.length;
        if (A <= d) return String.fromCharCode.apply(null, u);
        for (; S < A; ) m === "array" || m === "nodebuffer" ? w.push(String.fromCharCode.apply(null, u.slice(S, Math.min(S + d, A)))) : w.push(String.fromCharCode.apply(null, u.subarray(S, Math.min(S + d, A)))), S += d;
        return w.join("");
      }, stringifyByChar: function(u) {
        for (var m = "", d = 0; d < u.length; d++) m += String.fromCharCode(u[d]);
        return m;
      }, applyCanBeUsed: { uint8array: function() {
        try {
          return n.uint8array && String.fromCharCode.apply(null, new Uint8Array(1)).length === 1;
        } catch {
          return !1;
        }
      }(), nodebuffer: function() {
        try {
          return n.nodebuffer && String.fromCharCode.apply(null, i.allocBuffer(1)).length === 1;
        } catch {
          return !1;
        }
      }() } };
      function v(u) {
        var m = 65536, d = c.getTypeOf(u), w = !0;
        if (d === "uint8array" ? w = b.applyCanBeUsed.uint8array : d === "nodebuffer" && (w = b.applyCanBeUsed.nodebuffer), w) for (; 1 < m; ) try {
          return b.stringifyByChunk(u, d, m);
        } catch {
          m = Math.floor(m / 2);
        }
        return b.stringifyByChar(u);
      }
      function h(u, m) {
        for (var d = 0; d < u.length; d++) m[d] = u[d];
        return m;
      }
      c.applyFromCharCode = v;
      var y = {};
      y.string = { string: _, array: function(u) {
        return x(u, new Array(u.length));
      }, arraybuffer: function(u) {
        return y.string.uint8array(u).buffer;
      }, uint8array: function(u) {
        return x(u, new Uint8Array(u.length));
      }, nodebuffer: function(u) {
        return x(u, i.allocBuffer(u.length));
      } }, y.array = { string: v, array: _, arraybuffer: function(u) {
        return new Uint8Array(u).buffer;
      }, uint8array: function(u) {
        return new Uint8Array(u);
      }, nodebuffer: function(u) {
        return i.newBufferFrom(u);
      } }, y.arraybuffer = { string: function(u) {
        return v(new Uint8Array(u));
      }, array: function(u) {
        return h(new Uint8Array(u), new Array(u.byteLength));
      }, arraybuffer: _, uint8array: function(u) {
        return new Uint8Array(u);
      }, nodebuffer: function(u) {
        return i.newBufferFrom(new Uint8Array(u));
      } }, y.uint8array = { string: v, array: function(u) {
        return h(u, new Array(u.length));
      }, arraybuffer: function(u) {
        return u.buffer;
      }, uint8array: _, nodebuffer: function(u) {
        return i.newBufferFrom(u);
      } }, y.nodebuffer = { string: v, array: function(u) {
        return h(u, new Array(u.length));
      }, arraybuffer: function(u) {
        return y.nodebuffer.uint8array(u).buffer;
      }, uint8array: function(u) {
        return h(u, new Uint8Array(u.length));
      }, nodebuffer: _ }, c.transformTo = function(u, m) {
        if (m = m || "", !u) return m;
        c.checkSupport(u);
        var d = c.getTypeOf(m);
        return y[d][u](m);
      }, c.resolve = function(u) {
        for (var m = u.split("/"), d = [], w = 0; w < m.length; w++) {
          var S = m[w];
          S === "." || S === "" && w !== 0 && w !== m.length - 1 || (S === ".." ? d.pop() : d.push(S));
        }
        return d.join("/");
      }, c.getTypeOf = function(u) {
        return typeof u == "string" ? "string" : Object.prototype.toString.call(u) === "[object Array]" ? "array" : n.nodebuffer && i.isBuffer(u) ? "nodebuffer" : n.uint8array && u instanceof Uint8Array ? "uint8array" : n.arraybuffer && u instanceof ArrayBuffer ? "arraybuffer" : void 0;
      }, c.checkSupport = function(u) {
        if (!n[u.toLowerCase()]) throw new Error(u + " is not supported by this platform");
      }, c.MAX_VALUE_16BITS = 65535, c.MAX_VALUE_32BITS = -1, c.pretty = function(u) {
        var m, d, w = "";
        for (d = 0; d < (u || "").length; d++) w += "\\x" + ((m = u.charCodeAt(d)) < 16 ? "0" : "") + m.toString(16).toUpperCase();
        return w;
      }, c.delay = function(u, m, d) {
        setImmediate(function() {
          u.apply(d || null, m || []);
        });
      }, c.inherits = function(u, m) {
        function d() {
        }
        d.prototype = m.prototype, u.prototype = new d();
      }, c.extend = function() {
        var u, m, d = {};
        for (u = 0; u < arguments.length; u++) for (m in arguments[u]) Object.prototype.hasOwnProperty.call(arguments[u], m) && d[m] === void 0 && (d[m] = arguments[u][m]);
        return d;
      }, c.prepareContent = function(u, m, d, w, S) {
        return l.Promise.resolve(m).then(function(A) {
          return n.blob && (A instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(A)) !== -1) && typeof FileReader < "u" ? new l.Promise(function(T, L) {
            var D = new FileReader();
            D.onload = function(Z) {
              T(Z.target.result);
            }, D.onerror = function(Z) {
              L(Z.target.error);
            }, D.readAsArrayBuffer(A);
          }) : A;
        }).then(function(A) {
          var T = c.getTypeOf(A);
          return T ? (T === "arraybuffer" ? A = c.transformTo("uint8array", A) : T === "string" && (S ? A = a.decode(A) : d && w !== !0 && (A = function(L) {
            return x(L, n.uint8array ? new Uint8Array(L.length) : new Array(L.length));
          }(A))), A) : l.Promise.reject(new Error("Can't read the data of '" + u + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
        });
      };
    }, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, setimmediate: 54 }], 33: [function(r, f, c) {
      var n = r("./reader/readerFor"), a = r("./utils"), i = r("./signature"), l = r("./zipEntry"), _ = r("./support");
      function x(b) {
        this.files = [], this.loadOptions = b;
      }
      x.prototype = { checkSignature: function(b) {
        if (!this.reader.readAndCheckSignature(b)) {
          this.reader.index -= 4;
          var v = this.reader.readString(4);
          throw new Error("Corrupted zip or bug: unexpected signature (" + a.pretty(v) + ", expected " + a.pretty(b) + ")");
        }
      }, isSignature: function(b, v) {
        var h = this.reader.index;
        this.reader.setIndex(b);
        var y = this.reader.readString(4) === v;
        return this.reader.setIndex(h), y;
      }, readBlockEndOfCentral: function() {
        this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
        var b = this.reader.readData(this.zipCommentLength), v = _.uint8array ? "uint8array" : "array", h = a.transformTo(v, b);
        this.zipComment = this.loadOptions.decodeFileName(h);
      }, readBlockZip64EndOfCentral: function() {
        this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
        for (var b, v, h, y = this.zip64EndOfCentralSize - 44; 0 < y; ) b = this.reader.readInt(2), v = this.reader.readInt(4), h = this.reader.readData(v), this.zip64ExtensibleData[b] = { id: b, length: v, value: h };
      }, readBlockZip64EndOfCentralLocator: function() {
        if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount) throw new Error("Multi-volumes zip are not supported");
      }, readLocalFiles: function() {
        var b, v;
        for (b = 0; b < this.files.length; b++) v = this.files[b], this.reader.setIndex(v.localHeaderOffset), this.checkSignature(i.LOCAL_FILE_HEADER), v.readLocalPart(this.reader), v.handleUTF8(), v.processAttributes();
      }, readCentralDir: function() {
        var b;
        for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(i.CENTRAL_FILE_HEADER); ) (b = new l({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(b);
        if (this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0) throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
      }, readEndOfCentral: function() {
        var b = this.reader.lastIndexOfSignature(i.CENTRAL_DIRECTORY_END);
        if (b < 0) throw this.isSignature(0, i.LOCAL_FILE_HEADER) ? new Error("Corrupted zip: can't find end of central directory") : new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
        this.reader.setIndex(b);
        var v = b;
        if (this.checkSignature(i.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === a.MAX_VALUE_16BITS || this.diskWithCentralDirStart === a.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === a.MAX_VALUE_16BITS || this.centralDirRecords === a.MAX_VALUE_16BITS || this.centralDirSize === a.MAX_VALUE_32BITS || this.centralDirOffset === a.MAX_VALUE_32BITS) {
          if (this.zip64 = !0, (b = this.reader.lastIndexOfSignature(i.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
          if (this.reader.setIndex(b), this.checkSignature(i.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, i.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(i.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
          this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(i.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
        }
        var h = this.centralDirOffset + this.centralDirSize;
        this.zip64 && (h += 20, h += 12 + this.zip64EndOfCentralSize);
        var y = v - h;
        if (0 < y) this.isSignature(v, i.CENTRAL_FILE_HEADER) || (this.reader.zero = y);
        else if (y < 0) throw new Error("Corrupted zip: missing " + Math.abs(y) + " bytes.");
      }, prepareReader: function(b) {
        this.reader = n(b);
      }, load: function(b) {
        this.prepareReader(b), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
      } }, f.exports = x;
    }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utils": 32, "./zipEntry": 34 }], 34: [function(r, f, c) {
      var n = r("./reader/readerFor"), a = r("./utils"), i = r("./compressedObject"), l = r("./crc32"), _ = r("./utf8"), x = r("./compressions"), b = r("./support");
      function v(h, y) {
        this.options = h, this.loadOptions = y;
      }
      v.prototype = { isEncrypted: function() {
        return (1 & this.bitFlag) == 1;
      }, useUTF8: function() {
        return (2048 & this.bitFlag) == 2048;
      }, readLocalPart: function(h) {
        var y, u;
        if (h.skip(22), this.fileNameLength = h.readInt(2), u = h.readInt(2), this.fileName = h.readData(this.fileNameLength), h.skip(u), this.compressedSize === -1 || this.uncompressedSize === -1) throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
        if ((y = function(m) {
          for (var d in x) if (Object.prototype.hasOwnProperty.call(x, d) && x[d].magic === m) return x[d];
          return null;
        }(this.compressionMethod)) === null) throw new Error("Corrupted zip : compression " + a.pretty(this.compressionMethod) + " unknown (inner file : " + a.transformTo("string", this.fileName) + ")");
        this.decompressed = new i(this.compressedSize, this.uncompressedSize, this.crc32, y, h.readData(this.compressedSize));
      }, readCentralPart: function(h) {
        this.versionMadeBy = h.readInt(2), h.skip(2), this.bitFlag = h.readInt(2), this.compressionMethod = h.readString(2), this.date = h.readDate(), this.crc32 = h.readInt(4), this.compressedSize = h.readInt(4), this.uncompressedSize = h.readInt(4);
        var y = h.readInt(2);
        if (this.extraFieldsLength = h.readInt(2), this.fileCommentLength = h.readInt(2), this.diskNumberStart = h.readInt(2), this.internalFileAttributes = h.readInt(2), this.externalFileAttributes = h.readInt(4), this.localHeaderOffset = h.readInt(4), this.isEncrypted()) throw new Error("Encrypted zip are not supported");
        h.skip(y), this.readExtraFields(h), this.parseZIP64ExtraField(h), this.fileComment = h.readData(this.fileCommentLength);
      }, processAttributes: function() {
        this.unixPermissions = null, this.dosPermissions = null;
        var h = this.versionMadeBy >> 8;
        this.dir = !!(16 & this.externalFileAttributes), h == 0 && (this.dosPermissions = 63 & this.externalFileAttributes), h == 3 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || this.fileNameStr.slice(-1) !== "/" || (this.dir = !0);
      }, parseZIP64ExtraField: function() {
        if (this.extraFields[1]) {
          var h = n(this.extraFields[1].value);
          this.uncompressedSize === a.MAX_VALUE_32BITS && (this.uncompressedSize = h.readInt(8)), this.compressedSize === a.MAX_VALUE_32BITS && (this.compressedSize = h.readInt(8)), this.localHeaderOffset === a.MAX_VALUE_32BITS && (this.localHeaderOffset = h.readInt(8)), this.diskNumberStart === a.MAX_VALUE_32BITS && (this.diskNumberStart = h.readInt(4));
        }
      }, readExtraFields: function(h) {
        var y, u, m, d = h.index + this.extraFieldsLength;
        for (this.extraFields || (this.extraFields = {}); h.index + 4 < d; ) y = h.readInt(2), u = h.readInt(2), m = h.readData(u), this.extraFields[y] = { id: y, length: u, value: m };
        h.setIndex(d);
      }, handleUTF8: function() {
        var h = b.uint8array ? "uint8array" : "array";
        if (this.useUTF8()) this.fileNameStr = _.utf8decode(this.fileName), this.fileCommentStr = _.utf8decode(this.fileComment);
        else {
          var y = this.findExtraFieldUnicodePath();
          if (y !== null) this.fileNameStr = y;
          else {
            var u = a.transformTo(h, this.fileName);
            this.fileNameStr = this.loadOptions.decodeFileName(u);
          }
          var m = this.findExtraFieldUnicodeComment();
          if (m !== null) this.fileCommentStr = m;
          else {
            var d = a.transformTo(h, this.fileComment);
            this.fileCommentStr = this.loadOptions.decodeFileName(d);
          }
        }
      }, findExtraFieldUnicodePath: function() {
        var h = this.extraFields[28789];
        if (h) {
          var y = n(h.value);
          return y.readInt(1) !== 1 || l(this.fileName) !== y.readInt(4) ? null : _.utf8decode(y.readData(h.length - 5));
        }
        return null;
      }, findExtraFieldUnicodeComment: function() {
        var h = this.extraFields[25461];
        if (h) {
          var y = n(h.value);
          return y.readInt(1) !== 1 || l(this.fileComment) !== y.readInt(4) ? null : _.utf8decode(y.readData(h.length - 5));
        }
        return null;
      } }, f.exports = v;
    }, { "./compressedObject": 2, "./compressions": 3, "./crc32": 4, "./reader/readerFor": 22, "./support": 30, "./utf8": 31, "./utils": 32 }], 35: [function(r, f, c) {
      function n(y, u, m) {
        this.name = y, this.dir = m.dir, this.date = m.date, this.comment = m.comment, this.unixPermissions = m.unixPermissions, this.dosPermissions = m.dosPermissions, this._data = u, this._dataBinary = m.binary, this.options = { compression: m.compression, compressionOptions: m.compressionOptions };
      }
      var a = r("./stream/StreamHelper"), i = r("./stream/DataWorker"), l = r("./utf8"), _ = r("./compressedObject"), x = r("./stream/GenericWorker");
      n.prototype = { internalStream: function(y) {
        var u = null, m = "string";
        try {
          if (!y) throw new Error("No output type specified.");
          var d = (m = y.toLowerCase()) === "string" || m === "text";
          m !== "binarystring" && m !== "text" || (m = "string"), u = this._decompressWorker();
          var w = !this._dataBinary;
          w && !d && (u = u.pipe(new l.Utf8EncodeWorker())), !w && d && (u = u.pipe(new l.Utf8DecodeWorker()));
        } catch (S) {
          (u = new x("error")).error(S);
        }
        return new a(u, m, "");
      }, async: function(y, u) {
        return this.internalStream(y).accumulate(u);
      }, nodeStream: function(y, u) {
        return this.internalStream(y || "nodebuffer").toNodejsStream(u);
      }, _compressWorker: function(y, u) {
        if (this._data instanceof _ && this._data.compression.magic === y.magic) return this._data.getCompressedWorker();
        var m = this._decompressWorker();
        return this._dataBinary || (m = m.pipe(new l.Utf8EncodeWorker())), _.createWorkerFrom(m, y, u);
      }, _decompressWorker: function() {
        return this._data instanceof _ ? this._data.getContentWorker() : this._data instanceof x ? this._data : new i(this._data);
      } };
      for (var b = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], v = function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, h = 0; h < b.length; h++) n.prototype[b[h]] = v;
      f.exports = n;
    }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }], 36: [function(r, f, c) {
      (function(n) {
        var a, i, l = n.MutationObserver || n.WebKitMutationObserver;
        if (l) {
          var _ = 0, x = new l(y), b = n.document.createTextNode("");
          x.observe(b, { characterData: !0 }), a = function() {
            b.data = _ = ++_ % 2;
          };
        } else if (n.setImmediate || n.MessageChannel === void 0) a = "document" in n && "onreadystatechange" in n.document.createElement("script") ? function() {
          var u = n.document.createElement("script");
          u.onreadystatechange = function() {
            y(), u.onreadystatechange = null, u.parentNode.removeChild(u), u = null;
          }, n.document.documentElement.appendChild(u);
        } : function() {
          setTimeout(y, 0);
        };
        else {
          var v = new n.MessageChannel();
          v.port1.onmessage = y, a = function() {
            v.port2.postMessage(0);
          };
        }
        var h = [];
        function y() {
          var u, m;
          i = !0;
          for (var d = h.length; d; ) {
            for (m = h, h = [], u = -1; ++u < d; ) m[u]();
            d = h.length;
          }
          i = !1;
        }
        f.exports = function(u) {
          h.push(u) !== 1 || i || a();
        };
      }).call(this, typeof ke < "u" ? ke : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 37: [function(r, f, c) {
      var n = r("immediate");
      function a() {
      }
      var i = {}, l = ["REJECTED"], _ = ["FULFILLED"], x = ["PENDING"];
      function b(d) {
        if (typeof d != "function") throw new TypeError("resolver must be a function");
        this.state = x, this.queue = [], this.outcome = void 0, d !== a && u(this, d);
      }
      function v(d, w, S) {
        this.promise = d, typeof w == "function" && (this.onFulfilled = w, this.callFulfilled = this.otherCallFulfilled), typeof S == "function" && (this.onRejected = S, this.callRejected = this.otherCallRejected);
      }
      function h(d, w, S) {
        n(function() {
          var A;
          try {
            A = w(S);
          } catch (T) {
            return i.reject(d, T);
          }
          A === d ? i.reject(d, new TypeError("Cannot resolve promise with itself")) : i.resolve(d, A);
        });
      }
      function y(d) {
        var w = d && d.then;
        if (d && (typeof d == "object" || typeof d == "function") && typeof w == "function") return function() {
          w.apply(d, arguments);
        };
      }
      function u(d, w) {
        var S = !1;
        function A(D) {
          S || (S = !0, i.reject(d, D));
        }
        function T(D) {
          S || (S = !0, i.resolve(d, D));
        }
        var L = m(function() {
          w(T, A);
        });
        L.status === "error" && A(L.value);
      }
      function m(d, w) {
        var S = {};
        try {
          S.value = d(w), S.status = "success";
        } catch (A) {
          S.status = "error", S.value = A;
        }
        return S;
      }
      (f.exports = b).prototype.finally = function(d) {
        if (typeof d != "function") return this;
        var w = this.constructor;
        return this.then(function(S) {
          return w.resolve(d()).then(function() {
            return S;
          });
        }, function(S) {
          return w.resolve(d()).then(function() {
            throw S;
          });
        });
      }, b.prototype.catch = function(d) {
        return this.then(null, d);
      }, b.prototype.then = function(d, w) {
        if (typeof d != "function" && this.state === _ || typeof w != "function" && this.state === l) return this;
        var S = new this.constructor(a);
        return this.state !== x ? h(S, this.state === _ ? d : w, this.outcome) : this.queue.push(new v(S, d, w)), S;
      }, v.prototype.callFulfilled = function(d) {
        i.resolve(this.promise, d);
      }, v.prototype.otherCallFulfilled = function(d) {
        h(this.promise, this.onFulfilled, d);
      }, v.prototype.callRejected = function(d) {
        i.reject(this.promise, d);
      }, v.prototype.otherCallRejected = function(d) {
        h(this.promise, this.onRejected, d);
      }, i.resolve = function(d, w) {
        var S = m(y, w);
        if (S.status === "error") return i.reject(d, S.value);
        var A = S.value;
        if (A) u(d, A);
        else {
          d.state = _, d.outcome = w;
          for (var T = -1, L = d.queue.length; ++T < L; ) d.queue[T].callFulfilled(w);
        }
        return d;
      }, i.reject = function(d, w) {
        d.state = l, d.outcome = w;
        for (var S = -1, A = d.queue.length; ++S < A; ) d.queue[S].callRejected(w);
        return d;
      }, b.resolve = function(d) {
        return d instanceof this ? d : i.resolve(new this(a), d);
      }, b.reject = function(d) {
        var w = new this(a);
        return i.reject(w, d);
      }, b.all = function(d) {
        var w = this;
        if (Object.prototype.toString.call(d) !== "[object Array]") return this.reject(new TypeError("must be an array"));
        var S = d.length, A = !1;
        if (!S) return this.resolve([]);
        for (var T = new Array(S), L = 0, D = -1, Z = new this(a); ++D < S; ) P(d[D], D);
        return Z;
        function P(H, st) {
          w.resolve(H).then(function(E) {
            T[st] = E, ++L !== S || A || (A = !0, i.resolve(Z, T));
          }, function(E) {
            A || (A = !0, i.reject(Z, E));
          });
        }
      }, b.race = function(d) {
        var w = this;
        if (Object.prototype.toString.call(d) !== "[object Array]") return this.reject(new TypeError("must be an array"));
        var S = d.length, A = !1;
        if (!S) return this.resolve([]);
        for (var T = -1, L = new this(a); ++T < S; ) D = d[T], w.resolve(D).then(function(Z) {
          A || (A = !0, i.resolve(L, Z));
        }, function(Z) {
          A || (A = !0, i.reject(L, Z));
        });
        var D;
        return L;
      };
    }, { immediate: 36 }], 38: [function(r, f, c) {
      var n = {};
      (0, r("./lib/utils/common").assign)(n, r("./lib/deflate"), r("./lib/inflate"), r("./lib/zlib/constants")), f.exports = n;
    }, { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 }], 39: [function(r, f, c) {
      var n = r("./zlib/deflate"), a = r("./utils/common"), i = r("./utils/strings"), l = r("./zlib/messages"), _ = r("./zlib/zstream"), x = Object.prototype.toString, b = 0, v = -1, h = 0, y = 8;
      function u(d) {
        if (!(this instanceof u)) return new u(d);
        this.options = a.assign({ level: v, method: y, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: h, to: "" }, d || {});
        var w = this.options;
        w.raw && 0 < w.windowBits ? w.windowBits = -w.windowBits : w.gzip && 0 < w.windowBits && w.windowBits < 16 && (w.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new _(), this.strm.avail_out = 0;
        var S = n.deflateInit2(this.strm, w.level, w.method, w.windowBits, w.memLevel, w.strategy);
        if (S !== b) throw new Error(l[S]);
        if (w.header && n.deflateSetHeader(this.strm, w.header), w.dictionary) {
          var A;
          if (A = typeof w.dictionary == "string" ? i.string2buf(w.dictionary) : x.call(w.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(w.dictionary) : w.dictionary, (S = n.deflateSetDictionary(this.strm, A)) !== b) throw new Error(l[S]);
          this._dict_set = !0;
        }
      }
      function m(d, w) {
        var S = new u(w);
        if (S.push(d, !0), S.err) throw S.msg || l[S.err];
        return S.result;
      }
      u.prototype.push = function(d, w) {
        var S, A, T = this.strm, L = this.options.chunkSize;
        if (this.ended) return !1;
        A = w === ~~w ? w : w === !0 ? 4 : 0, typeof d == "string" ? T.input = i.string2buf(d) : x.call(d) === "[object ArrayBuffer]" ? T.input = new Uint8Array(d) : T.input = d, T.next_in = 0, T.avail_in = T.input.length;
        do {
          if (T.avail_out === 0 && (T.output = new a.Buf8(L), T.next_out = 0, T.avail_out = L), (S = n.deflate(T, A)) !== 1 && S !== b) return this.onEnd(S), !(this.ended = !0);
          T.avail_out !== 0 && (T.avail_in !== 0 || A !== 4 && A !== 2) || (this.options.to === "string" ? this.onData(i.buf2binstring(a.shrinkBuf(T.output, T.next_out))) : this.onData(a.shrinkBuf(T.output, T.next_out)));
        } while ((0 < T.avail_in || T.avail_out === 0) && S !== 1);
        return A === 4 ? (S = n.deflateEnd(this.strm), this.onEnd(S), this.ended = !0, S === b) : A !== 2 || (this.onEnd(b), !(T.avail_out = 0));
      }, u.prototype.onData = function(d) {
        this.chunks.push(d);
      }, u.prototype.onEnd = function(d) {
        d === b && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = a.flattenChunks(this.chunks)), this.chunks = [], this.err = d, this.msg = this.strm.msg;
      }, c.Deflate = u, c.deflate = m, c.deflateRaw = function(d, w) {
        return (w = w || {}).raw = !0, m(d, w);
      }, c.gzip = function(d, w) {
        return (w = w || {}).gzip = !0, m(d, w);
      };
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/deflate": 46, "./zlib/messages": 51, "./zlib/zstream": 53 }], 40: [function(r, f, c) {
      var n = r("./zlib/inflate"), a = r("./utils/common"), i = r("./utils/strings"), l = r("./zlib/constants"), _ = r("./zlib/messages"), x = r("./zlib/zstream"), b = r("./zlib/gzheader"), v = Object.prototype.toString;
      function h(u) {
        if (!(this instanceof h)) return new h(u);
        this.options = a.assign({ chunkSize: 16384, windowBits: 0, to: "" }, u || {});
        var m = this.options;
        m.raw && 0 <= m.windowBits && m.windowBits < 16 && (m.windowBits = -m.windowBits, m.windowBits === 0 && (m.windowBits = -15)), !(0 <= m.windowBits && m.windowBits < 16) || u && u.windowBits || (m.windowBits += 32), 15 < m.windowBits && m.windowBits < 48 && !(15 & m.windowBits) && (m.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new x(), this.strm.avail_out = 0;
        var d = n.inflateInit2(this.strm, m.windowBits);
        if (d !== l.Z_OK) throw new Error(_[d]);
        this.header = new b(), n.inflateGetHeader(this.strm, this.header);
      }
      function y(u, m) {
        var d = new h(m);
        if (d.push(u, !0), d.err) throw d.msg || _[d.err];
        return d.result;
      }
      h.prototype.push = function(u, m) {
        var d, w, S, A, T, L, D = this.strm, Z = this.options.chunkSize, P = this.options.dictionary, H = !1;
        if (this.ended) return !1;
        w = m === ~~m ? m : m === !0 ? l.Z_FINISH : l.Z_NO_FLUSH, typeof u == "string" ? D.input = i.binstring2buf(u) : v.call(u) === "[object ArrayBuffer]" ? D.input = new Uint8Array(u) : D.input = u, D.next_in = 0, D.avail_in = D.input.length;
        do {
          if (D.avail_out === 0 && (D.output = new a.Buf8(Z), D.next_out = 0, D.avail_out = Z), (d = n.inflate(D, l.Z_NO_FLUSH)) === l.Z_NEED_DICT && P && (L = typeof P == "string" ? i.string2buf(P) : v.call(P) === "[object ArrayBuffer]" ? new Uint8Array(P) : P, d = n.inflateSetDictionary(this.strm, L)), d === l.Z_BUF_ERROR && H === !0 && (d = l.Z_OK, H = !1), d !== l.Z_STREAM_END && d !== l.Z_OK) return this.onEnd(d), !(this.ended = !0);
          D.next_out && (D.avail_out !== 0 && d !== l.Z_STREAM_END && (D.avail_in !== 0 || w !== l.Z_FINISH && w !== l.Z_SYNC_FLUSH) || (this.options.to === "string" ? (S = i.utf8border(D.output, D.next_out), A = D.next_out - S, T = i.buf2string(D.output, S), D.next_out = A, D.avail_out = Z - A, A && a.arraySet(D.output, D.output, S, A, 0), this.onData(T)) : this.onData(a.shrinkBuf(D.output, D.next_out)))), D.avail_in === 0 && D.avail_out === 0 && (H = !0);
        } while ((0 < D.avail_in || D.avail_out === 0) && d !== l.Z_STREAM_END);
        return d === l.Z_STREAM_END && (w = l.Z_FINISH), w === l.Z_FINISH ? (d = n.inflateEnd(this.strm), this.onEnd(d), this.ended = !0, d === l.Z_OK) : w !== l.Z_SYNC_FLUSH || (this.onEnd(l.Z_OK), !(D.avail_out = 0));
      }, h.prototype.onData = function(u) {
        this.chunks.push(u);
      }, h.prototype.onEnd = function(u) {
        u === l.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = a.flattenChunks(this.chunks)), this.chunks = [], this.err = u, this.msg = this.strm.msg;
      }, c.Inflate = h, c.inflate = y, c.inflateRaw = function(u, m) {
        return (m = m || {}).raw = !0, y(u, m);
      }, c.ungzip = y;
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/constants": 44, "./zlib/gzheader": 47, "./zlib/inflate": 49, "./zlib/messages": 51, "./zlib/zstream": 53 }], 41: [function(r, f, c) {
      var n = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
      c.assign = function(l) {
        for (var _ = Array.prototype.slice.call(arguments, 1); _.length; ) {
          var x = _.shift();
          if (x) {
            if (typeof x != "object") throw new TypeError(x + "must be non-object");
            for (var b in x) x.hasOwnProperty(b) && (l[b] = x[b]);
          }
        }
        return l;
      }, c.shrinkBuf = function(l, _) {
        return l.length === _ ? l : l.subarray ? l.subarray(0, _) : (l.length = _, l);
      };
      var a = { arraySet: function(l, _, x, b, v) {
        if (_.subarray && l.subarray) l.set(_.subarray(x, x + b), v);
        else for (var h = 0; h < b; h++) l[v + h] = _[x + h];
      }, flattenChunks: function(l) {
        var _, x, b, v, h, y;
        for (_ = b = 0, x = l.length; _ < x; _++) b += l[_].length;
        for (y = new Uint8Array(b), _ = v = 0, x = l.length; _ < x; _++) h = l[_], y.set(h, v), v += h.length;
        return y;
      } }, i = { arraySet: function(l, _, x, b, v) {
        for (var h = 0; h < b; h++) l[v + h] = _[x + h];
      }, flattenChunks: function(l) {
        return [].concat.apply([], l);
      } };
      c.setTyped = function(l) {
        l ? (c.Buf8 = Uint8Array, c.Buf16 = Uint16Array, c.Buf32 = Int32Array, c.assign(c, a)) : (c.Buf8 = Array, c.Buf16 = Array, c.Buf32 = Array, c.assign(c, i));
      }, c.setTyped(n);
    }, {}], 42: [function(r, f, c) {
      var n = r("./common"), a = !0, i = !0;
      try {
        String.fromCharCode.apply(null, [0]);
      } catch {
        a = !1;
      }
      try {
        String.fromCharCode.apply(null, new Uint8Array(1));
      } catch {
        i = !1;
      }
      for (var l = new n.Buf8(256), _ = 0; _ < 256; _++) l[_] = 252 <= _ ? 6 : 248 <= _ ? 5 : 240 <= _ ? 4 : 224 <= _ ? 3 : 192 <= _ ? 2 : 1;
      function x(b, v) {
        if (v < 65537 && (b.subarray && i || !b.subarray && a)) return String.fromCharCode.apply(null, n.shrinkBuf(b, v));
        for (var h = "", y = 0; y < v; y++) h += String.fromCharCode(b[y]);
        return h;
      }
      l[254] = l[254] = 1, c.string2buf = function(b) {
        var v, h, y, u, m, d = b.length, w = 0;
        for (u = 0; u < d; u++) (64512 & (h = b.charCodeAt(u))) == 55296 && u + 1 < d && (64512 & (y = b.charCodeAt(u + 1))) == 56320 && (h = 65536 + (h - 55296 << 10) + (y - 56320), u++), w += h < 128 ? 1 : h < 2048 ? 2 : h < 65536 ? 3 : 4;
        for (v = new n.Buf8(w), u = m = 0; m < w; u++) (64512 & (h = b.charCodeAt(u))) == 55296 && u + 1 < d && (64512 & (y = b.charCodeAt(u + 1))) == 56320 && (h = 65536 + (h - 55296 << 10) + (y - 56320), u++), h < 128 ? v[m++] = h : (h < 2048 ? v[m++] = 192 | h >>> 6 : (h < 65536 ? v[m++] = 224 | h >>> 12 : (v[m++] = 240 | h >>> 18, v[m++] = 128 | h >>> 12 & 63), v[m++] = 128 | h >>> 6 & 63), v[m++] = 128 | 63 & h);
        return v;
      }, c.buf2binstring = function(b) {
        return x(b, b.length);
      }, c.binstring2buf = function(b) {
        for (var v = new n.Buf8(b.length), h = 0, y = v.length; h < y; h++) v[h] = b.charCodeAt(h);
        return v;
      }, c.buf2string = function(b, v) {
        var h, y, u, m, d = v || b.length, w = new Array(2 * d);
        for (h = y = 0; h < d; ) if ((u = b[h++]) < 128) w[y++] = u;
        else if (4 < (m = l[u])) w[y++] = 65533, h += m - 1;
        else {
          for (u &= m === 2 ? 31 : m === 3 ? 15 : 7; 1 < m && h < d; ) u = u << 6 | 63 & b[h++], m--;
          1 < m ? w[y++] = 65533 : u < 65536 ? w[y++] = u : (u -= 65536, w[y++] = 55296 | u >> 10 & 1023, w[y++] = 56320 | 1023 & u);
        }
        return x(w, y);
      }, c.utf8border = function(b, v) {
        var h;
        for ((v = v || b.length) > b.length && (v = b.length), h = v - 1; 0 <= h && (192 & b[h]) == 128; ) h--;
        return h < 0 || h === 0 ? v : h + l[b[h]] > v ? h : v;
      };
    }, { "./common": 41 }], 43: [function(r, f, c) {
      f.exports = function(n, a, i, l) {
        for (var _ = 65535 & n | 0, x = n >>> 16 & 65535 | 0, b = 0; i !== 0; ) {
          for (i -= b = 2e3 < i ? 2e3 : i; x = x + (_ = _ + a[l++] | 0) | 0, --b; ) ;
          _ %= 65521, x %= 65521;
        }
        return _ | x << 16 | 0;
      };
    }, {}], 44: [function(r, f, c) {
      f.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
    }, {}], 45: [function(r, f, c) {
      var n = function() {
        for (var a, i = [], l = 0; l < 256; l++) {
          a = l;
          for (var _ = 0; _ < 8; _++) a = 1 & a ? 3988292384 ^ a >>> 1 : a >>> 1;
          i[l] = a;
        }
        return i;
      }();
      f.exports = function(a, i, l, _) {
        var x = n, b = _ + l;
        a ^= -1;
        for (var v = _; v < b; v++) a = a >>> 8 ^ x[255 & (a ^ i[v])];
        return -1 ^ a;
      };
    }, {}], 46: [function(r, f, c) {
      var n, a = r("../utils/common"), i = r("./trees"), l = r("./adler32"), _ = r("./crc32"), x = r("./messages"), b = 0, v = 4, h = 0, y = -2, u = -1, m = 4, d = 2, w = 8, S = 9, A = 286, T = 30, L = 19, D = 2 * A + 1, Z = 15, P = 3, H = 258, st = H + P + 1, E = 42, F = 113, s = 1, M = 2, ct = 3, Y = 4;
      function ht(e, I) {
        return e.msg = x[I], I;
      }
      function K(e) {
        return (e << 1) - (4 < e ? 9 : 0);
      }
      function it(e) {
        for (var I = e.length; 0 <= --I; ) e[I] = 0;
      }
      function j(e) {
        var I = e.state, N = I.pending;
        N > e.avail_out && (N = e.avail_out), N !== 0 && (a.arraySet(e.output, I.pending_buf, I.pending_out, N, e.next_out), e.next_out += N, I.pending_out += N, e.total_out += N, e.avail_out -= N, I.pending -= N, I.pending === 0 && (I.pending_out = 0));
      }
      function z(e, I) {
        i._tr_flush_block(e, 0 <= e.block_start ? e.block_start : -1, e.strstart - e.block_start, I), e.block_start = e.strstart, j(e.strm);
      }
      function nt(e, I) {
        e.pending_buf[e.pending++] = I;
      }
      function et(e, I) {
        e.pending_buf[e.pending++] = I >>> 8 & 255, e.pending_buf[e.pending++] = 255 & I;
      }
      function J(e, I) {
        var N, g, p = e.max_chain_length, R = e.strstart, W = e.prev_length, V = e.nice_match, O = e.strstart > e.w_size - st ? e.strstart - (e.w_size - st) : 0, G = e.window, Q = e.w_mask, q = e.prev, rt = e.strstart + H, wt = G[R + W - 1], pt = G[R + W];
        e.prev_length >= e.good_match && (p >>= 2), V > e.lookahead && (V = e.lookahead);
        do
          if (G[(N = I) + W] === pt && G[N + W - 1] === wt && G[N] === G[R] && G[++N] === G[R + 1]) {
            R += 2, N++;
            do
              ;
            while (G[++R] === G[++N] && G[++R] === G[++N] && G[++R] === G[++N] && G[++R] === G[++N] && G[++R] === G[++N] && G[++R] === G[++N] && G[++R] === G[++N] && G[++R] === G[++N] && R < rt);
            if (g = H - (rt - R), R = rt - H, W < g) {
              if (e.match_start = I, V <= (W = g)) break;
              wt = G[R + W - 1], pt = G[R + W];
            }
          }
        while ((I = q[I & Q]) > O && --p != 0);
        return W <= e.lookahead ? W : e.lookahead;
      }
      function _t(e) {
        var I, N, g, p, R, W, V, O, G, Q, q = e.w_size;
        do {
          if (p = e.window_size - e.lookahead - e.strstart, e.strstart >= q + (q - st)) {
            for (a.arraySet(e.window, e.window, q, q, 0), e.match_start -= q, e.strstart -= q, e.block_start -= q, I = N = e.hash_size; g = e.head[--I], e.head[I] = q <= g ? g - q : 0, --N; ) ;
            for (I = N = q; g = e.prev[--I], e.prev[I] = q <= g ? g - q : 0, --N; ) ;
            p += q;
          }
          if (e.strm.avail_in === 0) break;
          if (W = e.strm, V = e.window, O = e.strstart + e.lookahead, G = p, Q = void 0, Q = W.avail_in, G < Q && (Q = G), N = Q === 0 ? 0 : (W.avail_in -= Q, a.arraySet(V, W.input, W.next_in, Q, O), W.state.wrap === 1 ? W.adler = l(W.adler, V, Q, O) : W.state.wrap === 2 && (W.adler = _(W.adler, V, Q, O)), W.next_in += Q, W.total_in += Q, Q), e.lookahead += N, e.lookahead + e.insert >= P) for (R = e.strstart - e.insert, e.ins_h = e.window[R], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[R + 1]) & e.hash_mask; e.insert && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[R + P - 1]) & e.hash_mask, e.prev[R & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = R, R++, e.insert--, !(e.lookahead + e.insert < P)); ) ;
        } while (e.lookahead < st && e.strm.avail_in !== 0);
      }
      function kt(e, I) {
        for (var N, g; ; ) {
          if (e.lookahead < st) {
            if (_t(e), e.lookahead < st && I === b) return s;
            if (e.lookahead === 0) break;
          }
          if (N = 0, e.lookahead >= P && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + P - 1]) & e.hash_mask, N = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), N !== 0 && e.strstart - N <= e.w_size - st && (e.match_length = J(e, N)), e.match_length >= P) if (g = i._tr_tally(e, e.strstart - e.match_start, e.match_length - P), e.lookahead -= e.match_length, e.match_length <= e.max_lazy_match && e.lookahead >= P) {
            for (e.match_length--; e.strstart++, e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + P - 1]) & e.hash_mask, N = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart, --e.match_length != 0; ) ;
            e.strstart++;
          } else e.strstart += e.match_length, e.match_length = 0, e.ins_h = e.window[e.strstart], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 1]) & e.hash_mask;
          else g = i._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++;
          if (g && (z(e, !1), e.strm.avail_out === 0)) return s;
        }
        return e.insert = e.strstart < P - 1 ? e.strstart : P - 1, I === v ? (z(e, !0), e.strm.avail_out === 0 ? ct : Y) : e.last_lit && (z(e, !1), e.strm.avail_out === 0) ? s : M;
      }
      function ut(e, I) {
        for (var N, g, p; ; ) {
          if (e.lookahead < st) {
            if (_t(e), e.lookahead < st && I === b) return s;
            if (e.lookahead === 0) break;
          }
          if (N = 0, e.lookahead >= P && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + P - 1]) & e.hash_mask, N = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), e.prev_length = e.match_length, e.prev_match = e.match_start, e.match_length = P - 1, N !== 0 && e.prev_length < e.max_lazy_match && e.strstart - N <= e.w_size - st && (e.match_length = J(e, N), e.match_length <= 5 && (e.strategy === 1 || e.match_length === P && 4096 < e.strstart - e.match_start) && (e.match_length = P - 1)), e.prev_length >= P && e.match_length <= e.prev_length) {
            for (p = e.strstart + e.lookahead - P, g = i._tr_tally(e, e.strstart - 1 - e.prev_match, e.prev_length - P), e.lookahead -= e.prev_length - 1, e.prev_length -= 2; ++e.strstart <= p && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + P - 1]) & e.hash_mask, N = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), --e.prev_length != 0; ) ;
            if (e.match_available = 0, e.match_length = P - 1, e.strstart++, g && (z(e, !1), e.strm.avail_out === 0)) return s;
          } else if (e.match_available) {
            if ((g = i._tr_tally(e, 0, e.window[e.strstart - 1])) && z(e, !1), e.strstart++, e.lookahead--, e.strm.avail_out === 0) return s;
          } else e.match_available = 1, e.strstart++, e.lookahead--;
        }
        return e.match_available && (g = i._tr_tally(e, 0, e.window[e.strstart - 1]), e.match_available = 0), e.insert = e.strstart < P - 1 ? e.strstart : P - 1, I === v ? (z(e, !0), e.strm.avail_out === 0 ? ct : Y) : e.last_lit && (z(e, !1), e.strm.avail_out === 0) ? s : M;
      }
      function dt(e, I, N, g, p) {
        this.good_length = e, this.max_lazy = I, this.nice_length = N, this.max_chain = g, this.func = p;
      }
      function Et() {
        this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = w, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new a.Buf16(2 * D), this.dyn_dtree = new a.Buf16(2 * (2 * T + 1)), this.bl_tree = new a.Buf16(2 * (2 * L + 1)), it(this.dyn_ltree), it(this.dyn_dtree), it(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new a.Buf16(Z + 1), this.heap = new a.Buf16(2 * A + 1), it(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new a.Buf16(2 * A + 1), it(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
      }
      function St(e) {
        var I;
        return e && e.state ? (e.total_in = e.total_out = 0, e.data_type = d, (I = e.state).pending = 0, I.pending_out = 0, I.wrap < 0 && (I.wrap = -I.wrap), I.status = I.wrap ? E : F, e.adler = I.wrap === 2 ? 0 : 1, I.last_flush = b, i._tr_init(I), h) : ht(e, y);
      }
      function jt(e) {
        var I = St(e);
        return I === h && function(N) {
          N.window_size = 2 * N.w_size, it(N.head), N.max_lazy_match = n[N.level].max_lazy, N.good_match = n[N.level].good_length, N.nice_match = n[N.level].nice_length, N.max_chain_length = n[N.level].max_chain, N.strstart = 0, N.block_start = 0, N.lookahead = 0, N.insert = 0, N.match_length = N.prev_length = P - 1, N.match_available = 0, N.ins_h = 0;
        }(e.state), I;
      }
      function At(e, I, N, g, p, R) {
        if (!e) return y;
        var W = 1;
        if (I === u && (I = 6), g < 0 ? (W = 0, g = -g) : 15 < g && (W = 2, g -= 16), p < 1 || S < p || N !== w || g < 8 || 15 < g || I < 0 || 9 < I || R < 0 || m < R) return ht(e, y);
        g === 8 && (g = 9);
        var V = new Et();
        return (e.state = V).strm = e, V.wrap = W, V.gzhead = null, V.w_bits = g, V.w_size = 1 << V.w_bits, V.w_mask = V.w_size - 1, V.hash_bits = p + 7, V.hash_size = 1 << V.hash_bits, V.hash_mask = V.hash_size - 1, V.hash_shift = ~~((V.hash_bits + P - 1) / P), V.window = new a.Buf8(2 * V.w_size), V.head = new a.Buf16(V.hash_size), V.prev = new a.Buf16(V.w_size), V.lit_bufsize = 1 << p + 6, V.pending_buf_size = 4 * V.lit_bufsize, V.pending_buf = new a.Buf8(V.pending_buf_size), V.d_buf = 1 * V.lit_bufsize, V.l_buf = 3 * V.lit_bufsize, V.level = I, V.strategy = R, V.method = N, jt(e);
      }
      n = [new dt(0, 0, 0, 0, function(e, I) {
        var N = 65535;
        for (N > e.pending_buf_size - 5 && (N = e.pending_buf_size - 5); ; ) {
          if (e.lookahead <= 1) {
            if (_t(e), e.lookahead === 0 && I === b) return s;
            if (e.lookahead === 0) break;
          }
          e.strstart += e.lookahead, e.lookahead = 0;
          var g = e.block_start + N;
          if ((e.strstart === 0 || e.strstart >= g) && (e.lookahead = e.strstart - g, e.strstart = g, z(e, !1), e.strm.avail_out === 0) || e.strstart - e.block_start >= e.w_size - st && (z(e, !1), e.strm.avail_out === 0)) return s;
        }
        return e.insert = 0, I === v ? (z(e, !0), e.strm.avail_out === 0 ? ct : Y) : (e.strstart > e.block_start && (z(e, !1), e.strm.avail_out), s);
      }), new dt(4, 4, 8, 4, kt), new dt(4, 5, 16, 8, kt), new dt(4, 6, 32, 32, kt), new dt(4, 4, 16, 16, ut), new dt(8, 16, 32, 32, ut), new dt(8, 16, 128, 128, ut), new dt(8, 32, 128, 256, ut), new dt(32, 128, 258, 1024, ut), new dt(32, 258, 258, 4096, ut)], c.deflateInit = function(e, I) {
        return At(e, I, w, 15, 8, 0);
      }, c.deflateInit2 = At, c.deflateReset = jt, c.deflateResetKeep = St, c.deflateSetHeader = function(e, I) {
        return e && e.state ? e.state.wrap !== 2 ? y : (e.state.gzhead = I, h) : y;
      }, c.deflate = function(e, I) {
        var N, g, p, R;
        if (!e || !e.state || 5 < I || I < 0) return e ? ht(e, y) : y;
        if (g = e.state, !e.output || !e.input && e.avail_in !== 0 || g.status === 666 && I !== v) return ht(e, e.avail_out === 0 ? -5 : y);
        if (g.strm = e, N = g.last_flush, g.last_flush = I, g.status === E) if (g.wrap === 2) e.adler = 0, nt(g, 31), nt(g, 139), nt(g, 8), g.gzhead ? (nt(g, (g.gzhead.text ? 1 : 0) + (g.gzhead.hcrc ? 2 : 0) + (g.gzhead.extra ? 4 : 0) + (g.gzhead.name ? 8 : 0) + (g.gzhead.comment ? 16 : 0)), nt(g, 255 & g.gzhead.time), nt(g, g.gzhead.time >> 8 & 255), nt(g, g.gzhead.time >> 16 & 255), nt(g, g.gzhead.time >> 24 & 255), nt(g, g.level === 9 ? 2 : 2 <= g.strategy || g.level < 2 ? 4 : 0), nt(g, 255 & g.gzhead.os), g.gzhead.extra && g.gzhead.extra.length && (nt(g, 255 & g.gzhead.extra.length), nt(g, g.gzhead.extra.length >> 8 & 255)), g.gzhead.hcrc && (e.adler = _(e.adler, g.pending_buf, g.pending, 0)), g.gzindex = 0, g.status = 69) : (nt(g, 0), nt(g, 0), nt(g, 0), nt(g, 0), nt(g, 0), nt(g, g.level === 9 ? 2 : 2 <= g.strategy || g.level < 2 ? 4 : 0), nt(g, 3), g.status = F);
        else {
          var W = w + (g.w_bits - 8 << 4) << 8;
          W |= (2 <= g.strategy || g.level < 2 ? 0 : g.level < 6 ? 1 : g.level === 6 ? 2 : 3) << 6, g.strstart !== 0 && (W |= 32), W += 31 - W % 31, g.status = F, et(g, W), g.strstart !== 0 && (et(g, e.adler >>> 16), et(g, 65535 & e.adler)), e.adler = 1;
        }
        if (g.status === 69) if (g.gzhead.extra) {
          for (p = g.pending; g.gzindex < (65535 & g.gzhead.extra.length) && (g.pending !== g.pending_buf_size || (g.gzhead.hcrc && g.pending > p && (e.adler = _(e.adler, g.pending_buf, g.pending - p, p)), j(e), p = g.pending, g.pending !== g.pending_buf_size)); ) nt(g, 255 & g.gzhead.extra[g.gzindex]), g.gzindex++;
          g.gzhead.hcrc && g.pending > p && (e.adler = _(e.adler, g.pending_buf, g.pending - p, p)), g.gzindex === g.gzhead.extra.length && (g.gzindex = 0, g.status = 73);
        } else g.status = 73;
        if (g.status === 73) if (g.gzhead.name) {
          p = g.pending;
          do {
            if (g.pending === g.pending_buf_size && (g.gzhead.hcrc && g.pending > p && (e.adler = _(e.adler, g.pending_buf, g.pending - p, p)), j(e), p = g.pending, g.pending === g.pending_buf_size)) {
              R = 1;
              break;
            }
            R = g.gzindex < g.gzhead.name.length ? 255 & g.gzhead.name.charCodeAt(g.gzindex++) : 0, nt(g, R);
          } while (R !== 0);
          g.gzhead.hcrc && g.pending > p && (e.adler = _(e.adler, g.pending_buf, g.pending - p, p)), R === 0 && (g.gzindex = 0, g.status = 91);
        } else g.status = 91;
        if (g.status === 91) if (g.gzhead.comment) {
          p = g.pending;
          do {
            if (g.pending === g.pending_buf_size && (g.gzhead.hcrc && g.pending > p && (e.adler = _(e.adler, g.pending_buf, g.pending - p, p)), j(e), p = g.pending, g.pending === g.pending_buf_size)) {
              R = 1;
              break;
            }
            R = g.gzindex < g.gzhead.comment.length ? 255 & g.gzhead.comment.charCodeAt(g.gzindex++) : 0, nt(g, R);
          } while (R !== 0);
          g.gzhead.hcrc && g.pending > p && (e.adler = _(e.adler, g.pending_buf, g.pending - p, p)), R === 0 && (g.status = 103);
        } else g.status = 103;
        if (g.status === 103 && (g.gzhead.hcrc ? (g.pending + 2 > g.pending_buf_size && j(e), g.pending + 2 <= g.pending_buf_size && (nt(g, 255 & e.adler), nt(g, e.adler >> 8 & 255), e.adler = 0, g.status = F)) : g.status = F), g.pending !== 0) {
          if (j(e), e.avail_out === 0) return g.last_flush = -1, h;
        } else if (e.avail_in === 0 && K(I) <= K(N) && I !== v) return ht(e, -5);
        if (g.status === 666 && e.avail_in !== 0) return ht(e, -5);
        if (e.avail_in !== 0 || g.lookahead !== 0 || I !== b && g.status !== 666) {
          var V = g.strategy === 2 ? function(O, G) {
            for (var Q; ; ) {
              if (O.lookahead === 0 && (_t(O), O.lookahead === 0)) {
                if (G === b) return s;
                break;
              }
              if (O.match_length = 0, Q = i._tr_tally(O, 0, O.window[O.strstart]), O.lookahead--, O.strstart++, Q && (z(O, !1), O.strm.avail_out === 0)) return s;
            }
            return O.insert = 0, G === v ? (z(O, !0), O.strm.avail_out === 0 ? ct : Y) : O.last_lit && (z(O, !1), O.strm.avail_out === 0) ? s : M;
          }(g, I) : g.strategy === 3 ? function(O, G) {
            for (var Q, q, rt, wt, pt = O.window; ; ) {
              if (O.lookahead <= H) {
                if (_t(O), O.lookahead <= H && G === b) return s;
                if (O.lookahead === 0) break;
              }
              if (O.match_length = 0, O.lookahead >= P && 0 < O.strstart && (q = pt[rt = O.strstart - 1]) === pt[++rt] && q === pt[++rt] && q === pt[++rt]) {
                wt = O.strstart + H;
                do
                  ;
                while (q === pt[++rt] && q === pt[++rt] && q === pt[++rt] && q === pt[++rt] && q === pt[++rt] && q === pt[++rt] && q === pt[++rt] && q === pt[++rt] && rt < wt);
                O.match_length = H - (wt - rt), O.match_length > O.lookahead && (O.match_length = O.lookahead);
              }
              if (O.match_length >= P ? (Q = i._tr_tally(O, 1, O.match_length - P), O.lookahead -= O.match_length, O.strstart += O.match_length, O.match_length = 0) : (Q = i._tr_tally(O, 0, O.window[O.strstart]), O.lookahead--, O.strstart++), Q && (z(O, !1), O.strm.avail_out === 0)) return s;
            }
            return O.insert = 0, G === v ? (z(O, !0), O.strm.avail_out === 0 ? ct : Y) : O.last_lit && (z(O, !1), O.strm.avail_out === 0) ? s : M;
          }(g, I) : n[g.level].func(g, I);
          if (V !== ct && V !== Y || (g.status = 666), V === s || V === ct) return e.avail_out === 0 && (g.last_flush = -1), h;
          if (V === M && (I === 1 ? i._tr_align(g) : I !== 5 && (i._tr_stored_block(g, 0, 0, !1), I === 3 && (it(g.head), g.lookahead === 0 && (g.strstart = 0, g.block_start = 0, g.insert = 0))), j(e), e.avail_out === 0)) return g.last_flush = -1, h;
        }
        return I !== v ? h : g.wrap <= 0 ? 1 : (g.wrap === 2 ? (nt(g, 255 & e.adler), nt(g, e.adler >> 8 & 255), nt(g, e.adler >> 16 & 255), nt(g, e.adler >> 24 & 255), nt(g, 255 & e.total_in), nt(g, e.total_in >> 8 & 255), nt(g, e.total_in >> 16 & 255), nt(g, e.total_in >> 24 & 255)) : (et(g, e.adler >>> 16), et(g, 65535 & e.adler)), j(e), 0 < g.wrap && (g.wrap = -g.wrap), g.pending !== 0 ? h : 1);
      }, c.deflateEnd = function(e) {
        var I;
        return e && e.state ? (I = e.state.status) !== E && I !== 69 && I !== 73 && I !== 91 && I !== 103 && I !== F && I !== 666 ? ht(e, y) : (e.state = null, I === F ? ht(e, -3) : h) : y;
      }, c.deflateSetDictionary = function(e, I) {
        var N, g, p, R, W, V, O, G, Q = I.length;
        if (!e || !e.state || (R = (N = e.state).wrap) === 2 || R === 1 && N.status !== E || N.lookahead) return y;
        for (R === 1 && (e.adler = l(e.adler, I, Q, 0)), N.wrap = 0, Q >= N.w_size && (R === 0 && (it(N.head), N.strstart = 0, N.block_start = 0, N.insert = 0), G = new a.Buf8(N.w_size), a.arraySet(G, I, Q - N.w_size, N.w_size, 0), I = G, Q = N.w_size), W = e.avail_in, V = e.next_in, O = e.input, e.avail_in = Q, e.next_in = 0, e.input = I, _t(N); N.lookahead >= P; ) {
          for (g = N.strstart, p = N.lookahead - (P - 1); N.ins_h = (N.ins_h << N.hash_shift ^ N.window[g + P - 1]) & N.hash_mask, N.prev[g & N.w_mask] = N.head[N.ins_h], N.head[N.ins_h] = g, g++, --p; ) ;
          N.strstart = g, N.lookahead = P - 1, _t(N);
        }
        return N.strstart += N.lookahead, N.block_start = N.strstart, N.insert = N.lookahead, N.lookahead = 0, N.match_length = N.prev_length = P - 1, N.match_available = 0, e.next_in = V, e.input = O, e.avail_in = W, N.wrap = R, h;
      }, c.deflateInfo = "pako deflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(r, f, c) {
      f.exports = function() {
        this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
      };
    }, {}], 48: [function(r, f, c) {
      f.exports = function(n, a) {
        var i, l, _, x, b, v, h, y, u, m, d, w, S, A, T, L, D, Z, P, H, st, E, F, s, M;
        i = n.state, l = n.next_in, s = n.input, _ = l + (n.avail_in - 5), x = n.next_out, M = n.output, b = x - (a - n.avail_out), v = x + (n.avail_out - 257), h = i.dmax, y = i.wsize, u = i.whave, m = i.wnext, d = i.window, w = i.hold, S = i.bits, A = i.lencode, T = i.distcode, L = (1 << i.lenbits) - 1, D = (1 << i.distbits) - 1;
        t: do {
          S < 15 && (w += s[l++] << S, S += 8, w += s[l++] << S, S += 8), Z = A[w & L];
          e: for (; ; ) {
            if (w >>>= P = Z >>> 24, S -= P, (P = Z >>> 16 & 255) === 0) M[x++] = 65535 & Z;
            else {
              if (!(16 & P)) {
                if (!(64 & P)) {
                  Z = A[(65535 & Z) + (w & (1 << P) - 1)];
                  continue e;
                }
                if (32 & P) {
                  i.mode = 12;
                  break t;
                }
                n.msg = "invalid literal/length code", i.mode = 30;
                break t;
              }
              H = 65535 & Z, (P &= 15) && (S < P && (w += s[l++] << S, S += 8), H += w & (1 << P) - 1, w >>>= P, S -= P), S < 15 && (w += s[l++] << S, S += 8, w += s[l++] << S, S += 8), Z = T[w & D];
              r: for (; ; ) {
                if (w >>>= P = Z >>> 24, S -= P, !(16 & (P = Z >>> 16 & 255))) {
                  if (!(64 & P)) {
                    Z = T[(65535 & Z) + (w & (1 << P) - 1)];
                    continue r;
                  }
                  n.msg = "invalid distance code", i.mode = 30;
                  break t;
                }
                if (st = 65535 & Z, S < (P &= 15) && (w += s[l++] << S, (S += 8) < P && (w += s[l++] << S, S += 8)), h < (st += w & (1 << P) - 1)) {
                  n.msg = "invalid distance too far back", i.mode = 30;
                  break t;
                }
                if (w >>>= P, S -= P, (P = x - b) < st) {
                  if (u < (P = st - P) && i.sane) {
                    n.msg = "invalid distance too far back", i.mode = 30;
                    break t;
                  }
                  if (F = d, (E = 0) === m) {
                    if (E += y - P, P < H) {
                      for (H -= P; M[x++] = d[E++], --P; ) ;
                      E = x - st, F = M;
                    }
                  } else if (m < P) {
                    if (E += y + m - P, (P -= m) < H) {
                      for (H -= P; M[x++] = d[E++], --P; ) ;
                      if (E = 0, m < H) {
                        for (H -= P = m; M[x++] = d[E++], --P; ) ;
                        E = x - st, F = M;
                      }
                    }
                  } else if (E += m - P, P < H) {
                    for (H -= P; M[x++] = d[E++], --P; ) ;
                    E = x - st, F = M;
                  }
                  for (; 2 < H; ) M[x++] = F[E++], M[x++] = F[E++], M[x++] = F[E++], H -= 3;
                  H && (M[x++] = F[E++], 1 < H && (M[x++] = F[E++]));
                } else {
                  for (E = x - st; M[x++] = M[E++], M[x++] = M[E++], M[x++] = M[E++], 2 < (H -= 3); ) ;
                  H && (M[x++] = M[E++], 1 < H && (M[x++] = M[E++]));
                }
                break;
              }
            }
            break;
          }
        } while (l < _ && x < v);
        l -= H = S >> 3, w &= (1 << (S -= H << 3)) - 1, n.next_in = l, n.next_out = x, n.avail_in = l < _ ? _ - l + 5 : 5 - (l - _), n.avail_out = x < v ? v - x + 257 : 257 - (x - v), i.hold = w, i.bits = S;
      };
    }, {}], 49: [function(r, f, c) {
      var n = r("../utils/common"), a = r("./adler32"), i = r("./crc32"), l = r("./inffast"), _ = r("./inftrees"), x = 1, b = 2, v = 0, h = -2, y = 1, u = 852, m = 592;
      function d(E) {
        return (E >>> 24 & 255) + (E >>> 8 & 65280) + ((65280 & E) << 8) + ((255 & E) << 24);
      }
      function w() {
        this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new n.Buf16(320), this.work = new n.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
      }
      function S(E) {
        var F;
        return E && E.state ? (F = E.state, E.total_in = E.total_out = F.total = 0, E.msg = "", F.wrap && (E.adler = 1 & F.wrap), F.mode = y, F.last = 0, F.havedict = 0, F.dmax = 32768, F.head = null, F.hold = 0, F.bits = 0, F.lencode = F.lendyn = new n.Buf32(u), F.distcode = F.distdyn = new n.Buf32(m), F.sane = 1, F.back = -1, v) : h;
      }
      function A(E) {
        var F;
        return E && E.state ? ((F = E.state).wsize = 0, F.whave = 0, F.wnext = 0, S(E)) : h;
      }
      function T(E, F) {
        var s, M;
        return E && E.state ? (M = E.state, F < 0 ? (s = 0, F = -F) : (s = 1 + (F >> 4), F < 48 && (F &= 15)), F && (F < 8 || 15 < F) ? h : (M.window !== null && M.wbits !== F && (M.window = null), M.wrap = s, M.wbits = F, A(E))) : h;
      }
      function L(E, F) {
        var s, M;
        return E ? (M = new w(), (E.state = M).window = null, (s = T(E, F)) !== v && (E.state = null), s) : h;
      }
      var D, Z, P = !0;
      function H(E) {
        if (P) {
          var F;
          for (D = new n.Buf32(512), Z = new n.Buf32(32), F = 0; F < 144; ) E.lens[F++] = 8;
          for (; F < 256; ) E.lens[F++] = 9;
          for (; F < 280; ) E.lens[F++] = 7;
          for (; F < 288; ) E.lens[F++] = 8;
          for (_(x, E.lens, 0, 288, D, 0, E.work, { bits: 9 }), F = 0; F < 32; ) E.lens[F++] = 5;
          _(b, E.lens, 0, 32, Z, 0, E.work, { bits: 5 }), P = !1;
        }
        E.lencode = D, E.lenbits = 9, E.distcode = Z, E.distbits = 5;
      }
      function st(E, F, s, M) {
        var ct, Y = E.state;
        return Y.window === null && (Y.wsize = 1 << Y.wbits, Y.wnext = 0, Y.whave = 0, Y.window = new n.Buf8(Y.wsize)), M >= Y.wsize ? (n.arraySet(Y.window, F, s - Y.wsize, Y.wsize, 0), Y.wnext = 0, Y.whave = Y.wsize) : (M < (ct = Y.wsize - Y.wnext) && (ct = M), n.arraySet(Y.window, F, s - M, ct, Y.wnext), (M -= ct) ? (n.arraySet(Y.window, F, s - M, M, 0), Y.wnext = M, Y.whave = Y.wsize) : (Y.wnext += ct, Y.wnext === Y.wsize && (Y.wnext = 0), Y.whave < Y.wsize && (Y.whave += ct))), 0;
      }
      c.inflateReset = A, c.inflateReset2 = T, c.inflateResetKeep = S, c.inflateInit = function(E) {
        return L(E, 15);
      }, c.inflateInit2 = L, c.inflate = function(E, F) {
        var s, M, ct, Y, ht, K, it, j, z, nt, et, J, _t, kt, ut, dt, Et, St, jt, At, e, I, N, g, p = 0, R = new n.Buf8(4), W = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
        if (!E || !E.state || !E.output || !E.input && E.avail_in !== 0) return h;
        (s = E.state).mode === 12 && (s.mode = 13), ht = E.next_out, ct = E.output, it = E.avail_out, Y = E.next_in, M = E.input, K = E.avail_in, j = s.hold, z = s.bits, nt = K, et = it, I = v;
        t: for (; ; ) switch (s.mode) {
          case y:
            if (s.wrap === 0) {
              s.mode = 13;
              break;
            }
            for (; z < 16; ) {
              if (K === 0) break t;
              K--, j += M[Y++] << z, z += 8;
            }
            if (2 & s.wrap && j === 35615) {
              R[s.check = 0] = 255 & j, R[1] = j >>> 8 & 255, s.check = i(s.check, R, 2, 0), z = j = 0, s.mode = 2;
              break;
            }
            if (s.flags = 0, s.head && (s.head.done = !1), !(1 & s.wrap) || (((255 & j) << 8) + (j >> 8)) % 31) {
              E.msg = "incorrect header check", s.mode = 30;
              break;
            }
            if ((15 & j) != 8) {
              E.msg = "unknown compression method", s.mode = 30;
              break;
            }
            if (z -= 4, e = 8 + (15 & (j >>>= 4)), s.wbits === 0) s.wbits = e;
            else if (e > s.wbits) {
              E.msg = "invalid window size", s.mode = 30;
              break;
            }
            s.dmax = 1 << e, E.adler = s.check = 1, s.mode = 512 & j ? 10 : 12, z = j = 0;
            break;
          case 2:
            for (; z < 16; ) {
              if (K === 0) break t;
              K--, j += M[Y++] << z, z += 8;
            }
            if (s.flags = j, (255 & s.flags) != 8) {
              E.msg = "unknown compression method", s.mode = 30;
              break;
            }
            if (57344 & s.flags) {
              E.msg = "unknown header flags set", s.mode = 30;
              break;
            }
            s.head && (s.head.text = j >> 8 & 1), 512 & s.flags && (R[0] = 255 & j, R[1] = j >>> 8 & 255, s.check = i(s.check, R, 2, 0)), z = j = 0, s.mode = 3;
          case 3:
            for (; z < 32; ) {
              if (K === 0) break t;
              K--, j += M[Y++] << z, z += 8;
            }
            s.head && (s.head.time = j), 512 & s.flags && (R[0] = 255 & j, R[1] = j >>> 8 & 255, R[2] = j >>> 16 & 255, R[3] = j >>> 24 & 255, s.check = i(s.check, R, 4, 0)), z = j = 0, s.mode = 4;
          case 4:
            for (; z < 16; ) {
              if (K === 0) break t;
              K--, j += M[Y++] << z, z += 8;
            }
            s.head && (s.head.xflags = 255 & j, s.head.os = j >> 8), 512 & s.flags && (R[0] = 255 & j, R[1] = j >>> 8 & 255, s.check = i(s.check, R, 2, 0)), z = j = 0, s.mode = 5;
          case 5:
            if (1024 & s.flags) {
              for (; z < 16; ) {
                if (K === 0) break t;
                K--, j += M[Y++] << z, z += 8;
              }
              s.length = j, s.head && (s.head.extra_len = j), 512 & s.flags && (R[0] = 255 & j, R[1] = j >>> 8 & 255, s.check = i(s.check, R, 2, 0)), z = j = 0;
            } else s.head && (s.head.extra = null);
            s.mode = 6;
          case 6:
            if (1024 & s.flags && (K < (J = s.length) && (J = K), J && (s.head && (e = s.head.extra_len - s.length, s.head.extra || (s.head.extra = new Array(s.head.extra_len)), n.arraySet(s.head.extra, M, Y, J, e)), 512 & s.flags && (s.check = i(s.check, M, J, Y)), K -= J, Y += J, s.length -= J), s.length)) break t;
            s.length = 0, s.mode = 7;
          case 7:
            if (2048 & s.flags) {
              if (K === 0) break t;
              for (J = 0; e = M[Y + J++], s.head && e && s.length < 65536 && (s.head.name += String.fromCharCode(e)), e && J < K; ) ;
              if (512 & s.flags && (s.check = i(s.check, M, J, Y)), K -= J, Y += J, e) break t;
            } else s.head && (s.head.name = null);
            s.length = 0, s.mode = 8;
          case 8:
            if (4096 & s.flags) {
              if (K === 0) break t;
              for (J = 0; e = M[Y + J++], s.head && e && s.length < 65536 && (s.head.comment += String.fromCharCode(e)), e && J < K; ) ;
              if (512 & s.flags && (s.check = i(s.check, M, J, Y)), K -= J, Y += J, e) break t;
            } else s.head && (s.head.comment = null);
            s.mode = 9;
          case 9:
            if (512 & s.flags) {
              for (; z < 16; ) {
                if (K === 0) break t;
                K--, j += M[Y++] << z, z += 8;
              }
              if (j !== (65535 & s.check)) {
                E.msg = "header crc mismatch", s.mode = 30;
                break;
              }
              z = j = 0;
            }
            s.head && (s.head.hcrc = s.flags >> 9 & 1, s.head.done = !0), E.adler = s.check = 0, s.mode = 12;
            break;
          case 10:
            for (; z < 32; ) {
              if (K === 0) break t;
              K--, j += M[Y++] << z, z += 8;
            }
            E.adler = s.check = d(j), z = j = 0, s.mode = 11;
          case 11:
            if (s.havedict === 0) return E.next_out = ht, E.avail_out = it, E.next_in = Y, E.avail_in = K, s.hold = j, s.bits = z, 2;
            E.adler = s.check = 1, s.mode = 12;
          case 12:
            if (F === 5 || F === 6) break t;
          case 13:
            if (s.last) {
              j >>>= 7 & z, z -= 7 & z, s.mode = 27;
              break;
            }
            for (; z < 3; ) {
              if (K === 0) break t;
              K--, j += M[Y++] << z, z += 8;
            }
            switch (s.last = 1 & j, z -= 1, 3 & (j >>>= 1)) {
              case 0:
                s.mode = 14;
                break;
              case 1:
                if (H(s), s.mode = 20, F !== 6) break;
                j >>>= 2, z -= 2;
                break t;
              case 2:
                s.mode = 17;
                break;
              case 3:
                E.msg = "invalid block type", s.mode = 30;
            }
            j >>>= 2, z -= 2;
            break;
          case 14:
            for (j >>>= 7 & z, z -= 7 & z; z < 32; ) {
              if (K === 0) break t;
              K--, j += M[Y++] << z, z += 8;
            }
            if ((65535 & j) != (j >>> 16 ^ 65535)) {
              E.msg = "invalid stored block lengths", s.mode = 30;
              break;
            }
            if (s.length = 65535 & j, z = j = 0, s.mode = 15, F === 6) break t;
          case 15:
            s.mode = 16;
          case 16:
            if (J = s.length) {
              if (K < J && (J = K), it < J && (J = it), J === 0) break t;
              n.arraySet(ct, M, Y, J, ht), K -= J, Y += J, it -= J, ht += J, s.length -= J;
              break;
            }
            s.mode = 12;
            break;
          case 17:
            for (; z < 14; ) {
              if (K === 0) break t;
              K--, j += M[Y++] << z, z += 8;
            }
            if (s.nlen = 257 + (31 & j), j >>>= 5, z -= 5, s.ndist = 1 + (31 & j), j >>>= 5, z -= 5, s.ncode = 4 + (15 & j), j >>>= 4, z -= 4, 286 < s.nlen || 30 < s.ndist) {
              E.msg = "too many length or distance symbols", s.mode = 30;
              break;
            }
            s.have = 0, s.mode = 18;
          case 18:
            for (; s.have < s.ncode; ) {
              for (; z < 3; ) {
                if (K === 0) break t;
                K--, j += M[Y++] << z, z += 8;
              }
              s.lens[W[s.have++]] = 7 & j, j >>>= 3, z -= 3;
            }
            for (; s.have < 19; ) s.lens[W[s.have++]] = 0;
            if (s.lencode = s.lendyn, s.lenbits = 7, N = { bits: s.lenbits }, I = _(0, s.lens, 0, 19, s.lencode, 0, s.work, N), s.lenbits = N.bits, I) {
              E.msg = "invalid code lengths set", s.mode = 30;
              break;
            }
            s.have = 0, s.mode = 19;
          case 19:
            for (; s.have < s.nlen + s.ndist; ) {
              for (; dt = (p = s.lencode[j & (1 << s.lenbits) - 1]) >>> 16 & 255, Et = 65535 & p, !((ut = p >>> 24) <= z); ) {
                if (K === 0) break t;
                K--, j += M[Y++] << z, z += 8;
              }
              if (Et < 16) j >>>= ut, z -= ut, s.lens[s.have++] = Et;
              else {
                if (Et === 16) {
                  for (g = ut + 2; z < g; ) {
                    if (K === 0) break t;
                    K--, j += M[Y++] << z, z += 8;
                  }
                  if (j >>>= ut, z -= ut, s.have === 0) {
                    E.msg = "invalid bit length repeat", s.mode = 30;
                    break;
                  }
                  e = s.lens[s.have - 1], J = 3 + (3 & j), j >>>= 2, z -= 2;
                } else if (Et === 17) {
                  for (g = ut + 3; z < g; ) {
                    if (K === 0) break t;
                    K--, j += M[Y++] << z, z += 8;
                  }
                  z -= ut, e = 0, J = 3 + (7 & (j >>>= ut)), j >>>= 3, z -= 3;
                } else {
                  for (g = ut + 7; z < g; ) {
                    if (K === 0) break t;
                    K--, j += M[Y++] << z, z += 8;
                  }
                  z -= ut, e = 0, J = 11 + (127 & (j >>>= ut)), j >>>= 7, z -= 7;
                }
                if (s.have + J > s.nlen + s.ndist) {
                  E.msg = "invalid bit length repeat", s.mode = 30;
                  break;
                }
                for (; J--; ) s.lens[s.have++] = e;
              }
            }
            if (s.mode === 30) break;
            if (s.lens[256] === 0) {
              E.msg = "invalid code -- missing end-of-block", s.mode = 30;
              break;
            }
            if (s.lenbits = 9, N = { bits: s.lenbits }, I = _(x, s.lens, 0, s.nlen, s.lencode, 0, s.work, N), s.lenbits = N.bits, I) {
              E.msg = "invalid literal/lengths set", s.mode = 30;
              break;
            }
            if (s.distbits = 6, s.distcode = s.distdyn, N = { bits: s.distbits }, I = _(b, s.lens, s.nlen, s.ndist, s.distcode, 0, s.work, N), s.distbits = N.bits, I) {
              E.msg = "invalid distances set", s.mode = 30;
              break;
            }
            if (s.mode = 20, F === 6) break t;
          case 20:
            s.mode = 21;
          case 21:
            if (6 <= K && 258 <= it) {
              E.next_out = ht, E.avail_out = it, E.next_in = Y, E.avail_in = K, s.hold = j, s.bits = z, l(E, et), ht = E.next_out, ct = E.output, it = E.avail_out, Y = E.next_in, M = E.input, K = E.avail_in, j = s.hold, z = s.bits, s.mode === 12 && (s.back = -1);
              break;
            }
            for (s.back = 0; dt = (p = s.lencode[j & (1 << s.lenbits) - 1]) >>> 16 & 255, Et = 65535 & p, !((ut = p >>> 24) <= z); ) {
              if (K === 0) break t;
              K--, j += M[Y++] << z, z += 8;
            }
            if (dt && !(240 & dt)) {
              for (St = ut, jt = dt, At = Et; dt = (p = s.lencode[At + ((j & (1 << St + jt) - 1) >> St)]) >>> 16 & 255, Et = 65535 & p, !(St + (ut = p >>> 24) <= z); ) {
                if (K === 0) break t;
                K--, j += M[Y++] << z, z += 8;
              }
              j >>>= St, z -= St, s.back += St;
            }
            if (j >>>= ut, z -= ut, s.back += ut, s.length = Et, dt === 0) {
              s.mode = 26;
              break;
            }
            if (32 & dt) {
              s.back = -1, s.mode = 12;
              break;
            }
            if (64 & dt) {
              E.msg = "invalid literal/length code", s.mode = 30;
              break;
            }
            s.extra = 15 & dt, s.mode = 22;
          case 22:
            if (s.extra) {
              for (g = s.extra; z < g; ) {
                if (K === 0) break t;
                K--, j += M[Y++] << z, z += 8;
              }
              s.length += j & (1 << s.extra) - 1, j >>>= s.extra, z -= s.extra, s.back += s.extra;
            }
            s.was = s.length, s.mode = 23;
          case 23:
            for (; dt = (p = s.distcode[j & (1 << s.distbits) - 1]) >>> 16 & 255, Et = 65535 & p, !((ut = p >>> 24) <= z); ) {
              if (K === 0) break t;
              K--, j += M[Y++] << z, z += 8;
            }
            if (!(240 & dt)) {
              for (St = ut, jt = dt, At = Et; dt = (p = s.distcode[At + ((j & (1 << St + jt) - 1) >> St)]) >>> 16 & 255, Et = 65535 & p, !(St + (ut = p >>> 24) <= z); ) {
                if (K === 0) break t;
                K--, j += M[Y++] << z, z += 8;
              }
              j >>>= St, z -= St, s.back += St;
            }
            if (j >>>= ut, z -= ut, s.back += ut, 64 & dt) {
              E.msg = "invalid distance code", s.mode = 30;
              break;
            }
            s.offset = Et, s.extra = 15 & dt, s.mode = 24;
          case 24:
            if (s.extra) {
              for (g = s.extra; z < g; ) {
                if (K === 0) break t;
                K--, j += M[Y++] << z, z += 8;
              }
              s.offset += j & (1 << s.extra) - 1, j >>>= s.extra, z -= s.extra, s.back += s.extra;
            }
            if (s.offset > s.dmax) {
              E.msg = "invalid distance too far back", s.mode = 30;
              break;
            }
            s.mode = 25;
          case 25:
            if (it === 0) break t;
            if (J = et - it, s.offset > J) {
              if ((J = s.offset - J) > s.whave && s.sane) {
                E.msg = "invalid distance too far back", s.mode = 30;
                break;
              }
              _t = J > s.wnext ? (J -= s.wnext, s.wsize - J) : s.wnext - J, J > s.length && (J = s.length), kt = s.window;
            } else kt = ct, _t = ht - s.offset, J = s.length;
            for (it < J && (J = it), it -= J, s.length -= J; ct[ht++] = kt[_t++], --J; ) ;
            s.length === 0 && (s.mode = 21);
            break;
          case 26:
            if (it === 0) break t;
            ct[ht++] = s.length, it--, s.mode = 21;
            break;
          case 27:
            if (s.wrap) {
              for (; z < 32; ) {
                if (K === 0) break t;
                K--, j |= M[Y++] << z, z += 8;
              }
              if (et -= it, E.total_out += et, s.total += et, et && (E.adler = s.check = s.flags ? i(s.check, ct, et, ht - et) : a(s.check, ct, et, ht - et)), et = it, (s.flags ? j : d(j)) !== s.check) {
                E.msg = "incorrect data check", s.mode = 30;
                break;
              }
              z = j = 0;
            }
            s.mode = 28;
          case 28:
            if (s.wrap && s.flags) {
              for (; z < 32; ) {
                if (K === 0) break t;
                K--, j += M[Y++] << z, z += 8;
              }
              if (j !== (4294967295 & s.total)) {
                E.msg = "incorrect length check", s.mode = 30;
                break;
              }
              z = j = 0;
            }
            s.mode = 29;
          case 29:
            I = 1;
            break t;
          case 30:
            I = -3;
            break t;
          case 31:
            return -4;
          case 32:
          default:
            return h;
        }
        return E.next_out = ht, E.avail_out = it, E.next_in = Y, E.avail_in = K, s.hold = j, s.bits = z, (s.wsize || et !== E.avail_out && s.mode < 30 && (s.mode < 27 || F !== 4)) && st(E, E.output, E.next_out, et - E.avail_out) ? (s.mode = 31, -4) : (nt -= E.avail_in, et -= E.avail_out, E.total_in += nt, E.total_out += et, s.total += et, s.wrap && et && (E.adler = s.check = s.flags ? i(s.check, ct, et, E.next_out - et) : a(s.check, ct, et, E.next_out - et)), E.data_type = s.bits + (s.last ? 64 : 0) + (s.mode === 12 ? 128 : 0) + (s.mode === 20 || s.mode === 15 ? 256 : 0), (nt == 0 && et === 0 || F === 4) && I === v && (I = -5), I);
      }, c.inflateEnd = function(E) {
        if (!E || !E.state) return h;
        var F = E.state;
        return F.window && (F.window = null), E.state = null, v;
      }, c.inflateGetHeader = function(E, F) {
        var s;
        return E && E.state && 2 & (s = E.state).wrap ? ((s.head = F).done = !1, v) : h;
      }, c.inflateSetDictionary = function(E, F) {
        var s, M = F.length;
        return E && E.state ? (s = E.state).wrap !== 0 && s.mode !== 11 ? h : s.mode === 11 && a(1, F, M, 0) !== s.check ? -3 : st(E, F, M, M) ? (s.mode = 31, -4) : (s.havedict = 1, v) : h;
      }, c.inflateInfo = "pako inflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(r, f, c) {
      var n = r("../utils/common"), a = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], i = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], l = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], _ = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
      f.exports = function(x, b, v, h, y, u, m, d) {
        var w, S, A, T, L, D, Z, P, H, st = d.bits, E = 0, F = 0, s = 0, M = 0, ct = 0, Y = 0, ht = 0, K = 0, it = 0, j = 0, z = null, nt = 0, et = new n.Buf16(16), J = new n.Buf16(16), _t = null, kt = 0;
        for (E = 0; E <= 15; E++) et[E] = 0;
        for (F = 0; F < h; F++) et[b[v + F]]++;
        for (ct = st, M = 15; 1 <= M && et[M] === 0; M--) ;
        if (M < ct && (ct = M), M === 0) return y[u++] = 20971520, y[u++] = 20971520, d.bits = 1, 0;
        for (s = 1; s < M && et[s] === 0; s++) ;
        for (ct < s && (ct = s), E = K = 1; E <= 15; E++) if (K <<= 1, (K -= et[E]) < 0) return -1;
        if (0 < K && (x === 0 || M !== 1)) return -1;
        for (J[1] = 0, E = 1; E < 15; E++) J[E + 1] = J[E] + et[E];
        for (F = 0; F < h; F++) b[v + F] !== 0 && (m[J[b[v + F]]++] = F);
        if (D = x === 0 ? (z = _t = m, 19) : x === 1 ? (z = a, nt -= 257, _t = i, kt -= 257, 256) : (z = l, _t = _, -1), E = s, L = u, ht = F = j = 0, A = -1, T = (it = 1 << (Y = ct)) - 1, x === 1 && 852 < it || x === 2 && 592 < it) return 1;
        for (; ; ) {
          for (Z = E - ht, H = m[F] < D ? (P = 0, m[F]) : m[F] > D ? (P = _t[kt + m[F]], z[nt + m[F]]) : (P = 96, 0), w = 1 << E - ht, s = S = 1 << Y; y[L + (j >> ht) + (S -= w)] = Z << 24 | P << 16 | H | 0, S !== 0; ) ;
          for (w = 1 << E - 1; j & w; ) w >>= 1;
          if (w !== 0 ? (j &= w - 1, j += w) : j = 0, F++, --et[E] == 0) {
            if (E === M) break;
            E = b[v + m[F]];
          }
          if (ct < E && (j & T) !== A) {
            for (ht === 0 && (ht = ct), L += s, K = 1 << (Y = E - ht); Y + ht < M && !((K -= et[Y + ht]) <= 0); ) Y++, K <<= 1;
            if (it += 1 << Y, x === 1 && 852 < it || x === 2 && 592 < it) return 1;
            y[A = j & T] = ct << 24 | Y << 16 | L - u | 0;
          }
        }
        return j !== 0 && (y[L + j] = E - ht << 24 | 64 << 16 | 0), d.bits = ct, 0;
      };
    }, { "../utils/common": 41 }], 51: [function(r, f, c) {
      f.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
    }, {}], 52: [function(r, f, c) {
      var n = r("../utils/common"), a = 0, i = 1;
      function l(p) {
        for (var R = p.length; 0 <= --R; ) p[R] = 0;
      }
      var _ = 0, x = 29, b = 256, v = b + 1 + x, h = 30, y = 19, u = 2 * v + 1, m = 15, d = 16, w = 7, S = 256, A = 16, T = 17, L = 18, D = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], Z = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], P = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], H = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], st = new Array(2 * (v + 2));
      l(st);
      var E = new Array(2 * h);
      l(E);
      var F = new Array(512);
      l(F);
      var s = new Array(256);
      l(s);
      var M = new Array(x);
      l(M);
      var ct, Y, ht, K = new Array(h);
      function it(p, R, W, V, O) {
        this.static_tree = p, this.extra_bits = R, this.extra_base = W, this.elems = V, this.max_length = O, this.has_stree = p && p.length;
      }
      function j(p, R) {
        this.dyn_tree = p, this.max_code = 0, this.stat_desc = R;
      }
      function z(p) {
        return p < 256 ? F[p] : F[256 + (p >>> 7)];
      }
      function nt(p, R) {
        p.pending_buf[p.pending++] = 255 & R, p.pending_buf[p.pending++] = R >>> 8 & 255;
      }
      function et(p, R, W) {
        p.bi_valid > d - W ? (p.bi_buf |= R << p.bi_valid & 65535, nt(p, p.bi_buf), p.bi_buf = R >> d - p.bi_valid, p.bi_valid += W - d) : (p.bi_buf |= R << p.bi_valid & 65535, p.bi_valid += W);
      }
      function J(p, R, W) {
        et(p, W[2 * R], W[2 * R + 1]);
      }
      function _t(p, R) {
        for (var W = 0; W |= 1 & p, p >>>= 1, W <<= 1, 0 < --R; ) ;
        return W >>> 1;
      }
      function kt(p, R, W) {
        var V, O, G = new Array(m + 1), Q = 0;
        for (V = 1; V <= m; V++) G[V] = Q = Q + W[V - 1] << 1;
        for (O = 0; O <= R; O++) {
          var q = p[2 * O + 1];
          q !== 0 && (p[2 * O] = _t(G[q]++, q));
        }
      }
      function ut(p) {
        var R;
        for (R = 0; R < v; R++) p.dyn_ltree[2 * R] = 0;
        for (R = 0; R < h; R++) p.dyn_dtree[2 * R] = 0;
        for (R = 0; R < y; R++) p.bl_tree[2 * R] = 0;
        p.dyn_ltree[2 * S] = 1, p.opt_len = p.static_len = 0, p.last_lit = p.matches = 0;
      }
      function dt(p) {
        8 < p.bi_valid ? nt(p, p.bi_buf) : 0 < p.bi_valid && (p.pending_buf[p.pending++] = p.bi_buf), p.bi_buf = 0, p.bi_valid = 0;
      }
      function Et(p, R, W, V) {
        var O = 2 * R, G = 2 * W;
        return p[O] < p[G] || p[O] === p[G] && V[R] <= V[W];
      }
      function St(p, R, W) {
        for (var V = p.heap[W], O = W << 1; O <= p.heap_len && (O < p.heap_len && Et(R, p.heap[O + 1], p.heap[O], p.depth) && O++, !Et(R, V, p.heap[O], p.depth)); ) p.heap[W] = p.heap[O], W = O, O <<= 1;
        p.heap[W] = V;
      }
      function jt(p, R, W) {
        var V, O, G, Q, q = 0;
        if (p.last_lit !== 0) for (; V = p.pending_buf[p.d_buf + 2 * q] << 8 | p.pending_buf[p.d_buf + 2 * q + 1], O = p.pending_buf[p.l_buf + q], q++, V === 0 ? J(p, O, R) : (J(p, (G = s[O]) + b + 1, R), (Q = D[G]) !== 0 && et(p, O -= M[G], Q), J(p, G = z(--V), W), (Q = Z[G]) !== 0 && et(p, V -= K[G], Q)), q < p.last_lit; ) ;
        J(p, S, R);
      }
      function At(p, R) {
        var W, V, O, G = R.dyn_tree, Q = R.stat_desc.static_tree, q = R.stat_desc.has_stree, rt = R.stat_desc.elems, wt = -1;
        for (p.heap_len = 0, p.heap_max = u, W = 0; W < rt; W++) G[2 * W] !== 0 ? (p.heap[++p.heap_len] = wt = W, p.depth[W] = 0) : G[2 * W + 1] = 0;
        for (; p.heap_len < 2; ) G[2 * (O = p.heap[++p.heap_len] = wt < 2 ? ++wt : 0)] = 1, p.depth[O] = 0, p.opt_len--, q && (p.static_len -= Q[2 * O + 1]);
        for (R.max_code = wt, W = p.heap_len >> 1; 1 <= W; W--) St(p, G, W);
        for (O = rt; W = p.heap[1], p.heap[1] = p.heap[p.heap_len--], St(p, G, 1), V = p.heap[1], p.heap[--p.heap_max] = W, p.heap[--p.heap_max] = V, G[2 * O] = G[2 * W] + G[2 * V], p.depth[O] = (p.depth[W] >= p.depth[V] ? p.depth[W] : p.depth[V]) + 1, G[2 * W + 1] = G[2 * V + 1] = O, p.heap[1] = O++, St(p, G, 1), 2 <= p.heap_len; ) ;
        p.heap[--p.heap_max] = p.heap[1], function(pt, Rt) {
          var Kt, Nt, Ht, xt, $t, te, Dt = Rt.dyn_tree, ee = Rt.max_code, Wt = Rt.stat_desc.static_tree, vt = Rt.stat_desc.has_stree, Ft = Rt.stat_desc.extra_bits, qt = Rt.stat_desc.extra_base, Lt = Rt.stat_desc.max_length, Vt = 0;
          for (xt = 0; xt <= m; xt++) pt.bl_count[xt] = 0;
          for (Dt[2 * pt.heap[pt.heap_max] + 1] = 0, Kt = pt.heap_max + 1; Kt < u; Kt++) Lt < (xt = Dt[2 * Dt[2 * (Nt = pt.heap[Kt]) + 1] + 1] + 1) && (xt = Lt, Vt++), Dt[2 * Nt + 1] = xt, ee < Nt || (pt.bl_count[xt]++, $t = 0, qt <= Nt && ($t = Ft[Nt - qt]), te = Dt[2 * Nt], pt.opt_len += te * (xt + $t), vt && (pt.static_len += te * (Wt[2 * Nt + 1] + $t)));
          if (Vt !== 0) {
            do {
              for (xt = Lt - 1; pt.bl_count[xt] === 0; ) xt--;
              pt.bl_count[xt]--, pt.bl_count[xt + 1] += 2, pt.bl_count[Lt]--, Vt -= 2;
            } while (0 < Vt);
            for (xt = Lt; xt !== 0; xt--) for (Nt = pt.bl_count[xt]; Nt !== 0; ) ee < (Ht = pt.heap[--Kt]) || (Dt[2 * Ht + 1] !== xt && (pt.opt_len += (xt - Dt[2 * Ht + 1]) * Dt[2 * Ht], Dt[2 * Ht + 1] = xt), Nt--);
          }
        }(p, R), kt(G, wt, p.bl_count);
      }
      function e(p, R, W) {
        var V, O, G = -1, Q = R[1], q = 0, rt = 7, wt = 4;
        for (Q === 0 && (rt = 138, wt = 3), R[2 * (W + 1) + 1] = 65535, V = 0; V <= W; V++) O = Q, Q = R[2 * (V + 1) + 1], ++q < rt && O === Q || (q < wt ? p.bl_tree[2 * O] += q : O !== 0 ? (O !== G && p.bl_tree[2 * O]++, p.bl_tree[2 * A]++) : q <= 10 ? p.bl_tree[2 * T]++ : p.bl_tree[2 * L]++, G = O, wt = (q = 0) === Q ? (rt = 138, 3) : O === Q ? (rt = 6, 3) : (rt = 7, 4));
      }
      function I(p, R, W) {
        var V, O, G = -1, Q = R[1], q = 0, rt = 7, wt = 4;
        for (Q === 0 && (rt = 138, wt = 3), V = 0; V <= W; V++) if (O = Q, Q = R[2 * (V + 1) + 1], !(++q < rt && O === Q)) {
          if (q < wt) for (; J(p, O, p.bl_tree), --q != 0; ) ;
          else O !== 0 ? (O !== G && (J(p, O, p.bl_tree), q--), J(p, A, p.bl_tree), et(p, q - 3, 2)) : q <= 10 ? (J(p, T, p.bl_tree), et(p, q - 3, 3)) : (J(p, L, p.bl_tree), et(p, q - 11, 7));
          G = O, wt = (q = 0) === Q ? (rt = 138, 3) : O === Q ? (rt = 6, 3) : (rt = 7, 4);
        }
      }
      l(K);
      var N = !1;
      function g(p, R, W, V) {
        et(p, (_ << 1) + (V ? 1 : 0), 3), function(O, G, Q, q) {
          dt(O), nt(O, Q), nt(O, ~Q), n.arraySet(O.pending_buf, O.window, G, Q, O.pending), O.pending += Q;
        }(p, R, W);
      }
      c._tr_init = function(p) {
        N || (function() {
          var R, W, V, O, G, Q = new Array(m + 1);
          for (O = V = 0; O < x - 1; O++) for (M[O] = V, R = 0; R < 1 << D[O]; R++) s[V++] = O;
          for (s[V - 1] = O, O = G = 0; O < 16; O++) for (K[O] = G, R = 0; R < 1 << Z[O]; R++) F[G++] = O;
          for (G >>= 7; O < h; O++) for (K[O] = G << 7, R = 0; R < 1 << Z[O] - 7; R++) F[256 + G++] = O;
          for (W = 0; W <= m; W++) Q[W] = 0;
          for (R = 0; R <= 143; ) st[2 * R + 1] = 8, R++, Q[8]++;
          for (; R <= 255; ) st[2 * R + 1] = 9, R++, Q[9]++;
          for (; R <= 279; ) st[2 * R + 1] = 7, R++, Q[7]++;
          for (; R <= 287; ) st[2 * R + 1] = 8, R++, Q[8]++;
          for (kt(st, v + 1, Q), R = 0; R < h; R++) E[2 * R + 1] = 5, E[2 * R] = _t(R, 5);
          ct = new it(st, D, b + 1, v, m), Y = new it(E, Z, 0, h, m), ht = new it(new Array(0), P, 0, y, w);
        }(), N = !0), p.l_desc = new j(p.dyn_ltree, ct), p.d_desc = new j(p.dyn_dtree, Y), p.bl_desc = new j(p.bl_tree, ht), p.bi_buf = 0, p.bi_valid = 0, ut(p);
      }, c._tr_stored_block = g, c._tr_flush_block = function(p, R, W, V) {
        var O, G, Q = 0;
        0 < p.level ? (p.strm.data_type === 2 && (p.strm.data_type = function(q) {
          var rt, wt = 4093624447;
          for (rt = 0; rt <= 31; rt++, wt >>>= 1) if (1 & wt && q.dyn_ltree[2 * rt] !== 0) return a;
          if (q.dyn_ltree[18] !== 0 || q.dyn_ltree[20] !== 0 || q.dyn_ltree[26] !== 0) return i;
          for (rt = 32; rt < b; rt++) if (q.dyn_ltree[2 * rt] !== 0) return i;
          return a;
        }(p)), At(p, p.l_desc), At(p, p.d_desc), Q = function(q) {
          var rt;
          for (e(q, q.dyn_ltree, q.l_desc.max_code), e(q, q.dyn_dtree, q.d_desc.max_code), At(q, q.bl_desc), rt = y - 1; 3 <= rt && q.bl_tree[2 * H[rt] + 1] === 0; rt--) ;
          return q.opt_len += 3 * (rt + 1) + 5 + 5 + 4, rt;
        }(p), O = p.opt_len + 3 + 7 >>> 3, (G = p.static_len + 3 + 7 >>> 3) <= O && (O = G)) : O = G = W + 5, W + 4 <= O && R !== -1 ? g(p, R, W, V) : p.strategy === 4 || G === O ? (et(p, 2 + (V ? 1 : 0), 3), jt(p, st, E)) : (et(p, 4 + (V ? 1 : 0), 3), function(q, rt, wt, pt) {
          var Rt;
          for (et(q, rt - 257, 5), et(q, wt - 1, 5), et(q, pt - 4, 4), Rt = 0; Rt < pt; Rt++) et(q, q.bl_tree[2 * H[Rt] + 1], 3);
          I(q, q.dyn_ltree, rt - 1), I(q, q.dyn_dtree, wt - 1);
        }(p, p.l_desc.max_code + 1, p.d_desc.max_code + 1, Q + 1), jt(p, p.dyn_ltree, p.dyn_dtree)), ut(p), V && dt(p);
      }, c._tr_tally = function(p, R, W) {
        return p.pending_buf[p.d_buf + 2 * p.last_lit] = R >>> 8 & 255, p.pending_buf[p.d_buf + 2 * p.last_lit + 1] = 255 & R, p.pending_buf[p.l_buf + p.last_lit] = 255 & W, p.last_lit++, R === 0 ? p.dyn_ltree[2 * W]++ : (p.matches++, R--, p.dyn_ltree[2 * (s[W] + b + 1)]++, p.dyn_dtree[2 * z(R)]++), p.last_lit === p.lit_bufsize - 1;
      }, c._tr_align = function(p) {
        et(p, 2, 3), J(p, S, st), function(R) {
          R.bi_valid === 16 ? (nt(R, R.bi_buf), R.bi_buf = 0, R.bi_valid = 0) : 8 <= R.bi_valid && (R.pending_buf[R.pending++] = 255 & R.bi_buf, R.bi_buf >>= 8, R.bi_valid -= 8);
        }(p);
      };
    }, { "../utils/common": 41 }], 53: [function(r, f, c) {
      f.exports = function() {
        this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
      };
    }, {}], 54: [function(r, f, c) {
      (function(n) {
        (function(a, i) {
          if (!a.setImmediate) {
            var l, _, x, b, v = 1, h = {}, y = !1, u = a.document, m = Object.getPrototypeOf && Object.getPrototypeOf(a);
            m = m && m.setTimeout ? m : a, l = {}.toString.call(a.process) === "[object process]" ? function(A) {
              process.nextTick(function() {
                w(A);
              });
            } : function() {
              if (a.postMessage && !a.importScripts) {
                var A = !0, T = a.onmessage;
                return a.onmessage = function() {
                  A = !1;
                }, a.postMessage("", "*"), a.onmessage = T, A;
              }
            }() ? (b = "setImmediate$" + Math.random() + "$", a.addEventListener ? a.addEventListener("message", S, !1) : a.attachEvent("onmessage", S), function(A) {
              a.postMessage(b + A, "*");
            }) : a.MessageChannel ? ((x = new MessageChannel()).port1.onmessage = function(A) {
              w(A.data);
            }, function(A) {
              x.port2.postMessage(A);
            }) : u && "onreadystatechange" in u.createElement("script") ? (_ = u.documentElement, function(A) {
              var T = u.createElement("script");
              T.onreadystatechange = function() {
                w(A), T.onreadystatechange = null, _.removeChild(T), T = null;
              }, _.appendChild(T);
            }) : function(A) {
              setTimeout(w, 0, A);
            }, m.setImmediate = function(A) {
              typeof A != "function" && (A = new Function("" + A));
              for (var T = new Array(arguments.length - 1), L = 0; L < T.length; L++) T[L] = arguments[L + 1];
              var D = { callback: A, args: T };
              return h[v] = D, l(v), v++;
            }, m.clearImmediate = d;
          }
          function d(A) {
            delete h[A];
          }
          function w(A) {
            if (y) setTimeout(w, 0, A);
            else {
              var T = h[A];
              if (T) {
                y = !0;
                try {
                  (function(L) {
                    var D = L.callback, Z = L.args;
                    switch (Z.length) {
                      case 0:
                        D();
                        break;
                      case 1:
                        D(Z[0]);
                        break;
                      case 2:
                        D(Z[0], Z[1]);
                        break;
                      case 3:
                        D(Z[0], Z[1], Z[2]);
                        break;
                      default:
                        D.apply(i, Z);
                    }
                  })(T);
                } finally {
                  d(A), y = !1;
                }
              }
            }
          }
          function S(A) {
            A.source === a && typeof A.data == "string" && A.data.indexOf(b) === 0 && w(+A.data.slice(b.length));
          }
        })(typeof self > "u" ? n === void 0 ? this : n : self);
      }).call(this, typeof ke < "u" ? ke : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}] }, {}, [10])(10);
  });
})(mr);
var Lr = mr.exports;
const Ur = /* @__PURE__ */ Dr(Lr);
function Mr(t = {}) {
  const {
    storageKey: o = "page-reviews",
    defaultPagePath: r = () => typeof window < "u" ? window.location.pathname + window.location.search : "/"
  } = t;
  function f() {
    return "rv-" + Date.now() + "-" + Math.random().toString(36).slice(2, 8);
  }
  function c() {
    if (typeof window > "u") return [];
    try {
      const S = window.localStorage.getItem(o);
      return (S ? JSON.parse(S) : []).map($r);
    } catch {
      return [];
    }
  }
  function n(S) {
    if (!(typeof window > "u"))
      try {
        window.localStorage.setItem(o, JSON.stringify(S));
      } catch {
      }
  }
  const [a, i] = Ot(c), l = ot(() => a, [a]), _ = ot((S) => {
    const A = S || r();
    return a.filter((T) => T.pagePath === A);
  }, [a, r]), x = ot((S) => {
    const A = {
      id: f(),
      ...S,
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    return i((T) => {
      const L = [A, ...T];
      return n(L), L;
    }), A;
  }, []), b = ot((S, A) => {
    i((T) => {
      const L = T.map((D) => D.id === S ? { ...D, ...A } : D);
      return n(L), L;
    });
  }, []), v = ot((S) => {
    i((A) => {
      const T = A.filter((L) => L.id !== S);
      return n(T), T;
    });
  }, []), h = ot((S) => {
    const A = S || r();
    i((T) => {
      const L = T.filter((D) => D.pagePath !== A);
      return n(L), L;
    });
  }, [r]), y = ot(() => {
    i([]), n([]);
  }, []), u = ot(() => ({
    exportTime: (/* @__PURE__ */ new Date()).toISOString(),
    total: a.length,
    reviews: a
  }), [a]), m = ot(() => {
    Be(
      new Blob([JSON.stringify(u(), null, 2)], { type: "application/json" }),
      `page-reviews-${Le()}.json`
    );
  }, [u]), d = ot(() => {
    const S = ir(u());
    Be(
      new Blob([S], { type: "text/markdown" }),
      `page-reviews-${Le()}.md`
    );
  }, [u]), w = ot(async () => {
    const S = new Ur(), A = u(), T = {
      ...A,
      reviews: A.reviews.map((Z) => {
        var P;
        return {
          ...Z,
          screenshots: (P = Z.screenshots) == null ? void 0 : P.map((H) => H.url ? { type: H.type, filename: H.filename, url: H.url } : { type: H.type, filename: H.filename, imagePath: `images/${H.filename}` })
        };
      })
    };
    S.file("review.json", JSON.stringify(T, null, 2)), S.file("review.md", ir(T));
    const L = S.folder("images");
    for (const Z of A.reviews)
      for (const P of Z.screenshots || [])
        if (P.data && !P.url) {
          const H = P.data.replace(/^data:image\/png;base64,/, "");
          L.file(P.filename, H, { base64: !0 });
        }
    const D = await S.generateAsync({ type: "blob" });
    Be(D, `page-reviews-${Le()}.zip`);
  }, [u]);
  return {
    reviews: a,
    allReviews: l,
    getPageReviews: _,
    addReview: x,
    updateReview: b,
    deleteReview: v,
    clearPageReviews: h,
    clearAllReviews: y,
    exportToJSON: m,
    exportToMarkdown: d,
    exportToZIP: w
  };
}
function $r(t) {
  if (!t || t.targets) return t;
  const o = t.type === "element" ? {
    type: "element",
    selector: t.selector,
    elementText: t.elementText,
    elementRect: t.elementRect,
    componentTree: t.componentTree,
    aria: t.aria,
    locators: t.locators
  } : {
    type: "viewport",
    viewportRect: t.viewportRect
  };
  return {
    ...t,
    targets: [o]
  };
}
function ir(t) {
  const o = [
    "# 页面评审报告",
    "",
    `导出时间：${(/* @__PURE__ */ new Date()).toLocaleString()}`,
    `评审总数：${t.total}`,
    ""
  ], r = Zr(t.reviews, "pagePath");
  return Object.entries(r).forEach(([f, c]) => {
    o.push(`## 页面：${f}`), o.push(""), c.forEach((n, a) => {
      var l, _, x, b;
      o.push(`### ${a + 1}. ${n.title || "未命名评审"}`), o.push(`- **严重等级**：${Wr(n.severity)}`), o.push(`- **状态**：${n.status === "resolved" ? "已解决" : "待处理"}`), o.push(`- **窗口尺寸**：${(l = n.viewport) == null ? void 0 : l.width} × ${(_ = n.viewport) == null ? void 0 : _.height}`), n.scroll && o.push(`- **滚动位置**：x=${n.scroll.x}, y=${n.scroll.y}`);
      const i = n.targets || [];
      i.length > 0 && (o.push(`- **评审目标数**：${i.length}`), i.forEach((v, h) => {
        v.type === "element" && v.elementRect ? (o.push(`  - 目标 ${h + 1}（元素）：\`${v.selector}\` x=${v.elementRect.x}, y=${v.elementRect.y}, w=${v.elementRect.width}, h=${v.elementRect.height}`), v.elementText && o.push(`    文本：${v.elementText}`)) : v.viewportRect && o.push(`  - 目标 ${h + 1}（框选）：x=${v.viewportRect.x}, y=${v.viewportRect.y}, w=${v.viewportRect.width}, h=${v.viewportRect.height}`);
      })), o.push(`- **评审建议**：${n.suggestion}`), o.push(`- **创建时间**：${new Date(n.createdAt).toLocaleString()}`), n.locators && Object.keys(n.locators).length > 0 && (o.push(""), o.push("#### 定位信息"), n.locators.cssSelector && o.push(`- **CSS Selector**: \`${n.locators.cssSelector}\``), n.locators.xpath && o.push(`- **XPath**: \`${n.locators.xpath}\``), (x = n.locators.aria) != null && x.role && o.push(`- **ARIA Role**: ${n.locators.aria.role}`), (b = n.locators.aria) != null && b.accessibleName && o.push(`- **Accessible Name**: ${n.locators.aria.accessibleName}`), n.locators.testId && o.push(`- **data-testid**: ${n.locators.testId}`)), n.screenshots && n.screenshots.length > 0 && (o.push(""), o.push("#### 截图"), n.screenshots.forEach((v) => {
        const h = v.url || v.imagePath || `images/${v.filename}`;
        o.push(`![${v.type}](${h})`);
      })), o.push("");
    });
  }), o.join(`
`);
}
function Be(t, o) {
  if (typeof window > "u") return;
  const r = URL.createObjectURL(t), f = document.createElement("a");
  f.href = r, f.download = o, f.style.display = "none", document.body.appendChild(f), f.click(), setTimeout(() => {
    f.parentNode && document.body.removeChild(f), URL.revokeObjectURL(r);
  }, 1e3);
}
function Le() {
  const t = /* @__PURE__ */ new Date();
  return `${t.getFullYear()}${Ee(t.getMonth() + 1)}${Ee(t.getDate())}-${Ee(t.getHours())}${Ee(t.getMinutes())}`;
}
function Ee(t) {
  return String(t).padStart(2, "0");
}
function Wr(t) {
  return { low: "低", medium: "中", high: "高", critical: "严重" }[t] || t;
}
function Zr(t, o) {
  return t.reduce((r, f) => {
    const c = f[o] || "unknown";
    return r[c] || (r[c] = []), r[c].push(f), r;
  }, {});
}
function Hr(t, o) {
  if (t.match(/^[a-z]+:\/\//i))
    return t;
  if (t.match(/^\/\//))
    return window.location.protocol + t;
  if (t.match(/^[a-z]+:/i))
    return t;
  const r = document.implementation.createHTMLDocument(), f = r.createElement("base"), c = r.createElement("a");
  return r.head.appendChild(f), r.body.appendChild(c), o && (f.href = o), c.href = t, c.href;
}
const Vr = /* @__PURE__ */ (() => {
  let t = 0;
  const o = () => (
    // eslint-disable-next-line no-bitwise
    `0000${(Math.random() * 36 ** 4 << 0).toString(36)}`.slice(-4)
  );
  return () => (t += 1, `u${o()}${t}`);
})();
function se(t) {
  const o = [];
  for (let r = 0, f = t.length; r < f; r++)
    o.push(t[r]);
  return o;
}
let ce = null;
function gr(t = {}) {
  return ce || (t.includeStyleProperties ? (ce = t.includeStyleProperties, ce) : (ce = se(window.getComputedStyle(document.documentElement)), ce));
}
function Ce(t, o) {
  const f = (t.ownerDocument.defaultView || window).getComputedStyle(t).getPropertyValue(o);
  return f ? parseFloat(f.replace("px", "")) : 0;
}
function Yr(t) {
  const o = Ce(t, "border-left-width"), r = Ce(t, "border-right-width");
  return t.clientWidth + o + r;
}
function Gr(t) {
  const o = Ce(t, "border-top-width"), r = Ce(t, "border-bottom-width");
  return t.clientHeight + o + r;
}
function wr(t, o = {}) {
  const r = o.width || Yr(t), f = o.height || Gr(t);
  return { width: r, height: f };
}
function Xr() {
  let t, o;
  try {
    o = process;
  } catch {
  }
  const r = o && o.env ? o.env.devicePixelRatio : null;
  return r && (t = parseInt(r, 10), Number.isNaN(t) && (t = 1)), t || window.devicePixelRatio || 1;
}
const Mt = 16384;
function Kr(t) {
  (t.width > Mt || t.height > Mt) && (t.width > Mt && t.height > Mt ? t.width > t.height ? (t.height *= Mt / t.width, t.width = Mt) : (t.width *= Mt / t.height, t.height = Mt) : t.width > Mt ? (t.height *= Mt / t.width, t.width = Mt) : (t.width *= Mt / t.height, t.height = Mt));
}
function Re(t) {
  return new Promise((o, r) => {
    const f = new Image();
    f.onload = () => {
      f.decode().then(() => {
        requestAnimationFrame(() => o(f));
      });
    }, f.onerror = r, f.crossOrigin = "anonymous", f.decoding = "async", f.src = t;
  });
}
async function qr(t) {
  return Promise.resolve().then(() => new XMLSerializer().serializeToString(t)).then(encodeURIComponent).then((o) => `data:image/svg+xml;charset=utf-8,${o}`);
}
async function Jr(t, o, r) {
  const f = "http://www.w3.org/2000/svg", c = document.createElementNS(f, "svg"), n = document.createElementNS(f, "foreignObject");
  return c.setAttribute("width", `${o}`), c.setAttribute("height", `${r}`), c.setAttribute("viewBox", `0 0 ${o} ${r}`), n.setAttribute("width", "100%"), n.setAttribute("height", "100%"), n.setAttribute("x", "0"), n.setAttribute("y", "0"), n.setAttribute("externalResourcesRequired", "true"), c.appendChild(n), n.appendChild(t), qr(c);
}
const Bt = (t, o) => {
  if (t instanceof o)
    return !0;
  const r = Object.getPrototypeOf(t);
  return r === null ? !1 : r.constructor.name === o.name || Bt(r, o);
};
function Qr(t) {
  const o = t.getPropertyValue("content");
  return `${t.cssText} content: '${o.replace(/'|"/g, "")}';`;
}
function tn(t, o) {
  return gr(o).map((r) => {
    const f = t.getPropertyValue(r), c = t.getPropertyPriority(r);
    return `${r}: ${f}${c ? " !important" : ""};`;
  }).join(" ");
}
function en(t, o, r, f) {
  const c = `.${t}:${o}`, n = r.cssText ? Qr(r) : tn(r, f);
  return document.createTextNode(`${c}{${n}}`);
}
function sr(t, o, r, f) {
  const c = window.getComputedStyle(t, r), n = c.getPropertyValue("content");
  if (n === "" || n === "none")
    return;
  const a = Vr();
  try {
    o.className = `${o.className} ${a}`;
  } catch {
    return;
  }
  const i = document.createElement("style");
  i.appendChild(en(a, r, c, f)), o.appendChild(i);
}
function rn(t, o, r) {
  sr(t, o, ":before", r), sr(t, o, ":after", r);
}
const ar = "application/font-woff", or = "image/jpeg", nn = {
  woff: ar,
  woff2: ar,
  ttf: "application/font-truetype",
  eot: "application/vnd.ms-fontobject",
  png: "image/png",
  jpg: or,
  jpeg: or,
  gif: "image/gif",
  tiff: "image/tiff",
  svg: "image/svg+xml",
  webp: "image/webp"
};
function sn(t) {
  const o = /\.([^./]*?)$/g.exec(t);
  return o ? o[1] : "";
}
function Ye(t) {
  const o = sn(t).toLowerCase();
  return nn[o] || "";
}
function an(t) {
  return t.split(/,/)[1];
}
function Ve(t) {
  return t.search(/^(data:)/) !== -1;
}
function on(t, o) {
  return `data:${o};base64,${t}`;
}
async function vr(t, o, r) {
  const f = await fetch(t, o);
  if (f.status === 404)
    throw new Error(`Resource "${f.url}" not found`);
  const c = await f.blob();
  return new Promise((n, a) => {
    const i = new FileReader();
    i.onerror = a, i.onloadend = () => {
      try {
        n(r({ res: f, result: i.result }));
      } catch (l) {
        a(l);
      }
    }, i.readAsDataURL(c);
  });
}
const Ue = {};
function ln(t, o, r) {
  let f = t.replace(/\?.*/, "");
  return r && (f = t), /ttf|otf|eot|woff2?/i.test(f) && (f = f.replace(/.*\//, "")), o ? `[${o}]${f}` : f;
}
async function Ge(t, o, r) {
  const f = ln(t, o, r.includeQueryParams);
  if (Ue[f] != null)
    return Ue[f];
  r.cacheBust && (t += (/\?/.test(t) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime());
  let c;
  try {
    const n = await vr(t, r.fetchRequestInit, ({ res: a, result: i }) => (o || (o = a.headers.get("Content-Type") || ""), an(i)));
    c = on(n, o);
  } catch (n) {
    c = r.imagePlaceholder || "";
    let a = `Failed to fetch resource: ${t}`;
    n && (a = typeof n == "string" ? n : n.message), a && console.warn(a);
  }
  return Ue[f] = c, c;
}
async function cn(t) {
  const o = t.toDataURL();
  return o === "data:," ? t.cloneNode(!1) : Re(o);
}
async function un(t, o) {
  if (t.currentSrc) {
    const n = document.createElement("canvas"), a = n.getContext("2d");
    n.width = t.clientWidth, n.height = t.clientHeight, a == null || a.drawImage(t, 0, 0, n.width, n.height);
    const i = n.toDataURL();
    return Re(i);
  }
  const r = t.poster, f = Ye(r), c = await Ge(r, f, o);
  return Re(c);
}
async function hn(t, o) {
  var r;
  try {
    if (!((r = t == null ? void 0 : t.contentDocument) === null || r === void 0) && r.body)
      return await Ae(t.contentDocument.body, o, !0);
  } catch {
  }
  return t.cloneNode(!1);
}
async function fn(t, o) {
  return Bt(t, HTMLCanvasElement) ? cn(t) : Bt(t, HTMLVideoElement) ? un(t, o) : Bt(t, HTMLIFrameElement) ? hn(t, o) : t.cloneNode(yr(t));
}
const dn = (t) => t.tagName != null && t.tagName.toUpperCase() === "SLOT", yr = (t) => t.tagName != null && t.tagName.toUpperCase() === "SVG";
async function pn(t, o, r) {
  var f, c;
  if (yr(o))
    return o;
  let n = [];
  return dn(t) && t.assignedNodes ? n = se(t.assignedNodes()) : Bt(t, HTMLIFrameElement) && (!((f = t.contentDocument) === null || f === void 0) && f.body) ? n = se(t.contentDocument.body.childNodes) : n = se(((c = t.shadowRoot) !== null && c !== void 0 ? c : t).childNodes), n.length === 0 || Bt(t, HTMLVideoElement) || await n.reduce((a, i) => a.then(() => Ae(i, r)).then((l) => {
    l && o.appendChild(l);
  }), Promise.resolve()), o;
}
function mn(t, o, r) {
  const f = o.style;
  if (!f)
    return;
  const c = window.getComputedStyle(t);
  c.cssText ? (f.cssText = c.cssText, f.transformOrigin = c.transformOrigin) : gr(r).forEach((n) => {
    let a = c.getPropertyValue(n);
    n === "font-size" && a.endsWith("px") && (a = `${Math.floor(parseFloat(a.substring(0, a.length - 2))) - 0.1}px`), Bt(t, HTMLIFrameElement) && n === "display" && a === "inline" && (a = "block"), n === "d" && o.getAttribute("d") && (a = `path(${o.getAttribute("d")})`), f.setProperty(n, a, c.getPropertyPriority(n));
  });
}
function gn(t, o) {
  Bt(t, HTMLTextAreaElement) && (o.innerHTML = t.value), Bt(t, HTMLInputElement) && o.setAttribute("value", t.value);
}
function wn(t, o) {
  if (Bt(t, HTMLSelectElement)) {
    const r = o, f = Array.from(r.children).find((c) => t.value === c.getAttribute("value"));
    f && f.setAttribute("selected", "");
  }
}
function vn(t, o, r) {
  return Bt(o, Element) && (mn(t, o, r), rn(t, o, r), gn(t, o), wn(t, o)), o;
}
async function yn(t, o) {
  const r = t.querySelectorAll ? t.querySelectorAll("use") : [];
  if (r.length === 0)
    return t;
  const f = {};
  for (let n = 0; n < r.length; n++) {
    const i = r[n].getAttribute("xlink:href");
    if (i) {
      const l = t.querySelector(i), _ = document.querySelector(i);
      !l && _ && !f[i] && (f[i] = await Ae(_, o, !0));
    }
  }
  const c = Object.values(f);
  if (c.length) {
    const n = "http://www.w3.org/1999/xhtml", a = document.createElementNS(n, "svg");
    a.setAttribute("xmlns", n), a.style.position = "absolute", a.style.width = "0", a.style.height = "0", a.style.overflow = "hidden", a.style.display = "none";
    const i = document.createElementNS(n, "defs");
    a.appendChild(i);
    for (let l = 0; l < c.length; l++)
      i.appendChild(c[l]);
    t.appendChild(a);
  }
  return t;
}
async function Ae(t, o, r) {
  return !r && o.filter && !o.filter(t) ? null : Promise.resolve(t).then((f) => fn(f, o)).then((f) => pn(t, f, o)).then((f) => vn(t, f, o)).then((f) => yn(f, o));
}
const _r = /url\((['"]?)([^'"]+?)\1\)/g, _n = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g, bn = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function xn(t) {
  const o = t.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
  return new RegExp(`(url\\(['"]?)(${o})(['"]?\\))`, "g");
}
function kn(t) {
  const o = [];
  return t.replace(_r, (r, f, c) => (o.push(c), r)), o.filter((r) => !Ve(r));
}
async function Sn(t, o, r, f, c) {
  try {
    const n = r ? Hr(o, r) : o, a = Ye(o);
    let i;
    return c || (i = await Ge(n, a, f)), t.replace(xn(o), `$1${i}$3`);
  } catch {
  }
  return t;
}
function En(t, { preferredFontFormat: o }) {
  return o ? t.replace(bn, (r) => {
    for (; ; ) {
      const [f, , c] = _n.exec(r) || [];
      if (!c)
        return "";
      if (c === o)
        return `src: ${f};`;
    }
  }) : t;
}
function br(t) {
  return t.search(_r) !== -1;
}
async function xr(t, o, r) {
  if (!br(t))
    return t;
  const f = En(t, r);
  return kn(f).reduce((n, a) => n.then((i) => Sn(i, a, o, r)), Promise.resolve(f));
}
async function ue(t, o, r) {
  var f;
  const c = (f = o.style) === null || f === void 0 ? void 0 : f.getPropertyValue(t);
  if (c) {
    const n = await xr(c, null, r);
    return o.style.setProperty(t, n, o.style.getPropertyPriority(t)), !0;
  }
  return !1;
}
async function Cn(t, o) {
  await ue("background", t, o) || await ue("background-image", t, o), await ue("mask", t, o) || await ue("-webkit-mask", t, o) || await ue("mask-image", t, o) || await ue("-webkit-mask-image", t, o);
}
async function Rn(t, o) {
  const r = Bt(t, HTMLImageElement);
  if (!(r && !Ve(t.src)) && !(Bt(t, SVGImageElement) && !Ve(t.href.baseVal)))
    return;
  const f = r ? t.src : t.href.baseVal, c = await Ge(f, Ye(f), o);
  await new Promise((n, a) => {
    t.onload = n, t.onerror = o.onImageErrorHandler ? (...l) => {
      try {
        n(o.onImageErrorHandler(...l));
      } catch (_) {
        a(_);
      }
    } : a;
    const i = t;
    i.decode && (i.decode = n), i.loading === "lazy" && (i.loading = "eager"), r ? (t.srcset = "", t.src = c) : t.href.baseVal = c;
  });
}
async function Tn(t, o) {
  const f = se(t.childNodes).map((c) => kr(c, o));
  await Promise.all(f).then(() => t);
}
async function kr(t, o) {
  Bt(t, Element) && (await Cn(t, o), await Rn(t, o), await Tn(t, o));
}
function An(t, o) {
  const { style: r } = t;
  o.backgroundColor && (r.backgroundColor = o.backgroundColor), o.width && (r.width = `${o.width}px`), o.height && (r.height = `${o.height}px`);
  const f = o.style;
  return f != null && Object.keys(f).forEach((c) => {
    r[c] = f[c];
  }), t;
}
const lr = {};
async function cr(t) {
  let o = lr[t];
  if (o != null)
    return o;
  const f = await (await fetch(t)).text();
  return o = { url: t, cssText: f }, lr[t] = o, o;
}
async function ur(t, o) {
  let r = t.cssText;
  const f = /url\(["']?([^"')]+)["']?\)/g, n = (r.match(/url\([^)]+\)/g) || []).map(async (a) => {
    let i = a.replace(f, "$1");
    return i.startsWith("https://") || (i = new URL(i, t.url).href), vr(i, o.fetchRequestInit, ({ result: l }) => (r = r.replace(a, `url(${l})`), [a, l]));
  });
  return Promise.all(n).then(() => r);
}
function hr(t) {
  if (t == null)
    return [];
  const o = [], r = /(\/\*[\s\S]*?\*\/)/gi;
  let f = t.replace(r, "");
  const c = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
  for (; ; ) {
    const l = c.exec(f);
    if (l === null)
      break;
    o.push(l[0]);
  }
  f = f.replace(c, "");
  const n = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi, a = "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", i = new RegExp(a, "gi");
  for (; ; ) {
    let l = n.exec(f);
    if (l === null) {
      if (l = i.exec(f), l === null)
        break;
      n.lastIndex = i.lastIndex;
    } else
      i.lastIndex = n.lastIndex;
    o.push(l[0]);
  }
  return o;
}
async function On(t, o) {
  const r = [], f = [];
  return t.forEach((c) => {
    if ("cssRules" in c)
      try {
        se(c.cssRules || []).forEach((n, a) => {
          if (n.type === CSSRule.IMPORT_RULE) {
            let i = a + 1;
            const l = n.href, _ = cr(l).then((x) => ur(x, o)).then((x) => hr(x).forEach((b) => {
              try {
                c.insertRule(b, b.startsWith("@import") ? i += 1 : c.cssRules.length);
              } catch (v) {
                console.error("Error inserting rule from remote css", {
                  rule: b,
                  error: v
                });
              }
            })).catch((x) => {
              console.error("Error loading remote css", x.toString());
            });
            f.push(_);
          }
        });
      } catch (n) {
        const a = t.find((i) => i.href == null) || document.styleSheets[0];
        c.href != null && f.push(cr(c.href).then((i) => ur(i, o)).then((i) => hr(i).forEach((l) => {
          a.insertRule(l, a.cssRules.length);
        })).catch((i) => {
          console.error("Error loading remote stylesheet", i);
        })), console.error("Error inlining remote css file", n);
      }
  }), Promise.all(f).then(() => (t.forEach((c) => {
    if ("cssRules" in c)
      try {
        se(c.cssRules || []).forEach((n) => {
          r.push(n);
        });
      } catch (n) {
        console.error(`Error while reading CSS rules from ${c.href}`, n);
      }
  }), r));
}
function zn(t) {
  return t.filter((o) => o.type === CSSRule.FONT_FACE_RULE).filter((o) => br(o.style.getPropertyValue("src")));
}
async function jn(t, o) {
  if (t.ownerDocument == null)
    throw new Error("Provided element is not within a Document");
  const r = se(t.ownerDocument.styleSheets), f = await On(r, o);
  return zn(f);
}
function Sr(t) {
  return t.trim().replace(/["']/g, "");
}
function Nn(t) {
  const o = /* @__PURE__ */ new Set();
  function r(f) {
    (f.style.fontFamily || getComputedStyle(f).fontFamily).split(",").forEach((n) => {
      o.add(Sr(n));
    }), Array.from(f.children).forEach((n) => {
      n instanceof HTMLElement && r(n);
    });
  }
  return r(t), o;
}
async function Pn(t, o) {
  const r = await jn(t, o), f = Nn(t);
  return (await Promise.all(r.filter((n) => f.has(Sr(n.style.fontFamily))).map((n) => {
    const a = n.parentStyleSheet ? n.parentStyleSheet.href : null;
    return xr(n.cssText, a, o);
  }))).join(`
`);
}
async function In(t, o) {
  const r = o.fontEmbedCSS != null ? o.fontEmbedCSS : o.skipFonts ? null : await Pn(t, o);
  if (r) {
    const f = document.createElement("style"), c = document.createTextNode(r);
    f.appendChild(c), t.firstChild ? t.insertBefore(f, t.firstChild) : t.appendChild(f);
  }
}
async function Dn(t, o = {}) {
  const { width: r, height: f } = wr(t, o), c = await Ae(t, o, !0);
  return await In(c, o), await kr(c, o), An(c, o), await Jr(c, r, f);
}
async function Fn(t, o = {}) {
  const { width: r, height: f } = wr(t, o), c = await Dn(t, o), n = await Re(c), a = document.createElement("canvas"), i = a.getContext("2d"), l = o.pixelRatio || Xr(), _ = o.canvasWidth || r, x = o.canvasHeight || f;
  return a.width = _ * l, a.height = x * l, o.skipAutoScale || Kr(a), a.style.width = `${_}`, a.style.height = `${x}`, o.backgroundColor && (i.fillStyle = o.backgroundColor, i.fillRect(0, 0, a.width, a.height)), i.drawImage(n, 0, 0, a.width, a.height), a;
}
async function Xe(t, o = {}) {
  return (await Fn(t, o)).toDataURL();
}
const Qt = {
  VIEWPORT: "viewport",
  FULL_PAGE: "fullpage",
  TARGETS: "targets"
};
function Me(t) {
  const o = Date.now(), r = Math.random().toString(36).slice(2, 6);
  return `screenshot-${t}-${o}-${r}.png`;
}
async function Er(t, o = {}) {
  if (!t) return null;
  try {
    return await Xe(t, {
      pixelRatio: o.pixelRatio || window.devicePixelRatio || 1,
      cacheBust: !0,
      ...o
    });
  } catch (r) {
    return console.error("captureElement failed:", r), null;
  }
}
async function Bn(t = {}) {
  const o = document.documentElement;
  return Er(o, {
    width: window.innerWidth,
    height: window.innerHeight,
    style: {
      width: `${window.innerWidth}px`,
      height: `${window.innerHeight}px`,
      overflow: "hidden"
    },
    ...t
  });
}
async function Ln(t = {}) {
  const o = document.documentElement, r = o.style.overflow, f = o.style.width, c = o.style.height;
  try {
    return o.style.overflow = "visible", o.style.width = "auto", o.style.height = "auto", await Xe(o, {
      pixelRatio: t.pixelRatio || window.devicePixelRatio || 1,
      cacheBust: !0,
      ...t
    });
  } catch (n) {
    return console.error("captureFullPage failed:", n), null;
  } finally {
    o.style.overflow = r, o.style.width = f, o.style.height = c;
  }
}
async function Un(t, o = {}) {
  if (!t || t.width < 1 || t.height < 1) return null;
  const r = document.documentElement, f = r.style.overflow, c = r.style.width, n = r.style.height;
  try {
    r.style.overflow = "visible", r.style.width = "auto", r.style.height = "auto";
    const a = await Xe(r, {
      pixelRatio: o.pixelRatio || window.devicePixelRatio || 1,
      cacheBust: !0,
      ...o
    });
    return Mn(a, t);
  } catch (a) {
    return console.error("captureBox failed:", a), null;
  } finally {
    r.style.overflow = f, r.style.width = c, r.style.height = n;
  }
}
function Mn(t, o) {
  return new Promise((r, f) => {
    const c = new Image();
    c.onload = () => {
      const n = document.createElement("canvas"), a = window.devicePixelRatio || 1;
      n.width = Math.round(o.width * a), n.height = Math.round(o.height * a), n.getContext("2d").drawImage(
        c,
        o.x * a,
        o.y * a,
        o.width * a,
        o.height * a,
        0,
        0,
        n.width,
        n.height
      ), r(n.toDataURL("image/png"));
    }, c.onerror = f, c.src = t;
  });
}
async function $n(t) {
  return (await fetch(t)).blob();
}
async function $e(t, o, r) {
  if (!r) return null;
  try {
    const f = await $n(t);
    return await r(f, o);
  } catch (f) {
    return console.error("uploadScreenshot failed:", f), null;
  }
}
function Cr(t) {
  var c;
  if (!t || t.nodeType !== Node.ELEMENT_NODE) return "";
  if (t.id) return "#" + t.id;
  const o = t.tagName.toLowerCase();
  if (t.className) {
    const n = String(t.className).split(/\s+/).filter((a) => a && !a.startsWith("el-") && !/^__/.test(a)).slice(0, 2);
    if (n.length) return o + "." + n.join(".");
  }
  let r = [], f = t;
  for (; f && f !== document.body; ) {
    let n = f.tagName.toLowerCase();
    if (f.id) {
      n += "#" + f.id, r.unshift(n);
      break;
    }
    const i = Array.from(((c = f.parentNode) == null ? void 0 : c.children) || []).filter((l) => l.tagName === f.tagName);
    if (i.length > 1) {
      const l = i.indexOf(f) + 1;
      n += `:nth-of-type(${l})`;
    }
    r.unshift(n), f = f.parentNode;
  }
  return r.join(" > ");
}
function Wn(t) {
  var f;
  if (!t || t.nodeType !== Node.ELEMENT_NODE) return "";
  if (t.id) return `//*[@id="${t.id}"]`;
  const o = [];
  let r = t;
  for (; r && r !== document.body; ) {
    const a = Array.from(((f = r.parentNode) == null ? void 0 : f.children) || []).filter((i) => i.tagName === r.tagName).indexOf(r) + 1;
    o.unshift(`${r.tagName.toLowerCase()}[${a}]`), r = r.parentNode;
  }
  return o.unshift(""), "/html/body/" + o.slice(1).join("/");
}
function Zn(t) {
  if (!t || t.nodeType !== Node.ELEMENT_NODE) return {};
  const o = {}, r = t.getAttribute("role") || Hn(t);
  r && (o.role = r);
  const f = Vn(t);
  f && (o.accessibleName = f);
  const c = t.getAttribute("aria-labelledby");
  return c && (o.labeledBy = c), Object.keys(o).length ? o : void 0;
}
function Hn(t) {
  const o = t.tagName.toLowerCase(), r = t.getAttribute("type");
  return {
    button: "button",
    a: t.hasAttribute("href") ? "link" : void 0,
    input: r === "checkbox" ? "checkbox" : r === "radio" ? "radio" : r === "text" || !r ? "textbox" : void 0,
    textarea: "textbox",
    select: "combobox",
    nav: "navigation",
    main: "main",
    aside: "complementary",
    header: "banner",
    footer: "contentinfo",
    h1: "heading",
    h2: "heading",
    h3: "heading",
    h4: "heading",
    h5: "heading",
    h6: "heading",
    img: "img",
    ul: "list",
    ol: "list",
    li: "listitem"
  }[o];
}
function Vn(t) {
  var n, a;
  if (t.getAttribute("aria-label")) return t.getAttribute("aria-label").trim();
  const o = t.getAttribute("aria-labelledby");
  if (o) {
    const i = o.split(/\s+/).map((l) => {
      var _, x;
      return (x = (_ = document.getElementById(l)) == null ? void 0 : _.textContent) == null ? void 0 : x.trim();
    }).filter(Boolean);
    if (i.length) return i.join(" ");
  }
  const r = (n = t.labels) == null ? void 0 : n[0];
  if (r) return r.textContent.trim();
  if (t.tagName.toLowerCase() === "input" && t.placeholder) return t.placeholder.trim();
  const f = t.getAttribute("alt");
  if (f) return f.trim();
  const c = t.getAttribute("title");
  if (c) return c.trim();
  if (["button", "a"].includes(t.tagName.toLowerCase())) {
    const i = (a = t.textContent) == null ? void 0 : a.trim();
    if (i) return i;
  }
  return "";
}
function Yn(t) {
  return !t || t.nodeType !== Node.ELEMENT_NODE ? void 0 : t.getAttribute("data-testid") || void 0;
}
function Te(t) {
  if (!t || t.nodeType !== Node.ELEMENT_NODE) return null;
  const o = t.getBoundingClientRect();
  return {
    tag: t.tagName.toLowerCase(),
    id: t.id || void 0,
    classes: t.className ? String(t.className).split(/\s+/).filter(Boolean) : void 0,
    selector: Cr(t),
    xpath: Wn(t),
    rect: {
      x: o.left + window.scrollX,
      y: o.top + window.scrollY,
      width: o.width,
      height: o.height
    },
    aria: Zn(t),
    testId: Yn(t)
  };
}
function Gn(t) {
  if (!t || t.nodeType !== Node.ELEMENT_NODE) return [];
  const o = [];
  let r = t;
  for (; r && r !== document.body; )
    o.unshift(r), r = r.parentElement;
  return r === document.body && o.unshift(document.body), o.map(Te).filter(Boolean);
}
function Xn(t) {
  if (!t || t.nodeType !== Node.ELEMENT_NODE) return [];
  const o = Kn(t);
  if (o.length) return o;
  const r = Jn(t);
  return r.length ? r : [];
}
function Kn(t) {
  const o = [];
  let r = t;
  for (; r; ) {
    const f = qn(r);
    f && !o.find((c) => c.componentName === f.componentName && c.selector === f.selector) && o.unshift(f), r = r.parentElement;
  }
  return o;
}
function qn(t) {
  var n, a, i, l, _;
  const r = Object.keys(t || {}).find((x) => x.startsWith("__vue"));
  if (!r) return null;
  const f = t[r], c = ((n = f == null ? void 0 : f.type) == null ? void 0 : n.name) || ((a = f == null ? void 0 : f.type) == null ? void 0 : a.__name) || ((l = (i = f == null ? void 0 : f.parent) == null ? void 0 : i.type) == null ? void 0 : l.name);
  return c ? {
    componentName: c,
    selector: Cr(t),
    rect: (_ = Te(t)) == null ? void 0 : _.rect
  } : null;
}
function Jn(t) {
  const o = [], r = Object.keys(t || {}).find((c) => c.startsWith("__reactFiber$"));
  if (!r) return o;
  let f = t[r];
  for (; f; ) {
    const c = Qn(f);
    c && !o.find((n) => n.componentName === c) && o.unshift({ componentName: c, selector: void 0, rect: void 0 }), f = f.return;
  }
  return o;
}
function Qn(t) {
  var o;
  if (!t) return null;
  if (typeof t.type == "function") return t.type.displayName || t.type.name || null;
  if (typeof t.type == "string") return null;
  if (t.elementType) {
    if (typeof t.elementType == "function") return t.elementType.displayName || t.elementType.name || null;
    if (typeof t.elementType == "object" && ((o = t.elementType) != null && o.$$typeof)) return t.elementType.name || null;
  }
  return null;
}
function We(t) {
  return {
    dom: Gn(t),
    framework: Xn(t)
  };
}
function ai({
  active: t = !1,
  pagePath: o = "",
  pageName: r = "",
  storageKey: f = "page-reviews",
  imageUpload: c,
  enableZipExport: n = !0,
  enableComponentTree: a = !0,
  onActiveChange: i,
  onAdd: l,
  onUpdate: _,
  onDelete: x,
  onClear: b,
  onExport: v
}) {
  var qe, Je, Qe, tr;
  const h = er(() => o || (typeof window < "u" ? window.location.pathname + window.location.search : "/"), [o]), {
    reviews: y,
    getPageReviews: u,
    addReview: m,
    updateReview: d,
    deleteReview: w,
    clearPageReviews: S,
    exportToJSON: A,
    exportToMarkdown: T,
    exportToZIP: L
  } = Mr({ storageKey: f, defaultPagePath: () => h }), D = er(() => u(h), [u, h, y]), [Z, P] = Ot("element"), [H, st] = Ot(!1), [E, F] = Ot(!1), [s, M] = Ot(!1), [ct, Y] = Ot(null), [ht, K] = Ot(""), [it, j] = Ot([]), [z, nt] = Ot([]), et = Ut(0), [J, _t] = Ot(null), [kt, ut] = Ot(null), [dt, Et] = Ot({ x: window.scrollX, y: window.scrollY }), [St, jt] = Ot(null), At = Ut(!1), e = Ut({ x: 0, y: 0 }), [I, N] = Ot(null), g = Ut(""), p = Ut({ x: 0, y: 0, rect: null }), [R, W] = Ot({ x: 0, y: 0 }), [V, O] = Ot({ width: null, height: null }), G = Ut(!1), Q = Ut({ x: 0, y: 0 }), q = Ut(!1), rt = Ut({ x: 0, y: 0, width: 0, height: 0 }), [wt, pt] = Ot({ x: 0, y: 0 }), [Rt, Kt] = Ot({ width: 560, height: null }), Nt = Ut(!1), Ht = Ut({ x: 0, y: 0 }), xt = Ut(!1), $t = Ut({ x: 0, y: 0, width: 0, height: 0 }), [te, Dt] = Ot([]), [ee, Wt] = Ot(null), [vt, Ft] = Ot({
    type: "element",
    title: "",
    severity: "medium",
    suggestion: "",
    targets: [],
    viewport: { width: 0, height: 0 },
    scroll: { x: 0, y: 0 },
    pagePath: "",
    pageUrl: "",
    pageName: "",
    aria: null,
    locators: null
  }), qt = it.length + z.length, Lt = vt.title.trim() && vt.suggestion.trim(), Vt = ot(() => {
    i == null || i(!1);
  }, [i]), ye = ot(() => ({
    viewport: { width: window.innerWidth, height: window.innerHeight },
    scroll: { x: window.scrollX, y: window.scrollY },
    pagePath: h,
    pageUrl: window.location.href,
    pageName: r || h
  }), [h, r]), he = ot((C) => C ? {
    x: C.x - dt.x,
    y: C.y - dt.y,
    width: C.width,
    height: C.height
  } : null, [dt]), _e = ot((C) => {
    var at;
    if (C.id) return "#" + C.id;
    if (C.className) {
      const gt = String(C.className).split(/\s+/).filter((Zt) => Zt && !Zt.startsWith("el-")).slice(0, 2);
      if (gt.length) return C.tagName.toLowerCase() + "." + gt.join(".");
    }
    let U = [], $ = C;
    for (; $ && $ !== document.body; ) {
      let gt = $.tagName.toLowerCase();
      if ($.id) {
        gt += "#" + $.id, U.unshift(gt);
        break;
      }
      const ie = Array.from(((at = $.parentNode) == null ? void 0 : at.children) || []).filter((Xt) => Xt.tagName === $.tagName);
      if (ie.length > 1) {
        const Xt = ie.indexOf($) + 1;
        gt += `:nth-of-type(${Xt})`;
      }
      U.unshift(gt), $ = $.parentNode;
    }
    return U.join(" > ");
  }, []), re = ot((C) => {
    const U = C.target;
    return !U || !(U instanceof Element) || U.closest(".review-overlay") || U.closest(".dropdown-menu") || U.closest(".modal") || U.closest(".drawer") ? null : U;
  }, []), Yt = ot((C) => C.ctrlKey || C.metaKey, []), ae = ot((C) => {
    const U = {};
    return C.selector && (U.cssSelector = C.selector), C.xpath && (U.xpath = C.xpath), C.aria && Object.keys(C.aria).length && (U.aria = C.aria), C.testId && (U.testId = C.testId), Object.keys(U).length ? U : null;
  }, []), be = ot(() => {
    const C = [];
    return it.forEach((U) => {
      const $ = U.el ? Te(U.el) : null;
      C.push({
        type: "element",
        selector: U.selector,
        elementText: U.text,
        elementRect: U.docRect || U.rect,
        componentTree: $ ? We(U.el) : null,
        aria: ($ == null ? void 0 : $.aria) || null,
        locators: $ ? ae($) : null
      });
    }), z.forEach((U) => {
      C.push({
        type: "viewport",
        viewportRect: U.rect
      });
    }), C;
  }, [it, z, ae]), fe = ot(() => {
    Dt([]), Ft({
      type: "element",
      title: "",
      severity: "medium",
      suggestion: "",
      targets: [],
      viewport: { width: 0, height: 0 },
      scroll: { x: 0, y: 0 },
      pagePath: "",
      pageUrl: "",
      pageName: "",
      aria: null,
      locators: null
    });
  }, []), ne = ot(() => {
    j([]), nt([]), ut(null), jt(null);
  }, []), Oe = ot(() => {
    const C = ye(), U = be(), $ = it[0], at = $ != null && $.el ? Te($.el) : null;
    Ft({
      type: it.length > 0 ? "element" : "viewport",
      title: "",
      severity: "medium",
      suggestion: "",
      targets: U,
      viewport: C.viewport,
      scroll: C.scroll,
      pagePath: C.pagePath,
      pageUrl: C.pageUrl,
      pageName: C.pageName,
      aria: (at == null ? void 0 : at.aria) || null,
      locators: at ? ae(at) : null
    }), Dt([]), st(!0);
  }, [ye, be, it, ae]), xe = ot(async () => {
    const C = [];
    for (const U of te)
      if (U === Qt.TARGETS)
        for (const $ of vt.targets) {
          let at = null;
          if ($.type === "element" && $.elementRect) {
            const gt = document.querySelector($.selector);
            gt && (at = await Er(gt));
          } else $.type === "viewport" && $.viewportRect && (at = await Un($.viewportRect));
          if (at) {
            const gt = Me($.type);
            let Zt = null;
            c && (Zt = await $e(at, gt, c)), C.push({ type: $.type, filename: gt, data: Zt ? void 0 : at, url: Zt || void 0 });
          }
        }
      else if (U === Qt.VIEWPORT) {
        const $ = await Bn();
        if ($) {
          const at = Me(Qt.VIEWPORT);
          let gt = null;
          c && (gt = await $e($, at, c)), C.push({ type: Qt.VIEWPORT, filename: at, data: gt ? void 0 : $, url: gt || void 0 });
        }
      } else if (U === Qt.FULL_PAGE) {
        const $ = await Ln();
        if ($) {
          const at = Me(Qt.FULL_PAGE);
          let gt = null;
          c && (gt = await $e($, at, c)), C.push({ type: Qt.FULL_PAGE, filename: at, data: gt ? void 0 : $, url: gt || void 0 });
        }
      }
    return C;
  }, [te, vt.targets, c]), ze = ot(async () => {
    if (!Lt) return;
    const C = await xe(), U = m({
      type: vt.type,
      title: vt.title.trim(),
      severity: vt.severity,
      suggestion: vt.suggestion.trim(),
      targets: vt.targets,
      viewport: vt.viewport,
      scroll: vt.scroll,
      pagePath: vt.pagePath,
      pageUrl: vt.pageUrl,
      pageName: vt.pageName,
      status: "open",
      screenshots: C,
      aria: vt.aria,
      locators: vt.locators
    });
    st(!1), ne(), l == null || l(U);
  }, [Lt, xe, vt, m, ne, l]), je = ot((C) => {
    d(C, { status: "resolved" }), _ == null || _({ id: C, status: "resolved" });
  }, [d, _]), k = ot((C) => {
    Wt({
      title: "删除确认",
      message: "确定删除这条评审意见吗？",
      onConfirm: () => {
        w(C), x == null || x({ id: C }), Wt(null);
      }
    });
  }, [w, x]), X = ot(() => {
    D.length !== 0 && Wt({
      title: "清空确认",
      message: "确定清空当前页面的所有评审意见吗？",
      onConfirm: () => {
        S(h), b == null || b({ pagePath: h }), Wt(null);
      }
    });
  }, [D.length, S, h, b]), tt = ot(() => {
    A(), v == null || v({ format: "json" });
  }, [A, v]), lt = ot(() => {
    T(), v == null || v({ format: "markdown" });
  }, [T, v]), yt = ot(async () => {
    await L(), v == null || v({ format: "zip" });
  }, [L, v]), bt = ot((C) => {
    if (!C.rect) {
      _t(null);
      return;
    }
    _t(C.rect);
  }, []), mt = ot((C) => {
    var at;
    if (!C.selector) return;
    const U = document.querySelector(C.selector);
    if (!U) return;
    const $ = U.getBoundingClientRect();
    j([{
      el: U,
      selector: C.selector,
      tag: U.tagName.toLowerCase(),
      text: ((at = U.innerText) == null ? void 0 : at.slice(0, 40)) || "",
      rect: {
        x: $.left,
        y: $.top,
        width: $.width,
        height: $.height
      },
      docRect: {
        x: $.left + window.scrollX,
        y: $.top + window.scrollY,
        width: $.width,
        height: $.height
      }
    }]), nt([]), ut(We(U)), M(!1);
  }, []), ft = ot((C) => {
    j((U) => {
      const $ = U.filter((at) => at.el !== C.el);
      return $.length === 0 && ut(null), $;
    });
  }, []), zt = ot((C) => {
    nt((U) => {
      const $ = U.filter((at) => at.id !== C.id);
      return $.forEach((at, gt) => {
        at.index = gt;
      }), $;
    });
  }, []), Ct = ot((C, U) => {
    Yt(U) && (U.stopPropagation(), ft(C));
  }, [Yt, ft]), Tt = ot((C, U) => {
    Yt(U) && (U.stopPropagation(), zt(C));
  }, [Yt, zt]), It = ot((C) => {
    if (G.current || I || Z !== "element" || H || At.current) return;
    const U = re(C);
    if (!U) {
      Y(null);
      return;
    }
    const $ = U.getBoundingClientRect();
    Y({
      x: $.left,
      y: $.top,
      width: $.width,
      height: $.height
    }), K(U.tagName.toLowerCase());
  }, [Z, H, I, re]), Jt = ot(() => {
    Y(null);
  }, []), Gt = ot((C) => {
    var gt;
    if (Z !== "element" || H || At.current || I) return;
    const U = re(C);
    if (!U) return;
    C.preventDefault(), C.stopPropagation();
    const $ = U.getBoundingClientRect(), at = {
      el: U,
      selector: _e(U),
      tag: U.tagName.toLowerCase(),
      text: ((gt = U.innerText) == null ? void 0 : gt.slice(0, 40)) || "",
      rect: {
        x: $.left,
        y: $.top,
        width: $.width,
        height: $.height
      },
      docRect: {
        x: $.left + window.scrollX,
        y: $.top + window.scrollY,
        width: $.width,
        height: $.height
      }
    };
    Yt(C) ? j((Zt) => {
      const ie = Zt.findIndex((Xt) => Xt.el === U);
      if (ie > -1) {
        const Xt = Zt.filter((me, le) => le !== ie);
        return Xt.length === 0 && ut(null), Xt;
      }
      return [...Zt, at];
    }) : (j([at]), nt([]), ut(We(U)));
  }, [Z, H, I, re, _e, Yt]), Pt = ot((C) => {
    G.current || Z !== "viewport" || H || I || re(C) && (C.preventDefault(), At.current = !0, e.current = { x: C.clientX, y: C.clientY }, jt({ x: e.current.x, y: e.current.y, width: 0, height: 0 }));
  }, [Z, H, I, re]), oe = ot((C) => {
    if (!I || !p.current.rect) return;
    const U = C.clientX + window.scrollX - p.current.x, $ = C.clientY + window.scrollY - p.current.y, at = p.current.rect;
    nt((gt) => {
      if (!gt.find((ge) => ge.id === I)) return gt;
      let { x: ie, y: Xt, width: me, height: le } = at;
      return g.current.includes("e") && (me = Math.max(10, at.width + U)), g.current.includes("s") && (le = Math.max(10, at.height + $)), g.current.includes("w") && (me = Math.max(10, at.width - U), ie = at.x + (at.width - me)), g.current.includes("n") && (le = Math.max(10, at.height - $), Xt = at.y + (at.height - le)), gt.map((ge) => ge.id === I ? { ...ge, rect: { x: ie, y: Xt, width: me, height: le } } : ge);
    });
  }, [I]), de = ot((C) => {
    if (G.current) return;
    if (I) {
      oe(C);
      return;
    }
    if (!At.current) return;
    const U = C.clientX, $ = C.clientY;
    jt({
      x: Math.min(e.current.x, U),
      y: Math.min(e.current.y, $),
      width: Math.abs(U - e.current.x),
      height: Math.abs($ - e.current.y)
    });
  }, [I, oe]), pe = ot((C) => {
    if (G.current) {
      G.current = !1;
      return;
    }
    if (q.current) {
      q.current = !1;
      return;
    }
    if (Nt.current) {
      Nt.current = !1;
      return;
    }
    if (xt.current) {
      xt.current = !1;
      return;
    }
    if (I) {
      N(null), g.current = "", p.current = { x: 0, y: 0, rect: null };
      return;
    }
    At.current && (At.current = !1, jt((U) => (U && U.width > 10 && U.height > 10 && (Yt(C) || j([]), nt(($) => [...$, {
      id: "box-" + Date.now() + "-" + et.current++,
      index: $.length,
      rect: {
        x: U.x + window.scrollX,
        y: U.y + window.scrollY,
        width: U.width,
        height: U.height
      }
    }])), null)));
  }, [I, Yt]), Rr = ot((C, U, $) => {
    N(C.id), g.current = U, p.current = {
      x: $.clientX + window.scrollX,
      y: $.clientY + window.scrollY,
      rect: { ...C.rect }
    };
  }, []), Tr = ot((C) => {
    var $, at;
    (($ = C.target.classList) != null && $.contains("toolbar-title") || (at = C.target.classList) != null && at.contains("review-toolbar")) && (G.current = !0, Q.current = {
      x: C.clientX - R.x,
      y: C.clientY - R.y
    });
  }, [R]), Ne = ot((C) => {
    if (G.current) {
      W({
        x: C.clientX - Q.current.x,
        y: C.clientY - Q.current.y
      });
      return;
    }
    if (q.current) {
      const U = C.clientX - rt.current.x, $ = C.clientY - rt.current.y;
      O({
        width: Math.max(400, rt.current.width + U),
        height: Math.max(48, rt.current.height + $)
      });
    }
  }, []), Ar = ot((C) => {
    q.current = !0;
    const U = C.target.closest(".review-toolbar"), $ = U == null ? void 0 : U.getBoundingClientRect();
    rt.current = {
      x: C.clientX,
      y: C.clientY,
      width: ($ == null ? void 0 : $.width) || 0,
      height: ($ == null ? void 0 : $.height) || 0
    };
  }, []), Or = ot((C) => {
    var U;
    (U = C.target.classList) != null && U.contains("modal-header") && (Nt.current = !0, Ht.current = {
      x: C.clientX - wt.x,
      y: C.clientY - wt.y
    });
  }, [wt]), Pe = ot((C) => {
    if (Nt.current)
      pt({
        x: C.clientX - Ht.current.x,
        y: C.clientY - Ht.current.y
      });
    else if (xt.current) {
      const U = C.clientX - $t.current.x, $ = C.clientY - $t.current.y;
      Kt({
        width: Math.max(360, $t.current.width + U),
        height: Math.max(300, $t.current.height + $)
      });
    }
  }, []), zr = ot((C) => {
    xt.current = !0, $t.current = {
      x: C.clientX,
      y: C.clientY,
      width: Rt.width,
      height: Rt.height
    };
  }, [Rt]), Ie = ot((C) => {
    C.key === "Escape" && (H ? st(!1) : Vt());
  }, [H, Vt]), jr = ot(() => {
  }, []), Nr = ot(() => {
    it.length === 0 && ut(null), M(!0);
  }, [it.length]);
  Fe(() => {
    if (t)
      return document.addEventListener("mousemove", It), document.addEventListener("mouseout", Jt), document.addEventListener("click", Gt, !0), document.addEventListener("mousedown", Pt), document.addEventListener("mousemove", de), document.addEventListener("mousemove", Ne), document.addEventListener("mousemove", Pe), document.addEventListener("mouseup", pe), document.addEventListener("keydown", Ie), () => {
        document.removeEventListener("mousemove", It), document.removeEventListener("mouseout", Jt), document.removeEventListener("click", Gt, !0), document.removeEventListener("mousedown", Pt), document.removeEventListener("mousemove", de), document.removeEventListener("mousemove", Ne), document.removeEventListener("mousemove", Pe), document.removeEventListener("mouseup", pe), document.removeEventListener("keydown", Ie);
      };
  }, [t, It, Jt, Gt, Pt, de, Ne, Pe, pe, Ie]), Fe(() => {
    if (!t) return;
    const C = () => {
      Et({ x: window.scrollX, y: window.scrollY }), j((U) => U.map(($) => {
        const at = $.el || document.querySelector($.selector);
        if (!at) return $;
        const gt = at.getBoundingClientRect();
        return {
          ...$,
          el: at,
          rect: {
            x: gt.left,
            y: gt.top,
            width: gt.width,
            height: gt.height
          }
        };
      }));
    };
    return window.addEventListener("scroll", C, !0), () => window.removeEventListener("scroll", C, !0);
  }, [t]), Fe(() => {
    t ? P("element") : (ne(), fe(), Y(null), F(!1), M(!1));
  }, [t, ne, fe]);
  const De = {
    transform: `translate(calc(-50% + ${R.x}px), ${R.y}px)`
  };
  V.width && (De.width = V.width + "px"), V.height && (De.height = V.height + "px");
  const Ke = {
    left: `calc(50% + ${wt.x}px)`,
    top: `calc(50% + ${wt.y}px)`,
    transform: "translate(-50%, -50%)",
    width: Rt.width + "px"
  };
  Rt.height && (Ke.height = Rt.height + "px");
  const Pr = ["nw", "n", "ne", "w", "e", "sw", "s", "se"];
  return Ir(
    /* @__PURE__ */ B.jsxs("div", { className: "review-overlay", onClick: jr, children: [
      /* @__PURE__ */ B.jsxs(
        "div",
        {
          className: `review-toolbar ${G.current ? "is-dragging" : ""}`,
          style: De,
          onClick: (C) => C.stopPropagation(),
          onMouseDown: Tr,
          children: [
            /* @__PURE__ */ B.jsxs("div", { className: "toolbar-left", children: [
              /* @__PURE__ */ B.jsx("span", { className: "toolbar-title", title: "按住此处可拖动", children: "页面评审模式" }),
              /* @__PURE__ */ B.jsxs("div", { className: "radio-group", children: [
                /* @__PURE__ */ B.jsx("button", { className: Z === "element" ? "active" : "", onClick: () => P("element"), children: "选择元素" }),
                /* @__PURE__ */ B.jsx("button", { className: Z === "viewport" ? "active" : "", onClick: () => P("viewport"), children: "框定视图" })
              ] })
            ] }),
            /* @__PURE__ */ B.jsxs("div", { className: "toolbar-right", children: [
              a && /* @__PURE__ */ B.jsx("button", { onClick: Nr, children: "组件树" }),
              /* @__PURE__ */ B.jsxs(
                "button",
                {
                  className: "primary",
                  disabled: qt === 0,
                  onClick: Oe,
                  children: [
                    "评审 (",
                    qt,
                    ")"
                  ]
                }
              ),
              /* @__PURE__ */ B.jsx(
                "button",
                {
                  disabled: qt === 0,
                  onClick: ne,
                  children: "取消选择"
                }
              ),
              /* @__PURE__ */ B.jsxs("button", { className: "badge-btn", onClick: () => F(!0), children: [
                "评审列表 ",
                /* @__PURE__ */ B.jsx("span", { className: "badge", children: D.length })
              ] }),
              /* @__PURE__ */ B.jsxs("div", { className: "dropdown", children: [
                /* @__PURE__ */ B.jsx("button", { className: "primary", onClick: lt, children: "导出" }),
                /* @__PURE__ */ B.jsxs("div", { className: "dropdown-menu", children: [
                  /* @__PURE__ */ B.jsx("div", { onClick: lt, children: "导出为 Markdown" }),
                  /* @__PURE__ */ B.jsx("div", { onClick: tt, children: "导出为 JSON" }),
                  n && /* @__PURE__ */ B.jsx("div", { onClick: yt, children: "导出为 ZIP" })
                ] })
              ] }),
              /* @__PURE__ */ B.jsx("button", { className: "danger", onClick: Vt, children: "退出评审" })
            ] }),
            /* @__PURE__ */ B.jsx("div", { className: "toolbar-resize-handle", onMouseDown: Ar })
          ]
        }
      ),
      ct && Z === "element" && !At.current && !I && /* @__PURE__ */ B.jsx("div", { className: "highlight-box hover-box", style: Ze(ct), children: /* @__PURE__ */ B.jsx("span", { className: "highlight-label", children: ht }) }),
      it.map((C, U) => /* @__PURE__ */ B.jsx(
        "div",
        {
          className: "highlight-box selected-box",
          style: Ze(C.rect),
          onClick: ($) => Ct(C, $),
          children: /* @__PURE__ */ B.jsxs("span", { className: "highlight-label", children: [
            C.tag,
            /* @__PURE__ */ B.jsx("i", { className: "remove-icon", onClick: ($) => {
              $.stopPropagation(), ft(C);
            }, children: "×" })
          ] })
        },
        "el-" + U
      )),
      J && /* @__PURE__ */ B.jsx("div", { className: "highlight-box tree-hover-box", style: Ze(he(J)) }),
      z.map((C) => /* @__PURE__ */ B.jsxs(
        "div",
        {
          className: `drag-rect selected-box ${I === C.id ? "is-resizing" : ""}`,
          style: fr(he(C.rect)),
          onMouseDown: (U) => Tt(C, U),
          children: [
            /* @__PURE__ */ B.jsxs("span", { className: "box-label", onMouseDown: (U) => U.stopPropagation(), children: [
              "框选 ",
              C.index + 1,
              /* @__PURE__ */ B.jsx("i", { className: "remove-icon", onClick: (U) => {
                U.stopPropagation(), zt(C);
              }, children: "×" })
            ] }),
            Pr.map((U) => /* @__PURE__ */ B.jsx(
              "div",
              {
                className: `resize-handle handle-${U}`,
                style: ti(U, C.rect),
                onMouseDown: ($) => Rr(C, U, $)
              },
              U
            ))
          ]
        },
        C.id
      )),
      St && /* @__PURE__ */ B.jsx("div", { className: "drag-rect preview-box", style: fr(St) }),
      H && /* @__PURE__ */ B.jsx("div", { className: "modal-backdrop", onClick: () => st(!1) }),
      H && /* @__PURE__ */ B.jsxs(
        "div",
        {
          className: `modal review-modal ${Nt.current ? "is-dragging" : ""}`,
          style: Ke,
          onClick: (C) => C.stopPropagation(),
          children: [
            /* @__PURE__ */ B.jsxs("div", { className: "modal-header", onMouseDown: Or, children: [
              /* @__PURE__ */ B.jsx("span", { children: "添加评审意见" }),
              /* @__PURE__ */ B.jsx("button", { className: "close", onClick: () => st(!1), children: "×" })
            ] }),
            /* @__PURE__ */ B.jsxs("div", { className: "modal-body", children: [
              /* @__PURE__ */ B.jsxs("div", { className: "form-row", children: [
                /* @__PURE__ */ B.jsx("label", { children: "评审目标" }),
                /* @__PURE__ */ B.jsx("div", { className: "review-targets-summary", children: vt.targets.map((C, U) => {
                  var $, at;
                  return /* @__PURE__ */ B.jsx("span", { className: "tag target-tag", children: C.type === "element" ? C.elementText || C.selector || "元素" : `框选 ${($ = C.viewportRect) == null ? void 0 : $.x},${(at = C.viewportRect) == null ? void 0 : at.y}` }, U);
                }) })
              ] }),
              /* @__PURE__ */ B.jsxs("div", { className: "form-row", children: [
                /* @__PURE__ */ B.jsx("label", { children: "窗口尺寸" }),
                /* @__PURE__ */ B.jsxs("span", { className: "text-muted", children: [
                  (qe = vt.viewport) == null ? void 0 : qe.width,
                  " × ",
                  (Je = vt.viewport) == null ? void 0 : Je.height
                ] })
              ] }),
              /* @__PURE__ */ B.jsxs("div", { className: "form-row", children: [
                /* @__PURE__ */ B.jsx("label", { children: "滚动位置" }),
                /* @__PURE__ */ B.jsxs("span", { className: "text-muted", children: [
                  "x=",
                  (Qe = vt.scroll) == null ? void 0 : Qe.x,
                  ", y=",
                  (tr = vt.scroll) == null ? void 0 : tr.y
                ] })
              ] }),
              /* @__PURE__ */ B.jsxs("div", { className: "form-row", children: [
                /* @__PURE__ */ B.jsx("label", { children: "截图" }),
                /* @__PURE__ */ B.jsx("div", { className: "checkbox-group", children: [
                  { value: Qt.TARGETS, label: "选中目标" },
                  { value: Qt.VIEWPORT, label: "当前视口" },
                  { value: Qt.FULL_PAGE, label: "完整页面" }
                ].map((C) => /* @__PURE__ */ B.jsxs("label", { className: "checkbox-label", children: [
                  /* @__PURE__ */ B.jsx(
                    "input",
                    {
                      type: "checkbox",
                      value: C.value,
                      checked: te.includes(C.value),
                      onChange: (U) => {
                        const $ = U.target.value;
                        Dt(
                          (at) => at.includes($) ? at.filter((gt) => gt !== $) : [...at, $]
                        );
                      }
                    }
                  ),
                  C.label
                ] }, C.value)) })
              ] }),
              /* @__PURE__ */ B.jsxs("div", { className: "form-row", children: [
                /* @__PURE__ */ B.jsxs("label", { children: [
                  "标题 ",
                  /* @__PURE__ */ B.jsx("span", { className: "required", children: "*" })
                ] }),
                /* @__PURE__ */ B.jsx(
                  "input",
                  {
                    type: "text",
                    value: vt.title,
                    onChange: (C) => Ft({ ...vt, title: C.target.value }),
                    placeholder: "例如：按钮样式不统一"
                  }
                )
              ] }),
              /* @__PURE__ */ B.jsxs("div", { className: "form-row", children: [
                /* @__PURE__ */ B.jsxs("label", { children: [
                  "严重等级 ",
                  /* @__PURE__ */ B.jsx("span", { className: "required", children: "*" })
                ] }),
                /* @__PURE__ */ B.jsx("div", { className: "radio-group", children: ["low", "medium", "high", "critical"].map((C) => /* @__PURE__ */ B.jsxs("label", { className: "radio-label", children: [
                  /* @__PURE__ */ B.jsx(
                    "input",
                    {
                      type: "radio",
                      name: "severity",
                      value: C,
                      checked: vt.severity === C,
                      onChange: () => Ft({ ...vt, severity: C })
                    }
                  ),
                  dr(C)
                ] }, C)) })
              ] }),
              /* @__PURE__ */ B.jsxs("div", { className: "form-row", children: [
                /* @__PURE__ */ B.jsxs("label", { children: [
                  "评审建议 ",
                  /* @__PURE__ */ B.jsx("span", { className: "required", children: "*" })
                ] }),
                /* @__PURE__ */ B.jsx(
                  "textarea",
                  {
                    rows: 4,
                    value: vt.suggestion,
                    onChange: (C) => Ft({ ...vt, suggestion: C.target.value }),
                    placeholder: "描述问题现象、影响和改进建议"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ B.jsxs("div", { className: "modal-footer", children: [
              /* @__PURE__ */ B.jsx("button", { onClick: () => st(!1), children: "取消" }),
              /* @__PURE__ */ B.jsx("button", { className: "primary", disabled: !Lt, onClick: ze, children: "保存评审" })
            ] }),
            /* @__PURE__ */ B.jsx("div", { className: "modal-resize-handle", onMouseDown: zr })
          ]
        }
      ),
      s && /* @__PURE__ */ B.jsxs(B.Fragment, { children: [
        /* @__PURE__ */ B.jsx("div", { className: "drawer-backdrop", onClick: () => M(!1) }),
        /* @__PURE__ */ B.jsxs("div", { className: "drawer", children: [
          /* @__PURE__ */ B.jsxs("div", { className: "drawer-header", children: [
            /* @__PURE__ */ B.jsx("span", { children: "组件树检查器" }),
            /* @__PURE__ */ B.jsx("button", { className: "close", onClick: () => M(!1), children: "×" })
          ] }),
          /* @__PURE__ */ B.jsx("div", { className: "drawer-body", children: kt ? /* @__PURE__ */ B.jsxs("div", { className: "tree-panel", children: [
            kt.framework && kt.framework.length > 0 && /* @__PURE__ */ B.jsxs("div", { className: "tree-section", children: [
              /* @__PURE__ */ B.jsx("h4", { children: "框架组件树" }),
              /* @__PURE__ */ B.jsx("div", { className: "tree-list", children: kt.framework.map((C, U) => /* @__PURE__ */ B.jsx(
                "div",
                {
                  className: "tree-node",
                  onMouseEnter: () => bt(C),
                  onMouseLeave: () => _t(null),
                  onClick: () => mt(C),
                  children: /* @__PURE__ */ B.jsx("span", { className: "node-name", children: C.componentName })
                },
                "fw-" + U
              )) })
            ] }),
            /* @__PURE__ */ B.jsxs("div", { className: "tree-section", children: [
              /* @__PURE__ */ B.jsx("h4", { children: "DOM 树" }),
              /* @__PURE__ */ B.jsx("div", { className: "tree-list", children: kt.dom.map((C, U) => {
                var $;
                return /* @__PURE__ */ B.jsxs(
                  "div",
                  {
                    className: "tree-node",
                    style: { paddingLeft: U * 12 },
                    onMouseEnter: () => bt(C),
                    onMouseLeave: () => _t(null),
                    onClick: () => mt(C),
                    children: [
                      /* @__PURE__ */ B.jsx("span", { className: "node-tag", children: C.tag }),
                      C.id && /* @__PURE__ */ B.jsxs("span", { className: "node-id", children: [
                        "#",
                        C.id
                      ] }),
                      (($ = C.aria) == null ? void 0 : $.role) && /* @__PURE__ */ B.jsxs("span", { className: "node-aria", children: [
                        "role=",
                        C.aria.role
                      ] }),
                      C.testId && /* @__PURE__ */ B.jsxs("span", { className: "node-testid", children: [
                        "testid=",
                        C.testId
                      ] })
                    ]
                  },
                  "dom-" + U
                );
              }) })
            ] })
          ] }) : /* @__PURE__ */ B.jsx("div", { className: "empty", children: "先选择一个元素以查看组件树" }) })
        ] })
      ] }),
      E && /* @__PURE__ */ B.jsxs(B.Fragment, { children: [
        /* @__PURE__ */ B.jsx("div", { className: "drawer-backdrop", onClick: () => F(!1) }),
        /* @__PURE__ */ B.jsxs("div", { className: "drawer", children: [
          /* @__PURE__ */ B.jsxs("div", { className: "drawer-header", children: [
            /* @__PURE__ */ B.jsx("span", { children: "当前页面评审意见" }),
            /* @__PURE__ */ B.jsx("button", { className: "close", onClick: () => F(!1), children: "×" })
          ] }),
          /* @__PURE__ */ B.jsxs("div", { className: "drawer-body", children: [
            /* @__PURE__ */ B.jsxs("div", { className: "review-list-actions", children: [
              /* @__PURE__ */ B.jsx("button", { className: "primary", onClick: lt, children: "导出 Markdown" }),
              /* @__PURE__ */ B.jsx("button", { onClick: tt, children: "导出 JSON" }),
              n && /* @__PURE__ */ B.jsx("button", { onClick: yt, children: "导出 ZIP" }),
              /* @__PURE__ */ B.jsx("button", { className: "danger-text", onClick: X, children: "清空本页" })
            ] }),
            D.length === 0 ? /* @__PURE__ */ B.jsx("div", { className: "empty", children: "暂无评审意见" }) : /* @__PURE__ */ B.jsx("div", { className: "review-list", children: D.map((C) => {
              var U;
              return /* @__PURE__ */ B.jsxs("div", { className: "review-item", children: [
                /* @__PURE__ */ B.jsxs("div", { className: "review-item-header", children: [
                  /* @__PURE__ */ B.jsx("span", { className: "review-item-title", children: C.title }),
                  /* @__PURE__ */ B.jsxs("div", { className: "review-item-tags", children: [
                    /* @__PURE__ */ B.jsx("span", { className: `tag ${ei(C.severity)}`, children: dr(C.severity) }),
                    /* @__PURE__ */ B.jsxs("span", { className: "tag info", children: [
                      ((U = C.targets) == null ? void 0 : U.length) || 1,
                      " 个目标"
                    ] }),
                    ri(C) && /* @__PURE__ */ B.jsx("span", { className: "tag success", children: "树" })
                  ] })
                ] }),
                /* @__PURE__ */ B.jsx("p", { className: "review-item-target", children: ni(C.targets) }),
                /* @__PURE__ */ B.jsx("p", { className: "review-item-suggestion", children: C.suggestion }),
                /* @__PURE__ */ B.jsxs("div", { className: "review-item-meta", children: [
                  /* @__PURE__ */ B.jsx("span", { className: "text-muted", children: new Date(C.createdAt).toLocaleString() }),
                  /* @__PURE__ */ B.jsxs("div", { className: "review-item-actions", children: [
                    C.status !== "resolved" && /* @__PURE__ */ B.jsx("button", { className: "link primary", onClick: () => je(C.id), children: "标记解决" }),
                    /* @__PURE__ */ B.jsx("button", { className: "link danger", onClick: () => k(C.id), children: "删除" })
                  ] })
                ] })
              ] }, C.id);
            }) })
          ] })
        ] })
      ] }),
      ee && /* @__PURE__ */ B.jsx("div", { className: "modal-backdrop", onClick: () => Wt(null), children: /* @__PURE__ */ B.jsxs("div", { className: "modal confirm-modal", onClick: (C) => C.stopPropagation(), children: [
        /* @__PURE__ */ B.jsx("div", { className: "modal-header", children: ee.title }),
        /* @__PURE__ */ B.jsx("div", { className: "modal-body", children: ee.message }),
        /* @__PURE__ */ B.jsxs("div", { className: "modal-footer", children: [
          /* @__PURE__ */ B.jsx("button", { onClick: () => Wt(null), children: "取消" }),
          /* @__PURE__ */ B.jsx("button", { className: "danger", onClick: ee.onConfirm, children: "确定" })
        ] })
      ] }) })
    ] }),
    document.body
  );
}
function Ze(t) {
  return t ? {
    left: t.x + "px",
    top: t.y + "px",
    width: t.width + "px",
    height: t.height + "px"
  } : {};
}
function fr(t) {
  return t ? {
    left: t.x + "px",
    top: t.y + "px",
    width: t.width + "px",
    height: t.height + "px"
  } : {};
}
function ti(t, o) {
  const f = {};
  return t.includes("n") && (f.top = -8 / 2 + "px"), t.includes("s") && (f.bottom = -8 / 2 + "px"), t.includes("w") && (f.left = -8 / 2 + "px"), t.includes("e") && (f.right = -8 / 2 + "px"), (t === "n" || t === "s") && (f.left = o.width / 2 - 8 / 2 + "px"), (t === "w" || t === "e") && (f.top = o.height / 2 - 8 / 2 + "px"), f.width = "8px", f.height = "8px", f;
}
function ei(t) {
  return { low: "info", medium: "warning", high: "danger", critical: "danger" }[t] || "info";
}
function dr(t) {
  return { low: "低", medium: "中", high: "高", critical: "严重" }[t] || t;
}
function ri(t) {
  var o;
  return (o = t.targets) == null ? void 0 : o.some((r) => {
    var f, c;
    return (c = (f = r.componentTree) == null ? void 0 : f.dom) == null ? void 0 : c.length;
  });
}
function ni(t) {
  if (!t || t.length === 0) return "无目标";
  const o = t[0], r = o.type === "element" ? o.elementText || o.selector || "元素" : `框选 x=${o.viewportRect.x}, y=${o.viewportRect.y}`;
  return t.length === 1 ? r : `${r} 等 ${t.length} 个目标`;
}
export {
  ai as ReviewTool,
  ai as default,
  Mr as usePageReview
};
