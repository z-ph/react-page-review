import qe, { useState as Rt, useCallback as lt, useRef as Ut, useEffect as Vt, useMemo as ye } from "react";
import { createPortal as gr } from "react-dom";
import { Radio as ve, Badge as wr, Button as Mt, Dropdown as yr, Modal as Ie, Tag as ce, Checkbox as vr, Input as je, Select as _r, Drawer as De, Empty as Ne, Card as br } from "antd";
var ue = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function xr(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Ce = { exports: {} }, ae = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Be;
function kr() {
  if (Be) return ae;
  Be = 1;
  var t = qe, l = Symbol.for("react.element"), r = Symbol.for("react.fragment"), f = Object.prototype.hasOwnProperty, c = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, n = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(i, o, _) {
    var x, b = {}, w = null, h = null;
    _ !== void 0 && (w = "" + _), o.key !== void 0 && (w = "" + o.key), o.ref !== void 0 && (h = o.ref);
    for (x in o) f.call(o, x) && !n.hasOwnProperty(x) && (b[x] = o[x]);
    if (i && i.defaultProps) for (x in o = i.defaultProps, o) b[x] === void 0 && (b[x] = o[x]);
    return { $$typeof: l, type: i, key: w, ref: h, props: b, _owner: c.current };
  }
  return ae.Fragment = r, ae.jsx = a, ae.jsxs = a, ae;
}
var oe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fe;
function Er() {
  return Fe || (Fe = 1, process.env.NODE_ENV !== "production" && function() {
    var t = qe, l = Symbol.for("react.element"), r = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), o = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), x = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), v = Symbol.iterator, u = "@@iterator";
    function m(E) {
      if (E === null || typeof E != "object")
        return null;
      var Y = v && E[v] || E[u];
      return typeof Y == "function" ? Y : null;
    }
    var d = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(E) {
      {
        for (var Y = arguments.length, Q = new Array(Y > 1 ? Y - 1 : 0), ut = 1; ut < Y; ut++)
          Q[ut - 1] = arguments[ut];
        k("error", E, Q);
      }
    }
    function k(E, Y, Q) {
      {
        var ut = d.ReactDebugCurrentFrame, wt = ut.getStackAddendum();
        wt !== "" && (Y += "%s", Q = Q.concat([wt]));
        var vt = Q.map(function(mt) {
          return String(mt);
        });
        vt.unshift("Warning: " + Y), Function.prototype.apply.call(console[E], console, vt);
      }
    }
    var C = !1, R = !1, P = !1, O = !1, U = !1, j;
    j = Symbol.for("react.module.reference");
    function $(E) {
      return !!(typeof E == "string" || typeof E == "function" || E === f || E === n || U || E === c || E === _ || E === x || O || E === h || C || R || P || typeof E == "object" && E !== null && (E.$$typeof === w || E.$$typeof === b || E.$$typeof === a || E.$$typeof === i || E.$$typeof === o || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      E.$$typeof === j || E.getModuleId !== void 0));
    }
    function rt(E, Y, Q) {
      var ut = E.displayName;
      if (ut)
        return ut;
      var wt = Y.displayName || Y.name || "";
      return wt !== "" ? Q + "(" + wt + ")" : Q;
    }
    function S(E) {
      return E.displayName || "Context";
    }
    function z(E) {
      if (E == null)
        return null;
      if (typeof E.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof E == "function")
        return E.displayName || E.name || null;
      if (typeof E == "string")
        return E;
      switch (E) {
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
      if (typeof E == "object")
        switch (E.$$typeof) {
          case i:
            var Y = E;
            return S(Y) + ".Consumer";
          case a:
            var Q = E;
            return S(Q._context) + ".Provider";
          case o:
            return rt(E, E.render, "ForwardRef");
          case b:
            var ut = E.displayName || null;
            return ut !== null ? ut : z(E.type) || "Memo";
          case w: {
            var wt = E, vt = wt._payload, mt = wt._init;
            try {
              return z(mt(vt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var s = Object.assign, F = 0, it, Z, st, V, at, D, A;
    function tt() {
    }
    tt.__reactDisabledLog = !0;
    function H() {
      {
        if (F === 0) {
          it = console.log, Z = console.info, st = console.warn, V = console.error, at = console.group, D = console.groupCollapsed, A = console.groupEnd;
          var E = {
            configurable: !0,
            enumerable: !0,
            value: tt,
            writable: !0
          };
          Object.defineProperties(console, {
            info: E,
            log: E,
            warn: E,
            error: E,
            group: E,
            groupCollapsed: E,
            groupEnd: E
          });
        }
        F++;
      }
    }
    function q() {
      {
        if (F--, F === 0) {
          var E = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: s({}, E, {
              value: it
            }),
            info: s({}, E, {
              value: Z
            }),
            warn: s({}, E, {
              value: st
            }),
            error: s({}, E, {
              value: V
            }),
            group: s({}, E, {
              value: at
            }),
            groupCollapsed: s({}, E, {
              value: D
            }),
            groupEnd: s({}, E, {
              value: A
            })
          });
        }
        F < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var yt = d.ReactCurrentDispatcher, Et;
    function ft(E, Y, Q) {
      {
        if (Et === void 0)
          try {
            throw Error();
          } catch (wt) {
            var ut = wt.stack.trim().match(/\n( *(at )?)/);
            Et = ut && ut[1] || "";
          }
        return `
` + Et + E;
      }
    }
    var nt = !1, _t;
    {
      var ht = typeof WeakMap == "function" ? WeakMap : Map;
      _t = new ht();
    }
    function bt(E, Y) {
      if (!E || nt)
        return "";
      {
        var Q = _t.get(E);
        if (Q !== void 0)
          return Q;
      }
      var ut;
      nt = !0;
      var wt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var vt;
      vt = yt.current, yt.current = null, H();
      try {
        if (Y) {
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
            } catch (jt) {
              ut = jt;
            }
            Reflect.construct(E, [], mt);
          } else {
            try {
              mt.call();
            } catch (jt) {
              ut = jt;
            }
            E.call(mt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (jt) {
            ut = jt;
          }
          E();
        }
      } catch (jt) {
        if (jt && ut && typeof jt.stack == "string") {
          for (var pt = jt.stack.split(`
`), Pt = ut.stack.split(`
`), Ct = pt.length - 1, Tt = Pt.length - 1; Ct >= 1 && Tt >= 0 && pt[Ct] !== Pt[Tt]; )
            Tt--;
          for (; Ct >= 1 && Tt >= 0; Ct--, Tt--)
            if (pt[Ct] !== Pt[Tt]) {
              if (Ct !== 1 || Tt !== 1)
                do
                  if (Ct--, Tt--, Tt < 0 || pt[Ct] !== Pt[Tt]) {
                    var Lt = `
` + pt[Ct].replace(" at new ", " at ");
                    return E.displayName && Lt.includes("<anonymous>") && (Lt = Lt.replace("<anonymous>", E.displayName)), typeof E == "function" && _t.set(E, Lt), Lt;
                  }
                while (Ct >= 1 && Tt >= 0);
              break;
            }
        }
      } finally {
        nt = !1, yt.current = vt, q(), Error.prepareStackTrace = wt;
      }
      var re = E ? E.displayName || E.name : "", Qt = re ? ft(re) : "";
      return typeof E == "function" && _t.set(E, Qt), Qt;
    }
    function kt(E, Y, Q) {
      return bt(E, !1);
    }
    function e(E) {
      var Y = E.prototype;
      return !!(Y && Y.isReactComponent);
    }
    function L(E, Y, Q) {
      if (E == null)
        return "";
      if (typeof E == "function")
        return bt(E, e(E));
      if (typeof E == "string")
        return ft(E);
      switch (E) {
        case _:
          return ft("Suspense");
        case x:
          return ft("SuspenseList");
      }
      if (typeof E == "object")
        switch (E.$$typeof) {
          case o:
            return kt(E.render);
          case b:
            return L(E.type, Y, Q);
          case w: {
            var ut = E, wt = ut._payload, vt = ut._init;
            try {
              return L(vt(wt), Y, Q);
            } catch {
            }
          }
        }
      return "";
    }
    var N = Object.prototype.hasOwnProperty, y = {}, p = d.ReactDebugCurrentFrame;
    function T(E) {
      if (E) {
        var Y = E._owner, Q = L(E.type, E._source, Y ? Y.type : null);
        p.setExtraStackFrame(Q);
      } else
        p.setExtraStackFrame(null);
    }
    function M(E, Y, Q, ut, wt) {
      {
        var vt = Function.call.bind(N);
        for (var mt in E)
          if (vt(E, mt)) {
            var pt = void 0;
            try {
              if (typeof E[mt] != "function") {
                var Pt = Error((ut || "React class") + ": " + Q + " type `" + mt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof E[mt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Pt.name = "Invariant Violation", Pt;
              }
              pt = E[mt](Y, mt, ut, Q, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ct) {
              pt = Ct;
            }
            pt && !(pt instanceof Error) && (T(wt), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ut || "React class", Q, mt, typeof pt), T(null)), pt instanceof Error && !(pt.message in y) && (y[pt.message] = !0, T(wt), g("Failed %s type: %s", Q, pt.message), T(null));
          }
      }
    }
    var W = Array.isArray;
    function I(E) {
      return W(E);
    }
    function X(E) {
      {
        var Y = typeof Symbol == "function" && Symbol.toStringTag, Q = Y && E[Symbol.toStringTag] || E.constructor.name || "Object";
        return Q;
      }
    }
    function J(E) {
      try {
        return K(E), !1;
      } catch {
        return !0;
      }
    }
    function K(E) {
      return "" + E;
    }
    function ot(E) {
      if (J(E))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", X(E)), K(E);
    }
    var gt = d.ReactCurrentOwner, dt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, zt, Bt;
    function Ot(E) {
      if (N.call(E, "ref")) {
        var Y = Object.getOwnPropertyDescriptor(E, "ref").get;
        if (Y && Y.isReactWarning)
          return !1;
      }
      return E.ref !== void 0;
    }
    function $t(E) {
      if (N.call(E, "key")) {
        var Y = Object.getOwnPropertyDescriptor(E, "key").get;
        if (Y && Y.isReactWarning)
          return !1;
      }
      return E.key !== void 0;
    }
    function xt(E, Y) {
      typeof E.ref == "string" && gt.current;
    }
    function Xt(E, Y) {
      {
        var Q = function() {
          zt || (zt = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Y));
        };
        Q.isReactWarning = !0, Object.defineProperty(E, "key", {
          get: Q,
          configurable: !0
        });
      }
    }
    function Yt(E, Y) {
      {
        var Q = function() {
          Bt || (Bt = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Y));
        };
        Q.isReactWarning = !0, Object.defineProperty(E, "ref", {
          get: Q,
          configurable: !0
        });
      }
    }
    var It = function(E, Y, Q, ut, wt, vt, mt) {
      var pt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: l,
        // Built-in properties that belong on the element
        type: E,
        key: Y,
        ref: Q,
        props: mt,
        // Record the component responsible for creating this element.
        _owner: vt
      };
      return pt._store = {}, Object.defineProperty(pt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(pt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ut
      }), Object.defineProperty(pt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: wt
      }), Object.freeze && (Object.freeze(pt.props), Object.freeze(pt)), pt;
    };
    function te(E, Y, Q, ut, wt) {
      {
        var vt, mt = {}, pt = null, Pt = null;
        Q !== void 0 && (ot(Q), pt = "" + Q), $t(Y) && (ot(Y.key), pt = "" + Y.key), Ot(Y) && (Pt = Y.ref, xt(Y, wt));
        for (vt in Y)
          N.call(Y, vt) && !dt.hasOwnProperty(vt) && (mt[vt] = Y[vt]);
        if (E && E.defaultProps) {
          var Ct = E.defaultProps;
          for (vt in Ct)
            mt[vt] === void 0 && (mt[vt] = Ct[vt]);
        }
        if (pt || Pt) {
          var Tt = typeof E == "function" ? E.displayName || E.name || "Unknown" : E;
          pt && Xt(mt, Tt), Pt && Yt(mt, Tt);
        }
        return It(E, pt, Pt, wt, ut, gt.current, mt);
      }
    }
    var Jt = d.ReactCurrentOwner, ee = d.ReactDebugCurrentFrame;
    function Wt(E) {
      if (E) {
        var Y = E._owner, Q = L(E.type, E._source, Y ? Y.type : null);
        ee.setExtraStackFrame(Q);
      } else
        ee.setExtraStackFrame(null);
    }
    var Kt;
    Kt = !1;
    function Ft(E) {
      return typeof E == "object" && E !== null && E.$$typeof === l;
    }
    function Zt() {
      {
        if (Jt.current) {
          var E = z(Jt.current.type);
          if (E)
            return `

Check the render method of \`` + E + "`.";
        }
        return "";
      }
    }
    function le(E) {
      return "";
    }
    var se = {};
    function B(E) {
      {
        var Y = Zt();
        if (!Y) {
          var Q = typeof E == "string" ? E : E.displayName || E.name;
          Q && (Y = `

Check the top-level render call using <` + Q + ">.");
        }
        return Y;
      }
    }
    function et(E, Y) {
      {
        if (!E._store || E._store.validated || E.key != null)
          return;
        E._store.validated = !0;
        var Q = B(Y);
        if (se[Q])
          return;
        se[Q] = !0;
        var ut = "";
        E && E._owner && E._owner !== Jt.current && (ut = " It was passed a child from " + z(E._owner.type) + "."), Wt(E), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Q, ut), Wt(null);
      }
    }
    function ct(E, Y) {
      {
        if (typeof E != "object")
          return;
        if (I(E))
          for (var Q = 0; Q < E.length; Q++) {
            var ut = E[Q];
            Ft(ut) && et(ut, Y);
          }
        else if (Ft(E))
          E._store && (E._store.validated = !0);
        else if (E) {
          var wt = m(E);
          if (typeof wt == "function" && wt !== E.entries)
            for (var vt = wt.call(E), mt; !(mt = vt.next()).done; )
              Ft(mt.value) && et(mt.value, Y);
        }
      }
    }
    function St(E) {
      {
        var Y = E.type;
        if (Y == null || typeof Y == "string")
          return;
        var Q;
        if (typeof Y == "function")
          Q = Y.propTypes;
        else if (typeof Y == "object" && (Y.$$typeof === o || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        Y.$$typeof === b))
          Q = Y.propTypes;
        else
          return;
        if (Q) {
          var ut = z(Y);
          M(Q, E.props, "prop", ut, E);
        } else if (Y.PropTypes !== void 0 && !Kt) {
          Kt = !0;
          var wt = z(Y);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", wt || "Unknown");
        }
        typeof Y.getDefaultProps == "function" && !Y.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function At(E) {
      {
        for (var Y = Object.keys(E.props), Q = 0; Q < Y.length; Q++) {
          var ut = Y[Q];
          if (ut !== "children" && ut !== "key") {
            Wt(E), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ut), Wt(null);
            break;
          }
        }
        E.ref !== null && (Wt(E), g("Invalid attribute `ref` supplied to `React.Fragment`."), Wt(null));
      }
    }
    var Gt = {};
    function Pe(E, Y, Q, ut, wt, vt) {
      {
        var mt = $(E);
        if (!mt) {
          var pt = "";
          (E === void 0 || typeof E == "object" && E !== null && Object.keys(E).length === 0) && (pt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Pt = le();
          Pt ? pt += Pt : pt += Zt();
          var Ct;
          E === null ? Ct = "null" : I(E) ? Ct = "array" : E !== void 0 && E.$$typeof === l ? (Ct = "<" + (z(E.type) || "Unknown") + " />", pt = " Did you accidentally export a JSX literal instead of a component?") : Ct = typeof E, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ct, pt);
        }
        var Tt = te(E, Y, Q, wt, vt);
        if (Tt == null)
          return Tt;
        if (mt) {
          var Lt = Y.children;
          if (Lt !== void 0)
            if (ut)
              if (I(Lt)) {
                for (var re = 0; re < Lt.length; re++)
                  ct(Lt[re], E);
                Object.freeze && Object.freeze(Lt);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ct(Lt, E);
        }
        if (N.call(Y, "key")) {
          var Qt = z(E), jt = Object.keys(Y).filter(function(mr) {
            return mr !== "key";
          }), we = jt.length > 0 ? "{key: someKey, " + jt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Gt[Qt + we]) {
            var pr = jt.length > 0 ? "{" + jt.join(": ..., ") + ": ...}" : "{}";
            g(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, we, Qt, pr, Qt), Gt[Qt + we] = !0;
          }
        }
        return E === f ? At(Tt) : St(Tt), Tt;
      }
    }
    function ur(E, Y, Q) {
      return Pe(E, Y, Q, !0);
    }
    function hr(E, Y, Q) {
      return Pe(E, Y, Q, !1);
    }
    var fr = hr, dr = ur;
    oe.Fragment = f, oe.jsx = fr, oe.jsxs = dr;
  }()), oe;
}
process.env.NODE_ENV === "production" ? Ce.exports = kr() : Ce.exports = Er();
var G = Ce.exports;
function he(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Je = { exports: {} };
/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/
(function(t, l) {
  (function(r) {
    t.exports = r();
  })(function() {
    return function r(f, c, n) {
      function a(_, x) {
        if (!c[_]) {
          if (!f[_]) {
            var b = typeof he == "function" && he;
            if (!x && b) return b(_, !0);
            if (i) return i(_, !0);
            var w = new Error("Cannot find module '" + _ + "'");
            throw w.code = "MODULE_NOT_FOUND", w;
          }
          var h = c[_] = { exports: {} };
          f[_][0].call(h.exports, function(v) {
            var u = f[_][1][v];
            return a(u || v);
          }, h, h.exports, r, f, c, n);
        }
        return c[_].exports;
      }
      for (var i = typeof he == "function" && he, o = 0; o < n.length; o++) a(n[o]);
      return a;
    }({ 1: [function(r, f, c) {
      var n = r("./utils"), a = r("./support"), i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      c.encode = function(o) {
        for (var _, x, b, w, h, v, u, m = [], d = 0, g = o.length, k = g, C = n.getTypeOf(o) !== "string"; d < o.length; ) k = g - d, b = C ? (_ = o[d++], x = d < g ? o[d++] : 0, d < g ? o[d++] : 0) : (_ = o.charCodeAt(d++), x = d < g ? o.charCodeAt(d++) : 0, d < g ? o.charCodeAt(d++) : 0), w = _ >> 2, h = (3 & _) << 4 | x >> 4, v = 1 < k ? (15 & x) << 2 | b >> 6 : 64, u = 2 < k ? 63 & b : 64, m.push(i.charAt(w) + i.charAt(h) + i.charAt(v) + i.charAt(u));
        return m.join("");
      }, c.decode = function(o) {
        var _, x, b, w, h, v, u = 0, m = 0, d = "data:";
        if (o.substr(0, d.length) === d) throw new Error("Invalid base64 input, it looks like a data url.");
        var g, k = 3 * (o = o.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
        if (o.charAt(o.length - 1) === i.charAt(64) && k--, o.charAt(o.length - 2) === i.charAt(64) && k--, k % 1 != 0) throw new Error("Invalid base64 input, bad content length.");
        for (g = a.uint8array ? new Uint8Array(0 | k) : new Array(0 | k); u < o.length; ) _ = i.indexOf(o.charAt(u++)) << 2 | (w = i.indexOf(o.charAt(u++))) >> 4, x = (15 & w) << 4 | (h = i.indexOf(o.charAt(u++))) >> 2, b = (3 & h) << 6 | (v = i.indexOf(o.charAt(u++))), g[m++] = _, h !== 64 && (g[m++] = x), v !== 64 && (g[m++] = b);
        return g;
      };
    }, { "./support": 30, "./utils": 32 }], 2: [function(r, f, c) {
      var n = r("./external"), a = r("./stream/DataWorker"), i = r("./stream/Crc32Probe"), o = r("./stream/DataLengthProbe");
      function _(x, b, w, h, v) {
        this.compressedSize = x, this.uncompressedSize = b, this.crc32 = w, this.compression = h, this.compressedContent = v;
      }
      _.prototype = { getContentWorker: function() {
        var x = new a(n.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new o("data_length")), b = this;
        return x.on("end", function() {
          if (this.streamInfo.data_length !== b.uncompressedSize) throw new Error("Bug : uncompressed data size mismatch");
        }), x;
      }, getCompressedWorker: function() {
        return new a(n.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
      } }, _.createWorkerFrom = function(x, b, w) {
        return x.pipe(new i()).pipe(new o("uncompressedSize")).pipe(b.compressWorker(w)).pipe(new o("compressedSize")).withStreamInfo("compression", b);
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
        for (var i, o = [], _ = 0; _ < 256; _++) {
          i = _;
          for (var x = 0; x < 8; x++) i = 1 & i ? 3988292384 ^ i >>> 1 : i >>> 1;
          o[_] = i;
        }
        return o;
      }();
      f.exports = function(i, o) {
        return i !== void 0 && i.length ? n.getTypeOf(i) !== "string" ? function(_, x, b, w) {
          var h = a, v = w + b;
          _ ^= -1;
          for (var u = w; u < v; u++) _ = _ >>> 8 ^ h[255 & (_ ^ x[u])];
          return -1 ^ _;
        }(0 | o, i, i.length, 0) : function(_, x, b, w) {
          var h = a, v = w + b;
          _ ^= -1;
          for (var u = w; u < v; u++) _ = _ >>> 8 ^ h[255 & (_ ^ x.charCodeAt(u))];
          return -1 ^ _;
        }(0 | o, i, i.length, 0) : 0;
      };
    }, { "./utils": 32 }], 5: [function(r, f, c) {
      c.base64 = !1, c.binary = !1, c.dir = !1, c.createFolders = !0, c.date = null, c.compression = null, c.compressionOptions = null, c.comment = null, c.unixPermissions = null, c.dosPermissions = null;
    }, {}], 6: [function(r, f, c) {
      var n = null;
      n = typeof Promise < "u" ? Promise : r("lie"), f.exports = { Promise: n };
    }, { lie: 37 }], 7: [function(r, f, c) {
      var n = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Uint32Array < "u", a = r("pako"), i = r("./utils"), o = r("./stream/GenericWorker"), _ = n ? "uint8array" : "array";
      function x(b, w) {
        o.call(this, "FlateWorker/" + b), this._pako = null, this._pakoAction = b, this._pakoOptions = w, this.meta = {};
      }
      c.magic = "\b\0", i.inherits(x, o), x.prototype.processChunk = function(b) {
        this.meta = b.meta, this._pako === null && this._createPako(), this._pako.push(i.transformTo(_, b.data), !1);
      }, x.prototype.flush = function() {
        o.prototype.flush.call(this), this._pako === null && this._createPako(), this._pako.push([], !0);
      }, x.prototype.cleanUp = function() {
        o.prototype.cleanUp.call(this), this._pako = null;
      }, x.prototype._createPako = function() {
        this._pako = new a[this._pakoAction]({ raw: !0, level: this._pakoOptions.level || -1 });
        var b = this;
        this._pako.onData = function(w) {
          b.push({ data: w, meta: b.meta });
        };
      }, c.compressWorker = function(b) {
        return new x("Deflate", b);
      }, c.uncompressWorker = function() {
        return new x("Inflate", {});
      };
    }, { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 }], 8: [function(r, f, c) {
      function n(h, v) {
        var u, m = "";
        for (u = 0; u < v; u++) m += String.fromCharCode(255 & h), h >>>= 8;
        return m;
      }
      function a(h, v, u, m, d, g) {
        var k, C, R = h.file, P = h.compression, O = g !== _.utf8encode, U = i.transformTo("string", g(R.name)), j = i.transformTo("string", _.utf8encode(R.name)), $ = R.comment, rt = i.transformTo("string", g($)), S = i.transformTo("string", _.utf8encode($)), z = j.length !== R.name.length, s = S.length !== $.length, F = "", it = "", Z = "", st = R.dir, V = R.date, at = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
        v && !u || (at.crc32 = h.crc32, at.compressedSize = h.compressedSize, at.uncompressedSize = h.uncompressedSize);
        var D = 0;
        v && (D |= 8), O || !z && !s || (D |= 2048);
        var A = 0, tt = 0;
        st && (A |= 16), d === "UNIX" ? (tt = 798, A |= function(q, yt) {
          var Et = q;
          return q || (Et = yt ? 16893 : 33204), (65535 & Et) << 16;
        }(R.unixPermissions, st)) : (tt = 20, A |= function(q) {
          return 63 & (q || 0);
        }(R.dosPermissions)), k = V.getUTCHours(), k <<= 6, k |= V.getUTCMinutes(), k <<= 5, k |= V.getUTCSeconds() / 2, C = V.getUTCFullYear() - 1980, C <<= 4, C |= V.getUTCMonth() + 1, C <<= 5, C |= V.getUTCDate(), z && (it = n(1, 1) + n(x(U), 4) + j, F += "up" + n(it.length, 2) + it), s && (Z = n(1, 1) + n(x(rt), 4) + S, F += "uc" + n(Z.length, 2) + Z);
        var H = "";
        return H += `
\0`, H += n(D, 2), H += P.magic, H += n(k, 2), H += n(C, 2), H += n(at.crc32, 4), H += n(at.compressedSize, 4), H += n(at.uncompressedSize, 4), H += n(U.length, 2), H += n(F.length, 2), { fileRecord: b.LOCAL_FILE_HEADER + H + U + F, dirRecord: b.CENTRAL_FILE_HEADER + n(tt, 2) + H + n(rt.length, 2) + "\0\0\0\0" + n(A, 4) + n(m, 4) + U + F + rt };
      }
      var i = r("../utils"), o = r("../stream/GenericWorker"), _ = r("../utf8"), x = r("../crc32"), b = r("../signature");
      function w(h, v, u, m) {
        o.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = v, this.zipPlatform = u, this.encodeFileName = m, this.streamFiles = h, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
      }
      i.inherits(w, o), w.prototype.push = function(h) {
        var v = h.meta.percent || 0, u = this.entriesCount, m = this._sources.length;
        this.accumulate ? this.contentBuffer.push(h) : (this.bytesWritten += h.data.length, o.prototype.push.call(this, { data: h.data, meta: { currentFile: this.currentFile, percent: u ? (v + 100 * (u - m - 1)) / u : 100 } }));
      }, w.prototype.openedSource = function(h) {
        this.currentSourceOffset = this.bytesWritten, this.currentFile = h.file.name;
        var v = this.streamFiles && !h.file.dir;
        if (v) {
          var u = a(h, v, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
          this.push({ data: u.fileRecord, meta: { percent: 0 } });
        } else this.accumulate = !0;
      }, w.prototype.closedSource = function(h) {
        this.accumulate = !1;
        var v = this.streamFiles && !h.file.dir, u = a(h, v, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
        if (this.dirRecords.push(u.dirRecord), v) this.push({ data: function(m) {
          return b.DATA_DESCRIPTOR + n(m.crc32, 4) + n(m.compressedSize, 4) + n(m.uncompressedSize, 4);
        }(h), meta: { percent: 100 } });
        else for (this.push({ data: u.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length; ) this.push(this.contentBuffer.shift());
        this.currentFile = null;
      }, w.prototype.flush = function() {
        for (var h = this.bytesWritten, v = 0; v < this.dirRecords.length; v++) this.push({ data: this.dirRecords[v], meta: { percent: 100 } });
        var u = this.bytesWritten - h, m = function(d, g, k, C, R) {
          var P = i.transformTo("string", R(C));
          return b.CENTRAL_DIRECTORY_END + "\0\0\0\0" + n(d, 2) + n(d, 2) + n(g, 4) + n(k, 4) + n(P.length, 2) + P;
        }(this.dirRecords.length, u, h, this.zipComment, this.encodeFileName);
        this.push({ data: m, meta: { percent: 100 } });
      }, w.prototype.prepareNextSource = function() {
        this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
      }, w.prototype.registerPrevious = function(h) {
        this._sources.push(h);
        var v = this;
        return h.on("data", function(u) {
          v.processChunk(u);
        }), h.on("end", function() {
          v.closedSource(v.previous.streamInfo), v._sources.length ? v.prepareNextSource() : v.end();
        }), h.on("error", function(u) {
          v.error(u);
        }), this;
      }, w.prototype.resume = function() {
        return !!o.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0));
      }, w.prototype.error = function(h) {
        var v = this._sources;
        if (!o.prototype.error.call(this, h)) return !1;
        for (var u = 0; u < v.length; u++) try {
          v[u].error(h);
        } catch {
        }
        return !0;
      }, w.prototype.lock = function() {
        o.prototype.lock.call(this);
        for (var h = this._sources, v = 0; v < h.length; v++) h[v].lock();
      }, f.exports = w;
    }, { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 }], 9: [function(r, f, c) {
      var n = r("../compressions"), a = r("./ZipFileWorker");
      c.generateWorker = function(i, o, _) {
        var x = new a(o.streamFiles, _, o.platform, o.encodeFileName), b = 0;
        try {
          i.forEach(function(w, h) {
            b++;
            var v = function(g, k) {
              var C = g || k, R = n[C];
              if (!R) throw new Error(C + " is not a valid compression method !");
              return R;
            }(h.options.compression, o.compression), u = h.options.compressionOptions || o.compressionOptions || {}, m = h.dir, d = h.date;
            h._compressWorker(v, u).withStreamInfo("file", { name: w, dir: m, date: d, comment: h.comment || "", unixPermissions: h.unixPermissions, dosPermissions: h.dosPermissions }).pipe(x);
          }), x.entriesCount = b;
        } catch (w) {
          x.error(w);
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
      var n = r("./utils"), a = r("./external"), i = r("./utf8"), o = r("./zipEntries"), _ = r("./stream/Crc32Probe"), x = r("./nodejsUtils");
      function b(w) {
        return new a.Promise(function(h, v) {
          var u = w.decompressed.getContentWorker().pipe(new _());
          u.on("error", function(m) {
            v(m);
          }).on("end", function() {
            u.streamInfo.crc32 !== w.decompressed.crc32 ? v(new Error("Corrupted zip : CRC32 mismatch")) : h();
          }).resume();
        });
      }
      f.exports = function(w, h) {
        var v = this;
        return h = n.extend(h || {}, { base64: !1, checkCRC32: !1, optimizedBinaryString: !1, createFolders: !1, decodeFileName: i.utf8decode }), x.isNode && x.isStream(w) ? a.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : n.prepareContent("the loaded zip file", w, !0, h.optimizedBinaryString, h.base64).then(function(u) {
          var m = new o(h);
          return m.load(u), m;
        }).then(function(u) {
          var m = [a.Promise.resolve(u)], d = u.files;
          if (h.checkCRC32) for (var g = 0; g < d.length; g++) m.push(b(d[g]));
          return a.Promise.all(m);
        }).then(function(u) {
          for (var m = u.shift(), d = m.files, g = 0; g < d.length; g++) {
            var k = d[g], C = k.fileNameStr, R = n.resolve(k.fileNameStr);
            v.file(R, k.decompressed, { binary: !0, optimizedBinaryString: !0, date: k.date, dir: k.dir, comment: k.fileCommentStr.length ? k.fileCommentStr : null, unixPermissions: k.unixPermissions, dosPermissions: k.dosPermissions, createFolders: h.createFolders }), k.dir || (v.file(R).unsafeOriginalName = C);
          }
          return m.zipComment.length && (v.comment = m.zipComment), v;
        });
      };
    }, { "./external": 6, "./nodejsUtils": 14, "./stream/Crc32Probe": 25, "./utf8": 31, "./utils": 32, "./zipEntries": 33 }], 12: [function(r, f, c) {
      var n = r("../utils"), a = r("../stream/GenericWorker");
      function i(o, _) {
        a.call(this, "Nodejs stream input adapter for " + o), this._upstreamEnded = !1, this._bindStream(_);
      }
      n.inherits(i, a), i.prototype._bindStream = function(o) {
        var _ = this;
        (this._stream = o).pause(), o.on("data", function(x) {
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
      function a(i, o, _) {
        n.call(this, o), this._helper = i;
        var x = this;
        i.on("data", function(b, w) {
          x.push(b) || x._helper.pause(), _ && _(w);
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
      function n(R, P, O) {
        var U, j = i.getTypeOf(P), $ = i.extend(O || {}, x);
        $.date = $.date || /* @__PURE__ */ new Date(), $.compression !== null && ($.compression = $.compression.toUpperCase()), typeof $.unixPermissions == "string" && ($.unixPermissions = parseInt($.unixPermissions, 8)), $.unixPermissions && 16384 & $.unixPermissions && ($.dir = !0), $.dosPermissions && 16 & $.dosPermissions && ($.dir = !0), $.dir && (R = d(R)), $.createFolders && (U = m(R)) && g.call(this, U, !0);
        var rt = j === "string" && $.binary === !1 && $.base64 === !1;
        O && O.binary !== void 0 || ($.binary = !rt), (P instanceof b && P.uncompressedSize === 0 || $.dir || !P || P.length === 0) && ($.base64 = !1, $.binary = !0, P = "", $.compression = "STORE", j = "string");
        var S = null;
        S = P instanceof b || P instanceof o ? P : v.isNode && v.isStream(P) ? new u(R, P) : i.prepareContent(R, P, $.binary, $.optimizedBinaryString, $.base64);
        var z = new w(R, S, $);
        this.files[R] = z;
      }
      var a = r("./utf8"), i = r("./utils"), o = r("./stream/GenericWorker"), _ = r("./stream/StreamHelper"), x = r("./defaults"), b = r("./compressedObject"), w = r("./zipObject"), h = r("./generate"), v = r("./nodejsUtils"), u = r("./nodejs/NodejsStreamInputAdapter"), m = function(R) {
        R.slice(-1) === "/" && (R = R.substring(0, R.length - 1));
        var P = R.lastIndexOf("/");
        return 0 < P ? R.substring(0, P) : "";
      }, d = function(R) {
        return R.slice(-1) !== "/" && (R += "/"), R;
      }, g = function(R, P) {
        return P = P !== void 0 ? P : x.createFolders, R = d(R), this.files[R] || n.call(this, R, null, { dir: !0, createFolders: P }), this.files[R];
      };
      function k(R) {
        return Object.prototype.toString.call(R) === "[object RegExp]";
      }
      var C = { load: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, forEach: function(R) {
        var P, O, U;
        for (P in this.files) U = this.files[P], (O = P.slice(this.root.length, P.length)) && P.slice(0, this.root.length) === this.root && R(O, U);
      }, filter: function(R) {
        var P = [];
        return this.forEach(function(O, U) {
          R(O, U) && P.push(U);
        }), P;
      }, file: function(R, P, O) {
        if (arguments.length !== 1) return R = this.root + R, n.call(this, R, P, O), this;
        if (k(R)) {
          var U = R;
          return this.filter(function($, rt) {
            return !rt.dir && U.test($);
          });
        }
        var j = this.files[this.root + R];
        return j && !j.dir ? j : null;
      }, folder: function(R) {
        if (!R) return this;
        if (k(R)) return this.filter(function(j, $) {
          return $.dir && R.test(j);
        });
        var P = this.root + R, O = g.call(this, P), U = this.clone();
        return U.root = O.name, U;
      }, remove: function(R) {
        R = this.root + R;
        var P = this.files[R];
        if (P || (R.slice(-1) !== "/" && (R += "/"), P = this.files[R]), P && !P.dir) delete this.files[R];
        else for (var O = this.filter(function(j, $) {
          return $.name.slice(0, R.length) === R;
        }), U = 0; U < O.length; U++) delete this.files[O[U].name];
        return this;
      }, generate: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, generateInternalStream: function(R) {
        var P, O = {};
        try {
          if ((O = i.extend(R || {}, { streamFiles: !1, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: a.utf8encode })).type = O.type.toLowerCase(), O.compression = O.compression.toUpperCase(), O.type === "binarystring" && (O.type = "string"), !O.type) throw new Error("No output type specified.");
          i.checkSupport(O.type), O.platform !== "darwin" && O.platform !== "freebsd" && O.platform !== "linux" && O.platform !== "sunos" || (O.platform = "UNIX"), O.platform === "win32" && (O.platform = "DOS");
          var U = O.comment || this.comment || "";
          P = h.generateWorker(this, O, U);
        } catch (j) {
          (P = new o("error")).error(j);
        }
        return new _(P, O.type || "string", O.mimeType);
      }, generateAsync: function(R, P) {
        return this.generateInternalStream(R).accumulate(P);
      }, generateNodeStream: function(R, P) {
        return (R = R || {}).type || (R.type = "nodebuffer"), this.generateInternalStream(R).toNodejsStream(P);
      } };
      f.exports = C;
    }, { "./compressedObject": 2, "./defaults": 5, "./generate": 9, "./nodejs/NodejsStreamInputAdapter": 12, "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31, "./utils": 32, "./zipObject": 35 }], 16: [function(r, f, c) {
      f.exports = r("stream");
    }, { stream: void 0 }], 17: [function(r, f, c) {
      var n = r("./DataReader");
      function a(i) {
        n.call(this, i);
        for (var o = 0; o < this.data.length; o++) i[o] = 255 & i[o];
      }
      r("../utils").inherits(a, n), a.prototype.byteAt = function(i) {
        return this.data[this.zero + i];
      }, a.prototype.lastIndexOfSignature = function(i) {
        for (var o = i.charCodeAt(0), _ = i.charCodeAt(1), x = i.charCodeAt(2), b = i.charCodeAt(3), w = this.length - 4; 0 <= w; --w) if (this.data[w] === o && this.data[w + 1] === _ && this.data[w + 2] === x && this.data[w + 3] === b) return w - this.zero;
        return -1;
      }, a.prototype.readAndCheckSignature = function(i) {
        var o = i.charCodeAt(0), _ = i.charCodeAt(1), x = i.charCodeAt(2), b = i.charCodeAt(3), w = this.readData(4);
        return o === w[0] && _ === w[1] && x === w[2] && b === w[3];
      }, a.prototype.readData = function(i) {
        if (this.checkOffset(i), i === 0) return [];
        var o = this.data.slice(this.zero + this.index, this.zero + this.index + i);
        return this.index += i, o;
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
        var o, _ = 0;
        for (this.checkOffset(i), o = this.index + i - 1; o >= this.index; o--) _ = (_ << 8) + this.byteAt(o);
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
        var o = this.data.slice(this.zero + this.index, this.zero + this.index + i);
        return this.index += i, o;
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
        var o = this.data.slice(this.zero + this.index, this.zero + this.index + i);
        return this.index += i, o;
      }, f.exports = a;
    }, { "../utils": 32, "./DataReader": 18 }], 21: [function(r, f, c) {
      var n = r("./ArrayReader");
      function a(i) {
        n.call(this, i);
      }
      r("../utils").inherits(a, n), a.prototype.readData = function(i) {
        if (this.checkOffset(i), i === 0) return new Uint8Array(0);
        var o = this.data.subarray(this.zero + this.index, this.zero + this.index + i);
        return this.index += i, o;
      }, f.exports = a;
    }, { "../utils": 32, "./ArrayReader": 17 }], 22: [function(r, f, c) {
      var n = r("../utils"), a = r("../support"), i = r("./ArrayReader"), o = r("./StringReader"), _ = r("./NodeBufferReader"), x = r("./Uint8ArrayReader");
      f.exports = function(b) {
        var w = n.getTypeOf(b);
        return n.checkSupport(w), w !== "string" || a.uint8array ? w === "nodebuffer" ? new _(b) : a.uint8array ? new x(n.transformTo("uint8array", b)) : new i(n.transformTo("array", b)) : new o(b);
      };
    }, { "../support": 30, "../utils": 32, "./ArrayReader": 17, "./NodeBufferReader": 19, "./StringReader": 20, "./Uint8ArrayReader": 21 }], 23: [function(r, f, c) {
      c.LOCAL_FILE_HEADER = "PK", c.CENTRAL_FILE_HEADER = "PK", c.CENTRAL_DIRECTORY_END = "PK", c.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", c.ZIP64_CENTRAL_DIRECTORY_END = "PK", c.DATA_DESCRIPTOR = "PK\x07\b";
    }, {}], 24: [function(r, f, c) {
      var n = r("./GenericWorker"), a = r("../utils");
      function i(o) {
        n.call(this, "ConvertWorker to " + o), this.destType = o;
      }
      a.inherits(i, n), i.prototype.processChunk = function(o) {
        this.push({ data: a.transformTo(this.destType, o.data), meta: o.meta });
      }, f.exports = i;
    }, { "../utils": 32, "./GenericWorker": 28 }], 25: [function(r, f, c) {
      var n = r("./GenericWorker"), a = r("../crc32");
      function i() {
        n.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
      }
      r("../utils").inherits(i, n), i.prototype.processChunk = function(o) {
        this.streamInfo.crc32 = a(o.data, this.streamInfo.crc32 || 0), this.push(o);
      }, f.exports = i;
    }, { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 }], 26: [function(r, f, c) {
      var n = r("../utils"), a = r("./GenericWorker");
      function i(o) {
        a.call(this, "DataLengthProbe for " + o), this.propName = o, this.withStreamInfo(o, 0);
      }
      n.inherits(i, a), i.prototype.processChunk = function(o) {
        if (o) {
          var _ = this.streamInfo[this.propName] || 0;
          this.streamInfo[this.propName] = _ + o.data.length;
        }
        a.prototype.processChunk.call(this, o);
      }, f.exports = i;
    }, { "../utils": 32, "./GenericWorker": 28 }], 27: [function(r, f, c) {
      var n = r("../utils"), a = r("./GenericWorker");
      function i(o) {
        a.call(this, "DataWorker");
        var _ = this;
        this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, o.then(function(x) {
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
        var o = null, _ = Math.min(this.max, this.index + 16384);
        if (this.index >= this.max) return this.end();
        switch (this.type) {
          case "string":
            o = this.data.substring(this.index, _);
            break;
          case "uint8array":
            o = this.data.subarray(this.index, _);
            break;
          case "array":
          case "nodebuffer":
            o = this.data.slice(this.index, _);
        }
        return this.index = _, this.push({ data: o, meta: { percent: this.max ? this.index / this.max * 100 : 0 } });
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
        if (this._listeners[a]) for (var o = 0; o < this._listeners[a].length; o++) this._listeners[a][o].call(this, i);
      }, pipe: function(a) {
        return a.registerPrevious(this);
      }, registerPrevious: function(a) {
        if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
        this.streamInfo = a.streamInfo, this.mergeStreamInfo(), this.previous = a;
        var i = this;
        return a.on("data", function(o) {
          i.processChunk(o);
        }), a.on("end", function() {
          i.end();
        }), a.on("error", function(o) {
          i.error(o);
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
      var n = r("../utils"), a = r("./ConvertWorker"), i = r("./GenericWorker"), o = r("../base64"), _ = r("../support"), x = r("../external"), b = null;
      if (_.nodestream) try {
        b = r("../nodejs/NodejsStreamOutputAdapter");
      } catch {
      }
      function w(v, u) {
        return new x.Promise(function(m, d) {
          var g = [], k = v._internalType, C = v._outputType, R = v._mimeType;
          v.on("data", function(P, O) {
            g.push(P), u && u(O);
          }).on("error", function(P) {
            g = [], d(P);
          }).on("end", function() {
            try {
              var P = function(O, U, j) {
                switch (O) {
                  case "blob":
                    return n.newBlob(n.transformTo("arraybuffer", U), j);
                  case "base64":
                    return o.encode(U);
                  default:
                    return n.transformTo(O, U);
                }
              }(C, function(O, U) {
                var j, $ = 0, rt = null, S = 0;
                for (j = 0; j < U.length; j++) S += U[j].length;
                switch (O) {
                  case "string":
                    return U.join("");
                  case "array":
                    return Array.prototype.concat.apply([], U);
                  case "uint8array":
                    for (rt = new Uint8Array(S), j = 0; j < U.length; j++) rt.set(U[j], $), $ += U[j].length;
                    return rt;
                  case "nodebuffer":
                    return Buffer.concat(U);
                  default:
                    throw new Error("concat : unsupported type '" + O + "'");
                }
              }(k, g), R);
              m(P);
            } catch (O) {
              d(O);
            }
            g = [];
          }).resume();
        });
      }
      function h(v, u, m) {
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
          this._internalType = d, this._outputType = u, this._mimeType = m, n.checkSupport(d), this._worker = v.pipe(new a(d)), v.lock();
        } catch (g) {
          this._worker = new i("error"), this._worker.error(g);
        }
      }
      h.prototype = { accumulate: function(v) {
        return w(this, v);
      }, on: function(v, u) {
        var m = this;
        return v === "data" ? this._worker.on(v, function(d) {
          u.call(m, d.data, d.meta);
        }) : this._worker.on(v, function() {
          n.delay(u, arguments, m);
        }), this;
      }, resume: function() {
        return n.delay(this._worker.resume, [], this._worker), this;
      }, pause: function() {
        return this._worker.pause(), this;
      }, toNodejsStream: function(v) {
        if (n.checkSupport("nodestream"), this._outputType !== "nodebuffer") throw new Error(this._outputType + " is not supported by this method");
        return new b(this, { objectMode: this._outputType !== "nodebuffer" }, v);
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
      for (var n = r("./utils"), a = r("./support"), i = r("./nodejsUtils"), o = r("./stream/GenericWorker"), _ = new Array(256), x = 0; x < 256; x++) _[x] = 252 <= x ? 6 : 248 <= x ? 5 : 240 <= x ? 4 : 224 <= x ? 3 : 192 <= x ? 2 : 1;
      _[254] = _[254] = 1;
      function b() {
        o.call(this, "utf-8 decode"), this.leftOver = null;
      }
      function w() {
        o.call(this, "utf-8 encode");
      }
      c.utf8encode = function(h) {
        return a.nodebuffer ? i.newBufferFrom(h, "utf-8") : function(v) {
          var u, m, d, g, k, C = v.length, R = 0;
          for (g = 0; g < C; g++) (64512 & (m = v.charCodeAt(g))) == 55296 && g + 1 < C && (64512 & (d = v.charCodeAt(g + 1))) == 56320 && (m = 65536 + (m - 55296 << 10) + (d - 56320), g++), R += m < 128 ? 1 : m < 2048 ? 2 : m < 65536 ? 3 : 4;
          for (u = a.uint8array ? new Uint8Array(R) : new Array(R), g = k = 0; k < R; g++) (64512 & (m = v.charCodeAt(g))) == 55296 && g + 1 < C && (64512 & (d = v.charCodeAt(g + 1))) == 56320 && (m = 65536 + (m - 55296 << 10) + (d - 56320), g++), m < 128 ? u[k++] = m : (m < 2048 ? u[k++] = 192 | m >>> 6 : (m < 65536 ? u[k++] = 224 | m >>> 12 : (u[k++] = 240 | m >>> 18, u[k++] = 128 | m >>> 12 & 63), u[k++] = 128 | m >>> 6 & 63), u[k++] = 128 | 63 & m);
          return u;
        }(h);
      }, c.utf8decode = function(h) {
        return a.nodebuffer ? n.transformTo("nodebuffer", h).toString("utf-8") : function(v) {
          var u, m, d, g, k = v.length, C = new Array(2 * k);
          for (u = m = 0; u < k; ) if ((d = v[u++]) < 128) C[m++] = d;
          else if (4 < (g = _[d])) C[m++] = 65533, u += g - 1;
          else {
            for (d &= g === 2 ? 31 : g === 3 ? 15 : 7; 1 < g && u < k; ) d = d << 6 | 63 & v[u++], g--;
            1 < g ? C[m++] = 65533 : d < 65536 ? C[m++] = d : (d -= 65536, C[m++] = 55296 | d >> 10 & 1023, C[m++] = 56320 | 1023 & d);
          }
          return C.length !== m && (C.subarray ? C = C.subarray(0, m) : C.length = m), n.applyFromCharCode(C);
        }(h = n.transformTo(a.uint8array ? "uint8array" : "array", h));
      }, n.inherits(b, o), b.prototype.processChunk = function(h) {
        var v = n.transformTo(a.uint8array ? "uint8array" : "array", h.data);
        if (this.leftOver && this.leftOver.length) {
          if (a.uint8array) {
            var u = v;
            (v = new Uint8Array(u.length + this.leftOver.length)).set(this.leftOver, 0), v.set(u, this.leftOver.length);
          } else v = this.leftOver.concat(v);
          this.leftOver = null;
        }
        var m = function(g, k) {
          var C;
          for ((k = k || g.length) > g.length && (k = g.length), C = k - 1; 0 <= C && (192 & g[C]) == 128; ) C--;
          return C < 0 || C === 0 ? k : C + _[g[C]] > k ? C : k;
        }(v), d = v;
        m !== v.length && (a.uint8array ? (d = v.subarray(0, m), this.leftOver = v.subarray(m, v.length)) : (d = v.slice(0, m), this.leftOver = v.slice(m, v.length))), this.push({ data: c.utf8decode(d), meta: h.meta });
      }, b.prototype.flush = function() {
        this.leftOver && this.leftOver.length && (this.push({ data: c.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
      }, c.Utf8DecodeWorker = b, n.inherits(w, o), w.prototype.processChunk = function(h) {
        this.push({ data: c.utf8encode(h.data), meta: h.meta });
      }, c.Utf8EncodeWorker = w;
    }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }], 32: [function(r, f, c) {
      var n = r("./support"), a = r("./base64"), i = r("./nodejsUtils"), o = r("./external");
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
        var g = [], k = 0, C = u.length;
        if (C <= d) return String.fromCharCode.apply(null, u);
        for (; k < C; ) m === "array" || m === "nodebuffer" ? g.push(String.fromCharCode.apply(null, u.slice(k, Math.min(k + d, C)))) : g.push(String.fromCharCode.apply(null, u.subarray(k, Math.min(k + d, C)))), k += d;
        return g.join("");
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
      function w(u) {
        var m = 65536, d = c.getTypeOf(u), g = !0;
        if (d === "uint8array" ? g = b.applyCanBeUsed.uint8array : d === "nodebuffer" && (g = b.applyCanBeUsed.nodebuffer), g) for (; 1 < m; ) try {
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
      c.applyFromCharCode = w;
      var v = {};
      v.string = { string: _, array: function(u) {
        return x(u, new Array(u.length));
      }, arraybuffer: function(u) {
        return v.string.uint8array(u).buffer;
      }, uint8array: function(u) {
        return x(u, new Uint8Array(u.length));
      }, nodebuffer: function(u) {
        return x(u, i.allocBuffer(u.length));
      } }, v.array = { string: w, array: _, arraybuffer: function(u) {
        return new Uint8Array(u).buffer;
      }, uint8array: function(u) {
        return new Uint8Array(u);
      }, nodebuffer: function(u) {
        return i.newBufferFrom(u);
      } }, v.arraybuffer = { string: function(u) {
        return w(new Uint8Array(u));
      }, array: function(u) {
        return h(new Uint8Array(u), new Array(u.byteLength));
      }, arraybuffer: _, uint8array: function(u) {
        return new Uint8Array(u);
      }, nodebuffer: function(u) {
        return i.newBufferFrom(new Uint8Array(u));
      } }, v.uint8array = { string: w, array: function(u) {
        return h(u, new Array(u.length));
      }, arraybuffer: function(u) {
        return u.buffer;
      }, uint8array: _, nodebuffer: function(u) {
        return i.newBufferFrom(u);
      } }, v.nodebuffer = { string: w, array: function(u) {
        return h(u, new Array(u.length));
      }, arraybuffer: function(u) {
        return v.nodebuffer.uint8array(u).buffer;
      }, uint8array: function(u) {
        return h(u, new Uint8Array(u.length));
      }, nodebuffer: _ }, c.transformTo = function(u, m) {
        if (m = m || "", !u) return m;
        c.checkSupport(u);
        var d = c.getTypeOf(m);
        return v[d][u](m);
      }, c.resolve = function(u) {
        for (var m = u.split("/"), d = [], g = 0; g < m.length; g++) {
          var k = m[g];
          k === "." || k === "" && g !== 0 && g !== m.length - 1 || (k === ".." ? d.pop() : d.push(k));
        }
        return d.join("/");
      }, c.getTypeOf = function(u) {
        return typeof u == "string" ? "string" : Object.prototype.toString.call(u) === "[object Array]" ? "array" : n.nodebuffer && i.isBuffer(u) ? "nodebuffer" : n.uint8array && u instanceof Uint8Array ? "uint8array" : n.arraybuffer && u instanceof ArrayBuffer ? "arraybuffer" : void 0;
      }, c.checkSupport = function(u) {
        if (!n[u.toLowerCase()]) throw new Error(u + " is not supported by this platform");
      }, c.MAX_VALUE_16BITS = 65535, c.MAX_VALUE_32BITS = -1, c.pretty = function(u) {
        var m, d, g = "";
        for (d = 0; d < (u || "").length; d++) g += "\\x" + ((m = u.charCodeAt(d)) < 16 ? "0" : "") + m.toString(16).toUpperCase();
        return g;
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
      }, c.prepareContent = function(u, m, d, g, k) {
        return o.Promise.resolve(m).then(function(C) {
          return n.blob && (C instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(C)) !== -1) && typeof FileReader < "u" ? new o.Promise(function(R, P) {
            var O = new FileReader();
            O.onload = function(U) {
              R(U.target.result);
            }, O.onerror = function(U) {
              P(U.target.error);
            }, O.readAsArrayBuffer(C);
          }) : C;
        }).then(function(C) {
          var R = c.getTypeOf(C);
          return R ? (R === "arraybuffer" ? C = c.transformTo("uint8array", C) : R === "string" && (k ? C = a.decode(C) : d && g !== !0 && (C = function(P) {
            return x(P, n.uint8array ? new Uint8Array(P.length) : new Array(P.length));
          }(C))), C) : o.Promise.reject(new Error("Can't read the data of '" + u + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
        });
      };
    }, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, setimmediate: 54 }], 33: [function(r, f, c) {
      var n = r("./reader/readerFor"), a = r("./utils"), i = r("./signature"), o = r("./zipEntry"), _ = r("./support");
      function x(b) {
        this.files = [], this.loadOptions = b;
      }
      x.prototype = { checkSignature: function(b) {
        if (!this.reader.readAndCheckSignature(b)) {
          this.reader.index -= 4;
          var w = this.reader.readString(4);
          throw new Error("Corrupted zip or bug: unexpected signature (" + a.pretty(w) + ", expected " + a.pretty(b) + ")");
        }
      }, isSignature: function(b, w) {
        var h = this.reader.index;
        this.reader.setIndex(b);
        var v = this.reader.readString(4) === w;
        return this.reader.setIndex(h), v;
      }, readBlockEndOfCentral: function() {
        this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
        var b = this.reader.readData(this.zipCommentLength), w = _.uint8array ? "uint8array" : "array", h = a.transformTo(w, b);
        this.zipComment = this.loadOptions.decodeFileName(h);
      }, readBlockZip64EndOfCentral: function() {
        this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
        for (var b, w, h, v = this.zip64EndOfCentralSize - 44; 0 < v; ) b = this.reader.readInt(2), w = this.reader.readInt(4), h = this.reader.readData(w), this.zip64ExtensibleData[b] = { id: b, length: w, value: h };
      }, readBlockZip64EndOfCentralLocator: function() {
        if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount) throw new Error("Multi-volumes zip are not supported");
      }, readLocalFiles: function() {
        var b, w;
        for (b = 0; b < this.files.length; b++) w = this.files[b], this.reader.setIndex(w.localHeaderOffset), this.checkSignature(i.LOCAL_FILE_HEADER), w.readLocalPart(this.reader), w.handleUTF8(), w.processAttributes();
      }, readCentralDir: function() {
        var b;
        for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(i.CENTRAL_FILE_HEADER); ) (b = new o({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(b);
        if (this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0) throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
      }, readEndOfCentral: function() {
        var b = this.reader.lastIndexOfSignature(i.CENTRAL_DIRECTORY_END);
        if (b < 0) throw this.isSignature(0, i.LOCAL_FILE_HEADER) ? new Error("Corrupted zip: can't find end of central directory") : new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
        this.reader.setIndex(b);
        var w = b;
        if (this.checkSignature(i.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === a.MAX_VALUE_16BITS || this.diskWithCentralDirStart === a.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === a.MAX_VALUE_16BITS || this.centralDirRecords === a.MAX_VALUE_16BITS || this.centralDirSize === a.MAX_VALUE_32BITS || this.centralDirOffset === a.MAX_VALUE_32BITS) {
          if (this.zip64 = !0, (b = this.reader.lastIndexOfSignature(i.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
          if (this.reader.setIndex(b), this.checkSignature(i.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, i.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(i.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
          this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(i.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
        }
        var h = this.centralDirOffset + this.centralDirSize;
        this.zip64 && (h += 20, h += 12 + this.zip64EndOfCentralSize);
        var v = w - h;
        if (0 < v) this.isSignature(w, i.CENTRAL_FILE_HEADER) || (this.reader.zero = v);
        else if (v < 0) throw new Error("Corrupted zip: missing " + Math.abs(v) + " bytes.");
      }, prepareReader: function(b) {
        this.reader = n(b);
      }, load: function(b) {
        this.prepareReader(b), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
      } }, f.exports = x;
    }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utils": 32, "./zipEntry": 34 }], 34: [function(r, f, c) {
      var n = r("./reader/readerFor"), a = r("./utils"), i = r("./compressedObject"), o = r("./crc32"), _ = r("./utf8"), x = r("./compressions"), b = r("./support");
      function w(h, v) {
        this.options = h, this.loadOptions = v;
      }
      w.prototype = { isEncrypted: function() {
        return (1 & this.bitFlag) == 1;
      }, useUTF8: function() {
        return (2048 & this.bitFlag) == 2048;
      }, readLocalPart: function(h) {
        var v, u;
        if (h.skip(22), this.fileNameLength = h.readInt(2), u = h.readInt(2), this.fileName = h.readData(this.fileNameLength), h.skip(u), this.compressedSize === -1 || this.uncompressedSize === -1) throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
        if ((v = function(m) {
          for (var d in x) if (Object.prototype.hasOwnProperty.call(x, d) && x[d].magic === m) return x[d];
          return null;
        }(this.compressionMethod)) === null) throw new Error("Corrupted zip : compression " + a.pretty(this.compressionMethod) + " unknown (inner file : " + a.transformTo("string", this.fileName) + ")");
        this.decompressed = new i(this.compressedSize, this.uncompressedSize, this.crc32, v, h.readData(this.compressedSize));
      }, readCentralPart: function(h) {
        this.versionMadeBy = h.readInt(2), h.skip(2), this.bitFlag = h.readInt(2), this.compressionMethod = h.readString(2), this.date = h.readDate(), this.crc32 = h.readInt(4), this.compressedSize = h.readInt(4), this.uncompressedSize = h.readInt(4);
        var v = h.readInt(2);
        if (this.extraFieldsLength = h.readInt(2), this.fileCommentLength = h.readInt(2), this.diskNumberStart = h.readInt(2), this.internalFileAttributes = h.readInt(2), this.externalFileAttributes = h.readInt(4), this.localHeaderOffset = h.readInt(4), this.isEncrypted()) throw new Error("Encrypted zip are not supported");
        h.skip(v), this.readExtraFields(h), this.parseZIP64ExtraField(h), this.fileComment = h.readData(this.fileCommentLength);
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
        var v, u, m, d = h.index + this.extraFieldsLength;
        for (this.extraFields || (this.extraFields = {}); h.index + 4 < d; ) v = h.readInt(2), u = h.readInt(2), m = h.readData(u), this.extraFields[v] = { id: v, length: u, value: m };
        h.setIndex(d);
      }, handleUTF8: function() {
        var h = b.uint8array ? "uint8array" : "array";
        if (this.useUTF8()) this.fileNameStr = _.utf8decode(this.fileName), this.fileCommentStr = _.utf8decode(this.fileComment);
        else {
          var v = this.findExtraFieldUnicodePath();
          if (v !== null) this.fileNameStr = v;
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
          var v = n(h.value);
          return v.readInt(1) !== 1 || o(this.fileName) !== v.readInt(4) ? null : _.utf8decode(v.readData(h.length - 5));
        }
        return null;
      }, findExtraFieldUnicodeComment: function() {
        var h = this.extraFields[25461];
        if (h) {
          var v = n(h.value);
          return v.readInt(1) !== 1 || o(this.fileComment) !== v.readInt(4) ? null : _.utf8decode(v.readData(h.length - 5));
        }
        return null;
      } }, f.exports = w;
    }, { "./compressedObject": 2, "./compressions": 3, "./crc32": 4, "./reader/readerFor": 22, "./support": 30, "./utf8": 31, "./utils": 32 }], 35: [function(r, f, c) {
      function n(v, u, m) {
        this.name = v, this.dir = m.dir, this.date = m.date, this.comment = m.comment, this.unixPermissions = m.unixPermissions, this.dosPermissions = m.dosPermissions, this._data = u, this._dataBinary = m.binary, this.options = { compression: m.compression, compressionOptions: m.compressionOptions };
      }
      var a = r("./stream/StreamHelper"), i = r("./stream/DataWorker"), o = r("./utf8"), _ = r("./compressedObject"), x = r("./stream/GenericWorker");
      n.prototype = { internalStream: function(v) {
        var u = null, m = "string";
        try {
          if (!v) throw new Error("No output type specified.");
          var d = (m = v.toLowerCase()) === "string" || m === "text";
          m !== "binarystring" && m !== "text" || (m = "string"), u = this._decompressWorker();
          var g = !this._dataBinary;
          g && !d && (u = u.pipe(new o.Utf8EncodeWorker())), !g && d && (u = u.pipe(new o.Utf8DecodeWorker()));
        } catch (k) {
          (u = new x("error")).error(k);
        }
        return new a(u, m, "");
      }, async: function(v, u) {
        return this.internalStream(v).accumulate(u);
      }, nodeStream: function(v, u) {
        return this.internalStream(v || "nodebuffer").toNodejsStream(u);
      }, _compressWorker: function(v, u) {
        if (this._data instanceof _ && this._data.compression.magic === v.magic) return this._data.getCompressedWorker();
        var m = this._decompressWorker();
        return this._dataBinary || (m = m.pipe(new o.Utf8EncodeWorker())), _.createWorkerFrom(m, v, u);
      }, _decompressWorker: function() {
        return this._data instanceof _ ? this._data.getContentWorker() : this._data instanceof x ? this._data : new i(this._data);
      } };
      for (var b = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], w = function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, h = 0; h < b.length; h++) n.prototype[b[h]] = w;
      f.exports = n;
    }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }], 36: [function(r, f, c) {
      (function(n) {
        var a, i, o = n.MutationObserver || n.WebKitMutationObserver;
        if (o) {
          var _ = 0, x = new o(v), b = n.document.createTextNode("");
          x.observe(b, { characterData: !0 }), a = function() {
            b.data = _ = ++_ % 2;
          };
        } else if (n.setImmediate || n.MessageChannel === void 0) a = "document" in n && "onreadystatechange" in n.document.createElement("script") ? function() {
          var u = n.document.createElement("script");
          u.onreadystatechange = function() {
            v(), u.onreadystatechange = null, u.parentNode.removeChild(u), u = null;
          }, n.document.documentElement.appendChild(u);
        } : function() {
          setTimeout(v, 0);
        };
        else {
          var w = new n.MessageChannel();
          w.port1.onmessage = v, a = function() {
            w.port2.postMessage(0);
          };
        }
        var h = [];
        function v() {
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
      }).call(this, typeof ue < "u" ? ue : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 37: [function(r, f, c) {
      var n = r("immediate");
      function a() {
      }
      var i = {}, o = ["REJECTED"], _ = ["FULFILLED"], x = ["PENDING"];
      function b(d) {
        if (typeof d != "function") throw new TypeError("resolver must be a function");
        this.state = x, this.queue = [], this.outcome = void 0, d !== a && u(this, d);
      }
      function w(d, g, k) {
        this.promise = d, typeof g == "function" && (this.onFulfilled = g, this.callFulfilled = this.otherCallFulfilled), typeof k == "function" && (this.onRejected = k, this.callRejected = this.otherCallRejected);
      }
      function h(d, g, k) {
        n(function() {
          var C;
          try {
            C = g(k);
          } catch (R) {
            return i.reject(d, R);
          }
          C === d ? i.reject(d, new TypeError("Cannot resolve promise with itself")) : i.resolve(d, C);
        });
      }
      function v(d) {
        var g = d && d.then;
        if (d && (typeof d == "object" || typeof d == "function") && typeof g == "function") return function() {
          g.apply(d, arguments);
        };
      }
      function u(d, g) {
        var k = !1;
        function C(O) {
          k || (k = !0, i.reject(d, O));
        }
        function R(O) {
          k || (k = !0, i.resolve(d, O));
        }
        var P = m(function() {
          g(R, C);
        });
        P.status === "error" && C(P.value);
      }
      function m(d, g) {
        var k = {};
        try {
          k.value = d(g), k.status = "success";
        } catch (C) {
          k.status = "error", k.value = C;
        }
        return k;
      }
      (f.exports = b).prototype.finally = function(d) {
        if (typeof d != "function") return this;
        var g = this.constructor;
        return this.then(function(k) {
          return g.resolve(d()).then(function() {
            return k;
          });
        }, function(k) {
          return g.resolve(d()).then(function() {
            throw k;
          });
        });
      }, b.prototype.catch = function(d) {
        return this.then(null, d);
      }, b.prototype.then = function(d, g) {
        if (typeof d != "function" && this.state === _ || typeof g != "function" && this.state === o) return this;
        var k = new this.constructor(a);
        return this.state !== x ? h(k, this.state === _ ? d : g, this.outcome) : this.queue.push(new w(k, d, g)), k;
      }, w.prototype.callFulfilled = function(d) {
        i.resolve(this.promise, d);
      }, w.prototype.otherCallFulfilled = function(d) {
        h(this.promise, this.onFulfilled, d);
      }, w.prototype.callRejected = function(d) {
        i.reject(this.promise, d);
      }, w.prototype.otherCallRejected = function(d) {
        h(this.promise, this.onRejected, d);
      }, i.resolve = function(d, g) {
        var k = m(v, g);
        if (k.status === "error") return i.reject(d, k.value);
        var C = k.value;
        if (C) u(d, C);
        else {
          d.state = _, d.outcome = g;
          for (var R = -1, P = d.queue.length; ++R < P; ) d.queue[R].callFulfilled(g);
        }
        return d;
      }, i.reject = function(d, g) {
        d.state = o, d.outcome = g;
        for (var k = -1, C = d.queue.length; ++k < C; ) d.queue[k].callRejected(g);
        return d;
      }, b.resolve = function(d) {
        return d instanceof this ? d : i.resolve(new this(a), d);
      }, b.reject = function(d) {
        var g = new this(a);
        return i.reject(g, d);
      }, b.all = function(d) {
        var g = this;
        if (Object.prototype.toString.call(d) !== "[object Array]") return this.reject(new TypeError("must be an array"));
        var k = d.length, C = !1;
        if (!k) return this.resolve([]);
        for (var R = new Array(k), P = 0, O = -1, U = new this(a); ++O < k; ) j(d[O], O);
        return U;
        function j($, rt) {
          g.resolve($).then(function(S) {
            R[rt] = S, ++P !== k || C || (C = !0, i.resolve(U, R));
          }, function(S) {
            C || (C = !0, i.reject(U, S));
          });
        }
      }, b.race = function(d) {
        var g = this;
        if (Object.prototype.toString.call(d) !== "[object Array]") return this.reject(new TypeError("must be an array"));
        var k = d.length, C = !1;
        if (!k) return this.resolve([]);
        for (var R = -1, P = new this(a); ++R < k; ) O = d[R], g.resolve(O).then(function(U) {
          C || (C = !0, i.resolve(P, U));
        }, function(U) {
          C || (C = !0, i.reject(P, U));
        });
        var O;
        return P;
      };
    }, { immediate: 36 }], 38: [function(r, f, c) {
      var n = {};
      (0, r("./lib/utils/common").assign)(n, r("./lib/deflate"), r("./lib/inflate"), r("./lib/zlib/constants")), f.exports = n;
    }, { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 }], 39: [function(r, f, c) {
      var n = r("./zlib/deflate"), a = r("./utils/common"), i = r("./utils/strings"), o = r("./zlib/messages"), _ = r("./zlib/zstream"), x = Object.prototype.toString, b = 0, w = -1, h = 0, v = 8;
      function u(d) {
        if (!(this instanceof u)) return new u(d);
        this.options = a.assign({ level: w, method: v, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: h, to: "" }, d || {});
        var g = this.options;
        g.raw && 0 < g.windowBits ? g.windowBits = -g.windowBits : g.gzip && 0 < g.windowBits && g.windowBits < 16 && (g.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new _(), this.strm.avail_out = 0;
        var k = n.deflateInit2(this.strm, g.level, g.method, g.windowBits, g.memLevel, g.strategy);
        if (k !== b) throw new Error(o[k]);
        if (g.header && n.deflateSetHeader(this.strm, g.header), g.dictionary) {
          var C;
          if (C = typeof g.dictionary == "string" ? i.string2buf(g.dictionary) : x.call(g.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(g.dictionary) : g.dictionary, (k = n.deflateSetDictionary(this.strm, C)) !== b) throw new Error(o[k]);
          this._dict_set = !0;
        }
      }
      function m(d, g) {
        var k = new u(g);
        if (k.push(d, !0), k.err) throw k.msg || o[k.err];
        return k.result;
      }
      u.prototype.push = function(d, g) {
        var k, C, R = this.strm, P = this.options.chunkSize;
        if (this.ended) return !1;
        C = g === ~~g ? g : g === !0 ? 4 : 0, typeof d == "string" ? R.input = i.string2buf(d) : x.call(d) === "[object ArrayBuffer]" ? R.input = new Uint8Array(d) : R.input = d, R.next_in = 0, R.avail_in = R.input.length;
        do {
          if (R.avail_out === 0 && (R.output = new a.Buf8(P), R.next_out = 0, R.avail_out = P), (k = n.deflate(R, C)) !== 1 && k !== b) return this.onEnd(k), !(this.ended = !0);
          R.avail_out !== 0 && (R.avail_in !== 0 || C !== 4 && C !== 2) || (this.options.to === "string" ? this.onData(i.buf2binstring(a.shrinkBuf(R.output, R.next_out))) : this.onData(a.shrinkBuf(R.output, R.next_out)));
        } while ((0 < R.avail_in || R.avail_out === 0) && k !== 1);
        return C === 4 ? (k = n.deflateEnd(this.strm), this.onEnd(k), this.ended = !0, k === b) : C !== 2 || (this.onEnd(b), !(R.avail_out = 0));
      }, u.prototype.onData = function(d) {
        this.chunks.push(d);
      }, u.prototype.onEnd = function(d) {
        d === b && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = a.flattenChunks(this.chunks)), this.chunks = [], this.err = d, this.msg = this.strm.msg;
      }, c.Deflate = u, c.deflate = m, c.deflateRaw = function(d, g) {
        return (g = g || {}).raw = !0, m(d, g);
      }, c.gzip = function(d, g) {
        return (g = g || {}).gzip = !0, m(d, g);
      };
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/deflate": 46, "./zlib/messages": 51, "./zlib/zstream": 53 }], 40: [function(r, f, c) {
      var n = r("./zlib/inflate"), a = r("./utils/common"), i = r("./utils/strings"), o = r("./zlib/constants"), _ = r("./zlib/messages"), x = r("./zlib/zstream"), b = r("./zlib/gzheader"), w = Object.prototype.toString;
      function h(u) {
        if (!(this instanceof h)) return new h(u);
        this.options = a.assign({ chunkSize: 16384, windowBits: 0, to: "" }, u || {});
        var m = this.options;
        m.raw && 0 <= m.windowBits && m.windowBits < 16 && (m.windowBits = -m.windowBits, m.windowBits === 0 && (m.windowBits = -15)), !(0 <= m.windowBits && m.windowBits < 16) || u && u.windowBits || (m.windowBits += 32), 15 < m.windowBits && m.windowBits < 48 && !(15 & m.windowBits) && (m.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new x(), this.strm.avail_out = 0;
        var d = n.inflateInit2(this.strm, m.windowBits);
        if (d !== o.Z_OK) throw new Error(_[d]);
        this.header = new b(), n.inflateGetHeader(this.strm, this.header);
      }
      function v(u, m) {
        var d = new h(m);
        if (d.push(u, !0), d.err) throw d.msg || _[d.err];
        return d.result;
      }
      h.prototype.push = function(u, m) {
        var d, g, k, C, R, P, O = this.strm, U = this.options.chunkSize, j = this.options.dictionary, $ = !1;
        if (this.ended) return !1;
        g = m === ~~m ? m : m === !0 ? o.Z_FINISH : o.Z_NO_FLUSH, typeof u == "string" ? O.input = i.binstring2buf(u) : w.call(u) === "[object ArrayBuffer]" ? O.input = new Uint8Array(u) : O.input = u, O.next_in = 0, O.avail_in = O.input.length;
        do {
          if (O.avail_out === 0 && (O.output = new a.Buf8(U), O.next_out = 0, O.avail_out = U), (d = n.inflate(O, o.Z_NO_FLUSH)) === o.Z_NEED_DICT && j && (P = typeof j == "string" ? i.string2buf(j) : w.call(j) === "[object ArrayBuffer]" ? new Uint8Array(j) : j, d = n.inflateSetDictionary(this.strm, P)), d === o.Z_BUF_ERROR && $ === !0 && (d = o.Z_OK, $ = !1), d !== o.Z_STREAM_END && d !== o.Z_OK) return this.onEnd(d), !(this.ended = !0);
          O.next_out && (O.avail_out !== 0 && d !== o.Z_STREAM_END && (O.avail_in !== 0 || g !== o.Z_FINISH && g !== o.Z_SYNC_FLUSH) || (this.options.to === "string" ? (k = i.utf8border(O.output, O.next_out), C = O.next_out - k, R = i.buf2string(O.output, k), O.next_out = C, O.avail_out = U - C, C && a.arraySet(O.output, O.output, k, C, 0), this.onData(R)) : this.onData(a.shrinkBuf(O.output, O.next_out)))), O.avail_in === 0 && O.avail_out === 0 && ($ = !0);
        } while ((0 < O.avail_in || O.avail_out === 0) && d !== o.Z_STREAM_END);
        return d === o.Z_STREAM_END && (g = o.Z_FINISH), g === o.Z_FINISH ? (d = n.inflateEnd(this.strm), this.onEnd(d), this.ended = !0, d === o.Z_OK) : g !== o.Z_SYNC_FLUSH || (this.onEnd(o.Z_OK), !(O.avail_out = 0));
      }, h.prototype.onData = function(u) {
        this.chunks.push(u);
      }, h.prototype.onEnd = function(u) {
        u === o.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = a.flattenChunks(this.chunks)), this.chunks = [], this.err = u, this.msg = this.strm.msg;
      }, c.Inflate = h, c.inflate = v, c.inflateRaw = function(u, m) {
        return (m = m || {}).raw = !0, v(u, m);
      }, c.ungzip = v;
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/constants": 44, "./zlib/gzheader": 47, "./zlib/inflate": 49, "./zlib/messages": 51, "./zlib/zstream": 53 }], 41: [function(r, f, c) {
      var n = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
      c.assign = function(o) {
        for (var _ = Array.prototype.slice.call(arguments, 1); _.length; ) {
          var x = _.shift();
          if (x) {
            if (typeof x != "object") throw new TypeError(x + "must be non-object");
            for (var b in x) x.hasOwnProperty(b) && (o[b] = x[b]);
          }
        }
        return o;
      }, c.shrinkBuf = function(o, _) {
        return o.length === _ ? o : o.subarray ? o.subarray(0, _) : (o.length = _, o);
      };
      var a = { arraySet: function(o, _, x, b, w) {
        if (_.subarray && o.subarray) o.set(_.subarray(x, x + b), w);
        else for (var h = 0; h < b; h++) o[w + h] = _[x + h];
      }, flattenChunks: function(o) {
        var _, x, b, w, h, v;
        for (_ = b = 0, x = o.length; _ < x; _++) b += o[_].length;
        for (v = new Uint8Array(b), _ = w = 0, x = o.length; _ < x; _++) h = o[_], v.set(h, w), w += h.length;
        return v;
      } }, i = { arraySet: function(o, _, x, b, w) {
        for (var h = 0; h < b; h++) o[w + h] = _[x + h];
      }, flattenChunks: function(o) {
        return [].concat.apply([], o);
      } };
      c.setTyped = function(o) {
        o ? (c.Buf8 = Uint8Array, c.Buf16 = Uint16Array, c.Buf32 = Int32Array, c.assign(c, a)) : (c.Buf8 = Array, c.Buf16 = Array, c.Buf32 = Array, c.assign(c, i));
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
      for (var o = new n.Buf8(256), _ = 0; _ < 256; _++) o[_] = 252 <= _ ? 6 : 248 <= _ ? 5 : 240 <= _ ? 4 : 224 <= _ ? 3 : 192 <= _ ? 2 : 1;
      function x(b, w) {
        if (w < 65537 && (b.subarray && i || !b.subarray && a)) return String.fromCharCode.apply(null, n.shrinkBuf(b, w));
        for (var h = "", v = 0; v < w; v++) h += String.fromCharCode(b[v]);
        return h;
      }
      o[254] = o[254] = 1, c.string2buf = function(b) {
        var w, h, v, u, m, d = b.length, g = 0;
        for (u = 0; u < d; u++) (64512 & (h = b.charCodeAt(u))) == 55296 && u + 1 < d && (64512 & (v = b.charCodeAt(u + 1))) == 56320 && (h = 65536 + (h - 55296 << 10) + (v - 56320), u++), g += h < 128 ? 1 : h < 2048 ? 2 : h < 65536 ? 3 : 4;
        for (w = new n.Buf8(g), u = m = 0; m < g; u++) (64512 & (h = b.charCodeAt(u))) == 55296 && u + 1 < d && (64512 & (v = b.charCodeAt(u + 1))) == 56320 && (h = 65536 + (h - 55296 << 10) + (v - 56320), u++), h < 128 ? w[m++] = h : (h < 2048 ? w[m++] = 192 | h >>> 6 : (h < 65536 ? w[m++] = 224 | h >>> 12 : (w[m++] = 240 | h >>> 18, w[m++] = 128 | h >>> 12 & 63), w[m++] = 128 | h >>> 6 & 63), w[m++] = 128 | 63 & h);
        return w;
      }, c.buf2binstring = function(b) {
        return x(b, b.length);
      }, c.binstring2buf = function(b) {
        for (var w = new n.Buf8(b.length), h = 0, v = w.length; h < v; h++) w[h] = b.charCodeAt(h);
        return w;
      }, c.buf2string = function(b, w) {
        var h, v, u, m, d = w || b.length, g = new Array(2 * d);
        for (h = v = 0; h < d; ) if ((u = b[h++]) < 128) g[v++] = u;
        else if (4 < (m = o[u])) g[v++] = 65533, h += m - 1;
        else {
          for (u &= m === 2 ? 31 : m === 3 ? 15 : 7; 1 < m && h < d; ) u = u << 6 | 63 & b[h++], m--;
          1 < m ? g[v++] = 65533 : u < 65536 ? g[v++] = u : (u -= 65536, g[v++] = 55296 | u >> 10 & 1023, g[v++] = 56320 | 1023 & u);
        }
        return x(g, v);
      }, c.utf8border = function(b, w) {
        var h;
        for ((w = w || b.length) > b.length && (w = b.length), h = w - 1; 0 <= h && (192 & b[h]) == 128; ) h--;
        return h < 0 || h === 0 ? w : h + o[b[h]] > w ? h : w;
      };
    }, { "./common": 41 }], 43: [function(r, f, c) {
      f.exports = function(n, a, i, o) {
        for (var _ = 65535 & n | 0, x = n >>> 16 & 65535 | 0, b = 0; i !== 0; ) {
          for (i -= b = 2e3 < i ? 2e3 : i; x = x + (_ = _ + a[o++] | 0) | 0, --b; ) ;
          _ %= 65521, x %= 65521;
        }
        return _ | x << 16 | 0;
      };
    }, {}], 44: [function(r, f, c) {
      f.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
    }, {}], 45: [function(r, f, c) {
      var n = function() {
        for (var a, i = [], o = 0; o < 256; o++) {
          a = o;
          for (var _ = 0; _ < 8; _++) a = 1 & a ? 3988292384 ^ a >>> 1 : a >>> 1;
          i[o] = a;
        }
        return i;
      }();
      f.exports = function(a, i, o, _) {
        var x = n, b = _ + o;
        a ^= -1;
        for (var w = _; w < b; w++) a = a >>> 8 ^ x[255 & (a ^ i[w])];
        return -1 ^ a;
      };
    }, {}], 46: [function(r, f, c) {
      var n, a = r("../utils/common"), i = r("./trees"), o = r("./adler32"), _ = r("./crc32"), x = r("./messages"), b = 0, w = 4, h = 0, v = -2, u = -1, m = 4, d = 2, g = 8, k = 9, C = 286, R = 30, P = 19, O = 2 * C + 1, U = 15, j = 3, $ = 258, rt = $ + j + 1, S = 42, z = 113, s = 1, F = 2, it = 3, Z = 4;
      function st(e, L) {
        return e.msg = x[L], L;
      }
      function V(e) {
        return (e << 1) - (4 < e ? 9 : 0);
      }
      function at(e) {
        for (var L = e.length; 0 <= --L; ) e[L] = 0;
      }
      function D(e) {
        var L = e.state, N = L.pending;
        N > e.avail_out && (N = e.avail_out), N !== 0 && (a.arraySet(e.output, L.pending_buf, L.pending_out, N, e.next_out), e.next_out += N, L.pending_out += N, e.total_out += N, e.avail_out -= N, L.pending -= N, L.pending === 0 && (L.pending_out = 0));
      }
      function A(e, L) {
        i._tr_flush_block(e, 0 <= e.block_start ? e.block_start : -1, e.strstart - e.block_start, L), e.block_start = e.strstart, D(e.strm);
      }
      function tt(e, L) {
        e.pending_buf[e.pending++] = L;
      }
      function H(e, L) {
        e.pending_buf[e.pending++] = L >>> 8 & 255, e.pending_buf[e.pending++] = 255 & L;
      }
      function q(e, L) {
        var N, y, p = e.max_chain_length, T = e.strstart, M = e.prev_length, W = e.nice_match, I = e.strstart > e.w_size - rt ? e.strstart - (e.w_size - rt) : 0, X = e.window, J = e.w_mask, K = e.prev, ot = e.strstart + $, gt = X[T + M - 1], dt = X[T + M];
        e.prev_length >= e.good_match && (p >>= 2), W > e.lookahead && (W = e.lookahead);
        do
          if (X[(N = L) + M] === dt && X[N + M - 1] === gt && X[N] === X[T] && X[++N] === X[T + 1]) {
            T += 2, N++;
            do
              ;
            while (X[++T] === X[++N] && X[++T] === X[++N] && X[++T] === X[++N] && X[++T] === X[++N] && X[++T] === X[++N] && X[++T] === X[++N] && X[++T] === X[++N] && X[++T] === X[++N] && T < ot);
            if (y = $ - (ot - T), T = ot - $, M < y) {
              if (e.match_start = L, W <= (M = y)) break;
              gt = X[T + M - 1], dt = X[T + M];
            }
          }
        while ((L = K[L & J]) > I && --p != 0);
        return M <= e.lookahead ? M : e.lookahead;
      }
      function yt(e) {
        var L, N, y, p, T, M, W, I, X, J, K = e.w_size;
        do {
          if (p = e.window_size - e.lookahead - e.strstart, e.strstart >= K + (K - rt)) {
            for (a.arraySet(e.window, e.window, K, K, 0), e.match_start -= K, e.strstart -= K, e.block_start -= K, L = N = e.hash_size; y = e.head[--L], e.head[L] = K <= y ? y - K : 0, --N; ) ;
            for (L = N = K; y = e.prev[--L], e.prev[L] = K <= y ? y - K : 0, --N; ) ;
            p += K;
          }
          if (e.strm.avail_in === 0) break;
          if (M = e.strm, W = e.window, I = e.strstart + e.lookahead, X = p, J = void 0, J = M.avail_in, X < J && (J = X), N = J === 0 ? 0 : (M.avail_in -= J, a.arraySet(W, M.input, M.next_in, J, I), M.state.wrap === 1 ? M.adler = o(M.adler, W, J, I) : M.state.wrap === 2 && (M.adler = _(M.adler, W, J, I)), M.next_in += J, M.total_in += J, J), e.lookahead += N, e.lookahead + e.insert >= j) for (T = e.strstart - e.insert, e.ins_h = e.window[T], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[T + 1]) & e.hash_mask; e.insert && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[T + j - 1]) & e.hash_mask, e.prev[T & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = T, T++, e.insert--, !(e.lookahead + e.insert < j)); ) ;
        } while (e.lookahead < rt && e.strm.avail_in !== 0);
      }
      function Et(e, L) {
        for (var N, y; ; ) {
          if (e.lookahead < rt) {
            if (yt(e), e.lookahead < rt && L === b) return s;
            if (e.lookahead === 0) break;
          }
          if (N = 0, e.lookahead >= j && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + j - 1]) & e.hash_mask, N = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), N !== 0 && e.strstart - N <= e.w_size - rt && (e.match_length = q(e, N)), e.match_length >= j) if (y = i._tr_tally(e, e.strstart - e.match_start, e.match_length - j), e.lookahead -= e.match_length, e.match_length <= e.max_lazy_match && e.lookahead >= j) {
            for (e.match_length--; e.strstart++, e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + j - 1]) & e.hash_mask, N = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart, --e.match_length != 0; ) ;
            e.strstart++;
          } else e.strstart += e.match_length, e.match_length = 0, e.ins_h = e.window[e.strstart], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 1]) & e.hash_mask;
          else y = i._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++;
          if (y && (A(e, !1), e.strm.avail_out === 0)) return s;
        }
        return e.insert = e.strstart < j - 1 ? e.strstart : j - 1, L === w ? (A(e, !0), e.strm.avail_out === 0 ? it : Z) : e.last_lit && (A(e, !1), e.strm.avail_out === 0) ? s : F;
      }
      function ft(e, L) {
        for (var N, y, p; ; ) {
          if (e.lookahead < rt) {
            if (yt(e), e.lookahead < rt && L === b) return s;
            if (e.lookahead === 0) break;
          }
          if (N = 0, e.lookahead >= j && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + j - 1]) & e.hash_mask, N = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), e.prev_length = e.match_length, e.prev_match = e.match_start, e.match_length = j - 1, N !== 0 && e.prev_length < e.max_lazy_match && e.strstart - N <= e.w_size - rt && (e.match_length = q(e, N), e.match_length <= 5 && (e.strategy === 1 || e.match_length === j && 4096 < e.strstart - e.match_start) && (e.match_length = j - 1)), e.prev_length >= j && e.match_length <= e.prev_length) {
            for (p = e.strstart + e.lookahead - j, y = i._tr_tally(e, e.strstart - 1 - e.prev_match, e.prev_length - j), e.lookahead -= e.prev_length - 1, e.prev_length -= 2; ++e.strstart <= p && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + j - 1]) & e.hash_mask, N = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), --e.prev_length != 0; ) ;
            if (e.match_available = 0, e.match_length = j - 1, e.strstart++, y && (A(e, !1), e.strm.avail_out === 0)) return s;
          } else if (e.match_available) {
            if ((y = i._tr_tally(e, 0, e.window[e.strstart - 1])) && A(e, !1), e.strstart++, e.lookahead--, e.strm.avail_out === 0) return s;
          } else e.match_available = 1, e.strstart++, e.lookahead--;
        }
        return e.match_available && (y = i._tr_tally(e, 0, e.window[e.strstart - 1]), e.match_available = 0), e.insert = e.strstart < j - 1 ? e.strstart : j - 1, L === w ? (A(e, !0), e.strm.avail_out === 0 ? it : Z) : e.last_lit && (A(e, !1), e.strm.avail_out === 0) ? s : F;
      }
      function nt(e, L, N, y, p) {
        this.good_length = e, this.max_lazy = L, this.nice_length = N, this.max_chain = y, this.func = p;
      }
      function _t() {
        this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = g, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new a.Buf16(2 * O), this.dyn_dtree = new a.Buf16(2 * (2 * R + 1)), this.bl_tree = new a.Buf16(2 * (2 * P + 1)), at(this.dyn_ltree), at(this.dyn_dtree), at(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new a.Buf16(U + 1), this.heap = new a.Buf16(2 * C + 1), at(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new a.Buf16(2 * C + 1), at(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
      }
      function ht(e) {
        var L;
        return e && e.state ? (e.total_in = e.total_out = 0, e.data_type = d, (L = e.state).pending = 0, L.pending_out = 0, L.wrap < 0 && (L.wrap = -L.wrap), L.status = L.wrap ? S : z, e.adler = L.wrap === 2 ? 0 : 1, L.last_flush = b, i._tr_init(L), h) : st(e, v);
      }
      function bt(e) {
        var L = ht(e);
        return L === h && function(N) {
          N.window_size = 2 * N.w_size, at(N.head), N.max_lazy_match = n[N.level].max_lazy, N.good_match = n[N.level].good_length, N.nice_match = n[N.level].nice_length, N.max_chain_length = n[N.level].max_chain, N.strstart = 0, N.block_start = 0, N.lookahead = 0, N.insert = 0, N.match_length = N.prev_length = j - 1, N.match_available = 0, N.ins_h = 0;
        }(e.state), L;
      }
      function kt(e, L, N, y, p, T) {
        if (!e) return v;
        var M = 1;
        if (L === u && (L = 6), y < 0 ? (M = 0, y = -y) : 15 < y && (M = 2, y -= 16), p < 1 || k < p || N !== g || y < 8 || 15 < y || L < 0 || 9 < L || T < 0 || m < T) return st(e, v);
        y === 8 && (y = 9);
        var W = new _t();
        return (e.state = W).strm = e, W.wrap = M, W.gzhead = null, W.w_bits = y, W.w_size = 1 << W.w_bits, W.w_mask = W.w_size - 1, W.hash_bits = p + 7, W.hash_size = 1 << W.hash_bits, W.hash_mask = W.hash_size - 1, W.hash_shift = ~~((W.hash_bits + j - 1) / j), W.window = new a.Buf8(2 * W.w_size), W.head = new a.Buf16(W.hash_size), W.prev = new a.Buf16(W.w_size), W.lit_bufsize = 1 << p + 6, W.pending_buf_size = 4 * W.lit_bufsize, W.pending_buf = new a.Buf8(W.pending_buf_size), W.d_buf = 1 * W.lit_bufsize, W.l_buf = 3 * W.lit_bufsize, W.level = L, W.strategy = T, W.method = N, bt(e);
      }
      n = [new nt(0, 0, 0, 0, function(e, L) {
        var N = 65535;
        for (N > e.pending_buf_size - 5 && (N = e.pending_buf_size - 5); ; ) {
          if (e.lookahead <= 1) {
            if (yt(e), e.lookahead === 0 && L === b) return s;
            if (e.lookahead === 0) break;
          }
          e.strstart += e.lookahead, e.lookahead = 0;
          var y = e.block_start + N;
          if ((e.strstart === 0 || e.strstart >= y) && (e.lookahead = e.strstart - y, e.strstart = y, A(e, !1), e.strm.avail_out === 0) || e.strstart - e.block_start >= e.w_size - rt && (A(e, !1), e.strm.avail_out === 0)) return s;
        }
        return e.insert = 0, L === w ? (A(e, !0), e.strm.avail_out === 0 ? it : Z) : (e.strstart > e.block_start && (A(e, !1), e.strm.avail_out), s);
      }), new nt(4, 4, 8, 4, Et), new nt(4, 5, 16, 8, Et), new nt(4, 6, 32, 32, Et), new nt(4, 4, 16, 16, ft), new nt(8, 16, 32, 32, ft), new nt(8, 16, 128, 128, ft), new nt(8, 32, 128, 256, ft), new nt(32, 128, 258, 1024, ft), new nt(32, 258, 258, 4096, ft)], c.deflateInit = function(e, L) {
        return kt(e, L, g, 15, 8, 0);
      }, c.deflateInit2 = kt, c.deflateReset = bt, c.deflateResetKeep = ht, c.deflateSetHeader = function(e, L) {
        return e && e.state ? e.state.wrap !== 2 ? v : (e.state.gzhead = L, h) : v;
      }, c.deflate = function(e, L) {
        var N, y, p, T;
        if (!e || !e.state || 5 < L || L < 0) return e ? st(e, v) : v;
        if (y = e.state, !e.output || !e.input && e.avail_in !== 0 || y.status === 666 && L !== w) return st(e, e.avail_out === 0 ? -5 : v);
        if (y.strm = e, N = y.last_flush, y.last_flush = L, y.status === S) if (y.wrap === 2) e.adler = 0, tt(y, 31), tt(y, 139), tt(y, 8), y.gzhead ? (tt(y, (y.gzhead.text ? 1 : 0) + (y.gzhead.hcrc ? 2 : 0) + (y.gzhead.extra ? 4 : 0) + (y.gzhead.name ? 8 : 0) + (y.gzhead.comment ? 16 : 0)), tt(y, 255 & y.gzhead.time), tt(y, y.gzhead.time >> 8 & 255), tt(y, y.gzhead.time >> 16 & 255), tt(y, y.gzhead.time >> 24 & 255), tt(y, y.level === 9 ? 2 : 2 <= y.strategy || y.level < 2 ? 4 : 0), tt(y, 255 & y.gzhead.os), y.gzhead.extra && y.gzhead.extra.length && (tt(y, 255 & y.gzhead.extra.length), tt(y, y.gzhead.extra.length >> 8 & 255)), y.gzhead.hcrc && (e.adler = _(e.adler, y.pending_buf, y.pending, 0)), y.gzindex = 0, y.status = 69) : (tt(y, 0), tt(y, 0), tt(y, 0), tt(y, 0), tt(y, 0), tt(y, y.level === 9 ? 2 : 2 <= y.strategy || y.level < 2 ? 4 : 0), tt(y, 3), y.status = z);
        else {
          var M = g + (y.w_bits - 8 << 4) << 8;
          M |= (2 <= y.strategy || y.level < 2 ? 0 : y.level < 6 ? 1 : y.level === 6 ? 2 : 3) << 6, y.strstart !== 0 && (M |= 32), M += 31 - M % 31, y.status = z, H(y, M), y.strstart !== 0 && (H(y, e.adler >>> 16), H(y, 65535 & e.adler)), e.adler = 1;
        }
        if (y.status === 69) if (y.gzhead.extra) {
          for (p = y.pending; y.gzindex < (65535 & y.gzhead.extra.length) && (y.pending !== y.pending_buf_size || (y.gzhead.hcrc && y.pending > p && (e.adler = _(e.adler, y.pending_buf, y.pending - p, p)), D(e), p = y.pending, y.pending !== y.pending_buf_size)); ) tt(y, 255 & y.gzhead.extra[y.gzindex]), y.gzindex++;
          y.gzhead.hcrc && y.pending > p && (e.adler = _(e.adler, y.pending_buf, y.pending - p, p)), y.gzindex === y.gzhead.extra.length && (y.gzindex = 0, y.status = 73);
        } else y.status = 73;
        if (y.status === 73) if (y.gzhead.name) {
          p = y.pending;
          do {
            if (y.pending === y.pending_buf_size && (y.gzhead.hcrc && y.pending > p && (e.adler = _(e.adler, y.pending_buf, y.pending - p, p)), D(e), p = y.pending, y.pending === y.pending_buf_size)) {
              T = 1;
              break;
            }
            T = y.gzindex < y.gzhead.name.length ? 255 & y.gzhead.name.charCodeAt(y.gzindex++) : 0, tt(y, T);
          } while (T !== 0);
          y.gzhead.hcrc && y.pending > p && (e.adler = _(e.adler, y.pending_buf, y.pending - p, p)), T === 0 && (y.gzindex = 0, y.status = 91);
        } else y.status = 91;
        if (y.status === 91) if (y.gzhead.comment) {
          p = y.pending;
          do {
            if (y.pending === y.pending_buf_size && (y.gzhead.hcrc && y.pending > p && (e.adler = _(e.adler, y.pending_buf, y.pending - p, p)), D(e), p = y.pending, y.pending === y.pending_buf_size)) {
              T = 1;
              break;
            }
            T = y.gzindex < y.gzhead.comment.length ? 255 & y.gzhead.comment.charCodeAt(y.gzindex++) : 0, tt(y, T);
          } while (T !== 0);
          y.gzhead.hcrc && y.pending > p && (e.adler = _(e.adler, y.pending_buf, y.pending - p, p)), T === 0 && (y.status = 103);
        } else y.status = 103;
        if (y.status === 103 && (y.gzhead.hcrc ? (y.pending + 2 > y.pending_buf_size && D(e), y.pending + 2 <= y.pending_buf_size && (tt(y, 255 & e.adler), tt(y, e.adler >> 8 & 255), e.adler = 0, y.status = z)) : y.status = z), y.pending !== 0) {
          if (D(e), e.avail_out === 0) return y.last_flush = -1, h;
        } else if (e.avail_in === 0 && V(L) <= V(N) && L !== w) return st(e, -5);
        if (y.status === 666 && e.avail_in !== 0) return st(e, -5);
        if (e.avail_in !== 0 || y.lookahead !== 0 || L !== b && y.status !== 666) {
          var W = y.strategy === 2 ? function(I, X) {
            for (var J; ; ) {
              if (I.lookahead === 0 && (yt(I), I.lookahead === 0)) {
                if (X === b) return s;
                break;
              }
              if (I.match_length = 0, J = i._tr_tally(I, 0, I.window[I.strstart]), I.lookahead--, I.strstart++, J && (A(I, !1), I.strm.avail_out === 0)) return s;
            }
            return I.insert = 0, X === w ? (A(I, !0), I.strm.avail_out === 0 ? it : Z) : I.last_lit && (A(I, !1), I.strm.avail_out === 0) ? s : F;
          }(y, L) : y.strategy === 3 ? function(I, X) {
            for (var J, K, ot, gt, dt = I.window; ; ) {
              if (I.lookahead <= $) {
                if (yt(I), I.lookahead <= $ && X === b) return s;
                if (I.lookahead === 0) break;
              }
              if (I.match_length = 0, I.lookahead >= j && 0 < I.strstart && (K = dt[ot = I.strstart - 1]) === dt[++ot] && K === dt[++ot] && K === dt[++ot]) {
                gt = I.strstart + $;
                do
                  ;
                while (K === dt[++ot] && K === dt[++ot] && K === dt[++ot] && K === dt[++ot] && K === dt[++ot] && K === dt[++ot] && K === dt[++ot] && K === dt[++ot] && ot < gt);
                I.match_length = $ - (gt - ot), I.match_length > I.lookahead && (I.match_length = I.lookahead);
              }
              if (I.match_length >= j ? (J = i._tr_tally(I, 1, I.match_length - j), I.lookahead -= I.match_length, I.strstart += I.match_length, I.match_length = 0) : (J = i._tr_tally(I, 0, I.window[I.strstart]), I.lookahead--, I.strstart++), J && (A(I, !1), I.strm.avail_out === 0)) return s;
            }
            return I.insert = 0, X === w ? (A(I, !0), I.strm.avail_out === 0 ? it : Z) : I.last_lit && (A(I, !1), I.strm.avail_out === 0) ? s : F;
          }(y, L) : n[y.level].func(y, L);
          if (W !== it && W !== Z || (y.status = 666), W === s || W === it) return e.avail_out === 0 && (y.last_flush = -1), h;
          if (W === F && (L === 1 ? i._tr_align(y) : L !== 5 && (i._tr_stored_block(y, 0, 0, !1), L === 3 && (at(y.head), y.lookahead === 0 && (y.strstart = 0, y.block_start = 0, y.insert = 0))), D(e), e.avail_out === 0)) return y.last_flush = -1, h;
        }
        return L !== w ? h : y.wrap <= 0 ? 1 : (y.wrap === 2 ? (tt(y, 255 & e.adler), tt(y, e.adler >> 8 & 255), tt(y, e.adler >> 16 & 255), tt(y, e.adler >> 24 & 255), tt(y, 255 & e.total_in), tt(y, e.total_in >> 8 & 255), tt(y, e.total_in >> 16 & 255), tt(y, e.total_in >> 24 & 255)) : (H(y, e.adler >>> 16), H(y, 65535 & e.adler)), D(e), 0 < y.wrap && (y.wrap = -y.wrap), y.pending !== 0 ? h : 1);
      }, c.deflateEnd = function(e) {
        var L;
        return e && e.state ? (L = e.state.status) !== S && L !== 69 && L !== 73 && L !== 91 && L !== 103 && L !== z && L !== 666 ? st(e, v) : (e.state = null, L === z ? st(e, -3) : h) : v;
      }, c.deflateSetDictionary = function(e, L) {
        var N, y, p, T, M, W, I, X, J = L.length;
        if (!e || !e.state || (T = (N = e.state).wrap) === 2 || T === 1 && N.status !== S || N.lookahead) return v;
        for (T === 1 && (e.adler = o(e.adler, L, J, 0)), N.wrap = 0, J >= N.w_size && (T === 0 && (at(N.head), N.strstart = 0, N.block_start = 0, N.insert = 0), X = new a.Buf8(N.w_size), a.arraySet(X, L, J - N.w_size, N.w_size, 0), L = X, J = N.w_size), M = e.avail_in, W = e.next_in, I = e.input, e.avail_in = J, e.next_in = 0, e.input = L, yt(N); N.lookahead >= j; ) {
          for (y = N.strstart, p = N.lookahead - (j - 1); N.ins_h = (N.ins_h << N.hash_shift ^ N.window[y + j - 1]) & N.hash_mask, N.prev[y & N.w_mask] = N.head[N.ins_h], N.head[N.ins_h] = y, y++, --p; ) ;
          N.strstart = y, N.lookahead = j - 1, yt(N);
        }
        return N.strstart += N.lookahead, N.block_start = N.strstart, N.insert = N.lookahead, N.lookahead = 0, N.match_length = N.prev_length = j - 1, N.match_available = 0, e.next_in = W, e.input = I, e.avail_in = M, N.wrap = T, h;
      }, c.deflateInfo = "pako deflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(r, f, c) {
      f.exports = function() {
        this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
      };
    }, {}], 48: [function(r, f, c) {
      f.exports = function(n, a) {
        var i, o, _, x, b, w, h, v, u, m, d, g, k, C, R, P, O, U, j, $, rt, S, z, s, F;
        i = n.state, o = n.next_in, s = n.input, _ = o + (n.avail_in - 5), x = n.next_out, F = n.output, b = x - (a - n.avail_out), w = x + (n.avail_out - 257), h = i.dmax, v = i.wsize, u = i.whave, m = i.wnext, d = i.window, g = i.hold, k = i.bits, C = i.lencode, R = i.distcode, P = (1 << i.lenbits) - 1, O = (1 << i.distbits) - 1;
        t: do {
          k < 15 && (g += s[o++] << k, k += 8, g += s[o++] << k, k += 8), U = C[g & P];
          e: for (; ; ) {
            if (g >>>= j = U >>> 24, k -= j, (j = U >>> 16 & 255) === 0) F[x++] = 65535 & U;
            else {
              if (!(16 & j)) {
                if (!(64 & j)) {
                  U = C[(65535 & U) + (g & (1 << j) - 1)];
                  continue e;
                }
                if (32 & j) {
                  i.mode = 12;
                  break t;
                }
                n.msg = "invalid literal/length code", i.mode = 30;
                break t;
              }
              $ = 65535 & U, (j &= 15) && (k < j && (g += s[o++] << k, k += 8), $ += g & (1 << j) - 1, g >>>= j, k -= j), k < 15 && (g += s[o++] << k, k += 8, g += s[o++] << k, k += 8), U = R[g & O];
              r: for (; ; ) {
                if (g >>>= j = U >>> 24, k -= j, !(16 & (j = U >>> 16 & 255))) {
                  if (!(64 & j)) {
                    U = R[(65535 & U) + (g & (1 << j) - 1)];
                    continue r;
                  }
                  n.msg = "invalid distance code", i.mode = 30;
                  break t;
                }
                if (rt = 65535 & U, k < (j &= 15) && (g += s[o++] << k, (k += 8) < j && (g += s[o++] << k, k += 8)), h < (rt += g & (1 << j) - 1)) {
                  n.msg = "invalid distance too far back", i.mode = 30;
                  break t;
                }
                if (g >>>= j, k -= j, (j = x - b) < rt) {
                  if (u < (j = rt - j) && i.sane) {
                    n.msg = "invalid distance too far back", i.mode = 30;
                    break t;
                  }
                  if (z = d, (S = 0) === m) {
                    if (S += v - j, j < $) {
                      for ($ -= j; F[x++] = d[S++], --j; ) ;
                      S = x - rt, z = F;
                    }
                  } else if (m < j) {
                    if (S += v + m - j, (j -= m) < $) {
                      for ($ -= j; F[x++] = d[S++], --j; ) ;
                      if (S = 0, m < $) {
                        for ($ -= j = m; F[x++] = d[S++], --j; ) ;
                        S = x - rt, z = F;
                      }
                    }
                  } else if (S += m - j, j < $) {
                    for ($ -= j; F[x++] = d[S++], --j; ) ;
                    S = x - rt, z = F;
                  }
                  for (; 2 < $; ) F[x++] = z[S++], F[x++] = z[S++], F[x++] = z[S++], $ -= 3;
                  $ && (F[x++] = z[S++], 1 < $ && (F[x++] = z[S++]));
                } else {
                  for (S = x - rt; F[x++] = F[S++], F[x++] = F[S++], F[x++] = F[S++], 2 < ($ -= 3); ) ;
                  $ && (F[x++] = F[S++], 1 < $ && (F[x++] = F[S++]));
                }
                break;
              }
            }
            break;
          }
        } while (o < _ && x < w);
        o -= $ = k >> 3, g &= (1 << (k -= $ << 3)) - 1, n.next_in = o, n.next_out = x, n.avail_in = o < _ ? _ - o + 5 : 5 - (o - _), n.avail_out = x < w ? w - x + 257 : 257 - (x - w), i.hold = g, i.bits = k;
      };
    }, {}], 49: [function(r, f, c) {
      var n = r("../utils/common"), a = r("./adler32"), i = r("./crc32"), o = r("./inffast"), _ = r("./inftrees"), x = 1, b = 2, w = 0, h = -2, v = 1, u = 852, m = 592;
      function d(S) {
        return (S >>> 24 & 255) + (S >>> 8 & 65280) + ((65280 & S) << 8) + ((255 & S) << 24);
      }
      function g() {
        this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new n.Buf16(320), this.work = new n.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
      }
      function k(S) {
        var z;
        return S && S.state ? (z = S.state, S.total_in = S.total_out = z.total = 0, S.msg = "", z.wrap && (S.adler = 1 & z.wrap), z.mode = v, z.last = 0, z.havedict = 0, z.dmax = 32768, z.head = null, z.hold = 0, z.bits = 0, z.lencode = z.lendyn = new n.Buf32(u), z.distcode = z.distdyn = new n.Buf32(m), z.sane = 1, z.back = -1, w) : h;
      }
      function C(S) {
        var z;
        return S && S.state ? ((z = S.state).wsize = 0, z.whave = 0, z.wnext = 0, k(S)) : h;
      }
      function R(S, z) {
        var s, F;
        return S && S.state ? (F = S.state, z < 0 ? (s = 0, z = -z) : (s = 1 + (z >> 4), z < 48 && (z &= 15)), z && (z < 8 || 15 < z) ? h : (F.window !== null && F.wbits !== z && (F.window = null), F.wrap = s, F.wbits = z, C(S))) : h;
      }
      function P(S, z) {
        var s, F;
        return S ? (F = new g(), (S.state = F).window = null, (s = R(S, z)) !== w && (S.state = null), s) : h;
      }
      var O, U, j = !0;
      function $(S) {
        if (j) {
          var z;
          for (O = new n.Buf32(512), U = new n.Buf32(32), z = 0; z < 144; ) S.lens[z++] = 8;
          for (; z < 256; ) S.lens[z++] = 9;
          for (; z < 280; ) S.lens[z++] = 7;
          for (; z < 288; ) S.lens[z++] = 8;
          for (_(x, S.lens, 0, 288, O, 0, S.work, { bits: 9 }), z = 0; z < 32; ) S.lens[z++] = 5;
          _(b, S.lens, 0, 32, U, 0, S.work, { bits: 5 }), j = !1;
        }
        S.lencode = O, S.lenbits = 9, S.distcode = U, S.distbits = 5;
      }
      function rt(S, z, s, F) {
        var it, Z = S.state;
        return Z.window === null && (Z.wsize = 1 << Z.wbits, Z.wnext = 0, Z.whave = 0, Z.window = new n.Buf8(Z.wsize)), F >= Z.wsize ? (n.arraySet(Z.window, z, s - Z.wsize, Z.wsize, 0), Z.wnext = 0, Z.whave = Z.wsize) : (F < (it = Z.wsize - Z.wnext) && (it = F), n.arraySet(Z.window, z, s - F, it, Z.wnext), (F -= it) ? (n.arraySet(Z.window, z, s - F, F, 0), Z.wnext = F, Z.whave = Z.wsize) : (Z.wnext += it, Z.wnext === Z.wsize && (Z.wnext = 0), Z.whave < Z.wsize && (Z.whave += it))), 0;
      }
      c.inflateReset = C, c.inflateReset2 = R, c.inflateResetKeep = k, c.inflateInit = function(S) {
        return P(S, 15);
      }, c.inflateInit2 = P, c.inflate = function(S, z) {
        var s, F, it, Z, st, V, at, D, A, tt, H, q, yt, Et, ft, nt, _t, ht, bt, kt, e, L, N, y, p = 0, T = new n.Buf8(4), M = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
        if (!S || !S.state || !S.output || !S.input && S.avail_in !== 0) return h;
        (s = S.state).mode === 12 && (s.mode = 13), st = S.next_out, it = S.output, at = S.avail_out, Z = S.next_in, F = S.input, V = S.avail_in, D = s.hold, A = s.bits, tt = V, H = at, L = w;
        t: for (; ; ) switch (s.mode) {
          case v:
            if (s.wrap === 0) {
              s.mode = 13;
              break;
            }
            for (; A < 16; ) {
              if (V === 0) break t;
              V--, D += F[Z++] << A, A += 8;
            }
            if (2 & s.wrap && D === 35615) {
              T[s.check = 0] = 255 & D, T[1] = D >>> 8 & 255, s.check = i(s.check, T, 2, 0), A = D = 0, s.mode = 2;
              break;
            }
            if (s.flags = 0, s.head && (s.head.done = !1), !(1 & s.wrap) || (((255 & D) << 8) + (D >> 8)) % 31) {
              S.msg = "incorrect header check", s.mode = 30;
              break;
            }
            if ((15 & D) != 8) {
              S.msg = "unknown compression method", s.mode = 30;
              break;
            }
            if (A -= 4, e = 8 + (15 & (D >>>= 4)), s.wbits === 0) s.wbits = e;
            else if (e > s.wbits) {
              S.msg = "invalid window size", s.mode = 30;
              break;
            }
            s.dmax = 1 << e, S.adler = s.check = 1, s.mode = 512 & D ? 10 : 12, A = D = 0;
            break;
          case 2:
            for (; A < 16; ) {
              if (V === 0) break t;
              V--, D += F[Z++] << A, A += 8;
            }
            if (s.flags = D, (255 & s.flags) != 8) {
              S.msg = "unknown compression method", s.mode = 30;
              break;
            }
            if (57344 & s.flags) {
              S.msg = "unknown header flags set", s.mode = 30;
              break;
            }
            s.head && (s.head.text = D >> 8 & 1), 512 & s.flags && (T[0] = 255 & D, T[1] = D >>> 8 & 255, s.check = i(s.check, T, 2, 0)), A = D = 0, s.mode = 3;
          case 3:
            for (; A < 32; ) {
              if (V === 0) break t;
              V--, D += F[Z++] << A, A += 8;
            }
            s.head && (s.head.time = D), 512 & s.flags && (T[0] = 255 & D, T[1] = D >>> 8 & 255, T[2] = D >>> 16 & 255, T[3] = D >>> 24 & 255, s.check = i(s.check, T, 4, 0)), A = D = 0, s.mode = 4;
          case 4:
            for (; A < 16; ) {
              if (V === 0) break t;
              V--, D += F[Z++] << A, A += 8;
            }
            s.head && (s.head.xflags = 255 & D, s.head.os = D >> 8), 512 & s.flags && (T[0] = 255 & D, T[1] = D >>> 8 & 255, s.check = i(s.check, T, 2, 0)), A = D = 0, s.mode = 5;
          case 5:
            if (1024 & s.flags) {
              for (; A < 16; ) {
                if (V === 0) break t;
                V--, D += F[Z++] << A, A += 8;
              }
              s.length = D, s.head && (s.head.extra_len = D), 512 & s.flags && (T[0] = 255 & D, T[1] = D >>> 8 & 255, s.check = i(s.check, T, 2, 0)), A = D = 0;
            } else s.head && (s.head.extra = null);
            s.mode = 6;
          case 6:
            if (1024 & s.flags && (V < (q = s.length) && (q = V), q && (s.head && (e = s.head.extra_len - s.length, s.head.extra || (s.head.extra = new Array(s.head.extra_len)), n.arraySet(s.head.extra, F, Z, q, e)), 512 & s.flags && (s.check = i(s.check, F, q, Z)), V -= q, Z += q, s.length -= q), s.length)) break t;
            s.length = 0, s.mode = 7;
          case 7:
            if (2048 & s.flags) {
              if (V === 0) break t;
              for (q = 0; e = F[Z + q++], s.head && e && s.length < 65536 && (s.head.name += String.fromCharCode(e)), e && q < V; ) ;
              if (512 & s.flags && (s.check = i(s.check, F, q, Z)), V -= q, Z += q, e) break t;
            } else s.head && (s.head.name = null);
            s.length = 0, s.mode = 8;
          case 8:
            if (4096 & s.flags) {
              if (V === 0) break t;
              for (q = 0; e = F[Z + q++], s.head && e && s.length < 65536 && (s.head.comment += String.fromCharCode(e)), e && q < V; ) ;
              if (512 & s.flags && (s.check = i(s.check, F, q, Z)), V -= q, Z += q, e) break t;
            } else s.head && (s.head.comment = null);
            s.mode = 9;
          case 9:
            if (512 & s.flags) {
              for (; A < 16; ) {
                if (V === 0) break t;
                V--, D += F[Z++] << A, A += 8;
              }
              if (D !== (65535 & s.check)) {
                S.msg = "header crc mismatch", s.mode = 30;
                break;
              }
              A = D = 0;
            }
            s.head && (s.head.hcrc = s.flags >> 9 & 1, s.head.done = !0), S.adler = s.check = 0, s.mode = 12;
            break;
          case 10:
            for (; A < 32; ) {
              if (V === 0) break t;
              V--, D += F[Z++] << A, A += 8;
            }
            S.adler = s.check = d(D), A = D = 0, s.mode = 11;
          case 11:
            if (s.havedict === 0) return S.next_out = st, S.avail_out = at, S.next_in = Z, S.avail_in = V, s.hold = D, s.bits = A, 2;
            S.adler = s.check = 1, s.mode = 12;
          case 12:
            if (z === 5 || z === 6) break t;
          case 13:
            if (s.last) {
              D >>>= 7 & A, A -= 7 & A, s.mode = 27;
              break;
            }
            for (; A < 3; ) {
              if (V === 0) break t;
              V--, D += F[Z++] << A, A += 8;
            }
            switch (s.last = 1 & D, A -= 1, 3 & (D >>>= 1)) {
              case 0:
                s.mode = 14;
                break;
              case 1:
                if ($(s), s.mode = 20, z !== 6) break;
                D >>>= 2, A -= 2;
                break t;
              case 2:
                s.mode = 17;
                break;
              case 3:
                S.msg = "invalid block type", s.mode = 30;
            }
            D >>>= 2, A -= 2;
            break;
          case 14:
            for (D >>>= 7 & A, A -= 7 & A; A < 32; ) {
              if (V === 0) break t;
              V--, D += F[Z++] << A, A += 8;
            }
            if ((65535 & D) != (D >>> 16 ^ 65535)) {
              S.msg = "invalid stored block lengths", s.mode = 30;
              break;
            }
            if (s.length = 65535 & D, A = D = 0, s.mode = 15, z === 6) break t;
          case 15:
            s.mode = 16;
          case 16:
            if (q = s.length) {
              if (V < q && (q = V), at < q && (q = at), q === 0) break t;
              n.arraySet(it, F, Z, q, st), V -= q, Z += q, at -= q, st += q, s.length -= q;
              break;
            }
            s.mode = 12;
            break;
          case 17:
            for (; A < 14; ) {
              if (V === 0) break t;
              V--, D += F[Z++] << A, A += 8;
            }
            if (s.nlen = 257 + (31 & D), D >>>= 5, A -= 5, s.ndist = 1 + (31 & D), D >>>= 5, A -= 5, s.ncode = 4 + (15 & D), D >>>= 4, A -= 4, 286 < s.nlen || 30 < s.ndist) {
              S.msg = "too many length or distance symbols", s.mode = 30;
              break;
            }
            s.have = 0, s.mode = 18;
          case 18:
            for (; s.have < s.ncode; ) {
              for (; A < 3; ) {
                if (V === 0) break t;
                V--, D += F[Z++] << A, A += 8;
              }
              s.lens[M[s.have++]] = 7 & D, D >>>= 3, A -= 3;
            }
            for (; s.have < 19; ) s.lens[M[s.have++]] = 0;
            if (s.lencode = s.lendyn, s.lenbits = 7, N = { bits: s.lenbits }, L = _(0, s.lens, 0, 19, s.lencode, 0, s.work, N), s.lenbits = N.bits, L) {
              S.msg = "invalid code lengths set", s.mode = 30;
              break;
            }
            s.have = 0, s.mode = 19;
          case 19:
            for (; s.have < s.nlen + s.ndist; ) {
              for (; nt = (p = s.lencode[D & (1 << s.lenbits) - 1]) >>> 16 & 255, _t = 65535 & p, !((ft = p >>> 24) <= A); ) {
                if (V === 0) break t;
                V--, D += F[Z++] << A, A += 8;
              }
              if (_t < 16) D >>>= ft, A -= ft, s.lens[s.have++] = _t;
              else {
                if (_t === 16) {
                  for (y = ft + 2; A < y; ) {
                    if (V === 0) break t;
                    V--, D += F[Z++] << A, A += 8;
                  }
                  if (D >>>= ft, A -= ft, s.have === 0) {
                    S.msg = "invalid bit length repeat", s.mode = 30;
                    break;
                  }
                  e = s.lens[s.have - 1], q = 3 + (3 & D), D >>>= 2, A -= 2;
                } else if (_t === 17) {
                  for (y = ft + 3; A < y; ) {
                    if (V === 0) break t;
                    V--, D += F[Z++] << A, A += 8;
                  }
                  A -= ft, e = 0, q = 3 + (7 & (D >>>= ft)), D >>>= 3, A -= 3;
                } else {
                  for (y = ft + 7; A < y; ) {
                    if (V === 0) break t;
                    V--, D += F[Z++] << A, A += 8;
                  }
                  A -= ft, e = 0, q = 11 + (127 & (D >>>= ft)), D >>>= 7, A -= 7;
                }
                if (s.have + q > s.nlen + s.ndist) {
                  S.msg = "invalid bit length repeat", s.mode = 30;
                  break;
                }
                for (; q--; ) s.lens[s.have++] = e;
              }
            }
            if (s.mode === 30) break;
            if (s.lens[256] === 0) {
              S.msg = "invalid code -- missing end-of-block", s.mode = 30;
              break;
            }
            if (s.lenbits = 9, N = { bits: s.lenbits }, L = _(x, s.lens, 0, s.nlen, s.lencode, 0, s.work, N), s.lenbits = N.bits, L) {
              S.msg = "invalid literal/lengths set", s.mode = 30;
              break;
            }
            if (s.distbits = 6, s.distcode = s.distdyn, N = { bits: s.distbits }, L = _(b, s.lens, s.nlen, s.ndist, s.distcode, 0, s.work, N), s.distbits = N.bits, L) {
              S.msg = "invalid distances set", s.mode = 30;
              break;
            }
            if (s.mode = 20, z === 6) break t;
          case 20:
            s.mode = 21;
          case 21:
            if (6 <= V && 258 <= at) {
              S.next_out = st, S.avail_out = at, S.next_in = Z, S.avail_in = V, s.hold = D, s.bits = A, o(S, H), st = S.next_out, it = S.output, at = S.avail_out, Z = S.next_in, F = S.input, V = S.avail_in, D = s.hold, A = s.bits, s.mode === 12 && (s.back = -1);
              break;
            }
            for (s.back = 0; nt = (p = s.lencode[D & (1 << s.lenbits) - 1]) >>> 16 & 255, _t = 65535 & p, !((ft = p >>> 24) <= A); ) {
              if (V === 0) break t;
              V--, D += F[Z++] << A, A += 8;
            }
            if (nt && !(240 & nt)) {
              for (ht = ft, bt = nt, kt = _t; nt = (p = s.lencode[kt + ((D & (1 << ht + bt) - 1) >> ht)]) >>> 16 & 255, _t = 65535 & p, !(ht + (ft = p >>> 24) <= A); ) {
                if (V === 0) break t;
                V--, D += F[Z++] << A, A += 8;
              }
              D >>>= ht, A -= ht, s.back += ht;
            }
            if (D >>>= ft, A -= ft, s.back += ft, s.length = _t, nt === 0) {
              s.mode = 26;
              break;
            }
            if (32 & nt) {
              s.back = -1, s.mode = 12;
              break;
            }
            if (64 & nt) {
              S.msg = "invalid literal/length code", s.mode = 30;
              break;
            }
            s.extra = 15 & nt, s.mode = 22;
          case 22:
            if (s.extra) {
              for (y = s.extra; A < y; ) {
                if (V === 0) break t;
                V--, D += F[Z++] << A, A += 8;
              }
              s.length += D & (1 << s.extra) - 1, D >>>= s.extra, A -= s.extra, s.back += s.extra;
            }
            s.was = s.length, s.mode = 23;
          case 23:
            for (; nt = (p = s.distcode[D & (1 << s.distbits) - 1]) >>> 16 & 255, _t = 65535 & p, !((ft = p >>> 24) <= A); ) {
              if (V === 0) break t;
              V--, D += F[Z++] << A, A += 8;
            }
            if (!(240 & nt)) {
              for (ht = ft, bt = nt, kt = _t; nt = (p = s.distcode[kt + ((D & (1 << ht + bt) - 1) >> ht)]) >>> 16 & 255, _t = 65535 & p, !(ht + (ft = p >>> 24) <= A); ) {
                if (V === 0) break t;
                V--, D += F[Z++] << A, A += 8;
              }
              D >>>= ht, A -= ht, s.back += ht;
            }
            if (D >>>= ft, A -= ft, s.back += ft, 64 & nt) {
              S.msg = "invalid distance code", s.mode = 30;
              break;
            }
            s.offset = _t, s.extra = 15 & nt, s.mode = 24;
          case 24:
            if (s.extra) {
              for (y = s.extra; A < y; ) {
                if (V === 0) break t;
                V--, D += F[Z++] << A, A += 8;
              }
              s.offset += D & (1 << s.extra) - 1, D >>>= s.extra, A -= s.extra, s.back += s.extra;
            }
            if (s.offset > s.dmax) {
              S.msg = "invalid distance too far back", s.mode = 30;
              break;
            }
            s.mode = 25;
          case 25:
            if (at === 0) break t;
            if (q = H - at, s.offset > q) {
              if ((q = s.offset - q) > s.whave && s.sane) {
                S.msg = "invalid distance too far back", s.mode = 30;
                break;
              }
              yt = q > s.wnext ? (q -= s.wnext, s.wsize - q) : s.wnext - q, q > s.length && (q = s.length), Et = s.window;
            } else Et = it, yt = st - s.offset, q = s.length;
            for (at < q && (q = at), at -= q, s.length -= q; it[st++] = Et[yt++], --q; ) ;
            s.length === 0 && (s.mode = 21);
            break;
          case 26:
            if (at === 0) break t;
            it[st++] = s.length, at--, s.mode = 21;
            break;
          case 27:
            if (s.wrap) {
              for (; A < 32; ) {
                if (V === 0) break t;
                V--, D |= F[Z++] << A, A += 8;
              }
              if (H -= at, S.total_out += H, s.total += H, H && (S.adler = s.check = s.flags ? i(s.check, it, H, st - H) : a(s.check, it, H, st - H)), H = at, (s.flags ? D : d(D)) !== s.check) {
                S.msg = "incorrect data check", s.mode = 30;
                break;
              }
              A = D = 0;
            }
            s.mode = 28;
          case 28:
            if (s.wrap && s.flags) {
              for (; A < 32; ) {
                if (V === 0) break t;
                V--, D += F[Z++] << A, A += 8;
              }
              if (D !== (4294967295 & s.total)) {
                S.msg = "incorrect length check", s.mode = 30;
                break;
              }
              A = D = 0;
            }
            s.mode = 29;
          case 29:
            L = 1;
            break t;
          case 30:
            L = -3;
            break t;
          case 31:
            return -4;
          case 32:
          default:
            return h;
        }
        return S.next_out = st, S.avail_out = at, S.next_in = Z, S.avail_in = V, s.hold = D, s.bits = A, (s.wsize || H !== S.avail_out && s.mode < 30 && (s.mode < 27 || z !== 4)) && rt(S, S.output, S.next_out, H - S.avail_out) ? (s.mode = 31, -4) : (tt -= S.avail_in, H -= S.avail_out, S.total_in += tt, S.total_out += H, s.total += H, s.wrap && H && (S.adler = s.check = s.flags ? i(s.check, it, H, S.next_out - H) : a(s.check, it, H, S.next_out - H)), S.data_type = s.bits + (s.last ? 64 : 0) + (s.mode === 12 ? 128 : 0) + (s.mode === 20 || s.mode === 15 ? 256 : 0), (tt == 0 && H === 0 || z === 4) && L === w && (L = -5), L);
      }, c.inflateEnd = function(S) {
        if (!S || !S.state) return h;
        var z = S.state;
        return z.window && (z.window = null), S.state = null, w;
      }, c.inflateGetHeader = function(S, z) {
        var s;
        return S && S.state && 2 & (s = S.state).wrap ? ((s.head = z).done = !1, w) : h;
      }, c.inflateSetDictionary = function(S, z) {
        var s, F = z.length;
        return S && S.state ? (s = S.state).wrap !== 0 && s.mode !== 11 ? h : s.mode === 11 && a(1, z, F, 0) !== s.check ? -3 : rt(S, z, F, F) ? (s.mode = 31, -4) : (s.havedict = 1, w) : h;
      }, c.inflateInfo = "pako inflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(r, f, c) {
      var n = r("../utils/common"), a = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], i = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], o = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], _ = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
      f.exports = function(x, b, w, h, v, u, m, d) {
        var g, k, C, R, P, O, U, j, $, rt = d.bits, S = 0, z = 0, s = 0, F = 0, it = 0, Z = 0, st = 0, V = 0, at = 0, D = 0, A = null, tt = 0, H = new n.Buf16(16), q = new n.Buf16(16), yt = null, Et = 0;
        for (S = 0; S <= 15; S++) H[S] = 0;
        for (z = 0; z < h; z++) H[b[w + z]]++;
        for (it = rt, F = 15; 1 <= F && H[F] === 0; F--) ;
        if (F < it && (it = F), F === 0) return v[u++] = 20971520, v[u++] = 20971520, d.bits = 1, 0;
        for (s = 1; s < F && H[s] === 0; s++) ;
        for (it < s && (it = s), S = V = 1; S <= 15; S++) if (V <<= 1, (V -= H[S]) < 0) return -1;
        if (0 < V && (x === 0 || F !== 1)) return -1;
        for (q[1] = 0, S = 1; S < 15; S++) q[S + 1] = q[S] + H[S];
        for (z = 0; z < h; z++) b[w + z] !== 0 && (m[q[b[w + z]]++] = z);
        if (O = x === 0 ? (A = yt = m, 19) : x === 1 ? (A = a, tt -= 257, yt = i, Et -= 257, 256) : (A = o, yt = _, -1), S = s, P = u, st = z = D = 0, C = -1, R = (at = 1 << (Z = it)) - 1, x === 1 && 852 < at || x === 2 && 592 < at) return 1;
        for (; ; ) {
          for (U = S - st, $ = m[z] < O ? (j = 0, m[z]) : m[z] > O ? (j = yt[Et + m[z]], A[tt + m[z]]) : (j = 96, 0), g = 1 << S - st, s = k = 1 << Z; v[P + (D >> st) + (k -= g)] = U << 24 | j << 16 | $ | 0, k !== 0; ) ;
          for (g = 1 << S - 1; D & g; ) g >>= 1;
          if (g !== 0 ? (D &= g - 1, D += g) : D = 0, z++, --H[S] == 0) {
            if (S === F) break;
            S = b[w + m[z]];
          }
          if (it < S && (D & R) !== C) {
            for (st === 0 && (st = it), P += s, V = 1 << (Z = S - st); Z + st < F && !((V -= H[Z + st]) <= 0); ) Z++, V <<= 1;
            if (at += 1 << Z, x === 1 && 852 < at || x === 2 && 592 < at) return 1;
            v[C = D & R] = it << 24 | Z << 16 | P - u | 0;
          }
        }
        return D !== 0 && (v[P + D] = S - st << 24 | 64 << 16 | 0), d.bits = it, 0;
      };
    }, { "../utils/common": 41 }], 51: [function(r, f, c) {
      f.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
    }, {}], 52: [function(r, f, c) {
      var n = r("../utils/common"), a = 0, i = 1;
      function o(p) {
        for (var T = p.length; 0 <= --T; ) p[T] = 0;
      }
      var _ = 0, x = 29, b = 256, w = b + 1 + x, h = 30, v = 19, u = 2 * w + 1, m = 15, d = 16, g = 7, k = 256, C = 16, R = 17, P = 18, O = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], U = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], j = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], $ = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], rt = new Array(2 * (w + 2));
      o(rt);
      var S = new Array(2 * h);
      o(S);
      var z = new Array(512);
      o(z);
      var s = new Array(256);
      o(s);
      var F = new Array(x);
      o(F);
      var it, Z, st, V = new Array(h);
      function at(p, T, M, W, I) {
        this.static_tree = p, this.extra_bits = T, this.extra_base = M, this.elems = W, this.max_length = I, this.has_stree = p && p.length;
      }
      function D(p, T) {
        this.dyn_tree = p, this.max_code = 0, this.stat_desc = T;
      }
      function A(p) {
        return p < 256 ? z[p] : z[256 + (p >>> 7)];
      }
      function tt(p, T) {
        p.pending_buf[p.pending++] = 255 & T, p.pending_buf[p.pending++] = T >>> 8 & 255;
      }
      function H(p, T, M) {
        p.bi_valid > d - M ? (p.bi_buf |= T << p.bi_valid & 65535, tt(p, p.bi_buf), p.bi_buf = T >> d - p.bi_valid, p.bi_valid += M - d) : (p.bi_buf |= T << p.bi_valid & 65535, p.bi_valid += M);
      }
      function q(p, T, M) {
        H(p, M[2 * T], M[2 * T + 1]);
      }
      function yt(p, T) {
        for (var M = 0; M |= 1 & p, p >>>= 1, M <<= 1, 0 < --T; ) ;
        return M >>> 1;
      }
      function Et(p, T, M) {
        var W, I, X = new Array(m + 1), J = 0;
        for (W = 1; W <= m; W++) X[W] = J = J + M[W - 1] << 1;
        for (I = 0; I <= T; I++) {
          var K = p[2 * I + 1];
          K !== 0 && (p[2 * I] = yt(X[K]++, K));
        }
      }
      function ft(p) {
        var T;
        for (T = 0; T < w; T++) p.dyn_ltree[2 * T] = 0;
        for (T = 0; T < h; T++) p.dyn_dtree[2 * T] = 0;
        for (T = 0; T < v; T++) p.bl_tree[2 * T] = 0;
        p.dyn_ltree[2 * k] = 1, p.opt_len = p.static_len = 0, p.last_lit = p.matches = 0;
      }
      function nt(p) {
        8 < p.bi_valid ? tt(p, p.bi_buf) : 0 < p.bi_valid && (p.pending_buf[p.pending++] = p.bi_buf), p.bi_buf = 0, p.bi_valid = 0;
      }
      function _t(p, T, M, W) {
        var I = 2 * T, X = 2 * M;
        return p[I] < p[X] || p[I] === p[X] && W[T] <= W[M];
      }
      function ht(p, T, M) {
        for (var W = p.heap[M], I = M << 1; I <= p.heap_len && (I < p.heap_len && _t(T, p.heap[I + 1], p.heap[I], p.depth) && I++, !_t(T, W, p.heap[I], p.depth)); ) p.heap[M] = p.heap[I], M = I, I <<= 1;
        p.heap[M] = W;
      }
      function bt(p, T, M) {
        var W, I, X, J, K = 0;
        if (p.last_lit !== 0) for (; W = p.pending_buf[p.d_buf + 2 * K] << 8 | p.pending_buf[p.d_buf + 2 * K + 1], I = p.pending_buf[p.l_buf + K], K++, W === 0 ? q(p, I, T) : (q(p, (X = s[I]) + b + 1, T), (J = O[X]) !== 0 && H(p, I -= F[X], J), q(p, X = A(--W), M), (J = U[X]) !== 0 && H(p, W -= V[X], J)), K < p.last_lit; ) ;
        q(p, k, T);
      }
      function kt(p, T) {
        var M, W, I, X = T.dyn_tree, J = T.stat_desc.static_tree, K = T.stat_desc.has_stree, ot = T.stat_desc.elems, gt = -1;
        for (p.heap_len = 0, p.heap_max = u, M = 0; M < ot; M++) X[2 * M] !== 0 ? (p.heap[++p.heap_len] = gt = M, p.depth[M] = 0) : X[2 * M + 1] = 0;
        for (; p.heap_len < 2; ) X[2 * (I = p.heap[++p.heap_len] = gt < 2 ? ++gt : 0)] = 1, p.depth[I] = 0, p.opt_len--, K && (p.static_len -= J[2 * I + 1]);
        for (T.max_code = gt, M = p.heap_len >> 1; 1 <= M; M--) ht(p, X, M);
        for (I = ot; M = p.heap[1], p.heap[1] = p.heap[p.heap_len--], ht(p, X, 1), W = p.heap[1], p.heap[--p.heap_max] = M, p.heap[--p.heap_max] = W, X[2 * I] = X[2 * M] + X[2 * W], p.depth[I] = (p.depth[M] >= p.depth[W] ? p.depth[M] : p.depth[W]) + 1, X[2 * M + 1] = X[2 * W + 1] = I, p.heap[1] = I++, ht(p, X, 1), 2 <= p.heap_len; ) ;
        p.heap[--p.heap_max] = p.heap[1], function(dt, zt) {
          var Bt, Ot, $t, xt, Xt, Yt, It = zt.dyn_tree, te = zt.max_code, Jt = zt.stat_desc.static_tree, ee = zt.stat_desc.has_stree, Wt = zt.stat_desc.extra_bits, Kt = zt.stat_desc.extra_base, Ft = zt.stat_desc.max_length, Zt = 0;
          for (xt = 0; xt <= m; xt++) dt.bl_count[xt] = 0;
          for (It[2 * dt.heap[dt.heap_max] + 1] = 0, Bt = dt.heap_max + 1; Bt < u; Bt++) Ft < (xt = It[2 * It[2 * (Ot = dt.heap[Bt]) + 1] + 1] + 1) && (xt = Ft, Zt++), It[2 * Ot + 1] = xt, te < Ot || (dt.bl_count[xt]++, Xt = 0, Kt <= Ot && (Xt = Wt[Ot - Kt]), Yt = It[2 * Ot], dt.opt_len += Yt * (xt + Xt), ee && (dt.static_len += Yt * (Jt[2 * Ot + 1] + Xt)));
          if (Zt !== 0) {
            do {
              for (xt = Ft - 1; dt.bl_count[xt] === 0; ) xt--;
              dt.bl_count[xt]--, dt.bl_count[xt + 1] += 2, dt.bl_count[Ft]--, Zt -= 2;
            } while (0 < Zt);
            for (xt = Ft; xt !== 0; xt--) for (Ot = dt.bl_count[xt]; Ot !== 0; ) te < ($t = dt.heap[--Bt]) || (It[2 * $t + 1] !== xt && (dt.opt_len += (xt - It[2 * $t + 1]) * It[2 * $t], It[2 * $t + 1] = xt), Ot--);
          }
        }(p, T), Et(X, gt, p.bl_count);
      }
      function e(p, T, M) {
        var W, I, X = -1, J = T[1], K = 0, ot = 7, gt = 4;
        for (J === 0 && (ot = 138, gt = 3), T[2 * (M + 1) + 1] = 65535, W = 0; W <= M; W++) I = J, J = T[2 * (W + 1) + 1], ++K < ot && I === J || (K < gt ? p.bl_tree[2 * I] += K : I !== 0 ? (I !== X && p.bl_tree[2 * I]++, p.bl_tree[2 * C]++) : K <= 10 ? p.bl_tree[2 * R]++ : p.bl_tree[2 * P]++, X = I, gt = (K = 0) === J ? (ot = 138, 3) : I === J ? (ot = 6, 3) : (ot = 7, 4));
      }
      function L(p, T, M) {
        var W, I, X = -1, J = T[1], K = 0, ot = 7, gt = 4;
        for (J === 0 && (ot = 138, gt = 3), W = 0; W <= M; W++) if (I = J, J = T[2 * (W + 1) + 1], !(++K < ot && I === J)) {
          if (K < gt) for (; q(p, I, p.bl_tree), --K != 0; ) ;
          else I !== 0 ? (I !== X && (q(p, I, p.bl_tree), K--), q(p, C, p.bl_tree), H(p, K - 3, 2)) : K <= 10 ? (q(p, R, p.bl_tree), H(p, K - 3, 3)) : (q(p, P, p.bl_tree), H(p, K - 11, 7));
          X = I, gt = (K = 0) === J ? (ot = 138, 3) : I === J ? (ot = 6, 3) : (ot = 7, 4);
        }
      }
      o(V);
      var N = !1;
      function y(p, T, M, W) {
        H(p, (_ << 1) + (W ? 1 : 0), 3), function(I, X, J, K) {
          nt(I), tt(I, J), tt(I, ~J), n.arraySet(I.pending_buf, I.window, X, J, I.pending), I.pending += J;
        }(p, T, M);
      }
      c._tr_init = function(p) {
        N || (function() {
          var T, M, W, I, X, J = new Array(m + 1);
          for (I = W = 0; I < x - 1; I++) for (F[I] = W, T = 0; T < 1 << O[I]; T++) s[W++] = I;
          for (s[W - 1] = I, I = X = 0; I < 16; I++) for (V[I] = X, T = 0; T < 1 << U[I]; T++) z[X++] = I;
          for (X >>= 7; I < h; I++) for (V[I] = X << 7, T = 0; T < 1 << U[I] - 7; T++) z[256 + X++] = I;
          for (M = 0; M <= m; M++) J[M] = 0;
          for (T = 0; T <= 143; ) rt[2 * T + 1] = 8, T++, J[8]++;
          for (; T <= 255; ) rt[2 * T + 1] = 9, T++, J[9]++;
          for (; T <= 279; ) rt[2 * T + 1] = 7, T++, J[7]++;
          for (; T <= 287; ) rt[2 * T + 1] = 8, T++, J[8]++;
          for (Et(rt, w + 1, J), T = 0; T < h; T++) S[2 * T + 1] = 5, S[2 * T] = yt(T, 5);
          it = new at(rt, O, b + 1, w, m), Z = new at(S, U, 0, h, m), st = new at(new Array(0), j, 0, v, g);
        }(), N = !0), p.l_desc = new D(p.dyn_ltree, it), p.d_desc = new D(p.dyn_dtree, Z), p.bl_desc = new D(p.bl_tree, st), p.bi_buf = 0, p.bi_valid = 0, ft(p);
      }, c._tr_stored_block = y, c._tr_flush_block = function(p, T, M, W) {
        var I, X, J = 0;
        0 < p.level ? (p.strm.data_type === 2 && (p.strm.data_type = function(K) {
          var ot, gt = 4093624447;
          for (ot = 0; ot <= 31; ot++, gt >>>= 1) if (1 & gt && K.dyn_ltree[2 * ot] !== 0) return a;
          if (K.dyn_ltree[18] !== 0 || K.dyn_ltree[20] !== 0 || K.dyn_ltree[26] !== 0) return i;
          for (ot = 32; ot < b; ot++) if (K.dyn_ltree[2 * ot] !== 0) return i;
          return a;
        }(p)), kt(p, p.l_desc), kt(p, p.d_desc), J = function(K) {
          var ot;
          for (e(K, K.dyn_ltree, K.l_desc.max_code), e(K, K.dyn_dtree, K.d_desc.max_code), kt(K, K.bl_desc), ot = v - 1; 3 <= ot && K.bl_tree[2 * $[ot] + 1] === 0; ot--) ;
          return K.opt_len += 3 * (ot + 1) + 5 + 5 + 4, ot;
        }(p), I = p.opt_len + 3 + 7 >>> 3, (X = p.static_len + 3 + 7 >>> 3) <= I && (I = X)) : I = X = M + 5, M + 4 <= I && T !== -1 ? y(p, T, M, W) : p.strategy === 4 || X === I ? (H(p, 2 + (W ? 1 : 0), 3), bt(p, rt, S)) : (H(p, 4 + (W ? 1 : 0), 3), function(K, ot, gt, dt) {
          var zt;
          for (H(K, ot - 257, 5), H(K, gt - 1, 5), H(K, dt - 4, 4), zt = 0; zt < dt; zt++) H(K, K.bl_tree[2 * $[zt] + 1], 3);
          L(K, K.dyn_ltree, ot - 1), L(K, K.dyn_dtree, gt - 1);
        }(p, p.l_desc.max_code + 1, p.d_desc.max_code + 1, J + 1), bt(p, p.dyn_ltree, p.dyn_dtree)), ft(p), W && nt(p);
      }, c._tr_tally = function(p, T, M) {
        return p.pending_buf[p.d_buf + 2 * p.last_lit] = T >>> 8 & 255, p.pending_buf[p.d_buf + 2 * p.last_lit + 1] = 255 & T, p.pending_buf[p.l_buf + p.last_lit] = 255 & M, p.last_lit++, T === 0 ? p.dyn_ltree[2 * M]++ : (p.matches++, T--, p.dyn_ltree[2 * (s[M] + b + 1)]++, p.dyn_dtree[2 * A(T)]++), p.last_lit === p.lit_bufsize - 1;
      }, c._tr_align = function(p) {
        H(p, 2, 3), q(p, k, rt), function(T) {
          T.bi_valid === 16 ? (tt(T, T.bi_buf), T.bi_buf = 0, T.bi_valid = 0) : 8 <= T.bi_valid && (T.pending_buf[T.pending++] = 255 & T.bi_buf, T.bi_buf >>= 8, T.bi_valid -= 8);
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
            var o, _, x, b, w = 1, h = {}, v = !1, u = a.document, m = Object.getPrototypeOf && Object.getPrototypeOf(a);
            m = m && m.setTimeout ? m : a, o = {}.toString.call(a.process) === "[object process]" ? function(C) {
              process.nextTick(function() {
                g(C);
              });
            } : function() {
              if (a.postMessage && !a.importScripts) {
                var C = !0, R = a.onmessage;
                return a.onmessage = function() {
                  C = !1;
                }, a.postMessage("", "*"), a.onmessage = R, C;
              }
            }() ? (b = "setImmediate$" + Math.random() + "$", a.addEventListener ? a.addEventListener("message", k, !1) : a.attachEvent("onmessage", k), function(C) {
              a.postMessage(b + C, "*");
            }) : a.MessageChannel ? ((x = new MessageChannel()).port1.onmessage = function(C) {
              g(C.data);
            }, function(C) {
              x.port2.postMessage(C);
            }) : u && "onreadystatechange" in u.createElement("script") ? (_ = u.documentElement, function(C) {
              var R = u.createElement("script");
              R.onreadystatechange = function() {
                g(C), R.onreadystatechange = null, _.removeChild(R), R = null;
              }, _.appendChild(R);
            }) : function(C) {
              setTimeout(g, 0, C);
            }, m.setImmediate = function(C) {
              typeof C != "function" && (C = new Function("" + C));
              for (var R = new Array(arguments.length - 1), P = 0; P < R.length; P++) R[P] = arguments[P + 1];
              var O = { callback: C, args: R };
              return h[w] = O, o(w), w++;
            }, m.clearImmediate = d;
          }
          function d(C) {
            delete h[C];
          }
          function g(C) {
            if (v) setTimeout(g, 0, C);
            else {
              var R = h[C];
              if (R) {
                v = !0;
                try {
                  (function(P) {
                    var O = P.callback, U = P.args;
                    switch (U.length) {
                      case 0:
                        O();
                        break;
                      case 1:
                        O(U[0]);
                        break;
                      case 2:
                        O(U[0], U[1]);
                        break;
                      case 3:
                        O(U[0], U[1], U[2]);
                        break;
                      default:
                        O.apply(i, U);
                    }
                  })(R);
                } finally {
                  d(C), v = !1;
                }
              }
            }
          }
          function k(C) {
            C.source === a && typeof C.data == "string" && C.data.indexOf(b) === 0 && g(+C.data.slice(b.length));
          }
        })(typeof self > "u" ? n === void 0 ? this : n : self);
      }).call(this, typeof ue < "u" ? ue : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}] }, {}, [10])(10);
  });
})(Je);
var Sr = Je.exports;
const Rr = /* @__PURE__ */ xr(Sr);
function Cr(t = {}) {
  const {
    storageKey: l = "page-reviews",
    defaultPagePath: r = () => typeof window < "u" ? window.location.pathname + window.location.search : "/"
  } = t;
  function f() {
    return "rv-" + Date.now() + "-" + Math.random().toString(36).slice(2, 8);
  }
  function c() {
    if (typeof window > "u") return [];
    try {
      const k = window.localStorage.getItem(l);
      return (k ? JSON.parse(k) : []).map(Tr);
    } catch {
      return [];
    }
  }
  function n(k) {
    if (!(typeof window > "u"))
      try {
        window.localStorage.setItem(l, JSON.stringify(k));
      } catch {
      }
  }
  const [a, i] = Rt(c), o = lt(() => a, [a]), _ = lt((k) => {
    const C = k || r();
    return a.filter((R) => R.pagePath === C);
  }, [a, r]), x = lt((k) => {
    const C = {
      id: f(),
      ...k,
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    return i((R) => {
      const P = [C, ...R];
      return n(P), P;
    }), C;
  }, []), b = lt((k, C) => {
    i((R) => {
      const P = R.map((O) => O.id === k ? { ...O, ...C } : O);
      return n(P), P;
    });
  }, []), w = lt((k) => {
    i((C) => {
      const R = C.filter((P) => P.id !== k);
      return n(R), R;
    });
  }, []), h = lt((k) => {
    const C = k || r();
    i((R) => {
      const P = R.filter((O) => O.pagePath !== C);
      return n(P), P;
    });
  }, [r]), v = lt(() => {
    i([]), n([]);
  }, []), u = lt(() => ({
    exportTime: (/* @__PURE__ */ new Date()).toISOString(),
    total: a.length,
    reviews: a
  }), [a]), m = lt(() => {
    _e(
      new Blob([JSON.stringify(u(), null, 2)], { type: "application/json" }),
      `page-reviews-${be()}.json`
    );
  }, [u]), d = lt(() => {
    const k = Le(u());
    _e(
      new Blob([k], { type: "text/markdown" }),
      `page-reviews-${be()}.md`
    );
  }, [u]), g = lt(async () => {
    const k = new Rr(), C = u(), R = {
      ...C,
      reviews: C.reviews.map((U) => {
        var j;
        return {
          ...U,
          screenshots: (j = U.screenshots) == null ? void 0 : j.map(($) => $.url ? { type: $.type, filename: $.filename, url: $.url } : { type: $.type, filename: $.filename, imagePath: `images/${$.filename}` })
        };
      })
    };
    k.file("review.json", JSON.stringify(R, null, 2)), k.file("review.md", Le(R));
    const P = k.folder("images");
    for (const U of C.reviews)
      for (const j of U.screenshots || [])
        if (j.data && !j.url) {
          const $ = j.data.replace(/^data:image\/png;base64,/, "");
          P.file(j.filename, $, { base64: !0 });
        }
    const O = await k.generateAsync({ type: "blob" });
    _e(O, `page-reviews-${be()}.zip`);
  }, [u]);
  return {
    reviews: a,
    allReviews: o,
    getPageReviews: _,
    addReview: x,
    updateReview: b,
    deleteReview: w,
    clearPageReviews: h,
    clearAllReviews: v,
    exportToJSON: m,
    exportToMarkdown: d,
    exportToZIP: g
  };
}
function Tr(t) {
  if (!t || t.targets) return t;
  const l = t.type === "element" ? {
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
    targets: [l]
  };
}
function Le(t) {
  const l = [
    "# 页面评审报告",
    "",
    `导出时间：${(/* @__PURE__ */ new Date()).toLocaleString()}`,
    `评审总数：${t.total}`,
    ""
  ], r = Ar(t.reviews, "pagePath");
  return Object.entries(r).forEach(([f, c]) => {
    l.push(`## 页面：${f}`), l.push(""), c.forEach((n, a) => {
      var o, _, x, b;
      l.push(`### ${a + 1}. ${n.title || "未命名评审"}`), l.push(`- **严重等级**：${zr(n.severity)}`), l.push(`- **状态**：${n.status === "resolved" ? "已解决" : "待处理"}`), l.push(`- **窗口尺寸**：${(o = n.viewport) == null ? void 0 : o.width} × ${(_ = n.viewport) == null ? void 0 : _.height}`), n.scroll && l.push(`- **滚动位置**：x=${n.scroll.x}, y=${n.scroll.y}`);
      const i = n.targets || [];
      i.length > 0 && (l.push(`- **评审目标数**：${i.length}`), i.forEach((w, h) => {
        w.type === "element" && w.elementRect ? (l.push(`  - 目标 ${h + 1}（元素）：\`${w.selector}\` x=${w.elementRect.x}, y=${w.elementRect.y}, w=${w.elementRect.width}, h=${w.elementRect.height}`), w.elementText && l.push(`    文本：${w.elementText}`)) : w.viewportRect && l.push(`  - 目标 ${h + 1}（框选）：x=${w.viewportRect.x}, y=${w.viewportRect.y}, w=${w.viewportRect.width}, h=${w.viewportRect.height}`);
      })), l.push(`- **评审建议**：${n.suggestion}`), l.push(`- **创建时间**：${new Date(n.createdAt).toLocaleString()}`), n.locators && Object.keys(n.locators).length > 0 && (l.push(""), l.push("#### 定位信息"), n.locators.cssSelector && l.push(`- **CSS Selector**: \`${n.locators.cssSelector}\``), n.locators.xpath && l.push(`- **XPath**: \`${n.locators.xpath}\``), (x = n.locators.aria) != null && x.role && l.push(`- **ARIA Role**: ${n.locators.aria.role}`), (b = n.locators.aria) != null && b.accessibleName && l.push(`- **Accessible Name**: ${n.locators.aria.accessibleName}`), n.locators.testId && l.push(`- **data-testid**: ${n.locators.testId}`)), n.screenshots && n.screenshots.length > 0 && (l.push(""), l.push("#### 截图"), n.screenshots.forEach((w) => {
        const h = w.url || w.imagePath || `images/${w.filename}`;
        l.push(`![${w.type}](${h})`);
      })), l.push("");
    });
  }), l.join(`
`);
}
function _e(t, l) {
  if (typeof window > "u") return;
  const r = URL.createObjectURL(t), f = document.createElement("a");
  f.href = r, f.download = l, f.style.display = "none", document.body.appendChild(f), f.click(), setTimeout(() => {
    f.parentNode && document.body.removeChild(f), URL.revokeObjectURL(r);
  }, 1e3);
}
function be() {
  const t = /* @__PURE__ */ new Date();
  return `${t.getFullYear()}${fe(t.getMonth() + 1)}${fe(t.getDate())}-${fe(t.getHours())}${fe(t.getMinutes())}`;
}
function fe(t) {
  return String(t).padStart(2, "0");
}
function zr(t) {
  return { low: "低", medium: "中", high: "高", critical: "严重" }[t] || t;
}
function Ar(t, l) {
  return t.reduce((r, f) => {
    const c = f[l] || "unknown";
    return r[c] || (r[c] = []), r[c].push(f), r;
  }, {});
}
function Or({ active: t, mode: l, onIgnoreTarget: r }) {
  const [f, c] = Rt(null), [n, a] = Rt(""), [i, o] = Rt([]), [_, x] = Rt({ x: 0, y: 0 }), b = Ut(_);
  Vt(() => {
    b.current = _;
  }, [_]);
  const w = t && l === "element", h = lt((R) => {
    const P = R.target;
    return !P || !(P instanceof Element) || r && r(P) ? null : P;
  }, [r]), v = lt((R) => {
    if (!w || R.buttons !== 0) return;
    const P = h(R);
    if (!P) {
      c(null);
      return;
    }
    const O = P.getBoundingClientRect();
    c({
      x: O.left,
      y: O.top,
      width: O.width,
      height: O.height
    }), a(P.tagName.toLowerCase());
  }, [w, h]), u = lt(() => {
    c(null);
  }, []), m = lt((R) => {
    var $;
    if (!w) return;
    const P = h(R);
    if (!P) return;
    R.preventDefault(), R.stopPropagation();
    const O = P.getBoundingClientRect(), U = b.current, j = {
      el: P,
      selector: Ue(P),
      tag: P.tagName.toLowerCase(),
      text: (($ = P.innerText) == null ? void 0 : $.slice(0, 40)) || "",
      rect: {
        x: O.left,
        y: O.top,
        width: O.width,
        height: O.height
      },
      docRect: {
        x: O.left + U.x,
        y: O.top + U.y,
        width: O.width,
        height: O.height
      }
    };
    Pr(R) ? o((rt) => {
      const S = rt.findIndex((z) => z.el === P);
      return S > -1 ? rt.filter((z, s) => s !== S) : [...rt, j];
    }) : o([j]);
  }, [w, h]), d = lt(() => {
    const R = { x: window.scrollX, y: window.scrollY };
    x(R), b.current = R, o((P) => P.map((O) => {
      const U = O.el || (O.selector ? document.querySelector(O.selector) : null);
      if (!U) return O;
      const j = U.getBoundingClientRect();
      return {
        ...O,
        el: U,
        rect: {
          x: j.left,
          y: j.top,
          width: j.width,
          height: j.height
        }
      };
    }));
  }, []);
  Vt(() => {
    if (w)
      return x({ x: window.scrollX, y: window.scrollY }), document.addEventListener("mousemove", v), document.addEventListener("mouseout", u), document.addEventListener("click", m, !0), window.addEventListener("scroll", d, !0), () => {
        document.removeEventListener("mousemove", v), document.removeEventListener("mouseout", u), document.removeEventListener("click", m, !0), window.removeEventListener("scroll", d, !0);
      };
  }, [w, v, u, m, d]);
  const g = lt(() => {
    o([]);
  }, []), k = lt((R) => {
    o((P) => P.filter((O) => O.el !== R.el));
  }, []), C = lt((R) => {
    var U;
    if (!R || !(R instanceof Element)) return;
    const P = R.getBoundingClientRect(), O = b.current;
    o([{
      el: R,
      selector: Ue(R),
      tag: R.tagName.toLowerCase(),
      text: ((U = R.innerText) == null ? void 0 : U.slice(0, 40)) || "",
      rect: {
        x: P.left,
        y: P.top,
        width: P.width,
        height: P.height
      },
      docRect: {
        x: P.left + O.x,
        y: P.top + O.y,
        width: P.width,
        height: P.height
      }
    }]);
  }, []);
  return {
    hoveredRect: f,
    hoveredTag: n,
    selectedElements: i,
    setSelectedElements: o,
    selectElement: C,
    removeSelectedElement: k,
    clearSelectedElements: g
  };
}
function Pr(t) {
  return t.ctrlKey || t.metaKey;
}
function Ue(t) {
  var f;
  if (!t || !(t instanceof Element)) return "";
  if (t.id) return "#" + t.id;
  if (t.className) {
    const c = String(t.className).split(/\s+/).filter((n) => n && !n.startsWith("el-")).slice(0, 2);
    if (c.length) return t.tagName.toLowerCase() + "." + c.join(".");
  }
  let l = [], r = t;
  for (; r && r !== document.body; ) {
    let c = r.tagName.toLowerCase();
    if (r.id) {
      c += "#" + r.id, l.unshift(c);
      break;
    }
    const a = Array.from(((f = r.parentNode) == null ? void 0 : f.children) || []).filter((i) => i.tagName === r.tagName);
    if (a.length > 1) {
      const i = a.indexOf(r) + 1;
      c += `:nth-of-type(${i})`;
    }
    l.unshift(c), r = r.parentNode;
  }
  return l.join(" > ");
}
function Ir({ active: t, mode: l, onIgnoreTarget: r, onBoxCreate: f }) {
  const [c, n] = Rt([]), [a, i] = Rt(null), [o, _] = Rt(null), [x, b] = Rt({ x: 0, y: 0 }), w = Ut(x);
  Vt(() => {
    w.current = x;
  }, [x]);
  const h = t && l === "viewport", v = Ut(0), u = Ut(c);
  Vt(() => {
    u.current = c;
  }, [c]);
  const m = Ut(!1), d = Ut({ x: 0, y: 0 }), g = Ut(""), k = Ut({ x: 0, y: 0, rect: null }), C = lt((z) => {
    const s = z.target;
    return !s || !(s instanceof Element) || r && r(s) ? null : s;
  }, [r]), R = lt((z) => {
    if (!z) return null;
    const s = w.current;
    return {
      x: z.x - s.x,
      y: z.y - s.y,
      width: z.width,
      height: z.height
    };
  }, []), P = lt((z) => {
    n((s) => {
      const F = s.filter((it) => it.id !== z.id);
      return F.forEach((it, Z) => {
        it.index = Z;
      }), F;
    });
  }, []), O = lt(() => {
    n([]), i(null);
  }, []), U = lt((z, s, F) => {
    F.stopPropagation(), _(z.id), g.current = s, k.current = {
      x: F.clientX + window.scrollX,
      y: F.clientY + window.scrollY,
      rect: { ...z.rect }
    };
  }, []), j = lt((z) => {
    !h || o || !C(z) || (z.preventDefault(), m.current = !0, d.current = { x: z.clientX, y: z.clientY }, i({ x: z.clientX, y: z.clientY, width: 0, height: 0 }));
  }, [h, o, C]), $ = lt((z) => {
    if (!h && !o) return;
    if (o && k.current.rect) {
      const it = z.clientX + window.scrollX - k.current.x, Z = z.clientY + window.scrollY - k.current.y, st = k.current.rect;
      n((V) => V.map((at) => {
        if (at.id !== o) return at;
        let { x: D, y: A, width: tt, height: H } = st;
        return g.current.includes("e") && (tt = Math.max(10, st.width + it)), g.current.includes("s") && (H = Math.max(10, st.height + Z)), g.current.includes("w") && (tt = Math.max(10, st.width - it), D = st.x + (st.width - tt)), g.current.includes("n") && (H = Math.max(10, st.height - Z), A = st.y + (st.height - H)), { ...at, rect: { x: D, y: A, width: tt, height: H } };
      }));
      return;
    }
    if (!m.current) return;
    const s = z.clientX, F = z.clientY;
    i({
      x: Math.min(d.current.x, s),
      y: Math.min(d.current.y, F),
      width: Math.abs(s - d.current.x),
      height: Math.abs(F - d.current.y)
    });
  }, [h, o]), rt = lt((z) => {
    if (!(!h && !o)) {
      if (o) {
        _(null), g.current = "", k.current = { x: 0, y: 0, rect: null };
        return;
      }
      m.current && (m.current = !1, i((s) => {
        if (s && s.width > 10 && s.height > 10) {
          const F = {
            id: "box-" + Date.now() + "-" + v.current++,
            index: u.current.length,
            rect: {
              x: s.x + window.scrollX,
              y: s.y + window.scrollY,
              width: s.width,
              height: s.height
            }
          };
          n((it) => [...it, F]), f == null || f(F, z);
        }
        return null;
      }));
    }
  }, [h, o, f]), S = lt(() => {
    const z = { x: window.scrollX, y: window.scrollY };
    b(z), w.current = z;
  }, []);
  return Vt(() => {
    if (!(!h && !o))
      return document.addEventListener("mousedown", j), document.addEventListener("mousemove", $), document.addEventListener("mouseup", rt), window.addEventListener("scroll", S, !0), () => {
        document.removeEventListener("mousedown", j), document.removeEventListener("mousemove", $), document.removeEventListener("mouseup", rt), window.removeEventListener("scroll", S, !0);
      };
  }, [h, o, j, $, rt, S]), {
    selectedBoxes: c,
    setSelectedBoxes: n,
    dragRect: a,
    resizingBoxId: o,
    isResizing: o !== null,
    removeBox: P,
    clearBoxes: O,
    startResize: U,
    toViewportRect: R
  };
}
function Me({
  initialPosition: t = { x: 0, y: 0 },
  initialSize: l = { width: null, height: null },
  minWidth: r = 200,
  minHeight: f = 40,
  isDragHandle: c,
  measureRef: n = null
}) {
  const [a, i] = Rt(t), [o, _] = Rt(l), [x, b] = Rt(!1), [w, h] = Rt(!1), v = Ut({ x: 0, y: 0 }), u = Ut({ x: 0, y: 0, width: 0, height: 0 }), m = lt((g) => {
    c(g.target) && (b(!0), v.current = {
      x: g.clientX - a.x,
      y: g.clientY - a.y
    }, g.stopPropagation());
  }, [c, a]), d = lt((g) => {
    let k = o.width ?? 0, C = o.height ?? 0;
    if ((k === 0 || C === 0) && (n != null && n.current)) {
      const R = n.current.getBoundingClientRect();
      k = R.width, C = R.height;
    }
    _({ width: k, height: C }), h(!0), u.current = {
      x: g.clientX,
      y: g.clientY,
      width: k,
      height: C
    }, g.stopPropagation();
  }, [o, n]);
  return Vt(() => {
    if (!x && !w) return;
    const g = (C) => {
      if (x)
        i({
          x: C.clientX - v.current.x,
          y: C.clientY - v.current.y
        });
      else if (w) {
        const R = C.clientX - u.current.x, P = C.clientY - u.current.y;
        _({
          width: Math.max(r, u.current.width + R),
          height: Math.max(f, u.current.height + P)
        });
      }
    }, k = () => {
      b(!1), h(!1);
    };
    return document.addEventListener("mousemove", g), document.addEventListener("mouseup", k), () => {
      document.removeEventListener("mousemove", g), document.removeEventListener("mouseup", k);
    };
  }, [x, w, r, f]), {
    position: a,
    size: o,
    isDragging: x,
    isResizing: w,
    onDragStart: m,
    onResizeStart: d
  };
}
function jr(t, l) {
  if (t.match(/^[a-z]+:\/\//i))
    return t;
  if (t.match(/^\/\//))
    return window.location.protocol + t;
  if (t.match(/^[a-z]+:/i))
    return t;
  const r = document.implementation.createHTMLDocument(), f = r.createElement("base"), c = r.createElement("a");
  return r.head.appendChild(f), r.body.appendChild(c), l && (f.href = l), c.href = t, c.href;
}
const Dr = /* @__PURE__ */ (() => {
  let t = 0;
  const l = () => (
    // eslint-disable-next-line no-bitwise
    `0000${(Math.random() * 36 ** 4 << 0).toString(36)}`.slice(-4)
  );
  return () => (t += 1, `u${l()}${t}`);
})();
function qt(t) {
  const l = [];
  for (let r = 0, f = t.length; r < f; r++)
    l.push(t[r]);
  return l;
}
let ne = null;
function Qe(t = {}) {
  return ne || (t.includeStyleProperties ? (ne = t.includeStyleProperties, ne) : (ne = qt(window.getComputedStyle(document.documentElement)), ne));
}
function de(t, l) {
  const f = (t.ownerDocument.defaultView || window).getComputedStyle(t).getPropertyValue(l);
  return f ? parseFloat(f.replace("px", "")) : 0;
}
function Nr(t) {
  const l = de(t, "border-left-width"), r = de(t, "border-right-width");
  return t.clientWidth + l + r;
}
function Br(t) {
  const l = de(t, "border-top-width"), r = de(t, "border-bottom-width");
  return t.clientHeight + l + r;
}
function tr(t, l = {}) {
  const r = l.width || Nr(t), f = l.height || Br(t);
  return { width: r, height: f };
}
function Fr() {
  let t, l;
  try {
    l = process;
  } catch {
  }
  const r = l && l.env ? l.env.devicePixelRatio : null;
  return r && (t = parseInt(r, 10), Number.isNaN(t) && (t = 1)), t || window.devicePixelRatio || 1;
}
const Nt = 16384;
function Lr(t) {
  (t.width > Nt || t.height > Nt) && (t.width > Nt && t.height > Nt ? t.width > t.height ? (t.height *= Nt / t.width, t.width = Nt) : (t.width *= Nt / t.height, t.height = Nt) : t.width > Nt ? (t.height *= Nt / t.width, t.width = Nt) : (t.width *= Nt / t.height, t.height = Nt));
}
function pe(t) {
  return new Promise((l, r) => {
    const f = new Image();
    f.onload = () => {
      f.decode().then(() => {
        requestAnimationFrame(() => l(f));
      });
    }, f.onerror = r, f.crossOrigin = "anonymous", f.decoding = "async", f.src = t;
  });
}
async function Ur(t) {
  return Promise.resolve().then(() => new XMLSerializer().serializeToString(t)).then(encodeURIComponent).then((l) => `data:image/svg+xml;charset=utf-8,${l}`);
}
async function Mr(t, l, r) {
  const f = "http://www.w3.org/2000/svg", c = document.createElementNS(f, "svg"), n = document.createElementNS(f, "foreignObject");
  return c.setAttribute("width", `${l}`), c.setAttribute("height", `${r}`), c.setAttribute("viewBox", `0 0 ${l} ${r}`), n.setAttribute("width", "100%"), n.setAttribute("height", "100%"), n.setAttribute("x", "0"), n.setAttribute("y", "0"), n.setAttribute("externalResourcesRequired", "true"), c.appendChild(n), n.appendChild(t), Ur(c);
}
const Dt = (t, l) => {
  if (t instanceof l)
    return !0;
  const r = Object.getPrototypeOf(t);
  return r === null ? !1 : r.constructor.name === l.name || Dt(r, l);
};
function $r(t) {
  const l = t.getPropertyValue("content");
  return `${t.cssText} content: '${l.replace(/'|"/g, "")}';`;
}
function Wr(t, l) {
  return Qe(l).map((r) => {
    const f = t.getPropertyValue(r), c = t.getPropertyPriority(r);
    return `${r}: ${f}${c ? " !important" : ""};`;
  }).join(" ");
}
function Zr(t, l, r, f) {
  const c = `.${t}:${l}`, n = r.cssText ? $r(r) : Wr(r, f);
  return document.createTextNode(`${c}{${n}}`);
}
function $e(t, l, r, f) {
  const c = window.getComputedStyle(t, r), n = c.getPropertyValue("content");
  if (n === "" || n === "none")
    return;
  const a = Dr();
  try {
    l.className = `${l.className} ${a}`;
  } catch {
    return;
  }
  const i = document.createElement("style");
  i.appendChild(Zr(a, r, c, f)), l.appendChild(i);
}
function Hr(t, l, r) {
  $e(t, l, ":before", r), $e(t, l, ":after", r);
}
const We = "application/font-woff", Ze = "image/jpeg", Vr = {
  woff: We,
  woff2: We,
  ttf: "application/font-truetype",
  eot: "application/vnd.ms-fontobject",
  png: "image/png",
  jpg: Ze,
  jpeg: Ze,
  gif: "image/gif",
  tiff: "image/tiff",
  svg: "image/svg+xml",
  webp: "image/webp"
};
function Yr(t) {
  const l = /\.([^./]*?)$/g.exec(t);
  return l ? l[1] : "";
}
function ze(t) {
  const l = Yr(t).toLowerCase();
  return Vr[l] || "";
}
function Gr(t) {
  return t.split(/,/)[1];
}
function Te(t) {
  return t.search(/^(data:)/) !== -1;
}
function Xr(t, l) {
  return `data:${l};base64,${t}`;
}
async function er(t, l, r) {
  const f = await fetch(t, l);
  if (f.status === 404)
    throw new Error(`Resource "${f.url}" not found`);
  const c = await f.blob();
  return new Promise((n, a) => {
    const i = new FileReader();
    i.onerror = a, i.onloadend = () => {
      try {
        n(r({ res: f, result: i.result }));
      } catch (o) {
        a(o);
      }
    }, i.readAsDataURL(c);
  });
}
const xe = {};
function Kr(t, l, r) {
  let f = t.replace(/\?.*/, "");
  return r && (f = t), /ttf|otf|eot|woff2?/i.test(f) && (f = f.replace(/.*\//, "")), l ? `[${l}]${f}` : f;
}
async function Ae(t, l, r) {
  const f = Kr(t, l, r.includeQueryParams);
  if (xe[f] != null)
    return xe[f];
  r.cacheBust && (t += (/\?/.test(t) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime());
  let c;
  try {
    const n = await er(t, r.fetchRequestInit, ({ res: a, result: i }) => (l || (l = a.headers.get("Content-Type") || ""), Gr(i)));
    c = Xr(n, l);
  } catch (n) {
    c = r.imagePlaceholder || "";
    let a = `Failed to fetch resource: ${t}`;
    n && (a = typeof n == "string" ? n : n.message), a && console.warn(a);
  }
  return xe[f] = c, c;
}
async function qr(t) {
  const l = t.toDataURL();
  return l === "data:," ? t.cloneNode(!1) : pe(l);
}
async function Jr(t, l) {
  if (t.currentSrc) {
    const n = document.createElement("canvas"), a = n.getContext("2d");
    n.width = t.clientWidth, n.height = t.clientHeight, a == null || a.drawImage(t, 0, 0, n.width, n.height);
    const i = n.toDataURL();
    return pe(i);
  }
  const r = t.poster, f = ze(r), c = await Ae(r, f, l);
  return pe(c);
}
async function Qr(t, l) {
  var r;
  try {
    if (!((r = t == null ? void 0 : t.contentDocument) === null || r === void 0) && r.body)
      return await ge(t.contentDocument.body, l, !0);
  } catch {
  }
  return t.cloneNode(!1);
}
async function tn(t, l) {
  return Dt(t, HTMLCanvasElement) ? qr(t) : Dt(t, HTMLVideoElement) ? Jr(t, l) : Dt(t, HTMLIFrameElement) ? Qr(t, l) : t.cloneNode(rr(t));
}
const en = (t) => t.tagName != null && t.tagName.toUpperCase() === "SLOT", rr = (t) => t.tagName != null && t.tagName.toUpperCase() === "SVG";
async function rn(t, l, r) {
  var f, c;
  if (rr(l))
    return l;
  let n = [];
  return en(t) && t.assignedNodes ? n = qt(t.assignedNodes()) : Dt(t, HTMLIFrameElement) && (!((f = t.contentDocument) === null || f === void 0) && f.body) ? n = qt(t.contentDocument.body.childNodes) : n = qt(((c = t.shadowRoot) !== null && c !== void 0 ? c : t).childNodes), n.length === 0 || Dt(t, HTMLVideoElement) || await n.reduce((a, i) => a.then(() => ge(i, r)).then((o) => {
    o && l.appendChild(o);
  }), Promise.resolve()), l;
}
function nn(t, l, r) {
  const f = l.style;
  if (!f)
    return;
  const c = window.getComputedStyle(t);
  c.cssText ? (f.cssText = c.cssText, f.transformOrigin = c.transformOrigin) : Qe(r).forEach((n) => {
    let a = c.getPropertyValue(n);
    n === "font-size" && a.endsWith("px") && (a = `${Math.floor(parseFloat(a.substring(0, a.length - 2))) - 0.1}px`), Dt(t, HTMLIFrameElement) && n === "display" && a === "inline" && (a = "block"), n === "d" && l.getAttribute("d") && (a = `path(${l.getAttribute("d")})`), f.setProperty(n, a, c.getPropertyPriority(n));
  });
}
function sn(t, l) {
  Dt(t, HTMLTextAreaElement) && (l.innerHTML = t.value), Dt(t, HTMLInputElement) && l.setAttribute("value", t.value);
}
function an(t, l) {
  if (Dt(t, HTMLSelectElement)) {
    const r = l, f = Array.from(r.children).find((c) => t.value === c.getAttribute("value"));
    f && f.setAttribute("selected", "");
  }
}
function on(t, l, r) {
  return Dt(l, Element) && (nn(t, l, r), Hr(t, l, r), sn(t, l), an(t, l)), l;
}
async function ln(t, l) {
  const r = t.querySelectorAll ? t.querySelectorAll("use") : [];
  if (r.length === 0)
    return t;
  const f = {};
  for (let n = 0; n < r.length; n++) {
    const i = r[n].getAttribute("xlink:href");
    if (i) {
      const o = t.querySelector(i), _ = document.querySelector(i);
      !o && _ && !f[i] && (f[i] = await ge(_, l, !0));
    }
  }
  const c = Object.values(f);
  if (c.length) {
    const n = "http://www.w3.org/1999/xhtml", a = document.createElementNS(n, "svg");
    a.setAttribute("xmlns", n), a.style.position = "absolute", a.style.width = "0", a.style.height = "0", a.style.overflow = "hidden", a.style.display = "none";
    const i = document.createElementNS(n, "defs");
    a.appendChild(i);
    for (let o = 0; o < c.length; o++)
      i.appendChild(c[o]);
    t.appendChild(a);
  }
  return t;
}
async function ge(t, l, r) {
  return !r && l.filter && !l.filter(t) ? null : Promise.resolve(t).then((f) => tn(f, l)).then((f) => rn(t, f, l)).then((f) => on(t, f, l)).then((f) => ln(f, l));
}
const nr = /url\((['"]?)([^'"]+?)\1\)/g, cn = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g, un = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function hn(t) {
  const l = t.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
  return new RegExp(`(url\\(['"]?)(${l})(['"]?\\))`, "g");
}
function fn(t) {
  const l = [];
  return t.replace(nr, (r, f, c) => (l.push(c), r)), l.filter((r) => !Te(r));
}
async function dn(t, l, r, f, c) {
  try {
    const n = r ? jr(l, r) : l, a = ze(l);
    let i;
    return c || (i = await Ae(n, a, f)), t.replace(hn(l), `$1${i}$3`);
  } catch {
  }
  return t;
}
function pn(t, { preferredFontFormat: l }) {
  return l ? t.replace(un, (r) => {
    for (; ; ) {
      const [f, , c] = cn.exec(r) || [];
      if (!c)
        return "";
      if (c === l)
        return `src: ${f};`;
    }
  }) : t;
}
function ir(t) {
  return t.search(nr) !== -1;
}
async function sr(t, l, r) {
  if (!ir(t))
    return t;
  const f = pn(t, r);
  return fn(f).reduce((n, a) => n.then((i) => dn(i, a, l, r)), Promise.resolve(f));
}
async function ie(t, l, r) {
  var f;
  const c = (f = l.style) === null || f === void 0 ? void 0 : f.getPropertyValue(t);
  if (c) {
    const n = await sr(c, null, r);
    return l.style.setProperty(t, n, l.style.getPropertyPriority(t)), !0;
  }
  return !1;
}
async function mn(t, l) {
  await ie("background", t, l) || await ie("background-image", t, l), await ie("mask", t, l) || await ie("-webkit-mask", t, l) || await ie("mask-image", t, l) || await ie("-webkit-mask-image", t, l);
}
async function gn(t, l) {
  const r = Dt(t, HTMLImageElement);
  if (!(r && !Te(t.src)) && !(Dt(t, SVGImageElement) && !Te(t.href.baseVal)))
    return;
  const f = r ? t.src : t.href.baseVal, c = await Ae(f, ze(f), l);
  await new Promise((n, a) => {
    t.onload = n, t.onerror = l.onImageErrorHandler ? (...o) => {
      try {
        n(l.onImageErrorHandler(...o));
      } catch (_) {
        a(_);
      }
    } : a;
    const i = t;
    i.decode && (i.decode = n), i.loading === "lazy" && (i.loading = "eager"), r ? (t.srcset = "", t.src = c) : t.href.baseVal = c;
  });
}
async function wn(t, l) {
  const f = qt(t.childNodes).map((c) => ar(c, l));
  await Promise.all(f).then(() => t);
}
async function ar(t, l) {
  Dt(t, Element) && (await mn(t, l), await gn(t, l), await wn(t, l));
}
function yn(t, l) {
  const { style: r } = t;
  l.backgroundColor && (r.backgroundColor = l.backgroundColor), l.width && (r.width = `${l.width}px`), l.height && (r.height = `${l.height}px`);
  const f = l.style;
  return f != null && Object.keys(f).forEach((c) => {
    r[c] = f[c];
  }), t;
}
const He = {};
async function Ve(t) {
  let l = He[t];
  if (l != null)
    return l;
  const f = await (await fetch(t)).text();
  return l = { url: t, cssText: f }, He[t] = l, l;
}
async function Ye(t, l) {
  let r = t.cssText;
  const f = /url\(["']?([^"')]+)["']?\)/g, n = (r.match(/url\([^)]+\)/g) || []).map(async (a) => {
    let i = a.replace(f, "$1");
    return i.startsWith("https://") || (i = new URL(i, t.url).href), er(i, l.fetchRequestInit, ({ result: o }) => (r = r.replace(a, `url(${o})`), [a, o]));
  });
  return Promise.all(n).then(() => r);
}
function Ge(t) {
  if (t == null)
    return [];
  const l = [], r = /(\/\*[\s\S]*?\*\/)/gi;
  let f = t.replace(r, "");
  const c = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
  for (; ; ) {
    const o = c.exec(f);
    if (o === null)
      break;
    l.push(o[0]);
  }
  f = f.replace(c, "");
  const n = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi, a = "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", i = new RegExp(a, "gi");
  for (; ; ) {
    let o = n.exec(f);
    if (o === null) {
      if (o = i.exec(f), o === null)
        break;
      n.lastIndex = i.lastIndex;
    } else
      i.lastIndex = n.lastIndex;
    l.push(o[0]);
  }
  return l;
}
async function vn(t, l) {
  const r = [], f = [];
  return t.forEach((c) => {
    if ("cssRules" in c)
      try {
        qt(c.cssRules || []).forEach((n, a) => {
          if (n.type === CSSRule.IMPORT_RULE) {
            let i = a + 1;
            const o = n.href, _ = Ve(o).then((x) => Ye(x, l)).then((x) => Ge(x).forEach((b) => {
              try {
                c.insertRule(b, b.startsWith("@import") ? i += 1 : c.cssRules.length);
              } catch (w) {
                console.error("Error inserting rule from remote css", {
                  rule: b,
                  error: w
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
        c.href != null && f.push(Ve(c.href).then((i) => Ye(i, l)).then((i) => Ge(i).forEach((o) => {
          a.insertRule(o, a.cssRules.length);
        })).catch((i) => {
          console.error("Error loading remote stylesheet", i);
        })), console.error("Error inlining remote css file", n);
      }
  }), Promise.all(f).then(() => (t.forEach((c) => {
    if ("cssRules" in c)
      try {
        qt(c.cssRules || []).forEach((n) => {
          r.push(n);
        });
      } catch (n) {
        console.error(`Error while reading CSS rules from ${c.href}`, n);
      }
  }), r));
}
function _n(t) {
  return t.filter((l) => l.type === CSSRule.FONT_FACE_RULE).filter((l) => ir(l.style.getPropertyValue("src")));
}
async function bn(t, l) {
  if (t.ownerDocument == null)
    throw new Error("Provided element is not within a Document");
  const r = qt(t.ownerDocument.styleSheets), f = await vn(r, l);
  return _n(f);
}
function or(t) {
  return t.trim().replace(/["']/g, "");
}
function xn(t) {
  const l = /* @__PURE__ */ new Set();
  function r(f) {
    (f.style.fontFamily || getComputedStyle(f).fontFamily).split(",").forEach((n) => {
      l.add(or(n));
    }), Array.from(f.children).forEach((n) => {
      n instanceof HTMLElement && r(n);
    });
  }
  return r(t), l;
}
async function kn(t, l) {
  const r = await bn(t, l), f = xn(t);
  return (await Promise.all(r.filter((n) => f.has(or(n.style.fontFamily))).map((n) => {
    const a = n.parentStyleSheet ? n.parentStyleSheet.href : null;
    return sr(n.cssText, a, l);
  }))).join(`
`);
}
async function En(t, l) {
  const r = l.fontEmbedCSS != null ? l.fontEmbedCSS : l.skipFonts ? null : await kn(t, l);
  if (r) {
    const f = document.createElement("style"), c = document.createTextNode(r);
    f.appendChild(c), t.firstChild ? t.insertBefore(f, t.firstChild) : t.appendChild(f);
  }
}
async function Sn(t, l = {}) {
  const { width: r, height: f } = tr(t, l), c = await ge(t, l, !0);
  return await En(c, l), await ar(c, l), yn(c, l), await Mr(c, r, f);
}
async function Rn(t, l = {}) {
  const { width: r, height: f } = tr(t, l), c = await Sn(t, l), n = await pe(c), a = document.createElement("canvas"), i = a.getContext("2d"), o = l.pixelRatio || Fr(), _ = l.canvasWidth || r, x = l.canvasHeight || f;
  return a.width = _ * o, a.height = x * o, l.skipAutoScale || Lr(a), a.style.width = `${_}`, a.style.height = `${x}`, l.backgroundColor && (i.fillStyle = l.backgroundColor, i.fillRect(0, 0, a.width, a.height)), i.drawImage(n, 0, 0, a.width, a.height), a;
}
async function Oe(t, l = {}) {
  return (await Rn(t, l)).toDataURL();
}
const Ht = {
  ELEMENT: "element",
  VIEWPORT: "viewport",
  FULL_PAGE: "fullpage",
  BOX: "box",
  TARGETS: "targets"
};
function ke(t) {
  const l = Date.now(), r = Math.random().toString(36).slice(2, 6);
  return `screenshot-${t}-${l}-${r}.png`;
}
async function lr(t, l = {}) {
  if (!t) return null;
  try {
    return await Oe(t, {
      pixelRatio: l.pixelRatio || window.devicePixelRatio || 1,
      cacheBust: !0,
      ...l
    });
  } catch (r) {
    return console.error("captureElement failed:", r), null;
  }
}
async function Cn(t = {}) {
  const l = document.documentElement;
  return lr(l, {
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
async function Tn(t = {}) {
  const l = document.documentElement, r = l.style.overflow, f = l.style.width, c = l.style.height;
  try {
    return l.style.overflow = "visible", l.style.width = "auto", l.style.height = "auto", await Oe(l, {
      pixelRatio: t.pixelRatio || window.devicePixelRatio || 1,
      cacheBust: !0,
      ...t
    });
  } catch (n) {
    return console.error("captureFullPage failed:", n), null;
  } finally {
    l.style.overflow = r, l.style.width = f, l.style.height = c;
  }
}
async function zn(t, l = {}) {
  if (!t || t.width < 1 || t.height < 1) return null;
  const r = document.documentElement, f = r.style.overflow, c = r.style.width, n = r.style.height;
  try {
    r.style.overflow = "visible", r.style.width = "auto", r.style.height = "auto";
    const a = await Oe(r, {
      pixelRatio: l.pixelRatio || window.devicePixelRatio || 1,
      cacheBust: !0,
      ...l
    });
    return An(a, t);
  } catch (a) {
    return console.error("captureBox failed:", a), null;
  } finally {
    r.style.overflow = f, r.style.width = c, r.style.height = n;
  }
}
function An(t, l) {
  return new Promise((r, f) => {
    const c = new Image();
    c.onload = () => {
      const n = document.createElement("canvas"), a = window.devicePixelRatio || 1;
      n.width = Math.round(l.width * a), n.height = Math.round(l.height * a), n.getContext("2d").drawImage(
        c,
        l.x * a,
        l.y * a,
        l.width * a,
        l.height * a,
        0,
        0,
        n.width,
        n.height
      ), r(n.toDataURL("image/png"));
    }, c.onerror = f, c.src = t;
  });
}
async function On(t) {
  return (await fetch(t)).blob();
}
async function Ee(t, l, r) {
  if (!r) return null;
  try {
    const f = await On(t);
    return await r(f, l);
  } catch (f) {
    return console.error("uploadScreenshot failed:", f), null;
  }
}
function cr(t) {
  var c;
  if (!t || t.nodeType !== Node.ELEMENT_NODE) return "";
  if (t.id) return "#" + t.id;
  const l = t.tagName.toLowerCase();
  if (t.className) {
    const n = String(t.className).split(/\s+/).filter((a) => a && !a.startsWith("el-") && !/^__/.test(a)).slice(0, 2);
    if (n.length) return l + "." + n.join(".");
  }
  let r = [], f = t;
  for (; f && f !== document.body; ) {
    let n = f.tagName.toLowerCase();
    if (f.id) {
      n += "#" + f.id, r.unshift(n);
      break;
    }
    const i = Array.from(((c = f.parentNode) == null ? void 0 : c.children) || []).filter((o) => o.tagName === f.tagName);
    if (i.length > 1) {
      const o = i.indexOf(f) + 1;
      n += `:nth-of-type(${o})`;
    }
    r.unshift(n), f = f.parentNode;
  }
  return r.join(" > ");
}
function Pn(t) {
  var f;
  if (!t || t.nodeType !== Node.ELEMENT_NODE) return "";
  if (t.id) return `//*[@id="${t.id}"]`;
  const l = [];
  let r = t;
  for (; r && r !== document.body; ) {
    const a = Array.from(((f = r.parentNode) == null ? void 0 : f.children) || []).filter((i) => i.tagName === r.tagName).indexOf(r) + 1;
    l.unshift(`${r.tagName.toLowerCase()}[${a}]`), r = r.parentNode;
  }
  return l.unshift(""), "/html/body/" + l.slice(1).join("/");
}
function In(t) {
  if (!t || t.nodeType !== Node.ELEMENT_NODE) return {};
  const l = {}, r = t.getAttribute("role") || jn(t);
  r && (l.role = r);
  const f = Dn(t);
  f && (l.accessibleName = f);
  const c = t.getAttribute("aria-labelledby");
  return c && (l.labeledBy = c), Object.keys(l).length ? l : void 0;
}
function jn(t) {
  const l = t.tagName.toLowerCase(), r = t.getAttribute("type");
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
  }[l];
}
function Dn(t) {
  var n, a;
  if (t.getAttribute("aria-label")) return t.getAttribute("aria-label").trim();
  const l = t.getAttribute("aria-labelledby");
  if (l) {
    const i = l.split(/\s+/).map((o) => {
      var _, x;
      return (x = (_ = document.getElementById(o)) == null ? void 0 : _.textContent) == null ? void 0 : x.trim();
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
function Nn(t) {
  return !t || t.nodeType !== Node.ELEMENT_NODE ? void 0 : t.getAttribute("data-testid") || void 0;
}
function me(t) {
  if (!t || t.nodeType !== Node.ELEMENT_NODE) return null;
  const l = t.getBoundingClientRect();
  return {
    tag: t.tagName.toLowerCase(),
    id: t.id || void 0,
    classes: t.className ? String(t.className).split(/\s+/).filter(Boolean) : void 0,
    selector: cr(t),
    xpath: Pn(t),
    rect: {
      x: l.left + window.scrollX,
      y: l.top + window.scrollY,
      width: l.width,
      height: l.height
    },
    aria: In(t),
    testId: Nn(t)
  };
}
function Bn(t) {
  if (!t || t.nodeType !== Node.ELEMENT_NODE) return [];
  const l = [];
  let r = t;
  for (; r && r !== document.body; )
    l.unshift(r), r = r.parentElement;
  return r === document.body && l.unshift(document.body), l.map(me).filter(Boolean);
}
function Fn(t) {
  if (!t || t.nodeType !== Node.ELEMENT_NODE) return [];
  const l = Ln(t);
  if (l.length) return l;
  const r = Mn(t);
  return r.length ? r : [];
}
function Ln(t) {
  const l = [];
  let r = t;
  for (; r; ) {
    const f = Un(r);
    f && !l.find((c) => c.componentName === f.componentName && c.selector === f.selector) && l.unshift(f), r = r.parentElement;
  }
  return l;
}
function Un(t) {
  var n, a, i, o, _;
  const r = Object.keys(t || {}).find((x) => x.startsWith("__vue"));
  if (!r) return null;
  const f = t[r], c = ((n = f == null ? void 0 : f.type) == null ? void 0 : n.name) || ((a = f == null ? void 0 : f.type) == null ? void 0 : a.__name) || ((o = (i = f == null ? void 0 : f.parent) == null ? void 0 : i.type) == null ? void 0 : o.name);
  return c ? {
    componentName: c,
    selector: cr(t),
    rect: (_ = me(t)) == null ? void 0 : _.rect
  } : null;
}
function Mn(t) {
  const l = [], r = Object.keys(t || {}).find((c) => c.startsWith("__reactFiber$"));
  if (!r) return l;
  let f = t[r];
  for (; f; ) {
    const c = $n(f);
    c && !l.find((n) => n.componentName === c) && l.unshift({ componentName: c, selector: void 0, rect: void 0 }), f = f.return;
  }
  return l;
}
function $n(t) {
  var l;
  if (!t) return null;
  if (typeof t.type == "function") return t.type.displayName || t.type.name || null;
  if (typeof t.type == "string") return null;
  if (t.elementType) {
    if (typeof t.elementType == "function") return t.elementType.displayName || t.elementType.name || null;
    if (typeof t.elementType == "object" && ((l = t.elementType) != null && l.$$typeof)) return t.elementType.name || null;
  }
  return null;
}
function Xe(t) {
  return {
    dom: Bn(t),
    framework: Fn(t)
  };
}
function qn({
  active: t = !1,
  pagePath: l = "",
  pageName: r = "",
  storageKey: f = "page-reviews",
  imageUpload: c,
  enableZipExport: n = !0,
  enableComponentTree: a = !0,
  onActiveChange: i,
  onAdd: o,
  onUpdate: _,
  onDelete: x,
  onClear: b,
  onExport: w
}) {
  var Ft, Zt, le, se;
  const h = ye(() => l || (typeof window < "u" ? window.location.pathname + window.location.search : "/"), [l]), {
    reviews: v,
    getPageReviews: u,
    addReview: m,
    updateReview: d,
    deleteReview: g,
    clearPageReviews: k,
    exportToJSON: C,
    exportToMarkdown: R,
    exportToZIP: P
  } = Cr({ storageKey: f, defaultPagePath: () => h }), O = ye(() => u(h), [u, h, v]), [U, j] = Rt("element"), [$, rt] = Rt(!1), [S, z] = Rt(!1), [s, F] = Rt(!1), [it, Z] = Rt(null), [st, V] = Rt(null), [at, D] = Rt([]), [A, tt] = Rt(null), [H, q] = Rt({
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
  }), yt = Ut(!1), Et = Ut(null), ft = lt((B) => yt.current ? !0 : !!B.closest(".review-overlay"), []), nt = Or({
    active: t && !$,
    mode: U,
    onIgnoreTarget: ft
  }), _t = lt((B, et) => {
    Se(et) || nt.clearSelectedElements();
  }, [nt.clearSelectedElements]), ht = Ir({
    active: t && !$,
    mode: U,
    onIgnoreTarget: ft,
    onBoxCreate: _t
  }), bt = Me({
    initialPosition: { x: 0, y: 0 },
    initialSize: { width: null, height: null },
    minWidth: 400,
    minHeight: 48,
    isDragHandle: (B) => {
      var et, ct;
      return ((et = B.classList) == null ? void 0 : et.contains("review-toolbar-title")) || ((ct = B.classList) == null ? void 0 : ct.contains("review-toolbar"));
    },
    measureRef: Et
  }), kt = Me({
    initialPosition: { x: 0, y: 0 },
    initialSize: { width: 560, height: null },
    minWidth: 360,
    minHeight: 300,
    isDragHandle: (B) => {
      const et = B.closest(".ant-modal-header"), ct = B.closest(".ant-modal-close");
      return !!et && !ct;
    }
  });
  Vt(() => {
    yt.current = bt.isDragging || bt.isResizing || kt.isDragging || kt.isResizing;
  }, [bt.isDragging, bt.isResizing, kt.isDragging, kt.isResizing]);
  const e = nt.selectedElements.length + ht.selectedBoxes.length, L = H.title.trim() && H.suggestion.trim(), N = lt(() => {
    i == null || i(!1);
  }, [i]), y = lt(() => ({
    viewport: { width: window.innerWidth, height: window.innerHeight },
    scroll: { x: window.scrollX, y: window.scrollY },
    pagePath: h,
    pageUrl: window.location.href,
    pageName: r || h
  }), [h, r]), p = lt((B) => {
    const et = {};
    return B.selector && (et.cssSelector = B.selector), B.xpath && (et.xpath = B.xpath), B.aria && Object.keys(B.aria).length && (et.aria = B.aria), B.testId && (et.testId = B.testId), Object.keys(et).length ? et : null;
  }, []), T = lt(() => {
    const B = [];
    return nt.selectedElements.forEach((et) => {
      const ct = et.el ? me(et.el) : null;
      B.push({
        type: "element",
        selector: et.selector,
        elementText: et.text,
        elementRect: et.docRect || et.rect,
        componentTree: ct ? Xe(et.el) : null,
        aria: (ct == null ? void 0 : ct.aria) || null,
        locators: ct ? p(ct) : null
      });
    }), ht.selectedBoxes.forEach((et) => {
      B.push({
        type: "viewport",
        viewportRect: et.rect
      });
    }), B;
  }, [nt.selectedElements, ht.selectedBoxes, p]), M = lt(() => {
    D([]), q({
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
  }, []), W = lt(() => {
    nt.clearSelectedElements(), ht.clearBoxes(), V(null);
  }, [nt.clearSelectedElements, ht.clearBoxes]), I = lt(() => {
    const B = y(), et = T(), ct = nt.selectedElements[0], St = ct != null && ct.el ? me(ct.el) : null;
    q({
      type: nt.selectedElements.length > 0 ? "element" : "viewport",
      title: "",
      severity: "medium",
      suggestion: "",
      targets: et,
      viewport: B.viewport,
      scroll: B.scroll,
      pagePath: B.pagePath,
      pageUrl: B.pageUrl,
      pageName: B.pageName,
      aria: (St == null ? void 0 : St.aria) || null,
      locators: St ? p(St) : null
    }), D([]), rt(!0);
  }, [y, T, nt.selectedElements, p]), X = lt(async () => {
    const B = [];
    for (const et of at)
      if (et === Ht.TARGETS)
        for (const ct of H.targets) {
          let St = null;
          if (ct.type === "element" && ct.elementRect) {
            const At = document.querySelector(ct.selector);
            At && (St = await lr(At));
          } else ct.type === "viewport" && ct.viewportRect && (St = await zn(ct.viewportRect));
          if (St) {
            const At = ke(ct.type);
            let Gt = null;
            c && (Gt = await Ee(St, At, c)), B.push({ type: ct.type, filename: At, data: Gt ? void 0 : St, url: Gt || void 0 });
          }
        }
      else if (et === Ht.VIEWPORT) {
        const ct = await Cn();
        if (ct) {
          const St = ke(Ht.VIEWPORT);
          let At = null;
          c && (At = await Ee(ct, St, c)), B.push({ type: Ht.VIEWPORT, filename: St, data: At ? void 0 : ct, url: At || void 0 });
        }
      } else if (et === Ht.FULL_PAGE) {
        const ct = await Tn();
        if (ct) {
          const St = ke(Ht.FULL_PAGE);
          let At = null;
          c && (At = await Ee(ct, St, c)), B.push({ type: Ht.FULL_PAGE, filename: St, data: At ? void 0 : ct, url: At || void 0 });
        }
      }
    return B;
  }, [at, H.targets, c]), J = lt(async () => {
    if (!L) return;
    const B = await X(), et = m({
      type: H.type,
      title: H.title.trim(),
      severity: H.severity,
      suggestion: H.suggestion.trim(),
      targets: H.targets,
      viewport: H.viewport,
      scroll: H.scroll,
      pagePath: H.pagePath,
      pageUrl: H.pageUrl,
      pageName: H.pageName,
      status: "open",
      screenshots: B,
      aria: H.aria,
      locators: H.locators
    });
    rt(!1), W(), o == null || o(et);
  }, [L, X, H, m, W, o]), K = lt((B) => {
    d(B, { status: "resolved" }), _ == null || _({ id: B, status: "resolved" });
  }, [d, _]), ot = lt((B) => {
    tt({
      title: "删除确认",
      message: "确定删除这条评审意见吗？",
      onConfirm: () => {
        g(B), x == null || x({ id: B }), tt(null);
      }
    });
  }, [g, x]), gt = lt(() => {
    O.length !== 0 && tt({
      title: "清空确认",
      message: "确定清空当前页面的所有评审意见吗？",
      onConfirm: () => {
        k(h), b == null || b({ pagePath: h }), tt(null);
      }
    });
  }, [O.length, k, h, b]), dt = lt(() => {
    C(), w == null || w({ format: "json" });
  }, [C, w]), zt = lt(() => {
    R(), w == null || w({ format: "markdown" });
  }, [R, w]), Bt = lt(async () => {
    await P(), w == null || w({ format: "zip" });
  }, [P, w]), Ot = lt((B) => {
    if (!B.rect) {
      Z(null);
      return;
    }
    Z(B.rect);
  }, []), $t = lt((B) => {
    if (!B.selector) return;
    const et = document.querySelector(B.selector);
    et && (nt.selectElement(et), ht.clearBoxes(), F(!1));
  }, [nt.selectElement, ht.clearBoxes]), xt = lt((B, et) => {
    Se(et) && (et.stopPropagation(), nt.removeSelectedElement(B));
  }, [nt.removeSelectedElement]), Xt = lt((B, et) => {
    Se(et) && (et.stopPropagation(), ht.removeBox(B));
  }, [ht.removeBox]), Yt = lt((B) => {
    B.key === "Escape" && ($ ? rt(!1) : N());
  }, [$, N]), It = lt(() => {
    nt.selectedElements.length === 0 && V(null), F(!0);
  }, [nt.selectedElements.length]);
  Vt(() => {
    if (t)
      return document.addEventListener("keydown", Yt), () => document.removeEventListener("keydown", Yt);
  }, [t, Yt]), Vt(() => {
    t ? j("element") : (W(), M(), z(!1), F(!1), tt(null));
  }, [t, W, M]), Vt(() => {
    nt.selectedElements.length > 0 ? V(Xe(nt.selectedElements[0].el)) : V(null);
  }, [nt.selectedElements]);
  const te = ye(() => {
    const B = [];
    return a && B.push({ key: "tree", label: "组件树" }), B.push({ key: "list", label: "评审列表" }), B.push({ type: "divider" }), B.push({ key: "export-md", label: "导出 Markdown" }), B.push({ key: "export-json", label: "导出 JSON" }), n && B.push({ key: "export-zip", label: "导出 ZIP" }), B.push({ type: "divider" }), B.push({ key: "clear", label: "取消选择", disabled: e === 0 }), B;
  }, [a, n, e]), Jt = lt(({ key: B }) => {
    switch (B) {
      case "tree":
        It();
        break;
      case "list":
        z(!0);
        break;
      case "export-md":
        zt();
        break;
      case "export-json":
        dt();
        break;
      case "export-zip":
        Bt();
        break;
      case "clear":
        W();
        break;
    }
  }, [It, zt, dt, Bt, W]), ee = {
    transform: `translate(calc(-50% + ${bt.position.x}px), ${bt.position.y}px)`,
    width: bt.size.width ?? void 0,
    height: bt.size.height ?? void 0
  }, Wt = {
    position: "fixed",
    left: `calc(50% + ${kt.position.x}px)`,
    top: `calc(50% + ${kt.position.y}px)`,
    transform: "translate(-50%, -50%)",
    height: kt.size.height ?? void 0
  }, Kt = ["nw", "n", "ne", "w", "e", "sw", "s", "se"];
  return t ? gr(
    /* @__PURE__ */ G.jsxs("div", { className: "review-overlay", children: [
      /* @__PURE__ */ G.jsxs(
        "div",
        {
          ref: Et,
          className: `review-toolbar ${bt.isDragging ? "is-dragging" : ""}`,
          style: ee,
          onClick: (B) => B.stopPropagation(),
          onMouseDown: bt.onDragStart,
          children: [
            /* @__PURE__ */ G.jsxs("div", { className: "toolbar-left", children: [
              /* @__PURE__ */ G.jsx("span", { className: "review-toolbar-title", title: "按住此处可拖动", children: "页面评审模式" }),
              /* @__PURE__ */ G.jsxs(
                ve.Group,
                {
                  size: "small",
                  value: U,
                  onChange: (B) => j(B.target.value),
                  optionType: "button",
                  buttonStyle: "solid",
                  children: [
                    /* @__PURE__ */ G.jsx(ve.Button, { value: "element", children: "选择元素" }),
                    /* @__PURE__ */ G.jsx(ve.Button, { value: "viewport", children: "框定视图" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ G.jsxs("div", { className: "toolbar-right", children: [
              /* @__PURE__ */ G.jsx(wr, { count: e, size: "small", offset: [10, -2], children: /* @__PURE__ */ G.jsx(
                Mt,
                {
                  type: "primary",
                  size: "small",
                  disabled: e === 0,
                  onClick: I,
                  children: "评审"
                }
              ) }),
              /* @__PURE__ */ G.jsx(Mt, { type: "primary", danger: !0, size: "small", onClick: N, children: "退出评审" }),
              /* @__PURE__ */ G.jsx(
                yr,
                {
                  menu: { items: te, onClick: Jt },
                  trigger: ["click"],
                  placement: "bottomRight",
                  getPopupContainer: (B) => B.parentNode,
                  children: /* @__PURE__ */ G.jsx(Mt, { size: "small", children: "更多" })
                }
              )
            ] }),
            /* @__PURE__ */ G.jsx("div", { className: "toolbar-resize-handle", onMouseDown: bt.onResizeStart })
          ]
        }
      ),
      nt.hoveredRect && U === "element" && !ht.isResizing && !ht.dragRect && /* @__PURE__ */ G.jsx("div", { className: "highlight-box hover-box", style: Re(nt.hoveredRect), children: /* @__PURE__ */ G.jsx("span", { className: "highlight-label", children: nt.hoveredTag }) }),
      nt.selectedElements.map((B, et) => /* @__PURE__ */ G.jsx(
        "div",
        {
          className: "highlight-box selected-box",
          style: Re(B.rect),
          onClick: (ct) => xt(B, ct),
          children: /* @__PURE__ */ G.jsxs("span", { className: "highlight-label", children: [
            B.tag,
            /* @__PURE__ */ G.jsx("i", { className: "remove-icon", onClick: (ct) => {
              ct.stopPropagation(), nt.removeSelectedElement(B);
            }, children: "×" })
          ] })
        },
        "el-" + et
      )),
      it && /* @__PURE__ */ G.jsx("div", { className: "highlight-box tree-hover-box", style: Re(ht.toViewportRect(it)) }),
      ht.selectedBoxes.map((B) => /* @__PURE__ */ G.jsxs(
        "div",
        {
          className: `drag-rect selected-box ${ht.resizingBoxId === B.id ? "is-resizing" : ""}`,
          style: Ke(ht.toViewportRect(B.rect)),
          onMouseDown: (et) => Xt(B, et),
          children: [
            /* @__PURE__ */ G.jsxs("span", { className: "box-label", onMouseDown: (et) => et.stopPropagation(), children: [
              "框选 ",
              B.index + 1,
              /* @__PURE__ */ G.jsx("i", { className: "remove-icon", onClick: (et) => {
                et.stopPropagation(), ht.removeBox(B);
              }, children: "×" })
            ] }),
            Kt.map((et) => /* @__PURE__ */ G.jsx(
              "div",
              {
                className: `resize-handle handle-${et}`,
                style: Wn(et, ht.toViewportRect(B.rect)),
                onMouseDown: (ct) => ht.startResize(B, et, ct)
              },
              et
            ))
          ]
        },
        B.id
      )),
      ht.dragRect && /* @__PURE__ */ G.jsx("div", { className: "drag-rect preview-box", style: Ke(ht.dragRect) }),
      /* @__PURE__ */ G.jsxs(
        Ie,
        {
          title: /* @__PURE__ */ G.jsx("div", { className: "review-modal-header", children: "添加评审意见" }),
          open: $,
          onCancel: () => rt(!1),
          footer: [
            /* @__PURE__ */ G.jsx(Mt, { onClick: () => rt(!1), children: "取消" }, "cancel"),
            /* @__PURE__ */ G.jsx(Mt, { type: "primary", disabled: !L, onClick: J, children: "保存评审" }, "save")
          ],
          width: kt.size.width,
          style: Wt,
          className: "review-modal",
          wrapClassName: "review-modal-wrap",
          zIndex: 10002,
          getContainer: !1,
          closeIcon: /* @__PURE__ */ G.jsx("span", { className: "review-modal-close", children: "×" }),
          modalRender: (B) => /* @__PURE__ */ G.jsx("div", { onMouseDown: kt.onDragStart, children: B }),
          children: [
            /* @__PURE__ */ G.jsxs("div", { className: "form-row", children: [
              /* @__PURE__ */ G.jsx("label", { children: "评审目标" }),
              /* @__PURE__ */ G.jsx("div", { className: "review-targets-summary", children: H.targets.map((B, et) => {
                var ct, St, At, Gt;
                return /* @__PURE__ */ G.jsx(
                  ce,
                  {
                    className: "target-tag",
                    title: B.type === "element" ? B.selector || "元素" : `框选 ${(ct = B.viewportRect) == null ? void 0 : ct.x},${(St = B.viewportRect) == null ? void 0 : St.y}`,
                    children: B.type === "element" ? B.elementText || B.selector || "元素" : `框选 ${(At = B.viewportRect) == null ? void 0 : At.x},${(Gt = B.viewportRect) == null ? void 0 : Gt.y}`
                  },
                  et
                );
              }) })
            ] }),
            /* @__PURE__ */ G.jsxs("div", { className: "form-row", children: [
              /* @__PURE__ */ G.jsx("label", { children: "窗口尺寸" }),
              /* @__PURE__ */ G.jsxs("span", { className: "text-muted", children: [
                (Ft = H.viewport) == null ? void 0 : Ft.width,
                " × ",
                (Zt = H.viewport) == null ? void 0 : Zt.height
              ] })
            ] }),
            /* @__PURE__ */ G.jsxs("div", { className: "form-row", children: [
              /* @__PURE__ */ G.jsx("label", { children: "滚动位置" }),
              /* @__PURE__ */ G.jsxs("span", { className: "text-muted", children: [
                "x=",
                (le = H.scroll) == null ? void 0 : le.x,
                ", y=",
                (se = H.scroll) == null ? void 0 : se.y
              ] })
            ] }),
            /* @__PURE__ */ G.jsxs("div", { className: "form-row", children: [
              /* @__PURE__ */ G.jsx("label", { children: "截图" }),
              /* @__PURE__ */ G.jsx(
                vr.Group,
                {
                  options: [
                    { label: "选中目标", value: Ht.TARGETS },
                    { label: "当前视口", value: Ht.VIEWPORT },
                    { label: "完整页面", value: Ht.FULL_PAGE }
                  ],
                  value: at,
                  onChange: (B) => D(B)
                }
              )
            ] }),
            /* @__PURE__ */ G.jsxs("div", { className: "form-row", children: [
              /* @__PURE__ */ G.jsxs("label", { children: [
                "标题 ",
                /* @__PURE__ */ G.jsx("span", { className: "required", children: "*" })
              ] }),
              /* @__PURE__ */ G.jsx(
                je,
                {
                  value: H.title,
                  onChange: (B) => q({ ...H, title: B.target.value }),
                  placeholder: "例如：按钮样式不统一"
                }
              )
            ] }),
            /* @__PURE__ */ G.jsxs("div", { className: "form-row", children: [
              /* @__PURE__ */ G.jsxs("label", { children: [
                "严重等级 ",
                /* @__PURE__ */ G.jsx("span", { className: "required", children: "*" })
              ] }),
              /* @__PURE__ */ G.jsx(
                _r,
                {
                  value: H.severity,
                  onChange: (B) => q({ ...H, severity: B }),
                  style: { width: 160 },
                  options: [
                    { value: "low", label: "低" },
                    { value: "medium", label: "中" },
                    { value: "high", label: "高" },
                    { value: "critical", label: "严重" }
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ G.jsxs("div", { className: "form-row", children: [
              /* @__PURE__ */ G.jsxs("label", { children: [
                "评审建议 ",
                /* @__PURE__ */ G.jsx("span", { className: "required", children: "*" })
              ] }),
              /* @__PURE__ */ G.jsx(
                je.TextArea,
                {
                  rows: 4,
                  value: H.suggestion,
                  onChange: (B) => q({ ...H, suggestion: B.target.value }),
                  placeholder: "描述问题现象、影响和改进建议"
                }
              )
            ] }),
            /* @__PURE__ */ G.jsx("div", { className: "modal-resize-handle", onMouseDown: kt.onResizeStart })
          ]
        }
      ),
      /* @__PURE__ */ G.jsx(
        De,
        {
          title: "组件树检查器",
          open: s,
          onClose: () => F(!1),
          placement: "right",
          width: 480,
          resizable: !0,
          zIndex: 10003,
          getContainer: !1,
          className: "review-drawer",
          children: st ? /* @__PURE__ */ G.jsxs("div", { className: "tree-panel", children: [
            st.framework && st.framework.length > 0 && /* @__PURE__ */ G.jsxs("div", { className: "tree-section", children: [
              /* @__PURE__ */ G.jsx("h4", { children: "框架组件树" }),
              /* @__PURE__ */ G.jsx("div", { className: "tree-list", children: st.framework.map((B, et) => /* @__PURE__ */ G.jsx(
                "div",
                {
                  className: "tree-node",
                  onMouseEnter: () => Ot(B),
                  onMouseLeave: () => Z(null),
                  onClick: () => $t(B),
                  children: /* @__PURE__ */ G.jsx("span", { className: "node-name", children: B.componentName })
                },
                "fw-" + et
              )) })
            ] }),
            /* @__PURE__ */ G.jsxs("div", { className: "tree-section", children: [
              /* @__PURE__ */ G.jsx("h4", { children: "DOM 树" }),
              /* @__PURE__ */ G.jsx("div", { className: "tree-list", children: st.dom.map((B, et) => {
                var ct;
                return /* @__PURE__ */ G.jsxs(
                  "div",
                  {
                    className: "tree-node",
                    style: { paddingLeft: et * 12 },
                    onMouseEnter: () => Ot(B),
                    onMouseLeave: () => Z(null),
                    onClick: () => $t(B),
                    children: [
                      /* @__PURE__ */ G.jsx("span", { className: "node-tag", children: B.tag }),
                      B.id && /* @__PURE__ */ G.jsxs("span", { className: "node-id", children: [
                        "#",
                        B.id
                      ] }),
                      ((ct = B.aria) == null ? void 0 : ct.role) && /* @__PURE__ */ G.jsxs("span", { className: "node-aria", children: [
                        "role=",
                        B.aria.role
                      ] }),
                      B.testId && /* @__PURE__ */ G.jsxs("span", { className: "node-testid", children: [
                        "testid=",
                        B.testId
                      ] })
                    ]
                  },
                  "dom-" + et
                );
              }) })
            ] })
          ] }) : /* @__PURE__ */ G.jsx(Ne, { description: "先选择一个元素以查看组件树" })
        }
      ),
      /* @__PURE__ */ G.jsx(
        De,
        {
          title: "当前页面评审意见",
          open: S,
          onClose: () => z(!1),
          placement: "right",
          width: 560,
          resizable: !0,
          zIndex: 10003,
          getContainer: !1,
          className: "review-drawer",
          extra: /* @__PURE__ */ G.jsxs("div", { style: { display: "flex", gap: 8 }, children: [
            /* @__PURE__ */ G.jsx(Mt, { type: "primary", size: "small", onClick: zt, children: "导出 Markdown" }),
            /* @__PURE__ */ G.jsx(Mt, { size: "small", onClick: dt, children: "导出 JSON" }),
            n && /* @__PURE__ */ G.jsx(Mt, { size: "small", onClick: Bt, children: "导出 ZIP" }),
            /* @__PURE__ */ G.jsx(Mt, { danger: !0, size: "small", onClick: gt, children: "清空本页" })
          ] }),
          children: O.length === 0 ? /* @__PURE__ */ G.jsx(Ne, { description: "暂无评审意见" }) : /* @__PURE__ */ G.jsx("div", { className: "review-list", children: O.map((B) => {
            var et;
            return /* @__PURE__ */ G.jsxs(
              br,
              {
                size: "small",
                title: B.title,
                extra: /* @__PURE__ */ G.jsxs("div", { style: { display: "flex", gap: 6 }, children: [
                  /* @__PURE__ */ G.jsx(ce, { color: Hn(B.severity), children: Zn(B.severity) }),
                  /* @__PURE__ */ G.jsxs(ce, { children: [
                    ((et = B.targets) == null ? void 0 : et.length) || 1,
                    " 个目标"
                  ] }),
                  Vn(B) && /* @__PURE__ */ G.jsx(ce, { color: "success", children: "树" })
                ] }),
                children: [
                  /* @__PURE__ */ G.jsx("p", { className: "review-item-target", children: Yn(B.targets) }),
                  /* @__PURE__ */ G.jsx("p", { className: "review-item-suggestion", children: B.suggestion }),
                  /* @__PURE__ */ G.jsxs("div", { className: "review-item-meta", children: [
                    /* @__PURE__ */ G.jsx("span", { className: "text-muted", children: new Date(B.createdAt).toLocaleString() }),
                    /* @__PURE__ */ G.jsxs("div", { className: "review-item-actions", children: [
                      B.status !== "resolved" && /* @__PURE__ */ G.jsx(Mt, { type: "link", size: "small", onClick: () => K(B.id), children: "标记解决" }),
                      /* @__PURE__ */ G.jsx(Mt, { type: "link", danger: !0, size: "small", onClick: () => ot(B.id), children: "删除" })
                    ] })
                  ] })
                ]
              },
              B.id
            );
          }) })
        }
      ),
      /* @__PURE__ */ G.jsx(
        Ie,
        {
          title: A == null ? void 0 : A.title,
          open: !!A,
          onOk: () => {
            A == null || A.onConfirm(), tt(null);
          },
          onCancel: () => tt(null),
          zIndex: 10004,
          getContainer: !1,
          width: 360,
          children: /* @__PURE__ */ G.jsx("p", { children: A == null ? void 0 : A.message })
        }
      )
    ] }),
    document.body
  ) : null;
}
function Se(t) {
  return t.ctrlKey || t.metaKey;
}
function Re(t) {
  return t ? {
    left: t.x + "px",
    top: t.y + "px",
    width: t.width + "px",
    height: t.height + "px"
  } : {};
}
function Ke(t) {
  return t ? {
    left: t.x + "px",
    top: t.y + "px",
    width: t.width + "px",
    height: t.height + "px"
  } : {};
}
function Wn(t, l) {
  const f = {};
  return t.includes("n") && (f.top = -8 / 2 + "px"), t.includes("s") && (f.bottom = -8 / 2 + "px"), t.includes("w") && (f.left = -8 / 2 + "px"), t.includes("e") && (f.right = -8 / 2 + "px"), (t === "n" || t === "s") && (f.left = l.width / 2 - 8 / 2 + "px"), (t === "w" || t === "e") && (f.top = l.height / 2 - 8 / 2 + "px"), f.width = "8px", f.height = "8px", f;
}
function Zn(t) {
  return { low: "低", medium: "中", high: "高", critical: "严重" }[t] || t;
}
function Hn(t) {
  return { low: "default", medium: "warning", high: "error", critical: "error" }[t] || "default";
}
function Vn(t) {
  var l;
  return (l = t.targets) == null ? void 0 : l.some((r) => {
    var f, c;
    return (c = (f = r.componentTree) == null ? void 0 : f.dom) == null ? void 0 : c.length;
  });
}
function Yn(t) {
  if (!t || t.length === 0) return "无目标";
  const l = t[0], r = l.type === "element" ? l.elementText || l.selector || "元素" : `框选 x=${l.viewportRect.x}, y=${l.viewportRect.y}`;
  return t.length === 1 ? r : `${r} 等 ${t.length} 个目标`;
}
export {
  qn as ReviewTool,
  Ht as SCREENSHOT_TYPES,
  zn as captureBox,
  lr as captureElement,
  Tn as captureFullPage,
  Cn as captureViewport,
  qn as default,
  ke as generateScreenshotFilename,
  In as getAriaInfo,
  Xe as getComponentTree,
  cr as getCssSelector,
  me as getNodeInfo,
  Nn as getTestId,
  Pn as getXPath,
  Me as useDragResize,
  Or as useElementSelection,
  Cr as usePageReview,
  Ir as useViewportBoxing
};
