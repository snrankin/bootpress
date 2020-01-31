/*!
 * bsCustomFileInput v1.3.2 (https://github.com/Johann-S/bs-custom-file-input)
 * Copyright 2018 - 2019 Johann-S <johann.servoire@gmail.com>
 * Licensed under MIT (https://github.com/Johann-S/bs-custom-file-input/blob/master/LICENSE)
 */
! function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).bsCustomFileInput = t()
}(this, function () {
    "use strict";
    var d = {
            CUSTOMFILE: '.custom-file input[type="file"]',
            CUSTOMFILELABEL: ".custom-file-label",
            FORM: "form",
            INPUT: "input"
        },
        r = function (e) {
            if (0 < e.childNodes.length)
                for (var t = [].slice.call(e.childNodes), n = 0; n < t.length; n++) {
                    var r = t[n];
                    if (3 !== r.nodeType) return r
                }
            return e
        },
        u = function (e) {
            var t = e.bsCustomFileInput.defaultText,
                n = e.parentNode.querySelector(d.CUSTOMFILELABEL);
            n && (r(n).innerHTML = t)
        },
        n = !!window.File,
        l = function (e) {
            if (e.hasAttribute("multiple") && n) return [].slice.call(e.files).map(function (e) {
                return e.name
            }).join(", ");
            if (-1 === e.value.indexOf("fakepath")) return e.value;
            var t = e.value.split("\\");
            return t[t.length - 1]
        };
    
    function v() {
        var e = this.parentNode.querySelector(d.CUSTOMFILELABEL);
        if (e) {
            var t = r(e),
                n = l(this);
            n.length ? t.innerHTML = n : u(this)
        }
    }
    
    function p() {
        for (var e = [].slice.call(this.querySelectorAll(d.INPUT)).filter(function (e) {
                return !!e.bsCustomFileInput
            }), t = 0, n = e.length; t < n; t++) u(e[t])
    }
    var m = "bsCustomFileInput",
        L = "reset",
        h = "change";
    return {
        init: function (e, t) {
            void 0 === e && (e = d.CUSTOMFILE), void 0 === t && (t = d.FORM);
            for (var n, r, l, i = [].slice.call(document.querySelectorAll(e)), o = [].slice.call(document.querySelectorAll(t)), u = 0, c = i.length; u < c; u++) {
                var f = i[u];
                Object.defineProperty(f, m, {
                    value: {
                        defaultText: (n = f, r = void 0, void 0, r = "", l = n.parentNode.querySelector(d.CUSTOMFILELABEL), l && (r = l.innerHTML), r)
                    },
                    writable: !0
                }), v.call(f), f.addEventListener(h, v)
            }
            for (var a = 0, s = o.length; a < s; a++) o[a].addEventListener(L, p), Object.defineProperty(o[a], m, {
                value: !0,
                writable: !0
            })
        },
        destroy: function () {
            for (var e = [].slice.call(document.querySelectorAll(d.FORM)).filter(function (e) {
                    return !!e.bsCustomFileInput
                }), t = [].slice.call(document.querySelectorAll(d.INPUT)).filter(function (e) {
                    return !!e.bsCustomFileInput
                }), n = 0, r = t.length; n < r; n++) {
                var l = t[n];
                u(l), l[m] = void 0, l.removeEventListener(h, v)
            }
            for (var i = 0, o = e.length; i < o; i++) e[i].removeEventListener(L, p), e[i][m] = void 0
        }
    }
});
//# sourceMappingURL=bs-custom-file-input.min.js.map
/*!
 * Bootstrap v4.4.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
! function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], t) : t((e = e || self).bootstrap = {}, e.jQuery)
}(this, function (e, p) {
    "use strict";
    
    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    
    function s(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e
    }
    
    function t(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e && (i = i.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), n.push.apply(n, i)
        }
        return n
    }
    
    function l(o) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? t(Object(r), !0).forEach(function (e) {
                var t, n, i;
                t = o, i = r[n = e], n in t ? Object.defineProperty(t, n, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = i
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r)) : t(Object(r)).forEach(function (e) {
                Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(r, e))
            })
        }
        return o
    }
    p = p && p.hasOwnProperty("default") ? p.default : p;
    var n = "transitionend";
    
    function o(e) {
        var t = this,
            n = !1;
        return p(this).one(m.TRANSITION_END, function () {
            n = !0
        }), setTimeout(function () {
            n || m.triggerTransitionEnd(t)
        }, e), this
    }
    var m = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function (e) {
            for (; e += ~~(1e6 * Math.random()), document.getElementById(e););
            return e
        },
        getSelectorFromElement: function (e) {
            var t = e.getAttribute("data-target");
            if (!t || "#" === t) {
                var n = e.getAttribute("href");
                t = n && "#" !== n ? n.trim() : ""
            }
            try {
                return document.querySelector(t) ? t : null
            } catch (e) {
                return null
            }
        },
        getTransitionDurationFromElement: function (e) {
            if (!e) return 0;
            var t = p(e).css("transition-duration"),
                n = p(e).css("transition-delay"),
                i = parseFloat(t),
                o = parseFloat(n);
            return i || o ? (t = t.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(t) + parseFloat(n))) : 0
        },
        reflow: function (e) {
            return e.offsetHeight
        },
        triggerTransitionEnd: function (e) {
            p(e).trigger(n)
        },
        supportsTransitionEnd: function () {
            return Boolean(n)
        },
        isElement: function (e) {
            return (e[0] || e).nodeType
        },
        typeCheckConfig: function (e, t, n) {
            for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var o = n[i],
                        r = t[i],
                        s = r && m.isElement(r) ? "element" : (a = r, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
                    if (!new RegExp(o).test(s)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".')
                } var a
        },
        findShadowRoot: function (e) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" != typeof e.getRootNode) return e instanceof ShadowRoot ? e : e.parentNode ? m.findShadowRoot(e.parentNode) : null;
            var t = e.getRootNode();
            return t instanceof ShadowRoot ? t : null
        },
        jQueryDetection: function () {
            if ("undefined" == typeof p) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var e = p.fn.jquery.split(" ")[0].split(".");
            if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }
    };
    m.jQueryDetection(), p.fn.emulateTransitionEnd = o, p.event.special[m.TRANSITION_END] = {
        bindType: n,
        delegateType: n,
        handle: function (e) {
            if (p(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
        }
    };
    var r = "alert",
        a = "bs.alert",
        c = "." + a,
        h = p.fn[r],
        u = {
            CLOSE: "close" + c,
            CLOSED: "closed" + c,
            CLICK_DATA_API: "click" + c + ".data-api"
        },
        f = "alert",
        d = "fade",
        g = "show",
        _ = function () {
            function i(e) {
                this._element = e
            }
            var e = i.prototype;
            return e.close = function (e) {
                var t = this._element;
                e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
            }, e.dispose = function () {
                p.removeData(this._element, a), this._element = null
            }, e._getRootElement = function (e) {
                var t = m.getSelectorFromElement(e),
                    n = !1;
                return t && (n = document.querySelector(t)), n = n || p(e).closest("." + f)[0]
            }, e._triggerCloseEvent = function (e) {
                var t = p.Event(u.CLOSE);
                return p(e).trigger(t), t
            }, e._removeElement = function (t) {
                var n = this;
                if (p(t).removeClass(g), p(t).hasClass(d)) {
                    var e = m.getTransitionDurationFromElement(t);
                    p(t).one(m.TRANSITION_END, function (e) {
                        return n._destroyElement(t, e)
                    }).emulateTransitionEnd(e)
                } else this._destroyElement(t)
            }, e._destroyElement = function (e) {
                p(e).detach().trigger(u.CLOSED).remove()
            }, i._jQueryInterface = function (n) {
                return this.each(function () {
                    var e = p(this),
                        t = e.data(a);
                    t || (t = new i(this), e.data(a, t)), "close" === n && t[n](this)
                })
            }, i._handleDismiss = function (t) {
                return function (e) {
                    e && e.preventDefault(), t.close(this)
                }
            }, s(i, null, [{
                key: "VERSION",
                get: function () {
                    return "4.4.1"
                }
            }]), i
        }();
    p(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', _._handleDismiss(new _)), p.fn[r] = _._jQueryInterface, p.fn[r].Constructor = _, p.fn[r].noConflict = function () {
        return p.fn[r] = h, _._jQueryInterface
    };
    var v = "button",
        y = "bs.button",
        E = "." + y,
        b = ".data-api",
        w = p.fn[v],
        T = "active",
        C = "btn",
        S = "focus",
        D = '[data-toggle^="button"]',
        I = '[data-toggle="buttons"]',
        A = '[data-toggle="button"]',
        O = '[data-toggle="buttons"] .btn',
        N = 'input:not([type="hidden"])',
        k = ".active",
        L = ".btn",
        P = {
            CLICK_DATA_API: "click" + E + b,
            FOCUS_BLUR_DATA_API: "focus" + E + b + " blur" + E + b,
            LOAD_DATA_API: "load" + E + b
        },
        x = function () {
            function n(e) {
                this._element = e
            }
            var e = n.prototype;
            return e.toggle = function () {
                var e = !0,
                    t = !0,
                    n = p(this._element).closest(I)[0];
                if (n) {
                    var i = this._element.querySelector(N);
                    if (i) {
                        if ("radio" === i.type)
                            if (i.checked && this._element.classList.contains(T)) e = !1;
                            else {
                                var o = n.querySelector(k);
                                o && p(o).removeClass(T)
                            }
                        else "checkbox" === i.type ? "LABEL" === this._element.tagName && i.checked === this._element.classList.contains(T) && (e = !1) : e = !1;
                        e && (i.checked = !this._element.classList.contains(T), p(i).trigger("change")), i.focus(), t = !1
                    }
                }
                this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (t && this._element.setAttribute("aria-pressed", !this._element.classList.contains(T)), e && p(this._element).toggleClass(T))
            }, e.dispose = function () {
                p.removeData(this._element, y), this._element = null
            }, n._jQueryInterface = function (t) {
                return this.each(function () {
                    var e = p(this).data(y);
                    e || (e = new n(this), p(this).data(y, e)), "toggle" === t && e[t]()
                })
            }, s(n, null, [{
                key: "VERSION",
                get: function () {
                    return "4.4.1"
                }
            }]), n
        }();
    p(document).on(P.CLICK_DATA_API, D, function (e) {
        var t = e.target;
        if (p(t).hasClass(C) || (t = p(t).closest(L)[0]), !t || t.hasAttribute("disabled") || t.classList.contains("disabled")) e.preventDefault();
        else {
            var n = t.querySelector(N);
            if (n && (n.hasAttribute("disabled") || n.classList.contains("disabled"))) return void e.preventDefault();
            x._jQueryInterface.call(p(t), "toggle")
        }
    }).on(P.FOCUS_BLUR_DATA_API, D, function (e) {
        var t = p(e.target).closest(L)[0];
        p(t).toggleClass(S, /^focus(in)?$/.test(e.type))
    }), p(window).on(P.LOAD_DATA_API, function () {
        for (var e = [].slice.call(document.querySelectorAll(O)), t = 0, n = e.length; t < n; t++) {
            var i = e[t],
                o = i.querySelector(N);
            o.checked || o.hasAttribute("checked") ? i.classList.add(T) : i.classList.remove(T)
        }
        for (var r = 0, s = (e = [].slice.call(document.querySelectorAll(A))).length; r < s; r++) {
            var a = e[r];
            "true" === a.getAttribute("aria-pressed") ? a.classList.add(T) : a.classList.remove(T)
        }
    }), p.fn[v] = x._jQueryInterface, p.fn[v].Constructor = x, p.fn[v].noConflict = function () {
        return p.fn[v] = w, x._jQueryInterface
    };
    var j = "carousel",
        H = "bs.carousel",
        R = "." + H,
        F = ".data-api",
        M = p.fn[j],
        W = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
        },
        U = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        },
        B = "next",
        q = "prev",
        K = "left",
        Q = "right",
        V = {
            SLIDE: "slide" + R,
            SLID: "slid" + R,
            KEYDOWN: "keydown" + R,
            MOUSEENTER: "mouseenter" + R,
            MOUSELEAVE: "mouseleave" + R,
            TOUCHSTART: "touchstart" + R,
            TOUCHMOVE: "touchmove" + R,
            TOUCHEND: "touchend" + R,
            POINTERDOWN: "pointerdown" + R,
            POINTERUP: "pointerup" + R,
            DRAG_START: "dragstart" + R,
            LOAD_DATA_API: "load" + R + F,
            CLICK_DATA_API: "click" + R + F
        },
        Y = "carousel",
        z = "active",
        X = "slide",
        G = "carousel-item-right",
        $ = "carousel-item-left",
        J = "carousel-item-next",
        Z = "carousel-item-prev",
        ee = "pointer-event",
        te = ".active",
        ne = ".active.carousel-item",
        ie = ".carousel-item",
        oe = ".carousel-item img",
        re = ".carousel-item-next, .carousel-item-prev",
        se = ".carousel-indicators",
        ae = "[data-slide], [data-slide-to]",
        le = '[data-ride="carousel"]',
        ce = {
            TOUCH: "touch",
            PEN: "pen"
        },
        he = function () {
            function r(e, t) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(se), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
            }
            var e = r.prototype;
            return e.next = function () {
                this._isSliding || this._slide(B)
            }, e.nextWhenVisible = function () {
                !document.hidden && p(this._element).is(":visible") && "hidden" !== p(this._element).css("visibility") && this.next()
            }, e.prev = function () {
                this._isSliding || this._slide(q)
            }, e.pause = function (e) {
                e || (this._isPaused = !0), this._element.querySelector(re) && (m.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, e.cycle = function (e) {
                e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, e.to = function (e) {
                var t = this;
                this._activeElement = this._element.querySelector(ne);
                var n = this._getItemIndex(this._activeElement);
                if (!(e > this._items.length - 1 || e < 0))
                    if (this._isSliding) p(this._element).one(V.SLID, function () {
                        return t.to(e)
                    });
                    else {
                        if (n === e) return this.pause(), void this.cycle();
                        var i = n < e ? B : q;
                        this._slide(i, this._items[e])
                    }
            }, e.dispose = function () {
                p(this._element).off(R), p.removeData(this._element, H), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, e._getConfig = function (e) {
                return e = l({}, W, {}, e), m.typeCheckConfig(j, e, U), e
            }, e._handleSwipe = function () {
                var e = Math.abs(this.touchDeltaX);
                if (!(e <= 40)) {
                    var t = e / this.touchDeltaX;
                    (this.touchDeltaX = 0) < t && this.prev(), t < 0 && this.next()
                }
            }, e._addEventListeners = function () {
                var t = this;
                this._config.keyboard && p(this._element).on(V.KEYDOWN, function (e) {
                    return t._keydown(e)
                }), "hover" === this._config.pause && p(this._element).on(V.MOUSEENTER, function (e) {
                    return t.pause(e)
                }).on(V.MOUSELEAVE, function (e) {
                    return t.cycle(e)
                }), this._config.touch && this._addTouchEventListeners()
            }, e._addTouchEventListeners = function () {
                var t = this;
                if (this._touchSupported) {
                    var n = function (e) {
                            t._pointerEvent && ce[e.originalEvent.pointerType.toUpperCase()] ? t.touchStartX = e.originalEvent.clientX : t._pointerEvent || (t.touchStartX = e.originalEvent.touches[0].clientX)
                        },
                        i = function (e) {
                            t._pointerEvent && ce[e.originalEvent.pointerType.toUpperCase()] && (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX), t._handleSwipe(), "hover" === t._config.pause && (t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function (e) {
                                return t.cycle(e)
                            }, 500 + t._config.interval))
                        };
                    p(this._element.querySelectorAll(oe)).on(V.DRAG_START, function (e) {
                        return e.preventDefault()
                    }), this._pointerEvent ? (p(this._element).on(V.POINTERDOWN, function (e) {
                        return n(e)
                    }), p(this._element).on(V.POINTERUP, function (e) {
                        return i(e)
                    }), this._element.classList.add(ee)) : (p(this._element).on(V.TOUCHSTART, function (e) {
                        return n(e)
                    }), p(this._element).on(V.TOUCHMOVE, function (e) {
                        return function (e) {
                            e.originalEvent.touches && 1 < e.originalEvent.touches.length ? t.touchDeltaX = 0 : t.touchDeltaX = e.originalEvent.touches[0].clientX - t.touchStartX
                        }(e)
                    }), p(this._element).on(V.TOUCHEND, function (e) {
                        return i(e)
                    }))
                }
            }, e._keydown = function (e) {
                if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                case 37:
                    e.preventDefault(), this.prev();
                    break;
                case 39:
                    e.preventDefault(), this.next()
                }
            }, e._getItemIndex = function (e) {
                return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(ie)) : [], this._items.indexOf(e)
            }, e._getItemByDirection = function (e, t) {
                var n = e === B,
                    i = e === q,
                    o = this._getItemIndex(t),
                    r = this._items.length - 1;
                if ((i && 0 === o || n && o === r) && !this._config.wrap) return t;
                var s = (o + (e === q ? -1 : 1)) % this._items.length;
                return -1 == s ? this._items[this._items.length - 1] : this._items[s]
            }, e._triggerSlideEvent = function (e, t) {
                var n = this._getItemIndex(e),
                    i = this._getItemIndex(this._element.querySelector(ne)),
                    o = p.Event(V.SLIDE, {
                        relatedTarget: e,
                        direction: t,
                        from: i,
                        to: n
                    });
                return p(this._element).trigger(o), o
            }, e._setActiveIndicatorElement = function (e) {
                if (this._indicatorsElement) {
                    var t = [].slice.call(this._indicatorsElement.querySelectorAll(te));
                    p(t).removeClass(z);
                    var n = this._indicatorsElement.children[this._getItemIndex(e)];
                    n && p(n).addClass(z)
                }
            }, e._slide = function (e, t) {
                var n, i, o, r = this,
                    s = this._element.querySelector(ne),
                    a = this._getItemIndex(s),
                    l = t || s && this._getItemByDirection(e, s),
                    c = this._getItemIndex(l),
                    h = Boolean(this._interval);
                if (o = e === B ? (n = $, i = J, K) : (n = G, i = Z, Q), l && p(l).hasClass(z)) this._isSliding = !1;
                else if (!this._triggerSlideEvent(l, o).isDefaultPrevented() && s && l) {
                    this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(l);
                    var u = p.Event(V.SLID, {
                        relatedTarget: l,
                        direction: o,
                        from: a,
                        to: c
                    });
                    if (p(this._element).hasClass(X)) {
                        p(l).addClass(i), m.reflow(l), p(s).addClass(n), p(l).addClass(n);
                        var f = parseInt(l.getAttribute("data-interval"), 10);
                        f ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = f) : this._config.interval = this._config.defaultInterval || this._config.interval;
                        var d = m.getTransitionDurationFromElement(s);
                        p(s).one(m.TRANSITION_END, function () {
                            p(l).removeClass(n + " " + i).addClass(z), p(s).removeClass(z + " " + i + " " + n), r._isSliding = !1, setTimeout(function () {
                                return p(r._element).trigger(u)
                            }, 0)
                        }).emulateTransitionEnd(d)
                    } else p(s).removeClass(z), p(l).addClass(z), this._isSliding = !1, p(this._element).trigger(u);
                    h && this.cycle()
                }
            }, r._jQueryInterface = function (i) {
                return this.each(function () {
                    var e = p(this).data(H),
                        t = l({}, W, {}, p(this).data());
                    "object" == typeof i && (t = l({}, t, {}, i));
                    var n = "string" == typeof i ? i : t.slide;
                    if (e || (e = new r(this, t), p(this).data(H, e)), "number" == typeof i) e.to(i);
                    else if ("string" == typeof n) {
                        if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n]()
                    } else t.interval && t.ride && (e.pause(), e.cycle())
                })
            }, r._dataApiClickHandler = function (e) {
                var t = m.getSelectorFromElement(this);
                if (t) {
                    var n = p(t)[0];
                    if (n && p(n).hasClass(Y)) {
                        var i = l({}, p(n).data(), {}, p(this).data()),
                            o = this.getAttribute("data-slide-to");
                        o && (i.interval = !1), r._jQueryInterface.call(p(n), i), o && p(n).data(H).to(o), e.preventDefault()
                    }
                }
            }, s(r, null, [{
                key: "VERSION",
                get: function () {
                    return "4.4.1"
                }
            }, {
                key: "Default",
                get: function () {
                    return W
                }
            }]), r
        }();
    p(document).on(V.CLICK_DATA_API, ae, he._dataApiClickHandler), p(window).on(V.LOAD_DATA_API, function () {
        for (var e = [].slice.call(document.querySelectorAll(le)), t = 0, n = e.length; t < n; t++) {
            var i = p(e[t]);
            he._jQueryInterface.call(i, i.data())
        }
    }), p.fn[j] = he._jQueryInterface, p.fn[j].Constructor = he, p.fn[j].noConflict = function () {
        return p.fn[j] = M, he._jQueryInterface
    };
    var ue = "collapse",
        fe = "bs.collapse",
        de = "." + fe,
        pe = p.fn[ue],
        me = {
            toggle: !0,
            parent: ""
        },
        ge = {
            toggle: "boolean",
            parent: "(string|element)"
        },
        _e = {
            SHOW: "show" + de,
            SHOWN: "shown" + de,
            HIDE: "hide" + de,
            HIDDEN: "hidden" + de,
            CLICK_DATA_API: "click" + de + ".data-api"
        },
        ve = "show",
        ye = "collapse",
        Ee = "collapsing",
        be = "collapsed",
        we = "width",
        Te = "height",
        Ce = ".show, .collapsing",
        Se = '[data-toggle="collapse"]',
        De = function () {
            function a(t, e) {
                this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                for (var n = [].slice.call(document.querySelectorAll(Se)), i = 0, o = n.length; i < o; i++) {
                    var r = n[i],
                        s = m.getSelectorFromElement(r),
                        a = [].slice.call(document.querySelectorAll(s)).filter(function (e) {
                            return e === t
                        });
                    null !== s && 0 < a.length && (this._selector = s, this._triggerArray.push(r))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }
            var e = a.prototype;
            return e.toggle = function () {
                p(this._element).hasClass(ve) ? this.hide() : this.show()
            }, e.show = function () {
                var e, t, n = this;
                if (!this._isTransitioning && !p(this._element).hasClass(ve) && (this._parent && 0 === (e = [].slice.call(this._parent.querySelectorAll(Ce)).filter(function (e) {
                        return "string" == typeof n._config.parent ? e.getAttribute("data-parent") === n._config.parent : e.classList.contains(ye)
                    })).length && (e = null), !(e && (t = p(e).not(this._selector).data(fe)) && t._isTransitioning))) {
                    var i = p.Event(_e.SHOW);
                    if (p(this._element).trigger(i), !i.isDefaultPrevented()) {
                        e && (a._jQueryInterface.call(p(e).not(this._selector), "hide"), t || p(e).data(fe, null));
                        var o = this._getDimension();
                        p(this._element).removeClass(ye).addClass(Ee), this._element.style[o] = 0, this._triggerArray.length && p(this._triggerArray).removeClass(be).attr("aria-expanded", !0), this.setTransitioning(!0);
                        var r = "scroll" + (o[0].toUpperCase() + o.slice(1)),
                            s = m.getTransitionDurationFromElement(this._element);
                        p(this._element).one(m.TRANSITION_END, function () {
                            p(n._element).removeClass(Ee).addClass(ye).addClass(ve), n._element.style[o] = "", n.setTransitioning(!1), p(n._element).trigger(_e.SHOWN)
                        }).emulateTransitionEnd(s), this._element.style[o] = this._element[r] + "px"
                    }
                }
            }, e.hide = function () {
                var e = this;
                if (!this._isTransitioning && p(this._element).hasClass(ve)) {
                    var t = p.Event(_e.HIDE);
                    if (p(this._element).trigger(t), !t.isDefaultPrevented()) {
                        var n = this._getDimension();
                        this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", m.reflow(this._element), p(this._element).addClass(Ee).removeClass(ye).removeClass(ve);
                        var i = this._triggerArray.length;
                        if (0 < i)
                            for (var o = 0; o < i; o++) {
                                var r = this._triggerArray[o],
                                    s = m.getSelectorFromElement(r);
                                if (null !== s) p([].slice.call(document.querySelectorAll(s))).hasClass(ve) || p(r).addClass(be).attr("aria-expanded", !1)
                            }
                        this.setTransitioning(!0);
                        this._element.style[n] = "";
                        var a = m.getTransitionDurationFromElement(this._element);
                        p(this._element).one(m.TRANSITION_END, function () {
                            e.setTransitioning(!1), p(e._element).removeClass(Ee).addClass(ye).trigger(_e.HIDDEN)
                        }).emulateTransitionEnd(a)
                    }
                }
            }, e.setTransitioning = function (e) {
                this._isTransitioning = e
            }, e.dispose = function () {
                p.removeData(this._element, fe), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, e._getConfig = function (e) {
                return (e = l({}, me, {}, e)).toggle = Boolean(e.toggle), m.typeCheckConfig(ue, e, ge), e
            }, e._getDimension = function () {
                return p(this._element).hasClass(we) ? we : Te
            }, e._getParent = function () {
                var e, n = this;
                m.isElement(this._config.parent) ? (e = this._config.parent, "undefined" != typeof this._config.parent.jquery && (e = this._config.parent[0])) : e = document.querySelector(this._config.parent);
                var t = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                    i = [].slice.call(e.querySelectorAll(t));
                return p(i).each(function (e, t) {
                    n._addAriaAndCollapsedClass(a._getTargetFromElement(t), [t])
                }), e
            }, e._addAriaAndCollapsedClass = function (e, t) {
                var n = p(e).hasClass(ve);
                t.length && p(t).toggleClass(be, !n).attr("aria-expanded", n)
            }, a._getTargetFromElement = function (e) {
                var t = m.getSelectorFromElement(e);
                return t ? document.querySelector(t) : null
            }, a._jQueryInterface = function (i) {
                return this.each(function () {
                    var e = p(this),
                        t = e.data(fe),
                        n = l({}, me, {}, e.data(), {}, "object" == typeof i && i ? i : {});
                    if (!t && n.toggle && /show|hide/.test(i) && (n.toggle = !1), t || (t = new a(this, n), e.data(fe, t)), "string" == typeof i) {
                        if ("undefined" == typeof t[i]) throw new TypeError('No method named "' + i + '"');
                        t[i]()
                    }
                })
            }, s(a, null, [{
                key: "VERSION",
                get: function () {
                    return "4.4.1"
                }
            }, {
                key: "Default",
                get: function () {
                    return me
                }
            }]), a
        }();
    p(document).on(_e.CLICK_DATA_API, Se, function (e) {
        "A" === e.currentTarget.tagName && e.preventDefault();
        var n = p(this),
            t = m.getSelectorFromElement(this),
            i = [].slice.call(document.querySelectorAll(t));
        p(i).each(function () {
            var e = p(this),
                t = e.data(fe) ? "toggle" : n.data();
            De._jQueryInterface.call(e, t)
        })
    }), p.fn[ue] = De._jQueryInterface, p.fn[ue].Constructor = De, p.fn[ue].noConflict = function () {
        return p.fn[ue] = pe, De._jQueryInterface
    };
    var Ie = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
        Ae = function () {
            for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1)
                if (Ie && 0 <= navigator.userAgent.indexOf(e[t])) return 1;
            return 0
        }();
    var Oe = Ie && window.Promise ? function (e) {
        var t = !1;
        return function () {
            t || (t = !0, window.Promise.resolve().then(function () {
                t = !1, e()
            }))
        }
    } : function (e) {
        var t = !1;
        return function () {
            t || (t = !0, setTimeout(function () {
                t = !1, e()
            }, Ae))
        }
    };
    
    function Ne(e) {
        return e && "[object Function]" === {}.toString.call(e)
    }
    
    function ke(e, t) {
        if (1 !== e.nodeType) return [];
        var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
        return t ? n[t] : n
    }
    
    function Le(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host
    }
    
    function Pe(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
        case "HTML":
        case "BODY":
            return e.ownerDocument.body;
        case "#document":
            return e.body
        }
        var t = ke(e),
            n = t.overflow,
            i = t.overflowX,
            o = t.overflowY;
        return /(auto|scroll|overlay)/.test(n + o + i) ? e : Pe(Le(e))
    }
    
    function xe(e) {
        return e && e.referenceNode ? e.referenceNode : e
    }
    var je = Ie && !(!window.MSInputMethodContext || !document.documentMode),
        He = Ie && /MSIE 10/.test(navigator.userAgent);
    
    function Re(e) {
        return 11 === e ? je : 10 === e ? He : je || He
    }
    
    function Fe(e) {
        if (!e) return document.documentElement;
        for (var t = Re(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === ke(n, "position") ? Fe(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
    }
    
    function Me(e) {
        return null !== e.parentNode ? Me(e.parentNode) : e
    }
    
    function We(e, t) {
        if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = n ? e : t,
            o = n ? t : e,
            r = document.createRange();
        r.setStart(i, 0), r.setEnd(o, 0);
        var s = r.commonAncestorContainer;
        if (e !== s && t !== s || i.contains(o)) return function (e) {
            var t = e.nodeName;
            return "BODY" !== t && ("HTML" === t || Fe(e.firstElementChild) === e)
        }(s) ? s : Fe(s);
        var a = Me(e);
        return a.host ? We(a.host, t) : We(e, Me(t).host)
    }
    
    function Ue(e, t) {
        var n = "top" === (1 < arguments.length && void 0 !== t ? t : "top") ? "scrollTop" : "scrollLeft",
            i = e.nodeName;
        if ("BODY" !== i && "HTML" !== i) return e[n];
        var o = e.ownerDocument.documentElement;
        return (e.ownerDocument.scrollingElement || o)[n]
    }
    
    function Be(e, t) {
        var n = "x" === t ? "Left" : "Top",
            i = "Left" == n ? "Right" : "Bottom";
        return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10)
    }
    
    function qe(e, t, n, i) {
        return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], Re(10) ? parseInt(n["offset" + e]) + parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
    }
    
    function Ke(e) {
        var t = e.body,
            n = e.documentElement,
            i = Re(10) && getComputedStyle(n);
        return {
            height: qe("Height", t, n, i),
            width: qe("Width", t, n, i)
        }
    }
    var Qe = function (e, t, n) {
        return t && Ve(e.prototype, t), n && Ve(e, n), e
    };
    
    function Ve(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    
    function Ye(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var ze = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
    };
    
    function Xe(e) {
        return ze({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }
    
    function Ge(e) {
        var t = {};
        try {
            if (Re(10)) {
                t = e.getBoundingClientRect();
                var n = Ue(e, "top"),
                    i = Ue(e, "left");
                t.top += n, t.left += i, t.bottom += n, t.right += i
            } else t = e.getBoundingClientRect()
        } catch (e) {}
        var o = {
                left: t.left,
                top: t.top,
                width: t.right - t.left,
                height: t.bottom - t.top
            },
            r = "HTML" === e.nodeName ? Ke(e.ownerDocument) : {},
            s = r.width || e.clientWidth || o.width,
            a = r.height || e.clientHeight || o.height,
            l = e.offsetWidth - s,
            c = e.offsetHeight - a;
        if (l || c) {
            var h = ke(e);
            l -= Be(h, "x"), c -= Be(h, "y"), o.width -= l, o.height -= c
        }
        return Xe(o)
    }
    
    function $e(e, t, n) {
        var i = 2 < arguments.length && void 0 !== n && n,
            o = Re(10),
            r = "HTML" === t.nodeName,
            s = Ge(e),
            a = Ge(t),
            l = Pe(e),
            c = ke(t),
            h = parseFloat(c.borderTopWidth, 10),
            u = parseFloat(c.borderLeftWidth, 10);
        i && r && (a.top = Math.max(a.top, 0), a.left = Math.max(a.left, 0));
        var f = Xe({
            top: s.top - a.top - h,
            left: s.left - a.left - u,
            width: s.width,
            height: s.height
        });
        if (f.marginTop = 0, f.marginLeft = 0, !o && r) {
            var d = parseFloat(c.marginTop, 10),
                p = parseFloat(c.marginLeft, 10);
            f.top -= h - d, f.bottom -= h - d, f.left -= u - p, f.right -= u - p, f.marginTop = d, f.marginLeft = p
        }
        return (o && !i ? t.contains(l) : t === l && "BODY" !== l.nodeName) && (f = function (e, t, n) {
            var i = 2 < arguments.length && void 0 !== n && n,
                o = Ue(t, "top"),
                r = Ue(t, "left"),
                s = i ? -1 : 1;
            return e.top += o * s, e.bottom += o * s, e.left += r * s, e.right += r * s, e
        }(f, t)), f
    }
    
    function Je(e) {
        if (!e || !e.parentElement || Re()) return document.documentElement;
        for (var t = e.parentElement; t && "none" === ke(t, "transform");) t = t.parentElement;
        return t || document.documentElement
    }
    
    function Ze(e, t, n, i, o) {
        var r = 4 < arguments.length && void 0 !== o && o,
            s = {
                top: 0,
                left: 0
            },
            a = r ? Je(e) : We(e, xe(t));
        if ("viewport" === i) s = function (e, t) {
            var n = 1 < arguments.length && void 0 !== t && t,
                i = e.ownerDocument.documentElement,
                o = $e(e, i),
                r = Math.max(i.clientWidth, window.innerWidth || 0),
                s = Math.max(i.clientHeight, window.innerHeight || 0),
                a = n ? 0 : Ue(i),
                l = n ? 0 : Ue(i, "left");
            return Xe({
                top: a - o.top + o.marginTop,
                left: l - o.left + o.marginLeft,
                width: r,
                height: s
            })
        }(a, r);
        else {
            var l = void 0;
            "scrollParent" === i ? "BODY" === (l = Pe(Le(t))).nodeName && (l = e.ownerDocument.documentElement) : l = "window" === i ? e.ownerDocument.documentElement : i;
            var c = $e(l, a, r);
            if ("HTML" !== l.nodeName || function e(t) {
                    var n = t.nodeName;
                    if ("BODY" === n || "HTML" === n) return !1;
                    if ("fixed" === ke(t, "position")) return !0;
                    var i = Le(t);
                    return !!i && e(i)
                }(a)) s = c;
            else {
                var h = Ke(e.ownerDocument),
                    u = h.height,
                    f = h.width;
                s.top += c.top - c.marginTop, s.bottom = u + c.top, s.left += c.left - c.marginLeft, s.right = f + c.left
            }
        }
        var d = "number" == typeof (n = n || 0);
        return s.left += d ? n : n.left || 0, s.top += d ? n : n.top || 0, s.right -= d ? n : n.right || 0, s.bottom -= d ? n : n.bottom || 0, s
    }
    
    function et(e, t, i, n, o, r) {
        var s = 5 < arguments.length && void 0 !== r ? r : 0;
        if (-1 === e.indexOf("auto")) return e;
        var a = Ze(i, n, s, o),
            l = {
                top: {
                    width: a.width,
                    height: t.top - a.top
                },
                right: {
                    width: a.right - t.right,
                    height: a.height
                },
                bottom: {
                    width: a.width,
                    height: a.bottom - t.bottom
                },
                left: {
                    width: t.left - a.left,
                    height: a.height
                }
            },
            c = Object.keys(l).map(function (e) {
                return ze({
                    key: e
                }, l[e], {
                    area: function (e) {
                        return e.width * e.height
                    }(l[e])
                })
            }).sort(function (e, t) {
                return t.area - e.area
            }),
            h = c.filter(function (e) {
                var t = e.width,
                    n = e.height;
                return t >= i.clientWidth && n >= i.clientHeight
            }),
            u = 0 < h.length ? h[0].key : c[0].key,
            f = e.split("-")[1];
        return u + (f ? "-" + f : "")
    }
    
    function tt(e, t, n, i) {
        var o = 3 < arguments.length && void 0 !== i ? i : null;
        return $e(n, o ? Je(t) : We(t, xe(n)), o)
    }
    
    function nt(e) {
        var t = e.ownerDocument.defaultView.getComputedStyle(e),
            n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
            i = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
        return {
            width: e.offsetWidth + i,
            height: e.offsetHeight + n
        }
    }
    
    function it(e) {
        var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return e.replace(/left|right|bottom|top/g, function (e) {
            return t[e]
        })
    }
    
    function ot(e, t, n) {
        n = n.split("-")[0];
        var i = nt(e),
            o = {
                width: i.width,
                height: i.height
            },
            r = -1 !== ["right", "left"].indexOf(n),
            s = r ? "top" : "left",
            a = r ? "left" : "top",
            l = r ? "height" : "width",
            c = r ? "width" : "height";
        return o[s] = t[s] + t[l] / 2 - i[l] / 2, o[a] = n === a ? t[a] - i[c] : t[it(a)], o
    }
    
    function rt(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }
    
    function st(e, n, t) {
        return (void 0 === t ? e : e.slice(0, function (e, t, n) {
            if (Array.prototype.findIndex) return e.findIndex(function (e) {
                return e[t] === n
            });
            var i = rt(e, function (e) {
                return e[t] === n
            });
            return e.indexOf(i)
        }(e, "name", t))).forEach(function (e) {
            e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var t = e.function || e.fn;
            e.enabled && Ne(t) && (n.offsets.popper = Xe(n.offsets.popper), n.offsets.reference = Xe(n.offsets.reference), n = t(n, e))
        }), n
    }
    
    function at(e, n) {
        return e.some(function (e) {
            var t = e.name;
            return e.enabled && t === n
        })
    }
    
    function lt(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
            var o = t[i],
                r = o ? "" + o + n : e;
            if ("undefined" != typeof document.body.style[r]) return r
        }
        return null
    }
    
    function ct(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }
    
    function ht(e, t, n, i) {
        n.updateBound = i, ct(e).addEventListener("resize", n.updateBound, {
            passive: !0
        });
        var o = Pe(e);
        return function e(t, n, i, o) {
            var r = "BODY" === t.nodeName,
                s = r ? t.ownerDocument.defaultView : t;
            s.addEventListener(n, i, {
                passive: !0
            }), r || e(Pe(s.parentNode), n, i, o), o.push(s)
        }(o, "scroll", n.updateBound, n.scrollParents), n.scrollElement = o, n.eventsEnabled = !0, n
    }
    
    function ut() {
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = function (e, t) {
            return ct(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function (e) {
                e.removeEventListener("scroll", t.updateBound)
            }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
        }(this.reference, this.state))
    }
    
    function ft(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }
    
    function dt(n, i) {
        Object.keys(i).forEach(function (e) {
            var t = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(e) && ft(i[e]) && (t = "px"), n.style[e] = i[e] + t
        })
    }
    
    function pt(e, t) {
        function n(e) {
            return e
        }
        var i = e.offsets,
            o = i.popper,
            r = i.reference,
            s = Math.round,
            a = Math.floor,
            l = s(r.width),
            c = s(o.width),
            h = -1 !== ["left", "right"].indexOf(e.placement),
            u = -1 !== e.placement.indexOf("-"),
            f = t ? h || u || l % 2 == c % 2 ? s : a : n,
            d = t ? s : n;
        return {
            left: f(l % 2 == 1 && c % 2 == 1 && !u && t ? o.left - 1 : o.left),
            top: d(o.top),
            bottom: d(o.bottom),
            right: f(o.right)
        }
    }
    var mt = Ie && /Firefox/i.test(navigator.userAgent);
    
    function gt(e, t, n) {
        var i = rt(e, function (e) {
                return e.name === t
            }),
            o = !!i && e.some(function (e) {
                return e.name === n && e.enabled && e.order < i.order
            });
        if (!o) {
            var r = "`" + t + "`",
                s = "`" + n + "`";
            console.warn(s + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!")
        }
        return o
    }
    var _t = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        vt = _t.slice(3);
    
    function yt(e, t) {
        var n = 1 < arguments.length && void 0 !== t && t,
            i = vt.indexOf(e),
            o = vt.slice(i + 1).concat(vt.slice(0, i));
        return n ? o.reverse() : o
    }
    var Et = "flip",
        bt = "clockwise",
        wt = "counterclockwise";
    
    function Tt(e, o, r, t) {
        var s = [0, 0],
            a = -1 !== ["right", "left"].indexOf(t),
            n = e.split(/(\+|\-)/).map(function (e) {
                return e.trim()
            }),
            i = n.indexOf(rt(n, function (e) {
                return -1 !== e.search(/,|\s/)
            }));
        n[i] && -1 === n[i].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/,
            c = -1 !== i ? [n.slice(0, i).concat([n[i].split(l)[0]]), [n[i].split(l)[1]].concat(n.slice(i + 1))] : [n];
        return (c = c.map(function (e, t) {
            var n = (1 === t ? !a : a) ? "height" : "width",
                i = !1;
            return e.reduce(function (e, t) {
                return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, i = !0, e) : i ? (e[e.length - 1] += t, i = !1, e) : e.concat(t)
            }, []).map(function (e) {
                return function (e, t, n, i) {
                    var o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                        r = +o[1],
                        s = o[2];
                    if (!r) return e;
                    if (0 !== s.indexOf("%")) return "vh" !== s && "vw" !== s ? r : ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r;
                    var a = void 0;
                    switch (s) {
                    case "%p":
                        a = n;
                        break;
                    case "%":
                    case "%r":
                    default:
                        a = i
                    }
                    return Xe(a)[t] / 100 * r
                }(e, n, o, r)
            })
        })).forEach(function (n, i) {
            n.forEach(function (e, t) {
                ft(e) && (s[i] += e * ("-" === n[t - 1] ? -1 : 1))
            })
        }), s
    }
    var Ct = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function () {},
            onUpdate: function () {},
            modifiers: {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: function (e) {
                        var t = e.placement,
                            n = t.split("-")[0],
                            i = t.split("-")[1];
                        if (i) {
                            var o = e.offsets,
                                r = o.reference,
                                s = o.popper,
                                a = -1 !== ["bottom", "top"].indexOf(n),
                                l = a ? "left" : "top",
                                c = a ? "width" : "height",
                                h = {
                                    start: Ye({}, l, r[l]),
                                    end: Ye({}, l, r[l] + r[c] - s[c])
                                };
                            e.offsets.popper = ze({}, s, h[i])
                        }
                        return e
                    }
                },
                offset: {
                    order: 200,
                    enabled: !0,
                    fn: function (e, t) {
                        var n = t.offset,
                            i = e.placement,
                            o = e.offsets,
                            r = o.popper,
                            s = o.reference,
                            a = i.split("-")[0],
                            l = void 0;
                        return l = ft(+n) ? [+n, 0] : Tt(n, r, s, a), "left" === a ? (r.top += l[0], r.left -= l[1]) : "right" === a ? (r.top += l[0], r.left += l[1]) : "top" === a ? (r.left += l[0], r.top -= l[1]) : "bottom" === a && (r.left += l[0], r.top += l[1]), e.popper = r, e
                    },
                    offset: 0
                },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: function (e, i) {
                        var t = i.boundariesElement || Fe(e.instance.popper);
                        e.instance.reference === t && (t = Fe(t));
                        var n = lt("transform"),
                            o = e.instance.popper.style,
                            r = o.top,
                            s = o.left,
                            a = o[n];
                        o.top = "", o.left = "", o[n] = "";
                        var l = Ze(e.instance.popper, e.instance.reference, i.padding, t, e.positionFixed);
                        o.top = r, o.left = s, o[n] = a, i.boundaries = l;
                        var c = i.priority,
                            h = e.offsets.popper,
                            u = {
                                primary: function (e) {
                                    var t = h[e];
                                    return h[e] < l[e] && !i.escapeWithReference && (t = Math.max(h[e], l[e])), Ye({}, e, t)
                                },
                                secondary: function (e) {
                                    var t = "right" === e ? "left" : "top",
                                        n = h[t];
                                    return h[e] > l[e] && !i.escapeWithReference && (n = Math.min(h[t], l[e] - ("right" === e ? h.width : h.height))), Ye({}, t, n)
                                }
                            };
                        return c.forEach(function (e) {
                            var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                            h = ze({}, h, u[t](e))
                        }), e.offsets.popper = h, e
                    },
                    priority: ["left", "right", "top", "bottom"],
                    padding: 5,
                    boundariesElement: "scrollParent"
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: function (e) {
                        var t = e.offsets,
                            n = t.popper,
                            i = t.reference,
                            o = e.placement.split("-")[0],
                            r = Math.floor,
                            s = -1 !== ["top", "bottom"].indexOf(o),
                            a = s ? "right" : "bottom",
                            l = s ? "left" : "top",
                            c = s ? "width" : "height";
                        return n[a] < r(i[l]) && (e.offsets.popper[l] = r(i[l]) - n[c]), n[l] > r(i[a]) && (e.offsets.popper[l] = r(i[a])), e
                    }
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: function (e, t) {
                        var n;
                        if (!gt(e.instance.modifiers, "arrow", "keepTogether")) return e;
                        var i = t.element;
                        if ("string" == typeof i) {
                            if (!(i = e.instance.popper.querySelector(i))) return e
                        } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                        var o = e.placement.split("-")[0],
                            r = e.offsets,
                            s = r.popper,
                            a = r.reference,
                            l = -1 !== ["left", "right"].indexOf(o),
                            c = l ? "height" : "width",
                            h = l ? "Top" : "Left",
                            u = h.toLowerCase(),
                            f = l ? "left" : "top",
                            d = l ? "bottom" : "right",
                            p = nt(i)[c];
                        a[d] - p < s[u] && (e.offsets.popper[u] -= s[u] - (a[d] - p)), a[u] + p > s[d] && (e.offsets.popper[u] += a[u] + p - s[d]), e.offsets.popper = Xe(e.offsets.popper);
                        var m = a[u] + a[c] / 2 - p / 2,
                            g = ke(e.instance.popper),
                            _ = parseFloat(g["margin" + h], 10),
                            v = parseFloat(g["border" + h + "Width"], 10),
                            y = m - e.offsets.popper[u] - _ - v;
                        return y = Math.max(Math.min(s[c] - p, y), 0), e.arrowElement = i, e.offsets.arrow = (Ye(n = {}, u, Math.round(y)), Ye(n, f, ""), n), e
                    },
                    element: "[x-arrow]"
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: function (m, g) {
                        if (at(m.instance.modifiers, "inner")) return m;
                        if (m.flipped && m.placement === m.originalPlacement) return m;
                        var _ = Ze(m.instance.popper, m.instance.reference, g.padding, g.boundariesElement, m.positionFixed),
                            v = m.placement.split("-")[0],
                            y = it(v),
                            E = m.placement.split("-")[1] || "",
                            b = [];
                        switch (g.behavior) {
                        case Et:
                            b = [v, y];
                            break;
                        case bt:
                            b = yt(v);
                            break;
                        case wt:
                            b = yt(v, !0);
                            break;
                        default:
                            b = g.behavior
                        }
                        return b.forEach(function (e, t) {
                            if (v !== e || b.length === t + 1) return m;
                            v = m.placement.split("-")[0], y = it(v);
                            var n = m.offsets.popper,
                                i = m.offsets.reference,
                                o = Math.floor,
                                r = "left" === v && o(n.right) > o(i.left) || "right" === v && o(n.left) < o(i.right) || "top" === v && o(n.bottom) > o(i.top) || "bottom" === v && o(n.top) < o(i.bottom),
                                s = o(n.left) < o(_.left),
                                a = o(n.right) > o(_.right),
                                l = o(n.top) < o(_.top),
                                c = o(n.bottom) > o(_.bottom),
                                h = "left" === v && s || "right" === v && a || "top" === v && l || "bottom" === v && c,
                                u = -1 !== ["top", "bottom"].indexOf(v),
                                f = !!g.flipVariations && (u && "start" === E && s || u && "end" === E && a || !u && "start" === E && l || !u && "end" === E && c),
                                d = !!g.flipVariationsByContent && (u && "start" === E && a || u && "end" === E && s || !u && "start" === E && c || !u && "end" === E && l),
                                p = f || d;
                            (r || h || p) && (m.flipped = !0, (r || h) && (v = b[t + 1]), p && (E = function (e) {
                                return "end" === e ? "start" : "start" === e ? "end" : e
                            }(E)), m.placement = v + (E ? "-" + E : ""), m.offsets.popper = ze({}, m.offsets.popper, ot(m.instance.popper, m.offsets.reference, m.placement)), m = st(m.instance.modifiers, m, "flip"))
                        }), m
                    },
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport",
                    flipVariations: !1,
                    flipVariationsByContent: !1
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: function (e) {
                        var t = e.placement,
                            n = t.split("-")[0],
                            i = e.offsets,
                            o = i.popper,
                            r = i.reference,
                            s = -1 !== ["left", "right"].indexOf(n),
                            a = -1 === ["top", "left"].indexOf(n);
                        return o[s ? "left" : "top"] = r[n] - (a ? o[s ? "width" : "height"] : 0), e.placement = it(t), e.offsets.popper = Xe(o), e
                    }
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: function (e) {
                        if (!gt(e.instance.modifiers, "hide", "preventOverflow")) return e;
                        var t = e.offsets.reference,
                            n = rt(e.instance.modifiers, function (e) {
                                return "preventOverflow" === e.name
                            }).boundaries;
                        if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                            if (!0 === e.hide) return e;
                            e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                        } else {
                            if (!1 === e.hide) return e;
                            e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                        }
                        return e
                    }
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: function (e, t) {
                        var n = t.x,
                            i = t.y,
                            o = e.offsets.popper,
                            r = rt(e.instance.modifiers, function (e) {
                                return "applyStyle" === e.name
                            }).gpuAcceleration;
                        void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                        var s = void 0 !== r ? r : t.gpuAcceleration,
                            a = Fe(e.instance.popper),
                            l = Ge(a),
                            c = {
                                position: o.position
                            },
                            h = pt(e, window.devicePixelRatio < 2 || !mt),
                            u = "bottom" === n ? "top" : "bottom",
                            f = "right" === i ? "left" : "right",
                            d = lt("transform"),
                            p = void 0,
                            m = void 0;
                        if (m = "bottom" == u ? "HTML" === a.nodeName ? -a.clientHeight + h.bottom : -l.height + h.bottom : h.top, p = "right" == f ? "HTML" === a.nodeName ? -a.clientWidth + h.right : -l.width + h.right : h.left, s && d) c[d] = "translate3d(" + p + "px, " + m + "px, 0)", c[u] = 0, c[f] = 0, c.willChange = "transform";
                        else {
                            var g = "bottom" == u ? -1 : 1,
                                _ = "right" == f ? -1 : 1;
                            c[u] = m * g, c[f] = p * _, c.willChange = u + ", " + f
                        }
                        var v = {
                            "x-placement": e.placement
                        };
                        return e.attributes = ze({}, v, e.attributes), e.styles = ze({}, c, e.styles), e.arrowStyles = ze({}, e.offsets.arrow, e.arrowStyles), e
                    },
                    gpuAcceleration: !0,
                    x: "bottom",
                    y: "right"
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: function (e) {
                        return dt(e.instance.popper, e.styles),
                            function (t, n) {
                                Object.keys(n).forEach(function (e) {
                                    !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
                                })
                            }(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && dt(e.arrowElement, e.arrowStyles), e
                    },
                    onLoad: function (e, t, n, i, o) {
                        var r = tt(o, t, e, n.positionFixed),
                            s = et(n.placement, r, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                        return t.setAttribute("x-placement", s), dt(t, {
                            position: n.positionFixed ? "fixed" : "absolute"
                        }), n
                    },
                    gpuAcceleration: void 0
                }
            }
        },
        St = (Qe(Dt, [{
            key: "update",
            value: function () {
                return function () {
                    if (!this.state.isDestroyed) {
                        var e = {
                            instance: this,
                            styles: {},
                            arrowStyles: {},
                            attributes: {},
                            flipped: !1,
                            offsets: {}
                        };
                        e.offsets.reference = tt(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = et(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = ot(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = st(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
                    }
                }.call(this)
            }
        }, {
            key: "destroy",
            value: function () {
                return function () {
                    return this.state.isDestroyed = !0, at(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[lt("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                }.call(this)
            }
        }, {
            key: "enableEventListeners",
            value: function () {
                return function () {
                    this.state.eventsEnabled || (this.state = ht(this.reference, this.options, this.state, this.scheduleUpdate))
                }.call(this)
            }
        }, {
            key: "disableEventListeners",
            value: function () {
                return ut.call(this)
            }
        }]), Dt);
    
    function Dt(e, t) {
        var n = this,
            i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
        ! function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, Dt), this.scheduleUpdate = function () {
            return requestAnimationFrame(n.update)
        }, this.update = Oe(this.update.bind(this)), this.options = ze({}, Dt.Defaults, i), this.state = {
            isDestroyed: !1,
            isCreated: !1,
            scrollParents: []
        }, this.reference = e && e.jquery ? e[0] : e, this.popper = t && t.jquery ? t[0] : t, this.options.modifiers = {}, Object.keys(ze({}, Dt.Defaults.modifiers, i.modifiers)).forEach(function (e) {
            n.options.modifiers[e] = ze({}, Dt.Defaults.modifiers[e] || {}, i.modifiers ? i.modifiers[e] : {})
        }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
            return ze({
                name: e
            }, n.options.modifiers[e])
        }).sort(function (e, t) {
            return e.order - t.order
        }), this.modifiers.forEach(function (e) {
            e.enabled && Ne(e.onLoad) && e.onLoad(n.reference, n.popper, n.options, e, n.state)
        }), this.update();
        var o = this.options.eventsEnabled;
        o && this.enableEventListeners(), this.state.eventsEnabled = o
    }
    St.Utils = ("undefined" != typeof window ? window : global).PopperUtils, St.placements = _t, St.Defaults = Ct;
    var It = "dropdown",
        At = "bs.dropdown",
        Ot = "." + At,
        Nt = ".data-api",
        kt = p.fn[It],
        Lt = new RegExp("38|40|27"),
        Pt = {
            HIDE: "hide" + Ot,
            HIDDEN: "hidden" + Ot,
            SHOW: "show" + Ot,
            SHOWN: "shown" + Ot,
            CLICK: "click" + Ot,
            CLICK_DATA_API: "click" + Ot + Nt,
            KEYDOWN_DATA_API: "keydown" + Ot + Nt,
            KEYUP_DATA_API: "keyup" + Ot + Nt
        },
        xt = "disabled",
        jt = "show",
        Ht = "dropup",
        Rt = "dropright",
        Ft = "dropleft",
        Mt = "dropdown-menu-right",
        Wt = "position-static",
        Ut = '[data-toggle="dropdown"]',
        Bt = ".dropdown form",
        qt = ".dropdown-menu",
        Kt = ".navbar-nav",
        Qt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
        Vt = "top-start",
        Yt = "top-end",
        zt = "bottom-start",
        Xt = "bottom-end",
        Gt = "right-start",
        $t = "left-start",
        Jt = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic",
            popperConfig: null
        },
        Zt = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string",
            popperConfig: "(null|object)"
        },
        en = function () {
            function c(e, t) {
                this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }
            var e = c.prototype;
            return e.toggle = function () {
                if (!this._element.disabled && !p(this._element).hasClass(xt)) {
                    var e = p(this._menu).hasClass(jt);
                    c._clearMenus(), e || this.show(!0)
                }
            }, e.show = function (e) {
                if (void 0 === e && (e = !1), !(this._element.disabled || p(this._element).hasClass(xt) || p(this._menu).hasClass(jt))) {
                    var t = {
                            relatedTarget: this._element
                        },
                        n = p.Event(Pt.SHOW, t),
                        i = c._getParentFromElement(this._element);
                    if (p(i).trigger(n), !n.isDefaultPrevented()) {
                        if (!this._inNavbar && e) {
                            if ("undefined" == typeof St) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                            var o = this._element;
                            "parent" === this._config.reference ? o = i : m.isElement(this._config.reference) && (o = this._config.reference, "undefined" != typeof this._config.reference.jquery && (o = this._config.reference[0])), "scrollParent" !== this._config.boundary && p(i).addClass(Wt), this._popper = new St(o, this._menu, this._getPopperConfig())
                        }
                        "ontouchstart" in document.documentElement && 0 === p(i).closest(Kt).length && p(document.body).children().on("mouseover", null, p.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), p(this._menu).toggleClass(jt), p(i).toggleClass(jt).trigger(p.Event(Pt.SHOWN, t))
                    }
                }
            }, e.hide = function () {
                if (!this._element.disabled && !p(this._element).hasClass(xt) && p(this._menu).hasClass(jt)) {
                    var e = {
                            relatedTarget: this._element
                        },
                        t = p.Event(Pt.HIDE, e),
                        n = c._getParentFromElement(this._element);
                    p(n).trigger(t), t.isDefaultPrevented() || (this._popper && this._popper.destroy(), p(this._menu).toggleClass(jt), p(n).toggleClass(jt).trigger(p.Event(Pt.HIDDEN, e)))
                }
            }, e.dispose = function () {
                p.removeData(this._element, At), p(this._element).off(Ot), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
            }, e.update = function () {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
            }, e._addEventListeners = function () {
                var t = this;
                p(this._element).on(Pt.CLICK, function (e) {
                    e.preventDefault(), e.stopPropagation(), t.toggle()
                })
            }, e._getConfig = function (e) {
                return e = l({}, this.constructor.Default, {}, p(this._element).data(), {}, e), m.typeCheckConfig(It, e, this.constructor.DefaultType), e
            }, e._getMenuElement = function () {
                if (!this._menu) {
                    var e = c._getParentFromElement(this._element);
                    e && (this._menu = e.querySelector(qt))
                }
                return this._menu
            }, e._getPlacement = function () {
                var e = p(this._element.parentNode),
                    t = zt;
                return e.hasClass(Ht) ? (t = Vt, p(this._menu).hasClass(Mt) && (t = Yt)) : e.hasClass(Rt) ? t = Gt : e.hasClass(Ft) ? t = $t : p(this._menu).hasClass(Mt) && (t = Xt), t
            }, e._detectNavbar = function () {
                return 0 < p(this._element).closest(".navbar").length
            }, e._getOffset = function () {
                var t = this,
                    e = {};
                return "function" == typeof this._config.offset ? e.fn = function (e) {
                    return e.offsets = l({}, e.offsets, {}, t._config.offset(e.offsets, t._element) || {}), e
                } : e.offset = this._config.offset, e
            }, e._getPopperConfig = function () {
                var e = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            enabled: this._config.flip
                        },
                        preventOverflow: {
                            boundariesElement: this._config.boundary
                        }
                    }
                };
                return "static" === this._config.display && (e.modifiers.applyStyle = {
                    enabled: !1
                }), l({}, e, {}, this._config.popperConfig)
            }, c._jQueryInterface = function (t) {
                return this.each(function () {
                    var e = p(this).data(At);
                    if (e || (e = new c(this, "object" == typeof t ? t : null), p(this).data(At, e)), "string" == typeof t) {
                        if ("undefined" == typeof e[t]) throw new TypeError('No method named "' + t + '"');
                        e[t]()
                    }
                })
            }, c._clearMenus = function (e) {
                if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                    for (var t = [].slice.call(document.querySelectorAll(Ut)), n = 0, i = t.length; n < i; n++) {
                        var o = c._getParentFromElement(t[n]),
                            r = p(t[n]).data(At),
                            s = {
                                relatedTarget: t[n]
                            };
                        if (e && "click" === e.type && (s.clickEvent = e), r) {
                            var a = r._menu;
                            if (p(o).hasClass(jt) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && p.contains(o, e.target))) {
                                var l = p.Event(Pt.HIDE, s);
                                p(o).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && p(document.body).children().off("mouseover", null, p.noop), t[n].setAttribute("aria-expanded", "false"), r._popper && r._popper.destroy(), p(a).removeClass(jt), p(o).removeClass(jt).trigger(p.Event(Pt.HIDDEN, s)))
                            }
                        }
                    }
            }, c._getParentFromElement = function (e) {
                var t, n = m.getSelectorFromElement(e);
                return n && (t = document.querySelector(n)), t || e.parentNode
            }, c._dataApiKeydownHandler = function (e) {
                if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || p(e.target).closest(qt).length)) : Lt.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !p(this).hasClass(xt))) {
                    var t = c._getParentFromElement(this),
                        n = p(t).hasClass(jt);
                    if (n || 27 !== e.which)
                        if (n && (!n || 27 !== e.which && 32 !== e.which)) {
                            var i = [].slice.call(t.querySelectorAll(Qt)).filter(function (e) {
                                return p(e).is(":visible")
                            });
                            if (0 !== i.length) {
                                var o = i.indexOf(e.target);
                                38 === e.which && 0 < o && o--, 40 === e.which && o < i.length - 1 && o++, o < 0 && (o = 0), i[o].focus()
                            }
                        } else {
                            if (27 === e.which) {
                                var r = t.querySelector(Ut);
                                p(r).trigger("focus")
                            }
                            p(this).trigger("click")
                        }
                }
            }, s(c, null, [{
                key: "VERSION",
                get: function () {
                    return "4.4.1"
                }
            }, {
                key: "Default",
                get: function () {
                    return Jt
                }
            }, {
                key: "DefaultType",
                get: function () {
                    return Zt
                }
            }]), c
        }();
    p(document).on(Pt.KEYDOWN_DATA_API, Ut, en._dataApiKeydownHandler).on(Pt.KEYDOWN_DATA_API, qt, en._dataApiKeydownHandler).on(Pt.CLICK_DATA_API + " " + Pt.KEYUP_DATA_API, en._clearMenus).on(Pt.CLICK_DATA_API, Ut, function (e) {
        e.preventDefault(), e.stopPropagation(), en._jQueryInterface.call(p(this), "toggle")
    }).on(Pt.CLICK_DATA_API, Bt, function (e) {
        e.stopPropagation()
    }), p.fn[It] = en._jQueryInterface, p.fn[It].Constructor = en, p.fn[It].noConflict = function () {
        return p.fn[It] = kt, en._jQueryInterface
    };
    var tn = "modal",
        nn = "bs.modal",
        on = "." + nn,
        rn = p.fn[tn],
        sn = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        },
        an = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        },
        ln = {
            HIDE: "hide" + on,
            HIDE_PREVENTED: "hidePrevented" + on,
            HIDDEN: "hidden" + on,
            SHOW: "show" + on,
            SHOWN: "shown" + on,
            FOCUSIN: "focusin" + on,
            RESIZE: "resize" + on,
            CLICK_DISMISS: "click.dismiss" + on,
            KEYDOWN_DISMISS: "keydown.dismiss" + on,
            MOUSEUP_DISMISS: "mouseup.dismiss" + on,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + on,
            CLICK_DATA_API: "click" + on + ".data-api"
        },
        cn = "modal-dialog-scrollable",
        hn = "modal-scrollbar-measure",
        un = "modal-backdrop",
        fn = "modal-open",
        dn = "fade",
        pn = "show",
        mn = "modal-static",
        gn = ".modal-dialog",
        _n = ".modal-body",
        vn = '[data-toggle="modal"]',
        yn = '[data-dismiss="modal"]',
        En = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        bn = ".sticky-top",
        wn = function () {
            function o(e, t) {
                this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(gn), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
            }
            var e = o.prototype;
            return e.toggle = function (e) {
                return this._isShown ? this.hide() : this.show(e)
            }, e.show = function (e) {
                var t = this;
                if (!this._isShown && !this._isTransitioning) {
                    p(this._element).hasClass(dn) && (this._isTransitioning = !0);
                    var n = p.Event(ln.SHOW, {
                        relatedTarget: e
                    });
                    p(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), p(this._element).on(ln.CLICK_DISMISS, yn, function (e) {
                        return t.hide(e)
                    }), p(this._dialog).on(ln.MOUSEDOWN_DISMISS, function () {
                        p(t._element).one(ln.MOUSEUP_DISMISS, function (e) {
                            p(e.target).is(t._element) && (t._ignoreBackdropClick = !0)
                        })
                    }), this._showBackdrop(function () {
                        return t._showElement(e)
                    }))
                }
            }, e.hide = function (e) {
                var t = this;
                if (e && e.preventDefault(), this._isShown && !this._isTransitioning) {
                    var n = p.Event(ln.HIDE);
                    if (p(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                        this._isShown = !1;
                        var i = p(this._element).hasClass(dn);
                        if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), p(document).off(ln.FOCUSIN), p(this._element).removeClass(pn), p(this._element).off(ln.CLICK_DISMISS), p(this._dialog).off(ln.MOUSEDOWN_DISMISS), i) {
                            var o = m.getTransitionDurationFromElement(this._element);
                            p(this._element).one(m.TRANSITION_END, function (e) {
                                return t._hideModal(e)
                            }).emulateTransitionEnd(o)
                        } else this._hideModal()
                    }
                }
            }, e.dispose = function () {
                [window, this._element, this._dialog].forEach(function (e) {
                    return p(e).off(on)
                }), p(document).off(ln.FOCUSIN), p.removeData(this._element, nn), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
            }, e.handleUpdate = function () {
                this._adjustDialog()
            }, e._getConfig = function (e) {
                return e = l({}, sn, {}, e), m.typeCheckConfig(tn, e, an), e
            }, e._triggerBackdropTransition = function () {
                var e = this;
                if ("static" === this._config.backdrop) {
                    var t = p.Event(ln.HIDE_PREVENTED);
                    if (p(this._element).trigger(t), t.defaultPrevented) return;
                    this._element.classList.add(mn);
                    var n = m.getTransitionDurationFromElement(this._element);
                    p(this._element).one(m.TRANSITION_END, function () {
                        e._element.classList.remove(mn)
                    }).emulateTransitionEnd(n), this._element.focus()
                } else this.hide()
            }, e._showElement = function (e) {
                var t = this,
                    n = p(this._element).hasClass(dn),
                    i = this._dialog ? this._dialog.querySelector(_n) : null;
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), p(this._dialog).hasClass(cn) && i ? i.scrollTop = 0 : this._element.scrollTop = 0, n && m.reflow(this._element), p(this._element).addClass(pn), this._config.focus && this._enforceFocus();
                
                function o() {
                    t._config.focus && t._element.focus(), t._isTransitioning = !1, p(t._element).trigger(r)
                }
                var r = p.Event(ln.SHOWN, {
                    relatedTarget: e
                });
                if (n) {
                    var s = m.getTransitionDurationFromElement(this._dialog);
                    p(this._dialog).one(m.TRANSITION_END, o).emulateTransitionEnd(s)
                } else o()
            }, e._enforceFocus = function () {
                var t = this;
                p(document).off(ln.FOCUSIN).on(ln.FOCUSIN, function (e) {
                    document !== e.target && t._element !== e.target && 0 === p(t._element).has(e.target).length && t._element.focus()
                })
            }, e._setEscapeEvent = function () {
                var t = this;
                this._isShown && this._config.keyboard ? p(this._element).on(ln.KEYDOWN_DISMISS, function (e) {
                    27 === e.which && t._triggerBackdropTransition()
                }) : this._isShown || p(this._element).off(ln.KEYDOWN_DISMISS)
            }, e._setResizeEvent = function () {
                var t = this;
                this._isShown ? p(window).on(ln.RESIZE, function (e) {
                    return t.handleUpdate(e)
                }) : p(window).off(ln.RESIZE)
            }, e._hideModal = function () {
                var e = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function () {
                    p(document.body).removeClass(fn), e._resetAdjustments(), e._resetScrollbar(), p(e._element).trigger(ln.HIDDEN)
                })
            }, e._removeBackdrop = function () {
                this._backdrop && (p(this._backdrop).remove(), this._backdrop = null)
            }, e._showBackdrop = function (e) {
                var t = this,
                    n = p(this._element).hasClass(dn) ? dn : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = un, n && this._backdrop.classList.add(n), p(this._backdrop).appendTo(document.body), p(this._element).on(ln.CLICK_DISMISS, function (e) {
                            t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && t._triggerBackdropTransition()
                        }), n && m.reflow(this._backdrop), p(this._backdrop).addClass(pn), !e) return;
                    if (!n) return void e();
                    var i = m.getTransitionDurationFromElement(this._backdrop);
                    p(this._backdrop).one(m.TRANSITION_END, e).emulateTransitionEnd(i)
                } else if (!this._isShown && this._backdrop) {
                    p(this._backdrop).removeClass(pn);
                    var o = function () {
                        t._removeBackdrop(), e && e()
                    };
                    if (p(this._element).hasClass(dn)) {
                        var r = m.getTransitionDurationFromElement(this._backdrop);
                        p(this._backdrop).one(m.TRANSITION_END, o).emulateTransitionEnd(r)
                    } else o()
                } else e && e()
            }, e._adjustDialog = function () {
                var e = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, e._resetAdjustments = function () {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, e._checkScrollbar = function () {
                var e = document.body.getBoundingClientRect();
                this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, e._setScrollbar = function () {
                var o = this;
                if (this._isBodyOverflowing) {
                    var e = [].slice.call(document.querySelectorAll(En)),
                        t = [].slice.call(document.querySelectorAll(bn));
                    p(e).each(function (e, t) {
                        var n = t.style.paddingRight,
                            i = p(t).css("padding-right");
                        p(t).data("padding-right", n).css("padding-right", parseFloat(i) + o._scrollbarWidth + "px")
                    }), p(t).each(function (e, t) {
                        var n = t.style.marginRight,
                            i = p(t).css("margin-right");
                        p(t).data("margin-right", n).css("margin-right", parseFloat(i) - o._scrollbarWidth + "px")
                    });
                    var n = document.body.style.paddingRight,
                        i = p(document.body).css("padding-right");
                    p(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
                }
                p(document.body).addClass(fn)
            }, e._resetScrollbar = function () {
                var e = [].slice.call(document.querySelectorAll(En));
                p(e).each(function (e, t) {
                    var n = p(t).data("padding-right");
                    p(t).removeData("padding-right"), t.style.paddingRight = n || ""
                });
                var t = [].slice.call(document.querySelectorAll("" + bn));
                p(t).each(function (e, t) {
                    var n = p(t).data("margin-right");
                    "undefined" != typeof n && p(t).css("margin-right", n).removeData("margin-right")
                });
                var n = p(document.body).data("padding-right");
                p(document.body).removeData("padding-right"), document.body.style.paddingRight = n || ""
            }, e._getScrollbarWidth = function () {
                var e = document.createElement("div");
                e.className = hn, document.body.appendChild(e);
                var t = e.getBoundingClientRect().width - e.clientWidth;
                return document.body.removeChild(e), t
            }, o._jQueryInterface = function (n, i) {
                return this.each(function () {
                    var e = p(this).data(nn),
                        t = l({}, sn, {}, p(this).data(), {}, "object" == typeof n && n ? n : {});
                    if (e || (e = new o(this, t), p(this).data(nn, e)), "string" == typeof n) {
                        if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n](i)
                    } else t.show && e.show(i)
                })
            }, s(o, null, [{
                key: "VERSION",
                get: function () {
                    return "4.4.1"
                }
            }, {
                key: "Default",
                get: function () {
                    return sn
                }
            }]), o
        }();
    p(document).on(ln.CLICK_DATA_API, vn, function (e) {
        var t, n = this,
            i = m.getSelectorFromElement(this);
        i && (t = document.querySelector(i));
        var o = p(t).data(nn) ? "toggle" : l({}, p(t).data(), {}, p(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
        var r = p(t).one(ln.SHOW, function (e) {
            e.isDefaultPrevented() || r.one(ln.HIDDEN, function () {
                p(n).is(":visible") && n.focus()
            })
        });
        wn._jQueryInterface.call(p(t), o, this)
    }), p.fn[tn] = wn._jQueryInterface, p.fn[tn].Constructor = wn, p.fn[tn].noConflict = function () {
        return p.fn[tn] = rn, wn._jQueryInterface
    };
    var Tn = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        Cn = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        },
        Sn = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        Dn = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
    
    function In(e, r, t) {
        if (0 === e.length) return e;
        if (t && "function" == typeof t) return t(e);
        for (var n = (new window.DOMParser).parseFromString(e, "text/html"), s = Object.keys(r), a = [].slice.call(n.body.querySelectorAll("*")), i = function (e) {
                var t = a[e],
                    n = t.nodeName.toLowerCase();
                if (-1 === s.indexOf(t.nodeName.toLowerCase())) return t.parentNode.removeChild(t), "continue";
                var i = [].slice.call(t.attributes),
                    o = [].concat(r["*"] || [], r[n] || []);
                i.forEach(function (e) {
                    ! function (e, t) {
                        var n = e.nodeName.toLowerCase();
                        if (-1 !== t.indexOf(n)) return -1 === Tn.indexOf(n) || Boolean(e.nodeValue.match(Sn) || e.nodeValue.match(Dn));
                        for (var i = t.filter(function (e) {
                                return e instanceof RegExp
                            }), o = 0, r = i.length; o < r; o++)
                            if (n.match(i[o])) return !0;
                        return !1
                    }(e, o) && t.removeAttribute(e.nodeName)
                })
            }, o = 0, l = a.length; o < l; o++) i(o);
        return n.body.innerHTML
    }
    var An = "tooltip",
        On = "bs.tooltip",
        Nn = "." + On,
        kn = p.fn[An],
        Ln = "bs-tooltip",
        Pn = new RegExp("(^|\\s)" + Ln + "\\S+", "g"),
        xn = ["sanitize", "whiteList", "sanitizeFn"],
        jn = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object",
            popperConfig: "(null|object)"
        },
        Hn = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        },
        Rn = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: Cn,
            popperConfig: null
        },
        Fn = "show",
        Mn = "out",
        Wn = {
            HIDE: "hide" + Nn,
            HIDDEN: "hidden" + Nn,
            SHOW: "show" + Nn,
            SHOWN: "shown" + Nn,
            INSERTED: "inserted" + Nn,
            CLICK: "click" + Nn,
            FOCUSIN: "focusin" + Nn,
            FOCUSOUT: "focusout" + Nn,
            MOUSEENTER: "mouseenter" + Nn,
            MOUSELEAVE: "mouseleave" + Nn
        },
        Un = "fade",
        Bn = "show",
        qn = ".tooltip-inner",
        Kn = ".arrow",
        Qn = "hover",
        Vn = "focus",
        Yn = "click",
        zn = "manual",
        Xn = function () {
            function i(e, t) {
                if ("undefined" == typeof St) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
            }
            var e = i.prototype;
            return e.enable = function () {
                this._isEnabled = !0
            }, e.disable = function () {
                this._isEnabled = !1
            }, e.toggleEnabled = function () {
                this._isEnabled = !this._isEnabled
            }, e.toggle = function (e) {
                if (this._isEnabled)
                    if (e) {
                        var t = this.constructor.DATA_KEY,
                            n = p(e.currentTarget).data(t);
                        n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), p(e.currentTarget).data(t, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                    } else {
                        if (p(this.getTipElement()).hasClass(Bn)) return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }, e.dispose = function () {
                clearTimeout(this._timeout), p.removeData(this.element, this.constructor.DATA_KEY), p(this.element).off(this.constructor.EVENT_KEY), p(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && p(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, e.show = function () {
                var t = this;
                if ("none" === p(this.element).css("display")) throw new Error("Please use show on visible elements");
                var e = p.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    p(this.element).trigger(e);
                    var n = m.findShadowRoot(this.element),
                        i = p.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
                    if (e.isDefaultPrevented() || !i) return;
                    var o = this.getTipElement(),
                        r = m.getUID(this.constructor.NAME);
                    o.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && p(o).addClass(Un);
                    var s = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
                        a = this._getAttachment(s);
                    this.addAttachmentClass(a);
                    var l = this._getContainer();
                    p(o).data(this.constructor.DATA_KEY, this), p.contains(this.element.ownerDocument.documentElement, this.tip) || p(o).appendTo(l), p(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new St(this.element, o, this._getPopperConfig(a)), p(o).addClass(Bn), "ontouchstart" in document.documentElement && p(document.body).children().on("mouseover", null, p.noop);
                    var c = function () {
                        t.config.animation && t._fixTransition();
                        var e = t._hoverState;
                        t._hoverState = null, p(t.element).trigger(t.constructor.Event.SHOWN), e === Mn && t._leave(null, t)
                    };
                    if (p(this.tip).hasClass(Un)) {
                        var h = m.getTransitionDurationFromElement(this.tip);
                        p(this.tip).one(m.TRANSITION_END, c).emulateTransitionEnd(h)
                    } else c()
                }
            }, e.hide = function (e) {
                function t() {
                    n._hoverState !== Fn && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), p(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e()
                }
                var n = this,
                    i = this.getTipElement(),
                    o = p.Event(this.constructor.Event.HIDE);
                if (p(this.element).trigger(o), !o.isDefaultPrevented()) {
                    if (p(i).removeClass(Bn), "ontouchstart" in document.documentElement && p(document.body).children().off("mouseover", null, p.noop), this._activeTrigger[Yn] = !1, this._activeTrigger[Vn] = !1, this._activeTrigger[Qn] = !1, p(this.tip).hasClass(Un)) {
                        var r = m.getTransitionDurationFromElement(i);
                        p(i).one(m.TRANSITION_END, t).emulateTransitionEnd(r)
                    } else t();
                    this._hoverState = ""
                }
            }, e.update = function () {
                null !== this._popper && this._popper.scheduleUpdate()
            }, e.isWithContent = function () {
                return Boolean(this.getTitle())
            }, e.addAttachmentClass = function (e) {
                p(this.getTipElement()).addClass(Ln + "-" + e)
            }, e.getTipElement = function () {
                return this.tip = this.tip || p(this.config.template)[0], this.tip
            }, e.setContent = function () {
                var e = this.getTipElement();
                this.setElementContent(p(e.querySelectorAll(qn)), this.getTitle()), p(e).removeClass(Un + " " + Bn)
            }, e.setElementContent = function (e, t) {
                "object" != typeof t || !t.nodeType && !t.jquery ? this.config.html ? (this.config.sanitize && (t = In(t, this.config.whiteList, this.config.sanitizeFn)), e.html(t)) : e.text(t) : this.config.html ? p(t).parent().is(e) || e.empty().append(t) : e.text(p(t).text())
            }, e.getTitle = function () {
                var e = this.element.getAttribute("data-original-title");
                return e = e || ("function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title)
            }, e._getPopperConfig = function (e) {
                var t = this;
                return l({}, {
                    placement: e,
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            behavior: this.config.fallbackPlacement
                        },
                        arrow: {
                            element: Kn
                        },
                        preventOverflow: {
                            boundariesElement: this.config.boundary
                        }
                    },
                    onCreate: function (e) {
                        e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                    },
                    onUpdate: function (e) {
                        return t._handlePopperPlacementChange(e)
                    }
                }, {}, this.config.popperConfig)
            }, e._getOffset = function () {
                var t = this,
                    e = {};
                return "function" == typeof this.config.offset ? e.fn = function (e) {
                    return e.offsets = l({}, e.offsets, {}, t.config.offset(e.offsets, t.element) || {}), e
                } : e.offset = this.config.offset, e
            }, e._getContainer = function () {
                return !1 === this.config.container ? document.body : m.isElement(this.config.container) ? p(this.config.container) : p(document).find(this.config.container)
            }, e._getAttachment = function (e) {
                return Hn[e.toUpperCase()]
            }, e._setListeners = function () {
                var i = this;
                this.config.trigger.split(" ").forEach(function (e) {
                    if ("click" === e) p(i.element).on(i.constructor.Event.CLICK, i.config.selector, function (e) {
                        return i.toggle(e)
                    });
                    else if (e !== zn) {
                        var t = e === Qn ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
                            n = e === Qn ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                        p(i.element).on(t, i.config.selector, function (e) {
                            return i._enter(e)
                        }).on(n, i.config.selector, function (e) {
                            return i._leave(e)
                        })
                    }
                }), this._hideModalHandler = function () {
                    i.element && i.hide()
                }, p(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = l({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, e._fixTitle = function () {
                var e = typeof this.element.getAttribute("data-original-title");
                !this.element.getAttribute("title") && "string" == e || (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, e._enter = function (e, t) {
                var n = this.constructor.DATA_KEY;
                (t = t || p(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), p(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusin" === e.type ? Vn : Qn] = !0), p(t.getTipElement()).hasClass(Bn) || t._hoverState === Fn ? t._hoverState = Fn : (clearTimeout(t._timeout), t._hoverState = Fn, t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function () {
                    t._hoverState === Fn && t.show()
                }, t.config.delay.show) : t.show())
            }, e._leave = function (e, t) {
                var n = this.constructor.DATA_KEY;
                (t = t || p(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), p(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusout" === e.type ? Vn : Qn] = !1), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = Mn, t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function () {
                    t._hoverState === Mn && t.hide()
                }, t.config.delay.hide) : t.hide())
            }, e._isWithActiveTrigger = function () {
                for (var e in this._activeTrigger)
                    if (this._activeTrigger[e]) return !0;
                return !1
            }, e._getConfig = function (e) {
                var t = p(this.element).data();
                return Object.keys(t).forEach(function (e) {
                    -1 !== xn.indexOf(e) && delete t[e]
                }), "number" == typeof (e = l({}, this.constructor.Default, {}, t, {}, "object" == typeof e && e ? e : {})).delay && (e.delay = {
                    show: e.delay,
                    hide: e.delay
                }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), m.typeCheckConfig(An, e, this.constructor.DefaultType), e.sanitize && (e.template = In(e.template, e.whiteList, e.sanitizeFn)), e
            }, e._getDelegateConfig = function () {
                var e = {};
                if (this.config)
                    for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                return e
            }, e._cleanTipClass = function () {
                var e = p(this.getTipElement()),
                    t = e.attr("class").match(Pn);
                null !== t && t.length && e.removeClass(t.join(""))
            }, e._handlePopperPlacementChange = function (e) {
                var t = e.instance;
                this.tip = t.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
            }, e._fixTransition = function () {
                var e = this.getTipElement(),
                    t = this.config.animation;
                null === e.getAttribute("x-placement") && (p(e).removeClass(Un), this.config.animation = !1, this.hide(), this.show(), this.config.animation = t)
            }, i._jQueryInterface = function (n) {
                return this.each(function () {
                    var e = p(this).data(On),
                        t = "object" == typeof n && n;
                    if ((e || !/dispose|hide/.test(n)) && (e || (e = new i(this, t), p(this).data(On, e)), "string" == typeof n)) {
                        if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n]()
                    }
                })
            }, s(i, null, [{
                key: "VERSION",
                get: function () {
                    return "4.4.1"
                }
            }, {
                key: "Default",
                get: function () {
                    return Rn
                }
            }, {
                key: "NAME",
                get: function () {
                    return An
                }
            }, {
                key: "DATA_KEY",
                get: function () {
                    return On
                }
            }, {
                key: "Event",
                get: function () {
                    return Wn
                }
            }, {
                key: "EVENT_KEY",
                get: function () {
                    return Nn
                }
            }, {
                key: "DefaultType",
                get: function () {
                    return jn
                }
            }]), i
        }();
    p.fn[An] = Xn._jQueryInterface, p.fn[An].Constructor = Xn, p.fn[An].noConflict = function () {
        return p.fn[An] = kn, Xn._jQueryInterface
    };
    var Gn = "popover",
        $n = "bs.popover",
        Jn = "." + $n,
        Zn = p.fn[Gn],
        ei = "bs-popover",
        ti = new RegExp("(^|\\s)" + ei + "\\S+", "g"),
        ni = l({}, Xn.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }),
        ii = l({}, Xn.DefaultType, {
            content: "(string|element|function)"
        }),
        oi = "fade",
        ri = "show",
        si = ".popover-header",
        ai = ".popover-body",
        li = {
            HIDE: "hide" + Jn,
            HIDDEN: "hidden" + Jn,
            SHOW: "show" + Jn,
            SHOWN: "shown" + Jn,
            INSERTED: "inserted" + Jn,
            CLICK: "click" + Jn,
            FOCUSIN: "focusin" + Jn,
            FOCUSOUT: "focusout" + Jn,
            MOUSEENTER: "mouseenter" + Jn,
            MOUSELEAVE: "mouseleave" + Jn
        },
        ci = function (e) {
            function i() {
                return e.apply(this, arguments) || this
            }! function (e, t) {
                e.prototype = Object.create(t.prototype), (e.prototype.constructor = e).__proto__ = t
            }(i, e);
            var t = i.prototype;
            return t.isWithContent = function () {
                return this.getTitle() || this._getContent()
            }, t.addAttachmentClass = function (e) {
                p(this.getTipElement()).addClass(ei + "-" + e)
            }, t.getTipElement = function () {
                return this.tip = this.tip || p(this.config.template)[0], this.tip
            }, t.setContent = function () {
                var e = p(this.getTipElement());
                this.setElementContent(e.find(si), this.getTitle());
                var t = this._getContent();
                "function" == typeof t && (t = t.call(this.element)), this.setElementContent(e.find(ai), t), e.removeClass(oi + " " + ri)
            }, t._getContent = function () {
                return this.element.getAttribute("data-content") || this.config.content
            }, t._cleanTipClass = function () {
                var e = p(this.getTipElement()),
                    t = e.attr("class").match(ti);
                null !== t && 0 < t.length && e.removeClass(t.join(""))
            }, i._jQueryInterface = function (n) {
                return this.each(function () {
                    var e = p(this).data($n),
                        t = "object" == typeof n ? n : null;
                    if ((e || !/dispose|hide/.test(n)) && (e || (e = new i(this, t), p(this).data($n, e)), "string" == typeof n)) {
                        if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n]()
                    }
                })
            }, s(i, null, [{
                key: "VERSION",
                get: function () {
                    return "4.4.1"
                }
            }, {
                key: "Default",
                get: function () {
                    return ni
                }
            }, {
                key: "NAME",
                get: function () {
                    return Gn
                }
            }, {
                key: "DATA_KEY",
                get: function () {
                    return $n
                }
            }, {
                key: "Event",
                get: function () {
                    return li
                }
            }, {
                key: "EVENT_KEY",
                get: function () {
                    return Jn
                }
            }, {
                key: "DefaultType",
                get: function () {
                    return ii
                }
            }]), i
        }(Xn);
    p.fn[Gn] = ci._jQueryInterface, p.fn[Gn].Constructor = ci, p.fn[Gn].noConflict = function () {
        return p.fn[Gn] = Zn, ci._jQueryInterface
    };
    var hi = "scrollspy",
        ui = "bs.scrollspy",
        fi = "." + ui,
        di = p.fn[hi],
        pi = {
            offset: 10,
            method: "auto",
            target: ""
        },
        mi = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        },
        gi = {
            ACTIVATE: "activate" + fi,
            SCROLL: "scroll" + fi,
            LOAD_DATA_API: "load" + fi + ".data-api"
        },
        _i = "dropdown-item",
        vi = "active",
        yi = '[data-spy="scroll"]',
        Ei = ".nav, .list-group",
        bi = ".nav-link",
        wi = ".nav-item",
        Ti = ".list-group-item",
        Ci = ".dropdown",
        Si = ".dropdown-item",
        Di = ".dropdown-toggle",
        Ii = "offset",
        Ai = "position",
        Oi = function () {
            function n(e, t) {
                var n = this;
                this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(t), this._selector = this._config.target + " " + bi + "," + this._config.target + " " + Ti + "," + this._config.target + " " + Si, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, p(this._scrollElement).on(gi.SCROLL, function (e) {
                    return n._process(e)
                }), this.refresh(), this._process()
            }
            var e = n.prototype;
            return e.refresh = function () {
                var t = this,
                    e = this._scrollElement === this._scrollElement.window ? Ii : Ai,
                    o = "auto" === this._config.method ? e : this._config.method,
                    r = o === Ai ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function (e) {
                    var t, n = m.getSelectorFromElement(e);
                    if (n && (t = document.querySelector(n)), t) {
                        var i = t.getBoundingClientRect();
                        if (i.width || i.height) return [p(t)[o]().top + r, n]
                    }
                    return null
                }).filter(function (e) {
                    return e
                }).sort(function (e, t) {
                    return e[0] - t[0]
                }).forEach(function (e) {
                    t._offsets.push(e[0]), t._targets.push(e[1])
                })
            }, e.dispose = function () {
                p.removeData(this._element, ui), p(this._scrollElement).off(fi), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, e._getConfig = function (e) {
                if ("string" != typeof (e = l({}, pi, {}, "object" == typeof e && e ? e : {})).target) {
                    var t = p(e.target).attr("id");
                    t || (t = m.getUID(hi), p(e.target).attr("id", t)), e.target = "#" + t
                }
                return m.typeCheckConfig(hi, e, mi), e
            }, e._getScrollTop = function () {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, e._getScrollHeight = function () {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, e._getOffsetHeight = function () {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, e._process = function () {
                var e = this._getScrollTop() + this._config.offset,
                    t = this._getScrollHeight(),
                    n = this._config.offset + t - this._getOffsetHeight();
                if (this._scrollHeight !== t && this.refresh(), n <= e) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else {
                    if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
                    for (var o = this._offsets.length; o--;) {
                        this._activeTarget !== this._targets[o] && e >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || e < this._offsets[o + 1]) && this._activate(this._targets[o])
                    }
                }
            }, e._activate = function (t) {
                this._activeTarget = t, this._clear();
                var e = this._selector.split(",").map(function (e) {
                        return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                    }),
                    n = p([].slice.call(document.querySelectorAll(e.join(","))));
                n.hasClass(_i) ? (n.closest(Ci).find(Di).addClass(vi), n.addClass(vi)) : (n.addClass(vi), n.parents(Ei).prev(bi + ", " + Ti).addClass(vi), n.parents(Ei).prev(wi).children(bi).addClass(vi)), p(this._scrollElement).trigger(gi.ACTIVATE, {
                    relatedTarget: t
                })
            }, e._clear = function () {
                [].slice.call(document.querySelectorAll(this._selector)).filter(function (e) {
                    return e.classList.contains(vi)
                }).forEach(function (e) {
                    return e.classList.remove(vi)
                })
            }, n._jQueryInterface = function (t) {
                return this.each(function () {
                    var e = p(this).data(ui);
                    if (e || (e = new n(this, "object" == typeof t && t), p(this).data(ui, e)), "string" == typeof t) {
                        if ("undefined" == typeof e[t]) throw new TypeError('No method named "' + t + '"');
                        e[t]()
                    }
                })
            }, s(n, null, [{
                key: "VERSION",
                get: function () {
                    return "4.4.1"
                }
            }, {
                key: "Default",
                get: function () {
                    return pi
                }
            }]), n
        }();
    p(window).on(gi.LOAD_DATA_API, function () {
        for (var e = [].slice.call(document.querySelectorAll(yi)), t = e.length; t--;) {
            var n = p(e[t]);
            Oi._jQueryInterface.call(n, n.data())
        }
    }), p.fn[hi] = Oi._jQueryInterface, p.fn[hi].Constructor = Oi, p.fn[hi].noConflict = function () {
        return p.fn[hi] = di, Oi._jQueryInterface
    };
    var Ni = "bs.tab",
        ki = "." + Ni,
        Li = p.fn.tab,
        Pi = {
            HIDE: "hide" + ki,
            HIDDEN: "hidden" + ki,
            SHOW: "show" + ki,
            SHOWN: "shown" + ki,
            CLICK_DATA_API: "click" + ki + ".data-api"
        },
        xi = "dropdown-menu",
        ji = "active",
        Hi = "disabled",
        Ri = "fade",
        Fi = "show",
        Mi = ".dropdown",
        Wi = ".nav, .list-group",
        Ui = ".active",
        Bi = "> li > .active",
        qi = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
        Ki = ".dropdown-toggle",
        Qi = "> .dropdown-menu .active",
        Vi = function () {
            function i(e) {
                this._element = e
            }
            var e = i.prototype;
            return e.show = function () {
                var n = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && p(this._element).hasClass(ji) || p(this._element).hasClass(Hi))) {
                    var e, i, t = p(this._element).closest(Wi)[0],
                        o = m.getSelectorFromElement(this._element);
                    if (t) {
                        var r = "UL" === t.nodeName || "OL" === t.nodeName ? Bi : Ui;
                        i = (i = p.makeArray(p(t).find(r)))[i.length - 1]
                    }
                    var s = p.Event(Pi.HIDE, {
                            relatedTarget: this._element
                        }),
                        a = p.Event(Pi.SHOW, {
                            relatedTarget: i
                        });
                    if (i && p(i).trigger(s), p(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                        o && (e = document.querySelector(o)), this._activate(this._element, t);
                        var l = function () {
                            var e = p.Event(Pi.HIDDEN, {
                                    relatedTarget: n._element
                                }),
                                t = p.Event(Pi.SHOWN, {
                                    relatedTarget: i
                                });
                            p(i).trigger(e), p(n._element).trigger(t)
                        };
                        e ? this._activate(e, e.parentNode, l) : l()
                    }
                }
            }, e.dispose = function () {
                p.removeData(this._element, Ni), this._element = null
            }, e._activate = function (e, t, n) {
                function i() {
                    return o._transitionComplete(e, r, n)
                }
                var o = this,
                    r = (!t || "UL" !== t.nodeName && "OL" !== t.nodeName ? p(t).children(Ui) : p(t).find(Bi))[0],
                    s = n && r && p(r).hasClass(Ri);
                if (r && s) {
                    var a = m.getTransitionDurationFromElement(r);
                    p(r).removeClass(Fi).one(m.TRANSITION_END, i).emulateTransitionEnd(a)
                } else i()
            }, e._transitionComplete = function (e, t, n) {
                if (t) {
                    p(t).removeClass(ji);
                    var i = p(t.parentNode).find(Qi)[0];
                    i && p(i).removeClass(ji), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
                }
                if (p(e).addClass(ji), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), m.reflow(e), e.classList.contains(Ri) && e.classList.add(Fi), e.parentNode && p(e.parentNode).hasClass(xi)) {
                    var o = p(e).closest(Mi)[0];
                    if (o) {
                        var r = [].slice.call(o.querySelectorAll(Ki));
                        p(r).addClass(ji)
                    }
                    e.setAttribute("aria-expanded", !0)
                }
                n && n()
            }, i._jQueryInterface = function (n) {
                return this.each(function () {
                    var e = p(this),
                        t = e.data(Ni);
                    if (t || (t = new i(this), e.data(Ni, t)), "string" == typeof n) {
                        if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    }
                })
            }, s(i, null, [{
                key: "VERSION",
                get: function () {
                    return "4.4.1"
                }
            }]), i
        }();
    p(document).on(Pi.CLICK_DATA_API, qi, function (e) {
        e.preventDefault(), Vi._jQueryInterface.call(p(this), "show")
    }), p.fn.tab = Vi._jQueryInterface, p.fn.tab.Constructor = Vi, p.fn.tab.noConflict = function () {
        return p.fn.tab = Li, Vi._jQueryInterface
    };
    var Yi = "toast",
        zi = "bs.toast",
        Xi = "." + zi,
        Gi = p.fn[Yi],
        $i = {
            CLICK_DISMISS: "click.dismiss" + Xi,
            HIDE: "hide" + Xi,
            HIDDEN: "hidden" + Xi,
            SHOW: "show" + Xi,
            SHOWN: "shown" + Xi
        },
        Ji = "fade",
        Zi = "hide",
        eo = "show",
        to = "showing",
        no = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        io = {
            animation: !0,
            autohide: !0,
            delay: 500
        },
        oo = '[data-dismiss="toast"]',
        ro = function () {
            function i(e, t) {
                this._element = e, this._config = this._getConfig(t), this._timeout = null, this._setListeners()
            }
            var e = i.prototype;
            return e.show = function () {
                var e = this,
                    t = p.Event($i.SHOW);
                if (p(this._element).trigger(t), !t.isDefaultPrevented()) {
                    this._config.animation && this._element.classList.add(Ji);
                    var n = function () {
                        e._element.classList.remove(to), e._element.classList.add(eo), p(e._element).trigger($i.SHOWN), e._config.autohide && (e._timeout = setTimeout(function () {
                            e.hide()
                        }, e._config.delay))
                    };
                    if (this._element.classList.remove(Zi), m.reflow(this._element), this._element.classList.add(to), this._config.animation) {
                        var i = m.getTransitionDurationFromElement(this._element);
                        p(this._element).one(m.TRANSITION_END, n).emulateTransitionEnd(i)
                    } else n()
                }
            }, e.hide = function () {
                if (this._element.classList.contains(eo)) {
                    var e = p.Event($i.HIDE);
                    p(this._element).trigger(e), e.isDefaultPrevented() || this._close()
                }
            }, e.dispose = function () {
                clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(eo) && this._element.classList.remove(eo), p(this._element).off($i.CLICK_DISMISS), p.removeData(this._element, zi), this._element = null, this._config = null
            }, e._getConfig = function (e) {
                return e = l({}, io, {}, p(this._element).data(), {}, "object" == typeof e && e ? e : {}), m.typeCheckConfig(Yi, e, this.constructor.DefaultType), e
            }, e._setListeners = function () {
                var e = this;
                p(this._element).on($i.CLICK_DISMISS, oo, function () {
                    return e.hide()
                })
            }, e._close = function () {
                function e() {
                    t._element.classList.add(Zi), p(t._element).trigger($i.HIDDEN)
                }
                var t = this;
                if (this._element.classList.remove(eo), this._config.animation) {
                    var n = m.getTransitionDurationFromElement(this._element);
                    p(this._element).one(m.TRANSITION_END, e).emulateTransitionEnd(n)
                } else e()
            }, i._jQueryInterface = function (n) {
                return this.each(function () {
                    var e = p(this),
                        t = e.data(zi);
                    if (t || (t = new i(this, "object" == typeof n && n), e.data(zi, t)), "string" == typeof n) {
                        if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n](this)
                    }
                })
            }, s(i, null, [{
                key: "VERSION",
                get: function () {
                    return "4.4.1"
                }
            }, {
                key: "DefaultType",
                get: function () {
                    return no
                }
            }, {
                key: "Default",
                get: function () {
                    return io
                }
            }]), i
        }();
    p.fn[Yi] = ro._jQueryInterface, p.fn[Yi].Constructor = ro, p.fn[Yi].noConflict = function () {
        return p.fn[Yi] = Gi, ro._jQueryInterface
    }, e.Alert = _, e.Button = x, e.Carousel = he, e.Collapse = De, e.Dropdown = en, e.Modal = wn, e.Popover = ci, e.Scrollspy = Oi, e.Tab = Vi, e.Toast = ro, e.Tooltip = Xn, e.Util = m, Object.defineProperty(e, "__esModule", {
        value: !0
    })
});
//# sourceMappingURL=bootstrap.bundle.min.js.map
/*!
 * verge 1.10.2+201705300050
 * http://npm.im/verge
 * MIT Ryan Van Etten
 */
