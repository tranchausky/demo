window.pbv = "top.desk";
/* prebid.js v4.43.4
Updated : 2021-10-05*/
!(function (u) {
    var s = window.pbjsChunk;
    window.pbjsChunk = function (e, t, n) {
        for (var r, i, o, a = 0, c = []; a < e.length; a++) (i = e[a]), d[i] && c.push(d[i][0]), (d[i] = 0);
        for (r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
        for (s && s(e, t, n); c.length; ) c.shift()();
        if (n) for (a = 0; a < n.length; a++) o = f((f.s = n[a]));
        return o;
    };
    var n = {},
        d = { 423: 0 };
    function f(e) {
        if (n[e]) return n[e].exports;
        var t = (n[e] = { i: e, l: !1, exports: {} });
        return u[e].call(t.exports, t, t.exports, f), (t.l = !0), t.exports;
    }
    (f.m = u),
        (f.c = n),
        (f.d = function (e, t, n) {
            f.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: n });
        }),
        (f.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return f.d(t, "a", t), t;
        }),
        (f.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (f.p = ""),
        (f.oe = function (e) {
            throw (console.error(e), e);
        }),
        f((f.s = 1025));
})({
    0: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
            n.d(t, "internal", function () {
                return R;
            }),
            (t.getPrebidInternal = function () {
                return D;
            }),
            n.d(t, "bind", function () {
                return P;
            }),
            (t.getUniqueIdentifierStr = q),
            (t.generateUUID = function e(t) {
                return t ? (t ^ (G() >> (t / 4))).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e);
            }),
            (t.getBidIdParameter = function (e, t) {
                if (t && t[e]) return t[e];
                return "";
            }),
            (t.tryAppendQueryString = function (e, t, n) {
                if (n) return e + t + "=" + encodeURIComponent(n) + "&";
                return e;
            }),
            (t.parseQueryStringParameters = function (e) {
                var t = "";
                for (var n in e) e.hasOwnProperty(n) && (t += n + "=" + encodeURIComponent(e[n]) + "&");
                return (t = t.replace(/&$/, ""));
            }),
            (t.transformAdServerTargetingObj = function (t) {
                return t && 0 < Object.getOwnPropertyNames(t).length
                    ? ge(t)
                          .map(function (e) {
                              return "".concat(e, "=").concat(encodeURIComponent(t[e]));
                          })
                          .join("&")
                    : "";
            }),
            (t.getAdUnitSizes = function (e) {
                if (!e) return;
                var t = [];
                {
                    var n;
                    e.mediaTypes && e.mediaTypes.banner && Array.isArray(e.mediaTypes.banner.sizes)
                        ? ((n = e.mediaTypes.banner.sizes), Array.isArray(n[0]) ? (t = n) : t.push(n))
                        : Array.isArray(e.sizes) && (Array.isArray(e.sizes[0]) ? (t = e.sizes) : t.push(e.sizes));
                }
                return t;
            }),
            (t.parseSizesInput = function (e) {
                var t = [];
                if ("string" == typeof e) {
                    var n = e.split(","),
                        r = /^(\d)+x(\d)+$/i;
                    if (n) for (var i in n) ae(n, i) && n[i].match(r) && t.push(n[i]);
                } else if ("object" === h(e)) {
                    var o = e.length;
                    if (0 < o)
                        if (2 === o && "number" == typeof e[0] && "number" == typeof e[1]) t.push(W(e));
                        else for (var a = 0; a < o; a++) t.push(W(e[a]));
                }
                return t;
            }),
            (t.parseGPTSingleSizeArray = W),
            (t.parseGPTSingleSizeArrayToRtbSize = function (e) {
                if (L(e)) return { w: e[0], h: e[1] };
            }),
            (t.getWindowTop = F),
            (t.getWindowSelf = z),
            (t.getWindowLocation = V),
            (t.logMessage = H),
            (t.logInfo = K),
            (t.logWarn = J),
            (t.logError = Y),
            (t.hasConsoleLogger = function () {
                return w;
            }),
            (t.debugTurnedOn = $),
            (t.createInvisibleIframe = function () {
                var e = document.createElement("iframe");
                return (
                    (e.id = q()),
                    (e.height = 0),
                    (e.width = 0),
                    (e.border = "0px"),
                    (e.hspace = "0"),
                    (e.vspace = "0"),
                    (e.marginWidth = "0"),
                    (e.marginHeight = "0"),
                    (e.style.border = "0"),
                    (e.scrolling = "no"),
                    (e.frameBorder = "0"),
                    (e.src = "about:blank"),
                    (e.style.display = "none"),
                    e
                );
            }),
            (t.getParameterByName = function (e) {
                return Ce(V().search)[e] || "";
            }),
            (t.isA = X),
            (t.isFn = Z),
            (t.isStr = ee),
            (t.isArray = te),
            (t.isNumber = ne),
            (t.isPlainObject = re),
            (t.isBoolean = function (e) {
                return X(e, I);
            }),
            (t.isEmpty = ie),
            (t.isEmptyStr = function (e) {
                return ee(e) && (!e || 0 === e.length);
            }),
            (t._each = oe),
            (t.contains = function (e, t) {
                if (ie(e)) return !1;
                if (Z(e.indexOf)) return -1 !== e.indexOf(t);
                var n = e.length;
                for (; n--; ) if (e[n] === t) return !0;
                return !1;
            }),
            (t._map = function (n, r) {
                if (ie(n)) return [];
                if (Z(n.map)) return n.map(r);
                var i = [];
                return (
                    oe(n, function (e, t) {
                        i.push(r(e, t, n));
                    }),
                    i
                );
            }),
            (t.hasOwn = ae),
            (t.insertElement = ce),
            (t.triggerPixel = ue),
            (t.callBurl = function (e) {
                var t = e.source,
                    n = e.burl;
                t === m.S2S.SRC && n && R.triggerPixel(n);
            }),
            (t.insertHtmlIntoIframe = function (e) {
                if (!e) return;
                var t = document.createElement("iframe");
                (t.id = q()),
                    (t.width = 0),
                    (t.height = 0),
                    (t.hspace = "0"),
                    (t.vspace = "0"),
                    (t.marginWidth = "0"),
                    (t.marginHeight = "0"),
                    (t.style.display = "none"),
                    (t.style.height = "0px"),
                    (t.style.width = "0px"),
                    (t.scrolling = "no"),
                    (t.frameBorder = "0"),
                    (t.allowtransparency = "true"),
                    R.insertElement(t, document, "body"),
                    t.contentWindow.document.open(),
                    t.contentWindow.document.write(e),
                    t.contentWindow.document.close();
            }),
            (t.insertUserSyncIframe = se),
            (t.createTrackPixelHtml = function (e) {
                if (!e) return "";
                var t = encodeURI(e),
                    n = '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';
                return (n += '<img src="' + t + '"></div>');
            }),
            (t.createTrackPixelIframeHtml = de),
            (t.getValueString = fe),
            (t.uniques = le),
            (t.flatten = pe),
            (t.getBidRequest = function (n, e) {
                return n
                    ? (e.some(function (e) {
                          var t = c()(e.bids, function (t) {
                              return ["bidId", "adId", "bid_id"].some(function (e) {
                                  return t[e] === n;
                              });
                          });
                          return t && (r = t), t;
                      }),
                      r)
                    : void 0;
                var r;
            }),
            (t.getKeys = ge),
            (t.getValue = be),
            (t.getKeyByValue = function (e, t) {
                for (var n in e) if (e.hasOwnProperty(n) && e[n] === t) return n;
            }),
            (t.getBidderCodes = function () {
                return (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : pbjs.adUnits)
                    .map(function (e) {
                        return e.bids
                            .map(function (e) {
                                return e.bidder;
                            })
                            .reduce(pe, []);
                    })
                    .reduce(pe)
                    .filter(le);
            }),
            (t.isGptPubadsDefined = ve),
            n.d(t, "getHighestCpm", function () {
                return ye;
            }),
            n.d(t, "getOldestHighestCpmBid", function () {
                return he;
            }),
            n.d(t, "getLatestHighestCpmBid", function () {
                return me;
            }),
            (t.shuffle = function (e) {
                var t = e.length;
                for (; 0 < t; ) {
                    var n = Math.floor(Math.random() * t),
                        r = e[--t];
                    (e[t] = e[n]), (e[n] = r);
                }
                return e;
            }),
            (t.adUnitsFilter = function (e, t) {
                return s()(e, t && t.adUnitCode);
            }),
            (t.deepClone = Ae),
            (t.inIframe = function () {
                try {
                    return R.getWindowSelf() !== R.getWindowTop();
                } catch (e) {
                    return !0;
                }
            }),
            (t.isSafariBrowser = function () {
                return /^((?!chrome|android|crios|fxios).)*safari/i.test(navigator.userAgent);
            }),
            (t.replaceAuctionPrice = function (e, t) {
                if (!e) return;
                return e.replace(/\$\{AUCTION_PRICE\}/g, t);
            }),
            (t.replaceClickThrough = function (e, t) {
                if (!e || !t || "string" != typeof t) return;
                return e.replace(/\${CLICKTHROUGH}/g, t);
            }),
            (t.timestamp = function () {
                return new Date().getTime();
            }),
            (t.getPerformanceNow = function () {
                return (window.performance && window.performance.now && window.performance.now()) || 0;
            }),
            (t.hasDeviceAccess = function () {
                return !1 !== i.b.getConfig("deviceAccess");
            }),
            (t.checkCookieSupport = Ee),
            (t.delayExecution = function (e, t) {
                if (t < 1) throw new Error("numRequiredCalls must be a positive number. Got ".concat(t));
                var n = 0;
                return function () {
                    ++n === t && e.apply(this, arguments);
                };
            }),
            (t.groupBy = function (e, n) {
                return e.reduce(function (e, t) {
                    return (e[t[n]] = e[t[n]] || []).push(t), e;
                }, {});
            }),
            (t.getDefinedParams = function (n, e) {
                return e
                    .filter(function (e) {
                        return n[e];
                    })
                    .reduce(function (e, t) {
                        return y(e, v({}, t, n[t]));
                    }, {});
            }),
            (t.isValidMediaTypes = function (e) {
                var t = ["banner", "native", "video"];
                if (
                    !Object.keys(e).every(function (e) {
                        return s()(t, e);
                    })
                )
                    return !1;
                if (e.video && e.video.context) return s()(["instream", "localhost", "adpod"], e.video.context);
                return !0;
            }),
            (t.getBidderRequest = function (e, t, n) {
                return (
                    c()(e, function (e) {
                        return (
                            0 <
                            e.bids.filter(function (e) {
                                return e.bidder === t && e.adUnitCode === n;
                            }).length
                        );
                    }) || { start: null, auctionId: null }
                );
            }),
            (t.getUserConfiguredParams = function (e, t, n) {
                return e
                    .filter(function (e) {
                        return e.code === t;
                    })
                    .map(function (e) {
                        return e.bids;
                    })
                    .reduce(pe, [])
                    .filter(function (e) {
                        return e.bidder === n;
                    })
                    .map(function (e) {
                        return e.params || {};
                    });
            }),
            (t.getOrigin = function () {
                return window.location.origin ? window.location.origin : window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "");
            }),
            (t.getDNT = function () {
                return "1" === navigator.doNotTrack || "1" === window.doNotTrack || "1" === navigator.msDoNotTrack || "yes" === navigator.doNotTrack;
            }),
            (t.isAdUnitCodeMatchingSlot = function (t) {
                return function (e) {
                    return Oe(t, e);
                };
            }),
            (t.isSlotMatchingAdUnitCode = Te),
            (t.getGptSlotInfoForAdUnitCode = function (e) {
                var t;
                ve() && (t = c()(window.googletag.pubads().getSlots(), Te(e)));
                if (t) return { gptSlot: t.getAdUnitPath(), divId: t.getSlotElementId() };
                return {};
            }),
            (t.unsupportedBidderMessage = function (e, t) {
                var n = Object.keys(e.mediaTypes || { banner: "banner" }).join(", ");
                return "\n    ".concat(e.code, " is a ").concat(n, " ad unit\n    containing bidders that don't support ").concat(n, ": ").concat(t, ".\n    This bidder won't fetch demand.\n  ");
            }),
            (t.isInteger = Ie),
            (t.convertCamelToUnderscore = function (e) {
                return e
                    .replace(/(?:^|\.?)([A-Z])/g, function (e, t) {
                        return "_" + t.toLowerCase();
                    })
                    .replace(/^_/, "");
            }),
            (t.cleanObj = function (n) {
                return Object.keys(n).reduce(function (e, t) {
                    return void 0 !== n[t] && (e[t] = n[t]), e;
                }, {});
            }),
            (t.pick = function (a, c) {
                return "object" === h(a)
                    ? c.reduce(function (e, t, n) {
                          if ("function" == typeof t) return e;
                          var r = t,
                              i = t.match(/^(.+?)\sas\s(.+?)$/i);
                          i && ((t = i[1]), (r = i[2]));
                          var o = a[t];
                          return "function" == typeof c[n + 1] && (o = c[n + 1](o, e)), void 0 !== o && (e[r] = o), e;
                      }, {})
                    : {};
            }),
            (t.transformBidderParamKeywords = function (e) {
                var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "keywords",
                    i = [];
                return (
                    oe(e, function (e, t) {
                        if (te(e)) {
                            var n = [];
                            oe(e, function (e) {
                                (!(e = fe(r + "." + t, e)) && "" !== e) || n.push(e);
                            }),
                                (e = n);
                        } else {
                            if (!ee((e = fe(r + "." + t, e)))) return;
                            e = [e];
                        }
                        i.push({ key: t, value: e });
                    }),
                    i
                );
            }),
            (t.convertTypes = function (r, i) {
                return (
                    Object.keys(r).forEach(function (e) {
                        var t, n;
                        i[e] && (Z(r[e]) ? (i[e] = r[e](i[e])) : (i[e] = ((t = r[e]), (n = i[e]), "string" === t ? n && n.toString() : "number" === t ? Number(n) : n)), isNaN(i[e]) && delete i.key);
                    }),
                    i
                );
            }),
            (t.isArrayOfNums = function (e, t) {
                return te(e) && (!t || e.length === t) && e.every(Ie);
            }),
            (t.fill = function (e, t) {
                for (var n = [], r = 0; r < t; r++) {
                    var i = re(e) ? Ae(e) : e;
                    n.push(i);
                }
                return n;
            }),
            (t.chunk = function (e, t) {
                for (var n = [], r = 0; r < Math.ceil(e.length / t); r++) {
                    var i = r * t,
                        o = i + t;
                    n.push(e.slice(i, o));
                }
                return n;
            }),
            (t.getMinValueFromArray = function (e) {
                return Math.min.apply(Math, p(e));
            }),
            (t.getMaxValueFromArray = function (e) {
                return Math.max.apply(Math, p(e));
            }),
            (t.compareOn = function (n) {
                return function (e, t) {
                    return e[n] < t[n] ? 1 : e[n] > t[n] ? -1 : 0;
                };
            }),
            (t.parseQS = Ce),
            (t.formatQS = je),
            (t.parseUrl = function (e, t) {
                var n = document.createElement("a");
                t && "noDecodeWholeURL" in t && t.noDecodeWholeURL ? (n.href = e) : (n.href = decodeURIComponent(e));
                var r = t && "decodeSearchAsString" in t && t.decodeSearchAsString;
                return {
                    href: n.href,
                    protocol: (n.protocol || "").replace(/:$/, ""),
                    hostname: n.hostname,
                    port: +n.port,
                    pathname: n.pathname.replace(/^(?!\/)/, "/"),
                    search: r ? n.search : R.parseQS(n.search || ""),
                    hash: (n.hash || "").replace(/^#/, ""),
                    host: n.host || window.location.host,
                };
            }),
            (t.buildUrl = function (e) {
                return (e.protocol || "http") + "://" + (e.host || e.hostname + (e.port ? ":".concat(e.port) : "")) + (e.pathname || "") + (e.search ? "?".concat(R.formatQS(e.search || "")) : "") + (e.hash ? "#".concat(e.hash) : "");
            }),
            (t.deepEqual = we),
            (t.mergeDeep = _e),
            (t.cyrb53Hash = function (e) {
                for (
                    var t,
                        n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
                        r = function (e, t) {
                            if (Z(Math.imul)) return Math.imul(e, t);
                            var n = (4194303 & e) * (t |= 0);
                            return 4290772992 & e && (n += ((4290772992 & e) * t) | 0), 0 | n;
                        },
                        i = 3735928559 ^ n,
                        o = 1103547991 ^ n,
                        a = 0;
                    a < e.length;
                    a++
                )
                    (t = e.charCodeAt(a)), (i = r(i ^ t, 2654435761)), (o = r(o ^ t, 1597334677));
                return (i = r(i ^ (i >>> 16), 2246822507) ^ r(o ^ (o >>> 13), 3266489909)), (4294967296 * (2097151 & (o = r(o ^ (o >>> 16), 2246822507) ^ r(i ^ (i >>> 13), 3266489909))) + (i >>> 0)).toString();
            });
        var i = n(3),
            r = n(162),
            o = n.n(r),
            a = n(10),
            c = n.n(a),
            u = n(13),
            s = n.n(u),
            d = n(163);
        n.d(t, "deepAccess", function () {
            return d.a;
        });
        var f = n(164);
        function l(e, t) {
            return (
                (function (e) {
                    if (Array.isArray(e)) return e;
                })(e) ||
                (function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        (i = !0), (o = e);
                    } finally {
                        try {
                            r || null == c.return || c.return();
                        } finally {
                            if (i) throw o;
                        }
                    }
                    return n;
                })(e, t) ||
                g(e, t) ||
                (function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                })()
            );
        }
        function p(e) {
            return (
                (function (e) {
                    if (Array.isArray(e)) return b(e);
                })(e) ||
                (function (e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
                })(e) ||
                g(e) ||
                (function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                })()
            );
        }
        function g(e, t) {
            if (e) {
                if ("string" == typeof e) return b(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? b(e, t) : void 0;
            }
        }
        function b(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        function v(e, t, n) {
            return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
        }
        function y() {
            return (y =
                Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                    }
                    return e;
                }).apply(this, arguments);
        }
        function h(e) {
            return (h =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        n.d(t, "deepSetValue", function () {
            return f.a;
        });
        var m = n(5),
            S = "Array",
            A = "String",
            E = "Function",
            O = "Number",
            T = "Object",
            I = "Boolean",
            C = Object.prototype.toString,
            j = Boolean(window.console),
            w = Boolean(j && window.console.log),
            _ = Boolean(j && window.console.info),
            B = Boolean(j && window.console.warn),
            U = Boolean(j && window.console.error),
            x = n(9),
            R = {
                checkCookieSupport: Ee,
                createTrackPixelIframeHtml: de,
                getWindowSelf: z,
                getWindowTop: F,
                getWindowLocation: V,
                insertUserSyncIframe: se,
                insertElement: ce,
                isFn: Z,
                triggerPixel: ue,
                logError: Y,
                logWarn: J,
                logMessage: H,
                logInfo: K,
                parseQS: Ce,
                formatQS: je,
                deepEqual: we,
            },
            D = {};
        var k,
            N = {},
            P =
                function (e, t) {
                    return t;
                }.bind(null, 1, N)() === N
                    ? Function.prototype.bind
                    : function (e) {
                          var t = this,
                              n = Array.prototype.slice.call(arguments, 1);
                          return function () {
                              return t.apply(e, n.concat(Array.prototype.slice.call(arguments)));
                          };
                      },
            M =
                ((k = 0),
                function () {
                    return ++k;
                });
        function q() {
            return M() + Math.random().toString(16).substr(2);
        }
        function G() {
            return window && window.crypto && window.crypto.getRandomValues ? crypto.getRandomValues(new Uint8Array(1))[0] % 16 : 16 * Math.random();
        }
        function W(e) {
            if (L(e)) return e[0] + "x" + e[1];
        }
        function L(e) {
            return te(e) && 2 === e.length && !isNaN(e[0]) && !isNaN(e[1]);
        }
        function F() {
            return window.top;
        }
        function z() {
            return window.self;
        }
        function V() {
            return window.location;
        }
        function H() {
            $() && w && console.log.apply(console, Q(arguments, "MESSAGE:"));
        }
        function K() {
            $() && _ && console.info.apply(console, Q(arguments, "INFO:"));
        }
        function J() {
            $() && B && console.warn.apply(console, Q(arguments, "WARNING:")), x.emit(m.EVENTS.AUCTION_DEBUG, { type: "WARNING", arguments: arguments });
        }
        function Y() {
            $() && U && console.error.apply(console, Q(arguments, "ERROR:")), x.emit(m.EVENTS.AUCTION_DEBUG, { type: "ERROR", arguments: arguments });
        }
        function Q(e, t) {
            e = [].slice.call(e);
            var n = i.b.getCurrentBidder();
            return t && e.unshift(t), n && e.unshift(r("#aaa")), e.unshift(r("#3b88c3")), e.unshift("%cPrebid" + (n ? "%c".concat(n) : "")), e;
            function r(e) {
                return "display: inline-block; color: #fff; background: ".concat(e, "; padding: 1px 4px; border-radius: 3px;");
            }
        }
        function $() {
            return !!i.b.getConfig("debug");
        }
        function X(e, t) {
            return C.call(e) === "[object " + t + "]";
        }
        function Z(e) {
            return X(e, E);
        }
        function ee(e) {
            return X(e, A);
        }
        function te(e) {
            return X(e, S);
        }
        function ne(e) {
            return X(e, O);
        }
        function re(e) {
            return X(e, T);
        }
        function ie(e) {
            if (!e) return !0;
            if (te(e) || ee(e)) return !(0 < e.length);
            for (var t in e) if (hasOwnProperty.call(e, t)) return !1;
            return !0;
        }
        function oe(e, t) {
            if (!ie(e)) {
                if (Z(e.forEach)) return e.forEach(t, this);
                var n = 0,
                    r = e.length;
                if (0 < r) for (; n < r; n++) t(e[n], n, e);
                else for (n in e) hasOwnProperty.call(e, n) && t.call(this, e[n], n);
            }
        }
        function ae(e, t) {
            return e.hasOwnProperty ? e.hasOwnProperty(t) : void 0 !== e[t] && e.constructor.prototype[t] !== e[t];
        }
        function ce(e, t, n, r) {
            var i;
            (t = t || document), (i = n ? t.getElementsByTagName(n) : t.getElementsByTagName("head"));
            try {
                if ((i = i.length ? i : t.getElementsByTagName("body")).length) {
                    i = i[0];
                    var o = r ? null : i.firstChild;
                    return i.insertBefore(e, o);
                }
            } catch (e) {}
        }
        function ue(e, t) {
            var n = new Image();
            t && R.isFn(t) && (n.addEventListener("load", t), n.addEventListener("error", t)), (n.src = e);
        }
        function se(e, t) {
            var n = R.createTrackPixelIframeHtml(e, !1, "allow-scripts allow-same-origin"),
                r = document.createElement("div");
            r.innerHTML = n;
            var i = r.firstChild;
            t && R.isFn(t) && (i.addEventListener("load", t), i.addEventListener("error", t)), R.insertElement(i, document, "html", !0);
        }
        function de(e) {
            var t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "";
            return e
                ? ((!(1 < arguments.length && void 0 !== arguments[1]) || arguments[1]) && (e = encodeURI(e)),
                  (t = t && 'sandbox="'.concat(t, '"')),
                  "<iframe "
                      .concat(t, ' id="')
                      .concat(
                          q(),
                          '"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="'
                      )
                      .concat(e, '">\n    </iframe>'))
                : "";
        }
        function fe(e, t, n) {
            return null == t ? n : ee(t) ? t : ne(t) ? t.toString() : void R.logWarn("Unsuported type for param: " + e + " required type: String");
        }
        function le(e, t, n) {
            return n.indexOf(e) === t;
        }
        function pe(e, t) {
            return e.concat(t);
        }
        function ge(e) {
            return Object.keys(e);
        }
        function be(e, t) {
            return e[t];
        }
        function ve() {
            if (window.googletag && Z(window.googletag.pubads) && Z(window.googletag.pubads().getSlots)) return !0;
        }
        var ye = Se("timeToRespond", function (e, t) {
                return t < e;
            }),
            he = Se("responseTimestamp", function (e, t) {
                return t < e;
            }),
            me = Se("responseTimestamp", function (e, t) {
                return e < t;
            });
        function Se(n, r) {
            return function (e, t) {
                return e.cpm === t.cpm ? (r(e[n], t[n]) ? t : e) : e.cpm < t.cpm ? t : e;
            };
        }
        function Ae(e) {
            return o()(e);
        }
        function Ee() {
            if (window.navigator.cookieEnabled || document.cookie.length) return !0;
        }
        var Oe = function (e, t) {
            return e.getAdUnitPath() === t || e.getSlotElementId() === t;
        };
        function Te(t) {
            return function (e) {
                return Oe(e, t);
            };
        }
        function Ie(e) {
            return Number.isInteger ? Number.isInteger(e) : "number" == typeof e && isFinite(e) && Math.floor(e) === e;
        }
        function Ce(e) {
            return e
                ? e
                      .replace(/^\?/, "")
                      .split("&")
                      .reduce(function (e, t) {
                          var n = l(t.split("="), 2),
                              r = n[0],
                              i = n[1];
                          return /\[\]$/.test(r) ? ((e[(r = r.replace("[]", ""))] = e[r] || []), e[r].push(i)) : (e[r] = i || ""), e;
                      }, {})
                : {};
        }
        function je(e) {
            return Object.keys(e)
                .map(function (t) {
                    return Array.isArray(e[t])
                        ? e[t]
                              .map(function (e) {
                                  return "".concat(t, "[]=").concat(e);
                              })
                              .join("&")
                        : "".concat(t, "=").concat(e[t]);
                })
                .join("&");
        }
        function we(e, t) {
            if (e === t) return !0;
            if ("object" !== h(e) || null === e || "object" !== h(t) || null === t) return !1;
            if (Object.keys(e).length !== Object.keys(t).length) return !1;
            for (var n in e) {
                if (!t.hasOwnProperty(n)) return !1;
                if (!we(e[n], t[n])) return !1;
            }
            return !0;
        }
        function _e(e) {
            for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            if (!n.length) return e;
            var i = n.shift();
            if (re(e) && re(i)) for (var o in i) re(i[o]) ? (e[o] || y(e, v({}, o, {})), _e(e[o], i[o])) : te(i[o]) && e[o] ? te(e[o]) && (e[o] = e[o].concat(i[o])) : y(e, v({}, o, i[o]));
            return _e.apply(void 0, [e].concat(n));
        }
    },
    1: function (e, t, n) {
    },
    10: function (e, t, n) {
        var r = n(100);
        e.exports = r;
    },
    100: function (e, t, n) {
        n(101);
        var r = n(52);
        e.exports = r("Array", "find");
    },
    101: function (e, t, n) {
        "use strict";
        var r = n(14),
            i = n(56).find,
            o = n(51),
            a = n(60),
            c = "find",
            u = !0,
            s = a(c);
        c in [] &&
            Array(1)[c](function () {
                u = !1;
            }),
            r(
                { target: "Array", proto: !0, forced: u || !s },
                {
                    find: function (e, t) {
                        return i(this, e, 1 < arguments.length ? t : void 0);
                    },
                }
            ),
            o(c);
    },
    102: function (e, t, n) {
        var r = n(29),
            i = n(103),
            o = n(45),
            a = n(46),
            c = n(55),
            u = n(27),
            s = n(76),
            d = Object.getOwnPropertyDescriptor;
        t.f = r
            ? d
            : function (e, t) {
                  if (((e = a(e)), (t = c(t, !0)), s))
                      try {
                          return d(e, t);
                      } catch (e) {}
                  if (u(e, t)) return o(!i.f.call(e, t), e[t]);
              };
    },
    1025: function (e, t, n) {
        e.exports = n(72);
    },
    103: function (e, t, n) {
        "use strict";
        var r = {}.propertyIsEnumerable,
            i = Object.getOwnPropertyDescriptor,
            o = i && !r.call({ 1: 2 }, 1);
        t.f = o
            ? function (e) {
                  var t = i(this, e);
                  return !!t && t.enumerable;
              }
            : r;
    },
    104: function (e, t, n) {
        function r(e, t) {
            var n = c[a(e)];
            return n == s || (n != u && ("function" == typeof t ? i(t) : !!t));
        }
        var i = n(30),
            o = /#|\.prototype\./,
            a = (r.normalize = function (e) {
                return String(e).replace(o, ".").toLowerCase();
            }),
            c = (r.data = {}),
            u = (r.NATIVE = "N"),
            s = (r.POLYFILL = "P");
        e.exports = r;
    },
    105: function (e, t, n) {
        var r = n(31),
            i = n(106),
            o = n(22)("species");
        e.exports = function (e, t) {
            var n;
            return i(e) && (("function" == typeof (n = e.constructor) && (n === Array || i(n.prototype))) || (r(n) && null === (n = n[o]))) && (n = void 0), new (void 0 === n ? Array : n)(0 === t ? 0 : t);
        };
    },
    106: function (e, t, n) {
        var r = n(47);
        e.exports =
            Array.isArray ||
            function (e) {
                return "Array" == r(e);
            };
    },
    107: function (e, t, n) {
        var r = n(26),
            i = n(32);
        e.exports = function (t, n) {
            try {
                i(r, t, n);
            } catch (e) {
                r[t] = n;
            }
            return n;
        };
    },
    108: function (e, t, n) {
        var r = n(80);
        e.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator;
    },
    109: function (e, t, n) {
        n(110);
        var r = n(52);
        e.exports = r("Array", "includes");
    },
    11: function (e, t, n) {
        "use strict";
        n.d(t, "b", function () {
            return a;
        }),
            n.d(t, "a", function () {
                return c;
            }),
            (t.d = function (e, t) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 15;
                0 === e.getHooks({ hook: t }).length && e.before(t, n);
            }),
            (t.c = function (e, n) {
                a(
                    "async",
                    function (e) {
                        e.forEach(function (e) {
                            return n.apply(
                                void 0,
                                (function (e) {
                                    if (Array.isArray(e)) return o(e);
                                })((t = e)) ||
                                    (function (e) {
                                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
                                    })(t) ||
                                    (function (e, t) {
                                        if (e) {
                                            if ("string" == typeof e) return o(e, t);
                                            var n = Object.prototype.toString.call(e).slice(8, -1);
                                            return (
                                                "Object" === n && e.constructor && (n = e.constructor.name),
                                                "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0
                                            );
                                        }
                                    })(t) ||
                                    (function () {
                                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                    })()
                            );
                            var t;
                        });
                    },
                    e
                )([]);
            }),
            (t.e = function (e) {
                for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                c(e).before(function (e, t) {
                    t.push(n), e(t);
                });
            });
        var r = n(165),
            i = n.n(r);
        function o(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        var a = i()({ ready: i.a.SYNC | i.a.ASYNC | i.a.QUEUE }),
            c = a.get;
    },
    110: function (e, t, n) {
        "use strict";
        var r = n(14),
            i = n(81).includes,
            o = n(51);
        r(
            { target: "Array", proto: !0, forced: !n(60)("indexOf", { ACCESSORS: !0, 1: 0 }) },
            {
                includes: function (e, t) {
                    return i(this, e, 1 < arguments.length ? t : void 0);
                },
            }
        ),
            o("includes");
    },
    111: function (e, t, n) {
        var r = n(58),
            i = Math.max,
            o = Math.min;
        e.exports = function (e, t) {
            var n = r(e);
            return n < 0 ? i(n + t, 0) : o(n, t);
        };
    },
    112: function (e, t, n) {
        n(113), n(130), n(92), n(132);
        var r = n(49);
        e.exports = r.Set;
    },
    113: function (e, t, n) {
        "use strict";
        var r = n(114),
            i = n(119);
        e.exports = r(
            "Set",
            function (t) {
                return function (e) {
                    return t(this, arguments.length ? e : void 0);
                };
            },
            i
        );
    },
    114: function (e, t, n) {
        "use strict";
        var f = n(14),
            l = n(26),
            p = n(83),
            g = n(30),
            b = n(32),
            v = n(18),
            y = n(86),
            h = n(31),
            m = n(64),
            S = n(34).f,
            A = n(56).forEach,
            E = n(29),
            r = n(54),
            O = r.set,
            T = r.getterFor;
        e.exports = function (n, e, t) {
            var r,
                a,
                i = -1 !== n.indexOf("Map"),
                c = -1 !== n.indexOf("Weak"),
                o = i ? "set" : "add",
                u = l[n],
                s = u && u.prototype,
                d = {};
            return (
                E &&
                "function" == typeof u &&
                (c ||
                    (s.forEach &&
                        !g(function () {
                            new u().entries().next();
                        })))
                    ? ((r = e(function (e, t) {
                          O(y(e, r, n), { type: n, collection: new u() }), null != t && v(t, e[o], e, i);
                      })),
                      (a = T(n)),
                      A(["add", "clear", "delete", "forEach", "get", "has", "set", "keys", "values", "entries"], function (i) {
                          var o = "add" == i || "set" == i;
                          i in s &&
                              (!c || "clear" != i) &&
                              b(r.prototype, i, function (e, t) {
                                  var n = a(this).collection;
                                  if (!o && c && !h(e)) return "get" == i && void 0;
                                  var r = n[i](0 === e ? 0 : e, t);
                                  return o ? this : r;
                              });
                      }),
                      c ||
                          S(r.prototype, "size", {
                              configurable: !0,
                              get: function () {
                                  return a(this).collection.size;
                              },
                          }))
                    : ((r = t.getConstructor(e, n, i, o)), (p.REQUIRED = !0)),
                m(r, n, !1, !0),
                (d[n] = r),
                f({ global: !0, forced: !0 }, d),
                c || t.setStrong(r, n, i),
                r
            );
        };
    },
    115: function (e, t, n) {
        var r = n(30);
        e.exports = !r(function () {
            return Object.isExtensible(Object.preventExtensions({}));
        });
    },
    116: function (e, t, n) {
        "use strict";
        var r = n(63),
            i = n(62);
        e.exports = r
            ? {}.toString
            : function () {
                  return "[object " + i(this) + "]";
              };
    },
    117: function (e, t, n) {
        var r = n(26),
            i = n(118),
            o = r.WeakMap;
        e.exports = "function" == typeof o && /native code/.test(i(o));
    },
    118: function (e, t, n) {
        var r = n(79),
            i = Function.toString;
        "function" != typeof r.inspectSource &&
            (r.inspectSource = function (e) {
                return i.call(e);
            }),
            (e.exports = r.inspectSource);
    },
    119: function (e, t, n) {
        "use strict";
        var s = n(34).f,
            d = n(87),
            f = n(124),
            l = n(25),
            p = n(86),
            g = n(18),
            a = n(66),
            c = n(129),
            b = n(29),
            v = n(83).fastKey,
            r = n(54),
            y = r.set,
            h = r.getterFor;
        e.exports = {
            getConstructor: function (e, n, r, i) {
                function o(e, t, n) {
                    var r,
                        i,
                        o = c(e),
                        a = u(e, t);
                    return (
                        a
                            ? (a.value = n)
                            : ((o.last = a = { index: (i = v(t, !0)), key: t, value: n, previous: (r = o.last), next: void 0, removed: !1 }),
                              o.first || (o.first = a),
                              r && (r.next = a),
                              b ? o.size++ : e.size++,
                              "F" !== i && (o.index[i] = a)),
                        e
                    );
                }
                var a = e(function (e, t) {
                        p(e, a, n), y(e, { type: n, index: d(null), first: void 0, last: void 0, size: 0 }), b || (e.size = 0), null != t && g(t, e[i], e, r);
                    }),
                    c = h(n),
                    u = function (e, t) {
                        var n,
                            r = c(e),
                            i = v(t);
                        if ("F" !== i) return r.index[i];
                        for (n = r.first; n; n = n.next) if (n.key == t) return n;
                    };
                return (
                    f(a.prototype, {
                        clear: function () {
                            for (var e = c(this), t = e.index, n = e.first; n; ) (n.removed = !0), n.previous && (n.previous = n.previous.next = void 0), delete t[n.index], (n = n.next);
                            (e.first = e.last = void 0), b ? (e.size = 0) : (this.size = 0);
                        },
                        delete: function (e) {
                            var t,
                                n,
                                r = c(this),
                                i = u(this, e);
                            return (
                                i &&
                                    ((t = i.next),
                                    (n = i.previous),
                                    delete r.index[i.index],
                                    (i.removed = !0),
                                    n && (n.next = t),
                                    t && (t.previous = n),
                                    r.first == i && (r.first = t),
                                    r.last == i && (r.last = n),
                                    b ? r.size-- : this.size--),
                                !!i
                            );
                        },
                        forEach: function (e, t) {
                            for (var n, r = c(this), i = l(e, 1 < arguments.length ? t : void 0, 3); (n = n ? n.next : r.first); ) for (i(n.value, n.key, this); n && n.removed; ) n = n.previous;
                        },
                        has: function (e) {
                            return !!u(this, e);
                        },
                    }),
                    f(
                        a.prototype,
                        r
                            ? {
                                  get: function (e) {
                                      var t = u(this, e);
                                      return t && t.value;
                                  },
                                  set: function (e, t) {
                                      return o(this, 0 === e ? 0 : e, t);
                                  },
                              }
                            : {
                                  add: function (e) {
                                      return o(this, (e = 0 === e ? 0 : e), e);
                                  },
                              }
                    ),
                    b &&
                        s(a.prototype, "size", {
                            get: function () {
                                return c(this).size;
                            },
                        }),
                    a
                );
            },
            setStrong: function (e, t, n) {
                var r = t + " Iterator",
                    i = h(t),
                    o = h(r);
                a(
                    e,
                    t,
                    function (e, t) {
                        y(this, { type: r, target: e, state: i(e), kind: t, last: void 0 });
                    },
                    function () {
                        for (var e = o(this), t = e.kind, n = e.last; n && n.removed; ) n = n.previous;
                        return e.target && (e.last = n = n ? n.next : e.state.first)
                            ? "keys" == t
                                ? { value: n.key, done: !1 }
                                : "values" == t
                                ? { value: n.value, done: !1 }
                                : { value: [n.key, n.value], done: !1 }
                            : { value: (e.target = void 0), done: !0 };
                    },
                    n ? "entries" : "values",
                    !n,
                    !0
                ),
                    c(t);
            },
        };
    },
    12: function (e, t, n) {
        "use strict";
        (t.a = i),
            (t.c = function (e) {
                return !(!e || !e.url);
            }),
            (t.b = function (e, t) {
                e.render(t);
            });
        var u = n(39),
            s = n(0),
            r = n(10),
            d = n.n(r),
            f = "localhost";
        function i(e) {
            var t = this,
                r = e.url,
                n = e.config,
                i = e.id,
                o = e.callback,
                a = e.loaded,
                c = e.adUnitCode;
            (this.url = r),
                (this.config = n),
                (this.handlers = {}),
                (this.id = i),
                (this.loaded = a),
                (this.cmd = []),
                (this.push = function (e) {
                    "function" == typeof e ? (t.loaded ? e.call() : t.cmd.push(e)) : s.logError("Commands given to Renderer.push must be wrapped in a function");
                }),
                (this.callback =
                    o ||
                    function () {
                        (t.loaded = !0), t.process();
                    }),
                (this.render = function () {
                    function e() {
                        t._render ? t._render.apply(t, n) : s.logWarn("No render function was provided, please use .setRender on the renderer");
                    }
                    var t = this,
                        n = arguments;
                    !(function (t) {
                        var e = pbjs.adUnits,
                            n = d()(e, function (e) {
                                return e.code === t;
                            });
                        if (!n) return !1;
                        var r = s.deepAccess(n, "renderer"),
                            i = !!(r && r.url && r.render),
                            o = s.deepAccess(n, "mediaTypes.video.renderer"),
                            a = !!(o && o.url && o.render);
                        return !!((i && !0 !== r.backupOnly) || (a && !0 !== o.backupOnly));
                    })(c)
                        ? (this.cmd.unshift(e), Object(u.a)(r, f, this.callback))
                        : (s.logWarn("External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ".concat(c)), e());
                }.bind(this));
        }
        (i.install = function (e) {
            return new i({ url: e.url, config: e.config, id: e.id, callback: e.callback, loaded: e.loaded, adUnitCode: e.adUnitCode });
        }),
            (i.prototype.getConfig = function () {
                return this.config;
            }),
            (i.prototype.setRender = function (e) {
                this._render = e;
            }),
            (i.prototype.setEventHandlers = function (e) {
                this.handlers = e;
            }),
            (i.prototype.handleVideoEvent = function (e) {
                var t = e.id,
                    n = e.eventName;
                "function" == typeof this.handlers[n] && this.handlers[n](), s.logMessage("Prebid Renderer event for id ".concat(t, " type ").concat(n));
            }),
            (i.prototype.process = function () {
                for (; 0 < this.cmd.length; )
                    try {
                        this.cmd.shift().call();
                    } catch (e) {
                        s.logError("Error processing Renderer command: ", e);
                    }
            });
    },
    120: function (e, t, n) {
        var r = n(29),
            a = n(34),
            c = n(15),
            u = n(121);
        e.exports = r
            ? Object.defineProperties
            : function (e, t) {
                  c(e);
                  for (var n, r = u(t), i = r.length, o = 0; o < i; ) a.f(e, (n = r[o++]), t[n]);
                  return e;
              };
    },
    121: function (e, t, n) {
        var r = n(122),
            i = n(88);
        e.exports =
            Object.keys ||
            function (e) {
                return r(e, i);
            };
    },
    122: function (e, t, n) {
        var a = n(27),
            c = n(46),
            u = n(81).indexOf,
            s = n(53);
        e.exports = function (e, t) {
            var n,
                r = c(e),
                i = 0,
                o = [];
            for (n in r) !a(s, n) && a(r, n) && o.push(n);
            for (; t.length > i; ) a(r, (n = t[i++])) && (~u(o, n) || o.push(n));
            return o;
        };
    },
    123: function (e, t, n) {
        var r = n(28);
        e.exports = r("document", "documentElement");
    },
    124: function (e, t, n) {
        var i = n(89);
        e.exports = function (e, t, n) {
            for (var r in t) n && n.unsafe && e[r] ? (e[r] = t[r]) : i(e, r, t[r], n);
            return e;
        };
    },
    125: function (e, t, n) {
        "use strict";
        function i() {
            return this;
        }
        var o = n(90).IteratorPrototype,
            a = n(87),
            c = n(45),
            u = n(64),
            s = n(40);
        e.exports = function (e, t, n) {
            var r = t + " Iterator";
            return (e.prototype = a(o, { next: c(1, n) })), u(e, r, !1, !0), (s[r] = i), e;
        };
    },
    126: function (e, t, n) {
        var r = n(30);
        e.exports = !r(function () {
            function e() {}
            return (e.prototype.constructor = null), Object.getPrototypeOf(new e()) !== e.prototype;
        });
    },
    127: function (e, t, n) {
        var i = n(15),
            o = n(128);
        e.exports =
            Object.setPrototypeOf ||
            ("__proto__" in {}
                ? (function () {
                      var n,
                          r = !1,
                          e = {};
                      try {
                          (n = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(e, []), (r = e instanceof Array);
                      } catch (e) {}
                      return function (e, t) {
                          return i(e), o(t), r ? n.call(e, t) : (e.__proto__ = t), e;
                      };
                  })()
                : void 0);
    },
    128: function (e, t, n) {
        var r = n(31);
        e.exports = function (e) {
            if (!r(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype");
            return e;
        };
    },
    129: function (e, t, n) {
        "use strict";
        var r = n(28),
            i = n(34),
            o = n(22),
            a = n(29),
            c = o("species");
        e.exports = function (e) {
            var t = r(e),
                n = i.f;
            a &&
                t &&
                !t[c] &&
                n(t, c, {
                    configurable: !0,
                    get: function () {
                        return this;
                    },
                });
        };
    },
    13: function (e, t, n) {
        var r = n(109);
        e.exports = r;
    },
    130: function (e, t) {},
    131: function (e, t, n) {
        function r(c) {
            return function (e, t) {
                var n,
                    r,
                    i = String(s(e)),
                    o = u(t),
                    a = i.length;
                return o < 0 || a <= o
                    ? c
                        ? ""
                        : void 0
                    : (n = i.charCodeAt(o)) < 55296 || 56319 < n || o + 1 === a || (r = i.charCodeAt(o + 1)) < 56320 || 57343 < r
                    ? c
                        ? i.charAt(o)
                        : n
                    : c
                    ? i.slice(o, o + 2)
                    : r - 56320 + ((n - 55296) << 10) + 65536;
            };
        }
        var u = n(58),
            s = n(48);
        e.exports = { codeAt: r(!1), charAt: r(!0) };
    },
    132: function (e, t, n) {
        n(133);
        var r = n(134),
            i = n(26),
            o = n(62),
            a = n(32),
            c = n(40),
            u = n(22)("toStringTag");
        for (var s in r) {
            var d = i[s],
                f = d && d.prototype;
            f && o(f) !== u && a(f, u, s), (c[s] = c.Array);
        }
    },
    133: function (e, t, n) {
        "use strict";
        var r = n(46),
            i = n(51),
            o = n(40),
            a = n(54),
            c = n(66),
            u = "Array Iterator",
            s = a.set,
            d = a.getterFor(u);
        (e.exports = c(
            Array,
            "Array",
            function (e, t) {
                s(this, { type: u, target: r(e), index: 0, kind: t });
            },
            function () {
                var e = d(this),
                    t = e.target,
                    n = e.kind,
                    r = e.index++;
                return !t || r >= t.length ? { value: (e.target = void 0), done: !0 } : "keys" == n ? { value: r, done: !1 } : "values" == n ? { value: t[r], done: !1 } : { value: [r, t[r]], done: !1 };
            },
            "values"
        )),
            (o.Arguments = o.Array),
            i("keys"),
            i("values"),
            i("entries");
    },
    134: function (e, t) {
        e.exports = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0,
        };
    },
    135: function (e, t, n) {
        n(14)({ target: "Set", stat: !0 }, { from: n(136) });
    },
    136: function (e, t, n) {
        "use strict";
        var s = n(21),
            d = n(25),
            f = n(18);
        e.exports = function (e, t, n) {
            var r,
                i,
                o,
                a,
                c = arguments.length,
                u = 1 < c ? t : void 0;
            return (
                s(this),
                (r = void 0 !== u) && s(u),
                null == e
                    ? new this()
                    : ((i = []),
                      r
                          ? ((o = 0),
                            (a = d(u, 2 < c ? n : void 0, 2)),
                            f(e, function (e) {
                                i.push(a(e, o++));
                            }))
                          : f(e, i.push, i),
                      new this(i))
            );
        };
    },
    137: function (e, t, n) {
        n(14)({ target: "Set", stat: !0 }, { of: n(138) });
    },
    138: function (e, t, n) {
        "use strict";
        e.exports = function () {
            for (var e = arguments.length, t = new Array(e); e--; ) t[e] = arguments[e];
            return new this(t);
        };
    },
    139: function (e, t, n) {
        "use strict";
        var r = n(14),
            i = n(17),
            o = n(140);
        r(
            { target: "Set", proto: !0, real: !0, forced: i },
            {
                addAll: function () {
                    return o.apply(this, arguments);
                },
            }
        );
    },
    14: function (e, t, n) {
        "use strict";
        function y(r) {
            function e(e, t, n) {
                if (this instanceof r) {
                    switch (arguments.length) {
                        case 0:
                            return new r();
                        case 1:
                            return new r(e);
                        case 2:
                            return new r(e, t);
                    }
                    return new r(e, t, n);
                }
                return r.apply(this, arguments);
            }
            return (e.prototype = r.prototype), e;
        }
        var h = n(26),
            m = n(102).f,
            S = n(104),
            A = n(49),
            E = n(25),
            O = n(32),
            T = n(27);
        e.exports = function (e, t) {
            var n,
                r,
                i,
                o,
                a,
                c,
                u,
                s,
                d = e.target,
                f = e.global,
                l = e.stat,
                p = e.proto,
                g = f ? h : l ? h[d] : (h[d] || {}).prototype,
                b = f ? A : A[d] || (A[d] = {}),
                v = b.prototype;
            for (i in t)
                (n = !S(f ? i : d + (l ? "." : "#") + i, e.forced) && g && T(g, i)),
                    (a = b[i]),
                    n && (c = e.noTargetGet ? (s = m(g, i)) && s.value : g[i]),
                    (o = n && c ? c : t[i]),
                    (n && typeof a == typeof o) ||
                        ((u = e.bind && n ? E(o, h) : e.wrap && n ? y(o) : p && "function" == typeof o ? E(Function.call, o) : o),
                        (e.sham || (o && o.sham) || (a && a.sham)) && O(u, "sham", !0),
                        (b[i] = u),
                        p && (T(A, (r = d + "Prototype")) || O(A, r, {}), (A[r][i] = o), e.real && v && !v[i] && O(v, i, o)));
        };
    },
    140: function (e, t, n) {
        "use strict";
        var i = n(15),
            o = n(21);
        e.exports = function () {
            for (var e = i(this), t = o(e.add), n = 0, r = arguments.length; n < r; n++) t.call(e, arguments[n]);
            return e;
        };
    },
    141: function (e, t, n) {
        "use strict";
        var r = n(14),
            i = n(17),
            o = n(142);
        r(
            { target: "Set", proto: !0, real: !0, forced: i },
            {
                deleteAll: function () {
                    return o.apply(this, arguments);
                },
            }
        );
    },
    142: function (e, t, n) {
        "use strict";
        var a = n(15),
            c = n(21);
        e.exports = function () {
            for (var e, t = a(this), n = c(t.delete), r = !0, i = 0, o = arguments.length; i < o; i++) (e = n.call(t, arguments[i])), (r = r && e);
            return !!r;
        };
    },
    143: function (e, t, n) {
        "use strict";
        var r = n(14),
            i = n(17),
            o = n(15),
            a = n(25),
            c = n(37),
            u = n(18);
        r(
            { target: "Set", proto: !0, real: !0, forced: i },
            {
                every: function (e, t) {
                    var n = o(this),
                        r = c(n),
                        i = a(e, 1 < arguments.length ? t : void 0, 3);
                    return !u(
                        r,
                        function (e) {
                            if (!i(e, e, n)) return u.stop();
                        },
                        void 0,
                        !1,
                        !0
                    ).stopped;
                },
            }
        );
    },
    144: function (e, t, n) {
        "use strict";
        var r = n(14),
            i = n(17),
            o = n(28),
            a = n(15),
            c = n(21),
            u = n(41),
            s = n(18);
        r(
            { target: "Set", proto: !0, real: !0, forced: i },
            {
                difference: function (e) {
                    var t = a(this),
                        n = new (u(t, o("Set")))(t),
                        r = c(n.delete);
                    return (
                        s(e, function (e) {
                            r.call(n, e);
                        }),
                        n
                    );
                },
            }
        );
    },
    145: function (e, t, n) {
        "use strict";
        var r = n(14),
            i = n(17),
            c = n(28),
            u = n(15),
            s = n(21),
            d = n(25),
            f = n(41),
            l = n(37),
            p = n(18);
        r(
            { target: "Set", proto: !0, real: !0, forced: i },
            {
                filter: function (e, t) {
                    var n = u(this),
                        r = l(n),
                        i = d(e, 1 < arguments.length ? t : void 0, 3),
                        o = new (f(n, c("Set")))(),
                        a = s(o.add);
                    return (
                        p(
                            r,
                            function (e) {
                                i(e, e, n) && a.call(o, e);
                            },
                            void 0,
                            !1,
                            !0
                        ),
                        o
                    );
                },
            }
        );
    },
    146: function (e, t, n) {
        "use strict";
        var r = n(14),
            i = n(17),
            o = n(15),
            a = n(25),
            c = n(37),
            u = n(18);
        r(
            { target: "Set", proto: !0, real: !0, forced: i },
            {
                find: function (e, t) {
                    var n = o(this),
                        r = c(n),
                        i = a(e, 1 < arguments.length ? t : void 0, 3);
                    return u(
                        r,
                        function (e) {
                            if (i(e, e, n)) return u.stop(e);
                        },
                        void 0,
                        !1,
                        !0
                    ).result;
                },
            }
        );
    },
    147: function (e, t, n) {
        "use strict";
        var r = n(14),
            i = n(17),
            o = n(28),
            a = n(15),
            c = n(21),
            u = n(41),
            s = n(18);
        r(
            { target: "Set", proto: !0, real: !0, forced: i },
            {
                intersection: function (e) {
                    var t = a(this),
                        n = new (u(t, o("Set")))(),
                        r = c(t.has),
                        i = c(n.add);
                    return (
                        s(e, function (e) {
                            r.call(t, e) && i.call(n, e);
                        }),
                        n
                    );
                },
            }
        );
    },
    148: function (e, t, n) {
        "use strict";
        var r = n(14),
            i = n(17),
            o = n(15),
            a = n(21),
            c = n(18);
        r(
            { target: "Set", proto: !0, real: !0, forced: i },
            {
                isDisjointFrom: function (e) {
                    var t = o(this),
                        n = a(t.has);
                    return !c(e, function (e) {
                        if (!0 === n.call(t, e)) return c.stop();
                    }).stopped;
                },
            }
        );
    },
    149: function (e, t, n) {
        "use strict";
        var r = n(14),
            i = n(17),
            o = n(28),
            a = n(15),
            c = n(21),
            u = n(93),
            s = n(18);
        r(
            { target: "Set", proto: !0, real: !0, forced: i },
            {
                isSubsetOf: function (e) {
                    var t = u(this),
                        n = a(e),
                        r = n.has;
                    return (
                        "function" != typeof r && ((n = new (o("Set"))(e)), (r = c(n.has))),
                        !s(
                            t,
                            function (e) {
                                if (!1 === r.call(n, e)) return s.stop();
                            },
                            void 0,
                            !1,
                            !0
                        ).stopped
                    );
                },
            }
        );
    },
    15: function (e, t, n) {
        var r = n(31);
        e.exports = function (e) {
            if (!r(e)) throw TypeError(String(e) + " is not an object");
            return e;
        };
    },
    150: function (e, t, n) {
        "use strict";
        var r = n(14),
            i = n(17),
            o = n(15),
            a = n(21),
            c = n(18);
        r(
            { target: "Set", proto: !0, real: !0, forced: i },
            {
                isSupersetOf: function (e) {
                    var t = o(this),
                        n = a(t.has);
                    return !c(e, function (e) {
                        if (!1 === n.call(t, e)) return c.stop();
                    }).stopped;
                },
            }
        );
    },
    151: function (e, t, n) {
        "use strict";
        var r = n(14),
            i = n(17),
            o = n(15),
            a = n(37),
            c = n(18);
        r(
            { target: "Set", proto: !0, real: !0, forced: i },
            {
                join: function (e) {
                    var t = o(this),
                        n = a(t),
                        r = void 0 === e ? "," : String(e),
                        i = [];
                    return c(n, i.push, i, !1, !0), i.join(r);
                },
            }
        );
    },
    152: function (e, t, n) {
        "use strict";
        var r = n(14),
            i = n(17),
            c = n(28),
            u = n(15),
            s = n(21),
            d = n(25),
            f = n(41),
            l = n(37),
            p = n(18);
        r(
            { target: "Set", proto: !0, real: !0, forced: i },
            {
                map: function (e, t) {
                    var n = u(this),
                        r = l(n),
                        i = d(e, 1 < arguments.length ? t : void 0, 3),
                        o = new (f(n, c("Set")))(),
                        a = s(o.add);
                    return (
                        p(
                            r,
                            function (e) {
                                a.call(o, i(e, e, n));
                            },
                            void 0,
                            !1,
                            !0
                        ),
                        o
                    );
                },
            }
        );
    },
    153: function (e, t, n) {
        "use strict";
        var r = n(14),
            i = n(17),
            a = n(15),
            c = n(21),
            u = n(37),
            s = n(18);
        r(
            { target: "Set", proto: !0, real: !0, forced: i },
            {
                reduce: function (t, e) {
                    var n = a(this),
                        r = u(n),
                        i = arguments.length < 2,
                        o = i ? void 0 : e;
                    if (
                        (c(t),
                        s(
                            r,
                            function (e) {
                                o = i ? ((i = !1), e) : t(o, e, e, n);
                            },
                            void 0,
                            !1,
                            !0
                        ),
                        i)
                    )
                        throw TypeError("Reduce of empty set with no initial value");
                    return o;
                },
            }
        );
    },
    154: function (e, t, n) {
        "use strict";
        var r = n(14),
            i = n(17),
            o = n(15),
            a = n(25),
            c = n(37),
            u = n(18);
        r(
            { target: "Set", proto: !0, real: !0, forced: i },
            {
                some: function (e, t) {
                    var n = o(this),
                        r = c(n),
                        i = a(e, 1 < arguments.length ? t : void 0, 3);
                    return u(
                        r,
                        function (e) {
                            if (i(e, e, n)) return u.stop();
                        },
                        void 0,
                        !1,
                        !0
                    ).stopped;
                },
            }
        );
    },
    155: function (e, t, n) {
        "use strict";
        var r = n(14),
            i = n(17),
            o = n(28),
            a = n(15),
            c = n(21),
            u = n(41),
            s = n(18);
        r(
            { target: "Set", proto: !0, real: !0, forced: i },
            {
                symmetricDifference: function (e) {
                    var t = a(this),
                        n = new (u(t, o("Set")))(t),
                        r = c(n.delete),
                        i = c(n.add);
                    return (
                        s(e, function (e) {
                            r.call(n, e) || i.call(n, e);
                        }),
                        n
                    );
                },
            }
        );
    },
    156: function (e, t, n) {
        "use strict";
        var r = n(14),
            i = n(17),
            o = n(28),
            a = n(15),
            c = n(21),
            u = n(41),
            s = n(18);
        r(
            { target: "Set", proto: !0, real: !0, forced: i },
            {
                union: function (e) {
                    var t = a(this),
                        n = new (u(t, o("Set")))(t);
                    return s(e, c(n.add), n), n;
                },
            }
        );
    },
    157: function (e, t, n) {
        n(92), n(158);
        var r = n(49);
        e.exports = r.Array.from;
    },
    158: function (e, t, n) {
        var r = n(14),
            i = n(159);
        r(
            {
                target: "Array",
                stat: !0,
                forced: !n(161)(function (e) {
                    Array.from(e);
                }),
            },
            { from: i }
        );
    },
    159: function (e, t, n) {
        "use strict";
        var v = n(25),
            y = n(57),
            h = n(85),
            m = n(84),
            S = n(50),
            A = n(160),
            E = n(61);
        e.exports = function (e, t, n) {
            var r,
                i,
                o,
                a,
                c,
                u,
                s = y(e),
                d = "function" == typeof this ? this : Array,
                f = arguments.length,
                l = 1 < f ? t : void 0,
                p = void 0 !== l,
                g = E(s),
                b = 0;
            if ((p && (l = v(l, 2 < f ? n : void 0, 2)), null == g || (d == Array && m(g)))) for (i = new d((r = S(s.length))); b < r; b++) (u = p ? l(s[b], b) : s[b]), A(i, b, u);
            else for (c = (a = g.call(s)).next, i = new d(); !(o = c.call(a)).done; b++) (u = p ? h(a, l, [o.value, b], !0) : o.value), A(i, b, u);
            return (i.length = b), i;
        };
    },
    16: function (e, t, n) {
        "use strict";
        (t.a = function () {
            return window.pbjs;
        }),
            (window.pbjs = window.pbjs || {}),
            (window.pbjs.cmd = window.pbjs.cmd || []),
            (window.pbjs.que = window.pbjs.que || []),
            (window._pbjsGlobals = window._pbjsGlobals || []),
            window._pbjsGlobals.push("pbjs");
    },
    160: function (e, t, n) {
        "use strict";
        var i = n(55),
            o = n(34),
            a = n(45);
        e.exports = function (e, t, n) {
            var r = i(t);
            r in e ? o.f(e, r, a(0, n)) : (e[r] = n);
        };
    },
    161: function (e, t, n) {
        var i = n(22)("iterator"),
            o = !1;
        try {
            var r = 0,
                a = {
                    next: function () {
                        return { done: !!r++ };
                    },
                    return: function () {
                        o = !0;
                    },
                };
            (a[i] = function () {
                return this;
            }),
                Array.from(a, function () {
                    throw 2;
                });
        } catch (e) {}
        e.exports = function (e, t) {
            if (!t && !o) return !1;
            var n = !1;
            try {
                var r = {};
                (r[i] = function () {
                    return {
                        next: function () {
                            return { done: (n = !0) };
                        },
                    };
                }),
                    e(r);
            } catch (e) {}
            return n;
        };
    },
    162: function (e, t) {
        e.exports = function e(t) {
            var n = Array.isArray(t) ? [] : {};
            for (var r in t) {
                var i = t[r];
                n[r] = i && "object" == typeof i ? e(i) : i;
            }
            return n;
        };
    },
    163: function (e, t, n) {
        "use strict";
        t.a = function (e, t, n, r, i) {
            for (t = t.split ? t.split(".") : t, r = 0; r < t.length; r++) e = e ? e[t[r]] : i;
            return e === i ? n : e;
        };
    },
    164: function (e, t, n) {
        "use strict";
        t.a = function (e, t, n) {
            t.split && (t = t.split("."));
            for (var r, i = 0, o = t.length, a = e; i < o; ++i) (r = a[t[i]]), (a = a[t[i]] = i === o - 1 ? n : null != r ? r : !~t[i + 1].indexOf(".") && -1 < +t[i + 1] ? [] : {});
        };
    },
    165: function (e, t) {
        (h.SYNC = 1), (h.ASYNC = 2), (h.QUEUE = 4);
        var g = "fun-hooks";
        var n = Object.freeze({ useProxy: !0, ready: 0 }),
            b = new WeakMap(),
            r =
                "2,1,0" ===
                [1]
                    .reduce(function (e, t, n) {
                        return [e, t, n];
                    }, 2)
                    .toString()
                    ? Array.prototype.reduce
                    : function (e, t) {
                          var n,
                              r = Object(this),
                              i = r.length >>> 0,
                              o = 0;
                          if (t) n = t;
                          else {
                              for (; o < i && !(o in r); ) o++;
                              n = r[o++];
                          }
                          for (; o < i; ) o in r && (n = e(n, r[o], o, r)), o++;
                          return n;
                      };
        function v(e, t) {
            return Array.prototype.slice.call(e, t);
        }
        var y =
            Object.assign ||
            function (e) {
                return r.call(
                    v(arguments, 1),
                    function (t, n) {
                        return (
                            n &&
                                Object.keys(n).forEach(function (e) {
                                    t[e] = n[e];
                                }),
                            t
                        );
                    },
                    e
                );
            };
        function h(u) {
            var s,
                e = {},
                d = [];
            function t(e, t) {
                return "function" == typeof e
                    ? f.call(null, "sync", e, t)
                    : "string" == typeof e && "function" == typeof t
                    ? f.apply(null, arguments)
                    : "object" == typeof e
                    ? function (o, e, a) {
                          var t = !0;
                          void 0 === e && ((e = Object.getOwnPropertyNames(o)), (t = !1));
                          var c = {},
                              n = ["constructor"];
                          for (
                              ;
                              (e = e.filter(function (e) {
                                  return !("function" != typeof o[e] || -1 !== n.indexOf(e) || e.match(/^_/));
                              })).forEach(function (e) {
                                  var t,
                                      n = e.split(":"),
                                      r = n[0],
                                      i = n[1] || "sync";
                                  c[r] || ((t = o[r]), (c[r] = o[r] = f(i, t, a ? [a, r] : void 0)));
                              }),
                                  (o = Object.getPrototypeOf(o)),
                                  t && o;

                          );
                          return c;
                      }.apply(null, arguments)
                    : void 0;
            }
            function l(o) {
                var a = Array.isArray(o) ? o : o.split(".");
                return r.call(
                    a,
                    function (t, n, e) {
                        var r = t[n],
                            i = !1;
                        return (
                            r ||
                            (e === a.length - 1
                                ? (s ||
                                      d.push(function () {
                                          i || console.warn(g + ": referenced '" + o + "' but it was never created");
                                      }),
                                  (t[n] = p(function (e) {
                                      (t[n] = e), (i = !0);
                                  })))
                                : (t[n] = {}))
                        );
                    },
                    e
                );
            }
            function p(r) {
                var o = [],
                    a = [],
                    c = function () {},
                    e = {
                        before: function (e, t) {
                            return n.call(this, o, "before", e, t);
                        },
                        after: function (e, t) {
                            return n.call(this, a, "after", e, t);
                        },
                        getHooks: function (n) {
                            var e = o.concat(a);
                            "object" == typeof n &&
                                (e = e.filter(function (t) {
                                    return Object.keys(n).every(function (e) {
                                        return t[e] === n[e];
                                    });
                                }));
                            try {
                                y(e, {
                                    remove: function () {
                                        return (
                                            e.forEach(function (e) {
                                                e.remove();
                                            }),
                                            this
                                        );
                                    },
                                });
                            } catch (e) {
                                console.error("error adding `remove` to array, did you modify Array.prototype?");
                            }
                            return e;
                        },
                        removeAll: function () {
                            return this.getHooks().remove();
                        },
                    },
                    t = {
                        install: function (e, t, n) {
                            (this.type = e), (c = n)(o, a), r && r(t);
                        },
                    };
                return b.set(e.after, t), e;
                function n(t, e, n, r) {
                    var i = {
                        hook: n,
                        type: e,
                        priority: r || 10,
                        remove: function () {
                            var e = t.indexOf(i);
                            -1 !== e && (t.splice(e, 1), c(o, a));
                        },
                    };
                    return (
                        t.push(i),
                        t.sort(function (e, t) {
                            return t.priority - e.priority;
                        }),
                        c(o, a),
                        this
                    );
                }
            }
            function f(f, e, t) {
                var n = e.after && b.get(e.after);
                if (n) {
                    if (n.type !== f) throw g + ": recreated hookable with different type";
                    return e;
                }
                var r,
                    i,
                    o = t ? l(t) : p(),
                    a = {
                        get: function (e, t) {
                            return o[t] || Reflect.get.apply(Reflect, arguments);
                        },
                    };
                return (
                    s || d.push(c),
                    u.useProxy && "function" == typeof Proxy && Proxy.revocable
                        ? (i = new Proxy(e, a))
                        : y(
                              (i = function () {
                                  return a.apply ? a.apply(e, this, v(arguments)) : e.apply(this, arguments);
                              }),
                              o
                          ),
                    b.get(i.after).install(f, i, function (e, t) {
                        var s,
                            d = [];
                        r =
                            e.length || t.length
                                ? (e.forEach(n),
                                  (s = d.push(void 0) - 1),
                                  t.forEach(n),
                                  function (n, r, e) {
                                      var i,
                                          o = 0,
                                          a = "async" === f && "function" == typeof e[e.length - 1] && e.pop();
                                      function c(e) {
                                          "sync" === f ? (i = e) : a && a.apply(null, arguments);
                                      }
                                      function u(e) {
                                          if (d[o]) {
                                              var t = v(arguments);
                                              return (u.bail = c), t.unshift(u), d[o++].apply(r, t);
                                          }
                                          "sync" === f ? (i = e) : a && a.apply(null, arguments);
                                      }
                                      return (
                                          (d[s] = function () {
                                              var e = v(arguments, 1);
                                              "async" === f && a && (delete u.bail, e.push(u));
                                              var t = n.apply(r, e);
                                              "sync" === f && u(t);
                                          }),
                                          u.apply(null, e),
                                          i
                                      );
                                  })
                                : void 0;
                        function n(e) {
                            d.push(e.hook);
                        }
                        c();
                    }),
                    i
                );
                function c() {
                    !s && ("sync" !== f || u.ready & h.SYNC) && ("async" !== f || u.ready & h.ASYNC)
                        ? "sync" !== f && u.ready & h.QUEUE
                            ? (a.apply = function () {
                                  var e = arguments;
                                  d.push(function () {
                                      i.apply(e[1], e[2]);
                                  });
                              })
                            : (a.apply = function () {
                                  throw g + ": hooked function not ready";
                              })
                        : (a.apply = r);
                }
            }
            return (
                (u = y({}, n, u)).ready
                    ? (t.ready = function () {
                          (s = !0),
                              (function (e) {
                                  for (var t; (t = e.shift()); ) t();
                              })(d);
                      })
                    : (s = !0),
                (t.get = l),
                t
            );
        }
        e.exports = h;
    },
    17: function (e, t) {
        e.exports = !0;
    },
    18: function (e, t, n) {
        function p(e, t) {
            (this.stopped = e), (this.result = t);
        }
        var g = n(15),
            b = n(84),
            v = n(50),
            y = n(25),
            h = n(61),
            m = n(85);
        (e.exports = function (e, t, n, r, i) {
            var o,
                a,
                c,
                u,
                s,
                d,
                f,
                l = y(t, n, r ? 2 : 1);
            if (i) o = e;
            else {
                if ("function" != typeof (a = h(e))) throw TypeError("Target is not iterable");
                if (b(a)) {
                    for (c = 0, u = v(e.length); c < u; c++) if ((s = r ? l(g((f = e[c]))[0], f[1]) : l(e[c])) && s instanceof p) return s;
                    return new p(!1);
                }
                o = a.call(e);
            }
            for (d = o.next; !(f = d.call(o)).done; ) if ("object" == typeof (s = m(o, l, f.value, r)) && s && s instanceof p) return s;
            return new p(!1);
        }).stop = function (e) {
            return new p(!0, e);
        };
    },
    19: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return r;
        });
        var h = n(3),
            m = n(0);
        var S,
            r =
                ((S = window),
                function () {
                    var e,
                        t = [],
                        n = (function (e) {
                            try {
                                if (!e.location.ancestorOrigins) return;
                                return e.location.ancestorOrigins;
                            } catch (e) {}
                        })(S),
                        r = h.b.getConfig("maxNestedIframes"),
                        i = !1,
                        o = 0,
                        a = !1,
                        c = !1;
                    do {
                        var u,
                            s,
                            d = b,
                            f = c,
                            l = void 0,
                            p = !1,
                            g = null,
                            c = !1,
                            b = b ? b.parent : S;
                        try {
                            l = b.location.href || null;
                        } catch (e) {
                            p = !0;
                        }
                        if (p)
                            if (f) {
                                var v = d.context;
                                try {
                                    (s = g = v.sourceUrl), (a = !0), b === S.top && (i = !0), v.canonicalUrl && (e = v.canonicalUrl);
                                } catch (e) {}
                            } else {
                                Object(m.logWarn)("Trying to access cross domain iframe. Continuing without referrer and location");
                                try {
                                    var y = d.document.referrer;
                                    y && ((g = y), b === S.top && (i = !0));
                                } catch (e) {}
                                !g && n && n[o - 1] && (g = n[o - 1]), g && !a && (s = g);
                            }
                        else
                            l &&
                                ((s = g = l),
                                (a = !1),
                                b === S.top &&
                                    ((i = !0),
                                    (u = (function (e) {
                                        try {
                                            var t = e.querySelector("link[rel='canonical']");
                                            if (null !== t) return t.href;
                                        } catch (e) {}
                                        return null;
                                    })(b.document)) && (e = u))),
                                b.context && b.context.sourceUrl && (c = !0);
                        t.push(g), o++;
                    } while (b !== S.top && o < r);
                    return t.reverse(), { referer: s || null, reachedTop: i, isAmp: a, numIframes: o - 1, stack: t, canonicalUrl: e || null };
                });
    },
    2: function (e, t, n) {
        "use strict";
        n.d(t, "c", function () {
            return r;
        }),
            n.d(t, "d", function () {
                return i;
            }),
            n.d(t, "b", function () {
                return o;
            }),
            n.d(t, "a", function () {
                return a;
            });
        var r = "native",
            i = "video",
            o = "banner",
            a = "adpod";
    },
    21: function (e, t) {
        e.exports = function (e) {
            if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
            return e;
        };
    },
    22: function (e, t, n) {
        var r = n(26),
            i = n(78),
            o = n(27),
            a = n(59),
            c = n(80),
            u = n(108),
            s = i("wks"),
            d = r.Symbol,
            f = u ? d : (d && d.withoutSetter) || a;
        e.exports = function (e) {
            return o(s, e) || (c && o(d, e) ? (s[e] = d[e]) : (s[e] = f("Symbol." + e))), s[e];
        };
    },
    23: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return u;
        });
        var r = n(0),
            s = n(33),
            i = n(10),
            o = n.n(i),
            a = n(5);
        var d,
            c,
            u =
                ((d = []),
                ((c = {}).addWinningBid = function (t) {
                    var e = o()(d, function (e) {
                        return e.getAuctionId() === t.auctionId;
                    });
                    e ? ((t.status = a.BID_STATUS.RENDERED), e.addWinningBid(t)) : Object(r.logWarn)("Auction not found when adding winning bid");
                }),
                (c.getAllWinningBids = function () {
                    return d
                        .map(function (e) {
                            return e.getWinningBids();
                        })
                        .reduce(r.flatten, []);
                }),
                (c.getBidsRequested = function () {
                    return d
                        .map(function (e) {
                            return e.getBidRequests();
                        })
                        .reduce(r.flatten, []);
                }),
                (c.getNoBids = function () {
                    return d
                        .map(function (e) {
                            return e.getNoBids();
                        })
                        .reduce(r.flatten, []);
                }),
                (c.getBidsReceived = function () {
                    return d
                        .map(function (e) {
                            if (e.getAuctionStatus() === s.a) return e.getBidsReceived();
                        })
                        .reduce(r.flatten, [])
                        .filter(function (e) {
                            return e;
                        });
                }),
                (c.getAllBidsForAdUnitCode = function (t) {
                    return d
                        .map(function (e) {
                            return e.getBidsReceived();
                        })
                        .reduce(r.flatten, [])
                        .filter(function (e) {
                            return e && e.adUnitCode === t;
                        });
                }),
                (c.getAdUnits = function () {
                    return d
                        .map(function (e) {
                            return e.getAdUnits();
                        })
                        .reduce(r.flatten, []);
                }),
                (c.getAdUnitCodes = function () {
                    return d
                        .map(function (e) {
                            return e.getAdUnitCodes();
                        })
                        .reduce(r.flatten, [])
                        .filter(r.uniques);
                }),
                (c.createAuction = function (e) {
                    var t,
                        n = e.adUnits,
                        r = e.adUnitCodes,
                        i = e.callback,
                        o = e.cbTimeout,
                        a = e.labels,
                        c = e.auctionId,
                        u = Object(s.k)({ adUnits: n, adUnitCodes: r, callback: i, cbTimeout: o, labels: a, auctionId: c });
                    return (t = u), d.push(t), u;
                }),
                (c.findBidByAdId = function (t) {
                    return o()(
                        d
                            .map(function (e) {
                                return e.getBidsReceived();
                            })
                            .reduce(r.flatten, []),
                        function (e) {
                            return e.adId === t;
                        }
                    );
                }),
                (c.getStandardBidderAdServerTargeting = function () {
                    return Object(s.j)()[a.JSON_MAPPING.ADSERVER_TARGETING];
                }),
                (c.setStatusForBids = function (e, t) {
                    var n,
                        r = c.findBidByAdId(e);
                    r && (r.status = t),
                        !r ||
                            t !== a.BID_STATUS.BID_TARGETING_SET ||
                            ((n = o()(d, function (e) {
                                return e.getAuctionId() === r.auctionId;
                            })) &&
                                n.setBidTargeting(r));
                }),
                (c.getLastAuctionId = function () {
                    return d.length && d[d.length - 1].getAuctionId();
                }),
                (c.clearAllAuctions = function () {
                    d.length = 0;
                }),
                c);
    },
    232: function (e, t, n) {
        n(233);
        var r = n(52);
        e.exports = r("Array", "findIndex");
    },
    233: function (e, t, n) {
        "use strict";
        var r = n(14),
            i = n(56).findIndex,
            o = n(51),
            a = n(60),
            c = "findIndex",
            u = !0,
            s = a(c);
        c in [] &&
            Array(1)[c](function () {
                u = !1;
            }),
            r(
                { target: "Array", proto: !0, forced: u || !s },
                {
                    findIndex: function (e, t) {
                        return i(this, e, 1 < arguments.length ? t : void 0);
                    },
                }
            ),
            o(c);
    },
    24: function (e, t, n) {
        "use strict";
        n.d(t, "b", function () {
            return c;
        }),
            n.d(t, "a", function () {
                return u;
            }),
            (t.d = function (e, t) {
                var n = Object(o.getBidRequest)(e.requestId, t),
                    r = n && Object(o.deepAccess)(n, "mediaTypes.video"),
                    i = r && Object(o.deepAccess)(r, "context");
                return s(e, n, r, i);
            }),
            n.d(t, "c", function () {
                return s;
            });
        n(8);
        var o = n(0),
            i = n(3),
            r = n(13),
            a = (n.n(r), n(11)),
            c = "localhost",
            u = "instream";
        var s = Object(a.b)(
            "sync",
            function (e, t, n, r) {
                return !t || (n && r !== c)
                    ? i.b.getConfig("cache.url") || !e.vastXml || e.vastUrl
                        ? !(!e.vastUrl && !e.vastXml)
                        : (Object(o.logError)('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '),
                          !1)
                    : r !== c || !!(e.renderer || t.renderer || n.renderer);
            },
            "checkVideoBidSetup"
        );
    },
    240: function (e, t, n) {
        "use strict";
        t.a = function () {
            window.addEventListener("message", c, !1);
        };
        var r = n(9),
            b = n.n(r),
            v = n(38),
            i = n(5),
            y = n.n(i),
            h = n(0),
            m = n(23),
            o = n(10),
            S = n.n(o),
            A = n(12),
            a = n(13),
            d = n.n(a),
            E = n(3),
            O = y.a.EVENTS.BID_WON,
            T = y.a.EVENTS.STALE_RENDER;
        function c(e) {
            var t,
                n,
                r,
                i,
                o,
                a,
                c,
                u,
                s,
                d = e.message ? "message" : "data",
                f = {};
            try {
                f = JSON.parse(e[d]);
            } catch (e) {
                return;
            }
            if (f && f.adId) {
                var l,
                    p = S()(m.a.getBidsReceived(), function (e) {
                        return e.adId === f.adId;
                    });
                if (p && "Prebid Request" === f.message) {
                    if (p.status === y.a.BID_STATUS.RENDERED && (Object(h.logWarn)("Ad id ".concat(p.adId, " has been rendered before")), b.a.emit(T, p), Object(h.deepAccess)(E.b.getConfig("auctionOptions"), "suppressStaleRender"))) return;
                    (n = e),
                        (r = (t = p).adId),
                        (i = t.ad),
                        (o = t.adUrl),
                        (a = t.width),
                        (c = t.height),
                        (u = t.renderer),
                        (s = t.cpm),
                        Object(A.c)(u)
                            ? Object(A.b)(u, t)
                            : r && (I(t), n.source.postMessage(JSON.stringify({ message: "Prebid Response", ad: Object(h.replaceAuctionPrice)(i, s), adUrl: Object(h.replaceAuctionPrice)(o, s), adId: r, width: a, height: c }), n.origin)),
                        m.a.addWinningBid(p),
                        b.a.emit(O, p);
                }
                if (p && "Prebid Native" === f.message) {
                    if ("assetRequest" === f.action) {
                        var g = Object(v.d)(f, p);
                        return void e.source.postMessage(JSON.stringify(g), e.origin);
                    }
                    if (
                        ("allAssetRequest" === f.action ? ((l = Object(v.c)(f, p)), e.source.postMessage(JSON.stringify(l), e.origin)) : "resizeNativeHeight" === f.action && ((p.height = f.height), (p.width = f.width), I(p)),
                        "click" === Object(v.b)(f, p))
                    )
                        return;
                    m.a.addWinningBid(p), b.a.emit(O, p);
                }
            }
        }
        function I(e) {
            var a = e.adId,
                c = e.adUnitCode,
                u = e.width,
                s = e.height;
            ["div", "iframe"].forEach(function (e) {
                var t,
                    n,
                    r,
                    i,
                    o =
                        ((t = e + ':not([style*="display: none"])'),
                        (n = (function (e, t) {
                            return window.googletag
                                ? (function (n) {
                                      return S()(window.googletag.pubads().getSlots(), function (t) {
                                          return S()(t.getTargetingKeys(), function (e) {
                                              return d()(t.getTargeting(e), n);
                                          });
                                      }).getSlotElementId();
                                  })(e)
                                : window.apntag
                                ? (function (e) {
                                      var t = window.apntag.getTag(e);
                                      return t && t.targetId;
                                  })(t)
                                : t;
                        })(a, c)),
                        (r = document.getElementById(n)) && r.querySelector(t));
                o ? (((i = o.style).width = u + "px"), (i.height = s + "px")) : Object(h.logWarn)("Unable to locate matching page element for adUnitCode ".concat(c, ".  Can't resize it to ad's dimensions.  Please review setup."));
            });
        }
    },
    241: function (e, t, n) {
        "use strict";
        t.a = function (e) {
            var t;
            try {
                (e = e || window.sessionStorage), (t = JSON.parse(e.getItem(u)));
            } catch (e) {}
            t && p(t, !0);
        };
        var r,
            i,
            o = n(3),
            a = n(0),
            c = n(33),
            u = "pbjs:debugging";
        function s(e) {
            Object(a.logMessage)("DEBUG: " + e);
        }
        function d(e) {
            Object(a.logWarn)("DEBUG: " + e);
        }
        function f(e) {
            (r = function (e, t, n) {
                if (b(this.bidders, n.bidderCode)) return void d("bidder '".concat(n.bidderCode, "' excluded from auction by bidder overrides"));
                Array.isArray(this.bids) &&
                    this.bids.forEach(function (e) {
                        g(e, n.bidderCode, t) || v(e, n, "bidder");
                    });
                e(t, n);
            }.bind(e)),
                c.c.before(r, 5),
                (i = function (e, t) {
                    var r = this,
                        n = t.filter(function (e) {
                            return !b(r.bidders, e.bidderCode) || (d("bidRequest '".concat(e.bidderCode, "' excluded from auction by bidder overrides")), !1);
                        });
                    Array.isArray(r.bidRequests) &&
                        n.forEach(function (n) {
                            r.bidRequests.forEach(function (t) {
                                n.bids.forEach(function (e) {
                                    g(t, n.bidderCode, e.adUnitCode) || v(t, e, "bidRequest");
                                });
                            });
                        });
                    e(n);
                }.bind(e)),
                c.e.before(i, 5);
        }
        function l() {
            c.c.getHooks({ hook: r }).remove(), c.e.getHooks({ hook: i }).remove();
        }
        function p(e, t) {
            var n = 1 < arguments.length && void 0 !== t && t;
            o.b.setConfig({ debug: !0 }), l(), f(e), s("bidder overrides enabled".concat(n ? " from session" : ""));
        }
        function g(e, t, n) {
            return (e.bidder && e.bidder !== t) || !(!e.adUnitCode || e.adUnitCode === n);
        }
        function b(e, t) {
            return Array.isArray(e) && -1 === e.indexOf(t);
        }
        function v(n, e, r) {
            return Object.keys(n)
                .filter(function (e) {
                    return -1 === ["adUnitCode", "bidder"].indexOf(e);
                })
                .reduce(function (e, t) {
                    return s("bidder overrides changed '".concat(e.adUnitCode, "/").concat(e.bidderCode, "' ").concat(r, ".").concat(t, " from '").concat(e[t], ".js' to '").concat(n[t], "'")), (e[t] = n[t]), e;
                }, e);
        }
        function y(e) {
            if (e.enabled) {
                try {
                    window.sessionStorage.setItem(u, JSON.stringify(e));
                } catch (e) {}
                p(e);
            } else {
                l(), s("bidder overrides disabled");
                try {
                    window.sessionStorage.removeItem(u);
                } catch (e) {}
            }
        }
        o.b.getConfig("debugging", function (e) {
            return y(e.debugging);
        });
    },
    25: function (e, t, n) {
        var o = n(21);
        e.exports = function (r, i, e) {
            if ((o(r), void 0 === i)) return r;
            switch (e) {
                case 0:
                    return function () {
                        return r.call(i);
                    };
                case 1:
                    return function (e) {
                        return r.call(i, e);
                    };
                case 2:
                    return function (e, t) {
                        return r.call(i, e, t);
                    };
                case 3:
                    return function (e, t, n) {
                        return r.call(i, e, t, n);
                    };
            }
            return function () {
                return r.apply(i, arguments);
            };
        };
    },
    26: function (n, e, t) {
        (function (e) {
            function t(e) {
                return e && e.Math == Math && e;
            }
            n.exports = t("object" == typeof globalThis && globalThis) || t("object" == typeof window && window) || t("object" == typeof self && self) || t("object" == typeof e && e) || Function("return this")();
        }.call(e, t(36)));
    },
    27: function (e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function (e, t) {
            return n.call(e, t);
        };
    },
    28: function (e, t, n) {
        function r(e) {
            return "function" == typeof e ? e : void 0;
        }
        var i = n(49),
            o = n(26);
        e.exports = function (e, t) {
            return arguments.length < 2 ? r(i[e]) || r(o[e]) : (i[e] && i[e][t]) || (o[e] && o[e][t]);
        };
    },
    29: function (e, t, n) {
        var r = n(30);
        e.exports = !r(function () {
            return (
                7 !=
                Object.defineProperty({}, 1, {
                    get: function () {
                        return 7;
                    },
                })[1]
            );
        });
    },
    3: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return S;
        }),
            n.d(t, "b", function () {
                return _;
            });
        var r = n(44),
            i = n(10),
            a = n.n(i),
            o = n(13),
            c = n.n(o),
            u = n(82),
            s = n.n(u),
            d = n(0);
        function f(e, t) {
            if (null == e) return {};
            var n,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) (n = o[r]), 0 <= t.indexOf(n) || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) for (var i = Object.getOwnPropertySymbols(e), o = 0; o < i.length; o++) (n = i[o]), 0 <= t.indexOf(n) || (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
            return r;
        }
        function l(e, t, n) {
            return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
        }
        function p(e) {
            return (p =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function g() {
            return (g =
                Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                    }
                    return e;
                }).apply(this, arguments);
        }
        var b = n(94),
            v = n(0),
            y = n(5),
            h = "TRUE" === v.getParameterByName(y.DEBUG_MODE).toUpperCase(),
            m = window.location.origin,
            S = "random",
            A = {};
        (A[S] = !0), (A.fixed = !0);
        var E = S,
            O = { LOW: "low", MEDIUM: "medium", HIGH: "high", AUTO: "auto", DENSE: "dense", CUSTOM: "custom" };
        var T,
            I,
            C,
            j,
            w,
            _ =
                ((j = []),
                (w = null),
                B(),
                {
                    getCurrentBidder: function () {
                        return w;
                    },
                    resetBidder: N,
                    getConfig: function () {
                        if (arguments.length <= 1 && "function" != typeof (arguments.length <= 0 ? void 0 : arguments[0])) {
                            var e = arguments.length <= 0 ? void 0 : arguments[0];
                            return e ? v.deepAccess(U(), e) : U();
                        }
                        return function (e, t) {
                            var n = t;
                            if (("string" != typeof e && ((n = e), (e = "*")), "function" == typeof n)) {
                                var r = { topic: e, callback: n };
                                return (
                                    j.push(r),
                                    function () {
                                        j.splice(j.indexOf(r), 1);
                                    }
                                );
                            }
                            v.logError("listener must be a function");
                        }.apply(void 0, arguments);
                    },
                    setConfig: function (r) {
                        var e, i;
                        v.isPlainObject(r)
                            ? ((e = Object.keys(r)),
                              (i = {}),
                              e.forEach(function (e) {
                                  var t = "fpd" === e ? "ortb2" : e,
                                      n = "fpd" === e ? x(r[e]) : r[e];
                                  v.isPlainObject(T[t]) && v.isPlainObject(n) && (n = g({}, T[t], n)), (i[t] = I[t] = n);
                              }),
                              D(i))
                            : v.logError("setConfig options must be an object");
                    },
                    setDefaults: function (e) {
                        v.isPlainObject(T) ? (g(T, e), g(I, e)) : v.logError("defaults must be an object");
                    },
                    resetConfig: B,
                    runWithBidder: k,
                    callbackWithBidder: function (o) {
                        return function (i) {
                            return function () {
                                if ("function" == typeof i) {
                                    for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                                    return k(o, (e = v.bind).call.apply(e, [i, this].concat(n)));
                                }
                                v.logWarn("config.callbackWithBidder callback is not a function");
                            };
                        };
                    },
                    setBidderConfig: function (i) {
                        try {
                            !(function (e) {
                                if (!v.isPlainObject(e)) throw "setBidderConfig bidder options must be an object";
                                if (!Array.isArray(e.bidders) || !e.bidders.length) throw "setBidderConfig bidder options must contain a bidders list with at least 1 bidder";
                                if (!v.isPlainObject(e.config)) throw "setBidderConfig bidder options must contain a config object";
                            })(i),
                                i.bidders.forEach(function (r) {
                                    C[r] || (C[r] = {}),
                                        Object.keys(i.config).forEach(function (e) {
                                            var t = "fpd" === e ? "ortb2" : e,
                                                n = "fpd" === e ? x(i.config[e]) : i.config[e];
                                            v.isPlainObject(n) ? (C[r][t] = g({}, C[r][t] || {}, n)) : (C[r][t] = n);
                                        });
                                });
                        } catch (e) {
                            v.logError(e);
                        }
                    },
                    getBidderConfig: function () {
                        return C;
                    },
                    convertAdUnitFpd: function (e) {
                        var t = [];
                        return (
                            e.forEach(function (e) {
                                e.fpd ? (e.ortb2Imp ? v.mergeDeep(e.ortb2Imp, R(e.fpd)) : (e.ortb2Imp = R(e.fpd)), t.push((e.fpd, f(e, ["fpd"])))) : t.push(e);
                            }),
                            t
                        );
                    },
                    getLegacyFpd: function (r) {
                        if ("object" === p(r)) {
                            var t = {};
                            return (
                                Object.keys(r).forEach(function (n) {
                                    var e = "site" === n ? "context" : n;
                                    t[e] =
                                        "context" === e || "user" === e
                                            ? Object.keys(r[n])
                                                  .filter(function (e) {
                                                      return "data" !== e;
                                                  })
                                                  .reduce(function (e, t) {
                                                      return "ext" === t ? v.mergeDeep(e, r[n][t]) : v.mergeDeep(e, l({}, t, r[n][t])), e;
                                                  }, {})
                                            : r[n];
                                }),
                                t
                            );
                        }
                    },
                    getLegacyImpFpd: function (t) {
                        if ("object" === p(t)) {
                            var n = {};
                            return (
                                v.deepAccess(t, "ext.data") &&
                                    Object.keys(t.ext.data).forEach(function (e) {
                                        "pbadslot" === e
                                            ? v.mergeDeep(n, { context: { pbAdSlot: t.ext.data[e] } })
                                            : "adserver" === e
                                            ? v.mergeDeep(n, { context: { adServer: t.ext.data[e] } })
                                            : v.mergeDeep(n, { context: { data: l({}, e, t.ext.data[e]) } });
                                    }),
                                n
                            );
                        }
                    },
                });
        function B() {
            T = {};
            var n = {
                _debug: h,
                get debug() {
                    return this._debug;
                },
                set debug(e) {
                    this._debug = e;
                },
                _bidderTimeout: 3e3,
                get bidderTimeout() {
                    return this._bidderTimeout;
                },
                set bidderTimeout(e) {
                    this._bidderTimeout = e;
                },
                _publisherDomain: m,
                get publisherDomain() {
                    return this._publisherDomain;
                },
                set publisherDomain(e) {
                    this._publisherDomain = e;
                },
                _priceGranularity: O.MEDIUM,
                set priceGranularity(e) {
                    o(e) &&
                        ("string" == typeof e ? (this._priceGranularity = i(e) ? e : O.MEDIUM) : v.isPlainObject(e) && ((this._customPriceBucket = e), (this._priceGranularity = O.CUSTOM), v.logMessage("Using custom price granularity")));
                },
                get priceGranularity() {
                    return this._priceGranularity;
                },
                _customPriceBucket: {},
                get customPriceBucket() {
                    return this._customPriceBucket;
                },
                _mediaTypePriceGranularity: {},
                get mediaTypePriceGranularity() {
                    return this._mediaTypePriceGranularity;
                },
                set mediaTypePriceGranularity(n) {
                    var r = this;
                    this._mediaTypePriceGranularity = Object.keys(n).reduce(function (e, t) {
                        return (
                            o(n[t])
                                ? "string" == typeof n
                                    ? (e[t] = i(n[t]) ? n[t] : r._priceGranularity)
                                    : v.isPlainObject(n) && ((e[t] = n[t]), v.logMessage("Using custom price granularity for ".concat(t)))
                                : v.logWarn("Invalid price granularity for media type: ".concat(t)),
                            e
                        );
                    }, {});
                },
                _sendAllBids: !0,
                get enableSendAllBids() {
                    return this._sendAllBids;
                },
                set enableSendAllBids(e) {
                    this._sendAllBids = e;
                },
                _useBidCache: !1,
                get useBidCache() {
                    return this._useBidCache;
                },
                set useBidCache(e) {
                    this._useBidCache = e;
                },
                _deviceAccess: !0,
                get deviceAccess() {
                    return this._deviceAccess;
                },
                set deviceAccess(e) {
                    this._deviceAccess = e;
                },
                _bidderSequence: E,
                get bidderSequence() {
                    return this._bidderSequence;
                },
                set bidderSequence(e) {
                    A[e] ? (this._bidderSequence = e) : v.logWarn("Invalid order: ".concat(e, ". Bidder Sequence was not set."));
                },
                _timeoutBuffer: 400,
                get timeoutBuffer() {
                    return this._timeoutBuffer;
                },
                set timeoutBuffer(e) {
                    this._timeoutBuffer = e;
                },
                _disableAjaxTimeout: !1,
                get disableAjaxTimeout() {
                    return this._disableAjaxTimeout;
                },
                set disableAjaxTimeout(e) {
                    this._disableAjaxTimeout = e;
                },
                _maxNestedIframes: 10,
                get maxNestedIframes() {
                    return this._maxNestedIframes;
                },
                set maxNestedIframes(e) {
                    this._maxNestedIframes = e;
                },
                _auctionOptions: {},
                get auctionOptions() {
                    return this._auctionOptions;
                },
                set auctionOptions(e) {
                    !(function (e) {
                        if (!v.isPlainObject(e)) return v.logWarn("Auction Options must be an object"), !1;
                        for (var t = 0, n = Object.keys(e); t < n.length; t++) {
                            var r = n[t];
                            if ("secondaryBidders" !== r && "suppressStaleRender" !== r) return v.logWarn("Auction Options given an incorrect param: ".concat(r)), !1;
                            if ("secondaryBidders" === r) {
                                if (!v.isArray(e[r])) return v.logWarn("Auction Options ".concat(r, " must be of type Array")), !1;
                                if (!e[r].every(v.isStr)) return v.logWarn("Auction Options ".concat(r, " must be only string")), !1;
                            } else if ("suppressStaleRender" === r && !v.isBoolean(e[r])) return v.logWarn("Auction Options ".concat(r, " must be of type boolean")), !1;
                        }
                        return !0;
                    })(e) || (this._auctionOptions = e);
                },
            };
            function i(t) {
                return a()(Object.keys(O), function (e) {
                    return t === O[e];
                });
            }
            function o(e) {
                if (e) {
                    if ("string" == typeof e) i(e) || v.logWarn("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.");
                    else if (v.isPlainObject(e) && !Object(r.b)(e)) return void v.logError("Invalid custom price value passed to `setPriceGranularity()`");
                    return 1;
                }
                v.logError("Prebid Error: no value passed to `setPriceGranularity()`");
            }
            I &&
                D(
                    Object.keys(I).reduce(function (e, t) {
                        return I[t] !== n[t] && (e[t] = n[t] || {}), e;
                    }, {})
                ),
                (I = n),
                (C = {});
        }
        function U() {
            if (w && C && v.isPlainObject(C[w])) {
                var n = C[w],
                    e = new s.a(Object.keys(I).concat(Object.keys(n)));
                return b(e).reduce(function (e, t) {
                    return void 0 === n[t] ? (e[t] = I[t]) : void 0 !== I[t] && v.isPlainObject(n[t]) ? (e[t] = Object(d.mergeDeep)({}, I[t], n[t])) : (e[t] = n[t]), e;
                }, {});
            }
            return g({}, I);
        }
        function x(r) {
            var t = {};
            return (
                Object.keys(r).forEach(function (n) {
                    var e = "context" === n ? "site" : n;
                    t[e] =
                        "site" === e || "user" === e
                            ? Object.keys(r[n]).reduce(function (e, t) {
                                  return "data" === t ? v.mergeDeep(e, { ext: { data: r[n][t] } }) : v.mergeDeep(e, l({}, t, r[n][t])), e;
                              }, {})
                            : r[n];
                }),
                t
            );
        }
        function R(r) {
            var i = {};
            return (
                Object.keys(r)
                    .filter(function (e) {
                        return "context" === e;
                    })
                    .forEach(function (n) {
                        Object.keys(r[n]).forEach(function (t) {
                            "data" === t
                                ? v.mergeDeep(i, { ext: { data: r[n][t] } })
                                : "object" !== p(r[n][t]) || Array.isArray(r[n][t])
                                ? v.mergeDeep(i, { ext: { data: l({}, t.toLowerCase(), r[n][t]) } })
                                : Object.keys(r[n][t]).forEach(function (e) {
                                      v.mergeDeep(i, { ext: { data: l({}, t.toLowerCase(), l({}, e.toLowerCase(), r[n][t][e])) } });
                                  });
                        });
                    }),
                i
            );
        }
        function D(t) {
            var n = Object.keys(t);
            j
                .filter(function (e) {
                    return c()(n, e.topic);
                })
                .forEach(function (e) {
                    e.callback(l({}, e.topic, t[e.topic]));
                }),
                j
                    .filter(function (e) {
                        return "*" === e.topic;
                    })
                    .forEach(function (e) {
                        return e.callback(t);
                    });
        }
        function k(e, t) {
            w = e;
            try {
                return t();
            } finally {
                N();
            }
        }
        function N() {
            w = null;
        }
    },
    30: function (e, t) {
        e.exports = function (e) {
            try {
                return !!e();
            } catch (e) {
                return !0;
            }
        };
    },
    31: function (e, t) {
        e.exports = function (e) {
            return "object" == typeof e ? null !== e : "function" == typeof e;
        };
    },
    32: function (e, t, n) {
        var r = n(29),
            i = n(34),
            o = n(45);
        e.exports = r
            ? function (e, t, n) {
                  return i.f(e, t, o(1, n));
              }
            : function (e, t, n) {
                  return (e[t] = n), e;
              };
    },
    33: function (e, t, n) {
        "use strict";
        n.d(t, "b", function () {
            return L;
        }),
            n.d(t, "a", function () {
                return F;
            }),
            (t.k = function (e) {
                var t,
                    i,
                    b,
                    v,
                    o = e.adUnits,
                    n = e.adUnitCodes,
                    r = e.callback,
                    a = e.cbTimeout,
                    c = e.labels,
                    u = e.auctionId,
                    y = o,
                    s = c,
                    d = n,
                    h = [],
                    f = [],
                    l = [],
                    p = u || P.generateUUID(),
                    g = r,
                    m = a,
                    S = [],
                    A = new Set();
                function E() {
                    return { auctionId: p, timestamp: t, auctionEnd: i, auctionStatus: b, adUnits: y, adUnitCodes: d, labels: s, bidderRequests: h, noBids: l, bidsReceived: f, winningBids: S, timeout: m };
                }
                function O(n, e) {
                    var r, t;
                    e && clearTimeout(v),
                        void 0 === i &&
                            ((r = []),
                            n &&
                                (P.logMessage("Auction ".concat(p, " timedOut")),
                                (t = A),
                                (r = h
                                    .map(function (e) {
                                        return (e.bids || []).filter(function (e) {
                                            return !t.has(e.bidder);
                                        });
                                    })
                                    .reduce(j.flatten, [])
                                    .map(function (e) {
                                        return { bidId: e.bidId, bidder: e.bidder, adUnitCode: e.adUnitCode, auctionId: e.auctionId };
                                    })).length && q.emit(G.EVENTS.BID_TIMEOUT, r)),
                            (b = F),
                            (i = Date.now()),
                            q.emit(G.EVENTS.AUCTION_END, E()),
                            Q(y, function () {
                                try {
                                    var e;
                                    null != g && ((e = f.filter(P.bind.call(j.adUnitsFilter, this, d)).reduce(ee, {})), g.apply(pbjs, [e, n, p]), (g = null));
                                } catch (e) {
                                    P.logError("Error executing bidsBackHandler", null, e);
                                } finally {
                                    r.length && M.callTimedOutBidders(o, r, m);
                                    var t = B.b.getConfig("userSync") || {};
                                    t.enableOverride || N(t.syncDelay);
                                }
                            }));
                }
                function T() {
                    B.b.resetBidder(), P.logInfo("Bids Received for Auction with id: ".concat(p), f), (b = F), O(!1, !0);
                }
                function I(e) {
                    A.add(e);
                }
                function C(n) {
                    var f = this;
                    n.forEach(function (e) {
                        var t;
                        (t = e), (h = h.concat(t));
                    });
                    var l = {},
                        e = {
                            bidRequests: n,
                            run: function () {
                                var e, t;
                                (e = O.bind(null, !0)), (t = setTimeout(e, m)), (v = t), (b = L), q.emit(G.EVENTS.AUCTION_INIT, E());
                                var r,
                                    i,
                                    o,
                                    a,
                                    c,
                                    u,
                                    s =
                                        ((r = T),
                                        (i = f),
                                        (o = 0),
                                        (a = !1),
                                        (c = new Set()),
                                        (u = {}),
                                        {
                                            addBidResponse: function (e, t) {
                                                (u[t.requestId] = !0), o++;
                                                var n = (function (e) {
                                                    var t = e.adUnitCode,
                                                        n = e.bid,
                                                        r = e.bidderRequest,
                                                        i = e.auctionId,
                                                        o = r.start,
                                                        a = k({}, n, { auctionId: i, responseTimestamp: Object(j.timestamp)(), requestTimestamp: o, cpm: parseFloat(n.cpm) || 0, bidder: n.bidderCode, adUnitCode: t });
                                                    (a.timeToRespond = a.responseTimestamp - a.requestTimestamp), q.emit(G.EVENTS.BID_ADJUSTMENT, a);
                                                    var c =
                                                            r.bids &&
                                                            U()(r.bids, function (e) {
                                                                return e.adUnitCode == t && e.bidId == a.requestId;
                                                            }),
                                                        u = c && c.renderer,
                                                        s = a.mediaType,
                                                        d = c && c.mediaTypes && c.mediaTypes[s],
                                                        f = d && d.renderer,
                                                        l = null;
                                                    f && f.url && f.render && (!0 !== f.backupOnly || !n.renderer) ? (l = f) : u && u.url && u.render && (!0 !== u.backupOnly || !n.renderer) && (l = u),
                                                        l && ((a.renderer = _.a.install({ url: l.url })), a.renderer.setRender(l.render));
                                                    var p = Z(n.mediaType, c, B.b.getConfig("mediaTypePriceGranularity")),
                                                        g = Object(w.a)(a.cpm, "object" === D(p) ? p : B.b.getConfig("customPriceBucket"), B.b.getConfig("currency.granularityMultiplier"));
                                                    return (a.pbLg = g.low), (a.pbMg = g.med), (a.pbHg = g.high), (a.pbAg = g.auto), (a.pbDg = g.dense), (a.pbCg = g.custom), a;
                                                })({ adUnitCode: e, bid: t, bidderRequest: this, auctionId: i.getAuctionId() });
                                                "video" === n.mediaType
                                                    ? (function (e, t, n, r) {
                                                          var i = !0,
                                                              o = Object(j.getBidRequest)(t.originalRequestId || t.requestId, [n]),
                                                              a = o && Object(j.deepAccess)(o, "mediaTypes.video"),
                                                              c = a && Object(j.deepAccess)(a, "context");
                                                          B.b.getConfig("cache.url") &&
                                                              c !== R.b &&
                                                              (!t.videoCacheKey || B.b.getConfig("cache.ignoreBidderCacheKey")
                                                                  ? ((i = !1), X(e, t, r, o))
                                                                  : t.vastUrl || (P.logError("videoCacheKey specified but not required vastUrl for video bid"), (i = !1))),
                                                              i && ($(e, t), r());
                                                      })(i, n, this, d)
                                                    : ($(i, n), d());
                                            },
                                            adapterDone: function () {
                                                var t,
                                                    e = i.getBidRequests(),
                                                    n = B.b.getConfig("auctionOptions");
                                                c.add(this),
                                                    !n ||
                                                        P.isEmpty(n) ||
                                                        ((t = n.secondaryBidders) &&
                                                            !e.every(function (e) {
                                                                return x()(t, e.bidderCode);
                                                            }) &&
                                                            (e = e.filter(function (e) {
                                                                return !x()(t, e.bidderCode);
                                                            }))),
                                                    (a = e.every(function (e) {
                                                        return c.has(e);
                                                    })),
                                                    this.bids.forEach(function (e) {
                                                        u[e.bidId] || (i.addNoBid(e), q.emit(G.EVENTS.NO_BID, e));
                                                    }),
                                                    a && 0 === o && r();
                                            },
                                        });
                                function d() {
                                    o--, a && 0 === o && r();
                                }
                                M.callBids(
                                    y,
                                    n,
                                    function () {
                                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                        J.apply({ dispatch: s.addBidResponse, bidderRequest: this }, t);
                                    },
                                    s.adapterDone,
                                    {
                                        request: function (e, t) {
                                            g(V, t), g(l, e), H[e] || (H[e] = { SRA: !0, origin: t }), 1 < l[e] && (H[e].SRA = !1);
                                        },
                                        done: function (e) {
                                            V[e]--, K[0] && p(K[0]) && K.shift();
                                        },
                                    },
                                    m,
                                    I
                                );
                            },
                        };
                    function p(e) {
                        var r = !0,
                            i = B.b.getConfig("maxRequestsPerOrigin") || z;
                        return (
                            e.bidRequests.some(function (e) {
                                var t = 1,
                                    n = void 0 !== e.src && e.src === G.S2S.SRC ? "s2s" : e.bidderCode;
                                return H[n] && (!1 === H[n].SRA && (t = Math.min(e.bids.length, i)), V[H[n].origin] + t > i && (r = !1)), !r;
                            }),
                            r && e.run(),
                            r
                        );
                    }
                    function g(e, t) {
                        void 0 === e[t] ? (e[t] = 1) : e[t]++;
                    }
                    p(e) || (P.logWarn("queueing auction due to limited endpoint capacity"), K.push(e));
                }
                return {
                    addBidReceived: function (e) {
                        f = f.concat(e);
                    },
                    addNoBid: function (e) {
                        l = l.concat(e);
                    },
                    executeCallback: O,
                    callBids: function () {
                        (b = W), (t = Date.now());
                        var e = M.makeBidRequests(y, t, p, m, s);
                        P.logInfo("Bids Requested for Auction with id: ".concat(p), e), e.length < 1 ? (P.logWarn("No valid bid requests returned for auction"), T()) : Y.call({ dispatch: C, context: this }, e);
                    },
                    addWinningBid: function (e) {
                        (S = S.concat(e)), M.callBidWonBidder(e.bidder, e, o);
                    },
                    setBidTargeting: function (e) {
                        M.callSetTargetingBidder(e.bidder, e);
                    },
                    getWinningBids: function () {
                        return S;
                    },
                    getTimeout: function () {
                        return m;
                    },
                    getAuctionId: function () {
                        return p;
                    },
                    getAuctionStatus: function () {
                        return b;
                    },
                    getAdUnits: function () {
                        return y;
                    },
                    getAdUnitCodes: function () {
                        return d;
                    },
                    getBidRequests: function () {
                        return h;
                    },
                    getBidsReceived: function () {
                        return f;
                    },
                    getNoBids: function () {
                        return l;
                    },
                };
            }),
            n.d(t, "c", function () {
                return J;
            }),
            n.d(t, "e", function () {
                return Y;
            }),
            (t.g = d),
            (t.d = $),
            n.d(t, "f", function () {
                return X;
            }),
            n.d(t, "i", function () {
                return f;
            }),
            n.d(t, "h", function () {
                return l;
            }),
            (t.j = g);
        var j = n(0),
            w = n(44),
            a = n(38),
            o = n(97),
            _ = n(12),
            B = n(3),
            r = n(43),
            i = n(11),
            c = n(10),
            U = n.n(c),
            u = n(13),
            x = n.n(u),
            R = n(24),
            s = n(2);
        function D(e) {
            return (D =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function k() {
            return (k =
                Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                    }
                    return e;
                }).apply(this, arguments);
        }
        var N = r.a.syncUsers,
            P = n(0),
            M = n(8).default,
            q = n(9),
            G = n(5),
            W = "started",
            L = "inProgress",
            F = "completed";
        q.on(G.EVENTS.BID_ADJUSTMENT, function (e) {
            !(function (e) {
                var t,
                    n = e.bidderCode,
                    r = e.cpm;
                if (
                    pbjs.bidderSettings &&
                    (n && pbjs.bidderSettings[n] && "function" == typeof pbjs.bidderSettings[n].bidCpmAdjustment
                        ? (t = pbjs.bidderSettings[n].bidCpmAdjustment)
                        : pbjs.bidderSettings[G.JSON_MAPPING.BD_SETTING_STANDARD] &&
                          "function" == typeof pbjs.bidderSettings[G.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment &&
                          (t = pbjs.bidderSettings[G.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment),
                    t)
                )
                    try {
                        r = t(e.cpm, k({}, e));
                    } catch (e) {
                        P.logError("Error during bid adjustment", "bidmanager.js", e);
                    }
                0 <= r && (e.cpm = r);
            })(e);
        });
        var z = 4,
            V = {},
            H = {},
            K = [];
        var J = Object(i.b)(
                "async",
                function (e, t) {
                    this.dispatch.call(this.bidderRequest, e, t);
                },
                "addBidResponse"
            ),
            Y = Object(i.b)(
                "sync",
                function (e) {
                    this.dispatch.call(this.context, e);
                },
                "addBidderRequests"
            ),
            Q = Object(i.b)(
                "async",
                function (e, t) {
                    t && t();
                },
                "bidsBackCallback"
            );
        function d(e, t) {
            t.timeToRespond > e.getTimeout() + B.b.getConfig("timeoutBuffer") && e.executeCallback(!0);
        }
        function $(e, t) {
            var n = e.getBidRequests(),
                r = U()(n, function (e) {
                    return e.bidderCode === t.bidderCode;
                });
            !(function (t, e) {
                var n;
                {
                    var r;
                    t.bidderCode &&
                        (0 < t.cpm || t.dealId) &&
                        ((r = U()(e.bids, function (e) {
                            return e.adUnitCode === t.adUnitCode;
                        })),
                        (n = (function (e, t, n) {
                            if (!t) return {};
                            var r = {},
                                i = pbjs.bidderSettings;
                            {
                                var o;
                                i && ((o = g(t.mediaType, e, n)), b(r, o, t), e && i[e] && i[e][G.JSON_MAPPING.ADSERVER_TARGETING] && (b(r, i[e], t), (t.sendStandardTargeting = i[e].sendStandardTargeting)));
                            }
                            t.native && (r = k({}, r, Object(a.e)(t, n)));
                            return r;
                        })(t.bidderCode, t, r)));
                }
                t.adserverTargeting = k(t.adserverTargeting || {}, n);
            })(t, r),
                q.emit(G.EVENTS.BID_RESPONSE, t),
                e.addBidReceived(t),
                d(e, t);
        }
        var X = Object(i.b)(
            "async",
            function (n, r, i, e) {
                Object(o.b)(
                    [r],
                    function (e, t) {
                        e
                            ? (P.logWarn("Failed to save to the video cache: ".concat(e, ". Video bid must be discarded.")), d(n, r))
                            : "" === t[0].uuid
                            ? (P.logWarn("Supplied video cache key was already in use by Prebid Cache; caching attempt was rejected. Video bid must be discarded."), d(n, r))
                            : ((r.videoCacheKey = t[0].uuid), r.vastUrl || (r.vastUrl = Object(o.a)(r.videoCacheKey)), $(n, r), i());
                    },
                    e
                );
            },
            "callPrebidCache"
        );
        function Z(e, t, n) {
            if (e && n) {
                if (e === s.d) {
                    var r = Object(j.deepAccess)(t, "mediaTypes.".concat(s.d, ".context"), "instream");
                    if (n["".concat(s.d, "-").concat(r)]) return n["".concat(s.d, "-").concat(r)];
                }
                return n[e];
            }
        }
        var f = function (e, t) {
                var n = Z(e, t, B.b.getConfig("mediaTypePriceGranularity"));
                return "string" == typeof e && n ? ("string" == typeof n ? n : "custom") : B.b.getConfig("priceGranularity");
            },
            l = function (t) {
                return function (e) {
                    return t === G.GRANULARITY_OPTIONS.AUTO
                        ? e.pbAg
                        : t === G.GRANULARITY_OPTIONS.DENSE
                        ? e.pbDg
                        : t === G.GRANULARITY_OPTIONS.LOW
                        ? e.pbLg
                        : t === G.GRANULARITY_OPTIONS.MEDIUM
                        ? e.pbMg
                        : t === G.GRANULARITY_OPTIONS.HIGH
                        ? e.pbHg
                        : t === G.GRANULARITY_OPTIONS.CUSTOM
                        ? e.pbCg
                        : void 0;
                };
            },
            p = function () {
                return function (e) {
                    return e.meta && e.meta.advertiserDomains && 0 < e.meta.advertiserDomains.length ? e.meta.advertiserDomains[0] : "";
                };
            };
        function g(e, t, n) {
            function r(e, t) {
                return {
                    key: e,
                    val:
                        "function" == typeof t
                            ? function (e) {
                                  return t(e);
                              }
                            : function (e) {
                                  return Object(j.getValue)(e, t);
                              },
                };
            }
            var i,
                o,
                a = G.TARGETING_KEYS,
                c = f(e, n),
                u = pbjs.bidderSettings;
            return (
                u[G.JSON_MAPPING.BD_SETTING_STANDARD] || (u[G.JSON_MAPPING.BD_SETTING_STANDARD] = {}),
                u[G.JSON_MAPPING.BD_SETTING_STANDARD][G.JSON_MAPPING.ADSERVER_TARGETING] ||
                    (u[G.JSON_MAPPING.BD_SETTING_STANDARD][G.JSON_MAPPING.ADSERVER_TARGETING] = [
                        r(a.BIDDER, "bidderCode"),
                        r(a.AD_ID, "adId"),
                        r(a.PRICE_BUCKET, l(c)),
                        r(a.SIZE, "size"),
                        r(a.DEAL, "dealId"),
                        r(a.SOURCE, "source"),
                        r(a.FORMAT, "mediaType"),
                        r(a.ADOMAIN, p()),
                    ]),
                "video" === e &&
                    ((i = u[G.JSON_MAPPING.BD_SETTING_STANDARD][G.JSON_MAPPING.ADSERVER_TARGETING]),
                    [a.UUID, a.CACHE_ID].forEach(function (t) {
                        void 0 ===
                            U()(i, function (e) {
                                return e.key === t;
                            }) && i.push(r(t, "videoCacheKey"));
                    }),
                    !B.b.getConfig("cache.url") ||
                        (t && !1 === P.deepAccess(u, "".concat(t, ".sendStandardTargeting"))) ||
                        ((o = Object(j.parseUrl)(B.b.getConfig("cache.url"))),
                        void 0 ===
                            U()(i, function (e) {
                                return e.key === a.CACHE_HOST;
                            }) &&
                            i.push(
                                r(a.CACHE_HOST, function (e) {
                                    return P.deepAccess(e, "adserverTargeting.".concat(a.CACHE_HOST)) ? e.adserverTargeting[a.CACHE_HOST] : o.hostname;
                                })
                            ))),
                u[G.JSON_MAPPING.BD_SETTING_STANDARD]
            );
        }
        function b(r, i, o) {
            var e = i[G.JSON_MAPPING.ADSERVER_TARGETING];
            return (
                (o.size = o.getSize()),
                P._each(e, function (e) {
                    var t = e.key,
                        n = e.val;
                    if ((r[t] && P.logWarn("The key: " + t + " is getting ovewritten"), P.isFn(n)))
                        try {
                            n = n(o);
                        } catch (e) {
                            P.logError("bidmanager", "ERROR", e);
                        }
                    ((void 0 === i.suppressEmptyKeys || !0 !== i.suppressEmptyKeys) && t !== G.TARGETING_KEYS.DEAL) || (!P.isEmptyStr(n) && null != n) ? (r[t] = n) : P.logInfo("suppressing empty key '" + t + "' from adserver targeting");
                }),
                r
            );
        }
        function ee(e, t) {
            return e[t.adUnitCode] || (e[t.adUnitCode] = { bids: [] }), e[t.adUnitCode].bids.push(t), e;
        }
    },
    34: function (e, t, n) {
        var r = n(29),
            i = n(76),
            o = n(15),
            a = n(55),
            c = Object.defineProperty;
        t.f = r
            ? c
            : function (e, t, n) {
                  if ((o(e), (t = a(t, !0)), o(n), i))
                      try {
                          return c(e, t, n);
                      } catch (e) {}
                  if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
                  return "value" in n && (e[t] = n.value), e;
              };
    },
    35: function (e, t, n) {
        "use strict";
        t.a = function (e, t) {
            return new r(e, t);
        };
        var i = n(0);
        function r(e, t) {
            var n = (t && t.src) || "client",
                r = e || 0;
            (this.bidderCode = (t && t.bidder) || ""),
                (this.width = 0),
                (this.height = 0),
                (this.statusMessage = (function () {
                    switch (r) {
                        case 0:
                            return "Pending";
                        case 1:
                            return "Bid available";
                        case 2:
                            return "Bid returned empty or error response";
                        case 3:
                            return "Bid timed out";
                    }
                })()),
                (this.adId = i.getUniqueIdentifierStr()),
                (this.requestId = t && t.bidId),
                (this.mediaType = "banner"),
                (this.source = n),
                (this.getStatusCode = function () {
                    return r;
                }),
                (this.getSize = function () {
                    return this.width + "x" + this.height;
                });
        }
    },
    36: function (e, t) {
        var n = (function () {
            return this;
        })();
        try {
            n = n || Function("return this")() || (0, eval)("this");
        } catch (e) {
            "object" == typeof window && (n = window);
        }
        e.exports = n;
    },
    37: function (e, t, n) {
        var r = n(17),
            i = n(93);
        e.exports = r
            ? i
            : function (e) {
                  return Set.prototype.values.call(e);
              };
    },
    378: function (e, t, n) {
        n(379);
        var r = n(52);
        e.exports = r("String", "includes");
    },
    379: function (e, t, n) {
        "use strict";
        var r = n(14),
            i = n(380),
            o = n(48);
        r(
            { target: "String", proto: !0, forced: !n(382)("includes") },
            {
                includes: function (e, t) {
                    return !!~String(o(this)).indexOf(i(e), 1 < arguments.length ? t : void 0);
                },
            }
        );
    },
    38: function (e, t, n) {
        "use strict";
        n.d(t, "f", function () {
            return o;
        }),
            n.d(t, "a", function () {
                return u;
            }),
            (t.h = function (e) {
                if (
                    e &&
                    e.type &&
                    (function (e) {
                        return !(!e || !a()(Object.keys(s), e)) || (Object(d.logError)("".concat(e, " nativeParam is not supported")), !1);
                    })(e.type)
                )
                    return s[e.type];
                return e;
            }),
            (t.g = function (t, e) {
                var n = Object(d.getBidRequest)(t.requestId, e);
                if (!n) return !1;
                if (!Object(d.deepAccess)(t, "native.clickUrl")) return !1;
                var r = n.nativeParams;
                if (!r) return !0;
                var i = Object.keys(r).filter(function (e) {
                        return r[e].required;
                    }),
                    o = Object.keys(t.native).filter(function (e) {
                        return t.native[e];
                    });
                return i.every(function (e) {
                    return a()(o, e);
                });
            }),
            (t.b = function (e, t) {
                var n;
                "click" === e.action ? (n = t.native && t.native.clickTrackers) : ((n = t.native && t.native.impressionTrackers), t.native && t.native.javascriptTrackers && Object(d.insertHtmlIntoIframe)(t.native.javascriptTrackers));
                return (n || []).forEach(d.triggerPixel), e.action;
            }),
            (t.e = function (o, a) {
                var c = {};
                Object(d.deepAccess)(a, "nativeParams.rendererUrl") ? (o.native.rendererUrl = p(a.nativeParams.rendererUrl)) : Object(d.deepAccess)(a, "nativeParams.adTemplate") && (o.native.adTemplate = p(a.nativeParams.adTemplate));
                var u = !1 !== Object(d.deepAccess)(a, "nativeParams.sendTargetingKeys"),
                    s = (function (e) {
                        var t = {};
                        Object(d.deepAccess)(e, "nativeParams.ext") &&
                            Object.keys(e.nativeParams.ext).forEach(function (e) {
                                t[e] = "hb_native_".concat(e);
                            });
                        return f(f({}, l.NATIVE_KEYS), t);
                    })(a),
                    e = f(f({}, o.native), o.native.ext);
                return (
                    delete e.ext,
                    Object.keys(e).forEach(function (e) {
                        var t,
                            n,
                            r = s[e],
                            i = p(o.native[e]) || p(Object(d.deepAccess)(o, "native.ext.".concat(e)));
                        "adTemplate" !== e &&
                            r &&
                            i &&
                            ("boolean" != typeof (t = Object(d.deepAccess)(a, "nativeParams.".concat(e, ".sendId"))) && (t = Object(d.deepAccess)(a, "nativeParams.ext.".concat(e, ".sendId"))),
                            t && (i = "".concat(r, ":").concat(o.adId)),
                            "boolean" != typeof (n = Object(d.deepAccess)(a, "nativeParams.".concat(e, ".sendTargetingKeys"))) && (n = Object(d.deepAccess)(a, "nativeParams.ext.".concat(e, ".sendTargetingKeys"))),
                            ("boolean" == typeof n ? n : u) && (c[r] = i));
                    }),
                    c
                );
            }),
            (t.d = function (e, r) {
                var i = { message: "assetResponse", adId: e.adId, assets: [] };
                r.native.hasOwnProperty("adTemplate") && (i.adTemplate = p(r.native.adTemplate));
                r.native.hasOwnProperty("rendererUrl") && (i.rendererUrl = p(r.native.rendererUrl));
                return (
                    e.assets.forEach(function (e) {
                        var t = Object(d.getKeyByValue)(l.NATIVE_KEYS, e),
                            n = p(r.native[t]);
                        i.assets.push({ key: t, value: n });
                    }),
                    i
                );
            }),
            (t.c = function (e, r) {
                var i = { message: "assetResponse", adId: e.adId, assets: [] };
                return (
                    Object.keys(r.native).forEach(function (n, e) {
                        var t;
                        "adTemplate" === n && r.native[n]
                            ? (i.adTemplate = p(r.native[n]))
                            : "rendererUrl" === n && r.native[n]
                            ? (i.rendererUrl = p(r.native[n]))
                            : "ext" === n
                            ? Object.keys(r.native[n]).forEach(function (e) {
                                  var t;
                                  r.native[n][e] && ((t = p(r.native[n][e])), i.assets.push({ key: e, value: t }));
                              })
                            : r.native[n] && l.NATIVE_KEYS.hasOwnProperty(n) && ((t = p(r.native[n])), i.assets.push({ key: n, value: t }));
                    }),
                    i
                );
            });
        var d = n(0),
            r = n(13),
            a = n.n(r);
        function i(e) {
            return (i =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function c(t, e) {
            var n,
                r = Object.keys(t);
            return (
                Object.getOwnPropertySymbols &&
                    ((n = Object.getOwnPropertySymbols(t)),
                    e &&
                        (n = n.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                    r.push.apply(r, n)),
                r
            );
        }
        function f(i) {
            for (var e = 1; e < arguments.length; e++) {
                var o = null != arguments[e] ? arguments[e] : {};
                e % 2
                    ? c(Object(o), !0).forEach(function (e) {
                          var t, n, r;
                          (t = i), (r = o[(n = e)]), n in t ? Object.defineProperty(t, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[n] = r);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o))
                    : c(Object(o)).forEach(function (e) {
                          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e));
                      });
            }
            return i;
        }
        var l = n(5),
            o = [],
            u = Object.keys(l.NATIVE_KEYS).map(function (e) {
                return l.NATIVE_KEYS[e];
            }),
            s = { image: { image: { required: !0 }, title: { required: !0 }, sponsoredBy: { required: !0 }, clickUrl: { required: !0 }, body: { required: !1 }, icon: { required: !1 } } };
        function p(e) {
            return "object" === i(e) && e.url ? e.url : e;
        }
    },
    380: function (e, t, n) {
        var r = n(381);
        e.exports = function (e) {
            if (r(e)) throw TypeError("The method doesn't accept regular expressions");
            return e;
        };
    },
    381: function (e, t, n) {
        var r = n(31),
            i = n(47),
            o = n(22)("match");
        e.exports = function (e) {
            var t;
            return r(e) && (void 0 !== (t = e[o]) ? !!t : "RegExp" == i(e));
        };
    },
    382: function (e, t, n) {
        var r = n(22)("match");
        e.exports = function (t) {
            var n = /./;
            try {
                "/./"[t](n);
            } catch (e) {
                try {
                    return (n[r] = !1), "/./"[t](n);
                } catch (e) {}
            }
            return !1;
        };
    },
    39: function (e, t, n) {
        "use strict";
        t.a = function (r, e, t) {
            if (!e || !r) return void o.logError("cannot load external script without url and moduleCode");
            if (!i()(c, e)) return void o.logError("".concat(e, " not whitelisted for loading external JavaScript"));
            if (a[r]) return t && "function" == typeof t && (a[r].loaded ? t() : a[r].callbacks.push(t)), a[r].tag;
            (a[r] = { loaded: !1, tag: null, callbacks: [] }), t && "function" == typeof t && a[r].callbacks.push(t);
            return (
                o.logWarn("module ".concat(e, " is loading external JavaScript")),
                (function (e, t) {
                    var n = document.createElement("script");
                    (n.type = "text/javascript"),
                        (n.async = !0),
                        (a[r].tag = n).readyState
                            ? (n.onreadystatechange = function () {
                                  ("loaded" !== n.readyState && "complete" !== n.readyState) || ((n.onreadystatechange = null), t());
                              })
                            : (n.onload = function () {
                                  t();
                              });
                    return (n.src = e), o.insertElement(n), n;
                })(r, function () {
                    a[r].loaded = !0;
                    try {
                        for (var e = 0; e < a[r].callbacks.length; e++) a[r].callbacks[e]();
                    } catch (e) {
                        o.logError("Error executing callback", "adloader.js:loadExternalScript", e);
                    }
                })
            );
        };
        var r = n(13),
            i = n.n(r),
            o = n(0),
            a = {},
            c = ["adloox", "criteo", "localhost", "adagio", "browsi"];
    },
    4: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return r;
        }),
            (t.b = i);
        var l = n(3);
        function p() {
            return (p =
                Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                    }
                    return e;
                }).apply(this, arguments);
        }
        function g(e) {
            return (g =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        var b = n(0),
            v = 4,
            r = i();
        function i() {
            var s = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 3e3,
                e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                d = e.request,
                f = e.done;
            return function (e, t, n) {
                var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
                try {
                    var i,
                        o = r.method || (n ? "POST" : "GET"),
                        a = document.createElement("a");
                    a.href = e;
                    var c,
                        u =
                            "object" === g(t) && null !== t
                                ? t
                                : {
                                      success: function () {
                                          b.logMessage("xhr success");
                                      },
                                      error: function (e) {
                                          b.logError("xhr error", null, e);
                                      },
                                  };
                    "function" == typeof t && (u.success = t),
                        ((i = new window.XMLHttpRequest()).onreadystatechange = function () {
                            var e;
                            i.readyState === v && ("function" == typeof f && f(a.origin), (200 <= (e = i.status) && e < 300) || 304 === e ? u.success(i.responseText, i) : u.error(i.statusText, i));
                        }),
                        l.b.getConfig("disableAjaxTimeout") ||
                            (i.ontimeout = function () {
                                b.logError("  xhr timeout after ", i.timeout, "ms");
                            }),
                        "GET" === o && n && (p((c = b.parseUrl(e, r)).search, n), (e = b.buildUrl(c))),
                        i.open(o, e, !0),
                        l.b.getConfig("disableAjaxTimeout") || (i.timeout = s),
                        r.withCredentials && (i.withCredentials = !0),
                        b._each(r.customHeaders, function (e, t) {
                            i.setRequestHeader(t, e);
                        }),
                        r.preflight && i.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                        i.setRequestHeader("Content-Type", r.contentType || "text/plain"),
                        "function" == typeof d && d(a.origin),
                        "POST" === o && n ? i.send(n) : i.send();
                } catch (e) {
                    b.logError("xhr construction", e);
                }
            };
        }
    },
    40: function (e, t) {
        e.exports = {};
    },
    41: function (e, t, n) {
        var i = n(15),
            o = n(21),
            a = n(22)("species");
        e.exports = function (e, t) {
            var n,
                r = i(e).constructor;
            return void 0 === r || null == (n = i(r)[a]) ? t : o(n);
        };
    },
    42: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return d;
        }),
            n.d(t, "b", function () {
                return N;
            }),
            (t.c = P),
            n.d(t, "d", function () {
                return l;
            });
        var T = n(0),
            I = n(3),
            C = n(38),
            r = n(23),
            i = n(96),
            o = n(2),
            a = n(11),
            c = n(13),
            j = n.n(c),
            u = n(10),
            w = n.n(u);
        function _() {
            return (_ =
                Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                    }
                    return e;
                }).apply(this, arguments);
        }
        function B(e, t, n) {
            return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
        }
        function U(e) {
            return (
                (function (e) {
                    if (Array.isArray(e)) return s(e);
                })(e) ||
                (function (e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
                })(e) ||
                (function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return s(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t);
                })(e) ||
                (function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                })()
            );
        }
        function s(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        var x = n(0),
            R = n(5),
            D = [],
            k = Object.keys(R.TARGETING_KEYS).map(function (e) {
                return R.TARGETING_KEYS[e];
            }),
            d = {
                isBidNotExpired: function (e) {
                    return e.responseTimestamp + 1e3 * e.ttl - 1e3 > Object(T.timestamp)();
                },
                isUnusedBid: function (e) {
                    return e && ((e.status && !j()([R.BID_STATUS.RENDERED], e.status)) || !e.status);
                },
            },
            N = Object(a.b)("sync", function (e, r) {
                var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
                if (3 < arguments.length && void 0 !== arguments[3] && arguments[3]) return e;
                var o = [],
                    a = I.b.getConfig("sendBidsControl.dealPrioritization"),
                    c = Object(T.groupBy)(e, "adUnitCode");
                return (
                    Object.keys(c).forEach(function (e) {
                        var t = [],
                            n = Object(T.groupBy)(c[e], "bidderCode");
                        Object.keys(n).forEach(function (e) {
                            return t.push(n[e].reduce(r));
                        }),
                            0 < i
                                ? ((t = a
                                      ? t.sort(P(!0))
                                      : t.sort(function (e, t) {
                                            return t.cpm - e.cpm;
                                        })),
                                  o.push.apply(o, U(t.slice(0, i))))
                                : o.push.apply(o, U(t));
                    }),
                    o
                );
            });
        function P() {
            var n = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
            return function (e, t) {
                return void 0 !== e.adserverTargeting.hb_deal && void 0 === t.adserverTargeting.hb_deal
                    ? -1
                    : void 0 === e.adserverTargeting.hb_deal && void 0 !== t.adserverTargeting.hb_deal
                    ? 1
                    : n
                    ? t.cpm - e.cpm
                    : t.adserverTargeting.hb_pb - e.adserverTargeting.hb_pb;
            };
        }
        var M,
            q,
            f,
            l =
                ((M = r.a),
                (f = {}),
                ((q = {}).setLatestAuctionForAdUnit = function (e, t) {
                    f[e] = t;
                }),
                (q.resetPresetTargeting = function (e, t) {
                    var n, i;
                    Object(T.isGptPubadsDefined)() &&
                        ((n = W(e)),
                        (i = M.getAdUnits().filter(function (e) {
                            return j()(n, e.code);
                        })),
                        window.googletag
                            .pubads()
                            .getSlots()
                            .forEach(function (n) {
                                var r = x.isFn(t) && t(n);
                                D.forEach(function (t) {
                                    i.forEach(function (e) {
                                        (e.code === n.getAdUnitPath() || e.code === n.getSlotElementId() || (x.isFn(r) && r(e.code))) && n.setTargeting(t, null);
                                    });
                                });
                            }));
                }),
                (q.resetPresetTargetingAST = function (e) {
                    W(e).forEach(function (e) {
                        var t,
                            n,
                            r = window.apntag.getTag(e);
                        r &&
                            r.keywords &&
                            ((t = Object.keys(r.keywords)),
                            (n = {}),
                            t.forEach(function (e) {
                                j()(D, e.toLowerCase()) || (n[e] = r.keywords[e]);
                            }),
                            window.apntag.modifyTag(e, { keywords: n }));
                    });
                }),
                (q.getAllTargeting = function (e) {
                    var t,
                        n,
                        r,
                        i,
                        o,
                        a,
                        c,
                        u,
                        s,
                        d,
                        f,
                        l,
                        p,
                        g = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : L(),
                        b = W(e),
                        v =
                            ((d = b),
                            (f = g),
                            (l = q.getWinningBids(d, f)),
                            (p = F()),
                            (l = l.map(function (o) {
                                return B(
                                    {},
                                    o.adUnitCode,
                                    Object.keys(o.adserverTargeting)
                                        .filter(function (e) {
                                            return void 0 === o.sendStandardTargeting || o.sendStandardTargeting || -1 === p.indexOf(e);
                                        })
                                        .reduce(function (e, t) {
                                            var n = [o.adserverTargeting[t]],
                                                r = B({}, t.substring(0, 20), n);
                                            if (t !== R.TARGETING_KEYS.DEAL) return [].concat(U(e), [r]);
                                            var i = B({}, "".concat(t, "_").concat(o.bidderCode).substring(0, 20), n);
                                            return [].concat(U(e), [r, i]);
                                        }, [])
                                );
                            }))
                                .concat(
                                    ((s = b),
                                    g
                                        .filter(function (e) {
                                            return j()(s, e.adUnitCode);
                                        })
                                        .map(function (e) {
                                            return _({}, e);
                                        })
                                        .reduce(z, [])
                                        .map(V)
                                        .filter(function (e) {
                                            return e;
                                        }))
                                )
                                .concat(
                                    I.b.getConfig("enableSendAllBids")
                                        ? ((n = b),
                                          (r = g),
                                          (i = k.concat(C.a)),
                                          (o = I.b.getConfig("sendBidsControl.bidLimit")),
                                          (a = N(r, T.getHighestCpm, o)),
                                          (c = I.b.getConfig("targetingControls.allowSendAllBidsTargetingKeys")),
                                          (u = c
                                              ? c.map(function (e) {
                                                    return R.TARGETING_KEYS[e];
                                                })
                                              : i),
                                          a
                                              .map(function (t) {
                                                  if (G(t, n))
                                                      return B(
                                                          {},
                                                          t.adUnitCode,
                                                          H(
                                                              t,
                                                              i.filter(function (e) {
                                                                  return void 0 !== t.adserverTargeting[e] && -1 !== u.indexOf(e);
                                                              })
                                                          )
                                                      );
                                              })
                                              .filter(function (e) {
                                                  return e;
                                              }))
                                        : (function (e, t) {
                                              if (!0 !== I.b.getConfig("targetingControls.alwaysIncludeDeals")) return [];
                                              var n = k.concat(C.a);
                                              return N(t, T.getHighestCpm)
                                                  .map(function (t) {
                                                      if (t.dealId && G(t, e))
                                                          return B(
                                                              {},
                                                              t.adUnitCode,
                                                              H(
                                                                  t,
                                                                  n.filter(function (e) {
                                                                      return void 0 !== t.adserverTargeting[e];
                                                                  })
                                                              )
                                                          );
                                                  })
                                                  .filter(function (e) {
                                                      return e;
                                                  });
                                          })(b, g)
                                )
                                .concat(
                                    ((t = b),
                                    M.getAdUnits()
                                        .filter(function (e) {
                                            return j()(t, e.code) && y(e);
                                        })
                                        .map(function (e) {
                                            return B(
                                                {},
                                                e.code,
                                                ((t = y(e)),
                                                Object.keys(t).map(function (e) {
                                                    return B({}, e, x.isArray(t[e]) ? t[e] : t[e].split(","));
                                                }))
                                            );
                                            var t;
                                        }))
                                ));
                    function y(e) {
                        return Object(T.deepAccess)(e, R.JSON_MAPPING.ADSERVER_TARGETING);
                    }
                    v.map(function (t) {
                        Object.keys(t).map(function (e) {
                            t[e].map(function (e) {
                                -1 === D.indexOf(Object.keys(e)[0]) && (D = Object.keys(e).concat(D));
                            });
                        });
                    });
                    var h = Object.keys(_({}, R.DEFAULT_TARGETING_KEYS, R.NATIVE_KEYS)),
                        m = I.b.getConfig("targetingControls.allowTargetingKeys") || h;
                    Array.isArray(m) &&
                        0 < m.length &&
                        (v = (function (e, r) {
                            var i = _({}, R.TARGETING_KEYS, R.NATIVE_KEYS),
                                o = Object.keys(i),
                                a = {};
                            Object(T.logInfo)(
                                "allowTargetingKeys - allowed keys [ ".concat(
                                    r
                                        .map(function (e) {
                                            return i[e];
                                        })
                                        .join(", "),
                                    " ]"
                                )
                            ),
                                e.map(function (e) {
                                    var t = Object.keys(e)[0],
                                        n = e[t].filter(function (e) {
                                            var n = Object.keys(e)[0],
                                                t =
                                                    0 ===
                                                        o.filter(function (e) {
                                                            return 0 === n.indexOf(i[e]);
                                                        }).length ||
                                                    w()(r, function (e) {
                                                        var t = i[e];
                                                        return 0 === n.indexOf(t);
                                                    });
                                            return (a[n] = !t), t;
                                        });
                                    e[t] = n;
                                });
                            var t = Object.keys(a).filter(function (e) {
                                return a[e];
                            });
                            return (
                                Object(T.logInfo)("allowTargetingKeys - removed keys [ ".concat(t.join(", "), " ]")),
                                e.filter(function (e) {
                                    return 0 < e[Object.keys(e)[0]].length;
                                })
                            );
                        })(v, m)),
                        (v = v
                            .map(function (e) {
                                return B(
                                    {},
                                    Object.keys(e)[0],
                                    e[Object.keys(e)[0]]
                                        .map(function (e) {
                                            return B({}, Object.keys(e)[0], e[Object.keys(e)[0]].join(", "));
                                        })
                                        .reduce(function (e, t) {
                                            return _(t, e);
                                        }, {})
                                );
                            })
                            .reduce(function (e, t) {
                                var n = Object.keys(t)[0];
                                return (e[n] = _({}, e[n], t[n])), e;
                            }, {}));
                    var S,
                        A,
                        E,
                        O = I.b.getConfig("targetingControls.auctionKeyMaxChars");
                    return (
                        O &&
                            (Object(T.logInfo)("Detected 'targetingControls.auctionKeyMaxChars' was active for this auction; set with a limit of ".concat(O, " characters.  Running checks on auction keys...")),
                            (S = v),
                            (A = O),
                            (E = Object(T.deepClone)(S)),
                            (v = Object.keys(E)
                                .map(function (e) {
                                    return { adUnitCode: e, adserverTargeting: E[e] };
                                })
                                .sort(P())
                                .reduce(function (e, t, n, r) {
                                    var i,
                                        o =
                                            ((i = t.adserverTargeting),
                                            Object.keys(i).reduce(function (e, t) {
                                                return e + "".concat(t, "%3d").concat(encodeURIComponent(i[t]), "%26");
                                            }, ""));
                                    n + 1 === r.length && (o = o.slice(0, -3));
                                    var a = t.adUnitCode,
                                        c = o.length;
                                    return (
                                        c <= A
                                            ? ((A -= c), Object(T.logInfo)("AdUnit '".concat(a, "' auction keys comprised of ").concat(c, " characters.  Deducted from running threshold; new limit is ").concat(A), E[a]), (e[a] = E[a]))
                                            : Object(T.logWarn)(
                                                  "The following keys for adUnitCode '"
                                                      .concat(a, "' exceeded the current limit of the 'auctionKeyMaxChars' setting.\nThe key-set size was ")
                                                      .concat(c, ", the current allotted amount was ")
                                                      .concat(A, ".\n"),
                                                  E[a]
                                              ),
                                        n + 1 === r.length &&
                                            0 === Object.keys(e).length &&
                                            Object(T.logError)("No auction targeting keys were permitted due to the setting in setConfig(targetingControls.auctionKeyMaxChars).  Please review setup and consider adjusting."),
                                        e
                                    );
                                }, {}))),
                        b.forEach(function (e) {
                            v[e] || (v[e] = {});
                        }),
                        v
                    );
                }),
                (q.setTargetingForGPT = function (i, e) {
                    window.googletag
                        .pubads()
                        .getSlots()
                        .forEach(function (r) {
                            Object.keys(i)
                                .filter((e || Object(T.isAdUnitCodeMatchingSlot))(r))
                                .forEach(function (n) {
                                    return Object.keys(i[n]).forEach(function (t) {
                                        var e = i[n][t];
                                        "string" == typeof e && (e = e.split(",")),
                                            (e = 1 < e.length ? [e] : e)
                                                .map(function (e) {
                                                    return x.logMessage("Attempting to set key value for slot: ".concat(r.getSlotElementId(), " key: ").concat(t, " value: ").concat(e)), e;
                                                })
                                                .forEach(function (e) {
                                                    r.setTargeting(t, e);
                                                });
                                    });
                                });
                        });
                }),
                (q.getWinningBids = function (e) {
                    var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : L(),
                        t = W(e);
                    return n
                        .filter(function (e) {
                            return j()(t, e.adUnitCode);
                        })
                        .filter(function (e) {
                            return 0 < e.cpm;
                        })
                        .map(function (e) {
                            return e.adUnitCode;
                        })
                        .filter(T.uniques)
                        .map(function (t) {
                            return n
                                .filter(function (e) {
                                    return e.adUnitCode === t ? e : null;
                                })
                                .reduce(T.getHighestCpm);
                        });
                }),
                (q.setTargetingForAst = function (e) {
                    var r = q.getAllTargeting(e);
                    try {
                        q.resetPresetTargetingAST(e);
                    } catch (e) {
                        x.logError("unable to reset targeting for AST" + e);
                    }
                    Object.keys(r).forEach(function (n) {
                        return Object.keys(r[n]).forEach(function (e) {
                            var t;
                            x.logMessage("Attempting to set targeting for targetId: ".concat(n, " key: ").concat(e, " value: ").concat(r[n][e])),
                                (x.isStr(r[n][e]) || x.isArray(r[n][e])) && ((t = {}), e.search(/pt[0-9]/) < 0 ? (t[e.toUpperCase()] = r[n][e]) : (t[e] = r[n][e]), window.apntag.setKeywords(n, t, { overrideKeyValue: !0 }));
                        });
                    });
                }),
                (q.isApntagDefined = function () {
                    if (window.apntag && x.isFn(window.apntag.setKeywords)) return !0;
                }),
                q);
        function G(e, t) {
            return e.adserverTargeting && t && ((x.isArray(t) && j()(t, e.adUnitCode)) || ("string" == typeof t && e.adUnitCode === t));
        }
        function W(e) {
            return "string" == typeof e ? [e] : x.isArray(e) ? e : M.getAdUnitCodes() || [];
        }
        function L() {
            var e = M.getBidsReceived();
            return (
                I.b.getConfig("useBidCache") ||
                    (e = e.filter(function (e) {
                        return f[e.adUnitCode] === e.auctionId;
                    })),
                (e = e
                    .filter(function (e) {
                        return Object(T.deepAccess)(e, "video.context") !== o.a;
                    })
                    .filter(function (e) {
                        return "banner" !== e.mediaType || Object(i.c)([e.width, e.height]);
                    })
                    .filter(d.isUnusedBid)
                    .filter(d.isBidNotExpired)),
                N(e, T.getOldestHighestCpmBid)
            );
        }
        function F() {
            return M.getStandardBidderAdServerTargeting()
                .map(function (e) {
                    return e.key;
                })
                .concat(k)
                .filter(T.uniques);
        }
        function z(r, i, e, t) {
            return (
                Object.keys(i.adserverTargeting)
                    .filter(p())
                    .forEach(function (e) {
                        var t, n;
                        r.length &&
                            r
                                .filter(
                                    ((n = e),
                                    function (e) {
                                        return e.adUnitCode === i.adUnitCode && e.adserverTargeting[n];
                                    })
                                )
                                .forEach(
                                    ((t = e),
                                    function (e) {
                                        x.isArray(e.adserverTargeting[t]) || (e.adserverTargeting[t] = [e.adserverTargeting[t]]),
                                            (e.adserverTargeting[t] = e.adserverTargeting[t].concat(i.adserverTargeting[t]).filter(T.uniques)),
                                            delete i.adserverTargeting[t];
                                    })
                                );
                    }),
                r.push(i),
                r
            );
        }
        function p() {
            var t = F().concat(C.a);
            return function (e) {
                return -1 === t.indexOf(e);
            };
        }
        function V(t) {
            return B(
                {},
                t.adUnitCode,
                Object.keys(t.adserverTargeting)
                    .filter(p())
                    .map(function (e) {
                        return B({}, e.substring(0, 20), [t.adserverTargeting[e]]);
                    })
            );
        }
        function H(t, e) {
            return e.map(function (e) {
                return B({}, "".concat(e, "_").concat(t.bidderCode).substring(0, 20), [t.adserverTargeting[e]]);
            });
        }
    },
    43: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return S;
        });
        var a = n(0),
            r = n(3),
            i = n(13),
            o = n.n(i),
            c = n(7);
        function u(e, t) {
            return (
                (function (e) {
                    if (Array.isArray(e)) return e;
                })(e) ||
                (function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        (i = !0), (o = e);
                    } finally {
                        try {
                            r || null == c.return || c.return();
                        } finally {
                            if (i) throw o;
                        }
                    }
                    return n;
                })(e, t) ||
                (function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return s(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t);
                })(e, t) ||
                (function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                })()
            );
        }
        function s(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        function d() {
            return (d =
                Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                    }
                    return e;
                }).apply(this, arguments);
        }
        r.b.setDefaults({ userSync: a.deepClone({ syncEnabled: !0, filterSettings: { image: { bidders: "*", filter: "include" } }, syncsPerBidder: 5, syncDelay: 3e3, auctionDelay: 0 }) });
        var f = Object(c.a)("usersync");
        var l,
            p,
            g,
            b,
            v,
            y,
            h,
            m = !a.isSafariBrowser() && f.cookiesAreEnabled(),
            S =
                ((l = { config: r.b.getConfig("userSync"), browserSupportsCookies: m }),
                (p = {}),
                (g = A()),
                (b = new Set()),
                (y = { image: !0, iframe: !(v = {}) }),
                (h = l.config),
                r.b.getConfig("userSync", function (e) {
                    var t;
                    e.userSync && ((t = e.userSync.filterSettings), a.isPlainObject(t) && (t.image || t.all || (e.userSync.filterSettings.image = { bidders: "*", filter: "include" }))), (h = d(h, e.userSync));
                }),
                (p.registerSync = function (e, t, n) {
                    return b.has(t)
                        ? a.logMessage('already fired syncs for "'.concat(t, '", ignoring registerSync call'))
                        : h.syncEnabled && a.isArray(g[e])
                        ? t
                            ? 0 !== h.syncsPerBidder && Number(v[t]) >= h.syncsPerBidder
                                ? a.logWarn('Number of user syncs exceeded for "'.concat(t, '"'))
                                : p.canBidderRegisterSync(e, t)
                                ? (g[e].push([t, n]), (r = v)[(i = t)] ? (r[i] += 1) : (r[i] = 1), void (v = r))
                                : a.logWarn('Bidder "'.concat(t, '" not permitted to register their "').concat(e, '" userSync pixels.'))
                            : a.logWarn("Bidder is required for registering sync")
                        : a.logWarn('User sync type "'.concat(e, '" not supported'));
                    var r, i;
                }),
                (p.syncUsers = function () {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
                    if (e) return setTimeout(E, Number(e));
                    E();
                }),
                (p.triggerUserSyncs = function () {
                    h.enableOverride && p.syncUsers();
                }),
                (p.canBidderRegisterSync = function (e, t) {
                    return !h.filterSettings || !T(e, t);
                }),
                p);
        function A() {
            return { image: [], iframe: [] };
        }
        function E() {
            if (h.syncEnabled && l.browserSupportsCookies) {
                try {
                    !(function () {
                        if (!y.image) return;
                        O(g.image, function (e) {
                            var t = u(e, 2),
                                n = t[0],
                                r = t[1];
                            a.logMessage("Invoking image pixel user sync for bidder: ".concat(n)), a.triggerPixel(r);
                        });
                    })(),
                        (function () {
                            if (!y.iframe) return;
                            O(g.iframe, function (e) {
                                var t = u(e, 2),
                                    n = t[0],
                                    r = t[1];
                                a.logMessage("Invoking iframe user sync for bidder: ".concat(n)), a.insertUserSyncIframe(r);
                            });
                        })();
                } catch (e) {
                    return a.logError("Error firing user syncs", e);
                }
                g = A();
            }
        }
        function O(e, t) {
            a.shuffle(e).forEach(function (e) {
                t(e), b.add(e[0]);
            });
        }
        function T(e, t) {
            var n = h.filterSettings;
            if (
                (function (e, t) {
                    if (e.all && e[t])
                        return a.logWarn('Detected presence of the "filterSettings.all" and "filterSettings.'.concat(t, '" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.')), !1;
                    var n = e.all ? e.all : e[t],
                        r = e.all ? "all" : t;
                    if (!n) return !1;
                    var i = n.filter,
                        o = n.bidders;
                    if (i && "include" !== i && "exclude" !== i) return a.logWarn('UserSync "filterSettings.'.concat(r, ".filter\" setting '").concat(i, "' is not a valid option; use either 'include' or 'exclude'.")), !1;
                    return (
                        !!(
                            "*" === o ||
                            (Array.isArray(o) &&
                                0 < o.length &&
                                o.every(function (e) {
                                    return a.isStr(e) && "*" !== e;
                                }))
                        ) || (a.logWarn('Detected an invalid setup in userSync "filterSettings.'.concat(r, ".bidders\"; use either '*' (to represent all bidders) or an array of bidders.")), !1)
                    );
                })(n, e)
            ) {
                y[e] = !0;
                var r = n.all ? n.all : n[e],
                    i = "*" === r.bidders ? [t] : r.bidders;
                return {
                    include: function (e, t) {
                        return !o()(e, t);
                    },
                    exclude: function (e, t) {
                        return o()(e, t);
                    },
                }[r.filter || "include"](i, t);
            }
            return !y[e];
        }
    },
    44: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return d;
        }),
            n.d(t, "b", function () {
                return h;
            });
        var r = n(10),
            v = n.n(r),
            i = n(0),
            y = 2,
            o = { buckets: [{ max: 5, increment: 0.5 }] },
            a = { buckets: [{ max: 20, increment: 0.1 }] },
            c = { buckets: [{ max: 20, increment: 0.01 }] },
            u = {
                buckets: [
                    { max: 3, increment: 0.01 },
                    { max: 8, increment: 0.05 },
                    { max: 20, increment: 0.5 },
                ],
            },
            s = {
                buckets: [
                    { max: 5, increment: 0.05 },
                    { max: 10, increment: 0.1 },
                    { max: 20, increment: 0.5 },
                ],
            };
        function d(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1,
                r = parseFloat(e);
            return (
                isNaN(r) && (r = ""),
                { low: "" === r ? "" : f(e, o, n), med: "" === r ? "" : f(e, a, n), high: "" === r ? "" : f(e, c, n), auto: "" === r ? "" : f(e, s, n), dense: "" === r ? "" : f(e, u, n), custom: "" === r ? "" : f(e, t, n) }
            );
        }
        function f(n, e, r) {
            var i = "";
            if (!h(e)) return i;
            var t,
                o,
                a,
                c,
                u,
                s,
                d,
                f,
                l,
                p = e.buckets.reduce(
                    function (e, t) {
                        return e.max > t.max ? e : t;
                    },
                    { max: 0 }
                ),
                g = 0,
                b = v()(e.buckets, function (e) {
                    if (n > p.max * r) {
                        var t = e.precision;
                        void 0 === t && (t = y), (i = (e.max * r).toFixed(t));
                    } else {
                        if (n <= e.max * r && g * r <= n) return (e.min = g), e;
                        g = e.max;
                    }
                });
            return (
                b &&
                    ((t = n),
                    (a = r),
                    (c = void 0 !== (o = b).precision ? o.precision : y),
                    (u = o.increment * a),
                    (s = o.min * a),
                    (d = Math.pow(10, c + 2)),
                    (f = (t * d - s * d) / (u * d)),
                    (l = Math.floor(f) * u + s),
                    (i = (l = Number(l.toFixed(10))).toFixed(c))),
                i
            );
        }
        function h(e) {
            if (i.isEmpty(e) || !e.buckets || !Array.isArray(e.buckets)) return !1;
            var t = !0;
            return (
                e.buckets.forEach(function (e) {
                    (e.max && e.increment) || (t = !1);
                }),
                t
            );
        }
    },
    45: function (e, t) {
        e.exports = function (e, t) {
            return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t };
        };
    },
    46: function (e, t, n) {
        var r = n(75),
            i = n(48);
        e.exports = function (e) {
            return r(i(e));
        };
    },
    47: function (e, t) {
        var n = {}.toString;
        e.exports = function (e) {
            return n.call(e).slice(8, -1);
        };
    },
    48: function (e, t) {
        e.exports = function (e) {
            if (null == e) throw TypeError("Can't call method on " + e);
            return e;
        };
    },
    49: function (e, t) {
        e.exports = {};
    },
    5: function (e, t) {
        e.exports = {
            JSON_MAPPING: { PL_CODE: "code", PL_SIZE: "sizes", PL_BIDS: "bids", BD_BIDDER: "bidder", BD_ID: "paramsd", BD_PL_ID: "placementId", ADSERVER_TARGETING: "adserverTargeting", BD_SETTING_STANDARD: "standard" },
            DEBUG_MODE: "pbjs_debug",
            STATUS: { GOOD: 1, NO_BID: 2 },
            CB: { TYPE: { ALL_BIDS_BACK: "allRequestedBidsBack", AD_UNIT_BIDS_BACK: "adUnitBidsBack", BID_WON: "bidWon", REQUEST_BIDS: "requestBids" } },
            EVENTS: {
                AUCTION_INIT: "auctionInit",
                AUCTION_END: "auctionEnd",
                BID_ADJUSTMENT: "bidAdjustment",
                BID_TIMEOUT: "bidTimeout",
                BID_REQUESTED: "bidRequested",
                BID_RESPONSE: "bidResponse",
                NO_BID: "noBid",
                BID_WON: "bidWon",
                BIDDER_DONE: "bidderDone",
                SET_TARGETING: "setTargeting",
                BEFORE_REQUEST_BIDS: "beforeRequestBids",
                REQUEST_BIDS: "requestBids",
                ADD_AD_UNITS: "addAdUnits",
                AD_RENDER_FAILED: "adRenderFailed",
                TCF2_ENFORCEMENT: "tcf2Enforcement",
                AUCTION_DEBUG: "auctionDebug",
                BID_VIEWABLE: "bidViewable",
                STALE_RENDER: "staleRender",
            },
            AD_RENDER_FAILED_REASON: { PREVENT_WRITING_ON_MAIN_DOCUMENT: "preventWritingOnMainDocument", NO_AD: "noAd", EXCEPTION: "exception", CANNOT_FIND_AD: "cannotFindAd", MISSING_DOC_OR_ADID: "missingDocOrAdid" },
            EVENT_ID_PATHS: { bidWon: "adUnitCode" },
            GRANULARITY_OPTIONS: { LOW: "low", MEDIUM: "medium", HIGH: "high", AUTO: "auto", DENSE: "dense", CUSTOM: "custom" },
            TARGETING_KEYS: {
                BIDDER: "hb_bidder",
                AD_ID: "hb_adid",
                PRICE_BUCKET: "hb_pb",
                SIZE: "hb_size",
                DEAL: "hb_deal",
                SOURCE: "hb_source",
                FORMAT: "hb_format",
                UUID: "hb_uuid",
                CACHE_ID: "hb_cache_id",
                CACHE_HOST: "hb_cache_host",
                ADOMAIN: "hb_adomain",
            },
            DEFAULT_TARGETING_KEYS: {
                BIDDER: "hb_bidder",
                AD_ID: "hb_adid",
                PRICE_BUCKET: "hb_pb",
                SIZE: "hb_size",
                DEAL: "hb_deal",
                SOURCE: "hb_source",
                FORMAT: "hb_format",
                UUID: "hb_uuid",
                CACHE_ID: "hb_cache_id",
                CACHE_HOST: "hb_cache_host",
            },
            NATIVE_KEYS: {
                title: "hb_native_title",
                body: "hb_native_body",
                body2: "hb_native_body2",
                privacyLink: "hb_native_privacy",
                privacyIcon: "hb_native_privicon",
                sponsoredBy: "hb_native_brand",
                image: "hb_native_image",
                icon: "hb_native_icon",
                clickUrl: "hb_native_linkurl",
                displayUrl: "hb_native_displayurl",
                cta: "hb_native_cta",
                rating: "hb_native_rating",
                address: "hb_native_address",
                downloads: "hb_native_downloads",
                likes: "hb_native_likes",
                phone: "hb_native_phone",
                price: "hb_native_price",
                salePrice: "hb_native_saleprice",
                rendererUrl: "hb_renderer_url",
                adTemplate: "hb_adTemplate",
            },
            S2S: { SRC: "s2s", DEFAULT_ENDPOINT: "https://prebid.localhost/pbs/v1/openrtb2/auction", SYNCED_BIDDERS_KEY: "pbjsSyncs" },
            BID_STATUS: { BID_TARGETING_SET: "targetingSet", RENDERED: "rendered", BID_REJECTED: "bidRejected" },
        };
    },
    50: function (e, t, n) {
        var r = n(58),
            i = Math.min;
        e.exports = function (e) {
            return 0 < e ? i(r(e), 9007199254740991) : 0;
        };
    },
    51: function (e, t) {
        e.exports = function () {};
    },
    52: function (e, t, n) {
        var r = n(28);
        e.exports = r;
    },
    53: function (e, t) {
        e.exports = {};
    },
    54: function (e, t, n) {
        var r,
            i,
            o,
            a,
            c,
            u,
            s,
            d,
            f = n(117),
            l = n(26),
            p = n(31),
            g = n(32),
            b = n(27),
            v = n(65),
            y = n(53),
            h = l.WeakMap;
        (s = f
            ? ((r = new h()),
              (i = r.get),
              (o = r.has),
              (a = r.set),
              (c = function (e, t) {
                  return a.call(r, e, t), t;
              }),
              (u = function (e) {
                  return i.call(r, e) || {};
              }),
              function (e) {
                  return o.call(r, e);
              })
            : ((y[(d = v("state"))] = !0),
              (c = function (e, t) {
                  return g(e, d, t), t;
              }),
              (u = function (e) {
                  return b(e, d) ? e[d] : {};
              }),
              function (e) {
                  return b(e, d);
              })),
            (e.exports = {
                set: c,
                get: u,
                has: s,
                enforce: function (e) {
                    return s(e) ? u(e) : c(e, {});
                },
                getterFor: function (n) {
                    return function (e) {
                        var t;
                        if (!p(e) || (t = u(e)).type !== n) throw TypeError("Incompatible receiver, " + n + " required");
                        return t;
                    };
                },
            });
    },
    55: function (e, t, n) {
        var i = n(31);
        e.exports = function (e, t) {
            if (!i(e)) return e;
            var n, r;
            if (t && "function" == typeof (n = e.toString) && !i((r = n.call(e)))) return r;
            if ("function" == typeof (n = e.valueOf) && !i((r = n.call(e)))) return r;
            if (!t && "function" == typeof (n = e.toString) && !i((r = n.call(e)))) return r;
            throw TypeError("Can't convert object to primitive value");
        };
    },
    56: function (e, t, n) {
        function r(p) {
            var g = 1 == p,
                b = 2 == p,
                v = 3 == p,
                y = 4 == p,
                h = 6 == p,
                m = 5 == p || h;
            return function (e, t, n, r) {
                for (var i, o, a = E(e), c = A(a), u = S(t, n, 3), s = O(c.length), d = 0, f = r || T, l = g ? f(e, s) : b ? f(e, 0) : void 0; d < s; d++)
                    if ((m || d in c) && ((o = u((i = c[d]), d, a)), p))
                        if (g) l[d] = o;
                        else if (o)
                            switch (p) {
                                case 3:
                                    return !0;
                                case 5:
                                    return i;
                                case 6:
                                    return d;
                                case 2:
                                    I.call(l, i);
                            }
                        else if (y) return !1;
                return h ? -1 : v || y ? y : l;
            };
        }
        var S = n(25),
            A = n(75),
            E = n(57),
            O = n(50),
            T = n(105),
            I = [].push;
        e.exports = { forEach: r(0), map: r(1), filter: r(2), some: r(3), every: r(4), find: r(5), findIndex: r(6) };
    },
    57: function (e, t, n) {
        var r = n(48);
        e.exports = function (e) {
            return Object(r(e));
        };
    },
    58: function (e, t) {
        var n = Math.ceil,
            r = Math.floor;
        e.exports = function (e) {
            return isNaN((e = +e)) ? 0 : (0 < e ? r : n)(e);
        };
    },
    59: function (e, t) {
        var n = 0,
            r = Math.random();
        e.exports = function (e) {
            return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++n + r).toString(36);
        };
    },
    60: function (e, t, n) {
        function a(e) {
            throw e;
        }
        var c = n(29),
            u = n(30),
            s = n(27),
            d = Object.defineProperty,
            f = {};
        e.exports = function (e, t) {
            if (s(f, e)) return f[e];
            var n = [][e],
                r = !!s((t = t || {}), "ACCESSORS") && t.ACCESSORS,
                i = s(t, 0) ? t[0] : a,
                o = s(t, 1) ? t[1] : void 0;
            return (f[e] =
                !!n &&
                !u(function () {
                    if (r && !c) return !0;
                    var e = { length: -1 };
                    r ? d(e, 1, { enumerable: !0, get: a }) : (e[1] = 1), n.call(e, i, o);
                }));
        };
    },
    61: function (e, t, n) {
        var r = n(62),
            i = n(40),
            o = n(22)("iterator");
        e.exports = function (e) {
            if (null != e) return e[o] || e["@@iterator"] || i[r(e)];
        };
    },
    62: function (e, t, n) {
        var r = n(63),
            i = n(47),
            o = n(22)("toStringTag"),
            a =
                "Arguments" ==
                i(
                    (function () {
                        return arguments;
                    })()
                );
        e.exports = r
            ? i
            : function (e) {
                  var t, n, r;
                  return void 0 === e
                      ? "Undefined"
                      : null === e
                      ? "Null"
                      : "string" ==
                        typeof (n = (function (e, t) {
                            try {
                                return e[t];
                            } catch (e) {}
                        })((t = Object(e)), o))
                      ? n
                      : a
                      ? i(t)
                      : "Object" == (r = i(t)) && "function" == typeof t.callee
                      ? "Arguments"
                      : r;
              };
    },
    63: function (e, t, n) {
        var r = {};
        (r[n(22)("toStringTag")] = "z"), (e.exports = "[object z]" === String(r));
    },
    64: function (e, t, n) {
        var o = n(63),
            a = n(34).f,
            c = n(32),
            u = n(27),
            s = n(116),
            d = n(22)("toStringTag");
        e.exports = function (e, t, n, r) {
            var i;
            e && ((i = n ? e : e.prototype), u(i, d) || a(i, d, { configurable: !0, value: t }), r && !o && c(i, "toString", s));
        };
    },
    65: function (e, t, n) {
        var r = n(78),
            i = n(59),
            o = r("keys");
        e.exports = function (e) {
            return o[e] || (o[e] = i(e));
        };
    },
    66: function (e, t, n) {
        "use strict";
        function y() {
            return this;
        }
        var h = n(14),
            m = n(125),
            S = n(91),
            A = n(127),
            E = n(64),
            O = n(32),
            T = n(89),
            r = n(22),
            I = n(17),
            C = n(40),
            i = n(90),
            j = i.IteratorPrototype,
            w = i.BUGGY_SAFARI_ITERATORS,
            _ = r("iterator"),
            B = "values",
            U = "entries";
        e.exports = function (e, t, n, r, i, o, a) {
            m(n, t, r);
            function c(e) {
                if (e === i && b) return b;
                if (!w && e in p) return p[e];
                switch (e) {
                    case "keys":
                    case B:
                    case U:
                        return function () {
                            return new n(this, e);
                        };
                }
                return function () {
                    return new n(this);
                };
            }
            var u,
                s,
                d,
                f = t + " Iterator",
                l = !1,
                p = e.prototype,
                g = p[_] || p["@@iterator"] || (i && p[i]),
                b = (!w && g) || c(i),
                v = ("Array" == t && p.entries) || g;
            if (
                (v && ((u = S(v.call(new e()))), j !== Object.prototype && u.next && (I || S(u) === j || (A ? A(u, j) : "function" != typeof u[_] && O(u, _, y)), E(u, f, !0, !0), I && (C[f] = y))),
                i == B &&
                    g &&
                    g.name !== B &&
                    ((l = !0),
                    (b = function () {
                        return g.call(this);
                    })),
                (I && !a) || p[_] === b || O(p, _, b),
                (C[t] = b),
                i)
            )
                if (((s = { values: c(B), keys: o ? b : c("keys"), entries: c(U) }), a)) for (d in s) (!w && !l && d in p) || T(p, d, s[d]);
                else h({ target: t, proto: !0, forced: w || l }, s);
            return s;
        };
    },
    67: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return o;
        });
        var r = n(0),
            c = {};
        function i(e, t, n) {
            var r,
                i,
                o,
                a = ((i = n), (o = c[(r = e)] = c[r] || { bidders: {} }), i ? (o.bidders[i] = o.bidders[i] || {}) : o);
            return (a[t] = (a[t] || 0) + 1), a[t];
        }
        var o = {
            incrementRequestsCounter: function (e) {
                return i(e, "requestsCounter");
            },
            incrementBidderRequestsCounter: function (e, t) {
                return i(e, "requestsCounter", t);
            },
            incrementBidderWinsCounter: function (e, t) {
                return i(e, "winsCounter", t);
            },
            getRequestsCounter: function (e) {
                return Object(r.deepAccess)(c, "".concat(e, ".requestsCounter")) || 0;
            },
            getBidderRequestsCounter: function (e, t) {
                return Object(r.deepAccess)(c, "".concat(e, ".bidders.").concat(t, ".requestsCounter")) || 0;
            },
            getBidderWinsCounter: function (e, t) {
                return Object(r.deepAccess)(c, "".concat(e, ".bidders.").concat(t, ".winsCounter")) || 0;
            },
        };
    },
    7: function (e, t, n) {
        "use strict";
        n.d(t, "c", function () {
            return l;
        }),
            n.d(t, "d", function () {
                return p;
            }),
            (t.a = function (e) {
                return o({ moduleName: e, moduleType: "core" });
            }),
            (t.b = function (e, t) {
                return o({ gvlid: e, moduleName: t });
            });
        var r = n(11),
            u = n(0),
            i = n(13),
            d = n.n(i),
            f = ["core", "prebid-module"],
            l = [];
        function o(e) {
            var t = 0 < arguments.length && void 0 !== e ? e : {},
                i = t.gvlid,
                o = t.moduleName,
                a = t.moduleType;
            function s(n) {
                if (d()(f, a)) {
                    return n({ valid: !0 });
                }
                var r;
                return (
                    p(i, o, { hasEnforcementHook: !1 }, function (e) {
                        var t;
                        r = e && e.hasEnforcementHook ? n(e) : ((t = { hasEnforcementHook: !1, valid: u.hasDeviceAccess() }), n(t));
                    }),
                    r
                );
            }
            var c = function (t) {
                function n(e) {
                    if (e && e.valid)
                        try {
                            return !!window.localStorage;
                        } catch (e) {
                            u.logError("Local storage api disabled");
                        }
                    return !1;
                }
                if (!t || "function" != typeof t) return s(n);
                l.push(function () {
                    var e = s(n);
                    t(e);
                });
            };
            return {
                setCookie: function (i, o, a, c, u, t) {
                    function n(e) {
                        var t, n, r;
                        e &&
                            e.valid &&
                            ((t = u && "" !== u ? " ;domain=".concat(encodeURIComponent(u)) : ""),
                            (n = a && "" !== a ? " ;expires=".concat(a) : ""),
                            (r = null != c && "none" == c.toLowerCase() ? "; Secure" : ""),
                            (document.cookie = ""
                                .concat(i, "=")
                                .concat(encodeURIComponent(o))
                                .concat(n, "; path=/")
                                .concat(t)
                                .concat(c ? "; SameSite=".concat(c) : "")
                                .concat(r)));
                    }
                    if (!t || "function" != typeof t) return s(n);
                    l.push(function () {
                        var e = s(n);
                        t(e);
                    });
                },
                getCookie: function (n, t) {
                    function r(e) {
                        if (e && e.valid) {
                            var t = window.document.cookie.match("(^|;)\\s*" + n + "\\s*=\\s*([^;]*)\\s*(;|$)");
                            return t ? decodeURIComponent(t[2]) : null;
                        }
                        return null;
                    }
                    if (!t || "function" != typeof t) return s(r);
                    l.push(function () {
                        var e = s(r);
                        t(e);
                    });
                },
                localStorageIsEnabled: function (t) {
                    function n(e) {
                        if (e && e.valid)
                            try {
                                return localStorage.setItem("prebid.cookieTest", "1"), "1" === localStorage.getItem("prebid.cookieTest");
                            } catch (e) {
                            } finally {
                                try {
                                    localStorage.removeItem("prebid.cookieTest");
                                } catch (e) {}
                            }
                        return !1;
                    }
                    if (!t || "function" != typeof t) return s(n);
                    l.push(function () {
                        var e = s(n);
                        t(e);
                    });
                },
                cookiesAreEnabled: function (t) {
                    function n(e) {
                        return !(!e || !e.valid) && (!!u.checkCookieSupport() || ((window.document.cookie = "prebid.cookieTest"), -1 !== window.document.cookie.indexOf("prebid.cookieTest")));
                    }
                    if (!t || "function" != typeof t) return s(n);
                    l.push(function () {
                        var e = s(n);
                        t(e);
                    });
                },
                setDataInLocalStorage: function (t, n, r) {
                    function i(e) {
                        e && e.valid && c() && window.localStorage.setItem(t, n);
                    }
                    if (!r || "function" != typeof r) return s(i);
                    l.push(function () {
                        var e = s(i);
                        r(e);
                    });
                },
                getDataFromLocalStorage: function (t, n) {
                    function r(e) {
                        return e && e.valid && c() ? window.localStorage.getItem(t) : null;
                    }
                    if (!n || "function" != typeof n) return s(r);
                    l.push(function () {
                        var e = s(r);
                        n(e);
                    });
                },
                removeDataFromLocalStorage: function (t, n) {
                    function r(e) {
                        e && e.valid && c() && window.localStorage.removeItem(t);
                    }
                    if (!n || "function" != typeof n) return s(r);
                    l.push(function () {
                        var e = s(r);
                        n(e);
                    });
                },
                hasLocalStorage: c,
                findSimilarCookies: function (o, t) {
                    function n(e) {
                        if (e && e.valid) {
                            var t = [];
                            if (u.hasDeviceAccess())
                                for (var n = document.cookie.split(";"); n.length; ) {
                                    var r = n.pop(),
                                        i = (i = r.indexOf("=")) < 0 ? r.length : i;
                                    0 <= decodeURIComponent(r.slice(0, i).replace(/^\s+/, "")).indexOf(o) && t.push(decodeURIComponent(r.slice(i + 1)));
                                }
                            return t;
                        }
                    }
                    if (!t || "function" != typeof t) return s(n);
                    l.push(function () {
                        var e = s(n);
                        t(e);
                    });
                },
            };
        }
        var p = Object(r.b)(
            "async",
            function (e, t, n, r) {
                r(n);
            },
            "validateStorageEnforcement"
        );
    },
    71: function (e, t, n) {
        var r = n(232);
        e.exports = r;
    },
    72: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
            n.d(t, "adUnitSetupChecks", function () {
                return H;
            }),
            n.d(t, "checkAdUnitSetup", function () {
                return K;
            }),
            (t.executeCallbacks = Q);
        var r = n(16),
            i = n(0),
            o = n(240),
            a = n(43),
            S = n(3),
            A = n(23),
            l = n(42),
            c = n(11),
            u = n(241),
            s = n(13),
            p = n.n(s),
            g = n(67),
            E = n(12),
            d = n(35),
            f = n(7);
        function b(e) {
            return (
                (function (e) {
                    if (Array.isArray(e)) return v(e);
                })(e) ||
                (function (e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
                })(e) ||
                (function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return v(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return v(e, t);
                })(e) ||
                (function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                })()
            );
        }
        function v(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        function y() {
            return (y =
                Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                    }
                    return e;
                }).apply(this, arguments);
        }
        var h = Object(r.a)(),
            O = n(5),
            T = n(0),
            m = n(8).default,
            I = n(9),
            C = a.a.triggerUserSyncs,
            j = O.EVENTS,
            w = j.ADD_AD_UNITS,
            _ = j.BID_WON,
            B = j.REQUEST_BIDS,
            U = j.SET_TARGETING,
            x = j.AD_RENDER_FAILED,
            R = j.STALE_RENDER,
            D = O.AD_RENDER_FAILED_REASON,
            k = D.PREVENT_WRITING_ON_MAIN_DOCUMENT,
            N = D.NO_AD,
            P = D.EXCEPTION,
            M = D.CANNOT_FIND_AD,
            q = D.MISSING_DOC_OR_ADID,
            G = {
                bidWon: function (e) {
                    var t = A.a
                        .getBidsRequested()
                        .map(function (e) {
                            return e.bids.map(function (e) {
                                return e.adUnitCode;
                            });
                        })
                        .reduce(i.flatten)
                        .filter(i.uniques);
                    return !!T.contains(t, e) || void T.logError('The "' + e + '" placement is not defined.');
                },
            };
        function W(e, t, n) {
            e.defaultView && e.defaultView.frameElement && ((e.defaultView.frameElement.width = t), (e.defaultView.frameElement.height = n));
        }
        function L(e, t) {
            var n = [];
            return (
                T.isArray(e) &&
                    (t ? e.length === t : 0 < e.length) &&
                    (e.every(function (e) {
                        return Object(i.isArrayOfNums)(e, 2);
                    })
                        ? (n = e)
                        : Object(i.isArrayOfNums)(e, 2) && n.push(e)),
                n
            );
        }
        function F(e) {
            var t = T.deepClone(e),
                n = t.mediaTypes.banner,
                r = L(n.sizes);
            return (
                0 < r.length
                    ? ((n.sizes = r), (t.sizes = r))
                    : (T.logError("Detected a mediaTypes.banner object without a proper sizes field.  Please ensure the sizes are listed like: [[300, 250], ...].  Removing invalid mediaTypes.banner object from request."),
                      delete t.mediaTypes.banner),
                t
            );
        }
        function z(e) {
            var t,
                n,
                r = T.deepClone(e),
                i = r.mediaTypes.video;
            return (
                i.playerSize &&
                    ((t = "number" == typeof i.playerSize[0] ? 2 : 1),
                    0 < (n = L(i.playerSize, t)).length
                        ? (2 == t && T.logInfo("Transforming video.playerSize from [640,480] to [[640,480]] so it's in the proper format."), (i.playerSize = n), (r.sizes = n))
                        : (T.logError(
                              "Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request."
                          ),
                          delete r.mediaTypes.video.playerSize)),
                r
            );
        }
        function V(e) {
            var t = T.deepClone(e),
                n = t.mediaTypes.native;
            return (
                n.image &&
                    n.image.sizes &&
                    !Array.isArray(n.image.sizes) &&
                    (T.logError("Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request."), delete t.mediaTypes.native.image.sizes),
                n.image &&
                    n.image.aspect_ratios &&
                    !Array.isArray(n.image.aspect_ratios) &&
                    (T.logError("Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request."), delete t.mediaTypes.native.image.aspect_ratios),
                n.icon &&
                    n.icon.sizes &&
                    !Array.isArray(n.icon.sizes) &&
                    (T.logError("Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request."), delete t.mediaTypes.native.icon.sizes),
                t
            );
        }
        Object(u.a)(), (h.bidderSettings = h.bidderSettings || {}), (h.libLoaded = !0), (h.version = "v4.43.4"), T.logInfo("Prebid.js v4.43.4 loaded"), (h.installedModules = []), (h.adUnits = h.adUnits || []), (h.triggerUserSyncs = C);
        var H = { validateBannerMediaType: F, validateVideoMediaType: z, validateNativeMediaType: V, validateSizes: L },
            K = Object(c.b)(
                "sync",
                function (e) {
                    var c = [];
                    return (
                        e.forEach(function (e) {
                            var t,
                                n,
                                r,
                                i,
                                o = e.mediaTypes,
                                a = e.bids;
                            a && T.isArray(a)
                                ? o && 0 !== Object.keys(o).length
                                    ? (o.banner && (t = F(e)), o.video && (n = z(t || e)), o.native && (r = V(n || t || e)), (i = y({}, t, n, r)), c.push(i))
                                    : T.logError("Detected adUnit.code '".concat(e.code, "' did not have a 'mediaTypes' object defined.  This is a required field for the auction, so this adUnit has been removed."))
                                : T.logError("Detected adUnit.code '".concat(e.code, "' did not have 'adUnit.bids' defined or 'adUnit.bids' is not an array. Removing adUnit from auction."));
                        }),
                        c
                    );
                },
                "checkAdUnitSetup"
            );
        function J(e) {
            var n = A.a[e]().filter(T.bind.call(i.adUnitsFilter, this, A.a.getAdUnitCodes())),
                r = A.a.getLastAuctionId();
            return n
                .map(function (e) {
                    return e.adUnitCode;
                })
                .filter(i.uniques)
                .map(function (t) {
                    return n.filter(function (e) {
                        return e.auctionId === r && e.adUnitCode === t;
                    });
                })
                .filter(function (e) {
                    return e && e[0] && e[0].adUnitCode;
                })
                .map(function (e) {
                    return (t = {}), (n = e[0].adUnitCode), (r = { bids: e }), n in t ? Object.defineProperty(t, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[n] = r), t;
                    var t, n, r;
                })
                .reduce(function (e, t) {
                    return y(e, t);
                }, {});
        }
        function Y(e) {
            var t = e.reason,
                n = e.message,
                r = e.bid,
                i = e.id,
                o = { reason: t, message: n };
            r && (o.bid = r), i && (o.adId = i), T.logError(n), I.emit(x, o);
        }
        function Q(e, t) {
            function n(e) {
                for (var t; (t = e.shift()); ) t();
            }
            n(f.c), n($), e.call(this, t);
        }
        (h.getAdserverTargetingForAdUnitCodeStr = function (e) {
            if ((T.logInfo("Invoking pbjs.getAdserverTargetingForAdUnitCodeStr", arguments), e)) {
                var t = h.getAdserverTargetingForAdUnitCode(e);
                return T.transformAdServerTargetingObj(t);
            }
            T.logMessage("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode");
        }),
            (h.getHighestUnusedBidResponseForAdUnitCode = function (e) {
                if (e) {
                    var t = A.a.getAllBidsForAdUnitCode(e).filter(l.a.isUnusedBid).filter(l.a.isBidNotExpired);
                    return t.length ? t.reduce(i.getHighestCpm) : {};
                }
                T.logMessage("Need to call getHighestUnusedBidResponseForAdUnitCode with adunitCode");
            }),
            (h.getAdserverTargetingForAdUnitCode = function (e) {
                return h.getAdserverTargeting(e)[e];
            }),
            (h.getAdserverTargeting = function (e) {
                return T.logInfo("Invoking pbjs.getAdserverTargeting", arguments), l.d.getAllTargeting(e);
            }),
            (h.getNoBids = function () {
                return T.logInfo("Invoking pbjs.getNoBids", arguments), J("getNoBids");
            }),
            (h.getNoBidsForAdUnitCode = function (t) {
                return {
                    bids: A.a.getNoBids().filter(function (e) {
                        return e.adUnitCode === t;
                    }),
                };
            }),
            (h.getBidResponses = function () {
                return T.logInfo("Invoking pbjs.getBidResponses", arguments), J("getBidsReceived");
            }),
            (h.getBidResponsesForAdUnitCode = function (t) {
                return {
                    bids: A.a.getBidsReceived().filter(function (e) {
                        return e.adUnitCode === t;
                    }),
                };
            }),
            (h.setTargetingForGPTAsync = function (e, t) {
                var n;
                T.logInfo("Invoking pbjs.setTargetingForGPTAsync", arguments),
                    Object(i.isGptPubadsDefined)()
                        ? ((n = l.d.getAllTargeting(e)),
                          l.d.resetPresetTargeting(e, t),
                          l.d.setTargetingForGPT(n, t),
                          Object.keys(n).forEach(function (t) {
                              Object.keys(n[t]).forEach(function (e) {
                                  "hb_adid" === e && A.a.setStatusForBids(n[t][e], O.BID_STATUS.BID_TARGETING_SET);
                              });
                          }),
                          I.emit(U, n))
                        : T.logError("window.googletag is not defined on the page");
            }),
            (h.setTargetingForAst = function (e) {
                T.logInfo("Invoking pbjs.setTargetingForAn", arguments), l.d.isApntagDefined() ? (l.d.setTargetingForAst(e), I.emit(U, l.d.getAllTargeting())) : T.logError("window.apntag is not defined on the page");
            }),
            (h.renderAd = function (e, t, n) {
                if ((T.logInfo("Invoking pbjs.renderAd", arguments), T.logMessage("Calling renderAd with adId :" + t), e && t))
                    try {
                        var r,
                            i,
                            o,
                            a,
                            c,
                            u,
                            s,
                            d,
                            f,
                            l,
                            p,
                            g,
                            b,
                            v,
                            y = A.a.findBidByAdId(t);
                        y
                            ? ((r = !0),
                              y && y.status === O.BID_STATUS.RENDERED && (T.logWarn("Ad id ".concat(y.adId, " has been rendered before")), I.emit(R, y), T.deepAccess(S.b.getConfig("auctionOptions"), "suppressStaleRender") && (r = !1)),
                              r &&
                                  ((y.ad = T.replaceAuctionPrice(y.ad, y.cpm)),
                                  (y.adUrl = T.replaceAuctionPrice(y.adUrl, y.cpm)),
                                  n && n.clickThrough && ((i = n.clickThrough), (y.ad = T.replaceClickThrough(y.ad, i)), (y.adUrl = T.replaceClickThrough(y.adUrl, i))),
                                  A.a.addWinningBid(y),
                                  I.emit(_, y),
                                  (o = y.height),
                                  (a = y.width),
                                  (c = y.ad),
                                  (u = y.mediaType),
                                  (s = y.adUrl),
                                  (d = y.renderer),
                                  (f = document.createComment("Creative ".concat(y.creativeId, " served by ").concat(y.bidder, " Prebid.js Header Bidding"))),
                                  T.insertElement(f, e, "body"),
                                  Object(E.c)(d)
                                      ? Object(E.b)(d, y)
                                      : (e === document && !T.inIframe()) || "video" === u
                                      ? ((l = "Error trying to write ad. Ad render call ad id ".concat(t, " was prevented from writing to the main document.")), Y({ reason: k, message: l, bid: y, id: t }))
                                      : c
                                      ? (navigator.userAgent &&
                                            -1 < navigator.userAgent.toLowerCase().indexOf("firefox/") &&
                                            (p = navigator.userAgent.toLowerCase().match(/firefox\/([\d\.]+)/)[1]) &&
                                            parseInt(p, 10) < 67 &&
                                            e.open("text/html", "replace"),
                                        e.write(c),
                                        e.close(),
                                        W(e, a, o),
                                        T.callBurl(y))
                                      : s
                                      ? (((g = T.createInvisibleIframe()).height = o), (g.width = a), (g.style.display = "inline"), (g.style.overflow = "hidden"), (g.src = s), T.insertElement(g, e, "body"), W(e, a, o), T.callBurl(y))
                                      : ((b = "Error trying to write ad. No ad for bid response id: ".concat(t)), Y({ reason: N, message: b, bid: y, id: t }))))
                            : ((v = "Error trying to write ad. Cannot find ad by given id : ".concat(t)), Y({ reason: M, message: v, id: t }));
                    } catch (e) {
                        var h = "Error trying to write ad Id :".concat(t, " to the page:").concat(e.message);
                        Y({ reason: P, message: h, id: t });
                    }
                else {
                    var m = "Error trying to write ad Id :".concat(t, " to the page. Missing document or adId");
                    Y({ reason: q, message: m, id: t });
                }
            }),
            (h.removeAdUnit = function (e) {
                T.logInfo("Invoking pbjs.removeAdUnit", arguments),
                    e
                        ? (T.isArray(e) ? e : [e]).forEach(function (e) {
                              for (var t = h.adUnits.length - 1; 0 <= t; t--) h.adUnits[t].code === e && h.adUnits.splice(t, 1);
                          })
                        : (h.adUnits = []);
            }),
            (h.requestBids = Object(c.b)("async", function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.bidsBackHandler,
                    n = e.timeout,
                    r = e.adUnits,
                    i = e.adUnitCodes,
                    o = e.labels,
                    a = e.auctionId;
                I.emit(B);
                var c = n || S.b.getConfig("bidderTimeout"),
                    r = (r && S.b.convertAdUnitFpd(T.isArray(r) ? r : [r])) || h.adUnits;
                T.logInfo("Invoking pbjs.requestBids", arguments);
                var u = [],
                    s = [];
                if (
                    (S.b.getConfig("s2sConfig", function (e) {
                        e && e.s2sConfig && (u = Array.isArray(e.s2sConfig) ? e.s2sConfig : [e.s2sConfig]);
                    }),
                    u.forEach(function (e) {
                        s.push.apply(s, b(e.bidders));
                    }),
                    (r = K(r)),
                    i && i.length
                        ? (r = r.filter(function (e) {
                              return p()(i, e.code);
                          }))
                        : (i =
                              r &&
                              r.map(function (e) {
                                  return e.code;
                              })),
                    r.forEach(function (i) {
                        var o = Object.keys(i.mediaTypes || { banner: "banner" }),
                            e = i.bids.map(function (e) {
                                return e.bidder;
                            }),
                            a = m.bidderRegistry,
                            t = s
                                ? e.filter(function (e) {
                                      return !p()(s, e);
                                  })
                                : e;
                        (i.transactionId = T.generateUUID()),
                            t.forEach(function (t) {
                                var e = a[t],
                                    n = e && e.getSpec && e.getSpec(),
                                    r = (n && n.supportedMediaTypes) || ["banner"];
                                o.some(function (e) {
                                    return p()(r, e);
                                })
                                    ? g.a.incrementBidderRequestsCounter(i.code, t)
                                    : (T.logWarn(T.unsupportedBidderMessage(i, t)),
                                      (i.bids = i.bids.filter(function (e) {
                                          return e.bidder !== t;
                                      })));
                            }),
                            g.a.incrementRequestsCounter(i.code);
                    }),
                    r && 0 !== r.length)
                ) {
                    var d = A.a.createAuction({ adUnits: r, adUnitCodes: i, callback: t, cbTimeout: c, labels: o, auctionId: a }),
                        f = r.length;
                    15 < f && T.logInfo("Current auction ".concat(d.getAuctionId(), " contains ").concat(f, " adUnits."), r),
                        i.forEach(function (e) {
                            return l.d.setLatestAuctionForAdUnit(e, d.getAuctionId());
                        }),
                        d.callBids();
                } else if ((T.logMessage("No adUnits configured. No bids requested."), "function" == typeof t))
                    try {
                        t();
                    } catch (e) {
                        T.logError("Error executing bidsBackHandler", null, e);
                    }
            })),
            h.requestBids.before(Q, 49),
            (h.addAdUnits = function (e) {
                T.logInfo("Invoking pbjs.addAdUnits", arguments), h.adUnits.push.apply(h.adUnits, S.b.convertAdUnitFpd(T.isArray(e) ? e : [e])), I.emit(w);
            }),
            (h.onEvent = function (e, t, n) {
                T.logInfo("Invoking pbjs.onEvent", arguments),
                    T.isFn(t)
                        ? !n || G[e].call(null, n)
                            ? I.on(e, t, n)
                            : T.logError('The id provided is not valid for event "' + e + '" and no handler was set.')
                        : T.logError('The event handler provided is not a function and was not set on event "' + e + '".');
            }),
            (h.offEvent = function (e, t, n) {
                T.logInfo("Invoking pbjs.offEvent", arguments), (n && !G[e].call(null, n)) || I.off(e, t, n);
            }),
            (h.getEvents = function () {
                return T.logInfo("Invoking pbjs.getEvents"), I.getEvents();
            }),
            (h.registerBidAdapter = function (e, t) {
                T.logInfo("Invoking pbjs.registerBidAdapter", arguments);
                try {
                    m.registerBidAdapter(e(), t);
                } catch (e) {
                    T.logError("Error registering bidder adapter : " + e.message);
                }
            }),
            (h.registerAnalyticsAdapter = function (e) {
                T.logInfo("Invoking pbjs.registerAnalyticsAdapter", arguments);
                try {
                    m.registerAnalyticsAdapter(e);
                } catch (e) {
                    T.logError("Error registering analytics adapter : " + e.message);
                }
            }),
            (h.createBid = function (e) {
                return T.logInfo("Invoking pbjs.createBid", arguments), Object(d.a)(e);
            });
        var $ = [],
            X = Object(c.b)(
                "async",
                function (e) {
                    e && !T.isEmpty(e) ? (T.logInfo("Invoking pbjs.enableAnalytics for: ", e), m.enableAnalytics(e)) : T.logError("pbjs.enableAnalytics should be called with option {}");
                },
                "enableAnalyticsCb"
            );
        function Z(e) {
            e.forEach(function (e) {
                if (void 0 === e.called)
                    try {
                        e.call(), (e.called = !0);
                    } catch (e) {
                        T.logError("Error processing command :", "prebid.js", e);
                    }
            });
        }
        (h.enableAnalytics = function (e) {
            $.push(X.bind(this, e));
        }),
            (h.aliasBidder = function (e, t, n) {
                T.logInfo("Invoking pbjs.aliasBidder", arguments), e && t ? m.aliasBidAdapter(e, t, n) : T.logError("bidderCode and alias must be passed as arguments", "pbjs.aliasBidder");
            }),
            (h.getAllWinningBids = function () {
                return A.a.getAllWinningBids();
            }),
            (h.getAllPrebidWinningBids = function () {
                return A.a.getBidsReceived().filter(function (e) {
                    return e.status === O.BID_STATUS.BID_TARGETING_SET;
                });
            }),
            (h.getHighestCpmBids = function (e) {
                return l.d.getWinningBids(e);
            }),
            (h.markWinningBidAsUsed = function (t) {
                var e = [];
                t.adUnitCode && t.adId
                    ? (e = A.a.getBidsReceived().filter(function (e) {
                          return e.adId === t.adId && e.adUnitCode === t.adUnitCode;
                      }))
                    : t.adUnitCode
                    ? (e = l.d.getWinningBids(t.adUnitCode))
                    : t.adId
                    ? (e = A.a.getBidsReceived().filter(function (e) {
                          return e.adId === t.adId;
                      }))
                    : T.logWarn("Improper use of markWinningBidAsUsed. It needs an adUnitCode or an adId to function."),
                    0 < e.length && (e[0].status = O.BID_STATUS.RENDERED);
            }),
            (h.getConfig = S.b.getConfig),
            (h.setConfig = S.b.setConfig),
            (h.setBidderConfig = S.b.setBidderConfig),
            h.que.push(function () {
                return Object(o.a)();
            }),
            (h.cmd.push = function (e) {
                if ("function" == typeof e)
                    try {
                        e.call();
                    } catch (e) {
                        T.logError("Error processing command :", e.message, e.stack);
                    }
                else T.logError("Commands written into pbjs.cmd.push must be wrapped in a function");
            }),
            (h.que.push = h.cmd.push),
            (h.processQueue = function () {
                c.b.ready(), Z(h.que), Z(h.cmd);
            }),
            (t.default = h);
    },
    73: function (e, t, n) {
        var r = n(378);
        e.exports = r;
    },
    74: function (e, t, n) {
        "use strict";
        t.a = function (t, n) {
            (o.adServers = o.adServers || {}),
                (o.adServers[t] = o.adServers[t] || {}),
                Object.keys(n).forEach(function (e) {
                    o.adServers[t][e] ? Object(i.logWarn)("Attempting to add an already registered function property ".concat(e, " for AdServer ").concat(t, ".")) : (o.adServers[t][e] = n[e]);
                });
        };
        var r = n(16),
            i = n(0),
            o = Object(r.a)();
    },
    75: function (e, t, n) {
        var r = n(30),
            i = n(47),
            o = "".split;
        e.exports = r(function () {
            return !Object("z").propertyIsEnumerable(0);
        })
            ? function (e) {
                  return "String" == i(e) ? o.call(e, "") : Object(e);
              }
            : Object;
    },
    76: function (e, t, n) {
        var r = n(29),
            i = n(30),
            o = n(77);
        e.exports =
            !r &&
            !i(function () {
                return (
                    7 !=
                    Object.defineProperty(o("div"), "a", {
                        get: function () {
                            return 7;
                        },
                    }).a
                );
            });
    },
    77: function (e, t, n) {
        var r = n(26),
            i = n(31),
            o = r.document,
            a = i(o) && i(o.createElement);
        e.exports = function (e) {
            return a ? o.createElement(e) : {};
        };
    },
    78: function (e, t, n) {
        var r = n(17),
            i = n(79);
        (e.exports = function (e, t) {
            return i[e] || (i[e] = void 0 !== t ? t : {});
        })("versions", []).push({ version: "3.6.4", mode: r ? "pure" : "global", copyright: "© 2020 Denis Pushkarev (zloirock.ru)" });
    },
    79: function (e, t, n) {
        var r = n(26),
            i = n(107),
            o = "__core-js_shared__",
            a = r[o] || i(o, {});
        e.exports = a;
    },
    8: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
            n.d(t, "gdprDataHandler", function () {
                return U;
            }),
            n.d(t, "uspDataHandler", function () {
                return x;
            }),
            n.d(t, "coppaDataHandler", function () {
                return R;
            }),
            n.d(t, "clientTestAdapters", function () {
                return D;
            }),
            n.d(t, "allS2SBidders", function () {
                return k;
            }),
            (t.getAllS2SBidders = N),
            (t.setS2STestingModule = function (e) {
                A = e;
            });
        var h = n(0),
            p = n(96),
            g = n(38),
            l = n(1),
            y = n(4),
            a = n(3),
            r = n(11),
            i = n(13),
            m = n.n(i),
            o = n(10),
            S = n.n(o),
            b = n(67),
            c = n(19);
        function u(e, t) {
            return (
                (function (e) {
                    if (Array.isArray(e)) return e;
                })(e) ||
                (function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        (i = !0), (o = e);
                    } finally {
                        try {
                            r || null == c.return || c.return();
                        } finally {
                            if (i) throw o;
                        }
                    }
                    return n;
                })(e, t) ||
                d(e, t) ||
                (function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                })()
            );
        }
        function s(e) {
            return (
                (function (e) {
                    if (Array.isArray(e)) return f(e);
                })(e) ||
                (function (e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
                })(e) ||
                d(e) ||
                (function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                })()
            );
        }
        function d(e, t) {
            if (e) {
                if ("string" == typeof e) return f(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(e, t) : void 0;
            }
        }
        function f(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        function v() {
            return (v =
                Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                    }
                    return e;
                }).apply(this, arguments);
        }
        var A,
            E = n(0),
            O = n(5),
            T = n(9),
            I = {},
            C = (I.bidderRegistry = {}),
            j = (I.aliasRegistry = {}),
            w = [];
        a.b.getConfig("s2sConfig", function (e) {
            e && e.s2sConfig && (w = Array.isArray(e.s2sConfig) ? e.s2sConfig : [e.s2sConfig]);
        });
        var _ = {};
        var B = Object(r.b)(
            "sync",
            function (e) {
                var i = e.bidderCode,
                    s = e.auctionId,
                    d = e.bidderRequestId,
                    t = e.adUnits,
                    f = e.labels,
                    l = e.src;
                return t
                    .reduce(function (e, c) {
                        var t = Object(p.b)(Object(p.a)(c, f), c.mediaTypes, c.sizes),
                            n = t.active,
                            u = t.mediaTypes,
                            r = t.filterResults;
                        return (
                            n ? r && E.logInfo('Size mapping filtered adUnit "'.concat(c.code, '" banner sizes from '), r.before, "to ", r.after) : E.logInfo('Size mapping disabled adUnit "'.concat(c.code, '"')),
                            n &&
                                e.push(
                                    c.bids
                                        .filter(function (e) {
                                            return e.bidder === i;
                                        })
                                        .reduce(function (e, t) {
                                            var n = c.nativeParams || E.deepAccess(c, "mediaTypes.native");
                                            n && (t = v({}, t, { nativeParams: Object(g.h)(n) })), (t = v({}, t, Object(h.getDefinedParams)(c, ["ortb2Imp", "mediaType", "renderer", "storedAuctionResponse"])));
                                            var r = Object(p.b)(Object(p.a)(t, f), u),
                                                i = r.active,
                                                o = r.mediaTypes,
                                                a = r.filterResults;
                                            return (
                                                i
                                                    ? a && E.logInfo('Size mapping filtered adUnit "'.concat(c.code, '" bidder "').concat(t.bidder, '" banner sizes from '), a.before, "to ", a.after)
                                                    : E.logInfo('Size mapping deactivated adUnit "'.concat(c.code, '" bidder "').concat(t.bidder, '"')),
                                                E.isValidMediaTypes(o) ? (t = v({}, t, { mediaTypes: o })) : E.logError("mediaTypes is not correctly configured for adunit ".concat(c.code)),
                                                i &&
                                                    e.push(
                                                        v({}, t, {
                                                            adUnitCode: c.code,
                                                            transactionId: c.transactionId,
                                                            sizes: E.deepAccess(o, "banner.sizes") || E.deepAccess(o, "video.playerSize") || [],
                                                            bidId: t.bid_id || E.getUniqueIdentifierStr(),
                                                            bidderRequestId: d,
                                                            auctionId: s,
                                                            src: l,
                                                            bidRequestsCount: b.a.getRequestsCounter(c.code),
                                                            bidderRequestsCount: b.a.getBidderRequestsCounter(c.code, t.bidder),
                                                            bidderWinsCount: b.a.getBidderWinsCounter(c.code, t.bidder),
                                                        })
                                                    ),
                                                e
                                            );
                                        }, [])
                                ),
                            e
                        );
                    }, [])
                    .reduce(h.flatten, [])
                    .filter(function (e) {
                        return "" !== e;
                    });
            },
            "getBids"
        );
        var U = {
                consentData: null,
                setConsentData: function (e) {
                    U.consentData = e;
                },
                getConsentData: function () {
                    return U.consentData;
                },
            },
            x = {
                consentData: null,
                setConsentData: function (e) {
                    x.consentData = e;
                },
                getConsentData: function () {
                    return x.consentData;
                },
            },
            R = {
                getCoppa: function () {
                    return !!a.b.getConfig("coppa");
                },
            },
            D = [],
            k = [];
        function N() {
            (I.s2STestingEnabled = !1),
                w.forEach(function (e) {
                    e && e.enabled && e.bidders && e.bidders.length && k.push.apply(k, s(e.bidders));
                });
        }
        function P(e) {
            return e && e.enabled && e.testing && A;
        }
        function M(t, n, e) {
            try {
                var r = C[t].getSpec();
                r && r[n] && "function" == typeof r[n] && (E.logInfo("Invoking ".concat(t, ".").concat(n)), a.b.runWithBidder(t, h.bind.call(r[n], r, e)));
            } catch (e) {
                E.logWarn("Error calling ".concat(n, " of ").concat(t));
            }
        }
        (I.makeBidRequests = Object(r.b)(
            "sync",
            function (d, f, l, i, p) {
                T.emit(O.EVENTS.BEFORE_REQUEST_BIDS, d);
                var e = Object(h.getBidderCodes)(d);
                a.b.getConfig("bidderSequence") === a.a && (e = Object(h.shuffle)(e));
                var g = Object(c.a)(),
                    b = e,
                    v = [];
                0 === k.length && N(),
                    w.forEach(function (e) {
                        e &&
                            e.enabled &&
                            P(e) &&
                            (A.calculateBidSources(e),
                            A.getSourceBidderMap(d, k)[A.CLIENT].forEach(function (e) {
                                m()(D, e) || D.push(e);
                            }));
                    }),
                    (b = e.filter(function (e) {
                        return !m()(k, e) || m()(D, e);
                    }));
                var y = k;
                w.forEach(function (r) {
                    var i, o, e, t, n, a, c, u, s;
                    r &&
                        r.enabled &&
                        ((s = r),
                        Boolean(P(s) && s.testServerOnly) &&
                            ((c = d),
                            (u = r),
                            Boolean(
                                S()(c, function (e) {
                                    return S()(e.bids, function (e) {
                                        return (e.bidSource || (u.bidderControl && u.bidderControl[e.bidder])) && e.finalSource === A.SERVER;
                                    });
                                })
                            )) &&
                            (E.logWarn("testServerOnly: True.  All client requests will be suppressed."), (b.length = 0)),
                        (e = d),
                        (n = (t = r).bidders),
                        (a = E.deepClone(e)).forEach(function (e) {
                            e.bids = e.bids
                                .filter(function (e) {
                                    return m()(n, e.bidder) && (!P(t) || e.finalSource !== A.CLIENT);
                                })
                                .map(function (e) {
                                    return (e.bid_id = E.getUniqueIdentifierStr()), e;
                                });
                        }),
                        (i = a = a.filter(function (e) {
                            return 0 !== e.bids.length;
                        })),
                        (o = E.generateUUID()),
                        y.forEach(function (e) {
                            var t = E.getUniqueIdentifierStr(),
                                n = {
                                    bidderCode: e,
                                    auctionId: l,
                                    bidderRequestId: t,
                                    tid: o,
                                    bids: B({ bidderCode: e, auctionId: l, bidderRequestId: t, adUnits: E.deepClone(i), labels: p, src: O.S2S.SRC }),
                                    auctionStart: f,
                                    timeout: r.timeout,
                                    src: O.S2S.SRC,
                                    refererInfo: g,
                                };
                            0 !== n.bids.length && v.push(n);
                        }),
                        i.forEach(function (e) {
                            var t = e.bids.filter(function (t) {
                                return S()(v, function (e) {
                                    return S()(e.bids, function (e) {
                                        return e.bidId === t.bid_id;
                                    });
                                });
                            });
                            e.bids = t;
                        }),
                        v.forEach(function (e) {
                            void 0 === e.adUnitsS2SCopy &&
                                (e.adUnitsS2SCopy = i.filter(function (e) {
                                    return 0 < e.bids.length;
                                }));
                        }));
                });
                var t,
                    n,
                    o =
                        ((t = d),
                        (n = E.deepClone(t)).forEach(function (e) {
                            e.bids = e.bids.filter(function (e) {
                                return !D.length || e.finalSource !== A.SERVER;
                            });
                        }),
                        (n = n.filter(function (e) {
                            return 0 !== e.bids.length;
                        })));
                return (
                    b.forEach(function (e) {
                        var t = E.getUniqueIdentifierStr(),
                            n = {
                                bidderCode: e,
                                auctionId: l,
                                bidderRequestId: t,
                                bids: B({ bidderCode: e, auctionId: l, bidderRequestId: t, adUnits: E.deepClone(o), labels: p, src: "client" }),
                                auctionStart: f,
                                timeout: i,
                                refererInfo: g,
                            },
                            r = C[e];
                        r || E.logError("Trying to make a request for bidder that does not exist: ".concat(e)), r && n.bids && 0 !== n.bids.length && v.push(n);
                    }),
                    U.getConsentData() &&
                        v.forEach(function (e) {
                            e.gdprConsent = U.getConsentData();
                        }),
                    x.getConsentData() &&
                        v.forEach(function (e) {
                            e.uspConsent = x.getConsentData();
                        }),
                    v
                );
            },
            "makeBidRequests"
        )),
            (I.callBids = function (e, t, d, f, l, p, i) {
                var n, r, g, b, v;
                t.length
                    ? ((r = (n = u(
                          t.reduce(
                              function (e, t) {
                                  return e[Number(void 0 !== t.src && t.src === O.S2S.SRC)].push(t), e;
                              },
                              [[], []]
                          ),
                          2
                      ))[0]),
                      (g = n[1]),
                      (b = []),
                      g.forEach(function (e) {
                          for (var t = -1, n = 0; n < b.length; ++n)
                              if (e.tid === b[n].tid) {
                                  t = n;
                                  break;
                              }
                          t <= -1 && b.push(e);
                      }),
                      (v = 0),
                      w.forEach(function (e) {
                          var t, n, r, i, o, a, c, u, s;
                          e &&
                              b[v] &&
                              m()(e.bidders, b[v].bidderCode) &&
                              ((t = Object(y.b)(p, l ? { request: l.request.bind(null, "s2s"), done: l.done } : void 0)),
                              (n = e.bidders),
                              (r = C[e.adapter]),
                              (i = b[v].tid),
                              (o = b[v].adUnitsS2SCopy),
                              (a = g.filter(function (e) {
                                  return e.tid === i;
                              })),
                              r
                                  ? (c = { tid: i, ad_units: o, s2sConfig: e }).ad_units.length &&
                                    ((u = a.map(function (e) {
                                        return (e.start = Object(h.timestamp)()), f.bind(e);
                                    })),
                                    (s = c.ad_units.reduce(function (e, t) {
                                        return e.concat(
                                            (t.bids || []).reduce(function (e, t) {
                                                return e.concat(t.bidder);
                                            }, [])
                                        );
                                    }, [])),
                                    E.logMessage(
                                        "CALLING S2S HEADER BIDDERS ==== ".concat(
                                            n
                                                .filter(function (e) {
                                                    return m()(s, e);
                                                })
                                                .join(",")
                                        )
                                    ),
                                    a.forEach(function (e) {
                                        T.emit(O.EVENTS.BID_REQUESTED, e);
                                    }),
                                    r.callBids(
                                        c,
                                        g,
                                        function (e, t) {
                                            var n = Object(h.getBidderRequest)(g, t.bidderCode, e);
                                            n && d.call(n, e, t);
                                        },
                                        function () {
                                            return u.forEach(function (e) {
                                                return e();
                                            });
                                        },
                                        t
                                    ))
                                  : E.logError("missing " + e.adapter),
                              v++);
                      }),
                      r.forEach(function (t) {
                          t.start = Object(h.timestamp)();
                          var e = C[t.bidderCode];
                          a.b.runWithBidder(t.bidderCode, function () {
                              E.logMessage("CALLING BIDDER"), T.emit(O.EVENTS.BID_REQUESTED, t);
                          });
                          var n = Object(y.b)(p, l ? { request: l.request.bind(null, t.bidderCode), done: l.done } : void 0),
                              r = f.bind(t);
                          try {
                              a.b.runWithBidder(t.bidderCode, h.bind.call(e.callBids, e, t, d.bind(t), r, n, i, a.b.callbackWithBidder(t.bidderCode)));
                          } catch (e) {
                              E.logError("".concat(t.bidderCode, " Bid Adapter emitted an uncaught error when parsing their bidRequest"), { e: e, bidRequest: t }), r();
                          }
                      }))
                    : E.logWarn("callBids executed with no bidRequests.  Were they filtered by labels or sizing?");
            }),
            (I.videoAdapters = []),
            (I.registerBidAdapter = function (e, t) {
                var n = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).supportedMediaTypes,
                    r = void 0 === n ? [] : n;
                e && t
                    ? "function" == typeof e.callBids
                        ? ((C[t] = e), m()(r, "video") && I.videoAdapters.push(t), m()(r, "native") && g.f.push(t))
                        : E.logError("Bidder adaptor error for bidder code: " + t + "bidder must implement a callBids() function")
                    : E.logError("bidAdapter or bidderCode not specified");
            }),
            (I.aliasBidAdapter = function (n, r, e) {
                var t, i;
                if (void 0 === C[r]) {
                    var o = C[n];
                    if (void 0 === o) {
                        var a = [];
                        w.forEach(function (e) {
                            var t;
                            e.bidders && e.bidders.length && ((t = e && e.bidders), e && m()(t, r) ? (j[r] = n) : a.push(n));
                        }),
                            a.forEach(function (e) {
                                E.logError('bidderCode "' + e + '" is not an existing bidder.', "adapterManager.aliasBidAdapter");
                            });
                    } else
                        try {
                            var c,
                                u,
                                s,
                                d,
                                f = ((t = n), (i = []), m()(I.videoAdapters, t) && i.push("video"), m()(g.f, t) && i.push("native"), i);
                            o.constructor.prototype != Object.prototype
                                ? (d = new o.constructor()).setBidderCode(r)
                                : ((c = o.getSpec()), (u = e && e.gvlid), (s = e && e.skipPbsAliasing), (d = Object(l.newBidder)(v({}, c, { code: r, gvlid: u, skipPbsAliasing: s }))), (j[r] = n)),
                                I.registerBidAdapter(d, r, { supportedMediaTypes: f });
                        } catch (e) {
                            E.logError(n + " bidder does not currently support aliasing.", "adapterManager.aliasBidAdapter");
                        }
                } else E.logMessage('alias name "' + r + '" has been already specified.');
            }),
            (I.registerAnalyticsAdapter = function (e) {
                var t = e.adapter,
                    n = e.code,
                    r = e.gvlid;
                t && n
                    ? "function" == typeof t.enableAnalytics
                        ? ((t.code = n), (_[n] = { adapter: t, gvlid: r }))
                        : E.logError('Prebid Error: Analytics adaptor error for analytics "'.concat(n, '"\n        analytics adapter must implement an enableAnalytics() function'))
                    : E.logError("Prebid Error: analyticsAdapter or analyticsCode not specified");
            }),
            (I.enableAnalytics = function (e) {
                E.isArray(e) || (e = [e]),
                    E._each(e, function (e) {
                        var t = _[e.provider].adapter;
                        t ? t.enableAnalytics(e) : E.logError("Prebid Error: no analytics adapter found in registry for\n        ".concat(e.provider, "."));
                    });
            }),
            (I.getBidAdapter = function (e) {
                return C[e];
            }),
            (I.getAnalyticsAdapter = function (e) {
                return _[e];
            }),
            (I.callTimedOutBidders = function (t, n, r) {
                (n = n.map(function (e) {
                    return (e.params = E.getUserConfiguredParams(t, e.adUnitCode, e.bidder)), (e.timeout = r), e;
                })),
                    (n = E.groupBy(n, "bidder")),
                    Object.keys(n).forEach(function (e) {
                        M(e, "onTimeout", n[e]);
                    });
            }),
            (I.callBidWonBidder = function (e, t, n) {
                (t.params = E.getUserConfiguredParams(n, t.adUnitCode, t.bidder)), b.a.incrementBidderWinsCounter(t.adUnitCode, t.bidder), M(e, "onBidWon", t);
            }),
            (I.callSetTargetingBidder = function (e, t) {
                M(e, "onSetTargeting", t);
            }),
            (I.callBidViewableBidder = function (e, t) {
                M(e, "onBidViewable", t);
            }),
            (t.default = I);
    },
    80: function (e, t, n) {
        var r = n(30);
        e.exports =
            !!Object.getOwnPropertySymbols &&
            !r(function () {
                return !String(Symbol());
            });
    },
    81: function (e, t, n) {
        function r(c) {
            return function (e, t, n) {
                var r,
                    i = u(e),
                    o = s(i.length),
                    a = d(n, o);
                if (c && t != t) {
                    for (; a < o; ) if ((r = i[a++]) != r) return !0;
                } else for (; a < o; a++) if ((c || a in i) && i[a] === t) return c || a || 0;
                return !c && -1;
            };
        }
        var u = n(46),
            s = n(50),
            d = n(111);
        e.exports = { includes: r(!0), indexOf: r(!1) };
    },
    82: function (e, t, n) {
        var r = n(112);
        n(135), n(137), n(139), n(141), n(143), n(144), n(145), n(146), n(147), n(148), n(149), n(150), n(151), n(152), n(153), n(154), n(155), n(156), (e.exports = r);
    },
    83: function (e, t, n) {
        function r(e) {
            c(e, d, { value: { objectID: "O" + ++f, weakData: {} } });
        }
        var i = n(53),
            o = n(31),
            a = n(27),
            c = n(34).f,
            u = n(59),
            s = n(115),
            d = u("meta"),
            f = 0,
            l =
                Object.isExtensible ||
                function () {
                    return !0;
                },
            p = (e.exports = {
                REQUIRED: !1,
                fastKey: function (e, t) {
                    if (!o(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                    if (!a(e, d)) {
                        if (!l(e)) return "F";
                        if (!t) return "E";
                        r(e);
                    }
                    return e[d].objectID;
                },
                getWeakData: function (e, t) {
                    if (!a(e, d)) {
                        if (!l(e)) return !0;
                        if (!t) return !1;
                        r(e);
                    }
                    return e[d].weakData;
                },
                onFreeze: function (e) {
                    return s && p.REQUIRED && l(e) && !a(e, d) && r(e), e;
                },
            });
        i[d] = !0;
    },
    84: function (e, t, n) {
        var r = n(22),
            i = n(40),
            o = r("iterator"),
            a = Array.prototype;
        e.exports = function (e) {
            return void 0 !== e && (i.Array === e || a[o] === e);
        };
    },
    85: function (e, t, n) {
        var o = n(15);
        e.exports = function (t, e, n, r) {
            try {
                return r ? e(o(n)[0], n[1]) : e(n);
            } catch (e) {
                var i = t.return;
                throw (void 0 !== i && o(i.call(t)), e);
            }
        };
    },
    86: function (e, t) {
        e.exports = function (e, t, n) {
            if (!(e instanceof t)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
            return e;
        };
    },
    87: function (e, t, n) {
        function r() {}
        function i(e) {
            return "<script>" + e + "</" + g + ">";
        }
        var o,
            a = n(15),
            c = n(120),
            u = n(88),
            s = n(53),
            d = n(123),
            f = n(77),
            l = n(65),
            p = "prototype",
            g = "script",
            b = l("IE_PROTO"),
            v = function () {
                try {
                    o = document.domain && new ActiveXObject("htmlfile");
                } catch (e) {}
                var e, t;
                v = o
                    ? (function (e) {
                          e.write(i("")), e.close();
                          var t = e.parentWindow.Object;
                          return (e = null), t;
                      })(o)
                    : (((t = f("iframe")).style.display = "none"), d.appendChild(t), (t.src = String("javascript:")), (e = t.contentWindow.document).open(), e.write(i("document.F=Object")), e.close(), e.F);
                for (var n = u.length; n--; ) delete v[p][u[n]];
                return v();
            };
        (s[b] = !0),
            (e.exports =
                Object.create ||
                function (e, t) {
                    var n;
                    return null !== e ? ((r[p] = a(e)), (n = new r()), (r[p] = null), (n[b] = e)) : (n = v()), void 0 === t ? n : c(n, t);
                });
    },
    88: function (e, t) {
        e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
    },
    89: function (e, t, n) {
        var i = n(32);
        e.exports = function (e, t, n, r) {
            r && r.enumerable ? (e[t] = n) : i(e, t, n);
        };
    },
    9: function (e, t, n) {
        function r() {
            return (r =
                Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                    }
                    return e;
                }).apply(this, arguments);
        }
        var c,
            i,
            u = n(0),
            o = n(5),
            a = Array.prototype.slice,
            s = Array.prototype.push,
            d = u._map(o.EVENTS, function (e) {
                return e;
            }),
            f = o.EVENT_ID_PATHS,
            l = [];
        e.exports =
            ((c = {}),
            ((i = {}).on = function (e, t, n) {
                var r, i;
                (i = e), u.contains(d, i) ? ((r = c[e] || { que: [] }), n ? ((r[n] = r[n] || { que: [] }), r[n].que.push(t)) : r.que.push(t), (c[e] = r)) : u.logError("Wrong event name : " + e + " Valid event names :" + d);
            }),
            (i.emit = function (e) {
                !(function (e, t) {
                    u.logMessage("Emitting event for: " + e);
                    var n = t[0] || {},
                        r = n[f[e]],
                        i = c[e] || { que: [] },
                        o = u._map(i, function (e, t) {
                            return t;
                        }),
                        a = [];
                    l.push({ eventType: e, args: n, id: r, elapsedTime: u.getPerformanceNow() }),
                        r && u.contains(o, r) && s.apply(a, i[r].que),
                        s.apply(a, i.que),
                        u._each(a, function (e) {
                            if (e)
                                try {
                                    e.apply(null, t);
                                } catch (e) {
                                    u.logError("Error executing handler:", "events.js", e);
                                }
                        });
                })(e, a.call(arguments, 1));
            }),
            (i.off = function (e, n, r) {
                var i = c[e];
                u.isEmpty(i) ||
                    (u.isEmpty(i.que) && u.isEmpty(i[r])) ||
                    (r && (u.isEmpty(i[r]) || u.isEmpty(i[r].que))) ||
                    (r
                        ? u._each(i[r].que, function (e) {
                              var t = i[r].que;
                              e === n && t.splice(t.indexOf(e), 1);
                          })
                        : u._each(i.que, function (e) {
                              var t = i.que;
                              e === n && t.splice(t.indexOf(e), 1);
                          }),
                    (c[e] = i));
            }),
            (i.get = function () {
                return c;
            }),
            (i.getEvents = function () {
                var n = [];
                return (
                    u._each(l, function (e) {
                        var t = r({}, e);
                        n.push(t);
                    }),
                    n
                );
            }),
            i);
    },
    90: function (e, t, n) {
        "use strict";
        var r,
            i,
            o,
            a = n(91),
            c = n(32),
            u = n(27),
            s = n(22),
            d = n(17),
            f = s("iterator"),
            l = !1;
        [].keys && ("next" in (o = [].keys()) ? (i = a(a(o))) !== Object.prototype && (r = i) : (l = !0)),
            null == r && (r = {}),
            d ||
                u(r, f) ||
                c(r, f, function () {
                    return this;
                }),
            (e.exports = { IteratorPrototype: r, BUGGY_SAFARI_ITERATORS: l });
    },
    91: function (e, t, n) {
        var r = n(27),
            i = n(57),
            o = n(65),
            a = n(126),
            c = o("IE_PROTO"),
            u = Object.prototype;
        e.exports = a
            ? Object.getPrototypeOf
            : function (e) {
                  return (e = i(e)), r(e, c) ? e[c] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? u : null;
              };
    },
    92: function (e, t, n) {
        "use strict";
        var i = n(131).charAt,
            r = n(54),
            o = n(66),
            a = "String Iterator",
            c = r.set,
            u = r.getterFor(a);
        o(
            String,
            "String",
            function (e) {
                c(this, { type: a, string: String(e), index: 0 });
            },
            function () {
                var e,
                    t = u(this),
                    n = t.string,
                    r = t.index;
                return r >= n.length ? { value: void 0, done: !0 } : ((e = i(n, r)), (t.index += e.length), { value: e, done: !1 });
            }
        );
    },
    93: function (e, t, n) {
        var r = n(15),
            i = n(61);
        e.exports = function (e) {
            var t = i(e);
            if ("function" != typeof t) throw TypeError(String(e) + " is not iterable");
            return r(t.call(e));
        };
    },
    94: function (e, t, n) {
        var r = n(157);
        e.exports = r;
    },
    95: function (e, t, n) {
        "use strict";
        t.a = function (e) {
            var t = e;
            return {
                callBids: function () {},
                setBidderCode: function (e) {
                    t = e;
                },
                getBidderCode: function () {
                    return t;
                },
            };
        };
    },
    96: function (e, t, n) {
        "use strict";
        (t.a = function (e, t) {
            if (e.labelAll) return { labelAll: !0, labels: e.labelAll, activeLabels: t };
            return { labelAll: !1, labels: e.labelAny, activeLabels: t };
        }),
            (t.c = function (e) {
                var t = v(1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : b);
                return !t.shouldFilter || !!t.sizesSupported[e];
            }),
            (t.b = function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.labels,
                    n = void 0 === t ? [] : t,
                    r = e.labelAll,
                    i = void 0 !== r && r,
                    o = e.activeLabels,
                    a = void 0 === o ? [] : o,
                    c = 1 < arguments.length ? arguments[1] : void 0,
                    u = 2 < arguments.length ? arguments[2] : void 0,
                    s = v(3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : b);
                c = Object(p.isPlainObject)(c) ? Object(p.deepClone)(c) : u ? { banner: { sizes: u } } : {};
                var d = Object(p.deepAccess)(c, "banner.sizes");
                s.shouldFilter &&
                    d &&
                    (c.banner.sizes = d.filter(function (e) {
                        return s.sizesSupported[e];
                    }));
                var f = Object.keys(c),
                    l = {
                        active:
                            f.every(function (e) {
                                return "banner" !== e;
                            }) ||
                            (f.some(function (e) {
                                return "banner" === e;
                            }) &&
                                0 < Object(p.deepAccess)(c, "banner.sizes.length") &&
                                (0 === n.length ||
                                    (!i &&
                                        (n.some(function (e) {
                                            return s.labels[e];
                                        }) ||
                                            n.some(function (e) {
                                                return g()(a, e);
                                            }))) ||
                                    (i &&
                                        n.reduce(function (e, t) {
                                            return e ? s.labels[t] || g()(a, t) : e;
                                        }, !0)))),
                        mediaTypes: c,
                    };
                d && d.length !== c.banner.sizes.length && (l.filterResults = { before: d, after: c.banner.sizes });
                return l;
            });
        var r = n(3),
            p = n(0),
            i = n(13),
            g = n.n(i);
        function o(e) {
            return (o =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        var b = [];
        function v(e) {
            return e.reduce(
                function (n, r) {
                    if ("object" === o(r) && "string" == typeof r.mediaQuery) {
                        var t = !1;
                        if ("" === r.mediaQuery) t = !0;
                        else
                            try {
                                t = Object(p.getWindowTop)().matchMedia(r.mediaQuery).matches;
                            } catch (e) {
                                Object(p.logWarn)("Unfriendly iFrame blocks sizeConfig from being correctly evaluated"), (t = matchMedia(r.mediaQuery).matches);
                            }
                        t &&
                            (Array.isArray(r.sizesSupported) && (n.shouldFilter = !0),
                            ["labels", "sizesSupported"].forEach(function (t) {
                                return (r[t] || []).forEach(function (e) {
                                    return (n[t][e] = !0);
                                });
                            }));
                    } else Object(p.logWarn)('sizeConfig rule missing required property "mediaQuery"');
                    return n;
                },
                { labels: {}, sizesSupported: {}, shouldFilter: !1 }
            );
        }
        r.b.getConfig("sizeConfig", function (e) {
            return (t = e.sizeConfig), void (b = t);
            var t;
        });
    },
    97: function (e, t, n) {
        "use strict";
        (t.b = function (e, t, n) {
            var r = { puts: e.map(c, n) };
            Object(i.a)(
                o.b.getConfig("cache.url"),
                (function (n) {
                    return {
                        success: function (e) {
                            var t;
                            try {
                                t = JSON.parse(e).responses;
                            } catch (e) {
                                return void n(e, []);
                            }
                            t ? n(null, t) : n(new Error("The cache server didn't respond with a responses property."), []);
                        },
                        error: function (e, t) {
                            n(new Error("Error storing video ad in the cache: ".concat(e, ": ").concat(JSON.stringify(t))), []);
                        },
                    };
                })(t),
                JSON.stringify(r),
                { contentType: "text/plain", withCredentials: !0 }
            );
        }),
            (t.a = function (e) {
                return "".concat(o.b.getConfig("cache.url"), "?uuid=").concat(e);
            });
        var i = n(4),
            o = n(3),
            a = n(0);
        function c(e) {
            var t,
                n,
                r,
                i = {
                    type: "xml",
                    value: e.vastXml
                        ? e.vastXml
                        : ((t = e.vastUrl),
                          (n = e.vastImpUrl),
                          (r = n ? "<![CDATA[".concat(n, "]]>") : ""),
                          '<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA['
                              .concat(t, "]]></VASTAdTagURI>\n        <Impression>")
                              .concat(r, "</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>")),
                    ttlseconds: Number(e.ttl),
                };
            return (
                o.b.getConfig("cache.vasttrack") && ((i.bidder = e.bidder), (i.bidid = e.requestId), (i.aid = e.auctionId), a.isPlainObject(this) && this.hasOwnProperty("auctionStart") && (i.timestamp = this.auctionStart)),
                "string" == typeof e.customCacheKey && "" !== e.customCacheKey && (i.key = e.customCacheKey),
                i
            );
        }
    },
});
pbjsChunk(
    [374],
    {
        280: function (e, t, r) {
            e.exports = r(281);
        },
        281: function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                r.d(t, "spec", function () {
                    return M;
                });
            var s = r(0),
                n = r(1),
                i = r(2);
            function a() {
                return (a =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            function c(e) {
                return (c =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                          })(e);
            }
            function o() {
                var e = p(["dcn=", "&pos=", "&cmd=bid", ""]);
                return (
                    (o = function () {
                        return e;
                    }),
                    e
                );
            }
            function u() {
                var e = p(["", "/bidRequest?"]);
                return (
                    (u = function () {
                        return e;
                    }),
                    e
                );
            }
            function d() {
                var e = p(["", "/pubapi/3.0/", "/", "/", "/", "/ADTECH;v=2;cmd=bid;cors=yes;alias=", ";misc=", ";", ""]);
                return (
                    (d = function () {
                        return e;
                    }),
                    e
                );
            }
            function p(e, t) {
                return (t = t || e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
            }
            var l = { AOL: "aol", VERIZON: "verizon", ONEMOBILE: "onemobile", ONEDISPLAY: "onedisplay" },
                m = { GET: "display-get" },
                f = { GET: "mobile-get", POST: "mobile-post" },
                b = { TAG: "iframe", TYPE: "iframe" },
                v = { TAG: "img", TYPE: "image" },
                h = ["adserver.org", "criteo.com", "id5-sync.com", "intentiq.com", "liveintent.com", "quantcast.com", "verizonmedia.com", "liveramp.com"],
                g = S(d(), "host", "network", "placement", "pageid", "sizeid", "alias", "misc", "dynamicParams"),
                y = S(u(), "host"),
                O = S(o(), "dcn", "pos", "dynamicParams"),
                E = { us: "adserver-us.adtech.advertising.com", eu: "adserver-eu.adtech.advertising.com", as: "adserver-as.adtech.advertising.com" },
                I = "https",
                P = 1;
            function S(a) {
                for (var e = arguments.length, r = new Array(1 < e ? e - 1 : 0), t = 1; t < e; t++) r[t - 1] = arguments[t];
                return function () {
                    for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                    var i = n[n.length - 1] || {},
                        o = [a[0]];
                    return (
                        r.forEach(function (e, t) {
                            var r = s.isInteger(e) ? n[e] : i[e];
                            o.push(r, a[t + 1]);
                        }),
                        o.join("")
                    );
                };
            }
            function T(e) {
                return e === l.AOL || e === l.VERIZON || e === l.ONEMOBILE;
            }
            function x(e) {
                if (T(e.bidder) && e.params.id && e.params.imp && e.params.imp[0]) {
                    var t = e.params.imp[0];
                    return t.id && t.tagid && ((t.banner && t.banner.w && t.banner.h) || (t.video && t.video.mimes && t.video.minduration && t.video.maxduration));
                }
            }
            function R(e) {
                return T(e.bidder) && e.params.dcn && e.params.pos;
            }
            function C(e) {
                return ((t = e.bidder) === l.AOL || t === l.VERIZON || t === l.ONEDISPLAY) && e.params.placement && e.params.network;
                var t;
            }
            function A(e) {
                return e.userIdAsEids.filter(function (e) {
                    return -1 !== h.indexOf(e.source);
                });
            }
            var M = {
                code: l.AOL,
                gvlid: 25,
                aliases: [l.ONEMOBILE, l.ONEDISPLAY, l.VERIZON],
                supportedMediaTypes: [i.b],
                isBidRequestValid: function (e) {
                    return C(e) || R((t = e)) || x(t);
                    var t;
                },
                buildRequests: function (e, t) {
                    var n = this,
                        i = {};
                    return (
                        t && ((i.gdpr = t.gdprConsent), (i.uspConsent = t.uspConsent)),
                        e.map(function (e) {
                            var t,
                                r = R((t = e)) ? f.GET : x(t) ? f.POST : C(t) ? m.GET : void 0;
                            if (r) return n.formatBidRequest(r, e, i);
                        })
                    );
                },
                interpretResponse: function (e, t) {
                    var r = e.body;
                    if (r) {
                        var n = this._parseBidResponse(r, t);
                        if (n) return n;
                    } else s.logError("Empty bid response", t.bidderCode, r);
                },
                getUserSyncs: function (e, t) {
                    var r = !s.isEmpty(t) && t[0].body;
                    return r && r.ext && r.ext.pixels ? this.parsePixelItems(r.ext.pixels) : [];
                },
                formatBidRequest: function (e, t, r) {
                    var n;
                    switch (e) {
                        case m.GET:
                            n = { url: this.buildMarketplaceUrl(t, r), method: "GET", ttl: 60 };
                            break;
                        case f.GET:
                            n = { url: this.buildOneMobileGetUrl(t, r), method: "GET", ttl: 3600 };
                            break;
                        case f.POST:
                            n = { url: this.buildOneMobileBaseUrl(t), method: "POST", ttl: 3600, data: this.buildOpenRtbRequestData(t, r), options: { contentType: "application/json", customHeaders: { "x-openrtb-version": "2.2" } } };
                    }
                    return (n.bidderCode = t.bidder), (n.bidId = t.bidId), (n.userSyncOn = t.params.userSyncOn), n;
                },
                buildMarketplaceUrl: function (e, t) {
                    var r,
                        n = e.params,
                        i = n.server,
                        o = n.region || "us";
                    return (
                        E.hasOwnProperty(o) || (s.logWarn("Unknown region '".concat(o, "' for AOL bidder.")), (o = "us")),
                        (r = i || E[o]),
                        (n.region = o),
                        this.applyProtocol(
                            g({
                                host: r,
                                network: n.network,
                                placement: parseInt(n.placement),
                                pageid: n.pageId || 0,
                                sizeid: n.sizeId || 0,
                                alias: n.alias || s.getUniqueIdentifierStr(),
                                misc: new Date().getTime(),
                                dynamicParams: this.formatMarketplaceDynamicParams(n, t),
                            })
                        )
                    );
                },
                buildOneMobileGetUrl: function (e, t) {
                    var r = e.params,
                        n = r.dcn,
                        i = r.pos,
                        o = r.ext;
                    "object" === c(e.userId) &&
                        ((o = o || {}),
                        A(e).forEach(function (e) {
                            o["eid" + e.source] = e.uids[0].id;
                        }));
                    var a,
                        s = this.buildOneMobileBaseUrl(e);
                    return n && i && ((a = this.formatOneMobileDynamicParams(o, t)), (s += O({ dcn: n, pos: i, dynamicParams: a }))), s;
                },
                buildOneMobileBaseUrl: function (e) {
                    return this.applyProtocol(y({ host: e.params.host || "c2shb.localhost" }));
                },
                applyProtocol: function (e) {
                    return /^https?:\/\//i.test(e) ? e : 0 === e.indexOf("//") ? "".concat(I, ":").concat(e) : "".concat(I, "://").concat(e);
                },
                formatMarketplaceDynamicParams: function (e, t) {
                    var r = 0 < arguments.length && void 0 !== e ? e : {},
                        n = 1 < arguments.length && void 0 !== t ? t : {},
                        i = {};
                    a(i, this.formatKeyValues(r.keyValues)), a(i, this.formatConsentData(n));
                    var o = "";
                    return (
                        s._each(i, function (e, t) {
                            o += "".concat(t, "=").concat(encodeURIComponent(e), ";");
                        }),
                        o
                    );
                },
                formatOneMobileDynamicParams: function (e, t) {
                    var r = 0 < arguments.length && void 0 !== e ? e : {},
                        n = 1 < arguments.length && void 0 !== t ? t : {};
                    this.isSecureProtocol() && (r.secure = P), a(r, this.formatConsentData(n));
                    var i = "";
                    return (
                        s._each(r, function (e, t) {
                            i += "&".concat(t, "=").concat(encodeURIComponent(e));
                        }),
                        i
                    );
                },
                buildOpenRtbRequestData: function (e, t) {
                    var r,
                        n = 1 < arguments.length && void 0 !== t ? t : {},
                        i = { id: e.params.id, imp: e.params.imp };
                    return (
                        this.isEUConsentRequired(n) && (s.deepSetValue(i, "regs.ext.gdpr", P), n.gdpr.consentString && s.deepSetValue(i, "user.ext.consent", n.gdpr.consentString)),
                        n.uspConsent && s.deepSetValue(i, "regs.ext.us_privacy", n.uspConsent),
                        "object" === c(e.userId) && ((i.user = i.user || {}), (i.user.ext = i.user.ext || {}), 0 < (r = A(e)).length && (i.user.ext.eids = r)),
                        i
                    );
                },
                isEUConsentRequired: function (e) {
                    return !!(e && e.gdpr && e.gdpr.gdprApplies);
                },
                formatKeyValues: function (e) {
                    var r = {};
                    return (
                        s._each(e, function (e, t) {
                            r["kv".concat(t)] = e;
                        }),
                        r
                    );
                },
                formatConsentData: function (e) {
                    var t = {};
                    return this.isEUConsentRequired(e) && ((t.gdpr = P), e.gdpr.consentString && (t.euconsent = e.gdpr.consentString)), e.uspConsent && (t.us_privacy = e.uspConsent), t;
                },
                parsePixelItems: function (e) {
                    var t,
                        n = /\w*(?=\s)/,
                        i = /src=("|')(.*?)\1/,
                        o = [];
                    return (
                        !e ||
                            ((t = e.match(/(img|iframe)[\s\S]*?src\s*=\s*("|')(.*?)\2/gi)) &&
                                t.forEach(function (e) {
                                    var t = e.match(n)[0],
                                        r = e.match(i)[2];
                                    t && r && o.push({ type: t === v.TAG ? v.TYPE : b.TYPE, url: r });
                                })),
                        o
                    );
                },
                _parseBidResponse: function (e, t) {
                    var r, n;
                    try {
                        r = e.seatbid[0].bid[0];
                    } catch (e) {
                        return;
                    }
                    if (r.ext && r.ext.encp) n = r.ext.encp;
                    else if (null === (n = r.price) || isNaN(n)) return void s.logError("Invalid price in bid response", l.AOL, r);
                    return {
                        bidderCode: t.bidderCode,
                        requestId: t.bidId,
                        ad: r.adm,
                        cpm: n,
                        width: r.w,
                        height: r.h,
                        creativeId: r.crid || 0,
                        pubapiId: e.id,
                        currency: e.cur || "USD",
                        dealId: r.dealid,
                        netRevenue: !0,
                        meta: { advertiserDomains: r && r.adomain ? r.adomain : [] },
                        ttl: t.ttl,
                    };
                },
                isOneMobileBidder: T,
                isSecureProtocol: function () {
                    return "https:" === document.location.protocol;
                },
            };
        },
    },
    [280]
);
pbjsChunk(
    [371],
    {
        290: function (e, r, a) {
            e.exports = a(291);
        },
        291: function (e, r, a) {
            "use strict";
            Object.defineProperty(r, "__esModule", { value: !0 }),
                a.d(r, "spec", function () {
                    return k;
                });
            var f = a(12),
                I = a(0),
                A = a(3),
                g = a(1),
                v = a(2),
                u = a(23),
                t = a(10),
                x = a.n(t),
                n = a(13),
                w = a.n(n),
                y = a(24),
                i = a(7);
            function s(e) {
                return (s =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                          })(e);
            }
            function b() {
                return (b =
                    Object.assign ||
                    function (e) {
                        for (var r = 1; r < arguments.length; r++) {
                            var a = arguments[r];
                            for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            function C(e) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return o(e);
                    })(e) ||
                    (function (e) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
                    })(e) ||
                    (function (e, r) {
                        if (!e) return;
                        if ("string" == typeof e) return o(e, r);
                        var a = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === a && e.constructor && (a = e.constructor.name);
                        if ("Map" === a || "Set" === a) return Array.from(e);
                        if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return o(e, r);
                    })(e) ||
                    (function () {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function o(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var a = 0, t = new Array(r); a < r; a++) t[a] = e[a];
                return t;
            }
            var d = "appnexus",
                l = ["id", "minduration", "maxduration", "skippable", "playback_method", "frameworks", "context", "skipoffset"],
                S = ["age", "externalUid", "segments", "gender", "dnt", "language"],
                T = ["geo", "device_id"],
                E = ["enabled", "dongle", "member_id", "debug_timeout"],
                m = {
                    playback_method: { unknown: 0, auto_play_sound_on: 1, auto_play_sound_off: 2, click_to_play: 3, mouse_over: 4, auto_play_sound_unknown: 5 },
                    context: { unknown: 0, pre_roll: 1, mid_roll: 2, post_roll: 3, localhost: 4, "in-banner": 5 },
                },
                h = {
                    body: "description",
                    body2: "desc2",
                    cta: "ctatext",
                    image: { serverName: "main_image", requiredParams: { required: !0 } },
                    icon: { serverName: "icon", requiredParams: { required: !0 } },
                    sponsoredBy: "sponsored_by",
                    privacyLink: "privacy_link",
                    salePrice: "saleprice",
                    displayUrl: "displayurl",
                },
                p = "<script",
                c = /\/\/cdn\.adnxs\.com\/v|\/\/cdn\.adnxs\-simple\.com\/v/,
                _ = "trk.js",
                O = Object(i.b)(32, d),
                k = {
                    code: d,
                    gvlid: 32,
                    aliases: [
                        { code: "appnexusAst", gvlid: 32 },
                        { code: "brealtime" },
                        { code: "emxdigital", gvlid: 183 },
                        { code: "pagescience" },
                        { code: "defymedia" },
                        { code: "gourmetads" },
                        { code: "matomy" },
                        { code: "featureforward" },
                        { code: "oftmedia" },
                        { code: "districtm", gvlid: 144 },
                        { code: "adasta" },
                        { code: "beintoo", gvlid: 618 },
                    ],
                    supportedMediaTypes: [v.b, v.d, v.c],
                    isBidRequestValid: function (e) {
                        return !!(e.params.placementId || (e.params.member && e.params.invCode));
                    },
                    buildRequests: function (e, r) {
                        var t = e.map(N),
                            n = x()(e, z),
                            i = {};
                        !0 === A.b.getConfig("coppa") && (i = { coppa: !0 }),
                            n &&
                                Object.keys(n.params.user)
                                    .filter(function (e) {
                                        return w()(S, e);
                                    })
                                    .forEach(function (e) {
                                        var r,
                                            a = I.convertCamelToUnderscore(e);
                                        "segments" === e && I.isArray(n.params.user[e])
                                            ? ((r = []),
                                              n.params.user[e].forEach(function (e) {
                                                  I.isNumber(e) ? r.push({ id: e }) : I.isPlainObject(e) && r.push(e);
                                              }),
                                              (i[a] = r))
                                            : "segments" !== e && (i[a] = n.params.user[e]);
                                    });
                        var a,
                            s = x()(e, D);
                        s &&
                            s.params &&
                            s.params.app &&
                            ((a = {}),
                            Object.keys(s.params.app)
                                .filter(function (e) {
                                    return w()(T, e);
                                })
                                .forEach(function (e) {
                                    return (a[e] = s.params.app[e]);
                                }));
                        var o,
                            d = x()(e, B);
                        d && d.params && s.params.app && s.params.app.id && (o = { appid: d.params.app.id });
                        var p = {},
                            c = {},
                            u = O.getCookie("apn_prebid_debug") || null;
                        if (u)
                            try {
                                p = JSON.parse(u);
                            } catch (e) {
                                I.logError("AppNexus Debug Auction Cookie Error:\n\n" + e);
                            }
                        else {
                            var l = x()(e, F);
                            l && l.debug && (p = l.debug);
                        }
                        p &&
                            p.enabled &&
                            Object.keys(p)
                                .filter(function (e) {
                                    return w()(E, e);
                                })
                                .forEach(function (e) {
                                    c[e] = p[e];
                                });
                        var m,
                            f,
                            g,
                            v,
                            y = x()(e, M),
                            b = y ? parseInt(y.params.member, 10) : 0,
                            h = e[0].schain,
                            _ = x()(e, J),
                            k = { tags: C(t), user: i, sdk: { source: "pbjs", version: "4.43.4" }, schain: h };
                        return (
                            _ && (k.iab_support = { omidpn: "Appnexus", omidpv: "4.43.4" }),
                            0 < b && (k.member_id = b),
                            s && (k.device = a),
                            d && (k.app = o),
                            A.b.getConfig("adpod.brandCategoryExclusion") && (k.brand_category_uniqueness = !0),
                            c.enabled && ((k.debug = c), I.logInfo("AppNexus Debug Auction Settings:\n\n" + JSON.stringify(c, null, 4))),
                            r &&
                                r.gdprConsent &&
                                ((k.gdpr_consent = { consent_string: r.gdprConsent.consentString, consent_required: r.gdprConsent.gdprApplies }),
                                r.gdprConsent.addtlConsent &&
                                    -1 !== r.gdprConsent.addtlConsent.indexOf("~") &&
                                    ((f = (m = r.gdprConsent.addtlConsent).substring(m.indexOf("~") + 1)),
                                    (k.gdpr_consent.addtl_consent = f.split(".").map(function (e) {
                                        return parseInt(e, 10);
                                    })))),
                            r && r.uspConsent && (k.us_privacy = r.uspConsent),
                            r &&
                                r.refererInfo &&
                                ((g = {
                                    rd_ref: encodeURIComponent(r.refererInfo.referer),
                                    rd_top: r.refererInfo.reachedTop,
                                    rd_ifs: r.refererInfo.numIframes,
                                    rd_stk: r.refererInfo.stack
                                        .map(function (e) {
                                            return encodeURIComponent(e);
                                        })
                                        .join(","),
                                }),
                                (k.referrer_detection = g)),
                            x()(e, V) &&
                                e.filter(V).forEach(function (r) {
                                    var e = (function (e, r) {
                                            var a = r.mediaTypes.video,
                                                t = a.durationRangeSec,
                                                n = a.requireExactDuration,
                                                i = (function (e) {
                                                    var r = e.adPodDurationSec,
                                                        a = e.durationRangeSec,
                                                        t = e.requireExactDuration,
                                                        n = I.getMinValueFromArray(a),
                                                        i = Math.floor(r / n);
                                                    return t ? Math.max(i, a.length) : i;
                                                })(r.mediaTypes.video),
                                                s = I.getMaxValueFromArray(t),
                                                o = e.filter(function (e) {
                                                    return e.uuid === r.bidId;
                                                }),
                                                d = I.fill.apply(I, C(o).concat([i]));
                                            {
                                                var p, c;
                                                n
                                                    ? ((p = Math.ceil(i / t.length)),
                                                      (c = I.chunk(d, p)),
                                                      t.forEach(function (r, e) {
                                                          c[e].map(function (e) {
                                                              W(e, "minduration", r), W(e, "maxduration", r);
                                                          });
                                                      }))
                                                    : d.map(function (e) {
                                                          return W(e, "maxduration", s);
                                                      });
                                            }
                                            return d;
                                        })(t, r),
                                        a = k.tags.filter(function (e) {
                                            return e.uuid !== r.bidId;
                                        });
                                    k.tags = [].concat(C(a), C(e));
                                }),
                            e[0].userId &&
                                (L((v = []), I.deepAccess(e[0], "userId.flocId.id"), "chrome.com", null),
                                L(v, I.deepAccess(e[0], "userId.criteoId"), "criteo.com", null),
                                L(v, I.deepAccess(e[0], "userId.netId"), "netid.de", null),
                                L(v, I.deepAccess(e[0], "userId.idl_env"), "liveramp.com", null),
                                L(v, I.deepAccess(e[0], "userId.tdid"), "adserver.org", "TDID"),
                                L(v, I.deepAccess(e[0], "userId.uid2.id"), "uidapi.com", "UID2"),
                                v.length && (k.eids = v)),
                            t[0].publisher_id && (k.publisher_id = t[0].publisher_id),
                            (function (e, a) {
                                var t = [],
                                    n = { withCredentials: !0 },
                                    i = "https://ib.localhost/ut/v3/prebid";
                                U(a) || (i = "https://ib.adnxs-simple.com/ut/v3/prebid");
                                ("TRUE" !== I.getParameterByName("apn_test").toUpperCase() && !0 !== A.b.getConfig("apn_test")) || (n.customHeaders = { "X-Is-Test": 1 });
                                {
                                    var s, r;
                                    15 < e.tags.length
                                        ? ((s = I.deepClone(e)),
                                          I.chunk(e.tags, 15).forEach(function (e) {
                                              s.tags = e;
                                              var r = JSON.stringify(s);
                                              t.push({ method: "POST", url: i, data: r, bidderRequest: a, options: n });
                                          }))
                                        : ((r = JSON.stringify(e)), (t = { method: "POST", url: i, data: r, bidderRequest: a, options: n }));
                                }
                                return t;
                            })(k, r)
                        );
                    },
                    interpretResponse: function (e, r) {
                        var i = this,
                            s = r.bidderRequest;
                        e = e.body;
                        var a,
                            o = [];
                        if (e && !e.error)
                            return (
                                e.tags &&
                                    e.tags.forEach(function (e) {
                                        var r,
                                            a,
                                            t,
                                            n =
                                                (r = e) &&
                                                r.ads &&
                                                r.ads.length &&
                                                x()(r.ads, function (e) {
                                                    return e.rtb;
                                                });
                                        n &&
                                            0 !== n.cpm &&
                                            w()(i.supportedMediaTypes, n.ad_type) &&
                                            (((a = (function (r, e, a) {
                                                var t = I.getBidRequest(r.uuid, [a]),
                                                    n = {
                                                        requestId: r.uuid,
                                                        cpm: e.cpm,
                                                        creativeId: e.creative_id,
                                                        dealId: e.deal_id,
                                                        currency: "USD",
                                                        netRevenue: !0,
                                                        ttl: 300,
                                                        adUnitCode: t.adUnitCode,
                                                        appnexus: { buyerMemberId: e.buyer_member_id, dealPriority: e.deal_priority, dealCode: e.deal_code },
                                                    };
                                                e.adomain && (n.meta = b({}, n.meta, { advertiserDomains: [] }));
                                                e.advertiser_id && (n.meta = b({}, n.meta, { advertiserId: e.advertiser_id }));
                                                if (e.rtb.video) {
                                                    var i, s;
                                                    switch ((b(n, { width: e.rtb.video.player_width, height: e.rtb.video.player_height, vastImpUrl: e.notify_url, ttl: 3600 }), I.deepAccess(t, "mediaTypes.video.context"))) {
                                                        case v.a:
                                                            var o = Object(g.getIabSubCategory)(t.bidder, e.brand_category_id);
                                                            n.meta = b({}, n.meta, { primaryCatId: o });
                                                            var d = e.deal_priority;
                                                            (n.video = { context: v.a, durationSeconds: Math.floor(e.rtb.video.duration_ms / 1e3), dealTier: d }), (n.vastUrl = e.rtb.video.asset_url);
                                                            break;
                                                        case y.b:
                                                            (n.adResponse = r),
                                                                (n.adResponse.ad = n.adResponse.ads[0]),
                                                                (n.adResponse.ad.video = n.adResponse.ad.rtb.video),
                                                                (n.vastXml = e.rtb.video.content),
                                                                e.renderer_url &&
                                                                    ((i = x()(a.bids, function (e) {
                                                                        return e.bidId === r.uuid;
                                                                    })),
                                                                    (s = I.deepAccess(i, "renderer.options")),
                                                                    (n.renderer = (function (e, r) {
                                                                        var a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                                                                            t = f.a.install({ id: r.renderer_id, url: r.renderer_url, config: a, loaded: !1, adUnitCode: e });
                                                                        try {
                                                                            t.setRender(H);
                                                                        } catch (e) {
                                                                            I.logWarn("Prebid Error calling setRender on renderer", e);
                                                                        }
                                                                        return (
                                                                            t.setEventHandlers({
                                                                                impression: function () {
                                                                                    return I.logMessage("AppNexus localhost video impression event");
                                                                                },
                                                                                loaded: function () {
                                                                                    return I.logMessage("AppNexus localhost video loaded event");
                                                                                },
                                                                                ended: function () {
                                                                                    I.logMessage("AppNexus localhost renderer video event"), (document.querySelector("#".concat(e)).style.display = "none");
                                                                                },
                                                                            }),
                                                                            t
                                                                        );
                                                                    })(n.adUnitCode, e, s)));
                                                            break;
                                                        case y.a:
                                                            n.vastUrl = e.notify_url + "&redir=" + encodeURIComponent(e.rtb.video.asset_url);
                                                    }
                                                } else if (e.rtb[v.c]) {
                                                    var p = e.rtb[v.c],
                                                        c = e.viewability.config.replace("src=", "data-src="),
                                                        u = p.javascript_trackers;
                                                    null == u ? (u = c) : I.isStr(u) ? (u = [u, c]) : u.push(c),
                                                        (n[v.c] = {
                                                            title: p.title,
                                                            body: p.desc,
                                                            body2: p.desc2,
                                                            cta: p.ctatext,
                                                            rating: p.rating,
                                                            sponsoredBy: p.sponsored,
                                                            privacyLink: p.privacy_link,
                                                            address: p.address,
                                                            downloads: p.downloads,
                                                            likes: p.likes,
                                                            phone: p.phone,
                                                            price: p.price,
                                                            salePrice: p.saleprice,
                                                            clickUrl: p.link.url,
                                                            displayUrl: p.displayurl,
                                                            clickTrackers: p.link.click_trackers,
                                                            impressionTrackers: p.impression_trackers,
                                                            javascriptTrackers: u,
                                                        }),
                                                        p.main_img && (n.native.image = { url: p.main_img.url, height: p.main_img.height, width: p.main_img.width }),
                                                        p.icon && (n.native.icon = { url: p.icon.url, height: p.icon.height, width: p.icon.width });
                                                } else {
                                                    b(n, { width: e.rtb.banner.width, height: e.rtb.banner.height, ad: e.rtb.banner.content });
                                                    try {
                                                        var l, m;
                                                        e.rtb.trackers && ((l = e.rtb.trackers[0].impression_urls[0]), (m = I.createTrackPixelHtml(l)), (n.ad += m));
                                                    } catch (e) {
                                                        I.logError("Error appending tracking pixel", e);
                                                    }
                                                }
                                                return n;
                                            })(e, n, s)).mediaType = (t = n.ad_type) === v.d ? v.d : t === v.c ? v.c : v.b),
                                            o.push(a));
                                    }),
                                e.debug &&
                                    e.debug.debug_info &&
                                    ((a = (a = "AppNexus Debug Auction for Prebid\n\n" + e.debug.debug_info)
                                        .replace(/(<td>|<th>)/gm, "\t")
                                        .replace(/(<\/td>|<\/th>)/gm, "\n")
                                        .replace(/^<br>/gm, "")
                                        .replace(/(<br>\n|<br>)/gm, "\n")
                                        .replace(/<h1>(.*)<\/h1>/gm, "\n\n===== $1 =====\n\n")
                                        .replace(/<h[2-6]>(.*)<\/h[2-6]>/gm, "\n\n*** $1 ***\n\n")
                                        .replace(/(<([^>]+)>)/gim, "")),
                                    I.logMessage("https://console.appnexus.com/docs/understanding-the-debug-auction"),
                                    I.logMessage(a)),
                                o
                            );
                        var t = "in response for ".concat(s.bidderCode, " adapter");
                        return e && e.error && (t += ": ".concat(e.error)), I.logError(t), o;
                    },
                    getMappingFileInfo: function () {
                        return { url: "https://acdn.adnxs-simple.com/prebid/appnexus-mapping/mappings.json", refreshInDays: 2 };
                    },
                    getUserSyncs: function (e, r, a) {
                        if (e.iframeEnabled && U({ gdprConsent: a })) return [{ type: "iframe", url: "https://acdn.localhost/dmp/async_usersync.html" }];
                    },
                    transformBidParams: function (a, e) {
                        return (
                            (a = I.convertTypes({ member: "string", invCode: "string", placementId: "number", keywords: I.transformBidderParamKeywords, publisherId: "number" }, a)),
                            e &&
                                ((a.use_pmt_rule = "boolean" == typeof a.usePaymentRule && a.usePaymentRule),
                                a.usePaymentRule && delete a.usePaymentRule,
                                R(a.keywords) && a.keywords.forEach(j),
                                Object.keys(a).forEach(function (e) {
                                    var r = I.convertCamelToUnderscore(e);
                                    r !== e && ((a[r] = a[e]), delete a[e]);
                                })),
                            a
                        );
                    },
                    onBidWon: function (e) {
                        e.native &&
                            (function (e) {
                                var r = (function (e) {
                                    var r;
                                    if (I.isStr(e) && P(e)) r = e;
                                    else if (I.isArray(e))
                                        for (var a = 0; a < e.length; a++) {
                                            var t = e[a];
                                            P(t) && (r = t);
                                        }
                                    return r;
                                })(e.native.javascriptTrackers);
                                if (r)
                                    for (
                                        var a = "pbjs_adid=" + e.adId + ";pbjs_auc=" + e.adUnitCode,
                                            t = (function (e) {
                                                var r = e.indexOf('src="') + 5,
                                                    a = e.indexOf('"', r);
                                                return e.substring(r, a);
                                            })(r),
                                            n = t.replace("dom_id=%native_dom_id%", a),
                                            i = document.getElementsByTagName("iframe"),
                                            s = !1,
                                            o = 0;
                                        o < i.length && !s;
                                        o++
                                    ) {
                                        var d = i[o];
                                        try {
                                            var p = d.contentDocument || d.contentWindow.document;
                                            if (p)
                                                for (var c = p.getElementsByTagName("script"), u = 0; u < c.length && !s; u++) {
                                                    var l = c[u];
                                                    l.getAttribute("data-src") == t && (l.setAttribute("src", n), l.setAttribute("data-src", ""), l.removeAttribute && l.removeAttribute("data-src"), (s = !0));
                                                }
                                        } catch (e) {
                                            if (!(e instanceof DOMException && "SecurityError" === e.name)) throw e;
                                        }
                                    }
                            })(e);
                    },
                };
            function R(e) {
                return I.isArray(e) && 0 < e.length;
            }
            function j(e) {
                R(e.value) && "" === e.value[0] && delete e.value;
            }
            function P(e) {
                var r = e.match(c),
                    a = null != r && 1 <= r.length,
                    t = e.match(_),
                    n = null != t && 1 <= t.length;
                return e.startsWith(p) && n && a;
            }
            function U(e) {
                var r = !0;
                return e && e.gdprConsent && e.gdprConsent.gdprApplies && 2 === e.gdprConsent.apiVersion && (r = !(!0 !== I.deepAccess(e.gdprConsent, "vendorData.purpose.consents.1"))), r;
            }
            function N(a) {
                var t = {};
                (t.sizes = q(a.sizes)),
                    (t.primary_size = t.sizes[0]),
                    (t.ad_types = []),
                    (t.uuid = a.bidId),
                    a.params.placementId ? (t.id = parseInt(a.params.placementId, 10)) : (t.code = a.params.invCode),
                    (t.allow_smaller_sizes = a.params.allowSmallerSizes || !1),
                    (t.use_pmt_rule = a.params.usePaymentRule || !1),
                    (t.prebid = !0),
                    (t.disable_psa = !0);
                var e,
                    r = (function (e) {
                        if (!I.isFn(e.getFloor)) return e.params.reserve ? e.params.reserve : null;
                        var r = e.getFloor({ currency: "USD", mediaType: "*", size: "*" });
                        return !I.isPlainObject(r) || isNaN(r.floor) || "USD" !== r.currency ? null : r.floor;
                    })(a);
                r && (t.reserve = r),
                    a.params.position && (t.position = { above: 1, below: 2 }[a.params.position] || 0),
                    a.params.trafficSourceCode && (t.traffic_source_code = a.params.trafficSourceCode),
                    a.params.privateSizes && (t.private_sizes = q(a.params.privateSizes)),
                    a.params.supplyType && (t.supply_type = a.params.supplyType),
                    a.params.pubClick && (t.pubclick = a.params.pubClick),
                    a.params.extInvCode && (t.ext_inv_code = a.params.extInvCode),
                    a.params.publisherId && (t.publisher_id = parseInt(a.params.publisherId, 10)),
                    a.params.externalImpId && (t.external_imp_id = a.params.externalImpId),
                    I.isEmpty(a.params.keywords) || (0 < (e = I.transformBidderParamKeywords(a.params.keywords)).length && e.forEach(j), (t.keywords = e));
                var n,
                    i,
                    s,
                    o = I.deepAccess(a, "ortb2Imp.ext.data.pbadslot");
                o && (t.gpid = o),
                    (a.mediaType !== v.c && !I.deepAccess(a, "mediaTypes.".concat(v.c))) ||
                        (t.ad_types.push(v.c),
                        0 === t.sizes.length && (t.sizes = q([1, 1])),
                        a.nativeParams &&
                            ((i = a.nativeParams),
                            (s = {}),
                            Object.keys(i).forEach(function (e) {
                                var r,
                                    a = (h[e] && h[e].serverName) || h[e] || e,
                                    t = h[e] && h[e].requiredParams;
                                (s[a] = b({}, t, i[e])),
                                    (a !== h.image.serverName && a !== h.icon.serverName) ||
                                        !s[a].sizes ||
                                        ((r = s[a].sizes),
                                        (I.isArrayOfNums(r) ||
                                            (I.isArray(r) &&
                                                0 < r.length &&
                                                r.every(function (e) {
                                                    return I.isArrayOfNums(e);
                                                }))) &&
                                            (s[a].sizes = q(s[a].sizes))),
                                    a === h.privacyLink && (s.privacy_supported = !0);
                            }),
                            (n = s),
                            (t[v.c] = { layouts: [n] })));
                var d = I.deepAccess(a, "mediaTypes.".concat(v.d)),
                    p = I.deepAccess(a, "mediaTypes.video.context");
                (t.hb_source = d && "adpod" === p ? 7 : 1),
                    (a.mediaType !== v.d && !d) || t.ad_types.push(v.d),
                    (a.mediaType === v.d || (d && "localhost" !== p)) && (t.require_asset_url = !0),
                    a.params.video &&
                        ((t.video = {}),
                        Object.keys(a.params.video)
                            .filter(function (e) {
                                return w()(l, e);
                            })
                            .forEach(function (e) {
                                switch (e) {
                                    case "context":
                                    case "playback_method":
                                        var r = a.params.video[e],
                                            r = I.isArray(r) ? r[0] : r;
                                        t.video[e] = m[e][r];
                                        break;
                                    case "frameworks":
                                        break;
                                    default:
                                        t.video[e] = a.params.video[e];
                                }
                            }),
                        a.params.video.frameworks && I.isArray(a.params.video.frameworks) && (t.video_frameworks = a.params.video.frameworks)),
                    a.renderer && (t.video = b({}, t.video, { custom_renderer_present: !0 })),
                    a.params.frameworks && I.isArray(a.params.frameworks) && (t.banner_frameworks = a.params.frameworks);
                var c = x()(u.a.getAdUnits(), function (e) {
                    return a.transactionId === e.transactionId;
                });
                return c && c.mediaTypes && c.mediaTypes.banner && t.ad_types.push(v.b), 0 === t.ad_types.length && delete t.ad_types, t;
            }
            function q(e) {
                var r = [],
                    a = {};
                if (I.isArray(e) && 2 === e.length && !I.isArray(e[0])) (a.width = parseInt(e[0], 10)), (a.height = parseInt(e[1], 10)), r.push(a);
                else if ("object" === s(e))
                    for (var t = 0; t < e.length; t++) {
                        var n = e[t];
                        ((a = {}).width = parseInt(n[0], 10)), (a.height = parseInt(n[1], 10)), r.push(a);
                    }
                return r;
            }
            function z(e) {
                return !!e.params.user;
            }
            function M(e) {
                return !!parseInt(e.params.member, 10);
            }
            function D(e) {
                if (e.params) return !!e.params.app;
            }
            function B(e) {
                return e.params && e.params.app ? !!e.params.app.id : !!e.params.app;
            }
            function F(e) {
                return !!e.debug;
            }
            function V(e) {
                return e.mediaTypes && e.mediaTypes.video && e.mediaTypes.video.context === v.a;
            }
            function J(e) {
                var r = !1,
                    a = e.params,
                    t = e.params.video;
                return a.frameworks && I.isArray(a.frameworks) && (r = w()(e.params.frameworks, 6)), !r && t && t.frameworks && I.isArray(t.frameworks) && (r = w()(e.params.video.frameworks, 6)), r;
            }
            function W(e, r, a) {
                I.isEmpty(e.video) && (e.video = {}), (e.video[r] = a);
            }
            function H(e) {
                var r, a;
                (r = e.adUnitCode),
                    (a = document.getElementById(r).querySelectorAll("div[id^='google_ads']"))[0] && a[0].style.setProperty("display", "none"),
                    (function (e) {
                        try {
                            var r = document.getElementById(e).querySelectorAll("script[id^='sas_script']");
                            r[0].nextSibling && "iframe" === r[0].nextSibling.localName && r[0].nextSibling.style.setProperty("display", "none");
                        } catch (e) {}
                    })(e.adUnitCode),
                    e.renderer.push(function () {
                        window.ANlocalhostVideo.renderAd(
                            { tagId: e.adResponse.tag_id, sizes: [e.getSize().split("x")], targetId: e.adUnitCode, uuid: e.adResponse.uuid, adResponse: e.adResponse, rendererOptions: e.renderer.getConfig() },
                            function (e, r, a) {
                                e.renderer.handleVideoEvent({ id: r, eventName: a });
                            }.bind(null, e)
                        );
                    });
            }
            function L(e, r, a, t) {
                return r && (t ? e.push({ source: a, id: r, rti_partner: t }) : e.push({ source: a, id: r })), e;
            }
        },
    },
    [290]
);
pbjsChunk(
    [252],
    {
        559: function (e, r, t) {
            e.exports = t(560);
        },
        560: function (e, r, t) {
            "use strict";
            Object.defineProperty(r, "__esModule", { value: !0 }),
                t.d(r, "spec", function () {
                    return c;
                });
            var J = t(0),
                C = t(2),
                N = t(3),
                i = t(10),
                b = t.n(i),
                n = t(1);
            function R(e) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return o(e);
                    })(e) ||
                    (function (e) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
                    })(e) ||
                    d(e) ||
                    (function () {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function s(r, e) {
                var t,
                    i = Object.keys(r);
                return (
                    Object.getOwnPropertySymbols &&
                        ((t = Object.getOwnPropertySymbols(r)),
                        e &&
                            (t = t.filter(function (e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                            })),
                        i.push.apply(i, t)),
                    i
                );
            }
            function X(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var o = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? s(Object(o), !0).forEach(function (e) {
                              var r, t, i;
                              (r = n), (i = o[(t = e)]), t in r ? Object.defineProperty(r, t, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (r[t] = i);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o))
                        : s(Object(o)).forEach(function (e) {
                              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e));
                          });
                }
                return n;
            }
            function U(e) {
                return (U =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                          })(e);
            }
            function _(e, r) {
                var t;
                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (t = d(e)) || (r && e && "number" == typeof e.length)) {
                        t && (e = t);
                        var i = 0,
                            n = function () {};
                        return {
                            s: n,
                            n: function () {
                                return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] };
                            },
                            e: function (e) {
                                throw e;
                            },
                            f: n,
                        };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var o,
                    s = !0,
                    a = !1;
                return {
                    s: function () {
                        t = e[Symbol.iterator]();
                    },
                    n: function () {
                        var e = t.next();
                        return (s = e.done), e;
                    },
                    e: function (e) {
                        (a = !0), (o = e);
                    },
                    f: function () {
                        try {
                            s || null == t.return || t.return();
                        } finally {
                            if (a) throw o;
                        }
                    },
                };
            }
            function d(e, r) {
                if (e) {
                    if ("string" == typeof e) return o(e, r);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? o(e, r) : void 0;
                }
            }
            function o(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, i = new Array(r); t < r; t++) i[t] = e[t];
                return i;
            }
            var q = "roundel",
                u = [C.b, C.d],
                g = 100,
                v = 300,
                h = 3600,
                x = !0,
                I = { JPY: 1 },
                p = { PBJS: "p", IX: "x" },
                M = { "liveramp.com": "idl", "netid.de": "NETID", "neustar.biz": "fabrickId", "zeotap.com": "zeotapIdPlus", "uidapi.com": "UID2", "adserver.org": "TDID" },
                W = ["britepoolid", "id5id", "lipbid", "haloId", "criteoId", "lotamePanoramaId", "merkleId", "parrableId", "connectid", "sharedid", "tapadId", "quantcastId", "pubcid", "TDID", "flocId"],
                l = ["mimes", "minduration", "maxduration"],
                j = [
                    "mimes",
                    "minduration",
                    "maxduration",
                    "protocols",
                    "protocol",
                    "startdelay",
                    "placement",
                    "linearity",
                    "skip",
                    "skipmin",
                    "skipafter",
                    "sequence",
                    "battr",
                    "maxextended",
                    "minbitrate",
                    "maxbitrate",
                    "boxingallowed",
                    "playbackmethod",
                    "playbackend",
                    "delivery",
                    "pos",
                    "companionad",
                    "api",
                    "companiontype",
                    "ext",
                    "playerSize",
                    "w",
                    "h",
                ];
            function k(e) {
                var r = {};
                (r.id = e.bidId), (r.ext = {}), (r.ext.siteID = e.params.siteId), !e.params.hasOwnProperty("id") || ("string" != typeof e.params.id && "number" != typeof e.params.id) || (r.ext.sid = String(e.params.id));
                var t = J.deepAccess(e, "ortb2Imp.ext.data.adserver.adslot");
                return t && (r.ext.dfp_ad_unit_code = t), r;
            }
            function B(e, r, t) {
                var i = null,
                    n = null;
                if ((e.params.bidFloor && e.params.bidFloorCur && (i = { floor: e.params.bidFloor, currency: e.params.bidFloorCur }), J.isFn(e.getFloor))) {
                    var o,
                        s = "*",
                        a = "*";
                    t && J.contains(u, t) && (a = [(o = r[(s = t)]).w, o.h]);
                    try {
                        n = e.getFloor({ mediaType: s, size: a });
                    } catch (e) {
                        J.logWarn("priceFloors module call getFloor failed, error : ", e);
                    }
                }
                if (i && n)
                    return i.currency !== n.currency
                        ? void J.logWarn("The bid floor currency mismatch between IX params and priceFloors module config")
                        : void (i.floor > n.floor ? ((r.bidfloor = i.floor), (r.bidfloorcur = i.currency), (r.ext.fl = p.IX)) : ((r.bidfloor = n.floor), (r.bidfloorcur = n.currency), (r.ext.fl = p.PBJS)));
                n
                    ? ((r.bidfloor = n.floor), (r.bidfloorcur = n.currency), (r.ext.fl = p.PBJS))
                    : i
                    ? ((r.bidfloor = i.floor), (r.bidfloorcur = i.currency), (r.ext.fl = p.IX))
                    : J.logInfo("IX Bid Adapter: No floors available, no floors applied");
            }
            function a(e) {
                return Array.isArray(e) && 2 === e.length && J.isInteger(e[0]) && J.isInteger(e[1]);
            }
            function m(e, r) {
                var t = 0 < arguments.length && void 0 !== e ? e : [],
                    i = 1 < arguments.length ? r : void 0;
                if (a(t)) return t[0] === i[0] && t[1] === i[1];
                for (var n = 0; n < t.length; n++) if (t[n][0] === i[0] && t[n][1] === i[1]) return 1;
            }
            function E(e, r, t) {
                var i = !0;
                r || J.logWarn("IX Bid Adapter: mediaTypes.video is the preferred location for video params in ad unit");
                var n,
                    o = _(l);
                try {
                    for (o.s(); !(n = o.n()).done; ) {
                        var s = n.value,
                            a = r && r.hasOwnProperty(s),
                            d = t && t.hasOwnProperty(s);
                        a || d || (J.logError("IX Bid Adapter: " + s + " is not included in either the adunit or params level"), (i = !1));
                    }
                } catch (e) {
                    o.e(e);
                } finally {
                    o.f();
                }
                if (!i) return !1;
                var p = r && r.hasOwnProperty("protocol"),
                    c = r && r.hasOwnProperty("protocols"),
                    u = t && t.hasOwnProperty("protocol"),
                    m = t && t.hasOwnProperty("protocols");
                return p || c || u || m;
            }
            function F(e) {
                var r = 0 < arguments.length && void 0 !== e ? e : [];
                return a(r) ? r : !!a(r[0]) && r[0];
            }
            function D(e, r, t, i) {
                var n = "https://htlb.localhost/cygnus",
                    o = (function (e, r) {
                        var t,
                            i = [],
                            n = {};
                        if (J.isArray(e)) {
                            var o,
                                s = _(e);
                            try {
                                for (s.s(); !(o = s.n()).done; ) {
                                    var a = o.value;
                                    M[a.source] && J.deepAccess(a, "uids.0") && ((n[a.source] = !0), (a.uids[0].ext = { rtiPartner: M[a.source] }), delete a.uids[0].atype, i.push(a));
                                }
                            } catch (e) {
                                s.e(e);
                            } finally {
                                s.f();
                            }
                        }
                        return r && r.id && r.version && ((t = { source: "chrome.com", uids: [{ id: r.id, ext: { rtiPartner: "flocId", ver: r.version } }] }), i.push(t), (n["chrome.com"] = !0)), { toSend: i, seenSources: n };
                    })(J.deepAccess(e, "0.userIdAsEids"), J.deepAccess(e, "0.userId.flocId")),
                    s = o.toSend;
                if (window.headertag && "function" == typeof window.headertag.getIdentityInfo) {
                    var a,
                        d = window.headertag.getIdentityInfo();
                    if (d && "object" === U(d))
                        for (var p in d) {
                            !d.hasOwnProperty(p) || (!(a = d[p]).responsePending && a.data && "object" === U(a.data) && Object.keys(a.data).length && !o.seenSources[a.data.source] && s.push(a.data));
                        }
                }
                if (r && r.bidderCode === q && !o.seenSources["liveramp.com"]) return [];
                var c = {};
                (c.id = e[0].bidderRequestId.toString()), (c.site = {}), (c.ext = {}), (c.ext.source = "prebid"), (c.ext.ixdiag = {});
                var u,
                    m = (function (t) {
                        for (
                            var i,
                                n = t
                                    .map(function (e) {
                                        return e.transactionId;
                                    })
                                    .filter(function (e, r, t) {
                                        return t.indexOf(e) === r;
                                    }),
                                o = {
                                    mfu: 0,
                                    bu: 0,
                                    iu: 0,
                                    nu: 0,
                                    ou: 0,
                                    allu: 0,
                                    ren: !1,
                                    version: "4.43.4",
                                    userIds: (function (e) {
                                        var r = e.userId || {};
                                        return W.filter(function (e) {
                                            return r[e];
                                        });
                                    })(t[0]),
                                },
                                e = 0;
                            e < n.length;
                            e++
                        )
                            !(function (r) {
                                var e;
                                (i = t.filter(function (e) {
                                    return e.transactionId === n[r];
                                })[0]),
                                    J.deepAccess(i, "mediaTypes") &&
                                        (1 < Object.keys(i.mediaTypes).length && o.mfu++,
                                        J.deepAccess(i, "mediaTypes.native") && o.nu++,
                                        J.deepAccess(i, "mediaTypes.banner") && o.bu++,
                                        "localhost" === J.deepAccess(i, "mediaTypes.video.context") &&
                                            (o.ou++, (e = "object" === U(J.deepAccess(i, "renderer") || J.deepAccess(i, "mediaTypes.video.renderer"))), (o.ren = o.ren && e ? J.deepAccess(o, "ren") : e)),
                                        "instream" === J.deepAccess(i, "mediaTypes.video.context") && o.iu++,
                                        o.allu++);
                            })(e);
                        return o;
                    })(e);
                for (var l in m) c.ext.ixdiag[l] = m[l];
                e[0].schain && (c.source = { ext: { schain: e[0].schain } }),
                    0 < s.length && ((c.user = {}), (c.user.eids = s)),
                    document.referrer && "" !== document.referrer && (c.site.ref = document.referrer),
                    r &&
                        (r.gdprConsent &&
                            ((u = r.gdprConsent).hasOwnProperty("gdprApplies") && (c.regs = { ext: { gdpr: u.gdprApplies ? 1 : 0 } }),
                            u.hasOwnProperty("consentString") &&
                                ((c.user = c.user || {}),
                                (c.user.ext = { consent: u.consentString || "" }),
                                u.hasOwnProperty("addtlConsent") && u.addtlConsent && (c.user.ext.consented_providers_settings = { consented_providers: u.addtlConsent }))),
                        r.uspConsent && J.deepSetValue(c, "regs.ext.us_privacy", r.uspConsent),
                        r.refererInfo && (c.site.page = r.refererInfo.referer)),
                    N.b.getConfig("coppa") && J.deepSetValue(c, "regs.coppa", 1);
                var f = {},
                    y = (r && r.bidderCode) || "ix",
                    b = N.b.getConfig(y);
                if (b) {
                    if ("object" === U(b.firstPartyData)) {
                        var g = b.firstPartyData,
                            v = "?";
                        for (var h in g) g.hasOwnProperty(h) && (v += "".concat(encodeURIComponent(h), "=").concat(encodeURIComponent(g[h]), "&"));
                        (v = v.slice(0, -1)), (c.site.page += v);
                    }
                    "number" == typeof b.timeout && (f.t = b.timeout), "boolean" == typeof b.detectMissingSizes ? (c.ext.ixdiag.dms = b.detectMissingSizes) : (c.ext.ixdiag.dms = !0);
                }
                (f.s = e[0].params.siteId), (f.v = i), (f.ac = "j"), (f.sd = 1), 8.1 === i && (f.nf = 1);
                var x = [],
                    I = { method: "GET", url: n, data: f },
                    w = new Blob(["".concat(I.url).concat(J.parseQueryStringParameters(X(X({}, I.data), {}, { r: JSON.stringify(c) })))]).size,
                    O = w,
                    A = 0,
                    P = 0,
                    S = 0;
                (c.ext.ixdiag.msd = 0), (c.ext.ixdiag.msi = 0), (c.imp = []);
                for (var z, T, C = 0, j = Object.keys(t), k = []; C < j.length && x.length < 4; ) {
                    var B,
                        E,
                        F,
                        D = t[j[C]],
                        S = J.deepAccess(D, "missingCount") && J.deepAccess(D, "ixImps") ? D.missingCount : 0;
                    w < 8e3
                        ? (function (e, r) {
                              var t = new Blob([encodeURIComponent(JSON.stringify(e))]).size;
                              if (t < r) return;
                              for (; r < t; )
                                  e.hasOwnProperty("missingImps") && 0 < e.missingImps.length ? e.missingImps.pop() : e.hasOwnProperty("ixImps") && 0 < e.ixImps.length && e.ixImps.pop(),
                                      (t = new Blob([encodeURIComponent(JSON.stringify(e))]).size);
                          })(D, 8e3 - w)
                        : J.logError("ix bidder: Base request size has exceeded maximum request size."),
                        (P = J.deepAccess(D, "missingImps") && J.deepAccess(D, "ixImps") ? D.missingImps.length : 0),
                        (O += new Blob([encodeURIComponent(JSON.stringify(D))]).size) < 8e3
                            ? (D.ixImps && 0 < D.ixImps.length && (B = c.imp).push.apply(B, R(D.ixImps)),
                              (c.ext.ixdiag.msd += S),
                              (c.ext.ixdiag.msi += P),
                              D.hasOwnProperty("missingImps") && 0 < D.missingImps.length && k.push.apply(k, R(D.missingImps)),
                              C++)
                            : ((F = J.deepClone(f)),
                              (E = c.imp).push.apply(E, R(k)),
                              (c.ext.ixdiag.sn = A),
                              (F.sn = A),
                              A++,
                              (F.r = JSON.stringify(c)),
                              x.push({ method: "GET", url: n, data: F }),
                              (k = []),
                              (O = w),
                              (c.imp = []),
                              (P = S = 0),
                              (c.ext.ixdiag.msd = 0),
                              (c.ext.ixdiag.msi = 0));
                }
                return (
                    w < O && O < 8e3 && x.length < 4 && ((T = J.deepClone(f)), (z = c.imp).push.apply(z, R(k)), 0 < x.length && ((c.ext.ixdiag.sn = A), (T.sn = A)), (T.r = JSON.stringify(c)), x.push({ method: "GET", url: n, data: T })), x
                );
            }
            function V(e, r) {
                if (r)
                    for (var t = 0; t < e.length; t++) {
                        var i = e[t];
                        if (r[0] === i[0] && r[1] === i[1]) {
                            e.splice(t, 1);
                            break;
                        }
                    }
            }
            var c = {
                code: "ix",
                gvlid: 10,
                aliases: [{ code: q, gvlid: 10, skipPbsAliasing: !1 }],
                supportedMediaTypes: u,
                isBidRequestValid: function (e) {
                    var r,
                        t,
                        i = J.deepAccess(e, "params.video"),
                        n = J.deepAccess(e, "params.size"),
                        o = J.deepAccess(e, "mediaTypes.banner.sizes"),
                        s = J.deepAccess(e, "mediaTypes.video"),
                        a = J.deepAccess(e, "mediaTypes.video.playerSize"),
                        d = e.params.hasOwnProperty("bidFloor"),
                        p = e.params.hasOwnProperty("bidFloorCur");
                    if (e.hasOwnProperty("mediaType") && !J.contains(u, e.mediaType)) return !1;
                    if (J.deepAccess(e, "mediaTypes.banner") && !o) return !1;
                    if (n) {
                        var c = F(n);
                        if (!c) return J.logError("ix bidder params: size has invalid format."), !1;
                        if (!m(e.sizes, c) && !m(a, c) && !m(o, c)) return J.logError("ix bidder params: bid size is not included in ad unit sizes or player size."), !1;
                    }
                    return "string" != typeof e.params.siteId && "number" != typeof e.params.siteId
                        ? (J.logError("ix bidder params: siteId must be string or number value."), !1)
                        : (!d && !p) || (d && p && ((r = e.params.bidFloor), (t = e.params.bidFloorCur), Boolean("number" == typeof r && "string" == typeof t && t.match(/^[A-Z]{3}$/))))
                        ? !(!o && (s || i)) || E(0, s, i)
                        : (J.logError("ix bidder params: bidFloor / bidFloorCur parameter has invalid format."), !1);
                },
                buildRequests: function (e, r) {
                    for (var t, i, n, o, s, a, d, p, c, u, m, l = [], f = {}, y = {}, b = null, g = {}, v = X(X({}, { detectMissingSizes: !0 }), N.b.getConfig("ix")), h = 0; h < e.length; h++) {
                        b = e[h];
                        var x,
                            I,
                            w = J.deepAccess(b, "mediaTypes.video"),
                            O = J.deepAccess(b, "params.video");
                        (b.mediaType === C.d || w || O) &&
                            (y.hasOwnProperty(b.transactionId) ||
                                ((x = (function (e) {
                                    var r = k(e),
                                        t = J.deepAccess(e, "mediaTypes.video"),
                                        i = J.deepAccess(e, "params.video");
                                    if (!E(0, t, i)) return {};
                                    for (var n in ((r.video = i ? J.deepClone(e.params.video) : {}), t)) -1 === j.indexOf(n) || r.video.hasOwnProperty(n) || (r.video[n] = t[n]);
                                    if (r.video.minduration > r.video.maxduration)
                                        return J.logError("IX Bid Adapter: video minduration [" + r.video.minduration + "] cannot be greater than video maxduration [" + r.video.maxduration + "]"), {};
                                    var o = (i && i.context) || (t && t.context);
                                    if (
                                        (o && ("instream" === o ? (r.video.placement = 1) : "localhost" === o ? (r.video.placement = 4) : J.logWarn("IX Bid Adapter: video context '".concat(o, "' is not supported"))),
                                        !r.video.w || !r.video.h)
                                    ) {
                                        var s = F(J.deepAccess(r, "video.playerSize")) || F(J.deepAccess(e, "params.size"));
                                        if (!s) return J.logWarn("IX Bid Adapter: Video size is missing in [mediaTypes.video] missing"), {};
                                        (r.video.w = s[0]), (r.video.h = s[1]), J.deepAccess(r, "ext.sid") || (r.ext.sid = "".concat(s[0], "x").concat(s[1]));
                                    }
                                    return B(e, r, C.d), r;
                                })(b)),
                                0 != Object.keys(x).length && ((y[b.transactionId] = {}), (y[b.transactionId].ixImps = []), y[b.transactionId].ixImps.push(x)))),
                            (b.mediaType !== C.b && !J.deepAccess(b, "mediaTypes.banner.sizes") && (b.mediaType || b.mediaTypes)) ||
                                ((I = (function (e) {
                                    var r = k(e);
                                    r.banner = {};
                                    var t = J.deepAccess(e, "params.size");
                                    return t && ((r.banner.w = t[0]), (r.banner.h = t[1]), J.deepAccess(r, "ext.sid") || (r.ext.sid = "".concat(t[0], "x").concat(t[1]))), (r.banner.topframe = J.inIframe() ? 0 : 1), B(e, r, C.b), r;
                                })(b)),
                                J.deepAccess(b, "params.size") &&
                                    (f.hasOwnProperty(b.transactionId) || (f[b.transactionId] = {}), f[b.transactionId].hasOwnProperty("ixImps") || (f[b.transactionId].ixImps = []), f[b.transactionId].ixImps.push(I)),
                                v.hasOwnProperty("detectMissingSizes") &&
                                    v.detectMissingSizes &&
                                    ((i = g),
                                    (n = I),
                                    (d = a = s = o = void 0),
                                    (d = (t = b).transactionId),
                                    i.hasOwnProperty(d)
                                        ? ((o = []), i[d].hasOwnProperty("missingSizes") && (o = i[d].missingSizes), V(o, t.params.size), (i[d].missingSizes = o))
                                        : J.deepAccess(t, "mediaTypes.banner.sizes") && (V((s = J.deepClone(t.mediaTypes.banner.sizes)), t.params.size), (a = { missingSizes: s, impression: n }), (i[d] = a))));
                    }
                    for (var A in g)
                        if (g.hasOwnProperty(A)) {
                            var P = g[A].missingSizes;
                            f.hasOwnProperty(A) || (f[A] = {}), f[A].hasOwnProperty("missingImps") || ((f[A].missingImps = []), (f[A].missingCount = 0));
                            for (var S = g[A].impression, z = 0; z < P.length; z++) {
                                var T = ((p = b), (c = S), (u = P[z]), (m = void 0), ((m = J.deepClone(c)).ext.sid = "".concat(u[0], "x").concat(u[1])), (m.banner.w = u[0]), (m.banner.h = u[1]), B(p, m, C.b), m);
                                f[A].missingImps.push(T), f[A].missingCount++;
                            }
                        }
                    return 0 < Object.keys(f).length && l.push.apply(l, R(D(e, r, f, 7.2))), 0 < Object.keys(y).length && l.push.apply(l, R(D(e, r, y, 8.1))), l;
                },
                interpretResponse: function (e, r) {
                    var t = [];
                    if (!e.hasOwnProperty("body") || !e.body.hasOwnProperty("seatbid")) return t;
                    for (var i, n, o, s, a, d, p = e.body, c = p.seatbid, u = 0; u < c.length; u++)
                        if (c[u].hasOwnProperty("bid"))
                            for (var m = c[u].bid, l = JSON.parse(r.data.r), f = 0; f < m.length; f++) {
                                var y = (function (r, e) {
                                    if (r)
                                        return b()(e, function (e) {
                                            return e.id === r;
                                        });
                                })(m[f].impid, l.imp);
                                (i = m[f]),
                                    (n = p.cur),
                                    (o = y),
                                    (d = a = s = void 0),
                                    (s = {}),
                                    (a = !(!J.deepAccess(i, "exp") || !J.isInteger(i.exp))),
                                    (d = J.deepAccess(i, "dealid") || J.deepAccess(i, "ext.dealid")),
                                    I.hasOwnProperty(n) ? (s.cpm = i.price / I[n]) : (s.cpm = i.price / g),
                                    (s.requestId = i.impid),
                                    d && (s.dealId = d),
                                    (s.netRevenue = x),
                                    (s.currency = n),
                                    (s.creativeId = i.hasOwnProperty("crid") ? i.crid : "-"),
                                    J.deepAccess(i, "ext.vasturl")
                                        ? ((s.vastUrl = i.ext.vasturl), (s.width = o.video.w), (s.height = o.video.h), (s.mediaType = C.d), (s.ttl = a ? i.exp : h))
                                        : ((s.ad = i.adm), (s.width = i.w), (s.height = i.h), (s.mediaType = C.b), (s.ttl = a ? i.exp : v)),
                                    (s.meta = {}),
                                    (s.meta.networkId = J.deepAccess(i, "ext.dspid")),
                                    (s.meta.brandId = J.deepAccess(i, "ext.advbrandid")),
                                    (s.meta.brandName = J.deepAccess(i, "ext.advbrand")),
                                    i.adomain && 0 < i.adomain.length && (s.meta.advertiserDomains = i.adomain),
                                    t.push(s);
                            }
                    return t;
                },
                transformBidParams: function (e) {
                    return J.convertTypes({ siteID: "number" }, e);
                },
                getUserSyncs: function (e) {
                    return e.iframeEnabled ? [{ type: "iframe", url: "https://js-sec.indexww.com/um/ixmatch.html" }] : [];
                },
            };
        },
    },
    [559]
);
pbjsChunk(
    [221],
    {
        637: function (e, t, n) {
            e.exports = n(638);
        },
        638: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                n.d(t, "spec", function () {
                    return j;
                });
            var r = n(1),
                m = n(0),
                f = n(3),
                p = n(2),
                i = n(19),
                a = n(12);
            function g() {
                return (g =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            var l = "medianet",
                o = "https://localhost/video/bundle.js",
                b = { NOT_DETERMINED: 0, ABOVE_THE_FOLD: 1, BELOW_THE_FOLD: 2 },
                d = "client_timeout",
                s = "client_bid_won",
                c = Object(i.a)(),
                u = {};
            function y(e) {
                return g(
                    {
                        domain: (e = e || {}).domain || u.urlData.domain,
                        page: e.page || u.urlData.page,
                        ref:
                            e.ref ||
                            (function () {
                                try {
                                    return window.top.document.referrer;
                                } catch (e) {
                                    return document.referrer;
                                }
                            })(),
                        isTop: e.isTop || u.urlData.isTop,
                    },
                    (function () {
                        if (u.pageMeta) return u.pageMeta;
                        var e = h('link[rel="canonical"]', "href"),
                            t = h('meta[property="og:url"]', "content"),
                            n = h('meta[name="twitter:url"]', "content");
                        return (u.pageMeta = g({}, e && { canonical_url: e }, t && { og_url: t }, n && { twitter_url: n })), u.pageMeta;
                    })()
                );
            }
            function h(e, t) {
                var n,
                    r,
                    i = (function (e, t) {
                        try {
                            var n = m.getWindowTop().document.querySelector(e);
                            if (null !== n && n[t]) return n[t];
                        } catch (e) {}
                    })(e, t);
                return i && ((n = i), ((r = m.getWindowTop().document.createElement("a")).href = n), r.href);
            }
            function v(e, t) {
                return e.filter(function (e) {
                    return e.type === t;
                });
            }
            function w(e) {
                return { w: parseInt(e[0], 10), h: parseInt(e[1], 10) };
            }
            function _(e) {
                var t,
                    n = { id: e.bidId, ext: { dfp_id: e.adUnitCode, display_count: e.bidRequestsCount }, all: e.params },
                    r = m.deepAccess(e, "mediaTypes.banner.sizes") || [],
                    i = m.deepAccess(e, "mediaTypes.video") || {},
                    a = g({}, m.deepAccess(e, "params.video") || {}, i);
                if ((m.isEmpty(a) || (n.video = a), 0 < r.length && (n.banner = ((t = r), m.isArray(t) && 2 === t.length && !m.isArray(t[0]) ? [w(t)] : t.map(w))), e.nativeParams))
                    try {
                        n.native = JSON.stringify(e.nativeParams);
                    } catch (e) {
                        m.logError("".concat(l, " : Incorrect JSON : bidRequest.nativeParams"));
                    }
                e.params.crid && (n.tagid = e.params.crid.toString());
                var o = parseFloat(e.params.bidfloor || e.params.bidFloor);
                o && (n.bidfloor = o);
                var d,
                    s,
                    c = (function (e) {
                        var t,
                            n = document.getElementById(e);
                        if ((n || -1 === e.indexOf("/") || ((t = m.getGptSlotInfoForAdUnitCode(e).divId), m.isStr(t) && (n = document.getElementById(t))), n && n.getBoundingClientRect)) {
                            var r = n.getBoundingClientRect(),
                                i = {};
                            return (i.top_left = { y: r.top, x: r.left }), (i.bottom_right = { y: r.bottom, x: r.right }), i;
                        }
                        return null;
                    })(e.adUnitCode);
                c && n.banner && 0 !== n.banner.length
                    ? ((d = { top_left: { x: (s = c).top_left.x + window.pageXOffset, y: s.top_left.y + window.pageYOffset }, bottom_right: { x: s.bottom_right.x + window.pageXOffset, y: s.bottom_right.y + window.pageYOffset } }),
                      (n.ext.coordinates = d),
                      (n.ext.viewability = T(c.top_left, E(n.banner))),
                      0.5 < T(d.top_left, E(n.banner)) ? (n.ext.visibility = b.ABOVE_THE_FOLD) : (n.ext.visibility = b.BELOW_THE_FOLD))
                    : (n.ext.visibility = b.NOT_DETERMINED);
                var u = (function (n) {
                    var r = [];
                    "function" == typeof n.getFloor &&
                        [p.b, p.d, p.c].forEach(function (t) {
                            n.mediaTypes.hasOwnProperty(t) &&
                                (t == p.b
                                    ? n.mediaTypes.banner.sizes.forEach(function (e) {
                                          x(n, t, e, r);
                                      })
                                    : x(n, t, "*", r));
                        });
                    return r;
                })(e);
                return u && 0 < u.length && (n.bidfloors = u), n;
            }
            function x(e, t, n, r) {
                var i = e.getFloor({ currency: "USD", mediaType: t, size: n });
                1 < n.length && (i.size = n), (i.mediaType = t), r.push(i);
            }
            function E(e) {
                return e.reduce(function (e, t) {
                    return t.h * t.w < e.h * e.w ? t : e;
                });
            }
            function T(e, t) {
                var n = t.w * t.h,
                    r = j.getWindowSize(),
                    i = { x: e.x + t.w, y: e.y + t.h };
                return 0 == n || -1 === r.w || -1 === r.h
                    ? 0
                    : (function (e, t, n, r) {
                          if (e.x > r.x || t.x < n.x || e.y > r.y || t.y < n.y) return 0;
                          return (Math.min(t.x, r.x) - Math.max(e.x, n.x)) * (Math.min(t.y, r.y) - Math.max(e.y, n.y));
                      })(e, i, { x: 0, y: 0 }, { x: r.w, y: r.h }) / n;
            }
            function O(e, t) {
                return {
                    site: y(e[0].params.site),
                    ext:
                        ((n = e[0]),
                        (r = t),
                        (i = m.deepAccess(n, "params")),
                        (a = m.deepAccess(r, "gdprConsent")),
                        (o = m.deepAccess(r, "uspConsent")),
                        (d = m.deepAccess(n, "userId")),
                        (s = m.deepAccess(n, "schain") || {}),
                        (c = j.getWindowSize()),
                        (u = !(!a || !a.gdprApplies)),
                        (p = !!o),
                        (l = !!f.b.getConfig("coppa")),
                        g(
                            {},
                            { customer_id: i.cid },
                            { prebid_version: pbjs.version },
                            { gdpr_applies: u },
                            u && { gdpr_consent_string: a.consentString || "" },
                            { usp_applies: p },
                            p && { usp_consent_string: o || "" },
                            { coppa_applies: l },
                            -1 !== c.w && -1 !== c.h && { screen: c },
                            d && { user_id: d },
                            pbjs.medianetGlobals.analyticsEnabled && { analytics: !0 },
                            !m.isEmpty(s) && { schain: s }
                        )),
                    id: e[0].auctionId,
                    imp: e.map(_),
                    tmax: t.timeout || f.b.getConfig("bidderTimeout"),
                };
                var n, r, i, a, o, d, s, c, u, p, l;
            }
            function A(e, t) {
                var n = {
                    protocol: "https",
                    hostname: "qsearch-a.akamaihd.net/log",
                    search: (function (e, t) {
                        t = (m.isArray(t) && t) || [];
                        var n = { logid: "kfk", evtid: "projectevents", project: "prebid" };
                        return (
                            (n.acid = m.deepAccess(t, "0.auctionId") || ""),
                            (n.cid = pbjs.medianetGlobals.cid || ""),
                            (n.crid = t
                                .map(function (e) {
                                    return m.deepAccess(e, "params.0.crid") || e.adUnitCode;
                                })
                                .join("|")),
                            (n.adunit_count = t.length || 0),
                            (n.dn = u.urlData.domain || ""),
                            (n.requrl = u.urlData.page || ""),
                            (n.istop = u.urlData.isTop || ""),
                            (n.event = e.name || ""),
                            (n.value = e.value || ""),
                            (n.rd = e.related_data || ""),
                            n
                        );
                    })(e, t),
                };
                m.triggerPixel(m.buildUrl(n));
            }
            function I(e) {
                var t,
                    n = m.deepAccess(e, "context") || "",
                    r = m.deepAccess(e, "vto");
                "localhost" == n &&
                    r &&
                    (e.renderer =
                        ((t = a.a.install({ url: o })).setRender(function (r) {
                            window.mnet.queue.push(function () {
                                var e = { width: r.width, height: r.height, vastTimeout: r.vto, maxAllowedVastTagRedirects: r.mavtr, allowVpaid: r.avp, autoPlay: r.ap, preload: r.pl, mute: r.mt },
                                    t = r.dfp_id,
                                    n = m.getGptSlotInfoForAdUnitCode(t).divId || t;
                                window.mnet.mediaNetlocalhostPlayer(r, n, e);
                            });
                        }),
                        t));
            }
            (window.mnet = window.mnet || {}),
                (window.mnet.queue = window.mnet.queue || []),
                (u.urlData = { domain: m.parseUrl(c.referer).hostname, page: c.referer, isTop: c.reachedTop }),
                (pbjs.medianetGlobals = pbjs.medianetGlobals || {});
            var j = {
                code: l,
                gvlid: 142,
                supportedMediaTypes: [p.b, p.c, p.d],
                isBidRequestValid: function (e) {
                    return e.params
                        ? e.params.cid && m.isStr(e.params.cid) && !m.isEmptyStr(e.params.cid)
                            ? (g(pbjs.medianetGlobals, !pbjs.medianetGlobals.cid && { cid: e.params.cid }), !0)
                            : (m.logError("".concat(l, " : cid should be a string")), !1)
                        : (m.logError("".concat(l, " : Missing bid parameters")), !1);
                },
                buildRequests: function (e, t) {
                    var n,
                        r = O(e, t);
                    return { method: "POST", url: ((n = r.ext.customer_id), "https://localhost/rtb/prebid?cid=" + encodeURIComponent(n)), data: JSON.stringify(r) };
                },
                interpretResponse: function (e) {
                    var t = [];
                    if (!e || !e.body) return m.logInfo("".concat(l, " : response is empty")), t;
                    var n = e.body.bidList;
                    return (
                        m.isArray(n) && 0 !== n.length
                            ? (t = n.filter(function (e) {
                                  return !1 === (t = e).no_bid && 0 < parseFloat(t.cpm);
                                  var t;
                              })).forEach(I)
                            : m.logInfo("".concat(l, " : no bids")),
                        t
                    );
                },
                getUserSyncs: function (e, t) {
                    var n,
                        r = ((n = t), !m.isEmpty(n) && n[0].body && n[0].body.ext && m.isArray(n[0].body.ext.csUrl) ? n[0].body.ext.csUrl : []);
                    return e.iframeEnabled ? v(r, "iframe") : e.pixelEnabled ? v(r, "image") : void 0;
                },
                onTimeout: function (e) {
                    try {
                        A({ name: d, value: e.length, related_data: e[0].timeout || f.b.getConfig("bidderTimeout") }, e);
                    } catch (e) {}
                },
                onBidWon: function (e) {
                    try {
                        A({ name: s, value: e.cpm }, [e]);
                    } catch (e) {}
                },
                clearMnData: function () {
                    u = {};
                },
                getWindowSize: function () {
                    return { w: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || -1, h: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || -1 };
                },
            };
        },
    },
    [637]
);
pbjsChunk(
    [32],
    {
        731: function (e, r, t) {
            e.exports = t(732);
        },
        732: function (e, r, t) {
            "use strict";
            Object.defineProperty(r, "__esModule", { value: !0 }),
                (r.resetSyncedStatus = function () {
                    W = 0;
                }),
                (r.resetWurlMap = function () {
                    $ = {};
                }),
                (r.PrebidServer = g);
            var n = t(95),
                j = t(35),
                A = t(0),
                i = t(5),
                w = t.n(i),
                x = t(8),
                O = t(3),
                E = t(2),
                k = t(38),
                C = t(1),
                s = t(9),
                _ = t.n(s),
                o = t(13),
                P = t.n(o),
                a = t(733),
                I = t(4),
                c = t(10),
                T = t.n(c);
            function d(r, e) {
                var t,
                    n = Object.keys(r);
                return (
                    Object.getOwnPropertySymbols &&
                        ((t = Object.getOwnPropertySymbols(r)),
                        e &&
                            (t = t.filter(function (e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                            })),
                        n.push.apply(n, t)),
                    n
                );
            }
            function U(r) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? d(Object(t), !0).forEach(function (e) {
                              B(r, e, t[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t))
                        : d(Object(t)).forEach(function (e) {
                              Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(t, e));
                          });
                }
                return r;
            }
            function B(e, r, t) {
                return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[r] = t), e;
            }
            function R(e, r) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, r) {
                        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                        var t = [],
                            n = !0,
                            i = !1,
                            s = void 0;
                        try {
                            for (var o, a = e[Symbol.iterator](); !(n = (o = a.next()).done) && (t.push(o.value), !r || t.length !== r); n = !0);
                        } catch (e) {
                            (i = !0), (s = e);
                        } finally {
                            try {
                                n || null == a.return || a.return();
                            } finally {
                                if (i) throw s;
                            }
                        }
                        return t;
                    })(e, r) ||
                    (function (e, r) {
                        if (!e) return;
                        if ("string" == typeof e) return p(e, r);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === t && e.constructor && (t = e.constructor.name);
                        if ("Map" === t || "Set" === t) return Array.from(e);
                        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return p(e, r);
                    })(e, r) ||
                    (function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function p(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
                return n;
            }
            function D() {
                return (D =
                    Object.assign ||
                    function (e) {
                        for (var r = 1; r < arguments.length; r++) {
                            var t = arguments[r];
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            function V(e) {
                return (V =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                          })(e);
            }
            var N,
                q,
                z = O.b.getConfig,
                M = w.a.S2S.SRC,
                W = 0,
                u = { timeout: 1e3, maxBids: 1, adapter: "prebidServer", adapterOptions: {}, syncUrlModifier: {} };
            function l(i) {
                if (i) {
                    var e = Array.isArray(i) ? i : [i],
                        s = [];
                    return e.every(function (e, r, t) {
                        var n;
                        if (
                            ((n = i),
                            ["endpoint", "syncEndpoint"].forEach(function (e) {
                                var r;
                                A.isStr(n[e]) && ((r = n[e]), (n[e] = { p1Consent: r, noP1Consent: r }));
                            }),
                            !1 !==
                                (function (r) {
                                    if (r.defaultVendor) {
                                        var t = r.defaultVendor,
                                            n = Object.keys(r);
                                        if (!a.a[t]) return A.logError("Incorrect or unavailable prebid server default vendor option: " + t), !1;
                                        Object.keys(a.a[t]).forEach(function (e) {
                                            (u[e] !== r[e] && P()(n, e)) || (r[e] = a.a[t][e]);
                                        });
                                    }
                                    return (r.enabled = "boolean" == typeof r.enabled && r.enabled);
                                })(e)) &&
                            !1 !==
                                (function (e) {
                                    var r = Object.keys(e);
                                    if (
                                        0 <
                                        ["accountId", "bidders", "endpoint"].filter(function (e) {
                                            return !P()(r, e) && (A.logError(e + " missing in server to server config"), !0);
                                        }).length
                                    )
                                        return !1;
                                })(e)
                        )
                            return (
                                Array.isArray(e.bidders) &&
                                    (t[r].bidders = e.bidders.filter(function (e) {
                                        return -1 === s.indexOf(e) && (s.push(e), !0);
                                    })),
                                !0
                            );
                        return A.logWarn("prebidServer: s2s config is disabled"), !1;
                    })
                        ? (N = e)
                        : void 0;
                }
            }
            function J(e, r) {
                var t;
                0 !== e.length &&
                    ((t = e.shift()).no_cookie
                        ? (function (e, r, t, n, i) {
                              {
                                  var s;
                                  i.syncUrlModifier && "function" == typeof i.syncUrlModifier[t] ? ((s = i.syncUrlModifier[t](e, r, t)), b(e, s, t, n)) : b(e, r, t, n);
                              }
                          })(t.usersync.type, t.usersync.url, t.bidder, A.bind.call(J, null, e, r), r)
                        : J(e, r));
            }
            function b(e, r, t, n) {
                r
                    ? "image" === e || "redirect" === e
                        ? (A.logMessage('Invoking image pixel user sync for bidder: "'.concat(t, '"')), A.triggerPixel(r, n))
                        : "iframe" == e
                        ? (A.logMessage('Invoking iframe user sync for bidder: "'.concat(t, '"')), A.insertUserSyncIframe(r, n))
                        : (A.logError('User sync type "'.concat(e, '" not supported for bidder: "').concat(t, '"')), n())
                    : (A.logError('No sync url for bidder "'.concat(t, '": ').concat(r)), n());
            }
            O.b.setDefaults({ s2sConfig: u }),
                z("s2sConfig", function (e) {
                    return l(e.s2sConfig);
                });
            var X = { sponsoredBy: 1, body: 2, rating: 3, likes: 4, downloads: 5, price: 6, salePrice: 7, phone: 8, address: 9, body2: 10, cta: 12 },
                F = Object.keys(X),
                H = { icon: 1, image: 3 },
                L = { img: 1, js: 2 };
            [X, H, { impression: 1, "viewable-mrc50": 2, "viewable-mrc100": 3, "viewable-video50": 4 }, L].forEach(function (r) {
                Object.keys(r).forEach(function (e) {
                    r[r[e]] = e;
                });
            });
            var K = {},
                G = {},
                $ = {};
            var Q = {
                buildRequest: function (e, r, t, g, n) {
                    var y = [],
                        v = {},
                        m = r[0],
                        h = new Set();
                    if (
                        (t.forEach(function (r) {
                            for (var t = r.code, e = 1; h.has(t); ) e++, (t = "".concat(r.code, "-").concat(e));
                            h.add(t);
                            var n,
                                a = Object(k.h)(A.deepAccess(r, "mediaTypes.native"));
                            if (a)
                                try {
                                    n = G[t] = Object.keys(a).reduce(function (e, r) {
                                        var t = a[r];
                                        function n(e) {
                                            return D({ required: t.required ? 1 : 0 }, e ? A.cleanObj(e) : {});
                                        }
                                        switch (r) {
                                            case "image":
                                            case "icon":
                                                var i = H[r],
                                                    s = A.cleanObj({
                                                        type: i,
                                                        w: A.deepAccess(t, "sizes.0"),
                                                        h: A.deepAccess(t, "sizes.1"),
                                                        wmin: A.deepAccess(t, "aspect_ratios.0.min_width"),
                                                        hmin: A.deepAccess(t, "aspect_ratios.0.min_height"),
                                                    });
                                                if (!((s.w && s.h) || (s.hmin && s.wmin))) throw "invalid img sizes (must provide sizes or min_height & min_width if using aspect_ratios)";
                                                Array.isArray(t.aspect_ratios) &&
                                                    (s.ext = {
                                                        aspectratios: t.aspect_ratios.map(function (e) {
                                                            return "".concat(e.ratio_width, ":").concat(e.ratio_height);
                                                        }),
                                                    }),
                                                    e.push(n({ img: s }));
                                                break;
                                            case "title":
                                                if (!t.len) throw "invalid title.len";
                                                e.push(n({ title: { len: t.len } }));
                                                break;
                                            default:
                                                var o = X[r];
                                                o && e.push(n({ data: { type: o, len: t.len } }));
                                        }
                                        return e;
                                    }, []);
                                } catch (e) {
                                    A.logError("error creating native request: " + String(e));
                                }
                            var i = A.deepAccess(r, "mediaTypes.video"),
                                s = A.deepAccess(r, "mediaTypes.banner");
                            r.bids.forEach(function (e) {
                                var r;
                                (K["".concat(t).concat(e.bidder)] = e.bid_id),
                                    !x.default.aliasRegistry[e.bidder] || ((r = x.default.bidderRegistry[e.bidder]) && !r.getSpec().skipPbsAliasing && (v[e.bidder] = x.default.aliasRegistry[e.bidder]));
                            });
                            var o,
                                c = {};
                            if (
                                (s &&
                                    s.sizes &&
                                    ((o = A.parseSizesInput(s.sizes).map(function (e) {
                                        var r = R(e.split("x"), 2),
                                            t = r[0],
                                            n = r[1];
                                        return { w: parseInt(t, 10), h: parseInt(n, 10) };
                                    })),
                                    (c.banner = { format: o })),
                                A.isEmpty(i) ||
                                    ("localhost" !== i.context || (i.renderer && r.renderer)
                                        ? ("instream" !== i.context || i.hasOwnProperty("placement") || (i.placement = 1),
                                          (c.video = Object.keys(i)
                                              .filter(function (e) {
                                                  return "context" !== e;
                                              })
                                              .reduce(function (e, r) {
                                                  return "playerSize" === r ? ((e.w = A.deepAccess(i, "".concat(r, ".0.0"))), (e.h = A.deepAccess(i, "".concat(r, ".0.1")))) : (e[r] = i[r]), e;
                                              }, {})))
                                        : A.logError("localhost bid without renderer cannot be sent to Prebid Server.")),
                                n)
                            )
                                try {
                                    c.native = { request: JSON.stringify({ context: 1, plcmttype: 1, eventtrackers: [{ event: 1, methods: [1] }], assets: n }), ver: "1.2" };
                                } catch (e) {
                                    A.logError("error creating native request: " + String(e));
                                }
                            var d = r.bids.reduce(function (e, r) {
                                    var t = x.default.bidderRegistry[r.bidder];
                                    return (
                                        t && t.getSpec().transformBidParams && (r.params = t.getSpec().transformBidParams(r.params, !0)),
                                        (e[r.bidder] = g.adapterOptions && g.adapterOptions[r.bidder] ? D({}, r.params, g.adapterOptions[r.bidder]) : r.params),
                                        e
                                    );
                                }, U({}, A.deepAccess(r, "ortb2Imp.ext"))),
                                p = { id: t, ext: d, secure: g.secure },
                                u = U({}, A.deepAccess(r, "ortb2Imp.ext.data"));
                            Object.keys(u).forEach(function (e) {
                                "pbadslot" === e
                                    ? "string" == typeof u[e] && u[e]
                                        ? A.deepSetValue(p, "ext.data.pbadslot", u[e])
                                        : delete p.ext.data.pbadslot
                                    : "adserver" === e
                                    ? ["name", "adslot"].forEach(function (e) {
                                          var r = A.deepAccess(u, "adserver.".concat(e));
                                          "string" == typeof r && r && A.deepSetValue(p, "ext.data.adserver.".concat(e.toLowerCase()), r);
                                      })
                                    : A.deepSetValue(p, "ext.data.".concat(e), u[e]);
                            }),
                                D(p, c);
                            var l = T()(m.bids, function (e) {
                                return e.adUnitCode === r.code && e.storedAuctionResponse;
                            });
                            l && A.deepSetValue(p, "ext.prebid.storedauctionresponse.id", l.storedAuctionResponse.toString());
                            var b,
                                f = T()(m.bids, function (e) {
                                    return e.adUnitCode === r.code && "function" == typeof e.getFloor;
                                });
                            if (f) {
                                try {
                                    b = f.getFloor({ currency: O.b.getConfig("currency.adServerCurrency") || "USD" });
                                } catch (e) {
                                    A.logError("PBS: getFloor threw an error: ", e);
                                }
                                b && b.currency && !isNaN(parseFloat(b.floor)) && ((p.bidfloor = parseFloat(b.floor)), (p.bidfloorcur = b.currency));
                            }
                            (p.banner || p.video || p.native) && y.push(p);
                        }),
                        y.length)
                    ) {
                        var i = { id: e.tid, source: { tid: e.tid }, tmax: g.timeout, imp: y, test: z("debug") ? 1 : 0, ext: { prebid: { auctiontimestamp: m.auctionStart, targeting: { includewinners: !0, includebidderkeys: !1 } } } };
                        (i.ext.prebid = D(i.ext.prebid, { channel: { name: "pbjs", version: pbjs.version } })), g.extPrebid && "object" === V(g.extPrebid) && (i.ext.prebid = D(i.ext.prebid, g.extPrebid));
                        var s,
                            o,
                            a,
                            c = O.b.getConfig("currency.adServerCurrency");
                        c && "string" == typeof c ? (i.cur = [c]) : Array.isArray(c) && c.length && (i.cur = [c[0]]),
                            (s = i),
                            (o = r[0].refererInfo.referer),
                            (a = g.accountId),
                            s &&
                                ("object" === V(O.b.getConfig("app"))
                                    ? ((s.app = O.b.getConfig("app")), (s.app.publisher = { id: a }))
                                    : ((s.site = {}),
                                      A.isPlainObject(O.b.getConfig("site")) && (s.site = O.b.getConfig("site")),
                                      A.deepAccess(s.site, "publisher.id") || A.deepSetValue(s.site, "publisher.id", a),
                                      s.site.page || (s.site.page = o)),
                                "object" === V(O.b.getConfig("device")) && (s.device = O.b.getConfig("device")),
                                s.device || (s.device = {}),
                                s.device.w || (s.device.w = window.innerWidth),
                                s.device.h || (s.device.h = window.innerHeight));
                        var d = A.deepAccess(r, "0.bids.0.schain");
                        d && (i.source.ext = { schain: d }), A.isEmpty(v) || (i.ext.prebid.aliases = U(U({}, i.ext.prebid.aliases), v));
                        var p = A.deepAccess(r, "0.bids.0.userIdAsEids");
                        A.isArray(p) && 0 < p.length && A.deepSetValue(i, "user.ext.eids", p),
                            A.isArray(q) &&
                                0 < q.length &&
                                (n &&
                                    A.isArray(n) &&
                                    q.forEach(function (e) {
                                        e.bidders &&
                                            (e.bidders = e.bidders.filter(function (e) {
                                                return n.includes(e);
                                            }));
                                    }),
                                A.deepSetValue(i, "ext.prebid.data.eidpermissions", q));
                        var u,
                            l = O.b.getConfig("multibid");
                        l &&
                            A.deepSetValue(
                                i,
                                "ext.prebid.multibid",
                                l.reduce(function (e, r) {
                                    var t = {};
                                    return (
                                        Object.keys(r).forEach(function (e) {
                                            t[e.toLowerCase()] = r[e];
                                        }),
                                        e.push(t),
                                        e
                                    );
                                }, [])
                            ),
                            r &&
                                (m.gdprConsent &&
                                    ("boolean" == typeof m.gdprConsent.gdprApplies && (u = m.gdprConsent.gdprApplies ? 1 : 0),
                                    A.deepSetValue(i, "regs.ext.gdpr", u),
                                    A.deepSetValue(i, "user.ext.consent", m.gdprConsent.consentString),
                                    m.gdprConsent.addtlConsent && "string" == typeof m.gdprConsent.addtlConsent && A.deepSetValue(i, "user.ext.ConsentedProvidersSettings.consented_providers", m.gdprConsent.addtlConsent)),
                                m.uspConsent && A.deepSetValue(i, "regs.ext.us_privacy", m.uspConsent)),
                            !0 === z("coppa") && A.deepSetValue(i, "regs.coppa", 1);
                        var b,
                            f,
                            S,
                            C = z("ortb2") || {};
                        return (
                            C.site && A.mergeDeep(i, { site: C.site }),
                            C.user && A.mergeDeep(i, { user: C.user }),
                            (b = i),
                            (f = O.b.getBidderConfig()),
                            (S = Object.keys(f).reduce(function (e, r) {
                                var t,
                                    n = f[r];
                                return n.ortb2 && ((t = {}), n.ortb2.site && (t.site = n.ortb2.site), n.ortb2.user && (t.user = n.ortb2.user), e.push({ bidders: [r], config: { ortb2: t } })), e;
                            }, [])).length && A.deepSetValue(b, "ext.prebid.bidderconfig", S),
                            i
                        );
                    }
                    A.logError("Request to Prebid Server rejected due to invalid media type(s) in adUnit.");
                },
                interpretResponse: function (S, C, x) {
                    var O = [];
                    return (
                        [
                            ["errors", "serverErrors"],
                            ["responsetimemillis", "serverResponseTimeMs"],
                        ].forEach(function (e) {
                            return (
                                (t = C),
                                (r = S),
                                (n = e[0]),
                                (i = e[1]),
                                void (
                                    (s = A.deepAccess(r, "ext.".concat(n))) &&
                                    Object.keys(s).forEach(function (r) {
                                        var e = T()(t, function (e) {
                                            return e.bidderCode === r;
                                        });
                                        e && (e[i] = s[r]);
                                    })
                                )
                            );
                            var t, r, n, i, s;
                        }),
                        S.seatbid &&
                            S.seatbid.forEach(function (h) {
                                (h.bid || []).forEach(function (e) {
                                    var r,
                                        t = "".concat(e.impid).concat(h.seat);
                                    K[t] && (r = A.getBidRequest(K[t], C));
                                    var n = e.price,
                                        i = 0 !== n ? w.a.STATUS.GOOD : w.a.STATUS.NO_BID,
                                        s = Object(j.a)(i, r || { bidder: h.seat, src: M });
                                    s.cpm = n;
                                    var o = A.deepAccess(S, ["ext", "responsetimemillis", h.seat].join("."));
                                    r && o && (r.serverResponseTimeMs = o);
                                    var a,
                                        c,
                                        d,
                                        p = A.deepAccess(e, "ext.prebid.bidid");
                                    A.isStr(p) && (s.pbsBidId = p),
                                        A.isStr(A.deepAccess(e, "ext.prebid.events.win")) && ((a = r.auctionId), (c = s.adId), (d = A.deepAccess(e, "ext.prebid.events.win")), [a, c].every(A.isStr) && ($["".concat(a).concat(c)] = d));
                                    var u,
                                        l,
                                        b,
                                        f,
                                        g,
                                        y = A.deepAccess(e, "ext.prebid.targeting");
                                    A.isPlainObject(y) &&
                                        (A.isStr(A.deepAccess(e, "ext.prebid.events.win")) &&
                                            (y = A.getDefinedParams(
                                                y,
                                                Object.keys(y).filter(function (e) {
                                                    return -1 === e.indexOf("hb_winurl") && -1 === e.indexOf("hb_bidid");
                                                })
                                            )),
                                        (s.adserverTargeting = y)),
                                        (s.seatBidId = e.id),
                                        A.deepAccess(e, "ext.prebid.type") === E.d
                                            ? ((s.mediaType = E.d),
                                              (u = r.sizes && r.sizes[0]),
                                              (s.playerWidth = u[0]),
                                              (s.playerHeight = u[1]),
                                              e.ext.prebid.cache && "object" === V(e.ext.prebid.cache.vastXml) && e.ext.prebid.cache.vastXml.cacheId && e.ext.prebid.cache.vastXml.url
                                                  ? ((s.videoCacheKey = e.ext.prebid.cache.vastXml.cacheId), (s.vastUrl = e.ext.prebid.cache.vastXml.url))
                                                  : y &&
                                                    y.hb_uuid &&
                                                    y.hb_cache_host &&
                                                    y.hb_cache_path &&
                                                    ((s.videoCacheKey = y.hb_uuid), (s.vastUrl = "https://".concat(y.hb_cache_host).concat(y.hb_cache_path, "?uuid=").concat(y.hb_uuid))),
                                              e.adm && (s.vastXml = e.adm),
                                              !s.vastUrl && e.nurl && (s.vastUrl = e.nurl))
                                            : A.deepAccess(e, "ext.prebid.type") === E.c
                                            ? ((s.mediaType = E.c),
                                              (b = "string" == typeof e.adm ? (s.adm = JSON.parse(e.adm)) : (s.adm = e.adm)),
                                              B((l = {}), L.img, b.imptrackers || []),
                                              B(l, L.js, b.jstracker ? [b.jstracker] : []),
                                              (f = l),
                                              b.eventtrackers &&
                                                  b.eventtrackers.forEach(function (e) {
                                                      switch (e.method) {
                                                          case L.img:
                                                              f[L.img].push(e.url);
                                                              break;
                                                          case L.js:
                                                              f[L.js].push(e.url);
                                                      }
                                                  }),
                                              A.isPlainObject(b) && Array.isArray(b.assets)
                                                  ? ((g = G[e.impid]),
                                                    (s.native = A.cleanObj(
                                                        b.assets.reduce(function (r, t) {
                                                            var n = g[t.id];
                                                            return (
                                                                A.isPlainObject(t.img)
                                                                    ? (r[n.img.type ? H[n.img.type] : "image"] = A.pick(t.img, ["url", "w as width", "h as height"]))
                                                                    : A.isPlainObject(t.title)
                                                                    ? (r.title = t.title.text)
                                                                    : A.isPlainObject(t.data) &&
                                                                      F.forEach(function (e) {
                                                                          X[e] === n.data.type && (r[e] = t.data.value);
                                                                      }),
                                                                r
                                                            );
                                                        }, A.cleanObj({ clickUrl: b.link, clickTrackers: A.deepAccess(b, "link.clicktrackers"), impressionTrackers: f[L.img], javascriptTrackers: f[L.js] }))
                                                    )))
                                                  : A.logError("prebid server native response contained no assets"))
                                            : e.adm && e.nurl
                                            ? ((s.ad = e.adm), (s.ad += A.createTrackPixelHtml(decodeURIComponent(e.nurl))))
                                            : e.adm
                                            ? (s.ad = e.adm)
                                            : e.nurl && (s.adUrl = e.nurl),
                                        (s.width = e.w),
                                        (s.height = e.h),
                                        e.dealid && (s.dealId = e.dealid),
                                        (s.requestId = r.bidId || r.bid_Id),
                                        (s.creative_id = e.crid),
                                        (s.creativeId = e.crid),
                                        e.burl && (s.burl = e.burl),
                                        (s.currency = S.cur ? S.cur : "USD"),
                                        (s.meta = {});
                                    var v = A.deepAccess(e, "ext.prebid.meta");
                                    v && A.isPlainObject(v) && (s.meta = A.deepClone(v)), e.adomain && (s.meta.advertiserDomains = e.adomain);
                                    var m = x.defaultTtl || 60;
                                    (s.ttl = e.exp ? e.exp : m), (s.netRevenue = !e.netRevenue || e.netRevenue), O.push({ adUnit: r.adUnitCode, bid: s });
                                });
                            }),
                        O
                    );
                },
            };
            function f(e) {
                var r,
                    t,
                    n = (function (e, r) {
                        if ([e, r].every(A.isStr)) return $["".concat(e).concat(r)];
                    })(e.auctionId, e.adId);
                A.isStr(n) && (A.logMessage('Invoking image pixel for wurl on BID_WIN: "'.concat(n, '"')), A.triggerPixel(n), (r = e.auctionId), (t = e.adId), [r, t].every(A.isStr) && ($["".concat(r).concat(t)] = void 0));
            }
            function Y(e, r) {
                return (n = !0), (t = r) && t.gdprApplies && 2 === t.apiVersion && (n = !(!0 !== A.deepAccess(t, "vendorData.purpose.consents.1"))), n ? e.p1Consent : e.noP1Consent;
                var t, n;
            }
            function Z(e) {
                var r, t;
                return Array.isArray(e) && 0 < e.length && ((r = e[0].gdprConsent), (t = e[0].uspConsent)), { gdprConsent: r, uspConsent: t };
            }
            function g() {
                var e = new n.a("prebidServer");
                return (
                    (e.callBids = function (r, t, n, i, e) {
                        var s,
                            o,
                            a,
                            c,
                            d,
                            p,
                            u,
                            l,
                            b,
                            f,
                            g = A.deepClone(r.ad_units),
                            y = Z(t),
                            v = y.gdprConsent,
                            m = y.uspConsent,
                            h = g.filter(function (e) {
                                return e.mediaTypes && (e.mediaTypes.native || (e.mediaTypes.banner && e.mediaTypes.banner.sizes) || (e.mediaTypes.video && e.mediaTypes.video.playerSize));
                            }),
                            S = h
                                .map(function (e) {
                                    return e.bids
                                        .map(function (e) {
                                            return e.bidder;
                                        })
                                        .filter(A.uniques);
                                })
                                .reduce(A.flatten)
                                .filter(A.uniques);
                        Array.isArray(N) &&
                            (r.s2sConfig &&
                                r.s2sConfig.syncEndpoint &&
                                Y(r.s2sConfig.syncEndpoint, v) &&
                                ((s = r.s2sConfig.bidders
                                    .map(function (e) {
                                        return x.default.aliasRegistry[e] || e;
                                    })
                                    .filter(function (e, r, t) {
                                        return t.indexOf(e) === r;
                                    })),
                                (c = s),
                                (d = v),
                                (p = m),
                                (u = r.s2sConfig),
                                N.length !== W &&
                                    (W++,
                                    (l = { uuid: A.generateUUID(), bidders: c, account: u.accountId }),
                                    (b = u.userSyncLimit),
                                    A.isNumber(b) && 0 < b && (l.limit = b),
                                    d && ((l.gdpr = d.gdprApplies ? 1 : 0), !1 !== d.gdprApplies && (l.gdpr_consent = d.consentString)),
                                    p && (l.us_privacy = p),
                                    "boolean" == typeof u.coopSync && (l.coopSync = u.coopSync),
                                    (f = JSON.stringify(l)),
                                    Object(I.a)(
                                        Y(u.syncEndpoint, d),
                                        function (e) {
                                            try {
                                                J((e = JSON.parse(e)).bidder_status, u);
                                            } catch (e) {
                                                A.logError(e);
                                            }
                                        },
                                        f,
                                        { contentType: "text/plain", withCredentials: !0 }
                                    ))),
                            (a = (o = Q.buildRequest(r, t, h, r.s2sConfig, S)) && JSON.stringify(o)),
                            A.logInfo("BidRequest: " + a),
                            o &&
                                a &&
                                e(
                                    Y(r.s2sConfig.endpoint, v),
                                    {
                                        success: function (e) {
                                            return (function (e, r, n, i, t, s) {
                                                var o,
                                                    a = Z(n),
                                                    c = a.gdprConsent,
                                                    d = a.uspConsent;
                                                try {
                                                    (o = JSON.parse(e)),
                                                        Q.interpretResponse(o, n, s).forEach(function (e) {
                                                            var r = e.adUnit,
                                                                t = e.bid;
                                                            Object(C.isValid)(r, t, n) && i(r, t);
                                                        }),
                                                        n.forEach(function (e) {
                                                            return _.a.emit(w.a.EVENTS.BIDDER_DONE, e);
                                                        });
                                                } catch (e) {
                                                    A.logError(e);
                                                }
                                                (!o || (o.status && P()(o.status, "Error"))) && A.logError("error parsing response: ", o.status);
                                                t(),
                                                    (function (e, t, n) {
                                                        e.forEach(function (e) {
                                                            var r = x.default.getBidAdapter(e);
                                                            r && r.registerSyncs && O.b.runWithBidder(e, A.bind.call(r.registerSyncs, r, [], t, n));
                                                        });
                                                    })(r, c, d);
                                            })(e, S, t, n, i, r.s2sConfig);
                                        },
                                        error: i,
                                    },
                                    a,
                                    { contentType: "text/plain", withCredentials: !0 }
                                ));
                    }),
                    _.a.on(w.a.EVENTS.BID_WON, f),
                    D(this, { callBids: e.callBids, setBidderCode: e.setBidderCode, type: M })
                );
            }
            (Object(A.getPrebidInternal)().setEidPermissions = function (e) {
                q = e;
            }),
                x.default.registerBidAdapter(new g(), "prebidServer");
        },
        733: function (e, r, t) {
            "use strict";
            t.d(r, "a", function () {
                return n;
            });
            var n = {
                appnexus: {
                    adapter: "prebidServer",
                    enabled: !0,
                    endpoint: { p1Consent: "https://prebid.localhost/pbs/v1/openrtb2/auction", noP1Consent: "https://prebid.adnxs-simple.com/pbs/v1/openrtb2/auction" },
                    syncEndpoint: { p1Consent: "https://prebid.localhost/pbs/v1/cookie_sync", noP1Consent: "https://prebid.adnxs-simple.com/pbs/v1/cookie_sync" },
                    timeout: 1e3,
                },
                rubicon: {
                    adapter: "prebidServer",
                    enabled: !0,
                    endpoint: { p1Consent: "https://prebid-server.localhost/openrtb2/auction", noP1Consent: "https://prebid-server.localhost/openrtb2/auction" },
                    syncEndpoint: { p1Consent: "https://prebid-server.localhost/cookie_sync", noP1Consent: "https://prebid-server.localhost/cookie_sync" },
                    timeout: 500,
                },
                openx: {
                    adapter: "prebidServer",
                    enabled: !0,
                    endpoint: { p1Consent: "https://prebid.openx.net/openrtb2/auction", noP1Consent: "https://prebid.openx.net/openrtb2/auction" },
                    syncEndpoint: { p1Consent: "https://prebid.openx.net/cookie_sync", noP1Consent: "https://prebid.openx.net/cookie_sync" },
                    timeout: 1e3,
                },
            };
        },
    },
    [731]
);
pbjsChunk(
    [171],
    {
        752: function (e, r, a) {
            e.exports = a(753);
        },
        753: function (e, r, a) {
            "use strict";
            Object.defineProperty(r, "__esModule", { value: !0 }),
                a.d(r, "spec", function () {
                    return h;
                });
            var w = a(0),
                t = a(1),
                O = a(2),
                T = a(3),
                i = a(12);
            function S() {
                return (S =
                    Object.assign ||
                    function (e) {
                        for (var r = 1; r < arguments.length; r++) {
                            var a = arguments[r];
                            for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            function n(r, e) {
                var a,
                    t = Object.keys(r);
                return (
                    Object.getOwnPropertySymbols &&
                        ((a = Object.getOwnPropertySymbols(r)),
                        e &&
                            (a = a.filter(function (e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                            })),
                        t.push.apply(t, a)),
                    t
                );
            }
            function y(i) {
                for (var e = 1; e < arguments.length; e++) {
                    var s = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? n(Object(s), !0).forEach(function (e) {
                              var r, a, t;
                              (r = i), (t = s[(a = e)]), a in r ? Object.defineProperty(r, a, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (r[a] = t);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s))
                        : n(Object(s)).forEach(function (e) {
                              Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e));
                          });
                }
                return i;
            }
            function D(e) {
                return (D =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                          })(e);
            }
            var o = "pubmatic",
                P = "PubMatic: ",
                R = "USD",
                Y = void 0,
                s = "https://pubmatic.bbvms.com/r/".concat("$RENDERER", ".js"),
                x = { kadpageurl: "", gender: "", yob: "", lat: "", lon: "", wiid: "", profId: "", verId: "" },
                d = { NUMBER: "number", STRING: "string", BOOLEAN: "boolean", ARRAY: "array", OBJECT: "object" },
                p = {
                    mimes: d.ARRAY,
                    minduration: d.NUMBER,
                    maxduration: d.NUMBER,
                    startdelay: d.NUMBER,
                    playbackmethod: d.ARRAY,
                    api: d.ARRAY,
                    protocols: d.ARRAY,
                    w: d.NUMBER,
                    h: d.NUMBER,
                    battr: d.ARRAY,
                    linearity: d.NUMBER,
                    placement: d.NUMBER,
                    minbitrate: d.NUMBER,
                    maxbitrate: d.NUMBER,
                    skip: d.NUMBER,
                },
                E = {
                    TITLE: { ID: 1, KEY: "title", TYPE: 0 },
                    IMAGE: { ID: 2, KEY: "image", TYPE: 0 },
                    ICON: { ID: 3, KEY: "icon", TYPE: 0 },
                    SPONSOREDBY: { ID: 4, KEY: "sponsoredBy", TYPE: 1 },
                    BODY: { ID: 5, KEY: "body", TYPE: 2 },
                    CLICKURL: { ID: 6, KEY: "clickUrl", TYPE: 0 },
                    VIDEO: { ID: 7, KEY: "video", TYPE: 0 },
                    EXT: { ID: 8, KEY: "ext", TYPE: 0 },
                    DATA: { ID: 9, KEY: "data", TYPE: 0 },
                    LOGO: { ID: 10, KEY: "logo", TYPE: 0 },
                    SPONSORED: { ID: 11, KEY: "sponsored", TYPE: 1 },
                    DESC: { ID: 12, KEY: "data", TYPE: 2 },
                    RATING: { ID: 13, KEY: "rating", TYPE: 3 },
                    LIKES: { ID: 14, KEY: "likes", TYPE: 4 },
                    DOWNLOADS: { ID: 15, KEY: "downloads", TYPE: 5 },
                    PRICE: { ID: 16, KEY: "price", TYPE: 6 },
                    SALEPRICE: { ID: 17, KEY: "saleprice", TYPE: 7 },
                    PHONE: { ID: 18, KEY: "phone", TYPE: 8 },
                    ADDRESS: { ID: 19, KEY: "address", TYPE: 9 },
                    DESC2: { ID: 20, KEY: "desc2", TYPE: 10 },
                    DISPLAYURL: { ID: 21, KEY: "displayurl", TYPE: 11 },
                    CTA: { ID: 22, KEY: "cta", TYPE: 12 },
                },
                v = { ICON: 1, LOGO: 2, IMAGE: 3 },
                I = [
                    { id: E.SPONSOREDBY.ID, required: !0, data: { type: 1 } },
                    { id: E.TITLE.ID, required: !0 },
                    { id: E.IMAGE.ID, required: !0 },
                ],
                c = { 1: "PMP", 5: "PREF", 6: "PMPG" },
                A = { EID: 1, SEGMENT: 2 },
                l = {
                    bootstrapPlayer: function (e) {
                        var r = { code: e.adUnitCode };
                        if ((e.vastXml ? (r.vastXml = e.vastXml) : e.vastUrl && (r.vastUrl = e.vastUrl), e.vastXml || e.vastUrl)) {
                            for (var a, t = l.getRendererId("pubmatic", e.rendererCode), i = document.getElementById(e.adUnitCode), s = 0; s < window.bluebillywig.renderers.length; s++)
                                if (window.bluebillywig.renderers[s]._id === t) {
                                    a = window.bluebillywig.renderers[s];
                                    break;
                                }
                            a ? a.bootstrap(r, i) : w.logWarn("".concat(P, ": Couldn't find a renderer with ").concat(t));
                        } else w.logWarn("".concat(P, ": No vastXml or vastUrl on bid, bailing..."));
                    },
                    newRenderer: function (e, r) {
                        var a = s.replace("$RENDERER", e),
                            t = i.a.install({ url: a, loaded: !1, adUnitCode: r });
                        try {
                            t.setRender(l.localhostRender);
                        } catch (e) {
                            w.logWarn("".concat(P, ": Error tying to setRender on renderer"), e);
                        }
                        return t;
                    },
                    localhostRender: function (e) {
                        e.renderer.push(function () {
                            l.bootstrapPlayer(e);
                        });
                    },
                    getRendererId: function (e, r) {
                        return "".concat(e, "-").concat(r);
                    },
                },
                u = [O.b, O.d, O.c],
                N = 0,
                C = !1,
                m = {},
                k = {};
            function U(e, r) {
                if (!w.isStr(r)) return r && w.logWarn(P + "Ignoring param key: " + e + ", expects string-value, found " + D(r)), Y;
                switch (e) {
                    case "pmzoneid":
                        return r
                            .split(",")
                            .slice(0, 50)
                            .map(function (e) {
                                return e.trim();
                            })
                            .join();
                    case "kadfloor":
                    case "lat":
                    case "lon":
                        return parseFloat(r) || Y;
                    case "yob":
                        return parseInt(r) || Y;
                    default:
                        return r;
                }
            }
            function z(e) {
                var r;
                (e.params.adUnit = ""),
                    (e.params.adUnitIndex = "0"),
                    (e.params.width = 0),
                    (e.params.height = 0),
                    (e.params.adSlot = ((r = e.params.adSlot), w.isStr(r) ? r.replace(/^\s+/g, "").replace(/\s+$/g, "") : (r && w.logWarn(o + ": adSlot must be a string. Ignoring adSlot"), "")));
                var a = (t = e.params.adSlot).split(":"),
                    t = a[0];
                if ((2 == a.length && (e.params.adUnitIndex = a[1]), (a = t.split("@")), (e.params.adUnit = a[0]), 1 < a.length)) {
                    if (2 != (a = a[1].split("x")).length) return void w.logWarn(P + "AdSlot Error: adSlot not in required format");
                    (e.params.width = parseInt(a[0], 10)), (e.params.height = parseInt(a[1], 10));
                } else if (e.hasOwnProperty("mediaTypes") && e.mediaTypes.hasOwnProperty(O.b) && e.mediaTypes.banner.hasOwnProperty("sizes")) {
                    for (var i = 0, s = []; i < e.mediaTypes.banner.sizes.length; i++) 2 === e.mediaTypes.banner.sizes[i].length && s.push(e.mediaTypes.banner.sizes[i]);
                    (e.mediaTypes.banner.sizes = s),
                        1 <= e.mediaTypes.banner.sizes.length &&
                            ((e.params.width = e.mediaTypes.banner.sizes[0][0]), (e.params.height = e.mediaTypes.banner.sizes[0][1]), (e.mediaTypes.banner.sizes = e.mediaTypes.banner.sizes.splice(1, e.mediaTypes.banner.sizes.length - 1)));
                }
            }
            function K(e) {
                var r,
                    a = w.mergeDeep(w.deepAccess(e.mediaTypes, "video"), e.params.video);
                if (a !== Y) {
                    for (var t in ((r = {}), p))
                        a.hasOwnProperty(t) &&
                            (r[t] = (function (e, r, a) {
                                var t,
                                    i = "Ignoring param key: " + e + ", expects " + a + ", found " + D(r);
                                switch (a) {
                                    case d.BOOLEAN:
                                        t = w.isBoolean;
                                        break;
                                    case d.NUMBER:
                                        t = w.isNumber;
                                        break;
                                    case d.STRING:
                                        t = w.isStr;
                                        break;
                                    case d.ARRAY:
                                        t = w.isArray;
                                }
                                return t(r) ? r : (w.logWarn(P + i), Y);
                            })(t, a[t], p[t]));
                    w.isArray(e.mediaTypes.video.playerSize[0])
                        ? ((r.w = parseInt(e.mediaTypes.video.playerSize[0][0], 10)), (r.h = parseInt(e.mediaTypes.video.playerSize[0][1], 10)))
                        : w.isNumber(e.mediaTypes.video.playerSize[0]) && ((r.w = parseInt(e.mediaTypes.video.playerSize[0], 10)), (r.h = parseInt(e.mediaTypes.video.playerSize[1], 10)));
                } else (r = Y), w.logWarn(P + "Error: Video config params missing for adunit: " + e.params.adUnit + " with mediaType set as video. Ignoring video impression in the adunit.");
                return r;
            }
            function L(e) {
                var r,
                    a,
                    t,
                    i,
                    s,
                    n,
                    o,
                    d,
                    p,
                    c,
                    l,
                    u,
                    m = {},
                    g = {},
                    h = e.hasOwnProperty("sizes") ? e.sizes : [],
                    b = "",
                    f = [],
                    m = {
                        id: e.bidId,
                        tagid: e.params.adUnit || void 0,
                        bidfloor: U("kadfloor", e.params.kadfloor),
                        secure: 1,
                        ext: { pmZoneId: U("pmzoneid", e.params.pmzoneid) },
                        bidfloorcur: e.params.currency ? U("currency", e.params.currency) : R,
                    };
                if (
                    ((t = m),
                    (i = e).params.deals &&
                        (w.isArray(i.params.deals)
                            ? i.params.deals.forEach(function (e) {
                                  w.isStr(e) && 3 < e.length
                                      ? (t.pmp || (t.pmp = { private_auction: 0, deals: [] }), t.pmp.deals.push({ id: e }))
                                      : w.logWarn(P + "Error: deal-id present in array bid.params.deals should be a strings with more than 3 charaters length, deal-id ignored: " + e);
                              })
                            : w.logWarn(P + "Error: bid.params.deals should be an array of strings.")),
                    (s = m),
                    (p = ""),
                    (n = e).params.dctr &&
                        ((p = n.params.dctr),
                        w.isStr(p) && 0 < p.length
                            ? ((d = p.split("|")),
                              (p = ""),
                              d.forEach(function (e) {
                                  p += 0 < e.length ? e.trim() + "|" : "";
                              }),
                              (o = p.length),
                              "|" === p.substring(o, o - 1) && (p = p.substring(0, o - 1)),
                              (s.ext.key_val = p.trim()))
                            : w.logWarn(P + "Ignoring param : dctr with value : " + p + ", expects string-value, found empty or non-string value")),
                    e.hasOwnProperty("mediaTypes"))
                )
                    for (b in e.mediaTypes)
                        switch (b) {
                            case O.b:
                                (r = (function (e) {
                                    var r,
                                        a = e.mediaTypes.banner.sizes,
                                        t = [];
                                    if (a !== Y && w.isArray(a)) {
                                        if (((r = {}), e.params.width || e.params.height)) (r.w = e.params.width), (r.h = e.params.height);
                                        else {
                                            if (0 === a.length) return (r = Y), w.logWarn(P + "Error: mediaTypes.banner.size missing for adunit: " + e.params.adUnit + ". Ignoring the banner impression in the adunit."), r;
                                            (r.w = parseInt(a[0][0], 10)), (r.h = parseInt(a[0][1], 10)), (a = a.splice(1, a.length - 1));
                                        }
                                        0 < a.length &&
                                            ((t = []),
                                            a.forEach(function (e) {
                                                1 < e.length && t.push({ w: e[0], h: e[1] });
                                            }),
                                            0 < t.length && (r.format = t)),
                                            (r.pos = 0),
                                            (r.topframe = w.inIframe() ? 0 : 1);
                                    } else w.logWarn(P + "Error: mediaTypes.banner.size missing for adunit: " + e.params.adUnit + ". Ignoring the banner impression in the adunit."), (r = Y);
                                    return r;
                                })(e)) !== Y && (m.banner = r);
                                break;
                            case O.c:
                                (g.request = JSON.stringify(
                                    (function (e) {
                                        var r,
                                            a,
                                            t,
                                            i = { assets: [] };
                                        for (var s in e) {
                                            if (e.hasOwnProperty(s)) {
                                                var n = {};
                                                if (!(i.assets && 0 < i.assets.length && i.assets.hasOwnProperty(s)))
                                                    switch (s) {
                                                        case E.TITLE.KEY:
                                                            e[s].len || e[s].length
                                                                ? (n = { id: E.TITLE.ID, required: e[s].required ? 1 : 0, title: { len: e[s].len || e[s].length, ext: e[s].ext } })
                                                                : w.logWarn(P + "Error: Title Length is required for native ad: " + JSON.stringify(e));
                                                            break;
                                                        case E.IMAGE.KEY:
                                                            e[s].sizes && 0 < e[s].sizes.length
                                                                ? (n = {
                                                                      id: E.IMAGE.ID,
                                                                      required: e[s].required ? 1 : 0,
                                                                      img: {
                                                                          type: v.IMAGE,
                                                                          w: e[s].w || e[s].width || (e[s].sizes ? e[s].sizes[0] : Y),
                                                                          h: e[s].h || e[s].height || (e[s].sizes ? e[s].sizes[1] : Y),
                                                                          wmin: e[s].wmin || e[s].minimumWidth || (e[s].minsizes ? e[s].minsizes[0] : Y),
                                                                          hmin: e[s].hmin || e[s].minimumHeight || (e[s].minsizes ? e[s].minsizes[1] : Y),
                                                                          mimes: e[s].mimes,
                                                                          ext: e[s].ext,
                                                                      },
                                                                  })
                                                                : w.logWarn(P + "Error: Image sizes is required for native ad: " + JSON.stringify(e));
                                                            break;
                                                        case E.ICON.KEY:
                                                            e[s].sizes && 0 < e[s].sizes.length
                                                                ? (n = {
                                                                      id: E.ICON.ID,
                                                                      required: e[s].required ? 1 : 0,
                                                                      img: { type: v.ICON, w: e[s].w || e[s].width || (e[s].sizes ? e[s].sizes[0] : Y), h: e[s].h || e[s].height || (e[s].sizes ? e[s].sizes[1] : Y) },
                                                                  })
                                                                : w.logWarn(P + "Error: Icon sizes is required for native ad: " + JSON.stringify(e));
                                                            break;
                                                        case E.VIDEO.KEY:
                                                            n = {
                                                                id: E.VIDEO.ID,
                                                                required: e[s].required ? 1 : 0,
                                                                video: { minduration: e[s].minduration, maxduration: e[s].maxduration, protocols: e[s].protocols, mimes: e[s].mimes, ext: e[s].ext },
                                                            };
                                                            break;
                                                        case E.EXT.KEY:
                                                            n = { id: E.EXT.ID, required: e[s].required ? 1 : 0 };
                                                            break;
                                                        case E.LOGO.KEY:
                                                            n = {
                                                                id: E.LOGO.ID,
                                                                required: e[s].required ? 1 : 0,
                                                                img: { type: v.LOGO, w: e[s].w || e[s].width || (e[s].sizes ? e[s].sizes[0] : Y), h: e[s].h || e[s].height || (e[s].sizes ? e[s].sizes[1] : Y) },
                                                            };
                                                            break;
                                                        case E.SPONSOREDBY.KEY:
                                                        case E.BODY.KEY:
                                                        case E.RATING.KEY:
                                                        case E.LIKES.KEY:
                                                        case E.DOWNLOADS.KEY:
                                                        case E.PRICE.KEY:
                                                        case E.SALEPRICE.KEY:
                                                        case E.PHONE.KEY:
                                                        case E.ADDRESS.KEY:
                                                        case E.DESC2.KEY:
                                                        case E.DISPLAYURL.KEY:
                                                        case E.CTA.KEY:
                                                            (r = k[s]), (a = e), (t = void 0), (t = r.KEY), (n = { id: r.ID, required: a[t].required ? 1 : 0, data: { type: r.TYPE, len: a[t].len, ext: a[t].ext } });
                                                    }
                                            }
                                            n && n.id && (i.assets[i.assets.length] = n);
                                        }
                                        var o = I.length,
                                            d = 0;
                                        return (
                                            I.forEach(function (e) {
                                                for (var r = i.assets.length, a = 0; a < r; a++)
                                                    if (e.id == i.assets[a].id) {
                                                        d++;
                                                        break;
                                                    }
                                            }),
                                            (C = o != d),
                                            i
                                        );
                                    })(e.nativeParams)
                                )),
                                    C ? w.logWarn(P + "Error: Error in Native adunit " + e.params.adUnit + ". Ignoring the adunit. Refer to http://prebid.org/dev-docs/show-native-ads.html for more details.") : (m.native = g);
                                break;
                            case O.d:
                                (a = K(e)) !== Y && (m.video = a);
                        }
                else
                    (r = { pos: 0, w: e.params.width, h: e.params.height, topframe: w.inIframe() ? 0 : 1 }),
                        w.isArray(h) &&
                            1 < h.length &&
                            ((h = h.splice(1, h.length - 1)).forEach(function (e) {
                                f.push({ w: e[0], h: e[1] });
                            }),
                            (r.format = f)),
                        (m.banner = r);
                return (
                    (c = m),
                    (l = e),
                    (u = y({}, w.deepAccess(l, "ortb2Imp.ext.data"))),
                    Object.keys(u).forEach(function (e) {
                        "pbadslot" === e
                            ? "string" == typeof u[e] && u[e] && w.deepSetValue(c, "ext.data.pbadslot", u[e])
                            : "adserver" === e
                            ? ["name", "adslot"].forEach(function (e) {
                                  var r = w.deepAccess(u, "adserver.".concat(e));
                                  "string" == typeof r && r && (w.deepSetValue(c, "ext.data.adserver.".concat(e.toLowerCase()), r), "adslot" === e && w.deepSetValue(c, "ext.dfp_ad_unit_code", r));
                              })
                            : w.deepSetValue(c, "ext.data.".concat(e), u[e]);
                    }),
                    (function (t, i) {
                        var s = -1;
                        "function" != typeof i.getFloor ||
                            T.b.getConfig("pubmatic.disableFloors") ||
                            [O.b, O.d, O.c].forEach(function (e) {
                                var r, a;
                                t.hasOwnProperty(e) &&
                                    ("object" !== D((r = i.getFloor({ currency: t.bidfloorcur, mediaType: e, size: "*" }))) ||
                                        r.currency !== t.bidfloorcur ||
                                        isNaN(parseInt(r.floor)) ||
                                        ((a = parseFloat(r.floor)), (s = -1 == s ? a : Math.min(a, s))));
                            });
                        t.bidfloor && (s = Math.max(s, t.bidfloor));
                        t.bidfloor = !isNaN(s) && 0 < s ? s : Y;
                    })(m, e),
                    m.hasOwnProperty(O.b) || m.hasOwnProperty(O.c) || m.hasOwnProperty(O.d) ? m : Y
                );
            }
            function q(e, r) {
                var a = null,
                    t = w.deepAccess(e, "0.userId.flocId");
                if (t && t.id)
                    switch (r) {
                        case A.SEGMENT:
                            a = { id: "FLOC", name: "FLOC", ext: { ver: t.version }, segment: [{ id: t.id, name: "chrome.com", value: t.id.toString() }] };
                            break;
                        case A.EID:
                        default:
                            a = { source: "chrome.com", uids: [{ atype: 1, id: t.id, ext: { ver: t.version } }] };
                    }
                return a;
            }
            function g(e) {
                return !0 === w.isArray(e) && 0 < e.length;
            }
            w._each(E, function (e) {
                m[e.ID] = e.KEY;
            }),
                w._each(E, function (e) {
                    k[e.KEY] = e;
                });
            var h = {
                code: o,
                gvlid: 76,
                supportedMediaTypes: [O.b, O.d, O.c],
                isBidRequestValid: function (e) {
                    if (e && e.params) {
                        if (!w.isStr(e.params.publisherId))
                            return w.logWarn(P + "Error: publisherId is mandatory and cannot be numeric (wrap it in quotes in your config). Call to OpenBid will not be sent for ad unit: " + JSON.stringify(e)), !1;
                        if (e.hasOwnProperty("mediaTypes") && e.mediaTypes.hasOwnProperty(O.d)) {
                            var r = w.deepAccess(e.mediaTypes, "video.mimes"),
                                a = w.deepAccess(e, "params.video.mimes");
                            if (!1 === g(r) && !1 === g(a))
                                return (
                                    w.logWarn(
                                        P + "Error: For video ads, bid.mediaTypes.video.mimes OR bid.params.video.mimes should be present and must be a non-empty array. Call to OpenBid will not be sent for ad unit:" + JSON.stringify(e)
                                    ),
                                    !1
                                );
                            if (!e.mediaTypes[O.d].hasOwnProperty("context")) return w.logError("".concat(P, ": no context specified in bid. Rejecting bid: "), e), !1;
                            if ("localhost" === e.mediaTypes[O.d].context && !w.isStr(e.params.localhostAU) && !e.hasOwnProperty("renderer") && !e.mediaTypes[O.d].hasOwnProperty("renderer"))
                                return w.logError("".concat(P, ': for "localhost" bids either localhostAU parameter must be provided or ad unit supplied renderer is required. Rejecting bid: '), e), !1;
                        }
                        return !0;
                    }
                    return !1;
                },
                buildRequests: function (e, r) {
                    var a;
                    r && r.refererInfo && (a = r.refererInfo);
                    var t,
                        i,
                        s,
                        n,
                        o,
                        d,
                        p,
                        c,
                        l,
                        u,
                        m,
                        g,
                        h,
                        b = { pageURL: (t = a) && t.referer ? t.referer : window.location.href, refURL: window.document.referrer },
                        f =
                            ((i = b),
                            {
                                id: "" + new Date().getTime(),
                                at: 1,
                                cur: [R],
                                imp: [],
                                site: { page: i.pageURL, ref: i.refURL, publisher: {} },
                                device: {
                                    ua: navigator.userAgent,
                                    js: 1,
                                    dnt: "yes" == navigator.doNotTrack || "1" == navigator.doNotTrack || "1" == navigator.msDoNotTrack ? 1 : 0,
                                    h: screen.height,
                                    w: screen.width,
                                    language: navigator.language,
                                },
                                user: {},
                                ext: {},
                            }),
                        y = "",
                        E = [],
                        v = [];
                    if (
                        (e.forEach(function (e) {
                            var r;
                            ((s = w.deepClone(e)).params.adSlot = s.params.adSlot || ""),
                                z(s),
                                s.params.hasOwnProperty("video") || (s.hasOwnProperty("mediaTypes") && s.mediaTypes.hasOwnProperty(O.c)) || 0 !== s.params.width || 0 !== s.params.height
                                    ? ((b.pubId = b.pubId || s.params.publisherId),
                                      ((b = (function (e, r) {
                                          var a, t, i;
                                          for (a in (r.kadpageurl || (r.kadpageurl = r.pageURL), x))
                                              x.hasOwnProperty(a) &&
                                                  (t = e[a]) &&
                                                  ("object" === D((i = x[a])) && (t = i.f(t, r)), w.isStr(t) ? (r[a] = t) : w.logWarn(P + "Ignoring param : " + a + " with value : " + x[a] + ", expects string-value, found " + D(t)));
                                          return r;
                                      })(s.params, b)).transactionId = s.transactionId),
                                      "" === y ? (y = s.params.currency || Y) : s.params.hasOwnProperty("currency") && y !== s.params.currency && w.logWarn(P + "Currency specifier ignored. Only one currency permitted."),
                                      (s.params.currency = y),
                                      s.params.hasOwnProperty("dctr") && w.isStr(s.params.dctr) && E.push(s.params.dctr),
                                      s.params.hasOwnProperty("bcat") && w.isArray(s.params.bcat) && (v = v.concat(s.params.bcat)),
                                      (r = L(s)) && f.imp.push(r))
                                    : w.logWarn(P + "Skipping the non-standard adslot: ", s.params.adSlot, JSON.stringify(s));
                        }),
                        0 != f.imp.length)
                    ) {
                        (f.site.publisher.id = b.pubId.trim()),
                            (N = b.pubId.trim()),
                            (f.ext.wrapper = {}),
                            (f.ext.wrapper.profile = parseInt(b.profId) || Y),
                            (f.ext.wrapper.version = parseInt(b.verId) || Y),
                            (f.ext.wrapper.wiid = b.wiid || r.auctionId),
                            (f.ext.wrapper.wv = "prebid_prebid_4.43.4"),
                            (f.ext.wrapper.transactionId = b.transactionId),
                            (f.ext.wrapper.wp = "pbjs"),
                            (f.user.gender = b.gender ? b.gender.trim() : Y),
                            (f.user.geo = {}),
                            (f.user.geo.lat = U("lat", b.lat)),
                            (f.user.geo.lon = U("lon", b.lon)),
                            (f.user.yob = U("yob", b.yob)),
                            (f.device.geo = f.user.geo),
                            (f.site.page = b.kadpageurl.trim() || f.site.page.trim()),
                            (f.site.domain = ((n = f.site.page), ((o = document.createElement("a")).href = n), o.hostname)),
                            "object" === D(T.b.getConfig("content")) && (f.site.content = T.b.getConfig("content")),
                            "object" === D(T.b.getConfig("device")) && (f.device = S(f.device, T.b.getConfig("device"))),
                            w.deepSetValue(f, "source.tid", b.transactionId),
                            -1 !== window.location.href.indexOf("pubmaticTest=true") && (f.test = 1),
                            e[0].schain && w.deepSetValue(f, "source.ext.schain", e[0].schain),
                            r && r.gdprConsent && (w.deepSetValue(f, "user.ext.consent", r.gdprConsent.consentString), w.deepSetValue(f, "regs.ext.gdpr", r.gdprConsent.gdprApplies ? 1 : 0)),
                            r && r.uspConsent && w.deepSetValue(f, "regs.ext.us_privacy", r.uspConsent),
                            !0 === T.b.getConfig("coppa") && w.deepSetValue(f, "regs.coppa", 1),
                            (d = f),
                            (p = e),
                            (c = w.deepAccess(p, "0.userIdAsEids")),
                            (l = q(p, A.EID)) && (c = c || []).push(l),
                            w.isArray(c) && 0 < c.length && w.deepSetValue(d, "user.eids", c),
                            (u = f),
                            0 <
                                (m = (m = v)
                                    .filter(function (e) {
                                        return "string" == typeof e || (w.logWarn(P + "bcat: Each category should be a string, ignoring category: " + e), !1);
                                    })
                                    .map(function (e) {
                                        return e.trim();
                                    })
                                    .filter(function (e, r, a) {
                                        return 3 < e.length ? a.indexOf(e) === r : void w.logWarn(P + "bcat: Each category should have a value of a length of more than 3 characters, ignoring category: " + e);
                                    })).length && (w.logWarn(P + "bcat: Selected: ", m), (u.bcat = m)),
                            (g = f),
                            (h = q(e, A.SEGMENT)) && (g.user || (g.user = {}), g.user.data || (g.user.data = []), g.user.data.push(h));
                        var I = T.b.getConfig("ortb2") || {};
                        return (
                            I.site && w.mergeDeep(f, { site: I.site }),
                            I.user && w.mergeDeep(f, { user: I.user }),
                            "object" === D(T.b.getConfig("app")) &&
                                ((f.app = T.b.getConfig("app")), (f.app.publisher = f.site.publisher), (f.app.ext = f.site.ext || Y), "object" !== D(f.app.content) && (f.app.content = f.site.content || Y), delete f.site),
                            { method: "POST", url: "https://localhost/translator?source=prebid-client", data: JSON.stringify(f), bidderRequest: r }
                        );
                    }
                },
                interpretResponse: function (e, t) {
                    var i = [],
                        s = R,
                        n = JSON.parse(t.data),
                        o = n.site && n.site.ref ? n.site.ref : "";
                    try {
                        e.body &&
                            e.body.seatbid &&
                            w.isArray(e.body.seatbid) &&
                            ((s = e.body.cur || s),
                            e.body.seatbid.forEach(function (e) {
                                e.bid &&
                                    w.isArray(e.bid) &&
                                    e.bid.forEach(function (r) {
                                        var a = {
                                            requestId: r.impid,
                                            cpm: (parseFloat(r.price) || 0).toFixed(2),
                                            width: r.w,
                                            height: r.h,
                                            creativeId: r.crid || r.id,
                                            dealId: r.dealid,
                                            currency: s,
                                            netRevenue: !0,
                                            ttl: 300,
                                            referrer: o,
                                            ad: r.adm,
                                            pm_seat: e.seat || null,
                                            pm_dspid: r.ext && r.ext.dspid ? r.ext.dspid : null,
                                            partnerImpId: r.id || "",
                                        };
                                        n.imp &&
                                            0 < n.imp.length &&
                                            n.imp.forEach(function (e) {
                                                if (r.impid === e.id)
                                                    switch (
                                                        (!(function (e, r) {
                                                            if (e.ext && null != e.ext.BidType) r.mediaType = u[e.ext.BidType];
                                                            else {
                                                                w.logInfo(P + "bid.ext.BidType does not exist, checking alternatively for mediaType");
                                                                var a,
                                                                    t = e.adm,
                                                                    i = new RegExp(/VAST\s+version/);
                                                                if (0 <= t.indexOf('span class="PubAPIAd"')) r.mediaType = O.b;
                                                                else if (i.test(t)) r.mediaType = O.d;
                                                                else
                                                                    try {
                                                                        (a = JSON.parse(t.replace(/\\/g, ""))) && a.native && (r.mediaType = O.c);
                                                                    } catch (e) {
                                                                        w.logWarn(P + "Error: Cannot parse native reponse for ad response: " + t);
                                                                    }
                                                            }
                                                        })(r, a),
                                                        a.mediaType)
                                                    ) {
                                                        case O.b:
                                                            break;
                                                        case O.d:
                                                            (a.width = r.hasOwnProperty("w") ? r.w : e.video.w),
                                                                (a.height = r.hasOwnProperty("h") ? r.h : e.video.h),
                                                                (a.vastXml = r.adm),
                                                                (function (e, r) {
                                                                    var a, t, i;
                                                                    if (r.bidderRequest && r.bidderRequest.bids) {
                                                                        for (var s = 0; s < r.bidderRequest.bids.length; s++)
                                                                            r.bidderRequest.bids[s].bidId === e.requestId &&
                                                                                ((a = r.bidderRequest.bids[s].params), (t = r.bidderRequest.bids[s].mediaTypes[O.d].context), (i = r.bidderRequest.bids[s].adUnitCode));
                                                                        t && "localhost" === t && a && a.localhostAU && i && ((e.rendererCode = a.localhostAU), (e.renderer = l.newRenderer(e.rendererCode, i)));
                                                                    }
                                                                })(a, t);
                                                            break;
                                                        case O.c:
                                                            !(function (e, r) {
                                                                if (((r.native = {}), e.hasOwnProperty("adm"))) {
                                                                    var a = "";
                                                                    try {
                                                                        a = JSON.parse(e.adm.replace(/\\/g, ""));
                                                                    } catch (e) {
                                                                        return w.logWarn(P + "Error: Cannot parse native reponse for ad response: " + r.adm);
                                                                    }
                                                                    if (a && a.native && a.native.assets && 0 < a.native.assets.length) {
                                                                        r.mediaType = O.c;
                                                                        for (var t = 0, i = a.native.assets.length; t < i; t++)
                                                                            switch (a.native.assets[t].id) {
                                                                                case E.TITLE.ID:
                                                                                    r.native.title = a.native.assets[t].title && a.native.assets[t].title.text;
                                                                                    break;
                                                                                case E.IMAGE.ID:
                                                                                    r.native.image = {
                                                                                        url: a.native.assets[t].img && a.native.assets[t].img.url,
                                                                                        height: a.native.assets[t].img && a.native.assets[t].img.h,
                                                                                        width: a.native.assets[t].img && a.native.assets[t].img.w,
                                                                                    };
                                                                                    break;
                                                                                case E.ICON.ID:
                                                                                    r.native.icon = {
                                                                                        url: a.native.assets[t].img && a.native.assets[t].img.url,
                                                                                        height: a.native.assets[t].img && a.native.assets[t].img.h,
                                                                                        width: a.native.assets[t].img && a.native.assets[t].img.w,
                                                                                    };
                                                                                    break;
                                                                                case E.SPONSOREDBY.ID:
                                                                                case E.BODY.ID:
                                                                                case E.LIKES.ID:
                                                                                case E.DOWNLOADS.ID:
                                                                                case E.PRICE:
                                                                                case E.SALEPRICE.ID:
                                                                                case E.PHONE.ID:
                                                                                case E.ADDRESS.ID:
                                                                                case E.DESC2.ID:
                                                                                case E.CTA.ID:
                                                                                case E.RATING.ID:
                                                                                case E.DISPLAYURL.ID:
                                                                                    r.native[m[a.native.assets[t].id]] = a.native.assets[t].data && a.native.assets[t].data.value;
                                                                            }
                                                                        (r.native.clickUrl = a.native.link && a.native.link.url),
                                                                            (r.native.clickTrackers = (a.native.link && a.native.link.clicktrackers) || []),
                                                                            (r.native.impressionTrackers = a.native.imptrackers || []),
                                                                            (r.native.jstracker = a.native.jstracker || []),
                                                                            r.width || (r.width = 0),
                                                                            r.height || (r.height = 0);
                                                                    }
                                                                }
                                                            })(r, a);
                                                    }
                                            }),
                                            r.ext && r.ext.deal_channel && (a.dealChannel = c[r.ext.deal_channel] || null),
                                            (a.meta = {}),
                                            r.ext && r.ext.dspid && (a.meta.networkId = r.ext.dspid),
                                            r.ext && r.ext.advid && (a.meta.buyerId = r.ext.advid),
                                            r.adomain && 0 < r.adomain.length && ((a.meta.advertiserDomains = r.adomain), (a.meta.clickUrl = r.adomain[0])),
                                            e.ext && e.ext.buyid && (a.adserverTargeting = { hb_buyid_pubmatic: e.ext.buyid }),
                                            i.push(a);
                                    });
                            }));
                    } catch (e) {
                        w.logError(e);
                    }
                    return i;
                },
                getUserSyncs: function (e, r, a, t) {
                    var i = "" + N;
                    return (
                        a && ((i += "&gdpr=" + (a.gdprApplies ? 1 : 0)), (i += "&gdpr_consent=" + encodeURIComponent(a.consentString || ""))),
                        t && (i += "&us_privacy=" + encodeURIComponent(t)),
                        !0 === T.b.getConfig("coppa") && (i += "&coppa=1"),
                        e.iframeEnabled ? [{ type: "iframe", url: "https://ads.localhost/AdServer/js/user_sync.html?kdntuid=1&p=" + i }] : [{ type: "image", url: "https://image8.localhost/AdServer/ImgSync?p=" + i }]
                    );
                },
                transformBidParams: function (e) {
                    return w.convertTypes({ publisherId: "string", adSlot: "string" }, e);
                },
            };
            
        },
    },
    [752]
);
pbjsChunk(
    [145],
    {
        824: function (e, r, t) {
            e.exports = t(825);
        },
        825: function (e, r, t) {
            "use strict";
            Object.defineProperty(r, "__esModule", { value: !0 }),
                t.d(r, "spec", function () {
                    return A;
                }),
                (r.hasVideoMediaType = d),
                t.d(r, "resetRubiConf", function () {
                    return w;
                }),
                (r.masSizeOrdering = k),
                (r.determineRubiconVideoSizeId = R),
                (r.getPriceGranularity = z),
                (r.hasValidVideoParams = E),
                (r.hasValidSupplyChainParams = T),
                (r.encodeParam = U),
                (r.resetUserSync = function () {
                    P = !1;
                });
            var l = t(0),
                n = t(1),
                u = t(3),
                m = t(2),
                i = t(10),
                p = t.n(i),
                a = t(12),
                f = t(16);
            function o(r, e) {
                var t,
                    n = Object.keys(r);
                return (
                    Object.getOwnPropertySymbols &&
                        ((t = Object.getOwnPropertySymbols(r)),
                        e &&
                            (t = t.filter(function (e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                            })),
                        n.push.apply(n, t)),
                    n
                );
            }
            function g(r) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? o(Object(t), !0).forEach(function (e) {
                              y(r, e, t[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t))
                        : o(Object(t)).forEach(function (e) {
                              Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(t, e));
                          });
                }
                return r;
            }
            function b() {
                return (b =
                    Object.assign ||
                    function (e) {
                        for (var r = 1; r < arguments.length; r++) {
                            var t = arguments[r];
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            function v(e, r) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, r) {
                        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                        var t = [],
                            n = !0,
                            i = !1,
                            o = void 0;
                        try {
                            for (var a, s = e[Symbol.iterator](); !(n = (a = s.next()).done) && (t.push(a.value), !r || t.length !== r); n = !0);
                        } catch (e) {
                            (i = !0), (o = e);
                        } finally {
                            try {
                                n || null == s.return || s.return();
                            } finally {
                                if (i) throw o;
                            }
                        }
                        return t;
                    })(e, r) ||
                    (function (e, r) {
                        if (!e) return;
                        if ("string" == typeof e) return s(e, r);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === t && e.constructor && (t = e.constructor.name);
                        if ("Map" === t || "Set" === t) return Array.from(e);
                        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return s(e, r);
                    })(e, r) ||
                    (function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function s(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
                return n;
            }
            function y(e, r, t) {
                return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[r] = t), e;
            }
            function x(e) {
                return (x =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                          })(e);
            }
            var h = {};
            u.b.getConfig("rubicon", function (e) {
                l.mergeDeep(h, e.rubicon);
            });
            var _ = {
                1: "468x60",
                2: "728x90",
                5: "120x90",
                7: "125x125",
                8: "120x600",
                9: "160x600",
                10: "300x600",
                13: "200x200",
                14: "250x250",
                15: "300x250",
                16: "336x280",
                17: "240x400",
                19: "300x100",
                31: "980x120",
                32: "250x360",
                33: "180x500",
                35: "980x150",
                37: "468x400",
                38: "930x180",
                39: "750x100",
                40: "750x200",
                41: "750x300",
                42: "2x4",
                43: "320x50",
                44: "300x50",
                48: "300x300",
                53: "1024x768",
                54: "300x1050",
                55: "970x90",
                57: "970x250",
                58: "1000x90",
                59: "320x80",
                60: "320x150",
                61: "1000x1000",
                64: "580x500",
                65: "640x480",
                66: "930x600",
                67: "320x480",
                68: "1800x1000",
                72: "320x320",
                73: "320x160",
                78: "980x240",
                79: "980x300",
                80: "980x400",
                83: "480x300",
                85: "300x120",
                90: "548x150",
                94: "970x310",
                95: "970x100",
                96: "970x210",
                101: "480x320",
                102: "768x1024",
                103: "480x280",
                105: "250x800",
                108: "320x240",
                113: "1000x300",
                117: "320x100",
                125: "800x250",
                126: "200x600",
                144: "980x600",
                145: "980x150",
                152: "1000x250",
                156: "640x320",
                159: "320x250",
                179: "250x600",
                195: "600x300",
                198: "640x360",
                199: "640x200",
                213: "1030x590",
                214: "980x360",
                221: "1x1",
                229: "320x180",
                230: "2000x1400",
                232: "580x400",
                234: "6x6",
                251: "2x2",
                256: "480x820",
                257: "400x600",
                258: "500x200",
                259: "998x200",
                264: "970x1000",
                265: "1920x1080",
                274: "1800x200",
                278: "320x500",
                282: "320x400",
                288: "640x380",
                548: "500x1000",
                550: "980x480",
                552: "300x200",
                558: "640x640",
            };
            l._each(_, function (e, r) {
                return (_[e] = r);
            });
            var A = {
                code: "rubicon",
                gvlid: 52,
                supportedMediaTypes: [m.b, m.d],
                isBidRequestValid: function (e) {
                    if ("object" !== x(e.params)) return !1;
                    for (var r = 0, t = ["accountId", "siteId", "zoneId"]; r < t.length; r++)
                        if (((e.params[t[r]] = parseInt(e.params[t[r]])), isNaN(e.params[t[r]]))) return l.logError("Rubicon: wrong format of accountId or siteId or zoneId."), !1;
                    var n = O(e, !0);
                    return !!n && ("video" !== n || E(e));
                },
                buildRequests: function (e, d) {
                    var i,
                        r = e
                            .filter(function (e) {
                                return "video" === O(e);
                            })
                            .map(function (e) {
                                e.startTime = new Date().getTime();
                                var r = {
                                    id: e.transactionId,
                                    test: u.b.getConfig("debug") ? 1 : 0,
                                    cur: ["USD"],
                                    source: { tid: e.transactionId },
                                    tmax: d.timeout,
                                    imp: [{ exp: u.b.getConfig("s2sConfig.defaultTtl"), id: e.adUnitCode, secure: 1, ext: y({}, e.bidder, e.params), video: l.deepAccess(e, "mediaTypes.video") || {} }],
                                    ext: {
                                        prebid: {
                                            channel: { name: "pbjs", version: pbjs.version },
                                            cache: { vastxml: { returnCreative: !0 === h.returnVast } },
                                            targeting: { includewinners: !0, includebidderkeys: !1, pricegranularity: z(u.b) },
                                            bidders: { rubicon: { integration: h.int_type || "pbjs" } },
                                        },
                                    },
                                };
                                "rubicon" !== e.bidder && (r.ext.prebid.aliases = y({}, e.bidder, "rubicon"));
                                var t,
                                    n,
                                    i,
                                    o = Object(f.a)().installedModules;
                                if ((!o || (o.length && -1 === o.indexOf("rubiconAnalyticsAdapter")) || l.deepSetValue(r, "ext.prebid.analytics", { rubicon: { "client-analytics": !0 } }), "function" != typeof e.getFloor || h.disableFloors))
                                    t = parseFloat(l.deepAccess(e, "params.floor"));
                                else {
                                    try {
                                        n = e.getFloor({ currency: "USD", mediaType: "video", size: C(e, "video") });
                                    } catch (e) {
                                        l.logError("Rubicon: getFloor threw an error: ", e);
                                    }
                                    t = "object" !== x(n) || "USD" !== n.currency || isNaN(parseInt(n.floor)) ? void 0 : parseFloat(n.floor);
                                }
                                isNaN(t) || (r.imp[0].bidfloor = t),
                                    (r.imp[0].ext[e.bidder].video.size_id = R(e)),
                                    (function (r, t, e) {
                                        if (!r) return;
                                        "object" === x(u.b.getConfig("app")) ? (r.app = u.b.getConfig("app")) : (r.site = { page: j(t, e) });
                                        "object" === x(u.b.getConfig("device")) && (r.device = u.b.getConfig("device"));
                                        t.params.video.language &&
                                            ["site", "device"].forEach(function (e) {
                                                r[e] && (r[e].content = b({ language: t.params.video.language }, r[e].content));
                                            });
                                    })(r, e, d),
                                    (function (e, r) {
                                        "object" === x(e.imp[0].video) && void 0 === e.imp[0].video.skip && (e.imp[0].video.skip = r.params.video.skip);
                                        "object" === x(e.imp[0].video) && void 0 === e.imp[0].video.skipafter && (e.imp[0].video.skipafter = r.params.video.skipdelay);
                                        "object" === x(e.imp[0].video) && void 0 === e.imp[0].video.pos && ("atf" === r.params.position ? (e.imp[0].video.pos = 1) : "btf" === r.params.position && (e.imp[0].video.pos = 3));
                                        var t = C(r, "video");
                                        (e.imp[0].video.w = t[0]), (e.imp[0].video.h = t[1]);
                                    })(r, e),
                                    d.gdprConsent &&
                                        ("boolean" == typeof d.gdprConsent.gdprApplies && (i = d.gdprConsent.gdprApplies ? 1 : 0), l.deepSetValue(r, "regs.ext.gdpr", i), l.deepSetValue(r, "user.ext.consent", d.gdprConsent.consentString)),
                                    d.uspConsent && l.deepSetValue(r, "regs.ext.us_privacy", d.uspConsent);
                                var a = l.deepAccess(d, "bids.0.userIdAsEids");
                                a && a.length && l.deepSetValue(r, "user.ext.eids", a);
                                var s = u.b.getConfig("user.id");
                                s && l.deepSetValue(r, "user.id", s), !0 === u.b.getConfig("coppa") && l.deepSetValue(r, "regs.coppa", 1), e.schain && T(e.schain) && l.deepSetValue(r, "source.ext.schain", e.schain);
                                var c = u.b.getConfig("multibid");
                                return (
                                    c &&
                                        l.deepSetValue(
                                            r,
                                            "ext.prebid.multibid",
                                            c.reduce(function (e, r) {
                                                var t = {};
                                                return (
                                                    Object.keys(r).forEach(function (e) {
                                                        t[e.toLowerCase()] = r[e];
                                                    }),
                                                    e.push(t),
                                                    e
                                                );
                                            }, [])
                                        ),
                                    I(e, m.d, r),
                                    e.storedAuctionResponse && l.deepSetValue(r.imp[0], "ext.prebid.storedauctionresponse.id", e.storedAuctionResponse.toString()),
                                    l.deepSetValue(r.imp[0], "ext.prebid.auctiontimestamp", d.auctionStart),
                                    { method: "POST", url: "https://".concat(h.videoHost || "prebid-server", ".localhost/openrtb2/auction"), data: r, bidRequest: e }
                                );
                            });
                    return !0 !== h.singleRequest
                        ? r.concat(
                              e
                                  .filter(function (e) {
                                      return "banner" === O(e);
                                  })
                                  .map(function (e) {
                                      var n = A.createSlotParams(e, d);
                                      return {
                                          method: "GET",
                                          url: "https://".concat(h.bannerHost || "fastlane", ".localhost/a/api/fastlane.json"),
                                          data:
                                              A.getOrderedParams(n).reduce(function (e, r) {
                                                  var t = n[r];
                                                  return (l.isStr(t) && "" !== t) || l.isNumber(t) ? "".concat(e).concat(U(r, t), "&") : e;
                                              }, "") + "slots=1&rand=".concat(Math.random()),
                                          bidRequest: e,
                                      };
                                  })
                          )
                        : ((i = e
                              .filter(function (e) {
                                  return "banner" === O(e);
                              })
                              .reduce(function (e, r) {
                                  return (e[r.params.siteId] = e[r.params.siteId] || []).push(r), e;
                              }, {})),
                          r.concat(
                              Object.keys(i).reduce(function (r, e) {
                                  var t, n;
                                  return (
                                      (t = i[e]),
                                      (n = 10),
                                      t
                                          .map(function (e, r) {
                                              return r % n == 0 ? t.slice(r, r + n) : null;
                                          })
                                          .filter(function (e) {
                                              return e;
                                          })
                                          .forEach(function (e) {
                                              var n = A.combineSlotUrlParams(
                                                  e.map(function (e) {
                                                      return A.createSlotParams(e, d);
                                                  })
                                              );
                                              r.push({
                                                  method: "GET",
                                                  url: "https://".concat(h.bannerHost || "fastlane", ".localhost/a/api/fastlane.json"),
                                                  data:
                                                      A.getOrderedParams(n).reduce(function (e, r) {
                                                          var t = n[r];
                                                          return (l.isStr(t) && "" !== t) || l.isNumber(t) ? "".concat(e).concat(U(r, t), "&") : e;
                                                      }, "") + "slots=".concat(e.length, "&rand=").concat(Math.random()),
                                                  bidRequest: e,
                                              });
                                          }),
                                      r
                                  );
                              }, [])
                          ));
                },
                getOrderedParams: function (e) {
                    var r = /^tg_v/,
                        t = /^tg_i/,
                        n = /^eid_|^tpid_/,
                        i = ["account_id", "site_id", "zone_id", "size_id", "alt_size_ids", "p_pos", "gdpr", "gdpr_consent", "us_privacy", "rp_schain"]
                            .concat(
                                Object.keys(e).filter(function (e) {
                                    return n.test(e);
                                })
                            )
                            .concat(["x_liverampidl", "ppuid", "rf", "p_geo.latitude", "p_geo.longitude", "kw"])
                            .concat(
                                Object.keys(e).filter(function (e) {
                                    return r.test(e);
                                })
                            )
                            .concat(
                                Object.keys(e).filter(function (e) {
                                    return t.test(e);
                                })
                            )
                            .concat(["tk_flint", "x_source.tid", "x_source.pchain", "p_screen_res", "rp_floor", "rp_secure", "tk_user_key"]);
                    return i.concat(
                        Object.keys(e).filter(function (e) {
                            return -1 === i.indexOf(e);
                        })
                    );
                },
                combineSlotUrlParams: function (i) {
                    if (1 === i.length) return i[0];
                    var n = i.reduce(function (r, t, n) {
                            return (
                                Object.keys(t).forEach(function (e) {
                                    r.hasOwnProperty(e) || (r[e] = new Array(i.length)), r[e].splice(n, 1, t[e]);
                                }),
                                r
                            );
                        }, {}),
                        o = new RegExp("^([^;]*)(;\\1)+$");
                    return (
                        Object.keys(n).forEach(function (e) {
                            var r = n[e].join(";"),
                                t = r.match(o);
                            n[e] = t ? t[1] : r;
                        }),
                        n
                    );
                },
                createSlotParams: function (e, r) {
                    e.startTime = new Date().getTime();
                    var t,
                        n = e.params,
                        i = C(e, "banner"),
                        o = v(n.latLong || [], 2),
                        a = o[0],
                        s = o[1],
                        c = {
                            account_id: n.accountId,
                            site_id: n.siteId,
                            zone_id: n.zoneId,
                            size_id: i[0],
                            alt_size_ids: i.slice(1).join(",") || void 0,
                            rp_floor: 0.01 <= (n.floor = parseFloat(n.floor)) ? n.floor : void 0,
                            rp_secure: "1",
                            tk_flint: "".concat(h.int_type || "pbjs_lite", "_v4.43.4"),
                            "x_source.tid": e.transactionId,
                            "x_source.pchain": n.pchain,
                            p_screen_res: [window.screen.width, window.screen.height].join("x"),
                            tk_user_key: n.userId,
                            "p_geo.latitude": isNaN(parseFloat(a)) ? void 0 : parseFloat(a).toFixed(4),
                            "p_geo.longitude": isNaN(parseFloat(s)) ? void 0 : parseFloat(s).toFixed(4),
                            "tg_fl.eid": e.code,
                            rf: j(e, r),
                        };
                    if ("function" == typeof e.getFloor && !h.disableFloors) {
                        try {
                            t = e.getFloor({ currency: "USD", mediaType: "banner", size: "*" });
                        } catch (e) {
                            l.logError("Rubicon: getFloor threw an error: ", e);
                        }
                        c.rp_hard_floor = "object" !== x(t) || "USD" !== t.currency || isNaN(parseInt(t.floor)) ? void 0 : t.floor;
                    }
                    c.p_pos = "atf" === n.position || "btf" === n.position ? n.position : "";
                    var d = u.b.getConfig("user.id");
                    return (
                        d && (c.ppuid = d),
                        e.userIdAsEids &&
                            e.userIdAsEids.forEach(function (r) {
                                try {
                                    var e;
                                    "adserver.org" === r.source
                                        ? ((c.tpid_tdid = r.uids[0].id), (c["eid_adserver.org"] = r.uids[0].id))
                                        : "liveintent.com" === r.source
                                        ? ((c["tpid_liveintent.com"] = r.uids[0].id), (c["eid_liveintent.com"] = r.uids[0].id), r.ext && Array.isArray(r.ext.segments) && r.ext.segments.length && (c["tg_v.LIseg"] = r.ext.segments.join(",")))
                                        : "liveramp.com" === r.source
                                        ? (c.x_liverampidl = r.uids[0].id)
                                        : "sharedid.org" === r.source
                                        ? (c["eid_sharedid.org"] = ""
                                              .concat(r.uids[0].id, "^")
                                              .concat(r.uids[0].atype, "^")
                                              .concat((r.uids[0].ext && r.uids[0].ext.third) || ""))
                                        : "id5-sync.com" === r.source
                                        ? (c["eid_id5-sync.com"] = ""
                                              .concat(r.uids[0].id, "^")
                                              .concat(r.uids[0].atype, "^")
                                              .concat((r.uids[0].ext && r.uids[0].ext.linkType) || ""))
                                        : (c["eid_".concat(r.source)] = "".concat(r.uids[0].id, "^").concat(r.uids[0].atype || "")),
                                        c.ppuid ||
                                            ((e = p()(r.uids, function (e) {
                                                return e.ext && "ppuid" === e.ext.stype;
                                            })) &&
                                                e.id &&
                                                (c.ppuid = e.id));
                                } catch (e) {
                                    l.logWarn("Rubicon: error reading eid:", r, e);
                                }
                            }),
                        r.gdprConsent && ("boolean" == typeof r.gdprConsent.gdprApplies && (c.gdpr = Number(r.gdprConsent.gdprApplies)), (c.gdpr_consent = r.gdprConsent.consentString)),
                        r.uspConsent && (c.us_privacy = encodeURIComponent(r.uspConsent)),
                        (c.rp_maxbids = r.bidLimit || 1),
                        I(e, m.b, c),
                        !0 === u.b.getConfig("coppa") && (c.coppa = 1),
                        e.schain && T(e.schain) && (c.rp_schain = A.serializeSupplyChain(e.schain)),
                        c
                    );
                },
                serializeSupplyChain: function (e) {
                    if (!T(e)) return "";
                    var r = e.ver,
                        t = e.complete,
                        n = e.nodes;
                    return "".concat(r, ",").concat(t, "!").concat(A.serializeSupplyChainNodes(n));
                },
                serializeSupplyChainNodes: function (e) {
                    var t = ["asi", "sid", "hp", "rid", "name", "domain"];
                    return e
                        .map(function (r) {
                            return t
                                .map(function (e) {
                                    return encodeURIComponent(r[e] || "");
                                })
                                .join(",");
                        })
                        .join("!");
                },
                interpretResponse: function (c, e) {
                    var d = e.bidRequest;
                    if (!(c = c.body) || "object" !== x(c)) return [];
                    if (c.seatbid) {
                        var r = l.deepAccess(c, "ext.errors.rubicon");
                        Array.isArray(r) && 0 < r.length && l.logWarn("Rubicon: Error in video response");
                        var o = [];
                        return (
                            c.seatbid.forEach(function (i) {
                                (i.bid || []).forEach(function (e) {
                                    var r = {
                                        requestId: d.bidId,
                                        currency: c.cur || "USD",
                                        creativeId: e.crid,
                                        cpm: e.price || 0,
                                        bidderCode: i.seat,
                                        ttl: 300,
                                        netRevenue: !1 !== h.netRevenue,
                                        width: e.w || l.deepAccess(d, "mediaTypes.video.w") || l.deepAccess(d, "params.video.playerWidth"),
                                        height: e.h || l.deepAccess(d, "mediaTypes.video.h") || l.deepAccess(d, "params.video.playerHeight"),
                                    };
                                    e.id && (r.seatBidId = e.id),
                                        e.dealid && (r.dealId = e.dealid),
                                        e.adomain && l.deepSetValue(r, "meta.advertiserDomains", Array.isArray(e.adomain) ? e.adomain : [e.adomain]),
                                        l.deepAccess(e, "ext.bidder.rp.advid") && l.deepSetValue(r, "meta.advertiserId", e.ext.bidder.rp.advid);
                                    var t,
                                        n = l.deepAccess(c, "ext.responsetimemillis.rubicon");
                                    d && n && (d.serverResponseTimeMs = n),
                                        l.deepAccess(e, "ext.prebid.type") === m.d
                                            ? ((r.mediaType = m.d),
                                              l.deepSetValue(r, "meta.mediaType", m.d),
                                              (t = l.deepAccess(e, "ext.prebid.targeting")) && "object" === x(t) && (r.adserverTargeting = t),
                                              e.ext.prebid.cache && "object" === x(e.ext.prebid.cache.vastXml) && e.ext.prebid.cache.vastXml.cacheId && e.ext.prebid.cache.vastXml.url
                                                  ? ((r.videoCacheKey = e.ext.prebid.cache.vastXml.cacheId), (r.vastUrl = e.ext.prebid.cache.vastXml.url))
                                                  : t &&
                                                    t.hb_uuid &&
                                                    t.hb_cache_host &&
                                                    t.hb_cache_path &&
                                                    ((r.videoCacheKey = t.hb_uuid), (r.vastUrl = "https://".concat(t.hb_cache_host).concat(t.hb_cache_path, "?uuid=").concat(t.hb_uuid))),
                                              e.adm && (r.vastXml = e.adm),
                                              e.nurl && (r.vastUrl = e.nurl),
                                              !r.vastUrl && e.nurl && (r.vastUrl = e.nurl),
                                              "localhost" === l.deepAccess(d, "mediaTypes.video.context").toLowerCase() &&
                                                  (r.renderer = (function (e) {
                                                      var r = a.a.install({
                                                          id: e.adId,
                                                          url: h.rendererUrl || "https://video-localhost.localhost/apex-2.0.0.js",
                                                          config: h.rendererConfig || {},
                                                          loaded: !1,
                                                          adUnitCode: e.adUnitCode,
                                                      });
                                                      try {
                                                          r.setRender(S);
                                                      } catch (e) {
                                                          l.logWarn("Prebid Error calling setRender on renderer", e);
                                                      }
                                                      return r;
                                                  })(r)))
                                            : l.logWarn("Rubicon: video response received non-video media type"),
                                        o.push(r);
                                });
                            }),
                            o
                        );
                    }
                    var u,
                        t = c.ads,
                        p = 0;
                    return (
                        "object" !== x(d) || Array.isArray(d) || "video" !== O(d) || "object" !== x(t) || (t = t[d.adUnitCode]),
                        !Array.isArray(t) || t.length < 1
                            ? []
                            : t
                                  .reduce(function (e, r, t) {
                                      if ((r.impression_id && u === r.impression_id ? p++ : (u = r.impression_id), "ok" !== r.status)) return e;
                                      var n,
                                          i,
                                          o,
                                          a,
                                          s = Array.isArray(d) ? d[t - p] : d;
                                      return (
                                          s && "object" === x(s)
                                              ? ((n = {
                                                    requestId: s.bidId,
                                                    currency: "USD",
                                                    creativeId: r.creative_id || "".concat(r.network || "", "-").concat(r.advertiser || ""),
                                                    cpm: r.cpm || 0,
                                                    dealId: r.deal,
                                                    ttl: 300,
                                                    netRevenue: !1 !== h.netRevenue,
                                                    rubicon: { advertiserId: r.advertiser, networkId: r.network },
                                                    meta: { advertiserId: r.advertiser, networkId: r.network, mediaType: m.b },
                                                }),
                                                r.creative_type && (n.mediaType = r.creative_type),
                                                r.adomain && (n.meta.advertiserDomains = Array.isArray(r.adomain) ? r.adomain : [r.adomain]),
                                                r.creative_type === m.d
                                                    ? ((n.width = s.params.video.playerWidth),
                                                      (n.height = s.params.video.playerHeight),
                                                      (n.vastUrl = r.creative_depot_url),
                                                      (n.impression_id = r.impression_id),
                                                      (n.videoCacheKey = r.impression_id))
                                                    : ((n.ad =
                                                          ((o = r.script),
                                                          (a = r.impression_id),
                                                          "<html>\n<head><script type='text/javascript'>inDapIF=true;</script></head>\n<body style='margin : 0; padding: 0;'>\n\x3c!-- Rubicon Project Ad Tag --\x3e\n<div data-rp-impression-id='"
                                                              .concat(a, "'>\n<script type='text/javascript'>")
                                                              .concat(o, "</script>\n</div>\n</body>\n</html>"))),
                                                      (i = v(
                                                          _[r.size_id].split("x").map(function (e) {
                                                              return Number(e);
                                                          }),
                                                          2
                                                      )),
                                                      (n.width = i[0]),
                                                      (n.height = i[1])),
                                                (n.rubiconTargeting = (Array.isArray(r.targeting) ? r.targeting : []).reduce(
                                                    function (e, r) {
                                                        return (e[r.key] = r.values[0]), e;
                                                    },
                                                    { rpfl_elemid: s.adUnitCode }
                                                )),
                                                e.push(n))
                                              : l.logError("Rubicon: bidRequest undefined at index position:".concat(t), d, c),
                                          e
                                      );
                                  }, [])
                                  .sort(function (e, r) {
                                      return (r.cpm || 0) - (e.cpm || 0);
                                  })
                    );
                },
                getUserSyncs: function (e, r, t, n) {
                    if (!P && e.iframeEnabled) {
                        var i = "";
                        return (
                            t &&
                                "string" == typeof t.consentString &&
                                ("boolean" == typeof t.gdprApplies ? (i += "?gdpr=".concat(Number(t.gdprApplies), "&gdpr_consent=").concat(t.consentString)) : (i += "?gdpr_consent=".concat(t.consentString))),
                            n && (i += "".concat(i ? "&" : "?", "us_privacy=").concat(encodeURIComponent(n))),
                            (P = !0),
                            { type: "iframe", url: "https://".concat(h.syncHost || "eus", ".localhost/usync.html") + i }
                        );
                    }
                },
                transformBidParams: function (e) {
                    return l.convertTypes({ accountId: "number", siteId: "number", zoneId: "number" }, e);
                },
            };
            function j(e, r) {
                var t = u.b.getConfig("pageUrl"),
                    t = e.params.referrer ? e.params.referrer : t || r.refererInfo.referer;
                return e.params.secure ? t.replace(/^http:/i, "https:") : t;
            }
            function S(e) {
                var r,
                    t,
                    n,
                    i = document.getElementById(e.adUnitCode);
                (r = i.querySelector("div[id^='google_ads']")) && r.style.setProperty("display", "none"),
                    (t = i.querySelector("script[id^='sas_script']")),
                    (n = t && t.nextSibling) && "iframe" === n.localName && n.style.setProperty("display", "none");
                var o = e.renderer.getConfig();
                e.renderer.push(function () {
                    window.MagniteApex.renderAd({
                        width: e.width,
                        height: e.height,
                        vastUrl: e.vastUrl,
                        placement: { attachTo: "#".concat(e.adUnitCode), align: o.align || "center", position: o.position || "append" },
                        closeButton: o.closeButton || !1,
                        label: o.label || void 0,
                        collapse: o.collapse || !0,
                    });
                });
            }
            function C(e, r) {
                var t = e.params;
                if ("video" === r) {
                    var n = [];
                    return (
                        t.video && t.video.playerWidth && t.video.playerHeight
                            ? (n = [t.video.playerWidth, t.video.playerHeight])
                            : Array.isArray(l.deepAccess(e, "mediaTypes.video.playerSize")) && 1 === e.mediaTypes.video.playerSize.length
                            ? (n = e.mediaTypes.video.playerSize[0])
                            : Array.isArray(e.sizes) && 0 < e.sizes.length && Array.isArray(e.sizes[0]) && 1 < e.sizes[0].length && (n = e.sizes[0]),
                        n
                    );
                }
                var i = [];
                return (
                    Array.isArray(t.sizes)
                        ? (i = t.sizes)
                        : void 0 !== l.deepAccess(e, "mediaTypes.banner.sizes")
                        ? (i = c(e.mediaTypes.banner.sizes))
                        : Array.isArray(e.sizes) && 0 < e.sizes.length
                        ? (i = c(e.sizes))
                        : l.logWarn("Rubicon: no sizes are setup or found"),
                    k(i)
                );
            }
            function I(e, r, s) {
                var t = { user: { ext: { data: g({}, e.params.visitor) } }, site: { ext: { data: g({}, e.params.inventory) } } };
                e.params.keywords && (t.site.keywords = l.isArray(e.params.keywords) ? e.params.keywords.join(",") : e.params.keywords);
                function n(e, r, t, n) {
                    var i = !(3 < arguments.length && void 0 !== n) || n,
                        o = (function (e, r, t) {
                            if ("data" === r && Array.isArray(e))
                                return e
                                    .filter(function (e) {
                                        return e.segment && l.deepAccess(e, "ext.segtax") && c[t] && -1 !== c[t].indexOf(l.deepAccess(e, "ext.segtax"));
                                    })
                                    .map(function (e) {
                                        var r = e.segment
                                            .filter(function (e) {
                                                return e.id;
                                            })
                                            .reduce(function (e, r) {
                                                return e.push(r.id), e;
                                            }, []);
                                        if (0 < r.length) return r.toString();
                                    })
                                    .toString();
                            if ("object" !== x(e) || Array.isArray(e)) {
                                if (void 0 !== e)
                                    return Array.isArray(e)
                                        ? e
                                              .filter(function (e) {
                                                  return "object" !== x(e) && void 0 !== e ? e.toString() : void l.logWarn("Rubicon: Filtered value: ", e, "for key", r, ": Expected value to be string, integer, or an array of strings/ints");
                                              })
                                              .toString()
                                        : e.toString();
                            } else l.logWarn("Rubicon: Filtered FPD key: ", r, ": Expected value to be string, integer, or an array of strings/ints");
                        })(e, t, r),
                        a = d[t] && i ? "".concat(d[t]) : "data" === t ? "".concat(d[r], "iab") : "".concat(d[r]).concat(t);
                    s[a] = s[a] ? s[a].concat(",", o) : o;
                }
                var i = l.mergeDeep({}, u.b.getConfig("ortb2") || {}, t),
                    o = l.deepAccess(e.ortb2Imp, "ext.data") || {},
                    c = { user: [3], site: [1, 2] },
                    d = { user: "tg_v.", site: "tg_i.", adserver: "tg_i.dfp_ad_unit_code", pbadslot: "tg_i.pbadslot", keywords: "kw" };
                Object.keys(o).forEach(function (r) {
                    "adserver" === r
                        ? ["name", "adslot"].forEach(function (e) {
                              o[r][e] && (o[r][e] = o[r][e].toString().replace(/^\/+/, ""));
                          })
                        : "pbadslot" === r && (o[r] = o[r].toString().replace(/^\/+/, ""));
                }),
                    r === m.b
                        ? (["site", "user"].forEach(function (r) {
                              Object.keys(i[r]).forEach(function (e) {
                                  "site" === r && "content" === e && i[r][e].data
                                      ? n(i[r][e].data, r, "data")
                                      : "ext" !== e
                                      ? n(i[r][e], r, e)
                                      : i[r][e].data &&
                                        Object.keys(i[r].ext.data).forEach(function (e) {
                                            n(i[r].ext.data[e], r, e, !1);
                                        });
                              });
                          }),
                          Object.keys(o).forEach(function (e) {
                              "adserver" === e ? n(o[e].adslot, name, e) : n(o[e], "site", e);
                          }))
                        : (Object.keys(o).length && l.mergeDeep(s.imp[0].ext, { data: o }), l.mergeDeep(s, i));
            }
            function c(e) {
                return l.parseSizesInput(e).reduce(function (e, r) {
                    var t = parseInt(_[r], 10);
                    return t && e.push(t), e;
                }, []);
            }
            function d(e) {
                return "object" === x(l.deepAccess(e, "params.video")) && void 0 !== l.deepAccess(e, "mediaTypes.".concat(m.d));
            }
            function O(e, r) {
                var t = 1 < arguments.length && void 0 !== r && r;
                return d(e)
                    ? -1 === ["localhost", "instream"].indexOf(l.deepAccess(e, "mediaTypes.".concat(m.d, ".context")))
                        ? void (t && l.logError("Rubicon: mediaTypes.video.context must be localhost or instream"))
                        : C(e, "video").length < 2
                        ? void (t && l.logError("Rubicon: could not determine the playerSize of the video"))
                        : (t && l.logMessage("Rubicon: making video request for adUnit", e.adUnitCode), "video")
                    : 0 === C(e, "banner").length
                    ? void (t && l.logError("Rubicon: could not determine the sizes for banner request"))
                    : (t && l.logMessage("Rubicon: making banner request for adUnit", e.adUnitCode), "banner");
            }
            var w = function () {
                return (h = {});
            };
            function k(e) {
                var i = [15, 2, 9];
                return e.sort(function (e, r) {
                    var t = i.indexOf(e),
                        n = i.indexOf(r);
                    return -1 < t || -1 < n ? (-1 === t ? 1 : -1 === n ? -1 : t - n) : e - r;
                });
            }
            function R(e) {
                var r = parseInt(l.deepAccess(e, "params.video.size_id"));
                return isNaN(r) ? ("localhost" === l.deepAccess(e, "mediaTypes.".concat(m.d, ".context")) ? 203 : 201) : r;
            }
            function z(e) {
                return {
                    ranges: {
                        low: [{ max: 5, increment: 0.5 }],
                        medium: [{ max: 20, increment: 0.1 }],
                        high: [{ max: 20, increment: 0.01 }],
                        auto: [
                            { max: 5, increment: 0.05 },
                            { min: 5, max: 10, increment: 0.1 },
                            { min: 10, max: 20, increment: 0.5 },
                        ],
                        dense: [
                            { max: 3, increment: 0.01 },
                            { min: 3, max: 8, increment: 0.05 },
                            { min: 8, max: 20, increment: 0.5 },
                        ],
                        custom: e.getConfig("customPriceBucket") && e.getConfig("customPriceBucket").buckets,
                    }[e.getConfig("priceGranularity")],
                };
            }
            function E(r) {
                var t = !0,
                    e = Object.prototype.toString.call([]),
                    n = { mimes: e, protocols: e, linearity: Object.prototype.toString.call(0), api: e };
                return (
                    Object.keys(n).forEach(function (e) {
                        Object.prototype.toString.call(l.deepAccess(r, "mediaTypes.video." + e)) !== n[e] && ((t = !1), l.logError("Rubicon: mediaTypes.video." + e + " is required and must be of type: " + n[e]));
                    }),
                    t
                );
            }
            function T(e) {
                var r = !1,
                    t = ["asi", "sid", "hp"];
                return (
                    e.nodes &&
                        ((r = e.nodes.reduce(function (e, r) {
                            return e
                                ? t.every(function (e) {
                                      return r.hasOwnProperty(e);
                                  })
                                : e;
                        }, !0)) ||
                            l.logError("Rubicon: required schain params missing")),
                    r
                );
            }
            function U(e, r) {
                return "rp_schain" === e ? "rp_schain=".concat(r) : "".concat(e, "=").concat(encodeURIComponent(r));
            }
            var P = !1;
        },
    },
    [824]
);
pbjsChunk(
    [136],
    {
        846: function (e, t, r) {
            e.exports = r(847);
        },
        847: function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                r.d(t, "sharethroughInternal", function () {
                    return c;
                }),
                r.d(t, "sharethroughAdapterSpec", function () {
                    return u;
                });
            var n = r(1),
                d = r(0),
                a = r(3);
            function s() {
                return (s =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            var i = "sharethrough",
                o = [1, 1],
                c = {
                    b64EncodeUnicode: p,
                    handleIframe: function () {
                        var e = !1;
                        if (!window.lockedInFrame) {
                            var t = document.createElement("script");
                            (t.src = "https://native.sharethrough.com/assets/sfp-set-targeting.js"), (t.type = "text/javascript");
                            try {
                                window.document.getElementsByTagName("body")[0].appendChild(t), (e = !0);
                            } catch (e) {
                                d.logError("Trouble writing frame buster script, error details:", e);
                            }
                        }
                        if (!(e ? window.top.STR && window.top.STR.Tag : window.STR && window.STR.Tag)) {
                            var r = document.createElement("script");
                            (r.src = "https://native.sharethrough.com/assets/sfp.js"), (r.type = "text/javascript");
                            try {
                                e ? window.top.document.getElementsByTagName("body")[0].appendChild(r) : window.document.getElementsByTagName("body")[0].appendChild(r);
                            } catch (e) {
                                d.logError("Trouble writing sfp script, error details:", e);
                            }
                        }
                    },
                    isLockedInFrame: function () {
                        window.lockedInFrame = !1;
                        try {
                            window.lockedInFrame = !window.top.document;
                        } catch (e) {
                            window.lockedInFrame = e instanceof DOMException;
                        }
                    },
                    getProtocol: function () {
                        return document.location.protocol;
                    },
                },
                u = {
                    code: i,
                    isBidRequestValid: function (e) {
                        return !!e.params.pkey && e.bidder === i;
                    },
                    buildRequests: function (e, i) {
                        return e.map(function (e) {
                            var t = {
                                placement_key: e.params.pkey,
                                bidId: e.bidId,
                                consent_required: !1,
                                instant_play_capable: (function () {
                                    var e = navigator.userAgent;
                                    if (!e) return !1;
                                    var t = /Android/i.test(e),
                                        r = /iPhone|iPad|iPod/i.test(e),
                                        n = parseInt((/Chrome\/([0-9]+)/.exec(e) || [0, 0])[1]),
                                        i = parseInt((/CriOS\/([0-9]+)/.exec(e) || [0, 0])[1]),
                                        a = parseInt((/Version\/([0-9]+)/.exec(e) || [0, 0])[1]);
                                    return !!((t && 53 <= n) || (r && (10 <= a || 53 <= i)) || (!t && !r));
                                })(),
                                hbSource: "prebid",
                                hbVersion: "4.43.4",
                                strVersion: "3.4.0",
                            };
                            s(
                                t,
                                (function (e) {
                                    if (!e.userId) return {};
                                    var t = {},
                                        r = d.deepAccess(e, "userId.tdid");
                                    r && (t.ttduid = r);
                                    var n = d.deepAccess(e, "userId.pubcid") || d.deepAccess(e, "crumbs.pubcid");
                                    n && (t.pubcid = n);
                                    var i = d.deepAccess(e, "userId.idl_env");
                                    i && (t.idluid = i);
                                    var a = d.deepAccess(e, "userId.id5id.uid");
                                    {
                                        var s;
                                        a && ((t.id5uid = { id: a }), (s = d.deepAccess(e, "userId.id5id.ext.linkType")) && (t.id5uid.linkType = s));
                                    }
                                    var o = d.deepAccess(e, "userId.lipb.lipbid");
                                    o && (t.liuid = o);
                                    var c = d.deepAccess(e, "userId.sharedid");
                                    c && (t.shduid = c);
                                    return t;
                                })(e)
                            );
                            var r = c.getProtocol().indexOf("http") < 0;
                            (t.secure = r || -1 < c.getProtocol().indexOf("https")),
                                i && i.gdprConsent && i.gdprConsent.consentString && (t.consent_string = i.gdprConsent.consentString),
                                i && i.gdprConsent && (t.consent_required = !!i.gdprConsent.gdprApplies),
                                i && i.uspConsent && (t.us_privacy = i.uspConsent),
                                !0 === a.b.getConfig("coppa") && (t.coppa = !0),
                                e.schain && (t.schain = JSON.stringify(e.schain));
                            var n = (function (e) {
                                if (d.isFn(e.getFloor)) {
                                    var t = e.getFloor({
                                        currency: "USD",
                                        mediaType: "banner",
                                        size: e.sizes.map(function (e) {
                                            return { w: e[0], h: e[1] };
                                        }),
                                    });
                                    if (d.isPlainObject(t) && !isNaN(t.floor) && "USD" === t.currency) return parseFloat(t.floor);
                                }
                                return null;
                            })(e);
                            return (
                                n && (t.bidfloor = n),
                                e.params.badv && (t.badv = e.params.badv),
                                e.params.bcat && (t.bcat = e.params.bcat),
                                { method: "POST", url: "https://btlr.sharethrough.com/WYu2BXv1/v1", data: t, strData: { skipIframeBusting: e.params.iframe, iframeSize: e.params.iframeSize, sizes: e.sizes } }
                            );
                        });
                    },
                    interpretResponse: function (e, t) {
                        var r = e.body;
                        if (!r || !r.creatives || !r.creatives.length) return [];
                        var n = r.creatives[0],
                            i = o;
                        function a(e) {
                            return e[0] * e[1];
                        }
                        return (
                            (t.strData.iframeSize || t.strData.sizes.length) &&
                                (i = t.strData.iframeSize
                                    ? t.strData.iframeSize
                                    : t.strData.sizes.reduce(function (e, t) {
                                          return a(t) > a(e) ? t : e;
                                      })),
                            [
                                {
                                    requestId: t.data.bidId,
                                    width: i[0],
                                    height: i[1],
                                    cpm: n.cpm,
                                    creativeId: n.creative.creative_key,
                                    dealId: n.creative.deal_id,
                                    currency: "USD",
                                    netRevenue: !0,
                                    ttl: 360,
                                    meta: { advertiserDomains: n.creative && n.creative.adomain ? n.creative.adomain : [] },
                                    ad: (function (e, t) {
                                        var r = "str_response_".concat(t.data.bidId),
                                            n = '\n    <div data-str-native-key="'
                                                .concat(t.data.placement_key, '" data-stx-response-name="')
                                                .concat(r, '">\n    </div>\n    <script>var ')
                                                .concat(r, ' = "')
                                                .concat(p(JSON.stringify(e)), '"</script>\n  ');
                                        t.strData.skipIframeBusting
                                            ? (n += '<script src="https://native.sharethrough.com/assets/sfp.js"></script>')
                                            : (n += "\n      <script>\n        (".concat(c.isLockedInFrame.toString(), ")()\n      </script>\n      <script>\n        (").concat(c.handleIframe.toString(), ")()\n      </script>"));
                                        return n;
                                    })(r, t),
                                },
                            ]
                        );
                    },
                    getUserSyncs: function (e, t, r, n) {
                        var i = n ? "&us_privacy=".concat(n) : "",
                            a = [];
                        return (
                            e.pixelEnabled &&
                                0 < t.length &&
                                t[0].body &&
                                t[0].body.cookieSyncUrls &&
                                t[0].body.cookieSyncUrls.forEach(function (e) {
                                    a.push({ type: "image", url: e + i });
                                }),
                            a
                        );
                    },
                    onTimeout: function () {},
                    onBidWon: function () {},
                    onSetTargeting: function () {},
                };
            function p(e) {
                return btoa(
                    encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, function (e, t) {
                        return String.fromCharCode("0x" + t);
                    })
                );
            }
        },
    },
    [846]
);
pbjsChunk(
    [102],
    {
        932: function (e, r, t) {
            e.exports = t(933);
        },
        933: function (e, r, t) {
            "use strict";
            Object.defineProperty(r, "__esModule", { value: !0 }),
                t.d(r, "tripleliftAdapterSpec", function () {
                    return m;
                });
            var n = t(2),
                i = t(1),
                u = t(0),
                a = t(3);
            function p() {
                return (p =
                    Object.assign ||
                    function (e) {
                        for (var r = 1; r < arguments.length; r++) {
                            var t = arguments[r];
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                        }
                        return e;
                    }).apply(this, arguments);
            }
            function c(e) {
                return (c =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                          })(e);
            }
            function d(r, e) {
                var t,
                    n = Object.keys(r);
                return (
                    Object.getOwnPropertySymbols &&
                        ((t = Object.getOwnPropertySymbols(r)),
                        e &&
                            (t = t.filter(function (e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                            })),
                        n.push.apply(n, t)),
                    n
                );
            }
            function s(i) {
                for (var e = 1; e < arguments.length; e++) {
                    var o = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? d(Object(o), !0).forEach(function (e) {
                              var r, t, n;
                              (r = i), (n = o[(t = e)]), t in r ? Object.defineProperty(r, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (r[t] = n);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o))
                        : d(Object(o)).forEach(function (e) {
                              Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e));
                          });
                }
                return i;
            }
            function f(e) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return o(e);
                    })(e) ||
                    (function (e) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
                    })(e) ||
                    (function (e, r) {
                        if (!e) return;
                        if ("string" == typeof e) return o(e, r);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === t && e.constructor && (t = e.constructor.name);
                        if ("Map" === t || "Set" === t) return Array.from(e);
                        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return o(e, r);
                    })(e) ||
                    (function () {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function o(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
                return n;
            }
            var l = !0,
                y = null,
                m =null
            function b(e) {
                return e.mediaTypes.video && e.mediaTypes.video.context && "instream" === e.mediaTypes.video.context.toLowerCase();
            }
            function g(r, t) {
                u.isEmpty(t) ||
                    Object.keys(t).forEach(function (e) {
                        null != t[e] && (r[e] = t[e]);
                    });
            }
            function v(e, r, t, n) {
                return e
                    .map(
                        ((u = r),
                        function (e) {
                            return e && e.userId && e.userId[u];
                        })
                    )
                    .filter(function (e) {
                        return !!e;
                    })
                    .map(
                        ((i = t),
                        (o = n),
                        function (e) {
                            return { source: i, uids: [{ id: e, ext: { rtiPartner: o } }] };
                        })
                    );
                var i, o, u;
            }
            function S(e) {
                return 2 === e.length && "number" == typeof e[0] && "number" == typeof e[1];
            }
        },
    },
    [932]
);
pbjs.processQueue();
("use strict");
TADhba = function () {
    function l(c, b) {
        if (c) {
            var m = c.length,
                a;
            for (a = 0; a < m; a++) b(c[a], a);
        }
    }
    function k(c, a) {
        for (adUnitCode in c)
            l(c[adUnitCode].bids, function (c) {
                a(adUnitCode, c);
            });
    }
    function f(c) {
        return c.replace(/.*\-/, "").replace(/x\d+/, "");
    }
    var n = pbjs.getAllWinningBids(),
        d = [];
    k(pbjs.getBidResponses(), function (c, a) {
        var b = "";
        n.forEach(function (c) {
            c.adId == a.adId && (b = "_w");
        });
        c = f(c);
        d.push(c + "_" + a.bidder + "_" + a.timeToRespond + "_" + Math.floor(100 * a.cpm) / 100 + b);
    });
    k((pbjs.getNoBids && pbjs.getNoBids()) || {}, function (a, b) {
        a = f(a);
        d.push(a + "_" + b.bidder);
    });
    if (window.TADaps)
        for (var g = TADaps.e - TADaps.t, b = 0; b < AD.s.length; b++) {
            var a = AD.s[b],
                e = f(a.getSlotElementId()),
                h = TADaps.b[b];
            e += "_amazon";
            h && 2 < h.length && (e += "_" + g + "_" + h);
            (a = a.getResponseInformation()) && 2205133651 == a.campaignId && (e += "_w");
            d.push(e);
        }
    g = d.length;
    a = [];
    for (b = 0; b < g; b++) a[b] = "p" + b + "=" + d[b];
    return a.join("&");
};
