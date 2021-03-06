var _i_ = this._i_ || function () {},
    _r_ = this._r_ || function (t) {
        return t
    };
window.BookingAff = window.BookingAff || function () {
    "use strict";
    _i_("dbf:573db78d");
    var r = {
        resize: function (t) {
            _i_("dbf:64bbb152");
            var e = o(t.data.aid, t.data.fid);
            e && (e.setAttribute("height", t.data.height), e.style.height = t.data.height + "px", "0" != e.getAttribute("width") || t.data.width || (e.setAttribute("width", "auto"), e.style.width = "auto"), t.data.width && (e.setAttribute("width", t.data.width), e.style.width = t.data.width + "px")), _r_()
        },
        prodLoaded: function (t) {
            _i_("dbf:96ebc1fe");
            var e = o(t.data.aid, t.data.fid);
            if (!e) return _r_();
            if (d(e)) return l(e), _r_();
            var n = function (e, n) {
                _i_("dbf:c1b33d38");
                var t, i = !1;
                return _r_(function () {
                    _i_("dbf:b6ca19d4"), clearTimeout(t), t = setTimeout(r, 200), _r_()
                });

                function r() {
                    _i_("dbf:1b331125");
                    var t = d(e);
                    t != i && (i = t, "function" == typeof n && n()), _r_()
                }
            }(e, function () {
                _i_("dbf:db351dc9"), i("DOMContentLoaded", n), i("load", n), i("scroll", n), i("resize", n), l(e), _r_()
            });
            _("DOMContentLoaded", n), _("load", n), _("scroll", n), _("resize", n), _r_()
        }
    };

    function a(t) {
        return _i_("dbf:d8dbe7bf"), _r_(!isNaN(parseInt(t, 10)))
    }

    function _(t, e) {
        _i_("dbf:b9fedf57"), window.addEventListener ? window.addEventListener(t, e, !1) : window.attachEvent && window.attachEvent("on" + t, e), _r_()
    }

    function i(t, e) {
        _i_("dbf:402c8bdb"), window.removeEventListener ? window.removeEventListener(t, e, !1) : window.detachEvent && window.detachEvent("on" + t, e), _r_()
    }

    function o(t, e) {
        return _i_("dbf:3454b4b7"), _r_(document.getElementById("booking_widget__" + t + "__" + e))
    }

    function c(t, e, n) {
        if (_i_("dbf:d8f77315"), void 0 === n) return _r_(t.getAttribute(e));
        t.setAttribute(e, n), _r_()
    }

    function f(t) {
        _i_("dbf:6986ed16");
        var e = "//" + ("string" == typeof t.tdomain && -1 !== t.tdomain.search("booking.com") ? t.tdomain : "www.booking.com") + "/flexiproduct.html?",
            n = +new Date,
            i = "<iframe ",
            r = "100%" === t.width,
            o = "order:none;padding:0;margin:0;overflow:hidden;width:" + (r ? t.width : t.width + "px") + ";height:" + (r ? t.height : t.height + "px"),
            d = t.target_aid;
        return e += function (t) {
            _i_("dbf:5c249749");
            var e, n = "";
            for (e in t) void 0 !== t[e] && (n += e + "=" + encodeURIComponent(t[e]) + "&");
            return _r_(n)
        }({
            product: t.prod.toLowerCase(),
            w: t.width,
            h: t.height,
            cc1: t.cc1,
            lang: "ualng" === t.lang ? navigator.language || navigator.browserLanguage || "" : t.lang,
            aid: t.aid,
            label: t.label_load,
            label_click: t.label_out,
            target_aid: d,
            selected_currency: t.currency,
            ss: t.ss,
            ss_id: t.dest_id,
            ss_type: t.dest_type,
            df_checkin: t.df_checkin,
            df_duration: t.df_duration,
            checkin: t.checkin,
            checkout: t.checkout,
            banner_id: t.banner_id,
            tmpl: t.tmpl,
            aff_hostname: t.aff_hostname,
            hid: t.hid,
            show_rw_badge: t.show_rw_badge,
            show_rw_logo: t.show_rw_logo,
            show_rw_text: t.show_rw_text,
            show_rw_border: t.show_rw_border,
            right_align_rw: t.right_align_rw,
            df_num_properties: t.df_num_properties,
            fid: n,
            latitude: t.latitude,
            longitude: t.longitude,
            landmark_name: t.landmark_name,
            mwhsb: t.mwhsb,
            iata: t.iata,
            postal_code: t.postal_code,
            zoom: t.zoom,
            address: t.address
        }), t.xp_params && (e += "&" + t.xp_params), i += function (t) {
            _i_("dbf:0456289c");
            var e, n = "";
            for (e in t) void 0 !== t[e] && (n += e + '="' + t[e] + '" ');
            return _r_(n)
        }({
            src: e,
            width: t.width,
            height: t.height,
            scrolling: "no",
            style: o,
            marginheight: "0",
            marginwidth: "0",
            frameborder: "0",
            allowtransparency: "true",
            id: "booking_widget__" + t.aid + "__" + n,
            "data-responsive": r
        }), i += ">", _r_(i += "</iframe>")
    }

    function s(t) {
        _i_("dbf:6897d107");
        var e, n, i = ["width", "height", "prod", "aid", "lang", "currency", "df_num_properties", "checkin", "checkout", "ss", "dest_id", "dest_type", "tdomain", "target_aid", "banner_id", "cc1", "label_load", "label_out", "df_checkin", "df_duration", "aff_hostname", "hid", "show_rw_badge", "show_rw_logo", "show_rw_text", "show_rw_border", "right_align_rw", "latitude", "longitude", "landmark_name", "mwhsb", "iata", "postal_code", "zoom", "address", "xp_params"],
            r = {};
        for (e = i.length - 1; 0 <= e; e--) {
            var o = i[e];
            "string" == typeof (n = c(t, "data-" + o)) && n.length && ("width" !== o && "height" !== o || Number(n) != n || n % 1 == 0 || (n = Math.round(n) + ""), r[o] = n.trim())
        }
        return r.prod && "banner" == r.prod.toLowerCase() && (r.tmpl = "affiliate_banner"), _r_(r)
    }

    function h(t) {
        _i_("dbf:469e3405");
        var e, n = t.width,
            i = t.height,
            r = t.prod,
            o = ["banner", "sb", "nsb", "dfl", "dfl2", "sbp", "rw", "map"],
            d = !1;
        if (n && i && r) {
            if (!a(n) && "100%" !== n || !a(i) && "auto" !== i) throw Error("BookingAff: width, height should be integer");
            for (r = r.toLowerCase(), e = o.length - 1; 0 <= e; e--)
                if (o[e] == r) {
                    d = !0;
                    break
                } if (!d) throw Error("BookingAff: Invalid product type: " + r)
        }
        _r_()
    }

    function u(t) {
        _i_("dbf:5c164f80");
        var e, n, i = new RegExp("\\.(booking|bstatic)\\.com$");
        if (!t.origin.match(i)) return _r_();
        if ("string" == typeof t.data) try {
            e = JSON.parse(t.data)
        } catch (t) {} else "object" == typeof t.data && (e = t.data);
        e && e.message && e.data && (n = r[e.message], _i_("dbf:5744a7d9"), _r_("function" == typeof n)) && r[e.message](e), _r_()
    }

    function d(t) {
        if (_i_("dbf:1ac50212"), !t.getBoundingClientRect) return _r_(!0);
        var e = t.getBoundingClientRect(),
            n = window.innerHeight || document.documentElement.clientHeight,
            i = window.innerWidth || document.documentElement.clientWidth;
        return _r_(e.top < n && 0 < e.right && e.left < i && !(0 === e.top && 0 === e.right && 0 === e.bottom && 0 === e.left))
    }

    function l(t) {
        _i_("dbf:0db566c7"), t.contentWindow.postMessage("Widget:InViewport", "*"), _r_()
    }
    return document.getElementsByClassName || (document.getElementsByClassName = function (t) {
        _i_("dbf:e9d20791");
        var e, n, i, r = document,
            o = [];
        if (r.querySelectorAll) return _r_(r.querySelectorAll("." + t));
        if (r.evaluate)
            for (n = ".//*[contains(concat(' ', @class, ' '), ' " + t + " ')]", e = r.evaluate(n, r, null, 0, null); i = e.iterateNext();) o.push(i);
        else
            for (e = r.getElementsByTagName("*"), n = new RegExp("(^|\\s)" + t + "(\\s|$)"), i = 0; i < e.length; i++) n.test(e[i].className) && o.push(e[i]);
        return _r_(o)
    }), String.prototype.trim || (String.prototype.trim = function () {
        return _i_("dbf:cecbac7e"), _r_(this.replace(/^\s+|\s+$/g, ""))
    }), _r_({
        run: function t() {
            if (_i_("dbf:63203669"), t.already_ran) return _r_();
            t.already_ran = !0;
            for (var e, n, i, r = document.getElementsByClassName("bookingaff"), o = "data-bk-touched", d = r.length, a = 0; a < d; a++)
                if (!c(e = r[a], o)) {
                    n = s(e);
                    try {
                        h(n), e.innerHTML = f(n)
                    } catch (t) {
                        i = t.message, _i_("dbf:9ed1d711"), window.console && "function" == typeof window.console.error && console.error(i), _r_()
                    }
                    c(e, o, "true")
                } _("message", u), _r_()
        },
        addEvent: _
    })
}(), "complete" === document.readyState || "loaded" === document.readyState || "interactive" === document.readyState ? window.BookingAff.run() : window.BookingAff.addEvent("DOMContentLoaded", window.BookingAff.run);