! function (a, b, c) {
    "undefined" != typeof module && module.exports ? module.exports = c() : a[b] = c()
}(this, "verge", function () {
    function a() {
        return {
            width: k(),
            height: l()
        }
    }
    
    function b(a, b) {
        var c = {};
        return b = +b || 0, c.width = (c.right = a.right + b) - (c.left = a.left - b), c.height = (c.bottom = a.bottom + b) - (c.top = a.top - b), c
    }
    
    function c(a, c) {
        return !(!(a = a && !a.nodeType ? a[0] : a) || 1 !== a.nodeType) && b(a.getBoundingClientRect(), c)
    }
    
    function d(b) {
        b = null == b ? a() : 1 === b.nodeType ? c(b) : b;
        var d = b.height,
            e = b.width;
        return d = "function" == typeof d ? d.call(b) : d, (e = "function" == typeof e ? e.call(b) : e) / d
    }
    var e = {},
        f = "undefined" != typeof window && window,
        g = "undefined" != typeof document && document,
        h = g && g.documentElement,
        i = f.matchMedia || f.msMatchMedia,
        j = i ? function (a) {
            return !!i.call(f, a).matches
        } : function () {
            return !1
        },
        k = e.viewportW = function () {
            var a = h.clientWidth,
                b = f.innerWidth;
            return a < b ? b : a
        },
        l = e.viewportH = function () {
            var a = h.clientHeight,
                b = f.innerHeight;
            return a < b ? b : a
        };
    return e.mq = j, e.matchMedia = i ? function () {
        return i.apply(f, arguments)
    } : function () {
        return {}
    }, e.viewport = a, e.scrollX = function () {
        return f.pageXOffset || h.scrollLeft
    }, e.scrollY = function () {
        return f.pageYOffset || h.scrollTop
    }, e.rectangle = c, e.aspect = d, e.inX = function (a, b) {
        var d = c(a, b);
        return !!d && d.right >= 0 && d.left <= k()
    }, e.inY = function (a, b) {
        var d = c(a, b);
        return !!d && d.bottom >= 0 && d.top <= l()
    }, e.inViewport = function (a, b) {
        var d = c(a, b);
        return !!d && d.bottom >= 0 && d.right >= 0 && d.top <= l() && d.left <= k()
    }, e
});
/*!
 * Select2 4.0.12
 * https://select2.github.io
 *
 * Released under the MIT license
 * https://github.com/select2/select2/blob/master/LICENSE.md
 */
