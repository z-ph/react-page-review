import dr, { useState as zt, useCallback as ot, useMemo as Qe, useRef as Lt, useEffect as tr } from "react";
import { createPortal as jr } from "react-dom";
var be = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Nr(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var We = { exports: {} }, ve = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var er;
function Pr() {
  if (er) return ve;
  er = 1;
  var t = dr, o = Symbol.for("react.element"), r = Symbol.for("react.fragment"), f = Object.prototype.hasOwnProperty, c = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, n = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(i, l, _) {
    var k, b = {}, w = null, h = null;
    _ !== void 0 && (w = "" + _), l.key !== void 0 && (w = "" + l.key), l.ref !== void 0 && (h = l.ref);
    for (k in l) f.call(l, k) && !n.hasOwnProperty(k) && (b[k] = l[k]);
    if (i && i.defaultProps) for (k in l = i.defaultProps, l) b[k] === void 0 && (b[k] = l[k]);
    return { $$typeof: o, type: i, key: w, ref: h, props: b, _owner: c.current };
  }
  return ve.Fragment = r, ve.jsx = s, ve.jsxs = s, ve;
}
var we = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rr;
function Ir() {
  return rr || (rr = 1, process.env.NODE_ENV !== "production" && function() {
    var t = dr, o = Symbol.for("react.element"), r = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), y = Symbol.iterator, u = "@@iterator";
    function m(x) {
      if (x === null || typeof x != "object")
        return null;
      var G = y && x[y] || x[u];
      return typeof G == "function" ? G : null;
    }
    var d = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(x) {
      {
        for (var G = arguments.length, tt = new Array(G > 1 ? G - 1 : 0), ct = 1; ct < G; ct++)
          tt[ct - 1] = arguments[ct];
        S("error", x, tt);
      }
    }
    function S(x, G, tt) {
      {
        var ct = d.ReactDebugCurrentFrame, vt = ct.getStackAddendum();
        vt !== "" && (G += "%s", tt = tt.concat([vt]));
        var bt = tt.map(function(gt) {
          return String(gt);
        });
        bt.unshift("Warning: " + G), Function.prototype.apply.call(console[x], console, bt);
      }
    }
    var A = !1, T = !1, L = !1, I = !1, Z = !1, P;
    P = Symbol.for("react.module.reference");
    function H(x) {
      return !!(typeof x == "string" || typeof x == "function" || x === f || x === n || Z || x === c || x === _ || x === k || I || x === h || A || T || L || typeof x == "object" && x !== null && (x.$$typeof === w || x.$$typeof === b || x.$$typeof === s || x.$$typeof === i || x.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      x.$$typeof === P || x.getModuleId !== void 0));
    }
    function it(x, G, tt) {
      var ct = x.displayName;
      if (ct)
        return ct;
      var vt = G.displayName || G.name || "";
      return vt !== "" ? tt + "(" + vt + ")" : tt;
    }
    function E(x) {
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
        case k:
          return "SuspenseList";
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case i:
            var G = x;
            return E(G) + ".Consumer";
          case s:
            var tt = x;
            return E(tt._context) + ".Provider";
          case l:
            return it(x, x.render, "ForwardRef");
          case b:
            var ct = x.displayName || null;
            return ct !== null ? ct : D(x.type) || "Memo";
          case w: {
            var vt = x, bt = vt._payload, gt = vt._init;
            try {
              return D(gt(bt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var a = Object.assign, U = 0, lt, V, ht, X, nt, j, z;
    function rt() {
    }
    rt.__reactDisabledLog = !0;
    function et() {
      {
        if (U === 0) {
          lt = console.log, V = console.info, ht = console.warn, X = console.error, nt = console.group, j = console.groupCollapsed, z = console.groupEnd;
          var x = {
            configurable: !0,
            enumerable: !0,
            value: rt,
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
        U++;
      }
    }
    function J() {
      {
        if (U--, U === 0) {
          var x = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: a({}, x, {
              value: lt
            }),
            info: a({}, x, {
              value: V
            }),
            warn: a({}, x, {
              value: ht
            }),
            error: a({}, x, {
              value: X
            }),
            group: a({}, x, {
              value: nt
            }),
            groupCollapsed: a({}, x, {
              value: j
            }),
            groupEnd: a({}, x, {
              value: z
            })
          });
        }
        U < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var xt = d.ReactCurrentDispatcher, Ct;
    function ut(x, G, tt) {
      {
        if (Ct === void 0)
          try {
            throw Error();
          } catch (vt) {
            var ct = vt.stack.trim().match(/\n( *(at )?)/);
            Ct = ct && ct[1] || "";
          }
        return `
` + Ct + x;
      }
    }
    var pt = !1, St;
    {
      var _t = typeof WeakMap == "function" ? WeakMap : Map;
      St = new _t();
    }
    function At(x, G) {
      if (!x || pt)
        return "";
      {
        var tt = St.get(x);
        if (tt !== void 0)
          return tt;
      }
      var ct;
      pt = !0;
      var vt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var bt;
      bt = xt.current, xt.current = null, et();
      try {
        if (G) {
          var gt = function() {
            throw Error();
          };
          if (Object.defineProperty(gt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(gt, []);
            } catch (Pt) {
              ct = Pt;
            }
            Reflect.construct(x, [], gt);
          } else {
            try {
              gt.call();
            } catch (Pt) {
              ct = Pt;
            }
            x.call(gt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Pt) {
            ct = Pt;
          }
          x();
        }
      } catch (Pt) {
        if (Pt && ct && typeof Pt.stack == "string") {
          for (var dt = Pt.stack.split(`
`), jt = ct.stack.split(`
`), Rt = dt.length - 1, Tt = jt.length - 1; Rt >= 1 && Tt >= 0 && dt[Rt] !== jt[Tt]; )
            Tt--;
          for (; Rt >= 1 && Tt >= 0; Rt--, Tt--)
            if (dt[Rt] !== jt[Tt]) {
              if (Rt !== 1 || Tt !== 1)
                do
                  if (Rt--, Tt--, Tt < 0 || dt[Rt] !== jt[Tt]) {
                    var Dt = `
` + dt[Rt].replace(" at new ", " at ");
                    return x.displayName && Dt.includes("<anonymous>") && (Dt = Dt.replace("<anonymous>", x.displayName)), typeof x == "function" && St.set(x, Dt), Dt;
                  }
                while (Rt >= 1 && Tt >= 0);
              break;
            }
        }
      } finally {
        pt = !1, xt.current = bt, J(), Error.prepareStackTrace = vt;
      }
      var te = x ? x.displayName || x.name : "", Vt = te ? ut(te) : "";
      return typeof x == "function" && St.set(x, Vt), Vt;
    }
    function kt(x, G, tt) {
      return At(x, !1);
    }
    function e(x) {
      var G = x.prototype;
      return !!(G && G.isReactComponent);
    }
    function B(x, G, tt) {
      if (x == null)
        return "";
      if (typeof x == "function")
        return At(x, e(x));
      if (typeof x == "string")
        return ut(x);
      switch (x) {
        case _:
          return ut("Suspense");
        case k:
          return ut("SuspenseList");
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case l:
            return kt(x.render);
          case b:
            return B(x.type, G, tt);
          case w: {
            var ct = x, vt = ct._payload, bt = ct._init;
            try {
              return B(bt(vt), G, tt);
            } catch {
            }
          }
        }
      return "";
    }
    var N = Object.prototype.hasOwnProperty, g = {}, p = d.ReactDebugCurrentFrame;
    function C(x) {
      if (x) {
        var G = x._owner, tt = B(x.type, x._source, G ? G.type : null);
        p.setExtraStackFrame(tt);
      } else
        p.setExtraStackFrame(null);
    }
    function W(x, G, tt, ct, vt) {
      {
        var bt = Function.call.bind(N);
        for (var gt in x)
          if (bt(x, gt)) {
            var dt = void 0;
            try {
              if (typeof x[gt] != "function") {
                var jt = Error((ct || "React class") + ": " + tt + " type `" + gt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof x[gt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw jt.name = "Invariant Violation", jt;
              }
              dt = x[gt](G, gt, ct, tt, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Rt) {
              dt = Rt;
            }
            dt && !(dt instanceof Error) && (C(vt), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ct || "React class", tt, gt, typeof dt), C(null)), dt instanceof Error && !(dt.message in g) && (g[dt.message] = !0, C(vt), v("Failed %s type: %s", tt, dt.message), C(null));
          }
      }
    }
    var $ = Array.isArray;
    function O(x) {
      return $(x);
    }
    function K(x) {
      {
        var G = typeof Symbol == "function" && Symbol.toStringTag, tt = G && x[Symbol.toStringTag] || x.constructor.name || "Object";
        return tt;
      }
    }
    function Q(x) {
      try {
        return q(x), !1;
      } catch {
        return !0;
      }
    }
    function q(x) {
      return "" + x;
    }
    function at(x) {
      if (Q(x))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", K(x)), q(x);
    }
    var mt = d.ReactCurrentOwner, ft = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ot, Mt;
    function It(x) {
      if (N.call(x, "ref")) {
        var G = Object.getOwnPropertyDescriptor(x, "ref").get;
        if (G && G.isReactWarning)
          return !1;
      }
      return x.ref !== void 0;
    }
    function Bt(x) {
      if (N.call(x, "key")) {
        var G = Object.getOwnPropertyDescriptor(x, "key").get;
        if (G && G.isReactWarning)
          return !1;
      }
      return x.key !== void 0;
    }
    function Et(x, G) {
      typeof x.ref == "string" && mt.current;
    }
    function Xt(x, G) {
      {
        var tt = function() {
          Ot || (Ot = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", G));
        };
        tt.isReactWarning = !0, Object.defineProperty(x, "key", {
          get: tt,
          configurable: !0
        });
      }
    }
    function Kt(x, G) {
      {
        var tt = function() {
          Mt || (Mt = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", G));
        };
        tt.isReactWarning = !0, Object.defineProperty(x, "ref", {
          get: tt,
          configurable: !0
        });
      }
    }
    var Nt = function(x, G, tt, ct, vt, bt, gt) {
      var dt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
        // Built-in properties that belong on the element
        type: x,
        key: G,
        ref: tt,
        props: gt,
        // Record the component responsible for creating this element.
        _owner: bt
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
        value: ct
      }), Object.defineProperty(dt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: vt
      }), Object.freeze && (Object.freeze(dt.props), Object.freeze(dt)), dt;
    };
    function wt(x, G, tt, ct, vt) {
      {
        var bt, gt = {}, dt = null, jt = null;
        tt !== void 0 && (at(tt), dt = "" + tt), Bt(G) && (at(G.key), dt = "" + G.key), It(G) && (jt = G.ref, Et(G, vt));
        for (bt in G)
          N.call(G, bt) && !ft.hasOwnProperty(bt) && (gt[bt] = G[bt]);
        if (x && x.defaultProps) {
          var Rt = x.defaultProps;
          for (bt in Rt)
            gt[bt] === void 0 && (gt[bt] = Rt[bt]);
        }
        if (dt || jt) {
          var Tt = typeof x == "function" ? x.displayName || x.name || "Unknown" : x;
          dt && Xt(gt, Tt), jt && Kt(gt, Tt);
        }
        return Nt(x, dt, jt, vt, ct, mt.current, gt);
      }
    }
    var Ht = d.ReactCurrentOwner, ee = d.ReactDebugCurrentFrame;
    function $t(x) {
      if (x) {
        var G = x._owner, tt = B(x.type, x._source, G ? G.type : null);
        ee.setExtraStackFrame(tt);
      } else
        ee.setExtraStackFrame(null);
    }
    var qt;
    qt = !1;
    function Wt(x) {
      return typeof x == "object" && x !== null && x.$$typeof === o;
    }
    function Jt() {
      {
        if (Ht.current) {
          var x = D(Ht.current.type);
          if (x)
            return `

Check the render method of \`` + x + "`.";
        }
        return "";
      }
    }
    function ae(x) {
      return "";
    }
    var Yt = {};
    function se(x) {
      {
        var G = Jt();
        if (!G) {
          var tt = typeof x == "string" ? x : x.displayName || x.name;
          tt && (G = `

Check the top-level render call using <` + tt + ">.");
        }
        return G;
      }
    }
    function ue(x, G) {
      {
        if (!x._store || x._store.validated || x.key != null)
          return;
        x._store.validated = !0;
        var tt = se(G);
        if (Yt[tt])
          return;
        Yt[tt] = !0;
        var ct = "";
        x && x._owner && x._owner !== Ht.current && (ct = " It was passed a child from " + D(x._owner.type) + "."), $t(x), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', tt, ct), $t(null);
      }
    }
    function he(x, G) {
      {
        if (typeof x != "object")
          return;
        if (O(x))
          for (var tt = 0; tt < x.length; tt++) {
            var ct = x[tt];
            Wt(ct) && ue(ct, G);
          }
        else if (Wt(x))
          x._store && (x._store.validated = !0);
        else if (x) {
          var vt = m(x);
          if (typeof vt == "function" && vt !== x.entries)
            for (var bt = vt.call(x), gt; !(gt = bt.next()).done; )
              Wt(gt.value) && ue(gt.value, G);
        }
      }
    }
    function ie(x) {
      {
        var G = x.type;
        if (G == null || typeof G == "string")
          return;
        var tt;
        if (typeof G == "function")
          tt = G.propTypes;
        else if (typeof G == "object" && (G.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        G.$$typeof === b))
          tt = G.propTypes;
        else
          return;
        if (tt) {
          var ct = D(G);
          W(tt, x.props, "prop", ct, x);
        } else if (G.PropTypes !== void 0 && !qt) {
          qt = !0;
          var vt = D(G);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", vt || "Unknown");
        }
        typeof G.getDefaultProps == "function" && !G.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Te(x) {
      {
        for (var G = Object.keys(x.props), tt = 0; tt < G.length; tt++) {
          var ct = G[tt];
          if (ct !== "children" && ct !== "key") {
            $t(x), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ct), $t(null);
            break;
          }
        }
        x.ref !== null && ($t(x), v("Invalid attribute `ref` supplied to `React.Fragment`."), $t(null));
      }
    }
    var fe = {};
    function ye(x, G, tt, ct, vt, bt) {
      {
        var gt = H(x);
        if (!gt) {
          var dt = "";
          (x === void 0 || typeof x == "object" && x !== null && Object.keys(x).length === 0) && (dt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var jt = ae();
          jt ? dt += jt : dt += Jt();
          var Rt;
          x === null ? Rt = "null" : O(x) ? Rt = "array" : x !== void 0 && x.$$typeof === o ? (Rt = "<" + (D(x.type) || "Unknown") + " />", dt = " Did you accidentally export a JSX literal instead of a component?") : Rt = typeof x, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Rt, dt);
        }
        var Tt = wt(x, G, tt, vt, bt);
        if (Tt == null)
          return Tt;
        if (gt) {
          var Dt = G.children;
          if (Dt !== void 0)
            if (ct)
              if (O(Dt)) {
                for (var te = 0; te < Dt.length; te++)
                  he(Dt[te], x);
                Object.freeze && Object.freeze(Dt);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              he(Dt, x);
        }
        if (N.call(G, "key")) {
          var Vt = D(x), Pt = Object.keys(G).filter(function(pe) {
            return pe !== "key";
          }), de = Pt.length > 0 ? "{key: someKey, " + Pt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!fe[Vt + de]) {
            var je = Pt.length > 0 ? "{" + Pt.join(": ..., ") + ": ...}" : "{}";
            v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, de, Vt, je, Vt), fe[Vt + de] = !0;
          }
        }
        return x === f ? Te(Tt) : ie(Tt), Tt;
      }
    }
    function Ae(x, G, tt) {
      return ye(x, G, tt, !0);
    }
    function Oe(x, G, tt) {
      return ye(x, G, tt, !1);
    }
    var ze = Oe, _e = Ae;
    we.Fragment = f, we.jsx = ze, we.jsxs = _e;
  }()), we;
}
process.env.NODE_ENV === "production" ? We.exports = Pr() : We.exports = Ir();
var F = We.exports;
function xe(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var pr = { exports: {} };
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
      function s(_, k) {
        if (!c[_]) {
          if (!f[_]) {
            var b = typeof xe == "function" && xe;
            if (!k && b) return b(_, !0);
            if (i) return i(_, !0);
            var w = new Error("Cannot find module '" + _ + "'");
            throw w.code = "MODULE_NOT_FOUND", w;
          }
          var h = c[_] = { exports: {} };
          f[_][0].call(h.exports, function(y) {
            var u = f[_][1][y];
            return s(u || y);
          }, h, h.exports, r, f, c, n);
        }
        return c[_].exports;
      }
      for (var i = typeof xe == "function" && xe, l = 0; l < n.length; l++) s(n[l]);
      return s;
    }({ 1: [function(r, f, c) {
      var n = r("./utils"), s = r("./support"), i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      c.encode = function(l) {
        for (var _, k, b, w, h, y, u, m = [], d = 0, v = l.length, S = v, A = n.getTypeOf(l) !== "string"; d < l.length; ) S = v - d, b = A ? (_ = l[d++], k = d < v ? l[d++] : 0, d < v ? l[d++] : 0) : (_ = l.charCodeAt(d++), k = d < v ? l.charCodeAt(d++) : 0, d < v ? l.charCodeAt(d++) : 0), w = _ >> 2, h = (3 & _) << 4 | k >> 4, y = 1 < S ? (15 & k) << 2 | b >> 6 : 64, u = 2 < S ? 63 & b : 64, m.push(i.charAt(w) + i.charAt(h) + i.charAt(y) + i.charAt(u));
        return m.join("");
      }, c.decode = function(l) {
        var _, k, b, w, h, y, u = 0, m = 0, d = "data:";
        if (l.substr(0, d.length) === d) throw new Error("Invalid base64 input, it looks like a data url.");
        var v, S = 3 * (l = l.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
        if (l.charAt(l.length - 1) === i.charAt(64) && S--, l.charAt(l.length - 2) === i.charAt(64) && S--, S % 1 != 0) throw new Error("Invalid base64 input, bad content length.");
        for (v = s.uint8array ? new Uint8Array(0 | S) : new Array(0 | S); u < l.length; ) _ = i.indexOf(l.charAt(u++)) << 2 | (w = i.indexOf(l.charAt(u++))) >> 4, k = (15 & w) << 4 | (h = i.indexOf(l.charAt(u++))) >> 2, b = (3 & h) << 6 | (y = i.indexOf(l.charAt(u++))), v[m++] = _, h !== 64 && (v[m++] = k), y !== 64 && (v[m++] = b);
        return v;
      };
    }, { "./support": 30, "./utils": 32 }], 2: [function(r, f, c) {
      var n = r("./external"), s = r("./stream/DataWorker"), i = r("./stream/Crc32Probe"), l = r("./stream/DataLengthProbe");
      function _(k, b, w, h, y) {
        this.compressedSize = k, this.uncompressedSize = b, this.crc32 = w, this.compression = h, this.compressedContent = y;
      }
      _.prototype = { getContentWorker: function() {
        var k = new s(n.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")), b = this;
        return k.on("end", function() {
          if (this.streamInfo.data_length !== b.uncompressedSize) throw new Error("Bug : uncompressed data size mismatch");
        }), k;
      }, getCompressedWorker: function() {
        return new s(n.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
      } }, _.createWorkerFrom = function(k, b, w) {
        return k.pipe(new i()).pipe(new l("uncompressedSize")).pipe(b.compressWorker(w)).pipe(new l("compressedSize")).withStreamInfo("compression", b);
      }, f.exports = _;
    }, { "./external": 6, "./stream/Crc32Probe": 25, "./stream/DataLengthProbe": 26, "./stream/DataWorker": 27 }], 3: [function(r, f, c) {
      var n = r("./stream/GenericWorker");
      c.STORE = { magic: "\0\0", compressWorker: function() {
        return new n("STORE compression");
      }, uncompressWorker: function() {
        return new n("STORE decompression");
      } }, c.DEFLATE = r("./flate");
    }, { "./flate": 7, "./stream/GenericWorker": 28 }], 4: [function(r, f, c) {
      var n = r("./utils"), s = function() {
        for (var i, l = [], _ = 0; _ < 256; _++) {
          i = _;
          for (var k = 0; k < 8; k++) i = 1 & i ? 3988292384 ^ i >>> 1 : i >>> 1;
          l[_] = i;
        }
        return l;
      }();
      f.exports = function(i, l) {
        return i !== void 0 && i.length ? n.getTypeOf(i) !== "string" ? function(_, k, b, w) {
          var h = s, y = w + b;
          _ ^= -1;
          for (var u = w; u < y; u++) _ = _ >>> 8 ^ h[255 & (_ ^ k[u])];
          return -1 ^ _;
        }(0 | l, i, i.length, 0) : function(_, k, b, w) {
          var h = s, y = w + b;
          _ ^= -1;
          for (var u = w; u < y; u++) _ = _ >>> 8 ^ h[255 & (_ ^ k.charCodeAt(u))];
          return -1 ^ _;
        }(0 | l, i, i.length, 0) : 0;
      };
    }, { "./utils": 32 }], 5: [function(r, f, c) {
      c.base64 = !1, c.binary = !1, c.dir = !1, c.createFolders = !0, c.date = null, c.compression = null, c.compressionOptions = null, c.comment = null, c.unixPermissions = null, c.dosPermissions = null;
    }, {}], 6: [function(r, f, c) {
      var n = null;
      n = typeof Promise < "u" ? Promise : r("lie"), f.exports = { Promise: n };
    }, { lie: 37 }], 7: [function(r, f, c) {
      var n = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Uint32Array < "u", s = r("pako"), i = r("./utils"), l = r("./stream/GenericWorker"), _ = n ? "uint8array" : "array";
      function k(b, w) {
        l.call(this, "FlateWorker/" + b), this._pako = null, this._pakoAction = b, this._pakoOptions = w, this.meta = {};
      }
      c.magic = "\b\0", i.inherits(k, l), k.prototype.processChunk = function(b) {
        this.meta = b.meta, this._pako === null && this._createPako(), this._pako.push(i.transformTo(_, b.data), !1);
      }, k.prototype.flush = function() {
        l.prototype.flush.call(this), this._pako === null && this._createPako(), this._pako.push([], !0);
      }, k.prototype.cleanUp = function() {
        l.prototype.cleanUp.call(this), this._pako = null;
      }, k.prototype._createPako = function() {
        this._pako = new s[this._pakoAction]({ raw: !0, level: this._pakoOptions.level || -1 });
        var b = this;
        this._pako.onData = function(w) {
          b.push({ data: w, meta: b.meta });
        };
      }, c.compressWorker = function(b) {
        return new k("Deflate", b);
      }, c.uncompressWorker = function() {
        return new k("Inflate", {});
      };
    }, { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 }], 8: [function(r, f, c) {
      function n(h, y) {
        var u, m = "";
        for (u = 0; u < y; u++) m += String.fromCharCode(255 & h), h >>>= 8;
        return m;
      }
      function s(h, y, u, m, d, v) {
        var S, A, T = h.file, L = h.compression, I = v !== _.utf8encode, Z = i.transformTo("string", v(T.name)), P = i.transformTo("string", _.utf8encode(T.name)), H = T.comment, it = i.transformTo("string", v(H)), E = i.transformTo("string", _.utf8encode(H)), D = P.length !== T.name.length, a = E.length !== H.length, U = "", lt = "", V = "", ht = T.dir, X = T.date, nt = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
        y && !u || (nt.crc32 = h.crc32, nt.compressedSize = h.compressedSize, nt.uncompressedSize = h.uncompressedSize);
        var j = 0;
        y && (j |= 8), I || !D && !a || (j |= 2048);
        var z = 0, rt = 0;
        ht && (z |= 16), d === "UNIX" ? (rt = 798, z |= function(J, xt) {
          var Ct = J;
          return J || (Ct = xt ? 16893 : 33204), (65535 & Ct) << 16;
        }(T.unixPermissions, ht)) : (rt = 20, z |= function(J) {
          return 63 & (J || 0);
        }(T.dosPermissions)), S = X.getUTCHours(), S <<= 6, S |= X.getUTCMinutes(), S <<= 5, S |= X.getUTCSeconds() / 2, A = X.getUTCFullYear() - 1980, A <<= 4, A |= X.getUTCMonth() + 1, A <<= 5, A |= X.getUTCDate(), D && (lt = n(1, 1) + n(k(Z), 4) + P, U += "up" + n(lt.length, 2) + lt), a && (V = n(1, 1) + n(k(it), 4) + E, U += "uc" + n(V.length, 2) + V);
        var et = "";
        return et += `
\0`, et += n(j, 2), et += L.magic, et += n(S, 2), et += n(A, 2), et += n(nt.crc32, 4), et += n(nt.compressedSize, 4), et += n(nt.uncompressedSize, 4), et += n(Z.length, 2), et += n(U.length, 2), { fileRecord: b.LOCAL_FILE_HEADER + et + Z + U, dirRecord: b.CENTRAL_FILE_HEADER + n(rt, 2) + et + n(it.length, 2) + "\0\0\0\0" + n(z, 4) + n(m, 4) + Z + U + it };
      }
      var i = r("../utils"), l = r("../stream/GenericWorker"), _ = r("../utf8"), k = r("../crc32"), b = r("../signature");
      function w(h, y, u, m) {
        l.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = y, this.zipPlatform = u, this.encodeFileName = m, this.streamFiles = h, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
      }
      i.inherits(w, l), w.prototype.push = function(h) {
        var y = h.meta.percent || 0, u = this.entriesCount, m = this._sources.length;
        this.accumulate ? this.contentBuffer.push(h) : (this.bytesWritten += h.data.length, l.prototype.push.call(this, { data: h.data, meta: { currentFile: this.currentFile, percent: u ? (y + 100 * (u - m - 1)) / u : 100 } }));
      }, w.prototype.openedSource = function(h) {
        this.currentSourceOffset = this.bytesWritten, this.currentFile = h.file.name;
        var y = this.streamFiles && !h.file.dir;
        if (y) {
          var u = s(h, y, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
          this.push({ data: u.fileRecord, meta: { percent: 0 } });
        } else this.accumulate = !0;
      }, w.prototype.closedSource = function(h) {
        this.accumulate = !1;
        var y = this.streamFiles && !h.file.dir, u = s(h, y, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
        if (this.dirRecords.push(u.dirRecord), y) this.push({ data: function(m) {
          return b.DATA_DESCRIPTOR + n(m.crc32, 4) + n(m.compressedSize, 4) + n(m.uncompressedSize, 4);
        }(h), meta: { percent: 100 } });
        else for (this.push({ data: u.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length; ) this.push(this.contentBuffer.shift());
        this.currentFile = null;
      }, w.prototype.flush = function() {
        for (var h = this.bytesWritten, y = 0; y < this.dirRecords.length; y++) this.push({ data: this.dirRecords[y], meta: { percent: 100 } });
        var u = this.bytesWritten - h, m = function(d, v, S, A, T) {
          var L = i.transformTo("string", T(A));
          return b.CENTRAL_DIRECTORY_END + "\0\0\0\0" + n(d, 2) + n(d, 2) + n(v, 4) + n(S, 4) + n(L.length, 2) + L;
        }(this.dirRecords.length, u, h, this.zipComment, this.encodeFileName);
        this.push({ data: m, meta: { percent: 100 } });
      }, w.prototype.prepareNextSource = function() {
        this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
      }, w.prototype.registerPrevious = function(h) {
        this._sources.push(h);
        var y = this;
        return h.on("data", function(u) {
          y.processChunk(u);
        }), h.on("end", function() {
          y.closedSource(y.previous.streamInfo), y._sources.length ? y.prepareNextSource() : y.end();
        }), h.on("error", function(u) {
          y.error(u);
        }), this;
      }, w.prototype.resume = function() {
        return !!l.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0));
      }, w.prototype.error = function(h) {
        var y = this._sources;
        if (!l.prototype.error.call(this, h)) return !1;
        for (var u = 0; u < y.length; u++) try {
          y[u].error(h);
        } catch {
        }
        return !0;
      }, w.prototype.lock = function() {
        l.prototype.lock.call(this);
        for (var h = this._sources, y = 0; y < h.length; y++) h[y].lock();
      }, f.exports = w;
    }, { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 }], 9: [function(r, f, c) {
      var n = r("../compressions"), s = r("./ZipFileWorker");
      c.generateWorker = function(i, l, _) {
        var k = new s(l.streamFiles, _, l.platform, l.encodeFileName), b = 0;
        try {
          i.forEach(function(w, h) {
            b++;
            var y = function(v, S) {
              var A = v || S, T = n[A];
              if (!T) throw new Error(A + " is not a valid compression method !");
              return T;
            }(h.options.compression, l.compression), u = h.options.compressionOptions || l.compressionOptions || {}, m = h.dir, d = h.date;
            h._compressWorker(y, u).withStreamInfo("file", { name: w, dir: m, date: d, comment: h.comment || "", unixPermissions: h.unixPermissions, dosPermissions: h.dosPermissions }).pipe(k);
          }), k.entriesCount = b;
        } catch (w) {
          k.error(w);
        }
        return k;
      };
    }, { "../compressions": 3, "./ZipFileWorker": 8 }], 10: [function(r, f, c) {
      function n() {
        if (!(this instanceof n)) return new n();
        if (arguments.length) throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
        this.files = /* @__PURE__ */ Object.create(null), this.comment = null, this.root = "", this.clone = function() {
          var s = new n();
          for (var i in this) typeof this[i] != "function" && (s[i] = this[i]);
          return s;
        };
      }
      (n.prototype = r("./object")).loadAsync = r("./load"), n.support = r("./support"), n.defaults = r("./defaults"), n.version = "3.10.1", n.loadAsync = function(s, i) {
        return new n().loadAsync(s, i);
      }, n.external = r("./external"), f.exports = n;
    }, { "./defaults": 5, "./external": 6, "./load": 11, "./object": 15, "./support": 30 }], 11: [function(r, f, c) {
      var n = r("./utils"), s = r("./external"), i = r("./utf8"), l = r("./zipEntries"), _ = r("./stream/Crc32Probe"), k = r("./nodejsUtils");
      function b(w) {
        return new s.Promise(function(h, y) {
          var u = w.decompressed.getContentWorker().pipe(new _());
          u.on("error", function(m) {
            y(m);
          }).on("end", function() {
            u.streamInfo.crc32 !== w.decompressed.crc32 ? y(new Error("Corrupted zip : CRC32 mismatch")) : h();
          }).resume();
        });
      }
      f.exports = function(w, h) {
        var y = this;
        return h = n.extend(h || {}, { base64: !1, checkCRC32: !1, optimizedBinaryString: !1, createFolders: !1, decodeFileName: i.utf8decode }), k.isNode && k.isStream(w) ? s.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : n.prepareContent("the loaded zip file", w, !0, h.optimizedBinaryString, h.base64).then(function(u) {
          var m = new l(h);
          return m.load(u), m;
        }).then(function(u) {
          var m = [s.Promise.resolve(u)], d = u.files;
          if (h.checkCRC32) for (var v = 0; v < d.length; v++) m.push(b(d[v]));
          return s.Promise.all(m);
        }).then(function(u) {
          for (var m = u.shift(), d = m.files, v = 0; v < d.length; v++) {
            var S = d[v], A = S.fileNameStr, T = n.resolve(S.fileNameStr);
            y.file(T, S.decompressed, { binary: !0, optimizedBinaryString: !0, date: S.date, dir: S.dir, comment: S.fileCommentStr.length ? S.fileCommentStr : null, unixPermissions: S.unixPermissions, dosPermissions: S.dosPermissions, createFolders: h.createFolders }), S.dir || (y.file(T).unsafeOriginalName = A);
          }
          return m.zipComment.length && (y.comment = m.zipComment), y;
        });
      };
    }, { "./external": 6, "./nodejsUtils": 14, "./stream/Crc32Probe": 25, "./utf8": 31, "./utils": 32, "./zipEntries": 33 }], 12: [function(r, f, c) {
      var n = r("../utils"), s = r("../stream/GenericWorker");
      function i(l, _) {
        s.call(this, "Nodejs stream input adapter for " + l), this._upstreamEnded = !1, this._bindStream(_);
      }
      n.inherits(i, s), i.prototype._bindStream = function(l) {
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
      }, f.exports = i;
    }, { "../stream/GenericWorker": 28, "../utils": 32 }], 13: [function(r, f, c) {
      var n = r("readable-stream").Readable;
      function s(i, l, _) {
        n.call(this, l), this._helper = i;
        var k = this;
        i.on("data", function(b, w) {
          k.push(b) || k._helper.pause(), _ && _(w);
        }).on("error", function(b) {
          k.emit("error", b);
        }).on("end", function() {
          k.push(null);
        });
      }
      r("../utils").inherits(s, n), s.prototype._read = function() {
        this._helper.resume();
      }, f.exports = s;
    }, { "../utils": 32, "readable-stream": 16 }], 14: [function(r, f, c) {
      f.exports = { isNode: typeof Buffer < "u", newBufferFrom: function(n, s) {
        if (Buffer.from && Buffer.from !== Uint8Array.from) return Buffer.from(n, s);
        if (typeof n == "number") throw new Error('The "data" argument must not be a number');
        return new Buffer(n, s);
      }, allocBuffer: function(n) {
        if (Buffer.alloc) return Buffer.alloc(n);
        var s = new Buffer(n);
        return s.fill(0), s;
      }, isBuffer: function(n) {
        return Buffer.isBuffer(n);
      }, isStream: function(n) {
        return n && typeof n.on == "function" && typeof n.pause == "function" && typeof n.resume == "function";
      } };
    }, {}], 15: [function(r, f, c) {
      function n(T, L, I) {
        var Z, P = i.getTypeOf(L), H = i.extend(I || {}, k);
        H.date = H.date || /* @__PURE__ */ new Date(), H.compression !== null && (H.compression = H.compression.toUpperCase()), typeof H.unixPermissions == "string" && (H.unixPermissions = parseInt(H.unixPermissions, 8)), H.unixPermissions && 16384 & H.unixPermissions && (H.dir = !0), H.dosPermissions && 16 & H.dosPermissions && (H.dir = !0), H.dir && (T = d(T)), H.createFolders && (Z = m(T)) && v.call(this, Z, !0);
        var it = P === "string" && H.binary === !1 && H.base64 === !1;
        I && I.binary !== void 0 || (H.binary = !it), (L instanceof b && L.uncompressedSize === 0 || H.dir || !L || L.length === 0) && (H.base64 = !1, H.binary = !0, L = "", H.compression = "STORE", P = "string");
        var E = null;
        E = L instanceof b || L instanceof l ? L : y.isNode && y.isStream(L) ? new u(T, L) : i.prepareContent(T, L, H.binary, H.optimizedBinaryString, H.base64);
        var D = new w(T, E, H);
        this.files[T] = D;
      }
      var s = r("./utf8"), i = r("./utils"), l = r("./stream/GenericWorker"), _ = r("./stream/StreamHelper"), k = r("./defaults"), b = r("./compressedObject"), w = r("./zipObject"), h = r("./generate"), y = r("./nodejsUtils"), u = r("./nodejs/NodejsStreamInputAdapter"), m = function(T) {
        T.slice(-1) === "/" && (T = T.substring(0, T.length - 1));
        var L = T.lastIndexOf("/");
        return 0 < L ? T.substring(0, L) : "";
      }, d = function(T) {
        return T.slice(-1) !== "/" && (T += "/"), T;
      }, v = function(T, L) {
        return L = L !== void 0 ? L : k.createFolders, T = d(T), this.files[T] || n.call(this, T, null, { dir: !0, createFolders: L }), this.files[T];
      };
      function S(T) {
        return Object.prototype.toString.call(T) === "[object RegExp]";
      }
      var A = { load: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, forEach: function(T) {
        var L, I, Z;
        for (L in this.files) Z = this.files[L], (I = L.slice(this.root.length, L.length)) && L.slice(0, this.root.length) === this.root && T(I, Z);
      }, filter: function(T) {
        var L = [];
        return this.forEach(function(I, Z) {
          T(I, Z) && L.push(Z);
        }), L;
      }, file: function(T, L, I) {
        if (arguments.length !== 1) return T = this.root + T, n.call(this, T, L, I), this;
        if (S(T)) {
          var Z = T;
          return this.filter(function(H, it) {
            return !it.dir && Z.test(H);
          });
        }
        var P = this.files[this.root + T];
        return P && !P.dir ? P : null;
      }, folder: function(T) {
        if (!T) return this;
        if (S(T)) return this.filter(function(P, H) {
          return H.dir && T.test(P);
        });
        var L = this.root + T, I = v.call(this, L), Z = this.clone();
        return Z.root = I.name, Z;
      }, remove: function(T) {
        T = this.root + T;
        var L = this.files[T];
        if (L || (T.slice(-1) !== "/" && (T += "/"), L = this.files[T]), L && !L.dir) delete this.files[T];
        else for (var I = this.filter(function(P, H) {
          return H.name.slice(0, T.length) === T;
        }), Z = 0; Z < I.length; Z++) delete this.files[I[Z].name];
        return this;
      }, generate: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, generateInternalStream: function(T) {
        var L, I = {};
        try {
          if ((I = i.extend(T || {}, { streamFiles: !1, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: s.utf8encode })).type = I.type.toLowerCase(), I.compression = I.compression.toUpperCase(), I.type === "binarystring" && (I.type = "string"), !I.type) throw new Error("No output type specified.");
          i.checkSupport(I.type), I.platform !== "darwin" && I.platform !== "freebsd" && I.platform !== "linux" && I.platform !== "sunos" || (I.platform = "UNIX"), I.platform === "win32" && (I.platform = "DOS");
          var Z = I.comment || this.comment || "";
          L = h.generateWorker(this, I, Z);
        } catch (P) {
          (L = new l("error")).error(P);
        }
        return new _(L, I.type || "string", I.mimeType);
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
      function s(i) {
        n.call(this, i);
        for (var l = 0; l < this.data.length; l++) i[l] = 255 & i[l];
      }
      r("../utils").inherits(s, n), s.prototype.byteAt = function(i) {
        return this.data[this.zero + i];
      }, s.prototype.lastIndexOfSignature = function(i) {
        for (var l = i.charCodeAt(0), _ = i.charCodeAt(1), k = i.charCodeAt(2), b = i.charCodeAt(3), w = this.length - 4; 0 <= w; --w) if (this.data[w] === l && this.data[w + 1] === _ && this.data[w + 2] === k && this.data[w + 3] === b) return w - this.zero;
        return -1;
      }, s.prototype.readAndCheckSignature = function(i) {
        var l = i.charCodeAt(0), _ = i.charCodeAt(1), k = i.charCodeAt(2), b = i.charCodeAt(3), w = this.readData(4);
        return l === w[0] && _ === w[1] && k === w[2] && b === w[3];
      }, s.prototype.readData = function(i) {
        if (this.checkOffset(i), i === 0) return [];
        var l = this.data.slice(this.zero + this.index, this.zero + this.index + i);
        return this.index += i, l;
      }, f.exports = s;
    }, { "../utils": 32, "./DataReader": 18 }], 18: [function(r, f, c) {
      var n = r("../utils");
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
        return n.transformTo("string", this.readData(i));
      }, readData: function() {
      }, lastIndexOfSignature: function() {
      }, readAndCheckSignature: function() {
      }, readDate: function() {
        var i = this.readInt(4);
        return new Date(Date.UTC(1980 + (i >> 25 & 127), (i >> 21 & 15) - 1, i >> 16 & 31, i >> 11 & 31, i >> 5 & 63, (31 & i) << 1));
      } }, f.exports = s;
    }, { "../utils": 32 }], 19: [function(r, f, c) {
      var n = r("./Uint8ArrayReader");
      function s(i) {
        n.call(this, i);
      }
      r("../utils").inherits(s, n), s.prototype.readData = function(i) {
        this.checkOffset(i);
        var l = this.data.slice(this.zero + this.index, this.zero + this.index + i);
        return this.index += i, l;
      }, f.exports = s;
    }, { "../utils": 32, "./Uint8ArrayReader": 21 }], 20: [function(r, f, c) {
      var n = r("./DataReader");
      function s(i) {
        n.call(this, i);
      }
      r("../utils").inherits(s, n), s.prototype.byteAt = function(i) {
        return this.data.charCodeAt(this.zero + i);
      }, s.prototype.lastIndexOfSignature = function(i) {
        return this.data.lastIndexOf(i) - this.zero;
      }, s.prototype.readAndCheckSignature = function(i) {
        return i === this.readData(4);
      }, s.prototype.readData = function(i) {
        this.checkOffset(i);
        var l = this.data.slice(this.zero + this.index, this.zero + this.index + i);
        return this.index += i, l;
      }, f.exports = s;
    }, { "../utils": 32, "./DataReader": 18 }], 21: [function(r, f, c) {
      var n = r("./ArrayReader");
      function s(i) {
        n.call(this, i);
      }
      r("../utils").inherits(s, n), s.prototype.readData = function(i) {
        if (this.checkOffset(i), i === 0) return new Uint8Array(0);
        var l = this.data.subarray(this.zero + this.index, this.zero + this.index + i);
        return this.index += i, l;
      }, f.exports = s;
    }, { "../utils": 32, "./ArrayReader": 17 }], 22: [function(r, f, c) {
      var n = r("../utils"), s = r("../support"), i = r("./ArrayReader"), l = r("./StringReader"), _ = r("./NodeBufferReader"), k = r("./Uint8ArrayReader");
      f.exports = function(b) {
        var w = n.getTypeOf(b);
        return n.checkSupport(w), w !== "string" || s.uint8array ? w === "nodebuffer" ? new _(b) : s.uint8array ? new k(n.transformTo("uint8array", b)) : new i(n.transformTo("array", b)) : new l(b);
      };
    }, { "../support": 30, "../utils": 32, "./ArrayReader": 17, "./NodeBufferReader": 19, "./StringReader": 20, "./Uint8ArrayReader": 21 }], 23: [function(r, f, c) {
      c.LOCAL_FILE_HEADER = "PK", c.CENTRAL_FILE_HEADER = "PK", c.CENTRAL_DIRECTORY_END = "PK", c.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", c.ZIP64_CENTRAL_DIRECTORY_END = "PK", c.DATA_DESCRIPTOR = "PK\x07\b";
    }, {}], 24: [function(r, f, c) {
      var n = r("./GenericWorker"), s = r("../utils");
      function i(l) {
        n.call(this, "ConvertWorker to " + l), this.destType = l;
      }
      s.inherits(i, n), i.prototype.processChunk = function(l) {
        this.push({ data: s.transformTo(this.destType, l.data), meta: l.meta });
      }, f.exports = i;
    }, { "../utils": 32, "./GenericWorker": 28 }], 25: [function(r, f, c) {
      var n = r("./GenericWorker"), s = r("../crc32");
      function i() {
        n.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
      }
      r("../utils").inherits(i, n), i.prototype.processChunk = function(l) {
        this.streamInfo.crc32 = s(l.data, this.streamInfo.crc32 || 0), this.push(l);
      }, f.exports = i;
    }, { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 }], 26: [function(r, f, c) {
      var n = r("../utils"), s = r("./GenericWorker");
      function i(l) {
        s.call(this, "DataLengthProbe for " + l), this.propName = l, this.withStreamInfo(l, 0);
      }
      n.inherits(i, s), i.prototype.processChunk = function(l) {
        if (l) {
          var _ = this.streamInfo[this.propName] || 0;
          this.streamInfo[this.propName] = _ + l.data.length;
        }
        s.prototype.processChunk.call(this, l);
      }, f.exports = i;
    }, { "../utils": 32, "./GenericWorker": 28 }], 27: [function(r, f, c) {
      var n = r("../utils"), s = r("./GenericWorker");
      function i(l) {
        s.call(this, "DataWorker");
        var _ = this;
        this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, l.then(function(k) {
          _.dataIsReady = !0, _.data = k, _.max = k && k.length || 0, _.type = n.getTypeOf(k), _.isPaused || _._tickAndRepeat();
        }, function(k) {
          _.error(k);
        });
      }
      n.inherits(i, s), i.prototype.cleanUp = function() {
        s.prototype.cleanUp.call(this), this.data = null;
      }, i.prototype.resume = function() {
        return !!s.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = !0, n.delay(this._tickAndRepeat, [], this)), !0);
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
      function n(s) {
        this.name = s || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = !0, this.isFinished = !1, this.isLocked = !1, this._listeners = { data: [], end: [], error: [] }, this.previous = null;
      }
      n.prototype = { push: function(s) {
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
      } }, f.exports = n;
    }, {}], 29: [function(r, f, c) {
      var n = r("../utils"), s = r("./ConvertWorker"), i = r("./GenericWorker"), l = r("../base64"), _ = r("../support"), k = r("../external"), b = null;
      if (_.nodestream) try {
        b = r("../nodejs/NodejsStreamOutputAdapter");
      } catch {
      }
      function w(y, u) {
        return new k.Promise(function(m, d) {
          var v = [], S = y._internalType, A = y._outputType, T = y._mimeType;
          y.on("data", function(L, I) {
            v.push(L), u && u(I);
          }).on("error", function(L) {
            v = [], d(L);
          }).on("end", function() {
            try {
              var L = function(I, Z, P) {
                switch (I) {
                  case "blob":
                    return n.newBlob(n.transformTo("arraybuffer", Z), P);
                  case "base64":
                    return l.encode(Z);
                  default:
                    return n.transformTo(I, Z);
                }
              }(A, function(I, Z) {
                var P, H = 0, it = null, E = 0;
                for (P = 0; P < Z.length; P++) E += Z[P].length;
                switch (I) {
                  case "string":
                    return Z.join("");
                  case "array":
                    return Array.prototype.concat.apply([], Z);
                  case "uint8array":
                    for (it = new Uint8Array(E), P = 0; P < Z.length; P++) it.set(Z[P], H), H += Z[P].length;
                    return it;
                  case "nodebuffer":
                    return Buffer.concat(Z);
                  default:
                    throw new Error("concat : unsupported type '" + I + "'");
                }
              }(S, v), T);
              m(L);
            } catch (I) {
              d(I);
            }
            v = [];
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
          this._internalType = d, this._outputType = u, this._mimeType = m, n.checkSupport(d), this._worker = y.pipe(new s(d)), y.lock();
        } catch (v) {
          this._worker = new i("error"), this._worker.error(v);
        }
      }
      h.prototype = { accumulate: function(y) {
        return w(this, y);
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
            var s = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            s.append(n), c.blob = s.getBlob("application/zip").size === 0;
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
      for (var n = r("./utils"), s = r("./support"), i = r("./nodejsUtils"), l = r("./stream/GenericWorker"), _ = new Array(256), k = 0; k < 256; k++) _[k] = 252 <= k ? 6 : 248 <= k ? 5 : 240 <= k ? 4 : 224 <= k ? 3 : 192 <= k ? 2 : 1;
      _[254] = _[254] = 1;
      function b() {
        l.call(this, "utf-8 decode"), this.leftOver = null;
      }
      function w() {
        l.call(this, "utf-8 encode");
      }
      c.utf8encode = function(h) {
        return s.nodebuffer ? i.newBufferFrom(h, "utf-8") : function(y) {
          var u, m, d, v, S, A = y.length, T = 0;
          for (v = 0; v < A; v++) (64512 & (m = y.charCodeAt(v))) == 55296 && v + 1 < A && (64512 & (d = y.charCodeAt(v + 1))) == 56320 && (m = 65536 + (m - 55296 << 10) + (d - 56320), v++), T += m < 128 ? 1 : m < 2048 ? 2 : m < 65536 ? 3 : 4;
          for (u = s.uint8array ? new Uint8Array(T) : new Array(T), v = S = 0; S < T; v++) (64512 & (m = y.charCodeAt(v))) == 55296 && v + 1 < A && (64512 & (d = y.charCodeAt(v + 1))) == 56320 && (m = 65536 + (m - 55296 << 10) + (d - 56320), v++), m < 128 ? u[S++] = m : (m < 2048 ? u[S++] = 192 | m >>> 6 : (m < 65536 ? u[S++] = 224 | m >>> 12 : (u[S++] = 240 | m >>> 18, u[S++] = 128 | m >>> 12 & 63), u[S++] = 128 | m >>> 6 & 63), u[S++] = 128 | 63 & m);
          return u;
        }(h);
      }, c.utf8decode = function(h) {
        return s.nodebuffer ? n.transformTo("nodebuffer", h).toString("utf-8") : function(y) {
          var u, m, d, v, S = y.length, A = new Array(2 * S);
          for (u = m = 0; u < S; ) if ((d = y[u++]) < 128) A[m++] = d;
          else if (4 < (v = _[d])) A[m++] = 65533, u += v - 1;
          else {
            for (d &= v === 2 ? 31 : v === 3 ? 15 : 7; 1 < v && u < S; ) d = d << 6 | 63 & y[u++], v--;
            1 < v ? A[m++] = 65533 : d < 65536 ? A[m++] = d : (d -= 65536, A[m++] = 55296 | d >> 10 & 1023, A[m++] = 56320 | 1023 & d);
          }
          return A.length !== m && (A.subarray ? A = A.subarray(0, m) : A.length = m), n.applyFromCharCode(A);
        }(h = n.transformTo(s.uint8array ? "uint8array" : "array", h));
      }, n.inherits(b, l), b.prototype.processChunk = function(h) {
        var y = n.transformTo(s.uint8array ? "uint8array" : "array", h.data);
        if (this.leftOver && this.leftOver.length) {
          if (s.uint8array) {
            var u = y;
            (y = new Uint8Array(u.length + this.leftOver.length)).set(this.leftOver, 0), y.set(u, this.leftOver.length);
          } else y = this.leftOver.concat(y);
          this.leftOver = null;
        }
        var m = function(v, S) {
          var A;
          for ((S = S || v.length) > v.length && (S = v.length), A = S - 1; 0 <= A && (192 & v[A]) == 128; ) A--;
          return A < 0 || A === 0 ? S : A + _[v[A]] > S ? A : S;
        }(y), d = y;
        m !== y.length && (s.uint8array ? (d = y.subarray(0, m), this.leftOver = y.subarray(m, y.length)) : (d = y.slice(0, m), this.leftOver = y.slice(m, y.length))), this.push({ data: c.utf8decode(d), meta: h.meta });
      }, b.prototype.flush = function() {
        this.leftOver && this.leftOver.length && (this.push({ data: c.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
      }, c.Utf8DecodeWorker = b, n.inherits(w, l), w.prototype.processChunk = function(h) {
        this.push({ data: c.utf8encode(h.data), meta: h.meta });
      }, c.Utf8EncodeWorker = w;
    }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }], 32: [function(r, f, c) {
      var n = r("./support"), s = r("./base64"), i = r("./nodejsUtils"), l = r("./external");
      function _(u) {
        return u;
      }
      function k(u, m) {
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
        var v = [], S = 0, A = u.length;
        if (A <= d) return String.fromCharCode.apply(null, u);
        for (; S < A; ) m === "array" || m === "nodebuffer" ? v.push(String.fromCharCode.apply(null, u.slice(S, Math.min(S + d, A)))) : v.push(String.fromCharCode.apply(null, u.subarray(S, Math.min(S + d, A)))), S += d;
        return v.join("");
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
        var m = 65536, d = c.getTypeOf(u), v = !0;
        if (d === "uint8array" ? v = b.applyCanBeUsed.uint8array : d === "nodebuffer" && (v = b.applyCanBeUsed.nodebuffer), v) for (; 1 < m; ) try {
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
      var y = {};
      y.string = { string: _, array: function(u) {
        return k(u, new Array(u.length));
      }, arraybuffer: function(u) {
        return y.string.uint8array(u).buffer;
      }, uint8array: function(u) {
        return k(u, new Uint8Array(u.length));
      }, nodebuffer: function(u) {
        return k(u, i.allocBuffer(u.length));
      } }, y.array = { string: w, array: _, arraybuffer: function(u) {
        return new Uint8Array(u).buffer;
      }, uint8array: function(u) {
        return new Uint8Array(u);
      }, nodebuffer: function(u) {
        return i.newBufferFrom(u);
      } }, y.arraybuffer = { string: function(u) {
        return w(new Uint8Array(u));
      }, array: function(u) {
        return h(new Uint8Array(u), new Array(u.byteLength));
      }, arraybuffer: _, uint8array: function(u) {
        return new Uint8Array(u);
      }, nodebuffer: function(u) {
        return i.newBufferFrom(new Uint8Array(u));
      } }, y.uint8array = { string: w, array: function(u) {
        return h(u, new Array(u.length));
      }, arraybuffer: function(u) {
        return u.buffer;
      }, uint8array: _, nodebuffer: function(u) {
        return i.newBufferFrom(u);
      } }, y.nodebuffer = { string: w, array: function(u) {
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
        for (var m = u.split("/"), d = [], v = 0; v < m.length; v++) {
          var S = m[v];
          S === "." || S === "" && v !== 0 && v !== m.length - 1 || (S === ".." ? d.pop() : d.push(S));
        }
        return d.join("/");
      }, c.getTypeOf = function(u) {
        return typeof u == "string" ? "string" : Object.prototype.toString.call(u) === "[object Array]" ? "array" : n.nodebuffer && i.isBuffer(u) ? "nodebuffer" : n.uint8array && u instanceof Uint8Array ? "uint8array" : n.arraybuffer && u instanceof ArrayBuffer ? "arraybuffer" : void 0;
      }, c.checkSupport = function(u) {
        if (!n[u.toLowerCase()]) throw new Error(u + " is not supported by this platform");
      }, c.MAX_VALUE_16BITS = 65535, c.MAX_VALUE_32BITS = -1, c.pretty = function(u) {
        var m, d, v = "";
        for (d = 0; d < (u || "").length; d++) v += "\\x" + ((m = u.charCodeAt(d)) < 16 ? "0" : "") + m.toString(16).toUpperCase();
        return v;
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
      }, c.prepareContent = function(u, m, d, v, S) {
        return l.Promise.resolve(m).then(function(A) {
          return n.blob && (A instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(A)) !== -1) && typeof FileReader < "u" ? new l.Promise(function(T, L) {
            var I = new FileReader();
            I.onload = function(Z) {
              T(Z.target.result);
            }, I.onerror = function(Z) {
              L(Z.target.error);
            }, I.readAsArrayBuffer(A);
          }) : A;
        }).then(function(A) {
          var T = c.getTypeOf(A);
          return T ? (T === "arraybuffer" ? A = c.transformTo("uint8array", A) : T === "string" && (S ? A = s.decode(A) : d && v !== !0 && (A = function(L) {
            return k(L, n.uint8array ? new Uint8Array(L.length) : new Array(L.length));
          }(A))), A) : l.Promise.reject(new Error("Can't read the data of '" + u + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
        });
      };
    }, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, setimmediate: 54 }], 33: [function(r, f, c) {
      var n = r("./reader/readerFor"), s = r("./utils"), i = r("./signature"), l = r("./zipEntry"), _ = r("./support");
      function k(b) {
        this.files = [], this.loadOptions = b;
      }
      k.prototype = { checkSignature: function(b) {
        if (!this.reader.readAndCheckSignature(b)) {
          this.reader.index -= 4;
          var w = this.reader.readString(4);
          throw new Error("Corrupted zip or bug: unexpected signature (" + s.pretty(w) + ", expected " + s.pretty(b) + ")");
        }
      }, isSignature: function(b, w) {
        var h = this.reader.index;
        this.reader.setIndex(b);
        var y = this.reader.readString(4) === w;
        return this.reader.setIndex(h), y;
      }, readBlockEndOfCentral: function() {
        this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
        var b = this.reader.readData(this.zipCommentLength), w = _.uint8array ? "uint8array" : "array", h = s.transformTo(w, b);
        this.zipComment = this.loadOptions.decodeFileName(h);
      }, readBlockZip64EndOfCentral: function() {
        this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
        for (var b, w, h, y = this.zip64EndOfCentralSize - 44; 0 < y; ) b = this.reader.readInt(2), w = this.reader.readInt(4), h = this.reader.readData(w), this.zip64ExtensibleData[b] = { id: b, length: w, value: h };
      }, readBlockZip64EndOfCentralLocator: function() {
        if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount) throw new Error("Multi-volumes zip are not supported");
      }, readLocalFiles: function() {
        var b, w;
        for (b = 0; b < this.files.length; b++) w = this.files[b], this.reader.setIndex(w.localHeaderOffset), this.checkSignature(i.LOCAL_FILE_HEADER), w.readLocalPart(this.reader), w.handleUTF8(), w.processAttributes();
      }, readCentralDir: function() {
        var b;
        for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(i.CENTRAL_FILE_HEADER); ) (b = new l({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(b);
        if (this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0) throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
      }, readEndOfCentral: function() {
        var b = this.reader.lastIndexOfSignature(i.CENTRAL_DIRECTORY_END);
        if (b < 0) throw this.isSignature(0, i.LOCAL_FILE_HEADER) ? new Error("Corrupted zip: can't find end of central directory") : new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
        this.reader.setIndex(b);
        var w = b;
        if (this.checkSignature(i.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === s.MAX_VALUE_16BITS || this.diskWithCentralDirStart === s.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === s.MAX_VALUE_16BITS || this.centralDirRecords === s.MAX_VALUE_16BITS || this.centralDirSize === s.MAX_VALUE_32BITS || this.centralDirOffset === s.MAX_VALUE_32BITS) {
          if (this.zip64 = !0, (b = this.reader.lastIndexOfSignature(i.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
          if (this.reader.setIndex(b), this.checkSignature(i.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, i.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(i.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
          this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(i.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
        }
        var h = this.centralDirOffset + this.centralDirSize;
        this.zip64 && (h += 20, h += 12 + this.zip64EndOfCentralSize);
        var y = w - h;
        if (0 < y) this.isSignature(w, i.CENTRAL_FILE_HEADER) || (this.reader.zero = y);
        else if (y < 0) throw new Error("Corrupted zip: missing " + Math.abs(y) + " bytes.");
      }, prepareReader: function(b) {
        this.reader = n(b);
      }, load: function(b) {
        this.prepareReader(b), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
      } }, f.exports = k;
    }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utils": 32, "./zipEntry": 34 }], 34: [function(r, f, c) {
      var n = r("./reader/readerFor"), s = r("./utils"), i = r("./compressedObject"), l = r("./crc32"), _ = r("./utf8"), k = r("./compressions"), b = r("./support");
      function w(h, y) {
        this.options = h, this.loadOptions = y;
      }
      w.prototype = { isEncrypted: function() {
        return (1 & this.bitFlag) == 1;
      }, useUTF8: function() {
        return (2048 & this.bitFlag) == 2048;
      }, readLocalPart: function(h) {
        var y, u;
        if (h.skip(22), this.fileNameLength = h.readInt(2), u = h.readInt(2), this.fileName = h.readData(this.fileNameLength), h.skip(u), this.compressedSize === -1 || this.uncompressedSize === -1) throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
        if ((y = function(m) {
          for (var d in k) if (Object.prototype.hasOwnProperty.call(k, d) && k[d].magic === m) return k[d];
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
          var h = n(this.extraFields[1].value);
          this.uncompressedSize === s.MAX_VALUE_32BITS && (this.uncompressedSize = h.readInt(8)), this.compressedSize === s.MAX_VALUE_32BITS && (this.compressedSize = h.readInt(8)), this.localHeaderOffset === s.MAX_VALUE_32BITS && (this.localHeaderOffset = h.readInt(8)), this.diskNumberStart === s.MAX_VALUE_32BITS && (this.diskNumberStart = h.readInt(4));
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
            var u = s.transformTo(h, this.fileName);
            this.fileNameStr = this.loadOptions.decodeFileName(u);
          }
          var m = this.findExtraFieldUnicodeComment();
          if (m !== null) this.fileCommentStr = m;
          else {
            var d = s.transformTo(h, this.fileComment);
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
      } }, f.exports = w;
    }, { "./compressedObject": 2, "./compressions": 3, "./crc32": 4, "./reader/readerFor": 22, "./support": 30, "./utf8": 31, "./utils": 32 }], 35: [function(r, f, c) {
      function n(y, u, m) {
        this.name = y, this.dir = m.dir, this.date = m.date, this.comment = m.comment, this.unixPermissions = m.unixPermissions, this.dosPermissions = m.dosPermissions, this._data = u, this._dataBinary = m.binary, this.options = { compression: m.compression, compressionOptions: m.compressionOptions };
      }
      var s = r("./stream/StreamHelper"), i = r("./stream/DataWorker"), l = r("./utf8"), _ = r("./compressedObject"), k = r("./stream/GenericWorker");
      n.prototype = { internalStream: function(y) {
        var u = null, m = "string";
        try {
          if (!y) throw new Error("No output type specified.");
          var d = (m = y.toLowerCase()) === "string" || m === "text";
          m !== "binarystring" && m !== "text" || (m = "string"), u = this._decompressWorker();
          var v = !this._dataBinary;
          v && !d && (u = u.pipe(new l.Utf8EncodeWorker())), !v && d && (u = u.pipe(new l.Utf8DecodeWorker()));
        } catch (S) {
          (u = new k("error")).error(S);
        }
        return new s(u, m, "");
      }, async: function(y, u) {
        return this.internalStream(y).accumulate(u);
      }, nodeStream: function(y, u) {
        return this.internalStream(y || "nodebuffer").toNodejsStream(u);
      }, _compressWorker: function(y, u) {
        if (this._data instanceof _ && this._data.compression.magic === y.magic) return this._data.getCompressedWorker();
        var m = this._decompressWorker();
        return this._dataBinary || (m = m.pipe(new l.Utf8EncodeWorker())), _.createWorkerFrom(m, y, u);
      }, _decompressWorker: function() {
        return this._data instanceof _ ? this._data.getContentWorker() : this._data instanceof k ? this._data : new i(this._data);
      } };
      for (var b = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], w = function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, h = 0; h < b.length; h++) n.prototype[b[h]] = w;
      f.exports = n;
    }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }], 36: [function(r, f, c) {
      (function(n) {
        var s, i, l = n.MutationObserver || n.WebKitMutationObserver;
        if (l) {
          var _ = 0, k = new l(y), b = n.document.createTextNode("");
          k.observe(b, { characterData: !0 }), s = function() {
            b.data = _ = ++_ % 2;
          };
        } else if (n.setImmediate || n.MessageChannel === void 0) s = "document" in n && "onreadystatechange" in n.document.createElement("script") ? function() {
          var u = n.document.createElement("script");
          u.onreadystatechange = function() {
            y(), u.onreadystatechange = null, u.parentNode.removeChild(u), u = null;
          }, n.document.documentElement.appendChild(u);
        } : function() {
          setTimeout(y, 0);
        };
        else {
          var w = new n.MessageChannel();
          w.port1.onmessage = y, s = function() {
            w.port2.postMessage(0);
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
          h.push(u) !== 1 || i || s();
        };
      }).call(this, typeof be < "u" ? be : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 37: [function(r, f, c) {
      var n = r("immediate");
      function s() {
      }
      var i = {}, l = ["REJECTED"], _ = ["FULFILLED"], k = ["PENDING"];
      function b(d) {
        if (typeof d != "function") throw new TypeError("resolver must be a function");
        this.state = k, this.queue = [], this.outcome = void 0, d !== s && u(this, d);
      }
      function w(d, v, S) {
        this.promise = d, typeof v == "function" && (this.onFulfilled = v, this.callFulfilled = this.otherCallFulfilled), typeof S == "function" && (this.onRejected = S, this.callRejected = this.otherCallRejected);
      }
      function h(d, v, S) {
        n(function() {
          var A;
          try {
            A = v(S);
          } catch (T) {
            return i.reject(d, T);
          }
          A === d ? i.reject(d, new TypeError("Cannot resolve promise with itself")) : i.resolve(d, A);
        });
      }
      function y(d) {
        var v = d && d.then;
        if (d && (typeof d == "object" || typeof d == "function") && typeof v == "function") return function() {
          v.apply(d, arguments);
        };
      }
      function u(d, v) {
        var S = !1;
        function A(I) {
          S || (S = !0, i.reject(d, I));
        }
        function T(I) {
          S || (S = !0, i.resolve(d, I));
        }
        var L = m(function() {
          v(T, A);
        });
        L.status === "error" && A(L.value);
      }
      function m(d, v) {
        var S = {};
        try {
          S.value = d(v), S.status = "success";
        } catch (A) {
          S.status = "error", S.value = A;
        }
        return S;
      }
      (f.exports = b).prototype.finally = function(d) {
        if (typeof d != "function") return this;
        var v = this.constructor;
        return this.then(function(S) {
          return v.resolve(d()).then(function() {
            return S;
          });
        }, function(S) {
          return v.resolve(d()).then(function() {
            throw S;
          });
        });
      }, b.prototype.catch = function(d) {
        return this.then(null, d);
      }, b.prototype.then = function(d, v) {
        if (typeof d != "function" && this.state === _ || typeof v != "function" && this.state === l) return this;
        var S = new this.constructor(s);
        return this.state !== k ? h(S, this.state === _ ? d : v, this.outcome) : this.queue.push(new w(S, d, v)), S;
      }, w.prototype.callFulfilled = function(d) {
        i.resolve(this.promise, d);
      }, w.prototype.otherCallFulfilled = function(d) {
        h(this.promise, this.onFulfilled, d);
      }, w.prototype.callRejected = function(d) {
        i.reject(this.promise, d);
      }, w.prototype.otherCallRejected = function(d) {
        h(this.promise, this.onRejected, d);
      }, i.resolve = function(d, v) {
        var S = m(y, v);
        if (S.status === "error") return i.reject(d, S.value);
        var A = S.value;
        if (A) u(d, A);
        else {
          d.state = _, d.outcome = v;
          for (var T = -1, L = d.queue.length; ++T < L; ) d.queue[T].callFulfilled(v);
        }
        return d;
      }, i.reject = function(d, v) {
        d.state = l, d.outcome = v;
        for (var S = -1, A = d.queue.length; ++S < A; ) d.queue[S].callRejected(v);
        return d;
      }, b.resolve = function(d) {
        return d instanceof this ? d : i.resolve(new this(s), d);
      }, b.reject = function(d) {
        var v = new this(s);
        return i.reject(v, d);
      }, b.all = function(d) {
        var v = this;
        if (Object.prototype.toString.call(d) !== "[object Array]") return this.reject(new TypeError("must be an array"));
        var S = d.length, A = !1;
        if (!S) return this.resolve([]);
        for (var T = new Array(S), L = 0, I = -1, Z = new this(s); ++I < S; ) P(d[I], I);
        return Z;
        function P(H, it) {
          v.resolve(H).then(function(E) {
            T[it] = E, ++L !== S || A || (A = !0, i.resolve(Z, T));
          }, function(E) {
            A || (A = !0, i.reject(Z, E));
          });
        }
      }, b.race = function(d) {
        var v = this;
        if (Object.prototype.toString.call(d) !== "[object Array]") return this.reject(new TypeError("must be an array"));
        var S = d.length, A = !1;
        if (!S) return this.resolve([]);
        for (var T = -1, L = new this(s); ++T < S; ) I = d[T], v.resolve(I).then(function(Z) {
          A || (A = !0, i.resolve(L, Z));
        }, function(Z) {
          A || (A = !0, i.reject(L, Z));
        });
        var I;
        return L;
      };
    }, { immediate: 36 }], 38: [function(r, f, c) {
      var n = {};
      (0, r("./lib/utils/common").assign)(n, r("./lib/deflate"), r("./lib/inflate"), r("./lib/zlib/constants")), f.exports = n;
    }, { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 }], 39: [function(r, f, c) {
      var n = r("./zlib/deflate"), s = r("./utils/common"), i = r("./utils/strings"), l = r("./zlib/messages"), _ = r("./zlib/zstream"), k = Object.prototype.toString, b = 0, w = -1, h = 0, y = 8;
      function u(d) {
        if (!(this instanceof u)) return new u(d);
        this.options = s.assign({ level: w, method: y, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: h, to: "" }, d || {});
        var v = this.options;
        v.raw && 0 < v.windowBits ? v.windowBits = -v.windowBits : v.gzip && 0 < v.windowBits && v.windowBits < 16 && (v.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new _(), this.strm.avail_out = 0;
        var S = n.deflateInit2(this.strm, v.level, v.method, v.windowBits, v.memLevel, v.strategy);
        if (S !== b) throw new Error(l[S]);
        if (v.header && n.deflateSetHeader(this.strm, v.header), v.dictionary) {
          var A;
          if (A = typeof v.dictionary == "string" ? i.string2buf(v.dictionary) : k.call(v.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(v.dictionary) : v.dictionary, (S = n.deflateSetDictionary(this.strm, A)) !== b) throw new Error(l[S]);
          this._dict_set = !0;
        }
      }
      function m(d, v) {
        var S = new u(v);
        if (S.push(d, !0), S.err) throw S.msg || l[S.err];
        return S.result;
      }
      u.prototype.push = function(d, v) {
        var S, A, T = this.strm, L = this.options.chunkSize;
        if (this.ended) return !1;
        A = v === ~~v ? v : v === !0 ? 4 : 0, typeof d == "string" ? T.input = i.string2buf(d) : k.call(d) === "[object ArrayBuffer]" ? T.input = new Uint8Array(d) : T.input = d, T.next_in = 0, T.avail_in = T.input.length;
        do {
          if (T.avail_out === 0 && (T.output = new s.Buf8(L), T.next_out = 0, T.avail_out = L), (S = n.deflate(T, A)) !== 1 && S !== b) return this.onEnd(S), !(this.ended = !0);
          T.avail_out !== 0 && (T.avail_in !== 0 || A !== 4 && A !== 2) || (this.options.to === "string" ? this.onData(i.buf2binstring(s.shrinkBuf(T.output, T.next_out))) : this.onData(s.shrinkBuf(T.output, T.next_out)));
        } while ((0 < T.avail_in || T.avail_out === 0) && S !== 1);
        return A === 4 ? (S = n.deflateEnd(this.strm), this.onEnd(S), this.ended = !0, S === b) : A !== 2 || (this.onEnd(b), !(T.avail_out = 0));
      }, u.prototype.onData = function(d) {
        this.chunks.push(d);
      }, u.prototype.onEnd = function(d) {
        d === b && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = s.flattenChunks(this.chunks)), this.chunks = [], this.err = d, this.msg = this.strm.msg;
      }, c.Deflate = u, c.deflate = m, c.deflateRaw = function(d, v) {
        return (v = v || {}).raw = !0, m(d, v);
      }, c.gzip = function(d, v) {
        return (v = v || {}).gzip = !0, m(d, v);
      };
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/deflate": 46, "./zlib/messages": 51, "./zlib/zstream": 53 }], 40: [function(r, f, c) {
      var n = r("./zlib/inflate"), s = r("./utils/common"), i = r("./utils/strings"), l = r("./zlib/constants"), _ = r("./zlib/messages"), k = r("./zlib/zstream"), b = r("./zlib/gzheader"), w = Object.prototype.toString;
      function h(u) {
        if (!(this instanceof h)) return new h(u);
        this.options = s.assign({ chunkSize: 16384, windowBits: 0, to: "" }, u || {});
        var m = this.options;
        m.raw && 0 <= m.windowBits && m.windowBits < 16 && (m.windowBits = -m.windowBits, m.windowBits === 0 && (m.windowBits = -15)), !(0 <= m.windowBits && m.windowBits < 16) || u && u.windowBits || (m.windowBits += 32), 15 < m.windowBits && m.windowBits < 48 && !(15 & m.windowBits) && (m.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new k(), this.strm.avail_out = 0;
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
        var d, v, S, A, T, L, I = this.strm, Z = this.options.chunkSize, P = this.options.dictionary, H = !1;
        if (this.ended) return !1;
        v = m === ~~m ? m : m === !0 ? l.Z_FINISH : l.Z_NO_FLUSH, typeof u == "string" ? I.input = i.binstring2buf(u) : w.call(u) === "[object ArrayBuffer]" ? I.input = new Uint8Array(u) : I.input = u, I.next_in = 0, I.avail_in = I.input.length;
        do {
          if (I.avail_out === 0 && (I.output = new s.Buf8(Z), I.next_out = 0, I.avail_out = Z), (d = n.inflate(I, l.Z_NO_FLUSH)) === l.Z_NEED_DICT && P && (L = typeof P == "string" ? i.string2buf(P) : w.call(P) === "[object ArrayBuffer]" ? new Uint8Array(P) : P, d = n.inflateSetDictionary(this.strm, L)), d === l.Z_BUF_ERROR && H === !0 && (d = l.Z_OK, H = !1), d !== l.Z_STREAM_END && d !== l.Z_OK) return this.onEnd(d), !(this.ended = !0);
          I.next_out && (I.avail_out !== 0 && d !== l.Z_STREAM_END && (I.avail_in !== 0 || v !== l.Z_FINISH && v !== l.Z_SYNC_FLUSH) || (this.options.to === "string" ? (S = i.utf8border(I.output, I.next_out), A = I.next_out - S, T = i.buf2string(I.output, S), I.next_out = A, I.avail_out = Z - A, A && s.arraySet(I.output, I.output, S, A, 0), this.onData(T)) : this.onData(s.shrinkBuf(I.output, I.next_out)))), I.avail_in === 0 && I.avail_out === 0 && (H = !0);
        } while ((0 < I.avail_in || I.avail_out === 0) && d !== l.Z_STREAM_END);
        return d === l.Z_STREAM_END && (v = l.Z_FINISH), v === l.Z_FINISH ? (d = n.inflateEnd(this.strm), this.onEnd(d), this.ended = !0, d === l.Z_OK) : v !== l.Z_SYNC_FLUSH || (this.onEnd(l.Z_OK), !(I.avail_out = 0));
      }, h.prototype.onData = function(u) {
        this.chunks.push(u);
      }, h.prototype.onEnd = function(u) {
        u === l.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = s.flattenChunks(this.chunks)), this.chunks = [], this.err = u, this.msg = this.strm.msg;
      }, c.Inflate = h, c.inflate = y, c.inflateRaw = function(u, m) {
        return (m = m || {}).raw = !0, y(u, m);
      }, c.ungzip = y;
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/constants": 44, "./zlib/gzheader": 47, "./zlib/inflate": 49, "./zlib/messages": 51, "./zlib/zstream": 53 }], 41: [function(r, f, c) {
      var n = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
      c.assign = function(l) {
        for (var _ = Array.prototype.slice.call(arguments, 1); _.length; ) {
          var k = _.shift();
          if (k) {
            if (typeof k != "object") throw new TypeError(k + "must be non-object");
            for (var b in k) k.hasOwnProperty(b) && (l[b] = k[b]);
          }
        }
        return l;
      }, c.shrinkBuf = function(l, _) {
        return l.length === _ ? l : l.subarray ? l.subarray(0, _) : (l.length = _, l);
      };
      var s = { arraySet: function(l, _, k, b, w) {
        if (_.subarray && l.subarray) l.set(_.subarray(k, k + b), w);
        else for (var h = 0; h < b; h++) l[w + h] = _[k + h];
      }, flattenChunks: function(l) {
        var _, k, b, w, h, y;
        for (_ = b = 0, k = l.length; _ < k; _++) b += l[_].length;
        for (y = new Uint8Array(b), _ = w = 0, k = l.length; _ < k; _++) h = l[_], y.set(h, w), w += h.length;
        return y;
      } }, i = { arraySet: function(l, _, k, b, w) {
        for (var h = 0; h < b; h++) l[w + h] = _[k + h];
      }, flattenChunks: function(l) {
        return [].concat.apply([], l);
      } };
      c.setTyped = function(l) {
        l ? (c.Buf8 = Uint8Array, c.Buf16 = Uint16Array, c.Buf32 = Int32Array, c.assign(c, s)) : (c.Buf8 = Array, c.Buf16 = Array, c.Buf32 = Array, c.assign(c, i));
      }, c.setTyped(n);
    }, {}], 42: [function(r, f, c) {
      var n = r("./common"), s = !0, i = !0;
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
      for (var l = new n.Buf8(256), _ = 0; _ < 256; _++) l[_] = 252 <= _ ? 6 : 248 <= _ ? 5 : 240 <= _ ? 4 : 224 <= _ ? 3 : 192 <= _ ? 2 : 1;
      function k(b, w) {
        if (w < 65537 && (b.subarray && i || !b.subarray && s)) return String.fromCharCode.apply(null, n.shrinkBuf(b, w));
        for (var h = "", y = 0; y < w; y++) h += String.fromCharCode(b[y]);
        return h;
      }
      l[254] = l[254] = 1, c.string2buf = function(b) {
        var w, h, y, u, m, d = b.length, v = 0;
        for (u = 0; u < d; u++) (64512 & (h = b.charCodeAt(u))) == 55296 && u + 1 < d && (64512 & (y = b.charCodeAt(u + 1))) == 56320 && (h = 65536 + (h - 55296 << 10) + (y - 56320), u++), v += h < 128 ? 1 : h < 2048 ? 2 : h < 65536 ? 3 : 4;
        for (w = new n.Buf8(v), u = m = 0; m < v; u++) (64512 & (h = b.charCodeAt(u))) == 55296 && u + 1 < d && (64512 & (y = b.charCodeAt(u + 1))) == 56320 && (h = 65536 + (h - 55296 << 10) + (y - 56320), u++), h < 128 ? w[m++] = h : (h < 2048 ? w[m++] = 192 | h >>> 6 : (h < 65536 ? w[m++] = 224 | h >>> 12 : (w[m++] = 240 | h >>> 18, w[m++] = 128 | h >>> 12 & 63), w[m++] = 128 | h >>> 6 & 63), w[m++] = 128 | 63 & h);
        return w;
      }, c.buf2binstring = function(b) {
        return k(b, b.length);
      }, c.binstring2buf = function(b) {
        for (var w = new n.Buf8(b.length), h = 0, y = w.length; h < y; h++) w[h] = b.charCodeAt(h);
        return w;
      }, c.buf2string = function(b, w) {
        var h, y, u, m, d = w || b.length, v = new Array(2 * d);
        for (h = y = 0; h < d; ) if ((u = b[h++]) < 128) v[y++] = u;
        else if (4 < (m = l[u])) v[y++] = 65533, h += m - 1;
        else {
          for (u &= m === 2 ? 31 : m === 3 ? 15 : 7; 1 < m && h < d; ) u = u << 6 | 63 & b[h++], m--;
          1 < m ? v[y++] = 65533 : u < 65536 ? v[y++] = u : (u -= 65536, v[y++] = 55296 | u >> 10 & 1023, v[y++] = 56320 | 1023 & u);
        }
        return k(v, y);
      }, c.utf8border = function(b, w) {
        var h;
        for ((w = w || b.length) > b.length && (w = b.length), h = w - 1; 0 <= h && (192 & b[h]) == 128; ) h--;
        return h < 0 || h === 0 ? w : h + l[b[h]] > w ? h : w;
      };
    }, { "./common": 41 }], 43: [function(r, f, c) {
      f.exports = function(n, s, i, l) {
        for (var _ = 65535 & n | 0, k = n >>> 16 & 65535 | 0, b = 0; i !== 0; ) {
          for (i -= b = 2e3 < i ? 2e3 : i; k = k + (_ = _ + s[l++] | 0) | 0, --b; ) ;
          _ %= 65521, k %= 65521;
        }
        return _ | k << 16 | 0;
      };
    }, {}], 44: [function(r, f, c) {
      f.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
    }, {}], 45: [function(r, f, c) {
      var n = function() {
        for (var s, i = [], l = 0; l < 256; l++) {
          s = l;
          for (var _ = 0; _ < 8; _++) s = 1 & s ? 3988292384 ^ s >>> 1 : s >>> 1;
          i[l] = s;
        }
        return i;
      }();
      f.exports = function(s, i, l, _) {
        var k = n, b = _ + l;
        s ^= -1;
        for (var w = _; w < b; w++) s = s >>> 8 ^ k[255 & (s ^ i[w])];
        return -1 ^ s;
      };
    }, {}], 46: [function(r, f, c) {
      var n, s = r("../utils/common"), i = r("./trees"), l = r("./adler32"), _ = r("./crc32"), k = r("./messages"), b = 0, w = 4, h = 0, y = -2, u = -1, m = 4, d = 2, v = 8, S = 9, A = 286, T = 30, L = 19, I = 2 * A + 1, Z = 15, P = 3, H = 258, it = H + P + 1, E = 42, D = 113, a = 1, U = 2, lt = 3, V = 4;
      function ht(e, B) {
        return e.msg = k[B], B;
      }
      function X(e) {
        return (e << 1) - (4 < e ? 9 : 0);
      }
      function nt(e) {
        for (var B = e.length; 0 <= --B; ) e[B] = 0;
      }
      function j(e) {
        var B = e.state, N = B.pending;
        N > e.avail_out && (N = e.avail_out), N !== 0 && (s.arraySet(e.output, B.pending_buf, B.pending_out, N, e.next_out), e.next_out += N, B.pending_out += N, e.total_out += N, e.avail_out -= N, B.pending -= N, B.pending === 0 && (B.pending_out = 0));
      }
      function z(e, B) {
        i._tr_flush_block(e, 0 <= e.block_start ? e.block_start : -1, e.strstart - e.block_start, B), e.block_start = e.strstart, j(e.strm);
      }
      function rt(e, B) {
        e.pending_buf[e.pending++] = B;
      }
      function et(e, B) {
        e.pending_buf[e.pending++] = B >>> 8 & 255, e.pending_buf[e.pending++] = 255 & B;
      }
      function J(e, B) {
        var N, g, p = e.max_chain_length, C = e.strstart, W = e.prev_length, $ = e.nice_match, O = e.strstart > e.w_size - it ? e.strstart - (e.w_size - it) : 0, K = e.window, Q = e.w_mask, q = e.prev, at = e.strstart + H, mt = K[C + W - 1], ft = K[C + W];
        e.prev_length >= e.good_match && (p >>= 2), $ > e.lookahead && ($ = e.lookahead);
        do
          if (K[(N = B) + W] === ft && K[N + W - 1] === mt && K[N] === K[C] && K[++N] === K[C + 1]) {
            C += 2, N++;
            do
              ;
            while (K[++C] === K[++N] && K[++C] === K[++N] && K[++C] === K[++N] && K[++C] === K[++N] && K[++C] === K[++N] && K[++C] === K[++N] && K[++C] === K[++N] && K[++C] === K[++N] && C < at);
            if (g = H - (at - C), C = at - H, W < g) {
              if (e.match_start = B, $ <= (W = g)) break;
              mt = K[C + W - 1], ft = K[C + W];
            }
          }
        while ((B = q[B & Q]) > O && --p != 0);
        return W <= e.lookahead ? W : e.lookahead;
      }
      function xt(e) {
        var B, N, g, p, C, W, $, O, K, Q, q = e.w_size;
        do {
          if (p = e.window_size - e.lookahead - e.strstart, e.strstart >= q + (q - it)) {
            for (s.arraySet(e.window, e.window, q, q, 0), e.match_start -= q, e.strstart -= q, e.block_start -= q, B = N = e.hash_size; g = e.head[--B], e.head[B] = q <= g ? g - q : 0, --N; ) ;
            for (B = N = q; g = e.prev[--B], e.prev[B] = q <= g ? g - q : 0, --N; ) ;
            p += q;
          }
          if (e.strm.avail_in === 0) break;
          if (W = e.strm, $ = e.window, O = e.strstart + e.lookahead, K = p, Q = void 0, Q = W.avail_in, K < Q && (Q = K), N = Q === 0 ? 0 : (W.avail_in -= Q, s.arraySet($, W.input, W.next_in, Q, O), W.state.wrap === 1 ? W.adler = l(W.adler, $, Q, O) : W.state.wrap === 2 && (W.adler = _(W.adler, $, Q, O)), W.next_in += Q, W.total_in += Q, Q), e.lookahead += N, e.lookahead + e.insert >= P) for (C = e.strstart - e.insert, e.ins_h = e.window[C], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[C + 1]) & e.hash_mask; e.insert && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[C + P - 1]) & e.hash_mask, e.prev[C & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = C, C++, e.insert--, !(e.lookahead + e.insert < P)); ) ;
        } while (e.lookahead < it && e.strm.avail_in !== 0);
      }
      function Ct(e, B) {
        for (var N, g; ; ) {
          if (e.lookahead < it) {
            if (xt(e), e.lookahead < it && B === b) return a;
            if (e.lookahead === 0) break;
          }
          if (N = 0, e.lookahead >= P && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + P - 1]) & e.hash_mask, N = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), N !== 0 && e.strstart - N <= e.w_size - it && (e.match_length = J(e, N)), e.match_length >= P) if (g = i._tr_tally(e, e.strstart - e.match_start, e.match_length - P), e.lookahead -= e.match_length, e.match_length <= e.max_lazy_match && e.lookahead >= P) {
            for (e.match_length--; e.strstart++, e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + P - 1]) & e.hash_mask, N = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart, --e.match_length != 0; ) ;
            e.strstart++;
          } else e.strstart += e.match_length, e.match_length = 0, e.ins_h = e.window[e.strstart], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 1]) & e.hash_mask;
          else g = i._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++;
          if (g && (z(e, !1), e.strm.avail_out === 0)) return a;
        }
        return e.insert = e.strstart < P - 1 ? e.strstart : P - 1, B === w ? (z(e, !0), e.strm.avail_out === 0 ? lt : V) : e.last_lit && (z(e, !1), e.strm.avail_out === 0) ? a : U;
      }
      function ut(e, B) {
        for (var N, g, p; ; ) {
          if (e.lookahead < it) {
            if (xt(e), e.lookahead < it && B === b) return a;
            if (e.lookahead === 0) break;
          }
          if (N = 0, e.lookahead >= P && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + P - 1]) & e.hash_mask, N = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), e.prev_length = e.match_length, e.prev_match = e.match_start, e.match_length = P - 1, N !== 0 && e.prev_length < e.max_lazy_match && e.strstart - N <= e.w_size - it && (e.match_length = J(e, N), e.match_length <= 5 && (e.strategy === 1 || e.match_length === P && 4096 < e.strstart - e.match_start) && (e.match_length = P - 1)), e.prev_length >= P && e.match_length <= e.prev_length) {
            for (p = e.strstart + e.lookahead - P, g = i._tr_tally(e, e.strstart - 1 - e.prev_match, e.prev_length - P), e.lookahead -= e.prev_length - 1, e.prev_length -= 2; ++e.strstart <= p && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + P - 1]) & e.hash_mask, N = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), --e.prev_length != 0; ) ;
            if (e.match_available = 0, e.match_length = P - 1, e.strstart++, g && (z(e, !1), e.strm.avail_out === 0)) return a;
          } else if (e.match_available) {
            if ((g = i._tr_tally(e, 0, e.window[e.strstart - 1])) && z(e, !1), e.strstart++, e.lookahead--, e.strm.avail_out === 0) return a;
          } else e.match_available = 1, e.strstart++, e.lookahead--;
        }
        return e.match_available && (g = i._tr_tally(e, 0, e.window[e.strstart - 1]), e.match_available = 0), e.insert = e.strstart < P - 1 ? e.strstart : P - 1, B === w ? (z(e, !0), e.strm.avail_out === 0 ? lt : V) : e.last_lit && (z(e, !1), e.strm.avail_out === 0) ? a : U;
      }
      function pt(e, B, N, g, p) {
        this.good_length = e, this.max_lazy = B, this.nice_length = N, this.max_chain = g, this.func = p;
      }
      function St() {
        this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = v, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new s.Buf16(2 * I), this.dyn_dtree = new s.Buf16(2 * (2 * T + 1)), this.bl_tree = new s.Buf16(2 * (2 * L + 1)), nt(this.dyn_ltree), nt(this.dyn_dtree), nt(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new s.Buf16(Z + 1), this.heap = new s.Buf16(2 * A + 1), nt(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new s.Buf16(2 * A + 1), nt(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
      }
      function _t(e) {
        var B;
        return e && e.state ? (e.total_in = e.total_out = 0, e.data_type = d, (B = e.state).pending = 0, B.pending_out = 0, B.wrap < 0 && (B.wrap = -B.wrap), B.status = B.wrap ? E : D, e.adler = B.wrap === 2 ? 0 : 1, B.last_flush = b, i._tr_init(B), h) : ht(e, y);
      }
      function At(e) {
        var B = _t(e);
        return B === h && function(N) {
          N.window_size = 2 * N.w_size, nt(N.head), N.max_lazy_match = n[N.level].max_lazy, N.good_match = n[N.level].good_length, N.nice_match = n[N.level].nice_length, N.max_chain_length = n[N.level].max_chain, N.strstart = 0, N.block_start = 0, N.lookahead = 0, N.insert = 0, N.match_length = N.prev_length = P - 1, N.match_available = 0, N.ins_h = 0;
        }(e.state), B;
      }
      function kt(e, B, N, g, p, C) {
        if (!e) return y;
        var W = 1;
        if (B === u && (B = 6), g < 0 ? (W = 0, g = -g) : 15 < g && (W = 2, g -= 16), p < 1 || S < p || N !== v || g < 8 || 15 < g || B < 0 || 9 < B || C < 0 || m < C) return ht(e, y);
        g === 8 && (g = 9);
        var $ = new St();
        return (e.state = $).strm = e, $.wrap = W, $.gzhead = null, $.w_bits = g, $.w_size = 1 << $.w_bits, $.w_mask = $.w_size - 1, $.hash_bits = p + 7, $.hash_size = 1 << $.hash_bits, $.hash_mask = $.hash_size - 1, $.hash_shift = ~~(($.hash_bits + P - 1) / P), $.window = new s.Buf8(2 * $.w_size), $.head = new s.Buf16($.hash_size), $.prev = new s.Buf16($.w_size), $.lit_bufsize = 1 << p + 6, $.pending_buf_size = 4 * $.lit_bufsize, $.pending_buf = new s.Buf8($.pending_buf_size), $.d_buf = 1 * $.lit_bufsize, $.l_buf = 3 * $.lit_bufsize, $.level = B, $.strategy = C, $.method = N, At(e);
      }
      n = [new pt(0, 0, 0, 0, function(e, B) {
        var N = 65535;
        for (N > e.pending_buf_size - 5 && (N = e.pending_buf_size - 5); ; ) {
          if (e.lookahead <= 1) {
            if (xt(e), e.lookahead === 0 && B === b) return a;
            if (e.lookahead === 0) break;
          }
          e.strstart += e.lookahead, e.lookahead = 0;
          var g = e.block_start + N;
          if ((e.strstart === 0 || e.strstart >= g) && (e.lookahead = e.strstart - g, e.strstart = g, z(e, !1), e.strm.avail_out === 0) || e.strstart - e.block_start >= e.w_size - it && (z(e, !1), e.strm.avail_out === 0)) return a;
        }
        return e.insert = 0, B === w ? (z(e, !0), e.strm.avail_out === 0 ? lt : V) : (e.strstart > e.block_start && (z(e, !1), e.strm.avail_out), a);
      }), new pt(4, 4, 8, 4, Ct), new pt(4, 5, 16, 8, Ct), new pt(4, 6, 32, 32, Ct), new pt(4, 4, 16, 16, ut), new pt(8, 16, 32, 32, ut), new pt(8, 16, 128, 128, ut), new pt(8, 32, 128, 256, ut), new pt(32, 128, 258, 1024, ut), new pt(32, 258, 258, 4096, ut)], c.deflateInit = function(e, B) {
        return kt(e, B, v, 15, 8, 0);
      }, c.deflateInit2 = kt, c.deflateReset = At, c.deflateResetKeep = _t, c.deflateSetHeader = function(e, B) {
        return e && e.state ? e.state.wrap !== 2 ? y : (e.state.gzhead = B, h) : y;
      }, c.deflate = function(e, B) {
        var N, g, p, C;
        if (!e || !e.state || 5 < B || B < 0) return e ? ht(e, y) : y;
        if (g = e.state, !e.output || !e.input && e.avail_in !== 0 || g.status === 666 && B !== w) return ht(e, e.avail_out === 0 ? -5 : y);
        if (g.strm = e, N = g.last_flush, g.last_flush = B, g.status === E) if (g.wrap === 2) e.adler = 0, rt(g, 31), rt(g, 139), rt(g, 8), g.gzhead ? (rt(g, (g.gzhead.text ? 1 : 0) + (g.gzhead.hcrc ? 2 : 0) + (g.gzhead.extra ? 4 : 0) + (g.gzhead.name ? 8 : 0) + (g.gzhead.comment ? 16 : 0)), rt(g, 255 & g.gzhead.time), rt(g, g.gzhead.time >> 8 & 255), rt(g, g.gzhead.time >> 16 & 255), rt(g, g.gzhead.time >> 24 & 255), rt(g, g.level === 9 ? 2 : 2 <= g.strategy || g.level < 2 ? 4 : 0), rt(g, 255 & g.gzhead.os), g.gzhead.extra && g.gzhead.extra.length && (rt(g, 255 & g.gzhead.extra.length), rt(g, g.gzhead.extra.length >> 8 & 255)), g.gzhead.hcrc && (e.adler = _(e.adler, g.pending_buf, g.pending, 0)), g.gzindex = 0, g.status = 69) : (rt(g, 0), rt(g, 0), rt(g, 0), rt(g, 0), rt(g, 0), rt(g, g.level === 9 ? 2 : 2 <= g.strategy || g.level < 2 ? 4 : 0), rt(g, 3), g.status = D);
        else {
          var W = v + (g.w_bits - 8 << 4) << 8;
          W |= (2 <= g.strategy || g.level < 2 ? 0 : g.level < 6 ? 1 : g.level === 6 ? 2 : 3) << 6, g.strstart !== 0 && (W |= 32), W += 31 - W % 31, g.status = D, et(g, W), g.strstart !== 0 && (et(g, e.adler >>> 16), et(g, 65535 & e.adler)), e.adler = 1;
        }
        if (g.status === 69) if (g.gzhead.extra) {
          for (p = g.pending; g.gzindex < (65535 & g.gzhead.extra.length) && (g.pending !== g.pending_buf_size || (g.gzhead.hcrc && g.pending > p && (e.adler = _(e.adler, g.pending_buf, g.pending - p, p)), j(e), p = g.pending, g.pending !== g.pending_buf_size)); ) rt(g, 255 & g.gzhead.extra[g.gzindex]), g.gzindex++;
          g.gzhead.hcrc && g.pending > p && (e.adler = _(e.adler, g.pending_buf, g.pending - p, p)), g.gzindex === g.gzhead.extra.length && (g.gzindex = 0, g.status = 73);
        } else g.status = 73;
        if (g.status === 73) if (g.gzhead.name) {
          p = g.pending;
          do {
            if (g.pending === g.pending_buf_size && (g.gzhead.hcrc && g.pending > p && (e.adler = _(e.adler, g.pending_buf, g.pending - p, p)), j(e), p = g.pending, g.pending === g.pending_buf_size)) {
              C = 1;
              break;
            }
            C = g.gzindex < g.gzhead.name.length ? 255 & g.gzhead.name.charCodeAt(g.gzindex++) : 0, rt(g, C);
          } while (C !== 0);
          g.gzhead.hcrc && g.pending > p && (e.adler = _(e.adler, g.pending_buf, g.pending - p, p)), C === 0 && (g.gzindex = 0, g.status = 91);
        } else g.status = 91;
        if (g.status === 91) if (g.gzhead.comment) {
          p = g.pending;
          do {
            if (g.pending === g.pending_buf_size && (g.gzhead.hcrc && g.pending > p && (e.adler = _(e.adler, g.pending_buf, g.pending - p, p)), j(e), p = g.pending, g.pending === g.pending_buf_size)) {
              C = 1;
              break;
            }
            C = g.gzindex < g.gzhead.comment.length ? 255 & g.gzhead.comment.charCodeAt(g.gzindex++) : 0, rt(g, C);
          } while (C !== 0);
          g.gzhead.hcrc && g.pending > p && (e.adler = _(e.adler, g.pending_buf, g.pending - p, p)), C === 0 && (g.status = 103);
        } else g.status = 103;
        if (g.status === 103 && (g.gzhead.hcrc ? (g.pending + 2 > g.pending_buf_size && j(e), g.pending + 2 <= g.pending_buf_size && (rt(g, 255 & e.adler), rt(g, e.adler >> 8 & 255), e.adler = 0, g.status = D)) : g.status = D), g.pending !== 0) {
          if (j(e), e.avail_out === 0) return g.last_flush = -1, h;
        } else if (e.avail_in === 0 && X(B) <= X(N) && B !== w) return ht(e, -5);
        if (g.status === 666 && e.avail_in !== 0) return ht(e, -5);
        if (e.avail_in !== 0 || g.lookahead !== 0 || B !== b && g.status !== 666) {
          var $ = g.strategy === 2 ? function(O, K) {
            for (var Q; ; ) {
              if (O.lookahead === 0 && (xt(O), O.lookahead === 0)) {
                if (K === b) return a;
                break;
              }
              if (O.match_length = 0, Q = i._tr_tally(O, 0, O.window[O.strstart]), O.lookahead--, O.strstart++, Q && (z(O, !1), O.strm.avail_out === 0)) return a;
            }
            return O.insert = 0, K === w ? (z(O, !0), O.strm.avail_out === 0 ? lt : V) : O.last_lit && (z(O, !1), O.strm.avail_out === 0) ? a : U;
          }(g, B) : g.strategy === 3 ? function(O, K) {
            for (var Q, q, at, mt, ft = O.window; ; ) {
              if (O.lookahead <= H) {
                if (xt(O), O.lookahead <= H && K === b) return a;
                if (O.lookahead === 0) break;
              }
              if (O.match_length = 0, O.lookahead >= P && 0 < O.strstart && (q = ft[at = O.strstart - 1]) === ft[++at] && q === ft[++at] && q === ft[++at]) {
                mt = O.strstart + H;
                do
                  ;
                while (q === ft[++at] && q === ft[++at] && q === ft[++at] && q === ft[++at] && q === ft[++at] && q === ft[++at] && q === ft[++at] && q === ft[++at] && at < mt);
                O.match_length = H - (mt - at), O.match_length > O.lookahead && (O.match_length = O.lookahead);
              }
              if (O.match_length >= P ? (Q = i._tr_tally(O, 1, O.match_length - P), O.lookahead -= O.match_length, O.strstart += O.match_length, O.match_length = 0) : (Q = i._tr_tally(O, 0, O.window[O.strstart]), O.lookahead--, O.strstart++), Q && (z(O, !1), O.strm.avail_out === 0)) return a;
            }
            return O.insert = 0, K === w ? (z(O, !0), O.strm.avail_out === 0 ? lt : V) : O.last_lit && (z(O, !1), O.strm.avail_out === 0) ? a : U;
          }(g, B) : n[g.level].func(g, B);
          if ($ !== lt && $ !== V || (g.status = 666), $ === a || $ === lt) return e.avail_out === 0 && (g.last_flush = -1), h;
          if ($ === U && (B === 1 ? i._tr_align(g) : B !== 5 && (i._tr_stored_block(g, 0, 0, !1), B === 3 && (nt(g.head), g.lookahead === 0 && (g.strstart = 0, g.block_start = 0, g.insert = 0))), j(e), e.avail_out === 0)) return g.last_flush = -1, h;
        }
        return B !== w ? h : g.wrap <= 0 ? 1 : (g.wrap === 2 ? (rt(g, 255 & e.adler), rt(g, e.adler >> 8 & 255), rt(g, e.adler >> 16 & 255), rt(g, e.adler >> 24 & 255), rt(g, 255 & e.total_in), rt(g, e.total_in >> 8 & 255), rt(g, e.total_in >> 16 & 255), rt(g, e.total_in >> 24 & 255)) : (et(g, e.adler >>> 16), et(g, 65535 & e.adler)), j(e), 0 < g.wrap && (g.wrap = -g.wrap), g.pending !== 0 ? h : 1);
      }, c.deflateEnd = function(e) {
        var B;
        return e && e.state ? (B = e.state.status) !== E && B !== 69 && B !== 73 && B !== 91 && B !== 103 && B !== D && B !== 666 ? ht(e, y) : (e.state = null, B === D ? ht(e, -3) : h) : y;
      }, c.deflateSetDictionary = function(e, B) {
        var N, g, p, C, W, $, O, K, Q = B.length;
        if (!e || !e.state || (C = (N = e.state).wrap) === 2 || C === 1 && N.status !== E || N.lookahead) return y;
        for (C === 1 && (e.adler = l(e.adler, B, Q, 0)), N.wrap = 0, Q >= N.w_size && (C === 0 && (nt(N.head), N.strstart = 0, N.block_start = 0, N.insert = 0), K = new s.Buf8(N.w_size), s.arraySet(K, B, Q - N.w_size, N.w_size, 0), B = K, Q = N.w_size), W = e.avail_in, $ = e.next_in, O = e.input, e.avail_in = Q, e.next_in = 0, e.input = B, xt(N); N.lookahead >= P; ) {
          for (g = N.strstart, p = N.lookahead - (P - 1); N.ins_h = (N.ins_h << N.hash_shift ^ N.window[g + P - 1]) & N.hash_mask, N.prev[g & N.w_mask] = N.head[N.ins_h], N.head[N.ins_h] = g, g++, --p; ) ;
          N.strstart = g, N.lookahead = P - 1, xt(N);
        }
        return N.strstart += N.lookahead, N.block_start = N.strstart, N.insert = N.lookahead, N.lookahead = 0, N.match_length = N.prev_length = P - 1, N.match_available = 0, e.next_in = $, e.input = O, e.avail_in = W, N.wrap = C, h;
      }, c.deflateInfo = "pako deflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(r, f, c) {
      f.exports = function() {
        this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
      };
    }, {}], 48: [function(r, f, c) {
      f.exports = function(n, s) {
        var i, l, _, k, b, w, h, y, u, m, d, v, S, A, T, L, I, Z, P, H, it, E, D, a, U;
        i = n.state, l = n.next_in, a = n.input, _ = l + (n.avail_in - 5), k = n.next_out, U = n.output, b = k - (s - n.avail_out), w = k + (n.avail_out - 257), h = i.dmax, y = i.wsize, u = i.whave, m = i.wnext, d = i.window, v = i.hold, S = i.bits, A = i.lencode, T = i.distcode, L = (1 << i.lenbits) - 1, I = (1 << i.distbits) - 1;
        t: do {
          S < 15 && (v += a[l++] << S, S += 8, v += a[l++] << S, S += 8), Z = A[v & L];
          e: for (; ; ) {
            if (v >>>= P = Z >>> 24, S -= P, (P = Z >>> 16 & 255) === 0) U[k++] = 65535 & Z;
            else {
              if (!(16 & P)) {
                if (!(64 & P)) {
                  Z = A[(65535 & Z) + (v & (1 << P) - 1)];
                  continue e;
                }
                if (32 & P) {
                  i.mode = 12;
                  break t;
                }
                n.msg = "invalid literal/length code", i.mode = 30;
                break t;
              }
              H = 65535 & Z, (P &= 15) && (S < P && (v += a[l++] << S, S += 8), H += v & (1 << P) - 1, v >>>= P, S -= P), S < 15 && (v += a[l++] << S, S += 8, v += a[l++] << S, S += 8), Z = T[v & I];
              r: for (; ; ) {
                if (v >>>= P = Z >>> 24, S -= P, !(16 & (P = Z >>> 16 & 255))) {
                  if (!(64 & P)) {
                    Z = T[(65535 & Z) + (v & (1 << P) - 1)];
                    continue r;
                  }
                  n.msg = "invalid distance code", i.mode = 30;
                  break t;
                }
                if (it = 65535 & Z, S < (P &= 15) && (v += a[l++] << S, (S += 8) < P && (v += a[l++] << S, S += 8)), h < (it += v & (1 << P) - 1)) {
                  n.msg = "invalid distance too far back", i.mode = 30;
                  break t;
                }
                if (v >>>= P, S -= P, (P = k - b) < it) {
                  if (u < (P = it - P) && i.sane) {
                    n.msg = "invalid distance too far back", i.mode = 30;
                    break t;
                  }
                  if (D = d, (E = 0) === m) {
                    if (E += y - P, P < H) {
                      for (H -= P; U[k++] = d[E++], --P; ) ;
                      E = k - it, D = U;
                    }
                  } else if (m < P) {
                    if (E += y + m - P, (P -= m) < H) {
                      for (H -= P; U[k++] = d[E++], --P; ) ;
                      if (E = 0, m < H) {
                        for (H -= P = m; U[k++] = d[E++], --P; ) ;
                        E = k - it, D = U;
                      }
                    }
                  } else if (E += m - P, P < H) {
                    for (H -= P; U[k++] = d[E++], --P; ) ;
                    E = k - it, D = U;
                  }
                  for (; 2 < H; ) U[k++] = D[E++], U[k++] = D[E++], U[k++] = D[E++], H -= 3;
                  H && (U[k++] = D[E++], 1 < H && (U[k++] = D[E++]));
                } else {
                  for (E = k - it; U[k++] = U[E++], U[k++] = U[E++], U[k++] = U[E++], 2 < (H -= 3); ) ;
                  H && (U[k++] = U[E++], 1 < H && (U[k++] = U[E++]));
                }
                break;
              }
            }
            break;
          }
        } while (l < _ && k < w);
        l -= H = S >> 3, v &= (1 << (S -= H << 3)) - 1, n.next_in = l, n.next_out = k, n.avail_in = l < _ ? _ - l + 5 : 5 - (l - _), n.avail_out = k < w ? w - k + 257 : 257 - (k - w), i.hold = v, i.bits = S;
      };
    }, {}], 49: [function(r, f, c) {
      var n = r("../utils/common"), s = r("./adler32"), i = r("./crc32"), l = r("./inffast"), _ = r("./inftrees"), k = 1, b = 2, w = 0, h = -2, y = 1, u = 852, m = 592;
      function d(E) {
        return (E >>> 24 & 255) + (E >>> 8 & 65280) + ((65280 & E) << 8) + ((255 & E) << 24);
      }
      function v() {
        this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new n.Buf16(320), this.work = new n.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
      }
      function S(E) {
        var D;
        return E && E.state ? (D = E.state, E.total_in = E.total_out = D.total = 0, E.msg = "", D.wrap && (E.adler = 1 & D.wrap), D.mode = y, D.last = 0, D.havedict = 0, D.dmax = 32768, D.head = null, D.hold = 0, D.bits = 0, D.lencode = D.lendyn = new n.Buf32(u), D.distcode = D.distdyn = new n.Buf32(m), D.sane = 1, D.back = -1, w) : h;
      }
      function A(E) {
        var D;
        return E && E.state ? ((D = E.state).wsize = 0, D.whave = 0, D.wnext = 0, S(E)) : h;
      }
      function T(E, D) {
        var a, U;
        return E && E.state ? (U = E.state, D < 0 ? (a = 0, D = -D) : (a = 1 + (D >> 4), D < 48 && (D &= 15)), D && (D < 8 || 15 < D) ? h : (U.window !== null && U.wbits !== D && (U.window = null), U.wrap = a, U.wbits = D, A(E))) : h;
      }
      function L(E, D) {
        var a, U;
        return E ? (U = new v(), (E.state = U).window = null, (a = T(E, D)) !== w && (E.state = null), a) : h;
      }
      var I, Z, P = !0;
      function H(E) {
        if (P) {
          var D;
          for (I = new n.Buf32(512), Z = new n.Buf32(32), D = 0; D < 144; ) E.lens[D++] = 8;
          for (; D < 256; ) E.lens[D++] = 9;
          for (; D < 280; ) E.lens[D++] = 7;
          for (; D < 288; ) E.lens[D++] = 8;
          for (_(k, E.lens, 0, 288, I, 0, E.work, { bits: 9 }), D = 0; D < 32; ) E.lens[D++] = 5;
          _(b, E.lens, 0, 32, Z, 0, E.work, { bits: 5 }), P = !1;
        }
        E.lencode = I, E.lenbits = 9, E.distcode = Z, E.distbits = 5;
      }
      function it(E, D, a, U) {
        var lt, V = E.state;
        return V.window === null && (V.wsize = 1 << V.wbits, V.wnext = 0, V.whave = 0, V.window = new n.Buf8(V.wsize)), U >= V.wsize ? (n.arraySet(V.window, D, a - V.wsize, V.wsize, 0), V.wnext = 0, V.whave = V.wsize) : (U < (lt = V.wsize - V.wnext) && (lt = U), n.arraySet(V.window, D, a - U, lt, V.wnext), (U -= lt) ? (n.arraySet(V.window, D, a - U, U, 0), V.wnext = U, V.whave = V.wsize) : (V.wnext += lt, V.wnext === V.wsize && (V.wnext = 0), V.whave < V.wsize && (V.whave += lt))), 0;
      }
      c.inflateReset = A, c.inflateReset2 = T, c.inflateResetKeep = S, c.inflateInit = function(E) {
        return L(E, 15);
      }, c.inflateInit2 = L, c.inflate = function(E, D) {
        var a, U, lt, V, ht, X, nt, j, z, rt, et, J, xt, Ct, ut, pt, St, _t, At, kt, e, B, N, g, p = 0, C = new n.Buf8(4), W = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
        if (!E || !E.state || !E.output || !E.input && E.avail_in !== 0) return h;
        (a = E.state).mode === 12 && (a.mode = 13), ht = E.next_out, lt = E.output, nt = E.avail_out, V = E.next_in, U = E.input, X = E.avail_in, j = a.hold, z = a.bits, rt = X, et = nt, B = w;
        t: for (; ; ) switch (a.mode) {
          case y:
            if (a.wrap === 0) {
              a.mode = 13;
              break;
            }
            for (; z < 16; ) {
              if (X === 0) break t;
              X--, j += U[V++] << z, z += 8;
            }
            if (2 & a.wrap && j === 35615) {
              C[a.check = 0] = 255 & j, C[1] = j >>> 8 & 255, a.check = i(a.check, C, 2, 0), z = j = 0, a.mode = 2;
              break;
            }
            if (a.flags = 0, a.head && (a.head.done = !1), !(1 & a.wrap) || (((255 & j) << 8) + (j >> 8)) % 31) {
              E.msg = "incorrect header check", a.mode = 30;
              break;
            }
            if ((15 & j) != 8) {
              E.msg = "unknown compression method", a.mode = 30;
              break;
            }
            if (z -= 4, e = 8 + (15 & (j >>>= 4)), a.wbits === 0) a.wbits = e;
            else if (e > a.wbits) {
              E.msg = "invalid window size", a.mode = 30;
              break;
            }
            a.dmax = 1 << e, E.adler = a.check = 1, a.mode = 512 & j ? 10 : 12, z = j = 0;
            break;
          case 2:
            for (; z < 16; ) {
              if (X === 0) break t;
              X--, j += U[V++] << z, z += 8;
            }
            if (a.flags = j, (255 & a.flags) != 8) {
              E.msg = "unknown compression method", a.mode = 30;
              break;
            }
            if (57344 & a.flags) {
              E.msg = "unknown header flags set", a.mode = 30;
              break;
            }
            a.head && (a.head.text = j >> 8 & 1), 512 & a.flags && (C[0] = 255 & j, C[1] = j >>> 8 & 255, a.check = i(a.check, C, 2, 0)), z = j = 0, a.mode = 3;
          case 3:
            for (; z < 32; ) {
              if (X === 0) break t;
              X--, j += U[V++] << z, z += 8;
            }
            a.head && (a.head.time = j), 512 & a.flags && (C[0] = 255 & j, C[1] = j >>> 8 & 255, C[2] = j >>> 16 & 255, C[3] = j >>> 24 & 255, a.check = i(a.check, C, 4, 0)), z = j = 0, a.mode = 4;
          case 4:
            for (; z < 16; ) {
              if (X === 0) break t;
              X--, j += U[V++] << z, z += 8;
            }
            a.head && (a.head.xflags = 255 & j, a.head.os = j >> 8), 512 & a.flags && (C[0] = 255 & j, C[1] = j >>> 8 & 255, a.check = i(a.check, C, 2, 0)), z = j = 0, a.mode = 5;
          case 5:
            if (1024 & a.flags) {
              for (; z < 16; ) {
                if (X === 0) break t;
                X--, j += U[V++] << z, z += 8;
              }
              a.length = j, a.head && (a.head.extra_len = j), 512 & a.flags && (C[0] = 255 & j, C[1] = j >>> 8 & 255, a.check = i(a.check, C, 2, 0)), z = j = 0;
            } else a.head && (a.head.extra = null);
            a.mode = 6;
          case 6:
            if (1024 & a.flags && (X < (J = a.length) && (J = X), J && (a.head && (e = a.head.extra_len - a.length, a.head.extra || (a.head.extra = new Array(a.head.extra_len)), n.arraySet(a.head.extra, U, V, J, e)), 512 & a.flags && (a.check = i(a.check, U, J, V)), X -= J, V += J, a.length -= J), a.length)) break t;
            a.length = 0, a.mode = 7;
          case 7:
            if (2048 & a.flags) {
              if (X === 0) break t;
              for (J = 0; e = U[V + J++], a.head && e && a.length < 65536 && (a.head.name += String.fromCharCode(e)), e && J < X; ) ;
              if (512 & a.flags && (a.check = i(a.check, U, J, V)), X -= J, V += J, e) break t;
            } else a.head && (a.head.name = null);
            a.length = 0, a.mode = 8;
          case 8:
            if (4096 & a.flags) {
              if (X === 0) break t;
              for (J = 0; e = U[V + J++], a.head && e && a.length < 65536 && (a.head.comment += String.fromCharCode(e)), e && J < X; ) ;
              if (512 & a.flags && (a.check = i(a.check, U, J, V)), X -= J, V += J, e) break t;
            } else a.head && (a.head.comment = null);
            a.mode = 9;
          case 9:
            if (512 & a.flags) {
              for (; z < 16; ) {
                if (X === 0) break t;
                X--, j += U[V++] << z, z += 8;
              }
              if (j !== (65535 & a.check)) {
                E.msg = "header crc mismatch", a.mode = 30;
                break;
              }
              z = j = 0;
            }
            a.head && (a.head.hcrc = a.flags >> 9 & 1, a.head.done = !0), E.adler = a.check = 0, a.mode = 12;
            break;
          case 10:
            for (; z < 32; ) {
              if (X === 0) break t;
              X--, j += U[V++] << z, z += 8;
            }
            E.adler = a.check = d(j), z = j = 0, a.mode = 11;
          case 11:
            if (a.havedict === 0) return E.next_out = ht, E.avail_out = nt, E.next_in = V, E.avail_in = X, a.hold = j, a.bits = z, 2;
            E.adler = a.check = 1, a.mode = 12;
          case 12:
            if (D === 5 || D === 6) break t;
          case 13:
            if (a.last) {
              j >>>= 7 & z, z -= 7 & z, a.mode = 27;
              break;
            }
            for (; z < 3; ) {
              if (X === 0) break t;
              X--, j += U[V++] << z, z += 8;
            }
            switch (a.last = 1 & j, z -= 1, 3 & (j >>>= 1)) {
              case 0:
                a.mode = 14;
                break;
              case 1:
                if (H(a), a.mode = 20, D !== 6) break;
                j >>>= 2, z -= 2;
                break t;
              case 2:
                a.mode = 17;
                break;
              case 3:
                E.msg = "invalid block type", a.mode = 30;
            }
            j >>>= 2, z -= 2;
            break;
          case 14:
            for (j >>>= 7 & z, z -= 7 & z; z < 32; ) {
              if (X === 0) break t;
              X--, j += U[V++] << z, z += 8;
            }
            if ((65535 & j) != (j >>> 16 ^ 65535)) {
              E.msg = "invalid stored block lengths", a.mode = 30;
              break;
            }
            if (a.length = 65535 & j, z = j = 0, a.mode = 15, D === 6) break t;
          case 15:
            a.mode = 16;
          case 16:
            if (J = a.length) {
              if (X < J && (J = X), nt < J && (J = nt), J === 0) break t;
              n.arraySet(lt, U, V, J, ht), X -= J, V += J, nt -= J, ht += J, a.length -= J;
              break;
            }
            a.mode = 12;
            break;
          case 17:
            for (; z < 14; ) {
              if (X === 0) break t;
              X--, j += U[V++] << z, z += 8;
            }
            if (a.nlen = 257 + (31 & j), j >>>= 5, z -= 5, a.ndist = 1 + (31 & j), j >>>= 5, z -= 5, a.ncode = 4 + (15 & j), j >>>= 4, z -= 4, 286 < a.nlen || 30 < a.ndist) {
              E.msg = "too many length or distance symbols", a.mode = 30;
              break;
            }
            a.have = 0, a.mode = 18;
          case 18:
            for (; a.have < a.ncode; ) {
              for (; z < 3; ) {
                if (X === 0) break t;
                X--, j += U[V++] << z, z += 8;
              }
              a.lens[W[a.have++]] = 7 & j, j >>>= 3, z -= 3;
            }
            for (; a.have < 19; ) a.lens[W[a.have++]] = 0;
            if (a.lencode = a.lendyn, a.lenbits = 7, N = { bits: a.lenbits }, B = _(0, a.lens, 0, 19, a.lencode, 0, a.work, N), a.lenbits = N.bits, B) {
              E.msg = "invalid code lengths set", a.mode = 30;
              break;
            }
            a.have = 0, a.mode = 19;
          case 19:
            for (; a.have < a.nlen + a.ndist; ) {
              for (; pt = (p = a.lencode[j & (1 << a.lenbits) - 1]) >>> 16 & 255, St = 65535 & p, !((ut = p >>> 24) <= z); ) {
                if (X === 0) break t;
                X--, j += U[V++] << z, z += 8;
              }
              if (St < 16) j >>>= ut, z -= ut, a.lens[a.have++] = St;
              else {
                if (St === 16) {
                  for (g = ut + 2; z < g; ) {
                    if (X === 0) break t;
                    X--, j += U[V++] << z, z += 8;
                  }
                  if (j >>>= ut, z -= ut, a.have === 0) {
                    E.msg = "invalid bit length repeat", a.mode = 30;
                    break;
                  }
                  e = a.lens[a.have - 1], J = 3 + (3 & j), j >>>= 2, z -= 2;
                } else if (St === 17) {
                  for (g = ut + 3; z < g; ) {
                    if (X === 0) break t;
                    X--, j += U[V++] << z, z += 8;
                  }
                  z -= ut, e = 0, J = 3 + (7 & (j >>>= ut)), j >>>= 3, z -= 3;
                } else {
                  for (g = ut + 7; z < g; ) {
                    if (X === 0) break t;
                    X--, j += U[V++] << z, z += 8;
                  }
                  z -= ut, e = 0, J = 11 + (127 & (j >>>= ut)), j >>>= 7, z -= 7;
                }
                if (a.have + J > a.nlen + a.ndist) {
                  E.msg = "invalid bit length repeat", a.mode = 30;
                  break;
                }
                for (; J--; ) a.lens[a.have++] = e;
              }
            }
            if (a.mode === 30) break;
            if (a.lens[256] === 0) {
              E.msg = "invalid code -- missing end-of-block", a.mode = 30;
              break;
            }
            if (a.lenbits = 9, N = { bits: a.lenbits }, B = _(k, a.lens, 0, a.nlen, a.lencode, 0, a.work, N), a.lenbits = N.bits, B) {
              E.msg = "invalid literal/lengths set", a.mode = 30;
              break;
            }
            if (a.distbits = 6, a.distcode = a.distdyn, N = { bits: a.distbits }, B = _(b, a.lens, a.nlen, a.ndist, a.distcode, 0, a.work, N), a.distbits = N.bits, B) {
              E.msg = "invalid distances set", a.mode = 30;
              break;
            }
            if (a.mode = 20, D === 6) break t;
          case 20:
            a.mode = 21;
          case 21:
            if (6 <= X && 258 <= nt) {
              E.next_out = ht, E.avail_out = nt, E.next_in = V, E.avail_in = X, a.hold = j, a.bits = z, l(E, et), ht = E.next_out, lt = E.output, nt = E.avail_out, V = E.next_in, U = E.input, X = E.avail_in, j = a.hold, z = a.bits, a.mode === 12 && (a.back = -1);
              break;
            }
            for (a.back = 0; pt = (p = a.lencode[j & (1 << a.lenbits) - 1]) >>> 16 & 255, St = 65535 & p, !((ut = p >>> 24) <= z); ) {
              if (X === 0) break t;
              X--, j += U[V++] << z, z += 8;
            }
            if (pt && !(240 & pt)) {
              for (_t = ut, At = pt, kt = St; pt = (p = a.lencode[kt + ((j & (1 << _t + At) - 1) >> _t)]) >>> 16 & 255, St = 65535 & p, !(_t + (ut = p >>> 24) <= z); ) {
                if (X === 0) break t;
                X--, j += U[V++] << z, z += 8;
              }
              j >>>= _t, z -= _t, a.back += _t;
            }
            if (j >>>= ut, z -= ut, a.back += ut, a.length = St, pt === 0) {
              a.mode = 26;
              break;
            }
            if (32 & pt) {
              a.back = -1, a.mode = 12;
              break;
            }
            if (64 & pt) {
              E.msg = "invalid literal/length code", a.mode = 30;
              break;
            }
            a.extra = 15 & pt, a.mode = 22;
          case 22:
            if (a.extra) {
              for (g = a.extra; z < g; ) {
                if (X === 0) break t;
                X--, j += U[V++] << z, z += 8;
              }
              a.length += j & (1 << a.extra) - 1, j >>>= a.extra, z -= a.extra, a.back += a.extra;
            }
            a.was = a.length, a.mode = 23;
          case 23:
            for (; pt = (p = a.distcode[j & (1 << a.distbits) - 1]) >>> 16 & 255, St = 65535 & p, !((ut = p >>> 24) <= z); ) {
              if (X === 0) break t;
              X--, j += U[V++] << z, z += 8;
            }
            if (!(240 & pt)) {
              for (_t = ut, At = pt, kt = St; pt = (p = a.distcode[kt + ((j & (1 << _t + At) - 1) >> _t)]) >>> 16 & 255, St = 65535 & p, !(_t + (ut = p >>> 24) <= z); ) {
                if (X === 0) break t;
                X--, j += U[V++] << z, z += 8;
              }
              j >>>= _t, z -= _t, a.back += _t;
            }
            if (j >>>= ut, z -= ut, a.back += ut, 64 & pt) {
              E.msg = "invalid distance code", a.mode = 30;
              break;
            }
            a.offset = St, a.extra = 15 & pt, a.mode = 24;
          case 24:
            if (a.extra) {
              for (g = a.extra; z < g; ) {
                if (X === 0) break t;
                X--, j += U[V++] << z, z += 8;
              }
              a.offset += j & (1 << a.extra) - 1, j >>>= a.extra, z -= a.extra, a.back += a.extra;
            }
            if (a.offset > a.dmax) {
              E.msg = "invalid distance too far back", a.mode = 30;
              break;
            }
            a.mode = 25;
          case 25:
            if (nt === 0) break t;
            if (J = et - nt, a.offset > J) {
              if ((J = a.offset - J) > a.whave && a.sane) {
                E.msg = "invalid distance too far back", a.mode = 30;
                break;
              }
              xt = J > a.wnext ? (J -= a.wnext, a.wsize - J) : a.wnext - J, J > a.length && (J = a.length), Ct = a.window;
            } else Ct = lt, xt = ht - a.offset, J = a.length;
            for (nt < J && (J = nt), nt -= J, a.length -= J; lt[ht++] = Ct[xt++], --J; ) ;
            a.length === 0 && (a.mode = 21);
            break;
          case 26:
            if (nt === 0) break t;
            lt[ht++] = a.length, nt--, a.mode = 21;
            break;
          case 27:
            if (a.wrap) {
              for (; z < 32; ) {
                if (X === 0) break t;
                X--, j |= U[V++] << z, z += 8;
              }
              if (et -= nt, E.total_out += et, a.total += et, et && (E.adler = a.check = a.flags ? i(a.check, lt, et, ht - et) : s(a.check, lt, et, ht - et)), et = nt, (a.flags ? j : d(j)) !== a.check) {
                E.msg = "incorrect data check", a.mode = 30;
                break;
              }
              z = j = 0;
            }
            a.mode = 28;
          case 28:
            if (a.wrap && a.flags) {
              for (; z < 32; ) {
                if (X === 0) break t;
                X--, j += U[V++] << z, z += 8;
              }
              if (j !== (4294967295 & a.total)) {
                E.msg = "incorrect length check", a.mode = 30;
                break;
              }
              z = j = 0;
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
            return h;
        }
        return E.next_out = ht, E.avail_out = nt, E.next_in = V, E.avail_in = X, a.hold = j, a.bits = z, (a.wsize || et !== E.avail_out && a.mode < 30 && (a.mode < 27 || D !== 4)) && it(E, E.output, E.next_out, et - E.avail_out) ? (a.mode = 31, -4) : (rt -= E.avail_in, et -= E.avail_out, E.total_in += rt, E.total_out += et, a.total += et, a.wrap && et && (E.adler = a.check = a.flags ? i(a.check, lt, et, E.next_out - et) : s(a.check, lt, et, E.next_out - et)), E.data_type = a.bits + (a.last ? 64 : 0) + (a.mode === 12 ? 128 : 0) + (a.mode === 20 || a.mode === 15 ? 256 : 0), (rt == 0 && et === 0 || D === 4) && B === w && (B = -5), B);
      }, c.inflateEnd = function(E) {
        if (!E || !E.state) return h;
        var D = E.state;
        return D.window && (D.window = null), E.state = null, w;
      }, c.inflateGetHeader = function(E, D) {
        var a;
        return E && E.state && 2 & (a = E.state).wrap ? ((a.head = D).done = !1, w) : h;
      }, c.inflateSetDictionary = function(E, D) {
        var a, U = D.length;
        return E && E.state ? (a = E.state).wrap !== 0 && a.mode !== 11 ? h : a.mode === 11 && s(1, D, U, 0) !== a.check ? -3 : it(E, D, U, U) ? (a.mode = 31, -4) : (a.havedict = 1, w) : h;
      }, c.inflateInfo = "pako inflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(r, f, c) {
      var n = r("../utils/common"), s = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], i = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], l = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], _ = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
      f.exports = function(k, b, w, h, y, u, m, d) {
        var v, S, A, T, L, I, Z, P, H, it = d.bits, E = 0, D = 0, a = 0, U = 0, lt = 0, V = 0, ht = 0, X = 0, nt = 0, j = 0, z = null, rt = 0, et = new n.Buf16(16), J = new n.Buf16(16), xt = null, Ct = 0;
        for (E = 0; E <= 15; E++) et[E] = 0;
        for (D = 0; D < h; D++) et[b[w + D]]++;
        for (lt = it, U = 15; 1 <= U && et[U] === 0; U--) ;
        if (U < lt && (lt = U), U === 0) return y[u++] = 20971520, y[u++] = 20971520, d.bits = 1, 0;
        for (a = 1; a < U && et[a] === 0; a++) ;
        for (lt < a && (lt = a), E = X = 1; E <= 15; E++) if (X <<= 1, (X -= et[E]) < 0) return -1;
        if (0 < X && (k === 0 || U !== 1)) return -1;
        for (J[1] = 0, E = 1; E < 15; E++) J[E + 1] = J[E] + et[E];
        for (D = 0; D < h; D++) b[w + D] !== 0 && (m[J[b[w + D]]++] = D);
        if (I = k === 0 ? (z = xt = m, 19) : k === 1 ? (z = s, rt -= 257, xt = i, Ct -= 257, 256) : (z = l, xt = _, -1), E = a, L = u, ht = D = j = 0, A = -1, T = (nt = 1 << (V = lt)) - 1, k === 1 && 852 < nt || k === 2 && 592 < nt) return 1;
        for (; ; ) {
          for (Z = E - ht, H = m[D] < I ? (P = 0, m[D]) : m[D] > I ? (P = xt[Ct + m[D]], z[rt + m[D]]) : (P = 96, 0), v = 1 << E - ht, a = S = 1 << V; y[L + (j >> ht) + (S -= v)] = Z << 24 | P << 16 | H | 0, S !== 0; ) ;
          for (v = 1 << E - 1; j & v; ) v >>= 1;
          if (v !== 0 ? (j &= v - 1, j += v) : j = 0, D++, --et[E] == 0) {
            if (E === U) break;
            E = b[w + m[D]];
          }
          if (lt < E && (j & T) !== A) {
            for (ht === 0 && (ht = lt), L += a, X = 1 << (V = E - ht); V + ht < U && !((X -= et[V + ht]) <= 0); ) V++, X <<= 1;
            if (nt += 1 << V, k === 1 && 852 < nt || k === 2 && 592 < nt) return 1;
            y[A = j & T] = lt << 24 | V << 16 | L - u | 0;
          }
        }
        return j !== 0 && (y[L + j] = E - ht << 24 | 64 << 16 | 0), d.bits = lt, 0;
      };
    }, { "../utils/common": 41 }], 51: [function(r, f, c) {
      f.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
    }, {}], 52: [function(r, f, c) {
      var n = r("../utils/common"), s = 0, i = 1;
      function l(p) {
        for (var C = p.length; 0 <= --C; ) p[C] = 0;
      }
      var _ = 0, k = 29, b = 256, w = b + 1 + k, h = 30, y = 19, u = 2 * w + 1, m = 15, d = 16, v = 7, S = 256, A = 16, T = 17, L = 18, I = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], Z = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], P = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], H = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], it = new Array(2 * (w + 2));
      l(it);
      var E = new Array(2 * h);
      l(E);
      var D = new Array(512);
      l(D);
      var a = new Array(256);
      l(a);
      var U = new Array(k);
      l(U);
      var lt, V, ht, X = new Array(h);
      function nt(p, C, W, $, O) {
        this.static_tree = p, this.extra_bits = C, this.extra_base = W, this.elems = $, this.max_length = O, this.has_stree = p && p.length;
      }
      function j(p, C) {
        this.dyn_tree = p, this.max_code = 0, this.stat_desc = C;
      }
      function z(p) {
        return p < 256 ? D[p] : D[256 + (p >>> 7)];
      }
      function rt(p, C) {
        p.pending_buf[p.pending++] = 255 & C, p.pending_buf[p.pending++] = C >>> 8 & 255;
      }
      function et(p, C, W) {
        p.bi_valid > d - W ? (p.bi_buf |= C << p.bi_valid & 65535, rt(p, p.bi_buf), p.bi_buf = C >> d - p.bi_valid, p.bi_valid += W - d) : (p.bi_buf |= C << p.bi_valid & 65535, p.bi_valid += W);
      }
      function J(p, C, W) {
        et(p, W[2 * C], W[2 * C + 1]);
      }
      function xt(p, C) {
        for (var W = 0; W |= 1 & p, p >>>= 1, W <<= 1, 0 < --C; ) ;
        return W >>> 1;
      }
      function Ct(p, C, W) {
        var $, O, K = new Array(m + 1), Q = 0;
        for ($ = 1; $ <= m; $++) K[$] = Q = Q + W[$ - 1] << 1;
        for (O = 0; O <= C; O++) {
          var q = p[2 * O + 1];
          q !== 0 && (p[2 * O] = xt(K[q]++, q));
        }
      }
      function ut(p) {
        var C;
        for (C = 0; C < w; C++) p.dyn_ltree[2 * C] = 0;
        for (C = 0; C < h; C++) p.dyn_dtree[2 * C] = 0;
        for (C = 0; C < y; C++) p.bl_tree[2 * C] = 0;
        p.dyn_ltree[2 * S] = 1, p.opt_len = p.static_len = 0, p.last_lit = p.matches = 0;
      }
      function pt(p) {
        8 < p.bi_valid ? rt(p, p.bi_buf) : 0 < p.bi_valid && (p.pending_buf[p.pending++] = p.bi_buf), p.bi_buf = 0, p.bi_valid = 0;
      }
      function St(p, C, W, $) {
        var O = 2 * C, K = 2 * W;
        return p[O] < p[K] || p[O] === p[K] && $[C] <= $[W];
      }
      function _t(p, C, W) {
        for (var $ = p.heap[W], O = W << 1; O <= p.heap_len && (O < p.heap_len && St(C, p.heap[O + 1], p.heap[O], p.depth) && O++, !St(C, $, p.heap[O], p.depth)); ) p.heap[W] = p.heap[O], W = O, O <<= 1;
        p.heap[W] = $;
      }
      function At(p, C, W) {
        var $, O, K, Q, q = 0;
        if (p.last_lit !== 0) for (; $ = p.pending_buf[p.d_buf + 2 * q] << 8 | p.pending_buf[p.d_buf + 2 * q + 1], O = p.pending_buf[p.l_buf + q], q++, $ === 0 ? J(p, O, C) : (J(p, (K = a[O]) + b + 1, C), (Q = I[K]) !== 0 && et(p, O -= U[K], Q), J(p, K = z(--$), W), (Q = Z[K]) !== 0 && et(p, $ -= X[K], Q)), q < p.last_lit; ) ;
        J(p, S, C);
      }
      function kt(p, C) {
        var W, $, O, K = C.dyn_tree, Q = C.stat_desc.static_tree, q = C.stat_desc.has_stree, at = C.stat_desc.elems, mt = -1;
        for (p.heap_len = 0, p.heap_max = u, W = 0; W < at; W++) K[2 * W] !== 0 ? (p.heap[++p.heap_len] = mt = W, p.depth[W] = 0) : K[2 * W + 1] = 0;
        for (; p.heap_len < 2; ) K[2 * (O = p.heap[++p.heap_len] = mt < 2 ? ++mt : 0)] = 1, p.depth[O] = 0, p.opt_len--, q && (p.static_len -= Q[2 * O + 1]);
        for (C.max_code = mt, W = p.heap_len >> 1; 1 <= W; W--) _t(p, K, W);
        for (O = at; W = p.heap[1], p.heap[1] = p.heap[p.heap_len--], _t(p, K, 1), $ = p.heap[1], p.heap[--p.heap_max] = W, p.heap[--p.heap_max] = $, K[2 * O] = K[2 * W] + K[2 * $], p.depth[O] = (p.depth[W] >= p.depth[$] ? p.depth[W] : p.depth[$]) + 1, K[2 * W + 1] = K[2 * $ + 1] = O, p.heap[1] = O++, _t(p, K, 1), 2 <= p.heap_len; ) ;
        p.heap[--p.heap_max] = p.heap[1], function(ft, Ot) {
          var Mt, It, Bt, Et, Xt, Kt, Nt = Ot.dyn_tree, wt = Ot.max_code, Ht = Ot.stat_desc.static_tree, ee = Ot.stat_desc.has_stree, $t = Ot.stat_desc.extra_bits, qt = Ot.stat_desc.extra_base, Wt = Ot.stat_desc.max_length, Jt = 0;
          for (Et = 0; Et <= m; Et++) ft.bl_count[Et] = 0;
          for (Nt[2 * ft.heap[ft.heap_max] + 1] = 0, Mt = ft.heap_max + 1; Mt < u; Mt++) Wt < (Et = Nt[2 * Nt[2 * (It = ft.heap[Mt]) + 1] + 1] + 1) && (Et = Wt, Jt++), Nt[2 * It + 1] = Et, wt < It || (ft.bl_count[Et]++, Xt = 0, qt <= It && (Xt = $t[It - qt]), Kt = Nt[2 * It], ft.opt_len += Kt * (Et + Xt), ee && (ft.static_len += Kt * (Ht[2 * It + 1] + Xt)));
          if (Jt !== 0) {
            do {
              for (Et = Wt - 1; ft.bl_count[Et] === 0; ) Et--;
              ft.bl_count[Et]--, ft.bl_count[Et + 1] += 2, ft.bl_count[Wt]--, Jt -= 2;
            } while (0 < Jt);
            for (Et = Wt; Et !== 0; Et--) for (It = ft.bl_count[Et]; It !== 0; ) wt < (Bt = ft.heap[--Mt]) || (Nt[2 * Bt + 1] !== Et && (ft.opt_len += (Et - Nt[2 * Bt + 1]) * Nt[2 * Bt], Nt[2 * Bt + 1] = Et), It--);
          }
        }(p, C), Ct(K, mt, p.bl_count);
      }
      function e(p, C, W) {
        var $, O, K = -1, Q = C[1], q = 0, at = 7, mt = 4;
        for (Q === 0 && (at = 138, mt = 3), C[2 * (W + 1) + 1] = 65535, $ = 0; $ <= W; $++) O = Q, Q = C[2 * ($ + 1) + 1], ++q < at && O === Q || (q < mt ? p.bl_tree[2 * O] += q : O !== 0 ? (O !== K && p.bl_tree[2 * O]++, p.bl_tree[2 * A]++) : q <= 10 ? p.bl_tree[2 * T]++ : p.bl_tree[2 * L]++, K = O, mt = (q = 0) === Q ? (at = 138, 3) : O === Q ? (at = 6, 3) : (at = 7, 4));
      }
      function B(p, C, W) {
        var $, O, K = -1, Q = C[1], q = 0, at = 7, mt = 4;
        for (Q === 0 && (at = 138, mt = 3), $ = 0; $ <= W; $++) if (O = Q, Q = C[2 * ($ + 1) + 1], !(++q < at && O === Q)) {
          if (q < mt) for (; J(p, O, p.bl_tree), --q != 0; ) ;
          else O !== 0 ? (O !== K && (J(p, O, p.bl_tree), q--), J(p, A, p.bl_tree), et(p, q - 3, 2)) : q <= 10 ? (J(p, T, p.bl_tree), et(p, q - 3, 3)) : (J(p, L, p.bl_tree), et(p, q - 11, 7));
          K = O, mt = (q = 0) === Q ? (at = 138, 3) : O === Q ? (at = 6, 3) : (at = 7, 4);
        }
      }
      l(X);
      var N = !1;
      function g(p, C, W, $) {
        et(p, (_ << 1) + ($ ? 1 : 0), 3), function(O, K, Q, q) {
          pt(O), rt(O, Q), rt(O, ~Q), n.arraySet(O.pending_buf, O.window, K, Q, O.pending), O.pending += Q;
        }(p, C, W);
      }
      c._tr_init = function(p) {
        N || (function() {
          var C, W, $, O, K, Q = new Array(m + 1);
          for (O = $ = 0; O < k - 1; O++) for (U[O] = $, C = 0; C < 1 << I[O]; C++) a[$++] = O;
          for (a[$ - 1] = O, O = K = 0; O < 16; O++) for (X[O] = K, C = 0; C < 1 << Z[O]; C++) D[K++] = O;
          for (K >>= 7; O < h; O++) for (X[O] = K << 7, C = 0; C < 1 << Z[O] - 7; C++) D[256 + K++] = O;
          for (W = 0; W <= m; W++) Q[W] = 0;
          for (C = 0; C <= 143; ) it[2 * C + 1] = 8, C++, Q[8]++;
          for (; C <= 255; ) it[2 * C + 1] = 9, C++, Q[9]++;
          for (; C <= 279; ) it[2 * C + 1] = 7, C++, Q[7]++;
          for (; C <= 287; ) it[2 * C + 1] = 8, C++, Q[8]++;
          for (Ct(it, w + 1, Q), C = 0; C < h; C++) E[2 * C + 1] = 5, E[2 * C] = xt(C, 5);
          lt = new nt(it, I, b + 1, w, m), V = new nt(E, Z, 0, h, m), ht = new nt(new Array(0), P, 0, y, v);
        }(), N = !0), p.l_desc = new j(p.dyn_ltree, lt), p.d_desc = new j(p.dyn_dtree, V), p.bl_desc = new j(p.bl_tree, ht), p.bi_buf = 0, p.bi_valid = 0, ut(p);
      }, c._tr_stored_block = g, c._tr_flush_block = function(p, C, W, $) {
        var O, K, Q = 0;
        0 < p.level ? (p.strm.data_type === 2 && (p.strm.data_type = function(q) {
          var at, mt = 4093624447;
          for (at = 0; at <= 31; at++, mt >>>= 1) if (1 & mt && q.dyn_ltree[2 * at] !== 0) return s;
          if (q.dyn_ltree[18] !== 0 || q.dyn_ltree[20] !== 0 || q.dyn_ltree[26] !== 0) return i;
          for (at = 32; at < b; at++) if (q.dyn_ltree[2 * at] !== 0) return i;
          return s;
        }(p)), kt(p, p.l_desc), kt(p, p.d_desc), Q = function(q) {
          var at;
          for (e(q, q.dyn_ltree, q.l_desc.max_code), e(q, q.dyn_dtree, q.d_desc.max_code), kt(q, q.bl_desc), at = y - 1; 3 <= at && q.bl_tree[2 * H[at] + 1] === 0; at--) ;
          return q.opt_len += 3 * (at + 1) + 5 + 5 + 4, at;
        }(p), O = p.opt_len + 3 + 7 >>> 3, (K = p.static_len + 3 + 7 >>> 3) <= O && (O = K)) : O = K = W + 5, W + 4 <= O && C !== -1 ? g(p, C, W, $) : p.strategy === 4 || K === O ? (et(p, 2 + ($ ? 1 : 0), 3), At(p, it, E)) : (et(p, 4 + ($ ? 1 : 0), 3), function(q, at, mt, ft) {
          var Ot;
          for (et(q, at - 257, 5), et(q, mt - 1, 5), et(q, ft - 4, 4), Ot = 0; Ot < ft; Ot++) et(q, q.bl_tree[2 * H[Ot] + 1], 3);
          B(q, q.dyn_ltree, at - 1), B(q, q.dyn_dtree, mt - 1);
        }(p, p.l_desc.max_code + 1, p.d_desc.max_code + 1, Q + 1), At(p, p.dyn_ltree, p.dyn_dtree)), ut(p), $ && pt(p);
      }, c._tr_tally = function(p, C, W) {
        return p.pending_buf[p.d_buf + 2 * p.last_lit] = C >>> 8 & 255, p.pending_buf[p.d_buf + 2 * p.last_lit + 1] = 255 & C, p.pending_buf[p.l_buf + p.last_lit] = 255 & W, p.last_lit++, C === 0 ? p.dyn_ltree[2 * W]++ : (p.matches++, C--, p.dyn_ltree[2 * (a[W] + b + 1)]++, p.dyn_dtree[2 * z(C)]++), p.last_lit === p.lit_bufsize - 1;
      }, c._tr_align = function(p) {
        et(p, 2, 3), J(p, S, it), function(C) {
          C.bi_valid === 16 ? (rt(C, C.bi_buf), C.bi_buf = 0, C.bi_valid = 0) : 8 <= C.bi_valid && (C.pending_buf[C.pending++] = 255 & C.bi_buf, C.bi_buf >>= 8, C.bi_valid -= 8);
        }(p);
      };
    }, { "../utils/common": 41 }], 53: [function(r, f, c) {
      f.exports = function() {
        this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
      };
    }, {}], 54: [function(r, f, c) {
      (function(n) {
        (function(s, i) {
          if (!s.setImmediate) {
            var l, _, k, b, w = 1, h = {}, y = !1, u = s.document, m = Object.getPrototypeOf && Object.getPrototypeOf(s);
            m = m && m.setTimeout ? m : s, l = {}.toString.call(s.process) === "[object process]" ? function(A) {
              process.nextTick(function() {
                v(A);
              });
            } : function() {
              if (s.postMessage && !s.importScripts) {
                var A = !0, T = s.onmessage;
                return s.onmessage = function() {
                  A = !1;
                }, s.postMessage("", "*"), s.onmessage = T, A;
              }
            }() ? (b = "setImmediate$" + Math.random() + "$", s.addEventListener ? s.addEventListener("message", S, !1) : s.attachEvent("onmessage", S), function(A) {
              s.postMessage(b + A, "*");
            }) : s.MessageChannel ? ((k = new MessageChannel()).port1.onmessage = function(A) {
              v(A.data);
            }, function(A) {
              k.port2.postMessage(A);
            }) : u && "onreadystatechange" in u.createElement("script") ? (_ = u.documentElement, function(A) {
              var T = u.createElement("script");
              T.onreadystatechange = function() {
                v(A), T.onreadystatechange = null, _.removeChild(T), T = null;
              }, _.appendChild(T);
            }) : function(A) {
              setTimeout(v, 0, A);
            }, m.setImmediate = function(A) {
              typeof A != "function" && (A = new Function("" + A));
              for (var T = new Array(arguments.length - 1), L = 0; L < T.length; L++) T[L] = arguments[L + 1];
              var I = { callback: A, args: T };
              return h[w] = I, l(w), w++;
            }, m.clearImmediate = d;
          }
          function d(A) {
            delete h[A];
          }
          function v(A) {
            if (y) setTimeout(v, 0, A);
            else {
              var T = h[A];
              if (T) {
                y = !0;
                try {
                  (function(L) {
                    var I = L.callback, Z = L.args;
                    switch (Z.length) {
                      case 0:
                        I();
                        break;
                      case 1:
                        I(Z[0]);
                        break;
                      case 2:
                        I(Z[0], Z[1]);
                        break;
                      case 3:
                        I(Z[0], Z[1], Z[2]);
                        break;
                      default:
                        I.apply(i, Z);
                    }
                  })(T);
                } finally {
                  d(A), y = !1;
                }
              }
            }
          }
          function S(A) {
            A.source === s && typeof A.data == "string" && A.data.indexOf(b) === 0 && v(+A.data.slice(b.length));
          }
        })(typeof self > "u" ? n === void 0 ? this : n : self);
      }).call(this, typeof be < "u" ? be : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}] }, {}, [10])(10);
  });
})(pr);
var Dr = pr.exports;
const Fr = /* @__PURE__ */ Nr(Dr);
function Br(t = {}) {
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
      return (S ? JSON.parse(S) : []).map(Lr);
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
  const [s, i] = zt(c), l = ot(() => s, [s]), _ = ot((S) => {
    const A = S || r();
    return s.filter((T) => T.pagePath === A);
  }, [s, r]), k = ot((S) => {
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
      const L = T.map((I) => I.id === S ? { ...I, ...A } : I);
      return n(L), L;
    });
  }, []), w = ot((S) => {
    i((A) => {
      const T = A.filter((L) => L.id !== S);
      return n(T), T;
    });
  }, []), h = ot((S) => {
    const A = S || r();
    i((T) => {
      const L = T.filter((I) => I.pagePath !== A);
      return n(L), L;
    });
  }, [r]), y = ot(() => {
    i([]), n([]);
  }, []), u = ot(() => ({
    exportTime: (/* @__PURE__ */ new Date()).toISOString(),
    total: s.length,
    reviews: s
  }), [s]), m = ot(() => {
    De(
      new Blob([JSON.stringify(u(), null, 2)], { type: "application/json" }),
      `page-reviews-${Fe()}.json`
    );
  }, [u]), d = ot(() => {
    const S = nr(u());
    De(
      new Blob([S], { type: "text/markdown" }),
      `page-reviews-${Fe()}.md`
    );
  }, [u]), v = ot(async () => {
    const S = new Fr(), A = u(), T = {
      ...A,
      reviews: A.reviews.map((Z) => {
        var P;
        return {
          ...Z,
          screenshots: (P = Z.screenshots) == null ? void 0 : P.map((H) => H.url ? { type: H.type, filename: H.filename, url: H.url } : { type: H.type, filename: H.filename, imagePath: `images/${H.filename}` })
        };
      })
    };
    S.file("review.json", JSON.stringify(T, null, 2)), S.file("review.md", nr(T));
    const L = S.folder("images");
    for (const Z of A.reviews)
      for (const P of Z.screenshots || [])
        if (P.data && !P.url) {
          const H = P.data.replace(/^data:image\/png;base64,/, "");
          L.file(P.filename, H, { base64: !0 });
        }
    const I = await S.generateAsync({ type: "blob" });
    De(I, `page-reviews-${Fe()}.zip`);
  }, [u]);
  return {
    reviews: s,
    allReviews: l,
    getPageReviews: _,
    addReview: k,
    updateReview: b,
    deleteReview: w,
    clearPageReviews: h,
    clearAllReviews: y,
    exportToJSON: m,
    exportToMarkdown: d,
    exportToZIP: v
  };
}
function Lr(t) {
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
function nr(t) {
  const o = [
    "# 页面评审报告",
    "",
    `导出时间：${(/* @__PURE__ */ new Date()).toLocaleString()}`,
    `评审总数：${t.total}`,
    ""
  ], r = Mr(t.reviews, "pagePath");
  return Object.entries(r).forEach(([f, c]) => {
    o.push(`## 页面：${f}`), o.push(""), c.forEach((n, s) => {
      var l, _, k, b;
      o.push(`### ${s + 1}. ${n.title || "未命名评审"}`), o.push(`- **严重等级**：${Ur(n.severity)}`), o.push(`- **状态**：${n.status === "resolved" ? "已解决" : "待处理"}`), o.push(`- **窗口尺寸**：${(l = n.viewport) == null ? void 0 : l.width} × ${(_ = n.viewport) == null ? void 0 : _.height}`), n.scroll && o.push(`- **滚动位置**：x=${n.scroll.x}, y=${n.scroll.y}`);
      const i = n.targets || [];
      i.length > 0 && (o.push(`- **评审目标数**：${i.length}`), i.forEach((w, h) => {
        w.type === "element" && w.elementRect ? (o.push(`  - 目标 ${h + 1}（元素）：\`${w.selector}\` x=${w.elementRect.x}, y=${w.elementRect.y}, w=${w.elementRect.width}, h=${w.elementRect.height}`), w.elementText && o.push(`    文本：${w.elementText}`)) : w.viewportRect && o.push(`  - 目标 ${h + 1}（框选）：x=${w.viewportRect.x}, y=${w.viewportRect.y}, w=${w.viewportRect.width}, h=${w.viewportRect.height}`);
      })), o.push(`- **评审建议**：${n.suggestion}`), o.push(`- **创建时间**：${new Date(n.createdAt).toLocaleString()}`), n.locators && Object.keys(n.locators).length > 0 && (o.push(""), o.push("#### 定位信息"), n.locators.cssSelector && o.push(`- **CSS Selector**: \`${n.locators.cssSelector}\``), n.locators.xpath && o.push(`- **XPath**: \`${n.locators.xpath}\``), (k = n.locators.aria) != null && k.role && o.push(`- **ARIA Role**: ${n.locators.aria.role}`), (b = n.locators.aria) != null && b.accessibleName && o.push(`- **Accessible Name**: ${n.locators.aria.accessibleName}`), n.locators.testId && o.push(`- **data-testid**: ${n.locators.testId}`)), n.screenshots && n.screenshots.length > 0 && (o.push(""), o.push("#### 截图"), n.screenshots.forEach((w) => {
        const h = w.url || w.imagePath || `images/${w.filename}`;
        o.push(`![${w.type}](${h})`);
      })), o.push("");
    });
  }), o.join(`
`);
}
function De(t, o) {
  if (typeof window > "u") return;
  const r = URL.createObjectURL(t), f = document.createElement("a");
  f.href = r, f.download = o, document.body.appendChild(f), f.click(), document.body.removeChild(f), URL.revokeObjectURL(r);
}
function Fe() {
  const t = /* @__PURE__ */ new Date();
  return `${t.getFullYear()}${ke(t.getMonth() + 1)}${ke(t.getDate())}-${ke(t.getHours())}${ke(t.getMinutes())}`;
}
function ke(t) {
  return String(t).padStart(2, "0");
}
function Ur(t) {
  return { low: "低", medium: "中", high: "高", critical: "严重" }[t] || t;
}
function Mr(t, o) {
  return t.reduce((r, f) => {
    const c = f[o] || "unknown";
    return r[c] || (r[c] = []), r[c].push(f), r;
  }, {});
}
function $r(t, o) {
  if (t.match(/^[a-z]+:\/\//i))
    return t;
  if (t.match(/^\/\//))
    return window.location.protocol + t;
  if (t.match(/^[a-z]+:/i))
    return t;
  const r = document.implementation.createHTMLDocument(), f = r.createElement("base"), c = r.createElement("a");
  return r.head.appendChild(f), r.body.appendChild(c), o && (f.href = o), c.href = t, c.href;
}
const Wr = /* @__PURE__ */ (() => {
  let t = 0;
  const o = () => (
    // eslint-disable-next-line no-bitwise
    `0000${(Math.random() * 36 ** 4 << 0).toString(36)}`.slice(-4)
  );
  return () => (t += 1, `u${o()}${t}`);
})();
function ne(t) {
  const o = [];
  for (let r = 0, f = t.length; r < f; r++)
    o.push(t[r]);
  return o;
}
let le = null;
function mr(t = {}) {
  return le || (t.includeStyleProperties ? (le = t.includeStyleProperties, le) : (le = ne(window.getComputedStyle(document.documentElement)), le));
}
function Se(t, o) {
  const f = (t.ownerDocument.defaultView || window).getComputedStyle(t).getPropertyValue(o);
  return f ? parseFloat(f.replace("px", "")) : 0;
}
function Zr(t) {
  const o = Se(t, "border-left-width"), r = Se(t, "border-right-width");
  return t.clientWidth + o + r;
}
function Hr(t) {
  const o = Se(t, "border-top-width"), r = Se(t, "border-bottom-width");
  return t.clientHeight + o + r;
}
function gr(t, o = {}) {
  const r = o.width || Zr(t), f = o.height || Hr(t);
  return { width: r, height: f };
}
function Yr() {
  let t, o;
  try {
    o = process;
  } catch {
  }
  const r = o && o.env ? o.env.devicePixelRatio : null;
  return r && (t = parseInt(r, 10), Number.isNaN(t) && (t = 1)), t || window.devicePixelRatio || 1;
}
const Ut = 16384;
function Vr(t) {
  (t.width > Ut || t.height > Ut) && (t.width > Ut && t.height > Ut ? t.width > t.height ? (t.height *= Ut / t.width, t.width = Ut) : (t.width *= Ut / t.height, t.height = Ut) : t.width > Ut ? (t.height *= Ut / t.width, t.width = Ut) : (t.width *= Ut / t.height, t.height = Ut));
}
function Ee(t) {
  return new Promise((o, r) => {
    const f = new Image();
    f.onload = () => {
      f.decode().then(() => {
        requestAnimationFrame(() => o(f));
      });
    }, f.onerror = r, f.crossOrigin = "anonymous", f.decoding = "async", f.src = t;
  });
}
async function Gr(t) {
  return Promise.resolve().then(() => new XMLSerializer().serializeToString(t)).then(encodeURIComponent).then((o) => `data:image/svg+xml;charset=utf-8,${o}`);
}
async function Xr(t, o, r) {
  const f = "http://www.w3.org/2000/svg", c = document.createElementNS(f, "svg"), n = document.createElementNS(f, "foreignObject");
  return c.setAttribute("width", `${o}`), c.setAttribute("height", `${r}`), c.setAttribute("viewBox", `0 0 ${o} ${r}`), n.setAttribute("width", "100%"), n.setAttribute("height", "100%"), n.setAttribute("x", "0"), n.setAttribute("y", "0"), n.setAttribute("externalResourcesRequired", "true"), c.appendChild(n), n.appendChild(t), Gr(c);
}
const Ft = (t, o) => {
  if (t instanceof o)
    return !0;
  const r = Object.getPrototypeOf(t);
  return r === null ? !1 : r.constructor.name === o.name || Ft(r, o);
};
function Kr(t) {
  const o = t.getPropertyValue("content");
  return `${t.cssText} content: '${o.replace(/'|"/g, "")}';`;
}
function qr(t, o) {
  return mr(o).map((r) => {
    const f = t.getPropertyValue(r), c = t.getPropertyPriority(r);
    return `${r}: ${f}${c ? " !important" : ""};`;
  }).join(" ");
}
function Jr(t, o, r, f) {
  const c = `.${t}:${o}`, n = r.cssText ? Kr(r) : qr(r, f);
  return document.createTextNode(`${c}{${n}}`);
}
function ir(t, o, r, f) {
  const c = window.getComputedStyle(t, r), n = c.getPropertyValue("content");
  if (n === "" || n === "none")
    return;
  const s = Wr();
  try {
    o.className = `${o.className} ${s}`;
  } catch {
    return;
  }
  const i = document.createElement("style");
  i.appendChild(Jr(s, r, c, f)), o.appendChild(i);
}
function Qr(t, o, r) {
  ir(t, o, ":before", r), ir(t, o, ":after", r);
}
const ar = "application/font-woff", sr = "image/jpeg", tn = {
  woff: ar,
  woff2: ar,
  ttf: "application/font-truetype",
  eot: "application/vnd.ms-fontobject",
  png: "image/png",
  jpg: sr,
  jpeg: sr,
  gif: "image/gif",
  tiff: "image/tiff",
  svg: "image/svg+xml",
  webp: "image/webp"
};
function en(t) {
  const o = /\.([^./]*?)$/g.exec(t);
  return o ? o[1] : "";
}
function He(t) {
  const o = en(t).toLowerCase();
  return tn[o] || "";
}
function rn(t) {
  return t.split(/,/)[1];
}
function Ze(t) {
  return t.search(/^(data:)/) !== -1;
}
function nn(t, o) {
  return `data:${o};base64,${t}`;
}
async function vr(t, o, r) {
  const f = await fetch(t, o);
  if (f.status === 404)
    throw new Error(`Resource "${f.url}" not found`);
  const c = await f.blob();
  return new Promise((n, s) => {
    const i = new FileReader();
    i.onerror = s, i.onloadend = () => {
      try {
        n(r({ res: f, result: i.result }));
      } catch (l) {
        s(l);
      }
    }, i.readAsDataURL(c);
  });
}
const Be = {};
function an(t, o, r) {
  let f = t.replace(/\?.*/, "");
  return r && (f = t), /ttf|otf|eot|woff2?/i.test(f) && (f = f.replace(/.*\//, "")), o ? `[${o}]${f}` : f;
}
async function Ye(t, o, r) {
  const f = an(t, o, r.includeQueryParams);
  if (Be[f] != null)
    return Be[f];
  r.cacheBust && (t += (/\?/.test(t) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime());
  let c;
  try {
    const n = await vr(t, r.fetchRequestInit, ({ res: s, result: i }) => (o || (o = s.headers.get("Content-Type") || ""), rn(i)));
    c = nn(n, o);
  } catch (n) {
    c = r.imagePlaceholder || "";
    let s = `Failed to fetch resource: ${t}`;
    n && (s = typeof n == "string" ? n : n.message), s && console.warn(s);
  }
  return Be[f] = c, c;
}
async function sn(t) {
  const o = t.toDataURL();
  return o === "data:," ? t.cloneNode(!1) : Ee(o);
}
async function on(t, o) {
  if (t.currentSrc) {
    const n = document.createElement("canvas"), s = n.getContext("2d");
    n.width = t.clientWidth, n.height = t.clientHeight, s == null || s.drawImage(t, 0, 0, n.width, n.height);
    const i = n.toDataURL();
    return Ee(i);
  }
  const r = t.poster, f = He(r), c = await Ye(r, f, o);
  return Ee(c);
}
async function ln(t, o) {
  var r;
  try {
    if (!((r = t == null ? void 0 : t.contentDocument) === null || r === void 0) && r.body)
      return await Re(t.contentDocument.body, o, !0);
  } catch {
  }
  return t.cloneNode(!1);
}
async function cn(t, o) {
  return Ft(t, HTMLCanvasElement) ? sn(t) : Ft(t, HTMLVideoElement) ? on(t, o) : Ft(t, HTMLIFrameElement) ? ln(t, o) : t.cloneNode(wr(t));
}
const un = (t) => t.tagName != null && t.tagName.toUpperCase() === "SLOT", wr = (t) => t.tagName != null && t.tagName.toUpperCase() === "SVG";
async function hn(t, o, r) {
  var f, c;
  if (wr(o))
    return o;
  let n = [];
  return un(t) && t.assignedNodes ? n = ne(t.assignedNodes()) : Ft(t, HTMLIFrameElement) && (!((f = t.contentDocument) === null || f === void 0) && f.body) ? n = ne(t.contentDocument.body.childNodes) : n = ne(((c = t.shadowRoot) !== null && c !== void 0 ? c : t).childNodes), n.length === 0 || Ft(t, HTMLVideoElement) || await n.reduce((s, i) => s.then(() => Re(i, r)).then((l) => {
    l && o.appendChild(l);
  }), Promise.resolve()), o;
}
function fn(t, o, r) {
  const f = o.style;
  if (!f)
    return;
  const c = window.getComputedStyle(t);
  c.cssText ? (f.cssText = c.cssText, f.transformOrigin = c.transformOrigin) : mr(r).forEach((n) => {
    let s = c.getPropertyValue(n);
    n === "font-size" && s.endsWith("px") && (s = `${Math.floor(parseFloat(s.substring(0, s.length - 2))) - 0.1}px`), Ft(t, HTMLIFrameElement) && n === "display" && s === "inline" && (s = "block"), n === "d" && o.getAttribute("d") && (s = `path(${o.getAttribute("d")})`), f.setProperty(n, s, c.getPropertyPriority(n));
  });
}
function dn(t, o) {
  Ft(t, HTMLTextAreaElement) && (o.innerHTML = t.value), Ft(t, HTMLInputElement) && o.setAttribute("value", t.value);
}
function pn(t, o) {
  if (Ft(t, HTMLSelectElement)) {
    const r = o, f = Array.from(r.children).find((c) => t.value === c.getAttribute("value"));
    f && f.setAttribute("selected", "");
  }
}
function mn(t, o, r) {
  return Ft(o, Element) && (fn(t, o, r), Qr(t, o, r), dn(t, o), pn(t, o)), o;
}
async function gn(t, o) {
  const r = t.querySelectorAll ? t.querySelectorAll("use") : [];
  if (r.length === 0)
    return t;
  const f = {};
  for (let n = 0; n < r.length; n++) {
    const i = r[n].getAttribute("xlink:href");
    if (i) {
      const l = t.querySelector(i), _ = document.querySelector(i);
      !l && _ && !f[i] && (f[i] = await Re(_, o, !0));
    }
  }
  const c = Object.values(f);
  if (c.length) {
    const n = "http://www.w3.org/1999/xhtml", s = document.createElementNS(n, "svg");
    s.setAttribute("xmlns", n), s.style.position = "absolute", s.style.width = "0", s.style.height = "0", s.style.overflow = "hidden", s.style.display = "none";
    const i = document.createElementNS(n, "defs");
    s.appendChild(i);
    for (let l = 0; l < c.length; l++)
      i.appendChild(c[l]);
    t.appendChild(s);
  }
  return t;
}
async function Re(t, o, r) {
  return !r && o.filter && !o.filter(t) ? null : Promise.resolve(t).then((f) => cn(f, o)).then((f) => hn(t, f, o)).then((f) => mn(t, f, o)).then((f) => gn(f, o));
}
const yr = /url\((['"]?)([^'"]+?)\1\)/g, vn = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g, wn = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function yn(t) {
  const o = t.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
  return new RegExp(`(url\\(['"]?)(${o})(['"]?\\))`, "g");
}
function _n(t) {
  const o = [];
  return t.replace(yr, (r, f, c) => (o.push(c), r)), o.filter((r) => !Ze(r));
}
async function bn(t, o, r, f, c) {
  try {
    const n = r ? $r(o, r) : o, s = He(o);
    let i;
    return c || (i = await Ye(n, s, f)), t.replace(yn(o), `$1${i}$3`);
  } catch {
  }
  return t;
}
function xn(t, { preferredFontFormat: o }) {
  return o ? t.replace(wn, (r) => {
    for (; ; ) {
      const [f, , c] = vn.exec(r) || [];
      if (!c)
        return "";
      if (c === o)
        return `src: ${f};`;
    }
  }) : t;
}
function _r(t) {
  return t.search(yr) !== -1;
}
async function br(t, o, r) {
  if (!_r(t))
    return t;
  const f = xn(t, r);
  return _n(f).reduce((n, s) => n.then((i) => bn(i, s, o, r)), Promise.resolve(f));
}
async function ce(t, o, r) {
  var f;
  const c = (f = o.style) === null || f === void 0 ? void 0 : f.getPropertyValue(t);
  if (c) {
    const n = await br(c, null, r);
    return o.style.setProperty(t, n, o.style.getPropertyPriority(t)), !0;
  }
  return !1;
}
async function kn(t, o) {
  await ce("background", t, o) || await ce("background-image", t, o), await ce("mask", t, o) || await ce("-webkit-mask", t, o) || await ce("mask-image", t, o) || await ce("-webkit-mask-image", t, o);
}
async function Sn(t, o) {
  const r = Ft(t, HTMLImageElement);
  if (!(r && !Ze(t.src)) && !(Ft(t, SVGImageElement) && !Ze(t.href.baseVal)))
    return;
  const f = r ? t.src : t.href.baseVal, c = await Ye(f, He(f), o);
  await new Promise((n, s) => {
    t.onload = n, t.onerror = o.onImageErrorHandler ? (...l) => {
      try {
        n(o.onImageErrorHandler(...l));
      } catch (_) {
        s(_);
      }
    } : s;
    const i = t;
    i.decode && (i.decode = n), i.loading === "lazy" && (i.loading = "eager"), r ? (t.srcset = "", t.src = c) : t.href.baseVal = c;
  });
}
async function En(t, o) {
  const f = ne(t.childNodes).map((c) => xr(c, o));
  await Promise.all(f).then(() => t);
}
async function xr(t, o) {
  Ft(t, Element) && (await kn(t, o), await Sn(t, o), await En(t, o));
}
function Cn(t, o) {
  const { style: r } = t;
  o.backgroundColor && (r.backgroundColor = o.backgroundColor), o.width && (r.width = `${o.width}px`), o.height && (r.height = `${o.height}px`);
  const f = o.style;
  return f != null && Object.keys(f).forEach((c) => {
    r[c] = f[c];
  }), t;
}
const or = {};
async function lr(t) {
  let o = or[t];
  if (o != null)
    return o;
  const f = await (await fetch(t)).text();
  return o = { url: t, cssText: f }, or[t] = o, o;
}
async function cr(t, o) {
  let r = t.cssText;
  const f = /url\(["']?([^"')]+)["']?\)/g, n = (r.match(/url\([^)]+\)/g) || []).map(async (s) => {
    let i = s.replace(f, "$1");
    return i.startsWith("https://") || (i = new URL(i, t.url).href), vr(i, o.fetchRequestInit, ({ result: l }) => (r = r.replace(s, `url(${l})`), [s, l]));
  });
  return Promise.all(n).then(() => r);
}
function ur(t) {
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
  const n = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi, s = "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", i = new RegExp(s, "gi");
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
async function Rn(t, o) {
  const r = [], f = [];
  return t.forEach((c) => {
    if ("cssRules" in c)
      try {
        ne(c.cssRules || []).forEach((n, s) => {
          if (n.type === CSSRule.IMPORT_RULE) {
            let i = s + 1;
            const l = n.href, _ = lr(l).then((k) => cr(k, o)).then((k) => ur(k).forEach((b) => {
              try {
                c.insertRule(b, b.startsWith("@import") ? i += 1 : c.cssRules.length);
              } catch (w) {
                console.error("Error inserting rule from remote css", {
                  rule: b,
                  error: w
                });
              }
            })).catch((k) => {
              console.error("Error loading remote css", k.toString());
            });
            f.push(_);
          }
        });
      } catch (n) {
        const s = t.find((i) => i.href == null) || document.styleSheets[0];
        c.href != null && f.push(lr(c.href).then((i) => cr(i, o)).then((i) => ur(i).forEach((l) => {
          s.insertRule(l, s.cssRules.length);
        })).catch((i) => {
          console.error("Error loading remote stylesheet", i);
        })), console.error("Error inlining remote css file", n);
      }
  }), Promise.all(f).then(() => (t.forEach((c) => {
    if ("cssRules" in c)
      try {
        ne(c.cssRules || []).forEach((n) => {
          r.push(n);
        });
      } catch (n) {
        console.error(`Error while reading CSS rules from ${c.href}`, n);
      }
  }), r));
}
function Tn(t) {
  return t.filter((o) => o.type === CSSRule.FONT_FACE_RULE).filter((o) => _r(o.style.getPropertyValue("src")));
}
async function An(t, o) {
  if (t.ownerDocument == null)
    throw new Error("Provided element is not within a Document");
  const r = ne(t.ownerDocument.styleSheets), f = await Rn(r, o);
  return Tn(f);
}
function kr(t) {
  return t.trim().replace(/["']/g, "");
}
function On(t) {
  const o = /* @__PURE__ */ new Set();
  function r(f) {
    (f.style.fontFamily || getComputedStyle(f).fontFamily).split(",").forEach((n) => {
      o.add(kr(n));
    }), Array.from(f.children).forEach((n) => {
      n instanceof HTMLElement && r(n);
    });
  }
  return r(t), o;
}
async function zn(t, o) {
  const r = await An(t, o), f = On(t);
  return (await Promise.all(r.filter((n) => f.has(kr(n.style.fontFamily))).map((n) => {
    const s = n.parentStyleSheet ? n.parentStyleSheet.href : null;
    return br(n.cssText, s, o);
  }))).join(`
`);
}
async function jn(t, o) {
  const r = o.fontEmbedCSS != null ? o.fontEmbedCSS : o.skipFonts ? null : await zn(t, o);
  if (r) {
    const f = document.createElement("style"), c = document.createTextNode(r);
    f.appendChild(c), t.firstChild ? t.insertBefore(f, t.firstChild) : t.appendChild(f);
  }
}
async function Nn(t, o = {}) {
  const { width: r, height: f } = gr(t, o), c = await Re(t, o, !0);
  return await jn(c, o), await xr(c, o), Cn(c, o), await Xr(c, r, f);
}
async function Pn(t, o = {}) {
  const { width: r, height: f } = gr(t, o), c = await Nn(t, o), n = await Ee(c), s = document.createElement("canvas"), i = s.getContext("2d"), l = o.pixelRatio || Yr(), _ = o.canvasWidth || r, k = o.canvasHeight || f;
  return s.width = _ * l, s.height = k * l, o.skipAutoScale || Vr(s), s.style.width = `${_}`, s.style.height = `${k}`, o.backgroundColor && (i.fillStyle = o.backgroundColor, i.fillRect(0, 0, s.width, s.height)), i.drawImage(n, 0, 0, s.width, s.height), s;
}
async function Ve(t, o = {}) {
  return (await Pn(t, o)).toDataURL();
}
const Qt = {
  VIEWPORT: "viewport",
  FULL_PAGE: "fullpage",
  TARGETS: "targets"
};
function Le(t) {
  const o = Date.now(), r = Math.random().toString(36).slice(2, 6);
  return `screenshot-${t}-${o}-${r}.png`;
}
async function Sr(t, o = {}) {
  if (!t) return null;
  try {
    return await Ve(t, {
      pixelRatio: o.pixelRatio || window.devicePixelRatio || 1,
      cacheBust: !0,
      ...o
    });
  } catch (r) {
    return console.error("captureElement failed:", r), null;
  }
}
async function In(t = {}) {
  const o = document.documentElement;
  return Sr(o, {
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
async function Dn(t = {}) {
  const o = document.documentElement, r = o.style.overflow, f = o.style.width, c = o.style.height;
  try {
    return o.style.overflow = "visible", o.style.width = "auto", o.style.height = "auto", await Ve(o, {
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
async function Fn(t, o = {}) {
  if (!t || t.width < 1 || t.height < 1) return null;
  const r = document.documentElement, f = r.style.overflow, c = r.style.width, n = r.style.height;
  try {
    r.style.overflow = "visible", r.style.width = "auto", r.style.height = "auto";
    const s = await Ve(r, {
      pixelRatio: o.pixelRatio || window.devicePixelRatio || 1,
      cacheBust: !0,
      ...o
    });
    return Bn(s, t);
  } catch (s) {
    return console.error("captureBox failed:", s), null;
  } finally {
    r.style.overflow = f, r.style.width = c, r.style.height = n;
  }
}
function Bn(t, o) {
  return new Promise((r, f) => {
    const c = new Image();
    c.onload = () => {
      const n = document.createElement("canvas"), s = window.devicePixelRatio || 1;
      n.width = Math.round(o.width * s), n.height = Math.round(o.height * s), n.getContext("2d").drawImage(
        c,
        o.x * s,
        o.y * s,
        o.width * s,
        o.height * s,
        0,
        0,
        n.width,
        n.height
      ), r(n.toDataURL("image/png"));
    }, c.onerror = f, c.src = t;
  });
}
async function Ln(t) {
  return (await fetch(t)).blob();
}
async function Ue(t, o, r) {
  if (!r) return null;
  try {
    const f = await Ln(t);
    return await r(f, o);
  } catch (f) {
    return console.error("uploadScreenshot failed:", f), null;
  }
}
function Er(t) {
  var c;
  if (!t || t.nodeType !== Node.ELEMENT_NODE) return "";
  if (t.id) return "#" + t.id;
  const o = t.tagName.toLowerCase();
  if (t.className) {
    const n = String(t.className).split(/\s+/).filter((s) => s && !s.startsWith("el-") && !/^__/.test(s)).slice(0, 2);
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
function Un(t) {
  var f;
  if (!t || t.nodeType !== Node.ELEMENT_NODE) return "";
  if (t.id) return `//*[@id="${t.id}"]`;
  const o = [];
  let r = t;
  for (; r && r !== document.body; ) {
    const s = Array.from(((f = r.parentNode) == null ? void 0 : f.children) || []).filter((i) => i.tagName === r.tagName).indexOf(r) + 1;
    o.unshift(`${r.tagName.toLowerCase()}[${s}]`), r = r.parentNode;
  }
  return o.unshift(""), "/html/body/" + o.slice(1).join("/");
}
function Mn(t) {
  if (!t || t.nodeType !== Node.ELEMENT_NODE) return {};
  const o = {}, r = t.getAttribute("role") || $n(t);
  r && (o.role = r);
  const f = Wn(t);
  f && (o.accessibleName = f);
  const c = t.getAttribute("aria-labelledby");
  return c && (o.labeledBy = c), Object.keys(o).length ? o : void 0;
}
function $n(t) {
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
function Wn(t) {
  var n, s;
  if (t.getAttribute("aria-label")) return t.getAttribute("aria-label").trim();
  const o = t.getAttribute("aria-labelledby");
  if (o) {
    const i = o.split(/\s+/).map((l) => {
      var _, k;
      return (k = (_ = document.getElementById(l)) == null ? void 0 : _.textContent) == null ? void 0 : k.trim();
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
    const i = (s = t.textContent) == null ? void 0 : s.trim();
    if (i) return i;
  }
  return "";
}
function Zn(t) {
  return !t || t.nodeType !== Node.ELEMENT_NODE ? void 0 : t.getAttribute("data-testid") || void 0;
}
function Ce(t) {
  if (!t || t.nodeType !== Node.ELEMENT_NODE) return null;
  const o = t.getBoundingClientRect();
  return {
    tag: t.tagName.toLowerCase(),
    id: t.id || void 0,
    classes: t.className ? String(t.className).split(/\s+/).filter(Boolean) : void 0,
    selector: Er(t),
    xpath: Un(t),
    rect: {
      x: o.left + window.scrollX,
      y: o.top + window.scrollY,
      width: o.width,
      height: o.height
    },
    aria: Mn(t),
    testId: Zn(t)
  };
}
function Hn(t) {
  if (!t || t.nodeType !== Node.ELEMENT_NODE) return [];
  const o = [];
  let r = t;
  for (; r && r !== document.body; )
    o.unshift(r), r = r.parentElement;
  return r === document.body && o.unshift(document.body), o.map(Ce).filter(Boolean);
}
function Yn(t) {
  if (!t || t.nodeType !== Node.ELEMENT_NODE) return [];
  const o = Vn(t);
  if (o.length) return o;
  const r = Xn(t);
  return r.length ? r : [];
}
function Vn(t) {
  const o = [];
  let r = t;
  for (; r; ) {
    const f = Gn(r);
    f && !o.find((c) => c.componentName === f.componentName && c.selector === f.selector) && o.unshift(f), r = r.parentElement;
  }
  return o;
}
function Gn(t) {
  var n, s, i, l, _;
  const r = Object.keys(t || {}).find((k) => k.startsWith("__vue"));
  if (!r) return null;
  const f = t[r], c = ((n = f == null ? void 0 : f.type) == null ? void 0 : n.name) || ((s = f == null ? void 0 : f.type) == null ? void 0 : s.__name) || ((l = (i = f == null ? void 0 : f.parent) == null ? void 0 : i.type) == null ? void 0 : l.name);
  return c ? {
    componentName: c,
    selector: Er(t),
    rect: (_ = Ce(t)) == null ? void 0 : _.rect
  } : null;
}
function Xn(t) {
  const o = [], r = Object.keys(t || {}).find((c) => c.startsWith("__reactFiber$"));
  if (!r) return o;
  let f = t[r];
  for (; f; ) {
    const c = Kn(f);
    c && !o.find((n) => n.componentName === c) && o.unshift({ componentName: c, selector: void 0, rect: void 0 }), f = f.return;
  }
  return o;
}
function Kn(t) {
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
function Me(t) {
  return {
    dom: Hn(t),
    framework: Yn(t)
  };
}
function ni({
  active: t = !1,
  pagePath: o = "",
  pageName: r = "",
  storageKey: f = "page-reviews",
  imageUpload: c,
  enableZipExport: n = !0,
  enableComponentTree: s = !0,
  onActiveChange: i,
  onAdd: l,
  onUpdate: _,
  onDelete: k,
  onClear: b,
  onExport: w
}) {
  var Xe, Ke, qe, Je;
  const h = Qe(() => o || (typeof window < "u" ? window.location.pathname + window.location.search : "/"), [o]), {
    reviews: y,
    getPageReviews: u,
    addReview: m,
    updateReview: d,
    deleteReview: v,
    clearPageReviews: S,
    exportToJSON: A,
    exportToMarkdown: T,
    exportToZIP: L
  } = Br({ storageKey: f, defaultPagePath: () => h }), I = Qe(() => u(h), [u, h, y]), [Z, P] = zt("element"), [H, it] = zt(!1), [E, D] = zt(!1), [a, U] = zt(!1), [lt, V] = zt(null), [ht, X] = zt(""), [nt, j] = zt([]), [z, rt] = zt([]), et = Lt(0), [J, xt] = zt(null), [Ct, ut] = zt(null), [pt, St] = zt(null), _t = Lt(!1), At = Lt({ x: 0, y: 0 }), [kt, e] = zt(null), B = Lt(""), N = Lt({ x: 0, y: 0, rect: null }), [g, p] = zt({ x: 0, y: 0 }), [C, W] = zt({ width: null, height: null }), $ = Lt(!1), O = Lt({ x: 0, y: 0 }), K = Lt(!1), Q = Lt({ x: 0, y: 0, width: 0, height: 0 }), [q, at] = zt({ x: 0, y: 0 }), [mt, ft] = zt({ width: 560, height: null }), Ot = Lt(!1), Mt = Lt({ x: 0, y: 0 }), It = Lt(!1), Bt = Lt({ x: 0, y: 0, width: 0, height: 0 }), [Et, Xt] = zt([]), [Kt, Nt] = zt(null), [wt, Ht] = zt({
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
  }), ee = nt.length + z.length, $t = wt.title.trim() && wt.suggestion.trim(), qt = ot(() => {
    i == null || i(!1);
  }, [i]), Wt = ot(() => ({
    viewport: { width: window.innerWidth, height: window.innerHeight },
    scroll: { x: window.scrollX, y: window.scrollY },
    pagePath: h,
    pageUrl: window.location.href,
    pageName: r || h
  }), [h, r]), Jt = ot((R) => {
    var st;
    if (R.id) return "#" + R.id;
    if (R.className) {
      const yt = String(R.className).split(/\s+/).filter((Zt) => Zt && !Zt.startsWith("el-")).slice(0, 2);
      if (yt.length) return R.tagName.toLowerCase() + "." + yt.join(".");
    }
    let M = [], Y = R;
    for (; Y && Y !== document.body; ) {
      let yt = Y.tagName.toLowerCase();
      if (Y.id) {
        yt += "#" + Y.id, M.unshift(yt);
        break;
      }
      const re = Array.from(((st = Y.parentNode) == null ? void 0 : st.children) || []).filter((Gt) => Gt.tagName === Y.tagName);
      if (re.length > 1) {
        const Gt = re.indexOf(Y) + 1;
        yt += `:nth-of-type(${Gt})`;
      }
      M.unshift(yt), Y = Y.parentNode;
    }
    return M.join(" > ");
  }, []), ae = ot((R) => {
    const M = document.elementFromPoint(R.clientX, R.clientY);
    return !M || M.closest(".review-overlay") ? null : M;
  }, []), Yt = ot((R) => R.ctrlKey || R.metaKey, []), se = ot((R) => {
    const M = {};
    return R.selector && (M.cssSelector = R.selector), R.xpath && (M.xpath = R.xpath), R.aria && Object.keys(R.aria).length && (M.aria = R.aria), R.testId && (M.testId = R.testId), Object.keys(M).length ? M : null;
  }, []), ue = ot(() => {
    const R = [];
    return nt.forEach((M) => {
      const Y = M.el ? Ce(M.el) : null;
      R.push({
        type: "element",
        selector: M.selector,
        elementText: M.text,
        elementRect: M.rect,
        componentTree: Y ? Me(M.el) : null,
        aria: (Y == null ? void 0 : Y.aria) || null,
        locators: Y ? se(Y) : null
      });
    }), z.forEach((M) => {
      R.push({
        type: "viewport",
        viewportRect: M.rect
      });
    }), R;
  }, [nt, z, se]), he = ot(() => {
    Xt([]), Ht({
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
  }, []), ie = ot(() => {
    j([]), rt([]), ut(null), St(null);
  }, []), Te = ot(() => {
    const R = Wt(), M = ue(), Y = nt[0], st = Y != null && Y.el ? Ce(Y.el) : null;
    Ht({
      type: nt.length > 0 ? "element" : "viewport",
      title: "",
      severity: "medium",
      suggestion: "",
      targets: M,
      viewport: R.viewport,
      scroll: R.scroll,
      pagePath: R.pagePath,
      pageUrl: R.pageUrl,
      pageName: R.pageName,
      aria: (st == null ? void 0 : st.aria) || null,
      locators: st ? se(st) : null
    }), Xt([]), it(!0);
  }, [Wt, ue, nt, se]), fe = ot(async () => {
    const R = [];
    for (const M of Et)
      if (M === Qt.TARGETS)
        for (const Y of wt.targets) {
          let st = null;
          if (Y.type === "element" && Y.elementRect) {
            const yt = document.querySelector(Y.selector);
            yt && (st = await Sr(yt));
          } else Y.type === "viewport" && Y.viewportRect && (st = await Fn(Y.viewportRect));
          if (st) {
            const yt = Le(Y.type);
            let Zt = null;
            c && (Zt = await Ue(st, yt, c)), R.push({ type: Y.type, filename: yt, data: Zt ? void 0 : st, url: Zt || void 0 });
          }
        }
      else if (M === Qt.VIEWPORT) {
        const Y = await In();
        if (Y) {
          const st = Le(Qt.VIEWPORT);
          let yt = null;
          c && (yt = await Ue(Y, st, c)), R.push({ type: Qt.VIEWPORT, filename: st, data: yt ? void 0 : Y, url: yt || void 0 });
        }
      } else if (M === Qt.FULL_PAGE) {
        const Y = await Dn();
        if (Y) {
          const st = Le(Qt.FULL_PAGE);
          let yt = null;
          c && (yt = await Ue(Y, st, c)), R.push({ type: Qt.FULL_PAGE, filename: st, data: yt ? void 0 : Y, url: yt || void 0 });
        }
      }
    return R;
  }, [Et, wt.targets, c]), ye = ot(async () => {
    if (!$t) return;
    const R = await fe(), M = m({
      type: wt.type,
      title: wt.title.trim(),
      severity: wt.severity,
      suggestion: wt.suggestion.trim(),
      targets: wt.targets,
      viewport: wt.viewport,
      scroll: wt.scroll,
      pagePath: wt.pagePath,
      pageUrl: wt.pageUrl,
      pageName: wt.pageName,
      status: "open",
      screenshots: R,
      aria: wt.aria,
      locators: wt.locators
    });
    it(!1), ie(), l == null || l(M);
  }, [$t, fe, wt, m, ie, l]), Ae = ot((R) => {
    d(R, { status: "resolved" }), _ == null || _({ id: R, status: "resolved" });
  }, [d, _]), Oe = ot((R) => {
    Nt({
      title: "删除确认",
      message: "确定删除这条评审意见吗？",
      onConfirm: () => {
        v(R), k == null || k({ id: R }), Nt(null);
      }
    });
  }, [v, k]), ze = ot(() => {
    I.length !== 0 && Nt({
      title: "清空确认",
      message: "确定清空当前页面的所有评审意见吗？",
      onConfirm: () => {
        S(h), b == null || b({ pagePath: h }), Nt(null);
      }
    });
  }, [I.length, S, h, b]), _e = ot(() => {
    A(), w == null || w({ format: "json" });
  }, [A, w]), x = ot(() => {
    T(), w == null || w({ format: "markdown" });
  }, [T, w]), G = ot(async () => {
    await L(), w == null || w({ format: "zip" });
  }, [L, w]), tt = ot((R) => {
    if (!R.rect) {
      xt(null);
      return;
    }
    xt(R.rect);
  }, []), ct = ot((R) => {
    var st;
    if (!R.selector) return;
    const M = document.querySelector(R.selector);
    if (!M) return;
    const Y = M.getBoundingClientRect();
    j([{
      el: M,
      selector: R.selector,
      tag: M.tagName.toLowerCase(),
      text: ((st = M.innerText) == null ? void 0 : st.slice(0, 40)) || "",
      rect: {
        x: Y.left + window.scrollX,
        y: Y.top + window.scrollY,
        width: Y.width,
        height: Y.height
      }
    }]), rt([]), ut(Me(M)), U(!1);
  }, []), vt = ot((R) => {
    j((M) => {
      const Y = M.filter((st) => st.el !== R.el);
      return Y.length === 0 && ut(null), Y;
    });
  }, []), bt = ot((R) => {
    rt((M) => {
      const Y = M.filter((st) => st.id !== R.id);
      return Y.forEach((st, yt) => {
        st.index = yt;
      }), Y;
    });
  }, []), gt = ot((R, M) => {
    Yt(M) && (M.stopPropagation(), vt(R));
  }, [Yt, vt]), dt = ot((R, M) => {
    Yt(M) && (M.stopPropagation(), bt(R));
  }, [Yt, bt]), jt = ot((R) => {
    if ($.current || kt || Z !== "element" || H || _t.current) return;
    const M = ae(R);
    if (!M) {
      V(null);
      return;
    }
    const Y = M.getBoundingClientRect();
    V({
      x: Y.left + window.scrollX,
      y: Y.top + window.scrollY,
      width: Y.width,
      height: Y.height
    }), X(M.tagName.toLowerCase());
  }, [Z, H, kt, ae]), Rt = ot(() => {
    V(null);
  }, []), Tt = ot((R) => {
    var yt;
    if (Z !== "element" || H || _t.current || kt) return;
    const M = ae(R);
    if (!M) return;
    R.preventDefault(), R.stopPropagation();
    const Y = M.getBoundingClientRect(), st = {
      el: M,
      selector: Jt(M),
      tag: M.tagName.toLowerCase(),
      text: ((yt = M.innerText) == null ? void 0 : yt.slice(0, 40)) || "",
      rect: {
        x: Y.left + window.scrollX,
        y: Y.top + window.scrollY,
        width: Y.width,
        height: Y.height
      }
    };
    Yt(R) ? j((Zt) => {
      const re = Zt.findIndex((Gt) => Gt.el === M);
      if (re > -1) {
        const Gt = Zt.filter((me, oe) => oe !== re);
        return Gt.length === 0 && ut(null), Gt;
      }
      return [...Zt, st];
    }) : (j([st]), rt([]), ut(Me(M)));
  }, [Z, H, kt, ae, Jt, Yt]), Dt = ot((R) => {
    $.current || Z !== "viewport" || H || kt || R.target.closest(".review-overlay") || (R.preventDefault(), _t.current = !0, At.current = { x: R.clientX + window.scrollX, y: R.clientY + window.scrollY }, St({ x: At.current.x, y: At.current.y, width: 0, height: 0 }));
  }, [Z, H, kt]), te = ot((R) => {
    if (!kt || !N.current.rect) return;
    const M = R.clientX + window.scrollX - N.current.x, Y = R.clientY + window.scrollY - N.current.y, st = N.current.rect;
    rt((yt) => {
      if (!yt.find((ge) => ge.id === kt)) return yt;
      let { x: re, y: Gt, width: me, height: oe } = st;
      return B.current.includes("e") && (me = Math.max(10, st.width + M)), B.current.includes("s") && (oe = Math.max(10, st.height + Y)), B.current.includes("w") && (me = Math.max(10, st.width - M), re = st.x + (st.width - me)), B.current.includes("n") && (oe = Math.max(10, st.height - Y), Gt = st.y + (st.height - oe)), yt.map((ge) => ge.id === kt ? { ...ge, rect: { x: re, y: Gt, width: me, height: oe } } : ge);
    });
  }, [kt]), Vt = ot((R) => {
    if ($.current) return;
    if (kt) {
      te(R);
      return;
    }
    if (!_t.current) return;
    const M = R.clientX + window.scrollX, Y = R.clientY + window.scrollY;
    St({
      x: Math.min(At.current.x, M),
      y: Math.min(At.current.y, Y),
      width: Math.abs(M - At.current.x),
      height: Math.abs(Y - At.current.y)
    });
  }, [kt, te]), Pt = ot((R) => {
    if ($.current) {
      $.current = !1;
      return;
    }
    if (K.current) {
      K.current = !1;
      return;
    }
    if (Ot.current) {
      Ot.current = !1;
      return;
    }
    if (It.current) {
      It.current = !1;
      return;
    }
    if (kt) {
      e(null), B.current = "", N.current = { x: 0, y: 0, rect: null };
      return;
    }
    _t.current && (_t.current = !1, St((M) => (M && M.width > 10 && M.height > 10 && (Yt(R) || j([]), rt((Y) => [...Y, {
      id: "box-" + Date.now() + "-" + et.current++,
      index: Y.length,
      rect: { ...M }
    }])), null)));
  }, [kt, Yt]), de = ot((R, M, Y) => {
    e(R.id), B.current = M, N.current = {
      x: Y.clientX + window.scrollX,
      y: Y.clientY + window.scrollY,
      rect: { ...R.rect }
    };
  }, []), je = ot((R) => {
    var Y, st;
    ((Y = R.target.classList) != null && Y.contains("toolbar-title") || (st = R.target.classList) != null && st.contains("review-toolbar")) && ($.current = !0, O.current = {
      x: R.clientX - g.x,
      y: R.clientY - g.y
    });
  }, [g]), pe = ot((R) => {
    if ($.current) {
      p({
        x: R.clientX - O.current.x,
        y: R.clientY - O.current.y
      });
      return;
    }
    if (K.current) {
      const M = R.clientX - Q.current.x, Y = R.clientY - Q.current.y;
      W({
        width: Math.max(400, Q.current.width + M),
        height: Math.max(48, Q.current.height + Y)
      });
    }
  }, []), Cr = ot((R) => {
    K.current = !0;
    const M = R.target.closest(".review-toolbar"), Y = M == null ? void 0 : M.getBoundingClientRect();
    Q.current = {
      x: R.clientX,
      y: R.clientY,
      width: (Y == null ? void 0 : Y.width) || 0,
      height: (Y == null ? void 0 : Y.height) || 0
    };
  }, []), Rr = ot((R) => {
    var M;
    (M = R.target.classList) != null && M.contains("modal-header") && (Ot.current = !0, Mt.current = {
      x: R.clientX - q.x,
      y: R.clientY - q.y
    });
  }, [q]), Ne = ot((R) => {
    if (Ot.current)
      at({
        x: R.clientX - Mt.current.x,
        y: R.clientY - Mt.current.y
      });
    else if (It.current) {
      const M = R.clientX - Bt.current.x, Y = R.clientY - Bt.current.y;
      ft({
        width: Math.max(360, Bt.current.width + M),
        height: Math.max(300, Bt.current.height + Y)
      });
    }
  }, []), Tr = ot((R) => {
    It.current = !0, Bt.current = {
      x: R.clientX,
      y: R.clientY,
      width: mt.width,
      height: mt.height
    };
  }, [mt]), Pe = ot((R) => {
    R.key === "Escape" && (H ? it(!1) : qt());
  }, [H, qt]), Ar = ot(() => {
  }, []), Or = ot(() => {
    nt.length === 0 && ut(null), U(!0);
  }, [nt.length]);
  if (tr(() => {
    if (t)
      return document.addEventListener("mousemove", jt), document.addEventListener("mouseout", Rt), document.addEventListener("click", Tt, !0), document.addEventListener("mousedown", Dt), document.addEventListener("mousemove", Vt), document.addEventListener("mousemove", pe), document.addEventListener("mousemove", Ne), document.addEventListener("mouseup", Pt), document.addEventListener("keydown", Pe), () => {
        document.removeEventListener("mousemove", jt), document.removeEventListener("mouseout", Rt), document.removeEventListener("click", Tt, !0), document.removeEventListener("mousedown", Dt), document.removeEventListener("mousemove", Vt), document.removeEventListener("mousemove", pe), document.removeEventListener("mousemove", Ne), document.removeEventListener("mouseup", Pt), document.removeEventListener("keydown", Pe);
      };
  }, [t, jt, Rt, Tt, Dt, Vt, pe, Ne, Pt, Pe]), tr(() => {
    t ? P("element") : (ie(), he(), V(null), D(!1), U(!1));
  }, [t, ie, he]), !t) return null;
  const Ie = {
    transform: `translate(calc(-50% + ${g.x}px), ${g.y}px)`
  };
  C.width && (Ie.width = C.width + "px"), C.height && (Ie.height = C.height + "px");
  const Ge = {
    left: `calc(50% + ${q.x}px)`,
    top: `calc(50% + ${q.y}px)`,
    transform: "translate(-50%, -50%)",
    width: mt.width + "px"
  };
  mt.height && (Ge.height = mt.height + "px");
  const zr = ["nw", "n", "ne", "w", "e", "sw", "s", "se"];
  return jr(
    /* @__PURE__ */ F.jsxs("div", { className: "review-overlay", onClick: Ar, children: [
      /* @__PURE__ */ F.jsxs(
        "div",
        {
          className: `review-toolbar ${$.current ? "is-dragging" : ""}`,
          style: Ie,
          onClick: (R) => R.stopPropagation(),
          onMouseDown: je,
          children: [
            /* @__PURE__ */ F.jsxs("div", { className: "toolbar-left", children: [
              /* @__PURE__ */ F.jsx("span", { className: "toolbar-title", title: "按住此处可拖动", children: "页面评审模式" }),
              /* @__PURE__ */ F.jsxs("div", { className: "radio-group", children: [
                /* @__PURE__ */ F.jsx("button", { className: Z === "element" ? "active" : "", onClick: () => P("element"), children: "选择元素" }),
                /* @__PURE__ */ F.jsx("button", { className: Z === "viewport" ? "active" : "", onClick: () => P("viewport"), children: "框定视图" })
              ] })
            ] }),
            /* @__PURE__ */ F.jsxs("div", { className: "toolbar-right", children: [
              s && /* @__PURE__ */ F.jsx("button", { onClick: Or, children: "组件树" }),
              /* @__PURE__ */ F.jsxs(
                "button",
                {
                  className: "primary",
                  disabled: ee === 0,
                  onClick: Te,
                  children: [
                    "评审 (",
                    ee,
                    ")"
                  ]
                }
              ),
              /* @__PURE__ */ F.jsx(
                "button",
                {
                  disabled: ee === 0,
                  onClick: ie,
                  children: "取消选择"
                }
              ),
              /* @__PURE__ */ F.jsxs("button", { className: "badge-btn", onClick: () => D(!0), children: [
                "评审列表 ",
                /* @__PURE__ */ F.jsx("span", { className: "badge", children: I.length })
              ] }),
              /* @__PURE__ */ F.jsxs("div", { className: "dropdown", children: [
                /* @__PURE__ */ F.jsx("button", { className: "primary", onClick: x, children: "导出" }),
                /* @__PURE__ */ F.jsxs("div", { className: "dropdown-menu", children: [
                  /* @__PURE__ */ F.jsx("div", { onClick: x, children: "导出为 Markdown" }),
                  /* @__PURE__ */ F.jsx("div", { onClick: _e, children: "导出为 JSON" }),
                  n && /* @__PURE__ */ F.jsx("div", { onClick: G, children: "导出为 ZIP" })
                ] })
              ] }),
              /* @__PURE__ */ F.jsx("button", { className: "danger", onClick: qt, children: "退出评审" })
            ] }),
            /* @__PURE__ */ F.jsx("div", { className: "toolbar-resize-handle", onMouseDown: Cr })
          ]
        }
      ),
      lt && Z === "element" && !_t.current && !kt && /* @__PURE__ */ F.jsx("div", { className: "highlight-box hover-box", style: $e(lt), children: /* @__PURE__ */ F.jsx("span", { className: "highlight-label", children: ht }) }),
      nt.map((R, M) => /* @__PURE__ */ F.jsx(
        "div",
        {
          className: "highlight-box selected-box",
          style: $e(R.rect),
          onClick: (Y) => gt(R, Y),
          children: /* @__PURE__ */ F.jsxs("span", { className: "highlight-label", children: [
            R.tag,
            /* @__PURE__ */ F.jsx("i", { className: "remove-icon", onClick: (Y) => {
              Y.stopPropagation(), vt(R);
            }, children: "×" })
          ] })
        },
        "el-" + M
      )),
      J && /* @__PURE__ */ F.jsx("div", { className: "highlight-box tree-hover-box", style: $e(J) }),
      z.map((R) => /* @__PURE__ */ F.jsxs(
        "div",
        {
          className: `drag-rect selected-box ${kt === R.id ? "is-resizing" : ""}`,
          style: hr(R.rect),
          onMouseDown: (M) => dt(R, M),
          children: [
            /* @__PURE__ */ F.jsxs("span", { className: "box-label", onMouseDown: (M) => M.stopPropagation(), children: [
              "框选 ",
              R.index + 1,
              /* @__PURE__ */ F.jsx("i", { className: "remove-icon", onClick: (M) => {
                M.stopPropagation(), bt(R);
              }, children: "×" })
            ] }),
            zr.map((M) => /* @__PURE__ */ F.jsx(
              "div",
              {
                className: `resize-handle handle-${M}`,
                style: qn(M, R.rect),
                onMouseDown: (Y) => de(R, M, Y)
              },
              M
            ))
          ]
        },
        R.id
      )),
      pt && /* @__PURE__ */ F.jsx("div", { className: "drag-rect preview-box", style: hr(pt) }),
      H && /* @__PURE__ */ F.jsx("div", { className: "modal-backdrop", onClick: () => it(!1) }),
      H && /* @__PURE__ */ F.jsxs(
        "div",
        {
          className: `modal review-modal ${Ot.current ? "is-dragging" : ""}`,
          style: Ge,
          onClick: (R) => R.stopPropagation(),
          children: [
            /* @__PURE__ */ F.jsxs("div", { className: "modal-header", onMouseDown: Rr, children: [
              /* @__PURE__ */ F.jsx("span", { children: "添加评审意见" }),
              /* @__PURE__ */ F.jsx("button", { className: "close", onClick: () => it(!1), children: "×" })
            ] }),
            /* @__PURE__ */ F.jsxs("div", { className: "modal-body", children: [
              /* @__PURE__ */ F.jsxs("div", { className: "form-row", children: [
                /* @__PURE__ */ F.jsx("label", { children: "评审目标" }),
                /* @__PURE__ */ F.jsx("div", { className: "review-targets-summary", children: wt.targets.map((R, M) => {
                  var Y, st;
                  return /* @__PURE__ */ F.jsx("span", { className: "tag target-tag", children: R.type === "element" ? R.elementText || R.selector || "元素" : `框选 ${(Y = R.viewportRect) == null ? void 0 : Y.x},${(st = R.viewportRect) == null ? void 0 : st.y}` }, M);
                }) })
              ] }),
              /* @__PURE__ */ F.jsxs("div", { className: "form-row", children: [
                /* @__PURE__ */ F.jsx("label", { children: "窗口尺寸" }),
                /* @__PURE__ */ F.jsxs("span", { className: "text-muted", children: [
                  (Xe = wt.viewport) == null ? void 0 : Xe.width,
                  " × ",
                  (Ke = wt.viewport) == null ? void 0 : Ke.height
                ] })
              ] }),
              /* @__PURE__ */ F.jsxs("div", { className: "form-row", children: [
                /* @__PURE__ */ F.jsx("label", { children: "滚动位置" }),
                /* @__PURE__ */ F.jsxs("span", { className: "text-muted", children: [
                  "x=",
                  (qe = wt.scroll) == null ? void 0 : qe.x,
                  ", y=",
                  (Je = wt.scroll) == null ? void 0 : Je.y
                ] })
              ] }),
              /* @__PURE__ */ F.jsxs("div", { className: "form-row", children: [
                /* @__PURE__ */ F.jsx("label", { children: "截图" }),
                /* @__PURE__ */ F.jsx("div", { className: "checkbox-group", children: [
                  { value: Qt.TARGETS, label: "选中目标" },
                  { value: Qt.VIEWPORT, label: "当前视口" },
                  { value: Qt.FULL_PAGE, label: "完整页面" }
                ].map((R) => /* @__PURE__ */ F.jsxs("label", { className: "checkbox-label", children: [
                  /* @__PURE__ */ F.jsx(
                    "input",
                    {
                      type: "checkbox",
                      value: R.value,
                      checked: Et.includes(R.value),
                      onChange: (M) => {
                        const Y = M.target.value;
                        Xt(
                          (st) => st.includes(Y) ? st.filter((yt) => yt !== Y) : [...st, Y]
                        );
                      }
                    }
                  ),
                  R.label
                ] }, R.value)) })
              ] }),
              /* @__PURE__ */ F.jsxs("div", { className: "form-row", children: [
                /* @__PURE__ */ F.jsxs("label", { children: [
                  "标题 ",
                  /* @__PURE__ */ F.jsx("span", { className: "required", children: "*" })
                ] }),
                /* @__PURE__ */ F.jsx(
                  "input",
                  {
                    type: "text",
                    value: wt.title,
                    onChange: (R) => Ht({ ...wt, title: R.target.value }),
                    placeholder: "例如：按钮样式不统一"
                  }
                )
              ] }),
              /* @__PURE__ */ F.jsxs("div", { className: "form-row", children: [
                /* @__PURE__ */ F.jsxs("label", { children: [
                  "严重等级 ",
                  /* @__PURE__ */ F.jsx("span", { className: "required", children: "*" })
                ] }),
                /* @__PURE__ */ F.jsx("div", { className: "radio-group", children: ["low", "medium", "high", "critical"].map((R) => /* @__PURE__ */ F.jsxs("label", { className: "radio-label", children: [
                  /* @__PURE__ */ F.jsx(
                    "input",
                    {
                      type: "radio",
                      name: "severity",
                      value: R,
                      checked: wt.severity === R,
                      onChange: () => Ht({ ...wt, severity: R })
                    }
                  ),
                  fr(R)
                ] }, R)) })
              ] }),
              /* @__PURE__ */ F.jsxs("div", { className: "form-row", children: [
                /* @__PURE__ */ F.jsxs("label", { children: [
                  "评审建议 ",
                  /* @__PURE__ */ F.jsx("span", { className: "required", children: "*" })
                ] }),
                /* @__PURE__ */ F.jsx(
                  "textarea",
                  {
                    rows: 4,
                    value: wt.suggestion,
                    onChange: (R) => Ht({ ...wt, suggestion: R.target.value }),
                    placeholder: "描述问题现象、影响和改进建议"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ F.jsxs("div", { className: "modal-footer", children: [
              /* @__PURE__ */ F.jsx("button", { onClick: () => it(!1), children: "取消" }),
              /* @__PURE__ */ F.jsx("button", { className: "primary", disabled: !$t, onClick: ye, children: "保存评审" })
            ] }),
            /* @__PURE__ */ F.jsx("div", { className: "modal-resize-handle", onMouseDown: Tr })
          ]
        }
      ),
      a && /* @__PURE__ */ F.jsxs(F.Fragment, { children: [
        /* @__PURE__ */ F.jsx("div", { className: "drawer-backdrop", onClick: () => U(!1) }),
        /* @__PURE__ */ F.jsxs("div", { className: "drawer", children: [
          /* @__PURE__ */ F.jsxs("div", { className: "drawer-header", children: [
            /* @__PURE__ */ F.jsx("span", { children: "组件树检查器" }),
            /* @__PURE__ */ F.jsx("button", { className: "close", onClick: () => U(!1), children: "×" })
          ] }),
          /* @__PURE__ */ F.jsx("div", { className: "drawer-body", children: Ct ? /* @__PURE__ */ F.jsxs("div", { className: "tree-panel", children: [
            Ct.framework && Ct.framework.length > 0 && /* @__PURE__ */ F.jsxs("div", { className: "tree-section", children: [
              /* @__PURE__ */ F.jsx("h4", { children: "框架组件树" }),
              /* @__PURE__ */ F.jsx("div", { className: "tree-list", children: Ct.framework.map((R, M) => /* @__PURE__ */ F.jsx(
                "div",
                {
                  className: "tree-node",
                  onMouseEnter: () => tt(R),
                  onMouseLeave: () => xt(null),
                  onClick: () => ct(R),
                  children: /* @__PURE__ */ F.jsx("span", { className: "node-name", children: R.componentName })
                },
                "fw-" + M
              )) })
            ] }),
            /* @__PURE__ */ F.jsxs("div", { className: "tree-section", children: [
              /* @__PURE__ */ F.jsx("h4", { children: "DOM 树" }),
              /* @__PURE__ */ F.jsx("div", { className: "tree-list", children: Ct.dom.map((R, M) => {
                var Y;
                return /* @__PURE__ */ F.jsxs(
                  "div",
                  {
                    className: "tree-node",
                    style: { paddingLeft: M * 12 },
                    onMouseEnter: () => tt(R),
                    onMouseLeave: () => xt(null),
                    onClick: () => ct(R),
                    children: [
                      /* @__PURE__ */ F.jsx("span", { className: "node-tag", children: R.tag }),
                      R.id && /* @__PURE__ */ F.jsxs("span", { className: "node-id", children: [
                        "#",
                        R.id
                      ] }),
                      ((Y = R.aria) == null ? void 0 : Y.role) && /* @__PURE__ */ F.jsxs("span", { className: "node-aria", children: [
                        "role=",
                        R.aria.role
                      ] }),
                      R.testId && /* @__PURE__ */ F.jsxs("span", { className: "node-testid", children: [
                        "testid=",
                        R.testId
                      ] })
                    ]
                  },
                  "dom-" + M
                );
              }) })
            ] })
          ] }) : /* @__PURE__ */ F.jsx("div", { className: "empty", children: "先选择一个元素以查看组件树" }) })
        ] })
      ] }),
      E && /* @__PURE__ */ F.jsxs(F.Fragment, { children: [
        /* @__PURE__ */ F.jsx("div", { className: "drawer-backdrop", onClick: () => D(!1) }),
        /* @__PURE__ */ F.jsxs("div", { className: "drawer", children: [
          /* @__PURE__ */ F.jsxs("div", { className: "drawer-header", children: [
            /* @__PURE__ */ F.jsx("span", { children: "当前页面评审意见" }),
            /* @__PURE__ */ F.jsx("button", { className: "close", onClick: () => D(!1), children: "×" })
          ] }),
          /* @__PURE__ */ F.jsxs("div", { className: "drawer-body", children: [
            /* @__PURE__ */ F.jsxs("div", { className: "review-list-actions", children: [
              /* @__PURE__ */ F.jsx("button", { className: "primary", onClick: x, children: "导出 Markdown" }),
              /* @__PURE__ */ F.jsx("button", { onClick: _e, children: "导出 JSON" }),
              n && /* @__PURE__ */ F.jsx("button", { onClick: G, children: "导出 ZIP" }),
              /* @__PURE__ */ F.jsx("button", { className: "danger-text", onClick: ze, children: "清空本页" })
            ] }),
            I.length === 0 ? /* @__PURE__ */ F.jsx("div", { className: "empty", children: "暂无评审意见" }) : /* @__PURE__ */ F.jsx("div", { className: "review-list", children: I.map((R) => {
              var M;
              return /* @__PURE__ */ F.jsxs("div", { className: "review-item", children: [
                /* @__PURE__ */ F.jsxs("div", { className: "review-item-header", children: [
                  /* @__PURE__ */ F.jsx("span", { className: "review-item-title", children: R.title }),
                  /* @__PURE__ */ F.jsxs("div", { className: "review-item-tags", children: [
                    /* @__PURE__ */ F.jsx("span", { className: `tag ${Jn(R.severity)}`, children: fr(R.severity) }),
                    /* @__PURE__ */ F.jsxs("span", { className: "tag info", children: [
                      ((M = R.targets) == null ? void 0 : M.length) || 1,
                      " 个目标"
                    ] }),
                    Qn(R) && /* @__PURE__ */ F.jsx("span", { className: "tag success", children: "树" })
                  ] })
                ] }),
                /* @__PURE__ */ F.jsx("p", { className: "review-item-target", children: ti(R.targets) }),
                /* @__PURE__ */ F.jsx("p", { className: "review-item-suggestion", children: R.suggestion }),
                /* @__PURE__ */ F.jsxs("div", { className: "review-item-meta", children: [
                  /* @__PURE__ */ F.jsx("span", { className: "text-muted", children: new Date(R.createdAt).toLocaleString() }),
                  /* @__PURE__ */ F.jsxs("div", { className: "review-item-actions", children: [
                    R.status !== "resolved" && /* @__PURE__ */ F.jsx("button", { className: "link primary", onClick: () => Ae(R.id), children: "标记解决" }),
                    /* @__PURE__ */ F.jsx("button", { className: "link danger", onClick: () => Oe(R.id), children: "删除" })
                  ] })
                ] })
              ] }, R.id);
            }) })
          ] })
        ] })
      ] }),
      Kt && /* @__PURE__ */ F.jsx("div", { className: "modal-backdrop", onClick: () => Nt(null), children: /* @__PURE__ */ F.jsxs("div", { className: "modal confirm-modal", onClick: (R) => R.stopPropagation(), children: [
        /* @__PURE__ */ F.jsx("div", { className: "modal-header", children: Kt.title }),
        /* @__PURE__ */ F.jsx("div", { className: "modal-body", children: Kt.message }),
        /* @__PURE__ */ F.jsxs("div", { className: "modal-footer", children: [
          /* @__PURE__ */ F.jsx("button", { onClick: () => Nt(null), children: "取消" }),
          /* @__PURE__ */ F.jsx("button", { className: "danger", onClick: Kt.onConfirm, children: "确定" })
        ] })
      ] }) })
    ] }),
    document.body
  );
}
function $e(t) {
  return t ? {
    left: t.x + "px",
    top: t.y + "px",
    width: t.width + "px",
    height: t.height + "px"
  } : {};
}
function hr(t) {
  return t ? {
    left: t.x + "px",
    top: t.y + "px",
    width: t.width + "px",
    height: t.height + "px"
  } : {};
}
function qn(t, o) {
  const f = {};
  return t.includes("n") && (f.top = -8 / 2 + "px"), t.includes("s") && (f.bottom = -8 / 2 + "px"), t.includes("w") && (f.left = -8 / 2 + "px"), t.includes("e") && (f.right = -8 / 2 + "px"), (t === "n" || t === "s") && (f.left = o.width / 2 - 8 / 2 + "px"), (t === "w" || t === "e") && (f.top = o.height / 2 - 8 / 2 + "px"), f.width = "8px", f.height = "8px", f;
}
function Jn(t) {
  return { low: "info", medium: "warning", high: "danger", critical: "danger" }[t] || "info";
}
function fr(t) {
  return { low: "低", medium: "中", high: "高", critical: "严重" }[t] || t;
}
function Qn(t) {
  var o;
  return (o = t.targets) == null ? void 0 : o.some((r) => {
    var f, c;
    return (c = (f = r.componentTree) == null ? void 0 : f.dom) == null ? void 0 : c.length;
  });
}
function ti(t) {
  if (!t || t.length === 0) return "无目标";
  const o = t[0], r = o.type === "element" ? o.elementText || o.selector || "元素" : `框选 x=${o.viewportRect.x}, y=${o.viewportRect.y}`;
  return t.length === 1 ? r : `${r} 等 ${t.length} 个目标`;
}
export {
  ni as ReviewTool,
  ni as default,
  Br as usePageReview
};
