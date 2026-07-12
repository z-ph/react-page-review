import We, { useState as Ct, useCallback as dt, useMemo as ye, useRef as ue, useEffect as Ae } from "react";
import { createPortal as ir } from "react-dom";
var fe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ar(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ee = { exports: {} }, ee = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var je;
function sr() {
  if (je) return ee;
  je = 1;
  var e = We, u = Symbol.for("react.element"), n = Symbol.for("react.fragment"), d = Object.prototype.hasOwnProperty, f = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, r = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(i, l, _) {
    var k, b = {}, x = null, h = null;
    _ !== void 0 && (x = "" + _), l.key !== void 0 && (x = "" + l.key), l.ref !== void 0 && (h = l.ref);
    for (k in l) d.call(l, k) && !r.hasOwnProperty(k) && (b[k] = l[k]);
    if (i && i.defaultProps) for (k in l = i.defaultProps, l) b[k] === void 0 && (b[k] = l[k]);
    return { $$typeof: u, type: i, key: x, ref: h, props: b, _owner: f.current };
  }
  return ee.Fragment = n, ee.jsx = s, ee.jsxs = s, ee;
}
var re = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ne;
function or() {
  return Ne || (Ne = 1, process.env.NODE_ENV !== "production" && function() {
    var e = We, u = Symbol.for("react.element"), n = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), y = Symbol.iterator, c = "@@iterator";
    function g(o) {
      if (o === null || typeof o != "object")
        return null;
      var A = y && o[y] || o[c];
      return typeof A == "function" ? A : null;
    }
    var p = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(o) {
      {
        for (var A = arguments.length, B = new Array(A > 1 ? A - 1 : 0), tt = 1; tt < A; tt++)
          B[tt - 1] = arguments[tt];
        E("error", o, B);
      }
    }
    function E(o, A, B) {
      {
        var tt = p.ReactDebugCurrentFrame, st = tt.getStackAddendum();
        st !== "" && (A += "%s", B = B.concat([st]));
        var pt = B.map(function(ft) {
          return String(ft);
        });
        pt.unshift("Warning: " + A), Function.prototype.apply.call(console[o], console, pt);
      }
    }
    var T = !1, R = !1, L = !1, P = !1, W = !1, z;
    z = Symbol.for("react.module.reference");
    function Z(o) {
      return !!(typeof o == "string" || typeof o == "function" || o === d || o === r || W || o === f || o === _ || o === k || P || o === h || T || R || L || typeof o == "object" && o !== null && (o.$$typeof === x || o.$$typeof === b || o.$$typeof === s || o.$$typeof === i || o.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      o.$$typeof === z || o.getModuleId !== void 0));
    }
    function nt(o, A, B) {
      var tt = o.displayName;
      if (tt)
        return tt;
      var st = A.displayName || A.name || "";
      return st !== "" ? B + "(" + st + ")" : B;
    }
    function S(o) {
      return o.displayName || "Context";
    }
    function D(o) {
      if (o == null)
        return null;
      if (typeof o.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof o == "function")
        return o.displayName || o.name || null;
      if (typeof o == "string")
        return o;
      switch (o) {
        case d:
          return "Fragment";
        case n:
          return "Portal";
        case r:
          return "Profiler";
        case f:
          return "StrictMode";
        case _:
          return "Suspense";
        case k:
          return "SuspenseList";
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case i:
            var A = o;
            return S(A) + ".Consumer";
          case s:
            var B = o;
            return S(B._context) + ".Provider";
          case l:
            return nt(o, o.render, "ForwardRef");
          case b:
            var tt = o.displayName || null;
            return tt !== null ? tt : D(o.type) || "Memo";
          case x: {
            var st = o, pt = st._payload, ft = st._init;
            try {
              return D(ft(pt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var a = Object.assign, U = 0, it, V, ot, Y, Q, N, j;
    function et() {
    }
    et.__reactDisabledLog = !0;
    function q() {
      {
        if (U === 0) {
          it = console.log, V = console.info, ot = console.warn, Y = console.error, Q = console.group, N = console.groupCollapsed, j = console.groupEnd;
          var o = {
            configurable: !0,
            enumerable: !0,
            value: et,
            writable: !0
          };
          Object.defineProperties(console, {
            info: o,
            log: o,
            warn: o,
            error: o,
            group: o,
            groupCollapsed: o,
            groupEnd: o
          });
        }
        U++;
      }
    }
    function K() {
      {
        if (U--, U === 0) {
          var o = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: a({}, o, {
              value: it
            }),
            info: a({}, o, {
              value: V
            }),
            warn: a({}, o, {
              value: ot
            }),
            error: a({}, o, {
              value: Y
            }),
            group: a({}, o, {
              value: Q
            }),
            groupCollapsed: a({}, o, {
              value: N
            }),
            groupEnd: a({}, o, {
              value: j
            })
          });
        }
        U < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var gt = p.ReactCurrentDispatcher, wt;
    function at(o, A, B) {
      {
        if (wt === void 0)
          try {
            throw Error();
          } catch (st) {
            var tt = st.stack.trim().match(/\n( *(at )?)/);
            wt = tt && tt[1] || "";
          }
        return `
` + wt + o;
      }
    }
    var lt = !1, mt;
    {
      var yt = typeof WeakMap == "function" ? WeakMap : Map;
      mt = new yt();
    }
    function _t(o, A) {
      if (!o || lt)
        return "";
      {
        var B = mt.get(o);
        if (B !== void 0)
          return B;
      }
      var tt;
      lt = !0;
      var st = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var pt;
      pt = gt.current, gt.current = null, q();
      try {
        if (A) {
          var ft = function() {
            throw Error();
          };
          if (Object.defineProperty(ft.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ft, []);
            } catch (Ot) {
              tt = Ot;
            }
            Reflect.construct(o, [], ft);
          } else {
            try {
              ft.call();
            } catch (Ot) {
              tt = Ot;
            }
            o.call(ft.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ot) {
            tt = Ot;
          }
          o();
        }
      } catch (Ot) {
        if (Ot && tt && typeof Ot.stack == "string") {
          for (var ct = Ot.stack.split(`
`), St = tt.stack.split(`
`), bt = ct.length - 1, xt = St.length - 1; bt >= 1 && xt >= 0 && ct[bt] !== St[xt]; )
            xt--;
          for (; bt >= 1 && xt >= 0; bt--, xt--)
            if (ct[bt] !== St[xt]) {
              if (bt !== 1 || xt !== 1)
                do
                  if (bt--, xt--, xt < 0 || ct[bt] !== St[xt]) {
                    var zt = `
` + ct[bt].replace(" at new ", " at ");
                    return o.displayName && zt.includes("<anonymous>") && (zt = zt.replace("<anonymous>", o.displayName)), typeof o == "function" && mt.set(o, zt), zt;
                  }
                while (bt >= 1 && xt >= 0);
              break;
            }
        }
      } finally {
        lt = !1, gt.current = pt, K(), Error.prepareStackTrace = st;
      }
      var Gt = o ? o.displayName || o.name : "", Vt = Gt ? at(Gt) : "";
      return typeof o == "function" && mt.set(o, Vt), Vt;
    }
    function kt(o, A, B) {
      return _t(o, !1);
    }
    function t(o) {
      var A = o.prototype;
      return !!(A && A.isReactComponent);
    }
    function F(o, A, B) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return _t(o, t(o));
      if (typeof o == "string")
        return at(o);
      switch (o) {
        case _:
          return at("Suspense");
        case k:
          return at("SuspenseList");
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case l:
            return kt(o.render);
          case b:
            return F(o.type, A, B);
          case x: {
            var tt = o, st = tt._payload, pt = tt._init;
            try {
              return F(pt(st), A, B);
            } catch {
            }
          }
        }
      return "";
    }
    var I = Object.prototype.hasOwnProperty, v = {}, m = p.ReactDebugCurrentFrame;
    function C(o) {
      if (o) {
        var A = o._owner, B = F(o.type, o._source, A ? A.type : null);
        m.setExtraStackFrame(B);
      } else
        m.setExtraStackFrame(null);
    }
    function $(o, A, B, tt, st) {
      {
        var pt = Function.call.bind(I);
        for (var ft in o)
          if (pt(o, ft)) {
            var ct = void 0;
            try {
              if (typeof o[ft] != "function") {
                var St = Error((tt || "React class") + ": " + B + " type `" + ft + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[ft] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw St.name = "Invariant Violation", St;
              }
              ct = o[ft](A, ft, tt, B, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (bt) {
              ct = bt;
            }
            ct && !(ct instanceof Error) && (C(st), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", tt || "React class", B, ft, typeof ct), C(null)), ct instanceof Error && !(ct.message in v) && (v[ct.message] = !0, C(st), w("Failed %s type: %s", B, ct.message), C(null));
          }
      }
    }
    var H = Array.isArray;
    function O(o) {
      return H(o);
    }
    function G(o) {
      {
        var A = typeof Symbol == "function" && Symbol.toStringTag, B = A && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return B;
      }
    }
    function J(o) {
      try {
        return X(o), !1;
      } catch {
        return !0;
      }
    }
    function X(o) {
      return "" + o;
    }
    function rt(o) {
      if (J(o))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", G(o)), X(o);
    }
    var ht = p.ReactCurrentOwner, ut = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Et, Dt;
    function Rt(o) {
      if (I.call(o, "ref")) {
        var A = Object.getOwnPropertyDescriptor(o, "ref").get;
        if (A && A.isReactWarning)
          return !1;
      }
      return o.ref !== void 0;
    }
    function Ut(o) {
      if (I.call(o, "key")) {
        var A = Object.getOwnPropertyDescriptor(o, "key").get;
        if (A && A.isReactWarning)
          return !1;
      }
      return o.key !== void 0;
    }
    function vt(o, A) {
      typeof o.ref == "string" && ht.current;
    }
    function Ft(o, A) {
      {
        var B = function() {
          Et || (Et = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", A));
        };
        B.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: B,
          configurable: !0
        });
      }
    }
    function $t(o, A) {
      {
        var B = function() {
          Dt || (Dt = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", A));
        };
        B.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: B,
          configurable: !0
        });
      }
    }
    var Tt = function(o, A, B, tt, st, pt, ft) {
      var ct = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: u,
        // Built-in properties that belong on the element
        type: o,
        key: A,
        ref: B,
        props: ft,
        // Record the component responsible for creating this element.
        _owner: pt
      };
      return ct._store = {}, Object.defineProperty(ct._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ct, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: tt
      }), Object.defineProperty(ct, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: st
      }), Object.freeze && (Object.freeze(ct.props), Object.freeze(ct)), ct;
    };
    function Ht(o, A, B, tt, st) {
      {
        var pt, ft = {}, ct = null, St = null;
        B !== void 0 && (rt(B), ct = "" + B), Ut(A) && (rt(A.key), ct = "" + A.key), Rt(A) && (St = A.ref, vt(A, st));
        for (pt in A)
          I.call(A, pt) && !ut.hasOwnProperty(pt) && (ft[pt] = A[pt]);
        if (o && o.defaultProps) {
          var bt = o.defaultProps;
          for (pt in bt)
            ft[pt] === void 0 && (ft[pt] = bt[pt]);
        }
        if (ct || St) {
          var xt = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          ct && Ft(ft, xt), St && $t(ft, xt);
        }
        return Tt(o, ct, St, st, tt, ht.current, ft);
      }
    }
    var Mt = p.ReactCurrentOwner, Wt = p.ReactDebugCurrentFrame;
    function It(o) {
      if (o) {
        var A = o._owner, B = F(o.type, o._source, A ? A.type : null);
        Wt.setExtraStackFrame(B);
      } else
        Wt.setExtraStackFrame(null);
    }
    var Bt;
    Bt = !1;
    function jt(o) {
      return typeof o == "object" && o !== null && o.$$typeof === u;
    }
    function Pt() {
      {
        if (Mt.current) {
          var o = D(Mt.current.type);
          if (o)
            return `

Check the render method of \`` + o + "`.";
        }
        return "";
      }
    }
    function ve(o) {
      return "";
    }
    var Yt = {};
    function qt(o) {
      {
        var A = Pt();
        if (!A) {
          var B = typeof o == "string" ? o : o.displayName || o.name;
          B && (A = `

Check the top-level render call using <` + B + ">.");
        }
        return A;
      }
    }
    function ne(o, A) {
      {
        if (!o._store || o._store.validated || o.key != null)
          return;
        o._store.validated = !0;
        var B = qt(A);
        if (Yt[B])
          return;
        Yt[B] = !0;
        var tt = "";
        o && o._owner && o._owner !== Mt.current && (tt = " It was passed a child from " + D(o._owner.type) + "."), It(o), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', B, tt), It(null);
      }
    }
    function Jt(o, A) {
      {
        if (typeof o != "object")
          return;
        if (O(o))
          for (var B = 0; B < o.length; B++) {
            var tt = o[B];
            jt(tt) && ne(tt, A);
          }
        else if (jt(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var st = g(o);
          if (typeof st == "function" && st !== o.entries)
            for (var pt = st.call(o), ft; !(ft = pt.next()).done; )
              jt(ft.value) && ne(ft.value, A);
        }
      }
    }
    function ie(o) {
      {
        var A = o.type;
        if (A == null || typeof A == "string")
          return;
        var B;
        if (typeof A == "function")
          B = A.propTypes;
        else if (typeof A == "object" && (A.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        A.$$typeof === b))
          B = A.propTypes;
        else
          return;
        if (B) {
          var tt = D(A);
          $(B, o.props, "prop", tt, o);
        } else if (A.PropTypes !== void 0 && !Bt) {
          Bt = !0;
          var st = D(A);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", st || "Unknown");
        }
        typeof A.getDefaultProps == "function" && !A.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ae(o) {
      {
        for (var A = Object.keys(o.props), B = 0; B < A.length; B++) {
          var tt = A[B];
          if (tt !== "children" && tt !== "key") {
            It(o), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", tt), It(null);
            break;
          }
        }
        o.ref !== null && (It(o), w("Invalid attribute `ref` supplied to `React.Fragment`."), It(null));
      }
    }
    var Qt = {};
    function te(o, A, B, tt, st, pt) {
      {
        var ft = Z(o);
        if (!ft) {
          var ct = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (ct += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var St = ve();
          St ? ct += St : ct += Pt();
          var bt;
          o === null ? bt = "null" : O(o) ? bt = "array" : o !== void 0 && o.$$typeof === u ? (bt = "<" + (D(o.type) || "Unknown") + " />", ct = " Did you accidentally export a JSX literal instead of a component?") : bt = typeof o, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", bt, ct);
        }
        var xt = Ht(o, A, B, st, pt);
        if (xt == null)
          return xt;
        if (ft) {
          var zt = A.children;
          if (zt !== void 0)
            if (tt)
              if (O(zt)) {
                for (var Gt = 0; Gt < zt.length; Gt++)
                  Jt(zt[Gt], o);
                Object.freeze && Object.freeze(zt);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Jt(zt, o);
        }
        if (I.call(A, "key")) {
          var Vt = D(o), Ot = Object.keys(A).filter(function(nr) {
            return nr !== "key";
          }), we = Ot.length > 0 ? "{key: someKey, " + Ot.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Qt[Vt + we]) {
            var rr = Ot.length > 0 ? "{" + Ot.join(": ..., ") + ": ...}" : "{}";
            w(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, we, Vt, rr, Vt), Qt[Vt + we] = !0;
          }
        }
        return o === d ? ae(xt) : ie(xt), xt;
      }
    }
    function se(o, A, B) {
      return te(o, A, B, !0);
    }
    function oe(o, A, B) {
      return te(o, A, B, !1);
    }
    var le = oe, ce = se;
    re.Fragment = d, re.jsx = le, re.jsxs = ce;
  }()), re;
}
process.env.NODE_ENV === "production" ? Ee.exports = sr() : Ee.exports = or();
var M = Ee.exports;
function he(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Ze = { exports: {} };
/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/
(function(e, u) {
  (function(n) {
    e.exports = n();
  })(function() {
    return function n(d, f, r) {
      function s(_, k) {
        if (!f[_]) {
          if (!d[_]) {
            var b = typeof he == "function" && he;
            if (!k && b) return b(_, !0);
            if (i) return i(_, !0);
            var x = new Error("Cannot find module '" + _ + "'");
            throw x.code = "MODULE_NOT_FOUND", x;
          }
          var h = f[_] = { exports: {} };
          d[_][0].call(h.exports, function(y) {
            var c = d[_][1][y];
            return s(c || y);
          }, h, h.exports, n, d, f, r);
        }
        return f[_].exports;
      }
      for (var i = typeof he == "function" && he, l = 0; l < r.length; l++) s(r[l]);
      return s;
    }({ 1: [function(n, d, f) {
      var r = n("./utils"), s = n("./support"), i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      f.encode = function(l) {
        for (var _, k, b, x, h, y, c, g = [], p = 0, w = l.length, E = w, T = r.getTypeOf(l) !== "string"; p < l.length; ) E = w - p, b = T ? (_ = l[p++], k = p < w ? l[p++] : 0, p < w ? l[p++] : 0) : (_ = l.charCodeAt(p++), k = p < w ? l.charCodeAt(p++) : 0, p < w ? l.charCodeAt(p++) : 0), x = _ >> 2, h = (3 & _) << 4 | k >> 4, y = 1 < E ? (15 & k) << 2 | b >> 6 : 64, c = 2 < E ? 63 & b : 64, g.push(i.charAt(x) + i.charAt(h) + i.charAt(y) + i.charAt(c));
        return g.join("");
      }, f.decode = function(l) {
        var _, k, b, x, h, y, c = 0, g = 0, p = "data:";
        if (l.substr(0, p.length) === p) throw new Error("Invalid base64 input, it looks like a data url.");
        var w, E = 3 * (l = l.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
        if (l.charAt(l.length - 1) === i.charAt(64) && E--, l.charAt(l.length - 2) === i.charAt(64) && E--, E % 1 != 0) throw new Error("Invalid base64 input, bad content length.");
        for (w = s.uint8array ? new Uint8Array(0 | E) : new Array(0 | E); c < l.length; ) _ = i.indexOf(l.charAt(c++)) << 2 | (x = i.indexOf(l.charAt(c++))) >> 4, k = (15 & x) << 4 | (h = i.indexOf(l.charAt(c++))) >> 2, b = (3 & h) << 6 | (y = i.indexOf(l.charAt(c++))), w[g++] = _, h !== 64 && (w[g++] = k), y !== 64 && (w[g++] = b);
        return w;
      };
    }, { "./support": 30, "./utils": 32 }], 2: [function(n, d, f) {
      var r = n("./external"), s = n("./stream/DataWorker"), i = n("./stream/Crc32Probe"), l = n("./stream/DataLengthProbe");
      function _(k, b, x, h, y) {
        this.compressedSize = k, this.uncompressedSize = b, this.crc32 = x, this.compression = h, this.compressedContent = y;
      }
      _.prototype = { getContentWorker: function() {
        var k = new s(r.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")), b = this;
        return k.on("end", function() {
          if (this.streamInfo.data_length !== b.uncompressedSize) throw new Error("Bug : uncompressed data size mismatch");
        }), k;
      }, getCompressedWorker: function() {
        return new s(r.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
      } }, _.createWorkerFrom = function(k, b, x) {
        return k.pipe(new i()).pipe(new l("uncompressedSize")).pipe(b.compressWorker(x)).pipe(new l("compressedSize")).withStreamInfo("compression", b);
      }, d.exports = _;
    }, { "./external": 6, "./stream/Crc32Probe": 25, "./stream/DataLengthProbe": 26, "./stream/DataWorker": 27 }], 3: [function(n, d, f) {
      var r = n("./stream/GenericWorker");
      f.STORE = { magic: "\0\0", compressWorker: function() {
        return new r("STORE compression");
      }, uncompressWorker: function() {
        return new r("STORE decompression");
      } }, f.DEFLATE = n("./flate");
    }, { "./flate": 7, "./stream/GenericWorker": 28 }], 4: [function(n, d, f) {
      var r = n("./utils"), s = function() {
        for (var i, l = [], _ = 0; _ < 256; _++) {
          i = _;
          for (var k = 0; k < 8; k++) i = 1 & i ? 3988292384 ^ i >>> 1 : i >>> 1;
          l[_] = i;
        }
        return l;
      }();
      d.exports = function(i, l) {
        return i !== void 0 && i.length ? r.getTypeOf(i) !== "string" ? function(_, k, b, x) {
          var h = s, y = x + b;
          _ ^= -1;
          for (var c = x; c < y; c++) _ = _ >>> 8 ^ h[255 & (_ ^ k[c])];
          return -1 ^ _;
        }(0 | l, i, i.length, 0) : function(_, k, b, x) {
          var h = s, y = x + b;
          _ ^= -1;
          for (var c = x; c < y; c++) _ = _ >>> 8 ^ h[255 & (_ ^ k.charCodeAt(c))];
          return -1 ^ _;
        }(0 | l, i, i.length, 0) : 0;
      };
    }, { "./utils": 32 }], 5: [function(n, d, f) {
      f.base64 = !1, f.binary = !1, f.dir = !1, f.createFolders = !0, f.date = null, f.compression = null, f.compressionOptions = null, f.comment = null, f.unixPermissions = null, f.dosPermissions = null;
    }, {}], 6: [function(n, d, f) {
      var r = null;
      r = typeof Promise < "u" ? Promise : n("lie"), d.exports = { Promise: r };
    }, { lie: 37 }], 7: [function(n, d, f) {
      var r = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Uint32Array < "u", s = n("pako"), i = n("./utils"), l = n("./stream/GenericWorker"), _ = r ? "uint8array" : "array";
      function k(b, x) {
        l.call(this, "FlateWorker/" + b), this._pako = null, this._pakoAction = b, this._pakoOptions = x, this.meta = {};
      }
      f.magic = "\b\0", i.inherits(k, l), k.prototype.processChunk = function(b) {
        this.meta = b.meta, this._pako === null && this._createPako(), this._pako.push(i.transformTo(_, b.data), !1);
      }, k.prototype.flush = function() {
        l.prototype.flush.call(this), this._pako === null && this._createPako(), this._pako.push([], !0);
      }, k.prototype.cleanUp = function() {
        l.prototype.cleanUp.call(this), this._pako = null;
      }, k.prototype._createPako = function() {
        this._pako = new s[this._pakoAction]({ raw: !0, level: this._pakoOptions.level || -1 });
        var b = this;
        this._pako.onData = function(x) {
          b.push({ data: x, meta: b.meta });
        };
      }, f.compressWorker = function(b) {
        return new k("Deflate", b);
      }, f.uncompressWorker = function() {
        return new k("Inflate", {});
      };
    }, { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 }], 8: [function(n, d, f) {
      function r(h, y) {
        var c, g = "";
        for (c = 0; c < y; c++) g += String.fromCharCode(255 & h), h >>>= 8;
        return g;
      }
      function s(h, y, c, g, p, w) {
        var E, T, R = h.file, L = h.compression, P = w !== _.utf8encode, W = i.transformTo("string", w(R.name)), z = i.transformTo("string", _.utf8encode(R.name)), Z = R.comment, nt = i.transformTo("string", w(Z)), S = i.transformTo("string", _.utf8encode(Z)), D = z.length !== R.name.length, a = S.length !== Z.length, U = "", it = "", V = "", ot = R.dir, Y = R.date, Q = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
        y && !c || (Q.crc32 = h.crc32, Q.compressedSize = h.compressedSize, Q.uncompressedSize = h.uncompressedSize);
        var N = 0;
        y && (N |= 8), P || !D && !a || (N |= 2048);
        var j = 0, et = 0;
        ot && (j |= 16), p === "UNIX" ? (et = 798, j |= function(K, gt) {
          var wt = K;
          return K || (wt = gt ? 16893 : 33204), (65535 & wt) << 16;
        }(R.unixPermissions, ot)) : (et = 20, j |= function(K) {
          return 63 & (K || 0);
        }(R.dosPermissions)), E = Y.getUTCHours(), E <<= 6, E |= Y.getUTCMinutes(), E <<= 5, E |= Y.getUTCSeconds() / 2, T = Y.getUTCFullYear() - 1980, T <<= 4, T |= Y.getUTCMonth() + 1, T <<= 5, T |= Y.getUTCDate(), D && (it = r(1, 1) + r(k(W), 4) + z, U += "up" + r(it.length, 2) + it), a && (V = r(1, 1) + r(k(nt), 4) + S, U += "uc" + r(V.length, 2) + V);
        var q = "";
        return q += `
\0`, q += r(N, 2), q += L.magic, q += r(E, 2), q += r(T, 2), q += r(Q.crc32, 4), q += r(Q.compressedSize, 4), q += r(Q.uncompressedSize, 4), q += r(W.length, 2), q += r(U.length, 2), { fileRecord: b.LOCAL_FILE_HEADER + q + W + U, dirRecord: b.CENTRAL_FILE_HEADER + r(et, 2) + q + r(nt.length, 2) + "\0\0\0\0" + r(j, 4) + r(g, 4) + W + U + nt };
      }
      var i = n("../utils"), l = n("../stream/GenericWorker"), _ = n("../utf8"), k = n("../crc32"), b = n("../signature");
      function x(h, y, c, g) {
        l.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = y, this.zipPlatform = c, this.encodeFileName = g, this.streamFiles = h, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
      }
      i.inherits(x, l), x.prototype.push = function(h) {
        var y = h.meta.percent || 0, c = this.entriesCount, g = this._sources.length;
        this.accumulate ? this.contentBuffer.push(h) : (this.bytesWritten += h.data.length, l.prototype.push.call(this, { data: h.data, meta: { currentFile: this.currentFile, percent: c ? (y + 100 * (c - g - 1)) / c : 100 } }));
      }, x.prototype.openedSource = function(h) {
        this.currentSourceOffset = this.bytesWritten, this.currentFile = h.file.name;
        var y = this.streamFiles && !h.file.dir;
        if (y) {
          var c = s(h, y, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
          this.push({ data: c.fileRecord, meta: { percent: 0 } });
        } else this.accumulate = !0;
      }, x.prototype.closedSource = function(h) {
        this.accumulate = !1;
        var y = this.streamFiles && !h.file.dir, c = s(h, y, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
        if (this.dirRecords.push(c.dirRecord), y) this.push({ data: function(g) {
          return b.DATA_DESCRIPTOR + r(g.crc32, 4) + r(g.compressedSize, 4) + r(g.uncompressedSize, 4);
        }(h), meta: { percent: 100 } });
        else for (this.push({ data: c.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length; ) this.push(this.contentBuffer.shift());
        this.currentFile = null;
      }, x.prototype.flush = function() {
        for (var h = this.bytesWritten, y = 0; y < this.dirRecords.length; y++) this.push({ data: this.dirRecords[y], meta: { percent: 100 } });
        var c = this.bytesWritten - h, g = function(p, w, E, T, R) {
          var L = i.transformTo("string", R(T));
          return b.CENTRAL_DIRECTORY_END + "\0\0\0\0" + r(p, 2) + r(p, 2) + r(w, 4) + r(E, 4) + r(L.length, 2) + L;
        }(this.dirRecords.length, c, h, this.zipComment, this.encodeFileName);
        this.push({ data: g, meta: { percent: 100 } });
      }, x.prototype.prepareNextSource = function() {
        this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
      }, x.prototype.registerPrevious = function(h) {
        this._sources.push(h);
        var y = this;
        return h.on("data", function(c) {
          y.processChunk(c);
        }), h.on("end", function() {
          y.closedSource(y.previous.streamInfo), y._sources.length ? y.prepareNextSource() : y.end();
        }), h.on("error", function(c) {
          y.error(c);
        }), this;
      }, x.prototype.resume = function() {
        return !!l.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0));
      }, x.prototype.error = function(h) {
        var y = this._sources;
        if (!l.prototype.error.call(this, h)) return !1;
        for (var c = 0; c < y.length; c++) try {
          y[c].error(h);
        } catch {
        }
        return !0;
      }, x.prototype.lock = function() {
        l.prototype.lock.call(this);
        for (var h = this._sources, y = 0; y < h.length; y++) h[y].lock();
      }, d.exports = x;
    }, { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 }], 9: [function(n, d, f) {
      var r = n("../compressions"), s = n("./ZipFileWorker");
      f.generateWorker = function(i, l, _) {
        var k = new s(l.streamFiles, _, l.platform, l.encodeFileName), b = 0;
        try {
          i.forEach(function(x, h) {
            b++;
            var y = function(w, E) {
              var T = w || E, R = r[T];
              if (!R) throw new Error(T + " is not a valid compression method !");
              return R;
            }(h.options.compression, l.compression), c = h.options.compressionOptions || l.compressionOptions || {}, g = h.dir, p = h.date;
            h._compressWorker(y, c).withStreamInfo("file", { name: x, dir: g, date: p, comment: h.comment || "", unixPermissions: h.unixPermissions, dosPermissions: h.dosPermissions }).pipe(k);
          }), k.entriesCount = b;
        } catch (x) {
          k.error(x);
        }
        return k;
      };
    }, { "../compressions": 3, "./ZipFileWorker": 8 }], 10: [function(n, d, f) {
      function r() {
        if (!(this instanceof r)) return new r();
        if (arguments.length) throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
        this.files = /* @__PURE__ */ Object.create(null), this.comment = null, this.root = "", this.clone = function() {
          var s = new r();
          for (var i in this) typeof this[i] != "function" && (s[i] = this[i]);
          return s;
        };
      }
      (r.prototype = n("./object")).loadAsync = n("./load"), r.support = n("./support"), r.defaults = n("./defaults"), r.version = "3.10.1", r.loadAsync = function(s, i) {
        return new r().loadAsync(s, i);
      }, r.external = n("./external"), d.exports = r;
    }, { "./defaults": 5, "./external": 6, "./load": 11, "./object": 15, "./support": 30 }], 11: [function(n, d, f) {
      var r = n("./utils"), s = n("./external"), i = n("./utf8"), l = n("./zipEntries"), _ = n("./stream/Crc32Probe"), k = n("./nodejsUtils");
      function b(x) {
        return new s.Promise(function(h, y) {
          var c = x.decompressed.getContentWorker().pipe(new _());
          c.on("error", function(g) {
            y(g);
          }).on("end", function() {
            c.streamInfo.crc32 !== x.decompressed.crc32 ? y(new Error("Corrupted zip : CRC32 mismatch")) : h();
          }).resume();
        });
      }
      d.exports = function(x, h) {
        var y = this;
        return h = r.extend(h || {}, { base64: !1, checkCRC32: !1, optimizedBinaryString: !1, createFolders: !1, decodeFileName: i.utf8decode }), k.isNode && k.isStream(x) ? s.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : r.prepareContent("the loaded zip file", x, !0, h.optimizedBinaryString, h.base64).then(function(c) {
          var g = new l(h);
          return g.load(c), g;
        }).then(function(c) {
          var g = [s.Promise.resolve(c)], p = c.files;
          if (h.checkCRC32) for (var w = 0; w < p.length; w++) g.push(b(p[w]));
          return s.Promise.all(g);
        }).then(function(c) {
          for (var g = c.shift(), p = g.files, w = 0; w < p.length; w++) {
            var E = p[w], T = E.fileNameStr, R = r.resolve(E.fileNameStr);
            y.file(R, E.decompressed, { binary: !0, optimizedBinaryString: !0, date: E.date, dir: E.dir, comment: E.fileCommentStr.length ? E.fileCommentStr : null, unixPermissions: E.unixPermissions, dosPermissions: E.dosPermissions, createFolders: h.createFolders }), E.dir || (y.file(R).unsafeOriginalName = T);
          }
          return g.zipComment.length && (y.comment = g.zipComment), y;
        });
      };
    }, { "./external": 6, "./nodejsUtils": 14, "./stream/Crc32Probe": 25, "./utf8": 31, "./utils": 32, "./zipEntries": 33 }], 12: [function(n, d, f) {
      var r = n("../utils"), s = n("../stream/GenericWorker");
      function i(l, _) {
        s.call(this, "Nodejs stream input adapter for " + l), this._upstreamEnded = !1, this._bindStream(_);
      }
      r.inherits(i, s), i.prototype._bindStream = function(l) {
        var _ = this;
        (this._stream = l).pause(), l.on("data", function(k) {
          _.push({ data: k, meta: { percent: 0 } });
        }).on("error", function(k) {
          _.isPaused ? this.generatedError = k : _.error(k);
        }).on("end", function() {
          _.isPaused ? _._upstreamEnded = !0 : _.end();
        });
      }, i.prototype.pause = function() {
        return !!s.prototype.pause.call(this) && (this._stream.pause(), !0);
      }, i.prototype.resume = function() {
        return !!s.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), !0);
      }, d.exports = i;
    }, { "../stream/GenericWorker": 28, "../utils": 32 }], 13: [function(n, d, f) {
      var r = n("readable-stream").Readable;
      function s(i, l, _) {
        r.call(this, l), this._helper = i;
        var k = this;
        i.on("data", function(b, x) {
          k.push(b) || k._helper.pause(), _ && _(x);
        }).on("error", function(b) {
          k.emit("error", b);
        }).on("end", function() {
          k.push(null);
        });
      }
      n("../utils").inherits(s, r), s.prototype._read = function() {
        this._helper.resume();
      }, d.exports = s;
    }, { "../utils": 32, "readable-stream": 16 }], 14: [function(n, d, f) {
      d.exports = { isNode: typeof Buffer < "u", newBufferFrom: function(r, s) {
        if (Buffer.from && Buffer.from !== Uint8Array.from) return Buffer.from(r, s);
        if (typeof r == "number") throw new Error('The "data" argument must not be a number');
        return new Buffer(r, s);
      }, allocBuffer: function(r) {
        if (Buffer.alloc) return Buffer.alloc(r);
        var s = new Buffer(r);
        return s.fill(0), s;
      }, isBuffer: function(r) {
        return Buffer.isBuffer(r);
      }, isStream: function(r) {
        return r && typeof r.on == "function" && typeof r.pause == "function" && typeof r.resume == "function";
      } };
    }, {}], 15: [function(n, d, f) {
      function r(R, L, P) {
        var W, z = i.getTypeOf(L), Z = i.extend(P || {}, k);
        Z.date = Z.date || /* @__PURE__ */ new Date(), Z.compression !== null && (Z.compression = Z.compression.toUpperCase()), typeof Z.unixPermissions == "string" && (Z.unixPermissions = parseInt(Z.unixPermissions, 8)), Z.unixPermissions && 16384 & Z.unixPermissions && (Z.dir = !0), Z.dosPermissions && 16 & Z.dosPermissions && (Z.dir = !0), Z.dir && (R = p(R)), Z.createFolders && (W = g(R)) && w.call(this, W, !0);
        var nt = z === "string" && Z.binary === !1 && Z.base64 === !1;
        P && P.binary !== void 0 || (Z.binary = !nt), (L instanceof b && L.uncompressedSize === 0 || Z.dir || !L || L.length === 0) && (Z.base64 = !1, Z.binary = !0, L = "", Z.compression = "STORE", z = "string");
        var S = null;
        S = L instanceof b || L instanceof l ? L : y.isNode && y.isStream(L) ? new c(R, L) : i.prepareContent(R, L, Z.binary, Z.optimizedBinaryString, Z.base64);
        var D = new x(R, S, Z);
        this.files[R] = D;
      }
      var s = n("./utf8"), i = n("./utils"), l = n("./stream/GenericWorker"), _ = n("./stream/StreamHelper"), k = n("./defaults"), b = n("./compressedObject"), x = n("./zipObject"), h = n("./generate"), y = n("./nodejsUtils"), c = n("./nodejs/NodejsStreamInputAdapter"), g = function(R) {
        R.slice(-1) === "/" && (R = R.substring(0, R.length - 1));
        var L = R.lastIndexOf("/");
        return 0 < L ? R.substring(0, L) : "";
      }, p = function(R) {
        return R.slice(-1) !== "/" && (R += "/"), R;
      }, w = function(R, L) {
        return L = L !== void 0 ? L : k.createFolders, R = p(R), this.files[R] || r.call(this, R, null, { dir: !0, createFolders: L }), this.files[R];
      };
      function E(R) {
        return Object.prototype.toString.call(R) === "[object RegExp]";
      }
      var T = { load: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, forEach: function(R) {
        var L, P, W;
        for (L in this.files) W = this.files[L], (P = L.slice(this.root.length, L.length)) && L.slice(0, this.root.length) === this.root && R(P, W);
      }, filter: function(R) {
        var L = [];
        return this.forEach(function(P, W) {
          R(P, W) && L.push(W);
        }), L;
      }, file: function(R, L, P) {
        if (arguments.length !== 1) return R = this.root + R, r.call(this, R, L, P), this;
        if (E(R)) {
          var W = R;
          return this.filter(function(Z, nt) {
            return !nt.dir && W.test(Z);
          });
        }
        var z = this.files[this.root + R];
        return z && !z.dir ? z : null;
      }, folder: function(R) {
        if (!R) return this;
        if (E(R)) return this.filter(function(z, Z) {
          return Z.dir && R.test(z);
        });
        var L = this.root + R, P = w.call(this, L), W = this.clone();
        return W.root = P.name, W;
      }, remove: function(R) {
        R = this.root + R;
        var L = this.files[R];
        if (L || (R.slice(-1) !== "/" && (R += "/"), L = this.files[R]), L && !L.dir) delete this.files[R];
        else for (var P = this.filter(function(z, Z) {
          return Z.name.slice(0, R.length) === R;
        }), W = 0; W < P.length; W++) delete this.files[P[W].name];
        return this;
      }, generate: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, generateInternalStream: function(R) {
        var L, P = {};
        try {
          if ((P = i.extend(R || {}, { streamFiles: !1, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: s.utf8encode })).type = P.type.toLowerCase(), P.compression = P.compression.toUpperCase(), P.type === "binarystring" && (P.type = "string"), !P.type) throw new Error("No output type specified.");
          i.checkSupport(P.type), P.platform !== "darwin" && P.platform !== "freebsd" && P.platform !== "linux" && P.platform !== "sunos" || (P.platform = "UNIX"), P.platform === "win32" && (P.platform = "DOS");
          var W = P.comment || this.comment || "";
          L = h.generateWorker(this, P, W);
        } catch (z) {
          (L = new l("error")).error(z);
        }
        return new _(L, P.type || "string", P.mimeType);
      }, generateAsync: function(R, L) {
        return this.generateInternalStream(R).accumulate(L);
      }, generateNodeStream: function(R, L) {
        return (R = R || {}).type || (R.type = "nodebuffer"), this.generateInternalStream(R).toNodejsStream(L);
      } };
      d.exports = T;
    }, { "./compressedObject": 2, "./defaults": 5, "./generate": 9, "./nodejs/NodejsStreamInputAdapter": 12, "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31, "./utils": 32, "./zipObject": 35 }], 16: [function(n, d, f) {
      d.exports = n("stream");
    }, { stream: void 0 }], 17: [function(n, d, f) {
      var r = n("./DataReader");
      function s(i) {
        r.call(this, i);
        for (var l = 0; l < this.data.length; l++) i[l] = 255 & i[l];
      }
      n("../utils").inherits(s, r), s.prototype.byteAt = function(i) {
        return this.data[this.zero + i];
      }, s.prototype.lastIndexOfSignature = function(i) {
        for (var l = i.charCodeAt(0), _ = i.charCodeAt(1), k = i.charCodeAt(2), b = i.charCodeAt(3), x = this.length - 4; 0 <= x; --x) if (this.data[x] === l && this.data[x + 1] === _ && this.data[x + 2] === k && this.data[x + 3] === b) return x - this.zero;
        return -1;
      }, s.prototype.readAndCheckSignature = function(i) {
        var l = i.charCodeAt(0), _ = i.charCodeAt(1), k = i.charCodeAt(2), b = i.charCodeAt(3), x = this.readData(4);
        return l === x[0] && _ === x[1] && k === x[2] && b === x[3];
      }, s.prototype.readData = function(i) {
        if (this.checkOffset(i), i === 0) return [];
        var l = this.data.slice(this.zero + this.index, this.zero + this.index + i);
        return this.index += i, l;
      }, d.exports = s;
    }, { "../utils": 32, "./DataReader": 18 }], 18: [function(n, d, f) {
      var r = n("../utils");
      function s(i) {
        this.data = i, this.length = i.length, this.index = 0, this.zero = 0;
      }
      s.prototype = { checkOffset: function(i) {
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
        return r.transformTo("string", this.readData(i));
      }, readData: function() {
      }, lastIndexOfSignature: function() {
      }, readAndCheckSignature: function() {
      }, readDate: function() {
        var i = this.readInt(4);
        return new Date(Date.UTC(1980 + (i >> 25 & 127), (i >> 21 & 15) - 1, i >> 16 & 31, i >> 11 & 31, i >> 5 & 63, (31 & i) << 1));
      } }, d.exports = s;
    }, { "../utils": 32 }], 19: [function(n, d, f) {
      var r = n("./Uint8ArrayReader");
      function s(i) {
        r.call(this, i);
      }
      n("../utils").inherits(s, r), s.prototype.readData = function(i) {
        this.checkOffset(i);
        var l = this.data.slice(this.zero + this.index, this.zero + this.index + i);
        return this.index += i, l;
      }, d.exports = s;
    }, { "../utils": 32, "./Uint8ArrayReader": 21 }], 20: [function(n, d, f) {
      var r = n("./DataReader");
      function s(i) {
        r.call(this, i);
      }
      n("../utils").inherits(s, r), s.prototype.byteAt = function(i) {
        return this.data.charCodeAt(this.zero + i);
      }, s.prototype.lastIndexOfSignature = function(i) {
        return this.data.lastIndexOf(i) - this.zero;
      }, s.prototype.readAndCheckSignature = function(i) {
        return i === this.readData(4);
      }, s.prototype.readData = function(i) {
        this.checkOffset(i);
        var l = this.data.slice(this.zero + this.index, this.zero + this.index + i);
        return this.index += i, l;
      }, d.exports = s;
    }, { "../utils": 32, "./DataReader": 18 }], 21: [function(n, d, f) {
      var r = n("./ArrayReader");
      function s(i) {
        r.call(this, i);
      }
      n("../utils").inherits(s, r), s.prototype.readData = function(i) {
        if (this.checkOffset(i), i === 0) return new Uint8Array(0);
        var l = this.data.subarray(this.zero + this.index, this.zero + this.index + i);
        return this.index += i, l;
      }, d.exports = s;
    }, { "../utils": 32, "./ArrayReader": 17 }], 22: [function(n, d, f) {
      var r = n("../utils"), s = n("../support"), i = n("./ArrayReader"), l = n("./StringReader"), _ = n("./NodeBufferReader"), k = n("./Uint8ArrayReader");
      d.exports = function(b) {
        var x = r.getTypeOf(b);
        return r.checkSupport(x), x !== "string" || s.uint8array ? x === "nodebuffer" ? new _(b) : s.uint8array ? new k(r.transformTo("uint8array", b)) : new i(r.transformTo("array", b)) : new l(b);
      };
    }, { "../support": 30, "../utils": 32, "./ArrayReader": 17, "./NodeBufferReader": 19, "./StringReader": 20, "./Uint8ArrayReader": 21 }], 23: [function(n, d, f) {
      f.LOCAL_FILE_HEADER = "PK", f.CENTRAL_FILE_HEADER = "PK", f.CENTRAL_DIRECTORY_END = "PK", f.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", f.ZIP64_CENTRAL_DIRECTORY_END = "PK", f.DATA_DESCRIPTOR = "PK\x07\b";
    }, {}], 24: [function(n, d, f) {
      var r = n("./GenericWorker"), s = n("../utils");
      function i(l) {
        r.call(this, "ConvertWorker to " + l), this.destType = l;
      }
      s.inherits(i, r), i.prototype.processChunk = function(l) {
        this.push({ data: s.transformTo(this.destType, l.data), meta: l.meta });
      }, d.exports = i;
    }, { "../utils": 32, "./GenericWorker": 28 }], 25: [function(n, d, f) {
      var r = n("./GenericWorker"), s = n("../crc32");
      function i() {
        r.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
      }
      n("../utils").inherits(i, r), i.prototype.processChunk = function(l) {
        this.streamInfo.crc32 = s(l.data, this.streamInfo.crc32 || 0), this.push(l);
      }, d.exports = i;
    }, { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 }], 26: [function(n, d, f) {
      var r = n("../utils"), s = n("./GenericWorker");
      function i(l) {
        s.call(this, "DataLengthProbe for " + l), this.propName = l, this.withStreamInfo(l, 0);
      }
      r.inherits(i, s), i.prototype.processChunk = function(l) {
        if (l) {
          var _ = this.streamInfo[this.propName] || 0;
          this.streamInfo[this.propName] = _ + l.data.length;
        }
        s.prototype.processChunk.call(this, l);
      }, d.exports = i;
    }, { "../utils": 32, "./GenericWorker": 28 }], 27: [function(n, d, f) {
      var r = n("../utils"), s = n("./GenericWorker");
      function i(l) {
        s.call(this, "DataWorker");
        var _ = this;
        this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, l.then(function(k) {
          _.dataIsReady = !0, _.data = k, _.max = k && k.length || 0, _.type = r.getTypeOf(k), _.isPaused || _._tickAndRepeat();
        }, function(k) {
          _.error(k);
        });
      }
      r.inherits(i, s), i.prototype.cleanUp = function() {
        s.prototype.cleanUp.call(this), this.data = null;
      }, i.prototype.resume = function() {
        return !!s.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = !0, r.delay(this._tickAndRepeat, [], this)), !0);
      }, i.prototype._tickAndRepeat = function() {
        this._tickScheduled = !1, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (r.delay(this._tickAndRepeat, [], this), this._tickScheduled = !0));
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
      }, d.exports = i;
    }, { "../utils": 32, "./GenericWorker": 28 }], 28: [function(n, d, f) {
      function r(s) {
        this.name = s || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = !0, this.isFinished = !1, this.isLocked = !1, this._listeners = { data: [], end: [], error: [] }, this.previous = null;
      }
      r.prototype = { push: function(s) {
        this.emit("data", s);
      }, end: function() {
        if (this.isFinished) return !1;
        this.flush();
        try {
          this.emit("end"), this.cleanUp(), this.isFinished = !0;
        } catch (s) {
          this.emit("error", s);
        }
        return !0;
      }, error: function(s) {
        return !this.isFinished && (this.isPaused ? this.generatedError = s : (this.isFinished = !0, this.emit("error", s), this.previous && this.previous.error(s), this.cleanUp()), !0);
      }, on: function(s, i) {
        return this._listeners[s].push(i), this;
      }, cleanUp: function() {
        this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
      }, emit: function(s, i) {
        if (this._listeners[s]) for (var l = 0; l < this._listeners[s].length; l++) this._listeners[s][l].call(this, i);
      }, pipe: function(s) {
        return s.registerPrevious(this);
      }, registerPrevious: function(s) {
        if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
        this.streamInfo = s.streamInfo, this.mergeStreamInfo(), this.previous = s;
        var i = this;
        return s.on("data", function(l) {
          i.processChunk(l);
        }), s.on("end", function() {
          i.end();
        }), s.on("error", function(l) {
          i.error(l);
        }), this;
      }, pause: function() {
        return !this.isPaused && !this.isFinished && (this.isPaused = !0, this.previous && this.previous.pause(), !0);
      }, resume: function() {
        if (!this.isPaused || this.isFinished) return !1;
        var s = this.isPaused = !1;
        return this.generatedError && (this.error(this.generatedError), s = !0), this.previous && this.previous.resume(), !s;
      }, flush: function() {
      }, processChunk: function(s) {
        this.push(s);
      }, withStreamInfo: function(s, i) {
        return this.extraStreamInfo[s] = i, this.mergeStreamInfo(), this;
      }, mergeStreamInfo: function() {
        for (var s in this.extraStreamInfo) Object.prototype.hasOwnProperty.call(this.extraStreamInfo, s) && (this.streamInfo[s] = this.extraStreamInfo[s]);
      }, lock: function() {
        if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
        this.isLocked = !0, this.previous && this.previous.lock();
      }, toString: function() {
        var s = "Worker " + this.name;
        return this.previous ? this.previous + " -> " + s : s;
      } }, d.exports = r;
    }, {}], 29: [function(n, d, f) {
      var r = n("../utils"), s = n("./ConvertWorker"), i = n("./GenericWorker"), l = n("../base64"), _ = n("../support"), k = n("../external"), b = null;
      if (_.nodestream) try {
        b = n("../nodejs/NodejsStreamOutputAdapter");
      } catch {
      }
      function x(y, c) {
        return new k.Promise(function(g, p) {
          var w = [], E = y._internalType, T = y._outputType, R = y._mimeType;
          y.on("data", function(L, P) {
            w.push(L), c && c(P);
          }).on("error", function(L) {
            w = [], p(L);
          }).on("end", function() {
            try {
              var L = function(P, W, z) {
                switch (P) {
                  case "blob":
                    return r.newBlob(r.transformTo("arraybuffer", W), z);
                  case "base64":
                    return l.encode(W);
                  default:
                    return r.transformTo(P, W);
                }
              }(T, function(P, W) {
                var z, Z = 0, nt = null, S = 0;
                for (z = 0; z < W.length; z++) S += W[z].length;
                switch (P) {
                  case "string":
                    return W.join("");
                  case "array":
                    return Array.prototype.concat.apply([], W);
                  case "uint8array":
                    for (nt = new Uint8Array(S), z = 0; z < W.length; z++) nt.set(W[z], Z), Z += W[z].length;
                    return nt;
                  case "nodebuffer":
                    return Buffer.concat(W);
                  default:
                    throw new Error("concat : unsupported type '" + P + "'");
                }
              }(E, w), R);
              g(L);
            } catch (P) {
              p(P);
            }
            w = [];
          }).resume();
        });
      }
      function h(y, c, g) {
        var p = c;
        switch (c) {
          case "blob":
          case "arraybuffer":
            p = "uint8array";
            break;
          case "base64":
            p = "string";
        }
        try {
          this._internalType = p, this._outputType = c, this._mimeType = g, r.checkSupport(p), this._worker = y.pipe(new s(p)), y.lock();
        } catch (w) {
          this._worker = new i("error"), this._worker.error(w);
        }
      }
      h.prototype = { accumulate: function(y) {
        return x(this, y);
      }, on: function(y, c) {
        var g = this;
        return y === "data" ? this._worker.on(y, function(p) {
          c.call(g, p.data, p.meta);
        }) : this._worker.on(y, function() {
          r.delay(c, arguments, g);
        }), this;
      }, resume: function() {
        return r.delay(this._worker.resume, [], this._worker), this;
      }, pause: function() {
        return this._worker.pause(), this;
      }, toNodejsStream: function(y) {
        if (r.checkSupport("nodestream"), this._outputType !== "nodebuffer") throw new Error(this._outputType + " is not supported by this method");
        return new b(this, { objectMode: this._outputType !== "nodebuffer" }, y);
      } }, d.exports = h;
    }, { "../base64": 1, "../external": 6, "../nodejs/NodejsStreamOutputAdapter": 13, "../support": 30, "../utils": 32, "./ConvertWorker": 24, "./GenericWorker": 28 }], 30: [function(n, d, f) {
      if (f.base64 = !0, f.array = !0, f.string = !0, f.arraybuffer = typeof ArrayBuffer < "u" && typeof Uint8Array < "u", f.nodebuffer = typeof Buffer < "u", f.uint8array = typeof Uint8Array < "u", typeof ArrayBuffer > "u") f.blob = !1;
      else {
        var r = new ArrayBuffer(0);
        try {
          f.blob = new Blob([r], { type: "application/zip" }).size === 0;
        } catch {
          try {
            var s = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            s.append(r), f.blob = s.getBlob("application/zip").size === 0;
          } catch {
            f.blob = !1;
          }
        }
      }
      try {
        f.nodestream = !!n("readable-stream").Readable;
      } catch {
        f.nodestream = !1;
      }
    }, { "readable-stream": 16 }], 31: [function(n, d, f) {
      for (var r = n("./utils"), s = n("./support"), i = n("./nodejsUtils"), l = n("./stream/GenericWorker"), _ = new Array(256), k = 0; k < 256; k++) _[k] = 252 <= k ? 6 : 248 <= k ? 5 : 240 <= k ? 4 : 224 <= k ? 3 : 192 <= k ? 2 : 1;
      _[254] = _[254] = 1;
      function b() {
        l.call(this, "utf-8 decode"), this.leftOver = null;
      }
      function x() {
        l.call(this, "utf-8 encode");
      }
      f.utf8encode = function(h) {
        return s.nodebuffer ? i.newBufferFrom(h, "utf-8") : function(y) {
          var c, g, p, w, E, T = y.length, R = 0;
          for (w = 0; w < T; w++) (64512 & (g = y.charCodeAt(w))) == 55296 && w + 1 < T && (64512 & (p = y.charCodeAt(w + 1))) == 56320 && (g = 65536 + (g - 55296 << 10) + (p - 56320), w++), R += g < 128 ? 1 : g < 2048 ? 2 : g < 65536 ? 3 : 4;
          for (c = s.uint8array ? new Uint8Array(R) : new Array(R), w = E = 0; E < R; w++) (64512 & (g = y.charCodeAt(w))) == 55296 && w + 1 < T && (64512 & (p = y.charCodeAt(w + 1))) == 56320 && (g = 65536 + (g - 55296 << 10) + (p - 56320), w++), g < 128 ? c[E++] = g : (g < 2048 ? c[E++] = 192 | g >>> 6 : (g < 65536 ? c[E++] = 224 | g >>> 12 : (c[E++] = 240 | g >>> 18, c[E++] = 128 | g >>> 12 & 63), c[E++] = 128 | g >>> 6 & 63), c[E++] = 128 | 63 & g);
          return c;
        }(h);
      }, f.utf8decode = function(h) {
        return s.nodebuffer ? r.transformTo("nodebuffer", h).toString("utf-8") : function(y) {
          var c, g, p, w, E = y.length, T = new Array(2 * E);
          for (c = g = 0; c < E; ) if ((p = y[c++]) < 128) T[g++] = p;
          else if (4 < (w = _[p])) T[g++] = 65533, c += w - 1;
          else {
            for (p &= w === 2 ? 31 : w === 3 ? 15 : 7; 1 < w && c < E; ) p = p << 6 | 63 & y[c++], w--;
            1 < w ? T[g++] = 65533 : p < 65536 ? T[g++] = p : (p -= 65536, T[g++] = 55296 | p >> 10 & 1023, T[g++] = 56320 | 1023 & p);
          }
          return T.length !== g && (T.subarray ? T = T.subarray(0, g) : T.length = g), r.applyFromCharCode(T);
        }(h = r.transformTo(s.uint8array ? "uint8array" : "array", h));
      }, r.inherits(b, l), b.prototype.processChunk = function(h) {
        var y = r.transformTo(s.uint8array ? "uint8array" : "array", h.data);
        if (this.leftOver && this.leftOver.length) {
          if (s.uint8array) {
            var c = y;
            (y = new Uint8Array(c.length + this.leftOver.length)).set(this.leftOver, 0), y.set(c, this.leftOver.length);
          } else y = this.leftOver.concat(y);
          this.leftOver = null;
        }
        var g = function(w, E) {
          var T;
          for ((E = E || w.length) > w.length && (E = w.length), T = E - 1; 0 <= T && (192 & w[T]) == 128; ) T--;
          return T < 0 || T === 0 ? E : T + _[w[T]] > E ? T : E;
        }(y), p = y;
        g !== y.length && (s.uint8array ? (p = y.subarray(0, g), this.leftOver = y.subarray(g, y.length)) : (p = y.slice(0, g), this.leftOver = y.slice(g, y.length))), this.push({ data: f.utf8decode(p), meta: h.meta });
      }, b.prototype.flush = function() {
        this.leftOver && this.leftOver.length && (this.push({ data: f.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
      }, f.Utf8DecodeWorker = b, r.inherits(x, l), x.prototype.processChunk = function(h) {
        this.push({ data: f.utf8encode(h.data), meta: h.meta });
      }, f.Utf8EncodeWorker = x;
    }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }], 32: [function(n, d, f) {
      var r = n("./support"), s = n("./base64"), i = n("./nodejsUtils"), l = n("./external");
      function _(c) {
        return c;
      }
      function k(c, g) {
        for (var p = 0; p < c.length; ++p) g[p] = 255 & c.charCodeAt(p);
        return g;
      }
      n("setimmediate"), f.newBlob = function(c, g) {
        f.checkSupport("blob");
        try {
          return new Blob([c], { type: g });
        } catch {
          try {
            var p = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            return p.append(c), p.getBlob(g);
          } catch {
            throw new Error("Bug : can't construct the Blob.");
          }
        }
      };
      var b = { stringifyByChunk: function(c, g, p) {
        var w = [], E = 0, T = c.length;
        if (T <= p) return String.fromCharCode.apply(null, c);
        for (; E < T; ) g === "array" || g === "nodebuffer" ? w.push(String.fromCharCode.apply(null, c.slice(E, Math.min(E + p, T)))) : w.push(String.fromCharCode.apply(null, c.subarray(E, Math.min(E + p, T)))), E += p;
        return w.join("");
      }, stringifyByChar: function(c) {
        for (var g = "", p = 0; p < c.length; p++) g += String.fromCharCode(c[p]);
        return g;
      }, applyCanBeUsed: { uint8array: function() {
        try {
          return r.uint8array && String.fromCharCode.apply(null, new Uint8Array(1)).length === 1;
        } catch {
          return !1;
        }
      }(), nodebuffer: function() {
        try {
          return r.nodebuffer && String.fromCharCode.apply(null, i.allocBuffer(1)).length === 1;
        } catch {
          return !1;
        }
      }() } };
      function x(c) {
        var g = 65536, p = f.getTypeOf(c), w = !0;
        if (p === "uint8array" ? w = b.applyCanBeUsed.uint8array : p === "nodebuffer" && (w = b.applyCanBeUsed.nodebuffer), w) for (; 1 < g; ) try {
          return b.stringifyByChunk(c, p, g);
        } catch {
          g = Math.floor(g / 2);
        }
        return b.stringifyByChar(c);
      }
      function h(c, g) {
        for (var p = 0; p < c.length; p++) g[p] = c[p];
        return g;
      }
      f.applyFromCharCode = x;
      var y = {};
      y.string = { string: _, array: function(c) {
        return k(c, new Array(c.length));
      }, arraybuffer: function(c) {
        return y.string.uint8array(c).buffer;
      }, uint8array: function(c) {
        return k(c, new Uint8Array(c.length));
      }, nodebuffer: function(c) {
        return k(c, i.allocBuffer(c.length));
      } }, y.array = { string: x, array: _, arraybuffer: function(c) {
        return new Uint8Array(c).buffer;
      }, uint8array: function(c) {
        return new Uint8Array(c);
      }, nodebuffer: function(c) {
        return i.newBufferFrom(c);
      } }, y.arraybuffer = { string: function(c) {
        return x(new Uint8Array(c));
      }, array: function(c) {
        return h(new Uint8Array(c), new Array(c.byteLength));
      }, arraybuffer: _, uint8array: function(c) {
        return new Uint8Array(c);
      }, nodebuffer: function(c) {
        return i.newBufferFrom(new Uint8Array(c));
      } }, y.uint8array = { string: x, array: function(c) {
        return h(c, new Array(c.length));
      }, arraybuffer: function(c) {
        return c.buffer;
      }, uint8array: _, nodebuffer: function(c) {
        return i.newBufferFrom(c);
      } }, y.nodebuffer = { string: x, array: function(c) {
        return h(c, new Array(c.length));
      }, arraybuffer: function(c) {
        return y.nodebuffer.uint8array(c).buffer;
      }, uint8array: function(c) {
        return h(c, new Uint8Array(c.length));
      }, nodebuffer: _ }, f.transformTo = function(c, g) {
        if (g = g || "", !c) return g;
        f.checkSupport(c);
        var p = f.getTypeOf(g);
        return y[p][c](g);
      }, f.resolve = function(c) {
        for (var g = c.split("/"), p = [], w = 0; w < g.length; w++) {
          var E = g[w];
          E === "." || E === "" && w !== 0 && w !== g.length - 1 || (E === ".." ? p.pop() : p.push(E));
        }
        return p.join("/");
      }, f.getTypeOf = function(c) {
        return typeof c == "string" ? "string" : Object.prototype.toString.call(c) === "[object Array]" ? "array" : r.nodebuffer && i.isBuffer(c) ? "nodebuffer" : r.uint8array && c instanceof Uint8Array ? "uint8array" : r.arraybuffer && c instanceof ArrayBuffer ? "arraybuffer" : void 0;
      }, f.checkSupport = function(c) {
        if (!r[c.toLowerCase()]) throw new Error(c + " is not supported by this platform");
      }, f.MAX_VALUE_16BITS = 65535, f.MAX_VALUE_32BITS = -1, f.pretty = function(c) {
        var g, p, w = "";
        for (p = 0; p < (c || "").length; p++) w += "\\x" + ((g = c.charCodeAt(p)) < 16 ? "0" : "") + g.toString(16).toUpperCase();
        return w;
      }, f.delay = function(c, g, p) {
        setImmediate(function() {
          c.apply(p || null, g || []);
        });
      }, f.inherits = function(c, g) {
        function p() {
        }
        p.prototype = g.prototype, c.prototype = new p();
      }, f.extend = function() {
        var c, g, p = {};
        for (c = 0; c < arguments.length; c++) for (g in arguments[c]) Object.prototype.hasOwnProperty.call(arguments[c], g) && p[g] === void 0 && (p[g] = arguments[c][g]);
        return p;
      }, f.prepareContent = function(c, g, p, w, E) {
        return l.Promise.resolve(g).then(function(T) {
          return r.blob && (T instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(T)) !== -1) && typeof FileReader < "u" ? new l.Promise(function(R, L) {
            var P = new FileReader();
            P.onload = function(W) {
              R(W.target.result);
            }, P.onerror = function(W) {
              L(W.target.error);
            }, P.readAsArrayBuffer(T);
          }) : T;
        }).then(function(T) {
          var R = f.getTypeOf(T);
          return R ? (R === "arraybuffer" ? T = f.transformTo("uint8array", T) : R === "string" && (E ? T = s.decode(T) : p && w !== !0 && (T = function(L) {
            return k(L, r.uint8array ? new Uint8Array(L.length) : new Array(L.length));
          }(T))), T) : l.Promise.reject(new Error("Can't read the data of '" + c + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
        });
      };
    }, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, setimmediate: 54 }], 33: [function(n, d, f) {
      var r = n("./reader/readerFor"), s = n("./utils"), i = n("./signature"), l = n("./zipEntry"), _ = n("./support");
      function k(b) {
        this.files = [], this.loadOptions = b;
      }
      k.prototype = { checkSignature: function(b) {
        if (!this.reader.readAndCheckSignature(b)) {
          this.reader.index -= 4;
          var x = this.reader.readString(4);
          throw new Error("Corrupted zip or bug: unexpected signature (" + s.pretty(x) + ", expected " + s.pretty(b) + ")");
        }
      }, isSignature: function(b, x) {
        var h = this.reader.index;
        this.reader.setIndex(b);
        var y = this.reader.readString(4) === x;
        return this.reader.setIndex(h), y;
      }, readBlockEndOfCentral: function() {
        this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
        var b = this.reader.readData(this.zipCommentLength), x = _.uint8array ? "uint8array" : "array", h = s.transformTo(x, b);
        this.zipComment = this.loadOptions.decodeFileName(h);
      }, readBlockZip64EndOfCentral: function() {
        this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
        for (var b, x, h, y = this.zip64EndOfCentralSize - 44; 0 < y; ) b = this.reader.readInt(2), x = this.reader.readInt(4), h = this.reader.readData(x), this.zip64ExtensibleData[b] = { id: b, length: x, value: h };
      }, readBlockZip64EndOfCentralLocator: function() {
        if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount) throw new Error("Multi-volumes zip are not supported");
      }, readLocalFiles: function() {
        var b, x;
        for (b = 0; b < this.files.length; b++) x = this.files[b], this.reader.setIndex(x.localHeaderOffset), this.checkSignature(i.LOCAL_FILE_HEADER), x.readLocalPart(this.reader), x.handleUTF8(), x.processAttributes();
      }, readCentralDir: function() {
        var b;
        for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(i.CENTRAL_FILE_HEADER); ) (b = new l({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(b);
        if (this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0) throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
      }, readEndOfCentral: function() {
        var b = this.reader.lastIndexOfSignature(i.CENTRAL_DIRECTORY_END);
        if (b < 0) throw this.isSignature(0, i.LOCAL_FILE_HEADER) ? new Error("Corrupted zip: can't find end of central directory") : new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
        this.reader.setIndex(b);
        var x = b;
        if (this.checkSignature(i.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === s.MAX_VALUE_16BITS || this.diskWithCentralDirStart === s.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === s.MAX_VALUE_16BITS || this.centralDirRecords === s.MAX_VALUE_16BITS || this.centralDirSize === s.MAX_VALUE_32BITS || this.centralDirOffset === s.MAX_VALUE_32BITS) {
          if (this.zip64 = !0, (b = this.reader.lastIndexOfSignature(i.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
          if (this.reader.setIndex(b), this.checkSignature(i.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, i.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(i.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
          this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(i.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
        }
        var h = this.centralDirOffset + this.centralDirSize;
        this.zip64 && (h += 20, h += 12 + this.zip64EndOfCentralSize);
        var y = x - h;
        if (0 < y) this.isSignature(x, i.CENTRAL_FILE_HEADER) || (this.reader.zero = y);
        else if (y < 0) throw new Error("Corrupted zip: missing " + Math.abs(y) + " bytes.");
      }, prepareReader: function(b) {
        this.reader = r(b);
      }, load: function(b) {
        this.prepareReader(b), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
      } }, d.exports = k;
    }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utils": 32, "./zipEntry": 34 }], 34: [function(n, d, f) {
      var r = n("./reader/readerFor"), s = n("./utils"), i = n("./compressedObject"), l = n("./crc32"), _ = n("./utf8"), k = n("./compressions"), b = n("./support");
      function x(h, y) {
        this.options = h, this.loadOptions = y;
      }
      x.prototype = { isEncrypted: function() {
        return (1 & this.bitFlag) == 1;
      }, useUTF8: function() {
        return (2048 & this.bitFlag) == 2048;
      }, readLocalPart: function(h) {
        var y, c;
        if (h.skip(22), this.fileNameLength = h.readInt(2), c = h.readInt(2), this.fileName = h.readData(this.fileNameLength), h.skip(c), this.compressedSize === -1 || this.uncompressedSize === -1) throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
        if ((y = function(g) {
          for (var p in k) if (Object.prototype.hasOwnProperty.call(k, p) && k[p].magic === g) return k[p];
          return null;
        }(this.compressionMethod)) === null) throw new Error("Corrupted zip : compression " + s.pretty(this.compressionMethod) + " unknown (inner file : " + s.transformTo("string", this.fileName) + ")");
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
          var h = r(this.extraFields[1].value);
          this.uncompressedSize === s.MAX_VALUE_32BITS && (this.uncompressedSize = h.readInt(8)), this.compressedSize === s.MAX_VALUE_32BITS && (this.compressedSize = h.readInt(8)), this.localHeaderOffset === s.MAX_VALUE_32BITS && (this.localHeaderOffset = h.readInt(8)), this.diskNumberStart === s.MAX_VALUE_32BITS && (this.diskNumberStart = h.readInt(4));
        }
      }, readExtraFields: function(h) {
        var y, c, g, p = h.index + this.extraFieldsLength;
        for (this.extraFields || (this.extraFields = {}); h.index + 4 < p; ) y = h.readInt(2), c = h.readInt(2), g = h.readData(c), this.extraFields[y] = { id: y, length: c, value: g };
        h.setIndex(p);
      }, handleUTF8: function() {
        var h = b.uint8array ? "uint8array" : "array";
        if (this.useUTF8()) this.fileNameStr = _.utf8decode(this.fileName), this.fileCommentStr = _.utf8decode(this.fileComment);
        else {
          var y = this.findExtraFieldUnicodePath();
          if (y !== null) this.fileNameStr = y;
          else {
            var c = s.transformTo(h, this.fileName);
            this.fileNameStr = this.loadOptions.decodeFileName(c);
          }
          var g = this.findExtraFieldUnicodeComment();
          if (g !== null) this.fileCommentStr = g;
          else {
            var p = s.transformTo(h, this.fileComment);
            this.fileCommentStr = this.loadOptions.decodeFileName(p);
          }
        }
      }, findExtraFieldUnicodePath: function() {
        var h = this.extraFields[28789];
        if (h) {
          var y = r(h.value);
          return y.readInt(1) !== 1 || l(this.fileName) !== y.readInt(4) ? null : _.utf8decode(y.readData(h.length - 5));
        }
        return null;
      }, findExtraFieldUnicodeComment: function() {
        var h = this.extraFields[25461];
        if (h) {
          var y = r(h.value);
          return y.readInt(1) !== 1 || l(this.fileComment) !== y.readInt(4) ? null : _.utf8decode(y.readData(h.length - 5));
        }
        return null;
      } }, d.exports = x;
    }, { "./compressedObject": 2, "./compressions": 3, "./crc32": 4, "./reader/readerFor": 22, "./support": 30, "./utf8": 31, "./utils": 32 }], 35: [function(n, d, f) {
      function r(y, c, g) {
        this.name = y, this.dir = g.dir, this.date = g.date, this.comment = g.comment, this.unixPermissions = g.unixPermissions, this.dosPermissions = g.dosPermissions, this._data = c, this._dataBinary = g.binary, this.options = { compression: g.compression, compressionOptions: g.compressionOptions };
      }
      var s = n("./stream/StreamHelper"), i = n("./stream/DataWorker"), l = n("./utf8"), _ = n("./compressedObject"), k = n("./stream/GenericWorker");
      r.prototype = { internalStream: function(y) {
        var c = null, g = "string";
        try {
          if (!y) throw new Error("No output type specified.");
          var p = (g = y.toLowerCase()) === "string" || g === "text";
          g !== "binarystring" && g !== "text" || (g = "string"), c = this._decompressWorker();
          var w = !this._dataBinary;
          w && !p && (c = c.pipe(new l.Utf8EncodeWorker())), !w && p && (c = c.pipe(new l.Utf8DecodeWorker()));
        } catch (E) {
          (c = new k("error")).error(E);
        }
        return new s(c, g, "");
      }, async: function(y, c) {
        return this.internalStream(y).accumulate(c);
      }, nodeStream: function(y, c) {
        return this.internalStream(y || "nodebuffer").toNodejsStream(c);
      }, _compressWorker: function(y, c) {
        if (this._data instanceof _ && this._data.compression.magic === y.magic) return this._data.getCompressedWorker();
        var g = this._decompressWorker();
        return this._dataBinary || (g = g.pipe(new l.Utf8EncodeWorker())), _.createWorkerFrom(g, y, c);
      }, _decompressWorker: function() {
        return this._data instanceof _ ? this._data.getContentWorker() : this._data instanceof k ? this._data : new i(this._data);
      } };
      for (var b = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], x = function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, h = 0; h < b.length; h++) r.prototype[b[h]] = x;
      d.exports = r;
    }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }], 36: [function(n, d, f) {
      (function(r) {
        var s, i, l = r.MutationObserver || r.WebKitMutationObserver;
        if (l) {
          var _ = 0, k = new l(y), b = r.document.createTextNode("");
          k.observe(b, { characterData: !0 }), s = function() {
            b.data = _ = ++_ % 2;
          };
        } else if (r.setImmediate || r.MessageChannel === void 0) s = "document" in r && "onreadystatechange" in r.document.createElement("script") ? function() {
          var c = r.document.createElement("script");
          c.onreadystatechange = function() {
            y(), c.onreadystatechange = null, c.parentNode.removeChild(c), c = null;
          }, r.document.documentElement.appendChild(c);
        } : function() {
          setTimeout(y, 0);
        };
        else {
          var x = new r.MessageChannel();
          x.port1.onmessage = y, s = function() {
            x.port2.postMessage(0);
          };
        }
        var h = [];
        function y() {
          var c, g;
          i = !0;
          for (var p = h.length; p; ) {
            for (g = h, h = [], c = -1; ++c < p; ) g[c]();
            p = h.length;
          }
          i = !1;
        }
        d.exports = function(c) {
          h.push(c) !== 1 || i || s();
        };
      }).call(this, typeof fe < "u" ? fe : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 37: [function(n, d, f) {
      var r = n("immediate");
      function s() {
      }
      var i = {}, l = ["REJECTED"], _ = ["FULFILLED"], k = ["PENDING"];
      function b(p) {
        if (typeof p != "function") throw new TypeError("resolver must be a function");
        this.state = k, this.queue = [], this.outcome = void 0, p !== s && c(this, p);
      }
      function x(p, w, E) {
        this.promise = p, typeof w == "function" && (this.onFulfilled = w, this.callFulfilled = this.otherCallFulfilled), typeof E == "function" && (this.onRejected = E, this.callRejected = this.otherCallRejected);
      }
      function h(p, w, E) {
        r(function() {
          var T;
          try {
            T = w(E);
          } catch (R) {
            return i.reject(p, R);
          }
          T === p ? i.reject(p, new TypeError("Cannot resolve promise with itself")) : i.resolve(p, T);
        });
      }
      function y(p) {
        var w = p && p.then;
        if (p && (typeof p == "object" || typeof p == "function") && typeof w == "function") return function() {
          w.apply(p, arguments);
        };
      }
      function c(p, w) {
        var E = !1;
        function T(P) {
          E || (E = !0, i.reject(p, P));
        }
        function R(P) {
          E || (E = !0, i.resolve(p, P));
        }
        var L = g(function() {
          w(R, T);
        });
        L.status === "error" && T(L.value);
      }
      function g(p, w) {
        var E = {};
        try {
          E.value = p(w), E.status = "success";
        } catch (T) {
          E.status = "error", E.value = T;
        }
        return E;
      }
      (d.exports = b).prototype.finally = function(p) {
        if (typeof p != "function") return this;
        var w = this.constructor;
        return this.then(function(E) {
          return w.resolve(p()).then(function() {
            return E;
          });
        }, function(E) {
          return w.resolve(p()).then(function() {
            throw E;
          });
        });
      }, b.prototype.catch = function(p) {
        return this.then(null, p);
      }, b.prototype.then = function(p, w) {
        if (typeof p != "function" && this.state === _ || typeof w != "function" && this.state === l) return this;
        var E = new this.constructor(s);
        return this.state !== k ? h(E, this.state === _ ? p : w, this.outcome) : this.queue.push(new x(E, p, w)), E;
      }, x.prototype.callFulfilled = function(p) {
        i.resolve(this.promise, p);
      }, x.prototype.otherCallFulfilled = function(p) {
        h(this.promise, this.onFulfilled, p);
      }, x.prototype.callRejected = function(p) {
        i.reject(this.promise, p);
      }, x.prototype.otherCallRejected = function(p) {
        h(this.promise, this.onRejected, p);
      }, i.resolve = function(p, w) {
        var E = g(y, w);
        if (E.status === "error") return i.reject(p, E.value);
        var T = E.value;
        if (T) c(p, T);
        else {
          p.state = _, p.outcome = w;
          for (var R = -1, L = p.queue.length; ++R < L; ) p.queue[R].callFulfilled(w);
        }
        return p;
      }, i.reject = function(p, w) {
        p.state = l, p.outcome = w;
        for (var E = -1, T = p.queue.length; ++E < T; ) p.queue[E].callRejected(w);
        return p;
      }, b.resolve = function(p) {
        return p instanceof this ? p : i.resolve(new this(s), p);
      }, b.reject = function(p) {
        var w = new this(s);
        return i.reject(w, p);
      }, b.all = function(p) {
        var w = this;
        if (Object.prototype.toString.call(p) !== "[object Array]") return this.reject(new TypeError("must be an array"));
        var E = p.length, T = !1;
        if (!E) return this.resolve([]);
        for (var R = new Array(E), L = 0, P = -1, W = new this(s); ++P < E; ) z(p[P], P);
        return W;
        function z(Z, nt) {
          w.resolve(Z).then(function(S) {
            R[nt] = S, ++L !== E || T || (T = !0, i.resolve(W, R));
          }, function(S) {
            T || (T = !0, i.reject(W, S));
          });
        }
      }, b.race = function(p) {
        var w = this;
        if (Object.prototype.toString.call(p) !== "[object Array]") return this.reject(new TypeError("must be an array"));
        var E = p.length, T = !1;
        if (!E) return this.resolve([]);
        for (var R = -1, L = new this(s); ++R < E; ) P = p[R], w.resolve(P).then(function(W) {
          T || (T = !0, i.resolve(L, W));
        }, function(W) {
          T || (T = !0, i.reject(L, W));
        });
        var P;
        return L;
      };
    }, { immediate: 36 }], 38: [function(n, d, f) {
      var r = {};
      (0, n("./lib/utils/common").assign)(r, n("./lib/deflate"), n("./lib/inflate"), n("./lib/zlib/constants")), d.exports = r;
    }, { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 }], 39: [function(n, d, f) {
      var r = n("./zlib/deflate"), s = n("./utils/common"), i = n("./utils/strings"), l = n("./zlib/messages"), _ = n("./zlib/zstream"), k = Object.prototype.toString, b = 0, x = -1, h = 0, y = 8;
      function c(p) {
        if (!(this instanceof c)) return new c(p);
        this.options = s.assign({ level: x, method: y, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: h, to: "" }, p || {});
        var w = this.options;
        w.raw && 0 < w.windowBits ? w.windowBits = -w.windowBits : w.gzip && 0 < w.windowBits && w.windowBits < 16 && (w.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new _(), this.strm.avail_out = 0;
        var E = r.deflateInit2(this.strm, w.level, w.method, w.windowBits, w.memLevel, w.strategy);
        if (E !== b) throw new Error(l[E]);
        if (w.header && r.deflateSetHeader(this.strm, w.header), w.dictionary) {
          var T;
          if (T = typeof w.dictionary == "string" ? i.string2buf(w.dictionary) : k.call(w.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(w.dictionary) : w.dictionary, (E = r.deflateSetDictionary(this.strm, T)) !== b) throw new Error(l[E]);
          this._dict_set = !0;
        }
      }
      function g(p, w) {
        var E = new c(w);
        if (E.push(p, !0), E.err) throw E.msg || l[E.err];
        return E.result;
      }
      c.prototype.push = function(p, w) {
        var E, T, R = this.strm, L = this.options.chunkSize;
        if (this.ended) return !1;
        T = w === ~~w ? w : w === !0 ? 4 : 0, typeof p == "string" ? R.input = i.string2buf(p) : k.call(p) === "[object ArrayBuffer]" ? R.input = new Uint8Array(p) : R.input = p, R.next_in = 0, R.avail_in = R.input.length;
        do {
          if (R.avail_out === 0 && (R.output = new s.Buf8(L), R.next_out = 0, R.avail_out = L), (E = r.deflate(R, T)) !== 1 && E !== b) return this.onEnd(E), !(this.ended = !0);
          R.avail_out !== 0 && (R.avail_in !== 0 || T !== 4 && T !== 2) || (this.options.to === "string" ? this.onData(i.buf2binstring(s.shrinkBuf(R.output, R.next_out))) : this.onData(s.shrinkBuf(R.output, R.next_out)));
        } while ((0 < R.avail_in || R.avail_out === 0) && E !== 1);
        return T === 4 ? (E = r.deflateEnd(this.strm), this.onEnd(E), this.ended = !0, E === b) : T !== 2 || (this.onEnd(b), !(R.avail_out = 0));
      }, c.prototype.onData = function(p) {
        this.chunks.push(p);
      }, c.prototype.onEnd = function(p) {
        p === b && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = s.flattenChunks(this.chunks)), this.chunks = [], this.err = p, this.msg = this.strm.msg;
      }, f.Deflate = c, f.deflate = g, f.deflateRaw = function(p, w) {
        return (w = w || {}).raw = !0, g(p, w);
      }, f.gzip = function(p, w) {
        return (w = w || {}).gzip = !0, g(p, w);
      };
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/deflate": 46, "./zlib/messages": 51, "./zlib/zstream": 53 }], 40: [function(n, d, f) {
      var r = n("./zlib/inflate"), s = n("./utils/common"), i = n("./utils/strings"), l = n("./zlib/constants"), _ = n("./zlib/messages"), k = n("./zlib/zstream"), b = n("./zlib/gzheader"), x = Object.prototype.toString;
      function h(c) {
        if (!(this instanceof h)) return new h(c);
        this.options = s.assign({ chunkSize: 16384, windowBits: 0, to: "" }, c || {});
        var g = this.options;
        g.raw && 0 <= g.windowBits && g.windowBits < 16 && (g.windowBits = -g.windowBits, g.windowBits === 0 && (g.windowBits = -15)), !(0 <= g.windowBits && g.windowBits < 16) || c && c.windowBits || (g.windowBits += 32), 15 < g.windowBits && g.windowBits < 48 && !(15 & g.windowBits) && (g.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new k(), this.strm.avail_out = 0;
        var p = r.inflateInit2(this.strm, g.windowBits);
        if (p !== l.Z_OK) throw new Error(_[p]);
        this.header = new b(), r.inflateGetHeader(this.strm, this.header);
      }
      function y(c, g) {
        var p = new h(g);
        if (p.push(c, !0), p.err) throw p.msg || _[p.err];
        return p.result;
      }
      h.prototype.push = function(c, g) {
        var p, w, E, T, R, L, P = this.strm, W = this.options.chunkSize, z = this.options.dictionary, Z = !1;
        if (this.ended) return !1;
        w = g === ~~g ? g : g === !0 ? l.Z_FINISH : l.Z_NO_FLUSH, typeof c == "string" ? P.input = i.binstring2buf(c) : x.call(c) === "[object ArrayBuffer]" ? P.input = new Uint8Array(c) : P.input = c, P.next_in = 0, P.avail_in = P.input.length;
        do {
          if (P.avail_out === 0 && (P.output = new s.Buf8(W), P.next_out = 0, P.avail_out = W), (p = r.inflate(P, l.Z_NO_FLUSH)) === l.Z_NEED_DICT && z && (L = typeof z == "string" ? i.string2buf(z) : x.call(z) === "[object ArrayBuffer]" ? new Uint8Array(z) : z, p = r.inflateSetDictionary(this.strm, L)), p === l.Z_BUF_ERROR && Z === !0 && (p = l.Z_OK, Z = !1), p !== l.Z_STREAM_END && p !== l.Z_OK) return this.onEnd(p), !(this.ended = !0);
          P.next_out && (P.avail_out !== 0 && p !== l.Z_STREAM_END && (P.avail_in !== 0 || w !== l.Z_FINISH && w !== l.Z_SYNC_FLUSH) || (this.options.to === "string" ? (E = i.utf8border(P.output, P.next_out), T = P.next_out - E, R = i.buf2string(P.output, E), P.next_out = T, P.avail_out = W - T, T && s.arraySet(P.output, P.output, E, T, 0), this.onData(R)) : this.onData(s.shrinkBuf(P.output, P.next_out)))), P.avail_in === 0 && P.avail_out === 0 && (Z = !0);
        } while ((0 < P.avail_in || P.avail_out === 0) && p !== l.Z_STREAM_END);
        return p === l.Z_STREAM_END && (w = l.Z_FINISH), w === l.Z_FINISH ? (p = r.inflateEnd(this.strm), this.onEnd(p), this.ended = !0, p === l.Z_OK) : w !== l.Z_SYNC_FLUSH || (this.onEnd(l.Z_OK), !(P.avail_out = 0));
      }, h.prototype.onData = function(c) {
        this.chunks.push(c);
      }, h.prototype.onEnd = function(c) {
        c === l.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = s.flattenChunks(this.chunks)), this.chunks = [], this.err = c, this.msg = this.strm.msg;
      }, f.Inflate = h, f.inflate = y, f.inflateRaw = function(c, g) {
        return (g = g || {}).raw = !0, y(c, g);
      }, f.ungzip = y;
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/constants": 44, "./zlib/gzheader": 47, "./zlib/inflate": 49, "./zlib/messages": 51, "./zlib/zstream": 53 }], 41: [function(n, d, f) {
      var r = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
      f.assign = function(l) {
        for (var _ = Array.prototype.slice.call(arguments, 1); _.length; ) {
          var k = _.shift();
          if (k) {
            if (typeof k != "object") throw new TypeError(k + "must be non-object");
            for (var b in k) k.hasOwnProperty(b) && (l[b] = k[b]);
          }
        }
        return l;
      }, f.shrinkBuf = function(l, _) {
        return l.length === _ ? l : l.subarray ? l.subarray(0, _) : (l.length = _, l);
      };
      var s = { arraySet: function(l, _, k, b, x) {
        if (_.subarray && l.subarray) l.set(_.subarray(k, k + b), x);
        else for (var h = 0; h < b; h++) l[x + h] = _[k + h];
      }, flattenChunks: function(l) {
        var _, k, b, x, h, y;
        for (_ = b = 0, k = l.length; _ < k; _++) b += l[_].length;
        for (y = new Uint8Array(b), _ = x = 0, k = l.length; _ < k; _++) h = l[_], y.set(h, x), x += h.length;
        return y;
      } }, i = { arraySet: function(l, _, k, b, x) {
        for (var h = 0; h < b; h++) l[x + h] = _[k + h];
      }, flattenChunks: function(l) {
        return [].concat.apply([], l);
      } };
      f.setTyped = function(l) {
        l ? (f.Buf8 = Uint8Array, f.Buf16 = Uint16Array, f.Buf32 = Int32Array, f.assign(f, s)) : (f.Buf8 = Array, f.Buf16 = Array, f.Buf32 = Array, f.assign(f, i));
      }, f.setTyped(r);
    }, {}], 42: [function(n, d, f) {
      var r = n("./common"), s = !0, i = !0;
      try {
        String.fromCharCode.apply(null, [0]);
      } catch {
        s = !1;
      }
      try {
        String.fromCharCode.apply(null, new Uint8Array(1));
      } catch {
        i = !1;
      }
      for (var l = new r.Buf8(256), _ = 0; _ < 256; _++) l[_] = 252 <= _ ? 6 : 248 <= _ ? 5 : 240 <= _ ? 4 : 224 <= _ ? 3 : 192 <= _ ? 2 : 1;
      function k(b, x) {
        if (x < 65537 && (b.subarray && i || !b.subarray && s)) return String.fromCharCode.apply(null, r.shrinkBuf(b, x));
        for (var h = "", y = 0; y < x; y++) h += String.fromCharCode(b[y]);
        return h;
      }
      l[254] = l[254] = 1, f.string2buf = function(b) {
        var x, h, y, c, g, p = b.length, w = 0;
        for (c = 0; c < p; c++) (64512 & (h = b.charCodeAt(c))) == 55296 && c + 1 < p && (64512 & (y = b.charCodeAt(c + 1))) == 56320 && (h = 65536 + (h - 55296 << 10) + (y - 56320), c++), w += h < 128 ? 1 : h < 2048 ? 2 : h < 65536 ? 3 : 4;
        for (x = new r.Buf8(w), c = g = 0; g < w; c++) (64512 & (h = b.charCodeAt(c))) == 55296 && c + 1 < p && (64512 & (y = b.charCodeAt(c + 1))) == 56320 && (h = 65536 + (h - 55296 << 10) + (y - 56320), c++), h < 128 ? x[g++] = h : (h < 2048 ? x[g++] = 192 | h >>> 6 : (h < 65536 ? x[g++] = 224 | h >>> 12 : (x[g++] = 240 | h >>> 18, x[g++] = 128 | h >>> 12 & 63), x[g++] = 128 | h >>> 6 & 63), x[g++] = 128 | 63 & h);
        return x;
      }, f.buf2binstring = function(b) {
        return k(b, b.length);
      }, f.binstring2buf = function(b) {
        for (var x = new r.Buf8(b.length), h = 0, y = x.length; h < y; h++) x[h] = b.charCodeAt(h);
        return x;
      }, f.buf2string = function(b, x) {
        var h, y, c, g, p = x || b.length, w = new Array(2 * p);
        for (h = y = 0; h < p; ) if ((c = b[h++]) < 128) w[y++] = c;
        else if (4 < (g = l[c])) w[y++] = 65533, h += g - 1;
        else {
          for (c &= g === 2 ? 31 : g === 3 ? 15 : 7; 1 < g && h < p; ) c = c << 6 | 63 & b[h++], g--;
          1 < g ? w[y++] = 65533 : c < 65536 ? w[y++] = c : (c -= 65536, w[y++] = 55296 | c >> 10 & 1023, w[y++] = 56320 | 1023 & c);
        }
        return k(w, y);
      }, f.utf8border = function(b, x) {
        var h;
        for ((x = x || b.length) > b.length && (x = b.length), h = x - 1; 0 <= h && (192 & b[h]) == 128; ) h--;
        return h < 0 || h === 0 ? x : h + l[b[h]] > x ? h : x;
      };
    }, { "./common": 41 }], 43: [function(n, d, f) {
      d.exports = function(r, s, i, l) {
        for (var _ = 65535 & r | 0, k = r >>> 16 & 65535 | 0, b = 0; i !== 0; ) {
          for (i -= b = 2e3 < i ? 2e3 : i; k = k + (_ = _ + s[l++] | 0) | 0, --b; ) ;
          _ %= 65521, k %= 65521;
        }
        return _ | k << 16 | 0;
      };
    }, {}], 44: [function(n, d, f) {
      d.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
    }, {}], 45: [function(n, d, f) {
      var r = function() {
        for (var s, i = [], l = 0; l < 256; l++) {
          s = l;
          for (var _ = 0; _ < 8; _++) s = 1 & s ? 3988292384 ^ s >>> 1 : s >>> 1;
          i[l] = s;
        }
        return i;
      }();
      d.exports = function(s, i, l, _) {
        var k = r, b = _ + l;
        s ^= -1;
        for (var x = _; x < b; x++) s = s >>> 8 ^ k[255 & (s ^ i[x])];
        return -1 ^ s;
      };
    }, {}], 46: [function(n, d, f) {
      var r, s = n("../utils/common"), i = n("./trees"), l = n("./adler32"), _ = n("./crc32"), k = n("./messages"), b = 0, x = 4, h = 0, y = -2, c = -1, g = 4, p = 2, w = 8, E = 9, T = 286, R = 30, L = 19, P = 2 * T + 1, W = 15, z = 3, Z = 258, nt = Z + z + 1, S = 42, D = 113, a = 1, U = 2, it = 3, V = 4;
      function ot(t, F) {
        return t.msg = k[F], F;
      }
      function Y(t) {
        return (t << 1) - (4 < t ? 9 : 0);
      }
      function Q(t) {
        for (var F = t.length; 0 <= --F; ) t[F] = 0;
      }
      function N(t) {
        var F = t.state, I = F.pending;
        I > t.avail_out && (I = t.avail_out), I !== 0 && (s.arraySet(t.output, F.pending_buf, F.pending_out, I, t.next_out), t.next_out += I, F.pending_out += I, t.total_out += I, t.avail_out -= I, F.pending -= I, F.pending === 0 && (F.pending_out = 0));
      }
      function j(t, F) {
        i._tr_flush_block(t, 0 <= t.block_start ? t.block_start : -1, t.strstart - t.block_start, F), t.block_start = t.strstart, N(t.strm);
      }
      function et(t, F) {
        t.pending_buf[t.pending++] = F;
      }
      function q(t, F) {
        t.pending_buf[t.pending++] = F >>> 8 & 255, t.pending_buf[t.pending++] = 255 & F;
      }
      function K(t, F) {
        var I, v, m = t.max_chain_length, C = t.strstart, $ = t.prev_length, H = t.nice_match, O = t.strstart > t.w_size - nt ? t.strstart - (t.w_size - nt) : 0, G = t.window, J = t.w_mask, X = t.prev, rt = t.strstart + Z, ht = G[C + $ - 1], ut = G[C + $];
        t.prev_length >= t.good_match && (m >>= 2), H > t.lookahead && (H = t.lookahead);
        do
          if (G[(I = F) + $] === ut && G[I + $ - 1] === ht && G[I] === G[C] && G[++I] === G[C + 1]) {
            C += 2, I++;
            do
              ;
            while (G[++C] === G[++I] && G[++C] === G[++I] && G[++C] === G[++I] && G[++C] === G[++I] && G[++C] === G[++I] && G[++C] === G[++I] && G[++C] === G[++I] && G[++C] === G[++I] && C < rt);
            if (v = Z - (rt - C), C = rt - Z, $ < v) {
              if (t.match_start = F, H <= ($ = v)) break;
              ht = G[C + $ - 1], ut = G[C + $];
            }
          }
        while ((F = X[F & J]) > O && --m != 0);
        return $ <= t.lookahead ? $ : t.lookahead;
      }
      function gt(t) {
        var F, I, v, m, C, $, H, O, G, J, X = t.w_size;
        do {
          if (m = t.window_size - t.lookahead - t.strstart, t.strstart >= X + (X - nt)) {
            for (s.arraySet(t.window, t.window, X, X, 0), t.match_start -= X, t.strstart -= X, t.block_start -= X, F = I = t.hash_size; v = t.head[--F], t.head[F] = X <= v ? v - X : 0, --I; ) ;
            for (F = I = X; v = t.prev[--F], t.prev[F] = X <= v ? v - X : 0, --I; ) ;
            m += X;
          }
          if (t.strm.avail_in === 0) break;
          if ($ = t.strm, H = t.window, O = t.strstart + t.lookahead, G = m, J = void 0, J = $.avail_in, G < J && (J = G), I = J === 0 ? 0 : ($.avail_in -= J, s.arraySet(H, $.input, $.next_in, J, O), $.state.wrap === 1 ? $.adler = l($.adler, H, J, O) : $.state.wrap === 2 && ($.adler = _($.adler, H, J, O)), $.next_in += J, $.total_in += J, J), t.lookahead += I, t.lookahead + t.insert >= z) for (C = t.strstart - t.insert, t.ins_h = t.window[C], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[C + 1]) & t.hash_mask; t.insert && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[C + z - 1]) & t.hash_mask, t.prev[C & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = C, C++, t.insert--, !(t.lookahead + t.insert < z)); ) ;
        } while (t.lookahead < nt && t.strm.avail_in !== 0);
      }
      function wt(t, F) {
        for (var I, v; ; ) {
          if (t.lookahead < nt) {
            if (gt(t), t.lookahead < nt && F === b) return a;
            if (t.lookahead === 0) break;
          }
          if (I = 0, t.lookahead >= z && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + z - 1]) & t.hash_mask, I = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), I !== 0 && t.strstart - I <= t.w_size - nt && (t.match_length = K(t, I)), t.match_length >= z) if (v = i._tr_tally(t, t.strstart - t.match_start, t.match_length - z), t.lookahead -= t.match_length, t.match_length <= t.max_lazy_match && t.lookahead >= z) {
            for (t.match_length--; t.strstart++, t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + z - 1]) & t.hash_mask, I = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart, --t.match_length != 0; ) ;
            t.strstart++;
          } else t.strstart += t.match_length, t.match_length = 0, t.ins_h = t.window[t.strstart], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + 1]) & t.hash_mask;
          else v = i._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++;
          if (v && (j(t, !1), t.strm.avail_out === 0)) return a;
        }
        return t.insert = t.strstart < z - 1 ? t.strstart : z - 1, F === x ? (j(t, !0), t.strm.avail_out === 0 ? it : V) : t.last_lit && (j(t, !1), t.strm.avail_out === 0) ? a : U;
      }
      function at(t, F) {
        for (var I, v, m; ; ) {
          if (t.lookahead < nt) {
            if (gt(t), t.lookahead < nt && F === b) return a;
            if (t.lookahead === 0) break;
          }
          if (I = 0, t.lookahead >= z && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + z - 1]) & t.hash_mask, I = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), t.prev_length = t.match_length, t.prev_match = t.match_start, t.match_length = z - 1, I !== 0 && t.prev_length < t.max_lazy_match && t.strstart - I <= t.w_size - nt && (t.match_length = K(t, I), t.match_length <= 5 && (t.strategy === 1 || t.match_length === z && 4096 < t.strstart - t.match_start) && (t.match_length = z - 1)), t.prev_length >= z && t.match_length <= t.prev_length) {
            for (m = t.strstart + t.lookahead - z, v = i._tr_tally(t, t.strstart - 1 - t.prev_match, t.prev_length - z), t.lookahead -= t.prev_length - 1, t.prev_length -= 2; ++t.strstart <= m && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + z - 1]) & t.hash_mask, I = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), --t.prev_length != 0; ) ;
            if (t.match_available = 0, t.match_length = z - 1, t.strstart++, v && (j(t, !1), t.strm.avail_out === 0)) return a;
          } else if (t.match_available) {
            if ((v = i._tr_tally(t, 0, t.window[t.strstart - 1])) && j(t, !1), t.strstart++, t.lookahead--, t.strm.avail_out === 0) return a;
          } else t.match_available = 1, t.strstart++, t.lookahead--;
        }
        return t.match_available && (v = i._tr_tally(t, 0, t.window[t.strstart - 1]), t.match_available = 0), t.insert = t.strstart < z - 1 ? t.strstart : z - 1, F === x ? (j(t, !0), t.strm.avail_out === 0 ? it : V) : t.last_lit && (j(t, !1), t.strm.avail_out === 0) ? a : U;
      }
      function lt(t, F, I, v, m) {
        this.good_length = t, this.max_lazy = F, this.nice_length = I, this.max_chain = v, this.func = m;
      }
      function mt() {
        this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = w, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new s.Buf16(2 * P), this.dyn_dtree = new s.Buf16(2 * (2 * R + 1)), this.bl_tree = new s.Buf16(2 * (2 * L + 1)), Q(this.dyn_ltree), Q(this.dyn_dtree), Q(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new s.Buf16(W + 1), this.heap = new s.Buf16(2 * T + 1), Q(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new s.Buf16(2 * T + 1), Q(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
      }
      function yt(t) {
        var F;
        return t && t.state ? (t.total_in = t.total_out = 0, t.data_type = p, (F = t.state).pending = 0, F.pending_out = 0, F.wrap < 0 && (F.wrap = -F.wrap), F.status = F.wrap ? S : D, t.adler = F.wrap === 2 ? 0 : 1, F.last_flush = b, i._tr_init(F), h) : ot(t, y);
      }
      function _t(t) {
        var F = yt(t);
        return F === h && function(I) {
          I.window_size = 2 * I.w_size, Q(I.head), I.max_lazy_match = r[I.level].max_lazy, I.good_match = r[I.level].good_length, I.nice_match = r[I.level].nice_length, I.max_chain_length = r[I.level].max_chain, I.strstart = 0, I.block_start = 0, I.lookahead = 0, I.insert = 0, I.match_length = I.prev_length = z - 1, I.match_available = 0, I.ins_h = 0;
        }(t.state), F;
      }
      function kt(t, F, I, v, m, C) {
        if (!t) return y;
        var $ = 1;
        if (F === c && (F = 6), v < 0 ? ($ = 0, v = -v) : 15 < v && ($ = 2, v -= 16), m < 1 || E < m || I !== w || v < 8 || 15 < v || F < 0 || 9 < F || C < 0 || g < C) return ot(t, y);
        v === 8 && (v = 9);
        var H = new mt();
        return (t.state = H).strm = t, H.wrap = $, H.gzhead = null, H.w_bits = v, H.w_size = 1 << H.w_bits, H.w_mask = H.w_size - 1, H.hash_bits = m + 7, H.hash_size = 1 << H.hash_bits, H.hash_mask = H.hash_size - 1, H.hash_shift = ~~((H.hash_bits + z - 1) / z), H.window = new s.Buf8(2 * H.w_size), H.head = new s.Buf16(H.hash_size), H.prev = new s.Buf16(H.w_size), H.lit_bufsize = 1 << m + 6, H.pending_buf_size = 4 * H.lit_bufsize, H.pending_buf = new s.Buf8(H.pending_buf_size), H.d_buf = 1 * H.lit_bufsize, H.l_buf = 3 * H.lit_bufsize, H.level = F, H.strategy = C, H.method = I, _t(t);
      }
      r = [new lt(0, 0, 0, 0, function(t, F) {
        var I = 65535;
        for (I > t.pending_buf_size - 5 && (I = t.pending_buf_size - 5); ; ) {
          if (t.lookahead <= 1) {
            if (gt(t), t.lookahead === 0 && F === b) return a;
            if (t.lookahead === 0) break;
          }
          t.strstart += t.lookahead, t.lookahead = 0;
          var v = t.block_start + I;
          if ((t.strstart === 0 || t.strstart >= v) && (t.lookahead = t.strstart - v, t.strstart = v, j(t, !1), t.strm.avail_out === 0) || t.strstart - t.block_start >= t.w_size - nt && (j(t, !1), t.strm.avail_out === 0)) return a;
        }
        return t.insert = 0, F === x ? (j(t, !0), t.strm.avail_out === 0 ? it : V) : (t.strstart > t.block_start && (j(t, !1), t.strm.avail_out), a);
      }), new lt(4, 4, 8, 4, wt), new lt(4, 5, 16, 8, wt), new lt(4, 6, 32, 32, wt), new lt(4, 4, 16, 16, at), new lt(8, 16, 32, 32, at), new lt(8, 16, 128, 128, at), new lt(8, 32, 128, 256, at), new lt(32, 128, 258, 1024, at), new lt(32, 258, 258, 4096, at)], f.deflateInit = function(t, F) {
        return kt(t, F, w, 15, 8, 0);
      }, f.deflateInit2 = kt, f.deflateReset = _t, f.deflateResetKeep = yt, f.deflateSetHeader = function(t, F) {
        return t && t.state ? t.state.wrap !== 2 ? y : (t.state.gzhead = F, h) : y;
      }, f.deflate = function(t, F) {
        var I, v, m, C;
        if (!t || !t.state || 5 < F || F < 0) return t ? ot(t, y) : y;
        if (v = t.state, !t.output || !t.input && t.avail_in !== 0 || v.status === 666 && F !== x) return ot(t, t.avail_out === 0 ? -5 : y);
        if (v.strm = t, I = v.last_flush, v.last_flush = F, v.status === S) if (v.wrap === 2) t.adler = 0, et(v, 31), et(v, 139), et(v, 8), v.gzhead ? (et(v, (v.gzhead.text ? 1 : 0) + (v.gzhead.hcrc ? 2 : 0) + (v.gzhead.extra ? 4 : 0) + (v.gzhead.name ? 8 : 0) + (v.gzhead.comment ? 16 : 0)), et(v, 255 & v.gzhead.time), et(v, v.gzhead.time >> 8 & 255), et(v, v.gzhead.time >> 16 & 255), et(v, v.gzhead.time >> 24 & 255), et(v, v.level === 9 ? 2 : 2 <= v.strategy || v.level < 2 ? 4 : 0), et(v, 255 & v.gzhead.os), v.gzhead.extra && v.gzhead.extra.length && (et(v, 255 & v.gzhead.extra.length), et(v, v.gzhead.extra.length >> 8 & 255)), v.gzhead.hcrc && (t.adler = _(t.adler, v.pending_buf, v.pending, 0)), v.gzindex = 0, v.status = 69) : (et(v, 0), et(v, 0), et(v, 0), et(v, 0), et(v, 0), et(v, v.level === 9 ? 2 : 2 <= v.strategy || v.level < 2 ? 4 : 0), et(v, 3), v.status = D);
        else {
          var $ = w + (v.w_bits - 8 << 4) << 8;
          $ |= (2 <= v.strategy || v.level < 2 ? 0 : v.level < 6 ? 1 : v.level === 6 ? 2 : 3) << 6, v.strstart !== 0 && ($ |= 32), $ += 31 - $ % 31, v.status = D, q(v, $), v.strstart !== 0 && (q(v, t.adler >>> 16), q(v, 65535 & t.adler)), t.adler = 1;
        }
        if (v.status === 69) if (v.gzhead.extra) {
          for (m = v.pending; v.gzindex < (65535 & v.gzhead.extra.length) && (v.pending !== v.pending_buf_size || (v.gzhead.hcrc && v.pending > m && (t.adler = _(t.adler, v.pending_buf, v.pending - m, m)), N(t), m = v.pending, v.pending !== v.pending_buf_size)); ) et(v, 255 & v.gzhead.extra[v.gzindex]), v.gzindex++;
          v.gzhead.hcrc && v.pending > m && (t.adler = _(t.adler, v.pending_buf, v.pending - m, m)), v.gzindex === v.gzhead.extra.length && (v.gzindex = 0, v.status = 73);
        } else v.status = 73;
        if (v.status === 73) if (v.gzhead.name) {
          m = v.pending;
          do {
            if (v.pending === v.pending_buf_size && (v.gzhead.hcrc && v.pending > m && (t.adler = _(t.adler, v.pending_buf, v.pending - m, m)), N(t), m = v.pending, v.pending === v.pending_buf_size)) {
              C = 1;
              break;
            }
            C = v.gzindex < v.gzhead.name.length ? 255 & v.gzhead.name.charCodeAt(v.gzindex++) : 0, et(v, C);
          } while (C !== 0);
          v.gzhead.hcrc && v.pending > m && (t.adler = _(t.adler, v.pending_buf, v.pending - m, m)), C === 0 && (v.gzindex = 0, v.status = 91);
        } else v.status = 91;
        if (v.status === 91) if (v.gzhead.comment) {
          m = v.pending;
          do {
            if (v.pending === v.pending_buf_size && (v.gzhead.hcrc && v.pending > m && (t.adler = _(t.adler, v.pending_buf, v.pending - m, m)), N(t), m = v.pending, v.pending === v.pending_buf_size)) {
              C = 1;
              break;
            }
            C = v.gzindex < v.gzhead.comment.length ? 255 & v.gzhead.comment.charCodeAt(v.gzindex++) : 0, et(v, C);
          } while (C !== 0);
          v.gzhead.hcrc && v.pending > m && (t.adler = _(t.adler, v.pending_buf, v.pending - m, m)), C === 0 && (v.status = 103);
        } else v.status = 103;
        if (v.status === 103 && (v.gzhead.hcrc ? (v.pending + 2 > v.pending_buf_size && N(t), v.pending + 2 <= v.pending_buf_size && (et(v, 255 & t.adler), et(v, t.adler >> 8 & 255), t.adler = 0, v.status = D)) : v.status = D), v.pending !== 0) {
          if (N(t), t.avail_out === 0) return v.last_flush = -1, h;
        } else if (t.avail_in === 0 && Y(F) <= Y(I) && F !== x) return ot(t, -5);
        if (v.status === 666 && t.avail_in !== 0) return ot(t, -5);
        if (t.avail_in !== 0 || v.lookahead !== 0 || F !== b && v.status !== 666) {
          var H = v.strategy === 2 ? function(O, G) {
            for (var J; ; ) {
              if (O.lookahead === 0 && (gt(O), O.lookahead === 0)) {
                if (G === b) return a;
                break;
              }
              if (O.match_length = 0, J = i._tr_tally(O, 0, O.window[O.strstart]), O.lookahead--, O.strstart++, J && (j(O, !1), O.strm.avail_out === 0)) return a;
            }
            return O.insert = 0, G === x ? (j(O, !0), O.strm.avail_out === 0 ? it : V) : O.last_lit && (j(O, !1), O.strm.avail_out === 0) ? a : U;
          }(v, F) : v.strategy === 3 ? function(O, G) {
            for (var J, X, rt, ht, ut = O.window; ; ) {
              if (O.lookahead <= Z) {
                if (gt(O), O.lookahead <= Z && G === b) return a;
                if (O.lookahead === 0) break;
              }
              if (O.match_length = 0, O.lookahead >= z && 0 < O.strstart && (X = ut[rt = O.strstart - 1]) === ut[++rt] && X === ut[++rt] && X === ut[++rt]) {
                ht = O.strstart + Z;
                do
                  ;
                while (X === ut[++rt] && X === ut[++rt] && X === ut[++rt] && X === ut[++rt] && X === ut[++rt] && X === ut[++rt] && X === ut[++rt] && X === ut[++rt] && rt < ht);
                O.match_length = Z - (ht - rt), O.match_length > O.lookahead && (O.match_length = O.lookahead);
              }
              if (O.match_length >= z ? (J = i._tr_tally(O, 1, O.match_length - z), O.lookahead -= O.match_length, O.strstart += O.match_length, O.match_length = 0) : (J = i._tr_tally(O, 0, O.window[O.strstart]), O.lookahead--, O.strstart++), J && (j(O, !1), O.strm.avail_out === 0)) return a;
            }
            return O.insert = 0, G === x ? (j(O, !0), O.strm.avail_out === 0 ? it : V) : O.last_lit && (j(O, !1), O.strm.avail_out === 0) ? a : U;
          }(v, F) : r[v.level].func(v, F);
          if (H !== it && H !== V || (v.status = 666), H === a || H === it) return t.avail_out === 0 && (v.last_flush = -1), h;
          if (H === U && (F === 1 ? i._tr_align(v) : F !== 5 && (i._tr_stored_block(v, 0, 0, !1), F === 3 && (Q(v.head), v.lookahead === 0 && (v.strstart = 0, v.block_start = 0, v.insert = 0))), N(t), t.avail_out === 0)) return v.last_flush = -1, h;
        }
        return F !== x ? h : v.wrap <= 0 ? 1 : (v.wrap === 2 ? (et(v, 255 & t.adler), et(v, t.adler >> 8 & 255), et(v, t.adler >> 16 & 255), et(v, t.adler >> 24 & 255), et(v, 255 & t.total_in), et(v, t.total_in >> 8 & 255), et(v, t.total_in >> 16 & 255), et(v, t.total_in >> 24 & 255)) : (q(v, t.adler >>> 16), q(v, 65535 & t.adler)), N(t), 0 < v.wrap && (v.wrap = -v.wrap), v.pending !== 0 ? h : 1);
      }, f.deflateEnd = function(t) {
        var F;
        return t && t.state ? (F = t.state.status) !== S && F !== 69 && F !== 73 && F !== 91 && F !== 103 && F !== D && F !== 666 ? ot(t, y) : (t.state = null, F === D ? ot(t, -3) : h) : y;
      }, f.deflateSetDictionary = function(t, F) {
        var I, v, m, C, $, H, O, G, J = F.length;
        if (!t || !t.state || (C = (I = t.state).wrap) === 2 || C === 1 && I.status !== S || I.lookahead) return y;
        for (C === 1 && (t.adler = l(t.adler, F, J, 0)), I.wrap = 0, J >= I.w_size && (C === 0 && (Q(I.head), I.strstart = 0, I.block_start = 0, I.insert = 0), G = new s.Buf8(I.w_size), s.arraySet(G, F, J - I.w_size, I.w_size, 0), F = G, J = I.w_size), $ = t.avail_in, H = t.next_in, O = t.input, t.avail_in = J, t.next_in = 0, t.input = F, gt(I); I.lookahead >= z; ) {
          for (v = I.strstart, m = I.lookahead - (z - 1); I.ins_h = (I.ins_h << I.hash_shift ^ I.window[v + z - 1]) & I.hash_mask, I.prev[v & I.w_mask] = I.head[I.ins_h], I.head[I.ins_h] = v, v++, --m; ) ;
          I.strstart = v, I.lookahead = z - 1, gt(I);
        }
        return I.strstart += I.lookahead, I.block_start = I.strstart, I.insert = I.lookahead, I.lookahead = 0, I.match_length = I.prev_length = z - 1, I.match_available = 0, t.next_in = H, t.input = O, t.avail_in = $, I.wrap = C, h;
      }, f.deflateInfo = "pako deflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(n, d, f) {
      d.exports = function() {
        this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
      };
    }, {}], 48: [function(n, d, f) {
      d.exports = function(r, s) {
        var i, l, _, k, b, x, h, y, c, g, p, w, E, T, R, L, P, W, z, Z, nt, S, D, a, U;
        i = r.state, l = r.next_in, a = r.input, _ = l + (r.avail_in - 5), k = r.next_out, U = r.output, b = k - (s - r.avail_out), x = k + (r.avail_out - 257), h = i.dmax, y = i.wsize, c = i.whave, g = i.wnext, p = i.window, w = i.hold, E = i.bits, T = i.lencode, R = i.distcode, L = (1 << i.lenbits) - 1, P = (1 << i.distbits) - 1;
        t: do {
          E < 15 && (w += a[l++] << E, E += 8, w += a[l++] << E, E += 8), W = T[w & L];
          e: for (; ; ) {
            if (w >>>= z = W >>> 24, E -= z, (z = W >>> 16 & 255) === 0) U[k++] = 65535 & W;
            else {
              if (!(16 & z)) {
                if (!(64 & z)) {
                  W = T[(65535 & W) + (w & (1 << z) - 1)];
                  continue e;
                }
                if (32 & z) {
                  i.mode = 12;
                  break t;
                }
                r.msg = "invalid literal/length code", i.mode = 30;
                break t;
              }
              Z = 65535 & W, (z &= 15) && (E < z && (w += a[l++] << E, E += 8), Z += w & (1 << z) - 1, w >>>= z, E -= z), E < 15 && (w += a[l++] << E, E += 8, w += a[l++] << E, E += 8), W = R[w & P];
              r: for (; ; ) {
                if (w >>>= z = W >>> 24, E -= z, !(16 & (z = W >>> 16 & 255))) {
                  if (!(64 & z)) {
                    W = R[(65535 & W) + (w & (1 << z) - 1)];
                    continue r;
                  }
                  r.msg = "invalid distance code", i.mode = 30;
                  break t;
                }
                if (nt = 65535 & W, E < (z &= 15) && (w += a[l++] << E, (E += 8) < z && (w += a[l++] << E, E += 8)), h < (nt += w & (1 << z) - 1)) {
                  r.msg = "invalid distance too far back", i.mode = 30;
                  break t;
                }
                if (w >>>= z, E -= z, (z = k - b) < nt) {
                  if (c < (z = nt - z) && i.sane) {
                    r.msg = "invalid distance too far back", i.mode = 30;
                    break t;
                  }
                  if (D = p, (S = 0) === g) {
                    if (S += y - z, z < Z) {
                      for (Z -= z; U[k++] = p[S++], --z; ) ;
                      S = k - nt, D = U;
                    }
                  } else if (g < z) {
                    if (S += y + g - z, (z -= g) < Z) {
                      for (Z -= z; U[k++] = p[S++], --z; ) ;
                      if (S = 0, g < Z) {
                        for (Z -= z = g; U[k++] = p[S++], --z; ) ;
                        S = k - nt, D = U;
                      }
                    }
                  } else if (S += g - z, z < Z) {
                    for (Z -= z; U[k++] = p[S++], --z; ) ;
                    S = k - nt, D = U;
                  }
                  for (; 2 < Z; ) U[k++] = D[S++], U[k++] = D[S++], U[k++] = D[S++], Z -= 3;
                  Z && (U[k++] = D[S++], 1 < Z && (U[k++] = D[S++]));
                } else {
                  for (S = k - nt; U[k++] = U[S++], U[k++] = U[S++], U[k++] = U[S++], 2 < (Z -= 3); ) ;
                  Z && (U[k++] = U[S++], 1 < Z && (U[k++] = U[S++]));
                }
                break;
              }
            }
            break;
          }
        } while (l < _ && k < x);
        l -= Z = E >> 3, w &= (1 << (E -= Z << 3)) - 1, r.next_in = l, r.next_out = k, r.avail_in = l < _ ? _ - l + 5 : 5 - (l - _), r.avail_out = k < x ? x - k + 257 : 257 - (k - x), i.hold = w, i.bits = E;
      };
    }, {}], 49: [function(n, d, f) {
      var r = n("../utils/common"), s = n("./adler32"), i = n("./crc32"), l = n("./inffast"), _ = n("./inftrees"), k = 1, b = 2, x = 0, h = -2, y = 1, c = 852, g = 592;
      function p(S) {
        return (S >>> 24 & 255) + (S >>> 8 & 65280) + ((65280 & S) << 8) + ((255 & S) << 24);
      }
      function w() {
        this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new r.Buf16(320), this.work = new r.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
      }
      function E(S) {
        var D;
        return S && S.state ? (D = S.state, S.total_in = S.total_out = D.total = 0, S.msg = "", D.wrap && (S.adler = 1 & D.wrap), D.mode = y, D.last = 0, D.havedict = 0, D.dmax = 32768, D.head = null, D.hold = 0, D.bits = 0, D.lencode = D.lendyn = new r.Buf32(c), D.distcode = D.distdyn = new r.Buf32(g), D.sane = 1, D.back = -1, x) : h;
      }
      function T(S) {
        var D;
        return S && S.state ? ((D = S.state).wsize = 0, D.whave = 0, D.wnext = 0, E(S)) : h;
      }
      function R(S, D) {
        var a, U;
        return S && S.state ? (U = S.state, D < 0 ? (a = 0, D = -D) : (a = 1 + (D >> 4), D < 48 && (D &= 15)), D && (D < 8 || 15 < D) ? h : (U.window !== null && U.wbits !== D && (U.window = null), U.wrap = a, U.wbits = D, T(S))) : h;
      }
      function L(S, D) {
        var a, U;
        return S ? (U = new w(), (S.state = U).window = null, (a = R(S, D)) !== x && (S.state = null), a) : h;
      }
      var P, W, z = !0;
      function Z(S) {
        if (z) {
          var D;
          for (P = new r.Buf32(512), W = new r.Buf32(32), D = 0; D < 144; ) S.lens[D++] = 8;
          for (; D < 256; ) S.lens[D++] = 9;
          for (; D < 280; ) S.lens[D++] = 7;
          for (; D < 288; ) S.lens[D++] = 8;
          for (_(k, S.lens, 0, 288, P, 0, S.work, { bits: 9 }), D = 0; D < 32; ) S.lens[D++] = 5;
          _(b, S.lens, 0, 32, W, 0, S.work, { bits: 5 }), z = !1;
        }
        S.lencode = P, S.lenbits = 9, S.distcode = W, S.distbits = 5;
      }
      function nt(S, D, a, U) {
        var it, V = S.state;
        return V.window === null && (V.wsize = 1 << V.wbits, V.wnext = 0, V.whave = 0, V.window = new r.Buf8(V.wsize)), U >= V.wsize ? (r.arraySet(V.window, D, a - V.wsize, V.wsize, 0), V.wnext = 0, V.whave = V.wsize) : (U < (it = V.wsize - V.wnext) && (it = U), r.arraySet(V.window, D, a - U, it, V.wnext), (U -= it) ? (r.arraySet(V.window, D, a - U, U, 0), V.wnext = U, V.whave = V.wsize) : (V.wnext += it, V.wnext === V.wsize && (V.wnext = 0), V.whave < V.wsize && (V.whave += it))), 0;
      }
      f.inflateReset = T, f.inflateReset2 = R, f.inflateResetKeep = E, f.inflateInit = function(S) {
        return L(S, 15);
      }, f.inflateInit2 = L, f.inflate = function(S, D) {
        var a, U, it, V, ot, Y, Q, N, j, et, q, K, gt, wt, at, lt, mt, yt, _t, kt, t, F, I, v, m = 0, C = new r.Buf8(4), $ = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
        if (!S || !S.state || !S.output || !S.input && S.avail_in !== 0) return h;
        (a = S.state).mode === 12 && (a.mode = 13), ot = S.next_out, it = S.output, Q = S.avail_out, V = S.next_in, U = S.input, Y = S.avail_in, N = a.hold, j = a.bits, et = Y, q = Q, F = x;
        t: for (; ; ) switch (a.mode) {
          case y:
            if (a.wrap === 0) {
              a.mode = 13;
              break;
            }
            for (; j < 16; ) {
              if (Y === 0) break t;
              Y--, N += U[V++] << j, j += 8;
            }
            if (2 & a.wrap && N === 35615) {
              C[a.check = 0] = 255 & N, C[1] = N >>> 8 & 255, a.check = i(a.check, C, 2, 0), j = N = 0, a.mode = 2;
              break;
            }
            if (a.flags = 0, a.head && (a.head.done = !1), !(1 & a.wrap) || (((255 & N) << 8) + (N >> 8)) % 31) {
              S.msg = "incorrect header check", a.mode = 30;
              break;
            }
            if ((15 & N) != 8) {
              S.msg = "unknown compression method", a.mode = 30;
              break;
            }
            if (j -= 4, t = 8 + (15 & (N >>>= 4)), a.wbits === 0) a.wbits = t;
            else if (t > a.wbits) {
              S.msg = "invalid window size", a.mode = 30;
              break;
            }
            a.dmax = 1 << t, S.adler = a.check = 1, a.mode = 512 & N ? 10 : 12, j = N = 0;
            break;
          case 2:
            for (; j < 16; ) {
              if (Y === 0) break t;
              Y--, N += U[V++] << j, j += 8;
            }
            if (a.flags = N, (255 & a.flags) != 8) {
              S.msg = "unknown compression method", a.mode = 30;
              break;
            }
            if (57344 & a.flags) {
              S.msg = "unknown header flags set", a.mode = 30;
              break;
            }
            a.head && (a.head.text = N >> 8 & 1), 512 & a.flags && (C[0] = 255 & N, C[1] = N >>> 8 & 255, a.check = i(a.check, C, 2, 0)), j = N = 0, a.mode = 3;
          case 3:
            for (; j < 32; ) {
              if (Y === 0) break t;
              Y--, N += U[V++] << j, j += 8;
            }
            a.head && (a.head.time = N), 512 & a.flags && (C[0] = 255 & N, C[1] = N >>> 8 & 255, C[2] = N >>> 16 & 255, C[3] = N >>> 24 & 255, a.check = i(a.check, C, 4, 0)), j = N = 0, a.mode = 4;
          case 4:
            for (; j < 16; ) {
              if (Y === 0) break t;
              Y--, N += U[V++] << j, j += 8;
            }
            a.head && (a.head.xflags = 255 & N, a.head.os = N >> 8), 512 & a.flags && (C[0] = 255 & N, C[1] = N >>> 8 & 255, a.check = i(a.check, C, 2, 0)), j = N = 0, a.mode = 5;
          case 5:
            if (1024 & a.flags) {
              for (; j < 16; ) {
                if (Y === 0) break t;
                Y--, N += U[V++] << j, j += 8;
              }
              a.length = N, a.head && (a.head.extra_len = N), 512 & a.flags && (C[0] = 255 & N, C[1] = N >>> 8 & 255, a.check = i(a.check, C, 2, 0)), j = N = 0;
            } else a.head && (a.head.extra = null);
            a.mode = 6;
          case 6:
            if (1024 & a.flags && (Y < (K = a.length) && (K = Y), K && (a.head && (t = a.head.extra_len - a.length, a.head.extra || (a.head.extra = new Array(a.head.extra_len)), r.arraySet(a.head.extra, U, V, K, t)), 512 & a.flags && (a.check = i(a.check, U, K, V)), Y -= K, V += K, a.length -= K), a.length)) break t;
            a.length = 0, a.mode = 7;
          case 7:
            if (2048 & a.flags) {
              if (Y === 0) break t;
              for (K = 0; t = U[V + K++], a.head && t && a.length < 65536 && (a.head.name += String.fromCharCode(t)), t && K < Y; ) ;
              if (512 & a.flags && (a.check = i(a.check, U, K, V)), Y -= K, V += K, t) break t;
            } else a.head && (a.head.name = null);
            a.length = 0, a.mode = 8;
          case 8:
            if (4096 & a.flags) {
              if (Y === 0) break t;
              for (K = 0; t = U[V + K++], a.head && t && a.length < 65536 && (a.head.comment += String.fromCharCode(t)), t && K < Y; ) ;
              if (512 & a.flags && (a.check = i(a.check, U, K, V)), Y -= K, V += K, t) break t;
            } else a.head && (a.head.comment = null);
            a.mode = 9;
          case 9:
            if (512 & a.flags) {
              for (; j < 16; ) {
                if (Y === 0) break t;
                Y--, N += U[V++] << j, j += 8;
              }
              if (N !== (65535 & a.check)) {
                S.msg = "header crc mismatch", a.mode = 30;
                break;
              }
              j = N = 0;
            }
            a.head && (a.head.hcrc = a.flags >> 9 & 1, a.head.done = !0), S.adler = a.check = 0, a.mode = 12;
            break;
          case 10:
            for (; j < 32; ) {
              if (Y === 0) break t;
              Y--, N += U[V++] << j, j += 8;
            }
            S.adler = a.check = p(N), j = N = 0, a.mode = 11;
          case 11:
            if (a.havedict === 0) return S.next_out = ot, S.avail_out = Q, S.next_in = V, S.avail_in = Y, a.hold = N, a.bits = j, 2;
            S.adler = a.check = 1, a.mode = 12;
          case 12:
            if (D === 5 || D === 6) break t;
          case 13:
            if (a.last) {
              N >>>= 7 & j, j -= 7 & j, a.mode = 27;
              break;
            }
            for (; j < 3; ) {
              if (Y === 0) break t;
              Y--, N += U[V++] << j, j += 8;
            }
            switch (a.last = 1 & N, j -= 1, 3 & (N >>>= 1)) {
              case 0:
                a.mode = 14;
                break;
              case 1:
                if (Z(a), a.mode = 20, D !== 6) break;
                N >>>= 2, j -= 2;
                break t;
              case 2:
                a.mode = 17;
                break;
              case 3:
                S.msg = "invalid block type", a.mode = 30;
            }
            N >>>= 2, j -= 2;
            break;
          case 14:
            for (N >>>= 7 & j, j -= 7 & j; j < 32; ) {
              if (Y === 0) break t;
              Y--, N += U[V++] << j, j += 8;
            }
            if ((65535 & N) != (N >>> 16 ^ 65535)) {
              S.msg = "invalid stored block lengths", a.mode = 30;
              break;
            }
            if (a.length = 65535 & N, j = N = 0, a.mode = 15, D === 6) break t;
          case 15:
            a.mode = 16;
          case 16:
            if (K = a.length) {
              if (Y < K && (K = Y), Q < K && (K = Q), K === 0) break t;
              r.arraySet(it, U, V, K, ot), Y -= K, V += K, Q -= K, ot += K, a.length -= K;
              break;
            }
            a.mode = 12;
            break;
          case 17:
            for (; j < 14; ) {
              if (Y === 0) break t;
              Y--, N += U[V++] << j, j += 8;
            }
            if (a.nlen = 257 + (31 & N), N >>>= 5, j -= 5, a.ndist = 1 + (31 & N), N >>>= 5, j -= 5, a.ncode = 4 + (15 & N), N >>>= 4, j -= 4, 286 < a.nlen || 30 < a.ndist) {
              S.msg = "too many length or distance symbols", a.mode = 30;
              break;
            }
            a.have = 0, a.mode = 18;
          case 18:
            for (; a.have < a.ncode; ) {
              for (; j < 3; ) {
                if (Y === 0) break t;
                Y--, N += U[V++] << j, j += 8;
              }
              a.lens[$[a.have++]] = 7 & N, N >>>= 3, j -= 3;
            }
            for (; a.have < 19; ) a.lens[$[a.have++]] = 0;
            if (a.lencode = a.lendyn, a.lenbits = 7, I = { bits: a.lenbits }, F = _(0, a.lens, 0, 19, a.lencode, 0, a.work, I), a.lenbits = I.bits, F) {
              S.msg = "invalid code lengths set", a.mode = 30;
              break;
            }
            a.have = 0, a.mode = 19;
          case 19:
            for (; a.have < a.nlen + a.ndist; ) {
              for (; lt = (m = a.lencode[N & (1 << a.lenbits) - 1]) >>> 16 & 255, mt = 65535 & m, !((at = m >>> 24) <= j); ) {
                if (Y === 0) break t;
                Y--, N += U[V++] << j, j += 8;
              }
              if (mt < 16) N >>>= at, j -= at, a.lens[a.have++] = mt;
              else {
                if (mt === 16) {
                  for (v = at + 2; j < v; ) {
                    if (Y === 0) break t;
                    Y--, N += U[V++] << j, j += 8;
                  }
                  if (N >>>= at, j -= at, a.have === 0) {
                    S.msg = "invalid bit length repeat", a.mode = 30;
                    break;
                  }
                  t = a.lens[a.have - 1], K = 3 + (3 & N), N >>>= 2, j -= 2;
                } else if (mt === 17) {
                  for (v = at + 3; j < v; ) {
                    if (Y === 0) break t;
                    Y--, N += U[V++] << j, j += 8;
                  }
                  j -= at, t = 0, K = 3 + (7 & (N >>>= at)), N >>>= 3, j -= 3;
                } else {
                  for (v = at + 7; j < v; ) {
                    if (Y === 0) break t;
                    Y--, N += U[V++] << j, j += 8;
                  }
                  j -= at, t = 0, K = 11 + (127 & (N >>>= at)), N >>>= 7, j -= 7;
                }
                if (a.have + K > a.nlen + a.ndist) {
                  S.msg = "invalid bit length repeat", a.mode = 30;
                  break;
                }
                for (; K--; ) a.lens[a.have++] = t;
              }
            }
            if (a.mode === 30) break;
            if (a.lens[256] === 0) {
              S.msg = "invalid code -- missing end-of-block", a.mode = 30;
              break;
            }
            if (a.lenbits = 9, I = { bits: a.lenbits }, F = _(k, a.lens, 0, a.nlen, a.lencode, 0, a.work, I), a.lenbits = I.bits, F) {
              S.msg = "invalid literal/lengths set", a.mode = 30;
              break;
            }
            if (a.distbits = 6, a.distcode = a.distdyn, I = { bits: a.distbits }, F = _(b, a.lens, a.nlen, a.ndist, a.distcode, 0, a.work, I), a.distbits = I.bits, F) {
              S.msg = "invalid distances set", a.mode = 30;
              break;
            }
            if (a.mode = 20, D === 6) break t;
          case 20:
            a.mode = 21;
          case 21:
            if (6 <= Y && 258 <= Q) {
              S.next_out = ot, S.avail_out = Q, S.next_in = V, S.avail_in = Y, a.hold = N, a.bits = j, l(S, q), ot = S.next_out, it = S.output, Q = S.avail_out, V = S.next_in, U = S.input, Y = S.avail_in, N = a.hold, j = a.bits, a.mode === 12 && (a.back = -1);
              break;
            }
            for (a.back = 0; lt = (m = a.lencode[N & (1 << a.lenbits) - 1]) >>> 16 & 255, mt = 65535 & m, !((at = m >>> 24) <= j); ) {
              if (Y === 0) break t;
              Y--, N += U[V++] << j, j += 8;
            }
            if (lt && !(240 & lt)) {
              for (yt = at, _t = lt, kt = mt; lt = (m = a.lencode[kt + ((N & (1 << yt + _t) - 1) >> yt)]) >>> 16 & 255, mt = 65535 & m, !(yt + (at = m >>> 24) <= j); ) {
                if (Y === 0) break t;
                Y--, N += U[V++] << j, j += 8;
              }
              N >>>= yt, j -= yt, a.back += yt;
            }
            if (N >>>= at, j -= at, a.back += at, a.length = mt, lt === 0) {
              a.mode = 26;
              break;
            }
            if (32 & lt) {
              a.back = -1, a.mode = 12;
              break;
            }
            if (64 & lt) {
              S.msg = "invalid literal/length code", a.mode = 30;
              break;
            }
            a.extra = 15 & lt, a.mode = 22;
          case 22:
            if (a.extra) {
              for (v = a.extra; j < v; ) {
                if (Y === 0) break t;
                Y--, N += U[V++] << j, j += 8;
              }
              a.length += N & (1 << a.extra) - 1, N >>>= a.extra, j -= a.extra, a.back += a.extra;
            }
            a.was = a.length, a.mode = 23;
          case 23:
            for (; lt = (m = a.distcode[N & (1 << a.distbits) - 1]) >>> 16 & 255, mt = 65535 & m, !((at = m >>> 24) <= j); ) {
              if (Y === 0) break t;
              Y--, N += U[V++] << j, j += 8;
            }
            if (!(240 & lt)) {
              for (yt = at, _t = lt, kt = mt; lt = (m = a.distcode[kt + ((N & (1 << yt + _t) - 1) >> yt)]) >>> 16 & 255, mt = 65535 & m, !(yt + (at = m >>> 24) <= j); ) {
                if (Y === 0) break t;
                Y--, N += U[V++] << j, j += 8;
              }
              N >>>= yt, j -= yt, a.back += yt;
            }
            if (N >>>= at, j -= at, a.back += at, 64 & lt) {
              S.msg = "invalid distance code", a.mode = 30;
              break;
            }
            a.offset = mt, a.extra = 15 & lt, a.mode = 24;
          case 24:
            if (a.extra) {
              for (v = a.extra; j < v; ) {
                if (Y === 0) break t;
                Y--, N += U[V++] << j, j += 8;
              }
              a.offset += N & (1 << a.extra) - 1, N >>>= a.extra, j -= a.extra, a.back += a.extra;
            }
            if (a.offset > a.dmax) {
              S.msg = "invalid distance too far back", a.mode = 30;
              break;
            }
            a.mode = 25;
          case 25:
            if (Q === 0) break t;
            if (K = q - Q, a.offset > K) {
              if ((K = a.offset - K) > a.whave && a.sane) {
                S.msg = "invalid distance too far back", a.mode = 30;
                break;
              }
              gt = K > a.wnext ? (K -= a.wnext, a.wsize - K) : a.wnext - K, K > a.length && (K = a.length), wt = a.window;
            } else wt = it, gt = ot - a.offset, K = a.length;
            for (Q < K && (K = Q), Q -= K, a.length -= K; it[ot++] = wt[gt++], --K; ) ;
            a.length === 0 && (a.mode = 21);
            break;
          case 26:
            if (Q === 0) break t;
            it[ot++] = a.length, Q--, a.mode = 21;
            break;
          case 27:
            if (a.wrap) {
              for (; j < 32; ) {
                if (Y === 0) break t;
                Y--, N |= U[V++] << j, j += 8;
              }
              if (q -= Q, S.total_out += q, a.total += q, q && (S.adler = a.check = a.flags ? i(a.check, it, q, ot - q) : s(a.check, it, q, ot - q)), q = Q, (a.flags ? N : p(N)) !== a.check) {
                S.msg = "incorrect data check", a.mode = 30;
                break;
              }
              j = N = 0;
            }
            a.mode = 28;
          case 28:
            if (a.wrap && a.flags) {
              for (; j < 32; ) {
                if (Y === 0) break t;
                Y--, N += U[V++] << j, j += 8;
              }
              if (N !== (4294967295 & a.total)) {
                S.msg = "incorrect length check", a.mode = 30;
                break;
              }
              j = N = 0;
            }
            a.mode = 29;
          case 29:
            F = 1;
            break t;
          case 30:
            F = -3;
            break t;
          case 31:
            return -4;
          case 32:
          default:
            return h;
        }
        return S.next_out = ot, S.avail_out = Q, S.next_in = V, S.avail_in = Y, a.hold = N, a.bits = j, (a.wsize || q !== S.avail_out && a.mode < 30 && (a.mode < 27 || D !== 4)) && nt(S, S.output, S.next_out, q - S.avail_out) ? (a.mode = 31, -4) : (et -= S.avail_in, q -= S.avail_out, S.total_in += et, S.total_out += q, a.total += q, a.wrap && q && (S.adler = a.check = a.flags ? i(a.check, it, q, S.next_out - q) : s(a.check, it, q, S.next_out - q)), S.data_type = a.bits + (a.last ? 64 : 0) + (a.mode === 12 ? 128 : 0) + (a.mode === 20 || a.mode === 15 ? 256 : 0), (et == 0 && q === 0 || D === 4) && F === x && (F = -5), F);
      }, f.inflateEnd = function(S) {
        if (!S || !S.state) return h;
        var D = S.state;
        return D.window && (D.window = null), S.state = null, x;
      }, f.inflateGetHeader = function(S, D) {
        var a;
        return S && S.state && 2 & (a = S.state).wrap ? ((a.head = D).done = !1, x) : h;
      }, f.inflateSetDictionary = function(S, D) {
        var a, U = D.length;
        return S && S.state ? (a = S.state).wrap !== 0 && a.mode !== 11 ? h : a.mode === 11 && s(1, D, U, 0) !== a.check ? -3 : nt(S, D, U, U) ? (a.mode = 31, -4) : (a.havedict = 1, x) : h;
      }, f.inflateInfo = "pako inflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(n, d, f) {
      var r = n("../utils/common"), s = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], i = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], l = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], _ = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
      d.exports = function(k, b, x, h, y, c, g, p) {
        var w, E, T, R, L, P, W, z, Z, nt = p.bits, S = 0, D = 0, a = 0, U = 0, it = 0, V = 0, ot = 0, Y = 0, Q = 0, N = 0, j = null, et = 0, q = new r.Buf16(16), K = new r.Buf16(16), gt = null, wt = 0;
        for (S = 0; S <= 15; S++) q[S] = 0;
        for (D = 0; D < h; D++) q[b[x + D]]++;
        for (it = nt, U = 15; 1 <= U && q[U] === 0; U--) ;
        if (U < it && (it = U), U === 0) return y[c++] = 20971520, y[c++] = 20971520, p.bits = 1, 0;
        for (a = 1; a < U && q[a] === 0; a++) ;
        for (it < a && (it = a), S = Y = 1; S <= 15; S++) if (Y <<= 1, (Y -= q[S]) < 0) return -1;
        if (0 < Y && (k === 0 || U !== 1)) return -1;
        for (K[1] = 0, S = 1; S < 15; S++) K[S + 1] = K[S] + q[S];
        for (D = 0; D < h; D++) b[x + D] !== 0 && (g[K[b[x + D]]++] = D);
        if (P = k === 0 ? (j = gt = g, 19) : k === 1 ? (j = s, et -= 257, gt = i, wt -= 257, 256) : (j = l, gt = _, -1), S = a, L = c, ot = D = N = 0, T = -1, R = (Q = 1 << (V = it)) - 1, k === 1 && 852 < Q || k === 2 && 592 < Q) return 1;
        for (; ; ) {
          for (W = S - ot, Z = g[D] < P ? (z = 0, g[D]) : g[D] > P ? (z = gt[wt + g[D]], j[et + g[D]]) : (z = 96, 0), w = 1 << S - ot, a = E = 1 << V; y[L + (N >> ot) + (E -= w)] = W << 24 | z << 16 | Z | 0, E !== 0; ) ;
          for (w = 1 << S - 1; N & w; ) w >>= 1;
          if (w !== 0 ? (N &= w - 1, N += w) : N = 0, D++, --q[S] == 0) {
            if (S === U) break;
            S = b[x + g[D]];
          }
          if (it < S && (N & R) !== T) {
            for (ot === 0 && (ot = it), L += a, Y = 1 << (V = S - ot); V + ot < U && !((Y -= q[V + ot]) <= 0); ) V++, Y <<= 1;
            if (Q += 1 << V, k === 1 && 852 < Q || k === 2 && 592 < Q) return 1;
            y[T = N & R] = it << 24 | V << 16 | L - c | 0;
          }
        }
        return N !== 0 && (y[L + N] = S - ot << 24 | 64 << 16 | 0), p.bits = it, 0;
      };
    }, { "../utils/common": 41 }], 51: [function(n, d, f) {
      d.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
    }, {}], 52: [function(n, d, f) {
      var r = n("../utils/common"), s = 0, i = 1;
      function l(m) {
        for (var C = m.length; 0 <= --C; ) m[C] = 0;
      }
      var _ = 0, k = 29, b = 256, x = b + 1 + k, h = 30, y = 19, c = 2 * x + 1, g = 15, p = 16, w = 7, E = 256, T = 16, R = 17, L = 18, P = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], W = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], z = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], Z = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], nt = new Array(2 * (x + 2));
      l(nt);
      var S = new Array(2 * h);
      l(S);
      var D = new Array(512);
      l(D);
      var a = new Array(256);
      l(a);
      var U = new Array(k);
      l(U);
      var it, V, ot, Y = new Array(h);
      function Q(m, C, $, H, O) {
        this.static_tree = m, this.extra_bits = C, this.extra_base = $, this.elems = H, this.max_length = O, this.has_stree = m && m.length;
      }
      function N(m, C) {
        this.dyn_tree = m, this.max_code = 0, this.stat_desc = C;
      }
      function j(m) {
        return m < 256 ? D[m] : D[256 + (m >>> 7)];
      }
      function et(m, C) {
        m.pending_buf[m.pending++] = 255 & C, m.pending_buf[m.pending++] = C >>> 8 & 255;
      }
      function q(m, C, $) {
        m.bi_valid > p - $ ? (m.bi_buf |= C << m.bi_valid & 65535, et(m, m.bi_buf), m.bi_buf = C >> p - m.bi_valid, m.bi_valid += $ - p) : (m.bi_buf |= C << m.bi_valid & 65535, m.bi_valid += $);
      }
      function K(m, C, $) {
        q(m, $[2 * C], $[2 * C + 1]);
      }
      function gt(m, C) {
        for (var $ = 0; $ |= 1 & m, m >>>= 1, $ <<= 1, 0 < --C; ) ;
        return $ >>> 1;
      }
      function wt(m, C, $) {
        var H, O, G = new Array(g + 1), J = 0;
        for (H = 1; H <= g; H++) G[H] = J = J + $[H - 1] << 1;
        for (O = 0; O <= C; O++) {
          var X = m[2 * O + 1];
          X !== 0 && (m[2 * O] = gt(G[X]++, X));
        }
      }
      function at(m) {
        var C;
        for (C = 0; C < x; C++) m.dyn_ltree[2 * C] = 0;
        for (C = 0; C < h; C++) m.dyn_dtree[2 * C] = 0;
        for (C = 0; C < y; C++) m.bl_tree[2 * C] = 0;
        m.dyn_ltree[2 * E] = 1, m.opt_len = m.static_len = 0, m.last_lit = m.matches = 0;
      }
      function lt(m) {
        8 < m.bi_valid ? et(m, m.bi_buf) : 0 < m.bi_valid && (m.pending_buf[m.pending++] = m.bi_buf), m.bi_buf = 0, m.bi_valid = 0;
      }
      function mt(m, C, $, H) {
        var O = 2 * C, G = 2 * $;
        return m[O] < m[G] || m[O] === m[G] && H[C] <= H[$];
      }
      function yt(m, C, $) {
        for (var H = m.heap[$], O = $ << 1; O <= m.heap_len && (O < m.heap_len && mt(C, m.heap[O + 1], m.heap[O], m.depth) && O++, !mt(C, H, m.heap[O], m.depth)); ) m.heap[$] = m.heap[O], $ = O, O <<= 1;
        m.heap[$] = H;
      }
      function _t(m, C, $) {
        var H, O, G, J, X = 0;
        if (m.last_lit !== 0) for (; H = m.pending_buf[m.d_buf + 2 * X] << 8 | m.pending_buf[m.d_buf + 2 * X + 1], O = m.pending_buf[m.l_buf + X], X++, H === 0 ? K(m, O, C) : (K(m, (G = a[O]) + b + 1, C), (J = P[G]) !== 0 && q(m, O -= U[G], J), K(m, G = j(--H), $), (J = W[G]) !== 0 && q(m, H -= Y[G], J)), X < m.last_lit; ) ;
        K(m, E, C);
      }
      function kt(m, C) {
        var $, H, O, G = C.dyn_tree, J = C.stat_desc.static_tree, X = C.stat_desc.has_stree, rt = C.stat_desc.elems, ht = -1;
        for (m.heap_len = 0, m.heap_max = c, $ = 0; $ < rt; $++) G[2 * $] !== 0 ? (m.heap[++m.heap_len] = ht = $, m.depth[$] = 0) : G[2 * $ + 1] = 0;
        for (; m.heap_len < 2; ) G[2 * (O = m.heap[++m.heap_len] = ht < 2 ? ++ht : 0)] = 1, m.depth[O] = 0, m.opt_len--, X && (m.static_len -= J[2 * O + 1]);
        for (C.max_code = ht, $ = m.heap_len >> 1; 1 <= $; $--) yt(m, G, $);
        for (O = rt; $ = m.heap[1], m.heap[1] = m.heap[m.heap_len--], yt(m, G, 1), H = m.heap[1], m.heap[--m.heap_max] = $, m.heap[--m.heap_max] = H, G[2 * O] = G[2 * $] + G[2 * H], m.depth[O] = (m.depth[$] >= m.depth[H] ? m.depth[$] : m.depth[H]) + 1, G[2 * $ + 1] = G[2 * H + 1] = O, m.heap[1] = O++, yt(m, G, 1), 2 <= m.heap_len; ) ;
        m.heap[--m.heap_max] = m.heap[1], function(ut, Et) {
          var Dt, Rt, Ut, vt, Ft, $t, Tt = Et.dyn_tree, Ht = Et.max_code, Mt = Et.stat_desc.static_tree, Wt = Et.stat_desc.has_stree, It = Et.stat_desc.extra_bits, Bt = Et.stat_desc.extra_base, jt = Et.stat_desc.max_length, Pt = 0;
          for (vt = 0; vt <= g; vt++) ut.bl_count[vt] = 0;
          for (Tt[2 * ut.heap[ut.heap_max] + 1] = 0, Dt = ut.heap_max + 1; Dt < c; Dt++) jt < (vt = Tt[2 * Tt[2 * (Rt = ut.heap[Dt]) + 1] + 1] + 1) && (vt = jt, Pt++), Tt[2 * Rt + 1] = vt, Ht < Rt || (ut.bl_count[vt]++, Ft = 0, Bt <= Rt && (Ft = It[Rt - Bt]), $t = Tt[2 * Rt], ut.opt_len += $t * (vt + Ft), Wt && (ut.static_len += $t * (Mt[2 * Rt + 1] + Ft)));
          if (Pt !== 0) {
            do {
              for (vt = jt - 1; ut.bl_count[vt] === 0; ) vt--;
              ut.bl_count[vt]--, ut.bl_count[vt + 1] += 2, ut.bl_count[jt]--, Pt -= 2;
            } while (0 < Pt);
            for (vt = jt; vt !== 0; vt--) for (Rt = ut.bl_count[vt]; Rt !== 0; ) Ht < (Ut = ut.heap[--Dt]) || (Tt[2 * Ut + 1] !== vt && (ut.opt_len += (vt - Tt[2 * Ut + 1]) * Tt[2 * Ut], Tt[2 * Ut + 1] = vt), Rt--);
          }
        }(m, C), wt(G, ht, m.bl_count);
      }
      function t(m, C, $) {
        var H, O, G = -1, J = C[1], X = 0, rt = 7, ht = 4;
        for (J === 0 && (rt = 138, ht = 3), C[2 * ($ + 1) + 1] = 65535, H = 0; H <= $; H++) O = J, J = C[2 * (H + 1) + 1], ++X < rt && O === J || (X < ht ? m.bl_tree[2 * O] += X : O !== 0 ? (O !== G && m.bl_tree[2 * O]++, m.bl_tree[2 * T]++) : X <= 10 ? m.bl_tree[2 * R]++ : m.bl_tree[2 * L]++, G = O, ht = (X = 0) === J ? (rt = 138, 3) : O === J ? (rt = 6, 3) : (rt = 7, 4));
      }
      function F(m, C, $) {
        var H, O, G = -1, J = C[1], X = 0, rt = 7, ht = 4;
        for (J === 0 && (rt = 138, ht = 3), H = 0; H <= $; H++) if (O = J, J = C[2 * (H + 1) + 1], !(++X < rt && O === J)) {
          if (X < ht) for (; K(m, O, m.bl_tree), --X != 0; ) ;
          else O !== 0 ? (O !== G && (K(m, O, m.bl_tree), X--), K(m, T, m.bl_tree), q(m, X - 3, 2)) : X <= 10 ? (K(m, R, m.bl_tree), q(m, X - 3, 3)) : (K(m, L, m.bl_tree), q(m, X - 11, 7));
          G = O, ht = (X = 0) === J ? (rt = 138, 3) : O === J ? (rt = 6, 3) : (rt = 7, 4);
        }
      }
      l(Y);
      var I = !1;
      function v(m, C, $, H) {
        q(m, (_ << 1) + (H ? 1 : 0), 3), function(O, G, J, X) {
          lt(O), et(O, J), et(O, ~J), r.arraySet(O.pending_buf, O.window, G, J, O.pending), O.pending += J;
        }(m, C, $);
      }
      f._tr_init = function(m) {
        I || (function() {
          var C, $, H, O, G, J = new Array(g + 1);
          for (O = H = 0; O < k - 1; O++) for (U[O] = H, C = 0; C < 1 << P[O]; C++) a[H++] = O;
          for (a[H - 1] = O, O = G = 0; O < 16; O++) for (Y[O] = G, C = 0; C < 1 << W[O]; C++) D[G++] = O;
          for (G >>= 7; O < h; O++) for (Y[O] = G << 7, C = 0; C < 1 << W[O] - 7; C++) D[256 + G++] = O;
          for ($ = 0; $ <= g; $++) J[$] = 0;
          for (C = 0; C <= 143; ) nt[2 * C + 1] = 8, C++, J[8]++;
          for (; C <= 255; ) nt[2 * C + 1] = 9, C++, J[9]++;
          for (; C <= 279; ) nt[2 * C + 1] = 7, C++, J[7]++;
          for (; C <= 287; ) nt[2 * C + 1] = 8, C++, J[8]++;
          for (wt(nt, x + 1, J), C = 0; C < h; C++) S[2 * C + 1] = 5, S[2 * C] = gt(C, 5);
          it = new Q(nt, P, b + 1, x, g), V = new Q(S, W, 0, h, g), ot = new Q(new Array(0), z, 0, y, w);
        }(), I = !0), m.l_desc = new N(m.dyn_ltree, it), m.d_desc = new N(m.dyn_dtree, V), m.bl_desc = new N(m.bl_tree, ot), m.bi_buf = 0, m.bi_valid = 0, at(m);
      }, f._tr_stored_block = v, f._tr_flush_block = function(m, C, $, H) {
        var O, G, J = 0;
        0 < m.level ? (m.strm.data_type === 2 && (m.strm.data_type = function(X) {
          var rt, ht = 4093624447;
          for (rt = 0; rt <= 31; rt++, ht >>>= 1) if (1 & ht && X.dyn_ltree[2 * rt] !== 0) return s;
          if (X.dyn_ltree[18] !== 0 || X.dyn_ltree[20] !== 0 || X.dyn_ltree[26] !== 0) return i;
          for (rt = 32; rt < b; rt++) if (X.dyn_ltree[2 * rt] !== 0) return i;
          return s;
        }(m)), kt(m, m.l_desc), kt(m, m.d_desc), J = function(X) {
          var rt;
          for (t(X, X.dyn_ltree, X.l_desc.max_code), t(X, X.dyn_dtree, X.d_desc.max_code), kt(X, X.bl_desc), rt = y - 1; 3 <= rt && X.bl_tree[2 * Z[rt] + 1] === 0; rt--) ;
          return X.opt_len += 3 * (rt + 1) + 5 + 5 + 4, rt;
        }(m), O = m.opt_len + 3 + 7 >>> 3, (G = m.static_len + 3 + 7 >>> 3) <= O && (O = G)) : O = G = $ + 5, $ + 4 <= O && C !== -1 ? v(m, C, $, H) : m.strategy === 4 || G === O ? (q(m, 2 + (H ? 1 : 0), 3), _t(m, nt, S)) : (q(m, 4 + (H ? 1 : 0), 3), function(X, rt, ht, ut) {
          var Et;
          for (q(X, rt - 257, 5), q(X, ht - 1, 5), q(X, ut - 4, 4), Et = 0; Et < ut; Et++) q(X, X.bl_tree[2 * Z[Et] + 1], 3);
          F(X, X.dyn_ltree, rt - 1), F(X, X.dyn_dtree, ht - 1);
        }(m, m.l_desc.max_code + 1, m.d_desc.max_code + 1, J + 1), _t(m, m.dyn_ltree, m.dyn_dtree)), at(m), H && lt(m);
      }, f._tr_tally = function(m, C, $) {
        return m.pending_buf[m.d_buf + 2 * m.last_lit] = C >>> 8 & 255, m.pending_buf[m.d_buf + 2 * m.last_lit + 1] = 255 & C, m.pending_buf[m.l_buf + m.last_lit] = 255 & $, m.last_lit++, C === 0 ? m.dyn_ltree[2 * $]++ : (m.matches++, C--, m.dyn_ltree[2 * (a[$] + b + 1)]++, m.dyn_dtree[2 * j(C)]++), m.last_lit === m.lit_bufsize - 1;
      }, f._tr_align = function(m) {
        q(m, 2, 3), K(m, E, nt), function(C) {
          C.bi_valid === 16 ? (et(C, C.bi_buf), C.bi_buf = 0, C.bi_valid = 0) : 8 <= C.bi_valid && (C.pending_buf[C.pending++] = 255 & C.bi_buf, C.bi_buf >>= 8, C.bi_valid -= 8);
        }(m);
      };
    }, { "../utils/common": 41 }], 53: [function(n, d, f) {
      d.exports = function() {
        this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
      };
    }, {}], 54: [function(n, d, f) {
      (function(r) {
        (function(s, i) {
          if (!s.setImmediate) {
            var l, _, k, b, x = 1, h = {}, y = !1, c = s.document, g = Object.getPrototypeOf && Object.getPrototypeOf(s);
            g = g && g.setTimeout ? g : s, l = {}.toString.call(s.process) === "[object process]" ? function(T) {
              process.nextTick(function() {
                w(T);
              });
            } : function() {
              if (s.postMessage && !s.importScripts) {
                var T = !0, R = s.onmessage;
                return s.onmessage = function() {
                  T = !1;
                }, s.postMessage("", "*"), s.onmessage = R, T;
              }
            }() ? (b = "setImmediate$" + Math.random() + "$", s.addEventListener ? s.addEventListener("message", E, !1) : s.attachEvent("onmessage", E), function(T) {
              s.postMessage(b + T, "*");
            }) : s.MessageChannel ? ((k = new MessageChannel()).port1.onmessage = function(T) {
              w(T.data);
            }, function(T) {
              k.port2.postMessage(T);
            }) : c && "onreadystatechange" in c.createElement("script") ? (_ = c.documentElement, function(T) {
              var R = c.createElement("script");
              R.onreadystatechange = function() {
                w(T), R.onreadystatechange = null, _.removeChild(R), R = null;
              }, _.appendChild(R);
            }) : function(T) {
              setTimeout(w, 0, T);
            }, g.setImmediate = function(T) {
              typeof T != "function" && (T = new Function("" + T));
              for (var R = new Array(arguments.length - 1), L = 0; L < R.length; L++) R[L] = arguments[L + 1];
              var P = { callback: T, args: R };
              return h[x] = P, l(x), x++;
            }, g.clearImmediate = p;
          }
          function p(T) {
            delete h[T];
          }
          function w(T) {
            if (y) setTimeout(w, 0, T);
            else {
              var R = h[T];
              if (R) {
                y = !0;
                try {
                  (function(L) {
                    var P = L.callback, W = L.args;
                    switch (W.length) {
                      case 0:
                        P();
                        break;
                      case 1:
                        P(W[0]);
                        break;
                      case 2:
                        P(W[0], W[1]);
                        break;
                      case 3:
                        P(W[0], W[1], W[2]);
                        break;
                      default:
                        P.apply(i, W);
                    }
                  })(R);
                } finally {
                  p(T), y = !1;
                }
              }
            }
          }
          function E(T) {
            T.source === s && typeof T.data == "string" && T.data.indexOf(b) === 0 && w(+T.data.slice(b.length));
          }
        })(typeof self > "u" ? r === void 0 ? this : r : self);
      }).call(this, typeof fe < "u" ? fe : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}] }, {}, [10])(10);
  });
})(Ze);
var lr = Ze.exports;
const cr = /* @__PURE__ */ ar(lr);
function ur(e = {}) {
  const {
    storageKey: u = "page-reviews",
    defaultPagePath: n = () => typeof window < "u" ? window.location.pathname + window.location.search : "/"
  } = e;
  function d() {
    return "rv-" + Date.now() + "-" + Math.random().toString(36).slice(2, 8);
  }
  function f() {
    if (typeof window > "u") return [];
    try {
      const E = window.localStorage.getItem(u);
      return E ? JSON.parse(E) : [];
    } catch {
      return [];
    }
  }
  function r(E) {
    if (!(typeof window > "u"))
      try {
        window.localStorage.setItem(u, JSON.stringify(E));
      } catch {
      }
  }
  const [s, i] = Ct(f), l = dt(() => s, [s]), _ = dt((E) => {
    const T = E || n();
    return s.filter((R) => R.pagePath === T);
  }, [s, n]), k = dt((E) => {
    const T = {
      id: d(),
      ...E,
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    return i((R) => {
      const L = [T, ...R];
      return r(L), L;
    }), T;
  }, []), b = dt((E, T) => {
    i((R) => {
      const L = R.map((P) => P.id === E ? { ...P, ...T } : P);
      return r(L), L;
    });
  }, []), x = dt((E) => {
    i((T) => {
      const R = T.filter((L) => L.id !== E);
      return r(R), R;
    });
  }, []), h = dt((E) => {
    const T = E || n();
    i((R) => {
      const L = R.filter((P) => P.pagePath !== T);
      return r(L), L;
    });
  }, [n]), y = dt(() => {
    i([]), r([]);
  }, []), c = dt(() => ({
    exportTime: (/* @__PURE__ */ new Date()).toISOString(),
    total: s.length,
    reviews: s
  }), [s]), g = dt(() => {
    _e(
      new Blob([JSON.stringify(c(), null, 2)], { type: "application/json" }),
      `page-reviews-${be()}.json`
    );
  }, [c]), p = dt(() => {
    const E = Ie(c());
    _e(
      new Blob([E], { type: "text/markdown" }),
      `page-reviews-${be()}.md`
    );
  }, [c]), w = dt(async () => {
    const E = new cr(), T = c(), R = {
      ...T,
      reviews: T.reviews.map((W) => {
        var z;
        return {
          ...W,
          screenshots: (z = W.screenshots) == null ? void 0 : z.map((Z) => Z.url ? { type: Z.type, filename: Z.filename, url: Z.url } : { type: Z.type, filename: Z.filename, imagePath: `images/${Z.filename}` })
        };
      })
    };
    E.file("review.json", JSON.stringify(R, null, 2)), E.file("review.md", Ie(R));
    const L = E.folder("images");
    for (const W of T.reviews)
      for (const z of W.screenshots || [])
        if (z.data && !z.url) {
          const Z = z.data.replace(/^data:image\/png;base64,/, "");
          L.file(z.filename, Z, { base64: !0 });
        }
    const P = await E.generateAsync({ type: "blob" });
    _e(P, `page-reviews-${be()}.zip`);
  }, [c]);
  return {
    reviews: s,
    allReviews: l,
    getPageReviews: _,
    addReview: k,
    updateReview: b,
    deleteReview: x,
    clearPageReviews: h,
    clearAllReviews: y,
    exportToJSON: g,
    exportToMarkdown: p,
    exportToZIP: w
  };
}
function Ie(e) {
  const u = [
    "# 页面评审报告",
    "",
    `导出时间：${(/* @__PURE__ */ new Date()).toLocaleString()}`,
    `评审总数：${e.total}`,
    ""
  ], n = hr(e.reviews, "pagePath");
  return Object.entries(n).forEach(([d, f]) => {
    u.push(`## 页面：${d}`), u.push(""), f.forEach((r, s) => {
      var i, l;
      u.push(`### ${s + 1}. ${r.title || "未命名评审"}`), u.push(`- **类型**：${r.type === "element" ? "元素评审" : "视图范围评审"}`), u.push(`- **严重等级**：${fr(r.severity)}`), u.push(`- **状态**：${r.status === "resolved" ? "已解决" : "待处理"}`), u.push(`- **窗口尺寸**：${(i = r.viewport) == null ? void 0 : i.width} × ${(l = r.viewport) == null ? void 0 : l.height}`), r.scroll && u.push(`- **滚动位置**：x=${r.scroll.x}, y=${r.scroll.y}`), r.type === "element" && r.elementRect ? (u.push(`- **元素选择器**：\`${r.selector}\``), u.push(`- **元素位置**：x=${r.elementRect.x}, y=${r.elementRect.y}, width=${r.elementRect.width}, height=${r.elementRect.height}`), r.elementText && u.push(`- **元素文本**：${r.elementText}`)) : r.viewportRect && u.push(`- **框选范围**：x=${r.viewportRect.x}, y=${r.viewportRect.y}, width=${r.viewportRect.width}, height=${r.viewportRect.height}`), u.push(`- **评审建议**：${r.suggestion}`), u.push(`- **创建时间**：${new Date(r.createdAt).toLocaleString()}`), r.screenshots && r.screenshots.length > 0 && (u.push(""), u.push("#### 截图"), r.screenshots.forEach((_) => {
        const k = _.url || _.imagePath || `images/${_.filename}`;
        u.push(`![${_.type}](${k})`);
      })), u.push("");
    });
  }), u.join(`
`);
}
function _e(e, u) {
  if (typeof window > "u") return;
  const n = URL.createObjectURL(e), d = document.createElement("a");
  d.href = n, d.download = u, document.body.appendChild(d), d.click(), document.body.removeChild(d), URL.revokeObjectURL(n);
}
function be() {
  const e = /* @__PURE__ */ new Date();
  return `${e.getFullYear()}${de(e.getMonth() + 1)}${de(e.getDate())}-${de(e.getHours())}${de(e.getMinutes())}`;
}
function de(e) {
  return String(e).padStart(2, "0");
}
function fr(e) {
  return { low: "低", medium: "中", high: "高", critical: "严重" }[e] || e;
}
function hr(e, u) {
  return e.reduce((n, d) => {
    const f = d[u] || "unknown";
    return n[f] || (n[f] = []), n[f].push(d), n;
  }, {});
}
function dr(e, u) {
  if (e.match(/^[a-z]+:\/\//i))
    return e;
  if (e.match(/^\/\//))
    return window.location.protocol + e;
  if (e.match(/^[a-z]+:/i))
    return e;
  const n = document.implementation.createHTMLDocument(), d = n.createElement("base"), f = n.createElement("a");
  return n.head.appendChild(d), n.body.appendChild(f), u && (d.href = u), f.href = e, f.href;
}
const pr = /* @__PURE__ */ (() => {
  let e = 0;
  const u = () => (
    // eslint-disable-next-line no-bitwise
    `0000${(Math.random() * 36 ** 4 << 0).toString(36)}`.slice(-4)
  );
  return () => (e += 1, `u${u()}${e}`);
})();
function Zt(e) {
  const u = [];
  for (let n = 0, d = e.length; n < d; n++)
    u.push(e[n]);
  return u;
}
let Xt = null;
function He(e = {}) {
  return Xt || (e.includeStyleProperties ? (Xt = e.includeStyleProperties, Xt) : (Xt = Zt(window.getComputedStyle(document.documentElement)), Xt));
}
function pe(e, u) {
  const d = (e.ownerDocument.defaultView || window).getComputedStyle(e).getPropertyValue(u);
  return d ? parseFloat(d.replace("px", "")) : 0;
}
function mr(e) {
  const u = pe(e, "border-left-width"), n = pe(e, "border-right-width");
  return e.clientWidth + u + n;
}
function gr(e) {
  const u = pe(e, "border-top-width"), n = pe(e, "border-bottom-width");
  return e.clientHeight + u + n;
}
function Ve(e, u = {}) {
  const n = u.width || mr(e), d = u.height || gr(e);
  return { width: n, height: d };
}
function vr() {
  let e, u;
  try {
    u = process;
  } catch {
  }
  const n = u && u.env ? u.env.devicePixelRatio : null;
  return n && (e = parseInt(n, 10), Number.isNaN(e) && (e = 1)), e || window.devicePixelRatio || 1;
}
const Nt = 16384;
function wr(e) {
  (e.width > Nt || e.height > Nt) && (e.width > Nt && e.height > Nt ? e.width > e.height ? (e.height *= Nt / e.width, e.width = Nt) : (e.width *= Nt / e.height, e.height = Nt) : e.width > Nt ? (e.height *= Nt / e.width, e.width = Nt) : (e.width *= Nt / e.height, e.height = Nt));
}
function me(e) {
  return new Promise((u, n) => {
    const d = new Image();
    d.onload = () => {
      d.decode().then(() => {
        requestAnimationFrame(() => u(d));
      });
    }, d.onerror = n, d.crossOrigin = "anonymous", d.decoding = "async", d.src = e;
  });
}
async function yr(e) {
  return Promise.resolve().then(() => new XMLSerializer().serializeToString(e)).then(encodeURIComponent).then((u) => `data:image/svg+xml;charset=utf-8,${u}`);
}
async function _r(e, u, n) {
  const d = "http://www.w3.org/2000/svg", f = document.createElementNS(d, "svg"), r = document.createElementNS(d, "foreignObject");
  return f.setAttribute("width", `${u}`), f.setAttribute("height", `${n}`), f.setAttribute("viewBox", `0 0 ${u} ${n}`), r.setAttribute("width", "100%"), r.setAttribute("height", "100%"), r.setAttribute("x", "0"), r.setAttribute("y", "0"), r.setAttribute("externalResourcesRequired", "true"), f.appendChild(r), r.appendChild(e), yr(f);
}
const At = (e, u) => {
  if (e instanceof u)
    return !0;
  const n = Object.getPrototypeOf(e);
  return n === null ? !1 : n.constructor.name === u.name || At(n, u);
};
function br(e) {
  const u = e.getPropertyValue("content");
  return `${e.cssText} content: '${u.replace(/'|"/g, "")}';`;
}
function xr(e, u) {
  return He(u).map((n) => {
    const d = e.getPropertyValue(n), f = e.getPropertyPriority(n);
    return `${n}: ${d}${f ? " !important" : ""};`;
  }).join(" ");
}
function kr(e, u, n, d) {
  const f = `.${e}:${u}`, r = n.cssText ? br(n) : xr(n, d);
  return document.createTextNode(`${f}{${r}}`);
}
function ze(e, u, n, d) {
  const f = window.getComputedStyle(e, n), r = f.getPropertyValue("content");
  if (r === "" || r === "none")
    return;
  const s = pr();
  try {
    u.className = `${u.className} ${s}`;
  } catch {
    return;
  }
  const i = document.createElement("style");
  i.appendChild(kr(s, n, f, d)), u.appendChild(i);
}
function Er(e, u, n) {
  ze(e, u, ":before", n), ze(e, u, ":after", n);
}
const Pe = "application/font-woff", De = "image/jpeg", Sr = {
  woff: Pe,
  woff2: Pe,
  ttf: "application/font-truetype",
  eot: "application/vnd.ms-fontobject",
  png: "image/png",
  jpg: De,
  jpeg: De,
  gif: "image/gif",
  tiff: "image/tiff",
  svg: "image/svg+xml",
  webp: "image/webp"
};
function Cr(e) {
  const u = /\.([^./]*?)$/g.exec(e);
  return u ? u[1] : "";
}
function Ce(e) {
  const u = Cr(e).toLowerCase();
  return Sr[u] || "";
}
function Rr(e) {
  return e.split(/,/)[1];
}
function Se(e) {
  return e.search(/^(data:)/) !== -1;
}
function Tr(e, u) {
  return `data:${u};base64,${e}`;
}
async function Ye(e, u, n) {
  const d = await fetch(e, u);
  if (d.status === 404)
    throw new Error(`Resource "${d.url}" not found`);
  const f = await d.blob();
  return new Promise((r, s) => {
    const i = new FileReader();
    i.onerror = s, i.onloadend = () => {
      try {
        r(n({ res: d, result: i.result }));
      } catch (l) {
        s(l);
      }
    }, i.readAsDataURL(f);
  });
}
const xe = {};
function Or(e, u, n) {
  let d = e.replace(/\?.*/, "");
  return n && (d = e), /ttf|otf|eot|woff2?/i.test(d) && (d = d.replace(/.*\//, "")), u ? `[${u}]${d}` : d;
}
async function Re(e, u, n) {
  const d = Or(e, u, n.includeQueryParams);
  if (xe[d] != null)
    return xe[d];
  n.cacheBust && (e += (/\?/.test(e) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime());
  let f;
  try {
    const r = await Ye(e, n.fetchRequestInit, ({ res: s, result: i }) => (u || (u = s.headers.get("Content-Type") || ""), Rr(i)));
    f = Tr(r, u);
  } catch (r) {
    f = n.imagePlaceholder || "";
    let s = `Failed to fetch resource: ${e}`;
    r && (s = typeof r == "string" ? r : r.message), s && console.warn(s);
  }
  return xe[d] = f, f;
}
async function Ar(e) {
  const u = e.toDataURL();
  return u === "data:," ? e.cloneNode(!1) : me(u);
}
async function jr(e, u) {
  if (e.currentSrc) {
    const r = document.createElement("canvas"), s = r.getContext("2d");
    r.width = e.clientWidth, r.height = e.clientHeight, s == null || s.drawImage(e, 0, 0, r.width, r.height);
    const i = r.toDataURL();
    return me(i);
  }
  const n = e.poster, d = Ce(n), f = await Re(n, d, u);
  return me(f);
}
async function Nr(e, u) {
  var n;
  try {
    if (!((n = e == null ? void 0 : e.contentDocument) === null || n === void 0) && n.body)
      return await ge(e.contentDocument.body, u, !0);
  } catch {
  }
  return e.cloneNode(!1);
}
async function Ir(e, u) {
  return At(e, HTMLCanvasElement) ? Ar(e) : At(e, HTMLVideoElement) ? jr(e, u) : At(e, HTMLIFrameElement) ? Nr(e, u) : e.cloneNode(Ge(e));
}
const zr = (e) => e.tagName != null && e.tagName.toUpperCase() === "SLOT", Ge = (e) => e.tagName != null && e.tagName.toUpperCase() === "SVG";
async function Pr(e, u, n) {
  var d, f;
  if (Ge(u))
    return u;
  let r = [];
  return zr(e) && e.assignedNodes ? r = Zt(e.assignedNodes()) : At(e, HTMLIFrameElement) && (!((d = e.contentDocument) === null || d === void 0) && d.body) ? r = Zt(e.contentDocument.body.childNodes) : r = Zt(((f = e.shadowRoot) !== null && f !== void 0 ? f : e).childNodes), r.length === 0 || At(e, HTMLVideoElement) || await r.reduce((s, i) => s.then(() => ge(i, n)).then((l) => {
    l && u.appendChild(l);
  }), Promise.resolve()), u;
}
function Dr(e, u, n) {
  const d = u.style;
  if (!d)
    return;
  const f = window.getComputedStyle(e);
  f.cssText ? (d.cssText = f.cssText, d.transformOrigin = f.transformOrigin) : He(n).forEach((r) => {
    let s = f.getPropertyValue(r);
    r === "font-size" && s.endsWith("px") && (s = `${Math.floor(parseFloat(s.substring(0, s.length - 2))) - 0.1}px`), At(e, HTMLIFrameElement) && r === "display" && s === "inline" && (s = "block"), r === "d" && u.getAttribute("d") && (s = `path(${u.getAttribute("d")})`), d.setProperty(r, s, f.getPropertyPriority(r));
  });
}
function Fr(e, u) {
  At(e, HTMLTextAreaElement) && (u.innerHTML = e.value), At(e, HTMLInputElement) && u.setAttribute("value", e.value);
}
function Br(e, u) {
  if (At(e, HTMLSelectElement)) {
    const n = u, d = Array.from(n.children).find((f) => e.value === f.getAttribute("value"));
    d && d.setAttribute("selected", "");
  }
}
function Lr(e, u, n) {
  return At(u, Element) && (Dr(e, u, n), Er(e, u, n), Fr(e, u), Br(e, u)), u;
}
async function Ur(e, u) {
  const n = e.querySelectorAll ? e.querySelectorAll("use") : [];
  if (n.length === 0)
    return e;
  const d = {};
  for (let r = 0; r < n.length; r++) {
    const i = n[r].getAttribute("xlink:href");
    if (i) {
      const l = e.querySelector(i), _ = document.querySelector(i);
      !l && _ && !d[i] && (d[i] = await ge(_, u, !0));
    }
  }
  const f = Object.values(d);
  if (f.length) {
    const r = "http://www.w3.org/1999/xhtml", s = document.createElementNS(r, "svg");
    s.setAttribute("xmlns", r), s.style.position = "absolute", s.style.width = "0", s.style.height = "0", s.style.overflow = "hidden", s.style.display = "none";
    const i = document.createElementNS(r, "defs");
    s.appendChild(i);
    for (let l = 0; l < f.length; l++)
      i.appendChild(f[l]);
    e.appendChild(s);
  }
  return e;
}
async function ge(e, u, n) {
  return !n && u.filter && !u.filter(e) ? null : Promise.resolve(e).then((d) => Ir(d, u)).then((d) => Pr(e, d, u)).then((d) => Lr(e, d, u)).then((d) => Ur(d, u));
}
const Xe = /url\((['"]?)([^'"]+?)\1\)/g, Mr = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g, $r = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function Wr(e) {
  const u = e.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
  return new RegExp(`(url\\(['"]?)(${u})(['"]?\\))`, "g");
}
function Zr(e) {
  const u = [];
  return e.replace(Xe, (n, d, f) => (u.push(f), n)), u.filter((n) => !Se(n));
}
async function Hr(e, u, n, d, f) {
  try {
    const r = n ? dr(u, n) : u, s = Ce(u);
    let i;
    return f || (i = await Re(r, s, d)), e.replace(Wr(u), `$1${i}$3`);
  } catch {
  }
  return e;
}
function Vr(e, { preferredFontFormat: u }) {
  return u ? e.replace($r, (n) => {
    for (; ; ) {
      const [d, , f] = Mr.exec(n) || [];
      if (!f)
        return "";
      if (f === u)
        return `src: ${d};`;
    }
  }) : e;
}
function Ke(e) {
  return e.search(Xe) !== -1;
}
async function qe(e, u, n) {
  if (!Ke(e))
    return e;
  const d = Vr(e, n);
  return Zr(d).reduce((r, s) => r.then((i) => Hr(i, s, u, n)), Promise.resolve(d));
}
async function Kt(e, u, n) {
  var d;
  const f = (d = u.style) === null || d === void 0 ? void 0 : d.getPropertyValue(e);
  if (f) {
    const r = await qe(f, null, n);
    return u.style.setProperty(e, r, u.style.getPropertyPriority(e)), !0;
  }
  return !1;
}
async function Yr(e, u) {
  await Kt("background", e, u) || await Kt("background-image", e, u), await Kt("mask", e, u) || await Kt("-webkit-mask", e, u) || await Kt("mask-image", e, u) || await Kt("-webkit-mask-image", e, u);
}
async function Gr(e, u) {
  const n = At(e, HTMLImageElement);
  if (!(n && !Se(e.src)) && !(At(e, SVGImageElement) && !Se(e.href.baseVal)))
    return;
  const d = n ? e.src : e.href.baseVal, f = await Re(d, Ce(d), u);
  await new Promise((r, s) => {
    e.onload = r, e.onerror = u.onImageErrorHandler ? (...l) => {
      try {
        r(u.onImageErrorHandler(...l));
      } catch (_) {
        s(_);
      }
    } : s;
    const i = e;
    i.decode && (i.decode = r), i.loading === "lazy" && (i.loading = "eager"), n ? (e.srcset = "", e.src = f) : e.href.baseVal = f;
  });
}
async function Xr(e, u) {
  const d = Zt(e.childNodes).map((f) => Je(f, u));
  await Promise.all(d).then(() => e);
}
async function Je(e, u) {
  At(e, Element) && (await Yr(e, u), await Gr(e, u), await Xr(e, u));
}
function Kr(e, u) {
  const { style: n } = e;
  u.backgroundColor && (n.backgroundColor = u.backgroundColor), u.width && (n.width = `${u.width}px`), u.height && (n.height = `${u.height}px`);
  const d = u.style;
  return d != null && Object.keys(d).forEach((f) => {
    n[f] = d[f];
  }), e;
}
const Fe = {};
async function Be(e) {
  let u = Fe[e];
  if (u != null)
    return u;
  const d = await (await fetch(e)).text();
  return u = { url: e, cssText: d }, Fe[e] = u, u;
}
async function Le(e, u) {
  let n = e.cssText;
  const d = /url\(["']?([^"')]+)["']?\)/g, r = (n.match(/url\([^)]+\)/g) || []).map(async (s) => {
    let i = s.replace(d, "$1");
    return i.startsWith("https://") || (i = new URL(i, e.url).href), Ye(i, u.fetchRequestInit, ({ result: l }) => (n = n.replace(s, `url(${l})`), [s, l]));
  });
  return Promise.all(r).then(() => n);
}
function Ue(e) {
  if (e == null)
    return [];
  const u = [], n = /(\/\*[\s\S]*?\*\/)/gi;
  let d = e.replace(n, "");
  const f = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
  for (; ; ) {
    const l = f.exec(d);
    if (l === null)
      break;
    u.push(l[0]);
  }
  d = d.replace(f, "");
  const r = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi, s = "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", i = new RegExp(s, "gi");
  for (; ; ) {
    let l = r.exec(d);
    if (l === null) {
      if (l = i.exec(d), l === null)
        break;
      r.lastIndex = i.lastIndex;
    } else
      i.lastIndex = r.lastIndex;
    u.push(l[0]);
  }
  return u;
}
async function qr(e, u) {
  const n = [], d = [];
  return e.forEach((f) => {
    if ("cssRules" in f)
      try {
        Zt(f.cssRules || []).forEach((r, s) => {
          if (r.type === CSSRule.IMPORT_RULE) {
            let i = s + 1;
            const l = r.href, _ = Be(l).then((k) => Le(k, u)).then((k) => Ue(k).forEach((b) => {
              try {
                f.insertRule(b, b.startsWith("@import") ? i += 1 : f.cssRules.length);
              } catch (x) {
                console.error("Error inserting rule from remote css", {
                  rule: b,
                  error: x
                });
              }
            })).catch((k) => {
              console.error("Error loading remote css", k.toString());
            });
            d.push(_);
          }
        });
      } catch (r) {
        const s = e.find((i) => i.href == null) || document.styleSheets[0];
        f.href != null && d.push(Be(f.href).then((i) => Le(i, u)).then((i) => Ue(i).forEach((l) => {
          s.insertRule(l, s.cssRules.length);
        })).catch((i) => {
          console.error("Error loading remote stylesheet", i);
        })), console.error("Error inlining remote css file", r);
      }
  }), Promise.all(d).then(() => (e.forEach((f) => {
    if ("cssRules" in f)
      try {
        Zt(f.cssRules || []).forEach((r) => {
          n.push(r);
        });
      } catch (r) {
        console.error(`Error while reading CSS rules from ${f.href}`, r);
      }
  }), n));
}
function Jr(e) {
  return e.filter((u) => u.type === CSSRule.FONT_FACE_RULE).filter((u) => Ke(u.style.getPropertyValue("src")));
}
async function Qr(e, u) {
  if (e.ownerDocument == null)
    throw new Error("Provided element is not within a Document");
  const n = Zt(e.ownerDocument.styleSheets), d = await qr(n, u);
  return Jr(d);
}
function Qe(e) {
  return e.trim().replace(/["']/g, "");
}
function tn(e) {
  const u = /* @__PURE__ */ new Set();
  function n(d) {
    (d.style.fontFamily || getComputedStyle(d).fontFamily).split(",").forEach((r) => {
      u.add(Qe(r));
    }), Array.from(d.children).forEach((r) => {
      r instanceof HTMLElement && n(r);
    });
  }
  return n(e), u;
}
async function en(e, u) {
  const n = await Qr(e, u), d = tn(e);
  return (await Promise.all(n.filter((r) => d.has(Qe(r.style.fontFamily))).map((r) => {
    const s = r.parentStyleSheet ? r.parentStyleSheet.href : null;
    return qe(r.cssText, s, u);
  }))).join(`
`);
}
async function rn(e, u) {
  const n = u.fontEmbedCSS != null ? u.fontEmbedCSS : u.skipFonts ? null : await en(e, u);
  if (n) {
    const d = document.createElement("style"), f = document.createTextNode(n);
    d.appendChild(f), e.firstChild ? e.insertBefore(d, e.firstChild) : e.appendChild(d);
  }
}
async function nn(e, u = {}) {
  const { width: n, height: d } = Ve(e, u), f = await ge(e, u, !0);
  return await rn(f, u), await Je(f, u), Kr(f, u), await _r(f, n, d);
}
async function an(e, u = {}) {
  const { width: n, height: d } = Ve(e, u), f = await nn(e, u), r = await me(f), s = document.createElement("canvas"), i = s.getContext("2d"), l = u.pixelRatio || vr(), _ = u.canvasWidth || n, k = u.canvasHeight || d;
  return s.width = _ * l, s.height = k * l, u.skipAutoScale || wr(s), s.style.width = `${_}`, s.style.height = `${k}`, u.backgroundColor && (i.fillStyle = u.backgroundColor, i.fillRect(0, 0, s.width, s.height)), i.drawImage(r, 0, 0, s.width, s.height), s;
}
async function Te(e, u = {}) {
  return (await an(e, u)).toDataURL();
}
const Lt = {
  ELEMENT: "element",
  VIEWPORT: "viewport",
  FULL_PAGE: "fullpage",
  BOX: "box"
};
function sn(e) {
  const u = Date.now(), n = Math.random().toString(36).slice(2, 6);
  return `screenshot-${e}-${u}-${n}.png`;
}
async function tr(e, u = {}) {
  if (!e) return null;
  try {
    return await Te(e, {
      pixelRatio: u.pixelRatio || window.devicePixelRatio || 1,
      cacheBust: !0,
      ...u
    });
  } catch (n) {
    return console.error("captureElement failed:", n), null;
  }
}
async function on(e = {}) {
  const u = document.documentElement;
  return tr(u, {
    width: window.innerWidth,
    height: window.innerHeight,
    style: {
      width: `${window.innerWidth}px`,
      height: `${window.innerHeight}px`,
      overflow: "hidden"
    },
    ...e
  });
}
async function ln(e = {}) {
  const u = document.documentElement, n = u.style.overflow, d = u.style.width, f = u.style.height;
  try {
    return u.style.overflow = "visible", u.style.width = "auto", u.style.height = "auto", await Te(u, {
      pixelRatio: e.pixelRatio || window.devicePixelRatio || 1,
      cacheBust: !0,
      ...e
    });
  } catch (r) {
    return console.error("captureFullPage failed:", r), null;
  } finally {
    u.style.overflow = n, u.style.width = d, u.style.height = f;
  }
}
async function cn(e, u = {}) {
  if (!e || e.width < 1 || e.height < 1) return null;
  const n = document.documentElement, d = n.style.overflow, f = n.style.width, r = n.style.height;
  try {
    n.style.overflow = "visible", n.style.width = "auto", n.style.height = "auto";
    const s = await Te(n, {
      pixelRatio: u.pixelRatio || window.devicePixelRatio || 1,
      cacheBust: !0,
      ...u
    });
    return un(s, e);
  } catch (s) {
    return console.error("captureBox failed:", s), null;
  } finally {
    n.style.overflow = d, n.style.width = f, n.style.height = r;
  }
}
function un(e, u) {
  return new Promise((n, d) => {
    const f = new Image();
    f.onload = () => {
      const r = document.createElement("canvas"), s = window.devicePixelRatio || 1;
      r.width = Math.round(u.width * s), r.height = Math.round(u.height * s), r.getContext("2d").drawImage(
        f,
        u.x * s,
        u.y * s,
        u.width * s,
        u.height * s,
        0,
        0,
        r.width,
        r.height
      ), n(r.toDataURL("image/png"));
    }, f.onerror = d, f.src = e;
  });
}
async function fn(e) {
  return (await fetch(e)).blob();
}
async function hn(e, u, n) {
  if (!n) return null;
  try {
    const d = await fn(e);
    return await n(d, u);
  } catch (d) {
    return console.error("uploadScreenshot failed:", d), null;
  }
}
function er(e) {
  var f;
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return "";
  if (e.id) return "#" + e.id;
  const u = e.tagName.toLowerCase();
  if (e.className) {
    const r = String(e.className).split(/\s+/).filter((s) => s && !s.startsWith("el-") && !/^__/.test(s)).slice(0, 2);
    if (r.length) return u + "." + r.join(".");
  }
  let n = [], d = e;
  for (; d && d !== document.body; ) {
    let r = d.tagName.toLowerCase();
    if (d.id) {
      r += "#" + d.id, n.unshift(r);
      break;
    }
    const i = Array.from(((f = d.parentNode) == null ? void 0 : f.children) || []).filter((l) => l.tagName === d.tagName);
    if (i.length > 1) {
      const l = i.indexOf(d) + 1;
      r += `:nth-of-type(${l})`;
    }
    n.unshift(r), d = d.parentNode;
  }
  return n.join(" > ");
}
function dn(e) {
  var d;
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return "";
  if (e.id) return `//*[@id="${e.id}"]`;
  const u = [];
  let n = e;
  for (; n && n !== document.body; ) {
    const s = Array.from(((d = n.parentNode) == null ? void 0 : d.children) || []).filter((i) => i.tagName === n.tagName).indexOf(n) + 1;
    u.unshift(`${n.tagName.toLowerCase()}[${s}]`), n = n.parentNode;
  }
  return u.unshift(""), "/html/body/" + u.slice(1).join("/");
}
function pn(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return {};
  const u = {}, n = e.getAttribute("role") || mn(e);
  n && (u.role = n);
  const d = gn(e);
  d && (u.accessibleName = d);
  const f = e.getAttribute("aria-labelledby");
  return f && (u.labeledBy = f), Object.keys(u).length ? u : void 0;
}
function mn(e) {
  const u = e.tagName.toLowerCase(), n = e.getAttribute("type");
  return {
    button: "button",
    a: e.hasAttribute("href") ? "link" : void 0,
    input: n === "checkbox" ? "checkbox" : n === "radio" ? "radio" : n === "text" || !n ? "textbox" : void 0,
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
  }[u];
}
function gn(e) {
  var r, s;
  if (e.getAttribute("aria-label")) return e.getAttribute("aria-label").trim();
  const u = e.getAttribute("aria-labelledby");
  if (u) {
    const i = u.split(/\s+/).map((l) => {
      var _, k;
      return (k = (_ = document.getElementById(l)) == null ? void 0 : _.textContent) == null ? void 0 : k.trim();
    }).filter(Boolean);
    if (i.length) return i.join(" ");
  }
  const n = (r = e.labels) == null ? void 0 : r[0];
  if (n) return n.textContent.trim();
  if (e.tagName.toLowerCase() === "input" && e.placeholder) return e.placeholder.trim();
  const d = e.getAttribute("alt");
  if (d) return d.trim();
  const f = e.getAttribute("title");
  if (f) return f.trim();
  if (["button", "a"].includes(e.tagName.toLowerCase())) {
    const i = (s = e.textContent) == null ? void 0 : s.trim();
    if (i) return i;
  }
  return "";
}
function vn(e) {
  return !e || e.nodeType !== Node.ELEMENT_NODE ? void 0 : e.getAttribute("data-testid") || void 0;
}
function Oe(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return null;
  const u = e.getBoundingClientRect();
  return {
    tag: e.tagName.toLowerCase(),
    id: e.id || void 0,
    classes: e.className ? String(e.className).split(/\s+/).filter(Boolean) : void 0,
    selector: er(e),
    xpath: dn(e),
    rect: {
      x: u.left + window.scrollX,
      y: u.top + window.scrollY,
      width: u.width,
      height: u.height
    },
    aria: pn(e),
    testId: vn(e)
  };
}
function wn(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return [];
  const u = [];
  let n = e;
  for (; n && n !== document.body; )
    u.unshift(n), n = n.parentElement;
  return n === document.body && u.unshift(document.body), u.map(Oe).filter(Boolean);
}
function yn(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return [];
  const u = _n(e);
  if (u.length) return u;
  const n = xn(e);
  return n.length ? n : [];
}
function _n(e) {
  const u = [];
  let n = e;
  for (; n; ) {
    const d = bn(n);
    d && !u.find((f) => f.componentName === d.componentName && f.selector === d.selector) && u.unshift(d), n = n.parentElement;
  }
  return u;
}
function bn(e) {
  var r, s, i, l, _;
  const n = Object.keys(e || {}).find((k) => k.startsWith("__vue"));
  if (!n) return null;
  const d = e[n], f = ((r = d == null ? void 0 : d.type) == null ? void 0 : r.name) || ((s = d == null ? void 0 : d.type) == null ? void 0 : s.__name) || ((l = (i = d == null ? void 0 : d.parent) == null ? void 0 : i.type) == null ? void 0 : l.name);
  return f ? {
    componentName: f,
    selector: er(e),
    rect: (_ = Oe(e)) == null ? void 0 : _.rect
  } : null;
}
function xn(e) {
  const u = [], n = Object.keys(e || {}).find((f) => f.startsWith("__reactFiber$"));
  if (!n) return u;
  let d = e[n];
  for (; d; ) {
    const f = kn(d);
    f && !u.find((r) => r.componentName === f) && u.unshift({ componentName: f, selector: void 0, rect: void 0 }), d = d.return;
  }
  return u;
}
function kn(e) {
  var u;
  if (!e) return null;
  if (typeof e.type == "function") return e.type.displayName || e.type.name || null;
  if (typeof e.type == "string") return null;
  if (e.elementType) {
    if (typeof e.elementType == "function") return e.elementType.displayName || e.elementType.name || null;
    if (typeof e.elementType == "object" && ((u = e.elementType) != null && u.$$typeof)) return e.elementType.name || null;
  }
  return null;
}
function Me(e) {
  return {
    dom: wn(e),
    framework: yn(e)
  };
}
function Tn({
  active: e = !1,
  pagePath: u = "",
  pageName: n = "",
  storageKey: d = "page-reviews",
  imageUpload: f,
  enableZipExport: r = !0,
  enableComponentTree: s = !0,
  onActiveChange: i,
  onAdd: l,
  onUpdate: _,
  onDelete: k,
  onClear: b,
  onExport: x
}) {
  var ie, ae, Qt, te, se, oe, le, ce;
  const h = ye(() => u || (typeof window < "u" ? window.location.pathname + window.location.search : "/"), [u]), {
    reviews: y,
    getPageReviews: c,
    addReview: g,
    updateReview: p,
    deleteReview: w,
    clearPageReviews: E,
    exportToJSON: T,
    exportToMarkdown: R,
    exportToZIP: L
  } = ur({ storageKey: d, defaultPagePath: () => h }), P = ye(() => c(h), [c, h, y]), [W, z] = Ct("element"), [Z, nt] = Ct(!1), [S, D] = Ct(!1), [a, U] = Ct(!1), [it, V] = Ct(null), [ot, Y] = Ct(""), [Q, N] = Ct(null), [j, et] = Ct(null), [q, K] = Ct(null), [gt, wt] = Ct(null), at = ue(!1), lt = ue({ x: 0, y: 0 }), [mt, yt] = Ct({ x: 0, y: 0 }), _t = ue(!1), kt = ue({ x: 0, y: 0 }), [t, F] = Ct({
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
    pageName: "",
    componentTree: null,
    aria: null
  }), [I, v] = Ct([]), [m, C] = Ct(null), $ = t.title.trim() && t.suggestion.trim(), H = dt(() => {
    i == null || i(!1);
  }, [i]), O = dt(() => ({
    viewport: { width: window.innerWidth, height: window.innerHeight },
    scroll: { x: window.scrollX, y: window.scrollY },
    pagePath: h,
    pageUrl: window.location.href,
    pageName: n || h
  }), [h, n]), G = dt((o) => {
    var tt;
    if (o.id) return "#" + o.id;
    if (o.className) {
      const st = String(o.className).split(/\s+/).filter((pt) => pt && !pt.startsWith("el-")).slice(0, 2);
      if (st.length) return o.tagName.toLowerCase() + "." + st.join(".");
    }
    let A = [], B = o;
    for (; B && B !== document.body; ) {
      let st = B.tagName.toLowerCase();
      if (B.id) {
        st += "#" + B.id, A.unshift(st);
        break;
      }
      const ft = Array.from(((tt = B.parentNode) == null ? void 0 : tt.children) || []).filter((ct) => ct.tagName === B.tagName);
      if (ft.length > 1) {
        const ct = ft.indexOf(B) + 1;
        st += `:nth-of-type(${ct})`;
      }
      A.unshift(st), B = B.parentNode;
    }
    return A.join(" > ");
  }, []), J = dt((o) => {
    const A = document.elementFromPoint(o.clientX, o.clientY);
    return !A || A.closest(".review-overlay") ? null : A;
  }, []), X = ye(() => t.type === "element" ? [
    { value: Lt.ELEMENT, label: "选中元素" },
    { value: Lt.VIEWPORT, label: "当前视口" },
    { value: Lt.FULL_PAGE, label: "完整页面" }
  ] : [
    { value: Lt.BOX, label: "框选区域" },
    { value: Lt.VIEWPORT, label: "当前视口" },
    { value: Lt.FULL_PAGE, label: "完整页面" }
  ], [t.type]), rt = dt(async () => {
    const o = [];
    for (const A of I) {
      let B = null;
      if (A === Lt.ELEMENT && (Q != null && Q.el) ? B = await tr(Q.el) : A === Lt.BOX && t.viewportRect ? B = await cn(t.viewportRect) : A === Lt.VIEWPORT ? B = await on() : A === Lt.FULL_PAGE && (B = await ln()), B) {
        const tt = sn(A);
        let st = null;
        f && (st = await hn(B, tt, f)), o.push({
          type: A,
          filename: tt,
          data: st ? void 0 : B,
          url: st || void 0
        });
      }
    }
    return o;
  }, [I, Q, t.viewportRect, f]), ht = dt((o, A = null) => {
    const B = O(), tt = Q != null && Q.el ? Oe(Q.el) : null;
    F({
      type: o,
      title: "",
      severity: "medium",
      suggestion: "",
      selector: (Q == null ? void 0 : Q.selector) || "",
      elementText: (Q == null ? void 0 : Q.text) || "",
      elementRect: (Q == null ? void 0 : Q.rect) || null,
      viewportRect: A,
      viewport: B.viewport,
      scroll: B.scroll,
      pagePath: B.pagePath,
      pageUrl: B.pageUrl,
      pageName: B.pageName,
      componentTree: q,
      aria: (tt == null ? void 0 : tt.aria) || null
    }), v([]), nt(!0);
  }, [O, Q, q]), ut = dt(() => {
    N(null), wt(null), et(null), K(null), v([]), F({
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
      pageName: "",
      componentTree: null,
      aria: null
    });
  }, []), Et = dt(async () => {
    if (!$) return;
    const o = await rt(), A = g({
      type: t.type,
      title: t.title.trim(),
      severity: t.severity,
      suggestion: t.suggestion.trim(),
      selector: t.selector,
      elementText: t.elementText,
      elementRect: t.elementRect,
      viewportRect: t.viewportRect,
      viewport: t.viewport,
      scroll: t.scroll,
      pagePath: t.pagePath,
      pageUrl: t.pageUrl,
      pageName: t.pageName,
      status: "open",
      screenshots: o,
      componentTree: t.componentTree,
      aria: t.aria
    });
    nt(!1), l == null || l(A);
  }, [$, rt, t, g, l]), Dt = dt((o) => {
    p(o, { status: "resolved" }), _ == null || _({ id: o, status: "resolved" });
  }, [p, _]), Rt = dt((o) => {
    C({
      title: "删除确认",
      message: "确定删除这条评审意见吗？",
      onConfirm: () => {
        w(o), k == null || k({ id: o }), C(null);
      }
    });
  }, [w, k]), Ut = dt(() => {
    P.length !== 0 && C({
      title: "清空确认",
      message: "确定清空当前页面的所有评审意见吗？",
      onConfirm: () => {
        E(h), b == null || b({ pagePath: h }), C(null);
      }
    });
  }, [P.length, E, h, b]), vt = dt(() => {
    T(), x == null || x({ format: "json" });
  }, [T, x]), Ft = dt(() => {
    R(), x == null || x({ format: "markdown" });
  }, [R, x]), $t = dt(async () => {
    await L(), x == null || x({ format: "zip" });
  }, [L, x]), Tt = dt((o) => {
    if (!o.rect) {
      et(null);
      return;
    }
    et(o.rect);
  }, []), Ht = dt((o) => {
    var tt;
    if (!o.selector) return;
    const A = document.querySelector(o.selector);
    if (!A) return;
    const B = A.getBoundingClientRect();
    N({
      el: A,
      selector: o.selector,
      tag: A.tagName.toLowerCase(),
      text: ((tt = A.innerText) == null ? void 0 : tt.slice(0, 40)) || "",
      rect: {
        x: B.left + window.scrollX,
        y: B.top + window.scrollY,
        width: B.width,
        height: B.height
      }
    }), K(Me(A)), U(!1), ht("element");
  }, [ht]), Mt = dt((o) => {
    if (_t.current || W !== "element" || Z || at.current) return;
    const A = J(o);
    if (!A) {
      V(null);
      return;
    }
    const B = A.getBoundingClientRect();
    V({
      x: B.left + window.scrollX,
      y: B.top + window.scrollY,
      width: B.width,
      height: B.height
    }), Y(A.tagName.toLowerCase());
  }, [W, Z, J]), Wt = dt(() => {
    V(null);
  }, []), It = dt((o) => {
    var tt;
    if (W !== "element" || Z || at.current) return;
    const A = J(o);
    if (!A) return;
    o.preventDefault(), o.stopPropagation();
    const B = A.getBoundingClientRect();
    N({
      el: A,
      selector: G(A),
      tag: A.tagName.toLowerCase(),
      text: ((tt = A.innerText) == null ? void 0 : tt.slice(0, 40)) || "",
      rect: {
        x: B.left + window.scrollX,
        y: B.top + window.scrollY,
        width: B.width,
        height: B.height
      }
    }), K(Me(A)), ht("element");
  }, [W, Z, J, G, ht]), Bt = dt((o) => {
    _t.current || W !== "viewport" || Z || (at.current = !0, lt.current = { x: o.clientX + window.scrollX, y: o.clientY + window.scrollY }, wt({ x: lt.current.x, y: lt.current.y, width: 0, height: 0 }));
  }, [W, Z]), jt = dt((o) => {
    if (_t.current || !at.current) return;
    const A = o.clientX + window.scrollX, B = o.clientY + window.scrollY;
    wt({
      x: Math.min(lt.current.x, A),
      y: Math.min(lt.current.y, B),
      width: Math.abs(A - lt.current.x),
      height: Math.abs(B - lt.current.y)
    });
  }, []), Pt = dt((o) => {
    if (_t.current) {
      _t.current = !1;
      return;
    }
    at.current && (at.current = !1, wt((A) => (A && A.width > 10 && A.height > 10 && ht("viewport", { ...A }), null)));
  }, [ht]), ve = dt((o) => {
    var B, tt;
    ((B = o.target.classList) != null && B.contains("toolbar-title") || (tt = o.target.classList) != null && tt.contains("review-toolbar")) && (_t.current = !0, kt.current = {
      x: o.clientX - mt.x,
      y: o.clientY - mt.y
    });
  }, [mt]), Yt = dt((o) => {
    _t.current && yt({
      x: o.clientX - kt.current.x,
      y: o.clientY - kt.current.y
    });
  }, []), qt = dt((o) => {
    o.key === "Escape" && (Z ? nt(!1) : H());
  }, [Z, H]);
  if (Ae(() => {
    if (e)
      return document.addEventListener("mousemove", Mt), document.addEventListener("mouseout", Wt), document.addEventListener("click", It, !0), document.addEventListener("mousedown", Bt), document.addEventListener("mousemove", jt), document.addEventListener("mousemove", Yt), document.addEventListener("mouseup", Pt), document.addEventListener("keydown", qt), () => {
        document.removeEventListener("mousemove", Mt), document.removeEventListener("mouseout", Wt), document.removeEventListener("click", It, !0), document.removeEventListener("mousedown", Bt), document.removeEventListener("mousemove", jt), document.removeEventListener("mousemove", Yt), document.removeEventListener("mouseup", Pt), document.removeEventListener("keydown", qt);
      };
  }, [e, Mt, Wt, It, Bt, jt, Yt, Pt, qt]), Ae(() => {
    e ? z("element") : (ut(), V(null), D(!1), U(!1));
  }, [e, ut]), !e) return null;
  const ne = {
    transform: `translate(calc(-50% + ${mt.x}px), ${mt.y}px)`
  }, Jt = gt || (t.type === "viewport" && Z ? t.viewportRect : null);
  return ir(
    /* @__PURE__ */ M.jsxs("div", { className: "review-overlay", onClick: (o) => o.stopPropagation(), children: [
      /* @__PURE__ */ M.jsxs(
        "div",
        {
          className: `review-toolbar ${_t.current ? "is-dragging" : ""}`,
          style: ne,
          onMouseDown: ve,
          children: [
            /* @__PURE__ */ M.jsxs("div", { className: "toolbar-left", children: [
              /* @__PURE__ */ M.jsx("span", { className: "toolbar-title", title: "按住此处可拖动", children: "页面评审模式" }),
              /* @__PURE__ */ M.jsxs("div", { className: "radio-group", children: [
                /* @__PURE__ */ M.jsx("button", { className: W === "element" ? "active" : "", onClick: () => z("element"), children: "选择元素" }),
                /* @__PURE__ */ M.jsx("button", { className: W === "viewport" ? "active" : "", onClick: () => z("viewport"), children: "框定视图" })
              ] })
            ] }),
            /* @__PURE__ */ M.jsxs("div", { className: "toolbar-right", children: [
              s && /* @__PURE__ */ M.jsx("button", { onClick: () => U(!0), children: "组件树" }),
              /* @__PURE__ */ M.jsxs("button", { className: "badge-btn", onClick: () => D(!0), children: [
                "评审列表 ",
                /* @__PURE__ */ M.jsx("span", { className: "badge", children: P.length })
              ] }),
              /* @__PURE__ */ M.jsxs("div", { className: "dropdown", children: [
                /* @__PURE__ */ M.jsx("button", { className: "primary", onClick: Ft, children: "导出" }),
                /* @__PURE__ */ M.jsxs("div", { className: "dropdown-menu", children: [
                  /* @__PURE__ */ M.jsx("div", { onClick: Ft, children: "导出为 Markdown" }),
                  /* @__PURE__ */ M.jsx("div", { onClick: vt, children: "导出为 JSON" }),
                  r && /* @__PURE__ */ M.jsx("div", { onClick: $t, children: "导出为 ZIP" })
                ] })
              ] }),
              /* @__PURE__ */ M.jsx("button", { className: "danger", onClick: H, children: "退出评审" })
            ] })
          ]
        }
      ),
      it && W === "element" && !Z && /* @__PURE__ */ M.jsx("div", { className: "highlight-box hover-box", style: ke(it), children: /* @__PURE__ */ M.jsx("span", { className: "highlight-label", children: ot }) }),
      Q && W === "element" && /* @__PURE__ */ M.jsx("div", { className: "highlight-box selected-box", style: ke(Q.rect), children: /* @__PURE__ */ M.jsxs("span", { className: "highlight-label", children: [
        "已选：",
        Q.tag
      ] }) }),
      j && /* @__PURE__ */ M.jsx("div", { className: "highlight-box tree-hover-box", style: ke(j) }),
      Jt && /* @__PURE__ */ M.jsx("div", { className: "drag-rect", style: En(Jt) }),
      Z && /* @__PURE__ */ M.jsx("div", { className: "modal-backdrop", onClick: () => nt(!1), children: /* @__PURE__ */ M.jsxs("div", { className: "modal", onClick: (o) => o.stopPropagation(), children: [
        /* @__PURE__ */ M.jsx("div", { className: "modal-header", children: "添加评审意见" }),
        /* @__PURE__ */ M.jsxs("div", { className: "modal-body", children: [
          /* @__PURE__ */ M.jsxs("div", { className: "form-row", children: [
            /* @__PURE__ */ M.jsx("label", { children: "评审位置" }),
            /* @__PURE__ */ M.jsxs("div", { className: "review-target-info", children: [
              /* @__PURE__ */ M.jsx("span", { className: "tag", children: t.type === "element" ? "元素" : "视图范围" }),
              /* @__PURE__ */ M.jsx("span", { className: "target-desc", children: t.type === "element" ? t.elementText || t.selector : `框选区域 x=${(ie = t.viewportRect) == null ? void 0 : ie.x}, y=${(ae = t.viewportRect) == null ? void 0 : ae.y}, w=${(Qt = t.viewportRect) == null ? void 0 : Qt.width}, h=${(te = t.viewportRect) == null ? void 0 : te.height}` })
            ] })
          ] }),
          /* @__PURE__ */ M.jsxs("div", { className: "form-row", children: [
            /* @__PURE__ */ M.jsx("label", { children: "窗口尺寸" }),
            /* @__PURE__ */ M.jsxs("span", { className: "text-muted", children: [
              (se = t.viewport) == null ? void 0 : se.width,
              " × ",
              (oe = t.viewport) == null ? void 0 : oe.height
            ] })
          ] }),
          /* @__PURE__ */ M.jsxs("div", { className: "form-row", children: [
            /* @__PURE__ */ M.jsx("label", { children: "滚动位置" }),
            /* @__PURE__ */ M.jsxs("span", { className: "text-muted", children: [
              "x=",
              (le = t.scroll) == null ? void 0 : le.x,
              ", y=",
              (ce = t.scroll) == null ? void 0 : ce.y
            ] })
          ] }),
          /* @__PURE__ */ M.jsxs("div", { className: "form-row", children: [
            /* @__PURE__ */ M.jsx("label", { children: "截图" }),
            /* @__PURE__ */ M.jsx("div", { className: "checkbox-group", children: X.map((o) => /* @__PURE__ */ M.jsxs("label", { className: "checkbox-label", children: [
              /* @__PURE__ */ M.jsx(
                "input",
                {
                  type: "checkbox",
                  value: o.value,
                  checked: I.includes(o.value),
                  onChange: (A) => {
                    const B = A.target.value;
                    v(
                      (tt) => tt.includes(B) ? tt.filter((st) => st !== B) : [...tt, B]
                    );
                  }
                }
              ),
              o.label
            ] }, o.value)) })
          ] }),
          /* @__PURE__ */ M.jsxs("div", { className: "form-row", children: [
            /* @__PURE__ */ M.jsxs("label", { children: [
              "标题 ",
              /* @__PURE__ */ M.jsx("span", { className: "required", children: "*" })
            ] }),
            /* @__PURE__ */ M.jsx(
              "input",
              {
                type: "text",
                value: t.title,
                onChange: (o) => F({ ...t, title: o.target.value }),
                placeholder: "例如：按钮样式不统一"
              }
            )
          ] }),
          /* @__PURE__ */ M.jsxs("div", { className: "form-row", children: [
            /* @__PURE__ */ M.jsxs("label", { children: [
              "严重等级 ",
              /* @__PURE__ */ M.jsx("span", { className: "required", children: "*" })
            ] }),
            /* @__PURE__ */ M.jsx("div", { className: "radio-group", children: ["low", "medium", "high", "critical"].map((o) => /* @__PURE__ */ M.jsxs("label", { className: "radio-label", children: [
              /* @__PURE__ */ M.jsx(
                "input",
                {
                  type: "radio",
                  name: "severity",
                  value: o,
                  checked: t.severity === o,
                  onChange: () => F({ ...t, severity: o })
                }
              ),
              $e(o)
            ] }, o)) })
          ] }),
          /* @__PURE__ */ M.jsxs("div", { className: "form-row", children: [
            /* @__PURE__ */ M.jsxs("label", { children: [
              "评审建议 ",
              /* @__PURE__ */ M.jsx("span", { className: "required", children: "*" })
            ] }),
            /* @__PURE__ */ M.jsx(
              "textarea",
              {
                rows: 4,
                value: t.suggestion,
                onChange: (o) => F({ ...t, suggestion: o.target.value }),
                placeholder: "描述问题现象、影响和改进建议"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ M.jsxs("div", { className: "modal-footer", children: [
          /* @__PURE__ */ M.jsx("button", { onClick: () => nt(!1), children: "取消" }),
          /* @__PURE__ */ M.jsx("button", { className: "primary", disabled: !$, onClick: Et, children: "保存评审" })
        ] })
      ] }) }),
      a && /* @__PURE__ */ M.jsxs(M.Fragment, { children: [
        /* @__PURE__ */ M.jsx("div", { className: "drawer-backdrop", onClick: () => U(!1) }),
        /* @__PURE__ */ M.jsxs("div", { className: "drawer", children: [
          /* @__PURE__ */ M.jsxs("div", { className: "drawer-header", children: [
            /* @__PURE__ */ M.jsx("span", { children: "组件树检查器" }),
            /* @__PURE__ */ M.jsx("button", { className: "close", onClick: () => U(!1), children: "×" })
          ] }),
          /* @__PURE__ */ M.jsx("div", { className: "drawer-body", children: q ? /* @__PURE__ */ M.jsxs("div", { className: "tree-panel", children: [
            q.framework && q.framework.length > 0 && /* @__PURE__ */ M.jsxs("div", { className: "tree-section", children: [
              /* @__PURE__ */ M.jsx("h4", { children: "框架组件树" }),
              /* @__PURE__ */ M.jsx("div", { className: "tree-list", children: q.framework.map((o, A) => /* @__PURE__ */ M.jsx(
                "div",
                {
                  className: "tree-node",
                  onMouseEnter: () => Tt(o),
                  onMouseLeave: () => et(null),
                  onClick: () => Ht(o),
                  children: /* @__PURE__ */ M.jsx("span", { className: "node-name", children: o.componentName })
                },
                "fw-" + A
              )) })
            ] }),
            /* @__PURE__ */ M.jsxs("div", { className: "tree-section", children: [
              /* @__PURE__ */ M.jsx("h4", { children: "DOM 树" }),
              /* @__PURE__ */ M.jsx("div", { className: "tree-list", children: q.dom.map((o, A) => {
                var B;
                return /* @__PURE__ */ M.jsxs(
                  "div",
                  {
                    className: "tree-node",
                    style: { paddingLeft: A * 12 },
                    onMouseEnter: () => Tt(o),
                    onMouseLeave: () => et(null),
                    onClick: () => Ht(o),
                    children: [
                      /* @__PURE__ */ M.jsx("span", { className: "node-tag", children: o.tag }),
                      o.id && /* @__PURE__ */ M.jsxs("span", { className: "node-id", children: [
                        "#",
                        o.id
                      ] }),
                      ((B = o.aria) == null ? void 0 : B.role) && /* @__PURE__ */ M.jsxs("span", { className: "node-aria", children: [
                        "role=",
                        o.aria.role
                      ] }),
                      o.testId && /* @__PURE__ */ M.jsxs("span", { className: "node-testid", children: [
                        "testid=",
                        o.testId
                      ] })
                    ]
                  },
                  "dom-" + A
                );
              }) })
            ] })
          ] }) : /* @__PURE__ */ M.jsx("div", { className: "empty", children: "先选择一个元素以查看组件树" }) })
        ] })
      ] }),
      S && /* @__PURE__ */ M.jsxs(M.Fragment, { children: [
        /* @__PURE__ */ M.jsx("div", { className: "drawer-backdrop", onClick: () => D(!1) }),
        /* @__PURE__ */ M.jsxs("div", { className: "drawer", children: [
          /* @__PURE__ */ M.jsxs("div", { className: "drawer-header", children: [
            /* @__PURE__ */ M.jsx("span", { children: "当前页面评审意见" }),
            /* @__PURE__ */ M.jsx("button", { className: "close", onClick: () => D(!1), children: "×" })
          ] }),
          /* @__PURE__ */ M.jsxs("div", { className: "drawer-body", children: [
            /* @__PURE__ */ M.jsxs("div", { className: "review-list-actions", children: [
              /* @__PURE__ */ M.jsx("button", { className: "primary", onClick: Ft, children: "导出 Markdown" }),
              /* @__PURE__ */ M.jsx("button", { onClick: vt, children: "导出 JSON" }),
              r && /* @__PURE__ */ M.jsx("button", { onClick: $t, children: "导出 ZIP" }),
              /* @__PURE__ */ M.jsx("button", { className: "danger-text", onClick: Ut, children: "清空本页" })
            ] }),
            P.length === 0 ? /* @__PURE__ */ M.jsx("div", { className: "empty", children: "暂无评审意见" }) : /* @__PURE__ */ M.jsx("div", { className: "review-list", children: P.map((o) => {
              var A, B;
              return /* @__PURE__ */ M.jsxs("div", { className: "review-item", children: [
                /* @__PURE__ */ M.jsxs("div", { className: "review-item-header", children: [
                  /* @__PURE__ */ M.jsx("span", { className: "review-item-title", children: o.title }),
                  /* @__PURE__ */ M.jsxs("div", { className: "review-item-tags", children: [
                    /* @__PURE__ */ M.jsx("span", { className: `tag ${Sn(o.severity)}`, children: $e(o.severity) }),
                    /* @__PURE__ */ M.jsx("span", { className: "tag info", children: o.type === "element" ? "元素" : "视图" }),
                    ((B = (A = o.componentTree) == null ? void 0 : A.dom) == null ? void 0 : B.length) > 0 && /* @__PURE__ */ M.jsx("span", { className: "tag success", children: "树" })
                  ] })
                ] }),
                /* @__PURE__ */ M.jsx("p", { className: "review-item-target", children: o.type === "element" ? o.elementText || o.selector : `框选 x=${o.viewportRect.x}, y=${o.viewportRect.y}` }),
                /* @__PURE__ */ M.jsx("p", { className: "review-item-suggestion", children: o.suggestion }),
                /* @__PURE__ */ M.jsxs("div", { className: "review-item-meta", children: [
                  /* @__PURE__ */ M.jsx("span", { className: "text-muted", children: new Date(o.createdAt).toLocaleString() }),
                  /* @__PURE__ */ M.jsxs("div", { className: "review-item-actions", children: [
                    o.status !== "resolved" && /* @__PURE__ */ M.jsx("button", { className: "link primary", onClick: () => Dt(o.id), children: "标记解决" }),
                    /* @__PURE__ */ M.jsx("button", { className: "link danger", onClick: () => Rt(o.id), children: "删除" })
                  ] })
                ] })
              ] }, o.id);
            }) })
          ] })
        ] })
      ] }),
      m && /* @__PURE__ */ M.jsx("div", { className: "modal-backdrop", onClick: () => C(null), children: /* @__PURE__ */ M.jsxs("div", { className: "modal confirm-modal", onClick: (o) => o.stopPropagation(), children: [
        /* @__PURE__ */ M.jsx("div", { className: "modal-header", children: m.title }),
        /* @__PURE__ */ M.jsx("div", { className: "modal-body", children: m.message }),
        /* @__PURE__ */ M.jsxs("div", { className: "modal-footer", children: [
          /* @__PURE__ */ M.jsx("button", { onClick: () => C(null), children: "取消" }),
          /* @__PURE__ */ M.jsx("button", { className: "danger", onClick: m.onConfirm, children: "确定" })
        ] })
      ] }) })
    ] }),
    document.body
  );
}
function ke(e) {
  return e ? {
    left: e.x + "px",
    top: e.y + "px",
    width: e.width + "px",
    height: e.height + "px"
  } : {};
}
function En(e) {
  return e ? {
    left: e.x + "px",
    top: e.y + "px",
    width: e.width + "px",
    height: e.height + "px"
  } : {};
}
function Sn(e) {
  return { low: "info", medium: "warning", high: "danger", critical: "danger" }[e] || "info";
}
function $e(e) {
  return { low: "低", medium: "中", high: "高", critical: "严重" }[e] || e;
}
export {
  Tn as ReviewTool,
  Tn as default,
  ur as usePageReview
};
