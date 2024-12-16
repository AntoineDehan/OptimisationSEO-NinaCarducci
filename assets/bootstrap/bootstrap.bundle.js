/*!
 * Bootstrap v5.1.3 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */ !(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e =
        "undefined" != typeof globalThis ? globalThis : e || self).bootstrap =
        t());
})(this, function () {
  "use strict";
  let e = "transitionend",
    t = (e) =>
      null == e
        ? `${e}`
        : {}.toString
            .call(e)
            .match(/\s([a-z]+)/i)[1]
            .toLowerCase(),
    i = (e) => {
      let t = e.getAttribute("data-bs-target");
      if (!t || "#" === t) {
        let i = e.getAttribute("href");
        if (!i || (!i.includes("#") && !i.startsWith("."))) return null;
        i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`),
          (t = i && "#" !== i ? i.trim() : null);
      }
      return t;
    },
    n = (e) => {
      let t = i(e);
      return t && document.querySelector(t) ? t : null;
    },
    s = (e) => {
      let t = i(e);
      return t ? document.querySelector(t) : null;
    },
    r = (e) => {
      if (!e) return 0;
      let { transitionDuration: t, transitionDelay: i } =
          window.getComputedStyle(e),
        n = Number.parseFloat(t),
        s = Number.parseFloat(i);
      return n || s
        ? ((t = t.split(",")[0]),
          (i = i.split(",")[0]),
          (Number.parseFloat(t) + Number.parseFloat(i)) * 1e3)
        : 0;
    },
    o = (t) => {
      t.dispatchEvent(new Event(e));
    },
    a = (e) =>
      !!e &&
      "object" == typeof e &&
      (void 0 !== e.jquery && (e = e[0]), void 0 !== e.nodeType),
    l = (e) =>
      a(e)
        ? e.jquery
          ? e[0]
          : e
        : "string" == typeof e && e.length > 0
        ? document.querySelector(e)
        : null,
    c = (e, i, n) => {
      Object.keys(n).forEach((s) => {
        let r = n[s],
          o = i[s],
          l = o && a(o) ? "element" : t(o);
        if (!RegExp(r).test(l))
          throw TypeError(
            `${e.toUpperCase()}: Option "${s}" provided type "${l}" but expected type "${r}".`
          );
      });
    },
    f = (e) =>
      !!a(e) &&
      0 !== e.getClientRects().length &&
      "visible" === getComputedStyle(e).getPropertyValue("visibility"),
    u = (e) =>
      !!(
        !e ||
        e.nodeType !== Node.ELEMENT_NODE ||
        e.classList.contains("disabled")
      ) ||
      (void 0 !== e.disabled
        ? e.disabled
        : e.hasAttribute("disabled") && "false" !== e.getAttribute("disabled")),
    h = (e) => {
      if (!document.documentElement.attachShadow) return null;
      if ("function" == typeof e.getRootNode) {
        let t = e.getRootNode();
        return t instanceof ShadowRoot ? t : null;
      }
      return e instanceof ShadowRoot
        ? e
        : e.parentNode
        ? h(e.parentNode)
        : null;
    },
    d = (e) => {
      e.offsetHeight;
    },
    p = () => {
      let { jQuery: e } = window;
      return e && !document.body.hasAttribute("data-bs-no-jquery") ? e : null;
    },
    m = [],
    g = (e) => {
      "loading" === document.readyState
        ? (m.length ||
            document.addEventListener("DOMContentLoaded", () => {
              m.forEach((e) => e());
            }),
          m.push(e))
        : e();
    },
    v = () => "rtl" === document.documentElement.dir,
    b = (e) => {
      g(() => {
        let t = p();
        if (t) {
          let i = e.NAME,
            n = t.fn[i];
          (t.fn[i] = e.jQueryInterface),
            (t.fn[i].Constructor = e),
            (t.fn[i].noConflict = () => ((t.fn[i] = n), e.jQueryInterface));
        }
      });
    },
    y = (e) => {
      "function" == typeof e && e();
    },
    $ = (t, i, n = !0) => {
      if (!n) {
        y(t);
        return;
      }
      let s = r(i) + 5,
        a = !1,
        l = ({ target: n }) => {
          n === i && ((a = !0), i.removeEventListener(e, l), y(t));
        };
      i.addEventListener(e, l),
        setTimeout(() => {
          a || o(i);
        }, s);
    },
    E = (e, t, i, n) => {
      let s = e.indexOf(t);
      if (-1 === s) return e[!i && n ? e.length - 1 : 0];
      let r = e.length;
      return (
        (s += i ? 1 : -1),
        n && (s = (s + r) % r),
        e[Math.max(0, Math.min(s, r - 1))]
      );
    },
    w = /[^.]*(?=\..*)\.|.*/,
    A = /\..*/,
    x = /::\d+$/,
    O = {},
    L = 1,
    k = { mouseenter: "mouseover", mouseleave: "mouseout" },
    D = /^(mouseenter|mouseleave)/i,
    T = new Set([
      "click",
      "dblclick",
      "mouseup",
      "mousedown",
      "contextmenu",
      "mousewheel",
      "DOMMouseScroll",
      "mouseover",
      "mouseout",
      "mousemove",
      "selectstart",
      "selectend",
      "keydown",
      "keypress",
      "keyup",
      "orientationchange",
      "touchstart",
      "touchmove",
      "touchend",
      "touchcancel",
      "pointerdown",
      "pointermove",
      "pointerup",
      "pointerleave",
      "pointercancel",
      "gesturestart",
      "gesturechange",
      "gestureend",
      "focus",
      "blur",
      "change",
      "reset",
      "select",
      "submit",
      "focusin",
      "focusout",
      "load",
      "unload",
      "beforeunload",
      "resize",
      "move",
      "DOMContentLoaded",
      "readystatechange",
      "error",
      "abort",
      "scroll",
    ]);
  function C(e, t) {
    return (t && `${t}::${L++}`) || e.uidEvent || L++;
  }
  function I(e) {
    let t = C(e);
    return (e.uidEvent = t), (O[t] = O[t] || {}), O[t];
  }
  function _(e, t, i = null) {
    let n = Object.keys(e);
    for (let s = 0, r = n.length; s < r; s++) {
      let o = e[n[s]];
      if (o.originalHandler === t && o.delegationSelector === i) return o;
    }
    return null;
  }
  function N(e, t, i) {
    let n = "string" == typeof t,
      s = H(e),
      r = T.has(s);
    return r || (s = e), [n, n ? i : t, s];
  }
  function S(e, t, i, n, s) {
    var r, o, a, l, c;
    if ("string" != typeof t || !e) return;
    if ((i || ((i = n), (n = null)), D.test(t))) {
      let f = (e) =>
        function (t) {
          if (
            !t.relatedTarget ||
            (t.relatedTarget !== t.delegateTarget &&
              !t.delegateTarget.contains(t.relatedTarget))
          )
            return e.call(this, t);
        };
      n ? (n = f(n)) : (i = f(i));
    }
    let [u, h, d] = N(t, i, n),
      p = I(e),
      m = p[d] || (p[d] = {}),
      g = _(m, h, u ? i : null);
    if (g) {
      g.oneOff = g.oneOff && s;
      return;
    }
    let v = C(h, t.replace(w, "")),
      b = u
        ? ((r = e),
          (o = i),
          (a = n),
          function e(t) {
            let i = r.querySelectorAll(o);
            for (let { target: n } = t; n && n !== this; n = n.parentNode)
              for (let s = i.length; s--; )
                if (i[s] === n)
                  return (
                    (t.delegateTarget = n),
                    e.oneOff && P.off(r, t.type, o, a),
                    a.apply(n, [t])
                  );
            return null;
          })
        : ((l = e),
          (c = i),
          function e(t) {
            return (
              (t.delegateTarget = l),
              e.oneOff && P.off(l, t.type, c),
              c.apply(l, [t])
            );
          });
    (b.delegationSelector = u ? i : null),
      (b.originalHandler = h),
      (b.oneOff = s),
      (b.uidEvent = v),
      (m[v] = b),
      e.addEventListener(d, b, u);
  }
  function M(e, t, i, n, s) {
    let r = _(t[i], n, s);
    r && (e.removeEventListener(i, r, Boolean(s)), delete t[i][r.uidEvent]);
  }
  function H(e) {
    return k[(e = e.replace(A, ""))] || e;
  }
  let P = {
      on(e, t, i, n) {
        S(e, t, i, n, !1);
      },
      one(e, t, i, n) {
        S(e, t, i, n, !0);
      },
      off(e, t, i, n) {
        if ("string" != typeof t || !e) return;
        let [s, r, o] = N(t, i, n),
          a = o !== t,
          l = I(e),
          c = t.startsWith(".");
        if (void 0 !== r) {
          if (!l || !l[o]) return;
          M(e, l, o, r, s ? i : null);
          return;
        }
        c &&
          Object.keys(l).forEach((i) => {
            !(function e(t, i, n, s) {
              let r = i[n] || {};
              Object.keys(r).forEach((e) => {
                if (e.includes(s)) {
                  let o = r[e];
                  M(t, i, n, o.originalHandler, o.delegationSelector);
                }
              });
            })(e, l, i, t.slice(1));
          });
        let f = l[o] || {};
        Object.keys(f).forEach((i) => {
          let n = i.replace(x, "");
          if (!a || t.includes(n)) {
            let s = f[i];
            M(e, l, o, s.originalHandler, s.delegationSelector);
          }
        });
      },
      trigger(e, t, i) {
        if ("string" != typeof t || !e) return null;
        let n = p(),
          s = H(t),
          r = T.has(s),
          o,
          a = !0,
          l = !0,
          c = !1,
          f = null;
        return (
          t !== s &&
            n &&
            ((o = n.Event(t, i)),
            n(e).trigger(o),
            (a = !o.isPropagationStopped()),
            (l = !o.isImmediatePropagationStopped()),
            (c = o.isDefaultPrevented())),
          r
            ? (f = document.createEvent("HTMLEvents")).initEvent(s, a, !0)
            : (f = new CustomEvent(t, { bubbles: a, cancelable: !0 })),
          void 0 !== i &&
            Object.keys(i).forEach((e) => {
              Object.defineProperty(f, e, { get: () => i[e] });
            }),
          c && f.preventDefault(),
          l && e.dispatchEvent(f),
          f.defaultPrevented && void 0 !== o && o.preventDefault(),
          f
        );
      },
    },
    W = new Map(),
    R = {
      set(e, t, i) {
        W.has(e) || W.set(e, new Map());
        let n = W.get(e);
        if (!n.has(t) && 0 !== n.size) {
          console.error(
            `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
              Array.from(n.keys())[0]
            }.`
          );
          return;
        }
        n.set(t, i);
      },
      get: (e, t) => (W.has(e) && W.get(e).get(t)) || null,
      remove(e, t) {
        if (!W.has(e)) return;
        let i = W.get(e);
        i.delete(t), 0 === i.size && W.delete(e);
      },
    };
  class B {
    constructor(e) {
      if (!(e = l(e))) return;
      (this._element = e),
        R.set(this._element, this.constructor.DATA_KEY, this);
    }
    dispose() {
      R.remove(this._element, this.constructor.DATA_KEY),
        P.off(this._element, this.constructor.EVENT_KEY),
        Object.getOwnPropertyNames(this).forEach((e) => {
          this[e] = null;
        });
    }
    _queueCallback(e, t, i = !0) {
      $(e, t, i);
    }
    static getInstance(e) {
      return R.get(l(e), this.DATA_KEY);
    }
    static getOrCreateInstance(e, t = {}) {
      return (
        this.getInstance(e) || new this(e, "object" == typeof t ? t : null)
      );
    }
    static get VERSION() {
      return "5.1.3";
    }
    static get NAME() {
      throw Error(
        'You have to implement the static method "NAME", for each component!'
      );
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
  }
  let j = (e, t = "hide") => {
      let i = `click.dismiss${e.EVENT_KEY}`,
        n = e.NAME;
      P.on(document, i, `[data-bs-dismiss="${n}"]`, function (i) {
        if (
          (["A", "AREA"].includes(this.tagName) && i.preventDefault(), u(this))
        )
          return;
        let r = s(this) || this.closest(`.${n}`),
          o = e.getOrCreateInstance(r);
        o[t]();
      });
    },
    q = ".bs.alert",
    V = `close${q}`,
    X = `closed${q}`;
  class F extends B {
    static get NAME() {
      return "alert";
    }
    close() {
      let e = P.trigger(this._element, V);
      if (e.defaultPrevented) return;
      this._element.classList.remove("show");
      let t = this._element.classList.contains("fade");
      this._queueCallback(() => this._destroyElement(), this._element, t);
    }
    _destroyElement() {
      this._element.remove(), P.trigger(this._element, X), this.dispose();
    }
    static jQueryInterface(e) {
      return this.each(function () {
        let t = F.getOrCreateInstance(this);
        if ("string" == typeof e) {
          if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
            throw TypeError(`No method named "${e}"`);
          t[e](this);
        }
      });
    }
  }
  j(F, "close"), b(F);
  let K = '[data-bs-toggle="button"]',
    z = "click.bs.button.data-api";
  class Y extends B {
    static get NAME() {
      return "button";
    }
    toggle() {
      this._element.setAttribute(
        "aria-pressed",
        this._element.classList.toggle("active")
      );
    }
    static jQueryInterface(e) {
      return this.each(function () {
        let t = Y.getOrCreateInstance(this);
        "toggle" === e && t[e]();
      });
    }
  }
  function U(e) {
    return (
      "true" === e ||
      ("false" !== e &&
        (e === Number(e).toString()
          ? Number(e)
          : "" === e || "null" === e
          ? null
          : e))
    );
  }
  function Q(e) {
    return e.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
  }
  P.on(document, z, K, (e) => {
    e.preventDefault();
    let t = e.target.closest(K),
      i = Y.getOrCreateInstance(t);
    i.toggle();
  }),
    b(Y);
  let Z = {
      setDataAttribute(e, t, i) {
        e.setAttribute(`data-bs-${Q(t)}`, i);
      },
      removeDataAttribute(e, t) {
        e.removeAttribute(`data-bs-${Q(t)}`);
      },
      getDataAttributes(e) {
        if (!e) return {};
        let t = {};
        return (
          Object.keys(e.dataset)
            .filter((e) => e.startsWith("bs"))
            .forEach((i) => {
              let n = i.replace(/^bs/, "");
              t[(n = n.charAt(0).toLowerCase() + n.slice(1, n.length))] = U(
                e.dataset[i]
              );
            }),
          t
        );
      },
      getDataAttribute: (e, t) => U(e.getAttribute(`data-bs-${Q(t)}`)),
      offset(e) {
        let t = e.getBoundingClientRect();
        return {
          top: t.top + window.pageYOffset,
          left: t.left + window.pageXOffset,
        };
      },
      position: (e) => ({ top: e.offsetTop, left: e.offsetLeft }),
    },
    G = {
      find: (e, t = document.documentElement) =>
        [].concat(...Element.prototype.querySelectorAll.call(t, e)),
      findOne: (e, t = document.documentElement) =>
        Element.prototype.querySelector.call(t, e),
      children: (e, t) => [].concat(...e.children).filter((e) => e.matches(t)),
      parents(e, t) {
        let i = [],
          n = e.parentNode;
        for (; n && n.nodeType === Node.ELEMENT_NODE && 3 !== n.nodeType; )
          n.matches(t) && i.push(n), (n = n.parentNode);
        return i;
      },
      prev(e, t) {
        let i = e.previousElementSibling;
        for (; i; ) {
          if (i.matches(t)) return [i];
          i = i.previousElementSibling;
        }
        return [];
      },
      next(e, t) {
        let i = e.nextElementSibling;
        for (; i; ) {
          if (i.matches(t)) return [i];
          i = i.nextElementSibling;
        }
        return [];
      },
      focusableChildren(e) {
        let t = [
          "a",
          "button",
          "input",
          "textarea",
          "select",
          "details",
          "[tabindex]",
          '[contenteditable="true"]',
        ]
          .map((e) => `${e}:not([tabindex^="-"])`)
          .join(", ");
        return this.find(t, e).filter((e) => !u(e) && f(e));
      },
    },
    J = "carousel",
    ee = ".bs.carousel",
    et = ".data-api",
    ei = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0,
      touch: !0,
    },
    en = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean",
      touch: "boolean",
    },
    es = "next",
    er = "prev",
    eo = "left",
    ea = "right",
    el = { ArrowLeft: ea, ArrowRight: eo },
    ec = `slide${ee}`,
    ef = `slid${ee}`,
    eu = `keydown${ee}`,
    eh = `mouseenter${ee}`,
    ed = `mouseleave${ee}`,
    ep = `touchstart${ee}`,
    em = `touchmove${ee}`,
    eg = `touchend${ee}`,
    e8 = `pointerdown${ee}`,
    ev = `pointerup${ee}`,
    eb = `dragstart${ee}`,
    ey = `load${ee}${et}`,
    e$ = `click${ee}${et}`,
    eE = "active",
    ew = ".active.carousel-item";
  class eA extends B {
    constructor(e, t) {
      super(e),
        (this._items = null),
        (this._interval = null),
        (this._activeElement = null),
        (this._isPaused = !1),
        (this._isSliding = !1),
        (this.touchTimeout = null),
        (this.touchStartX = 0),
        (this.touchDeltaX = 0),
        (this._config = this._getConfig(t)),
        (this._indicatorsElement = G.findOne(
          ".carousel-indicators",
          this._element
        )),
        (this._touchSupported =
          "ontouchstart" in document.documentElement ||
          navigator.maxTouchPoints > 0),
        (this._pointerEvent = Boolean(window.PointerEvent)),
        this._addEventListeners();
    }
    static get Default() {
      return ei;
    }
    static get NAME() {
      return J;
    }
    next() {
      this._slide(es);
    }
    nextWhenVisible() {
      !document.hidden && f(this._element) && this.next();
    }
    prev() {
      this._slide(er);
    }
    pause(e) {
      e || (this._isPaused = !0),
        G.findOne(".carousel-item-next, .carousel-item-prev", this._element) &&
          (o(this._element), this.cycle(!0)),
        clearInterval(this._interval),
        (this._interval = null);
    }
    cycle(e) {
      e || (this._isPaused = !1),
        this._interval &&
          (clearInterval(this._interval), (this._interval = null)),
        this._config &&
          this._config.interval &&
          !this._isPaused &&
          (this._updateInterval(),
          (this._interval = setInterval(
            (document.visibilityState ? this.nextWhenVisible : this.next).bind(
              this
            ),
            this._config.interval
          )));
    }
    to(e) {
      this._activeElement = G.findOne(ew, this._element);
      let t = this._getItemIndex(this._activeElement);
      if (!(e > this._items.length - 1) && !(e < 0)) {
        if (this._isSliding) {
          P.one(this._element, ef, () => this.to(e));
          return;
        }
        if (t === e) {
          this.pause(), this.cycle();
          return;
        }
        this._slide(e > t ? es : er, this._items[e]);
      }
    }
    _getConfig(e) {
      return (
        c(
          J,
          (e = {
            ...ei,
            ...Z.getDataAttributes(this._element),
            ...("object" == typeof e ? e : {}),
          }),
          en
        ),
        e
      );
    }
    _handleSwipe() {
      let e = Math.abs(this.touchDeltaX);
      if (e <= 40) return;
      let t = e / this.touchDeltaX;
      (this.touchDeltaX = 0), t && this._slide(t > 0 ? ea : eo);
    }
    _addEventListeners() {
      this._config.keyboard && P.on(this._element, eu, (e) => this._keydown(e)),
        "hover" === this._config.pause &&
          (P.on(this._element, eh, (e) => this.pause(e)),
          P.on(this._element, ed, (e) => this.cycle(e))),
        this._config.touch &&
          this._touchSupported &&
          this._addTouchEventListeners();
    }
    _addTouchEventListeners() {
      let e = (e) =>
          this._pointerEvent &&
          ("pen" === e.pointerType || "touch" === e.pointerType),
        t = (t) => {
          e(t)
            ? (this.touchStartX = t.clientX)
            : this._pointerEvent || (this.touchStartX = t.touches[0].clientX);
        },
        i = (e) => {
          this.touchDeltaX =
            e.touches && e.touches.length > 1
              ? 0
              : e.touches[0].clientX - this.touchStartX;
        },
        n = (t) => {
          e(t) && (this.touchDeltaX = t.clientX - this.touchStartX),
            this._handleSwipe(),
            "hover" === this._config.pause &&
              (this.pause(),
              this.touchTimeout && clearTimeout(this.touchTimeout),
              (this.touchTimeout = setTimeout(
                (e) => this.cycle(e),
                500 + this._config.interval
              )));
        };
      G.find(".carousel-item img", this._element).forEach((e) => {
        P.on(e, eb, (e) => e.preventDefault());
      }),
        this._pointerEvent
          ? (P.on(this._element, e8, (e) => t(e)),
            P.on(this._element, ev, (e) => n(e)),
            this._element.classList.add("pointer-event"))
          : (P.on(this._element, ep, (e) => t(e)),
            P.on(this._element, em, (e) => i(e)),
            P.on(this._element, eg, (e) => n(e)));
    }
    _keydown(e) {
      if (/input|textarea/i.test(e.target.tagName)) return;
      let t = el[e.key];
      t && (e.preventDefault(), this._slide(t));
    }
    _getItemIndex(e) {
      return (
        (this._items =
          e && e.parentNode ? G.find(".carousel-item", e.parentNode) : []),
        this._items.indexOf(e)
      );
    }
    _getItemByOrder(e, t) {
      return E(this._items, t, e === es, this._config.wrap);
    }
    _triggerSlideEvent(e, t) {
      let i = this._getItemIndex(e),
        n = this._getItemIndex(G.findOne(ew, this._element));
      return P.trigger(this._element, ec, {
        relatedTarget: e,
        direction: t,
        from: n,
        to: i,
      });
    }
    _setActiveIndicatorElement(e) {
      if (this._indicatorsElement) {
        let t = G.findOne(".active", this._indicatorsElement);
        t.classList.remove(eE), t.removeAttribute("aria-current");
        let i = G.find("[data-bs-target]", this._indicatorsElement);
        for (let n = 0; n < i.length; n++)
          if (
            Number.parseInt(i[n].getAttribute("data-bs-slide-to"), 10) ===
            this._getItemIndex(e)
          ) {
            i[n].classList.add(eE), i[n].setAttribute("aria-current", "true");
            break;
          }
      }
    }
    _updateInterval() {
      let e = this._activeElement || G.findOne(ew, this._element);
      if (!e) return;
      let t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
      t
        ? ((this._config.defaultInterval =
            this._config.defaultInterval || this._config.interval),
          (this._config.interval = t))
        : (this._config.interval =
            this._config.defaultInterval || this._config.interval);
    }
    _slide(e, t) {
      let i = this._directionToOrder(e),
        n = G.findOne(ew, this._element),
        s = this._getItemIndex(n),
        r = t || this._getItemByOrder(i, n),
        o = this._getItemIndex(r),
        a = Boolean(this._interval),
        l = i === es,
        c = l ? "carousel-item-start" : "carousel-item-end",
        f = l ? "carousel-item-next" : "carousel-item-prev",
        u = this._orderToDirection(i);
      if (r && r.classList.contains(eE)) {
        this._isSliding = !1;
        return;
      }
      if (this._isSliding) return;
      let h = this._triggerSlideEvent(r, u);
      if (h.defaultPrevented || !n || !r) return;
      (this._isSliding = !0),
        a && this.pause(),
        this._setActiveIndicatorElement(r),
        (this._activeElement = r);
      let p = () => {
        P.trigger(this._element, ef, {
          relatedTarget: r,
          direction: u,
          from: s,
          to: o,
        });
      };
      if (this._element.classList.contains("slide")) {
        r.classList.add(f), d(r), n.classList.add(c), r.classList.add(c);
        let m = () => {
          r.classList.remove(c, f),
            r.classList.add(eE),
            n.classList.remove(eE, f, c),
            (this._isSliding = !1),
            setTimeout(p, 0);
        };
        this._queueCallback(m, n, !0);
      } else n.classList.remove(eE), r.classList.add(eE), (this._isSliding = !1), p();
      a && this.cycle();
    }
    _directionToOrder(e) {
      return [ea, eo].includes(e)
        ? v()
          ? e === eo
            ? er
            : es
          : e === eo
          ? es
          : er
        : e;
    }
    _orderToDirection(e) {
      return [es, er].includes(e)
        ? v()
          ? e === er
            ? eo
            : ea
          : e === er
          ? ea
          : eo
        : e;
    }
    static carouselInterface(e, t) {
      let i = eA.getOrCreateInstance(e, t),
        { _config: n } = i;
      "object" == typeof t && (n = { ...n, ...t });
      let s = "string" == typeof t ? t : n.slide;
      if ("number" == typeof t) i.to(t);
      else if ("string" == typeof s) {
        if (void 0 === i[s]) throw TypeError(`No method named "${s}"`);
        i[s]();
      } else n.interval && n.ride && (i.pause(), i.cycle());
    }
    static jQueryInterface(e) {
      return this.each(function () {
        eA.carouselInterface(this, e);
      });
    }
    static dataApiClickHandler(e) {
      let t = s(this);
      if (!t || !t.classList.contains("carousel")) return;
      let i = { ...Z.getDataAttributes(t), ...Z.getDataAttributes(this) },
        n = this.getAttribute("data-bs-slide-to");
      n && (i.interval = !1),
        eA.carouselInterface(t, i),
        n && eA.getInstance(t).to(n),
        e.preventDefault();
    }
  }
  P.on(
    document,
    e$,
    "[data-bs-slide], [data-bs-slide-to]",
    eA.dataApiClickHandler
  ),
    P.on(window, ey, () => {
      let e = G.find('[data-bs-ride="carousel"]');
      for (let t = 0, i = e.length; t < i; t++)
        eA.carouselInterface(e[t], eA.getInstance(e[t]));
    }),
    b(eA),
    P.on(
      document,
      EVENT_CLICK_DATA_API$4,
      SELECTOR_DATA_TOGGLE$4,
      function (e) {
        ("A" === e.target.tagName ||
          (e.delegateTarget && "A" === e.delegateTarget.tagName)) &&
          e.preventDefault();
        let t = n(this),
          i = G.find(t);
        i.forEach((e) => {
          Collapse.getOrCreateInstance(e, { toggle: !1 }).toggle();
        });
      }
    ),
    b(Collapse);
  var ex = "bottom",
    eO = "right",
    eL = "left",
    ek = "auto",
    eD = ["top", ex, eO, eL],
    e9 = "start",
    eT = "clippingParents",
    eC = "viewport",
    eI = "popper",
    e_ = "reference",
    eN = eD.reduce(function (e, t) {
      return e.concat([t + "-" + e9, t + "-end"]);
    }, []),
    eS = [].concat(eD, [ek]).reduce(function (e, t) {
      return e.concat([t, t + "-" + e9, t + "-end"]);
    }, []),
    eM = "beforeRead",
    eH = "read",
    eP = "afterRead",
    eW = "beforeMain",
    eR = "main",
    eB = "afterMain",
    ej = "beforeWrite",
    eq = "write",
    eV = "afterWrite",
    eX = [eM, eH, eP, eW, eR, eB, ej, eq, eV];
  function eF(e) {
    return e ? (e.nodeName || "").toLowerCase() : null;
  }
  function eK(e) {
    if (null == e) return window;
    if ("[object Window]" !== e.toString()) {
      var t = e.ownerDocument;
      return (t && t.defaultView) || window;
    }
    return e;
  }
  function ez(e) {
    var t = eK(e).Element;
    return e instanceof t || e instanceof Element;
  }
  function e0(e) {
    var t = eK(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement;
  }
  function eY(e) {
    if ("undefined" == typeof ShadowRoot) return !1;
    var t = eK(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot;
  }
  let eU = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function e(t) {
      var i = t.state;
      Object.keys(i.elements).forEach(function (e) {
        var t = i.styles[e] || {},
          n = i.attributes[e] || {},
          s = i.elements[e];
        e0(s) &&
          eF(s) &&
          (Object.assign(s.style, t),
          Object.keys(n).forEach(function (e) {
            var t = n[e];
            !1 === t
              ? s.removeAttribute(e)
              : s.setAttribute(e, !0 === t ? "" : t);
          }));
      });
    },
    effect: function e(t) {
      var i = t.state,
        n = {
          popper: {
            position: i.options.strategy,
            left: "0",
            top: "0",
            margin: "0",
          },
          arrow: { position: "absolute" },
          reference: {},
        };
      return (
        Object.assign(i.elements.popper.style, n.popper),
        (i.styles = n),
        i.elements.arrow && Object.assign(i.elements.arrow.style, n.arrow),
        function () {
          Object.keys(i.elements).forEach(function (e) {
            var t = i.elements[e],
              s = i.attributes[e] || {},
              r = Object.keys(
                i.styles.hasOwnProperty(e) ? i.styles[e] : n[e]
              ).reduce(function (e, t) {
                return (e[t] = ""), e;
              }, {});
            e0(t) &&
              eF(t) &&
              (Object.assign(t.style, r),
              Object.keys(s).forEach(function (e) {
                t.removeAttribute(e);
              }));
          });
        }
      );
    },
    requires: ["computeStyles"],
  };
  function eQ(e) {
    return e.split("-")[0];
  }
  function e1(e, t) {
    var i = e.getBoundingClientRect();
    return {
      width: i.width / 1,
      height: i.height / 1,
      top: i.top / 1,
      right: i.right / 1,
      bottom: i.bottom / 1,
      left: i.left / 1,
      x: i.left / 1,
      y: i.top / 1,
    };
  }
  function e3(e) {
    var t = e1(e),
      i = e.offsetWidth,
      n = e.offsetHeight;
    return (
      1 >= Math.abs(t.width - i) && (i = t.width),
      1 >= Math.abs(t.height - n) && (n = t.height),
      { x: e.offsetLeft, y: e.offsetTop, width: i, height: n }
    );
  }
  function e2(e, t) {
    var i = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return !0;
    if (i && eY(i)) {
      var n = t;
      do {
        if (n && e.isSameNode(n)) return !0;
        n = n.parentNode || n.host;
      } while (n);
    }
    return !1;
  }
  function eZ(e) {
    return eK(e).getComputedStyle(e);
  }
  function e4(e) {
    return ["table", "td", "th"].indexOf(eF(e)) >= 0;
  }
  function e6(e) {
    return (
      (ez(e) ? e.ownerDocument : e.document) || window.document
    ).documentElement;
  }
  function eG(e) {
    return "html" === eF(e)
      ? e
      : e.assignedSlot || e.parentNode || (eY(e) ? e.host : null) || e6(e);
  }
  function eJ(e) {
    return e0(e) && "fixed" !== eZ(e).position ? e.offsetParent : null;
  }
  function e5(e) {
    for (var t = eK(e), i = eJ(e); i && e4(i) && "static" === eZ(i).position; )
      i = eJ(i);
    return i &&
      ("html" === eF(i) || ("body" === eF(i) && "static" === eZ(i).position))
      ? t
      : i ||
          (function e(t) {
            var i = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
            if (
              -1 !== navigator.userAgent.indexOf("Trident") &&
              e0(t) &&
              "fixed" === eZ(t).position
            )
              return null;
            for (
              var n = eG(t);
              e0(n) && 0 > ["html", "body"].indexOf(eF(n));

            ) {
              var s = eZ(n);
              if (
                "none" !== s.transform ||
                "none" !== s.perspective ||
                "paint" === s.contain ||
                -1 !== ["transform", "perspective"].indexOf(s.willChange) ||
                (i && "filter" === s.willChange) ||
                (i && s.filter && "none" !== s.filter)
              )
                return n;
              n = n.parentNode;
            }
            return null;
          })(e) ||
          t;
  }
  function e7(e) {
    return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
  }
  var te = Math.max,
    tt = Math.min,
    ti = Math.round;
  function tn(e, t, i) {
    return te(e, tt(t, i));
  }
  function ts() {
    return { top: 0, right: 0, bottom: 0, left: 0 };
  }
  function tr(e) {
    return Object.assign({}, ts(), e);
  }
  function to(e, t) {
    return t.reduce(function (t, i) {
      return (t[i] = e), t;
    }, {});
  }
  let ta = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: function e(t) {
      var i,
        n = t.state,
        s = t.name,
        r = t.options,
        o = n.elements.arrow,
        a = n.modifiersData.popperOffsets,
        l = eQ(n.placement),
        c = e7(l),
        f = [eL, eO].indexOf(l) >= 0 ? "height" : "width";
      if (o && a) {
        var u,
          h,
          d =
            ((u = r.padding),
            (h = n),
            tr(
              "number" !=
                typeof (u =
                  "function" == typeof u
                    ? u(Object.assign({}, h.rects, { placement: h.placement }))
                    : u)
                ? u
                : to(u, eD)
            )),
          p = e3(o),
          m =
            n.rects.reference[f] +
            n.rects.reference[c] -
            a[c] -
            n.rects.popper[f],
          g = a[c] - n.rects.reference[c],
          v = e5(o),
          b = v ? ("y" === c ? v.clientHeight || 0 : v.clientWidth || 0) : 0,
          y = d["y" === c ? "top" : eL],
          $ = b - p[f] - d["y" === c ? ex : eO],
          E = b / 2 - p[f] / 2 + (m / 2 - g / 2),
          w = tn(y, E, $),
          A = c;
        n.modifiersData[s] = (((i = {})[A] = w), (i.centerOffset = w - E), i);
      }
    },
    effect: function e(t) {
      var i = t.state,
        n = t.options.element,
        s = void 0 === n ? "[data-popper-arrow]" : n;
      null != s &&
        ("string" != typeof s || (s = i.elements.popper.querySelector(s))) &&
        e2(i.elements.popper, s) &&
        (i.elements.arrow = s);
    },
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"],
  };
  function tl(e) {
    return e.split("-")[1];
  }
  var tc = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
  function tf(e) {
    var t,
      i,
      n,
      s,
      r,
      o,
      a = e.popper,
      l = e.popperRect,
      c = e.placement,
      f = e.variation,
      u = e.offsets,
      h = e.position,
      d = e.gpuAcceleration,
      p = e.adaptive,
      m = e.roundOffsets,
      g =
        !0 === m
          ? ((s = (n = u).x),
            (r = n.y),
            {
              x: ti(ti(s * (o = window.devicePixelRatio || 1)) / o) || 0,
              y: ti(ti(r * o) / o) || 0,
            })
          : "function" == typeof m
          ? m(u)
          : u,
      v = g.x,
      b = void 0 === v ? 0 : v,
      y = g.y,
      $ = void 0 === y ? 0 : y,
      E = u.hasOwnProperty("x"),
      w = u.hasOwnProperty("y"),
      A = eL,
      x = "top",
      O = window;
    if (p) {
      var L = e5(a),
        k = "clientHeight",
        D = "clientWidth";
      L === eK(a) &&
        ((L = e6(a)),
        "static" !== eZ(L).position &&
          "absolute" === h &&
          ((k = "scrollHeight"), (D = "scrollWidth"))),
        ("top" === c || ((c === eL || c === eO) && "end" === f)) &&
          ((x = ex), ($ -= L[k] - l.height), ($ *= d ? 1 : -1)),
        (c === eL || (("top" === c || c === ex) && "end" === f)) &&
          ((A = eO), (b -= L[D] - l.width), (b *= d ? 1 : -1));
    }
    var T = Object.assign({ position: h }, p && tc);
    return d
      ? Object.assign(
          {},
          T,
          (((i = {})[x] = w ? "0" : ""),
          (i[A] = E ? "0" : ""),
          (i.transform =
            1 >= (O.devicePixelRatio || 1)
              ? "translate(" + b + "px, " + $ + "px)"
              : "translate3d(" + b + "px, " + $ + "px, 0)"),
          i)
        )
      : Object.assign(
          {},
          T,
          (((t = {})[x] = w ? $ + "px" : ""),
          (t[A] = E ? b + "px" : ""),
          (t.transform = ""),
          t)
        );
  }
  let tu = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: function e(t) {
      var i = t.state,
        n = t.options,
        s = n.gpuAcceleration,
        r = n.adaptive,
        o = n.roundOffsets,
        a = void 0 === o || o,
        l = {
          placement: eQ(i.placement),
          variation: tl(i.placement),
          popper: i.elements.popper,
          popperRect: i.rects.popper,
          gpuAcceleration: void 0 === s || s,
        };
      null != i.modifiersData.popperOffsets &&
        (i.styles.popper = Object.assign(
          {},
          i.styles.popper,
          tf(
            Object.assign({}, l, {
              offsets: i.modifiersData.popperOffsets,
              position: i.options.strategy,
              adaptive: void 0 === r || r,
              roundOffsets: a,
            })
          )
        )),
        null != i.modifiersData.arrow &&
          (i.styles.arrow = Object.assign(
            {},
            i.styles.arrow,
            tf(
              Object.assign({}, l, {
                offsets: i.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: a,
              })
            )
          )),
        (i.attributes.popper = Object.assign({}, i.attributes.popper, {
          "data-popper-placement": i.placement,
        }));
    },
    data: {},
  };
  var th = { passive: !0 };
  let td = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function e() {},
    effect: function e(t) {
      var i = t.state,
        n = t.instance,
        s = t.options,
        r = s.scroll,
        o = void 0 === r || r,
        a = s.resize,
        l = void 0 === a || a,
        c = eK(i.elements.popper),
        f = [].concat(i.scrollParents.reference, i.scrollParents.popper);
      return (
        o &&
          f.forEach(function (e) {
            e.addEventListener("scroll", n.update, th);
          }),
        l && c.addEventListener("resize", n.update, th),
        function () {
          o &&
            f.forEach(function (e) {
              e.removeEventListener("scroll", n.update, th);
            }),
            l && c.removeEventListener("resize", n.update, th);
        }
      );
    },
    data: {},
  };
  var tp = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function tm(e) {
    return e.replace(/left|right|bottom|top/g, function (e) {
      return tp[e];
    });
  }
  var tg = { start: "end", end: "start" };
  function t8(e) {
    return e.replace(/start|end/g, function (e) {
      return tg[e];
    });
  }
  function tv(e) {
    var t,
      i = eK(e);
    return { scrollLeft: i.pageXOffset, scrollTop: i.pageYOffset };
  }
  function tb(e) {
    return e1(e6(e)).left + tv(e).scrollLeft;
  }
  function ty(e) {
    var t = eZ(e),
      i = t.overflow,
      n = t.overflowX,
      s = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(i + s + n);
  }
  function t$(e, t) {
    void 0 === t && (t = []);
    var i,
      n = (function e(t) {
        return ["html", "body", "#document"].indexOf(eF(t)) >= 0
          ? t.ownerDocument.body
          : e0(t) && ty(t)
          ? t
          : e(eG(t));
      })(e),
      s = n === (null == (i = e.ownerDocument) ? void 0 : i.body),
      r = eK(n),
      o = s ? [r].concat(r.visualViewport || [], ty(n) ? n : []) : n,
      a = t.concat(o);
    return s ? a : a.concat(t$(eG(o)));
  }
  function tE(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height,
    });
  }
  function tw(e, t) {
    var i, n, s, r, o, a, l, c, f, u, h, d, p, m, g, v, b, y, $;
    return t === eC
      ? tE(
          ((n = eK((i = e))),
          (s = e6(i)),
          (r = n.visualViewport),
          (o = s.clientWidth),
          (a = s.clientHeight),
          (l = 0),
          (c = 0),
          r &&
            ((o = r.width),
            (a = r.height),
            /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
              ((l = r.offsetLeft), (c = r.offsetTop))),
          { width: o, height: a, x: l + tb(i), y: c })
        )
      : e0(t)
      ? (((u = e1((f = t))).top = u.top + f.clientTop),
        (u.left = u.left + f.clientLeft),
        (u.bottom = u.top + f.clientHeight),
        (u.right = u.left + f.clientWidth),
        (u.width = f.clientWidth),
        (u.height = f.clientHeight),
        (u.x = u.left),
        (u.y = u.top),
        u)
      : tE(
          ((h = e6(e)),
          (p = e6(h)),
          (m = tv(h)),
          (g = null == (d = h.ownerDocument) ? void 0 : d.body),
          (v = te(
            p.scrollWidth,
            p.clientWidth,
            g ? g.scrollWidth : 0,
            g ? g.clientWidth : 0
          )),
          (b = te(
            p.scrollHeight,
            p.clientHeight,
            g ? g.scrollHeight : 0,
            g ? g.clientHeight : 0
          )),
          (y = -m.scrollLeft + tb(h)),
          ($ = -m.scrollTop),
          "rtl" === eZ(g || p).direction &&
            (y += te(p.clientWidth, g ? g.clientWidth : 0) - v),
          { width: v, height: b, x: y, y: $ })
        );
  }
  function tA(e) {
    var t,
      i = e.reference,
      n = e.element,
      s = e.placement,
      r = s ? eQ(s) : null,
      o = s ? tl(s) : null,
      a = i.x + i.width / 2 - n.width / 2,
      l = i.y + i.height / 2 - n.height / 2;
    switch (r) {
      case "top":
        t = { x: a, y: i.y - n.height };
        break;
      case ex:
        t = { x: a, y: i.y + i.height };
        break;
      case eO:
        t = { x: i.x + i.width, y: l };
        break;
      case eL:
        t = { x: i.x - n.width, y: l };
        break;
      default:
        t = { x: i.x, y: i.y };
    }
    var c = r ? e7(r) : null;
    if (null != c) {
      var f = "y" === c ? "height" : "width";
      switch (o) {
        case e9:
          t[c] = t[c] - (i[f] / 2 - n[f] / 2);
          break;
        case "end":
          t[c] = t[c] + (i[f] / 2 - n[f] / 2);
      }
    }
    return t;
  }
  function tx(e, t) {
    void 0 === t && (t = {});
    var i,
      n,
      s,
      r,
      o,
      a,
      l,
      c,
      f,
      u = t,
      h = u.placement,
      d = void 0 === h ? e.placement : h,
      p = u.boundary,
      m = u.rootBoundary,
      g = u.elementContext,
      v = void 0 === g ? eI : g,
      b = u.altBoundary,
      y = u.padding,
      $ = void 0 === y ? 0 : y,
      E = tr("number" != typeof $ ? $ : to($, eD)),
      w = e.rects.popper,
      A = e.elements[void 0 !== b && b ? (v === eI ? e_ : eI) : v],
      x =
        ((i = ez(A) ? A : A.contextElement || e6(e.elements.popper)),
        (n = void 0 === p ? eT : p),
        (s = void 0 === m ? eC : m),
        (c = (l = [].concat(
          "clippingParents" === n
            ? ((r = i),
              (o = t$(eG(r))),
              (a =
                ["absolute", "fixed"].indexOf(eZ(r).position) >= 0 && e0(r)
                  ? e5(r)
                  : r),
              ez(a)
                ? o.filter(function (e) {
                    return ez(e) && e2(e, a) && "body" !== eF(e);
                  })
                : [])
            : [].concat(n),
          [s]
        ))[0]),
        ((f = l.reduce(function (e, t) {
          var n = tw(i, t);
          return (
            (e.top = te(n.top, e.top)),
            (e.right = tt(n.right, e.right)),
            (e.bottom = tt(n.bottom, e.bottom)),
            (e.left = te(n.left, e.left)),
            e
          );
        }, tw(i, c))).width = f.right - f.left),
        (f.height = f.bottom - f.top),
        (f.x = f.left),
        (f.y = f.top),
        f),
      O = e1(e.elements.reference),
      L = tA({ reference: O, element: w, strategy: "absolute", placement: d }),
      k = tE(Object.assign({}, w, L)),
      D = v === eI ? k : O,
      T = {
        top: x.top - D.top + E.top,
        bottom: D.bottom - x.bottom + E.bottom,
        left: x.left - D.left + E.left,
        right: D.right - x.right + E.right,
      },
      C = e.modifiersData.offset;
    if (v === eI && C) {
      var I = C[d];
      Object.keys(T).forEach(function (e) {
        var t = [eO, ex].indexOf(e) >= 0 ? 1 : -1,
          i = ["top", ex].indexOf(e) >= 0 ? "y" : "x";
        T[e] += I[i] * t;
      });
    }
    return T;
  }
  let tO = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function e(t) {
      var i = t.state,
        n = t.options,
        s = t.name;
      if (!i.modifiersData[s]._skip) {
        for (
          var r = n.mainAxis,
            o = void 0 === r || r,
            a = n.altAxis,
            l = void 0 === a || a,
            c = n.fallbackPlacements,
            f = n.padding,
            u = n.boundary,
            h = n.rootBoundary,
            d = n.altBoundary,
            p = n.flipVariations,
            m = void 0 === p || p,
            g = n.allowedAutoPlacements,
            v = i.options.placement,
            b = eQ(v),
            y = [v]
              .concat(
                c ||
                  (b !== v && m
                    ? (function e(t) {
                        if (eQ(t) === ek) return [];
                        var i = tm(t);
                        return [t8(t), i, t8(i)];
                      })(v)
                    : [tm(v)])
              )
              .reduce(function (e, t) {
                var n, s, r, o, a, l, c, d, p, v, b, y, $, E;
                return e.concat(
                  eQ(t) === ek
                    ? ((n = i),
                      (s = {
                        placement: t,
                        boundary: u,
                        rootBoundary: h,
                        padding: f,
                        flipVariations: m,
                        allowedAutoPlacements: g,
                      }),
                      (o = (r = s).placement),
                      (a = r.boundary),
                      (l = r.rootBoundary),
                      (c = r.padding),
                      (d = r.flipVariations),
                      (v = void 0 === (p = r.allowedAutoPlacements) ? eS : p),
                      0 ===
                        ($ = (y = (b = tl(o))
                          ? d
                            ? eN
                            : eN.filter(function (e) {
                                return tl(e) === b;
                              })
                          : eD).filter(function (e) {
                          return v.indexOf(e) >= 0;
                        })).length && ($ = y),
                      Object.keys(
                        (E = $.reduce(function (e, t) {
                          return (
                            (e[t] = tx(n, {
                              placement: t,
                              boundary: a,
                              rootBoundary: l,
                              padding: c,
                            })[eQ(t)]),
                            e
                          );
                        }, {}))
                      ).sort(function (e, t) {
                        return E[e] - E[t];
                      }))
                    : t
                );
              }, []),
            $ = i.rects.reference,
            E = i.rects.popper,
            w = new Map(),
            A = !0,
            x = y[0],
            O = 0;
          O < y.length;
          O++
        ) {
          var L = y[O],
            k = eQ(L),
            D = tl(L) === e9,
            T = ["top", ex].indexOf(k) >= 0,
            C = T ? "width" : "height",
            I = tx(i, {
              placement: L,
              boundary: u,
              rootBoundary: h,
              altBoundary: d,
              padding: f,
            }),
            _ = T ? (D ? eO : eL) : D ? ex : "top";
          $[C] > E[C] && (_ = tm(_));
          var N = tm(_),
            S = [];
          if (
            (o && S.push(I[k] <= 0),
            l && S.push(I[_] <= 0, I[N] <= 0),
            S.every(function (e) {
              return e;
            }))
          ) {
            (x = L), (A = !1);
            break;
          }
          w.set(L, S);
        }
        if (A)
          for (
            var M = m ? 3 : 1,
              H = function e(t) {
                var i = y.find(function (e) {
                  var i = w.get(e);
                  if (i)
                    return i.slice(0, t).every(function (e) {
                      return e;
                    });
                });
                if (i) return (x = i), "break";
              },
              P = M;
            P > 0 && "break" !== H(P);
            P--
          );
        i.placement !== x &&
          ((i.modifiersData[s]._skip = !0), (i.placement = x), (i.reset = !0));
      }
    },
    requiresIfExists: ["offset"],
    data: { _skip: !1 },
  };
  function tL(e, t, i) {
    return (
      void 0 === i && (i = { x: 0, y: 0 }),
      {
        top: e.top - t.height - i.y,
        right: e.right - t.width + i.x,
        bottom: e.bottom - t.height + i.y,
        left: e.left - t.width - i.x,
      }
    );
  }
  function tk(e) {
    return ["top", eO, ex, eL].some(function (t) {
      return e[t] >= 0;
    });
  }
  let tD = {
      name: "hide",
      enabled: !0,
      phase: "main",
      requiresIfExists: ["preventOverflow"],
      fn: function e(t) {
        var i = t.state,
          n = t.name,
          s = i.rects.reference,
          r = i.rects.popper,
          o = i.modifiersData.preventOverflow,
          a = tx(i, { elementContext: "reference" }),
          l = tx(i, { altBoundary: !0 }),
          c = tL(a, s),
          f = tL(l, r, o),
          u = tk(c),
          h = tk(f);
        (i.modifiersData[n] = {
          referenceClippingOffsets: c,
          popperEscapeOffsets: f,
          isReferenceHidden: u,
          hasPopperEscaped: h,
        }),
          (i.attributes.popper = Object.assign({}, i.attributes.popper, {
            "data-popper-reference-hidden": u,
            "data-popper-escaped": h,
          }));
      },
    },
    t9 = {
      name: "offset",
      enabled: !0,
      phase: "main",
      requires: ["popperOffsets"],
      fn: function e(t) {
        var i = t.state,
          n = t.options,
          s = t.name,
          r = n.offset,
          o = void 0 === r ? [0, 0] : r,
          a = eS.reduce(function (e, t) {
            var n, s, r, a, l, c, f, u;
            return (
              (e[t] =
                ((n = t),
                (s = i.rects),
                (r = o),
                (l = [eL, "top"].indexOf((a = eQ(n))) >= 0 ? -1 : 1),
                (f = (c =
                  "function" == typeof r
                    ? r(Object.assign({}, s, { placement: n }))
                    : r)[0]),
                (u = c[1]),
                (f = f || 0),
                (u = (u || 0) * l),
                [eL, eO].indexOf(a) >= 0 ? { x: u, y: f } : { x: f, y: u })),
              e
            );
          }, {}),
          l = a[i.placement],
          c = l.x,
          f = l.y;
        null != i.modifiersData.popperOffsets &&
          ((i.modifiersData.popperOffsets.x += c),
          (i.modifiersData.popperOffsets.y += f)),
          (i.modifiersData[s] = a);
      },
    },
    tT = {
      name: "popperOffsets",
      enabled: !0,
      phase: "read",
      fn: function e(t) {
        var i = t.state,
          n = t.name;
        i.modifiersData[n] = tA({
          reference: i.rects.reference,
          element: i.rects.popper,
          strategy: "absolute",
          placement: i.placement,
        });
      },
      data: {},
    },
    tC = {
      name: "preventOverflow",
      enabled: !0,
      phase: "main",
      fn: function e(t) {
        var i,
          n = t.state,
          s = t.options,
          r = t.name,
          o = s.mainAxis,
          a = void 0 === o || o,
          l = s.altAxis,
          c = void 0 !== l && l,
          f = s.boundary,
          u = s.rootBoundary,
          h = s.altBoundary,
          d = s.padding,
          p = s.tether,
          m = void 0 === p || p,
          g = s.tetherOffset,
          v = void 0 === g ? 0 : g,
          b = tx(n, {
            boundary: f,
            rootBoundary: u,
            padding: d,
            altBoundary: h,
          }),
          y = eQ(n.placement),
          $ = tl(n.placement),
          E = !$,
          w = e7(y),
          A = "x" === (i = w) ? "y" : "x",
          x = n.modifiersData.popperOffsets,
          O = n.rects.reference,
          L = n.rects.popper,
          k =
            "function" == typeof v
              ? v(Object.assign({}, n.rects, { placement: n.placement }))
              : v,
          D = { x: 0, y: 0 };
        if (x) {
          if (a || c) {
            var T = "y" === w ? "top" : eL,
              C = "y" === w ? ex : eO,
              I = "y" === w ? "height" : "width",
              _ = x[w],
              N = x[w] + b[T],
              S = x[w] - b[C],
              M = m ? -L[I] / 2 : 0,
              H = $ === e9 ? O[I] : L[I],
              P = $ === e9 ? -L[I] : -O[I],
              W = n.elements.arrow,
              R = m && W ? e3(W) : { width: 0, height: 0 },
              B = n.modifiersData["arrow#persistent"]
                ? n.modifiersData["arrow#persistent"].padding
                : ts(),
              j = B[T],
              q = B[C],
              V = tn(0, O[I], R[I]),
              X = E ? O[I] / 2 - M - V - j - k : H - V - j - k,
              F = E ? -O[I] / 2 + M + V + q + k : P + V + q + k,
              K = n.elements.arrow && e5(n.elements.arrow),
              z = K ? ("y" === w ? K.clientTop || 0 : K.clientLeft || 0) : 0,
              Y = n.modifiersData.offset
                ? n.modifiersData.offset[n.placement][w]
                : 0,
              U = x[w] + X - Y - z,
              Q = x[w] + F - Y;
            if (a) {
              var Z = tn(m ? tt(N, U) : N, _, m ? te(S, Q) : S);
              (x[w] = Z), (D[w] = Z - _);
            }
            if (c) {
              var G = x[A],
                J = G + b["x" === w ? "top" : eL],
                ee = G - b["x" === w ? ex : eO],
                et = tn(m ? tt(J, U) : J, G, m ? te(ee, Q) : ee);
              (x[A] = et), (D[A] = et - G);
            }
          }
          n.modifiersData[r] = D;
        }
      },
      requiresIfExists: ["offset"],
    };
  var tI = { placement: "bottom", modifiers: [], strategy: "absolute" };
  function t_() {
    for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
      t[i] = arguments[i];
    return !t.some(function (e) {
      return !(e && "function" == typeof e.getBoundingClientRect);
    });
  }
  function tN(e) {
    void 0 === e && (e = {});
    var t = e,
      i = t.defaultModifiers,
      n = void 0 === i ? [] : i,
      s = t.defaultOptions,
      r = void 0 === s ? tI : s;
    return function e(t, i, s) {
      void 0 === s && (s = r);
      var o,
        a,
        l = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, tI, r),
          modifiersData: {},
          elements: { reference: t, popper: i },
          attributes: {},
          styles: {},
        },
        c = [],
        f = !1,
        u = {
          state: l,
          setOptions: function e(s) {
            var o,
              a,
              f,
              d,
              p,
              m,
              g,
              v,
              b = "function" == typeof s ? s(l.options) : s;
            h(),
              (l.options = Object.assign({}, r, l.options, b)),
              (l.scrollParents = {
                reference: ez(t)
                  ? t$(t)
                  : t.contextElement
                  ? t$(t.contextElement)
                  : [],
                popper: t$(i),
              });
            var y =
              ((v =
                ((d = f =
                  Object.keys(
                    (a = (o = [].concat(n, l.options.modifiers)).reduce(
                      function (e, t) {
                        var i = e[t.name];
                        return (
                          (e[t.name] = i
                            ? Object.assign({}, i, t, {
                                options: Object.assign(
                                  {},
                                  i.options,
                                  t.options
                                ),
                                data: Object.assign({}, i.data, t.data),
                              })
                            : t),
                          e
                        );
                      },
                      {}
                    ))
                  ).map(function (e) {
                    return a[e];
                  })),
                (p = new Map()),
                (m = new Set()),
                (g = []),
                d.forEach(function (e) {
                  p.set(e.name, e);
                }),
                d.forEach(function (e) {
                  m.has(e.name) ||
                    (function e(t) {
                      m.add(t.name),
                        []
                          .concat(t.requires || [], t.requiresIfExists || [])
                          .forEach(function (t) {
                            if (!m.has(t)) {
                              var i = p.get(t);
                              i && e(i);
                            }
                          }),
                        g.push(t);
                    })(e);
                }),
                g)),
              eX.reduce(function (e, t) {
                return e.concat(
                  v.filter(function (e) {
                    return e.phase === t;
                  })
                );
              }, []));
            return (
              (l.orderedModifiers = y.filter(function (e) {
                return e.enabled;
              })),
              l.orderedModifiers.forEach(function (e) {
                var t = e.name,
                  i = e.options,
                  n = e.effect;
                if ("function" == typeof n) {
                  var s = n({
                      state: l,
                      name: t,
                      instance: u,
                      options: void 0 === i ? {} : i,
                    }),
                    r = function e() {};
                  c.push(s || r);
                }
              }),
              u.update()
            );
          },
          forceUpdate: function e() {
            if (!f) {
              var t,
                i,
                n,
                s,
                r,
                o,
                a,
                c,
                h,
                d,
                p,
                m,
                g,
                v,
                b = l.elements,
                y = b.reference,
                $ = b.popper;
              if (t_(y, $)) {
                (l.rects = {
                  reference:
                    ((n = y),
                    (s = e5($)),
                    (r = "fixed" === l.options.strategy),
                    (o = e0(s)),
                    e0(s) &&
                      ((h =
                        (c = (a = s).getBoundingClientRect()).width /
                          a.offsetWidth || 1),
                      c.height,
                      a.offsetHeight),
                    (p = e6(s)),
                    (m = e1(n)),
                    (g = { scrollLeft: 0, scrollTop: 0 }),
                    (v = { x: 0, y: 0 }),
                    (o || (!o && !r)) &&
                      (("body" !== eF(s) || ty(p)) &&
                        (g =
                          ((t = s),
                          t !== eK(t) && e0(t)
                            ? {
                                scrollLeft: (i = t).scrollLeft,
                                scrollTop: i.scrollTop,
                              }
                            : tv(t))),
                      e0(s)
                        ? ((v = e1(s)),
                          (v.x += s.clientLeft),
                          (v.y += s.clientTop))
                        : p && (v.x = tb(p))),
                    {
                      x: m.left + g.scrollLeft - v.x,
                      y: m.top + g.scrollTop - v.y,
                      width: m.width,
                      height: m.height,
                    }),
                  popper: e3($),
                }),
                  (l.reset = !1),
                  (l.placement = l.options.placement),
                  l.orderedModifiers.forEach(function (e) {
                    return (l.modifiersData[e.name] = Object.assign(
                      {},
                      e.data
                    ));
                  });
                for (var E = 0; E < l.orderedModifiers.length; E++) {
                  if (!0 === l.reset) {
                    (l.reset = !1), (E = -1);
                    continue;
                  }
                  var w = l.orderedModifiers[E],
                    A = w.fn,
                    x = w.options,
                    O = void 0 === x ? {} : x,
                    L = w.name;
                  "function" == typeof A &&
                    (l =
                      A({ state: l, options: O, name: L, instance: u }) || l);
                }
              }
            }
          },
          update:
            ((o = function () {
              return new Promise(function (e) {
                u.forceUpdate(), e(l);
              });
            }),
            function () {
              return (
                a ||
                  (a = new Promise(function (e) {
                    Promise.resolve().then(function () {
                      (a = void 0), e(o());
                    });
                  })),
                a
              );
            }),
          destroy: function e() {
            h(), (f = !0);
          },
        };
      if (!t_(t, i)) return u;
      function h() {
        c.forEach(function (e) {
          return e();
        }),
          (c = []);
      }
      return (
        u.setOptions(s).then(function (e) {
          !f && s.onFirstUpdate && s.onFirstUpdate(e);
        }),
        u
      );
    };
  }
  var tS = tN(),
    tM = tN({ defaultModifiers: [td, tT, tu, eU] }),
    tH = tN({ defaultModifiers: [td, tT, tu, eU, t9, tO, tC, ta, tD] });
  Object.freeze({
    __proto__: null,
    popperGenerator: tN,
    detectOverflow: tx,
    createPopperBase: tS,
    createPopper: tH,
    createPopperLite: tM,
    top: "top",
    bottom: ex,
    right: eO,
    left: eL,
    auto: ek,
    basePlacements: eD,
    start: e9,
    end: "end",
    clippingParents: eT,
    viewport: eC,
    popper: eI,
    reference: e_,
    variationPlacements: eN,
    placements: eS,
    beforeRead: eM,
    read: eH,
    afterRead: eP,
    beforeMain: eW,
    main: eR,
    afterMain: eB,
    beforeWrite: ej,
    write: eq,
    afterWrite: eV,
    modifierPhases: eX,
    applyStyles: eU,
    arrow: ta,
    computeStyles: tu,
    eventListeners: td,
    flip: tO,
    hide: tD,
    offset: t9,
    popperOffsets: tT,
    preventOverflow: tC,
  }),
    P.on(
      document,
      EVENT_KEYDOWN_DATA_API,
      SELECTOR_DATA_TOGGLE$3,
      Dropdown.dataApiKeydownHandler
    ),
    P.on(
      document,
      EVENT_KEYDOWN_DATA_API,
      SELECTOR_MENU,
      Dropdown.dataApiKeydownHandler
    ),
    P.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus),
    P.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus),
    P.on(
      document,
      EVENT_CLICK_DATA_API$3,
      SELECTOR_DATA_TOGGLE$3,
      function (e) {
        e.preventDefault(), Dropdown.getOrCreateInstance(this).toggle();
      }
    ),
    b(Dropdown);
  let tP = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    tW = ".sticky-top";
  class tR {
    constructor() {
      this._element = document.body;
    }
    getWidth() {
      let e = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - e);
    }
    hide() {
      let e = this.getWidth();
      this._disableOverFlow(),
        this._setElementAttributes(this._element, "paddingRight", (t) => t + e),
        this._setElementAttributes(tP, "paddingRight", (t) => t + e),
        this._setElementAttributes(tW, "marginRight", (t) => t - e);
    }
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow"),
        (this._element.style.overflow = "hidden");
    }
    _setElementAttributes(e, t, i) {
      let n = this.getWidth(),
        s = (e) => {
          if (e !== this._element && window.innerWidth > e.clientWidth + n)
            return;
          this._saveInitialAttribute(e, t);
          let s = window.getComputedStyle(e)[t];
          e.style[t] = `${i(Number.parseFloat(s))}px`;
        };
      this._applyManipulationCallback(e, s);
    }
    reset() {
      this._resetElementAttributes(this._element, "overflow"),
        this._resetElementAttributes(this._element, "paddingRight"),
        this._resetElementAttributes(tP, "paddingRight"),
        this._resetElementAttributes(tW, "marginRight");
    }
    _saveInitialAttribute(e, t) {
      let i = e.style[t];
      i && Z.setDataAttribute(e, t, i);
    }
    _resetElementAttributes(e, t) {
      let i = (e) => {
        let i = Z.getDataAttribute(e, t);
        void 0 === i
          ? e.style.removeProperty(t)
          : (Z.removeDataAttribute(e, t), (e.style[t] = i));
      };
      this._applyManipulationCallback(e, i);
    }
    _applyManipulationCallback(e, t) {
      a(e) ? t(e) : G.find(e, this._element).forEach(t);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }
  }
  let tB = {
      className: "modal-backdrop",
      isVisible: !0,
      isAnimated: !1,
      rootElement: "body",
      clickCallback: null,
    },
    tj = {
      className: "string",
      isVisible: "boolean",
      isAnimated: "boolean",
      rootElement: "(element|string)",
      clickCallback: "(function|null)",
    },
    tq = "backdrop",
    tV = "show",
    tX = `mousedown.bs.${tq}`;
  class tF {
    constructor(e) {
      (this._config = this._getConfig(e)),
        (this._isAppended = !1),
        (this._element = null);
    }
    show(e) {
      if (!this._config.isVisible) {
        y(e);
        return;
      }
      this._append(),
        this._config.isAnimated && d(this._getElement()),
        this._getElement().classList.add(tV),
        this._emulateAnimation(() => {
          y(e);
        });
    }
    hide(e) {
      if (!this._config.isVisible) {
        y(e);
        return;
      }
      this._getElement().classList.remove(tV),
        this._emulateAnimation(() => {
          this.dispose(), y(e);
        });
    }
    _getElement() {
      if (!this._element) {
        let e = document.createElement("div");
        (e.className = this._config.className),
          this._config.isAnimated && e.classList.add("fade"),
          (this._element = e);
      }
      return this._element;
    }
    _getConfig(e) {
      return (
        ((e = { ...tB, ...("object" == typeof e ? e : {}) }).rootElement = l(
          e.rootElement
        )),
        c(tq, e, tj),
        e
      );
    }
    _append() {
      !this._isAppended &&
        (this._config.rootElement.append(this._getElement()),
        P.on(this._getElement(), tX, () => {
          y(this._config.clickCallback);
        }),
        (this._isAppended = !0));
    }
    dispose() {
      this._isAppended &&
        (P.off(this._element, tX),
        this._element.remove(),
        (this._isAppended = !1));
    }
    _emulateAnimation(e) {
      $(e, this._getElement(), this._config.isAnimated);
    }
  }
  let tK = { trapElement: null, autofocus: !0 },
    tz = { trapElement: "element", autofocus: "boolean" },
    t0 = ".bs.focustrap",
    tY = `focusin${t0}`,
    tU = `keydown.tab${t0}`,
    tQ = "backward";
  class t1 {
    constructor(e) {
      (this._config = this._getConfig(e)),
        (this._isActive = !1),
        (this._lastTabNavDirection = null);
    }
    activate() {
      let { trapElement: e, autofocus: t } = this._config;
      !this._isActive &&
        (t && e.focus(),
        P.off(document, t0),
        P.on(document, tY, (e) => this._handleFocusin(e)),
        P.on(document, tU, (e) => this._handleKeydown(e)),
        (this._isActive = !0));
    }
    deactivate() {
      this._isActive && ((this._isActive = !1), P.off(document, t0));
    }
    _handleFocusin(e) {
      let { target: t } = e,
        { trapElement: i } = this._config;
      if (t === document || t === i || i.contains(t)) return;
      let n = G.focusableChildren(i);
      0 === n.length
        ? i.focus()
        : this._lastTabNavDirection === tQ
        ? n[n.length - 1].focus()
        : n[0].focus();
    }
    _handleKeydown(e) {
      "Tab" === e.key &&
        (this._lastTabNavDirection = e.shiftKey ? tQ : "forward");
    }
    _getConfig(e) {
      return (
        c("focustrap", (e = { ...tK, ...("object" == typeof e ? e : {}) }), tz),
        e
      );
    }
  }
  b(Modal);
  let t3 = "offcanvas",
    t2 = ".bs.offcanvas",
    tZ = ".data-api",
    t4 = `load${t2}${tZ}`,
    t6 = { backdrop: !0, keyboard: !0, scroll: !1 },
    tG = { backdrop: "boolean", keyboard: "boolean", scroll: "boolean" },
    tJ = "show",
    t5 = ".offcanvas.show",
    t7 = `show${t2}`,
    ie = `shown${t2}`,
    it = `hide${t2}`,
    ii = `hidden${t2}`,
    is = `click${t2}${tZ}`,
    ir = `keydown.dismiss${t2}`;
  class io extends B {
    constructor(e, t) {
      super(e),
        (this._config = this._getConfig(t)),
        (this._isShown = !1),
        (this._backdrop = this._initializeBackDrop()),
        (this._focustrap = this._initializeFocusTrap()),
        this._addEventListeners();
    }
    static get NAME() {
      return t3;
    }
    static get Default() {
      return t6;
    }
    toggle(e) {
      return this._isShown ? this.hide() : this.show(e);
    }
    show(e) {
      if (this._isShown) return;
      let t = P.trigger(this._element, t7, { relatedTarget: e });
      if (t.defaultPrevented) return;
      (this._isShown = !0),
        (this._element.style.visibility = "visible"),
        this._backdrop.show(),
        this._config.scroll || new tR().hide(),
        this._element.removeAttribute("aria-hidden"),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        this._element.classList.add(tJ);
      let i = () => {
        this._config.scroll || this._focustrap.activate(),
          P.trigger(this._element, ie, { relatedTarget: e });
      };
      this._queueCallback(i, this._element, !0);
    }
    hide() {
      if (!this._isShown) return;
      let e = P.trigger(this._element, it);
      if (e.defaultPrevented) return;
      this._focustrap.deactivate(),
        this._element.blur(),
        (this._isShown = !1),
        this._element.classList.remove(tJ),
        this._backdrop.hide();
      let t = () => {
        this._element.setAttribute("aria-hidden", !0),
          this._element.removeAttribute("aria-modal"),
          this._element.removeAttribute("role"),
          (this._element.style.visibility = "hidden"),
          this._config.scroll || new tR().reset(),
          P.trigger(this._element, ii);
      };
      this._queueCallback(t, this._element, !0);
    }
    dispose() {
      this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }
    _getConfig(e) {
      return (
        c(
          t3,
          (e = {
            ...t6,
            ...Z.getDataAttributes(this._element),
            ...("object" == typeof e ? e : {}),
          }),
          tG
        ),
        e
      );
    }
    _initializeBackDrop() {
      return new tF({
        className: "offcanvas-backdrop",
        isVisible: this._config.backdrop,
        isAnimated: !0,
        rootElement: this._element.parentNode,
        clickCallback: () => this.hide(),
      });
    }
    _initializeFocusTrap() {
      return new t1({ trapElement: this._element });
    }
    _addEventListeners() {
      P.on(this._element, ir, (e) => {
        this._config.keyboard && "Escape" === e.key && this.hide();
      });
    }
    static jQueryInterface(e) {
      return this.each(function () {
        let t = io.getOrCreateInstance(this, e);
        if ("string" == typeof e) {
          if (void 0 === t[e] || e.startsWith("_") || "constructor" === e)
            throw TypeError(`No method named "${e}"`);
          t[e](this);
        }
      });
    }
  }
  P.on(document, is, '[data-bs-toggle="offcanvas"]', function (e) {
    let t = s(this);
    if ((["A", "AREA"].includes(this.tagName) && e.preventDefault(), u(this)))
      return;
    P.one(t, ii, () => {
      f(this) && this.focus();
    });
    let i = G.findOne(t5);
    i && i !== t && io.getInstance(i).hide();
    let n = io.getOrCreateInstance(t);
    n.toggle(this);
  }),
    P.on(window, t4, () =>
      G.find(t5).forEach((e) => io.getOrCreateInstance(e).show())
    ),
    j(io),
    b(io);
  let ia = new Set([
      "background",
      "cite",
      "href",
      "itemtype",
      "longdesc",
      "poster",
      "src",
      "xlink:href",
    ]),
    il = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
    ic =
      /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
    iu = (e, t) => {
      let i = e.nodeName.toLowerCase();
      if (t.includes(i))
        return (
          !ia.has(i) || Boolean(il.test(e.nodeValue) || ic.test(e.nodeValue))
        );
      let n = t.filter((e) => e instanceof RegExp);
      for (let s = 0, r = n.length; s < r; s++) if (n[s].test(i)) return !0;
      return !1;
    };
  function ih(e, t, i) {
    if (!e.length) return e;
    if (i && "function" == typeof i) return i(e);
    let n = new window.DOMParser(),
      s = n.parseFromString(e, "text/html"),
      r = [].concat(...s.body.querySelectorAll("*"));
    for (let o = 0, a = r.length; o < a; o++) {
      let l = r[o],
        c = l.nodeName.toLowerCase();
      if (!Object.keys(t).includes(c)) {
        l.remove();
        continue;
      }
      let f = [].concat(...l.attributes),
        u = [].concat(t["*"] || [], t[c] || []);
      f.forEach((e) => {
        iu(e, u) || l.removeAttribute(e.nodeName);
      });
    }
    return s.body.innerHTML;
  }
  b(Tooltip);
  let id = ".bs.popover",
    ip = {
      ...Tooltip.Default,
      placement: "right",
      offset: [0, 8],
      trigger: "click",
      content: "",
      template:
        '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    },
    im = { ...Tooltip.DefaultType, content: "(string|element|function)" },
    ig = {
      HIDE: `hide${id}`,
      HIDDEN: `hidden${id}`,
      SHOW: `show${id}`,
      SHOWN: `shown${id}`,
      INSERTED: `inserted${id}`,
      CLICK: `click${id}`,
      FOCUSIN: `focusin${id}`,
      FOCUSOUT: `focusout${id}`,
      MOUSEENTER: `mouseenter${id}`,
      MOUSELEAVE: `mouseleave${id}`,
    };
  class i8 extends Tooltip {
    static get Default() {
      return ip;
    }
    static get NAME() {
      return "popover";
    }
    static get Event() {
      return ig;
    }
    static get DefaultType() {
      return im;
    }
    isWithContent() {
      return this.getTitle() || this._getContent();
    }
    setContent(e) {
      this._sanitizeAndSetContent(e, this.getTitle(), ".popover-header"),
        this._sanitizeAndSetContent(e, this._getContent(), ".popover-body");
    }
    _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    }
    _getBasicClassPrefix() {
      return "bs-popover";
    }
    static jQueryInterface(e) {
      return this.each(function () {
        let t = i8.getOrCreateInstance(this, e);
        if ("string" == typeof e) {
          if (void 0 === t[e]) throw TypeError(`No method named "${e}"`);
          t[e]();
        }
      });
    }
  }
  b(i8);
  let iv = "scrollspy",
    ib = ".bs.scrollspy",
    iy = { offset: 10, method: "auto", target: "" },
    i$ = { offset: "number", method: "string", target: "(string|element)" },
    iE = `activate${ib}`,
    iw = `scroll${ib}`,
    iA = `load${ib}.data-api`,
    ix = "dropdown-item",
    iO = "active",
    iL = ".nav-link",
    ik = ".list-group-item",
    iD = `${iL}, ${ik}, .${ix}`,
    i9 = "position";
  class iT extends B {
    constructor(e, t) {
      super(e),
        (this._scrollElement =
          "BODY" === this._element.tagName ? window : this._element),
        (this._config = this._getConfig(t)),
        (this._offsets = []),
        (this._targets = []),
        (this._activeTarget = null),
        (this._scrollHeight = 0),
        P.on(this._scrollElement, iw, () => this._process()),
        this.refresh(),
        this._process();
    }
    static get Default() {
      return iy;
    }
    static get NAME() {
      return iv;
    }
    refresh() {
      let e =
          this._scrollElement === this._scrollElement.window ? "offset" : i9,
        t = "auto" === this._config.method ? e : this._config.method,
        i = t === i9 ? this._getScrollTop() : 0;
      (this._offsets = []),
        (this._targets = []),
        (this._scrollHeight = this._getScrollHeight());
      let s = G.find(iD, this._config.target);
      s.map((e) => {
        let s = n(e),
          r = s ? G.findOne(s) : null;
        if (r) {
          let o = r.getBoundingClientRect();
          if (o.width || o.height) return [Z[t](r).top + i, s];
        }
        return null;
      })
        .filter((e) => e)
        .sort((e, t) => e[0] - t[0])
        .forEach((e) => {
          this._offsets.push(e[0]), this._targets.push(e[1]);
        });
    }
    dispose() {
      P.off(this._scrollElement, ib), super.dispose();
    }
    _getConfig(e) {
      return (
        ((e = {
          ...iy,
          ...Z.getDataAttributes(this._element),
          ...("object" == typeof e && e ? e : {}),
        }).target = l(e.target) || document.documentElement),
        c(iv, e, i$),
        e
      );
    }
    _getScrollTop() {
      return this._scrollElement === window
        ? this._scrollElement.pageYOffset
        : this._scrollElement.scrollTop;
    }
    _getScrollHeight() {
      return (
        this._scrollElement.scrollHeight ||
        Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight
        )
      );
    }
    _getOffsetHeight() {
      return this._scrollElement === window
        ? window.innerHeight
        : this._scrollElement.getBoundingClientRect().height;
    }
    _process() {
      let e = this._getScrollTop() + this._config.offset,
        t = this._getScrollHeight(),
        i = this._config.offset + t - this._getOffsetHeight();
      if ((this._scrollHeight !== t && this.refresh(), e >= i)) {
        let n = this._targets[this._targets.length - 1];
        this._activeTarget !== n && this._activate(n);
        return;
      }
      if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) {
        (this._activeTarget = null), this._clear();
        return;
      }
      for (let s = this._offsets.length; s--; ) {
        let r =
          this._activeTarget !== this._targets[s] &&
          e >= this._offsets[s] &&
          (void 0 === this._offsets[s + 1] || e < this._offsets[s + 1]);
        r && this._activate(this._targets[s]);
      }
    }
    _activate(e) {
      (this._activeTarget = e), this._clear();
      let t = iD
          .split(",")
          .map((t) => `${t}[data-bs-target="${e}"],${t}[href="${e}"]`),
        i = G.findOne(t.join(","), this._config.target);
      i.classList.add(iO),
        i.classList.contains(ix)
          ? G.findOne(".dropdown-toggle", i.closest(".dropdown")).classList.add(
              iO
            )
          : G.parents(i, ".nav, .list-group").forEach((e) => {
              G.prev(e, `${iL}, ${ik}`).forEach((e) => e.classList.add(iO)),
                G.prev(e, ".nav-item").forEach((e) => {
                  G.children(e, iL).forEach((e) => e.classList.add(iO));
                });
            }),
        P.trigger(this._scrollElement, iE, { relatedTarget: e });
    }
    _clear() {
      G.find(iD, this._config.target)
        .filter((e) => e.classList.contains(iO))
        .forEach((e) => e.classList.remove(iO));
    }
    static jQueryInterface(e) {
      return this.each(function () {
        let t = iT.getOrCreateInstance(this, e);
        if ("string" == typeof e) {
          if (void 0 === t[e]) throw TypeError(`No method named "${e}"`);
          t[e]();
        }
      });
    }
  }
  P.on(window, iA, () => {
    G.find('[data-bs-spy="scroll"]').forEach((e) => new iT(e));
  }),
    b(iT);
  let iC = ".bs.tab",
    iI = `hide${iC}`,
    i_ = `hidden${iC}`,
    iN = `show${iC}`,
    iS = `shown${iC}`,
    iM = `click${iC}.data-api`,
    iH = "active",
    iP = "fade",
    iW = "show",
    iR = ".active",
    iB = ":scope > li > .active";
  class ij extends B {
    static get NAME() {
      return "tab";
    }
    show() {
      if (
        this._element.parentNode &&
        this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
        this._element.classList.contains(iH)
      )
        return;
      let e,
        t = s(this._element),
        i = this._element.closest(".nav, .list-group");
      if (i) {
        let n = "UL" === i.nodeName || "OL" === i.nodeName ? iB : iR;
        e = (e = G.find(n, i))[e.length - 1];
      }
      let r = e ? P.trigger(e, iI, { relatedTarget: this._element }) : null,
        o = P.trigger(this._element, iN, { relatedTarget: e });
      if (o.defaultPrevented || (null !== r && r.defaultPrevented)) return;
      this._activate(this._element, i);
      let a = () => {
        P.trigger(e, i_, { relatedTarget: this._element }),
          P.trigger(this._element, iS, { relatedTarget: e });
      };
      t ? this._activate(t, t.parentNode, a) : a();
    }
    _activate(e, t, i) {
      let n =
          t && ("UL" === t.nodeName || "OL" === t.nodeName)
            ? G.find(iB, t)
            : G.children(t, iR),
        s = n[0],
        r = i && s && s.classList.contains(iP),
        o = () => this._transitionComplete(e, s, i);
      s && r ? (s.classList.remove(iW), this._queueCallback(o, e, !0)) : o();
    }
    _transitionComplete(e, t, i) {
      if (t) {
        t.classList.remove(iH);
        let n = G.findOne(":scope > .dropdown-menu .active", t.parentNode);
        n && n.classList.remove(iH),
          "tab" === t.getAttribute("role") &&
            t.setAttribute("aria-selected", !1);
      }
      e.classList.add(iH),
        "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0),
        d(e),
        e.classList.contains(iP) && e.classList.add(iW);
      let s = e.parentNode;
      if (
        (s && "LI" === s.nodeName && (s = s.parentNode),
        s && s.classList.contains("dropdown-menu"))
      ) {
        let r = e.closest(".dropdown");
        r && G.find(".dropdown-toggle", r).forEach((e) => e.classList.add(iH)),
          e.setAttribute("aria-expanded", !0);
      }
      i && i();
    }
    static jQueryInterface(e) {
      return this.each(function () {
        let t = ij.getOrCreateInstance(this);
        if ("string" == typeof e) {
          if (void 0 === t[e]) throw TypeError(`No method named "${e}"`);
          t[e]();
        }
      });
    }
  }
  P.on(
    document,
    iM,
    '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
    function (e) {
      if ((["A", "AREA"].includes(this.tagName) && e.preventDefault(), u(this)))
        return;
      let t = ij.getOrCreateInstance(this);
      t.show();
    }
  ),
    b(ij);
  let iq = "toast",
    iV = ".bs.toast",
    iX = `mouseover${iV}`,
    iF = `mouseout${iV}`,
    iK = `focusin${iV}`,
    iz = `focusout${iV}`,
    i0 = `hide${iV}`,
    iY = `hidden${iV}`,
    iU = `show${iV}`,
    iQ = `shown${iV}`,
    i1 = "hide",
    i3 = "show",
    i2 = "showing",
    iZ = { animation: "boolean", autohide: "boolean", delay: "number" },
    i4 = { animation: !0, autohide: !0, delay: 5e3 };
  class i6 extends B {
    constructor(e, t) {
      super(e),
        (this._config = this._getConfig(t)),
        (this._timeout = null),
        (this._hasMouseInteraction = !1),
        (this._hasKeyboardInteraction = !1),
        this._setListeners();
    }
    static get DefaultType() {
      return iZ;
    }
    static get Default() {
      return i4;
    }
    static get NAME() {
      return iq;
    }
    show() {
      let e = P.trigger(this._element, iU);
      if (e.defaultPrevented) return;
      this._clearTimeout(),
        this._config.animation && this._element.classList.add("fade");
      let t = () => {
        this._element.classList.remove(i2),
          P.trigger(this._element, iQ),
          this._maybeScheduleHide();
      };
      this._element.classList.remove(i1),
        d(this._element),
        this._element.classList.add(i3),
        this._element.classList.add(i2),
        this._queueCallback(t, this._element, this._config.animation);
    }
    hide() {
      if (!this._element.classList.contains(i3)) return;
      let e = P.trigger(this._element, i0);
      if (e.defaultPrevented) return;
      let t = () => {
        this._element.classList.add(i1),
          this._element.classList.remove(i2),
          this._element.classList.remove(i3),
          P.trigger(this._element, iY);
      };
      this._element.classList.add(i2),
        this._queueCallback(t, this._element, this._config.animation);
    }
    dispose() {
      this._clearTimeout(),
        this._element.classList.contains(i3) &&
          this._element.classList.remove(i3),
        super.dispose();
    }
    _getConfig(e) {
      return (
        c(
          iq,
          (e = {
            ...i4,
            ...Z.getDataAttributes(this._element),
            ...("object" == typeof e && e ? e : {}),
          }),
          this.constructor.DefaultType
        ),
        e
      );
    }
    _maybeScheduleHide() {
      this._config.autohide &&
        !this._hasMouseInteraction &&
        !this._hasKeyboardInteraction &&
        (this._timeout = setTimeout(() => {
          this.hide();
        }, this._config.delay));
    }
    _onInteraction(e, t) {
      switch (e.type) {
        case "mouseover":
        case "mouseout":
          this._hasMouseInteraction = t;
          break;
        case "focusin":
        case "focusout":
          this._hasKeyboardInteraction = t;
      }
      if (t) {
        this._clearTimeout();
        return;
      }
      let i = e.relatedTarget;
      !(this._element === i || this._element.contains(i)) &&
        this._maybeScheduleHide();
    }
    _setListeners() {
      P.on(this._element, iX, (e) => this._onInteraction(e, !0)),
        P.on(this._element, iF, (e) => this._onInteraction(e, !1)),
        P.on(this._element, iK, (e) => this._onInteraction(e, !0)),
        P.on(this._element, iz, (e) => this._onInteraction(e, !1));
    }
    _clearTimeout() {
      clearTimeout(this._timeout), (this._timeout = null);
    }
    static jQueryInterface(e) {
      return this.each(function () {
        let t = i6.getOrCreateInstance(this, e);
        if ("string" == typeof e) {
          if (void 0 === t[e]) throw TypeError(`No method named "${e}"`);
          t[e](this);
        }
      });
    }
  }
  return (
    j(i6),
    b(i6),
    {
      Alert: F,
      Button: Y,
      Carousel: eA,
      Offcanvas: io,
      Popover: i8,
      ScrollSpy: iT,
      Tab: ij,
      Toast: i6,
    }
  );
});
