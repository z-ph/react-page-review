import Ue, { useState as Lt, useCallback as mt, useMemo as we, useRef as ce, useEffect as Ce } from "react";
import { createPortal as er } from "react-dom";
var fe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function rr(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var xe = { exports: {} }, ae = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function nr() {
  if (Te) return ae;
  Te = 1;
  var s = Ue, d = Symbol.for("react.element"), i = Symbol.for("react.fragment"), g = Object.prototype.hasOwnProperty, c = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, e = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(n, l, y) {
    var k, _ = {}, b = null, u = null;
    y !== void 0 && (b = "" + y), l.key !== void 0 && (b = "" + l.key), l.ref !== void 0 && (u = l.ref);
    for (k in l) g.call(l, k) && !e.hasOwnProperty(k) && (_[k] = l[k]);
    if (n && n.defaultProps) for (k in l = n.defaultProps, l) _[k] === void 0 && (_[k] = l[k]);
    return { $$typeof: d, type: n, key: b, ref: u, props: _, _owner: c.current };
  }
  return ae.Fragment = i, ae.jsx = a, ae.jsxs = a, ae;
}
var se = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function ir() {
  return Oe || (Oe = 1, process.env.NODE_ENV !== "production" && function() {
    var s = Ue, d = Symbol.for("react.element"), i = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), e = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), n = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), u = Symbol.for("react.offscreen"), w = Symbol.iterator, o = "@@iterator";
    function p(x) {
      if (x === null || typeof x != "object")
        return null;
      var Z = w && x[w] || x[o];
      return typeof Z == "function" ? Z : null;
    }
    var f = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(x) {
      {
        for (var Z = arguments.length, Q = new Array(Z > 1 ? Z - 1 : 0), ot = 1; ot < Z; ot++)
          Q[ot - 1] = arguments[ot];
        E("error", x, Q);
      }
    }
    function E(x, Z, Q) {
      {
        var ot = f.ReactDebugCurrentFrame, vt = ot.getStackAddendum();
        vt !== "" && (Z += "%s", Q = Q.concat([vt]));
        var xt = Q.map(function(pt) {
          return String(pt);
        });
        xt.unshift("Warning: " + Z), Function.prototype.apply.call(console[x], console, xt);
      }
    }
    var T = !1, C = !1, F = !1, j = !1, M = !1, z;
    z = Symbol.for("react.module.reference");
    function $(x) {
      return !!(typeof x == "string" || typeof x == "function" || x === g || x === e || M || x === c || x === y || x === k || j || x === u || T || C || F || typeof x == "object" && x !== null && (x.$$typeof === b || x.$$typeof === _ || x.$$typeof === a || x.$$typeof === n || x.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      x.$$typeof === z || x.getModuleId !== void 0));
    }
    function it(x, Z, Q) {
      var ot = x.displayName;
      if (ot)
        return ot;
      var vt = Z.displayName || Z.name || "";
      return vt !== "" ? Q + "(" + vt + ")" : Q;
    }
    function S(x) {
      return x.displayName || "Context";
    }
    function D(x) {
      if (x == null)
        return null;
      if (typeof x.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof x == "function")
        return x.displayName || x.name || null;
      if (typeof x == "string")
        return x;
      switch (x) {
        case g:
          return "Fragment";
        case i:
          return "Portal";
        case e:
          return "Profiler";
        case c:
          return "StrictMode";
        case y:
          return "Suspense";
        case k:
          return "SuspenseList";
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case n:
            var Z = x;
            return S(Z) + ".Consumer";
          case a:
            var Q = x;
            return S(Q._context) + ".Provider";
          case l:
            return it(x, x.render, "ForwardRef");
          case _:
            var ot = x.displayName || null;
            return ot !== null ? ot : D(x.type) || "Memo";
          case b: {
            var vt = x, xt = vt._payload, pt = vt._init;
            try {
              return D(pt(xt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var r = Object.assign, N = 0, at, L, ut, V, nt, I, A;
    function et() {
    }
    et.__reactDisabledLog = !0;
    function q() {
      {
        if (N === 0) {
          at = console.log, L = console.info, ut = console.warn, V = console.error, nt = console.group, I = console.groupCollapsed, A = console.groupEnd;
          var x = {
            configurable: !0,
            enumerable: !0,
            value: et,
            writable: !0
          };
          Object.defineProperties(console, {
            info: x,
            log: x,
            warn: x,
            error: x,
            group: x,
            groupCollapsed: x,
            groupEnd: x
          });
        }
        N++;
      }
    }
    function G() {
      {
        if (N--, N === 0) {
          var x = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: r({}, x, {
              value: at
            }),
            info: r({}, x, {
              value: L
            }),
            warn: r({}, x, {
              value: ut
            }),
            error: r({}, x, {
              value: V
            }),
            group: r({}, x, {
              value: nt
            }),
            groupCollapsed: r({}, x, {
              value: I
            }),
            groupEnd: r({}, x, {
              value: A
            })
          });
        }
        N < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var wt = f.ReactCurrentDispatcher, tt;
    function lt(x, Z, Q) {
      {
        if (tt === void 0)
          try {
            throw Error();
          } catch (vt) {
            var ot = vt.stack.trim().match(/\n( *(at )?)/);
            tt = ot && ot[1] || "";
          }
        return `
` + tt + x;
      }
    }
    var ht = !1, yt;
    {
      var _t = typeof WeakMap == "function" ? WeakMap : Map;
      yt = new _t();
    }
    function St(x, Z) {
      if (!x || ht)
        return "";
      {
        var Q = yt.get(x);
        if (Q !== void 0)
          return Q;
      }
      var ot;
      ht = !0;
      var vt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var xt;
      xt = wt.current, wt.current = null, q();
      try {
        if (Z) {
          var pt = function() {
            throw Error();
          };
          if (Object.defineProperty(pt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(pt, []);
            } catch (Pt) {
              ot = Pt;
            }
            Reflect.construct(x, [], pt);
          } else {
            try {
              pt.call();
            } catch (Pt) {
              ot = Pt;
            }
            x.call(pt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Pt) {
            ot = Pt;
          }
          x();
        }
      } catch (Pt) {
        if (Pt && ot && typeof Pt.stack == "string") {
          for (var dt = Pt.stack.split(`
`), It = ot.stack.split(`
`), kt = dt.length - 1, Et = It.length - 1; kt >= 1 && Et >= 0 && dt[kt] !== It[Et]; )
            Et--;
          for (; kt >= 1 && Et >= 0; kt--, Et--)
            if (dt[kt] !== It[Et]) {
              if (kt !== 1 || Et !== 1)
                do
                  if (kt--, Et--, Et < 0 || dt[kt] !== It[Et]) {
                    var Nt = `
` + dt[kt].replace(" at new ", " at ");
                    return x.displayName && Nt.includes("<anonymous>") && (Nt = Nt.replace("<anonymous>", x.displayName)), typeof x == "function" && yt.set(x, Nt), Nt;
                  }
                while (kt >= 1 && Et >= 0);
              break;
            }
        }
      } finally {
        ht = !1, wt.current = xt, G(), Error.prepareStackTrace = vt;
      }
      var Jt = x ? x.displayName || x.name : "", qt = Jt ? lt(Jt) : "";
      return typeof x == "function" && yt.set(x, qt), qt;
    }
    function Tt(x, Z, Q) {
      return St(x, !1);
    }
    function t(x) {
      var Z = x.prototype;
      return !!(Z && Z.isReactComponent);
    }
    function B(x, Z, Q) {
      if (x == null)
        return "";
      if (typeof x == "function")
        return St(x, t(x));
      if (typeof x == "string")
        return lt(x);
      switch (x) {
        case y:
          return lt("Suspense");
        case k:
          return lt("SuspenseList");
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case l:
            return Tt(x.render);
          case _:
            return B(x.type, Z, Q);
          case b: {
            var ot = x, vt = ot._payload, xt = ot._init;
            try {
              return B(xt(vt), Z, Q);
            } catch {
            }
          }
        }
      return "";
    }
    var P = Object.prototype.hasOwnProperty, m = {}, h = f.ReactDebugCurrentFrame;
    function R(x) {
      if (x) {
        var Z = x._owner, Q = B(x.type, x._source, Z ? Z.type : null);
        h.setExtraStackFrame(Q);
      } else
        h.setExtraStackFrame(null);
    }
    function U(x, Z, Q, ot, vt) {
      {
        var xt = Function.call.bind(P);
        for (var pt in x)
          if (xt(x, pt)) {
            var dt = void 0;
            try {
              if (typeof x[pt] != "function") {
                var It = Error((ot || "React class") + ": " + Q + " type `" + pt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof x[pt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw It.name = "Invariant Violation", It;
              }
              dt = x[pt](Z, pt, ot, Q, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (kt) {
              dt = kt;
            }
            dt && !(dt instanceof Error) && (R(vt), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ot || "React class", Q, pt, typeof dt), R(null)), dt instanceof Error && !(dt.message in m) && (m[dt.message] = !0, R(vt), v("Failed %s type: %s", Q, dt.message), R(null));
          }
      }
    }
    var W = Array.isArray;
    function O(x) {
      return W(x);
    }
    function Y(x) {
      {
        var Z = typeof Symbol == "function" && Symbol.toStringTag, Q = Z && x[Symbol.toStringTag] || x.constructor.name || "Object";
        return Q;
      }
    }
    function J(x) {
      try {
        return X(x), !1;
      } catch {
        return !0;
      }
    }
    function X(x) {
      return "" + x;
    }
    function rt(x) {
      if (J(x))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Y(x)), X(x);
    }
    var gt = f.ReactCurrentOwner, ft = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Rt, Ft;
    function Ot(x) {
      if (P.call(x, "ref")) {
        var Z = Object.getOwnPropertyDescriptor(x, "ref").get;
        if (Z && Z.isReactWarning)
          return !1;
      }
      return x.ref !== void 0;
    }
    function Ut(x) {
      if (P.call(x, "key")) {
        var Z = Object.getOwnPropertyDescriptor(x, "key").get;
        if (Z && Z.isReactWarning)
          return !1;
      }
      return x.key !== void 0;
    }
    function bt(x, Z) {
      typeof x.ref == "string" && gt.current;
    }
    function Mt(x, Z) {
      {
        var Q = function() {
          Rt || (Rt = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Z));
        };
        Q.isReactWarning = !0, Object.defineProperty(x, "key", {
          get: Q,
          configurable: !0
        });
      }
    }
    function Gt(x, Z) {
      {
        var Q = function() {
          Ft || (Ft = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Z));
        };
        Q.isReactWarning = !0, Object.defineProperty(x, "ref", {
          get: Q,
          configurable: !0
        });
      }
    }
    var zt = function(x, Z, Q, ot, vt, xt, pt) {
      var dt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: d,
        // Built-in properties that belong on the element
        type: x,
        key: Z,
        ref: Q,
        props: pt,
        // Record the component responsible for creating this element.
        _owner: xt
      };
      return dt._store = {}, Object.defineProperty(dt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(dt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ot
      }), Object.defineProperty(dt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: vt
      }), Object.freeze && (Object.freeze(dt.props), Object.freeze(dt)), dt;
    };
    function Vt(x, Z, Q, ot, vt) {
      {
        var xt, pt = {}, dt = null, It = null;
        Q !== void 0 && (rt(Q), dt = "" + Q), Ut(Z) && (rt(Z.key), dt = "" + Z.key), Ot(Z) && (It = Z.ref, bt(Z, vt));
        for (xt in Z)
          P.call(Z, xt) && !ft.hasOwnProperty(xt) && (pt[xt] = Z[xt]);
        if (x && x.defaultProps) {
          var kt = x.defaultProps;
          for (xt in kt)
            pt[xt] === void 0 && (pt[xt] = kt[xt]);
        }
        if (dt || It) {
          var Et = typeof x == "function" ? x.displayName || x.name || "Unknown" : x;
          dt && Mt(pt, Et), It && Gt(pt, Et);
        }
        return zt(x, dt, It, vt, ot, gt.current, pt);
      }
    }
    var Xt = f.ReactCurrentOwner, Kt = f.ReactDebugCurrentFrame;
    function Wt(x) {
      if (x) {
        var Z = x._owner, Q = B(x.type, x._source, Z ? Z.type : null);
        Kt.setExtraStackFrame(Q);
      } else
        Kt.setExtraStackFrame(null);
    }
    var Ht;
    Ht = !1;
    function Bt(x) {
      return typeof x == "object" && x !== null && x.$$typeof === d;
    }
    function $t() {
      {
        if (Xt.current) {
          var x = D(Xt.current.type);
          if (x)
            return `

Check the render method of \`` + x + "`.";
        }
        return "";
      }
    }
    function oe(x) {
      return "";
    }
    var ee = {};
    function le(x) {
      {
        var Z = $t();
        if (!Z) {
          var Q = typeof x == "string" ? x : x.displayName || x.name;
          Q && (Z = `

Check the top-level render call using <` + Q + ">.");
        }
        return Z;
      }
    }
    function re(x, Z) {
      {
        if (!x._store || x._store.validated || x.key != null)
          return;
        x._store.validated = !0;
        var Q = le(Z);
        if (ee[Q])
          return;
        ee[Q] = !0;
        var ot = "";
        x && x._owner && x._owner !== Xt.current && (ot = " It was passed a child from " + D(x._owner.type) + "."), Wt(x), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Q, ot), Wt(null);
      }
    }
    function K(x, Z) {
      {
        if (typeof x != "object")
          return;
        if (O(x))
          for (var Q = 0; Q < x.length; Q++) {
            var ot = x[Q];
            Bt(ot) && re(ot, Z);
          }
        else if (Bt(x))
          x._store && (x._store.validated = !0);
        else if (x) {
          var vt = p(x);
          if (typeof vt == "function" && vt !== x.entries)
            for (var xt = vt.call(x), pt; !(pt = xt.next()).done; )
              Bt(pt.value) && re(pt.value, Z);
        }
      }
    }
    function ct(x) {
      {
        var Z = x.type;
        if (Z == null || typeof Z == "string")
          return;
        var Q;
        if (typeof Z == "function")
          Q = Z.propTypes;
        else if (typeof Z == "object" && (Z.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        Z.$$typeof === _))
          Q = Z.propTypes;
        else
          return;
        if (Q) {
          var ot = D(Z);
          U(Q, x.props, "prop", ot, x);
        } else if (Z.PropTypes !== void 0 && !Ht) {
          Ht = !0;
          var vt = D(Z);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", vt || "Unknown");
        }
        typeof Z.getDefaultProps == "function" && !Z.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function st(x) {
      {
        for (var Z = Object.keys(x.props), Q = 0; Q < Z.length; Q++) {
          var ot = Z[Q];
          if (ot !== "children" && ot !== "key") {
            Wt(x), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ot), Wt(null);
            break;
          }
        }
        x.ref !== null && (Wt(x), v("Invalid attribute `ref` supplied to `React.Fragment`."), Wt(null));
      }
    }
    var Ct = {};
    function At(x, Z, Q, ot, vt, xt) {
      {
        var pt = $(x);
        if (!pt) {
          var dt = "";
          (x === void 0 || typeof x == "object" && x !== null && Object.keys(x).length === 0) && (dt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var It = oe();
          It ? dt += It : dt += $t();
          var kt;
          x === null ? kt = "null" : O(x) ? kt = "array" : x !== void 0 && x.$$typeof === d ? (kt = "<" + (D(x.type) || "Unknown") + " />", dt = " Did you accidentally export a JSX literal instead of a component?") : kt = typeof x, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", kt, dt);
        }
        var Et = Vt(x, Z, Q, vt, xt);
        if (Et == null)
          return Et;
        if (pt) {
          var Nt = Z.children;
          if (Nt !== void 0)
            if (ot)
              if (O(Nt)) {
                for (var Jt = 0; Jt < Nt.length; Jt++)
                  K(Nt[Jt], x);
                Object.freeze && Object.freeze(Nt);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              K(Nt, x);
        }
        if (P.call(Z, "key")) {
          var qt = D(x), Pt = Object.keys(Z).filter(function(tr) {
            return tr !== "key";
          }), ve = Pt.length > 0 ? "{key: someKey, " + Pt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ct[qt + ve]) {
            var Qe = Pt.length > 0 ? "{" + Pt.join(": ..., ") + ": ...}" : "{}";
            v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ve, qt, Qe, qt), Ct[qt + ve] = !0;
          }
        }
        return x === g ? st(Et) : ct(Et), Et;
      }
    }
    function ne(x, Z, Q) {
      return At(x, Z, Q, !0);
    }
    function ue(x, Z, Q) {
      return At(x, Z, Q, !1);
    }
    var ie = ue, Je = ne;
    se.Fragment = g, se.jsx = ie, se.jsxs = Je;
  }()), se;
}
process.env.NODE_ENV === "production" ? xe.exports = nr() : xe.exports = ir();
var H = xe.exports;
function he(s) {
  throw new Error('Could not dynamically require "' + s + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var We = { exports: {} };
/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/
(function(s, d) {
  (function(i) {
    s.exports = i();
  })(function() {
    return function i(g, c, e) {
      function a(y, k) {
        if (!c[y]) {
          if (!g[y]) {
            var _ = typeof he == "function" && he;
            if (!k && _) return _(y, !0);
            if (n) return n(y, !0);
            var b = new Error("Cannot find module '" + y + "'");
            throw b.code = "MODULE_NOT_FOUND", b;
          }
          var u = c[y] = { exports: {} };
          g[y][0].call(u.exports, function(w) {
            var o = g[y][1][w];
            return a(o || w);
          }, u, u.exports, i, g, c, e);
        }
        return c[y].exports;
      }
      for (var n = typeof he == "function" && he, l = 0; l < e.length; l++) a(e[l]);
      return a;
    }({ 1: [function(i, g, c) {
      var e = i("./utils"), a = i("./support"), n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      c.encode = function(l) {
        for (var y, k, _, b, u, w, o, p = [], f = 0, v = l.length, E = v, T = e.getTypeOf(l) !== "string"; f < l.length; ) E = v - f, _ = T ? (y = l[f++], k = f < v ? l[f++] : 0, f < v ? l[f++] : 0) : (y = l.charCodeAt(f++), k = f < v ? l.charCodeAt(f++) : 0, f < v ? l.charCodeAt(f++) : 0), b = y >> 2, u = (3 & y) << 4 | k >> 4, w = 1 < E ? (15 & k) << 2 | _ >> 6 : 64, o = 2 < E ? 63 & _ : 64, p.push(n.charAt(b) + n.charAt(u) + n.charAt(w) + n.charAt(o));
        return p.join("");
      }, c.decode = function(l) {
        var y, k, _, b, u, w, o = 0, p = 0, f = "data:";
        if (l.substr(0, f.length) === f) throw new Error("Invalid base64 input, it looks like a data url.");
        var v, E = 3 * (l = l.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
        if (l.charAt(l.length - 1) === n.charAt(64) && E--, l.charAt(l.length - 2) === n.charAt(64) && E--, E % 1 != 0) throw new Error("Invalid base64 input, bad content length.");
        for (v = a.uint8array ? new Uint8Array(0 | E) : new Array(0 | E); o < l.length; ) y = n.indexOf(l.charAt(o++)) << 2 | (b = n.indexOf(l.charAt(o++))) >> 4, k = (15 & b) << 4 | (u = n.indexOf(l.charAt(o++))) >> 2, _ = (3 & u) << 6 | (w = n.indexOf(l.charAt(o++))), v[p++] = y, u !== 64 && (v[p++] = k), w !== 64 && (v[p++] = _);
        return v;
      };
    }, { "./support": 30, "./utils": 32 }], 2: [function(i, g, c) {
      var e = i("./external"), a = i("./stream/DataWorker"), n = i("./stream/Crc32Probe"), l = i("./stream/DataLengthProbe");
      function y(k, _, b, u, w) {
        this.compressedSize = k, this.uncompressedSize = _, this.crc32 = b, this.compression = u, this.compressedContent = w;
      }
      y.prototype = { getContentWorker: function() {
        var k = new a(e.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")), _ = this;
        return k.on("end", function() {
          if (this.streamInfo.data_length !== _.uncompressedSize) throw new Error("Bug : uncompressed data size mismatch");
        }), k;
      }, getCompressedWorker: function() {
        return new a(e.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
      } }, y.createWorkerFrom = function(k, _, b) {
        return k.pipe(new n()).pipe(new l("uncompressedSize")).pipe(_.compressWorker(b)).pipe(new l("compressedSize")).withStreamInfo("compression", _);
      }, g.exports = y;
    }, { "./external": 6, "./stream/Crc32Probe": 25, "./stream/DataLengthProbe": 26, "./stream/DataWorker": 27 }], 3: [function(i, g, c) {
      var e = i("./stream/GenericWorker");
      c.STORE = { magic: "\0\0", compressWorker: function() {
        return new e("STORE compression");
      }, uncompressWorker: function() {
        return new e("STORE decompression");
      } }, c.DEFLATE = i("./flate");
    }, { "./flate": 7, "./stream/GenericWorker": 28 }], 4: [function(i, g, c) {
      var e = i("./utils"), a = function() {
        for (var n, l = [], y = 0; y < 256; y++) {
          n = y;
          for (var k = 0; k < 8; k++) n = 1 & n ? 3988292384 ^ n >>> 1 : n >>> 1;
          l[y] = n;
        }
        return l;
      }();
      g.exports = function(n, l) {
        return n !== void 0 && n.length ? e.getTypeOf(n) !== "string" ? function(y, k, _, b) {
          var u = a, w = b + _;
          y ^= -1;
          for (var o = b; o < w; o++) y = y >>> 8 ^ u[255 & (y ^ k[o])];
          return -1 ^ y;
        }(0 | l, n, n.length, 0) : function(y, k, _, b) {
          var u = a, w = b + _;
          y ^= -1;
          for (var o = b; o < w; o++) y = y >>> 8 ^ u[255 & (y ^ k.charCodeAt(o))];
          return -1 ^ y;
        }(0 | l, n, n.length, 0) : 0;
      };
    }, { "./utils": 32 }], 5: [function(i, g, c) {
      c.base64 = !1, c.binary = !1, c.dir = !1, c.createFolders = !0, c.date = null, c.compression = null, c.compressionOptions = null, c.comment = null, c.unixPermissions = null, c.dosPermissions = null;
    }, {}], 6: [function(i, g, c) {
      var e = null;
      e = typeof Promise < "u" ? Promise : i("lie"), g.exports = { Promise: e };
    }, { lie: 37 }], 7: [function(i, g, c) {
      var e = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Uint32Array < "u", a = i("pako"), n = i("./utils"), l = i("./stream/GenericWorker"), y = e ? "uint8array" : "array";
      function k(_, b) {
        l.call(this, "FlateWorker/" + _), this._pako = null, this._pakoAction = _, this._pakoOptions = b, this.meta = {};
      }
      c.magic = "\b\0", n.inherits(k, l), k.prototype.processChunk = function(_) {
        this.meta = _.meta, this._pako === null && this._createPako(), this._pako.push(n.transformTo(y, _.data), !1);
      }, k.prototype.flush = function() {
        l.prototype.flush.call(this), this._pako === null && this._createPako(), this._pako.push([], !0);
      }, k.prototype.cleanUp = function() {
        l.prototype.cleanUp.call(this), this._pako = null;
      }, k.prototype._createPako = function() {
        this._pako = new a[this._pakoAction]({ raw: !0, level: this._pakoOptions.level || -1 });
        var _ = this;
        this._pako.onData = function(b) {
          _.push({ data: b, meta: _.meta });
        };
      }, c.compressWorker = function(_) {
        return new k("Deflate", _);
      }, c.uncompressWorker = function() {
        return new k("Inflate", {});
      };
    }, { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 }], 8: [function(i, g, c) {
      function e(u, w) {
        var o, p = "";
        for (o = 0; o < w; o++) p += String.fromCharCode(255 & u), u >>>= 8;
        return p;
      }
      function a(u, w, o, p, f, v) {
        var E, T, C = u.file, F = u.compression, j = v !== y.utf8encode, M = n.transformTo("string", v(C.name)), z = n.transformTo("string", y.utf8encode(C.name)), $ = C.comment, it = n.transformTo("string", v($)), S = n.transformTo("string", y.utf8encode($)), D = z.length !== C.name.length, r = S.length !== $.length, N = "", at = "", L = "", ut = C.dir, V = C.date, nt = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
        w && !o || (nt.crc32 = u.crc32, nt.compressedSize = u.compressedSize, nt.uncompressedSize = u.uncompressedSize);
        var I = 0;
        w && (I |= 8), j || !D && !r || (I |= 2048);
        var A = 0, et = 0;
        ut && (A |= 16), f === "UNIX" ? (et = 798, A |= function(G, wt) {
          var tt = G;
          return G || (tt = wt ? 16893 : 33204), (65535 & tt) << 16;
        }(C.unixPermissions, ut)) : (et = 20, A |= function(G) {
          return 63 & (G || 0);
        }(C.dosPermissions)), E = V.getUTCHours(), E <<= 6, E |= V.getUTCMinutes(), E <<= 5, E |= V.getUTCSeconds() / 2, T = V.getUTCFullYear() - 1980, T <<= 4, T |= V.getUTCMonth() + 1, T <<= 5, T |= V.getUTCDate(), D && (at = e(1, 1) + e(k(M), 4) + z, N += "up" + e(at.length, 2) + at), r && (L = e(1, 1) + e(k(it), 4) + S, N += "uc" + e(L.length, 2) + L);
        var q = "";
        return q += `
\0`, q += e(I, 2), q += F.magic, q += e(E, 2), q += e(T, 2), q += e(nt.crc32, 4), q += e(nt.compressedSize, 4), q += e(nt.uncompressedSize, 4), q += e(M.length, 2), q += e(N.length, 2), { fileRecord: _.LOCAL_FILE_HEADER + q + M + N, dirRecord: _.CENTRAL_FILE_HEADER + e(et, 2) + q + e(it.length, 2) + "\0\0\0\0" + e(A, 4) + e(p, 4) + M + N + it };
      }
      var n = i("../utils"), l = i("../stream/GenericWorker"), y = i("../utf8"), k = i("../crc32"), _ = i("../signature");
      function b(u, w, o, p) {
        l.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = w, this.zipPlatform = o, this.encodeFileName = p, this.streamFiles = u, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
      }
      n.inherits(b, l), b.prototype.push = function(u) {
        var w = u.meta.percent || 0, o = this.entriesCount, p = this._sources.length;
        this.accumulate ? this.contentBuffer.push(u) : (this.bytesWritten += u.data.length, l.prototype.push.call(this, { data: u.data, meta: { currentFile: this.currentFile, percent: o ? (w + 100 * (o - p - 1)) / o : 100 } }));
      }, b.prototype.openedSource = function(u) {
        this.currentSourceOffset = this.bytesWritten, this.currentFile = u.file.name;
        var w = this.streamFiles && !u.file.dir;
        if (w) {
          var o = a(u, w, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
          this.push({ data: o.fileRecord, meta: { percent: 0 } });
        } else this.accumulate = !0;
      }, b.prototype.closedSource = function(u) {
        this.accumulate = !1;
        var w = this.streamFiles && !u.file.dir, o = a(u, w, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
        if (this.dirRecords.push(o.dirRecord), w) this.push({ data: function(p) {
          return _.DATA_DESCRIPTOR + e(p.crc32, 4) + e(p.compressedSize, 4) + e(p.uncompressedSize, 4);
        }(u), meta: { percent: 100 } });
        else for (this.push({ data: o.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length; ) this.push(this.contentBuffer.shift());
        this.currentFile = null;
      }, b.prototype.flush = function() {
        for (var u = this.bytesWritten, w = 0; w < this.dirRecords.length; w++) this.push({ data: this.dirRecords[w], meta: { percent: 100 } });
        var o = this.bytesWritten - u, p = function(f, v, E, T, C) {
          var F = n.transformTo("string", C(T));
          return _.CENTRAL_DIRECTORY_END + "\0\0\0\0" + e(f, 2) + e(f, 2) + e(v, 4) + e(E, 4) + e(F.length, 2) + F;
        }(this.dirRecords.length, o, u, this.zipComment, this.encodeFileName);
        this.push({ data: p, meta: { percent: 100 } });
      }, b.prototype.prepareNextSource = function() {
        this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
      }, b.prototype.registerPrevious = function(u) {
        this._sources.push(u);
        var w = this;
        return u.on("data", function(o) {
          w.processChunk(o);
        }), u.on("end", function() {
          w.closedSource(w.previous.streamInfo), w._sources.length ? w.prepareNextSource() : w.end();
        }), u.on("error", function(o) {
          w.error(o);
        }), this;
      }, b.prototype.resume = function() {
        return !!l.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0));
      }, b.prototype.error = function(u) {
        var w = this._sources;
        if (!l.prototype.error.call(this, u)) return !1;
        for (var o = 0; o < w.length; o++) try {
          w[o].error(u);
        } catch {
        }
        return !0;
      }, b.prototype.lock = function() {
        l.prototype.lock.call(this);
        for (var u = this._sources, w = 0; w < u.length; w++) u[w].lock();
      }, g.exports = b;
    }, { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 }], 9: [function(i, g, c) {
      var e = i("../compressions"), a = i("./ZipFileWorker");
      c.generateWorker = function(n, l, y) {
        var k = new a(l.streamFiles, y, l.platform, l.encodeFileName), _ = 0;
        try {
          n.forEach(function(b, u) {
            _++;
            var w = function(v, E) {
              var T = v || E, C = e[T];
              if (!C) throw new Error(T + " is not a valid compression method !");
              return C;
            }(u.options.compression, l.compression), o = u.options.compressionOptions || l.compressionOptions || {}, p = u.dir, f = u.date;
            u._compressWorker(w, o).withStreamInfo("file", { name: b, dir: p, date: f, comment: u.comment || "", unixPermissions: u.unixPermissions, dosPermissions: u.dosPermissions }).pipe(k);
          }), k.entriesCount = _;
        } catch (b) {
          k.error(b);
        }
        return k;
      };
    }, { "../compressions": 3, "./ZipFileWorker": 8 }], 10: [function(i, g, c) {
      function e() {
        if (!(this instanceof e)) return new e();
        if (arguments.length) throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
        this.files = /* @__PURE__ */ Object.create(null), this.comment = null, this.root = "", this.clone = function() {
          var a = new e();
          for (var n in this) typeof this[n] != "function" && (a[n] = this[n]);
          return a;
        };
      }
      (e.prototype = i("./object")).loadAsync = i("./load"), e.support = i("./support"), e.defaults = i("./defaults"), e.version = "3.10.1", e.loadAsync = function(a, n) {
        return new e().loadAsync(a, n);
      }, e.external = i("./external"), g.exports = e;
    }, { "./defaults": 5, "./external": 6, "./load": 11, "./object": 15, "./support": 30 }], 11: [function(i, g, c) {
      var e = i("./utils"), a = i("./external"), n = i("./utf8"), l = i("./zipEntries"), y = i("./stream/Crc32Probe"), k = i("./nodejsUtils");
      function _(b) {
        return new a.Promise(function(u, w) {
          var o = b.decompressed.getContentWorker().pipe(new y());
          o.on("error", function(p) {
            w(p);
          }).on("end", function() {
            o.streamInfo.crc32 !== b.decompressed.crc32 ? w(new Error("Corrupted zip : CRC32 mismatch")) : u();
          }).resume();
        });
      }
      g.exports = function(b, u) {
        var w = this;
        return u = e.extend(u || {}, { base64: !1, checkCRC32: !1, optimizedBinaryString: !1, createFolders: !1, decodeFileName: n.utf8decode }), k.isNode && k.isStream(b) ? a.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : e.prepareContent("the loaded zip file", b, !0, u.optimizedBinaryString, u.base64).then(function(o) {
          var p = new l(u);
          return p.load(o), p;
        }).then(function(o) {
          var p = [a.Promise.resolve(o)], f = o.files;
          if (u.checkCRC32) for (var v = 0; v < f.length; v++) p.push(_(f[v]));
          return a.Promise.all(p);
        }).then(function(o) {
          for (var p = o.shift(), f = p.files, v = 0; v < f.length; v++) {
            var E = f[v], T = E.fileNameStr, C = e.resolve(E.fileNameStr);
            w.file(C, E.decompressed, { binary: !0, optimizedBinaryString: !0, date: E.date, dir: E.dir, comment: E.fileCommentStr.length ? E.fileCommentStr : null, unixPermissions: E.unixPermissions, dosPermissions: E.dosPermissions, createFolders: u.createFolders }), E.dir || (w.file(C).unsafeOriginalName = T);
          }
          return p.zipComment.length && (w.comment = p.zipComment), w;
        });
      };
    }, { "./external": 6, "./nodejsUtils": 14, "./stream/Crc32Probe": 25, "./utf8": 31, "./utils": 32, "./zipEntries": 33 }], 12: [function(i, g, c) {
      var e = i("../utils"), a = i("../stream/GenericWorker");
      function n(l, y) {
        a.call(this, "Nodejs stream input adapter for " + l), this._upstreamEnded = !1, this._bindStream(y);
      }
      e.inherits(n, a), n.prototype._bindStream = function(l) {
        var y = this;
        (this._stream = l).pause(), l.on("data", function(k) {
          y.push({ data: k, meta: { percent: 0 } });
        }).on("error", function(k) {
          y.isPaused ? this.generatedError = k : y.error(k);
        }).on("end", function() {
          y.isPaused ? y._upstreamEnded = !0 : y.end();
        });
      }, n.prototype.pause = function() {
        return !!a.prototype.pause.call(this) && (this._stream.pause(), !0);
      }, n.prototype.resume = function() {
        return !!a.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), !0);
      }, g.exports = n;
    }, { "../stream/GenericWorker": 28, "../utils": 32 }], 13: [function(i, g, c) {
      var e = i("readable-stream").Readable;
      function a(n, l, y) {
        e.call(this, l), this._helper = n;
        var k = this;
        n.on("data", function(_, b) {
          k.push(_) || k._helper.pause(), y && y(b);
        }).on("error", function(_) {
          k.emit("error", _);
        }).on("end", function() {
          k.push(null);
        });
      }
      i("../utils").inherits(a, e), a.prototype._read = function() {
        this._helper.resume();
      }, g.exports = a;
    }, { "../utils": 32, "readable-stream": 16 }], 14: [function(i, g, c) {
      g.exports = { isNode: typeof Buffer < "u", newBufferFrom: function(e, a) {
        if (Buffer.from && Buffer.from !== Uint8Array.from) return Buffer.from(e, a);
        if (typeof e == "number") throw new Error('The "data" argument must not be a number');
        return new Buffer(e, a);
      }, allocBuffer: function(e) {
        if (Buffer.alloc) return Buffer.alloc(e);
        var a = new Buffer(e);
        return a.fill(0), a;
      }, isBuffer: function(e) {
        return Buffer.isBuffer(e);
      }, isStream: function(e) {
        return e && typeof e.on == "function" && typeof e.pause == "function" && typeof e.resume == "function";
      } };
    }, {}], 15: [function(i, g, c) {
      function e(C, F, j) {
        var M, z = n.getTypeOf(F), $ = n.extend(j || {}, k);
        $.date = $.date || /* @__PURE__ */ new Date(), $.compression !== null && ($.compression = $.compression.toUpperCase()), typeof $.unixPermissions == "string" && ($.unixPermissions = parseInt($.unixPermissions, 8)), $.unixPermissions && 16384 & $.unixPermissions && ($.dir = !0), $.dosPermissions && 16 & $.dosPermissions && ($.dir = !0), $.dir && (C = f(C)), $.createFolders && (M = p(C)) && v.call(this, M, !0);
        var it = z === "string" && $.binary === !1 && $.base64 === !1;
        j && j.binary !== void 0 || ($.binary = !it), (F instanceof _ && F.uncompressedSize === 0 || $.dir || !F || F.length === 0) && ($.base64 = !1, $.binary = !0, F = "", $.compression = "STORE", z = "string");
        var S = null;
        S = F instanceof _ || F instanceof l ? F : w.isNode && w.isStream(F) ? new o(C, F) : n.prepareContent(C, F, $.binary, $.optimizedBinaryString, $.base64);
        var D = new b(C, S, $);
        this.files[C] = D;
      }
      var a = i("./utf8"), n = i("./utils"), l = i("./stream/GenericWorker"), y = i("./stream/StreamHelper"), k = i("./defaults"), _ = i("./compressedObject"), b = i("./zipObject"), u = i("./generate"), w = i("./nodejsUtils"), o = i("./nodejs/NodejsStreamInputAdapter"), p = function(C) {
        C.slice(-1) === "/" && (C = C.substring(0, C.length - 1));
        var F = C.lastIndexOf("/");
        return 0 < F ? C.substring(0, F) : "";
      }, f = function(C) {
        return C.slice(-1) !== "/" && (C += "/"), C;
      }, v = function(C, F) {
        return F = F !== void 0 ? F : k.createFolders, C = f(C), this.files[C] || e.call(this, C, null, { dir: !0, createFolders: F }), this.files[C];
      };
      function E(C) {
        return Object.prototype.toString.call(C) === "[object RegExp]";
      }
      var T = { load: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, forEach: function(C) {
        var F, j, M;
        for (F in this.files) M = this.files[F], (j = F.slice(this.root.length, F.length)) && F.slice(0, this.root.length) === this.root && C(j, M);
      }, filter: function(C) {
        var F = [];
        return this.forEach(function(j, M) {
          C(j, M) && F.push(M);
        }), F;
      }, file: function(C, F, j) {
        if (arguments.length !== 1) return C = this.root + C, e.call(this, C, F, j), this;
        if (E(C)) {
          var M = C;
          return this.filter(function($, it) {
            return !it.dir && M.test($);
          });
        }
        var z = this.files[this.root + C];
        return z && !z.dir ? z : null;
      }, folder: function(C) {
        if (!C) return this;
        if (E(C)) return this.filter(function(z, $) {
          return $.dir && C.test(z);
        });
        var F = this.root + C, j = v.call(this, F), M = this.clone();
        return M.root = j.name, M;
      }, remove: function(C) {
        C = this.root + C;
        var F = this.files[C];
        if (F || (C.slice(-1) !== "/" && (C += "/"), F = this.files[C]), F && !F.dir) delete this.files[C];
        else for (var j = this.filter(function(z, $) {
          return $.name.slice(0, C.length) === C;
        }), M = 0; M < j.length; M++) delete this.files[j[M].name];
        return this;
      }, generate: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, generateInternalStream: function(C) {
        var F, j = {};
        try {
          if ((j = n.extend(C || {}, { streamFiles: !1, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: a.utf8encode })).type = j.type.toLowerCase(), j.compression = j.compression.toUpperCase(), j.type === "binarystring" && (j.type = "string"), !j.type) throw new Error("No output type specified.");
          n.checkSupport(j.type), j.platform !== "darwin" && j.platform !== "freebsd" && j.platform !== "linux" && j.platform !== "sunos" || (j.platform = "UNIX"), j.platform === "win32" && (j.platform = "DOS");
          var M = j.comment || this.comment || "";
          F = u.generateWorker(this, j, M);
        } catch (z) {
          (F = new l("error")).error(z);
        }
        return new y(F, j.type || "string", j.mimeType);
      }, generateAsync: function(C, F) {
        return this.generateInternalStream(C).accumulate(F);
      }, generateNodeStream: function(C, F) {
        return (C = C || {}).type || (C.type = "nodebuffer"), this.generateInternalStream(C).toNodejsStream(F);
      } };
      g.exports = T;
    }, { "./compressedObject": 2, "./defaults": 5, "./generate": 9, "./nodejs/NodejsStreamInputAdapter": 12, "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31, "./utils": 32, "./zipObject": 35 }], 16: [function(i, g, c) {
      g.exports = i("stream");
    }, { stream: void 0 }], 17: [function(i, g, c) {
      var e = i("./DataReader");
      function a(n) {
        e.call(this, n);
        for (var l = 0; l < this.data.length; l++) n[l] = 255 & n[l];
      }
      i("../utils").inherits(a, e), a.prototype.byteAt = function(n) {
        return this.data[this.zero + n];
      }, a.prototype.lastIndexOfSignature = function(n) {
        for (var l = n.charCodeAt(0), y = n.charCodeAt(1), k = n.charCodeAt(2), _ = n.charCodeAt(3), b = this.length - 4; 0 <= b; --b) if (this.data[b] === l && this.data[b + 1] === y && this.data[b + 2] === k && this.data[b + 3] === _) return b - this.zero;
        return -1;
      }, a.prototype.readAndCheckSignature = function(n) {
        var l = n.charCodeAt(0), y = n.charCodeAt(1), k = n.charCodeAt(2), _ = n.charCodeAt(3), b = this.readData(4);
        return l === b[0] && y === b[1] && k === b[2] && _ === b[3];
      }, a.prototype.readData = function(n) {
        if (this.checkOffset(n), n === 0) return [];
        var l = this.data.slice(this.zero + this.index, this.zero + this.index + n);
        return this.index += n, l;
      }, g.exports = a;
    }, { "../utils": 32, "./DataReader": 18 }], 18: [function(i, g, c) {
      var e = i("../utils");
      function a(n) {
        this.data = n, this.length = n.length, this.index = 0, this.zero = 0;
      }
      a.prototype = { checkOffset: function(n) {
        this.checkIndex(this.index + n);
      }, checkIndex: function(n) {
        if (this.length < this.zero + n || n < 0) throw new Error("End of data reached (data length = " + this.length + ", asked index = " + n + "). Corrupted zip ?");
      }, setIndex: function(n) {
        this.checkIndex(n), this.index = n;
      }, skip: function(n) {
        this.setIndex(this.index + n);
      }, byteAt: function() {
      }, readInt: function(n) {
        var l, y = 0;
        for (this.checkOffset(n), l = this.index + n - 1; l >= this.index; l--) y = (y << 8) + this.byteAt(l);
        return this.index += n, y;
      }, readString: function(n) {
        return e.transformTo("string", this.readData(n));
      }, readData: function() {
      }, lastIndexOfSignature: function() {
      }, readAndCheckSignature: function() {
      }, readDate: function() {
        var n = this.readInt(4);
        return new Date(Date.UTC(1980 + (n >> 25 & 127), (n >> 21 & 15) - 1, n >> 16 & 31, n >> 11 & 31, n >> 5 & 63, (31 & n) << 1));
      } }, g.exports = a;
    }, { "../utils": 32 }], 19: [function(i, g, c) {
      var e = i("./Uint8ArrayReader");
      function a(n) {
        e.call(this, n);
      }
      i("../utils").inherits(a, e), a.prototype.readData = function(n) {
        this.checkOffset(n);
        var l = this.data.slice(this.zero + this.index, this.zero + this.index + n);
        return this.index += n, l;
      }, g.exports = a;
    }, { "../utils": 32, "./Uint8ArrayReader": 21 }], 20: [function(i, g, c) {
      var e = i("./DataReader");
      function a(n) {
        e.call(this, n);
      }
      i("../utils").inherits(a, e), a.prototype.byteAt = function(n) {
        return this.data.charCodeAt(this.zero + n);
      }, a.prototype.lastIndexOfSignature = function(n) {
        return this.data.lastIndexOf(n) - this.zero;
      }, a.prototype.readAndCheckSignature = function(n) {
        return n === this.readData(4);
      }, a.prototype.readData = function(n) {
        this.checkOffset(n);
        var l = this.data.slice(this.zero + this.index, this.zero + this.index + n);
        return this.index += n, l;
      }, g.exports = a;
    }, { "../utils": 32, "./DataReader": 18 }], 21: [function(i, g, c) {
      var e = i("./ArrayReader");
      function a(n) {
        e.call(this, n);
      }
      i("../utils").inherits(a, e), a.prototype.readData = function(n) {
        if (this.checkOffset(n), n === 0) return new Uint8Array(0);
        var l = this.data.subarray(this.zero + this.index, this.zero + this.index + n);
        return this.index += n, l;
      }, g.exports = a;
    }, { "../utils": 32, "./ArrayReader": 17 }], 22: [function(i, g, c) {
      var e = i("../utils"), a = i("../support"), n = i("./ArrayReader"), l = i("./StringReader"), y = i("./NodeBufferReader"), k = i("./Uint8ArrayReader");
      g.exports = function(_) {
        var b = e.getTypeOf(_);
        return e.checkSupport(b), b !== "string" || a.uint8array ? b === "nodebuffer" ? new y(_) : a.uint8array ? new k(e.transformTo("uint8array", _)) : new n(e.transformTo("array", _)) : new l(_);
      };
    }, { "../support": 30, "../utils": 32, "./ArrayReader": 17, "./NodeBufferReader": 19, "./StringReader": 20, "./Uint8ArrayReader": 21 }], 23: [function(i, g, c) {
      c.LOCAL_FILE_HEADER = "PK", c.CENTRAL_FILE_HEADER = "PK", c.CENTRAL_DIRECTORY_END = "PK", c.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", c.ZIP64_CENTRAL_DIRECTORY_END = "PK", c.DATA_DESCRIPTOR = "PK\x07\b";
    }, {}], 24: [function(i, g, c) {
      var e = i("./GenericWorker"), a = i("../utils");
      function n(l) {
        e.call(this, "ConvertWorker to " + l), this.destType = l;
      }
      a.inherits(n, e), n.prototype.processChunk = function(l) {
        this.push({ data: a.transformTo(this.destType, l.data), meta: l.meta });
      }, g.exports = n;
    }, { "../utils": 32, "./GenericWorker": 28 }], 25: [function(i, g, c) {
      var e = i("./GenericWorker"), a = i("../crc32");
      function n() {
        e.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
      }
      i("../utils").inherits(n, e), n.prototype.processChunk = function(l) {
        this.streamInfo.crc32 = a(l.data, this.streamInfo.crc32 || 0), this.push(l);
      }, g.exports = n;
    }, { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 }], 26: [function(i, g, c) {
      var e = i("../utils"), a = i("./GenericWorker");
      function n(l) {
        a.call(this, "DataLengthProbe for " + l), this.propName = l, this.withStreamInfo(l, 0);
      }
      e.inherits(n, a), n.prototype.processChunk = function(l) {
        if (l) {
          var y = this.streamInfo[this.propName] || 0;
          this.streamInfo[this.propName] = y + l.data.length;
        }
        a.prototype.processChunk.call(this, l);
      }, g.exports = n;
    }, { "../utils": 32, "./GenericWorker": 28 }], 27: [function(i, g, c) {
      var e = i("../utils"), a = i("./GenericWorker");
      function n(l) {
        a.call(this, "DataWorker");
        var y = this;
        this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, l.then(function(k) {
          y.dataIsReady = !0, y.data = k, y.max = k && k.length || 0, y.type = e.getTypeOf(k), y.isPaused || y._tickAndRepeat();
        }, function(k) {
          y.error(k);
        });
      }
      e.inherits(n, a), n.prototype.cleanUp = function() {
        a.prototype.cleanUp.call(this), this.data = null;
      }, n.prototype.resume = function() {
        return !!a.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = !0, e.delay(this._tickAndRepeat, [], this)), !0);
      }, n.prototype._tickAndRepeat = function() {
        this._tickScheduled = !1, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (e.delay(this._tickAndRepeat, [], this), this._tickScheduled = !0));
      }, n.prototype._tick = function() {
        if (this.isPaused || this.isFinished) return !1;
        var l = null, y = Math.min(this.max, this.index + 16384);
        if (this.index >= this.max) return this.end();
        switch (this.type) {
          case "string":
            l = this.data.substring(this.index, y);
            break;
          case "uint8array":
            l = this.data.subarray(this.index, y);
            break;
          case "array":
          case "nodebuffer":
            l = this.data.slice(this.index, y);
        }
        return this.index = y, this.push({ data: l, meta: { percent: this.max ? this.index / this.max * 100 : 0 } });
      }, g.exports = n;
    }, { "../utils": 32, "./GenericWorker": 28 }], 28: [function(i, g, c) {
      function e(a) {
        this.name = a || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = !0, this.isFinished = !1, this.isLocked = !1, this._listeners = { data: [], end: [], error: [] }, this.previous = null;
      }
      e.prototype = { push: function(a) {
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
      }, on: function(a, n) {
        return this._listeners[a].push(n), this;
      }, cleanUp: function() {
        this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
      }, emit: function(a, n) {
        if (this._listeners[a]) for (var l = 0; l < this._listeners[a].length; l++) this._listeners[a][l].call(this, n);
      }, pipe: function(a) {
        return a.registerPrevious(this);
      }, registerPrevious: function(a) {
        if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
        this.streamInfo = a.streamInfo, this.mergeStreamInfo(), this.previous = a;
        var n = this;
        return a.on("data", function(l) {
          n.processChunk(l);
        }), a.on("end", function() {
          n.end();
        }), a.on("error", function(l) {
          n.error(l);
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
      }, withStreamInfo: function(a, n) {
        return this.extraStreamInfo[a] = n, this.mergeStreamInfo(), this;
      }, mergeStreamInfo: function() {
        for (var a in this.extraStreamInfo) Object.prototype.hasOwnProperty.call(this.extraStreamInfo, a) && (this.streamInfo[a] = this.extraStreamInfo[a]);
      }, lock: function() {
        if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
        this.isLocked = !0, this.previous && this.previous.lock();
      }, toString: function() {
        var a = "Worker " + this.name;
        return this.previous ? this.previous + " -> " + a : a;
      } }, g.exports = e;
    }, {}], 29: [function(i, g, c) {
      var e = i("../utils"), a = i("./ConvertWorker"), n = i("./GenericWorker"), l = i("../base64"), y = i("../support"), k = i("../external"), _ = null;
      if (y.nodestream) try {
        _ = i("../nodejs/NodejsStreamOutputAdapter");
      } catch {
      }
      function b(w, o) {
        return new k.Promise(function(p, f) {
          var v = [], E = w._internalType, T = w._outputType, C = w._mimeType;
          w.on("data", function(F, j) {
            v.push(F), o && o(j);
          }).on("error", function(F) {
            v = [], f(F);
          }).on("end", function() {
            try {
              var F = function(j, M, z) {
                switch (j) {
                  case "blob":
                    return e.newBlob(e.transformTo("arraybuffer", M), z);
                  case "base64":
                    return l.encode(M);
                  default:
                    return e.transformTo(j, M);
                }
              }(T, function(j, M) {
                var z, $ = 0, it = null, S = 0;
                for (z = 0; z < M.length; z++) S += M[z].length;
                switch (j) {
                  case "string":
                    return M.join("");
                  case "array":
                    return Array.prototype.concat.apply([], M);
                  case "uint8array":
                    for (it = new Uint8Array(S), z = 0; z < M.length; z++) it.set(M[z], $), $ += M[z].length;
                    return it;
                  case "nodebuffer":
                    return Buffer.concat(M);
                  default:
                    throw new Error("concat : unsupported type '" + j + "'");
                }
              }(E, v), C);
              p(F);
            } catch (j) {
              f(j);
            }
            v = [];
          }).resume();
        });
      }
      function u(w, o, p) {
        var f = o;
        switch (o) {
          case "blob":
          case "arraybuffer":
            f = "uint8array";
            break;
          case "base64":
            f = "string";
        }
        try {
          this._internalType = f, this._outputType = o, this._mimeType = p, e.checkSupport(f), this._worker = w.pipe(new a(f)), w.lock();
        } catch (v) {
          this._worker = new n("error"), this._worker.error(v);
        }
      }
      u.prototype = { accumulate: function(w) {
        return b(this, w);
      }, on: function(w, o) {
        var p = this;
        return w === "data" ? this._worker.on(w, function(f) {
          o.call(p, f.data, f.meta);
        }) : this._worker.on(w, function() {
          e.delay(o, arguments, p);
        }), this;
      }, resume: function() {
        return e.delay(this._worker.resume, [], this._worker), this;
      }, pause: function() {
        return this._worker.pause(), this;
      }, toNodejsStream: function(w) {
        if (e.checkSupport("nodestream"), this._outputType !== "nodebuffer") throw new Error(this._outputType + " is not supported by this method");
        return new _(this, { objectMode: this._outputType !== "nodebuffer" }, w);
      } }, g.exports = u;
    }, { "../base64": 1, "../external": 6, "../nodejs/NodejsStreamOutputAdapter": 13, "../support": 30, "../utils": 32, "./ConvertWorker": 24, "./GenericWorker": 28 }], 30: [function(i, g, c) {
      if (c.base64 = !0, c.array = !0, c.string = !0, c.arraybuffer = typeof ArrayBuffer < "u" && typeof Uint8Array < "u", c.nodebuffer = typeof Buffer < "u", c.uint8array = typeof Uint8Array < "u", typeof ArrayBuffer > "u") c.blob = !1;
      else {
        var e = new ArrayBuffer(0);
        try {
          c.blob = new Blob([e], { type: "application/zip" }).size === 0;
        } catch {
          try {
            var a = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            a.append(e), c.blob = a.getBlob("application/zip").size === 0;
          } catch {
            c.blob = !1;
          }
        }
      }
      try {
        c.nodestream = !!i("readable-stream").Readable;
      } catch {
        c.nodestream = !1;
      }
    }, { "readable-stream": 16 }], 31: [function(i, g, c) {
      for (var e = i("./utils"), a = i("./support"), n = i("./nodejsUtils"), l = i("./stream/GenericWorker"), y = new Array(256), k = 0; k < 256; k++) y[k] = 252 <= k ? 6 : 248 <= k ? 5 : 240 <= k ? 4 : 224 <= k ? 3 : 192 <= k ? 2 : 1;
      y[254] = y[254] = 1;
      function _() {
        l.call(this, "utf-8 decode"), this.leftOver = null;
      }
      function b() {
        l.call(this, "utf-8 encode");
      }
      c.utf8encode = function(u) {
        return a.nodebuffer ? n.newBufferFrom(u, "utf-8") : function(w) {
          var o, p, f, v, E, T = w.length, C = 0;
          for (v = 0; v < T; v++) (64512 & (p = w.charCodeAt(v))) == 55296 && v + 1 < T && (64512 & (f = w.charCodeAt(v + 1))) == 56320 && (p = 65536 + (p - 55296 << 10) + (f - 56320), v++), C += p < 128 ? 1 : p < 2048 ? 2 : p < 65536 ? 3 : 4;
          for (o = a.uint8array ? new Uint8Array(C) : new Array(C), v = E = 0; E < C; v++) (64512 & (p = w.charCodeAt(v))) == 55296 && v + 1 < T && (64512 & (f = w.charCodeAt(v + 1))) == 56320 && (p = 65536 + (p - 55296 << 10) + (f - 56320), v++), p < 128 ? o[E++] = p : (p < 2048 ? o[E++] = 192 | p >>> 6 : (p < 65536 ? o[E++] = 224 | p >>> 12 : (o[E++] = 240 | p >>> 18, o[E++] = 128 | p >>> 12 & 63), o[E++] = 128 | p >>> 6 & 63), o[E++] = 128 | 63 & p);
          return o;
        }(u);
      }, c.utf8decode = function(u) {
        return a.nodebuffer ? e.transformTo("nodebuffer", u).toString("utf-8") : function(w) {
          var o, p, f, v, E = w.length, T = new Array(2 * E);
          for (o = p = 0; o < E; ) if ((f = w[o++]) < 128) T[p++] = f;
          else if (4 < (v = y[f])) T[p++] = 65533, o += v - 1;
          else {
            for (f &= v === 2 ? 31 : v === 3 ? 15 : 7; 1 < v && o < E; ) f = f << 6 | 63 & w[o++], v--;
            1 < v ? T[p++] = 65533 : f < 65536 ? T[p++] = f : (f -= 65536, T[p++] = 55296 | f >> 10 & 1023, T[p++] = 56320 | 1023 & f);
          }
          return T.length !== p && (T.subarray ? T = T.subarray(0, p) : T.length = p), e.applyFromCharCode(T);
        }(u = e.transformTo(a.uint8array ? "uint8array" : "array", u));
      }, e.inherits(_, l), _.prototype.processChunk = function(u) {
        var w = e.transformTo(a.uint8array ? "uint8array" : "array", u.data);
        if (this.leftOver && this.leftOver.length) {
          if (a.uint8array) {
            var o = w;
            (w = new Uint8Array(o.length + this.leftOver.length)).set(this.leftOver, 0), w.set(o, this.leftOver.length);
          } else w = this.leftOver.concat(w);
          this.leftOver = null;
        }
        var p = function(v, E) {
          var T;
          for ((E = E || v.length) > v.length && (E = v.length), T = E - 1; 0 <= T && (192 & v[T]) == 128; ) T--;
          return T < 0 || T === 0 ? E : T + y[v[T]] > E ? T : E;
        }(w), f = w;
        p !== w.length && (a.uint8array ? (f = w.subarray(0, p), this.leftOver = w.subarray(p, w.length)) : (f = w.slice(0, p), this.leftOver = w.slice(p, w.length))), this.push({ data: c.utf8decode(f), meta: u.meta });
      }, _.prototype.flush = function() {
        this.leftOver && this.leftOver.length && (this.push({ data: c.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
      }, c.Utf8DecodeWorker = _, e.inherits(b, l), b.prototype.processChunk = function(u) {
        this.push({ data: c.utf8encode(u.data), meta: u.meta });
      }, c.Utf8EncodeWorker = b;
    }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }], 32: [function(i, g, c) {
      var e = i("./support"), a = i("./base64"), n = i("./nodejsUtils"), l = i("./external");
      function y(o) {
        return o;
      }
      function k(o, p) {
        for (var f = 0; f < o.length; ++f) p[f] = 255 & o.charCodeAt(f);
        return p;
      }
      i("setimmediate"), c.newBlob = function(o, p) {
        c.checkSupport("blob");
        try {
          return new Blob([o], { type: p });
        } catch {
          try {
            var f = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            return f.append(o), f.getBlob(p);
          } catch {
            throw new Error("Bug : can't construct the Blob.");
          }
        }
      };
      var _ = { stringifyByChunk: function(o, p, f) {
        var v = [], E = 0, T = o.length;
        if (T <= f) return String.fromCharCode.apply(null, o);
        for (; E < T; ) p === "array" || p === "nodebuffer" ? v.push(String.fromCharCode.apply(null, o.slice(E, Math.min(E + f, T)))) : v.push(String.fromCharCode.apply(null, o.subarray(E, Math.min(E + f, T)))), E += f;
        return v.join("");
      }, stringifyByChar: function(o) {
        for (var p = "", f = 0; f < o.length; f++) p += String.fromCharCode(o[f]);
        return p;
      }, applyCanBeUsed: { uint8array: function() {
        try {
          return e.uint8array && String.fromCharCode.apply(null, new Uint8Array(1)).length === 1;
        } catch {
          return !1;
        }
      }(), nodebuffer: function() {
        try {
          return e.nodebuffer && String.fromCharCode.apply(null, n.allocBuffer(1)).length === 1;
        } catch {
          return !1;
        }
      }() } };
      function b(o) {
        var p = 65536, f = c.getTypeOf(o), v = !0;
        if (f === "uint8array" ? v = _.applyCanBeUsed.uint8array : f === "nodebuffer" && (v = _.applyCanBeUsed.nodebuffer), v) for (; 1 < p; ) try {
          return _.stringifyByChunk(o, f, p);
        } catch {
          p = Math.floor(p / 2);
        }
        return _.stringifyByChar(o);
      }
      function u(o, p) {
        for (var f = 0; f < o.length; f++) p[f] = o[f];
        return p;
      }
      c.applyFromCharCode = b;
      var w = {};
      w.string = { string: y, array: function(o) {
        return k(o, new Array(o.length));
      }, arraybuffer: function(o) {
        return w.string.uint8array(o).buffer;
      }, uint8array: function(o) {
        return k(o, new Uint8Array(o.length));
      }, nodebuffer: function(o) {
        return k(o, n.allocBuffer(o.length));
      } }, w.array = { string: b, array: y, arraybuffer: function(o) {
        return new Uint8Array(o).buffer;
      }, uint8array: function(o) {
        return new Uint8Array(o);
      }, nodebuffer: function(o) {
        return n.newBufferFrom(o);
      } }, w.arraybuffer = { string: function(o) {
        return b(new Uint8Array(o));
      }, array: function(o) {
        return u(new Uint8Array(o), new Array(o.byteLength));
      }, arraybuffer: y, uint8array: function(o) {
        return new Uint8Array(o);
      }, nodebuffer: function(o) {
        return n.newBufferFrom(new Uint8Array(o));
      } }, w.uint8array = { string: b, array: function(o) {
        return u(o, new Array(o.length));
      }, arraybuffer: function(o) {
        return o.buffer;
      }, uint8array: y, nodebuffer: function(o) {
        return n.newBufferFrom(o);
      } }, w.nodebuffer = { string: b, array: function(o) {
        return u(o, new Array(o.length));
      }, arraybuffer: function(o) {
        return w.nodebuffer.uint8array(o).buffer;
      }, uint8array: function(o) {
        return u(o, new Uint8Array(o.length));
      }, nodebuffer: y }, c.transformTo = function(o, p) {
        if (p = p || "", !o) return p;
        c.checkSupport(o);
        var f = c.getTypeOf(p);
        return w[f][o](p);
      }, c.resolve = function(o) {
        for (var p = o.split("/"), f = [], v = 0; v < p.length; v++) {
          var E = p[v];
          E === "." || E === "" && v !== 0 && v !== p.length - 1 || (E === ".." ? f.pop() : f.push(E));
        }
        return f.join("/");
      }, c.getTypeOf = function(o) {
        return typeof o == "string" ? "string" : Object.prototype.toString.call(o) === "[object Array]" ? "array" : e.nodebuffer && n.isBuffer(o) ? "nodebuffer" : e.uint8array && o instanceof Uint8Array ? "uint8array" : e.arraybuffer && o instanceof ArrayBuffer ? "arraybuffer" : void 0;
      }, c.checkSupport = function(o) {
        if (!e[o.toLowerCase()]) throw new Error(o + " is not supported by this platform");
      }, c.MAX_VALUE_16BITS = 65535, c.MAX_VALUE_32BITS = -1, c.pretty = function(o) {
        var p, f, v = "";
        for (f = 0; f < (o || "").length; f++) v += "\\x" + ((p = o.charCodeAt(f)) < 16 ? "0" : "") + p.toString(16).toUpperCase();
        return v;
      }, c.delay = function(o, p, f) {
        setImmediate(function() {
          o.apply(f || null, p || []);
        });
      }, c.inherits = function(o, p) {
        function f() {
        }
        f.prototype = p.prototype, o.prototype = new f();
      }, c.extend = function() {
        var o, p, f = {};
        for (o = 0; o < arguments.length; o++) for (p in arguments[o]) Object.prototype.hasOwnProperty.call(arguments[o], p) && f[p] === void 0 && (f[p] = arguments[o][p]);
        return f;
      }, c.prepareContent = function(o, p, f, v, E) {
        return l.Promise.resolve(p).then(function(T) {
          return e.blob && (T instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(T)) !== -1) && typeof FileReader < "u" ? new l.Promise(function(C, F) {
            var j = new FileReader();
            j.onload = function(M) {
              C(M.target.result);
            }, j.onerror = function(M) {
              F(M.target.error);
            }, j.readAsArrayBuffer(T);
          }) : T;
        }).then(function(T) {
          var C = c.getTypeOf(T);
          return C ? (C === "arraybuffer" ? T = c.transformTo("uint8array", T) : C === "string" && (E ? T = a.decode(T) : f && v !== !0 && (T = function(F) {
            return k(F, e.uint8array ? new Uint8Array(F.length) : new Array(F.length));
          }(T))), T) : l.Promise.reject(new Error("Can't read the data of '" + o + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
        });
      };
    }, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, setimmediate: 54 }], 33: [function(i, g, c) {
      var e = i("./reader/readerFor"), a = i("./utils"), n = i("./signature"), l = i("./zipEntry"), y = i("./support");
      function k(_) {
        this.files = [], this.loadOptions = _;
      }
      k.prototype = { checkSignature: function(_) {
        if (!this.reader.readAndCheckSignature(_)) {
          this.reader.index -= 4;
          var b = this.reader.readString(4);
          throw new Error("Corrupted zip or bug: unexpected signature (" + a.pretty(b) + ", expected " + a.pretty(_) + ")");
        }
      }, isSignature: function(_, b) {
        var u = this.reader.index;
        this.reader.setIndex(_);
        var w = this.reader.readString(4) === b;
        return this.reader.setIndex(u), w;
      }, readBlockEndOfCentral: function() {
        this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
        var _ = this.reader.readData(this.zipCommentLength), b = y.uint8array ? "uint8array" : "array", u = a.transformTo(b, _);
        this.zipComment = this.loadOptions.decodeFileName(u);
      }, readBlockZip64EndOfCentral: function() {
        this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
        for (var _, b, u, w = this.zip64EndOfCentralSize - 44; 0 < w; ) _ = this.reader.readInt(2), b = this.reader.readInt(4), u = this.reader.readData(b), this.zip64ExtensibleData[_] = { id: _, length: b, value: u };
      }, readBlockZip64EndOfCentralLocator: function() {
        if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount) throw new Error("Multi-volumes zip are not supported");
      }, readLocalFiles: function() {
        var _, b;
        for (_ = 0; _ < this.files.length; _++) b = this.files[_], this.reader.setIndex(b.localHeaderOffset), this.checkSignature(n.LOCAL_FILE_HEADER), b.readLocalPart(this.reader), b.handleUTF8(), b.processAttributes();
      }, readCentralDir: function() {
        var _;
        for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(n.CENTRAL_FILE_HEADER); ) (_ = new l({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(_);
        if (this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0) throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
      }, readEndOfCentral: function() {
        var _ = this.reader.lastIndexOfSignature(n.CENTRAL_DIRECTORY_END);
        if (_ < 0) throw this.isSignature(0, n.LOCAL_FILE_HEADER) ? new Error("Corrupted zip: can't find end of central directory") : new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
        this.reader.setIndex(_);
        var b = _;
        if (this.checkSignature(n.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === a.MAX_VALUE_16BITS || this.diskWithCentralDirStart === a.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === a.MAX_VALUE_16BITS || this.centralDirRecords === a.MAX_VALUE_16BITS || this.centralDirSize === a.MAX_VALUE_32BITS || this.centralDirOffset === a.MAX_VALUE_32BITS) {
          if (this.zip64 = !0, (_ = this.reader.lastIndexOfSignature(n.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
          if (this.reader.setIndex(_), this.checkSignature(n.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, n.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(n.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
          this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(n.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
        }
        var u = this.centralDirOffset + this.centralDirSize;
        this.zip64 && (u += 20, u += 12 + this.zip64EndOfCentralSize);
        var w = b - u;
        if (0 < w) this.isSignature(b, n.CENTRAL_FILE_HEADER) || (this.reader.zero = w);
        else if (w < 0) throw new Error("Corrupted zip: missing " + Math.abs(w) + " bytes.");
      }, prepareReader: function(_) {
        this.reader = e(_);
      }, load: function(_) {
        this.prepareReader(_), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
      } }, g.exports = k;
    }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utils": 32, "./zipEntry": 34 }], 34: [function(i, g, c) {
      var e = i("./reader/readerFor"), a = i("./utils"), n = i("./compressedObject"), l = i("./crc32"), y = i("./utf8"), k = i("./compressions"), _ = i("./support");
      function b(u, w) {
        this.options = u, this.loadOptions = w;
      }
      b.prototype = { isEncrypted: function() {
        return (1 & this.bitFlag) == 1;
      }, useUTF8: function() {
        return (2048 & this.bitFlag) == 2048;
      }, readLocalPart: function(u) {
        var w, o;
        if (u.skip(22), this.fileNameLength = u.readInt(2), o = u.readInt(2), this.fileName = u.readData(this.fileNameLength), u.skip(o), this.compressedSize === -1 || this.uncompressedSize === -1) throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
        if ((w = function(p) {
          for (var f in k) if (Object.prototype.hasOwnProperty.call(k, f) && k[f].magic === p) return k[f];
          return null;
        }(this.compressionMethod)) === null) throw new Error("Corrupted zip : compression " + a.pretty(this.compressionMethod) + " unknown (inner file : " + a.transformTo("string", this.fileName) + ")");
        this.decompressed = new n(this.compressedSize, this.uncompressedSize, this.crc32, w, u.readData(this.compressedSize));
      }, readCentralPart: function(u) {
        this.versionMadeBy = u.readInt(2), u.skip(2), this.bitFlag = u.readInt(2), this.compressionMethod = u.readString(2), this.date = u.readDate(), this.crc32 = u.readInt(4), this.compressedSize = u.readInt(4), this.uncompressedSize = u.readInt(4);
        var w = u.readInt(2);
        if (this.extraFieldsLength = u.readInt(2), this.fileCommentLength = u.readInt(2), this.diskNumberStart = u.readInt(2), this.internalFileAttributes = u.readInt(2), this.externalFileAttributes = u.readInt(4), this.localHeaderOffset = u.readInt(4), this.isEncrypted()) throw new Error("Encrypted zip are not supported");
        u.skip(w), this.readExtraFields(u), this.parseZIP64ExtraField(u), this.fileComment = u.readData(this.fileCommentLength);
      }, processAttributes: function() {
        this.unixPermissions = null, this.dosPermissions = null;
        var u = this.versionMadeBy >> 8;
        this.dir = !!(16 & this.externalFileAttributes), u == 0 && (this.dosPermissions = 63 & this.externalFileAttributes), u == 3 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || this.fileNameStr.slice(-1) !== "/" || (this.dir = !0);
      }, parseZIP64ExtraField: function() {
        if (this.extraFields[1]) {
          var u = e(this.extraFields[1].value);
          this.uncompressedSize === a.MAX_VALUE_32BITS && (this.uncompressedSize = u.readInt(8)), this.compressedSize === a.MAX_VALUE_32BITS && (this.compressedSize = u.readInt(8)), this.localHeaderOffset === a.MAX_VALUE_32BITS && (this.localHeaderOffset = u.readInt(8)), this.diskNumberStart === a.MAX_VALUE_32BITS && (this.diskNumberStart = u.readInt(4));
        }
      }, readExtraFields: function(u) {
        var w, o, p, f = u.index + this.extraFieldsLength;
        for (this.extraFields || (this.extraFields = {}); u.index + 4 < f; ) w = u.readInt(2), o = u.readInt(2), p = u.readData(o), this.extraFields[w] = { id: w, length: o, value: p };
        u.setIndex(f);
      }, handleUTF8: function() {
        var u = _.uint8array ? "uint8array" : "array";
        if (this.useUTF8()) this.fileNameStr = y.utf8decode(this.fileName), this.fileCommentStr = y.utf8decode(this.fileComment);
        else {
          var w = this.findExtraFieldUnicodePath();
          if (w !== null) this.fileNameStr = w;
          else {
            var o = a.transformTo(u, this.fileName);
            this.fileNameStr = this.loadOptions.decodeFileName(o);
          }
          var p = this.findExtraFieldUnicodeComment();
          if (p !== null) this.fileCommentStr = p;
          else {
            var f = a.transformTo(u, this.fileComment);
            this.fileCommentStr = this.loadOptions.decodeFileName(f);
          }
        }
      }, findExtraFieldUnicodePath: function() {
        var u = this.extraFields[28789];
        if (u) {
          var w = e(u.value);
          return w.readInt(1) !== 1 || l(this.fileName) !== w.readInt(4) ? null : y.utf8decode(w.readData(u.length - 5));
        }
        return null;
      }, findExtraFieldUnicodeComment: function() {
        var u = this.extraFields[25461];
        if (u) {
          var w = e(u.value);
          return w.readInt(1) !== 1 || l(this.fileComment) !== w.readInt(4) ? null : y.utf8decode(w.readData(u.length - 5));
        }
        return null;
      } }, g.exports = b;
    }, { "./compressedObject": 2, "./compressions": 3, "./crc32": 4, "./reader/readerFor": 22, "./support": 30, "./utf8": 31, "./utils": 32 }], 35: [function(i, g, c) {
      function e(w, o, p) {
        this.name = w, this.dir = p.dir, this.date = p.date, this.comment = p.comment, this.unixPermissions = p.unixPermissions, this.dosPermissions = p.dosPermissions, this._data = o, this._dataBinary = p.binary, this.options = { compression: p.compression, compressionOptions: p.compressionOptions };
      }
      var a = i("./stream/StreamHelper"), n = i("./stream/DataWorker"), l = i("./utf8"), y = i("./compressedObject"), k = i("./stream/GenericWorker");
      e.prototype = { internalStream: function(w) {
        var o = null, p = "string";
        try {
          if (!w) throw new Error("No output type specified.");
          var f = (p = w.toLowerCase()) === "string" || p === "text";
          p !== "binarystring" && p !== "text" || (p = "string"), o = this._decompressWorker();
          var v = !this._dataBinary;
          v && !f && (o = o.pipe(new l.Utf8EncodeWorker())), !v && f && (o = o.pipe(new l.Utf8DecodeWorker()));
        } catch (E) {
          (o = new k("error")).error(E);
        }
        return new a(o, p, "");
      }, async: function(w, o) {
        return this.internalStream(w).accumulate(o);
      }, nodeStream: function(w, o) {
        return this.internalStream(w || "nodebuffer").toNodejsStream(o);
      }, _compressWorker: function(w, o) {
        if (this._data instanceof y && this._data.compression.magic === w.magic) return this._data.getCompressedWorker();
        var p = this._decompressWorker();
        return this._dataBinary || (p = p.pipe(new l.Utf8EncodeWorker())), y.createWorkerFrom(p, w, o);
      }, _decompressWorker: function() {
        return this._data instanceof y ? this._data.getContentWorker() : this._data instanceof k ? this._data : new n(this._data);
      } };
      for (var _ = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], b = function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, u = 0; u < _.length; u++) e.prototype[_[u]] = b;
      g.exports = e;
    }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }], 36: [function(i, g, c) {
      (function(e) {
        var a, n, l = e.MutationObserver || e.WebKitMutationObserver;
        if (l) {
          var y = 0, k = new l(w), _ = e.document.createTextNode("");
          k.observe(_, { characterData: !0 }), a = function() {
            _.data = y = ++y % 2;
          };
        } else if (e.setImmediate || e.MessageChannel === void 0) a = "document" in e && "onreadystatechange" in e.document.createElement("script") ? function() {
          var o = e.document.createElement("script");
          o.onreadystatechange = function() {
            w(), o.onreadystatechange = null, o.parentNode.removeChild(o), o = null;
          }, e.document.documentElement.appendChild(o);
        } : function() {
          setTimeout(w, 0);
        };
        else {
          var b = new e.MessageChannel();
          b.port1.onmessage = w, a = function() {
            b.port2.postMessage(0);
          };
        }
        var u = [];
        function w() {
          var o, p;
          n = !0;
          for (var f = u.length; f; ) {
            for (p = u, u = [], o = -1; ++o < f; ) p[o]();
            f = u.length;
          }
          n = !1;
        }
        g.exports = function(o) {
          u.push(o) !== 1 || n || a();
        };
      }).call(this, typeof fe < "u" ? fe : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 37: [function(i, g, c) {
      var e = i("immediate");
      function a() {
      }
      var n = {}, l = ["REJECTED"], y = ["FULFILLED"], k = ["PENDING"];
      function _(f) {
        if (typeof f != "function") throw new TypeError("resolver must be a function");
        this.state = k, this.queue = [], this.outcome = void 0, f !== a && o(this, f);
      }
      function b(f, v, E) {
        this.promise = f, typeof v == "function" && (this.onFulfilled = v, this.callFulfilled = this.otherCallFulfilled), typeof E == "function" && (this.onRejected = E, this.callRejected = this.otherCallRejected);
      }
      function u(f, v, E) {
        e(function() {
          var T;
          try {
            T = v(E);
          } catch (C) {
            return n.reject(f, C);
          }
          T === f ? n.reject(f, new TypeError("Cannot resolve promise with itself")) : n.resolve(f, T);
        });
      }
      function w(f) {
        var v = f && f.then;
        if (f && (typeof f == "object" || typeof f == "function") && typeof v == "function") return function() {
          v.apply(f, arguments);
        };
      }
      function o(f, v) {
        var E = !1;
        function T(j) {
          E || (E = !0, n.reject(f, j));
        }
        function C(j) {
          E || (E = !0, n.resolve(f, j));
        }
        var F = p(function() {
          v(C, T);
        });
        F.status === "error" && T(F.value);
      }
      function p(f, v) {
        var E = {};
        try {
          E.value = f(v), E.status = "success";
        } catch (T) {
          E.status = "error", E.value = T;
        }
        return E;
      }
      (g.exports = _).prototype.finally = function(f) {
        if (typeof f != "function") return this;
        var v = this.constructor;
        return this.then(function(E) {
          return v.resolve(f()).then(function() {
            return E;
          });
        }, function(E) {
          return v.resolve(f()).then(function() {
            throw E;
          });
        });
      }, _.prototype.catch = function(f) {
        return this.then(null, f);
      }, _.prototype.then = function(f, v) {
        if (typeof f != "function" && this.state === y || typeof v != "function" && this.state === l) return this;
        var E = new this.constructor(a);
        return this.state !== k ? u(E, this.state === y ? f : v, this.outcome) : this.queue.push(new b(E, f, v)), E;
      }, b.prototype.callFulfilled = function(f) {
        n.resolve(this.promise, f);
      }, b.prototype.otherCallFulfilled = function(f) {
        u(this.promise, this.onFulfilled, f);
      }, b.prototype.callRejected = function(f) {
        n.reject(this.promise, f);
      }, b.prototype.otherCallRejected = function(f) {
        u(this.promise, this.onRejected, f);
      }, n.resolve = function(f, v) {
        var E = p(w, v);
        if (E.status === "error") return n.reject(f, E.value);
        var T = E.value;
        if (T) o(f, T);
        else {
          f.state = y, f.outcome = v;
          for (var C = -1, F = f.queue.length; ++C < F; ) f.queue[C].callFulfilled(v);
        }
        return f;
      }, n.reject = function(f, v) {
        f.state = l, f.outcome = v;
        for (var E = -1, T = f.queue.length; ++E < T; ) f.queue[E].callRejected(v);
        return f;
      }, _.resolve = function(f) {
        return f instanceof this ? f : n.resolve(new this(a), f);
      }, _.reject = function(f) {
        var v = new this(a);
        return n.reject(v, f);
      }, _.all = function(f) {
        var v = this;
        if (Object.prototype.toString.call(f) !== "[object Array]") return this.reject(new TypeError("must be an array"));
        var E = f.length, T = !1;
        if (!E) return this.resolve([]);
        for (var C = new Array(E), F = 0, j = -1, M = new this(a); ++j < E; ) z(f[j], j);
        return M;
        function z($, it) {
          v.resolve($).then(function(S) {
            C[it] = S, ++F !== E || T || (T = !0, n.resolve(M, C));
          }, function(S) {
            T || (T = !0, n.reject(M, S));
          });
        }
      }, _.race = function(f) {
        var v = this;
        if (Object.prototype.toString.call(f) !== "[object Array]") return this.reject(new TypeError("must be an array"));
        var E = f.length, T = !1;
        if (!E) return this.resolve([]);
        for (var C = -1, F = new this(a); ++C < E; ) j = f[C], v.resolve(j).then(function(M) {
          T || (T = !0, n.resolve(F, M));
        }, function(M) {
          T || (T = !0, n.reject(F, M));
        });
        var j;
        return F;
      };
    }, { immediate: 36 }], 38: [function(i, g, c) {
      var e = {};
      (0, i("./lib/utils/common").assign)(e, i("./lib/deflate"), i("./lib/inflate"), i("./lib/zlib/constants")), g.exports = e;
    }, { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 }], 39: [function(i, g, c) {
      var e = i("./zlib/deflate"), a = i("./utils/common"), n = i("./utils/strings"), l = i("./zlib/messages"), y = i("./zlib/zstream"), k = Object.prototype.toString, _ = 0, b = -1, u = 0, w = 8;
      function o(f) {
        if (!(this instanceof o)) return new o(f);
        this.options = a.assign({ level: b, method: w, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: u, to: "" }, f || {});
        var v = this.options;
        v.raw && 0 < v.windowBits ? v.windowBits = -v.windowBits : v.gzip && 0 < v.windowBits && v.windowBits < 16 && (v.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new y(), this.strm.avail_out = 0;
        var E = e.deflateInit2(this.strm, v.level, v.method, v.windowBits, v.memLevel, v.strategy);
        if (E !== _) throw new Error(l[E]);
        if (v.header && e.deflateSetHeader(this.strm, v.header), v.dictionary) {
          var T;
          if (T = typeof v.dictionary == "string" ? n.string2buf(v.dictionary) : k.call(v.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(v.dictionary) : v.dictionary, (E = e.deflateSetDictionary(this.strm, T)) !== _) throw new Error(l[E]);
          this._dict_set = !0;
        }
      }
      function p(f, v) {
        var E = new o(v);
        if (E.push(f, !0), E.err) throw E.msg || l[E.err];
        return E.result;
      }
      o.prototype.push = function(f, v) {
        var E, T, C = this.strm, F = this.options.chunkSize;
        if (this.ended) return !1;
        T = v === ~~v ? v : v === !0 ? 4 : 0, typeof f == "string" ? C.input = n.string2buf(f) : k.call(f) === "[object ArrayBuffer]" ? C.input = new Uint8Array(f) : C.input = f, C.next_in = 0, C.avail_in = C.input.length;
        do {
          if (C.avail_out === 0 && (C.output = new a.Buf8(F), C.next_out = 0, C.avail_out = F), (E = e.deflate(C, T)) !== 1 && E !== _) return this.onEnd(E), !(this.ended = !0);
          C.avail_out !== 0 && (C.avail_in !== 0 || T !== 4 && T !== 2) || (this.options.to === "string" ? this.onData(n.buf2binstring(a.shrinkBuf(C.output, C.next_out))) : this.onData(a.shrinkBuf(C.output, C.next_out)));
        } while ((0 < C.avail_in || C.avail_out === 0) && E !== 1);
        return T === 4 ? (E = e.deflateEnd(this.strm), this.onEnd(E), this.ended = !0, E === _) : T !== 2 || (this.onEnd(_), !(C.avail_out = 0));
      }, o.prototype.onData = function(f) {
        this.chunks.push(f);
      }, o.prototype.onEnd = function(f) {
        f === _ && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = a.flattenChunks(this.chunks)), this.chunks = [], this.err = f, this.msg = this.strm.msg;
      }, c.Deflate = o, c.deflate = p, c.deflateRaw = function(f, v) {
        return (v = v || {}).raw = !0, p(f, v);
      }, c.gzip = function(f, v) {
        return (v = v || {}).gzip = !0, p(f, v);
      };
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/deflate": 46, "./zlib/messages": 51, "./zlib/zstream": 53 }], 40: [function(i, g, c) {
      var e = i("./zlib/inflate"), a = i("./utils/common"), n = i("./utils/strings"), l = i("./zlib/constants"), y = i("./zlib/messages"), k = i("./zlib/zstream"), _ = i("./zlib/gzheader"), b = Object.prototype.toString;
      function u(o) {
        if (!(this instanceof u)) return new u(o);
        this.options = a.assign({ chunkSize: 16384, windowBits: 0, to: "" }, o || {});
        var p = this.options;
        p.raw && 0 <= p.windowBits && p.windowBits < 16 && (p.windowBits = -p.windowBits, p.windowBits === 0 && (p.windowBits = -15)), !(0 <= p.windowBits && p.windowBits < 16) || o && o.windowBits || (p.windowBits += 32), 15 < p.windowBits && p.windowBits < 48 && !(15 & p.windowBits) && (p.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new k(), this.strm.avail_out = 0;
        var f = e.inflateInit2(this.strm, p.windowBits);
        if (f !== l.Z_OK) throw new Error(y[f]);
        this.header = new _(), e.inflateGetHeader(this.strm, this.header);
      }
      function w(o, p) {
        var f = new u(p);
        if (f.push(o, !0), f.err) throw f.msg || y[f.err];
        return f.result;
      }
      u.prototype.push = function(o, p) {
        var f, v, E, T, C, F, j = this.strm, M = this.options.chunkSize, z = this.options.dictionary, $ = !1;
        if (this.ended) return !1;
        v = p === ~~p ? p : p === !0 ? l.Z_FINISH : l.Z_NO_FLUSH, typeof o == "string" ? j.input = n.binstring2buf(o) : b.call(o) === "[object ArrayBuffer]" ? j.input = new Uint8Array(o) : j.input = o, j.next_in = 0, j.avail_in = j.input.length;
        do {
          if (j.avail_out === 0 && (j.output = new a.Buf8(M), j.next_out = 0, j.avail_out = M), (f = e.inflate(j, l.Z_NO_FLUSH)) === l.Z_NEED_DICT && z && (F = typeof z == "string" ? n.string2buf(z) : b.call(z) === "[object ArrayBuffer]" ? new Uint8Array(z) : z, f = e.inflateSetDictionary(this.strm, F)), f === l.Z_BUF_ERROR && $ === !0 && (f = l.Z_OK, $ = !1), f !== l.Z_STREAM_END && f !== l.Z_OK) return this.onEnd(f), !(this.ended = !0);
          j.next_out && (j.avail_out !== 0 && f !== l.Z_STREAM_END && (j.avail_in !== 0 || v !== l.Z_FINISH && v !== l.Z_SYNC_FLUSH) || (this.options.to === "string" ? (E = n.utf8border(j.output, j.next_out), T = j.next_out - E, C = n.buf2string(j.output, E), j.next_out = T, j.avail_out = M - T, T && a.arraySet(j.output, j.output, E, T, 0), this.onData(C)) : this.onData(a.shrinkBuf(j.output, j.next_out)))), j.avail_in === 0 && j.avail_out === 0 && ($ = !0);
        } while ((0 < j.avail_in || j.avail_out === 0) && f !== l.Z_STREAM_END);
        return f === l.Z_STREAM_END && (v = l.Z_FINISH), v === l.Z_FINISH ? (f = e.inflateEnd(this.strm), this.onEnd(f), this.ended = !0, f === l.Z_OK) : v !== l.Z_SYNC_FLUSH || (this.onEnd(l.Z_OK), !(j.avail_out = 0));
      }, u.prototype.onData = function(o) {
        this.chunks.push(o);
      }, u.prototype.onEnd = function(o) {
        o === l.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = a.flattenChunks(this.chunks)), this.chunks = [], this.err = o, this.msg = this.strm.msg;
      }, c.Inflate = u, c.inflate = w, c.inflateRaw = function(o, p) {
        return (p = p || {}).raw = !0, w(o, p);
      }, c.ungzip = w;
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/constants": 44, "./zlib/gzheader": 47, "./zlib/inflate": 49, "./zlib/messages": 51, "./zlib/zstream": 53 }], 41: [function(i, g, c) {
      var e = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
      c.assign = function(l) {
        for (var y = Array.prototype.slice.call(arguments, 1); y.length; ) {
          var k = y.shift();
          if (k) {
            if (typeof k != "object") throw new TypeError(k + "must be non-object");
            for (var _ in k) k.hasOwnProperty(_) && (l[_] = k[_]);
          }
        }
        return l;
      }, c.shrinkBuf = function(l, y) {
        return l.length === y ? l : l.subarray ? l.subarray(0, y) : (l.length = y, l);
      };
      var a = { arraySet: function(l, y, k, _, b) {
        if (y.subarray && l.subarray) l.set(y.subarray(k, k + _), b);
        else for (var u = 0; u < _; u++) l[b + u] = y[k + u];
      }, flattenChunks: function(l) {
        var y, k, _, b, u, w;
        for (y = _ = 0, k = l.length; y < k; y++) _ += l[y].length;
        for (w = new Uint8Array(_), y = b = 0, k = l.length; y < k; y++) u = l[y], w.set(u, b), b += u.length;
        return w;
      } }, n = { arraySet: function(l, y, k, _, b) {
        for (var u = 0; u < _; u++) l[b + u] = y[k + u];
      }, flattenChunks: function(l) {
        return [].concat.apply([], l);
      } };
      c.setTyped = function(l) {
        l ? (c.Buf8 = Uint8Array, c.Buf16 = Uint16Array, c.Buf32 = Int32Array, c.assign(c, a)) : (c.Buf8 = Array, c.Buf16 = Array, c.Buf32 = Array, c.assign(c, n));
      }, c.setTyped(e);
    }, {}], 42: [function(i, g, c) {
      var e = i("./common"), a = !0, n = !0;
      try {
        String.fromCharCode.apply(null, [0]);
      } catch {
        a = !1;
      }
      try {
        String.fromCharCode.apply(null, new Uint8Array(1));
      } catch {
        n = !1;
      }
      for (var l = new e.Buf8(256), y = 0; y < 256; y++) l[y] = 252 <= y ? 6 : 248 <= y ? 5 : 240 <= y ? 4 : 224 <= y ? 3 : 192 <= y ? 2 : 1;
      function k(_, b) {
        if (b < 65537 && (_.subarray && n || !_.subarray && a)) return String.fromCharCode.apply(null, e.shrinkBuf(_, b));
        for (var u = "", w = 0; w < b; w++) u += String.fromCharCode(_[w]);
        return u;
      }
      l[254] = l[254] = 1, c.string2buf = function(_) {
        var b, u, w, o, p, f = _.length, v = 0;
        for (o = 0; o < f; o++) (64512 & (u = _.charCodeAt(o))) == 55296 && o + 1 < f && (64512 & (w = _.charCodeAt(o + 1))) == 56320 && (u = 65536 + (u - 55296 << 10) + (w - 56320), o++), v += u < 128 ? 1 : u < 2048 ? 2 : u < 65536 ? 3 : 4;
        for (b = new e.Buf8(v), o = p = 0; p < v; o++) (64512 & (u = _.charCodeAt(o))) == 55296 && o + 1 < f && (64512 & (w = _.charCodeAt(o + 1))) == 56320 && (u = 65536 + (u - 55296 << 10) + (w - 56320), o++), u < 128 ? b[p++] = u : (u < 2048 ? b[p++] = 192 | u >>> 6 : (u < 65536 ? b[p++] = 224 | u >>> 12 : (b[p++] = 240 | u >>> 18, b[p++] = 128 | u >>> 12 & 63), b[p++] = 128 | u >>> 6 & 63), b[p++] = 128 | 63 & u);
        return b;
      }, c.buf2binstring = function(_) {
        return k(_, _.length);
      }, c.binstring2buf = function(_) {
        for (var b = new e.Buf8(_.length), u = 0, w = b.length; u < w; u++) b[u] = _.charCodeAt(u);
        return b;
      }, c.buf2string = function(_, b) {
        var u, w, o, p, f = b || _.length, v = new Array(2 * f);
        for (u = w = 0; u < f; ) if ((o = _[u++]) < 128) v[w++] = o;
        else if (4 < (p = l[o])) v[w++] = 65533, u += p - 1;
        else {
          for (o &= p === 2 ? 31 : p === 3 ? 15 : 7; 1 < p && u < f; ) o = o << 6 | 63 & _[u++], p--;
          1 < p ? v[w++] = 65533 : o < 65536 ? v[w++] = o : (o -= 65536, v[w++] = 55296 | o >> 10 & 1023, v[w++] = 56320 | 1023 & o);
        }
        return k(v, w);
      }, c.utf8border = function(_, b) {
        var u;
        for ((b = b || _.length) > _.length && (b = _.length), u = b - 1; 0 <= u && (192 & _[u]) == 128; ) u--;
        return u < 0 || u === 0 ? b : u + l[_[u]] > b ? u : b;
      };
    }, { "./common": 41 }], 43: [function(i, g, c) {
      g.exports = function(e, a, n, l) {
        for (var y = 65535 & e | 0, k = e >>> 16 & 65535 | 0, _ = 0; n !== 0; ) {
          for (n -= _ = 2e3 < n ? 2e3 : n; k = k + (y = y + a[l++] | 0) | 0, --_; ) ;
          y %= 65521, k %= 65521;
        }
        return y | k << 16 | 0;
      };
    }, {}], 44: [function(i, g, c) {
      g.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
    }, {}], 45: [function(i, g, c) {
      var e = function() {
        for (var a, n = [], l = 0; l < 256; l++) {
          a = l;
          for (var y = 0; y < 8; y++) a = 1 & a ? 3988292384 ^ a >>> 1 : a >>> 1;
          n[l] = a;
        }
        return n;
      }();
      g.exports = function(a, n, l, y) {
        var k = e, _ = y + l;
        a ^= -1;
        for (var b = y; b < _; b++) a = a >>> 8 ^ k[255 & (a ^ n[b])];
        return -1 ^ a;
      };
    }, {}], 46: [function(i, g, c) {
      var e, a = i("../utils/common"), n = i("./trees"), l = i("./adler32"), y = i("./crc32"), k = i("./messages"), _ = 0, b = 4, u = 0, w = -2, o = -1, p = 4, f = 2, v = 8, E = 9, T = 286, C = 30, F = 19, j = 2 * T + 1, M = 15, z = 3, $ = 258, it = $ + z + 1, S = 42, D = 113, r = 1, N = 2, at = 3, L = 4;
      function ut(t, B) {
        return t.msg = k[B], B;
      }
      function V(t) {
        return (t << 1) - (4 < t ? 9 : 0);
      }
      function nt(t) {
        for (var B = t.length; 0 <= --B; ) t[B] = 0;
      }
      function I(t) {
        var B = t.state, P = B.pending;
        P > t.avail_out && (P = t.avail_out), P !== 0 && (a.arraySet(t.output, B.pending_buf, B.pending_out, P, t.next_out), t.next_out += P, B.pending_out += P, t.total_out += P, t.avail_out -= P, B.pending -= P, B.pending === 0 && (B.pending_out = 0));
      }
      function A(t, B) {
        n._tr_flush_block(t, 0 <= t.block_start ? t.block_start : -1, t.strstart - t.block_start, B), t.block_start = t.strstart, I(t.strm);
      }
      function et(t, B) {
        t.pending_buf[t.pending++] = B;
      }
      function q(t, B) {
        t.pending_buf[t.pending++] = B >>> 8 & 255, t.pending_buf[t.pending++] = 255 & B;
      }
      function G(t, B) {
        var P, m, h = t.max_chain_length, R = t.strstart, U = t.prev_length, W = t.nice_match, O = t.strstart > t.w_size - it ? t.strstart - (t.w_size - it) : 0, Y = t.window, J = t.w_mask, X = t.prev, rt = t.strstart + $, gt = Y[R + U - 1], ft = Y[R + U];
        t.prev_length >= t.good_match && (h >>= 2), W > t.lookahead && (W = t.lookahead);
        do
          if (Y[(P = B) + U] === ft && Y[P + U - 1] === gt && Y[P] === Y[R] && Y[++P] === Y[R + 1]) {
            R += 2, P++;
            do
              ;
            while (Y[++R] === Y[++P] && Y[++R] === Y[++P] && Y[++R] === Y[++P] && Y[++R] === Y[++P] && Y[++R] === Y[++P] && Y[++R] === Y[++P] && Y[++R] === Y[++P] && Y[++R] === Y[++P] && R < rt);
            if (m = $ - (rt - R), R = rt - $, U < m) {
              if (t.match_start = B, W <= (U = m)) break;
              gt = Y[R + U - 1], ft = Y[R + U];
            }
          }
        while ((B = X[B & J]) > O && --h != 0);
        return U <= t.lookahead ? U : t.lookahead;
      }
      function wt(t) {
        var B, P, m, h, R, U, W, O, Y, J, X = t.w_size;
        do {
          if (h = t.window_size - t.lookahead - t.strstart, t.strstart >= X + (X - it)) {
            for (a.arraySet(t.window, t.window, X, X, 0), t.match_start -= X, t.strstart -= X, t.block_start -= X, B = P = t.hash_size; m = t.head[--B], t.head[B] = X <= m ? m - X : 0, --P; ) ;
            for (B = P = X; m = t.prev[--B], t.prev[B] = X <= m ? m - X : 0, --P; ) ;
            h += X;
          }
          if (t.strm.avail_in === 0) break;
          if (U = t.strm, W = t.window, O = t.strstart + t.lookahead, Y = h, J = void 0, J = U.avail_in, Y < J && (J = Y), P = J === 0 ? 0 : (U.avail_in -= J, a.arraySet(W, U.input, U.next_in, J, O), U.state.wrap === 1 ? U.adler = l(U.adler, W, J, O) : U.state.wrap === 2 && (U.adler = y(U.adler, W, J, O)), U.next_in += J, U.total_in += J, J), t.lookahead += P, t.lookahead + t.insert >= z) for (R = t.strstart - t.insert, t.ins_h = t.window[R], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[R + 1]) & t.hash_mask; t.insert && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[R + z - 1]) & t.hash_mask, t.prev[R & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = R, R++, t.insert--, !(t.lookahead + t.insert < z)); ) ;
        } while (t.lookahead < it && t.strm.avail_in !== 0);
      }
      function tt(t, B) {
        for (var P, m; ; ) {
          if (t.lookahead < it) {
            if (wt(t), t.lookahead < it && B === _) return r;
            if (t.lookahead === 0) break;
          }
          if (P = 0, t.lookahead >= z && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + z - 1]) & t.hash_mask, P = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), P !== 0 && t.strstart - P <= t.w_size - it && (t.match_length = G(t, P)), t.match_length >= z) if (m = n._tr_tally(t, t.strstart - t.match_start, t.match_length - z), t.lookahead -= t.match_length, t.match_length <= t.max_lazy_match && t.lookahead >= z) {
            for (t.match_length--; t.strstart++, t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + z - 1]) & t.hash_mask, P = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart, --t.match_length != 0; ) ;
            t.strstart++;
          } else t.strstart += t.match_length, t.match_length = 0, t.ins_h = t.window[t.strstart], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + 1]) & t.hash_mask;
          else m = n._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++;
          if (m && (A(t, !1), t.strm.avail_out === 0)) return r;
        }
        return t.insert = t.strstart < z - 1 ? t.strstart : z - 1, B === b ? (A(t, !0), t.strm.avail_out === 0 ? at : L) : t.last_lit && (A(t, !1), t.strm.avail_out === 0) ? r : N;
      }
      function lt(t, B) {
        for (var P, m, h; ; ) {
          if (t.lookahead < it) {
            if (wt(t), t.lookahead < it && B === _) return r;
            if (t.lookahead === 0) break;
          }
          if (P = 0, t.lookahead >= z && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + z - 1]) & t.hash_mask, P = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), t.prev_length = t.match_length, t.prev_match = t.match_start, t.match_length = z - 1, P !== 0 && t.prev_length < t.max_lazy_match && t.strstart - P <= t.w_size - it && (t.match_length = G(t, P), t.match_length <= 5 && (t.strategy === 1 || t.match_length === z && 4096 < t.strstart - t.match_start) && (t.match_length = z - 1)), t.prev_length >= z && t.match_length <= t.prev_length) {
            for (h = t.strstart + t.lookahead - z, m = n._tr_tally(t, t.strstart - 1 - t.prev_match, t.prev_length - z), t.lookahead -= t.prev_length - 1, t.prev_length -= 2; ++t.strstart <= h && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + z - 1]) & t.hash_mask, P = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), --t.prev_length != 0; ) ;
            if (t.match_available = 0, t.match_length = z - 1, t.strstart++, m && (A(t, !1), t.strm.avail_out === 0)) return r;
          } else if (t.match_available) {
            if ((m = n._tr_tally(t, 0, t.window[t.strstart - 1])) && A(t, !1), t.strstart++, t.lookahead--, t.strm.avail_out === 0) return r;
          } else t.match_available = 1, t.strstart++, t.lookahead--;
        }
        return t.match_available && (m = n._tr_tally(t, 0, t.window[t.strstart - 1]), t.match_available = 0), t.insert = t.strstart < z - 1 ? t.strstart : z - 1, B === b ? (A(t, !0), t.strm.avail_out === 0 ? at : L) : t.last_lit && (A(t, !1), t.strm.avail_out === 0) ? r : N;
      }
      function ht(t, B, P, m, h) {
        this.good_length = t, this.max_lazy = B, this.nice_length = P, this.max_chain = m, this.func = h;
      }
      function yt() {
        this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = v, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new a.Buf16(2 * j), this.dyn_dtree = new a.Buf16(2 * (2 * C + 1)), this.bl_tree = new a.Buf16(2 * (2 * F + 1)), nt(this.dyn_ltree), nt(this.dyn_dtree), nt(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new a.Buf16(M + 1), this.heap = new a.Buf16(2 * T + 1), nt(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new a.Buf16(2 * T + 1), nt(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
      }
      function _t(t) {
        var B;
        return t && t.state ? (t.total_in = t.total_out = 0, t.data_type = f, (B = t.state).pending = 0, B.pending_out = 0, B.wrap < 0 && (B.wrap = -B.wrap), B.status = B.wrap ? S : D, t.adler = B.wrap === 2 ? 0 : 1, B.last_flush = _, n._tr_init(B), u) : ut(t, w);
      }
      function St(t) {
        var B = _t(t);
        return B === u && function(P) {
          P.window_size = 2 * P.w_size, nt(P.head), P.max_lazy_match = e[P.level].max_lazy, P.good_match = e[P.level].good_length, P.nice_match = e[P.level].nice_length, P.max_chain_length = e[P.level].max_chain, P.strstart = 0, P.block_start = 0, P.lookahead = 0, P.insert = 0, P.match_length = P.prev_length = z - 1, P.match_available = 0, P.ins_h = 0;
        }(t.state), B;
      }
      function Tt(t, B, P, m, h, R) {
        if (!t) return w;
        var U = 1;
        if (B === o && (B = 6), m < 0 ? (U = 0, m = -m) : 15 < m && (U = 2, m -= 16), h < 1 || E < h || P !== v || m < 8 || 15 < m || B < 0 || 9 < B || R < 0 || p < R) return ut(t, w);
        m === 8 && (m = 9);
        var W = new yt();
        return (t.state = W).strm = t, W.wrap = U, W.gzhead = null, W.w_bits = m, W.w_size = 1 << W.w_bits, W.w_mask = W.w_size - 1, W.hash_bits = h + 7, W.hash_size = 1 << W.hash_bits, W.hash_mask = W.hash_size - 1, W.hash_shift = ~~((W.hash_bits + z - 1) / z), W.window = new a.Buf8(2 * W.w_size), W.head = new a.Buf16(W.hash_size), W.prev = new a.Buf16(W.w_size), W.lit_bufsize = 1 << h + 6, W.pending_buf_size = 4 * W.lit_bufsize, W.pending_buf = new a.Buf8(W.pending_buf_size), W.d_buf = 1 * W.lit_bufsize, W.l_buf = 3 * W.lit_bufsize, W.level = B, W.strategy = R, W.method = P, St(t);
      }
      e = [new ht(0, 0, 0, 0, function(t, B) {
        var P = 65535;
        for (P > t.pending_buf_size - 5 && (P = t.pending_buf_size - 5); ; ) {
          if (t.lookahead <= 1) {
            if (wt(t), t.lookahead === 0 && B === _) return r;
            if (t.lookahead === 0) break;
          }
          t.strstart += t.lookahead, t.lookahead = 0;
          var m = t.block_start + P;
          if ((t.strstart === 0 || t.strstart >= m) && (t.lookahead = t.strstart - m, t.strstart = m, A(t, !1), t.strm.avail_out === 0) || t.strstart - t.block_start >= t.w_size - it && (A(t, !1), t.strm.avail_out === 0)) return r;
        }
        return t.insert = 0, B === b ? (A(t, !0), t.strm.avail_out === 0 ? at : L) : (t.strstart > t.block_start && (A(t, !1), t.strm.avail_out), r);
      }), new ht(4, 4, 8, 4, tt), new ht(4, 5, 16, 8, tt), new ht(4, 6, 32, 32, tt), new ht(4, 4, 16, 16, lt), new ht(8, 16, 32, 32, lt), new ht(8, 16, 128, 128, lt), new ht(8, 32, 128, 256, lt), new ht(32, 128, 258, 1024, lt), new ht(32, 258, 258, 4096, lt)], c.deflateInit = function(t, B) {
        return Tt(t, B, v, 15, 8, 0);
      }, c.deflateInit2 = Tt, c.deflateReset = St, c.deflateResetKeep = _t, c.deflateSetHeader = function(t, B) {
        return t && t.state ? t.state.wrap !== 2 ? w : (t.state.gzhead = B, u) : w;
      }, c.deflate = function(t, B) {
        var P, m, h, R;
        if (!t || !t.state || 5 < B || B < 0) return t ? ut(t, w) : w;
        if (m = t.state, !t.output || !t.input && t.avail_in !== 0 || m.status === 666 && B !== b) return ut(t, t.avail_out === 0 ? -5 : w);
        if (m.strm = t, P = m.last_flush, m.last_flush = B, m.status === S) if (m.wrap === 2) t.adler = 0, et(m, 31), et(m, 139), et(m, 8), m.gzhead ? (et(m, (m.gzhead.text ? 1 : 0) + (m.gzhead.hcrc ? 2 : 0) + (m.gzhead.extra ? 4 : 0) + (m.gzhead.name ? 8 : 0) + (m.gzhead.comment ? 16 : 0)), et(m, 255 & m.gzhead.time), et(m, m.gzhead.time >> 8 & 255), et(m, m.gzhead.time >> 16 & 255), et(m, m.gzhead.time >> 24 & 255), et(m, m.level === 9 ? 2 : 2 <= m.strategy || m.level < 2 ? 4 : 0), et(m, 255 & m.gzhead.os), m.gzhead.extra && m.gzhead.extra.length && (et(m, 255 & m.gzhead.extra.length), et(m, m.gzhead.extra.length >> 8 & 255)), m.gzhead.hcrc && (t.adler = y(t.adler, m.pending_buf, m.pending, 0)), m.gzindex = 0, m.status = 69) : (et(m, 0), et(m, 0), et(m, 0), et(m, 0), et(m, 0), et(m, m.level === 9 ? 2 : 2 <= m.strategy || m.level < 2 ? 4 : 0), et(m, 3), m.status = D);
        else {
          var U = v + (m.w_bits - 8 << 4) << 8;
          U |= (2 <= m.strategy || m.level < 2 ? 0 : m.level < 6 ? 1 : m.level === 6 ? 2 : 3) << 6, m.strstart !== 0 && (U |= 32), U += 31 - U % 31, m.status = D, q(m, U), m.strstart !== 0 && (q(m, t.adler >>> 16), q(m, 65535 & t.adler)), t.adler = 1;
        }
        if (m.status === 69) if (m.gzhead.extra) {
          for (h = m.pending; m.gzindex < (65535 & m.gzhead.extra.length) && (m.pending !== m.pending_buf_size || (m.gzhead.hcrc && m.pending > h && (t.adler = y(t.adler, m.pending_buf, m.pending - h, h)), I(t), h = m.pending, m.pending !== m.pending_buf_size)); ) et(m, 255 & m.gzhead.extra[m.gzindex]), m.gzindex++;
          m.gzhead.hcrc && m.pending > h && (t.adler = y(t.adler, m.pending_buf, m.pending - h, h)), m.gzindex === m.gzhead.extra.length && (m.gzindex = 0, m.status = 73);
        } else m.status = 73;
        if (m.status === 73) if (m.gzhead.name) {
          h = m.pending;
          do {
            if (m.pending === m.pending_buf_size && (m.gzhead.hcrc && m.pending > h && (t.adler = y(t.adler, m.pending_buf, m.pending - h, h)), I(t), h = m.pending, m.pending === m.pending_buf_size)) {
              R = 1;
              break;
            }
            R = m.gzindex < m.gzhead.name.length ? 255 & m.gzhead.name.charCodeAt(m.gzindex++) : 0, et(m, R);
          } while (R !== 0);
          m.gzhead.hcrc && m.pending > h && (t.adler = y(t.adler, m.pending_buf, m.pending - h, h)), R === 0 && (m.gzindex = 0, m.status = 91);
        } else m.status = 91;
        if (m.status === 91) if (m.gzhead.comment) {
          h = m.pending;
          do {
            if (m.pending === m.pending_buf_size && (m.gzhead.hcrc && m.pending > h && (t.adler = y(t.adler, m.pending_buf, m.pending - h, h)), I(t), h = m.pending, m.pending === m.pending_buf_size)) {
              R = 1;
              break;
            }
            R = m.gzindex < m.gzhead.comment.length ? 255 & m.gzhead.comment.charCodeAt(m.gzindex++) : 0, et(m, R);
          } while (R !== 0);
          m.gzhead.hcrc && m.pending > h && (t.adler = y(t.adler, m.pending_buf, m.pending - h, h)), R === 0 && (m.status = 103);
        } else m.status = 103;
        if (m.status === 103 && (m.gzhead.hcrc ? (m.pending + 2 > m.pending_buf_size && I(t), m.pending + 2 <= m.pending_buf_size && (et(m, 255 & t.adler), et(m, t.adler >> 8 & 255), t.adler = 0, m.status = D)) : m.status = D), m.pending !== 0) {
          if (I(t), t.avail_out === 0) return m.last_flush = -1, u;
        } else if (t.avail_in === 0 && V(B) <= V(P) && B !== b) return ut(t, -5);
        if (m.status === 666 && t.avail_in !== 0) return ut(t, -5);
        if (t.avail_in !== 0 || m.lookahead !== 0 || B !== _ && m.status !== 666) {
          var W = m.strategy === 2 ? function(O, Y) {
            for (var J; ; ) {
              if (O.lookahead === 0 && (wt(O), O.lookahead === 0)) {
                if (Y === _) return r;
                break;
              }
              if (O.match_length = 0, J = n._tr_tally(O, 0, O.window[O.strstart]), O.lookahead--, O.strstart++, J && (A(O, !1), O.strm.avail_out === 0)) return r;
            }
            return O.insert = 0, Y === b ? (A(O, !0), O.strm.avail_out === 0 ? at : L) : O.last_lit && (A(O, !1), O.strm.avail_out === 0) ? r : N;
          }(m, B) : m.strategy === 3 ? function(O, Y) {
            for (var J, X, rt, gt, ft = O.window; ; ) {
              if (O.lookahead <= $) {
                if (wt(O), O.lookahead <= $ && Y === _) return r;
                if (O.lookahead === 0) break;
              }
              if (O.match_length = 0, O.lookahead >= z && 0 < O.strstart && (X = ft[rt = O.strstart - 1]) === ft[++rt] && X === ft[++rt] && X === ft[++rt]) {
                gt = O.strstart + $;
                do
                  ;
                while (X === ft[++rt] && X === ft[++rt] && X === ft[++rt] && X === ft[++rt] && X === ft[++rt] && X === ft[++rt] && X === ft[++rt] && X === ft[++rt] && rt < gt);
                O.match_length = $ - (gt - rt), O.match_length > O.lookahead && (O.match_length = O.lookahead);
              }
              if (O.match_length >= z ? (J = n._tr_tally(O, 1, O.match_length - z), O.lookahead -= O.match_length, O.strstart += O.match_length, O.match_length = 0) : (J = n._tr_tally(O, 0, O.window[O.strstart]), O.lookahead--, O.strstart++), J && (A(O, !1), O.strm.avail_out === 0)) return r;
            }
            return O.insert = 0, Y === b ? (A(O, !0), O.strm.avail_out === 0 ? at : L) : O.last_lit && (A(O, !1), O.strm.avail_out === 0) ? r : N;
          }(m, B) : e[m.level].func(m, B);
          if (W !== at && W !== L || (m.status = 666), W === r || W === at) return t.avail_out === 0 && (m.last_flush = -1), u;
          if (W === N && (B === 1 ? n._tr_align(m) : B !== 5 && (n._tr_stored_block(m, 0, 0, !1), B === 3 && (nt(m.head), m.lookahead === 0 && (m.strstart = 0, m.block_start = 0, m.insert = 0))), I(t), t.avail_out === 0)) return m.last_flush = -1, u;
        }
        return B !== b ? u : m.wrap <= 0 ? 1 : (m.wrap === 2 ? (et(m, 255 & t.adler), et(m, t.adler >> 8 & 255), et(m, t.adler >> 16 & 255), et(m, t.adler >> 24 & 255), et(m, 255 & t.total_in), et(m, t.total_in >> 8 & 255), et(m, t.total_in >> 16 & 255), et(m, t.total_in >> 24 & 255)) : (q(m, t.adler >>> 16), q(m, 65535 & t.adler)), I(t), 0 < m.wrap && (m.wrap = -m.wrap), m.pending !== 0 ? u : 1);
      }, c.deflateEnd = function(t) {
        var B;
        return t && t.state ? (B = t.state.status) !== S && B !== 69 && B !== 73 && B !== 91 && B !== 103 && B !== D && B !== 666 ? ut(t, w) : (t.state = null, B === D ? ut(t, -3) : u) : w;
      }, c.deflateSetDictionary = function(t, B) {
        var P, m, h, R, U, W, O, Y, J = B.length;
        if (!t || !t.state || (R = (P = t.state).wrap) === 2 || R === 1 && P.status !== S || P.lookahead) return w;
        for (R === 1 && (t.adler = l(t.adler, B, J, 0)), P.wrap = 0, J >= P.w_size && (R === 0 && (nt(P.head), P.strstart = 0, P.block_start = 0, P.insert = 0), Y = new a.Buf8(P.w_size), a.arraySet(Y, B, J - P.w_size, P.w_size, 0), B = Y, J = P.w_size), U = t.avail_in, W = t.next_in, O = t.input, t.avail_in = J, t.next_in = 0, t.input = B, wt(P); P.lookahead >= z; ) {
          for (m = P.strstart, h = P.lookahead - (z - 1); P.ins_h = (P.ins_h << P.hash_shift ^ P.window[m + z - 1]) & P.hash_mask, P.prev[m & P.w_mask] = P.head[P.ins_h], P.head[P.ins_h] = m, m++, --h; ) ;
          P.strstart = m, P.lookahead = z - 1, wt(P);
        }
        return P.strstart += P.lookahead, P.block_start = P.strstart, P.insert = P.lookahead, P.lookahead = 0, P.match_length = P.prev_length = z - 1, P.match_available = 0, t.next_in = W, t.input = O, t.avail_in = U, P.wrap = R, u;
      }, c.deflateInfo = "pako deflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(i, g, c) {
      g.exports = function() {
        this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
      };
    }, {}], 48: [function(i, g, c) {
      g.exports = function(e, a) {
        var n, l, y, k, _, b, u, w, o, p, f, v, E, T, C, F, j, M, z, $, it, S, D, r, N;
        n = e.state, l = e.next_in, r = e.input, y = l + (e.avail_in - 5), k = e.next_out, N = e.output, _ = k - (a - e.avail_out), b = k + (e.avail_out - 257), u = n.dmax, w = n.wsize, o = n.whave, p = n.wnext, f = n.window, v = n.hold, E = n.bits, T = n.lencode, C = n.distcode, F = (1 << n.lenbits) - 1, j = (1 << n.distbits) - 1;
        t: do {
          E < 15 && (v += r[l++] << E, E += 8, v += r[l++] << E, E += 8), M = T[v & F];
          e: for (; ; ) {
            if (v >>>= z = M >>> 24, E -= z, (z = M >>> 16 & 255) === 0) N[k++] = 65535 & M;
            else {
              if (!(16 & z)) {
                if (!(64 & z)) {
                  M = T[(65535 & M) + (v & (1 << z) - 1)];
                  continue e;
                }
                if (32 & z) {
                  n.mode = 12;
                  break t;
                }
                e.msg = "invalid literal/length code", n.mode = 30;
                break t;
              }
              $ = 65535 & M, (z &= 15) && (E < z && (v += r[l++] << E, E += 8), $ += v & (1 << z) - 1, v >>>= z, E -= z), E < 15 && (v += r[l++] << E, E += 8, v += r[l++] << E, E += 8), M = C[v & j];
              r: for (; ; ) {
                if (v >>>= z = M >>> 24, E -= z, !(16 & (z = M >>> 16 & 255))) {
                  if (!(64 & z)) {
                    M = C[(65535 & M) + (v & (1 << z) - 1)];
                    continue r;
                  }
                  e.msg = "invalid distance code", n.mode = 30;
                  break t;
                }
                if (it = 65535 & M, E < (z &= 15) && (v += r[l++] << E, (E += 8) < z && (v += r[l++] << E, E += 8)), u < (it += v & (1 << z) - 1)) {
                  e.msg = "invalid distance too far back", n.mode = 30;
                  break t;
                }
                if (v >>>= z, E -= z, (z = k - _) < it) {
                  if (o < (z = it - z) && n.sane) {
                    e.msg = "invalid distance too far back", n.mode = 30;
                    break t;
                  }
                  if (D = f, (S = 0) === p) {
                    if (S += w - z, z < $) {
                      for ($ -= z; N[k++] = f[S++], --z; ) ;
                      S = k - it, D = N;
                    }
                  } else if (p < z) {
                    if (S += w + p - z, (z -= p) < $) {
                      for ($ -= z; N[k++] = f[S++], --z; ) ;
                      if (S = 0, p < $) {
                        for ($ -= z = p; N[k++] = f[S++], --z; ) ;
                        S = k - it, D = N;
                      }
                    }
                  } else if (S += p - z, z < $) {
                    for ($ -= z; N[k++] = f[S++], --z; ) ;
                    S = k - it, D = N;
                  }
                  for (; 2 < $; ) N[k++] = D[S++], N[k++] = D[S++], N[k++] = D[S++], $ -= 3;
                  $ && (N[k++] = D[S++], 1 < $ && (N[k++] = D[S++]));
                } else {
                  for (S = k - it; N[k++] = N[S++], N[k++] = N[S++], N[k++] = N[S++], 2 < ($ -= 3); ) ;
                  $ && (N[k++] = N[S++], 1 < $ && (N[k++] = N[S++]));
                }
                break;
              }
            }
            break;
          }
        } while (l < y && k < b);
        l -= $ = E >> 3, v &= (1 << (E -= $ << 3)) - 1, e.next_in = l, e.next_out = k, e.avail_in = l < y ? y - l + 5 : 5 - (l - y), e.avail_out = k < b ? b - k + 257 : 257 - (k - b), n.hold = v, n.bits = E;
      };
    }, {}], 49: [function(i, g, c) {
      var e = i("../utils/common"), a = i("./adler32"), n = i("./crc32"), l = i("./inffast"), y = i("./inftrees"), k = 1, _ = 2, b = 0, u = -2, w = 1, o = 852, p = 592;
      function f(S) {
        return (S >>> 24 & 255) + (S >>> 8 & 65280) + ((65280 & S) << 8) + ((255 & S) << 24);
      }
      function v() {
        this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new e.Buf16(320), this.work = new e.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
      }
      function E(S) {
        var D;
        return S && S.state ? (D = S.state, S.total_in = S.total_out = D.total = 0, S.msg = "", D.wrap && (S.adler = 1 & D.wrap), D.mode = w, D.last = 0, D.havedict = 0, D.dmax = 32768, D.head = null, D.hold = 0, D.bits = 0, D.lencode = D.lendyn = new e.Buf32(o), D.distcode = D.distdyn = new e.Buf32(p), D.sane = 1, D.back = -1, b) : u;
      }
      function T(S) {
        var D;
        return S && S.state ? ((D = S.state).wsize = 0, D.whave = 0, D.wnext = 0, E(S)) : u;
      }
      function C(S, D) {
        var r, N;
        return S && S.state ? (N = S.state, D < 0 ? (r = 0, D = -D) : (r = 1 + (D >> 4), D < 48 && (D &= 15)), D && (D < 8 || 15 < D) ? u : (N.window !== null && N.wbits !== D && (N.window = null), N.wrap = r, N.wbits = D, T(S))) : u;
      }
      function F(S, D) {
        var r, N;
        return S ? (N = new v(), (S.state = N).window = null, (r = C(S, D)) !== b && (S.state = null), r) : u;
      }
      var j, M, z = !0;
      function $(S) {
        if (z) {
          var D;
          for (j = new e.Buf32(512), M = new e.Buf32(32), D = 0; D < 144; ) S.lens[D++] = 8;
          for (; D < 256; ) S.lens[D++] = 9;
          for (; D < 280; ) S.lens[D++] = 7;
          for (; D < 288; ) S.lens[D++] = 8;
          for (y(k, S.lens, 0, 288, j, 0, S.work, { bits: 9 }), D = 0; D < 32; ) S.lens[D++] = 5;
          y(_, S.lens, 0, 32, M, 0, S.work, { bits: 5 }), z = !1;
        }
        S.lencode = j, S.lenbits = 9, S.distcode = M, S.distbits = 5;
      }
      function it(S, D, r, N) {
        var at, L = S.state;
        return L.window === null && (L.wsize = 1 << L.wbits, L.wnext = 0, L.whave = 0, L.window = new e.Buf8(L.wsize)), N >= L.wsize ? (e.arraySet(L.window, D, r - L.wsize, L.wsize, 0), L.wnext = 0, L.whave = L.wsize) : (N < (at = L.wsize - L.wnext) && (at = N), e.arraySet(L.window, D, r - N, at, L.wnext), (N -= at) ? (e.arraySet(L.window, D, r - N, N, 0), L.wnext = N, L.whave = L.wsize) : (L.wnext += at, L.wnext === L.wsize && (L.wnext = 0), L.whave < L.wsize && (L.whave += at))), 0;
      }
      c.inflateReset = T, c.inflateReset2 = C, c.inflateResetKeep = E, c.inflateInit = function(S) {
        return F(S, 15);
      }, c.inflateInit2 = F, c.inflate = function(S, D) {
        var r, N, at, L, ut, V, nt, I, A, et, q, G, wt, tt, lt, ht, yt, _t, St, Tt, t, B, P, m, h = 0, R = new e.Buf8(4), U = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
        if (!S || !S.state || !S.output || !S.input && S.avail_in !== 0) return u;
        (r = S.state).mode === 12 && (r.mode = 13), ut = S.next_out, at = S.output, nt = S.avail_out, L = S.next_in, N = S.input, V = S.avail_in, I = r.hold, A = r.bits, et = V, q = nt, B = b;
        t: for (; ; ) switch (r.mode) {
          case w:
            if (r.wrap === 0) {
              r.mode = 13;
              break;
            }
            for (; A < 16; ) {
              if (V === 0) break t;
              V--, I += N[L++] << A, A += 8;
            }
            if (2 & r.wrap && I === 35615) {
              R[r.check = 0] = 255 & I, R[1] = I >>> 8 & 255, r.check = n(r.check, R, 2, 0), A = I = 0, r.mode = 2;
              break;
            }
            if (r.flags = 0, r.head && (r.head.done = !1), !(1 & r.wrap) || (((255 & I) << 8) + (I >> 8)) % 31) {
              S.msg = "incorrect header check", r.mode = 30;
              break;
            }
            if ((15 & I) != 8) {
              S.msg = "unknown compression method", r.mode = 30;
              break;
            }
            if (A -= 4, t = 8 + (15 & (I >>>= 4)), r.wbits === 0) r.wbits = t;
            else if (t > r.wbits) {
              S.msg = "invalid window size", r.mode = 30;
              break;
            }
            r.dmax = 1 << t, S.adler = r.check = 1, r.mode = 512 & I ? 10 : 12, A = I = 0;
            break;
          case 2:
            for (; A < 16; ) {
              if (V === 0) break t;
              V--, I += N[L++] << A, A += 8;
            }
            if (r.flags = I, (255 & r.flags) != 8) {
              S.msg = "unknown compression method", r.mode = 30;
              break;
            }
            if (57344 & r.flags) {
              S.msg = "unknown header flags set", r.mode = 30;
              break;
            }
            r.head && (r.head.text = I >> 8 & 1), 512 & r.flags && (R[0] = 255 & I, R[1] = I >>> 8 & 255, r.check = n(r.check, R, 2, 0)), A = I = 0, r.mode = 3;
          case 3:
            for (; A < 32; ) {
              if (V === 0) break t;
              V--, I += N[L++] << A, A += 8;
            }
            r.head && (r.head.time = I), 512 & r.flags && (R[0] = 255 & I, R[1] = I >>> 8 & 255, R[2] = I >>> 16 & 255, R[3] = I >>> 24 & 255, r.check = n(r.check, R, 4, 0)), A = I = 0, r.mode = 4;
          case 4:
            for (; A < 16; ) {
              if (V === 0) break t;
              V--, I += N[L++] << A, A += 8;
            }
            r.head && (r.head.xflags = 255 & I, r.head.os = I >> 8), 512 & r.flags && (R[0] = 255 & I, R[1] = I >>> 8 & 255, r.check = n(r.check, R, 2, 0)), A = I = 0, r.mode = 5;
          case 5:
            if (1024 & r.flags) {
              for (; A < 16; ) {
                if (V === 0) break t;
                V--, I += N[L++] << A, A += 8;
              }
              r.length = I, r.head && (r.head.extra_len = I), 512 & r.flags && (R[0] = 255 & I, R[1] = I >>> 8 & 255, r.check = n(r.check, R, 2, 0)), A = I = 0;
            } else r.head && (r.head.extra = null);
            r.mode = 6;
          case 6:
            if (1024 & r.flags && (V < (G = r.length) && (G = V), G && (r.head && (t = r.head.extra_len - r.length, r.head.extra || (r.head.extra = new Array(r.head.extra_len)), e.arraySet(r.head.extra, N, L, G, t)), 512 & r.flags && (r.check = n(r.check, N, G, L)), V -= G, L += G, r.length -= G), r.length)) break t;
            r.length = 0, r.mode = 7;
          case 7:
            if (2048 & r.flags) {
              if (V === 0) break t;
              for (G = 0; t = N[L + G++], r.head && t && r.length < 65536 && (r.head.name += String.fromCharCode(t)), t && G < V; ) ;
              if (512 & r.flags && (r.check = n(r.check, N, G, L)), V -= G, L += G, t) break t;
            } else r.head && (r.head.name = null);
            r.length = 0, r.mode = 8;
          case 8:
            if (4096 & r.flags) {
              if (V === 0) break t;
              for (G = 0; t = N[L + G++], r.head && t && r.length < 65536 && (r.head.comment += String.fromCharCode(t)), t && G < V; ) ;
              if (512 & r.flags && (r.check = n(r.check, N, G, L)), V -= G, L += G, t) break t;
            } else r.head && (r.head.comment = null);
            r.mode = 9;
          case 9:
            if (512 & r.flags) {
              for (; A < 16; ) {
                if (V === 0) break t;
                V--, I += N[L++] << A, A += 8;
              }
              if (I !== (65535 & r.check)) {
                S.msg = "header crc mismatch", r.mode = 30;
                break;
              }
              A = I = 0;
            }
            r.head && (r.head.hcrc = r.flags >> 9 & 1, r.head.done = !0), S.adler = r.check = 0, r.mode = 12;
            break;
          case 10:
            for (; A < 32; ) {
              if (V === 0) break t;
              V--, I += N[L++] << A, A += 8;
            }
            S.adler = r.check = f(I), A = I = 0, r.mode = 11;
          case 11:
            if (r.havedict === 0) return S.next_out = ut, S.avail_out = nt, S.next_in = L, S.avail_in = V, r.hold = I, r.bits = A, 2;
            S.adler = r.check = 1, r.mode = 12;
          case 12:
            if (D === 5 || D === 6) break t;
          case 13:
            if (r.last) {
              I >>>= 7 & A, A -= 7 & A, r.mode = 27;
              break;
            }
            for (; A < 3; ) {
              if (V === 0) break t;
              V--, I += N[L++] << A, A += 8;
            }
            switch (r.last = 1 & I, A -= 1, 3 & (I >>>= 1)) {
              case 0:
                r.mode = 14;
                break;
              case 1:
                if ($(r), r.mode = 20, D !== 6) break;
                I >>>= 2, A -= 2;
                break t;
              case 2:
                r.mode = 17;
                break;
              case 3:
                S.msg = "invalid block type", r.mode = 30;
            }
            I >>>= 2, A -= 2;
            break;
          case 14:
            for (I >>>= 7 & A, A -= 7 & A; A < 32; ) {
              if (V === 0) break t;
              V--, I += N[L++] << A, A += 8;
            }
            if ((65535 & I) != (I >>> 16 ^ 65535)) {
              S.msg = "invalid stored block lengths", r.mode = 30;
              break;
            }
            if (r.length = 65535 & I, A = I = 0, r.mode = 15, D === 6) break t;
          case 15:
            r.mode = 16;
          case 16:
            if (G = r.length) {
              if (V < G && (G = V), nt < G && (G = nt), G === 0) break t;
              e.arraySet(at, N, L, G, ut), V -= G, L += G, nt -= G, ut += G, r.length -= G;
              break;
            }
            r.mode = 12;
            break;
          case 17:
            for (; A < 14; ) {
              if (V === 0) break t;
              V--, I += N[L++] << A, A += 8;
            }
            if (r.nlen = 257 + (31 & I), I >>>= 5, A -= 5, r.ndist = 1 + (31 & I), I >>>= 5, A -= 5, r.ncode = 4 + (15 & I), I >>>= 4, A -= 4, 286 < r.nlen || 30 < r.ndist) {
              S.msg = "too many length or distance symbols", r.mode = 30;
              break;
            }
            r.have = 0, r.mode = 18;
          case 18:
            for (; r.have < r.ncode; ) {
              for (; A < 3; ) {
                if (V === 0) break t;
                V--, I += N[L++] << A, A += 8;
              }
              r.lens[U[r.have++]] = 7 & I, I >>>= 3, A -= 3;
            }
            for (; r.have < 19; ) r.lens[U[r.have++]] = 0;
            if (r.lencode = r.lendyn, r.lenbits = 7, P = { bits: r.lenbits }, B = y(0, r.lens, 0, 19, r.lencode, 0, r.work, P), r.lenbits = P.bits, B) {
              S.msg = "invalid code lengths set", r.mode = 30;
              break;
            }
            r.have = 0, r.mode = 19;
          case 19:
            for (; r.have < r.nlen + r.ndist; ) {
              for (; ht = (h = r.lencode[I & (1 << r.lenbits) - 1]) >>> 16 & 255, yt = 65535 & h, !((lt = h >>> 24) <= A); ) {
                if (V === 0) break t;
                V--, I += N[L++] << A, A += 8;
              }
              if (yt < 16) I >>>= lt, A -= lt, r.lens[r.have++] = yt;
              else {
                if (yt === 16) {
                  for (m = lt + 2; A < m; ) {
                    if (V === 0) break t;
                    V--, I += N[L++] << A, A += 8;
                  }
                  if (I >>>= lt, A -= lt, r.have === 0) {
                    S.msg = "invalid bit length repeat", r.mode = 30;
                    break;
                  }
                  t = r.lens[r.have - 1], G = 3 + (3 & I), I >>>= 2, A -= 2;
                } else if (yt === 17) {
                  for (m = lt + 3; A < m; ) {
                    if (V === 0) break t;
                    V--, I += N[L++] << A, A += 8;
                  }
                  A -= lt, t = 0, G = 3 + (7 & (I >>>= lt)), I >>>= 3, A -= 3;
                } else {
                  for (m = lt + 7; A < m; ) {
                    if (V === 0) break t;
                    V--, I += N[L++] << A, A += 8;
                  }
                  A -= lt, t = 0, G = 11 + (127 & (I >>>= lt)), I >>>= 7, A -= 7;
                }
                if (r.have + G > r.nlen + r.ndist) {
                  S.msg = "invalid bit length repeat", r.mode = 30;
                  break;
                }
                for (; G--; ) r.lens[r.have++] = t;
              }
            }
            if (r.mode === 30) break;
            if (r.lens[256] === 0) {
              S.msg = "invalid code -- missing end-of-block", r.mode = 30;
              break;
            }
            if (r.lenbits = 9, P = { bits: r.lenbits }, B = y(k, r.lens, 0, r.nlen, r.lencode, 0, r.work, P), r.lenbits = P.bits, B) {
              S.msg = "invalid literal/lengths set", r.mode = 30;
              break;
            }
            if (r.distbits = 6, r.distcode = r.distdyn, P = { bits: r.distbits }, B = y(_, r.lens, r.nlen, r.ndist, r.distcode, 0, r.work, P), r.distbits = P.bits, B) {
              S.msg = "invalid distances set", r.mode = 30;
              break;
            }
            if (r.mode = 20, D === 6) break t;
          case 20:
            r.mode = 21;
          case 21:
            if (6 <= V && 258 <= nt) {
              S.next_out = ut, S.avail_out = nt, S.next_in = L, S.avail_in = V, r.hold = I, r.bits = A, l(S, q), ut = S.next_out, at = S.output, nt = S.avail_out, L = S.next_in, N = S.input, V = S.avail_in, I = r.hold, A = r.bits, r.mode === 12 && (r.back = -1);
              break;
            }
            for (r.back = 0; ht = (h = r.lencode[I & (1 << r.lenbits) - 1]) >>> 16 & 255, yt = 65535 & h, !((lt = h >>> 24) <= A); ) {
              if (V === 0) break t;
              V--, I += N[L++] << A, A += 8;
            }
            if (ht && !(240 & ht)) {
              for (_t = lt, St = ht, Tt = yt; ht = (h = r.lencode[Tt + ((I & (1 << _t + St) - 1) >> _t)]) >>> 16 & 255, yt = 65535 & h, !(_t + (lt = h >>> 24) <= A); ) {
                if (V === 0) break t;
                V--, I += N[L++] << A, A += 8;
              }
              I >>>= _t, A -= _t, r.back += _t;
            }
            if (I >>>= lt, A -= lt, r.back += lt, r.length = yt, ht === 0) {
              r.mode = 26;
              break;
            }
            if (32 & ht) {
              r.back = -1, r.mode = 12;
              break;
            }
            if (64 & ht) {
              S.msg = "invalid literal/length code", r.mode = 30;
              break;
            }
            r.extra = 15 & ht, r.mode = 22;
          case 22:
            if (r.extra) {
              for (m = r.extra; A < m; ) {
                if (V === 0) break t;
                V--, I += N[L++] << A, A += 8;
              }
              r.length += I & (1 << r.extra) - 1, I >>>= r.extra, A -= r.extra, r.back += r.extra;
            }
            r.was = r.length, r.mode = 23;
          case 23:
            for (; ht = (h = r.distcode[I & (1 << r.distbits) - 1]) >>> 16 & 255, yt = 65535 & h, !((lt = h >>> 24) <= A); ) {
              if (V === 0) break t;
              V--, I += N[L++] << A, A += 8;
            }
            if (!(240 & ht)) {
              for (_t = lt, St = ht, Tt = yt; ht = (h = r.distcode[Tt + ((I & (1 << _t + St) - 1) >> _t)]) >>> 16 & 255, yt = 65535 & h, !(_t + (lt = h >>> 24) <= A); ) {
                if (V === 0) break t;
                V--, I += N[L++] << A, A += 8;
              }
              I >>>= _t, A -= _t, r.back += _t;
            }
            if (I >>>= lt, A -= lt, r.back += lt, 64 & ht) {
              S.msg = "invalid distance code", r.mode = 30;
              break;
            }
            r.offset = yt, r.extra = 15 & ht, r.mode = 24;
          case 24:
            if (r.extra) {
              for (m = r.extra; A < m; ) {
                if (V === 0) break t;
                V--, I += N[L++] << A, A += 8;
              }
              r.offset += I & (1 << r.extra) - 1, I >>>= r.extra, A -= r.extra, r.back += r.extra;
            }
            if (r.offset > r.dmax) {
              S.msg = "invalid distance too far back", r.mode = 30;
              break;
            }
            r.mode = 25;
          case 25:
            if (nt === 0) break t;
            if (G = q - nt, r.offset > G) {
              if ((G = r.offset - G) > r.whave && r.sane) {
                S.msg = "invalid distance too far back", r.mode = 30;
                break;
              }
              wt = G > r.wnext ? (G -= r.wnext, r.wsize - G) : r.wnext - G, G > r.length && (G = r.length), tt = r.window;
            } else tt = at, wt = ut - r.offset, G = r.length;
            for (nt < G && (G = nt), nt -= G, r.length -= G; at[ut++] = tt[wt++], --G; ) ;
            r.length === 0 && (r.mode = 21);
            break;
          case 26:
            if (nt === 0) break t;
            at[ut++] = r.length, nt--, r.mode = 21;
            break;
          case 27:
            if (r.wrap) {
              for (; A < 32; ) {
                if (V === 0) break t;
                V--, I |= N[L++] << A, A += 8;
              }
              if (q -= nt, S.total_out += q, r.total += q, q && (S.adler = r.check = r.flags ? n(r.check, at, q, ut - q) : a(r.check, at, q, ut - q)), q = nt, (r.flags ? I : f(I)) !== r.check) {
                S.msg = "incorrect data check", r.mode = 30;
                break;
              }
              A = I = 0;
            }
            r.mode = 28;
          case 28:
            if (r.wrap && r.flags) {
              for (; A < 32; ) {
                if (V === 0) break t;
                V--, I += N[L++] << A, A += 8;
              }
              if (I !== (4294967295 & r.total)) {
                S.msg = "incorrect length check", r.mode = 30;
                break;
              }
              A = I = 0;
            }
            r.mode = 29;
          case 29:
            B = 1;
            break t;
          case 30:
            B = -3;
            break t;
          case 31:
            return -4;
          case 32:
          default:
            return u;
        }
        return S.next_out = ut, S.avail_out = nt, S.next_in = L, S.avail_in = V, r.hold = I, r.bits = A, (r.wsize || q !== S.avail_out && r.mode < 30 && (r.mode < 27 || D !== 4)) && it(S, S.output, S.next_out, q - S.avail_out) ? (r.mode = 31, -4) : (et -= S.avail_in, q -= S.avail_out, S.total_in += et, S.total_out += q, r.total += q, r.wrap && q && (S.adler = r.check = r.flags ? n(r.check, at, q, S.next_out - q) : a(r.check, at, q, S.next_out - q)), S.data_type = r.bits + (r.last ? 64 : 0) + (r.mode === 12 ? 128 : 0) + (r.mode === 20 || r.mode === 15 ? 256 : 0), (et == 0 && q === 0 || D === 4) && B === b && (B = -5), B);
      }, c.inflateEnd = function(S) {
        if (!S || !S.state) return u;
        var D = S.state;
        return D.window && (D.window = null), S.state = null, b;
      }, c.inflateGetHeader = function(S, D) {
        var r;
        return S && S.state && 2 & (r = S.state).wrap ? ((r.head = D).done = !1, b) : u;
      }, c.inflateSetDictionary = function(S, D) {
        var r, N = D.length;
        return S && S.state ? (r = S.state).wrap !== 0 && r.mode !== 11 ? u : r.mode === 11 && a(1, D, N, 0) !== r.check ? -3 : it(S, D, N, N) ? (r.mode = 31, -4) : (r.havedict = 1, b) : u;
      }, c.inflateInfo = "pako inflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(i, g, c) {
      var e = i("../utils/common"), a = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], n = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], l = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], y = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
      g.exports = function(k, _, b, u, w, o, p, f) {
        var v, E, T, C, F, j, M, z, $, it = f.bits, S = 0, D = 0, r = 0, N = 0, at = 0, L = 0, ut = 0, V = 0, nt = 0, I = 0, A = null, et = 0, q = new e.Buf16(16), G = new e.Buf16(16), wt = null, tt = 0;
        for (S = 0; S <= 15; S++) q[S] = 0;
        for (D = 0; D < u; D++) q[_[b + D]]++;
        for (at = it, N = 15; 1 <= N && q[N] === 0; N--) ;
        if (N < at && (at = N), N === 0) return w[o++] = 20971520, w[o++] = 20971520, f.bits = 1, 0;
        for (r = 1; r < N && q[r] === 0; r++) ;
        for (at < r && (at = r), S = V = 1; S <= 15; S++) if (V <<= 1, (V -= q[S]) < 0) return -1;
        if (0 < V && (k === 0 || N !== 1)) return -1;
        for (G[1] = 0, S = 1; S < 15; S++) G[S + 1] = G[S] + q[S];
        for (D = 0; D < u; D++) _[b + D] !== 0 && (p[G[_[b + D]]++] = D);
        if (j = k === 0 ? (A = wt = p, 19) : k === 1 ? (A = a, et -= 257, wt = n, tt -= 257, 256) : (A = l, wt = y, -1), S = r, F = o, ut = D = I = 0, T = -1, C = (nt = 1 << (L = at)) - 1, k === 1 && 852 < nt || k === 2 && 592 < nt) return 1;
        for (; ; ) {
          for (M = S - ut, $ = p[D] < j ? (z = 0, p[D]) : p[D] > j ? (z = wt[tt + p[D]], A[et + p[D]]) : (z = 96, 0), v = 1 << S - ut, r = E = 1 << L; w[F + (I >> ut) + (E -= v)] = M << 24 | z << 16 | $ | 0, E !== 0; ) ;
          for (v = 1 << S - 1; I & v; ) v >>= 1;
          if (v !== 0 ? (I &= v - 1, I += v) : I = 0, D++, --q[S] == 0) {
            if (S === N) break;
            S = _[b + p[D]];
          }
          if (at < S && (I & C) !== T) {
            for (ut === 0 && (ut = at), F += r, V = 1 << (L = S - ut); L + ut < N && !((V -= q[L + ut]) <= 0); ) L++, V <<= 1;
            if (nt += 1 << L, k === 1 && 852 < nt || k === 2 && 592 < nt) return 1;
            w[T = I & C] = at << 24 | L << 16 | F - o | 0;
          }
        }
        return I !== 0 && (w[F + I] = S - ut << 24 | 64 << 16 | 0), f.bits = at, 0;
      };
    }, { "../utils/common": 41 }], 51: [function(i, g, c) {
      g.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
    }, {}], 52: [function(i, g, c) {
      var e = i("../utils/common"), a = 0, n = 1;
      function l(h) {
        for (var R = h.length; 0 <= --R; ) h[R] = 0;
      }
      var y = 0, k = 29, _ = 256, b = _ + 1 + k, u = 30, w = 19, o = 2 * b + 1, p = 15, f = 16, v = 7, E = 256, T = 16, C = 17, F = 18, j = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], M = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], z = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], $ = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], it = new Array(2 * (b + 2));
      l(it);
      var S = new Array(2 * u);
      l(S);
      var D = new Array(512);
      l(D);
      var r = new Array(256);
      l(r);
      var N = new Array(k);
      l(N);
      var at, L, ut, V = new Array(u);
      function nt(h, R, U, W, O) {
        this.static_tree = h, this.extra_bits = R, this.extra_base = U, this.elems = W, this.max_length = O, this.has_stree = h && h.length;
      }
      function I(h, R) {
        this.dyn_tree = h, this.max_code = 0, this.stat_desc = R;
      }
      function A(h) {
        return h < 256 ? D[h] : D[256 + (h >>> 7)];
      }
      function et(h, R) {
        h.pending_buf[h.pending++] = 255 & R, h.pending_buf[h.pending++] = R >>> 8 & 255;
      }
      function q(h, R, U) {
        h.bi_valid > f - U ? (h.bi_buf |= R << h.bi_valid & 65535, et(h, h.bi_buf), h.bi_buf = R >> f - h.bi_valid, h.bi_valid += U - f) : (h.bi_buf |= R << h.bi_valid & 65535, h.bi_valid += U);
      }
      function G(h, R, U) {
        q(h, U[2 * R], U[2 * R + 1]);
      }
      function wt(h, R) {
        for (var U = 0; U |= 1 & h, h >>>= 1, U <<= 1, 0 < --R; ) ;
        return U >>> 1;
      }
      function tt(h, R, U) {
        var W, O, Y = new Array(p + 1), J = 0;
        for (W = 1; W <= p; W++) Y[W] = J = J + U[W - 1] << 1;
        for (O = 0; O <= R; O++) {
          var X = h[2 * O + 1];
          X !== 0 && (h[2 * O] = wt(Y[X]++, X));
        }
      }
      function lt(h) {
        var R;
        for (R = 0; R < b; R++) h.dyn_ltree[2 * R] = 0;
        for (R = 0; R < u; R++) h.dyn_dtree[2 * R] = 0;
        for (R = 0; R < w; R++) h.bl_tree[2 * R] = 0;
        h.dyn_ltree[2 * E] = 1, h.opt_len = h.static_len = 0, h.last_lit = h.matches = 0;
      }
      function ht(h) {
        8 < h.bi_valid ? et(h, h.bi_buf) : 0 < h.bi_valid && (h.pending_buf[h.pending++] = h.bi_buf), h.bi_buf = 0, h.bi_valid = 0;
      }
      function yt(h, R, U, W) {
        var O = 2 * R, Y = 2 * U;
        return h[O] < h[Y] || h[O] === h[Y] && W[R] <= W[U];
      }
      function _t(h, R, U) {
        for (var W = h.heap[U], O = U << 1; O <= h.heap_len && (O < h.heap_len && yt(R, h.heap[O + 1], h.heap[O], h.depth) && O++, !yt(R, W, h.heap[O], h.depth)); ) h.heap[U] = h.heap[O], U = O, O <<= 1;
        h.heap[U] = W;
      }
      function St(h, R, U) {
        var W, O, Y, J, X = 0;
        if (h.last_lit !== 0) for (; W = h.pending_buf[h.d_buf + 2 * X] << 8 | h.pending_buf[h.d_buf + 2 * X + 1], O = h.pending_buf[h.l_buf + X], X++, W === 0 ? G(h, O, R) : (G(h, (Y = r[O]) + _ + 1, R), (J = j[Y]) !== 0 && q(h, O -= N[Y], J), G(h, Y = A(--W), U), (J = M[Y]) !== 0 && q(h, W -= V[Y], J)), X < h.last_lit; ) ;
        G(h, E, R);
      }
      function Tt(h, R) {
        var U, W, O, Y = R.dyn_tree, J = R.stat_desc.static_tree, X = R.stat_desc.has_stree, rt = R.stat_desc.elems, gt = -1;
        for (h.heap_len = 0, h.heap_max = o, U = 0; U < rt; U++) Y[2 * U] !== 0 ? (h.heap[++h.heap_len] = gt = U, h.depth[U] = 0) : Y[2 * U + 1] = 0;
        for (; h.heap_len < 2; ) Y[2 * (O = h.heap[++h.heap_len] = gt < 2 ? ++gt : 0)] = 1, h.depth[O] = 0, h.opt_len--, X && (h.static_len -= J[2 * O + 1]);
        for (R.max_code = gt, U = h.heap_len >> 1; 1 <= U; U--) _t(h, Y, U);
        for (O = rt; U = h.heap[1], h.heap[1] = h.heap[h.heap_len--], _t(h, Y, 1), W = h.heap[1], h.heap[--h.heap_max] = U, h.heap[--h.heap_max] = W, Y[2 * O] = Y[2 * U] + Y[2 * W], h.depth[O] = (h.depth[U] >= h.depth[W] ? h.depth[U] : h.depth[W]) + 1, Y[2 * U + 1] = Y[2 * W + 1] = O, h.heap[1] = O++, _t(h, Y, 1), 2 <= h.heap_len; ) ;
        h.heap[--h.heap_max] = h.heap[1], function(ft, Rt) {
          var Ft, Ot, Ut, bt, Mt, Gt, zt = Rt.dyn_tree, Vt = Rt.max_code, Xt = Rt.stat_desc.static_tree, Kt = Rt.stat_desc.has_stree, Wt = Rt.stat_desc.extra_bits, Ht = Rt.stat_desc.extra_base, Bt = Rt.stat_desc.max_length, $t = 0;
          for (bt = 0; bt <= p; bt++) ft.bl_count[bt] = 0;
          for (zt[2 * ft.heap[ft.heap_max] + 1] = 0, Ft = ft.heap_max + 1; Ft < o; Ft++) Bt < (bt = zt[2 * zt[2 * (Ot = ft.heap[Ft]) + 1] + 1] + 1) && (bt = Bt, $t++), zt[2 * Ot + 1] = bt, Vt < Ot || (ft.bl_count[bt]++, Mt = 0, Ht <= Ot && (Mt = Wt[Ot - Ht]), Gt = zt[2 * Ot], ft.opt_len += Gt * (bt + Mt), Kt && (ft.static_len += Gt * (Xt[2 * Ot + 1] + Mt)));
          if ($t !== 0) {
            do {
              for (bt = Bt - 1; ft.bl_count[bt] === 0; ) bt--;
              ft.bl_count[bt]--, ft.bl_count[bt + 1] += 2, ft.bl_count[Bt]--, $t -= 2;
            } while (0 < $t);
            for (bt = Bt; bt !== 0; bt--) for (Ot = ft.bl_count[bt]; Ot !== 0; ) Vt < (Ut = ft.heap[--Ft]) || (zt[2 * Ut + 1] !== bt && (ft.opt_len += (bt - zt[2 * Ut + 1]) * zt[2 * Ut], zt[2 * Ut + 1] = bt), Ot--);
          }
        }(h, R), tt(Y, gt, h.bl_count);
      }
      function t(h, R, U) {
        var W, O, Y = -1, J = R[1], X = 0, rt = 7, gt = 4;
        for (J === 0 && (rt = 138, gt = 3), R[2 * (U + 1) + 1] = 65535, W = 0; W <= U; W++) O = J, J = R[2 * (W + 1) + 1], ++X < rt && O === J || (X < gt ? h.bl_tree[2 * O] += X : O !== 0 ? (O !== Y && h.bl_tree[2 * O]++, h.bl_tree[2 * T]++) : X <= 10 ? h.bl_tree[2 * C]++ : h.bl_tree[2 * F]++, Y = O, gt = (X = 0) === J ? (rt = 138, 3) : O === J ? (rt = 6, 3) : (rt = 7, 4));
      }
      function B(h, R, U) {
        var W, O, Y = -1, J = R[1], X = 0, rt = 7, gt = 4;
        for (J === 0 && (rt = 138, gt = 3), W = 0; W <= U; W++) if (O = J, J = R[2 * (W + 1) + 1], !(++X < rt && O === J)) {
          if (X < gt) for (; G(h, O, h.bl_tree), --X != 0; ) ;
          else O !== 0 ? (O !== Y && (G(h, O, h.bl_tree), X--), G(h, T, h.bl_tree), q(h, X - 3, 2)) : X <= 10 ? (G(h, C, h.bl_tree), q(h, X - 3, 3)) : (G(h, F, h.bl_tree), q(h, X - 11, 7));
          Y = O, gt = (X = 0) === J ? (rt = 138, 3) : O === J ? (rt = 6, 3) : (rt = 7, 4);
        }
      }
      l(V);
      var P = !1;
      function m(h, R, U, W) {
        q(h, (y << 1) + (W ? 1 : 0), 3), function(O, Y, J, X) {
          ht(O), et(O, J), et(O, ~J), e.arraySet(O.pending_buf, O.window, Y, J, O.pending), O.pending += J;
        }(h, R, U);
      }
      c._tr_init = function(h) {
        P || (function() {
          var R, U, W, O, Y, J = new Array(p + 1);
          for (O = W = 0; O < k - 1; O++) for (N[O] = W, R = 0; R < 1 << j[O]; R++) r[W++] = O;
          for (r[W - 1] = O, O = Y = 0; O < 16; O++) for (V[O] = Y, R = 0; R < 1 << M[O]; R++) D[Y++] = O;
          for (Y >>= 7; O < u; O++) for (V[O] = Y << 7, R = 0; R < 1 << M[O] - 7; R++) D[256 + Y++] = O;
          for (U = 0; U <= p; U++) J[U] = 0;
          for (R = 0; R <= 143; ) it[2 * R + 1] = 8, R++, J[8]++;
          for (; R <= 255; ) it[2 * R + 1] = 9, R++, J[9]++;
          for (; R <= 279; ) it[2 * R + 1] = 7, R++, J[7]++;
          for (; R <= 287; ) it[2 * R + 1] = 8, R++, J[8]++;
          for (tt(it, b + 1, J), R = 0; R < u; R++) S[2 * R + 1] = 5, S[2 * R] = wt(R, 5);
          at = new nt(it, j, _ + 1, b, p), L = new nt(S, M, 0, u, p), ut = new nt(new Array(0), z, 0, w, v);
        }(), P = !0), h.l_desc = new I(h.dyn_ltree, at), h.d_desc = new I(h.dyn_dtree, L), h.bl_desc = new I(h.bl_tree, ut), h.bi_buf = 0, h.bi_valid = 0, lt(h);
      }, c._tr_stored_block = m, c._tr_flush_block = function(h, R, U, W) {
        var O, Y, J = 0;
        0 < h.level ? (h.strm.data_type === 2 && (h.strm.data_type = function(X) {
          var rt, gt = 4093624447;
          for (rt = 0; rt <= 31; rt++, gt >>>= 1) if (1 & gt && X.dyn_ltree[2 * rt] !== 0) return a;
          if (X.dyn_ltree[18] !== 0 || X.dyn_ltree[20] !== 0 || X.dyn_ltree[26] !== 0) return n;
          for (rt = 32; rt < _; rt++) if (X.dyn_ltree[2 * rt] !== 0) return n;
          return a;
        }(h)), Tt(h, h.l_desc), Tt(h, h.d_desc), J = function(X) {
          var rt;
          for (t(X, X.dyn_ltree, X.l_desc.max_code), t(X, X.dyn_dtree, X.d_desc.max_code), Tt(X, X.bl_desc), rt = w - 1; 3 <= rt && X.bl_tree[2 * $[rt] + 1] === 0; rt--) ;
          return X.opt_len += 3 * (rt + 1) + 5 + 5 + 4, rt;
        }(h), O = h.opt_len + 3 + 7 >>> 3, (Y = h.static_len + 3 + 7 >>> 3) <= O && (O = Y)) : O = Y = U + 5, U + 4 <= O && R !== -1 ? m(h, R, U, W) : h.strategy === 4 || Y === O ? (q(h, 2 + (W ? 1 : 0), 3), St(h, it, S)) : (q(h, 4 + (W ? 1 : 0), 3), function(X, rt, gt, ft) {
          var Rt;
          for (q(X, rt - 257, 5), q(X, gt - 1, 5), q(X, ft - 4, 4), Rt = 0; Rt < ft; Rt++) q(X, X.bl_tree[2 * $[Rt] + 1], 3);
          B(X, X.dyn_ltree, rt - 1), B(X, X.dyn_dtree, gt - 1);
        }(h, h.l_desc.max_code + 1, h.d_desc.max_code + 1, J + 1), St(h, h.dyn_ltree, h.dyn_dtree)), lt(h), W && ht(h);
      }, c._tr_tally = function(h, R, U) {
        return h.pending_buf[h.d_buf + 2 * h.last_lit] = R >>> 8 & 255, h.pending_buf[h.d_buf + 2 * h.last_lit + 1] = 255 & R, h.pending_buf[h.l_buf + h.last_lit] = 255 & U, h.last_lit++, R === 0 ? h.dyn_ltree[2 * U]++ : (h.matches++, R--, h.dyn_ltree[2 * (r[U] + _ + 1)]++, h.dyn_dtree[2 * A(R)]++), h.last_lit === h.lit_bufsize - 1;
      }, c._tr_align = function(h) {
        q(h, 2, 3), G(h, E, it), function(R) {
          R.bi_valid === 16 ? (et(R, R.bi_buf), R.bi_buf = 0, R.bi_valid = 0) : 8 <= R.bi_valid && (R.pending_buf[R.pending++] = 255 & R.bi_buf, R.bi_buf >>= 8, R.bi_valid -= 8);
        }(h);
      };
    }, { "../utils/common": 41 }], 53: [function(i, g, c) {
      g.exports = function() {
        this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
      };
    }, {}], 54: [function(i, g, c) {
      (function(e) {
        (function(a, n) {
          if (!a.setImmediate) {
            var l, y, k, _, b = 1, u = {}, w = !1, o = a.document, p = Object.getPrototypeOf && Object.getPrototypeOf(a);
            p = p && p.setTimeout ? p : a, l = {}.toString.call(a.process) === "[object process]" ? function(T) {
              process.nextTick(function() {
                v(T);
              });
            } : function() {
              if (a.postMessage && !a.importScripts) {
                var T = !0, C = a.onmessage;
                return a.onmessage = function() {
                  T = !1;
                }, a.postMessage("", "*"), a.onmessage = C, T;
              }
            }() ? (_ = "setImmediate$" + Math.random() + "$", a.addEventListener ? a.addEventListener("message", E, !1) : a.attachEvent("onmessage", E), function(T) {
              a.postMessage(_ + T, "*");
            }) : a.MessageChannel ? ((k = new MessageChannel()).port1.onmessage = function(T) {
              v(T.data);
            }, function(T) {
              k.port2.postMessage(T);
            }) : o && "onreadystatechange" in o.createElement("script") ? (y = o.documentElement, function(T) {
              var C = o.createElement("script");
              C.onreadystatechange = function() {
                v(T), C.onreadystatechange = null, y.removeChild(C), C = null;
              }, y.appendChild(C);
            }) : function(T) {
              setTimeout(v, 0, T);
            }, p.setImmediate = function(T) {
              typeof T != "function" && (T = new Function("" + T));
              for (var C = new Array(arguments.length - 1), F = 0; F < C.length; F++) C[F] = arguments[F + 1];
              var j = { callback: T, args: C };
              return u[b] = j, l(b), b++;
            }, p.clearImmediate = f;
          }
          function f(T) {
            delete u[T];
          }
          function v(T) {
            if (w) setTimeout(v, 0, T);
            else {
              var C = u[T];
              if (C) {
                w = !0;
                try {
                  (function(F) {
                    var j = F.callback, M = F.args;
                    switch (M.length) {
                      case 0:
                        j();
                        break;
                      case 1:
                        j(M[0]);
                        break;
                      case 2:
                        j(M[0], M[1]);
                        break;
                      case 3:
                        j(M[0], M[1], M[2]);
                        break;
                      default:
                        j.apply(n, M);
                    }
                  })(C);
                } finally {
                  f(T), w = !1;
                }
              }
            }
          }
          function E(T) {
            T.source === a && typeof T.data == "string" && T.data.indexOf(_) === 0 && v(+T.data.slice(_.length));
          }
        })(typeof self > "u" ? e === void 0 ? this : e : self);
      }).call(this, typeof fe < "u" ? fe : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}] }, {}, [10])(10);
  });
})(We);
var ar = We.exports;
const sr = /* @__PURE__ */ rr(ar);
function or(s = {}) {
  const {
    storageKey: d = "page-reviews",
    defaultPagePath: i = () => typeof window < "u" ? window.location.pathname + window.location.search : "/"
  } = s;
  function g() {
    return "rv-" + Date.now() + "-" + Math.random().toString(36).slice(2, 8);
  }
  function c() {
    if (typeof window > "u") return [];
    try {
      const E = window.localStorage.getItem(d);
      return E ? JSON.parse(E) : [];
    } catch {
      return [];
    }
  }
  function e(E) {
    if (!(typeof window > "u"))
      try {
        window.localStorage.setItem(d, JSON.stringify(E));
      } catch {
      }
  }
  const [a, n] = Lt(c), l = mt(() => a, [a]), y = mt((E) => {
    const T = E || i();
    return a.filter((C) => C.pagePath === T);
  }, [a, i]), k = mt((E) => {
    const T = {
      id: g(),
      ...E,
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    return n((C) => {
      const F = [T, ...C];
      return e(F), F;
    }), T;
  }, []), _ = mt((E, T) => {
    n((C) => {
      const F = C.map((j) => j.id === E ? { ...j, ...T } : j);
      return e(F), F;
    });
  }, []), b = mt((E) => {
    n((T) => {
      const C = T.filter((F) => F.id !== E);
      return e(C), C;
    });
  }, []), u = mt((E) => {
    const T = E || i();
    n((C) => {
      const F = C.filter((j) => j.pagePath !== T);
      return e(F), F;
    });
  }, [i]), w = mt(() => {
    n([]), e([]);
  }, []), o = mt(() => ({
    exportTime: (/* @__PURE__ */ new Date()).toISOString(),
    total: a.length,
    reviews: a
  }), [a]), p = mt(() => {
    _e(
      new Blob([JSON.stringify(o(), null, 2)], { type: "application/json" }),
      `page-reviews-${ye()}.json`
    );
  }, [o]), f = mt(() => {
    const E = Ae(o());
    _e(
      new Blob([E], { type: "text/markdown" }),
      `page-reviews-${ye()}.md`
    );
  }, [o]), v = mt(async () => {
    const E = new sr(), T = o(), C = {
      ...T,
      reviews: T.reviews.map((M) => {
        var z;
        return {
          ...M,
          screenshots: (z = M.screenshots) == null ? void 0 : z.map(($) => $.url ? { type: $.type, filename: $.filename, url: $.url } : { type: $.type, filename: $.filename, imagePath: `images/${$.filename}` })
        };
      })
    };
    E.file("review.json", JSON.stringify(C, null, 2)), E.file("review.md", Ae(C));
    const F = E.folder("images");
    for (const M of T.reviews)
      for (const z of M.screenshots || [])
        if (z.data && !z.url) {
          const $ = z.data.replace(/^data:image\/png;base64,/, "");
          F.file(z.filename, $, { base64: !0 });
        }
    const j = await E.generateAsync({ type: "blob" });
    _e(j, `page-reviews-${ye()}.zip`);
  }, [o]);
  return {
    reviews: a,
    allReviews: l,
    getPageReviews: y,
    addReview: k,
    updateReview: _,
    deleteReview: b,
    clearPageReviews: u,
    clearAllReviews: w,
    exportToJSON: p,
    exportToMarkdown: f,
    exportToZIP: v
  };
}
function Ae(s) {
  const d = [
    "# 页面评审报告",
    "",
    `导出时间：${(/* @__PURE__ */ new Date()).toLocaleString()}`,
    `评审总数：${s.total}`,
    ""
  ], i = ur(s.reviews, "pagePath");
  return Object.entries(i).forEach(([g, c]) => {
    d.push(`## 页面：${g}`), d.push(""), c.forEach((e, a) => {
      var n, l;
      d.push(`### ${a + 1}. ${e.title || "未命名评审"}`), d.push(`- **类型**：${e.type === "element" ? "元素评审" : "视图范围评审"}`), d.push(`- **严重等级**：${lr(e.severity)}`), d.push(`- **状态**：${e.status === "resolved" ? "已解决" : "待处理"}`), d.push(`- **窗口尺寸**：${(n = e.viewport) == null ? void 0 : n.width} × ${(l = e.viewport) == null ? void 0 : l.height}`), e.scroll && d.push(`- **滚动位置**：x=${e.scroll.x}, y=${e.scroll.y}`), e.type === "element" && e.elementRect ? (d.push(`- **元素选择器**：\`${e.selector}\``), d.push(`- **元素位置**：x=${e.elementRect.x}, y=${e.elementRect.y}, width=${e.elementRect.width}, height=${e.elementRect.height}`), e.elementText && d.push(`- **元素文本**：${e.elementText}`)) : e.viewportRect && d.push(`- **框选范围**：x=${e.viewportRect.x}, y=${e.viewportRect.y}, width=${e.viewportRect.width}, height=${e.viewportRect.height}`), d.push(`- **评审建议**：${e.suggestion}`), d.push(`- **创建时间**：${new Date(e.createdAt).toLocaleString()}`), e.screenshots && e.screenshots.length > 0 && (d.push(""), d.push("#### 截图"), e.screenshots.forEach((y) => {
        const k = y.url || y.imagePath || `images/${y.filename}`;
        d.push(`![${y.type}](${k})`);
      })), d.push("");
    });
  }), d.join(`
`);
}
function _e(s, d) {
  if (typeof window > "u") return;
  const i = URL.createObjectURL(s), g = document.createElement("a");
  g.href = i, g.download = d, document.body.appendChild(g), g.click(), document.body.removeChild(g), URL.revokeObjectURL(i);
}
function ye() {
  const s = /* @__PURE__ */ new Date();
  return `${s.getFullYear()}${de(s.getMonth() + 1)}${de(s.getDate())}-${de(s.getHours())}${de(s.getMinutes())}`;
}
function de(s) {
  return String(s).padStart(2, "0");
}
function lr(s) {
  return { low: "低", medium: "中", high: "高", critical: "严重" }[s] || s;
}
function ur(s, d) {
  return s.reduce((i, g) => {
    const c = g[d] || "unknown";
    return i[c] || (i[c] = []), i[c].push(g), i;
  }, {});
}
function cr(s, d) {
  if (s.match(/^[a-z]+:\/\//i))
    return s;
  if (s.match(/^\/\//))
    return window.location.protocol + s;
  if (s.match(/^[a-z]+:/i))
    return s;
  const i = document.implementation.createHTMLDocument(), g = i.createElement("base"), c = i.createElement("a");
  return i.head.appendChild(g), i.body.appendChild(c), d && (g.href = d), c.href = s, c.href;
}
const fr = /* @__PURE__ */ (() => {
  let s = 0;
  const d = () => (
    // eslint-disable-next-line no-bitwise
    `0000${(Math.random() * 36 ** 4 << 0).toString(36)}`.slice(-4)
  );
  return () => (s += 1, `u${d()}${s}`);
})();
function Yt(s) {
  const d = [];
  for (let i = 0, g = s.length; i < g; i++)
    d.push(s[i]);
  return d;
}
let Qt = null;
function Me(s = {}) {
  return Qt || (s.includeStyleProperties ? (Qt = s.includeStyleProperties, Qt) : (Qt = Yt(window.getComputedStyle(document.documentElement)), Qt));
}
function pe(s, d) {
  const g = (s.ownerDocument.defaultView || window).getComputedStyle(s).getPropertyValue(d);
  return g ? parseFloat(g.replace("px", "")) : 0;
}
function hr(s) {
  const d = pe(s, "border-left-width"), i = pe(s, "border-right-width");
  return s.clientWidth + d + i;
}
function dr(s) {
  const d = pe(s, "border-top-width"), i = pe(s, "border-bottom-width");
  return s.clientHeight + d + i;
}
function $e(s, d = {}) {
  const i = d.width || hr(s), g = d.height || dr(s);
  return { width: i, height: g };
}
function pr() {
  let s, d;
  try {
    d = process;
  } catch {
  }
  const i = d && d.env ? d.env.devicePixelRatio : null;
  return i && (s = parseInt(i, 10), Number.isNaN(s) && (s = 1)), s || window.devicePixelRatio || 1;
}
const Dt = 16384;
function mr(s) {
  (s.width > Dt || s.height > Dt) && (s.width > Dt && s.height > Dt ? s.width > s.height ? (s.height *= Dt / s.width, s.width = Dt) : (s.width *= Dt / s.height, s.height = Dt) : s.width > Dt ? (s.height *= Dt / s.width, s.width = Dt) : (s.width *= Dt / s.height, s.height = Dt));
}
function me(s) {
  return new Promise((d, i) => {
    const g = new Image();
    g.onload = () => {
      g.decode().then(() => {
        requestAnimationFrame(() => d(g));
      });
    }, g.onerror = i, g.crossOrigin = "anonymous", g.decoding = "async", g.src = s;
  });
}
async function gr(s) {
  return Promise.resolve().then(() => new XMLSerializer().serializeToString(s)).then(encodeURIComponent).then((d) => `data:image/svg+xml;charset=utf-8,${d}`);
}
async function vr(s, d, i) {
  const g = "http://www.w3.org/2000/svg", c = document.createElementNS(g, "svg"), e = document.createElementNS(g, "foreignObject");
  return c.setAttribute("width", `${d}`), c.setAttribute("height", `${i}`), c.setAttribute("viewBox", `0 0 ${d} ${i}`), e.setAttribute("width", "100%"), e.setAttribute("height", "100%"), e.setAttribute("x", "0"), e.setAttribute("y", "0"), e.setAttribute("externalResourcesRequired", "true"), c.appendChild(e), e.appendChild(s), gr(c);
}
const jt = (s, d) => {
  if (s instanceof d)
    return !0;
  const i = Object.getPrototypeOf(s);
  return i === null ? !1 : i.constructor.name === d.name || jt(i, d);
};
function wr(s) {
  const d = s.getPropertyValue("content");
  return `${s.cssText} content: '${d.replace(/'|"/g, "")}';`;
}
function _r(s, d) {
  return Me(d).map((i) => {
    const g = s.getPropertyValue(i), c = s.getPropertyPriority(i);
    return `${i}: ${g}${c ? " !important" : ""};`;
  }).join(" ");
}
function yr(s, d, i, g) {
  const c = `.${s}:${d}`, e = i.cssText ? wr(i) : _r(i, g);
  return document.createTextNode(`${c}{${e}}`);
}
function ze(s, d, i, g) {
  const c = window.getComputedStyle(s, i), e = c.getPropertyValue("content");
  if (e === "" || e === "none")
    return;
  const a = fr();
  try {
    d.className = `${d.className} ${a}`;
  } catch {
    return;
  }
  const n = document.createElement("style");
  n.appendChild(yr(a, i, c, g)), d.appendChild(n);
}
function br(s, d, i) {
  ze(s, d, ":before", i), ze(s, d, ":after", i);
}
const Ie = "application/font-woff", Pe = "image/jpeg", xr = {
  woff: Ie,
  woff2: Ie,
  ttf: "application/font-truetype",
  eot: "application/vnd.ms-fontobject",
  png: "image/png",
  jpg: Pe,
  jpeg: Pe,
  gif: "image/gif",
  tiff: "image/tiff",
  svg: "image/svg+xml",
  webp: "image/webp"
};
function kr(s) {
  const d = /\.([^./]*?)$/g.exec(s);
  return d ? d[1] : "";
}
function Se(s) {
  const d = kr(s).toLowerCase();
  return xr[d] || "";
}
function Sr(s) {
  return s.split(/,/)[1];
}
function ke(s) {
  return s.search(/^(data:)/) !== -1;
}
function Er(s, d) {
  return `data:${d};base64,${s}`;
}
async function Ze(s, d, i) {
  const g = await fetch(s, d);
  if (g.status === 404)
    throw new Error(`Resource "${g.url}" not found`);
  const c = await g.blob();
  return new Promise((e, a) => {
    const n = new FileReader();
    n.onerror = a, n.onloadend = () => {
      try {
        e(i({ res: g, result: n.result }));
      } catch (l) {
        a(l);
      }
    }, n.readAsDataURL(c);
  });
}
const be = {};
function Rr(s, d, i) {
  let g = s.replace(/\?.*/, "");
  return i && (g = s), /ttf|otf|eot|woff2?/i.test(g) && (g = g.replace(/.*\//, "")), d ? `[${d}]${g}` : g;
}
async function Ee(s, d, i) {
  const g = Rr(s, d, i.includeQueryParams);
  if (be[g] != null)
    return be[g];
  i.cacheBust && (s += (/\?/.test(s) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime());
  let c;
  try {
    const e = await Ze(s, i.fetchRequestInit, ({ res: a, result: n }) => (d || (d = a.headers.get("Content-Type") || ""), Sr(n)));
    c = Er(e, d);
  } catch (e) {
    c = i.imagePlaceholder || "";
    let a = `Failed to fetch resource: ${s}`;
    e && (a = typeof e == "string" ? e : e.message), a && console.warn(a);
  }
  return be[g] = c, c;
}
async function Cr(s) {
  const d = s.toDataURL();
  return d === "data:," ? s.cloneNode(!1) : me(d);
}
async function Tr(s, d) {
  if (s.currentSrc) {
    const e = document.createElement("canvas"), a = e.getContext("2d");
    e.width = s.clientWidth, e.height = s.clientHeight, a == null || a.drawImage(s, 0, 0, e.width, e.height);
    const n = e.toDataURL();
    return me(n);
  }
  const i = s.poster, g = Se(i), c = await Ee(i, g, d);
  return me(c);
}
async function Or(s, d) {
  var i;
  try {
    if (!((i = s == null ? void 0 : s.contentDocument) === null || i === void 0) && i.body)
      return await ge(s.contentDocument.body, d, !0);
  } catch {
  }
  return s.cloneNode(!1);
}
async function Ar(s, d) {
  return jt(s, HTMLCanvasElement) ? Cr(s) : jt(s, HTMLVideoElement) ? Tr(s, d) : jt(s, HTMLIFrameElement) ? Or(s, d) : s.cloneNode(He(s));
}
const zr = (s) => s.tagName != null && s.tagName.toUpperCase() === "SLOT", He = (s) => s.tagName != null && s.tagName.toUpperCase() === "SVG";
async function Ir(s, d, i) {
  var g, c;
  if (He(d))
    return d;
  let e = [];
  return zr(s) && s.assignedNodes ? e = Yt(s.assignedNodes()) : jt(s, HTMLIFrameElement) && (!((g = s.contentDocument) === null || g === void 0) && g.body) ? e = Yt(s.contentDocument.body.childNodes) : e = Yt(((c = s.shadowRoot) !== null && c !== void 0 ? c : s).childNodes), e.length === 0 || jt(s, HTMLVideoElement) || await e.reduce((a, n) => a.then(() => ge(n, i)).then((l) => {
    l && d.appendChild(l);
  }), Promise.resolve()), d;
}
function Pr(s, d, i) {
  const g = d.style;
  if (!g)
    return;
  const c = window.getComputedStyle(s);
  c.cssText ? (g.cssText = c.cssText, g.transformOrigin = c.transformOrigin) : Me(i).forEach((e) => {
    let a = c.getPropertyValue(e);
    e === "font-size" && a.endsWith("px") && (a = `${Math.floor(parseFloat(a.substring(0, a.length - 2))) - 0.1}px`), jt(s, HTMLIFrameElement) && e === "display" && a === "inline" && (a = "block"), e === "d" && d.getAttribute("d") && (a = `path(${d.getAttribute("d")})`), g.setProperty(e, a, c.getPropertyPriority(e));
  });
}
function jr(s, d) {
  jt(s, HTMLTextAreaElement) && (d.innerHTML = s.value), jt(s, HTMLInputElement) && d.setAttribute("value", s.value);
}
function Dr(s, d) {
  if (jt(s, HTMLSelectElement)) {
    const i = d, g = Array.from(i.children).find((c) => s.value === c.getAttribute("value"));
    g && g.setAttribute("selected", "");
  }
}
function Fr(s, d, i) {
  return jt(d, Element) && (Pr(s, d, i), br(s, d, i), jr(s, d), Dr(s, d)), d;
}
async function Br(s, d) {
  const i = s.querySelectorAll ? s.querySelectorAll("use") : [];
  if (i.length === 0)
    return s;
  const g = {};
  for (let e = 0; e < i.length; e++) {
    const n = i[e].getAttribute("xlink:href");
    if (n) {
      const l = s.querySelector(n), y = document.querySelector(n);
      !l && y && !g[n] && (g[n] = await ge(y, d, !0));
    }
  }
  const c = Object.values(g);
  if (c.length) {
    const e = "http://www.w3.org/1999/xhtml", a = document.createElementNS(e, "svg");
    a.setAttribute("xmlns", e), a.style.position = "absolute", a.style.width = "0", a.style.height = "0", a.style.overflow = "hidden", a.style.display = "none";
    const n = document.createElementNS(e, "defs");
    a.appendChild(n);
    for (let l = 0; l < c.length; l++)
      n.appendChild(c[l]);
    s.appendChild(a);
  }
  return s;
}
async function ge(s, d, i) {
  return !i && d.filter && !d.filter(s) ? null : Promise.resolve(s).then((g) => Ar(g, d)).then((g) => Ir(s, g, d)).then((g) => Fr(s, g, d)).then((g) => Br(g, d));
}
const Ve = /url\((['"]?)([^'"]+?)\1\)/g, Nr = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g, Lr = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function Ur(s) {
  const d = s.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
  return new RegExp(`(url\\(['"]?)(${d})(['"]?\\))`, "g");
}
function Wr(s) {
  const d = [];
  return s.replace(Ve, (i, g, c) => (d.push(c), i)), d.filter((i) => !ke(i));
}
async function Mr(s, d, i, g, c) {
  try {
    const e = i ? cr(d, i) : d, a = Se(d);
    let n;
    return c || (n = await Ee(e, a, g)), s.replace(Ur(d), `$1${n}$3`);
  } catch {
  }
  return s;
}
function $r(s, { preferredFontFormat: d }) {
  return d ? s.replace(Lr, (i) => {
    for (; ; ) {
      const [g, , c] = Nr.exec(i) || [];
      if (!c)
        return "";
      if (c === d)
        return `src: ${g};`;
    }
  }) : s;
}
function Ye(s) {
  return s.search(Ve) !== -1;
}
async function Ge(s, d, i) {
  if (!Ye(s))
    return s;
  const g = $r(s, i);
  return Wr(g).reduce((e, a) => e.then((n) => Mr(n, a, d, i)), Promise.resolve(g));
}
async function te(s, d, i) {
  var g;
  const c = (g = d.style) === null || g === void 0 ? void 0 : g.getPropertyValue(s);
  if (c) {
    const e = await Ge(c, null, i);
    return d.style.setProperty(s, e, d.style.getPropertyPriority(s)), !0;
  }
  return !1;
}
async function Zr(s, d) {
  await te("background", s, d) || await te("background-image", s, d), await te("mask", s, d) || await te("-webkit-mask", s, d) || await te("mask-image", s, d) || await te("-webkit-mask-image", s, d);
}
async function Hr(s, d) {
  const i = jt(s, HTMLImageElement);
  if (!(i && !ke(s.src)) && !(jt(s, SVGImageElement) && !ke(s.href.baseVal)))
    return;
  const g = i ? s.src : s.href.baseVal, c = await Ee(g, Se(g), d);
  await new Promise((e, a) => {
    s.onload = e, s.onerror = d.onImageErrorHandler ? (...l) => {
      try {
        e(d.onImageErrorHandler(...l));
      } catch (y) {
        a(y);
      }
    } : a;
    const n = s;
    n.decode && (n.decode = e), n.loading === "lazy" && (n.loading = "eager"), i ? (s.srcset = "", s.src = c) : s.href.baseVal = c;
  });
}
async function Vr(s, d) {
  const g = Yt(s.childNodes).map((c) => Xe(c, d));
  await Promise.all(g).then(() => s);
}
async function Xe(s, d) {
  jt(s, Element) && (await Zr(s, d), await Hr(s, d), await Vr(s, d));
}
function Yr(s, d) {
  const { style: i } = s;
  d.backgroundColor && (i.backgroundColor = d.backgroundColor), d.width && (i.width = `${d.width}px`), d.height && (i.height = `${d.height}px`);
  const g = d.style;
  return g != null && Object.keys(g).forEach((c) => {
    i[c] = g[c];
  }), s;
}
const je = {};
async function De(s) {
  let d = je[s];
  if (d != null)
    return d;
  const g = await (await fetch(s)).text();
  return d = { url: s, cssText: g }, je[s] = d, d;
}
async function Fe(s, d) {
  let i = s.cssText;
  const g = /url\(["']?([^"')]+)["']?\)/g, e = (i.match(/url\([^)]+\)/g) || []).map(async (a) => {
    let n = a.replace(g, "$1");
    return n.startsWith("https://") || (n = new URL(n, s.url).href), Ze(n, d.fetchRequestInit, ({ result: l }) => (i = i.replace(a, `url(${l})`), [a, l]));
  });
  return Promise.all(e).then(() => i);
}
function Be(s) {
  if (s == null)
    return [];
  const d = [], i = /(\/\*[\s\S]*?\*\/)/gi;
  let g = s.replace(i, "");
  const c = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
  for (; ; ) {
    const l = c.exec(g);
    if (l === null)
      break;
    d.push(l[0]);
  }
  g = g.replace(c, "");
  const e = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi, a = "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", n = new RegExp(a, "gi");
  for (; ; ) {
    let l = e.exec(g);
    if (l === null) {
      if (l = n.exec(g), l === null)
        break;
      e.lastIndex = n.lastIndex;
    } else
      n.lastIndex = e.lastIndex;
    d.push(l[0]);
  }
  return d;
}
async function Gr(s, d) {
  const i = [], g = [];
  return s.forEach((c) => {
    if ("cssRules" in c)
      try {
        Yt(c.cssRules || []).forEach((e, a) => {
          if (e.type === CSSRule.IMPORT_RULE) {
            let n = a + 1;
            const l = e.href, y = De(l).then((k) => Fe(k, d)).then((k) => Be(k).forEach((_) => {
              try {
                c.insertRule(_, _.startsWith("@import") ? n += 1 : c.cssRules.length);
              } catch (b) {
                console.error("Error inserting rule from remote css", {
                  rule: _,
                  error: b
                });
              }
            })).catch((k) => {
              console.error("Error loading remote css", k.toString());
            });
            g.push(y);
          }
        });
      } catch (e) {
        const a = s.find((n) => n.href == null) || document.styleSheets[0];
        c.href != null && g.push(De(c.href).then((n) => Fe(n, d)).then((n) => Be(n).forEach((l) => {
          a.insertRule(l, a.cssRules.length);
        })).catch((n) => {
          console.error("Error loading remote stylesheet", n);
        })), console.error("Error inlining remote css file", e);
      }
  }), Promise.all(g).then(() => (s.forEach((c) => {
    if ("cssRules" in c)
      try {
        Yt(c.cssRules || []).forEach((e) => {
          i.push(e);
        });
      } catch (e) {
        console.error(`Error while reading CSS rules from ${c.href}`, e);
      }
  }), i));
}
function Xr(s) {
  return s.filter((d) => d.type === CSSRule.FONT_FACE_RULE).filter((d) => Ye(d.style.getPropertyValue("src")));
}
async function Kr(s, d) {
  if (s.ownerDocument == null)
    throw new Error("Provided element is not within a Document");
  const i = Yt(s.ownerDocument.styleSheets), g = await Gr(i, d);
  return Xr(g);
}
function Ke(s) {
  return s.trim().replace(/["']/g, "");
}
function qr(s) {
  const d = /* @__PURE__ */ new Set();
  function i(g) {
    (g.style.fontFamily || getComputedStyle(g).fontFamily).split(",").forEach((e) => {
      d.add(Ke(e));
    }), Array.from(g.children).forEach((e) => {
      e instanceof HTMLElement && i(e);
    });
  }
  return i(s), d;
}
async function Jr(s, d) {
  const i = await Kr(s, d), g = qr(s);
  return (await Promise.all(i.filter((e) => g.has(Ke(e.style.fontFamily))).map((e) => {
    const a = e.parentStyleSheet ? e.parentStyleSheet.href : null;
    return Ge(e.cssText, a, d);
  }))).join(`
`);
}
async function Qr(s, d) {
  const i = d.fontEmbedCSS != null ? d.fontEmbedCSS : d.skipFonts ? null : await Jr(s, d);
  if (i) {
    const g = document.createElement("style"), c = document.createTextNode(i);
    g.appendChild(c), s.firstChild ? s.insertBefore(g, s.firstChild) : s.appendChild(g);
  }
}
async function tn(s, d = {}) {
  const { width: i, height: g } = $e(s, d), c = await ge(s, d, !0);
  return await Qr(c, d), await Xe(c, d), Yr(c, d), await vr(c, i, g);
}
async function en(s, d = {}) {
  const { width: i, height: g } = $e(s, d), c = await tn(s, d), e = await me(c), a = document.createElement("canvas"), n = a.getContext("2d"), l = d.pixelRatio || pr(), y = d.canvasWidth || i, k = d.canvasHeight || g;
  return a.width = y * l, a.height = k * l, d.skipAutoScale || mr(a), a.style.width = `${y}`, a.style.height = `${k}`, d.backgroundColor && (n.fillStyle = d.backgroundColor, n.fillRect(0, 0, a.width, a.height)), n.drawImage(e, 0, 0, a.width, a.height), a;
}
async function Re(s, d = {}) {
  return (await en(s, d)).toDataURL();
}
const Zt = {
  ELEMENT: "element",
  VIEWPORT: "viewport",
  FULL_PAGE: "fullpage",
  BOX: "box"
};
function rn(s) {
  const d = Date.now(), i = Math.random().toString(36).slice(2, 6);
  return `screenshot-${s}-${d}-${i}.png`;
}
async function qe(s, d = {}) {
  if (!s) return null;
  try {
    return await Re(s, {
      pixelRatio: d.pixelRatio || window.devicePixelRatio || 1,
      cacheBust: !0,
      ...d
    });
  } catch (i) {
    return console.error("captureElement failed:", i), null;
  }
}
async function nn(s = {}) {
  const d = document.documentElement;
  return qe(d, {
    width: window.innerWidth,
    height: window.innerHeight,
    style: {
      width: `${window.innerWidth}px`,
      height: `${window.innerHeight}px`,
      overflow: "hidden"
    },
    ...s
  });
}
async function an(s = {}) {
  const d = document.documentElement, i = d.style.overflow, g = d.style.width, c = d.style.height;
  try {
    return d.style.overflow = "visible", d.style.width = "auto", d.style.height = "auto", await Re(d, {
      pixelRatio: s.pixelRatio || window.devicePixelRatio || 1,
      cacheBust: !0,
      ...s
    });
  } catch (e) {
    return console.error("captureFullPage failed:", e), null;
  } finally {
    d.style.overflow = i, d.style.width = g, d.style.height = c;
  }
}
async function sn(s, d = {}) {
  if (!s || s.width < 1 || s.height < 1) return null;
  const i = document.documentElement, g = i.style.overflow, c = i.style.width, e = i.style.height;
  try {
    i.style.overflow = "visible", i.style.width = "auto", i.style.height = "auto";
    const a = await Re(i, {
      pixelRatio: d.pixelRatio || window.devicePixelRatio || 1,
      cacheBust: !0,
      ...d
    });
    return on(a, s);
  } catch (a) {
    return console.error("captureBox failed:", a), null;
  } finally {
    i.style.overflow = g, i.style.width = c, i.style.height = e;
  }
}
function on(s, d) {
  return new Promise((i, g) => {
    const c = new Image();
    c.onload = () => {
      const e = document.createElement("canvas"), a = window.devicePixelRatio || 1;
      e.width = Math.round(d.width * a), e.height = Math.round(d.height * a), e.getContext("2d").drawImage(
        c,
        d.x * a,
        d.y * a,
        d.width * a,
        d.height * a,
        0,
        0,
        e.width,
        e.height
      ), i(e.toDataURL("image/png"));
    }, c.onerror = g, c.src = s;
  });
}
async function ln(s) {
  return (await fetch(s)).blob();
}
async function un(s, d, i) {
  if (!i) return null;
  try {
    const g = await ln(s);
    return await i(g, d);
  } catch (g) {
    return console.error("uploadScreenshot failed:", g), null;
  }
}
function pn({
  active: s = !1,
  pagePath: d = "",
  pageName: i = "",
  storageKey: g = "page-reviews",
  imageUpload: c,
  enableZipExport: e = !0,
  onActiveChange: a,
  onAdd: n,
  onUpdate: l,
  onDelete: y,
  onClear: k,
  onExport: _
}) {
  var Wt, Ht, Bt, $t, oe, ee, le, re;
  const b = we(() => d || (typeof window < "u" ? window.location.pathname + window.location.search : "/"), [d]), {
    reviews: u,
    getPageReviews: w,
    addReview: o,
    updateReview: p,
    deleteReview: f,
    clearPageReviews: v,
    exportToJSON: E,
    exportToMarkdown: T,
    exportToZIP: C
  } = or({ storageKey: g, defaultPagePath: () => b }), F = we(() => w(b), [w, b, u]), [j, M] = Lt("element"), [z, $] = Lt(!1), [it, S] = Lt(!1), [D, r] = Lt(null), [N, at] = Lt(""), [L, ut] = Lt(null), [V, nt] = Lt(null), I = ce(!1), A = ce({ x: 0, y: 0 }), [et, q] = Lt({ x: 0, y: 0 }), G = ce(!1), wt = ce({ x: 0, y: 0 }), [tt, lt] = Lt({
    type: "element",
    title: "",
    severity: "medium",
    suggestion: "",
    selector: "",
    elementText: "",
    elementRect: null,
    viewportRect: null,
    viewport: { width: 0, height: 0 },
    scroll: { x: 0, y: 0 },
    pagePath: "",
    pageUrl: "",
    pageName: ""
  }), [ht, yt] = Lt([]), [_t, St] = Lt(null), Tt = tt.title.trim() && tt.suggestion.trim(), t = mt(() => {
    a == null || a(!1);
  }, [a]), B = mt(() => ({
    viewport: { width: window.innerWidth, height: window.innerHeight },
    scroll: { x: window.scrollX, y: window.scrollY },
    pagePath: b,
    pageUrl: window.location.href,
    pageName: i || b
  }), [b, i]), P = mt((K) => {
    var Ct;
    if (K.id) return "#" + K.id;
    if (K.className) {
      const At = String(K.className).split(/\s+/).filter((ne) => ne && !ne.startsWith("el-")).slice(0, 2);
      if (At.length) return K.tagName.toLowerCase() + "." + At.join(".");
    }
    let ct = [], st = K;
    for (; st && st !== document.body; ) {
      let At = st.tagName.toLowerCase();
      if (st.id) {
        At += "#" + st.id, ct.unshift(At);
        break;
      }
      const ue = Array.from(((Ct = st.parentNode) == null ? void 0 : Ct.children) || []).filter((ie) => ie.tagName === st.tagName);
      if (ue.length > 1) {
        const ie = ue.indexOf(st) + 1;
        At += `:nth-of-type(${ie})`;
      }
      ct.unshift(At), st = st.parentNode;
    }
    return ct.join(" > ");
  }, []), m = mt((K) => {
    const ct = document.elementFromPoint(K.clientX, K.clientY);
    return !ct || ct.closest(".review-overlay") ? null : ct;
  }, []), h = we(() => tt.type === "element" ? [
    { value: Zt.ELEMENT, label: "选中元素" },
    { value: Zt.VIEWPORT, label: "当前视口" },
    { value: Zt.FULL_PAGE, label: "完整页面" }
  ] : [
    { value: Zt.BOX, label: "框选区域" },
    { value: Zt.VIEWPORT, label: "当前视口" },
    { value: Zt.FULL_PAGE, label: "完整页面" }
  ], [tt.type]), R = mt(async () => {
    const K = [];
    for (const ct of ht) {
      let st = null;
      if (ct === Zt.ELEMENT && (L != null && L.el) ? st = await qe(L.el) : ct === Zt.BOX && tt.viewportRect ? st = await sn(tt.viewportRect) : ct === Zt.VIEWPORT ? st = await nn() : ct === Zt.FULL_PAGE && (st = await an()), st) {
        const Ct = rn(ct);
        let At = null;
        c && (At = await un(st, Ct, c)), K.push({
          type: ct,
          filename: Ct,
          data: At ? void 0 : st,
          url: At || void 0
        });
      }
    }
    return K;
  }, [ht, L, tt.viewportRect, c]), U = mt((K, ct = null) => {
    const st = B();
    lt({
      type: K,
      title: "",
      severity: "medium",
      suggestion: "",
      selector: (L == null ? void 0 : L.selector) || "",
      elementText: (L == null ? void 0 : L.text) || "",
      elementRect: (L == null ? void 0 : L.rect) || null,
      viewportRect: ct,
      viewport: st.viewport,
      scroll: st.scroll,
      pagePath: st.pagePath,
      pageUrl: st.pageUrl,
      pageName: st.pageName
    }), yt([]), $(!0);
  }, [B, L]), W = mt(() => {
    ut(null), nt(null), yt([]), lt({
      type: "element",
      title: "",
      severity: "medium",
      suggestion: "",
      selector: "",
      elementText: "",
      elementRect: null,
      viewportRect: null,
      viewport: { width: 0, height: 0 },
      scroll: { x: 0, y: 0 },
      pagePath: "",
      pageUrl: "",
      pageName: ""
    });
  }, []), O = mt(async () => {
    if (!Tt) return;
    const K = await R(), ct = o({
      type: tt.type,
      title: tt.title.trim(),
      severity: tt.severity,
      suggestion: tt.suggestion.trim(),
      selector: tt.selector,
      elementText: tt.elementText,
      elementRect: tt.elementRect,
      viewportRect: tt.viewportRect,
      viewport: tt.viewport,
      scroll: tt.scroll,
      pagePath: tt.pagePath,
      pageUrl: tt.pageUrl,
      pageName: tt.pageName,
      status: "open",
      screenshots: K
    });
    $(!1), n == null || n(ct);
  }, [Tt, R, tt, o, n]), Y = mt((K) => {
    p(K, { status: "resolved" }), l == null || l({ id: K, status: "resolved" });
  }, [p, l]), J = mt((K) => {
    St({
      title: "删除确认",
      message: "确定删除这条评审意见吗？",
      onConfirm: () => {
        f(K), y == null || y({ id: K }), St(null);
      }
    });
  }, [f, y]), X = mt(() => {
    F.length !== 0 && St({
      title: "清空确认",
      message: "确定清空当前页面的所有评审意见吗？",
      onConfirm: () => {
        v(b), k == null || k({ pagePath: b }), St(null);
      }
    });
  }, [F.length, v, b, k]), rt = mt(() => {
    E(), _ == null || _({ format: "json" });
  }, [E, _]), gt = mt(() => {
    T(), _ == null || _({ format: "markdown" });
  }, [T, _]), ft = mt(async () => {
    await C(), _ == null || _({ format: "zip" });
  }, [C, _]), Rt = mt((K) => {
    if (G.current || j !== "element" || z || I.current) return;
    const ct = m(K);
    if (!ct) {
      r(null);
      return;
    }
    const st = ct.getBoundingClientRect();
    r({
      x: st.left + window.scrollX,
      y: st.top + window.scrollY,
      width: st.width,
      height: st.height
    }), at(ct.tagName.toLowerCase());
  }, [j, z, m]), Ft = mt(() => {
    r(null);
  }, []), Ot = mt((K) => {
    var Ct;
    if (j !== "element" || z || I.current) return;
    const ct = m(K);
    if (!ct) return;
    K.preventDefault(), K.stopPropagation();
    const st = ct.getBoundingClientRect();
    ut({
      el: ct,
      selector: P(ct),
      tag: ct.tagName.toLowerCase(),
      text: ((Ct = ct.innerText) == null ? void 0 : Ct.slice(0, 40)) || "",
      rect: {
        x: st.left + window.scrollX,
        y: st.top + window.scrollY,
        width: st.width,
        height: st.height
      }
    }), U("element");
  }, [j, z, m, P, U]), Ut = mt((K) => {
    G.current || j !== "viewport" || z || (I.current = !0, A.current = { x: K.clientX + window.scrollX, y: K.clientY + window.scrollY }, nt({ x: A.current.x, y: A.current.y, width: 0, height: 0 }));
  }, [j, z]), bt = mt((K) => {
    if (G.current || !I.current) return;
    const ct = K.clientX + window.scrollX, st = K.clientY + window.scrollY;
    nt({
      x: Math.min(A.current.x, ct),
      y: Math.min(A.current.y, st),
      width: Math.abs(ct - A.current.x),
      height: Math.abs(st - A.current.y)
    });
  }, []), Mt = mt((K) => {
    if (G.current) {
      G.current = !1;
      return;
    }
    I.current && (I.current = !1, nt((ct) => (ct && ct.width > 10 && ct.height > 10 && U("viewport", { ...ct }), null)));
  }, [U]), Gt = mt((K) => {
    var st, Ct;
    ((st = K.target.classList) != null && st.contains("toolbar-title") || (Ct = K.target.classList) != null && Ct.contains("review-toolbar")) && (G.current = !0, wt.current = {
      x: K.clientX - et.x,
      y: K.clientY - et.y
    });
  }, [et]), zt = mt((K) => {
    G.current && q({
      x: K.clientX - wt.current.x,
      y: K.clientY - wt.current.y
    });
  }, []), Vt = mt((K) => {
    K.key === "Escape" && (z ? $(!1) : t());
  }, [z, t]);
  if (Ce(() => {
    if (s)
      return document.addEventListener("mousemove", Rt), document.addEventListener("mouseout", Ft), document.addEventListener("click", Ot, !0), document.addEventListener("mousedown", Ut), document.addEventListener("mousemove", bt), document.addEventListener("mousemove", zt), document.addEventListener("mouseup", Mt), document.addEventListener("keydown", Vt), () => {
        document.removeEventListener("mousemove", Rt), document.removeEventListener("mouseout", Ft), document.removeEventListener("click", Ot, !0), document.removeEventListener("mousedown", Ut), document.removeEventListener("mousemove", bt), document.removeEventListener("mousemove", zt), document.removeEventListener("mouseup", Mt), document.removeEventListener("keydown", Vt);
      };
  }, [s, Rt, Ft, Ot, Ut, bt, zt, Mt, Vt]), Ce(() => {
    s ? M("element") : (W(), r(null), S(!1));
  }, [s, W]), !s) return null;
  const Xt = {
    transform: `translate(calc(-50% + ${et.x}px), ${et.y}px)`
  }, Kt = V || (tt.type === "viewport" && z ? tt.viewportRect : null);
  return er(
    /* @__PURE__ */ H.jsxs("div", { className: "review-overlay", onClick: (K) => K.stopPropagation(), children: [
      /* @__PURE__ */ H.jsxs(
        "div",
        {
          className: `review-toolbar ${G.current ? "is-dragging" : ""}`,
          style: Xt,
          onMouseDown: Gt,
          children: [
            /* @__PURE__ */ H.jsxs("div", { className: "toolbar-left", children: [
              /* @__PURE__ */ H.jsx("span", { className: "toolbar-title", title: "按住此处可拖动", children: "页面评审模式" }),
              /* @__PURE__ */ H.jsxs("div", { className: "radio-group", children: [
                /* @__PURE__ */ H.jsx("button", { className: j === "element" ? "active" : "", onClick: () => M("element"), children: "选择元素" }),
                /* @__PURE__ */ H.jsx("button", { className: j === "viewport" ? "active" : "", onClick: () => M("viewport"), children: "框定视图" })
              ] })
            ] }),
            /* @__PURE__ */ H.jsxs("div", { className: "toolbar-right", children: [
              /* @__PURE__ */ H.jsxs("button", { className: "badge-btn", onClick: () => S(!0), children: [
                "评审列表 ",
                /* @__PURE__ */ H.jsx("span", { className: "badge", children: F.length })
              ] }),
              /* @__PURE__ */ H.jsxs("div", { className: "dropdown", children: [
                /* @__PURE__ */ H.jsx("button", { className: "primary", onClick: gt, children: "导出" }),
                /* @__PURE__ */ H.jsxs("div", { className: "dropdown-menu", children: [
                  /* @__PURE__ */ H.jsx("div", { onClick: gt, children: "导出为 Markdown" }),
                  /* @__PURE__ */ H.jsx("div", { onClick: rt, children: "导出为 JSON" }),
                  e && /* @__PURE__ */ H.jsx("div", { onClick: ft, children: "导出为 ZIP" })
                ] })
              ] }),
              /* @__PURE__ */ H.jsx("button", { className: "danger", onClick: t, children: "退出评审" })
            ] })
          ]
        }
      ),
      D && j === "element" && !z && /* @__PURE__ */ H.jsx("div", { className: "highlight-box hover-box", style: Ne(D), children: /* @__PURE__ */ H.jsx("span", { className: "highlight-label", children: N }) }),
      L && j === "element" && /* @__PURE__ */ H.jsx("div", { className: "highlight-box selected-box", style: Ne(L.rect), children: /* @__PURE__ */ H.jsxs("span", { className: "highlight-label", children: [
        "已选：",
        L.tag
      ] }) }),
      Kt && /* @__PURE__ */ H.jsx("div", { className: "drag-rect", style: cn(Kt) }),
      z && /* @__PURE__ */ H.jsx("div", { className: "modal-backdrop", onClick: () => $(!1), children: /* @__PURE__ */ H.jsxs("div", { className: "modal", onClick: (K) => K.stopPropagation(), children: [
        /* @__PURE__ */ H.jsx("div", { className: "modal-header", children: "添加评审意见" }),
        /* @__PURE__ */ H.jsxs("div", { className: "modal-body", children: [
          /* @__PURE__ */ H.jsxs("div", { className: "form-row", children: [
            /* @__PURE__ */ H.jsx("label", { children: "评审位置" }),
            /* @__PURE__ */ H.jsxs("div", { className: "review-target-info", children: [
              /* @__PURE__ */ H.jsx("span", { className: "tag", children: tt.type === "element" ? "元素" : "视图范围" }),
              /* @__PURE__ */ H.jsx("span", { className: "target-desc", children: tt.type === "element" ? tt.elementText || tt.selector : `框选区域 x=${(Wt = tt.viewportRect) == null ? void 0 : Wt.x}, y=${(Ht = tt.viewportRect) == null ? void 0 : Ht.y}, w=${(Bt = tt.viewportRect) == null ? void 0 : Bt.width}, h=${($t = tt.viewportRect) == null ? void 0 : $t.height}` })
            ] })
          ] }),
          /* @__PURE__ */ H.jsxs("div", { className: "form-row", children: [
            /* @__PURE__ */ H.jsx("label", { children: "窗口尺寸" }),
            /* @__PURE__ */ H.jsxs("span", { className: "text-muted", children: [
              (oe = tt.viewport) == null ? void 0 : oe.width,
              " × ",
              (ee = tt.viewport) == null ? void 0 : ee.height
            ] })
          ] }),
          /* @__PURE__ */ H.jsxs("div", { className: "form-row", children: [
            /* @__PURE__ */ H.jsx("label", { children: "滚动位置" }),
            /* @__PURE__ */ H.jsxs("span", { className: "text-muted", children: [
              "x=",
              (le = tt.scroll) == null ? void 0 : le.x,
              ", y=",
              (re = tt.scroll) == null ? void 0 : re.y
            ] })
          ] }),
          /* @__PURE__ */ H.jsxs("div", { className: "form-row", children: [
            /* @__PURE__ */ H.jsx("label", { children: "截图" }),
            /* @__PURE__ */ H.jsx("div", { className: "checkbox-group", children: h.map((K) => /* @__PURE__ */ H.jsxs("label", { className: "checkbox-label", children: [
              /* @__PURE__ */ H.jsx(
                "input",
                {
                  type: "checkbox",
                  value: K.value,
                  checked: ht.includes(K.value),
                  onChange: (ct) => {
                    const st = ct.target.value;
                    yt(
                      (Ct) => Ct.includes(st) ? Ct.filter((At) => At !== st) : [...Ct, st]
                    );
                  }
                }
              ),
              K.label
            ] }, K.value)) })
          ] }),
          /* @__PURE__ */ H.jsxs("div", { className: "form-row", children: [
            /* @__PURE__ */ H.jsxs("label", { children: [
              "标题 ",
              /* @__PURE__ */ H.jsx("span", { className: "required", children: "*" })
            ] }),
            /* @__PURE__ */ H.jsx(
              "input",
              {
                type: "text",
                value: tt.title,
                onChange: (K) => lt({ ...tt, title: K.target.value }),
                placeholder: "例如：按钮样式不统一"
              }
            )
          ] }),
          /* @__PURE__ */ H.jsxs("div", { className: "form-row", children: [
            /* @__PURE__ */ H.jsxs("label", { children: [
              "严重等级 ",
              /* @__PURE__ */ H.jsx("span", { className: "required", children: "*" })
            ] }),
            /* @__PURE__ */ H.jsx("div", { className: "radio-group", children: ["low", "medium", "high", "critical"].map((K) => /* @__PURE__ */ H.jsxs("label", { className: "radio-label", children: [
              /* @__PURE__ */ H.jsx(
                "input",
                {
                  type: "radio",
                  name: "severity",
                  value: K,
                  checked: tt.severity === K,
                  onChange: () => lt({ ...tt, severity: K })
                }
              ),
              Le(K)
            ] }, K)) })
          ] }),
          /* @__PURE__ */ H.jsxs("div", { className: "form-row", children: [
            /* @__PURE__ */ H.jsxs("label", { children: [
              "评审建议 ",
              /* @__PURE__ */ H.jsx("span", { className: "required", children: "*" })
            ] }),
            /* @__PURE__ */ H.jsx(
              "textarea",
              {
                rows: 4,
                value: tt.suggestion,
                onChange: (K) => lt({ ...tt, suggestion: K.target.value }),
                placeholder: "描述问题现象、影响和改进建议"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ H.jsxs("div", { className: "modal-footer", children: [
          /* @__PURE__ */ H.jsx("button", { onClick: () => $(!1), children: "取消" }),
          /* @__PURE__ */ H.jsx("button", { className: "primary", disabled: !Tt, onClick: O, children: "保存评审" })
        ] })
      ] }) }),
      it && /* @__PURE__ */ H.jsxs(H.Fragment, { children: [
        /* @__PURE__ */ H.jsx("div", { className: "drawer-backdrop", onClick: () => S(!1) }),
        /* @__PURE__ */ H.jsxs("div", { className: "drawer", children: [
          /* @__PURE__ */ H.jsxs("div", { className: "drawer-header", children: [
            /* @__PURE__ */ H.jsx("span", { children: "当前页面评审意见" }),
            /* @__PURE__ */ H.jsx("button", { className: "close", onClick: () => S(!1), children: "×" })
          ] }),
          /* @__PURE__ */ H.jsxs("div", { className: "drawer-body", children: [
            /* @__PURE__ */ H.jsxs("div", { className: "review-list-actions", children: [
              /* @__PURE__ */ H.jsx("button", { className: "primary", onClick: gt, children: "导出 Markdown" }),
              /* @__PURE__ */ H.jsx("button", { onClick: rt, children: "导出 JSON" }),
              e && /* @__PURE__ */ H.jsx("button", { onClick: ft, children: "导出 ZIP" }),
              /* @__PURE__ */ H.jsx("button", { className: "danger-text", onClick: X, children: "清空本页" })
            ] }),
            F.length === 0 ? /* @__PURE__ */ H.jsx("div", { className: "empty", children: "暂无评审意见" }) : /* @__PURE__ */ H.jsx("div", { className: "review-list", children: F.map((K) => /* @__PURE__ */ H.jsxs("div", { className: "review-item", children: [
              /* @__PURE__ */ H.jsxs("div", { className: "review-item-header", children: [
                /* @__PURE__ */ H.jsx("span", { className: "review-item-title", children: K.title }),
                /* @__PURE__ */ H.jsxs("div", { className: "review-item-tags", children: [
                  /* @__PURE__ */ H.jsx("span", { className: `tag ${fn(K.severity)}`, children: Le(K.severity) }),
                  /* @__PURE__ */ H.jsx("span", { className: "tag info", children: K.type === "element" ? "元素" : "视图" })
                ] })
              ] }),
              /* @__PURE__ */ H.jsx("p", { className: "review-item-target", children: K.type === "element" ? K.elementText || K.selector : `框选 x=${K.viewportRect.x}, y=${K.viewportRect.y}` }),
              /* @__PURE__ */ H.jsx("p", { className: "review-item-suggestion", children: K.suggestion }),
              /* @__PURE__ */ H.jsxs("div", { className: "review-item-meta", children: [
                /* @__PURE__ */ H.jsx("span", { className: "text-muted", children: new Date(K.createdAt).toLocaleString() }),
                /* @__PURE__ */ H.jsxs("div", { className: "review-item-actions", children: [
                  K.status !== "resolved" && /* @__PURE__ */ H.jsx("button", { className: "link primary", onClick: () => Y(K.id), children: "标记解决" }),
                  /* @__PURE__ */ H.jsx("button", { className: "link danger", onClick: () => J(K.id), children: "删除" })
                ] })
              ] })
            ] }, K.id)) })
          ] })
        ] })
      ] }),
      _t && /* @__PURE__ */ H.jsx("div", { className: "modal-backdrop", onClick: () => St(null), children: /* @__PURE__ */ H.jsxs("div", { className: "modal confirm-modal", onClick: (K) => K.stopPropagation(), children: [
        /* @__PURE__ */ H.jsx("div", { className: "modal-header", children: _t.title }),
        /* @__PURE__ */ H.jsx("div", { className: "modal-body", children: _t.message }),
        /* @__PURE__ */ H.jsxs("div", { className: "modal-footer", children: [
          /* @__PURE__ */ H.jsx("button", { onClick: () => St(null), children: "取消" }),
          /* @__PURE__ */ H.jsx("button", { className: "danger", onClick: _t.onConfirm, children: "确定" })
        ] })
      ] }) })
    ] }),
    document.body
  );
}
function Ne(s) {
  return s ? {
    left: s.x + "px",
    top: s.y + "px",
    width: s.width + "px",
    height: s.height + "px"
  } : {};
}
function cn(s) {
  return s ? {
    left: s.x + "px",
    top: s.y + "px",
    width: s.width + "px",
    height: s.height + "px"
  } : {};
}
function fn(s) {
  return { low: "info", medium: "warning", high: "danger", critical: "danger" }[s] || "info";
}
function Le(s) {
  return { low: "低", medium: "中", high: "高", critical: "严重" }[s] || s;
}
export {
  pn as ReviewTool,
  pn as default,
  or as usePageReview
};
