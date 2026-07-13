import qt, { useState as Re, useCallback as le, useRef as Ue, useEffect as $e, useMemo as vt } from "react";
import { createPortal as gr } from "react-dom";
import { Radio as yt, Badge as wr, Button as Me, Dropdown as vr, Modal as It, Tag as ct, Checkbox as yr, Input as jt, Select as br, Drawer as Dt, Empty as Nt, Card as _r } from "antd";
var ut = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function xr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ct = { exports: {} }, st = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bt;
function kr() {
  if (Bt) return st;
  Bt = 1;
  var e = qt, l = Symbol.for("react.element"), r = Symbol.for("react.fragment"), f = Object.prototype.hasOwnProperty, c = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, n = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(i, o, b) {
    var x, _ = {}, w = null, d = null;
    b !== void 0 && (w = "" + b), o.key !== void 0 && (w = "" + o.key), o.ref !== void 0 && (d = o.ref);
    for (x in o) f.call(o, x) && !n.hasOwnProperty(x) && (_[x] = o[x]);
    if (i && i.defaultProps) for (x in o = i.defaultProps, o) _[x] === void 0 && (_[x] = o[x]);
    return { $$typeof: l, type: i, key: w, ref: d, props: _, _owner: c.current };
  }
  return st.Fragment = r, st.jsx = s, st.jsxs = s, st;
}
var ot = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ft;
function Er() {
  return Ft || (Ft = 1, process.env.NODE_ENV !== "production" && function() {
    var e = qt, l = Symbol.for("react.element"), r = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), o = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), x = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), d = Symbol.for("react.offscreen"), y = Symbol.iterator, u = "@@iterator";
    function m(E) {
      if (E === null || typeof E != "object")
        return null;
      var Y = y && E[y] || E[u];
      return typeof Y == "function" ? Y : null;
    }
    var h = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(E) {
      {
        for (var Y = arguments.length, Q = new Array(Y > 1 ? Y - 1 : 0), ue = 1; ue < Y; ue++)
          Q[ue - 1] = arguments[ue];
        k("error", E, Q);
      }
    }
    function k(E, Y, Q) {
      {
        var ue = h.ReactDebugCurrentFrame, we = ue.getStackAddendum();
        we !== "" && (Y += "%s", Q = Q.concat([we]));
        var ye = Q.map(function(me) {
          return String(me);
        });
        ye.unshift("Warning: " + Y), Function.prototype.apply.call(console[E], console, ye);
      }
    }
    var C = !1, R = !1, P = !1, O = !1, U = !1, j;
    j = Symbol.for("react.module.reference");
    function $(E) {
      return !!(typeof E == "string" || typeof E == "function" || E === f || E === n || U || E === c || E === b || E === x || O || E === d || C || R || P || typeof E == "object" && E !== null && (E.$$typeof === w || E.$$typeof === _ || E.$$typeof === s || E.$$typeof === i || E.$$typeof === o || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      E.$$typeof === j || E.getModuleId !== void 0));
    }
    function re(E, Y, Q) {
      var ue = E.displayName;
      if (ue)
        return ue;
      var we = Y.displayName || Y.name || "";
      return we !== "" ? Q + "(" + we + ")" : Q;
    }
    function S(E) {
      return E.displayName || "Context";
    }
    function T(E) {
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
        case b:
          return "Suspense";
        case x:
          return "SuspenseList";
      }
      if (typeof E == "object")
        switch (E.$$typeof) {
          case i:
            var Y = E;
            return S(Y) + ".Consumer";
          case s:
            var Q = E;
            return S(Q._context) + ".Provider";
          case o:
            return re(E, E.render, "ForwardRef");
          case _:
            var ue = E.displayName || null;
            return ue !== null ? ue : T(E.type) || "Memo";
          case w: {
            var we = E, ye = we._payload, me = we._init;
            try {
              return T(me(ye));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var a = Object.assign, F = 0, ie, Z, ae, V, se, D, A;
    function ee() {
    }
    ee.__reactDisabledLog = !0;
    function H() {
      {
        if (F === 0) {
          ie = console.log, Z = console.info, ae = console.warn, V = console.error, se = console.group, D = console.groupCollapsed, A = console.groupEnd;
          var E = {
            configurable: !0,
            enumerable: !0,
            value: ee,
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
            log: a({}, E, {
              value: ie
            }),
            info: a({}, E, {
              value: Z
            }),
            warn: a({}, E, {
              value: ae
            }),
            error: a({}, E, {
              value: V
            }),
            group: a({}, E, {
              value: se
            }),
            groupCollapsed: a({}, E, {
              value: D
            }),
            groupEnd: a({}, E, {
              value: A
            })
          });
        }
        F < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ve = h.ReactCurrentDispatcher, Ee;
    function fe(E, Y, Q) {
      {
        if (Ee === void 0)
          try {
            throw Error();
          } catch (we) {
            var ue = we.stack.trim().match(/\n( *(at )?)/);
            Ee = ue && ue[1] || "";
          }
        return `
` + Ee + E;
      }
    }
    var ne = !1, be;
    {
      var de = typeof WeakMap == "function" ? WeakMap : Map;
      be = new de();
    }
    function _e(E, Y) {
      if (!E || ne)
        return "";
      {
        var Q = be.get(E);
        if (Q !== void 0)
          return Q;
      }
      var ue;
      ne = !0;
      var we = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ye;
      ye = ve.current, ve.current = null, H();
      try {
        if (Y) {
          var me = function() {
            throw Error();
          };
          if (Object.defineProperty(me.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(me, []);
            } catch (je) {
              ue = je;
            }
            Reflect.construct(E, [], me);
          } else {
            try {
              me.call();
            } catch (je) {
              ue = je;
            }
            E.call(me.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (je) {
            ue = je;
          }
          E();
        }
      } catch (je) {
        if (je && ue && typeof je.stack == "string") {
          for (var pe = je.stack.split(`
`), Pe = ue.stack.split(`
`), Ce = pe.length - 1, ze = Pe.length - 1; Ce >= 1 && ze >= 0 && pe[Ce] !== Pe[ze]; )
            ze--;
          for (; Ce >= 1 && ze >= 0; Ce--, ze--)
            if (pe[Ce] !== Pe[ze]) {
              if (Ce !== 1 || ze !== 1)
                do
                  if (Ce--, ze--, ze < 0 || pe[Ce] !== Pe[ze]) {
                    var Le = `
` + pe[Ce].replace(" at new ", " at ");
                    return E.displayName && Le.includes("<anonymous>") && (Le = Le.replace("<anonymous>", E.displayName)), typeof E == "function" && be.set(E, Le), Le;
                  }
                while (Ce >= 1 && ze >= 0);
              break;
            }
        }
      } finally {
        ne = !1, ve.current = ye, q(), Error.prepareStackTrace = we;
      }
      var rt = E ? E.displayName || E.name : "", Qe = rt ? fe(rt) : "";
      return typeof E == "function" && be.set(E, Qe), Qe;
    }
    function ke(E, Y, Q) {
      return _e(E, !1);
    }
    function t(E) {
      var Y = E.prototype;
      return !!(Y && Y.isReactComponent);
    }
    function L(E, Y, Q) {
      if (E == null)
        return "";
      if (typeof E == "function")
        return _e(E, t(E));
      if (typeof E == "string")
        return fe(E);
      switch (E) {
        case b:
          return fe("Suspense");
        case x:
          return fe("SuspenseList");
      }
      if (typeof E == "object")
        switch (E.$$typeof) {
          case o:
            return ke(E.render);
          case _:
            return L(E.type, Y, Q);
          case w: {
            var ue = E, we = ue._payload, ye = ue._init;
            try {
              return L(ye(we), Y, Q);
            } catch {
            }
          }
        }
      return "";
    }
    var N = Object.prototype.hasOwnProperty, v = {}, p = h.ReactDebugCurrentFrame;
    function z(E) {
      if (E) {
        var Y = E._owner, Q = L(E.type, E._source, Y ? Y.type : null);
        p.setExtraStackFrame(Q);
      } else
        p.setExtraStackFrame(null);
    }
    function M(E, Y, Q, ue, we) {
      {
        var ye = Function.call.bind(N);
        for (var me in E)
          if (ye(E, me)) {
            var pe = void 0;
            try {
              if (typeof E[me] != "function") {
                var Pe = Error((ue || "React class") + ": " + Q + " type `" + me + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof E[me] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Pe.name = "Invariant Violation", Pe;
              }
              pe = E[me](Y, me, ue, Q, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ce) {
              pe = Ce;
            }
            pe && !(pe instanceof Error) && (z(we), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ue || "React class", Q, me, typeof pe), z(null)), pe instanceof Error && !(pe.message in v) && (v[pe.message] = !0, z(we), g("Failed %s type: %s", Q, pe.message), z(null));
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
    function oe(E) {
      if (J(E))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", X(E)), K(E);
    }
    var ge = h.ReactCurrentOwner, he = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Te, Be;
    function Oe(E) {
      if (N.call(E, "ref")) {
        var Y = Object.getOwnPropertyDescriptor(E, "ref").get;
        if (Y && Y.isReactWarning)
          return !1;
      }
      return E.ref !== void 0;
    }
    function We(E) {
      if (N.call(E, "key")) {
        var Y = Object.getOwnPropertyDescriptor(E, "key").get;
        if (Y && Y.isReactWarning)
          return !1;
      }
      return E.key !== void 0;
    }
    function xe(E, Y) {
      typeof E.ref == "string" && ge.current;
    }
    function Xe(E, Y) {
      {
        var Q = function() {
          Te || (Te = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Y));
        };
        Q.isReactWarning = !0, Object.defineProperty(E, "key", {
          get: Q,
          configurable: !0
        });
      }
    }
    function Ye(E, Y) {
      {
        var Q = function() {
          Be || (Be = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Y));
        };
        Q.isReactWarning = !0, Object.defineProperty(E, "ref", {
          get: Q,
          configurable: !0
        });
      }
    }
    var Ie = function(E, Y, Q, ue, we, ye, me) {
      var pe = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: l,
        // Built-in properties that belong on the element
        type: E,
        key: Y,
        ref: Q,
        props: me,
        // Record the component responsible for creating this element.
        _owner: ye
      };
      return pe._store = {}, Object.defineProperty(pe._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(pe, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ue
      }), Object.defineProperty(pe, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: we
      }), Object.freeze && (Object.freeze(pe.props), Object.freeze(pe)), pe;
    };
    function et(E, Y, Q, ue, we) {
      {
        var ye, me = {}, pe = null, Pe = null;
        Q !== void 0 && (oe(Q), pe = "" + Q), We(Y) && (oe(Y.key), pe = "" + Y.key), Oe(Y) && (Pe = Y.ref, xe(Y, we));
        for (ye in Y)
          N.call(Y, ye) && !he.hasOwnProperty(ye) && (me[ye] = Y[ye]);
        if (E && E.defaultProps) {
          var Ce = E.defaultProps;
          for (ye in Ce)
            me[ye] === void 0 && (me[ye] = Ce[ye]);
        }
        if (pe || Pe) {
          var ze = typeof E == "function" ? E.displayName || E.name || "Unknown" : E;
          pe && Xe(me, ze), Pe && Ye(me, ze);
        }
        return Ie(E, pe, Pe, we, ue, ge.current, me);
      }
    }
    var Je = h.ReactCurrentOwner, tt = h.ReactDebugCurrentFrame;
    function Ze(E) {
      if (E) {
        var Y = E._owner, Q = L(E.type, E._source, Y ? Y.type : null);
        tt.setExtraStackFrame(Q);
      } else
        tt.setExtraStackFrame(null);
    }
    var Ke;
    Ke = !1;
    function Fe(E) {
      return typeof E == "object" && E !== null && E.$$typeof === l;
    }
    function He() {
      {
        if (Je.current) {
          var E = T(Je.current.type);
          if (E)
            return `

Check the render method of \`` + E + "`.";
        }
        return "";
      }
    }
    function lt(E) {
      return "";
    }
    var at = {};
    function B(E) {
      {
        var Y = He();
        if (!Y) {
          var Q = typeof E == "string" ? E : E.displayName || E.name;
          Q && (Y = `

Check the top-level render call using <` + Q + ">.");
        }
        return Y;
      }
    }
    function te(E, Y) {
      {
        if (!E._store || E._store.validated || E.key != null)
          return;
        E._store.validated = !0;
        var Q = B(Y);
        if (at[Q])
          return;
        at[Q] = !0;
        var ue = "";
        E && E._owner && E._owner !== Je.current && (ue = " It was passed a child from " + T(E._owner.type) + "."), Ze(E), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Q, ue), Ze(null);
      }
    }
    function ce(E, Y) {
      {
        if (typeof E != "object")
          return;
        if (I(E))
          for (var Q = 0; Q < E.length; Q++) {
            var ue = E[Q];
            Fe(ue) && te(ue, Y);
          }
        else if (Fe(E))
          E._store && (E._store.validated = !0);
        else if (E) {
          var we = m(E);
          if (typeof we == "function" && we !== E.entries)
            for (var ye = we.call(E), me; !(me = ye.next()).done; )
              Fe(me.value) && te(me.value, Y);
        }
      }
    }
    function Se(E) {
      {
        var Y = E.type;
        if (Y == null || typeof Y == "string")
          return;
        var Q;
        if (typeof Y == "function")
          Q = Y.propTypes;
        else if (typeof Y == "object" && (Y.$$typeof === o || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        Y.$$typeof === _))
          Q = Y.propTypes;
        else
          return;
        if (Q) {
          var ue = T(Y);
          M(Q, E.props, "prop", ue, E);
        } else if (Y.PropTypes !== void 0 && !Ke) {
          Ke = !0;
          var we = T(Y);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", we || "Unknown");
        }
        typeof Y.getDefaultProps == "function" && !Y.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ae(E) {
      {
        for (var Y = Object.keys(E.props), Q = 0; Q < Y.length; Q++) {
          var ue = Y[Q];
          if (ue !== "children" && ue !== "key") {
            Ze(E), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ue), Ze(null);
            break;
          }
        }
        E.ref !== null && (Ze(E), g("Invalid attribute `ref` supplied to `React.Fragment`."), Ze(null));
      }
    }
    var Ge = {};
    function Pt(E, Y, Q, ue, we, ye) {
      {
        var me = $(E);
        if (!me) {
          var pe = "";
          (E === void 0 || typeof E == "object" && E !== null && Object.keys(E).length === 0) && (pe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Pe = lt();
          Pe ? pe += Pe : pe += He();
          var Ce;
          E === null ? Ce = "null" : I(E) ? Ce = "array" : E !== void 0 && E.$$typeof === l ? (Ce = "<" + (T(E.type) || "Unknown") + " />", pe = " Did you accidentally export a JSX literal instead of a component?") : Ce = typeof E, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ce, pe);
        }
        var ze = et(E, Y, Q, we, ye);
        if (ze == null)
          return ze;
        if (me) {
          var Le = Y.children;
          if (Le !== void 0)
            if (ue)
              if (I(Le)) {
                for (var rt = 0; rt < Le.length; rt++)
                  ce(Le[rt], E);
                Object.freeze && Object.freeze(Le);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ce(Le, E);
        }
        if (N.call(Y, "key")) {
          var Qe = T(E), je = Object.keys(Y).filter(function(mr) {
            return mr !== "key";
          }), wt = je.length > 0 ? "{key: someKey, " + je.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ge[Qe + wt]) {
            var pr = je.length > 0 ? "{" + je.join(": ..., ") + ": ...}" : "{}";
            g(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, wt, Qe, pr, Qe), Ge[Qe + wt] = !0;
          }
        }
        return E === f ? Ae(ze) : Se(ze), ze;
      }
    }
    function ur(E, Y, Q) {
      return Pt(E, Y, Q, !0);
    }
    function dr(E, Y, Q) {
      return Pt(E, Y, Q, !1);
    }
    var fr = dr, hr = ur;
    ot.Fragment = f, ot.jsx = fr, ot.jsxs = hr;
  }()), ot;
}
process.env.NODE_ENV === "production" ? Ct.exports = kr() : Ct.exports = Er();
var G = Ct.exports;
function dt(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Jt = { exports: {} };
/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/
(function(e, l) {
  (function(r) {
    e.exports = r();
  })(function() {
    return function r(f, c, n) {
      function s(b, x) {
        if (!c[b]) {
          if (!f[b]) {
            var _ = typeof dt == "function" && dt;
            if (!x && _) return _(b, !0);
            if (i) return i(b, !0);
            var w = new Error("Cannot find module '" + b + "'");
            throw w.code = "MODULE_NOT_FOUND", w;
          }
          var d = c[b] = { exports: {} };
          f[b][0].call(d.exports, function(y) {
            var u = f[b][1][y];
            return s(u || y);
          }, d, d.exports, r, f, c, n);
        }
        return c[b].exports;
      }
      for (var i = typeof dt == "function" && dt, o = 0; o < n.length; o++) s(n[o]);
      return s;
    }({ 1: [function(r, f, c) {
      var n = r("./utils"), s = r("./support"), i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      c.encode = function(o) {
        for (var b, x, _, w, d, y, u, m = [], h = 0, g = o.length, k = g, C = n.getTypeOf(o) !== "string"; h < o.length; ) k = g - h, _ = C ? (b = o[h++], x = h < g ? o[h++] : 0, h < g ? o[h++] : 0) : (b = o.charCodeAt(h++), x = h < g ? o.charCodeAt(h++) : 0, h < g ? o.charCodeAt(h++) : 0), w = b >> 2, d = (3 & b) << 4 | x >> 4, y = 1 < k ? (15 & x) << 2 | _ >> 6 : 64, u = 2 < k ? 63 & _ : 64, m.push(i.charAt(w) + i.charAt(d) + i.charAt(y) + i.charAt(u));
        return m.join("");
      }, c.decode = function(o) {
        var b, x, _, w, d, y, u = 0, m = 0, h = "data:";
        if (o.substr(0, h.length) === h) throw new Error("Invalid base64 input, it looks like a data url.");
        var g, k = 3 * (o = o.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
        if (o.charAt(o.length - 1) === i.charAt(64) && k--, o.charAt(o.length - 2) === i.charAt(64) && k--, k % 1 != 0) throw new Error("Invalid base64 input, bad content length.");
        for (g = s.uint8array ? new Uint8Array(0 | k) : new Array(0 | k); u < o.length; ) b = i.indexOf(o.charAt(u++)) << 2 | (w = i.indexOf(o.charAt(u++))) >> 4, x = (15 & w) << 4 | (d = i.indexOf(o.charAt(u++))) >> 2, _ = (3 & d) << 6 | (y = i.indexOf(o.charAt(u++))), g[m++] = b, d !== 64 && (g[m++] = x), y !== 64 && (g[m++] = _);
        return g;
      };
    }, { "./support": 30, "./utils": 32 }], 2: [function(r, f, c) {
      var n = r("./external"), s = r("./stream/DataWorker"), i = r("./stream/Crc32Probe"), o = r("./stream/DataLengthProbe");
      function b(x, _, w, d, y) {
        this.compressedSize = x, this.uncompressedSize = _, this.crc32 = w, this.compression = d, this.compressedContent = y;
      }
      b.prototype = { getContentWorker: function() {
        var x = new s(n.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new o("data_length")), _ = this;
        return x.on("end", function() {
          if (this.streamInfo.data_length !== _.uncompressedSize) throw new Error("Bug : uncompressed data size mismatch");
        }), x;
      }, getCompressedWorker: function() {
        return new s(n.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
      } }, b.createWorkerFrom = function(x, _, w) {
        return x.pipe(new i()).pipe(new o("uncompressedSize")).pipe(_.compressWorker(w)).pipe(new o("compressedSize")).withStreamInfo("compression", _);
      }, f.exports = b;
    }, { "./external": 6, "./stream/Crc32Probe": 25, "./stream/DataLengthProbe": 26, "./stream/DataWorker": 27 }], 3: [function(r, f, c) {
      var n = r("./stream/GenericWorker");
      c.STORE = { magic: "\0\0", compressWorker: function() {
        return new n("STORE compression");
      }, uncompressWorker: function() {
        return new n("STORE decompression");
      } }, c.DEFLATE = r("./flate");
    }, { "./flate": 7, "./stream/GenericWorker": 28 }], 4: [function(r, f, c) {
      var n = r("./utils"), s = function() {
        for (var i, o = [], b = 0; b < 256; b++) {
          i = b;
          for (var x = 0; x < 8; x++) i = 1 & i ? 3988292384 ^ i >>> 1 : i >>> 1;
          o[b] = i;
        }
        return o;
      }();
      f.exports = function(i, o) {
        return i !== void 0 && i.length ? n.getTypeOf(i) !== "string" ? function(b, x, _, w) {
          var d = s, y = w + _;
          b ^= -1;
          for (var u = w; u < y; u++) b = b >>> 8 ^ d[255 & (b ^ x[u])];
          return -1 ^ b;
        }(0 | o, i, i.length, 0) : function(b, x, _, w) {
          var d = s, y = w + _;
          b ^= -1;
          for (var u = w; u < y; u++) b = b >>> 8 ^ d[255 & (b ^ x.charCodeAt(u))];
          return -1 ^ b;
        }(0 | o, i, i.length, 0) : 0;
      };
    }, { "./utils": 32 }], 5: [function(r, f, c) {
      c.base64 = !1, c.binary = !1, c.dir = !1, c.createFolders = !0, c.date = null, c.compression = null, c.compressionOptions = null, c.comment = null, c.unixPermissions = null, c.dosPermissions = null;
    }, {}], 6: [function(r, f, c) {
      var n = null;
      n = typeof Promise < "u" ? Promise : r("lie"), f.exports = { Promise: n };
    }, { lie: 37 }], 7: [function(r, f, c) {
      var n = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Uint32Array < "u", s = r("pako"), i = r("./utils"), o = r("./stream/GenericWorker"), b = n ? "uint8array" : "array";
      function x(_, w) {
        o.call(this, "FlateWorker/" + _), this._pako = null, this._pakoAction = _, this._pakoOptions = w, this.meta = {};
      }
      c.magic = "\b\0", i.inherits(x, o), x.prototype.processChunk = function(_) {
        this.meta = _.meta, this._pako === null && this._createPako(), this._pako.push(i.transformTo(b, _.data), !1);
      }, x.prototype.flush = function() {
        o.prototype.flush.call(this), this._pako === null && this._createPako(), this._pako.push([], !0);
      }, x.prototype.cleanUp = function() {
        o.prototype.cleanUp.call(this), this._pako = null;
      }, x.prototype._createPako = function() {
        this._pako = new s[this._pakoAction]({ raw: !0, level: this._pakoOptions.level || -1 });
        var _ = this;
        this._pako.onData = function(w) {
          _.push({ data: w, meta: _.meta });
        };
      }, c.compressWorker = function(_) {
        return new x("Deflate", _);
      }, c.uncompressWorker = function() {
        return new x("Inflate", {});
      };
    }, { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 }], 8: [function(r, f, c) {
      function n(d, y) {
        var u, m = "";
        for (u = 0; u < y; u++) m += String.fromCharCode(255 & d), d >>>= 8;
        return m;
      }
      function s(d, y, u, m, h, g) {
        var k, C, R = d.file, P = d.compression, O = g !== b.utf8encode, U = i.transformTo("string", g(R.name)), j = i.transformTo("string", b.utf8encode(R.name)), $ = R.comment, re = i.transformTo("string", g($)), S = i.transformTo("string", b.utf8encode($)), T = j.length !== R.name.length, a = S.length !== $.length, F = "", ie = "", Z = "", ae = R.dir, V = R.date, se = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
        y && !u || (se.crc32 = d.crc32, se.compressedSize = d.compressedSize, se.uncompressedSize = d.uncompressedSize);
        var D = 0;
        y && (D |= 8), O || !T && !a || (D |= 2048);
        var A = 0, ee = 0;
        ae && (A |= 16), h === "UNIX" ? (ee = 798, A |= function(q, ve) {
          var Ee = q;
          return q || (Ee = ve ? 16893 : 33204), (65535 & Ee) << 16;
        }(R.unixPermissions, ae)) : (ee = 20, A |= function(q) {
          return 63 & (q || 0);
        }(R.dosPermissions)), k = V.getUTCHours(), k <<= 6, k |= V.getUTCMinutes(), k <<= 5, k |= V.getUTCSeconds() / 2, C = V.getUTCFullYear() - 1980, C <<= 4, C |= V.getUTCMonth() + 1, C <<= 5, C |= V.getUTCDate(), T && (ie = n(1, 1) + n(x(U), 4) + j, F += "up" + n(ie.length, 2) + ie), a && (Z = n(1, 1) + n(x(re), 4) + S, F += "uc" + n(Z.length, 2) + Z);
        var H = "";
        return H += `
\0`, H += n(D, 2), H += P.magic, H += n(k, 2), H += n(C, 2), H += n(se.crc32, 4), H += n(se.compressedSize, 4), H += n(se.uncompressedSize, 4), H += n(U.length, 2), H += n(F.length, 2), { fileRecord: _.LOCAL_FILE_HEADER + H + U + F, dirRecord: _.CENTRAL_FILE_HEADER + n(ee, 2) + H + n(re.length, 2) + "\0\0\0\0" + n(A, 4) + n(m, 4) + U + F + re };
      }
      var i = r("../utils"), o = r("../stream/GenericWorker"), b = r("../utf8"), x = r("../crc32"), _ = r("../signature");
      function w(d, y, u, m) {
        o.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = y, this.zipPlatform = u, this.encodeFileName = m, this.streamFiles = d, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
      }
      i.inherits(w, o), w.prototype.push = function(d) {
        var y = d.meta.percent || 0, u = this.entriesCount, m = this._sources.length;
        this.accumulate ? this.contentBuffer.push(d) : (this.bytesWritten += d.data.length, o.prototype.push.call(this, { data: d.data, meta: { currentFile: this.currentFile, percent: u ? (y + 100 * (u - m - 1)) / u : 100 } }));
      }, w.prototype.openedSource = function(d) {
        this.currentSourceOffset = this.bytesWritten, this.currentFile = d.file.name;
        var y = this.streamFiles && !d.file.dir;
        if (y) {
          var u = s(d, y, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
          this.push({ data: u.fileRecord, meta: { percent: 0 } });
        } else this.accumulate = !0;
      }, w.prototype.closedSource = function(d) {
        this.accumulate = !1;
        var y = this.streamFiles && !d.file.dir, u = s(d, y, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
        if (this.dirRecords.push(u.dirRecord), y) this.push({ data: function(m) {
          return _.DATA_DESCRIPTOR + n(m.crc32, 4) + n(m.compressedSize, 4) + n(m.uncompressedSize, 4);
        }(d), meta: { percent: 100 } });
        else for (this.push({ data: u.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length; ) this.push(this.contentBuffer.shift());
        this.currentFile = null;
      }, w.prototype.flush = function() {
        for (var d = this.bytesWritten, y = 0; y < this.dirRecords.length; y++) this.push({ data: this.dirRecords[y], meta: { percent: 100 } });
        var u = this.bytesWritten - d, m = function(h, g, k, C, R) {
          var P = i.transformTo("string", R(C));
          return _.CENTRAL_DIRECTORY_END + "\0\0\0\0" + n(h, 2) + n(h, 2) + n(g, 4) + n(k, 4) + n(P.length, 2) + P;
        }(this.dirRecords.length, u, d, this.zipComment, this.encodeFileName);
        this.push({ data: m, meta: { percent: 100 } });
      }, w.prototype.prepareNextSource = function() {
        this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
      }, w.prototype.registerPrevious = function(d) {
        this._sources.push(d);
        var y = this;
        return d.on("data", function(u) {
          y.processChunk(u);
        }), d.on("end", function() {
          y.closedSource(y.previous.streamInfo), y._sources.length ? y.prepareNextSource() : y.end();
        }), d.on("error", function(u) {
          y.error(u);
        }), this;
      }, w.prototype.resume = function() {
        return !!o.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0));
      }, w.prototype.error = function(d) {
        var y = this._sources;
        if (!o.prototype.error.call(this, d)) return !1;
        for (var u = 0; u < y.length; u++) try {
          y[u].error(d);
        } catch {
        }
        return !0;
      }, w.prototype.lock = function() {
        o.prototype.lock.call(this);
        for (var d = this._sources, y = 0; y < d.length; y++) d[y].lock();
      }, f.exports = w;
    }, { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 }], 9: [function(r, f, c) {
      var n = r("../compressions"), s = r("./ZipFileWorker");
      c.generateWorker = function(i, o, b) {
        var x = new s(o.streamFiles, b, o.platform, o.encodeFileName), _ = 0;
        try {
          i.forEach(function(w, d) {
            _++;
            var y = function(g, k) {
              var C = g || k, R = n[C];
              if (!R) throw new Error(C + " is not a valid compression method !");
              return R;
            }(d.options.compression, o.compression), u = d.options.compressionOptions || o.compressionOptions || {}, m = d.dir, h = d.date;
            d._compressWorker(y, u).withStreamInfo("file", { name: w, dir: m, date: h, comment: d.comment || "", unixPermissions: d.unixPermissions, dosPermissions: d.dosPermissions }).pipe(x);
          }), x.entriesCount = _;
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
          var s = new n();
          for (var i in this) typeof this[i] != "function" && (s[i] = this[i]);
          return s;
        };
      }
      (n.prototype = r("./object")).loadAsync = r("./load"), n.support = r("./support"), n.defaults = r("./defaults"), n.version = "3.10.1", n.loadAsync = function(s, i) {
        return new n().loadAsync(s, i);
      }, n.external = r("./external"), f.exports = n;
    }, { "./defaults": 5, "./external": 6, "./load": 11, "./object": 15, "./support": 30 }], 11: [function(r, f, c) {
      var n = r("./utils"), s = r("./external"), i = r("./utf8"), o = r("./zipEntries"), b = r("./stream/Crc32Probe"), x = r("./nodejsUtils");
      function _(w) {
        return new s.Promise(function(d, y) {
          var u = w.decompressed.getContentWorker().pipe(new b());
          u.on("error", function(m) {
            y(m);
          }).on("end", function() {
            u.streamInfo.crc32 !== w.decompressed.crc32 ? y(new Error("Corrupted zip : CRC32 mismatch")) : d();
          }).resume();
        });
      }
      f.exports = function(w, d) {
        var y = this;
        return d = n.extend(d || {}, { base64: !1, checkCRC32: !1, optimizedBinaryString: !1, createFolders: !1, decodeFileName: i.utf8decode }), x.isNode && x.isStream(w) ? s.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : n.prepareContent("the loaded zip file", w, !0, d.optimizedBinaryString, d.base64).then(function(u) {
          var m = new o(d);
          return m.load(u), m;
        }).then(function(u) {
          var m = [s.Promise.resolve(u)], h = u.files;
          if (d.checkCRC32) for (var g = 0; g < h.length; g++) m.push(_(h[g]));
          return s.Promise.all(m);
        }).then(function(u) {
          for (var m = u.shift(), h = m.files, g = 0; g < h.length; g++) {
            var k = h[g], C = k.fileNameStr, R = n.resolve(k.fileNameStr);
            y.file(R, k.decompressed, { binary: !0, optimizedBinaryString: !0, date: k.date, dir: k.dir, comment: k.fileCommentStr.length ? k.fileCommentStr : null, unixPermissions: k.unixPermissions, dosPermissions: k.dosPermissions, createFolders: d.createFolders }), k.dir || (y.file(R).unsafeOriginalName = C);
          }
          return m.zipComment.length && (y.comment = m.zipComment), y;
        });
      };
    }, { "./external": 6, "./nodejsUtils": 14, "./stream/Crc32Probe": 25, "./utf8": 31, "./utils": 32, "./zipEntries": 33 }], 12: [function(r, f, c) {
      var n = r("../utils"), s = r("../stream/GenericWorker");
      function i(o, b) {
        s.call(this, "Nodejs stream input adapter for " + o), this._upstreamEnded = !1, this._bindStream(b);
      }
      n.inherits(i, s), i.prototype._bindStream = function(o) {
        var b = this;
        (this._stream = o).pause(), o.on("data", function(x) {
          b.push({ data: x, meta: { percent: 0 } });
        }).on("error", function(x) {
          b.isPaused ? this.generatedError = x : b.error(x);
        }).on("end", function() {
          b.isPaused ? b._upstreamEnded = !0 : b.end();
        });
      }, i.prototype.pause = function() {
        return !!s.prototype.pause.call(this) && (this._stream.pause(), !0);
      }, i.prototype.resume = function() {
        return !!s.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), !0);
      }, f.exports = i;
    }, { "../stream/GenericWorker": 28, "../utils": 32 }], 13: [function(r, f, c) {
      var n = r("readable-stream").Readable;
      function s(i, o, b) {
        n.call(this, o), this._helper = i;
        var x = this;
        i.on("data", function(_, w) {
          x.push(_) || x._helper.pause(), b && b(w);
        }).on("error", function(_) {
          x.emit("error", _);
        }).on("end", function() {
          x.push(null);
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
      function n(R, P, O) {
        var U, j = i.getTypeOf(P), $ = i.extend(O || {}, x);
        $.date = $.date || /* @__PURE__ */ new Date(), $.compression !== null && ($.compression = $.compression.toUpperCase()), typeof $.unixPermissions == "string" && ($.unixPermissions = parseInt($.unixPermissions, 8)), $.unixPermissions && 16384 & $.unixPermissions && ($.dir = !0), $.dosPermissions && 16 & $.dosPermissions && ($.dir = !0), $.dir && (R = h(R)), $.createFolders && (U = m(R)) && g.call(this, U, !0);
        var re = j === "string" && $.binary === !1 && $.base64 === !1;
        O && O.binary !== void 0 || ($.binary = !re), (P instanceof _ && P.uncompressedSize === 0 || $.dir || !P || P.length === 0) && ($.base64 = !1, $.binary = !0, P = "", $.compression = "STORE", j = "string");
        var S = null;
        S = P instanceof _ || P instanceof o ? P : y.isNode && y.isStream(P) ? new u(R, P) : i.prepareContent(R, P, $.binary, $.optimizedBinaryString, $.base64);
        var T = new w(R, S, $);
        this.files[R] = T;
      }
      var s = r("./utf8"), i = r("./utils"), o = r("./stream/GenericWorker"), b = r("./stream/StreamHelper"), x = r("./defaults"), _ = r("./compressedObject"), w = r("./zipObject"), d = r("./generate"), y = r("./nodejsUtils"), u = r("./nodejs/NodejsStreamInputAdapter"), m = function(R) {
        R.slice(-1) === "/" && (R = R.substring(0, R.length - 1));
        var P = R.lastIndexOf("/");
        return 0 < P ? R.substring(0, P) : "";
      }, h = function(R) {
        return R.slice(-1) !== "/" && (R += "/"), R;
      }, g = function(R, P) {
        return P = P !== void 0 ? P : x.createFolders, R = h(R), this.files[R] || n.call(this, R, null, { dir: !0, createFolders: P }), this.files[R];
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
          return this.filter(function($, re) {
            return !re.dir && U.test($);
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
          if ((O = i.extend(R || {}, { streamFiles: !1, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: s.utf8encode })).type = O.type.toLowerCase(), O.compression = O.compression.toUpperCase(), O.type === "binarystring" && (O.type = "string"), !O.type) throw new Error("No output type specified.");
          i.checkSupport(O.type), O.platform !== "darwin" && O.platform !== "freebsd" && O.platform !== "linux" && O.platform !== "sunos" || (O.platform = "UNIX"), O.platform === "win32" && (O.platform = "DOS");
          var U = O.comment || this.comment || "";
          P = d.generateWorker(this, O, U);
        } catch (j) {
          (P = new o("error")).error(j);
        }
        return new b(P, O.type || "string", O.mimeType);
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
      function s(i) {
        n.call(this, i);
        for (var o = 0; o < this.data.length; o++) i[o] = 255 & i[o];
      }
      r("../utils").inherits(s, n), s.prototype.byteAt = function(i) {
        return this.data[this.zero + i];
      }, s.prototype.lastIndexOfSignature = function(i) {
        for (var o = i.charCodeAt(0), b = i.charCodeAt(1), x = i.charCodeAt(2), _ = i.charCodeAt(3), w = this.length - 4; 0 <= w; --w) if (this.data[w] === o && this.data[w + 1] === b && this.data[w + 2] === x && this.data[w + 3] === _) return w - this.zero;
        return -1;
      }, s.prototype.readAndCheckSignature = function(i) {
        var o = i.charCodeAt(0), b = i.charCodeAt(1), x = i.charCodeAt(2), _ = i.charCodeAt(3), w = this.readData(4);
        return o === w[0] && b === w[1] && x === w[2] && _ === w[3];
      }, s.prototype.readData = function(i) {
        if (this.checkOffset(i), i === 0) return [];
        var o = this.data.slice(this.zero + this.index, this.zero + this.index + i);
        return this.index += i, o;
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
        var o, b = 0;
        for (this.checkOffset(i), o = this.index + i - 1; o >= this.index; o--) b = (b << 8) + this.byteAt(o);
        return this.index += i, b;
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
        var o = this.data.slice(this.zero + this.index, this.zero + this.index + i);
        return this.index += i, o;
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
        var o = this.data.slice(this.zero + this.index, this.zero + this.index + i);
        return this.index += i, o;
      }, f.exports = s;
    }, { "../utils": 32, "./DataReader": 18 }], 21: [function(r, f, c) {
      var n = r("./ArrayReader");
      function s(i) {
        n.call(this, i);
      }
      r("../utils").inherits(s, n), s.prototype.readData = function(i) {
        if (this.checkOffset(i), i === 0) return new Uint8Array(0);
        var o = this.data.subarray(this.zero + this.index, this.zero + this.index + i);
        return this.index += i, o;
      }, f.exports = s;
    }, { "../utils": 32, "./ArrayReader": 17 }], 22: [function(r, f, c) {
      var n = r("../utils"), s = r("../support"), i = r("./ArrayReader"), o = r("./StringReader"), b = r("./NodeBufferReader"), x = r("./Uint8ArrayReader");
      f.exports = function(_) {
        var w = n.getTypeOf(_);
        return n.checkSupport(w), w !== "string" || s.uint8array ? w === "nodebuffer" ? new b(_) : s.uint8array ? new x(n.transformTo("uint8array", _)) : new i(n.transformTo("array", _)) : new o(_);
      };
    }, { "../support": 30, "../utils": 32, "./ArrayReader": 17, "./NodeBufferReader": 19, "./StringReader": 20, "./Uint8ArrayReader": 21 }], 23: [function(r, f, c) {
      c.LOCAL_FILE_HEADER = "PK", c.CENTRAL_FILE_HEADER = "PK", c.CENTRAL_DIRECTORY_END = "PK", c.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", c.ZIP64_CENTRAL_DIRECTORY_END = "PK", c.DATA_DESCRIPTOR = "PK\x07\b";
    }, {}], 24: [function(r, f, c) {
      var n = r("./GenericWorker"), s = r("../utils");
      function i(o) {
        n.call(this, "ConvertWorker to " + o), this.destType = o;
      }
      s.inherits(i, n), i.prototype.processChunk = function(o) {
        this.push({ data: s.transformTo(this.destType, o.data), meta: o.meta });
      }, f.exports = i;
    }, { "../utils": 32, "./GenericWorker": 28 }], 25: [function(r, f, c) {
      var n = r("./GenericWorker"), s = r("../crc32");
      function i() {
        n.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
      }
      r("../utils").inherits(i, n), i.prototype.processChunk = function(o) {
        this.streamInfo.crc32 = s(o.data, this.streamInfo.crc32 || 0), this.push(o);
      }, f.exports = i;
    }, { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 }], 26: [function(r, f, c) {
      var n = r("../utils"), s = r("./GenericWorker");
      function i(o) {
        s.call(this, "DataLengthProbe for " + o), this.propName = o, this.withStreamInfo(o, 0);
      }
      n.inherits(i, s), i.prototype.processChunk = function(o) {
        if (o) {
          var b = this.streamInfo[this.propName] || 0;
          this.streamInfo[this.propName] = b + o.data.length;
        }
        s.prototype.processChunk.call(this, o);
      }, f.exports = i;
    }, { "../utils": 32, "./GenericWorker": 28 }], 27: [function(r, f, c) {
      var n = r("../utils"), s = r("./GenericWorker");
      function i(o) {
        s.call(this, "DataWorker");
        var b = this;
        this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, o.then(function(x) {
          b.dataIsReady = !0, b.data = x, b.max = x && x.length || 0, b.type = n.getTypeOf(x), b.isPaused || b._tickAndRepeat();
        }, function(x) {
          b.error(x);
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
        var o = null, b = Math.min(this.max, this.index + 16384);
        if (this.index >= this.max) return this.end();
        switch (this.type) {
          case "string":
            o = this.data.substring(this.index, b);
            break;
          case "uint8array":
            o = this.data.subarray(this.index, b);
            break;
          case "array":
          case "nodebuffer":
            o = this.data.slice(this.index, b);
        }
        return this.index = b, this.push({ data: o, meta: { percent: this.max ? this.index / this.max * 100 : 0 } });
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
        if (this._listeners[s]) for (var o = 0; o < this._listeners[s].length; o++) this._listeners[s][o].call(this, i);
      }, pipe: function(s) {
        return s.registerPrevious(this);
      }, registerPrevious: function(s) {
        if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
        this.streamInfo = s.streamInfo, this.mergeStreamInfo(), this.previous = s;
        var i = this;
        return s.on("data", function(o) {
          i.processChunk(o);
        }), s.on("end", function() {
          i.end();
        }), s.on("error", function(o) {
          i.error(o);
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
      var n = r("../utils"), s = r("./ConvertWorker"), i = r("./GenericWorker"), o = r("../base64"), b = r("../support"), x = r("../external"), _ = null;
      if (b.nodestream) try {
        _ = r("../nodejs/NodejsStreamOutputAdapter");
      } catch {
      }
      function w(y, u) {
        return new x.Promise(function(m, h) {
          var g = [], k = y._internalType, C = y._outputType, R = y._mimeType;
          y.on("data", function(P, O) {
            g.push(P), u && u(O);
          }).on("error", function(P) {
            g = [], h(P);
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
                var j, $ = 0, re = null, S = 0;
                for (j = 0; j < U.length; j++) S += U[j].length;
                switch (O) {
                  case "string":
                    return U.join("");
                  case "array":
                    return Array.prototype.concat.apply([], U);
                  case "uint8array":
                    for (re = new Uint8Array(S), j = 0; j < U.length; j++) re.set(U[j], $), $ += U[j].length;
                    return re;
                  case "nodebuffer":
                    return Buffer.concat(U);
                  default:
                    throw new Error("concat : unsupported type '" + O + "'");
                }
              }(k, g), R);
              m(P);
            } catch (O) {
              h(O);
            }
            g = [];
          }).resume();
        });
      }
      function d(y, u, m) {
        var h = u;
        switch (u) {
          case "blob":
          case "arraybuffer":
            h = "uint8array";
            break;
          case "base64":
            h = "string";
        }
        try {
          this._internalType = h, this._outputType = u, this._mimeType = m, n.checkSupport(h), this._worker = y.pipe(new s(h)), y.lock();
        } catch (g) {
          this._worker = new i("error"), this._worker.error(g);
        }
      }
      d.prototype = { accumulate: function(y) {
        return w(this, y);
      }, on: function(y, u) {
        var m = this;
        return y === "data" ? this._worker.on(y, function(h) {
          u.call(m, h.data, h.meta);
        }) : this._worker.on(y, function() {
          n.delay(u, arguments, m);
        }), this;
      }, resume: function() {
        return n.delay(this._worker.resume, [], this._worker), this;
      }, pause: function() {
        return this._worker.pause(), this;
      }, toNodejsStream: function(y) {
        if (n.checkSupport("nodestream"), this._outputType !== "nodebuffer") throw new Error(this._outputType + " is not supported by this method");
        return new _(this, { objectMode: this._outputType !== "nodebuffer" }, y);
      } }, f.exports = d;
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
      for (var n = r("./utils"), s = r("./support"), i = r("./nodejsUtils"), o = r("./stream/GenericWorker"), b = new Array(256), x = 0; x < 256; x++) b[x] = 252 <= x ? 6 : 248 <= x ? 5 : 240 <= x ? 4 : 224 <= x ? 3 : 192 <= x ? 2 : 1;
      b[254] = b[254] = 1;
      function _() {
        o.call(this, "utf-8 decode"), this.leftOver = null;
      }
      function w() {
        o.call(this, "utf-8 encode");
      }
      c.utf8encode = function(d) {
        return s.nodebuffer ? i.newBufferFrom(d, "utf-8") : function(y) {
          var u, m, h, g, k, C = y.length, R = 0;
          for (g = 0; g < C; g++) (64512 & (m = y.charCodeAt(g))) == 55296 && g + 1 < C && (64512 & (h = y.charCodeAt(g + 1))) == 56320 && (m = 65536 + (m - 55296 << 10) + (h - 56320), g++), R += m < 128 ? 1 : m < 2048 ? 2 : m < 65536 ? 3 : 4;
          for (u = s.uint8array ? new Uint8Array(R) : new Array(R), g = k = 0; k < R; g++) (64512 & (m = y.charCodeAt(g))) == 55296 && g + 1 < C && (64512 & (h = y.charCodeAt(g + 1))) == 56320 && (m = 65536 + (m - 55296 << 10) + (h - 56320), g++), m < 128 ? u[k++] = m : (m < 2048 ? u[k++] = 192 | m >>> 6 : (m < 65536 ? u[k++] = 224 | m >>> 12 : (u[k++] = 240 | m >>> 18, u[k++] = 128 | m >>> 12 & 63), u[k++] = 128 | m >>> 6 & 63), u[k++] = 128 | 63 & m);
          return u;
        }(d);
      }, c.utf8decode = function(d) {
        return s.nodebuffer ? n.transformTo("nodebuffer", d).toString("utf-8") : function(y) {
          var u, m, h, g, k = y.length, C = new Array(2 * k);
          for (u = m = 0; u < k; ) if ((h = y[u++]) < 128) C[m++] = h;
          else if (4 < (g = b[h])) C[m++] = 65533, u += g - 1;
          else {
            for (h &= g === 2 ? 31 : g === 3 ? 15 : 7; 1 < g && u < k; ) h = h << 6 | 63 & y[u++], g--;
            1 < g ? C[m++] = 65533 : h < 65536 ? C[m++] = h : (h -= 65536, C[m++] = 55296 | h >> 10 & 1023, C[m++] = 56320 | 1023 & h);
          }
          return C.length !== m && (C.subarray ? C = C.subarray(0, m) : C.length = m), n.applyFromCharCode(C);
        }(d = n.transformTo(s.uint8array ? "uint8array" : "array", d));
      }, n.inherits(_, o), _.prototype.processChunk = function(d) {
        var y = n.transformTo(s.uint8array ? "uint8array" : "array", d.data);
        if (this.leftOver && this.leftOver.length) {
          if (s.uint8array) {
            var u = y;
            (y = new Uint8Array(u.length + this.leftOver.length)).set(this.leftOver, 0), y.set(u, this.leftOver.length);
          } else y = this.leftOver.concat(y);
          this.leftOver = null;
        }
        var m = function(g, k) {
          var C;
          for ((k = k || g.length) > g.length && (k = g.length), C = k - 1; 0 <= C && (192 & g[C]) == 128; ) C--;
          return C < 0 || C === 0 ? k : C + b[g[C]] > k ? C : k;
        }(y), h = y;
        m !== y.length && (s.uint8array ? (h = y.subarray(0, m), this.leftOver = y.subarray(m, y.length)) : (h = y.slice(0, m), this.leftOver = y.slice(m, y.length))), this.push({ data: c.utf8decode(h), meta: d.meta });
      }, _.prototype.flush = function() {
        this.leftOver && this.leftOver.length && (this.push({ data: c.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
      }, c.Utf8DecodeWorker = _, n.inherits(w, o), w.prototype.processChunk = function(d) {
        this.push({ data: c.utf8encode(d.data), meta: d.meta });
      }, c.Utf8EncodeWorker = w;
    }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }], 32: [function(r, f, c) {
      var n = r("./support"), s = r("./base64"), i = r("./nodejsUtils"), o = r("./external");
      function b(u) {
        return u;
      }
      function x(u, m) {
        for (var h = 0; h < u.length; ++h) m[h] = 255 & u.charCodeAt(h);
        return m;
      }
      r("setimmediate"), c.newBlob = function(u, m) {
        c.checkSupport("blob");
        try {
          return new Blob([u], { type: m });
        } catch {
          try {
            var h = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            return h.append(u), h.getBlob(m);
          } catch {
            throw new Error("Bug : can't construct the Blob.");
          }
        }
      };
      var _ = { stringifyByChunk: function(u, m, h) {
        var g = [], k = 0, C = u.length;
        if (C <= h) return String.fromCharCode.apply(null, u);
        for (; k < C; ) m === "array" || m === "nodebuffer" ? g.push(String.fromCharCode.apply(null, u.slice(k, Math.min(k + h, C)))) : g.push(String.fromCharCode.apply(null, u.subarray(k, Math.min(k + h, C)))), k += h;
        return g.join("");
      }, stringifyByChar: function(u) {
        for (var m = "", h = 0; h < u.length; h++) m += String.fromCharCode(u[h]);
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
        var m = 65536, h = c.getTypeOf(u), g = !0;
        if (h === "uint8array" ? g = _.applyCanBeUsed.uint8array : h === "nodebuffer" && (g = _.applyCanBeUsed.nodebuffer), g) for (; 1 < m; ) try {
          return _.stringifyByChunk(u, h, m);
        } catch {
          m = Math.floor(m / 2);
        }
        return _.stringifyByChar(u);
      }
      function d(u, m) {
        for (var h = 0; h < u.length; h++) m[h] = u[h];
        return m;
      }
      c.applyFromCharCode = w;
      var y = {};
      y.string = { string: b, array: function(u) {
        return x(u, new Array(u.length));
      }, arraybuffer: function(u) {
        return y.string.uint8array(u).buffer;
      }, uint8array: function(u) {
        return x(u, new Uint8Array(u.length));
      }, nodebuffer: function(u) {
        return x(u, i.allocBuffer(u.length));
      } }, y.array = { string: w, array: b, arraybuffer: function(u) {
        return new Uint8Array(u).buffer;
      }, uint8array: function(u) {
        return new Uint8Array(u);
      }, nodebuffer: function(u) {
        return i.newBufferFrom(u);
      } }, y.arraybuffer = { string: function(u) {
        return w(new Uint8Array(u));
      }, array: function(u) {
        return d(new Uint8Array(u), new Array(u.byteLength));
      }, arraybuffer: b, uint8array: function(u) {
        return new Uint8Array(u);
      }, nodebuffer: function(u) {
        return i.newBufferFrom(new Uint8Array(u));
      } }, y.uint8array = { string: w, array: function(u) {
        return d(u, new Array(u.length));
      }, arraybuffer: function(u) {
        return u.buffer;
      }, uint8array: b, nodebuffer: function(u) {
        return i.newBufferFrom(u);
      } }, y.nodebuffer = { string: w, array: function(u) {
        return d(u, new Array(u.length));
      }, arraybuffer: function(u) {
        return y.nodebuffer.uint8array(u).buffer;
      }, uint8array: function(u) {
        return d(u, new Uint8Array(u.length));
      }, nodebuffer: b }, c.transformTo = function(u, m) {
        if (m = m || "", !u) return m;
        c.checkSupport(u);
        var h = c.getTypeOf(m);
        return y[h][u](m);
      }, c.resolve = function(u) {
        for (var m = u.split("/"), h = [], g = 0; g < m.length; g++) {
          var k = m[g];
          k === "." || k === "" && g !== 0 && g !== m.length - 1 || (k === ".." ? h.pop() : h.push(k));
        }
        return h.join("/");
      }, c.getTypeOf = function(u) {
        return typeof u == "string" ? "string" : Object.prototype.toString.call(u) === "[object Array]" ? "array" : n.nodebuffer && i.isBuffer(u) ? "nodebuffer" : n.uint8array && u instanceof Uint8Array ? "uint8array" : n.arraybuffer && u instanceof ArrayBuffer ? "arraybuffer" : void 0;
      }, c.checkSupport = function(u) {
        if (!n[u.toLowerCase()]) throw new Error(u + " is not supported by this platform");
      }, c.MAX_VALUE_16BITS = 65535, c.MAX_VALUE_32BITS = -1, c.pretty = function(u) {
        var m, h, g = "";
        for (h = 0; h < (u || "").length; h++) g += "\\x" + ((m = u.charCodeAt(h)) < 16 ? "0" : "") + m.toString(16).toUpperCase();
        return g;
      }, c.delay = function(u, m, h) {
        setImmediate(function() {
          u.apply(h || null, m || []);
        });
      }, c.inherits = function(u, m) {
        function h() {
        }
        h.prototype = m.prototype, u.prototype = new h();
      }, c.extend = function() {
        var u, m, h = {};
        for (u = 0; u < arguments.length; u++) for (m in arguments[u]) Object.prototype.hasOwnProperty.call(arguments[u], m) && h[m] === void 0 && (h[m] = arguments[u][m]);
        return h;
      }, c.prepareContent = function(u, m, h, g, k) {
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
          return R ? (R === "arraybuffer" ? C = c.transformTo("uint8array", C) : R === "string" && (k ? C = s.decode(C) : h && g !== !0 && (C = function(P) {
            return x(P, n.uint8array ? new Uint8Array(P.length) : new Array(P.length));
          }(C))), C) : o.Promise.reject(new Error("Can't read the data of '" + u + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
        });
      };
    }, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, setimmediate: 54 }], 33: [function(r, f, c) {
      var n = r("./reader/readerFor"), s = r("./utils"), i = r("./signature"), o = r("./zipEntry"), b = r("./support");
      function x(_) {
        this.files = [], this.loadOptions = _;
      }
      x.prototype = { checkSignature: function(_) {
        if (!this.reader.readAndCheckSignature(_)) {
          this.reader.index -= 4;
          var w = this.reader.readString(4);
          throw new Error("Corrupted zip or bug: unexpected signature (" + s.pretty(w) + ", expected " + s.pretty(_) + ")");
        }
      }, isSignature: function(_, w) {
        var d = this.reader.index;
        this.reader.setIndex(_);
        var y = this.reader.readString(4) === w;
        return this.reader.setIndex(d), y;
      }, readBlockEndOfCentral: function() {
        this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
        var _ = this.reader.readData(this.zipCommentLength), w = b.uint8array ? "uint8array" : "array", d = s.transformTo(w, _);
        this.zipComment = this.loadOptions.decodeFileName(d);
      }, readBlockZip64EndOfCentral: function() {
        this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
        for (var _, w, d, y = this.zip64EndOfCentralSize - 44; 0 < y; ) _ = this.reader.readInt(2), w = this.reader.readInt(4), d = this.reader.readData(w), this.zip64ExtensibleData[_] = { id: _, length: w, value: d };
      }, readBlockZip64EndOfCentralLocator: function() {
        if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount) throw new Error("Multi-volumes zip are not supported");
      }, readLocalFiles: function() {
        var _, w;
        for (_ = 0; _ < this.files.length; _++) w = this.files[_], this.reader.setIndex(w.localHeaderOffset), this.checkSignature(i.LOCAL_FILE_HEADER), w.readLocalPart(this.reader), w.handleUTF8(), w.processAttributes();
      }, readCentralDir: function() {
        var _;
        for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(i.CENTRAL_FILE_HEADER); ) (_ = new o({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(_);
        if (this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0) throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
      }, readEndOfCentral: function() {
        var _ = this.reader.lastIndexOfSignature(i.CENTRAL_DIRECTORY_END);
        if (_ < 0) throw this.isSignature(0, i.LOCAL_FILE_HEADER) ? new Error("Corrupted zip: can't find end of central directory") : new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
        this.reader.setIndex(_);
        var w = _;
        if (this.checkSignature(i.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === s.MAX_VALUE_16BITS || this.diskWithCentralDirStart === s.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === s.MAX_VALUE_16BITS || this.centralDirRecords === s.MAX_VALUE_16BITS || this.centralDirSize === s.MAX_VALUE_32BITS || this.centralDirOffset === s.MAX_VALUE_32BITS) {
          if (this.zip64 = !0, (_ = this.reader.lastIndexOfSignature(i.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
          if (this.reader.setIndex(_), this.checkSignature(i.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, i.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(i.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
          this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(i.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
        }
        var d = this.centralDirOffset + this.centralDirSize;
        this.zip64 && (d += 20, d += 12 + this.zip64EndOfCentralSize);
        var y = w - d;
        if (0 < y) this.isSignature(w, i.CENTRAL_FILE_HEADER) || (this.reader.zero = y);
        else if (y < 0) throw new Error("Corrupted zip: missing " + Math.abs(y) + " bytes.");
      }, prepareReader: function(_) {
        this.reader = n(_);
      }, load: function(_) {
        this.prepareReader(_), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
      } }, f.exports = x;
    }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utils": 32, "./zipEntry": 34 }], 34: [function(r, f, c) {
      var n = r("./reader/readerFor"), s = r("./utils"), i = r("./compressedObject"), o = r("./crc32"), b = r("./utf8"), x = r("./compressions"), _ = r("./support");
      function w(d, y) {
        this.options = d, this.loadOptions = y;
      }
      w.prototype = { isEncrypted: function() {
        return (1 & this.bitFlag) == 1;
      }, useUTF8: function() {
        return (2048 & this.bitFlag) == 2048;
      }, readLocalPart: function(d) {
        var y, u;
        if (d.skip(22), this.fileNameLength = d.readInt(2), u = d.readInt(2), this.fileName = d.readData(this.fileNameLength), d.skip(u), this.compressedSize === -1 || this.uncompressedSize === -1) throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
        if ((y = function(m) {
          for (var h in x) if (Object.prototype.hasOwnProperty.call(x, h) && x[h].magic === m) return x[h];
          return null;
        }(this.compressionMethod)) === null) throw new Error("Corrupted zip : compression " + s.pretty(this.compressionMethod) + " unknown (inner file : " + s.transformTo("string", this.fileName) + ")");
        this.decompressed = new i(this.compressedSize, this.uncompressedSize, this.crc32, y, d.readData(this.compressedSize));
      }, readCentralPart: function(d) {
        this.versionMadeBy = d.readInt(2), d.skip(2), this.bitFlag = d.readInt(2), this.compressionMethod = d.readString(2), this.date = d.readDate(), this.crc32 = d.readInt(4), this.compressedSize = d.readInt(4), this.uncompressedSize = d.readInt(4);
        var y = d.readInt(2);
        if (this.extraFieldsLength = d.readInt(2), this.fileCommentLength = d.readInt(2), this.diskNumberStart = d.readInt(2), this.internalFileAttributes = d.readInt(2), this.externalFileAttributes = d.readInt(4), this.localHeaderOffset = d.readInt(4), this.isEncrypted()) throw new Error("Encrypted zip are not supported");
        d.skip(y), this.readExtraFields(d), this.parseZIP64ExtraField(d), this.fileComment = d.readData(this.fileCommentLength);
      }, processAttributes: function() {
        this.unixPermissions = null, this.dosPermissions = null;
        var d = this.versionMadeBy >> 8;
        this.dir = !!(16 & this.externalFileAttributes), d == 0 && (this.dosPermissions = 63 & this.externalFileAttributes), d == 3 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || this.fileNameStr.slice(-1) !== "/" || (this.dir = !0);
      }, parseZIP64ExtraField: function() {
        if (this.extraFields[1]) {
          var d = n(this.extraFields[1].value);
          this.uncompressedSize === s.MAX_VALUE_32BITS && (this.uncompressedSize = d.readInt(8)), this.compressedSize === s.MAX_VALUE_32BITS && (this.compressedSize = d.readInt(8)), this.localHeaderOffset === s.MAX_VALUE_32BITS && (this.localHeaderOffset = d.readInt(8)), this.diskNumberStart === s.MAX_VALUE_32BITS && (this.diskNumberStart = d.readInt(4));
        }
      }, readExtraFields: function(d) {
        var y, u, m, h = d.index + this.extraFieldsLength;
        for (this.extraFields || (this.extraFields = {}); d.index + 4 < h; ) y = d.readInt(2), u = d.readInt(2), m = d.readData(u), this.extraFields[y] = { id: y, length: u, value: m };
        d.setIndex(h);
      }, handleUTF8: function() {
        var d = _.uint8array ? "uint8array" : "array";
        if (this.useUTF8()) this.fileNameStr = b.utf8decode(this.fileName), this.fileCommentStr = b.utf8decode(this.fileComment);
        else {
          var y = this.findExtraFieldUnicodePath();
          if (y !== null) this.fileNameStr = y;
          else {
            var u = s.transformTo(d, this.fileName);
            this.fileNameStr = this.loadOptions.decodeFileName(u);
          }
          var m = this.findExtraFieldUnicodeComment();
          if (m !== null) this.fileCommentStr = m;
          else {
            var h = s.transformTo(d, this.fileComment);
            this.fileCommentStr = this.loadOptions.decodeFileName(h);
          }
        }
      }, findExtraFieldUnicodePath: function() {
        var d = this.extraFields[28789];
        if (d) {
          var y = n(d.value);
          return y.readInt(1) !== 1 || o(this.fileName) !== y.readInt(4) ? null : b.utf8decode(y.readData(d.length - 5));
        }
        return null;
      }, findExtraFieldUnicodeComment: function() {
        var d = this.extraFields[25461];
        if (d) {
          var y = n(d.value);
          return y.readInt(1) !== 1 || o(this.fileComment) !== y.readInt(4) ? null : b.utf8decode(y.readData(d.length - 5));
        }
        return null;
      } }, f.exports = w;
    }, { "./compressedObject": 2, "./compressions": 3, "./crc32": 4, "./reader/readerFor": 22, "./support": 30, "./utf8": 31, "./utils": 32 }], 35: [function(r, f, c) {
      function n(y, u, m) {
        this.name = y, this.dir = m.dir, this.date = m.date, this.comment = m.comment, this.unixPermissions = m.unixPermissions, this.dosPermissions = m.dosPermissions, this._data = u, this._dataBinary = m.binary, this.options = { compression: m.compression, compressionOptions: m.compressionOptions };
      }
      var s = r("./stream/StreamHelper"), i = r("./stream/DataWorker"), o = r("./utf8"), b = r("./compressedObject"), x = r("./stream/GenericWorker");
      n.prototype = { internalStream: function(y) {
        var u = null, m = "string";
        try {
          if (!y) throw new Error("No output type specified.");
          var h = (m = y.toLowerCase()) === "string" || m === "text";
          m !== "binarystring" && m !== "text" || (m = "string"), u = this._decompressWorker();
          var g = !this._dataBinary;
          g && !h && (u = u.pipe(new o.Utf8EncodeWorker())), !g && h && (u = u.pipe(new o.Utf8DecodeWorker()));
        } catch (k) {
          (u = new x("error")).error(k);
        }
        return new s(u, m, "");
      }, async: function(y, u) {
        return this.internalStream(y).accumulate(u);
      }, nodeStream: function(y, u) {
        return this.internalStream(y || "nodebuffer").toNodejsStream(u);
      }, _compressWorker: function(y, u) {
        if (this._data instanceof b && this._data.compression.magic === y.magic) return this._data.getCompressedWorker();
        var m = this._decompressWorker();
        return this._dataBinary || (m = m.pipe(new o.Utf8EncodeWorker())), b.createWorkerFrom(m, y, u);
      }, _decompressWorker: function() {
        return this._data instanceof b ? this._data.getContentWorker() : this._data instanceof x ? this._data : new i(this._data);
      } };
      for (var _ = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], w = function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, d = 0; d < _.length; d++) n.prototype[_[d]] = w;
      f.exports = n;
    }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }], 36: [function(r, f, c) {
      (function(n) {
        var s, i, o = n.MutationObserver || n.WebKitMutationObserver;
        if (o) {
          var b = 0, x = new o(y), _ = n.document.createTextNode("");
          x.observe(_, { characterData: !0 }), s = function() {
            _.data = b = ++b % 2;
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
        var d = [];
        function y() {
          var u, m;
          i = !0;
          for (var h = d.length; h; ) {
            for (m = d, d = [], u = -1; ++u < h; ) m[u]();
            h = d.length;
          }
          i = !1;
        }
        f.exports = function(u) {
          d.push(u) !== 1 || i || s();
        };
      }).call(this, typeof ut < "u" ? ut : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 37: [function(r, f, c) {
      var n = r("immediate");
      function s() {
      }
      var i = {}, o = ["REJECTED"], b = ["FULFILLED"], x = ["PENDING"];
      function _(h) {
        if (typeof h != "function") throw new TypeError("resolver must be a function");
        this.state = x, this.queue = [], this.outcome = void 0, h !== s && u(this, h);
      }
      function w(h, g, k) {
        this.promise = h, typeof g == "function" && (this.onFulfilled = g, this.callFulfilled = this.otherCallFulfilled), typeof k == "function" && (this.onRejected = k, this.callRejected = this.otherCallRejected);
      }
      function d(h, g, k) {
        n(function() {
          var C;
          try {
            C = g(k);
          } catch (R) {
            return i.reject(h, R);
          }
          C === h ? i.reject(h, new TypeError("Cannot resolve promise with itself")) : i.resolve(h, C);
        });
      }
      function y(h) {
        var g = h && h.then;
        if (h && (typeof h == "object" || typeof h == "function") && typeof g == "function") return function() {
          g.apply(h, arguments);
        };
      }
      function u(h, g) {
        var k = !1;
        function C(O) {
          k || (k = !0, i.reject(h, O));
        }
        function R(O) {
          k || (k = !0, i.resolve(h, O));
        }
        var P = m(function() {
          g(R, C);
        });
        P.status === "error" && C(P.value);
      }
      function m(h, g) {
        var k = {};
        try {
          k.value = h(g), k.status = "success";
        } catch (C) {
          k.status = "error", k.value = C;
        }
        return k;
      }
      (f.exports = _).prototype.finally = function(h) {
        if (typeof h != "function") return this;
        var g = this.constructor;
        return this.then(function(k) {
          return g.resolve(h()).then(function() {
            return k;
          });
        }, function(k) {
          return g.resolve(h()).then(function() {
            throw k;
          });
        });
      }, _.prototype.catch = function(h) {
        return this.then(null, h);
      }, _.prototype.then = function(h, g) {
        if (typeof h != "function" && this.state === b || typeof g != "function" && this.state === o) return this;
        var k = new this.constructor(s);
        return this.state !== x ? d(k, this.state === b ? h : g, this.outcome) : this.queue.push(new w(k, h, g)), k;
      }, w.prototype.callFulfilled = function(h) {
        i.resolve(this.promise, h);
      }, w.prototype.otherCallFulfilled = function(h) {
        d(this.promise, this.onFulfilled, h);
      }, w.prototype.callRejected = function(h) {
        i.reject(this.promise, h);
      }, w.prototype.otherCallRejected = function(h) {
        d(this.promise, this.onRejected, h);
      }, i.resolve = function(h, g) {
        var k = m(y, g);
        if (k.status === "error") return i.reject(h, k.value);
        var C = k.value;
        if (C) u(h, C);
        else {
          h.state = b, h.outcome = g;
          for (var R = -1, P = h.queue.length; ++R < P; ) h.queue[R].callFulfilled(g);
        }
        return h;
      }, i.reject = function(h, g) {
        h.state = o, h.outcome = g;
        for (var k = -1, C = h.queue.length; ++k < C; ) h.queue[k].callRejected(g);
        return h;
      }, _.resolve = function(h) {
        return h instanceof this ? h : i.resolve(new this(s), h);
      }, _.reject = function(h) {
        var g = new this(s);
        return i.reject(g, h);
      }, _.all = function(h) {
        var g = this;
        if (Object.prototype.toString.call(h) !== "[object Array]") return this.reject(new TypeError("must be an array"));
        var k = h.length, C = !1;
        if (!k) return this.resolve([]);
        for (var R = new Array(k), P = 0, O = -1, U = new this(s); ++O < k; ) j(h[O], O);
        return U;
        function j($, re) {
          g.resolve($).then(function(S) {
            R[re] = S, ++P !== k || C || (C = !0, i.resolve(U, R));
          }, function(S) {
            C || (C = !0, i.reject(U, S));
          });
        }
      }, _.race = function(h) {
        var g = this;
        if (Object.prototype.toString.call(h) !== "[object Array]") return this.reject(new TypeError("must be an array"));
        var k = h.length, C = !1;
        if (!k) return this.resolve([]);
        for (var R = -1, P = new this(s); ++R < k; ) O = h[R], g.resolve(O).then(function(U) {
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
      var n = r("./zlib/deflate"), s = r("./utils/common"), i = r("./utils/strings"), o = r("./zlib/messages"), b = r("./zlib/zstream"), x = Object.prototype.toString, _ = 0, w = -1, d = 0, y = 8;
      function u(h) {
        if (!(this instanceof u)) return new u(h);
        this.options = s.assign({ level: w, method: y, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: d, to: "" }, h || {});
        var g = this.options;
        g.raw && 0 < g.windowBits ? g.windowBits = -g.windowBits : g.gzip && 0 < g.windowBits && g.windowBits < 16 && (g.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new b(), this.strm.avail_out = 0;
        var k = n.deflateInit2(this.strm, g.level, g.method, g.windowBits, g.memLevel, g.strategy);
        if (k !== _) throw new Error(o[k]);
        if (g.header && n.deflateSetHeader(this.strm, g.header), g.dictionary) {
          var C;
          if (C = typeof g.dictionary == "string" ? i.string2buf(g.dictionary) : x.call(g.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(g.dictionary) : g.dictionary, (k = n.deflateSetDictionary(this.strm, C)) !== _) throw new Error(o[k]);
          this._dict_set = !0;
        }
      }
      function m(h, g) {
        var k = new u(g);
        if (k.push(h, !0), k.err) throw k.msg || o[k.err];
        return k.result;
      }
      u.prototype.push = function(h, g) {
        var k, C, R = this.strm, P = this.options.chunkSize;
        if (this.ended) return !1;
        C = g === ~~g ? g : g === !0 ? 4 : 0, typeof h == "string" ? R.input = i.string2buf(h) : x.call(h) === "[object ArrayBuffer]" ? R.input = new Uint8Array(h) : R.input = h, R.next_in = 0, R.avail_in = R.input.length;
        do {
          if (R.avail_out === 0 && (R.output = new s.Buf8(P), R.next_out = 0, R.avail_out = P), (k = n.deflate(R, C)) !== 1 && k !== _) return this.onEnd(k), !(this.ended = !0);
          R.avail_out !== 0 && (R.avail_in !== 0 || C !== 4 && C !== 2) || (this.options.to === "string" ? this.onData(i.buf2binstring(s.shrinkBuf(R.output, R.next_out))) : this.onData(s.shrinkBuf(R.output, R.next_out)));
        } while ((0 < R.avail_in || R.avail_out === 0) && k !== 1);
        return C === 4 ? (k = n.deflateEnd(this.strm), this.onEnd(k), this.ended = !0, k === _) : C !== 2 || (this.onEnd(_), !(R.avail_out = 0));
      }, u.prototype.onData = function(h) {
        this.chunks.push(h);
      }, u.prototype.onEnd = function(h) {
        h === _ && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = s.flattenChunks(this.chunks)), this.chunks = [], this.err = h, this.msg = this.strm.msg;
      }, c.Deflate = u, c.deflate = m, c.deflateRaw = function(h, g) {
        return (g = g || {}).raw = !0, m(h, g);
      }, c.gzip = function(h, g) {
        return (g = g || {}).gzip = !0, m(h, g);
      };
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/deflate": 46, "./zlib/messages": 51, "./zlib/zstream": 53 }], 40: [function(r, f, c) {
      var n = r("./zlib/inflate"), s = r("./utils/common"), i = r("./utils/strings"), o = r("./zlib/constants"), b = r("./zlib/messages"), x = r("./zlib/zstream"), _ = r("./zlib/gzheader"), w = Object.prototype.toString;
      function d(u) {
        if (!(this instanceof d)) return new d(u);
        this.options = s.assign({ chunkSize: 16384, windowBits: 0, to: "" }, u || {});
        var m = this.options;
        m.raw && 0 <= m.windowBits && m.windowBits < 16 && (m.windowBits = -m.windowBits, m.windowBits === 0 && (m.windowBits = -15)), !(0 <= m.windowBits && m.windowBits < 16) || u && u.windowBits || (m.windowBits += 32), 15 < m.windowBits && m.windowBits < 48 && !(15 & m.windowBits) && (m.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new x(), this.strm.avail_out = 0;
        var h = n.inflateInit2(this.strm, m.windowBits);
        if (h !== o.Z_OK) throw new Error(b[h]);
        this.header = new _(), n.inflateGetHeader(this.strm, this.header);
      }
      function y(u, m) {
        var h = new d(m);
        if (h.push(u, !0), h.err) throw h.msg || b[h.err];
        return h.result;
      }
      d.prototype.push = function(u, m) {
        var h, g, k, C, R, P, O = this.strm, U = this.options.chunkSize, j = this.options.dictionary, $ = !1;
        if (this.ended) return !1;
        g = m === ~~m ? m : m === !0 ? o.Z_FINISH : o.Z_NO_FLUSH, typeof u == "string" ? O.input = i.binstring2buf(u) : w.call(u) === "[object ArrayBuffer]" ? O.input = new Uint8Array(u) : O.input = u, O.next_in = 0, O.avail_in = O.input.length;
        do {
          if (O.avail_out === 0 && (O.output = new s.Buf8(U), O.next_out = 0, O.avail_out = U), (h = n.inflate(O, o.Z_NO_FLUSH)) === o.Z_NEED_DICT && j && (P = typeof j == "string" ? i.string2buf(j) : w.call(j) === "[object ArrayBuffer]" ? new Uint8Array(j) : j, h = n.inflateSetDictionary(this.strm, P)), h === o.Z_BUF_ERROR && $ === !0 && (h = o.Z_OK, $ = !1), h !== o.Z_STREAM_END && h !== o.Z_OK) return this.onEnd(h), !(this.ended = !0);
          O.next_out && (O.avail_out !== 0 && h !== o.Z_STREAM_END && (O.avail_in !== 0 || g !== o.Z_FINISH && g !== o.Z_SYNC_FLUSH) || (this.options.to === "string" ? (k = i.utf8border(O.output, O.next_out), C = O.next_out - k, R = i.buf2string(O.output, k), O.next_out = C, O.avail_out = U - C, C && s.arraySet(O.output, O.output, k, C, 0), this.onData(R)) : this.onData(s.shrinkBuf(O.output, O.next_out)))), O.avail_in === 0 && O.avail_out === 0 && ($ = !0);
        } while ((0 < O.avail_in || O.avail_out === 0) && h !== o.Z_STREAM_END);
        return h === o.Z_STREAM_END && (g = o.Z_FINISH), g === o.Z_FINISH ? (h = n.inflateEnd(this.strm), this.onEnd(h), this.ended = !0, h === o.Z_OK) : g !== o.Z_SYNC_FLUSH || (this.onEnd(o.Z_OK), !(O.avail_out = 0));
      }, d.prototype.onData = function(u) {
        this.chunks.push(u);
      }, d.prototype.onEnd = function(u) {
        u === o.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = s.flattenChunks(this.chunks)), this.chunks = [], this.err = u, this.msg = this.strm.msg;
      }, c.Inflate = d, c.inflate = y, c.inflateRaw = function(u, m) {
        return (m = m || {}).raw = !0, y(u, m);
      }, c.ungzip = y;
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/constants": 44, "./zlib/gzheader": 47, "./zlib/inflate": 49, "./zlib/messages": 51, "./zlib/zstream": 53 }], 41: [function(r, f, c) {
      var n = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
      c.assign = function(o) {
        for (var b = Array.prototype.slice.call(arguments, 1); b.length; ) {
          var x = b.shift();
          if (x) {
            if (typeof x != "object") throw new TypeError(x + "must be non-object");
            for (var _ in x) x.hasOwnProperty(_) && (o[_] = x[_]);
          }
        }
        return o;
      }, c.shrinkBuf = function(o, b) {
        return o.length === b ? o : o.subarray ? o.subarray(0, b) : (o.length = b, o);
      };
      var s = { arraySet: function(o, b, x, _, w) {
        if (b.subarray && o.subarray) o.set(b.subarray(x, x + _), w);
        else for (var d = 0; d < _; d++) o[w + d] = b[x + d];
      }, flattenChunks: function(o) {
        var b, x, _, w, d, y;
        for (b = _ = 0, x = o.length; b < x; b++) _ += o[b].length;
        for (y = new Uint8Array(_), b = w = 0, x = o.length; b < x; b++) d = o[b], y.set(d, w), w += d.length;
        return y;
      } }, i = { arraySet: function(o, b, x, _, w) {
        for (var d = 0; d < _; d++) o[w + d] = b[x + d];
      }, flattenChunks: function(o) {
        return [].concat.apply([], o);
      } };
      c.setTyped = function(o) {
        o ? (c.Buf8 = Uint8Array, c.Buf16 = Uint16Array, c.Buf32 = Int32Array, c.assign(c, s)) : (c.Buf8 = Array, c.Buf16 = Array, c.Buf32 = Array, c.assign(c, i));
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
      for (var o = new n.Buf8(256), b = 0; b < 256; b++) o[b] = 252 <= b ? 6 : 248 <= b ? 5 : 240 <= b ? 4 : 224 <= b ? 3 : 192 <= b ? 2 : 1;
      function x(_, w) {
        if (w < 65537 && (_.subarray && i || !_.subarray && s)) return String.fromCharCode.apply(null, n.shrinkBuf(_, w));
        for (var d = "", y = 0; y < w; y++) d += String.fromCharCode(_[y]);
        return d;
      }
      o[254] = o[254] = 1, c.string2buf = function(_) {
        var w, d, y, u, m, h = _.length, g = 0;
        for (u = 0; u < h; u++) (64512 & (d = _.charCodeAt(u))) == 55296 && u + 1 < h && (64512 & (y = _.charCodeAt(u + 1))) == 56320 && (d = 65536 + (d - 55296 << 10) + (y - 56320), u++), g += d < 128 ? 1 : d < 2048 ? 2 : d < 65536 ? 3 : 4;
        for (w = new n.Buf8(g), u = m = 0; m < g; u++) (64512 & (d = _.charCodeAt(u))) == 55296 && u + 1 < h && (64512 & (y = _.charCodeAt(u + 1))) == 56320 && (d = 65536 + (d - 55296 << 10) + (y - 56320), u++), d < 128 ? w[m++] = d : (d < 2048 ? w[m++] = 192 | d >>> 6 : (d < 65536 ? w[m++] = 224 | d >>> 12 : (w[m++] = 240 | d >>> 18, w[m++] = 128 | d >>> 12 & 63), w[m++] = 128 | d >>> 6 & 63), w[m++] = 128 | 63 & d);
        return w;
      }, c.buf2binstring = function(_) {
        return x(_, _.length);
      }, c.binstring2buf = function(_) {
        for (var w = new n.Buf8(_.length), d = 0, y = w.length; d < y; d++) w[d] = _.charCodeAt(d);
        return w;
      }, c.buf2string = function(_, w) {
        var d, y, u, m, h = w || _.length, g = new Array(2 * h);
        for (d = y = 0; d < h; ) if ((u = _[d++]) < 128) g[y++] = u;
        else if (4 < (m = o[u])) g[y++] = 65533, d += m - 1;
        else {
          for (u &= m === 2 ? 31 : m === 3 ? 15 : 7; 1 < m && d < h; ) u = u << 6 | 63 & _[d++], m--;
          1 < m ? g[y++] = 65533 : u < 65536 ? g[y++] = u : (u -= 65536, g[y++] = 55296 | u >> 10 & 1023, g[y++] = 56320 | 1023 & u);
        }
        return x(g, y);
      }, c.utf8border = function(_, w) {
        var d;
        for ((w = w || _.length) > _.length && (w = _.length), d = w - 1; 0 <= d && (192 & _[d]) == 128; ) d--;
        return d < 0 || d === 0 ? w : d + o[_[d]] > w ? d : w;
      };
    }, { "./common": 41 }], 43: [function(r, f, c) {
      f.exports = function(n, s, i, o) {
        for (var b = 65535 & n | 0, x = n >>> 16 & 65535 | 0, _ = 0; i !== 0; ) {
          for (i -= _ = 2e3 < i ? 2e3 : i; x = x + (b = b + s[o++] | 0) | 0, --_; ) ;
          b %= 65521, x %= 65521;
        }
        return b | x << 16 | 0;
      };
    }, {}], 44: [function(r, f, c) {
      f.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
    }, {}], 45: [function(r, f, c) {
      var n = function() {
        for (var s, i = [], o = 0; o < 256; o++) {
          s = o;
          for (var b = 0; b < 8; b++) s = 1 & s ? 3988292384 ^ s >>> 1 : s >>> 1;
          i[o] = s;
        }
        return i;
      }();
      f.exports = function(s, i, o, b) {
        var x = n, _ = b + o;
        s ^= -1;
        for (var w = b; w < _; w++) s = s >>> 8 ^ x[255 & (s ^ i[w])];
        return -1 ^ s;
      };
    }, {}], 46: [function(r, f, c) {
      var n, s = r("../utils/common"), i = r("./trees"), o = r("./adler32"), b = r("./crc32"), x = r("./messages"), _ = 0, w = 4, d = 0, y = -2, u = -1, m = 4, h = 2, g = 8, k = 9, C = 286, R = 30, P = 19, O = 2 * C + 1, U = 15, j = 3, $ = 258, re = $ + j + 1, S = 42, T = 113, a = 1, F = 2, ie = 3, Z = 4;
      function ae(t, L) {
        return t.msg = x[L], L;
      }
      function V(t) {
        return (t << 1) - (4 < t ? 9 : 0);
      }
      function se(t) {
        for (var L = t.length; 0 <= --L; ) t[L] = 0;
      }
      function D(t) {
        var L = t.state, N = L.pending;
        N > t.avail_out && (N = t.avail_out), N !== 0 && (s.arraySet(t.output, L.pending_buf, L.pending_out, N, t.next_out), t.next_out += N, L.pending_out += N, t.total_out += N, t.avail_out -= N, L.pending -= N, L.pending === 0 && (L.pending_out = 0));
      }
      function A(t, L) {
        i._tr_flush_block(t, 0 <= t.block_start ? t.block_start : -1, t.strstart - t.block_start, L), t.block_start = t.strstart, D(t.strm);
      }
      function ee(t, L) {
        t.pending_buf[t.pending++] = L;
      }
      function H(t, L) {
        t.pending_buf[t.pending++] = L >>> 8 & 255, t.pending_buf[t.pending++] = 255 & L;
      }
      function q(t, L) {
        var N, v, p = t.max_chain_length, z = t.strstart, M = t.prev_length, W = t.nice_match, I = t.strstart > t.w_size - re ? t.strstart - (t.w_size - re) : 0, X = t.window, J = t.w_mask, K = t.prev, oe = t.strstart + $, ge = X[z + M - 1], he = X[z + M];
        t.prev_length >= t.good_match && (p >>= 2), W > t.lookahead && (W = t.lookahead);
        do
          if (X[(N = L) + M] === he && X[N + M - 1] === ge && X[N] === X[z] && X[++N] === X[z + 1]) {
            z += 2, N++;
            do
              ;
            while (X[++z] === X[++N] && X[++z] === X[++N] && X[++z] === X[++N] && X[++z] === X[++N] && X[++z] === X[++N] && X[++z] === X[++N] && X[++z] === X[++N] && X[++z] === X[++N] && z < oe);
            if (v = $ - (oe - z), z = oe - $, M < v) {
              if (t.match_start = L, W <= (M = v)) break;
              ge = X[z + M - 1], he = X[z + M];
            }
          }
        while ((L = K[L & J]) > I && --p != 0);
        return M <= t.lookahead ? M : t.lookahead;
      }
      function ve(t) {
        var L, N, v, p, z, M, W, I, X, J, K = t.w_size;
        do {
          if (p = t.window_size - t.lookahead - t.strstart, t.strstart >= K + (K - re)) {
            for (s.arraySet(t.window, t.window, K, K, 0), t.match_start -= K, t.strstart -= K, t.block_start -= K, L = N = t.hash_size; v = t.head[--L], t.head[L] = K <= v ? v - K : 0, --N; ) ;
            for (L = N = K; v = t.prev[--L], t.prev[L] = K <= v ? v - K : 0, --N; ) ;
            p += K;
          }
          if (t.strm.avail_in === 0) break;
          if (M = t.strm, W = t.window, I = t.strstart + t.lookahead, X = p, J = void 0, J = M.avail_in, X < J && (J = X), N = J === 0 ? 0 : (M.avail_in -= J, s.arraySet(W, M.input, M.next_in, J, I), M.state.wrap === 1 ? M.adler = o(M.adler, W, J, I) : M.state.wrap === 2 && (M.adler = b(M.adler, W, J, I)), M.next_in += J, M.total_in += J, J), t.lookahead += N, t.lookahead + t.insert >= j) for (z = t.strstart - t.insert, t.ins_h = t.window[z], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[z + 1]) & t.hash_mask; t.insert && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[z + j - 1]) & t.hash_mask, t.prev[z & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = z, z++, t.insert--, !(t.lookahead + t.insert < j)); ) ;
        } while (t.lookahead < re && t.strm.avail_in !== 0);
      }
      function Ee(t, L) {
        for (var N, v; ; ) {
          if (t.lookahead < re) {
            if (ve(t), t.lookahead < re && L === _) return a;
            if (t.lookahead === 0) break;
          }
          if (N = 0, t.lookahead >= j && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + j - 1]) & t.hash_mask, N = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), N !== 0 && t.strstart - N <= t.w_size - re && (t.match_length = q(t, N)), t.match_length >= j) if (v = i._tr_tally(t, t.strstart - t.match_start, t.match_length - j), t.lookahead -= t.match_length, t.match_length <= t.max_lazy_match && t.lookahead >= j) {
            for (t.match_length--; t.strstart++, t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + j - 1]) & t.hash_mask, N = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart, --t.match_length != 0; ) ;
            t.strstart++;
          } else t.strstart += t.match_length, t.match_length = 0, t.ins_h = t.window[t.strstart], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + 1]) & t.hash_mask;
          else v = i._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++;
          if (v && (A(t, !1), t.strm.avail_out === 0)) return a;
        }
        return t.insert = t.strstart < j - 1 ? t.strstart : j - 1, L === w ? (A(t, !0), t.strm.avail_out === 0 ? ie : Z) : t.last_lit && (A(t, !1), t.strm.avail_out === 0) ? a : F;
      }
      function fe(t, L) {
        for (var N, v, p; ; ) {
          if (t.lookahead < re) {
            if (ve(t), t.lookahead < re && L === _) return a;
            if (t.lookahead === 0) break;
          }
          if (N = 0, t.lookahead >= j && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + j - 1]) & t.hash_mask, N = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), t.prev_length = t.match_length, t.prev_match = t.match_start, t.match_length = j - 1, N !== 0 && t.prev_length < t.max_lazy_match && t.strstart - N <= t.w_size - re && (t.match_length = q(t, N), t.match_length <= 5 && (t.strategy === 1 || t.match_length === j && 4096 < t.strstart - t.match_start) && (t.match_length = j - 1)), t.prev_length >= j && t.match_length <= t.prev_length) {
            for (p = t.strstart + t.lookahead - j, v = i._tr_tally(t, t.strstart - 1 - t.prev_match, t.prev_length - j), t.lookahead -= t.prev_length - 1, t.prev_length -= 2; ++t.strstart <= p && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + j - 1]) & t.hash_mask, N = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), --t.prev_length != 0; ) ;
            if (t.match_available = 0, t.match_length = j - 1, t.strstart++, v && (A(t, !1), t.strm.avail_out === 0)) return a;
          } else if (t.match_available) {
            if ((v = i._tr_tally(t, 0, t.window[t.strstart - 1])) && A(t, !1), t.strstart++, t.lookahead--, t.strm.avail_out === 0) return a;
          } else t.match_available = 1, t.strstart++, t.lookahead--;
        }
        return t.match_available && (v = i._tr_tally(t, 0, t.window[t.strstart - 1]), t.match_available = 0), t.insert = t.strstart < j - 1 ? t.strstart : j - 1, L === w ? (A(t, !0), t.strm.avail_out === 0 ? ie : Z) : t.last_lit && (A(t, !1), t.strm.avail_out === 0) ? a : F;
      }
      function ne(t, L, N, v, p) {
        this.good_length = t, this.max_lazy = L, this.nice_length = N, this.max_chain = v, this.func = p;
      }
      function be() {
        this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = g, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new s.Buf16(2 * O), this.dyn_dtree = new s.Buf16(2 * (2 * R + 1)), this.bl_tree = new s.Buf16(2 * (2 * P + 1)), se(this.dyn_ltree), se(this.dyn_dtree), se(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new s.Buf16(U + 1), this.heap = new s.Buf16(2 * C + 1), se(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new s.Buf16(2 * C + 1), se(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
      }
      function de(t) {
        var L;
        return t && t.state ? (t.total_in = t.total_out = 0, t.data_type = h, (L = t.state).pending = 0, L.pending_out = 0, L.wrap < 0 && (L.wrap = -L.wrap), L.status = L.wrap ? S : T, t.adler = L.wrap === 2 ? 0 : 1, L.last_flush = _, i._tr_init(L), d) : ae(t, y);
      }
      function _e(t) {
        var L = de(t);
        return L === d && function(N) {
          N.window_size = 2 * N.w_size, se(N.head), N.max_lazy_match = n[N.level].max_lazy, N.good_match = n[N.level].good_length, N.nice_match = n[N.level].nice_length, N.max_chain_length = n[N.level].max_chain, N.strstart = 0, N.block_start = 0, N.lookahead = 0, N.insert = 0, N.match_length = N.prev_length = j - 1, N.match_available = 0, N.ins_h = 0;
        }(t.state), L;
      }
      function ke(t, L, N, v, p, z) {
        if (!t) return y;
        var M = 1;
        if (L === u && (L = 6), v < 0 ? (M = 0, v = -v) : 15 < v && (M = 2, v -= 16), p < 1 || k < p || N !== g || v < 8 || 15 < v || L < 0 || 9 < L || z < 0 || m < z) return ae(t, y);
        v === 8 && (v = 9);
        var W = new be();
        return (t.state = W).strm = t, W.wrap = M, W.gzhead = null, W.w_bits = v, W.w_size = 1 << W.w_bits, W.w_mask = W.w_size - 1, W.hash_bits = p + 7, W.hash_size = 1 << W.hash_bits, W.hash_mask = W.hash_size - 1, W.hash_shift = ~~((W.hash_bits + j - 1) / j), W.window = new s.Buf8(2 * W.w_size), W.head = new s.Buf16(W.hash_size), W.prev = new s.Buf16(W.w_size), W.lit_bufsize = 1 << p + 6, W.pending_buf_size = 4 * W.lit_bufsize, W.pending_buf = new s.Buf8(W.pending_buf_size), W.d_buf = 1 * W.lit_bufsize, W.l_buf = 3 * W.lit_bufsize, W.level = L, W.strategy = z, W.method = N, _e(t);
      }
      n = [new ne(0, 0, 0, 0, function(t, L) {
        var N = 65535;
        for (N > t.pending_buf_size - 5 && (N = t.pending_buf_size - 5); ; ) {
          if (t.lookahead <= 1) {
            if (ve(t), t.lookahead === 0 && L === _) return a;
            if (t.lookahead === 0) break;
          }
          t.strstart += t.lookahead, t.lookahead = 0;
          var v = t.block_start + N;
          if ((t.strstart === 0 || t.strstart >= v) && (t.lookahead = t.strstart - v, t.strstart = v, A(t, !1), t.strm.avail_out === 0) || t.strstart - t.block_start >= t.w_size - re && (A(t, !1), t.strm.avail_out === 0)) return a;
        }
        return t.insert = 0, L === w ? (A(t, !0), t.strm.avail_out === 0 ? ie : Z) : (t.strstart > t.block_start && (A(t, !1), t.strm.avail_out), a);
      }), new ne(4, 4, 8, 4, Ee), new ne(4, 5, 16, 8, Ee), new ne(4, 6, 32, 32, Ee), new ne(4, 4, 16, 16, fe), new ne(8, 16, 32, 32, fe), new ne(8, 16, 128, 128, fe), new ne(8, 32, 128, 256, fe), new ne(32, 128, 258, 1024, fe), new ne(32, 258, 258, 4096, fe)], c.deflateInit = function(t, L) {
        return ke(t, L, g, 15, 8, 0);
      }, c.deflateInit2 = ke, c.deflateReset = _e, c.deflateResetKeep = de, c.deflateSetHeader = function(t, L) {
        return t && t.state ? t.state.wrap !== 2 ? y : (t.state.gzhead = L, d) : y;
      }, c.deflate = function(t, L) {
        var N, v, p, z;
        if (!t || !t.state || 5 < L || L < 0) return t ? ae(t, y) : y;
        if (v = t.state, !t.output || !t.input && t.avail_in !== 0 || v.status === 666 && L !== w) return ae(t, t.avail_out === 0 ? -5 : y);
        if (v.strm = t, N = v.last_flush, v.last_flush = L, v.status === S) if (v.wrap === 2) t.adler = 0, ee(v, 31), ee(v, 139), ee(v, 8), v.gzhead ? (ee(v, (v.gzhead.text ? 1 : 0) + (v.gzhead.hcrc ? 2 : 0) + (v.gzhead.extra ? 4 : 0) + (v.gzhead.name ? 8 : 0) + (v.gzhead.comment ? 16 : 0)), ee(v, 255 & v.gzhead.time), ee(v, v.gzhead.time >> 8 & 255), ee(v, v.gzhead.time >> 16 & 255), ee(v, v.gzhead.time >> 24 & 255), ee(v, v.level === 9 ? 2 : 2 <= v.strategy || v.level < 2 ? 4 : 0), ee(v, 255 & v.gzhead.os), v.gzhead.extra && v.gzhead.extra.length && (ee(v, 255 & v.gzhead.extra.length), ee(v, v.gzhead.extra.length >> 8 & 255)), v.gzhead.hcrc && (t.adler = b(t.adler, v.pending_buf, v.pending, 0)), v.gzindex = 0, v.status = 69) : (ee(v, 0), ee(v, 0), ee(v, 0), ee(v, 0), ee(v, 0), ee(v, v.level === 9 ? 2 : 2 <= v.strategy || v.level < 2 ? 4 : 0), ee(v, 3), v.status = T);
        else {
          var M = g + (v.w_bits - 8 << 4) << 8;
          M |= (2 <= v.strategy || v.level < 2 ? 0 : v.level < 6 ? 1 : v.level === 6 ? 2 : 3) << 6, v.strstart !== 0 && (M |= 32), M += 31 - M % 31, v.status = T, H(v, M), v.strstart !== 0 && (H(v, t.adler >>> 16), H(v, 65535 & t.adler)), t.adler = 1;
        }
        if (v.status === 69) if (v.gzhead.extra) {
          for (p = v.pending; v.gzindex < (65535 & v.gzhead.extra.length) && (v.pending !== v.pending_buf_size || (v.gzhead.hcrc && v.pending > p && (t.adler = b(t.adler, v.pending_buf, v.pending - p, p)), D(t), p = v.pending, v.pending !== v.pending_buf_size)); ) ee(v, 255 & v.gzhead.extra[v.gzindex]), v.gzindex++;
          v.gzhead.hcrc && v.pending > p && (t.adler = b(t.adler, v.pending_buf, v.pending - p, p)), v.gzindex === v.gzhead.extra.length && (v.gzindex = 0, v.status = 73);
        } else v.status = 73;
        if (v.status === 73) if (v.gzhead.name) {
          p = v.pending;
          do {
            if (v.pending === v.pending_buf_size && (v.gzhead.hcrc && v.pending > p && (t.adler = b(t.adler, v.pending_buf, v.pending - p, p)), D(t), p = v.pending, v.pending === v.pending_buf_size)) {
              z = 1;
              break;
            }
            z = v.gzindex < v.gzhead.name.length ? 255 & v.gzhead.name.charCodeAt(v.gzindex++) : 0, ee(v, z);
          } while (z !== 0);
          v.gzhead.hcrc && v.pending > p && (t.adler = b(t.adler, v.pending_buf, v.pending - p, p)), z === 0 && (v.gzindex = 0, v.status = 91);
        } else v.status = 91;
        if (v.status === 91) if (v.gzhead.comment) {
          p = v.pending;
          do {
            if (v.pending === v.pending_buf_size && (v.gzhead.hcrc && v.pending > p && (t.adler = b(t.adler, v.pending_buf, v.pending - p, p)), D(t), p = v.pending, v.pending === v.pending_buf_size)) {
              z = 1;
              break;
            }
            z = v.gzindex < v.gzhead.comment.length ? 255 & v.gzhead.comment.charCodeAt(v.gzindex++) : 0, ee(v, z);
          } while (z !== 0);
          v.gzhead.hcrc && v.pending > p && (t.adler = b(t.adler, v.pending_buf, v.pending - p, p)), z === 0 && (v.status = 103);
        } else v.status = 103;
        if (v.status === 103 && (v.gzhead.hcrc ? (v.pending + 2 > v.pending_buf_size && D(t), v.pending + 2 <= v.pending_buf_size && (ee(v, 255 & t.adler), ee(v, t.adler >> 8 & 255), t.adler = 0, v.status = T)) : v.status = T), v.pending !== 0) {
          if (D(t), t.avail_out === 0) return v.last_flush = -1, d;
        } else if (t.avail_in === 0 && V(L) <= V(N) && L !== w) return ae(t, -5);
        if (v.status === 666 && t.avail_in !== 0) return ae(t, -5);
        if (t.avail_in !== 0 || v.lookahead !== 0 || L !== _ && v.status !== 666) {
          var W = v.strategy === 2 ? function(I, X) {
            for (var J; ; ) {
              if (I.lookahead === 0 && (ve(I), I.lookahead === 0)) {
                if (X === _) return a;
                break;
              }
              if (I.match_length = 0, J = i._tr_tally(I, 0, I.window[I.strstart]), I.lookahead--, I.strstart++, J && (A(I, !1), I.strm.avail_out === 0)) return a;
            }
            return I.insert = 0, X === w ? (A(I, !0), I.strm.avail_out === 0 ? ie : Z) : I.last_lit && (A(I, !1), I.strm.avail_out === 0) ? a : F;
          }(v, L) : v.strategy === 3 ? function(I, X) {
            for (var J, K, oe, ge, he = I.window; ; ) {
              if (I.lookahead <= $) {
                if (ve(I), I.lookahead <= $ && X === _) return a;
                if (I.lookahead === 0) break;
              }
              if (I.match_length = 0, I.lookahead >= j && 0 < I.strstart && (K = he[oe = I.strstart - 1]) === he[++oe] && K === he[++oe] && K === he[++oe]) {
                ge = I.strstart + $;
                do
                  ;
                while (K === he[++oe] && K === he[++oe] && K === he[++oe] && K === he[++oe] && K === he[++oe] && K === he[++oe] && K === he[++oe] && K === he[++oe] && oe < ge);
                I.match_length = $ - (ge - oe), I.match_length > I.lookahead && (I.match_length = I.lookahead);
              }
              if (I.match_length >= j ? (J = i._tr_tally(I, 1, I.match_length - j), I.lookahead -= I.match_length, I.strstart += I.match_length, I.match_length = 0) : (J = i._tr_tally(I, 0, I.window[I.strstart]), I.lookahead--, I.strstart++), J && (A(I, !1), I.strm.avail_out === 0)) return a;
            }
            return I.insert = 0, X === w ? (A(I, !0), I.strm.avail_out === 0 ? ie : Z) : I.last_lit && (A(I, !1), I.strm.avail_out === 0) ? a : F;
          }(v, L) : n[v.level].func(v, L);
          if (W !== ie && W !== Z || (v.status = 666), W === a || W === ie) return t.avail_out === 0 && (v.last_flush = -1), d;
          if (W === F && (L === 1 ? i._tr_align(v) : L !== 5 && (i._tr_stored_block(v, 0, 0, !1), L === 3 && (se(v.head), v.lookahead === 0 && (v.strstart = 0, v.block_start = 0, v.insert = 0))), D(t), t.avail_out === 0)) return v.last_flush = -1, d;
        }
        return L !== w ? d : v.wrap <= 0 ? 1 : (v.wrap === 2 ? (ee(v, 255 & t.adler), ee(v, t.adler >> 8 & 255), ee(v, t.adler >> 16 & 255), ee(v, t.adler >> 24 & 255), ee(v, 255 & t.total_in), ee(v, t.total_in >> 8 & 255), ee(v, t.total_in >> 16 & 255), ee(v, t.total_in >> 24 & 255)) : (H(v, t.adler >>> 16), H(v, 65535 & t.adler)), D(t), 0 < v.wrap && (v.wrap = -v.wrap), v.pending !== 0 ? d : 1);
      }, c.deflateEnd = function(t) {
        var L;
        return t && t.state ? (L = t.state.status) !== S && L !== 69 && L !== 73 && L !== 91 && L !== 103 && L !== T && L !== 666 ? ae(t, y) : (t.state = null, L === T ? ae(t, -3) : d) : y;
      }, c.deflateSetDictionary = function(t, L) {
        var N, v, p, z, M, W, I, X, J = L.length;
        if (!t || !t.state || (z = (N = t.state).wrap) === 2 || z === 1 && N.status !== S || N.lookahead) return y;
        for (z === 1 && (t.adler = o(t.adler, L, J, 0)), N.wrap = 0, J >= N.w_size && (z === 0 && (se(N.head), N.strstart = 0, N.block_start = 0, N.insert = 0), X = new s.Buf8(N.w_size), s.arraySet(X, L, J - N.w_size, N.w_size, 0), L = X, J = N.w_size), M = t.avail_in, W = t.next_in, I = t.input, t.avail_in = J, t.next_in = 0, t.input = L, ve(N); N.lookahead >= j; ) {
          for (v = N.strstart, p = N.lookahead - (j - 1); N.ins_h = (N.ins_h << N.hash_shift ^ N.window[v + j - 1]) & N.hash_mask, N.prev[v & N.w_mask] = N.head[N.ins_h], N.head[N.ins_h] = v, v++, --p; ) ;
          N.strstart = v, N.lookahead = j - 1, ve(N);
        }
        return N.strstart += N.lookahead, N.block_start = N.strstart, N.insert = N.lookahead, N.lookahead = 0, N.match_length = N.prev_length = j - 1, N.match_available = 0, t.next_in = W, t.input = I, t.avail_in = M, N.wrap = z, d;
      }, c.deflateInfo = "pako deflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(r, f, c) {
      f.exports = function() {
        this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
      };
    }, {}], 48: [function(r, f, c) {
      f.exports = function(n, s) {
        var i, o, b, x, _, w, d, y, u, m, h, g, k, C, R, P, O, U, j, $, re, S, T, a, F;
        i = n.state, o = n.next_in, a = n.input, b = o + (n.avail_in - 5), x = n.next_out, F = n.output, _ = x - (s - n.avail_out), w = x + (n.avail_out - 257), d = i.dmax, y = i.wsize, u = i.whave, m = i.wnext, h = i.window, g = i.hold, k = i.bits, C = i.lencode, R = i.distcode, P = (1 << i.lenbits) - 1, O = (1 << i.distbits) - 1;
        e: do {
          k < 15 && (g += a[o++] << k, k += 8, g += a[o++] << k, k += 8), U = C[g & P];
          t: for (; ; ) {
            if (g >>>= j = U >>> 24, k -= j, (j = U >>> 16 & 255) === 0) F[x++] = 65535 & U;
            else {
              if (!(16 & j)) {
                if (!(64 & j)) {
                  U = C[(65535 & U) + (g & (1 << j) - 1)];
                  continue t;
                }
                if (32 & j) {
                  i.mode = 12;
                  break e;
                }
                n.msg = "invalid literal/length code", i.mode = 30;
                break e;
              }
              $ = 65535 & U, (j &= 15) && (k < j && (g += a[o++] << k, k += 8), $ += g & (1 << j) - 1, g >>>= j, k -= j), k < 15 && (g += a[o++] << k, k += 8, g += a[o++] << k, k += 8), U = R[g & O];
              r: for (; ; ) {
                if (g >>>= j = U >>> 24, k -= j, !(16 & (j = U >>> 16 & 255))) {
                  if (!(64 & j)) {
                    U = R[(65535 & U) + (g & (1 << j) - 1)];
                    continue r;
                  }
                  n.msg = "invalid distance code", i.mode = 30;
                  break e;
                }
                if (re = 65535 & U, k < (j &= 15) && (g += a[o++] << k, (k += 8) < j && (g += a[o++] << k, k += 8)), d < (re += g & (1 << j) - 1)) {
                  n.msg = "invalid distance too far back", i.mode = 30;
                  break e;
                }
                if (g >>>= j, k -= j, (j = x - _) < re) {
                  if (u < (j = re - j) && i.sane) {
                    n.msg = "invalid distance too far back", i.mode = 30;
                    break e;
                  }
                  if (T = h, (S = 0) === m) {
                    if (S += y - j, j < $) {
                      for ($ -= j; F[x++] = h[S++], --j; ) ;
                      S = x - re, T = F;
                    }
                  } else if (m < j) {
                    if (S += y + m - j, (j -= m) < $) {
                      for ($ -= j; F[x++] = h[S++], --j; ) ;
                      if (S = 0, m < $) {
                        for ($ -= j = m; F[x++] = h[S++], --j; ) ;
                        S = x - re, T = F;
                      }
                    }
                  } else if (S += m - j, j < $) {
                    for ($ -= j; F[x++] = h[S++], --j; ) ;
                    S = x - re, T = F;
                  }
                  for (; 2 < $; ) F[x++] = T[S++], F[x++] = T[S++], F[x++] = T[S++], $ -= 3;
                  $ && (F[x++] = T[S++], 1 < $ && (F[x++] = T[S++]));
                } else {
                  for (S = x - re; F[x++] = F[S++], F[x++] = F[S++], F[x++] = F[S++], 2 < ($ -= 3); ) ;
                  $ && (F[x++] = F[S++], 1 < $ && (F[x++] = F[S++]));
                }
                break;
              }
            }
            break;
          }
        } while (o < b && x < w);
        o -= $ = k >> 3, g &= (1 << (k -= $ << 3)) - 1, n.next_in = o, n.next_out = x, n.avail_in = o < b ? b - o + 5 : 5 - (o - b), n.avail_out = x < w ? w - x + 257 : 257 - (x - w), i.hold = g, i.bits = k;
      };
    }, {}], 49: [function(r, f, c) {
      var n = r("../utils/common"), s = r("./adler32"), i = r("./crc32"), o = r("./inffast"), b = r("./inftrees"), x = 1, _ = 2, w = 0, d = -2, y = 1, u = 852, m = 592;
      function h(S) {
        return (S >>> 24 & 255) + (S >>> 8 & 65280) + ((65280 & S) << 8) + ((255 & S) << 24);
      }
      function g() {
        this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new n.Buf16(320), this.work = new n.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
      }
      function k(S) {
        var T;
        return S && S.state ? (T = S.state, S.total_in = S.total_out = T.total = 0, S.msg = "", T.wrap && (S.adler = 1 & T.wrap), T.mode = y, T.last = 0, T.havedict = 0, T.dmax = 32768, T.head = null, T.hold = 0, T.bits = 0, T.lencode = T.lendyn = new n.Buf32(u), T.distcode = T.distdyn = new n.Buf32(m), T.sane = 1, T.back = -1, w) : d;
      }
      function C(S) {
        var T;
        return S && S.state ? ((T = S.state).wsize = 0, T.whave = 0, T.wnext = 0, k(S)) : d;
      }
      function R(S, T) {
        var a, F;
        return S && S.state ? (F = S.state, T < 0 ? (a = 0, T = -T) : (a = 1 + (T >> 4), T < 48 && (T &= 15)), T && (T < 8 || 15 < T) ? d : (F.window !== null && F.wbits !== T && (F.window = null), F.wrap = a, F.wbits = T, C(S))) : d;
      }
      function P(S, T) {
        var a, F;
        return S ? (F = new g(), (S.state = F).window = null, (a = R(S, T)) !== w && (S.state = null), a) : d;
      }
      var O, U, j = !0;
      function $(S) {
        if (j) {
          var T;
          for (O = new n.Buf32(512), U = new n.Buf32(32), T = 0; T < 144; ) S.lens[T++] = 8;
          for (; T < 256; ) S.lens[T++] = 9;
          for (; T < 280; ) S.lens[T++] = 7;
          for (; T < 288; ) S.lens[T++] = 8;
          for (b(x, S.lens, 0, 288, O, 0, S.work, { bits: 9 }), T = 0; T < 32; ) S.lens[T++] = 5;
          b(_, S.lens, 0, 32, U, 0, S.work, { bits: 5 }), j = !1;
        }
        S.lencode = O, S.lenbits = 9, S.distcode = U, S.distbits = 5;
      }
      function re(S, T, a, F) {
        var ie, Z = S.state;
        return Z.window === null && (Z.wsize = 1 << Z.wbits, Z.wnext = 0, Z.whave = 0, Z.window = new n.Buf8(Z.wsize)), F >= Z.wsize ? (n.arraySet(Z.window, T, a - Z.wsize, Z.wsize, 0), Z.wnext = 0, Z.whave = Z.wsize) : (F < (ie = Z.wsize - Z.wnext) && (ie = F), n.arraySet(Z.window, T, a - F, ie, Z.wnext), (F -= ie) ? (n.arraySet(Z.window, T, a - F, F, 0), Z.wnext = F, Z.whave = Z.wsize) : (Z.wnext += ie, Z.wnext === Z.wsize && (Z.wnext = 0), Z.whave < Z.wsize && (Z.whave += ie))), 0;
      }
      c.inflateReset = C, c.inflateReset2 = R, c.inflateResetKeep = k, c.inflateInit = function(S) {
        return P(S, 15);
      }, c.inflateInit2 = P, c.inflate = function(S, T) {
        var a, F, ie, Z, ae, V, se, D, A, ee, H, q, ve, Ee, fe, ne, be, de, _e, ke, t, L, N, v, p = 0, z = new n.Buf8(4), M = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
        if (!S || !S.state || !S.output || !S.input && S.avail_in !== 0) return d;
        (a = S.state).mode === 12 && (a.mode = 13), ae = S.next_out, ie = S.output, se = S.avail_out, Z = S.next_in, F = S.input, V = S.avail_in, D = a.hold, A = a.bits, ee = V, H = se, L = w;
        e: for (; ; ) switch (a.mode) {
          case y:
            if (a.wrap === 0) {
              a.mode = 13;
              break;
            }
            for (; A < 16; ) {
              if (V === 0) break e;
              V--, D += F[Z++] << A, A += 8;
            }
            if (2 & a.wrap && D === 35615) {
              z[a.check = 0] = 255 & D, z[1] = D >>> 8 & 255, a.check = i(a.check, z, 2, 0), A = D = 0, a.mode = 2;
              break;
            }
            if (a.flags = 0, a.head && (a.head.done = !1), !(1 & a.wrap) || (((255 & D) << 8) + (D >> 8)) % 31) {
              S.msg = "incorrect header check", a.mode = 30;
              break;
            }
            if ((15 & D) != 8) {
              S.msg = "unknown compression method", a.mode = 30;
              break;
            }
            if (A -= 4, t = 8 + (15 & (D >>>= 4)), a.wbits === 0) a.wbits = t;
            else if (t > a.wbits) {
              S.msg = "invalid window size", a.mode = 30;
              break;
            }
            a.dmax = 1 << t, S.adler = a.check = 1, a.mode = 512 & D ? 10 : 12, A = D = 0;
            break;
          case 2:
            for (; A < 16; ) {
              if (V === 0) break e;
              V--, D += F[Z++] << A, A += 8;
            }
            if (a.flags = D, (255 & a.flags) != 8) {
              S.msg = "unknown compression method", a.mode = 30;
              break;
            }
            if (57344 & a.flags) {
              S.msg = "unknown header flags set", a.mode = 30;
              break;
            }
            a.head && (a.head.text = D >> 8 & 1), 512 & a.flags && (z[0] = 255 & D, z[1] = D >>> 8 & 255, a.check = i(a.check, z, 2, 0)), A = D = 0, a.mode = 3;
          case 3:
            for (; A < 32; ) {
              if (V === 0) break e;
              V--, D += F[Z++] << A, A += 8;
            }
            a.head && (a.head.time = D), 512 & a.flags && (z[0] = 255 & D, z[1] = D >>> 8 & 255, z[2] = D >>> 16 & 255, z[3] = D >>> 24 & 255, a.check = i(a.check, z, 4, 0)), A = D = 0, a.mode = 4;
          case 4:
            for (; A < 16; ) {
              if (V === 0) break e;
              V--, D += F[Z++] << A, A += 8;
            }
            a.head && (a.head.xflags = 255 & D, a.head.os = D >> 8), 512 & a.flags && (z[0] = 255 & D, z[1] = D >>> 8 & 255, a.check = i(a.check, z, 2, 0)), A = D = 0, a.mode = 5;
          case 5:
            if (1024 & a.flags) {
              for (; A < 16; ) {
                if (V === 0) break e;
                V--, D += F[Z++] << A, A += 8;
              }
              a.length = D, a.head && (a.head.extra_len = D), 512 & a.flags && (z[0] = 255 & D, z[1] = D >>> 8 & 255, a.check = i(a.check, z, 2, 0)), A = D = 0;
            } else a.head && (a.head.extra = null);
            a.mode = 6;
          case 6:
            if (1024 & a.flags && (V < (q = a.length) && (q = V), q && (a.head && (t = a.head.extra_len - a.length, a.head.extra || (a.head.extra = new Array(a.head.extra_len)), n.arraySet(a.head.extra, F, Z, q, t)), 512 & a.flags && (a.check = i(a.check, F, q, Z)), V -= q, Z += q, a.length -= q), a.length)) break e;
            a.length = 0, a.mode = 7;
          case 7:
            if (2048 & a.flags) {
              if (V === 0) break e;
              for (q = 0; t = F[Z + q++], a.head && t && a.length < 65536 && (a.head.name += String.fromCharCode(t)), t && q < V; ) ;
              if (512 & a.flags && (a.check = i(a.check, F, q, Z)), V -= q, Z += q, t) break e;
            } else a.head && (a.head.name = null);
            a.length = 0, a.mode = 8;
          case 8:
            if (4096 & a.flags) {
              if (V === 0) break e;
              for (q = 0; t = F[Z + q++], a.head && t && a.length < 65536 && (a.head.comment += String.fromCharCode(t)), t && q < V; ) ;
              if (512 & a.flags && (a.check = i(a.check, F, q, Z)), V -= q, Z += q, t) break e;
            } else a.head && (a.head.comment = null);
            a.mode = 9;
          case 9:
            if (512 & a.flags) {
              for (; A < 16; ) {
                if (V === 0) break e;
                V--, D += F[Z++] << A, A += 8;
              }
              if (D !== (65535 & a.check)) {
                S.msg = "header crc mismatch", a.mode = 30;
                break;
              }
              A = D = 0;
            }
            a.head && (a.head.hcrc = a.flags >> 9 & 1, a.head.done = !0), S.adler = a.check = 0, a.mode = 12;
            break;
          case 10:
            for (; A < 32; ) {
              if (V === 0) break e;
              V--, D += F[Z++] << A, A += 8;
            }
            S.adler = a.check = h(D), A = D = 0, a.mode = 11;
          case 11:
            if (a.havedict === 0) return S.next_out = ae, S.avail_out = se, S.next_in = Z, S.avail_in = V, a.hold = D, a.bits = A, 2;
            S.adler = a.check = 1, a.mode = 12;
          case 12:
            if (T === 5 || T === 6) break e;
          case 13:
            if (a.last) {
              D >>>= 7 & A, A -= 7 & A, a.mode = 27;
              break;
            }
            for (; A < 3; ) {
              if (V === 0) break e;
              V--, D += F[Z++] << A, A += 8;
            }
            switch (a.last = 1 & D, A -= 1, 3 & (D >>>= 1)) {
              case 0:
                a.mode = 14;
                break;
              case 1:
                if ($(a), a.mode = 20, T !== 6) break;
                D >>>= 2, A -= 2;
                break e;
              case 2:
                a.mode = 17;
                break;
              case 3:
                S.msg = "invalid block type", a.mode = 30;
            }
            D >>>= 2, A -= 2;
            break;
          case 14:
            for (D >>>= 7 & A, A -= 7 & A; A < 32; ) {
              if (V === 0) break e;
              V--, D += F[Z++] << A, A += 8;
            }
            if ((65535 & D) != (D >>> 16 ^ 65535)) {
              S.msg = "invalid stored block lengths", a.mode = 30;
              break;
            }
            if (a.length = 65535 & D, A = D = 0, a.mode = 15, T === 6) break e;
          case 15:
            a.mode = 16;
          case 16:
            if (q = a.length) {
              if (V < q && (q = V), se < q && (q = se), q === 0) break e;
              n.arraySet(ie, F, Z, q, ae), V -= q, Z += q, se -= q, ae += q, a.length -= q;
              break;
            }
            a.mode = 12;
            break;
          case 17:
            for (; A < 14; ) {
              if (V === 0) break e;
              V--, D += F[Z++] << A, A += 8;
            }
            if (a.nlen = 257 + (31 & D), D >>>= 5, A -= 5, a.ndist = 1 + (31 & D), D >>>= 5, A -= 5, a.ncode = 4 + (15 & D), D >>>= 4, A -= 4, 286 < a.nlen || 30 < a.ndist) {
              S.msg = "too many length or distance symbols", a.mode = 30;
              break;
            }
            a.have = 0, a.mode = 18;
          case 18:
            for (; a.have < a.ncode; ) {
              for (; A < 3; ) {
                if (V === 0) break e;
                V--, D += F[Z++] << A, A += 8;
              }
              a.lens[M[a.have++]] = 7 & D, D >>>= 3, A -= 3;
            }
            for (; a.have < 19; ) a.lens[M[a.have++]] = 0;
            if (a.lencode = a.lendyn, a.lenbits = 7, N = { bits: a.lenbits }, L = b(0, a.lens, 0, 19, a.lencode, 0, a.work, N), a.lenbits = N.bits, L) {
              S.msg = "invalid code lengths set", a.mode = 30;
              break;
            }
            a.have = 0, a.mode = 19;
          case 19:
            for (; a.have < a.nlen + a.ndist; ) {
              for (; ne = (p = a.lencode[D & (1 << a.lenbits) - 1]) >>> 16 & 255, be = 65535 & p, !((fe = p >>> 24) <= A); ) {
                if (V === 0) break e;
                V--, D += F[Z++] << A, A += 8;
              }
              if (be < 16) D >>>= fe, A -= fe, a.lens[a.have++] = be;
              else {
                if (be === 16) {
                  for (v = fe + 2; A < v; ) {
                    if (V === 0) break e;
                    V--, D += F[Z++] << A, A += 8;
                  }
                  if (D >>>= fe, A -= fe, a.have === 0) {
                    S.msg = "invalid bit length repeat", a.mode = 30;
                    break;
                  }
                  t = a.lens[a.have - 1], q = 3 + (3 & D), D >>>= 2, A -= 2;
                } else if (be === 17) {
                  for (v = fe + 3; A < v; ) {
                    if (V === 0) break e;
                    V--, D += F[Z++] << A, A += 8;
                  }
                  A -= fe, t = 0, q = 3 + (7 & (D >>>= fe)), D >>>= 3, A -= 3;
                } else {
                  for (v = fe + 7; A < v; ) {
                    if (V === 0) break e;
                    V--, D += F[Z++] << A, A += 8;
                  }
                  A -= fe, t = 0, q = 11 + (127 & (D >>>= fe)), D >>>= 7, A -= 7;
                }
                if (a.have + q > a.nlen + a.ndist) {
                  S.msg = "invalid bit length repeat", a.mode = 30;
                  break;
                }
                for (; q--; ) a.lens[a.have++] = t;
              }
            }
            if (a.mode === 30) break;
            if (a.lens[256] === 0) {
              S.msg = "invalid code -- missing end-of-block", a.mode = 30;
              break;
            }
            if (a.lenbits = 9, N = { bits: a.lenbits }, L = b(x, a.lens, 0, a.nlen, a.lencode, 0, a.work, N), a.lenbits = N.bits, L) {
              S.msg = "invalid literal/lengths set", a.mode = 30;
              break;
            }
            if (a.distbits = 6, a.distcode = a.distdyn, N = { bits: a.distbits }, L = b(_, a.lens, a.nlen, a.ndist, a.distcode, 0, a.work, N), a.distbits = N.bits, L) {
              S.msg = "invalid distances set", a.mode = 30;
              break;
            }
            if (a.mode = 20, T === 6) break e;
          case 20:
            a.mode = 21;
          case 21:
            if (6 <= V && 258 <= se) {
              S.next_out = ae, S.avail_out = se, S.next_in = Z, S.avail_in = V, a.hold = D, a.bits = A, o(S, H), ae = S.next_out, ie = S.output, se = S.avail_out, Z = S.next_in, F = S.input, V = S.avail_in, D = a.hold, A = a.bits, a.mode === 12 && (a.back = -1);
              break;
            }
            for (a.back = 0; ne = (p = a.lencode[D & (1 << a.lenbits) - 1]) >>> 16 & 255, be = 65535 & p, !((fe = p >>> 24) <= A); ) {
              if (V === 0) break e;
              V--, D += F[Z++] << A, A += 8;
            }
            if (ne && !(240 & ne)) {
              for (de = fe, _e = ne, ke = be; ne = (p = a.lencode[ke + ((D & (1 << de + _e) - 1) >> de)]) >>> 16 & 255, be = 65535 & p, !(de + (fe = p >>> 24) <= A); ) {
                if (V === 0) break e;
                V--, D += F[Z++] << A, A += 8;
              }
              D >>>= de, A -= de, a.back += de;
            }
            if (D >>>= fe, A -= fe, a.back += fe, a.length = be, ne === 0) {
              a.mode = 26;
              break;
            }
            if (32 & ne) {
              a.back = -1, a.mode = 12;
              break;
            }
            if (64 & ne) {
              S.msg = "invalid literal/length code", a.mode = 30;
              break;
            }
            a.extra = 15 & ne, a.mode = 22;
          case 22:
            if (a.extra) {
              for (v = a.extra; A < v; ) {
                if (V === 0) break e;
                V--, D += F[Z++] << A, A += 8;
              }
              a.length += D & (1 << a.extra) - 1, D >>>= a.extra, A -= a.extra, a.back += a.extra;
            }
            a.was = a.length, a.mode = 23;
          case 23:
            for (; ne = (p = a.distcode[D & (1 << a.distbits) - 1]) >>> 16 & 255, be = 65535 & p, !((fe = p >>> 24) <= A); ) {
              if (V === 0) break e;
              V--, D += F[Z++] << A, A += 8;
            }
            if (!(240 & ne)) {
              for (de = fe, _e = ne, ke = be; ne = (p = a.distcode[ke + ((D & (1 << de + _e) - 1) >> de)]) >>> 16 & 255, be = 65535 & p, !(de + (fe = p >>> 24) <= A); ) {
                if (V === 0) break e;
                V--, D += F[Z++] << A, A += 8;
              }
              D >>>= de, A -= de, a.back += de;
            }
            if (D >>>= fe, A -= fe, a.back += fe, 64 & ne) {
              S.msg = "invalid distance code", a.mode = 30;
              break;
            }
            a.offset = be, a.extra = 15 & ne, a.mode = 24;
          case 24:
            if (a.extra) {
              for (v = a.extra; A < v; ) {
                if (V === 0) break e;
                V--, D += F[Z++] << A, A += 8;
              }
              a.offset += D & (1 << a.extra) - 1, D >>>= a.extra, A -= a.extra, a.back += a.extra;
            }
            if (a.offset > a.dmax) {
              S.msg = "invalid distance too far back", a.mode = 30;
              break;
            }
            a.mode = 25;
          case 25:
            if (se === 0) break e;
            if (q = H - se, a.offset > q) {
              if ((q = a.offset - q) > a.whave && a.sane) {
                S.msg = "invalid distance too far back", a.mode = 30;
                break;
              }
              ve = q > a.wnext ? (q -= a.wnext, a.wsize - q) : a.wnext - q, q > a.length && (q = a.length), Ee = a.window;
            } else Ee = ie, ve = ae - a.offset, q = a.length;
            for (se < q && (q = se), se -= q, a.length -= q; ie[ae++] = Ee[ve++], --q; ) ;
            a.length === 0 && (a.mode = 21);
            break;
          case 26:
            if (se === 0) break e;
            ie[ae++] = a.length, se--, a.mode = 21;
            break;
          case 27:
            if (a.wrap) {
              for (; A < 32; ) {
                if (V === 0) break e;
                V--, D |= F[Z++] << A, A += 8;
              }
              if (H -= se, S.total_out += H, a.total += H, H && (S.adler = a.check = a.flags ? i(a.check, ie, H, ae - H) : s(a.check, ie, H, ae - H)), H = se, (a.flags ? D : h(D)) !== a.check) {
                S.msg = "incorrect data check", a.mode = 30;
                break;
              }
              A = D = 0;
            }
            a.mode = 28;
          case 28:
            if (a.wrap && a.flags) {
              for (; A < 32; ) {
                if (V === 0) break e;
                V--, D += F[Z++] << A, A += 8;
              }
              if (D !== (4294967295 & a.total)) {
                S.msg = "incorrect length check", a.mode = 30;
                break;
              }
              A = D = 0;
            }
            a.mode = 29;
          case 29:
            L = 1;
            break e;
          case 30:
            L = -3;
            break e;
          case 31:
            return -4;
          case 32:
          default:
            return d;
        }
        return S.next_out = ae, S.avail_out = se, S.next_in = Z, S.avail_in = V, a.hold = D, a.bits = A, (a.wsize || H !== S.avail_out && a.mode < 30 && (a.mode < 27 || T !== 4)) && re(S, S.output, S.next_out, H - S.avail_out) ? (a.mode = 31, -4) : (ee -= S.avail_in, H -= S.avail_out, S.total_in += ee, S.total_out += H, a.total += H, a.wrap && H && (S.adler = a.check = a.flags ? i(a.check, ie, H, S.next_out - H) : s(a.check, ie, H, S.next_out - H)), S.data_type = a.bits + (a.last ? 64 : 0) + (a.mode === 12 ? 128 : 0) + (a.mode === 20 || a.mode === 15 ? 256 : 0), (ee == 0 && H === 0 || T === 4) && L === w && (L = -5), L);
      }, c.inflateEnd = function(S) {
        if (!S || !S.state) return d;
        var T = S.state;
        return T.window && (T.window = null), S.state = null, w;
      }, c.inflateGetHeader = function(S, T) {
        var a;
        return S && S.state && 2 & (a = S.state).wrap ? ((a.head = T).done = !1, w) : d;
      }, c.inflateSetDictionary = function(S, T) {
        var a, F = T.length;
        return S && S.state ? (a = S.state).wrap !== 0 && a.mode !== 11 ? d : a.mode === 11 && s(1, T, F, 0) !== a.check ? -3 : re(S, T, F, F) ? (a.mode = 31, -4) : (a.havedict = 1, w) : d;
      }, c.inflateInfo = "pako inflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(r, f, c) {
      var n = r("../utils/common"), s = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], i = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], o = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], b = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
      f.exports = function(x, _, w, d, y, u, m, h) {
        var g, k, C, R, P, O, U, j, $, re = h.bits, S = 0, T = 0, a = 0, F = 0, ie = 0, Z = 0, ae = 0, V = 0, se = 0, D = 0, A = null, ee = 0, H = new n.Buf16(16), q = new n.Buf16(16), ve = null, Ee = 0;
        for (S = 0; S <= 15; S++) H[S] = 0;
        for (T = 0; T < d; T++) H[_[w + T]]++;
        for (ie = re, F = 15; 1 <= F && H[F] === 0; F--) ;
        if (F < ie && (ie = F), F === 0) return y[u++] = 20971520, y[u++] = 20971520, h.bits = 1, 0;
        for (a = 1; a < F && H[a] === 0; a++) ;
        for (ie < a && (ie = a), S = V = 1; S <= 15; S++) if (V <<= 1, (V -= H[S]) < 0) return -1;
        if (0 < V && (x === 0 || F !== 1)) return -1;
        for (q[1] = 0, S = 1; S < 15; S++) q[S + 1] = q[S] + H[S];
        for (T = 0; T < d; T++) _[w + T] !== 0 && (m[q[_[w + T]]++] = T);
        if (O = x === 0 ? (A = ve = m, 19) : x === 1 ? (A = s, ee -= 257, ve = i, Ee -= 257, 256) : (A = o, ve = b, -1), S = a, P = u, ae = T = D = 0, C = -1, R = (se = 1 << (Z = ie)) - 1, x === 1 && 852 < se || x === 2 && 592 < se) return 1;
        for (; ; ) {
          for (U = S - ae, $ = m[T] < O ? (j = 0, m[T]) : m[T] > O ? (j = ve[Ee + m[T]], A[ee + m[T]]) : (j = 96, 0), g = 1 << S - ae, a = k = 1 << Z; y[P + (D >> ae) + (k -= g)] = U << 24 | j << 16 | $ | 0, k !== 0; ) ;
          for (g = 1 << S - 1; D & g; ) g >>= 1;
          if (g !== 0 ? (D &= g - 1, D += g) : D = 0, T++, --H[S] == 0) {
            if (S === F) break;
            S = _[w + m[T]];
          }
          if (ie < S && (D & R) !== C) {
            for (ae === 0 && (ae = ie), P += a, V = 1 << (Z = S - ae); Z + ae < F && !((V -= H[Z + ae]) <= 0); ) Z++, V <<= 1;
            if (se += 1 << Z, x === 1 && 852 < se || x === 2 && 592 < se) return 1;
            y[C = D & R] = ie << 24 | Z << 16 | P - u | 0;
          }
        }
        return D !== 0 && (y[P + D] = S - ae << 24 | 64 << 16 | 0), h.bits = ie, 0;
      };
    }, { "../utils/common": 41 }], 51: [function(r, f, c) {
      f.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
    }, {}], 52: [function(r, f, c) {
      var n = r("../utils/common"), s = 0, i = 1;
      function o(p) {
        for (var z = p.length; 0 <= --z; ) p[z] = 0;
      }
      var b = 0, x = 29, _ = 256, w = _ + 1 + x, d = 30, y = 19, u = 2 * w + 1, m = 15, h = 16, g = 7, k = 256, C = 16, R = 17, P = 18, O = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], U = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], j = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], $ = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], re = new Array(2 * (w + 2));
      o(re);
      var S = new Array(2 * d);
      o(S);
      var T = new Array(512);
      o(T);
      var a = new Array(256);
      o(a);
      var F = new Array(x);
      o(F);
      var ie, Z, ae, V = new Array(d);
      function se(p, z, M, W, I) {
        this.static_tree = p, this.extra_bits = z, this.extra_base = M, this.elems = W, this.max_length = I, this.has_stree = p && p.length;
      }
      function D(p, z) {
        this.dyn_tree = p, this.max_code = 0, this.stat_desc = z;
      }
      function A(p) {
        return p < 256 ? T[p] : T[256 + (p >>> 7)];
      }
      function ee(p, z) {
        p.pending_buf[p.pending++] = 255 & z, p.pending_buf[p.pending++] = z >>> 8 & 255;
      }
      function H(p, z, M) {
        p.bi_valid > h - M ? (p.bi_buf |= z << p.bi_valid & 65535, ee(p, p.bi_buf), p.bi_buf = z >> h - p.bi_valid, p.bi_valid += M - h) : (p.bi_buf |= z << p.bi_valid & 65535, p.bi_valid += M);
      }
      function q(p, z, M) {
        H(p, M[2 * z], M[2 * z + 1]);
      }
      function ve(p, z) {
        for (var M = 0; M |= 1 & p, p >>>= 1, M <<= 1, 0 < --z; ) ;
        return M >>> 1;
      }
      function Ee(p, z, M) {
        var W, I, X = new Array(m + 1), J = 0;
        for (W = 1; W <= m; W++) X[W] = J = J + M[W - 1] << 1;
        for (I = 0; I <= z; I++) {
          var K = p[2 * I + 1];
          K !== 0 && (p[2 * I] = ve(X[K]++, K));
        }
      }
      function fe(p) {
        var z;
        for (z = 0; z < w; z++) p.dyn_ltree[2 * z] = 0;
        for (z = 0; z < d; z++) p.dyn_dtree[2 * z] = 0;
        for (z = 0; z < y; z++) p.bl_tree[2 * z] = 0;
        p.dyn_ltree[2 * k] = 1, p.opt_len = p.static_len = 0, p.last_lit = p.matches = 0;
      }
      function ne(p) {
        8 < p.bi_valid ? ee(p, p.bi_buf) : 0 < p.bi_valid && (p.pending_buf[p.pending++] = p.bi_buf), p.bi_buf = 0, p.bi_valid = 0;
      }
      function be(p, z, M, W) {
        var I = 2 * z, X = 2 * M;
        return p[I] < p[X] || p[I] === p[X] && W[z] <= W[M];
      }
      function de(p, z, M) {
        for (var W = p.heap[M], I = M << 1; I <= p.heap_len && (I < p.heap_len && be(z, p.heap[I + 1], p.heap[I], p.depth) && I++, !be(z, W, p.heap[I], p.depth)); ) p.heap[M] = p.heap[I], M = I, I <<= 1;
        p.heap[M] = W;
      }
      function _e(p, z, M) {
        var W, I, X, J, K = 0;
        if (p.last_lit !== 0) for (; W = p.pending_buf[p.d_buf + 2 * K] << 8 | p.pending_buf[p.d_buf + 2 * K + 1], I = p.pending_buf[p.l_buf + K], K++, W === 0 ? q(p, I, z) : (q(p, (X = a[I]) + _ + 1, z), (J = O[X]) !== 0 && H(p, I -= F[X], J), q(p, X = A(--W), M), (J = U[X]) !== 0 && H(p, W -= V[X], J)), K < p.last_lit; ) ;
        q(p, k, z);
      }
      function ke(p, z) {
        var M, W, I, X = z.dyn_tree, J = z.stat_desc.static_tree, K = z.stat_desc.has_stree, oe = z.stat_desc.elems, ge = -1;
        for (p.heap_len = 0, p.heap_max = u, M = 0; M < oe; M++) X[2 * M] !== 0 ? (p.heap[++p.heap_len] = ge = M, p.depth[M] = 0) : X[2 * M + 1] = 0;
        for (; p.heap_len < 2; ) X[2 * (I = p.heap[++p.heap_len] = ge < 2 ? ++ge : 0)] = 1, p.depth[I] = 0, p.opt_len--, K && (p.static_len -= J[2 * I + 1]);
        for (z.max_code = ge, M = p.heap_len >> 1; 1 <= M; M--) de(p, X, M);
        for (I = oe; M = p.heap[1], p.heap[1] = p.heap[p.heap_len--], de(p, X, 1), W = p.heap[1], p.heap[--p.heap_max] = M, p.heap[--p.heap_max] = W, X[2 * I] = X[2 * M] + X[2 * W], p.depth[I] = (p.depth[M] >= p.depth[W] ? p.depth[M] : p.depth[W]) + 1, X[2 * M + 1] = X[2 * W + 1] = I, p.heap[1] = I++, de(p, X, 1), 2 <= p.heap_len; ) ;
        p.heap[--p.heap_max] = p.heap[1], function(he, Te) {
          var Be, Oe, We, xe, Xe, Ye, Ie = Te.dyn_tree, et = Te.max_code, Je = Te.stat_desc.static_tree, tt = Te.stat_desc.has_stree, Ze = Te.stat_desc.extra_bits, Ke = Te.stat_desc.extra_base, Fe = Te.stat_desc.max_length, He = 0;
          for (xe = 0; xe <= m; xe++) he.bl_count[xe] = 0;
          for (Ie[2 * he.heap[he.heap_max] + 1] = 0, Be = he.heap_max + 1; Be < u; Be++) Fe < (xe = Ie[2 * Ie[2 * (Oe = he.heap[Be]) + 1] + 1] + 1) && (xe = Fe, He++), Ie[2 * Oe + 1] = xe, et < Oe || (he.bl_count[xe]++, Xe = 0, Ke <= Oe && (Xe = Ze[Oe - Ke]), Ye = Ie[2 * Oe], he.opt_len += Ye * (xe + Xe), tt && (he.static_len += Ye * (Je[2 * Oe + 1] + Xe)));
          if (He !== 0) {
            do {
              for (xe = Fe - 1; he.bl_count[xe] === 0; ) xe--;
              he.bl_count[xe]--, he.bl_count[xe + 1] += 2, he.bl_count[Fe]--, He -= 2;
            } while (0 < He);
            for (xe = Fe; xe !== 0; xe--) for (Oe = he.bl_count[xe]; Oe !== 0; ) et < (We = he.heap[--Be]) || (Ie[2 * We + 1] !== xe && (he.opt_len += (xe - Ie[2 * We + 1]) * Ie[2 * We], Ie[2 * We + 1] = xe), Oe--);
          }
        }(p, z), Ee(X, ge, p.bl_count);
      }
      function t(p, z, M) {
        var W, I, X = -1, J = z[1], K = 0, oe = 7, ge = 4;
        for (J === 0 && (oe = 138, ge = 3), z[2 * (M + 1) + 1] = 65535, W = 0; W <= M; W++) I = J, J = z[2 * (W + 1) + 1], ++K < oe && I === J || (K < ge ? p.bl_tree[2 * I] += K : I !== 0 ? (I !== X && p.bl_tree[2 * I]++, p.bl_tree[2 * C]++) : K <= 10 ? p.bl_tree[2 * R]++ : p.bl_tree[2 * P]++, X = I, ge = (K = 0) === J ? (oe = 138, 3) : I === J ? (oe = 6, 3) : (oe = 7, 4));
      }
      function L(p, z, M) {
        var W, I, X = -1, J = z[1], K = 0, oe = 7, ge = 4;
        for (J === 0 && (oe = 138, ge = 3), W = 0; W <= M; W++) if (I = J, J = z[2 * (W + 1) + 1], !(++K < oe && I === J)) {
          if (K < ge) for (; q(p, I, p.bl_tree), --K != 0; ) ;
          else I !== 0 ? (I !== X && (q(p, I, p.bl_tree), K--), q(p, C, p.bl_tree), H(p, K - 3, 2)) : K <= 10 ? (q(p, R, p.bl_tree), H(p, K - 3, 3)) : (q(p, P, p.bl_tree), H(p, K - 11, 7));
          X = I, ge = (K = 0) === J ? (oe = 138, 3) : I === J ? (oe = 6, 3) : (oe = 7, 4);
        }
      }
      o(V);
      var N = !1;
      function v(p, z, M, W) {
        H(p, (b << 1) + (W ? 1 : 0), 3), function(I, X, J, K) {
          ne(I), ee(I, J), ee(I, ~J), n.arraySet(I.pending_buf, I.window, X, J, I.pending), I.pending += J;
        }(p, z, M);
      }
      c._tr_init = function(p) {
        N || (function() {
          var z, M, W, I, X, J = new Array(m + 1);
          for (I = W = 0; I < x - 1; I++) for (F[I] = W, z = 0; z < 1 << O[I]; z++) a[W++] = I;
          for (a[W - 1] = I, I = X = 0; I < 16; I++) for (V[I] = X, z = 0; z < 1 << U[I]; z++) T[X++] = I;
          for (X >>= 7; I < d; I++) for (V[I] = X << 7, z = 0; z < 1 << U[I] - 7; z++) T[256 + X++] = I;
          for (M = 0; M <= m; M++) J[M] = 0;
          for (z = 0; z <= 143; ) re[2 * z + 1] = 8, z++, J[8]++;
          for (; z <= 255; ) re[2 * z + 1] = 9, z++, J[9]++;
          for (; z <= 279; ) re[2 * z + 1] = 7, z++, J[7]++;
          for (; z <= 287; ) re[2 * z + 1] = 8, z++, J[8]++;
          for (Ee(re, w + 1, J), z = 0; z < d; z++) S[2 * z + 1] = 5, S[2 * z] = ve(z, 5);
          ie = new se(re, O, _ + 1, w, m), Z = new se(S, U, 0, d, m), ae = new se(new Array(0), j, 0, y, g);
        }(), N = !0), p.l_desc = new D(p.dyn_ltree, ie), p.d_desc = new D(p.dyn_dtree, Z), p.bl_desc = new D(p.bl_tree, ae), p.bi_buf = 0, p.bi_valid = 0, fe(p);
      }, c._tr_stored_block = v, c._tr_flush_block = function(p, z, M, W) {
        var I, X, J = 0;
        0 < p.level ? (p.strm.data_type === 2 && (p.strm.data_type = function(K) {
          var oe, ge = 4093624447;
          for (oe = 0; oe <= 31; oe++, ge >>>= 1) if (1 & ge && K.dyn_ltree[2 * oe] !== 0) return s;
          if (K.dyn_ltree[18] !== 0 || K.dyn_ltree[20] !== 0 || K.dyn_ltree[26] !== 0) return i;
          for (oe = 32; oe < _; oe++) if (K.dyn_ltree[2 * oe] !== 0) return i;
          return s;
        }(p)), ke(p, p.l_desc), ke(p, p.d_desc), J = function(K) {
          var oe;
          for (t(K, K.dyn_ltree, K.l_desc.max_code), t(K, K.dyn_dtree, K.d_desc.max_code), ke(K, K.bl_desc), oe = y - 1; 3 <= oe && K.bl_tree[2 * $[oe] + 1] === 0; oe--) ;
          return K.opt_len += 3 * (oe + 1) + 5 + 5 + 4, oe;
        }(p), I = p.opt_len + 3 + 7 >>> 3, (X = p.static_len + 3 + 7 >>> 3) <= I && (I = X)) : I = X = M + 5, M + 4 <= I && z !== -1 ? v(p, z, M, W) : p.strategy === 4 || X === I ? (H(p, 2 + (W ? 1 : 0), 3), _e(p, re, S)) : (H(p, 4 + (W ? 1 : 0), 3), function(K, oe, ge, he) {
          var Te;
          for (H(K, oe - 257, 5), H(K, ge - 1, 5), H(K, he - 4, 4), Te = 0; Te < he; Te++) H(K, K.bl_tree[2 * $[Te] + 1], 3);
          L(K, K.dyn_ltree, oe - 1), L(K, K.dyn_dtree, ge - 1);
        }(p, p.l_desc.max_code + 1, p.d_desc.max_code + 1, J + 1), _e(p, p.dyn_ltree, p.dyn_dtree)), fe(p), W && ne(p);
      }, c._tr_tally = function(p, z, M) {
        return p.pending_buf[p.d_buf + 2 * p.last_lit] = z >>> 8 & 255, p.pending_buf[p.d_buf + 2 * p.last_lit + 1] = 255 & z, p.pending_buf[p.l_buf + p.last_lit] = 255 & M, p.last_lit++, z === 0 ? p.dyn_ltree[2 * M]++ : (p.matches++, z--, p.dyn_ltree[2 * (a[M] + _ + 1)]++, p.dyn_dtree[2 * A(z)]++), p.last_lit === p.lit_bufsize - 1;
      }, c._tr_align = function(p) {
        H(p, 2, 3), q(p, k, re), function(z) {
          z.bi_valid === 16 ? (ee(z, z.bi_buf), z.bi_buf = 0, z.bi_valid = 0) : 8 <= z.bi_valid && (z.pending_buf[z.pending++] = 255 & z.bi_buf, z.bi_buf >>= 8, z.bi_valid -= 8);
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
            var o, b, x, _, w = 1, d = {}, y = !1, u = s.document, m = Object.getPrototypeOf && Object.getPrototypeOf(s);
            m = m && m.setTimeout ? m : s, o = {}.toString.call(s.process) === "[object process]" ? function(C) {
              process.nextTick(function() {
                g(C);
              });
            } : function() {
              if (s.postMessage && !s.importScripts) {
                var C = !0, R = s.onmessage;
                return s.onmessage = function() {
                  C = !1;
                }, s.postMessage("", "*"), s.onmessage = R, C;
              }
            }() ? (_ = "setImmediate$" + Math.random() + "$", s.addEventListener ? s.addEventListener("message", k, !1) : s.attachEvent("onmessage", k), function(C) {
              s.postMessage(_ + C, "*");
            }) : s.MessageChannel ? ((x = new MessageChannel()).port1.onmessage = function(C) {
              g(C.data);
            }, function(C) {
              x.port2.postMessage(C);
            }) : u && "onreadystatechange" in u.createElement("script") ? (b = u.documentElement, function(C) {
              var R = u.createElement("script");
              R.onreadystatechange = function() {
                g(C), R.onreadystatechange = null, b.removeChild(R), R = null;
              }, b.appendChild(R);
            }) : function(C) {
              setTimeout(g, 0, C);
            }, m.setImmediate = function(C) {
              typeof C != "function" && (C = new Function("" + C));
              for (var R = new Array(arguments.length - 1), P = 0; P < R.length; P++) R[P] = arguments[P + 1];
              var O = { callback: C, args: R };
              return d[w] = O, o(w), w++;
            }, m.clearImmediate = h;
          }
          function h(C) {
            delete d[C];
          }
          function g(C) {
            if (y) setTimeout(g, 0, C);
            else {
              var R = d[C];
              if (R) {
                y = !0;
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
                  h(C), y = !1;
                }
              }
            }
          }
          function k(C) {
            C.source === s && typeof C.data == "string" && C.data.indexOf(_) === 0 && g(+C.data.slice(_.length));
          }
        })(typeof self > "u" ? n === void 0 ? this : n : self);
      }).call(this, typeof ut < "u" ? ut : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}] }, {}, [10])(10);
  });
})(Jt);
var Sr = Jt.exports;
const Rr = /* @__PURE__ */ xr(Sr);
function Cr(e = {}) {
  const {
    storageKey: l = "page-reviews",
    defaultPagePath: r = () => typeof window < "u" ? window.location.pathname + window.location.search : "/"
  } = e;
  function f() {
    return "rv-" + Date.now() + "-" + Math.random().toString(36).slice(2, 8);
  }
  function c() {
    if (typeof window > "u") return [];
    try {
      const k = window.localStorage.getItem(l);
      return (k ? JSON.parse(k) : []).map(zr);
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
  const [s, i] = Re(c), o = le(() => s, [s]), b = le((k) => {
    const C = k || r();
    return s.filter((R) => R.pagePath === C);
  }, [s, r]), x = le((k) => {
    const C = {
      id: f(),
      ...k,
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    return i((R) => {
      const P = [C, ...R];
      return n(P), P;
    }), C;
  }, []), _ = le((k, C) => {
    i((R) => {
      const P = R.map((O) => O.id === k ? { ...O, ...C } : O);
      return n(P), P;
    });
  }, []), w = le((k) => {
    i((C) => {
      const R = C.filter((P) => P.id !== k);
      return n(R), R;
    });
  }, []), d = le((k) => {
    const C = k || r();
    i((R) => {
      const P = R.filter((O) => O.pagePath !== C);
      return n(P), P;
    });
  }, [r]), y = le(() => {
    i([]), n([]);
  }, []), u = le(() => ({
    exportTime: (/* @__PURE__ */ new Date()).toISOString(),
    total: s.length,
    reviews: s
  }), [s]), m = le(() => {
    bt(
      new Blob([JSON.stringify(u(), null, 2)], { type: "application/json" }),
      `page-reviews-${_t()}.json`
    );
  }, [u]), h = le(() => {
    const k = Lt(u());
    bt(
      new Blob([k], { type: "text/markdown" }),
      `page-reviews-${_t()}.md`
    );
  }, [u]), g = le(async () => {
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
    k.file("review.json", JSON.stringify(R, null, 2)), k.file("review.md", Lt(R));
    const P = k.folder("images");
    for (const U of C.reviews)
      for (const j of U.screenshots || [])
        if (j.data && !j.url) {
          const $ = j.data.replace(/^data:image\/png;base64,/, "");
          P.file(j.filename, $, { base64: !0 });
        }
    const O = await k.generateAsync({ type: "blob" });
    bt(O, `page-reviews-${_t()}.zip`);
  }, [u]);
  return {
    reviews: s,
    allReviews: o,
    getPageReviews: b,
    addReview: x,
    updateReview: _,
    deleteReview: w,
    clearPageReviews: d,
    clearAllReviews: y,
    exportToJSON: m,
    exportToMarkdown: h,
    exportToZIP: g
  };
}
function zr(e) {
  if (!e || e.targets) return e;
  const l = e.type === "element" ? {
    type: "element",
    selector: e.selector,
    elementText: e.elementText,
    elementRect: e.elementRect,
    componentTree: e.componentTree,
    aria: e.aria,
    locators: e.locators
  } : {
    type: "viewport",
    viewportRect: e.viewportRect
  };
  return {
    ...e,
    targets: [l]
  };
}
function Lt(e) {
  const l = [
    "# 页面评审报告",
    "",
    `导出时间：${(/* @__PURE__ */ new Date()).toLocaleString()}`,
    `评审总数：${e.total}`,
    ""
  ], r = Ar(e.reviews, "pagePath");
  return Object.entries(r).forEach(([f, c]) => {
    l.push(`## 页面：${f}`), l.push(""), c.forEach((n, s) => {
      var o, b, x, _;
      l.push(`### ${s + 1}. ${n.title || "未命名评审"}`), l.push(`- **严重等级**：${Tr(n.severity)}`), l.push(`- **状态**：${n.status === "resolved" ? "已解决" : "待处理"}`), l.push(`- **窗口尺寸**：${(o = n.viewport) == null ? void 0 : o.width} × ${(b = n.viewport) == null ? void 0 : b.height}`), n.scroll && l.push(`- **滚动位置**：x=${n.scroll.x}, y=${n.scroll.y}`);
      const i = n.targets || [];
      i.length > 0 && (l.push(`- **评审目标数**：${i.length}`), i.forEach((w, d) => {
        w.type === "element" && w.elementRect ? (l.push(`  - 目标 ${d + 1}（元素）：\`${w.selector}\` x=${w.elementRect.x}, y=${w.elementRect.y}, w=${w.elementRect.width}, h=${w.elementRect.height}`), w.elementText && l.push(`    文本：${w.elementText}`)) : w.viewportRect && l.push(`  - 目标 ${d + 1}（框选）：x=${w.viewportRect.x}, y=${w.viewportRect.y}, w=${w.viewportRect.width}, h=${w.viewportRect.height}`);
      })), l.push(`- **评审建议**：${n.suggestion}`), l.push(`- **创建时间**：${new Date(n.createdAt).toLocaleString()}`), n.locators && Object.keys(n.locators).length > 0 && (l.push(""), l.push("#### 定位信息"), n.locators.cssSelector && l.push(`- **CSS Selector**: \`${n.locators.cssSelector}\``), n.locators.xpath && l.push(`- **XPath**: \`${n.locators.xpath}\``), (x = n.locators.aria) != null && x.role && l.push(`- **ARIA Role**: ${n.locators.aria.role}`), (_ = n.locators.aria) != null && _.accessibleName && l.push(`- **Accessible Name**: ${n.locators.aria.accessibleName}`), n.locators.testId && l.push(`- **data-testid**: ${n.locators.testId}`)), n.screenshots && n.screenshots.length > 0 && (l.push(""), l.push("#### 截图"), n.screenshots.forEach((w) => {
        const d = w.url || w.imagePath || `images/${w.filename}`;
        l.push(`![${w.type}](${d})`);
      })), l.push("");
    });
  }), l.join(`
`);
}
function bt(e, l) {
  if (typeof window > "u") return;
  const r = URL.createObjectURL(e), f = document.createElement("a");
  f.href = r, f.download = l, f.style.display = "none", document.body.appendChild(f), f.click(), setTimeout(() => {
    f.parentNode && document.body.removeChild(f), URL.revokeObjectURL(r);
  }, 1e3);
}
function _t() {
  const e = /* @__PURE__ */ new Date();
  return `${e.getFullYear()}${ft(e.getMonth() + 1)}${ft(e.getDate())}-${ft(e.getHours())}${ft(e.getMinutes())}`;
}
function ft(e) {
  return String(e).padStart(2, "0");
}
function Tr(e) {
  return { low: "低", medium: "中", high: "高", critical: "严重" }[e] || e;
}
function Ar(e, l) {
  return e.reduce((r, f) => {
    const c = f[l] || "unknown";
    return r[c] || (r[c] = []), r[c].push(f), r;
  }, {});
}
function Or({ active: e, mode: l, onIgnoreTarget: r }) {
  const [f, c] = Re(null), [n, s] = Re(""), [i, o] = Re([]), [b, x] = Re({ x: 0, y: 0 }), _ = Ue(b);
  $e(() => {
    _.current = b;
  }, [b]);
  const w = e && l === "element", d = le((R) => {
    const P = R.target;
    return !P || !(P instanceof Element) || r && r(P) ? null : P;
  }, [r]), y = le((R) => {
    if (!w || R.buttons !== 0) return;
    const P = d(R);
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
    }), s(P.tagName.toLowerCase());
  }, [w, d]), u = le(() => {
    c(null);
  }, []), m = le((R) => {
    var $;
    if (!w) return;
    const P = d(R);
    if (!P) return;
    R.preventDefault(), R.stopPropagation();
    const O = P.getBoundingClientRect(), U = _.current, j = {
      el: P,
      selector: Ut(P),
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
    Pr(R) ? o((re) => {
      const S = re.findIndex((T) => T.el === P);
      return S > -1 ? re.filter((T, a) => a !== S) : [...re, j];
    }) : o([j]);
  }, [w, d]), h = le(() => {
    const R = { x: window.scrollX, y: window.scrollY };
    x(R), _.current = R, o((P) => P.map((O) => {
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
  $e(() => {
    if (w)
      return x({ x: window.scrollX, y: window.scrollY }), document.addEventListener("mousemove", y), document.addEventListener("mouseout", u), document.addEventListener("click", m, !0), window.addEventListener("scroll", h, !0), () => {
        document.removeEventListener("mousemove", y), document.removeEventListener("mouseout", u), document.removeEventListener("click", m, !0), window.removeEventListener("scroll", h, !0);
      };
  }, [w, y, u, m, h]);
  const g = le(() => {
    o([]);
  }, []), k = le((R) => {
    o((P) => P.filter((O) => O.el !== R.el));
  }, []), C = le((R) => {
    var U;
    if (!R || !(R instanceof Element)) return;
    const P = R.getBoundingClientRect(), O = _.current;
    o([{
      el: R,
      selector: Ut(R),
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
function Pr(e) {
  return e.ctrlKey || e.metaKey;
}
function Ut(e) {
  var f;
  if (!e || !(e instanceof Element)) return "";
  if (e.id) return "#" + e.id;
  if (e.className) {
    const c = String(e.className).split(/\s+/).filter((n) => n && !n.startsWith("el-")).slice(0, 2);
    if (c.length) return e.tagName.toLowerCase() + "." + c.join(".");
  }
  let l = [], r = e;
  for (; r && r !== document.body; ) {
    let c = r.tagName.toLowerCase();
    if (r.id) {
      c += "#" + r.id, l.unshift(c);
      break;
    }
    const s = Array.from(((f = r.parentNode) == null ? void 0 : f.children) || []).filter((i) => i.tagName === r.tagName);
    if (s.length > 1) {
      const i = s.indexOf(r) + 1;
      c += `:nth-of-type(${i})`;
    }
    l.unshift(c), r = r.parentNode;
  }
  return l.join(" > ");
}
function Ir({ active: e, mode: l, onIgnoreTarget: r, onBoxCreate: f }) {
  const [c, n] = Re([]), [s, i] = Re(null), [o, b] = Re(null), [x, _] = Re({ x: 0, y: 0 }), w = Ue(x);
  $e(() => {
    w.current = x;
  }, [x]);
  const d = e && l === "viewport", y = Ue(0), u = Ue(c);
  $e(() => {
    u.current = c;
  }, [c]);
  const m = Ue(!1), h = Ue({ x: 0, y: 0 }), g = Ue(""), k = Ue({ x: 0, y: 0, rect: null }), C = le((T) => {
    const a = T.target;
    return !a || !(a instanceof Element) || r && r(a) ? null : a;
  }, [r]), R = le((T) => {
    if (!T) return null;
    const a = w.current;
    return {
      x: T.x - a.x,
      y: T.y - a.y,
      width: T.width,
      height: T.height
    };
  }, []), P = le((T) => {
    n((a) => {
      const F = a.filter((ie) => ie.id !== T.id);
      return F.forEach((ie, Z) => {
        ie.index = Z;
      }), F;
    });
  }, []), O = le(() => {
    n([]), i(null);
  }, []), U = le((T, a, F) => {
    F.stopPropagation(), b(T.id), g.current = a, k.current = {
      x: F.clientX + window.scrollX,
      y: F.clientY + window.scrollY,
      rect: { ...T.rect }
    };
  }, []), j = le((T) => {
    !d || o || !C(T) || (T.preventDefault(), m.current = !0, h.current = { x: T.clientX, y: T.clientY }, i({ x: T.clientX, y: T.clientY, width: 0, height: 0 }));
  }, [d, o, C]), $ = le((T) => {
    if (!d && !o) return;
    if (o && k.current.rect) {
      const ie = T.clientX + window.scrollX - k.current.x, Z = T.clientY + window.scrollY - k.current.y, ae = k.current.rect;
      n((V) => V.map((se) => {
        if (se.id !== o) return se;
        let { x: D, y: A, width: ee, height: H } = ae;
        return g.current.includes("e") && (ee = Math.max(10, ae.width + ie)), g.current.includes("s") && (H = Math.max(10, ae.height + Z)), g.current.includes("w") && (ee = Math.max(10, ae.width - ie), D = ae.x + (ae.width - ee)), g.current.includes("n") && (H = Math.max(10, ae.height - Z), A = ae.y + (ae.height - H)), { ...se, rect: { x: D, y: A, width: ee, height: H } };
      }));
      return;
    }
    if (!m.current) return;
    const a = T.clientX, F = T.clientY;
    i({
      x: Math.min(h.current.x, a),
      y: Math.min(h.current.y, F),
      width: Math.abs(a - h.current.x),
      height: Math.abs(F - h.current.y)
    });
  }, [d, o]), re = le((T) => {
    if (!(!d && !o)) {
      if (o) {
        b(null), g.current = "", k.current = { x: 0, y: 0, rect: null };
        return;
      }
      m.current && (m.current = !1, i((a) => {
        if (a && a.width > 10 && a.height > 10) {
          const F = {
            id: "box-" + Date.now() + "-" + y.current++,
            index: u.current.length,
            rect: {
              x: a.x + window.scrollX,
              y: a.y + window.scrollY,
              width: a.width,
              height: a.height
            }
          };
          n((ie) => [...ie, F]), f == null || f(F, T);
        }
        return null;
      }));
    }
  }, [d, o, f]), S = le(() => {
    const T = { x: window.scrollX, y: window.scrollY };
    _(T), w.current = T;
  }, []);
  return $e(() => {
    if (!(!d && !o))
      return document.addEventListener("mousedown", j), document.addEventListener("mousemove", $), document.addEventListener("mouseup", re), window.addEventListener("scroll", S, !0), () => {
        document.removeEventListener("mousedown", j), document.removeEventListener("mousemove", $), document.removeEventListener("mouseup", re), window.removeEventListener("scroll", S, !0);
      };
  }, [d, o, j, $, re, S]), {
    selectedBoxes: c,
    setSelectedBoxes: n,
    dragRect: s,
    resizingBoxId: o,
    isResizing: o !== null,
    removeBox: P,
    clearBoxes: O,
    startResize: U,
    toViewportRect: R
  };
}
function Mt({
  initialPosition: e = { x: 0, y: 0 },
  initialSize: l = { width: null, height: null },
  minWidth: r = 200,
  minHeight: f = 40,
  isDragHandle: c,
  measureRef: n = null
}) {
  const [s, i] = Re(e), [o, b] = Re(l), [x, _] = Re(!1), [w, d] = Re(!1), y = Ue({ x: 0, y: 0 }), u = Ue({ x: 0, y: 0, width: 0, height: 0 }), m = le((g) => {
    c(g.target) && (_(!0), y.current = {
      x: g.clientX - s.x,
      y: g.clientY - s.y
    }, g.stopPropagation());
  }, [c, s]), h = le((g) => {
    let k = o.width ?? 0, C = o.height ?? 0;
    if ((k === 0 || C === 0) && (n != null && n.current)) {
      const R = n.current.getBoundingClientRect();
      k = R.width, C = R.height;
    }
    b({ width: k, height: C }), d(!0), u.current = {
      x: g.clientX,
      y: g.clientY,
      width: k,
      height: C
    }, g.stopPropagation();
  }, [o, n]);
  return $e(() => {
    if (!x && !w) return;
    const g = (C) => {
      if (x)
        i({
          x: C.clientX - y.current.x,
          y: C.clientY - y.current.y
        });
      else if (w) {
        const R = C.clientX - u.current.x, P = C.clientY - u.current.y;
        b({
          width: Math.max(r, u.current.width + R),
          height: Math.max(f, u.current.height + P)
        });
      }
    }, k = () => {
      _(!1), d(!1);
    };
    return document.addEventListener("mousemove", g), document.addEventListener("mouseup", k), () => {
      document.removeEventListener("mousemove", g), document.removeEventListener("mouseup", k);
    };
  }, [x, w, r, f]), {
    position: s,
    size: o,
    isDragging: x,
    isResizing: w,
    onDragStart: m,
    onResizeStart: h
  };
}
function jr(e, l) {
  if (e.match(/^[a-z]+:\/\//i))
    return e;
  if (e.match(/^\/\//))
    return window.location.protocol + e;
  if (e.match(/^[a-z]+:/i))
    return e;
  const r = document.implementation.createHTMLDocument(), f = r.createElement("base"), c = r.createElement("a");
  return r.head.appendChild(f), r.body.appendChild(c), l && (f.href = l), c.href = e, c.href;
}
const Dr = /* @__PURE__ */ (() => {
  let e = 0;
  const l = () => (
    // eslint-disable-next-line no-bitwise
    `0000${(Math.random() * 36 ** 4 << 0).toString(36)}`.slice(-4)
  );
  return () => (e += 1, `u${l()}${e}`);
})();
function qe(e) {
  const l = [];
  for (let r = 0, f = e.length; r < f; r++)
    l.push(e[r]);
  return l;
}
let nt = null;
function Qt(e = {}) {
  return nt || (e.includeStyleProperties ? (nt = e.includeStyleProperties, nt) : (nt = qe(window.getComputedStyle(document.documentElement)), nt));
}
function ht(e, l) {
  const f = (e.ownerDocument.defaultView || window).getComputedStyle(e).getPropertyValue(l);
  return f ? parseFloat(f.replace("px", "")) : 0;
}
function Nr(e) {
  const l = ht(e, "border-left-width"), r = ht(e, "border-right-width");
  return e.clientWidth + l + r;
}
function Br(e) {
  const l = ht(e, "border-top-width"), r = ht(e, "border-bottom-width");
  return e.clientHeight + l + r;
}
function er(e, l = {}) {
  const r = l.width || Nr(e), f = l.height || Br(e);
  return { width: r, height: f };
}
function Fr() {
  let e, l;
  try {
    l = process;
  } catch {
  }
  const r = l && l.env ? l.env.devicePixelRatio : null;
  return r && (e = parseInt(r, 10), Number.isNaN(e) && (e = 1)), e || window.devicePixelRatio || 1;
}
const Ne = 16384;
function Lr(e) {
  (e.width > Ne || e.height > Ne) && (e.width > Ne && e.height > Ne ? e.width > e.height ? (e.height *= Ne / e.width, e.width = Ne) : (e.width *= Ne / e.height, e.height = Ne) : e.width > Ne ? (e.height *= Ne / e.width, e.width = Ne) : (e.width *= Ne / e.height, e.height = Ne));
}
function pt(e) {
  return new Promise((l, r) => {
    const f = new Image();
    f.onload = () => {
      f.decode().then(() => {
        requestAnimationFrame(() => l(f));
      });
    }, f.onerror = r, f.crossOrigin = "anonymous", f.decoding = "async", f.src = e;
  });
}
async function Ur(e) {
  return Promise.resolve().then(() => new XMLSerializer().serializeToString(e)).then(encodeURIComponent).then((l) => `data:image/svg+xml;charset=utf-8,${l}`);
}
async function Mr(e, l, r) {
  const f = "http://www.w3.org/2000/svg", c = document.createElementNS(f, "svg"), n = document.createElementNS(f, "foreignObject");
  return c.setAttribute("width", `${l}`), c.setAttribute("height", `${r}`), c.setAttribute("viewBox", `0 0 ${l} ${r}`), n.setAttribute("width", "100%"), n.setAttribute("height", "100%"), n.setAttribute("x", "0"), n.setAttribute("y", "0"), n.setAttribute("externalResourcesRequired", "true"), c.appendChild(n), n.appendChild(e), Ur(c);
}
const De = (e, l) => {
  if (e instanceof l)
    return !0;
  const r = Object.getPrototypeOf(e);
  return r === null ? !1 : r.constructor.name === l.name || De(r, l);
};
function $r(e) {
  const l = e.getPropertyValue("content");
  return `${e.cssText} content: '${l.replace(/'|"/g, "")}';`;
}
function Wr(e, l) {
  return Qt(l).map((r) => {
    const f = e.getPropertyValue(r), c = e.getPropertyPriority(r);
    return `${r}: ${f}${c ? " !important" : ""};`;
  }).join(" ");
}
function Zr(e, l, r, f) {
  const c = `.${e}:${l}`, n = r.cssText ? $r(r) : Wr(r, f);
  return document.createTextNode(`${c}{${n}}`);
}
function $t(e, l, r, f) {
  const c = window.getComputedStyle(e, r), n = c.getPropertyValue("content");
  if (n === "" || n === "none")
    return;
  const s = Dr();
  try {
    l.className = `${l.className} ${s}`;
  } catch {
    return;
  }
  const i = document.createElement("style");
  i.appendChild(Zr(s, r, c, f)), l.appendChild(i);
}
function Hr(e, l, r) {
  $t(e, l, ":before", r), $t(e, l, ":after", r);
}
const Wt = "application/font-woff", Zt = "image/jpeg", Vr = {
  woff: Wt,
  woff2: Wt,
  ttf: "application/font-truetype",
  eot: "application/vnd.ms-fontobject",
  png: "image/png",
  jpg: Zt,
  jpeg: Zt,
  gif: "image/gif",
  tiff: "image/tiff",
  svg: "image/svg+xml",
  webp: "image/webp"
};
function Yr(e) {
  const l = /\.([^./]*?)$/g.exec(e);
  return l ? l[1] : "";
}
function Tt(e) {
  const l = Yr(e).toLowerCase();
  return Vr[l] || "";
}
function Gr(e) {
  return e.split(/,/)[1];
}
function zt(e) {
  return e.search(/^(data:)/) !== -1;
}
function Xr(e, l) {
  return `data:${l};base64,${e}`;
}
async function tr(e, l, r) {
  const f = await fetch(e, l);
  if (f.status === 404)
    throw new Error(`Resource "${f.url}" not found`);
  const c = await f.blob();
  return new Promise((n, s) => {
    const i = new FileReader();
    i.onerror = s, i.onloadend = () => {
      try {
        n(r({ res: f, result: i.result }));
      } catch (o) {
        s(o);
      }
    }, i.readAsDataURL(c);
  });
}
const xt = {};
function Kr(e, l, r) {
  let f = e.replace(/\?.*/, "");
  return r && (f = e), /ttf|otf|eot|woff2?/i.test(f) && (f = f.replace(/.*\//, "")), l ? `[${l}]${f}` : f;
}
async function At(e, l, r) {
  const f = Kr(e, l, r.includeQueryParams);
  if (xt[f] != null)
    return xt[f];
  r.cacheBust && (e += (/\?/.test(e) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime());
  let c;
  try {
    const n = await tr(e, r.fetchRequestInit, ({ res: s, result: i }) => (l || (l = s.headers.get("Content-Type") || ""), Gr(i)));
    c = Xr(n, l);
  } catch (n) {
    c = r.imagePlaceholder || "";
    let s = `Failed to fetch resource: ${e}`;
    n && (s = typeof n == "string" ? n : n.message), s && console.warn(s);
  }
  return xt[f] = c, c;
}
async function qr(e) {
  const l = e.toDataURL();
  return l === "data:," ? e.cloneNode(!1) : pt(l);
}
async function Jr(e, l) {
  if (e.currentSrc) {
    const n = document.createElement("canvas"), s = n.getContext("2d");
    n.width = e.clientWidth, n.height = e.clientHeight, s == null || s.drawImage(e, 0, 0, n.width, n.height);
    const i = n.toDataURL();
    return pt(i);
  }
  const r = e.poster, f = Tt(r), c = await At(r, f, l);
  return pt(c);
}
async function Qr(e, l) {
  var r;
  try {
    if (!((r = e == null ? void 0 : e.contentDocument) === null || r === void 0) && r.body)
      return await gt(e.contentDocument.body, l, !0);
  } catch {
  }
  return e.cloneNode(!1);
}
async function en(e, l) {
  return De(e, HTMLCanvasElement) ? qr(e) : De(e, HTMLVideoElement) ? Jr(e, l) : De(e, HTMLIFrameElement) ? Qr(e, l) : e.cloneNode(rr(e));
}
const tn = (e) => e.tagName != null && e.tagName.toUpperCase() === "SLOT", rr = (e) => e.tagName != null && e.tagName.toUpperCase() === "SVG";
async function rn(e, l, r) {
  var f, c;
  if (rr(l))
    return l;
  let n = [];
  return tn(e) && e.assignedNodes ? n = qe(e.assignedNodes()) : De(e, HTMLIFrameElement) && (!((f = e.contentDocument) === null || f === void 0) && f.body) ? n = qe(e.contentDocument.body.childNodes) : n = qe(((c = e.shadowRoot) !== null && c !== void 0 ? c : e).childNodes), n.length === 0 || De(e, HTMLVideoElement) || await n.reduce((s, i) => s.then(() => gt(i, r)).then((o) => {
    o && l.appendChild(o);
  }), Promise.resolve()), l;
}
function nn(e, l, r) {
  const f = l.style;
  if (!f)
    return;
  const c = window.getComputedStyle(e);
  c.cssText ? (f.cssText = c.cssText, f.transformOrigin = c.transformOrigin) : Qt(r).forEach((n) => {
    let s = c.getPropertyValue(n);
    n === "font-size" && s.endsWith("px") && (s = `${Math.floor(parseFloat(s.substring(0, s.length - 2))) - 0.1}px`), De(e, HTMLIFrameElement) && n === "display" && s === "inline" && (s = "block"), n === "d" && l.getAttribute("d") && (s = `path(${l.getAttribute("d")})`), f.setProperty(n, s, c.getPropertyPriority(n));
  });
}
function an(e, l) {
  De(e, HTMLTextAreaElement) && (l.innerHTML = e.value), De(e, HTMLInputElement) && l.setAttribute("value", e.value);
}
function sn(e, l) {
  if (De(e, HTMLSelectElement)) {
    const r = l, f = Array.from(r.children).find((c) => e.value === c.getAttribute("value"));
    f && f.setAttribute("selected", "");
  }
}
function on(e, l, r) {
  return De(l, Element) && (nn(e, l, r), Hr(e, l, r), an(e, l), sn(e, l)), l;
}
async function ln(e, l) {
  const r = e.querySelectorAll ? e.querySelectorAll("use") : [];
  if (r.length === 0)
    return e;
  const f = {};
  for (let n = 0; n < r.length; n++) {
    const i = r[n].getAttribute("xlink:href");
    if (i) {
      const o = e.querySelector(i), b = document.querySelector(i);
      !o && b && !f[i] && (f[i] = await gt(b, l, !0));
    }
  }
  const c = Object.values(f);
  if (c.length) {
    const n = "http://www.w3.org/1999/xhtml", s = document.createElementNS(n, "svg");
    s.setAttribute("xmlns", n), s.style.position = "absolute", s.style.width = "0", s.style.height = "0", s.style.overflow = "hidden", s.style.display = "none";
    const i = document.createElementNS(n, "defs");
    s.appendChild(i);
    for (let o = 0; o < c.length; o++)
      i.appendChild(c[o]);
    e.appendChild(s);
  }
  return e;
}
async function gt(e, l, r) {
  return !r && l.filter && !l.filter(e) ? null : Promise.resolve(e).then((f) => en(f, l)).then((f) => rn(e, f, l)).then((f) => on(e, f, l)).then((f) => ln(f, l));
}
const nr = /url\((['"]?)([^'"]+?)\1\)/g, cn = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g, un = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function dn(e) {
  const l = e.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
  return new RegExp(`(url\\(['"]?)(${l})(['"]?\\))`, "g");
}
function fn(e) {
  const l = [];
  return e.replace(nr, (r, f, c) => (l.push(c), r)), l.filter((r) => !zt(r));
}
async function hn(e, l, r, f, c) {
  try {
    const n = r ? jr(l, r) : l, s = Tt(l);
    let i;
    return c || (i = await At(n, s, f)), e.replace(dn(l), `$1${i}$3`);
  } catch {
  }
  return e;
}
function pn(e, { preferredFontFormat: l }) {
  return l ? e.replace(un, (r) => {
    for (; ; ) {
      const [f, , c] = cn.exec(r) || [];
      if (!c)
        return "";
      if (c === l)
        return `src: ${f};`;
    }
  }) : e;
}
function ir(e) {
  return e.search(nr) !== -1;
}
async function ar(e, l, r) {
  if (!ir(e))
    return e;
  const f = pn(e, r);
  return fn(f).reduce((n, s) => n.then((i) => hn(i, s, l, r)), Promise.resolve(f));
}
async function it(e, l, r) {
  var f;
  const c = (f = l.style) === null || f === void 0 ? void 0 : f.getPropertyValue(e);
  if (c) {
    const n = await ar(c, null, r);
    return l.style.setProperty(e, n, l.style.getPropertyPriority(e)), !0;
  }
  return !1;
}
async function mn(e, l) {
  await it("background", e, l) || await it("background-image", e, l), await it("mask", e, l) || await it("-webkit-mask", e, l) || await it("mask-image", e, l) || await it("-webkit-mask-image", e, l);
}
async function gn(e, l) {
  const r = De(e, HTMLImageElement);
  if (!(r && !zt(e.src)) && !(De(e, SVGImageElement) && !zt(e.href.baseVal)))
    return;
  const f = r ? e.src : e.href.baseVal, c = await At(f, Tt(f), l);
  await new Promise((n, s) => {
    e.onload = n, e.onerror = l.onImageErrorHandler ? (...o) => {
      try {
        n(l.onImageErrorHandler(...o));
      } catch (b) {
        s(b);
      }
    } : s;
    const i = e;
    i.decode && (i.decode = n), i.loading === "lazy" && (i.loading = "eager"), r ? (e.srcset = "", e.src = c) : e.href.baseVal = c;
  });
}
async function wn(e, l) {
  const f = qe(e.childNodes).map((c) => sr(c, l));
  await Promise.all(f).then(() => e);
}
async function sr(e, l) {
  De(e, Element) && (await mn(e, l), await gn(e, l), await wn(e, l));
}
function vn(e, l) {
  const { style: r } = e;
  l.backgroundColor && (r.backgroundColor = l.backgroundColor), l.width && (r.width = `${l.width}px`), l.height && (r.height = `${l.height}px`);
  const f = l.style;
  return f != null && Object.keys(f).forEach((c) => {
    r[c] = f[c];
  }), e;
}
const Ht = {};
async function Vt(e) {
  let l = Ht[e];
  if (l != null)
    return l;
  const f = await (await fetch(e)).text();
  return l = { url: e, cssText: f }, Ht[e] = l, l;
}
async function Yt(e, l) {
  let r = e.cssText;
  const f = /url\(["']?([^"')]+)["']?\)/g, n = (r.match(/url\([^)]+\)/g) || []).map(async (s) => {
    let i = s.replace(f, "$1");
    return i.startsWith("https://") || (i = new URL(i, e.url).href), tr(i, l.fetchRequestInit, ({ result: o }) => (r = r.replace(s, `url(${o})`), [s, o]));
  });
  return Promise.all(n).then(() => r);
}
function Gt(e) {
  if (e == null)
    return [];
  const l = [], r = /(\/\*[\s\S]*?\*\/)/gi;
  let f = e.replace(r, "");
  const c = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
  for (; ; ) {
    const o = c.exec(f);
    if (o === null)
      break;
    l.push(o[0]);
  }
  f = f.replace(c, "");
  const n = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi, s = "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", i = new RegExp(s, "gi");
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
async function yn(e, l) {
  const r = [], f = [];
  return e.forEach((c) => {
    if ("cssRules" in c)
      try {
        qe(c.cssRules || []).forEach((n, s) => {
          if (n.type === CSSRule.IMPORT_RULE) {
            let i = s + 1;
            const o = n.href, b = Vt(o).then((x) => Yt(x, l)).then((x) => Gt(x).forEach((_) => {
              try {
                c.insertRule(_, _.startsWith("@import") ? i += 1 : c.cssRules.length);
              } catch (w) {
                console.error("Error inserting rule from remote css", {
                  rule: _,
                  error: w
                });
              }
            })).catch((x) => {
              console.error("Error loading remote css", x.toString());
            });
            f.push(b);
          }
        });
      } catch (n) {
        const s = e.find((i) => i.href == null) || document.styleSheets[0];
        c.href != null && f.push(Vt(c.href).then((i) => Yt(i, l)).then((i) => Gt(i).forEach((o) => {
          s.insertRule(o, s.cssRules.length);
        })).catch((i) => {
          console.error("Error loading remote stylesheet", i);
        })), console.error("Error inlining remote css file", n);
      }
  }), Promise.all(f).then(() => (e.forEach((c) => {
    if ("cssRules" in c)
      try {
        qe(c.cssRules || []).forEach((n) => {
          r.push(n);
        });
      } catch (n) {
        console.error(`Error while reading CSS rules from ${c.href}`, n);
      }
  }), r));
}
function bn(e) {
  return e.filter((l) => l.type === CSSRule.FONT_FACE_RULE).filter((l) => ir(l.style.getPropertyValue("src")));
}
async function _n(e, l) {
  if (e.ownerDocument == null)
    throw new Error("Provided element is not within a Document");
  const r = qe(e.ownerDocument.styleSheets), f = await yn(r, l);
  return bn(f);
}
function or(e) {
  return e.trim().replace(/["']/g, "");
}
function xn(e) {
  const l = /* @__PURE__ */ new Set();
  function r(f) {
    (f.style.fontFamily || getComputedStyle(f).fontFamily).split(",").forEach((n) => {
      l.add(or(n));
    }), Array.from(f.children).forEach((n) => {
      n instanceof HTMLElement && r(n);
    });
  }
  return r(e), l;
}
async function kn(e, l) {
  const r = await _n(e, l), f = xn(e);
  return (await Promise.all(r.filter((n) => f.has(or(n.style.fontFamily))).map((n) => {
    const s = n.parentStyleSheet ? n.parentStyleSheet.href : null;
    return ar(n.cssText, s, l);
  }))).join(`
`);
}
async function En(e, l) {
  const r = l.fontEmbedCSS != null ? l.fontEmbedCSS : l.skipFonts ? null : await kn(e, l);
  if (r) {
    const f = document.createElement("style"), c = document.createTextNode(r);
    f.appendChild(c), e.firstChild ? e.insertBefore(f, e.firstChild) : e.appendChild(f);
  }
}
async function Sn(e, l = {}) {
  const { width: r, height: f } = er(e, l), c = await gt(e, l, !0);
  return await En(c, l), await sr(c, l), vn(c, l), await Mr(c, r, f);
}
async function Rn(e, l = {}) {
  const { width: r, height: f } = er(e, l), c = await Sn(e, l), n = await pt(c), s = document.createElement("canvas"), i = s.getContext("2d"), o = l.pixelRatio || Fr(), b = l.canvasWidth || r, x = l.canvasHeight || f;
  return s.width = b * o, s.height = x * o, l.skipAutoScale || Lr(s), s.style.width = `${b}`, s.style.height = `${x}`, l.backgroundColor && (i.fillStyle = l.backgroundColor, i.fillRect(0, 0, s.width, s.height)), i.drawImage(n, 0, 0, s.width, s.height), s;
}
async function Ot(e, l = {}) {
  return (await Rn(e, l)).toDataURL();
}
const Ve = {
  ELEMENT: "element",
  VIEWPORT: "viewport",
  FULL_PAGE: "fullpage",
  BOX: "box",
  TARGETS: "targets"
};
function kt(e) {
  const l = Date.now(), r = Math.random().toString(36).slice(2, 6);
  return `screenshot-${e}-${l}-${r}.png`;
}
async function lr(e, l = {}) {
  if (!e) return null;
  try {
    return await Ot(e, {
      pixelRatio: l.pixelRatio || window.devicePixelRatio || 1,
      cacheBust: !0,
      ...l
    });
  } catch (r) {
    return console.error("captureElement failed:", r), null;
  }
}
async function Cn(e = {}) {
  const l = document.documentElement;
  return lr(l, {
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
async function zn(e = {}) {
  const l = document.documentElement, r = l.style.overflow, f = l.style.width, c = l.style.height;
  try {
    return l.style.overflow = "visible", l.style.width = "auto", l.style.height = "auto", await Ot(l, {
      pixelRatio: e.pixelRatio || window.devicePixelRatio || 1,
      cacheBust: !0,
      ...e
    });
  } catch (n) {
    return console.error("captureFullPage failed:", n), null;
  } finally {
    l.style.overflow = r, l.style.width = f, l.style.height = c;
  }
}
async function Tn(e, l = {}) {
  if (!e || e.width < 1 || e.height < 1) return null;
  const r = document.documentElement, f = r.style.overflow, c = r.style.width, n = r.style.height;
  try {
    r.style.overflow = "visible", r.style.width = "auto", r.style.height = "auto";
    const s = await Ot(r, {
      pixelRatio: l.pixelRatio || window.devicePixelRatio || 1,
      cacheBust: !0,
      ...l
    });
    return An(s, e);
  } catch (s) {
    return console.error("captureBox failed:", s), null;
  } finally {
    r.style.overflow = f, r.style.width = c, r.style.height = n;
  }
}
function An(e, l) {
  return new Promise((r, f) => {
    const c = new Image();
    c.onload = () => {
      const n = document.createElement("canvas"), s = window.devicePixelRatio || 1;
      n.width = Math.round(l.width * s), n.height = Math.round(l.height * s), n.getContext("2d").drawImage(
        c,
        l.x * s,
        l.y * s,
        l.width * s,
        l.height * s,
        0,
        0,
        n.width,
        n.height
      ), r(n.toDataURL("image/png"));
    }, c.onerror = f, c.src = e;
  });
}
async function On(e) {
  return (await fetch(e)).blob();
}
async function Et(e, l, r) {
  if (!r) return null;
  try {
    const f = await On(e);
    return await r(f, l);
  } catch (f) {
    return console.error("uploadScreenshot failed:", f), null;
  }
}
function cr(e) {
  var c;
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return "";
  if (e.id) return "#" + e.id;
  const l = e.tagName.toLowerCase();
  if (e.className) {
    const n = String(e.className).split(/\s+/).filter((s) => s && !s.startsWith("el-") && !/^__/.test(s)).slice(0, 2);
    if (n.length) return l + "." + n.join(".");
  }
  let r = [], f = e;
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
function Pn(e) {
  var f;
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return "";
  if (e.id) return `//*[@id="${e.id}"]`;
  const l = [];
  let r = e;
  for (; r && r !== document.body; ) {
    const s = Array.from(((f = r.parentNode) == null ? void 0 : f.children) || []).filter((i) => i.tagName === r.tagName).indexOf(r) + 1;
    l.unshift(`${r.tagName.toLowerCase()}[${s}]`), r = r.parentNode;
  }
  return l.unshift(""), "/html/body/" + l.slice(1).join("/");
}
function In(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return {};
  const l = {}, r = e.getAttribute("role") || jn(e);
  r && (l.role = r);
  const f = Dn(e);
  f && (l.accessibleName = f);
  const c = e.getAttribute("aria-labelledby");
  return c && (l.labeledBy = c), Object.keys(l).length ? l : void 0;
}
function jn(e) {
  const l = e.tagName.toLowerCase(), r = e.getAttribute("type");
  return {
    button: "button",
    a: e.hasAttribute("href") ? "link" : void 0,
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
function Dn(e) {
  var n, s;
  if (e.getAttribute("aria-label")) return e.getAttribute("aria-label").trim();
  const l = e.getAttribute("aria-labelledby");
  if (l) {
    const i = l.split(/\s+/).map((o) => {
      var b, x;
      return (x = (b = document.getElementById(o)) == null ? void 0 : b.textContent) == null ? void 0 : x.trim();
    }).filter(Boolean);
    if (i.length) return i.join(" ");
  }
  const r = (n = e.labels) == null ? void 0 : n[0];
  if (r) return r.textContent.trim();
  if (e.tagName.toLowerCase() === "input" && e.placeholder) return e.placeholder.trim();
  const f = e.getAttribute("alt");
  if (f) return f.trim();
  const c = e.getAttribute("title");
  if (c) return c.trim();
  if (["button", "a"].includes(e.tagName.toLowerCase())) {
    const i = (s = e.textContent) == null ? void 0 : s.trim();
    if (i) return i;
  }
  return "";
}
function Nn(e) {
  return !e || e.nodeType !== Node.ELEMENT_NODE ? void 0 : e.getAttribute("data-testid") || void 0;
}
function mt(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return null;
  const l = e.getBoundingClientRect();
  return {
    tag: e.tagName.toLowerCase(),
    id: e.id || void 0,
    classes: e.className ? String(e.className).split(/\s+/).filter(Boolean) : void 0,
    selector: cr(e),
    xpath: Pn(e),
    rect: {
      x: l.left + window.scrollX,
      y: l.top + window.scrollY,
      width: l.width,
      height: l.height
    },
    aria: In(e),
    testId: Nn(e)
  };
}
function Bn(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return [];
  const l = [];
  let r = e;
  for (; r && r !== document.body; )
    l.unshift(r), r = r.parentElement;
  return r === document.body && l.unshift(document.body), l.map(mt).filter(Boolean);
}
function Fn(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return [];
  const l = Ln(e);
  if (l.length) return l;
  const r = Mn(e);
  return r.length ? r : [];
}
function Ln(e) {
  const l = [];
  let r = e;
  for (; r; ) {
    const f = Un(r);
    f && !l.find((c) => c.componentName === f.componentName && c.selector === f.selector) && l.unshift(f), r = r.parentElement;
  }
  return l;
}
function Un(e) {
  var n, s, i, o, b;
  const r = Object.keys(e || {}).find((x) => x.startsWith("__vue"));
  if (!r) return null;
  const f = e[r], c = ((n = f == null ? void 0 : f.type) == null ? void 0 : n.name) || ((s = f == null ? void 0 : f.type) == null ? void 0 : s.__name) || ((o = (i = f == null ? void 0 : f.parent) == null ? void 0 : i.type) == null ? void 0 : o.name);
  return c ? {
    componentName: c,
    selector: cr(e),
    rect: (b = mt(e)) == null ? void 0 : b.rect
  } : null;
}
function Mn(e) {
  const l = [], r = Object.keys(e || {}).find((c) => c.startsWith("__reactFiber$"));
  if (!r) return l;
  let f = e[r];
  for (; f; ) {
    const c = $n(f);
    c && !l.find((n) => n.componentName === c) && l.unshift({ componentName: c, selector: void 0, rect: void 0 }), f = f.return;
  }
  return l;
}
function $n(e) {
  var l;
  if (!e) return null;
  if (typeof e.type == "function") return e.type.displayName || e.type.name || null;
  if (typeof e.type == "string") return null;
  if (e.elementType) {
    if (typeof e.elementType == "function") return e.elementType.displayName || e.elementType.name || null;
    if (typeof e.elementType == "object" && ((l = e.elementType) != null && l.$$typeof)) return e.elementType.name || null;
  }
  return null;
}
function Xt(e) {
  return {
    dom: Bn(e),
    framework: Fn(e)
  };
}
const Wn = ".rpr-review-overlay,.rpr-review-overlay *{box-sizing:border-box}.rpr-review-overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:9000;pointer-events:none}.rpr-review-toolbar{position:fixed;top:16px;left:50%;transform:translate(-50%);display:flex;align-items:center;justify-content:space-between;gap:16px;padding:10px 16px;background:#fff;border-radius:8px;box-shadow:0 4px 20px #00000026;z-index:10000;-webkit-user-select:none;user-select:none;min-width:auto;min-height:auto;pointer-events:auto}.rpr-toolbar-resize-handle{position:absolute;right:0;bottom:0;width:12px;height:12px;cursor:se-resize;background:linear-gradient(135deg,transparent 50%,#c0c4cc 50%);border-bottom-right-radius:8px}.rpr-review-toolbar.rpr-is-dragging{cursor:grabbing}.rpr-toolbar-left{display:flex;align-items:center;gap:16px}.rpr-review-toolbar-title{font-weight:700;color:#001529;cursor:grab}.rpr-review-toolbar-title:active{cursor:grabbing}.rpr-toolbar-right{display:flex;align-items:center;gap:12px}.rpr-radio-group{display:inline-flex;border:1px solid #dcdfe6;border-radius:4px;overflow:hidden}.rpr-radio-group button,.rpr-radio-group .rpr-radio-label{padding:6px 12px;border:none;background:#fff;cursor:pointer;font-size:13px}.rpr-radio-group button.rpr-active,.rpr-radio-group button:hover{background:#409eff;color:#fff}.rpr-radio-group .rpr-radio-label{display:inline-flex;align-items:center;gap:4px;cursor:pointer}.rpr-checkbox-group{display:flex;flex-wrap:wrap;gap:12px}.rpr-checkbox-label{display:inline-flex;align-items:center;gap:6px;cursor:pointer;font-size:13px;color:#606266}.rpr-badge-btn{position:relative;padding:6px 12px;border:1px solid #dcdfe6;background:#fff;border-radius:4px;cursor:pointer}.rpr-badge{display:inline-block;margin-left:6px;padding:0 6px;background:#f56c6c;color:#fff;border-radius:10px;font-size:12px;line-height:16px}.rpr-toolbar-btn{padding:6px 12px;border:1px solid #dcdfe6;background:#fff;border-radius:4px;cursor:pointer;font-size:13px}.rpr-toolbar-btn:disabled{opacity:.6;cursor:not-allowed}button.rpr-primary{background:#409eff;color:#fff;border:1px solid #409eff}button.rpr-danger{background:#f56c6c;color:#fff;border:1px solid #f56c6c}button.rpr-danger-text{background:transparent;color:#f56c6c;border:none}.rpr-dropdown{position:relative}.rpr-dropdown-menu{display:none;position:absolute;top:100%;left:0;margin-top:4px;background:#fff;border:1px solid #ebeef5;border-radius:4px;box-shadow:0 2px 12px #0000001a;min-width:140px;z-index:10001}.rpr-dropdown:hover .rpr-dropdown-menu{display:block}.rpr-dropdown-menu>div{padding:8px 12px;cursor:pointer;font-size:13px}.rpr-dropdown-menu>div:hover{background:#f5f7fa}.rpr-highlight-box{position:absolute;border:2px solid #409eff;background:#409eff26;z-index:9100;pointer-events:none}.rpr-hover-box{border-color:#409eff;background:#409eff1f}.rpr-selected-box{border-color:#f56c6c;background:#f56c6c1f}.rpr-selected-box .rpr-highlight-label{background:#f56c6c}.rpr-tree-hover-box{border-color:#e6a23c;background:#e6a23c26}.rpr-highlight-label{position:absolute;top:-22px;left:0;padding:2px 8px;background:#409eff;color:#fff;font-size:12px;border-radius:4px;white-space:nowrap;display:flex;align-items:center;gap:6px}.rpr-remove-icon{cursor:pointer;font-style:normal;font-weight:700;line-height:1}.rpr-drag-rect{position:absolute;border:2px dashed #67c23a;background:#67c23a26;z-index:9100;pointer-events:auto}.rpr-drag-rect.rpr-preview-box{border-color:#67c23a;pointer-events:none}.rpr-drag-rect.rpr-selected-box{border-color:#f56c6c;background:#f56c6c1f}.rpr-drag-rect.rpr-is-resizing{pointer-events:none}.rpr-box-label{position:absolute;top:-22px;left:0;padding:2px 8px;background:#f56c6c;color:#fff;font-size:12px;border-radius:4px;white-space:nowrap;display:flex;align-items:center;gap:6px}.rpr-resize-handle{position:absolute;background:#fff;border:1px solid #f56c6c;border-radius:50%;z-index:10001;cursor:pointer}.rpr-resize-handle.rpr-handle-nw{cursor:nw-resize}.rpr-resize-handle.rpr-handle-n{cursor:n-resize}.rpr-resize-handle.rpr-handle-ne{cursor:ne-resize}.rpr-resize-handle.rpr-handle-w{cursor:w-resize}.rpr-resize-handle.rpr-handle-e{cursor:e-resize}.rpr-resize-handle.rpr-handle-sw{cursor:sw-resize}.rpr-resize-handle.rpr-handle-s{cursor:s-resize}.rpr-resize-handle.rpr-handle-se{cursor:se-resize}.rpr-modal-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;background:#00000080;z-index:10001;pointer-events:auto}.rpr-modal{background:#fff;border-radius:8px;width:520px;max-width:90vw;max-height:90vh;overflow:auto}.rpr-review-modal{position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);background:#fff;border-radius:8px;width:560px;max-width:90vw;max-height:90vh;z-index:10002;box-shadow:0 4px 20px #0003;display:flex;flex-direction:column;overflow:hidden}.rpr-review-modal.rpr-is-dragging{-webkit-user-select:none;user-select:none}.rpr-review-modal-header{cursor:grab;-webkit-user-select:none;user-select:none}.rpr-review-modal-header:active{cursor:grabbing}.rpr-review-modal-close{background:none;border:none;font-size:20px;cursor:pointer;color:#909399;line-height:1}.rpr-review-modal .rpr-modal-header{padding:12px 16px;font-weight:700;border-bottom:1px solid #ebeef5;display:flex;justify-content:space-between;align-items:center;cursor:grab}.rpr-review-modal .rpr-modal-header:active{cursor:grabbing}.rpr-review-modal .rpr-modal-header .rpr-close{background:none;border:none;font-size:20px;cursor:pointer;color:#909399}.rpr-review-modal .rpr-modal-body{flex:1;padding:16px;overflow:auto}.rpr-review-modal .rpr-modal-footer{padding:12px 16px;border-top:1px solid #ebeef5;display:flex;justify-content:flex-end;gap:8px}.rpr-modal-resize-handle{position:absolute;right:0;bottom:0;width:16px;height:16px;cursor:se-resize;background:linear-gradient(135deg,transparent 50%,#c0c4cc 50%);border-bottom-right-radius:8px}.rpr-review-targets-summary{display:flex;flex-wrap:wrap;gap:6px}.rpr-target-tag{max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.rpr-review-target-info{display:flex;align-items:center;gap:8px}.rpr-target-desc{color:#606266;font-size:13px;max-width:360px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.rpr-text-muted{color:#909399;font-size:13px}.rpr-tag{display:inline-block;padding:2px 8px;border-radius:4px;font-size:12px;background:#f4f4f5;color:#606266}.rpr-tag.rpr-info{background:#f4f4f5;color:#606266}.rpr-tag.rpr-warning{background:#fdf6ec;color:#e6a23c}.rpr-tag.rpr-danger{background:#fef0f0;color:#f56c6c}.rpr-tag.rpr-success{background:#f0f9eb;color:#67c23a}.rpr-confirm-modal{width:360px;position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);z-index:10002}.rpr-drawer-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;background:#00000080;z-index:10001}.rpr-drawer{position:fixed;top:0;right:0;width:480px;max-width:90vw;height:100%;background:#fff;z-index:10003;box-shadow:-2px 0 12px #0000001a;display:flex;flex-direction:column}.rpr-drawer-header{padding:16px;font-weight:700;border-bottom:1px solid #ebeef5;display:flex;justify-content:space-between;align-items:center}.rpr-drawer-header .rpr-close{background:none;border:none;font-size:20px;cursor:pointer}.rpr-drawer-body{flex:1;padding:16px;overflow:auto}.rpr-form-row{margin-bottom:16px}.rpr-form-row label{display:block;margin-bottom:6px;font-size:14px;color:#606266}.rpr-form-row input,.rpr-form-row textarea{width:100%;padding:8px;border:1px solid #dcdfe6;border-radius:4px;font-size:14px;box-sizing:border-box}.rpr-required{color:#f56c6c}.rpr-tree-panel{display:flex;flex-direction:column;gap:20px}.rpr-tree-section h4{margin:0 0 10px;color:#303133;font-size:14px}.rpr-tree-list{display:flex;flex-direction:column;gap:4px}.rpr-tree-node{padding:6px 8px;border-radius:4px;cursor:pointer;font-size:13px;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;transition:background .15s}.rpr-tree-node:hover{background:#f5f7fa}.rpr-node-tag{color:#409eff;font-weight:700}.rpr-node-id{color:#67c23a;margin-left:6px}.rpr-node-aria{color:#e6a23c;margin-left:6px}.rpr-node-testid{color:#909399;margin-left:6px}.rpr-node-name{color:#606266;font-weight:700}.rpr-review-list-actions{display:flex;gap:8px;margin-bottom:16px}.rpr-empty{text-align:center;color:#909399;padding:40px 0}.rpr-review-list{display:flex;flex-direction:column;gap:12px}.rpr-review-item{border:1px solid #e4e7ed;border-radius:4px;padding:12px}.rpr-review-item-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px}.rpr-review-item-title{font-weight:700;color:#303133}.rpr-review-item-tags{display:flex;gap:6px}.rpr-review-item-target{color:#606266;font-size:12px;margin-bottom:8px;word-break:break-all}.rpr-review-item-suggestion{color:#303133;font-size:13px;line-height:1.6;margin-bottom:12px}.rpr-review-item-meta{display:flex;justify-content:space-between;align-items:center}.rpr-review-item-actions{display:flex;gap:8px}.rpr-link{background:none;border:none;cursor:pointer;font-size:13px}.rpr-link.rpr-primary{color:#409eff}.rpr-link.rpr-danger{color:#f56c6c}";
function Zn() {
  if (typeof document > "u" || document.getElementById("rpr-styles")) return;
  const e = document.createElement("style");
  e.id = "rpr-styles", e.textContent = Wn, document.head.appendChild(e);
}
function Qn({
  active: e = !1,
  pagePath: l = "",
  pageName: r = "",
  storageKey: f = "page-reviews",
  imageUpload: c,
  enableZipExport: n = !0,
  enableComponentTree: s = !0,
  onActiveChange: i,
  onAdd: o,
  onUpdate: b,
  onDelete: x,
  onClear: _,
  onExport: w
}) {
  var Fe, He, lt, at;
  const d = vt(() => l || (typeof window < "u" ? window.location.pathname + window.location.search : "/"), [l]), {
    reviews: y,
    getPageReviews: u,
    addReview: m,
    updateReview: h,
    deleteReview: g,
    clearPageReviews: k,
    exportToJSON: C,
    exportToMarkdown: R,
    exportToZIP: P
  } = Cr({ storageKey: f, defaultPagePath: () => d }), O = vt(() => u(d), [u, d, y]), [U, j] = Re("element"), [$, re] = Re(!1), [S, T] = Re(!1), [a, F] = Re(!1), [ie, Z] = Re(null), [ae, V] = Re(null), [se, D] = Re([]), [A, ee] = Re(null);
  $e(() => {
    Zn();
  }, []);
  const [H, q] = Re({
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
  }), ve = Ue(!1), Ee = Ue(null), fe = le((B) => ve.current ? !0 : !!B.closest(".rpr-review-overlay"), []), ne = Or({
    active: e && !$,
    mode: U,
    onIgnoreTarget: fe
  }), be = le((B, te) => {
    St(te) || ne.clearSelectedElements();
  }, [ne.clearSelectedElements]), de = Ir({
    active: e && !$,
    mode: U,
    onIgnoreTarget: fe,
    onBoxCreate: be
  }), _e = Mt({
    initialPosition: { x: 0, y: 0 },
    initialSize: { width: null, height: null },
    minWidth: 400,
    minHeight: 48,
    isDragHandle: (B) => {
      var te, ce;
      return ((te = B.classList) == null ? void 0 : te.contains("rpr-review-toolbar-title")) || ((ce = B.classList) == null ? void 0 : ce.contains("rpr-review-toolbar"));
    },
    measureRef: Ee
  }), ke = Mt({
    initialPosition: { x: 0, y: 0 },
    initialSize: { width: 560, height: null },
    minWidth: 360,
    minHeight: 300,
    isDragHandle: (B) => {
      const te = B.closest(".ant-modal-header"), ce = B.closest(".ant-modal-close");
      return !!te && !ce;
    }
  });
  $e(() => {
    ve.current = _e.isDragging || _e.isResizing || ke.isDragging || ke.isResizing;
  }, [_e.isDragging, _e.isResizing, ke.isDragging, ke.isResizing]);
  const t = ne.selectedElements.length + de.selectedBoxes.length, L = H.title.trim() && H.suggestion.trim(), N = le(() => {
    i == null || i(!1);
  }, [i]), v = le(() => ({
    viewport: { width: window.innerWidth, height: window.innerHeight },
    scroll: { x: window.scrollX, y: window.scrollY },
    pagePath: d,
    pageUrl: window.location.href,
    pageName: r || d
  }), [d, r]), p = le((B) => {
    const te = {};
    return B.selector && (te.cssSelector = B.selector), B.xpath && (te.xpath = B.xpath), B.aria && Object.keys(B.aria).length && (te.aria = B.aria), B.testId && (te.testId = B.testId), Object.keys(te).length ? te : null;
  }, []), z = le(() => {
    const B = [];
    return ne.selectedElements.forEach((te) => {
      const ce = te.el ? mt(te.el) : null;
      B.push({
        type: "element",
        selector: te.selector,
        elementText: te.text,
        elementRect: te.docRect || te.rect,
        componentTree: ce ? Xt(te.el) : null,
        aria: (ce == null ? void 0 : ce.aria) || null,
        locators: ce ? p(ce) : null
      });
    }), de.selectedBoxes.forEach((te) => {
      B.push({
        type: "viewport",
        viewportRect: te.rect
      });
    }), B;
  }, [ne.selectedElements, de.selectedBoxes, p]), M = le(() => {
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
  }, []), W = le(() => {
    ne.clearSelectedElements(), de.clearBoxes(), V(null);
  }, [ne.clearSelectedElements, de.clearBoxes]), I = le(() => {
    const B = v(), te = z(), ce = ne.selectedElements[0], Se = ce != null && ce.el ? mt(ce.el) : null;
    q({
      type: ne.selectedElements.length > 0 ? "element" : "viewport",
      title: "",
      severity: "medium",
      suggestion: "",
      targets: te,
      viewport: B.viewport,
      scroll: B.scroll,
      pagePath: B.pagePath,
      pageUrl: B.pageUrl,
      pageName: B.pageName,
      aria: (Se == null ? void 0 : Se.aria) || null,
      locators: Se ? p(Se) : null
    }), D([]), re(!0);
  }, [v, z, ne.selectedElements, p]), X = le(async () => {
    const B = [];
    for (const te of se)
      if (te === Ve.TARGETS)
        for (const ce of H.targets) {
          let Se = null;
          if (ce.type === "element" && ce.elementRect) {
            const Ae = document.querySelector(ce.selector);
            Ae && (Se = await lr(Ae));
          } else ce.type === "viewport" && ce.viewportRect && (Se = await Tn(ce.viewportRect));
          if (Se) {
            const Ae = kt(ce.type);
            let Ge = null;
            c && (Ge = await Et(Se, Ae, c)), B.push({ type: ce.type, filename: Ae, data: Ge ? void 0 : Se, url: Ge || void 0 });
          }
        }
      else if (te === Ve.VIEWPORT) {
        const ce = await Cn();
        if (ce) {
          const Se = kt(Ve.VIEWPORT);
          let Ae = null;
          c && (Ae = await Et(ce, Se, c)), B.push({ type: Ve.VIEWPORT, filename: Se, data: Ae ? void 0 : ce, url: Ae || void 0 });
        }
      } else if (te === Ve.FULL_PAGE) {
        const ce = await zn();
        if (ce) {
          const Se = kt(Ve.FULL_PAGE);
          let Ae = null;
          c && (Ae = await Et(ce, Se, c)), B.push({ type: Ve.FULL_PAGE, filename: Se, data: Ae ? void 0 : ce, url: Ae || void 0 });
        }
      }
    return B;
  }, [se, H.targets, c]), J = le(async () => {
    if (!L) return;
    const B = await X(), te = m({
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
    re(!1), W(), o == null || o(te);
  }, [L, X, H, m, W, o]), K = le((B) => {
    h(B, { status: "resolved" }), b == null || b({ id: B, status: "resolved" });
  }, [h, b]), oe = le((B) => {
    ee({
      title: "删除确认",
      message: "确定删除这条评审意见吗？",
      onConfirm: () => {
        g(B), x == null || x({ id: B }), ee(null);
      }
    });
  }, [g, x]), ge = le(() => {
    O.length !== 0 && ee({
      title: "清空确认",
      message: "确定清空当前页面的所有评审意见吗？",
      onConfirm: () => {
        k(d), _ == null || _({ pagePath: d }), ee(null);
      }
    });
  }, [O.length, k, d, _]), he = le(() => {
    C(), w == null || w({ format: "json" });
  }, [C, w]), Te = le(() => {
    R(), w == null || w({ format: "markdown" });
  }, [R, w]), Be = le(async () => {
    await P(), w == null || w({ format: "zip" });
  }, [P, w]), Oe = le((B) => {
    if (!B.rect) {
      Z(null);
      return;
    }
    Z(B.rect);
  }, []), We = le((B) => {
    if (!B.selector) return;
    const te = document.querySelector(B.selector);
    te && (ne.selectElement(te), de.clearBoxes(), F(!1));
  }, [ne.selectElement, de.clearBoxes]), xe = le((B, te) => {
    St(te) && (te.stopPropagation(), ne.removeSelectedElement(B));
  }, [ne.removeSelectedElement]), Xe = le((B, te) => {
    St(te) && (te.stopPropagation(), de.removeBox(B));
  }, [de.removeBox]), Ye = le((B) => {
    B.key === "Escape" && ($ ? re(!1) : N());
  }, [$, N]), Ie = le(() => {
    ne.selectedElements.length === 0 && V(null), F(!0);
  }, [ne.selectedElements.length]);
  $e(() => {
    if (e)
      return document.addEventListener("keydown", Ye), () => document.removeEventListener("keydown", Ye);
  }, [e, Ye]), $e(() => {
    e ? j("element") : (W(), M(), T(!1), F(!1), ee(null));
  }, [e, W, M]), $e(() => {
    ne.selectedElements.length > 0 ? V(Xt(ne.selectedElements[0].el)) : V(null);
  }, [ne.selectedElements]);
  const et = vt(() => {
    const B = [];
    return s && B.push({ key: "tree", label: "组件树" }), B.push({ key: "list", label: "评审列表" }), B.push({ type: "divider" }), B.push({ key: "export-md", label: "导出 Markdown" }), B.push({ key: "export-json", label: "导出 JSON" }), n && B.push({ key: "export-zip", label: "导出 ZIP" }), B.push({ type: "divider" }), B.push({ key: "clear", label: "取消选择", disabled: t === 0 }), B;
  }, [s, n, t]), Je = le(({ key: B }) => {
    switch (B) {
      case "tree":
        Ie();
        break;
      case "list":
        T(!0);
        break;
      case "export-md":
        Te();
        break;
      case "export-json":
        he();
        break;
      case "export-zip":
        Be();
        break;
      case "clear":
        W();
        break;
    }
  }, [Ie, Te, he, Be, W]), tt = {
    transform: `translate(calc(-50% + ${_e.position.x}px), ${_e.position.y}px)`,
    width: _e.size.width ?? void 0,
    height: _e.size.height ?? void 0
  }, Ze = {
    position: "fixed",
    left: `calc(50% + ${ke.position.x}px)`,
    top: `calc(50% + ${ke.position.y}px)`,
    transform: "translate(-50%, -50%)",
    height: ke.size.height ?? void 0
  }, Ke = ["nw", "n", "ne", "w", "e", "sw", "s", "se"];
  return e ? gr(
    /* @__PURE__ */ G.jsxs("div", { className: "rpr-review-overlay", children: [
      /* @__PURE__ */ G.jsxs(
        "div",
        {
          ref: Ee,
          className: `rpr-review-toolbar ${_e.isDragging ? "rpr-is-dragging" : ""}`,
          style: tt,
          onClick: (B) => B.stopPropagation(),
          onMouseDown: _e.onDragStart,
          children: [
            /* @__PURE__ */ G.jsxs("div", { className: "rpr-toolbar-left", children: [
              /* @__PURE__ */ G.jsx("span", { className: "rpr-review-toolbar-title", title: "按住此处可拖动", children: "页面评审模式" }),
              /* @__PURE__ */ G.jsxs(
                yt.Group,
                {
                  size: "small",
                  value: U,
                  onChange: (B) => j(B.target.value),
                  optionType: "button",
                  buttonStyle: "solid",
                  children: [
                    /* @__PURE__ */ G.jsx(yt.Button, { value: "element", children: "选择元素" }),
                    /* @__PURE__ */ G.jsx(yt.Button, { value: "viewport", children: "框定视图" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ G.jsxs("div", { className: "rpr-toolbar-right", children: [
              /* @__PURE__ */ G.jsx(wr, { count: t, size: "small", offset: [10, -2], children: /* @__PURE__ */ G.jsx(
                Me,
                {
                  type: "primary",
                  size: "small",
                  disabled: t === 0,
                  onClick: I,
                  children: "评审"
                }
              ) }),
              /* @__PURE__ */ G.jsx(Me, { type: "primary", danger: !0, size: "small", onClick: N, children: "退出评审" }),
              /* @__PURE__ */ G.jsx(
                vr,
                {
                  menu: { items: et, onClick: Je },
                  trigger: ["click"],
                  placement: "bottomRight",
                  getPopupContainer: (B) => B.parentNode,
                  children: /* @__PURE__ */ G.jsx(Me, { size: "small", children: "更多" })
                }
              )
            ] }),
            /* @__PURE__ */ G.jsx("div", { className: "rpr-toolbar-resize-handle", onMouseDown: _e.onResizeStart })
          ]
        }
      ),
      ne.hoveredRect && U === "element" && !de.isResizing && !de.dragRect && /* @__PURE__ */ G.jsx("div", { className: "rpr-highlight-box rpr-hover-box", style: Rt(ne.hoveredRect), children: /* @__PURE__ */ G.jsx("span", { className: "rpr-highlight-label", children: ne.hoveredTag }) }),
      ne.selectedElements.map((B, te) => /* @__PURE__ */ G.jsx(
        "div",
        {
          className: "rpr-highlight-box rpr-selected-box",
          style: Rt(B.rect),
          onClick: (ce) => xe(B, ce),
          children: /* @__PURE__ */ G.jsxs("span", { className: "rpr-highlight-label", children: [
            B.tag,
            /* @__PURE__ */ G.jsx("i", { className: "rpr-remove-icon", onClick: (ce) => {
              ce.stopPropagation(), ne.removeSelectedElement(B);
            }, children: "×" })
          ] })
        },
        "el-" + te
      )),
      ie && /* @__PURE__ */ G.jsx("div", { className: "rpr-highlight-box rpr-tree-hover-box", style: Rt(de.toViewportRect(ie)) }),
      de.selectedBoxes.map((B) => /* @__PURE__ */ G.jsxs(
        "div",
        {
          className: `rpr-drag-rect rpr-selected-box ${de.resizingBoxId === B.id ? "rpr-is-resizing" : ""}`,
          style: Kt(de.toViewportRect(B.rect)),
          onMouseDown: (te) => Xe(B, te),
          children: [
            /* @__PURE__ */ G.jsxs("span", { className: "rpr-box-label", onMouseDown: (te) => te.stopPropagation(), children: [
              "框选 ",
              B.index + 1,
              /* @__PURE__ */ G.jsx("i", { className: "rpr-remove-icon", onClick: (te) => {
                te.stopPropagation(), de.removeBox(B);
              }, children: "×" })
            ] }),
            Ke.map((te) => /* @__PURE__ */ G.jsx(
              "div",
              {
                className: `rpr-resize-handle rpr-handle-${te}`,
                style: Hn(te, de.toViewportRect(B.rect)),
                onMouseDown: (ce) => de.startResize(B, te, ce)
              },
              te
            ))
          ]
        },
        B.id
      )),
      de.dragRect && /* @__PURE__ */ G.jsx("div", { className: "rpr-drag-rect rpr-preview-box", style: Kt(de.dragRect) }),
      /* @__PURE__ */ G.jsxs(
        It,
        {
          title: /* @__PURE__ */ G.jsx("div", { className: "rpr-review-modal-header", children: "添加评审意见" }),
          open: $,
          onCancel: () => re(!1),
          footer: [
            /* @__PURE__ */ G.jsx(Me, { onClick: () => re(!1), children: "取消" }, "cancel"),
            /* @__PURE__ */ G.jsx(Me, { type: "primary", disabled: !L, onClick: J, children: "保存评审" }, "save")
          ],
          width: ke.size.width,
          style: Ze,
          className: "rpr-review-modal",
          wrapClassName: "rpr-review-modal-wrap",
          zIndex: 10002,
          getContainer: !1,
          closeIcon: /* @__PURE__ */ G.jsx("span", { className: "rpr-review-modal-close", children: "×" }),
          modalRender: (B) => /* @__PURE__ */ G.jsx("div", { onMouseDown: ke.onDragStart, children: B }),
          children: [
            /* @__PURE__ */ G.jsxs("div", { className: "rpr-form-row", children: [
              /* @__PURE__ */ G.jsx("label", { children: "评审目标" }),
              /* @__PURE__ */ G.jsx("div", { className: "rpr-review-targets-summary", children: H.targets.map((B, te) => {
                var ce, Se, Ae, Ge;
                return /* @__PURE__ */ G.jsx(
                  ct,
                  {
                    className: "rpr-target-tag",
                    title: B.type === "element" ? B.selector || "元素" : `框选 ${(ce = B.viewportRect) == null ? void 0 : ce.x},${(Se = B.viewportRect) == null ? void 0 : Se.y}`,
                    children: B.type === "element" ? B.elementText || B.selector || "元素" : `框选 ${(Ae = B.viewportRect) == null ? void 0 : Ae.x},${(Ge = B.viewportRect) == null ? void 0 : Ge.y}`
                  },
                  te
                );
              }) })
            ] }),
            /* @__PURE__ */ G.jsxs("div", { className: "rpr-form-row", children: [
              /* @__PURE__ */ G.jsx("label", { children: "窗口尺寸" }),
              /* @__PURE__ */ G.jsxs("span", { className: "rpr-text-muted", children: [
                (Fe = H.viewport) == null ? void 0 : Fe.width,
                " × ",
                (He = H.viewport) == null ? void 0 : He.height
              ] })
            ] }),
            /* @__PURE__ */ G.jsxs("div", { className: "rpr-form-row", children: [
              /* @__PURE__ */ G.jsx("label", { children: "滚动位置" }),
              /* @__PURE__ */ G.jsxs("span", { className: "rpr-text-muted", children: [
                "x=",
                (lt = H.scroll) == null ? void 0 : lt.x,
                ", y=",
                (at = H.scroll) == null ? void 0 : at.y
              ] })
            ] }),
            /* @__PURE__ */ G.jsxs("div", { className: "rpr-form-row", children: [
              /* @__PURE__ */ G.jsx("label", { children: "截图" }),
              /* @__PURE__ */ G.jsx(
                yr.Group,
                {
                  options: [
                    { label: "选中目标", value: Ve.TARGETS },
                    { label: "当前视口", value: Ve.VIEWPORT },
                    { label: "完整页面", value: Ve.FULL_PAGE }
                  ],
                  value: se,
                  onChange: (B) => D(B)
                }
              )
            ] }),
            /* @__PURE__ */ G.jsxs("div", { className: "rpr-form-row", children: [
              /* @__PURE__ */ G.jsxs("label", { children: [
                "标题 ",
                /* @__PURE__ */ G.jsx("span", { className: "rpr-required", children: "*" })
              ] }),
              /* @__PURE__ */ G.jsx(
                jt,
                {
                  value: H.title,
                  onChange: (B) => q({ ...H, title: B.target.value }),
                  placeholder: "例如：按钮样式不统一"
                }
              )
            ] }),
            /* @__PURE__ */ G.jsxs("div", { className: "rpr-form-row", children: [
              /* @__PURE__ */ G.jsxs("label", { children: [
                "严重等级 ",
                /* @__PURE__ */ G.jsx("span", { className: "rpr-required", children: "*" })
              ] }),
              /* @__PURE__ */ G.jsx(
                br,
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
            /* @__PURE__ */ G.jsxs("div", { className: "rpr-form-row", children: [
              /* @__PURE__ */ G.jsxs("label", { children: [
                "评审建议 ",
                /* @__PURE__ */ G.jsx("span", { className: "rpr-required", children: "*" })
              ] }),
              /* @__PURE__ */ G.jsx(
                jt.TextArea,
                {
                  rows: 4,
                  value: H.suggestion,
                  onChange: (B) => q({ ...H, suggestion: B.target.value }),
                  placeholder: "描述问题现象、影响和改进建议"
                }
              )
            ] }),
            /* @__PURE__ */ G.jsx("div", { className: "rpr-modal-resize-handle", onMouseDown: ke.onResizeStart })
          ]
        }
      ),
      /* @__PURE__ */ G.jsx(
        Dt,
        {
          title: "组件树检查器",
          open: a,
          onClose: () => F(!1),
          placement: "right",
          size: 480,
          resizable: !0,
          zIndex: 10003,
          getContainer: !1,
          className: "rpr-review-drawer",
          children: ae ? /* @__PURE__ */ G.jsxs("div", { className: "rpr-tree-panel", children: [
            ae.framework && ae.framework.length > 0 && /* @__PURE__ */ G.jsxs("div", { className: "rpr-tree-section", children: [
              /* @__PURE__ */ G.jsx("h4", { children: "框架组件树" }),
              /* @__PURE__ */ G.jsx("div", { className: "rpr-tree-list", children: ae.framework.map((B, te) => /* @__PURE__ */ G.jsx(
                "div",
                {
                  className: "rpr-tree-node",
                  onMouseEnter: () => Oe(B),
                  onMouseLeave: () => Z(null),
                  onClick: () => We(B),
                  children: /* @__PURE__ */ G.jsx("span", { className: "rpr-node-name", children: B.componentName })
                },
                "fw-" + te
              )) })
            ] }),
            /* @__PURE__ */ G.jsxs("div", { className: "rpr-tree-section", children: [
              /* @__PURE__ */ G.jsx("h4", { children: "DOM 树" }),
              /* @__PURE__ */ G.jsx("div", { className: "rpr-tree-list", children: ae.dom.map((B, te) => {
                var ce;
                return /* @__PURE__ */ G.jsxs(
                  "div",
                  {
                    className: "rpr-tree-node",
                    style: { paddingLeft: te * 12 },
                    onMouseEnter: () => Oe(B),
                    onMouseLeave: () => Z(null),
                    onClick: () => We(B),
                    children: [
                      /* @__PURE__ */ G.jsx("span", { className: "rpr-node-tag", children: B.tag }),
                      B.id && /* @__PURE__ */ G.jsxs("span", { className: "rpr-node-id", children: [
                        "#",
                        B.id
                      ] }),
                      ((ce = B.aria) == null ? void 0 : ce.role) && /* @__PURE__ */ G.jsxs("span", { className: "rpr-node-aria", children: [
                        "role=",
                        B.aria.role
                      ] }),
                      B.testId && /* @__PURE__ */ G.jsxs("span", { className: "rpr-node-testid", children: [
                        "testid=",
                        B.testId
                      ] })
                    ]
                  },
                  "dom-" + te
                );
              }) })
            ] })
          ] }) : /* @__PURE__ */ G.jsx(Nt, { description: "先选择一个元素以查看组件树" })
        }
      ),
      /* @__PURE__ */ G.jsx(
        Dt,
        {
          title: "当前页面评审意见",
          open: S,
          onClose: () => T(!1),
          placement: "right",
          size: 560,
          resizable: !0,
          zIndex: 10003,
          getContainer: !1,
          className: "rpr-review-drawer",
          extra: /* @__PURE__ */ G.jsxs("div", { style: { display: "flex", gap: 8 }, children: [
            /* @__PURE__ */ G.jsx(Me, { type: "primary", size: "small", onClick: Te, children: "导出 Markdown" }),
            /* @__PURE__ */ G.jsx(Me, { size: "small", onClick: he, children: "导出 JSON" }),
            n && /* @__PURE__ */ G.jsx(Me, { size: "small", onClick: Be, children: "导出 ZIP" }),
            /* @__PURE__ */ G.jsx(Me, { danger: !0, size: "small", onClick: ge, children: "清空本页" })
          ] }),
          children: O.length === 0 ? /* @__PURE__ */ G.jsx(Nt, { description: "暂无评审意见" }) : /* @__PURE__ */ G.jsx("div", { className: "rpr-review-list", children: O.map((B) => {
            var te;
            return /* @__PURE__ */ G.jsxs(
              _r,
              {
                size: "small",
                title: B.title,
                extra: /* @__PURE__ */ G.jsxs("div", { style: { display: "flex", gap: 6 }, children: [
                  /* @__PURE__ */ G.jsx(ct, { color: Yn(B.severity), children: Vn(B.severity) }),
                  /* @__PURE__ */ G.jsxs(ct, { children: [
                    ((te = B.targets) == null ? void 0 : te.length) || 1,
                    " 个目标"
                  ] }),
                  Gn(B) && /* @__PURE__ */ G.jsx(ct, { color: "success", children: "树" })
                ] }),
                children: [
                  /* @__PURE__ */ G.jsx("p", { className: "rpr-review-item-target", children: Xn(B.targets) }),
                  /* @__PURE__ */ G.jsx("p", { className: "rpr-review-item-suggestion", children: B.suggestion }),
                  /* @__PURE__ */ G.jsxs("div", { className: "rpr-review-item-meta", children: [
                    /* @__PURE__ */ G.jsx("span", { className: "rpr-text-muted", children: new Date(B.createdAt).toLocaleString() }),
                    /* @__PURE__ */ G.jsxs("div", { className: "rpr-review-item-actions", children: [
                      B.status !== "resolved" && /* @__PURE__ */ G.jsx(Me, { type: "link", size: "small", onClick: () => K(B.id), children: "标记解决" }),
                      /* @__PURE__ */ G.jsx(Me, { type: "link", danger: !0, size: "small", onClick: () => oe(B.id), children: "删除" })
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
        It,
        {
          title: A == null ? void 0 : A.title,
          open: !!A,
          onOk: () => {
            A == null || A.onConfirm(), ee(null);
          },
          onCancel: () => ee(null),
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
function St(e) {
  return e.ctrlKey || e.metaKey;
}
function Rt(e) {
  return e ? {
    left: e.x + "px",
    top: e.y + "px",
    width: e.width + "px",
    height: e.height + "px"
  } : {};
}
function Kt(e) {
  return e ? {
    left: e.x + "px",
    top: e.y + "px",
    width: e.width + "px",
    height: e.height + "px"
  } : {};
}
function Hn(e, l) {
  const f = {};
  return e.includes("n") && (f.top = -8 / 2 + "px"), e.includes("s") && (f.bottom = -8 / 2 + "px"), e.includes("w") && (f.left = -8 / 2 + "px"), e.includes("e") && (f.right = -8 / 2 + "px"), (e === "n" || e === "s") && (f.left = l.width / 2 - 8 / 2 + "px"), (e === "w" || e === "e") && (f.top = l.height / 2 - 8 / 2 + "px"), f.width = "8px", f.height = "8px", f;
}
function Vn(e) {
  return { low: "低", medium: "中", high: "高", critical: "严重" }[e] || e;
}
function Yn(e) {
  return { low: "default", medium: "warning", high: "error", critical: "error" }[e] || "default";
}
function Gn(e) {
  var l;
  return (l = e.targets) == null ? void 0 : l.some((r) => {
    var f, c;
    return (c = (f = r.componentTree) == null ? void 0 : f.dom) == null ? void 0 : c.length;
  });
}
function Xn(e) {
  if (!e || e.length === 0) return "无目标";
  const l = e[0], r = l.type === "element" ? l.elementText || l.selector || "元素" : `框选 x=${l.viewportRect.x}, y=${l.viewportRect.y}`;
  return e.length === 1 ? r : `${r} 等 ${e.length} 个目标`;
}
export {
  Qn as ReviewTool,
  Ve as SCREENSHOT_TYPES,
  Tn as captureBox,
  lr as captureElement,
  zn as captureFullPage,
  Cn as captureViewport,
  Qn as default,
  kt as generateScreenshotFilename,
  In as getAriaInfo,
  Xt as getComponentTree,
  cr as getCssSelector,
  mt as getNodeInfo,
  Nn as getTestId,
  Pn as getXPath,
  Mt as useDragResize,
  Or as useElementSelection,
  Cr as usePageReview,
  Ir as useViewportBoxing
};
