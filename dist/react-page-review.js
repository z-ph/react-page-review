import We, { useState as Ct, useCallback as dt, useMemo as ye, useRef as fe, useEffect as Ae } from "react";
import { createPortal as ir } from "react-dom";
var he = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
  var e = We, o = Symbol.for("react.element"), n = Symbol.for("react.fragment"), h = Object.prototype.hasOwnProperty, u = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, r = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(i, l, _) {
    var x, y = {}, b = null, f = null;
    _ !== void 0 && (b = "" + _), l.key !== void 0 && (b = "" + l.key), l.ref !== void 0 && (f = l.ref);
    for (x in l) h.call(l, x) && !r.hasOwnProperty(x) && (y[x] = l[x]);
    if (i && i.defaultProps) for (x in l = i.defaultProps, l) y[x] === void 0 && (y[x] = l[x]);
    return { $$typeof: o, type: i, key: b, ref: f, props: y, _owner: u.current };
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
    var e = We, o = Symbol.for("react.element"), n = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), x = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), f = Symbol.for("react.offscreen"), w = Symbol.iterator, c = "@@iterator";
    function m(k) {
      if (k === null || typeof k != "object")
        return null;
      var S = w && k[w] || k[c];
      return typeof S == "function" ? S : null;
    }
    var d = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(k) {
      {
        for (var S = arguments.length, D = new Array(S > 1 ? S - 1 : 0), V = 1; V < S; V++)
          D[V - 1] = arguments[V];
        E("error", k, D);
      }
    }
    function E(k, S, D) {
      {
        var V = d.ReactDebugCurrentFrame, it = V.getStackAddendum();
        it !== "" && (S += "%s", D = D.concat([it]));
        var ct = D.map(function(ht) {
          return String(ht);
        });
        ct.unshift("Warning: " + S), Function.prototype.apply.call(console[k], console, ct);
      }
    }
    var O = !1, T = !1, L = !1, P = !1, W = !1, I;
    I = Symbol.for("react.module.reference");
    function Z(k) {
      return !!(typeof k == "string" || typeof k == "function" || k === h || k === r || W || k === u || k === _ || k === x || P || k === f || O || T || L || typeof k == "object" && k !== null && (k.$$typeof === b || k.$$typeof === y || k.$$typeof === s || k.$$typeof === i || k.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      k.$$typeof === I || k.getModuleId !== void 0));
    }
    function nt(k, S, D) {
      var V = k.displayName;
      if (V)
        return V;
      var it = S.displayName || S.name || "";
      return it !== "" ? D + "(" + it + ")" : D;
    }
    function C(k) {
      return k.displayName || "Context";
    }
    function F(k) {
      if (k == null)
        return null;
      if (typeof k.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof k == "function")
        return k.displayName || k.name || null;
      if (typeof k == "string")
        return k;
      switch (k) {
        case h:
          return "Fragment";
        case n:
          return "Portal";
        case r:
          return "Profiler";
        case u:
          return "StrictMode";
        case _:
          return "Suspense";
        case x:
          return "SuspenseList";
      }
      if (typeof k == "object")
        switch (k.$$typeof) {
          case i:
            var S = k;
            return C(S) + ".Consumer";
          case s:
            var D = k;
            return C(D._context) + ".Provider";
          case l:
            return nt(k, k.render, "ForwardRef");
          case y:
            var V = k.displayName || null;
            return V !== null ? V : F(k.type) || "Memo";
          case b: {
            var it = k, ct = it._payload, ht = it._init;
            try {
              return F(ht(ct));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var a = Object.assign, U = 0, at, Y, ot, G, tt, N, j;
    function et() {
    }
    et.__reactDisabledLog = !0;
    function J() {
      {
        if (U === 0) {
          at = console.log, Y = console.info, ot = console.warn, G = console.error, tt = console.group, N = console.groupCollapsed, j = console.groupEnd;
          var k = {
            configurable: !0,
            enumerable: !0,
            value: et,
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
        U++;
      }
    }
    function q() {
      {
        if (U--, U === 0) {
          var k = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: a({}, k, {
              value: at
            }),
            info: a({}, k, {
              value: Y
            }),
            warn: a({}, k, {
              value: ot
            }),
            error: a({}, k, {
              value: G
            }),
            group: a({}, k, {
              value: tt
            }),
            groupCollapsed: a({}, k, {
              value: N
            }),
            groupEnd: a({}, k, {
              value: j
            })
          });
        }
        U < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var gt = d.ReactCurrentDispatcher, vt;
    function st(k, S, D) {
      {
        if (vt === void 0)
          try {
            throw Error();
          } catch (it) {
            var V = it.stack.trim().match(/\n( *(at )?)/);
            vt = V && V[1] || "";
          }
        return `
` + vt + k;
      }
    }
    var ut = !1, mt;
    {
      var wt = typeof WeakMap == "function" ? WeakMap : Map;
      mt = new wt();
    }
    function _t(k, S) {
      if (!k || ut)
        return "";
      {
        var D = mt.get(k);
        if (D !== void 0)
          return D;
      }
      var V;
      ut = !0;
      var it = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ct;
      ct = gt.current, gt.current = null, J();
      try {
        if (S) {
          var ht = function() {
            throw Error();
          };
          if (Object.defineProperty(ht.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ht, []);
            } catch (Ot) {
              V = Ot;
            }
            Reflect.construct(k, [], ht);
          } else {
            try {
              ht.call();
            } catch (Ot) {
              V = Ot;
            }
            k.call(ht.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ot) {
            V = Ot;
          }
          k();
        }
      } catch (Ot) {
        if (Ot && V && typeof Ot.stack == "string") {
          for (var ft = Ot.stack.split(`
`), kt = V.stack.split(`
`), bt = ft.length - 1, xt = kt.length - 1; bt >= 1 && xt >= 0 && ft[bt] !== kt[xt]; )
            xt--;
          for (; bt >= 1 && xt >= 0; bt--, xt--)
            if (ft[bt] !== kt[xt]) {
              if (bt !== 1 || xt !== 1)
                do
                  if (bt--, xt--, xt < 0 || ft[bt] !== kt[xt]) {
                    var It = `
` + ft[bt].replace(" at new ", " at ");
                    return k.displayName && It.includes("<anonymous>") && (It = It.replace("<anonymous>", k.displayName)), typeof k == "function" && mt.set(k, It), It;
                  }
                while (bt >= 1 && xt >= 0);
              break;
            }
        }
      } finally {
        ut = !1, gt.current = ct, q(), Error.prepareStackTrace = it;
      }
      var Gt = k ? k.displayName || k.name : "", Vt = Gt ? st(Gt) : "";
      return typeof k == "function" && mt.set(k, Vt), Vt;
    }
    function St(k, S, D) {
      return _t(k, !1);
    }
    function t(k) {
      var S = k.prototype;
      return !!(S && S.isReactComponent);
    }
    function B(k, S, D) {
      if (k == null)
        return "";
      if (typeof k == "function")
        return _t(k, t(k));
      if (typeof k == "string")
        return st(k);
      switch (k) {
        case _:
          return st("Suspense");
        case x:
          return st("SuspenseList");
      }
      if (typeof k == "object")
        switch (k.$$typeof) {
          case l:
            return St(k.render);
          case y:
            return B(k.type, S, D);
          case b: {
            var V = k, it = V._payload, ct = V._init;
            try {
              return B(ct(it), S, D);
            } catch {
            }
          }
        }
      return "";
    }
    var z = Object.prototype.hasOwnProperty, g = {}, p = d.ReactDebugCurrentFrame;
    function R(k) {
      if (k) {
        var S = k._owner, D = B(k.type, k._source, S ? S.type : null);
        p.setExtraStackFrame(D);
      } else
        p.setExtraStackFrame(null);
    }
    function $(k, S, D, V, it) {
      {
        var ct = Function.call.bind(z);
        for (var ht in k)
          if (ct(k, ht)) {
            var ft = void 0;
            try {
              if (typeof k[ht] != "function") {
                var kt = Error((V || "React class") + ": " + D + " type `" + ht + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof k[ht] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw kt.name = "Invariant Violation", kt;
              }
              ft = k[ht](S, ht, V, D, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (bt) {
              ft = bt;
            }
            ft && !(ft instanceof Error) && (R(it), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", V || "React class", D, ht, typeof ft), R(null)), ft instanceof Error && !(ft.message in g) && (g[ft.message] = !0, R(it), v("Failed %s type: %s", D, ft.message), R(null));
          }
      }
    }
    var H = Array.isArray;
    function A(k) {
      return H(k);
    }
    function X(k) {
      {
        var S = typeof Symbol == "function" && Symbol.toStringTag, D = S && k[Symbol.toStringTag] || k.constructor.name || "Object";
        return D;
      }
    }
    function Q(k) {
      try {
        return K(k), !1;
      } catch {
        return !0;
      }
    }
    function K(k) {
      return "" + k;
    }
    function rt(k) {
      if (Q(k))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", X(k)), K(k);
    }
    var pt = d.ReactCurrentOwner, lt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Et, Dt;
    function Rt(k) {
      if (z.call(k, "ref")) {
        var S = Object.getOwnPropertyDescriptor(k, "ref").get;
        if (S && S.isReactWarning)
          return !1;
      }
      return k.ref !== void 0;
    }
    function Lt(k) {
      if (z.call(k, "key")) {
        var S = Object.getOwnPropertyDescriptor(k, "key").get;
        if (S && S.isReactWarning)
          return !1;
      }
      return k.key !== void 0;
    }
    function yt(k, S) {
      typeof k.ref == "string" && pt.current;
    }
    function Ut(k, S) {
      {
        var D = function() {
          Et || (Et = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", S));
        };
        D.isReactWarning = !0, Object.defineProperty(k, "key", {
          get: D,
          configurable: !0
        });
      }
    }
    function Mt(k, S) {
      {
        var D = function() {
          Dt || (Dt = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", S));
        };
        D.isReactWarning = !0, Object.defineProperty(k, "ref", {
          get: D,
          configurable: !0
        });
      }
    }
    var Tt = function(k, S, D, V, it, ct, ht) {
      var ft = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
        // Built-in properties that belong on the element
        type: k,
        key: S,
        ref: D,
        props: ht,
        // Record the component responsible for creating this element.
        _owner: ct
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
        value: V
      }), Object.defineProperty(ft, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: it
      }), Object.freeze && (Object.freeze(ft.props), Object.freeze(ft)), ft;
    };
    function Ht(k, S, D, V, it) {
      {
        var ct, ht = {}, ft = null, kt = null;
        D !== void 0 && (rt(D), ft = "" + D), Lt(S) && (rt(S.key), ft = "" + S.key), Rt(S) && (kt = S.ref, yt(S, it));
        for (ct in S)
          z.call(S, ct) && !lt.hasOwnProperty(ct) && (ht[ct] = S[ct]);
        if (k && k.defaultProps) {
          var bt = k.defaultProps;
          for (ct in bt)
            ht[ct] === void 0 && (ht[ct] = bt[ct]);
        }
        if (ft || kt) {
          var xt = typeof k == "function" ? k.displayName || k.name || "Unknown" : k;
          ft && Ut(ht, xt), kt && Mt(ht, xt);
        }
        return Tt(k, ft, kt, it, V, pt.current, ht);
      }
    }
    var $t = d.ReactCurrentOwner, Wt = d.ReactDebugCurrentFrame;
    function zt(k) {
      if (k) {
        var S = k._owner, D = B(k.type, k._source, S ? S.type : null);
        Wt.setExtraStackFrame(D);
      } else
        Wt.setExtraStackFrame(null);
    }
    var Ft;
    Ft = !1;
    function jt(k) {
      return typeof k == "object" && k !== null && k.$$typeof === o;
    }
    function Pt() {
      {
        if ($t.current) {
          var k = F($t.current.type);
          if (k)
            return `

Check the render method of \`` + k + "`.";
        }
        return "";
      }
    }
    function qt(k) {
      return "";
    }
    var ne = {};
    function Jt(k) {
      {
        var S = Pt();
        if (!S) {
          var D = typeof k == "string" ? k : k.displayName || k.name;
          D && (S = `

Check the top-level render call using <` + D + ">.");
        }
        return S;
      }
    }
    function Yt(k, S) {
      {
        if (!k._store || k._store.validated || k.key != null)
          return;
        k._store.validated = !0;
        var D = Jt(S);
        if (ne[D])
          return;
        ne[D] = !0;
        var V = "";
        k && k._owner && k._owner !== $t.current && (V = " It was passed a child from " + F(k._owner.type) + "."), zt(k), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', D, V), zt(null);
      }
    }
    function ie(k, S) {
      {
        if (typeof k != "object")
          return;
        if (A(k))
          for (var D = 0; D < k.length; D++) {
            var V = k[D];
            jt(V) && Yt(V, S);
          }
        else if (jt(k))
          k._store && (k._store.validated = !0);
        else if (k) {
          var it = m(k);
          if (typeof it == "function" && it !== k.entries)
            for (var ct = it.call(k), ht; !(ht = ct.next()).done; )
              jt(ht.value) && Yt(ht.value, S);
        }
      }
    }
    function ae(k) {
      {
        var S = k.type;
        if (S == null || typeof S == "string")
          return;
        var D;
        if (typeof S == "function")
          D = S.propTypes;
        else if (typeof S == "object" && (S.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        S.$$typeof === y))
          D = S.propTypes;
        else
          return;
        if (D) {
          var V = F(S);
          $(D, k.props, "prop", V, k);
        } else if (S.PropTypes !== void 0 && !Ft) {
          Ft = !0;
          var it = F(S);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", it || "Unknown");
        }
        typeof S.getDefaultProps == "function" && !S.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function se(k) {
      {
        for (var S = Object.keys(k.props), D = 0; D < S.length; D++) {
          var V = S[D];
          if (V !== "children" && V !== "key") {
            zt(k), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", V), zt(null);
            break;
          }
        }
        k.ref !== null && (zt(k), v("Invalid attribute `ref` supplied to `React.Fragment`."), zt(null));
      }
    }
    var Qt = {};
    function te(k, S, D, V, it, ct) {
      {
        var ht = Z(k);
        if (!ht) {
          var ft = "";
          (k === void 0 || typeof k == "object" && k !== null && Object.keys(k).length === 0) && (ft += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var kt = qt();
          kt ? ft += kt : ft += Pt();
          var bt;
          k === null ? bt = "null" : A(k) ? bt = "array" : k !== void 0 && k.$$typeof === o ? (bt = "<" + (F(k.type) || "Unknown") + " />", ft = " Did you accidentally export a JSX literal instead of a component?") : bt = typeof k, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", bt, ft);
        }
        var xt = Ht(k, S, D, it, ct);
        if (xt == null)
          return xt;
        if (ht) {
          var It = S.children;
          if (It !== void 0)
            if (V)
              if (A(It)) {
                for (var Gt = 0; Gt < It.length; Gt++)
                  ie(It[Gt], k);
                Object.freeze && Object.freeze(It);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ie(It, k);
        }
        if (z.call(S, "key")) {
          var Vt = F(k), Ot = Object.keys(S).filter(function(nr) {
            return nr !== "key";
          }), we = Ot.length > 0 ? "{key: someKey, " + Ot.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Qt[Vt + we]) {
            var rr = Ot.length > 0 ? "{" + Ot.join(": ..., ") + ": ...}" : "{}";
            v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, we, Vt, rr, Vt), Qt[Vt + we] = !0;
          }
        }
        return k === h ? se(xt) : ae(xt), xt;
      }
    }
    function oe(k, S, D) {
      return te(k, S, D, !0);
    }
    function le(k, S, D) {
      return te(k, S, D, !1);
    }
    var ce = le, ue = oe;
    re.Fragment = h, re.jsx = ce, re.jsxs = ue;
  }()), re;
}
process.env.NODE_ENV === "production" ? Ee.exports = sr() : Ee.exports = or();
var M = Ee.exports;
function de(e) {
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
(function(e, o) {
  (function(n) {
    e.exports = n();
  })(function() {
    return function n(h, u, r) {
      function s(_, x) {
        if (!u[_]) {
          if (!h[_]) {
            var y = typeof de == "function" && de;
            if (!x && y) return y(_, !0);
            if (i) return i(_, !0);
            var b = new Error("Cannot find module '" + _ + "'");
            throw b.code = "MODULE_NOT_FOUND", b;
          }
          var f = u[_] = { exports: {} };
          h[_][0].call(f.exports, function(w) {
            var c = h[_][1][w];
            return s(c || w);
          }, f, f.exports, n, h, u, r);
        }
        return u[_].exports;
      }
      for (var i = typeof de == "function" && de, l = 0; l < r.length; l++) s(r[l]);
      return s;
    }({ 1: [function(n, h, u) {
      var r = n("./utils"), s = n("./support"), i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      u.encode = function(l) {
        for (var _, x, y, b, f, w, c, m = [], d = 0, v = l.length, E = v, O = r.getTypeOf(l) !== "string"; d < l.length; ) E = v - d, y = O ? (_ = l[d++], x = d < v ? l[d++] : 0, d < v ? l[d++] : 0) : (_ = l.charCodeAt(d++), x = d < v ? l.charCodeAt(d++) : 0, d < v ? l.charCodeAt(d++) : 0), b = _ >> 2, f = (3 & _) << 4 | x >> 4, w = 1 < E ? (15 & x) << 2 | y >> 6 : 64, c = 2 < E ? 63 & y : 64, m.push(i.charAt(b) + i.charAt(f) + i.charAt(w) + i.charAt(c));
        return m.join("");
      }, u.decode = function(l) {
        var _, x, y, b, f, w, c = 0, m = 0, d = "data:";
        if (l.substr(0, d.length) === d) throw new Error("Invalid base64 input, it looks like a data url.");
        var v, E = 3 * (l = l.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
        if (l.charAt(l.length - 1) === i.charAt(64) && E--, l.charAt(l.length - 2) === i.charAt(64) && E--, E % 1 != 0) throw new Error("Invalid base64 input, bad content length.");
        for (v = s.uint8array ? new Uint8Array(0 | E) : new Array(0 | E); c < l.length; ) _ = i.indexOf(l.charAt(c++)) << 2 | (b = i.indexOf(l.charAt(c++))) >> 4, x = (15 & b) << 4 | (f = i.indexOf(l.charAt(c++))) >> 2, y = (3 & f) << 6 | (w = i.indexOf(l.charAt(c++))), v[m++] = _, f !== 64 && (v[m++] = x), w !== 64 && (v[m++] = y);
        return v;
      };
    }, { "./support": 30, "./utils": 32 }], 2: [function(n, h, u) {
      var r = n("./external"), s = n("./stream/DataWorker"), i = n("./stream/Crc32Probe"), l = n("./stream/DataLengthProbe");
      function _(x, y, b, f, w) {
        this.compressedSize = x, this.uncompressedSize = y, this.crc32 = b, this.compression = f, this.compressedContent = w;
      }
      _.prototype = { getContentWorker: function() {
        var x = new s(r.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")), y = this;
        return x.on("end", function() {
          if (this.streamInfo.data_length !== y.uncompressedSize) throw new Error("Bug : uncompressed data size mismatch");
        }), x;
      }, getCompressedWorker: function() {
        return new s(r.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
      } }, _.createWorkerFrom = function(x, y, b) {
        return x.pipe(new i()).pipe(new l("uncompressedSize")).pipe(y.compressWorker(b)).pipe(new l("compressedSize")).withStreamInfo("compression", y);
      }, h.exports = _;
    }, { "./external": 6, "./stream/Crc32Probe": 25, "./stream/DataLengthProbe": 26, "./stream/DataWorker": 27 }], 3: [function(n, h, u) {
      var r = n("./stream/GenericWorker");
      u.STORE = { magic: "\0\0", compressWorker: function() {
        return new r("STORE compression");
      }, uncompressWorker: function() {
        return new r("STORE decompression");
      } }, u.DEFLATE = n("./flate");
    }, { "./flate": 7, "./stream/GenericWorker": 28 }], 4: [function(n, h, u) {
      var r = n("./utils"), s = function() {
        for (var i, l = [], _ = 0; _ < 256; _++) {
          i = _;
          for (var x = 0; x < 8; x++) i = 1 & i ? 3988292384 ^ i >>> 1 : i >>> 1;
          l[_] = i;
        }
        return l;
      }();
      h.exports = function(i, l) {
        return i !== void 0 && i.length ? r.getTypeOf(i) !== "string" ? function(_, x, y, b) {
          var f = s, w = b + y;
          _ ^= -1;
          for (var c = b; c < w; c++) _ = _ >>> 8 ^ f[255 & (_ ^ x[c])];
          return -1 ^ _;
        }(0 | l, i, i.length, 0) : function(_, x, y, b) {
          var f = s, w = b + y;
          _ ^= -1;
          for (var c = b; c < w; c++) _ = _ >>> 8 ^ f[255 & (_ ^ x.charCodeAt(c))];
          return -1 ^ _;
        }(0 | l, i, i.length, 0) : 0;
      };
    }, { "./utils": 32 }], 5: [function(n, h, u) {
      u.base64 = !1, u.binary = !1, u.dir = !1, u.createFolders = !0, u.date = null, u.compression = null, u.compressionOptions = null, u.comment = null, u.unixPermissions = null, u.dosPermissions = null;
    }, {}], 6: [function(n, h, u) {
      var r = null;
      r = typeof Promise < "u" ? Promise : n("lie"), h.exports = { Promise: r };
    }, { lie: 37 }], 7: [function(n, h, u) {
      var r = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Uint32Array < "u", s = n("pako"), i = n("./utils"), l = n("./stream/GenericWorker"), _ = r ? "uint8array" : "array";
      function x(y, b) {
        l.call(this, "FlateWorker/" + y), this._pako = null, this._pakoAction = y, this._pakoOptions = b, this.meta = {};
      }
      u.magic = "\b\0", i.inherits(x, l), x.prototype.processChunk = function(y) {
        this.meta = y.meta, this._pako === null && this._createPako(), this._pako.push(i.transformTo(_, y.data), !1);
      }, x.prototype.flush = function() {
        l.prototype.flush.call(this), this._pako === null && this._createPako(), this._pako.push([], !0);
      }, x.prototype.cleanUp = function() {
        l.prototype.cleanUp.call(this), this._pako = null;
      }, x.prototype._createPako = function() {
        this._pako = new s[this._pakoAction]({ raw: !0, level: this._pakoOptions.level || -1 });
        var y = this;
        this._pako.onData = function(b) {
          y.push({ data: b, meta: y.meta });
        };
      }, u.compressWorker = function(y) {
        return new x("Deflate", y);
      }, u.uncompressWorker = function() {
        return new x("Inflate", {});
      };
    }, { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 }], 8: [function(n, h, u) {
      function r(f, w) {
        var c, m = "";
        for (c = 0; c < w; c++) m += String.fromCharCode(255 & f), f >>>= 8;
        return m;
      }
      function s(f, w, c, m, d, v) {
        var E, O, T = f.file, L = f.compression, P = v !== _.utf8encode, W = i.transformTo("string", v(T.name)), I = i.transformTo("string", _.utf8encode(T.name)), Z = T.comment, nt = i.transformTo("string", v(Z)), C = i.transformTo("string", _.utf8encode(Z)), F = I.length !== T.name.length, a = C.length !== Z.length, U = "", at = "", Y = "", ot = T.dir, G = T.date, tt = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
        w && !c || (tt.crc32 = f.crc32, tt.compressedSize = f.compressedSize, tt.uncompressedSize = f.uncompressedSize);
        var N = 0;
        w && (N |= 8), P || !F && !a || (N |= 2048);
        var j = 0, et = 0;
        ot && (j |= 16), d === "UNIX" ? (et = 798, j |= function(q, gt) {
          var vt = q;
          return q || (vt = gt ? 16893 : 33204), (65535 & vt) << 16;
        }(T.unixPermissions, ot)) : (et = 20, j |= function(q) {
          return 63 & (q || 0);
        }(T.dosPermissions)), E = G.getUTCHours(), E <<= 6, E |= G.getUTCMinutes(), E <<= 5, E |= G.getUTCSeconds() / 2, O = G.getUTCFullYear() - 1980, O <<= 4, O |= G.getUTCMonth() + 1, O <<= 5, O |= G.getUTCDate(), F && (at = r(1, 1) + r(x(W), 4) + I, U += "up" + r(at.length, 2) + at), a && (Y = r(1, 1) + r(x(nt), 4) + C, U += "uc" + r(Y.length, 2) + Y);
        var J = "";
        return J += `
\0`, J += r(N, 2), J += L.magic, J += r(E, 2), J += r(O, 2), J += r(tt.crc32, 4), J += r(tt.compressedSize, 4), J += r(tt.uncompressedSize, 4), J += r(W.length, 2), J += r(U.length, 2), { fileRecord: y.LOCAL_FILE_HEADER + J + W + U, dirRecord: y.CENTRAL_FILE_HEADER + r(et, 2) + J + r(nt.length, 2) + "\0\0\0\0" + r(j, 4) + r(m, 4) + W + U + nt };
      }
      var i = n("../utils"), l = n("../stream/GenericWorker"), _ = n("../utf8"), x = n("../crc32"), y = n("../signature");
      function b(f, w, c, m) {
        l.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = w, this.zipPlatform = c, this.encodeFileName = m, this.streamFiles = f, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
      }
      i.inherits(b, l), b.prototype.push = function(f) {
        var w = f.meta.percent || 0, c = this.entriesCount, m = this._sources.length;
        this.accumulate ? this.contentBuffer.push(f) : (this.bytesWritten += f.data.length, l.prototype.push.call(this, { data: f.data, meta: { currentFile: this.currentFile, percent: c ? (w + 100 * (c - m - 1)) / c : 100 } }));
      }, b.prototype.openedSource = function(f) {
        this.currentSourceOffset = this.bytesWritten, this.currentFile = f.file.name;
        var w = this.streamFiles && !f.file.dir;
        if (w) {
          var c = s(f, w, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
          this.push({ data: c.fileRecord, meta: { percent: 0 } });
        } else this.accumulate = !0;
      }, b.prototype.closedSource = function(f) {
        this.accumulate = !1;
        var w = this.streamFiles && !f.file.dir, c = s(f, w, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
        if (this.dirRecords.push(c.dirRecord), w) this.push({ data: function(m) {
          return y.DATA_DESCRIPTOR + r(m.crc32, 4) + r(m.compressedSize, 4) + r(m.uncompressedSize, 4);
        }(f), meta: { percent: 100 } });
        else for (this.push({ data: c.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length; ) this.push(this.contentBuffer.shift());
        this.currentFile = null;
      }, b.prototype.flush = function() {
        for (var f = this.bytesWritten, w = 0; w < this.dirRecords.length; w++) this.push({ data: this.dirRecords[w], meta: { percent: 100 } });
        var c = this.bytesWritten - f, m = function(d, v, E, O, T) {
          var L = i.transformTo("string", T(O));
          return y.CENTRAL_DIRECTORY_END + "\0\0\0\0" + r(d, 2) + r(d, 2) + r(v, 4) + r(E, 4) + r(L.length, 2) + L;
        }(this.dirRecords.length, c, f, this.zipComment, this.encodeFileName);
        this.push({ data: m, meta: { percent: 100 } });
      }, b.prototype.prepareNextSource = function() {
        this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
      }, b.prototype.registerPrevious = function(f) {
        this._sources.push(f);
        var w = this;
        return f.on("data", function(c) {
          w.processChunk(c);
        }), f.on("end", function() {
          w.closedSource(w.previous.streamInfo), w._sources.length ? w.prepareNextSource() : w.end();
        }), f.on("error", function(c) {
          w.error(c);
        }), this;
      }, b.prototype.resume = function() {
        return !!l.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0));
      }, b.prototype.error = function(f) {
        var w = this._sources;
        if (!l.prototype.error.call(this, f)) return !1;
        for (var c = 0; c < w.length; c++) try {
          w[c].error(f);
        } catch {
        }
        return !0;
      }, b.prototype.lock = function() {
        l.prototype.lock.call(this);
        for (var f = this._sources, w = 0; w < f.length; w++) f[w].lock();
      }, h.exports = b;
    }, { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 }], 9: [function(n, h, u) {
      var r = n("../compressions"), s = n("./ZipFileWorker");
      u.generateWorker = function(i, l, _) {
        var x = new s(l.streamFiles, _, l.platform, l.encodeFileName), y = 0;
        try {
          i.forEach(function(b, f) {
            y++;
            var w = function(v, E) {
              var O = v || E, T = r[O];
              if (!T) throw new Error(O + " is not a valid compression method !");
              return T;
            }(f.options.compression, l.compression), c = f.options.compressionOptions || l.compressionOptions || {}, m = f.dir, d = f.date;
            f._compressWorker(w, c).withStreamInfo("file", { name: b, dir: m, date: d, comment: f.comment || "", unixPermissions: f.unixPermissions, dosPermissions: f.dosPermissions }).pipe(x);
          }), x.entriesCount = y;
        } catch (b) {
          x.error(b);
        }
        return x;
      };
    }, { "../compressions": 3, "./ZipFileWorker": 8 }], 10: [function(n, h, u) {
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
      }, r.external = n("./external"), h.exports = r;
    }, { "./defaults": 5, "./external": 6, "./load": 11, "./object": 15, "./support": 30 }], 11: [function(n, h, u) {
      var r = n("./utils"), s = n("./external"), i = n("./utf8"), l = n("./zipEntries"), _ = n("./stream/Crc32Probe"), x = n("./nodejsUtils");
      function y(b) {
        return new s.Promise(function(f, w) {
          var c = b.decompressed.getContentWorker().pipe(new _());
          c.on("error", function(m) {
            w(m);
          }).on("end", function() {
            c.streamInfo.crc32 !== b.decompressed.crc32 ? w(new Error("Corrupted zip : CRC32 mismatch")) : f();
          }).resume();
        });
      }
      h.exports = function(b, f) {
        var w = this;
        return f = r.extend(f || {}, { base64: !1, checkCRC32: !1, optimizedBinaryString: !1, createFolders: !1, decodeFileName: i.utf8decode }), x.isNode && x.isStream(b) ? s.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : r.prepareContent("the loaded zip file", b, !0, f.optimizedBinaryString, f.base64).then(function(c) {
          var m = new l(f);
          return m.load(c), m;
        }).then(function(c) {
          var m = [s.Promise.resolve(c)], d = c.files;
          if (f.checkCRC32) for (var v = 0; v < d.length; v++) m.push(y(d[v]));
          return s.Promise.all(m);
        }).then(function(c) {
          for (var m = c.shift(), d = m.files, v = 0; v < d.length; v++) {
            var E = d[v], O = E.fileNameStr, T = r.resolve(E.fileNameStr);
            w.file(T, E.decompressed, { binary: !0, optimizedBinaryString: !0, date: E.date, dir: E.dir, comment: E.fileCommentStr.length ? E.fileCommentStr : null, unixPermissions: E.unixPermissions, dosPermissions: E.dosPermissions, createFolders: f.createFolders }), E.dir || (w.file(T).unsafeOriginalName = O);
          }
          return m.zipComment.length && (w.comment = m.zipComment), w;
        });
      };
    }, { "./external": 6, "./nodejsUtils": 14, "./stream/Crc32Probe": 25, "./utf8": 31, "./utils": 32, "./zipEntries": 33 }], 12: [function(n, h, u) {
      var r = n("../utils"), s = n("../stream/GenericWorker");
      function i(l, _) {
        s.call(this, "Nodejs stream input adapter for " + l), this._upstreamEnded = !1, this._bindStream(_);
      }
      r.inherits(i, s), i.prototype._bindStream = function(l) {
        var _ = this;
        (this._stream = l).pause(), l.on("data", function(x) {
          _.push({ data: x, meta: { percent: 0 } });
        }).on("error", function(x) {
          _.isPaused ? this.generatedError = x : _.error(x);
        }).on("end", function() {
          _.isPaused ? _._upstreamEnded = !0 : _.end();
        });
      }, i.prototype.pause = function() {
        return !!s.prototype.pause.call(this) && (this._stream.pause(), !0);
      }, i.prototype.resume = function() {
        return !!s.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), !0);
      }, h.exports = i;
    }, { "../stream/GenericWorker": 28, "../utils": 32 }], 13: [function(n, h, u) {
      var r = n("readable-stream").Readable;
      function s(i, l, _) {
        r.call(this, l), this._helper = i;
        var x = this;
        i.on("data", function(y, b) {
          x.push(y) || x._helper.pause(), _ && _(b);
        }).on("error", function(y) {
          x.emit("error", y);
        }).on("end", function() {
          x.push(null);
        });
      }
      n("../utils").inherits(s, r), s.prototype._read = function() {
        this._helper.resume();
      }, h.exports = s;
    }, { "../utils": 32, "readable-stream": 16 }], 14: [function(n, h, u) {
      h.exports = { isNode: typeof Buffer < "u", newBufferFrom: function(r, s) {
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
    }, {}], 15: [function(n, h, u) {
      function r(T, L, P) {
        var W, I = i.getTypeOf(L), Z = i.extend(P || {}, x);
        Z.date = Z.date || /* @__PURE__ */ new Date(), Z.compression !== null && (Z.compression = Z.compression.toUpperCase()), typeof Z.unixPermissions == "string" && (Z.unixPermissions = parseInt(Z.unixPermissions, 8)), Z.unixPermissions && 16384 & Z.unixPermissions && (Z.dir = !0), Z.dosPermissions && 16 & Z.dosPermissions && (Z.dir = !0), Z.dir && (T = d(T)), Z.createFolders && (W = m(T)) && v.call(this, W, !0);
        var nt = I === "string" && Z.binary === !1 && Z.base64 === !1;
        P && P.binary !== void 0 || (Z.binary = !nt), (L instanceof y && L.uncompressedSize === 0 || Z.dir || !L || L.length === 0) && (Z.base64 = !1, Z.binary = !0, L = "", Z.compression = "STORE", I = "string");
        var C = null;
        C = L instanceof y || L instanceof l ? L : w.isNode && w.isStream(L) ? new c(T, L) : i.prepareContent(T, L, Z.binary, Z.optimizedBinaryString, Z.base64);
        var F = new b(T, C, Z);
        this.files[T] = F;
      }
      var s = n("./utf8"), i = n("./utils"), l = n("./stream/GenericWorker"), _ = n("./stream/StreamHelper"), x = n("./defaults"), y = n("./compressedObject"), b = n("./zipObject"), f = n("./generate"), w = n("./nodejsUtils"), c = n("./nodejs/NodejsStreamInputAdapter"), m = function(T) {
        T.slice(-1) === "/" && (T = T.substring(0, T.length - 1));
        var L = T.lastIndexOf("/");
        return 0 < L ? T.substring(0, L) : "";
      }, d = function(T) {
        return T.slice(-1) !== "/" && (T += "/"), T;
      }, v = function(T, L) {
        return L = L !== void 0 ? L : x.createFolders, T = d(T), this.files[T] || r.call(this, T, null, { dir: !0, createFolders: L }), this.files[T];
      };
      function E(T) {
        return Object.prototype.toString.call(T) === "[object RegExp]";
      }
      var O = { load: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, forEach: function(T) {
        var L, P, W;
        for (L in this.files) W = this.files[L], (P = L.slice(this.root.length, L.length)) && L.slice(0, this.root.length) === this.root && T(P, W);
      }, filter: function(T) {
        var L = [];
        return this.forEach(function(P, W) {
          T(P, W) && L.push(W);
        }), L;
      }, file: function(T, L, P) {
        if (arguments.length !== 1) return T = this.root + T, r.call(this, T, L, P), this;
        if (E(T)) {
          var W = T;
          return this.filter(function(Z, nt) {
            return !nt.dir && W.test(Z);
          });
        }
        var I = this.files[this.root + T];
        return I && !I.dir ? I : null;
      }, folder: function(T) {
        if (!T) return this;
        if (E(T)) return this.filter(function(I, Z) {
          return Z.dir && T.test(I);
        });
        var L = this.root + T, P = v.call(this, L), W = this.clone();
        return W.root = P.name, W;
      }, remove: function(T) {
        T = this.root + T;
        var L = this.files[T];
        if (L || (T.slice(-1) !== "/" && (T += "/"), L = this.files[T]), L && !L.dir) delete this.files[T];
        else for (var P = this.filter(function(I, Z) {
          return Z.name.slice(0, T.length) === T;
        }), W = 0; W < P.length; W++) delete this.files[P[W].name];
        return this;
      }, generate: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, generateInternalStream: function(T) {
        var L, P = {};
        try {
          if ((P = i.extend(T || {}, { streamFiles: !1, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: s.utf8encode })).type = P.type.toLowerCase(), P.compression = P.compression.toUpperCase(), P.type === "binarystring" && (P.type = "string"), !P.type) throw new Error("No output type specified.");
          i.checkSupport(P.type), P.platform !== "darwin" && P.platform !== "freebsd" && P.platform !== "linux" && P.platform !== "sunos" || (P.platform = "UNIX"), P.platform === "win32" && (P.platform = "DOS");
          var W = P.comment || this.comment || "";
          L = f.generateWorker(this, P, W);
        } catch (I) {
          (L = new l("error")).error(I);
        }
        return new _(L, P.type || "string", P.mimeType);
      }, generateAsync: function(T, L) {
        return this.generateInternalStream(T).accumulate(L);
      }, generateNodeStream: function(T, L) {
        return (T = T || {}).type || (T.type = "nodebuffer"), this.generateInternalStream(T).toNodejsStream(L);
      } };
      h.exports = O;
    }, { "./compressedObject": 2, "./defaults": 5, "./generate": 9, "./nodejs/NodejsStreamInputAdapter": 12, "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31, "./utils": 32, "./zipObject": 35 }], 16: [function(n, h, u) {
      h.exports = n("stream");
    }, { stream: void 0 }], 17: [function(n, h, u) {
      var r = n("./DataReader");
      function s(i) {
        r.call(this, i);
        for (var l = 0; l < this.data.length; l++) i[l] = 255 & i[l];
      }
      n("../utils").inherits(s, r), s.prototype.byteAt = function(i) {
        return this.data[this.zero + i];
      }, s.prototype.lastIndexOfSignature = function(i) {
        for (var l = i.charCodeAt(0), _ = i.charCodeAt(1), x = i.charCodeAt(2), y = i.charCodeAt(3), b = this.length - 4; 0 <= b; --b) if (this.data[b] === l && this.data[b + 1] === _ && this.data[b + 2] === x && this.data[b + 3] === y) return b - this.zero;
        return -1;
      }, s.prototype.readAndCheckSignature = function(i) {
        var l = i.charCodeAt(0), _ = i.charCodeAt(1), x = i.charCodeAt(2), y = i.charCodeAt(3), b = this.readData(4);
        return l === b[0] && _ === b[1] && x === b[2] && y === b[3];
      }, s.prototype.readData = function(i) {
        if (this.checkOffset(i), i === 0) return [];
        var l = this.data.slice(this.zero + this.index, this.zero + this.index + i);
        return this.index += i, l;
      }, h.exports = s;
    }, { "../utils": 32, "./DataReader": 18 }], 18: [function(n, h, u) {
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
      } }, h.exports = s;
    }, { "../utils": 32 }], 19: [function(n, h, u) {
      var r = n("./Uint8ArrayReader");
      function s(i) {
        r.call(this, i);
      }
      n("../utils").inherits(s, r), s.prototype.readData = function(i) {
        this.checkOffset(i);
        var l = this.data.slice(this.zero + this.index, this.zero + this.index + i);
        return this.index += i, l;
      }, h.exports = s;
    }, { "../utils": 32, "./Uint8ArrayReader": 21 }], 20: [function(n, h, u) {
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
      }, h.exports = s;
    }, { "../utils": 32, "./DataReader": 18 }], 21: [function(n, h, u) {
      var r = n("./ArrayReader");
      function s(i) {
        r.call(this, i);
      }
      n("../utils").inherits(s, r), s.prototype.readData = function(i) {
        if (this.checkOffset(i), i === 0) return new Uint8Array(0);
        var l = this.data.subarray(this.zero + this.index, this.zero + this.index + i);
        return this.index += i, l;
      }, h.exports = s;
    }, { "../utils": 32, "./ArrayReader": 17 }], 22: [function(n, h, u) {
      var r = n("../utils"), s = n("../support"), i = n("./ArrayReader"), l = n("./StringReader"), _ = n("./NodeBufferReader"), x = n("./Uint8ArrayReader");
      h.exports = function(y) {
        var b = r.getTypeOf(y);
        return r.checkSupport(b), b !== "string" || s.uint8array ? b === "nodebuffer" ? new _(y) : s.uint8array ? new x(r.transformTo("uint8array", y)) : new i(r.transformTo("array", y)) : new l(y);
      };
    }, { "../support": 30, "../utils": 32, "./ArrayReader": 17, "./NodeBufferReader": 19, "./StringReader": 20, "./Uint8ArrayReader": 21 }], 23: [function(n, h, u) {
      u.LOCAL_FILE_HEADER = "PK", u.CENTRAL_FILE_HEADER = "PK", u.CENTRAL_DIRECTORY_END = "PK", u.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", u.ZIP64_CENTRAL_DIRECTORY_END = "PK", u.DATA_DESCRIPTOR = "PK\x07\b";
    }, {}], 24: [function(n, h, u) {
      var r = n("./GenericWorker"), s = n("../utils");
      function i(l) {
        r.call(this, "ConvertWorker to " + l), this.destType = l;
      }
      s.inherits(i, r), i.prototype.processChunk = function(l) {
        this.push({ data: s.transformTo(this.destType, l.data), meta: l.meta });
      }, h.exports = i;
    }, { "../utils": 32, "./GenericWorker": 28 }], 25: [function(n, h, u) {
      var r = n("./GenericWorker"), s = n("../crc32");
      function i() {
        r.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
      }
      n("../utils").inherits(i, r), i.prototype.processChunk = function(l) {
        this.streamInfo.crc32 = s(l.data, this.streamInfo.crc32 || 0), this.push(l);
      }, h.exports = i;
    }, { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 }], 26: [function(n, h, u) {
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
      }, h.exports = i;
    }, { "../utils": 32, "./GenericWorker": 28 }], 27: [function(n, h, u) {
      var r = n("../utils"), s = n("./GenericWorker");
      function i(l) {
        s.call(this, "DataWorker");
        var _ = this;
        this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, l.then(function(x) {
          _.dataIsReady = !0, _.data = x, _.max = x && x.length || 0, _.type = r.getTypeOf(x), _.isPaused || _._tickAndRepeat();
        }, function(x) {
          _.error(x);
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
      }, h.exports = i;
    }, { "../utils": 32, "./GenericWorker": 28 }], 28: [function(n, h, u) {
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
      } }, h.exports = r;
    }, {}], 29: [function(n, h, u) {
      var r = n("../utils"), s = n("./ConvertWorker"), i = n("./GenericWorker"), l = n("../base64"), _ = n("../support"), x = n("../external"), y = null;
      if (_.nodestream) try {
        y = n("../nodejs/NodejsStreamOutputAdapter");
      } catch {
      }
      function b(w, c) {
        return new x.Promise(function(m, d) {
          var v = [], E = w._internalType, O = w._outputType, T = w._mimeType;
          w.on("data", function(L, P) {
            v.push(L), c && c(P);
          }).on("error", function(L) {
            v = [], d(L);
          }).on("end", function() {
            try {
              var L = function(P, W, I) {
                switch (P) {
                  case "blob":
                    return r.newBlob(r.transformTo("arraybuffer", W), I);
                  case "base64":
                    return l.encode(W);
                  default:
                    return r.transformTo(P, W);
                }
              }(O, function(P, W) {
                var I, Z = 0, nt = null, C = 0;
                for (I = 0; I < W.length; I++) C += W[I].length;
                switch (P) {
                  case "string":
                    return W.join("");
                  case "array":
                    return Array.prototype.concat.apply([], W);
                  case "uint8array":
                    for (nt = new Uint8Array(C), I = 0; I < W.length; I++) nt.set(W[I], Z), Z += W[I].length;
                    return nt;
                  case "nodebuffer":
                    return Buffer.concat(W);
                  default:
                    throw new Error("concat : unsupported type '" + P + "'");
                }
              }(E, v), T);
              m(L);
            } catch (P) {
              d(P);
            }
            v = [];
          }).resume();
        });
      }
      function f(w, c, m) {
        var d = c;
        switch (c) {
          case "blob":
          case "arraybuffer":
            d = "uint8array";
            break;
          case "base64":
            d = "string";
        }
        try {
          this._internalType = d, this._outputType = c, this._mimeType = m, r.checkSupport(d), this._worker = w.pipe(new s(d)), w.lock();
        } catch (v) {
          this._worker = new i("error"), this._worker.error(v);
        }
      }
      f.prototype = { accumulate: function(w) {
        return b(this, w);
      }, on: function(w, c) {
        var m = this;
        return w === "data" ? this._worker.on(w, function(d) {
          c.call(m, d.data, d.meta);
        }) : this._worker.on(w, function() {
          r.delay(c, arguments, m);
        }), this;
      }, resume: function() {
        return r.delay(this._worker.resume, [], this._worker), this;
      }, pause: function() {
        return this._worker.pause(), this;
      }, toNodejsStream: function(w) {
        if (r.checkSupport("nodestream"), this._outputType !== "nodebuffer") throw new Error(this._outputType + " is not supported by this method");
        return new y(this, { objectMode: this._outputType !== "nodebuffer" }, w);
      } }, h.exports = f;
    }, { "../base64": 1, "../external": 6, "../nodejs/NodejsStreamOutputAdapter": 13, "../support": 30, "../utils": 32, "./ConvertWorker": 24, "./GenericWorker": 28 }], 30: [function(n, h, u) {
      if (u.base64 = !0, u.array = !0, u.string = !0, u.arraybuffer = typeof ArrayBuffer < "u" && typeof Uint8Array < "u", u.nodebuffer = typeof Buffer < "u", u.uint8array = typeof Uint8Array < "u", typeof ArrayBuffer > "u") u.blob = !1;
      else {
        var r = new ArrayBuffer(0);
        try {
          u.blob = new Blob([r], { type: "application/zip" }).size === 0;
        } catch {
          try {
            var s = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            s.append(r), u.blob = s.getBlob("application/zip").size === 0;
          } catch {
            u.blob = !1;
          }
        }
      }
      try {
        u.nodestream = !!n("readable-stream").Readable;
      } catch {
        u.nodestream = !1;
      }
    }, { "readable-stream": 16 }], 31: [function(n, h, u) {
      for (var r = n("./utils"), s = n("./support"), i = n("./nodejsUtils"), l = n("./stream/GenericWorker"), _ = new Array(256), x = 0; x < 256; x++) _[x] = 252 <= x ? 6 : 248 <= x ? 5 : 240 <= x ? 4 : 224 <= x ? 3 : 192 <= x ? 2 : 1;
      _[254] = _[254] = 1;
      function y() {
        l.call(this, "utf-8 decode"), this.leftOver = null;
      }
      function b() {
        l.call(this, "utf-8 encode");
      }
      u.utf8encode = function(f) {
        return s.nodebuffer ? i.newBufferFrom(f, "utf-8") : function(w) {
          var c, m, d, v, E, O = w.length, T = 0;
          for (v = 0; v < O; v++) (64512 & (m = w.charCodeAt(v))) == 55296 && v + 1 < O && (64512 & (d = w.charCodeAt(v + 1))) == 56320 && (m = 65536 + (m - 55296 << 10) + (d - 56320), v++), T += m < 128 ? 1 : m < 2048 ? 2 : m < 65536 ? 3 : 4;
          for (c = s.uint8array ? new Uint8Array(T) : new Array(T), v = E = 0; E < T; v++) (64512 & (m = w.charCodeAt(v))) == 55296 && v + 1 < O && (64512 & (d = w.charCodeAt(v + 1))) == 56320 && (m = 65536 + (m - 55296 << 10) + (d - 56320), v++), m < 128 ? c[E++] = m : (m < 2048 ? c[E++] = 192 | m >>> 6 : (m < 65536 ? c[E++] = 224 | m >>> 12 : (c[E++] = 240 | m >>> 18, c[E++] = 128 | m >>> 12 & 63), c[E++] = 128 | m >>> 6 & 63), c[E++] = 128 | 63 & m);
          return c;
        }(f);
      }, u.utf8decode = function(f) {
        return s.nodebuffer ? r.transformTo("nodebuffer", f).toString("utf-8") : function(w) {
          var c, m, d, v, E = w.length, O = new Array(2 * E);
          for (c = m = 0; c < E; ) if ((d = w[c++]) < 128) O[m++] = d;
          else if (4 < (v = _[d])) O[m++] = 65533, c += v - 1;
          else {
            for (d &= v === 2 ? 31 : v === 3 ? 15 : 7; 1 < v && c < E; ) d = d << 6 | 63 & w[c++], v--;
            1 < v ? O[m++] = 65533 : d < 65536 ? O[m++] = d : (d -= 65536, O[m++] = 55296 | d >> 10 & 1023, O[m++] = 56320 | 1023 & d);
          }
          return O.length !== m && (O.subarray ? O = O.subarray(0, m) : O.length = m), r.applyFromCharCode(O);
        }(f = r.transformTo(s.uint8array ? "uint8array" : "array", f));
      }, r.inherits(y, l), y.prototype.processChunk = function(f) {
        var w = r.transformTo(s.uint8array ? "uint8array" : "array", f.data);
        if (this.leftOver && this.leftOver.length) {
          if (s.uint8array) {
            var c = w;
            (w = new Uint8Array(c.length + this.leftOver.length)).set(this.leftOver, 0), w.set(c, this.leftOver.length);
          } else w = this.leftOver.concat(w);
          this.leftOver = null;
        }
        var m = function(v, E) {
          var O;
          for ((E = E || v.length) > v.length && (E = v.length), O = E - 1; 0 <= O && (192 & v[O]) == 128; ) O--;
          return O < 0 || O === 0 ? E : O + _[v[O]] > E ? O : E;
        }(w), d = w;
        m !== w.length && (s.uint8array ? (d = w.subarray(0, m), this.leftOver = w.subarray(m, w.length)) : (d = w.slice(0, m), this.leftOver = w.slice(m, w.length))), this.push({ data: u.utf8decode(d), meta: f.meta });
      }, y.prototype.flush = function() {
        this.leftOver && this.leftOver.length && (this.push({ data: u.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
      }, u.Utf8DecodeWorker = y, r.inherits(b, l), b.prototype.processChunk = function(f) {
        this.push({ data: u.utf8encode(f.data), meta: f.meta });
      }, u.Utf8EncodeWorker = b;
    }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }], 32: [function(n, h, u) {
      var r = n("./support"), s = n("./base64"), i = n("./nodejsUtils"), l = n("./external");
      function _(c) {
        return c;
      }
      function x(c, m) {
        for (var d = 0; d < c.length; ++d) m[d] = 255 & c.charCodeAt(d);
        return m;
      }
      n("setimmediate"), u.newBlob = function(c, m) {
        u.checkSupport("blob");
        try {
          return new Blob([c], { type: m });
        } catch {
          try {
            var d = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            return d.append(c), d.getBlob(m);
          } catch {
            throw new Error("Bug : can't construct the Blob.");
          }
        }
      };
      var y = { stringifyByChunk: function(c, m, d) {
        var v = [], E = 0, O = c.length;
        if (O <= d) return String.fromCharCode.apply(null, c);
        for (; E < O; ) m === "array" || m === "nodebuffer" ? v.push(String.fromCharCode.apply(null, c.slice(E, Math.min(E + d, O)))) : v.push(String.fromCharCode.apply(null, c.subarray(E, Math.min(E + d, O)))), E += d;
        return v.join("");
      }, stringifyByChar: function(c) {
        for (var m = "", d = 0; d < c.length; d++) m += String.fromCharCode(c[d]);
        return m;
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
      function b(c) {
        var m = 65536, d = u.getTypeOf(c), v = !0;
        if (d === "uint8array" ? v = y.applyCanBeUsed.uint8array : d === "nodebuffer" && (v = y.applyCanBeUsed.nodebuffer), v) for (; 1 < m; ) try {
          return y.stringifyByChunk(c, d, m);
        } catch {
          m = Math.floor(m / 2);
        }
        return y.stringifyByChar(c);
      }
      function f(c, m) {
        for (var d = 0; d < c.length; d++) m[d] = c[d];
        return m;
      }
      u.applyFromCharCode = b;
      var w = {};
      w.string = { string: _, array: function(c) {
        return x(c, new Array(c.length));
      }, arraybuffer: function(c) {
        return w.string.uint8array(c).buffer;
      }, uint8array: function(c) {
        return x(c, new Uint8Array(c.length));
      }, nodebuffer: function(c) {
        return x(c, i.allocBuffer(c.length));
      } }, w.array = { string: b, array: _, arraybuffer: function(c) {
        return new Uint8Array(c).buffer;
      }, uint8array: function(c) {
        return new Uint8Array(c);
      }, nodebuffer: function(c) {
        return i.newBufferFrom(c);
      } }, w.arraybuffer = { string: function(c) {
        return b(new Uint8Array(c));
      }, array: function(c) {
        return f(new Uint8Array(c), new Array(c.byteLength));
      }, arraybuffer: _, uint8array: function(c) {
        return new Uint8Array(c);
      }, nodebuffer: function(c) {
        return i.newBufferFrom(new Uint8Array(c));
      } }, w.uint8array = { string: b, array: function(c) {
        return f(c, new Array(c.length));
      }, arraybuffer: function(c) {
        return c.buffer;
      }, uint8array: _, nodebuffer: function(c) {
        return i.newBufferFrom(c);
      } }, w.nodebuffer = { string: b, array: function(c) {
        return f(c, new Array(c.length));
      }, arraybuffer: function(c) {
        return w.nodebuffer.uint8array(c).buffer;
      }, uint8array: function(c) {
        return f(c, new Uint8Array(c.length));
      }, nodebuffer: _ }, u.transformTo = function(c, m) {
        if (m = m || "", !c) return m;
        u.checkSupport(c);
        var d = u.getTypeOf(m);
        return w[d][c](m);
      }, u.resolve = function(c) {
        for (var m = c.split("/"), d = [], v = 0; v < m.length; v++) {
          var E = m[v];
          E === "." || E === "" && v !== 0 && v !== m.length - 1 || (E === ".." ? d.pop() : d.push(E));
        }
        return d.join("/");
      }, u.getTypeOf = function(c) {
        return typeof c == "string" ? "string" : Object.prototype.toString.call(c) === "[object Array]" ? "array" : r.nodebuffer && i.isBuffer(c) ? "nodebuffer" : r.uint8array && c instanceof Uint8Array ? "uint8array" : r.arraybuffer && c instanceof ArrayBuffer ? "arraybuffer" : void 0;
      }, u.checkSupport = function(c) {
        if (!r[c.toLowerCase()]) throw new Error(c + " is not supported by this platform");
      }, u.MAX_VALUE_16BITS = 65535, u.MAX_VALUE_32BITS = -1, u.pretty = function(c) {
        var m, d, v = "";
        for (d = 0; d < (c || "").length; d++) v += "\\x" + ((m = c.charCodeAt(d)) < 16 ? "0" : "") + m.toString(16).toUpperCase();
        return v;
      }, u.delay = function(c, m, d) {
        setImmediate(function() {
          c.apply(d || null, m || []);
        });
      }, u.inherits = function(c, m) {
        function d() {
        }
        d.prototype = m.prototype, c.prototype = new d();
      }, u.extend = function() {
        var c, m, d = {};
        for (c = 0; c < arguments.length; c++) for (m in arguments[c]) Object.prototype.hasOwnProperty.call(arguments[c], m) && d[m] === void 0 && (d[m] = arguments[c][m]);
        return d;
      }, u.prepareContent = function(c, m, d, v, E) {
        return l.Promise.resolve(m).then(function(O) {
          return r.blob && (O instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(O)) !== -1) && typeof FileReader < "u" ? new l.Promise(function(T, L) {
            var P = new FileReader();
            P.onload = function(W) {
              T(W.target.result);
            }, P.onerror = function(W) {
              L(W.target.error);
            }, P.readAsArrayBuffer(O);
          }) : O;
        }).then(function(O) {
          var T = u.getTypeOf(O);
          return T ? (T === "arraybuffer" ? O = u.transformTo("uint8array", O) : T === "string" && (E ? O = s.decode(O) : d && v !== !0 && (O = function(L) {
            return x(L, r.uint8array ? new Uint8Array(L.length) : new Array(L.length));
          }(O))), O) : l.Promise.reject(new Error("Can't read the data of '" + c + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
        });
      };
    }, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, setimmediate: 54 }], 33: [function(n, h, u) {
      var r = n("./reader/readerFor"), s = n("./utils"), i = n("./signature"), l = n("./zipEntry"), _ = n("./support");
      function x(y) {
        this.files = [], this.loadOptions = y;
      }
      x.prototype = { checkSignature: function(y) {
        if (!this.reader.readAndCheckSignature(y)) {
          this.reader.index -= 4;
          var b = this.reader.readString(4);
          throw new Error("Corrupted zip or bug: unexpected signature (" + s.pretty(b) + ", expected " + s.pretty(y) + ")");
        }
      }, isSignature: function(y, b) {
        var f = this.reader.index;
        this.reader.setIndex(y);
        var w = this.reader.readString(4) === b;
        return this.reader.setIndex(f), w;
      }, readBlockEndOfCentral: function() {
        this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
        var y = this.reader.readData(this.zipCommentLength), b = _.uint8array ? "uint8array" : "array", f = s.transformTo(b, y);
        this.zipComment = this.loadOptions.decodeFileName(f);
      }, readBlockZip64EndOfCentral: function() {
        this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
        for (var y, b, f, w = this.zip64EndOfCentralSize - 44; 0 < w; ) y = this.reader.readInt(2), b = this.reader.readInt(4), f = this.reader.readData(b), this.zip64ExtensibleData[y] = { id: y, length: b, value: f };
      }, readBlockZip64EndOfCentralLocator: function() {
        if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount) throw new Error("Multi-volumes zip are not supported");
      }, readLocalFiles: function() {
        var y, b;
        for (y = 0; y < this.files.length; y++) b = this.files[y], this.reader.setIndex(b.localHeaderOffset), this.checkSignature(i.LOCAL_FILE_HEADER), b.readLocalPart(this.reader), b.handleUTF8(), b.processAttributes();
      }, readCentralDir: function() {
        var y;
        for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(i.CENTRAL_FILE_HEADER); ) (y = new l({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(y);
        if (this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0) throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
      }, readEndOfCentral: function() {
        var y = this.reader.lastIndexOfSignature(i.CENTRAL_DIRECTORY_END);
        if (y < 0) throw this.isSignature(0, i.LOCAL_FILE_HEADER) ? new Error("Corrupted zip: can't find end of central directory") : new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
        this.reader.setIndex(y);
        var b = y;
        if (this.checkSignature(i.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === s.MAX_VALUE_16BITS || this.diskWithCentralDirStart === s.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === s.MAX_VALUE_16BITS || this.centralDirRecords === s.MAX_VALUE_16BITS || this.centralDirSize === s.MAX_VALUE_32BITS || this.centralDirOffset === s.MAX_VALUE_32BITS) {
          if (this.zip64 = !0, (y = this.reader.lastIndexOfSignature(i.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
          if (this.reader.setIndex(y), this.checkSignature(i.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, i.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(i.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
          this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(i.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
        }
        var f = this.centralDirOffset + this.centralDirSize;
        this.zip64 && (f += 20, f += 12 + this.zip64EndOfCentralSize);
        var w = b - f;
        if (0 < w) this.isSignature(b, i.CENTRAL_FILE_HEADER) || (this.reader.zero = w);
        else if (w < 0) throw new Error("Corrupted zip: missing " + Math.abs(w) + " bytes.");
      }, prepareReader: function(y) {
        this.reader = r(y);
      }, load: function(y) {
        this.prepareReader(y), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
      } }, h.exports = x;
    }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utils": 32, "./zipEntry": 34 }], 34: [function(n, h, u) {
      var r = n("./reader/readerFor"), s = n("./utils"), i = n("./compressedObject"), l = n("./crc32"), _ = n("./utf8"), x = n("./compressions"), y = n("./support");
      function b(f, w) {
        this.options = f, this.loadOptions = w;
      }
      b.prototype = { isEncrypted: function() {
        return (1 & this.bitFlag) == 1;
      }, useUTF8: function() {
        return (2048 & this.bitFlag) == 2048;
      }, readLocalPart: function(f) {
        var w, c;
        if (f.skip(22), this.fileNameLength = f.readInt(2), c = f.readInt(2), this.fileName = f.readData(this.fileNameLength), f.skip(c), this.compressedSize === -1 || this.uncompressedSize === -1) throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
        if ((w = function(m) {
          for (var d in x) if (Object.prototype.hasOwnProperty.call(x, d) && x[d].magic === m) return x[d];
          return null;
        }(this.compressionMethod)) === null) throw new Error("Corrupted zip : compression " + s.pretty(this.compressionMethod) + " unknown (inner file : " + s.transformTo("string", this.fileName) + ")");
        this.decompressed = new i(this.compressedSize, this.uncompressedSize, this.crc32, w, f.readData(this.compressedSize));
      }, readCentralPart: function(f) {
        this.versionMadeBy = f.readInt(2), f.skip(2), this.bitFlag = f.readInt(2), this.compressionMethod = f.readString(2), this.date = f.readDate(), this.crc32 = f.readInt(4), this.compressedSize = f.readInt(4), this.uncompressedSize = f.readInt(4);
        var w = f.readInt(2);
        if (this.extraFieldsLength = f.readInt(2), this.fileCommentLength = f.readInt(2), this.diskNumberStart = f.readInt(2), this.internalFileAttributes = f.readInt(2), this.externalFileAttributes = f.readInt(4), this.localHeaderOffset = f.readInt(4), this.isEncrypted()) throw new Error("Encrypted zip are not supported");
        f.skip(w), this.readExtraFields(f), this.parseZIP64ExtraField(f), this.fileComment = f.readData(this.fileCommentLength);
      }, processAttributes: function() {
        this.unixPermissions = null, this.dosPermissions = null;
        var f = this.versionMadeBy >> 8;
        this.dir = !!(16 & this.externalFileAttributes), f == 0 && (this.dosPermissions = 63 & this.externalFileAttributes), f == 3 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || this.fileNameStr.slice(-1) !== "/" || (this.dir = !0);
      }, parseZIP64ExtraField: function() {
        if (this.extraFields[1]) {
          var f = r(this.extraFields[1].value);
          this.uncompressedSize === s.MAX_VALUE_32BITS && (this.uncompressedSize = f.readInt(8)), this.compressedSize === s.MAX_VALUE_32BITS && (this.compressedSize = f.readInt(8)), this.localHeaderOffset === s.MAX_VALUE_32BITS && (this.localHeaderOffset = f.readInt(8)), this.diskNumberStart === s.MAX_VALUE_32BITS && (this.diskNumberStart = f.readInt(4));
        }
      }, readExtraFields: function(f) {
        var w, c, m, d = f.index + this.extraFieldsLength;
        for (this.extraFields || (this.extraFields = {}); f.index + 4 < d; ) w = f.readInt(2), c = f.readInt(2), m = f.readData(c), this.extraFields[w] = { id: w, length: c, value: m };
        f.setIndex(d);
      }, handleUTF8: function() {
        var f = y.uint8array ? "uint8array" : "array";
        if (this.useUTF8()) this.fileNameStr = _.utf8decode(this.fileName), this.fileCommentStr = _.utf8decode(this.fileComment);
        else {
          var w = this.findExtraFieldUnicodePath();
          if (w !== null) this.fileNameStr = w;
          else {
            var c = s.transformTo(f, this.fileName);
            this.fileNameStr = this.loadOptions.decodeFileName(c);
          }
          var m = this.findExtraFieldUnicodeComment();
          if (m !== null) this.fileCommentStr = m;
          else {
            var d = s.transformTo(f, this.fileComment);
            this.fileCommentStr = this.loadOptions.decodeFileName(d);
          }
        }
      }, findExtraFieldUnicodePath: function() {
        var f = this.extraFields[28789];
        if (f) {
          var w = r(f.value);
          return w.readInt(1) !== 1 || l(this.fileName) !== w.readInt(4) ? null : _.utf8decode(w.readData(f.length - 5));
        }
        return null;
      }, findExtraFieldUnicodeComment: function() {
        var f = this.extraFields[25461];
        if (f) {
          var w = r(f.value);
          return w.readInt(1) !== 1 || l(this.fileComment) !== w.readInt(4) ? null : _.utf8decode(w.readData(f.length - 5));
        }
        return null;
      } }, h.exports = b;
    }, { "./compressedObject": 2, "./compressions": 3, "./crc32": 4, "./reader/readerFor": 22, "./support": 30, "./utf8": 31, "./utils": 32 }], 35: [function(n, h, u) {
      function r(w, c, m) {
        this.name = w, this.dir = m.dir, this.date = m.date, this.comment = m.comment, this.unixPermissions = m.unixPermissions, this.dosPermissions = m.dosPermissions, this._data = c, this._dataBinary = m.binary, this.options = { compression: m.compression, compressionOptions: m.compressionOptions };
      }
      var s = n("./stream/StreamHelper"), i = n("./stream/DataWorker"), l = n("./utf8"), _ = n("./compressedObject"), x = n("./stream/GenericWorker");
      r.prototype = { internalStream: function(w) {
        var c = null, m = "string";
        try {
          if (!w) throw new Error("No output type specified.");
          var d = (m = w.toLowerCase()) === "string" || m === "text";
          m !== "binarystring" && m !== "text" || (m = "string"), c = this._decompressWorker();
          var v = !this._dataBinary;
          v && !d && (c = c.pipe(new l.Utf8EncodeWorker())), !v && d && (c = c.pipe(new l.Utf8DecodeWorker()));
        } catch (E) {
          (c = new x("error")).error(E);
        }
        return new s(c, m, "");
      }, async: function(w, c) {
        return this.internalStream(w).accumulate(c);
      }, nodeStream: function(w, c) {
        return this.internalStream(w || "nodebuffer").toNodejsStream(c);
      }, _compressWorker: function(w, c) {
        if (this._data instanceof _ && this._data.compression.magic === w.magic) return this._data.getCompressedWorker();
        var m = this._decompressWorker();
        return this._dataBinary || (m = m.pipe(new l.Utf8EncodeWorker())), _.createWorkerFrom(m, w, c);
      }, _decompressWorker: function() {
        return this._data instanceof _ ? this._data.getContentWorker() : this._data instanceof x ? this._data : new i(this._data);
      } };
      for (var y = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], b = function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, f = 0; f < y.length; f++) r.prototype[y[f]] = b;
      h.exports = r;
    }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }], 36: [function(n, h, u) {
      (function(r) {
        var s, i, l = r.MutationObserver || r.WebKitMutationObserver;
        if (l) {
          var _ = 0, x = new l(w), y = r.document.createTextNode("");
          x.observe(y, { characterData: !0 }), s = function() {
            y.data = _ = ++_ % 2;
          };
        } else if (r.setImmediate || r.MessageChannel === void 0) s = "document" in r && "onreadystatechange" in r.document.createElement("script") ? function() {
          var c = r.document.createElement("script");
          c.onreadystatechange = function() {
            w(), c.onreadystatechange = null, c.parentNode.removeChild(c), c = null;
          }, r.document.documentElement.appendChild(c);
        } : function() {
          setTimeout(w, 0);
        };
        else {
          var b = new r.MessageChannel();
          b.port1.onmessage = w, s = function() {
            b.port2.postMessage(0);
          };
        }
        var f = [];
        function w() {
          var c, m;
          i = !0;
          for (var d = f.length; d; ) {
            for (m = f, f = [], c = -1; ++c < d; ) m[c]();
            d = f.length;
          }
          i = !1;
        }
        h.exports = function(c) {
          f.push(c) !== 1 || i || s();
        };
      }).call(this, typeof he < "u" ? he : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 37: [function(n, h, u) {
      var r = n("immediate");
      function s() {
      }
      var i = {}, l = ["REJECTED"], _ = ["FULFILLED"], x = ["PENDING"];
      function y(d) {
        if (typeof d != "function") throw new TypeError("resolver must be a function");
        this.state = x, this.queue = [], this.outcome = void 0, d !== s && c(this, d);
      }
      function b(d, v, E) {
        this.promise = d, typeof v == "function" && (this.onFulfilled = v, this.callFulfilled = this.otherCallFulfilled), typeof E == "function" && (this.onRejected = E, this.callRejected = this.otherCallRejected);
      }
      function f(d, v, E) {
        r(function() {
          var O;
          try {
            O = v(E);
          } catch (T) {
            return i.reject(d, T);
          }
          O === d ? i.reject(d, new TypeError("Cannot resolve promise with itself")) : i.resolve(d, O);
        });
      }
      function w(d) {
        var v = d && d.then;
        if (d && (typeof d == "object" || typeof d == "function") && typeof v == "function") return function() {
          v.apply(d, arguments);
        };
      }
      function c(d, v) {
        var E = !1;
        function O(P) {
          E || (E = !0, i.reject(d, P));
        }
        function T(P) {
          E || (E = !0, i.resolve(d, P));
        }
        var L = m(function() {
          v(T, O);
        });
        L.status === "error" && O(L.value);
      }
      function m(d, v) {
        var E = {};
        try {
          E.value = d(v), E.status = "success";
        } catch (O) {
          E.status = "error", E.value = O;
        }
        return E;
      }
      (h.exports = y).prototype.finally = function(d) {
        if (typeof d != "function") return this;
        var v = this.constructor;
        return this.then(function(E) {
          return v.resolve(d()).then(function() {
            return E;
          });
        }, function(E) {
          return v.resolve(d()).then(function() {
            throw E;
          });
        });
      }, y.prototype.catch = function(d) {
        return this.then(null, d);
      }, y.prototype.then = function(d, v) {
        if (typeof d != "function" && this.state === _ || typeof v != "function" && this.state === l) return this;
        var E = new this.constructor(s);
        return this.state !== x ? f(E, this.state === _ ? d : v, this.outcome) : this.queue.push(new b(E, d, v)), E;
      }, b.prototype.callFulfilled = function(d) {
        i.resolve(this.promise, d);
      }, b.prototype.otherCallFulfilled = function(d) {
        f(this.promise, this.onFulfilled, d);
      }, b.prototype.callRejected = function(d) {
        i.reject(this.promise, d);
      }, b.prototype.otherCallRejected = function(d) {
        f(this.promise, this.onRejected, d);
      }, i.resolve = function(d, v) {
        var E = m(w, v);
        if (E.status === "error") return i.reject(d, E.value);
        var O = E.value;
        if (O) c(d, O);
        else {
          d.state = _, d.outcome = v;
          for (var T = -1, L = d.queue.length; ++T < L; ) d.queue[T].callFulfilled(v);
        }
        return d;
      }, i.reject = function(d, v) {
        d.state = l, d.outcome = v;
        for (var E = -1, O = d.queue.length; ++E < O; ) d.queue[E].callRejected(v);
        return d;
      }, y.resolve = function(d) {
        return d instanceof this ? d : i.resolve(new this(s), d);
      }, y.reject = function(d) {
        var v = new this(s);
        return i.reject(v, d);
      }, y.all = function(d) {
        var v = this;
        if (Object.prototype.toString.call(d) !== "[object Array]") return this.reject(new TypeError("must be an array"));
        var E = d.length, O = !1;
        if (!E) return this.resolve([]);
        for (var T = new Array(E), L = 0, P = -1, W = new this(s); ++P < E; ) I(d[P], P);
        return W;
        function I(Z, nt) {
          v.resolve(Z).then(function(C) {
            T[nt] = C, ++L !== E || O || (O = !0, i.resolve(W, T));
          }, function(C) {
            O || (O = !0, i.reject(W, C));
          });
        }
      }, y.race = function(d) {
        var v = this;
        if (Object.prototype.toString.call(d) !== "[object Array]") return this.reject(new TypeError("must be an array"));
        var E = d.length, O = !1;
        if (!E) return this.resolve([]);
        for (var T = -1, L = new this(s); ++T < E; ) P = d[T], v.resolve(P).then(function(W) {
          O || (O = !0, i.resolve(L, W));
        }, function(W) {
          O || (O = !0, i.reject(L, W));
        });
        var P;
        return L;
      };
    }, { immediate: 36 }], 38: [function(n, h, u) {
      var r = {};
      (0, n("./lib/utils/common").assign)(r, n("./lib/deflate"), n("./lib/inflate"), n("./lib/zlib/constants")), h.exports = r;
    }, { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 }], 39: [function(n, h, u) {
      var r = n("./zlib/deflate"), s = n("./utils/common"), i = n("./utils/strings"), l = n("./zlib/messages"), _ = n("./zlib/zstream"), x = Object.prototype.toString, y = 0, b = -1, f = 0, w = 8;
      function c(d) {
        if (!(this instanceof c)) return new c(d);
        this.options = s.assign({ level: b, method: w, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: f, to: "" }, d || {});
        var v = this.options;
        v.raw && 0 < v.windowBits ? v.windowBits = -v.windowBits : v.gzip && 0 < v.windowBits && v.windowBits < 16 && (v.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new _(), this.strm.avail_out = 0;
        var E = r.deflateInit2(this.strm, v.level, v.method, v.windowBits, v.memLevel, v.strategy);
        if (E !== y) throw new Error(l[E]);
        if (v.header && r.deflateSetHeader(this.strm, v.header), v.dictionary) {
          var O;
          if (O = typeof v.dictionary == "string" ? i.string2buf(v.dictionary) : x.call(v.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(v.dictionary) : v.dictionary, (E = r.deflateSetDictionary(this.strm, O)) !== y) throw new Error(l[E]);
          this._dict_set = !0;
        }
      }
      function m(d, v) {
        var E = new c(v);
        if (E.push(d, !0), E.err) throw E.msg || l[E.err];
        return E.result;
      }
      c.prototype.push = function(d, v) {
        var E, O, T = this.strm, L = this.options.chunkSize;
        if (this.ended) return !1;
        O = v === ~~v ? v : v === !0 ? 4 : 0, typeof d == "string" ? T.input = i.string2buf(d) : x.call(d) === "[object ArrayBuffer]" ? T.input = new Uint8Array(d) : T.input = d, T.next_in = 0, T.avail_in = T.input.length;
        do {
          if (T.avail_out === 0 && (T.output = new s.Buf8(L), T.next_out = 0, T.avail_out = L), (E = r.deflate(T, O)) !== 1 && E !== y) return this.onEnd(E), !(this.ended = !0);
          T.avail_out !== 0 && (T.avail_in !== 0 || O !== 4 && O !== 2) || (this.options.to === "string" ? this.onData(i.buf2binstring(s.shrinkBuf(T.output, T.next_out))) : this.onData(s.shrinkBuf(T.output, T.next_out)));
        } while ((0 < T.avail_in || T.avail_out === 0) && E !== 1);
        return O === 4 ? (E = r.deflateEnd(this.strm), this.onEnd(E), this.ended = !0, E === y) : O !== 2 || (this.onEnd(y), !(T.avail_out = 0));
      }, c.prototype.onData = function(d) {
        this.chunks.push(d);
      }, c.prototype.onEnd = function(d) {
        d === y && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = s.flattenChunks(this.chunks)), this.chunks = [], this.err = d, this.msg = this.strm.msg;
      }, u.Deflate = c, u.deflate = m, u.deflateRaw = function(d, v) {
        return (v = v || {}).raw = !0, m(d, v);
      }, u.gzip = function(d, v) {
        return (v = v || {}).gzip = !0, m(d, v);
      };
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/deflate": 46, "./zlib/messages": 51, "./zlib/zstream": 53 }], 40: [function(n, h, u) {
      var r = n("./zlib/inflate"), s = n("./utils/common"), i = n("./utils/strings"), l = n("./zlib/constants"), _ = n("./zlib/messages"), x = n("./zlib/zstream"), y = n("./zlib/gzheader"), b = Object.prototype.toString;
      function f(c) {
        if (!(this instanceof f)) return new f(c);
        this.options = s.assign({ chunkSize: 16384, windowBits: 0, to: "" }, c || {});
        var m = this.options;
        m.raw && 0 <= m.windowBits && m.windowBits < 16 && (m.windowBits = -m.windowBits, m.windowBits === 0 && (m.windowBits = -15)), !(0 <= m.windowBits && m.windowBits < 16) || c && c.windowBits || (m.windowBits += 32), 15 < m.windowBits && m.windowBits < 48 && !(15 & m.windowBits) && (m.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new x(), this.strm.avail_out = 0;
        var d = r.inflateInit2(this.strm, m.windowBits);
        if (d !== l.Z_OK) throw new Error(_[d]);
        this.header = new y(), r.inflateGetHeader(this.strm, this.header);
      }
      function w(c, m) {
        var d = new f(m);
        if (d.push(c, !0), d.err) throw d.msg || _[d.err];
        return d.result;
      }
      f.prototype.push = function(c, m) {
        var d, v, E, O, T, L, P = this.strm, W = this.options.chunkSize, I = this.options.dictionary, Z = !1;
        if (this.ended) return !1;
        v = m === ~~m ? m : m === !0 ? l.Z_FINISH : l.Z_NO_FLUSH, typeof c == "string" ? P.input = i.binstring2buf(c) : b.call(c) === "[object ArrayBuffer]" ? P.input = new Uint8Array(c) : P.input = c, P.next_in = 0, P.avail_in = P.input.length;
        do {
          if (P.avail_out === 0 && (P.output = new s.Buf8(W), P.next_out = 0, P.avail_out = W), (d = r.inflate(P, l.Z_NO_FLUSH)) === l.Z_NEED_DICT && I && (L = typeof I == "string" ? i.string2buf(I) : b.call(I) === "[object ArrayBuffer]" ? new Uint8Array(I) : I, d = r.inflateSetDictionary(this.strm, L)), d === l.Z_BUF_ERROR && Z === !0 && (d = l.Z_OK, Z = !1), d !== l.Z_STREAM_END && d !== l.Z_OK) return this.onEnd(d), !(this.ended = !0);
          P.next_out && (P.avail_out !== 0 && d !== l.Z_STREAM_END && (P.avail_in !== 0 || v !== l.Z_FINISH && v !== l.Z_SYNC_FLUSH) || (this.options.to === "string" ? (E = i.utf8border(P.output, P.next_out), O = P.next_out - E, T = i.buf2string(P.output, E), P.next_out = O, P.avail_out = W - O, O && s.arraySet(P.output, P.output, E, O, 0), this.onData(T)) : this.onData(s.shrinkBuf(P.output, P.next_out)))), P.avail_in === 0 && P.avail_out === 0 && (Z = !0);
        } while ((0 < P.avail_in || P.avail_out === 0) && d !== l.Z_STREAM_END);
        return d === l.Z_STREAM_END && (v = l.Z_FINISH), v === l.Z_FINISH ? (d = r.inflateEnd(this.strm), this.onEnd(d), this.ended = !0, d === l.Z_OK) : v !== l.Z_SYNC_FLUSH || (this.onEnd(l.Z_OK), !(P.avail_out = 0));
      }, f.prototype.onData = function(c) {
        this.chunks.push(c);
      }, f.prototype.onEnd = function(c) {
        c === l.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = s.flattenChunks(this.chunks)), this.chunks = [], this.err = c, this.msg = this.strm.msg;
      }, u.Inflate = f, u.inflate = w, u.inflateRaw = function(c, m) {
        return (m = m || {}).raw = !0, w(c, m);
      }, u.ungzip = w;
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/constants": 44, "./zlib/gzheader": 47, "./zlib/inflate": 49, "./zlib/messages": 51, "./zlib/zstream": 53 }], 41: [function(n, h, u) {
      var r = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
      u.assign = function(l) {
        for (var _ = Array.prototype.slice.call(arguments, 1); _.length; ) {
          var x = _.shift();
          if (x) {
            if (typeof x != "object") throw new TypeError(x + "must be non-object");
            for (var y in x) x.hasOwnProperty(y) && (l[y] = x[y]);
          }
        }
        return l;
      }, u.shrinkBuf = function(l, _) {
        return l.length === _ ? l : l.subarray ? l.subarray(0, _) : (l.length = _, l);
      };
      var s = { arraySet: function(l, _, x, y, b) {
        if (_.subarray && l.subarray) l.set(_.subarray(x, x + y), b);
        else for (var f = 0; f < y; f++) l[b + f] = _[x + f];
      }, flattenChunks: function(l) {
        var _, x, y, b, f, w;
        for (_ = y = 0, x = l.length; _ < x; _++) y += l[_].length;
        for (w = new Uint8Array(y), _ = b = 0, x = l.length; _ < x; _++) f = l[_], w.set(f, b), b += f.length;
        return w;
      } }, i = { arraySet: function(l, _, x, y, b) {
        for (var f = 0; f < y; f++) l[b + f] = _[x + f];
      }, flattenChunks: function(l) {
        return [].concat.apply([], l);
      } };
      u.setTyped = function(l) {
        l ? (u.Buf8 = Uint8Array, u.Buf16 = Uint16Array, u.Buf32 = Int32Array, u.assign(u, s)) : (u.Buf8 = Array, u.Buf16 = Array, u.Buf32 = Array, u.assign(u, i));
      }, u.setTyped(r);
    }, {}], 42: [function(n, h, u) {
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
      function x(y, b) {
        if (b < 65537 && (y.subarray && i || !y.subarray && s)) return String.fromCharCode.apply(null, r.shrinkBuf(y, b));
        for (var f = "", w = 0; w < b; w++) f += String.fromCharCode(y[w]);
        return f;
      }
      l[254] = l[254] = 1, u.string2buf = function(y) {
        var b, f, w, c, m, d = y.length, v = 0;
        for (c = 0; c < d; c++) (64512 & (f = y.charCodeAt(c))) == 55296 && c + 1 < d && (64512 & (w = y.charCodeAt(c + 1))) == 56320 && (f = 65536 + (f - 55296 << 10) + (w - 56320), c++), v += f < 128 ? 1 : f < 2048 ? 2 : f < 65536 ? 3 : 4;
        for (b = new r.Buf8(v), c = m = 0; m < v; c++) (64512 & (f = y.charCodeAt(c))) == 55296 && c + 1 < d && (64512 & (w = y.charCodeAt(c + 1))) == 56320 && (f = 65536 + (f - 55296 << 10) + (w - 56320), c++), f < 128 ? b[m++] = f : (f < 2048 ? b[m++] = 192 | f >>> 6 : (f < 65536 ? b[m++] = 224 | f >>> 12 : (b[m++] = 240 | f >>> 18, b[m++] = 128 | f >>> 12 & 63), b[m++] = 128 | f >>> 6 & 63), b[m++] = 128 | 63 & f);
        return b;
      }, u.buf2binstring = function(y) {
        return x(y, y.length);
      }, u.binstring2buf = function(y) {
        for (var b = new r.Buf8(y.length), f = 0, w = b.length; f < w; f++) b[f] = y.charCodeAt(f);
        return b;
      }, u.buf2string = function(y, b) {
        var f, w, c, m, d = b || y.length, v = new Array(2 * d);
        for (f = w = 0; f < d; ) if ((c = y[f++]) < 128) v[w++] = c;
        else if (4 < (m = l[c])) v[w++] = 65533, f += m - 1;
        else {
          for (c &= m === 2 ? 31 : m === 3 ? 15 : 7; 1 < m && f < d; ) c = c << 6 | 63 & y[f++], m--;
          1 < m ? v[w++] = 65533 : c < 65536 ? v[w++] = c : (c -= 65536, v[w++] = 55296 | c >> 10 & 1023, v[w++] = 56320 | 1023 & c);
        }
        return x(v, w);
      }, u.utf8border = function(y, b) {
        var f;
        for ((b = b || y.length) > y.length && (b = y.length), f = b - 1; 0 <= f && (192 & y[f]) == 128; ) f--;
        return f < 0 || f === 0 ? b : f + l[y[f]] > b ? f : b;
      };
    }, { "./common": 41 }], 43: [function(n, h, u) {
      h.exports = function(r, s, i, l) {
        for (var _ = 65535 & r | 0, x = r >>> 16 & 65535 | 0, y = 0; i !== 0; ) {
          for (i -= y = 2e3 < i ? 2e3 : i; x = x + (_ = _ + s[l++] | 0) | 0, --y; ) ;
          _ %= 65521, x %= 65521;
        }
        return _ | x << 16 | 0;
      };
    }, {}], 44: [function(n, h, u) {
      h.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
    }, {}], 45: [function(n, h, u) {
      var r = function() {
        for (var s, i = [], l = 0; l < 256; l++) {
          s = l;
          for (var _ = 0; _ < 8; _++) s = 1 & s ? 3988292384 ^ s >>> 1 : s >>> 1;
          i[l] = s;
        }
        return i;
      }();
      h.exports = function(s, i, l, _) {
        var x = r, y = _ + l;
        s ^= -1;
        for (var b = _; b < y; b++) s = s >>> 8 ^ x[255 & (s ^ i[b])];
        return -1 ^ s;
      };
    }, {}], 46: [function(n, h, u) {
      var r, s = n("../utils/common"), i = n("./trees"), l = n("./adler32"), _ = n("./crc32"), x = n("./messages"), y = 0, b = 4, f = 0, w = -2, c = -1, m = 4, d = 2, v = 8, E = 9, O = 286, T = 30, L = 19, P = 2 * O + 1, W = 15, I = 3, Z = 258, nt = Z + I + 1, C = 42, F = 113, a = 1, U = 2, at = 3, Y = 4;
      function ot(t, B) {
        return t.msg = x[B], B;
      }
      function G(t) {
        return (t << 1) - (4 < t ? 9 : 0);
      }
      function tt(t) {
        for (var B = t.length; 0 <= --B; ) t[B] = 0;
      }
      function N(t) {
        var B = t.state, z = B.pending;
        z > t.avail_out && (z = t.avail_out), z !== 0 && (s.arraySet(t.output, B.pending_buf, B.pending_out, z, t.next_out), t.next_out += z, B.pending_out += z, t.total_out += z, t.avail_out -= z, B.pending -= z, B.pending === 0 && (B.pending_out = 0));
      }
      function j(t, B) {
        i._tr_flush_block(t, 0 <= t.block_start ? t.block_start : -1, t.strstart - t.block_start, B), t.block_start = t.strstart, N(t.strm);
      }
      function et(t, B) {
        t.pending_buf[t.pending++] = B;
      }
      function J(t, B) {
        t.pending_buf[t.pending++] = B >>> 8 & 255, t.pending_buf[t.pending++] = 255 & B;
      }
      function q(t, B) {
        var z, g, p = t.max_chain_length, R = t.strstart, $ = t.prev_length, H = t.nice_match, A = t.strstart > t.w_size - nt ? t.strstart - (t.w_size - nt) : 0, X = t.window, Q = t.w_mask, K = t.prev, rt = t.strstart + Z, pt = X[R + $ - 1], lt = X[R + $];
        t.prev_length >= t.good_match && (p >>= 2), H > t.lookahead && (H = t.lookahead);
        do
          if (X[(z = B) + $] === lt && X[z + $ - 1] === pt && X[z] === X[R] && X[++z] === X[R + 1]) {
            R += 2, z++;
            do
              ;
            while (X[++R] === X[++z] && X[++R] === X[++z] && X[++R] === X[++z] && X[++R] === X[++z] && X[++R] === X[++z] && X[++R] === X[++z] && X[++R] === X[++z] && X[++R] === X[++z] && R < rt);
            if (g = Z - (rt - R), R = rt - Z, $ < g) {
              if (t.match_start = B, H <= ($ = g)) break;
              pt = X[R + $ - 1], lt = X[R + $];
            }
          }
        while ((B = K[B & Q]) > A && --p != 0);
        return $ <= t.lookahead ? $ : t.lookahead;
      }
      function gt(t) {
        var B, z, g, p, R, $, H, A, X, Q, K = t.w_size;
        do {
          if (p = t.window_size - t.lookahead - t.strstart, t.strstart >= K + (K - nt)) {
            for (s.arraySet(t.window, t.window, K, K, 0), t.match_start -= K, t.strstart -= K, t.block_start -= K, B = z = t.hash_size; g = t.head[--B], t.head[B] = K <= g ? g - K : 0, --z; ) ;
            for (B = z = K; g = t.prev[--B], t.prev[B] = K <= g ? g - K : 0, --z; ) ;
            p += K;
          }
          if (t.strm.avail_in === 0) break;
          if ($ = t.strm, H = t.window, A = t.strstart + t.lookahead, X = p, Q = void 0, Q = $.avail_in, X < Q && (Q = X), z = Q === 0 ? 0 : ($.avail_in -= Q, s.arraySet(H, $.input, $.next_in, Q, A), $.state.wrap === 1 ? $.adler = l($.adler, H, Q, A) : $.state.wrap === 2 && ($.adler = _($.adler, H, Q, A)), $.next_in += Q, $.total_in += Q, Q), t.lookahead += z, t.lookahead + t.insert >= I) for (R = t.strstart - t.insert, t.ins_h = t.window[R], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[R + 1]) & t.hash_mask; t.insert && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[R + I - 1]) & t.hash_mask, t.prev[R & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = R, R++, t.insert--, !(t.lookahead + t.insert < I)); ) ;
        } while (t.lookahead < nt && t.strm.avail_in !== 0);
      }
      function vt(t, B) {
        for (var z, g; ; ) {
          if (t.lookahead < nt) {
            if (gt(t), t.lookahead < nt && B === y) return a;
            if (t.lookahead === 0) break;
          }
          if (z = 0, t.lookahead >= I && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + I - 1]) & t.hash_mask, z = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), z !== 0 && t.strstart - z <= t.w_size - nt && (t.match_length = q(t, z)), t.match_length >= I) if (g = i._tr_tally(t, t.strstart - t.match_start, t.match_length - I), t.lookahead -= t.match_length, t.match_length <= t.max_lazy_match && t.lookahead >= I) {
            for (t.match_length--; t.strstart++, t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + I - 1]) & t.hash_mask, z = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart, --t.match_length != 0; ) ;
            t.strstart++;
          } else t.strstart += t.match_length, t.match_length = 0, t.ins_h = t.window[t.strstart], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + 1]) & t.hash_mask;
          else g = i._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++;
          if (g && (j(t, !1), t.strm.avail_out === 0)) return a;
        }
        return t.insert = t.strstart < I - 1 ? t.strstart : I - 1, B === b ? (j(t, !0), t.strm.avail_out === 0 ? at : Y) : t.last_lit && (j(t, !1), t.strm.avail_out === 0) ? a : U;
      }
      function st(t, B) {
        for (var z, g, p; ; ) {
          if (t.lookahead < nt) {
            if (gt(t), t.lookahead < nt && B === y) return a;
            if (t.lookahead === 0) break;
          }
          if (z = 0, t.lookahead >= I && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + I - 1]) & t.hash_mask, z = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), t.prev_length = t.match_length, t.prev_match = t.match_start, t.match_length = I - 1, z !== 0 && t.prev_length < t.max_lazy_match && t.strstart - z <= t.w_size - nt && (t.match_length = q(t, z), t.match_length <= 5 && (t.strategy === 1 || t.match_length === I && 4096 < t.strstart - t.match_start) && (t.match_length = I - 1)), t.prev_length >= I && t.match_length <= t.prev_length) {
            for (p = t.strstart + t.lookahead - I, g = i._tr_tally(t, t.strstart - 1 - t.prev_match, t.prev_length - I), t.lookahead -= t.prev_length - 1, t.prev_length -= 2; ++t.strstart <= p && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + I - 1]) & t.hash_mask, z = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), --t.prev_length != 0; ) ;
            if (t.match_available = 0, t.match_length = I - 1, t.strstart++, g && (j(t, !1), t.strm.avail_out === 0)) return a;
          } else if (t.match_available) {
            if ((g = i._tr_tally(t, 0, t.window[t.strstart - 1])) && j(t, !1), t.strstart++, t.lookahead--, t.strm.avail_out === 0) return a;
          } else t.match_available = 1, t.strstart++, t.lookahead--;
        }
        return t.match_available && (g = i._tr_tally(t, 0, t.window[t.strstart - 1]), t.match_available = 0), t.insert = t.strstart < I - 1 ? t.strstart : I - 1, B === b ? (j(t, !0), t.strm.avail_out === 0 ? at : Y) : t.last_lit && (j(t, !1), t.strm.avail_out === 0) ? a : U;
      }
      function ut(t, B, z, g, p) {
        this.good_length = t, this.max_lazy = B, this.nice_length = z, this.max_chain = g, this.func = p;
      }
      function mt() {
        this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = v, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new s.Buf16(2 * P), this.dyn_dtree = new s.Buf16(2 * (2 * T + 1)), this.bl_tree = new s.Buf16(2 * (2 * L + 1)), tt(this.dyn_ltree), tt(this.dyn_dtree), tt(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new s.Buf16(W + 1), this.heap = new s.Buf16(2 * O + 1), tt(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new s.Buf16(2 * O + 1), tt(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
      }
      function wt(t) {
        var B;
        return t && t.state ? (t.total_in = t.total_out = 0, t.data_type = d, (B = t.state).pending = 0, B.pending_out = 0, B.wrap < 0 && (B.wrap = -B.wrap), B.status = B.wrap ? C : F, t.adler = B.wrap === 2 ? 0 : 1, B.last_flush = y, i._tr_init(B), f) : ot(t, w);
      }
      function _t(t) {
        var B = wt(t);
        return B === f && function(z) {
          z.window_size = 2 * z.w_size, tt(z.head), z.max_lazy_match = r[z.level].max_lazy, z.good_match = r[z.level].good_length, z.nice_match = r[z.level].nice_length, z.max_chain_length = r[z.level].max_chain, z.strstart = 0, z.block_start = 0, z.lookahead = 0, z.insert = 0, z.match_length = z.prev_length = I - 1, z.match_available = 0, z.ins_h = 0;
        }(t.state), B;
      }
      function St(t, B, z, g, p, R) {
        if (!t) return w;
        var $ = 1;
        if (B === c && (B = 6), g < 0 ? ($ = 0, g = -g) : 15 < g && ($ = 2, g -= 16), p < 1 || E < p || z !== v || g < 8 || 15 < g || B < 0 || 9 < B || R < 0 || m < R) return ot(t, w);
        g === 8 && (g = 9);
        var H = new mt();
        return (t.state = H).strm = t, H.wrap = $, H.gzhead = null, H.w_bits = g, H.w_size = 1 << H.w_bits, H.w_mask = H.w_size - 1, H.hash_bits = p + 7, H.hash_size = 1 << H.hash_bits, H.hash_mask = H.hash_size - 1, H.hash_shift = ~~((H.hash_bits + I - 1) / I), H.window = new s.Buf8(2 * H.w_size), H.head = new s.Buf16(H.hash_size), H.prev = new s.Buf16(H.w_size), H.lit_bufsize = 1 << p + 6, H.pending_buf_size = 4 * H.lit_bufsize, H.pending_buf = new s.Buf8(H.pending_buf_size), H.d_buf = 1 * H.lit_bufsize, H.l_buf = 3 * H.lit_bufsize, H.level = B, H.strategy = R, H.method = z, _t(t);
      }
      r = [new ut(0, 0, 0, 0, function(t, B) {
        var z = 65535;
        for (z > t.pending_buf_size - 5 && (z = t.pending_buf_size - 5); ; ) {
          if (t.lookahead <= 1) {
            if (gt(t), t.lookahead === 0 && B === y) return a;
            if (t.lookahead === 0) break;
          }
          t.strstart += t.lookahead, t.lookahead = 0;
          var g = t.block_start + z;
          if ((t.strstart === 0 || t.strstart >= g) && (t.lookahead = t.strstart - g, t.strstart = g, j(t, !1), t.strm.avail_out === 0) || t.strstart - t.block_start >= t.w_size - nt && (j(t, !1), t.strm.avail_out === 0)) return a;
        }
        return t.insert = 0, B === b ? (j(t, !0), t.strm.avail_out === 0 ? at : Y) : (t.strstart > t.block_start && (j(t, !1), t.strm.avail_out), a);
      }), new ut(4, 4, 8, 4, vt), new ut(4, 5, 16, 8, vt), new ut(4, 6, 32, 32, vt), new ut(4, 4, 16, 16, st), new ut(8, 16, 32, 32, st), new ut(8, 16, 128, 128, st), new ut(8, 32, 128, 256, st), new ut(32, 128, 258, 1024, st), new ut(32, 258, 258, 4096, st)], u.deflateInit = function(t, B) {
        return St(t, B, v, 15, 8, 0);
      }, u.deflateInit2 = St, u.deflateReset = _t, u.deflateResetKeep = wt, u.deflateSetHeader = function(t, B) {
        return t && t.state ? t.state.wrap !== 2 ? w : (t.state.gzhead = B, f) : w;
      }, u.deflate = function(t, B) {
        var z, g, p, R;
        if (!t || !t.state || 5 < B || B < 0) return t ? ot(t, w) : w;
        if (g = t.state, !t.output || !t.input && t.avail_in !== 0 || g.status === 666 && B !== b) return ot(t, t.avail_out === 0 ? -5 : w);
        if (g.strm = t, z = g.last_flush, g.last_flush = B, g.status === C) if (g.wrap === 2) t.adler = 0, et(g, 31), et(g, 139), et(g, 8), g.gzhead ? (et(g, (g.gzhead.text ? 1 : 0) + (g.gzhead.hcrc ? 2 : 0) + (g.gzhead.extra ? 4 : 0) + (g.gzhead.name ? 8 : 0) + (g.gzhead.comment ? 16 : 0)), et(g, 255 & g.gzhead.time), et(g, g.gzhead.time >> 8 & 255), et(g, g.gzhead.time >> 16 & 255), et(g, g.gzhead.time >> 24 & 255), et(g, g.level === 9 ? 2 : 2 <= g.strategy || g.level < 2 ? 4 : 0), et(g, 255 & g.gzhead.os), g.gzhead.extra && g.gzhead.extra.length && (et(g, 255 & g.gzhead.extra.length), et(g, g.gzhead.extra.length >> 8 & 255)), g.gzhead.hcrc && (t.adler = _(t.adler, g.pending_buf, g.pending, 0)), g.gzindex = 0, g.status = 69) : (et(g, 0), et(g, 0), et(g, 0), et(g, 0), et(g, 0), et(g, g.level === 9 ? 2 : 2 <= g.strategy || g.level < 2 ? 4 : 0), et(g, 3), g.status = F);
        else {
          var $ = v + (g.w_bits - 8 << 4) << 8;
          $ |= (2 <= g.strategy || g.level < 2 ? 0 : g.level < 6 ? 1 : g.level === 6 ? 2 : 3) << 6, g.strstart !== 0 && ($ |= 32), $ += 31 - $ % 31, g.status = F, J(g, $), g.strstart !== 0 && (J(g, t.adler >>> 16), J(g, 65535 & t.adler)), t.adler = 1;
        }
        if (g.status === 69) if (g.gzhead.extra) {
          for (p = g.pending; g.gzindex < (65535 & g.gzhead.extra.length) && (g.pending !== g.pending_buf_size || (g.gzhead.hcrc && g.pending > p && (t.adler = _(t.adler, g.pending_buf, g.pending - p, p)), N(t), p = g.pending, g.pending !== g.pending_buf_size)); ) et(g, 255 & g.gzhead.extra[g.gzindex]), g.gzindex++;
          g.gzhead.hcrc && g.pending > p && (t.adler = _(t.adler, g.pending_buf, g.pending - p, p)), g.gzindex === g.gzhead.extra.length && (g.gzindex = 0, g.status = 73);
        } else g.status = 73;
        if (g.status === 73) if (g.gzhead.name) {
          p = g.pending;
          do {
            if (g.pending === g.pending_buf_size && (g.gzhead.hcrc && g.pending > p && (t.adler = _(t.adler, g.pending_buf, g.pending - p, p)), N(t), p = g.pending, g.pending === g.pending_buf_size)) {
              R = 1;
              break;
            }
            R = g.gzindex < g.gzhead.name.length ? 255 & g.gzhead.name.charCodeAt(g.gzindex++) : 0, et(g, R);
          } while (R !== 0);
          g.gzhead.hcrc && g.pending > p && (t.adler = _(t.adler, g.pending_buf, g.pending - p, p)), R === 0 && (g.gzindex = 0, g.status = 91);
        } else g.status = 91;
        if (g.status === 91) if (g.gzhead.comment) {
          p = g.pending;
          do {
            if (g.pending === g.pending_buf_size && (g.gzhead.hcrc && g.pending > p && (t.adler = _(t.adler, g.pending_buf, g.pending - p, p)), N(t), p = g.pending, g.pending === g.pending_buf_size)) {
              R = 1;
              break;
            }
            R = g.gzindex < g.gzhead.comment.length ? 255 & g.gzhead.comment.charCodeAt(g.gzindex++) : 0, et(g, R);
          } while (R !== 0);
          g.gzhead.hcrc && g.pending > p && (t.adler = _(t.adler, g.pending_buf, g.pending - p, p)), R === 0 && (g.status = 103);
        } else g.status = 103;
        if (g.status === 103 && (g.gzhead.hcrc ? (g.pending + 2 > g.pending_buf_size && N(t), g.pending + 2 <= g.pending_buf_size && (et(g, 255 & t.adler), et(g, t.adler >> 8 & 255), t.adler = 0, g.status = F)) : g.status = F), g.pending !== 0) {
          if (N(t), t.avail_out === 0) return g.last_flush = -1, f;
        } else if (t.avail_in === 0 && G(B) <= G(z) && B !== b) return ot(t, -5);
        if (g.status === 666 && t.avail_in !== 0) return ot(t, -5);
        if (t.avail_in !== 0 || g.lookahead !== 0 || B !== y && g.status !== 666) {
          var H = g.strategy === 2 ? function(A, X) {
            for (var Q; ; ) {
              if (A.lookahead === 0 && (gt(A), A.lookahead === 0)) {
                if (X === y) return a;
                break;
              }
              if (A.match_length = 0, Q = i._tr_tally(A, 0, A.window[A.strstart]), A.lookahead--, A.strstart++, Q && (j(A, !1), A.strm.avail_out === 0)) return a;
            }
            return A.insert = 0, X === b ? (j(A, !0), A.strm.avail_out === 0 ? at : Y) : A.last_lit && (j(A, !1), A.strm.avail_out === 0) ? a : U;
          }(g, B) : g.strategy === 3 ? function(A, X) {
            for (var Q, K, rt, pt, lt = A.window; ; ) {
              if (A.lookahead <= Z) {
                if (gt(A), A.lookahead <= Z && X === y) return a;
                if (A.lookahead === 0) break;
              }
              if (A.match_length = 0, A.lookahead >= I && 0 < A.strstart && (K = lt[rt = A.strstart - 1]) === lt[++rt] && K === lt[++rt] && K === lt[++rt]) {
                pt = A.strstart + Z;
                do
                  ;
                while (K === lt[++rt] && K === lt[++rt] && K === lt[++rt] && K === lt[++rt] && K === lt[++rt] && K === lt[++rt] && K === lt[++rt] && K === lt[++rt] && rt < pt);
                A.match_length = Z - (pt - rt), A.match_length > A.lookahead && (A.match_length = A.lookahead);
              }
              if (A.match_length >= I ? (Q = i._tr_tally(A, 1, A.match_length - I), A.lookahead -= A.match_length, A.strstart += A.match_length, A.match_length = 0) : (Q = i._tr_tally(A, 0, A.window[A.strstart]), A.lookahead--, A.strstart++), Q && (j(A, !1), A.strm.avail_out === 0)) return a;
            }
            return A.insert = 0, X === b ? (j(A, !0), A.strm.avail_out === 0 ? at : Y) : A.last_lit && (j(A, !1), A.strm.avail_out === 0) ? a : U;
          }(g, B) : r[g.level].func(g, B);
          if (H !== at && H !== Y || (g.status = 666), H === a || H === at) return t.avail_out === 0 && (g.last_flush = -1), f;
          if (H === U && (B === 1 ? i._tr_align(g) : B !== 5 && (i._tr_stored_block(g, 0, 0, !1), B === 3 && (tt(g.head), g.lookahead === 0 && (g.strstart = 0, g.block_start = 0, g.insert = 0))), N(t), t.avail_out === 0)) return g.last_flush = -1, f;
        }
        return B !== b ? f : g.wrap <= 0 ? 1 : (g.wrap === 2 ? (et(g, 255 & t.adler), et(g, t.adler >> 8 & 255), et(g, t.adler >> 16 & 255), et(g, t.adler >> 24 & 255), et(g, 255 & t.total_in), et(g, t.total_in >> 8 & 255), et(g, t.total_in >> 16 & 255), et(g, t.total_in >> 24 & 255)) : (J(g, t.adler >>> 16), J(g, 65535 & t.adler)), N(t), 0 < g.wrap && (g.wrap = -g.wrap), g.pending !== 0 ? f : 1);
      }, u.deflateEnd = function(t) {
        var B;
        return t && t.state ? (B = t.state.status) !== C && B !== 69 && B !== 73 && B !== 91 && B !== 103 && B !== F && B !== 666 ? ot(t, w) : (t.state = null, B === F ? ot(t, -3) : f) : w;
      }, u.deflateSetDictionary = function(t, B) {
        var z, g, p, R, $, H, A, X, Q = B.length;
        if (!t || !t.state || (R = (z = t.state).wrap) === 2 || R === 1 && z.status !== C || z.lookahead) return w;
        for (R === 1 && (t.adler = l(t.adler, B, Q, 0)), z.wrap = 0, Q >= z.w_size && (R === 0 && (tt(z.head), z.strstart = 0, z.block_start = 0, z.insert = 0), X = new s.Buf8(z.w_size), s.arraySet(X, B, Q - z.w_size, z.w_size, 0), B = X, Q = z.w_size), $ = t.avail_in, H = t.next_in, A = t.input, t.avail_in = Q, t.next_in = 0, t.input = B, gt(z); z.lookahead >= I; ) {
          for (g = z.strstart, p = z.lookahead - (I - 1); z.ins_h = (z.ins_h << z.hash_shift ^ z.window[g + I - 1]) & z.hash_mask, z.prev[g & z.w_mask] = z.head[z.ins_h], z.head[z.ins_h] = g, g++, --p; ) ;
          z.strstart = g, z.lookahead = I - 1, gt(z);
        }
        return z.strstart += z.lookahead, z.block_start = z.strstart, z.insert = z.lookahead, z.lookahead = 0, z.match_length = z.prev_length = I - 1, z.match_available = 0, t.next_in = H, t.input = A, t.avail_in = $, z.wrap = R, f;
      }, u.deflateInfo = "pako deflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(n, h, u) {
      h.exports = function() {
        this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
      };
    }, {}], 48: [function(n, h, u) {
      h.exports = function(r, s) {
        var i, l, _, x, y, b, f, w, c, m, d, v, E, O, T, L, P, W, I, Z, nt, C, F, a, U;
        i = r.state, l = r.next_in, a = r.input, _ = l + (r.avail_in - 5), x = r.next_out, U = r.output, y = x - (s - r.avail_out), b = x + (r.avail_out - 257), f = i.dmax, w = i.wsize, c = i.whave, m = i.wnext, d = i.window, v = i.hold, E = i.bits, O = i.lencode, T = i.distcode, L = (1 << i.lenbits) - 1, P = (1 << i.distbits) - 1;
        t: do {
          E < 15 && (v += a[l++] << E, E += 8, v += a[l++] << E, E += 8), W = O[v & L];
          e: for (; ; ) {
            if (v >>>= I = W >>> 24, E -= I, (I = W >>> 16 & 255) === 0) U[x++] = 65535 & W;
            else {
              if (!(16 & I)) {
                if (!(64 & I)) {
                  W = O[(65535 & W) + (v & (1 << I) - 1)];
                  continue e;
                }
                if (32 & I) {
                  i.mode = 12;
                  break t;
                }
                r.msg = "invalid literal/length code", i.mode = 30;
                break t;
              }
              Z = 65535 & W, (I &= 15) && (E < I && (v += a[l++] << E, E += 8), Z += v & (1 << I) - 1, v >>>= I, E -= I), E < 15 && (v += a[l++] << E, E += 8, v += a[l++] << E, E += 8), W = T[v & P];
              r: for (; ; ) {
                if (v >>>= I = W >>> 24, E -= I, !(16 & (I = W >>> 16 & 255))) {
                  if (!(64 & I)) {
                    W = T[(65535 & W) + (v & (1 << I) - 1)];
                    continue r;
                  }
                  r.msg = "invalid distance code", i.mode = 30;
                  break t;
                }
                if (nt = 65535 & W, E < (I &= 15) && (v += a[l++] << E, (E += 8) < I && (v += a[l++] << E, E += 8)), f < (nt += v & (1 << I) - 1)) {
                  r.msg = "invalid distance too far back", i.mode = 30;
                  break t;
                }
                if (v >>>= I, E -= I, (I = x - y) < nt) {
                  if (c < (I = nt - I) && i.sane) {
                    r.msg = "invalid distance too far back", i.mode = 30;
                    break t;
                  }
                  if (F = d, (C = 0) === m) {
                    if (C += w - I, I < Z) {
                      for (Z -= I; U[x++] = d[C++], --I; ) ;
                      C = x - nt, F = U;
                    }
                  } else if (m < I) {
                    if (C += w + m - I, (I -= m) < Z) {
                      for (Z -= I; U[x++] = d[C++], --I; ) ;
                      if (C = 0, m < Z) {
                        for (Z -= I = m; U[x++] = d[C++], --I; ) ;
                        C = x - nt, F = U;
                      }
                    }
                  } else if (C += m - I, I < Z) {
                    for (Z -= I; U[x++] = d[C++], --I; ) ;
                    C = x - nt, F = U;
                  }
                  for (; 2 < Z; ) U[x++] = F[C++], U[x++] = F[C++], U[x++] = F[C++], Z -= 3;
                  Z && (U[x++] = F[C++], 1 < Z && (U[x++] = F[C++]));
                } else {
                  for (C = x - nt; U[x++] = U[C++], U[x++] = U[C++], U[x++] = U[C++], 2 < (Z -= 3); ) ;
                  Z && (U[x++] = U[C++], 1 < Z && (U[x++] = U[C++]));
                }
                break;
              }
            }
            break;
          }
        } while (l < _ && x < b);
        l -= Z = E >> 3, v &= (1 << (E -= Z << 3)) - 1, r.next_in = l, r.next_out = x, r.avail_in = l < _ ? _ - l + 5 : 5 - (l - _), r.avail_out = x < b ? b - x + 257 : 257 - (x - b), i.hold = v, i.bits = E;
      };
    }, {}], 49: [function(n, h, u) {
      var r = n("../utils/common"), s = n("./adler32"), i = n("./crc32"), l = n("./inffast"), _ = n("./inftrees"), x = 1, y = 2, b = 0, f = -2, w = 1, c = 852, m = 592;
      function d(C) {
        return (C >>> 24 & 255) + (C >>> 8 & 65280) + ((65280 & C) << 8) + ((255 & C) << 24);
      }
      function v() {
        this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new r.Buf16(320), this.work = new r.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
      }
      function E(C) {
        var F;
        return C && C.state ? (F = C.state, C.total_in = C.total_out = F.total = 0, C.msg = "", F.wrap && (C.adler = 1 & F.wrap), F.mode = w, F.last = 0, F.havedict = 0, F.dmax = 32768, F.head = null, F.hold = 0, F.bits = 0, F.lencode = F.lendyn = new r.Buf32(c), F.distcode = F.distdyn = new r.Buf32(m), F.sane = 1, F.back = -1, b) : f;
      }
      function O(C) {
        var F;
        return C && C.state ? ((F = C.state).wsize = 0, F.whave = 0, F.wnext = 0, E(C)) : f;
      }
      function T(C, F) {
        var a, U;
        return C && C.state ? (U = C.state, F < 0 ? (a = 0, F = -F) : (a = 1 + (F >> 4), F < 48 && (F &= 15)), F && (F < 8 || 15 < F) ? f : (U.window !== null && U.wbits !== F && (U.window = null), U.wrap = a, U.wbits = F, O(C))) : f;
      }
      function L(C, F) {
        var a, U;
        return C ? (U = new v(), (C.state = U).window = null, (a = T(C, F)) !== b && (C.state = null), a) : f;
      }
      var P, W, I = !0;
      function Z(C) {
        if (I) {
          var F;
          for (P = new r.Buf32(512), W = new r.Buf32(32), F = 0; F < 144; ) C.lens[F++] = 8;
          for (; F < 256; ) C.lens[F++] = 9;
          for (; F < 280; ) C.lens[F++] = 7;
          for (; F < 288; ) C.lens[F++] = 8;
          for (_(x, C.lens, 0, 288, P, 0, C.work, { bits: 9 }), F = 0; F < 32; ) C.lens[F++] = 5;
          _(y, C.lens, 0, 32, W, 0, C.work, { bits: 5 }), I = !1;
        }
        C.lencode = P, C.lenbits = 9, C.distcode = W, C.distbits = 5;
      }
      function nt(C, F, a, U) {
        var at, Y = C.state;
        return Y.window === null && (Y.wsize = 1 << Y.wbits, Y.wnext = 0, Y.whave = 0, Y.window = new r.Buf8(Y.wsize)), U >= Y.wsize ? (r.arraySet(Y.window, F, a - Y.wsize, Y.wsize, 0), Y.wnext = 0, Y.whave = Y.wsize) : (U < (at = Y.wsize - Y.wnext) && (at = U), r.arraySet(Y.window, F, a - U, at, Y.wnext), (U -= at) ? (r.arraySet(Y.window, F, a - U, U, 0), Y.wnext = U, Y.whave = Y.wsize) : (Y.wnext += at, Y.wnext === Y.wsize && (Y.wnext = 0), Y.whave < Y.wsize && (Y.whave += at))), 0;
      }
      u.inflateReset = O, u.inflateReset2 = T, u.inflateResetKeep = E, u.inflateInit = function(C) {
        return L(C, 15);
      }, u.inflateInit2 = L, u.inflate = function(C, F) {
        var a, U, at, Y, ot, G, tt, N, j, et, J, q, gt, vt, st, ut, mt, wt, _t, St, t, B, z, g, p = 0, R = new r.Buf8(4), $ = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
        if (!C || !C.state || !C.output || !C.input && C.avail_in !== 0) return f;
        (a = C.state).mode === 12 && (a.mode = 13), ot = C.next_out, at = C.output, tt = C.avail_out, Y = C.next_in, U = C.input, G = C.avail_in, N = a.hold, j = a.bits, et = G, J = tt, B = b;
        t: for (; ; ) switch (a.mode) {
          case w:
            if (a.wrap === 0) {
              a.mode = 13;
              break;
            }
            for (; j < 16; ) {
              if (G === 0) break t;
              G--, N += U[Y++] << j, j += 8;
            }
            if (2 & a.wrap && N === 35615) {
              R[a.check = 0] = 255 & N, R[1] = N >>> 8 & 255, a.check = i(a.check, R, 2, 0), j = N = 0, a.mode = 2;
              break;
            }
            if (a.flags = 0, a.head && (a.head.done = !1), !(1 & a.wrap) || (((255 & N) << 8) + (N >> 8)) % 31) {
              C.msg = "incorrect header check", a.mode = 30;
              break;
            }
            if ((15 & N) != 8) {
              C.msg = "unknown compression method", a.mode = 30;
              break;
            }
            if (j -= 4, t = 8 + (15 & (N >>>= 4)), a.wbits === 0) a.wbits = t;
            else if (t > a.wbits) {
              C.msg = "invalid window size", a.mode = 30;
              break;
            }
            a.dmax = 1 << t, C.adler = a.check = 1, a.mode = 512 & N ? 10 : 12, j = N = 0;
            break;
          case 2:
            for (; j < 16; ) {
              if (G === 0) break t;
              G--, N += U[Y++] << j, j += 8;
            }
            if (a.flags = N, (255 & a.flags) != 8) {
              C.msg = "unknown compression method", a.mode = 30;
              break;
            }
            if (57344 & a.flags) {
              C.msg = "unknown header flags set", a.mode = 30;
              break;
            }
            a.head && (a.head.text = N >> 8 & 1), 512 & a.flags && (R[0] = 255 & N, R[1] = N >>> 8 & 255, a.check = i(a.check, R, 2, 0)), j = N = 0, a.mode = 3;
          case 3:
            for (; j < 32; ) {
              if (G === 0) break t;
              G--, N += U[Y++] << j, j += 8;
            }
            a.head && (a.head.time = N), 512 & a.flags && (R[0] = 255 & N, R[1] = N >>> 8 & 255, R[2] = N >>> 16 & 255, R[3] = N >>> 24 & 255, a.check = i(a.check, R, 4, 0)), j = N = 0, a.mode = 4;
          case 4:
            for (; j < 16; ) {
              if (G === 0) break t;
              G--, N += U[Y++] << j, j += 8;
            }
            a.head && (a.head.xflags = 255 & N, a.head.os = N >> 8), 512 & a.flags && (R[0] = 255 & N, R[1] = N >>> 8 & 255, a.check = i(a.check, R, 2, 0)), j = N = 0, a.mode = 5;
          case 5:
            if (1024 & a.flags) {
              for (; j < 16; ) {
                if (G === 0) break t;
                G--, N += U[Y++] << j, j += 8;
              }
              a.length = N, a.head && (a.head.extra_len = N), 512 & a.flags && (R[0] = 255 & N, R[1] = N >>> 8 & 255, a.check = i(a.check, R, 2, 0)), j = N = 0;
            } else a.head && (a.head.extra = null);
            a.mode = 6;
          case 6:
            if (1024 & a.flags && (G < (q = a.length) && (q = G), q && (a.head && (t = a.head.extra_len - a.length, a.head.extra || (a.head.extra = new Array(a.head.extra_len)), r.arraySet(a.head.extra, U, Y, q, t)), 512 & a.flags && (a.check = i(a.check, U, q, Y)), G -= q, Y += q, a.length -= q), a.length)) break t;
            a.length = 0, a.mode = 7;
          case 7:
            if (2048 & a.flags) {
              if (G === 0) break t;
              for (q = 0; t = U[Y + q++], a.head && t && a.length < 65536 && (a.head.name += String.fromCharCode(t)), t && q < G; ) ;
              if (512 & a.flags && (a.check = i(a.check, U, q, Y)), G -= q, Y += q, t) break t;
            } else a.head && (a.head.name = null);
            a.length = 0, a.mode = 8;
          case 8:
            if (4096 & a.flags) {
              if (G === 0) break t;
              for (q = 0; t = U[Y + q++], a.head && t && a.length < 65536 && (a.head.comment += String.fromCharCode(t)), t && q < G; ) ;
              if (512 & a.flags && (a.check = i(a.check, U, q, Y)), G -= q, Y += q, t) break t;
            } else a.head && (a.head.comment = null);
            a.mode = 9;
          case 9:
            if (512 & a.flags) {
              for (; j < 16; ) {
                if (G === 0) break t;
                G--, N += U[Y++] << j, j += 8;
              }
              if (N !== (65535 & a.check)) {
                C.msg = "header crc mismatch", a.mode = 30;
                break;
              }
              j = N = 0;
            }
            a.head && (a.head.hcrc = a.flags >> 9 & 1, a.head.done = !0), C.adler = a.check = 0, a.mode = 12;
            break;
          case 10:
            for (; j < 32; ) {
              if (G === 0) break t;
              G--, N += U[Y++] << j, j += 8;
            }
            C.adler = a.check = d(N), j = N = 0, a.mode = 11;
          case 11:
            if (a.havedict === 0) return C.next_out = ot, C.avail_out = tt, C.next_in = Y, C.avail_in = G, a.hold = N, a.bits = j, 2;
            C.adler = a.check = 1, a.mode = 12;
          case 12:
            if (F === 5 || F === 6) break t;
          case 13:
            if (a.last) {
              N >>>= 7 & j, j -= 7 & j, a.mode = 27;
              break;
            }
            for (; j < 3; ) {
              if (G === 0) break t;
              G--, N += U[Y++] << j, j += 8;
            }
            switch (a.last = 1 & N, j -= 1, 3 & (N >>>= 1)) {
              case 0:
                a.mode = 14;
                break;
              case 1:
                if (Z(a), a.mode = 20, F !== 6) break;
                N >>>= 2, j -= 2;
                break t;
              case 2:
                a.mode = 17;
                break;
              case 3:
                C.msg = "invalid block type", a.mode = 30;
            }
            N >>>= 2, j -= 2;
            break;
          case 14:
            for (N >>>= 7 & j, j -= 7 & j; j < 32; ) {
              if (G === 0) break t;
              G--, N += U[Y++] << j, j += 8;
            }
            if ((65535 & N) != (N >>> 16 ^ 65535)) {
              C.msg = "invalid stored block lengths", a.mode = 30;
              break;
            }
            if (a.length = 65535 & N, j = N = 0, a.mode = 15, F === 6) break t;
          case 15:
            a.mode = 16;
          case 16:
            if (q = a.length) {
              if (G < q && (q = G), tt < q && (q = tt), q === 0) break t;
              r.arraySet(at, U, Y, q, ot), G -= q, Y += q, tt -= q, ot += q, a.length -= q;
              break;
            }
            a.mode = 12;
            break;
          case 17:
            for (; j < 14; ) {
              if (G === 0) break t;
              G--, N += U[Y++] << j, j += 8;
            }
            if (a.nlen = 257 + (31 & N), N >>>= 5, j -= 5, a.ndist = 1 + (31 & N), N >>>= 5, j -= 5, a.ncode = 4 + (15 & N), N >>>= 4, j -= 4, 286 < a.nlen || 30 < a.ndist) {
              C.msg = "too many length or distance symbols", a.mode = 30;
              break;
            }
            a.have = 0, a.mode = 18;
          case 18:
            for (; a.have < a.ncode; ) {
              for (; j < 3; ) {
                if (G === 0) break t;
                G--, N += U[Y++] << j, j += 8;
              }
              a.lens[$[a.have++]] = 7 & N, N >>>= 3, j -= 3;
            }
            for (; a.have < 19; ) a.lens[$[a.have++]] = 0;
            if (a.lencode = a.lendyn, a.lenbits = 7, z = { bits: a.lenbits }, B = _(0, a.lens, 0, 19, a.lencode, 0, a.work, z), a.lenbits = z.bits, B) {
              C.msg = "invalid code lengths set", a.mode = 30;
              break;
            }
            a.have = 0, a.mode = 19;
          case 19:
            for (; a.have < a.nlen + a.ndist; ) {
              for (; ut = (p = a.lencode[N & (1 << a.lenbits) - 1]) >>> 16 & 255, mt = 65535 & p, !((st = p >>> 24) <= j); ) {
                if (G === 0) break t;
                G--, N += U[Y++] << j, j += 8;
              }
              if (mt < 16) N >>>= st, j -= st, a.lens[a.have++] = mt;
              else {
                if (mt === 16) {
                  for (g = st + 2; j < g; ) {
                    if (G === 0) break t;
                    G--, N += U[Y++] << j, j += 8;
                  }
                  if (N >>>= st, j -= st, a.have === 0) {
                    C.msg = "invalid bit length repeat", a.mode = 30;
                    break;
                  }
                  t = a.lens[a.have - 1], q = 3 + (3 & N), N >>>= 2, j -= 2;
                } else if (mt === 17) {
                  for (g = st + 3; j < g; ) {
                    if (G === 0) break t;
                    G--, N += U[Y++] << j, j += 8;
                  }
                  j -= st, t = 0, q = 3 + (7 & (N >>>= st)), N >>>= 3, j -= 3;
                } else {
                  for (g = st + 7; j < g; ) {
                    if (G === 0) break t;
                    G--, N += U[Y++] << j, j += 8;
                  }
                  j -= st, t = 0, q = 11 + (127 & (N >>>= st)), N >>>= 7, j -= 7;
                }
                if (a.have + q > a.nlen + a.ndist) {
                  C.msg = "invalid bit length repeat", a.mode = 30;
                  break;
                }
                for (; q--; ) a.lens[a.have++] = t;
              }
            }
            if (a.mode === 30) break;
            if (a.lens[256] === 0) {
              C.msg = "invalid code -- missing end-of-block", a.mode = 30;
              break;
            }
            if (a.lenbits = 9, z = { bits: a.lenbits }, B = _(x, a.lens, 0, a.nlen, a.lencode, 0, a.work, z), a.lenbits = z.bits, B) {
              C.msg = "invalid literal/lengths set", a.mode = 30;
              break;
            }
            if (a.distbits = 6, a.distcode = a.distdyn, z = { bits: a.distbits }, B = _(y, a.lens, a.nlen, a.ndist, a.distcode, 0, a.work, z), a.distbits = z.bits, B) {
              C.msg = "invalid distances set", a.mode = 30;
              break;
            }
            if (a.mode = 20, F === 6) break t;
          case 20:
            a.mode = 21;
          case 21:
            if (6 <= G && 258 <= tt) {
              C.next_out = ot, C.avail_out = tt, C.next_in = Y, C.avail_in = G, a.hold = N, a.bits = j, l(C, J), ot = C.next_out, at = C.output, tt = C.avail_out, Y = C.next_in, U = C.input, G = C.avail_in, N = a.hold, j = a.bits, a.mode === 12 && (a.back = -1);
              break;
            }
            for (a.back = 0; ut = (p = a.lencode[N & (1 << a.lenbits) - 1]) >>> 16 & 255, mt = 65535 & p, !((st = p >>> 24) <= j); ) {
              if (G === 0) break t;
              G--, N += U[Y++] << j, j += 8;
            }
            if (ut && !(240 & ut)) {
              for (wt = st, _t = ut, St = mt; ut = (p = a.lencode[St + ((N & (1 << wt + _t) - 1) >> wt)]) >>> 16 & 255, mt = 65535 & p, !(wt + (st = p >>> 24) <= j); ) {
                if (G === 0) break t;
                G--, N += U[Y++] << j, j += 8;
              }
              N >>>= wt, j -= wt, a.back += wt;
            }
            if (N >>>= st, j -= st, a.back += st, a.length = mt, ut === 0) {
              a.mode = 26;
              break;
            }
            if (32 & ut) {
              a.back = -1, a.mode = 12;
              break;
            }
            if (64 & ut) {
              C.msg = "invalid literal/length code", a.mode = 30;
              break;
            }
            a.extra = 15 & ut, a.mode = 22;
          case 22:
            if (a.extra) {
              for (g = a.extra; j < g; ) {
                if (G === 0) break t;
                G--, N += U[Y++] << j, j += 8;
              }
              a.length += N & (1 << a.extra) - 1, N >>>= a.extra, j -= a.extra, a.back += a.extra;
            }
            a.was = a.length, a.mode = 23;
          case 23:
            for (; ut = (p = a.distcode[N & (1 << a.distbits) - 1]) >>> 16 & 255, mt = 65535 & p, !((st = p >>> 24) <= j); ) {
              if (G === 0) break t;
              G--, N += U[Y++] << j, j += 8;
            }
            if (!(240 & ut)) {
              for (wt = st, _t = ut, St = mt; ut = (p = a.distcode[St + ((N & (1 << wt + _t) - 1) >> wt)]) >>> 16 & 255, mt = 65535 & p, !(wt + (st = p >>> 24) <= j); ) {
                if (G === 0) break t;
                G--, N += U[Y++] << j, j += 8;
              }
              N >>>= wt, j -= wt, a.back += wt;
            }
            if (N >>>= st, j -= st, a.back += st, 64 & ut) {
              C.msg = "invalid distance code", a.mode = 30;
              break;
            }
            a.offset = mt, a.extra = 15 & ut, a.mode = 24;
          case 24:
            if (a.extra) {
              for (g = a.extra; j < g; ) {
                if (G === 0) break t;
                G--, N += U[Y++] << j, j += 8;
              }
              a.offset += N & (1 << a.extra) - 1, N >>>= a.extra, j -= a.extra, a.back += a.extra;
            }
            if (a.offset > a.dmax) {
              C.msg = "invalid distance too far back", a.mode = 30;
              break;
            }
            a.mode = 25;
          case 25:
            if (tt === 0) break t;
            if (q = J - tt, a.offset > q) {
              if ((q = a.offset - q) > a.whave && a.sane) {
                C.msg = "invalid distance too far back", a.mode = 30;
                break;
              }
              gt = q > a.wnext ? (q -= a.wnext, a.wsize - q) : a.wnext - q, q > a.length && (q = a.length), vt = a.window;
            } else vt = at, gt = ot - a.offset, q = a.length;
            for (tt < q && (q = tt), tt -= q, a.length -= q; at[ot++] = vt[gt++], --q; ) ;
            a.length === 0 && (a.mode = 21);
            break;
          case 26:
            if (tt === 0) break t;
            at[ot++] = a.length, tt--, a.mode = 21;
            break;
          case 27:
            if (a.wrap) {
              for (; j < 32; ) {
                if (G === 0) break t;
                G--, N |= U[Y++] << j, j += 8;
              }
              if (J -= tt, C.total_out += J, a.total += J, J && (C.adler = a.check = a.flags ? i(a.check, at, J, ot - J) : s(a.check, at, J, ot - J)), J = tt, (a.flags ? N : d(N)) !== a.check) {
                C.msg = "incorrect data check", a.mode = 30;
                break;
              }
              j = N = 0;
            }
            a.mode = 28;
          case 28:
            if (a.wrap && a.flags) {
              for (; j < 32; ) {
                if (G === 0) break t;
                G--, N += U[Y++] << j, j += 8;
              }
              if (N !== (4294967295 & a.total)) {
                C.msg = "incorrect length check", a.mode = 30;
                break;
              }
              j = N = 0;
            }
            a.mode = 29;
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
            return f;
        }
        return C.next_out = ot, C.avail_out = tt, C.next_in = Y, C.avail_in = G, a.hold = N, a.bits = j, (a.wsize || J !== C.avail_out && a.mode < 30 && (a.mode < 27 || F !== 4)) && nt(C, C.output, C.next_out, J - C.avail_out) ? (a.mode = 31, -4) : (et -= C.avail_in, J -= C.avail_out, C.total_in += et, C.total_out += J, a.total += J, a.wrap && J && (C.adler = a.check = a.flags ? i(a.check, at, J, C.next_out - J) : s(a.check, at, J, C.next_out - J)), C.data_type = a.bits + (a.last ? 64 : 0) + (a.mode === 12 ? 128 : 0) + (a.mode === 20 || a.mode === 15 ? 256 : 0), (et == 0 && J === 0 || F === 4) && B === b && (B = -5), B);
      }, u.inflateEnd = function(C) {
        if (!C || !C.state) return f;
        var F = C.state;
        return F.window && (F.window = null), C.state = null, b;
      }, u.inflateGetHeader = function(C, F) {
        var a;
        return C && C.state && 2 & (a = C.state).wrap ? ((a.head = F).done = !1, b) : f;
      }, u.inflateSetDictionary = function(C, F) {
        var a, U = F.length;
        return C && C.state ? (a = C.state).wrap !== 0 && a.mode !== 11 ? f : a.mode === 11 && s(1, F, U, 0) !== a.check ? -3 : nt(C, F, U, U) ? (a.mode = 31, -4) : (a.havedict = 1, b) : f;
      }, u.inflateInfo = "pako inflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(n, h, u) {
      var r = n("../utils/common"), s = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], i = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], l = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], _ = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
      h.exports = function(x, y, b, f, w, c, m, d) {
        var v, E, O, T, L, P, W, I, Z, nt = d.bits, C = 0, F = 0, a = 0, U = 0, at = 0, Y = 0, ot = 0, G = 0, tt = 0, N = 0, j = null, et = 0, J = new r.Buf16(16), q = new r.Buf16(16), gt = null, vt = 0;
        for (C = 0; C <= 15; C++) J[C] = 0;
        for (F = 0; F < f; F++) J[y[b + F]]++;
        for (at = nt, U = 15; 1 <= U && J[U] === 0; U--) ;
        if (U < at && (at = U), U === 0) return w[c++] = 20971520, w[c++] = 20971520, d.bits = 1, 0;
        for (a = 1; a < U && J[a] === 0; a++) ;
        for (at < a && (at = a), C = G = 1; C <= 15; C++) if (G <<= 1, (G -= J[C]) < 0) return -1;
        if (0 < G && (x === 0 || U !== 1)) return -1;
        for (q[1] = 0, C = 1; C < 15; C++) q[C + 1] = q[C] + J[C];
        for (F = 0; F < f; F++) y[b + F] !== 0 && (m[q[y[b + F]]++] = F);
        if (P = x === 0 ? (j = gt = m, 19) : x === 1 ? (j = s, et -= 257, gt = i, vt -= 257, 256) : (j = l, gt = _, -1), C = a, L = c, ot = F = N = 0, O = -1, T = (tt = 1 << (Y = at)) - 1, x === 1 && 852 < tt || x === 2 && 592 < tt) return 1;
        for (; ; ) {
          for (W = C - ot, Z = m[F] < P ? (I = 0, m[F]) : m[F] > P ? (I = gt[vt + m[F]], j[et + m[F]]) : (I = 96, 0), v = 1 << C - ot, a = E = 1 << Y; w[L + (N >> ot) + (E -= v)] = W << 24 | I << 16 | Z | 0, E !== 0; ) ;
          for (v = 1 << C - 1; N & v; ) v >>= 1;
          if (v !== 0 ? (N &= v - 1, N += v) : N = 0, F++, --J[C] == 0) {
            if (C === U) break;
            C = y[b + m[F]];
          }
          if (at < C && (N & T) !== O) {
            for (ot === 0 && (ot = at), L += a, G = 1 << (Y = C - ot); Y + ot < U && !((G -= J[Y + ot]) <= 0); ) Y++, G <<= 1;
            if (tt += 1 << Y, x === 1 && 852 < tt || x === 2 && 592 < tt) return 1;
            w[O = N & T] = at << 24 | Y << 16 | L - c | 0;
          }
        }
        return N !== 0 && (w[L + N] = C - ot << 24 | 64 << 16 | 0), d.bits = at, 0;
      };
    }, { "../utils/common": 41 }], 51: [function(n, h, u) {
      h.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
    }, {}], 52: [function(n, h, u) {
      var r = n("../utils/common"), s = 0, i = 1;
      function l(p) {
        for (var R = p.length; 0 <= --R; ) p[R] = 0;
      }
      var _ = 0, x = 29, y = 256, b = y + 1 + x, f = 30, w = 19, c = 2 * b + 1, m = 15, d = 16, v = 7, E = 256, O = 16, T = 17, L = 18, P = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], W = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], I = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], Z = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], nt = new Array(2 * (b + 2));
      l(nt);
      var C = new Array(2 * f);
      l(C);
      var F = new Array(512);
      l(F);
      var a = new Array(256);
      l(a);
      var U = new Array(x);
      l(U);
      var at, Y, ot, G = new Array(f);
      function tt(p, R, $, H, A) {
        this.static_tree = p, this.extra_bits = R, this.extra_base = $, this.elems = H, this.max_length = A, this.has_stree = p && p.length;
      }
      function N(p, R) {
        this.dyn_tree = p, this.max_code = 0, this.stat_desc = R;
      }
      function j(p) {
        return p < 256 ? F[p] : F[256 + (p >>> 7)];
      }
      function et(p, R) {
        p.pending_buf[p.pending++] = 255 & R, p.pending_buf[p.pending++] = R >>> 8 & 255;
      }
      function J(p, R, $) {
        p.bi_valid > d - $ ? (p.bi_buf |= R << p.bi_valid & 65535, et(p, p.bi_buf), p.bi_buf = R >> d - p.bi_valid, p.bi_valid += $ - d) : (p.bi_buf |= R << p.bi_valid & 65535, p.bi_valid += $);
      }
      function q(p, R, $) {
        J(p, $[2 * R], $[2 * R + 1]);
      }
      function gt(p, R) {
        for (var $ = 0; $ |= 1 & p, p >>>= 1, $ <<= 1, 0 < --R; ) ;
        return $ >>> 1;
      }
      function vt(p, R, $) {
        var H, A, X = new Array(m + 1), Q = 0;
        for (H = 1; H <= m; H++) X[H] = Q = Q + $[H - 1] << 1;
        for (A = 0; A <= R; A++) {
          var K = p[2 * A + 1];
          K !== 0 && (p[2 * A] = gt(X[K]++, K));
        }
      }
      function st(p) {
        var R;
        for (R = 0; R < b; R++) p.dyn_ltree[2 * R] = 0;
        for (R = 0; R < f; R++) p.dyn_dtree[2 * R] = 0;
        for (R = 0; R < w; R++) p.bl_tree[2 * R] = 0;
        p.dyn_ltree[2 * E] = 1, p.opt_len = p.static_len = 0, p.last_lit = p.matches = 0;
      }
      function ut(p) {
        8 < p.bi_valid ? et(p, p.bi_buf) : 0 < p.bi_valid && (p.pending_buf[p.pending++] = p.bi_buf), p.bi_buf = 0, p.bi_valid = 0;
      }
      function mt(p, R, $, H) {
        var A = 2 * R, X = 2 * $;
        return p[A] < p[X] || p[A] === p[X] && H[R] <= H[$];
      }
      function wt(p, R, $) {
        for (var H = p.heap[$], A = $ << 1; A <= p.heap_len && (A < p.heap_len && mt(R, p.heap[A + 1], p.heap[A], p.depth) && A++, !mt(R, H, p.heap[A], p.depth)); ) p.heap[$] = p.heap[A], $ = A, A <<= 1;
        p.heap[$] = H;
      }
      function _t(p, R, $) {
        var H, A, X, Q, K = 0;
        if (p.last_lit !== 0) for (; H = p.pending_buf[p.d_buf + 2 * K] << 8 | p.pending_buf[p.d_buf + 2 * K + 1], A = p.pending_buf[p.l_buf + K], K++, H === 0 ? q(p, A, R) : (q(p, (X = a[A]) + y + 1, R), (Q = P[X]) !== 0 && J(p, A -= U[X], Q), q(p, X = j(--H), $), (Q = W[X]) !== 0 && J(p, H -= G[X], Q)), K < p.last_lit; ) ;
        q(p, E, R);
      }
      function St(p, R) {
        var $, H, A, X = R.dyn_tree, Q = R.stat_desc.static_tree, K = R.stat_desc.has_stree, rt = R.stat_desc.elems, pt = -1;
        for (p.heap_len = 0, p.heap_max = c, $ = 0; $ < rt; $++) X[2 * $] !== 0 ? (p.heap[++p.heap_len] = pt = $, p.depth[$] = 0) : X[2 * $ + 1] = 0;
        for (; p.heap_len < 2; ) X[2 * (A = p.heap[++p.heap_len] = pt < 2 ? ++pt : 0)] = 1, p.depth[A] = 0, p.opt_len--, K && (p.static_len -= Q[2 * A + 1]);
        for (R.max_code = pt, $ = p.heap_len >> 1; 1 <= $; $--) wt(p, X, $);
        for (A = rt; $ = p.heap[1], p.heap[1] = p.heap[p.heap_len--], wt(p, X, 1), H = p.heap[1], p.heap[--p.heap_max] = $, p.heap[--p.heap_max] = H, X[2 * A] = X[2 * $] + X[2 * H], p.depth[A] = (p.depth[$] >= p.depth[H] ? p.depth[$] : p.depth[H]) + 1, X[2 * $ + 1] = X[2 * H + 1] = A, p.heap[1] = A++, wt(p, X, 1), 2 <= p.heap_len; ) ;
        p.heap[--p.heap_max] = p.heap[1], function(lt, Et) {
          var Dt, Rt, Lt, yt, Ut, Mt, Tt = Et.dyn_tree, Ht = Et.max_code, $t = Et.stat_desc.static_tree, Wt = Et.stat_desc.has_stree, zt = Et.stat_desc.extra_bits, Ft = Et.stat_desc.extra_base, jt = Et.stat_desc.max_length, Pt = 0;
          for (yt = 0; yt <= m; yt++) lt.bl_count[yt] = 0;
          for (Tt[2 * lt.heap[lt.heap_max] + 1] = 0, Dt = lt.heap_max + 1; Dt < c; Dt++) jt < (yt = Tt[2 * Tt[2 * (Rt = lt.heap[Dt]) + 1] + 1] + 1) && (yt = jt, Pt++), Tt[2 * Rt + 1] = yt, Ht < Rt || (lt.bl_count[yt]++, Ut = 0, Ft <= Rt && (Ut = zt[Rt - Ft]), Mt = Tt[2 * Rt], lt.opt_len += Mt * (yt + Ut), Wt && (lt.static_len += Mt * ($t[2 * Rt + 1] + Ut)));
          if (Pt !== 0) {
            do {
              for (yt = jt - 1; lt.bl_count[yt] === 0; ) yt--;
              lt.bl_count[yt]--, lt.bl_count[yt + 1] += 2, lt.bl_count[jt]--, Pt -= 2;
            } while (0 < Pt);
            for (yt = jt; yt !== 0; yt--) for (Rt = lt.bl_count[yt]; Rt !== 0; ) Ht < (Lt = lt.heap[--Dt]) || (Tt[2 * Lt + 1] !== yt && (lt.opt_len += (yt - Tt[2 * Lt + 1]) * Tt[2 * Lt], Tt[2 * Lt + 1] = yt), Rt--);
          }
        }(p, R), vt(X, pt, p.bl_count);
      }
      function t(p, R, $) {
        var H, A, X = -1, Q = R[1], K = 0, rt = 7, pt = 4;
        for (Q === 0 && (rt = 138, pt = 3), R[2 * ($ + 1) + 1] = 65535, H = 0; H <= $; H++) A = Q, Q = R[2 * (H + 1) + 1], ++K < rt && A === Q || (K < pt ? p.bl_tree[2 * A] += K : A !== 0 ? (A !== X && p.bl_tree[2 * A]++, p.bl_tree[2 * O]++) : K <= 10 ? p.bl_tree[2 * T]++ : p.bl_tree[2 * L]++, X = A, pt = (K = 0) === Q ? (rt = 138, 3) : A === Q ? (rt = 6, 3) : (rt = 7, 4));
      }
      function B(p, R, $) {
        var H, A, X = -1, Q = R[1], K = 0, rt = 7, pt = 4;
        for (Q === 0 && (rt = 138, pt = 3), H = 0; H <= $; H++) if (A = Q, Q = R[2 * (H + 1) + 1], !(++K < rt && A === Q)) {
          if (K < pt) for (; q(p, A, p.bl_tree), --K != 0; ) ;
          else A !== 0 ? (A !== X && (q(p, A, p.bl_tree), K--), q(p, O, p.bl_tree), J(p, K - 3, 2)) : K <= 10 ? (q(p, T, p.bl_tree), J(p, K - 3, 3)) : (q(p, L, p.bl_tree), J(p, K - 11, 7));
          X = A, pt = (K = 0) === Q ? (rt = 138, 3) : A === Q ? (rt = 6, 3) : (rt = 7, 4);
        }
      }
      l(G);
      var z = !1;
      function g(p, R, $, H) {
        J(p, (_ << 1) + (H ? 1 : 0), 3), function(A, X, Q, K) {
          ut(A), et(A, Q), et(A, ~Q), r.arraySet(A.pending_buf, A.window, X, Q, A.pending), A.pending += Q;
        }(p, R, $);
      }
      u._tr_init = function(p) {
        z || (function() {
          var R, $, H, A, X, Q = new Array(m + 1);
          for (A = H = 0; A < x - 1; A++) for (U[A] = H, R = 0; R < 1 << P[A]; R++) a[H++] = A;
          for (a[H - 1] = A, A = X = 0; A < 16; A++) for (G[A] = X, R = 0; R < 1 << W[A]; R++) F[X++] = A;
          for (X >>= 7; A < f; A++) for (G[A] = X << 7, R = 0; R < 1 << W[A] - 7; R++) F[256 + X++] = A;
          for ($ = 0; $ <= m; $++) Q[$] = 0;
          for (R = 0; R <= 143; ) nt[2 * R + 1] = 8, R++, Q[8]++;
          for (; R <= 255; ) nt[2 * R + 1] = 9, R++, Q[9]++;
          for (; R <= 279; ) nt[2 * R + 1] = 7, R++, Q[7]++;
          for (; R <= 287; ) nt[2 * R + 1] = 8, R++, Q[8]++;
          for (vt(nt, b + 1, Q), R = 0; R < f; R++) C[2 * R + 1] = 5, C[2 * R] = gt(R, 5);
          at = new tt(nt, P, y + 1, b, m), Y = new tt(C, W, 0, f, m), ot = new tt(new Array(0), I, 0, w, v);
        }(), z = !0), p.l_desc = new N(p.dyn_ltree, at), p.d_desc = new N(p.dyn_dtree, Y), p.bl_desc = new N(p.bl_tree, ot), p.bi_buf = 0, p.bi_valid = 0, st(p);
      }, u._tr_stored_block = g, u._tr_flush_block = function(p, R, $, H) {
        var A, X, Q = 0;
        0 < p.level ? (p.strm.data_type === 2 && (p.strm.data_type = function(K) {
          var rt, pt = 4093624447;
          for (rt = 0; rt <= 31; rt++, pt >>>= 1) if (1 & pt && K.dyn_ltree[2 * rt] !== 0) return s;
          if (K.dyn_ltree[18] !== 0 || K.dyn_ltree[20] !== 0 || K.dyn_ltree[26] !== 0) return i;
          for (rt = 32; rt < y; rt++) if (K.dyn_ltree[2 * rt] !== 0) return i;
          return s;
        }(p)), St(p, p.l_desc), St(p, p.d_desc), Q = function(K) {
          var rt;
          for (t(K, K.dyn_ltree, K.l_desc.max_code), t(K, K.dyn_dtree, K.d_desc.max_code), St(K, K.bl_desc), rt = w - 1; 3 <= rt && K.bl_tree[2 * Z[rt] + 1] === 0; rt--) ;
          return K.opt_len += 3 * (rt + 1) + 5 + 5 + 4, rt;
        }(p), A = p.opt_len + 3 + 7 >>> 3, (X = p.static_len + 3 + 7 >>> 3) <= A && (A = X)) : A = X = $ + 5, $ + 4 <= A && R !== -1 ? g(p, R, $, H) : p.strategy === 4 || X === A ? (J(p, 2 + (H ? 1 : 0), 3), _t(p, nt, C)) : (J(p, 4 + (H ? 1 : 0), 3), function(K, rt, pt, lt) {
          var Et;
          for (J(K, rt - 257, 5), J(K, pt - 1, 5), J(K, lt - 4, 4), Et = 0; Et < lt; Et++) J(K, K.bl_tree[2 * Z[Et] + 1], 3);
          B(K, K.dyn_ltree, rt - 1), B(K, K.dyn_dtree, pt - 1);
        }(p, p.l_desc.max_code + 1, p.d_desc.max_code + 1, Q + 1), _t(p, p.dyn_ltree, p.dyn_dtree)), st(p), H && ut(p);
      }, u._tr_tally = function(p, R, $) {
        return p.pending_buf[p.d_buf + 2 * p.last_lit] = R >>> 8 & 255, p.pending_buf[p.d_buf + 2 * p.last_lit + 1] = 255 & R, p.pending_buf[p.l_buf + p.last_lit] = 255 & $, p.last_lit++, R === 0 ? p.dyn_ltree[2 * $]++ : (p.matches++, R--, p.dyn_ltree[2 * (a[$] + y + 1)]++, p.dyn_dtree[2 * j(R)]++), p.last_lit === p.lit_bufsize - 1;
      }, u._tr_align = function(p) {
        J(p, 2, 3), q(p, E, nt), function(R) {
          R.bi_valid === 16 ? (et(R, R.bi_buf), R.bi_buf = 0, R.bi_valid = 0) : 8 <= R.bi_valid && (R.pending_buf[R.pending++] = 255 & R.bi_buf, R.bi_buf >>= 8, R.bi_valid -= 8);
        }(p);
      };
    }, { "../utils/common": 41 }], 53: [function(n, h, u) {
      h.exports = function() {
        this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
      };
    }, {}], 54: [function(n, h, u) {
      (function(r) {
        (function(s, i) {
          if (!s.setImmediate) {
            var l, _, x, y, b = 1, f = {}, w = !1, c = s.document, m = Object.getPrototypeOf && Object.getPrototypeOf(s);
            m = m && m.setTimeout ? m : s, l = {}.toString.call(s.process) === "[object process]" ? function(O) {
              process.nextTick(function() {
                v(O);
              });
            } : function() {
              if (s.postMessage && !s.importScripts) {
                var O = !0, T = s.onmessage;
                return s.onmessage = function() {
                  O = !1;
                }, s.postMessage("", "*"), s.onmessage = T, O;
              }
            }() ? (y = "setImmediate$" + Math.random() + "$", s.addEventListener ? s.addEventListener("message", E, !1) : s.attachEvent("onmessage", E), function(O) {
              s.postMessage(y + O, "*");
            }) : s.MessageChannel ? ((x = new MessageChannel()).port1.onmessage = function(O) {
              v(O.data);
            }, function(O) {
              x.port2.postMessage(O);
            }) : c && "onreadystatechange" in c.createElement("script") ? (_ = c.documentElement, function(O) {
              var T = c.createElement("script");
              T.onreadystatechange = function() {
                v(O), T.onreadystatechange = null, _.removeChild(T), T = null;
              }, _.appendChild(T);
            }) : function(O) {
              setTimeout(v, 0, O);
            }, m.setImmediate = function(O) {
              typeof O != "function" && (O = new Function("" + O));
              for (var T = new Array(arguments.length - 1), L = 0; L < T.length; L++) T[L] = arguments[L + 1];
              var P = { callback: O, args: T };
              return f[b] = P, l(b), b++;
            }, m.clearImmediate = d;
          }
          function d(O) {
            delete f[O];
          }
          function v(O) {
            if (w) setTimeout(v, 0, O);
            else {
              var T = f[O];
              if (T) {
                w = !0;
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
                  })(T);
                } finally {
                  d(O), w = !1;
                }
              }
            }
          }
          function E(O) {
            O.source === s && typeof O.data == "string" && O.data.indexOf(y) === 0 && v(+O.data.slice(y.length));
          }
        })(typeof self > "u" ? r === void 0 ? this : r : self);
      }).call(this, typeof he < "u" ? he : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}] }, {}, [10])(10);
  });
})(Ze);
var lr = Ze.exports;
const cr = /* @__PURE__ */ ar(lr);
function ur(e = {}) {
  const {
    storageKey: o = "page-reviews",
    defaultPagePath: n = () => typeof window < "u" ? window.location.pathname + window.location.search : "/"
  } = e;
  function h() {
    return "rv-" + Date.now() + "-" + Math.random().toString(36).slice(2, 8);
  }
  function u() {
    if (typeof window > "u") return [];
    try {
      const E = window.localStorage.getItem(o);
      return E ? JSON.parse(E) : [];
    } catch {
      return [];
    }
  }
  function r(E) {
    if (!(typeof window > "u"))
      try {
        window.localStorage.setItem(o, JSON.stringify(E));
      } catch {
      }
  }
  const [s, i] = Ct(u), l = dt(() => s, [s]), _ = dt((E) => {
    const O = E || n();
    return s.filter((T) => T.pagePath === O);
  }, [s, n]), x = dt((E) => {
    const O = {
      id: h(),
      ...E,
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    return i((T) => {
      const L = [O, ...T];
      return r(L), L;
    }), O;
  }, []), y = dt((E, O) => {
    i((T) => {
      const L = T.map((P) => P.id === E ? { ...P, ...O } : P);
      return r(L), L;
    });
  }, []), b = dt((E) => {
    i((O) => {
      const T = O.filter((L) => L.id !== E);
      return r(T), T;
    });
  }, []), f = dt((E) => {
    const O = E || n();
    i((T) => {
      const L = T.filter((P) => P.pagePath !== O);
      return r(L), L;
    });
  }, [n]), w = dt(() => {
    i([]), r([]);
  }, []), c = dt(() => ({
    exportTime: (/* @__PURE__ */ new Date()).toISOString(),
    total: s.length,
    reviews: s
  }), [s]), m = dt(() => {
    _e(
      new Blob([JSON.stringify(c(), null, 2)], { type: "application/json" }),
      `page-reviews-${be()}.json`
    );
  }, [c]), d = dt(() => {
    const E = ze(c());
    _e(
      new Blob([E], { type: "text/markdown" }),
      `page-reviews-${be()}.md`
    );
  }, [c]), v = dt(async () => {
    const E = new cr(), O = c(), T = {
      ...O,
      reviews: O.reviews.map((W) => {
        var I;
        return {
          ...W,
          screenshots: (I = W.screenshots) == null ? void 0 : I.map((Z) => Z.url ? { type: Z.type, filename: Z.filename, url: Z.url } : { type: Z.type, filename: Z.filename, imagePath: `images/${Z.filename}` })
        };
      })
    };
    E.file("review.json", JSON.stringify(T, null, 2)), E.file("review.md", ze(T));
    const L = E.folder("images");
    for (const W of O.reviews)
      for (const I of W.screenshots || [])
        if (I.data && !I.url) {
          const Z = I.data.replace(/^data:image\/png;base64,/, "");
          L.file(I.filename, Z, { base64: !0 });
        }
    const P = await E.generateAsync({ type: "blob" });
    _e(P, `page-reviews-${be()}.zip`);
  }, [c]);
  return {
    reviews: s,
    allReviews: l,
    getPageReviews: _,
    addReview: x,
    updateReview: y,
    deleteReview: b,
    clearPageReviews: f,
    clearAllReviews: w,
    exportToJSON: m,
    exportToMarkdown: d,
    exportToZIP: v
  };
}
function ze(e) {
  const o = [
    "# 页面评审报告",
    "",
    `导出时间：${(/* @__PURE__ */ new Date()).toLocaleString()}`,
    `评审总数：${e.total}`,
    ""
  ], n = hr(e.reviews, "pagePath");
  return Object.entries(n).forEach(([h, u]) => {
    o.push(`## 页面：${h}`), o.push(""), u.forEach((r, s) => {
      var i, l, _, x;
      o.push(`### ${s + 1}. ${r.title || "未命名评审"}`), o.push(`- **类型**：${r.type === "element" ? "元素评审" : "视图范围评审"}`), o.push(`- **严重等级**：${fr(r.severity)}`), o.push(`- **状态**：${r.status === "resolved" ? "已解决" : "待处理"}`), o.push(`- **窗口尺寸**：${(i = r.viewport) == null ? void 0 : i.width} × ${(l = r.viewport) == null ? void 0 : l.height}`), r.scroll && o.push(`- **滚动位置**：x=${r.scroll.x}, y=${r.scroll.y}`), r.type === "element" && r.elementRect ? (o.push(`- **元素选择器**：\`${r.selector}\``), o.push(`- **元素位置**：x=${r.elementRect.x}, y=${r.elementRect.y}, width=${r.elementRect.width}, height=${r.elementRect.height}`), r.elementText && o.push(`- **元素文本**：${r.elementText}`)) : r.viewportRect && o.push(`- **框选范围**：x=${r.viewportRect.x}, y=${r.viewportRect.y}, width=${r.viewportRect.width}, height=${r.viewportRect.height}`), o.push(`- **评审建议**：${r.suggestion}`), o.push(`- **创建时间**：${new Date(r.createdAt).toLocaleString()}`), r.locators && Object.keys(r.locators).length > 0 && (o.push(""), o.push("#### 定位信息"), r.locators.cssSelector && o.push(`- **CSS Selector**: \`${r.locators.cssSelector}\``), r.locators.xpath && o.push(`- **XPath**: \`${r.locators.xpath}\``), (_ = r.locators.aria) != null && _.role && o.push(`- **ARIA Role**: ${r.locators.aria.role}`), (x = r.locators.aria) != null && x.accessibleName && o.push(`- **Accessible Name**: ${r.locators.aria.accessibleName}`), r.locators.testId && o.push(`- **data-testid**: ${r.locators.testId}`)), r.screenshots && r.screenshots.length > 0 && (o.push(""), o.push("#### 截图"), r.screenshots.forEach((y) => {
        const b = y.url || y.imagePath || `images/${y.filename}`;
        o.push(`![${y.type}](${b})`);
      })), o.push("");
    });
  }), o.join(`
`);
}
function _e(e, o) {
  if (typeof window > "u") return;
  const n = URL.createObjectURL(e), h = document.createElement("a");
  h.href = n, h.download = o, document.body.appendChild(h), h.click(), document.body.removeChild(h), URL.revokeObjectURL(n);
}
function be() {
  const e = /* @__PURE__ */ new Date();
  return `${e.getFullYear()}${pe(e.getMonth() + 1)}${pe(e.getDate())}-${pe(e.getHours())}${pe(e.getMinutes())}`;
}
function pe(e) {
  return String(e).padStart(2, "0");
}
function fr(e) {
  return { low: "低", medium: "中", high: "高", critical: "严重" }[e] || e;
}
function hr(e, o) {
  return e.reduce((n, h) => {
    const u = h[o] || "unknown";
    return n[u] || (n[u] = []), n[u].push(h), n;
  }, {});
}
function dr(e, o) {
  if (e.match(/^[a-z]+:\/\//i))
    return e;
  if (e.match(/^\/\//))
    return window.location.protocol + e;
  if (e.match(/^[a-z]+:/i))
    return e;
  const n = document.implementation.createHTMLDocument(), h = n.createElement("base"), u = n.createElement("a");
  return n.head.appendChild(h), n.body.appendChild(u), o && (h.href = o), u.href = e, u.href;
}
const pr = /* @__PURE__ */ (() => {
  let e = 0;
  const o = () => (
    // eslint-disable-next-line no-bitwise
    `0000${(Math.random() * 36 ** 4 << 0).toString(36)}`.slice(-4)
  );
  return () => (e += 1, `u${o()}${e}`);
})();
function Zt(e) {
  const o = [];
  for (let n = 0, h = e.length; n < h; n++)
    o.push(e[n]);
  return o;
}
let Xt = null;
function He(e = {}) {
  return Xt || (e.includeStyleProperties ? (Xt = e.includeStyleProperties, Xt) : (Xt = Zt(window.getComputedStyle(document.documentElement)), Xt));
}
function me(e, o) {
  const h = (e.ownerDocument.defaultView || window).getComputedStyle(e).getPropertyValue(o);
  return h ? parseFloat(h.replace("px", "")) : 0;
}
function mr(e) {
  const o = me(e, "border-left-width"), n = me(e, "border-right-width");
  return e.clientWidth + o + n;
}
function gr(e) {
  const o = me(e, "border-top-width"), n = me(e, "border-bottom-width");
  return e.clientHeight + o + n;
}
function Ve(e, o = {}) {
  const n = o.width || mr(e), h = o.height || gr(e);
  return { width: n, height: h };
}
function vr() {
  let e, o;
  try {
    o = process;
  } catch {
  }
  const n = o && o.env ? o.env.devicePixelRatio : null;
  return n && (e = parseInt(n, 10), Number.isNaN(e) && (e = 1)), e || window.devicePixelRatio || 1;
}
const Nt = 16384;
function wr(e) {
  (e.width > Nt || e.height > Nt) && (e.width > Nt && e.height > Nt ? e.width > e.height ? (e.height *= Nt / e.width, e.width = Nt) : (e.width *= Nt / e.height, e.height = Nt) : e.width > Nt ? (e.height *= Nt / e.width, e.width = Nt) : (e.width *= Nt / e.height, e.height = Nt));
}
function ge(e) {
  return new Promise((o, n) => {
    const h = new Image();
    h.onload = () => {
      h.decode().then(() => {
        requestAnimationFrame(() => o(h));
      });
    }, h.onerror = n, h.crossOrigin = "anonymous", h.decoding = "async", h.src = e;
  });
}
async function yr(e) {
  return Promise.resolve().then(() => new XMLSerializer().serializeToString(e)).then(encodeURIComponent).then((o) => `data:image/svg+xml;charset=utf-8,${o}`);
}
async function _r(e, o, n) {
  const h = "http://www.w3.org/2000/svg", u = document.createElementNS(h, "svg"), r = document.createElementNS(h, "foreignObject");
  return u.setAttribute("width", `${o}`), u.setAttribute("height", `${n}`), u.setAttribute("viewBox", `0 0 ${o} ${n}`), r.setAttribute("width", "100%"), r.setAttribute("height", "100%"), r.setAttribute("x", "0"), r.setAttribute("y", "0"), r.setAttribute("externalResourcesRequired", "true"), u.appendChild(r), r.appendChild(e), yr(u);
}
const At = (e, o) => {
  if (e instanceof o)
    return !0;
  const n = Object.getPrototypeOf(e);
  return n === null ? !1 : n.constructor.name === o.name || At(n, o);
};
function br(e) {
  const o = e.getPropertyValue("content");
  return `${e.cssText} content: '${o.replace(/'|"/g, "")}';`;
}
function xr(e, o) {
  return He(o).map((n) => {
    const h = e.getPropertyValue(n), u = e.getPropertyPriority(n);
    return `${n}: ${h}${u ? " !important" : ""};`;
  }).join(" ");
}
function kr(e, o, n, h) {
  const u = `.${e}:${o}`, r = n.cssText ? br(n) : xr(n, h);
  return document.createTextNode(`${u}{${r}}`);
}
function Ie(e, o, n, h) {
  const u = window.getComputedStyle(e, n), r = u.getPropertyValue("content");
  if (r === "" || r === "none")
    return;
  const s = pr();
  try {
    o.className = `${o.className} ${s}`;
  } catch {
    return;
  }
  const i = document.createElement("style");
  i.appendChild(kr(s, n, u, h)), o.appendChild(i);
}
function Er(e, o, n) {
  Ie(e, o, ":before", n), Ie(e, o, ":after", n);
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
  const o = /\.([^./]*?)$/g.exec(e);
  return o ? o[1] : "";
}
function Ce(e) {
  const o = Cr(e).toLowerCase();
  return Sr[o] || "";
}
function Rr(e) {
  return e.split(/,/)[1];
}
function Se(e) {
  return e.search(/^(data:)/) !== -1;
}
function Tr(e, o) {
  return `data:${o};base64,${e}`;
}
async function Ye(e, o, n) {
  const h = await fetch(e, o);
  if (h.status === 404)
    throw new Error(`Resource "${h.url}" not found`);
  const u = await h.blob();
  return new Promise((r, s) => {
    const i = new FileReader();
    i.onerror = s, i.onloadend = () => {
      try {
        r(n({ res: h, result: i.result }));
      } catch (l) {
        s(l);
      }
    }, i.readAsDataURL(u);
  });
}
const xe = {};
function Or(e, o, n) {
  let h = e.replace(/\?.*/, "");
  return n && (h = e), /ttf|otf|eot|woff2?/i.test(h) && (h = h.replace(/.*\//, "")), o ? `[${o}]${h}` : h;
}
async function Re(e, o, n) {
  const h = Or(e, o, n.includeQueryParams);
  if (xe[h] != null)
    return xe[h];
  n.cacheBust && (e += (/\?/.test(e) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime());
  let u;
  try {
    const r = await Ye(e, n.fetchRequestInit, ({ res: s, result: i }) => (o || (o = s.headers.get("Content-Type") || ""), Rr(i)));
    u = Tr(r, o);
  } catch (r) {
    u = n.imagePlaceholder || "";
    let s = `Failed to fetch resource: ${e}`;
    r && (s = typeof r == "string" ? r : r.message), s && console.warn(s);
  }
  return xe[h] = u, u;
}
async function Ar(e) {
  const o = e.toDataURL();
  return o === "data:," ? e.cloneNode(!1) : ge(o);
}
async function jr(e, o) {
  if (e.currentSrc) {
    const r = document.createElement("canvas"), s = r.getContext("2d");
    r.width = e.clientWidth, r.height = e.clientHeight, s == null || s.drawImage(e, 0, 0, r.width, r.height);
    const i = r.toDataURL();
    return ge(i);
  }
  const n = e.poster, h = Ce(n), u = await Re(n, h, o);
  return ge(u);
}
async function Nr(e, o) {
  var n;
  try {
    if (!((n = e == null ? void 0 : e.contentDocument) === null || n === void 0) && n.body)
      return await ve(e.contentDocument.body, o, !0);
  } catch {
  }
  return e.cloneNode(!1);
}
async function zr(e, o) {
  return At(e, HTMLCanvasElement) ? Ar(e) : At(e, HTMLVideoElement) ? jr(e, o) : At(e, HTMLIFrameElement) ? Nr(e, o) : e.cloneNode(Ge(e));
}
const Ir = (e) => e.tagName != null && e.tagName.toUpperCase() === "SLOT", Ge = (e) => e.tagName != null && e.tagName.toUpperCase() === "SVG";
async function Pr(e, o, n) {
  var h, u;
  if (Ge(o))
    return o;
  let r = [];
  return Ir(e) && e.assignedNodes ? r = Zt(e.assignedNodes()) : At(e, HTMLIFrameElement) && (!((h = e.contentDocument) === null || h === void 0) && h.body) ? r = Zt(e.contentDocument.body.childNodes) : r = Zt(((u = e.shadowRoot) !== null && u !== void 0 ? u : e).childNodes), r.length === 0 || At(e, HTMLVideoElement) || await r.reduce((s, i) => s.then(() => ve(i, n)).then((l) => {
    l && o.appendChild(l);
  }), Promise.resolve()), o;
}
function Dr(e, o, n) {
  const h = o.style;
  if (!h)
    return;
  const u = window.getComputedStyle(e);
  u.cssText ? (h.cssText = u.cssText, h.transformOrigin = u.transformOrigin) : He(n).forEach((r) => {
    let s = u.getPropertyValue(r);
    r === "font-size" && s.endsWith("px") && (s = `${Math.floor(parseFloat(s.substring(0, s.length - 2))) - 0.1}px`), At(e, HTMLIFrameElement) && r === "display" && s === "inline" && (s = "block"), r === "d" && o.getAttribute("d") && (s = `path(${o.getAttribute("d")})`), h.setProperty(r, s, u.getPropertyPriority(r));
  });
}
function Fr(e, o) {
  At(e, HTMLTextAreaElement) && (o.innerHTML = e.value), At(e, HTMLInputElement) && o.setAttribute("value", e.value);
}
function Br(e, o) {
  if (At(e, HTMLSelectElement)) {
    const n = o, h = Array.from(n.children).find((u) => e.value === u.getAttribute("value"));
    h && h.setAttribute("selected", "");
  }
}
function Lr(e, o, n) {
  return At(o, Element) && (Dr(e, o, n), Er(e, o, n), Fr(e, o), Br(e, o)), o;
}
async function Ur(e, o) {
  const n = e.querySelectorAll ? e.querySelectorAll("use") : [];
  if (n.length === 0)
    return e;
  const h = {};
  for (let r = 0; r < n.length; r++) {
    const i = n[r].getAttribute("xlink:href");
    if (i) {
      const l = e.querySelector(i), _ = document.querySelector(i);
      !l && _ && !h[i] && (h[i] = await ve(_, o, !0));
    }
  }
  const u = Object.values(h);
  if (u.length) {
    const r = "http://www.w3.org/1999/xhtml", s = document.createElementNS(r, "svg");
    s.setAttribute("xmlns", r), s.style.position = "absolute", s.style.width = "0", s.style.height = "0", s.style.overflow = "hidden", s.style.display = "none";
    const i = document.createElementNS(r, "defs");
    s.appendChild(i);
    for (let l = 0; l < u.length; l++)
      i.appendChild(u[l]);
    e.appendChild(s);
  }
  return e;
}
async function ve(e, o, n) {
  return !n && o.filter && !o.filter(e) ? null : Promise.resolve(e).then((h) => zr(h, o)).then((h) => Pr(e, h, o)).then((h) => Lr(e, h, o)).then((h) => Ur(h, o));
}
const Xe = /url\((['"]?)([^'"]+?)\1\)/g, Mr = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g, $r = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function Wr(e) {
  const o = e.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
  return new RegExp(`(url\\(['"]?)(${o})(['"]?\\))`, "g");
}
function Zr(e) {
  const o = [];
  return e.replace(Xe, (n, h, u) => (o.push(u), n)), o.filter((n) => !Se(n));
}
async function Hr(e, o, n, h, u) {
  try {
    const r = n ? dr(o, n) : o, s = Ce(o);
    let i;
    return u || (i = await Re(r, s, h)), e.replace(Wr(o), `$1${i}$3`);
  } catch {
  }
  return e;
}
function Vr(e, { preferredFontFormat: o }) {
  return o ? e.replace($r, (n) => {
    for (; ; ) {
      const [h, , u] = Mr.exec(n) || [];
      if (!u)
        return "";
      if (u === o)
        return `src: ${h};`;
    }
  }) : e;
}
function Ke(e) {
  return e.search(Xe) !== -1;
}
async function qe(e, o, n) {
  if (!Ke(e))
    return e;
  const h = Vr(e, n);
  return Zr(h).reduce((r, s) => r.then((i) => Hr(i, s, o, n)), Promise.resolve(h));
}
async function Kt(e, o, n) {
  var h;
  const u = (h = o.style) === null || h === void 0 ? void 0 : h.getPropertyValue(e);
  if (u) {
    const r = await qe(u, null, n);
    return o.style.setProperty(e, r, o.style.getPropertyPriority(e)), !0;
  }
  return !1;
}
async function Yr(e, o) {
  await Kt("background", e, o) || await Kt("background-image", e, o), await Kt("mask", e, o) || await Kt("-webkit-mask", e, o) || await Kt("mask-image", e, o) || await Kt("-webkit-mask-image", e, o);
}
async function Gr(e, o) {
  const n = At(e, HTMLImageElement);
  if (!(n && !Se(e.src)) && !(At(e, SVGImageElement) && !Se(e.href.baseVal)))
    return;
  const h = n ? e.src : e.href.baseVal, u = await Re(h, Ce(h), o);
  await new Promise((r, s) => {
    e.onload = r, e.onerror = o.onImageErrorHandler ? (...l) => {
      try {
        r(o.onImageErrorHandler(...l));
      } catch (_) {
        s(_);
      }
    } : s;
    const i = e;
    i.decode && (i.decode = r), i.loading === "lazy" && (i.loading = "eager"), n ? (e.srcset = "", e.src = u) : e.href.baseVal = u;
  });
}
async function Xr(e, o) {
  const h = Zt(e.childNodes).map((u) => Je(u, o));
  await Promise.all(h).then(() => e);
}
async function Je(e, o) {
  At(e, Element) && (await Yr(e, o), await Gr(e, o), await Xr(e, o));
}
function Kr(e, o) {
  const { style: n } = e;
  o.backgroundColor && (n.backgroundColor = o.backgroundColor), o.width && (n.width = `${o.width}px`), o.height && (n.height = `${o.height}px`);
  const h = o.style;
  return h != null && Object.keys(h).forEach((u) => {
    n[u] = h[u];
  }), e;
}
const Fe = {};
async function Be(e) {
  let o = Fe[e];
  if (o != null)
    return o;
  const h = await (await fetch(e)).text();
  return o = { url: e, cssText: h }, Fe[e] = o, o;
}
async function Le(e, o) {
  let n = e.cssText;
  const h = /url\(["']?([^"')]+)["']?\)/g, r = (n.match(/url\([^)]+\)/g) || []).map(async (s) => {
    let i = s.replace(h, "$1");
    return i.startsWith("https://") || (i = new URL(i, e.url).href), Ye(i, o.fetchRequestInit, ({ result: l }) => (n = n.replace(s, `url(${l})`), [s, l]));
  });
  return Promise.all(r).then(() => n);
}
function Ue(e) {
  if (e == null)
    return [];
  const o = [], n = /(\/\*[\s\S]*?\*\/)/gi;
  let h = e.replace(n, "");
  const u = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
  for (; ; ) {
    const l = u.exec(h);
    if (l === null)
      break;
    o.push(l[0]);
  }
  h = h.replace(u, "");
  const r = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi, s = "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", i = new RegExp(s, "gi");
  for (; ; ) {
    let l = r.exec(h);
    if (l === null) {
      if (l = i.exec(h), l === null)
        break;
      r.lastIndex = i.lastIndex;
    } else
      i.lastIndex = r.lastIndex;
    o.push(l[0]);
  }
  return o;
}
async function qr(e, o) {
  const n = [], h = [];
  return e.forEach((u) => {
    if ("cssRules" in u)
      try {
        Zt(u.cssRules || []).forEach((r, s) => {
          if (r.type === CSSRule.IMPORT_RULE) {
            let i = s + 1;
            const l = r.href, _ = Be(l).then((x) => Le(x, o)).then((x) => Ue(x).forEach((y) => {
              try {
                u.insertRule(y, y.startsWith("@import") ? i += 1 : u.cssRules.length);
              } catch (b) {
                console.error("Error inserting rule from remote css", {
                  rule: y,
                  error: b
                });
              }
            })).catch((x) => {
              console.error("Error loading remote css", x.toString());
            });
            h.push(_);
          }
        });
      } catch (r) {
        const s = e.find((i) => i.href == null) || document.styleSheets[0];
        u.href != null && h.push(Be(u.href).then((i) => Le(i, o)).then((i) => Ue(i).forEach((l) => {
          s.insertRule(l, s.cssRules.length);
        })).catch((i) => {
          console.error("Error loading remote stylesheet", i);
        })), console.error("Error inlining remote css file", r);
      }
  }), Promise.all(h).then(() => (e.forEach((u) => {
    if ("cssRules" in u)
      try {
        Zt(u.cssRules || []).forEach((r) => {
          n.push(r);
        });
      } catch (r) {
        console.error(`Error while reading CSS rules from ${u.href}`, r);
      }
  }), n));
}
function Jr(e) {
  return e.filter((o) => o.type === CSSRule.FONT_FACE_RULE).filter((o) => Ke(o.style.getPropertyValue("src")));
}
async function Qr(e, o) {
  if (e.ownerDocument == null)
    throw new Error("Provided element is not within a Document");
  const n = Zt(e.ownerDocument.styleSheets), h = await qr(n, o);
  return Jr(h);
}
function Qe(e) {
  return e.trim().replace(/["']/g, "");
}
function tn(e) {
  const o = /* @__PURE__ */ new Set();
  function n(h) {
    (h.style.fontFamily || getComputedStyle(h).fontFamily).split(",").forEach((r) => {
      o.add(Qe(r));
    }), Array.from(h.children).forEach((r) => {
      r instanceof HTMLElement && n(r);
    });
  }
  return n(e), o;
}
async function en(e, o) {
  const n = await Qr(e, o), h = tn(e);
  return (await Promise.all(n.filter((r) => h.has(Qe(r.style.fontFamily))).map((r) => {
    const s = r.parentStyleSheet ? r.parentStyleSheet.href : null;
    return qe(r.cssText, s, o);
  }))).join(`
`);
}
async function rn(e, o) {
  const n = o.fontEmbedCSS != null ? o.fontEmbedCSS : o.skipFonts ? null : await en(e, o);
  if (n) {
    const h = document.createElement("style"), u = document.createTextNode(n);
    h.appendChild(u), e.firstChild ? e.insertBefore(h, e.firstChild) : e.appendChild(h);
  }
}
async function nn(e, o = {}) {
  const { width: n, height: h } = Ve(e, o), u = await ve(e, o, !0);
  return await rn(u, o), await Je(u, o), Kr(u, o), await _r(u, n, h);
}
async function an(e, o = {}) {
  const { width: n, height: h } = Ve(e, o), u = await nn(e, o), r = await ge(u), s = document.createElement("canvas"), i = s.getContext("2d"), l = o.pixelRatio || vr(), _ = o.canvasWidth || n, x = o.canvasHeight || h;
  return s.width = _ * l, s.height = x * l, o.skipAutoScale || wr(s), s.style.width = `${_}`, s.style.height = `${x}`, o.backgroundColor && (i.fillStyle = o.backgroundColor, i.fillRect(0, 0, s.width, s.height)), i.drawImage(r, 0, 0, s.width, s.height), s;
}
async function Te(e, o = {}) {
  return (await an(e, o)).toDataURL();
}
const Bt = {
  ELEMENT: "element",
  VIEWPORT: "viewport",
  FULL_PAGE: "fullpage",
  BOX: "box"
};
function sn(e) {
  const o = Date.now(), n = Math.random().toString(36).slice(2, 6);
  return `screenshot-${e}-${o}-${n}.png`;
}
async function tr(e, o = {}) {
  if (!e) return null;
  try {
    return await Te(e, {
      pixelRatio: o.pixelRatio || window.devicePixelRatio || 1,
      cacheBust: !0,
      ...o
    });
  } catch (n) {
    return console.error("captureElement failed:", n), null;
  }
}
async function on(e = {}) {
  const o = document.documentElement;
  return tr(o, {
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
  const o = document.documentElement, n = o.style.overflow, h = o.style.width, u = o.style.height;
  try {
    return o.style.overflow = "visible", o.style.width = "auto", o.style.height = "auto", await Te(o, {
      pixelRatio: e.pixelRatio || window.devicePixelRatio || 1,
      cacheBust: !0,
      ...e
    });
  } catch (r) {
    return console.error("captureFullPage failed:", r), null;
  } finally {
    o.style.overflow = n, o.style.width = h, o.style.height = u;
  }
}
async function cn(e, o = {}) {
  if (!e || e.width < 1 || e.height < 1) return null;
  const n = document.documentElement, h = n.style.overflow, u = n.style.width, r = n.style.height;
  try {
    n.style.overflow = "visible", n.style.width = "auto", n.style.height = "auto";
    const s = await Te(n, {
      pixelRatio: o.pixelRatio || window.devicePixelRatio || 1,
      cacheBust: !0,
      ...o
    });
    return un(s, e);
  } catch (s) {
    return console.error("captureBox failed:", s), null;
  } finally {
    n.style.overflow = h, n.style.width = u, n.style.height = r;
  }
}
function un(e, o) {
  return new Promise((n, h) => {
    const u = new Image();
    u.onload = () => {
      const r = document.createElement("canvas"), s = window.devicePixelRatio || 1;
      r.width = Math.round(o.width * s), r.height = Math.round(o.height * s), r.getContext("2d").drawImage(
        u,
        o.x * s,
        o.y * s,
        o.width * s,
        o.height * s,
        0,
        0,
        r.width,
        r.height
      ), n(r.toDataURL("image/png"));
    }, u.onerror = h, u.src = e;
  });
}
async function fn(e) {
  return (await fetch(e)).blob();
}
async function hn(e, o, n) {
  if (!n) return null;
  try {
    const h = await fn(e);
    return await n(h, o);
  } catch (h) {
    return console.error("uploadScreenshot failed:", h), null;
  }
}
function er(e) {
  var u;
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return "";
  if (e.id) return "#" + e.id;
  const o = e.tagName.toLowerCase();
  if (e.className) {
    const r = String(e.className).split(/\s+/).filter((s) => s && !s.startsWith("el-") && !/^__/.test(s)).slice(0, 2);
    if (r.length) return o + "." + r.join(".");
  }
  let n = [], h = e;
  for (; h && h !== document.body; ) {
    let r = h.tagName.toLowerCase();
    if (h.id) {
      r += "#" + h.id, n.unshift(r);
      break;
    }
    const i = Array.from(((u = h.parentNode) == null ? void 0 : u.children) || []).filter((l) => l.tagName === h.tagName);
    if (i.length > 1) {
      const l = i.indexOf(h) + 1;
      r += `:nth-of-type(${l})`;
    }
    n.unshift(r), h = h.parentNode;
  }
  return n.join(" > ");
}
function dn(e) {
  var h;
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return "";
  if (e.id) return `//*[@id="${e.id}"]`;
  const o = [];
  let n = e;
  for (; n && n !== document.body; ) {
    const s = Array.from(((h = n.parentNode) == null ? void 0 : h.children) || []).filter((i) => i.tagName === n.tagName).indexOf(n) + 1;
    o.unshift(`${n.tagName.toLowerCase()}[${s}]`), n = n.parentNode;
  }
  return o.unshift(""), "/html/body/" + o.slice(1).join("/");
}
function pn(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return {};
  const o = {}, n = e.getAttribute("role") || mn(e);
  n && (o.role = n);
  const h = gn(e);
  h && (o.accessibleName = h);
  const u = e.getAttribute("aria-labelledby");
  return u && (o.labeledBy = u), Object.keys(o).length ? o : void 0;
}
function mn(e) {
  const o = e.tagName.toLowerCase(), n = e.getAttribute("type");
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
  }[o];
}
function gn(e) {
  var r, s;
  if (e.getAttribute("aria-label")) return e.getAttribute("aria-label").trim();
  const o = e.getAttribute("aria-labelledby");
  if (o) {
    const i = o.split(/\s+/).map((l) => {
      var _, x;
      return (x = (_ = document.getElementById(l)) == null ? void 0 : _.textContent) == null ? void 0 : x.trim();
    }).filter(Boolean);
    if (i.length) return i.join(" ");
  }
  const n = (r = e.labels) == null ? void 0 : r[0];
  if (n) return n.textContent.trim();
  if (e.tagName.toLowerCase() === "input" && e.placeholder) return e.placeholder.trim();
  const h = e.getAttribute("alt");
  if (h) return h.trim();
  const u = e.getAttribute("title");
  if (u) return u.trim();
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
  const o = e.getBoundingClientRect();
  return {
    tag: e.tagName.toLowerCase(),
    id: e.id || void 0,
    classes: e.className ? String(e.className).split(/\s+/).filter(Boolean) : void 0,
    selector: er(e),
    xpath: dn(e),
    rect: {
      x: o.left + window.scrollX,
      y: o.top + window.scrollY,
      width: o.width,
      height: o.height
    },
    aria: pn(e),
    testId: vn(e)
  };
}
function wn(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return [];
  const o = [];
  let n = e;
  for (; n && n !== document.body; )
    o.unshift(n), n = n.parentElement;
  return n === document.body && o.unshift(document.body), o.map(Oe).filter(Boolean);
}
function yn(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return [];
  const o = _n(e);
  if (o.length) return o;
  const n = xn(e);
  return n.length ? n : [];
}
function _n(e) {
  const o = [];
  let n = e;
  for (; n; ) {
    const h = bn(n);
    h && !o.find((u) => u.componentName === h.componentName && u.selector === h.selector) && o.unshift(h), n = n.parentElement;
  }
  return o;
}
function bn(e) {
  var r, s, i, l, _;
  const n = Object.keys(e || {}).find((x) => x.startsWith("__vue"));
  if (!n) return null;
  const h = e[n], u = ((r = h == null ? void 0 : h.type) == null ? void 0 : r.name) || ((s = h == null ? void 0 : h.type) == null ? void 0 : s.__name) || ((l = (i = h == null ? void 0 : h.parent) == null ? void 0 : i.type) == null ? void 0 : l.name);
  return u ? {
    componentName: u,
    selector: er(e),
    rect: (_ = Oe(e)) == null ? void 0 : _.rect
  } : null;
}
function xn(e) {
  const o = [], n = Object.keys(e || {}).find((u) => u.startsWith("__reactFiber$"));
  if (!n) return o;
  let h = e[n];
  for (; h; ) {
    const u = kn(h);
    u && !o.find((r) => r.componentName === u) && o.unshift({ componentName: u, selector: void 0, rect: void 0 }), h = h.return;
  }
  return o;
}
function kn(e) {
  var o;
  if (!e) return null;
  if (typeof e.type == "function") return e.type.displayName || e.type.name || null;
  if (typeof e.type == "string") return null;
  if (e.elementType) {
    if (typeof e.elementType == "function") return e.elementType.displayName || e.elementType.name || null;
    if (typeof e.elementType == "object" && ((o = e.elementType) != null && o.$$typeof)) return e.elementType.name || null;
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
  pagePath: o = "",
  pageName: n = "",
  storageKey: h = "page-reviews",
  imageUpload: u,
  enableZipExport: r = !0,
  enableComponentTree: s = !0,
  onActiveChange: i,
  onAdd: l,
  onUpdate: _,
  onDelete: x,
  onClear: y,
  onExport: b
}) {
  var se, Qt, te, oe, le, ce, ue, k;
  const f = ye(() => o || (typeof window < "u" ? window.location.pathname + window.location.search : "/"), [o]), {
    reviews: w,
    getPageReviews: c,
    addReview: m,
    updateReview: d,
    deleteReview: v,
    clearPageReviews: E,
    exportToJSON: O,
    exportToMarkdown: T,
    exportToZIP: L
  } = ur({ storageKey: h, defaultPagePath: () => f }), P = ye(() => c(f), [c, f, w]), [W, I] = Ct("element"), [Z, nt] = Ct(!1), [C, F] = Ct(!1), [a, U] = Ct(!1), [at, Y] = Ct(null), [ot, G] = Ct(""), [tt, N] = Ct(null), [j, et] = Ct(null), [J, q] = Ct(null), [gt, vt] = Ct(null), st = fe(!1), ut = fe({ x: 0, y: 0 }), [mt, wt] = Ct({ x: 0, y: 0 }), _t = fe(!1), St = fe({ x: 0, y: 0 }), [t, B] = Ct({
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
    aria: null,
    locators: null
  }), [z, g] = Ct([]), [p, R] = Ct(null), $ = t.title.trim() && t.suggestion.trim(), H = dt(() => {
    i == null || i(!1);
  }, [i]), A = dt(() => ({
    viewport: { width: window.innerWidth, height: window.innerHeight },
    scroll: { x: window.scrollX, y: window.scrollY },
    pagePath: f,
    pageUrl: window.location.href,
    pageName: n || f
  }), [f, n]), X = dt((S) => {
    var it;
    if (S.id) return "#" + S.id;
    if (S.className) {
      const ct = String(S.className).split(/\s+/).filter((ht) => ht && !ht.startsWith("el-")).slice(0, 2);
      if (ct.length) return S.tagName.toLowerCase() + "." + ct.join(".");
    }
    let D = [], V = S;
    for (; V && V !== document.body; ) {
      let ct = V.tagName.toLowerCase();
      if (V.id) {
        ct += "#" + V.id, D.unshift(ct);
        break;
      }
      const ft = Array.from(((it = V.parentNode) == null ? void 0 : it.children) || []).filter((kt) => kt.tagName === V.tagName);
      if (ft.length > 1) {
        const kt = ft.indexOf(V) + 1;
        ct += `:nth-of-type(${kt})`;
      }
      D.unshift(ct), V = V.parentNode;
    }
    return D.join(" > ");
  }, []), Q = dt((S) => {
    const D = document.elementFromPoint(S.clientX, S.clientY);
    return !D || D.closest(".review-overlay") ? null : D;
  }, []), K = ye(() => t.type === "element" ? [
    { value: Bt.ELEMENT, label: "选中元素" },
    { value: Bt.VIEWPORT, label: "当前视口" },
    { value: Bt.FULL_PAGE, label: "完整页面" }
  ] : [
    { value: Bt.BOX, label: "框选区域" },
    { value: Bt.VIEWPORT, label: "当前视口" },
    { value: Bt.FULL_PAGE, label: "完整页面" }
  ], [t.type]), rt = dt(async () => {
    const S = [];
    for (const D of z) {
      let V = null;
      if (D === Bt.ELEMENT && (tt != null && tt.el) ? V = await tr(tt.el) : D === Bt.BOX && t.viewportRect ? V = await cn(t.viewportRect) : D === Bt.VIEWPORT ? V = await on() : D === Bt.FULL_PAGE && (V = await ln()), V) {
        const it = sn(D);
        let ct = null;
        u && (ct = await hn(V, it, u)), S.push({
          type: D,
          filename: it,
          data: ct ? void 0 : V,
          url: ct || void 0
        });
      }
    }
    return S;
  }, [z, tt, t.viewportRect, u]), pt = dt((S) => {
    const D = {};
    return S.selector && (D.cssSelector = S.selector), S.xpath && (D.xpath = S.xpath), S.aria && Object.keys(S.aria).length && (D.aria = S.aria), S.testId && (D.testId = S.testId), Object.keys(D).length ? D : null;
  }, []), lt = dt((S, D = null) => {
    const V = A(), it = tt != null && tt.el ? Oe(tt.el) : null, ct = it ? pt(it) : null;
    B({
      type: S,
      title: "",
      severity: "medium",
      suggestion: "",
      selector: (tt == null ? void 0 : tt.selector) || "",
      elementText: (tt == null ? void 0 : tt.text) || "",
      elementRect: (tt == null ? void 0 : tt.rect) || null,
      viewportRect: D,
      viewport: V.viewport,
      scroll: V.scroll,
      pagePath: V.pagePath,
      pageUrl: V.pageUrl,
      pageName: V.pageName,
      componentTree: J,
      aria: (it == null ? void 0 : it.aria) || null,
      locators: ct
    }), g([]), nt(!0);
  }, [A, tt, J, pt]), Et = dt(() => {
    N(null), vt(null), et(null), q(null), g([]), B({
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
      aria: null,
      locators: null
    });
  }, []), Dt = dt(async () => {
    if (!$) return;
    const S = await rt(), D = m({
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
      screenshots: S,
      componentTree: t.componentTree,
      aria: t.aria,
      locators: t.locators
    });
    nt(!1), l == null || l(D);
  }, [$, rt, t, m, l]), Rt = dt((S) => {
    d(S, { status: "resolved" }), _ == null || _({ id: S, status: "resolved" });
  }, [d, _]), Lt = dt((S) => {
    R({
      title: "删除确认",
      message: "确定删除这条评审意见吗？",
      onConfirm: () => {
        v(S), x == null || x({ id: S }), R(null);
      }
    });
  }, [v, x]), yt = dt(() => {
    P.length !== 0 && R({
      title: "清空确认",
      message: "确定清空当前页面的所有评审意见吗？",
      onConfirm: () => {
        E(f), y == null || y({ pagePath: f }), R(null);
      }
    });
  }, [P.length, E, f, y]), Ut = dt(() => {
    O(), b == null || b({ format: "json" });
  }, [O, b]), Mt = dt(() => {
    T(), b == null || b({ format: "markdown" });
  }, [T, b]), Tt = dt(async () => {
    await L(), b == null || b({ format: "zip" });
  }, [L, b]), Ht = dt((S) => {
    if (!S.rect) {
      et(null);
      return;
    }
    et(S.rect);
  }, []), $t = dt((S) => {
    var it;
    if (!S.selector) return;
    const D = document.querySelector(S.selector);
    if (!D) return;
    const V = D.getBoundingClientRect();
    N({
      el: D,
      selector: S.selector,
      tag: D.tagName.toLowerCase(),
      text: ((it = D.innerText) == null ? void 0 : it.slice(0, 40)) || "",
      rect: {
        x: V.left + window.scrollX,
        y: V.top + window.scrollY,
        width: V.width,
        height: V.height
      }
    }), q(Me(D)), U(!1), lt("element");
  }, [lt]), Wt = dt((S) => {
    if (_t.current || W !== "element" || Z || st.current) return;
    const D = Q(S);
    if (!D) {
      Y(null);
      return;
    }
    const V = D.getBoundingClientRect();
    Y({
      x: V.left + window.scrollX,
      y: V.top + window.scrollY,
      width: V.width,
      height: V.height
    }), G(D.tagName.toLowerCase());
  }, [W, Z, Q]), zt = dt(() => {
    Y(null);
  }, []), Ft = dt((S) => {
    var it;
    if (W !== "element" || Z || st.current) return;
    const D = Q(S);
    if (!D) return;
    S.preventDefault(), S.stopPropagation();
    const V = D.getBoundingClientRect();
    N({
      el: D,
      selector: X(D),
      tag: D.tagName.toLowerCase(),
      text: ((it = D.innerText) == null ? void 0 : it.slice(0, 40)) || "",
      rect: {
        x: V.left + window.scrollX,
        y: V.top + window.scrollY,
        width: V.width,
        height: V.height
      }
    }), q(Me(D)), lt("element");
  }, [W, Z, Q, X, lt]), jt = dt((S) => {
    _t.current || W !== "viewport" || Z || (st.current = !0, ut.current = { x: S.clientX + window.scrollX, y: S.clientY + window.scrollY }, vt({ x: ut.current.x, y: ut.current.y, width: 0, height: 0 }));
  }, [W, Z]), Pt = dt((S) => {
    if (_t.current || !st.current) return;
    const D = S.clientX + window.scrollX, V = S.clientY + window.scrollY;
    vt({
      x: Math.min(ut.current.x, D),
      y: Math.min(ut.current.y, V),
      width: Math.abs(D - ut.current.x),
      height: Math.abs(V - ut.current.y)
    });
  }, []), qt = dt((S) => {
    if (_t.current) {
      _t.current = !1;
      return;
    }
    st.current && (st.current = !1, vt((D) => (D && D.width > 10 && D.height > 10 && lt("viewport", { ...D }), null)));
  }, [lt]), ne = dt((S) => {
    var V, it;
    ((V = S.target.classList) != null && V.contains("toolbar-title") || (it = S.target.classList) != null && it.contains("review-toolbar")) && (_t.current = !0, St.current = {
      x: S.clientX - mt.x,
      y: S.clientY - mt.y
    });
  }, [mt]), Jt = dt((S) => {
    _t.current && wt({
      x: S.clientX - St.current.x,
      y: S.clientY - St.current.y
    });
  }, []), Yt = dt((S) => {
    S.key === "Escape" && (Z ? nt(!1) : H());
  }, [Z, H]);
  if (Ae(() => {
    if (e)
      return document.addEventListener("mousemove", Wt), document.addEventListener("mouseout", zt), document.addEventListener("click", Ft, !0), document.addEventListener("mousedown", jt), document.addEventListener("mousemove", Pt), document.addEventListener("mousemove", Jt), document.addEventListener("mouseup", qt), document.addEventListener("keydown", Yt), () => {
        document.removeEventListener("mousemove", Wt), document.removeEventListener("mouseout", zt), document.removeEventListener("click", Ft, !0), document.removeEventListener("mousedown", jt), document.removeEventListener("mousemove", Pt), document.removeEventListener("mousemove", Jt), document.removeEventListener("mouseup", qt), document.removeEventListener("keydown", Yt);
      };
  }, [e, Wt, zt, Ft, jt, Pt, Jt, qt, Yt]), Ae(() => {
    e ? I("element") : (Et(), Y(null), F(!1), U(!1));
  }, [e, Et]), !e) return null;
  const ie = {
    transform: `translate(calc(-50% + ${mt.x}px), ${mt.y}px)`
  }, ae = gt || (t.type === "viewport" && Z ? t.viewportRect : null);
  return ir(
    /* @__PURE__ */ M.jsxs("div", { className: "review-overlay", onClick: (S) => S.stopPropagation(), children: [
      /* @__PURE__ */ M.jsxs(
        "div",
        {
          className: `review-toolbar ${_t.current ? "is-dragging" : ""}`,
          style: ie,
          onMouseDown: ne,
          children: [
            /* @__PURE__ */ M.jsxs("div", { className: "toolbar-left", children: [
              /* @__PURE__ */ M.jsx("span", { className: "toolbar-title", title: "按住此处可拖动", children: "页面评审模式" }),
              /* @__PURE__ */ M.jsxs("div", { className: "radio-group", children: [
                /* @__PURE__ */ M.jsx("button", { className: W === "element" ? "active" : "", onClick: () => I("element"), children: "选择元素" }),
                /* @__PURE__ */ M.jsx("button", { className: W === "viewport" ? "active" : "", onClick: () => I("viewport"), children: "框定视图" })
              ] })
            ] }),
            /* @__PURE__ */ M.jsxs("div", { className: "toolbar-right", children: [
              s && /* @__PURE__ */ M.jsx("button", { onClick: () => U(!0), children: "组件树" }),
              /* @__PURE__ */ M.jsxs("button", { className: "badge-btn", onClick: () => F(!0), children: [
                "评审列表 ",
                /* @__PURE__ */ M.jsx("span", { className: "badge", children: P.length })
              ] }),
              /* @__PURE__ */ M.jsxs("div", { className: "dropdown", children: [
                /* @__PURE__ */ M.jsx("button", { className: "primary", onClick: Mt, children: "导出" }),
                /* @__PURE__ */ M.jsxs("div", { className: "dropdown-menu", children: [
                  /* @__PURE__ */ M.jsx("div", { onClick: Mt, children: "导出为 Markdown" }),
                  /* @__PURE__ */ M.jsx("div", { onClick: Ut, children: "导出为 JSON" }),
                  r && /* @__PURE__ */ M.jsx("div", { onClick: Tt, children: "导出为 ZIP" })
                ] })
              ] }),
              /* @__PURE__ */ M.jsx("button", { className: "danger", onClick: H, children: "退出评审" })
            ] })
          ]
        }
      ),
      at && W === "element" && !Z && /* @__PURE__ */ M.jsx("div", { className: "highlight-box hover-box", style: ke(at), children: /* @__PURE__ */ M.jsx("span", { className: "highlight-label", children: ot }) }),
      tt && W === "element" && /* @__PURE__ */ M.jsx("div", { className: "highlight-box selected-box", style: ke(tt.rect), children: /* @__PURE__ */ M.jsxs("span", { className: "highlight-label", children: [
        "已选：",
        tt.tag
      ] }) }),
      j && /* @__PURE__ */ M.jsx("div", { className: "highlight-box tree-hover-box", style: ke(j) }),
      ae && /* @__PURE__ */ M.jsx("div", { className: "drag-rect", style: En(ae) }),
      Z && /* @__PURE__ */ M.jsx("div", { className: "modal-backdrop", onClick: () => nt(!1), children: /* @__PURE__ */ M.jsxs("div", { className: "modal", onClick: (S) => S.stopPropagation(), children: [
        /* @__PURE__ */ M.jsx("div", { className: "modal-header", children: "添加评审意见" }),
        /* @__PURE__ */ M.jsxs("div", { className: "modal-body", children: [
          /* @__PURE__ */ M.jsxs("div", { className: "form-row", children: [
            /* @__PURE__ */ M.jsx("label", { children: "评审位置" }),
            /* @__PURE__ */ M.jsxs("div", { className: "review-target-info", children: [
              /* @__PURE__ */ M.jsx("span", { className: "tag", children: t.type === "element" ? "元素" : "视图范围" }),
              /* @__PURE__ */ M.jsx("span", { className: "target-desc", children: t.type === "element" ? t.elementText || t.selector : `框选区域 x=${(se = t.viewportRect) == null ? void 0 : se.x}, y=${(Qt = t.viewportRect) == null ? void 0 : Qt.y}, w=${(te = t.viewportRect) == null ? void 0 : te.width}, h=${(oe = t.viewportRect) == null ? void 0 : oe.height}` })
            ] })
          ] }),
          /* @__PURE__ */ M.jsxs("div", { className: "form-row", children: [
            /* @__PURE__ */ M.jsx("label", { children: "窗口尺寸" }),
            /* @__PURE__ */ M.jsxs("span", { className: "text-muted", children: [
              (le = t.viewport) == null ? void 0 : le.width,
              " × ",
              (ce = t.viewport) == null ? void 0 : ce.height
            ] })
          ] }),
          /* @__PURE__ */ M.jsxs("div", { className: "form-row", children: [
            /* @__PURE__ */ M.jsx("label", { children: "滚动位置" }),
            /* @__PURE__ */ M.jsxs("span", { className: "text-muted", children: [
              "x=",
              (ue = t.scroll) == null ? void 0 : ue.x,
              ", y=",
              (k = t.scroll) == null ? void 0 : k.y
            ] })
          ] }),
          /* @__PURE__ */ M.jsxs("div", { className: "form-row", children: [
            /* @__PURE__ */ M.jsx("label", { children: "截图" }),
            /* @__PURE__ */ M.jsx("div", { className: "checkbox-group", children: K.map((S) => /* @__PURE__ */ M.jsxs("label", { className: "checkbox-label", children: [
              /* @__PURE__ */ M.jsx(
                "input",
                {
                  type: "checkbox",
                  value: S.value,
                  checked: z.includes(S.value),
                  onChange: (D) => {
                    const V = D.target.value;
                    g(
                      (it) => it.includes(V) ? it.filter((ct) => ct !== V) : [...it, V]
                    );
                  }
                }
              ),
              S.label
            ] }, S.value)) })
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
                onChange: (S) => B({ ...t, title: S.target.value }),
                placeholder: "例如：按钮样式不统一"
              }
            )
          ] }),
          /* @__PURE__ */ M.jsxs("div", { className: "form-row", children: [
            /* @__PURE__ */ M.jsxs("label", { children: [
              "严重等级 ",
              /* @__PURE__ */ M.jsx("span", { className: "required", children: "*" })
            ] }),
            /* @__PURE__ */ M.jsx("div", { className: "radio-group", children: ["low", "medium", "high", "critical"].map((S) => /* @__PURE__ */ M.jsxs("label", { className: "radio-label", children: [
              /* @__PURE__ */ M.jsx(
                "input",
                {
                  type: "radio",
                  name: "severity",
                  value: S,
                  checked: t.severity === S,
                  onChange: () => B({ ...t, severity: S })
                }
              ),
              $e(S)
            ] }, S)) })
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
                onChange: (S) => B({ ...t, suggestion: S.target.value }),
                placeholder: "描述问题现象、影响和改进建议"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ M.jsxs("div", { className: "modal-footer", children: [
          /* @__PURE__ */ M.jsx("button", { onClick: () => nt(!1), children: "取消" }),
          /* @__PURE__ */ M.jsx("button", { className: "primary", disabled: !$, onClick: Dt, children: "保存评审" })
        ] })
      ] }) }),
      a && /* @__PURE__ */ M.jsxs(M.Fragment, { children: [
        /* @__PURE__ */ M.jsx("div", { className: "drawer-backdrop", onClick: () => U(!1) }),
        /* @__PURE__ */ M.jsxs("div", { className: "drawer", children: [
          /* @__PURE__ */ M.jsxs("div", { className: "drawer-header", children: [
            /* @__PURE__ */ M.jsx("span", { children: "组件树检查器" }),
            /* @__PURE__ */ M.jsx("button", { className: "close", onClick: () => U(!1), children: "×" })
          ] }),
          /* @__PURE__ */ M.jsx("div", { className: "drawer-body", children: J ? /* @__PURE__ */ M.jsxs("div", { className: "tree-panel", children: [
            J.framework && J.framework.length > 0 && /* @__PURE__ */ M.jsxs("div", { className: "tree-section", children: [
              /* @__PURE__ */ M.jsx("h4", { children: "框架组件树" }),
              /* @__PURE__ */ M.jsx("div", { className: "tree-list", children: J.framework.map((S, D) => /* @__PURE__ */ M.jsx(
                "div",
                {
                  className: "tree-node",
                  onMouseEnter: () => Ht(S),
                  onMouseLeave: () => et(null),
                  onClick: () => $t(S),
                  children: /* @__PURE__ */ M.jsx("span", { className: "node-name", children: S.componentName })
                },
                "fw-" + D
              )) })
            ] }),
            /* @__PURE__ */ M.jsxs("div", { className: "tree-section", children: [
              /* @__PURE__ */ M.jsx("h4", { children: "DOM 树" }),
              /* @__PURE__ */ M.jsx("div", { className: "tree-list", children: J.dom.map((S, D) => {
                var V;
                return /* @__PURE__ */ M.jsxs(
                  "div",
                  {
                    className: "tree-node",
                    style: { paddingLeft: D * 12 },
                    onMouseEnter: () => Ht(S),
                    onMouseLeave: () => et(null),
                    onClick: () => $t(S),
                    children: [
                      /* @__PURE__ */ M.jsx("span", { className: "node-tag", children: S.tag }),
                      S.id && /* @__PURE__ */ M.jsxs("span", { className: "node-id", children: [
                        "#",
                        S.id
                      ] }),
                      ((V = S.aria) == null ? void 0 : V.role) && /* @__PURE__ */ M.jsxs("span", { className: "node-aria", children: [
                        "role=",
                        S.aria.role
                      ] }),
                      S.testId && /* @__PURE__ */ M.jsxs("span", { className: "node-testid", children: [
                        "testid=",
                        S.testId
                      ] })
                    ]
                  },
                  "dom-" + D
                );
              }) })
            ] })
          ] }) : /* @__PURE__ */ M.jsx("div", { className: "empty", children: "先选择一个元素以查看组件树" }) })
        ] })
      ] }),
      C && /* @__PURE__ */ M.jsxs(M.Fragment, { children: [
        /* @__PURE__ */ M.jsx("div", { className: "drawer-backdrop", onClick: () => F(!1) }),
        /* @__PURE__ */ M.jsxs("div", { className: "drawer", children: [
          /* @__PURE__ */ M.jsxs("div", { className: "drawer-header", children: [
            /* @__PURE__ */ M.jsx("span", { children: "当前页面评审意见" }),
            /* @__PURE__ */ M.jsx("button", { className: "close", onClick: () => F(!1), children: "×" })
          ] }),
          /* @__PURE__ */ M.jsxs("div", { className: "drawer-body", children: [
            /* @__PURE__ */ M.jsxs("div", { className: "review-list-actions", children: [
              /* @__PURE__ */ M.jsx("button", { className: "primary", onClick: Mt, children: "导出 Markdown" }),
              /* @__PURE__ */ M.jsx("button", { onClick: Ut, children: "导出 JSON" }),
              r && /* @__PURE__ */ M.jsx("button", { onClick: Tt, children: "导出 ZIP" }),
              /* @__PURE__ */ M.jsx("button", { className: "danger-text", onClick: yt, children: "清空本页" })
            ] }),
            P.length === 0 ? /* @__PURE__ */ M.jsx("div", { className: "empty", children: "暂无评审意见" }) : /* @__PURE__ */ M.jsx("div", { className: "review-list", children: P.map((S) => {
              var D, V;
              return /* @__PURE__ */ M.jsxs("div", { className: "review-item", children: [
                /* @__PURE__ */ M.jsxs("div", { className: "review-item-header", children: [
                  /* @__PURE__ */ M.jsx("span", { className: "review-item-title", children: S.title }),
                  /* @__PURE__ */ M.jsxs("div", { className: "review-item-tags", children: [
                    /* @__PURE__ */ M.jsx("span", { className: `tag ${Sn(S.severity)}`, children: $e(S.severity) }),
                    /* @__PURE__ */ M.jsx("span", { className: "tag info", children: S.type === "element" ? "元素" : "视图" }),
                    ((V = (D = S.componentTree) == null ? void 0 : D.dom) == null ? void 0 : V.length) > 0 && /* @__PURE__ */ M.jsx("span", { className: "tag success", children: "树" })
                  ] })
                ] }),
                /* @__PURE__ */ M.jsx("p", { className: "review-item-target", children: S.type === "element" ? S.elementText || S.selector : `框选 x=${S.viewportRect.x}, y=${S.viewportRect.y}` }),
                /* @__PURE__ */ M.jsx("p", { className: "review-item-suggestion", children: S.suggestion }),
                /* @__PURE__ */ M.jsxs("div", { className: "review-item-meta", children: [
                  /* @__PURE__ */ M.jsx("span", { className: "text-muted", children: new Date(S.createdAt).toLocaleString() }),
                  /* @__PURE__ */ M.jsxs("div", { className: "review-item-actions", children: [
                    S.status !== "resolved" && /* @__PURE__ */ M.jsx("button", { className: "link primary", onClick: () => Rt(S.id), children: "标记解决" }),
                    /* @__PURE__ */ M.jsx("button", { className: "link danger", onClick: () => Lt(S.id), children: "删除" })
                  ] })
                ] })
              ] }, S.id);
            }) })
          ] })
        ] })
      ] }),
      p && /* @__PURE__ */ M.jsx("div", { className: "modal-backdrop", onClick: () => R(null), children: /* @__PURE__ */ M.jsxs("div", { className: "modal confirm-modal", onClick: (S) => S.stopPropagation(), children: [
        /* @__PURE__ */ M.jsx("div", { className: "modal-header", children: p.title }),
        /* @__PURE__ */ M.jsx("div", { className: "modal-body", children: p.message }),
        /* @__PURE__ */ M.jsxs("div", { className: "modal-footer", children: [
          /* @__PURE__ */ M.jsx("button", { onClick: () => R(null), children: "取消" }),
          /* @__PURE__ */ M.jsx("button", { className: "danger", onClick: p.onConfirm, children: "确定" })
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