;
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = function (root, jQuery) {
            if (jQuery === undefined) {
                // require('jQuery') returns a factory that requires window to
                // build a jQuery instance, we normalize how we use modules
                // that require this pattern but the window provided is a noop
                // if it's defined (how jquery works)
                if (typeof window !== 'undefined') {
                    jQuery = require('jquery');
                } else {
                    jQuery = require('jquery')(root);
                }
            }
            factory(jQuery);
            return jQuery;
        };
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function (jQuery) {
    // This is needed so we can catch the AMD loader configuration and use it
    // The inner file should be wrapped (by `banner.start.js`) in a function that
    // returns the AMD loader references.
    var S2 = (function () {
        // Restore the Select2 AMD loader so it can be used
        // Needed mostly in the language files, where the loader is not inserted
        if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) {
            var S2 = jQuery.fn.select2.amd;
        }
        var S2;
        (function () {
            if (!S2 || !S2.requirejs) {
                if (!S2) {
                    S2 = {};
                } else {
                    require = S2;
                }
                /**
                 * @license almond 0.3.3 Copyright jQuery Foundation and other contributors.
                 * Released under MIT license, http://github.com/requirejs/almond/LICENSE
                 */
                //Going sloppy to avoid 'use strict' string cost, but strict practices should
                //be followed.
                /*global setTimeout: false */
                var requirejs, require, define;
                (function (undef) {
                    var main, req, makeMap, handlers,
                        defined = {},
                        waiting = {},
                        config = {},
                        defining = {},
                        hasOwn = Object.prototype.hasOwnProperty,
                        aps = [].slice,
                        jsSuffixRegExp = /\.js$/;
                    
                    function hasProp(obj, prop) {
                        return hasOwn.call(obj, prop);
                    }
                    /**
                     * Given a relative module name, like ./something, normalize it to
                     * a real name that can be mapped to a path.
                     * @param {String} name the relative name
                     * @param {String} baseName a real name that the name arg is relative
                     * to.
                     * @returns {String} normalized name
                     */
                    function normalize(name, baseName) {
                        var nameParts, nameSegment, mapValue, foundMap, lastIndex,
                            foundI, foundStarMap, starI, i, j, part, normalizedBaseParts,
                            baseParts = baseName && baseName.split("/"),
                            map = config.map,
                            starMap = (map && map['*']) || {};
                        //Adjust any relative paths.
                        if (name) {
                            name = name.split('/');
                            lastIndex = name.length - 1;
                            // If wanting node ID compatibility, strip .js from end
                            // of IDs. Have to do this here, and not in nameToUrl
                            // because node allows either .js or non .js to map
                            // to same file.
                            if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
                                name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
                            }
                            // Starts with a '.' so need the baseName
                            if (name[0].charAt(0) === '.' && baseParts) {
                                //Convert baseName to array, and lop off the last part,
                                //so that . matches that 'directory' and not name of the baseName's
                                //module. For instance, baseName of 'one/two/three', maps to
                                //'one/two/three.js', but we want the directory, 'one/two' for
                                //this normalization.
                                normalizedBaseParts = baseParts.slice(0, baseParts.length - 1);
                                name = normalizedBaseParts.concat(name);
                            }
                            //start trimDots
                            for (i = 0; i < name.length; i++) {
                                part = name[i];
                                if (part === '.') {
                                    name.splice(i, 1);
                                    i -= 1;
                                } else if (part === '..') {
                                    // If at the start, or previous value is still ..,
                                    // keep them so that when converted to a path it may
                                    // still work when converted to a path, even though
                                    // as an ID it is less than ideal. In larger point
                                    // releases, may be better to just kick out an error.
                                    if (i === 0 || (i === 1 && name[2] === '..') || name[i - 1] === '..') {
                                        continue;
                                    } else if (i > 0) {
                                        name.splice(i - 1, 2);
                                        i -= 2;
                                    }
                                }
                            }
                            //end trimDots
                            name = name.join('/');
                        }
                        //Apply map config if available.
                        if ((baseParts || starMap) && map) {
                            nameParts = name.split('/');
                            for (i = nameParts.length; i > 0; i -= 1) {
                                nameSegment = nameParts.slice(0, i).join("/");
                                if (baseParts) {
                                    //Find the longest baseName segment match in the config.
                                    //So, do joins on the biggest to smallest lengths of baseParts.
                                    for (j = baseParts.length; j > 0; j -= 1) {
                                        mapValue = map[baseParts.slice(0, j).join('/')];
                                        //baseName segment has  config, find if it has one for
                                        //this name.
                                        if (mapValue) {
                                            mapValue = mapValue[nameSegment];
                                            if (mapValue) {
                                                //Match, update name to the new value.
                                                foundMap = mapValue;
                                                foundI = i;
                                                break;
                                            }
                                        }
                                    }
                                }
                                if (foundMap) {
                                    break;
                                }
                                //Check for a star map match, but just hold on to it,
                                //if there is a shorter segment match later in a matching
                                //config, then favor over this star map.
                                if (!foundStarMap && starMap && starMap[nameSegment]) {
                                    foundStarMap = starMap[nameSegment];
                                    starI = i;
                                }
                            }
                            if (!foundMap && foundStarMap) {
                                foundMap = foundStarMap;
                                foundI = starI;
                            }
                            if (foundMap) {
                                nameParts.splice(0, foundI, foundMap);
                                name = nameParts.join('/');
                            }
                        }
                        return name;
                    }
                    
                    function makeRequire(relName, forceSync) {
                        return function () {
                            //A version of a require function that passes a moduleName
                            //value for items that may need to
                            //look up paths relative to the moduleName
                            var args = aps.call(arguments, 0);
                            //If first arg is not require('string'), and there is only
                            //one arg, it is the array form without a callback. Insert
                            //a null so that the following concat is correct.
                            if (typeof args[0] !== 'string' && args.length === 1) {
                                args.push(null);
                            }
                            return req.apply(undef, args.concat([relName, forceSync]));
                        };
                    }
                    
                    function makeNormalize(relName) {
                        return function (name) {
                            return normalize(name, relName);
                        };
                    }
                    
                    function makeLoad(depName) {
                        return function (value) {
                            defined[depName] = value;
                        };
                    }
                    
                    function callDep(name) {
                        if (hasProp(waiting, name)) {
                            var args = waiting[name];
                            delete waiting[name];
                            defining[name] = true;
                            main.apply(undef, args);
                        }
                        if (!hasProp(defined, name) && !hasProp(defining, name)) {
                            throw new Error('No ' + name);
                        }
                        return defined[name];
                    }
                    //Turns a plugin!resource to [plugin, resource]
                    //with the plugin being undefined if the name
                    //did not have a plugin prefix.
                    function splitPrefix(name) {
                        var prefix,
                            index = name ? name.indexOf('!') : -1;
                        if (index > -1) {
                            prefix = name.substring(0, index);
                            name = name.substring(index + 1, name.length);
                        }
                        return [prefix, name];
                    }
                    //Creates a parts array for a relName where first part is plugin ID,
                    //second part is resource ID. Assumes relName has already been normalized.
                    function makeRelParts(relName) {
                        return relName ? splitPrefix(relName) : [];
                    }
                    /**
                     * Makes a name map, normalizing the name, and using a plugin
                     * for normalization if necessary. Grabs a ref to plugin
                     * too, as an optimization.
                     */
                    makeMap = function (name, relParts) {
                        var plugin,
                            parts = splitPrefix(name),
                            prefix = parts[0],
                            relResourceName = relParts[1];
                        name = parts[1];
                        if (prefix) {
                            prefix = normalize(prefix, relResourceName);
                            plugin = callDep(prefix);
                        }
                        //Normalize according
                        if (prefix) {
                            if (plugin && plugin.normalize) {
                                name = plugin.normalize(name, makeNormalize(relResourceName));
                            } else {
                                name = normalize(name, relResourceName);
                            }
                        } else {
                            name = normalize(name, relResourceName);
                            parts = splitPrefix(name);
                            prefix = parts[0];
                            name = parts[1];
                            if (prefix) {
                                plugin = callDep(prefix);
                            }
                        }
                        //Using ridiculous property names for space reasons
                        return {
                            f: prefix ? prefix + '!' + name : name, //fullName
                            n: name,
                            pr: prefix,
                            p: plugin
                        };
                    };
                    
                    function makeConfig(name) {
                        return function () {
                            return (config && config.config && config.config[name]) || {};
                        };
                    }
                    handlers = {
                        require: function (name) {
                            return makeRequire(name);
                        },
                        exports: function (name) {
                            var e = defined[name];
                            if (typeof e !== 'undefined') {
                                return e;
                            } else {
                                return (defined[name] = {});
                            }
                        },
                        module: function (name) {
                            return {
                                id: name,
                                uri: '',
                                exports: defined[name],
                                config: makeConfig(name)
                            };
                        }
                    };
                    main = function (name, deps, callback, relName) {
                        var cjsModule, depName, ret, map, i, relParts,
                            args = [],
                            callbackType = typeof callback,
                            usingExports;
                        //Use name if no relName
                        relName = relName || name;
                        relParts = makeRelParts(relName);
                        //Call the callback to define the module, if necessary.
                        if (callbackType === 'undefined' || callbackType === 'function') {
                            //Pull out the defined dependencies and pass the ordered
                            //values to the callback.
                            //Default to [require, exports, module] if no deps
                            deps = !deps.length && callback.length ? ['require', 'exports', 'module'] : deps;
                            for (i = 0; i < deps.length; i += 1) {
                                map = makeMap(deps[i], relParts);
                                depName = map.f;
                                //Fast path CommonJS standard dependencies.
                                if (depName === "require") {
                                    args[i] = handlers.require(name);
                                } else if (depName === "exports") {
                                    //CommonJS module spec 1.1
                                    args[i] = handlers.exports(name);
                                    usingExports = true;
                                } else if (depName === "module") {
                                    //CommonJS module spec 1.1
                                    cjsModule = args[i] = handlers.module(name);
                                } else if (hasProp(defined, depName) || hasProp(waiting, depName) || hasProp(defining, depName)) {
                                    args[i] = callDep(depName);
                                } else if (map.p) {
                                    map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});
                                    args[i] = defined[depName];
                                } else {
                                    throw new Error(name + ' missing ' + depName);
                                }
                            }
                            ret = callback ? callback.apply(defined[name], args) : undefined;
                            if (name) {
                                //If setting exports via "module" is in play,
                                //favor that over return value and exports. After that,
                                //favor a non-undefined return value over exports use.
                                if (cjsModule && cjsModule.exports !== undef && cjsModule.exports !== defined[name]) {
                                    defined[name] = cjsModule.exports;
                                } else if (ret !== undef || !usingExports) {
                                    //Use the return value from the function.
                                    defined[name] = ret;
                                }
                            }
                        } else if (name) {
                            //May just be an object definition for the module. Only
                            //worry about defining if have a module name.
                            defined[name] = callback;
                        }
                    };
                    requirejs = require = req = function (deps, callback, relName, forceSync, alt) {
                        if (typeof deps === "string") {
                            if (handlers[deps]) {
                                //callback in this case is really relName
                                return handlers[deps](callback);
                            }
                            //Just return the module wanted. In this scenario, the
                            //deps arg is the module name, and second arg (if passed)
                            //is just the relName.
                            //Normalize module name, if it contains . or ..
                            return callDep(makeMap(deps, makeRelParts(callback)).f);
                        } else if (!deps.splice) {
                            //deps is a config object, not an array.
                            config = deps;
                            if (config.deps) {
                                req(config.deps, config.callback);
                            }
                            if (!callback) {
                                return;
                            }
                            if (callback.splice) {
                                //callback is an array, which means it is a dependency list.
                                //Adjust args if there are dependencies
                                deps = callback;
                                callback = relName;
                                relName = null;
                            } else {
                                deps = undef;
                            }
                        }
                        //Support require(['a'])
                        callback = callback || function () {};
                        //If relName is a function, it is an errback handler,
                        //so remove it.
                        if (typeof relName === 'function') {
                            relName = forceSync;
                            forceSync = alt;
                        }
                        //Simulate async callback;
                        if (forceSync) {
                            main(undef, deps, callback, relName);
                        } else {
                            //Using a non-zero value because of concern for what old browsers
                            //do, and latest browsers "upgrade" to 4 if lower value is used:
                            //http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:
                            //If want a value immediately, use require('id') instead -- something
                            //that works in almond on the global level, but not guaranteed and
                            //unlikely to work in other AMD implementations.
                            setTimeout(function () {
                                main(undef, deps, callback, relName);
                            }, 4);
                        }
                        return req;
                    };
                    /**
                     * Just drops the config on the floor, but returns req in case
                     * the config return value is used.
                     */
                    req.config = function (cfg) {
                        return req(cfg);
                    };
                    /**
                     * Expose module registry for debugging and tooling
                     */
                    requirejs._defined = defined;
                    define = function (name, deps, callback) {
                        if (typeof name !== 'string') {
                            throw new Error('See almond README: incorrect module build, no module name');
                        }
                        //This module may not have dependencies
                        if (!deps.splice) {
                            //deps is not an array, so probably means
                            //an object literal or factory function for
                            //the value. Adjust args.
                            callback = deps;
                            deps = [];
                        }
                        if (!hasProp(defined, name) && !hasProp(waiting, name)) {
                            waiting[name] = [name, deps, callback];
                        }
                    };
                    define.amd = {
                        jQuery: true
                    };
                }());
                S2.requirejs = requirejs;
                S2.require = require;
                S2.define = define;
            }
        }());
        S2.define("almond", function () {});
        /* global jQuery:false, $:false */
        S2.define('jquery', [], function () {
            var _$ = jQuery || $;
            if (_$ == null && console && console.error) {
                console.error('Select2: An instance of jQuery or a jQuery-compatible library was not ' + 'found. Make sure that you are including jQuery before Select2 on your ' + 'web page.');
            }
            return _$;
        });
        S2.define('select2/utils', [
  'jquery'
], function ($) {
            var Utils = {};
            Utils.Extend = function (ChildClass, SuperClass) {
                var __hasProp = {}.hasOwnProperty;
                
                function BaseConstructor() {
                    this.constructor = ChildClass;
                }
                for (var key in SuperClass) {
                    if (__hasProp.call(SuperClass, key)) {
                        ChildClass[key] = SuperClass[key];
                    }
                }
                BaseConstructor.prototype = SuperClass.prototype;
                ChildClass.prototype = new BaseConstructor();
                ChildClass.__super__ = SuperClass.prototype;
                return ChildClass;
            };
            
            function getMethods(theClass) {
                var proto = theClass.prototype;
                var methods = [];
                for (var methodName in proto) {
                    var m = proto[methodName];
                    if (typeof m !== 'function') {
                        continue;
                    }
                    if (methodName === 'constructor') {
                        continue;
                    }
                    methods.push(methodName);
                }
                return methods;
            }
            Utils.Decorate = function (SuperClass, DecoratorClass) {
                var decoratedMethods = getMethods(DecoratorClass);
                var superMethods = getMethods(SuperClass);
                
                function DecoratedClass() {
                    var unshift = Array.prototype.unshift;
                    var argCount = DecoratorClass.prototype.constructor.length;
                    var calledConstructor = SuperClass.prototype.constructor;
                    if (argCount > 0) {
                        unshift.call(arguments, SuperClass.prototype.constructor);
                        calledConstructor = DecoratorClass.prototype.constructor;
                    }
                    calledConstructor.apply(this, arguments);
                }
                DecoratorClass.displayName = SuperClass.displayName;
                
                function ctr() {
                    this.constructor = DecoratedClass;
                }
                DecoratedClass.prototype = new ctr();
                for (var m = 0; m < superMethods.length; m++) {
                    var superMethod = superMethods[m];
                    DecoratedClass.prototype[superMethod] = SuperClass.prototype[superMethod];
                }
                var calledMethod = function (methodName) {
                    // Stub out the original method if it's not decorating an actual method
                    var originalMethod = function () {};
                    if (methodName in DecoratedClass.prototype) {
                        originalMethod = DecoratedClass.prototype[methodName];
                    }
                    var decoratedMethod = DecoratorClass.prototype[methodName];
                    return function () {
                        var unshift = Array.prototype.unshift;
                        unshift.call(arguments, originalMethod);
                        return decoratedMethod.apply(this, arguments);
                    };
                };
                for (var d = 0; d < decoratedMethods.length; d++) {
                    var decoratedMethod = decoratedMethods[d];
                    DecoratedClass.prototype[decoratedMethod] = calledMethod(decoratedMethod);
                }
                return DecoratedClass;
            };
            var Observable = function () {
                this.listeners = {};
            };
            Observable.prototype.on = function (event, callback) {
                this.listeners = this.listeners || {};
                if (event in this.listeners) {
                    this.listeners[event].push(callback);
                } else {
                    this.listeners[event] = [callback];
                }
            };
            Observable.prototype.trigger = function (event) {
                var slice = Array.prototype.slice;
                var params = slice.call(arguments, 1);
                this.listeners = this.listeners || {};
                // Params should always come in as an array
                if (params == null) {
                    params = [];
                }
                // If there are no arguments to the event, use a temporary object
                if (params.length === 0) {
                    params.push({});
                }
                // Set the `_type` of the first object to the event
                params[0]._type = event;
                if (event in this.listeners) {
                    this.invoke(this.listeners[event], slice.call(arguments, 1));
                }
                if ('*' in this.listeners) {
                    this.invoke(this.listeners['*'], arguments);
                }
            };
            Observable.prototype.invoke = function (listeners, params) {
                for (var i = 0, len = listeners.length; i < len; i++) {
                    listeners[i].apply(this, params);
                }
            };
            Utils.Observable = Observable;
            Utils.generateChars = function (length) {
                var chars = '';
                for (var i = 0; i < length; i++) {
                    var randomChar = Math.floor(Math.random() * 36);
                    chars += randomChar.toString(36);
                }
                return chars;
            };
            Utils.bind = function (func, context) {
                return function () {
                    func.apply(context, arguments);
                };
            };
            Utils._convertData = function (data) {
                for (var originalKey in data) {
                    var keys = originalKey.split('-');
                    var dataLevel = data;
                    if (keys.length === 1) {
                        continue;
                    }
                    for (var k = 0; k < keys.length; k++) {
                        var key = keys[k];
                        // Lowercase the first letter
                        // By default, dash-separated becomes camelCase
                        key = key.substring(0, 1).toLowerCase() + key.substring(1);
                        if (!(key in dataLevel)) {
                            dataLevel[key] = {};
                        }
                        if (k == keys.length - 1) {
                            dataLevel[key] = data[originalKey];
                        }
                        dataLevel = dataLevel[key];
                    }
                    delete data[originalKey];
                }
                return data;
            };
            Utils.hasScroll = function (index, el) {
                // Adapted from the function created by @ShadowScripter
                // and adapted by @BillBarry on the Stack Exchange Code Review website.
                // The original code can be found at
                // http://codereview.stackexchange.com/q/13338
                // and was designed to be used with the Sizzle selector engine.
                var $el = $(el);
                var overflowX = el.style.overflowX;
                var overflowY = el.style.overflowY;
                //Check both x and y declarations
                if (overflowX === overflowY && (overflowY === 'hidden' || overflowY === 'visible')) {
                    return false;
                }
                if (overflowX === 'scroll' || overflowY === 'scroll') {
                    return true;
                }
                return ($el.innerHeight() < el.scrollHeight || $el.innerWidth() < el.scrollWidth);
            };
            Utils.escapeMarkup = function (markup) {
                var replaceMap = {
                    '\\': '&#92;',
                    '&': '&amp;',
                    '<': '&lt;',
                    '>': '&gt;',
                    '"': '&quot;',
                    '\'': '&#39;',
                    '/': '&#47;'
                };
                // Do not try to escape the markup if it's not a string
                if (typeof markup !== 'string') {
                    return markup;
                }
                return String(markup).replace(/[&<>"'\/\\]/g, function (match) {
                    return replaceMap[match];
                });
            };
            // Append an array of jQuery nodes to a given element.
            Utils.appendMany = function ($element, $nodes) {
                // jQuery 1.7.x does not support $.fn.append() with an array
                // Fall back to a jQuery object collection using $.fn.add()
                if ($.fn.jquery.substr(0, 3) === '1.7') {
                    var $jqNodes = $();
                    $.map($nodes, function (node) {
                        $jqNodes = $jqNodes.add(node);
                    });
                    $nodes = $jqNodes;
                }
                $element.append($nodes);
            };
            // Cache objects in Utils.__cache instead of $.data (see #4346)
            Utils.__cache = {};
            var id = 0;
            Utils.GetUniqueElementId = function (element) {
                // Get a unique element Id. If element has no id,
                // creates a new unique number, stores it in the id
                // attribute and returns the new id.
                // If an id already exists, it simply returns it.
                var select2Id = element.getAttribute('data-select2-id');
                if (select2Id == null) {
                    // If element has id, use it.
                    if (element.id) {
                        select2Id = element.id;
                        element.setAttribute('data-select2-id', select2Id);
                    } else {
                        element.setAttribute('data-select2-id', ++id);
                        select2Id = id.toString();
                    }
                }
                return select2Id;
            };
            Utils.StoreData = function (element, name, value) {
                // Stores an item in the cache for a specified element.
                // name is the cache key.
                var id = Utils.GetUniqueElementId(element);
                if (!Utils.__cache[id]) {
                    Utils.__cache[id] = {};
                }
                Utils.__cache[id][name] = value;
            };
            Utils.GetData = function (element, name) {
                // Retrieves a value from the cache by its key (name)
                // name is optional. If no name specified, return
                // all cache items for the specified element.
                // and for a specified element.
                var id = Utils.GetUniqueElementId(element);
                if (name) {
                    if (Utils.__cache[id]) {
                        if (Utils.__cache[id][name] != null) {
                            return Utils.__cache[id][name];
                        }
                        return $(element).data(name); // Fallback to HTML5 data attribs.
                    }
                    return $(element).data(name); // Fallback to HTML5 data attribs.
                } else {
                    return Utils.__cache[id];
                }
            };
            Utils.RemoveData = function (element) {
                // Removes all cached items for a specified element.
                var id = Utils.GetUniqueElementId(element);
                if (Utils.__cache[id] != null) {
                    delete Utils.__cache[id];
                }
                element.removeAttribute('data-select2-id');
            };
            return Utils;
        });
        S2.define('select2/results', [
  'jquery',
  './utils'
], function ($, Utils) {
            function Results($element, options, dataAdapter) {
                this.$element = $element;
                this.data = dataAdapter;
                this.options = options;
                Results.__super__.constructor.call(this);
            }
            Utils.Extend(Results, Utils.Observable);
            Results.prototype.render = function () {
                var $results = $('<ul class="select2-results__options" role="listbox"></ul>');
                if (this.options.get('multiple')) {
                    $results.attr('aria-multiselectable', 'true');
                }
                this.$results = $results;
                return $results;
            };
            Results.prototype.clear = function () {
                this.$results.empty();
            };
            Results.prototype.displayMessage = function (params) {
                var escapeMarkup = this.options.get('escapeMarkup');
                this.clear();
                this.hideLoading();
                var $message = $('<li role="alert" aria-live="assertive"' + ' class="select2-results__option"></li>');
                var message = this.options.get('translations').get(params.message);
                $message.append(escapeMarkup(message(params.args)));
                $message[0].className += ' select2-results__message';
                this.$results.append($message);
            };
            Results.prototype.hideMessages = function () {
                this.$results.find('.select2-results__message').remove();
            };
            Results.prototype.append = function (data) {
                this.hideLoading();
                var $options = [];
                if (data.results == null || data.results.length === 0) {
                    if (this.$results.children().length === 0) {
                        this.trigger('results:message', {
                            message: 'noResults'
                        });
                    }
                    return;
                }
                data.results = this.sort(data.results);
                for (var d = 0; d < data.results.length; d++) {
                    var item = data.results[d];
                    var $option = this.option(item);
                    $options.push($option);
                }
                this.$results.append($options);
            };
            Results.prototype.position = function ($results, $dropdown) {
                var $resultsContainer = $dropdown.find('.select2-results');
                $resultsContainer.append($results);
            };
            Results.prototype.sort = function (data) {
                var sorter = this.options.get('sorter');
                return sorter(data);
            };
            Results.prototype.highlightFirstItem = function () {
                var $options = this.$results.find('.select2-results__option[aria-selected]');
                var $selected = $options.filter('[aria-selected=true]');
                // Check if there are any selected options
                if ($selected.length > 0) {
                    // If there are selected options, highlight the first
                    $selected.first().trigger('mouseenter');
                } else {
                    // If there are no selected options, highlight the first option
                    // in the dropdown
                    $options.first().trigger('mouseenter');
                }
                this.ensureHighlightVisible();
            };
            Results.prototype.setClasses = function () {
                var self = this;
                this.data.current(function (selected) {
                    var selectedIds = $.map(selected, function (s) {
                        return s.id.toString();
                    });
                    var $options = self.$results.find('.select2-results__option[aria-selected]');
                    $options.each(function () {
                        var $option = $(this);
                        var item = Utils.GetData(this, 'data');
                        // id needs to be converted to a string when comparing
                        var id = '' + item.id;
                        if ((item.element != null && item.element.selected) || (item.element == null && $.inArray(id, selectedIds) > -1)) {
                            $option.attr('aria-selected', 'true');
                        } else {
                            $option.attr('aria-selected', 'false');
                        }
                    });
                });
            };
            Results.prototype.showLoading = function (params) {
                this.hideLoading();
                var loadingMore = this.options.get('translations').get('searching');
                var loading = {
                    disabled: true,
                    loading: true,
                    text: loadingMore(params)
                };
                var $loading = this.option(loading);
                $loading.className += ' loading-results';
                this.$results.prepend($loading);
            };
            Results.prototype.hideLoading = function () {
                this.$results.find('.loading-results').remove();
            };
            Results.prototype.option = function (data) {
                var option = document.createElement('li');
                option.className = 'select2-results__option';
                var attrs = {
                    'role': 'option',
                    'aria-selected': 'false'
                };
                var matches = window.Element.prototype.matches || window.Element.prototype.msMatchesSelector || window.Element.prototype.webkitMatchesSelector;
                if ((data.element != null && matches.call(data.element, ':disabled')) || (data.element == null && data.disabled)) {
                    delete attrs['aria-selected'];
                    attrs['aria-disabled'] = 'true';
                }
                if (data.id == null) {
                    delete attrs['aria-selected'];
                }
                if (data._resultId != null) {
                    option.id = data._resultId;
                }
                if (data.title) {
                    option.title = data.title;
                }
                if (data.children) {
                    attrs.role = 'group';
                    attrs['aria-label'] = data.text;
                    delete attrs['aria-selected'];
                }
                for (var attr in attrs) {
                    var val = attrs[attr];
                    option.setAttribute(attr, val);
                }
                if (data.children) {
                    var $option = $(option);
                    var label = document.createElement('strong');
                    label.className = 'select2-results__group';
                    var $label = $(label);
                    this.template(data, label);
                    var $children = [];
                    for (var c = 0; c < data.children.length; c++) {
                        var child = data.children[c];
                        var $child = this.option(child);
                        $children.push($child);
                    }
                    var $childrenContainer = $('<ul></ul>', {
                        'class': 'select2-results__options select2-results__options--nested'
                    });
                    $childrenContainer.append($children);
                    $option.append(label);
                    $option.append($childrenContainer);
                } else {
                    this.template(data, option);
                }
                Utils.StoreData(option, 'data', data);
                return option;
            };
            Results.prototype.bind = function (container, $container) {
                var self = this;
                var id = container.id + '-results';
                this.$results.attr('id', id);
                container.on('results:all', function (params) {
                    self.clear();
                    self.append(params.data);
                    if (container.isOpen()) {
                        self.setClasses();
                        self.highlightFirstItem();
                    }
                });
                container.on('results:append', function (params) {
                    self.append(params.data);
                    if (container.isOpen()) {
                        self.setClasses();
                    }
                });
                container.on('query', function (params) {
                    self.hideMessages();
                    self.showLoading(params);
                });
                container.on('select', function () {
                    if (!container.isOpen()) {
                        return;
                    }
                    self.setClasses();
                    if (self.options.get('scrollAfterSelect')) {
                        self.highlightFirstItem();
                    }
                });
                container.on('unselect', function () {
                    if (!container.isOpen()) {
                        return;
                    }
                    self.setClasses();
                    if (self.options.get('scrollAfterSelect')) {
                        self.highlightFirstItem();
                    }
                });
                container.on('open', function () {
                    // When the dropdown is open, aria-expended="true"
                    self.$results.attr('aria-expanded', 'true');
                    self.$results.attr('aria-hidden', 'false');
                    self.setClasses();
                    self.ensureHighlightVisible();
                });
                container.on('close', function () {
                    // When the dropdown is closed, aria-expended="false"
                    self.$results.attr('aria-expanded', 'false');
                    self.$results.attr('aria-hidden', 'true');
                    self.$results.removeAttr('aria-activedescendant');
                });
                container.on('results:toggle', function () {
                    var $highlighted = self.getHighlightedResults();
                    if ($highlighted.length === 0) {
                        return;
                    }
                    $highlighted.trigger('mouseup');
                });
                container.on('results:select', function () {
                    var $highlighted = self.getHighlightedResults();
                    if ($highlighted.length === 0) {
                        return;
                    }
                    var data = Utils.GetData($highlighted[0], 'data');
                    if ($highlighted.attr('aria-selected') == 'true') {
                        self.trigger('close', {});
                    } else {
                        self.trigger('select', {
                            data: data
                        });
                    }
                });
                container.on('results:previous', function () {
                    var $highlighted = self.getHighlightedResults();
                    var $options = self.$results.find('[aria-selected]');
                    var currentIndex = $options.index($highlighted);
                    // If we are already at the top, don't move further
                    // If no options, currentIndex will be -1
                    if (currentIndex <= 0) {
                        return;
                    }
                    var nextIndex = currentIndex - 1;
                    // If none are highlighted, highlight the first
                    if ($highlighted.length === 0) {
                        nextIndex = 0;
                    }
                    var $next = $options.eq(nextIndex);
                    $next.trigger('mouseenter');
                    var currentOffset = self.$results.offset().top;
                    var nextTop = $next.offset().top;
                    var nextOffset = self.$results.scrollTop() + (nextTop - currentOffset);
                    if (nextIndex === 0) {
                        self.$results.scrollTop(0);
                    } else if (nextTop - currentOffset < 0) {
                        self.$results.scrollTop(nextOffset);
                    }
                });
                container.on('results:next', function () {
                    var $highlighted = self.getHighlightedResults();
                    var $options = self.$results.find('[aria-selected]');
                    var currentIndex = $options.index($highlighted);
                    var nextIndex = currentIndex + 1;
                    // If we are at the last option, stay there
                    if (nextIndex >= $options.length) {
                        return;
                    }
                    var $next = $options.eq(nextIndex);
                    $next.trigger('mouseenter');
                    var currentOffset = self.$results.offset().top + self.$results.outerHeight(false);
                    var nextBottom = $next.offset().top + $next.outerHeight(false);
                    var nextOffset = self.$results.scrollTop() + nextBottom - currentOffset;
                    if (nextIndex === 0) {
                        self.$results.scrollTop(0);
                    } else if (nextBottom > currentOffset) {
                        self.$results.scrollTop(nextOffset);
                    }
                });
                container.on('results:focus', function (params) {
                    params.element.addClass('select2-results__option--highlighted');
                });
                container.on('results:message', function (params) {
                    self.displayMessage(params);
                });
                if ($.fn.mousewheel) {
                    this.$results.on('mousewheel', function (e) {
                        var top = self.$results.scrollTop();
                        var bottom = self.$results.get(0).scrollHeight - top + e.deltaY;
                        var isAtTop = e.deltaY > 0 && top - e.deltaY <= 0;
                        var isAtBottom = e.deltaY < 0 && bottom <= self.$results.height();
                        if (isAtTop) {
                            self.$results.scrollTop(0);
                            e.preventDefault();
                            e.stopPropagation();
                        } else if (isAtBottom) {
                            self.$results.scrollTop(self.$results.get(0).scrollHeight - self.$results.height());
                            e.preventDefault();
                            e.stopPropagation();
                        }
                    });
                }
                this.$results.on('mouseup', '.select2-results__option[aria-selected]', function (evt) {
                    var $this = $(this);
                    var data = Utils.GetData(this, 'data');
                    if ($this.attr('aria-selected') === 'true') {
                        if (self.options.get('multiple')) {
                            self.trigger('unselect', {
                                originalEvent: evt,
                                data: data
                            });
                        } else {
                            self.trigger('close', {});
                        }
                        return;
                    }
                    self.trigger('select', {
                        originalEvent: evt,
                        data: data
                    });
                });
                this.$results.on('mouseenter', '.select2-results__option[aria-selected]', function (evt) {
                    var data = Utils.GetData(this, 'data');
                    self.getHighlightedResults().removeClass('select2-results__option--highlighted');
                    self.trigger('results:focus', {
                        data: data,
                        element: $(this)
                    });
                });
            };
            Results.prototype.getHighlightedResults = function () {
                var $highlighted = this.$results.find('.select2-results__option--highlighted');
                return $highlighted;
            };
            Results.prototype.destroy = function () {
                this.$results.remove();
            };
            Results.prototype.ensureHighlightVisible = function () {
                var $highlighted = this.getHighlightedResults();
                if ($highlighted.length === 0) {
                    return;
                }
                var $options = this.$results.find('[aria-selected]');
                var currentIndex = $options.index($highlighted);
                var currentOffset = this.$results.offset().top;
                var nextTop = $highlighted.offset().top;
                var nextOffset = this.$results.scrollTop() + (nextTop - currentOffset);
                var offsetDelta = nextTop - currentOffset;
                nextOffset -= $highlighted.outerHeight(false) * 2;
                if (currentIndex <= 2) {
                    this.$results.scrollTop(0);
                } else if (offsetDelta > this.$results.outerHeight() || offsetDelta < 0) {
                    this.$results.scrollTop(nextOffset);
                }
            };
            Results.prototype.template = function (result, container) {
                var template = this.options.get('templateResult');
                var escapeMarkup = this.options.get('escapeMarkup');
                var content = template(result, container);
                if (content == null) {
                    container.style.display = 'none';
                } else if (typeof content === 'string') {
                    container.innerHTML = escapeMarkup(content);
                } else {
                    $(container).append(content);
                }
            };
            return Results;
        });
        S2.define('select2/keys', [
            
], function () {
            var KEYS = {
                BACKSPACE: 8,
                TAB: 9,
                ENTER: 13,
                SHIFT: 16,
                CTRL: 17,
                ALT: 18,
                ESC: 27,
                SPACE: 32,
                PAGE_UP: 33,
                PAGE_DOWN: 34,
                END: 35,
                HOME: 36,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40,
                DELETE: 46
            };
            return KEYS;
        });
        S2.define('select2/selection/base', [
  'jquery',
  '../utils',
  '../keys'
], function ($, Utils, KEYS) {
            function BaseSelection($element, options) {
                this.$element = $element;
                this.options = options;
                BaseSelection.__super__.constructor.call(this);
            }
            Utils.Extend(BaseSelection, Utils.Observable);
            BaseSelection.prototype.render = function () {
                var $selection = $('<span class="select2-selection" role="combobox" ' + ' aria-haspopup="true" aria-expanded="false">' + '</span>');
                this._tabindex = 0;
                if (Utils.GetData(this.$element[0], 'old-tabindex') != null) {
                    this._tabindex = Utils.GetData(this.$element[0], 'old-tabindex');
                } else if (this.$element.attr('tabindex') != null) {
                    this._tabindex = this.$element.attr('tabindex');
                }
                $selection.attr('title', this.$element.attr('title'));
                $selection.attr('tabindex', this._tabindex);
                $selection.attr('aria-disabled', 'false');
                this.$selection = $selection;
                return $selection;
            };
            BaseSelection.prototype.bind = function (container, $container) {
                var self = this;
                var resultsId = container.id + '-results';
                this.container = container;
                this.$selection.on('focus', function (evt) {
                    self.trigger('focus', evt);
                });
                this.$selection.on('blur', function (evt) {
                    self._handleBlur(evt);
                });
                this.$selection.on('keydown', function (evt) {
                    self.trigger('keypress', evt);
                    if (evt.which === KEYS.SPACE) {
                        evt.preventDefault();
                    }
                });
                container.on('results:focus', function (params) {
                    self.$selection.attr('aria-activedescendant', params.data._resultId);
                });
                container.on('selection:update', function (params) {
                    self.update(params.data);
                });
                container.on('open', function () {
                    // When the dropdown is open, aria-expanded="true"
                    self.$selection.attr('aria-expanded', 'true');
                    self.$selection.attr('aria-owns', resultsId);
                    self._attachCloseHandler(container);
                });
                container.on('close', function () {
                    // When the dropdown is closed, aria-expanded="false"
                    self.$selection.attr('aria-expanded', 'false');
                    self.$selection.removeAttr('aria-activedescendant');
                    self.$selection.removeAttr('aria-owns');
                    self.$selection.trigger('focus');
                    self._detachCloseHandler(container);
                });
                container.on('enable', function () {
                    self.$selection.attr('tabindex', self._tabindex);
                    self.$selection.attr('aria-disabled', 'false');
                });
                container.on('disable', function () {
                    self.$selection.attr('tabindex', '-1');
                    self.$selection.attr('aria-disabled', 'true');
                });
            };
            BaseSelection.prototype._handleBlur = function (evt) {
                var self = this;
                // This needs to be delayed as the active element is the body when the tab
                // key is pressed, possibly along with others.
                window.setTimeout(function () {
                    // Don't trigger `blur` if the focus is still in the selection
                    if (
                        (document.activeElement == self.$selection[0]) || ($.contains(self.$selection[0], document.activeElement))) {
                        return;
                    }
                    self.trigger('blur', evt);
                }, 1);
            };
            BaseSelection.prototype._attachCloseHandler = function (container) {
                $(document.body).on('mousedown.select2.' + container.id, function (e) {
                    var $target = $(e.target);
                    var $select = $target.closest('.select2');
                    var $all = $('.select2.select2-container--open');
                    $all.each(function () {
                        if (this == $select[0]) {
                            return;
                        }
                        var $element = Utils.GetData(this, 'element');
                        $element.select2('close');
                    });
                });
            };
            BaseSelection.prototype._detachCloseHandler = function (container) {
                $(document.body).off('mousedown.select2.' + container.id);
            };
            BaseSelection.prototype.position = function ($selection, $container) {
                var $selectionContainer = $container.find('.selection');
                $selectionContainer.append($selection);
            };
            BaseSelection.prototype.destroy = function () {
                this._detachCloseHandler(this.container);
            };
            BaseSelection.prototype.update = function (data) {
                throw new Error('The `update` method must be defined in child classes.');
            };
            return BaseSelection;
        });
        S2.define('select2/selection/single', [
  'jquery',
  './base',
  '../utils',
  '../keys'
], function ($, BaseSelection, Utils, KEYS) {
            function SingleSelection() {
                SingleSelection.__super__.constructor.apply(this, arguments);
            }
            Utils.Extend(SingleSelection, BaseSelection);
            SingleSelection.prototype.render = function () {
                var $selection = SingleSelection.__super__.render.call(this);
                $selection.addClass('select2-selection--single');
                $selection.html('<span class="select2-selection__rendered"></span>' + '<span class="select2-selection__arrow" role="presentation">' + '<b role="presentation"></b>' + '</span>');
                return $selection;
            };
            SingleSelection.prototype.bind = function (container, $container) {
                var self = this;
                SingleSelection.__super__.bind.apply(this, arguments);
                var id = container.id + '-container';
                this.$selection.find('.select2-selection__rendered').attr('id', id).attr('role', 'textbox').attr('aria-readonly', 'true');
                this.$selection.attr('aria-labelledby', id);
                this.$selection.on('mousedown', function (evt) {
                    // Only respond to left clicks
                    if (evt.which !== 1) {
                        return;
                    }
                    self.trigger('toggle', {
                        originalEvent: evt
                    });
                });
                this.$selection.on('focus', function (evt) {
                    // User focuses on the container
                });
                this.$selection.on('blur', function (evt) {
                    // User exits the container
                });
                container.on('focus', function (evt) {
                    if (!container.isOpen()) {
                        self.$selection.trigger('focus');
                    }
                });
            };
            SingleSelection.prototype.clear = function () {
                var $rendered = this.$selection.find('.select2-selection__rendered');
                $rendered.empty();
                $rendered.removeAttr('title'); // clear tooltip on empty
            };
            SingleSelection.prototype.display = function (data, container) {
                var template = this.options.get('templateSelection');
                var escapeMarkup = this.options.get('escapeMarkup');
                return escapeMarkup(template(data, container));
            };
            SingleSelection.prototype.selectionContainer = function () {
                return $('<span></span>');
            };
            SingleSelection.prototype.update = function (data) {
                if (data.length === 0) {
                    this.clear();
                    return;
                }
                var selection = data[0];
                var $rendered = this.$selection.find('.select2-selection__rendered');
                var formatted = this.display(selection, $rendered);
                $rendered.empty().append(formatted);
                var title = selection.title || selection.text;
                if (title) {
                    $rendered.attr('title', title);
                } else {
                    $rendered.removeAttr('title');
                }
            };
            return SingleSelection;
        });
        S2.define('select2/selection/multiple', [
  'jquery',
  './base',
  '../utils'
], function ($, BaseSelection, Utils) {
            function MultipleSelection($element, options) {
                MultipleSelection.__super__.constructor.apply(this, arguments);
            }
            Utils.Extend(MultipleSelection, BaseSelection);
            MultipleSelection.prototype.render = function () {
                var $selection = MultipleSelection.__super__.render.call(this);
                $selection.addClass('select2-selection--multiple');
                $selection.html('<ul class="select2-selection__rendered"></ul>');
                return $selection;
            };
            MultipleSelection.prototype.bind = function (container, $container) {
                var self = this;
                MultipleSelection.__super__.bind.apply(this, arguments);
                this.$selection.on('click', function (evt) {
                    self.trigger('toggle', {
                        originalEvent: evt
                    });
                });
                this.$selection.on('click', '.select2-selection__choice__remove', function (evt) {
                    // Ignore the event if it is disabled
                    if (self.options.get('disabled')) {
                        return;
                    }
                    var $remove = $(this);
                    var $selection = $remove.parent();
                    var data = Utils.GetData($selection[0], 'data');
                    self.trigger('unselect', {
                        originalEvent: evt,
                        data: data
                    });
                });
            };
            MultipleSelection.prototype.clear = function () {
                var $rendered = this.$selection.find('.select2-selection__rendered');
                $rendered.empty();
                $rendered.removeAttr('title');
            };
            MultipleSelection.prototype.display = function (data, container) {
                var template = this.options.get('templateSelection');
                var escapeMarkup = this.options.get('escapeMarkup');
                return escapeMarkup(template(data, container));
            };
            MultipleSelection.prototype.selectionContainer = function () {
                var $container = $('<li class="select2-selection__choice">' + '<span class="select2-selection__choice__remove" role="presentation">' + '&times;' + '</span>' + '</li>');
                return $container;
            };
            MultipleSelection.prototype.update = function (data) {
                this.clear();
                if (data.length === 0) {
                    return;
                }
                var $selections = [];
                for (var d = 0; d < data.length; d++) {
                    var selection = data[d];
                    var $selection = this.selectionContainer();
                    var formatted = this.display(selection, $selection);
                    $selection.append(formatted);
                    var title = selection.title || selection.text;
                    if (title) {
                        $selection.attr('title', title);
                    }
                    Utils.StoreData($selection[0], 'data', selection);
                    $selections.push($selection);
                }
                var $rendered = this.$selection.find('.select2-selection__rendered');
                Utils.appendMany($rendered, $selections);
            };
            return MultipleSelection;
        });
        S2.define('select2/selection/placeholder', [
  '../utils'
], function (Utils) {
            function Placeholder(decorated, $element, options) {
                this.placeholder = this.normalizePlaceholder(options.get('placeholder'));
                decorated.call(this, $element, options);
            }
            Placeholder.prototype.normalizePlaceholder = function (_, placeholder) {
                if (typeof placeholder === 'string') {
                    placeholder = {
                        id: '',
                        text: placeholder
                    };
                }
                return placeholder;
            };
            Placeholder.prototype.createPlaceholder = function (decorated, placeholder) {
                var $placeholder = this.selectionContainer();
                $placeholder.html(this.display(placeholder));
                $placeholder.addClass('select2-selection__placeholder').removeClass('select2-selection__choice');
                return $placeholder;
            };
            Placeholder.prototype.update = function (decorated, data) {
                var singlePlaceholder = (data.length == 1 && data[0].id != this.placeholder.id);
                var multipleSelections = data.length > 1;
                if (multipleSelections || singlePlaceholder) {
                    return decorated.call(this, data);
                }
                this.clear();
                var $placeholder = this.createPlaceholder(this.placeholder);
                this.$selection.find('.select2-selection__rendered').append($placeholder);
            };
            return Placeholder;
        });
        S2.define('select2/selection/allowClear', [
  'jquery',
  '../keys',
  '../utils'
], function ($, KEYS, Utils) {
            function AllowClear() {}
            AllowClear.prototype.bind = function (decorated, container, $container) {
                var self = this;
                decorated.call(this, container, $container);
                if (this.placeholder == null) {
                    if (this.options.get('debug') && window.console && console.error) {
                        console.error('Select2: The `allowClear` option should be used in combination ' + 'with the `placeholder` option.');
                    }
                }
                this.$selection.on('mousedown', '.select2-selection__clear', function (evt) {
                    self._handleClear(evt);
                });
                container.on('keypress', function (evt) {
                    self._handleKeyboardClear(evt, container);
                });
            };
            AllowClear.prototype._handleClear = function (_, evt) {
                // Ignore the event if it is disabled
                if (this.options.get('disabled')) {
                    return;
                }
                var $clear = this.$selection.find('.select2-selection__clear');
                // Ignore the event if nothing has been selected
                if ($clear.length === 0) {
                    return;
                }
                evt.stopPropagation();
                var data = Utils.GetData($clear[0], 'data');
                var previousVal = this.$element.val();
                this.$element.val(this.placeholder.id);
                var unselectData = {
                    data: data
                };
                this.trigger('clear', unselectData);
                if (unselectData.prevented) {
                    this.$element.val(previousVal);
                    return;
                }
                for (var d = 0; d < data.length; d++) {
                    unselectData = {
                        data: data[d]
                    };
                    // Trigger the `unselect` event, so people can prevent it from being
                    // cleared.
                    this.trigger('unselect', unselectData);
                    // If the event was prevented, don't clear it out.
                    if (unselectData.prevented) {
                        this.$element.val(previousVal);
                        return;
                    }
                }
                this.$element.trigger('change');
                this.trigger('toggle', {});
            };
            AllowClear.prototype._handleKeyboardClear = function (_, evt, container) {
                if (container.isOpen()) {
                    return;
                }
                if (evt.which == KEYS.DELETE || evt.which == KEYS.BACKSPACE) {
                    this._handleClear(evt);
                }
            };
            AllowClear.prototype.update = function (decorated, data) {
                decorated.call(this, data);
                if (this.$selection.find('.select2-selection__placeholder').length > 0 || data.length === 0) {
                    return;
                }
                var removeAll = this.options.get('translations').get('removeAllItems');
                var $remove = $('<span class="select2-selection__clear" title="' + removeAll() + '">' + '&times;' + '</span>');
                Utils.StoreData($remove[0], 'data', data);
                this.$selection.find('.select2-selection__rendered').prepend($remove);
            };
            return AllowClear;
        });
        S2.define('select2/selection/search', [
  'jquery',
  '../utils',
  '../keys'
], function ($, Utils, KEYS) {
            function Search(decorated, $element, options) {
                decorated.call(this, $element, options);
            }
            Search.prototype.render = function (decorated) {
                var $search = $('<li class="select2-search select2-search--inline">' + '<input class="select2-search__field" type="search" tabindex="-1"' + ' autocomplete="off" autocorrect="off" autocapitalize="none"' + ' spellcheck="false" role="searchbox" aria-autocomplete="list" />' + '</li>');
                this.$searchContainer = $search;
                this.$search = $search.find('input');
                var $rendered = decorated.call(this);
                this._transferTabIndex();
                return $rendered;
            };
            Search.prototype.bind = function (decorated, container, $container) {
                var self = this;
                var resultsId = container.id + '-results';
                decorated.call(this, container, $container);
                container.on('open', function () {
                    self.$search.attr('aria-controls', resultsId);
                    self.$search.trigger('focus');
                });
                container.on('close', function () {
                    self.$search.val('');
                    self.$search.removeAttr('aria-controls');
                    self.$search.removeAttr('aria-activedescendant');
                    self.$search.trigger('focus');
                });
                container.on('enable', function () {
                    self.$search.prop('disabled', false);
                    self._transferTabIndex();
                });
                container.on('disable', function () {
                    self.$search.prop('disabled', true);
                });
                container.on('focus', function (evt) {
                    self.$search.trigger('focus');
                });
                container.on('results:focus', function (params) {
                    if (params.data._resultId) {
                        self.$search.attr('aria-activedescendant', params.data._resultId);
                    } else {
                        self.$search.removeAttr('aria-activedescendant');
                    }
                });
                this.$selection.on('focusin', '.select2-search--inline', function (evt) {
                    self.trigger('focus', evt);
                });
                this.$selection.on('focusout', '.select2-search--inline', function (evt) {
                    self._handleBlur(evt);
                });
                this.$selection.on('keydown', '.select2-search--inline', function (evt) {
                    evt.stopPropagation();
                    self.trigger('keypress', evt);
                    self._keyUpPrevented = evt.isDefaultPrevented();
                    var key = evt.which;
                    if (key === KEYS.BACKSPACE && self.$search.val() === '') {
                        var $previousChoice = self.$searchContainer.prev('.select2-selection__choice');
                        if ($previousChoice.length > 0) {
                            var item = Utils.GetData($previousChoice[0], 'data');
                            self.searchRemoveChoice(item);
                            evt.preventDefault();
                        }
                    }
                });
                this.$selection.on('click', '.select2-search--inline', function (evt) {
                    if (self.$search.val()) {
                        evt.stopPropagation();
                    }
                });
                // Try to detect the IE version should the `documentMode` property that
                // is stored on the document. This is only implemented in IE and is
                // slightly cleaner than doing a user agent check.
                // This property is not available in Edge, but Edge also doesn't have
                // this bug.
                var msie = document.documentMode;
                var disableInputEvents = msie && msie <= 11;
                // Workaround for browsers which do not support the `input` event
                // This will prevent double-triggering of events for browsers which support
                // both the `keyup` and `input` events.
                this.$selection.on('input.searchcheck', '.select2-search--inline', function (evt) {
                    // IE will trigger the `input` event when a placeholder is used on a
                    // search box. To get around this issue, we are forced to ignore all
                    // `input` events in IE and keep using `keyup`.
                    if (disableInputEvents) {
                        self.$selection.off('input.search input.searchcheck');
                        return;
                    }
                    // Unbind the duplicated `keyup` event
                    self.$selection.off('keyup.search');
                });
                this.$selection.on('keyup.search input.search', '.select2-search--inline', function (evt) {
                    // IE will trigger the `input` event when a placeholder is used on a
                    // search box. To get around this issue, we are forced to ignore all
                    // `input` events in IE and keep using `keyup`.
                    if (disableInputEvents && evt.type === 'input') {
                        self.$selection.off('input.search input.searchcheck');
                        return;
                    }
                    var key = evt.which;
                    // We can freely ignore events from modifier keys
                    if (key == KEYS.SHIFT || key == KEYS.CTRL || key == KEYS.ALT) {
                        return;
                    }
                    // Tabbing will be handled during the `keydown` phase
                    if (key == KEYS.TAB) {
                        return;
                    }
                    self.handleSearch(evt);
                });
            };
            /**
             * This method will transfer the tabindex attribute from the rendered
             * selection to the search box. This allows for the search box to be used as
             * the primary focus instead of the selection container.
             *
             * @private
             */
            Search.prototype._transferTabIndex = function (decorated) {
                this.$search.attr('tabindex', this.$selection.attr('tabindex'));
                this.$selection.attr('tabindex', '-1');
            };
            Search.prototype.createPlaceholder = function (decorated, placeholder) {
                this.$search.attr('placeholder', placeholder.text);
            };
            Search.prototype.update = function (decorated, data) {
                var searchHadFocus = this.$search[0] == document.activeElement;
                this.$search.attr('placeholder', '');
                decorated.call(this, data);
                this.$selection.find('.select2-selection__rendered').append(this.$searchContainer);
                this.resizeSearch();
                if (searchHadFocus) {
                    this.$search.trigger('focus');
                }
            };
            Search.prototype.handleSearch = function () {
                this.resizeSearch();
                if (!this._keyUpPrevented) {
                    var input = this.$search.val();
                    this.trigger('query', {
                        term: input
                    });
                }
                this._keyUpPrevented = false;
            };
            Search.prototype.searchRemoveChoice = function (decorated, item) {
                this.trigger('unselect', {
                    data: item
                });
                this.$search.val(item.text);
                this.handleSearch();
            };
            Search.prototype.resizeSearch = function () {
                this.$search.css('width', '25px');
                var width = '';
                if (this.$search.attr('placeholder') !== '') {
                    width = this.$selection.find('.select2-selection__rendered').width();
                } else {
                    var minimumWidth = this.$search.val().length + 1;
                    width = (minimumWidth * 0.75) + 'em';
                }
                this.$search.css('width', width);
            };
            return Search;
        });
        S2.define('select2/selection/eventRelay', [
  'jquery'
], function ($) {
            function EventRelay() {}
            EventRelay.prototype.bind = function (decorated, container, $container) {
                var self = this;
                var relayEvents = [
      'open', 'opening',
      'close', 'closing',
      'select', 'selecting',
      'unselect', 'unselecting',
      'clear', 'clearing'
    ];
                var preventableEvents = [
      'opening', 'closing', 'selecting', 'unselecting', 'clearing'
    ];
                decorated.call(this, container, $container);
                container.on('*', function (name, params) {
                    // Ignore events that should not be relayed
                    if ($.inArray(name, relayEvents) === -1) {
                        return;
                    }
                    // The parameters should always be an object
                    params = params || {};
                    // Generate the jQuery event for the Select2 event
                    var evt = $.Event('select2:' + name, {
                        params: params
                    });
                    self.$element.trigger(evt);
                    // Only handle preventable events if it was one
                    if ($.inArray(name, preventableEvents) === -1) {
                        return;
                    }
                    params.prevented = evt.isDefaultPrevented();
                });
            };
            return EventRelay;
        });
        S2.define('select2/translation', [
  'jquery',
  'require'
], function ($, require) {
            function Translation(dict) {
                this.dict = dict || {};
            }
            Translation.prototype.all = function () {
                return this.dict;
            };
            Translation.prototype.get = function (key) {
                return this.dict[key];
            };
            Translation.prototype.extend = function (translation) {
                this.dict = $.extend({}, translation.all(), this.dict);
            };
            // Static functions
            Translation._cache = {};
            Translation.loadPath = function (path) {
                if (!(path in Translation._cache)) {
                    var translations = require(path);
                    Translation._cache[path] = translations;
                }
                return new Translation(Translation._cache[path]);
            };
            return Translation;
        });
        S2.define('select2/diacritics', [
            
], function () {
            var diacritics = {
                '\u24B6': 'A',
                '\uFF21': 'A',
                '\u00C0': 'A',
                '\u00C1': 'A',
                '\u00C2': 'A',
                '\u1EA6': 'A',
                '\u1EA4': 'A',
                '\u1EAA': 'A',
                '\u1EA8': 'A',
                '\u00C3': 'A',
                '\u0100': 'A',
                '\u0102': 'A',
                '\u1EB0': 'A',
                '\u1EAE': 'A',
                '\u1EB4': 'A',
                '\u1EB2': 'A',
                '\u0226': 'A',
                '\u01E0': 'A',
                '\u00C4': 'A',
                '\u01DE': 'A',
                '\u1EA2': 'A',
                '\u00C5': 'A',
                '\u01FA': 'A',
                '\u01CD': 'A',
                '\u0200': 'A',
                '\u0202': 'A',
                '\u1EA0': 'A',
                '\u1EAC': 'A',
                '\u1EB6': 'A',
                '\u1E00': 'A',
                '\u0104': 'A',
                '\u023A': 'A',
                '\u2C6F': 'A',
                '\uA732': 'AA',
                '\u00C6': 'AE',
                '\u01FC': 'AE',
                '\u01E2': 'AE',
                '\uA734': 'AO',
                '\uA736': 'AU',
                '\uA738': 'AV',
                '\uA73A': 'AV',
                '\uA73C': 'AY',
                '\u24B7': 'B',
                '\uFF22': 'B',
                '\u1E02': 'B',
                '\u1E04': 'B',
                '\u1E06': 'B',
                '\u0243': 'B',
                '\u0182': 'B',
                '\u0181': 'B',
                '\u24B8': 'C',
                '\uFF23': 'C',
                '\u0106': 'C',
                '\u0108': 'C',
                '\u010A': 'C',
                '\u010C': 'C',
                '\u00C7': 'C',
                '\u1E08': 'C',
                '\u0187': 'C',
                '\u023B': 'C',
                '\uA73E': 'C',
                '\u24B9': 'D',
                '\uFF24': 'D',
                '\u1E0A': 'D',
                '\u010E': 'D',
                '\u1E0C': 'D',
                '\u1E10': 'D',
                '\u1E12': 'D',
                '\u1E0E': 'D',
                '\u0110': 'D',
                '\u018B': 'D',
                '\u018A': 'D',
                '\u0189': 'D',
                '\uA779': 'D',
                '\u01F1': 'DZ',
                '\u01C4': 'DZ',
                '\u01F2': 'Dz',
                '\u01C5': 'Dz',
                '\u24BA': 'E',
                '\uFF25': 'E',
                '\u00C8': 'E',
                '\u00C9': 'E',
                '\u00CA': 'E',
                '\u1EC0': 'E',
                '\u1EBE': 'E',
                '\u1EC4': 'E',
                '\u1EC2': 'E',
                '\u1EBC': 'E',
                '\u0112': 'E',
                '\u1E14': 'E',
                '\u1E16': 'E',
                '\u0114': 'E',
                '\u0116': 'E',
                '\u00CB': 'E',
                '\u1EBA': 'E',
                '\u011A': 'E',
                '\u0204': 'E',
                '\u0206': 'E',
                '\u1EB8': 'E',
                '\u1EC6': 'E',
                '\u0228': 'E',
                '\u1E1C': 'E',
                '\u0118': 'E',
                '\u1E18': 'E',
                '\u1E1A': 'E',
                '\u0190': 'E',
                '\u018E': 'E',
                '\u24BB': 'F',
                '\uFF26': 'F',
                '\u1E1E': 'F',
                '\u0191': 'F',
                '\uA77B': 'F',
                '\u24BC': 'G',
                '\uFF27': 'G',
                '\u01F4': 'G',
                '\u011C': 'G',
                '\u1E20': 'G',
                '\u011E': 'G',
                '\u0120': 'G',
                '\u01E6': 'G',
                '\u0122': 'G',
                '\u01E4': 'G',
                '\u0193': 'G',
                '\uA7A0': 'G',
                '\uA77D': 'G',
                '\uA77E': 'G',
                '\u24BD': 'H',
                '\uFF28': 'H',
                '\u0124': 'H',
                '\u1E22': 'H',
                '\u1E26': 'H',
                '\u021E': 'H',
                '\u1E24': 'H',
                '\u1E28': 'H',
                '\u1E2A': 'H',
                '\u0126': 'H',
                '\u2C67': 'H',
                '\u2C75': 'H',
                '\uA78D': 'H',
                '\u24BE': 'I',
                '\uFF29': 'I',
                '\u00CC': 'I',
                '\u00CD': 'I',
                '\u00CE': 'I',
                '\u0128': 'I',
                '\u012A': 'I',
                '\u012C': 'I',
                '\u0130': 'I',
                '\u00CF': 'I',
                '\u1E2E': 'I',
                '\u1EC8': 'I',
                '\u01CF': 'I',
                '\u0208': 'I',
                '\u020A': 'I',
                '\u1ECA': 'I',
                '\u012E': 'I',
                '\u1E2C': 'I',
                '\u0197': 'I',
                '\u24BF': 'J',
                '\uFF2A': 'J',
                '\u0134': 'J',
                '\u0248': 'J',
                '\u24C0': 'K',
                '\uFF2B': 'K',
                '\u1E30': 'K',
                '\u01E8': 'K',
                '\u1E32': 'K',
                '\u0136': 'K',
                '\u1E34': 'K',
                '\u0198': 'K',
                '\u2C69': 'K',
                '\uA740': 'K',
                '\uA742': 'K',
                '\uA744': 'K',
                '\uA7A2': 'K',
                '\u24C1': 'L',
                '\uFF2C': 'L',
                '\u013F': 'L',
                '\u0139': 'L',
                '\u013D': 'L',
                '\u1E36': 'L',
                '\u1E38': 'L',
                '\u013B': 'L',
                '\u1E3C': 'L',
                '\u1E3A': 'L',
                '\u0141': 'L',
                '\u023D': 'L',
                '\u2C62': 'L',
                '\u2C60': 'L',
                '\uA748': 'L',
                '\uA746': 'L',
                '\uA780': 'L',
                '\u01C7': 'LJ',
                '\u01C8': 'Lj',
                '\u24C2': 'M',
                '\uFF2D': 'M',
                '\u1E3E': 'M',
                '\u1E40': 'M',
                '\u1E42': 'M',
                '\u2C6E': 'M',
                '\u019C': 'M',
                '\u24C3': 'N',
                '\uFF2E': 'N',
                '\u01F8': 'N',
                '\u0143': 'N',
                '\u00D1': 'N',
                '\u1E44': 'N',
                '\u0147': 'N',
                '\u1E46': 'N',
                '\u0145': 'N',
                '\u1E4A': 'N',
                '\u1E48': 'N',
                '\u0220': 'N',
                '\u019D': 'N',
                '\uA790': 'N',
                '\uA7A4': 'N',
                '\u01CA': 'NJ',
                '\u01CB': 'Nj',
                '\u24C4': 'O',
                '\uFF2F': 'O',
                '\u00D2': 'O',
                '\u00D3': 'O',
                '\u00D4': 'O',
                '\u1ED2': 'O',
                '\u1ED0': 'O',
                '\u1ED6': 'O',
                '\u1ED4': 'O',
                '\u00D5': 'O',
                '\u1E4C': 'O',
                '\u022C': 'O',
                '\u1E4E': 'O',
                '\u014C': 'O',
                '\u1E50': 'O',
                '\u1E52': 'O',
                '\u014E': 'O',
                '\u022E': 'O',
                '\u0230': 'O',
                '\u00D6': 'O',
                '\u022A': 'O',
                '\u1ECE': 'O',
                '\u0150': 'O',
                '\u01D1': 'O',
                '\u020C': 'O',
                '\u020E': 'O',
                '\u01A0': 'O',
                '\u1EDC': 'O',
                '\u1EDA': 'O',
                '\u1EE0': 'O',
                '\u1EDE': 'O',
                '\u1EE2': 'O',
                '\u1ECC': 'O',
                '\u1ED8': 'O',
                '\u01EA': 'O',
                '\u01EC': 'O',
                '\u00D8': 'O',
                '\u01FE': 'O',
                '\u0186': 'O',
                '\u019F': 'O',
                '\uA74A': 'O',
                '\uA74C': 'O',
                '\u0152': 'OE',
                '\u01A2': 'OI',
                '\uA74E': 'OO',
                '\u0222': 'OU',
                '\u24C5': 'P',
                '\uFF30': 'P',
                '\u1E54': 'P',
                '\u1E56': 'P',
                '\u01A4': 'P',
                '\u2C63': 'P',
                '\uA750': 'P',
                '\uA752': 'P',
                '\uA754': 'P',
                '\u24C6': 'Q',
                '\uFF31': 'Q',
                '\uA756': 'Q',
                '\uA758': 'Q',
                '\u024A': 'Q',
                '\u24C7': 'R',
                '\uFF32': 'R',
                '\u0154': 'R',
                '\u1E58': 'R',
                '\u0158': 'R',
                '\u0210': 'R',
                '\u0212': 'R',
                '\u1E5A': 'R',
                '\u1E5C': 'R',
                '\u0156': 'R',
                '\u1E5E': 'R',
                '\u024C': 'R',
                '\u2C64': 'R',
                '\uA75A': 'R',
                '\uA7A6': 'R',
                '\uA782': 'R',
                '\u24C8': 'S',
                '\uFF33': 'S',
                '\u1E9E': 'S',
                '\u015A': 'S',
                '\u1E64': 'S',
                '\u015C': 'S',
                '\u1E60': 'S',
                '\u0160': 'S',
                '\u1E66': 'S',
                '\u1E62': 'S',
                '\u1E68': 'S',
                '\u0218': 'S',
                '\u015E': 'S',
                '\u2C7E': 'S',
                '\uA7A8': 'S',
                '\uA784': 'S',
                '\u24C9': 'T',
                '\uFF34': 'T',
                '\u1E6A': 'T',
                '\u0164': 'T',
                '\u1E6C': 'T',
                '\u021A': 'T',
                '\u0162': 'T',
                '\u1E70': 'T',
                '\u1E6E': 'T',
                '\u0166': 'T',
                '\u01AC': 'T',
                '\u01AE': 'T',
                '\u023E': 'T',
                '\uA786': 'T',
                '\uA728': 'TZ',
                '\u24CA': 'U',
                '\uFF35': 'U',
                '\u00D9': 'U',
                '\u00DA': 'U',
                '\u00DB': 'U',
                '\u0168': 'U',
                '\u1E78': 'U',
                '\u016A': 'U',
                '\u1E7A': 'U',
                '\u016C': 'U',
                '\u00DC': 'U',
                '\u01DB': 'U',
                '\u01D7': 'U',
                '\u01D5': 'U',
                '\u01D9': 'U',
                '\u1EE6': 'U',
                '\u016E': 'U',
                '\u0170': 'U',
                '\u01D3': 'U',
                '\u0214': 'U',
                '\u0216': 'U',
                '\u01AF': 'U',
                '\u1EEA': 'U',
                '\u1EE8': 'U',
                '\u1EEE': 'U',
                '\u1EEC': 'U',
                '\u1EF0': 'U',
                '\u1EE4': 'U',
                '\u1E72': 'U',
                '\u0172': 'U',
                '\u1E76': 'U',
                '\u1E74': 'U',
                '\u0244': 'U',
                '\u24CB': 'V',
                '\uFF36': 'V',
                '\u1E7C': 'V',
                '\u1E7E': 'V',
                '\u01B2': 'V',
                '\uA75E': 'V',
                '\u0245': 'V',
                '\uA760': 'VY',
                '\u24CC': 'W',
                '\uFF37': 'W',
                '\u1E80': 'W',
                '\u1E82': 'W',
                '\u0174': 'W',
                '\u1E86': 'W',
                '\u1E84': 'W',
                '\u1E88': 'W',
                '\u2C72': 'W',
                '\u24CD': 'X',
                '\uFF38': 'X',
                '\u1E8A': 'X',
                '\u1E8C': 'X',
                '\u24CE': 'Y',
                '\uFF39': 'Y',
                '\u1EF2': 'Y',
                '\u00DD': 'Y',
                '\u0176': 'Y',
                '\u1EF8': 'Y',
                '\u0232': 'Y',
                '\u1E8E': 'Y',
                '\u0178': 'Y',
                '\u1EF6': 'Y',
                '\u1EF4': 'Y',
                '\u01B3': 'Y',
                '\u024E': 'Y',
                '\u1EFE': 'Y',
                '\u24CF': 'Z',
                '\uFF3A': 'Z',
                '\u0179': 'Z',
                '\u1E90': 'Z',
                '\u017B': 'Z',
                '\u017D': 'Z',
                '\u1E92': 'Z',
                '\u1E94': 'Z',
                '\u01B5': 'Z',
                '\u0224': 'Z',
                '\u2C7F': 'Z',
                '\u2C6B': 'Z',
                '\uA762': 'Z',
                '\u24D0': 'a',
                '\uFF41': 'a',
                '\u1E9A': 'a',
                '\u00E0': 'a',
                '\u00E1': 'a',
                '\u00E2': 'a',
                '\u1EA7': 'a',
                '\u1EA5': 'a',
                '\u1EAB': 'a',
                '\u1EA9': 'a',
                '\u00E3': 'a',
                '\u0101': 'a',
                '\u0103': 'a',
                '\u1EB1': 'a',
                '\u1EAF': 'a',
                '\u1EB5': 'a',
                '\u1EB3': 'a',
                '\u0227': 'a',
                '\u01E1': 'a',
                '\u00E4': 'a',
                '\u01DF': 'a',
                '\u1EA3': 'a',
                '\u00E5': 'a',
                '\u01FB': 'a',
                '\u01CE': 'a',
                '\u0201': 'a',
                '\u0203': 'a',
                '\u1EA1': 'a',
                '\u1EAD': 'a',
                '\u1EB7': 'a',
                '\u1E01': 'a',
                '\u0105': 'a',
                '\u2C65': 'a',
                '\u0250': 'a',
                '\uA733': 'aa',
                '\u00E6': 'ae',
                '\u01FD': 'ae',
                '\u01E3': 'ae',
                '\uA735': 'ao',
                '\uA737': 'au',
                '\uA739': 'av',
                '\uA73B': 'av',
                '\uA73D': 'ay',
                '\u24D1': 'b',
                '\uFF42': 'b',
                '\u1E03': 'b',
                '\u1E05': 'b',
                '\u1E07': 'b',
                '\u0180': 'b',
                '\u0183': 'b',
                '\u0253': 'b',
                '\u24D2': 'c',
                '\uFF43': 'c',
                '\u0107': 'c',
                '\u0109': 'c',
                '\u010B': 'c',
                '\u010D': 'c',
                '\u00E7': 'c',
                '\u1E09': 'c',
                '\u0188': 'c',
                '\u023C': 'c',
                '\uA73F': 'c',
                '\u2184': 'c',
                '\u24D3': 'd',
                '\uFF44': 'd',
                '\u1E0B': 'd',
                '\u010F': 'd',
                '\u1E0D': 'd',
                '\u1E11': 'd',
                '\u1E13': 'd',
                '\u1E0F': 'd',
                '\u0111': 'd',
                '\u018C': 'd',
                '\u0256': 'd',
                '\u0257': 'd',
                '\uA77A': 'd',
                '\u01F3': 'dz',
                '\u01C6': 'dz',
                '\u24D4': 'e',
                '\uFF45': 'e',
                '\u00E8': 'e',
                '\u00E9': 'e',
                '\u00EA': 'e',
                '\u1EC1': 'e',
                '\u1EBF': 'e',
                '\u1EC5': 'e',
                '\u1EC3': 'e',
                '\u1EBD': 'e',
                '\u0113': 'e',
                '\u1E15': 'e',
                '\u1E17': 'e',
                '\u0115': 'e',
                '\u0117': 'e',
                '\u00EB': 'e',
                '\u1EBB': 'e',
                '\u011B': 'e',
                '\u0205': 'e',
                '\u0207': 'e',
                '\u1EB9': 'e',
                '\u1EC7': 'e',
                '\u0229': 'e',
                '\u1E1D': 'e',
                '\u0119': 'e',
                '\u1E19': 'e',
                '\u1E1B': 'e',
                '\u0247': 'e',
                '\u025B': 'e',
                '\u01DD': 'e',
                '\u24D5': 'f',
                '\uFF46': 'f',
                '\u1E1F': 'f',
                '\u0192': 'f',
                '\uA77C': 'f',
                '\u24D6': 'g',
                '\uFF47': 'g',
                '\u01F5': 'g',
                '\u011D': 'g',
                '\u1E21': 'g',
                '\u011F': 'g',
                '\u0121': 'g',
                '\u01E7': 'g',
                '\u0123': 'g',
                '\u01E5': 'g',
                '\u0260': 'g',
                '\uA7A1': 'g',
                '\u1D79': 'g',
                '\uA77F': 'g',
                '\u24D7': 'h',
                '\uFF48': 'h',
                '\u0125': 'h',
                '\u1E23': 'h',
                '\u1E27': 'h',
                '\u021F': 'h',
                '\u1E25': 'h',
                '\u1E29': 'h',
                '\u1E2B': 'h',
                '\u1E96': 'h',
                '\u0127': 'h',
                '\u2C68': 'h',
                '\u2C76': 'h',
                '\u0265': 'h',
                '\u0195': 'hv',
                '\u24D8': 'i',
                '\uFF49': 'i',
                '\u00EC': 'i',
                '\u00ED': 'i',
                '\u00EE': 'i',
                '\u0129': 'i',
                '\u012B': 'i',
                '\u012D': 'i',
                '\u00EF': 'i',
                '\u1E2F': 'i',
                '\u1EC9': 'i',
                '\u01D0': 'i',
                '\u0209': 'i',
                '\u020B': 'i',
                '\u1ECB': 'i',
                '\u012F': 'i',
                '\u1E2D': 'i',
                '\u0268': 'i',
                '\u0131': 'i',
                '\u24D9': 'j',
                '\uFF4A': 'j',
                '\u0135': 'j',
                '\u01F0': 'j',
                '\u0249': 'j',
                '\u24DA': 'k',
                '\uFF4B': 'k',
                '\u1E31': 'k',
                '\u01E9': 'k',
                '\u1E33': 'k',
                '\u0137': 'k',
                '\u1E35': 'k',
                '\u0199': 'k',
                '\u2C6A': 'k',
                '\uA741': 'k',
                '\uA743': 'k',
                '\uA745': 'k',
                '\uA7A3': 'k',
                '\u24DB': 'l',
                '\uFF4C': 'l',
                '\u0140': 'l',
                '\u013A': 'l',
                '\u013E': 'l',
                '\u1E37': 'l',
                '\u1E39': 'l',
                '\u013C': 'l',
                '\u1E3D': 'l',
                '\u1E3B': 'l',
                '\u017F': 'l',
                '\u0142': 'l',
                '\u019A': 'l',
                '\u026B': 'l',
                '\u2C61': 'l',
                '\uA749': 'l',
                '\uA781': 'l',
                '\uA747': 'l',
                '\u01C9': 'lj',
                '\u24DC': 'm',
                '\uFF4D': 'm',
                '\u1E3F': 'm',
                '\u1E41': 'm',
                '\u1E43': 'm',
                '\u0271': 'm',
                '\u026F': 'm',
                '\u24DD': 'n',
                '\uFF4E': 'n',
                '\u01F9': 'n',
                '\u0144': 'n',
                '\u00F1': 'n',
                '\u1E45': 'n',
                '\u0148': 'n',
                '\u1E47': 'n',
                '\u0146': 'n',
                '\u1E4B': 'n',
                '\u1E49': 'n',
                '\u019E': 'n',
                '\u0272': 'n',
                '\u0149': 'n',
                '\uA791': 'n',
                '\uA7A5': 'n',
                '\u01CC': 'nj',
                '\u24DE': 'o',
                '\uFF4F': 'o',
                '\u00F2': 'o',
                '\u00F3': 'o',
                '\u00F4': 'o',
                '\u1ED3': 'o',
                '\u1ED1': 'o',
                '\u1ED7': 'o',
                '\u1ED5': 'o',
                '\u00F5': 'o',
                '\u1E4D': 'o',
                '\u022D': 'o',
                '\u1E4F': 'o',
                '\u014D': 'o',
                '\u1E51': 'o',
                '\u1E53': 'o',
                '\u014F': 'o',
                '\u022F': 'o',
                '\u0231': 'o',
                '\u00F6': 'o',
                '\u022B': 'o',
                '\u1ECF': 'o',
                '\u0151': 'o',
                '\u01D2': 'o',
                '\u020D': 'o',
                '\u020F': 'o',
                '\u01A1': 'o',
                '\u1EDD': 'o',
                '\u1EDB': 'o',
                '\u1EE1': 'o',
                '\u1EDF': 'o',
                '\u1EE3': 'o',
                '\u1ECD': 'o',
                '\u1ED9': 'o',
                '\u01EB': 'o',
                '\u01ED': 'o',
                '\u00F8': 'o',
                '\u01FF': 'o',
                '\u0254': 'o',
                '\uA74B': 'o',
                '\uA74D': 'o',
                '\u0275': 'o',
                '\u0153': 'oe',
                '\u01A3': 'oi',
                '\u0223': 'ou',
                '\uA74F': 'oo',
                '\u24DF': 'p',
                '\uFF50': 'p',
                '\u1E55': 'p',
                '\u1E57': 'p',
                '\u01A5': 'p',
                '\u1D7D': 'p',
                '\uA751': 'p',
                '\uA753': 'p',
                '\uA755': 'p',
                '\u24E0': 'q',
                '\uFF51': 'q',
                '\u024B': 'q',
                '\uA757': 'q',
                '\uA759': 'q',
                '\u24E1': 'r',
                '\uFF52': 'r',
                '\u0155': 'r',
                '\u1E59': 'r',
                '\u0159': 'r',
                '\u0211': 'r',
                '\u0213': 'r',
                '\u1E5B': 'r',
                '\u1E5D': 'r',
                '\u0157': 'r',
                '\u1E5F': 'r',
                '\u024D': 'r',
                '\u027D': 'r',
                '\uA75B': 'r',
                '\uA7A7': 'r',
                '\uA783': 'r',
                '\u24E2': 's',
                '\uFF53': 's',
                '\u00DF': 's',
                '\u015B': 's',
                '\u1E65': 's',
                '\u015D': 's',
                '\u1E61': 's',
                '\u0161': 's',
                '\u1E67': 's',
                '\u1E63': 's',
                '\u1E69': 's',
                '\u0219': 's',
                '\u015F': 's',
                '\u023F': 's',
                '\uA7A9': 's',
                '\uA785': 's',
                '\u1E9B': 's',
                '\u24E3': 't',
                '\uFF54': 't',
                '\u1E6B': 't',
                '\u1E97': 't',
                '\u0165': 't',
                '\u1E6D': 't',
                '\u021B': 't',
                '\u0163': 't',
                '\u1E71': 't',
                '\u1E6F': 't',
                '\u0167': 't',
                '\u01AD': 't',
                '\u0288': 't',
                '\u2C66': 't',
                '\uA787': 't',
                '\uA729': 'tz',
                '\u24E4': 'u',
                '\uFF55': 'u',
                '\u00F9': 'u',
                '\u00FA': 'u',
                '\u00FB': 'u',
                '\u0169': 'u',
                '\u1E79': 'u',
                '\u016B': 'u',
                '\u1E7B': 'u',
                '\u016D': 'u',
                '\u00FC': 'u',
                '\u01DC': 'u',
                '\u01D8': 'u',
                '\u01D6': 'u',
                '\u01DA': 'u',
                '\u1EE7': 'u',
                '\u016F': 'u',
                '\u0171': 'u',
                '\u01D4': 'u',
                '\u0215': 'u',
                '\u0217': 'u',
                '\u01B0': 'u',
                '\u1EEB': 'u',
                '\u1EE9': 'u',
                '\u1EEF': 'u',
                '\u1EED': 'u',
                '\u1EF1': 'u',
                '\u1EE5': 'u',
                '\u1E73': 'u',
                '\u0173': 'u',
                '\u1E77': 'u',
                '\u1E75': 'u',
                '\u0289': 'u',
                '\u24E5': 'v',
                '\uFF56': 'v',
                '\u1E7D': 'v',
                '\u1E7F': 'v',
                '\u028B': 'v',
                '\uA75F': 'v',
                '\u028C': 'v',
                '\uA761': 'vy',
                '\u24E6': 'w',
                '\uFF57': 'w',
                '\u1E81': 'w',
                '\u1E83': 'w',
                '\u0175': 'w',
                '\u1E87': 'w',
                '\u1E85': 'w',
                '\u1E98': 'w',
                '\u1E89': 'w',
                '\u2C73': 'w',
                '\u24E7': 'x',
                '\uFF58': 'x',
                '\u1E8B': 'x',
                '\u1E8D': 'x',
                '\u24E8': 'y',
                '\uFF59': 'y',
                '\u1EF3': 'y',
                '\u00FD': 'y',
                '\u0177': 'y',
                '\u1EF9': 'y',
                '\u0233': 'y',
                '\u1E8F': 'y',
                '\u00FF': 'y',
                '\u1EF7': 'y',
                '\u1E99': 'y',
                '\u1EF5': 'y',
                '\u01B4': 'y',
                '\u024F': 'y',
                '\u1EFF': 'y',
                '\u24E9': 'z',
                '\uFF5A': 'z',
                '\u017A': 'z',
                '\u1E91': 'z',
                '\u017C': 'z',
                '\u017E': 'z',
                '\u1E93': 'z',
                '\u1E95': 'z',
                '\u01B6': 'z',
                '\u0225': 'z',
                '\u0240': 'z',
                '\u2C6C': 'z',
                '\uA763': 'z',
                '\u0386': '\u0391',
                '\u0388': '\u0395',
                '\u0389': '\u0397',
                '\u038A': '\u0399',
                '\u03AA': '\u0399',
                '\u038C': '\u039F',
                '\u038E': '\u03A5',
                '\u03AB': '\u03A5',
                '\u038F': '\u03A9',
                '\u03AC': '\u03B1',
                '\u03AD': '\u03B5',
                '\u03AE': '\u03B7',
                '\u03AF': '\u03B9',
                '\u03CA': '\u03B9',
                '\u0390': '\u03B9',
                '\u03CC': '\u03BF',
                '\u03CD': '\u03C5',
                '\u03CB': '\u03C5',
                '\u03B0': '\u03C5',
                '\u03CE': '\u03C9',
                '\u03C2': '\u03C3',
                '\u2019': '\''
            };
            return diacritics;
        });
        S2.define('select2/data/base', [
  '../utils'
], function (Utils) {
            function BaseAdapter($element, options) {
                BaseAdapter.__super__.constructor.call(this);
            }
            Utils.Extend(BaseAdapter, Utils.Observable);
            BaseAdapter.prototype.current = function (callback) {
                throw new Error('The `current` method must be defined in child classes.');
            };
            BaseAdapter.prototype.query = function (params, callback) {
                throw new Error('The `query` method must be defined in child classes.');
            };
            BaseAdapter.prototype.bind = function (container, $container) {
                // Can be implemented in subclasses
            };
            BaseAdapter.prototype.destroy = function () {
                // Can be implemented in subclasses
            };
            BaseAdapter.prototype.generateResultId = function (container, data) {
                var id = container.id + '-result-';
                id += Utils.generateChars(4);
                if (data.id != null) {
                    id += '-' + data.id.toString();
                } else {
                    id += '-' + Utils.generateChars(4);
                }
                return id;
            };
            return BaseAdapter;
        });
        S2.define('select2/data/select', [
  './base',
  '../utils',
  'jquery'
], function (BaseAdapter, Utils, $) {
            function SelectAdapter($element, options) {
                this.$element = $element;
                this.options = options;
                SelectAdapter.__super__.constructor.call(this);
            }
            Utils.Extend(SelectAdapter, BaseAdapter);
            SelectAdapter.prototype.current = function (callback) {
                var data = [];
                var self = this;
                this.$element.find(':selected').each(function () {
                    var $option = $(this);
                    var option = self.item($option);
                    data.push(option);
                });
                callback(data);
            };
            SelectAdapter.prototype.select = function (data) {
                var self = this;
                data.selected = true;
                // If data.element is a DOM node, use it instead
                if ($(data.element).is('option')) {
                    data.element.selected = true;
                    this.$element.trigger('change');
                    return;
                }
                if (this.$element.prop('multiple')) {
                    this.current(function (currentData) {
                        var val = [];
                        data = [data];
                        data.push.apply(data, currentData);
                        for (var d = 0; d < data.length; d++) {
                            var id = data[d].id;
                            if ($.inArray(id, val) === -1) {
                                val.push(id);
                            }
                        }
                        self.$element.val(val);
                        self.$element.trigger('change');
                    });
                } else {
                    var val = data.id;
                    this.$element.val(val);
                    this.$element.trigger('change');
                }
            };
            SelectAdapter.prototype.unselect = function (data) {
                var self = this;
                if (!this.$element.prop('multiple')) {
                    return;
                }
                data.selected = false;
                if ($(data.element).is('option')) {
                    data.element.selected = false;
                    this.$element.trigger('change');
                    return;
                }
                this.current(function (currentData) {
                    var val = [];
                    for (var d = 0; d < currentData.length; d++) {
                        var id = currentData[d].id;
                        if (id !== data.id && $.inArray(id, val) === -1) {
                            val.push(id);
                        }
                    }
                    self.$element.val(val);
                    self.$element.trigger('change');
                });
            };
            SelectAdapter.prototype.bind = function (container, $container) {
                var self = this;
                this.container = container;
                container.on('select', function (params) {
                    self.select(params.data);
                });
                container.on('unselect', function (params) {
                    self.unselect(params.data);
                });
            };
            SelectAdapter.prototype.destroy = function () {
                // Remove anything added to child elements
                this.$element.find('*').each(function () {
                    // Remove any custom data set by Select2
                    Utils.RemoveData(this);
                });
            };
            SelectAdapter.prototype.query = function (params, callback) {
                var data = [];
                var self = this;
                var $options = this.$element.children();
                $options.each(function () {
                    var $option = $(this);
                    if (!$option.is('option') && !$option.is('optgroup')) {
                        return;
                    }
                    var option = self.item($option);
                    var matches = self.matches(params, option);
                    if (matches !== null) {
                        data.push(matches);
                    }
                });
                callback({
                    results: data
                });
            };
            SelectAdapter.prototype.addOptions = function ($options) {
                Utils.appendMany(this.$element, $options);
            };
            SelectAdapter.prototype.option = function (data) {
                var option;
                if (data.children) {
                    option = document.createElement('optgroup');
                    option.label = data.text;
                } else {
                    option = document.createElement('option');
                    if (option.textContent !== undefined) {
                        option.textContent = data.text;
                    } else {
                        option.innerText = data.text;
                    }
                }
                if (data.id !== undefined) {
                    option.value = data.id;
                }
                if (data.disabled) {
                    option.disabled = true;
                }
                if (data.selected) {
                    option.selected = true;
                }
                if (data.title) {
                    option.title = data.title;
                }
                var $option = $(option);
                var normalizedData = this._normalizeItem(data);
                normalizedData.element = option;
                // Override the option's data with the combined data
                Utils.StoreData(option, 'data', normalizedData);
                return $option;
            };
            SelectAdapter.prototype.item = function ($option) {
                var data = {};
                data = Utils.GetData($option[0], 'data');
                if (data != null) {
                    return data;
                }
                if ($option.is('option')) {
                    data = {
                        id: $option.val(),
                        text: $option.text(),
                        disabled: $option.prop('disabled'),
                        selected: $option.prop('selected'),
                        title: $option.prop('title')
                    };
                } else if ($option.is('optgroup')) {
                    data = {
                        text: $option.prop('label'),
                        children: [],
                        title: $option.prop('title')
                    };
                    var $children = $option.children('option');
                    var children = [];
                    for (var c = 0; c < $children.length; c++) {
                        var $child = $($children[c]);
                        var child = this.item($child);
                        children.push(child);
                    }
                    data.children = children;
                }
                data = this._normalizeItem(data);
                data.element = $option[0];
                Utils.StoreData($option[0], 'data', data);
                return data;
            };
            SelectAdapter.prototype._normalizeItem = function (item) {
                if (item !== Object(item)) {
                    item = {
                        id: item,
                        text: item
                    };
                }
                item = $.extend({}, {
                    text: ''
                }, item);
                var defaults = {
                    selected: false,
                    disabled: false
                };
                if (item.id != null) {
                    item.id = item.id.toString();
                }
                if (item.text != null) {
                    item.text = item.text.toString();
                }
                if (item._resultId == null && item.id && this.container != null) {
                    item._resultId = this.generateResultId(this.container, item);
                }
                return $.extend({}, defaults, item);
            };
            SelectAdapter.prototype.matches = function (params, data) {
                var matcher = this.options.get('matcher');
                return matcher(params, data);
            };
            return SelectAdapter;
        });
        S2.define('select2/data/array', [
  './select',
  '../utils',
  'jquery'
], function (SelectAdapter, Utils, $) {
            function ArrayAdapter($element, options) {
                this._dataToConvert = options.get('data') || [];
                ArrayAdapter.__super__.constructor.call(this, $element, options);
            }
            Utils.Extend(ArrayAdapter, SelectAdapter);
            ArrayAdapter.prototype.bind = function (container, $container) {
                ArrayAdapter.__super__.bind.call(this, container, $container);
                this.addOptions(this.convertToOptions(this._dataToConvert));
            };
            ArrayAdapter.prototype.select = function (data) {
                var $option = this.$element.find('option').filter(function (i, elm) {
                    return elm.value == data.id.toString();
                });
                if ($option.length === 0) {
                    $option = this.option(data);
                    this.addOptions($option);
                }
                ArrayAdapter.__super__.select.call(this, data);
            };
            ArrayAdapter.prototype.convertToOptions = function (data) {
                var self = this;
                var $existing = this.$element.find('option');
                var existingIds = $existing.map(function () {
                    return self.item($(this)).id;
                }).get();
                var $options = [];
                // Filter out all items except for the one passed in the argument
                function onlyItem(item) {
                    return function () {
                        return $(this).val() == item.id;
                    };
                }
                for (var d = 0; d < data.length; d++) {
                    var item = this._normalizeItem(data[d]);
                    // Skip items which were pre-loaded, only merge the data
                    if ($.inArray(item.id, existingIds) >= 0) {
                        var $existingOption = $existing.filter(onlyItem(item));
                        var existingData = this.item($existingOption);
                        var newData = $.extend(true, {}, item, existingData);
                        var $newOption = this.option(newData);
                        $existingOption.replaceWith($newOption);
                        continue;
                    }
                    var $option = this.option(item);
                    if (item.children) {
                        var $children = this.convertToOptions(item.children);
                        Utils.appendMany($option, $children);
                    }
                    $options.push($option);
                }
                return $options;
            };
            return ArrayAdapter;
        });
        S2.define('select2/data/ajax', [
  './array',
  '../utils',
  'jquery'
], function (ArrayAdapter, Utils, $) {
            function AjaxAdapter($element, options) {
                this.ajaxOptions = this._applyDefaults(options.get('ajax'));
                if (this.ajaxOptions.processResults != null) {
                    this.processResults = this.ajaxOptions.processResults;
                }
                AjaxAdapter.__super__.constructor.call(this, $element, options);
            }
            Utils.Extend(AjaxAdapter, ArrayAdapter);
            AjaxAdapter.prototype._applyDefaults = function (options) {
                var defaults = {
                    data: function (params) {
                        return $.extend({}, params, {
                            q: params.term
                        });
                    },
                    transport: function (params, success, failure) {
                        var $request = $.ajax(params);
                        $request.then(success);
                        $request.fail(failure);
                        return $request;
                    }
                };
                return $.extend({}, defaults, options, true);
            };
            AjaxAdapter.prototype.processResults = function (results) {
                return results;
            };
            AjaxAdapter.prototype.query = function (params, callback) {
                var matches = [];
                var self = this;
                if (this._request != null) {
                    // JSONP requests cannot always be aborted
                    if ($.isFunction(this._request.abort)) {
                        this._request.abort();
                    }
                    this._request = null;
                }
                var options = $.extend({
                    type: 'GET'
                }, this.ajaxOptions);
                if (typeof options.url === 'function') {
                    options.url = options.url.call(this.$element, params);
                }
                if (typeof options.data === 'function') {
                    options.data = options.data.call(this.$element, params);
                }
                
                function request() {
                    var $request = options.transport(options, function (data) {
                        var results = self.processResults(data, params);
                        if (self.options.get('debug') && window.console && console.error) {
                            // Check to make sure that the response included a `results` key.
                            if (!results || !results.results || !$.isArray(results.results)) {
                                console.error('Select2: The AJAX results did not return an array in the ' + '`results` key of the response.');
                            }
                        }
                        callback(results);
                    }, function () {
                        // Attempt to detect if a request was aborted
                        // Only works if the transport exposes a status property
                        if ('status' in $request && ($request.status === 0 || $request.status === '0')) {
                            return;
                        }
                        self.trigger('results:message', {
                            message: 'errorLoading'
                        });
                    });
                    self._request = $request;
                }
                if (this.ajaxOptions.delay && params.term != null) {
                    if (this._queryTimeout) {
                        window.clearTimeout(this._queryTimeout);
                    }
                    this._queryTimeout = window.setTimeout(request, this.ajaxOptions.delay);
                } else {
                    request();
                }
            };
            return AjaxAdapter;
        });
        S2.define('select2/data/tags', [
  'jquery'
], function ($) {
            function Tags(decorated, $element, options) {
                var tags = options.get('tags');
                var createTag = options.get('createTag');
                if (createTag !== undefined) {
                    this.createTag = createTag;
                }
                var insertTag = options.get('insertTag');
                if (insertTag !== undefined) {
                    this.insertTag = insertTag;
                }
                decorated.call(this, $element, options);
                if ($.isArray(tags)) {
                    for (var t = 0; t < tags.length; t++) {
                        var tag = tags[t];
                        var item = this._normalizeItem(tag);
                        var $option = this.option(item);
                        this.$element.append($option);
                    }
                }
            }
            Tags.prototype.query = function (decorated, params, callback) {
                var self = this;
                this._removeOldTags();
                if (params.term == null || params.page != null) {
                    decorated.call(this, params, callback);
                    return;
                }
                
                function wrapper(obj, child) {
                    var data = obj.results;
                    for (var i = 0; i < data.length; i++) {
                        var option = data[i];
                        var checkChildren = (option.children != null && !wrapper({
                            results: option.children
                        }, true));
                        var optionText = (option.text || '').toUpperCase();
                        var paramsTerm = (params.term || '').toUpperCase();
                        var checkText = optionText === paramsTerm;
                        if (checkText || checkChildren) {
                            if (child) {
                                return false;
                            }
                            obj.data = data;
                            callback(obj);
                            return;
                        }
                    }
                    if (child) {
                        return true;
                    }
                    var tag = self.createTag(params);
                    if (tag != null) {
                        var $option = self.option(tag);
                        $option.attr('data-select2-tag', true);
                        self.addOptions([$option]);
                        self.insertTag(data, tag);
                    }
                    obj.results = data;
                    callback(obj);
                }
                decorated.call(this, params, wrapper);
            };
            Tags.prototype.createTag = function (decorated, params) {
                var term = $.trim(params.term);
                if (term === '') {
                    return null;
                }
                return {
                    id: term,
                    text: term
                };
            };
            Tags.prototype.insertTag = function (_, data, tag) {
                data.unshift(tag);
            };
            Tags.prototype._removeOldTags = function (_) {
                var $options = this.$element.find('option[data-select2-tag]');
                $options.each(function () {
                    if (this.selected) {
                        return;
                    }
                    $(this).remove();
                });
            };
            return Tags;
        });
        S2.define('select2/data/tokenizer', [
  'jquery'
], function ($) {
            function Tokenizer(decorated, $element, options) {
                var tokenizer = options.get('tokenizer');
                if (tokenizer !== undefined) {
                    this.tokenizer = tokenizer;
                }
                decorated.call(this, $element, options);
            }
            Tokenizer.prototype.bind = function (decorated, container, $container) {
                decorated.call(this, container, $container);
                this.$search = container.dropdown.$search || container.selection.$search || $container.find('.select2-search__field');
            };
            Tokenizer.prototype.query = function (decorated, params, callback) {
                var self = this;
                
                function createAndSelect(data) {
                    // Normalize the data object so we can use it for checks
                    var item = self._normalizeItem(data);
                    // Check if the data object already exists as a tag
                    // Select it if it doesn't
                    var $existingOptions = self.$element.find('option').filter(function () {
                        return $(this).val() === item.id;
                    });
                    // If an existing option wasn't found for it, create the option
                    if (!$existingOptions.length) {
                        var $option = self.option(item);
                        $option.attr('data-select2-tag', true);
                        self._removeOldTags();
                        self.addOptions([$option]);
                    }
                    // Select the item, now that we know there is an option for it
                    select(item);
                }
                
                function select(data) {
                    self.trigger('select', {
                        data: data
                    });
                }
                params.term = params.term || '';
                var tokenData = this.tokenizer(params, this.options, createAndSelect);
                if (tokenData.term !== params.term) {
                    // Replace the search term if we have the search box
                    if (this.$search.length) {
                        this.$search.val(tokenData.term);
                        this.$search.trigger('focus');
                    }
                    params.term = tokenData.term;
                }
                decorated.call(this, params, callback);
            };
            Tokenizer.prototype.tokenizer = function (_, params, options, callback) {
                var separators = options.get('tokenSeparators') || [];
                var term = params.term;
                var i = 0;
                var createTag = this.createTag || function (params) {
                    return {
                        id: params.term,
                        text: params.term
                    };
                };
                while (i < term.length) {
                    var termChar = term[i];
                    if ($.inArray(termChar, separators) === -1) {
                        i++;
                        continue;
                    }
                    var part = term.substr(0, i);
                    var partParams = $.extend({}, params, {
                        term: part
                    });
                    var data = createTag(partParams);
                    if (data == null) {
                        i++;
                        continue;
                    }
                    callback(data);
                    // Reset the term to not include the tokenized portion
                    term = term.substr(i + 1) || '';
                    i = 0;
                }
                return {
                    term: term
                };
            };
            return Tokenizer;
        });
        S2.define('select2/data/minimumInputLength', [
            
], function () {
            function MinimumInputLength(decorated, $e, options) {
                this.minimumInputLength = options.get('minimumInputLength');
                decorated.call(this, $e, options);
            }
            MinimumInputLength.prototype.query = function (decorated, params, callback) {
                params.term = params.term || '';
                if (params.term.length < this.minimumInputLength) {
                    this.trigger('results:message', {
                        message: 'inputTooShort',
                        args: {
                            minimum: this.minimumInputLength,
                            input: params.term,
                            params: params
                        }
                    });
                    return;
                }
                decorated.call(this, params, callback);
            };
            return MinimumInputLength;
        });
        S2.define('select2/data/maximumInputLength', [
            
], function () {
            function MaximumInputLength(decorated, $e, options) {
                this.maximumInputLength = options.get('maximumInputLength');
                decorated.call(this, $e, options);
            }
            MaximumInputLength.prototype.query = function (decorated, params, callback) {
                params.term = params.term || '';
                if (this.maximumInputLength > 0 && params.term.length > this.maximumInputLength) {
                    this.trigger('results:message', {
                        message: 'inputTooLong',
                        args: {
                            maximum: this.maximumInputLength,
                            input: params.term,
                            params: params
                        }
                    });
                    return;
                }
                decorated.call(this, params, callback);
            };
            return MaximumInputLength;
        });
        S2.define('select2/data/maximumSelectionLength', [
            
], function () {
            function MaximumSelectionLength(decorated, $e, options) {
                this.maximumSelectionLength = options.get('maximumSelectionLength');
                decorated.call(this, $e, options);
            }
            MaximumSelectionLength.prototype.bind = function (decorated, container, $container) {
                var self = this;
                decorated.call(this, container, $container);
                container.on('select', function () {
                    self._checkIfMaximumSelected();
                });
            };
            MaximumSelectionLength.prototype.query = function (decorated, params, callback) {
                var self = this;
                this._checkIfMaximumSelected(function () {
                    decorated.call(self, params, callback);
                });
            };
            MaximumSelectionLength.prototype._checkIfMaximumSelected = function (_, successCallback) {
                var self = this;
                this.current(function (currentData) {
                    var count = currentData != null ? currentData.length : 0;
                    if (self.maximumSelectionLength > 0 && count >= self.maximumSelectionLength) {
                        self.trigger('results:message', {
                            message: 'maximumSelected',
                            args: {
                                maximum: self.maximumSelectionLength
                            }
                        });
                        return;
                    }
                    if (successCallback) {
                        successCallback();
                    }
                });
            };
            return MaximumSelectionLength;
        });
        S2.define('select2/dropdown', [
  'jquery',
  './utils'
], function ($, Utils) {
            function Dropdown($element, options) {
                this.$element = $element;
                this.options = options;
                Dropdown.__super__.constructor.call(this);
            }
            Utils.Extend(Dropdown, Utils.Observable);
            Dropdown.prototype.render = function () {
                var $dropdown = $('<span class="select2-dropdown">' + '<span class="select2-results"></span>' + '</span>');
                $dropdown.attr('dir', this.options.get('dir'));
                this.$dropdown = $dropdown;
                return $dropdown;
            };
            Dropdown.prototype.bind = function () {
                // Should be implemented in subclasses
            };
            Dropdown.prototype.position = function ($dropdown, $container) {
                // Should be implemented in subclasses
            };
            Dropdown.prototype.destroy = function () {
                // Remove the dropdown from the DOM
                this.$dropdown.remove();
            };
            return Dropdown;
        });
        S2.define('select2/dropdown/search', [
  'jquery',
  '../utils'
], function ($, Utils) {
            function Search() {}
            Search.prototype.render = function (decorated) {
                var $rendered = decorated.call(this);
                var $search = $('<span class="select2-search select2-search--dropdown">' + '<input class="select2-search__field" type="search" tabindex="-1"' + ' autocomplete="off" autocorrect="off" autocapitalize="none"' + ' spellcheck="false" role="searchbox" aria-autocomplete="list" />' + '</span>');
                this.$searchContainer = $search;
                this.$search = $search.find('input');
                $rendered.prepend($search);
                return $rendered;
            };
            Search.prototype.bind = function (decorated, container, $container) {
                var self = this;
                var resultsId = container.id + '-results';
                decorated.call(this, container, $container);
                this.$search.on('keydown', function (evt) {
                    self.trigger('keypress', evt);
                    self._keyUpPrevented = evt.isDefaultPrevented();
                });
                // Workaround for browsers which do not support the `input` event
                // This will prevent double-triggering of events for browsers which support
                // both the `keyup` and `input` events.
                this.$search.on('input', function (evt) {
                    // Unbind the duplicated `keyup` event
                    $(this).off('keyup');
                });
                this.$search.on('keyup input', function (evt) {
                    self.handleSearch(evt);
                });
                container.on('open', function () {
                    self.$search.attr('tabindex', 0);
                    self.$search.attr('aria-controls', resultsId);
                    self.$search.trigger('focus');
                    window.setTimeout(function () {
                        self.$search.trigger('focus');
                    }, 0);
                });
                container.on('close', function () {
                    self.$search.attr('tabindex', -1);
                    self.$search.removeAttr('aria-controls');
                    self.$search.removeAttr('aria-activedescendant');
                    self.$search.val('');
                    self.$search.trigger('blur');
                });
                container.on('focus', function () {
                    if (!container.isOpen()) {
                        self.$search.trigger('focus');
                    }
                });
                container.on('results:all', function (params) {
                    if (params.query.term == null || params.query.term === '') {
                        var showSearch = self.showSearch(params);
                        if (showSearch) {
                            self.$searchContainer.removeClass('select2-search--hide');
                        } else {
                            self.$searchContainer.addClass('select2-search--hide');
                        }
                    }
                });
                container.on('results:focus', function (params) {
                    if (params.data._resultId) {
                        self.$search.attr('aria-activedescendant', params.data._resultId);
                    } else {
                        self.$search.removeAttr('aria-activedescendant');
                    }
                });
            };
            Search.prototype.handleSearch = function (evt) {
                if (!this._keyUpPrevented) {
                    var input = this.$search.val();
                    this.trigger('query', {
                        term: input
                    });
                }
                this._keyUpPrevented = false;
            };
            Search.prototype.showSearch = function (_, params) {
                return true;
            };
            return Search;
        });
        S2.define('select2/dropdown/hidePlaceholder', [
            
], function () {
            function HidePlaceholder(decorated, $element, options, dataAdapter) {
                this.placeholder = this.normalizePlaceholder(options.get('placeholder'));
                decorated.call(this, $element, options, dataAdapter);
            }
            HidePlaceholder.prototype.append = function (decorated, data) {
                data.results = this.removePlaceholder(data.results);
                decorated.call(this, data);
            };
            HidePlaceholder.prototype.normalizePlaceholder = function (_, placeholder) {
                if (typeof placeholder === 'string') {
                    placeholder = {
                        id: '',
                        text: placeholder
                    };
                }
                return placeholder;
            };
            HidePlaceholder.prototype.removePlaceholder = function (_, data) {
                var modifiedData = data.slice(0);
                for (var d = data.length - 1; d >= 0; d--) {
                    var item = data[d];
                    if (this.placeholder.id === item.id) {
                        modifiedData.splice(d, 1);
                    }
                }
                return modifiedData;
            };
            return HidePlaceholder;
        });
        S2.define('select2/dropdown/infiniteScroll', [
  'jquery'
], function ($) {
            function InfiniteScroll(decorated, $element, options, dataAdapter) {
                this.lastParams = {};
                decorated.call(this, $element, options, dataAdapter);
                this.$loadingMore = this.createLoadingMore();
                this.loading = false;
            }
            InfiniteScroll.prototype.append = function (decorated, data) {
                this.$loadingMore.remove();
                this.loading = false;
                decorated.call(this, data);
                if (this.showLoadingMore(data)) {
                    this.$results.append(this.$loadingMore);
                    this.loadMoreIfNeeded();
                }
            };
            InfiniteScroll.prototype.bind = function (decorated, container, $container) {
                var self = this;
                decorated.call(this, container, $container);
                container.on('query', function (params) {
                    self.lastParams = params;
                    self.loading = true;
                });
                container.on('query:append', function (params) {
                    self.lastParams = params;
                    self.loading = true;
                });
                this.$results.on('scroll', this.loadMoreIfNeeded.bind(this));
            };
            InfiniteScroll.prototype.loadMoreIfNeeded = function () {
                var isLoadMoreVisible = $.contains(document.documentElement, this.$loadingMore[0]);
                if (this.loading || !isLoadMoreVisible) {
                    return;
                }
                var currentOffset = this.$results.offset().top + this.$results.outerHeight(false);
                var loadingMoreOffset = this.$loadingMore.offset().top + this.$loadingMore.outerHeight(false);
                if (currentOffset + 50 >= loadingMoreOffset) {
                    this.loadMore();
                }
            };
            InfiniteScroll.prototype.loadMore = function () {
                this.loading = true;
                var params = $.extend({}, {
                    page: 1
                }, this.lastParams);
                params.page++;
                this.trigger('query:append', params);
            };
            InfiniteScroll.prototype.showLoadingMore = function (_, data) {
                return data.pagination && data.pagination.more;
            };
            InfiniteScroll.prototype.createLoadingMore = function () {
                var $option = $('<li ' + 'class="select2-results__option select2-results__option--load-more"' + 'role="option" aria-disabled="true"></li>');
                var message = this.options.get('translations').get('loadingMore');
                $option.html(message(this.lastParams));
                return $option;
            };
            return InfiniteScroll;
        });
        S2.define('select2/dropdown/attachBody', [
  'jquery',
  '../utils'
], function ($, Utils) {
            function AttachBody(decorated, $element, options) {
                this.$dropdownParent = $(options.get('dropdownParent') || document.body);
                decorated.call(this, $element, options);
            }
            AttachBody.prototype.bind = function (decorated, container, $container) {
                var self = this;
                decorated.call(this, container, $container);
                container.on('open', function () {
                    self._showDropdown();
                    self._attachPositioningHandler(container);
                    // Must bind after the results handlers to ensure correct sizing
                    self._bindContainerResultHandlers(container);
                });
                container.on('close', function () {
                    self._hideDropdown();
                    self._detachPositioningHandler(container);
                });
                this.$dropdownContainer.on('mousedown', function (evt) {
                    evt.stopPropagation();
                });
            };
            AttachBody.prototype.destroy = function (decorated) {
                decorated.call(this);
                this.$dropdownContainer.remove();
            };
            AttachBody.prototype.position = function (decorated, $dropdown, $container) {
                // Clone all of the container classes
                $dropdown.attr('class', $container.attr('class'));
                $dropdown.removeClass('select2');
                $dropdown.addClass('select2-container--open');
                $dropdown.css({
                    position: 'absolute',
                    top: -999999
                });
                this.$container = $container;
            };
            AttachBody.prototype.render = function (decorated) {
                var $container = $('<span></span>');
                var $dropdown = decorated.call(this);
                $container.append($dropdown);
                this.$dropdownContainer = $container;
                return $container;
            };
            AttachBody.prototype._hideDropdown = function (decorated) {
                this.$dropdownContainer.detach();
            };
            AttachBody.prototype._bindContainerResultHandlers = function (decorated, container) {
                // These should only be bound once
                if (this._containerResultsHandlersBound) {
                    return;
                }
                var self = this;
                container.on('results:all', function () {
                    self._positionDropdown();
                    self._resizeDropdown();
                });
                container.on('results:append', function () {
                    self._positionDropdown();
                    self._resizeDropdown();
                });
                container.on('results:message', function () {
                    self._positionDropdown();
                    self._resizeDropdown();
                });
                container.on('select', function () {
                    self._positionDropdown();
                    self._resizeDropdown();
                });
                container.on('unselect', function () {
                    self._positionDropdown();
                    self._resizeDropdown();
                });
                this._containerResultsHandlersBound = true;
            };
            AttachBody.prototype._attachPositioningHandler = function (decorated, container) {
                var self = this;
                var scrollEvent = 'scroll.select2.' + container.id;
                var resizeEvent = 'resize.select2.' + container.id;
                var orientationEvent = 'orientationchange.select2.' + container.id;
                var $watchers = this.$container.parents().filter(Utils.hasScroll);
                $watchers.each(function () {
                    Utils.StoreData(this, 'select2-scroll-position', {
                        x: $(this).scrollLeft(),
                        y: $(this).scrollTop()
                    });
                });
                $watchers.on(scrollEvent, function (ev) {
                    var position = Utils.GetData(this, 'select2-scroll-position');
                    $(this).scrollTop(position.y);
                });
                $(window).on(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent, function (e) {
                    self._positionDropdown();
                    self._resizeDropdown();
                });
            };
            AttachBody.prototype._detachPositioningHandler = function (decorated, container) {
                var scrollEvent = 'scroll.select2.' + container.id;
                var resizeEvent = 'resize.select2.' + container.id;
                var orientationEvent = 'orientationchange.select2.' + container.id;
                var $watchers = this.$container.parents().filter(Utils.hasScroll);
                $watchers.off(scrollEvent);
                $(window).off(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent);
            };
            AttachBody.prototype._positionDropdown = function () {
                var $window = $(window);
                var isCurrentlyAbove = this.$dropdown.hasClass('select2-dropdown--above');
                var isCurrentlyBelow = this.$dropdown.hasClass('select2-dropdown--below');
                var newDirection = null;
                var offset = this.$container.offset();
                offset.bottom = offset.top + this.$container.outerHeight(false);
                var container = {
                    height: this.$container.outerHeight(false)
                };
                container.top = offset.top;
                container.bottom = offset.top + container.height;
                var dropdown = {
                    height: this.$dropdown.outerHeight(false)
                };
                var viewport = {
                    top: $window.scrollTop(),
                    bottom: $window.scrollTop() + $window.height()
                };
                var enoughRoomAbove = viewport.top < (offset.top - dropdown.height);
                var enoughRoomBelow = viewport.bottom > (offset.bottom + dropdown.height);
                var css = {
                    left: offset.left,
                    top: container.bottom
                };
                // Determine what the parent element is to use for calculating the offset
                var $offsetParent = this.$dropdownParent;
                // For statically positioned elements, we need to get the element
                // that is determining the offset
                if ($offsetParent.css('position') === 'static') {
                    $offsetParent = $offsetParent.offsetParent();
                }
                var parentOffset = {
                    top: 0,
                    left: 0
                };
                if ($.contains(document.body, $offsetParent[0]) || $offsetParent[0].isConnected) {
                    parentOffset = $offsetParent.offset();
                }
                css.top -= parentOffset.top;
                css.left -= parentOffset.left;
                if (!isCurrentlyAbove && !isCurrentlyBelow) {
                    newDirection = 'below';
                }
                if (!enoughRoomBelow && enoughRoomAbove && !isCurrentlyAbove) {
                    newDirection = 'above';
                } else if (!enoughRoomAbove && enoughRoomBelow && isCurrentlyAbove) {
                    newDirection = 'below';
                }
                if (newDirection == 'above' || (isCurrentlyAbove && newDirection !== 'below')) {
                    css.top = container.top - parentOffset.top - dropdown.height;
                }
                if (newDirection != null) {
                    this.$dropdown.removeClass('select2-dropdown--below select2-dropdown--above').addClass('select2-dropdown--' + newDirection);
                    this.$container.removeClass('select2-container--below select2-container--above').addClass('select2-container--' + newDirection);
                }
                this.$dropdownContainer.css(css);
            };
            AttachBody.prototype._resizeDropdown = function () {
                var css = {
                    width: this.$container.outerWidth(false) + 'px'
                };
                if (this.options.get('dropdownAutoWidth')) {
                    css.minWidth = css.width;
                    css.position = 'relative';
                    css.width = 'auto';
                }
                this.$dropdown.css(css);
            };
            AttachBody.prototype._showDropdown = function (decorated) {
                this.$dropdownContainer.appendTo(this.$dropdownParent);
                this._positionDropdown();
                this._resizeDropdown();
            };
            return AttachBody;
        });
        S2.define('select2/dropdown/minimumResultsForSearch', [
            
], function () {
            function countResults(data) {
                var count = 0;
                for (var d = 0; d < data.length; d++) {
                    var item = data[d];
                    if (item.children) {
                        count += countResults(item.children);
                    } else {
                        count++;
                    }
                }
                return count;
            }
            
            function MinimumResultsForSearch(decorated, $element, options, dataAdapter) {
                this.minimumResultsForSearch = options.get('minimumResultsForSearch');
                if (this.minimumResultsForSearch < 0) {
                    this.minimumResultsForSearch = Infinity;
                }
                decorated.call(this, $element, options, dataAdapter);
            }
            MinimumResultsForSearch.prototype.showSearch = function (decorated, params) {
                if (countResults(params.data.results) < this.minimumResultsForSearch) {
                    return false;
                }
                return decorated.call(this, params);
            };
            return MinimumResultsForSearch;
        });
        S2.define('select2/dropdown/selectOnClose', [
  '../utils'
], function (Utils) {
            function SelectOnClose() {}
            SelectOnClose.prototype.bind = function (decorated, container, $container) {
                var self = this;
                decorated.call(this, container, $container);
                container.on('close', function (params) {
                    self._handleSelectOnClose(params);
                });
            };
            SelectOnClose.prototype._handleSelectOnClose = function (_, params) {
                if (params && params.originalSelect2Event != null) {
                    var event = params.originalSelect2Event;
                    // Don't select an item if the close event was triggered from a select or
                    // unselect event
                    if (event._type === 'select' || event._type === 'unselect') {
                        return;
                    }
                }
                var $highlightedResults = this.getHighlightedResults();
                // Only select highlighted results
                if ($highlightedResults.length < 1) {
                    return;
                }
                var data = Utils.GetData($highlightedResults[0], 'data');
                // Don't re-select already selected resulte
                if (
                    (data.element != null && data.element.selected) || (data.element == null && data.selected)) {
                    return;
                }
                this.trigger('select', {
                    data: data
                });
            };
            return SelectOnClose;
        });
        S2.define('select2/dropdown/closeOnSelect', [
            
], function () {
            function CloseOnSelect() {}
            CloseOnSelect.prototype.bind = function (decorated, container, $container) {
                var self = this;
                decorated.call(this, container, $container);
                container.on('select', function (evt) {
                    self._selectTriggered(evt);
                });
                container.on('unselect', function (evt) {
                    self._selectTriggered(evt);
                });
            };
            CloseOnSelect.prototype._selectTriggered = function (_, evt) {
                var originalEvent = evt.originalEvent;
                // Don't close if the control key is being held
                if (originalEvent && (originalEvent.ctrlKey || originalEvent.metaKey)) {
                    return;
                }
                this.trigger('close', {
                    originalEvent: originalEvent,
                    originalSelect2Event: evt
                });
            };
            return CloseOnSelect;
        });
        S2.define('select2/i18n/en', [], function () {
            // English
            return {
                errorLoading: function () {
                    return 'The results could not be loaded.';
                },
                inputTooLong: function (args) {
                    var overChars = args.input.length - args.maximum;
                    var message = 'Please delete ' + overChars + ' character';
                    if (overChars != 1) {
                        message += 's';
                    }
                    return message;
                },
                inputTooShort: function (args) {
                    var remainingChars = args.minimum - args.input.length;
                    var message = 'Please enter ' + remainingChars + ' or more characters';
                    return message;
                },
                loadingMore: function () {
                    return 'Loading more results…';
                },
                maximumSelected: function (args) {
                    var message = 'You can only select ' + args.maximum + ' item';
                    if (args.maximum != 1) {
                        message += 's';
                    }
                    return message;
                },
                noResults: function () {
                    return 'No results found';
                },
                searching: function () {
                    return 'Searching…';
                },
                removeAllItems: function () {
                    return 'Remove all items';
                }
            };
        });
        S2.define('select2/defaults', [
  'jquery',
  'require',
            
  './results',
            
  './selection/single',
  './selection/multiple',
  './selection/placeholder',
  './selection/allowClear',
  './selection/search',
  './selection/eventRelay',
            
  './utils',
  './translation',
  './diacritics',
            
  './data/select',
  './data/array',
  './data/ajax',
  './data/tags',
  './data/tokenizer',
  './data/minimumInputLength',
  './data/maximumInputLength',
  './data/maximumSelectionLength',
            
  './dropdown',
  './dropdown/search',
  './dropdown/hidePlaceholder',
  './dropdown/infiniteScroll',
  './dropdown/attachBody',
  './dropdown/minimumResultsForSearch',
  './dropdown/selectOnClose',
  './dropdown/closeOnSelect',
            
  './i18n/en'
], function ($, require, ResultsList, SingleSelection, MultipleSelection, Placeholder, AllowClear, SelectionSearch, EventRelay, Utils, Translation, DIACRITICS, SelectData, ArrayData, AjaxData, Tags, Tokenizer, MinimumInputLength, MaximumInputLength, MaximumSelectionLength, Dropdown, DropdownSearch, HidePlaceholder, InfiniteScroll, AttachBody, MinimumResultsForSearch, SelectOnClose, CloseOnSelect, EnglishTranslation) {
            function Defaults() {
                this.reset();
            }
            Defaults.prototype.apply = function (options) {
                options = $.extend(true, {}, this.defaults, options);
                if (options.dataAdapter == null) {
                    if (options.ajax != null) {
                        options.dataAdapter = AjaxData;
                    } else if (options.data != null) {
                        options.dataAdapter = ArrayData;
                    } else {
                        options.dataAdapter = SelectData;
                    }
                    if (options.minimumInputLength > 0) {
                        options.dataAdapter = Utils.Decorate(options.dataAdapter, MinimumInputLength);
                    }
                    if (options.maximumInputLength > 0) {
                        options.dataAdapter = Utils.Decorate(options.dataAdapter, MaximumInputLength);
                    }
                    if (options.maximumSelectionLength > 0) {
                        options.dataAdapter = Utils.Decorate(options.dataAdapter, MaximumSelectionLength);
                    }
                    if (options.tags) {
                        options.dataAdapter = Utils.Decorate(options.dataAdapter, Tags);
                    }
                    if (options.tokenSeparators != null || options.tokenizer != null) {
                        options.dataAdapter = Utils.Decorate(options.dataAdapter, Tokenizer);
                    }
                    if (options.query != null) {
                        var Query = require(options.amdBase + 'compat/query');
                        options.dataAdapter = Utils.Decorate(options.dataAdapter, Query);
                    }
                    if (options.initSelection != null) {
                        var InitSelection = require(options.amdBase + 'compat/initSelection');
                        options.dataAdapter = Utils.Decorate(options.dataAdapter, InitSelection);
                    }
                }
                if (options.resultsAdapter == null) {
                    options.resultsAdapter = ResultsList;
                    if (options.ajax != null) {
                        options.resultsAdapter = Utils.Decorate(options.resultsAdapter, InfiniteScroll);
                    }
                    if (options.placeholder != null) {
                        options.resultsAdapter = Utils.Decorate(options.resultsAdapter, HidePlaceholder);
                    }
                    if (options.selectOnClose) {
                        options.resultsAdapter = Utils.Decorate(options.resultsAdapter, SelectOnClose);
                    }
                }
                if (options.dropdownAdapter == null) {
                    if (options.multiple) {
                        options.dropdownAdapter = Dropdown;
                    } else {
                        var SearchableDropdown = Utils.Decorate(Dropdown, DropdownSearch);
                        options.dropdownAdapter = SearchableDropdown;
                    }
                    if (options.minimumResultsForSearch !== 0) {
                        options.dropdownAdapter = Utils.Decorate(options.dropdownAdapter, MinimumResultsForSearch);
                    }
                    if (options.closeOnSelect) {
                        options.dropdownAdapter = Utils.Decorate(options.dropdownAdapter, CloseOnSelect);
                    }
                    if (options.dropdownCssClass != null || options.dropdownCss != null || options.adaptDropdownCssClass != null) {
                        var DropdownCSS = require(options.amdBase + 'compat/dropdownCss');
                        options.dropdownAdapter = Utils.Decorate(options.dropdownAdapter, DropdownCSS);
                    }
                    options.dropdownAdapter = Utils.Decorate(options.dropdownAdapter, AttachBody);
                }
                if (options.selectionAdapter == null) {
                    if (options.multiple) {
                        options.selectionAdapter = MultipleSelection;
                    } else {
                        options.selectionAdapter = SingleSelection;
                    }
                    // Add the placeholder mixin if a placeholder was specified
                    if (options.placeholder != null) {
                        options.selectionAdapter = Utils.Decorate(options.selectionAdapter, Placeholder);
                    }
                    if (options.allowClear) {
                        options.selectionAdapter = Utils.Decorate(options.selectionAdapter, AllowClear);
                    }
                    if (options.multiple) {
                        options.selectionAdapter = Utils.Decorate(options.selectionAdapter, SelectionSearch);
                    }
                    if (options.containerCssClass != null || options.containerCss != null || options.adaptContainerCssClass != null) {
                        var ContainerCSS = require(options.amdBase + 'compat/containerCss');
                        options.selectionAdapter = Utils.Decorate(options.selectionAdapter, ContainerCSS);
                    }
                    options.selectionAdapter = Utils.Decorate(options.selectionAdapter, EventRelay);
                }
                // If the defaults were not previously applied from an element, it is
                // possible for the language option to have not been resolved
                options.language = this._resolveLanguage(options.language);
                // Always fall back to English since it will always be complete
                options.language.push('en');
                var uniqueLanguages = [];
                for (var l = 0; l < options.language.length; l++) {
                    var language = options.language[l];
                    if (uniqueLanguages.indexOf(language) === -1) {
                        uniqueLanguages.push(language);
                    }
                }
                options.language = uniqueLanguages;
                options.translations = this._processTranslations(options.language, options.debug);
                return options;
            };
            Defaults.prototype.reset = function () {
                function stripDiacritics(text) {
                    // Used 'uni range + named function' from http://jsperf.com/diacritics/18
                    function match(a) {
                        return DIACRITICS[a] || a;
                    }
                    return text.replace(/[^\u0000-\u007E]/g, match);
                }
                
                function matcher(params, data) {
                    // Always return the object if there is nothing to compare
                    if ($.trim(params.term) === '') {
                        return data;
                    }
                    // Do a recursive check for options with children
                    if (data.children && data.children.length > 0) {
                        // Clone the data object if there are children
                        // This is required as we modify the object to remove any non-matches
                        var match = $.extend(true, {}, data);
                        // Check each child of the option
                        for (var c = data.children.length - 1; c >= 0; c--) {
                            var child = data.children[c];
                            var matches = matcher(params, child);
                            // If there wasn't a match, remove the object in the array
                            if (matches == null) {
                                match.children.splice(c, 1);
                            }
                        }
                        // If any children matched, return the new object
                        if (match.children.length > 0) {
                            return match;
                        }
                        // If there were no matching children, check just the plain object
                        return matcher(params, match);
                    }
                    var original = stripDiacritics(data.text).toUpperCase();
                    var term = stripDiacritics(params.term).toUpperCase();
                    // Check if the text contains the term
                    if (original.indexOf(term) > -1) {
                        return data;
                    }
                    // If it doesn't contain the term, don't return anything
                    return null;
                }
                this.defaults = {
                    amdBase: './',
                    amdLanguageBase: './i18n/',
                    closeOnSelect: true,
                    debug: false,
                    dropdownAutoWidth: false,
                    escapeMarkup: Utils.escapeMarkup,
                    language: {},
                    matcher: matcher,
                    minimumInputLength: 0,
                    maximumInputLength: 0,
                    maximumSelectionLength: 0,
                    minimumResultsForSearch: 0,
                    selectOnClose: false,
                    scrollAfterSelect: false,
                    sorter: function (data) {
                        return data;
                    },
                    templateResult: function (result) {
                        return result.text;
                    },
                    templateSelection: function (selection) {
                        return selection.text;
                    },
                    theme: 'default',
                    width: 'resolve'
                };
            };
            Defaults.prototype.applyFromElement = function (options, $element) {
                var optionLanguage = options.language;
                var defaultLanguage = this.defaults.language;
                var elementLanguage = $element.prop('lang');
                var parentLanguage = $element.closest('[lang]').prop('lang');
                var languages = Array.prototype.concat.call(this._resolveLanguage(elementLanguage), this._resolveLanguage(optionLanguage), this._resolveLanguage(defaultLanguage), this._resolveLanguage(parentLanguage));
                options.language = languages;
                return options;
            };
            Defaults.prototype._resolveLanguage = function (language) {
                if (!language) {
                    return [];
                }
                if ($.isEmptyObject(language)) {
                    return [];
                }
                if ($.isPlainObject(language)) {
                    return [language];
                }
                var languages;
                if (!$.isArray(language)) {
                    languages = [language];
                } else {
                    languages = language;
                }
                var resolvedLanguages = [];
                for (var l = 0; l < languages.length; l++) {
                    resolvedLanguages.push(languages[l]);
                    if (typeof languages[l] === 'string' && languages[l].indexOf('-') > 0) {
                        // Extract the region information if it is included
                        var languageParts = languages[l].split('-');
                        var baseLanguage = languageParts[0];
                        resolvedLanguages.push(baseLanguage);
                    }
                }
                return resolvedLanguages;
            };
            Defaults.prototype._processTranslations = function (languages, debug) {
                var translations = new Translation();
                for (var l = 0; l < languages.length; l++) {
                    var languageData = new Translation();
                    var language = languages[l];
                    if (typeof language === 'string') {
                        try {
                            // Try to load it with the original name
                            languageData = Translation.loadPath(language);
                        } catch (e) {
                            try {
                                // If we couldn't load it, check if it wasn't the full path
                                language = this.defaults.amdLanguageBase + language;
                                languageData = Translation.loadPath(language);
                            } catch (ex) {
                                // The translation could not be loaded at all. Sometimes this is
                                // because of a configuration problem, other times this can be
                                // because of how Select2 helps load all possible translation files
                                if (debug && window.console && console.warn) {
                                    console.warn('Select2: The language file for "' + language + '" could ' + 'not be automatically loaded. A fallback will be used instead.');
                                }
                            }
                        }
                    } else if ($.isPlainObject(language)) {
                        languageData = new Translation(language);
                    } else {
                        languageData = language;
                    }
                    translations.extend(languageData);
                }
                return translations;
            };
            Defaults.prototype.set = function (key, value) {
                var camelKey = $.camelCase(key);
                var data = {};
                data[camelKey] = value;
                var convertedData = Utils._convertData(data);
                $.extend(true, this.defaults, convertedData);
            };
            var defaults = new Defaults();
            return defaults;
        });
        S2.define('select2/options', [
  'require',
  'jquery',
  './defaults',
  './utils'
], function (require, $, Defaults, Utils) {
            function Options(options, $element) {
                this.options = options;
                if ($element != null) {
                    this.fromElement($element);
                }
                if ($element != null) {
                    this.options = Defaults.applyFromElement(this.options, $element);
                }
                this.options = Defaults.apply(this.options);
                if ($element && $element.is('input')) {
                    var InputCompat = require(this.get('amdBase') + 'compat/inputData');
                    this.options.dataAdapter = Utils.Decorate(this.options.dataAdapter, InputCompat);
                }
            }
            Options.prototype.fromElement = function ($e) {
                var excludedData = ['select2'];
                if (this.options.multiple == null) {
                    this.options.multiple = $e.prop('multiple');
                }
                if (this.options.disabled == null) {
                    this.options.disabled = $e.prop('disabled');
                }
                if (this.options.dir == null) {
                    if ($e.prop('dir')) {
                        this.options.dir = $e.prop('dir');
                    } else if ($e.closest('[dir]').prop('dir')) {
                        this.options.dir = $e.closest('[dir]').prop('dir');
                    } else {
                        this.options.dir = 'ltr';
                    }
                }
                $e.prop('disabled', this.options.disabled);
                $e.prop('multiple', this.options.multiple);
                if (Utils.GetData($e[0], 'select2Tags')) {
                    if (this.options.debug && window.console && console.warn) {
                        console.warn('Select2: The `data-select2-tags` attribute has been changed to ' + 'use the `data-data` and `data-tags="true"` attributes and will be ' + 'removed in future versions of Select2.');
                    }
                    Utils.StoreData($e[0], 'data', Utils.GetData($e[0], 'select2Tags'));
                    Utils.StoreData($e[0], 'tags', true);
                }
                if (Utils.GetData($e[0], 'ajaxUrl')) {
                    if (this.options.debug && window.console && console.warn) {
                        console.warn('Select2: The `data-ajax-url` attribute has been changed to ' + '`data-ajax--url` and support for the old attribute will be removed' + ' in future versions of Select2.');
                    }
                    $e.attr('ajax--url', Utils.GetData($e[0], 'ajaxUrl'));
                    Utils.StoreData($e[0], 'ajax-Url', Utils.GetData($e[0], 'ajaxUrl'));
                }
                var dataset = {};
                
                function upperCaseLetter(_, letter) {
                    return letter.toUpperCase();
                }
                // Pre-load all of the attributes which are prefixed with `data-`
                for (var attr = 0; attr < $e[0].attributes.length; attr++) {
                    var attributeName = $e[0].attributes[attr].name;
                    var prefix = 'data-';
                    if (attributeName.substr(0, prefix.length) == prefix) {
                        // Get the contents of the attribute after `data-`
                        var dataName = attributeName.substring(prefix.length);
                        // Get the data contents from the consistent source
                        // This is more than likely the jQuery data helper
                        var dataValue = Utils.GetData($e[0], dataName);
                        // camelCase the attribute name to match the spec
                        var camelDataName = dataName.replace(/-([a-z])/g, upperCaseLetter);
                        // Store the data attribute contents into the dataset since
                        dataset[camelDataName] = dataValue;
                    }
                }
                // Prefer the element's `dataset` attribute if it exists
                // jQuery 1.x does not correctly handle data attributes with multiple dashes
                if ($.fn.jquery && $.fn.jquery.substr(0, 2) == '1.' && $e[0].dataset) {
                    dataset = $.extend(true, {}, $e[0].dataset, dataset);
                }
                // Prefer our internal data cache if it exists
                var data = $.extend(true, {}, Utils.GetData($e[0]), dataset);
                data = Utils._convertData(data);
                for (var key in data) {
                    if ($.inArray(key, excludedData) > -1) {
                        continue;
                    }
                    if ($.isPlainObject(this.options[key])) {
                        $.extend(this.options[key], data[key]);
                    } else {
                        this.options[key] = data[key];
                    }
                }
                return this;
            };
            Options.prototype.get = function (key) {
                return this.options[key];
            };
            Options.prototype.set = function (key, val) {
                this.options[key] = val;
            };
            return Options;
        });
        S2.define('select2/core', [
  'jquery',
  './options',
  './utils',
  './keys'
], function ($, Options, Utils, KEYS) {
            var Select2 = function ($element, options) {
                if (Utils.GetData($element[0], 'select2') != null) {
                    Utils.GetData($element[0], 'select2').destroy();
                }
                this.$element = $element;
                this.id = this._generateId($element);
                options = options || {};
                this.options = new Options(options, $element);
                Select2.__super__.constructor.call(this);
                // Set up the tabindex
                var tabindex = $element.attr('tabindex') || 0;
                Utils.StoreData($element[0], 'old-tabindex', tabindex);
                $element.attr('tabindex', '-1');
                // Set up containers and adapters
                var DataAdapter = this.options.get('dataAdapter');
                this.dataAdapter = new DataAdapter($element, this.options);
                var $container = this.render();
                this._placeContainer($container);
                var SelectionAdapter = this.options.get('selectionAdapter');
                this.selection = new SelectionAdapter($element, this.options);
                this.$selection = this.selection.render();
                this.selection.position(this.$selection, $container);
                var DropdownAdapter = this.options.get('dropdownAdapter');
                this.dropdown = new DropdownAdapter($element, this.options);
                this.$dropdown = this.dropdown.render();
                this.dropdown.position(this.$dropdown, $container);
                var ResultsAdapter = this.options.get('resultsAdapter');
                this.results = new ResultsAdapter($element, this.options, this.dataAdapter);
                this.$results = this.results.render();
                this.results.position(this.$results, this.$dropdown);
                // Bind events
                var self = this;
                // Bind the container to all of the adapters
                this._bindAdapters();
                // Register any DOM event handlers
                this._registerDomEvents();
                // Register any internal event handlers
                this._registerDataEvents();
                this._registerSelectionEvents();
                this._registerDropdownEvents();
                this._registerResultsEvents();
                this._registerEvents();
                // Set the initial state
                this.dataAdapter.current(function (initialData) {
                    self.trigger('selection:update', {
                        data: initialData
                    });
                });
                // Hide the original select
                $element.addClass('select2-hidden-accessible');
                $element.attr('aria-hidden', 'true');
                // Synchronize any monitored attributes
                this._syncAttributes();
                Utils.StoreData($element[0], 'select2', this);
                // Ensure backwards compatibility with $element.data('select2').
                $element.data('select2', this);
            };
            Utils.Extend(Select2, Utils.Observable);
            Select2.prototype._generateId = function ($element) {
                var id = '';
                if ($element.attr('id') != null) {
                    id = $element.attr('id');
                } else if ($element.attr('name') != null) {
                    id = $element.attr('name') + '-' + Utils.generateChars(2);
                } else {
                    id = Utils.generateChars(4);
                }
                id = id.replace(/(:|\.|\[|\]|,)/g, '');
                id = 'select2-' + id;
                return id;
            };
            Select2.prototype._placeContainer = function ($container) {
                $container.insertAfter(this.$element);
                var width = this._resolveWidth(this.$element, this.options.get('width'));
                if (width != null) {
                    $container.css('width', width);
                }
            };
            Select2.prototype._resolveWidth = function ($element, method) {
                var WIDTH = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                if (method == 'resolve') {
                    var styleWidth = this._resolveWidth($element, 'style');
                    if (styleWidth != null) {
                        return styleWidth;
                    }
                    return this._resolveWidth($element, 'element');
                }
                if (method == 'element') {
                    var elementWidth = $element.outerWidth(false);
                    if (elementWidth <= 0) {
                        return 'auto';
                    }
                    return elementWidth + 'px';
                }
                if (method == 'style') {
                    var style = $element.attr('style');
                    if (typeof (style) !== 'string') {
                        return null;
                    }
                    var attrs = style.split(';');
                    for (var i = 0, l = attrs.length; i < l; i = i + 1) {
                        var attr = attrs[i].replace(/\s/g, '');
                        var matches = attr.match(WIDTH);
                        if (matches !== null && matches.length >= 1) {
                            return matches[1];
                        }
                    }
                    return null;
                }
                if (method == 'computedstyle') {
                    var computedStyle = window.getComputedStyle($element[0]);
                    return computedStyle.width;
                }
                return method;
            };
            Select2.prototype._bindAdapters = function () {
                this.dataAdapter.bind(this, this.$container);
                this.selection.bind(this, this.$container);
                this.dropdown.bind(this, this.$container);
                this.results.bind(this, this.$container);
            };
            Select2.prototype._registerDomEvents = function () {
                var self = this;
                this.$element.on('change.select2', function () {
                    self.dataAdapter.current(function (data) {
                        self.trigger('selection:update', {
                            data: data
                        });
                    });
                });
                this.$element.on('focus.select2', function (evt) {
                    self.trigger('focus', evt);
                });
                this._syncA = Utils.bind(this._syncAttributes, this);
                this._syncS = Utils.bind(this._syncSubtree, this);
                if (this.$element[0].attachEvent) {
                    this.$element[0].attachEvent('onpropertychange', this._syncA);
                }
                var observer = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                if (observer != null) {
                    this._observer = new observer(function (mutations) {
                        $.each(mutations, self._syncA);
                        $.each(mutations, self._syncS);
                    });
                    this._observer.observe(this.$element[0], {
                        attributes: true,
                        childList: true,
                        subtree: false
                    });
                } else if (this.$element[0].addEventListener) {
                    this.$element[0].addEventListener('DOMAttrModified', self._syncA, false);
                    this.$element[0].addEventListener('DOMNodeInserted', self._syncS, false);
                    this.$element[0].addEventListener('DOMNodeRemoved', self._syncS, false);
                }
            };
            Select2.prototype._registerDataEvents = function () {
                var self = this;
                this.dataAdapter.on('*', function (name, params) {
                    self.trigger(name, params);
                });
            };
            Select2.prototype._registerSelectionEvents = function () {
                var self = this;
                var nonRelayEvents = ['toggle', 'focus'];
                this.selection.on('toggle', function () {
                    self.toggleDropdown();
                });
                this.selection.on('focus', function (params) {
                    self.focus(params);
                });
                this.selection.on('*', function (name, params) {
                    if ($.inArray(name, nonRelayEvents) !== -1) {
                        return;
                    }
                    self.trigger(name, params);
                });
            };
            Select2.prototype._registerDropdownEvents = function () {
                var self = this;
                this.dropdown.on('*', function (name, params) {
                    self.trigger(name, params);
                });
            };
            Select2.prototype._registerResultsEvents = function () {
                var self = this;
                this.results.on('*', function (name, params) {
                    self.trigger(name, params);
                });
            };
            Select2.prototype._registerEvents = function () {
                var self = this;
                this.on('open', function () {
                    self.$container.addClass('select2-container--open');
                });
                this.on('close', function () {
                    self.$container.removeClass('select2-container--open');
                });
                this.on('enable', function () {
                    self.$container.removeClass('select2-container--disabled');
                });
                this.on('disable', function () {
                    self.$container.addClass('select2-container--disabled');
                });
                this.on('blur', function () {
                    self.$container.removeClass('select2-container--focus');
                });
                this.on('query', function (params) {
                    if (!self.isOpen()) {
                        self.trigger('open', {});
                    }
                    this.dataAdapter.query(params, function (data) {
                        self.trigger('results:all', {
                            data: data,
                            query: params
                        });
                    });
                });
                this.on('query:append', function (params) {
                    this.dataAdapter.query(params, function (data) {
                        self.trigger('results:append', {
                            data: data,
                            query: params
                        });
                    });
                });
                this.on('keypress', function (evt) {
                    var key = evt.which;
                    if (self.isOpen()) {
                        if (key === KEYS.ESC || key === KEYS.TAB || (key === KEYS.UP && evt.altKey)) {
                            self.close();
                            evt.preventDefault();
                        } else if (key === KEYS.ENTER) {
                            self.trigger('results:select', {});
                            evt.preventDefault();
                        } else if ((key === KEYS.SPACE && evt.ctrlKey)) {
                            self.trigger('results:toggle', {});
                            evt.preventDefault();
                        } else if (key === KEYS.UP) {
                            self.trigger('results:previous', {});
                            evt.preventDefault();
                        } else if (key === KEYS.DOWN) {
                            self.trigger('results:next', {});
                            evt.preventDefault();
                        }
                    } else {
                        if (key === KEYS.ENTER || key === KEYS.SPACE || (key === KEYS.DOWN && evt.altKey)) {
                            self.open();
                            evt.preventDefault();
                        }
                    }
                });
            };
            Select2.prototype._syncAttributes = function () {
                this.options.set('disabled', this.$element.prop('disabled'));
                if (this.options.get('disabled')) {
                    if (this.isOpen()) {
                        this.close();
                    }
                    this.trigger('disable', {});
                } else {
                    this.trigger('enable', {});
                }
            };
            Select2.prototype._syncSubtree = function (evt, mutations) {
                var changed = false;
                var self = this;
                // Ignore any mutation events raised for elements that aren't options or
                // optgroups. This handles the case when the select element is destroyed
                if (evt && evt.target && (evt.target.nodeName !== 'OPTION' && evt.target.nodeName !== 'OPTGROUP')) {
                    return;
                }
                if (!mutations) {
                    // If mutation events aren't supported, then we can only assume that the
                    // change affected the selections
                    changed = true;
                } else if (mutations.addedNodes && mutations.addedNodes.length > 0) {
                    for (var n = 0; n < mutations.addedNodes.length; n++) {
                        var node = mutations.addedNodes[n];
                        if (node.selected) {
                            changed = true;
                        }
                    }
                } else if (mutations.removedNodes && mutations.removedNodes.length > 0) {
                    changed = true;
                }
                // Only re-pull the data if we think there is a change
                if (changed) {
                    this.dataAdapter.current(function (currentData) {
                        self.trigger('selection:update', {
                            data: currentData
                        });
                    });
                }
            };
            /**
             * Override the trigger method to automatically trigger pre-events when
             * there are events that can be prevented.
             */
            Select2.prototype.trigger = function (name, args) {
                var actualTrigger = Select2.__super__.trigger;
                var preTriggerMap = {
                    'open': 'opening',
                    'close': 'closing',
                    'select': 'selecting',
                    'unselect': 'unselecting',
                    'clear': 'clearing'
                };
                if (args === undefined) {
                    args = {};
                }
                if (name in preTriggerMap) {
                    var preTriggerName = preTriggerMap[name];
                    var preTriggerArgs = {
                        prevented: false,
                        name: name,
                        args: args
                    };
                    actualTrigger.call(this, preTriggerName, preTriggerArgs);
                    if (preTriggerArgs.prevented) {
                        args.prevented = true;
                        return;
                    }
                }
                actualTrigger.call(this, name, args);
            };
            Select2.prototype.toggleDropdown = function () {
                if (this.options.get('disabled')) {
                    return;
                }
                if (this.isOpen()) {
                    this.close();
                } else {
                    this.open();
                }
            };
            Select2.prototype.open = function () {
                if (this.isOpen()) {
                    return;
                }
                this.trigger('query', {});
            };
            Select2.prototype.close = function () {
                if (!this.isOpen()) {
                    return;
                }
                this.trigger('close', {});
            };
            Select2.prototype.isOpen = function () {
                return this.$container.hasClass('select2-container--open');
            };
            Select2.prototype.hasFocus = function () {
                return this.$container.hasClass('select2-container--focus');
            };
            Select2.prototype.focus = function (data) {
                // No need to re-trigger focus events if we are already focused
                if (this.hasFocus()) {
                    return;
                }
                this.$container.addClass('select2-container--focus');
                this.trigger('focus', {});
            };
            Select2.prototype.enable = function (args) {
                if (this.options.get('debug') && window.console && console.warn) {
                    console.warn('Select2: The `select2("enable")` method has been deprecated and will' + ' be removed in later Select2 versions. Use $element.prop("disabled")' + ' instead.');
                }
                if (args == null || args.length === 0) {
                    args = [true];
                }
                var disabled = !args[0];
                this.$element.prop('disabled', disabled);
            };
            Select2.prototype.data = function () {
                if (this.options.get('debug') && arguments.length > 0 && window.console && console.warn) {
                    console.warn('Select2: Data can no longer be set using `select2("data")`. You ' + 'should consider setting the value instead using `$element.val()`.');
                }
                var data = [];
                this.dataAdapter.current(function (currentData) {
                    data = currentData;
                });
                return data;
            };
            Select2.prototype.val = function (args) {
                if (this.options.get('debug') && window.console && console.warn) {
                    console.warn('Select2: The `select2("val")` method has been deprecated and will be' + ' removed in later Select2 versions. Use $element.val() instead.');
                }
                if (args == null || args.length === 0) {
                    return this.$element.val();
                }
                var newVal = args[0];
                if ($.isArray(newVal)) {
                    newVal = $.map(newVal, function (obj) {
                        return obj.toString();
                    });
                }
                this.$element.val(newVal).trigger('change');
            };
            Select2.prototype.destroy = function () {
                this.$container.remove();
                if (this.$element[0].detachEvent) {
                    this.$element[0].detachEvent('onpropertychange', this._syncA);
                }
                if (this._observer != null) {
                    this._observer.disconnect();
                    this._observer = null;
                } else if (this.$element[0].removeEventListener) {
                    this.$element[0].removeEventListener('DOMAttrModified', this._syncA, false);
                    this.$element[0].removeEventListener('DOMNodeInserted', this._syncS, false);
                    this.$element[0].removeEventListener('DOMNodeRemoved', this._syncS, false);
                }
                this._syncA = null;
                this._syncS = null;
                this.$element.off('.select2');
                this.$element.attr('tabindex', Utils.GetData(this.$element[0], 'old-tabindex'));
                this.$element.removeClass('select2-hidden-accessible');
                this.$element.attr('aria-hidden', 'false');
                Utils.RemoveData(this.$element[0]);
                this.$element.removeData('select2');
                this.dataAdapter.destroy();
                this.selection.destroy();
                this.dropdown.destroy();
                this.results.destroy();
                this.dataAdapter = null;
                this.selection = null;
                this.dropdown = null;
                this.results = null;
            };
            Select2.prototype.render = function () {
                var $container = $('<span class="select2 select2-container">' + '<span class="selection"></span>' + '<span class="dropdown-wrapper" aria-hidden="true"></span>' + '</span>');
                $container.attr('dir', this.options.get('dir'));
                this.$container = $container;
                this.$container.addClass('select2-container--' + this.options.get('theme'));
                Utils.StoreData($container[0], 'element', this.$element);
                return $container;
            };
            return Select2;
        });
        S2.define('jquery-mousewheel', [
  'jquery'
], function ($) {
            // Used to shim jQuery.mousewheel for non-full builds.
            return $;
        });
        S2.define('jquery.select2', [
  'jquery',
  'jquery-mousewheel',
            
  './select2/core',
  './select2/defaults',
  './select2/utils'
], function ($, _, Select2, Defaults, Utils) {
            if ($.fn.select2 == null) {
                // All methods that should return the element
                var thisMethods = ['open', 'close', 'destroy'];
                $.fn.select2 = function (options) {
                    options = options || {};
                    if (typeof options === 'object') {
                        this.each(function () {
                            var instanceOptions = $.extend(true, {}, options);
                            var instance = new Select2($(this), instanceOptions);
                        });
                        return this;
                    } else if (typeof options === 'string') {
                        var ret;
                        var args = Array.prototype.slice.call(arguments, 1);
                        this.each(function () {
                            var instance = Utils.GetData(this, 'select2');
                            if (instance == null && window.console && console.error) {
                                console.error('The select2(\'' + options + '\') method was called on an ' + 'element that is not using Select2.');
                            }
                            ret = instance[options].apply(instance, args);
                        });
                        // Check if we should be returning `this`
                        if ($.inArray(options, thisMethods) > -1) {
                            return this;
                        }
                        return ret;
                    } else {
                        throw new Error('Invalid arguments for Select2: ' + options);
                    }
                };
            }
            if ($.fn.select2.defaults == null) {
                $.fn.select2.defaults = Defaults;
            }
            return Select2;
        });
        // Return the AMD loader configuration so it can be used outside of this file
        return {
            define: S2.define,
            require: S2.require
        };
    }());
    // Autoload the jQuery bindings
    // We know that all of the modules exist above this, so we're safe
    var select2 = S2.require('jquery.select2');
    // Hold the AMD module references on the jQuery function that was just loaded
    // This allows Select2 to use the internal loader outside of this file, such
    // as in the language files.
    jQuery.fn.select2.amd = S2;
    // Return the Select2 instance for anyone who is importing it.
    return select2;
}));
/*! lazysizes - v5.2.0 */
! function (a, b) {
    var c = b(a, a.document, Date);
    a.lazySizes = c, "object" == typeof module && module.exports && (module.exports = c)
}("undefined" != typeof window ? window : {}, function (a, b, c) {
    "use strict";
    var d, e;
    if (function () {
            var b, c = {
                lazyClass: "lazyload",
                loadedClass: "lazyloaded",
                loadingClass: "lazyloading",
                preloadClass: "lazypreload",
                errorClass: "lazyerror",
                autosizesClass: "lazyautosizes",
                srcAttr: "data-src",
                srcsetAttr: "data-srcset",
                sizesAttr: "data-sizes",
                minSize: 40,
                customMedia: {},
                init: !0,
                expFactor: 1.5,
                hFac: .8,
                loadMode: 2,
                loadHidden: !0,
                ricTimeout: 0,
                throttleDelay: 125
            };
            e = a.lazySizesConfig || a.lazysizesConfig || {};
            for (b in c) b in e || (e[b] = c[b])
        }(), !b || !b.getElementsByClassName) return {
        init: function () {},
        cfg: e,
        noSupport: !0
    };
    var f = b.documentElement,
        g = a.HTMLPictureElement,
        h = "addEventListener",
        i = "getAttribute",
        j = a[h].bind(a),
        k = a.setTimeout,
        l = a.requestAnimationFrame || k,
        m = a.requestIdleCallback,
        n = /^picture$/i,
        o = ["load", "error", "lazyincluded", "_lazyloaded"],
        p = {},
        q = Array.prototype.forEach,
        r = function (a, b) {
            return p[b] || (p[b] = new RegExp("(\\s|^)" + b + "(\\s|$)")), p[b].test(a[i]("class") || "") && p[b]
        },
        s = function (a, b) {
            r(a, b) || a.setAttribute("class", (a[i]("class") || "").trim() + " " + b)
        },
        t = function (a, b) {
            var c;
            (c = r(a, b)) && a.setAttribute("class", (a[i]("class") || "").replace(c, " "))
        },
        u = function (a, b, c) {
            var d = c ? h : "removeEventListener";
            c && u(a, b), o.forEach(function (c) {
                a[d](c, b)
            })
        },
        v = function (a, c, e, f, g) {
            var h = b.createEvent("Event");
            return e || (e = {}), e.instance = d, h.initEvent(c, !f, !g), h.detail = e, a.dispatchEvent(h), h
        },
        w = function (b, c) {
            var d;
            !g && (d = a.picturefill || e.pf) ? (c && c.src && !b[i]("srcset") && b.setAttribute("srcset", c.src), d({
                reevaluate: !0,
                elements: [b]
            })) : c && c.src && (b.src = c.src)
        },
        x = function (a, b) {
            return (getComputedStyle(a, null) || {})[b]
        },
        y = function (a, b, c) {
            for (c = c || a.offsetWidth; c < e.minSize && b && !a._lazysizesWidth;) c = b.offsetWidth, b = b.parentNode;
            return c
        },
        z = function () {
            var a, c, d = [],
                e = [],
                f = d,
                g = function () {
                    var b = f;
                    for (f = d.length ? e : d, a = !0, c = !1; b.length;) b.shift()();
                    a = !1
                },
                h = function (d, e) {
                    a && !e ? d.apply(this, arguments) : (f.push(d), c || (c = !0, (b.hidden ? k : l)(g)))
                };
            return h._lsFlush = g, h
        }(),
        A = function (a, b) {
            return b ? function () {
                z(a)
            } : function () {
                var b = this,
                    c = arguments;
                z(function () {
                    a.apply(b, c)
                })
            }
        },
        B = function (a) {
            var b, d = 0,
                f = e.throttleDelay,
                g = e.ricTimeout,
                h = function () {
                    b = !1, d = c.now(), a()
                },
                i = m && g > 49 ? function () {
                    m(h, {
                        timeout: g
                    }), g !== e.ricTimeout && (g = e.ricTimeout)
                } : A(function () {
                    k(h)
                }, !0);
            return function (a) {
                var e;
                (a = !0 === a) && (g = 33), b || (b = !0, e = f - (c.now() - d), e < 0 && (e = 0), a || e < 9 ? i() : k(i, e))
            }
        },
        C = function (a) {
            var b, d, e = 99,
                f = function () {
                    b = null, a()
                },
                g = function () {
                    var a = c.now() - d;
                    a < e ? k(g, e - a) : (m || f)(f)
                };
            return function () {
                d = c.now(), b || (b = k(g, e))
            }
        },
        D = function () {
            var g, m, o, p, y, D, F, G, H, I, J, K, L = /^img$/i,
                M = /^iframe$/i,
                N = "onscroll" in a && !/(gle|ing)bot/.test(navigator.userAgent),
                O = 0,
                P = 0,
                Q = 0,
                R = -1,
                S = function (a) {
                    Q--, (!a || Q < 0 || !a.target) && (Q = 0)
                },
                T = function (a) {
                    return null == K && (K = "hidden" == x(b.body, "visibility")), K || !("hidden" == x(a.parentNode, "visibility") && "hidden" == x(a, "visibility"))
                },
                U = function (a, c) {
                    var d, e = a,
                        g = T(a);
                    for (G -= c, J += c, H -= c, I += c; g && (e = e.offsetParent) && e != b.body && e != f;)(g = (x(e, "opacity") || 1) > 0) && "visible" != x(e, "overflow") && (d = e.getBoundingClientRect(), g = I > d.left && H < d.right && J > d.top - 1 && G < d.bottom + 1);
                    return g
                },
                V = function () {
                    var a, c, h, j, k, l, n, o, q, r, s, t, u = d.elements;
                    if ((p = e.loadMode) && Q < 8 && (a = u.length)) {
                        for (c = 0, R++; c < a; c++)
                            if (u[c] && !u[c]._lazyRace)
                                if (!N || d.prematureUnveil && d.prematureUnveil(u[c])) ba(u[c]);
                                else if ((o = u[c][i]("data-expand")) && (l = 1 * o) || (l = P), r || (r = !e.expand || e.expand < 1 ? f.clientHeight > 500 && f.clientWidth > 500 ? 500 : 370 : e.expand, d._defEx = r, s = r * e.expFactor, t = e.hFac, K = null, P < s && Q < 1 && R > 2 && p > 2 && !b.hidden ? (P = s, R = 0) : P = p > 1 && R > 1 && Q < 6 ? r : O), q !== l && (D = innerWidth + l * t, F = innerHeight + l, n = -1 * l, q = l), h = u[c].getBoundingClientRect(), (J = h.bottom) >= n && (G = h.top) <= F && (I = h.right) >= n * t && (H = h.left) <= D && (J || I || H || G) && (e.loadHidden || T(u[c])) && (m && Q < 3 && !o && (p < 3 || R < 4) || U(u[c], l))) {
                            if (ba(u[c]), k = !0, Q > 9) break
                        } else !k && m && !j && Q < 4 && R < 4 && p > 2 && (g[0] || e.preloadAfterLoad) && (g[0] || !o && (J || I || H || G || "auto" != u[c][i](e.sizesAttr))) && (j = g[0] || u[c]);
                        j && !k && ba(j)
                    }
                },
                W = B(V),
                X = function (a) {
                    var b = a.target;
                    if (b._lazyCache) return void delete b._lazyCache;
                    S(a), s(b, e.loadedClass), t(b, e.loadingClass), u(b, Z), v(b, "lazyloaded")
                },
                Y = A(X),
                Z = function (a) {
                    Y({
                        target: a.target
                    })
                },
                $ = function (a, b) {
                    try {
                        a.contentWindow.location.replace(b)
                    } catch (c) {
                        a.src = b
                    }
                },
                _ = function (a) {
                    var b, c = a[i](e.srcsetAttr);
                    (b = e.customMedia[a[i]("data-media") || a[i]("media")]) && a.setAttribute("media", b), c && a.setAttribute("srcset", c)
                },
                aa = A(function (a, b, c, d, f) {
                    var g, h, j, l, m, p;
                    (m = v(a, "lazybeforeunveil", b)).defaultPrevented || (d && (c ? s(a, e.autosizesClass) : a.setAttribute("sizes", d)), h = a[i](e.srcsetAttr), g = a[i](e.srcAttr), f && (j = a.parentNode, l = j && n.test(j.nodeName || "")), p = b.firesLoad || "src" in a && (h || g || l), m = {
                        target: a
                    }, s(a, e.loadingClass), p && (clearTimeout(o), o = k(S, 2500), u(a, Z, !0)), l && q.call(j.getElementsByTagName("source"), _), h ? a.setAttribute("srcset", h) : g && !l && (M.test(a.nodeName) ? $(a, g) : a.src = g), f && (h || l) && w(a, {
                        src: g
                    })), a._lazyRace && delete a._lazyRace, t(a, e.lazyClass), z(function () {
                        var b = a.complete && a.naturalWidth > 1;
                        p && !b || (b && s(a, "ls-is-cached"), X(m), a._lazyCache = !0, k(function () {
                            "_lazyCache" in a && delete a._lazyCache
                        }, 9)), "lazy" == a.loading && Q--
                    }, !0)
                }),
                ba = function (a) {
                    if (!a._lazyRace) {
                        var b, c = L.test(a.nodeName),
                            d = c && (a[i](e.sizesAttr) || a[i]("sizes")),
                            f = "auto" == d;
                        (!f && m || !c || !a[i]("src") && !a.srcset || a.complete || r(a, e.errorClass) || !r(a, e.lazyClass)) && (b = v(a, "lazyunveilread").detail, f && E.updateElem(a, !0, a.offsetWidth), a._lazyRace = !0, Q++, aa(a, b, f, d, c))
                    }
                },
                ca = C(function () {
                    e.loadMode = 3, W()
                }),
                da = function () {
                    3 == e.loadMode && (e.loadMode = 2), ca()
                },
                ea = function () {
                    if (!m) {
                        if (c.now() - y < 999) return void k(ea, 999);
                        m = !0, e.loadMode = 3, W(), j("scroll", da, !0)
                    }
                };
            return {
                _: function () {
                    y = c.now(), d.elements = b.getElementsByClassName(e.lazyClass), g = b.getElementsByClassName(e.lazyClass + " " + e.preloadClass), j("scroll", W, !0), j("resize", W, !0), j("pageshow", function (a) {
                        if (a.persisted) {
                            var c = b.querySelectorAll("." + e.loadingClass);
                            c.length && c.forEach && l(function () {
                                c.forEach(function (a) {
                                    a.complete && ba(a)
                                })
                            })
                        }
                    }), a.MutationObserver ? new MutationObserver(W).observe(f, {
                        childList: !0,
                        subtree: !0,
                        attributes: !0
                    }) : (f[h]("DOMNodeInserted", W, !0), f[h]("DOMAttrModified", W, !0), setInterval(W, 999)), j("hashchange", W, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach(function (a) {
                        b[h](a, W, !0)
                    }), /d$|^c/.test(b.readyState) ? ea() : (j("load", ea), b[h]("DOMContentLoaded", W), k(ea, 2e4)), d.elements.length ? (V(), z._lsFlush()) : W()
                },
                checkElems: W,
                unveil: ba,
                _aLSL: da
            }
        }(),
        E = function () {
            var a, c = A(function (a, b, c, d) {
                    var e, f, g;
                    if (a._lazysizesWidth = d, d += "px", a.setAttribute("sizes", d), n.test(b.nodeName || ""))
                        for (e = b.getElementsByTagName("source"), f = 0, g = e.length; f < g; f++) e[f].setAttribute("sizes", d);
                    c.detail.dataAttr || w(a, c.detail)
                }),
                d = function (a, b, d) {
                    var e, f = a.parentNode;
                    f && (d = y(a, f, d), e = v(a, "lazybeforesizes", {
                        width: d,
                        dataAttr: !!b
                    }), e.defaultPrevented || (d = e.detail.width) && d !== a._lazysizesWidth && c(a, f, e, d))
                },
                f = function () {
                    var b, c = a.length;
                    if (c)
                        for (b = 0; b < c; b++) d(a[b])
                },
                g = C(f);
            return {
                _: function () {
                    a = b.getElementsByClassName(e.autosizesClass), j("resize", g)
                },
                checkElems: g,
                updateElem: d
            }
        }(),
        F = function () {
            !F.i && b.getElementsByClassName && (F.i = !0, E._(), D._())
        };
    return k(function () {
        e.init && F()
    }), d = {
        cfg: e,
        autoSizer: E,
        loader: D,
        init: F,
        uP: w,
        aC: s,
        rC: t,
        hC: r,
        fire: v,
        gW: y,
        rAF: z
    }
});
/*! lazysizes - v5.2.0 */
! function (a, b) {
    var c = function () {
        b(a.lazySizes), a.removeEventListener("lazyunveilread", c, !0)
    };
    b = b.bind(null, a, a.document), "object" == typeof module && module.exports ? b(require("lazysizes")) : a.lazySizes ? c() : a.addEventListener("lazyunveilread", c, !0)
}(window, function (a, b, c) {
    "use strict";
    
    function d() {
        this.ratioElems = b.getElementsByClassName("lazyaspectratio"), this._setupEvents(), this.processImages()
    }
    if (a.addEventListener) {
        var e, f, g, h = Array.prototype.forEach,
            i = /^picture$/i,
            j = "data-aspectratio",
            k = "img[" + j + "]",
            l = function (b) {
                return a.matchMedia ? (l = function (a) {
                    return !a || (matchMedia(a) || {}).matches
                })(b) : a.Modernizr && Modernizr.mq ? !b || Modernizr.mq(b) : !b
            },
            m = c.aC,
            n = c.rC,
            o = c.cfg;
        d.prototype = {
            _setupEvents: function () {
                var a = this,
                    c = function (b) {
                        b.naturalWidth < 36 ? a.addAspectRatio(b, !0) : a.removeAspectRatio(b, !0)
                    },
                    d = function () {
                        a.processImages()
                    };
                b.addEventListener("load", function (a) {
                    a.target.getAttribute && a.target.getAttribute(j) && c(a.target)
                }, !0), addEventListener("resize", function () {
                    var b, d = function () {
                        h.call(a.ratioElems, c)
                    };
                    return function () {
                        clearTimeout(b), b = setTimeout(d, 99)
                    }
                }()), b.addEventListener("DOMContentLoaded", d), addEventListener("load", d)
            },
            processImages: function (a) {
                var c, d;
                a || (a = b), c = "length" in a && !a.nodeName ? a : a.querySelectorAll(k);
                for (d = 0; d < c.length; d++) c[d].naturalWidth > 36 ? this.removeAspectRatio(c[d]) : this.addAspectRatio(c[d])
            },
            getSelectedRatio: function (a) {
                var b, c, d, e, f, g = a.parentNode;
                if (g && i.test(g.nodeName || ""))
                    for (d = g.getElementsByTagName("source"), b = 0, c = d.length; b < c; b++)
                        if (e = d[b].getAttribute("data-media") || d[b].getAttribute("media"), o.customMedia[e] && (e = o.customMedia[e]), l(e)) {
                            f = d[b].getAttribute(j);
                            break
                        } return f || a.getAttribute(j) || ""
            },
            parseRatio: function () {
                var a = /^\s*([+\d\.]+)(\s*[\/x]\s*([+\d\.]+))?\s*$/,
                    b = {};
                return function (c) {
                    var d;
                    return !b[c] && (d = c.match(a)) && (d[3] ? b[c] = d[1] / d[3] : b[c] = 1 * d[1]), b[c]
                }
            }(),
            addAspectRatio: function (b, c) {
                var d, e = b.offsetWidth,
                    f = b.offsetHeight;
                if (c || m(b, "lazyaspectratio"), e < 36 && f <= 0) return void((e || f && a.console) && console.log("Define width or height of image, so we can calculate the other dimension"));
                d = this.getSelectedRatio(b), (d = this.parseRatio(d)) && (e ? b.style.height = e / d + "px" : b.style.width = f * d + "px")
            },
            removeAspectRatio: function (a) {
                n(a, "lazyaspectratio"), a.style.height = "", a.style.width = "", a.removeAttribute(j)
            }
        }, f = function () {
            g = a.jQuery || a.Zepto || a.shoestring || a.$, g && g.fn && !g.fn.imageRatio && g.fn.filter && g.fn.add && g.fn.find ? g.fn.imageRatio = function () {
                return e.processImages(this.find(k).add(this.filter(k))), this
            } : g = !1
        }, f(), setTimeout(f), e = new d, a.imageRatio = e, "object" == typeof module && module.exports ? module.exports = e : "function" == typeof define && define.amd && define(e)
    }
});
/*! lazysizes - v5.2.0 */
! function (a, b) {
    var c = function () {
        b(a.lazySizes), a.removeEventListener("lazyunveilread", c, !0)
    };
    b = b.bind(null, a, a.document), "object" == typeof module && module.exports ? b(require("lazysizes")) : a.lazySizes ? c() : a.addEventListener("lazyunveilread", c, !0)
}(window, function (a, b, c) {
    "use strict";
    if (a.addEventListener) {
        var d = c.cfg,
            e = /\s+/g,
            f = /\s*\|\s+|\s+\|\s*/g,
            g = /^(.+?)(?:\s+\[\s*(.+?)\s*\])(?:\s+\[\s*(.+?)\s*\])?$/,
            h = /^\s*\(*\s*type\s*:\s*(.+?)\s*\)*\s*$/,
            i = /\(|\)|'/,
            j = {
                contain: 1,
                cover: 1
            },
            k = function (a) {
                var b = c.gW(a, a.parentNode);
                return (!a._lazysizesWidth || b > a._lazysizesWidth) && (a._lazysizesWidth = b), a._lazysizesWidth
            },
            l = function (a) {
                var b;
                return b = (getComputedStyle(a) || {
                    getPropertyValue: function () {}
                }).getPropertyValue("background-size"), !j[b] && j[a.style.backgroundSize] && (b = a.style.backgroundSize), b
            },
            m = function (a, b) {
                if (b) {
                    var c = b.match(h);
                    c && c[1] ? a.setAttribute("type", c[1]) : a.setAttribute("media", d.customMedia[b] || b)
                }
            },
            n = function (a, c, h) {
                var i = b.createElement("picture"),
                    j = c.getAttribute(d.sizesAttr),
                    k = c.getAttribute("data-ratio"),
                    l = c.getAttribute("data-optimumx");
                c._lazybgset && c._lazybgset.parentNode == c && c.removeChild(c._lazybgset), Object.defineProperty(h, "_lazybgset", {
                    value: c,
                    writable: !0
                }), Object.defineProperty(c, "_lazybgset", {
                    value: i,
                    writable: !0
                }), a = a.replace(e, " ").split(f), i.style.display = "none", h.className = d.lazyClass, 1 != a.length || j || (j = "auto"), a.forEach(function (a) {
                    var c, e = b.createElement("source");
                    j && "auto" != j && e.setAttribute("sizes", j), (c = a.match(g)) ? (e.setAttribute(d.srcsetAttr, c[1]), m(e, c[2]), m(e, c[3])) : e.setAttribute(d.srcsetAttr, a), i.appendChild(e)
                }), j && (h.setAttribute(d.sizesAttr, j), c.removeAttribute(d.sizesAttr), c.removeAttribute("sizes")), l && h.setAttribute("data-optimumx", l), k && h.setAttribute("data-ratio", k), i.appendChild(h), c.appendChild(i)
            },
            o = function (a) {
                if (a.target._lazybgset) {
                    var b = a.target,
                        d = b._lazybgset,
                        e = b.currentSrc || b.src;
                    if (e) {
                        var f = c.fire(d, "bgsetproxy", {
                            src: e,
                            useSrc: i.test(e) ? JSON.stringify(e) : e
                        });
                        f.defaultPrevented || (d.style.backgroundImage = "url(" + f.detail.useSrc + ")")
                    }
                    b._lazybgsetLoading && (c.fire(d, "_lazyloaded", {}, !1, !0), delete b._lazybgsetLoading)
                }
            };
        addEventListener("lazybeforeunveil", function (a) {
            var d, e, f;
            !a.defaultPrevented && (d = a.target.getAttribute("data-bgset")) && (f = a.target, e = b.createElement("img"), e.alt = "", e._lazybgsetLoading = !0, a.detail.firesLoad = !0, n(d, f, e), setTimeout(function () {
                c.loader.unveil(e), c.rAF(function () {
                    c.fire(e, "_lazyloaded", {}, !0, !0), e.complete && o({
                        target: e
                    })
                })
            }))
        }), b.addEventListener("load", o, !0), a.addEventListener("lazybeforesizes", function (a) {
            if (a.detail.instance == c && a.target._lazybgset && a.detail.dataAttr) {
                var b = a.target._lazybgset,
                    d = l(b);
                j[d] && (a.target._lazysizesParentFit = d, c.rAF(function () {
                    a.target.setAttribute("data-parent-fit", d), a.target._lazysizesParentFit && delete a.target._lazysizesParentFit
                }))
            }
        }, !0), b.documentElement.addEventListener("lazybeforesizes", function (a) {
            !a.defaultPrevented && a.target._lazybgset && a.detail.instance == c && (a.detail.width = k(a.target._lazybgset))
        })
    }
});
/*! lazysizes - v5.2.0 */
! function (a, b) {
    if (a) {
        var c = function () {
            b(a.lazySizes), a.removeEventListener("lazyunveilread", c, !0)
        };
        b = b.bind(null, a, a.document), "object" == typeof module && module.exports ? b(require("lazysizes")) : a.lazySizes ? c() : a.addEventListener("lazyunveilread", c, !0)
    }
}("undefined" != typeof window ? window : 0, function (a, b, c) {
    "use strict";
    var d = [].slice,
        e = /blur-up["']*\s*:\s*["']*(always|auto)/,
        f = /image\/(jpeg|png|gif|svg\+xml)/,
        g = function (b) {
            var d = b.getAttribute("data-media") || b.getAttribute("media"),
                e = b.getAttribute("type");
            return (!e || f.test(e)) && (!d || a.matchMedia(c.cfg.customMedia[d] || d).matches)
        },
        h = function (a, b) {
            var c;
            return (a ? d.call(a.querySelectorAll("source, img")) : [b]).forEach(function (a) {
                if (!c) {
                    var b = a.getAttribute("data-lowsrc");
                    b && g(a) && (c = b)
                }
            }), c
        },
        i = function (a, d, e, f) {
            var g, h = !1,
                i = !1,
                j = "always" == f ? 0 : Date.now(),
                k = 0,
                l = (a || d).parentNode,
                m = function () {
                    if (e) {
                        var j = function (a) {
                            h = !0, g || (g = a.target), c.rAF(function () {
                                c.rC(d, "ls-blur-up-is-loading"), g && c.aC(g, "ls-blur-up-loaded")
                            }), g && (g.removeEventListener("load", j), g.removeEventListener("error", j))
                        };
                        g = b.createElement("img"), g.addEventListener("load", j), g.addEventListener("error", j), g.className = "ls-blur-up-img", g.src = e, g.alt = "", g.setAttribute("aria-hidden", "true"), l.insertBefore(g, (a || d).nextSibling), "always" != f && (g.style.visibility = "hidden", c.rAF(function () {
                            g && setTimeout(function () {
                                g && c.rAF(function () {
                                    !i && g && (g.style.visibility = "")
                                })
                            }, c.cfg.blurupCacheDelay || 33)
                        }))
                    }
                },
                n = function () {
                    g && c.rAF(function () {
                        c.rC(d, "ls-blur-up-is-loading");
                        try {
                            g.parentNode.removeChild(g)
                        } catch (a) {}
                        g = null
                    })
                },
                o = function (a) {
                    k++, i = a || i, a ? n() : k > 1 && setTimeout(n, 5e3)
                },
                p = function () {
                    d.removeEventListener("load", p), d.removeEventListener("error", p), g && c.rAF(function () {
                        g && c.aC(g, "ls-original-loaded")
                    }), "always" != f && (!h || Date.now() - j < 66) ? o(!0) : o()
                };
            m(), d.addEventListener("load", p), d.addEventListener("error", p), c.aC(d, "ls-blur-up-is-loading");
            var q = function (a) {
                l == a.target && (c.aC(g || d, "ls-inview"), o(), l.removeEventListener("lazybeforeunveil", q))
            };
            l.getAttribute("data-expand") || l.setAttribute("data-expand", -1), l.addEventListener("lazybeforeunveil", q), c.aC(l, c.cfg.lazyClass)
        };
    a.addEventListener("lazybeforeunveil", function (a) {
        var b = a.detail;
        if (b.instance == c && b.blurUp) {
            var d = a.target,
                e = d.parentNode;
            "PICTURE" != e.nodeName && (e = null), i(e, d, h(e, d) || "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", b.blurUp)
        }
    }), a.addEventListener("lazyunveilread", function (a) {
        var b = a.detail;
        if (b.instance == c) {
            var d = a.target,
                f = (getComputedStyle(d, null) || {
                    fontFamily: ""
                }).fontFamily.match(e);
            (f || d.getAttribute("data-lowsrc")) && (b.blurUp = f && f[1] || c.cfg.blurupMode || "always")
        }
    })
});
/*! lazysizes - v5.2.0 */
! function (a, b) {
    if (a) {
        var c = function (d) {
            b(a.lazySizes, d), a.removeEventListener("lazyunveilread", c, !0)
        };
        b = b.bind(null, a, a.document), "object" == typeof module && module.exports ? b(require("lazysizes")) : a.lazySizes ? c() : a.addEventListener("lazyunveilread", c, !0)
    }
}("undefined" != typeof window ? window : 0, function (a, b, c, d) {
    "use strict";
    
    function e(a) {
        var b = getComputedStyle(a, null) || {},
            c = b.fontFamily || "",
            d = c.match(m) || "",
            e = d && c.match(n) || "";
        return e && (e = e[1]), {
            fit: d && d[1] || "",
            position: q[e] || e || "center"
        }
    }
    
    function f() {
        if (!i) {
            var a = b.createElement("style");
            i = c.cfg.objectFitClass || "lazysizes-display-clone", b.querySelector("head").appendChild(a)
        }
    }
    
    function g(a) {
        var b = a.previousElementSibling;
        b && c.hC(b, i) && (b.parentNode.removeChild(b), a.style.position = b.getAttribute("data-position") || "", a.style.visibility = b.getAttribute("data-visibility") || "")
    }
    
    function h(a, b) {
        var d, e, h, j, k = c.cfg,
            l = function () {
                var b = a.currentSrc || a.src;
                b && e !== b && (e = b, j.backgroundImage = "url(" + (p.test(b) ? JSON.stringify(b) : b) + ")", d || (d = !0, c.rC(h, k.loadingClass), c.aC(h, k.loadedClass)))
            },
            m = function () {
                c.rAF(l)
            };
        a._lazysizesParentFit = b.fit, a.addEventListener("lazyloaded", m, !0), a.addEventListener("load", m, !0), c.rAF(function () {
            var d = a,
                e = a.parentNode;
            "PICTURE" == e.nodeName.toUpperCase() && (d = e, e = e.parentNode), g(d), i || f(), h = a.cloneNode(!1), j = h.style, h.addEventListener("load", function () {
                var a = h.currentSrc || h.src;
                a && a != o && (h.src = o, h.srcset = "")
            }), c.rC(h, k.loadedClass), c.rC(h, k.lazyClass), c.rC(h, k.autosizesClass), c.aC(h, k.loadingClass), c.aC(h, i), ["data-parent-fit", "data-parent-container", "data-object-fit-polyfilled", k.srcsetAttr, k.srcAttr].forEach(function (a) {
                h.removeAttribute(a)
            }), h.src = o, h.srcset = "", j.backgroundRepeat = "no-repeat", j.backgroundPosition = b.position, j.backgroundSize = b.fit, h.setAttribute("data-position", d.style.position), h.setAttribute("data-visibility", d.style.visibility), d.style.visibility = "hidden", d.style.position = "absolute", a.setAttribute("data-parent-fit", b.fit), a.setAttribute("data-parent-container", "prev"), a.setAttribute("data-object-fit-polyfilled", ""), a._objectFitPolyfilledDisplay = h, e.insertBefore(h, d), a._lazysizesParentFit && delete a._lazysizesParentFit, a.complete && l()
        })
    }
    var i, j = b.createElement("a").style,
        k = "objectFit" in j,
        l = k && "objectPosition" in j,
        m = /object-fit["']*\s*:\s*["']*(contain|cover)/,
        n = /object-position["']*\s*:\s*["']*(.+?)(?=($|,|'|"|;))/,
        o = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
        p = /\(|\)|'/,
        q = {
            center: "center",
            "50% 50%": "center"
        };
    if (!k || !l) {
        var r = function (a) {
            if (a.detail.instance == c) {
                var b = a.target,
                    d = e(b);
                return !(!d.fit || k && "center" == d.position) && (h(b, d), !0)
            }
        };
        a.addEventListener("lazybeforesizes", function (a) {
            if (a.detail.instance == c) {
                var b = a.target;
                null == b.getAttribute("data-object-fit-polyfilled") || b._objectFitPolyfilledDisplay || r(a) || c.rAF(function () {
                    b.removeAttribute("data-object-fit-polyfilled")
                })
            }
        }), a.addEventListener("lazyunveilread", r, !0), d && d.detail && r(d)
    }
});
/*! lazysizes - v5.2.0 */
! function (a, b) {
    if (a) {
        var c = function () {
            b(a.lazySizes), a.removeEventListener("lazyunveilread", c, !0)
        };
        b = b.bind(null, a, a.document), "object" == typeof module && module.exports ? b(require("lazysizes")) : a.lazySizes ? c() : a.addEventListener("lazyunveilread", c, !0)
    }
}("undefined" != typeof window ? window : 0, function (a, b, c) {
    "use strict";
    if (a.addEventListener) {
        var d = /\s+(\d+)(w|h)\s+(\d+)(w|h)/,
            e = /parent-fit["']*\s*:\s*["']*(contain|cover|width)/,
            f = /parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/,
            g = /^picture$/i,
            h = c.cfg,
            i = function (a) {
                return getComputedStyle(a, null) || {}
            },
            j = {
                getParent: function (b, c) {
                    var d = b,
                        e = b.parentNode;
                    return c && "prev" != c || !e || !g.test(e.nodeName || "") || (e = e.parentNode), "self" != c && (d = "prev" == c ? b.previousElementSibling : c && (e.closest || a.jQuery) ? (e.closest ? e.closest(c) : jQuery(e).closest(c)[0]) || e : e), d
                },
                getFit: function (a) {
                    var b, c, d = i(a),
                        g = d.content || d.fontFamily,
                        h = {
                            fit: a._lazysizesParentFit || a.getAttribute("data-parent-fit")
                        };
                    return !h.fit && g && (b = g.match(e)) && (h.fit = b[1]), h.fit ? (c = a._lazysizesParentContainer || a.getAttribute("data-parent-container"), !c && g && (b = g.match(f)) && (c = b[1]), h.parent = j.getParent(a, c)) : h.fit = d.objectFit, h
                },
                getImageRatio: function (b) {
                    var c, e, f, i, j, k, l, m = b.parentNode,
                        n = m && g.test(m.nodeName || "") ? m.querySelectorAll("source, img") : [b];
                    for (c = 0; c < n.length; c++)
                        if (b = n[c], e = b.getAttribute(h.srcsetAttr) || b.getAttribute("srcset") || b.getAttribute("data-pfsrcset") || b.getAttribute("data-risrcset") || "", f = b._lsMedia || b.getAttribute("media"), f = h.customMedia[b.getAttribute("data-media") || f] || f, e && (!f || (a.matchMedia && matchMedia(f) || {}).matches)) {
                            i = parseFloat(b.getAttribute("data-aspectratio")), i || (j = e.match(d), j ? "w" == j[2] ? (k = j[1], l = j[3]) : (k = j[3], l = j[1]) : (k = b.getAttribute("width"), l = b.getAttribute("height")), i = k / l);
                            break
                        } return i
                },
                calculateSize: function (a, b) {
                    var c, d, e, f, g = this.getFit(a),
                        h = g.fit,
                        i = g.parent;
                    return "width" == h || ("contain" == h || "cover" == h) && (e = this.getImageRatio(a)) ? (i ? b = i.clientWidth : i = a, f = b, "width" == h ? f = b : (d = i.clientHeight, (c = b / d) && ("cover" == h && c < e || "contain" == h && c > e) && (f = b * (e / c))), f) : b
                }
            };
        c.parentFit = j, b.addEventListener("lazybeforesizes", function (a) {
            if (!a.defaultPrevented && a.detail.instance == c) {
                var b = a.target;
                a.detail.width = j.calculateSize(b, a.detail.width)
            }
        })
    }
});
/*! lazysizes - v5.2.0 */
! function (a, b) {
    var c = function () {
        b(a.lazySizes), a.removeEventListener("lazyunveilread", c, !0)
    };
    b = b.bind(null, a, a.document), "object" == typeof module && module.exports ? b(require("lazysizes")) : a.lazySizes ? c() : a.addEventListener("lazyunveilread", c, !0)
}(window, function (a, b, c) {
    "use strict";
    var d, e;
    "srcset" in b.createElement("img") && (d = /^img$/i, e = function (a) {
        a.target.style.backgroundSize = "", a.target.style.backgroundImage = "", a.target.removeEventListener(a.type, e)
    }, b.addEventListener("lazybeforeunveil", function (a) {
        if (a.detail.instance == c) {
            var b = a.target;
            if (d.test(b.nodeName)) {
                var f = b.getAttribute("src");
                f && (b.style.backgroundSize = "100% 100%", b.style.backgroundImage = "url(" + f + ")", b.removeAttribute("src"), b.addEventListener("load", e))
            }
        }
    }, !1))
});
/*! lazysizes - v5.2.0 */
! function (a, b) {
    if (a) {
        var c = function () {
            b(a.lazySizes), a.removeEventListener("lazyunveilread", c, !0)
        };
        b = b.bind(null, a, a.document), "object" == typeof module && module.exports ? b(require("lazysizes")) : a.lazySizes ? c() : a.addEventListener("lazyunveilread", c, !0)
    }
}("undefined" != typeof window ? window : 0, function (a, b, c) {
    "use strict";
    
    function d(c, d) {
        var e = "vimeoCallback" + j,
            f = b.createElement("script");
        c += "&callback=" + e, j++, a[e] = function (b) {
            f.parentNode.removeChild(f), delete a[e], d(b)
        }, f.src = c, b.head.appendChild(f)
    }
    
    function e(a, b) {
        d(p.replace(k, a), function (a) {
            a && a.thumbnail_url && (b.style.backgroundImage = "url(" + a.thumbnail_url + ")")
        }), b.addEventListener("click", f)
    }
    
    function f(a) {
        var b = a.currentTarget,
            c = b.getAttribute("data-vimeo"),
            d = b.getAttribute("data-vimeoparams") || "";
        d && !m.test(d) && (d = "&" + d), a.preventDefault(), b.innerHTML = '<iframe src="' + q.replace(k, c) + d + '" frameborder="0" allowfullscreen="" width="640" height="390"></iframe>', b.removeEventListener("click", f)
    }
    
    function g(a, b) {
        var d = b.getAttribute("data-thumb-size") || c.cfg.ytThumb || "hqdefault";
        b.style.backgroundImage = "url(" + n.replace(k, a).replace(l, d) + ")", b.addEventListener("click", h)
    }
    
    function h(a) {
        var b = a.currentTarget,
            c = b.getAttribute("data-youtube"),
            d = b.getAttribute("data-ytparams") || "";
        d && !m.test(d) && (d = "&" + d), a.preventDefault(), b.innerHTML = '<iframe src="' + o.replace(k, c) + d + '" frameborder="0" allowfullscreen="" width="640" height="390"></iframe>', b.removeEventListener("click", h)
    }
    if (b.getElementsByClassName) {
        var i = "https:" == location.protocol ? "https:" : "http:",
            j = Date.now(),
            k = /\{\{id}}/,
            l = /\{\{hqdefault}}/,
            m = /^&/,
            n = i + "//img.youtube.com/vi/{{id}}/{{hqdefault}}.jpg",
            o = i + "//www.youtube.com/embed/{{id}}?autoplay=1",
            p = i + "//vimeo.com/api/oembed.json?url=https%3A//vimeo.com/{{id}}",
            q = i + "//player.vimeo.com/video/{{id}}?autoplay=1";
        b.addEventListener("lazybeforeunveil", function (a) {
            if (a.detail.instance == c) {
                var b = a.target,
                    d = b.getAttribute("data-youtube"),
                    f = b.getAttribute("data-vimeo");
                d && b && g(d, b), f && b && e(f, b)
            }
        })
    }
});
/*! lazysizes - v5.2.0 */
! function (a, b) {
    var c = function () {
        b(a.lazySizes), a.removeEventListener("lazyunveilread", c, !0)
    };
    b = b.bind(null, a, a.document), "object" == typeof module && module.exports ? b(require("lazysizes")) : a.lazySizes ? c() : a.addEventListener("lazyunveilread", c, !0)
}(window, function (a, b, c) {
    "use strict";
    
    function d() {
        if (a.lazySizes && !f) {
            var h = b.documentElement,
                i = function () {
                    var a, b = function () {
                        j.checkElements(), a = !1
                    };
                    return function () {
                        a || (a = !0, setTimeout(b, 999))
                    }
                }();
            e = c.cfg, removeEventListener("lazybeforeunveil", d), "unloadClass" in e || (e.unloadClass = "lazyunload"), "unloadedClass" in e || (e.unloadedClass = "lazyunloaded"), "unloadHidden" in e || (e.unloadHidden = !0), "emptySrc" in e || (e.emptySrc = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="), "autoUnload" in e || (e.autoUnload = !0), "unloadPixelThreshold" in e || (e.unloadPixelThreshold = 6e4), e.autoUnload && h.addEventListener("load", function (a) {
                a.target.naturalWidth * a.target.naturalHeight > e.unloadPixelThreshold && a.target.className && a.target.className.indexOf && -1 != a.target.className.indexOf(g.loadingClass) && -1 == a.target.className.indexOf(g.preloadClass) && c.aC(a.target, g.unloadClass)
            }, !0), c.unloader = j, f = b.getElementsByClassName([e.unloadClass, e.loadedClass].join(" ")), setInterval(i, 9999), addEventListener("lazybeforeunveil", i), addEventListener("lazybeforeunveil", j._reload, !0)
        }
    }
    if (b.addEventListener) {
        var e, f, g = c.cfg,
            h = [],
            i = a.requestAnimationFrame || setTimeout,
            j = {
                checkElements: function () {
                    var a, b, d, g = 1.1 * (c._defEx + 99),
                        k = -1 * g,
                        l = k,
                        m = innerHeight + g,
                        n = innerWidth + g;
                    for (a = 0, b = f.length; a < b; a++) d = f[a].getBoundingClientRect(), (d.top > m || d.bottom < k || d.left > n || d.right < l || e.unloadHidden && !d.top && !d.bottom && !d.left && !d.right) && h.push(f[a]);
                    i(j.unloadElements)
                },
                unload: function (a) {
                    var b, d, f, g, h = a.parentNode;
                    if (c.rC(a, e.loadedClass), a.getAttribute(e.srcsetAttr) && (a.setAttribute("srcset", e.emptySrc), d = !0), h && "PICTURE" == h.nodeName.toUpperCase()) {
                        for (b = h.getElementsByTagName("source"), f = 0, g = b.length; f < g; f++) b[f].setAttribute("srcset", e.emptySrc);
                        d = !0
                    }
                    c.hC(a, e.autosizesClass) && (c.rC(a, e.autosizesClass), a.setAttribute(e.sizesAttr, "auto")), (d || a.getAttribute(e.srcAttr)) && (a.src = e.emptySrc), c.aC(a, e.unloadedClass), c.aC(a, e.lazyClass), c.fire(a, "lazyafterunload")
                },
                unloadElements: function (a) {
                    for (a = Array.isArray(a) ? a : h; a.length;) j.unload(a.shift())
                },
                _reload: function (a) {
                    c.hC(a.target, e.unloadedClass) && a.detail && (a.detail.reloaded = !0, c.rC(a.target, e.unloadedClass))
                }
            };
        addEventListener("lazybeforeunveil", d)
    }
});