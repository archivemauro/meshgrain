(function() {
    const h = document.createElement("link").relList;
    if (h && h.supports && h.supports("modulepreload"))
        return;
    for (const O of document.querySelectorAll('link[rel="modulepreload"]'))
        f(O);
    new MutationObserver(O => {
        for (const U of O)
            if (U.type === "childList")
                for (const X of U.addedNodes)
                    X.tagName === "LINK" && X.rel === "modulepreload" && f(X)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function E(O) {
        const U = {};
        return O.integrity && (U.integrity = O.integrity),
        O.referrerPolicy && (U.referrerPolicy = O.referrerPolicy),
        O.crossOrigin === "use-credentials" ? U.credentials = "include" : O.crossOrigin === "anonymous" ? U.credentials = "omit" : U.credentials = "same-origin",
        U
    }
    function f(O) {
        if (O.ep)
            return;
        O.ep = !0;
        const U = E(O);
        fetch(O.href, U)
    }
}
)();
var gf = {
    exports: {}
}
  , Mu = {};
var Od;
function vr() {
    if (Od)
        return Mu;
    Od = 1;
    var r = Symbol.for("react.transitional.element")
      , h = Symbol.for("react.fragment");
    function E(f, O, U) {
        var X = null;
        if (U !== void 0 && (X = "" + U),
        O.key !== void 0 && (X = "" + O.key),
        "key" in O) {
            U = {};
            for (var K in O)
                K !== "key" && (U[K] = O[K])
        } else
            U = O;
        return O = U.ref,
        {
            $$typeof: r,
            type: f,
            key: X,
            ref: O !== void 0 ? O : null,
            props: U
        }
    }
    return Mu.Fragment = h,
    Mu.jsx = E,
    Mu.jsxs = E,
    Mu
}
var Dd;
function yr() {
    return Dd || (Dd = 1,
    gf.exports = vr()),
    gf.exports
}
var A = yr()
  , bf = {
    exports: {}
}
  , V = {};
var Ud;
function gr() {
    if (Ud)
        return V;
    Ud = 1;
    var r = Symbol.for("react.transitional.element")
      , h = Symbol.for("react.portal")
      , E = Symbol.for("react.fragment")
      , f = Symbol.for("react.strict_mode")
      , O = Symbol.for("react.profiler")
      , U = Symbol.for("react.consumer")
      , X = Symbol.for("react.context")
      , K = Symbol.for("react.forward_ref")
      , D = Symbol.for("react.suspense")
      , z = Symbol.for("react.memo")
      , q = Symbol.for("react.lazy")
      , H = Symbol.for("react.activity")
      , S = Symbol.iterator;
    function k(d) {
        return d === null || typeof d != "object" ? null : (d = S && d[S] || d["@@iterator"],
        typeof d == "function" ? d : null)
    }
    var G = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , F = Object.assign
      , L = {};
    function al(d, x, C) {
        this.props = d,
        this.context = x,
        this.refs = L,
        this.updater = C || G
    }
    al.prototype.isReactComponent = {},
    al.prototype.setState = function(d, x) {
        if (typeof d != "object" && typeof d != "function" && d != null)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, d, x, "setState")
    }
    ,
    al.prototype.forceUpdate = function(d) {
        this.updater.enqueueForceUpdate(this, d, "forceUpdate")
    }
    ;
    function pl() {}
    pl.prototype = al.prototype;
    function sl(d, x, C) {
        this.props = d,
        this.context = x,
        this.refs = L,
        this.updater = C || G
    }
    var xl = sl.prototype = new pl;
    xl.constructor = sl,
    F(xl, al.prototype),
    xl.isPureReactComponent = !0;
    var Vl = Array.isArray;
    function Ol() {}
    var I = {
        H: null,
        A: null,
        T: null,
        S: null
    }
      , il = Object.prototype.hasOwnProperty;
    function El(d, x, C) {
        var R = C.ref;
        return {
            $$typeof: r,
            type: d,
            key: x,
            ref: R !== void 0 ? R : null,
            props: C
        }
    }
    function Pl(d, x) {
        return El(d.type, x, d.props)
    }
    function Ml(d) {
        return typeof d == "object" && d !== null && d.$$typeof === r
    }
    function Hl(d) {
        var x = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + d.replace(/[=:]/g, function(C) {
            return x[C]
        })
    }
    var xa = /\/+/g;
    function Bt(d, x) {
        return typeof d == "object" && d !== null && d.key != null ? Hl("" + d.key) : x.toString(36)
    }
    function Ot(d) {
        switch (d.status) {
        case "fulfilled":
            return d.value;
        case "rejected":
            throw d.reason;
        default:
            switch (typeof d.status == "string" ? d.then(Ol, Ol) : (d.status = "pending",
            d.then(function(x) {
                d.status === "pending" && (d.status = "fulfilled",
                d.value = x)
            }, function(x) {
                d.status === "pending" && (d.status = "rejected",
                d.reason = x)
            })),
            d.status) {
            case "fulfilled":
                return d.value;
            case "rejected":
                throw d.reason
            }
        }
        throw d
    }
    function T(d, x, C, R, J) {
        var P = typeof d;
        (P === "undefined" || P === "boolean") && (d = null);
        var ml = !1;
        if (d === null)
            ml = !0;
        else
            switch (P) {
            case "bigint":
            case "string":
            case "number":
                ml = !0;
                break;
            case "object":
                switch (d.$$typeof) {
                case r:
                case h:
                    ml = !0;
                    break;
                case q:
                    return ml = d._init,
                    T(ml(d._payload), x, C, R, J)
                }
            }
        if (ml)
            return J = J(d),
            ml = R === "" ? "." + Bt(d, 0) : R,
            Vl(J) ? (C = "",
            ml != null && (C = ml.replace(xa, "$&/") + "/"),
            T(J, x, C, "", function(je) {
                return je
            })) : J != null && (Ml(J) && (J = Pl(J, C + (J.key == null || d && d.key === J.key ? "" : ("" + J.key).replace(xa, "$&/") + "/") + ml)),
            x.push(J)),
            1;
        ml = 0;
        var Fl = R === "" ? "." : R + ":";
        if (Vl(d))
            for (var Nl = 0; Nl < d.length; Nl++)
                R = d[Nl],
                P = Fl + Bt(R, Nl),
                ml += T(R, x, C, P, J);
        else if (Nl = k(d),
        typeof Nl == "function")
            for (d = Nl.call(d),
            Nl = 0; !(R = d.next()).done; )
                R = R.value,
                P = Fl + Bt(R, Nl++),
                ml += T(R, x, C, P, J);
        else if (P === "object") {
            if (typeof d.then == "function")
                return T(Ot(d), x, C, R, J);
            throw x = String(d),
            Error("Objects are not valid as a React child (found: " + (x === "[object Object]" ? "object with keys {" + Object.keys(d).join(", ") + "}" : x) + "). If you meant to render a collection of children, use an array instead.")
        }
        return ml
    }
    function N(d, x, C) {
        if (d == null)
            return d;
        var R = []
          , J = 0;
        return T(d, R, "", "", function(P) {
            return x.call(C, P, J++)
        }),
        R
    }
    function Z(d) {
        if (d._status === -1) {
            var x = d._result;
            x = x(),
            x.then(function(C) {
                (d._status === 0 || d._status === -1) && (d._status = 1,
                d._result = C)
            }, function(C) {
                (d._status === 0 || d._status === -1) && (d._status = 2,
                d._result = C)
            }),
            d._status === -1 && (d._status = 0,
            d._result = x)
        }
        if (d._status === 1)
            return d._result.default;
        throw d._result
    }
    var vl = typeof reportError == "function" ? reportError : function(d) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var x = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof d == "object" && d !== null && typeof d.message == "string" ? String(d.message) : String(d),
                error: d
            });
            if (!window.dispatchEvent(x))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", d);
            return
        }
        console.error(d)
    }
      , Sl = {
        map: N,
        forEach: function(d, x, C) {
            N(d, function() {
                x.apply(this, arguments)
            }, C)
        },
        count: function(d) {
            var x = 0;
            return N(d, function() {
                x++
            }),
            x
        },
        toArray: function(d) {
            return N(d, function(x) {
                return x
            }) || []
        },
        only: function(d) {
            if (!Ml(d))
                throw Error("React.Children.only expected to receive a single React element child.");
            return d
        }
    };
    return V.Activity = H,
    V.Children = Sl,
    V.Component = al,
    V.Fragment = E,
    V.Profiler = O,
    V.PureComponent = sl,
    V.StrictMode = f,
    V.Suspense = D,
    V.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = I,
    V.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(d) {
            return I.H.useMemoCache(d)
        }
    },
    V.cache = function(d) {
        return function() {
            return d.apply(null, arguments)
        }
    }
    ,
    V.cacheSignal = function() {
        return null
    }
    ,
    V.cloneElement = function(d, x, C) {
        if (d == null)
            throw Error("The argument must be a React element, but you passed " + d + ".");
        var R = F({}, d.props)
          , J = d.key;
        if (x != null)
            for (P in x.key !== void 0 && (J = "" + x.key),
            x)
                !il.call(x, P) || P === "key" || P === "__self" || P === "__source" || P === "ref" && x.ref === void 0 || (R[P] = x[P]);
        var P = arguments.length - 2;
        if (P === 1)
            R.children = C;
        else if (1 < P) {
            for (var ml = Array(P), Fl = 0; Fl < P; Fl++)
                ml[Fl] = arguments[Fl + 2];
            R.children = ml
        }
        return El(d.type, J, R)
    }
    ,
    V.createContext = function(d) {
        return d = {
            $$typeof: X,
            _currentValue: d,
            _currentValue2: d,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        },
        d.Provider = d,
        d.Consumer = {
            $$typeof: U,
            _context: d
        },
        d
    }
    ,
    V.createElement = function(d, x, C) {
        var R, J = {}, P = null;
        if (x != null)
            for (R in x.key !== void 0 && (P = "" + x.key),
            x)
                il.call(x, R) && R !== "key" && R !== "__self" && R !== "__source" && (J[R] = x[R]);
        var ml = arguments.length - 2;
        if (ml === 1)
            J.children = C;
        else if (1 < ml) {
            for (var Fl = Array(ml), Nl = 0; Nl < ml; Nl++)
                Fl[Nl] = arguments[Nl + 2];
            J.children = Fl
        }
        if (d && d.defaultProps)
            for (R in ml = d.defaultProps,
            ml)
                J[R] === void 0 && (J[R] = ml[R]);
        return El(d, P, J)
    }
    ,
    V.createRef = function() {
        return {
            current: null
        }
    }
    ,
    V.forwardRef = function(d) {
        return {
            $$typeof: K,
            render: d
        }
    }
    ,
    V.isValidElement = Ml,
    V.lazy = function(d) {
        return {
            $$typeof: q,
            _payload: {
                _status: -1,
                _result: d
            },
            _init: Z
        }
    }
    ,
    V.memo = function(d, x) {
        return {
            $$typeof: z,
            type: d,
            compare: x === void 0 ? null : x
        }
    }
    ,
    V.startTransition = function(d) {
        var x = I.T
          , C = {};
        I.T = C;
        try {
            var R = d()
              , J = I.S;
            J !== null && J(C, R),
            typeof R == "object" && R !== null && typeof R.then == "function" && R.then(Ol, vl)
        } catch (P) {
            vl(P)
        } finally {
            x !== null && C.types !== null && (x.types = C.types),
            I.T = x
        }
    }
    ,
    V.unstable_useCacheRefresh = function() {
        return I.H.useCacheRefresh()
    }
    ,
    V.use = function(d) {
        return I.H.use(d)
    }
    ,
    V.useActionState = function(d, x, C) {
        return I.H.useActionState(d, x, C)
    }
    ,
    V.useCallback = function(d, x) {
        return I.H.useCallback(d, x)
    }
    ,
    V.useContext = function(d) {
        return I.H.useContext(d)
    }
    ,
    V.useDebugValue = function() {}
    ,
    V.useDeferredValue = function(d, x) {
        return I.H.useDeferredValue(d, x)
    }
    ,
    V.useEffect = function(d, x) {
        return I.H.useEffect(d, x)
    }
    ,
    V.useEffectEvent = function(d) {
        return I.H.useEffectEvent(d)
    }
    ,
    V.useId = function() {
        return I.H.useId()
    }
    ,
    V.useImperativeHandle = function(d, x, C) {
        return I.H.useImperativeHandle(d, x, C)
    }
    ,
    V.useInsertionEffect = function(d, x) {
        return I.H.useInsertionEffect(d, x)
    }
    ,
    V.useLayoutEffect = function(d, x) {
        return I.H.useLayoutEffect(d, x)
    }
    ,
    V.useMemo = function(d, x) {
        return I.H.useMemo(d, x)
    }
    ,
    V.useOptimistic = function(d, x) {
        return I.H.useOptimistic(d, x)
    }
    ,
    V.useReducer = function(d, x, C) {
        return I.H.useReducer(d, x, C)
    }
    ,
    V.useRef = function(d) {
        return I.H.useRef(d)
    }
    ,
    V.useState = function(d) {
        return I.H.useState(d)
    }
    ,
    V.useSyncExternalStore = function(d, x, C) {
        return I.H.useSyncExternalStore(d, x, C)
    }
    ,
    V.useTransition = function() {
        return I.H.useTransition()
    }
    ,
    V.version = "19.2.8",
    V
}
var Nd;
function Af() {
    return Nd || (Nd = 1,
    bf.exports = gr()),
    bf.exports
}
var dl = Af()
  , Sf = {
    exports: {}
}
  , xu = {}
  , zf = {
    exports: {}
}
  , pf = {};
var Cd;
function br() {
    return Cd || (Cd = 1,
    (function(r) {
        function h(T, N) {
            var Z = T.length;
            T.push(N);
            l: for (; 0 < Z; ) {
                var vl = Z - 1 >>> 1
                  , Sl = T[vl];
                if (0 < O(Sl, N))
                    T[vl] = N,
                    T[Z] = Sl,
                    Z = vl;
                else
                    break l
            }
        }
        function E(T) {
            return T.length === 0 ? null : T[0]
        }
        function f(T) {
            if (T.length === 0)
                return null;
            var N = T[0]
              , Z = T.pop();
            if (Z !== N) {
                T[0] = Z;
                l: for (var vl = 0, Sl = T.length, d = Sl >>> 1; vl < d; ) {
                    var x = 2 * (vl + 1) - 1
                      , C = T[x]
                      , R = x + 1
                      , J = T[R];
                    if (0 > O(C, Z))
                        R < Sl && 0 > O(J, C) ? (T[vl] = J,
                        T[R] = Z,
                        vl = R) : (T[vl] = C,
                        T[x] = Z,
                        vl = x);
                    else if (R < Sl && 0 > O(J, Z))
                        T[vl] = J,
                        T[R] = Z,
                        vl = R;
                    else
                        break l
                }
            }
            return N
        }
        function O(T, N) {
            var Z = T.sortIndex - N.sortIndex;
            return Z !== 0 ? Z : T.id - N.id
        }
        if (r.unstable_now = void 0,
        typeof performance == "object" && typeof performance.now == "function") {
            var U = performance;
            r.unstable_now = function() {
                return U.now()
            }
        } else {
            var X = Date
              , K = X.now();
            r.unstable_now = function() {
                return X.now() - K
            }
        }
        var D = []
          , z = []
          , q = 1
          , H = null
          , S = 3
          , k = !1
          , G = !1
          , F = !1
          , L = !1
          , al = typeof setTimeout == "function" ? setTimeout : null
          , pl = typeof clearTimeout == "function" ? clearTimeout : null
          , sl = typeof setImmediate < "u" ? setImmediate : null;
        function xl(T) {
            for (var N = E(z); N !== null; ) {
                if (N.callback === null)
                    f(z);
                else if (N.startTime <= T)
                    f(z),
                    N.sortIndex = N.expirationTime,
                    h(D, N);
                else
                    break;
                N = E(z)
            }
        }
        function Vl(T) {
            if (F = !1,
            xl(T),
            !G)
                if (E(D) !== null)
                    G = !0,
                    Ol || (Ol = !0,
                    Hl());
                else {
                    var N = E(z);
                    N !== null && Ot(Vl, N.startTime - T)
                }
        }
        var Ol = !1
          , I = -1
          , il = 5
          , El = -1;
        function Pl() {
            return L ? !0 : !(r.unstable_now() - El < il)
        }
        function Ml() {
            if (L = !1,
            Ol) {
                var T = r.unstable_now();
                El = T;
                var N = !0;
                try {
                    l: {
                        G = !1,
                        F && (F = !1,
                        pl(I),
                        I = -1),
                        k = !0;
                        var Z = S;
                        try {
                            t: {
                                for (xl(T),
                                H = E(D); H !== null && !(H.expirationTime > T && Pl()); ) {
                                    var vl = H.callback;
                                    if (typeof vl == "function") {
                                        H.callback = null,
                                        S = H.priorityLevel;
                                        var Sl = vl(H.expirationTime <= T);
                                        if (T = r.unstable_now(),
                                        typeof Sl == "function") {
                                            H.callback = Sl,
                                            xl(T),
                                            N = !0;
                                            break t
                                        }
                                        H === E(D) && f(D),
                                        xl(T)
                                    } else
                                        f(D);
                                    H = E(D)
                                }
                                if (H !== null)
                                    N = !0;
                                else {
                                    var d = E(z);
                                    d !== null && Ot(Vl, d.startTime - T),
                                    N = !1
                                }
                            }
                            break l
                        } finally {
                            H = null,
                            S = Z,
                            k = !1
                        }
                        N = void 0
                    }
                } finally {
                    N ? Hl() : Ol = !1
                }
            }
        }
        var Hl;
        if (typeof sl == "function")
            Hl = function() {
                sl(Ml)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var xa = new MessageChannel
              , Bt = xa.port2;
            xa.port1.onmessage = Ml,
            Hl = function() {
                Bt.postMessage(null)
            }
        } else
            Hl = function() {
                al(Ml, 0)
            }
            ;
        function Ot(T, N) {
            I = al(function() {
                T(r.unstable_now())
            }, N)
        }
        r.unstable_IdlePriority = 5,
        r.unstable_ImmediatePriority = 1,
        r.unstable_LowPriority = 4,
        r.unstable_NormalPriority = 3,
        r.unstable_Profiling = null,
        r.unstable_UserBlockingPriority = 2,
        r.unstable_cancelCallback = function(T) {
            T.callback = null
        }
        ,
        r.unstable_forceFrameRate = function(T) {
            0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : il = 0 < T ? Math.floor(1e3 / T) : 5
        }
        ,
        r.unstable_getCurrentPriorityLevel = function() {
            return S
        }
        ,
        r.unstable_next = function(T) {
            switch (S) {
            case 1:
            case 2:
            case 3:
                var N = 3;
                break;
            default:
                N = S
            }
            var Z = S;
            S = N;
            try {
                return T()
            } finally {
                S = Z
            }
        }
        ,
        r.unstable_requestPaint = function() {
            L = !0
        }
        ,
        r.unstable_runWithPriority = function(T, N) {
            switch (T) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                T = 3
            }
            var Z = S;
            S = T;
            try {
                return N()
            } finally {
                S = Z
            }
        }
        ,
        r.unstable_scheduleCallback = function(T, N, Z) {
            var vl = r.unstable_now();
            switch (typeof Z == "object" && Z !== null ? (Z = Z.delay,
            Z = typeof Z == "number" && 0 < Z ? vl + Z : vl) : Z = vl,
            T) {
            case 1:
                var Sl = -1;
                break;
            case 2:
                Sl = 250;
                break;
            case 5:
                Sl = 1073741823;
                break;
            case 4:
                Sl = 1e4;
                break;
            default:
                Sl = 5e3
            }
            return Sl = Z + Sl,
            T = {
                id: q++,
                callback: N,
                priorityLevel: T,
                startTime: Z,
                expirationTime: Sl,
                sortIndex: -1
            },
            Z > vl ? (T.sortIndex = Z,
            h(z, T),
            E(D) === null && T === E(z) && (F ? (pl(I),
            I = -1) : F = !0,
            Ot(Vl, Z - vl))) : (T.sortIndex = Sl,
            h(D, T),
            G || k || (G = !0,
            Ol || (Ol = !0,
            Hl()))),
            T
        }
        ,
        r.unstable_shouldYield = Pl,
        r.unstable_wrapCallback = function(T) {
            var N = S;
            return function() {
                var Z = S;
                S = N;
                try {
                    return T.apply(this, arguments)
                } finally {
                    S = Z
                }
            }
        }
    }
    )(pf)),
    pf
}
var jd;
function Sr() {
    return jd || (jd = 1,
    zf.exports = br()),
    zf.exports
}
var Ef = {
    exports: {}
}
  , kl = {};
var Rd;
function zr() {
    if (Rd)
        return kl;
    Rd = 1;
    var r = Af();
    function h(D) {
        var z = "https://react.dev/errors/" + D;
        if (1 < arguments.length) {
            z += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var q = 2; q < arguments.length; q++)
                z += "&args[]=" + encodeURIComponent(arguments[q])
        }
        return "Minified React error #" + D + "; visit " + z + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function E() {}
    var f = {
        d: {
            f: E,
            r: function() {
                throw Error(h(522))
            },
            D: E,
            C: E,
            L: E,
            m: E,
            X: E,
            S: E,
            M: E
        },
        p: 0,
        findDOMNode: null
    }
      , O = Symbol.for("react.portal");
    function U(D, z, q) {
        var H = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: O,
            key: H == null ? null : "" + H,
            children: D,
            containerInfo: z,
            implementation: q
        }
    }
    var X = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function K(D, z) {
        if (D === "font")
            return "";
        if (typeof z == "string")
            return z === "use-credentials" ? z : ""
    }
    return kl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f,
    kl.createPortal = function(D, z) {
        var q = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!z || z.nodeType !== 1 && z.nodeType !== 9 && z.nodeType !== 11)
            throw Error(h(299));
        return U(D, z, null, q)
    }
    ,
    kl.flushSync = function(D) {
        var z = X.T
          , q = f.p;
        try {
            if (X.T = null,
            f.p = 2,
            D)
                return D()
        } finally {
            X.T = z,
            f.p = q,
            f.d.f()
        }
    }
    ,
    kl.preconnect = function(D, z) {
        typeof D == "string" && (z ? (z = z.crossOrigin,
        z = typeof z == "string" ? z === "use-credentials" ? z : "" : void 0) : z = null,
        f.d.C(D, z))
    }
    ,
    kl.prefetchDNS = function(D) {
        typeof D == "string" && f.d.D(D)
    }
    ,
    kl.preinit = function(D, z) {
        if (typeof D == "string" && z && typeof z.as == "string") {
            var q = z.as
              , H = K(q, z.crossOrigin)
              , S = typeof z.integrity == "string" ? z.integrity : void 0
              , k = typeof z.fetchPriority == "string" ? z.fetchPriority : void 0;
            q === "style" ? f.d.S(D, typeof z.precedence == "string" ? z.precedence : void 0, {
                crossOrigin: H,
                integrity: S,
                fetchPriority: k
            }) : q === "script" && f.d.X(D, {
                crossOrigin: H,
                integrity: S,
                fetchPriority: k,
                nonce: typeof z.nonce == "string" ? z.nonce : void 0
            })
        }
    }
    ,
    kl.preinitModule = function(D, z) {
        if (typeof D == "string")
            if (typeof z == "object" && z !== null) {
                if (z.as == null || z.as === "script") {
                    var q = K(z.as, z.crossOrigin);
                    f.d.M(D, {
                        crossOrigin: q,
                        integrity: typeof z.integrity == "string" ? z.integrity : void 0,
                        nonce: typeof z.nonce == "string" ? z.nonce : void 0
                    })
                }
            } else
                z == null && f.d.M(D)
    }
    ,
    kl.preload = function(D, z) {
        if (typeof D == "string" && typeof z == "object" && z !== null && typeof z.as == "string") {
            var q = z.as
              , H = K(q, z.crossOrigin);
            f.d.L(D, q, {
                crossOrigin: H,
                integrity: typeof z.integrity == "string" ? z.integrity : void 0,
                nonce: typeof z.nonce == "string" ? z.nonce : void 0,
                type: typeof z.type == "string" ? z.type : void 0,
                fetchPriority: typeof z.fetchPriority == "string" ? z.fetchPriority : void 0,
                referrerPolicy: typeof z.referrerPolicy == "string" ? z.referrerPolicy : void 0,
                imageSrcSet: typeof z.imageSrcSet == "string" ? z.imageSrcSet : void 0,
                imageSizes: typeof z.imageSizes == "string" ? z.imageSizes : void 0,
                media: typeof z.media == "string" ? z.media : void 0
            })
        }
    }
    ,
    kl.preloadModule = function(D, z) {
        if (typeof D == "string")
            if (z) {
                var q = K(z.as, z.crossOrigin);
                f.d.m(D, {
                    as: typeof z.as == "string" && z.as !== "script" ? z.as : void 0,
                    crossOrigin: q,
                    integrity: typeof z.integrity == "string" ? z.integrity : void 0
                })
            } else
                f.d.m(D)
    }
    ,
    kl.requestFormReset = function(D) {
        f.d.r(D)
    }
    ,
    kl.unstable_batchedUpdates = function(D, z) {
        return D(z)
    }
    ,
    kl.useFormState = function(D, z, q) {
        return X.H.useFormState(D, z, q)
    }
    ,
    kl.useFormStatus = function() {
        return X.H.useHostTransitionStatus()
    }
    ,
    kl.version = "19.2.8",
    kl
}
var Hd;
function pr() {
    if (Hd)
        return Ef.exports;
    Hd = 1;
    function r() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)
            } catch (h) {
                console.error(h)
            }
    }
    return r(),
    Ef.exports = zr(),
    Ef.exports
}
var Bd;
function Er() {
    if (Bd)
        return xu;
    Bd = 1;
    var r = Sr()
      , h = Af()
      , E = pr();
    function f(l) {
        var t = "https://react.dev/errors/" + l;
        if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var a = 2; a < arguments.length; a++)
                t += "&args[]=" + encodeURIComponent(arguments[a])
        }
        return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function O(l) {
        return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11)
    }
    function U(l) {
        var t = l
          , a = l;
        if (l.alternate)
            for (; t.return; )
                t = t.return;
        else {
            l = t;
            do
                t = l,
                (t.flags & 4098) !== 0 && (a = t.return),
                l = t.return;
            while (l)
        }
        return t.tag === 3 ? a : null
    }
    function X(l) {
        if (l.tag === 13) {
            var t = l.memoizedState;
            if (t === null && (l = l.alternate,
            l !== null && (t = l.memoizedState)),
            t !== null)
                return t.dehydrated
        }
        return null
    }
    function K(l) {
        if (l.tag === 31) {
            var t = l.memoizedState;
            if (t === null && (l = l.alternate,
            l !== null && (t = l.memoizedState)),
            t !== null)
                return t.dehydrated
        }
        return null
    }
    function D(l) {
        if (U(l) !== l)
            throw Error(f(188))
    }
    function z(l) {
        var t = l.alternate;
        if (!t) {
            if (t = U(l),
            t === null)
                throw Error(f(188));
            return t !== l ? null : l
        }
        for (var a = l, e = t; ; ) {
            var u = a.return;
            if (u === null)
                break;
            var n = u.alternate;
            if (n === null) {
                if (e = u.return,
                e !== null) {
                    a = e;
                    continue
                }
                break
            }
            if (u.child === n.child) {
                for (n = u.child; n; ) {
                    if (n === a)
                        return D(u),
                        l;
                    if (n === e)
                        return D(u),
                        t;
                    n = n.sibling
                }
                throw Error(f(188))
            }
            if (a.return !== e.return)
                a = u,
                e = n;
            else {
                for (var i = !1, c = u.child; c; ) {
                    if (c === a) {
                        i = !0,
                        a = u,
                        e = n;
                        break
                    }
                    if (c === e) {
                        i = !0,
                        e = u,
                        a = n;
                        break
                    }
                    c = c.sibling
                }
                if (!i) {
                    for (c = n.child; c; ) {
                        if (c === a) {
                            i = !0,
                            a = n,
                            e = u;
                            break
                        }
                        if (c === e) {
                            i = !0,
                            e = n,
                            a = u;
                            break
                        }
                        c = c.sibling
                    }
                    if (!i)
                        throw Error(f(189))
                }
            }
            if (a.alternate !== e)
                throw Error(f(190))
        }
        if (a.tag !== 3)
            throw Error(f(188));
        return a.stateNode.current === a ? l : t
    }
    function q(l) {
        var t = l.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return l;
        for (l = l.child; l !== null; ) {
            if (t = q(l),
            t !== null)
                return t;
            l = l.sibling
        }
        return null
    }
    var H = Object.assign
      , S = Symbol.for("react.element")
      , k = Symbol.for("react.transitional.element")
      , G = Symbol.for("react.portal")
      , F = Symbol.for("react.fragment")
      , L = Symbol.for("react.strict_mode")
      , al = Symbol.for("react.profiler")
      , pl = Symbol.for("react.consumer")
      , sl = Symbol.for("react.context")
      , xl = Symbol.for("react.forward_ref")
      , Vl = Symbol.for("react.suspense")
      , Ol = Symbol.for("react.suspense_list")
      , I = Symbol.for("react.memo")
      , il = Symbol.for("react.lazy")
      , El = Symbol.for("react.activity")
      , Pl = Symbol.for("react.memo_cache_sentinel")
      , Ml = Symbol.iterator;
    function Hl(l) {
        return l === null || typeof l != "object" ? null : (l = Ml && l[Ml] || l["@@iterator"],
        typeof l == "function" ? l : null)
    }
    var xa = Symbol.for("react.client.reference");
    function Bt(l) {
        if (l == null)
            return null;
        if (typeof l == "function")
            return l.$$typeof === xa ? null : l.displayName || l.name || null;
        if (typeof l == "string")
            return l;
        switch (l) {
        case F:
            return "Fragment";
        case al:
            return "Profiler";
        case L:
            return "StrictMode";
        case Vl:
            return "Suspense";
        case Ol:
            return "SuspenseList";
        case El:
            return "Activity"
        }
        if (typeof l == "object")
            switch (l.$$typeof) {
            case G:
                return "Portal";
            case sl:
                return l.displayName || "Context";
            case pl:
                return (l._context.displayName || "Context") + ".Consumer";
            case xl:
                var t = l.render;
                return l = l.displayName,
                l || (l = t.displayName || t.name || "",
                l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"),
                l;
            case I:
                return t = l.displayName || null,
                t !== null ? t : Bt(l.type) || "Memo";
            case il:
                t = l._payload,
                l = l._init;
                try {
                    return Bt(l(t))
                } catch {}
            }
        return null
    }
    var Ot = Array.isArray
      , T = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , N = E.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , Z = {
        pending: !1,
        data: null,
        method: null,
        action: null
    }
      , vl = []
      , Sl = -1;
    function d(l) {
        return {
            current: l
        }
    }
    function x(l) {
        0 > Sl || (l.current = vl[Sl],
        vl[Sl] = null,
        Sl--)
    }
    function C(l, t) {
        Sl++,
        vl[Sl] = l.current,
        l.current = t
    }
    var R = d(null)
      , J = d(null)
      , P = d(null)
      , ml = d(null);
    function Fl(l, t) {
        switch (C(P, t),
        C(J, l),
        C(R, null),
        t.nodeType) {
        case 9:
        case 11:
            l = (l = t.documentElement) && (l = l.namespaceURI) ? F0(l) : 0;
            break;
        default:
            if (l = t.tagName,
            t = t.namespaceURI)
                t = F0(t),
                l = I0(t, l);
            else
                switch (l) {
                case "svg":
                    l = 1;
                    break;
                case "math":
                    l = 2;
                    break;
                default:
                    l = 0
                }
        }
        x(R),
        C(R, l)
    }
    function Nl() {
        x(R),
        x(J),
        x(P)
    }
    function je(l) {
        l.memoizedState !== null && C(ml, l);
        var t = R.current
          , a = I0(t, l.type);
        t !== a && (C(J, l),
        C(R, a))
    }
    function Uu(l) {
        J.current === l && (x(R),
        x(J)),
        ml.current === l && (x(ml),
        Eu._currentValue = Z)
    }
    var In, Mf;
    function Oa(l) {
        if (In === void 0)
            try {
                throw Error()
            } catch (a) {
                var t = a.stack.trim().match(/\n( *(at )?)/);
                In = t && t[1] || "",
                Mf = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : ""
            }
        return `
` + In + l + Mf
    }
    var Pn = !1;
    function li(l, t) {
        if (!l || Pn)
            return "";
        Pn = !0;
        var a = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var e = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (t) {
                            var M = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(M.prototype, "props", {
                                set: function() {
                                    throw Error()
                                }
                            }),
                            typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(M, [])
                                } catch (b) {
                                    var g = b
                                }
                                Reflect.construct(l, [], M)
                            } else {
                                try {
                                    M.call()
                                } catch (b) {
                                    g = b
                                }
                                l.call(M.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (b) {
                                g = b
                            }
                            (M = l()) && typeof M.catch == "function" && M.catch(function() {})
                        }
                    } catch (b) {
                        if (b && g && typeof b.stack == "string")
                            return [b.stack, g.stack]
                    }
                    return [null, null]
                }
            };
            e.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var u = Object.getOwnPropertyDescriptor(e.DetermineComponentFrameRoot, "name");
            u && u.configurable && Object.defineProperty(e.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var n = e.DetermineComponentFrameRoot()
              , i = n[0]
              , c = n[1];
            if (i && c) {
                var s = i.split(`
`)
                  , y = c.split(`
`);
                for (u = e = 0; e < s.length && !s[e].includes("DetermineComponentFrameRoot"); )
                    e++;
                for (; u < y.length && !y[u].includes("DetermineComponentFrameRoot"); )
                    u++;
                if (e === s.length || u === y.length)
                    for (e = s.length - 1,
                    u = y.length - 1; 1 <= e && 0 <= u && s[e] !== y[u]; )
                        u--;
                for (; 1 <= e && 0 <= u; e--,
                u--)
                    if (s[e] !== y[u]) {
                        if (e !== 1 || u !== 1)
                            do
                                if (e--,
                                u--,
                                0 > u || s[e] !== y[u]) {
                                    var p = `
` + s[e].replace(" at new ", " at ");
                                    return l.displayName && p.includes("<anonymous>") && (p = p.replace("<anonymous>", l.displayName)),
                                    p
                                }
                            while (1 <= e && 0 <= u);
                        break
                    }
            }
        } finally {
            Pn = !1,
            Error.prepareStackTrace = a
        }
        return (a = l ? l.displayName || l.name : "") ? Oa(a) : ""
    }
    function Jd(l, t) {
        switch (l.tag) {
        case 26:
        case 27:
        case 5:
            return Oa(l.type);
        case 16:
            return Oa("Lazy");
        case 13:
            return l.child !== t && t !== null ? Oa("Suspense Fallback") : Oa("Suspense");
        case 19:
            return Oa("SuspenseList");
        case 0:
        case 15:
            return li(l.type, !1);
        case 11:
            return li(l.type.render, !1);
        case 1:
            return li(l.type, !0);
        case 31:
            return Oa("Activity");
        default:
            return ""
        }
    }
    function xf(l) {
        try {
            var t = ""
              , a = null;
            do
                t += Jd(l, a),
                a = l,
                l = l.return;
            while (l);
            return t
        } catch (e) {
            return `
Error generating stack: ` + e.message + `
` + e.stack
        }
    }
    var ti = Object.prototype.hasOwnProperty
      , ai = r.unstable_scheduleCallback
      , ei = r.unstable_cancelCallback
      , wd = r.unstable_shouldYield
      , Wd = r.unstable_requestPaint
      , ct = r.unstable_now
      , $d = r.unstable_getCurrentPriorityLevel
      , Of = r.unstable_ImmediatePriority
      , Df = r.unstable_UserBlockingPriority
      , Nu = r.unstable_NormalPriority
      , kd = r.unstable_LowPriority
      , Uf = r.unstable_IdlePriority
      , Fd = r.log
      , Id = r.unstable_setDisableYieldValue
      , Re = null
      , ft = null;
    function ta(l) {
        if (typeof Fd == "function" && Id(l),
        ft && typeof ft.setStrictMode == "function")
            try {
                ft.setStrictMode(Re, l)
            } catch {}
    }
    var st = Math.clz32 ? Math.clz32 : t1
      , Pd = Math.log
      , l1 = Math.LN2;
    function t1(l) {
        return l >>>= 0,
        l === 0 ? 32 : 31 - (Pd(l) / l1 | 0) | 0
    }
    var Cu = 256
      , ju = 262144
      , Ru = 4194304;
    function Da(l) {
        var t = l & 42;
        if (t !== 0)
            return t;
        switch (l & -l) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
            return 64;
        case 128:
            return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
            return l & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return l & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return l & 62914560;
        case 67108864:
            return 67108864;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 0;
        default:
            return l
        }
    }
    function Hu(l, t, a) {
        var e = l.pendingLanes;
        if (e === 0)
            return 0;
        var u = 0
          , n = l.suspendedLanes
          , i = l.pingedLanes;
        l = l.warmLanes;
        var c = e & 134217727;
        return c !== 0 ? (e = c & ~n,
        e !== 0 ? u = Da(e) : (i &= c,
        i !== 0 ? u = Da(i) : a || (a = c & ~l,
        a !== 0 && (u = Da(a))))) : (c = e & ~n,
        c !== 0 ? u = Da(c) : i !== 0 ? u = Da(i) : a || (a = e & ~l,
        a !== 0 && (u = Da(a)))),
        u === 0 ? 0 : t !== 0 && t !== u && (t & n) === 0 && (n = u & -u,
        a = t & -t,
        n >= a || n === 32 && (a & 4194048) !== 0) ? t : u
    }
    function He(l, t) {
        return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0
    }
    function a1(l, t) {
        switch (l) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
            return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function Nf() {
        var l = Ru;
        return Ru <<= 1,
        (Ru & 62914560) === 0 && (Ru = 4194304),
        l
    }
    function ui(l) {
        for (var t = [], a = 0; 31 > a; a++)
            t.push(l);
        return t
    }
    function Be(l, t) {
        l.pendingLanes |= t,
        t !== 268435456 && (l.suspendedLanes = 0,
        l.pingedLanes = 0,
        l.warmLanes = 0)
    }
    function e1(l, t, a, e, u, n) {
        var i = l.pendingLanes;
        l.pendingLanes = a,
        l.suspendedLanes = 0,
        l.pingedLanes = 0,
        l.warmLanes = 0,
        l.expiredLanes &= a,
        l.entangledLanes &= a,
        l.errorRecoveryDisabledLanes &= a,
        l.shellSuspendCounter = 0;
        var c = l.entanglements
          , s = l.expirationTimes
          , y = l.hiddenUpdates;
        for (a = i & ~a; 0 < a; ) {
            var p = 31 - st(a)
              , M = 1 << p;
            c[p] = 0,
            s[p] = -1;
            var g = y[p];
            if (g !== null)
                for (y[p] = null,
                p = 0; p < g.length; p++) {
                    var b = g[p];
                    b !== null && (b.lane &= -536870913)
                }
            a &= ~M
        }
        e !== 0 && Cf(l, e, 0),
        n !== 0 && u === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(i & ~t))
    }
    function Cf(l, t, a) {
        l.pendingLanes |= t,
        l.suspendedLanes &= ~t;
        var e = 31 - st(t);
        l.entangledLanes |= t,
        l.entanglements[e] = l.entanglements[e] | 1073741824 | a & 261930
    }
    function jf(l, t) {
        var a = l.entangledLanes |= t;
        for (l = l.entanglements; a; ) {
            var e = 31 - st(a)
              , u = 1 << e;
            u & t | l[e] & t && (l[e] |= t),
            a &= ~u
        }
    }
    function Rf(l, t) {
        var a = t & -t;
        return a = (a & 42) !== 0 ? 1 : ni(a),
        (a & (l.suspendedLanes | t)) !== 0 ? 0 : a
    }
    function ni(l) {
        switch (l) {
        case 2:
            l = 1;
            break;
        case 8:
            l = 4;
            break;
        case 32:
            l = 16;
            break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            l = 128;
            break;
        case 268435456:
            l = 134217728;
            break;
        default:
            l = 0
        }
        return l
    }
    function ii(l) {
        return l &= -l,
        2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }
    function Hf() {
        var l = N.p;
        return l !== 0 ? l : (l = window.event,
        l === void 0 ? 32 : pd(l.type))
    }
    function Bf(l, t) {
        var a = N.p;
        try {
            return N.p = l,
            t()
        } finally {
            N.p = a
        }
    }
    var aa = Math.random().toString(36).slice(2)
      , Kl = "__reactFiber$" + aa
      , lt = "__reactProps$" + aa
      , Wa = "__reactContainer$" + aa
      , ci = "__reactEvents$" + aa
      , u1 = "__reactListeners$" + aa
      , n1 = "__reactHandles$" + aa
      , qf = "__reactResources$" + aa
      , qe = "__reactMarker$" + aa;
    function fi(l) {
        delete l[Kl],
        delete l[lt],
        delete l[ci],
        delete l[u1],
        delete l[n1]
    }
    function $a(l) {
        var t = l[Kl];
        if (t)
            return t;
        for (var a = l.parentNode; a; ) {
            if (t = a[Wa] || a[Kl]) {
                if (a = t.alternate,
                t.child !== null || a !== null && a.child !== null)
                    for (l = nd(l); l !== null; ) {
                        if (a = l[Kl])
                            return a;
                        l = nd(l)
                    }
                return t
            }
            l = a,
            a = l.parentNode
        }
        return null
    }
    function ka(l) {
        if (l = l[Kl] || l[Wa]) {
            var t = l.tag;
            if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
                return l
        }
        return null
    }
    function Ge(l) {
        var t = l.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return l.stateNode;
        throw Error(f(33))
    }
    function Fa(l) {
        var t = l[qf];
        return t || (t = l[qf] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }),
        t
    }
    function Zl(l) {
        l[qe] = !0
    }
    var Gf = new Set
      , Yf = {};
    function Ua(l, t) {
        Ia(l, t),
        Ia(l + "Capture", t)
    }
    function Ia(l, t) {
        for (Yf[l] = t,
        l = 0; l < t.length; l++)
            Gf.add(t[l])
    }
    var i1 = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
      , Xf = {}
      , Qf = {};
    function c1(l) {
        return ti.call(Qf, l) ? !0 : ti.call(Xf, l) ? !1 : i1.test(l) ? Qf[l] = !0 : (Xf[l] = !0,
        !1)
    }
    function Bu(l, t, a) {
        if (c1(t))
            if (a === null)
                l.removeAttribute(t);
            else {
                switch (typeof a) {
                case "undefined":
                case "function":
                case "symbol":
                    l.removeAttribute(t);
                    return;
                case "boolean":
                    var e = t.toLowerCase().slice(0, 5);
                    if (e !== "data-" && e !== "aria-") {
                        l.removeAttribute(t);
                        return
                    }
                }
                l.setAttribute(t, "" + a)
            }
    }
    function qu(l, t, a) {
        if (a === null)
            l.removeAttribute(t);
        else {
            switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                l.removeAttribute(t);
                return
            }
            l.setAttribute(t, "" + a)
        }
    }
    function qt(l, t, a, e) {
        if (e === null)
            l.removeAttribute(a);
        else {
            switch (typeof e) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                l.removeAttribute(a);
                return
            }
            l.setAttributeNS(t, a, "" + e)
        }
    }
    function gt(l) {
        switch (typeof l) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return l;
        case "object":
            return l;
        default:
            return ""
        }
    }
    function Zf(l) {
        var t = l.type;
        return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }
    function f1(l, t, a) {
        var e = Object.getOwnPropertyDescriptor(l.constructor.prototype, t);
        if (!l.hasOwnProperty(t) && typeof e < "u" && typeof e.get == "function" && typeof e.set == "function") {
            var u = e.get
              , n = e.set;
            return Object.defineProperty(l, t, {
                configurable: !0,
                get: function() {
                    return u.call(this)
                },
                set: function(i) {
                    a = "" + i,
                    n.call(this, i)
                }
            }),
            Object.defineProperty(l, t, {
                enumerable: e.enumerable
            }),
            {
                getValue: function() {
                    return a
                },
                setValue: function(i) {
                    a = "" + i
                },
                stopTracking: function() {
                    l._valueTracker = null,
                    delete l[t]
                }
            }
        }
    }
    function si(l) {
        if (!l._valueTracker) {
            var t = Zf(l) ? "checked" : "value";
            l._valueTracker = f1(l, t, "" + l[t])
        }
    }
    function Lf(l) {
        if (!l)
            return !1;
        var t = l._valueTracker;
        if (!t)
            return !0;
        var a = t.getValue()
          , e = "";
        return l && (e = Zf(l) ? l.checked ? "true" : "false" : l.value),
        l = e,
        l !== a ? (t.setValue(l),
        !0) : !1
    }
    function Gu(l) {
        if (l = l || (typeof document < "u" ? document : void 0),
        typeof l > "u")
            return null;
        try {
            return l.activeElement || l.body
        } catch {
            return l.body
        }
    }
    var s1 = /[\n"\\]/g;
    function bt(l) {
        return l.replace(s1, function(t) {
            return "\\" + t.charCodeAt(0).toString(16) + " "
        })
    }
    function oi(l, t, a, e, u, n, i, c) {
        l.name = "",
        i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.type = i : l.removeAttribute("type"),
        t != null ? i === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + gt(t)) : l.value !== "" + gt(t) && (l.value = "" + gt(t)) : i !== "submit" && i !== "reset" || l.removeAttribute("value"),
        t != null ? di(l, i, gt(t)) : a != null ? di(l, i, gt(a)) : e != null && l.removeAttribute("value"),
        u == null && n != null && (l.defaultChecked = !!n),
        u != null && (l.checked = u && typeof u != "function" && typeof u != "symbol"),
        c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + gt(c) : l.removeAttribute("name")
    }
    function Vf(l, t, a, e, u, n, i, c) {
        if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n),
        t != null || a != null) {
            if (!(n !== "submit" && n !== "reset" || t != null)) {
                si(l);
                return
            }
            a = a != null ? "" + gt(a) : "",
            t = t != null ? "" + gt(t) : a,
            c || t === l.value || (l.value = t),
            l.defaultValue = t
        }
        e = e ?? u,
        e = typeof e != "function" && typeof e != "symbol" && !!e,
        l.checked = c ? l.checked : !!e,
        l.defaultChecked = !!e,
        i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (l.name = i),
        si(l)
    }
    function di(l, t, a) {
        t === "number" && Gu(l.ownerDocument) === l || l.defaultValue === "" + a || (l.defaultValue = "" + a)
    }
    function Pa(l, t, a, e) {
        if (l = l.options,
        t) {
            t = {};
            for (var u = 0; u < a.length; u++)
                t["$" + a[u]] = !0;
            for (a = 0; a < l.length; a++)
                u = t.hasOwnProperty("$" + l[a].value),
                l[a].selected !== u && (l[a].selected = u),
                u && e && (l[a].defaultSelected = !0)
        } else {
            for (a = "" + gt(a),
            t = null,
            u = 0; u < l.length; u++) {
                if (l[u].value === a) {
                    l[u].selected = !0,
                    e && (l[u].defaultSelected = !0);
                    return
                }
                t !== null || l[u].disabled || (t = l[u])
            }
            t !== null && (t.selected = !0)
        }
    }
    function Kf(l, t, a) {
        if (t != null && (t = "" + gt(t),
        t !== l.value && (l.value = t),
        a == null)) {
            l.defaultValue !== t && (l.defaultValue = t);
            return
        }
        l.defaultValue = a != null ? "" + gt(a) : ""
    }
    function Jf(l, t, a, e) {
        if (t == null) {
            if (e != null) {
                if (a != null)
                    throw Error(f(92));
                if (Ot(e)) {
                    if (1 < e.length)
                        throw Error(f(93));
                    e = e[0]
                }
                a = e
            }
            a == null && (a = ""),
            t = a
        }
        a = gt(t),
        l.defaultValue = a,
        e = l.textContent,
        e === a && e !== "" && e !== null && (l.value = e),
        si(l)
    }
    function le(l, t) {
        if (t) {
            var a = l.firstChild;
            if (a && a === l.lastChild && a.nodeType === 3) {
                a.nodeValue = t;
                return
            }
        }
        l.textContent = t
    }
    var o1 = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function wf(l, t, a) {
        var e = t.indexOf("--") === 0;
        a == null || typeof a == "boolean" || a === "" ? e ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : e ? l.setProperty(t, a) : typeof a != "number" || a === 0 || o1.has(t) ? t === "float" ? l.cssFloat = a : l[t] = ("" + a).trim() : l[t] = a + "px"
    }
    function Wf(l, t, a) {
        if (t != null && typeof t != "object")
            throw Error(f(62));
        if (l = l.style,
        a != null) {
            for (var e in a)
                !a.hasOwnProperty(e) || t != null && t.hasOwnProperty(e) || (e.indexOf("--") === 0 ? l.setProperty(e, "") : e === "float" ? l.cssFloat = "" : l[e] = "");
            for (var u in t)
                e = t[u],
                t.hasOwnProperty(u) && a[u] !== e && wf(l, u, e)
        } else
            for (var n in t)
                t.hasOwnProperty(n) && wf(l, n, t[n])
    }
    function mi(l) {
        if (l.indexOf("-") === -1)
            return !1;
        switch (l) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
        }
    }
    var d1 = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
      , m1 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Yu(l) {
        return m1.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l
    }
    function Gt() {}
    var ri = null;
    function hi(l) {
        return l = l.target || l.srcElement || window,
        l.correspondingUseElement && (l = l.correspondingUseElement),
        l.nodeType === 3 ? l.parentNode : l
    }
    var te = null
      , ae = null;
    function $f(l) {
        var t = ka(l);
        if (t && (l = t.stateNode)) {
            var a = l[lt] || null;
            l: switch (l = t.stateNode,
            t.type) {
            case "input":
                if (oi(l, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name),
                t = a.name,
                a.type === "radio" && t != null) {
                    for (a = l; a.parentNode; )
                        a = a.parentNode;
                    for (a = a.querySelectorAll('input[name="' + bt("" + t) + '"][type="radio"]'),
                    t = 0; t < a.length; t++) {
                        var e = a[t];
                        if (e !== l && e.form === l.form) {
                            var u = e[lt] || null;
                            if (!u)
                                throw Error(f(90));
                            oi(e, u.value, u.defaultValue, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name)
                        }
                    }
                    for (t = 0; t < a.length; t++)
                        e = a[t],
                        e.form === l.form && Lf(e)
                }
                break l;
            case "textarea":
                Kf(l, a.value, a.defaultValue);
                break l;
            case "select":
                t = a.value,
                t != null && Pa(l, !!a.multiple, t, !1)
            }
        }
    }
    var vi = !1;
    function kf(l, t, a) {
        if (vi)
            return l(t, a);
        vi = !0;
        try {
            var e = l(t);
            return e
        } finally {
            if (vi = !1,
            (te !== null || ae !== null) && (xn(),
            te && (t = te,
            l = ae,
            ae = te = null,
            $f(t),
            l)))
                for (t = 0; t < l.length; t++)
                    $f(l[t])
        }
    }
    function Ye(l, t) {
        var a = l.stateNode;
        if (a === null)
            return null;
        var e = a[lt] || null;
        if (e === null)
            return null;
        a = e[t];
        l: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (e = !e.disabled) || (l = l.type,
            e = !(l === "button" || l === "input" || l === "select" || l === "textarea")),
            l = !e;
            break l;
        default:
            l = !1
        }
        if (l)
            return null;
        if (a && typeof a != "function")
            throw Error(f(231, t, typeof a));
        return a
    }
    var Yt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , yi = !1;
    if (Yt)
        try {
            var Xe = {};
            Object.defineProperty(Xe, "passive", {
                get: function() {
                    yi = !0
                }
            }),
            window.addEventListener("test", Xe, Xe),
            window.removeEventListener("test", Xe, Xe)
        } catch {
            yi = !1
        }
    var ea = null
      , gi = null
      , Xu = null;
    function Ff() {
        if (Xu)
            return Xu;
        var l, t = gi, a = t.length, e, u = "value" in ea ? ea.value : ea.textContent, n = u.length;
        for (l = 0; l < a && t[l] === u[l]; l++)
            ;
        var i = a - l;
        for (e = 1; e <= i && t[a - e] === u[n - e]; e++)
            ;
        return Xu = u.slice(l, 1 < e ? 1 - e : void 0)
    }
    function Qu(l) {
        var t = l.keyCode;
        return "charCode" in l ? (l = l.charCode,
        l === 0 && t === 13 && (l = 13)) : l = t,
        l === 10 && (l = 13),
        32 <= l || l === 13 ? l : 0
    }
    function Zu() {
        return !0
    }
    function If() {
        return !1
    }
    function tt(l) {
        function t(a, e, u, n, i) {
            this._reactName = a,
            this._targetInst = u,
            this.type = e,
            this.nativeEvent = n,
            this.target = i,
            this.currentTarget = null;
            for (var c in l)
                l.hasOwnProperty(c) && (a = l[c],
                this[c] = a ? a(n) : n[c]);
            return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? Zu : If,
            this.isPropagationStopped = If,
            this
        }
        return H(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var a = this.nativeEvent;
                a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1),
                this.isDefaultPrevented = Zu)
            },
            stopPropagation: function() {
                var a = this.nativeEvent;
                a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
                this.isPropagationStopped = Zu)
            },
            persist: function() {},
            isPersistent: Zu
        }),
        t
    }
    var Na = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(l) {
            return l.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, Lu = tt(Na), Qe = H({}, Na, {
        view: 0,
        detail: 0
    }), r1 = tt(Qe), bi, Si, Ze, Vu = H({}, Qe, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: pi,
        button: 0,
        buttons: 0,
        relatedTarget: function(l) {
            return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget
        },
        movementX: function(l) {
            return "movementX" in l ? l.movementX : (l !== Ze && (Ze && l.type === "mousemove" ? (bi = l.screenX - Ze.screenX,
            Si = l.screenY - Ze.screenY) : Si = bi = 0,
            Ze = l),
            bi)
        },
        movementY: function(l) {
            return "movementY" in l ? l.movementY : Si
        }
    }), Pf = tt(Vu), h1 = H({}, Vu, {
        dataTransfer: 0
    }), v1 = tt(h1), y1 = H({}, Qe, {
        relatedTarget: 0
    }), zi = tt(y1), g1 = H({}, Na, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), b1 = tt(g1), S1 = H({}, Na, {
        clipboardData: function(l) {
            return "clipboardData" in l ? l.clipboardData : window.clipboardData
        }
    }), z1 = tt(S1), p1 = H({}, Na, {
        data: 0
    }), ls = tt(p1), E1 = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, T1 = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, A1 = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function _1(l) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(l) : (l = A1[l]) ? !!t[l] : !1
    }
    function pi() {
        return _1
    }
    var M1 = H({}, Qe, {
        key: function(l) {
            if (l.key) {
                var t = E1[l.key] || l.key;
                if (t !== "Unidentified")
                    return t
            }
            return l.type === "keypress" ? (l = Qu(l),
            l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? T1[l.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: pi,
        charCode: function(l) {
            return l.type === "keypress" ? Qu(l) : 0
        },
        keyCode: function(l) {
            return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0
        },
        which: function(l) {
            return l.type === "keypress" ? Qu(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0
        }
    })
      , x1 = tt(M1)
      , O1 = H({}, Vu, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , ts = tt(O1)
      , D1 = H({}, Qe, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: pi
    })
      , U1 = tt(D1)
      , N1 = H({}, Na, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , C1 = tt(N1)
      , j1 = H({}, Vu, {
        deltaX: function(l) {
            return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0
        },
        deltaY: function(l) {
            return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , R1 = tt(j1)
      , H1 = H({}, Na, {
        newState: 0,
        oldState: 0
    })
      , B1 = tt(H1)
      , q1 = [9, 13, 27, 32]
      , Ei = Yt && "CompositionEvent" in window
      , Le = null;
    Yt && "documentMode" in document && (Le = document.documentMode);
    var G1 = Yt && "TextEvent" in window && !Le
      , as = Yt && (!Ei || Le && 8 < Le && 11 >= Le)
      , es = " "
      , us = !1;
    function ns(l, t) {
        switch (l) {
        case "keyup":
            return q1.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function is(l) {
        return l = l.detail,
        typeof l == "object" && "data" in l ? l.data : null
    }
    var ee = !1;
    function Y1(l, t) {
        switch (l) {
        case "compositionend":
            return is(t);
        case "keypress":
            return t.which !== 32 ? null : (us = !0,
            es);
        case "textInput":
            return l = t.data,
            l === es && us ? null : l;
        default:
            return null
        }
    }
    function X1(l, t) {
        if (ee)
            return l === "compositionend" || !Ei && ns(l, t) ? (l = Ff(),
            Xu = gi = ea = null,
            ee = !1,
            l) : null;
        switch (l) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length)
                    return t.char;
                if (t.which)
                    return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return as && t.locale !== "ko" ? null : t.data;
        default:
            return null
        }
    }
    var Q1 = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function cs(l) {
        var t = l && l.nodeName && l.nodeName.toLowerCase();
        return t === "input" ? !!Q1[l.type] : t === "textarea"
    }
    function fs(l, t, a, e) {
        te ? ae ? ae.push(e) : ae = [e] : te = e,
        t = Rn(t, "onChange"),
        0 < t.length && (a = new Lu("onChange","change",null,a,e),
        l.push({
            event: a,
            listeners: t
        }))
    }
    var Ve = null
      , Ke = null;
    function Z1(l) {
        K0(l, 0)
    }
    function Ku(l) {
        var t = Ge(l);
        if (Lf(t))
            return l
    }
    function ss(l, t) {
        if (l === "change")
            return t
    }
    var os = !1;
    if (Yt) {
        var Ti;
        if (Yt) {
            var Ai = "oninput" in document;
            if (!Ai) {
                var ds = document.createElement("div");
                ds.setAttribute("oninput", "return;"),
                Ai = typeof ds.oninput == "function"
            }
            Ti = Ai
        } else
            Ti = !1;
        os = Ti && (!document.documentMode || 9 < document.documentMode)
    }
    function ms() {
        Ve && (Ve.detachEvent("onpropertychange", rs),
        Ke = Ve = null)
    }
    function rs(l) {
        if (l.propertyName === "value" && Ku(Ke)) {
            var t = [];
            fs(t, Ke, l, hi(l)),
            kf(Z1, t)
        }
    }
    function L1(l, t, a) {
        l === "focusin" ? (ms(),
        Ve = t,
        Ke = a,
        Ve.attachEvent("onpropertychange", rs)) : l === "focusout" && ms()
    }
    function V1(l) {
        if (l === "selectionchange" || l === "keyup" || l === "keydown")
            return Ku(Ke)
    }
    function K1(l, t) {
        if (l === "click")
            return Ku(t)
    }
    function J1(l, t) {
        if (l === "input" || l === "change")
            return Ku(t)
    }
    function w1(l, t) {
        return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t
    }
    var ot = typeof Object.is == "function" ? Object.is : w1;
    function Je(l, t) {
        if (ot(l, t))
            return !0;
        if (typeof l != "object" || l === null || typeof t != "object" || t === null)
            return !1;
        var a = Object.keys(l)
          , e = Object.keys(t);
        if (a.length !== e.length)
            return !1;
        for (e = 0; e < a.length; e++) {
            var u = a[e];
            if (!ti.call(t, u) || !ot(l[u], t[u]))
                return !1
        }
        return !0
    }
    function hs(l) {
        for (; l && l.firstChild; )
            l = l.firstChild;
        return l
    }
    function vs(l, t) {
        var a = hs(l);
        l = 0;
        for (var e; a; ) {
            if (a.nodeType === 3) {
                if (e = l + a.textContent.length,
                l <= t && e >= t)
                    return {
                        node: a,
                        offset: t - l
                    };
                l = e
            }
            l: {
                for (; a; ) {
                    if (a.nextSibling) {
                        a = a.nextSibling;
                        break l
                    }
                    a = a.parentNode
                }
                a = void 0
            }
            a = hs(a)
        }
    }
    function ys(l, t) {
        return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ys(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1
    }
    function gs(l) {
        l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
        for (var t = Gu(l.document); t instanceof l.HTMLIFrameElement; ) {
            try {
                var a = typeof t.contentWindow.location.href == "string"
            } catch {
                a = !1
            }
            if (a)
                l = t.contentWindow;
            else
                break;
            t = Gu(l.document)
        }
        return t
    }
    function _i(l) {
        var t = l && l.nodeName && l.nodeName.toLowerCase();
        return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true")
    }
    var W1 = Yt && "documentMode" in document && 11 >= document.documentMode
      , ue = null
      , Mi = null
      , we = null
      , xi = !1;
    function bs(l, t, a) {
        var e = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
        xi || ue == null || ue !== Gu(e) || (e = ue,
        "selectionStart" in e && _i(e) ? e = {
            start: e.selectionStart,
            end: e.selectionEnd
        } : (e = (e.ownerDocument && e.ownerDocument.defaultView || window).getSelection(),
        e = {
            anchorNode: e.anchorNode,
            anchorOffset: e.anchorOffset,
            focusNode: e.focusNode,
            focusOffset: e.focusOffset
        }),
        we && Je(we, e) || (we = e,
        e = Rn(Mi, "onSelect"),
        0 < e.length && (t = new Lu("onSelect","select",null,t,a),
        l.push({
            event: t,
            listeners: e
        }),
        t.target = ue)))
    }
    function Ca(l, t) {
        var a = {};
        return a[l.toLowerCase()] = t.toLowerCase(),
        a["Webkit" + l] = "webkit" + t,
        a["Moz" + l] = "moz" + t,
        a
    }
    var ne = {
        animationend: Ca("Animation", "AnimationEnd"),
        animationiteration: Ca("Animation", "AnimationIteration"),
        animationstart: Ca("Animation", "AnimationStart"),
        transitionrun: Ca("Transition", "TransitionRun"),
        transitionstart: Ca("Transition", "TransitionStart"),
        transitioncancel: Ca("Transition", "TransitionCancel"),
        transitionend: Ca("Transition", "TransitionEnd")
    }
      , Oi = {}
      , Ss = {};
    Yt && (Ss = document.createElement("div").style,
    "AnimationEvent" in window || (delete ne.animationend.animation,
    delete ne.animationiteration.animation,
    delete ne.animationstart.animation),
    "TransitionEvent" in window || delete ne.transitionend.transition);
    function ja(l) {
        if (Oi[l])
            return Oi[l];
        if (!ne[l])
            return l;
        var t = ne[l], a;
        for (a in t)
            if (t.hasOwnProperty(a) && a in Ss)
                return Oi[l] = t[a];
        return l
    }
    var zs = ja("animationend")
      , ps = ja("animationiteration")
      , Es = ja("animationstart")
      , $1 = ja("transitionrun")
      , k1 = ja("transitionstart")
      , F1 = ja("transitioncancel")
      , Ts = ja("transitionend")
      , As = new Map
      , Di = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Di.push("scrollEnd");
    function Dt(l, t) {
        As.set(l, t),
        Ua(t, [l])
    }
    var Ju = typeof reportError == "function" ? reportError : function(l) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var t = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
                error: l
            });
            if (!window.dispatchEvent(t))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", l);
            return
        }
        console.error(l)
    }
      , St = []
      , ie = 0
      , Ui = 0;
    function wu() {
        for (var l = ie, t = Ui = ie = 0; t < l; ) {
            var a = St[t];
            St[t++] = null;
            var e = St[t];
            St[t++] = null;
            var u = St[t];
            St[t++] = null;
            var n = St[t];
            if (St[t++] = null,
            e !== null && u !== null) {
                var i = e.pending;
                i === null ? u.next = u : (u.next = i.next,
                i.next = u),
                e.pending = u
            }
            n !== 0 && _s(a, u, n)
        }
    }
    function Wu(l, t, a, e) {
        St[ie++] = l,
        St[ie++] = t,
        St[ie++] = a,
        St[ie++] = e,
        Ui |= e,
        l.lanes |= e,
        l = l.alternate,
        l !== null && (l.lanes |= e)
    }
    function Ni(l, t, a, e) {
        return Wu(l, t, a, e),
        $u(l)
    }
    function Ra(l, t) {
        return Wu(l, null, null, t),
        $u(l)
    }
    function _s(l, t, a) {
        l.lanes |= a;
        var e = l.alternate;
        e !== null && (e.lanes |= a);
        for (var u = !1, n = l.return; n !== null; )
            n.childLanes |= a,
            e = n.alternate,
            e !== null && (e.childLanes |= a),
            n.tag === 22 && (l = n.stateNode,
            l === null || l._visibility & 1 || (u = !0)),
            l = n,
            n = n.return;
        return l.tag === 3 ? (n = l.stateNode,
        u && t !== null && (u = 31 - st(a),
        l = n.hiddenUpdates,
        e = l[u],
        e === null ? l[u] = [t] : e.push(t),
        t.lane = a | 536870912),
        n) : null
    }
    function $u(l) {
        if (50 < vu)
            throw vu = 0,
            Xc = null,
            Error(f(185));
        for (var t = l.return; t !== null; )
            l = t,
            t = l.return;
        return l.tag === 3 ? l.stateNode : null
    }
    var ce = {};
    function I1(l, t, a, e) {
        this.tag = l,
        this.key = a,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.refCleanup = this.ref = null,
        this.pendingProps = t,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = e,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function dt(l, t, a, e) {
        return new I1(l,t,a,e)
    }
    function Ci(l) {
        return l = l.prototype,
        !(!l || !l.isReactComponent)
    }
    function Xt(l, t) {
        var a = l.alternate;
        return a === null ? (a = dt(l.tag, t, l.key, l.mode),
        a.elementType = l.elementType,
        a.type = l.type,
        a.stateNode = l.stateNode,
        a.alternate = l,
        l.alternate = a) : (a.pendingProps = t,
        a.type = l.type,
        a.flags = 0,
        a.subtreeFlags = 0,
        a.deletions = null),
        a.flags = l.flags & 65011712,
        a.childLanes = l.childLanes,
        a.lanes = l.lanes,
        a.child = l.child,
        a.memoizedProps = l.memoizedProps,
        a.memoizedState = l.memoizedState,
        a.updateQueue = l.updateQueue,
        t = l.dependencies,
        a.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        },
        a.sibling = l.sibling,
        a.index = l.index,
        a.ref = l.ref,
        a.refCleanup = l.refCleanup,
        a
    }
    function Ms(l, t) {
        l.flags &= 65011714;
        var a = l.alternate;
        return a === null ? (l.childLanes = 0,
        l.lanes = t,
        l.child = null,
        l.subtreeFlags = 0,
        l.memoizedProps = null,
        l.memoizedState = null,
        l.updateQueue = null,
        l.dependencies = null,
        l.stateNode = null) : (l.childLanes = a.childLanes,
        l.lanes = a.lanes,
        l.child = a.child,
        l.subtreeFlags = 0,
        l.deletions = null,
        l.memoizedProps = a.memoizedProps,
        l.memoizedState = a.memoizedState,
        l.updateQueue = a.updateQueue,
        l.type = a.type,
        t = a.dependencies,
        l.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }),
        l
    }
    function ku(l, t, a, e, u, n) {
        var i = 0;
        if (e = l,
        typeof l == "function")
            Ci(l) && (i = 1);
        else if (typeof l == "string")
            i = er(l, a, R.current) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
        else
            l: switch (l) {
            case El:
                return l = dt(31, a, t, u),
                l.elementType = El,
                l.lanes = n,
                l;
            case F:
                return Ha(a.children, u, n, t);
            case L:
                i = 8,
                u |= 24;
                break;
            case al:
                return l = dt(12, a, t, u | 2),
                l.elementType = al,
                l.lanes = n,
                l;
            case Vl:
                return l = dt(13, a, t, u),
                l.elementType = Vl,
                l.lanes = n,
                l;
            case Ol:
                return l = dt(19, a, t, u),
                l.elementType = Ol,
                l.lanes = n,
                l;
            default:
                if (typeof l == "object" && l !== null)
                    switch (l.$$typeof) {
                    case sl:
                        i = 10;
                        break l;
                    case pl:
                        i = 9;
                        break l;
                    case xl:
                        i = 11;
                        break l;
                    case I:
                        i = 14;
                        break l;
                    case il:
                        i = 16,
                        e = null;
                        break l
                    }
                i = 29,
                a = Error(f(130, l === null ? "null" : typeof l, "")),
                e = null
            }
        return t = dt(i, a, t, u),
        t.elementType = l,
        t.type = e,
        t.lanes = n,
        t
    }
    function Ha(l, t, a, e) {
        return l = dt(7, l, e, t),
        l.lanes = a,
        l
    }
    function ji(l, t, a) {
        return l = dt(6, l, null, t),
        l.lanes = a,
        l
    }
    function xs(l) {
        var t = dt(18, null, null, 0);
        return t.stateNode = l,
        t
    }
    function Ri(l, t, a) {
        return t = dt(4, l.children !== null ? l.children : [], l.key, t),
        t.lanes = a,
        t.stateNode = {
            containerInfo: l.containerInfo,
            pendingChildren: null,
            implementation: l.implementation
        },
        t
    }
    var Os = new WeakMap;
    function zt(l, t) {
        if (typeof l == "object" && l !== null) {
            var a = Os.get(l);
            return a !== void 0 ? a : (t = {
                value: l,
                source: t,
                stack: xf(t)
            },
            Os.set(l, t),
            t)
        }
        return {
            value: l,
            source: t,
            stack: xf(t)
        }
    }
    var fe = []
      , se = 0
      , Fu = null
      , We = 0
      , pt = []
      , Et = 0
      , ua = null
      , Ct = 1
      , jt = "";
    function Qt(l, t) {
        fe[se++] = We,
        fe[se++] = Fu,
        Fu = l,
        We = t
    }
    function Ds(l, t, a) {
        pt[Et++] = Ct,
        pt[Et++] = jt,
        pt[Et++] = ua,
        ua = l;
        var e = Ct;
        l = jt;
        var u = 32 - st(e) - 1;
        e &= ~(1 << u),
        a += 1;
        var n = 32 - st(t) + u;
        if (30 < n) {
            var i = u - u % 5;
            n = (e & (1 << i) - 1).toString(32),
            e >>= i,
            u -= i,
            Ct = 1 << 32 - st(t) + u | a << u | e,
            jt = n + l
        } else
            Ct = 1 << n | a << u | e,
            jt = l
    }
    function Hi(l) {
        l.return !== null && (Qt(l, 1),
        Ds(l, 1, 0))
    }
    function Bi(l) {
        for (; l === Fu; )
            Fu = fe[--se],
            fe[se] = null,
            We = fe[--se],
            fe[se] = null;
        for (; l === ua; )
            ua = pt[--Et],
            pt[Et] = null,
            jt = pt[--Et],
            pt[Et] = null,
            Ct = pt[--Et],
            pt[Et] = null
    }
    function Us(l, t) {
        pt[Et++] = Ct,
        pt[Et++] = jt,
        pt[Et++] = ua,
        Ct = t.id,
        jt = t.overflow,
        ua = l
    }
    var Jl = null
      , Tl = null
      , nl = !1
      , na = null
      , Tt = !1
      , qi = Error(f(519));
    function ia(l) {
        var t = Error(f(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
        throw $e(zt(t, l)),
        qi
    }
    function Ns(l) {
        var t = l.stateNode
          , a = l.type
          , e = l.memoizedProps;
        switch (t[Kl] = l,
        t[lt] = e,
        a) {
        case "dialog":
            tl("cancel", t),
            tl("close", t);
            break;
        case "iframe":
        case "object":
        case "embed":
            tl("load", t);
            break;
        case "video":
        case "audio":
            for (a = 0; a < gu.length; a++)
                tl(gu[a], t);
            break;
        case "source":
            tl("error", t);
            break;
        case "img":
        case "image":
        case "link":
            tl("error", t),
            tl("load", t);
            break;
        case "details":
            tl("toggle", t);
            break;
        case "input":
            tl("invalid", t),
            Vf(t, e.value, e.defaultValue, e.checked, e.defaultChecked, e.type, e.name, !0);
            break;
        case "select":
            tl("invalid", t);
            break;
        case "textarea":
            tl("invalid", t),
            Jf(t, e.value, e.defaultValue, e.children)
        }
        a = e.children,
        typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || e.suppressHydrationWarning === !0 || $0(t.textContent, a) ? (e.popover != null && (tl("beforetoggle", t),
        tl("toggle", t)),
        e.onScroll != null && tl("scroll", t),
        e.onScrollEnd != null && tl("scrollend", t),
        e.onClick != null && (t.onclick = Gt),
        t = !0) : t = !1,
        t || ia(l, !0)
    }
    function Cs(l) {
        for (Jl = l.return; Jl; )
            switch (Jl.tag) {
            case 5:
            case 31:
            case 13:
                Tt = !1;
                return;
            case 27:
            case 3:
                Tt = !0;
                return;
            default:
                Jl = Jl.return
            }
    }
    function oe(l) {
        if (l !== Jl)
            return !1;
        if (!nl)
            return Cs(l),
            nl = !0,
            !1;
        var t = l.tag, a;
        if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = l.type,
        a = !(a !== "form" && a !== "button") || tf(l.type, l.memoizedProps)),
        a = !a),
        a && Tl && ia(l),
        Cs(l),
        t === 13) {
            if (l = l.memoizedState,
            l = l !== null ? l.dehydrated : null,
            !l)
                throw Error(f(317));
            Tl = ud(l)
        } else if (t === 31) {
            if (l = l.memoizedState,
            l = l !== null ? l.dehydrated : null,
            !l)
                throw Error(f(317));
            Tl = ud(l)
        } else
            t === 27 ? (t = Tl,
            za(l.type) ? (l = cf,
            cf = null,
            Tl = l) : Tl = t) : Tl = Jl ? _t(l.stateNode.nextSibling) : null;
        return !0
    }
    function Ba() {
        Tl = Jl = null,
        nl = !1
    }
    function Gi() {
        var l = na;
        return l !== null && (nt === null ? nt = l : nt.push.apply(nt, l),
        na = null),
        l
    }
    function $e(l) {
        na === null ? na = [l] : na.push(l)
    }
    var Yi = d(null)
      , qa = null
      , Zt = null;
    function ca(l, t, a) {
        C(Yi, t._currentValue),
        t._currentValue = a
    }
    function Lt(l) {
        l._currentValue = Yi.current,
        x(Yi)
    }
    function Xi(l, t, a) {
        for (; l !== null; ) {
            var e = l.alternate;
            if ((l.childLanes & t) !== t ? (l.childLanes |= t,
            e !== null && (e.childLanes |= t)) : e !== null && (e.childLanes & t) !== t && (e.childLanes |= t),
            l === a)
                break;
            l = l.return
        }
    }
    function Qi(l, t, a, e) {
        var u = l.child;
        for (u !== null && (u.return = l); u !== null; ) {
            var n = u.dependencies;
            if (n !== null) {
                var i = u.child;
                n = n.firstContext;
                l: for (; n !== null; ) {
                    var c = n;
                    n = u;
                    for (var s = 0; s < t.length; s++)
                        if (c.context === t[s]) {
                            n.lanes |= a,
                            c = n.alternate,
                            c !== null && (c.lanes |= a),
                            Xi(n.return, a, l),
                            e || (i = null);
                            break l
                        }
                    n = c.next
                }
            } else if (u.tag === 18) {
                if (i = u.return,
                i === null)
                    throw Error(f(341));
                i.lanes |= a,
                n = i.alternate,
                n !== null && (n.lanes |= a),
                Xi(i, a, l),
                i = null
            } else
                i = u.child;
            if (i !== null)
                i.return = u;
            else
                for (i = u; i !== null; ) {
                    if (i === l) {
                        i = null;
                        break
                    }
                    if (u = i.sibling,
                    u !== null) {
                        u.return = i.return,
                        i = u;
                        break
                    }
                    i = i.return
                }
            u = i
        }
    }
    function de(l, t, a, e) {
        l = null;
        for (var u = t, n = !1; u !== null; ) {
            if (!n) {
                if ((u.flags & 524288) !== 0)
                    n = !0;
                else if ((u.flags & 262144) !== 0)
                    break
            }
            if (u.tag === 10) {
                var i = u.alternate;
                if (i === null)
                    throw Error(f(387));
                if (i = i.memoizedProps,
                i !== null) {
                    var c = u.type;
                    ot(u.pendingProps.value, i.value) || (l !== null ? l.push(c) : l = [c])
                }
            } else if (u === ml.current) {
                if (i = u.alternate,
                i === null)
                    throw Error(f(387));
                i.memoizedState.memoizedState !== u.memoizedState.memoizedState && (l !== null ? l.push(Eu) : l = [Eu])
            }
            u = u.return
        }
        l !== null && Qi(t, l, a, e),
        t.flags |= 262144
    }
    function Iu(l) {
        for (l = l.firstContext; l !== null; ) {
            if (!ot(l.context._currentValue, l.memoizedValue))
                return !0;
            l = l.next
        }
        return !1
    }
    function Ga(l) {
        qa = l,
        Zt = null,
        l = l.dependencies,
        l !== null && (l.firstContext = null)
    }
    function wl(l) {
        return js(qa, l)
    }
    function Pu(l, t) {
        return qa === null && Ga(l),
        js(l, t)
    }
    function js(l, t) {
        var a = t._currentValue;
        if (t = {
            context: t,
            memoizedValue: a,
            next: null
        },
        Zt === null) {
            if (l === null)
                throw Error(f(308));
            Zt = t,
            l.dependencies = {
                lanes: 0,
                firstContext: t
            },
            l.flags |= 524288
        } else
            Zt = Zt.next = t;
        return a
    }
    var P1 = typeof AbortController < "u" ? AbortController : function() {
        var l = []
          , t = this.signal = {
            aborted: !1,
            addEventListener: function(a, e) {
                l.push(e)
            }
        };
        this.abort = function() {
            t.aborted = !0,
            l.forEach(function(a) {
                return a()
            })
        }
    }
      , lm = r.unstable_scheduleCallback
      , tm = r.unstable_NormalPriority
      , Bl = {
        $$typeof: sl,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
    };
    function Zi() {
        return {
            controller: new P1,
            data: new Map,
            refCount: 0
        }
    }
    function ke(l) {
        l.refCount--,
        l.refCount === 0 && lm(tm, function() {
            l.controller.abort()
        })
    }
    var Fe = null
      , Li = 0
      , me = 0
      , re = null;
    function am(l, t) {
        if (Fe === null) {
            var a = Fe = [];
            Li = 0,
            me = Jc(),
            re = {
                status: "pending",
                value: void 0,
                then: function(e) {
                    a.push(e)
                }
            }
        }
        return Li++,
        t.then(Rs, Rs),
        t
    }
    function Rs() {
        if (--Li === 0 && Fe !== null) {
            re !== null && (re.status = "fulfilled");
            var l = Fe;
            Fe = null,
            me = 0,
            re = null;
            for (var t = 0; t < l.length; t++)
                (0,
                l[t])()
        }
    }
    function em(l, t) {
        var a = []
          , e = {
            status: "pending",
            value: null,
            reason: null,
            then: function(u) {
                a.push(u)
            }
        };
        return l.then(function() {
            e.status = "fulfilled",
            e.value = t;
            for (var u = 0; u < a.length; u++)
                (0,
                a[u])(t)
        }, function(u) {
            for (e.status = "rejected",
            e.reason = u,
            u = 0; u < a.length; u++)
                (0,
                a[u])(void 0)
        }),
        e
    }
    var Hs = T.S;
    T.S = function(l, t) {
        S0 = ct(),
        typeof t == "object" && t !== null && typeof t.then == "function" && am(l, t),
        Hs !== null && Hs(l, t)
    }
    ;
    var Ya = d(null);
    function Vi() {
        var l = Ya.current;
        return l !== null ? l : zl.pooledCache
    }
    function ln(l, t) {
        t === null ? C(Ya, Ya.current) : C(Ya, t.pool)
    }
    function Bs() {
        var l = Vi();
        return l === null ? null : {
            parent: Bl._currentValue,
            pool: l
        }
    }
    var he = Error(f(460))
      , Ki = Error(f(474))
      , tn = Error(f(542))
      , an = {
        then: function() {}
    };
    function qs(l) {
        return l = l.status,
        l === "fulfilled" || l === "rejected"
    }
    function Gs(l, t, a) {
        switch (a = l[a],
        a === void 0 ? l.push(t) : a !== t && (t.then(Gt, Gt),
        t = a),
        t.status) {
        case "fulfilled":
            return t.value;
        case "rejected":
            throw l = t.reason,
            Xs(l),
            l;
        default:
            if (typeof t.status == "string")
                t.then(Gt, Gt);
            else {
                if (l = zl,
                l !== null && 100 < l.shellSuspendCounter)
                    throw Error(f(482));
                l = t,
                l.status = "pending",
                l.then(function(e) {
                    if (t.status === "pending") {
                        var u = t;
                        u.status = "fulfilled",
                        u.value = e
                    }
                }, function(e) {
                    if (t.status === "pending") {
                        var u = t;
                        u.status = "rejected",
                        u.reason = e
                    }
                })
            }
            switch (t.status) {
            case "fulfilled":
                return t.value;
            case "rejected":
                throw l = t.reason,
                Xs(l),
                l
            }
            throw Qa = t,
            he
        }
    }
    function Xa(l) {
        try {
            var t = l._init;
            return t(l._payload)
        } catch (a) {
            throw a !== null && typeof a == "object" && typeof a.then == "function" ? (Qa = a,
            he) : a
        }
    }
    var Qa = null;
    function Ys() {
        if (Qa === null)
            throw Error(f(459));
        var l = Qa;
        return Qa = null,
        l
    }
    function Xs(l) {
        if (l === he || l === tn)
            throw Error(f(483))
    }
    var ve = null
      , Ie = 0;
    function en(l) {
        var t = Ie;
        return Ie += 1,
        ve === null && (ve = []),
        Gs(ve, l, t)
    }
    function Pe(l, t) {
        t = t.props.ref,
        l.ref = t !== void 0 ? t : null
    }
    function un(l, t) {
        throw t.$$typeof === S ? Error(f(525)) : (l = Object.prototype.toString.call(t),
        Error(f(31, l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l)))
    }
    function Qs(l) {
        function t(m, o) {
            if (l) {
                var v = m.deletions;
                v === null ? (m.deletions = [o],
                m.flags |= 16) : v.push(o)
            }
        }
        function a(m, o) {
            if (!l)
                return null;
            for (; o !== null; )
                t(m, o),
                o = o.sibling;
            return null
        }
        function e(m) {
            for (var o = new Map; m !== null; )
                m.key !== null ? o.set(m.key, m) : o.set(m.index, m),
                m = m.sibling;
            return o
        }
        function u(m, o) {
            return m = Xt(m, o),
            m.index = 0,
            m.sibling = null,
            m
        }
        function n(m, o, v) {
            return m.index = v,
            l ? (v = m.alternate,
            v !== null ? (v = v.index,
            v < o ? (m.flags |= 67108866,
            o) : v) : (m.flags |= 67108866,
            o)) : (m.flags |= 1048576,
            o)
        }
        function i(m) {
            return l && m.alternate === null && (m.flags |= 67108866),
            m
        }
        function c(m, o, v, _) {
            return o === null || o.tag !== 6 ? (o = ji(v, m.mode, _),
            o.return = m,
            o) : (o = u(o, v),
            o.return = m,
            o)
        }
        function s(m, o, v, _) {
            var Y = v.type;
            return Y === F ? p(m, o, v.props.children, _, v.key) : o !== null && (o.elementType === Y || typeof Y == "object" && Y !== null && Y.$$typeof === il && Xa(Y) === o.type) ? (o = u(o, v.props),
            Pe(o, v),
            o.return = m,
            o) : (o = ku(v.type, v.key, v.props, null, m.mode, _),
            Pe(o, v),
            o.return = m,
            o)
        }
        function y(m, o, v, _) {
            return o === null || o.tag !== 4 || o.stateNode.containerInfo !== v.containerInfo || o.stateNode.implementation !== v.implementation ? (o = Ri(v, m.mode, _),
            o.return = m,
            o) : (o = u(o, v.children || []),
            o.return = m,
            o)
        }
        function p(m, o, v, _, Y) {
            return o === null || o.tag !== 7 ? (o = Ha(v, m.mode, _, Y),
            o.return = m,
            o) : (o = u(o, v),
            o.return = m,
            o)
        }
        function M(m, o, v) {
            if (typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint")
                return o = ji("" + o, m.mode, v),
                o.return = m,
                o;
            if (typeof o == "object" && o !== null) {
                switch (o.$$typeof) {
                case k:
                    return v = ku(o.type, o.key, o.props, null, m.mode, v),
                    Pe(v, o),
                    v.return = m,
                    v;
                case G:
                    return o = Ri(o, m.mode, v),
                    o.return = m,
                    o;
                case il:
                    return o = Xa(o),
                    M(m, o, v)
                }
                if (Ot(o) || Hl(o))
                    return o = Ha(o, m.mode, v, null),
                    o.return = m,
                    o;
                if (typeof o.then == "function")
                    return M(m, en(o), v);
                if (o.$$typeof === sl)
                    return M(m, Pu(m, o), v);
                un(m, o)
            }
            return null
        }
        function g(m, o, v, _) {
            var Y = o !== null ? o.key : null;
            if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint")
                return Y !== null ? null : c(m, o, "" + v, _);
            if (typeof v == "object" && v !== null) {
                switch (v.$$typeof) {
                case k:
                    return v.key === Y ? s(m, o, v, _) : null;
                case G:
                    return v.key === Y ? y(m, o, v, _) : null;
                case il:
                    return v = Xa(v),
                    g(m, o, v, _)
                }
                if (Ot(v) || Hl(v))
                    return Y !== null ? null : p(m, o, v, _, null);
                if (typeof v.then == "function")
                    return g(m, o, en(v), _);
                if (v.$$typeof === sl)
                    return g(m, o, Pu(m, v), _);
                un(m, v)
            }
            return null
        }
        function b(m, o, v, _, Y) {
            if (typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint")
                return m = m.get(v) || null,
                c(o, m, "" + _, Y);
            if (typeof _ == "object" && _ !== null) {
                switch (_.$$typeof) {
                case k:
                    return m = m.get(_.key === null ? v : _.key) || null,
                    s(o, m, _, Y);
                case G:
                    return m = m.get(_.key === null ? v : _.key) || null,
                    y(o, m, _, Y);
                case il:
                    return _ = Xa(_),
                    b(m, o, v, _, Y)
                }
                if (Ot(_) || Hl(_))
                    return m = m.get(v) || null,
                    p(o, m, _, Y, null);
                if (typeof _.then == "function")
                    return b(m, o, v, en(_), Y);
                if (_.$$typeof === sl)
                    return b(m, o, v, Pu(o, _), Y);
                un(o, _)
            }
            return null
        }
        function j(m, o, v, _) {
            for (var Y = null, cl = null, B = o, W = o = 0, ul = null; B !== null && W < v.length; W++) {
                B.index > W ? (ul = B,
                B = null) : ul = B.sibling;
                var fl = g(m, B, v[W], _);
                if (fl === null) {
                    B === null && (B = ul);
                    break
                }
                l && B && fl.alternate === null && t(m, B),
                o = n(fl, o, W),
                cl === null ? Y = fl : cl.sibling = fl,
                cl = fl,
                B = ul
            }
            if (W === v.length)
                return a(m, B),
                nl && Qt(m, W),
                Y;
            if (B === null) {
                for (; W < v.length; W++)
                    B = M(m, v[W], _),
                    B !== null && (o = n(B, o, W),
                    cl === null ? Y = B : cl.sibling = B,
                    cl = B);
                return nl && Qt(m, W),
                Y
            }
            for (B = e(B); W < v.length; W++)
                ul = b(B, m, W, v[W], _),
                ul !== null && (l && ul.alternate !== null && B.delete(ul.key === null ? W : ul.key),
                o = n(ul, o, W),
                cl === null ? Y = ul : cl.sibling = ul,
                cl = ul);
            return l && B.forEach(function(_a) {
                return t(m, _a)
            }),
            nl && Qt(m, W),
            Y
        }
        function Q(m, o, v, _) {
            if (v == null)
                throw Error(f(151));
            for (var Y = null, cl = null, B = o, W = o = 0, ul = null, fl = v.next(); B !== null && !fl.done; W++,
            fl = v.next()) {
                B.index > W ? (ul = B,
                B = null) : ul = B.sibling;
                var _a = g(m, B, fl.value, _);
                if (_a === null) {
                    B === null && (B = ul);
                    break
                }
                l && B && _a.alternate === null && t(m, B),
                o = n(_a, o, W),
                cl === null ? Y = _a : cl.sibling = _a,
                cl = _a,
                B = ul
            }
            if (fl.done)
                return a(m, B),
                nl && Qt(m, W),
                Y;
            if (B === null) {
                for (; !fl.done; W++,
                fl = v.next())
                    fl = M(m, fl.value, _),
                    fl !== null && (o = n(fl, o, W),
                    cl === null ? Y = fl : cl.sibling = fl,
                    cl = fl);
                return nl && Qt(m, W),
                Y
            }
            for (B = e(B); !fl.done; W++,
            fl = v.next())
                fl = b(B, m, W, fl.value, _),
                fl !== null && (l && fl.alternate !== null && B.delete(fl.key === null ? W : fl.key),
                o = n(fl, o, W),
                cl === null ? Y = fl : cl.sibling = fl,
                cl = fl);
            return l && B.forEach(function(hr) {
                return t(m, hr)
            }),
            nl && Qt(m, W),
            Y
        }
        function bl(m, o, v, _) {
            if (typeof v == "object" && v !== null && v.type === F && v.key === null && (v = v.props.children),
            typeof v == "object" && v !== null) {
                switch (v.$$typeof) {
                case k:
                    l: {
                        for (var Y = v.key; o !== null; ) {
                            if (o.key === Y) {
                                if (Y = v.type,
                                Y === F) {
                                    if (o.tag === 7) {
                                        a(m, o.sibling),
                                        _ = u(o, v.props.children),
                                        _.return = m,
                                        m = _;
                                        break l
                                    }
                                } else if (o.elementType === Y || typeof Y == "object" && Y !== null && Y.$$typeof === il && Xa(Y) === o.type) {
                                    a(m, o.sibling),
                                    _ = u(o, v.props),
                                    Pe(_, v),
                                    _.return = m,
                                    m = _;
                                    break l
                                }
                                a(m, o);
                                break
                            } else
                                t(m, o);
                            o = o.sibling
                        }
                        v.type === F ? (_ = Ha(v.props.children, m.mode, _, v.key),
                        _.return = m,
                        m = _) : (_ = ku(v.type, v.key, v.props, null, m.mode, _),
                        Pe(_, v),
                        _.return = m,
                        m = _)
                    }
                    return i(m);
                case G:
                    l: {
                        for (Y = v.key; o !== null; ) {
                            if (o.key === Y)
                                if (o.tag === 4 && o.stateNode.containerInfo === v.containerInfo && o.stateNode.implementation === v.implementation) {
                                    a(m, o.sibling),
                                    _ = u(o, v.children || []),
                                    _.return = m,
                                    m = _;
                                    break l
                                } else {
                                    a(m, o);
                                    break
                                }
                            else
                                t(m, o);
                            o = o.sibling
                        }
                        _ = Ri(v, m.mode, _),
                        _.return = m,
                        m = _
                    }
                    return i(m);
                case il:
                    return v = Xa(v),
                    bl(m, o, v, _)
                }
                if (Ot(v))
                    return j(m, o, v, _);
                if (Hl(v)) {
                    if (Y = Hl(v),
                    typeof Y != "function")
                        throw Error(f(150));
                    return v = Y.call(v),
                    Q(m, o, v, _)
                }
                if (typeof v.then == "function")
                    return bl(m, o, en(v), _);
                if (v.$$typeof === sl)
                    return bl(m, o, Pu(m, v), _);
                un(m, v)
            }
            return typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint" ? (v = "" + v,
            o !== null && o.tag === 6 ? (a(m, o.sibling),
            _ = u(o, v),
            _.return = m,
            m = _) : (a(m, o),
            _ = ji(v, m.mode, _),
            _.return = m,
            m = _),
            i(m)) : a(m, o)
        }
        return function(m, o, v, _) {
            try {
                Ie = 0;
                var Y = bl(m, o, v, _);
                return ve = null,
                Y
            } catch (B) {
                if (B === he || B === tn)
                    throw B;
                var cl = dt(29, B, null, m.mode);
                return cl.lanes = _,
                cl.return = m,
                cl
            }
        }
    }
    var Za = Qs(!0)
      , Zs = Qs(!1)
      , fa = !1;
    function Ji(l) {
        l.updateQueue = {
            baseState: l.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }
    function wi(l, t) {
        l = l.updateQueue,
        t.updateQueue === l && (t.updateQueue = {
            baseState: l.baseState,
            firstBaseUpdate: l.firstBaseUpdate,
            lastBaseUpdate: l.lastBaseUpdate,
            shared: l.shared,
            callbacks: null
        })
    }
    function sa(l) {
        return {
            lane: l,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function oa(l, t, a) {
        var e = l.updateQueue;
        if (e === null)
            return null;
        if (e = e.shared,
        (ol & 2) !== 0) {
            var u = e.pending;
            return u === null ? t.next = t : (t.next = u.next,
            u.next = t),
            e.pending = t,
            t = $u(l),
            _s(l, null, a),
            t
        }
        return Wu(l, e, t, a),
        $u(l)
    }
    function lu(l, t, a) {
        if (t = t.updateQueue,
        t !== null && (t = t.shared,
        (a & 4194048) !== 0)) {
            var e = t.lanes;
            e &= l.pendingLanes,
            a |= e,
            t.lanes = a,
            jf(l, a)
        }
    }
    function Wi(l, t) {
        var a = l.updateQueue
          , e = l.alternate;
        if (e !== null && (e = e.updateQueue,
        a === e)) {
            var u = null
              , n = null;
            if (a = a.firstBaseUpdate,
            a !== null) {
                do {
                    var i = {
                        lane: a.lane,
                        tag: a.tag,
                        payload: a.payload,
                        callback: null,
                        next: null
                    };
                    n === null ? u = n = i : n = n.next = i,
                    a = a.next
                } while (a !== null);
                n === null ? u = n = t : n = n.next = t
            } else
                u = n = t;
            a = {
                baseState: e.baseState,
                firstBaseUpdate: u,
                lastBaseUpdate: n,
                shared: e.shared,
                callbacks: e.callbacks
            },
            l.updateQueue = a;
            return
        }
        l = a.lastBaseUpdate,
        l === null ? a.firstBaseUpdate = t : l.next = t,
        a.lastBaseUpdate = t
    }
    var $i = !1;
    function tu() {
        if ($i) {
            var l = re;
            if (l !== null)
                throw l
        }
    }
    function au(l, t, a, e) {
        $i = !1;
        var u = l.updateQueue;
        fa = !1;
        var n = u.firstBaseUpdate
          , i = u.lastBaseUpdate
          , c = u.shared.pending;
        if (c !== null) {
            u.shared.pending = null;
            var s = c
              , y = s.next;
            s.next = null,
            i === null ? n = y : i.next = y,
            i = s;
            var p = l.alternate;
            p !== null && (p = p.updateQueue,
            c = p.lastBaseUpdate,
            c !== i && (c === null ? p.firstBaseUpdate = y : c.next = y,
            p.lastBaseUpdate = s))
        }
        if (n !== null) {
            var M = u.baseState;
            i = 0,
            p = y = s = null,
            c = n;
            do {
                var g = c.lane & -536870913
                  , b = g !== c.lane;
                if (b ? (el & g) === g : (e & g) === g) {
                    g !== 0 && g === me && ($i = !0),
                    p !== null && (p = p.next = {
                        lane: 0,
                        tag: c.tag,
                        payload: c.payload,
                        callback: null,
                        next: null
                    });
                    l: {
                        var j = l
                          , Q = c;
                        g = t;
                        var bl = a;
                        switch (Q.tag) {
                        case 1:
                            if (j = Q.payload,
                            typeof j == "function") {
                                M = j.call(bl, M, g);
                                break l
                            }
                            M = j;
                            break l;
                        case 3:
                            j.flags = j.flags & -65537 | 128;
                        case 0:
                            if (j = Q.payload,
                            g = typeof j == "function" ? j.call(bl, M, g) : j,
                            g == null)
                                break l;
                            M = H({}, M, g);
                            break l;
                        case 2:
                            fa = !0
                        }
                    }
                    g = c.callback,
                    g !== null && (l.flags |= 64,
                    b && (l.flags |= 8192),
                    b = u.callbacks,
                    b === null ? u.callbacks = [g] : b.push(g))
                } else
                    b = {
                        lane: g,
                        tag: c.tag,
                        payload: c.payload,
                        callback: c.callback,
                        next: null
                    },
                    p === null ? (y = p = b,
                    s = M) : p = p.next = b,
                    i |= g;
                if (c = c.next,
                c === null) {
                    if (c = u.shared.pending,
                    c === null)
                        break;
                    b = c,
                    c = b.next,
                    b.next = null,
                    u.lastBaseUpdate = b,
                    u.shared.pending = null
                }
            } while (!0);
            p === null && (s = M),
            u.baseState = s,
            u.firstBaseUpdate = y,
            u.lastBaseUpdate = p,
            n === null && (u.shared.lanes = 0),
            va |= i,
            l.lanes = i,
            l.memoizedState = M
        }
    }
    function Ls(l, t) {
        if (typeof l != "function")
            throw Error(f(191, l));
        l.call(t)
    }
    function Vs(l, t) {
        var a = l.callbacks;
        if (a !== null)
            for (l.callbacks = null,
            l = 0; l < a.length; l++)
                Ls(a[l], t)
    }
    var ye = d(null)
      , nn = d(0);
    function Ks(l, t) {
        l = It,
        C(nn, l),
        C(ye, t),
        It = l | t.baseLanes
    }
    function ki() {
        C(nn, It),
        C(ye, ye.current)
    }
    function Fi() {
        It = nn.current,
        x(ye),
        x(nn)
    }
    var mt = d(null)
      , At = null;
    function da(l) {
        var t = l.alternate;
        C(Cl, Cl.current & 1),
        C(mt, l),
        At === null && (t === null || ye.current !== null || t.memoizedState !== null) && (At = l)
    }
    function Ii(l) {
        C(Cl, Cl.current),
        C(mt, l),
        At === null && (At = l)
    }
    function Js(l) {
        l.tag === 22 ? (C(Cl, Cl.current),
        C(mt, l),
        At === null && (At = l)) : ma()
    }
    function ma() {
        C(Cl, Cl.current),
        C(mt, mt.current)
    }
    function rt(l) {
        x(mt),
        At === l && (At = null),
        x(Cl)
    }
    var Cl = d(0);
    function cn(l) {
        for (var t = l; t !== null; ) {
            if (t.tag === 13) {
                var a = t.memoizedState;
                if (a !== null && (a = a.dehydrated,
                a === null || uf(a) || nf(a)))
                    return t
            } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
                if ((t.flags & 128) !== 0)
                    return t
            } else if (t.child !== null) {
                t.child.return = t,
                t = t.child;
                continue
            }
            if (t === l)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === l)
                    return null;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
        return null
    }
    var Vt = 0
      , w = null
      , yl = null
      , ql = null
      , fn = !1
      , ge = !1
      , La = !1
      , sn = 0
      , eu = 0
      , be = null
      , um = 0;
    function Dl() {
        throw Error(f(321))
    }
    function Pi(l, t) {
        if (t === null)
            return !1;
        for (var a = 0; a < t.length && a < l.length; a++)
            if (!ot(l[a], t[a]))
                return !1;
        return !0
    }
    function lc(l, t, a, e, u, n) {
        return Vt = n,
        w = t,
        t.memoizedState = null,
        t.updateQueue = null,
        t.lanes = 0,
        T.H = l === null || l.memoizedState === null ? Uo : vc,
        La = !1,
        n = a(e, u),
        La = !1,
        ge && (n = Ws(t, a, e, u)),
        ws(l),
        n
    }
    function ws(l) {
        T.H = iu;
        var t = yl !== null && yl.next !== null;
        if (Vt = 0,
        ql = yl = w = null,
        fn = !1,
        eu = 0,
        be = null,
        t)
            throw Error(f(300));
        l === null || Gl || (l = l.dependencies,
        l !== null && Iu(l) && (Gl = !0))
    }
    function Ws(l, t, a, e) {
        w = l;
        var u = 0;
        do {
            if (ge && (be = null),
            eu = 0,
            ge = !1,
            25 <= u)
                throw Error(f(301));
            if (u += 1,
            ql = yl = null,
            l.updateQueue != null) {
                var n = l.updateQueue;
                n.lastEffect = null,
                n.events = null,
                n.stores = null,
                n.memoCache != null && (n.memoCache.index = 0)
            }
            T.H = No,
            n = t(a, e)
        } while (ge);
        return n
    }
    function nm() {
        var l = T.H
          , t = l.useState()[0];
        return t = typeof t.then == "function" ? uu(t) : t,
        l = l.useState()[0],
        (yl !== null ? yl.memoizedState : null) !== l && (w.flags |= 1024),
        t
    }
    function tc() {
        var l = sn !== 0;
        return sn = 0,
        l
    }
    function ac(l, t, a) {
        t.updateQueue = l.updateQueue,
        t.flags &= -2053,
        l.lanes &= ~a
    }
    function ec(l) {
        if (fn) {
            for (l = l.memoizedState; l !== null; ) {
                var t = l.queue;
                t !== null && (t.pending = null),
                l = l.next
            }
            fn = !1
        }
        Vt = 0,
        ql = yl = w = null,
        ge = !1,
        eu = sn = 0,
        be = null
    }
    function Il() {
        var l = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return ql === null ? w.memoizedState = ql = l : ql = ql.next = l,
        ql
    }
    function jl() {
        if (yl === null) {
            var l = w.alternate;
            l = l !== null ? l.memoizedState : null
        } else
            l = yl.next;
        var t = ql === null ? w.memoizedState : ql.next;
        if (t !== null)
            ql = t,
            yl = l;
        else {
            if (l === null)
                throw w.alternate === null ? Error(f(467)) : Error(f(310));
            yl = l,
            l = {
                memoizedState: yl.memoizedState,
                baseState: yl.baseState,
                baseQueue: yl.baseQueue,
                queue: yl.queue,
                next: null
            },
            ql === null ? w.memoizedState = ql = l : ql = ql.next = l
        }
        return ql
    }
    function on() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }
    function uu(l) {
        var t = eu;
        return eu += 1,
        be === null && (be = []),
        l = Gs(be, l, t),
        t = w,
        (ql === null ? t.memoizedState : ql.next) === null && (t = t.alternate,
        T.H = t === null || t.memoizedState === null ? Uo : vc),
        l
    }
    function dn(l) {
        if (l !== null && typeof l == "object") {
            if (typeof l.then == "function")
                return uu(l);
            if (l.$$typeof === sl)
                return wl(l)
        }
        throw Error(f(438, String(l)))
    }
    function uc(l) {
        var t = null
          , a = w.updateQueue;
        if (a !== null && (t = a.memoCache),
        t == null) {
            var e = w.alternate;
            e !== null && (e = e.updateQueue,
            e !== null && (e = e.memoCache,
            e != null && (t = {
                data: e.data.map(function(u) {
                    return u.slice()
                }),
                index: 0
            })))
        }
        if (t == null && (t = {
            data: [],
            index: 0
        }),
        a === null && (a = on(),
        w.updateQueue = a),
        a.memoCache = t,
        a = t.data[t.index],
        a === void 0)
            for (a = t.data[t.index] = Array(l),
            e = 0; e < l; e++)
                a[e] = Pl;
        return t.index++,
        a
    }
    function Kt(l, t) {
        return typeof t == "function" ? t(l) : t
    }
    function mn(l) {
        var t = jl();
        return nc(t, yl, l)
    }
    function nc(l, t, a) {
        var e = l.queue;
        if (e === null)
            throw Error(f(311));
        e.lastRenderedReducer = a;
        var u = l.baseQueue
          , n = e.pending;
        if (n !== null) {
            if (u !== null) {
                var i = u.next;
                u.next = n.next,
                n.next = i
            }
            t.baseQueue = u = n,
            e.pending = null
        }
        if (n = l.baseState,
        u === null)
            l.memoizedState = n;
        else {
            t = u.next;
            var c = i = null
              , s = null
              , y = t
              , p = !1;
            do {
                var M = y.lane & -536870913;
                if (M !== y.lane ? (el & M) === M : (Vt & M) === M) {
                    var g = y.revertLane;
                    if (g === 0)
                        s !== null && (s = s.next = {
                            lane: 0,
                            revertLane: 0,
                            gesture: null,
                            action: y.action,
                            hasEagerState: y.hasEagerState,
                            eagerState: y.eagerState,
                            next: null
                        }),
                        M === me && (p = !0);
                    else if ((Vt & g) === g) {
                        y = y.next,
                        g === me && (p = !0);
                        continue
                    } else
                        M = {
                            lane: 0,
                            revertLane: y.revertLane,
                            gesture: null,
                            action: y.action,
                            hasEagerState: y.hasEagerState,
                            eagerState: y.eagerState,
                            next: null
                        },
                        s === null ? (c = s = M,
                        i = n) : s = s.next = M,
                        w.lanes |= g,
                        va |= g;
                    M = y.action,
                    La && a(n, M),
                    n = y.hasEagerState ? y.eagerState : a(n, M)
                } else
                    g = {
                        lane: M,
                        revertLane: y.revertLane,
                        gesture: y.gesture,
                        action: y.action,
                        hasEagerState: y.hasEagerState,
                        eagerState: y.eagerState,
                        next: null
                    },
                    s === null ? (c = s = g,
                    i = n) : s = s.next = g,
                    w.lanes |= M,
                    va |= M;
                y = y.next
            } while (y !== null && y !== t);
            if (s === null ? i = n : s.next = c,
            !ot(n, l.memoizedState) && (Gl = !0,
            p && (a = re,
            a !== null)))
                throw a;
            l.memoizedState = n,
            l.baseState = i,
            l.baseQueue = s,
            e.lastRenderedState = n
        }
        return u === null && (e.lanes = 0),
        [l.memoizedState, e.dispatch]
    }
    function ic(l) {
        var t = jl()
          , a = t.queue;
        if (a === null)
            throw Error(f(311));
        a.lastRenderedReducer = l;
        var e = a.dispatch
          , u = a.pending
          , n = t.memoizedState;
        if (u !== null) {
            a.pending = null;
            var i = u = u.next;
            do
                n = l(n, i.action),
                i = i.next;
            while (i !== u);
            ot(n, t.memoizedState) || (Gl = !0),
            t.memoizedState = n,
            t.baseQueue === null && (t.baseState = n),
            a.lastRenderedState = n
        }
        return [n, e]
    }
    function $s(l, t, a) {
        var e = w
          , u = jl()
          , n = nl;
        if (n) {
            if (a === void 0)
                throw Error(f(407));
            a = a()
        } else
            a = t();
        var i = !ot((yl || u).memoizedState, a);
        if (i && (u.memoizedState = a,
        Gl = !0),
        u = u.queue,
        sc(Is.bind(null, e, u, l), [l]),
        u.getSnapshot !== t || i || ql !== null && ql.memoizedState.tag & 1) {
            if (e.flags |= 2048,
            Se(9, {
                destroy: void 0
            }, Fs.bind(null, e, u, a, t), null),
            zl === null)
                throw Error(f(349));
            n || (Vt & 127) !== 0 || ks(e, t, a)
        }
        return a
    }
    function ks(l, t, a) {
        l.flags |= 16384,
        l = {
            getSnapshot: t,
            value: a
        },
        t = w.updateQueue,
        t === null ? (t = on(),
        w.updateQueue = t,
        t.stores = [l]) : (a = t.stores,
        a === null ? t.stores = [l] : a.push(l))
    }
    function Fs(l, t, a, e) {
        t.value = a,
        t.getSnapshot = e,
        Ps(t) && lo(l)
    }
    function Is(l, t, a) {
        return a(function() {
            Ps(t) && lo(l)
        })
    }
    function Ps(l) {
        var t = l.getSnapshot;
        l = l.value;
        try {
            var a = t();
            return !ot(l, a)
        } catch {
            return !0
        }
    }
    function lo(l) {
        var t = Ra(l, 2);
        t !== null && it(t, l, 2)
    }
    function cc(l) {
        var t = Il();
        if (typeof l == "function") {
            var a = l;
            if (l = a(),
            La) {
                ta(!0);
                try {
                    a()
                } finally {
                    ta(!1)
                }
            }
        }
        return t.memoizedState = t.baseState = l,
        t.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Kt,
            lastRenderedState: l
        },
        t
    }
    function to(l, t, a, e) {
        return l.baseState = a,
        nc(l, yl, typeof e == "function" ? e : Kt)
    }
    function im(l, t, a, e, u) {
        if (vn(l))
            throw Error(f(485));
        if (l = t.action,
        l !== null) {
            var n = {
                payload: u,
                action: l,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(i) {
                    n.listeners.push(i)
                }
            };
            T.T !== null ? a(!0) : n.isTransition = !1,
            e(n),
            a = t.pending,
            a === null ? (n.next = t.pending = n,
            ao(t, n)) : (n.next = a.next,
            t.pending = a.next = n)
        }
    }
    function ao(l, t) {
        var a = t.action
          , e = t.payload
          , u = l.state;
        if (t.isTransition) {
            var n = T.T
              , i = {};
            T.T = i;
            try {
                var c = a(u, e)
                  , s = T.S;
                s !== null && s(i, c),
                eo(l, t, c)
            } catch (y) {
                fc(l, t, y)
            } finally {
                n !== null && i.types !== null && (n.types = i.types),
                T.T = n
            }
        } else
            try {
                n = a(u, e),
                eo(l, t, n)
            } catch (y) {
                fc(l, t, y)
            }
    }
    function eo(l, t, a) {
        a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function(e) {
            uo(l, t, e)
        }, function(e) {
            return fc(l, t, e)
        }) : uo(l, t, a)
    }
    function uo(l, t, a) {
        t.status = "fulfilled",
        t.value = a,
        no(t),
        l.state = a,
        t = l.pending,
        t !== null && (a = t.next,
        a === t ? l.pending = null : (a = a.next,
        t.next = a,
        ao(l, a)))
    }
    function fc(l, t, a) {
        var e = l.pending;
        if (l.pending = null,
        e !== null) {
            e = e.next;
            do
                t.status = "rejected",
                t.reason = a,
                no(t),
                t = t.next;
            while (t !== e)
        }
        l.action = null
    }
    function no(l) {
        l = l.listeners;
        for (var t = 0; t < l.length; t++)
            (0,
            l[t])()
    }
    function io(l, t) {
        return t
    }
    function co(l, t) {
        if (nl) {
            var a = zl.formState;
            if (a !== null) {
                l: {
                    var e = w;
                    if (nl) {
                        if (Tl) {
                            t: {
                                for (var u = Tl, n = Tt; u.nodeType !== 8; ) {
                                    if (!n) {
                                        u = null;
                                        break t
                                    }
                                    if (u = _t(u.nextSibling),
                                    u === null) {
                                        u = null;
                                        break t
                                    }
                                }
                                n = u.data,
                                u = n === "F!" || n === "F" ? u : null
                            }
                            if (u) {
                                Tl = _t(u.nextSibling),
                                e = u.data === "F!";
                                break l
                            }
                        }
                        ia(e)
                    }
                    e = !1
                }
                e && (t = a[0])
            }
        }
        return a = Il(),
        a.memoizedState = a.baseState = t,
        e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: io,
            lastRenderedState: t
        },
        a.queue = e,
        a = xo.bind(null, w, e),
        e.dispatch = a,
        e = cc(!1),
        n = hc.bind(null, w, !1, e.queue),
        e = Il(),
        u = {
            state: t,
            dispatch: null,
            action: l,
            pending: null
        },
        e.queue = u,
        a = im.bind(null, w, u, n, a),
        u.dispatch = a,
        e.memoizedState = l,
        [t, a, !1]
    }
    function fo(l) {
        var t = jl();
        return so(t, yl, l)
    }
    function so(l, t, a) {
        if (t = nc(l, t, io)[0],
        l = mn(Kt)[0],
        typeof t == "object" && t !== null && typeof t.then == "function")
            try {
                var e = uu(t)
            } catch (i) {
                throw i === he ? tn : i
            }
        else
            e = t;
        t = jl();
        var u = t.queue
          , n = u.dispatch;
        return a !== t.memoizedState && (w.flags |= 2048,
        Se(9, {
            destroy: void 0
        }, cm.bind(null, u, a), null)),
        [e, n, l]
    }
    function cm(l, t) {
        l.action = t
    }
    function oo(l) {
        var t = jl()
          , a = yl;
        if (a !== null)
            return so(t, a, l);
        jl(),
        t = t.memoizedState,
        a = jl();
        var e = a.queue.dispatch;
        return a.memoizedState = l,
        [t, e, !1]
    }
    function Se(l, t, a, e) {
        return l = {
            tag: l,
            create: a,
            deps: e,
            inst: t,
            next: null
        },
        t = w.updateQueue,
        t === null && (t = on(),
        w.updateQueue = t),
        a = t.lastEffect,
        a === null ? t.lastEffect = l.next = l : (e = a.next,
        a.next = l,
        l.next = e,
        t.lastEffect = l),
        l
    }
    function mo() {
        return jl().memoizedState
    }
    function rn(l, t, a, e) {
        var u = Il();
        w.flags |= l,
        u.memoizedState = Se(1 | t, {
            destroy: void 0
        }, a, e === void 0 ? null : e)
    }
    function hn(l, t, a, e) {
        var u = jl();
        e = e === void 0 ? null : e;
        var n = u.memoizedState.inst;
        yl !== null && e !== null && Pi(e, yl.memoizedState.deps) ? u.memoizedState = Se(t, n, a, e) : (w.flags |= l,
        u.memoizedState = Se(1 | t, n, a, e))
    }
    function ro(l, t) {
        rn(8390656, 8, l, t)
    }
    function sc(l, t) {
        hn(2048, 8, l, t)
    }
    function fm(l) {
        w.flags |= 4;
        var t = w.updateQueue;
        if (t === null)
            t = on(),
            w.updateQueue = t,
            t.events = [l];
        else {
            var a = t.events;
            a === null ? t.events = [l] : a.push(l)
        }
    }
    function ho(l) {
        var t = jl().memoizedState;
        return fm({
            ref: t,
            nextImpl: l
        }),
        function() {
            if ((ol & 2) !== 0)
                throw Error(f(440));
            return t.impl.apply(void 0, arguments)
        }
    }
    function vo(l, t) {
        return hn(4, 2, l, t)
    }
    function yo(l, t) {
        return hn(4, 4, l, t)
    }
    function go(l, t) {
        if (typeof t == "function") {
            l = l();
            var a = t(l);
            return function() {
                typeof a == "function" ? a() : t(null)
            }
        }
        if (t != null)
            return l = l(),
            t.current = l,
            function() {
                t.current = null
            }
    }
    function bo(l, t, a) {
        a = a != null ? a.concat([l]) : null,
        hn(4, 4, go.bind(null, t, l), a)
    }
    function oc() {}
    function So(l, t) {
        var a = jl();
        t = t === void 0 ? null : t;
        var e = a.memoizedState;
        return t !== null && Pi(t, e[1]) ? e[0] : (a.memoizedState = [l, t],
        l)
    }
    function zo(l, t) {
        var a = jl();
        t = t === void 0 ? null : t;
        var e = a.memoizedState;
        if (t !== null && Pi(t, e[1]))
            return e[0];
        if (e = l(),
        La) {
            ta(!0);
            try {
                l()
            } finally {
                ta(!1)
            }
        }
        return a.memoizedState = [e, t],
        e
    }
    function dc(l, t, a) {
        return a === void 0 || (Vt & 1073741824) !== 0 && (el & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = a,
        l = p0(),
        w.lanes |= l,
        va |= l,
        a)
    }
    function po(l, t, a, e) {
        return ot(a, t) ? a : ye.current !== null ? (l = dc(l, a, e),
        ot(l, t) || (Gl = !0),
        l) : (Vt & 42) === 0 || (Vt & 1073741824) !== 0 && (el & 261930) === 0 ? (Gl = !0,
        l.memoizedState = a) : (l = p0(),
        w.lanes |= l,
        va |= l,
        t)
    }
    function Eo(l, t, a, e, u) {
        var n = N.p;
        N.p = n !== 0 && 8 > n ? n : 8;
        var i = T.T
          , c = {};
        T.T = c,
        hc(l, !1, t, a);
        try {
            var s = u()
              , y = T.S;
            if (y !== null && y(c, s),
            s !== null && typeof s == "object" && typeof s.then == "function") {
                var p = em(s, e);
                nu(l, t, p, yt(l))
            } else
                nu(l, t, e, yt(l))
        } catch (M) {
            nu(l, t, {
                then: function() {},
                status: "rejected",
                reason: M
            }, yt())
        } finally {
            N.p = n,
            i !== null && c.types !== null && (i.types = c.types),
            T.T = i
        }
    }
    function sm() {}
    function mc(l, t, a, e) {
        if (l.tag !== 5)
            throw Error(f(476));
        var u = To(l).queue;
        Eo(l, u, t, Z, a === null ? sm : function() {
            return Ao(l),
            a(e)
        }
        )
    }
    function To(l) {
        var t = l.memoizedState;
        if (t !== null)
            return t;
        t = {
            memoizedState: Z,
            baseState: Z,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Kt,
                lastRenderedState: Z
            },
            next: null
        };
        var a = {};
        return t.next = {
            memoizedState: a,
            baseState: a,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Kt,
                lastRenderedState: a
            },
            next: null
        },
        l.memoizedState = t,
        l = l.alternate,
        l !== null && (l.memoizedState = t),
        t
    }
    function Ao(l) {
        var t = To(l);
        t.next === null && (t = l.alternate.memoizedState),
        nu(l, t.next.queue, {}, yt())
    }
    function rc() {
        return wl(Eu)
    }
    function _o() {
        return jl().memoizedState
    }
    function Mo() {
        return jl().memoizedState
    }
    function om(l) {
        for (var t = l.return; t !== null; ) {
            switch (t.tag) {
            case 24:
            case 3:
                var a = yt();
                l = sa(a);
                var e = oa(t, l, a);
                e !== null && (it(e, t, a),
                lu(e, t, a)),
                t = {
                    cache: Zi()
                },
                l.payload = t;
                return
            }
            t = t.return
        }
    }
    function dm(l, t, a) {
        var e = yt();
        a = {
            lane: e,
            revertLane: 0,
            gesture: null,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        vn(l) ? Oo(t, a) : (a = Ni(l, t, a, e),
        a !== null && (it(a, l, e),
        Do(a, t, e)))
    }
    function xo(l, t, a) {
        var e = yt();
        nu(l, t, a, e)
    }
    function nu(l, t, a, e) {
        var u = {
            lane: e,
            revertLane: 0,
            gesture: null,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (vn(l))
            Oo(t, u);
        else {
            var n = l.alternate;
            if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer,
            n !== null))
                try {
                    var i = t.lastRenderedState
                      , c = n(i, a);
                    if (u.hasEagerState = !0,
                    u.eagerState = c,
                    ot(c, i))
                        return Wu(l, t, u, 0),
                        zl === null && wu(),
                        !1
                } catch {}
            if (a = Ni(l, t, u, e),
            a !== null)
                return it(a, l, e),
                Do(a, t, e),
                !0
        }
        return !1
    }
    function hc(l, t, a, e) {
        if (e = {
            lane: 2,
            revertLane: Jc(),
            gesture: null,
            action: e,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        vn(l)) {
            if (t)
                throw Error(f(479))
        } else
            t = Ni(l, a, e, 2),
            t !== null && it(t, l, 2)
    }
    function vn(l) {
        var t = l.alternate;
        return l === w || t !== null && t === w
    }
    function Oo(l, t) {
        ge = fn = !0;
        var a = l.pending;
        a === null ? t.next = t : (t.next = a.next,
        a.next = t),
        l.pending = t
    }
    function Do(l, t, a) {
        if ((a & 4194048) !== 0) {
            var e = t.lanes;
            e &= l.pendingLanes,
            a |= e,
            t.lanes = a,
            jf(l, a)
        }
    }
    var iu = {
        readContext: wl,
        use: dn,
        useCallback: Dl,
        useContext: Dl,
        useEffect: Dl,
        useImperativeHandle: Dl,
        useLayoutEffect: Dl,
        useInsertionEffect: Dl,
        useMemo: Dl,
        useReducer: Dl,
        useRef: Dl,
        useState: Dl,
        useDebugValue: Dl,
        useDeferredValue: Dl,
        useTransition: Dl,
        useSyncExternalStore: Dl,
        useId: Dl,
        useHostTransitionStatus: Dl,
        useFormState: Dl,
        useActionState: Dl,
        useOptimistic: Dl,
        useMemoCache: Dl,
        useCacheRefresh: Dl
    };
    iu.useEffectEvent = Dl;
    var Uo = {
        readContext: wl,
        use: dn,
        useCallback: function(l, t) {
            return Il().memoizedState = [l, t === void 0 ? null : t],
            l
        },
        useContext: wl,
        useEffect: ro,
        useImperativeHandle: function(l, t, a) {
            a = a != null ? a.concat([l]) : null,
            rn(4194308, 4, go.bind(null, t, l), a)
        },
        useLayoutEffect: function(l, t) {
            return rn(4194308, 4, l, t)
        },
        useInsertionEffect: function(l, t) {
            rn(4, 2, l, t)
        },
        useMemo: function(l, t) {
            var a = Il();
            t = t === void 0 ? null : t;
            var e = l();
            if (La) {
                ta(!0);
                try {
                    l()
                } finally {
                    ta(!1)
                }
            }
            return a.memoizedState = [e, t],
            e
        },
        useReducer: function(l, t, a) {
            var e = Il();
            if (a !== void 0) {
                var u = a(t);
                if (La) {
                    ta(!0);
                    try {
                        a(t)
                    } finally {
                        ta(!1)
                    }
                }
            } else
                u = t;
            return e.memoizedState = e.baseState = u,
            l = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: l,
                lastRenderedState: u
            },
            e.queue = l,
            l = l.dispatch = dm.bind(null, w, l),
            [e.memoizedState, l]
        },
        useRef: function(l) {
            var t = Il();
            return l = {
                current: l
            },
            t.memoizedState = l
        },
        useState: function(l) {
            l = cc(l);
            var t = l.queue
              , a = xo.bind(null, w, t);
            return t.dispatch = a,
            [l.memoizedState, a]
        },
        useDebugValue: oc,
        useDeferredValue: function(l, t) {
            var a = Il();
            return dc(a, l, t)
        },
        useTransition: function() {
            var l = cc(!1);
            return l = Eo.bind(null, w, l.queue, !0, !1),
            Il().memoizedState = l,
            [!1, l]
        },
        useSyncExternalStore: function(l, t, a) {
            var e = w
              , u = Il();
            if (nl) {
                if (a === void 0)
                    throw Error(f(407));
                a = a()
            } else {
                if (a = t(),
                zl === null)
                    throw Error(f(349));
                (el & 127) !== 0 || ks(e, t, a)
            }
            u.memoizedState = a;
            var n = {
                value: a,
                getSnapshot: t
            };
            return u.queue = n,
            ro(Is.bind(null, e, n, l), [l]),
            e.flags |= 2048,
            Se(9, {
                destroy: void 0
            }, Fs.bind(null, e, n, a, t), null),
            a
        },
        useId: function() {
            var l = Il()
              , t = zl.identifierPrefix;
            if (nl) {
                var a = jt
                  , e = Ct;
                a = (e & ~(1 << 32 - st(e) - 1)).toString(32) + a,
                t = "_" + t + "R_" + a,
                a = sn++,
                0 < a && (t += "H" + a.toString(32)),
                t += "_"
            } else
                a = um++,
                t = "_" + t + "r_" + a.toString(32) + "_";
            return l.memoizedState = t
        },
        useHostTransitionStatus: rc,
        useFormState: co,
        useActionState: co,
        useOptimistic: function(l) {
            var t = Il();
            t.memoizedState = t.baseState = l;
            var a = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null
            };
            return t.queue = a,
            t = hc.bind(null, w, !0, a),
            a.dispatch = t,
            [l, t]
        },
        useMemoCache: uc,
        useCacheRefresh: function() {
            return Il().memoizedState = om.bind(null, w)
        },
        useEffectEvent: function(l) {
            var t = Il()
              , a = {
                impl: l
            };
            return t.memoizedState = a,
            function() {
                if ((ol & 2) !== 0)
                    throw Error(f(440));
                return a.impl.apply(void 0, arguments)
            }
        }
    }
      , vc = {
        readContext: wl,
        use: dn,
        useCallback: So,
        useContext: wl,
        useEffect: sc,
        useImperativeHandle: bo,
        useInsertionEffect: vo,
        useLayoutEffect: yo,
        useMemo: zo,
        useReducer: mn,
        useRef: mo,
        useState: function() {
            return mn(Kt)
        },
        useDebugValue: oc,
        useDeferredValue: function(l, t) {
            var a = jl();
            return po(a, yl.memoizedState, l, t)
        },
        useTransition: function() {
            var l = mn(Kt)[0]
              , t = jl().memoizedState;
            return [typeof l == "boolean" ? l : uu(l), t]
        },
        useSyncExternalStore: $s,
        useId: _o,
        useHostTransitionStatus: rc,
        useFormState: fo,
        useActionState: fo,
        useOptimistic: function(l, t) {
            var a = jl();
            return to(a, yl, l, t)
        },
        useMemoCache: uc,
        useCacheRefresh: Mo
    };
    vc.useEffectEvent = ho;
    var No = {
        readContext: wl,
        use: dn,
        useCallback: So,
        useContext: wl,
        useEffect: sc,
        useImperativeHandle: bo,
        useInsertionEffect: vo,
        useLayoutEffect: yo,
        useMemo: zo,
        useReducer: ic,
        useRef: mo,
        useState: function() {
            return ic(Kt)
        },
        useDebugValue: oc,
        useDeferredValue: function(l, t) {
            var a = jl();
            return yl === null ? dc(a, l, t) : po(a, yl.memoizedState, l, t)
        },
        useTransition: function() {
            var l = ic(Kt)[0]
              , t = jl().memoizedState;
            return [typeof l == "boolean" ? l : uu(l), t]
        },
        useSyncExternalStore: $s,
        useId: _o,
        useHostTransitionStatus: rc,
        useFormState: oo,
        useActionState: oo,
        useOptimistic: function(l, t) {
            var a = jl();
            return yl !== null ? to(a, yl, l, t) : (a.baseState = l,
            [l, a.queue.dispatch])
        },
        useMemoCache: uc,
        useCacheRefresh: Mo
    };
    No.useEffectEvent = ho;
    function yc(l, t, a, e) {
        t = l.memoizedState,
        a = a(e, t),
        a = a == null ? t : H({}, t, a),
        l.memoizedState = a,
        l.lanes === 0 && (l.updateQueue.baseState = a)
    }
    var gc = {
        enqueueSetState: function(l, t, a) {
            l = l._reactInternals;
            var e = yt()
              , u = sa(e);
            u.payload = t,
            a != null && (u.callback = a),
            t = oa(l, u, e),
            t !== null && (it(t, l, e),
            lu(t, l, e))
        },
        enqueueReplaceState: function(l, t, a) {
            l = l._reactInternals;
            var e = yt()
              , u = sa(e);
            u.tag = 1,
            u.payload = t,
            a != null && (u.callback = a),
            t = oa(l, u, e),
            t !== null && (it(t, l, e),
            lu(t, l, e))
        },
        enqueueForceUpdate: function(l, t) {
            l = l._reactInternals;
            var a = yt()
              , e = sa(a);
            e.tag = 2,
            t != null && (e.callback = t),
            t = oa(l, e, a),
            t !== null && (it(t, l, a),
            lu(t, l, a))
        }
    };
    function Co(l, t, a, e, u, n, i) {
        return l = l.stateNode,
        typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(e, n, i) : t.prototype && t.prototype.isPureReactComponent ? !Je(a, e) || !Je(u, n) : !0
    }
    function jo(l, t, a, e) {
        l = t.state,
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, e),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, e),
        t.state !== l && gc.enqueueReplaceState(t, t.state, null)
    }
    function Va(l, t) {
        var a = t;
        if ("ref" in t) {
            a = {};
            for (var e in t)
                e !== "ref" && (a[e] = t[e])
        }
        if (l = l.defaultProps) {
            a === t && (a = H({}, a));
            for (var u in l)
                a[u] === void 0 && (a[u] = l[u])
        }
        return a
    }
    function Ro(l) {
        Ju(l)
    }
    function Ho(l) {
        console.error(l)
    }
    function Bo(l) {
        Ju(l)
    }
    function yn(l, t) {
        try {
            var a = l.onUncaughtError;
            a(t.value, {
                componentStack: t.stack
            })
        } catch (e) {
            setTimeout(function() {
                throw e
            })
        }
    }
    function qo(l, t, a) {
        try {
            var e = l.onCaughtError;
            e(a.value, {
                componentStack: a.stack,
                errorBoundary: t.tag === 1 ? t.stateNode : null
            })
        } catch (u) {
            setTimeout(function() {
                throw u
            })
        }
    }
    function bc(l, t, a) {
        return a = sa(a),
        a.tag = 3,
        a.payload = {
            element: null
        },
        a.callback = function() {
            yn(l, t)
        }
        ,
        a
    }
    function Go(l) {
        return l = sa(l),
        l.tag = 3,
        l
    }
    function Yo(l, t, a, e) {
        var u = a.type.getDerivedStateFromError;
        if (typeof u == "function") {
            var n = e.value;
            l.payload = function() {
                return u(n)
            }
            ,
            l.callback = function() {
                qo(t, a, e)
            }
        }
        var i = a.stateNode;
        i !== null && typeof i.componentDidCatch == "function" && (l.callback = function() {
            qo(t, a, e),
            typeof u != "function" && (ya === null ? ya = new Set([this]) : ya.add(this));
            var c = e.stack;
            this.componentDidCatch(e.value, {
                componentStack: c !== null ? c : ""
            })
        }
        )
    }
    function mm(l, t, a, e, u) {
        if (a.flags |= 32768,
        e !== null && typeof e == "object" && typeof e.then == "function") {
            if (t = a.alternate,
            t !== null && de(t, a, u, !0),
            a = mt.current,
            a !== null) {
                switch (a.tag) {
                case 31:
                case 13:
                    return At === null ? On() : a.alternate === null && Ul === 0 && (Ul = 3),
                    a.flags &= -257,
                    a.flags |= 65536,
                    a.lanes = u,
                    e === an ? a.flags |= 16384 : (t = a.updateQueue,
                    t === null ? a.updateQueue = new Set([e]) : t.add(e),
                    Lc(l, e, u)),
                    !1;
                case 22:
                    return a.flags |= 65536,
                    e === an ? a.flags |= 16384 : (t = a.updateQueue,
                    t === null ? (t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([e])
                    },
                    a.updateQueue = t) : (a = t.retryQueue,
                    a === null ? t.retryQueue = new Set([e]) : a.add(e)),
                    Lc(l, e, u)),
                    !1
                }
                throw Error(f(435, a.tag))
            }
            return Lc(l, e, u),
            On(),
            !1
        }
        if (nl)
            return t = mt.current,
            t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            t.flags |= 65536,
            t.lanes = u,
            e !== qi && (l = Error(f(422), {
                cause: e
            }),
            $e(zt(l, a)))) : (e !== qi && (t = Error(f(423), {
                cause: e
            }),
            $e(zt(t, a))),
            l = l.current.alternate,
            l.flags |= 65536,
            u &= -u,
            l.lanes |= u,
            e = zt(e, a),
            u = bc(l.stateNode, e, u),
            Wi(l, u),
            Ul !== 4 && (Ul = 2)),
            !1;
        var n = Error(f(520), {
            cause: e
        });
        if (n = zt(n, a),
        hu === null ? hu = [n] : hu.push(n),
        Ul !== 4 && (Ul = 2),
        t === null)
            return !0;
        e = zt(e, a),
        a = t;
        do {
            switch (a.tag) {
            case 3:
                return a.flags |= 65536,
                l = u & -u,
                a.lanes |= l,
                l = bc(a.stateNode, e, l),
                Wi(a, l),
                !1;
            case 1:
                if (t = a.type,
                n = a.stateNode,
                (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (ya === null || !ya.has(n))))
                    return a.flags |= 65536,
                    u &= -u,
                    a.lanes |= u,
                    u = Go(u),
                    Yo(u, l, a, e),
                    Wi(a, u),
                    !1
            }
            a = a.return
        } while (a !== null);
        return !1
    }
    var Sc = Error(f(461))
      , Gl = !1;
    function Wl(l, t, a, e) {
        t.child = l === null ? Zs(t, null, a, e) : Za(t, l.child, a, e)
    }
    function Xo(l, t, a, e, u) {
        a = a.render;
        var n = t.ref;
        if ("ref" in e) {
            var i = {};
            for (var c in e)
                c !== "ref" && (i[c] = e[c])
        } else
            i = e;
        return Ga(t),
        e = lc(l, t, a, i, n, u),
        c = tc(),
        l !== null && !Gl ? (ac(l, t, u),
        Jt(l, t, u)) : (nl && c && Hi(t),
        t.flags |= 1,
        Wl(l, t, e, u),
        t.child)
    }
    function Qo(l, t, a, e, u) {
        if (l === null) {
            var n = a.type;
            return typeof n == "function" && !Ci(n) && n.defaultProps === void 0 && a.compare === null ? (t.tag = 15,
            t.type = n,
            Zo(l, t, n, e, u)) : (l = ku(a.type, null, e, t, t.mode, u),
            l.ref = t.ref,
            l.return = t,
            t.child = l)
        }
        if (n = l.child,
        !xc(l, u)) {
            var i = n.memoizedProps;
            if (a = a.compare,
            a = a !== null ? a : Je,
            a(i, e) && l.ref === t.ref)
                return Jt(l, t, u)
        }
        return t.flags |= 1,
        l = Xt(n, e),
        l.ref = t.ref,
        l.return = t,
        t.child = l
    }
    function Zo(l, t, a, e, u) {
        if (l !== null) {
            var n = l.memoizedProps;
            if (Je(n, e) && l.ref === t.ref)
                if (Gl = !1,
                t.pendingProps = e = n,
                xc(l, u))
                    (l.flags & 131072) !== 0 && (Gl = !0);
                else
                    return t.lanes = l.lanes,
                    Jt(l, t, u)
        }
        return zc(l, t, a, e, u)
    }
    function Lo(l, t, a, e) {
        var u = e.children
          , n = l !== null ? l.memoizedState : null;
        if (l === null && t.stateNode === null && (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        e.mode === "hidden") {
            if ((t.flags & 128) !== 0) {
                if (n = n !== null ? n.baseLanes | a : a,
                l !== null) {
                    for (e = t.child = l.child,
                    u = 0; e !== null; )
                        u = u | e.lanes | e.childLanes,
                        e = e.sibling;
                    e = u & ~n
                } else
                    e = 0,
                    t.child = null;
                return Vo(l, t, n, a, e)
            }
            if ((a & 536870912) !== 0)
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                l !== null && ln(t, n !== null ? n.cachePool : null),
                n !== null ? Ks(t, n) : ki(),
                Js(t);
            else
                return e = t.lanes = 536870912,
                Vo(l, t, n !== null ? n.baseLanes | a : a, a, e)
        } else
            n !== null ? (ln(t, n.cachePool),
            Ks(t, n),
            ma(),
            t.memoizedState = null) : (l !== null && ln(t, null),
            ki(),
            ma());
        return Wl(l, t, u, a),
        t.child
    }
    function cu(l, t) {
        return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        t.sibling
    }
    function Vo(l, t, a, e, u) {
        var n = Vi();
        return n = n === null ? null : {
            parent: Bl._currentValue,
            pool: n
        },
        t.memoizedState = {
            baseLanes: a,
            cachePool: n
        },
        l !== null && ln(t, null),
        ki(),
        Js(t),
        l !== null && de(l, t, e, !0),
        t.childLanes = u,
        null
    }
    function gn(l, t) {
        return t = Sn({
            mode: t.mode,
            children: t.children
        }, l.mode),
        t.ref = l.ref,
        l.child = t,
        t.return = l,
        t
    }
    function Ko(l, t, a) {
        return Za(t, l.child, null, a),
        l = gn(t, t.pendingProps),
        l.flags |= 2,
        rt(t),
        t.memoizedState = null,
        l
    }
    function rm(l, t, a) {
        var e = t.pendingProps
          , u = (t.flags & 128) !== 0;
        if (t.flags &= -129,
        l === null) {
            if (nl) {
                if (e.mode === "hidden")
                    return l = gn(t, e),
                    t.lanes = 536870912,
                    cu(null, l);
                if (Ii(t),
                (l = Tl) ? (l = ed(l, Tt),
                l = l !== null && l.data === "&" ? l : null,
                l !== null && (t.memoizedState = {
                    dehydrated: l,
                    treeContext: ua !== null ? {
                        id: Ct,
                        overflow: jt
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                a = xs(l),
                a.return = t,
                t.child = a,
                Jl = t,
                Tl = null)) : l = null,
                l === null)
                    throw ia(t);
                return t.lanes = 536870912,
                null
            }
            return gn(t, e)
        }
        var n = l.memoizedState;
        if (n !== null) {
            var i = n.dehydrated;
            if (Ii(t),
            u)
                if (t.flags & 256)
                    t.flags &= -257,
                    t = Ko(l, t, a);
                else if (t.memoizedState !== null)
                    t.child = l.child,
                    t.flags |= 128,
                    t = null;
                else
                    throw Error(f(558));
            else if (Gl || de(l, t, a, !1),
            u = (a & l.childLanes) !== 0,
            Gl || u) {
                if (e = zl,
                e !== null && (i = Rf(e, a),
                i !== 0 && i !== n.retryLane))
                    throw n.retryLane = i,
                    Ra(l, i),
                    it(e, l, i),
                    Sc;
                On(),
                t = Ko(l, t, a)
            } else
                l = n.treeContext,
                Tl = _t(i.nextSibling),
                Jl = t,
                nl = !0,
                na = null,
                Tt = !1,
                l !== null && Us(t, l),
                t = gn(t, e),
                t.flags |= 4096;
            return t
        }
        return l = Xt(l.child, {
            mode: e.mode,
            children: e.children
        }),
        l.ref = t.ref,
        t.child = l,
        l.return = t,
        l
    }
    function bn(l, t) {
        var a = t.ref;
        if (a === null)
            l !== null && l.ref !== null && (t.flags |= 4194816);
        else {
            if (typeof a != "function" && typeof a != "object")
                throw Error(f(284));
            (l === null || l.ref !== a) && (t.flags |= 4194816)
        }
    }
    function zc(l, t, a, e, u) {
        return Ga(t),
        a = lc(l, t, a, e, void 0, u),
        e = tc(),
        l !== null && !Gl ? (ac(l, t, u),
        Jt(l, t, u)) : (nl && e && Hi(t),
        t.flags |= 1,
        Wl(l, t, a, u),
        t.child)
    }
    function Jo(l, t, a, e, u, n) {
        return Ga(t),
        t.updateQueue = null,
        a = Ws(t, e, a, u),
        ws(l),
        e = tc(),
        l !== null && !Gl ? (ac(l, t, n),
        Jt(l, t, n)) : (nl && e && Hi(t),
        t.flags |= 1,
        Wl(l, t, a, n),
        t.child)
    }
    function wo(l, t, a, e, u) {
        if (Ga(t),
        t.stateNode === null) {
            var n = ce
              , i = a.contextType;
            typeof i == "object" && i !== null && (n = wl(i)),
            n = new a(e,n),
            t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null,
            n.updater = gc,
            t.stateNode = n,
            n._reactInternals = t,
            n = t.stateNode,
            n.props = e,
            n.state = t.memoizedState,
            n.refs = {},
            Ji(t),
            i = a.contextType,
            n.context = typeof i == "object" && i !== null ? wl(i) : ce,
            n.state = t.memoizedState,
            i = a.getDerivedStateFromProps,
            typeof i == "function" && (yc(t, a, i, e),
            n.state = t.memoizedState),
            typeof a.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (i = n.state,
            typeof n.componentWillMount == "function" && n.componentWillMount(),
            typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(),
            i !== n.state && gc.enqueueReplaceState(n, n.state, null),
            au(t, e, n, u),
            tu(),
            n.state = t.memoizedState),
            typeof n.componentDidMount == "function" && (t.flags |= 4194308),
            e = !0
        } else if (l === null) {
            n = t.stateNode;
            var c = t.memoizedProps
              , s = Va(a, c);
            n.props = s;
            var y = n.context
              , p = a.contextType;
            i = ce,
            typeof p == "object" && p !== null && (i = wl(p));
            var M = a.getDerivedStateFromProps;
            p = typeof M == "function" || typeof n.getSnapshotBeforeUpdate == "function",
            c = t.pendingProps !== c,
            p || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || y !== i) && jo(t, n, e, i),
            fa = !1;
            var g = t.memoizedState;
            n.state = g,
            au(t, e, n, u),
            tu(),
            y = t.memoizedState,
            c || g !== y || fa ? (typeof M == "function" && (yc(t, a, M, e),
            y = t.memoizedState),
            (s = fa || Co(t, a, s, e, g, y, i)) ? (p || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(),
            typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()),
            typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308),
            t.memoizedProps = e,
            t.memoizedState = y),
            n.props = e,
            n.state = y,
            n.context = i,
            e = s) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308),
            e = !1)
        } else {
            n = t.stateNode,
            wi(l, t),
            i = t.memoizedProps,
            p = Va(a, i),
            n.props = p,
            M = t.pendingProps,
            g = n.context,
            y = a.contextType,
            s = ce,
            typeof y == "object" && y !== null && (s = wl(y)),
            c = a.getDerivedStateFromProps,
            (y = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i !== M || g !== s) && jo(t, n, e, s),
            fa = !1,
            g = t.memoizedState,
            n.state = g,
            au(t, e, n, u),
            tu();
            var b = t.memoizedState;
            i !== M || g !== b || fa || l !== null && l.dependencies !== null && Iu(l.dependencies) ? (typeof c == "function" && (yc(t, a, c, e),
            b = t.memoizedState),
            (p = fa || Co(t, a, p, e, g, b, s) || l !== null && l.dependencies !== null && Iu(l.dependencies)) ? (y || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(e, b, s),
            typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(e, b, s)),
            typeof n.componentDidUpdate == "function" && (t.flags |= 4),
            typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || i === l.memoizedProps && g === l.memoizedState || (t.flags |= 4),
            typeof n.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && g === l.memoizedState || (t.flags |= 1024),
            t.memoizedProps = e,
            t.memoizedState = b),
            n.props = e,
            n.state = b,
            n.context = s,
            e = p) : (typeof n.componentDidUpdate != "function" || i === l.memoizedProps && g === l.memoizedState || (t.flags |= 4),
            typeof n.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && g === l.memoizedState || (t.flags |= 1024),
            e = !1)
        }
        return n = e,
        bn(l, t),
        e = (t.flags & 128) !== 0,
        n || e ? (n = t.stateNode,
        a = e && typeof a.getDerivedStateFromError != "function" ? null : n.render(),
        t.flags |= 1,
        l !== null && e ? (t.child = Za(t, l.child, null, u),
        t.child = Za(t, null, a, u)) : Wl(l, t, a, u),
        t.memoizedState = n.state,
        l = t.child) : l = Jt(l, t, u),
        l
    }
    function Wo(l, t, a, e) {
        return Ba(),
        t.flags |= 256,
        Wl(l, t, a, e),
        t.child
    }
    var pc = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };
    function Ec(l) {
        return {
            baseLanes: l,
            cachePool: Bs()
        }
    }
    function Tc(l, t, a) {
        return l = l !== null ? l.childLanes & ~a : 0,
        t && (l |= vt),
        l
    }
    function $o(l, t, a) {
        var e = t.pendingProps, u = !1, n = (t.flags & 128) !== 0, i;
        if ((i = n) || (i = l !== null && l.memoizedState === null ? !1 : (Cl.current & 2) !== 0),
        i && (u = !0,
        t.flags &= -129),
        i = (t.flags & 32) !== 0,
        t.flags &= -33,
        l === null) {
            if (nl) {
                if (u ? da(t) : ma(),
                (l = Tl) ? (l = ed(l, Tt),
                l = l !== null && l.data !== "&" ? l : null,
                l !== null && (t.memoizedState = {
                    dehydrated: l,
                    treeContext: ua !== null ? {
                        id: Ct,
                        overflow: jt
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                a = xs(l),
                a.return = t,
                t.child = a,
                Jl = t,
                Tl = null)) : l = null,
                l === null)
                    throw ia(t);
                return nf(l) ? t.lanes = 32 : t.lanes = 536870912,
                null
            }
            var c = e.children;
            return e = e.fallback,
            u ? (ma(),
            u = t.mode,
            c = Sn({
                mode: "hidden",
                children: c
            }, u),
            e = Ha(e, u, a, null),
            c.return = t,
            e.return = t,
            c.sibling = e,
            t.child = c,
            e = t.child,
            e.memoizedState = Ec(a),
            e.childLanes = Tc(l, i, a),
            t.memoizedState = pc,
            cu(null, e)) : (da(t),
            Ac(t, c))
        }
        var s = l.memoizedState;
        if (s !== null && (c = s.dehydrated,
        c !== null)) {
            if (n)
                t.flags & 256 ? (da(t),
                t.flags &= -257,
                t = _c(l, t, a)) : t.memoizedState !== null ? (ma(),
                t.child = l.child,
                t.flags |= 128,
                t = null) : (ma(),
                c = e.fallback,
                u = t.mode,
                e = Sn({
                    mode: "visible",
                    children: e.children
                }, u),
                c = Ha(c, u, a, null),
                c.flags |= 2,
                e.return = t,
                c.return = t,
                e.sibling = c,
                t.child = e,
                Za(t, l.child, null, a),
                e = t.child,
                e.memoizedState = Ec(a),
                e.childLanes = Tc(l, i, a),
                t.memoizedState = pc,
                t = cu(null, e));
            else if (da(t),
            nf(c)) {
                if (i = c.nextSibling && c.nextSibling.dataset,
                i)
                    var y = i.dgst;
                i = y,
                e = Error(f(419)),
                e.stack = "",
                e.digest = i,
                $e({
                    value: e,
                    source: null,
                    stack: null
                }),
                t = _c(l, t, a)
            } else if (Gl || de(l, t, a, !1),
            i = (a & l.childLanes) !== 0,
            Gl || i) {
                if (i = zl,
                i !== null && (e = Rf(i, a),
                e !== 0 && e !== s.retryLane))
                    throw s.retryLane = e,
                    Ra(l, e),
                    it(i, l, e),
                    Sc;
                uf(c) || On(),
                t = _c(l, t, a)
            } else
                uf(c) ? (t.flags |= 192,
                t.child = l.child,
                t = null) : (l = s.treeContext,
                Tl = _t(c.nextSibling),
                Jl = t,
                nl = !0,
                na = null,
                Tt = !1,
                l !== null && Us(t, l),
                t = Ac(t, e.children),
                t.flags |= 4096);
            return t
        }
        return u ? (ma(),
        c = e.fallback,
        u = t.mode,
        s = l.child,
        y = s.sibling,
        e = Xt(s, {
            mode: "hidden",
            children: e.children
        }),
        e.subtreeFlags = s.subtreeFlags & 65011712,
        y !== null ? c = Xt(y, c) : (c = Ha(c, u, a, null),
        c.flags |= 2),
        c.return = t,
        e.return = t,
        e.sibling = c,
        t.child = e,
        cu(null, e),
        e = t.child,
        c = l.child.memoizedState,
        c === null ? c = Ec(a) : (u = c.cachePool,
        u !== null ? (s = Bl._currentValue,
        u = u.parent !== s ? {
            parent: s,
            pool: s
        } : u) : u = Bs(),
        c = {
            baseLanes: c.baseLanes | a,
            cachePool: u
        }),
        e.memoizedState = c,
        e.childLanes = Tc(l, i, a),
        t.memoizedState = pc,
        cu(l.child, e)) : (da(t),
        a = l.child,
        l = a.sibling,
        a = Xt(a, {
            mode: "visible",
            children: e.children
        }),
        a.return = t,
        a.sibling = null,
        l !== null && (i = t.deletions,
        i === null ? (t.deletions = [l],
        t.flags |= 16) : i.push(l)),
        t.child = a,
        t.memoizedState = null,
        a)
    }
    function Ac(l, t) {
        return t = Sn({
            mode: "visible",
            children: t
        }, l.mode),
        t.return = l,
        l.child = t
    }
    function Sn(l, t) {
        return l = dt(22, l, null, t),
        l.lanes = 0,
        l
    }
    function _c(l, t, a) {
        return Za(t, l.child, null, a),
        l = Ac(t, t.pendingProps.children),
        l.flags |= 2,
        t.memoizedState = null,
        l
    }
    function ko(l, t, a) {
        l.lanes |= t;
        var e = l.alternate;
        e !== null && (e.lanes |= t),
        Xi(l.return, t, a)
    }
    function Mc(l, t, a, e, u, n) {
        var i = l.memoizedState;
        i === null ? l.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: e,
            tail: a,
            tailMode: u,
            treeForkCount: n
        } : (i.isBackwards = t,
        i.rendering = null,
        i.renderingStartTime = 0,
        i.last = e,
        i.tail = a,
        i.tailMode = u,
        i.treeForkCount = n)
    }
    function Fo(l, t, a) {
        var e = t.pendingProps
          , u = e.revealOrder
          , n = e.tail;
        e = e.children;
        var i = Cl.current
          , c = (i & 2) !== 0;
        if (c ? (i = i & 1 | 2,
        t.flags |= 128) : i &= 1,
        C(Cl, i),
        Wl(l, t, e, a),
        e = nl ? We : 0,
        !c && l !== null && (l.flags & 128) !== 0)
            l: for (l = t.child; l !== null; ) {
                if (l.tag === 13)
                    l.memoizedState !== null && ko(l, a, t);
                else if (l.tag === 19)
                    ko(l, a, t);
                else if (l.child !== null) {
                    l.child.return = l,
                    l = l.child;
                    continue
                }
                if (l === t)
                    break l;
                for (; l.sibling === null; ) {
                    if (l.return === null || l.return === t)
                        break l;
                    l = l.return
                }
                l.sibling.return = l.return,
                l = l.sibling
            }
        switch (u) {
        case "forwards":
            for (a = t.child,
            u = null; a !== null; )
                l = a.alternate,
                l !== null && cn(l) === null && (u = a),
                a = a.sibling;
            a = u,
            a === null ? (u = t.child,
            t.child = null) : (u = a.sibling,
            a.sibling = null),
            Mc(t, !1, u, a, n, e);
            break;
        case "backwards":
        case "unstable_legacy-backwards":
            for (a = null,
            u = t.child,
            t.child = null; u !== null; ) {
                if (l = u.alternate,
                l !== null && cn(l) === null) {
                    t.child = u;
                    break
                }
                l = u.sibling,
                u.sibling = a,
                a = u,
                u = l
            }
            Mc(t, !0, a, null, n, e);
            break;
        case "together":
            Mc(t, !1, null, null, void 0, e);
            break;
        default:
            t.memoizedState = null
        }
        return t.child
    }
    function Jt(l, t, a) {
        if (l !== null && (t.dependencies = l.dependencies),
        va |= t.lanes,
        (a & t.childLanes) === 0)
            if (l !== null) {
                if (de(l, t, a, !1),
                (a & t.childLanes) === 0)
                    return null
            } else
                return null;
        if (l !== null && t.child !== l.child)
            throw Error(f(153));
        if (t.child !== null) {
            for (l = t.child,
            a = Xt(l, l.pendingProps),
            t.child = a,
            a.return = t; l.sibling !== null; )
                l = l.sibling,
                a = a.sibling = Xt(l, l.pendingProps),
                a.return = t;
            a.sibling = null
        }
        return t.child
    }
    function xc(l, t) {
        return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies,
        !!(l !== null && Iu(l)))
    }
    function hm(l, t, a) {
        switch (t.tag) {
        case 3:
            Fl(t, t.stateNode.containerInfo),
            ca(t, Bl, l.memoizedState.cache),
            Ba();
            break;
        case 27:
        case 5:
            je(t);
            break;
        case 4:
            Fl(t, t.stateNode.containerInfo);
            break;
        case 10:
            ca(t, t.type, t.memoizedProps.value);
            break;
        case 31:
            if (t.memoizedState !== null)
                return t.flags |= 128,
                Ii(t),
                null;
            break;
        case 13:
            var e = t.memoizedState;
            if (e !== null)
                return e.dehydrated !== null ? (da(t),
                t.flags |= 128,
                null) : (a & t.child.childLanes) !== 0 ? $o(l, t, a) : (da(t),
                l = Jt(l, t, a),
                l !== null ? l.sibling : null);
            da(t);
            break;
        case 19:
            var u = (l.flags & 128) !== 0;
            if (e = (a & t.childLanes) !== 0,
            e || (de(l, t, a, !1),
            e = (a & t.childLanes) !== 0),
            u) {
                if (e)
                    return Fo(l, t, a);
                t.flags |= 128
            }
            if (u = t.memoizedState,
            u !== null && (u.rendering = null,
            u.tail = null,
            u.lastEffect = null),
            C(Cl, Cl.current),
            e)
                break;
            return null;
        case 22:
            return t.lanes = 0,
            Lo(l, t, a, t.pendingProps);
        case 24:
            ca(t, Bl, l.memoizedState.cache)
        }
        return Jt(l, t, a)
    }
    function Io(l, t, a) {
        if (l !== null)
            if (l.memoizedProps !== t.pendingProps)
                Gl = !0;
            else {
                if (!xc(l, a) && (t.flags & 128) === 0)
                    return Gl = !1,
                    hm(l, t, a);
                Gl = (l.flags & 131072) !== 0
            }
        else
            Gl = !1,
            nl && (t.flags & 1048576) !== 0 && Ds(t, We, t.index);
        switch (t.lanes = 0,
        t.tag) {
        case 16:
            l: {
                var e = t.pendingProps;
                if (l = Xa(t.elementType),
                t.type = l,
                typeof l == "function")
                    Ci(l) ? (e = Va(l, e),
                    t.tag = 1,
                    t = wo(null, t, l, e, a)) : (t.tag = 0,
                    t = zc(null, t, l, e, a));
                else {
                    if (l != null) {
                        var u = l.$$typeof;
                        if (u === xl) {
                            t.tag = 11,
                            t = Xo(null, t, l, e, a);
                            break l
                        } else if (u === I) {
                            t.tag = 14,
                            t = Qo(null, t, l, e, a);
                            break l
                        }
                    }
                    throw t = Bt(l) || l,
                    Error(f(306, t, ""))
                }
            }
            return t;
        case 0:
            return zc(l, t, t.type, t.pendingProps, a);
        case 1:
            return e = t.type,
            u = Va(e, t.pendingProps),
            wo(l, t, e, u, a);
        case 3:
            l: {
                if (Fl(t, t.stateNode.containerInfo),
                l === null)
                    throw Error(f(387));
                e = t.pendingProps;
                var n = t.memoizedState;
                u = n.element,
                wi(l, t),
                au(t, e, null, a);
                var i = t.memoizedState;
                if (e = i.cache,
                ca(t, Bl, e),
                e !== n.cache && Qi(t, [Bl], a, !0),
                tu(),
                e = i.element,
                n.isDehydrated)
                    if (n = {
                        element: e,
                        isDehydrated: !1,
                        cache: i.cache
                    },
                    t.updateQueue.baseState = n,
                    t.memoizedState = n,
                    t.flags & 256) {
                        t = Wo(l, t, e, a);
                        break l
                    } else if (e !== u) {
                        u = zt(Error(f(424)), t),
                        $e(u),
                        t = Wo(l, t, e, a);
                        break l
                    } else
                        for (l = t.stateNode.containerInfo,
                        l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l,
                        Tl = _t(l.firstChild),
                        Jl = t,
                        nl = !0,
                        na = null,
                        Tt = !0,
                        a = Zs(t, null, e, a),
                        t.child = a; a; )
                            a.flags = a.flags & -3 | 4096,
                            a = a.sibling;
                else {
                    if (Ba(),
                    e === u) {
                        t = Jt(l, t, a);
                        break l
                    }
                    Wl(l, t, e, a)
                }
                t = t.child
            }
            return t;
        case 26:
            return bn(l, t),
            l === null ? (a = sd(t.type, null, t.pendingProps, null)) ? t.memoizedState = a : nl || (a = t.type,
            l = t.pendingProps,
            e = Hn(P.current).createElement(a),
            e[Kl] = t,
            e[lt] = l,
            $l(e, a, l),
            Zl(e),
            t.stateNode = e) : t.memoizedState = sd(t.type, l.memoizedProps, t.pendingProps, l.memoizedState),
            null;
        case 27:
            return je(t),
            l === null && nl && (e = t.stateNode = id(t.type, t.pendingProps, P.current),
            Jl = t,
            Tt = !0,
            u = Tl,
            za(t.type) ? (cf = u,
            Tl = _t(e.firstChild)) : Tl = u),
            Wl(l, t, t.pendingProps.children, a),
            bn(l, t),
            l === null && (t.flags |= 4194304),
            t.child;
        case 5:
            return l === null && nl && ((u = e = Tl) && (e = Vm(e, t.type, t.pendingProps, Tt),
            e !== null ? (t.stateNode = e,
            Jl = t,
            Tl = _t(e.firstChild),
            Tt = !1,
            u = !0) : u = !1),
            u || ia(t)),
            je(t),
            u = t.type,
            n = t.pendingProps,
            i = l !== null ? l.memoizedProps : null,
            e = n.children,
            tf(u, n) ? e = null : i !== null && tf(u, i) && (t.flags |= 32),
            t.memoizedState !== null && (u = lc(l, t, nm, null, null, a),
            Eu._currentValue = u),
            bn(l, t),
            Wl(l, t, e, a),
            t.child;
        case 6:
            return l === null && nl && ((l = a = Tl) && (a = Km(a, t.pendingProps, Tt),
            a !== null ? (t.stateNode = a,
            Jl = t,
            Tl = null,
            l = !0) : l = !1),
            l || ia(t)),
            null;
        case 13:
            return $o(l, t, a);
        case 4:
            return Fl(t, t.stateNode.containerInfo),
            e = t.pendingProps,
            l === null ? t.child = Za(t, null, e, a) : Wl(l, t, e, a),
            t.child;
        case 11:
            return Xo(l, t, t.type, t.pendingProps, a);
        case 7:
            return Wl(l, t, t.pendingProps, a),
            t.child;
        case 8:
            return Wl(l, t, t.pendingProps.children, a),
            t.child;
        case 12:
            return Wl(l, t, t.pendingProps.children, a),
            t.child;
        case 10:
            return e = t.pendingProps,
            ca(t, t.type, e.value),
            Wl(l, t, e.children, a),
            t.child;
        case 9:
            return u = t.type._context,
            e = t.pendingProps.children,
            Ga(t),
            u = wl(u),
            e = e(u),
            t.flags |= 1,
            Wl(l, t, e, a),
            t.child;
        case 14:
            return Qo(l, t, t.type, t.pendingProps, a);
        case 15:
            return Zo(l, t, t.type, t.pendingProps, a);
        case 19:
            return Fo(l, t, a);
        case 31:
            return rm(l, t, a);
        case 22:
            return Lo(l, t, a, t.pendingProps);
        case 24:
            return Ga(t),
            e = wl(Bl),
            l === null ? (u = Vi(),
            u === null && (u = zl,
            n = Zi(),
            u.pooledCache = n,
            n.refCount++,
            n !== null && (u.pooledCacheLanes |= a),
            u = n),
            t.memoizedState = {
                parent: e,
                cache: u
            },
            Ji(t),
            ca(t, Bl, u)) : ((l.lanes & a) !== 0 && (wi(l, t),
            au(t, null, null, a),
            tu()),
            u = l.memoizedState,
            n = t.memoizedState,
            u.parent !== e ? (u = {
                parent: e,
                cache: e
            },
            t.memoizedState = u,
            t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u),
            ca(t, Bl, e)) : (e = n.cache,
            ca(t, Bl, e),
            e !== u.cache && Qi(t, [Bl], a, !0))),
            Wl(l, t, t.pendingProps.children, a),
            t.child;
        case 29:
            throw t.pendingProps
        }
        throw Error(f(156, t.tag))
    }
    function wt(l) {
        l.flags |= 4
    }
    function Oc(l, t, a, e, u) {
        if ((t = (l.mode & 32) !== 0) && (t = !1),
        t) {
            if (l.flags |= 16777216,
            (u & 335544128) === u)
                if (l.stateNode.complete)
                    l.flags |= 8192;
                else if (_0())
                    l.flags |= 8192;
                else
                    throw Qa = an,
                    Ki
        } else
            l.flags &= -16777217
    }
    function Po(l, t) {
        if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
            l.flags &= -16777217;
        else if (l.flags |= 16777216,
        !hd(t))
            if (_0())
                l.flags |= 8192;
            else
                throw Qa = an,
                Ki
    }
    function zn(l, t) {
        t !== null && (l.flags |= 4),
        l.flags & 16384 && (t = l.tag !== 22 ? Nf() : 536870912,
        l.lanes |= t,
        Te |= t)
    }
    function fu(l, t) {
        if (!nl)
            switch (l.tailMode) {
            case "hidden":
                t = l.tail;
                for (var a = null; t !== null; )
                    t.alternate !== null && (a = t),
                    t = t.sibling;
                a === null ? l.tail = null : a.sibling = null;
                break;
            case "collapsed":
                a = l.tail;
                for (var e = null; a !== null; )
                    a.alternate !== null && (e = a),
                    a = a.sibling;
                e === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : e.sibling = null
            }
    }
    function Al(l) {
        var t = l.alternate !== null && l.alternate.child === l.child
          , a = 0
          , e = 0;
        if (t)
            for (var u = l.child; u !== null; )
                a |= u.lanes | u.childLanes,
                e |= u.subtreeFlags & 65011712,
                e |= u.flags & 65011712,
                u.return = l,
                u = u.sibling;
        else
            for (u = l.child; u !== null; )
                a |= u.lanes | u.childLanes,
                e |= u.subtreeFlags,
                e |= u.flags,
                u.return = l,
                u = u.sibling;
        return l.subtreeFlags |= e,
        l.childLanes = a,
        t
    }
    function vm(l, t, a) {
        var e = t.pendingProps;
        switch (Bi(t),
        t.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Al(t),
            null;
        case 1:
            return Al(t),
            null;
        case 3:
            return a = t.stateNode,
            e = null,
            l !== null && (e = l.memoizedState.cache),
            t.memoizedState.cache !== e && (t.flags |= 2048),
            Lt(Bl),
            Nl(),
            a.pendingContext && (a.context = a.pendingContext,
            a.pendingContext = null),
            (l === null || l.child === null) && (oe(t) ? wt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024,
            Gi())),
            Al(t),
            null;
        case 26:
            var u = t.type
              , n = t.memoizedState;
            return l === null ? (wt(t),
            n !== null ? (Al(t),
            Po(t, n)) : (Al(t),
            Oc(t, u, null, e, a))) : n ? n !== l.memoizedState ? (wt(t),
            Al(t),
            Po(t, n)) : (Al(t),
            t.flags &= -16777217) : (l = l.memoizedProps,
            l !== e && wt(t),
            Al(t),
            Oc(t, u, l, e, a)),
            null;
        case 27:
            if (Uu(t),
            a = P.current,
            u = t.type,
            l !== null && t.stateNode != null)
                l.memoizedProps !== e && wt(t);
            else {
                if (!e) {
                    if (t.stateNode === null)
                        throw Error(f(166));
                    return Al(t),
                    null
                }
                l = R.current,
                oe(t) ? Ns(t) : (l = id(u, e, a),
                t.stateNode = l,
                wt(t))
            }
            return Al(t),
            null;
        case 5:
            if (Uu(t),
            u = t.type,
            l !== null && t.stateNode != null)
                l.memoizedProps !== e && wt(t);
            else {
                if (!e) {
                    if (t.stateNode === null)
                        throw Error(f(166));
                    return Al(t),
                    null
                }
                if (n = R.current,
                oe(t))
                    Ns(t);
                else {
                    var i = Hn(P.current);
                    switch (n) {
                    case 1:
                        n = i.createElementNS("http://www.w3.org/2000/svg", u);
                        break;
                    case 2:
                        n = i.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                        break;
                    default:
                        switch (u) {
                        case "svg":
                            n = i.createElementNS("http://www.w3.org/2000/svg", u);
                            break;
                        case "math":
                            n = i.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                            break;
                        case "script":
                            n = i.createElement("div"),
                            n.innerHTML = "<script><\/script>",
                            n = n.removeChild(n.firstChild);
                            break;
                        case "select":
                            n = typeof e.is == "string" ? i.createElement("select", {
                                is: e.is
                            }) : i.createElement("select"),
                            e.multiple ? n.multiple = !0 : e.size && (n.size = e.size);
                            break;
                        default:
                            n = typeof e.is == "string" ? i.createElement(u, {
                                is: e.is
                            }) : i.createElement(u)
                        }
                    }
                    n[Kl] = t,
                    n[lt] = e;
                    l: for (i = t.child; i !== null; ) {
                        if (i.tag === 5 || i.tag === 6)
                            n.appendChild(i.stateNode);
                        else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                            i.child.return = i,
                            i = i.child;
                            continue
                        }
                        if (i === t)
                            break l;
                        for (; i.sibling === null; ) {
                            if (i.return === null || i.return === t)
                                break l;
                            i = i.return
                        }
                        i.sibling.return = i.return,
                        i = i.sibling
                    }
                    t.stateNode = n;
                    l: switch ($l(n, u, e),
                    u) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        e = !!e.autoFocus;
                        break l;
                    case "img":
                        e = !0;
                        break l;
                    default:
                        e = !1
                    }
                    e && wt(t)
                }
            }
            return Al(t),
            Oc(t, t.type, l === null ? null : l.memoizedProps, t.pendingProps, a),
            null;
        case 6:
            if (l && t.stateNode != null)
                l.memoizedProps !== e && wt(t);
            else {
                if (typeof e != "string" && t.stateNode === null)
                    throw Error(f(166));
                if (l = P.current,
                oe(t)) {
                    if (l = t.stateNode,
                    a = t.memoizedProps,
                    e = null,
                    u = Jl,
                    u !== null)
                        switch (u.tag) {
                        case 27:
                        case 5:
                            e = u.memoizedProps
                        }
                    l[Kl] = t,
                    l = !!(l.nodeValue === a || e !== null && e.suppressHydrationWarning === !0 || $0(l.nodeValue, a)),
                    l || ia(t, !0)
                } else
                    l = Hn(l).createTextNode(e),
                    l[Kl] = t,
                    t.stateNode = l
            }
            return Al(t),
            null;
        case 31:
            if (a = t.memoizedState,
            l === null || l.memoizedState !== null) {
                if (e = oe(t),
                a !== null) {
                    if (l === null) {
                        if (!e)
                            throw Error(f(318));
                        if (l = t.memoizedState,
                        l = l !== null ? l.dehydrated : null,
                        !l)
                            throw Error(f(557));
                        l[Kl] = t
                    } else
                        Ba(),
                        (t.flags & 128) === 0 && (t.memoizedState = null),
                        t.flags |= 4;
                    Al(t),
                    l = !1
                } else
                    a = Gi(),
                    l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = a),
                    l = !0;
                if (!l)
                    return t.flags & 256 ? (rt(t),
                    t) : (rt(t),
                    null);
                if ((t.flags & 128) !== 0)
                    throw Error(f(558))
            }
            return Al(t),
            null;
        case 13:
            if (e = t.memoizedState,
            l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
                if (u = oe(t),
                e !== null && e.dehydrated !== null) {
                    if (l === null) {
                        if (!u)
                            throw Error(f(318));
                        if (u = t.memoizedState,
                        u = u !== null ? u.dehydrated : null,
                        !u)
                            throw Error(f(317));
                        u[Kl] = t
                    } else
                        Ba(),
                        (t.flags & 128) === 0 && (t.memoizedState = null),
                        t.flags |= 4;
                    Al(t),
                    u = !1
                } else
                    u = Gi(),
                    l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u),
                    u = !0;
                if (!u)
                    return t.flags & 256 ? (rt(t),
                    t) : (rt(t),
                    null)
            }
            return rt(t),
            (t.flags & 128) !== 0 ? (t.lanes = a,
            t) : (a = e !== null,
            l = l !== null && l.memoizedState !== null,
            a && (e = t.child,
            u = null,
            e.alternate !== null && e.alternate.memoizedState !== null && e.alternate.memoizedState.cachePool !== null && (u = e.alternate.memoizedState.cachePool.pool),
            n = null,
            e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool),
            n !== u && (e.flags |= 2048)),
            a !== l && a && (t.child.flags |= 8192),
            zn(t, t.updateQueue),
            Al(t),
            null);
        case 4:
            return Nl(),
            l === null && kc(t.stateNode.containerInfo),
            Al(t),
            null;
        case 10:
            return Lt(t.type),
            Al(t),
            null;
        case 19:
            if (x(Cl),
            e = t.memoizedState,
            e === null)
                return Al(t),
                null;
            if (u = (t.flags & 128) !== 0,
            n = e.rendering,
            n === null)
                if (u)
                    fu(e, !1);
                else {
                    if (Ul !== 0 || l !== null && (l.flags & 128) !== 0)
                        for (l = t.child; l !== null; ) {
                            if (n = cn(l),
                            n !== null) {
                                for (t.flags |= 128,
                                fu(e, !1),
                                l = n.updateQueue,
                                t.updateQueue = l,
                                zn(t, l),
                                t.subtreeFlags = 0,
                                l = a,
                                a = t.child; a !== null; )
                                    Ms(a, l),
                                    a = a.sibling;
                                return C(Cl, Cl.current & 1 | 2),
                                nl && Qt(t, e.treeForkCount),
                                t.child
                            }
                            l = l.sibling
                        }
                    e.tail !== null && ct() > _n && (t.flags |= 128,
                    u = !0,
                    fu(e, !1),
                    t.lanes = 4194304)
                }
            else {
                if (!u)
                    if (l = cn(n),
                    l !== null) {
                        if (t.flags |= 128,
                        u = !0,
                        l = l.updateQueue,
                        t.updateQueue = l,
                        zn(t, l),
                        fu(e, !0),
                        e.tail === null && e.tailMode === "hidden" && !n.alternate && !nl)
                            return Al(t),
                            null
                    } else
                        2 * ct() - e.renderingStartTime > _n && a !== 536870912 && (t.flags |= 128,
                        u = !0,
                        fu(e, !1),
                        t.lanes = 4194304);
                e.isBackwards ? (n.sibling = t.child,
                t.child = n) : (l = e.last,
                l !== null ? l.sibling = n : t.child = n,
                e.last = n)
            }
            return e.tail !== null ? (l = e.tail,
            e.rendering = l,
            e.tail = l.sibling,
            e.renderingStartTime = ct(),
            l.sibling = null,
            a = Cl.current,
            C(Cl, u ? a & 1 | 2 : a & 1),
            nl && Qt(t, e.treeForkCount),
            l) : (Al(t),
            null);
        case 22:
        case 23:
            return rt(t),
            Fi(),
            e = t.memoizedState !== null,
            l !== null ? l.memoizedState !== null !== e && (t.flags |= 8192) : e && (t.flags |= 8192),
            e ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (Al(t),
            t.subtreeFlags & 6 && (t.flags |= 8192)) : Al(t),
            a = t.updateQueue,
            a !== null && zn(t, a.retryQueue),
            a = null,
            l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool),
            e = null,
            t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool),
            e !== a && (t.flags |= 2048),
            l !== null && x(Ya),
            null;
        case 24:
            return a = null,
            l !== null && (a = l.memoizedState.cache),
            t.memoizedState.cache !== a && (t.flags |= 2048),
            Lt(Bl),
            Al(t),
            null;
        case 25:
            return null;
        case 30:
            return null
        }
        throw Error(f(156, t.tag))
    }
    function ym(l, t) {
        switch (Bi(t),
        t.tag) {
        case 1:
            return l = t.flags,
            l & 65536 ? (t.flags = l & -65537 | 128,
            t) : null;
        case 3:
            return Lt(Bl),
            Nl(),
            l = t.flags,
            (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128,
            t) : null;
        case 26:
        case 27:
        case 5:
            return Uu(t),
            null;
        case 31:
            if (t.memoizedState !== null) {
                if (rt(t),
                t.alternate === null)
                    throw Error(f(340));
                Ba()
            }
            return l = t.flags,
            l & 65536 ? (t.flags = l & -65537 | 128,
            t) : null;
        case 13:
            if (rt(t),
            l = t.memoizedState,
            l !== null && l.dehydrated !== null) {
                if (t.alternate === null)
                    throw Error(f(340));
                Ba()
            }
            return l = t.flags,
            l & 65536 ? (t.flags = l & -65537 | 128,
            t) : null;
        case 19:
            return x(Cl),
            null;
        case 4:
            return Nl(),
            null;
        case 10:
            return Lt(t.type),
            null;
        case 22:
        case 23:
            return rt(t),
            Fi(),
            l !== null && x(Ya),
            l = t.flags,
            l & 65536 ? (t.flags = l & -65537 | 128,
            t) : null;
        case 24:
            return Lt(Bl),
            null;
        case 25:
            return null;
        default:
            return null
        }
    }
    function l0(l, t) {
        switch (Bi(t),
        t.tag) {
        case 3:
            Lt(Bl),
            Nl();
            break;
        case 26:
        case 27:
        case 5:
            Uu(t);
            break;
        case 4:
            Nl();
            break;
        case 31:
            t.memoizedState !== null && rt(t);
            break;
        case 13:
            rt(t);
            break;
        case 19:
            x(Cl);
            break;
        case 10:
            Lt(t.type);
            break;
        case 22:
        case 23:
            rt(t),
            Fi(),
            l !== null && x(Ya);
            break;
        case 24:
            Lt(Bl)
        }
    }
    function su(l, t) {
        try {
            var a = t.updateQueue
              , e = a !== null ? a.lastEffect : null;
            if (e !== null) {
                var u = e.next;
                a = u;
                do {
                    if ((a.tag & l) === l) {
                        e = void 0;
                        var n = a.create
                          , i = a.inst;
                        e = n(),
                        i.destroy = e
                    }
                    a = a.next
                } while (a !== u)
            }
        } catch (c) {
            hl(t, t.return, c)
        }
    }
    function ra(l, t, a) {
        try {
            var e = t.updateQueue
              , u = e !== null ? e.lastEffect : null;
            if (u !== null) {
                var n = u.next;
                e = n;
                do {
                    if ((e.tag & l) === l) {
                        var i = e.inst
                          , c = i.destroy;
                        if (c !== void 0) {
                            i.destroy = void 0,
                            u = t;
                            var s = a
                              , y = c;
                            try {
                                y()
                            } catch (p) {
                                hl(u, s, p)
                            }
                        }
                    }
                    e = e.next
                } while (e !== n)
            }
        } catch (p) {
            hl(t, t.return, p)
        }
    }
    function t0(l) {
        var t = l.updateQueue;
        if (t !== null) {
            var a = l.stateNode;
            try {
                Vs(t, a)
            } catch (e) {
                hl(l, l.return, e)
            }
        }
    }
    function a0(l, t, a) {
        a.props = Va(l.type, l.memoizedProps),
        a.state = l.memoizedState;
        try {
            a.componentWillUnmount()
        } catch (e) {
            hl(l, t, e)
        }
    }
    function ou(l, t) {
        try {
            var a = l.ref;
            if (a !== null) {
                switch (l.tag) {
                case 26:
                case 27:
                case 5:
                    var e = l.stateNode;
                    break;
                case 30:
                    e = l.stateNode;
                    break;
                default:
                    e = l.stateNode
                }
                typeof a == "function" ? l.refCleanup = a(e) : a.current = e
            }
        } catch (u) {
            hl(l, t, u)
        }
    }
    function Rt(l, t) {
        var a = l.ref
          , e = l.refCleanup;
        if (a !== null)
            if (typeof e == "function")
                try {
                    e()
                } catch (u) {
                    hl(l, t, u)
                } finally {
                    l.refCleanup = null,
                    l = l.alternate,
                    l != null && (l.refCleanup = null)
                }
            else if (typeof a == "function")
                try {
                    a(null)
                } catch (u) {
                    hl(l, t, u)
                }
            else
                a.current = null
    }
    function e0(l) {
        var t = l.type
          , a = l.memoizedProps
          , e = l.stateNode;
        try {
            l: switch (t) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                a.autoFocus && e.focus();
                break l;
            case "img":
                a.src ? e.src = a.src : a.srcSet && (e.srcset = a.srcSet)
            }
        } catch (u) {
            hl(l, l.return, u)
        }
    }
    function Dc(l, t, a) {
        try {
            var e = l.stateNode;
            Gm(e, l.type, a, t),
            e[lt] = t
        } catch (u) {
            hl(l, l.return, u)
        }
    }
    function u0(l) {
        return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && za(l.type) || l.tag === 4
    }
    function Uc(l) {
        l: for (; ; ) {
            for (; l.sibling === null; ) {
                if (l.return === null || u0(l.return))
                    return null;
                l = l.return
            }
            for (l.sibling.return = l.return,
            l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
                if (l.tag === 27 && za(l.type) || l.flags & 2 || l.child === null || l.tag === 4)
                    continue l;
                l.child.return = l,
                l = l.child
            }
            if (!(l.flags & 2))
                return l.stateNode
        }
    }
    function Nc(l, t, a) {
        var e = l.tag;
        if (e === 5 || e === 6)
            l = l.stateNode,
            t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(l, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a,
            t.appendChild(l),
            a = a._reactRootContainer,
            a != null || t.onclick !== null || (t.onclick = Gt));
        else if (e !== 4 && (e === 27 && za(l.type) && (a = l.stateNode,
        t = null),
        l = l.child,
        l !== null))
            for (Nc(l, t, a),
            l = l.sibling; l !== null; )
                Nc(l, t, a),
                l = l.sibling
    }
    function pn(l, t, a) {
        var e = l.tag;
        if (e === 5 || e === 6)
            l = l.stateNode,
            t ? a.insertBefore(l, t) : a.appendChild(l);
        else if (e !== 4 && (e === 27 && za(l.type) && (a = l.stateNode),
        l = l.child,
        l !== null))
            for (pn(l, t, a),
            l = l.sibling; l !== null; )
                pn(l, t, a),
                l = l.sibling
    }
    function n0(l) {
        var t = l.stateNode
          , a = l.memoizedProps;
        try {
            for (var e = l.type, u = t.attributes; u.length; )
                t.removeAttributeNode(u[0]);
            $l(t, e, a),
            t[Kl] = l,
            t[lt] = a
        } catch (n) {
            hl(l, l.return, n)
        }
    }
    var Wt = !1
      , Yl = !1
      , Cc = !1
      , i0 = typeof WeakSet == "function" ? WeakSet : Set
      , Ll = null;
    function gm(l, t) {
        if (l = l.containerInfo,
        Pc = Zn,
        l = gs(l),
        _i(l)) {
            if ("selectionStart" in l)
                var a = {
                    start: l.selectionStart,
                    end: l.selectionEnd
                };
            else
                l: {
                    a = (a = l.ownerDocument) && a.defaultView || window;
                    var e = a.getSelection && a.getSelection();
                    if (e && e.rangeCount !== 0) {
                        a = e.anchorNode;
                        var u = e.anchorOffset
                          , n = e.focusNode;
                        e = e.focusOffset;
                        try {
                            a.nodeType,
                            n.nodeType
                        } catch {
                            a = null;
                            break l
                        }
                        var i = 0
                          , c = -1
                          , s = -1
                          , y = 0
                          , p = 0
                          , M = l
                          , g = null;
                        t: for (; ; ) {
                            for (var b; M !== a || u !== 0 && M.nodeType !== 3 || (c = i + u),
                            M !== n || e !== 0 && M.nodeType !== 3 || (s = i + e),
                            M.nodeType === 3 && (i += M.nodeValue.length),
                            (b = M.firstChild) !== null; )
                                g = M,
                                M = b;
                            for (; ; ) {
                                if (M === l)
                                    break t;
                                if (g === a && ++y === u && (c = i),
                                g === n && ++p === e && (s = i),
                                (b = M.nextSibling) !== null)
                                    break;
                                M = g,
                                g = M.parentNode
                            }
                            M = b
                        }
                        a = c === -1 || s === -1 ? null : {
                            start: c,
                            end: s
                        }
                    } else
                        a = null
                }
            a = a || {
                start: 0,
                end: 0
            }
        } else
            a = null;
        for (lf = {
            focusedElem: l,
            selectionRange: a
        },
        Zn = !1,
        Ll = t; Ll !== null; )
            if (t = Ll,
            l = t.child,
            (t.subtreeFlags & 1028) !== 0 && l !== null)
                l.return = t,
                Ll = l;
            else
                for (; Ll !== null; ) {
                    switch (t = Ll,
                    n = t.alternate,
                    l = t.flags,
                    t.tag) {
                    case 0:
                        if ((l & 4) !== 0 && (l = t.updateQueue,
                        l = l !== null ? l.events : null,
                        l !== null))
                            for (a = 0; a < l.length; a++)
                                u = l[a],
                                u.ref.impl = u.nextImpl;
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((l & 1024) !== 0 && n !== null) {
                            l = void 0,
                            a = t,
                            u = n.memoizedProps,
                            n = n.memoizedState,
                            e = a.stateNode;
                            try {
                                var j = Va(a.type, u);
                                l = e.getSnapshotBeforeUpdate(j, n),
                                e.__reactInternalSnapshotBeforeUpdate = l
                            } catch (Q) {
                                hl(a, a.return, Q)
                            }
                        }
                        break;
                    case 3:
                        if ((l & 1024) !== 0) {
                            if (l = t.stateNode.containerInfo,
                            a = l.nodeType,
                            a === 9)
                                ef(l);
                            else if (a === 1)
                                switch (l.nodeName) {
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    ef(l);
                                    break;
                                default:
                                    l.textContent = ""
                                }
                        }
                        break;
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    default:
                        if ((l & 1024) !== 0)
                            throw Error(f(163))
                    }
                    if (l = t.sibling,
                    l !== null) {
                        l.return = t.return,
                        Ll = l;
                        break
                    }
                    Ll = t.return
                }
    }
    function c0(l, t, a) {
        var e = a.flags;
        switch (a.tag) {
        case 0:
        case 11:
        case 15:
            kt(l, a),
            e & 4 && su(5, a);
            break;
        case 1:
            if (kt(l, a),
            e & 4)
                if (l = a.stateNode,
                t === null)
                    try {
                        l.componentDidMount()
                    } catch (i) {
                        hl(a, a.return, i)
                    }
                else {
                    var u = Va(a.type, t.memoizedProps);
                    t = t.memoizedState;
                    try {
                        l.componentDidUpdate(u, t, l.__reactInternalSnapshotBeforeUpdate)
                    } catch (i) {
                        hl(a, a.return, i)
                    }
                }
            e & 64 && t0(a),
            e & 512 && ou(a, a.return);
            break;
        case 3:
            if (kt(l, a),
            e & 64 && (l = a.updateQueue,
            l !== null)) {
                if (t = null,
                a.child !== null)
                    switch (a.child.tag) {
                    case 27:
                    case 5:
                        t = a.child.stateNode;
                        break;
                    case 1:
                        t = a.child.stateNode
                    }
                try {
                    Vs(l, t)
                } catch (i) {
                    hl(a, a.return, i)
                }
            }
            break;
        case 27:
            t === null && e & 4 && n0(a);
        case 26:
        case 5:
            kt(l, a),
            t === null && e & 4 && e0(a),
            e & 512 && ou(a, a.return);
            break;
        case 12:
            kt(l, a);
            break;
        case 31:
            kt(l, a),
            e & 4 && o0(l, a);
            break;
        case 13:
            kt(l, a),
            e & 4 && d0(l, a),
            e & 64 && (l = a.memoizedState,
            l !== null && (l = l.dehydrated,
            l !== null && (a = Mm.bind(null, a),
            Jm(l, a))));
            break;
        case 22:
            if (e = a.memoizedState !== null || Wt,
            !e) {
                t = t !== null && t.memoizedState !== null || Yl,
                u = Wt;
                var n = Yl;
                Wt = e,
                (Yl = t) && !n ? Ft(l, a, (a.subtreeFlags & 8772) !== 0) : kt(l, a),
                Wt = u,
                Yl = n
            }
            break;
        case 30:
            break;
        default:
            kt(l, a)
        }
    }
    function f0(l) {
        var t = l.alternate;
        t !== null && (l.alternate = null,
        f0(t)),
        l.child = null,
        l.deletions = null,
        l.sibling = null,
        l.tag === 5 && (t = l.stateNode,
        t !== null && fi(t)),
        l.stateNode = null,
        l.return = null,
        l.dependencies = null,
        l.memoizedProps = null,
        l.memoizedState = null,
        l.pendingProps = null,
        l.stateNode = null,
        l.updateQueue = null
    }
    var _l = null
      , at = !1;
    function $t(l, t, a) {
        for (a = a.child; a !== null; )
            s0(l, t, a),
            a = a.sibling
    }
    function s0(l, t, a) {
        if (ft && typeof ft.onCommitFiberUnmount == "function")
            try {
                ft.onCommitFiberUnmount(Re, a)
            } catch {}
        switch (a.tag) {
        case 26:
            Yl || Rt(a, t),
            $t(l, t, a),
            a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode,
            a.parentNode.removeChild(a));
            break;
        case 27:
            Yl || Rt(a, t);
            var e = _l
              , u = at;
            za(a.type) && (_l = a.stateNode,
            at = !1),
            $t(l, t, a),
            Su(a.stateNode),
            _l = e,
            at = u;
            break;
        case 5:
            Yl || Rt(a, t);
        case 6:
            if (e = _l,
            u = at,
            _l = null,
            $t(l, t, a),
            _l = e,
            at = u,
            _l !== null)
                if (at)
                    try {
                        (_l.nodeType === 9 ? _l.body : _l.nodeName === "HTML" ? _l.ownerDocument.body : _l).removeChild(a.stateNode)
                    } catch (n) {
                        hl(a, t, n)
                    }
                else
                    try {
                        _l.removeChild(a.stateNode)
                    } catch (n) {
                        hl(a, t, n)
                    }
            break;
        case 18:
            _l !== null && (at ? (l = _l,
            td(l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, a.stateNode),
            Ne(l)) : td(_l, a.stateNode));
            break;
        case 4:
            e = _l,
            u = at,
            _l = a.stateNode.containerInfo,
            at = !0,
            $t(l, t, a),
            _l = e,
            at = u;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            ra(2, a, t),
            Yl || ra(4, a, t),
            $t(l, t, a);
            break;
        case 1:
            Yl || (Rt(a, t),
            e = a.stateNode,
            typeof e.componentWillUnmount == "function" && a0(a, t, e)),
            $t(l, t, a);
            break;
        case 21:
            $t(l, t, a);
            break;
        case 22:
            Yl = (e = Yl) || a.memoizedState !== null,
            $t(l, t, a),
            Yl = e;
            break;
        default:
            $t(l, t, a)
        }
    }
    function o0(l, t) {
        if (t.memoizedState === null && (l = t.alternate,
        l !== null && (l = l.memoizedState,
        l !== null))) {
            l = l.dehydrated;
            try {
                Ne(l)
            } catch (a) {
                hl(t, t.return, a)
            }
        }
    }
    function d0(l, t) {
        if (t.memoizedState === null && (l = t.alternate,
        l !== null && (l = l.memoizedState,
        l !== null && (l = l.dehydrated,
        l !== null))))
            try {
                Ne(l)
            } catch (a) {
                hl(t, t.return, a)
            }
    }
    function bm(l) {
        switch (l.tag) {
        case 31:
        case 13:
        case 19:
            var t = l.stateNode;
            return t === null && (t = l.stateNode = new i0),
            t;
        case 22:
            return l = l.stateNode,
            t = l._retryCache,
            t === null && (t = l._retryCache = new i0),
            t;
        default:
            throw Error(f(435, l.tag))
        }
    }
    function En(l, t) {
        var a = bm(l);
        t.forEach(function(e) {
            if (!a.has(e)) {
                a.add(e);
                var u = xm.bind(null, l, e);
                e.then(u, u)
            }
        })
    }
    function et(l, t) {
        var a = t.deletions;
        if (a !== null)
            for (var e = 0; e < a.length; e++) {
                var u = a[e]
                  , n = l
                  , i = t
                  , c = i;
                l: for (; c !== null; ) {
                    switch (c.tag) {
                    case 27:
                        if (za(c.type)) {
                            _l = c.stateNode,
                            at = !1;
                            break l
                        }
                        break;
                    case 5:
                        _l = c.stateNode,
                        at = !1;
                        break l;
                    case 3:
                    case 4:
                        _l = c.stateNode.containerInfo,
                        at = !0;
                        break l
                    }
                    c = c.return
                }
                if (_l === null)
                    throw Error(f(160));
                s0(n, i, u),
                _l = null,
                at = !1,
                n = u.alternate,
                n !== null && (n.return = null),
                u.return = null
            }
        if (t.subtreeFlags & 13886)
            for (t = t.child; t !== null; )
                m0(t, l),
                t = t.sibling
    }
    var Ut = null;
    function m0(l, t) {
        var a = l.alternate
          , e = l.flags;
        switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            et(t, l),
            ut(l),
            e & 4 && (ra(3, l, l.return),
            su(3, l),
            ra(5, l, l.return));
            break;
        case 1:
            et(t, l),
            ut(l),
            e & 512 && (Yl || a === null || Rt(a, a.return)),
            e & 64 && Wt && (l = l.updateQueue,
            l !== null && (e = l.callbacks,
            e !== null && (a = l.shared.hiddenCallbacks,
            l.shared.hiddenCallbacks = a === null ? e : a.concat(e))));
            break;
        case 26:
            var u = Ut;
            if (et(t, l),
            ut(l),
            e & 512 && (Yl || a === null || Rt(a, a.return)),
            e & 4) {
                var n = a !== null ? a.memoizedState : null;
                if (e = l.memoizedState,
                a === null)
                    if (e === null)
                        if (l.stateNode === null) {
                            l: {
                                e = l.type,
                                a = l.memoizedProps,
                                u = u.ownerDocument || u;
                                t: switch (e) {
                                case "title":
                                    n = u.getElementsByTagName("title")[0],
                                    (!n || n[qe] || n[Kl] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = u.createElement(e),
                                    u.head.insertBefore(n, u.querySelector("head > title"))),
                                    $l(n, e, a),
                                    n[Kl] = l,
                                    Zl(n),
                                    e = n;
                                    break l;
                                case "link":
                                    var i = md("link", "href", u).get(e + (a.href || ""));
                                    if (i) {
                                        for (var c = 0; c < i.length; c++)
                                            if (n = i[c],
                                            n.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && n.getAttribute("rel") === (a.rel == null ? null : a.rel) && n.getAttribute("title") === (a.title == null ? null : a.title) && n.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                                                i.splice(c, 1);
                                                break t
                                            }
                                    }
                                    n = u.createElement(e),
                                    $l(n, e, a),
                                    u.head.appendChild(n);
                                    break;
                                case "meta":
                                    if (i = md("meta", "content", u).get(e + (a.content || ""))) {
                                        for (c = 0; c < i.length; c++)
                                            if (n = i[c],
                                            n.getAttribute("content") === (a.content == null ? null : "" + a.content) && n.getAttribute("name") === (a.name == null ? null : a.name) && n.getAttribute("property") === (a.property == null ? null : a.property) && n.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && n.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                                                i.splice(c, 1);
                                                break t
                                            }
                                    }
                                    n = u.createElement(e),
                                    $l(n, e, a),
                                    u.head.appendChild(n);
                                    break;
                                default:
                                    throw Error(f(468, e))
                                }
                                n[Kl] = l,
                                Zl(n),
                                e = n
                            }
                            l.stateNode = e
                        } else
                            rd(u, l.type, l.stateNode);
                    else
                        l.stateNode = dd(u, e, l.memoizedProps);
                else
                    n !== e ? (n === null ? a.stateNode !== null && (a = a.stateNode,
                    a.parentNode.removeChild(a)) : n.count--,
                    e === null ? rd(u, l.type, l.stateNode) : dd(u, e, l.memoizedProps)) : e === null && l.stateNode !== null && Dc(l, l.memoizedProps, a.memoizedProps)
            }
            break;
        case 27:
            et(t, l),
            ut(l),
            e & 512 && (Yl || a === null || Rt(a, a.return)),
            a !== null && e & 4 && Dc(l, l.memoizedProps, a.memoizedProps);
            break;
        case 5:
            if (et(t, l),
            ut(l),
            e & 512 && (Yl || a === null || Rt(a, a.return)),
            l.flags & 32) {
                u = l.stateNode;
                try {
                    le(u, "")
                } catch (j) {
                    hl(l, l.return, j)
                }
            }
            e & 4 && l.stateNode != null && (u = l.memoizedProps,
            Dc(l, u, a !== null ? a.memoizedProps : u)),
            e & 1024 && (Cc = !0);
            break;
        case 6:
            if (et(t, l),
            ut(l),
            e & 4) {
                if (l.stateNode === null)
                    throw Error(f(162));
                e = l.memoizedProps,
                a = l.stateNode;
                try {
                    a.nodeValue = e
                } catch (j) {
                    hl(l, l.return, j)
                }
            }
            break;
        case 3:
            if (Gn = null,
            u = Ut,
            Ut = Bn(t.containerInfo),
            et(t, l),
            Ut = u,
            ut(l),
            e & 4 && a !== null && a.memoizedState.isDehydrated)
                try {
                    Ne(t.containerInfo)
                } catch (j) {
                    hl(l, l.return, j)
                }
            Cc && (Cc = !1,
            r0(l));
            break;
        case 4:
            e = Ut,
            Ut = Bn(l.stateNode.containerInfo),
            et(t, l),
            ut(l),
            Ut = e;
            break;
        case 12:
            et(t, l),
            ut(l);
            break;
        case 31:
            et(t, l),
            ut(l),
            e & 4 && (e = l.updateQueue,
            e !== null && (l.updateQueue = null,
            En(l, e)));
            break;
        case 13:
            et(t, l),
            ut(l),
            l.child.flags & 8192 && l.memoizedState !== null != (a !== null && a.memoizedState !== null) && (An = ct()),
            e & 4 && (e = l.updateQueue,
            e !== null && (l.updateQueue = null,
            En(l, e)));
            break;
        case 22:
            u = l.memoizedState !== null;
            var s = a !== null && a.memoizedState !== null
              , y = Wt
              , p = Yl;
            if (Wt = y || u,
            Yl = p || s,
            et(t, l),
            Yl = p,
            Wt = y,
            ut(l),
            e & 8192)
                l: for (t = l.stateNode,
                t._visibility = u ? t._visibility & -2 : t._visibility | 1,
                u && (a === null || s || Wt || Yl || Ka(l)),
                a = null,
                t = l; ; ) {
                    if (t.tag === 5 || t.tag === 26) {
                        if (a === null) {
                            s = a = t;
                            try {
                                if (n = s.stateNode,
                                u)
                                    i = n.style,
                                    typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                                else {
                                    c = s.stateNode;
                                    var M = s.memoizedProps.style
                                      , g = M != null && M.hasOwnProperty("display") ? M.display : null;
                                    c.style.display = g == null || typeof g == "boolean" ? "" : ("" + g).trim()
                                }
                            } catch (j) {
                                hl(s, s.return, j)
                            }
                        }
                    } else if (t.tag === 6) {
                        if (a === null) {
                            s = t;
                            try {
                                s.stateNode.nodeValue = u ? "" : s.memoizedProps
                            } catch (j) {
                                hl(s, s.return, j)
                            }
                        }
                    } else if (t.tag === 18) {
                        if (a === null) {
                            s = t;
                            try {
                                var b = s.stateNode;
                                u ? ad(b, !0) : ad(s.stateNode, !1)
                            } catch (j) {
                                hl(s, s.return, j)
                            }
                        }
                    } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
                        t.child.return = t,
                        t = t.child;
                        continue
                    }
                    if (t === l)
                        break l;
                    for (; t.sibling === null; ) {
                        if (t.return === null || t.return === l)
                            break l;
                        a === t && (a = null),
                        t = t.return
                    }
                    a === t && (a = null),
                    t.sibling.return = t.return,
                    t = t.sibling
                }
            e & 4 && (e = l.updateQueue,
            e !== null && (a = e.retryQueue,
            a !== null && (e.retryQueue = null,
            En(l, a))));
            break;
        case 19:
            et(t, l),
            ut(l),
            e & 4 && (e = l.updateQueue,
            e !== null && (l.updateQueue = null,
            En(l, e)));
            break;
        case 30:
            break;
        case 21:
            break;
        default:
            et(t, l),
            ut(l)
        }
    }
    function ut(l) {
        var t = l.flags;
        if (t & 2) {
            try {
                for (var a, e = l.return; e !== null; ) {
                    if (u0(e)) {
                        a = e;
                        break
                    }
                    e = e.return
                }
                if (a == null)
                    throw Error(f(160));
                switch (a.tag) {
                case 27:
                    var u = a.stateNode
                      , n = Uc(l);
                    pn(l, n, u);
                    break;
                case 5:
                    var i = a.stateNode;
                    a.flags & 32 && (le(i, ""),
                    a.flags &= -33);
                    var c = Uc(l);
                    pn(l, c, i);
                    break;
                case 3:
                case 4:
                    var s = a.stateNode.containerInfo
                      , y = Uc(l);
                    Nc(l, y, s);
                    break;
                default:
                    throw Error(f(161))
                }
            } catch (p) {
                hl(l, l.return, p)
            }
            l.flags &= -3
        }
        t & 4096 && (l.flags &= -4097)
    }
    function r0(l) {
        if (l.subtreeFlags & 1024)
            for (l = l.child; l !== null; ) {
                var t = l;
                r0(t),
                t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
                l = l.sibling
            }
    }
    function kt(l, t) {
        if (t.subtreeFlags & 8772)
            for (t = t.child; t !== null; )
                c0(l, t.alternate, t),
                t = t.sibling
    }
    function Ka(l) {
        for (l = l.child; l !== null; ) {
            var t = l;
            switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                ra(4, t, t.return),
                Ka(t);
                break;
            case 1:
                Rt(t, t.return);
                var a = t.stateNode;
                typeof a.componentWillUnmount == "function" && a0(t, t.return, a),
                Ka(t);
                break;
            case 27:
                Su(t.stateNode);
            case 26:
            case 5:
                Rt(t, t.return),
                Ka(t);
                break;
            case 22:
                t.memoizedState === null && Ka(t);
                break;
            case 30:
                Ka(t);
                break;
            default:
                Ka(t)
            }
            l = l.sibling
        }
    }
    function Ft(l, t, a) {
        for (a = a && (t.subtreeFlags & 8772) !== 0,
        t = t.child; t !== null; ) {
            var e = t.alternate
              , u = l
              , n = t
              , i = n.flags;
            switch (n.tag) {
            case 0:
            case 11:
            case 15:
                Ft(u, n, a),
                su(4, n);
                break;
            case 1:
                if (Ft(u, n, a),
                e = n,
                u = e.stateNode,
                typeof u.componentDidMount == "function")
                    try {
                        u.componentDidMount()
                    } catch (y) {
                        hl(e, e.return, y)
                    }
                if (e = n,
                u = e.updateQueue,
                u !== null) {
                    var c = e.stateNode;
                    try {
                        var s = u.shared.hiddenCallbacks;
                        if (s !== null)
                            for (u.shared.hiddenCallbacks = null,
                            u = 0; u < s.length; u++)
                                Ls(s[u], c)
                    } catch (y) {
                        hl(e, e.return, y)
                    }
                }
                a && i & 64 && t0(n),
                ou(n, n.return);
                break;
            case 27:
                n0(n);
            case 26:
            case 5:
                Ft(u, n, a),
                a && e === null && i & 4 && e0(n),
                ou(n, n.return);
                break;
            case 12:
                Ft(u, n, a);
                break;
            case 31:
                Ft(u, n, a),
                a && i & 4 && o0(u, n);
                break;
            case 13:
                Ft(u, n, a),
                a && i & 4 && d0(u, n);
                break;
            case 22:
                n.memoizedState === null && Ft(u, n, a),
                ou(n, n.return);
                break;
            case 30:
                break;
            default:
                Ft(u, n, a)
            }
            t = t.sibling
        }
    }
    function jc(l, t) {
        var a = null;
        l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool),
        l = null,
        t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool),
        l !== a && (l != null && l.refCount++,
        a != null && ke(a))
    }
    function Rc(l, t) {
        l = null,
        t.alternate !== null && (l = t.alternate.memoizedState.cache),
        t = t.memoizedState.cache,
        t !== l && (t.refCount++,
        l != null && ke(l))
    }
    function Nt(l, t, a, e) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; )
                h0(l, t, a, e),
                t = t.sibling
    }
    function h0(l, t, a, e) {
        var u = t.flags;
        switch (t.tag) {
        case 0:
        case 11:
        case 15:
            Nt(l, t, a, e),
            u & 2048 && su(9, t);
            break;
        case 1:
            Nt(l, t, a, e);
            break;
        case 3:
            Nt(l, t, a, e),
            u & 2048 && (l = null,
            t.alternate !== null && (l = t.alternate.memoizedState.cache),
            t = t.memoizedState.cache,
            t !== l && (t.refCount++,
            l != null && ke(l)));
            break;
        case 12:
            if (u & 2048) {
                Nt(l, t, a, e),
                l = t.stateNode;
                try {
                    var n = t.memoizedProps
                      , i = n.id
                      , c = n.onPostCommit;
                    typeof c == "function" && c(i, t.alternate === null ? "mount" : "update", l.passiveEffectDuration, -0)
                } catch (s) {
                    hl(t, t.return, s)
                }
            } else
                Nt(l, t, a, e);
            break;
        case 31:
            Nt(l, t, a, e);
            break;
        case 13:
            Nt(l, t, a, e);
            break;
        case 23:
            break;
        case 22:
            n = t.stateNode,
            i = t.alternate,
            t.memoizedState !== null ? n._visibility & 2 ? Nt(l, t, a, e) : du(l, t) : n._visibility & 2 ? Nt(l, t, a, e) : (n._visibility |= 2,
            ze(l, t, a, e, (t.subtreeFlags & 10256) !== 0 || !1)),
            u & 2048 && jc(i, t);
            break;
        case 24:
            Nt(l, t, a, e),
            u & 2048 && Rc(t.alternate, t);
            break;
        default:
            Nt(l, t, a, e)
        }
    }
    function ze(l, t, a, e, u) {
        for (u = u && ((t.subtreeFlags & 10256) !== 0 || !1),
        t = t.child; t !== null; ) {
            var n = l
              , i = t
              , c = a
              , s = e
              , y = i.flags;
            switch (i.tag) {
            case 0:
            case 11:
            case 15:
                ze(n, i, c, s, u),
                su(8, i);
                break;
            case 23:
                break;
            case 22:
                var p = i.stateNode;
                i.memoizedState !== null ? p._visibility & 2 ? ze(n, i, c, s, u) : du(n, i) : (p._visibility |= 2,
                ze(n, i, c, s, u)),
                u && y & 2048 && jc(i.alternate, i);
                break;
            case 24:
                ze(n, i, c, s, u),
                u && y & 2048 && Rc(i.alternate, i);
                break;
            default:
                ze(n, i, c, s, u)
            }
            t = t.sibling
        }
    }
    function du(l, t) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; ) {
                var a = l
                  , e = t
                  , u = e.flags;
                switch (e.tag) {
                case 22:
                    du(a, e),
                    u & 2048 && jc(e.alternate, e);
                    break;
                case 24:
                    du(a, e),
                    u & 2048 && Rc(e.alternate, e);
                    break;
                default:
                    du(a, e)
                }
                t = t.sibling
            }
    }
    var mu = 8192;
    function pe(l, t, a) {
        if (l.subtreeFlags & mu)
            for (l = l.child; l !== null; )
                v0(l, t, a),
                l = l.sibling
    }
    function v0(l, t, a) {
        switch (l.tag) {
        case 26:
            pe(l, t, a),
            l.flags & mu && l.memoizedState !== null && ur(a, Ut, l.memoizedState, l.memoizedProps);
            break;
        case 5:
            pe(l, t, a);
            break;
        case 3:
        case 4:
            var e = Ut;
            Ut = Bn(l.stateNode.containerInfo),
            pe(l, t, a),
            Ut = e;
            break;
        case 22:
            l.memoizedState === null && (e = l.alternate,
            e !== null && e.memoizedState !== null ? (e = mu,
            mu = 16777216,
            pe(l, t, a),
            mu = e) : pe(l, t, a));
            break;
        default:
            pe(l, t, a)
        }
    }
    function y0(l) {
        var t = l.alternate;
        if (t !== null && (l = t.child,
        l !== null)) {
            t.child = null;
            do
                t = l.sibling,
                l.sibling = null,
                l = t;
            while (l !== null)
        }
    }
    function ru(l) {
        var t = l.deletions;
        if ((l.flags & 16) !== 0) {
            if (t !== null)
                for (var a = 0; a < t.length; a++) {
                    var e = t[a];
                    Ll = e,
                    b0(e, l)
                }
            y0(l)
        }
        if (l.subtreeFlags & 10256)
            for (l = l.child; l !== null; )
                g0(l),
                l = l.sibling
    }
    function g0(l) {
        switch (l.tag) {
        case 0:
        case 11:
        case 15:
            ru(l),
            l.flags & 2048 && ra(9, l, l.return);
            break;
        case 3:
            ru(l);
            break;
        case 12:
            ru(l);
            break;
        case 22:
            var t = l.stateNode;
            l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3,
            Tn(l)) : ru(l);
            break;
        default:
            ru(l)
        }
    }
    function Tn(l) {
        var t = l.deletions;
        if ((l.flags & 16) !== 0) {
            if (t !== null)
                for (var a = 0; a < t.length; a++) {
                    var e = t[a];
                    Ll = e,
                    b0(e, l)
                }
            y0(l)
        }
        for (l = l.child; l !== null; ) {
            switch (t = l,
            t.tag) {
            case 0:
            case 11:
            case 15:
                ra(8, t, t.return),
                Tn(t);
                break;
            case 22:
                a = t.stateNode,
                a._visibility & 2 && (a._visibility &= -3,
                Tn(t));
                break;
            default:
                Tn(t)
            }
            l = l.sibling
        }
    }
    function b0(l, t) {
        for (; Ll !== null; ) {
            var a = Ll;
            switch (a.tag) {
            case 0:
            case 11:
            case 15:
                ra(8, a, t);
                break;
            case 23:
            case 22:
                if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
                    var e = a.memoizedState.cachePool.pool;
                    e != null && e.refCount++
                }
                break;
            case 24:
                ke(a.memoizedState.cache)
            }
            if (e = a.child,
            e !== null)
                e.return = a,
                Ll = e;
            else
                l: for (a = l; Ll !== null; ) {
                    e = Ll;
                    var u = e.sibling
                      , n = e.return;
                    if (f0(e),
                    e === a) {
                        Ll = null;
                        break l
                    }
                    if (u !== null) {
                        u.return = n,
                        Ll = u;
                        break l
                    }
                    Ll = n
                }
        }
    }
    var Sm = {
        getCacheForType: function(l) {
            var t = wl(Bl)
              , a = t.data.get(l);
            return a === void 0 && (a = l(),
            t.data.set(l, a)),
            a
        },
        cacheSignal: function() {
            return wl(Bl).controller.signal
        }
    }
      , zm = typeof WeakMap == "function" ? WeakMap : Map
      , ol = 0
      , zl = null
      , ll = null
      , el = 0
      , rl = 0
      , ht = null
      , ha = !1
      , Ee = !1
      , Hc = !1
      , It = 0
      , Ul = 0
      , va = 0
      , Ja = 0
      , Bc = 0
      , vt = 0
      , Te = 0
      , hu = null
      , nt = null
      , qc = !1
      , An = 0
      , S0 = 0
      , _n = 1 / 0
      , Mn = null
      , ya = null
      , Ql = 0
      , ga = null
      , Ae = null
      , Pt = 0
      , Gc = 0
      , Yc = null
      , z0 = null
      , vu = 0
      , Xc = null;
    function yt() {
        return (ol & 2) !== 0 && el !== 0 ? el & -el : T.T !== null ? Jc() : Hf()
    }
    function p0() {
        if (vt === 0)
            if ((el & 536870912) === 0 || nl) {
                var l = ju;
                ju <<= 1,
                (ju & 3932160) === 0 && (ju = 262144),
                vt = l
            } else
                vt = 536870912;
        return l = mt.current,
        l !== null && (l.flags |= 32),
        vt
    }
    function it(l, t, a) {
        (l === zl && (rl === 2 || rl === 9) || l.cancelPendingCommit !== null) && (_e(l, 0),
        ba(l, el, vt, !1)),
        Be(l, a),
        ((ol & 2) === 0 || l !== zl) && (l === zl && ((ol & 2) === 0 && (Ja |= a),
        Ul === 4 && ba(l, el, vt, !1)),
        Ht(l))
    }
    function E0(l, t, a) {
        if ((ol & 6) !== 0)
            throw Error(f(327));
        var e = !a && (t & 127) === 0 && (t & l.expiredLanes) === 0 || He(l, t)
          , u = e ? Tm(l, t) : Zc(l, t, !0)
          , n = e;
        do {
            if (u === 0) {
                Ee && !e && ba(l, t, 0, !1);
                break
            } else {
                if (a = l.current.alternate,
                n && !pm(a)) {
                    u = Zc(l, t, !1),
                    n = !1;
                    continue
                }
                if (u === 2) {
                    if (n = t,
                    l.errorRecoveryDisabledLanes & n)
                        var i = 0;
                    else
                        i = l.pendingLanes & -536870913,
                        i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
                    if (i !== 0) {
                        t = i;
                        l: {
                            var c = l;
                            u = hu;
                            var s = c.current.memoizedState.isDehydrated;
                            if (s && (_e(c, i).flags |= 256),
                            i = Zc(c, i, !1),
                            i !== 2) {
                                if (Hc && !s) {
                                    c.errorRecoveryDisabledLanes |= n,
                                    Ja |= n,
                                    u = 4;
                                    break l
                                }
                                n = nt,
                                nt = u,
                                n !== null && (nt === null ? nt = n : nt.push.apply(nt, n))
                            }
                            u = i
                        }
                        if (n = !1,
                        u !== 2)
                            continue
                    }
                }
                if (u === 1) {
                    _e(l, 0),
                    ba(l, t, 0, !0);
                    break
                }
                l: {
                    switch (e = l,
                    n = u,
                    n) {
                    case 0:
                    case 1:
                        throw Error(f(345));
                    case 4:
                        if ((t & 4194048) !== t)
                            break;
                    case 6:
                        ba(e, t, vt, !ha);
                        break l;
                    case 2:
                        nt = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(f(329))
                    }
                    if ((t & 62914560) === t && (u = An + 300 - ct(),
                    10 < u)) {
                        if (ba(e, t, vt, !ha),
                        Hu(e, 0, !0) !== 0)
                            break l;
                        Pt = t,
                        e.timeoutHandle = P0(T0.bind(null, e, a, nt, Mn, qc, t, vt, Ja, Te, ha, n, "Throttled", -0, 0), u);
                        break l
                    }
                    T0(e, a, nt, Mn, qc, t, vt, Ja, Te, ha, n, null, -0, 0)
                }
            }
            break
        } while (!0);
        Ht(l)
    }
    function T0(l, t, a, e, u, n, i, c, s, y, p, M, g, b) {
        if (l.timeoutHandle = -1,
        M = t.subtreeFlags,
        M & 8192 || (M & 16785408) === 16785408) {
            M = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: Gt
            },
            v0(t, n, M);
            var j = (n & 62914560) === n ? An - ct() : (n & 4194048) === n ? S0 - ct() : 0;
            if (j = nr(M, j),
            j !== null) {
                Pt = n,
                l.cancelPendingCommit = j(N0.bind(null, l, t, n, a, e, u, i, c, s, p, M, null, g, b)),
                ba(l, n, i, !y);
                return
            }
        }
        N0(l, t, n, a, e, u, i, c, s)
    }
    function pm(l) {
        for (var t = l; ; ) {
            var a = t.tag;
            if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue,
            a !== null && (a = a.stores,
            a !== null)))
                for (var e = 0; e < a.length; e++) {
                    var u = a[e]
                      , n = u.getSnapshot;
                    u = u.value;
                    try {
                        if (!ot(n(), u))
                            return !1
                    } catch {
                        return !1
                    }
                }
            if (a = t.child,
            t.subtreeFlags & 16384 && a !== null)
                a.return = t,
                t = a;
            else {
                if (t === l)
                    break;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === l)
                        return !0;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        }
        return !0
    }
    function ba(l, t, a, e) {
        t &= ~Bc,
        t &= ~Ja,
        l.suspendedLanes |= t,
        l.pingedLanes &= ~t,
        e && (l.warmLanes |= t),
        e = l.expirationTimes;
        for (var u = t; 0 < u; ) {
            var n = 31 - st(u)
              , i = 1 << n;
            e[n] = -1,
            u &= ~i
        }
        a !== 0 && Cf(l, a, t)
    }
    function xn() {
        return (ol & 6) === 0 ? (yu(0),
        !1) : !0
    }
    function Qc() {
        if (ll !== null) {
            if (rl === 0)
                var l = ll.return;
            else
                l = ll,
                Zt = qa = null,
                ec(l),
                ve = null,
                Ie = 0,
                l = ll;
            for (; l !== null; )
                l0(l.alternate, l),
                l = l.return;
            ll = null
        }
    }
    function _e(l, t) {
        var a = l.timeoutHandle;
        a !== -1 && (l.timeoutHandle = -1,
        Qm(a)),
        a = l.cancelPendingCommit,
        a !== null && (l.cancelPendingCommit = null,
        a()),
        Pt = 0,
        Qc(),
        zl = l,
        ll = a = Xt(l.current, null),
        el = t,
        rl = 0,
        ht = null,
        ha = !1,
        Ee = He(l, t),
        Hc = !1,
        Te = vt = Bc = Ja = va = Ul = 0,
        nt = hu = null,
        qc = !1,
        (t & 8) !== 0 && (t |= t & 32);
        var e = l.entangledLanes;
        if (e !== 0)
            for (l = l.entanglements,
            e &= t; 0 < e; ) {
                var u = 31 - st(e)
                  , n = 1 << u;
                t |= l[u],
                e &= ~n
            }
        return It = t,
        wu(),
        a
    }
    function A0(l, t) {
        w = null,
        T.H = iu,
        t === he || t === tn ? (t = Ys(),
        rl = 3) : t === Ki ? (t = Ys(),
        rl = 4) : rl = t === Sc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1,
        ht = t,
        ll === null && (Ul = 1,
        yn(l, zt(t, l.current)))
    }
    function _0() {
        var l = mt.current;
        return l === null ? !0 : (el & 4194048) === el ? At === null : (el & 62914560) === el || (el & 536870912) !== 0 ? l === At : !1
    }
    function M0() {
        var l = T.H;
        return T.H = iu,
        l === null ? iu : l
    }
    function x0() {
        var l = T.A;
        return T.A = Sm,
        l
    }
    function On() {
        Ul = 4,
        ha || (el & 4194048) !== el && mt.current !== null || (Ee = !0),
        (va & 134217727) === 0 && (Ja & 134217727) === 0 || zl === null || ba(zl, el, vt, !1)
    }
    function Zc(l, t, a) {
        var e = ol;
        ol |= 2;
        var u = M0()
          , n = x0();
        (zl !== l || el !== t) && (Mn = null,
        _e(l, t)),
        t = !1;
        var i = Ul;
        l: do
            try {
                if (rl !== 0 && ll !== null) {
                    var c = ll
                      , s = ht;
                    switch (rl) {
                    case 8:
                        Qc(),
                        i = 6;
                        break l;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        mt.current === null && (t = !0);
                        var y = rl;
                        if (rl = 0,
                        ht = null,
                        Me(l, c, s, y),
                        a && Ee) {
                            i = 0;
                            break l
                        }
                        break;
                    default:
                        y = rl,
                        rl = 0,
                        ht = null,
                        Me(l, c, s, y)
                    }
                }
                Em(),
                i = Ul;
                break
            } catch (p) {
                A0(l, p)
            }
        while (!0);
        return t && l.shellSuspendCounter++,
        Zt = qa = null,
        ol = e,
        T.H = u,
        T.A = n,
        ll === null && (zl = null,
        el = 0,
        wu()),
        i
    }
    function Em() {
        for (; ll !== null; )
            O0(ll)
    }
    function Tm(l, t) {
        var a = ol;
        ol |= 2;
        var e = M0()
          , u = x0();
        zl !== l || el !== t ? (Mn = null,
        _n = ct() + 500,
        _e(l, t)) : Ee = He(l, t);
        l: do
            try {
                if (rl !== 0 && ll !== null) {
                    t = ll;
                    var n = ht;
                    t: switch (rl) {
                    case 1:
                        rl = 0,
                        ht = null,
                        Me(l, t, n, 1);
                        break;
                    case 2:
                    case 9:
                        if (qs(n)) {
                            rl = 0,
                            ht = null,
                            D0(t);
                            break
                        }
                        t = function() {
                            rl !== 2 && rl !== 9 || zl !== l || (rl = 7),
                            Ht(l)
                        }
                        ,
                        n.then(t, t);
                        break l;
                    case 3:
                        rl = 7;
                        break l;
                    case 4:
                        rl = 5;
                        break l;
                    case 7:
                        qs(n) ? (rl = 0,
                        ht = null,
                        D0(t)) : (rl = 0,
                        ht = null,
                        Me(l, t, n, 7));
                        break;
                    case 5:
                        var i = null;
                        switch (ll.tag) {
                        case 26:
                            i = ll.memoizedState;
                        case 5:
                        case 27:
                            var c = ll;
                            if (i ? hd(i) : c.stateNode.complete) {
                                rl = 0,
                                ht = null;
                                var s = c.sibling;
                                if (s !== null)
                                    ll = s;
                                else {
                                    var y = c.return;
                                    y !== null ? (ll = y,
                                    Dn(y)) : ll = null
                                }
                                break t
                            }
                        }
                        rl = 0,
                        ht = null,
                        Me(l, t, n, 5);
                        break;
                    case 6:
                        rl = 0,
                        ht = null,
                        Me(l, t, n, 6);
                        break;
                    case 8:
                        Qc(),
                        Ul = 6;
                        break l;
                    default:
                        throw Error(f(462))
                    }
                }
                Am();
                break
            } catch (p) {
                A0(l, p)
            }
        while (!0);
        return Zt = qa = null,
        T.H = e,
        T.A = u,
        ol = a,
        ll !== null ? 0 : (zl = null,
        el = 0,
        wu(),
        Ul)
    }
    function Am() {
        for (; ll !== null && !wd(); )
            O0(ll)
    }
    function O0(l) {
        var t = Io(l.alternate, l, It);
        l.memoizedProps = l.pendingProps,
        t === null ? Dn(l) : ll = t
    }
    function D0(l) {
        var t = l
          , a = t.alternate;
        switch (t.tag) {
        case 15:
        case 0:
            t = Jo(a, t, t.pendingProps, t.type, void 0, el);
            break;
        case 11:
            t = Jo(a, t, t.pendingProps, t.type.render, t.ref, el);
            break;
        case 5:
            ec(t);
        default:
            l0(a, t),
            t = ll = Ms(t, It),
            t = Io(a, t, It)
        }
        l.memoizedProps = l.pendingProps,
        t === null ? Dn(l) : ll = t
    }
    function Me(l, t, a, e) {
        Zt = qa = null,
        ec(t),
        ve = null,
        Ie = 0;
        var u = t.return;
        try {
            if (mm(l, u, t, a, el)) {
                Ul = 1,
                yn(l, zt(a, l.current)),
                ll = null;
                return
            }
        } catch (n) {
            if (u !== null)
                throw ll = u,
                n;
            Ul = 1,
            yn(l, zt(a, l.current)),
            ll = null;
            return
        }
        t.flags & 32768 ? (nl || e === 1 ? l = !0 : Ee || (el & 536870912) !== 0 ? l = !1 : (ha = l = !0,
        (e === 2 || e === 9 || e === 3 || e === 6) && (e = mt.current,
        e !== null && e.tag === 13 && (e.flags |= 16384))),
        U0(t, l)) : Dn(t)
    }
    function Dn(l) {
        var t = l;
        do {
            if ((t.flags & 32768) !== 0) {
                U0(t, ha);
                return
            }
            l = t.return;
            var a = vm(t.alternate, t, It);
            if (a !== null) {
                ll = a;
                return
            }
            if (t = t.sibling,
            t !== null) {
                ll = t;
                return
            }
            ll = t = l
        } while (t !== null);
        Ul === 0 && (Ul = 5)
    }
    function U0(l, t) {
        do {
            var a = ym(l.alternate, l);
            if (a !== null) {
                a.flags &= 32767,
                ll = a;
                return
            }
            if (a = l.return,
            a !== null && (a.flags |= 32768,
            a.subtreeFlags = 0,
            a.deletions = null),
            !t && (l = l.sibling,
            l !== null)) {
                ll = l;
                return
            }
            ll = l = a
        } while (l !== null);
        Ul = 6,
        ll = null
    }
    function N0(l, t, a, e, u, n, i, c, s) {
        l.cancelPendingCommit = null;
        do
            Un();
        while (Ql !== 0);
        if ((ol & 6) !== 0)
            throw Error(f(327));
        if (t !== null) {
            if (t === l.current)
                throw Error(f(177));
            if (n = t.lanes | t.childLanes,
            n |= Ui,
            e1(l, a, n, i, c, s),
            l === zl && (ll = zl = null,
            el = 0),
            Ae = t,
            ga = l,
            Pt = a,
            Gc = n,
            Yc = u,
            z0 = e,
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null,
            l.callbackPriority = 0,
            Om(Nu, function() {
                return B0(),
                null
            })) : (l.callbackNode = null,
            l.callbackPriority = 0),
            e = (t.flags & 13878) !== 0,
            (t.subtreeFlags & 13878) !== 0 || e) {
                e = T.T,
                T.T = null,
                u = N.p,
                N.p = 2,
                i = ol,
                ol |= 4;
                try {
                    gm(l, t, a)
                } finally {
                    ol = i,
                    N.p = u,
                    T.T = e
                }
            }
            Ql = 1,
            C0(),
            j0(),
            R0()
        }
    }
    function C0() {
        if (Ql === 1) {
            Ql = 0;
            var l = ga
              , t = Ae
              , a = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || a) {
                a = T.T,
                T.T = null;
                var e = N.p;
                N.p = 2;
                var u = ol;
                ol |= 4;
                try {
                    m0(t, l);
                    var n = lf
                      , i = gs(l.containerInfo)
                      , c = n.focusedElem
                      , s = n.selectionRange;
                    if (i !== c && c && c.ownerDocument && ys(c.ownerDocument.documentElement, c)) {
                        if (s !== null && _i(c)) {
                            var y = s.start
                              , p = s.end;
                            if (p === void 0 && (p = y),
                            "selectionStart" in c)
                                c.selectionStart = y,
                                c.selectionEnd = Math.min(p, c.value.length);
                            else {
                                var M = c.ownerDocument || document
                                  , g = M && M.defaultView || window;
                                if (g.getSelection) {
                                    var b = g.getSelection()
                                      , j = c.textContent.length
                                      , Q = Math.min(s.start, j)
                                      , bl = s.end === void 0 ? Q : Math.min(s.end, j);
                                    !b.extend && Q > bl && (i = bl,
                                    bl = Q,
                                    Q = i);
                                    var m = vs(c, Q)
                                      , o = vs(c, bl);
                                    if (m && o && (b.rangeCount !== 1 || b.anchorNode !== m.node || b.anchorOffset !== m.offset || b.focusNode !== o.node || b.focusOffset !== o.offset)) {
                                        var v = M.createRange();
                                        v.setStart(m.node, m.offset),
                                        b.removeAllRanges(),
                                        Q > bl ? (b.addRange(v),
                                        b.extend(o.node, o.offset)) : (v.setEnd(o.node, o.offset),
                                        b.addRange(v))
                                    }
                                }
                            }
                        }
                        for (M = [],
                        b = c; b = b.parentNode; )
                            b.nodeType === 1 && M.push({
                                element: b,
                                left: b.scrollLeft,
                                top: b.scrollTop
                            });
                        for (typeof c.focus == "function" && c.focus(),
                        c = 0; c < M.length; c++) {
                            var _ = M[c];
                            _.element.scrollLeft = _.left,
                            _.element.scrollTop = _.top
                        }
                    }
                    Zn = !!Pc,
                    lf = Pc = null
                } finally {
                    ol = u,
                    N.p = e,
                    T.T = a
                }
            }
            l.current = t,
            Ql = 2
        }
    }
    function j0() {
        if (Ql === 2) {
            Ql = 0;
            var l = ga
              , t = Ae
              , a = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || a) {
                a = T.T,
                T.T = null;
                var e = N.p;
                N.p = 2;
                var u = ol;
                ol |= 4;
                try {
                    c0(l, t.alternate, t)
                } finally {
                    ol = u,
                    N.p = e,
                    T.T = a
                }
            }
            Ql = 3
        }
    }
    function R0() {
        if (Ql === 4 || Ql === 3) {
            Ql = 0,
            Wd();
            var l = ga
              , t = Ae
              , a = Pt
              , e = z0;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Ql = 5 : (Ql = 0,
            Ae = ga = null,
            H0(l, l.pendingLanes));
            var u = l.pendingLanes;
            if (u === 0 && (ya = null),
            ii(a),
            t = t.stateNode,
            ft && typeof ft.onCommitFiberRoot == "function")
                try {
                    ft.onCommitFiberRoot(Re, t, void 0, (t.current.flags & 128) === 128)
                } catch {}
            if (e !== null) {
                t = T.T,
                u = N.p,
                N.p = 2,
                T.T = null;
                try {
                    for (var n = l.onRecoverableError, i = 0; i < e.length; i++) {
                        var c = e[i];
                        n(c.value, {
                            componentStack: c.stack
                        })
                    }
                } finally {
                    T.T = t,
                    N.p = u
                }
            }
            (Pt & 3) !== 0 && Un(),
            Ht(l),
            u = l.pendingLanes,
            (a & 261930) !== 0 && (u & 42) !== 0 ? l === Xc ? vu++ : (vu = 0,
            Xc = l) : vu = 0,
            yu(0)
        }
    }
    function H0(l, t) {
        (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache,
        t != null && (l.pooledCache = null,
        ke(t)))
    }
    function Un() {
        return C0(),
        j0(),
        R0(),
        B0()
    }
    function B0() {
        if (Ql !== 5)
            return !1;
        var l = ga
          , t = Gc;
        Gc = 0;
        var a = ii(Pt)
          , e = T.T
          , u = N.p;
        try {
            N.p = 32 > a ? 32 : a,
            T.T = null,
            a = Yc,
            Yc = null;
            var n = ga
              , i = Pt;
            if (Ql = 0,
            Ae = ga = null,
            Pt = 0,
            (ol & 6) !== 0)
                throw Error(f(331));
            var c = ol;
            if (ol |= 4,
            g0(n.current),
            h0(n, n.current, i, a),
            ol = c,
            yu(0, !1),
            ft && typeof ft.onPostCommitFiberRoot == "function")
                try {
                    ft.onPostCommitFiberRoot(Re, n)
                } catch {}
            return !0
        } finally {
            N.p = u,
            T.T = e,
            H0(l, t)
        }
    }
    function q0(l, t, a) {
        t = zt(a, t),
        t = bc(l.stateNode, t, 2),
        l = oa(l, t, 2),
        l !== null && (Be(l, 2),
        Ht(l))
    }
    function hl(l, t, a) {
        if (l.tag === 3)
            q0(l, l, a);
        else
            for (; t !== null; ) {
                if (t.tag === 3) {
                    q0(t, l, a);
                    break
                } else if (t.tag === 1) {
                    var e = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof e.componentDidCatch == "function" && (ya === null || !ya.has(e))) {
                        l = zt(a, l),
                        a = Go(2),
                        e = oa(t, a, 2),
                        e !== null && (Yo(a, e, t, l),
                        Be(e, 2),
                        Ht(e));
                        break
                    }
                }
                t = t.return
            }
    }
    function Lc(l, t, a) {
        var e = l.pingCache;
        if (e === null) {
            e = l.pingCache = new zm;
            var u = new Set;
            e.set(t, u)
        } else
            u = e.get(t),
            u === void 0 && (u = new Set,
            e.set(t, u));
        u.has(a) || (Hc = !0,
        u.add(a),
        l = _m.bind(null, l, t, a),
        t.then(l, l))
    }
    function _m(l, t, a) {
        var e = l.pingCache;
        e !== null && e.delete(t),
        l.pingedLanes |= l.suspendedLanes & a,
        l.warmLanes &= ~a,
        zl === l && (el & a) === a && (Ul === 4 || Ul === 3 && (el & 62914560) === el && 300 > ct() - An ? (ol & 2) === 0 && _e(l, 0) : Bc |= a,
        Te === el && (Te = 0)),
        Ht(l)
    }
    function G0(l, t) {
        t === 0 && (t = Nf()),
        l = Ra(l, t),
        l !== null && (Be(l, t),
        Ht(l))
    }
    function Mm(l) {
        var t = l.memoizedState
          , a = 0;
        t !== null && (a = t.retryLane),
        G0(l, a)
    }
    function xm(l, t) {
        var a = 0;
        switch (l.tag) {
        case 31:
        case 13:
            var e = l.stateNode
              , u = l.memoizedState;
            u !== null && (a = u.retryLane);
            break;
        case 19:
            e = l.stateNode;
            break;
        case 22:
            e = l.stateNode._retryCache;
            break;
        default:
            throw Error(f(314))
        }
        e !== null && e.delete(t),
        G0(l, a)
    }
    function Om(l, t) {
        return ai(l, t)
    }
    var Nn = null
      , xe = null
      , Vc = !1
      , Cn = !1
      , Kc = !1
      , Sa = 0;
    function Ht(l) {
        l !== xe && l.next === null && (xe === null ? Nn = xe = l : xe = xe.next = l),
        Cn = !0,
        Vc || (Vc = !0,
        Um())
    }
    function yu(l, t) {
        if (!Kc && Cn) {
            Kc = !0;
            do
                for (var a = !1, e = Nn; e !== null; ) {
                    if (l !== 0) {
                        var u = e.pendingLanes;
                        if (u === 0)
                            var n = 0;
                        else {
                            var i = e.suspendedLanes
                              , c = e.pingedLanes;
                            n = (1 << 31 - st(42 | l) + 1) - 1,
                            n &= u & ~(i & ~c),
                            n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0
                        }
                        n !== 0 && (a = !0,
                        Z0(e, n))
                    } else
                        n = el,
                        n = Hu(e, e === zl ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1),
                        (n & 3) === 0 || He(e, n) || (a = !0,
                        Z0(e, n));
                    e = e.next
                }
            while (a);
            Kc = !1
        }
    }
    function Dm() {
        Y0()
    }
    function Y0() {
        Cn = Vc = !1;
        var l = 0;
        Sa !== 0 && Xm() && (l = Sa);
        for (var t = ct(), a = null, e = Nn; e !== null; ) {
            var u = e.next
              , n = X0(e, t);
            n === 0 ? (e.next = null,
            a === null ? Nn = u : a.next = u,
            u === null && (xe = a)) : (a = e,
            (l !== 0 || (n & 3) !== 0) && (Cn = !0)),
            e = u
        }
        Ql !== 0 && Ql !== 5 || yu(l),
        Sa !== 0 && (Sa = 0)
    }
    function X0(l, t) {
        for (var a = l.suspendedLanes, e = l.pingedLanes, u = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
            var i = 31 - st(n)
              , c = 1 << i
              , s = u[i];
            s === -1 ? ((c & a) === 0 || (c & e) !== 0) && (u[i] = a1(c, t)) : s <= t && (l.expiredLanes |= c),
            n &= ~c
        }
        if (t = zl,
        a = el,
        a = Hu(l, l === t ? a : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1),
        e = l.callbackNode,
        a === 0 || l === t && (rl === 2 || rl === 9) || l.cancelPendingCommit !== null)
            return e !== null && e !== null && ei(e),
            l.callbackNode = null,
            l.callbackPriority = 0;
        if ((a & 3) === 0 || He(l, a)) {
            if (t = a & -a,
            t === l.callbackPriority)
                return t;
            switch (e !== null && ei(e),
            ii(a)) {
            case 2:
            case 8:
                a = Df;
                break;
            case 32:
                a = Nu;
                break;
            case 268435456:
                a = Uf;
                break;
            default:
                a = Nu
            }
            return e = Q0.bind(null, l),
            a = ai(a, e),
            l.callbackPriority = t,
            l.callbackNode = a,
            t
        }
        return e !== null && e !== null && ei(e),
        l.callbackPriority = 2,
        l.callbackNode = null,
        2
    }
    function Q0(l, t) {
        if (Ql !== 0 && Ql !== 5)
            return l.callbackNode = null,
            l.callbackPriority = 0,
            null;
        var a = l.callbackNode;
        if (Un() && l.callbackNode !== a)
            return null;
        var e = el;
        return e = Hu(l, l === zl ? e : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1),
        e === 0 ? null : (E0(l, e, t),
        X0(l, ct()),
        l.callbackNode != null && l.callbackNode === a ? Q0.bind(null, l) : null)
    }
    function Z0(l, t) {
        if (Un())
            return null;
        E0(l, t, !0)
    }
    function Um() {
        Zm(function() {
            (ol & 6) !== 0 ? ai(Of, Dm) : Y0()
        })
    }
    function Jc() {
        if (Sa === 0) {
            var l = me;
            l === 0 && (l = Cu,
            Cu <<= 1,
            (Cu & 261888) === 0 && (Cu = 256)),
            Sa = l
        }
        return Sa
    }
    function L0(l) {
        return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Yu("" + l)
    }
    function V0(l, t) {
        var a = t.ownerDocument.createElement("input");
        return a.name = t.name,
        a.value = t.value,
        l.id && a.setAttribute("form", l.id),
        t.parentNode.insertBefore(a, t),
        l = new FormData(l),
        a.parentNode.removeChild(a),
        l
    }
    function Nm(l, t, a, e, u) {
        if (t === "submit" && a && a.stateNode === u) {
            var n = L0((u[lt] || null).action)
              , i = e.submitter;
            i && (t = (t = i[lt] || null) ? L0(t.formAction) : i.getAttribute("formAction"),
            t !== null && (n = t,
            i = null));
            var c = new Lu("action","action",null,e,u);
            l.push({
                event: c,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (e.defaultPrevented) {
                            if (Sa !== 0) {
                                var s = i ? V0(u, i) : new FormData(u);
                                mc(a, {
                                    pending: !0,
                                    data: s,
                                    method: u.method,
                                    action: n
                                }, null, s)
                            }
                        } else
                            typeof n == "function" && (c.preventDefault(),
                            s = i ? V0(u, i) : new FormData(u),
                            mc(a, {
                                pending: !0,
                                data: s,
                                method: u.method,
                                action: n
                            }, n, s))
                    },
                    currentTarget: u
                }]
            })
        }
    }
    for (var wc = 0; wc < Di.length; wc++) {
        var Wc = Di[wc]
          , Cm = Wc.toLowerCase()
          , jm = Wc[0].toUpperCase() + Wc.slice(1);
        Dt(Cm, "on" + jm)
    }
    Dt(zs, "onAnimationEnd"),
    Dt(ps, "onAnimationIteration"),
    Dt(Es, "onAnimationStart"),
    Dt("dblclick", "onDoubleClick"),
    Dt("focusin", "onFocus"),
    Dt("focusout", "onBlur"),
    Dt($1, "onTransitionRun"),
    Dt(k1, "onTransitionStart"),
    Dt(F1, "onTransitionCancel"),
    Dt(Ts, "onTransitionEnd"),
    Ia("onMouseEnter", ["mouseout", "mouseover"]),
    Ia("onMouseLeave", ["mouseout", "mouseover"]),
    Ia("onPointerEnter", ["pointerout", "pointerover"]),
    Ia("onPointerLeave", ["pointerout", "pointerover"]),
    Ua("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    Ua("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    Ua("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Ua("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    Ua("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    Ua("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var gu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , Rm = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(gu));
    function K0(l, t) {
        t = (t & 4) !== 0;
        for (var a = 0; a < l.length; a++) {
            var e = l[a]
              , u = e.event;
            e = e.listeners;
            l: {
                var n = void 0;
                if (t)
                    for (var i = e.length - 1; 0 <= i; i--) {
                        var c = e[i]
                          , s = c.instance
                          , y = c.currentTarget;
                        if (c = c.listener,
                        s !== n && u.isPropagationStopped())
                            break l;
                        n = c,
                        u.currentTarget = y;
                        try {
                            n(u)
                        } catch (p) {
                            Ju(p)
                        }
                        u.currentTarget = null,
                        n = s
                    }
                else
                    for (i = 0; i < e.length; i++) {
                        if (c = e[i],
                        s = c.instance,
                        y = c.currentTarget,
                        c = c.listener,
                        s !== n && u.isPropagationStopped())
                            break l;
                        n = c,
                        u.currentTarget = y;
                        try {
                            n(u)
                        } catch (p) {
                            Ju(p)
                        }
                        u.currentTarget = null,
                        n = s
                    }
            }
        }
    }
    function tl(l, t) {
        var a = t[ci];
        a === void 0 && (a = t[ci] = new Set);
        var e = l + "__bubble";
        a.has(e) || (J0(t, l, 2, !1),
        a.add(e))
    }
    function $c(l, t, a) {
        var e = 0;
        t && (e |= 4),
        J0(a, l, e, t)
    }
    var jn = "_reactListening" + Math.random().toString(36).slice(2);
    function kc(l) {
        if (!l[jn]) {
            l[jn] = !0,
            Gf.forEach(function(a) {
                a !== "selectionchange" && (Rm.has(a) || $c(a, !1, l),
                $c(a, !0, l))
            });
            var t = l.nodeType === 9 ? l : l.ownerDocument;
            t === null || t[jn] || (t[jn] = !0,
            $c("selectionchange", !1, t))
        }
    }
    function J0(l, t, a, e) {
        switch (pd(t)) {
        case 2:
            var u = fr;
            break;
        case 8:
            u = sr;
            break;
        default:
            u = mf
        }
        a = u.bind(null, t, a, l),
        u = void 0,
        !yi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = !0),
        e ? u !== void 0 ? l.addEventListener(t, a, {
            capture: !0,
            passive: u
        }) : l.addEventListener(t, a, !0) : u !== void 0 ? l.addEventListener(t, a, {
            passive: u
        }) : l.addEventListener(t, a, !1)
    }
    function Fc(l, t, a, e, u) {
        var n = e;
        if ((t & 1) === 0 && (t & 2) === 0 && e !== null)
            l: for (; ; ) {
                if (e === null)
                    return;
                var i = e.tag;
                if (i === 3 || i === 4) {
                    var c = e.stateNode.containerInfo;
                    if (c === u)
                        break;
                    if (i === 4)
                        for (i = e.return; i !== null; ) {
                            var s = i.tag;
                            if ((s === 3 || s === 4) && i.stateNode.containerInfo === u)
                                return;
                            i = i.return
                        }
                    for (; c !== null; ) {
                        if (i = $a(c),
                        i === null)
                            return;
                        if (s = i.tag,
                        s === 5 || s === 6 || s === 26 || s === 27) {
                            e = n = i;
                            continue l
                        }
                        c = c.parentNode
                    }
                }
                e = e.return
            }
        kf(function() {
            var y = n
              , p = hi(a)
              , M = [];
            l: {
                var g = As.get(l);
                if (g !== void 0) {
                    var b = Lu
                      , j = l;
                    switch (l) {
                    case "keypress":
                        if (Qu(a) === 0)
                            break l;
                    case "keydown":
                    case "keyup":
                        b = x1;
                        break;
                    case "focusin":
                        j = "focus",
                        b = zi;
                        break;
                    case "focusout":
                        j = "blur",
                        b = zi;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        b = zi;
                        break;
                    case "click":
                        if (a.button === 2)
                            break l;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        b = Pf;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        b = v1;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        b = U1;
                        break;
                    case zs:
                    case ps:
                    case Es:
                        b = b1;
                        break;
                    case Ts:
                        b = C1;
                        break;
                    case "scroll":
                    case "scrollend":
                        b = r1;
                        break;
                    case "wheel":
                        b = R1;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        b = z1;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        b = ts;
                        break;
                    case "toggle":
                    case "beforetoggle":
                        b = B1
                    }
                    var Q = (t & 4) !== 0
                      , bl = !Q && (l === "scroll" || l === "scrollend")
                      , m = Q ? g !== null ? g + "Capture" : null : g;
                    Q = [];
                    for (var o = y, v; o !== null; ) {
                        var _ = o;
                        if (v = _.stateNode,
                        _ = _.tag,
                        _ !== 5 && _ !== 26 && _ !== 27 || v === null || m === null || (_ = Ye(o, m),
                        _ != null && Q.push(bu(o, _, v))),
                        bl)
                            break;
                        o = o.return
                    }
                    0 < Q.length && (g = new b(g,j,null,a,p),
                    M.push({
                        event: g,
                        listeners: Q
                    }))
                }
            }
            if ((t & 7) === 0) {
                l: {
                    if (g = l === "mouseover" || l === "pointerover",
                    b = l === "mouseout" || l === "pointerout",
                    g && a !== ri && (j = a.relatedTarget || a.fromElement) && ($a(j) || j[Wa]))
                        break l;
                    if ((b || g) && (g = p.window === p ? p : (g = p.ownerDocument) ? g.defaultView || g.parentWindow : window,
                    b ? (j = a.relatedTarget || a.toElement,
                    b = y,
                    j = j ? $a(j) : null,
                    j !== null && (bl = U(j),
                    Q = j.tag,
                    j !== bl || Q !== 5 && Q !== 27 && Q !== 6) && (j = null)) : (b = null,
                    j = y),
                    b !== j)) {
                        if (Q = Pf,
                        _ = "onMouseLeave",
                        m = "onMouseEnter",
                        o = "mouse",
                        (l === "pointerout" || l === "pointerover") && (Q = ts,
                        _ = "onPointerLeave",
                        m = "onPointerEnter",
                        o = "pointer"),
                        bl = b == null ? g : Ge(b),
                        v = j == null ? g : Ge(j),
                        g = new Q(_,o + "leave",b,a,p),
                        g.target = bl,
                        g.relatedTarget = v,
                        _ = null,
                        $a(p) === y && (Q = new Q(m,o + "enter",j,a,p),
                        Q.target = v,
                        Q.relatedTarget = bl,
                        _ = Q),
                        bl = _,
                        b && j)
                            t: {
                                for (Q = Hm,
                                m = b,
                                o = j,
                                v = 0,
                                _ = m; _; _ = Q(_))
                                    v++;
                                _ = 0;
                                for (var Y = o; Y; Y = Q(Y))
                                    _++;
                                for (; 0 < v - _; )
                                    m = Q(m),
                                    v--;
                                for (; 0 < _ - v; )
                                    o = Q(o),
                                    _--;
                                for (; v--; ) {
                                    if (m === o || o !== null && m === o.alternate) {
                                        Q = m;
                                        break t
                                    }
                                    m = Q(m),
                                    o = Q(o)
                                }
                                Q = null
                            }
                        else
                            Q = null;
                        b !== null && w0(M, g, b, Q, !1),
                        j !== null && bl !== null && w0(M, bl, j, Q, !0)
                    }
                }
                l: {
                    if (g = y ? Ge(y) : window,
                    b = g.nodeName && g.nodeName.toLowerCase(),
                    b === "select" || b === "input" && g.type === "file")
                        var cl = ss;
                    else if (cs(g))
                        if (os)
                            cl = J1;
                        else {
                            cl = V1;
                            var B = L1
                        }
                    else
                        b = g.nodeName,
                        !b || b.toLowerCase() !== "input" || g.type !== "checkbox" && g.type !== "radio" ? y && mi(y.elementType) && (cl = ss) : cl = K1;
                    if (cl && (cl = cl(l, y))) {
                        fs(M, cl, a, p);
                        break l
                    }
                    B && B(l, g, y),
                    l === "focusout" && y && g.type === "number" && y.memoizedProps.value != null && di(g, "number", g.value)
                }
                switch (B = y ? Ge(y) : window,
                l) {
                case "focusin":
                    (cs(B) || B.contentEditable === "true") && (ue = B,
                    Mi = y,
                    we = null);
                    break;
                case "focusout":
                    we = Mi = ue = null;
                    break;
                case "mousedown":
                    xi = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    xi = !1,
                    bs(M, a, p);
                    break;
                case "selectionchange":
                    if (W1)
                        break;
                case "keydown":
                case "keyup":
                    bs(M, a, p)
                }
                var W;
                if (Ei)
                    l: {
                        switch (l) {
                        case "compositionstart":
                            var ul = "onCompositionStart";
                            break l;
                        case "compositionend":
                            ul = "onCompositionEnd";
                            break l;
                        case "compositionupdate":
                            ul = "onCompositionUpdate";
                            break l
                        }
                        ul = void 0
                    }
                else
                    ee ? ns(l, a) && (ul = "onCompositionEnd") : l === "keydown" && a.keyCode === 229 && (ul = "onCompositionStart");
                ul && (as && a.locale !== "ko" && (ee || ul !== "onCompositionStart" ? ul === "onCompositionEnd" && ee && (W = Ff()) : (ea = p,
                gi = "value" in ea ? ea.value : ea.textContent,
                ee = !0)),
                B = Rn(y, ul),
                0 < B.length && (ul = new ls(ul,l,null,a,p),
                M.push({
                    event: ul,
                    listeners: B
                }),
                W ? ul.data = W : (W = is(a),
                W !== null && (ul.data = W)))),
                (W = G1 ? Y1(l, a) : X1(l, a)) && (ul = Rn(y, "onBeforeInput"),
                0 < ul.length && (B = new ls("onBeforeInput","beforeinput",null,a,p),
                M.push({
                    event: B,
                    listeners: ul
                }),
                B.data = W)),
                Nm(M, l, y, a, p)
            }
            K0(M, t)
        })
    }
    function bu(l, t, a) {
        return {
            instance: l,
            listener: t,
            currentTarget: a
        }
    }
    function Rn(l, t) {
        for (var a = t + "Capture", e = []; l !== null; ) {
            var u = l
              , n = u.stateNode;
            if (u = u.tag,
            u !== 5 && u !== 26 && u !== 27 || n === null || (u = Ye(l, a),
            u != null && e.unshift(bu(l, u, n)),
            u = Ye(l, t),
            u != null && e.push(bu(l, u, n))),
            l.tag === 3)
                return e;
            l = l.return
        }
        return []
    }
    function Hm(l) {
        if (l === null)
            return null;
        do
            l = l.return;
        while (l && l.tag !== 5 && l.tag !== 27);
        return l || null
    }
    function w0(l, t, a, e, u) {
        for (var n = t._reactName, i = []; a !== null && a !== e; ) {
            var c = a
              , s = c.alternate
              , y = c.stateNode;
            if (c = c.tag,
            s !== null && s === e)
                break;
            c !== 5 && c !== 26 && c !== 27 || y === null || (s = y,
            u ? (y = Ye(a, n),
            y != null && i.unshift(bu(a, y, s))) : u || (y = Ye(a, n),
            y != null && i.push(bu(a, y, s)))),
            a = a.return
        }
        i.length !== 0 && l.push({
            event: t,
            listeners: i
        })
    }
    var Bm = /\r\n?/g
      , qm = /\u0000|\uFFFD/g;
    function W0(l) {
        return (typeof l == "string" ? l : "" + l).replace(Bm, `
`).replace(qm, "")
    }
    function $0(l, t) {
        return t = W0(t),
        W0(l) === t
    }
    function gl(l, t, a, e, u, n) {
        switch (a) {
        case "children":
            typeof e == "string" ? t === "body" || t === "textarea" && e === "" || le(l, e) : (typeof e == "number" || typeof e == "bigint") && t !== "body" && le(l, "" + e);
            break;
        case "className":
            qu(l, "class", e);
            break;
        case "tabIndex":
            qu(l, "tabindex", e);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            qu(l, a, e);
            break;
        case "style":
            Wf(l, e, n);
            break;
        case "data":
            if (t !== "object") {
                qu(l, "data", e);
                break
            }
        case "src":
        case "href":
            if (e === "" && (t !== "a" || a !== "href")) {
                l.removeAttribute(a);
                break
            }
            if (e == null || typeof e == "function" || typeof e == "symbol" || typeof e == "boolean") {
                l.removeAttribute(a);
                break
            }
            e = Yu("" + e),
            l.setAttribute(a, e);
            break;
        case "action":
        case "formAction":
            if (typeof e == "function") {
                l.setAttribute(a, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break
            } else
                typeof n == "function" && (a === "formAction" ? (t !== "input" && gl(l, t, "name", u.name, u, null),
                gl(l, t, "formEncType", u.formEncType, u, null),
                gl(l, t, "formMethod", u.formMethod, u, null),
                gl(l, t, "formTarget", u.formTarget, u, null)) : (gl(l, t, "encType", u.encType, u, null),
                gl(l, t, "method", u.method, u, null),
                gl(l, t, "target", u.target, u, null)));
            if (e == null || typeof e == "symbol" || typeof e == "boolean") {
                l.removeAttribute(a);
                break
            }
            e = Yu("" + e),
            l.setAttribute(a, e);
            break;
        case "onClick":
            e != null && (l.onclick = Gt);
            break;
        case "onScroll":
            e != null && tl("scroll", l);
            break;
        case "onScrollEnd":
            e != null && tl("scrollend", l);
            break;
        case "dangerouslySetInnerHTML":
            if (e != null) {
                if (typeof e != "object" || !("__html" in e))
                    throw Error(f(61));
                if (a = e.__html,
                a != null) {
                    if (u.children != null)
                        throw Error(f(60));
                    l.innerHTML = a
                }
            }
            break;
        case "multiple":
            l.multiple = e && typeof e != "function" && typeof e != "symbol";
            break;
        case "muted":
            l.muted = e && typeof e != "function" && typeof e != "symbol";
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
            break;
        case "autoFocus":
            break;
        case "xlinkHref":
            if (e == null || typeof e == "function" || typeof e == "boolean" || typeof e == "symbol") {
                l.removeAttribute("xlink:href");
                break
            }
            a = Yu("" + e),
            l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
            break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
            e != null && typeof e != "function" && typeof e != "symbol" ? l.setAttribute(a, "" + e) : l.removeAttribute(a);
            break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
            e && typeof e != "function" && typeof e != "symbol" ? l.setAttribute(a, "") : l.removeAttribute(a);
            break;
        case "capture":
        case "download":
            e === !0 ? l.setAttribute(a, "") : e !== !1 && e != null && typeof e != "function" && typeof e != "symbol" ? l.setAttribute(a, e) : l.removeAttribute(a);
            break;
        case "cols":
        case "rows":
        case "size":
        case "span":
            e != null && typeof e != "function" && typeof e != "symbol" && !isNaN(e) && 1 <= e ? l.setAttribute(a, e) : l.removeAttribute(a);
            break;
        case "rowSpan":
        case "start":
            e == null || typeof e == "function" || typeof e == "symbol" || isNaN(e) ? l.removeAttribute(a) : l.setAttribute(a, e);
            break;
        case "popover":
            tl("beforetoggle", l),
            tl("toggle", l),
            Bu(l, "popover", e);
            break;
        case "xlinkActuate":
            qt(l, "http://www.w3.org/1999/xlink", "xlink:actuate", e);
            break;
        case "xlinkArcrole":
            qt(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", e);
            break;
        case "xlinkRole":
            qt(l, "http://www.w3.org/1999/xlink", "xlink:role", e);
            break;
        case "xlinkShow":
            qt(l, "http://www.w3.org/1999/xlink", "xlink:show", e);
            break;
        case "xlinkTitle":
            qt(l, "http://www.w3.org/1999/xlink", "xlink:title", e);
            break;
        case "xlinkType":
            qt(l, "http://www.w3.org/1999/xlink", "xlink:type", e);
            break;
        case "xmlBase":
            qt(l, "http://www.w3.org/XML/1998/namespace", "xml:base", e);
            break;
        case "xmlLang":
            qt(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", e);
            break;
        case "xmlSpace":
            qt(l, "http://www.w3.org/XML/1998/namespace", "xml:space", e);
            break;
        case "is":
            Bu(l, "is", e);
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = d1.get(a) || a,
            Bu(l, a, e))
        }
    }
    function Ic(l, t, a, e, u, n) {
        switch (a) {
        case "style":
            Wf(l, e, n);
            break;
        case "dangerouslySetInnerHTML":
            if (e != null) {
                if (typeof e != "object" || !("__html" in e))
                    throw Error(f(61));
                if (a = e.__html,
                a != null) {
                    if (u.children != null)
                        throw Error(f(60));
                    l.innerHTML = a
                }
            }
            break;
        case "children":
            typeof e == "string" ? le(l, e) : (typeof e == "number" || typeof e == "bigint") && le(l, "" + e);
            break;
        case "onScroll":
            e != null && tl("scroll", l);
            break;
        case "onScrollEnd":
            e != null && tl("scrollend", l);
            break;
        case "onClick":
            e != null && (l.onclick = Gt);
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            if (!Yf.hasOwnProperty(a))
                l: {
                    if (a[0] === "o" && a[1] === "n" && (u = a.endsWith("Capture"),
                    t = a.slice(2, u ? a.length - 7 : void 0),
                    n = l[lt] || null,
                    n = n != null ? n[a] : null,
                    typeof n == "function" && l.removeEventListener(t, n, u),
                    typeof e == "function")) {
                        typeof n != "function" && n !== null && (a in l ? l[a] = null : l.hasAttribute(a) && l.removeAttribute(a)),
                        l.addEventListener(t, e, u);
                        break l
                    }
                    a in l ? l[a] = e : e === !0 ? l.setAttribute(a, "") : Bu(l, a, e)
                }
        }
    }
    function $l(l, t, a) {
        switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "img":
            tl("error", l),
            tl("load", l);
            var e = !1, u = !1, n;
            for (n in a)
                if (a.hasOwnProperty(n)) {
                    var i = a[n];
                    if (i != null)
                        switch (n) {
                        case "src":
                            e = !0;
                            break;
                        case "srcSet":
                            u = !0;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(f(137, t));
                        default:
                            gl(l, t, n, i, a, null)
                        }
                }
            u && gl(l, t, "srcSet", a.srcSet, a, null),
            e && gl(l, t, "src", a.src, a, null);
            return;
        case "input":
            tl("invalid", l);
            var c = n = i = u = null
              , s = null
              , y = null;
            for (e in a)
                if (a.hasOwnProperty(e)) {
                    var p = a[e];
                    if (p != null)
                        switch (e) {
                        case "name":
                            u = p;
                            break;
                        case "type":
                            i = p;
                            break;
                        case "checked":
                            s = p;
                            break;
                        case "defaultChecked":
                            y = p;
                            break;
                        case "value":
                            n = p;
                            break;
                        case "defaultValue":
                            c = p;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (p != null)
                                throw Error(f(137, t));
                            break;
                        default:
                            gl(l, t, e, p, a, null)
                        }
                }
            Vf(l, n, c, s, y, i, u, !1);
            return;
        case "select":
            tl("invalid", l),
            e = i = n = null;
            for (u in a)
                if (a.hasOwnProperty(u) && (c = a[u],
                c != null))
                    switch (u) {
                    case "value":
                        n = c;
                        break;
                    case "defaultValue":
                        i = c;
                        break;
                    case "multiple":
                        e = c;
                    default:
                        gl(l, t, u, c, a, null)
                    }
            t = n,
            a = i,
            l.multiple = !!e,
            t != null ? Pa(l, !!e, t, !1) : a != null && Pa(l, !!e, a, !0);
            return;
        case "textarea":
            tl("invalid", l),
            n = u = e = null;
            for (i in a)
                if (a.hasOwnProperty(i) && (c = a[i],
                c != null))
                    switch (i) {
                    case "value":
                        e = c;
                        break;
                    case "defaultValue":
                        u = c;
                        break;
                    case "children":
                        n = c;
                        break;
                    case "dangerouslySetInnerHTML":
                        if (c != null)
                            throw Error(f(91));
                        break;
                    default:
                        gl(l, t, i, c, a, null)
                    }
            Jf(l, e, u, n);
            return;
        case "option":
            for (s in a)
                a.hasOwnProperty(s) && (e = a[s],
                e != null) && (s === "selected" ? l.selected = e && typeof e != "function" && typeof e != "symbol" : gl(l, t, s, e, a, null));
            return;
        case "dialog":
            tl("beforetoggle", l),
            tl("toggle", l),
            tl("cancel", l),
            tl("close", l);
            break;
        case "iframe":
        case "object":
            tl("load", l);
            break;
        case "video":
        case "audio":
            for (e = 0; e < gu.length; e++)
                tl(gu[e], l);
            break;
        case "image":
            tl("error", l),
            tl("load", l);
            break;
        case "details":
            tl("toggle", l);
            break;
        case "embed":
        case "source":
        case "link":
            tl("error", l),
            tl("load", l);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
            for (y in a)
                if (a.hasOwnProperty(y) && (e = a[y],
                e != null))
                    switch (y) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(f(137, t));
                    default:
                        gl(l, t, y, e, a, null)
                    }
            return;
        default:
            if (mi(t)) {
                for (p in a)
                    a.hasOwnProperty(p) && (e = a[p],
                    e !== void 0 && Ic(l, t, p, e, a, void 0));
                return
            }
        }
        for (c in a)
            a.hasOwnProperty(c) && (e = a[c],
            e != null && gl(l, t, c, e, a, null))
    }
    function Gm(l, t, a, e) {
        switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "input":
            var u = null
              , n = null
              , i = null
              , c = null
              , s = null
              , y = null
              , p = null;
            for (b in a) {
                var M = a[b];
                if (a.hasOwnProperty(b) && M != null)
                    switch (b) {
                    case "checked":
                        break;
                    case "value":
                        break;
                    case "defaultValue":
                        s = M;
                    default:
                        e.hasOwnProperty(b) || gl(l, t, b, null, e, M)
                    }
            }
            for (var g in e) {
                var b = e[g];
                if (M = a[g],
                e.hasOwnProperty(g) && (b != null || M != null))
                    switch (g) {
                    case "type":
                        n = b;
                        break;
                    case "name":
                        u = b;
                        break;
                    case "checked":
                        y = b;
                        break;
                    case "defaultChecked":
                        p = b;
                        break;
                    case "value":
                        i = b;
                        break;
                    case "defaultValue":
                        c = b;
                        break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (b != null)
                            throw Error(f(137, t));
                        break;
                    default:
                        b !== M && gl(l, t, g, b, e, M)
                    }
            }
            oi(l, i, c, s, y, p, n, u);
            return;
        case "select":
            b = i = c = g = null;
            for (n in a)
                if (s = a[n],
                a.hasOwnProperty(n) && s != null)
                    switch (n) {
                    case "value":
                        break;
                    case "multiple":
                        b = s;
                    default:
                        e.hasOwnProperty(n) || gl(l, t, n, null, e, s)
                    }
            for (u in e)
                if (n = e[u],
                s = a[u],
                e.hasOwnProperty(u) && (n != null || s != null))
                    switch (u) {
                    case "value":
                        g = n;
                        break;
                    case "defaultValue":
                        c = n;
                        break;
                    case "multiple":
                        i = n;
                    default:
                        n !== s && gl(l, t, u, n, e, s)
                    }
            t = c,
            a = i,
            e = b,
            g != null ? Pa(l, !!a, g, !1) : !!e != !!a && (t != null ? Pa(l, !!a, t, !0) : Pa(l, !!a, a ? [] : "", !1));
            return;
        case "textarea":
            b = g = null;
            for (c in a)
                if (u = a[c],
                a.hasOwnProperty(c) && u != null && !e.hasOwnProperty(c))
                    switch (c) {
                    case "value":
                        break;
                    case "children":
                        break;
                    default:
                        gl(l, t, c, null, e, u)
                    }
            for (i in e)
                if (u = e[i],
                n = a[i],
                e.hasOwnProperty(i) && (u != null || n != null))
                    switch (i) {
                    case "value":
                        g = u;
                        break;
                    case "defaultValue":
                        b = u;
                        break;
                    case "children":
                        break;
                    case "dangerouslySetInnerHTML":
                        if (u != null)
                            throw Error(f(91));
                        break;
                    default:
                        u !== n && gl(l, t, i, u, e, n)
                    }
            Kf(l, g, b);
            return;
        case "option":
            for (var j in a)
                g = a[j],
                a.hasOwnProperty(j) && g != null && !e.hasOwnProperty(j) && (j === "selected" ? l.selected = !1 : gl(l, t, j, null, e, g));
            for (s in e)
                g = e[s],
                b = a[s],
                e.hasOwnProperty(s) && g !== b && (g != null || b != null) && (s === "selected" ? l.selected = g && typeof g != "function" && typeof g != "symbol" : gl(l, t, s, g, e, b));
            return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
            for (var Q in a)
                g = a[Q],
                a.hasOwnProperty(Q) && g != null && !e.hasOwnProperty(Q) && gl(l, t, Q, null, e, g);
            for (y in e)
                if (g = e[y],
                b = a[y],
                e.hasOwnProperty(y) && g !== b && (g != null || b != null))
                    switch (y) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (g != null)
                            throw Error(f(137, t));
                        break;
                    default:
                        gl(l, t, y, g, e, b)
                    }
            return;
        default:
            if (mi(t)) {
                for (var bl in a)
                    g = a[bl],
                    a.hasOwnProperty(bl) && g !== void 0 && !e.hasOwnProperty(bl) && Ic(l, t, bl, void 0, e, g);
                for (p in e)
                    g = e[p],
                    b = a[p],
                    !e.hasOwnProperty(p) || g === b || g === void 0 && b === void 0 || Ic(l, t, p, g, e, b);
                return
            }
        }
        for (var m in a)
            g = a[m],
            a.hasOwnProperty(m) && g != null && !e.hasOwnProperty(m) && gl(l, t, m, null, e, g);
        for (M in e)
            g = e[M],
            b = a[M],
            !e.hasOwnProperty(M) || g === b || g == null && b == null || gl(l, t, M, g, e, b)
    }
    function k0(l) {
        switch (l) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
            return !0;
        default:
            return !1
        }
    }
    function Ym() {
        if (typeof performance.getEntriesByType == "function") {
            for (var l = 0, t = 0, a = performance.getEntriesByType("resource"), e = 0; e < a.length; e++) {
                var u = a[e]
                  , n = u.transferSize
                  , i = u.initiatorType
                  , c = u.duration;
                if (n && c && k0(i)) {
                    for (i = 0,
                    c = u.responseEnd,
                    e += 1; e < a.length; e++) {
                        var s = a[e]
                          , y = s.startTime;
                        if (y > c)
                            break;
                        var p = s.transferSize
                          , M = s.initiatorType;
                        p && k0(M) && (s = s.responseEnd,
                        i += p * (s < c ? 1 : (c - y) / (s - y)))
                    }
                    if (--e,
                    t += 8 * (n + i) / (u.duration / 1e3),
                    l++,
                    10 < l)
                        break
                }
            }
            if (0 < l)
                return t / l / 1e6
        }
        return navigator.connection && (l = navigator.connection.downlink,
        typeof l == "number") ? l : 5
    }
    var Pc = null
      , lf = null;
    function Hn(l) {
        return l.nodeType === 9 ? l : l.ownerDocument
    }
    function F0(l) {
        switch (l) {
        case "http://www.w3.org/2000/svg":
            return 1;
        case "http://www.w3.org/1998/Math/MathML":
            return 2;
        default:
            return 0
        }
    }
    function I0(l, t) {
        if (l === 0)
            switch (t) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
            }
        return l === 1 && t === "foreignObject" ? 0 : l
    }
    function tf(l, t) {
        return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var af = null;
    function Xm() {
        var l = window.event;
        return l && l.type === "popstate" ? l === af ? !1 : (af = l,
        !0) : (af = null,
        !1)
    }
    var P0 = typeof setTimeout == "function" ? setTimeout : void 0
      , Qm = typeof clearTimeout == "function" ? clearTimeout : void 0
      , ld = typeof Promise == "function" ? Promise : void 0
      , Zm = typeof queueMicrotask == "function" ? queueMicrotask : typeof ld < "u" ? function(l) {
        return ld.resolve(null).then(l).catch(Lm)
    }
    : P0;
    function Lm(l) {
        setTimeout(function() {
            throw l
        })
    }
    function za(l) {
        return l === "head"
    }
    function td(l, t) {
        var a = t
          , e = 0;
        do {
            var u = a.nextSibling;
            if (l.removeChild(a),
            u && u.nodeType === 8)
                if (a = u.data,
                a === "/$" || a === "/&") {
                    if (e === 0) {
                        l.removeChild(u),
                        Ne(t);
                        return
                    }
                    e--
                } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&")
                    e++;
                else if (a === "html")
                    Su(l.ownerDocument.documentElement);
                else if (a === "head") {
                    a = l.ownerDocument.head,
                    Su(a);
                    for (var n = a.firstChild; n; ) {
                        var i = n.nextSibling
                          , c = n.nodeName;
                        n[qe] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && n.rel.toLowerCase() === "stylesheet" || a.removeChild(n),
                        n = i
                    }
                } else
                    a === "body" && Su(l.ownerDocument.body);
            a = u
        } while (a);
        Ne(t)
    }
    function ad(l, t) {
        var a = l;
        l = 0;
        do {
            var e = a.nextSibling;
            if (a.nodeType === 1 ? t ? (a._stashedDisplay = a.style.display,
            a.style.display = "none") : (a.style.display = a._stashedDisplay || "",
            a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (t ? (a._stashedText = a.nodeValue,
            a.nodeValue = "") : a.nodeValue = a._stashedText || ""),
            e && e.nodeType === 8)
                if (a = e.data,
                a === "/$") {
                    if (l === 0)
                        break;
                    l--
                } else
                    a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || l++;
            a = e
        } while (a)
    }
    function ef(l) {
        var t = l.firstChild;
        for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
            var a = t;
            switch (t = t.nextSibling,
            a.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
                ef(a),
                fi(a);
                continue;
            case "SCRIPT":
            case "STYLE":
                continue;
            case "LINK":
                if (a.rel.toLowerCase() === "stylesheet")
                    continue
            }
            l.removeChild(a)
        }
    }
    function Vm(l, t, a, e) {
        for (; l.nodeType === 1; ) {
            var u = a;
            if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
                if (!e && (l.nodeName !== "INPUT" || l.type !== "hidden"))
                    break
            } else if (e) {
                if (!l[qe])
                    switch (t) {
                    case "meta":
                        if (!l.hasAttribute("itemprop"))
                            break;
                        return l;
                    case "link":
                        if (n = l.getAttribute("rel"),
                        n === "stylesheet" && l.hasAttribute("data-precedence"))
                            break;
                        if (n !== u.rel || l.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || l.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || l.getAttribute("title") !== (u.title == null ? null : u.title))
                            break;
                        return l;
                    case "style":
                        if (l.hasAttribute("data-precedence"))
                            break;
                        return l;
                    case "script":
                        if (n = l.getAttribute("src"),
                        (n !== (u.src == null ? null : u.src) || l.getAttribute("type") !== (u.type == null ? null : u.type) || l.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                            break;
                        return l;
                    default:
                        return l
                    }
            } else if (t === "input" && l.type === "hidden") {
                var n = u.name == null ? null : "" + u.name;
                if (u.type === "hidden" && l.getAttribute("name") === n)
                    return l
            } else
                return l;
            if (l = _t(l.nextSibling),
            l === null)
                break
        }
        return null
    }
    function Km(l, t, a) {
        if (t === "")
            return null;
        for (; l.nodeType !== 3; )
            if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !a || (l = _t(l.nextSibling),
            l === null))
                return null;
        return l
    }
    function ed(l, t) {
        for (; l.nodeType !== 8; )
            if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = _t(l.nextSibling),
            l === null))
                return null;
        return l
    }
    function uf(l) {
        return l.data === "$?" || l.data === "$~"
    }
    function nf(l) {
        return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading"
    }
    function Jm(l, t) {
        var a = l.ownerDocument;
        if (l.data === "$~")
            l._reactRetry = t;
        else if (l.data !== "$?" || a.readyState !== "loading")
            t();
        else {
            var e = function() {
                t(),
                a.removeEventListener("DOMContentLoaded", e)
            };
            a.addEventListener("DOMContentLoaded", e),
            l._reactRetry = e
        }
    }
    function _t(l) {
        for (; l != null; l = l.nextSibling) {
            var t = l.nodeType;
            if (t === 1 || t === 3)
                break;
            if (t === 8) {
                if (t = l.data,
                t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
                    break;
                if (t === "/$" || t === "/&")
                    return null
            }
        }
        return l
    }
    var cf = null;
    function ud(l) {
        l = l.nextSibling;
        for (var t = 0; l; ) {
            if (l.nodeType === 8) {
                var a = l.data;
                if (a === "/$" || a === "/&") {
                    if (t === 0)
                        return _t(l.nextSibling);
                    t--
                } else
                    a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || t++
            }
            l = l.nextSibling
        }
        return null
    }
    function nd(l) {
        l = l.previousSibling;
        for (var t = 0; l; ) {
            if (l.nodeType === 8) {
                var a = l.data;
                if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
                    if (t === 0)
                        return l;
                    t--
                } else
                    a !== "/$" && a !== "/&" || t++
            }
            l = l.previousSibling
        }
        return null
    }
    function id(l, t, a) {
        switch (t = Hn(a),
        l) {
        case "html":
            if (l = t.documentElement,
            !l)
                throw Error(f(452));
            return l;
        case "head":
            if (l = t.head,
            !l)
                throw Error(f(453));
            return l;
        case "body":
            if (l = t.body,
            !l)
                throw Error(f(454));
            return l;
        default:
            throw Error(f(451))
        }
    }
    function Su(l) {
        for (var t = l.attributes; t.length; )
            l.removeAttributeNode(t[0]);
        fi(l)
    }
    var Mt = new Map
      , cd = new Set;
    function Bn(l) {
        return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument
    }
    var la = N.d;
    N.d = {
        f: wm,
        r: Wm,
        D: $m,
        C: km,
        L: Fm,
        m: Im,
        X: lr,
        S: Pm,
        M: tr
    };
    function wm() {
        var l = la.f()
          , t = xn();
        return l || t
    }
    function Wm(l) {
        var t = ka(l);
        t !== null && t.tag === 5 && t.type === "form" ? Ao(t) : la.r(l)
    }
    var Oe = typeof document > "u" ? null : document;
    function fd(l, t, a) {
        var e = Oe;
        if (e && typeof t == "string" && t) {
            var u = bt(t);
            u = 'link[rel="' + l + '"][href="' + u + '"]',
            typeof a == "string" && (u += '[crossorigin="' + a + '"]'),
            cd.has(u) || (cd.add(u),
            l = {
                rel: l,
                crossOrigin: a,
                href: t
            },
            e.querySelector(u) === null && (t = e.createElement("link"),
            $l(t, "link", l),
            Zl(t),
            e.head.appendChild(t)))
        }
    }
    function $m(l) {
        la.D(l),
        fd("dns-prefetch", l, null)
    }
    function km(l, t) {
        la.C(l, t),
        fd("preconnect", l, t)
    }
    function Fm(l, t, a) {
        la.L(l, t, a);
        var e = Oe;
        if (e && l && t) {
            var u = 'link[rel="preload"][as="' + bt(t) + '"]';
            t === "image" && a && a.imageSrcSet ? (u += '[imagesrcset="' + bt(a.imageSrcSet) + '"]',
            typeof a.imageSizes == "string" && (u += '[imagesizes="' + bt(a.imageSizes) + '"]')) : u += '[href="' + bt(l) + '"]';
            var n = u;
            switch (t) {
            case "style":
                n = De(l);
                break;
            case "script":
                n = Ue(l)
            }
            Mt.has(n) || (l = H({
                rel: "preload",
                href: t === "image" && a && a.imageSrcSet ? void 0 : l,
                as: t
            }, a),
            Mt.set(n, l),
            e.querySelector(u) !== null || t === "style" && e.querySelector(zu(n)) || t === "script" && e.querySelector(pu(n)) || (t = e.createElement("link"),
            $l(t, "link", l),
            Zl(t),
            e.head.appendChild(t)))
        }
    }
    function Im(l, t) {
        la.m(l, t);
        var a = Oe;
        if (a && l) {
            var e = t && typeof t.as == "string" ? t.as : "script"
              , u = 'link[rel="modulepreload"][as="' + bt(e) + '"][href="' + bt(l) + '"]'
              , n = u;
            switch (e) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
                n = Ue(l)
            }
            if (!Mt.has(n) && (l = H({
                rel: "modulepreload",
                href: l
            }, t),
            Mt.set(n, l),
            a.querySelector(u) === null)) {
                switch (e) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    if (a.querySelector(pu(n)))
                        return
                }
                e = a.createElement("link"),
                $l(e, "link", l),
                Zl(e),
                a.head.appendChild(e)
            }
        }
    }
    function Pm(l, t, a) {
        la.S(l, t, a);
        var e = Oe;
        if (e && l) {
            var u = Fa(e).hoistableStyles
              , n = De(l);
            t = t || "default";
            var i = u.get(n);
            if (!i) {
                var c = {
                    loading: 0,
                    preload: null
                };
                if (i = e.querySelector(zu(n)))
                    c.loading = 5;
                else {
                    l = H({
                        rel: "stylesheet",
                        href: l,
                        "data-precedence": t
                    }, a),
                    (a = Mt.get(n)) && ff(l, a);
                    var s = i = e.createElement("link");
                    Zl(s),
                    $l(s, "link", l),
                    s._p = new Promise(function(y, p) {
                        s.onload = y,
                        s.onerror = p
                    }
                    ),
                    s.addEventListener("load", function() {
                        c.loading |= 1
                    }),
                    s.addEventListener("error", function() {
                        c.loading |= 2
                    }),
                    c.loading |= 4,
                    qn(i, t, e)
                }
                i = {
                    type: "stylesheet",
                    instance: i,
                    count: 1,
                    state: c
                },
                u.set(n, i)
            }
        }
    }
    function lr(l, t) {
        la.X(l, t);
        var a = Oe;
        if (a && l) {
            var e = Fa(a).hoistableScripts
              , u = Ue(l)
              , n = e.get(u);
            n || (n = a.querySelector(pu(u)),
            n || (l = H({
                src: l,
                async: !0
            }, t),
            (t = Mt.get(u)) && sf(l, t),
            n = a.createElement("script"),
            Zl(n),
            $l(n, "link", l),
            a.head.appendChild(n)),
            n = {
                type: "script",
                instance: n,
                count: 1,
                state: null
            },
            e.set(u, n))
        }
    }
    function tr(l, t) {
        la.M(l, t);
        var a = Oe;
        if (a && l) {
            var e = Fa(a).hoistableScripts
              , u = Ue(l)
              , n = e.get(u);
            n || (n = a.querySelector(pu(u)),
            n || (l = H({
                src: l,
                async: !0,
                type: "module"
            }, t),
            (t = Mt.get(u)) && sf(l, t),
            n = a.createElement("script"),
            Zl(n),
            $l(n, "link", l),
            a.head.appendChild(n)),
            n = {
                type: "script",
                instance: n,
                count: 1,
                state: null
            },
            e.set(u, n))
        }
    }
    function sd(l, t, a, e) {
        var u = (u = P.current) ? Bn(u) : null;
        if (!u)
            throw Error(f(446));
        switch (l) {
        case "meta":
        case "title":
            return null;
        case "style":
            return typeof a.precedence == "string" && typeof a.href == "string" ? (t = De(a.href),
            a = Fa(u).hoistableStyles,
            e = a.get(t),
            e || (e = {
                type: "style",
                instance: null,
                count: 0,
                state: null
            },
            a.set(t, e)),
            e) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        case "link":
            if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
                l = De(a.href);
                var n = Fa(u).hoistableStyles
                  , i = n.get(l);
                if (i || (u = u.ownerDocument || u,
                i = {
                    type: "stylesheet",
                    instance: null,
                    count: 0,
                    state: {
                        loading: 0,
                        preload: null
                    }
                },
                n.set(l, i),
                (n = u.querySelector(zu(l))) && !n._p && (i.instance = n,
                i.state.loading = 5),
                Mt.has(l) || (a = {
                    rel: "preload",
                    as: "style",
                    href: a.href,
                    crossOrigin: a.crossOrigin,
                    integrity: a.integrity,
                    media: a.media,
                    hrefLang: a.hrefLang,
                    referrerPolicy: a.referrerPolicy
                },
                Mt.set(l, a),
                n || ar(u, l, a, i.state))),
                t && e === null)
                    throw Error(f(528, ""));
                return i
            }
            if (t && e !== null)
                throw Error(f(529, ""));
            return null;
        case "script":
            return t = a.async,
            a = a.src,
            typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Ue(a),
            a = Fa(u).hoistableScripts,
            e = a.get(t),
            e || (e = {
                type: "script",
                instance: null,
                count: 0,
                state: null
            },
            a.set(t, e)),
            e) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        default:
            throw Error(f(444, l))
        }
    }
    function De(l) {
        return 'href="' + bt(l) + '"'
    }
    function zu(l) {
        return 'link[rel="stylesheet"][' + l + "]"
    }
    function od(l) {
        return H({}, l, {
            "data-precedence": l.precedence,
            precedence: null
        })
    }
    function ar(l, t, a, e) {
        l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? e.loading = 1 : (t = l.createElement("link"),
        e.preload = t,
        t.addEventListener("load", function() {
            return e.loading |= 1
        }),
        t.addEventListener("error", function() {
            return e.loading |= 2
        }),
        $l(t, "link", a),
        Zl(t),
        l.head.appendChild(t))
    }
    function Ue(l) {
        return '[src="' + bt(l) + '"]'
    }
    function pu(l) {
        return "script[async]" + l
    }
    function dd(l, t, a) {
        if (t.count++,
        t.instance === null)
            switch (t.type) {
            case "style":
                var e = l.querySelector('style[data-href~="' + bt(a.href) + '"]');
                if (e)
                    return t.instance = e,
                    Zl(e),
                    e;
                var u = H({}, a, {
                    "data-href": a.href,
                    "data-precedence": a.precedence,
                    href: null,
                    precedence: null
                });
                return e = (l.ownerDocument || l).createElement("style"),
                Zl(e),
                $l(e, "style", u),
                qn(e, a.precedence, l),
                t.instance = e;
            case "stylesheet":
                u = De(a.href);
                var n = l.querySelector(zu(u));
                if (n)
                    return t.state.loading |= 4,
                    t.instance = n,
                    Zl(n),
                    n;
                e = od(a),
                (u = Mt.get(u)) && ff(e, u),
                n = (l.ownerDocument || l).createElement("link"),
                Zl(n);
                var i = n;
                return i._p = new Promise(function(c, s) {
                    i.onload = c,
                    i.onerror = s
                }
                ),
                $l(n, "link", e),
                t.state.loading |= 4,
                qn(n, a.precedence, l),
                t.instance = n;
            case "script":
                return n = Ue(a.src),
                (u = l.querySelector(pu(n))) ? (t.instance = u,
                Zl(u),
                u) : (e = a,
                (u = Mt.get(n)) && (e = H({}, a),
                sf(e, u)),
                l = l.ownerDocument || l,
                u = l.createElement("script"),
                Zl(u),
                $l(u, "link", e),
                l.head.appendChild(u),
                t.instance = u);
            case "void":
                return null;
            default:
                throw Error(f(443, t.type))
            }
        else
            t.type === "stylesheet" && (t.state.loading & 4) === 0 && (e = t.instance,
            t.state.loading |= 4,
            qn(e, a.precedence, l));
        return t.instance
    }
    function qn(l, t, a) {
        for (var e = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), u = e.length ? e[e.length - 1] : null, n = u, i = 0; i < e.length; i++) {
            var c = e[i];
            if (c.dataset.precedence === t)
                n = c;
            else if (n !== u)
                break
        }
        n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = a.nodeType === 9 ? a.head : a,
        t.insertBefore(l, t.firstChild))
    }
    function ff(l, t) {
        l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
        l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
        l.title == null && (l.title = t.title)
    }
    function sf(l, t) {
        l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
        l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
        l.integrity == null && (l.integrity = t.integrity)
    }
    var Gn = null;
    function md(l, t, a) {
        if (Gn === null) {
            var e = new Map
              , u = Gn = new Map;
            u.set(a, e)
        } else
            u = Gn,
            e = u.get(a),
            e || (e = new Map,
            u.set(a, e));
        if (e.has(l))
            return e;
        for (e.set(l, null),
        a = a.getElementsByTagName(l),
        u = 0; u < a.length; u++) {
            var n = a[u];
            if (!(n[qe] || n[Kl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
                var i = n.getAttribute(t) || "";
                i = l + i;
                var c = e.get(i);
                c ? c.push(n) : e.set(i, [n])
            }
        }
        return e
    }
    function rd(l, t, a) {
        l = l.ownerDocument || l,
        l.head.insertBefore(a, t === "title" ? l.querySelector("head > title") : null)
    }
    function er(l, t, a) {
        if (a === 1 || t.itemProp != null)
            return !1;
        switch (l) {
        case "meta":
        case "title":
            return !0;
        case "style":
            if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
                break;
            return !0;
        case "link":
            if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
                break;
            return t.rel === "stylesheet" ? (l = t.disabled,
            typeof t.precedence == "string" && l == null) : !0;
        case "script":
            if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
                return !0
        }
        return !1
    }
    function hd(l) {
        return !(l.type === "stylesheet" && (l.state.loading & 3) === 0)
    }
    function ur(l, t, a, e) {
        if (a.type === "stylesheet" && (typeof e.media != "string" || matchMedia(e.media).matches !== !1) && (a.state.loading & 4) === 0) {
            if (a.instance === null) {
                var u = De(e.href)
                  , n = t.querySelector(zu(u));
                if (n) {
                    t = n._p,
                    t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++,
                    l = Yn.bind(l),
                    t.then(l, l)),
                    a.state.loading |= 4,
                    a.instance = n,
                    Zl(n);
                    return
                }
                n = t.ownerDocument || t,
                e = od(e),
                (u = Mt.get(u)) && ff(e, u),
                n = n.createElement("link"),
                Zl(n);
                var i = n;
                i._p = new Promise(function(c, s) {
                    i.onload = c,
                    i.onerror = s
                }
                ),
                $l(n, "link", e),
                a.instance = n
            }
            l.stylesheets === null && (l.stylesheets = new Map),
            l.stylesheets.set(a, t),
            (t = a.state.preload) && (a.state.loading & 3) === 0 && (l.count++,
            a = Yn.bind(l),
            t.addEventListener("load", a),
            t.addEventListener("error", a))
        }
    }
    var of = 0;
    function nr(l, t) {
        return l.stylesheets && l.count === 0 && Qn(l, l.stylesheets),
        0 < l.count || 0 < l.imgCount ? function(a) {
            var e = setTimeout(function() {
                if (l.stylesheets && Qn(l, l.stylesheets),
                l.unsuspend) {
                    var n = l.unsuspend;
                    l.unsuspend = null,
                    n()
                }
            }, 6e4 + t);
            0 < l.imgBytes && of === 0 && (of = 62500 * Ym());
            var u = setTimeout(function() {
                if (l.waitingForImages = !1,
                l.count === 0 && (l.stylesheets && Qn(l, l.stylesheets),
                l.unsuspend)) {
                    var n = l.unsuspend;
                    l.unsuspend = null,
                    n()
                }
            }, (l.imgBytes > of ? 50 : 800) + t);
            return l.unsuspend = a,
            function() {
                l.unsuspend = null,
                clearTimeout(e),
                clearTimeout(u)
            }
        }
        : null
    }
    function Yn() {
        if (this.count--,
        this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
            if (this.stylesheets)
                Qn(this, this.stylesheets);
            else if (this.unsuspend) {
                var l = this.unsuspend;
                this.unsuspend = null,
                l()
            }
        }
    }
    var Xn = null;
    function Qn(l, t) {
        l.stylesheets = null,
        l.unsuspend !== null && (l.count++,
        Xn = new Map,
        t.forEach(ir, l),
        Xn = null,
        Yn.call(l))
    }
    function ir(l, t) {
        if (!(t.state.loading & 4)) {
            var a = Xn.get(l);
            if (a)
                var e = a.get(null);
            else {
                a = new Map,
                Xn.set(l, a);
                for (var u = l.querySelectorAll("link[data-precedence],style[data-precedence]"), n = 0; n < u.length; n++) {
                    var i = u[n];
                    (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (a.set(i.dataset.precedence, i),
                    e = i)
                }
                e && a.set(null, e)
            }
            u = t.instance,
            i = u.getAttribute("data-precedence"),
            n = a.get(i) || e,
            n === e && a.set(null, u),
            a.set(i, u),
            this.count++,
            e = Yn.bind(this),
            u.addEventListener("load", e),
            u.addEventListener("error", e),
            n ? n.parentNode.insertBefore(u, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l,
            l.insertBefore(u, l.firstChild)),
            t.state.loading |= 4
        }
    }
    var Eu = {
        $$typeof: sl,
        Provider: null,
        Consumer: null,
        _currentValue: Z,
        _currentValue2: Z,
        _threadCount: 0
    };
    function cr(l, t, a, e, u, n, i, c, s) {
        this.tag = 1,
        this.containerInfo = l,
        this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
        this.callbackPriority = 0,
        this.expirationTimes = ui(-1),
        this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = ui(0),
        this.hiddenUpdates = ui(null),
        this.identifierPrefix = e,
        this.onUncaughtError = u,
        this.onCaughtError = n,
        this.onRecoverableError = i,
        this.pooledCache = null,
        this.pooledCacheLanes = 0,
        this.formState = s,
        this.incompleteTransitions = new Map
    }
    function vd(l, t, a, e, u, n, i, c, s, y, p, M) {
        return l = new cr(l,t,a,i,s,y,p,M,c),
        t = 1,
        n === !0 && (t |= 24),
        n = dt(3, null, null, t),
        l.current = n,
        n.stateNode = l,
        t = Zi(),
        t.refCount++,
        l.pooledCache = t,
        t.refCount++,
        n.memoizedState = {
            element: e,
            isDehydrated: a,
            cache: t
        },
        Ji(n),
        l
    }
    function yd(l) {
        return l ? (l = ce,
        l) : ce
    }
    function gd(l, t, a, e, u, n) {
        u = yd(u),
        e.context === null ? e.context = u : e.pendingContext = u,
        e = sa(t),
        e.payload = {
            element: a
        },
        n = n === void 0 ? null : n,
        n !== null && (e.callback = n),
        a = oa(l, e, t),
        a !== null && (it(a, l, t),
        lu(a, l, t))
    }
    function bd(l, t) {
        if (l = l.memoizedState,
        l !== null && l.dehydrated !== null) {
            var a = l.retryLane;
            l.retryLane = a !== 0 && a < t ? a : t
        }
    }
    function df(l, t) {
        bd(l, t),
        (l = l.alternate) && bd(l, t)
    }
    function Sd(l) {
        if (l.tag === 13 || l.tag === 31) {
            var t = Ra(l, 67108864);
            t !== null && it(t, l, 67108864),
            df(l, 67108864)
        }
    }
    function zd(l) {
        if (l.tag === 13 || l.tag === 31) {
            var t = yt();
            t = ni(t);
            var a = Ra(l, t);
            a !== null && it(a, l, t),
            df(l, t)
        }
    }
    var Zn = !0;
    function fr(l, t, a, e) {
        var u = T.T;
        T.T = null;
        var n = N.p;
        try {
            N.p = 2,
            mf(l, t, a, e)
        } finally {
            N.p = n,
            T.T = u
        }
    }
    function sr(l, t, a, e) {
        var u = T.T;
        T.T = null;
        var n = N.p;
        try {
            N.p = 8,
            mf(l, t, a, e)
        } finally {
            N.p = n,
            T.T = u
        }
    }
    function mf(l, t, a, e) {
        if (Zn) {
            var u = rf(e);
            if (u === null)
                Fc(l, t, e, Ln, a),
                Ed(l, e);
            else if (dr(u, l, t, a, e))
                e.stopPropagation();
            else if (Ed(l, e),
            t & 4 && -1 < or.indexOf(l)) {
                for (; u !== null; ) {
                    var n = ka(u);
                    if (n !== null)
                        switch (n.tag) {
                        case 3:
                            if (n = n.stateNode,
                            n.current.memoizedState.isDehydrated) {
                                var i = Da(n.pendingLanes);
                                if (i !== 0) {
                                    var c = n;
                                    for (c.pendingLanes |= 2,
                                    c.entangledLanes |= 2; i; ) {
                                        var s = 1 << 31 - st(i);
                                        c.entanglements[1] |= s,
                                        i &= ~s
                                    }
                                    Ht(n),
                                    (ol & 6) === 0 && (_n = ct() + 500,
                                    yu(0))
                                }
                            }
                            break;
                        case 31:
                        case 13:
                            c = Ra(n, 2),
                            c !== null && it(c, n, 2),
                            xn(),
                            df(n, 2)
                        }
                    if (n = rf(e),
                    n === null && Fc(l, t, e, Ln, a),
                    n === u)
                        break;
                    u = n
                }
                u !== null && e.stopPropagation()
            } else
                Fc(l, t, e, null, a)
        }
    }
    function rf(l) {
        return l = hi(l),
        hf(l)
    }
    var Ln = null;
    function hf(l) {
        if (Ln = null,
        l = $a(l),
        l !== null) {
            var t = U(l);
            if (t === null)
                l = null;
            else {
                var a = t.tag;
                if (a === 13) {
                    if (l = X(t),
                    l !== null)
                        return l;
                    l = null
                } else if (a === 31) {
                    if (l = K(t),
                    l !== null)
                        return l;
                    l = null
                } else if (a === 3) {
                    if (t.stateNode.current.memoizedState.isDehydrated)
                        return t.tag === 3 ? t.stateNode.containerInfo : null;
                    l = null
                } else
                    t !== l && (l = null)
            }
        }
        return Ln = l,
        null
    }
    function pd(l) {
        switch (l) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 8;
        case "message":
            switch ($d()) {
            case Of:
                return 2;
            case Df:
                return 8;
            case Nu:
            case kd:
                return 32;
            case Uf:
                return 268435456;
            default:
                return 32
            }
        default:
            return 32
        }
    }
    var vf = !1
      , pa = null
      , Ea = null
      , Ta = null
      , Tu = new Map
      , Au = new Map
      , Aa = []
      , or = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function Ed(l, t) {
        switch (l) {
        case "focusin":
        case "focusout":
            pa = null;
            break;
        case "dragenter":
        case "dragleave":
            Ea = null;
            break;
        case "mouseover":
        case "mouseout":
            Ta = null;
            break;
        case "pointerover":
        case "pointerout":
            Tu.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Au.delete(t.pointerId)
        }
    }
    function _u(l, t, a, e, u, n) {
        return l === null || l.nativeEvent !== n ? (l = {
            blockedOn: t,
            domEventName: a,
            eventSystemFlags: e,
            nativeEvent: n,
            targetContainers: [u]
        },
        t !== null && (t = ka(t),
        t !== null && Sd(t)),
        l) : (l.eventSystemFlags |= e,
        t = l.targetContainers,
        u !== null && t.indexOf(u) === -1 && t.push(u),
        l)
    }
    function dr(l, t, a, e, u) {
        switch (t) {
        case "focusin":
            return pa = _u(pa, l, t, a, e, u),
            !0;
        case "dragenter":
            return Ea = _u(Ea, l, t, a, e, u),
            !0;
        case "mouseover":
            return Ta = _u(Ta, l, t, a, e, u),
            !0;
        case "pointerover":
            var n = u.pointerId;
            return Tu.set(n, _u(Tu.get(n) || null, l, t, a, e, u)),
            !0;
        case "gotpointercapture":
            return n = u.pointerId,
            Au.set(n, _u(Au.get(n) || null, l, t, a, e, u)),
            !0
        }
        return !1
    }
    function Td(l) {
        var t = $a(l.target);
        if (t !== null) {
            var a = U(t);
            if (a !== null) {
                if (t = a.tag,
                t === 13) {
                    if (t = X(a),
                    t !== null) {
                        l.blockedOn = t,
                        Bf(l.priority, function() {
                            zd(a)
                        });
                        return
                    }
                } else if (t === 31) {
                    if (t = K(a),
                    t !== null) {
                        l.blockedOn = t,
                        Bf(l.priority, function() {
                            zd(a)
                        });
                        return
                    }
                } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
                    l.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
                    return
                }
            }
        }
        l.blockedOn = null
    }
    function Vn(l) {
        if (l.blockedOn !== null)
            return !1;
        for (var t = l.targetContainers; 0 < t.length; ) {
            var a = rf(l.nativeEvent);
            if (a === null) {
                a = l.nativeEvent;
                var e = new a.constructor(a.type,a);
                ri = e,
                a.target.dispatchEvent(e),
                ri = null
            } else
                return t = ka(a),
                t !== null && Sd(t),
                l.blockedOn = a,
                !1;
            t.shift()
        }
        return !0
    }
    function Ad(l, t, a) {
        Vn(l) && a.delete(t)
    }
    function mr() {
        vf = !1,
        pa !== null && Vn(pa) && (pa = null),
        Ea !== null && Vn(Ea) && (Ea = null),
        Ta !== null && Vn(Ta) && (Ta = null),
        Tu.forEach(Ad),
        Au.forEach(Ad)
    }
    function Kn(l, t) {
        l.blockedOn === t && (l.blockedOn = null,
        vf || (vf = !0,
        r.unstable_scheduleCallback(r.unstable_NormalPriority, mr)))
    }
    var Jn = null;
    function _d(l) {
        Jn !== l && (Jn = l,
        r.unstable_scheduleCallback(r.unstable_NormalPriority, function() {
            Jn === l && (Jn = null);
            for (var t = 0; t < l.length; t += 3) {
                var a = l[t]
                  , e = l[t + 1]
                  , u = l[t + 2];
                if (typeof e != "function") {
                    if (hf(e || a) === null)
                        continue;
                    break
                }
                var n = ka(a);
                n !== null && (l.splice(t, 3),
                t -= 3,
                mc(n, {
                    pending: !0,
                    data: u,
                    method: a.method,
                    action: e
                }, e, u))
            }
        }))
    }
    function Ne(l) {
        function t(s) {
            return Kn(s, l)
        }
        pa !== null && Kn(pa, l),
        Ea !== null && Kn(Ea, l),
        Ta !== null && Kn(Ta, l),
        Tu.forEach(t),
        Au.forEach(t);
        for (var a = 0; a < Aa.length; a++) {
            var e = Aa[a];
            e.blockedOn === l && (e.blockedOn = null)
        }
        for (; 0 < Aa.length && (a = Aa[0],
        a.blockedOn === null); )
            Td(a),
            a.blockedOn === null && Aa.shift();
        if (a = (l.ownerDocument || l).$$reactFormReplay,
        a != null)
            for (e = 0; e < a.length; e += 3) {
                var u = a[e]
                  , n = a[e + 1]
                  , i = u[lt] || null;
                if (typeof n == "function")
                    i || _d(a);
                else if (i) {
                    var c = null;
                    if (n && n.hasAttribute("formAction")) {
                        if (u = n,
                        i = n[lt] || null)
                            c = i.formAction;
                        else if (hf(u) !== null)
                            continue
                    } else
                        c = i.action;
                    typeof c == "function" ? a[e + 1] = c : (a.splice(e, 3),
                    e -= 3),
                    _d(a)
                }
            }
    }
    function Md() {
        function l(n) {
            n.canIntercept && n.info === "react-transition" && n.intercept({
                handler: function() {
                    return new Promise(function(i) {
                        return u = i
                    }
                    )
                },
                focusReset: "manual",
                scroll: "manual"
            })
        }
        function t() {
            u !== null && (u(),
            u = null),
            e || setTimeout(a, 20)
        }
        function a() {
            if (!e && !navigation.transition) {
                var n = navigation.currentEntry;
                n && n.url != null && navigation.navigate(n.url, {
                    state: n.getState(),
                    info: "react-transition",
                    history: "replace"
                })
            }
        }
        if (typeof navigation == "object") {
            var e = !1
              , u = null;
            return navigation.addEventListener("navigate", l),
            navigation.addEventListener("navigatesuccess", t),
            navigation.addEventListener("navigateerror", t),
            setTimeout(a, 100),
            function() {
                e = !0,
                navigation.removeEventListener("navigate", l),
                navigation.removeEventListener("navigatesuccess", t),
                navigation.removeEventListener("navigateerror", t),
                u !== null && (u(),
                u = null)
            }
        }
    }
    function yf(l) {
        this._internalRoot = l
    }
    wn.prototype.render = yf.prototype.render = function(l) {
        var t = this._internalRoot;
        if (t === null)
            throw Error(f(409));
        var a = t.current
          , e = yt();
        gd(a, e, l, t, null, null)
    }
    ,
    wn.prototype.unmount = yf.prototype.unmount = function() {
        var l = this._internalRoot;
        if (l !== null) {
            this._internalRoot = null;
            var t = l.containerInfo;
            gd(l.current, 2, null, l, null, null),
            xn(),
            t[Wa] = null
        }
    }
    ;
    function wn(l) {
        this._internalRoot = l
    }
    wn.prototype.unstable_scheduleHydration = function(l) {
        if (l) {
            var t = Hf();
            l = {
                blockedOn: null,
                target: l,
                priority: t
            };
            for (var a = 0; a < Aa.length && t !== 0 && t < Aa[a].priority; a++)
                ;
            Aa.splice(a, 0, l),
            a === 0 && Td(l)
        }
    }
    ;
    var xd = h.version;
    if (xd !== "19.2.8")
        throw Error(f(527, xd, "19.2.8"));
    N.findDOMNode = function(l) {
        var t = l._reactInternals;
        if (t === void 0)
            throw typeof l.render == "function" ? Error(f(188)) : (l = Object.keys(l).join(","),
            Error(f(268, l)));
        return l = z(t),
        l = l !== null ? q(l) : null,
        l = l === null ? null : l.stateNode,
        l
    }
    ;
    var rr = {
        bundleType: 0,
        version: "19.2.8",
        rendererPackageName: "react-dom",
        currentDispatcherRef: T,
        reconcilerVersion: "19.2.8"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Wn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Wn.isDisabled && Wn.supportsFiber)
            try {
                Re = Wn.inject(rr),
                ft = Wn
            } catch {}
    }
    return xu.createRoot = function(l, t) {
        if (!O(l))
            throw Error(f(299));
        var a = !1
          , e = ""
          , u = Ro
          , n = Ho
          , i = Bo;
        return t != null && (t.unstable_strictMode === !0 && (a = !0),
        t.identifierPrefix !== void 0 && (e = t.identifierPrefix),
        t.onUncaughtError !== void 0 && (u = t.onUncaughtError),
        t.onCaughtError !== void 0 && (n = t.onCaughtError),
        t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        t = vd(l, 1, !1, null, null, a, e, null, u, n, i, Md),
        l[Wa] = t.current,
        kc(l),
        new yf(t)
    }
    ,
    xu.hydrateRoot = function(l, t, a) {
        if (!O(l))
            throw Error(f(299));
        var e = !1
          , u = ""
          , n = Ro
          , i = Ho
          , c = Bo
          , s = null;
        return a != null && (a.unstable_strictMode === !0 && (e = !0),
        a.identifierPrefix !== void 0 && (u = a.identifierPrefix),
        a.onUncaughtError !== void 0 && (n = a.onUncaughtError),
        a.onCaughtError !== void 0 && (i = a.onCaughtError),
        a.onRecoverableError !== void 0 && (c = a.onRecoverableError),
        a.formState !== void 0 && (s = a.formState)),
        t = vd(l, 1, !0, t, a ?? null, e, u, s, n, i, c, Md),
        t.context = yd(null),
        a = t.current,
        e = yt(),
        e = ni(e),
        u = sa(e),
        u.callback = null,
        oa(a, u, e),
        a = e,
        t.current.lanes = a,
        Be(t, a),
        Ht(t),
        l[Wa] = t.current,
        kc(l),
        new wn(t)
    }
    ,
    xu.version = "19.2.8",
    xu
}
var qd;
function Tr() {
    if (qd)
        return Sf.exports;
    qd = 1;
    function r() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)
            } catch (h) {
                console.error(h)
            }
    }
    return r(),
    Sf.exports = Er(),
    Sf.exports
}
var Ar = Tr();
const Ce = 12
  , _r = `#version 300 es
void main() {
  vec2 p = vec2((gl_VertexID == 1) ? 3.0 : -1.0, (gl_VertexID == 2) ? 3.0 : -1.0);
  gl_Position = vec4(p, 0.0, 1.0);
}`
  , Mr = `#version 300 es
precision highp float;
#define MAXP ${Ce}
out vec4 fragColor;

uniform vec2 uRes;
uniform int uCount;
uniform vec2 uPos[MAXP];
uniform vec3 uCol[MAXP];
uniform vec2 uSize[MAXP];
uniform vec3 uBg;
uniform float uBgWeight;
uniform int uBlendMode;
uniform int uSpace;
uniform float uIdwPower;

uniform float uWarpAmt;
uniform float uWarpScale;
uniform int uWarpOct;
uniform float uWarpSeed;

uniform int uGrainOn;
uniform float uGrainInt;
uniform float uGrainSize;
uniform int uGrainColored;
uniform int uGrainBlend;
uniform float uGrainSeed;
uniform float uGrainScale;

uniform float uBright;
uniform float uContrast;
uniform float uSat;
uniform float uHue;
uniform float uVig;
uniform float uVigSoft;

vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }
float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod289(i);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
  m = m * m; m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}
float fbm(vec2 p, int oct) {
  float a = 0.5, n = 0.0, s = 0.0;
  for (int i = 0; i < 8; i++) {
    if (i >= oct) break;
    s += a * snoise(p);
    n += a;
    p = p * 2.03 + vec2(13.7, 7.1);
    a *= 0.5;
  }
  return s / max(n, 1e-5);
}

vec3 srgb2lin(vec3 c) { return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(0.04045, c)); }
vec3 lin2srgb(vec3 c) {
  c = clamp(c, 0.0, 1.0);
  return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c));
}
vec3 lin2oklab(vec3 c) {
  float l = 0.4122214708 * c.r + 0.5363325363 * c.g + 0.0514459929 * c.b;
  float m = 0.2119034982 * c.r + 0.6806995451 * c.g + 0.1073969566 * c.b;
  float s = 0.0883024619 * c.r + 0.2817188376 * c.g + 0.6299787005 * c.b;
  l = pow(max(l, 0.0), 1.0 / 3.0); m = pow(max(m, 0.0), 1.0 / 3.0); s = pow(max(s, 0.0), 1.0 / 3.0);
  return vec3(
    0.2104542553 * l + 0.7936177850 * m - 0.0040720468 * s,
    1.9779984951 * l - 2.4285922050 * m + 0.4505937099 * s,
    0.0259040371 * l + 0.7827717662 * m - 0.8086757660 * s);
}
vec3 oklab2lin(vec3 c) {
  float l_ = c.x + 0.3963377774 * c.y + 0.2158037573 * c.z;
  float m_ = c.x - 0.1055613458 * c.y - 0.0638541728 * c.z;
  float s_ = c.x - 0.0894841775 * c.y - 1.2914855480 * c.z;
  float l = l_ * l_ * l_, m = m_ * m_ * m_, s = s_ * s_ * s_;
  return vec3(
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s);
}
vec3 toSpace(vec3 c) {
  if (uSpace == 0) return c;
  vec3 l = srgb2lin(c);
  if (uSpace == 1) return l;
  return lin2oklab(l);
}
vec3 fromSpace(vec3 c) {
  if (uSpace == 0) return c;
  if (uSpace == 1) return lin2srgb(c);
  return lin2srgb(oklab2lin(c));
}

float hash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
float tri(vec2 p) {
  return hash12(p) + hash12(p + vec2(71.3, 19.7)) - 1.0;
}
vec3 hueRotate(vec3 c, float a) {
  const vec3 k = vec3(0.57735);
  float cs = cos(a), sn = sin(a);
  return c * cs + cross(k, c) * sn + k * dot(k, c) * (1.0 - cs);
}
vec3 blendGrain(vec3 base, vec3 g) {
  if (uGrainBlend == 0) return base + g;
  vec3 gray = clamp(0.5 + g, 0.0, 1.0);
  if (uGrainBlend == 1) {
    vec3 lo = 2.0 * base * gray;
    vec3 hi = 1.0 - 2.0 * (1.0 - base) * (1.0 - gray);
    return mix(lo, hi, step(0.5, base));
  }
  vec3 d = mix(sqrt(base), ((16.0 * base - 12.0) * base + 4.0) * base, step(base, vec3(0.25)));
  vec3 lo = base - (1.0 - 2.0 * gray) * base * (1.0 - base);
  vec3 hi = base + (2.0 * gray - 1.0) * (d - base);
  return mix(lo, hi, step(0.5, gray));
}

void main() {
  vec2 uv = gl_FragCoord.xy / uRes;
  uv.y = 1.0 - uv.y;
  float aspect = uRes.x / uRes.y;

  vec2 p = uv;
  if (uWarpAmt > 0.0) {
    vec2 q = vec2(uv.x * aspect, uv.y) * uWarpScale + uWarpSeed;
    vec2 w = vec2(fbm(q, uWarpOct), fbm(q + vec2(31.4, 17.2), uWarpOct));
    p += w * uWarpAmt;
  }

  float logits[MAXP];
  float m = -1e30;
  for (int i = 0; i < MAXP; i++) {
    if (i >= uCount) break;
    float dx = (p.x - uPos[i].x) * aspect / max(uSize[i].x, 1e-4);
    float dy = (p.y - uPos[i].y) / max(uSize[i].y, 1e-4);
    float d2 = dx * dx + dy * dy;
    float l = (uBlendMode == 0) ? -0.5 * d2 : -0.5 * uIdwPower * log(d2 + 1e-5);
    logits[i] = l;
    m = max(m, l);
  }
  float lbg = (uBgWeight > 0.0) ? log(uBgWeight) : -1e30;
  m = max(m, lbg);
  float wbg = (uBgWeight > 0.0) ? exp(lbg - m) : 0.0;
  vec3 acc = wbg * toSpace(uBg);
  float ws = wbg;
  for (int i = 0; i < MAXP; i++) {
    if (i >= uCount) break;
    float w = exp(logits[i] - m);
    acc += w * toSpace(uCol[i]);
    ws += w;
  }
  vec3 col = (ws > 0.0) ? fromSpace(acc / ws) : uBg;

  col = (col - 0.5) * uContrast + 0.5 + uBright;
  float luma = dot(col, vec3(0.2126, 0.7152, 0.0722));
  col = mix(vec3(luma), col, uSat);
  if (abs(uHue) > 0.0001) col = hueRotate(col, uHue);
  if (uVig > 0.0) {
    vec2 c = (uv - 0.5) * vec2(aspect, 1.0);
    float d = length(c) / length(vec2(aspect, 1.0) * 0.5);
    float v = smoothstep(1.0 - uVigSoft, 1.0 + 0.001, d);
    col *= 1.0 - uVig * v;
  }

  if (uGrainOn == 1 && uGrainInt > 0.0) {
    float cell = max(uGrainSize * uGrainScale, 1e-3);
    vec2 gc = floor(gl_FragCoord.xy / cell) + uGrainSeed;
    vec3 g;
    if (uGrainColored == 1) {
      g = vec3(tri(gc), tri(gc + vec2(101.1, 3.3)), tri(gc + vec2(7.7, 211.9)));
    } else {
      g = vec3(tri(gc));
    }
    col = blendGrain(col, g * uGrainInt);
  }

  fragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}`;
function Gd(r) {
    const h = r.replace("#", "")
      , E = h.length === 3 ? h.split("").map(O => O + O).join("") : h
      , f = parseInt(E, 16);
    return Number.isNaN(f) ? [0, 0, 0] : [(f >> 16 & 255) / 255, (f >> 8 & 255) / 255, (f & 255) / 255]
}
function xr(r, h, E) {
    const f = O => Math.round(Math.min(1, Math.max(0, O)) * 255).toString(16).padStart(2, "0");
    return `#${f(r)}${f(h)}${f(E)}`
}
function Or(r, h, E) {
    const f = (r % 360 + 360) % 360
      , O = (1 - Math.abs(2 * E - 1)) * h
      , U = O * (1 - Math.abs(f / 60 % 2 - 1))
      , X = E - O / 2;
    let K = 0
      , D = 0
      , z = 0;
    return f < 60 ? [K,D,z] = [O, U, 0] : f < 120 ? [K,D,z] = [U, O, 0] : f < 180 ? [K,D,z] = [0, O, U] : f < 240 ? [K,D,z] = [0, U, O] : f < 300 ? [K,D,z] = [U, 0, O] : [K,D,z] = [O, 0, U],
    xr(K + X, D + X, z + X)
}
function Du() {
    return Math.random().toString(36).slice(2, 9)
}
function wa(r, h, E) {
    return Math.min(E, Math.max(h, r))
}
function Xl(r, h) {
    return r + Math.random() * (h - r)
}
function Tf(r) {
    return r[Math.floor(Math.random() * r.length)]
}
const Dr = {
    gaussian: 0,
    idw: 1
}
  , Ur = {
    srgb: 0,
    linear: 1,
    oklab: 2
}
  , Nr = {
    add: 0,
    overlay: 1,
    softlight: 2
};
function Yd(r, h, E) {
    const f = r.createShader(h);
    if (r.shaderSource(f, E),
    r.compileShader(f),
    !r.getShaderParameter(f, r.COMPILE_STATUS)) {
        const O = r.getShaderInfoLog(f);
        throw r.deleteShader(f),
        new Error(`Shader error: ${O}`)
    }
    return f
}
class Ld {
    constructor(h) {
        this.canvas = h;
        const E = h.getContext("webgl2", {
            preserveDrawingBuffer: !0,
            antialias: !1,
            premultipliedAlpha: !1,
            alpha: !1
        });
        if (!E)
            throw new Error("WebGL2 is not available in this browser.");
        this.gl = E;
        const f = E.createProgram();
        if (E.attachShader(f, Yd(E, E.VERTEX_SHADER, _r)),
        E.attachShader(f, Yd(E, E.FRAGMENT_SHADER, Mr)),
        E.linkProgram(f),
        !E.getProgramParameter(f, E.LINK_STATUS))
            throw new Error(`Program link error: ${E.getProgramInfoLog(f)}`);
        this.prog = f,
        E.useProgram(f),
        E.bindVertexArray(E.createVertexArray())
    }
    canvas;
    gl;
    prog;
    loc = new Map;
    pos = new Float32Array(Ce * 2);
    col = new Float32Array(Ce * 3);
    size = new Float32Array(Ce * 2);
    u(h) {
        return this.loc.has(h) || this.loc.set(h, this.gl.getUniformLocation(this.prog, h)),
        this.loc.get(h)
    }
    render(h, E, f, O=0) {
        const {gl: U, canvas: X} = this;
        (X.width !== E || X.height !== f) && (X.width = E,
        X.height = f),
        U.viewport(0, 0, E, f),
        U.useProgram(this.prog);
        const K = Math.min(h.points.length, Ce);
        for (let q = 0; q < K; q++) {
            const H = h.points[q];
            this.pos[q * 2] = H.x,
            this.pos[q * 2 + 1] = H.y;
            const [S,k,G] = Gd(H.color);
            this.col[q * 3] = S,
            this.col[q * 3 + 1] = k,
            this.col[q * 3 + 2] = G;
            const F = H.size * h.softness;
            this.size[q * 2] = F * H.stretch,
            this.size[q * 2 + 1] = F
        }
        U.uniform2f(this.u("uRes"), E, f),
        U.uniform1i(this.u("uCount"), K),
        U.uniform2fv(this.u("uPos[0]"), this.pos),
        U.uniform3fv(this.u("uCol[0]"), this.col),
        U.uniform2fv(this.u("uSize[0]"), this.size),
        U.uniform3fv(this.u("uBg"), Gd(h.background)),
        U.uniform1f(this.u("uBgWeight"), h.backgroundWeight),
        U.uniform1i(this.u("uBlendMode"), Dr[h.blendMode]),
        U.uniform1i(this.u("uSpace"), Ur[h.colorSpace]),
        U.uniform1f(this.u("uIdwPower"), h.idwPower),
        U.uniform1f(this.u("uWarpAmt"), h.warp.amount),
        U.uniform1f(this.u("uWarpScale"), h.warp.scale),
        U.uniform1i(this.u("uWarpOct"), h.warp.octaves),
        U.uniform1f(this.u("uWarpSeed"), h.warp.seed);
        const D = h.grain;
        U.uniform1i(this.u("uGrainOn"), D.enabled ? 1 : 0),
        U.uniform1f(this.u("uGrainInt"), D.intensity),
        U.uniform1f(this.u("uGrainSize"), D.size),
        U.uniform1i(this.u("uGrainColored"), D.colored ? 1 : 0),
        U.uniform1i(this.u("uGrainBlend"), Nr[D.blend]),
        U.uniform1f(this.u("uGrainSeed"), D.seed + (D.animated ? Math.floor(O * 24) * 37.1 : 0)),
        U.uniform1f(this.u("uGrainScale"), f / h.height);
        const z = h.post;
        U.uniform1f(this.u("uBright"), z.brightness),
        U.uniform1f(this.u("uContrast"), z.contrast),
        U.uniform1f(this.u("uSat"), z.saturation),
        U.uniform1f(this.u("uHue"), z.hue * Math.PI / 180),
        U.uniform1f(this.u("uVig"), z.vignette),
        U.uniform1f(this.u("uVigSoft"), z.vignetteSoftness),
        U.drawArrays(U.TRIANGLES, 0, 3)
    }
    dispose() {
        this.gl.getExtension("WEBGL_lose_context")?.loseContext()
    }
}
function Cr({params: r, selected: h, showHandles: E, onSelect: f, onMovePoint: O, onAddPoint: U}) {
    const X = dl.useRef(null)
      , K = dl.useRef(null)
      , D = dl.useRef(null)
      , z = dl.useRef(r);
    z.current = r;
    const [q,H] = dl.useState({
        w: 0,
        h: 0
    })
      , [S,k] = dl.useState(null);
    dl.useEffect( () => {
        const L = X.current;
        if (!L)
            return;
        const al = new ResizeObserver( () => {
            const pl = L.clientWidth - 32
              , sl = L.clientHeight - 32
              , xl = r.width / r.height;
            let Vl = pl
              , Ol = Vl / xl;
            Ol > sl && (Ol = sl,
            Vl = Ol * xl),
            H({
                w: Math.max(1, Math.floor(Vl)),
                h: Math.max(1, Math.floor(Ol))
            })
        }
        );
        return al.observe(L),
        () => al.disconnect()
    }
    , [r.width, r.height]),
    dl.useEffect( () => {
        const L = K.current;
        if (L && D.current?.canvas !== L)
            try {
                D.current = new Ld(L),
                k(null)
            } catch (al) {
                k(al.message)
            }
    }
    , []),
    dl.useEffect( () => {
        const L = D.current;
        if (!L || q.w === 0)
            return;
        const al = Math.min(window.devicePixelRatio || 1, 2);
        let pl = 0;
        const sl = () => {
            const xl = z.current;
            L.render(xl, Math.round(q.w * al), Math.round(q.h * al), performance.now() / 1e3),
            xl.grain.enabled && xl.grain.animated && (pl = requestAnimationFrame(sl))
        }
        ;
        return pl = requestAnimationFrame(sl),
        () => cancelAnimationFrame(pl)
    }
    , [r, q]);
    const G = dl.useRef(null)
      , F = L => {
        const al = K.current.getBoundingClientRect();
        return {
            x: (L.clientX - al.left) / al.width,
            y: (L.clientY - al.top) / al.height
        }
    }
    ;
    return A.jsx("div", {
        className: "preview",
        ref: X,
        children: A.jsxs("div", {
            className: "stage",
            style: {
                width: q.w,
                height: q.h
            },
            onDoubleClick: L => {
                const al = K.current.getBoundingClientRect();
                U((L.clientX - al.left) / al.width, (L.clientY - al.top) / al.height)
            }
            ,
            onPointerDown: L => {
                L.target === K.current && f(null)
            }
            ,
            children: [A.jsx("canvas", {
                ref: K,
                style: {
                    width: q.w,
                    height: q.h
                }
            }), S && A.jsx("div", {
                className: "error",
                children: S
            }), E && r.points.map( (L, al) => A.jsx("div", {
                className: `handle ${h === L.id ? "sel" : ""}`,
                style: {
                    left: `${wa(L.x, 0, 1) * 100}%`,
                    top: `${wa(L.y, 0, 1) * 100}%`,
                    background: L.color
                },
                title: `Point ${al + 1}`,
                onPointerDown: pl => {
                    pl.stopPropagation(),
                    pl.target.setPointerCapture(pl.pointerId);
                    const sl = F(pl);
                    G.current = {
                        id: L.id,
                        ox: L.x - sl.x,
                        oy: L.y - sl.y
                    },
                    f(L.id)
                }
                ,
                onPointerMove: pl => {
                    if (!G.current || G.current.id !== L.id)
                        return;
                    const sl = F(pl);
                    O(L.id, wa(sl.x + G.current.ox, -.2, 1.2), wa(sl.y + G.current.oy, -.2, 1.2))
                }
                ,
                onPointerUp: () => {
                    G.current = null
                }
                ,
                onDoubleClick: pl => pl.stopPropagation(),
                children: A.jsx("span", {
                    children: al + 1
                })
            }, L.id))]
        })
    })
}
function $(r, h, E, f, O=1) {
    return {
        id: Du(),
        x: r,
        y: h,
        color: E,
        size: f,
        stretch: O
    }
}
const xt = {
    width: 1600,
    height: 900,
    backgroundWeight: .002,
    blendMode: "gaussian",
    colorSpace: "oklab",
    softness: 1,
    idwPower: 2.5,
    warp: {
        amount: .12,
        scale: 1.2,
        octaves: 3,
        seed: 7
    },
    grain: {
        enabled: !0,
        intensity: .08,
        size: 1,
        colored: !1,
        blend: "add",
        animated: !1,
        seed: 1
    },
    post: {
        brightness: 0,
        contrast: 1,
        saturation: 1,
        hue: 0,
        vignette: 0,
        vignetteSoftness: .6
    }
}
  , kn = [{
    name: "Sunset",
    build: () => ({
        ...xt,
        background: "#c9a86a",
        points: [$(.5, -.05, "#f7dab8", .45, 3), $(.15, .2, "#f2d3c6", .3, 2), $(.65, .25, "#d9b9a9", .25, 1.6), $(.5, .5, "#a89686", .18, 4), $(.2, .8, "#b8852b", .3, 2.5), $(.75, .85, "#7d5b1f", .28, 2.2), $(.5, 1.1, "#6b4d19", .25, 4)]
    })
}, {
    name: "Meadow",
    build: () => ({
        ...xt,
        background: "#9aa25a",
        points: [$(.45, -.05, "#7fb3d9", .3, 2), $(.05, .1, "#e9e8df", .22, 1), $(.95, .15, "#dcdcd4", .22, 1), $(.1, .4, "#4a5a45", .2, 1.2), $(.92, .45, "#3f4f3e", .2, 1.2), $(.6, .3, "#e8dca0", .25, 1.4), $(.5, .7, "#c1b535", .22, 3), $(.5, 1.05, "#6e7a28", .25, 4)]
    })
}, {
    name: "Lavender",
    build: () => ({
        ...xt,
        background: "#7f82b8",
        points: [$(.5, -.1, "#b6d8f6", .4, 4), $(.5, .3, "#cfe0f5", .14, 5), $(.5, .6, "#7f82b8", .2, 5), $(.65, .85, "#5c6394", .25, 3), $(.05, 1, "#3e4f5e", .22, 1.5)]
    })
}, {
    name: "Clouds",
    build: () => ({
        ...xt,
        background: "#7aaad1",
        points: [$(.1, .1, "#7aaad1", .35, 1.5), $(.95, .2, "#7aaad1", .3, 1.2), $(.62, .2, "#eeede7", .2, 1.1), $(.7, .55, "#e4e6e3", .22, 1.3), $(.05, .85, "#dcdedd", .2, 1.8), $(.45, .85, "#c4cbd4", .22, 2), $(.9, .95, "#b9c4cc", .15, 1.5)]
    })
}, {
    name: "Aurora",
    build: () => ({
        ...xt,
        background: "#0f1a2e",
        colorSpace: "oklab",
        warp: {
            amount: .3,
            scale: 1.5,
            octaves: 4,
            seed: 21
        },
        points: [$(.2, .15, "#0b1c33", .3, 2), $(.6, .3, "#22c4a8", .18, 2.5), $(.85, .5, "#7b4fd6", .22, 1.5), $(.3, .6, "#3ba7d9", .2, 2), $(.5, .95, "#0a0f1c", .3, 4)]
    })
}, {
    name: "Peach",
    build: () => ({
        ...xt,
        background: "#f4c8b0",
        points: [$(.2, .2, "#ffe1c7", .35, 1.5), $(.8, .15, "#ffc3a0", .3, 1.2), $(.7, .7, "#f28f7c", .25, 1.4), $(.15, .85, "#e5b0d6", .28, 1.6), $(.5, .5, "#fbd4c4", .2, 2)]
    })
}, {
    name: "Mist",
    build: () => ({
        ...xt,
        background: "#c8ccd0",
        grain: {
            ...xt.grain,
            intensity: .12
        },
        points: [$(.5, .1, "#eef0f2", .3, 4), $(.3, .45, "#b5bcc4", .2, 2), $(.75, .55, "#9aa3ad", .22, 1.8), $(.5, .95, "#5f6a75", .25, 4)]
    })
}]
  , jr = [["#f7dab8", "#f2d3c6", "#a89686", "#b8852b", "#7d5b1f"], ["#7fb3d9", "#e9e8df", "#4a5a45", "#e8dca0", "#c1b535", "#6e7a28"], ["#b6d8f6", "#cfe0f5", "#7f82b8", "#5c6394", "#3e4f5e"], ["#7aaad1", "#eeede7", "#c4cbd4", "#b9c4cc"], ["#ffe1c7", "#ffc3a0", "#f28f7c", "#e5b0d6"], ["#0b1c33", "#22c4a8", "#7b4fd6", "#3ba7d9"], ["#f6e7d8", "#e6b8a2", "#c97c5d", "#7a4b3a", "#3e2b24"], ["#dfe9f3", "#a9c4de", "#5f89b4", "#2f4f73", "#1b2b40"], ["#fff4d6", "#f9d976", "#f39c6b", "#c84b6b", "#5b2a5c"], ["#e8f1e4", "#b7d4b0", "#6f9d75", "#3f6b4f", "#22402e"], ["#f1e4f3", "#d3b7e0", "#9b7bc6", "#5d4a94", "#2c2650"], ["#fbe9e7", "#f6c5c0", "#e58f8f", "#a65a6b", "#4d2d3f"]];
function Rr(r) {
    const h = Xl(0, 360)
      , E = Tf(["analogous", "complementary", "mono", "triad"])
      , f = [];
    for (let O = 0; O < r; O++) {
        let U = h;
        E === "analogous" ? U = h + Xl(-40, 40) : E === "complementary" ? U = h + (Math.random() < .5 ? 0 : 180) + Xl(-20, 20) : E === "triad" && (U = h + Tf([0, 120, 240]) + Xl(-15, 15));
        const X = wa(.25 + O / Math.max(1, r - 1) * .6 + Xl(-.08, .08), .1, .95)
          , K = wa(Xl(.25, .7) * (E === "mono" ? .6 : 1), .05, .9);
        f.push(Or(U, K, X))
    }
    return f.sort( () => Math.random() - .5)
}
function Fn(r) {
    if (Math.random() < .55) {
        const h = Tf(jr)
          , E = [];
        for (let f = 0; f < r; f++)
            E.push(h[f % h.length]);
        return E
    }
    return Rr(r)
}
function Vd(r) {
    const h = Math.random() < .5
      , E = [];
    for (let f = 0; f < r; f++)
        if (h) {
            const O = (f + Xl(.1, .9)) / r;
            E.push({
                x: Xl(.05, .95),
                y: wa(O * 1.2 - .1, -.1, 1.1),
                size: Xl(.18, .35),
                stretch: Xl(1.5, 4.5)
            })
        } else
            E.push({
                x: Xl(-.05, 1.05),
                y: Xl(-.05, 1.05),
                size: Xl(.18, .4),
                stretch: Xl(.8, 2.2)
            });
    return E
}
function Hr(r) {
    const h = Fn(r.points.length);
    return {
        ...r,
        background: h[Math.floor(h.length / 2)],
        points: r.points.map( (E, f) => ({
            ...E,
            color: h[f]
        }))
    }
}
function Br(r) {
    const h = Vd(r.points.length);
    return {
        ...r,
        points: r.points.map( (E, f) => ({
            ...E,
            ...h[f]
        })),
        warp: {
            ...r.warp,
            seed: Math.floor(Xl(0, 1e3))
        }
    }
}
function qr(r) {
    const h = Math.floor(Xl(4, 8))
      , E = Fn(h)
      , f = Vd(h);
    return {
        ...r,
        background: E[Math.floor(E.length / 2)],
        points: f.map( (O, U) => ({
            id: Du(),
            color: E[U],
            ...O
        })),
        warp: {
            ...r.warp,
            amount: Xl(0, .3),
            scale: Xl(.6, 2.2),
            seed: Math.floor(Xl(0, 1e3))
        },
        softness: Xl(.8, 1.4)
    }
}
function Ma({title: r, children: h, defaultOpen: E=!0}) {
    const [f,O] = dl.useState(E);
    return A.jsxs("section", {
        className: `section ${f ? "open" : ""}`,
        children: [A.jsxs("button", {
            type: "button",
            className: "section-title",
            onClick: () => O(!f),
            children: [A.jsx("span", {
                children: r
            }), A.jsx("span", {
                className: "chev",
                children: f ? "−" : "+"
            })]
        }), f && A.jsx("div", {
            className: "section-body",
            children: h
        })]
    })
}
function Rl({label: r, value: h, min: E, max: f, step: O=.01, onChange: U, format: X}) {
    const K = X ? X(h) : Number.isInteger(O) ? String(h) : h.toFixed(2);
    return A.jsxs("label", {
        className: "ctl slider",
        children: [A.jsxs("div", {
            className: "ctl-row",
            children: [A.jsx("span", {
                children: r
            }), A.jsx("input", {
                className: "num",
                type: "number",
                value: Number(K),
                min: E,
                max: f,
                step: O,
                onChange: D => U(Number(D.target.value))
            })]
        }), A.jsx("input", {
            type: "range",
            min: E,
            max: f,
            step: O,
            value: h,
            onChange: D => U(Number(D.target.value))
        })]
    })
}
function Ou({label: r, value: h, options: E, onChange: f}) {
    return A.jsxs("label", {
        className: "ctl row",
        children: [A.jsx("span", {
            children: r
        }), A.jsx("select", {
            value: h,
            onChange: O => f(O.target.value),
            children: E.map(O => A.jsx("option", {
                value: O.value,
                children: O.label
            }, O.value))
        })]
    })
}
function $n({label: r, value: h, onChange: E}) {
    return A.jsxs("label", {
        className: "ctl row",
        children: [A.jsx("span", {
            children: r
        }), A.jsx("input", {
            type: "checkbox",
            checked: h,
            onChange: f => E(f.target.checked)
        })]
    })
}
function Xd({label: r, value: h, onChange: E}) {
    return A.jsxs("label", {
        className: "ctl row",
        children: [A.jsx("span", {
            children: r
        }), A.jsxs("span", {
            className: "color-field",
            children: [A.jsx("input", {
                type: "color",
                value: h,
                onChange: f => E(f.target.value)
            }), A.jsx("input", {
                className: "hex",
                type: "text",
                value: h,
                onChange: f => {
                    const O = f.target.value.trim();
                    /^#[0-9a-fA-F]{6}$/.test(O) && E(O.toLowerCase())
                }
            })]
        })]
    })
}
const Gr = "https://x.com/msilvastudio"
  , Yr = "https://www.linkedin.com/in/slvmauro/"
  , Qd = [{
    label: "1600 × 900",
    w: 1600,
    h: 900
}, {
    label: "1920 × 1080 (Full HD)",
    w: 1920,
    h: 1080
}, {
    label: "2560 × 1440 (2K)",
    w: 2560,
    h: 1440
}, {
    label: "3840 × 2160 (4K)",
    w: 3840,
    h: 2160
}, {
    label: "1080 × 1080 (square)",
    w: 1080,
    h: 1080
}, {
    label: "1080 × 1920 (portrait)",
    w: 1080,
    h: 1920
}, {
    label: "1440 × 2560 (portrait 2K)",
    w: 1440,
    h: 2560
}];
function Xr() {
    return A.jsx("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        children: A.jsx("path", {
            d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        })
    })
}
function Qr() {
    return A.jsx("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        children: A.jsx("path", {
            d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
        })
    })
}
function Zr(r) {
    const {params: h, setParams: E, selected: f, onSelect: O} = r
      , U = dl.useRef(null)
      , X = (S, k) => E(G => ({
        ...G,
        [S]: k
    }))
      , K = (S, k) => E(G => ({
        ...G,
        warp: {
            ...G.warp,
            [S]: k
        }
    }))
      , D = (S, k) => E(G => ({
        ...G,
        grain: {
            ...G.grain,
            [S]: k
        }
    }))
      , z = (S, k) => E(G => ({
        ...G,
        post: {
            ...G.post,
            [S]: k
        }
    }))
      , q = (S, k) => E(G => ({
        ...G,
        points: G.points.map(F => F.id === S ? {
            ...F,
            ...k
        } : F)
    }))
      , H = Qd.find(S => S.w === h.width && S.h === h.height) ? `${h.width}x${h.height}` : "custom";
    return A.jsxs("aside", {
        className: "sidebar",
        children: [A.jsxs("div", {
            className: "sidebar-scroll",
            children: [A.jsxs("header", {
                className: "brand",
                children: [A.jsx("h1", {
                    children: "Texture Generator"
                }), A.jsx("p", {
                    children: "Mesh gradient + grain"
                })]
            }), A.jsxs(Ma, {
                title: "Presets & random",
                children: [A.jsx("div", {
                    className: "chips",
                    children: kn.map(S => A.jsx("button", {
                        type: "button",
                        className: "chip",
                        onClick: () => E({
                            ...S.build(),
                            width: h.width,
                            height: h.height
                        }),
                        children: S.name
                    }, S.name))
                }), A.jsxs("div", {
                    className: "btn-row",
                    children: [A.jsx("button", {
                        type: "button",
                        className: "btn primary",
                        onClick: () => E(qr(h)),
                        children: "🎲 Randomize"
                    }), A.jsx("button", {
                        type: "button",
                        className: "btn",
                        onClick: () => E(Hr(h)),
                        children: "Colors only"
                    }), A.jsx("button", {
                        type: "button",
                        className: "btn",
                        onClick: () => E(Br(h)),
                        children: "Positions only"
                    })]
                })]
            }), A.jsxs(Ma, {
                title: "Size",
                children: [A.jsx(Ou, {
                    label: "Preset",
                    value: H,
                    options: [...Qd.map(S => ({
                        value: `${S.w}x${S.h}`,
                        label: S.label
                    })), {
                        value: "custom",
                        label: "Custom"
                    }],
                    onChange: S => {
                        if (S === "custom")
                            return;
                        const [k,G] = S.split("x").map(Number);
                        E(F => ({
                            ...F,
                            width: k,
                            height: G
                        }))
                    }
                }), A.jsxs("div", {
                    className: "two",
                    children: [A.jsxs("label", {
                        className: "ctl",
                        children: [A.jsx("span", {
                            children: "Width"
                        }), A.jsx("input", {
                            type: "number",
                            min: 64,
                            max: 8192,
                            value: h.width,
                            onChange: S => X("width", Math.max(64, Number(S.target.value) || 64))
                        })]
                    }), A.jsxs("label", {
                        className: "ctl",
                        children: [A.jsx("span", {
                            children: "Height"
                        }), A.jsx("input", {
                            type: "number",
                            min: 64,
                            max: 8192,
                            value: h.height,
                            onChange: S => X("height", Math.max(64, Number(S.target.value) || 64))
                        })]
                    })]
                })]
            }), A.jsxs(Ma, {
                title: `Color points (${h.points.length})`,
                children: [A.jsx("p", {
                    className: "hint",
                    children: "Drag the points in the preview. Double-click the canvas to add a point."
                }), A.jsx($n, {
                    label: "Show points in preview",
                    value: r.showHandles,
                    onChange: r.setShowHandles
                }), A.jsx("div", {
                    className: "points",
                    children: h.points.map( (S, k) => A.jsxs("div", {
                        className: `point ${f === S.id ? "sel" : ""}`,
                        onClick: () => O(S.id),
                        children: [A.jsxs("div", {
                            className: "point-head",
                            children: [A.jsx("span", {
                                className: "swatch",
                                style: {
                                    background: S.color
                                }
                            }), A.jsxs("strong", {
                                children: ["Point ", k + 1]
                            }), A.jsx("button", {
                                type: "button",
                                className: "icon",
                                title: "Remove",
                                disabled: h.points.length <= 2,
                                onClick: G => {
                                    G.stopPropagation(),
                                    E(F => ({
                                        ...F,
                                        points: F.points.filter(L => L.id !== S.id)
                                    })),
                                    f === S.id && O(null)
                                }
                                ,
                                children: "✕"
                            })]
                        }), f === S.id && A.jsxs("div", {
                            className: "point-body",
                            children: [A.jsx(Xd, {
                                label: "Color",
                                value: S.color,
                                onChange: G => q(S.id, {
                                    color: G
                                })
                            }), A.jsx(Rl, {
                                label: "X",
                                value: S.x,
                                min: -.5,
                                max: 1.5,
                                onChange: G => q(S.id, {
                                    x: G
                                })
                            }), A.jsx(Rl, {
                                label: "Y",
                                value: S.y,
                                min: -.5,
                                max: 1.5,
                                onChange: G => q(S.id, {
                                    y: G
                                })
                            }), A.jsx(Rl, {
                                label: "Size",
                                value: S.size,
                                min: .02,
                                max: 1.5,
                                onChange: G => q(S.id, {
                                    size: G
                                })
                            }), A.jsx(Rl, {
                                label: "Stretch (horizontal)",
                                value: S.stretch,
                                min: .2,
                                max: 8,
                                onChange: G => q(S.id, {
                                    stretch: G
                                })
                            })]
                        })]
                    }, S.id))
                }), A.jsx("button", {
                    type: "button",
                    className: "btn",
                    disabled: h.points.length >= Ce,
                    onClick: () => {
                        const S = Du()
                          , k = Fn(1)[0];
                        E(G => ({
                            ...G,
                            points: [...G.points, {
                                id: S,
                                x: .3 + Math.random() * .4,
                                y: .3 + Math.random() * .4,
                                color: k,
                                size: .25,
                                stretch: 1.5
                            }]
                        })),
                        O(S)
                    }
                    ,
                    children: "+ Add point"
                }), A.jsx(Xd, {
                    label: "Background color",
                    value: h.background,
                    onChange: S => X("background", S)
                }), A.jsx(Rl, {
                    label: "Background weight",
                    value: h.backgroundWeight,
                    min: 0,
                    max: .05,
                    step: .001,
                    onChange: S => X("backgroundWeight", S),
                    format: S => S.toFixed(3)
                })]
            }), A.jsxs(Ma, {
                title: "Blending",
                children: [A.jsx(Ou, {
                    label: "Mode",
                    value: h.blendMode,
                    options: [{
                        value: "gaussian",
                        label: "Gaussian (blurred photo)"
                    }, {
                        value: "idw",
                        label: "Inverse distance (blobs)"
                    }],
                    onChange: S => X("blendMode", S)
                }), A.jsx(Ou, {
                    label: "Color space",
                    value: h.colorSpace,
                    options: [{
                        value: "oklab",
                        label: "OKLab (most natural)"
                    }, {
                        value: "linear",
                        label: "Linear RGB"
                    }, {
                        value: "srgb",
                        label: "sRGB"
                    }],
                    onChange: S => X("colorSpace", S)
                }), A.jsx(Rl, {
                    label: "Global softness",
                    value: h.softness,
                    min: .1,
                    max: 3,
                    onChange: S => X("softness", S)
                }), h.blendMode === "idw" && A.jsx(Rl, {
                    label: "Power",
                    value: h.idwPower,
                    min: .5,
                    max: 8,
                    onChange: S => X("idwPower", S)
                })]
            }), A.jsxs(Ma, {
                title: "Warp (noise)",
                children: [A.jsx(Rl, {
                    label: "Amount",
                    value: h.warp.amount,
                    min: 0,
                    max: .8,
                    onChange: S => K("amount", S)
                }), A.jsx(Rl, {
                    label: "Scale",
                    value: h.warp.scale,
                    min: .2,
                    max: 6,
                    onChange: S => K("scale", S)
                }), A.jsx(Rl, {
                    label: "Detail (octaves)",
                    value: h.warp.octaves,
                    min: 1,
                    max: 6,
                    step: 1,
                    onChange: S => K("octaves", S)
                }), A.jsx(Rl, {
                    label: "Seed",
                    value: h.warp.seed,
                    min: 0,
                    max: 999,
                    step: 1,
                    onChange: S => K("seed", S)
                })]
            }), A.jsxs(Ma, {
                title: "Grain",
                children: [A.jsx($n, {
                    label: "Enable",
                    value: h.grain.enabled,
                    onChange: S => D("enabled", S)
                }), A.jsx(Rl, {
                    label: "Intensity",
                    value: h.grain.intensity,
                    min: 0,
                    max: .6,
                    onChange: S => D("intensity", S)
                }), A.jsx(Rl, {
                    label: "Size (px)",
                    value: h.grain.size,
                    min: .5,
                    max: 8,
                    step: .5,
                    onChange: S => D("size", S),
                    format: S => S.toFixed(1)
                }), A.jsx(Ou, {
                    label: "Mode",
                    value: h.grain.blend,
                    options: [{
                        value: "add",
                        label: "Add"
                    }, {
                        value: "overlay",
                        label: "Overlay"
                    }, {
                        value: "softlight",
                        label: "Soft light"
                    }],
                    onChange: S => D("blend", S)
                }), A.jsx($n, {
                    label: "Colored grain",
                    value: h.grain.colored,
                    onChange: S => D("colored", S)
                }), A.jsx($n, {
                    label: "Animate (preview)",
                    value: h.grain.animated,
                    onChange: S => D("animated", S)
                }), A.jsx(Rl, {
                    label: "Seed",
                    value: h.grain.seed,
                    min: 0,
                    max: 999,
                    step: 1,
                    onChange: S => D("seed", S)
                })]
            }), A.jsxs(Ma, {
                title: "Adjustments",
                defaultOpen: !1,
                children: [A.jsx(Rl, {
                    label: "Brightness",
                    value: h.post.brightness,
                    min: -.5,
                    max: .5,
                    onChange: S => z("brightness", S)
                }), A.jsx(Rl, {
                    label: "Contrast",
                    value: h.post.contrast,
                    min: .2,
                    max: 2.5,
                    onChange: S => z("contrast", S)
                }), A.jsx(Rl, {
                    label: "Saturation",
                    value: h.post.saturation,
                    min: 0,
                    max: 2.5,
                    onChange: S => z("saturation", S)
                }), A.jsx(Rl, {
                    label: "Hue (°)",
                    value: h.post.hue,
                    min: -180,
                    max: 180,
                    step: 1,
                    onChange: S => z("hue", S)
                }), A.jsx(Rl, {
                    label: "Vignette",
                    value: h.post.vignette,
                    min: 0,
                    max: 1,
                    onChange: S => z("vignette", S)
                }), A.jsx(Rl, {
                    label: "Vignette softness",
                    value: h.post.vignetteSoftness,
                    min: .05,
                    max: 1.5,
                    onChange: S => z("vignetteSoftness", S)
                })]
            }), A.jsxs(Ma, {
                title: "Export",
                children: [A.jsx(Ou, {
                    label: "Format",
                    value: r.exportFormat,
                    options: [{
                        value: "png",
                        label: "PNG"
                    }, {
                        value: "jpeg",
                        label: "JPEG"
                    }, {
                        value: "webp",
                        label: "WebP"
                    }],
                    onChange: r.setExportFormat
                }), r.exportFormat !== "png" && A.jsx(Rl, {
                    label: "Quality",
                    value: r.exportQuality,
                    min: .3,
                    max: 1,
                    onChange: r.setExportQuality
                }), A.jsx("button", {
                    type: "button",
                    className: "btn primary big",
                    disabled: r.exporting,
                    onClick: r.onExport,
                    children: r.exporting ? "Generating…" : `⬇ Download ${h.width} × ${h.height}`
                }), A.jsxs("div", {
                    className: "btn-row",
                    children: [A.jsx("button", {
                        type: "button",
                        className: "btn",
                        onClick: r.onCopyLink,
                        children: "Copy link"
                    }), A.jsx("button", {
                        type: "button",
                        className: "btn",
                        onClick: r.onDownloadJson,
                        children: "Save JSON"
                    }), A.jsx("button", {
                        type: "button",
                        className: "btn",
                        onClick: () => U.current?.click(),
                        children: "Open JSON"
                    }), A.jsx("input", {
                        ref: U,
                        type: "file",
                        accept: "application/json",
                        hidden: !0,
                        onChange: S => {
                            const k = S.target.files?.[0];
                            k && r.onImportJson(k),
                            S.target.value = ""
                        }
                    })]
                }), A.jsx("button", {
                    type: "button",
                    className: "btn subtle",
                    onClick: r.onReset,
                    children: "Reset to default"
                })]
            })]
        }), A.jsxs("footer", {
            className: "sidebar-footer",
            children: [A.jsxs("a", {
                className: "made-by",
                href: Gr,
                target: "_blank",
                rel: "noopener noreferrer",
                title: "Follow @maurosilvastudio on X",
                children: [A.jsx(Xr, {}), A.jsxs("span", {
                    className: "made-by-text",
                    children: [A.jsx("strong", {
                        children: "MAUROSILVASTUDIO"
                    }), A.jsx("span", {
                        children: "@maurosilvastudio"
                    })]
                })]
            }), A.jsx("a", {
                className: "social-btn",
                href: Yr,
                target: "_blank",
                rel: "noopener noreferrer",
                title: "Mauro Silva on LinkedIn",
                "aria-label": "LinkedIn",
                children: A.jsx(Qr, {})
            })]
        })]
    })
}
const Kd = "texture-generator:params";
function _f(r) {
    if (!r || typeof r != "object")
        return null;
    const h = r;
    return !Array.isArray(h.points) || h.points.length === 0 ? null : {
        ...xt,
        ...h,
        warp: {
            ...xt.warp,
            ...h.warp ?? {}
        },
        grain: {
            ...xt.grain,
            ...h.grain ?? {}
        },
        post: {
            ...xt.post,
            ...h.post ?? {}
        },
        background: h.background ?? "#888888",
        points: h.points.map(E => ({
            id: E.id ?? Du(),
            x: E.x ?? .5,
            y: E.y ?? .5,
            color: E.color ?? "#888888",
            size: E.size ?? .3,
            stretch: E.stretch ?? 1
        }))
    }
}
function Zd(r) {
    return btoa(unescape(encodeURIComponent(JSON.stringify(r))))
}
function Lr(r) {
    try {
        return _f(JSON.parse(decodeURIComponent(escape(atob(r)))))
    } catch {
        return null
    }
}
function Vr() {
    const r = location.hash.replace(/^#/, "");
    if (r) {
        const h = Lr(r);
        if (h)
            return h
    }
    try {
        const h = localStorage.getItem(Kd);
        if (h) {
            const E = _f(JSON.parse(h));
            if (E)
                return E
        }
    } catch {
        return kn[0].build()
    }
    return kn[0].build()
}
function Kr() {
    const [r,h] = dl.useState(Vr)
      , [E,f] = dl.useState(null)
      , [O,U] = dl.useState(!0)
      , [X,K] = dl.useState("png")
      , [D,z] = dl.useState(.92)
      , [q,H] = dl.useState(!1)
      , [S,k] = dl.useState(null)
      , G = dl.useRef(null);
    dl.useEffect( () => {
        try {
            localStorage.setItem(Kd, JSON.stringify(r))
        } catch {
            return
        }
    }
    , [r]);
    const F = dl.useCallback(il => {
        k(il),
        window.setTimeout( () => k(null), 2200)
    }
    , [])
      , L = dl.useCallback( (il, El, Pl) => {
        h(Ml => ({
            ...Ml,
            points: Ml.points.map(Hl => Hl.id === il ? {
                ...Hl,
                x: El,
                y: Pl
            } : Hl)
        }))
    }
    , [])
      , al = dl.useCallback( (il, El) => {
        const Pl = Du();
        h(Ml => Ml.points.length >= 12 ? Ml : {
            ...Ml,
            points: [...Ml.points, {
                id: Pl,
                x: il,
                y: El,
                color: Fn(1)[0],
                size: .25,
                stretch: 1.5
            }]
        }),
        f(Pl)
    }
    , [])
      , pl = dl.useCallback(async () => {
        H(!0),
        await new Promise(il => setTimeout(il, 30));
        try {
            G.current || (G.current = new Ld(document.createElement("canvas")));
            const il = G.current;
            il.render(r, r.width, r.height, performance.now() / 1e3);
            const El = `image/${X}`
              , Pl = await new Promise(Hl => il.canvas.toBlob(Hl, El, D));
            if (!Pl)
                throw new Error("Failed to generate the image.");
            const Ml = document.createElement("a");
            Ml.href = URL.createObjectURL(Pl),
            Ml.download = `texture-${r.width}x${r.height}-${Date.now().toString(36)}.${X === "jpeg" ? "jpg" : X}`,
            Ml.click(),
            setTimeout( () => URL.revokeObjectURL(Ml.href), 5e3),
            F("Image exported!")
        } catch (il) {
            F(il.message)
        } finally {
            H(!1)
        }
    }
    , [r, X, D, F])
      , sl = dl.useCallback(async () => {
        const il = `${location.origin}${location.pathname}#${Zd(r)}`;
        history.replaceState(null, "", `#${Zd(r)}`);
        try {
            await navigator.clipboard.writeText(il),
            F("Link copied!")
        } catch {
            F("Link updated in the address bar.")
        }
    }
    , [r, F])
      , xl = dl.useCallback( () => {
        const il = new Blob([JSON.stringify(r, null, 2)],{
            type: "application/json"
        })
          , El = document.createElement("a");
        El.href = URL.createObjectURL(il),
        El.download = "texture.json",
        El.click(),
        setTimeout( () => URL.revokeObjectURL(El.href), 5e3)
    }
    , [r])
      , Vl = dl.useCallback(async il => {
        try {
            const El = _f(JSON.parse(await il.text()));
            if (!El)
                throw new Error("Invalid file.");
            h(El),
            f(null),
            F("Settings loaded!")
        } catch (El) {
            F(El.message)
        }
    }
    , [F])
      , Ol = dl.useCallback( () => {
        h(kn[0].build()),
        f(null),
        history.replaceState(null, "", location.pathname)
    }
    , [])
      , I = dl.useMemo( () => ({
        params: r,
        setParams: h,
        selected: E,
        onSelect: f,
        showHandles: O,
        setShowHandles: U,
        exportFormat: X,
        setExportFormat: K,
        exportQuality: D,
        setExportQuality: z,
        onExport: pl,
        exporting: q,
        onCopyLink: sl,
        onDownloadJson: xl,
        onImportJson: Vl,
        onReset: Ol
    }), [r, E, O, X, D, pl, q, sl, xl, Vl, Ol]);
    return A.jsxs("div", {
        className: "app",
        children: [A.jsx(Zr, {
            ...I
        }), A.jsxs("main", {
            className: "main",
            children: [A.jsx(Cr, {
                params: r,
                selected: E,
                showHandles: O,
                onSelect: f,
                onMovePoint: L,
                onAddPoint: al
            }), S && A.jsx("div", {
                className: "toast",
                children: S
            })]
        })]
    })
}
Ar.createRoot(document.getElementById("root")).render(A.jsx(dl.StrictMode, {
    children: A.jsx(Kr, {})
}));
