 ! function (t, e) {
     "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.ApexCharts = e() : t.ApexCharts = e()
 }(this, function () {
     return function (i) {
         var a = {};

         function s(t) {
             if (a[t]) return a[t].exports;
             var e = a[t] = {
                 i: t,
                 l: !1,
                 exports: {}
             };
             return i[t].call(e.exports, e, e.exports, s), e.l = !0, e.exports
         }
         return s.m = i, s.c = a, s.i = function (t) {
             return t
         }, s.d = function (t, e, i) {
             s.o(t, e) || Object.defineProperty(t, e, {
                 configurable: !1,
                 enumerable: !0,
                 get: i
             })
         }, s.n = function (t) {
             var e = t && t.__esModule ? function () {
                 return t.default
             } : function () {
                 return t
             };
             return s.d(e, "a", e), e
         }, s.o = function (t, e) {
             return Object.prototype.hasOwnProperty.call(t, e)
         }, s.p = "", s(s.s = 169)
     }([function (t, e, i) {
         "use strict";
         Object.defineProperty(e, "__esModule", {
             value: !0
         });
         var z = Object.assign || function (t) {
                 for (var e = 1; e < arguments.length; e++) {
                     var i = arguments[e];
                     for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (t[a] = i[a])
                 }
                 return t
             },
             a = function () {
                 function a(t, e) {
                     for (var i = 0; i < e.length; i++) {
                         var a = e[i];
                         a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                     }
                 }
                 return function (t, e, i) {
                     return e && a(t.prototype, e), i && a(t, i), t
                 }
             }(),
             x = s(i(1)),
             X = s(i(5)),
             O = s(i(26));

         function s(t) {
             return t && t.__esModule ? t : {
                 default: t
             }
         }
         var n = function () {
             function e(t) {
                 ! function (t, e) {
                     if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                 }(this, e), this.ctx = t, this.w = t.w
             }
             return a(e, [{
                 key: "drawLine",
                 value: function (t, e, i, a) {
                     var s = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : "#a8a8a8",
                         n = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0,
                         r = 6 < arguments.length && void 0 !== arguments[6] ? arguments[6] : null;
                     return this.w.globals.dom.Paper.line().attr({
                         x1: t,
                         y1: e,
                         x2: i,
                         y2: a,
                         stroke: s,
                         "stroke-dasharray": n,
                         "stroke-width": r
                     })
                 }
             }, {
                 key: "drawRect",
                 value: function () {
                     var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                         e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
                         i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0,
                         a = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 0,
                         s = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
                         n = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : "#fefefe",
                         r = 6 < arguments.length && void 0 !== arguments[6] ? arguments[6] : 1,
                         o = 7 < arguments.length && void 0 !== arguments[7] ? arguments[7] : null,
                         l = 8 < arguments.length && void 0 !== arguments[8] ? arguments[8] : null,
                         h = 9 < arguments.length && void 0 !== arguments[9] ? arguments[9] : 0,
                         c = this.w.globals.dom.Paper.rect();
                     return c.attr({
                         x: t,
                         y: e,
                         width: 0 < i ? i : 0,
                         height: 0 < a ? a : 0,
                         rx: s,
                         ry: s,
                         fill: n,
                         opacity: r,
                         "stroke-width": null !== o ? o : 0,
                         stroke: null !== l ? l : "none",
                         "stroke-dasharray": h
                     }), c
                 }
             }, {
                 key: "drawPolygon",
                 value: function (t) {
                     var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "#e1e1e1",
                         i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "none";
                     return this.w.globals.dom.Paper.polygon(t).attr({
                         fill: i,
                         stroke: e
                     })
                 }
             }, {
                 key: "drawCircle",
                 value: function (t) {
                     var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                         i = this.w.globals.dom.Paper.circle(2 * t);
                     return null !== e && i.attr(e), i
                 }
             }, {
                 key: "drawPath",
                 value: function (t) {
                     var e = t.d,
                         i = void 0 === e ? "" : e,
                         a = t.stroke,
                         s = void 0 === a ? "#a8a8a8" : a,
                         n = t.strokeWidth,
                         r = void 0 === n ? 1 : n,
                         o = t.fill,
                         l = t.fillOpacity,
                         h = void 0 === l ? 1 : l,
                         c = t.strokeOpacity,
                         u = void 0 === c ? 1 : c,
                         d = t.classes,
                         f = t.strokeLinecap,
                         p = void 0 === f ? null : f,
                         g = t.strokeDashArray,
                         x = void 0 === g ? 0 : g,
                         v = this.w;
                     return null === p && (p = v.config.stroke.lineCap), (-1 < i.indexOf("undefined") || -1 < i.indexOf("NaN")) && (i = "M 0 " + v.globals.gridHeight), v.globals.dom.Paper.path(i).attr({
                         fill: o,
                         "fill-opacity": h,
                         stroke: s,
                         "stroke-opacity": u,
                         "stroke-linecap": p,
                         "stroke-width": r,
                         "stroke-dasharray": x,
                         class: d
                     })
                 }
             }, {
                 key: "group",
                 value: function () {
                     var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
                         e = this.w.globals.dom.Paper.group();
                     return null !== t && e.attr(t), e
                 }
             }, {
                 key: "move",
                 value: function (t, e) {
                     var i = ["M", t, e].join(" ");
                     return i
                 }
             }, {
                 key: "line",
                 value: function (t, e) {
                     var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                         a = null;
                     return null === i ? a = ["L", t, e].join(" ") : "H" === i ? a = ["H", t].join(" ") : "V" === i && (a = ["V", e].join(" ")), a
                 }
             }, {
                 key: "curve",
                 value: function (t, e, i, a, s, n) {
                     var r = ["C", t, e, i, a, s, n].join(" ");
                     return r
                 }
             }, {
                 key: "quadraticCurve",
                 value: function (t, e, i, a) {
                     return ["Q", t, e, i, a].join(" ")
                 }
             }, {
                 key: "arc",
                 value: function (t, e, i, a, s, n, r) {
                     var o = "A";
                     7 < arguments.length && void 0 !== arguments[7] && arguments[7] && (o = "a");
                     var l = [o, t, e, i, a, s, n, r].join(" ");
                     return l
                 }
             }, {
                 key: "renderPaths",
                 value: function (t) {
                     var e = t.i,
                         i = t.j,
                         a = t.realIndex,
                         s = t.pathFrom,
                         n = t.pathTo,
                         r = t.stroke,
                         o = t.strokeWidth,
                         l = t.strokeLinecap,
                         h = t.fill,
                         c = t.animationDelay,
                         u = t.initialSpeed,
                         d = t.dataChangeSpeed,
                         f = t.className,
                         p = t.id,
                         g = t.shouldClipToGrid,
                         x = void 0 === g || g,
                         v = t.bindEventsOnPaths,
                         b = void 0 === v || v,
                         m = this.w,
                         y = new X.default(this.ctx),
                         w = new O.default(this.ctx),
                         k = this.w.config.chart.animations.enabled,
                         S = k && this.w.config.chart.animations.dynamicAnimation.enabled,
                         A = void 0,
                         C = !!(k && !m.globals.resized || S && m.globals.dataChanged && m.globals.shouldAnimate);
                     A = C ? s : n;
                     var P = m.config.stroke.dashArray,
                         M = 0;
                     M = Array.isArray(P) ? P[a] : m.config.stroke.dashArray;
                     var L = this.drawPath({
                         d: A,
                         stroke: r,
                         strokeWidth: o,
                         fill: h,
                         fillOpacity: 1,
                         classes: f,
                         strokeLinecap: l,
                         strokeDashArray: M
                     });
                     if (L.attr("id", p + "-" + e), L.attr("index", a), x && L.attr({
                             "clip-path": "url(#gridRectMask" + m.globals.cuid + ")"
                         }), "none" !== m.config.states.normal.filter.type) y.getDefaultFilter(L, m.config.states.normal.filter.type, m.config.states.normal.filter.value);
                     else if (m.config.chart.dropShadow.enabled && (!m.config.chart.dropShadow.enabledSeries || m.config.chart.dropShadow.enabledSeries && -1 !== m.config.chart.dropShadow.enabledSeries.indexOf(a))) {
                         var E = m.config.chart.dropShadow;
                         y.dropShadow(L, E)
                     }
                     b && (L.node.addEventListener("mouseenter", this.pathMouseEnter.bind(this, L)), L.node.addEventListener("mouseleave", this.pathMouseLeave.bind(this, L)), L.node.addEventListener("mousedown", this.pathMouseDown.bind(this, L))), L.attr({
                         pathTo: n,
                         pathFrom: s
                     });
                     var T = {
                         el: L,
                         j: i,
                         pathFrom: s,
                         pathTo: n,
                         strokeWidth: o
                     };
                     return !k || m.globals.resized || m.globals.dataChanged ? !m.globals.resized && m.globals.dataChanged || w.showDelayedElements() : w.animatePathsGradually(z({}, T, {
                         speed: u,
                         delay: c
                     })), m.globals.dataChanged && S && C && w.animatePathsGradually(z({}, T, {
                         speed: d
                     })), L
                 }
             }, {
                 key: "drawPattern",
                 value: function (e, i, a) {
                     var s = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "#a8a8a8",
                         n = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0;
                     5 < arguments.length && void 0 !== arguments[5] && arguments[5];
                     return this.w.globals.dom.Paper.pattern(i, a, function (t) {
                         "horizontalLines" === e ? t.line(0, 0, a, 0).stroke({
                             color: s,
                             width: n + 1
                         }) : "verticalLines" === e ? t.line(0, 0, 0, i).stroke({
                             color: s,
                             width: n + 1
                         }) : "slantedLines" === e ? t.line(0, 0, i, a).stroke({
                             color: s,
                             width: n
                         }) : "squares" === e ? t.rect(i, a).fill("none").stroke({
                             color: s,
                             width: n
                         }) : "circles" === e && t.circle(i).fill("none").stroke({
                             color: s,
                             width: n
                         })
                     })
                 }
             }, {
                 key: "drawGradient",
                 value: function (t, e, i, a, s) {
                     var n = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : null,
                         r = 6 < arguments.length && void 0 !== arguments[6] ? arguments[6] : null,
                         o = this.w;
                     e = x.default.hexToRgba(e, a), i = x.default.hexToRgba(i, s);
                     var l = 0,
                         h = 1,
                         c = 1,
                         u = null;
                     null !== r && (l = void 0 !== r[0] ? r[0] / 100 : 0, h = void 0 !== r[1] ? r[1] / 100 : 1, c = void 0 !== r[2] ? r[2] / 100 : 1, u = void 0 !== r[3] ? r[3] / 100 : null);
                     var d = !("donut" !== o.config.chart.type && "pie" !== o.config.chart.type && "bubble" !== o.config.chart.type),
                         f = o.globals.dom.Paper.gradient(d ? "radial" : "linear", function (t) {
                             t.at(l, e, a), t.at(h, i, s), t.at(c, i, s), null !== u && t.at(u, e, a)
                         });
                     if (d) {
                         var p = o.globals.gridWidth / 2,
                             g = o.globals.gridHeight / 2;
                         "bubble" !== o.config.chart.type ? f.attr({
                             gradientUnits: "userSpaceOnUse",
                             cx: p,
                             cy: g,
                             r: n
                         }) : f.attr({
                             cx: .5,
                             cy: .5,
                             r: .8,
                             fx: .2,
                             fy: .2
                         })
                     } else "vertical" === t ? f.from(0, 0).to(0, 1) : "diagonal" === t ? f.from(0, 0).to(1, 1) : "horizontal" === t ? f.from(0, 1).to(1, 1) : "diagonal2" === t && f.from(0, 1).to(2, 2);
                     return f
                 }
             }, {
                 key: "drawText",
                 value: function (t) {
                     var e = this.w,
                         i = t.x,
                         a = t.y,
                         s = t.text,
                         n = t.textAnchor,
                         r = t.fontSize,
                         o = t.fontFamily,
                         l = t.foreColor,
                         h = t.opacity;
                     n || (n = "start"), l || (l = e.config.chart.foreColor), o = o || e.config.chart.fontFamily;
                     var c = void 0;
                     return (c = Array.isArray(s) ? e.globals.dom.Paper.text(function (t) {
                         for (var e = 0; e < s.length; e++) t.tspan(s[e])
                     }) : e.globals.dom.Paper.plain(s)).attr({
                         x: i,
                         y: a,
                         "text-anchor": n,
                         "dominate-baseline": "central",
                         "font-size": r,
                         "font-family": o,
                         fill: l,
                         class: t.cssClass
                     }), c.node.style.fontFamily = o, c.node.style.opacity = h, c
                 }
             }, {
                 key: "addTspan",
                 value: function (t, e, i) {
                     var a = t.tspan(e);
                     i || (i = this.w.config.chart.fontFamily), a.node.style.fontFamily = i
                 }
             }, {
                 key: "drawMarker",
                 value: function (t, e, i) {
                     t = t || 0;
                     var a = i.pSize || 0,
                         s = null;
                     if ("square" === i.shape) {
                         var n = void 0 === i.pRadius ? a / 2 : i.pRadius;
                         null === e && (n = a = 0);
                         var r = 1.2 * a + n,
                             o = this.drawRect(r, r, r, r, n);
                         o.attr({
                             x: t - r / 2,
                             y: e - r / 2,
                             cx: t,
                             cy: e,
                             class: i.class ? i.class : "",
                             fill: i.pointFillColor,
                             "fill-opacity": i.pointFillOpacity ? i.pointFillOpacity : 1,
                             stroke: i.pointStrokeColor,
                             "stroke-width": i.pWidth ? i.pWidth : 0,
                             "stroke-opacity": i.pointStrokeOpacity ? i.pointStrokeOpacity : 1
                         }), s = o
                     } else "circle" === i.shape && (x.default.isNumber(e) || (e = a = 0), s = this.drawCircle(a, {
                         cx: t,
                         cy: e,
                         class: i.class ? i.class : "",
                         stroke: i.pointStrokeColor,
                         fill: i.pointFillColor,
                         "fill-opacity": i.pointFillOpacity ? i.pointFillOpacity : 1,
                         "stroke-width": i.pWidth ? i.pWidth : 0,
                         "stroke-opacity": i.pointStrokeOpacity ? i.pointStrokeOpacity : 1
                     }));
                     return s
                 }
             }, {
                 key: "pathMouseEnter",
                 value: function (t, e) {
                     var i = this.w,
                         a = new X.default(this.ctx),
                         s = parseInt(t.node.getAttribute("index")),
                         n = parseInt(t.node.getAttribute("j"));
                     if ("function" == typeof i.config.chart.events.dataPointMouseEnter && i.config.chart.events.dataPointMouseEnter(e, this.ctx, {
                             seriesIndex: s,
                             dataPointIndex: n,
                             w: i
                         }), this.ctx.fireEvent("dataPointMouseEnter", [e, this.ctx, {
                             seriesIndex: s,
                             dataPointIndex: n,
                             w: i
                         }]), ("none" === i.config.states.active.filter.type || "true" !== t.node.getAttribute("selected")) && "none" !== i.config.states.hover.filter.type && "none" !== i.config.states.active.filter.type && !i.globals.isTouchDevice) {
                         var r = i.config.states.hover.filter;
                         a.applyFilter(t, r.type, r.value)
                     }
                 }
             }, {
                 key: "pathMouseLeave",
                 value: function (t, e) {
                     var i = this.w,
                         a = new X.default(this.ctx),
                         s = parseInt(t.node.getAttribute("index")),
                         n = parseInt(t.node.getAttribute("j"));
                     "function" == typeof i.config.chart.events.dataPointMouseLeave && i.config.chart.events.dataPointMouseLeave(e, this.ctx, {
                         seriesIndex: s,
                         dataPointIndex: n,
                         w: i
                     }), this.ctx.fireEvent("dataPointMouseLeave", [e, this.ctx, {
                         seriesIndex: s,
                         dataPointIndex: n,
                         w: i
                     }]), "none" !== i.config.states.active.filter.type && "true" === t.node.getAttribute("selected") || "none" !== i.config.states.hover.filter.type && a.getDefaultFilter(t)
                 }
             }, {
                 key: "pathMouseDown",
                 value: function (t, e) {
                     var i = this.w,
                         a = new X.default(this.ctx),
                         s = parseInt(t.node.getAttribute("index")),
                         n = parseInt(t.node.getAttribute("j")),
                         r = "false";
                     if ("true" === t.node.getAttribute("selected")) {
                         if (t.node.setAttribute("selected", "false"), -1 < i.globals.selectedDataPoints[s].indexOf(n)) {
                             var o = i.globals.selectedDataPoints[s].indexOf(n);
                             i.globals.selectedDataPoints[s].splice(o, 1)
                         }
                     } else {
                         if (!i.config.states.active.allowMultipleDataPointsSelection && 0 < i.globals.selectedDataPoints.length) {
                             i.globals.selectedDataPoints = [];
                             var l = i.globals.dom.Paper.select(".apexcharts-series path").members,
                                 h = i.globals.dom.Paper.select(".apexcharts-series circle, .apexcharts-series rect").members,
                                 c = !0,
                                 u = !1,
                                 d = void 0;
                             try {
                                 for (var f, p = l[Symbol.iterator](); !(c = (f = p.next()).done); c = !0) {
                                     var g = f.value;
                                     g.node.setAttribute("selected", "false"), a.getDefaultFilter(g)
                                 }
                             } catch (t) {
                                 u = !0, d = t
                             } finally {
                                 try {
                                     !c && p.return && p.return()
                                 } finally {
                                     if (u) throw d
                                 }
                             }
                             var x = !0,
                                 v = !1,
                                 b = void 0;
                             try {
                                 for (var m, y = h[Symbol.iterator](); !(x = (m = y.next()).done); x = !0) {
                                     var w = m.value;
                                     w.node.setAttribute("selected", "false"), a.getDefaultFilter(w)
                                 }
                             } catch (t) {
                                 v = !0, b = t
                             } finally {
                                 try {
                                     !x && y.return && y.return()
                                 } finally {
                                     if (v) throw b
                                 }
                             }
                         }
                         t.node.setAttribute("selected", "true"), r = "true", void 0 === i.globals.selectedDataPoints[s] && (i.globals.selectedDataPoints[s] = []), i.globals.selectedDataPoints[s].push(n)
                     }
                     if ("true" === r) {
                         var k = i.config.states.active.filter;
                         "none" !== k && a.applyFilter(t, k.type, k.value)
                     } else "none" !== i.config.states.active.filter.type && a.getDefaultFilter(t);
                     "function" == typeof i.config.chart.events.dataPointSelection && i.config.chart.events.dataPointSelection(e, this.ctx, {
                         selectedDataPoints: i.globals.selectedDataPoints,
                         seriesIndex: s,
                         dataPointIndex: n,
                         w: i
                     }), this.ctx.fireEvent("dataPointSelection", [e, this.ctx, {
                         selectedDataPoints: i.globals.selectedDataPoints,
                         seriesIndex: s,
                         dataPointIndex: n,
                         w: i
                     }])
                 }
             }, {
                 key: "rotateAroundCenter",
                 value: function (t) {
                     var e = t.getBBox();
                     return {
                         x: e.x + e.width / 2,
                         y: e.y + e.height / 2
                     }
                 }
             }, {
                 key: "getTextRects",
                 value: function (t, e, i, a) {
                     var s = !(4 < arguments.length && void 0 !== arguments[4]) || arguments[4],
                         n = this.w,
                         r = this.drawText({
                             x: -200,
                             y: -200,
                             text: t,
                             textAnchor: "start",
                             fontSize: e,
                             fontFamily: i,
                             foreColor: "#fff",
                             opacity: 0
                         });
                     a && r.attr("transform", a), n.globals.dom.Paper.add(r);
                     var o = r.bbox();
                     return s || (o = r.node.getBoundingClientRect()), r.remove(), {
                         width: o.width,
                         height: o.height
                     }
                 }
             }, {
                 key: "placeTextWithEllipsis",
                 value: function (t, e, i) {
                     if (0 < (t.textContent = e).length && t.getSubStringLength(0, e.length) >= i) {
                         for (var a = e.length - 3; 0 < a; a -= 3)
                             if (t.getSubStringLength(0, a) <= i) return void(t.textContent = e.substring(0, a) + "...");
                         t.textContent = "..."
                     }
                 }
             }], [{
                 key: "setAttrs",
                 value: function (t, e) {
                     for (var i in e) e.hasOwnProperty(i) && t.setAttribute(i, e[i])
                 }
             }]), e
         }();
         e.default = n
     }, function (t, e, i) {
         "use strict";
         Object.defineProperty(e, "__esModule", {
             value: !0
         });
         var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                 return typeof t
             } : function (t) {
                 return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
             },
             s = function () {
                 function a(t, e) {
                     for (var i = 0; i < e.length; i++) {
                         var a = e[i];
                         a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                     }
                 }
                 return function (t, e, i) {
                     return e && a(t.prototype, e), i && a(t, i), t
                 }
             }();

         function r(t, e, i) {
             return e in t ? Object.defineProperty(t, e, {
                 value: i,
                 enumerable: !0,
                 configurable: !0,
                 writable: !0
             }) : t[e] = i, t
         }
         var a = function () {
             function a() {
                 ! function (t, e) {
                     if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                 }(this, a)
             }
             return s(a, [{
                 key: "shadeColor",
                 value: function (t, e) {
                     var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : void 0;
                     if ("#" === e[0] && "r" === e[0] || (e = this.getHexColorFromName(e)), "number" != typeof t || t < -1 || 1 < t || "string" != typeof e || "r" !== e[0] && "#" !== e[0] || "string" != typeof i && void 0 !== i) return null;
                     parseInt;
                     var a = Math.round,
                         s = 9 < e.length,
                         n = (s = "string" == typeof i ? 9 < i.length || "c" === i && !s : s, t < 0),
                         r = (t = n ? -1 * t : t, i = i && "c" !== i ? i : n ? "#000000" : "#FFFFFF", this.sbcRip(e)),
                         o = this.sbcRip(i);
                     return r && o ? s ? "rgb(" + a((o[0] - r[0]) * t + r[0]) + "," + a((o[1] - r[1]) * t + r[1]) + "," + a((o[2] - r[2]) * t + r[2]) + (r[3] < 0 && o[3] < 0 ? ")" : "," + (-1 < r[3] && -1 < o[3] ? a(1e4 * ((o[3] - r[3]) * t + r[3])) / 1e4 : o[3] < 0 ? r[3] : o[3]) + ")") : "#" + (4294967296 + 16777216 * (-1 < r[3] && -1 < o[3] ? a(255 * ((o[3] - r[3]) * t + r[3])) : -1 < o[3] ? a(255 * o[3]) : -1 < r[3] ? a(255 * r[3]) : 255) + 65536 * a((o[0] - r[0]) * t + r[0]) + 256 * a((o[1] - r[1]) * t + r[1]) + a((o[2] - r[2]) * t + r[2])).toString(16).slice(-1 < r[3] || -1 < o[3] ? 1 : 3) : null
                 }
             }, {
                 key: "sbcRip",
                 value: function (t) {
                     var e = t.length,
                         i = new Object,
                         a = parseInt,
                         s = Math.round;
                     if (9 < e) {
                         if ((t = t.split(",")).length < 3 || 4 < t.length) return null;
                         i[0] = a(t[0].slice(4)), i[1] = a(t[1]), i[2] = a(t[2]), i[3] = t[3] ? parseFloat(t[3]) : -1
                     } else {
                         if (8 === e || 6 === e || e < 4) return null;
                         e < 6 && (t = "#" + t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + (4 < e ? t[4] + "" + t[4] : "")), t = a(t.slice(1), 16), i[0] = t >> 16 & 255, i[1] = t >> 8 & 255, i[2] = 255 & t, i[3] = 9 === e || 5 === e ? s((t >> 24 & 255) / 255 * 1e4) / 1e4 : -1
                     }
                     return i
                 }
             }, {
                 key: "getHexColorFromName",
                 value: function (t) {
                     var e = document.createElement("div");
                     e.style.color = t;
                     var i = window.getComputedStyle(document.body.appendChild(e)).color.match(/\d+/g).map(function (t) {
                         return parseInt(t, 10)
                     });
                     return document.body.removeChild(e), 3 <= i.length && "#" + ((1 << 24) + (i[0] << 16) + (i[1] << 8) + i[2]).toString(16).substr(1)
                 }
             }], [{
                 key: "bind",
                 value: function (t, e) {
                     return function () {
                         return t.apply(e, arguments)
                     }
                 }
             }, {
                 key: "isObject",
                 value: function (t) {
                     return t && "object" === (void 0 === t ? "undefined" : n(t)) && !Array.isArray(t) && null != t
                 }
             }, {
                 key: "extend",
                 value: function (e, i) {
                     var a = this;
                     "function" != typeof Object.assign && (Object.assign = function (t) {
                         if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                         for (var e = Object(t), i = 1; i < arguments.length; i++) {
                             var a = arguments[i];
                             if (null != a)
                                 for (var s in a) a.hasOwnProperty(s) && (e[s] = a[s])
                         }
                         return e
                     });
                     var s = Object.assign({}, e);
                     return this.isObject(e) && this.isObject(i) && Object.keys(i).forEach(function (t) {
                         a.isObject(i[t]) && t in e ? s[t] = a.extend(e[t], i[t]) : Object.assign(s, r({}, t, i[t]))
                     }), s
                 }
             }, {
                 key: "extendArray",
                 value: function (t, e) {
                     var i = [];
                     return t.map(function (t) {
                         i.push(a.extend(e, t))
                     }), t = i
                 }
             }, {
                 key: "addProps",
                 value: function (t, e, i) {
                     "string" == typeof e && (e = e.split(".")), t[e[0]] = t[e[0]] || {};
                     var a = t[e[0]];
                     return 1 < e.length ? (e.shift(), this.addProps(a, e, i)) : t[e[0]] = i, t
                 }
             }, {
                 key: "clone",
                 value: function (t) {
                     if ("[object Array]" === Object.prototype.toString.call(t)) {
                         for (var e = [], i = 0; i < t.length; i++) e[i] = this.clone(t[i]);
                         return e
                     }
                     if ("object" !== (void 0 === t ? "undefined" : n(t))) return t;
                     var a = {};
                     for (var s in t) t.hasOwnProperty(s) && (a[s] = this.clone(t[s]));
                     return a
                 }
             }, {
                 key: "log10",
                 value: function (t) {
                     return Math.log(t) / Math.LN10
                 }
             }, {
                 key: "roundToBase10",
                 value: function (t) {
                     return Math.pow(10, Math.floor(Math.log10(t)))
                 }
             }, {
                 key: "roundToBase",
                 value: function (t, e) {
                     return Math.pow(e, Math.floor(Math.log(t) / Math.log(e)))
                 }
             }, {
                 key: "getDimensions",
                 value: function (t) {
                     var e = getComputedStyle(t),
                         i = [],
                         a = t.clientHeight,
                         s = t.clientWidth;
                     return a -= parseFloat(e.paddingTop) + parseFloat(e.paddingBottom), s -= parseFloat(e.paddingLeft) + parseFloat(e.paddingRight), i.push(s), i.push(a), i
                 }
             }, {
                 key: "getBoundingClientRect",
                 value: function (t) {
                     var e = t.getBoundingClientRect();
                     return {
                         top: e.top,
                         right: e.right,
                         bottom: e.bottom,
                         left: e.left,
                         width: e.width,
                         height: e.height,
                         x: e.x,
                         y: e.y
                     }
                 }
             }, {
                 key: "hexToRgba",
                 value: function () {
                     var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "#999999",
                         e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : .6;
                     "#" !== t.substring(0, 1) && (t = "#999999");
                     var i = t.replace("#", "");
                     i = i.match(new RegExp("(.{" + i.length / 3 + "})", "g"));
                     for (var a = 0; a < i.length; a++) i[a] = parseInt(1 === i[a].length ? i[a] + i[a] : i[a], 16);
                     return void 0 !== e && i.push(e), "rgba(" + i.join(",") + ")"
                 }
             }, {
                 key: "getOpacityFromRGBA",
                 value: function (t) {
                     return (t = t.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i))[3]
                 }
             }, {
                 key: "rgb2hex",
                 value: function (t) {
                     return (t = t.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i)) && 4 === t.length ? "#" + ("0" + parseInt(t[1], 10).toString(16)).slice(-2) + ("0" + parseInt(t[2], 10).toString(16)).slice(-2) + ("0" + parseInt(t[3], 10).toString(16)).slice(-2) : ""
                 }
             }, {
                 key: "polarToCartesian",
                 value: function (t, e, i, a) {
                     var s = (a - 90) * Math.PI / 180;
                     return {
                         x: t + i * Math.cos(s),
                         y: e + i * Math.sin(s)
                     }
                 }
             }, {
                 key: "negToZero",
                 value: function (t) {
                     return t < 0 ? 0 : t
                 }
             }, {
                 key: "randomString",
                 value: function (t) {
                     for (var e = "", i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", a = 0; a < t; a++) e += i.charAt(Math.floor(Math.random() * i.length));
                     return e
                 }
             }, {
                 key: "findAncestor",
                 value: function (t, e) {
                     for (;
                         (t = t.parentElement) && !t.classList.contains(e););
                     return t
                 }
             }, {
                 key: "setELstyles",
                 value: function (t, e) {
                     for (var i in e) e.hasOwnProperty(i) && (t.style.key = e[i])
                 }
             }, {
                 key: "isNumber",
                 value: function (t) {
                     return !isNaN(t) && parseFloat(Number(t)) === t && !isNaN(parseInt(t, 10))
                 }
             }, {
                 key: "isFloat",
                 value: function (t) {
                     return Number(t) === t && t % 1 != 0
                 }
             }, {
                 key: "isSafari",
                 value: function () {
                     return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
                 }
             }, {
                 key: "isFirefox",
                 value: function () {
                     return -1 < navigator.userAgent.toLowerCase().indexOf("firefox")
                 }
             }, {
                 key: "isIE11",
                 value: function () {
                     if (-1 !== window.navigator.userAgent.indexOf("MSIE") || -1 < window.navigator.appVersion.indexOf("Trident/")) return !0
                 }
             }, {
                 key: "isIE",
                 value: function () {
                     var t = window.navigator.userAgent,
                         e = t.indexOf("MSIE ");
                     if (0 < e) return parseInt(t.substring(e + 5, t.indexOf(".", e)), 10);
                     if (0 < t.indexOf("Trident/")) {
                         var i = t.indexOf("rv:");
                         return parseInt(t.substring(i + 3, t.indexOf(".", i)), 10)
                     }
                     var a = t.indexOf("Edge/");
                     return 0 < a && parseInt(t.substring(a + 5, t.indexOf(".", a)), 10)
                 }
             }]), a
         }();
         e.default = a
     }, function (t, e, i) {
         "use strict";
         var a = i(43)("wks"),
             s = i(25),
             n = i(3).Symbol,
             r = "function" == typeof n;
         (t.exports = function (t) {
             return a[t] || (a[t] = r && n[t] || (r ? n : s)("Symbol." + t))
         }).store = a
     }, function (t, e, i) {
         "use strict";
         var a = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
         "number" == typeof __g && (__g = a)
     }, function (t, e, i) {
         "use strict";
         var a = t.exports = {
             version: "2.5.7"
         };
         "number" == typeof __e && (__e = a)
     }, function (t, e, i) {
         "use strict";
         Object.defineProperty(e, "__esModule", {
             value: !0
         });
         var a, s = function () {
                 function a(t, e) {
                     for (var i = 0; i < e.length; i++) {
                         var a = e[i];
                         a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                     }
                 }
                 return function (t, e, i) {
                     return e && a(t.prototype, e), i && a(t, i), t
                 }
             }(),
             n = i(1),
             o = (a = n) && a.__esModule ? a : {
                 default: a
             };
         var r = function () {
             function e(t) {
                 ! function (t, e) {
                     if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                 }(this, e), this.ctx = t, this.w = t.w
             }
             return s(e, [{
                 key: "getDefaultFilter",
                 value: function (t) {
                     var e = this.w;
                     t.unfilter(!0), (new window.SVG.Filter).size("120%", "180%", "-5%", "-40%"), "none" !== e.config.states.normal.filter ? this.applyFilter(t, e.config.states.normal.filter.type, e.config.states.normal.filter.value) : e.config.chart.dropShadow.enabled && this.dropShadow(t, e.config.chart.dropShadow)
                 }
             }, {
                 key: "addNormalFilter",
                 value: function (t) {
                     var e = this.w;
                     e.config.chart.dropShadow.enabled && this.dropShadow(t, e.config.chart.dropShadow)
                 }
             }, {
                 key: "addDesaturateFilter",
                 value: function (t) {
                     var i = this,
                         a = this.w;
                     t.unfilter(!0);
                     var s = new window.SVG.Filter;
                     s.size("120%", "180%", "-5%", "-40%"), t.filter(function (t) {
                         var e = a.config.chart.dropShadow;
                         (s = e.enabled ? i.addShadow(t, e) : t).colorMatrix("matrix", [0, 0, 0, 0, .5, 0, 0, 0, 0, .5, 0, 0, 0, 0, .5, 0, 0, 0, 1, 0]).colorMatrix("saturate", 0)
                     }), t.filterer.node.setAttribute("filterUnits", "userSpaceOnUse")
                 }
             }, {
                 key: "addLightenFilter",
                 value: function (t, e) {
                     var i = this,
                         a = this.w,
                         s = e.intensity;
                     if (!o.default.isFirefox()) {
                         t.unfilter(!0);
                         var n = new window.SVG.Filter;
                         n.size("120%", "180%", "-5%", "-40%"), t.filter(function (t) {
                             var e = a.config.chart.dropShadow;
                             (n = e.enabled ? i.addShadow(t, e) : t).componentTransfer({
                                 rgb: {
                                     type: "linear",
                                     slope: 1.5,
                                     intercept: s
                                 }
                             })
                         }), t.filterer.node.setAttribute("filterUnits", "userSpaceOnUse")
                     }
                 }
             }, {
                 key: "addDarkenFilter",
                 value: function (t, e) {
                     var i = this,
                         a = this.w,
                         s = e.intensity;
                     if (!o.default.isFirefox()) {
                         t.unfilter(!0);
                         var n = new window.SVG.Filter;
                         n.size("120%", "180%", "-5%", "-40%"), t.filter(function (t) {
                             var e = a.config.chart.dropShadow;
                             (n = e.enabled ? i.addShadow(t, e) : t).componentTransfer({
                                 rgb: {
                                     type: "linear",
                                     slope: s
                                 }
                             })
                         }), t.filterer.node.setAttribute("filterUnits", "userSpaceOnUse")
                     }
                 }
             }, {
                 key: "applyFilter",
                 value: function (t, e) {
                     var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : .5;
                     switch (e) {
                         case "none":
                             this.addNormalFilter(t);
                             break;
                         case "lighten":
                             this.addLightenFilter(t, {
                                 intensity: i
                             });
                             break;
                         case "darken":
                             this.addDarkenFilter(t, {
                                 intensity: i
                             });
                             break;
                         case "desaturate":
                             this.addDesaturateFilter(t)
                     }
                 }
             }, {
                 key: "addShadow",
                 value: function (t, e) {
                     var i = e.blur,
                         a = e.top,
                         s = e.left,
                         n = e.opacity,
                         r = t.flood("black", n).composite(t.sourceAlpha, "in").offset(s, a).gaussianBlur(i).merge(t.source);
                     return t.blend(t.source, r)
                 }
             }, {
                 key: "dropShadow",
                 value: function (t, e) {
                     var i = e.top,
                         a = e.left,
                         s = e.blur,
                         n = e.opacity,
                         r = e.noUserSpaceOnUse;
                     return t.unfilter(!0), (new window.SVG.Filter).size("120%", "180%", "-5%", "-40%"), t.filter(function (t) {
                         var e = null;
                         e = o.default.isSafari() || o.default.isFirefox() || o.default.isIE() ? t.flood("black", n).composite(t.sourceAlpha, "in").offset(a, i).gaussianBlur(s) : t.flood("black", n).composite(t.sourceAlpha, "in").offset(a, i).gaussianBlur(s).merge(t.source), t.blend(t.source, e)
                     }), r || t.filterer.node.setAttribute("filterUnits", "userSpaceOnUse"), t
                 }
             }]), e
         }();
         e.default = r
     }, function (t, e, i) {
         "use strict";
         var g = i(3),
             x = i(4),
             v = i(14),
             b = i(16),
             m = i(15),
             y = "prototype",
             a = function t(e, i, a) {
                 var s, n, r, o, l = e & t.F,
                     h = e & t.G,
                     c = e & t.P,
                     u = e & t.B,
                     d = h ? g : e & t.S ? g[i] || (g[i] = {}) : (g[i] || {})[y],
                     f = h ? x : x[i] || (x[i] = {}),
                     p = f[y] || (f[y] = {});
                 for (s in h && (a = i), a) r = ((n = !l && d && void 0 !== d[s]) ? d : a)[s], o = u && n ? m(r, g) : c && "function" == typeof r ? m(Function.call, r) : r, d && b(d, s, r, e & t.U), f[s] != r && v(f, s, o), c && p[s] != r && (p[s] = r)
             };
         g.core = x, a.F = 1, a.G = 2, a.S = 4, a.P = 8, a.B = 16, a.W = 32, a.U = 64, a.R = 128, t.exports = a
     }, function (t, e, i) {
         "use strict";
         Object.defineProperty(e, "__esModule", {
             value: !0
         });
         var a = function () {
             function a(t, e) {
                 for (var i = 0; i < e.length; i++) {
                     var a = e[i];
                     a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                 }
             }
             return function (t, e, i) {
                 return e && a(t.prototype, e), i && a(t, i), t
             }
         }();
         var s = function () {
             function e(t) {
                 ! function (t, e) {
                     if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                 }(this, e), this.ctx = t, this.w = t.w
             }
             return a(e, [{
                 key: "checkComboSeries",
                 value: function () {
                     var e = this.w;
                     e.config.series.length && void 0 !== e.config.series[0].type && (e.globals.comboCharts = !0, e.config.series.forEach(function (t) {
                         "bar" !== t.type && "column" !== t.type || (e.globals.comboChartsHasBars = !0)
                     }))
                 }
             }, {
                 key: "getStackedSeriesTotals",
                 value: function () {
                     for (var t = this.w, e = [], i = 0; i < t.globals.series[t.globals.maxValsInArrayIndex].length; i++) {
                         for (var a = 0, s = 0; s < t.globals.series.length; s++) a += t.globals.series[s][i];
                         e.push(a)
                     }
                     return t.globals.stackedSeriesTotals = e
                 }
             }, {
                 key: "getSeriesTotalByIndex",
                 value: function () {
                     var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                     return null === t ? this.w.config.series.reduce(function (t, e) {
                         return t + e
                     }, 0) : this.w.config.series[t].data.reduce(function (t, e) {
                         return t + e
                     }, 0)
                 }
             }, {
                 key: "seriesHaveSameValues",
                 value: function (t) {
                     return this.w.globals.series[t].every(function (t, e, i) {
                         return t === i[0]
                     })
                 }
             }, {
                 key: "getLargestSeries",
                 value: function () {
                     var t = this.w;
                     t.globals.maxValsInArrayIndex = t.globals.series.map(function (t) {
                         return t.length
                     }).indexOf(Math.max.apply(Math, t.globals.series.map(function (t) {
                         return t.length
                     })))
                 }
             }, {
                 key: "getLargestMarkerSize",
                 value: function () {
                     var t = this.w,
                         e = 0;
                     return t.globals.markers.size.forEach(function (t) {
                         e = Math.max(e, t)
                     }), t.globals.markers.largestSize = e
                 }
             }, {
                 key: "getSeriesTotals",
                 value: function () {
                     var t = this.w;
                     t.globals.seriesTotals = t.globals.series.map(function (t, e) {
                         var i = 0;
                         if (Array.isArray(t))
                             for (var a = 0; a < t.length; a++) i += t[a];
                         else i += t;
                         return i
                     })
                 }
             }, {
                 key: "getSeriesTotalsXRange",
                 value: function (s, n) {
                     var r = this.w;
                     return r.globals.series.map(function (t, e) {
                         for (var i = 0, a = 0; a < t.length; a++) r.globals.seriesX[e][a] > s && r.globals.seriesX[e][a] < n && (i += t[a]);
                         return i
                     })
                 }
             }, {
                 key: "getPercentSeries",
                 value: function () {
                     var o = this.w;
                     o.globals.seriesPercent = o.globals.series.map(function (t, e) {
                         var i = [];
                         if (Array.isArray(t))
                             for (var a = 0; a < t.length; a++) {
                                 var s = o.globals.stackedSeriesTotals[a],
                                     n = 100 * t[a] / s;
                                 i.push(n)
                             } else {
                                 var r = 100 * t / o.globals.seriesTotals.reduce(function (t, e) {
                                     return t + e
                                 }, 0);
                                 i.push(r)
                             }
                         return i
                     })
                 }
             }, {
                 key: "getCalculatedRatios",
                 value: function () {
                     var t, e, i, a, s, n = this.w.globals,
                         r = [],
                         o = [],
                         l = .1,
                         h = 0;
                     if (n.yRange = [], n.isMultipleYAxis)
                         for (var c = 0; c < n.minYArr.length; c++) n.yRange.push(Math.abs(n.minYArr[c] - n.maxYArr[c])), o.push(0);
                     else n.yRange.push(Math.abs(n.minY - n.maxY));
                     n.xRange = Math.abs(n.maxX - n.minX), n.zRange = Math.abs(n.maxZ - n.minZ);
                     for (var u = 0; u < n.yRange.length; u++) r.push(n.yRange[u] / n.gridHeight);
                     if (e = n.xRange / n.gridWidth, i = Math.abs(n.initialmaxX - n.initialminX) / n.gridWidth, t = n.yRange / n.gridWidth, a = n.xRange / n.gridHeight, s = n.zRange / n.gridHeight * 16, n.minY !== Number.MIN_VALUE && 0 !== Math.abs(n.minY)) {
                         if (n.hasNegs = !0, o = [], n.isMultipleYAxis)
                             for (var d = 0; d < r.length; d++) o.push(-n.minYArr[d] / r[d]);
                         else o.push(-n.minY / r[0]);
                         l = -n.minY / t, h = n.minX / e
                     } else o.push(0);
                     return {
                         yRatio: r,
                         invertedYRatio: t,
                         zRatio: s,
                         xRatio: e,
                         initialXRatio: i,
                         invertedXRatio: a,
                         baseLineInvertedY: l,
                         baseLineY: o,
                         baseLineX: h
                     }
                 }
             }, {
                 key: "getLogSeries",
                 value: function (t) {
                     var i = this.w;
                     return i.globals.seriesLog = t.map(function (t, e) {
                         return i.config.yaxis[e] && i.config.yaxis[e].logarithmic ? t.map(function (t) {
                             return null === t ? null : (Math.log(t) - Math.log(i.globals.minYArr[e])) / (Math.log(i.globals.maxYArr[e]) - Math.log(i.globals.minYArr[e]))
                         }) : t
                     }), i.globals.seriesLog
                 }
             }, {
                 key: "getLogYRatios",
                 value: function (t) {
                     var n = this,
                         r = this.w,
                         o = this.w.globals;
                     return o.yLogRatio = t.slice(), o.logYRange = o.yRange.map(function (t, e) {
                         if (r.config.yaxis[e] && n.w.config.yaxis[e].logarithmic) {
                             var i, a = Number.MIN_SAFE_INTEGER,
                                 s = Number.MAX_SAFE_INTEGER;
                             return o.seriesLog.forEach(function (t, e) {
                                 t.forEach(function (t) {
                                     r.config.yaxis[e] && r.config.yaxis[e].logarithmic && (a = Math.max(t, a), s = Math.min(t, s))
                                 })
                             }), i = Math.pow(o.yRange[e], Math.abs(s - a) / o.yRange[e]), o.yLogRatio[e] = i / o.gridHeight, i
                         }
                     }), o.yLogRatio
                 }
             }], [{
                 key: "extendArrayProps",
                 value: function (t, e) {
                     return e.yaxis && (e = t.extendYAxis(e)), e.annotations && (e.annotations.yaxis && (e = t.extendYAxisAnnotations(e)), e.annotations.xaxis && (e = t.extendXAxisAnnotations(e)), e.annotations.points && (e = t.extendPointAnnotations(e))), e
                 }
             }]), e
         }();
         e.default = s
     }, function (t, e, i) {
         "use strict";
         var a = i(9);
         t.exports = function (t) {
             if (!a(t)) throw TypeError(t + " is not an object!");
             return t
         }
     }, function (t, e, i) {
         "use strict";
         var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
             return typeof t
         } : function (t) {
             return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
         };
         t.exports = function (t) {
             return "object" === (void 0 === t ? "undefined" : a(t)) ? null !== t : "function" == typeof t
         }
     }, function (t, e, i) {
         "use strict";
         var a = i(8),
             s = i(56),
             n = i(45),
             r = Object.defineProperty;
         e.f = i(12) ? Object.defineProperty : function (t, e, i) {
             if (a(t), e = n(e, !0), a(i), s) try {
                 return r(t, e, i)
             } catch (t) {}
             if ("get" in i || "set" in i) throw TypeError("Accessors not supported!");
             return "value" in i && (t[e] = i.value), t
         }
     }, function (t, e, i) {
         "use strict";
         Object.defineProperty(e, "__esModule", {
             value: !0
         });
         var a = function () {
                 function a(t, e) {
                     for (var i = 0; i < e.length; i++) {
                         var a = e[i];
                         a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                     }
                 }
                 return function (t, e, i) {
                     return e && a(t.prototype, e), i && a(t, i), t
                 }
             }(),
             p = s(i(0)),
             g = s(i(1));

         function s(t) {
             return t && t.__esModule ? t : {
                 default: t
             }
         }
         var n = function () {
             function e(t) {
                 ! function (t, e) {
                     if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                 }(this, e), this.ctx = t, this.w = t.w, this.opts = null, this.seriesIndex = 0
             }
             return a(e, [{
                 key: "clippedImgArea",
                 value: function (t) {
                     var e = this.w,
                         i = e.config,
                         a = parseInt(e.globals.gridWidth),
                         s = parseInt(e.globals.gridHeight),
                         n = s < a ? a : s,
                         r = t.image,
                         o = 0,
                         l = 0;
                     l = void 0 === t.width && void 0 === t.height ? void 0 !== i.fill.image.width && void 0 !== i.fill.image.height ? (o = i.fill.image.width + 1, i.fill.image.height) : (o = n + 1, n) : (o = t.width, t.height);
                     var h = document.createElementNS(e.globals.svgNS, "pattern");
                     p.default.setAttrs(h, {
                         id: t.patternID,
                         patternUnits: "userSpaceOnUse",
                         width: o + "px",
                         height: l + "px"
                     });
                     var c = document.createElementNS(e.globals.svgNS, "image");
                     h.appendChild(c), c.setAttributeNS("http://www.w3.org/1999/xlink", "href", r), p.default.setAttrs(c, {
                         x: 0,
                         y: 0,
                         preserveAspectRatio: "none",
                         width: o + "px",
                         height: l + "px"
                     }), c.style.opacity = t.opacity, e.globals.dom.elDefs.node.appendChild(h)
                 }
             }, {
                 key: "getSeriesIndex",
                 value: function (t) {
                     var e = this.w;
                     return "bar" === e.config.chart.type && e.config.plotOptions.bar.distributed || "heatmap" === e.config.chart.type ? this.seriesIndex = t.seriesNumber : this.seriesIndex = t.seriesNumber % e.globals.series.length, this.seriesIndex
                 }
             }, {
                 key: "fillPath",
                 value: function (t, e) {
                     var i = this.w;
                     this.opts = e;
                     var a = this.w.config,
                         s = void 0,
                         n = void 0,
                         r = void 0;
                     this.seriesIndex = this.getSeriesIndex(e);
                     var o = this.getFillColors(),
                         l = o[this.seriesIndex],
                         h = Array.isArray(a.fill.opacity) ? a.fill.opacity[this.seriesIndex] : a.fill.opacity,
                         c = l;
                     return e.color && (l = e.color), -1 === l.indexOf("rgb") ? c = g.default.hexToRgba(l, h) : -1 < l.indexOf("rgba") && (h = "0." + g.default.getOpacityFromRGBA(o[this.seriesIndex])), "pattern" === a.fill.type && (n = this.handlePatternFill(n, l, h, c)), "gradient" === a.fill.type && (r = this.handleGradientFill(r, l, h, this.seriesIndex)), s = 0 < a.fill.image.src.length && "image" === a.fill.type ? e.seriesNumber < a.fill.image.src.length ? (this.clippedImgArea({
                         opacity: h,
                         image: a.fill.image.src[e.seriesNumber],
                         patternID: "pattern" + i.globals.cuid + (e.seriesNumber + 1)
                     }), "url(#pattern" + i.globals.cuid + (e.seriesNumber + 1) + ")") : c : "gradient" === a.fill.type ? r : "pattern" === a.fill.type ? n : c, e.solid && (s = c), s
                 }
             }, {
                 key: "getFillColors",
                 value: function () {
                     var t = this.w,
                         e = t.config,
                         i = this.opts,
                         a = [];
                     return t.globals.comboCharts ? "line" === t.config.series[this.seriesIndex].type ? t.globals.stroke.colors instanceof Array ? a = t.globals.stroke.colors : a.push(t.globals.stroke.colors) : t.globals.fill.colors instanceof Array ? a = t.globals.fill.colors : a.push(t.globals.fill.colors) : "line" === e.chart.type ? t.globals.stroke.colors instanceof Array ? a = t.globals.stroke.colors : a.push(t.globals.stroke.colors) : t.globals.fill.colors instanceof Array ? a = t.globals.fill.colors : a.push(t.globals.fill.colors), void 0 !== i.fillColors && (a = [], i.fillColors instanceof Array ? a = i.fillColors.slice() : a.push(i.fillColors)), a
                 }
             }, {
                 key: "handlePatternFill",
                 value: function (t, e, i, a) {
                     var s = this.w.config,
                         n = this.opts,
                         r = new p.default(this.ctx),
                         o = void 0 === s.fill.pattern.strokeWidth ? Array.isArray(s.stroke.width) ? s.stroke.width[this.seriesIndex] : s.stroke.width : Array.isArray(s.fill.pattern.strokeWidth) ? s.fill.pattern.strokeWidth[this.seriesIndex] : s.fill.pattern.strokeWidth,
                         l = e;
                     s.fill.pattern.style instanceof Array ? t = void 0 !== s.fill.pattern.style[n.seriesNumber] ? r.drawPattern(s.fill.pattern.style[n.seriesNumber], s.fill.pattern.width, s.fill.pattern.height, l, o, i) : a : t = r.drawPattern(s.fill.pattern.style, s.fill.pattern.width, s.fill.pattern.height, l, o, i);
                     return t
                 }
             }, {
                 key: "handleGradientFill",
                 value: function (t, e, i, a) {
                     var s = this.w.config,
                         n = this.opts,
                         r = new p.default(this.ctx),
                         o = new g.default,
                         l = s.fill.gradient.type,
                         h = void 0,
                         c = void 0,
                         u = void 0 === s.fill.gradient.opacityFrom ? i : Array.isArray(s.fill.gradient.opacityFrom) ? s.fill.gradient.opacityFrom[a] : s.fill.gradient.opacityFrom,
                         d = void 0 === s.fill.gradient.opacityTo ? i : Array.isArray(s.fill.gradient.opacityTo) ? s.fill.gradient.opacityTo[a] : s.fill.gradient.opacityTo;
                     if (h = e, c = void 0 === s.fill.gradient.gradientToColors || 0 === s.fill.gradient.gradientToColors.length ? "dark" === s.fill.gradient.shade ? o.shadeColor(-1 * parseFloat(s.fill.gradient.shadeIntensity), e) : o.shadeColor(parseFloat(s.fill.gradient.shadeIntensity), e) : s.fill.gradient.gradientToColors[n.seriesNumber], s.fill.gradient.inverseColors) {
                         var f = h;
                         h = c, c = f
                     }
                     return r.drawGradient(l, h, c, u, d, n.size, s.fill.gradient.stops)
                 }
             }]), e
         }();
         e.default = n
     }, function (t, e, i) {
         "use strict";
         t.exports = !i(20)(function () {
             return 7 != Object.defineProperty({}, "a", {
                 get: function () {
                     return 7
                 }
             }).a
         })
     }, function (t, e, i) {
         "use strict";
         var a = {}.hasOwnProperty;
         t.exports = function (t, e) {
             return a.call(t, e)
         }
     }, function (t, e, i) {
         "use strict";
         var a = i(10),
             s = i(23);
         t.exports = i(12) ? function (t, e, i) {
             return a.f(t, e, s(1, i))
         } : function (t, e, i) {
             return t[e] = i, t
         }
     }, function (t, e, i) {
         "use strict";
         var n = i(18);
         t.exports = function (a, s, t) {
             if (n(a), void 0 === s) return a;
             switch (t) {
                 case 1:
                     return function (t) {
                         return a.call(s, t)
                     };
                 case 2:
                     return function (t, e) {
                         return a.call(s, t, e)
                     };
                 case 3:
                     return function (t, e, i) {
                         return a.call(s, t, e, i)
                     }
             }
             return function () {
                 return a.apply(s, arguments)
             }
         }
     }, function (t, e, i) {
         "use strict";
         var n = i(3),
             r = i(14),
             o = i(13),
             l = i(25)("src"),
             a = "toString",
             s = Function[a],
             h = ("" + s).split(a);
         i(4).inspectSource = function (t) {
             return s.call(t)
         }, (t.exports = function (t, e, i, a) {
             var s = "function" == typeof i;
             s && (o(i, "name") || r(i, "name", e)), t[e] !== i && (s && (o(i, l) || r(i, l, t[e] ? "" + t[e] : h.join(String(e)))), t === n ? t[e] = i : a ? t[e] ? t[e] = i : r(t, e, i) : (delete t[e], r(t, e, i)))
         })(Function.prototype, a, function () {
             return "function" == typeof this && this[l] || s.call(this)
         })
     }, function (t, e, i) {
         "use strict";
         var a = i(39),
             s = i(36);
         t.exports = function (t) {
             return a(s(t))
         }
     }, function (t, e, i) {
         "use strict";
         t.exports = function (t) {
             if ("function" != typeof t) throw TypeError(t + " is not a function!");
             return t
         }
     }, function (t, e, i) {
         "use strict";
         var a = {}.toString;
         t.exports = function (t) {
             return a.call(t).slice(8, -1)
         }
     }, function (t, e, i) {
         "use strict";
         t.exports = function (t) {
             try {
                 return !!t()
             } catch (t) {
                 return !0
             }
         }
     }, function (t, e, i) {
         "use strict";
         t.exports = {}
     }, function (t, e, i) {
         "use strict";
         t.exports = !1
     }, function (t, e, i) {
         "use strict";
         t.exports = function (t, e) {
             return {
                 enumerable: !(1 & t),
                 configurable: !(2 & t),
                 writable: !(4 & t),
                 value: e
             }
         }
     }, function (t, e, i) {
         "use strict";
         var a = i(44),
             s = Math.min;
         t.exports = function (t) {
             return 0 < t ? s(a(t), 9007199254740991) : 0
         }
     }, function (t, e, i) {
         "use strict";
         var a = 0,
             s = Math.random();
         t.exports = function (t) {
             return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++a + s).toString(36))
         }
     }, function (t, e, i) {
         "use strict";
         var a, s = function () {
                 function a(t, e) {
                     for (var i = 0; i < e.length; i++) {
                         var a = e[i];
                         a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                     }
                 }
                 return function (t, e, i) {
                     return e && a(t.prototype, e), i && a(t, i), t
                 }
             }(),
             n = i(1),
             h = (a = n) && a.__esModule ? a : {
                 default: a
             };
         var r = function () {
             function e(t) {
                 ! function (t, e) {
                     if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                 }(this, e), this.ctx = t, this.w = t.w, this.setEasingFunctions()
             }
             return s(e, [{
                 key: "setEasingFunctions",
                 value: function () {
                     var t = void 0;
                     switch (this.w.config.chart.animations.easing) {
                         case "linear":
                             t = "-";
                             break;
                         case "easein":
                             t = "<";
                             break;
                         case "easeout":
                             t = ">";
                             break;
                         case "easeinout":
                             t = "<>";
                             break;
                         case "swing":
                             t = function (t) {
                                 return (t -= 1) * t * (2.70158 * t + 1.70158) + 1
                             };
                             break;
                         case "bounce":
                             t = function (t) {
                                 return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                             };
                             break;
                         case "elastic":
                             t = function (t) {
                                 return t === !!t ? t : Math.pow(2, -10 * t) * Math.sin((t - .075) * (2 * Math.PI) / .3) + 1
                             };
                             break;
                         default:
                             t = "<>"
                     }
                     this.w.globals.easing = t
                 }
             }, {
                 key: "animateLine",
                 value: function (t, e, i, a) {
                     t.attr(e).animate(a).attr(i)
                 }
             }, {
                 key: "animateCircleRadius",
                 value: function (t, e, i, a, s) {
                     e || (e = 0), t.attr({
                         r: e
                     }).animate(a, s).attr({
                         r: i
                     })
                 }
             }, {
                 key: "animateCircle",
                 value: function (t, e, i, a, s) {
                     t.attr({
                         r: e.r,
                         cx: e.cx,
                         cy: e.cy
                     }).animate(a, s).attr({
                         r: i.r,
                         cx: i.cx,
                         cy: i.cy
                     })
                 }
             }, {
                 key: "animateRect",
                 value: function (t, e, i, a) {
                     t.attr(e).animate(a).attr(i)
                 }
             }, {
                 key: "animatePathsGradually",
                 value: function (t) {
                     var e = t.el,
                         i = t.j,
                         a = t.pathFrom,
                         s = t.pathTo,
                         n = t.speed,
                         r = t.delay,
                         o = t.strokeWidth,
                         l = this.w,
                         h = 0;
                     l.config.chart.animations.animateGradually.enabled && (h = l.config.chart.animations.animateGradually.delay), l.config.chart.animations.dynamicAnimation.enabled && l.globals.dataChanged && (h = 0), this.morphSVG(e, i, a, s, n, o, r * h)
                 }
             }, {
                 key: "showDelayedElements",
                 value: function () {
                     this.w.globals.delayedElements.forEach(function (t) {
                         t.el.classList.remove("hidden")
                     })
                 }
             }, {
                 key: "morphSVG",
                 value: function (t, e, i, a, s, n, r) {
                     var o = this,
                         l = this.w;
                     i || (i = t.attr("pathFrom")), a || (a = t.attr("pathTo")), (-1 < i.indexOf("undefined") || -1 < i.indexOf("NaN")) && (i = "M 0 " + l.globals.gridHeight, s = 1), (-1 < a.indexOf("undefined") || -1 < a.indexOf("NaN")) && (a = "M 0 " + l.globals.gridHeight, s = 1), l.globals.shouldAnimate || (s = 1), t.plot(i).animate(1, l.globals.easing, r).plot(i).animate(s, l.globals.easing, r).plot(a).afterAll(function () {
                         h.default.isNumber(e) ? e === l.globals.series[l.globals.maxValsInArrayIndex].length - 2 && l.globals.shouldAnimate && (l.globals.animationEnded = !0) : l.globals.shouldAnimate && (l.globals.animationEnded = !0, "function" == typeof l.config.chart.events.animationEnd && l.config.chart.events.animationEnd(o.ctx, l)), o.showDelayedElements()
                     })
                 }
             }]), e
         }();
         t.exports = r
     }, function (t, e, i) {
         "use strict";
         var a = function () {
                 function a(t, e) {
                     for (var i = 0; i < e.length; i++) {
                         var a = e[i];
                         a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                     }
                 }
                 return function (t, e, i) {
                     return e && a(t.prototype, e), i && a(t, i), t
                 }
             }(),
             n = s(i(5)),
             d = s(i(0)),
             f = s(i(1));

         function s(t) {
             return t && t.__esModule ? t : {
                 default: t
             }
         }
         var r = function () {
             function i(t, e) {
                 ! function (t, e) {
                     if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                 }(this, i), this.ctx = t, this.w = t.w
             }
             return a(i, [{
                 key: "setGlobalMarkerSize",
                 value: function () {
                     var e = this.w;
                     if (e.globals.markers.size = Array.isArray(e.config.markers.size) ? e.config.markers.size : [e.config.markers.size], 0 < e.globals.markers.size.length) {
                         if (e.globals.markers.size.length < e.globals.series.length + 1)
                             for (var t = 0; t <= e.globals.series.length; t++) void 0 === e.globals.markers.size[t] && e.globals.markers.size.push(e.globals.markers.size[0])
                     } else e.globals.markers.size = e.config.series.map(function (t) {
                         return e.config.markers.size
                     })
                 }
             }, {
                 key: "plotChartMarkers",
                 value: function (t, s, n) {
                     var r = this,
                         o = this.w,
                         l = t,
                         h = null,
                         c = new d.default(this.ctx),
                         u = void 0;
                     if (0 < o.globals.markers.size[s] && (h = c.group({
                             class: "apexcharts-series-markers"
                         })).attr("clip-path", "url(#gridRectMarkerMask" + o.globals.cuid + ")"), l.x instanceof Array)
                         for (var e = function (t) {
                                 var e = n,
                                     i = "apexcharts-marker";
                                 if ("line" !== o.config.chart.type && "area" !== o.config.chart.type || o.globals.comboCharts || o.config.tooltip.intersect || (i += " no-pointer-events"), Array.isArray(o.config.markers.size) ? 0 < o.globals.markers.size[s] : 0 < o.config.markers.size) {
                                     f.default.isNumber(l.y[t]) ? i += " w" + (Math.random() + 1).toString(36).substring(4) : i = "apexcharts-nullpoint";
                                     var a = r.getMarkerConfig(i, s);
                                     o.config.markers.discrete.map(function (t) {
                                         t.seriesIndex === s && t.dataPointIndex === e && (a.pointStrokeColor = t.strokeColor, a.pointFillColor = t.fillColor, a.pSize = t.size)
                                     }), u = c.drawMarker(l.x[t], l.y[t], a), 1 === n && 0 === t && (e = 0), 1 === n && 1 === t && (e = 1), u.attr("rel", e), u.attr("j", e), u.attr("index", s), u.node.setAttribute("default-marker-size", a.pSize), r.setSelectedPointFilter(u, s, e), r.addEvents(u), h && h.add(u)
                                 } else void 0 === o.globals.pointsArray[s] && (o.globals.pointsArray[s] = []), o.globals.pointsArray[s].push([l.x[t], l.y[t]])
                             }, i = 0; i < l.x.length; i++) e(i);
                     return h
                 }
             }, {
                 key: "getMarkerConfig",
                 value: function (t, e) {
                     var i = this.w,
                         a = this.getMarkerStyle(e);
                     return {
                         pSize: i.globals.markers.size[e],
                         pRadius: i.config.markers.radius,
                         pWidth: i.config.markers.strokeWidth,
                         pointStrokeColor: a.pointStrokeColor,
                         pointFillColor: a.pointFillColor,
                         shape: i.config.markers.shape instanceof Array ? i.config.markers.shape[e] : i.config.markers.shape,
                         class: t,
                         pointStrokeOpacity: i.config.markers.strokeOpacity,
                         pointFillOpacity: i.config.markers.fillOpacity,
                         seriesIndex: e
                     }
                 }
             }, {
                 key: "addEvents",
                 value: function (t) {
                     var e = new d.default(this.ctx);
                     t.node.addEventListener("mouseenter", e.pathMouseEnter.bind(this.ctx, t)), t.node.addEventListener("mouseleave", e.pathMouseLeave.bind(this.ctx, t)), t.node.addEventListener("mousedown", e.pathMouseDown.bind(this.ctx, t)), t.node.addEventListener("touchstart", e.pathMouseDown.bind(this.ctx, t), {
                         passive: !0
                     })
                 }
             }, {
                 key: "setSelectedPointFilter",
                 value: function (t, e, i) {
                     var a = this.w;
                     if (void 0 !== a.globals.selectedDataPoints[e] && -1 < a.globals.selectedDataPoints[e].indexOf(i)) {
                         t.node.setAttribute("selected", !0);
                         var s = a.config.states.active.filter;
                         if ("none" !== s) new n.default(this.ctx).applyFilter(t, s.type, s.value)
                     }
                 }
             }, {
                 key: "getMarkerStyle",
                 value: function (t) {
                     var e = this.w,
                         i = e.globals.markers.colors;
                     return {
                         pointStrokeColor: e.config.markers.strokeColor,
                         pointFillColor: i instanceof Array ? i[t] : i
                     }
                 }
             }]), i
         }();
         t.exports = r
     }, function (t, e, i) {
         "use strict";
         Object.defineProperty(e, "__esModule", {
             value: !0
         }), e.default = void 0;
         var a, s = function () {
                 function a(t, e) {
                     for (var i = 0; i < e.length; i++) {
                         var a = e[i];
                         a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                     }
                 }
                 return function (t, e, i) {
                     return e && a(t.prototype, e), i && a(t, i), t
                 }
             }(),
             n = i(0),
             o = (a = n) && a.__esModule ? a : {
                 default: a
             };
         var r = function () {
             function e(t) {
                 ! function (t, e) {
                     if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                 }(this, e), this.ctx = t, this.w = t.w
             }
             return s(e, [{
                 key: "getAllSeriesEls",
                 value: function () {
                     return this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series")
                 }
             }, {
                 key: "getSeriesByName",
                 value: function (t) {
                     return this.w.globals.dom.baseEl.querySelector(".apexcharts-series." + t.toString().replace(/ /g, "-"))
                 }
             }, {
                 key: "addCollapsedClassToSeries",
                 value: function (t, e) {
                     for (var i = this.w, a = 0; a < i.globals.collapsedSeries.length; a++) i.globals.collapsedSeries[a].index === e && t.node.classList.add("apexcharts-series-collapsed")
                 }
             }, {
                 key: "toggleSeriesOnHover",
                 value: function (t, e) {
                     var i = this.w,
                         a = i.globals.dom.baseEl.querySelectorAll(".apexcharts-series");
                     if ("mousemove" === t.type) {
                         var s = parseInt(e.getAttribute("rel")) - 1,
                             n = null;
                         n = i.globals.axisCharts || "radialBar" === i.config.chart.type ? i.globals.axisCharts ? i.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='" + s + "']") : i.globals.dom.baseEl.querySelector(".apexcharts-series[rel='" + (s + 1) + "']") : i.globals.dom.baseEl.querySelector(".apexcharts-series[rel='" + (s + 1) + "'] path");
                         for (var r = 0; r < a.length; r++) a[r].classList.add("legend-mouseover-inactive");
                         null !== n && (i.globals.axisCharts || n.parentNode.classList.remove("legend-mouseover-inactive"), n.classList.remove("legend-mouseover-inactive"))
                     } else if ("mouseout" === t.type)
                         for (var o = 0; o < a.length; o++) a[o].classList.remove("legend-mouseover-inactive")
                 }
             }, {
                 key: "highlightRangeInSeries",
                 value: function (t, e) {
                     var i = this.w,
                         a = i.globals.dom.baseEl.querySelectorAll(".apexcharts-heatmap-rect"),
                         s = function () {
                             for (var t = 0; t < a.length; t++) a[t].classList.remove("legend-mouseover-inactive")
                         };
                     if ("mousemove" === t.type) {
                         var n = parseInt(e.getAttribute("rel")) - 1;
                         s(),
                             function () {
                                 for (var t = 0; t < a.length; t++) a[t].classList.add("legend-mouseover-inactive")
                             }(),
                             function (t) {
                                 for (var e = 0; e < a.length; e++) {
                                     var i = parseInt(a[e].getAttribute("val"));
                                     i >= t.from && i <= t.to && a[e].classList.remove("legend-mouseover-inactive")
                                 }
                             }(i.config.plotOptions.heatmap.colorScale.ranges[n])
                     } else "mouseout" === t.type && s()
                 }
             }, {
                 key: "getActiveSeriesIndex",
                 value: function () {
                     var i = this.w,
                         t = 0;
                     if (1 < i.globals.series.length)
                         for (var e = i.globals.series.map(function (t, e) {
                                 return 0 < t.length && "bar" !== i.config.series[e].type && "column" !== i.config.series[e].type ? e : -1
                             }), a = 0; a < e.length; a++)
                             if (-1 !== e[a]) {
                                 t = e[a];
                                 break
                             } return t
                 }
             }, {
                 key: "getActiveConfigSeriesIndex",
                 value: function () {
                     var t = this.w,
                         e = 0;
                     if (1 < t.config.series.length)
                         for (var i = t.config.series.map(function (t, e) {
                                 return t.data && 0 < t.data.length ? e : -1
                             }), a = 0; a < i.length; a++)
                             if (-1 !== i[a]) {
                                 e = i[a];
                                 break
                             } return e
                 }
             }, {
                 key: "getPreviousPaths",
                 value: function () {
                     var o = this.w;

                     function t(t, e, i) {
                         for (var a = t[e].childNodes, s = {
                                 type: i,
                                 paths: [],
                                 realIndex: t[e].getAttribute("data:realIndex")
                             }, n = 0; n < a.length; n++)
                             if (a[n].hasAttribute("pathTo")) {
                                 var r = a[n].getAttribute("pathTo");
                                 s.paths.push({
                                     d: r
                                 })
                             } o.globals.previousPaths.push(s)
                     }
                     o.globals.previousPaths = [];
                     var e = o.globals.dom.baseEl.querySelectorAll(".apexcharts-line-series .apexcharts-series");
                     if (0 < e.length)
                         for (var i = e.length - 1; 0 <= i; i--) t(e, i, "line");
                     var a = o.globals.dom.baseEl.querySelectorAll(".apexcharts-area-series .apexcharts-series");
                     if (0 < a.length)
                         for (var s = a.length - 1; 0 <= s; s--) t(a, s, "area");
                     var n = o.globals.dom.baseEl.querySelectorAll(".apexcharts-bar-series .apexcharts-series");
                     if (0 < n.length)
                         for (var r = 0; r < n.length; r++) t(n, r, "bar");
                     var l = o.globals.dom.baseEl.querySelectorAll(".apexcharts-candlestick-series .apexcharts-series");
                     if (0 < l.length)
                         for (var h = 0; h < l.length; h++) t(l, h, "candlestick");
                     var c = o.globals.dom.baseEl.querySelectorAll(".apexcharts-radar-series .apexcharts-series");
                     if (0 < c.length)
                         for (var u = 0; u < c.length; u++) t(c, u, "radar");
                     var d = o.globals.dom.baseEl.querySelectorAll(".apexcharts-bubble-series .apexcharts-series");
                     if (0 < d.length)
                         for (var f = 0; f < d.length; f++) {
                             for (var p = o.globals.dom.baseEl.querySelectorAll(".apexcharts-bubble-series .apexcharts-series[data\\:realIndex='" + f + "'] circle"), g = [], x = 0; x < p.length; x++) g.push({
                                 x: p[x].getAttribute("cx"),
                                 y: p[x].getAttribute("cy"),
                                 r: p[x].getAttribute("r")
                             });
                             o.globals.previousPaths.push(g)
                         }
                     var v = o.globals.dom.baseEl.querySelectorAll(".apexcharts-scatter-series .apexcharts-series");
                     if (0 < v.length)
                         for (var b = 0; b < v.length; b++) {
                             for (var m = o.globals.dom.baseEl.querySelectorAll(".apexcharts-scatter-series .apexcharts-series[data\\:realIndex='" + b + "'] circle"), y = [], w = 0; w < m.length; w++) y.push({
                                 x: m[w].getAttribute("cx"),
                                 y: m[w].getAttribute("cy"),
                                 r: m[w].getAttribute("r")
                             });
                             o.globals.previousPaths.push(y)
                         }
                     var k = o.globals.dom.baseEl.querySelectorAll(".apexcharts-heatmap .apexcharts-series");
                     if (0 < k.length)
                         for (var S = 0; S < k.length; S++) {
                             for (var A = o.globals.dom.baseEl.querySelectorAll(".apexcharts-heatmap .apexcharts-series[data\\:realIndex='" + S + "'] rect"), C = [], P = 0; P < A.length; P++) C.push({
                                 color: A[P].getAttribute("color")
                             });
                             o.globals.previousPaths.push(C)
                         }
                     o.globals.axisCharts || (o.globals.previousPaths = o.globals.series)
                 }
             }, {
                 key: "handleNoData",
                 value: function () {
                     var t = this.w,
                         e = t.config.noData,
                         i = new o.default(this.ctx),
                         a = t.globals.svgWidth / 2,
                         s = t.globals.svgHeight / 2,
                         n = "middle";
                     if (t.globals.noData = !0, "left" === e.align ? (a = 10, n = "start") : "right" === e.align && (a = t.globals.svgWidth - 10, n = "end"), "top" === e.verticalAlign ? s = 50 : "bottom" === e.verticalAlign && (s = t.globals.svgHeight - 50), a += e.offsetX, s = s + parseInt(e.style.fontSize) + 2, void 0 !== e.text && "" !== e.text) {
                         var r = i.drawText({
                             x: a,
                             y: s,
                             text: e.text,
                             textAnchor: n,
                             fontSize: e.style.fontSize,
                             fontFamily: e.style.fontFamily,
                             foreColor: e.style.color,
                             opacity: 1,
                             class: "apexcharts-text-nodata"
                         });
                         r.node.setAttribute("class", "apexcharts-title-text"), t.globals.dom.Paper.add(r)
                     }
                 }
             }, {
                 key: "setNullSeriesToZeroValues",
                 value: function (t) {
                     for (var e = this.w, i = 0; i < t.length; i++)
                         if (0 === t[i].length)
                             for (var a = 0; a < t[e.globals.maxValsInArrayIndex].length; a++) t[i].push(0);
                     return t
                 }
             }, {
                 key: "hasAllSeriesEqualX",
                 value: function () {
                     for (var t = !0, e = this.w, i = this.filteredSeriesX(), a = 0; a < i.length - 1; a++)
                         if (i[a][0] !== i[a + 1][0]) {
                             t = !1;
                             break
                         } return e.globals.allSeriesHasEqualX = t
                 }
             }, {
                 key: "filteredSeriesX",
                 value: function () {
                     var t = this.w.globals.seriesX.map(function (t, e) {
                         return 0 < t.length ? t : []
                     });
                     return t
                 }
             }]), e
         }();
         e.default = r
     }, function (t, e, i) {
         "use strict";
         var a = i(65),
             s = i(38);
         t.exports = Object.keys || function (t) {
             return a(t, s)
         }
     }, function (t, e, i) {
         "use strict";
         var a = i(10).f,
             s = i(13),
             n = i(2)("toStringTag");
         t.exports = function (t, e, i) {
             t && !s(t = i ? t : t.prototype, n) && a(t, n, {
                 configurable: !0,
                 value: e
             })
         }
     }, function (t, e, i) {
         "use strict";
         var a = i(36);
         t.exports = function (t) {
             return Object(a(t))
         }
     }, function (t, e, i) {
         "use strict";
         Object.defineProperty(e, "__esModule", {
             value: !0
         });
         var a = function () {
                 function a(t, e) {
                     for (var i = 0; i < e.length; i++) {
                         var a = e[i];
                         a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                     }
                 }
                 return function (t, e, i) {
                     return e && a(t.prototype, e), i && a(t, i), t
                 }
             }(),
             f = s(i(75)),
             x = s(i(0)),
             v = s(i(5));

         function s(t) {
             return t && t.__esModule ? t : {
                 default: t
             }
         }
         var n = function () {
             function e(t) {
                 ! function (t, e) {
                     if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                 }(this, e), this.ctx = t, this.w = t.w
             }
             return a(e, [{
                 key: "dataLabelsCorrection",
                 value: function (t, e, i, a, s, n, r) {
                     var o = this.w,
                         l = !1,
                         h = new x.default(this.ctx).getTextRects(i, r),
                         c = h.width,
                         u = h.height;
                     void 0 === o.globals.dataLabelsRects[a] && (o.globals.dataLabelsRects[a] = []), o.globals.dataLabelsRects[a].push({
                         x: t,
                         y: e,
                         width: c,
                         height: u
                     });
                     var d = o.globals.dataLabelsRects[a].length - 2,
                         f = void 0 !== o.globals.lastDrawnDataLabelsIndexes[a] ? o.globals.lastDrawnDataLabelsIndexes[a][o.globals.lastDrawnDataLabelsIndexes[a].length - 1] : 0;
                     if (void 0 !== o.globals.dataLabelsRects[a][d]) {
                         var p = o.globals.dataLabelsRects[a][f];
                         (t > p.x + p.width + 2 || e > p.y + p.height + 2 || t + c < p.x) && (l = !0)
                     }
                     return (0 === s || n) && (l = !0), {
                         x: t,
                         y: e,
                         drawnextLabel: l
                     }
                 }
             }, {
                 key: "drawDataLabel",
                 value: function (t, e, i) {
                     3 < arguments.length && void 0 !== arguments[3] && arguments[3];
                     var a = this.w,
                         s = new x.default(this.ctx),
                         n = a.config.dataLabels,
                         r = 0,
                         o = 0,
                         l = i,
                         h = null;
                     if (!n.enabled || t.x instanceof Array != !0) return h;
                     h = s.group({
                         class: "apexcharts-data-labels"
                     });
                     for (var c = 0; c < t.x.length; c++)
                         if (r = t.x[c] + n.offsetX, o = t.y[c] + n.offsetY - a.globals.markers.size[e] - 5, !isNaN(r)) {
                             1 === i && 0 === c && (l = 0), 1 === i && 1 === c && (l = 1);
                             var u = a.globals.series[e][l],
                                 d = "";
                             if ("bubble" === a.config.chart.type) d = a.globals.seriesZ[e][l], o = t.y[c] + a.config.dataLabels.offsetY, o = new f.default(this.ctx).centerTextInBubble(o, e, l).y;
                             else void 0 !== u && (d = a.config.dataLabels.formatter(u, {
                                 seriesIndex: e,
                                 dataPointIndex: l,
                                 w: a
                             }));
                             this.plotDataLabelsText({
                                 x: r,
                                 y: o,
                                 text: d,
                                 i: e,
                                 j: l,
                                 parent: h,
                                 offsetCorrection: !0,
                                 dataLabelsConfig: a.config.dataLabels
                             })
                         } return h
                 }
             }, {
                 key: "plotDataLabelsText",
                 value: function (t) {
                     var e = this.w,
                         i = new x.default(this.ctx),
                         a = t.x,
                         s = t.y,
                         n = t.i,
                         r = t.j,
                         o = t.text,
                         l = t.textAnchor,
                         h = t.parent,
                         c = t.dataLabelsConfig,
                         u = t.alwaysDrawDataLabel,
                         d = t.offsetCorrection,
                         f = {
                             x: a,
                             y: s,
                             drawnextLabel: !0
                         };
                     if (d && (f = this.dataLabelsCorrection(a, s, o, n, r, u, parseInt(c.style.fontSize))), e.globals.zoomed || (a = f.x, s = f.y), f.drawnextLabel) {
                         var p = i.drawText({
                             width: 100,
                             height: parseInt(c.style.fontSize),
                             x: a,
                             y: s,
                             foreColor: e.globals.dataLabels.style.colors[n],
                             textAnchor: l || c.textAnchor,
                             text: o,
                             fontSize: c.style.fontSize,
                             fontFamily: c.style.fontFamily
                         });
                         if (p.attr({
                                 class: "apexcharts-datalabel",
                                 cx: a,
                                 cy: s
                             }), d && p.attr({
                                 "clip-path": "url(#gridRectMask" + e.globals.cuid + ")"
                             }), c.dropShadow.enabled) {
                             var g = c.dropShadow;
                             new v.default(this.ctx).dropShadow(p, g)
                         }
                         h.add(p), void 0 === e.globals.lastDrawnDataLabelsIndexes[n] && (e.globals.lastDrawnDataLabelsIndexes[n] = []), e.globals.lastDrawnDataLabelsIndexes[n].push(r)
                     }
                 }
             }]), e
         }();
         e.default = n
     }, function (t, e, i) {
         "use strict";
         Object.defineProperty(e, "__esModule", {
             value: !0
         });
         var a = function () {
                 function a(t, e) {
                     for (var i = 0; i < e.length; i++) {
                         var a = e[i];
                         a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                     }
                 }
                 return function (t, e, i) {
                     return e && a(t.prototype, e), i && a(t, i), t
                 }
             }(),
             s = r(i(53)),
             n = r(i(1));

         function r(t) {
             return t && t.__esModule ? t : {
                 default: t
             }
         }
         var o = function () {
             function e(t) {
                 ! function (t, e) {
                     if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                 }(this, e), this.ctx = t, this.w = t.w, this.tooltipKeyFormat = "dd MMM"
             }
             return a(e, [{
                 key: "xLabelFormat",
                 value: function (t, e) {
                     var i = this.w;
                     if ("datetime" === i.config.xaxis.type && void 0 === i.config.tooltip.x.formatter) return new s.default(this.ctx).formatDate(new Date(e), i.config.tooltip.x.format, !0, !0);
                     return t(e)
                 }
             }, {
                 key: "setLabelFormatters",
                 value: function () {
                     var i = this.w;
                     return i.globals.xLabelFormatter = function (t) {
                         return t
                     }, i.globals.xaxisTooltipFormatter = function (t) {
                         return t
                     }, i.globals.ttKeyFormatter = function (t) {
                         return t
                     }, i.globals.ttZFormatter = function (t) {
                         return t
                     }, i.globals.legendFormatter = function (t) {
                         return t
                     }, "function" == typeof i.config.tooltip.x.formatter && (i.globals.ttKeyFormatter = i.config.tooltip.x.formatter), "function" == typeof i.config.xaxis.tooltip.formatter && (i.globals.xaxisTooltipFormatter = i.config.xaxis.tooltip.formatter), Array.isArray(i.config.tooltip.y) ? i.globals.ttVal = i.config.tooltip.y : void 0 !== i.config.tooltip.y.formatter && (i.globals.ttVal = i.config.tooltip.y), void 0 !== i.config.tooltip.z.formatter && (i.globals.ttZFormatter = i.config.tooltip.z.formatter), void 0 !== i.config.legend.formatter && (i.globals.legendFormatter = i.config.legend.formatter), void 0 !== i.config.xaxis.labels.formatter ? i.globals.xLabelFormatter = i.config.xaxis.labels.formatter : i.globals.xLabelFormatter = function (t) {
                         return n.default.isNumber(t) ? "numeric" === i.config.xaxis.type && i.globals.dataPoints < 50 ? t.toFixed(1) : t.toFixed(0) : t
                     }, i.config.yaxis.forEach(function (e, t) {
                         void 0 !== e.labels.formatter ? i.globals.yLabelFormatters[t] = e.labels.formatter : i.globals.yLabelFormatters[t] = function (t) {
                             return n.default.isNumber(t) ? 0 !== i.globals.yValueDecimal ? t.toFixed(e.decimalsInFloat) : t.toFixed(0) : t
                         }
                     }), i.globals
                 }
             }, {
                 key: "heatmapLabelFormatters",
                 value: function () {
                     var t = this.w;
                     if ("heatmap" === t.config.chart.type) {
                         t.globals.yAxisScale[0].result = t.globals.seriesNames.slice();
                         var e = t.globals.seriesNames.reduce(function (t, e) {
                             return t.length > e.length ? t : e
                         }, 0);
                         t.globals.yAxisScale[0].niceMax = e, t.globals.yAxisScale[0].niceMin = e
                     }
                 }
             }]), e
         }();
         e.default = o
     }, function (t, e, i) {
         "use strict";
         var a = i(2)("unscopables"),
             s = Array.prototype;
         null == s[a] && i(14)(s, a, {}), t.exports = function (t) {
             s[a][t] = !0
         }
     }, function (t, e, i) {
         "use strict";
         var s = i(19),
             n = i(2)("toStringTag"),
             r = "Arguments" == s(function () {
                 return arguments
             }());
         t.exports = function (t) {
             var e, i, a;
             return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (i = function (t, e) {
                 try {
                     return t[e]
                 } catch (t) {}
             }(e = Object(t), n)) ? i : r ? s(e) : "Object" == (a = s(e)) && "function" == typeof e.callee ? "Arguments" : a
         }
     }, function (t, e, i) {
         "use strict";
         t.exports = function (t) {
             if (null == t) throw TypeError("Can't call method on  " + t);
             return t
         }
     }, function (t, e, i) {
         "use strict";
         var a = i(9),
             s = i(3).document,
             n = a(s) && a(s.createElement);
         t.exports = function (t) {
             return n ? s.createElement(t) : {}
         }
     }, function (t, e, i) {
         "use strict";
         t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
     }, function (t, e, i) {
         "use strict";
         var a = i(19);
         t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
             return "String" == a(t) ? t.split("") : Object(t)
         }
     }, function (t, e, i) {
         "use strict";
         var s = i(18);

         function a(t) {
             var i, a;
             this.promise = new t(function (t, e) {
                 if (void 0 !== i || void 0 !== a) throw TypeError("Bad Promise constructor");
                 i = t, a = e
             }), this.resolve = s(i), this.reject = s(a)
         }
         t.exports.f = function (t) {
             return new a(t)
         }
     }, function (t, e, i) {
         "use strict";
         e.f = {}.propertyIsEnumerable
     }, function (t, e, i) {
         "use strict";
         var a = i(43)("keys"),
             s = i(25);
         t.exports = function (t) {
             return a[t] || (a[t] = s(t))
         }
     }, function (t, e, i) {
         "use strict";
         var a = i(4),
             s = i(3),
             n = "__core-js_shared__",
             r = s[n] || (s[n] = {});
         (t.exports = function (t, e) {
             return r[t] || (r[t] = void 0 !== e ? e : {})
         })("versions", []).push({
             version: a.version,
             mode: i(22) ? "pure" : "global",
             copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
         })
     }, function (t, e, i) {
         "use strict";
         var a = Math.ceil,
             s = Math.floor;
         t.exports = function (t) {
             return isNaN(t = +t) ? 0 : (0 < t ? s : a)(t)
         }
     }, function (t, e, i) {
         "use strict";
         var s = i(9);
         t.exports = function (t, e) {
             if (!s(t)) return t;
             var i, a;
             if (e && "function" == typeof (i = t.toString) && !s(a = i.call(t))) return a;
             if ("function" == typeof (i = t.valueOf) && !s(a = i.call(t))) return a;
             if (!e && "function" == typeof (i = t.toString) && !s(a = i.call(t))) return a;
             throw TypeError("Can't convert object to primitive value")
         }
     }, function (t, e, i) {
         "use strict";
         var a = i(3),
             s = i(4),
             n = i(22),
             r = i(70),
             o = i(10).f;
         t.exports = function (t) {
             var e = s.Symbol || (s.Symbol = n ? {} : a.Symbol || {});
             "_" == t.charAt(0) || t in e || o(e, t, {
                 value: r.f(t)
             })
         }
     }, function (t, e, i) {
         "use strict";
         Object.defineProperty(e, "__esModule", {
             value: !0
         });
         var s = function () {
                 function a(t, e) {
                     for (var i = 0; i < e.length; i++) {
                         var a = e[i];
                         a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                     }
                 }
                 return function (t, e, i) {
                     return e && a(t.prototype, e), i && a(t, i), t
                 }
             }(),
             r = a(i(7)),
             o = a(i(11)),
             n = a(i(5)),
             E = a(i(0)),
             p = a(i(32));

         function a(t) {
             return t && t.__esModule ? t : {
                 default: t
             }
         }
         var l = function () {
             function a(t, e) {
                 ! function (t, e) {
                     if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                 }(this, a), this.ctx = t, this.w = t.w;
                 var i = this.w;
                 this.barOptions = i.config.plotOptions.bar, this.isHorizontal = this.barOptions.horizontal, this.strokeWidth = i.config.stroke.width, this.isNullValue = !1, this.xyRatios = e, null !== this.xyRatios && (this.xRatio = e.xRatio, this.yRatio = e.yRatio, this.invertedXRatio = e.invertedXRatio, this.invertedYRatio = e.invertedYRatio, this.baseLineY = e.baseLineY, this.baseLineInvertedY = e.baseLineInvertedY), this.minXDiff = Number.MAX_SAFE_INTEGER, this.yaxisIndex = 0, this.seriesLen = 0
             }
             return s(a, [{
                 key: "draw",
                 value: function (A, s) {
                     var C = this,
                         P = this.w,
                         n = new E.default(this.ctx),
                         M = new o.default(this.ctx),
                         t = new r.default(this.ctx, P);
                     this.series = t.getLogSeries(A), A = this.series, this.yRatio = t.getLogYRatios(this.yRatio), this.initVariables(A);
                     var L = n.group({
                         class: "apexcharts-bar-series apexcharts-plot-series"
                     });
                     L.attr("clip-path", "url(#gridRectMask" + P.globals.cuid + ")");
                     for (var e = function (r, o) {
                             var l, h, c, u, d = void 0,
                                 f = void 0,
                                 p = void 0,
                                 g = void 0,
                                 x = [],
                                 v = [],
                                 b = P.globals.comboCharts ? s[r] : r,
                                 m = n.group({
                                     class: "apexcharts-series " + P.globals.seriesNames[b].toString().replace(/ /g, "-"),
                                     rel: r + 1,
                                     "data:realIndex": b
                                 });
                             C.ctx.series.addCollapsedClassToSeries(m, b), 0 < A[r].length && (C.visibleI = C.visibleI + 1);
                             var y, w, k = 0;
                             1 < C.yRatio.length && (C.yaxisIndex = b);
                             var t = C.initialPositions();
                             g = t.y, y = t.barHeight, h = t.yDivision, u = t.zeroW, p = t.x, w = t.barWidth, l = t.xDivision, c = t.zeroH, C.horizontal || v.push(p + w / 2);
                             for (var S = n.group({
                                     class: "apexcharts-datalabels"
                                 }), e = function (e, t) {
                                     void 0 === C.series[r][e] || null === A[r][e] ? C.isNullValue = !0 : C.isNullValue = !1, P.config.stroke.show && (k = C.isNullValue ? 0 : Array.isArray(C.strokeWidth) ? C.strokeWidth[b] : C.strokeWidth);
                                     var i = null;
                                     i = C.isHorizontal ? C.drawBarPaths({
                                         indexes: {
                                             i: r,
                                             j: e,
                                             realIndex: b,
                                             bc: o
                                         },
                                         barHeight: y,
                                         strokeWidth: k,
                                         pathTo: d,
                                         pathFrom: f,
                                         zeroW: u,
                                         x: p,
                                         y: g,
                                         yDivision: h,
                                         elSeries: m
                                     }) : C.drawColumnPaths({
                                         indexes: {
                                             i: r,
                                             j: e,
                                             realIndex: b,
                                             bc: o
                                         },
                                         x: p,
                                         y: g,
                                         xDivision: l,
                                         pathTo: d,
                                         pathFrom: f,
                                         barWidth: w,
                                         zeroH: c,
                                         strokeWidth: k,
                                         elSeries: m
                                     }), d = i.pathTo, f = i.pathFrom, g = i.y, p = i.x, 0 < e && v.push(p + w / 2), x.push(g);
                                     var a = C.barOptions.distributed ? e : r,
                                         s = null;
                                     0 < C.barOptions.colors.ranges.length && C.barOptions.colors.ranges.map(function (t) {
                                         A[r][e] >= t.from && A[r][e] <= t.to && (s = t.color)
                                     });
                                     var n = M.fillPath(m, {
                                         seriesNumber: C.barOptions.distributed ? a : b,
                                         color: s
                                     });
                                     m = C.renderSeries({
                                         realIndex: b,
                                         pathFill: n,
                                         j: e,
                                         i: r,
                                         pathFrom: f,
                                         pathTo: d,
                                         strokeWidth: k,
                                         elSeries: m,
                                         x: p,
                                         y: g,
                                         series: A,
                                         barHeight: y,
                                         barWidth: w,
                                         elDataLabelsWrap: S,
                                         visibleSeries: C.visibleI,
                                         type: "bar"
                                     })
                                 }, i = 0, a = P.globals.dataPoints; i < P.globals.dataPoints; i++, a--) e(i);
                             P.globals.seriesXvalues[b] = v, P.globals.seriesYvalues[b] = x, L.add(m)
                         }, i = 0, a = 0; i < A.length; i++, a++) e(i, a);
                     return L
                 }
             }, {
                 key: "renderSeries",
                 value: function (t) {
                     var e = t.realIndex,
                         i = t.pathFill,
                         a = t.lineFill,
                         s = t.j,
                         n = t.i,
                         r = t.pathFrom,
                         o = t.pathTo,
                         l = t.strokeWidth,
                         h = t.elSeries,
                         c = t.x,
                         u = t.y,
                         d = t.series,
                         f = t.barHeight,
                         p = t.barWidth,
                         g = t.elDataLabelsWrap,
                         x = t.visibleSeries,
                         v = t.type,
                         b = this.w,
                         m = new E.default(this.ctx);
                     a || (a = b.globals.stroke.colors[e]), this.isNullValue && (i = "none");
                     var y = s / b.config.chart.animations.animateGradually.delay * (b.config.chart.animations.speed / b.globals.dataPoints) / 2.4,
                         w = m.renderPaths({
                             i: n,
                             j: s,
                             realIndex: e,
                             pathFrom: r,
                             pathTo: o,
                             stroke: a,
                             strokeWidth: l,
                             strokeLineCap: b.config.stroke.lineCap,
                             fill: i,
                             animationDelay: y,
                             initialSpeed: b.config.chart.animations.speed,
                             dataChangeSpeed: b.config.chart.animations.dynamicAnimation.speed,
                             className: "apexcharts-" + v + "-area",
                             id: "apexcharts-" + v + "-area"
                         });
                     this.setSelectedBarFilter(w, e, s), h.add(w);
                     var k = this.calculateDataLabelsPos({
                         x: c,
                         y: u,
                         i: n,
                         j: s,
                         series: d,
                         realIndex: e,
                         barHeight: f,
                         barWidth: p,
                         renderedPath: w,
                         visibleSeries: x
                     });
                     return null !== k && g.add(k), h.add(g), h
                 }
             }, {
                 key: "initVariables",
                 value: function (t) {
                     var s = this,
                         n = this.w;
                     this.series = t, this.totalItems = 0, this.seriesLen = 0, this.visibleI = -1, this.visibleItems = 1;
                     for (var e = 0; e < t.length; e++)
                         if (0 < t[e].length && (this.seriesLen = this.seriesLen + 1, this.totalItems += t[e].length), n.globals.isXNumeric) {
                             n.globals.seriesX.forEach(function (t, a) {
                                 t.forEach(function (t, e) {
                                     if (0 < e) {
                                         var i = t - n.globals.seriesX[a][e - 1];
                                         s.minXDiff = Math.min(i, s.minXDiff)
                                     }
                                 })
                             });
                             for (var i = 0; i < t[e].length; i++) n.globals.seriesX[e][i] > n.globals.minX && n.globals.seriesX[e][i] < n.globals.maxX && this.visibleItems++
                         } else this.visibleItems = n.globals.dataPoints;
                     0 === this.seriesLen && (this.seriesLen = 1)
                 }
             }, {
                 key: "initialPositions",
                 value: function () {
                     var t = this.w,
                         e = void 0,
                         i = void 0,
                         a = void 0,
                         s = void 0,
                         n = void 0,
                         r = void 0,
                         o = void 0,
                         l = void 0;
                     return this.isHorizontal ? (n = (a = t.globals.gridHeight / t.globals.dataPoints) / this.seriesLen, t.globals.isXNumeric && (n = (a = t.globals.gridHeight / this.totalItems) / this.seriesLen), n = n * parseInt(this.barOptions.barHeight) / 100, l = this.baseLineInvertedY + t.globals.padHorizontal, i = (a - n * this.seriesLen) / 2) : (r = (s = t.globals.gridWidth / this.visibleItems) / this.seriesLen * parseInt(this.barOptions.columnWidth) / 100, t.globals.isXNumeric && (r = (s = this.minXDiff / this.xRatio) / this.seriesLen * parseInt(this.barOptions.columnWidth) / 100), o = t.globals.gridHeight - this.baseLineY[this.yaxisIndex], e = t.globals.padHorizontal + (s - r * this.seriesLen) / 2), {
                         x: e,
                         y: i,
                         yDivision: a,
                         xDivision: s,
                         barHeight: n,
                         barWidth: r,
                         zeroH: o,
                         zeroW: l
                     }
                 }
             }, {
                 key: "drawBarPaths",
                 value: function (t) {
                     var e = t.indexes,
                         i = t.barHeight,
                         a = t.strokeWidth,
                         s = t.pathTo,
                         n = t.pathFrom,
                         r = t.zeroW,
                         o = t.x,
                         l = t.y,
                         h = t.yDivision,
                         c = t.elSeries,
                         u = this.w,
                         d = new E.default(this.ctx),
                         f = e.i,
                         p = e.j,
                         g = e.realIndex,
                         x = e.bc;
                     u.globals.isXNumeric && (l = (u.globals.seriesX[f][p] - u.globals.minX) / this.invertedXRatio - i);
                     var v = l + i * this.visibleI;
                     s = d.move(r, v), n = d.move(r, v), 0 < u.globals.previousPaths.length && (n = this.getPathFrom(g, p, !0));
                     var b = {
                             barHeight: i,
                             strokeWidth: a,
                             barYPosition: v,
                             x: o = void 0 === this.series[f][p] || null === this.series[f][p] ? r : r + this.series[f][p] / this.invertedYRatio,
                             zeroW: r
                         },
                         m = this.barEndingShape(u, b, this.series, f, p);
                     if (s = s + d.line(m.newX, v) + m.path + d.line(r, v + i - a) + d.line(r, v), n = n + d.line(r, v) + m.ending_p_from + d.line(r, v + i - a) + d.line(r, v + i - a) + d.line(r, v), u.globals.isXNumeric || (l += h), 0 < this.barOptions.colors.backgroundBarColors.length && 0 === f) {
                         x >= this.barOptions.colors.backgroundBarColors.length && (x = 0);
                         var y = this.barOptions.colors.backgroundBarColors[x],
                             w = d.drawRect(0, v - i * this.visibleI, u.globals.gridWidth, i * this.seriesLen, 0, y, this.barOptions.colors.backgroundBarOpacity);
                         c.add(w), w.node.classList.add("apexcharts-backgroundBar")
                     }
                     return {
                         pathTo: s,
                         pathFrom: n,
                         x: o,
                         y: l,
                         barYPosition: v
                     }
                 }
             }, {
                 key: "drawColumnPaths",
                 value: function (t) {
                     var e = t.indexes,
                         i = t.x,
                         a = t.y,
                         s = t.xDivision,
                         n = t.pathTo,
                         r = t.pathFrom,
                         o = t.barWidth,
                         l = t.zeroH,
                         h = t.strokeWidth,
                         c = t.elSeries,
                         u = this.w,
                         d = new E.default(this.ctx),
                         f = e.i,
                         p = e.j,
                         g = e.realIndex,
                         x = e.bc;
                     u.globals.isXNumeric && (i = (u.globals.seriesX[f][p] - u.globals.minX) / this.xRatio - o / 2);
                     var v = i + o * this.visibleI;
                     n = d.move(v, l), r = d.move(v, l), 0 < u.globals.previousPaths.length && (r = this.getPathFrom(g, p, !0));
                     var b = {
                             barWidth: o,
                             strokeWidth: h,
                             barXPosition: v,
                             y: a = void 0 === this.series[f][p] || null === this.series[f][p] ? l : l - this.series[f][p] / this.yRatio[this.yaxisIndex],
                             zeroH: l
                         },
                         m = this.barEndingShape(u, b, this.series, f, p);
                     if (n = n + d.line(v, m.newY) + m.path + d.line(v + o - h, l) + d.line(v, l), r = r + d.line(v, l) + m.ending_p_from + d.line(v + o - h, l) + d.line(v + o - h, l) + d.line(v, l), u.globals.isXNumeric || (i += s), 0 < this.barOptions.colors.backgroundBarColors.length && 0 === f) {
                         x >= this.barOptions.colors.backgroundBarColors.length && (x = 0);
                         var y = this.barOptions.colors.backgroundBarColors[x],
                             w = d.drawRect(v - o * this.visibleI, 0, o * this.seriesLen, u.globals.gridHeight, 0, y, this.barOptions.colors.backgroundBarOpacity);
                         c.add(w), w.node.classList.add("apexcharts-backgroundBar")
                     }
                     return {
                         pathTo: n,
                         pathFrom: r,
                         x: i,
                         y: a,
                         barXPosition: v
                     }
                 }
             }, {
                 key: "getPathFrom",
                 value: function (t, e) {
                     2 < arguments.length && void 0 !== arguments[2] && arguments[2];
                     for (var i = this.w, a = void 0, s = 0; s < i.globals.previousPaths.length; s++) {
                         var n = i.globals.previousPaths[s];
                         0 < n.paths.length && parseInt(n.realIndex) === parseInt(t) && void 0 !== i.globals.previousPaths[s].paths[e] && (a = i.globals.previousPaths[s].paths[e].d)
                     }
                     return a
                 }
             }, {
                 key: "calculateDataLabelsPos",
                 value: function (t) {
                     var e = t.x,
                         i = t.y,
                         a = t.i,
                         s = t.j,
                         n = t.realIndex,
                         r = t.series,
                         o = t.barHeight,
                         l = t.barWidth,
                         h = t.visibleSeries,
                         c = t.renderedPath,
                         u = this.w,
                         d = new E.default(this.ctx),
                         f = Array.isArray(this.strokeWidth) ? this.strokeWidth[n] : this.strokeWidth,
                         p = e + parseFloat(l * h),
                         g = i + parseFloat(o * h);
                     u.globals.isXNumeric && (p = e + parseFloat(l * (h + 1)) - f, g = i + parseFloat(o * (h + 1)) - f);
                     var x = e,
                         v = i,
                         b = {},
                         m = u.config.dataLabels,
                         y = this.barOptions.dataLabels,
                         w = m.offsetX,
                         k = m.offsetY,
                         S = d.getTextRects(u.globals.yLabelFormatters[0](u.globals.maxY), parseInt(m.style.fontSize));
                     return b = this.isHorizontal ? this.calculateBarsDataLabelsPosition({
                         x: e,
                         y: i,
                         i: a,
                         j: s,
                         bcy: g,
                         barHeight: o,
                         textRects: S,
                         strokeWidth: f,
                         dataLabelsX: x,
                         dataLabelsY: v,
                         barDataLabelsConfig: y,
                         offX: w,
                         offY: k
                     }) : this.calculateColumnsDataLabelsPosition({
                         x: e,
                         y: i,
                         i: a,
                         j: s,
                         realIndex: n,
                         bcx: p,
                         bcy: g,
                         barHeight: o,
                         barWidth: l,
                         textRects: S,
                         strokeWidth: f,
                         dataLabelsY: v,
                         barDataLabelsConfig: y,
                         offX: w,
                         offY: k
                     }), c.attr({
                         cy: b.bcy,
                         cx: b.bcx,
                         j: s,
                         val: r[a][s],
                         barHeight: o,
                         barWidth: l
                     }), this.drawCalculatedDataLabels({
                         x: b.dataLabelsX,
                         y: b.dataLabelsY,
                         val: r[a][s],
                         i: n,
                         j: s,
                         dataLabelsConfig: m
                     })
                 }
             }, {
                 key: "calculateColumnsDataLabelsPosition",
                 value: function (t) {
                     var e = this.w,
                         i = t.i,
                         a = t.j,
                         s = t.realIndex,
                         n = t.y,
                         r = t.bcx,
                         o = t.barWidth,
                         l = t.textRects,
                         h = t.dataLabelsY,
                         c = t.barDataLabelsConfig,
                         u = t.strokeWidth,
                         d = t.offX,
                         f = t.offY,
                         p = void 0,
                         g = this.series[i][a] / this.yRatio[this.yaxisIndex],
                         x = e.globals.gridWidth / e.globals.dataPoints;
                     r -= u / 2, p = e.globals.isXNumeric ? r - o / 2 + d : r - x + o / 2 + d;
                     var v = !!(e.globals.gridHeight - this.baseLineY[this.yaxisIndex] < n && 0 !== Math.abs(this.baseLineY[this.yaxisIndex])),
                         b = 0 !== Math.abs(e.globals.minYArr[s]);
                     switch (c.position) {
                         case "center":
                             h = n + g / 2 + l.height / 2 - f, b && (h = v ? n + g / 2 + l.height / 2 + f : n + g / 2 + l.height / 2 - f);
                             break;
                         case "bottom":
                             h = b ? v ? n + g + l.height + u + f : n + g - l.height / 2 + u - f : e.globals.gridHeight - l.height / 2 - f;
                             break;
                         case "top":
                             h = b && v ? n - l.height / 2 - f : n + l.height + f
                     }
                     return {
                         bcx: r,
                         bcy: n,
                         dataLabelsX: p,
                         dataLabelsY: h
                     }
                 }
             }, {
                 key: "calculateBarsDataLabelsPosition",
                 value: function (t) {
                     var e = this.w,
                         i = t.x,
                         a = t.i,
                         s = t.j,
                         n = t.bcy,
                         r = t.barHeight,
                         o = t.textRects,
                         l = t.dataLabelsX,
                         h = t.strokeWidth,
                         c = t.barDataLabelsConfig,
                         u = t.offX,
                         d = t.offY,
                         f = n - e.globals.gridHeight / e.globals.dataPoints + r / 2 + o.height / 2 + d - 3,
                         p = this.series[a][s] / this.invertedYRatio,
                         g = this.series[a][s] <= 0,
                         x = 0 !== Math.abs(e.globals.minY);
                     switch (c.position) {
                         case "center":
                             l = i - p / 2 + u, x && (l = g ? i - p / 2 - u : i - p / 2 + u);
                             break;
                         case "bottom":
                             l = x && g ? i - p - h - Math.round(o.width / 2) - u : i - p + h + Math.round(o.width / 2) + u;
                             break;
                         case "top":
                             l = x ? g ? i - h + Math.round(o.width / 2) - u : i - h - Math.round(o.width / 2) + u : i + h - Math.round(o.width / 2) + u
                     }
                     return l < 0 ? l = o.width + h : l + o.width / 2 > e.globals.gridWidth && (l = l - o.width - h), {
                         bcx: i,
                         bcy: n,
                         dataLabelsX: l,
                         dataLabelsY: f
                     }
                 }
             }, {
                 key: "drawCalculatedDataLabels",
                 value: function (t) {
                     var e = t.x,
                         i = t.y,
                         a = t.val,
                         s = t.i,
                         n = t.j,
                         r = t.dataLabelsConfig,
                         o = this.w,
                         l = new p.default(this.ctx),
                         h = new E.default(this.ctx),
                         c = r.formatter,
                         u = null,
                         d = -1 < o.globals.collapsedSeriesIndices.indexOf(s);
                     if (r.enabled && !d) {
                         u = h.group({
                             class: "apexcharts-data-labels"
                         });
                         var f = "";
                         null != a && (f = c(a, {
                             seriesIndex: s,
                             dataPointIndex: n,
                             w: o
                         })), l.plotDataLabelsText({
                             x: e,
                             y: i,
                             text: f,
                             i: s,
                             j: n,
                             parent: u,
                             dataLabelsConfig: r,
                             alwaysDrawDataLabel: !0,
                             offsetCorrection: !0
                         })
                     }
                     return u
                 }
             }, {
                 key: "barEndingShape",
                 value: function (t, e, i, a, s) {
                     var n = new E.default(this.ctx);
                     if (this.isHorizontal) {
                         var r = null,
                             o = "",
                             l = e.x;
                         if (void 0 !== i[a][s] || null !== i[a][s]) {
                             var h = i[a][s] < 0,
                                 c = e.barHeight / 2 - e.strokeWidth;
                             switch (h && (c = -e.barHeight / 2 - e.strokeWidth), t.config.chart.stacked || ("arrow" === this.barOptions.endingShape ? l = e.x - c : "rounded" === this.barOptions.endingShape && (l = e.x - c / 2)), this.barOptions.endingShape) {
                                 case "flat":
                                     r = n.line(l, e.barYPosition + e.barHeight - e.strokeWidth);
                                     break;
                                 case "arrow":
                                     r = n.line(l + c, e.barYPosition + (e.barHeight - e.strokeWidth) / 2) + n.line(l, e.barYPosition + e.barHeight - e.strokeWidth), o = n.line(e.zeroW, e.barYPosition + e.barHeight - e.strokeWidth);
                                     break;
                                 case "rounded":
                                     r = n.quadraticCurve(l + c, e.barYPosition + (e.barHeight - e.strokeWidth) / 2, l, e.barYPosition + e.barHeight - e.strokeWidth)
                             }
                         }
                         return {
                             path: r,
                             ending_p_from: o,
                             newX: l
                         }
                     }
                     var u = null,
                         d = "",
                         f = e.y;
                     if (void 0 !== i[a][s] || null !== i[a][s]) {
                         var p = i[a][s] < 0,
                             g = e.barWidth / 2 - e.strokeWidth;
                         switch (p && (g = -e.barWidth / 2 - e.strokeWidth), t.config.chart.stacked || ("arrow" === this.barOptions.endingShape ? f += g : "rounded" === this.barOptions.endingShape && (f += g / 2)), this.barOptions.endingShape) {
                             case "flat":
                                 u = n.line(e.barXPosition + e.barWidth - e.strokeWidth, f);
                                 break;
                             case "arrow":
                                 u = n.line(e.barXPosition + (e.barWidth - e.strokeWidth) / 2, f - g) + n.line(e.barXPosition + e.barWidth - e.strokeWidth, f), d = n.line(e.barXPosition + e.barWidth - e.strokeWidth, e.zeroH);
                                 break;
                             case "rounded":
                                 u = n.quadraticCurve(e.barXPosition + (e.barWidth - e.strokeWidth) / 2, f - g, e.barXPosition + e.barWidth - e.strokeWidth, f)
                         }
                     }
                     return {
                         path: u,
                         ending_p_from: d,
                         newY: f
                     }
                 }
             }, {
                 key: "setSelectedBarFilter",
                 value: function (t, e, i) {
                     var a = this.w;
                     if (void 0 !== a.globals.selectedDataPoints[e] && -1 < a.globals.selectedDataPoints[e].indexOf(i)) {
                         t.node.setAttribute("selected", !0);
                         var s = a.config.states.active.filter;
                         if ("none" !== s) new n.default(this.ctx).applyFilter(t, s.type, s.value)
                     }
                 }
             }]), a
         }();
         e.default = l
     }, function (t, e, i) {
         "use strict";
         var a = function () {
                 function a(t, e) {
                     for (var i = 0; i < e.length; i++) {
                         var a = e[i];
                         a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                     }
                 }
                 return function (t, e, i) {
                     return e && a(t.prototype, e), i && a(t, i), t
                 }
             }(),
             h = n(i(0)),
             c = n(i(33)),
             s = n(i(1)),
             u = n(i(50));

         function n(t) {
             return t && t.__esModule ? t : {
                 default: t
             }
         }
         var r = function () {
             function e(t) {
                 ! function (t, e) {
                     if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                 }(this, e), this.ctx = t, this.w = t.w, this.lgRect = {}, this.yAxisWidth = 0, this.xAxisHeight = 0, this.isSparkline = this.w.config.chart.sparkline.enabled, this.isBarHorizontal = !("bar" !== this.w.config.chart.type || !this.w.config.plotOptions.bar.horizontal)
             }
             return a(e, [{
                 key: "plotCoords",
                 value: function () {
                     var t = this.w,
                         e = t.globals,
                         i = this.getLegendsRect();
                     e.axisCharts ? this.setGridCoordsForAxisCharts(i) : this.setGridCoordsForNonAxisCharts(i), this.titleSubtitleOffset(), e.gridHeight = e.gridHeight - t.config.grid.padding.top - t.config.grid.padding.bottom, e.gridWidth = e.gridWidth - t.config.grid.padding.left - t.config.grid.padding.right, e.translateX = e.translateX + t.config.grid.padding.left, e.translateY = e.translateY + t.config.grid.padding.top
                 }
             }, {
                 key: "conditionalChecksForAxisCoords",
                 value: function (t, e) {
                     var i = this.w;
                     this.xAxisHeight = (t.height + e.height) * i.globals.lineHeightRatio + 15, this.xAxisWidth = t.width, this.xAxisHeight - e.height > i.config.xaxis.labels.maxHeight && (this.xAxisHeight = i.config.xaxis.labels.maxHeight), i.config.xaxis.labels.minHeight && this.xAxisHeight < i.config.xaxis.labels.minHeight && (this.xAxisHeight = i.config.xaxis.labels.minHeight), i.config.xaxis.floating && (this.xAxisHeight = 0), this.isBarHorizontal ? this.yAxisWidth = i.globals.yLabelsCoords[0].width + i.globals.yTitleCoords[0].width + 15 : this.yAxisWidth = this.getTotalYAxisWidth(), i.globals.isMultipleYAxis || (this.yAxisWidth < i.config.yaxis[0].labels.minWidth && (this.yAxisWidth = i.config.yaxis[0].labels.minWidth), this.yAxisWidth > i.config.yaxis[0].labels.maxWidth && (this.yAxisWidth = i.config.yaxis[0].labels.maxWidth))
                 }
             }, {
                 key: "setGridCoordsForAxisCharts",
                 value: function (t) {
                     var i = this.w,
                         e = i.globals,
                         a = this.getyAxisLabelsCoords(),
                         s = this.getxAxisLabelsCoords(),
                         n = this.getyAxisTitleCoords(),
                         r = this.getxAxisTitleCoords();
                     i.globals.yLabelsCoords = [], i.globals.yTitleCoords = [], i.config.yaxis.map(function (t, e) {
                         i.globals.yLabelsCoords.push({
                             width: a[e].width,
                             index: e
                         }), i.globals.yTitleCoords.push({
                             width: n[e].width,
                             index: e
                         })
                     }), this.conditionalChecksForAxisCoords(s, r), e.translateXAxisY = i.globals.rotateXLabels ? this.xAxisHeight / 8 : -4, e.translateXAxisX = i.globals.rotateXLabels && i.globals.isXNumeric && i.config.xaxis.labels.rotate <= -45 ? -this.xAxisWidth / 4 : 0, this.isBarHorizontal && (e.rotateXLabels = !1, e.translateXAxisY = parseInt(i.config.xaxis.labels.style.fontSize) / 1.5 * -1), e.translateXAxisY = e.translateXAxisY + i.config.xaxis.labels.offsetY, e.translateXAxisX = e.translateXAxisX + i.config.xaxis.labels.offsetX;
                     var o = this.yAxisWidth,
                         l = this.xAxisHeight;
                     e.xAxisLabelsHeight = this.xAxisHeight, e.xAxisHeight = this.xAxisHeight;
                     var h = 10;
                     switch (i.config.grid.show && "radar" !== i.config.chart.type || (o = 0, l = 35), this.isSparkline && (t = {
                         height: 0,
                         width: 0
                     }, h = o = l = 0), i.config.legend.position) {
                         case "bottom":
                             e.translateY = h, e.translateX = o, e.gridHeight = e.svgHeight - t.height - l - (this.isSparkline ? 0 : i.globals.rotateXLabels ? 10 : 15), e.gridWidth = e.svgWidth - o;
                             break;
                         case "top":
                             e.translateY = t.height + h, e.translateX = o, e.gridHeight = e.svgHeight - t.height - l - (this.isSparkline ? 0 : i.globals.rotateXLabels ? 10 : 15), e.gridWidth = e.svgWidth - o;
                             break;
                         case "left":
                             e.translateY = h, e.translateX = t.width + o, e.gridHeight = e.svgHeight - l - 12, e.gridWidth = e.svgWidth - t.width - o;
                             break;
                         case "right":
                             e.translateY = h, e.translateX = o, e.gridHeight = e.svgHeight - l - 12, e.gridWidth = e.svgWidth - t.width - o - 5;
                             break;
                         default:
                             throw new Error("Legend position not supported")
                     }
                     this.isBarHorizontal || this.setGridXPosForDualYAxis(n, a), new u.default(this.ctx).setYAxisXPosition(a, n)
                 }
             }, {
                 key: "setGridCoordsForNonAxisCharts",
                 value: function (t) {
                     var e = this.w,
                         i = e.globals,
                         a = 0;
                     e.config.legend.show && !e.config.legend.floating && (a = 20);
                     var s = 10,
                         n = 0;
                     if ("pie" === e.config.chart.type || "donut" === e.config.chart.type ? (s += e.config.plotOptions.pie.offsetY, n += e.config.plotOptions.pie.offsetX) : "radialBar" === e.config.chart.type && (s += e.config.plotOptions.radialBar.offsetY, n += e.config.plotOptions.radialBar.offsetX), !e.config.legend.show) return i.gridHeight = i.svgHeight - 35, i.gridWidth = i.gridHeight, i.translateY = s - 10, void(i.translateX = n + (i.svgWidth - i.gridWidth) / 2);
                     switch (e.config.legend.position) {
                         case "bottom":
                             i.gridHeight = i.svgHeight - t.height - 35, i.gridWidth = i.gridHeight, i.translateY = s - 20, i.translateX = n + (i.svgWidth - i.gridWidth) / 2;
                             break;
                         case "top":
                             i.gridHeight = i.svgHeight - t.height - 35, i.gridWidth = i.gridHeight, i.translateY = t.height + s, i.translateX = n + (i.svgWidth - i.gridWidth) / 2;
                             break;
                         case "left":
                             i.gridWidth = i.svgWidth - t.width - a, i.gridHeight = i.gridWidth, i.translateY = s, i.translateX = n + t.width + a;
                             break;
                         case "right":
                             i.gridWidth = i.svgWidth - t.width - a - 5, i.gridHeight = i.gridWidth, i.translateY = s, i.translateX = n + 10;
                             break;
                         default:
                             throw new Error("Legend position not supported")
                     }
                 }
             }, {
                 key: "setGridXPosForDualYAxis",
                 value: function (i, a) {
                     var s = this.w;
                     s.config.yaxis.map(function (t, e) {
                         -1 === s.globals.ignoreYAxisIndexes.indexOf(e) && !s.config.yaxis[e].floating && s.config.yaxis[e].show && t.opposite && (s.globals.translateX = s.globals.translateX - (a[e].width + i[e].width) - parseInt(s.config.yaxis[e].labels.style.fontSize) / 1.2 - 12)
                     })
                 }
             }, {
                 key: "titleSubtitleOffset",
                 value: function () {
                     var t = this.w,
                         e = t.globals,
                         i = this.isSparkline ? 0 : 10;
                     void 0 !== t.config.title.text ? i += t.config.title.margin : i += this.isSparkline ? 0 : 5, void 0 !== t.config.subtitle.text ? i += t.config.subtitle.margin : i += this.isSparkline ? 0 : 5, t.config.legend.show && "bottom" === t.config.legend.position && !t.config.legend.floating && 1 < t.config.series.length && (i += 10);
                     var a = this.getTitleSubtitleCoords("title"),
                         s = this.getTitleSubtitleCoords("subtitle");
                     e.gridHeight = e.gridHeight - a.height - s.height - i, e.translateY = e.translateY + a.height + s.height + i
                 }
             }, {
                 key: "getTotalYAxisWidth",
                 value: function () {
                     var a = this.w,
                         s = 0,
                         n = 10,
                         r = function (t) {
                             return -1 < a.globals.ignoreYAxisIndexes.indexOf(t)
                         };
                     return a.globals.yLabelsCoords.map(function (t, e) {
                         var i = a.config.yaxis[e].floating;
                         0 < t.width && !i ? (s = s + t.width + n, r(e) && (s = s - t.width - n)) : s += i || !a.config.yaxis[e].show ? 0 : 5
                     }), a.globals.yTitleCoords.map(function (t, e) {
                         var i = a.config.yaxis[e].floating;
                         n = parseInt(a.config.yaxis[e].title.style.fontSize), 0 < t.width && !i ? (s = s + t.width + n, r(e) && (s = s - t.width - n)) : s += i || !a.config.yaxis[e].show ? 0 : 5
                     }), s
                 }
             }, {
                 key: "getxAxisTimeScaleLabelsCoords",
                 value: function () {
                     var t, e = this.w,
                         i = e.globals.timelineLabels.slice().map(function (t) {
                             return t.value
                         }),
                         a = i.reduce(function (t, e) {
                             return void 0 === t ? (console.error("You have possibly supplied invalid Date format. Please supply a valid JavaScript Date"), 0) : t.length > e.length ? t : e
                         }, 0);
                     return 1.05 * (t = new h.default(this.ctx).getTextRects(a, e.config.xaxis.labels.style.fontSize)).width * i.length > e.globals.gridWidth && 0 !== e.config.xaxis.labels.rotate && (e.globals.overlappingXLabels = !0), t
                 }
             }, {
                 key: "getxAxisLabelsCoords",
                 value: function () {
                     var t = this.w,
                         e = t.globals.labels.slice(),
                         i = {
                             width: 0,
                             height: 0
                         };
                     if (0 < t.globals.timelineLabels.length) {
                         var a = this.getxAxisTimeScaleLabelsCoords();
                         i = {
                             width: a.width,
                             height: a.height
                         }
                     } else {
                         var s = "left" !== t.config.legend.position || "right" !== t.config.legend.position || t.config.legend.floating ? 0 : this.lgRect.width,
                             n = e.reduce(function (t, e) {
                                 return t.length > e.length ? t : e
                             }, 0),
                             r = t.globals.xLabelFormatter;
                         n = new c.default(this.ctx).xLabelFormat(r, n);
                         var o = new h.default(this.ctx),
                             l = o.getTextRects(n, t.config.xaxis.labels.style.fontSize);
                         (i = {
                             width: l.width,
                             height: l.height
                         }).width * e.length > t.globals.svgWidth - s - this.yAxisWidth && 0 !== t.config.xaxis.labels.rotate ? this.isBarHorizontal || (t.globals.rotateXLabels = !0, l = o.getTextRects(n, t.config.xaxis.labels.style.fontSize, t.config.xaxis.labels.style.fontFamily, "rotate(" + t.config.xaxis.labels.rotate + " 0 0)", !1), i.height = l.height / 1.66) : t.globals.rotateXLabels = !1
                     }
                     return t.config.xaxis.labels.show || (i = {
                         width: 0,
                         height: 0
                     }), {
                         width: i.width,
                         height: i.height
                     }
                 }
             }, {
                 key: "getyAxisLabelsCoords",
                 value: function () {
                     var n = this,
                         r = this.w,
                         o = [],
                         l = 10;
                     return r.config.yaxis.map(function (t, e) {
                         if (t.show && t.labels.show && r.globals.yAxisScale[e].result.length) {
                             var i = r.globals.yLabelFormatters[e],
                                 a = i(r.globals.yAxisScale[e].niceMax, -1);
                             if (void 0 !== a && 0 !== a.length || (a = r.globals.yAxisScale[e].niceMax), n.isBarHorizontal) l = 0, a = i(a = r.globals.labels.slice().reduce(function (t, e) {
                                 return t.length > e.length ? t : e
                             }, 0), -1);
                             var s = new h.default(n.ctx).getTextRects(a, t.labels.style.fontSize);
                             o.push({
                                 width: s.width + l,
                                 height: s.height
                             })
                         } else o.push({
                             width: 0,
                             height: 0
                         })
                     }), o
                 }
             }, {
                 key: "getxAxisTitleCoords",
                 value: function () {
                     var t = this.w,
                         e = 0,
                         i = 0;
                     if (void 0 !== t.config.xaxis.title.text) {
                         var a = new h.default(this.ctx).getTextRects(t.config.xaxis.title.text, t.config.xaxis.title.style.fontSize);
                         e = a.width, i = a.height
                     }
                     return {
                         width: e,
                         height: i
                     }
                 }
             }, {
                 key: "getyAxisTitleCoords",
                 value: function () {
                     var a = this,
                         t = this.w,
                         s = [];
                     return t.config.yaxis.map(function (t, e) {
                         if (t.show && void 0 !== t.title.text) {
                             var i = new h.default(a.ctx).getTextRects(t.title.text, t.title.style.fontSize, t.title.style.fontFamily, "rotate(-90 0 0)", !1);
                             s.push({
                                 width: i.width,
                                 height: i.height
                             })
                         } else s.push({
                             width: 0,
                             height: 0
                         })
                     }), s
                 }
             }, {
                 key: "getTitleSubtitleCoords",
                 value: function (t) {
                     var e = this.w,
                         i = 0,
                         a = 0,
                         s = "title" === t ? e.config.title.floating : e.config.subtitle.floating,
                         n = e.globals.dom.baseEl.querySelector(".apexcharts-" + t + "-text");
                     if (null !== n && !s) {
                         var r = n.getBoundingClientRect();
                         i = r.width, a = e.globals.axisCharts ? r.height + 5 : r.height
                     }
                     return {
                         width: i,
                         height: a
                     }
                 }
             }, {
                 key: "getLegendsRect",
                 value: function () {
                     var t = this.w,
                         e = t.globals.dom.baseEl.querySelector(".apexcharts-legend"),
                         i = Object.assign({}, s.default.getBoundingClientRect(e));
                     return null !== e && !t.config.legend.floating && t.config.legend.show ? this.lgRect = {
                         x: i.x,
                         y: i.y,
                         height: i.height,
                         width: 0 === i.height ? 0 : i.width
                     } : this.lgRect = {
                         x: 0,
                         y: 0,
                         height: 0,
                         width: 0
                     }, this.lgRect
                 }
             }]), e
         }();
         t.exports = r
     }, function (t, e, i) {
         "use strict";
         var a = function () {
                 function a(t, e) {
                     for (var i = 0; i < e.length; i++) {
                         var a = e[i];
                         a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                     }
                 }
                 return function (t, e, i) {
                     return e && a(t.prototype, e), i && a(t, i), t
                 }
             }(),
             k = s(i(0)),
             v = s(i(50)),
             S = s(i(33));

         function s(t) {
             return t && t.__esModule ? t : {
                 default: t
             }
         }
         var n = function () {
             function i(t) {
                 ! function (t, e) {
                     if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                 }(this, i), this.ctx = t, this.w = t.w;
                 var e = this.w;
                 this.xaxisLabels = e.globals.labels.slice(), 0 < e.globals.timelineLabels.length && (this.xaxisLabels = e.globals.timelineLabels.slice()), this.drawnLabels = [], "top" === e.config.xaxis.position ? this.offY = 0 : this.offY = e.globals.gridHeight + 1, this.offY = this.offY + e.config.xaxis.axisBorder.offsetY, this.xaxisFontSize = e.config.xaxis.labels.style.fontSize, this.xaxisFontFamily = e.config.xaxis.labels.style.fontFamily, this.xaxisForeColors = e.config.xaxis.labels.style.colors, this.xaxisBorderWidth = e.config.xaxis.axisBorder.width, -1 < this.xaxisBorderWidth.indexOf("%") ? this.xaxisBorderWidth = e.globals.gridWidth * parseInt(this.xaxisBorderWidth) / 100 : this.xaxisBorderWidth = parseInt(this.xaxisBorderWidth), this.xaxisBorderHeight = e.config.xaxis.axisBorder.height, this.yaxis = e.config.yaxis[0]
             }
             return a(i, [{
                 key: "drawXaxis",
                 value: function () {
                     var t = this.w,
                         e = new k.default(this.ctx),
                         i = e.group({
                             class: "apexcharts-xaxis",
                             transform: "translate(" + t.config.xaxis.offsetX + ", " + t.config.xaxis.offsetY + ")"
                         }),
                         a = e.group({
                             class: "apexcharts-xaxis-texts-g",
                             transform: "translate(" + t.globals.translateXAxisX + ", " + t.globals.translateXAxisY + ")"
                         });
                     i.add(a);
                     for (var s = void 0, n = t.globals.padHorizontal, r = [], o = 0; o < this.xaxisLabels.length; o++) r.push(this.xaxisLabels[o]);
                     n = "line" === t.config.chart.type || "area" === t.config.chart.type ? t.globals.isXNumeric ? n + (s = t.globals.gridWidth / (r.length - 1)) / 2 + t.config.xaxis.labels.offsetX : n + (s = t.globals.noLabelsProvided ? t.globals.gridWidth / this.xaxisLabels.length : t.globals.gridWidth / r.length) + t.config.xaxis.labels.offsetX : t.globals.isXNumeric ? "bar" !== t.config.chart.type ? n + (s = t.globals.gridWidth / (this.xaxisLabels.length - 1)) / 2 + t.config.xaxis.labels.offsetX : n + (s = t.globals.gridWidth / t.globals.labels.length) / 2 + t.config.xaxis.labels.offsetX : t.globals.noLabelsProvided && "bar" !== t.config.chart.type ? n + (s = t.globals.gridWidth / this.xaxisLabels.length) / 2 + t.config.xaxis.labels.offsetX : n + (s = t.globals.gridWidth / r.length) + t.config.xaxis.labels.offsetX;
                     var l = t.globals.xLabelFormatter,
                         h = t.config.xaxis.labels.formatter,
                         c = r.length;
                     if (t.config.xaxis.labels.show)
                         for (var u = 0; u <= c - 1; u++) {
                             var d = void 0 === r[u] ? "" : r[u],
                                 f = void 0;
                             f = new S.default(this.ctx).xLabelFormat(l, d), void 0 !== h && (f = h(d, this.xaxisLabels[u], u));
                             var p = n - s / 2 + t.config.xaxis.labels.offsetX;
                             0 < t.globals.timelineLabels.length && (p = t.globals.timelineLabels[u].position, f = t.globals.timelineLabels[u].value), (0 === (f = f.toString()).indexOf("NaN") || "undefined" === f || 0 === f.toLowerCase().indexOf("invalid") || 0 <= f.toLowerCase().indexOf("infinity") || 0 <= this.drawnLabels.indexOf(f) && !t.config.xaxis.labels.showDuplicates) && (f = ""), this.drawnLabels.push(f);
                             var g = 28;
                             t.globals.rotateXLabels && (g = 22);
                             var x = e.drawText({
                                 x: p,
                                 y: this.offY + t.config.xaxis.labels.offsetY + g,
                                 text: "",
                                 textAnchor: "middle",
                                 fontSize: this.xaxisFontSize,
                                 fontFamily: this.xaxisFontFamily,
                                 foreColor: Array.isArray(this.xaxisForeColors) ? this.xaxisForeColors[u] : this.xaxisForeColors,
                                 cssClass: "apexcharts-xaxis-label " + t.config.xaxis.labels.style.cssClass
                             });
                             a.add(x), e.addTspan(x, f, this.xaxisFontFamily);
                             var v = document.createElementNS(t.globals.svgNS, "title");
                             v.textContent = f, x.node.appendChild(v), n += s
                         }
                     if (void 0 !== t.config.xaxis.title.text) {
                         var b = e.group({
                                 class: "apexcharts-xaxis-title"
                             }),
                             m = e.drawText({
                                 x: t.globals.gridWidth / 2 + t.config.xaxis.title.offsetX,
                                 y: this.offY - parseInt(this.xaxisFontSize) + t.globals.xAxisLabelsHeight + t.config.xaxis.title.offsetY,
                                 text: t.config.xaxis.title.text,
                                 textAnchor: "middle",
                                 fontSize: t.config.xaxis.title.style.fontSize,
                                 fontFamily: t.config.xaxis.title.style.fontFamily,
                                 foreColor: t.config.xaxis.title.style.color,
                                 cssClass: "apexcharts-xaxis-title-text " + t.config.xaxis.title.style.cssClass
                             });
                         b.add(m), i.add(b)
                     }
                     if (t.config.xaxis.axisBorder.show) {
                         var y = 0;
                         "bar" === t.config.chart.type && t.globals.isXNumeric && (y -= 15);
                         var w = e.drawLine(t.globals.padHorizontal + y + t.config.xaxis.axisBorder.offsetX, this.offY, this.xaxisBorderWidth, this.offY, t.config.xaxis.axisBorder.color, 0, this.xaxisBorderHeight);
                         i.add(w)
                     }
                     return i
                 }
             }, {
                 key: "drawXaxisInversed",
                 value: function (t) {
                     var e = this.w,
                         i = new k.default(this.ctx),
                         a = i.group({
                             class: "apexcharts-yaxis apexcharts-xaxis-inversed",
                             rel: t
                         }),
                         s = i.group({
                             class: "apexcharts-yaxis-texts-g apexcharts-xaxis-inversed-texts-g"
                         });
                     a.add(s);
                     for (var n, r = void 0, o = [], l = 0; l < this.xaxisLabels.length; l++) o.push(this.xaxisLabels[l]);
                     r = -(n = e.globals.gridHeight / o.length) / 2.2;
                     var h = e.globals.yLabelFormatters[0],
                         c = e.config.yaxis[0].labels;
                     if (c.show)
                         for (var u = 0; u <= o.length - 1; u++) {
                             var d = void 0 === o[u] ? "" : o[u];
                             d = h(d);
                             var f = i.drawText({
                                 x: c.offsetX - 15,
                                 y: r + n + c.offsetY,
                                 text: d,
                                 textAnchor: "end",
                                 foreColor: c.style.color ? c.style.color : c.style.colors[u],
                                 fontSize: c.style.fontSize,
                                 fontFamily: c.style.fontFamily,
                                 cssClass: "apexcharts-yaxis-label " + c.style.cssClass
                             });
                             s.add(f), r += n
                         }
                     if (void 0 !== e.config.yaxis[0].title.text) {
                         var p = i.group({
                                 class: "apexcharts-yaxis-title apexcharts-xaxis-title-inversed"
                             }),
                             g = i.drawText({
                                 x: 0,
                                 y: e.globals.gridHeight / 2,
                                 text: e.config.yaxis[0].title.text,
                                 textAnchor: "middle",
                                 foreColor: e.config.yaxis[0].title.style.color,
                                 fontSize: e.config.yaxis[0].title.style.fontSize,
                                 fontFamily: e.config.yaxis[0].title.style.fontFamily,
                                 cssClass: "apexcharts-yaxis-title-text " + e.config.yaxis[0].title.style.cssClass
                             });
                         p.add(g), a.add(p)
                     }
                     if (e.config.xaxis.axisBorder.show) {
                         var x = i.drawLine(e.globals.padHorizontal + e.config.xaxis.axisBorder.offsetX, this.offY, this.xaxisBorderWidth, this.offY, this.yaxis.axisBorder.color, 0, this.xaxisBorderHeight);
                         a.add(x), new v.default(this.ctx).drawAxisTicks(0, o.length, e.config.yaxis[0].axisBorder, e.config.yaxis[0].axisTicks, 0, n, a)
                     }
                     return a
                 }
             }, {
                 key: "drawXaxisTicks",
                 value: function (t, e) {
                     var i = this.w,
                         a = t;
                     if (!(t < 0 || t > i.globals.gridWidth)) {
                         var s = this.offY + i.config.xaxis.axisTicks.offsetY,
                             n = s + i.config.xaxis.axisTicks.height;
                         if (i.config.xaxis.axisTicks.show) {
                             var r = new k.default(this.ctx).drawLine(t + i.config.xaxis.axisTicks.offsetX, s + i.config.xaxis.offsetY, a + i.config.xaxis.axisTicks.offsetX, n + i.config.xaxis.offsetY, i.config.xaxis.axisTicks.color);
                             e.add(r), r.node.classList.add("apexcharts-xaxis-tick")
                         }
                     }
                 }
             }, {
                 key: "getXAxisTicksPositions",
                 value: function () {
                     var t = this.w,
                         e = [],
                         i = this.xaxisLabels.length,
                         a = t.globals.padHorizontal;
                     if (0 < t.globals.timelineLabels.length)
                         for (var s = 0; s < i; s++) a = this.xaxisLabels[s].position, e.push(a);
                     else
                         for (var n = i, r = 0; r < n; r++) {
                             var o = n;
                             t.globals.isXNumeric && "bar" !== t.config.chart.type && (o -= 1), a += t.globals.gridWidth / o, e.push(a)
                         }
                     return e
                 }
             }, {
                 key: "xAxisLabelCorrections",
                 value: function () {
                     var t = this.w,
                         e = new k.default(this.ctx),
                         i = t.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g"),
                         a = t.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-texts-g text"),
                         s = t.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-inversed text"),
                         n = t.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-inversed-texts-g text");
                     if (t.globals.rotateXLabels || t.config.xaxis.labels.rotateAlways)
                         for (var r = 0; r < a.length; r++) {
                             var o = e.rotateAroundCenter(a[r]);
                             o.y = o.y - 1, o.x = o.x + 1, a[r].setAttribute("transform", "rotate(" + t.config.xaxis.labels.rotate + " " + o.x + " " + o.y + ")"), a[r].setAttribute("text-anchor", "end");
                             i.setAttribute("transform", "translate(0, -10)");
                             var l = a[r].childNodes;
                             t.config.xaxis.labels.trim && e.placeTextWithEllipsis(l[0], l[0].textContent, t.config.xaxis.labels.maxHeight - 40)
                         } else
                             for (var h = t.globals.gridWidth / t.globals.labels.length, c = 0; c < a.length; c++) {
                                 var u = a[c].childNodes;
                                 t.config.xaxis.labels.trim && "bar" !== t.config.chart.type && t.config.plotOptions.bar.horizontal && e.placeTextWithEllipsis(u[0], u[0].textContent, h)
                             }
                     if (0 < s.length) {
                         var d = s[s.length - 1].getBBox(),
                             f = s[0].getBBox();
                         d.x < -20 && s[s.length - 1].parentNode.removeChild(s[s.length - 1]), f.x + f.width > t.globals.gridWidth && s[0].parentNode.removeChild(s[0]);
                         for (var p = 0; p < n.length; p++) e.placeTextWithEllipsis(n[p], n[p].textContent, t.config.yaxis[0].labels.maxWidth - 2 * parseInt(t.config.yaxis[0].title.style.fontSize) - 20)
                     }
                 }
             }]), i
         }();
         t.exports = n
     }, function (t, e, i) {
         "use strict";
         var a, s = function () {
                 function a(t, e) {
                     for (var i = 0; i < e.length; i++) {
                         var a = e[i];
                         a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                     }
                 }
                 return function (t, e, i) {
                     return e && a(t.prototype, e), i && a(t, i), t
                 }
             }(),
             n = i(0),
             k = (a = n) && a.__esModule ? a : {
                 default: a
             };
         var r = function () {
             function e(t) {
                 ! function (t, e) {
                     if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                 }(this, e), this.ctx = t, this.w = t.w, this.xaxisFontSize = this.w.config.xaxis.labels.style.fontSize, this.axisFontFamily = this.w.config.xaxis.labels.style.fontFamily, this.isBarHorizontal = !("bar" !== this.w.config.chart.type || !this.w.config.plotOptions.bar.horizontal), this.xaxisForeColors = this.w.config.xaxis.labels.style.colors, this.xAxisoffX = 0, "bottom" === this.w.config.xaxis.position && (this.xAxisoffX = this.w.globals.gridHeight)
             }
             return s(e, [{
                 key: "drawYaxis",
                 value: function (t, e) {
                     var i = this.w,
                         a = new k.default(this.ctx),
                         s = i.config.yaxis[e].labels.style.fontSize,
                         n = i.config.yaxis[e].labels.style.fontFamily,
                         r = a.group({
                             class: "apexcharts-yaxis",
                             rel: e,
                             transform: "translate(" + i.globals.translateYAxisX[e] + ", 0)"
                         });
                     if (!i.config.yaxis[e].show) return r;
                     var o = a.group({
                         class: "apexcharts-yaxis-texts-g"
                     });
                     r.add(o);
                     var l = i.globals.yAxisScale[e].result.length - 1,
                         h = i.globals.gridHeight / l + .1,
                         c = i.globals.translateY,
                         u = i.globals.yLabelFormatters[e];
                     if (i.config.yaxis[e].labels.show)
                         for (var d = l; 0 <= d; d--) {
                             var f = i.globals.yAxisScale[e].result[d];
                             f = u(f, d);
                             var p = 20;
                             i.config.yaxis[e].opposite && (p *= -1), 0 === i.config.yaxis.length && (p = 20);
                             var g = a.drawText({
                                 x: p,
                                 y: c + l / 10 + i.config.yaxis[e].labels.offsetY + 1,
                                 text: f,
                                 textAnchor: i.config.yaxis[e].opposite ? "start" : "end",
                                 fontSize: s,
                                 fontFamily: n,
                                 foreColor: i.config.yaxis[e].labels.style.color,
                                 cssClass: "apexcharts-yaxis-label " + i.config.yaxis[e].labels.style.cssClass
                             });
                             o.add(g), c += h
                         }
                     if (void 0 !== i.config.yaxis[e].title.text) {
                         var x = a.group({
                                 class: "apexcharts-yaxis-title"
                             }),
                             v = 0;
                         i.config.yaxis[e].opposite && (v = i.globals.translateYAxisX[e]);
                         var b = a.drawText({
                             x: v,
                             y: i.globals.gridHeight / 2 + i.globals.translateY,
                             text: i.config.yaxis[e].title.text,
                             textAnchor: "end",
                             foreColor: i.config.yaxis[e].title.style.color,
                             fontSize: i.config.yaxis[e].title.style.fontSize,
                             fontFamily: i.config.yaxis[e].title.style.fontFamily,
                             cssClass: "apexcharts-yaxis-title-text " + i.config.yaxis[e].title.style.cssClass
                         });
                         x.add(b), r.add(x)
                     }
                     var m = i.config.yaxis[e].axisBorder;
                     if (m.show) {
                         var y = 31 + m.offsetX;
                         i.config.yaxis[e].opposite && (y = -31 - m.offsetX);
                         var w = a.drawLine(y, i.globals.translateY + m.offsetY - 2, y, i.globals.gridHeight + i.globals.translateY + m.offsetY + 2, m.color);
                         r.add(w), this.drawAxisTicks(y, l, m, i.config.yaxis[e].axisTicks, e, h, r)
                     }
                     return r
                 }
             }, {
                 key: "drawYaxisInversed",
                 value: function (t) {
                     var e = this.w,
                         i = new k.default(this.ctx),
                         a = i.group({
                             class: "apexcharts-xaxis apexcharts-yaxis-inversed"
                         }),
                         s = i.group({
                             class: "apexcharts-xaxis-texts-g",
                             transform: "translate(" + e.globals.translateXAxisX + ", " + e.globals.translateXAxisY + ")"
                         });
                     a.add(s);
                     var n = e.globals.yAxisScale[t].result.length - 1,
                         r = e.globals.gridWidth / n + .1,
                         o = r + e.config.xaxis.labels.offsetX,
                         l = e.globals.xLabelFormatter;
                     if (e.config.xaxis.labels.show)
                         for (var h = n; 0 <= h; h--) {
                             var c = e.globals.yAxisScale[t].result[h];
                             c = l(c, h);
                             var u = i.drawText({
                                 x: e.globals.gridWidth + e.globals.padHorizontal - (o - r + e.config.xaxis.labels.offsetX),
                                 y: this.xAxisoffX + e.config.xaxis.labels.offsetY + 30,
                                 text: "",
                                 textAnchor: "middle",
                                 foreColor: Array.isArray(this.xaxisForeColors) ? this.xaxisForeColors[t] : this.xaxisForeColors,
                                 fontSize: this.xaxisFontSize,
                                 fontFamily: this.xaxisFontFamily,
                                 cssClass: "apexcharts-xaxis-label " + e.config.xaxis.labels.style.cssClass
                             });
                             s.add(u), u.tspan(c);
                             var d = document.createElementNS(e.globals.svgNS, "title");
                             d.textContent = c, u.node.appendChild(d), o += r
                         }
                     if (void 0 !== e.config.xaxis.title.text) {
                         var f = i.group({
                                 class: "apexcharts-xaxis-title apexcharts-yaxis-title-inversed"
                             }),
                             p = i.drawText({
                                 x: e.globals.gridWidth / 2,
                                 y: this.xAxisoffX + parseInt(this.xaxisFontSize) + parseInt(e.config.xaxis.title.style.fontSize) + 20,
                                 text: e.config.xaxis.title.text,
                                 textAnchor: "middle",
                                 fontSize: e.config.xaxis.title.style.fontSize,
                                 fontFamily: e.config.xaxis.title.style.fontFamily,
                                 cssClass: "apexcharts-xaxis-title-text " + e.config.xaxis.title.style.cssClass
                             });
                         f.add(p), a.add(f)
                     }
                     var g = e.config.yaxis[t].axisBorder;
                     if (g.show) {
                         var x = i.drawLine(e.globals.padHorizontal + g.offsetX, 1 + g.offsetY, e.globals.padHorizontal + g.offsetX, e.globals.gridHeight + g.offsetY, g.color);
                         a.add(x)
                     }
                     return a
                 }
             }, {
                 key: "drawAxisTicks",
                 value: function (t, e, i, a, s, n, r) {
                     var o = this.w,
                         l = new k.default(this.ctx),
                         h = o.globals.translateY;
                     if (a.show) {
                         !0 === o.config.yaxis[s].opposite && (t += a.width);
                         for (var c = e; 0 <= c; c--) {
                             var u = h + e / 10 + o.config.yaxis[s].labels.offsetY - 1;
                             this.isBarHorizontal && (u = n * c);
                             var d = l.drawLine(t + i.offsetX - a.width + a.offsetX, u + a.offsetY, t + i.offsetX + a.offsetX, u + a.offsetY, i.color);
                             r.add(d), h += n
                         }
                     }
                 }
             }, {
                 key: "yAxisTitleRotate",
                 value: function (t, e) {
                     var i = this.w,
                         a = new k.default(this.ctx),
                         s = {
                             width: 0,
                             height: 0
                         },
                         n = {
                             width: 0,
                             height: 0
                         },
                         r = i.globals.dom.baseEl.querySelector(" .apexcharts-yaxis[rel='" + t + "'] .apexcharts-yaxis-texts-g");
                     null !== r && (s = r.getBoundingClientRect());
                     var o = i.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='" + t + "'] .apexcharts-yaxis-title text");
                     if (null !== o && (n = o.getBoundingClientRect()), null !== o) {
                         var l = this.xPaddingForYAxisTitle(t, s, n, e);
                         o.setAttribute("x", l.xPos - (e ? 10 : 0))
                     }
                     if (null !== o) {
                         var h = a.rotateAroundCenter(o);
                         e ? o.setAttribute("transform", "rotate(90 " + h.x + " " + h.y + ")") : o.setAttribute("transform", "rotate(-90 " + h.x + " " + h.y + ")")
                     }
                 }
             }, {
                 key: "xPaddingForYAxisTitle",
                 value: function (t, e, i, a) {
                     var s = this.w,
                         n = 0,
                         r = 0,
                         o = 20;
                     return a ? (r = e.width + s.config.yaxis[t].title.offsetX + o + i.width / 2 - 15, 0 === (n += 1) && (r -= 15)) : (r = -1 * e.width + s.config.yaxis[t].title.offsetX + o + i.width / 2 - 15, this.isBarHorizontal && (o = 25, r = -1 * e.width - s.config.yaxis[t].title.offsetX - o)), {
                         xPos: r,
                         padd: o
                     }
                 }
             }, {
                 key: "setYAxisXPosition",
                 value: function (r, o) {
                     var l = this,
                         h = this.w,
                         c = 0,
                         u = 0,
                         d = 0,
                         f = 1;
                     this.multipleYs = !1, 1 < h.config.yaxis.length && (this.multipleYs = !0), h.config.yaxis.map(function (t, e) {
                         var i = r[e].width + o[e].width,
                             a = l.multipleYs && 0 < o[e].width ? 20 : 8,
                             s = l.xPaddingForYAxisTitle(e, {
                                 width: r[e].width
                             }, {
                                 width: o[e].width
                             }, t.opposite);
                         if (1 < h.config.yaxis.length ? i += Math.abs(s.padd) : void 0 === t.title.text ? i = i + Math.abs(s.padd) + 15 : i += Math.abs(s.padd), t.opposite) u = h.globals.gridWidth + h.globals.translateX + f + 30 + (h.globals.series.length - h.globals.collapsedSeries.length), h.globals.collapsedSeries.forEach(function (t) {
                             t.index === e && (f -= i)
                         }), f += i, h.globals.translateYAxisX[e] = u - t.labels.offsetX;
                         else {
                             var n = i + 5; - 1 < h.globals.ignoreYAxisIndexes.indexOf(e) && (n = 0), c = l.multipleYs ? h.globals.translateX - i - d + a + parseInt(h.config.yaxis[e].labels.style.fontSize) + t.labels.offsetX : h.globals.translateX - i + r[e].width + t.labels.offsetX, d += n, h.globals.translateYAxisX[e] = c
                         }
                     })
                 }
             }]), e
         }();
         t.exports = r
     }, function (t, e, i) {
         "use strict";
         var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                 return typeof t
             } : function (t) {
                 return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
             },
             a = function () {
                 function a(t, e) {
                     for (var i = 0; i < e.length; i++) {
                         var a = e[i];
                         a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                     }
                 }
                 return function (t, e, i) {
                     return e && a(t.prototype, e), i && a(t, i), t
                 }
             }(),
             l = s(i(143)),
             h = s(i(1)),
             c = s(i(52));

         function s(t) {
             return t && t.__esModule ? t : {
                 default: t
             }
         }
         var n = function () {
             function e(t) {
                 ! function (t, e) {
                     if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                 }(this, e), this.opts = t
             }
             return a(e, [{
                 key: "init",
                 value: function () {
                     var t = this.opts,
                         e = new c.default,
                         i = new l.default(t);
                     this.chartType = t.chart.type, "histogram" === this.chartType && (t.chart.type = "bar", t = h.default.extend({
                         plotOptions: {
                             bar: {
                                 columnWidth: "99.99%"
                             }
                         }
                     }, t)), t.series = this.checkEmptySeries(t.series), t = this.extendYAxis(t), t = this.extendAnnotations(t);
                     var a = e.init(),
                         s = {};
                     if (t && "object" === (void 0 === t ? "undefined" : o(t))) {
                         var n = {};
                         switch (this.chartType) {
                             case "line":
                                 n = i.line();
                                 break;
                             case "area":
                                 n = i.area();
                                 break;
                             case "bar":
                                 n = i.bar();
                                 break;
                             case "candlestick":
                                 n = i.candlestick();
                                 break;
                             case "histogram":
                                 n = i.bar();
                                 break;
                             case "bubble":
                                 n = i.bubble();
                                 break;
                             case "scatter":
                                 n = i.scatter();
                                 break;
                             case "heatmap":
                                 n = i.heatmap();
                                 break;
                             case "pie":
                                 n = i.pie();
                                 break;
                             case "donut":
                                 n = i.donut();
                                 break;
                             case "radar":
                                 n = i.radar();
                                 break;
                             case "radialBar":
                                 n = i.radialBar();
                                 break;
                             default:
                                 n = i.line()
                         }
                         t.chart.brush && t.chart.brush.enabled && (n = i.brush(n)), t.chart.stacked && "100%" === t.chart.stackType && i.stacked100(), (t.chart.sparkline && t.chart.sparkline.enabled || window.Apex.chart && window.Apex.chart.sparkline && window.Apex.chart.sparkline.enabled) && (n = i.sparkline(n)), s = h.default.extend(a, n)
                     }
                     var r = h.default.extend(s, window.Apex);
                     return a = h.default.extend(r, t), a = this.handleUserInputErrors(a)
                 }
             }, {
                 key: "extendYAxis",
                 value: function (t) {
                     var e = new c.default;
                     return void 0 === t.yaxis && (t.yaxis = {}), t.yaxis.constructor !== Array && window.Apex.yaxis && window.Apex.yaxis.constructor !== Array && (t.yaxis = h.default.extend(t.yaxis, window.Apex.yaxis)), t.yaxis.constructor !== Array ? t.yaxis = [h.default.extend(e.yAxis, t.yaxis)] : t.yaxis = h.default.extendArray(t.yaxis, e.yAxis), t
                 }
             }, {
                 key: "extendAnnotations",
                 value: function (t) {
                     return void 0 === t.annotations && (t.annotations = {}, t.annotations.yaxis = [], t.annotations.xaxis = [], t.annotations.points = []), t = this.extendYAxisAnnotations(t), t = this.extendXAxisAnnotations(t), t = this.extendPointAnnotations(t)
                 }
             }, {
                 key: "extendYAxisAnnotations",
                 value: function (t) {
                     var e = new c.default;
                     return t.annotations.yaxis = h.default.extendArray(void 0 !== t.annotations.yaxis ? t.annotations.yaxis : [], e.yAxisAnnotation), t
                 }
             }, {
                 key: "extendXAxisAnnotations",
                 value: function (t) {
                     var e = new c.default;
                     return t.annotations.xaxis = h.default.extendArray(void 0 !== t.annotations.xaxis ? t.annotations.xaxis : [], e.xAxisAnnotation), t
                 }
             }, {
                 key: "extendPointAnnotations",
                 value: function (t) {
                     var e = new c.default;
                     return t.annotations.points = h.default.extendArray(void 0 !== t.annotations.points ? t.annotations.points : [], e.pointAnnotation), t
                 }
             }, {
                 key: "checkEmptySeries",
                 value: function (t) {
                     return 0 === t.length ? [{
                         data: []
                     }] : t
                 }
             }, {
                 key: "handleUserInputErrors",
                 value: function (t) {
                     var e = t;
                     if (e.tooltip.shared && e.tooltip.intersect) throw new Error("tooltip.shared cannot be enabled when tooltip.intersect is true. Turn off any other option by setting it to false");
                     if (e.chart.scroller && console.warn("Scroller has been deprecated since v2.0.0. Please remove the configuration for chart.scroller"), "bar" === e.chart.type && e.plotOptions.bar.horizontal) {
                         if ("datetime" === e.xaxis.type) throw new Error("Timelines on bars are not supported yet. Switch to column chart by setting plotOptions.bar.horizontal=false");
                         if (1 < e.yaxis.length) throw new Error("Multiple Y Axis for bars are not supported. Switch to column chart by setting plotOptions.bar.horizontal=false");
                         e.xaxis.tooltip.enabled = !1, e.yaxis[0].tooltip.enabled = !1, e.chart.zoom.enabled = !1
                     }
                     return "bar" === e.chart.type && e.tooltip.shared && ("barWidth" === e.xaxis.crosshairs.width && 1 < e.series.length && (console.warn('crosshairs.width = "barWidth" is only supported in single series, not in a multi-series barChart'), e.xaxis.crosshairs.width = "tickWidth"), e.plotOptions.bar.horizontal && (e.states.hover.type = "none"), e.tooltip.followCursor || (console.warn("followCursor option in shared columns cannot be turned off"), e.tooltip.followCursor = !0)), Array.isArray(e.stroke.width) && "line" !== e.chart.type && "area" !== e.chart.type && (console.warn("stroke.width option accepts array only for line and area charts. Reverted back to Number"), e.stroke.width = e.stroke.width[0]), e
                 }
             }]), e
         }();
         t.exports = n
     }, function (t, e, i) {
         "use strict";
         Object.defineProperty(e, "__esModule", {
             value: !0
         });
         var a = function () {
             function a(t, e) {
                 for (var i = 0; i < e.length; i++) {
                     var a = e[i];
                     a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                 }
             }
             return function (t, e, i) {
                 return e && a(t.prototype, e), i && a(t, i), t
             }
         }();
         var s = i(83),
             n = function () {
                 function t() {
                     ! function (t, e) {
                         if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                     }(this, t), this.yAxis = {
                         show: !0,
                         opposite: !1,
                         logarithmic: !1,
                         logBase: 10,
                         tickAmount: void 0,
                         max: void 0,
                         min: void 0,
                         decimalsInFloat: 2,
                         floating: !1,
                         seriesName: void 0,
                         labels: {
                             show: !0,
                             minWidth: 0,
                             maxWidth: 160,
                             offsetX: 0,
                             offsetY: 0,
                             style: {
                                 colors: [],
                                 fontSize: "11px",
                                 fontFamily: void 0,
                                 cssClass: "apexcharts-yaxis-label"
                             },
                             formatter: void 0
                         },
                         axisBorder: {
                             show: !1,
                             color: "#78909C",
                             offsetX: 0,
                             offsetY: 0
                         },
                         axisTicks: {
                             show: !1,
                             color: "#78909C",
                             width: 6,
                             offsetX: 0,
                             offsetY: 0
                         },
                         title: {
                             text: void 0,
                             rotate: -90,
                             offsetY: 0,
                             offsetX: 0,
                             style: {
                                 color: void 0,
                                 fontSize: "11px",
                                 fontFamily: void 0,
                                 cssClass: "apexcharts-yaxis-title"
                             }
                         },
                         tooltip: {
                             enabled: !1,
                             offsetX: 0
                         },
                         crosshairs: {
                             show: !0,
                             position: "front",
                             stroke: {
                                 color: "#b6b6b6",
                                 width: 1,
                                 dashArray: 0
                             }
                         }
                     }, this.xAxisAnnotation = {
                         x: 0,
                         strokeDashArray: 4,
                         borderColor: "#c2c2c2",
                         offsetX: 0,
                         offsetY: 0,
                         label: {
                             borderColor: "#c2c2c2",
                             borderWidth: 1,
                             text: void 0,
                             textAnchor: "middle",
                             orientation: "vertical",
                             position: "top",
                             offsetX: 0,
                             offsetY: 0,
                             style: {
                                 background: "#fff",
                                 color: void 0,
                                 fontSize: "11px",
                                 fontFamily: void 0,
                                 cssClass: "apexcharts-xaxis-annotation-label",
                                 padding: {
                                     left: 5,
                                     right: 5,
                                     top: 2,
                                     bottom: 2
                                 }
                             }
                         }
                     }, this.yAxisAnnotation = {
                         y: 0,
                         strokeDashArray: 4,
                         borderColor: "#c2c2c2",
                         offsetX: 0,
                         offsetY: 0,
                         yAxisIndex: 0,
                         label: {
                             borderColor: "#c2c2c2",
                             borderWidth: 1,
                             text: void 0,
                             textAnchor: "end",
                             position: "right",
                             offsetX: 0,
                             offsetY: -3,
                             style: {
                                 background: "#fff",
                                 color: void 0,
                                 fontSize: "11px",
                                 fontFamily: void 0,
                                 cssClass: "apexcharts-yaxis-annotation-label",
                                 padding: {
                                     left: 5,
                                     right: 5,
                                     top: 0,
                                     bottom: 2
                                 }
                             }
                         }
                     }, this.pointAnnotation = {
                         x: 0,
                         y: null,
                         yAxisIndex: 0,
                         seriesIndex: 0,
                         marker: {
                             size: 0,
                             fillColor: "#fff",
                             strokeWidth: 2,
                             strokeColor: "#333",
                             shape: "circle",
                             offsetX: 0,
                             offsetY: 0,
                             radius: 2
                         },
                         label: {
                             borderColor: "#c2c2c2",
                             borderWidth: 1,
                             text: void 0,
                             textAnchor: "middle",
                             offsetX: 0,
                             offsetY: -15,
                             style: {
                                 background: "#fff",
                                 color: void 0,
                                 fontSize: "11px",
                                 fontFamily: void 0,
                                 cssClass: "apexcharts-point-annotation-label",
                                 padding: {
                                     left: 5,
                                     right: 5,
                                     top: 0,
                                     bottom: 2
                                 }
                             }
                         }
                     }
                 }
                 return a(t, [{
                     key: "init",
                     value: function () {
                         return {
                             annotations: {
                                 position: "front",
                                 yaxis: [this.yAxisAnnotation],
                                 xaxis: [this.xAxisAnnotation],
                                 points: [this.pointAnnotation]
                             },
                             chart: {
                                 animations: {
                                     enabled: !0,
                                     easing: "easeinout",
                                     speed: 800,
                                     animateGradually: {
                                         delay: 150,
                                         enabled: !0
                                     },
                                     dynamicAnimation: {
                                         enabled: !0,
                                         speed: 350
                                     }
                                 },
                                 background: "transparent",
                                 locales: [s],
                                 defaultLocale: "en",
                                 dropShadow: {
                                     enabled: !1,
                                     enabledSeries: void 0,
                                     top: 2,
                                     left: 2,
                                     blur: 4,
                                     opacity: .35
                                 },
                                 events: {
                                     animationEnd: void 0,
                                     beforeMount: void 0,
                                     mounted: void 0,
                                     updated: void 0,
                                     click: void 0,
                                     legendClick: void 0,
                                     selection: void 0,
                                     dataPointSelection: void 0,
                                     dataPointMouseEnter: void 0,
                                     dataPointMouseLeave: void 0,
                                     beforeZoom: void 0,
                                     zoomed: void 0,
                                     scrolled: void 0
                                 },
                                 foreColor: "#373d3f",
                                 fontFamily: "Helvetica, Arial, sans-serif",
                                 height: "auto",
                                 id: void 0,
                                 offsetX: 0,
                                 offsetY: 0,
                                 selection: {
                                     enabled: !1,
                                     type: "x",
                                     fill: {
                                         color: "#24292e",
                                         opacity: .1
                                     },
                                     stroke: {
                                         width: 1,
                                         color: "#24292e",
                                         opacity: .4,
                                         dashArray: 3
                                     },
                                     xaxis: {
                                         min: void 0,
                                         max: void 0
                                     },
                                     yaxis: {
                                         min: void 0,
                                         max: void 0
                                     }
                                 },
                                 sparkline: {
                                     enabled: !1
                                 },
                                 brush: {
                                     enabled: !1,
                                     autoScaleYaxis: !1,
                                     target: void 0
                                 },
                                 stacked: !1,
                                 stackType: "normal",
                                 toolbar: {
                                     show: !0,
                                     tools: {
                                         download: !0,
                                         selection: !0,
                                         zoom: !0,
                                         zoomin: !0,
                                         zoomout: !0,
                                         pan: !0,
                                         reset: !0
                                     },
                                     autoSelected: "zoom"
                                 },
                                 type: "line",
                                 updateOnElementResize: !1,
                                 width: "100%",
                                 zoom: {
                                     enabled: !0,
                                     type: "x",
                                     zoomedArea: {
                                         fill: {
                                             color: "#90CAF9",
                                             opacity: .4
                                         },
                                         stroke: {
                                             color: "#0D47A1",
                                             opacity: .4,
                                             width: 1
                                         }
                                     }
                                 }
                             },
                             plotOptions: {
                                 bar: {
                                     horizontal: !1,
                                     endingShape: "flat",
                                     columnWidth: "70%",
                                     barHeight: "70%",
                                     distributed: !1,
                                     colors: {
                                         ranges: [],
                                         backgroundBarColors: [],
                                         backgroundBarOpacity: 1
                                     },
                                     dataLabels: {
                                         position: "top"
                                     }
                                 },
                                 candlestick: {
                                     colors: {
                                         upward: "#00B746",
                                         downward: "#EF403C"
                                     },
                                     wick: {
                                         useFillColor: !0
                                     }
                                 },
                                 heatmap: {
                                     radius: 2,
                                     enableShades: !0,
                                     shadeIntensity: .5,
                                     distributed: !1,
                                     colorScale: {
                                         inverse: !1,
                                         ranges: [],
                                         min: void 0,
                                         max: void 0
                                     }
                                 },
                                 radialBar: {
                                     size: void 0,
                                     inverseOrder: !1,
                                     startAngle: 0,
                                     endAngle: 360,
                                     offsetX: 0,
                                     offsetY: 0,
                                     hollow: {
                                         margin: 5,
                                         size: "50%",
                                         background: "transparent",
                                         image: void 0,
                                         imageWidth: 150,
                                         imageHeight: 150,
                                         imageOffsetX: 0,
                                         imageOffsetY: 0,
                                         imageClipped: !0,
                                         position: "front",
                                         dropShadow: {
                                             enabled: !1,
                                             top: 0,
                                             left: 0,
                                             blur: 3,
                                             opacity: .5
                                         }
                                     },
                                     track: {
                                         show: !0,
                                         startAngle: void 0,
                                         endAngle: void 0,
                                         background: "#f2f2f2",
                                         strokeWidth: "97%",
                                         opacity: 1,
                                         margin: 5,
                                         dropShadow: {
                                             enabled: !1,
                                             top: 0,
                                             left: 0,
                                             blur: 3,
                                             opacity: .5
                                         }
                                     },
                                     dataLabels: {
                                         show: !0,
                                         name: {
                                             show: !0,
                                             fontSize: "16px",
                                             fontFamily: void 0,
                                             color: void 0,
                                             offsetY: 0
                                         },
                                         value: {
                                             show: !0,
                                             fontSize: "14px",
                                             fontFamily: void 0,
                                             color: void 0,
                                             offsetY: 16,
                                             formatter: function (t) {
                                                 return t + "%"
                                             }
                                         },
                                         total: {
                                             show: !1,
                                             label: "Total",
                                             color: "#373d3f",
                                             formatter: function (t) {
                                                 return t.globals.seriesTotals.reduce(function (t, e) {
                                                     return t + e
                                                 }, 0) / t.globals.series.length + "%"
                                             }
                                         }
                                     }
                                 },
                                 pie: {
                                     size: void 0,
                                     customScale: 1,
                                     offsetX: 0,
                                     offsetY: 0,
                                     expandOnClick: !0,
                                     dataLabels: {
                                         offset: 0
                                     },
                                     donut: {
                                         size: "65%",
                                         background: "transparent",
                                         labels: {
                                             show: !1,
                                             name: {
                                                 show: !0,
                                                 fontSize: "16px",
                                                 fontFamily: void 0,
                                                 color: void 0,
                                                 offsetY: -10
                                             },
                                             value: {
                                                 show: !0,
                                                 fontSize: "20px",
                                                 fontFamily: void 0,
                                                 color: void 0,
                                                 offsetY: 10,
                                                 formatter: function (t) {
                                                     return t
                                                 }
                                             },
                                             total: {
                                                 show: !1,
                                                 label: "Total",
                                                 color: "#373d3f",
                                                 formatter: function (t) {
                                                     return t.globals.seriesTotals.reduce(function (t, e) {
                                                         return t + e
                                                     }, 0)
                                                 }
                                             }
                                         }
                                     }
                                 },
                                 radar: {
                                     size: void 0,
                                     customScale: 1,
                                     offsetX: 0,
                                     offsetY: 0,
                                     polygons: {
                                         strokeColor: "#e8e8e8",
                                         fill: {
                                             colors: void 0
                                         }
                                     }
                                 }
                             },
                             colors: void 0,
                             dataLabels: {
                                 enabled: !0,
                                 formatter: function (t) {
                                     return t
                                 },
                                 textAnchor: "middle",
                                 offsetX: 0,
                                 offsetY: 0,
                                 style: {
                                     fontSize: "12px",
                                     fontFamily: void 0,
                                     colors: void 0
                                 },
                                 dropShadow: {
                                     enabled: !1,
                                     top: 1,
                                     left: 1,
                                     blur: 1,
                                     opacity: .45
                                 }
                             },
                             fill: {
                                 type: "solid",
                                 colors: void 0,
                                 opacity: .85,
                                 gradient: {
                                     shade: "dark",
                                     type: "horizontal",
                                     shadeIntensity: .5,
                                     gradientToColors: void 0,
                                     inverseColors: !0,
                                     opacityFrom: 1,
                                     opacityTo: 1,
                                     stops: [0, 50, 100]
                                 },
                                 image: {
                                     src: [],
                                     width: void 0,
                                     height: void 0
                                 },
                                 pattern: {
                                     style: "sqaures",
                                     width: 6,
                                     height: 6,
                                     strokeWidth: 2
                                 }
                             },
                             grid: {
                                 show: !0,
                                 borderColor: "#e0e0e0",
                                 strokeDashArray: 0,
                                 position: "back",
                                 xaxis: {
                                     lines: {
                                         show: !1,
                                         animate: !1
                                     }
                                 },
                                 yaxis: {
                                     lines: {
                                         show: !0,
                                         animate: !0
                                     }
                                 },
                                 row: {
                                     colors: void 0,
                                     opacity: .5
                                 },
                                 column: {
                                     colors: void 0,
                                     opacity: .5
                                 },
                                 padding: {
                                     top: 0,
                                     right: 10,
                                     bottom: 0,
                                     left: 10
                                 }
                             },
                             labels: [],
                             legend: {
                                 show: !0,
                                 showForSingleSeries: !1,
                                 showForZeroSeries: !0,
                                 floating: !1,
                                 position: "bottom",
                                 horizontalAlign: "center",
                                 fontSize: "12px",
                                 fontFamily: void 0,
                                 width: void 0,
                                 height: void 0,
                                 formatter: void 0,
                                 offsetX: -20,
                                 offsetY: 0,
                                 labels: {
                                     colors: void 0,
                                     useSeriesColors: !1
                                 },
                                 markers: {
                                     width: 12,
                                     height: 12,
                                     strokeWidth: 0,
                                     strokeColor: "#fff",
                                     radius: 12,
                                     customHTML: void 0,
                                     offsetX: 0,
                                     offsetY: 0
                                 },
                                 itemMargin: {
                                     horizontal: 0,
                                     vertical: 5
                                 },
                                 onItemClick: {
                                     toggleDataSeries: !0
                                 },
                                 onItemHover: {
                                     highlightDataSeries: !0
                                 }
                             },
                             markers: {
                                 discrete: [],
                                 size: 0,
                                 colors: void 0,
                                 strokeColor: "#fff",
                                 strokeWidth: 2,
                                 strokeOpacity: .9,
                                 fillOpacity: 1,
                                 shape: "circle",
                                 radius: 2,
                                 offsetX: 0,
                                 offsetY: 0,
                                 hover: {
                                     size: void 0,
                                     sizeOffset: 3
                                 }
                             },
                             noData: {
                                 text: void 0,
                                 align: "center",
                                 verticalAlign: "middle",
                                 offsetX: 0,
                                 offsetY: 0,
                                 style: {
                                     color: void 0,
                                     fontSize: "14px",
                                     fontFamily: void 0
                                 }
                             },
                             responsive: [],
                             series: void 0,
                             states: {
                                 normal: {
                                     filter: {
                                         type: "none",
                                         value: 0
                                     }
                                 },
                                 hover: {
                                     filter: {
                                         type: "lighten",
                                         value: .15
                                     }
                                 },
                                 active: {
                                     allowMultipleDataPointsSelection: !1,
                                     filter: {
                                         type: "darken",
                                         value: .35
                                     }
                                 }
                             },
                             title: {
                                 text: void 0,
                                 align: "left",
                                 margin: 10,
                                 offsetX: 0,
                                 offsetY: 0,
                                 floating: !1,
                                 style: {
                                     fontSize: "14px",
                                     fontFamily: void 0,
                                     color: void 0
                                 }
                             },
                             subtitle: {
                                 text: void 0,
                                 align: "left",
                                 margin: 10,
                                 offsetX: 0,
                                 offsetY: 30,
                                 floating: !1,
                                 style: {
                                     fontSize: "12px",
                                     fontFamily: void 0,
                                     color: void 0
                                 }
                             },
                             stroke: {
                                 show: !0,
                                 curve: "smooth",
                                 lineCap: "butt",
                                 width: 2,
                                 colors: void 0,
                                 dashArray: 0
                             },
                             tooltip: {
                                 enabled: !0,
                                 shared: !0,
                                 followCursor: !1,
                                 intersect: !1,
                                 inverseOrder: !1,
                                 custom: void 0,
                                 fillSeriesColor: !1,
                                 theme: "light",
                                 onDatasetHover: {
                                     highlightDataSeries: !1
                                 },
                                 x: {
                                     show: !0,
                                     format: "dd MMM",
                                     formatter: void 0
                                 },
                                 y: {
                                     formatter: void 0,
                                     title: {
                                         formatter: function (t) {
                                             return t
                                         }
                                     }
                                 },
                                 z: {
                                     formatter: void 0,
                                     title: "Size: "
                                 },
                                 marker: {
                                     show: !0
                                 },
                                 items: {
                                     display: "flex"
                                 },
                                 fixed: {
                                     enabled: !1,
                                     position: "topRight",
                                     offsetX: 0,
                                     offsetY: 0
                                 }
                             },
                             xaxis: {
                                 type: "category",
                                 categories: [],
                                 offsetX: 0,
                                 offsetY: 0,
                                 labels: {
                                     show: !0,
                                     rotate: -45,
                                     rotateAlways: !1,
                                     hideOverlappingLabels: !0,
                                     trim: !0,
                                     minHeight: void 0,
                                     maxHeight: 120,
                                     showDuplicates: !1,
                                     style: {
                                         colors: [],
                                         fontSize: "12px",
                                         fontFamily: void 0,
                                         cssClass: "apexcharts-xaxis-label"
                                     },
                                     offsetX: 0,
                                     offsetY: 0,
                                     format: void 0,
                                     formatter: void 0,
                                     datetimeFormatter: {
                                         year: "yyyy",
                                         month: "MMM 'yy",
                                         day: "dd MMM",
                                         hour: "HH:mm",
                                         minute: "HH:mm:ss"
                                     }
                                 },
                                 axisBorder: {
                                     show: !0,
                                     color: "#78909C",
                                     width: "100%",
                                     height: 1,
                                     offsetX: 0,
                                     offsetY: 0
                                 },
                                 axisTicks: {
                                     show: !0,
                                     color: "#78909C",
                                     height: 6,
                                     offsetX: 0,
                                     offsetY: 0
                                 },
                                 tickAmount: void 0,
                                 min: void 0,
                                 max: void 0,
                                 range: void 0,
                                 floating: !1,
                                 position: "bottom",
                                 title: {
                                     text: void 0,
                                     offsetX: 0,
                                     offsetY: 0,
                                     style: {
                                         color: void 0,
                                         fontSize: "12px",
                                         fontFamily: void 0,
                                         cssClass: "apexcharts-xaxis-title"
                                     }
                                 },
                                 crosshairs: {
                                     show: !0,
                                     width: 1,
                                     position: "back",
                                     opacity: .9,
                                     stroke: {
                                         color: "#b6b6b6",
                                         width: 0,
                                         dashArray: 0
                                     },
                                     fill: {
                                         type: "solid",
                                         color: "#B1B9C4",
                                         gradient: {
                                             colorFrom: "#D8E3F0",
                                             colorTo: "#BED1E6",
                                             stops: [0, 100],
                                             opacityFrom: .4,
                                             opacityTo: .5
                                         }
                                     },
                                     dropShadow: {
                                         enabled: !1,
                                         left: 0,
                                         top: 0,
                                         blur: 1,
                                         opacity: .4
                                     }
                                 },
                                 tooltip: {
                                     enabled: !0,
                                     offsetY: 0,
                                     formatter: void 0
                                 }
                             },
                             yaxis: this.yAxis,
                             theme: {
                                 palette: "palette1",
                                 monochrome: {
                                     enabled: !1,
                                     color: "#008FFB",
                                     shadeTo: "light",
                                     shadeIntensity: .65
                                 }
                             }
                         }
                     }
                 }]), t
             }();
         e.default = n
     }, function (t, e, i) {
         "use strict";
         Object.defineProperty(e, "__esModule", {
             value: !0
         });
         var a, s = function () {
                 function a(t, e) {
                     for (var i = 0; i < e.length; i++) {
                         var a = e[i];
                         a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                     }
                 }
                 return function (t, e, i) {
                     return e && a(t.prototype, e), i && a(t, i), t
                 }
             }(),
             n = i(79),
             r = (a = n) && a.__esModule ? a : {
                 default: a
             };

         function A(t) {
             if (Array.isArray(t)) {
                 for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
                 return i
             }
             return Array.from(t)
         }
         var o = function () {
             function e(t) {
                 ! function (t, e) {
                     if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                 }(this, e), this.ctx = t, this.w = t.w, this.months31 = [1, 3, 5, 7, 8, 10, 12], this.months30 = [2, 4, 6, 9, 11], this.daysCntOfYear = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]
             }
             return s(e, [{
                 key: "isValidDate",
                 value: function (t) {
                     return !isNaN(this.parseDate(t))
                 }
             }, {
                 key: "getUTCTimeStamp",
                 value: function (t) {
                     return new Date(new Date(t).toUTCString().substr(0, 25)).getTime()
                 }
             }, {
                 key: "parseDate",
                 value: function (t) {
                     var e = Date.parse(t);
                     if (!isNaN(e)) return this.getUTCTimeStamp(t);
                     var i = Date.parse(t.replace(/-/g, "/").replace(/[a-z]+/gi, " "));
                     return i = this.getUTCTimeStamp(i)
                 }
             }, {
                 key: "treatAsUtc",
                 value: function (t) {
                     var e = new Date(t);
                     return e.setMinutes(e.getMinutes() - e.getTimezoneOffset()), e
                 }
             }, {
                 key: "formatDate",
                 value: function (t, e) {
                     var i = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2],
                         a = !(3 < arguments.length && void 0 !== arguments[3]) || arguments[3],
                         s = this.w.globals.locale,
                         n = ["\0"].concat(A(s.months)),
                         r = [""].concat(A(s.shortMonths)),
                         o = [""].concat(A(s.days)),
                         l = [""].concat(A(s.shortDays));

                     function h(t, e) {
                         var i = t + "";
                         for (e = e || 2; i.length < e;) i = "0" + i;
                         return i
                     }
                     a && (t = this.treatAsUtc(t));
                     var c = i ? t.getUTCFullYear() : t.getFullYear();
                     e = (e = (e = e.replace(/(^|[^\\])yyyy+/g, "$1" + c)).replace(/(^|[^\\])yy/g, "$1" + c.toString().substr(2, 2))).replace(/(^|[^\\])y/g, "$1" + c);
                     var u = (i ? t.getUTCMonth() : t.getMonth()) + 1;
                     e = (e = (e = (e = e.replace(/(^|[^\\])MMMM+/g, "$1" + n[0])).replace(/(^|[^\\])MMM/g, "$1" + r[0])).replace(/(^|[^\\])MM/g, "$1" + h(u))).replace(/(^|[^\\])M/g, "$1" + u);
                     var d = i ? t.getUTCDate() : t.getDate();
                     e = (e = (e = (e = e.replace(/(^|[^\\])dddd+/g, "$1" + o[0])).replace(/(^|[^\\])ddd/g, "$1" + l[0])).replace(/(^|[^\\])dd/g, "$1" + h(d))).replace(/(^|[^\\])d/g, "$1" + d);
                     var f = i ? t.getUTCHours() : t.getHours(),
                         p = 12 < f ? f - 12 : 0 === f ? 12 : f;
                     e = (e = (e = (e = e.replace(/(^|[^\\])HH+/g, "$1" + h(f))).replace(/(^|[^\\])H/g, "$1" + f)).replace(/(^|[^\\])hh+/g, "$1" + h(p))).replace(/(^|[^\\])h/g, "$1" + p);
                     var g = i ? t.getUTCMinutes() : t.getMinutes();
                     e = (e = e.replace(/(^|[^\\])mm+/g, "$1" + h(g))).replace(/(^|[^\\])m/g, "$1" + g);
                     var x = i ? t.getUTCSeconds() : t.getSeconds();
                     e = (e = e.replace(/(^|[^\\])ss+/g, "$1" + h(x))).replace(/(^|[^\\])s/g, "$1" + x);
                     var v = i ? t.getUTCMilliseconds() : t.getMilliseconds();
                     e = e.replace(/(^|[^\\])fff+/g, "$1" + h(v, 3)), v = Math.round(v / 10), e = e.replace(/(^|[^\\])ff/g, "$1" + h(v)), v = Math.round(v / 10);
                     var b = f < 12 ? "AM" : "PM";
                     e = (e = (e = e.replace(/(^|[^\\])f/g, "$1" + v)).replace(/(^|[^\\])TT+/g, "$1" + b)).replace(/(^|[^\\])T/g, "$1" + b.charAt(0));
                     var m = b.toLowerCase();
                     e = (e = e.replace(/(^|[^\\])tt+/g, "$1" + m)).replace(/(^|[^\\])t/g, "$1" + m.charAt(0));
                     var y = -t.getTimezoneOffset(),
                         w = i || !y ? "Z" : 0 < y ? "+" : "-";
                     if (!i) {
                         var k = (y = Math.abs(y)) % 60;
                         w += h(Math.floor(y / 60)) + ":" + h(k)
                     }
                     e = e.replace(/(^|[^\\])K/g, "$1" + w);
                     var S = (i ? t.getUTCDay() : t.getDay()) + 1;
                     return e = (e = (e = (e = (e = e.replace(new RegExp(o[0], "g"), o[S])).replace(new RegExp(l[0], "g"), l[S])).replace(new RegExp(n[0], "g"), n[u])).replace(new RegExp(r[0], "g"), r[u])).replace(/\\(.)/g, "$1")
                 }
             }, {
                 key: "getTimeUnitsfromTimestamp",
                 value: function (t, e) {
                     var i = this.w;
                     void 0 !== i.config.xaxis.min && (t = i.config.xaxis.min), void 0 !== i.config.xaxis.max && (e = i.config.xaxis.max);
                     var a = new Date(t).getFullYear(),
                         s = new Date(e).getFullYear(),
                         n = new Date(t).getMonth(),
                         r = new Date(e).getMonth(),
                         o = new Date(t).getDate(),
                         l = new Date(e).getDate(),
                         h = new Date(t).getHours(),
                         c = new Date(e).getHours();
                     return {
                         minMinute: new Date(t).getMinutes(),
                         maxMinute: new Date(e).getMinutes(),
                         minHour: h,
                         maxHour: c,
                         minDate: o,
                         maxDate: l,
                         minMonth: n,
                         maxMonth: r,
                         minYear: a,
                         maxYear: s
                     }
                 }
             }, {
                 key: "isLeapYear",
                 value: function (t) {
                     return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
                 }
             }, {
                 key: "calculcateLastDaysOfMonth",
                 value: function (t, e, i) {
                     return this.determineDaysOfMonths(t, e) - i
                 }
             }, {
                 key: "determineDaysOfYear",
                 value: function (t) {
                     var e = 365;
                     return this.isLeapYear(t) && (e = 366), e
                 }
             }, {
                 key: "determineRemainingDaysOfYear",
                 value: function (t, e, i) {
                     var a = this.daysCntOfYear[e] + i;
                     return 1 < e && this.isLeapYear() && a++, a
                 }
             }, {
                 key: "determineDaysOfMonths",
                 value: function (t, e) {
                     var i = 30;
                     switch (t = new r.default(this.ctx).monthMod(t), !0) {
                         case this.months30.includes(t):
                             2 === t && (i = this.isLeapYear(e) ? 29 : 28);
                             break;
                         case this.months31.includes(t):
                         default:
                             i = 31
                     }
                     return i
                 }
             }]), e
         }();
         e.default = o
     }, function (t, e, i) {
         "use strict";
         var l = i(17),
             h = i(24),
             c = i(112);
         t.exports = function (o) {
             return function (t, e, i) {
                 var a, s = l(t),
                     n = h(s.length),
                     r = c(i, n);
                 if (o && e != e) {
                     for (; r < n;)
                         if ((a = s[r++]) != a) return !0
                 } else
                     for (; r < n; r++)
                         if ((o || r in s) && s[r] === e) return o || r || 0;
                 return !o && -1
             }
         }
     }, function (t, e, i) {
         "use strict";
         var a = i(3).document;
         t.exports = a && a.documentElement
     }, function (t, e, i) {
         "use strict";
         t.exports = !i(12) && !i(20)(function () {
             return 7 != Object.defineProperty(i(37)("div"), "a", {
                 get: function () {
                     return 7
                 }
             }).a
         })
     }, function (t, e, i) {
         "use strict";
         var a = i(21),
             s = i(2)("iterator"),
             n = Array.prototype;
         t.exports = function (t) {
             return void 0 !== t && (a.Array === t || n[s] === t)
         }
     }, function (t, e, i) {
         "use strict";
         var a = i(19);
         t.exports = Array.isArray || function (t) {
             return "Array" == a(t)
         }
     }, function (t, e, i) {
         "use strict";
         var n = i(8);
         t.exports = function (e, t, i, a) {
             try {
                 return a ? t(n(i)[0], i[1]) : t(i)
             } catch (t) {
                 var s = e.return;
                 throw void 0 !== s && n(s.call(e)), t
             }
         }
     }, function (t, e, i) {
         "use strict";
         var m = i(22),
             y = i(6),
             w = i(16),
             k = i(14),
             S = i(21),
             A = i(100),
             C = i(30),
             P = i(107),
             M = i(2)("iterator"),
             L = !([].keys && "next" in [].keys()),
             E = "values",
             T = function () {
                 return this
             };
         t.exports = function (t, e, i, a, s, n, r) {
             A(i, e, a);
             var o, l, h, c = function (t) {
                     if (!L && t in p) return p[t];
                     switch (t) {
                         case "keys":
                         case E:
                             return function () {
                                 return new i(this, t)
                             }
                     }
                     return function () {
                         return new i(this, t)
                     }
                 },
                 u = e + " Iterator",
                 d = s == E,
                 f = !1,
                 p = t.prototype,
                 g = p[M] || p["@@iterator"] || s && p[s],
                 x = g || c(s),
                 v = s ? d ? c("entries") : x : void 0,
                 b = "Array" == e && p.entries || g;
             if (b && (h = P(b.call(new t))) !== Object.prototype && h.next && (C(h, u, !0), m || "function" == typeof h[M] || k(h, M, T)), d && g && g.name !== E && (f = !0, x = function () {
                     return g.call(this)
                 }), m && !r || !L && !f && p[M] || k(p, M, x), S[e] = x, S[u] = T, s)
                 if (o = {
                         values: d ? x : c(E),
                         keys: n ? x : c("keys"),
                         entries: v
                     }, r)
                     for (l in o) l in p || w(p, l, o[l]);
                 else y(y.P + y.F * (L || f), e, o);
             return o
         }
     }, function (t, e, i) {
         "use strict";
         var n = i(2)("iterator"),
             r = !1;
         try {
             var a = [7][n]();
             a.return = function () {
                 r = !0
             }, Array.from(a, function () {
                 throw 2
             })
         } catch (t) {}
         t.exports = function (t, e) {
             if (!e && !r) return !1;
             var i = !1;
             try {
                 var a = [7],
                     s = a[n]();
                 s.next = function () {
                     return {
                         done: i = !0
                     }
                 }, a[n] = function () {
                     return s
                 }, t(a)
             } catch (t) {}
             return i
         }
     }, function (t, e, a) {
         "use strict";
         var s = a(8),
             n = a(104),
             r = a(38),
             o = a(42)("IE_PROTO"),
             l = function () {},
             h = "prototype",
             c = function () {
                 var t, e = a(37)("iframe"),
                     i = r.length;
                 for (e.style.display = "none", a(55).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), c = t.F; i--;) delete c[h][r[i]];
                 return c()
             };
         t.exports = Object.create || function (t, e) {
             var i;
             return null !== t ? (l[h] = s(t), i = new l, l[h] = null, i[o] = t) : i = c(), void 0 === e ? i : n(i, e)
         }
     }, function (t, e, i) {
         "use strict";
         var a = i(65),
             s = i(38).concat("length", "prototype");
         e.f = Object.getOwnPropertyNames || function (t) {
             return a(t, s)
         }
     }, function (t, e, i) {
         "use strict";
         e.f = Object.getOwnPropertySymbols
     }, function (t, e, i) {
         "use strict";
         var r = i(13),
             o = i(17),
             l = i(54)(!1),
             h = i(42)("IE_PROTO");
         t.exports = function (t, e) {
             var i, a = o(t),
                 s = 0,
                 n = [];
             for (i in a) i != h && r(a, i) && n.push(i);
             for (; e.length > s;) r(a, i = e[s++]) && (~l(n, i) || n.push(i));
             return n
         }
     }, function (t, e, i) {
         "use strict";
         t.exports = function (t) {
             try {
                 return {
                     e: !1,
                     v: t()
                 }
             } catch (t) {
                 return {
                     e: !0,
                     v: t
                 }
             }
         }
     }, function (t, e, i) {
         "use strict";
         var a = i(8),
             s = i(9),
             n = i(40);
         t.exports = function (t, e) {
             if (a(t), s(e) && e.constructor === t) return e;
             var i = n.f(t);
             return (0, i.resolve)(e), i.promise
         }
     }, function (t, e, i) {
         "use strict";
         var s = i(8),
             n = i(18),
             r = i(2)("species");
         t.exports = function (t, e) {
             var i, a = s(t).constructor;
             return void 0 === a || null == (i = s(a)[r]) ? e : n(i)
         }
     }, function (t, e, i) {
         "use strict";
         var a, s, n, r = i(15),
             o = i(99),
             l = i(55),
             h = i(37),
             c = i(3),
             u = c.process,
             d = c.setImmediate,
             f = c.clearImmediate,
             p = c.MessageChannel,
             g = c.Dispatch,
             x = 0,
             v = {},
             b = "onreadystatechange",
             m = function () {
                 var t = +this;
                 if (v.hasOwnProperty(t)) {
                     var e = v[t];
                     delete v[t], e()
                 }
             },
             y = function (t) {
                 m.call(t.data)
             };
         d && f || (d = function (t) {
             for (var e = [], i = 1; arguments.length > i;) e.push(arguments[i++]);
             return v[++x] = function () {
                 o("function" == typeof t ? t : Function(t), e)
             }, a(x), x
         }, f = function (t) {
             delete v[t]
         }, "process" == i(19)(u) ? a = function (t) {
             u.nextTick(r(m, t, 1))
         } : g && g.now ? a = function (t) {
             g.now(r(m, t, 1))
         } : p ? (n = (s = new p).port2, s.port1.onmessage = y, a = r(n.postMessage, n, 1)) : c.addEventListener && "function" == typeof postMessage && !c.importScripts ? (a = function (t) {
             c.postMessage(t + "", "*")
         }, c.addEventListener("message", y, !1)) : a = b in h("script") ? function (t) {
             l.appendChild(h("script"))[b] = function () {
                 l.removeChild(this), m.call(t)
             }
         } : function (t) {
             setTimeout(r(m, t, 1), 0)
         }), t.exports = {
             set: d,
             clear: f
         }
     }, function (t, e, i) {
         "use strict";
         e.f = i(2)
     }, function (t, e, i) {
         "use strict";
         var a = i(35),
             s = i(2)("iterator"),
             n = i(21);
         t.exports = i(4).getIteratorMethod = function (t) {
             if (null != t) return t[s] || t["@@iterator"] || n[a(t)]
         }
     }, function (t, e, i) {
         "use strict";
         var a = i(35),
             s = {};
         s[i(2)("toStringTag")] = "z", s + "" != "[object z]" && i(16)(Object.prototype, "toString", function () {
             return "[object " + a(this) + "]"
         }, !0)
     }, function (t, e, i) {
         "use strict";
         var a = i(111)(!0);
         i(60)(String, "String", function (t) {
             this._t = String(t), this._i = 0
         }, function () {
             var t, e = this._t,
                 i = this._i;
             return i >= e.length ? {
                 value: void 0,
                 done: !0
             } : (t = a(e, i), this._i += t.length, {
                 value: t,
                 done: !1
             })
         })
     }, function (t, e, i) {
         "use strict";
         Object.defineProperty(e, "__esModule", {
             value: !0
         });
         var a = function () {
                 function a(t, e) {
                     for (var i = 0; i < e.length; i++) {
                         var a = e[i];
                         a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                     }
                 }
                 return function (t, e, i) {
                     return e && a(t.prototype, e), i && a(t, i), t
                 }
             }(),
             M = s(i(11)),
             L = s(i(1)),
             E = s(i(0)),
             T = s(i(5));

         function s(t) {
             return t && t.__esModule ? t : {
                 default: t
             }
         }
         var n = function () {
             function s(t) {
                 ! function (t, e) {
                     if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                 }(this, s), this.ctx = t, this.w = t.w, this.chartType = this.w.config.chart.type, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled, this.animBeginArr = [0], this.animDur = 0, this.donutDataLabels = this.w.config.plotOptions.pie.donut.labels;
                 var e = this.w;
                 this.lineColorArr = void 0 !== e.globals.stroke.colors ? e.globals.stroke.colors : e.globals.colors, this.defaultSize = e.globals.svgHeight < e.globals.svgWidth ? e.globals.svgHeight - 35 : e.globals.gridWidth, this.centerY = this.defaultSize / 2, this.centerX = e.globals.gridWidth / 2, this.fullAngle = 360, this.size = 0, this.donutSize = 0, this.sliceLabels = [], this.prevSectorAngleArr = []
             }
             return a(s, [{
                 key: "draw",
                 value: function (t) {
                     for (var e = this.w, i = new E.default(this.ctx), a = i.group({
                             class: "apexcharts-pie"
                         }), s = 0, n = 0; n < t.length; n++) s += L.default.negToZero(t[n]);
                     var r = [],
                         o = i.group();
                     0 === s && (s = 1e-5);
                     for (var l = 0; l < t.length; l++) {
                         var h = this.fullAngle * L.default.negToZero(t[l]) / s;
                         r.push(h)
                     }
                     if (e.globals.dataChanged) {
                         for (var c = 0, u = 0; u < e.globals.previousPaths.length; u++) c += L.default.negToZero(e.globals.previousPaths[u]);
                         for (var d = void 0, f = 0; f < e.globals.previousPaths.length; f++) d = this.fullAngle * L.default.negToZero(e.globals.previousPaths[f]) / c, this.prevSectorAngleArr.push(d)
                     }
                     this.size = this.defaultSize / 2.05 - e.config.stroke.width - e.config.chart.dropShadow.blur, void 0 !== e.config.plotOptions.pie.size && (this.size = e.config.plotOptions.pie.size), this.donutSize = this.size * parseInt(e.config.plotOptions.pie.donut.size) / 100;
                     var p = e.config.plotOptions.pie.customScale,
                         g = e.globals.gridWidth / 2,
                         x = e.globals.gridHeight / 2,
                         v = g - e.globals.gridWidth / 2 * p,
                         b = x - e.globals.gridHeight / 2 * p;
                     if (this.donutDataLabels.show) {
                         var m = this.renderInnerDataLabels(this.donutDataLabels, {
                             hollowSize: this.donutSize,
                             centerX: this.centerX,
                             centerY: this.centerY,
                             opacity: this.donutDataLabels.show,
                             translateX: v,
                             translateY: b - 25
                         });
                         a.add(m)
                     }
                     if ("donut" === e.config.chart.type) {
                         var y = i.drawCircle(this.donutSize);
                         y.attr({
                             cx: this.centerX,
                             cy: this.centerY,
                             fill: e.config.plotOptions.pie.donut.background
                         }), o.add(y)
                     }
                     var w = this.drawArcs(r, t);
                     return this.sliceLabels.forEach(function (t) {
                         w.add(t)
                     }), o.attr({
                         transform: "translate(" + v + ", " + (b - 5) + ") scale(" + p + ")"
                     }), a.attr({
                         "data:innerTranslateX": v,
                         "data:innerTranslateY": b - 25
                     }), o.add(w), a.add(o), a
                 }
             }, {
                 key: "drawArcs",
                 value: function (t, e) {
                     var i = this.w,
                         a = new T.default(this.ctx),
                         s = new E.default(this.ctx),
                         n = new M.default(this.ctx),
                         r = s.group(),
                         o = 0,
                         l = 0,
                         h = 0,
                         c = 0;
                     this.strokeWidth = i.config.stroke.show ? i.config.stroke.width : 0;
                     for (var u = 0; u < t.length; u++) {
                         var d = s.group({
                             class: "apexcharts-series apexcharts-pie-series " + i.globals.seriesNames[u].toString().replace(/ /g, "-"),
                             id: "apexcharts-series-" + u,
                             rel: u + 1
                         });
                         r.add(d), l = c, h = (o = h) + t[u], c = l + this.prevSectorAngleArr[u];
                         var f = h - o,
                             p = n.fillPath(d, {
                                 seriesNumber: u,
                                 size: this.size
                             }),
                             g = this.getChangedPath(l, c),
                             x = s.drawPath({
                                 d: g,
                                 stroke: this.lineColorArr instanceof Array ? this.lineColorArr[u] : this.lineColorArr,
                                 strokeWidth: this.strokeWidth,
                                 fill: p,
                                 fillOpacity: i.config.fill.opacity,
                                 classes: "apexcharts-pie-area"
                             });
                         if (x.attr({
                                 id: "apexcharts-pieSlice-" + u,
                                 index: 0,
                                 j: u
                             }), i.config.chart.dropShadow.enabled) {
                             var v = i.config.chart.dropShadow;
                             a.dropShadow(x, v)
                         }
                         this.addListeners(x, this.donutDataLabels), E.default.setAttrs(x.node, {
                             "data:angle": f,
                             "data:startAngle": o,
                             "data:strokeWidth": this.strokeWidth,
                             "data:value": e[u]
                         });
                         var b = void 0;
                         "pie" === i.config.chart.type ? b = L.default.polarToCartesian(this.centerX, this.centerY, this.size / 1.25 + i.config.plotOptions.pie.dataLabels.offset, o + (h - o) / 2) : "donut" === i.config.chart.type && (b = L.default.polarToCartesian(this.centerX, this.centerY, (this.size + this.donutSize) / 2 + i.config.plotOptions.pie.dataLabels.offset, o + (h - o) / 2)), d.add(x);
                         var m = 0;
                         if (!this.initialAnim || i.globals.resized || i.globals.dataChanged ? this.animBeginArr.push(0) : (m = (h - o) / this.fullAngle * i.config.chart.animations.speed, this.animDur = m + this.animDur, this.animBeginArr.push(this.animDur)), this.dynamicAnim && i.globals.dataChanged ? this.animatePaths(x, {
                                 endAngle: h,
                                 startAngle: o,
                                 prevStartAngle: l,
                                 prevEndAngle: c,
                                 animateStartingPos: !0,
                                 i: u,
                                 animBeginArr: this.animBeginArr,
                                 dur: i.config.chart.animations.dynamicAnimation.speed
                             }) : this.animatePaths(x, {
                                 endAngle: h,
                                 startAngle: o,
                                 i: u,
                                 totalItems: t.length - 1,
                                 animBeginArr: this.animBeginArr,
                                 dur: m
                             }), i.config.plotOptions.pie.expandOnClick && x.click(this.pieClicked.bind(this, u)), i.config.dataLabels.enabled) {
                             var y = b.x,
                                 w = b.y,
                                 k = 100 * (h - o) / 360 + "%";
                             if (0 !== f) {
                                 var S = i.config.dataLabels.formatter;
                                 void 0 !== S && (k = S(i.globals.seriesPercent[u][0], {
                                     seriesIndex: u,
                                     w: i
                                 }));
                                 var A = i.globals.dataLabels.style.colors[u],
                                     C = s.drawText({
                                         x: y,
                                         y: w,
                                         text: k,
                                         textAnchor: "middle",
                                         fontSize: i.config.dataLabels.style.fontSize,
                                         fontFamily: i.config.dataLabels.style.fontFamily,
                                         foreColor: A
                                     });
                                 if (i.config.dataLabels.dropShadow.enabled) {
                                     var P = i.config.dataLabels.dropShadow;
                                     new T.default(this.ctx).dropShadow(C, P)
                                 }
                                 C.node.classList.add("apexcharts-pie-label"), i.config.chart.animations.animate && !1 === i.globals.resized && (C.node.classList.add("apexcharts-pie-label-delay"), C.node.style.animationDelay = i.config.chart.animations.speed / 940 + "s"), this.sliceLabels.push(C)
                             }
                         }
                     }
                     return r
                 }
             }, {
                 key: "addListeners",
                 value: function (t, e) {
                     var i = new E.default(this.ctx);
                     t.node.addEventListener("mouseenter", i.pathMouseEnter.bind(this, t)), t.node.addEventListener("mouseenter", this.dataLabelsMouseIn.bind(this, t.node, e)), t.node.addEventListener("mouseleave", i.pathMouseLeave.bind(this, t)), t.node.addEventListener("mouseleave", this.dataLabelsMouseout.bind(this, t.node, e)), t.node.addEventListener("mousedown", i.pathMouseDown.bind(this, t))
                 }
             }, {
                 key: "animatePaths",
                 value: function (t, e) {
                     var i = this.w,
                         a = e.endAngle - e.startAngle,
                         s = a,
                         n = e.startAngle,
                         r = e.startAngle;
                     void 0 !== e.prevStartAngle && void 0 !== e.prevEndAngle && (n = e.prevEndAngle, s = e.prevEndAngle - e.prevStartAngle), e.i === i.config.series.length - 1 && (a + r > this.fullAngle ? e.endAngle = e.endAngle - (a + r) : a + r < this.fullAngle && (e.endAngle = e.endAngle + (this.fullAngle - (a + r)))), a === this.fullAngle && (a = this.fullAngle - .01), this.animateArc(t, n, r, a, s, e)
                 }
             }, {
                 key: "animateArc",
                 value: function (e, i, a, s, n, r) {
                     var o = this,
                         t = this.w,
                         l = o.size;
                     l || (l = r.size);
                     var h = void 0,
                         c = r;
                     (isNaN(i) || isNaN(n)) && (i = a, n = s, c.dur = 0);
                     var u = s,
                         d = a,
                         f = i - a;
                     t.globals.dataChanged && r.shouldSetPrevPaths && (h = o.getPiePath({
                         me: o,
                         startAngle: d,
                         angle: n,
                         size: l
                     }), e.attr({
                         d: h
                     })), 0 !== c.dur ? e.animate(c.dur, t.globals.easing, c.animBeginArr[c.i]).afterAll(function () {
                         "pie" !== t.config.chart.type && "donut" !== t.config.chart.type || this.animate(300).attr({
                             "stroke-width": t.config.stroke.width
                         })
                     }).during(function (t) {
                         u = f + (s - f) * t, r.animateStartingPos && (u = n + (s - n) * t, d = i - n + (a - (i - n)) * t), h = o.getPiePath({
                             me: o,
                             startAngle: d,
                             angle: u,
                             size: l
                         }), e.node.setAttribute("data:pathOrig", h), e.attr({
                             d: h
                         })
                     }) : (h = o.getPiePath({
                         me: o,
                         startAngle: d,
                         angle: s,
                         size: l
                     }), e.node.setAttribute("data:pathOrig", h), e.attr({
                         d: h
                     }))
                 }
             }, {
                 key: "pieClicked",
                 value: function (t) {
                     var e, i = this.w,
                         a = this.size + 5,
                         s = i.globals.dom.Paper.select("#apexcharts-pieSlice-" + t).members[0],
                         n = s.attr("d");
                     if ("true" !== s.attr("data:pieClicked")) {
                         var r = i.globals.dom.baseEl.querySelectorAll(".apexcharts-pie-area");
                         Array.prototype.forEach.call(r, function (t) {
                             t.setAttribute("data:pieClicked", "false");
                             var e = t.getAttribute("data:pathOrig");
                             t.setAttribute("d", e)
                         }), s.attr("data:pieClicked", "true");
                         var o = parseInt(s.attr("data:startAngle")),
                             l = parseInt(s.attr("data:angle"));
                         e = this.getPiePath({
                             me: this,
                             startAngle: o,
                             angle: l,
                             size: a
                         }), 360 !== l && s.plot(e).animate(1).plot(n).animate(100).plot(e)
                     } else {
                         s.attr({
                             "data:pieClicked": "false"
                         });
                         var h = s.attr("data:pathOrig");
                         s.attr({
                             d: h
                         })
                     }
                 }
             }, {
                 key: "getChangedPath",
                 value: function (t, e) {
                     var i = "";
                     return this.dynamicAnim && this.w.globals.dataChanged && (i = this.getPiePath({
                         me: this,
                         startAngle: t,
                         angle: e - t,
                         size: this.size
                     })), i
                 }
             }, {
                 key: "getPiePath",
                 value: function (t) {
                     var e = t.me,
                         i = t.startAngle,
                         a = t.angle,
                         s = t.size,
                         n = this.w,
                         r = i,
                         o = Math.PI * (r - 90) / 180,
                         l = a + i;
                     360 < l && (l = 360);
                     var h = Math.PI * (l - 90) / 180,
                         c = e.centerX + s * Math.cos(o),
                         u = e.centerY + s * Math.sin(o),
                         d = e.centerX + s * Math.cos(h),
                         f = e.centerY + s * Math.sin(h),
                         p = L.default.polarToCartesian(e.centerX, e.centerY, e.donutSize, l),
                         g = L.default.polarToCartesian(e.centerX, e.centerY, e.donutSize, r),
                         x = 180 < a ? 1 : 0;
                     return "donut" === n.config.chart.type ? ["M", c, u, "A", s, s, 0, x, 1, d, f, "L", p.x, p.y, "A", e.donutSize, e.donutSize, 0, x, 0, g.x, g.y, "L", c, u, "z"].join(" ") : "pie" === n.config.chart.type ? ["M", c, u, "A", s, s, 0, x, 1, d, f, "L", e.centerX, e.centerY, "L", c, u].join(" ") : ["M", c, u, "A", s, s, 0, x, 1, d, f].join(" ")
                 }
             }, {
                 key: "renderInnerDataLabels",
                 value: function (t, e) {
                     var i = this.w,
                         a = new E.default(this.ctx),
                         s = a.group({
                             class: "apexcharts-datalabels-group",
                             transform: "translate(" + (e.translateX ? e.translateX : 0) + ", " + (e.translateY ? e.translateY : 0) + ")"
                         }),
                         n = t.total.show;
                     s.node.style.opacity = e.opacity;
                     var r = e.centerX,
                         o = e.centerY,
                         l = void 0,
                         h = void 0;
                     l = void 0 === t.name.color ? i.globals.colors[0] : t.name.color, h = void 0 === t.value.color ? i.config.chart.foreColor : t.value.color;
                     var c = t.value.formatter,
                         u = "",
                         d = "";
                     if (n ? (l = t.total.color, d = t.total.label, u = t.total.formatter(i)) : 1 === i.globals.series.length && (u = c(i.globals.series[0], i), d = i.globals.seriesNames[0]), t.name.show) {
                         var f = a.drawText({
                             x: r,
                             y: o + parseInt(t.name.offsetY),
                             text: d,
                             textAnchor: "middle",
                             foreColor: l,
                             fontSize: t.name.fontSize,
                             fontFamily: t.name.fontFamily
                         });
                         f.node.classList.add("apexcharts-datalabel-label"), s.add(f)
                     }
                     if (t.value.show) {
                         var p = t.name.show ? parseInt(t.value.offsetY) + 16 : t.value.offsetY,
                             g = a.drawText({
                                 x: r,
                                 y: o + p,
                                 text: u,
                                 textAnchor: "middle",
                                 foreColor: h,
                                 fontSize: t.value.fontSize,
                                 fontFamily: t.value.fontFamily
                             });
                         g.node.classList.add("apexcharts-datalabel-value"), s.add(g)
                     }
                     return s
                 }
             }, {
                 key: "printInnerLabels",
                 value: function (t, e, i, a) {
                     var s = this.w,
                         n = void 0;
                     a ? n = void 0 === t.name.color ? s.globals.colors[parseInt(a.parentNode.getAttribute("rel")) - 1] : t.name.color : 1 < s.globals.series.length && t.total.show && (n = t.total.color);
                     var r = s.globals.dom.baseEl.querySelector(".apexcharts-datalabel-label"),
                         o = s.globals.dom.baseEl.querySelector(".apexcharts-datalabel-value");
                     i = (0, t.value.formatter)(i, s), a || "function" != typeof t.total.formatter || (i = t.total.formatter(s)), null !== r && (r.textContent = e), null !== o && (o.textContent = i), null !== r && (r.style.fill = n)
                 }
             }, {
                 key: "dataLabelsMouseIn",
                 value: function (t, e) {
                     var i = this.w,
                         a = t.getAttribute("data:value"),
                         s = i.globals.seriesNames[parseInt(t.parentNode.getAttribute("rel")) - 1];
                     1 < i.globals.series.length && this.printInnerLabels(e, s, a, t);
                     var n = i.globals.dom.baseEl.querySelector(".apexcharts-datalabels-group");
                     null !== n && (n.style.opacity = 1)
                 }
             }, {
                 key: "dataLabelsMouseout",
                 value: function (t, e) {
                     var i = this.w,
                         a = i.globals.dom.baseEl.querySelector(".apexcharts-datalabels-group");
                     e.total.show && 1 < i.globals.series.length ? new s(this.ctx).printInnerLabels(e, e.total.label, e.total.formatter(i)) : null !== a && 1 < i.globals.series.length && (a.style.opacity = 0)
                 }
             }]), s
         }();
         e.default = n
     }, function (t, e, i) {
         "use strict";
         var a = function () {
                 function a(t, e) {
                     for (var i = 0; i < e.length; i++) {
                         var a = e[i];
                         a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                     }
                 }
                 return function (t, e, i) {
                     return e && a(t.prototype, e), i && a(t, i), t
                 }
             }(),
             E = s(i(26)),
             T = s(i(11)),
             z = s(i(5)),
             X = s(i(0)),
             O = s(i(27));

         function s(t) {
             return t && t.__esModule ? t : {
                 default: t
             }
         }
         var n = function () {
             function e(t) {
                 ! function (t, e) {
                     if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                 }(this, e), this.ctx = t, this.w = t.w, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled, this.radiusSizes = []
             }
             return a(e, [{
                 key: "draw",
                 value: function (t, e, i) {
                     var a = this.w,
                         s = new E.default(this.ctx),
                         n = new X.default(this.ctx),
                         r = new z.default(this.ctx),
                         o = new T.default(this.ctx),
                         l = i.realIndex,
                         h = i.pointsPos,
                         c = i.zRatio,
                         u = i.elParent,
                         d = o.fillPath(t, {
                             seriesNumber: l
                         }),
                         f = n.group({
                             class: "apexcharts-series-markers apexcharts-series-" + a.config.chart.type
                         });
                     if (f.attr("clip-path", "url(#gridRectMarkerMask" + a.globals.cuid + ")"), h.x instanceof Array)
                         for (var p = 0; p < h.x.length; p++) {
                             var g = e + 1;
                             0 === e && 0 === p && (g = 0), 0 === e && 1 === p && (g = 1);
                             var x = 0,
                                 v = a.globals.markers.size[l];
                             c !== 1 / 0 && (v = a.globals.seriesZ[l][g] / c, void 0 === this.radiusSizes[l] && this.radiusSizes.push([]), this.radiusSizes[l].push(v)), a.config.chart.animations.enabled || (x = v);
                             var b = h.x[p],
                                 m = h.y[p];
                             if (m = m || 0, x = x || 0, 0 === (b = b || 0) && 0 === m || void 0 === a.globals.series[l][g]) return;
                             var y = n.drawCircle(x);
                             if (y.attr({
                                     cx: b,
                                     cy: m,
                                     fill: d
                                 }), a.config.chart.dropShadow.enabled && r.dropShadow(y, {
                                     top: a.config.chart.dropShadow.top,
                                     left: a.config.chart.dropShadow.left,
                                     blur: a.config.chart.dropShadow.blur
                                 }), this.initialAnim && !a.globals.dataChanged) {
                                 var w = 1;
                                 a.globals.resized || (w = a.config.chart.animations.speed), s.animateCircleRadius(y, 0, v, w, a.globals.easing)
                             }
                             if (a.globals.dataChanged)
                                 if (this.dynamicAnim) {
                                     var k, S = a.config.chart.animations.dynamicAnimation.speed,
                                         A = void 0,
                                         C = void 0,
                                         P = void 0;
                                     null != (k = a.globals.previousPaths[l] && a.globals.previousPaths[l][e]) && (A = k.x, C = k.y, P = void 0 !== k.r ? k.r : v);
                                     for (var M = 0; M < a.globals.collapsedSeries.length; M++) a.globals.collapsedSeries[M].index === l && (S = 1, v = 0);
                                     0 === b && 0 === m && (v = 0), s.animateCircle(y, {
                                         cx: A,
                                         cy: C,
                                         r: P
                                     }, {
                                         cx: b,
                                         cy: m,
                                         r: v
                                     }, S, a.globals.easing)
                                 } else y.attr({
                                     r: v
                                 });
                             y.attr({
                                 rel: g,
                                 j: g,
                                 index: l,
                                 "default-marker-size": v
                             });
                             var L = new O.default(this.ctx);
                             L.setSelectedPointFilter(y, l, g), L.addEvents(y), y.node.classList.add("apexcharts-marker"), f.add(y), u.add(f)
                         }
                 }
             }, {
                 key: "centerTextInBubble",
                 value: function (t) {
                     var e = this.w;
                     return {
                         y: t += parseInt(e.config.dataLabels.style.fontSize) / 4
                     }
                 }
             }]), e
         }();
         t.exports = n
     }, function (t, e, i) {
         "use strict";
         Object.defineProperty(e, "__esModule", {
             value: !0
         });
         var a = function () {
                 function a(t, e) {
                     for (var i = 0; i < e.length; i++) {
                         var a = e[i];
                         a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                     }
                 }
                 return function (t, e, i) {
                     return e && a(t.prototype, e), i && a(t, i), t
                 }
             }(),
             b = s(i(0)),
             m = s(i(5));

         function s(t) {
             return t && t.__esModule ? t : {
                 default: t
             }
         }
         var n = function () {
             function e(t) {
                 ! function (t, e) {
                     if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                 }(this, e), this.ctx = t, this.w = t.w
             }
             return a(e, [{
                 key: "drawXCrosshairs",
                 value: function () {
                     var t = this.w,
                         e = new b.default(this.ctx),
                         i = new m.default(this.ctx),
                         a = t.config.xaxis.crosshairs.fill.gradient,
                         s = t.config.xaxis.crosshairs.dropShadow,
                         n = t.config.xaxis.crosshairs.fill.type,
                         r = a.colorFrom,
                         o = a.colorTo,
                         l = a.opacityFrom,
                         h = a.opacityTo,
                         c = a.stops,
                         u = s.enabled,
                         d = s.left,
                         f = s.top,
                         p = s.blur,
                         g = s.opacity,
                         x = t.config.xaxis.crosshairs.fill.color;
                     if (t.config.xaxis.crosshairs.show) {
                         "gradient" === n && (x = e.drawGradient("vertical", r, o, l, h, null, c));
                         var v = e.drawRect();
                         v.attr({
                             class: "apexcharts-xcrosshairs",
                             x: 0,
                             y: 0,
                             width: 0,
                             height: t.globals.gridHeight,
                             fill: x,
                             filter: "none",
                             "fill-opacity": t.config.xaxis.crosshairs.opacity,
                             stroke: t.config.xaxis.crosshairs.stroke.color,
                             "stroke-width": t.config.xaxis.crosshairs.stroke.width,
                             "stroke-dasharray": t.config.xaxis.crosshairs.stroke.dashArray
                         }), u && (v = i.dropShadow(v, {
                             left: d,
                             top: f,
                             blur: p,
                             opacity: g
                         })), t.globals.dom.elGraphical.add(v)
                     }
                 }
             }, {
                 key: "drawYCrosshairs",
                 value: function () {
                     var t = this.w,
                         e = new b.default(this.ctx),
                         i = t.config.yaxis[0].crosshairs;
                     if (t.config.yaxis[0].crosshairs.show) {
                         var a = e.drawLine(0, 0, t.globals.gridWidth, 0, i.stroke.color, i.stroke.dashArray, i.stroke.width);
                         a.attr({
                             class: "apexcharts-ycrosshairs"
                         }), t.globals.dom.elGraphical.add(a)
                     }
                     var s = e.drawLine(0, 0, t.globals.gridWidth, 0, i.stroke.color, 0, 0);
                     s.attr({
                         class: "apexcharts-ycrosshairs-hidden"
                     }), t.globals.dom.elGraphical.add(s)
                 }
             }]), e
         }();
         e.default = n
     }, function (t, e, i) {
         "use strict";
         Object.defineProperty(e, "__esModule", {
             value: !0
         });
         var a = function () {
             function a(t, e) {
                 for (var i = 0; i < e.length; i++) {
                     var a = e[i];
                     a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                 }
             }
             return function (t, e, i) {
                 return e && a(t.prototype, e), i && a(t, i), t
             }
         }();
         var s = function () {
             function e(t) {
                 ! function (t, e) {
                     if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                 }(this, e), this.ctx = t, this.w = t.w
             }
             return a(e, [{
                 key: "getSvgString",
                 value: function () {
                     return this.w.globals.dom.Paper.svg()
                 }
             }, {
                 key: "cleanup",
                 value: function () {
                     var t = this.w,
                         e = t.globals.dom.baseEl.querySelector(".apexcharts-xcrosshairs"),
                         i = t.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs");
                     e && e.setAttribute("x", -500), i && (i.setAttribute("y1", -100), i.setAttribute("y2", -100))
                 }
             }, {
                 key: "svgUrl",
                 value: function () {
                     this.cleanup();
                     var t = this.getSvgString(),
                         e = new Blob([t], {
                             type: "image/svg+xml;charset=utf-8"
                         });
                     return URL.createObjectURL(e)
                 }
             }, {
                 key: "exportToSVG",
                 value: function () {
                     this.triggerDownload(this.svgUrl(), ".svg")
                 }
             }, {
                 key: "exportToPng",
                 value: function () {
                     var e = this,
                         t = this.w;
                     this.cleanup();
                     var i = document.createElement("canvas");
                     i.width = t.globals.svgWidth, i.height = t.globals.svgHeight;
                     var a = "transparent" === t.config.chart.background ? "#fff" : t.config.chart.background,
                         s = i.getContext("2d");
                     s.fillStyle = a, s.fillRect(0, 0, i.width, i.height);
                     var n = window.URL || window.webkitURL || window,
                         r = new Image;
                     r.crossOrigin = "anonymous";
                     var o = this.getSvgString(),
                         l = "data:image/svg+xml," + encodeURIComponent(o);
                     r.onload = function () {
                         s.drawImage(r, 0, 0), n.revokeObjectURL(l);
                         var t = i.toDataURL("image/png").replace("image/png", "image/octet-stream");
                         e.triggerDownload(t, ".png")
                     }, r.src = l
                 }
             }, {
                 key: "triggerDownload",
                 value: function (t, e) {
                     var i = document.createElement("a");
                     i.href = t, i.download = this.w.globals.chartID + e, document.body.appendChild(i), i.click(), document.body.removeChild(i)
                 }
             }]), e
         }();
         e.default = s
     }, function (t, e, i) {
         "use strict";
         Object.defineProperty(e, "__esModule", {
             value: !0
         });
         var a = function () {
                 function a(t, e) {
                     for (var i = 0; i < e.length; i++) {
                         var a = e[i];
                         a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                     }
                 }
                 return function (t, e, i) {
                     return e && a(t.prototype, e), i && a(t, i), t
                 }
             }(),
             g = n(i(1)),
             s = n(i(138));

         function n(t) {
             return t && t.__esModule ? t : {
                 default: t
             }
         }

         function d(t) {
             if (Array.isArray(t)) {
                 for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
                 return i
             }
             return Array.from(t)
         }
         var r = function () {
             function e(t) {
                 ! function (t, e) {
                     if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                 }(this, e), this.ctx = t, this.w = t.w, this.scales = new s.default(t)
             }
             return a(e, [{
                 key: "init",
                 value: function () {
                     this.setYRange(), this.setXRange(), this.setZRange()
                 }
             }, {
                 key: "getMinYMaxY",
                 value: function (t) {
                     var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : Number.MAX_VALUE,
                         i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : Number.MIN_SAFE_INTEGER,
                         a = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
                         s = this.w.globals,
                         n = -Number.MAX_VALUE,
                         r = Number.MIN_VALUE;
                     null === a && (a = t + 1);
                     var o = s.series,
                         l = o,
                         h = o;
                     "candlestick" === this.w.config.chart.type && (l = s.seriesCandleL, h = s.seriesCandleH);
                     for (var c = t; c < a; c++) {
                         s.dataPoints = Math.max(s.dataPoints, o[c].length), g.default.isIE11() && (r = Math.min.apply(Math, d(l[c]).concat([0])));
                         for (var u = 0; u < s.series[c].length; u++) null !== o[c][u] && g.default.isNumber(o[c][u]) ? (n = Math.max(n, h[c][u]), e = Math.min(e, l[c][u]), i = Math.max(i, l[c][u]), g.default.isFloat(o[c][u]) && (s.yValueDecimal = Math.max(s.yValueDecimal, o[c][u].toString().split(".")[1].length)), r > l[c][u] && l[c][u] < 0 && (r = l[c][u])) : s.hasNullValues = !0
                     }
                     return {
                         minY: r,
                         maxY: n,
                         lowestY: e,
                         highestY: i
                     }
                 }
             }, {
                 key: "setYRange",
                 value: function () {
                     var i = this.w.globals,
                         t = this.w.config;
                     i.maxY = -Number.MAX_VALUE, i.minY = Number.MIN_VALUE;
                     var a = t.yaxis,
                         e = Number.MAX_VALUE;
                     if (i.isMultipleYAxis)
                         for (var s = 0; s < i.series.length; s++) {
                             var n = this.getMinYMaxY(s, e, null, s + 1);
                             i.minYArr.push(n.minY), i.maxYArr.push(n.maxY), e = n.lowestY
                         }
                     var r = this.getMinYMaxY(0, e, null, i.series.length);
                     if (i.minY = r.minY, i.maxY = r.maxY, e = r.lowestY, t.chart.stacked) {
                         for (var o = [], l = [], h = 0; h < i.series[i.maxValsInArrayIndex].length; h++)
                             for (var c = 0, u = 0, d = 0; d < i.series.length; d++) null !== i.series[d][h] && g.default.isNumber(i.series[d][h]) && (0 < i.series[d][h] ? c = c + parseInt(i.series[d][h]) + 1e-4 : u += parseInt(i.series[d][h])), d === i.series.length - 1 && (o.push(c), l.push(u));
                         for (var f = 0; f < o.length; f++) i.maxY = Math.max(i.maxY, o[f]), i.minY = Math.min(i.minY, l[f])
                     }
                     if (("line" === t.chart.type || "area" === t.chart.type || "candlestick" === t.chart.type) && i.minY === Number.MIN_VALUE && e !== Number.MAX_SAFE_INTEGER) {
                         var p = i.maxY - e;
                         0 <= e && e <= 10 && (p = 0), i.minY = e - 5 * p / 100, (0 < e && i.maxY < 50 || 0 < e && i.minY < 0) && (i.minY = 0), 10 < i.maxY && (i.maxY = i.maxY + 5 * p / 100 + .6)
                     }
                     t.yaxis.map(function (t, e) {
                         void 0 !== t.max && "number" == typeof t.max && (i.maxYArr[e] = t.max, i.maxY = a[0].max), void 0 !== t.min && "number" == typeof t.min && (i.minYArr[e] = t.min, i.minY = a[0].min)
                     }), i.isMultipleYAxis ? (this.scales.setMultipleYScales(), i.yAxisScale.forEach(function (t, e) {
                         i.minYArr[e] = t.niceMin, i.maxYArr[e] = t.niceMax
                     })) : (this.scales.setYScaleForIndex(0, i.minY, i.maxY), i.minY = i.yAxisScale[0].niceMin, i.maxY = i.yAxisScale[0].niceMax, i.minYArr[0] = i.yAxisScale[0].niceMin, i.maxYArr[0] = i.yAxisScale[0].niceMax)
                 }
             }, {
                 key: "setXRange",
                 value: function () {
                     var t = this.w.globals,
                         e = this.w.config;
                     if (t.isXNumeric)
                         for (var i = 0; i < t.series.length; i++)
                             if (t.labels[i])
                                 for (var a = 0; a < t.labels[i].length; a++) null !== t.labels[i][a] && g.default.isNumber(t.labels[i][a]) && (t.maxX = Math.max(t.maxX, t.labels[i][a]), t.initialmaxX = Math.max(t.maxX, t.labels[i][a]), t.minX = Math.min(t.minX, t.labels[i][a]), t.initialminX = Math.min(t.minX, t.labels[i][a]));
                     if (t.noLabelsProvided && 0 === e.xaxis.categories.length && (t.maxX = t.labels[t.labels.length - 1], t.initialmaxX = t.labels[t.labels.length - 1], t.minX = 1, t.initialminX = 1), (t.comboChartsHasBars || "bar" === e.chart.type && "category" !== e.xaxis.type) && "category" !== e.xaxis.type) {
                         var s = t.minX - t.svgWidth / t.dataPoints * (Math.abs(t.maxX - t.minX) / t.svgWidth) / 3;
                         t.minX = s, t.initialminX = s;
                         var n = t.maxX + t.svgWidth / t.dataPoints * (Math.abs(t.maxX - t.minX) / t.svgWidth) / 3;
                         t.maxX = n, t.initialmaxX = n
                     }
                     if (t.isXNumeric || t.noLabelsProvided) {
                         var r = void 0;
                         void 0 === e.xaxis.tickAmount ? (r = Math.round(t.svgWidth / 150), "numeric" === e.xaxis.type && t.dataPoints < 20 && (r = t.dataPoints - 1), r > t.dataPoints && 0 !== t.dataPoints && (r = t.dataPoints - 1)) : r = "dataPoints" === e.xaxis.tickAmount ? t.series[t.maxValsInArrayIndex].length - 1 : e.xaxis.tickAmount, void 0 !== e.xaxis.max && "number" == typeof e.xaxis.max && (t.maxX = e.xaxis.max), void 0 !== e.xaxis.min && "number" == typeof e.xaxis.min && (t.minX = e.xaxis.min), void 0 !== e.xaxis.range && (t.minX = t.maxX - e.xaxis.range), t.minX !== Number.MAX_VALUE && t.maxX !== -Number.MAX_VALUE ? t.xAxisScale = this.scales.linearScale(t.minX, t.maxX, r) : (t.xAxisScale = this.scales.linearScale(1, r, r), t.noLabelsProvided && 0 < t.labels.length && (t.xAxisScale = this.scales.linearScale(1, t.labels.length, r - 1), t.seriesX = t.labels.slice())), ("numeric" === e.xaxis.type || "datetime" === e.xaxis.type || "category" === e.xaxis.type && !t.noLabelsProvided) && (t.labels = t.xAxisScale.result.slice())
                     }
                 }
             }, {
                 key: "setZRange",
                 value: function () {
                     var t = this.w.globals;
                     if (t.isDataXYZ)
                         for (var e = 0; e < t.series.length; e++)
                             if (void 0 !== t.seriesZ[e])
                                 for (var i = 0; i < t.seriesZ[e].length; i++) null !== t.seriesZ[e][i] && g.default.isNumber(t.seriesZ[e][i]) && (t.maxZ = Math.max(t.maxZ, t.seriesZ[e][i]), t.minZ = Math.min(t.minZ, t.seriesZ[e][i]))
                 }
             }]), e
         }();
         e.default = r
     }, function (t, e, i) {
         "use strict";
         Object.defineProperty(e, "__esModule", {
             value: !0
         });
         var b = Object.assign || function (t) {
                 for (var e = 1; e < arguments.length; e++) {
                     var i = arguments[e];
                     for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (t[a] = i[a])
                 }
                 return t
             },
             a = function () {
                 function a(t, e) {
                     for (var i = 0; i < e.length; i++) {
                         var a = e[i];
                         a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                     }
                 }
                 return function (t, e, i) {
                     return e && a(t.prototype, e), i && a(t, i), t
                 }
             }(),
             S = n(i(53)),
             s = n(i(48)),
             o = n(i(0));

         function n(t) {
             return t && t.__esModule ? t : {
                 default: t
             }
         }
         var r = function () {
             function e(t) {
                 ! function (t, e) {
                     if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                 }(this, e), this.ctx = t, this.w = t.w, this.timeScaleArray = []
             }
             return a(e, [{
                 key: "calculateTimeScaleTicks",
                 value: function (t, e) {
                     var r = this,
                         o = this.w;
                     if (o.globals.allSeriesCollapsed) return o.globals.labels = [], o.globals.timelineLabels = [], [];
                     var i = new S.default(this.ctx),
                         a = (e - t) / 864e5;
                     this.determineInterval(a), o.globals.disableZoomIn = !1, o.globals.disableZoomOut = !1, a < .005 ? o.globals.disableZoomIn = !0 : 5e4 < a && (o.globals.disableZoomOut = !0);
                     var s = i.getTimeUnitsfromTimestamp(t, e),
                         n = o.globals.gridWidth / a,
                         l = n / 24,
                         h = l / 60,
                         c = Math.floor(24 * a),
                         u = Math.floor(24 * a * 60),
                         d = Math.floor(a),
                         f = Math.floor(a / 30),
                         p = Math.floor(a / 365),
                         g = {
                             minMinute: s.minMinute,
                             minHour: s.minHour,
                             minDate: s.minDate,
                             minMonth: s.minMonth,
                             minYear: s.minYear
                         },
                         x = {
                             firstVal: g,
                             currentMinute: g.minMinute,
                             currentHour: g.minHour,
                             currentMonthDate: g.minDate,
                             currentDate: g.minDate,
                             currentMonth: g.minMonth,
                             currentYear: g.minYear,
                             daysWidthOnXAxis: n,
                             hoursWidthOnXAxis: l,
                             minutesWidthOnXAxis: h,
                             numberOfMinutes: u,
                             numberOfHours: c,
                             numberOfDays: d,
                             numberOfMonths: f,
                             numberOfYears: p
                         };
                     switch (this.tickInterval) {
                         case "years":
                             this.generateYearScale(x);
                             break;
                         case "months":
                         case "half_year":
                             this.generateMonthScale(x);
                             break;
                         case "months_days":
                         case "months_fortnight":
                         case "days":
                         case "week_days":
                             this.generateDayScale(x);
                             break;
                         case "hours":
                             this.generateHourScale(x);
                             break;
                         case "minutes":
                             this.generateMinuteScale(x)
                     }
                     var v = this.timeScaleArray.map(function (t) {
                         var e = {
                             position: t.position,
                             unit: t.unit,
                             year: t.year,
                             day: t.day ? t.day : 1,
                             hour: t.hour ? t.hour : 0,
                             month: t.month + 1
                         };
                         return "month" === t.unit ? b({}, e, {
                             value: t.value + 1
                         }) : "day" === t.unit || "hour" === t.unit ? b({}, e, {
                             value: t.value
                         }) : "minute" === t.unit ? b({}, e, {
                             value: t.value,
                             minute: t.value
                         }) : t
                     });
                     return v.filter(function (t) {
                         var e = 1,
                             i = Math.ceil(o.globals.gridWidth / 120),
                             a = t.value;
                         void 0 !== o.config.xaxis.tickAmount && (i = o.config.xaxis.tickAmount), v.length > i && (e = Math.floor(v.length / i));
                         var s = !1,
                             n = !1;
                         switch (r.tickInterval) {
                             case "half_year":
                                 e = 7, "year" === t.unit && (s = !0);
                                 break;
                             case "months":
                                 e = 1, "year" === t.unit && (s = !0);
                                 break;
                             case "months_fortnight":
                                 e = 15, "year" !== t.unit && "month" !== t.unit || (s = !0), 30 === a && (n = !0);
                                 break;
                             case "months_days":
                                 e = 10, "month" === t.unit && (s = !0), 30 === a && (n = !0);
                                 break;
                             case "week_days":
                                 e = 8, "month" === t.unit && (s = !0);
                                 break;
                             case "days":
                                 e = 1, "month" === t.unit && (s = !0);
                                 break;
                             case "hours":
                                 "day" === t.unit && (s = !0);
                                 break;
                             case "minutes":
                                 a % 5 != 0 && (n = !0)
                         }
                         if ("minutes" === r.tickInterval || "hours" === r.tickInterval) {
                             if (!n) return !0
                         } else if ((a % e == 0 || s) && !n) return !0
                     })
                 }
             }, {
                 key: "recalcDimensionsBasedOnFormat",
                 value: function (t) {
                     var e = this.w,
                         i = this.formatDates(t),
                         a = this.removeOverlappingTS(i);
                     e.globals.timelineLabels = a.slice(), new s.default(this.ctx).plotCoords()
                 }
             }, {
                 key: "determineInterval",
                 value: function (t) {
                     switch (!0) {
                         case 1825 < t:
                             this.tickInterval = "years";
                             break;
                         case 800 < t && t <= 1825:
                             this.tickInterval = "half_year";
                             break;
                         case 180 < t && t <= 800:
                             this.tickInterval = "months";
                             break;
                         case 90 < t && t <= 180:
                             this.tickInterval = "months_fortnight";
                             break;
                         case 60 < t && t <= 90:
                             this.tickInterval = "months_days";
                             break;
                         case 30 < t && t <= 60:
                             this.tickInterval = "week_days";
                             break;
                         case 2 < t && t <= 30:
                             this.tickInterval = "days";
                             break;
                         case .1 < t && t <= 2:
                             this.tickInterval = "hours";
                             break;
                         case t < .1:
                             this.tickInterval = "minutes";
                             break;
                         default:
                             this.tickInterval = "days"
                     }
                 }
             }, {
                 key: "generateYearScale",
                 value: function (t) {
                     var e = t.firstVal,
                         i = t.currentMonth,
                         a = t.currentYear,
                         s = t.daysWidthOnXAxis,
                         n = t.numberOfYears,
                         r = e.minYear,
                         o = 0,
                         l = new S.default(this.ctx),
                         h = "year";
                     if (1 < e.minDate && 0 < e.minMonth) {
                         var c = l.determineRemainingDaysOfYear(e.minYear, e.minMonth, e.minDate);
                         o = (l.determineDaysOfYear(e.minYear) - c + 1) * s, r = e.minYear + 1, this.timeScaleArray.push({
                             position: o,
                             value: r,
                             unit: h,
                             year: r,
                             month: this.monthMod(i + 1)
                         })
                     } else 1 === e.minDate && 0 === e.minMonth && this.timeScaleArray.push({
                         position: o,
                         value: r,
                         unit: h,
                         year: a,
                         month: this.monthMod(i + 1)
                     });
                     for (var u = r, d = o, f = 0; f < n; f++) u++, d = l.determineDaysOfYear(u - 1) * s + d, this.timeScaleArray.push({
                         position: d,
                         value: u,
                         unit: h,
                         year: u,
                         month: 1
                     })
                 }
             }, {
                 key: "generateMonthScale",
                 value: function (t) {
                     var e = t.firstVal,
                         i = t.currentMonthDate,
                         a = t.currentMonth,
                         s = t.currentYear,
                         n = t.daysWidthOnXAxis,
                         r = t.numberOfMonths,
                         o = a,
                         l = 0,
                         h = new S.default(this.ctx),
                         c = "month",
                         u = 0;
                     if (1 < e.minDate) {
                         l = (h.determineDaysOfMonths(a + 1, e.minYear) - i + 1) * n, o = this.monthMod(a + 1);
                         var d = s + u,
                             f = this.monthMod(o),
                             p = o;
                         0 === o && (c = "year", p = d, d += u += f = 1), this.timeScaleArray.push({
                             position: l,
                             value: p,
                             unit: c,
                             year: d,
                             month: f
                         })
                     } else this.timeScaleArray.push({
                         position: l,
                         value: o,
                         unit: c,
                         year: s,
                         month: this.monthMod(a)
                     });
                     for (var g = o + 1, x = l, v = 0, b = 1; v < r; v++, b++) {
                         0 === (g = this.monthMod(g)) ? (c = "year", u += 1) : c = "month";
                         var m = s + Math.floor(g / 12) + u;
                         x = h.determineDaysOfMonths(g, m) * n + x;
                         var y = 0 === g ? m : g;
                         this.timeScaleArray.push({
                             position: x,
                             value: y,
                             unit: c,
                             year: m,
                             month: 0 === g ? 1 : g
                         }), g++
                     }
                 }
             }, {
                 key: "generateDayScale",
                 value: function (t) {
                     var e = t.firstVal,
                         i = t.currentMonth,
                         a = t.currentYear,
                         s = t.hoursWidthOnXAxis,
                         n = t.numberOfDays,
                         r = new S.default(this.ctx),
                         o = "day",
                         l = (24 - e.minHour) * s,
                         h = e.minDate + 1,
                         c = h,
                         u = function (t, e, i) {
                             return r.determineDaysOfMonths(e + 1, i) < t ? (o = "month", c = e += d = 1) : e
                         },
                         d = h,
                         f = u(d, i, a);
                     this.timeScaleArray.push({
                         position: l,
                         value: c,
                         unit: o,
                         year: a,
                         month: this.monthMod(f),
                         day: d
                     });
                     for (var p = l, g = 0; g < n; g++) {
                         o = "day", f = u(d += 1, f, a + Math.floor(f / 12) + 0);
                         var x = a + Math.floor(f / 12) + 0;
                         p = 24 * s + p;
                         var v = 1 === d ? this.monthMod(f) : d;
                         this.timeScaleArray.push({
                             position: p,
                             value: v,
                             unit: o,
                             year: x,
                             month: this.monthMod(f),
                             day: v
                         })
                     }
                 }
             }, {
                 key: "generateHourScale",
                 value: function (t) {
                     var e = t.firstVal,
                         i = t.currentDate,
                         a = t.currentMonth,
                         s = t.currentYear,
                         n = t.minutesWidthOnXAxis,
                         r = t.numberOfHours,
                         o = new S.default(this.ctx),
                         l = "hour",
                         h = function (t, e) {
                             return o.determineDaysOfMonths(e + 1, s) < t ? e += 1 : e
                         },
                         c = 60 - e.minMinute,
                         u = c * n,
                         d = e.minHour + 1,
                         f = d + 1;
                     60 === c && (u = 0, f = (d = e.minHour) + 1);
                     var p = i,
                         g = h(p, a);
                     this.timeScaleArray.push({
                         position: u,
                         value: d,
                         unit: l,
                         day: p,
                         hour: f,
                         year: s,
                         month: this.monthMod(g)
                     });
                     for (var x, v, b = u, m = 0; m < r; m++) {
                         if (l = "hour", 24 <= f) {
                             f = 0, l = "day";
                             var y = (x = p += 1, v = g, o.determineDaysOfMonths(v + 1, s) < x && (v += p = 1), {
                                 month: v,
                                 date: p
                             });
                             g = h(p, g = y.month)
                         }
                         var w = s + Math.floor(g / 12) + 0;
                         b = 0 === f && 0 === m ? c * n : 60 * n + b;
                         var k = 0 === f ? p : f;
                         this.timeScaleArray.push({
                             position: b,
                             value: k,
                             unit: l,
                             hour: f,
                             day: p,
                             year: w,
                             month: this.monthMod(g)
                         }), f++
                     }
                 }
             }, {
                 key: "generateMinuteScale",
                 value: function (t) {
                     var e = t.firstVal,
                         i = t.currentMinute,
                         a = t.currentHour,
                         s = t.currentDate,
                         n = t.currentMonth,
                         r = t.currentYear,
                         o = t.minutesWidthOnXAxis,
                         l = t.numberOfMinutes,
                         h = o - (i - e.minMinute),
                         c = e.minMinute + 1,
                         u = c + 1,
                         d = s,
                         f = n,
                         p = r,
                         g = a;
                     this.timeScaleArray.push({
                         position: h,
                         value: c,
                         unit: "minute",
                         day: d,
                         hour: g,
                         minute: u,
                         year: p,
                         month: this.monthMod(f)
                     });
                     for (var x = h, v = 0; v < l; v++) {
                         60 <= u && (u = 0, 24 === (g += 1) && (g = 0));
                         var b = r + Math.floor(f / 12) + 0;
                         x = o + x;
                         var m = u;
                         this.timeScaleArray.push({
                             position: x,
                             value: m,
                             unit: "minute",
                             hour: g,
                             minute: u,
                             day: d,
                             year: b,
                             month: this.monthMod(f)
                         }), u++
                     }
                 }
             }, {
                 key: "createRawDateString",
                 value: function (t, e) {
                     var i = t.year;
                     return i += "-" + ("0" + t.month.toString()).slice(-2), "day" === t.unit ? i += "day" === t.unit ? "-" + ("0" + e).slice(-2) : "-01" : i += "-" + ("0" + (t.day ? t.day : "1")).slice(-2), "hour" === t.unit ? i += "hour" === t.unit ? "T" + ("0" + e).slice(-2) : "T00" : i += "T" + ("0" + (t.hour ? t.hour : "0")).slice(-2), i += "minute" === t.unit ? ":" + ("0" + e).slice(-2) + ":00.000Z" : ":00:00.000Z"
                 }
             }, {
                 key: "formatDates",
                 value: function (t) {
                     var o = this,
                         l = this.w;
                     return t.map(function (t) {
                         var e = t.value.toString(),
                             i = new S.default(o.ctx),
                             a = o.createRawDateString(t, e),
                             s = new Date(Date.parse(a));
                         if (void 0 === l.config.xaxis.labels.format) {
                             var n = "dd MMM",
                                 r = l.config.xaxis.labels.datetimeFormatter;
                             "year" === t.unit && (n = r.year), "month" === t.unit && (n = r.month), "day" === t.unit && (n = r.day), "hour" === t.unit && (n = r.hour), "minute" === t.unit && (n = r.minute), e = i.formatDate(s, n, !0, !1)
                         } else e = i.formatDate(s, l.config.xaxis.labels.format);
                         return {
                             dateString: a,
                             position: t.position,
                             value: e,
                             unit: t.unit,
                             year: t.year,
                             month: t.month
                         }
                     })
                 }
             }, {
                 key: "removeOverlappingTS",
                 value: function (a) {
                     var s = this,
                         n = new o.default(this.ctx),
                         r = 0,
                         t = a.map(function (t, e) {
                             if (0 < e && s.w.config.xaxis.labels.hideOverlappingLabels) {
                                 var i = n.getTextRects(a[r].value).width;
                                 return a[r].position + i + 10 < t.position ? (r = e, t) : null
                             }
                             return t
                         });
                     return t = t.filter(function (t) {
                         return null !== t
                     })
                 }
             }, {
                 key: "monthMod",
                 value: function (t) {
                     return t % 12
                 }
             }]), e
         }();
         e.default = r
     }, function (t, e, i) {
         "use strict";
         var a = function () {
                 function a(t, e) {
                     for (var i = 0; i < e.length; i++) {
                         var a = e[i];
                         a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                     }
                 }
                 return function (t, e, i) {
                     return e && a(t.prototype, e), i && a(t, i), t
                 }
             }(),
             r = n(i(0)),
             s = n(i(77)),
             o = n(i(165)),
             l = n(i(168)),
             h = n(i(162)),
             c = n(i(166)),
             u = n(i(164)),
             d = n(i(167)),
             f = n(i(163));

         function n(t) {
             return t && t.__esModule ? t : {
                 default: t
             }
         }
         var p = function () {
             function e(t) {
                 ! function (t, e) {
                     if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                 }(this, e), this.ctx = t, this.w = t.w, this.ev = this.w.config.chart.events, this.localeValues = this.w.globals.locale.toolbar
             }
             return a(e, [{
                 key: "createToolbar",
                 value: function () {
                     var t = this.w,
                         e = document.createElement("div");
                     e.setAttribute("class", "apexcharts-toolbar"), t.globals.dom.elWrap.appendChild(e), this.elZoom = document.createElement("div"), this.elZoomIn = document.createElement("div"), this.elZoomOut = document.createElement("div"), this.elPan = document.createElement("div"), this.elSelection = document.createElement("div"), this.elZoomReset = document.createElement("div"), this.elMenuIcon = document.createElement("div"), this.elMenu = document.createElement("div"), this.elMenuItems = [];
                     var i = [];
                     t.config.chart.toolbar.tools.selection && t.config.chart.selection.enabled && i.push({
                         el: this.elSelection,
                         icon: d.default,
                         title: this.localeValues.selection,
                         class: t.globals.isTouchDevice ? "hidden" : "apexcharts-selection-icon"
                     }), t.config.chart.toolbar.tools.zoomin && t.config.chart.zoom.enabled && i.push({
                         el: this.elZoomIn,
                         icon: c.default,
                         title: this.localeValues.zoomIn,
                         class: "apexcharts-zoom-in-icon"
                     }), t.config.chart.toolbar.tools.zoomout && t.config.chart.zoom.enabled && i.push({
                         el: this.elZoomOut,
                         icon: u.default,
                         title: this.localeValues.zoomOut,
                         class: "apexcharts-zoom-out-icon"
                     }), t.config.chart.toolbar.tools.zoom && t.config.chart.zoom.enabled && i.push({
                         el: this.elZoom,
                         icon: l.default,
                         title: this.localeValues.selectionZoom,
                         class: t.globals.isTouchDevice ? "hidden" : "apexcharts-zoom-icon"
                     }), t.config.chart.toolbar.tools.pan && t.config.chart.zoom.enabled && i.push({
                         el: this.elPan,
                         icon: o.default,
                         title: this.localeValues.pan,
                         class: t.globals.isTouchDevice ? "hidden" : "apexcharts-pan-icon"
                     }), t.config.chart.toolbar.tools.reset && i.push({
                         el: this.elZoomReset,
                         icon: h.default,
                         title: this.localeValues.reset,
                         class: "apexcharts-reset-zoom-icon"
                     }), t.config.chart.toolbar.tools.download && i.push({
                         el: this.elMenuIcon,
                         icon: f.default,
                         title: this.localeValues.menu,
                         class: "apexcharts-menu-icon"
                     });
                     for (var a = 0; a < i.length; a++) r.default.setAttrs(i[a].el, {
                         class: i[a].class,
                         title: i[a].title
                     }), i[a].el.innerHTML = i[a].icon, e.appendChild(i[a].el);
                     e.appendChild(this.elMenu), r.default.setAttrs(this.elMenu, {
                         class: "apexcharts-menu"
                     });
                     for (var s = [{
                             name: "exportSVG",
                             title: this.localeValues.exportToSVG
                         }, {
                             name: "exportPNG",
                             title: this.localeValues.exportToPNG
                         }], n = 0; n < s.length; n++) this.elMenuItems.push(document.createElement("div")), this.elMenuItems[n].innerHTML = s[n].title, r.default.setAttrs(this.elMenuItems[n], {
                         class: "apexcharts-menu-item " + s[n].name,
                         title: s[n].title
                     }), this.elMenu.appendChild(this.elMenuItems[n]);
                     t.globals.zoomEnabled ? this.elZoom.classList.add("selected") : t.globals.panEnabled ? this.elPan.classList.add("selected") : t.globals.selectionEnabled && this.elSelection.classList.add("selected"), this.addToolbarEventListeners()
                 }
             }, {
                 key: "addToolbarEventListeners",
                 value: function () {
                     var e = this;
                     this.elZoomReset.addEventListener("click", this.handleZoomReset.bind(this)), this.elSelection.addEventListener("click", this.toggleSelection.bind(this)), this.elZoom.addEventListener("click", this.toggleZooming.bind(this)), this.elZoomIn.addEventListener("click", this.handleZoomIn.bind(this)), this.elZoomOut.addEventListener("click", this.handleZoomOut.bind(this)), this.elPan.addEventListener("click", this.togglePanning.bind(this)), this.elMenuIcon.addEventListener("click", this.toggleMenu.bind(this)), this.elMenuItems.forEach(function (t) {
                         t.classList.contains("exportSVG") ? t.addEventListener("click", e.downloadSVG.bind(e)) : t.classList.contains("exportPNG") && t.addEventListener("click", e.downloadPNG.bind(e))
                     })
                 }
             }, {
                 key: "toggleSelection",
                 value: function () {
                     this.toggleOtherControls(), this.w.globals.selectionEnabled = !this.w.globals.selectionEnabled, this.elSelection.classList.contains("selected") ? this.elSelection.classList.remove("selected") : this.elSelection.classList.add("selected")
                 }
             }, {
                 key: "toggleZooming",
                 value: function () {
                     this.toggleOtherControls(), this.w.globals.zoomEnabled = !this.w.globals.zoomEnabled, this.elZoom.classList.contains("selected") ? this.elZoom.classList.remove("selected") : this.elZoom.classList.add("selected")
                 }
             }, {
                 key: "getToolbarIconsReference",
                 value: function () {
                     var t = this.w;
                     this.elZoom || (this.elZoom = t.globals.dom.baseEl.querySelector(".apexcharts-zoom-icon")), this.elPan || (this.elPan = t.globals.dom.baseEl.querySelector(".apexcharts-pan-icon")), this.elSelection || (this.elSelection = t.globals.dom.baseEl.querySelector(".apexcharts-selection-icon"))
                 }
             }, {
                 key: "enableZooming",
                 value: function () {
                     this.toggleOtherControls(), this.w.globals.zoomEnabled = !0, this.elZoom && this.elZoom.classList.add("selected"), this.elPan && this.elPan.classList.remove("selected")
                 }
             }, {
                 key: "enablePanning",
                 value: function () {
                     this.toggleOtherControls(), this.w.globals.panEnabled = !0, this.elPan && this.elPan.classList.add("selected"), this.elZoom && this.elZoom.classList.remove("selected")
                 }
             }, {
                 key: "togglePanning",
                 value: function () {
                     this.toggleOtherControls(), this.w.globals.panEnabled = !this.w.globals.panEnabled, this.elPan.classList.contains("selected") ? this.elPan.classList.remove("selected") : this.elPan.classList.add("selected")
                 }
             }, {
                 key: "toggleOtherControls",
                 value: function () {
                     var t = this.w;
                     t.globals.panEnabled = !1, t.globals.zoomEnabled = !1, t.globals.selectionEnabled = !1, this.getToolbarIconsReference(), this.elPan && this.elPan.classList.remove("selected"), this.elSelection && this.elSelection.classList.remove("selected"), this.elZoom && this.elZoom.classList.remove("selected")
                 }
             }, {
                 key: "handleZoomIn",
                 value: function () {
                     var t = this.w,
                         e = (t.globals.minX + t.globals.maxX) / 2,
                         i = (t.globals.minX + e) / 2,
                         a = (t.globals.maxX + e) / 2;
                     t.globals.disableZoomIn || this.zoomUpdateOptions(i, a)
                 }
             }, {
                 key: "handleZoomOut",
                 value: function () {
                     var t = this.w;
                     if (!("datetime" === t.config.xaxis.type && new Date(t.globals.minX).getUTCFullYear() < 1e3)) {
                         var e = (t.globals.minX + t.globals.maxX) / 2,
                             i = t.globals.minX - (e - t.globals.minX),
                             a = t.globals.maxX - (e - t.globals.maxX);
                         t.globals.disableZoomOut || this.zoomUpdateOptions(i, a)
                     }
                 }
             }, {
                 key: "zoomUpdateOptions",
                 value: function (t, e) {
                     var i = {
                             min: t,
                             max: e
                         },
                         a = this.getBeforeZoomRange(i);
                     a && (i = a.xaxis), this.w.globals.zoomed = !0, this.ctx._updateOptions({
                         xaxis: i
                     }, !1, this.w.config.chart.animations.dynamicAnimation.enabled), this.zoomCallback({
                         min: t,
                         max: e
                     })
                 }
             }, {
                 key: "zoomCallback",
                 value: function (t, e) {
                     "function" == typeof this.ev.zoomed && this.ev.zoomed(this.ctx, {
                         xaxis: t,
                         yaxis: e
                     })
                 }
             }, {
                 key: "getBeforeZoomRange",
                 value: function (t, e) {
                     var i = null;
                     return "function" == typeof this.ev.beforeZoom && (i = this.ev.beforeZoom(this, {
                         xaxis: t,
                         yaxis: e
                     })), i
                 }
             }, {
                 key: "toggleMenu",
                 value: function () {
                     this.elMenu.classList.contains("open") ? this.elMenu.classList.remove("open") : this.elMenu.classList.add("open")
                 }
             }, {
                 key: "downloadPNG",
                 value: function () {
                     var t = new s.default(this.ctx);
                     t.exportToPng(this.ctx), this.toggleMenu()
                 }
             }, {
                 key: "downloadSVG",
                 value: function () {
                     var t = new s.default(this.ctx);
                     t.exportToSVG(), this.toggleMenu()
                 }
             }, {
                 key: "handleZoomReset",
                 value: function (t) {
                     var i = this;
                     this.ctx.getSyncedCharts().forEach(function (t) {
                         var e = t.w;
                         e.globals.minX !== e.globals.initialminX && e.globals.maxX !== e.globals.initialmaxX && (t.revertDefaultAxisMinMax(), "function" == typeof e.config.chart.events.zoomed && i.zoomCallback({
                             min: e.config.xaxis.min,
                             max: e.config.xaxis.max
                         }), e.globals.zoomed = !1, t._updateSeries(e.globals.initialSeries, e.config.chart.animations.dynamicAnimation.enabled))
                     })
                 }
             }, {
                 key: "destroy",
                 value: function () {
                     this.elZoomReset && (this.elZoomReset.removeEventListener("click", this.handleZoomReset.bind(this)), this.elSelection.removeEventListener("click", this.toggleSelection.bind(this)), this.elZoom.removeEventListener("click", this.toggleZooming.bind(this)), this.elZoomIn.removeEventListener("click", this.handleZoomIn.bind(this)), this.elZoomOut.removeEventListener("click", this.handleZoomOut.bind(this)), this.elPan.removeEventListener("click", this.togglePanning.bind(this)), this.elMenuIcon.removeEventListener("click", this.toggleMenu.bind(this))), this.elZoom = null, this.elZoomIn = null, this.elZoomOut = null, this.elPan = null, this.elSelection = null, this.elZoomReset = null, this.elMenuIcon = null
                 }
             }]), e
         }();
         t.exports = p
     }, function (t, e, i) {
         "use strict";
         var a = function () {
                 function a(t, e) {
                     for (var i = 0; i < e.length; i++) {
                         var a = e[i];
                         a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                     }
                 }
                 return function (t, e, i) {
                     return e && a(t.prototype, e), i && a(t, i), t
                 }
             }(),
             n = s(i(0)),
             g = s(i(28));

         function s(t) {
             return t && t.__esModule ? t : {
                 default: t
             }
         }
         var r = function () {
             function e(t) {
                 ! function (t, e) {
                     if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                 }(this, e), this.ttCtx = t, this.ctx = t.ctx, this.w = t.w
             }
             return a(e, [{
                 key: "moveXCrosshairs",
                 value: function (t) {
                     var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                         i = this.ttCtx,
                         a = this.w,
                         s = i.getElXCrosshairs(),
                         n = t - i.xcrosshairsWidth / 2,
                         r = a.globals.labels.slice().length;
                     if (null !== e && (n = a.globals.gridWidth / r * e), "tickWidth" === a.config.xaxis.crosshairs.width || "barWidth" === a.config.xaxis.crosshairs.width ? n + i.xcrosshairsWidth > a.globals.gridWidth && (n = a.globals.gridWidth - i.xcrosshairsWidth) : null !== e && (n += a.globals.gridWidth / r / 2), n < 0 && (n = 0), n > a.globals.gridWidth && (n = a.globals.gridWidth), null !== s && (s.setAttribute("x", n), s.classList.add("active")), i.blxaxisTooltip) {
                         var o = n;
                         "tickWidth" !== a.config.xaxis.crosshairs.width && "barWidth" !== a.config.xaxis.crosshairs.width || (o = n + i.xcrosshairsWidth / 2), this.moveXAxisTooltip(o)
                     }
                 }
             }, {
                 key: "moveYCrosshairs",
                 value: function (t) {
                     var e = this.ttCtx;
                     null !== e.ycrosshairs && (n.default.setAttrs(e.ycrosshairs, {
                         y1: t,
                         y2: t
                     }), n.default.setAttrs(e.ycrosshairsHidden, {
                         y1: t,
                         y2: t
                     }))
                 }
             }, {
                 key: "moveXAxisTooltip",
                 value: function (t) {
                     var e = this.w,
                         i = this.ttCtx;
                     if (null !== i.xaxisTooltip) {
                         i.xaxisTooltip.classList.add("active");
                         var a = i.xaxisOffY + e.config.xaxis.tooltip.offsetY + e.globals.translateY + 1 + e.config.xaxis.offsetY;
                         if (t -= i.xaxisTooltip.getBoundingClientRect().width / 2, !isNaN(t)) {
                             t += e.globals.translateX;
                             var s;
                             s = new n.default(this.ctx).getTextRects(i.xaxisTooltipText.innerHTML), i.xaxisTooltipText.style.minWidth = s.width + "px", i.xaxisTooltip.style.left = t + "px", i.xaxisTooltip.style.top = a + "px"
                         }
                     }
                 }
             }, {
                 key: "moveYAxisTooltip",
                 value: function (t) {
                     var e = this.w,
                         i = this.ttCtx;
                     null === i.yaxisTTEls && (i.yaxisTTEls = e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));
                     var a = parseInt(i.ycrosshairsHidden.getAttribute("y1")),
                         s = e.globals.translateY + a,
                         n = i.yaxisTTEls[t].getBoundingClientRect().height,
                         r = e.globals.translateYAxisX[t] - 2;
                     e.config.yaxis[t].opposite && (r -= 26), s -= n / 2, -1 === e.globals.ignoreYAxisIndexes.indexOf(t) ? (i.yaxisTTEls[t].classList.add("active"), i.yaxisTTEls[t].style.top = s + "px", i.yaxisTTEls[t].style.left = r + e.config.yaxis[t].tooltip.offsetX + "px") : i.yaxisTTEls[t].classList.remove("active")
                 }
             }, {
                 key: "moveTooltip",
                 value: function (t, e) {
                     var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                         a = this.w,
                         s = this.ttCtx,
                         n = s.getElTooltip(),
                         r = s.tooltipRect,
                         o = null !== i ? parseInt(i) : 1,
                         l = parseInt(t) + o + 5,
                         h = parseInt(e) + o / 2;
                     if (l > a.globals.gridWidth / 2 && (l = l - r.ttWidth - o - 15), l > a.globals.gridWidth - r.ttWidth - 10 && (l = a.globals.gridWidth - r.ttWidth), l < -20 && (l = -20), a.config.tooltip.followCursor) {
                         var c = s.getElGrid().getBoundingClientRect();
                         h = s.e.clientY - c.top - r.ttHeight / 2
                     }
                     var u = this.positionChecks(r, l, h);
                     l = u.x, h = u.y, isNaN(l) || (l += a.globals.translateX, n.style.left = l + "px", n.style.top = h + "px")
                 }
             }, {
                 key: "positionChecks",
                 value: function (t, e, i) {
                     var a = this.w;
                     return t.ttHeight + i > a.globals.gridHeight && (i = a.globals.gridHeight - t.ttHeight + a.globals.translateY), i < 0 && (i = 0), {
                         x: e,
                         y: i
                     }
                 }
             }, {
                 key: "moveMarkers",
                 value: function (t, e) {
                     var i = this.w,
                         a = this.ttCtx;
                     if (0 < i.globals.markers.size[t])
                         for (var s = i.globals.dom.baseEl.querySelectorAll(" .apexcharts-series[data\\:realIndex='" + t + "'] .apexcharts-marker"), n = 0; n < s.length; n++) parseInt(s[n].getAttribute("rel")) === e && (a.marker.resetPointsSize(), a.marker.enlargeCurrentPoint(e, s[n]));
                     else a.marker.resetPointsSize(), this.moveDynamicPointOnHover(e, t)
                 }
             }, {
                 key: "moveDynamicPointOnHover",
                 value: function (t, e) {
                     var i, a, s = this.w,
                         n = this.ttCtx,
                         r = s.globals.pointsArray,
                         o = s.config.markers.hover.size;
                     void 0 === o && (o = s.globals.markers.size[e] + s.config.markers.hover.sizeOffset), i = r[e][t][0], a = r[e][t][1] ? r[e][t][1] : 0;
                     var l = s.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='" + e + "'] .apexcharts-series-markers circle");
                     l.setAttribute("r", o), l.setAttribute("cx", i), l.setAttribute("cy", a), this.moveXCrosshairs(i), n.fixedTooltip || this.moveTooltip(i, a, o)
                 }
             }, {
                 key: "moveDynamicPointsOnHover",
                 value: function (t) {
                     var e, i = this.ttCtx,
                         a = i.w,
                         s = 0,
                         n = 0,
                         r = a.globals.pointsArray;
                     e = new g.default(this.ctx).getActiveSeriesIndex();
                     var o = a.config.markers.hover.size;
                     void 0 === o && (o = a.globals.markers.size[e] + a.config.markers.hover.sizeOffset), r[e] && (s = r[e][t][0], n = r[e][t][1]);
                     var l = null,
                         h = i.getAllMarkers();
                     if (null !== (l = null !== h ? h : a.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers circle")))
                         for (var c = 0; c < l.length; c++) {
                             var u = r[c];
                             if (u && u.length) {
                                 var d = r[c][t][1];
                                 l[c].setAttribute("cx", s);
                                 var f = parseInt(l[c].parentNode.parentNode.parentNode.getAttribute("data:realIndex"));
                                 null !== d ? (l[f] && l[f].setAttribute("r", o), l[f] && l[f].setAttribute("cy", d)) : l[f] && l[f].setAttribute("r", 0)
                             }
                         }
                     if (this.moveXCrosshairs(s), !i.fixedTooltip) {
                         var p = n || a.globals.gridHeight;
                         this.moveTooltip(s, p, o)
                     }
                 }
             }, {
                 key: "moveStickyTooltipOverBars",
                 value: function (t) {
                     var e, i = this.w,
                         a = this.ttCtx,
                         s = i.globals.dom.baseEl.querySelector(".apexcharts-bar-series .apexcharts-series[rel='1'] path[j='" + t + "'], .apexcharts-candlestick-series .apexcharts-series[rel='1'] path[j='" + t + "']"),
                         n = s ? parseFloat(s.getAttribute("cx")) : 0,
                         r = s ? parseFloat(s.getAttribute("barWidth")) : 0;
                     i.globals.isXNumeric ? n -= r / 2 : (n = a.xAxisTicksPositions[t - 1] + a.dataPointsDividedWidth / 2, isNaN(n) && (n = a.xAxisTicksPositions[t] - a.dataPointsDividedWidth / 2));
                     var o = a.getElGrid().getBoundingClientRect();
                     if (e = a.e.clientY - o.top - a.tooltipRect.ttHeight / 2, this.moveXCrosshairs(n), !a.fixedTooltip) {
                         var l = e || i.globals.gridHeight;
                         this.moveTooltip(n, l)
                     }
                 }
             }]), e
         }();
         t.exports = r
     }, function (t, e, i) {
         "use strict";
         var a = function () {
             function a(t, e) {
                 for (var i = 0; i < e.length; i++) {
                     var a = e[i];
                     a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                 }
             }
             return function (t, e, i) {
                 return e && a(t.prototype, e), i && a(t, i), t
             }
         }();
         var s = function () {
             function e(t) {
                 ! function (t, e) {
                     if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                 }(this, e), this.w = t.w, this.ttCtx = t, this.ctx = t.ctx
             }
             return a(e, [{
                 key: "getNearestValues",
                 value: function (t) {
                     var e = t.hoverArea,
                         i = t.elGrid,
                         a = t.clientX,
                         s = t.clientY,
                         n = t.hasBars,
                         r = this.w,
                         o = r.globals.gridWidth,
                         l = o / (r.globals.dataPoints - 1),
                         h = i.getBoundingClientRect();
                     (n && r.globals.comboCharts || n) && (l = o / r.globals.dataPoints);
                     var c = a - h.left,
                         u = s - h.top;
                     c < 0 || u < 0 || c > r.globals.gridWidth || u > r.globals.gridHeight ? (e.classList.remove("hovering-zoom"), e.classList.remove("hovering-pan")) : r.globals.zoomEnabled ? (e.classList.remove("hovering-pan"), e.classList.add("hovering-zoom")) : r.globals.panEnabled && (e.classList.remove("hovering-zoom"), e.classList.add("hovering-pan"));
                     var d = Math.round(c / l);
                     n && (d = Math.ceil(c / l), d -= 1);
                     for (var f, p = null, g = null, x = [], v = 0; v < r.globals.seriesXvalues.length; v++) x.push([r.globals.seriesXvalues[v][0] - 1e-6].concat(r.globals.seriesXvalues[v]));
                     return x = x.map(function (t) {
                         return t.filter(function (t) {
                             return t
                         })
                     }), f = r.globals.seriesYvalues.map(function (t) {
                         return t.filter(function (t) {
                             return t
                         })
                     }), r.globals.isXNumeric && (p = (g = this.closestInMultiArray(c, u, x, f)).index, d = g.j, null !== p && (x = r.globals.seriesXvalues[p], d = (g = this.closestInArray(c, x)).index)), (!d || d < 1) && (d = 0), {
                         capturedSeries: p,
                         j: d,
                         hoverX: c,
                         hoverY: u
                     }
                 }
             }, {
                 key: "closestInMultiArray",
                 value: function (r, o, l, h) {
                     var t = this.w,
                         e = 0,
                         c = null,
                         u = -1;
                     1 < t.globals.series.length ? e = this.getFirstActiveXArray(l) : c = 0;
                     var i = h[e][0],
                         a = l[e][0],
                         d = Math.abs(r - a),
                         f = Math.abs(o - i),
                         p = f + d;
                     return h.map(function (t, n) {
                         t.map(function (t, e) {
                             var i = Math.abs(o - h[n][e]),
                                 a = Math.abs(r - l[n][e]),
                                 s = a + i;
                             s < p && (p = s, d = a, f = i, c = n, u = e)
                         })
                     }), {
                         index: c,
                         j: u
                     }
                 }
             }, {
                 key: "getFirstActiveXArray",
                 value: function (t) {
                     for (var e = 0, i = t.map(function (t, e) {
                             return 0 < t.length ? e : -1
                         }), a = 0; a < i.length; a++)
                         if (-1 !== i[a]) {
                             e = i[a];
                             break
                         } return e
                 }
             }, {
                 key: "closestInArray",
                 value: function (t, e) {
                     for (var i = e[0], a = null, s = Math.abs(t - i), n = 0; n < e.length; n++) {
                         var r = Math.abs(t - e[n]);
                         r < s && (s = r, i = e[n], a = n)
                     }
                     return {
                         index: a
                     }
                 }
             }, {
                 key: "isXoverlap",
                 value: function (t) {
                     var e = [],
                         i = this.w.globals.seriesX.filter(function (t) {
                             return void 0 !== t[0]
                         });
                     if (0 < i.length)
                         for (var a = 0; a < i.length - 1; a++) void 0 !== i[a][t] && void 0 !== i[a + 1][t] && i[a][t] !== i[a + 1][t] && e.push("unEqual");
                     return 0 === e.length
                 }
             }, {
                 key: "isinitialSeriesSameLen",
                 value: function () {
                     for (var t = !0, e = this.w.globals.initialSeries, i = 0; i < e.length - 1; i++)
                         if (e[i].data.length !== e[i + 1].data.length) {
                             t = !1;
                             break
                         } return t
                 }
             }, {
                 key: "getBarsHeight",
                 value: function (t) {
                     return [].concat(function (t) {
                         if (Array.isArray(t)) {
                             for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
                             return i
                         }
                         return Array.from(t)
                     }(t)).reduce(function (t, e) {
                         return t + e.getBBox().height
                     }, 0)
                 }
             }, {
                 key: "toggleAllTooltipSeriesGroups",
                 value: function (t) {
                     var e = this.w,
                         i = this.ttCtx;
                     0 === i.allTooltipSeriesGroups.length && (i.allTooltipSeriesGroups = e.globals.dom.baseEl.querySelectorAll(".apexcharts-tooltip-series-group"));
                     for (var a = i.allTooltipSeriesGroups, s = 0; s < a.length; s++) a[s].style.display = "enable" === t ? (a[s].classList.add("active"), e.config.tooltip.items.display) : (a[s].classList.remove("active"), "none")
                 }
             }]), e
         }();
         t.exports = s
     }, function (t, e) {
         t.exports = {
             name: "en",
             options: {
                 months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                 shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                 days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                 shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                 toolbar: {
                     exportToSVG: "Download SVG",
                     exportToPNG: "Download PNG",
                     menu: "Menu",
                     selection: "Selection",
                     selectionZoom: "Selection Zoom",
                     zoomIn: "Zoom In",
                     zoomOut: "Zoom Out",
                     pan: "Panning",
                     reset: "Reset Zoom"
                 }
             }
         }
     }, function (t, e, i) {
         "use strict";
         i(114), t.exports = i(4).Array.find
     }, function (t, e, i) {
         "use strict";
         i(73), i(115), t.exports = i(4).Array.from
     }, function (t, e, i) {
         "use strict";
         i(120), t.exports = i(4).Array.includes
     }, function (t, e, i) {
         "use strict";
         i(117), t.exports = i(4).Array.reduce
     }, function (t, e, i) {
         "use strict";
         i(72), i(73), i(125), i(118), i(121), i(122), t.exports = i(4).Promise
     }, function (t, e, i) {
         "use strict";
         i(119), i(72), i(123), i(124), t.exports = i(4).Symbol
     }, function (t, e, i) {
         "use strict";
         var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                 return typeof t
             } : function (t) {
                 return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
             },
             n = Object.assign || function (t) {
                 for (var e = 1; e < arguments.length; e++) {
                     var i = arguments[e];
                     for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (t[a] = i[a])
                 }
                 return t
             },
             a = function () {
                 function a(t, e) {
                     for (var i = 0; i < e.length; i++) {
                         var a = e[i];
                         a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                     }
                 }
                 return function (t, e, i) {
                     return e && a(t.prototype, e), i && a(t, i), t
                 }
             }(),
             s = E(i(133)),
             o = E(i(26)),
             l = E(i(134)),
             h = E(i(51)),
             c = E(i(135)),
             u = E(i(7)),
             d = E(i(76)),
             f = E(i(48)),
             p = E(i(33)),
             g = E(i(77)),
             x = E(i(142)),
             v = E(i(136)),
             b = E(i(27)),
             m = E(i(78)),
             y = E(i(137)),
             w = E(i(28)),
             k = E(i(139)),
             S = E(i(149)),
             A = E(i(1)),
             C = E(i(141)),
             P = E(i(140)),
             M = E(i(80)),
             L = E(i(52));

         function E(t) {
             return t && t.__esModule ? t : {
                 default: t
             }
         }
         i(156), i(152), i(153), i(151), i(155), i(154), i(160), i(157), i(158);
         var T = i(83);
         window.Apex = {};
         var z = function () {
             function i(t, e) {
                 ! function (t, e) {
                     if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                 }(this, i), this.opts = e, (this.ctx = this).w = new l.default(e).init(), this.el = t, this.w.globals.cuid = (Math.random() + 1).toString(36).substring(4), this.w.globals.chartID = this.w.config.chart.id ? this.w.config.chart.id : this.w.globals.cuid, this.initModules(), this.create = A.default.bind(this.create, this), this.windowResizeHandler = this.windowResize.bind(this)
             }
             return a(i, [{
                 key: "render",
                 value: function () {
                     var s = this;
                     return new Promise(function (t, e) {
                         if (null !== s.el) {
                             void 0 === Apex._chartInstances && (Apex._chartInstances = []), s.w.config.chart.id && Apex._chartInstances.push({
                                 id: s.w.globals.chartID,
                                 group: s.w.config.chart.group,
                                 chart: s
                             }), s.setLocale(s.w.config.chart.defaultLocale);
                             var i = s.w.config.chart.events.beforeMount;
                             "function" == typeof i && i(s, s.w), s.fireEvent("beforeMount", [s, s.w]), window.addEventListener("resize", s.windowResizeHandler), window.addResizeListener(s.el.parentNode, s.parentResizeCallback.bind(s));
                             var a = s.create(s.w.config.series);
                             if (!a) return t(s);
                             s.mount(a).then(function () {
                                 t(a), "function" == typeof s.w.config.chart.events.mounted && s.w.config.chart.events.mounted(s, s.w), s.fireEvent("mounted", [s, s.w])
                             }).catch(function (t) {
                                 e(t)
                             })
                         } else e(new Error("Element not found"))
                     })
                 }
             }, {
                 key: "initModules",
                 value: function () {
                     this.animations = new o.default(this.ctx), this.annotations = new s.default(this.ctx), this.core = new c.default(this.el, this), this.grid = new x.default(this), this.coreUtils = new u.default(this), this.config = new h.default({}), this.crosshairs = new d.default(this.ctx), this.options = new L.default, this.responsive = new y.default(this.ctx), this.series = new w.default(this.ctx), this.theme = new k.default(this.ctx), this.formatters = new p.default(this.ctx), this.titleSubtitle = new P.default(this.ctx), this.legend = new v.default(this.ctx), this.toolbar = new M.default(this.ctx), this.dimensions = new f.default(this.ctx), this.zoomPanSelection = new C.default(this.ctx), this.w.globals.tooltip = new S.default(this.ctx)
                 }
             }, {
                 key: "addEventListener",
                 value: function (t, e) {
                     var i = this.w;
                     i.globals.events.hasOwnProperty(t) ? i.globals.events[t].push(e) : i.globals.events[t] = [e]
                 }
             }, {
                 key: "removeEventListener",
                 value: function (t, e) {
                     var i = this.w;
                     if (i.globals.events.hasOwnProperty(t)) {
                         var a = i.globals.events[t].indexOf(e); - 1 !== a && i.globals.events[t].splice(a, 1)
                     }
                 }
             }, {
                 key: "fireEvent",
                 value: function (t, e) {
                     var i = this.w;
                     if (i.globals.events.hasOwnProperty(t)) {
                         e && e.length || (e = []);
                         for (var a = i.globals.events[t], s = a.length, n = 0; n < s; n++) a[n].apply(null, e)
                     }
                 }
             }, {
                 key: "create",
                 value: function (t, e) {
                     var i = this.w;
                     this.initModules();
                     var a = this.w.globals;
                     if (a.noData = !1, a.animationEnded = !1, this.responsive.checkResponsiveConfig(e), null === this.el) return a.animationEnded = !0, null;
                     if (this.core.setupElements(), 0 === a.svgWidth) return a.animationEnded = !0, null;
                     this.coreUtils.checkComboSeries(), (0 === t.length || 1 === t.length && t[0].data && 0 === t[0].data.length) && this.series.handleNoData(), this.setupEventHandlers(), this.core.parseData(t), this.theme.init(), new b.default(this).setGlobalMarkerSize(), this.formatters.setLabelFormatters(), this.titleSubtitle.draw(), this.legend.init(), this.series.hasAllSeriesEqualX(), a.axisCharts && (this.core.coreCalculations(), "category" !== i.config.xaxis.type && this.formatters.setLabelFormatters()), this.formatters.heatmapLabelFormatters(), this.dimensions.plotCoords();
                     var s = this.core.xySettings();
                     this.grid.createGridMask();
                     var n = this.core.plotChartType(t, s);
                     this.core.shiftGraphPosition();
                     var r = {
                         plot: {
                             left: i.globals.translateX,
                             top: i.globals.translateY,
                             width: i.globals.gridWidth,
                             height: i.globals.gridHeight
                         }
                     };
                     return {
                         elGraph: n,
                         xyRatios: s,
                         elInner: i.globals.dom.elGraphical,
                         dimensions: r
                     }
                 }
             }, {
                 key: "mount",
                 value: function () {
                     var c = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
                         u = this,
                         d = u.w;
                     return new Promise(function (t, e) {
                         if (null === u.el) return e(new Error("Not enough data to display or target element not found"));
                         if ((null === c || d.globals.allSeriesCollapsed) && u.series.handleNoData(), u.core.drawAxis(d.config.chart.type, c.xyRatios), u.grid = new x.default(u), "back" === d.config.grid.position && u.grid.drawGrid(), "back" === d.config.annotations.position && u.annotations.drawAnnotations(), c.elGraph instanceof Array)
                             for (var i = 0; i < c.elGraph.length; i++) d.globals.dom.elGraphical.add(c.elGraph[i]);
                         else d.globals.dom.elGraphical.add(c.elGraph);
                         if ("front" === d.config.grid.position && u.grid.drawGrid(), "front" === d.config.xaxis.crosshairs.position && u.crosshairs.drawXCrosshairs(), "front" === d.config.yaxis[0].crosshairs.position && u.crosshairs.drawYCrosshairs(), "front" === d.config.annotations.position && u.annotations.drawAnnotations(), !d.globals.noData) {
                             if (d.config.tooltip.enabled && !d.globals.noData && u.w.globals.tooltip.drawTooltip(c.xyRatios), d.globals.axisCharts && d.globals.isXNumeric)(d.config.chart.zoom.enabled || d.config.chart.selection && d.config.chart.selection.enabled || d.config.chart.pan && d.config.chart.pan.enabled) && u.zoomPanSelection.init({
                                 xyRatios: c.xyRatios
                             });
                             else {
                                 var a = d.config.chart.toolbar.tools;
                                 a.zoom = !1, a.zoomin = !1, a.zoomout = !1, a.selection = !1, a.pan = !1, a.reset = !1
                             }
                             d.config.chart.toolbar.show && !d.globals.allSeriesCollapsed && u.toolbar.createToolbar()
                         }
                         if (0 < d.globals.memory.methodsToExec.length) {
                             var s = !0,
                                 n = !1,
                                 r = void 0;
                             try {
                                 for (var o, l = d.globals.memory.methodsToExec[Symbol.iterator](); !(s = (o = l.next()).done); s = !0) {
                                     var h = o.value;
                                     h.method(h.params, !1, h.context)
                                 }
                             } catch (t) {
                                 n = !0, r = t
                             } finally {
                                 try {
                                     !s && l.return && l.return()
                                 } finally {
                                     if (n) throw r
                                 }
                             }
                         }
                         t(u)
                     })
                 }
             }, {
                 key: "clearPreviousPaths",
                 value: function () {
                     var t = this.w;
                     t.globals.previousPaths = [], t.globals.allSeriesCollapsed = !1, t.globals.collapsedSeries = [], t.globals.collapsedSeriesIndices = []
                 }
             }, {
                 key: "updateOptions",
                 value: function (t) {
                     var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                         i = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2],
                         a = !(3 < arguments.length && void 0 !== arguments[3]) || arguments[3],
                         s = this.w;
                     return t.series && (t.series[0].data && (t.series = t.series.map(function (t, e) {
                         return n({}, s.config.series[e], {
                             name: t.name ? t.name : s.config.series[e].name,
                             data: t.data
                         })
                     })), this.revertDefaultAxisMinMax()), t.xaxis && (t.xaxis.min || t.xaxis.max) && this.forceXAxisUpdate(t), 0 < s.globals.collapsedSeriesIndices.length && this.clearPreviousPaths(), this._updateOptions(t, e, i, a)
                 }
             }, {
                 key: "_updateOptions",
                 value: function (i) {
                     var a = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                         s = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2],
                         n = 3 < arguments.length && void 0 !== arguments[3] && arguments[3];
                     this.getSyncedCharts().forEach(function (t) {
                         var e = t.w;
                         return e.globals.shouldAnimate = s, a || (e.globals.resized = !0, e.globals.dataChanged = !0, s && t.series.getPreviousPaths()), i && "object" === (void 0 === i ? "undefined" : r(i)) && (t.config = new h.default(i), i = u.default.extendArrayProps(t.config, i), e.config = A.default.extend(e.config, i), n && (e.globals.lastXAxis = [], e.globals.lastYAxis = [], e.globals.initialConfig = A.default.extend({}, e.config), e.globals.initialSeries = JSON.parse(JSON.stringify(e.config.series)))), t.update(i)
                     })
                 }
             }, {
                 key: "updateSeries",
                 value: function () {
                     var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
                         e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                         i = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2];
                     return this.revertDefaultAxisMinMax(), this._updateSeries(t, e, i)
                 }
             }, {
                 key: "_updateSeries",
                 value: function (t, e) {
                     var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                         a = this.w;
                     this.w.globals.shouldAnimate = e, a.globals.dataChanged = !0, a.globals.allSeriesCollapsed && (a.globals.allSeriesCollapsed = !1), e && this.series.getPreviousPaths();
                     var s = void 0;
                     return t[0].data ? (s = t.map(function (t, e) {
                         return n({}, a.config.series[e], {
                             name: t.name ? t.name : a.config.series[e].name,
                             data: t.data
                         })
                     }), a.config.series = s) : a.config.series = t.slice(), i && (a.globals.initialConfig.series = JSON.parse(JSON.stringify(a.config.series)), a.globals.initialSeries = JSON.parse(JSON.stringify(a.config.series))), this.update()
                 }
             }, {
                 key: "getSyncedCharts",
                 value: function () {
                     var t = this.getGroupedCharts(),
                         e = [this];
                     return t.length && (e = [], t.forEach(function (t) {
                         e.push(t)
                     })), e
                 }
             }, {
                 key: "getGroupedCharts",
                 value: function () {
                     var e = this;
                     return Apex._chartInstances.filter(function (t) {
                         if (t.group) return !0
                     }).map(function (t) {
                         return e.w.config.chart.group === t.group ? t.chart : null
                     })
                 }
             }, {
                 key: "appendData",
                 value: function (t) {
                     var e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
                     this.w.globals.dataChanged = !0, this.series.getPreviousPaths();
                     for (var i = this.w.config.series.slice(), a = 0; a < i.length; a++)
                         if (void 0 !== t[a])
                             for (var s = 0; s < t[a].data.length; s++) i[a].data.push(t[a].data[s]);
                     return this.w.config.series = i, e && (this.w.globals.initialSeries = JSON.parse(JSON.stringify(this.w.config.series))), this.update()
                 }
             }, {
                 key: "update",
                 value: function (a) {
                     var s = this;
                     return new Promise(function (t, e) {
                         s.clear();
                         var i = s.create(s.w.config.series, a);
                         if (!i) return t(s);
                         s.mount(i).then(function () {
                             "function" == typeof s.w.config.chart.events.updated && s.w.config.chart.events.updated(s, s.w), s.fireEvent("updated", [s, s.w]), s.w.globals.isDirty = !0, t(s)
                         }).catch(function (t) {
                             e(t)
                         })
                     })
                 }
             }, {
                 key: "forceXAxisUpdate",
                 value: function (t) {
                     var e = this.w;
                     void 0 !== t.xaxis.min && (e.config.xaxis.min = t.xaxis.min, e.globals.lastXAxis.min = t.xaxis.min), void 0 !== t.xaxis.max && (e.config.xaxis.max = t.xaxis.max, e.globals.lastXAxis.max = t.xaxis.max)
                 }
             }, {
                 key: "revertDefaultAxisMinMax",
                 value: function () {
                     var i = this.w;
                     i.config.xaxis.min = i.globals.lastXAxis.min, i.config.xaxis.max = i.globals.lastXAxis.max, i.config.yaxis.map(function (t, e) {
                         i.globals.zoomed && void 0 !== i.globals.lastYAxis[e] && (t.min = i.globals.lastYAxis[e].min, t.max = i.globals.lastYAxis[e].max)
                     })
                 }
             }, {
                 key: "clear",
                 value: function () {
                     this.zoomPanSelection && this.zoomPanSelection.destroy(), this.toolbar && this.toolbar.destroy(), this.animations = null, this.annotations = null, this.core = null, this.grid = null, this.series = null, this.responsive = null, this.theme = null, this.formatters = null, this.titleSubtitle = null, this.legend = null, this.dimensions = null, this.options = null, this.crosshairs = null, this.zoomPanSelection = null, this.toolbar = null, this.w.globals.tooltip = null, this.clearDomElements()
                 }
             }, {
                 key: "killSVG",
                 value: function (i) {
                     return new Promise(function (t, e) {
                         i.each(function (t, e) {
                             this.removeClass("*"), this.off(), this.stop()
                         }, !0), i.ungroup(), i.clear(), t("done")
                     })
                 }
             }, {
                 key: "clearDomElements",
                 value: function () {
                     var t = this.w.globals.dom;
                     if (null !== this.el)
                         for (; this.el.firstChild;) this.el.removeChild(this.el.firstChild);
                     this.killSVG(t.Paper), t.Paper.remove(), t.elWrap = null, t.elGraphical = null, t.elLegendWrap = null, t.baseEl = null, t.elGridRect = null, t.elGridRectMask = null, t.elGridRectMarkerMask = null, t.elDefs = null
                 }
             }, {
                 key: "destroy",
                 value: function () {
                     this.clear();
                     var i = this.w.config.chart.id;
                     i && Apex._chartInstances.forEach(function (t, e) {
                         t.id === i && Apex._chartInstances.splice(e, 1)
                     }), window.removeEventListener("resize", this.windowResizeHandler), window.removeResizeListener(this.el.parentNode, this.parentResizeCallback.bind(this))
                 }
             }, {
                 key: "toggleSeries",
                 value: function (t) {
                     var e = this.series.getSeriesByName(t),
                         i = parseInt(e.getAttribute("data:realIndex")),
                         a = e.classList.contains("apexcharts-series-collapsed");
                     this.legend.toggleDataSeries(i, a)
                 }
             }, {
                 key: "resetToggleSeries",
                 value: function () {
                     this.legend.resetToggleDataSeries()
                 }
             }, {
                 key: "setupEventHandlers",
                 value: function () {
                     var e = this.w,
                         i = this,
                         t = e.globals.dom.baseEl.querySelector(e.globals.chartClass),
                         a = !0,
                         s = !1,
                         n = void 0;
                     try {
                         for (var r, o = ["mousedown", "mousemove", "touchstart", "touchmove", "mouseup", "touchend"][Symbol.iterator](); !(a = (r = o.next()).done); a = !0) {
                             var l = r.value;
                             t.addEventListener(l, function (t) {
                                 "mousedown" === t.type && 1 === t.which || ("mouseup" === t.type && 1 === t.which || "touchend" === t.type) && ("function" == typeof e.config.chart.events.click && e.config.chart.events.click(t, i, e), i.fireEvent("click", [t, i, e]))
                             }, {
                                 capture: !1,
                                 passive: !0
                             })
                         }
                     } catch (t) {
                         s = !0, n = t
                     } finally {
                         try {
                             !a && o.return && o.return()
                         } finally {
                             if (s) throw n
                         }
                     }
                     this.core.setupBrushHandler()
                 }
             }, {
                 key: "addXaxisAnnotation",
                 value: function (t) {
                     var e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                         i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : void 0,
                         a = this;
                     i && (a = i), a.annotations.addXaxisAnnotationExternal(t, e, a)
                 }
             }, {
                 key: "addYaxisAnnotation",
                 value: function (t) {
                     var e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                         i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : void 0,
                         a = this;
                     i && (a = i), a.annotations.addYaxisAnnotationExternal(t, e, a)
                 }
             }, {
                 key: "addPointAnnotation",
                 value: function (t) {
                     var e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                         i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : void 0,
                         a = this;
                     i && (a = i), a.annotations.addPointAnnotationExternal(t, e, a)
                 }
             }, {
                 key: "clearAnnotations",
                 value: function () {
                     var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : void 0,
                         e = this;
                     t && (e = t), e.annotations.clearAnnotations(e)
                 }
             }, {
                 key: "addText",
                 value: function (t) {
                     var e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                         i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : void 0,
                         a = this;
                     i && (a = i), a.annotations.addText(t, e, a)
                 }
             }, {
                 key: "getChartArea",
                 value: function () {
                     return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner")
                 }
             }, {
                 key: "getSeriesTotalXRange",
                 value: function (t, e) {
                     return this.coreUtils.getSeriesTotalsXRange(t, e)
                 }
             }, {
                 key: "getHighestValueInSeries",
                 value: function () {
                     var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
                     return new m.default(this.ctx).getMinYMaxY(t).highestY
                 }
             }, {
                 key: "getLowestValueInSeries",
                 value: function () {
                     var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
                     return new m.default(this.ctx).getMinYMaxY(t).lowestY
                 }
             }, {
                 key: "getSeriesTotal",
                 value: function () {
                     return this.w.globals.seriesTotals
                 }
             }, {
                 key: "setLocale",
                 value: function (t) {
                     this.setCurrentLocaleValues(t)
                 }
             }, {
                 key: "setCurrentLocaleValues",
                 value: function (e) {
                     var t = this.w.config.chart.locales;
                     window.Apex.chart && window.Apex.chart.locales && 0 < window.Apex.chart.locales.length && (t = this.w.config.chart.locales.concat(window.Apex.chart.locales));
                     var i = t.find(function (t) {
                         return t.name === e
                     });
                     if (!i) throw new Error("Wrong locale name provided. Please make sure you set the correct locale name in options");
                     var a = A.default.extend(T, i);
                     this.w.globals.locale = a.options
                 }
             }, {
                 key: "svgUrl",
                 value: function () {
                     return new g.default(this.ctx).svgUrl()
                 }
             }, {
                 key: "paper",
                 value: function () {
                     return this.w.globals.dom.Paper
                 }
             }, {
                 key: "parentResizeCallback",
                 value: function () {
                     this.w.globals.animationEnded && this.windowResize()
                 }
             }, {
                 key: "windowResize",
                 value: function () {
                     var t = this;
                     clearTimeout(this.w.globals.resizeTimer), this.w.globals.resizeTimer = window.setTimeout(function () {
                         t.w.globals.resized = !0, t.w.globals.dataChanged = !1, t.update()
                     }, 150)
                 }
             }], [{
                 key: "initOnLoad",
                 value: function () {
                     for (var t = document.querySelectorAll("[data-apexcharts]"), e = 0; e < t.length; e++) {
                         new i(t[e], JSON.parse(t[e].getAttribute("data-options"))).render()
                     }
                 }
             }, {
                 key: "exec",
                 value: function (t, e) {
                     var i = this.getChartByID(t);
                     if (i) {
                         for (var a = arguments.length, s = Array(2 < a ? a - 2 : 0), n = 2; n < a; n++) s[n - 2] = arguments[n];
                         switch (e) {
                             case "updateOptions":
                                 return i.updateOptions.apply(i, s);
                             case "updateSeries":
                                 return i.updateSeries.apply(i, s);
                             case "appendData":
                                 return i.appendData.apply(i, s);
                             case "addXaxisAnnotation":
                                 return i.addXaxisAnnotation.apply(i, s);
                             case "addYaxisAnnotation":
                                 return i.addYaxisAnnotation.apply(i, s);
                             case "addPointAnnotation":
                                 return i.addPointAnnotation.apply(i, s);
                             case "clearAnnotations":
                                 return i.clearAnnotations.apply(i, s);
                             case "destroy":
                                 return i.destroy()
                         }
                     }
                 }
             }, {
                 key: "merge",
                 value: function (t, e) {
                     return A.default.extend(t, e)
                 }
             }, {
                 key: "getChartByID",
                 value: function (e) {
                     return Apex._chartInstances.find(function (t) {
                         return t.id === e
                     }).chart
                 }
             }]), i
         }();
         t.exports = z
     }, function (t, e, i) {
         "use strict";
         t.exports = function (t, e, i, a) {
             if (!(t instanceof e) || void 0 !== a && a in t) throw TypeError(i + ": incorrect invocation!");
             return t
         }
     }, function (t, e, i) {
         "use strict";
         var m = i(15),
             y = i(39),
             w = i(31),
             k = i(24),
             a = i(95);
         t.exports = function (u, t) {
             var d = 1 == u,
                 f = 2 == u,
                 p = 3 == u,
                 g = 4 == u,
                 x = 6 == u,
                 v = 5 == u || x,
                 b = t || a;
             return function (t, e, i) {
                 for (var a, s, n = w(t), r = y(n), o = m(e, i, 3), l = k(r.length), h = 0, c = d ? b(t, l) : f ? b(t, 0) : void 0; h < l; h++)
                     if ((v || h in r) && (s = o(a = r[h], h, n), u))
                         if (d) c[h] = s;
                         else if (s) switch (u) {
                     case 3:
                         return !0;
                     case 5:
                         return a;
                     case 6:
                         return h;
                     case 2:
                         c.push(a)
                 } else if (g) return !1;
                 return x ? -1 : p || g ? g : c
             }
         }
     }, function (t, e, i) {
         "use strict";
         var c = i(18),
             u = i(31),
             d = i(39),
             f = i(24);
         t.exports = function (t, e, i, a, s) {
             c(e);
             var n = u(t),
                 r = d(n),
                 o = f(n.length),
                 l = s ? o - 1 : 0,
                 h = s ? -1 : 1;
             if (i < 2)
                 for (;;) {
                     if (l in r) {
                         a = r[l], l += h;
                         break
                     }
                     if (l += h, s ? l < 0 : o <= l) throw TypeError("Reduce of empty array with no initial value")
                 }
             for (; s ? 0 <= l : l < o; l += h) l in r && (a = e(a, r[l], l, n));
             return a
         }
     }, function (t, e, i) {
         "use strict";
         var a = i(9),
             s = i(58),
             n = i(2)("species");
         t.exports = function (t) {
             var e;
             return s(t) && ("function" != typeof (e = t.constructor) || e !== Array && !s(e.prototype) || (e = void 0), a(e) && null === (e = e[n]) && (e = void 0)), void 0 === e ? Array : e
         }
     }, function (t, e, i) {
         "use strict";
         var a = i(94);
         t.exports = function (t, e) {
             return new(a(t))(e)
         }
     }, function (t, e, i) {
         "use strict";
         var a = i(10),
             s = i(23);
         t.exports = function (t, e, i) {
             e in t ? a.f(t, e, s(0, i)) : t[e] = i
         }
     }, function (t, e, i) {
         "use strict";
         var o = i(29),
             l = i(64),
             h = i(41);
         t.exports = function (t) {
             var e = o(t),
                 i = l.f;
             if (i)
                 for (var a, s = i(t), n = h.f, r = 0; s.length > r;) n.call(t, a = s[r++]) && e.push(a);
             return e
         }
     }, function (t, e, i) {
         "use strict";
         var d = i(15),
             f = i(59),
             p = i(57),
             g = i(8),
             x = i(24),
             v = i(71),
             b = {},
             m = {},
             a = t.exports = function (t, e, i, a, s) {
                 var n, r, o, l, h = s ? function () {
                         return t
                     } : v(t),
                     c = d(i, a, e ? 2 : 1),
                     u = 0;
                 if ("function" != typeof h) throw TypeError(t + " is not iterable!");
                 if (p(h)) {
                     for (n = x(t.length); u < n; u++)
                         if ((l = e ? c(g(r = t[u])[0], r[1]) : c(t[u])) === b || l === m) return l
                 } else
                     for (o = h.call(t); !(r = o.next()).done;)
                         if ((l = f(o, c, r.value, e)) === b || l === m) return l
             };
         a.BREAK = b, a.RETURN = m
     }, function (t, e, i) {
         "use strict";
         t.exports = function (t, e, i) {
             var a = void 0 === i;
             switch (e.length) {
                 case 0:
                     return a ? t() : t.call(i);
                 case 1:
                     return a ? t(e[0]) : t.call(i, e[0]);
                 case 2:
                     return a ? t(e[0], e[1]) : t.call(i, e[0], e[1]);
                 case 3:
                     return a ? t(e[0], e[1], e[2]) : t.call(i, e[0], e[1], e[2]);
                 case 4:
                     return a ? t(e[0], e[1], e[2], e[3]) : t.call(i, e[0], e[1], e[2], e[3])
             }
             return t.apply(i, e)
         }
     }, function (t, e, i) {
         "use strict";
         var a = i(62),
             s = i(23),
             n = i(30),
             r = {};
         i(14)(r, i(2)("iterator"), function () {
             return this
         }), t.exports = function (t, e, i) {
             t.prototype = a(r, {
                 next: s(1, i)
             }), n(t, e + " Iterator")
         }
     }, function (t, e, i) {
         "use strict";
         t.exports = function (t, e) {
             return {
                 value: e,
                 done: !!t
             }
         }
     }, function (t, e, i) {
         "use strict";
         var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                 return typeof t
             } : function (t) {
                 return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
             },
             s = i(25)("meta"),
             n = i(9),
             r = i(13),
             o = i(10).f,
             l = 0,
             h = Object.isExtensible || function () {
                 return !0
             },
             c = !i(20)(function () {
                 return h(Object.preventExtensions({}))
             }),
             u = function (t) {
                 o(t, s, {
                     value: {
                         i: "O" + ++l,
                         w: {}
                     }
                 })
             },
             d = t.exports = {
                 KEY: s,
                 NEED: !1,
                 fastKey: function (t, e) {
                     if (!n(t)) return "symbol" == (void 0 === t ? "undefined" : a(t)) ? t : ("string" == typeof t ? "S" : "P") + t;
                     if (!r(t, s)) {
                         if (!h(t)) return "F";
                         if (!e) return "E";
                         u(t)
                     }
                     return t[s].i
                 },
                 getWeak: function (t, e) {
                     if (!r(t, s)) {
                         if (!h(t)) return !0;
                         if (!e) return !1;
                         u(t)
                     }
                     return t[s].w
                 },
                 onFreeze: function (t) {
                     return c && d.NEED && h(t) && !r(t, s) && u(t), t
                 }
             }
     }, function (t, e, i) {
         "use strict";
         var o = i(3),
             l = i(69).set,
             h = o.MutationObserver || o.WebKitMutationObserver,
             c = o.process,
             u = o.Promise,
             d = "process" == i(19)(c);
         t.exports = function () {
             var i, a, s, t = function () {
                 var t, e;
                 for (d && (t = c.domain) && t.exit(); i;) {
                     e = i.fn, i = i.next;
                     try {
                         e()
                     } catch (t) {
                         throw i ? s() : a = void 0, t
                     }
                 }
                 a = void 0, t && t.enter()
             };
             if (d) s = function () {
                 c.nextTick(t)
             };
             else if (!h || o.navigator && o.navigator.standalone)
                 if (u && u.resolve) {
                     var e = u.resolve(void 0);
                     s = function () {
                         e.then(t)
                     }
                 } else s = function () {
                     l.call(o, t)
                 };
             else {
                 var n = !0,
                     r = document.createTextNode("");
                 new h(t).observe(r, {
                     characterData: !0
                 }), s = function () {
                     r.data = n = !n
                 }
             }
             return function (t) {
                 var e = {
                     fn: t,
                     next: void 0
                 };
                 a && (a.next = e), i || (i = e, s()), a = e
             }
         }
     }, function (t, e, i) {
         "use strict";
         var r = i(10),
             o = i(8),
             l = i(29);
         t.exports = i(12) ? Object.defineProperties : function (t, e) {
             o(t);
             for (var i, a = l(e), s = a.length, n = 0; n < s;) r.f(t, i = a[n++], e[i]);
             return t
         }
     }, function (t, e, i) {
         "use strict";
         var a = i(41),
             s = i(23),
             n = i(17),
             r = i(45),
             o = i(13),
             l = i(56),
             h = Object.getOwnPropertyDescriptor;
         e.f = i(12) ? h : function (t, e) {
             if (t = n(t), e = r(e, !0), l) try {
                 return h(t, e)
             } catch (t) {}
             if (o(t, e)) return s(!a.f.call(t, e), t[e])
         }
     }, function (t, e, i) {
         "use strict";
         var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                 return typeof t
             } : function (t) {
                 return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
             },
             s = i(17),
             n = i(63).f,
             r = {}.toString,
             o = "object" == ("undefined" == typeof window ? "undefined" : a(window)) && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
         t.exports.f = function (t) {
             return o && "[object Window]" == r.call(t) ? function (t) {
                 try {
                     return n(t)
                 } catch (t) {
                     return o.slice()
                 }
             }(t) : n(s(t))
         }
     }, function (t, e, i) {
         "use strict";
         var a = i(13),
             s = i(31),
             n = i(42)("IE_PROTO"),
             r = Object.prototype;
         t.exports = Object.getPrototypeOf || function (t) {
             return t = s(t), a(t, n) ? t[n] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? r : null
         }
     }, function (t, e, i) {
         "use strict";
         var s = i(16);
         t.exports = function (t, e, i) {
             for (var a in e) s(t, a, e[a], i);
             return t
         }
     }, function (t, e, i) {
         "use strict";
         var a = i(3),
             s = i(10),
             n = i(12),
             r = i(2)("species");
         t.exports = function (t) {
             var e = a[t];
             n && e && !e[r] && s.f(e, r, {
                 configurable: !0,
                 get: function () {
                     return this
                 }
             })
         }
     }, function (t, e, i) {
         "use strict";
         var a = i(20);
         t.exports = function (t, e) {
             return !!t && a(function () {
                 e ? t.call(null, function () {}, 1) : t.call(null)
             })
         }
     }, function (t, e, i) {
         "use strict";
         var l = i(44),
             h = i(36);
         t.exports = function (o) {
             return function (t, e) {
                 var i, a, s = String(h(t)),
                     n = l(e),
                     r = s.length;
                 return n < 0 || r <= n ? o ? "" : void 0 : (i = s.charCodeAt(n)) < 55296 || 56319 < i || n + 1 === r || (a = s.charCodeAt(n + 1)) < 56320 || 57343 < a ? o ? s.charAt(n) : i : o ? s.slice(n, n + 2) : a - 56320 + (i - 55296 << 10) + 65536
             }
         }
     }, function (t, e, i) {
         "use strict";
         var a = i(44),
             s = Math.max,
             n = Math.min;
         t.exports = function (t, e) {
             return (t = a(t)) < 0 ? s(t + e, 0) : n(t, e)
         }
     }, function (t, e, i) {
         "use strict";
         var a = i(3).navigator;
         t.exports = a && a.userAgent || ""
     }, function (t, e, i) {
         "use strict";
         var a = i(6),
             s = i(92)(5),
             n = !0;
         "find" in [] && Array(1).find(function () {
             n = !1
         }), a(a.P + a.F * n, "Array", {
             find: function (t) {
                 return s(this, t, 1 < arguments.length ? arguments[1] : void 0)
             }
         }), i(34)("find")
     }, function (t, e, i) {
         "use strict";
         var d = i(15),
             a = i(6),
             f = i(31),
             p = i(59),
             g = i(57),
             x = i(24),
             v = i(96),
             b = i(71);
         a(a.S + a.F * !i(61)(function (t) {
             Array.from(t)
         }), "Array", {
             from: function (t) {
                 var e, i, a, s, n = f(t),
                     r = "function" == typeof this ? this : Array,
                     o = arguments.length,
                     l = 1 < o ? arguments[1] : void 0,
                     h = void 0 !== l,
                     c = 0,
                     u = b(n);
                 if (h && (l = d(l, 2 < o ? arguments[2] : void 0, 2)), null == u || r == Array && g(u))
                     for (i = new r(e = x(n.length)); c < e; c++) v(i, c, h ? l(n[c], c) : n[c]);
                 else
                     for (s = u.call(n), i = new r; !(a = s.next()).done; c++) v(i, c, h ? p(s, l, [a.value, c], !0) : a.value);
                 return i.length = c, i
             }
         })
     }, function (t, e, i) {
         "use strict";
         var a = i(34),
             s = i(101),
             n = i(21),
             r = i(17);
         t.exports = i(60)(Array, "Array", function (t, e) {
             this._t = r(t), this._i = 0, this._k = e
         }, function () {
             var t = this._t,
                 e = this._k,
                 i = this._i++;
             return !t || i >= t.length ? (this._t = void 0, s(1)) : s(0, "keys" == e ? i : "values" == e ? t[i] : [i, t[i]])
         }, "values"), n.Arguments = n.Array, a("keys"), a("values"), a("entries")
     }, function (t, e, i) {
         "use strict";
         var a = i(6),
             s = i(93);
         a(a.P + a.F * !i(110)([].reduce, !0), "Array", {
             reduce: function (t) {
                 return s(this, t, arguments.length, arguments[1], !1)
             }
         })
     }, function (t, e, i) {
         "use strict";
         var a, s, n, r, o = i(22),
             l = i(3),
             h = i(15),
             c = i(35),
             u = i(6),
             d = i(9),
             f = i(18),
             p = i(91),
             g = i(98),
             x = i(68),
             v = i(69).set,
             b = i(103)(),
             m = i(40),
             y = i(66),
             w = i(113),
             k = i(67),
             S = "Promise",
             A = l.TypeError,
             C = l.process,
             P = C && C.versions,
             M = P && P.v8 || "",
             L = l[S],
             E = "process" == c(C),
             T = function () {},
             z = s = m.f,
             X = !! function () {
                 try {
                     var t = L.resolve(1),
                         e = (t.constructor = {})[i(2)("species")] = function (t) {
                             t(T, T)
                         };
                     return (E || "function" == typeof PromiseRejectionEvent) && t.then(T) instanceof e && 0 !== M.indexOf("6.6") && -1 === w.indexOf("Chrome/66")
                 } catch (t) {}
             }(),
             O = function (t) {
                 var e;
                 return !(!d(t) || "function" != typeof (e = t.then)) && e
             },
             Y = function (c, i) {
                 if (!c._n) {
                     c._n = !0;
                     var a = c._c;
                     b(function () {
                         for (var l = c._v, h = 1 == c._s, t = 0, e = function (t) {
                                 var e, i, a, s = h ? t.ok : t.fail,
                                     n = t.resolve,
                                     r = t.reject,
                                     o = t.domain;
                                 try {
                                     s ? (h || (2 == c._h && _(c), c._h = 1), !0 === s ? e = l : (o && o.enter(), e = s(l), o && (o.exit(), a = !0)), e === t.promise ? r(A("Promise-chain cycle")) : (i = O(e)) ? i.call(e, n, r) : n(e)) : r(l)
                                 } catch (t) {
                                     o && !a && o.exit(), r(t)
                                 }
                             }; a.length > t;) e(a[t++]);
                         c._c = [], c._n = !1, i && !c._h && I(c)
                     })
                 }
             },
             I = function (n) {
                 v.call(l, function () {
                     var t, e, i, a = n._v,
                         s = F(n);
                     if (s && (t = y(function () {
                             E ? C.emit("unhandledRejection", a, n) : (e = l.onunhandledrejection) ? e({
                                 promise: n,
                                 reason: a
                             }) : (i = l.console) && i.error && i.error("Unhandled promise rejection", a)
                         }), n._h = E || F(n) ? 2 : 1), n._a = void 0, s && t.e) throw t.v
                 })
             },
             F = function (t) {
                 return 1 !== t._h && 0 === (t._a || t._c).length
             },
             _ = function (e) {
                 v.call(l, function () {
                     var t;
                     E ? C.emit("rejectionHandled", e) : (t = l.onrejectionhandled) && t({
                         promise: e,
                         reason: e._v
                     })
                 })
             },
             N = function (t) {
                 var e = this;
                 e._d || (e._d = !0, (e = e._w || e)._v = t, e._s = 2, e._a || (e._a = e._c.slice()), Y(e, !0))
             },
             D = function t(i) {
                 var a, s = this;
                 if (!s._d) {
                     s._d = !0, s = s._w || s;
                     try {
                         if (s === i) throw A("Promise can't be resolved itself");
                         (a = O(i)) ? b(function () {
                             var e = {
                                 _w: s,
                                 _d: !1
                             };
                             try {
                                 a.call(i, h(t, e, 1), h(N, e, 1))
                             } catch (t) {
                                 N.call(e, t)
                             }
                         }): (s._v = i, s._s = 1, Y(s, !1))
                     } catch (t) {
                         N.call({
                             _w: s,
                             _d: !1
                         }, t)
                     }
                 }
             };
         X || (L = function (t) {
             p(this, L, S, "_h"), f(t), a.call(this);
             try {
                 t(h(D, this, 1), h(N, this, 1))
             } catch (t) {
                 N.call(this, t)
             }
         }, (a = function (t) {
             this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
         }).prototype = i(108)(L.prototype, {
             then: function (t, e) {
                 var i = z(x(this, L));
                 return i.ok = "function" != typeof t || t, i.fail = "function" == typeof e && e, i.domain = E ? C.domain : void 0, this._c.push(i), this._a && this._a.push(i), this._s && Y(this, !1), i.promise
             },
             catch: function (t) {
                 return this.then(void 0, t)
             }
         }), n = function () {
             var t = new a;
             this.promise = t, this.resolve = h(D, t, 1), this.reject = h(N, t, 1)
         }, m.f = z = function (t) {
             return t === L || t === r ? new n(t) : s(t)
         }), u(u.G + u.W + u.F * !X, {
             Promise: L
         }), i(30)(L, S), i(109)(S), r = i(4)[S], u(u.S + u.F * !X, S, {
             reject: function (t) {
                 var e = z(this);
                 return (0, e.reject)(t), e.promise
             }
         }), u(u.S + u.F * (o || !X), S, {
             resolve: function (t) {
                 return k(o && this === r ? L : this, t)
             }
         }), u(u.S + u.F * !(X && i(61)(function (t) {
             L.all(t).catch(T)
         })), S, {
             all: function (t) {
                 var r = this,
                     e = z(r),
                     o = e.resolve,
                     l = e.reject,
                     i = y(function () {
                         var a = [],
                             s = 0,
                             n = 1;
                         g(t, !1, function (t) {
                             var e = s++,
                                 i = !1;
                             a.push(void 0), n++, r.resolve(t).then(function (t) {
                                 i || (i = !0, a[e] = t, --n || o(a))
                             }, l)
                         }), --n || o(a)
                     });
                 return i.e && l(i.v), e.promise
             },
             race: function (t) {
                 var e = this,
                     i = z(e),
                     a = i.reject,
                     s = y(function () {
                         g(t, !1, function (t) {
                             e.resolve(t).then(i.resolve, a)
                         })
                     });
                 return s.e && a(s.v), i.promise
             }
         })
     }, function (t, e, i) {
         "use strict";
         var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                 return typeof t
             } : function (t) {
                 return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
             },
             s = i(3),
             r = i(13),
             n = i(12),
             o = i(6),
             l = i(16),
             h = i(102).KEY,
             c = i(20),
             u = i(43),
             d = i(30),
             f = i(25),
             p = i(2),
             g = i(70),
             x = i(46),
             v = i(97),
             b = i(58),
             m = i(8),
             y = i(9),
             w = i(17),
             k = i(45),
             S = i(23),
             A = i(62),
             C = i(106),
             P = i(105),
             M = i(10),
             L = i(29),
             E = P.f,
             T = M.f,
             z = C.f,
             X = s.Symbol,
             O = s.JSON,
             Y = O && O.stringify,
             I = "prototype",
             F = p("_hidden"),
             _ = p("toPrimitive"),
             N = {}.propertyIsEnumerable,
             D = u("symbol-registry"),
             R = u("symbols"),
             W = u("op-symbols"),
             H = Object[I],
             j = "function" == typeof X,
             B = s.QObject,
             V = !B || !B[I] || !B[I].findChild,
             G = n && c(function () {
                 return 7 != A(T({}, "a", {
                     get: function () {
                         return T(this, "a", {
                             value: 7
                         }).a
                     }
                 })).a
             }) ? function (t, e, i) {
                 var a = E(H, e);
                 a && delete H[e], T(t, e, i), a && t !== H && T(H, e, a)
             } : T,
             U = function (t) {
                 var e = R[t] = A(X[I]);
                 return e._k = t, e
             },
             q = j && "symbol" == a(X.iterator) ? function (t) {
                 return "symbol" == (void 0 === t ? "undefined" : a(t))
             } : function (t) {
                 return t instanceof X
             },
             Z = function (t, e, i) {
                 return t === H && Z(W, e, i), m(t), e = k(e, !0), m(i), r(R, e) ? (i.enumerable ? (r(t, F) && t[F][e] && (t[F][e] = !1), i = A(i, {
                     enumerable: S(0, !1)
                 })) : (r(t, F) || T(t, F, S(1, {})), t[F][e] = !0), G(t, e, i)) : T(t, e, i)
             },
             $ = function (t, e) {
                 m(t);
                 for (var i, a = v(e = w(e)), s = 0, n = a.length; s < n;) Z(t, i = a[s++], e[i]);
                 return t
             },
             J = function (t) {
                 var e = N.call(this, t = k(t, !0));
                 return !(this === H && r(R, t) && !r(W, t)) && (!(e || !r(this, t) || !r(R, t) || r(this, F) && this[F][t]) || e)
             },
             Q = function (t, e) {
                 if (t = w(t), e = k(e, !0), t !== H || !r(R, e) || r(W, e)) {
                     var i = E(t, e);
                     return !i || !r(R, e) || r(t, F) && t[F][e] || (i.enumerable = !0), i
                 }
             },
             K = function (t) {
                 for (var e, i = z(w(t)), a = [], s = 0; i.length > s;) r(R, e = i[s++]) || e == F || e == h || a.push(e);
                 return a
             },
             tt = function (t) {
                 for (var e, i = t === H, a = z(i ? W : w(t)), s = [], n = 0; a.length > n;) !r(R, e = a[n++]) || i && !r(H, e) || s.push(R[e]);
                 return s
             };
         j || (l((X = function () {
             if (this instanceof X) throw TypeError("Symbol is not a constructor!");
             var i = f(0 < arguments.length ? arguments[0] : void 0);
             return n && V && G(H, i, {
                 configurable: !0,
                 set: function t(e) {
                     this === H && t.call(W, e), r(this, F) && r(this[F], i) && (this[F][i] = !1), G(this, i, S(1, e))
                 }
             }), U(i)
         })[I], "toString", function () {
             return this._k
         }), P.f = Q, M.f = Z, i(63).f = C.f = K, i(41).f = J, i(64).f = tt, n && !i(22) && l(H, "propertyIsEnumerable", J, !0), g.f = function (t) {
             return U(p(t))
         }), o(o.G + o.W + o.F * !j, {
             Symbol: X
         });
         for (var et = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), it = 0; et.length > it;) p(et[it++]);
         for (var at = L(p.store), st = 0; at.length > st;) x(at[st++]);
         o(o.S + o.F * !j, "Symbol", {
             for: function (t) {
                 return r(D, t += "") ? D[t] : D[t] = X(t)
             },
             keyFor: function (t) {
                 if (!q(t)) throw TypeError(t + " is not a symbol!");
                 for (var e in D)
                     if (D[e] === t) return e
             },
             useSetter: function () {
                 V = !0
             },
             useSimple: function () {
                 V = !1
             }
         }), o(o.S + o.F * !j, "Object", {
             create: function (t, e) {
                 return void 0 === e ? A(t) : $(A(t), e)
             },
             defineProperty: Z,
             defineProperties: $,
             getOwnPropertyDescriptor: Q,
             getOwnPropertyNames: K,
             getOwnPropertySymbols: tt
         }), O && o(o.S + o.F * (!j || c(function () {
             var t = X();
             return "[null]" != Y([t]) || "{}" != Y({
                 a: t
             }) || "{}" != Y(Object(t))
         })), "JSON", {
             stringify: function (t) {
                 for (var e, i, a = [t], s = 1; arguments.length > s;) a.push(arguments[s++]);
                 if (i = e = a[1], (y(e) || void 0 !== t) && !q(t)) return b(e) || (e = function (t, e) {
                     if ("function" == typeof i && (e = i.call(this, t, e)), !q(e)) return e
                 }), a[1] = e, Y.apply(O, a)
             }
         }), X[I][_] || i(14)(X[I], _, X[I].valueOf), d(X, "Symbol"), d(Math, "Math", !0), d(s.JSON, "JSON", !0)
     }, function (t, e, i) {
         "use strict";
         var a = i(6),
             s = i(54)(!0);
         a(a.P, "Array", {
             includes: function (t) {
                 return s(this, t, 1 < arguments.length ? arguments[1] : void 0)
             }
         }), i(34)("includes")
     }, function (t, e, i) {
         "use strict";
         var a = i(6),
             s = i(4),
             n = i(3),
             r = i(68),
             o = i(67);
         a(a.P + a.R, "Promise", {
             finally: function (e) {
                 var i = r(this, s.Promise || n.Promise),
                     t = "function" == typeof e;
                 return this.then(t ? function (t) {
                     return o(i, e()).then(function () {
                         return t
                     })
                 } : e, t ? function (t) {
                     return o(i, e()).then(function () {
                         throw t
                     })
                 } : e)
             }
         })
     }, function (t, e, i) {
         "use strict";
         var a = i(6),
             s = i(40),
             n = i(66);
         a(a.S, "Promise", {
             try: function (t) {
                 var e = s.f(this),
                     i = n(t);
                 return (i.e ? e.reject : e.resolve)(i.v), e.promise
             }
         })
     }, function (t, e, i) {
         "use strict";
         i(46)("asyncIterator")
     }, function (t, e, i) {
         "use strict";
         i(46)("observable")
     }, function (t, e, i) {
         "use strict";
         for (var a = i(116), s = i(29), n = i(16), r = i(3), o = i(14), l = i(21), h = i(2), c = h("iterator"), u = h("toStringTag"), d = l.Array, f = {
                 CSSRuleList: !0,
                 CSSStyleDeclaration: !1,
                 CSSValueList: !1,
                 ClientRectList: !1,
                 DOMRectList: !1,
                 DOMStringList: !1,
                 DOMTokenList: !0,
                 DataTransferItemList: !1,
                 FileList: !1,
                 HTMLAllCollection: !1,
                 HTMLCollection: !1,
                 HTMLFormElement: !1,
                 HTMLSelectElement: !1,
                 MediaList: !0,
                 MimeTypeArray: !1,
                 NamedNodeMap: !1,
                 NodeList: !0,
                 PaintRequestList: !1,
                 Plugin: !1,
                 PluginArray: !1,
                 SVGLengthList: !1,
                 SVGNumberList: !1,
                 SVGPathSegList: !1,
                 SVGPointList: !1,
                 SVGStringList: !1,
                 SVGTransformList: !1,
                 SourceBufferList: !1,
                 StyleSheetList: !0,
                 TextTrackCueList: !1,
                 TextTrackList: !1,
                 TouchList: !1
             }, p = s(f), g = 0; g < p.length; g++) {
             var x, v = p[g],
                 b = f[v],
                 m = r[v],
                 y = m && m.prototype;
             if (y && (y[c] || o(y, c, d), y[u] || o(y, u, v), l[v] = d, b))
                 for (x in a) y[x] || n(y, x, a[x], !0)
         }
     }, function (t, e, i) {
         "use strict";
         t.exports = function (i) {
             var r = [];
             return r.toString = function () {
                 return this.map(function (t) {
                     var e = function (t, e) {
                         var i = t[1] || "",
                             a = t[3];
                         if (!a) return i;
                         if (e && "function" == typeof btoa) {
                             var s = (r = a, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */"),
                                 n = a.sources.map(function (t) {
                                     return "/*# sourceURL=" + a.sourceRoot + t + " */"
                                 });
                             return [i].concat(n).concat([s]).join("\n")
                         }
                         var r;
                         return [i].join("\n")
                     }(t, i);
                     return t[2] ? "@media " + t[2] + "{" + e + "}" : e
                 }).join("")
             }, r.i = function (t, e) {
                 "string" == typeof t && (t = [
                     [null, t, ""]
                 ]);
                 for (var i = {}, a = 0; a < this.length; a++) {
                     var s = this[a][0];
                     "number" == typeof s && (i[s] = !0)
                 }
                 for (a = 0; a < t.length; a++) {
                     var n = t[a];
                     "number" == typeof n[0] && i[n[0]] || (e && !n[2] ? n[2] = e : e && (n[2] = "(" + n[2] + ") and (" + e + ")"), r.push(n))
                 }
             }, r
         }
     }, function (t, e, i) {
         "use strict";
         Object.defineProperty(e, "__esModule", {
             value: !0
         });
         var a = function () {
                 function a(t, e) {
                     for (var i = 0; i < e.length; i++) {
                         var a = e[i];
                         a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                     }
                 }
                 return function (t, e, i) {
                     return e && a(t.prototype, e), i && a(t, i), t
                 }
             }(),
             o = s(i(7)),
             l = s(i(47)),
             h = s(i(11)),
             c = s(i(0));

         function s(t) {
             return t && t.__esModule ? t : {
                 default: t
             }
         }
         var n = function (t) {
             function e() {
                 return function (t, e) {
                         if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                     }(this, e),
                     function (t, e) {
                         if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                         return !e || "object" != typeof e && "function" != typeof e ? t : e
                     }(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
             }
             return function (t, e) {
                 if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                 t.prototype = Object.create(e && e.prototype, {
                     constructor: {
                         value: t,
                         enumerable: !1,
                         writable: !0,
                         configurable: !0
                     }
                 }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
             }(e, l.default), a(e, [{
                 key: "draw",
                 value: function (w, a) {
                     var k = this,
                         S = this.w;
                     this.graphics = new c.default(this.ctx), this.fill = new h.default(this.ctx), this.bar = new l.default(this.ctx, this.xyRatios);
                     var t = new o.default(this.ctx, S);
                     this.series = t.getLogSeries(w), w = this.series, this.yRatio = t.getLogYRatios(this.yRatio), this.series = w, this.initVariables(w), "100%" === S.config.chart.stackType && (this.series = S.globals.seriesPercent.slice(), w = this.series), this.totalItems = 0, this.prevY = [], this.prevX = [], this.prevYF = [], this.prevXF = [], this.prevYVal = [], this.prevXVal = [], this.xArrj = [], this.xArrjF = [], this.xArrjVal = [], this.yArrj = [], this.yArrjF = [], this.yArrjVal = [];
                     for (var e = 0; e < w.length; e++) 0 < w[e].length && (this.totalItems += w[e].length);
                     this.zeroSerieses = [], this.endingShapeOnSeriesNumber = w.length - 1, this.checkZeroSeries({
                         series: w
                     });
                     var s = this.graphics.group({
                         class: "apexcharts-bar-series apexcharts-plot-series"
                     });
                     s.attr("clip-path", "url(#gridRectMask" + S.globals.cuid + ")");
                     for (var A = 0, C = 0, i = function (n, r) {
                             var o = void 0,
                                 l = void 0,
                                 h = void 0,
                                 c = void 0,
                                 u = void 0,
                                 d = void 0,
                                 f = [],
                                 p = [],
                                 g = S.globals.comboCharts ? a[n] : n;
                             1 < k.yRatio.length && (k.yaxisIndex = g);
                             var x, v, b = k.graphics.group({
                                     class: "apexcharts-series " + S.globals.seriesNames[g].toString().replace(/ /g, "-"),
                                     rel: n + 1,
                                     "data:realIndex": g
                                 }),
                                 m = k.graphics.group({
                                     class: "apexcharts-datalabels"
                                 }),
                                 y = 0,
                                 t = k.initialPositions(A, C, h, c, u, d);
                             C = t.y, x = t.barHeight, c = t.yDivision, d = t.zeroW, A = t.x, v = t.barWidth, h = t.xDivision, u = t.zeroH, k.yArrj = [], k.yArrjF = [], k.yArrjVal = [], k.xArrj = [], k.xArrjF = [], k.xArrjVal = [];
                             for (var e = function (i) {
                                     S.config.stroke.show && (y = k.isNullValue ? 0 : Array.isArray(k.strokeWidth) ? k.strokeWidth[g] : k.strokeWidth);
                                     var t = null;
                                     t = k.isHorizontal ? k.drawBarPaths({
                                         indexes: {
                                             i: n,
                                             j: i,
                                             realIndex: g,
                                             bc: r
                                         },
                                         barHeight: x,
                                         strokeWidth: y,
                                         pathTo: o,
                                         pathFrom: l,
                                         zeroW: d,
                                         x: A,
                                         y: C,
                                         yDivision: c,
                                         elSeries: b
                                     }) : k.drawColumnPaths({
                                         indexes: {
                                             i: n,
                                             j: i,
                                             realIndex: g,
                                             bc: r
                                         },
                                         x: A,
                                         y: C,
                                         xDivision: h,
                                         pathTo: o,
                                         pathFrom: l,
                                         barWidth: v,
                                         zeroH: u,
                                         strokeWidth: y,
                                         elSeries: b
                                     }), o = t.pathTo, l = t.pathFrom, C = t.y, A = t.x, f.push(A), p.push(C);
                                     var e = S.config.plotOptions.bar.distributed ? i : n,
                                         a = null;
                                     0 < k.barOptions.colors.ranges.length && k.barOptions.colors.ranges.map(function (t, e) {
                                         w[n][i] >= t.from && w[n][i] <= t.to && (a = t.color)
                                     });
                                     var s = k.fill.fillPath(b, {
                                         seriesNumber: k.barOptions.distributed ? e : g,
                                         color: a
                                     });
                                     b = k.renderSeries({
                                         realIndex: g,
                                         pathFill: s,
                                         j: i,
                                         i: n,
                                         pathFrom: l,
                                         pathTo: o,
                                         strokeWidth: y,
                                         elSeries: b,
                                         x: A,
                                         y: C,
                                         series: w,
                                         barHeight: x,
                                         barWidth: v,
                                         elDataLabelsWrap: m,
                                         type: "bar",
                                         visibleSeries: 0
                                     })
                                 }, i = 0; i < S.globals.dataPoints; i++) e(i);
                             S.globals.seriesXvalues[g] = f, S.globals.seriesYvalues[g] = p, k.prevY.push(k.yArrj), k.prevYF.push(k.yArrjF), k.prevYVal.push(k.yArrjVal), k.prevX.push(k.xArrj), k.prevXF.push(k.xArrjF), k.prevXVal.push(k.xArrjVal), s.add(b)
                         }, n = 0, r = 0; n < w.length; n++, r++) i(n, r);
                     return s
                 }
             }, {
                 key: "initialPositions",
                 value: function (t, e, i, a, s, n) {
                     var r = this.w,
                         o = void 0,
                         l = void 0;
                     return this.isHorizontal ? (o = (o = a = r.globals.gridHeight / r.globals.dataPoints) * parseInt(r.config.plotOptions.bar.barHeight) / 100, n = this.baseLineInvertedY + r.globals.padHorizontal, e = (a - o) / 2) : (l = i = r.globals.gridWidth / r.globals.dataPoints, l = r.globals.isXNumeric ? (i = this.minXDiff / this.xRatio) / this.seriesLen * parseInt(this.barOptions.columnWidth) / 100 : l * parseInt(r.config.plotOptions.bar.columnWidth) / 100, s = this.baseLineY[this.yaxisIndex] + 1, t = r.globals.padHorizontal + (i - l) / 2), {
                         x: t,
                         y: e,
                         yDivision: a,
                         xDivision: i,
                         barHeight: o,
                         barWidth: l,
                         zeroH: s,
                         zeroW: n
                     }
                 }
             }, {
                 key: "drawBarPaths",
                 value: function (t) {
                     for (var e = t.indexes, i = t.barHeight, a = t.strokeWidth, s = t.pathTo, n = t.pathFrom, r = t.zeroW, o = t.x, l = t.y, h = t.yDivision, c = t.elSeries, u = this.w, d = l, f = void 0, p = e.i, g = e.j, x = e.realIndex, v = e.bc, b = 0, m = 0; m < this.prevXF.length; m++) b += this.prevXF[m][g];
                     if (0 < p) {
                         var y = r;
                         this.prevXVal[p - 1][g] < 0 ? y = 0 <= this.series[p][g] ? this.prevX[p - 1][g] + b : this.prevX[p - 1][g] : 0 <= this.prevXVal[p - 1][g] && (y = 0 <= this.series[p][g] ? this.prevX[p - 1][g] : this.prevX[p - 1][g] - b), f = y
                     } else f = r;
                     o = null === this.series[p][g] ? f : f + this.series[p][g] / this.invertedYRatio;
                     var w = {
                             barHeight: i,
                             strokeWidth: a,
                             invertedYRatio: this.invertedYRatio,
                             barYPosition: d,
                             x: o
                         },
                         k = this.bar.barEndingShape(u, w, this.series, p, g);
                     if (1 < this.series.length && p !== this.endingShapeOnSeriesNumber && (k.path = this.graphics.line(k.newX, d + i - a)), this.xArrj.push(k.newX), this.xArrjF.push(Math.abs(f - k.newX)), this.xArrjVal.push(this.series[p][g]), s = this.graphics.move(f, d), n = this.graphics.move(f, d), 0 < u.globals.previousPaths.length && (n = this.bar.getPathFrom(x, g, !1)), s = s + this.graphics.line(k.newX, d) + k.path + this.graphics.line(f, d + i - a) + this.graphics.line(f, d), n = n + this.graphics.line(f, d) + this.graphics.line(f, d + i - a) + this.graphics.line(f, d + i - a) + this.graphics.line(f, d + i - a) + this.graphics.line(f, d), 0 < u.config.plotOptions.bar.colors.backgroundBarColors.length && 0 === p) {
                         v >= u.config.plotOptions.bar.colors.backgroundBarColors.length && (v = 0);
                         var S = u.config.plotOptions.bar.colors.backgroundBarColors[v],
                             A = this.graphics.drawRect(0, d, u.globals.gridWidth, i, 0, S, u.config.plotOptions.bar.colors.backgroundBarOpacity);
                         c.add(A), A.node.classList.add("apexcharts-backgroundBar")
                     }
                     return {
                         pathTo: s,
                         pathFrom: n,
                         x: o,
                         y: l += h
                     }
                 }
             }, {
                 key: "drawColumnPaths",
                 value: function (t) {
                     var e = t.indexes,
                         i = t.x,
                         a = t.y,
                         s = t.xDivision,
                         n = t.pathTo,
                         r = t.pathFrom,
                         o = t.barWidth,
                         l = t.zeroH,
                         h = t.strokeWidth,
                         c = t.elSeries,
                         u = this.w,
                         d = e.i,
                         f = e.j,
                         p = e.realIndex,
                         g = e.bc;
                     if (u.globals.isXNumeric) {
                         var x = u.globals.seriesX[d][f];
                         x || (x = 0), i = (x - u.globals.minX) / this.xRatio - o / 2
                     }
                     for (var v = i, b = void 0, m = 0, y = 0; y < this.prevYF.length; y++) m += this.prevYF[y][f];
                     if (0 < d && !u.globals.isXNumeric || 0 < d && u.globals.isXNumeric && u.globals.seriesX[d - 1][f] === u.globals.seriesX[d][f]) {
                         var w = this.prevY[d - 1][f];
                         b = this.prevYVal[d - 1][f] < 0 ? 0 <= this.series[d][f] ? w - m : w : 0 <= this.series[d][f] ? w : w + m
                     } else b = u.globals.gridHeight - l;
                     a = (this.series[d][f], b - this.series[d][f] / this.yRatio[this.yaxisIndex]);
                     var k = {
                             barWidth: o,
                             strokeWidth: h,
                             yRatio: this.yRatio[this.yaxisIndex],
                             barXPosition: v,
                             y: a
                         },
                         S = this.bar.barEndingShape(u, k, this.series, d, f);
                     if (1 < this.series.length && d !== this.endingShapeOnSeriesNumber && (S.path = this.graphics.line(v + o - h, S.newY)), this.yArrj.push(S.newY), this.yArrjF.push(Math.abs(b - S.newY)), this.yArrjVal.push(this.series[d][f]), n = this.graphics.move(v, b), r = this.graphics.move(v, b), 0 < u.globals.previousPaths.length && (r = this.bar.getPathFrom(p, f, !1)), n = n + this.graphics.line(v, S.newY) + S.path + this.graphics.line(v + o - h, b) + this.graphics.line(v, b), r = r + this.graphics.line(v, b) + this.graphics.line(v + o - h, b) + this.graphics.line(v + o - h, b) + this.graphics.line(v + o - h, b) + this.graphics.line(v, b), 0 < u.config.plotOptions.bar.colors.backgroundBarColors.length && 0 === d) {
                         g >= u.config.plotOptions.bar.colors.backgroundBarColors.length && (g = 0);
                         var A = u.config.plotOptions.bar.colors.backgroundBarColors[g],
                             C = this.graphics.drawRect(v, 0, o, u.globals.gridHeight, 0, A, u.config.plotOptions.bar.colors.backgroundBarOpacity);
                         c.add(C), C.node.classList.add("apexcharts-backgroundBar")
                     }
                     return i += s, {
                         pathTo: n,
                         pathFrom: r,
                         x: u.globals.isXNumeric ? i - s : i,
                         y: a
                     }
                 }
             }, {
                 key: "checkZeroSeries",
                 value: function (t) {
                     for (var e = t.series, i = this.w, a = 0; a < e.length; a++) {
                         for (var s = 0, n = 0; n < e[i.globals.maxValsInArrayIndex].length; n++) s += e[a][n];
                         0 === s && this.zeroSerieses.push(a)
                     }
                     for (var r = e.length - 1; 0 <= r; r--) - 1 < this.zeroSerieses.indexOf(r) && r === this.endingShapeOnSeriesNumber && (this.endingShapeOnSeriesNumber -= 1)
                 }
             }]), e
         }();
         e.default = n
     }, function (t, e, i) {
         "use strict";
         Object.defineProperty(e, "__esModule", {
             value: !0
         });
         var a = function () {
                 function a(t, e) {
                     for (var i = 0; i < e.length; i++) {
                         var a = e[i];
                         a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                     }
                 }
                 return function (t, e, i) {
                     return e && a(t.prototype, e), i && a(t, i), t
                 }
             }(),
             T = n(i(7)),
             s = n(i(47)),
             z = n(i(11)),
             X = n(i(0));

         function n(t) {
             return t && t.__esModule ? t : {
                 default: t
             }
         }
         var r = function (t) {
             function e() {
                 return function (t, e) {
                         if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                     }(this, e),
                     function (t, e) {
                         if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                         return !e || "object" != typeof e && "function" != typeof e ? t : e
                     }(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
             }
             return function (t, e) {
                 if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                 t.prototype = Object.create(e && e.prototype, {
                     constructor: {
                         value: t,
                         enumerable: !1,
                         writable: !0,
                         configurable: !0
                     }
                 }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
             }(e, s.default), a(e, [{
                 key: "draw",
                 value: function (t, e) {
                     var i = this.w,
                         a = new X.default(this.ctx),
                         s = new z.default(this.ctx);
                     this.candlestickOptions = this.w.config.plotOptions.candlestick;
                     var n = new T.default(this.ctx, i);
                     this.series = n.getLogSeries(t), t = this.series, this.yRatio = n.getLogYRatios(this.yRatio), this.initVariables(t);
                     var r = a.group({
                         class: "apexcharts-candlestick-series apexcharts-plot-series"
                     });
                     r.attr("clip-path", "url(#gridRectMask" + i.globals.cuid + ")");
                     for (var o = 0, l = 0; o < t.length; o++, l++) {
                         var h, c, u = void 0,
                             d = void 0,
                             f = void 0,
                             p = void 0,
                             g = [],
                             x = [],
                             v = i.globals.comboCharts ? e[o] : o,
                             b = a.group({
                                 class: "apexcharts-series " + i.globals.seriesNames[v].toString().replace(/ /g, "-"),
                                 rel: o + 1,
                                 "data:realIndex": v
                             });
                         0 < t[o].length && (this.visibleI = this.visibleI + 1);
                         var m, y, w = 0;
                         1 < this.yRatio.length && (this.yaxisIndex = v);
                         var k = this.initialPositions();
                         p = k.y, m = k.barHeight, f = k.x, y = k.barWidth, h = k.xDivision, c = k.zeroH, x.push(f + y / 2);
                         for (var S = a.group({
                                 class: "apexcharts-datalabels"
                             }), A = 0, C = i.globals.dataPoints; A < i.globals.dataPoints; A++, C--) {
                             void 0 === this.series[o][A] || null === t[o][A] ? this.isNullValue = !0 : this.isNullValue = !1, i.config.stroke.show && (w = this.isNullValue ? 0 : Array.isArray(this.strokeWidth) ? this.strokeWidth[v] : this.strokeWidth);
                             var P, M = this.drawCandleStickPaths({
                                 indexes: {
                                     i: o,
                                     j: A,
                                     realIndex: v,
                                     bc: l
                                 },
                                 x: f,
                                 y: p,
                                 xDivision: h,
                                 pathTo: u,
                                 pathFrom: d,
                                 barWidth: y,
                                 zeroH: c,
                                 strokeWidth: w,
                                 elSeries: b
                             });
                             u = M.pathTo, d = M.pathFrom, p = M.y, f = M.x, P = M.color, 0 < A && x.push(f + y / 2), g.push(p);
                             var L = s.fillPath(b, {
                                     seriesNumber: v,
                                     color: P
                                 }),
                                 E = this.candlestickOptions.wick.useFillColor ? P : void 0;
                             b = this.renderSeries({
                                 realIndex: v,
                                 pathFill: L,
                                 lineFill: E,
                                 j: A,
                                 i: o,
                                 pathFrom: d,
                                 pathTo: u,
                                 strokeWidth: w,
                                 elSeries: b,
                                 x: f,
                                 y: p,
                                 series: t,
                                 barHeight: m,
                                 barWidth: y,
                                 elDataLabelsWrap: S,
                                 visibleSeries: this.visibleI,
                                 type: "candlestick"
                             })
                         }
                         i.globals.seriesXvalues[v] = x, i.globals.seriesYvalues[v] = g, r.add(b)
                     }
                     return r
                 }
             }, {
                 key: "drawCandleStickPaths",
                 value: function (t) {
                     var e = t.indexes,
                         i = t.x,
                         a = (t.y, t.xDivision),
                         s = t.pathTo,
                         n = t.pathFrom,
                         r = t.barWidth,
                         o = t.zeroH,
                         l = t.strokeWidth,
                         h = this.w,
                         c = new X.default(this.ctx),
                         u = e.i,
                         d = e.j,
                         f = !0,
                         p = h.config.plotOptions.candlestick.colors.upward,
                         g = h.config.plotOptions.candlestick.colors.downward,
                         x = this.yRatio[this.yaxisIndex],
                         v = e.realIndex,
                         b = this.getOHLCValue(v, d),
                         m = o,
                         y = o;
                     b.o > b.c && (f = !1);
                     var w = Math.min(b.o, b.c),
                         k = Math.max(b.o, b.c);
                     h.globals.isXNumeric && (i = (h.globals.seriesX[u][d] - h.globals.minX) / this.xRatio - r / 2);
                     var S = i + r * this.visibleI;
                     return c.move(S, o), n = c.move(S, o), 0 < h.globals.previousPaths.length && (n = this.getPathFrom(v, d, !0)), void 0 === this.series[u][d] || null === this.series[u][d] ? w = o : (w = o - w / x, k = o - k / x, m = o - b.h / x, y = o - b.l / x), s = c.move(S, k) + c.line(S + r / 2, k) + c.line(S + r / 2, m) + c.line(S + r / 2, k) + c.line(S + r, k) + c.line(S + r, w) + c.line(S + r / 2, w) + c.line(S + r / 2, y) + c.line(S + r / 2, w) + c.line(S, w) + c.line(S, k - l / 2), h.globals.isXNumeric || (i += a), {
                         pathTo: s,
                         pathFrom: n,
                         x: i,
                         y: k,
                         barXPosition: S,
                         color: f ? p : g
                     }
                 }
             }, {
                 key: "getOHLCValue",
                 value: function (t, e) {
                     var i = this.w;
                     return {
                         o: i.globals.seriesCandleO[t][e],
                         h: i.globals.seriesCandleH[t][e],
                         l: i.globals.seriesCandleL[t][e],
                         c: i.globals.seriesCandleC[t][e]
                     }
                 }
             }]), e
         }();
         e.default = r
     }, function (t, e, i) {
         "use strict";
         var a = function () {
                 function a(t, e) {
                     for (var i = 0; i < e.length; i++) {
                         var a = e[i];
                         a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                     }
                 }
                 return function (t, e, i) {
                     return e && a(t.prototype, e), i && a(t, i), t
                 }
             }(),
             b = s(i(32)),
             r = s(i(26)),
             A = s(i(0)),
             C = s(i(1)),
             P = s(i(5));

         function s(t) {
             return t && t.__esModule ? t : {
                 default: t
             }
         }

         function u(t) {
             if (Array.isArray(t)) {
                 for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
                 return i
             }
             return Array.from(t)
         }
         var n = function () {
             function i(t, e) {
                 ! function (t, e) {
                     if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                 }(this, i), this.ctx = t, this.w = t.w, this.xRatio = e.xRatio, this.yRatio = e.yRatio, this.dynamicAnim = this.w.config.chart.animations.dynamicAnimation, this.rectRadius = this.w.config.plotOptions.heatmap.radius, this.strokeWidth = this.w.config.stroke.width
             }
             return a(i, [{
                 key: "draw",
                 value: function (t) {
                     var e = this.w,
                         i = new A.default(this.ctx),
                         a = i.group({
                             class: "apexcharts-heatmap"
                         });
                     a.attr("clip-path", "url(#gridRectMask" + e.globals.cuid + ")");
                     for (var s = e.globals.gridWidth / e.globals.dataPoints, n = e.globals.gridHeight / e.globals.series.length, r = 0, o = t.length - 1; 0 <= o; o--) {
                         var l = i.group({
                             class: "apexcharts-series apexcharts-heatmap-series " + e.globals.seriesNames[o].toString().replace(/ /g, "-"),
                             rel: o + 1,
                             "data:realIndex": o
                         });
                         if (e.config.chart.dropShadow.enabled) {
                             var h = e.config.chart.dropShadow;
                             new P.default(this.ctx).dropShadow(l, h)
                         }
                         for (var c = 0, u = 0; u < t[o].length; u++) {
                             var d = 1,
                                 f = this.determineHeatColor(o, u);
                             if (e.globals.hasNegs) {
                                 var p = e.config.plotOptions.heatmap.shadeIntensity;
                                 d = f.percent < 0 ? 1 - (1 + f.percent / 100) * p : (1 - f.percent / 100) * p
                             } else d = 1 - f.percent / 100;
                             var g = f.color;
                             if (e.config.plotOptions.heatmap.enableShades) {
                                 var x = new C.default;
                                 g = C.default.hexToRgba(x.shadeColor(d, f.color), e.config.fill.opacity)
                             }
                             var v = this.rectRadius,
                                 b = i.drawRect(c, r, s, n, v);
                             if (b.attr({
                                     cx: c,
                                     cy: r
                                 }), b.node.classList.add("apexcharts-heatmap-rect"), l.add(b), b.attr({
                                     fill: g,
                                     i: o,
                                     index: o,
                                     j: u,
                                     val: t[o][u],
                                     "stroke-width": this.strokeWidth,
                                     stroke: e.globals.stroke.colors[0],
                                     color: g
                                 }), b.node.addEventListener("mouseenter", i.pathMouseEnter.bind(this, b)), b.node.addEventListener("mouseleave", i.pathMouseLeave.bind(this, b)), b.node.addEventListener("mousedown", i.pathMouseDown.bind(this, b)), e.config.chart.animations.enabled && !e.globals.dataChanged) {
                                 var m = 1;
                                 e.globals.resized || (m = e.config.chart.animations.speed), this.animateHeatMap(b, c, r, s, n, m)
                             }
                             if (e.globals.dataChanged) {
                                 var y = 1;
                                 if (this.dynamicAnim.enabled && e.globals.shouldAnimate) {
                                     y = this.dynamicAnim.speed;
                                     var w = e.globals.previousPaths[o] && e.globals.previousPaths[o][u] && e.globals.previousPaths[o][u].color;
                                     w || (w = "rgba(255, 255, 255, 1)"), this.animateHeatColor(b, C.default.rgb2hex(w), C.default.rgb2hex(g), y)
                                 }
                             }
                             var k = this.calculateHeatmapDataLabels({
                                 x: c,
                                 y: r,
                                 i: o,
                                 j: u,
                                 series: t,
                                 rectHeight: n,
                                 rectWidth: s
                             });
                             null !== k && l.add(k), c += s
                         }
                         r += n, a.add(l)
                     }
                     e.globals.yAxisScale[0].result.push("");
                     var S = e.globals.gridHeight / e.globals.series.length;
                     return e.config.yaxis[0].labels.offsetY = -S / 2, a
                 }
             }, {
                 key: "determineHeatColor",
                 value: function (t, e) {
                     var i = this.w,
                         a = i.globals.series[t][e],
                         s = i.config.plotOptions.heatmap,
                         n = s.colorScale.inverse ? e : t,
                         r = i.globals.colors[n],
                         o = Math.min.apply(Math, u(i.globals.series[t])),
                         l = Math.max.apply(Math, u(i.globals.series[t]));
                     s.distributed || (o = i.globals.minY, l = i.globals.maxY), void 0 !== s.colorScale.min && (o = s.colorScale.min < i.globals.minY ? s.colorScale.min : i.globals.minY, l = s.colorScale.max > i.globals.maxY ? s.colorScale.max : i.globals.maxY);
                     var h = Math.abs(l) + Math.abs(o),
                         c = 100 * a / (0 === h ? h - 1e-6 : h);
                     0 < s.colorScale.ranges.length && s.colorScale.ranges.map(function (t, e) {
                         a >= t.from && a <= t.to && (r = t.color, o = t.from, l = t.to, h = Math.abs(l) + Math.abs(o), c = 100 * a / h)
                     });
                     return {
                         color: r,
                         percent: c
                     }
                 }
             }, {
                 key: "calculateHeatmapDataLabels",
                 value: function (t) {
                     var e = t.x,
                         i = t.y,
                         a = t.i,
                         s = t.j,
                         n = (t.series, t.rectHeight),
                         r = t.rectWidth,
                         o = this.w,
                         l = o.config.dataLabels,
                         h = new A.default(this.ctx),
                         c = new b.default(this.ctx),
                         u = l.formatter,
                         d = null;
                     if (l.enabled) {
                         d = h.group({
                             class: "apexcharts-data-labels"
                         });
                         var f = l.offsetX,
                             p = l.offsetY,
                             g = e + r / 2 + f,
                             x = i + n / 2 + parseInt(l.style.fontSize) / 3 + p,
                             v = u(o.globals.series[a][s], {
                                 seriesIndex: a,
                                 dataPointIndex: s,
                                 w: o
                             });
                         c.plotDataLabelsText({
                             x: g,
                             y: x,
                             text: v,
                             i: a,
                             j: s,
                             parent: d,
                             dataLabelsConfig: l
                         })
                     }
                     return d
                 }
             }, {
                 key: "animateHeatMap",
                 value: function (t, e, i, a, s, n) {
                     new r.default(this.ctx).animateRect(t, {
                         x: e + a / 2,
                         y: i + s / 2,
                         width: 0,
                         height: 0
                     }, {
                         x: e,
                         y: i,
                         width: a,
                         height: s
                     }, n)
                 }
             }, {
                 key: "animateHeatColor",
                 value: function (t, e, i, a) {
                     t.attr({
                         fill: e
                     }).animate(a).attr({
                         fill: i
                     })
                 }
             }]), i
         }();
         t.exports = n
     }, function (t, e, i) {
         "use strict";
         Object.defineProperty(e, "__esModule", {
             value: !0
         });
         var st = Object.assign || function (t) {
                 for (var e = 1; e < arguments.length; e++) {
                     var i = arguments[e];
                     for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (t[a] = i[a])
                 }
                 return t
             },
             s = function () {
                 function a(t, e) {
                     for (var i = 0; i < e.length; i++) {
                         var a = e[i];
                         a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                     }
                 }
                 return function (t, e, i) {
                     return e && a(t.prototype, e), i && a(t, i), t
                 }
             }(),
             nt = a(i(7)),
             rt = a(i(0)),
             ot = a(i(11)),
             lt = a(i(32)),
             ht = a(i(27)),
             n = a(i(75)),
             ct = a(i(1));

         function a(t) {
             return t && t.__esModule ? t : {
                 default: t
             }
         }
         var r = function () {
             function a(t, e, i) {
                 ! function (t, e) {
                     if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                 }(this, a), this.ctx = t, this.w = t.w, this.xyRatios = e, this.pointsChart = !("bubble" !== this.w.config.chart.type && "scatter" !== this.w.config.chart.type) || i, this.pointsChart && (this.scatter = new n.default(this.ctx)), this.noNegatives = this.w.globals.minX === Number.MAX_VALUE, this.yaxisIndex = 0
             }
             return s(a, [{
                 key: "draw",
                 value: function (t, e, i) {
                     var a = this.w,
                         s = new rt.default(this.ctx),
                         n = new ot.default(this.ctx),
                         r = a.globals.comboCharts ? e : a.config.chart.type,
                         o = s.group({
                             class: "apexcharts-" + r + "-series apexcharts-plot-series"
                         }),
                         l = new nt.default(this.ctx, a);
                     t = l.getLogSeries(t);
                     var h = this.xyRatios.yRatio;
                     h = l.getLogYRatios(h);
                     for (var c = this.xyRatios.zRatio, u = this.xyRatios.xRatio, d = this.xyRatios.baseLineY, f = [], p = [], g = 0, x = 0; x < t.length; x++) {
                         var v = a.globals.gridWidth / a.globals.dataPoints,
                             b = a.globals.comboCharts ? i[x] : x;
                         1 < h.length && (this.yaxisIndex = b);
                         var m = [],
                             y = [],
                             w = a.globals.gridHeight - d[this.yaxisIndex],
                             k = w;
                         w > a.globals.gridHeight && (k = a.globals.gridHeight), g = v / 2;
                         var S = a.globals.padHorizontal + g,
                             A = 1;
                         a.globals.isXNumeric && (S = (a.globals.seriesX[b][0] - a.globals.minX) / u), y.push(S);
                         var C = void 0,
                             P = void 0,
                             M = void 0,
                             L = void 0,
                             E = [],
                             T = [],
                             z = s.group({
                                 class: "apexcharts-series " + a.globals.seriesNames[b].toString().replace(/ /g, "-")
                             }),
                             X = s.group({
                                 class: "apexcharts-series-markers-wrap"
                             }),
                             O = s.group({
                                 class: "apexcharts-datalabels"
                             });
                         this.ctx.series.addCollapsedClassToSeries(z, b);
                         var Y = t[x].length === a.globals.dataPoints;
                         z.attr({
                             "data:longestSeries": Y,
                             rel: x + 1,
                             "data:realIndex": b
                         }), this.appendPathFrom = !0;
                         var I = S,
                             F = void 0,
                             _ = I,
                             N = w,
                             D = 0;
                         if (N = this.determineFirstPrevY({
                                 i: x,
                                 series: t,
                                 yRatio: h[this.yaxisIndex],
                                 zeroY: w,
                                 prevY: N,
                                 prevSeriesY: p,
                                 lineYPosition: D
                             }).prevY, m.push(N), F = N, null === t[x][0]) {
                             for (var R = 0; R < t[x].length; R++)
                                 if (null !== t[x][R]) {
                                     _ = v * R, N = w - t[x][R] / h[this.yaxisIndex], C = s.move(_, N), P = s.move(_, k);
                                     break
                                 }
                         } else C = s.move(_, N), P = s.move(_, k) + s.line(_, N);
                         if (M = s.move(-1, w) + s.line(-1, w), L = s.move(-1, w) + s.line(-1, w), 0 < a.globals.previousPaths.length) {
                             var W = this.checkPreviousPaths({
                                 pathFromLine: M,
                                 pathFromArea: L,
                                 realIndex: b
                             });
                             M = W.pathFromLine, L = W.pathFromArea
                         }
                         for (var H = 1 < a.globals.dataPoints ? a.globals.dataPoints - 1 : a.globals.dataPoints, j = 0; j < H; j++) {
                             a.globals.isXNumeric ? S = (a.globals.seriesX[b][j + 1] - a.globals.minX) / u : S += v;
                             var B = ct.default.isNumber(a.globals.minYArr[b]) ? a.globals.minYArr[b] : a.globals.minY;
                             A = a.config.chart.stacked ? (D = 0 < x && a.globals.collapsedSeries.length < a.config.series.length - 1 ? p[x - 1][j + 1] : w, void 0 === t[x][j + 1] || null === t[x][j + 1] ? D - B / h[this.yaxisIndex] : D - t[x][j + 1] / h[this.yaxisIndex]) : void 0 === t[x][j + 1] || null === t[x][j + 1] ? w - B / h[this.yaxisIndex] : w - t[x][j + 1] / h[this.yaxisIndex], y.push(S), m.push(A);
                             var V = this.createPaths({
                                 series: t,
                                 i: x,
                                 j: j,
                                 x: S,
                                 y: A,
                                 xDivision: v,
                                 pX: I,
                                 pY: F,
                                 areaBottomY: k,
                                 linePath: C,
                                 areaPath: P,
                                 linePaths: E,
                                 areaPaths: T
                             });
                             T = V.areaPaths, E = V.linePaths, I = V.pX, F = V.pY, P = V.areaPath, C = V.linePath, this.appendPathFrom && (M += s.line(S, w), L += s.line(S, w));
                             var G = this.calculatePoints({
                                 series: t,
                                 x: S,
                                 y: A,
                                 realIndex: b,
                                 i: x,
                                 j: j,
                                 prevY: N,
                                 categoryAxisCorrection: g,
                                 xRatio: u
                             });
                             if (this.pointsChart) this.scatter.draw(z, j, {
                                 realIndex: b,
                                 pointsPos: G,
                                 zRatio: c,
                                 elParent: X
                             });
                             else {
                                 var U = new ht.default(this.ctx);
                                 1 < a.globals.dataPoints && X.node.classList.add("hidden");
                                 var q = U.plotChartMarkers(G, b, j + 1);
                                 null !== q && X.add(q)
                             }
                             var Z = new lt.default(this.ctx).drawDataLabel(G, b, j + 1);
                             null !== Z && O.add(Z)
                         }
                         p.push(m), a.globals.seriesXvalues[b] = y, a.globals.seriesYvalues[b] = m, this.pointsChart || a.globals.delayedElements.push({
                             el: X.node,
                             index: b
                         });
                         var $ = {
                             i: x,
                             realIndex: b,
                             animationDelay: x,
                             initialSpeed: a.config.chart.animations.speed,
                             dataChangeSpeed: a.config.chart.animations.dynamicAnimation.speed,
                             className: "apexcharts-" + r,
                             id: "apexcharts-" + r
                         };
                         if (a.config.stroke.show && !this.pointsChart) {
                             var J = null;
                             J = "line" === r ? n.fillPath(z, {
                                 seriesNumber: b,
                                 i: x
                             }) : a.globals.stroke.colors[b];
                             for (var Q = 0; Q < E.length; Q++) {
                                 var K = s.renderPaths(st({}, $, {
                                     pathFrom: M,
                                     pathTo: E[Q],
                                     stroke: J,
                                     strokeWidth: Array.isArray(a.config.stroke.width) ? a.config.stroke.width[b] : a.config.stroke.width,
                                     strokeLineCap: a.config.stroke.lineCap,
                                     fill: "none"
                                 }));
                                 z.add(K)
                             }
                         }
                         if ("area" === r)
                             for (var tt = n.fillPath(z, {
                                     seriesNumber: b
                                 }), et = 0; et < T.length; et++) {
                                 var it = s.renderPaths(st({}, $, {
                                     pathFrom: L,
                                     pathTo: T[et],
                                     stroke: "none",
                                     strokeWidth: 0,
                                     strokeLineCap: null,
                                     fill: tt
                                 }));
                                 z.add(it)
                             }
                         z.add(X), z.add(O), f.push(z)
                     }
                     for (var at = f.length; 0 < at; at--) o.add(f[at - 1]);
                     return o
                 }
             }, {
                 key: "createPaths",
                 value: function (t) {
                     var e = t.series,
                         i = t.i,
                         a = t.j,
                         s = t.x,
                         n = t.y,
                         r = t.pX,
                         o = t.pY,
                         l = t.xDivision,
                         h = t.areaBottomY,
                         c = t.linePath,
                         u = t.areaPath,
                         d = t.linePaths,
                         f = t.areaPaths,
                         p = this.w,
                         g = new rt.default(this.ctx),
                         x = Array.isArray(p.config.stroke.curve) ? p.config.stroke.curve[i] : p.config.stroke.curve;
                     if ("smooth" === x) {
                         var v = .35 * (s - r);
                         p.globals.hasNullValues ? (null !== e[i][a] && (u = null !== e[i][a + 1] ? (c = g.move(r, o) + g.curve(r + v, o, s - v, n, s + 1, n), g.move(r + 1, o) + g.curve(r + v, o, s - v, n, s + 1, n) + g.line(s, h) + g.line(r, h) + "z") : (c = g.move(r, o), g.move(r, o) + "z")), d.push(c), f.push(u)) : (c += g.curve(r + v, o, s - v, n, s, n), u += g.curve(r + v, o, s - v, n, s, n)), r = s, o = n, a === e[i].length - 2 && (u = u + g.curve(r, o, s, n, s, h) + g.move(s, n) + "z", p.globals.hasNullValues || (d.push(c), f.push(u)))
                     } else null === e[i][a + 1] && (c += g.move(s, n), u = u + g.line(s - l, h) + g.move(s, n)), null === e[i][a] && (c += g.move(s, n), u += g.move(s, h)), "stepline" === x ? (c = c + g.line(s, null, "H") + g.line(null, n, "V"), u = u + g.line(s, null, "H") + g.line(null, n, "V")) : "straight" === x && (c += g.line(s, n), u += g.line(s, n)), a === e[i].length - 2 && (u = u + g.line(s, h) + g.move(s, n) + "z", d.push(c), f.push(u));
                     return {
                         linePaths: d,
                         areaPaths: f,
                         pX: r,
                         pY: o,
                         linePath: c,
                         areaPath: u
                     }
                 }
             }, {
                 key: "calculatePoints",
                 value: function (t) {
                     var e = t.series,
                         i = t.realIndex,
                         a = t.x,
                         s = t.y,
                         n = t.i,
                         r = t.j,
                         o = t.prevY,
                         l = t.categoryAxisCorrection,
                         h = t.xRatio,
                         c = this.w,
                         u = [],
                         d = [];
                     if (0 === r) {
                         var f = l + c.config.markers.offsetX;
                         c.globals.isXNumeric && (f = (c.globals.seriesX[i][0] - c.globals.minX) / h + c.config.markers.offsetX), u.push(f), d.push(ct.default.isNumber(e[n][0]) ? o + c.config.markers.offsetY : null), u.push(a + c.config.markers.offsetX), d.push(ct.default.isNumber(e[n][r + 1]) ? s + c.config.markers.offsetY : null)
                     } else u.push(a + c.config.markers.offsetX), d.push(ct.default.isNumber(e[n][r + 1]) ? s + c.config.markers.offsetY : null);
                     return {
                         x: u,
                         y: d
                     }
                 }
             }, {
                 key: "checkPreviousPaths",
                 value: function (t) {
                     for (var e = t.pathFromLine, i = t.pathFromArea, a = t.realIndex, s = this.w, n = 0; n < s.globals.previousPaths.length; n++) {
                         var r = s.globals.previousPaths[n];
                         ("line" === r.type || "area" === r.type) && 0 < r.paths.length && parseInt(r.realIndex) === parseInt(a) && ("line" === r.type ? (this.appendPathFrom = !1, e = s.globals.previousPaths[n].paths[0].d) : "area" === r.type && (this.appendPathFrom = !1, e = s.globals.previousPaths[n].paths[0].d, i = s.globals.previousPaths[n].paths[1].d))
                     }
                     return {
                         pathFromLine: e,
                         pathFromArea: i
                     }
                 }
             }, {
                 key: "determineFirstPrevY",
                 value: function (t) {
                     var e = t.i,
                         i = t.series,
                         a = t.yRatio,
                         s = t.zeroY,
                         n = t.prevY,
                         r = t.prevSeriesY,
                         o = t.lineYPosition,
                         l = this.w;
                     if (void 0 !== i[e][0]) n = l.config.chart.stacked ? (o = 0 < e ? r[e - 1][0] : s) - i[e][0] / a : s - i[e][0] / a;
                     else if (l.config.chart.stacked && 0 < e && void 0 === i[e][0])
                         for (var h = e - 1; 0 <= h; h--)
                             if (null !== i[h][0] && void 0 !== i[h][0]) {
                                 n = o = r[h][0];
                                 break
                             } return {
                         prevY: n,
                         lineYPosition: o
                     }
                 }
             }]), a
         }();
         e.default = r
     }, function (t, e, i) {
         "use strict";
         Object.defineProperty(e, "__esModule", {
             value: !0
         });
         var b = Object.assign || function (t) {
                 for (var e = 1; e < arguments.length; e++) {
                     var i = arguments[e];
                     for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (t[a] = i[a])
                 }
                 return t
             },
             a = function () {
                 function a(t, e) {
                     for (var i = 0; i < e.length; i++) {
                         var a = e[i];
                         a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                     }
                 }
                 return function (t, e, i) {
                     return e && a(t.prototype, e), i && a(t, i), t
                 }
             }(),
             n = s(i(11)),
             r = s(i(0)),
             m = s(i(27)),
             f = s(i(32)),
             y = s(i(5));

         function s(t) {
             return t && t.__esModule ? t : {
                 default: t
             }
         }
         var o = function () {
             function s(t) {
                 ! function (t, e) {
                     if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                 }(this, s), this.ctx = t, this.w = t.w, this.chartType = this.w.config.chart.type, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled, this.animDur = 0;
                 var e = this.w;
                 this.graphics = new r.default(this.ctx), this.lineColorArr = void 0 !== e.globals.stroke.colors ? e.globals.stroke.colors : e.globals.colors, this.defaultSize = e.globals.svgHeight < e.globals.svgWidth ? e.globals.svgHeight - 35 : e.globals.gridWidth, this.maxValue = this.w.globals.maxY, this.maxLabelWidth = 20;
                 var i = e.globals.labels.slice().sort(function (t, e) {
                         return e.length - t.length
                     })[0],
                     a = this.graphics.getTextRects(i, e.config.dataLabels.style.fontSize);
                 this.size = this.defaultSize / 2.1 - e.config.stroke.width - e.config.chart.dropShadow.blur - a.width / 1.75, void 0 !== e.config.plotOptions.radar.size && (this.size = e.config.plotOptions.radar.size), this.dataRadiusOfPercent = [], this.dataRadius = [], this.angleArr = [], this.yaxisLabelsTextsPos = []
             }
             return a(s, [{
                 key: "draw",
                 value: function (t) {
                     var d = this,
                         f = this.w,
                         p = new n.default(this.ctx),
                         g = [];
                     this.dataPointsLen = t[f.globals.maxValsInArrayIndex].length, this.disAngle = 2 * Math.PI / this.dataPointsLen;
                     var e = f.globals.gridWidth / 2,
                         i = f.globals.gridHeight / 2,
                         a = this.graphics.group({
                             class: "apexcharts-radar-series",
                             "data:innerTranslateX": e,
                             "data:innerTranslateY": i - 25,
                             transform: "translate(" + (e || 0) + ", " + (i || 0) + ")"
                         }),
                         x = [],
                         v = null;
                     this.yaxisLabels = this.graphics.group({
                         class: "apexcharts-yaxis"
                     }), t.forEach(function (t, n) {
                         var r = d.graphics.group().attr({
                             class: "apexcharts-series " + f.globals.seriesNames[n].toString().replace(/ /g, "-"),
                             rel: n + 1,
                             "data:realIndex": n
                         });
                         d.dataRadiusOfPercent[n] = [], d.dataRadius[n] = [], d.angleArr[n] = [], t.forEach(function (t, e) {
                             d.dataRadiusOfPercent[n][e] = t / d.maxValue, d.dataRadius[n][e] = d.dataRadiusOfPercent[n][e] * d.size, d.angleArr[n][e] = e * d.disAngle
                         }), x = d.getDataPointsPos(d.dataRadius[n], d.angleArr[n]);
                         var e = d.createPaths(x, {
                             x: 0,
                             y: 0
                         });
                         v = d.graphics.group({
                             class: "apexcharts-series-markers-wrap hidden"
                         }), f.globals.delayedElements.push({
                             el: v.node,
                             index: n
                         });
                         var i = {
                                 i: n,
                                 realIndex: n,
                                 animationDelay: n,
                                 initialSpeed: f.config.chart.animations.speed,
                                 dataChangeSpeed: f.config.chart.animations.dynamicAnimation.speed,
                                 className: "apexcharts-radar",
                                 id: "apexcharts-radar",
                                 shouldClipToGrid: !1,
                                 bindEventsOnPaths: !1,
                                 stroke: f.globals.stroke.colors[n],
                                 strokeLineCap: f.config.stroke.lineCap
                             },
                             a = null;
                         0 < f.globals.previousPaths.length && (a = d.getPathFrom(n));
                         for (var s = 0; s < e.linePathsTo.length; s++) {
                             var o = d.graphics.renderPaths(b({}, i, {
                                 pathFrom: null === a ? e.linePathsFrom[s] : a,
                                 pathTo: e.linePathsTo[s],
                                 strokeWidth: Array.isArray(f.config.stroke.width) ? f.config.stroke.width[n] : f.config.stroke.width,
                                 fill: "none"
                             }));
                             r.add(o);
                             var l = p.fillPath(r, {
                                     seriesNumber: n
                                 }),
                                 h = d.graphics.renderPaths(b({}, i, {
                                     pathFrom: null === a ? e.areaPathsFrom[s] : a,
                                     pathTo: e.areaPathsTo[s],
                                     strokeWidth: 0,
                                     fill: l
                                 }));
                             if (f.config.chart.dropShadow.enabled) {
                                 var c = new y.default(d.ctx),
                                     u = f.config.chart.dropShadow;
                                 c.dropShadow(h, b({}, u, {
                                     noUserSpaceOnUse: !0
                                 }))
                             }
                             r.add(h)
                         }
                         t.forEach(function (t, e) {
                             var i = new m.default(d.ctx).getMarkerConfig("apexcharts-marker", n),
                                 a = d.graphics.drawMarker(x[e].x, x[e].y, i);
                             a.attr("rel", e), a.attr("j", e), a.attr("index", n), a.node.setAttribute("default-marker-size", i.pSize);
                             var s = d.graphics.group({
                                 class: "apexcharts-series-markers"
                             });
                             s && s.add(a), v.add(s), r.add(v)
                         }), g.push(r)
                     }), this.drawPolygons({
                         parent: a
                     });
                     var s = this.drawLabels();
                     return a.add(this.yaxisLabels), a.add(s), g.forEach(function (t) {
                         a.add(t)
                     }), a
                 }
             }, {
                 key: "drawPolygons",
                 value: function (t) {
                     for (var n = this, r = this.w, a = t.parent, s = r.globals.yAxisScale[0].result.reverse(), e = s.length, i = [], o = this.size / (e - 1), l = 0; l < e; l++) i[l] = o * l;
                     i.reverse();
                     var h = [],
                         c = [];
                     i.forEach(function (t, a) {
                         var e = n.getPolygonPos(t),
                             s = "";
                         e.forEach(function (t, e) {
                             if (0 === a) {
                                 var i = n.graphics.drawLine(t.x, t.y, 0, 0, r.config.plotOptions.radar.polygons.strokeColor);
                                 c.push(i)
                             }
                             0 === e && n.yaxisLabelsTextsPos.push({
                                 x: t.x,
                                 y: t.y
                             }), s += t.x + "," + t.y + " "
                         }), h.push(s)
                     }), h.forEach(function (t, e) {
                         var i = n.graphics.drawPolygon(t, r.config.plotOptions.radar.polygons.strokeColor, r.globals.radarPolygons.fill.colors[e]);
                         a.add(i)
                     }), c.forEach(function (t) {
                         a.add(t)
                     }), this.yaxisLabelsTextsPos.forEach(function (t, e) {
                         var i = n.drawYAxisText(t.x, t.y, e, s[e]);
                         n.yaxisLabels.add(i)
                     })
                 }
             }, {
                 key: "drawYAxisText",
                 value: function (t, e, i, a) {
                     var s = this.w,
                         n = s.config.yaxis[0],
                         r = s.globals.yLabelFormatters[0];
                     return this.graphics.drawText({
                         x: t + n.labels.offsetX,
                         y: e + n.labels.offsetY,
                         text: r(a, i),
                         textAnchor: "middle",
                         fontSize: n.labels.style.fontSize,
                         fontFamily: n.labels.style.fontFamily,
                         foreColor: n.labels.style.color
                     })
                 }
             }, {
                 key: "drawLabels",
                 value: function () {
                     var n = this,
                         r = this.w,
                         o = "middle",
                         l = r.config.dataLabels,
                         h = this.graphics.group({
                             class: "apexcharts-datalabels"
                         }),
                         c = this.getPolygonPos(this.size),
                         u = 0,
                         d = 0;
                     return r.globals.labels.forEach(function (t, e) {
                         var i = l.formatter,
                             a = new f.default(n.ctx);
                         if (c[e]) {
                             u = c[e].x, d = c[e].y, 10 <= Math.abs(c[e].x) ? 0 < c[e].x ? (o = "start", u += 10) : c[e].x < 0 && (o = "end", u -= 10) : o = "middle", Math.abs(c[e].y) >= n.size - 10 && (c[e].y < 0 ? d -= 10 : 0 < c[e].y && (d += 10));
                             var s = i(t, {
                                 seriesIndex: -1,
                                 dataPointIndex: e,
                                 w: r
                             });
                             a.plotDataLabelsText({
                                 x: u,
                                 y: d,
                                 text: s,
                                 textAnchor: o,
                                 i: e,
                                 j: e,
                                 parent: h,
                                 dataLabelsConfig: l,
                                 offsetCorrection: !1
                             })
                         }
                     }), h
                 }
             }, {
                 key: "createPaths",
                 value: function (i, t) {
                     var a = this,
                         e = [],
                         s = [],
                         n = [],
                         r = [];
                     if (i.length) {
                         s = [this.graphics.move(t.x, t.y)], r = [this.graphics.move(t.x, t.y)];
                         var o = this.graphics.move(i[0].x, i[0].y),
                             l = this.graphics.move(i[0].x, i[0].y);
                         i.forEach(function (t, e) {
                             o += a.graphics.line(t.x, t.y), l += a.graphics.line(t.x, t.y), e === i.length - 1 && (o += "Z", l += "Z")
                         }), e.push(o), n.push(l)
                     }
                     return {
                         linePathsFrom: s,
                         linePathsTo: e,
                         areaPathsFrom: r,
                         areaPathsTo: n
                     }
                 }
             }, {
                 key: "getPathFrom",
                 value: function (t) {
                     for (var e = this.w, i = null, a = 0; a < e.globals.previousPaths.length; a++) {
                         var s = e.globals.previousPaths[a];
                         0 < s.paths.length && parseInt(s.realIndex) === parseInt(t) && void 0 !== e.globals.previousPaths[a].paths[0] && (i = e.globals.previousPaths[a].paths[0].d)
                     }
                     return i
                 }
             }, {
                 key: "getDataPointsPos",
                 value: function (t, e) {
                     var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : this.dataPointsLen;
                     t = t || [], e = e || [];
                     for (var a = [], s = 0; s < i; s++) {
                         var n = {};
                         n.x = t[s] * Math.sin(e[s]), n.y = -t[s] * Math.cos(e[s]), a.push(n)
                     }
                     return a
                 }
             }, {
                 key: "getPolygonPos",
                 value: function (t) {
                     for (var e = [], i = 2 * Math.PI / this.dataPointsLen, a = 0; a < this.dataPointsLen; a++) {
                         var s = {};
                         s.x = t * Math.sin(a * i), s.y = -t * Math.cos(a * i), e.push(s)
                     }
                     return e
                 }
             }]), s
         }();
         e.default = o
     }, function (t, e, i) {
         "use strict";
         Object.defineProperty(e, "__esModule", {
             value: !0
         });
         var s = function () {
                 function a(t, e) {
                     for (var i = 0; i < e.length; i++) {
                         var a = e[i];
                         a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                     }
                 }
                 return function (t, e, i) {
                     return e && a(t.prototype, e), i && a(t, i), t
                 }
             }(),
             T = a(i(74)),
             z = a(i(1)),
             X = a(i(11)),
             O = a(i(0)),
             Y = a(i(5));

         function a(t) {
             return t && t.__esModule ? t : {
                 default: t
             }
         }
         var n = function (t) {
             function a(t) {
                 ! function (t, e) {
                     if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                 }(this, a);
                 var e = function (t, e) {
                     if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                     return !e || "object" != typeof e && "function" != typeof e ? t : e
                 }(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, t));
                 e.ctx = t, e.w = t.w, e.animBeginArr = [0], e.animDur = 0;
                 var i = e.w;
                 return e.startAngle = i.config.plotOptions.radialBar.startAngle, e.endAngle = i.config.plotOptions.radialBar.endAngle, e.trackStartAngle = i.config.plotOptions.radialBar.track.startAngle, e.trackEndAngle = i.config.plotOptions.radialBar.track.endAngle, e.radialDataLabels = i.config.plotOptions.radialBar.dataLabels, e.trackStartAngle || (e.trackStartAngle = e.startAngle), e.trackEndAngle || (e.trackEndAngle = e.endAngle), 360 === e.endAngle && (e.endAngle = 359.99), e.fullAngle = 360 - i.config.plotOptions.radialBar.endAngle - i.config.plotOptions.radialBar.startAngle, e.margin = parseInt(i.config.plotOptions.radialBar.track.margin), e
             }
             return function (t, e) {
                 if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                 t.prototype = Object.create(e && e.prototype, {
                     constructor: {
                         value: t,
                         enumerable: !1,
                         writable: !0,
                         configurable: !0
                     }
                 }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
             }(a, T.default), s(a, [{
                 key: "draw",
                 value: function (t) {
                     var e = this.w,
                         i = new O.default(this.ctx),
                         a = i.group({
                             class: "apexcharts-radialbar"
                         }),
                         s = i.group(),
                         n = this.defaultSize / 2,
                         r = e.globals.gridWidth / 2,
                         o = this.defaultSize / 2.05 - e.config.stroke.width - e.config.chart.dropShadow.blur;
                     void 0 !== e.config.plotOptions.radialBar.size && (o = e.config.plotOptions.radialBar.size);
                     var l = e.globals.fill.colors;
                     if (e.config.plotOptions.radialBar.track.show) {
                         var h = this.drawTracks({
                             size: o,
                             centerX: r,
                             centerY: n,
                             colorArr: l,
                             series: t
                         });
                         s.add(h)
                     }
                     var c = this.drawArcs({
                         size: o,
                         centerX: r,
                         centerY: n,
                         colorArr: l,
                         series: t
                     });
                     return s.add(c.g), "front" === e.config.plotOptions.radialBar.hollow.position && (c.g.add(c.elHollow), c.dataLabels && c.g.add(c.dataLabels)), a.add(s), a
                 }
             }, {
                 key: "drawTracks",
                 value: function (t) {
                     var e = this.w,
                         i = new O.default(this.ctx),
                         a = i.group(),
                         s = new Y.default(this.ctx),
                         n = new X.default(this.ctx),
                         r = this.getStrokeWidth(t);
                     t.size = t.size - r / 2;
                     for (var o = 0; o < t.series.length; o++) {
                         var l = i.group({
                             class: "apexcharts-radialbar-track apexcharts-track"
                         });
                         a.add(l), l.attr({
                             id: "apexcharts-track-" + o,
                             rel: o + 1
                         }), t.size = t.size - r - this.margin;
                         var h = e.config.plotOptions.radialBar.track,
                             c = n.fillPath(l, {
                                 seriesNumber: 0,
                                 size: t.size,
                                 fillColors: Array.isArray(h.background) ? h.background[o] : h.background,
                                 solid: !0
                             }),
                             u = this.trackStartAngle,
                             d = this.trackEndAngle;
                         360 <= Math.abs(d) + Math.abs(u) && (d = 360 - Math.abs(this.startAngle) - .1);
                         var f = i.drawPath({
                             d: "",
                             stroke: c,
                             strokeWidth: r * parseInt(h.strokeWidth) / 100,
                             fill: "none",
                             strokeOpacity: h.opacity,
                             classes: "apexcharts-radialbar-area"
                         });
                         if (h.dropShadow.enabled) {
                             var p = h.dropShadow;
                             s.dropShadow(f, p)
                         }
                         l.add(f), f.attr("id", "apexcharts-radialbarTrack-" + o), new T.default(this.ctx).animatePaths(f, {
                             centerX: t.centerX,
                             centerY: t.centerY,
                             endAngle: d,
                             startAngle: u,
                             size: t.size,
                             i: o,
                             totalItems: 2,
                             animBeginArr: 0,
                             dur: 0,
                             easing: e.globals.easing
                         })
                     }
                     return a
                 }
             }, {
                 key: "drawArcs",
                 value: function (t) {
                     var e = this.w,
                         i = new O.default(this.ctx),
                         a = new X.default(this.ctx),
                         s = new Y.default(this.ctx),
                         n = i.group(),
                         r = this.getStrokeWidth(t);
                     t.size = t.size - r / 2;
                     var o = e.config.plotOptions.radialBar.hollow.background,
                         l = t.size - r * t.series.length - this.margin * t.series.length - r * parseInt(e.config.plotOptions.radialBar.track.strokeWidth) / 100 / 2,
                         h = l - e.config.plotOptions.radialBar.hollow.margin;
                     void 0 !== e.config.plotOptions.radialBar.hollow.image && (o = this.drawHollowImage(t, n, l, o));
                     var c = this.drawHollow({
                         size: h,
                         centerX: t.centerX,
                         centerY: t.centerY,
                         fill: o
                     });
                     if (e.config.plotOptions.radialBar.hollow.dropShadow.enabled) {
                         var u = e.config.plotOptions.radialBar.hollow.dropShadow;
                         s.dropShadow(c, u)
                     }
                     var d = 1;
                     !this.radialDataLabels.total.show && 1 < e.globals.series.length && (d = 0);
                     var f = new T.default(this.ctx),
                         p = null;
                     this.radialDataLabels.show && (p = f.renderInnerDataLabels(this.radialDataLabels, {
                         hollowSize: l,
                         centerX: t.centerX,
                         centerY: t.centerY,
                         opacity: d
                     })), "back" === e.config.plotOptions.radialBar.hollow.position && (n.add(c), p && n.add(p));
                     var g = !1;
                     e.config.plotOptions.radialBar.inverseOrder && (g = !0);
                     for (var x = g ? t.series.length - 1 : 0; g ? 0 <= x : x < t.series.length; g ? x-- : x++) {
                         var v = i.group({
                             class: "apexcharts-series apexcharts-radial-series " + e.globals.seriesNames[x].toString().replace(/ /g, "-")
                         });
                         n.add(v), v.attr({
                             id: "apexcharts-series-" + x,
                             rel: x + 1
                         }), this.ctx.series.addCollapsedClassToSeries(v, x), t.size = t.size - r - this.margin;
                         var b = a.fillPath(v, {
                                 seriesNumber: x,
                                 size: t.size
                             }),
                             m = this.startAngle,
                             y = void 0,
                             w = Math.abs(e.config.plotOptions.radialBar.endAngle - e.config.plotOptions.radialBar.startAngle),
                             k = Math.round(w * z.default.negToZero(t.series[x]) / 100) + this.startAngle,
                             S = void 0;
                         e.globals.dataChanged && (y = this.startAngle, S = Math.round(w * z.default.negToZero(e.globals.previousPaths[x]) / 100) + y), 360 <= Math.abs(k) + Math.abs(m) && (k -= .01), 360 <= Math.abs(S) + Math.abs(y) && (S -= .01);
                         var A = k - m,
                             C = Array.isArray(e.config.stroke.dashArray) ? e.config.stroke.dashArray[x] : e.config.stroke.dashArray,
                             P = i.drawPath({
                                 d: "",
                                 stroke: b,
                                 strokeWidth: r,
                                 fill: "none",
                                 fillOpacity: e.config.fill.opacity,
                                 classes: "apexcharts-radialbar-area",
                                 strokeDashArray: C
                             });
                         if (O.default.setAttrs(P.node, {
                                 "data:angle": A,
                                 "data:value": t.series[x]
                             }), e.config.chart.dropShadow.enabled) {
                             var M = e.config.chart.dropShadow;
                             s.dropShadow(P, M)
                         }
                         this.addListeners(P, this.radialDataLabels);
                         var L = new T.default(this.ctx);
                         P.node.addEventListener("mouseenter", L.dataLabelsMouseIn.bind(this, P.node, this.radialDataLabels)), P.node.addEventListener("mouseleave", L.dataLabelsMouseout.bind(this, P.node, this.radialDataLabels)), v.add(P), P.attr("id", "apexcharts-radialArc-" + x);
                         var E = 0;
                         !L.initialAnim || e.globals.resized || e.globals.dataChanged || (E = (k - m) / 360 * e.config.chart.animations.speed, this.animDur = E / (1.2 * t.series.length) + this.animDur, this.animBeginArr.push(this.animDur)), e.globals.dataChanged && (E = (k - m) / 360 * e.config.chart.animations.dynamicAnimation.speed, this.animDur = E / (1.2 * t.series.length) + this.animDur, this.animBeginArr.push(this.animDur)), L.animatePaths(P, {
                             centerX: t.centerX,
                             centerY: t.centerY,
                             endAngle: k,
                             startAngle: m,
                             prevEndAngle: S,
                             prevStartAngle: y,
                             size: t.size,
                             i: x,
                             totalItems: 2,
                             animBeginArr: this.animBeginArr,
                             dur: E,
                             shouldSetPrevPaths: !0,
                             easing: e.globals.easing
                         })
                     }
                     return {
                         g: n,
                         elHollow: c,
                         dataLabels: p
                     }
                 }
             }, {
                 key: "drawHollow",
                 value: function (t) {
                     var e = new O.default(this.ctx).drawCircle(2 * t.size);
                     return e.attr({
                         class: "apexcharts-radialbar-hollow",
                         cx: t.centerX,
                         cy: t.centerY,
                         r: t.size,
                         fill: t.fill
                     }), e
                 }
             }, {
                 key: "drawHollowImage",
                 value: function (e, t, i, a) {
                     var s = this.w,
                         n = new X.default(this.ctx),
                         r = (Math.random() + 1).toString(36).substring(4),
                         o = s.config.plotOptions.radialBar.hollow.image;
                     if (s.config.plotOptions.radialBar.hollow.imageClipped) n.clippedImgArea({
                         width: i,
                         height: i,
                         image: o,
                         patternID: "pattern" + s.globals.cuid + r
                     }), a = "url(#pattern" + s.globals.cuid + r + ")";
                     else {
                         var l = s.config.plotOptions.radialBar.hollow.imageWidth,
                             h = s.config.plotOptions.radialBar.hollow.imageHeight;
                         if (void 0 === l && void 0 === h) {
                             var c = s.globals.dom.Paper.image(o).loaded(function (t) {
                                 this.move(e.centerX - t.width / 2 + s.config.plotOptions.radialBar.hollow.imageOffsetX, e.centerY - t.height / 2 + s.config.plotOptions.radialBar.hollow.imageOffsetY)
                             });
                             t.add(c)
                         } else {
                             var u = s.globals.dom.Paper.image(o).loaded(function (t) {
                                 this.move(e.centerX - l / 2 + s.config.plotOptions.radialBar.hollow.imageOffsetX, e.centerY - h / 2 + s.config.plotOptions.radialBar.hollow.imageOffsetY), this.size(l, h)
                             });
                             t.add(u)
                         }
                     }
                     return a
                 }
             }, {
                 key: "getStrokeWidth",
                 value: function (t) {
                     var e = this.w;
                     return t.size * (100 - parseInt(e.config.plotOptions.radialBar.hollow.size)) / 100 / (t.series.length + 1) - this.margin
                 }
             }]), a
         }();
         e.default = n
     }, function (t, e, i) {
         "use strict";
         var a = function () {
                 function a(t, e) {
                     for (var i = 0; i < e.length; i++) {
                         var a = e[i];
                         a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                     }
                 }
                 return function (t, e, i) {
                     return e && a(t.prototype, e), i && a(t, i), t
                 }
             }(),
             s = n(i(0)),
             g = n(i(52)),
             x = n(i(1));

         function n(t) {
             return t && t.__esModule ? t : {
                 default: t
             }
         }
         var r = function () {
             function e(t) {
                 ! function (t, e) {
                     if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                 }(this, e), this.ctx = t, this.w = t.w, this.graphics = new s.default(this.ctx), "bar" === this.w.config.chart.type && this.w.config.plotOptions.bar.horizontal && (this.invertAxis = !0), this.xDivision = this.w.globals.gridWidth / this.w.globals.dataPoints
             }
             return a(e, [{
                 key: "drawAnnotations",
                 value: function () {
                     var t = this.w;
                     if (t.globals.axisCharts) {
                         for (var e = this.drawYAxisAnnotations(), i = this.drawXAxisAnnotations(), a = this.drawPointAnnotations(), s = t.config.chart.animations.enabled, n = [e, i, a], r = [i.node, e.node, a.node], o = 0; o < 3; o++) t.globals.dom.elGraphical.add(n[o]), !s || t.globals.resized || t.globals.dataChanged || r[o].classList.add("hidden"), t.globals.delayedElements.push({
                             el: r[o],
                             index: 0
                         });
                         this.setOrientations(t.config.annotations.xaxis), this.annotationsBackground()
                     }
                 }
             }, {
                 key: "addXaxisAnnotation",
                 value: function (t, e, i) {
                     var a = this.w,
                         s = this.invertAxis ? a.globals.minY : a.globals.minX,
                         n = this.invertAxis ? a.globals.yRange[0] : a.globals.xRange,
                         r = t.strokeDashArray,
                         o = (t.x - s) / (n / a.globals.gridWidth);
                     if (!(o < 0 || o > a.globals.gridWidth)) {
                         var l = this.graphics.drawLine(o + t.offsetX, 0 + t.offsetY, o + t.offsetX, a.globals.gridHeight + t.offsetY, t.borderColor, r);
                         e.appendChild(l.node);
                         var h = "top" === t.label.position ? -3 : a.globals.gridHeight,
                             c = t.label.text ? t.label.text : "",
                             u = this.graphics.drawText({
                                 x: o + t.label.offsetX,
                                 y: h + t.label.offsetY,
                                 text: c,
                                 textAnchor: t.label.textAnchor,
                                 fontSize: t.label.style.fontSize,
                                 fontFamily: t.label.style.fontFamily,
                                 foreColor: t.label.style.color,
                                 cssClass: "apexcharts-xaxis-annotation-label " + t.label.style.cssClass
                             });
                         u.attr({
                             rel: i
                         }), e.appendChild(u.node)
                     }
                 }
             }, {
                 key: "drawXAxisAnnotations",
                 value: function () {
                     var i = this,
                         t = this.w,
                         a = this.graphics.group({
                             class: "apexcharts-xaxis-annotations"
                         });
                     return t.config.annotations.xaxis.map(function (t, e) {
                         i.addXaxisAnnotation(t, a.node, e)
                     }), a
                 }
             }, {
                 key: "addYaxisAnnotation",
                 value: function (t, e, i) {
                     var a = this.w,
                         s = t.strokeDashArray,
                         n = void 0;
                     if (this.invertAxis) {
                         var r = a.globals.labels.indexOf(t.y),
                             o = a.globals.dom.baseEl.querySelector(".apexcharts-yaxis-texts-g text:nth-child(" + (r + 1) + ")");
                         n = parseInt(o.getAttribute("y"))
                     } else n = a.globals.gridHeight - (t.y - a.globals.minYArr[t.yAxisIndex]) / (a.globals.yRange[t.yAxisIndex] / a.globals.gridHeight);
                     var l = t.label.text ? t.label.text : "",
                         h = this.graphics.drawLine(0 + t.offsetX, n + t.offsetY, a.globals.gridWidth + t.offsetX, n + t.offsetY, t.borderColor, s);
                     e.appendChild(h.node);
                     var c = "right" === t.label.position ? a.globals.gridWidth : 0,
                         u = this.graphics.drawText({
                             x: c + t.label.offsetX,
                             y: n + t.label.offsetY - 3,
                             text: l,
                             textAnchor: t.label.textAnchor,
                             fontSize: t.label.style.fontSize,
                             fontFamily: t.label.style.fontFamily,
                             foreColor: t.label.style.color,
                             cssClass: "apexcharts-yaxis-annotation-label " + t.label.style.cssClass
                         });
                     u.attr({
                         rel: i
                     }), e.appendChild(u.node)
                 }
             }, {
                 key: "drawYAxisAnnotations",
                 value: function () {
                     var i = this,
                         t = this.w,
                         a = this.graphics.group({
                             class: "apexcharts-yaxis-annotations"
                         });
                     return t.config.annotations.yaxis.map(function (t, e) {
                         i.addYaxisAnnotation(t, a.node, e)
                     }), a
                 }
             }, {
                 key: "clearAnnotations",
                 value: function (t) {
                     t.w.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-annotations, .apexcharts-xaxis-annotations, .apexcharts-point-annotations").forEach(function (t) {
                         for (; t.firstChild;) t.removeChild(t.firstChild)
                     })
                 }
             }, {
                 key: "addPointAnnotation",
                 value: function (t, e, i) {
                     var a = this.w,
                         s = 0,
                         n = 0,
                         r = 0;
                     if (this.invertAxis && console.warn("Point annotation is not supported in horizontal bar charts."), "string" == typeof t.x) {
                         var o = a.globals.labels.indexOf(t.x),
                             l = a.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g text:nth-child(" + (o + 1) + ")");
                         s = parseInt(l.getAttribute("x"));
                         var h = t.y;
                         null === t.y && (h = a.globals.series[t.seriesIndex][o]), n = a.globals.gridHeight - (h - a.globals.minYArr[t.yAxisIndex]) / (a.globals.yRange[t.yAxisIndex] / a.globals.gridHeight) - parseInt(t.label.style.fontSize) - t.marker.size, r = a.globals.gridHeight - (h - a.globals.minYArr[t.yAxisIndex]) / (a.globals.yRange[t.yAxisIndex] / a.globals.gridHeight)
                     } else s = (t.x - a.globals.minX) / (a.globals.xRange / a.globals.gridWidth), n = a.globals.gridHeight - (parseInt(t.y) - a.globals.minYArr[t.yAxisIndex]) / (a.globals.yRange[t.yAxisIndex] / a.globals.gridHeight) - parseInt(t.label.style.fontSize) - t.marker.size, r = a.globals.gridHeight - (t.y - a.globals.minYArr[t.yAxisIndex]) / (a.globals.yRange[t.yAxisIndex] / a.globals.gridHeight);
                     if (!(s < 0 || s > a.globals.gridWidth)) {
                         var c = {
                                 pSize: t.marker.size,
                                 pWidth: t.marker.strokeWidth,
                                 pointFillColor: t.marker.fillColor,
                                 pointStrokeColor: t.marker.strokeColor,
                                 shape: t.marker.shape,
                                 radius: t.marker.radius
                             },
                             u = this.graphics.drawMarker(s + t.marker.offsetX, r + t.marker.offsetY, c);
                         e.appendChild(u.node);
                         var d = t.label.text ? t.label.text : "",
                             f = this.graphics.drawText({
                                 x: s + t.label.offsetX,
                                 y: n + t.label.offsetY,
                                 text: d,
                                 textAnchor: t.label.textAnchor,
                                 fontSize: t.label.style.fontSize,
                                 fontFamily: t.label.style.fontFamily,
                                 foreColor: t.label.style.color,
                                 cssClass: "apexcharts-point-annotation-label " + t.label.style.cssClass
                             });
                         f.attr({
                             rel: i
                         }), e.appendChild(f.node)
                     }
                 }
             }, {
                 key: "drawPointAnnotations",
                 value: function () {
                     var i = this,
                         t = this.w,
                         a = this.graphics.group({
                             class: "apexcharts-point-annotations"
                         });
                     return t.config.annotations.points.map(function (t, e) {
                         i.addPointAnnotation(t, a.node, e)
                     }), a
                 }
             }, {
                 key: "setOrientations",
                 value: function (t) {
                     var l = this,
                         h = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                         c = this.w;
                     t.map(function (t, e) {
                         if ("vertical" === t.label.orientation) {
                             var i = null !== h ? h : e,
                                 a = c.globals.dom.baseEl.querySelector(".apexcharts-xaxis-annotations .apexcharts-xaxis-annotation-label[rel='" + i + "']");
                             if (null !== a) {
                                 var s = a.getBoundingClientRect();
                                 a.setAttribute("x", parseInt(a.getAttribute("x")) - s.height + 4), "top" === t.label.position ? a.setAttribute("y", parseInt(a.getAttribute("y")) + s.width) : a.setAttribute("y", parseInt(a.getAttribute("y")) - s.width);
                                 var n = l.graphics.rotateAroundCenter(a),
                                     r = n.x,
                                     o = n.y;
                                 a.setAttribute("transform", "rotate(-90 " + r + " " + o + ")")
                             }
                         }
                     })
                 }
             }, {
                 key: "addBackgroundToAnno",
                 value: function (t, e) {
                     var i = this.w.globals.dom.baseEl.querySelector(".apexcharts-grid").getBoundingClientRect(),
                         a = t.getBoundingClientRect(),
                         s = e.label.style.padding.left,
                         n = e.label.style.padding.right,
                         r = e.label.style.padding.top,
                         o = e.label.style.padding.bottom;
                     "vertical" === e.label.orientation && (r = e.label.style.padding.left, o = e.label.style.padding.right, s = e.label.style.padding.top, n = e.label.style.padding.bottom);
                     var l = a.left - i.left - s,
                         h = a.top - i.top - r;
                     return this.graphics.drawRect(l, h, a.width + s + n, a.height + r + o, 0, e.label.style.background, 1, e.label.borderWidth, e.label.borderColor, 0)
                 }
             }, {
                 key: "annotationsBackground",
                 value: function () {
                     var r = this,
                         o = this.w,
                         i = function (t, e, i) {
                             var a = o.globals.dom.baseEl.querySelector(".apexcharts-" + i + "-annotations .apexcharts-" + i + "-annotation-label[rel='" + e + "']");
                             if (a) {
                                 var s = a.parentNode,
                                     n = r.addBackgroundToAnno(a, t);
                                 s.insertBefore(n.node, a)
                             }
                         };
                     o.config.annotations.xaxis.map(function (t, e) {
                         i(t, e, "xaxis")
                     }), o.config.annotations.yaxis.map(function (t, e) {
                         i(t, e, "yaxis")
                     }), o.config.annotations.points.map(function (t, e) {
                         i(t, e, "point")
                     })
                 }
             }, {
                 key: "addText",
                 value: function (t, e, i) {
                     var a = t.x,
                         s = t.y,
                         n = t.text,
                         r = t.textAnchor,
                         o = t.appendTo,
                         l = void 0 === o ? ".apexcharts-inner" : o,
                         h = t.foreColor,
                         c = t.fontSize,
                         u = t.fontFamily,
                         d = t.cssClass,
                         f = t.backgroundColor,
                         p = t.borderWidth,
                         g = t.strokeDashArray,
                         x = t.radius,
                         v = t.borderColor,
                         b = t.paddingLeft,
                         m = void 0 === b ? 4 : b,
                         y = t.paddingRight,
                         w = void 0 === y ? 4 : y,
                         k = t.paddingBottom,
                         S = void 0 === k ? 2 : k,
                         A = t.paddingTop,
                         C = void 0 === A ? 2 : A,
                         P = i,
                         M = P.w,
                         L = M.globals.dom.baseEl.querySelector(l),
                         E = this.graphics.drawText({
                             x: a,
                             y: s,
                             text: n,
                             textAnchor: r || "start",
                             fontSize: c || "12px",
                             fontFamily: u || M.config.chart.fontFamily,
                             foreColor: h || M.config.chart.foreColor,
                             cssClass: d
                         });
                     L.appendChild(E.node);
                     var T = E.bbox(),
                         z = this.graphics.drawRect(T.x - m, T.y - C, T.width + m + w, T.height + S + C, x, f, 1, p, v, g);
                     return E.before(z), e && M.globals.memory.methodsToExec.push({
                         context: P,
                         method: P.addText,
                         params: {
                             x: a,
                             y: s,
                             text: n,
                             textAnchor: r,
                             appendTo: l,
                             foreColor: h,
                             fontSize: c,
                             cssClass: d,
                             backgroundColor: f,
                             borderWidth: p,
                             strokeDashArray: g,
                             radius: x,
                             borderColor: v,
                             paddingLeft: m,
                             paddingRight: w,
                             paddingBottom: S,
                             paddingTop: C
                         }
                     }), i
                 }
             }, {
                 key: "addPointAnnotationExternal",
                 value: function (t, e, i) {
                     return this.addAnnotationExternal({
                         params: t,
                         pushToMemory: e,
                         context: i,
                         type: "point",
                         contextMethod: i.addPointAnnotation
                     }), i
                 }
             }, {
                 key: "addYaxisAnnotationExternal",
                 value: function (t, e, i) {
                     return this.addAnnotationExternal({
                         params: t,
                         pushToMemory: e,
                         context: i,
                         type: "yaxis",
                         contextMethod: i.addYaxisAnnotation
                     }), i
                 }
             }, {
                 key: "addXaxisAnnotationExternal",
                 value: function (t, e, i) {
                     return this.addAnnotationExternal({
                         params: t,
                         pushToMemory: e,
                         context: i,
                         type: "xaxis",
                         contextMethod: i.addXaxisAnnotation
                     }), i
                 }
             }, {
                 key: "addAnnotationExternal",
                 value: function (t) {
                     var e = t.params,
                         i = t.pushToMemory,
                         a = t.context,
                         s = t.type,
                         n = t.contextMethod,
                         r = a,
                         o = r.w,
                         l = o.globals.dom.baseEl.querySelector(".apexcharts-" + s + "-annotations"),
                         h = l.childNodes.length + 1,
                         c = new g.default,
                         u = Object.assign({}, "xaxis" === s ? c.xAxisAnnotation : "yaxis" === s ? c.yAxisAnnotation : c.pointAnnotation),
                         d = x.default.extend(u, e);
                     switch (s) {
                         case "xaxis":
                             this.addXaxisAnnotation(d, l, h);
                             break;
                         case "yaxis":
                             this.addYaxisAnnotation(d, l, h);
                             break;
                         case "point":
                             this.addPointAnnotation(d, l, h)
                     }
                     var f = o.globals.dom.baseEl.querySelector(".apexcharts-" + s + "-annotations .apexcharts-" + s + "-annotation-label[rel='" + h + "']"),
                         p = this.addBackgroundToAnno(f, d);
                     return l.insertBefore(p.node, f), i && o.globals.memory.methodsToExec.push({
                         context: r,
                         method: n,
                         params: e
                     }), a
                 }
             }]), e
         }();
         t.exports = r
     }, function (t, e, i) {
         "use strict";
         var a = function () {
                 function a(t, e) {
                     for (var i = 0; i < e.length; i++) {
                         var a = e[i];
                         a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                     }
                 }
                 return function (t, e, i) {
                     return e && a(t.prototype, e), i && a(t, i), t
                 }
             }(),
             s = r(i(51)),
             n = r(i(144));

         function r(t) {
             return t && t.__esModule ? t : {
                 default: t
             }
         }
         var o = function () {
             function e(t) {
                 ! function (t, e) {
                     if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                 }(this, e), this.opts = t
             }
             return a(e, [{
                 key: "init",
                 value: function () {
                     var t = new s.default(this.opts).init();
                     return {
                         config: t,
                         globals: (new n.default).init(t)
                     }
                 }
             }]), e
         }();
         t.exports = o
     }, function (t, e, i) {
         "use strict";
         var a = function () {
                 function a(t, e) {
                     for (var i = 0; i < e.length; i++) {
                         var a = e[i];
                         a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                     }
                 }
                 return function (t, e, i) {
                     return e && a(t.prototype, e), i && a(t, i), t
                 }
             }(),
             m = p(i(47)),
             y = p(i(127)),
             w = p(i(128)),
             s = p(i(7)),
             n = p(i(76)),
             c = p(i(53)),
             k = p(i(129)),
             S = p(i(74)),
             A = p(i(131)),
             C = p(i(132)),
             P = p(i(130)),
             r = p(i(0)),
             l = p(i(49)),
             h = p(i(50)),
             o = p(i(78)),
             u = p(i(1)),
             d = p(i(28)),
             f = p(i(79));

         function p(t) {
             return t && t.__esModule ? t : {
                 default: t
             }
         }
         var g = function () {
             function i(t, e) {
                 ! function (t, e) {
                     if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                 }(this, i), this.ctx = e, this.w = e.w, this.el = t, this.coreUtils = new s.default(this.ctx), this.twoDSeries = [], this.threeDSeries = [], this.twoDSeriesX = []
             }
             return a(i, [{
                 key: "setupElements",
                 value: function () {
                     var t = this.w.globals,
                         e = this.w.config,
                         i = e.chart.type;
                     t.axisCharts = -1 < ["line", "area", "bar", "candlestick", "radar", "scatter", "bubble", "heatmap"].indexOf(i), t.xyCharts = -1 < ["line", "area", "bar", "candlestick", "scatter", "bubble"].indexOf(i), t.chartClass = ".apexcharts" + t.cuid, t.dom.baseEl = this.el, t.dom.elWrap = document.createElement("div"), r.default.setAttrs(t.dom.elWrap, {
                         id: t.chartClass.substring(1),
                         class: "apexcharts-canvas " + t.chartClass.substring(1)
                     }), this.el.appendChild(t.dom.elWrap), t.dom.Paper = new window.SVG.Doc(t.dom.elWrap), t.dom.Paper.attr({
                         class: "apexcharts-svg",
                         "xmlns:data": "ApexChartsNS",
                         transform: "translate(" + e.chart.offsetX + ", " + e.chart.offsetY + ")"
                     }), t.dom.Paper.node.style.background = e.chart.background, this.setSVGDimensions(), t.dom.elGraphical = t.dom.Paper.group().attr({
                         class: "apexcharts-inner apexcharts-graphical"
                     }), t.dom.elDefs = t.dom.Paper.defs(), t.dom.elLegendWrap = document.createElement("div"), t.dom.elLegendWrap.classList.add("apexcharts-legend"), t.dom.elWrap.appendChild(t.dom.elLegendWrap), t.dom.Paper.add(t.dom.elGraphical), t.dom.elGraphical.add(t.dom.elDefs)
                 }
             }, {
                 key: "plotChartType",
                 value: function (i, t) {
                     var a = this.w,
                         e = a.config,
                         s = a.globals,
                         n = {
                             series: [],
                             i: []
                         },
                         r = {
                             series: [],
                             i: []
                         },
                         o = {
                             series: [],
                             i: []
                         },
                         l = {
                             series: [],
                             i: []
                         },
                         h = {
                             series: [],
                             i: []
                         };
                     s.series.map(function (t, e) {
                         if (void 0 !== i[e].type) {
                             if ("column" === i[e].type || "bar" === i[e].type) a.config.plotOptions.bar.horizontal = !1, l.series.push(t), l.i.push(e);
                             else if ("area" === i[e].type) r.series.push(t), r.i.push(e);
                             else if ("line" === i[e].type) n.series.push(t), n.i.push(e);
                             else if ("scatter" === i[e].type) o.series.push(t), o.i.push(e);
                             else {
                                 if ("candlestick" !== i[e].type) throw new Error("You have specified an unrecognized chart type. Available types for this propery are line/area/column/bar");
                                 h.series.push(t), h.i.push(e)
                             }
                             s.comboCharts = !0
                         } else n.series.push(t), n.i.push(e)
                     });
                     var c = new P.default(this.ctx, t),
                         u = new w.default(this.ctx, t),
                         d = new S.default(this.ctx),
                         f = new C.default(this.ctx),
                         p = new A.default(this.ctx),
                         g = [];
                     if (s.comboCharts) {
                         if (0 < r.series.length && g.push(c.draw(r.series, "area", r.i)), 0 < l.series.length)
                             if (a.config.chart.stacked) {
                                 var x = new y.default(this.ctx, t);
                                 g.push(x.draw(l.series, l.i))
                             } else {
                                 var v = new m.default(this.ctx, t);
                                 g.push(v.draw(l.series, l.i))
                             } if (0 < n.series.length && g.push(c.draw(n.series, "line", n.i)), 0 < h.series.length && g.push(u.draw(h.series, h.i)), 0 < o.series.length) {
                             var b = new P.default(this.ctx, t, !0);
                             g.push(b.draw(o.series, "scatter", o.i))
                         }
                     } else switch (e.chart.type) {
                         case "line":
                             g = c.draw(s.series, "line");
                             break;
                         case "area":
                             g = c.draw(s.series, "area");
                             break;
                         case "bar":
                             if (e.chart.stacked) g = new y.default(this.ctx, t).draw(s.series);
                             else g = new m.default(this.ctx, t).draw(s.series);
                             break;
                         case "candlestick":
                             g = new w.default(this.ctx, t).draw(s.series);
                             break;
                         case "heatmap":
                             g = new k.default(this.ctx, t).draw(s.series);
                             break;
                         case "pie":
                         case "donut":
                             g = d.draw(s.series);
                             break;
                         case "radialBar":
                             g = f.draw(s.series);
                             break;
                         case "radar":
                             g = p.draw(s.series);
                             break;
                         default:
                             g = c.draw(s.series)
                     }
                     return g
                 }
             }, {
                 key: "setSVGDimensions",
                 value: function () {
                     var t = this.w.globals,
                         e = this.w.config;
                     t.svgWidth = e.chart.width, t.svgHeight = e.chart.height;
                     var i = u.default.getDimensions(this.el),
                         a = e.chart.width.toString().split(/[0-9]+/g).pop();
                     if ("%" === a ? u.default.isNumber(i[0]) && (0 === i[0].width && (i = u.default.getDimensions(this.el.parentNode)), t.svgWidth = i[0] * parseInt(e.chart.width) / 100) : "px" !== a && "" !== a || (t.svgWidth = parseInt(e.chart.width)), "auto" !== t.svgHeight && "" !== t.svgHeight)
                         if ("%" === e.chart.height.toString().split(/[0-9]+/g).pop()) {
                             var s = u.default.getDimensions(this.el.parentNode);
                             t.svgHeight = s[1] * parseInt(e.chart.height) / 100
                         } else t.svgHeight = parseInt(e.chart.height);
                     else t.axisCharts ? t.svgHeight = t.svgWidth / 1.61 : t.svgHeight = t.svgWidth;
                     r.default.setAttrs(t.dom.Paper.node, {
                         width: t.svgWidth,
                         height: t.svgHeight
                     });
                     var n = e.chart.sparkline.enabled ? 0 : t.axisCharts ? 14 : 5;
                     t.dom.Paper.node.parentNode.parentNode.style.minHeight = t.svgHeight + n + "px", t.dom.elWrap.style.width = t.svgWidth + "px", t.dom.elWrap.style.height = t.svgHeight + "px"
                 }
             }, {
                 key: "shiftGraphPosition",
                 value: function () {
                     var t = this.w.globals,
                         e = t.translateY,
                         i = {
                             transform: "translate(" + t.translateX + ", " + e + ")"
                         };
                     r.default.setAttrs(t.dom.elGraphical.node, i)
                 }
             }, {
                 key: "coreCalculations",
                 value: function () {
                     new o.default(this.ctx).init()
                 }
             }, {
                 key: "resetGlobals",
                 value: function () {
                     var t = this,
                         e = this.w.globals;
                     e.series = [], e.seriesCandleO = [], e.seriesCandleH = [], e.seriesCandleL = [], e.seriesCandleC = [], e.seriesPercent = [], e.seriesX = [], e.seriesZ = [], e.seriesNames = [], e.seriesTotals = [], e.stackedSeriesTotals = [], e.labels = [], e.timelineLabels = [], e.noLabelsProvided = !1, e.timescaleTicks = [], e.resizeTimer = null, e.selectionResizeTimer = null, e.seriesXvalues = t.w.config.series.map(function (t) {
                         return []
                     }), e.seriesYvalues = t.w.config.series.map(function (t) {
                         return []
                     }), e.delayedElements = [], e.pointsArray = [], e.dataLabelsRects = [], e.isXNumeric = !1, e.isDataXYZ = !1, e.maxY = -Number.MAX_VALUE, e.minY = Number.MIN_VALUE, e.minYArr = [], e.maxYArr = [], e.maxX = -Number.MAX_VALUE, e.minX = Number.MAX_VALUE, e.initialmaxX = -Number.MAX_VALUE, e.initialminX = Number.MAX_VALUE, e.maxDate = 0, e.minDate = Number.MAX_VALUE, e.minZ = Number.MAX_VALUE, e.maxZ = -Number.MAX_VALUE, e.yAxisScale = [], e.xAxisScale = null, e.xAxisTicksPositions = [], e.yLabelsCoords = [], e.yTitleCoords = [], e.xRange = 0, e.yRange = [], e.zRange = 0, e.dataPoints = 0
                 }
             }, {
                 key: "isMultipleY",
                 value: function () {
                     if (this.w.config.yaxis.constructor === Array && 1 < this.w.config.yaxis.length) return this.w.config.chart.stacked = !1, this.w.globals.isMultipleYAxis = !0
                 }
             }, {
                 key: "excludeCollapsedSeriesInYAxis",
                 value: function () {
                     var i = this,
                         t = this.w;
                     t.globals.ignoreYAxisIndexes = t.globals.collapsedSeries.map(function (t, e) {
                         if (i.w.globals.isMultipleYAxis) return t.index
                     })
                 }
             }, {
                 key: "isMultiFormat",
                 value: function () {
                     return this.isFormatXY() || this.isFormat2DArray()
                 }
             }, {
                 key: "isFormatXY",
                 value: function () {
                     var t = this.w.config.series.slice(),
                         e = new d.default(this.ctx).getActiveConfigSeriesIndex();
                     if (void 0 !== t[e].data && 0 < t[e].data.length && null !== t[e].data[0] && void 0 !== t[e].data[0].x && null !== t[e].data[0]) return !0
                 }
             }, {
                 key: "isFormat2DArray",
                 value: function () {
                     var t = this.w.config.series.slice(),
                         e = new d.default(this.ctx).getActiveConfigSeriesIndex();
                     if (void 0 !== t[e].data && 0 < t[e].data.length && void 0 !== t[e].data[0] && null !== t[e].data[0] && t[e].data[0].constructor === Array) return !0
                 }
             }, {
                 key: "handleFormat2DArray",
                 value: function (t, e) {
                     for (var i = this.w.config, a = this.w.globals, s = 0; s < t[e].data.length; s++)
                         if (void 0 !== t[e].data[s][1] && (Array.isArray(t[e].data[s][1]) && 4 === t[e].data[s][1].length ? this.twoDSeries.push(t[e].data[s][1][3]) : this.twoDSeries.push(t[e].data[s][1])), "datetime" === i.xaxis.type) {
                             var n = new Date(t[e].data[s][0]);
                             n = new Date(n).getTime(), this.twoDSeriesX.push(n)
                         } else this.twoDSeriesX.push(t[e].data[s][0]);
                     for (var r = 0; r < t[e].data.length; r++) void 0 !== t[e].data[r][2] && (this.threeDSeries.push(t[e].data[r][2]), a.isDataXYZ = !0)
                 }
             }, {
                 key: "handleFormatXY",
                 value: function (t, e) {
                     for (var i = this.w.config, a = this.w.globals, s = this.w.config.series.slice(), n = new c.default(this.ctx), r = 0; r < t[e].data.length; r++) {
                         void 0 !== t[e].data[r].y && (Array.isArray(t[e].data[r].y) && 4 === t[e].data[r].y.length ? this.twoDSeries.push(t[e].data[r].y[3]) : this.twoDSeries.push(t[e].data[r].y));
                         var o = "string" == typeof t[e].data[r].x,
                             l = !!n.isValidDate(t[e].data[r].x.toString());
                         o || l ? o ? "datetime" === i.xaxis.type ? this.twoDSeriesX.push(n.parseDate(t[e].data[r].x)) : (this.fallbackToCategory = !0, this.twoDSeriesX.push(t[e].data[r].x)) : "datetime" === i.xaxis.type ? this.twoDSeriesX.push(n.parseDate(t[e].data[r].x.toString())) : this.twoDSeriesX.push(parseFloat(t[e].data[r].x)) : this.twoDSeriesX.push(t[e].data[r].x)
                     }
                     if (s[e].data[0] && void 0 !== s[e].data[0].z) {
                         for (var h = 0; h < s[e].data.length; h++) this.threeDSeries.push(s[e].data[h].z);
                         a.isDataXYZ = !0
                     }
                 }
             }, {
                 key: "handleCandleStickData",
                 value: function (t, e) {
                     var i = this.w.globals,
                         a = {};
                     return this.isFormat2DArray() ? a = this.handleCandleStickDataFormat("array", t, e) : this.isFormatXY() && (a = this.handleCandleStickDataFormat("xy", t, e)), i.seriesCandleO.push(a.o), i.seriesCandleH.push(a.h), i.seriesCandleL.push(a.l), i.seriesCandleC.push(a.c), a
                 }
             }, {
                 key: "handleCandleStickDataFormat",
                 value: function (t, e, i) {
                     var a = [],
                         s = [],
                         n = [],
                         r = [],
                         o = "Please provide [Open, High, Low and Close] values in valid format. Read more https://apexcharts.com/docs/series/#candlestick";
                     if ("array" === t) {
                         if (4 !== e[i].data[0][1].length) throw new Error(o);
                         for (var l = 0; l < e[i].data.length; l++) a.push(e[i].data[l][1][0]), s.push(e[i].data[l][1][1]), n.push(e[i].data[l][1][2]), r.push(e[i].data[l][1][3])
                     } else if ("xy" === t) {
                         if (4 !== e[i].data[0].y.length) throw new Error(o);
                         for (var h = 0; h < e[i].data.length; h++) a.push(e[i].data[h].y[0]), s.push(e[i].data[h].y[1]), n.push(e[i].data[h].y[2]), r.push(e[i].data[h].y[3])
                     }
                     return {
                         o: a,
                         h: s,
                         l: n,
                         c: r
                     }
                 }
             }, {
                 key: "parseDataAxisCharts",
                 value: function (t, e) {
                     for (var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : this.ctx, a = this.w.config, s = this.w.globals, n = new c.default(i), r = 0; r < e.length; r++) {
                         if (this.twoDSeries = [], this.twoDSeriesX = [], this.threeDSeries = [], void 0 === e[r].data) return void console.error("It is a possibility that you may have not included 'data' property in series.");
                         if (this.isMultiFormat()) this.isFormat2DArray() ? this.handleFormat2DArray(t, r) : this.isFormatXY() && this.handleFormatXY(t, r), "candlestick" !== a.chart.type && "candlestick" !== t[r].type || this.handleCandleStickData(t, r), s.series.push(this.twoDSeries), s.labels.push(this.twoDSeriesX), s.seriesX.push(this.twoDSeriesX), this.fallbackToCategory || (s.isXNumeric = !0);
                         else {
                             if ("datetime" === a.xaxis.type) {
                                 s.isXNumeric = !0;
                                 for (var o = 0 < a.labels.length ? a.labels.slice() : a.xaxis.categories.slice(), l = 0; l < o.length; l++)
                                     if ("string" == typeof o[l]) {
                                         if (!n.isValidDate(o[l])) throw new Error("You have provided invalid Date format. Please provide a valid JavaScript Date");
                                         this.twoDSeriesX.push(n.parseDate(o[l]))
                                     } s.seriesX.push(this.twoDSeriesX)
                             } else if ("numeric" === a.xaxis.type) {
                                 s.isXNumeric = !0;
                                 var h = 0 < a.labels.length ? a.labels.slice() : a.xaxis.categories.slice();
                                 0 < h.length && (this.twoDSeriesX = h, s.seriesX.push(this.twoDSeriesX))
                             }
                             s.labels.push(this.twoDSeriesX), s.series.push(t[r].data)
                         }
                         s.seriesZ.push(this.threeDSeries), void 0 !== t[r].name ? s.seriesNames.push(t[r].name) : s.seriesNames.push("series-" + parseInt(r + 1))
                     }
                     return this.w
                 }
             }, {
                 key: "parseDataNonAxisCharts",
                 value: function (t) {
                     var e = this.w.globals,
                         i = this.w.config;
                     e.series = t.slice(), e.seriesNames = i.labels.slice();
                     for (var a = 0; a < e.series.length; a++) void 0 === e.seriesNames[a] && e.seriesNames.push("series-" + (a + 1));
                     return this.w
                 }
             }, {
                 key: "handleExternalLabelsData",
                 value: function (t) {
                     var e = this.w.config,
                         i = this.w.globals;
                     if (0 < e.xaxis.categories.length) i.labels = e.xaxis.categories;
                     else if (0 < e.labels.length) i.labels = e.labels.slice();
                     else if (this.fallbackToCategory) i.labels = i.labels[0];
                     else {
                         var a = [];
                         if (i.axisCharts) {
                             for (var s = 0; s < i.series[i.maxValsInArrayIndex].length; s++) a.push(s + 1);
                             for (var n = 0; n < t.length; n++) i.seriesX.push(a);
                             i.isXNumeric = !0
                         }
                         if (0 === a.length) {
                             a = [0, 10];
                             for (var r = 0; r < t.length; r++) i.seriesX.push(a)
                         }
                         i.labels = a, i.noLabelsProvided = !0, "category" === e.xaxis.type && (i.isXNumeric = !1)
                     }
                 }
             }, {
                 key: "parseData",
                 value: function (t) {
                     var e = this.w,
                         i = e.config,
                         a = e.globals;
                     this.excludeCollapsedSeriesInYAxis();
                     var s = i.series.slice();
                     if (this.fallbackToCategory = !1, this.resetGlobals(), this.isMultipleY(), a.axisCharts ? this.parseDataAxisCharts(t, s) : this.parseDataNonAxisCharts(t), this.coreUtils.getLargestSeries(), "bar" === i.chart.type && i.chart.stacked) {
                         var n = new d.default(this.ctx);
                         a.series = n.setNullSeriesToZeroValues(a.series)
                     }
                     this.coreUtils.getSeriesTotals(), a.axisCharts && this.coreUtils.getStackedSeriesTotals(), this.coreUtils.getPercentSeries(), (!a.isXNumeric || "numeric" === i.xaxis.type && 0 === i.labels.length && 0 === i.xaxis.categories.length) && this.handleExternalLabelsData(t)
                 }
             }, {
                 key: "xySettings",
                 value: function () {
                     var t = null,
                         e = this.w;
                     if (e.globals.axisCharts) {
                         if ("back" === e.config.xaxis.crosshairs.position) new n.default(this.ctx).drawXCrosshairs();
                         if ("back" === e.config.yaxis[0].crosshairs.position) new n.default(this.ctx).drawYCrosshairs();
                         if (t = this.coreUtils.getCalculatedRatios(), "datetime" === e.config.xaxis.type && void 0 === e.config.xaxis.labels.formatter && isFinite(e.globals.minX) && isFinite(e.globals.maxX)) {
                             var i = new f.default(this.ctx),
                                 a = i.calculateTimeScaleTicks(e.globals.minX, e.globals.maxX);
                             i.recalcDimensionsBasedOnFormat(a)
                         }
                     }
                     return t
                 }
             }, {
                 key: "drawAxis",
                 value: function (t, i) {
                     var a = this.w.globals,
                         e = this.w.config,
                         s = new l.default(this.ctx),
                         n = new h.default(this.ctx);
                     if (a.axisCharts && "radar" !== t) {
                         var r = void 0,
                             o = void 0;
                         "bar" === t && e.plotOptions.bar.horizontal ? (o = n.drawYaxisInversed(0), r = s.drawXaxisInversed(0), a.dom.elGraphical.add(r), a.dom.elGraphical.add(o)) : (r = s.drawXaxis(), a.dom.elGraphical.add(r), e.yaxis.map(function (t, e) {
                             -1 === a.ignoreYAxisIndexes.indexOf(e) && (o = n.drawYaxis(i, e), a.dom.Paper.add(o))
                         }))
                     }
                     e.yaxis.map(function (t, e) {
                         -1 === a.ignoreYAxisIndexes.indexOf(e) && n.yAxisTitleRotate(e, t.opposite)
                     })
                 }
             }, {
                 key: "setupBrushHandler",
                 value: function () {
                     var t = this,
                         n = this.w;
                     if (n.config.chart.brush.enabled && "function" != typeof n.config.chart.events.selection) {
                         var r = ApexCharts.getChartByID(n.config.chart.brush.target);
                         r.w.globals.brushSource = this.ctx;
                         var e = function () {
                             t.ctx._updateOptions({
                                 chart: {
                                     selection: {
                                         xaxis: {
                                             min: r.w.globals.minX,
                                             max: r.w.globals.maxX
                                         }
                                     }
                                 }
                             }, !1, !1)
                         };
                         "function" != typeof r.w.config.chart.events.zoomed && (r.w.config.chart.events.zoomed = function () {
                             e()
                         }), "function" != typeof r.w.config.chart.events.scrolled && (r.w.config.chart.events.scrolled = function () {
                             e()
                         }), n.config.chart.events.selection = function (t, e) {
                             var i = void 0,
                                 a = void 0;
                             n.config.chart.brush.autoScaleYaxis && (i = a = 0, r.w.config.series.forEach(function (t) {
                                 t[1] > a && (a = t[1]), t[1] < i && (i = t[1])
                             }), i *= .95, a *= 1.05);
                             var s = {
                                 min: i,
                                 max: a
                             };
                             r._updateOptions({
                                 xaxis: {
                                     min: e.xaxis.min,
                                     max: e.xaxis.max
                                 },
                                 yaxis: {
                                     min: s.min,
                                     max: s.max
                                 }
                             }, !1, !1)
                         }
                     }
                 }
             }]), i
         }();
         t.exports = g
     }, function (t, e, i) {
         "use strict";
         Object.defineProperty(e, "__esModule", {
             value: !0
         });
         var a = function () {
                 function a(t, e) {
                     for (var i = 0; i < e.length; i++) {
                         var a = e[i];
                         a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                     }
                 }
                 return function (t, e, i) {
                     return e && a(t.prototype, e), i && a(t, i), t
                 }
             }(),
             S = r(i(7)),
             c = r(i(48)),
             A = r(i(0)),
             s = r(i(28)),
             n = r(i(1));

         function r(t) {
             return t && t.__esModule ? t : {
                 default: t
             }
         }
         var o = function () {
             function i(t, e) {
                 ! function (t, e) {
                     if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                 }(this, i), this.ctx = t, this.w = t.w, this.onLegendClick = this.onLegendClick.bind(this), this.onLegendHovered = this.onLegendHovered.bind(this)
             }
             return a(i, [{
                 key: "init",
                 value: function () {
                     var t = this.w,
                         e = t.globals,
                         i = t.config;
                     if ((i.legend.showForSingleSeries && 1 === e.series.length || 1 < e.series.length || !e.axisCharts) && i.legend.show) {
                         for (; e.dom.elLegendWrap.firstChild;) e.dom.elLegendWrap.removeChild(e.dom.elLegendWrap.firstChild);
                         this.drawLegends(), n.default.isIE11() ? document.getElementsByTagName("head")[0].appendChild(this.getLegendStyles()) : this.appendToForeignObject(), "bottom" === i.legend.position || "top" === i.legend.position ? this.legendAlignHorizontal() : "right" !== i.legend.position && "left" !== i.legend.position || this.legendAlignVertical()
                     }
                 }
             }, {
                 key: "appendToForeignObject",
                 value: function () {
                     var t = this.w.globals,
                         e = document.createElementNS(t.svgNS, "foreignObject");
                     e.setAttribute("x", 0), e.setAttribute("y", 0), e.setAttribute("width", t.svgWidth), e.setAttribute("height", t.svgHeight), t.dom.elLegendWrap.setAttribute("xmlns", "http://www.w3.org/1999/xhtml"), e.appendChild(t.dom.elLegendWrap), e.appendChild(this.getLegendStyles()), t.dom.Paper.node.insertBefore(e, t.dom.elGraphical.node)
                 }
             }, {
                 key: "drawLegends",
                 value: function () {
                     var t = this.w,
                         e = t.config.legend.fontFamily,
                         i = t.globals.seriesNames,
                         a = t.globals.colors.slice();
                     if ("heatmap" === t.config.chart.type) {
                         var s = t.config.plotOptions.heatmap.colorScale.ranges;
                         i = s.map(function (t) {
                             return t.name ? t.name : t.from + " - " + t.to
                         }), a = s.map(function (t) {
                             return t.color
                         })
                     }
                     for (var n = t.globals.legendFormatter, r = 0; r <= i.length - 1; r++) {
                         var o = n(i[r], {
                                 seriesIndex: r,
                                 w: t
                             }),
                             l = !1;
                         if (0 < t.globals.collapsedSeries.length)
                             for (var h = 0; h < t.globals.collapsedSeries.length; h++) t.globals.collapsedSeries[h].index === r && (l = !0);
                         var c = document.createElement("span");
                         c.classList.add("apexcharts-legend-marker");
                         var u = t.config.legend.markers.offsetX,
                             d = t.config.legend.markers.offsetY,
                             f = t.config.legend.markers.height,
                             p = t.config.legend.markers.width,
                             g = t.config.legend.markers.strokeWidth,
                             x = t.config.legend.markers.strokeColor,
                             v = t.config.legend.markers.radius,
                             b = c.style;
                         b.background = a[r], b.color = a[r], b.height = Array.isArray(f) ? parseFloat(f[r]) + "px" : parseFloat(f) + "px", b.width = Array.isArray(p) ? parseFloat(p[r]) + "px" : parseFloat(p) + "px", b.left = Array.isArray(u) ? u[r] : u, b.top = Array.isArray(d) ? d[r] : d, b.borderWidth = Array.isArray(g) ? g[r] : g, b.borderColor = Array.isArray(x) ? x[r] : x, b.borderRadius = Array.isArray(v) ? parseFloat(v[r]) + "px" : parseFloat(v) + "px", t.config.legend.markers.customHTML && (Array.isArray(t.config.legend.markers.customHTML) ? c.innerHTML = t.config.legend.markers.customHTML[r]() : c.innerHTML = t.config.legend.markers.customHTML()), A.default.setAttrs(c, {
                             rel: r + 1,
                             "data:collapsed": l
                         }), l && c.classList.add("inactive-legend");
                         var m = document.createElement("div"),
                             y = document.createElement("span");
                         y.classList.add("apexcharts-legend-text"), y.innerHTML = o;
                         var w = t.config.legend.labels.useSeriesColors ? t.globals.colors[r] : t.config.legend.labels.colors;
                         if (w || (w = t.config.chart.foreColor), y.style.color = w, y.style.fontSize = parseFloat(t.config.legend.labels.fontSize) + "px", y.style.fontFamily = e || t.config.chart.fontFamily, A.default.setAttrs(y, {
                                 rel: r + 1,
                                 "data:collapsed": l
                             }), m.appendChild(c), m.appendChild(y), !t.config.legend.showForZeroSeries) {
                             var k = new S.default(this.ctx);
                             0 === k.getSeriesTotalByIndex(r) && k.seriesHaveSameValues(r) && -1 === t.globals.collapsedSeriesIndices.indexOf(r) && m.classList.add("apexcharts-hidden-zero-series")
                         }
                         t.globals.dom.elLegendWrap.appendChild(m), t.globals.dom.elLegendWrap.classList.add(t.config.legend.horizontalAlign), t.globals.dom.elLegendWrap.classList.add("position-" + t.config.legend.position), m.classList.add("apexcharts-legend-series"), m.style.margin = t.config.legend.itemMargin.horizontal + "px " + t.config.legend.itemMargin.vertical + "px", t.globals.dom.elLegendWrap.style.width = t.config.legend.width ? t.config.legend.width + "px" : "", t.globals.dom.elLegendWrap.style.height = t.config.legend.height ? t.config.legend.height + "px" : "", A.default.setAttrs(m, {
                             rel: r + 1,
                             "data:collapsed": l
                         }), l && m.classList.add("inactiv`e-legend"), t.config.legend.onItemClick.toggleDataSeries || m.classList.add("no-click")
                     }
                     "heatmap" !== t.config.chart.type && t.config.legend.onItemClick.toggleDataSeries && t.globals.dom.elWrap.addEventListener("click", this.onLegendClick, !0), t.config.legend.onItemHover.highlightDataSeries && (t.globals.dom.elWrap.addEventListener("mousemove", this.onLegendHovered, !0), t.globals.dom.elWrap.addEventListener("mouseout", this.onLegendHovered, !0))
                 }
             }, {
                 key: "getLegendBBox",
                 value: function () {
                     var t = this.w.globals.dom.baseEl.querySelector(".apexcharts-legend").getBoundingClientRect(),
                         e = t.width;
                     return {
                         clwh: t.height,
                         clww: e
                     }
                 }
             }, {
                 key: "setLegendWrapXY",
                 value: function (t, e) {
                     var i = this.w,
                         a = i.globals.dom.baseEl.querySelector(".apexcharts-legend"),
                         s = a.getBoundingClientRect(),
                         n = 0,
                         r = 0;
                     if ("bottom" === i.config.legend.position) r += i.globals.svgHeight - s.height / 2;
                     else if ("top" === i.config.legend.position) {
                         var o = new c.default(this.ctx),
                             l = o.getTitleSubtitleCoords("title").height,
                             h = o.getTitleSubtitleCoords("subtitle").height;
                         r = r + (0 < l ? l - 10 : 0) + (0 < h ? h - 10 : 0)
                     }
                     a.style.position = "absolute", n = n + t + i.config.legend.offsetX, r = r + e + i.config.legend.offsetY, a.style.left = n + "px", a.style.top = r + "px", "bottom" === i.config.legend.position ? (a.style.top = "auto", a.style.bottom = 10 + i.config.legend.offsetY + "px") : "right" === i.config.legend.position && (a.style.left = "auto", a.style.right = 25 + i.config.legend.offsetX + "px"), a.style.width && (a.style.width = parseInt(i.config.legend.width) + "px"), a.style.height && (a.style.height = parseInt(i.config.legend.height) + "px")
                 }
             }, {
                 key: "legendAlignHorizontal",
                 value: function () {
                     var t = this.w;
                     t.globals.dom.baseEl.querySelector(".apexcharts-legend").style.right = 0;
                     var e = this.getLegendBBox(),
                         i = new c.default(this.ctx),
                         a = i.getTitleSubtitleCoords("title"),
                         s = i.getTitleSubtitleCoords("subtitle"),
                         n = 0;
                     "bottom" === t.config.legend.position ? n = -e.clwh / 1.8 : "top" === t.config.legend.position && (n = a.height + s.height + t.config.title.margin + t.config.subtitle.margin - 15), this.setLegendWrapXY(20, n)
                 }
             }, {
                 key: "legendAlignVertical",
                 value: function () {
                     var t = this.w,
                         e = this.getLegendBBox(),
                         i = 0;
                     "left" === t.config.legend.position && (i = 20), "right" === t.config.legend.position && (i = t.globals.svgWidth - e.clww - 10), this.setLegendWrapXY(i, 20)
                 }
             }, {
                 key: "onLegendHovered",
                 value: function (t) {
                     var e = this.w,
                         i = t.target.classList.contains("apexcharts-legend-text") || t.target.classList.contains("apexcharts-legend-marker");
                     if ("heatmap" !== e.config.chart.type) !t.target.classList.contains("inactive-legend") && i && new s.default(this.ctx).toggleSeriesOnHover(t, t.target);
                     else if (i) {
                         var a = parseInt(t.target.getAttribute("rel")) - 1;
                         this.ctx.fireEvent("legendHover", [this.ctx, a, this.w]), new s.default(this.ctx).highlightRangeInSeries(t, t.target)
                     }
                 }
             }, {
                 key: "onLegendClick",
                 value: function (t) {
                     if (t.target.classList.contains("apexcharts-legend-text") || t.target.classList.contains("apexcharts-legend-marker")) {
                         var e = parseInt(t.target.getAttribute("rel")) - 1,
                             i = "true" === t.target.getAttribute("data:collapsed"),
                             a = this.w.config.chart.events.legendClick;
                         "function" == typeof a && a(this.ctx, e, this.w), this.ctx.fireEvent("legendClick", [this.ctx, e, this.w]), this.toggleDataSeries(e, i)
                     }
                 }
             }, {
                 key: "getLegendStyles",
                 value: function () {
                     var t = document.createElement("style");
                     t.setAttribute("type", "text/css");
                     var e = document.createTextNode("\n    \n      .apexcharts-legend {\n        display: flex;\n        overflow: auto;\n        padding: 0 10px;\n      }\n\n      .apexcharts-legend.position-bottom, .apexcharts-legend.position-top {\n        flex-wrap: wrap\n      }\n      .apexcharts-legend.position-right, .apexcharts-legend.position-left {\n        flex-direction: column;\n        bottom: 0;\n      }\n\n      .apexcharts-legend.position-bottom.left, .apexcharts-legend.position-top.left, .apexcharts-legend.position-right, .apexcharts-legend.position-left {\n        justify-content: flex-start;\n      }\n\n      .apexcharts-legend.position-bottom.center, .apexcharts-legend.position-top.center {\n        justify-content: center;  \n      }\n\n      .apexcharts-legend.position-bottom.right, .apexcharts-legend.position-top.right {\n        justify-content: flex-end;\n      }\n\n      .apexcharts-legend-series {\n        cursor: pointer;\n      }\n\n      .apexcharts-legend.position-bottom .apexcharts-legend-series, .apexcharts-legend.position-top .apexcharts-legend-series{\n        display: flex;\n        align-items: center;\n      }\n\n      .apexcharts-legend-text {\n        position: relative;\n        font-size: 14px;\n      }\n\n      .apexcharts-legend-marker {\n        position: relative;\n        display: inline-block;\n        cursor: pointer;\n        margin-right: 3px;\n      }\n      \n      .apexcharts-legend.right .apexcharts-legend-series, .apexcharts-legend.left .apexcharts-legend-series{\n        display: inline-block;\n      }\n\n      .apexcharts-legend-series.no-click {\n        cursor: auto;\n      }\n\n      .apexcharts-legend .apexcharts-hidden-zero-series {\n        display: none !important;\n      }\n\n      .inactive-legend {\n        opacity: 0.45;\n      }");
                     return t.appendChild(e), t
                 }
             }, {
                 key: "resetToggleDataSeries",
                 value: function () {
                     var t = this.w,
                         e = [];
                     if (t.globals.axisCharts ? t.globals.dom.baseEl.querySelectorAll(".apexcharts-series[data\\:realIndex]").forEach(function (t) {
                             e.push(parseInt(t.getAttribute("data:realIndex")))
                         }) : t.globals.dom.baseEl.querySelectorAll(".apexcharts-series[rel]").forEach(function (t) {
                             e.push(parseInt(t.getAttribute("rel")) - 1)
                         }), e.sort(), 0 < t.globals.collapsedSeries.length) {
                         for (var i = t.globals.risingSeries.slice(), a = t.config.series.slice(), s = 0; s < t.globals.collapsedSeries.length; s++) {
                             var n = e.indexOf(t.globals.collapsedSeries[s].index); - 1 !== n && (t.globals.axisCharts ? a[n].data = t.globals.collapsedSeries.slice()[s].data.slice() : a[n] = t.globals.collapsedSeries.slice()[s].data, i.push(n))
                         }
                         t.globals.collapsedSeries = [], t.globals.collapsedSeriesIndices = [], t.globals.risingSeries = i, t.config.series = a, this.ctx._updateSeries(t.config.series, t.config.chart.animations.dynamicAnimation.enabled)
                     }
                 }
             }, {
                 key: "toggleDataSeries",
                 value: function (t, e) {
                     var i = this.w;
                     if (i.globals.axisCharts || "radialBar" === i.config.chart.type) {
                         i.globals.resized = !0;
                         var a = null,
                             s = null;
                         if (i.globals.risingSeries = [], s = i.globals.axisCharts ? (a = i.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='" + t + "']"), parseInt(a.getAttribute("data:realIndex"))) : (a = i.globals.dom.baseEl.querySelector(".apexcharts-series[rel='" + (t + 1) + "']"), parseInt(a.getAttribute("rel")) - 1), e) {
                             if (0 < i.globals.collapsedSeries.length)
                                 for (var n = 0; n < i.globals.collapsedSeries.length; n++) i.globals.collapsedSeries[n].index === s && (i.globals.axisCharts ? i.config.series[s].data = i.globals.collapsedSeries[n].data.slice() : i.config.series[s] = i.globals.collapsedSeries[n].data, i.globals.collapsedSeries.splice(n, 1), i.globals.collapsedSeriesIndices.splice(n, 1), i.globals.risingSeries.push(s), this.ctx._updateSeries(i.config.series, i.config.chart.animations.dynamicAnimation.enabled))
                         } else {
                             if (i.globals.axisCharts) {
                                 i.globals.collapsedSeries.push({
                                     index: s,
                                     data: i.config.series[s].data.slice(),
                                     type: a.parentNode.className.baseVal.split("-")[1]
                                 }), i.globals.collapsedSeriesIndices.push(s);
                                 var r = i.globals.risingSeries.indexOf(s);
                                 i.globals.risingSeries.splice(r, 1), i.config.series[s].data = []
                             } else i.globals.collapsedSeries.push({
                                 index: s,
                                 data: i.config.series[s]
                             }), i.globals.collapsedSeriesIndices.push(s), i.config.series[s] = 0;
                             for (var o = a.childNodes, l = 0; l < o.length; l++) o[l].classList.contains("apexcharts-series-markers-wrap") && (o[l].classList.contains("apexcharts-hide") ? o[l].classList.remove("apexcharts-hide") : o[l].classList.add("apexcharts-hide"));
                             i.globals.allSeriesCollapsed = i.globals.collapsedSeries.length === i.globals.series.length, this.ctx._updateSeries(i.config.series, i.config.chart.animations.dynamicAnimation.enabled)
                         }
                     } else {
                         i.globals.dom.Paper.select(" .apexcharts-series[rel='" + (t + 1) + "'] path").fire("click")
                     }
                 }
             }]), i
         }();
         e.default = o
     }, function (t, e, i) {
         "use strict";
         var a = function () {
                 function a(t, e) {
                     for (var i = 0; i < e.length; i++) {
                         var a = e[i];
                         a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                     }
                 }
                 return function (t, e, i) {
                     return e && a(t.prototype, e), i && a(t, i), t
                 }
             }(),
             l = s(i(51)),
             h = s(i(1)),
             c = s(i(7));

         function s(t) {
             return t && t.__esModule ? t : {
                 default: t
             }
         }
         var n = function () {
             function e(t) {
                 ! function (t, e) {
                     if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                 }(this, e), this.ctx = t, this.w = t.w
             }
             return a(e, [{
                 key: "checkResponsiveConfig",
                 value: function (t) {
                     var a = this,
                         s = this.w,
                         n = s.config;
                     if (0 !== n.responsive.length) {
                         var r = {},
                             o = new l.default(r),
                             e = function () {
                                 for (var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, e = 0; e < n.responsive.length; e++) {
                                     if ((0 < window.innerWidth ? window.innerWidth : screen.width) < n.responsive[e].breakpoint) {
                                         r = h.default.extend(o, t), r = c.default.extendArrayProps(r, n.responsive[e].options), r = h.default.extend(s.config, r), a.overrideResponsiveOptions(r);
                                         break
                                     }
                                     var i = c.default.extendArrayProps(o, s.globals.initialConfig);
                                     r = h.default.extend(s.config, i), a.overrideResponsiveOptions(r)
                                 }
                                 return r
                             };
                         if (t) {
                             var i = c.default.extendArrayProps(o, t);
                             i = h.default.extend(s.config, i), i = e(i = h.default.extend(i, t)), this.overrideResponsiveOptions(i)
                         } else e({})
                     }
                 }
             }, {
                 key: "overrideResponsiveOptions",
                 value: function (t) {
                     var e = new l.default(t).init();
                     this.w.config = e
                 }
             }]), e
         }();
         t.exports = n
     }, function (t, e, i) {
         "use strict";
         Object.defineProperty(e, "__esModule", {
             value: !0
         }), e.default = void 0;
         var a, s = function () {
                 function a(t, e) {
                     for (var i = 0; i < e.length; i++) {
                         var a = e[i];
                         a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                     }
                 }
                 return function (t, e, i) {
                     return e && a(t.prototype, e), i && a(t, i), t
                 }
             }(),
             n = i(1),
             g = (a = n) && a.__esModule ? a : {
                 default: a
             };
         var r = function () {
             function e(t) {
                 ! function (t, e) {
                     if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                 }(this, e), this.ctx = t, this.w = t.w
             }
             return s(e, [{
                 key: "niceScale",
                 value: function (t, e) {
                     var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 10;
                     if (t === Number.MIN_VALUE && 0 === e || !g.default.isNumber(t) && !g.default.isNumber(e)) return t = 0, i = e = 1, this.linearScale(t, e, i);
                     e < t ? (console.warn("yaxis.min cannot be greater than yaxis.max"), e = t + .1) : t === e && (t = 0 === t ? 0 : t - .1, e = 0 === e ? 2 : e + .1);
                     var a = [],
                         s = i + 1;
                     s < 2 ? s = 2 : 2 < s && (s -= 2);
                     for (var n = (e - t) / s, r = Math.floor(g.default.log10(n)), o = Math.pow(10, r), l = parseInt(n / o) * o, h = l * Math.floor(t / l), c = l * Math.ceil(e / l), u = h; a.push(u), !(c < (u += l)););
                     if (void 0 === this.w.config.yaxis[0].max && void 0 === this.w.config.yaxis[0].min) return {
                         result: a,
                         niceMin: a[0],
                         niceMax: a[a.length - 1]
                     };
                     var d = t;
                     (a = []).push(d);
                     for (var f = Math.abs(e - t) / i, p = 0; p <= i - 1; p++) d += f, a.push(d);
                     return {
                         result: a,
                         niceMin: a[0],
                         niceMax: a[a.length - 1]
                     }
                 }
             }, {
                 key: "linearScale",
                 value: function (t, e) {
                     var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 10,
                         a = Math.abs(e - t) / i;
                     i === Number.MAX_VALUE && (i = 10, a = 1);
                     for (var s = [], n = t; 0 <= i;) s.push(n), n += a, i -= 1;
                     return {
                         result: s,
                         niceMin: s[0],
                         niceMax: s[s.length - 1]
                     }
                 }
             }, {
                 key: "logarithmicScale",
                 value: function (t, s, n, e) {
                     var i = this.w;
                     (s < 0 || s === Number.MIN_VALUE) && (s = .01);
                     for (var r = i.config.yaxis[t].logBase, o = Math.log(s) / Math.log(r), l = Math.log(n) / Math.log(r), a = Math.abs(n - s) / e, h = [], c = s; 0 <= e;) h.push(c), c += a, e -= 1;
                     var u = h.map(function (t, e) {
                         t <= 0 && (t = .01);
                         var i = (l - o) / (n - s),
                             a = Math.pow(r, o + i * (t - o));
                         return Math.round(a / g.default.roundToBase(a, r)) * g.default.roundToBase(a, r)
                     });
                     return 0 === u[0] && (u[0] = 1), {
                         result: u,
                         niceMin: u[0],
                         niceMax: u[u.length - 1]
                     }
                 }
             }, {
                 key: "setYScaleForIndex",
                 value: function (t, e, i) {
                     var a = this.w.globals,
                         s = this.w.config,
                         n = s.yaxis[t];
                     void 0 === a.yAxisScale[t] && (a.yAxisScale[t] = []), s.yaxis[t].logarithmic ? (a.allSeriesCollapsed = !1, a.yAxisScale[t] = this.logarithmicScale(t, e, i, n.tickAmount ? n.tickAmount : Math.floor(Math.log10(i)))) : i !== -Number.MAX_VALUE && g.default.isNumber(i) ? (a.allSeriesCollapsed = !1, a.yAxisScale[t] = this.niceScale(e, i, n.tickAmount ? n.tickAmount : 6)) : a.yAxisScale[t] = this.linearScale(0, 5, 5)
                 }
             }, {
                 key: "setMultipleYScales",
                 value: function () {
                     var n = this,
                         r = this.w.globals,
                         o = this.w.config,
                         l = r.minYArr.concat([]),
                         h = r.maxYArr.concat([]),
                         c = [];
                     o.yaxis.forEach(function (i, a) {
                         var s = a;
                         o.series.forEach(function (t, e) {
                             t.name === i.seriesName && -1 === r.collapsedSeriesIndices.indexOf(e) && (a !== (s = e) ? c.push({
                                 index: e,
                                 similarIndex: a,
                                 alreadyExists: !0
                             }) : c.push({
                                 index: e
                             }))
                         });
                         var t = l[s],
                             e = h[s];
                         n.setYScaleForIndex(a, t, e)
                     }), this.sameScaleInMultipleAxes(l, h, c)
                 }
             }, {
                 key: "sameScaleInMultipleAxes",
                 value: function (t, s, e) {
                     var r = this,
                         o = this.w.config,
                         l = [];
                     e.forEach(function (t) {
                         t.alreadyExists && (void 0 === l[t.index] && (l[t.index] = []), l[t.index].push(t.index), l[t.index].push(t.similarIndex))
                     }), l.forEach(function (s, n) {
                         l.forEach(function (t, e) {
                             var i, a;
                             n !== e && 0 < (i = s, a = t, i.filter(function (t) {
                                 return -1 !== a.indexOf(t)
                             })).length && (l[n] = l[n].concat(l[e]))
                         })
                     });
                     var i = l.map(function (i) {
                         return i.filter(function (t, e) {
                             return i.indexOf(t) === e
                         })
                     }).map(function (t) {
                         return t.sort()
                     });
                     l = l.filter(function (t) {
                         return !!t
                     });
                     var n = i.slice(),
                         a = n.map(function (t) {
                             return JSON.stringify(t)
                         });
                     n = n.filter(function (t, e) {
                         return a.indexOf(JSON.stringify(t)) === e
                     });
                     var h = [],
                         c = [];
                     t.forEach(function (i, a) {
                         n.forEach(function (t, e) {
                             t.includes(a) && (void 0 === h[e] && (h[e] = [], c[e] = []), h[e].push({
                                 key: a,
                                 value: i
                             }), c[e].push({
                                 key: a,
                                 value: s[a]
                             }))
                         })
                     });
                     var u = Array(n.length).fill().map(function (t, e) {
                             return Number.MAX_SAFE_INTEGER
                         }),
                         d = Array(n.length).fill().map(function (t, e) {
                             return Number.MIN_SAFE_INTEGER
                         });
                     h.forEach(function (t, i) {
                         t.forEach(function (t, e) {
                             u[i] = Math.min(t.value, u[i])
                         })
                     }), c.forEach(function (t, i) {
                         t.forEach(function (t, e) {
                             d[i] = Math.max(t.value, d[i])
                         })
                     }), t.forEach(function (t, n) {
                         c.forEach(function (i, t) {
                             var a = u[t],
                                 s = d[t];
                             i.forEach(function (t, e) {
                                 i[e].key === n && (void 0 !== o.yaxis[n].min && (a = o.yaxis[n].min), void 0 !== o.yaxis[n].max && (s = o.yaxis[n].max), r.setYScaleForIndex(n, a, s))
                             })
                         })
                     })
                 }
             }]), e
         }();
         e.default = r
     }, function (t, e, i) {
         "use strict";
         var a, s = function () {
                 function a(t, e) {
                     for (var i = 0; i < e.length; i++) {
                         var a = e[i];
                         a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                     }
                 }
                 return function (t, e, i) {
                     return e && a(t.prototype, e), i && a(t, i), t
                 }
             }(),
             n = i(1),
             u = (a = n) && a.__esModule ? a : {
                 default: a
             };
         var r = function () {
             function e(t) {
                 ! function (t, e) {
                     if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                 }(this, e), this.ctx = t, this.w = t.w, this.colors = []
             }
             return s(e, [{
                 key: "init",
                 value: function () {
                     this.setDefaultColors()
                 }
             }, {
                 key: "setDefaultColors",
                 value: function () {
                     var t = this.w,
                         e = new u.default;
                     if (void 0 === t.config.colors ? t.globals.colors = this.predefined() : t.globals.colors = t.config.colors, t.config.theme.monochrome.enabled) {
                         var i = [],
                             a = t.globals.series.length;
                         t.config.plotOptions.bar.distributed && "bar" === t.config.chart.type && (a = t.globals.series[0].length * t.globals.series.length);
                         for (var s = t.config.theme.monochrome.color, n = 1 / (a / t.config.theme.monochrome.shadeIntensity), r = t.config.theme.monochrome.shadeTo, o = 0, l = 0; l < a; l++) {
                             var h = void 0;
                             h = "dark" === r ? e.shadeColor(-1 * o, s) : e.shadeColor(o, s), o += n, i.push(h)
                         }
                         t.globals.colors = i.slice()
                     }
                     var c = t.globals.colors.slice();
                     this.pushExtraColors(t.globals.colors), void 0 === t.config.stroke.colors ? t.globals.stroke.colors = c : t.globals.stroke.colors = t.config.stroke.colors, this.pushExtraColors(t.globals.stroke.colors), void 0 === t.config.fill.colors ? t.globals.fill.colors = c : t.globals.fill.colors = t.config.fill.colors, this.pushExtraColors(t.globals.fill.colors), void 0 === t.config.dataLabels.style.colors ? t.globals.dataLabels.style.colors = c : t.globals.dataLabels.style.colors = t.config.dataLabels.style.colors, this.pushExtraColors(t.globals.dataLabels.style.colors), void 0 === t.config.plotOptions.radar.polygons.fill.colors ? t.globals.radarPolygons.fill.colors = ["#fff"] : t.globals.radarPolygons.fill.colors = t.config.plotOptions.radar.polygons.fill.colors, this.pushExtraColors(t.globals.radarPolygons.fill.colors, 20), void 0 === t.config.markers.colors ? t.globals.markers.colors = c : t.globals.markers.colors = t.config.markers.colors, this.pushExtraColors(t.globals.markers.colors)
                 }
             }, {
                 key: "pushExtraColors",
                 value: function (t, e) {
                     var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                         a = this.w,
                         s = e || a.globals.series.length;
                     if ((i = null === i && ("bar" === a.config.chart.type && a.config.plotOptions.bar.distributed || "heatmap" === a.config.chart.type && a.config.plotOptions.heatmap.colorScale.inverse)) && (s = a.globals.series[0].length * a.globals.series.length), t.length < s)
                         for (var n = s - t.length, r = 0; r < n; r++) t.push(t[r])
                 }
             }, {
                 key: "predefined",
                 value: function () {
                     switch (this.w.config.theme.palette) {
                         case "palette1":
                             this.colors = ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"];
                             break;
                         case "palette2":
                             this.colors = ["#3f51b5", "#03a9f4", "#4caf50", "#f9ce1d", "#FF9800"];
                             break;
                         case "palette3":
                             this.colors = ["#33b2df", "#546E7A", "#d4526e", "#13d8aa", "#A5978B"];
                             break;
                         case "palette4":
                             this.colors = ["#546E7A", "#4ecdc4", "#c7f464", "#81D4FA", "#fd6a6a"];
                             break;
                         case "palette5":
                             this.colors = ["#2b908f", "#f9a3a4", "#90ee7e", "#fa4443", "#69d2e7"];
                             break;
                         case "palette6":
                             this.colors = ["#449DD1", "#F86624", "#EA3546", "#662E9B", "#C5D86D"];
                             break;
                         case "palette7":
                             this.colors = ["#D7263D", "#1B998B", "#2E294E", "#F46036", "#E2C044"];
                             break;
                         case "palette8":
                             this.colors = ["#662E9B", "#F86624", "#F9C80E", "#EA3546", "#43BCCD"];
                             break;
                         case "palette9":
                             this.colors = ["#5C4742", "#A5978B", "#8D5B4C", "#5A2A27", "#C4BBAF"];
                             break;
                         case "palette10":
                             this.colors = ["#A300D6", "#7D02EB", "#5653FE", "#2983FF", "#00B1F2"];
                             break;
                         default:
                             this.colors = ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"]
                     }
                     return this.colors
                 }
             }]), e
         }();
         t.exports = r
     }, function (t, e, i) {
         "use strict";
         Object.defineProperty(e, "__esModule", {
             value: !0
         }), e.default = void 0;
         var a, s = function () {
                 function a(t, e) {
                     for (var i = 0; i < e.length; i++) {
                         var a = e[i];
                         a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                     }
                 }
                 return function (t, e, i) {
                     return e && a(t.prototype, e), i && a(t, i), t
                 }
             }(),
             n = i(0),
             o = (a = n) && a.__esModule ? a : {
                 default: a
             };
         var r = function () {
             function e(t) {
                 ! function (t, e) {
                     if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                 }(this, e), this.ctx = t, this.w = t.w
             }
             return s(e, [{
                 key: "draw",
                 value: function () {
                     this.drawTitleSubtitle("title"), this.drawTitleSubtitle("subtitle")
                 }
             }, {
                 key: "drawTitleSubtitle",
                 value: function (t) {
                     var e = this.w,
                         i = "title" === t ? e.config.title : e.config.subtitle,
                         a = e.globals.svgWidth / 2,
                         s = i.offsetY,
                         n = "middle";
                     if ("left" === i.align ? (a = 10, n = "start") : "right" === i.align && (a = e.globals.svgWidth - 10, n = "end"), a += i.offsetX, s = s + parseInt(i.style.fontSize) + 2, void 0 !== i.text) {
                         var r = new o.default(this.ctx).drawText({
                             x: a,
                             y: s,
                             text: i.text,
                             textAnchor: n,
                             fontSize: i.style.fontSize,
                             fontFamily: i.style.fontFamily,
                             foreColor: i.style.color,
                             opacity: 1
                         });
                         r.node.setAttribute("class", "apexcharts-" + t + "-text"), e.globals.dom.Paper.add(r)
                     }
                 }
             }]), e
         }();
         e.default = r
     }, function (t, e, i) {
         "use strict";
         var a = function () {
                 function a(t, e) {
                     for (var i = 0; i < e.length; i++) {
                         var a = e[i];
                         a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                     }
                 }
                 return function (t, e, i) {
                     return e && a(t.prototype, e), i && a(t, i), t
                 }
             }(),
             u = n(i(0)),
             b = n(i(1)),
             s = n(i(80));

         function n(t) {
             return t && t.__esModule ? t : {
                 default: t
             }
         }
         var r = function (t) {
             function i(t) {
                 ! function (t, e) {
                     if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                 }(this, i);
                 var e = function (t, e) {
                     if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                     return !e || "object" != typeof e && "function" != typeof e ? t : e
                 }(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, t));
                 return e.ctx = t, e.w = t.w, e.dragged = !1, e.graphics = new u.default(e.ctx), e.eventList = ["mousedown", "mousemove", "touchstart", "touchmove", "mouseup", "touchend"], e.clientX = 0, e.clientY = 0, e.startX = 0, e.endX = 0, e.dragX = 0, e.startY = 0, e.endY = 0, e.dragY = 0, e
             }
             return function (t, e) {
                 if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                 t.prototype = Object.create(e && e.prototype, {
                     constructor: {
                         value: t,
                         enumerable: !1,
                         writable: !0,
                         configurable: !0
                     }
                 }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
             }(i, s.default), a(i, [{
                 key: "init",
                 value: function (t) {
                     var e = t.xyRatios,
                         i = this.w;
                     this.xyRatios = e, this.zoomRect = this.graphics.drawRect(0, 0, 0, 0), this.selectionRect = this.graphics.drawRect(0, 0, 0, 0), this.gridRect = i.globals.dom.baseEl.querySelector(".apexcharts-grid"), this.zoomRect.node.classList.add("apexcharts-zoom-rect"), this.selectionRect.node.classList.add("apexcharts-selection-rect"), i.globals.dom.elGraphical.add(this.zoomRect), i.globals.dom.elGraphical.add(this.selectionRect), "x" === i.config.chart.selection.type ? this.slDraggableRect = this.selectionRect.draggable({
                         minX: 0,
                         minY: 0,
                         maxX: i.globals.gridWidth,
                         maxY: i.globals.gridHeight
                     }).on("dragmove", this.selectionDragging.bind(this, "dragging")) : "y" === i.config.chart.selection.type ? this.slDraggableRect = this.selectionRect.draggable({
                         minX: 0,
                         maxX: i.globals.gridWidth
                     }).on("dragmove", this.selectionDragging.bind(this, "dragging")) : this.slDraggableRect = this.selectionRect.draggable().on("dragmove", this.selectionDragging.bind(this, "dragging")), this.preselectedSelection(), this.hoverArea = i.globals.dom.baseEl.querySelector(i.globals.chartClass), this.hoverArea.classList.add("zoomable");
                     var a = !0,
                         s = !1,
                         n = void 0;
                     try {
                         for (var r, o = this.eventList[Symbol.iterator](); !(a = (r = o.next()).done); a = !0) {
                             var l = r.value;
                             this.hoverArea.addEventListener(l, this.svgMouseEvents.bind(this, e), {
                                 capture: !1,
                                 passive: !0
                             })
                         }
                     } catch (t) {
                         s = !0, n = t
                     } finally {
                         try {
                             !a && o.return && o.return()
                         } finally {
                             if (s) throw n
                         }
                     }
                 }
             }, {
                 key: "destroy",
                 value: function () {
                     var t = !0,
                         e = !1,
                         i = void 0;
                     try {
                         for (var a, s = this.eventList[Symbol.iterator](); !(t = (a = s.next()).done); t = !0) {
                             var n = a.value;
                             this.hoverArea && this.hoverArea.removeEventListener(n, this.svgMouseEvents.bind(this, this.xyRatios), {
                                 capture: !1,
                                 passive: !0
                             })
                         }
                     } catch (t) {
                         e = !0, i = t
                     } finally {
                         try {
                             !t && s.return && s.return()
                         } finally {
                             if (e) throw i
                         }
                     }
                     this.slDraggableRect && (this.slDraggableRect.draggable(!1), this.slDraggableRect.off(), this.selectionRect.off()), this.selectionRect = null, this.zoomRect = null, this.gridRect = null
                 }
             }, {
                 key: "svgMouseEvents",
                 value: function (t, e) {
                     var i = this.w,
                         a = this,
                         s = this.ctx.toolbar,
                         n = i.globals.zoomEnabled ? i.config.chart.zoom.type : i.config.chart.selection.type;
                     if (e.shiftKey ? (this.shiftWasPressed = !0, s.enablePanning()) : this.shiftWasPressed && (s.enableZooming(), this.shiftWasPressed = !1), !(e.target.classList.contains("apexcharts-selection-rect") || e.target.parentNode.classList.contains("apexcharts-toolbar"))) {
                         if (a.clientX = "touchmove" === e.type || "touchstart" === e.type ? e.touches[0].clientX : "touchend" === e.type ? e.changedTouches[0].clientX : e.clientX, a.clientY = "touchmove" === e.type || "touchstart" === e.type ? e.touches[0].clientY : "touchend" === e.type ? e.changedTouches[0].clientY : e.clientY, "mousedown" === e.type && 1 === e.which) {
                             var r = a.gridRect.getBoundingClientRect();
                             a.startX = a.clientX - r.left, a.startY = a.clientY - r.top, a.dragged = !1, a.w.globals.mousedown = !0
                         }
                         if (("mousemove" === e.type && 1 === e.which || "touchmove" === e.type) && (a.dragged = !0, i.globals.panEnabled ? (i.globals.selection = null, a.w.globals.mousedown && a.panDragging({
                                 context: a,
                                 zoomtype: n,
                                 xyRatios: t
                             })) : (a.w.globals.mousedown && i.globals.zoomEnabled || a.w.globals.mousedown && i.globals.selectionEnabled) && (a.selection = a.selectionDrawing({
                                 context: a,
                                 zoomtype: n
                             }))), "mouseup" === e.type || "touchend" === e.type) {
                             var o = a.gridRect.getBoundingClientRect();
                             a.w.globals.mousedown && (a.endX = a.clientX - o.left, a.endY = a.clientY - o.top, a.dragX = Math.abs(a.endX - a.startX), a.dragY = Math.abs(a.endY - a.startY), (i.globals.zoomEnabled || i.globals.selectionEnabled) && a.selectionDrawn({
                                 context: a,
                                 zoomtype: n
                             })), i.globals.zoomEnabled && a.hideSelectionRect(this.selectionRect), a.dragged = !1, a.w.globals.mousedown = !1
                         }
                         this.makeSelectionRectDraggable()
                     }
                 }
             }, {
                 key: "makeSelectionRectDraggable",
                 value: function () {
                     var t = this.w;
                     if (this.selectionRect) {
                         var e = this.selectionRect.node.getBoundingClientRect();
                         0 < e.width && 0 < e.height && this.slDraggableRect.selectize().resize({
                             constraint: {
                                 minX: 0,
                                 minY: 0,
                                 maxX: t.globals.gridWidth,
                                 maxY: t.globals.gridHeight
                             }
                         }).on("resizing", this.selectionDragging.bind(this, "resizing"))
                     }
                 }
             }, {
                 key: "preselectedSelection",
                 value: function () {
                     var t = this.w,
                         e = this.xyRatios;
                     if (!t.globals.zoomEnabled)
                         if (void 0 !== t.globals.selection && null !== t.globals.selection) this.drawSelectionRect(t.globals.selection);
                         else if (void 0 !== t.config.chart.selection.xaxis.min && void 0 !== t.config.chart.selection.xaxis.max) {
                         var i = (t.config.chart.selection.xaxis.min - t.globals.minX) / e.xRatio,
                             a = {
                                 x: i,
                                 y: 0,
                                 width: t.globals.gridWidth - (t.globals.maxX - t.config.chart.selection.xaxis.max) / e.xRatio - i,
                                 height: t.globals.gridHeight,
                                 translateX: 0,
                                 translateY: 0,
                                 selectionEnabled: !0
                             };
                         this.drawSelectionRect(a), this.makeSelectionRectDraggable(), "function" == typeof t.config.chart.events.selection && t.config.chart.events.selection(this.ctx, {
                             xaxis: {
                                 min: t.config.chart.selection.xaxis.min,
                                 max: t.config.chart.selection.xaxis.max
                             },
                             yaxis: {}
                         })
                     }
                 }
             }, {
                 key: "drawSelectionRect",
                 value: function (t) {
                     var e = t.x,
                         i = t.y,
                         a = t.width,
                         s = t.height,
                         n = t.translateX,
                         r = t.translateY,
                         o = this.w,
                         l = this.zoomRect,
                         h = this.selectionRect;
                     if (this.dragged || null !== o.globals.selection) {
                         var c = {
                             transform: "translate(" + n + ", " + r + ")"
                         };
                         o.globals.zoomEnabled && this.dragged && (l.attr({
                             x: e,
                             y: i,
                             width: a,
                             height: s,
                             fill: o.config.chart.zoom.zoomedArea.fill.color,
                             "fill-opacity": o.config.chart.zoom.zoomedArea.fill.opacity,
                             stroke: o.config.chart.zoom.zoomedArea.stroke.color,
                             "stroke-width": o.config.chart.zoom.zoomedArea.stroke.width,
                             "stroke-opacity": o.config.chart.zoom.zoomedArea.stroke.opacity
                         }), u.default.setAttrs(l.node, c)), o.globals.selectionEnabled && (h.attr({
                             x: e,
                             y: i,
                             width: 0 < a ? a : 0,
                             height: 0 < s ? s : 0,
                             fill: o.config.chart.selection.fill.color,
                             "fill-opacity": o.config.chart.selection.fill.opacity,
                             stroke: o.config.chart.selection.stroke.color,
                             "stroke-width": o.config.chart.selection.stroke.width,
                             "stroke-dasharray": o.config.chart.selection.stroke.dashArray,
                             "stroke-opacity": o.config.chart.selection.stroke.opacity
                         }), u.default.setAttrs(h.node, c))
                     }
                 }
             }, {
                 key: "hideSelectionRect",
                 value: function (t) {
                     t && t.attr({
                         x: 0,
                         y: 0,
                         width: 0,
                         height: 0
                     })
                 }
             }, {
                 key: "selectionDrawing",
                 value: function (t) {
                     var e = t.context,
                         i = t.zoomtype,
                         a = this.w,
                         s = e,
                         n = this.gridRect.getBoundingClientRect(),
                         r = s.startX - 1,
                         o = s.startY,
                         l = s.clientX - n.left - r,
                         h = s.clientY - n.top - o,
                         c = 0,
                         u = 0,
                         d = {};
                     return (Math.abs(l + r) > a.globals.gridWidth || s.clientX - n.left < 0) && (s.hideSelectionRect(this.zoomRect), s.dragged = !1, s.w.globals.mousedown = !1), r > s.clientX - n.left && (c = -(l = Math.abs(l))), o > s.clientY - n.top && (u = -(h = Math.abs(h))), d = "x" === i ? {
                         x: r,
                         y: 0,
                         width: l,
                         height: a.globals.gridHeight,
                         translateX: c,
                         translateY: 0
                     } : "y" === i ? {
                         x: 0,
                         y: o,
                         width: a.globals.gridWidth,
                         height: h,
                         translateX: 0,
                         translateY: u
                     } : {
                         x: r,
                         y: o,
                         width: l,
                         height: h,
                         translateX: c,
                         translateY: u
                     }, s.drawSelectionRect(d), d
                 }
             }, {
                 key: "selectionDragging",
                 value: function (t, e) {
                     var r = this,
                         o = this.w,
                         l = this.xyRatios,
                         h = this.selectionRect,
                         i = 0;
                     "resizing" === t && (i = 30), "function" == typeof o.config.chart.events.selection && (clearTimeout(this.w.globals.selectionResizeTimer), this.w.globals.selectionResizeTimer = window.setTimeout(function () {
                         var t = r.gridRect.getBoundingClientRect(),
                             e = h.node.getBoundingClientRect(),
                             i = o.globals.xAxisScale.niceMin + (e.left - t.left) * l.xRatio,
                             a = o.globals.xAxisScale.niceMin + (e.right - t.left) * l.xRatio,
                             s = o.globals.yAxisScale[0].niceMin + (t.bottom - e.bottom) * l.yRatio[0],
                             n = o.globals.yAxisScale[0].niceMax - (e.top - t.top) * l.yRatio[0];
                         o.config.chart.events.selection(r.ctx, {
                             xaxis: {
                                 min: i,
                                 max: a
                             },
                             yaxis: {
                                 min: s,
                                 max: n
                             }
                         })
                     }, i))
                 }
             }, {
                 key: "selectionDrawn",
                 value: function (t) {
                     var e = t.context,
                         i = t.zoomtype,
                         a = this.w,
                         s = e,
                         n = this.xyRatios,
                         r = this.ctx.toolbar;
                     if (s.startX > s.endX) {
                         var o = s.startX;
                         s.startX = s.endX, s.endX = o
                     }
                     if (s.startY > s.endY) {
                         var l = s.startY;
                         s.startY = s.endY, s.endY = l
                     }
                     var h = a.globals.xAxisScale.niceMin + s.startX * n.xRatio,
                         c = a.globals.xAxisScale.niceMin + s.endX * n.xRatio,
                         u = [],
                         d = [];
                     if (a.config.yaxis.forEach(function (t, e) {
                             u.push(Math.floor(a.globals.yAxisScale[e].niceMax - n.yRatio[e] * s.startY)), d.push(Math.floor(a.globals.yAxisScale[e].niceMax - n.yRatio[e] * s.endY))
                         }), s.dragged && (10 < s.dragX || 10 < s.dragY) && h !== c)
                         if (a.globals.zoomEnabled) {
                             var f = b.default.clone(a.config.yaxis);
                             a.globals.zoomed || (a.globals.lastXAxis = b.default.clone(a.config.xaxis), a.globals.lastYAxis = b.default.clone(a.config.yaxis));
                             var p = {
                                 min: h,
                                 max: c
                             };
                             if ("xy" !== i && "y" !== i || f.forEach(function (t, e) {
                                     f[e].min = d[e], f[e].max = u[e]
                                 }), r) {
                                 var g = r.getBeforeZoomRange(p, f);
                                 g && (p = g.xaxis ? g.xaxis : p, f = g.yaxis ? g.yaxe : f)
                             }
                             "x" === i ? s.ctx._updateOptions({
                                 xaxis: p
                             }, !1, s.w.config.chart.animations.dynamicAnimation.enabled) : "y" === i ? s.ctx._updateOptions({
                                 yaxis: f
                             }, !1, s.w.config.chart.animations.dynamicAnimation.enabled) : s.ctx._updateOptions({
                                 xaxis: p,
                                 yaxis: f
                             }, !1, s.w.config.chart.animations.dynamicAnimation.enabled), "function" == typeof a.config.chart.events.zoomed && r.zoomCallback(p, f), a.globals.zoomed = !0
                         } else if (a.globals.selectionEnabled) {
                         var x, v = null;
                         x = {
                             min: h,
                             max: c
                         }, "xy" !== i && "y" !== i || (v = b.default.clone(a.config.yaxis)).forEach(function (t, e) {
                             v[e].min = d[e], v[e].max = u[e]
                         }), a.globals.selection = s.selection, "function" == typeof a.config.chart.events.selection && a.config.chart.events.selection(s.ctx, {
                             xaxis: x,
                             yaxis: v
                         })
                     }
                 }
             }, {
                 key: "panDragging",
                 value: function (t) {
                     var e = t.context,
                         i = (t.zoomtype, this.w),
                         a = e,
                         s = void 0;
                     if (void 0 !== i.globals.lastClientPosition.x) {
                         var n = i.globals.lastClientPosition.x - a.clientX,
                             r = i.globals.lastClientPosition.y - a.clientY;
                         Math.abs(n) > Math.abs(r) && 0 < n ? s = "left" : Math.abs(n) > Math.abs(r) && n < 0 ? s = "right" : Math.abs(r) > Math.abs(n) && 0 < r ? s = "up" : Math.abs(r) > Math.abs(n) && r < 0 && (s = "down")
                     }
                     i.globals.lastClientPosition = {
                         x: a.clientX,
                         y: a.clientY
                     };
                     var o = i.globals.minX,
                         l = i.globals.maxX;
                     this.panScrolled(s, o, l)
                 }
             }, {
                 key: "panScrolled",
                 value: function (t, e, i) {
                     var a = this.w,
                         s = this.xyRatios;
                     "left" === t ? (e = a.globals.minX + a.globals.gridWidth / 15 * s.xRatio, i = a.globals.maxX + a.globals.gridWidth / 15 * s.xRatio) : "right" === t && (e = a.globals.minX - a.globals.gridWidth / 15 * s.xRatio, i = a.globals.maxX - a.globals.gridWidth / 15 * s.xRatio), (e < a.globals.initialminX || i > a.globals.initialmaxX) && (e = a.globals.minX, i = a.globals.maxX), this.ctx._updateOptions({
                         xaxis: {
                             min: e,
                             max: i
                         }
                     }, !1, !1), "function" == typeof a.config.chart.events.scrolled && a.config.chart.events.scrolled(this.ctx, {
                         xaxis: {
                             min: e,
                             max: i
                         }
                     })
                 }
             }]), i
         }();
         t.exports = r
     }, function (t, e, i) {
         "use strict";
         Object.defineProperty(e, "__esModule", {
             value: !0
         });
         var a = function () {
                 function a(t, e) {
                     for (var i = 0; i < e.length; i++) {
                         var a = e[i];
                         a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                     }
                 }
                 return function (t, e, i) {
                     return e && a(t.prototype, e), i && a(t, i), t
                 }
             }(),
             s = n(i(26)),
             o = n(i(7)),
             z = n(i(0)),
             X = n(i(49));

         function n(t) {
             return t && t.__esModule ? t : {
                 default: t
             }
         }
         var r = function () {
             function i(t) {
                 ! function (t, e) {
                     if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                 }(this, i), this.ctx = t, this.w = t.w;
                 var e = this.w;
                 this.anim = new s.default(this.ctx), this.xaxisLabels = e.globals.labels.slice(), this.animX = e.config.grid.xaxis.lines.animate && e.config.chart.animations.enabled, this.animY = e.config.grid.yaxis.lines.animate && e.config.chart.animations.enabled, 0 < e.globals.timelineLabels.length && (this.xaxisLabels = e.globals.timelineLabels.slice())
             }
             return a(i, [{
                 key: "drawGridArea",
                 value: function () {
                     var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
                         e = this.w,
                         i = new z.default(this.ctx);
                     null === t && (t = i.group({
                         class: "apexcharts-grid"
                     }));
                     var a = i.drawLine(e.globals.padHorizontal, 1, e.globals.padHorizontal, e.globals.gridHeight, "transparent"),
                         s = i.drawLine(e.globals.padHorizontal, e.globals.gridHeight, e.globals.gridWidth, e.globals.gridHeight, "transparent");
                     return t.add(s), t.add(a), t
                 }
             }, {
                 key: "drawGrid",
                 value: function () {
                     var t = this.w,
                         e = new X.default(this.ctx),
                         i = this.w.globals,
                         a = null;
                     if (i.axisCharts) {
                         if (t.config.grid.show) a = this.renderGrid(), i.dom.elGraphical.add(a.el), this.drawGridArea(a.el);
                         else {
                             var s = this.drawGridArea();
                             i.dom.elGraphical.add(s)
                         }
                         null !== a && e.xAxisLabelCorrections(a.xAxisTickWidth)
                     }
                 }
             }, {
                 key: "createGridMask",
                 value: function () {
                     var t = this.w,
                         e = t.globals,
                         i = new z.default(this.ctx),
                         a = Array.isArray(t.config.stroke.width) ? 0 : t.config.stroke.width;
                     if (Array.isArray(t.config.stroke.width)) {
                         var s = 0;
                         t.config.stroke.width.forEach(function (t) {
                             s = Math.max(s, t)
                         }), a = s
                     }
                     e.dom.elGridRectMask = document.createElementNS(e.svgNS, "clipPath"), e.dom.elGridRectMask.setAttribute("id", "gridRectMask" + e.cuid), e.dom.elGridRectMarkerMask = document.createElementNS(e.svgNS, "clipPath"), e.dom.elGridRectMarkerMask.setAttribute("id", "gridRectMarkerMask" + e.cuid), e.dom.elGridRect = i.drawRect(-a / 2, -a / 2, e.gridWidth + a, e.gridHeight + a, 0, "#fff"), new o.default(this).getLargestMarkerSize();
                     var n = t.globals.markers.largestSize + t.config.markers.hover.sizeOffset + 1;
                     e.dom.elGridRectMarker = i.drawRect(-n, -n, e.gridWidth + 2 * n, e.gridHeight + 2 * n, 0, "#fff"), e.dom.elGridRectMask.appendChild(e.dom.elGridRect.node), e.dom.elGridRectMarkerMask.appendChild(e.dom.elGridRectMarker.node);
                     var r = e.dom.baseEl.querySelector("defs");
                     r.appendChild(e.dom.elGridRectMask), r.appendChild(e.dom.elGridRectMarkerMask)
                 }
             }, {
                 key: "renderGrid",
                 value: function () {
                     for (var t = this.w, e = new z.default(this.ctx), i = t.config.grid.strokeDashArray, a = e.group({
                             class: "apexcharts-grid"
                         }), s = 8, n = 0; n < t.globals.series.length && (void 0 !== t.globals.yAxisScale[n] && (s = t.globals.yAxisScale[n].result.length - 1), !(2 < s)); n++);
                     var r = void 0;
                     if (!(!t.config.plotOptions.bar.horizontal || "bar" !== t.config.chart.type)) {
                         if (r = s, t.config.grid.xaxis.lines.show || t.config.xaxis.axisTicks.show)
                             for (var o = t.globals.padHorizontal, l = void 0, h = t.globals.gridHeight, c = 0; c < r + 1 && (l = o = o + t.globals.gridWidth / r + .3, c !== r - 1); c++) {
                                 if (t.config.grid.xaxis.lines.show) {
                                     var u = e.drawLine(o, 0, l, h, t.config.grid.borderColor, i);
                                     u.node.classList.add("apexcharts-gridline"), a.add(u), this.animX && this.animateLine(u, {
                                         x1: 0,
                                         x2: 0
                                     }, {
                                         x1: o,
                                         x2: l
                                     })
                                 }
                                 new X.default(this.ctx).drawXaxisTicks(o, a)
                             }
                         if (t.config.grid.yaxis.lines.show)
                             for (var d = 0, f = 0, p = t.globals.gridWidth, g = 0; g < t.globals.dataPoints + 1; g++) {
                                 var x = e.drawLine(0, d, p, f, t.config.grid.borderColor, i);
                                 a.add(x), x.node.classList.add("apexcharts-gridline"), this.animY && this.animateLine(x, {
                                     y1: d + 20,
                                     y2: f + 20
                                 }, {
                                     y1: d,
                                     y2: f
                                 }), f = d += t.globals.gridHeight / t.globals.dataPoints
                             }
                     } else {
                         if (r = this.xaxisLabels.length, t.config.grid.xaxis.lines.show || t.config.xaxis.axisTicks.show) {
                             var v = t.globals.padHorizontal,
                                 b = void 0,
                                 m = t.globals.gridHeight;
                             if (0 < t.globals.timelineLabels.length)
                                 for (var y = 0; y < r; y++) {
                                     if (v = this.xaxisLabels[y].position, b = this.xaxisLabels[y].position, t.config.grid.xaxis.lines.show && 0 < v && v < t.globals.gridWidth) {
                                         var w = e.drawLine(v, 0, b, m, t.config.grid.borderColor, i);
                                         w.node.classList.add("apexcharts-gridline"), a.add(w), this.animX && this.animateLine(w, {
                                             x1: 0,
                                             x2: 0
                                         }, {
                                             x1: v,
                                             x2: b
                                         })
                                     }
                                     new X.default(this.ctx).drawXaxisTicks(v, a)
                                 } else
                                     for (var k = r, S = 0; S < k; S++) {
                                         var A = k;
                                         if (t.globals.isXNumeric && "bar" !== t.config.chart.type && (A -= 1), b = v += t.globals.gridWidth / A, S === A - 1) break;
                                         if (t.config.grid.xaxis.lines.show) {
                                             var C = e.drawLine(v, 0, b, m, t.config.grid.borderColor, i);
                                             C.node.classList.add("apexcharts-gridline"), a.add(C), this.animX && this.animateLine(C, {
                                                 x1: 0,
                                                 x2: 0
                                             }, {
                                                 x1: v,
                                                 x2: b
                                             })
                                         }
                                         new X.default(this.ctx).drawXaxisTicks(v, a)
                                     }
                         }
                         if (t.config.grid.yaxis.lines.show)
                             for (var P = 0, M = 0, L = t.globals.gridWidth, E = 0; E < s + 1; E++) {
                                 var T = e.drawLine(0, P, L, M, t.config.grid.borderColor, i);
                                 a.add(T), T.node.classList.add("apexcharts-gridline"), this.animY && this.animateLine(T, {
                                     y1: P + 20,
                                     y2: M + 20
                                 }, {
                                     y1: P,
                                     y2: M
                                 }), M = P += t.globals.gridHeight / s
                             }
                     }
                     return this.drawGridBands(a, r, s), {
                         el: a,
                         xAxisTickWidth: t.globals.gridWidth / r
                     }
                 }
             }, {
                 key: "drawGridBands",
                 value: function (t, e, i) {
                     var a = this.w,
                         s = new z.default(this.ctx);
                     if (void 0 !== a.config.grid.row.colors && 0 < a.config.grid.row.colors.length)
                         for (var n = 0, r = a.globals.gridHeight / i, o = a.globals.gridWidth, l = 0, h = 0; l < i; l++, h++) {
                             h >= a.config.grid.row.colors.length && (h = 0);
                             var c = a.config.grid.row.colors[h],
                                 u = s.drawRect(0, n, o, r, 0, c, a.config.grid.row.opacity);
                             t.add(u), u.node.classList.add("apexcharts-gridRow"), n += a.globals.gridHeight / i
                         }
                     if (void 0 !== a.config.grid.column.colors && 0 < a.config.grid.column.colors.length)
                         for (var d = a.globals.padHorizontal, f = a.globals.padHorizontal + a.globals.gridWidth / e, p = a.globals.gridHeight, g = 0, x = 0; g < e; g++, x++) {
                             x >= a.config.grid.column.colors.length && (x = 0);
                             var v = a.config.grid.column.colors[x],
                                 b = s.drawRect(d, 0, f, p, 0, v, a.config.grid.column.opacity);
                             b.node.classList.add("apexcharts-gridColumn"), t.add(b), d += a.globals.gridWidth / e
                         }
                 }
             }, {
                 key: "animateLine",
                 value: function (t, e, i) {
                     var a = this.w,
                         s = a.config.chart.animations;
                     if (s && !a.globals.resized && !a.globals.dataChanged) {
                         var n = s.speed;
                         this.anim.animateLine(t, e, i, n)
                     }
                 }
             }]), i
         }();
         e.default = r
     }, function (t, e, i) {
         "use strict";
         var a, s = function () {
                 function a(t, e) {
                     for (var i = 0; i < e.length; i++) {
                         var a = e[i];
                         a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                     }
                 }
                 return function (t, e, i) {
                     return e && a(t.prototype, e), i && a(t, i), t
                 }
             }(),
             n = i(1),
             r = (a = n) && a.__esModule ? a : {
                 default: a
             };
         var o = function () {
             function e(t) {
                 ! function (t, e) {
                     if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                 }(this, e), this.opts = t
             }
             return s(e, [{
                 key: "line",
                 value: function () {
                     return {
                         chart: {
                             animations: {
                                 easing: "swing"
                             }
                         },
                         dataLabels: {
                             enabled: !1
                         },
                         stroke: {
                             width: 5,
                             curve: "straight"
                         },
                         markers: {
                             size: 5
                         },
                         xaxis: {
                             crosshairs: {
                                 width: 1
                             }
                         }
                     }
                 }
             }, {
                 key: "sparkline",
                 value: function (t) {
                     this.opts.yaxis[0].labels.show = !1;
                     this.opts.yaxis[0].floating = !0;
                     return r.default.extend(t, {
                         grid: {
                             show: !1,
                             padding: {
                                 left: 0,
                                 right: 0,
                                 top: 0,
                                 bottom: 0
                             }
                         },
                         legend: {
                             show: !1
                         },
                         xaxis: {
                             labels: {
                                 show: !1
                             },
                             tooltip: {
                                 enabled: !1
                             },
                             axisBorder: {
                                 show: !1
                             }
                         },
                         chart: {
                             toolbar: {
                                 show: !1
                             },
                             zoom: {
                                 enabled: !1
                             }
                         },
                         dataLabels: {
                             enabled: !1
                         }
                     })
                 }
             }, {
                 key: "bar",
                 value: function () {
                     return {
                         chart: {
                             stacked: !1,
                             animations: {
                                 easing: "swing"
                             }
                         },
                         plotOptions: {
                             bar: {
                                 dataLabels: {
                                     position: "center"
                                 }
                             }
                         },
                         dataLabels: {
                             style: {
                                 colors: ["#fff"]
                             }
                         },
                         stroke: {
                             width: 0
                         },
                         fill: {
                             opacity: .85
                         },
                         legend: {
                             markers: {
                                 shape: "square",
                                 radius: 2,
                                 size: 8
                             }
                         },
                         tooltip: {
                             shared: !1
                         },
                         xaxis: {
                             tooltip: {
                                 enabled: !1
                             },
                             crosshairs: {
                                 width: "barWidth",
                                 position: "back",
                                 fill: {
                                     type: "gradient"
                                 },
                                 dropShadow: {
                                     enabled: !1
                                 }
                             }
                         }
                     }
                 }
             }, {
                 key: "candlestick",
                 value: function () {
                     return {
                         stroke: {
                             width: 1,
                             colors: ["#333"]
                         },
                         dataLabels: {
                             enabled: !1
                         },
                         tooltip: {
                             shared: !0,
                             custom: function (t) {
                                 var e = t.seriesIndex,
                                     i = t.dataPointIndex,
                                     a = t.w;
                                 return '<div class="apexcharts-tooltip-candlestick"><div>Open: <span class="value">' + a.globals.seriesCandleO[e][i] + '</span></div><div>High: <span class="value">' + a.globals.seriesCandleH[e][i] + '</span></div><div>Low: <span class="value">' + a.globals.seriesCandleL[e][i] + '</span></div><div>Close: <span class="value">' + a.globals.seriesCandleC[e][i] + "</span></div></div>"
                             }
                         },
                         states: {
                             active: {
                                 filter: {
                                     type: "none"
                                 }
                             }
                         },
                         xaxis: {
                             crosshairs: {
                                 width: 1
                             }
                         }
                     }
                 }
             }, {
                 key: "area",
                 value: function () {
                     return {
                         stroke: {
                             width: 4
                         },
                         fill: {
                             type: "gradient",
                             gradient: {
                                 inverseColors: !1,
                                 shade: "light",
                                 type: "vertical",
                                 opacityFrom: .65,
                                 opacityTo: .5,
                                 stops: [0, 100, 100]
                             }
                         },
                         markers: {
                             size: 0,
                             hover: {
                                 sizeOffset: 6
                             }
                         },
                         tooltip: {
                             followCursor: !1
                         }
                     }
                 }
             }, {
                 key: "brush",
                 value: function (t) {
                     return r.default.extend(t, {
                         chart: {
                             toolbar: {
                                 autoSelected: "selection",
                                 show: !1
                             },
                             zoom: {
                                 enabled: !1
                             }
                         },
                         dataLabels: {
                             enabled: !1
                         },
                         stroke: {
                             width: 1
                         },
                         tooltip: {
                             enabled: !1
                         },
                         xaxis: {
                             tooltip: {
                                 enabled: !1
                             }
                         }
                     })
                 }
             }, {
                 key: "stacked100",
                 value: function () {
                     var i = this;
                     this.opts.dataLabels = this.opts.dataLabels || {}, this.opts.dataLabels.formatter = this.opts.dataLabels.formatter || void 0;
                     var t = this.opts.dataLabels.formatter;
                     this.opts.yaxis.forEach(function (t, e) {
                         i.opts.yaxis[e].min = 0, i.opts.yaxis[e].max = 100
                     }), !("bar" !== this.opts.chart.type) && (this.opts.dataLabels.formatter = t || function (t) {
                         return "number" == typeof t && t ? t.toFixed(0) + "%" : t
                     })
                 }
             }, {
                 key: "bubble",
                 value: function () {
                     return {
                         dataLabels: {
                             style: {
                                 colors: ["#fff"]
                             }
                         },
                         tooltip: {
                             shared: !1,
                             intersect: !0
                         },
                         xaxis: {
                             crosshairs: {
                                 width: 0
                             }
                         },
                         fill: {
                             type: "solid",
                             gradient: {
                                 shade: "light",
                                 inverse: !0,
                                 shadeIntensity: .55,
                                 opacityFrom: .4,
                                 opacityTo: .8
                             }
                         }
                     }
                 }
             }, {
                 key: "scatter",
                 value: function () {
                     return {
                         dataLabels: {
                             enabled: !1
                         },
                         tooltip: {
                             shared: !1,
                             intersect: !0
                         },
                         markers: {
                             size: 6,
                             strokeWidth: 2,
                             hover: {
                                 sizeOffset: 2
                             }
                         }
                     }
                 }
             }, {
                 key: "heatmap",
                 value: function () {
                     return {
                         chart: {
                             stacked: !1,
                             zoom: {
                                 enabled: !1
                             }
                         },
                         fill: {
                             opacity: 1
                         },
                         dataLabels: {
                             style: {
                                 colors: ["#fff"]
                             }
                         },
                         stroke: {
                             colors: ["#fff"]
                         },
                         tooltip: {
                             followCursor: !0,
                             marker: {
                                 show: !1
                             },
                             x: {
                                 show: !1
                             }
                         },
                         legend: {
                             position: "top",
                             markers: {
                                 shape: "square",
                                 size: 10,
                                 offsetY: 2
                             }
                         },
                         grid: {
                             padding: {
                                 right: 20
                             }
                         }
                     }
                 }
             }, {
                 key: "pie",
                 value: function () {
                     return {
                         chart: {
                             toolbar: {
                                 show: !1
                             }
                         },
                         plotOptions: {
                             pie: {
                                 donut: {
                                     labels: {
                                         show: !1
                                     }
                                 }
                             }
                         },
                         dataLabels: {
                             formatter: function (t) {
                                 return t.toFixed(1) + "%"
                             },
                             style: {
                                 colors: ["#fff"]
                             },
                             dropShadow: {
                                 enabled: !0
                             }
                         },
                         stroke: {
                             colors: ["#fff"]
                         },
                         fill: {
                             opacity: 1,
                             gradient: {
                                 shade: "dark",
                                 shadeIntensity: .35,
                                 inverseColors: !1,
                                 stops: [0, 100, 100]
                             }
                         },
                         padding: {
                             right: 0,
                             left: 0
                         },
                         tooltip: {
                             theme: "dark",
                             fillSeriesColor: !0
                         },
                         legend: {
                             position: "right"
                         }
                     }
                 }
             }, {
                 key: "donut",
                 value: function () {
                     return {
                         chart: {
                             toolbar: {
                                 show: !1
                             }
                         },
                         dataLabels: {
                             formatter: function (t) {
                                 return t.toFixed(1) + "%"
                             },
                             style: {
                                 colors: ["#fff"]
                             },
                             dropShadow: {
                                 enabled: !0
                             }
                         },
                         stroke: {
                             colors: ["#fff"]
                         },
                         fill: {
                             opacity: 1,
                             gradient: {
                                 shade: "dark",
                                 shadeIntensity: .4,
                                 inverseColors: !1,
                                 type: "vertical",
                                 opacityFrom: 1,
                                 opacityTo: 1,
                                 stops: [70, 98, 100]
                             }
                         },
                         padding: {
                             right: 0,
                             left: 0
                         },
                         tooltip: {
                             theme: "dark",
                             fillSeriesColor: !0
                         },
                         legend: {
                             position: "right"
                         }
                     }
                 }
             }, {
                 key: "radar",
                 value: function () {
                     return this.opts.yaxis[0].labels.style.fontSize = "13px", {
                         dataLabels: {
                             enabled: !0,
                             style: {
                                 colors: "#a8a8a8",
                                 fontSize: "11px"
                             }
                         },
                         stroke: {
                             width: 2
                         },
                         markers: {
                             size: 3,
                             strokeWidth: 1,
                             strokeOpacity: 1
                         },
                         fill: {
                             opacity: .2
                         },
                         tooltip: {
                             shared: !(this.opts.yaxis[0].labels.offsetY = 6),
                             intersect: !0,
                             followCursor: !0
                         },
                         grid: {
                             show: !1
                         },
                         xaxis: {
                             tooltip: {
                                 enabled: !1
                             },
                             crosshairs: {
                                 show: !1
                             }
                         }
                     }
                 }
             }, {
                 key: "radialBar",
                 value: function () {
                     return {
                         chart: {
                             animations: {
                                 dynamicAnimation: {
                                     enabled: !0,
                                     speed: 800
                                 }
                             },
                             toolbar: {
                                 show: !1
                             }
                         },
                         fill: {
                             gradient: {
                                 shade: "dark",
                                 shadeIntensity: .4,
                                 inverseColors: !1,
                                 type: "diagonal2",
                                 opacityFrom: 1,
                                 opacityTo: 1,
                                 stops: [70, 98, 100]
                             }
                         },
                         padding: {
                             right: 0,
                             left: 0
                         },
                         legend: {
                             show: !1,
                             position: "right"
                         },
                         tooltip: {
                             enabled: !1,
                             fillSeriesColor: !0
                         }
                     }
                 }
             }]), e
         }();
         t.exports = o
     }, function (t, e, i) {
         "use strict";
         Object.defineProperty(e, "__esModule", {
             value: !0
         }), e.default = void 0;
         var a, s = function () {
                 function a(t, e) {
                     for (var i = 0; i < e.length; i++) {
                         var a = e[i];
                         a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                     }
                 }
                 return function (t, e, i) {
                     return e && a(t.prototype, e), i && a(t, i), t
                 }
             }(),
             n = i(1),
             r = (a = n) && a.__esModule ? a : {
                 default: a
             };
         var o = function () {
             function t() {
                 ! function (t, e) {
                     if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                 }(this, t)
             }
             return s(t, [{
                 key: "globalVars",
                 value: function (t) {
                     return {
                         chartID: null,
                         cuid: null,
                         events: {
                             beforeMount: [],
                             mounted: [],
                             updated: [],
                             clicked: [],
                             selection: [],
                             dataPointSelection: [],
                             zoomed: [],
                             scrolled: []
                         },
                         colors: [],
                         fill: {
                             colors: []
                         },
                         stroke: {
                             colors: []
                         },
                         dataLabels: {
                             style: {
                                 colors: []
                             }
                         },
                         radarPolygons: {
                             fill: {
                                 colors: []
                             }
                         },
                         markers: {
                             colors: [],
                             size: t.markers.size,
                             largestSize: 0
                         },
                         animationEnded: !1,
                         isTouchDevice: "ontouchstart" in window || navigator.msMaxTouchPoints,
                         isDirty: !1,
                         initialConfig: null,
                         lastXAxis: [],
                         lastYAxis: [],
                         series: [],
                         seriesPercent: [],
                         seriesTotals: [],
                         stackedSeriesTotals: [],
                         seriesX: [],
                         seriesZ: [],
                         labels: [],
                         timelineLabels: [],
                         seriesNames: [],
                         noLabelsProvided: !1,
                         allSeriesCollapsed: !1,
                         collapsedSeries: [],
                         collapsedSeriesIndices: [],
                         risingSeries: [],
                         selectedDataPoints: [],
                         ignoreYAxisIndexes: [],
                         padHorizontal: 0,
                         maxValsInArrayIndex: 0,
                         zoomEnabled: "zoom" === t.chart.toolbar.autoSelected && t.chart.toolbar.tools.zoom && t.chart.zoom.enabled,
                         panEnabled: "pan" === t.chart.toolbar.autoSelected && t.chart.toolbar.tools.pan,
                         selectionEnabled: "selection" === t.chart.toolbar.autoSelected && t.chart.toolbar.tools.selection,
                         yaxis: null,
                         minY: Number.MIN_VALUE,
                         maxY: -Number.MAX_VALUE,
                         minYArr: [],
                         maxYArr: [],
                         maxX: -Number.MAX_VALUE,
                         initialmaxX: -Number.MAX_VALUE,
                         minX: Number.MAX_VALUE,
                         initialminX: Number.MAX_VALUE,
                         minZ: Number.MAX_VALUE,
                         maxZ: -Number.MAX_VALUE,
                         mousedown: !1,
                         lastClientPosition: {},
                         visibleXRange: void 0,
                         yRange: [],
                         zRange: 0,
                         xRange: 0,
                         yValueDecimal: 0,
                         total: 0,
                         svgNS: "http://www.w3.org/2000/svg",
                         svgWidth: 0,
                         svgHeight: 0,
                         noData: !1,
                         locale: {},
                         dom: {},
                         memory: {
                             methodsToExec: []
                         },
                         shouldAnimate: !0,
                         delayedElements: [],
                         axisCharts: !0,
                         isXNumeric: !1,
                         isDataXYZ: !1,
                         resized: !1,
                         resizeTimer: null,
                         comboCharts: !1,
                         comboChartsHasBars: !1,
                         dataChanged: !1,
                         previousPaths: [],
                         seriesXvalues: [],
                         seriesYvalues: [],
                         seriesCandleO: [],
                         seriesCandleH: [],
                         seriesCandleL: [],
                         seriesCandleC: [],
                         allSeriesHasEqualX: !0,
                         dataPoints: 0,
                         pointsArray: [],
                         dataLabelsRects: [],
                         lastDrawnDataLabelsIndexes: [],
                         hasNullValues: !1,
                         easing: null,
                         zoomed: !1,
                         gridWidth: 0,
                         gridHeight: 0,
                         yAxisScale: [],
                         xAxisScale: null,
                         xAxisTicksPositions: [],
                         timescaleTicks: [],
                         rotateXLabels: !1,
                         defaultLabels: !1,
                         xLabelFormatter: void 0,
                         yLabelFormatters: [],
                         xaxisTooltipFormatter: void 0,
                         ttKeyFormatter: void 0,
                         ttVal: void 0,
                         ttZFormatter: void 0,
                         lineHeightRatio: 1.618,
                         xAxisLabelsHeight: 0,
                         yAxisLabelsWidth: 0,
                         scaleX: 1,
                         scaleY: 1,
                         translateX: 0,
                         translateY: 0,
                         translateYAxisX: [],
                         yLabelsCoords: [],
                         yTitleCoords: [],
                         yAxisWidths: [],
                         translateXAxisY: 0,
                         translateXAxisX: 0,
                         tooltip: null,
                         tooltipOpts: null
                     }
                 }
             }, {
                 key: "init",
                 value: function (t) {
                     var e = this.globalVars(t);
                     return e.initialConfig = r.default.extend({}, t), e.initialSeries = JSON.parse(JSON.stringify(e.initialConfig.series)), e.lastXAxis = JSON.parse(JSON.stringify(e.initialConfig.xaxis)), e.lastYAxis = JSON.parse(JSON.stringify(e.initialConfig.yaxis)), e
                 }
             }]), t
         }();
         e.default = o
     }, function (t, e, i) {
         "use strict";
         Object.defineProperty(e, "__esModule", {
             value: !0
         });
         var a = function () {
             function a(t, e) {
                 for (var i = 0; i < e.length; i++) {
                     var a = e[i];
                     a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                 }
             }
             return function (t, e, i) {
                 return e && a(t.prototype, e), i && a(t, i), t
             }
         }();
         var s = function () {
             function e(t) {
                 ! function (t, e) {
                     if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                 }(this, e), this.w = t.w, this.ttCtx = t
             }
             return a(e, [{
                 key: "drawXaxisTooltip",
                 value: function () {
                     var t = this.w,
                         e = this.ttCtx,
                         i = "bottom" === t.config.xaxis.position;
                     e.xaxisOffY = i ? t.globals.gridHeight + 1 : 1;
                     var a = i ? "apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom" : "apexcharts-xaxistooltip apexcharts-xaxistooltip-top",
                         s = t.globals.dom.elWrap;
                     e.blxaxisTooltip && (null === t.globals.dom.baseEl.querySelector(".apexcharts-xaxistooltip") && (e.xaxisTooltip = document.createElement("div"), e.xaxisTooltip.setAttribute("class", a), s.appendChild(e.xaxisTooltip), e.xaxisTooltipText = document.createElement("div"), e.xaxisTooltipText.classList.add("apexcharts-xaxistooltip-text"), e.xaxisTooltip.appendChild(e.xaxisTooltipText)))
                 }
             }, {
                 key: "drawYaxisTooltip",
                 value: function () {
                     for (var t = this.w, e = this.ttCtx, i = 0; i < t.config.yaxis.length; i++) {
                         var a = t.config.yaxis[i].opposite || t.config.yaxis[i].crosshairs.opposite;
                         e.yaxisOffX = a ? t.globals.gridWidth + 1 : 1;
                         var s = a ? "apexcharts-yaxistooltip apexcharts-yaxistooltip-" + i + " apexcharts-yaxistooltip-right" : "apexcharts-yaxistooltip apexcharts-yaxistooltip-" + i + " apexcharts-yaxistooltip-left",
                             n = t.globals.dom.elWrap;
                         if (e.blyaxisTooltip) null === t.globals.dom.baseEl.querySelector(".apexcharts-yaxistooltip apexcharts-yaxistooltip-" + i) && (e.yaxisTooltip = document.createElement("div"), e.yaxisTooltip.setAttribute("class", s), n.appendChild(e.yaxisTooltip), 0 === i && (e.yaxisTooltipText = []), e.yaxisTooltipText.push(document.createElement("div")), e.yaxisTooltipText[i].classList.add("apexcharts-yaxistooltip-text"), e.yaxisTooltip.appendChild(e.yaxisTooltipText[i]))
                     }
                 }
             }, {
                 key: "setXCrosshairWidth",
                 value: function () {
                     var t = this.w,
                         e = this.ttCtx,
                         i = e.getElXCrosshairs();
                     if (e.xcrosshairsWidth = parseInt(t.config.xaxis.crosshairs.width), t.globals.comboCharts) {
                         var a = t.globals.dom.baseEl.querySelector(".apexcharts-bar-area");
                         if (null !== a && "barWidth" === t.config.xaxis.crosshairs.width) {
                             var s = parseFloat(a.getAttribute("barWidth"));
                             e.xcrosshairsWidth = s
                         } else if ("tickWidth" === t.config.xaxis.crosshairs.width) {
                             var n = t.globals.labels.length;
                             e.xcrosshairsWidth = t.globals.gridWidth / n
                         }
                     } else if ("tickWidth" === t.config.xaxis.crosshairs.width) {
                         var r = t.globals.labels.length;
                         e.xcrosshairsWidth = t.globals.gridWidth / r
                     } else if ("barWidth" === t.config.xaxis.crosshairs.width) {
                         var o = t.globals.dom.baseEl.querySelector(".apexcharts-bar-area");
                         if (null !== o) {
                             var l = parseFloat(o.getAttribute("barWidth"));
                             e.xcrosshairsWidth = l
                         } else e.xcrosshairsWidth = 1
                     }
                     "bar" === t.config.chart.type && t.config.plotOptions.bar.horizontal && (e.xcrosshairsWidth = 0), null !== i && 0 < e.xcrosshairsWidth && i.setAttribute("width", e.xcrosshairsWidth)
                 }
             }, {
                 key: "handleYCrosshair",
                 value: function () {
                     var t = this.w,
                         e = this.ttCtx;
                     e.ycrosshairs = t.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs"), e.ycrosshairsHidden = t.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs-hidden")
                 }
             }, {
                 key: "drawYaxisTooltipText",
                 value: function (t, e, i) {
                     var a = this.ttCtx,
                         s = this.w,
                         n = s.globals.yLabelFormatters[t];
                     if (a.blyaxisTooltip) {
                         var r = a.getElGrid().getBoundingClientRect(),
                             o = (e - r.top) * i.yRatio[t],
                             l = s.globals.maxYArr[t] - s.globals.minYArr[t],
                             h = s.globals.minYArr[t] + (l - o);
                         a.tooltipPosition.moveYCrosshairs(e - r.top), a.yaxisTooltipText[t].innerHTML = n(h), a.tooltipPosition.moveYAxisTooltip(t)
                     }
                 }
             }]), e
         }();
         e.default = s
     }, function (t, e, i) {
         "use strict";
         Object.defineProperty(e, "__esModule", {
             value: !0
         });
         var a, s = function () {
                 function a(t, e) {
                     for (var i = 0; i < e.length; i++) {
                         var a = e[i];
                         a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                     }
                 }
                 return function (t, e, i) {
                     return e && a(t.prototype, e), i && a(t, i), t
                 }
             }(),
             n = i(1),
             p = (a = n) && a.__esModule ? a : {
                 default: a
             };
         var r = function () {
             function e(t) {
                 ! function (t, e) {
                     if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                 }(this, e), this.getAttr = function (t, e) {
                     return parseFloat(t.target.getAttribute(e))
                 }, this.w = t.w, this.ttCtx = t
             }
             return s(e, [{
                 key: "handleHeatTooltip",
                 value: function (t) {
                     var e = t.e,
                         i = t.opt,
                         a = t.x,
                         s = t.y,
                         n = this.ttCtx,
                         r = this.w;
                     if (e.target.classList.contains("apexcharts-heatmap-rect")) {
                         var o = this.getAttr(e, "i"),
                             l = this.getAttr(e, "j"),
                             h = this.getAttr(e, "cx"),
                             c = this.getAttr(e, "cy"),
                             u = this.getAttr(e, "width"),
                             d = this.getAttr(e, "height");
                         if (n.tooltipLabels.drawSeriesTexts({
                                 ttItems: i.ttItems,
                                 i: o,
                                 j: l,
                                 shared: !1
                             }), a = h + n.tooltipRect.ttWidth / 2 + u, s = c + n.tooltipRect.ttHeight / 2 - d / 2, n.tooltipPosition.moveXCrosshairs(h + u / 2), a > r.globals.gridWidth / 2 && (a = h - n.tooltipRect.ttWidth / 2 + u), n.w.config.tooltip.followCursor) {
                             var f = n.getElGrid().getBoundingClientRect();
                             s = n.e.clientY - f.top + r.globals.translateY / 2 - 10
                         }
                     }
                     return {
                         x: a,
                         y: s
                     }
                 }
             }, {
                 key: "handleMarkerTooltip",
                 value: function (t) {
                     var e = t.e,
                         i = t.opt,
                         a = t.x,
                         s = t.y,
                         n = this.w,
                         r = this.ttCtx,
                         o = void 0,
                         l = void 0;
                     if (e.target.classList.contains("apexcharts-marker")) {
                         var h = parseInt(i.paths.getAttribute("cx")),
                             c = parseInt(i.paths.getAttribute("cy")),
                             u = parseFloat(i.paths.getAttribute("val"));
                         if (l = parseInt(i.paths.getAttribute("rel")), o = parseInt(i.paths.parentNode.parentNode.parentNode.getAttribute("rel")) - 1, r.intersect) {
                             var d = p.default.findAncestor(i.paths, "apexcharts-series");
                             d && (o = parseInt(d.getAttribute("data:realIndex")))
                         }
                         if (r.tooltipLabels.drawSeriesTexts({
                                 ttItems: i.ttItems,
                                 i: o,
                                 j: l,
                                 shared: !r.intersect && n.config.tooltip.shared
                             }), r.marker.enlargeCurrentPoint(l, i.paths), a = h, s = c - 1.4 * r.tooltipRect.ttHeight, r.w.config.tooltip.followCursor) {
                             var f = r.getElGrid().getBoundingClientRect();
                             s = r.e.clientY - f.top
                         }
                         u < 0 && (s = c)
                     }
                     return {
                         x: a,
                         y: s
                     }
                 }
             }, {
                 key: "handleBarTooltip",
                 value: function (t) {
                     var e = t.e,
                         i = t.opt,
                         a = this.w,
                         s = this.ttCtx,
                         n = s.getElTooltip(),
                         r = 0,
                         o = 0,
                         l = 0,
                         h = 0,
                         c = void 0;
                     if (s.isBarHorizontal && s.hasBars() || !a.config.tooltip.shared) {
                         var u = this.getBarTooltipXY({
                             e: e,
                             opt: i
                         });
                         o = u.x, l = u.y, h = u.i, c = Array.isArray(a.config.stroke.width) ? a.config.stroke.width[h] : a.config.stroke.width, r = o
                     } else a.globals.comboCharts || a.config.tooltip.shared || (r /= 2);
                     if (isNaN(l) && (l = a.globals.svgHeight - s.tooltipRect.ttHeight), o + s.tooltipRect.ttWidth > a.globals.gridWidth ? o -= s.tooltipRect.ttWidth : o < 0 && (o += s.tooltipRect.ttWidth), s.w.config.tooltip.followCursor) {
                         var d = s.getElGrid().getBoundingClientRect();
                         l = s.e.clientY - d.top
                     }
                     null === s.tooltip && (s.tooltip = a.globals.dom.baseEl.querySelector(".apexcharts-tooltip")), a.config.tooltip.shared || (a.globals.comboChartsHasBars ? s.tooltipPosition.moveXCrosshairs(r + c / 2) : s.tooltipPosition.moveXCrosshairs(r)), !s.fixedTooltip && (!a.config.tooltip.shared || s.isBarHorizontal && s.hasBars()) && (n.style.left = o + a.globals.translateX + "px", s.tooltipRect.ttHeight + l > a.globals.gridHeight ? (l = a.globals.gridHeight - s.tooltipRect.ttHeight + a.globals.translateY, n.style.top = l + "px") : n.style.top = l + a.globals.translateY - s.tooltipRect.ttHeight / 2 + "px")
                 }
             }, {
                 key: "getBarTooltipXY",
                 value: function (t) {
                     var e = t.e,
                         i = t.opt,
                         a = this.w,
                         s = null,
                         n = this.ttCtx,
                         r = 0,
                         o = 0,
                         l = 0,
                         h = 0,
                         c = e.target.classList;
                     if (c.contains("apexcharts-bar-area") || c.contains("apexcharts-candlestick-area")) {
                         var u = e.target,
                             d = u.getBoundingClientRect(),
                             f = i.elGrid.getBoundingClientRect(),
                             p = d.height,
                             g = d.width,
                             x = parseInt(u.getAttribute("cx")),
                             v = parseInt(u.getAttribute("cy"));
                         h = parseFloat(u.getAttribute("barWidth"));
                         var b = "touchmove" === e.type ? e.touches[0].clientX : e.clientX;
                         s = parseInt(u.getAttribute("j")), r = parseInt(u.parentNode.getAttribute("rel")) - 1, a.globals.comboCharts && (r = parseInt(u.parentNode.getAttribute("data:realIndex"))), n.tooltipLabels.drawSeriesTexts({
                             ttItems: i.ttItems,
                             i: r,
                             j: s,
                             shared: !n.showOnIntersect && a.config.tooltip.shared
                         }), l = a.config.tooltip.followCursor ? a.config.plotOptions.bar.horizontal ? (o = b - f.left + 15, v - n.dataPointsDividedHeight + p / 2 - n.tooltipRect.ttHeight / 2) : (o = a.globals.isXNumeric ? x - g / 2 : x - n.dataPointsDividedWidth + g / 2, e.clientY - f.top - n.tooltipRect.ttHeight / 2 - 15) : a.config.plotOptions.bar.horizontal ? ((o = x) < n.xyRatios.baseLineInvertedY && (o = x - n.tooltipRect.ttWidth), v - n.dataPointsDividedHeight + p / 2 - n.tooltipRect.ttHeight / 2) : (o = a.globals.isXNumeric ? x - g / 2 : x - n.dataPointsDividedWidth + g / 2, v)
                     }
                     return {
                         x: o,
                         y: l,
                         barWidth: h,
                         i: r,
                         j: s
                     }
                 }
             }]), e
         }();
         e.default = r
     }, function (t, e, i) {
         "use strict";
         var a = function () {
                 function a(t, e) {
                     for (var i = 0; i < e.length; i++) {
                         var a = e[i];
                         a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                     }
                 }
                 return function (t, e, i) {
                     return e && a(t.prototype, e), i && a(t, i), t
                 }
             }(),
             u = n(i(33)),
             s = n(i(82));

         function n(t) {
             return t && t.__esModule ? t : {
                 default: t
             }
         }
         var r = function () {
             function e(t) {
                 ! function (t, e) {
                     if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                 }(this, e), this.w = t.w, this.ctx = t.ctx, this.ttCtx = t, this.tooltipUtil = new s.default(t)
             }
             return a(e, [{
                 key: "drawSeriesTexts",
                 value: function (t) {
                     var e = t.shared,
                         i = void 0 === e || e,
                         a = t.ttItems,
                         s = t.i,
                         n = void 0 === s ? 0 : s,
                         r = t.j,
                         o = void 0 === r ? null : r;
                     void 0 !== this.w.config.tooltip.custom ? this.handleCustomTooltip({
                         i: n,
                         j: o
                     }) : this.toggleActiveInactiveSeries(i);
                     var l = this.getValuesToPrint({
                         i: n,
                         j: o
                     });
                     this.printLabels({
                         i: n,
                         j: o,
                         values: l,
                         ttItems: a,
                         shared: i
                     })
                 }
             }, {
                 key: "printLabels",
                 value: function (t) {
                     var e = t.i,
                         i = t.j,
                         a = t.values,
                         s = t.ttItems,
                         n = t.shared,
                         r = this.w,
                         o = void 0,
                         l = a.xVal,
                         h = a.zVal,
                         c = a.xAxisTTVal,
                         u = "",
                         d = r.globals.colors[e];
                     null !== i && r.config.plotOptions.bar.distributed && (d = r.globals.colors[i]);
                     for (var f = 0, p = r.globals.series.length - 1; f < r.globals.series.length; f++, p--) {
                         var g = this.getFormatters(e);
                         if (u = this.getSeriesName({
                                 fn: g.yLbTitleFormatter,
                                 index: e,
                                 seriesIndex: e,
                                 j: i
                             }), n) {
                             var x = r.config.tooltip.inverseOrder ? p : f;
                             g = this.getFormatters(x), u = this.getSeriesName({
                                 fn: g.yLbTitleFormatter,
                                 index: x,
                                 seriesIndex: e,
                                 j: i
                             }), d = r.globals.colors[x], o = g.yLbFormatter(r.globals.series[x][i], {
                                 series: r.globals.series,
                                 seriesIndex: e,
                                 dataPointIndex: i,
                                 w: r
                             }), (this.ttCtx.hasBars() && r.config.chart.stacked && 0 === r.globals.series[x][i] || void 0 === r.globals.series[x][i]) && (o = void 0)
                         } else o = g.yLbFormatter(r.globals.series[e][i], r);
                         null === i && (o = g.yLbFormatter(r.globals.series[e], r)), this.DOMHandling({
                             t: f,
                             ttItems: s,
                             values: {
                                 val: o,
                                 xVal: l,
                                 xAxisTTVal: c,
                                 zVal: h
                             },
                             seriesName: u,
                             shared: n,
                             pColor: d
                         })
                     }
                 }
             }, {
                 key: "getFormatters",
                 value: function (t) {
                     var e = this.w,
                         i = e.globals.yLabelFormatters[t],
                         a = void 0;
                     return void 0 !== e.globals.ttVal ? Array.isArray(e.globals.ttVal) ? (i = e.globals.ttVal[t] && e.globals.ttVal[t].formatter, a = e.globals.ttVal[t] && e.globals.ttVal[t].title && e.globals.ttVal[t].title.formatter) : (i = e.globals.ttVal.formatter, "function" == typeof e.globals.ttVal.title.formatter && (a = e.globals.ttVal.title.formatter)) : a = e.config.tooltip.y.title.formatter, "function" != typeof i && (i = e.globals.yLabelFormatters[0] ? e.globals.yLabelFormatters[0] : function (t) {
                         return t
                     }), "function" != typeof a && (a = function (t) {
                         return t
                     }), {
                         yLbFormatter: i,
                         yLbTitleFormatter: a
                     }
                 }
             }, {
                 key: "getSeriesName",
                 value: function (t) {
                     var e = t.fn,
                         i = t.index,
                         a = t.seriesIndex,
                         s = t.j,
                         n = this.w;
                     return e(String(n.globals.seriesNames[i]), {
                         series: n.globals.series,
                         seriesIndex: a,
                         dataPointIndex: s,
                         w: n
                     })
                 }
             }, {
                 key: "DOMHandling",
                 value: function (t) {
                     var e = t.t,
                         i = t.ttItems,
                         a = t.values,
                         s = t.seriesName,
                         n = t.shared,
                         r = t.pColor,
                         o = this.w,
                         l = this.ttCtx,
                         h = a.val,
                         c = a.xVal,
                         u = a.xAxisTTVal,
                         d = a.zVal,
                         f = null;
                     f = i[e].children, o.config.tooltip.fillSeriesColor && (i[e].style.backgroundColor = r, f[0].style.display = "none"), l.showTooltipTitle && (null === l.tooltipTitle && (l.tooltipTitle = o.globals.dom.baseEl.querySelector(".apexcharts-tooltip-title")), l.tooltipTitle.innerHTML = c), l.blxaxisTooltip && (l.xaxisTooltipText.innerHTML = "" !== u ? u : c);
                     var p = i[e].querySelector(".apexcharts-tooltip-text-label");
                     p && (p.innerHTML = s ? s + ": " : "");
                     var g = i[e].querySelector(".apexcharts-tooltip-text-value");
                     (g && (g.innerHTML = h), f[0] && f[0].classList.contains("apexcharts-tooltip-marker") && (f[0].style.backgroundColor = r), o.config.tooltip.marker.show || (f[0].style.display = "none"), null !== d) && (i[e].querySelector(".apexcharts-tooltip-text-z-label").innerHTML = o.config.tooltip.z.title, i[e].querySelector(".apexcharts-tooltip-text-z-value").innerHTML = d);
                     n && f[0] && (f[0].parentNode.style.display = null == h ? "none" : o.config.tooltip.items.display)
                 }
             }, {
                 key: "toggleActiveInactiveSeries",
                 value: function (t) {
                     var e = this.w;
                     if (t) this.tooltipUtil.toggleAllTooltipSeriesGroups("enable");
                     else {
                         this.tooltipUtil.toggleAllTooltipSeriesGroups("disable");
                         var i = e.globals.dom.baseEl.querySelector(".apexcharts-tooltip-series-group");
                         i && (i.classList.add("active"), i.style.display = e.config.tooltip.items.display)
                     }
                 }
             }, {
                 key: "getValuesToPrint",
                 value: function (t) {
                     var e = t.i,
                         i = t.j,
                         a = this.w,
                         s = this.ctx.series.filteredSeriesX(),
                         n = "",
                         r = null,
                         o = null,
                         l = {
                             series: a.globals.series,
                             seriesIndex: e,
                             dataPointIndex: i,
                             w: a
                         },
                         h = a.globals.ttZFormatter;
                     null === i ? o = a.globals.series[e] : a.globals.isXNumeric ? (n = s[e][i], 0 === s[e].length && (n = s[this.tooltipUtil.getFirstActiveXArray(s)][i])) : n = void 0 !== a.globals.labels[i] ? a.globals.labels[i] : "";
                     var c = n;
                     a.globals.isXNumeric && "datetime" === a.config.xaxis.type ? n = new u.default(this.ctx).xLabelFormat(a.globals.ttKeyFormatter, c) : n = a.globals.xLabelFormatter(c, l);
                     return void 0 !== a.config.tooltip.x.formatter && (n = a.globals.ttKeyFormatter(c, l)), 0 < a.globals.seriesZ.length && 0 < a.globals.seriesZ[0].length && (r = h(a.globals.seriesZ[e][i], a)), {
                         val: o,
                         xVal: n,
                         xAxisTTVal: "function" == typeof a.config.xaxis.tooltip.formatter ? a.globals.xaxisTooltipFormatter(c, l) : n,
                         zVal: r
                     }
                 }
             }, {
                 key: "handleCustomTooltip",
                 value: function (t) {
                     var e = t.i,
                         i = t.j,
                         a = this.w;
                     this.ttCtx.getElTooltip().innerHTML = a.config.tooltip.custom({
                         series: a.globals.series,
                         seriesIndex: e,
                         dataPointIndex: i,
                         w: a
                     })
                 }
             }]), e
         }();
         t.exports = r
     }, function (t, e, i) {
         "use strict";
         var a = function () {
                 function a(t, e) {
                     for (var i = 0; i < e.length; i++) {
                         var a = e[i];
                         a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                     }
                 }
                 return function (t, e, i) {
                     return e && a(t.prototype, e), i && a(t, i), t
                 }
             }(),
             u = r(i(0)),
             s = r(i(81)),
             d = r(i(27)),
             n = r(i(1));

         function r(t) {
             return t && t.__esModule ? t : {
                 default: t
             }
         }
         var o = function () {
             function e(t) {
                 ! function (t, e) {
                     if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                 }(this, e), this.w = t.w, this.ttCtx = t, this.ctx = t.ctx, this.tooltipPosition = new s.default(t)
             }
             return a(e, [{
                 key: "drawDynamicPoints",
                 value: function () {
                     for (var t = this.w, e = new u.default(this.ctx), i = new d.default(this.ctx), a = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series"), s = 0; s < a.length; s++) {
                         var n = parseInt(a[s].getAttribute("data:realIndex")),
                             r = t.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='" + n + "'] .apexcharts-series-markers-wrap");
                         if (null !== r) {
                             var o = void 0,
                                 l = "apexcharts-marker w" + (Math.random() + 1).toString(36).substring(4);
                             "line" !== t.config.chart.type && "area" !== t.config.chart.type || t.globals.comboCharts || t.config.tooltip.intersect || (l += " no-pointer-events");
                             var h = i.getMarkerConfig(l, n);
                             (o = e.drawMarker(0, 0, h)).node.setAttribute("default-marker-size", 0);
                             var c = document.createElementNS(t.globals.svgNS, "g");
                             c.classList.add("apexcharts-series-markers"), c.appendChild(o.node), r.appendChild(c)
                         }
                     }
                 }
             }, {
                 key: "enlargeCurrentPoint",
                 value: function (t, e) {
                     var i = this.w;
                     "bubble" !== i.config.chart.type && this.newPointSize(t, e);
                     var a = e.getAttribute("cx"),
                         s = e.getAttribute("cy");
                     if (this.tooltipPosition.moveXCrosshairs(a), !this.fixedTooltip) {
                         if ("radar" === i.config.chart.type) {
                             var n = this.ttCtx.getElGrid().getBoundingClientRect();
                             a = this.ttCtx.e.clientX - n.left
                         }
                         this.tooltipPosition.moveTooltip(a, s, i.config.markers.hover.size)
                     }
                 }
             }, {
                 key: "enlargePoints",
                 value: function (t) {
                     for (var e = this.w, i = this.ttCtx, a = t, s = e.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"), n = e.config.markers.hover.size, r = 0; r < s.length; r++) {
                         var o = s[r].getAttribute("rel"),
                             l = s[r].getAttribute("index");
                         if (void 0 === n && (n = e.globals.markers.size[l] + e.config.markers.hover.sizeOffset), a === parseInt(o)) {
                             this.newPointSize(a, s[r]);
                             var h = s[r].getAttribute("cx"),
                                 c = s[r].getAttribute("cy");
                             this.tooltipPosition.moveXCrosshairs(h), i.fixedTooltip || this.tooltipPosition.moveTooltip(h, c, n)
                         } else this.oldPointSize(s[r])
                     }
                 }
             }, {
                 key: "newPointSize",
                 value: function (t, e) {
                     var i = this.w,
                         a = i.config.markers.hover.size,
                         s = null;
                     s = 0 === t ? e.parentNode.firstChild : e.parentNode.lastChild;
                     var n = parseInt(s.getAttribute("index"));
                     void 0 === a && (a = i.globals.markers.size[n] + i.config.markers.hover.sizeOffset), s.setAttribute("r", a)
                 }
             }, {
                 key: "oldPointSize",
                 value: function (t) {
                     var e = parseInt(t.getAttribute("default-marker-size"));
                     t.setAttribute("r", e)
                 }
             }, {
                 key: "resetPointsSize",
                 value: function () {
                     for (var t = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"), e = 0; e < t.length; e++) {
                         var i = parseInt(t[e].getAttribute("default-marker-size"));
                         n.default.isNumber(i) ? t[e].setAttribute("r", i) : t[e].setAttribute("r", 0)
                     }
                 }
             }]), e
         }();
         t.exports = o
     }, function (t, e, i) {
         "use strict";
         var a = function () {
                 function a(t, e) {
                     for (var i = 0; i < e.length; i++) {
                         var a = e[i];
                         a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                     }
                 }
                 return function (t, e, i) {
                     return e && a(t.prototype, e), i && a(t, i), t
                 }
             }(),
             s = f(i(147)),
             n = f(i(81)),
             r = f(i(148)),
             o = f(i(146)),
             l = f(i(145)),
             d = f(i(0)),
             h = f(i(28)),
             c = f(i(49)),
             u = f(i(82));

         function f(t) {
             return t && t.__esModule ? t : {
                 default: t
             }
         }
         var p = function () {
             function i(t) {
                 ! function (t, e) {
                     if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                 }(this, i), this.ctx = t, this.w = t.w;
                 var e = this.w;
                 this.tooltipUtil = new u.default(this), this.tooltipLabels = new s.default(this), this.tooltipPosition = new n.default(this), this.marker = new r.default(this), this.intersect = new o.default(this), this.axesTooltip = new l.default(this), this.showOnIntersect = e.config.tooltip.intersect, this.showTooltipTitle = e.config.tooltip.x.show, this.fixedTooltip = e.config.tooltip.fixed.enabled, this.xaxisTooltip = null, this.yaxisTTEls = null, this.isBarHorizontal = e.config.plotOptions.bar.horizontal, this.isBarShared = !e.config.plotOptions.bar.horizontal && e.config.tooltip.shared
             }
             return a(i, [{
                 key: "getElTooltip",
                 value: function (t) {
                     return t || (t = this), t.w.globals.dom.baseEl.querySelector(".apexcharts-tooltip")
                 }
             }, {
                 key: "getElXCrosshairs",
                 value: function () {
                     return this.w.globals.dom.baseEl.querySelector(".apexcharts-xcrosshairs")
                 }
             }, {
                 key: "getElGrid",
                 value: function () {
                     return this.w.globals.dom.baseEl.querySelector(".apexcharts-grid")
                 }
             }, {
                 key: "drawTooltip",
                 value: function (t) {
                     var e = this.w;
                     this.xyRatios = t, this.blxaxisTooltip = e.config.xaxis.tooltip.enabled && e.globals.axisCharts, this.blyaxisTooltip = e.config.yaxis[0].tooltip.enabled && e.globals.axisCharts, this.allTooltipSeriesGroups = [], e.globals.axisCharts || (this.showTooltipTitle = !1);
                     var i = document.createElement("div");
                     if (i.classList.add("apexcharts-tooltip"), i.classList.add(e.config.tooltip.theme), e.globals.dom.elWrap.appendChild(i), e.globals.axisCharts) {
                         this.axesTooltip.drawXaxisTooltip(), this.axesTooltip.drawYaxisTooltip(), this.axesTooltip.setXCrosshairWidth(), this.axesTooltip.handleYCrosshair();
                         var a = new c.default(this.ctx);
                         this.xAxisTicksPositions = a.getXAxisTicksPositions()
                     }
                     if ((e.globals.comboCharts && !e.config.tooltip.shared || e.config.tooltip.intersect && !e.config.tooltip.shared || "bar" === e.config.chart.type && !e.config.tooltip.shared) && (this.showOnIntersect = !0), 0 !== e.config.markers.size && 0 !== e.globals.markers.largestSize || this.marker.drawDynamicPoints(this), e.globals.collapsedSeries.length !== e.globals.series.length) {
                         this.dataPointsDividedHeight = e.globals.gridHeight / e.globals.dataPoints, this.dataPointsDividedWidth = e.globals.gridWidth / e.globals.dataPoints, this.showTooltipTitle && (this.tooltipTitle = document.createElement("div"), this.tooltipTitle.classList.add("apexcharts-tooltip-title"), i.appendChild(this.tooltipTitle));
                         var s = e.globals.series.length;
                         (e.globals.xyCharts || e.globals.comboCharts) && e.config.tooltip.shared && (s = this.showOnIntersect ? 1 : e.globals.series.length), this.ttItems = this.createTTElements(s), this.addSVGEvents()
                     }
                 }
             }, {
                 key: "createTTElements",
                 value: function (t) {
                     for (var e = this.w, i = [], a = this.getElTooltip(), s = 0; s < t; s++) {
                         var n = document.createElement("div");
                         n.classList.add("apexcharts-tooltip-series-group");
                         var r = document.createElement("span");
                         r.classList.add("apexcharts-tooltip-marker"), r.style.backgroundColor = e.globals.colors[s], n.appendChild(r);
                         var o = document.createElement("div");
                         o.classList.add("apexcharts-tooltip-text");
                         var l = document.createElement("div");
                         l.classList.add("apexcharts-tooltip-y-group");
                         var h = document.createElement("span");
                         h.classList.add("apexcharts-tooltip-text-label"), l.appendChild(h);
                         var c = document.createElement("span");
                         c.classList.add("apexcharts-tooltip-text-value"), l.appendChild(c);
                         var u = document.createElement("div");
                         u.classList.add("apexcharts-tooltip-z-group");
                         var d = document.createElement("span");
                         d.classList.add("apexcharts-tooltip-text-z-label"), u.appendChild(d);
                         var f = document.createElement("span");
                         f.classList.add("apexcharts-tooltip-text-z-value"), u.appendChild(f), o.appendChild(l), o.appendChild(u), n.appendChild(o), a.appendChild(n), i.push(n)
                     }
                     return i
                 }
             }, {
                 key: "addSVGEvents",
                 value: function () {
                     var t = this.w,
                         e = t.config.chart.type,
                         i = this.getElTooltip(),
                         a = !("bar" !== e && "candlestick" !== e),
                         s = t.globals.dom.Paper.node,
                         n = this.getElGrid();
                     n && (this.seriesBound = n.getBoundingClientRect());
                     var r = [],
                         o = [],
                         l = {
                             hoverArea: s,
                             elGrid: n,
                             tooltipEl: i,
                             tooltipY: r,
                             tooltipX: o,
                             ttItems: this.ttItems
                         },
                         h = void 0;
                     if (t.globals.axisCharts && ("area" === e || "line" === e || "scatter" === e || "bubble" === e ? h = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series[data\\:longestSeries='true'] .apexcharts-marker") : a ? h = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-bar-area", ".apexcharts-series .apexcharts-candlestick-area") : "heatmap" === e ? h = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-heatmap") : "radar" === e && (h = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-marker")), h && h.length))
                         for (var c = 0; c < h.length; c++) r.push(h[c].getAttribute("cy")), o.push(h[c].getAttribute("cx"));
                     if (t.globals.xyCharts && !this.showOnIntersect || t.globals.comboCharts && !this.showOnIntersect || a && this.hasBars() && t.config.tooltip.shared) this.addPathsEventListeners([s], l);
                     else if (a && !t.globals.comboCharts) this.addBarsEventListeners(l);
                     else if ("bubble" === e || "scatter" === e || "radar" === e || this.showOnIntersect && ("area" === e || "line" === e)) this.addPointsEventsListeners(l);
                     else if (!t.globals.axisCharts || "heatmap" === e) {
                         var u = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series");
                         this.addPathsEventListeners(u, l)
                     }
                     if (this.showOnIntersect) {
                         var d = t.globals.dom.baseEl.querySelectorAll(".apexcharts-line-series .apexcharts-marker");
                         0 < d.length && this.addPathsEventListeners(d, l);
                         var f = t.globals.dom.baseEl.querySelectorAll(".apexcharts-area-series .apexcharts-marker");
                         0 < f.length && this.addPathsEventListeners(f, l), this.hasBars() && !t.config.tooltip.shared && this.addBarsEventListeners(l)
                     }
                 }
             }, {
                 key: "drawFixedTooltipRect",
                 value: function () {
                     var t = this.w,
                         e = this.getElTooltip(),
                         i = e.getBoundingClientRect(),
                         a = i.width + 10,
                         s = i.height + 10,
                         n = t.config.tooltip.fixed.offsetX,
                         r = t.config.tooltip.fixed.offsetY;
                     return -1 < t.config.tooltip.fixed.position.toLowerCase().indexOf("right") && (n = n + t.globals.svgWidth - a + 10), -1 < t.config.tooltip.fixed.position.toLowerCase().indexOf("bottom") && (r = r + t.globals.svgHeight - s - 10), e.style.left = n + "px", e.style.top = r + "px", {
                         x: n,
                         y: r,
                         ttWidth: a,
                         ttHeight: s
                     }
                 }
             }, {
                 key: "addPointsEventsListeners",
                 value: function (t) {
                     var e = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers .apexcharts-marker");
                     this.addPathsEventListeners(e, t)
                 }
             }, {
                 key: "addBarsEventListeners",
                 value: function (t) {
                     var e = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-bar-area, .apexcharts-candlestick-area");
                     this.addPathsEventListeners(e, t)
                 }
             }, {
                 key: "addPathsEventListeners",
                 value: function (a, t) {
                     for (var s = this, n = this, e = function (e) {
                             var i = {
                                 paths: a[e],
                                 tooltipEl: t.tooltipEl,
                                 tooltipY: t.tooltipY,
                                 tooltipX: t.tooltipX,
                                 elGrid: t.elGrid,
                                 hoverArea: t.hoverArea,
                                 ttItems: t.ttItems
                             };
                             s.w.globals.tooltipOpts = i;
                             ["mousemove", "touchmove", "mouseout", "touchend"].map(function (t) {
                                 return a[e].addEventListener(t, n.seriesHover.bind(n, i), {
                                     capture: !1,
                                     passive: !0
                                 })
                             })
                         }, i = 0; i < a.length; i++) e(i)
                 }
             }, {
                 key: "seriesHover",
                 value: function (a, s) {
                     var n = this,
                         t = [];
                     this.w.config.chart.group && (t = this.ctx.getGroupedCharts()), t.length ? t.forEach(function (t) {
                         var e = n.getElTooltip(t),
                             i = {
                                 paths: a.paths,
                                 tooltipEl: e,
                                 tooltipY: a.tooltipY,
                                 tooltipX: a.tooltipX,
                                 elGrid: a.elGrid,
                                 hoverArea: a.hoverArea,
                                 ttItems: t.w.globals.tooltip.ttItems
                             };
                         t.w.globals.minX === n.w.globals.minX && t.w.globals.maxX === n.w.globals.maxX && t.w.globals.tooltip.seriesHoverByContext({
                             chartCtx: t,
                             ttCtx: t.w.globals.tooltip,
                             opt: i,
                             e: s
                         })
                     }) : this.seriesHoverByContext({
                         chartCtx: this.ctx,
                         ttCtx: this.w.globals.tooltip,
                         opt: a,
                         e: s
                     })
                 }
             }, {
                 key: "seriesHoverByContext",
                 value: function (t) {
                     var e = t.chartCtx,
                         i = t.ttCtx,
                         a = t.opt,
                         s = t.e,
                         n = e.w,
                         r = this.getElTooltip();
                     (i.tooltipRect = {
                         x: 0,
                         y: 0,
                         ttWidth: r.getBoundingClientRect().width,
                         ttHeight: r.getBoundingClientRect().height
                     }, i.e = s, !i.hasBars() || n.globals.comboCharts || i.isBarShared) || n.config.tooltip.onDatasetHover.highlightDataSeries && new h.default(e).toggleSeriesOnHover(s, s.target.parentNode);
                     i.fixedTooltip && i.drawFixedTooltipRect(), n.globals.axisCharts ? i.axisChartsTooltips({
                         e: s,
                         opt: a,
                         tooltipRect: i.tooltipRect
                     }) : i.nonAxisChartsTooltips({
                         e: s,
                         opt: a,
                         tooltipRect: i.tooltipRect
                     })
                 }
             }, {
                 key: "axisChartsTooltips",
                 value: function (t) {
                     var e = t.e,
                         i = t.opt,
                         a = this.w,
                         s = void 0,
                         n = void 0,
                         r = void 0,
                         o = this,
                         l = null,
                         h = this.getElTooltip(),
                         c = this.getElXCrosshairs(),
                         u = "touchmove" === e.type ? e.touches[0].clientX : e.clientX,
                         d = "touchmove" === e.type ? e.touches[0].clientY : e.clientY;
                     this.clientY = d, this.clientX = u;
                     var f = a.globals.xyCharts || "bar" === a.config.chart.type && !this.isBarHorizontal && this.hasBars() && a.config.tooltip.shared || a.globals.comboCharts && this.hasBars;
                     if ("bar" === a.config.chart.type && this.isBarHorizontal && this.hasBars() && (f = !1), "mousemove" === e.type || "touchmove" === e.type) {
                         if (null !== c && c.classList.add("active"), null !== o.ycrosshairs && o.blyaxisTooltip && o.ycrosshairs.classList.add("active"), f && !o.showOnIntersect) {
                             s = (l = o.tooltipUtil.getNearestValues({
                                 context: o,
                                 hoverArea: i.hoverArea,
                                 elGrid: i.elGrid,
                                 clientX: u,
                                 clientY: d,
                                 hasBars: o.hasBars
                             })).j;
                             var p = l.capturedSeries;
                             if (l.hoverX < 0 || l.hoverX > a.globals.gridWidth) return void o.handleMouseOut(i);
                             if (null !== p) {
                                 if (null === a.globals.series[p][s]) return void i.tooltipEl.classList.remove("active");
                                 void 0 !== a.globals.series[p][s] ? a.config.tooltip.shared && this.tooltipUtil.isXoverlap(s) && this.tooltipUtil.isinitialSeriesSameLen() ? this.create(o, p, s, i.ttItems) : this.create(o, p, s, i.ttItems, !1) : this.tooltipUtil.isXoverlap(s) && o.create(o, 0, s, i.ttItems)
                             } else this.tooltipUtil.isXoverlap(s) && o.create(o, 0, s, i.ttItems)
                         } else if ("heatmap" === a.config.chart.type) {
                             var g = this.intersect.handleHeatTooltip({
                                 e: e,
                                 opt: i,
                                 x: n,
                                 y: r
                             });
                             n = g.x, r = g.y, h.style.left = n + "px", h.style.top = r + "px"
                         } else this.hasBars && this.intersect.handleBarTooltip({
                             e: e,
                             opt: i
                         }), this.hasMarkers && this.intersect.handleMarkerTooltip({
                             e: e,
                             opt: i,
                             x: n,
                             y: r
                         });
                         if (this.blyaxisTooltip)
                             for (var x = 0; x < a.config.yaxis.length; x++) o.axesTooltip.drawYaxisTooltipText(x, d, o.xyRatios);
                         i.tooltipEl.classList.add("active")
                     } else "mouseout" !== e.type && "touchend" !== e.type || this.handleMouseOut(i)
                 }
             }, {
                 key: "nonAxisChartsTooltips",
                 value: function (t) {
                     var e = t.e,
                         i = t.opt,
                         a = t.tooltipRect,
                         s = this.w,
                         n = i.paths.getAttribute("rel"),
                         r = this.getElTooltip(),
                         o = 0,
                         l = 0,
                         h = null,
                         c = "touchmove" === e.type ? e.touches[0].clientX : e.clientX;
                     "radialBar" === s.config.chart.type ? h = s.globals.dom.baseEl.querySelector(".apexcharts-radialbar") : (h = s.globals.dom.baseEl.querySelector(".apexcharts-pie"), o = parseInt(h.getAttribute("data:innerTranslateX")), l = parseInt(h.getAttribute("data:innerTranslateY")));
                     var u = h.getBoundingClientRect();
                     if ("mousemove" === e.type || "touchmove" === e.type) {
                         r.classList.add("active"), this.tooltipLabels.drawSeriesTexts({
                             ttItems: i.ttItems,
                             i: parseInt(n) - 1,
                             shared: !1
                         });
                         var d = c - u.left - a.ttWidth / 2.2 + o,
                             f = e.clientY - u.top - a.ttHeight / 2 - 15 + l;
                         d < 0 ? d = 0 : d + a.ttWidth > s.globals.gridWidth && (d = c - u.left - a.ttWidth + o), f < 0 && (f = a.ttHeight + 20), r.style.left = d + s.globals.translateX + "px", r.style.top = f + "px"
                     } else "mouseout" !== e.type && "touchend" !== e.type || r.classList.remove("active")
                 }
             }, {
                 key: "deactivateHoverFilter",
                 value: function () {
                     for (var t = this.w, e = new d.default(this.ctx), i = t.globals.dom.Paper.select(".apexcharts-bar-area"), a = 0; a < i.length; a++) e.pathMouseLeave(i[a])
                 }
             }, {
                 key: "handleMouseOut",
                 value: function (t) {
                     var e = this.w,
                         i = this.getElXCrosshairs();
                     if (t.tooltipEl.classList.remove("active"), this.deactivateHoverFilter(), "bubble" !== e.config.chart.type && this.marker.resetPointsSize(), null !== i && i.classList.remove("active"), null !== this.ycrosshairs && this.ycrosshairs.classList.remove("active"), this.blxaxisTooltip && this.xaxisTooltip.classList.remove("active"), this.blyaxisTooltip) {
                         null === this.yaxisTTEls && (this.yaxisTTEls = e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));
                         for (var a = 0; a < this.yaxisTTEls.length; a++) this.yaxisTTEls[a].classList.remove("active")
                     }
                 }
             }, {
                 key: "getElMarkers",
                 value: function () {
                     return this.w.globals.dom.baseEl.querySelectorAll(" .apexcharts-series-markers")
                 }
             }, {
                 key: "getAllMarkers",
                 value: function () {
                     return this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers .apexcharts-marker")
                 }
             }, {
                 key: "hasMarkers",
                 value: function () {
                     return 0 < this.getElMarkers().length
                 }
             }, {
                 key: "getElBars",
                 value: function () {
                     return this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-bar-series,  .apexcharts-candlestick-series")
                 }
             }, {
                 key: "hasBars",
                 value: function () {
                     return 0 < this.getElBars().length
                 }
             }, {
                 key: "create",
                 value: function (t, e, i, a) {
                     var s = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : null,
                         n = this.w,
                         r = t;
                     null === s && (s = n.config.tooltip.shared);
                     var o = this.hasMarkers(),
                         l = this.getElBars();
                     if (s) {
                         if (r.tooltipLabels.drawSeriesTexts({
                                 ttItems: a,
                                 i: e,
                                 j: i,
                                 shared: !this.showOnIntersect && n.config.tooltip.shared
                             }), o && (0 < n.globals.markers.largestSize ? r.marker.enlargePoints(i) : r.tooltipPosition.moveDynamicPointsOnHover(i)), this.hasBars() && (this.barSeriesHeight = this.tooltipUtil.getBarsHeight(l), 0 < this.barSeriesHeight)) {
                             var h = new d.default(this.ctx),
                                 c = n.globals.dom.Paper.select(".apexcharts-bar-area[j='" + i + "']");
                             this.deactivateHoverFilter(), this.tooltipPosition.moveStickyTooltipOverBars(i);
                             for (var u = 0; u < c.length; u++) h.pathMouseEnter(c[u])
                         }
                     } else r.tooltipLabels.drawSeriesTexts({
                         shared: !1,
                         ttItems: a,
                         i: e,
                         j: i
                     }), this.hasBars() && r.tooltipPosition.moveStickyTooltipOverBars(i), o && r.tooltipPosition.moveMarkers(e, i)
                 }
             }]), i
         }();
         t.exports = p
     }, function (t, e, i) {
         "use strict";
         t.exports = function (t) {
             var e = "undefined" != typeof window && window.location;
             if (!e) throw new Error("fixUrls requires window.location");
             if (!t || "string" != typeof t) return t;
             var s = e.protocol + "//" + e.host,
                 n = s + e.pathname.replace(/\/[^\/]*$/, "/");
             return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (t, e) {
                 var i, a = e.trim().replace(/^"(.*)"$/, function (t, e) {
                     return e
                 }).replace(/^'(.*)'$/, function (t, e) {
                     return e
                 });
                 return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a) ? t : (i = 0 === a.indexOf("//") ? a : 0 === a.indexOf("/") ? s + a : n + a.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")")
             })
         }
     }, function (t, e, i) {
         "use strict";
         var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
             return typeof t
         } : function (t) {
             return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
         };
         (function () {
             function a(t) {
                 t.remember("_draggable", this), this.el = t
             }
             a.prototype.init = function (t, e) {
                 var i = this;
                 this.constraint = t, this.value = e, this.el.on("mousedown.drag", function (t) {
                     i.start(t)
                 }), this.el.on("touchstart.drag", function (t) {
                     i.start(t)
                 })
             }, a.prototype.transformPoint = function (t, e) {
                 var i = (t = t || window.event).changedTouches && t.changedTouches[0] || t;
                 return this.p.x = i.pageX - (e || 0), this.p.y = i.pageY, this.p.matrixTransform(this.m)
             }, a.prototype.getBBox = function () {
                 var t = this.el.bbox();
                 return this.el instanceof SVG.Nested && (t = this.el.rbox()), (this.el instanceof SVG.G || this.el instanceof SVG.Use || this.el instanceof SVG.Nested) && (t.x = this.el.x(), t.y = this.el.y()), t
             }, a.prototype.start = function (t) {
                 if ("click" != t.type && "mousedown" != t.type && "mousemove" != t.type || 1 == (t.which || t.buttons)) {
                     var e = this;
                     this.el.fire("beforedrag", {
                         event: t,
                         handler: this
                     }), this.parent = this.parent || this.el.parent(SVG.Nested) || this.el.parent(SVG.Doc), this.p = this.parent.node.createSVGPoint(), this.m = this.el.node.getScreenCTM().inverse();
                     var i, a = this.getBBox();
                     if (this.el instanceof SVG.Text) switch (i = this.el.node.getComputedTextLength(), this.el.attr("text-anchor")) {
                         case "middle":
                             i /= 2;
                             break;
                         case "start":
                             i = 0
                     }
                     this.startPoints = {
                         point: this.transformPoint(t, i),
                         box: a,
                         transform: this.el.transform()
                     }, SVG.on(window, "mousemove.drag", function (t) {
                         e.drag(t)
                     }), SVG.on(window, "touchmove.drag", function (t) {
                         e.drag(t)
                     }), SVG.on(window, "mouseup.drag", function (t) {
                         e.end(t)
                     }), SVG.on(window, "touchend.drag", function (t) {
                         e.end(t)
                     }), this.el.fire("dragstart", {
                         event: t,
                         p: this.startPoints.point,
                         m: this.m,
                         handler: this
                     }), t.preventDefault(), t.stopPropagation()
                 }
             }, a.prototype.drag = function (t) {
                 var e = this.getBBox(),
                     i = this.transformPoint(t),
                     a = this.startPoints.box.x + i.x - this.startPoints.point.x,
                     s = this.startPoints.box.y + i.y - this.startPoints.point.y,
                     n = this.constraint,
                     r = i.x - this.startPoints.point.x,
                     o = i.y - this.startPoints.point.y,
                     l = new CustomEvent("dragmove", {
                         detail: {
                             event: t,
                             p: i,
                             m: this.m,
                             handler: this
                         },
                         cancelable: !0
                     });
                 if (this.el.fire(l), l.defaultPrevented) return i;
                 if ("function" == typeof n) {
                     var h = n.call(this.el, a, s, this.m);
                     "boolean" == typeof h && (h = {
                         x: h,
                         y: h
                     }), !0 === h.x ? this.el.x(a) : !1 !== h.x && this.el.x(h.x), !0 === h.y ? this.el.y(s) : !1 !== h.y && this.el.y(h.y)
                 } else "object" == (void 0 === n ? "undefined" : c(n)) && (null != n.minX && a < n.minX ? a = n.minX : null != n.maxX && a > n.maxX - e.width && (a = n.maxX - e.width), null != n.minY && s < n.minY ? s = n.minY : null != n.maxY && s > n.maxY - e.height && (s = n.maxY - e.height), this.el instanceof SVG.G ? this.el.matrix(this.startPoints.transform).transform({
                     x: r,
                     y: o
                 }, !0) : this.el.move(a, s));
                 return i
             }, a.prototype.end = function (t) {
                 var e = this.drag(t);
                 this.el.fire("dragend", {
                     event: t,
                     p: e,
                     m: this.m,
                     handler: this
                 }), SVG.off(window, "mousemove.drag"), SVG.off(window, "touchmove.drag"), SVG.off(window, "mouseup.drag"), SVG.off(window, "touchend.drag")
             }, SVG.extend(SVG.Element, {
                 draggable: function (t, e) {
                     "function" != typeof t && "object" != (void 0 === t ? "undefined" : c(t)) || (e = t, t = !0);
                     var i = this.remember("_draggable") || new a(this);
                     return (t = void 0 === t || t) ? i.init(e || {}, t) : (this.off("mousedown.drag"), this.off("touchstart.drag")), this
                 }
             })
         }).call(void 0)
     }, function (t, e, i) {
         "use strict";
         (function () {
             SVG.Filter = SVG.invent({
                 create: "filter",
                 inherit: SVG.Parent,
                 extend: {
                     source: "SourceGraphic",
                     sourceAlpha: "SourceAlpha",
                     background: "BackgroundImage",
                     backgroundAlpha: "BackgroundAlpha",
                     fill: "FillPaint",
                     stroke: "StrokePaint",
                     autoSetIn: !0,
                     put: function (t, e) {
                         return this.add(t, e), !t.attr("in") && this.autoSetIn && t.attr("in", this.source), t.attr("result") || t.attr("result", t), t
                     },
                     blend: function (t, e, i) {
                         return this.put(new SVG.BlendEffect(t, e, i))
                     },
                     colorMatrix: function (t, e) {
                         return this.put(new SVG.ColorMatrixEffect(t, e))
                     },
                     convolveMatrix: function (t) {
                         return this.put(new SVG.ConvolveMatrixEffect(t))
                     },
                     componentTransfer: function (t) {
                         return this.put(new SVG.ComponentTransferEffect(t))
                     },
                     composite: function (t, e, i) {
                         return this.put(new SVG.CompositeEffect(t, e, i))
                     },
                     flood: function (t, e) {
                         return this.put(new SVG.FloodEffect(t, e))
                     },
                     offset: function (t, e) {
                         return this.put(new SVG.OffsetEffect(t, e))
                     },
                     image: function (t) {
                         return this.put(new SVG.ImageEffect(t))
                     },
                     merge: function () {
                         var t = [void 0];
                         for (var e in arguments) t.push(arguments[e]);
                         return this.put(new(SVG.MergeEffect.bind.apply(SVG.MergeEffect, t)))
                     },
                     gaussianBlur: function (t, e) {
                         return this.put(new SVG.GaussianBlurEffect(t, e))
                     },
                     morphology: function (t, e) {
                         return this.put(new SVG.MorphologyEffect(t, e))
                     },
                     diffuseLighting: function (t, e, i) {
                         return this.put(new SVG.DiffuseLightingEffect(t, e, i))
                     },
                     displacementMap: function (t, e, i, a, s) {
                         return this.put(new SVG.DisplacementMapEffect(t, e, i, a, s))
                     },
                     specularLighting: function (t, e, i, a) {
                         return this.put(new SVG.SpecularLightingEffect(t, e, i, a))
                     },
                     tile: function () {
                         return this.put(new SVG.TileEffect)
                     },
                     turbulence: function (t, e, i, a, s) {
                         return this.put(new SVG.TurbulenceEffect(t, e, i, a, s))
                     },
                     toString: function () {
                         return "url(#" + this.attr("id") + ")"
                     }
                 }
             }), SVG.extend(SVG.Defs, {
                 filter: function (t) {
                     var e = this.put(new SVG.Filter);
                     return "function" == typeof t && t.call(e, e), e
                 }
             }), SVG.extend(SVG.Container, {
                 filter: function (t) {
                     return this.defs().filter(t)
                 }
             }), SVG.extend(SVG.Element, SVG.G, SVG.Nested, {
                 filter: function (t) {
                     return this.filterer = t instanceof SVG.Element ? t : this.doc().filter(t), this.doc() && this.filterer.doc() !== this.doc() && this.doc().defs().add(this.filterer), this.attr("filter", this.filterer), this.filterer
                 },
                 unfilter: function (t) {
                     return this.filterer && !0 === t && this.filterer.remove(), delete this.filterer, this.attr("filter", null)
                 }
             }), SVG.Effect = SVG.invent({
                 create: function () {
                     this.constructor.call(this)
                 },
                 inherit: SVG.Element,
                 extend: {
                     in: function (t) {
                         return null == t ? this.parent() && this.parent().select('[result="' + this.attr("in") + '"]').get(0) || this.attr("in") : this.attr("in", t)
                     },
                     result: function (t) {
                         return null == t ? this.attr("result") : this.attr("result", t)
                     },
                     toString: function () {
                         return this.result()
                     }
                 }
             }), SVG.ParentEffect = SVG.invent({
                 create: function () {
                     this.constructor.call(this)
                 },
                 inherit: SVG.Parent,
                 extend: {
                     in: function (t) {
                         return null == t ? this.parent() && this.parent().select('[result="' + this.attr("in") + '"]').get(0) || this.attr("in") : this.attr("in", t)
                     },
                     result: function (t) {
                         return null == t ? this.attr("result") : this.attr("result", t)
                     },
                     toString: function () {
                         return this.result()
                     }
                 }
             });
             var t = {
                 blend: function (t, e) {
                     return this.parent() && this.parent().blend(this, t, e)
                 },
                 colorMatrix: function (t, e) {
                     return this.parent() && this.parent().colorMatrix(t, e).in(this)
                 },
                 convolveMatrix: function (t) {
                     return this.parent() && this.parent().convolveMatrix(t).in(this)
                 },
                 componentTransfer: function (t) {
                     return this.parent() && this.parent().componentTransfer(t).in(this)
                 },
                 composite: function (t, e) {
                     return this.parent() && this.parent().composite(this, t, e)
                 },
                 flood: function (t, e) {
                     return this.parent() && this.parent().flood(t, e)
                 },
                 offset: function (t, e) {
                     return this.parent() && this.parent().offset(t, e).in(this)
                 },
                 image: function (t) {
                     return this.parent() && this.parent().image(t)
                 },
                 merge: function () {
                     return this.parent() && this.parent().merge.apply(this.parent(), [this].concat(arguments))
                 },
                 gaussianBlur: function (t, e) {
                     return this.parent() && this.parent().gaussianBlur(t, e).in(this)
                 },
                 morphology: function (t, e) {
                     return this.parent() && this.parent().morphology(t, e).in(this)
                 },
                 diffuseLighting: function (t, e, i) {
                     return this.parent() && this.parent().diffuseLighting(t, e, i).in(this)
                 },
                 displacementMap: function (t, e, i, a) {
                     return this.parent() && this.parent().displacementMap(this, t, e, i, a)
                 },
                 specularLighting: function (t, e, i, a) {
                     return this.parent() && this.parent().specularLighting(t, e, i, a).in(this)
                 },
                 tile: function () {
                     return this.parent() && this.parent().tile().in(this)
                 },
                 turbulence: function (t, e, i, a, s) {
                     return this.parent() && this.parent().turbulence(t, e, i, a, s).in(this)
                 }
             };
             SVG.extend(SVG.Effect, t), SVG.extend(SVG.ParentEffect, t), SVG.ChildEffect = SVG.invent({
                 create: function () {
                     this.constructor.call(this)
                 },
                 inherit: SVG.Element,
                 extend: {
                     in: function (t) {
                         this.attr("in", t)
                     }
                 }
             });
             var e = {
                     blend: function (t, e, i) {
                         this.attr({
                             in: t,
                             in2: e,
                             mode: i || "normal"
                         })
                     },
                     colorMatrix: function (t, e) {
                         "matrix" == t && (e = s(e)), this.attr({
                             type: t,
                             values: void 0 === e ? null : e
                         })
                     },
                     convolveMatrix: function (t) {
                         t = s(t), this.attr({
                             order: Math.sqrt(t.split(" ").length),
                             kernelMatrix: t
                         })
                     },
                     composite: function (t, e, i) {
                         this.attr({
                             in: t,
                             in2: e,
                             operator: i
                         })
                     },
                     flood: function (t, e) {
                         this.attr("flood-color", t), null != e && this.attr("flood-opacity", e)
                     },
                     offset: function (t, e) {
                         this.attr({
                             dx: t,
                             dy: e
                         })
                     },
                     image: function (t) {
                         this.attr("href", t, SVG.xlink)
                     },
                     displacementMap: function (t, e, i, a, s) {
                         this.attr({
                             in: t,
                             in2: e,
                             scale: i,
                             xChannelSelector: a,
                             yChannelSelector: s
                         })
                     },
                     gaussianBlur: function (t, e) {
                         null != t || null != e ? this.attr("stdDeviation", function (t) {
                             if (!Array.isArray(t)) return t;
                             for (var e = 0, i = t.length, a = []; e < i; e++) a.push(t[e]);
                             return a.join(" ")
                         }(Array.prototype.slice.call(arguments))) : this.attr("stdDeviation", "0 0")
                     },
                     morphology: function (t, e) {
                         this.attr({
                             operator: t,
                             radius: e
                         })
                     },
                     tile: function () {},
                     turbulence: function (t, e, i, a, s) {
                         this.attr({
                             numOctaves: e,
                             seed: i,
                             stitchTiles: a,
                             baseFrequency: t,
                             type: s
                         })
                     }
                 },
                 i = {
                     merge: function () {
                         var t;
                         if (arguments[0] instanceof SVG.Set) {
                             var e = this;
                             arguments[0].each(function (t) {
                                 this instanceof SVG.MergeNode ? e.put(this) : (this instanceof SVG.Effect || this instanceof SVG.ParentEffect) && e.put(new SVG.MergeNode(this))
                             })
                         } else {
                             t = Array.isArray(arguments[0]) ? arguments[0] : arguments;
                             for (var i = 0; i < t.length; i++) t[i] instanceof SVG.MergeNode ? this.put(t[i]) : this.put(new SVG.MergeNode(t[i]))
                         }
                     },
                     componentTransfer: function (e) {
                         if (this.rgb = new SVG.Set, ["r", "g", "b", "a"].forEach(function (t) {
                                 this[t] = new(SVG["Func" + t.toUpperCase()])("identity"), this.rgb.add(this[t]), this.node.appendChild(this[t].node)
                             }.bind(this)), e)
                             for (var t in e.rgb && (["r", "g", "b"].forEach(function (t) {
                                     this[t].attr(e.rgb)
                                 }.bind(this)), delete e.rgb), e) this[t].attr(e[t])
                     },
                     diffuseLighting: function (t, e, i) {
                         this.attr({
                             surfaceScale: t,
                             diffuseConstant: e,
                             kernelUnitLength: i
                         })
                     },
                     specularLighting: function (t, e, i, a) {
                         this.attr({
                             surfaceScale: t,
                             diffuseConstant: e,
                             specularExponent: i,
                             kernelUnitLength: a
                         })
                     }
                 },
                 a = {
                     distantLight: function (t, e) {
                         this.attr({
                             azimuth: t,
                             elevation: e
                         })
                     },
                     pointLight: function (t, e, i) {
                         this.attr({
                             x: t,
                             y: e,
                             z: i
                         })
                     },
                     spotLight: function (t, e, i, a, s, n) {
                         this.attr({
                             x: t,
                             y: e,
                             z: i,
                             pointsAtX: a,
                             pointsAtY: s,
                             pointsAtZ: n
                         })
                     },
                     mergeNode: function (t) {
                         this.attr("in", t)
                     }
                 };

             function s(t) {
                 return Array.isArray(t) && (t = new SVG.Array(t)), t.toString().replace(/^\s+/, "").replace(/\s+$/, "").replace(/\s+/g, " ")
             }

             function n() {
                 var t = function () {};
                 for (var e in "function" == typeof arguments[arguments.length - 1] && (t = arguments[arguments.length - 1], Array.prototype.splice.call(arguments, arguments.length - 1, 1)), arguments)
                     for (var i in arguments[e]) t(arguments[e][i], i, arguments[e])
             } ["r", "g", "b", "a"].forEach(function (t) {
                 a["Func" + t.toUpperCase()] = function (t) {
                     switch (this.attr("type", t), t) {
                         case "table":
                             this.attr("tableValues", arguments[1]);
                             break;
                         case "linear":
                             this.attr("slope", arguments[1]), this.attr("intercept", arguments[2]);
                             break;
                         case "gamma":
                             this.attr("amplitude", arguments[1]), this.attr("exponent", arguments[2]), this.attr("offset", arguments[2])
                     }
                 }
             }), n(e, function (t, e) {
                 var i = e.charAt(0).toUpperCase() + e.slice(1);
                 SVG[i + "Effect"] = SVG.invent({
                     create: function () {
                         this.constructor.call(this, SVG.create("fe" + i)), t.apply(this, arguments), this.result(this.attr("id") + "Out")
                     },
                     inherit: SVG.Effect,
                     extend: {}
                 })
             }), n(i, function (t, e) {
                 var i = e.charAt(0).toUpperCase() + e.slice(1);
                 SVG[i + "Effect"] = SVG.invent({
                     create: function () {
                         this.constructor.call(this, SVG.create("fe" + i)), t.apply(this, arguments), this.result(this.attr("id") + "Out")
                     },
                     inherit: SVG.ParentEffect,
                     extend: {}
                 })
             }), n(a, function (t, e) {
                 var i = e.charAt(0).toUpperCase() + e.slice(1);
                 SVG[i] = SVG.invent({
                     create: function () {
                         this.constructor.call(this, SVG.create("fe" + i)), t.apply(this, arguments)
                     },
                     inherit: SVG.ChildEffect,
                     extend: {}
                 })
             }), SVG.extend(SVG.MergeEffect, {
                 in: function (t) {
                     return t instanceof SVG.MergeNode ? this.add(t, 0) : this.add(new SVG.MergeNode(t), 0), this
                 }
             }), SVG.extend(SVG.CompositeEffect, SVG.BlendEffect, SVG.DisplacementMapEffect, {
                 in2: function (t) {
                     return null == t ? this.parent() && this.parent().select('[result="' + this.attr("in2") + '"]').get(0) || this.attr("in2") : this.attr("in2", t)
                 }
             }), SVG.filter = {
                 sepiatone: [.343, .669, .119, 0, 0, .249, .626, .13, 0, 0, .172, .334, .111, 0, 0, 0, 0, 0, 1, 0]
             }
         }).call(void 0)
     }, function (t, e, i) {
         "use strict";
         ! function () {
             function h(t, e, i, a, s, n, r) {
                 for (var o = t.slice(e, i || r), l = a.slice(s, n || r), h = 0, c = {
                         pos: [0, 0],
                         start: [0, 0]
                     }, u = {
                         pos: [0, 0],
                         start: [0, 0]
                     };;) {
                     if (o[h] = d.call(c, o[h]), l[h] = d.call(u, l[h]), o[h][0] != l[h][0] || "M" == o[h][0] || "A" == o[h][0] && (o[h][4] != l[h][4] || o[h][5] != l[h][5]) ? (Array.prototype.splice.apply(o, [h, 1].concat(p.call(c, o[h]))), Array.prototype.splice.apply(l, [h, 1].concat(p.call(u, l[h])))) : (o[h] = f.call(c, o[h]), l[h] = f.call(u, l[h])), ++h == o.length && h == l.length) break;
                     h == o.length && o.push(["C", c.pos[0], c.pos[1], c.pos[0], c.pos[1], c.pos[0], c.pos[1]]), h == l.length && l.push(["C", u.pos[0], u.pos[1], u.pos[0], u.pos[1], u.pos[0], u.pos[1]])
                 }
                 return {
                     start: o,
                     dest: l
                 }
             }

             function d(t) {
                 switch (t[0]) {
                     case "z":
                     case "Z":
                         t[0] = "L", t[1] = this.start[0], t[2] = this.start[1];
                         break;
                     case "H":
                         t[0] = "L", t[2] = this.pos[1];
                         break;
                     case "V":
                         t[0] = "L", t[2] = t[1], t[1] = this.pos[0];
                         break;
                     case "T":
                         t[0] = "Q", t[3] = t[1], t[4] = t[2], t[1] = this.reflection[1], t[2] = this.reflection[0];
                         break;
                     case "S":
                         t[0] = "C", t[6] = t[4], t[5] = t[3], t[4] = t[2], t[3] = t[1], t[2] = this.reflection[1], t[1] = this.reflection[0]
                 }
                 return t
             }

             function f(t) {
                 var e = t.length;
                 return this.pos = [t[e - 2], t[e - 1]], -1 != "SCQT".indexOf(t[0]) && (this.reflection = [2 * this.pos[0] - t[e - 4], 2 * this.pos[1] - t[e - 3]]), t
             }

             function p(t) {
                 var e = [t];
                 switch (t[0]) {
                     case "M":
                         return this.pos = this.start = [t[1], t[2]], e;
                     case "L":
                         t[5] = t[3] = t[1], t[6] = t[4] = t[2], t[1] = this.pos[0], t[2] = this.pos[1];
                         break;
                     case "Q":
                         t[6] = t[4], t[5] = t[3], t[4] = 1 * t[4] / 3 + 2 * t[2] / 3, t[3] = 1 * t[3] / 3 + 2 * t[1] / 3, t[2] = 1 * this.pos[1] / 3 + 2 * t[2] / 3, t[1] = 1 * this.pos[0] / 3 + 2 * t[1] / 3;
                         break;
                     case "A":
                         t = (e = function (t, e) {
                             var i, a, s, n, r, o, l, h, c, u, d, f, p, g, x, v, b, m, y, w, k, S, A, C, P, M, L = Math.abs(e[1]),
                                 E = Math.abs(e[2]),
                                 T = e[3] % 360,
                                 z = e[4],
                                 X = e[5],
                                 O = e[6],
                                 Y = e[7],
                                 I = new SVG.Point(t),
                                 F = new SVG.Point(O, Y),
                                 _ = [];
                             if (0 === L || 0 === E || I.x === F.x && I.y === F.y) return [
                                 ["C", I.x, I.y, F.x, F.y, F.x, F.y]
                             ];
                             i = new SVG.Point((I.x - F.x) / 2, (I.y - F.y) / 2).transform((new SVG.Matrix).rotate(T)), 1 < (a = i.x * i.x / (L * L) + i.y * i.y / (E * E)) && (a = Math.sqrt(a), L *= a, E *= a);
                             s = (new SVG.Matrix).rotate(T).scale(1 / L, 1 / E).rotate(-T), I = I.transform(s), F = F.transform(s), n = [F.x - I.x, F.y - I.y], o = n[0] * n[0] + n[1] * n[1], r = Math.sqrt(o), n[0] /= r, n[1] /= r, l = o < 4 ? Math.sqrt(1 - o / 4) : 0, z === X && (l *= -1);
                             h = new SVG.Point((F.x + I.x) / 2 + l * -n[1], (F.y + I.y) / 2 + l * n[0]), c = new SVG.Point(I.x - h.x, I.y - h.y), u = new SVG.Point(F.x - h.x, F.y - h.y), d = Math.acos(c.x / Math.sqrt(c.x * c.x + c.y * c.y)), c.y < 0 && (d *= -1);
                             f = Math.acos(u.x / Math.sqrt(u.x * u.x + u.y * u.y)), u.y < 0 && (f *= -1);
                             X && f < d && (f += 2 * Math.PI);
                             !X && d < f && (f -= 2 * Math.PI);
                             for (g = Math.ceil(2 * Math.abs(d - f) / Math.PI), v = [], p = (f - (b = d)) / g, x = 4 * Math.tan(p / 4) / 3, k = 0; k <= g; k++) y = Math.cos(b), m = Math.sin(b), w = new SVG.Point(h.x + y, h.y + m), v[k] = [new SVG.Point(w.x + x * m, w.y - x * y), w, new SVG.Point(w.x - x * m, w.y + x * y)], b += p;
                             for (v[0][0] = v[0][1].clone(), v[v.length - 1][2] = v[v.length - 1][1].clone(), s = (new SVG.Matrix).rotate(T).scale(L, E).rotate(-T), k = 0, S = v.length; k < S; k++) v[k][0] = v[k][0].transform(s), v[k][1] = v[k][1].transform(s), v[k][2] = v[k][2].transform(s);
                             for (k = 1, S = v.length; k < S; k++) w = v[k - 1][2], A = w.x, C = w.y, w = v[k][0], P = w.x, M = w.y, w = v[k][1], O = w.x, Y = w.y, _.push(["C", A, C, P, M, O, Y]);
                             return _
                         }(this.pos, t))[0]
                 }
                 return t[0] = "C", this.pos = [t[5], t[6]], this.reflection = [2 * t[5] - t[3], 2 * t[6] - t[4]], e
             }

             function c(t, e) {
                 if (!1 === e) return !1;
                 for (var i = e, a = t.length; i < a; ++i)
                     if ("M" == t[i][0]) return i;
                 return !1
             }
             SVG.extend(SVG.PathArray, {
                 morph: function (t) {
                     for (var e = this.value, i = this.parse(t), a = 0, s = 0, n = !1, r = !1; !1 !== a || !1 !== s;) {
                         var o;
                         n = c(e, !1 !== a && a + 1), r = c(i, !1 !== s && s + 1), !1 === a && (a = 0 == (o = new SVG.PathArray(l.start).bbox()).height || 0 == o.width ? e.push(e[0]) - 1 : e.push(["M", o.x + o.width / 2, o.y + o.height / 2]) - 1), !1 === s && (s = 0 == (o = new SVG.PathArray(l.dest).bbox()).height || 0 == o.width ? i.push(i[0]) - 1 : i.push(["M", o.x + o.width / 2, o.y + o.height / 2]) - 1);
                         var l = h(e, a, n, i, s, r);
                         e = e.slice(0, a).concat(l.start, !1 === n ? [] : e.slice(n)), i = i.slice(0, s).concat(l.dest, !1 === r ? [] : i.slice(r)), a = !1 !== n && a + l.start.length, s = !1 !== r && s + l.dest.length
                     }
                     return this.value = e, this.destination = new SVG.PathArray, this.destination.value = i, this
                 }
             })
         }()
     }, function (t, e, i) {
         "use strict";
         ! function () {
             (function () {
                 function e(t) {
                     t.remember("_resizeHandler", this), this.el = t, this.parameters = {}, this.lastUpdateCall = null, this.p = t.doc().node.createSVGPoint()
                 }
                 e.prototype.transformPoint = function (t, e, i) {
                     return this.p.x = t - (this.offset.x - window.pageXOffset), this.p.y = e - (this.offset.y - window.pageYOffset), this.p.matrixTransform(i || this.m)
                 }, e.prototype._extractPosition = function (t) {
                     return {
                         x: null != t.clientX ? t.clientX : t.touches[0].clientX,
                         y: null != t.clientY ? t.clientY : t.touches[0].clientY
                     }
                 }, e.prototype.init = function (t) {
                     var e = this;
                     if (this.stop(), "stop" !== t) {
                         for (var i in this.options = {}, this.el.resize.defaults) this.options[i] = this.el.resize.defaults[i], void 0 !== t[i] && (this.options[i] = t[i]);
                         this.el.on("lt.resize", function (t) {
                             e.resize(t || window.event)
                         }), this.el.on("rt.resize", function (t) {
                             e.resize(t || window.event)
                         }), this.el.on("rb.resize", function (t) {
                             e.resize(t || window.event)
                         }), this.el.on("lb.resize", function (t) {
                             e.resize(t || window.event)
                         }), this.el.on("t.resize", function (t) {
                             e.resize(t || window.event)
                         }), this.el.on("r.resize", function (t) {
                             e.resize(t || window.event)
                         }), this.el.on("b.resize", function (t) {
                             e.resize(t || window.event)
                         }), this.el.on("l.resize", function (t) {
                             e.resize(t || window.event)
                         }), this.el.on("rot.resize", function (t) {
                             e.resize(t || window.event)
                         }), this.el.on("point.resize", function (t) {
                             e.resize(t || window.event)
                         }), this.update()
                     }
                 }, e.prototype.stop = function () {
                     return this.el.off("lt.resize"), this.el.off("rt.resize"), this.el.off("rb.resize"), this.el.off("lb.resize"), this.el.off("t.resize"), this.el.off("r.resize"), this.el.off("b.resize"), this.el.off("l.resize"), this.el.off("rot.resize"), this.el.off("point.resize"), this
                 }, e.prototype.resize = function (t) {
                     var e = this;
                     this.m = this.el.node.getScreenCTM().inverse(), this.offset = {
                         x: window.pageXOffset,
                         y: window.pageYOffset
                     };
                     var i = this._extractPosition(t.detail.event);
                     if (this.parameters = {
                             type: this.el.type,
                             p: this.transformPoint(i.x, i.y),
                             x: t.detail.x,
                             y: t.detail.y,
                             box: this.el.bbox(),
                             rotation: this.el.transform().rotation
                         }, "text" === this.el.type && (this.parameters.fontSize = this.el.attr()["font-size"]), void 0 !== t.detail.i) {
                         var a = this.el.array().valueOf();
                         this.parameters.i = t.detail.i, this.parameters.pointCoords = [a[t.detail.i][0], a[t.detail.i][1]]
                     }
                     switch (t.type) {
                         case "lt":
                             this.calc = function (t, e) {
                                 var i = this.snapToGrid(t, e);
                                 if (0 < this.parameters.box.width - i[0] && 0 < this.parameters.box.height - i[1]) {
                                     if ("text" === this.parameters.type) return this.el.move(this.parameters.box.x + i[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize - i[0]);
                                     i = this.checkAspectRatio(i), this.el.move(this.parameters.box.x + i[0], this.parameters.box.y + i[1]).size(this.parameters.box.width - i[0], this.parameters.box.height - i[1])
                                 }
                             };
                             break;
                         case "rt":
                             this.calc = function (t, e) {
                                 var i = this.snapToGrid(t, e, 2);
                                 if (0 < this.parameters.box.width + i[0] && 0 < this.parameters.box.height - i[1]) {
                                     if ("text" === this.parameters.type) return this.el.move(this.parameters.box.x - i[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize + i[0]);
                                     i = this.checkAspectRatio(i), this.el.move(this.parameters.box.x, this.parameters.box.y + i[1]).size(this.parameters.box.width + i[0], this.parameters.box.height - i[1])
                                 }
                             };
                             break;
                         case "rb":
                             this.calc = function (t, e) {
                                 var i = this.snapToGrid(t, e, 0);
                                 if (0 < this.parameters.box.width + i[0] && 0 < this.parameters.box.height + i[1]) {
                                     if ("text" === this.parameters.type) return this.el.move(this.parameters.box.x - i[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize + i[0]);
                                     i = this.checkAspectRatio(i), this.el.move(this.parameters.box.x, this.parameters.box.y).size(this.parameters.box.width + i[0], this.parameters.box.height + i[1])
                                 }
                             };
                             break;
                         case "lb":
                             this.calc = function (t, e) {
                                 var i = this.snapToGrid(t, e, 1);
                                 if (0 < this.parameters.box.width - i[0] && 0 < this.parameters.box.height + i[1]) {
                                     if ("text" === this.parameters.type) return this.el.move(this.parameters.box.x + i[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize - i[0]);
                                     i = this.checkAspectRatio(i), this.el.move(this.parameters.box.x + i[0], this.parameters.box.y).size(this.parameters.box.width - i[0], this.parameters.box.height + i[1])
                                 }
                             };
                             break;
                         case "t":
                             this.calc = function (t, e) {
                                 var i = this.snapToGrid(t, e, 2);
                                 if (0 < this.parameters.box.height - i[1]) {
                                     if ("text" === this.parameters.type) return;
                                     this.el.move(this.parameters.box.x, this.parameters.box.y + i[1]).height(this.parameters.box.height - i[1])
                                 }
                             };
                             break;
                         case "r":
                             this.calc = function (t, e) {
                                 var i = this.snapToGrid(t, e, 0);
                                 if (0 < this.parameters.box.width + i[0]) {
                                     if ("text" === this.parameters.type) return;
                                     this.el.move(this.parameters.box.x, this.parameters.box.y).width(this.parameters.box.width + i[0])
                                 }
                             };
                             break;
                         case "b":
                             this.calc = function (t, e) {
                                 var i = this.snapToGrid(t, e, 0);
                                 if (0 < this.parameters.box.height + i[1]) {
                                     if ("text" === this.parameters.type) return;
                                     this.el.move(this.parameters.box.x, this.parameters.box.y).height(this.parameters.box.height + i[1])
                                 }
                             };
                             break;
                         case "l":
                             this.calc = function (t, e) {
                                 var i = this.snapToGrid(t, e, 1);
                                 if (0 < this.parameters.box.width - i[0]) {
                                     if ("text" === this.parameters.type) return;
                                     this.el.move(this.parameters.box.x + i[0], this.parameters.box.y).width(this.parameters.box.width - i[0])
                                 }
                             };
                             break;
                         case "rot":
                             this.calc = function (t, e) {
                                 var i = t + this.parameters.p.x,
                                     a = e + this.parameters.p.y,
                                     s = Math.atan2(this.parameters.p.y - this.parameters.box.y - this.parameters.box.height / 2, this.parameters.p.x - this.parameters.box.x - this.parameters.box.width / 2),
                                     n = 180 * (Math.atan2(a - this.parameters.box.y - this.parameters.box.height / 2, i - this.parameters.box.x - this.parameters.box.width / 2) - s) / Math.PI;
                                 this.el.center(this.parameters.box.cx, this.parameters.box.cy).rotate(this.parameters.rotation + n - n % this.options.snapToAngle, this.parameters.box.cx, this.parameters.box.cy)
                             };
                             break;
                         case "point":
                             this.calc = function (t, e) {
                                 var i = this.snapToGrid(t, e, this.parameters.pointCoords[0], this.parameters.pointCoords[1]),
                                     a = this.el.array().valueOf();
                                 a[this.parameters.i][0] = this.parameters.pointCoords[0] + i[0], a[this.parameters.i][1] = this.parameters.pointCoords[1] + i[1], this.el.plot(a)
                             }
                     }
                     this.el.fire("resizestart", {
                         dx: this.parameters.x,
                         dy: this.parameters.y,
                         event: t
                     }), SVG.on(window, "touchmove.resize", function (t) {
                         e.update(t || window.event)
                     }), SVG.on(window, "touchend.resize", function () {
                         e.done()
                     }), SVG.on(window, "mousemove.resize", function (t) {
                         e.update(t || window.event)
                     }), SVG.on(window, "mouseup.resize", function () {
                         e.done()
                     })
                 }, e.prototype.update = function (t) {
                     if (t) {
                         var e = this._extractPosition(t),
                             i = this.transformPoint(e.x, e.y),
                             a = i.x - this.parameters.p.x,
                             s = i.y - this.parameters.p.y;
                         this.lastUpdateCall = [a, s], this.calc(a, s), this.el.fire("resizing", {
                             dx: a,
                             dy: s,
                             event: t
                         })
                     } else this.lastUpdateCall && this.calc(this.lastUpdateCall[0], this.lastUpdateCall[1])
                 }, e.prototype.done = function () {
                     this.lastUpdateCall = null, SVG.off(window, "mousemove.resize"), SVG.off(window, "mouseup.resize"), SVG.off(window, "touchmove.resize"), SVG.off(window, "touchend.resize"), this.el.fire("resizedone")
                 }, e.prototype.snapToGrid = function (t, e, i, a) {
                     var s;
                     return s = void 0 !== a ? [(i + t) % this.options.snapToGrid, (a + e) % this.options.snapToGrid] : (i = null == i ? 3 : i, [(this.parameters.box.x + t + (1 & i ? 0 : this.parameters.box.width)) % this.options.snapToGrid, (this.parameters.box.y + e + (2 & i ? 0 : this.parameters.box.height)) % this.options.snapToGrid]), t -= Math.abs(s[0]) < this.options.snapToGrid / 2 ? s[0] : s[0] - (t < 0 ? -this.options.snapToGrid : this.options.snapToGrid), e -= Math.abs(s[1]) < this.options.snapToGrid / 2 ? s[1] : s[1] - (e < 0 ? -this.options.snapToGrid : this.options.snapToGrid), this.constraintToBox(t, e, i, a)
                 }, e.prototype.constraintToBox = function (t, e, i, a) {
                     var s, n, r = this.options.constraint || {};
                     return n = void 0 !== a ? (s = i, a) : (s = this.parameters.box.x + (1 & i ? 0 : this.parameters.box.width), this.parameters.box.y + (2 & i ? 0 : this.parameters.box.height)), void 0 !== r.minX && s + t < r.minX && (t = r.minX - s), void 0 !== r.maxX && s + t > r.maxX && (t = r.maxX - s), void 0 !== r.minY && n + e < r.minY && (e = r.minY - n), void 0 !== r.maxY && n + e > r.maxY && (e = r.maxY - n), [t, e]
                 }, e.prototype.checkAspectRatio = function (t) {
                     if (!this.options.saveAspectRatio) return t;
                     var e = t.slice(),
                         i = this.parameters.box.width / this.parameters.box.height,
                         a = this.parameters.box.width + t[0],
                         s = this.parameters.box.height - t[1],
                         n = a / s;
                     return n < i ? e[1] = a / i - this.parameters.box.height : i < n && (e[0] = this.parameters.box.width - s * i), e
                 }, SVG.extend(SVG.Element, {
                     resize: function (t) {
                         return (this.remember("_resizeHandler") || new e(this)).init(t || {}), this
                     }
                 }), SVG.Element.prototype.resize.defaults = {
                     snapToAngle: .1,
                     snapToGrid: 1,
                     constraint: {},
                     saveAspectRatio: !1
                 }
             }).call(this)
         }()
     }, function (t, e, i) {
         "use strict";
         var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
             return typeof t
         } : function (t) {
             return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
         };
         ! function () {
             function i(t) {
                 (this.el = t).remember("_selectHandler", this), this.pointSelection = {
                     isSelected: !1
                 }, this.rectSelection = {
                     isSelected: !1
                 }
             }
             i.prototype.init = function (t, e) {
                 var i = this.el.bbox();
                 for (var a in this.options = {}, this.el.selectize.defaults) this.options[a] = this.el.selectize.defaults[a], void 0 !== e[a] && (this.options[a] = e[a]);
                 this.parent = this.el.parent(), this.nested = this.nested || this.parent.group(), this.nested.matrix(new SVG.Matrix(this.el).translate(i.x, i.y)), this.options.deepSelect && -1 !== ["line", "polyline", "polygon"].indexOf(this.el.type) ? this.selectPoints(t) : this.selectRect(t), this.observe(), this.cleanup()
             }, i.prototype.selectPoints = function (t) {
                 return this.pointSelection.isSelected = t, this.pointSelection.set || (this.pointSelection.set = this.parent.set(), this.drawCircles()), this
             }, i.prototype.getPointArray = function () {
                 var e = this.el.bbox();
                 return this.el.array().valueOf().map(function (t) {
                     return [t[0] - e.x, t[1] - e.y]
                 })
             }, i.prototype.drawCircles = function () {
                 for (var s = this, t = this.getPointArray(), e = 0, i = t.length; e < i; ++e) {
                     var a = function (a) {
                         return function (t) {
                             (t = t || window.event).preventDefault ? t.preventDefault() : t.returnValue = !1, t.stopPropagation();
                             var e = t.pageX || t.touches[0].pageX,
                                 i = t.pageY || t.touches[0].pageY;
                             s.el.fire("point", {
                                 x: e,
                                 y: i,
                                 i: a,
                                 event: t
                             })
                         }
                     }(e);
                     this.pointSelection.set.add(this.nested.circle(this.options.radius).center(t[e][0], t[e][1]).addClass(this.options.classPoints).addClass(this.options.classPoints + "_point").on("touchstart", a).on("mousedown", a))
                 }
             }, i.prototype.updatePointSelection = function () {
                 var e = this.getPointArray();
                 this.pointSelection.set.each(function (t) {
                     this.cx() === e[t][0] && this.cy() === e[t][1] || this.center(e[t][0], e[t][1])
                 })
             }, i.prototype.updateRectSelection = function () {
                 var t = this.el.bbox();
                 this.rectSelection.set.get(0).attr({
                     width: t.width,
                     height: t.height
                 }), this.options.points && (this.rectSelection.set.get(2).center(t.width, 0), this.rectSelection.set.get(3).center(t.width, t.height), this.rectSelection.set.get(4).center(0, t.height), this.rectSelection.set.get(5).center(t.width / 2, 0), this.rectSelection.set.get(6).center(t.width, t.height / 2), this.rectSelection.set.get(7).center(t.width / 2, t.height), this.rectSelection.set.get(8).center(0, t.height / 2)), this.options.rotationPoint && (this.options.points ? this.rectSelection.set.get(9).center(t.width / 2, 20) : this.rectSelection.set.get(1).center(t.width / 2, 20))
             }, i.prototype.selectRect = function (t) {
                 var s = this,
                     e = this.el.bbox();

                 function i(a) {
                     return function (t) {
                         (t = t || window.event).preventDefault ? t.preventDefault() : t.returnValue = !1, t.stopPropagation();
                         var e = t.pageX || t.touches[0].pageX,
                             i = t.pageY || t.touches[0].pageY;
                         s.el.fire(a, {
                             x: e,
                             y: i,
                             event: t
                         })
                     }
                 }
                 if (this.rectSelection.isSelected = t, this.rectSelection.set = this.rectSelection.set || this.parent.set(), this.rectSelection.set.get(0) || this.rectSelection.set.add(this.nested.rect(e.width, e.height).addClass(this.options.classRect)), this.options.points && !this.rectSelection.set.get(1)) {
                     var a = "touchstart",
                         n = "mousedown";
                     this.rectSelection.set.add(this.nested.circle(this.options.radius).center(0, 0).attr("class", this.options.classPoints + "_lt").on(n, i("lt")).on(a, i("lt"))), this.rectSelection.set.add(this.nested.circle(this.options.radius).center(e.width, 0).attr("class", this.options.classPoints + "_rt").on(n, i("rt")).on(a, i("rt"))), this.rectSelection.set.add(this.nested.circle(this.options.radius).center(e.width, e.height).attr("class", this.options.classPoints + "_rb").on(n, i("rb")).on(a, i("rb"))), this.rectSelection.set.add(this.nested.circle(this.options.radius).center(0, e.height).attr("class", this.options.classPoints + "_lb").on(n, i("lb")).on(a, i("lb"))), this.rectSelection.set.add(this.nested.circle(this.options.radius).center(e.width / 2, 0).attr("class", this.options.classPoints + "_t").on(n, i("t")).on(a, i("t"))), this.rectSelection.set.add(this.nested.circle(this.options.radius).center(e.width, e.height / 2).attr("class", this.options.classPoints + "_r").on(n, i("r")).on(a, i("r"))), this.rectSelection.set.add(this.nested.circle(this.options.radius).center(e.width / 2, e.height).attr("class", this.options.classPoints + "_b").on(n, i("b")).on(a, i("b"))), this.rectSelection.set.add(this.nested.circle(this.options.radius).center(0, e.height / 2).attr("class", this.options.classPoints + "_l").on(n, i("l")).on(a, i("l"))), this.rectSelection.set.each(function () {
                         this.addClass(s.options.classPoints)
                     })
                 }
                 if (this.options.rotationPoint && (this.options.points && !this.rectSelection.set.get(9) || !this.options.points && !this.rectSelection.set.get(1))) {
                     var r = function (t) {
                         (t = t || window.event).preventDefault ? t.preventDefault() : t.returnValue = !1, t.stopPropagation();
                         var e = t.pageX || t.touches[0].pageX,
                             i = t.pageY || t.touches[0].pageY;
                         s.el.fire("rot", {
                             x: e,
                             y: i,
                             event: t
                         })
                     };
                     this.rectSelection.set.add(this.nested.circle(this.options.radius).center(e.width / 2, 20).attr("class", this.options.classPoints + "_rot").on("touchstart", r).on("mousedown", r))
                 }
             }, i.prototype.handler = function () {
                 var t = this.el.bbox();
                 this.nested.matrix(new SVG.Matrix(this.el).translate(t.x, t.y)), this.rectSelection.isSelected && this.updateRectSelection(), this.pointSelection.isSelected && this.updatePointSelection()
             }, i.prototype.observe = function () {
                 var t = this;
                 if (MutationObserver)
                     if (this.rectSelection.isSelected || this.pointSelection.isSelected) this.observerInst = this.observerInst || new MutationObserver(function () {
                         t.handler()
                     }), this.observerInst.observe(this.el.node, {
                         attributes: !0
                     });
                     else try {
                         this.observerInst.disconnect(), delete this.observerInst
                     } catch (t) {} else this.el.off("DOMAttrModified.select"), (this.rectSelection.isSelected || this.pointSelection.isSelected) && this.el.on("DOMAttrModified.select", function () {
                         t.handler()
                     })
             }, i.prototype.cleanup = function () {
                 !this.rectSelection.isSelected && this.rectSelection.set && (this.rectSelection.set.each(function () {
                     this.remove()
                 }), this.rectSelection.set.clear(), delete this.rectSelection.set), !this.pointSelection.isSelected && this.pointSelection.set && (this.pointSelection.set.each(function () {
                     this.remove()
                 }), this.pointSelection.set.clear(), delete this.pointSelection.set), this.pointSelection.isSelected || this.rectSelection.isSelected || (this.nested.remove(), delete this.nested)
             }, SVG.extend(SVG.Element, {
                 selectize: function (t, e) {
                     return "object" === (void 0 === t ? "undefined" : a(t)) && (e = t, t = !0), (this.remember("_selectHandler") || new i(this)).init(void 0 === t || t, e || {}), this
                 }
             }), SVG.Element.prototype.selectize.defaults = {
                 points: !0,
                 classRect: "svg_select_boundingRect",
                 classPoints: "svg_select_points",
                 radius: 7,
                 rotationPoint: !0,
                 deepSelect: !1
             }
         }()
     }, function (t, e, i) {
         "use strict";
         var a, s, n, w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
             return typeof t
         } : function (t) {
             return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
         };
         s = "undefined" != typeof window ? window : void 0, n = function (r, s) {
             var u = (void 0 !== this ? this : r).SVG = function (t) {
                 if (u.supported) return t = new u.Doc(t), u.parser.draw || u.prepare(), t
             };
             if (u.ns = "http://www.w3.org/2000/svg", u.xmlns = "http://www.w3.org/2000/xmlns/", u.xlink = "http://www.w3.org/1999/xlink", u.svgjs = "http://svgjs.com/svgjs", u.supported = !0, !u.supported) return !1;
             u.did = 1e3, u.eid = function (t) {
                 return "Svgjs" + o(t) + u.did++
             }, u.create = function (t) {
                 var e = s.createElementNS(this.ns, t);
                 return e.setAttribute("id", this.eid(t)), e
             }, u.extend = function () {
                 var t, e, i, a;
                 for (e = (t = [].slice.call(arguments)).pop(), a = t.length - 1; 0 <= a; a--)
                     if (t[a])
                         for (i in e) t[a].prototype[i] = e[i];
                 u.Set && u.Set.inherit && u.Set.inherit()
             }, u.invent = function (t) {
                 var e = "function" == typeof t.create ? t.create : function () {
                     this.constructor.call(this, u.create(t.create))
                 };
                 return t.inherit && (e.prototype = new t.inherit), t.extend && u.extend(e, t.extend), t.construct && u.extend(t.parent || u.Container, t.construct), e
             }, u.adopt = function (t) {
                 return t ? t.instance ? t.instance : ((e = "svg" == t.nodeName ? t.parentNode instanceof r.SVGElement ? new u.Nested : new u.Doc : "linearGradient" == t.nodeName ? new u.Gradient("linear") : "radialGradient" == t.nodeName ? new u.Gradient("radial") : u[o(t.nodeName)] ? new(u[o(t.nodeName)]) : new u.Element(t)).type = t.nodeName, ((e.node = t).instance = e) instanceof u.Doc && e.namespace().defs(), e.setData(JSON.parse(t.getAttribute("svgjs:data")) || {}), e) : null;
                 var e
             }, u.prepare = function () {
                 var t = s.getElementsByTagName("body")[0],
                     e = (t ? new u.Doc(t) : u.adopt(s.documentElement).nested()).size(2, 0);
                 u.parser = {
                     body: t || s.documentElement,
                     draw: e.style("opacity:0;position:absolute;left:-100%;top:-100%;overflow:hidden").node,
                     poly: e.polyline().node,
                     path: e.path().node,
                     native: u.create("svg")
                 }
             }, u.parser = {
                 native: u.create("svg")
             }, s.addEventListener("DOMContentLoaded", function () {
                 u.parser.draw || u.prepare()
             }, !1), u.regex = {
                 numberAndUnit: /^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i,
                 hex: /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
                 rgb: /rgb\((\d+),(\d+),(\d+)\)/,
                 reference: /#([a-z0-9\-_]+)/i,
                 transforms: /\)\s*,?\s*/,
                 whitespace: /\s/g,
                 isHex: /^#[a-f0-9]{3,6}$/i,
                 isRgb: /^rgb\(/,
                 isCss: /[^:]+:[^;]+;?/,
                 isBlank: /^(\s+)?$/,
                 isNumber: /^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
                 isPercent: /^-?[\d\.]+%$/,
                 isImage: /\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i,
                 delimiter: /[\s,]+/,
                 hyphen: /([^e])\-/gi,
                 pathLetters: /[MLHVCSQTAZ]/gi,
                 isPathLetter: /[MLHVCSQTAZ]/i,
                 numbersWithDots: /((\d?\.\d+(?:e[+-]?\d+)?)((?:\.\d+(?:e[+-]?\d+)?)+))+/gi,
                 dots: /\./g
             }, u.utils = {
                 map: function (t, e) {
                     var i, a = t.length,
                         s = [];
                     for (i = 0; i < a; i++) s.push(e(t[i]));
                     return s
                 },
                 filter: function (t, e) {
                     var i, a = t.length,
                         s = [];
                     for (i = 0; i < a; i++) e(t[i]) && s.push(t[i]);
                     return s
                 },
                 radians: function (t) {
                     return t % 360 * Math.PI / 180
                 },
                 degrees: function (t) {
                     return 180 * t / Math.PI % 360
                 },
                 filterSVGElements: function (t) {
                     return this.filter(t, function (t) {
                         return t instanceof r.SVGElement
                     })
                 }
             }, u.defaults = {
                 attrs: {
                     "fill-opacity": 1,
                     "stroke-opacity": 1,
                     "stroke-width": 0,
                     "stroke-linejoin": "miter",
                     "stroke-linecap": "butt",
                     fill: "#000000",
                     stroke: "#000000",
                     opacity: 1,
                     x: 0,
                     y: 0,
                     cx: 0,
                     cy: 0,
                     width: 0,
                     height: 0,
                     r: 0,
                     rx: 0,
                     ry: 0,
                     offset: 0,
                     "stop-opacity": 1,
                     "stop-color": "#000000",
                     "font-size": 16,
                     "font-family": "Helvetica, Arial, sans-serif",
                     "text-anchor": "start"
                 }
             }, u.Color = function (t) {
                 var e, i;
                 (this.r = 0, this.g = 0, this.b = 0, t) && ("string" == typeof t ? u.regex.isRgb.test(t) ? (e = u.regex.rgb.exec(t.replace(u.regex.whitespace, "")), this.r = parseInt(e[1]), this.g = parseInt(e[2]), this.b = parseInt(e[3])) : u.regex.isHex.test(t) && (e = u.regex.hex.exec(4 == (i = t).length ? ["#", i.substring(1, 2), i.substring(1, 2), i.substring(2, 3), i.substring(2, 3), i.substring(3, 4), i.substring(3, 4)].join("") : i), this.r = parseInt(e[1], 16), this.g = parseInt(e[2], 16), this.b = parseInt(e[3], 16)) : "object" === (void 0 === t ? "undefined" : w(t)) && (this.r = t.r, this.g = t.g, this.b = t.b))
             }, u.extend(u.Color, {
                 toString: function () {
                     return this.toHex()
                 },
                 toHex: function () {
                     return "#" + c(this.r) + c(this.g) + c(this.b)
                 },
                 toRgb: function () {
                     return "rgb(" + [this.r, this.g, this.b].join() + ")"
                 },
                 brightness: function () {
                     return this.r / 255 * .3 + this.g / 255 * .59 + this.b / 255 * .11
                 },
                 morph: function (t) {
                     return this.destination = new u.Color(t), this
                 },
                 at: function (t) {
                     return this.destination ? (t = t < 0 ? 0 : 1 < t ? 1 : t, new u.Color({
                         r: ~~(this.r + (this.destination.r - this.r) * t),
                         g: ~~(this.g + (this.destination.g - this.g) * t),
                         b: ~~(this.b + (this.destination.b - this.b) * t)
                     })) : this
                 }
             }), u.Color.test = function (t) {
                 return t += "", u.regex.isHex.test(t) || u.regex.isRgb.test(t)
             }, u.Color.isRgb = function (t) {
                 return t && "number" == typeof t.r && "number" == typeof t.g && "number" == typeof t.b
             }, u.Color.isColor = function (t) {
                 return u.Color.isRgb(t) || u.Color.test(t)
             }, u.Array = function (t, e) {
                 0 == (t = (t || []).valueOf()).length && e && (t = e.valueOf()), this.value = this.parse(t)
             }, u.extend(u.Array, {
                 morph: function (t) {
                     if (this.destination = this.parse(t), this.value.length != this.destination.length) {
                         for (var e = this.value[this.value.length - 1], i = this.destination[this.destination.length - 1]; this.value.length > this.destination.length;) this.destination.push(i);
                         for (; this.value.length < this.destination.length;) this.value.push(e)
                     }
                     return this
                 },
                 settle: function () {
                     for (var t = 0, e = this.value.length, i = []; t < e; t++) - 1 == i.indexOf(this.value[t]) && i.push(this.value[t]);
                     return this.value = i
                 },
                 at: function (t) {
                     if (!this.destination) return this;
                     for (var e = 0, i = this.value.length, a = []; e < i; e++) a.push(this.value[e] + (this.destination[e] - this.value[e]) * t);
                     return new u.Array(a)
                 },
                 toString: function () {
                     return this.value.join(" ")
                 },
                 valueOf: function () {
                     return this.value
                 },
                 parse: function (t) {
                     return t = t.valueOf(), Array.isArray(t) ? t : this.split(t)
                 },
                 split: function (t) {
                     return t.trim().split(u.regex.delimiter).map(parseFloat)
                 },
                 reverse: function () {
                     return this.value.reverse(), this
                 },
                 clone: function () {
                     var t = new this.constructor;
                     return t.value = function t(e) {
                         var i = e.slice(0);
                         for (var a = i.length; a--;) Array.isArray(i[a]) && (i[a] = t(i[a]));
                         return i
                     }(this.value), t
                 }
             }), u.PointArray = function (t, e) {
                 u.Array.call(this, t, e || [
                     [0, 0]
                 ])
             }, u.PointArray.prototype = new u.Array, u.PointArray.prototype.constructor = u.PointArray, u.extend(u.PointArray, {
                 toString: function () {
                     for (var t = 0, e = this.value.length, i = []; t < e; t++) i.push(this.value[t].join(","));
                     return i.join(" ")
                 },
                 toLine: function () {
                     return {
                         x1: this.value[0][0],
                         y1: this.value[0][1],
                         x2: this.value[1][0],
                         y2: this.value[1][1]
                     }
                 },
                 at: function (t) {
                     if (!this.destination) return this;
                     for (var e = 0, i = this.value.length, a = []; e < i; e++) a.push([this.value[e][0] + (this.destination[e][0] - this.value[e][0]) * t, this.value[e][1] + (this.destination[e][1] - this.value[e][1]) * t]);
                     return new u.PointArray(a)
                 },
                 parse: function (t) {
                     var e = [];
                     if (t = t.valueOf(), Array.isArray(t)) {
                         if (Array.isArray(t[0])) return t.map(function (t) {
                             return t.slice()
                         });
                         if (null != t[0].x) return t.map(function (t) {
                             return [t.x, t.y]
                         })
                     } else t = t.trim().split(u.regex.delimiter).map(parseFloat);
                     t.length % 2 != 0 && t.pop();
                     for (var i = 0, a = t.length; i < a; i += 2) e.push([t[i], t[i + 1]]);
                     return e
                 },
                 move: function (t, e) {
                     var i = this.bbox();
                     if (t -= i.x, e -= i.y, !isNaN(t) && !isNaN(e))
                         for (var a = this.value.length - 1; 0 <= a; a--) this.value[a] = [this.value[a][0] + t, this.value[a][1] + e];
                     return this
                 },
                 size: function (t, e) {
                     var i, a = this.bbox();
                     for (i = this.value.length - 1; 0 <= i; i--) a.width && (this.value[i][0] = (this.value[i][0] - a.x) * t / a.width + a.x), a.height && (this.value[i][1] = (this.value[i][1] - a.y) * e / a.height + a.y);
                     return this
                 },
                 bbox: function () {
                     return u.parser.draw || u.prepare(), u.parser.poly.setAttribute("points", this.toString()), u.parser.poly.getBBox()
                 }
             });
             for (var l = {
                     M: function (t, e, i) {
                         return e.x = i.x = t[0], e.y = i.y = t[1], ["M", e.x, e.y]
                     },
                     L: function (t, e) {
                         return e.x = t[0], e.y = t[1], ["L", t[0], t[1]]
                     },
                     H: function (t, e) {
                         return e.x = t[0], ["H", t[0]]
                     },
                     V: function (t, e) {
                         return e.y = t[0], ["V", t[0]]
                     },
                     C: function (t, e) {
                         return e.x = t[4], e.y = t[5], ["C", t[0], t[1], t[2], t[3], t[4], t[5]]
                     },
                     S: function (t, e) {
                         return e.x = t[2], e.y = t[3], ["S", t[0], t[1], t[2], t[3]]
                     },
                     Q: function (t, e) {
                         return e.x = t[2], e.y = t[3], ["Q", t[0], t[1], t[2], t[3]]
                     },
                     T: function (t, e) {
                         return e.x = t[0], e.y = t[1], ["T", t[0], t[1]]
                     },
                     Z: function (t, e, i) {
                         return e.x = i.x, e.y = i.y, ["Z"]
                     },
                     A: function (t, e) {
                         return e.x = t[5], e.y = t[6], ["A", t[0], t[1], t[2], t[3], t[4], t[5], t[6]]
                     }
                 }, t = "mlhvqtcsaz".split(""), e = 0, i = t.length; e < i; ++e) l[t[e]] = function (n) {
                 return function (t, e, i) {
                     if ("H" == n) t[0] = t[0] + e.x;
                     else if ("V" == n) t[0] = t[0] + e.y;
                     else if ("A" == n) t[5] = t[5] + e.x, t[6] = t[6] + e.y;
                     else
                         for (var a = 0, s = t.length; a < s; ++a) t[a] = t[a] + (a % 2 ? e.y : e.x);
                     return l[n](t, e, i)
                 }
             }(t[e].toUpperCase());
             u.PathArray = function (t, e) {
                 u.Array.call(this, t, e || [
                     ["M", 0, 0]
                 ])
             }, u.PathArray.prototype = new u.Array, u.PathArray.prototype.constructor = u.PathArray, u.extend(u.PathArray, {
                 toString: function () {
                     return function (t) {
                         for (var e = 0, i = t.length, a = ""; e < i; e++) a += t[e][0], null != t[e][1] && (a += t[e][1], null != t[e][2] && (a += " ", a += t[e][2], null != t[e][3] && (a += " ", a += t[e][3], a += " ", a += t[e][4], null != t[e][5] && (a += " ", a += t[e][5], a += " ", a += t[e][6], null != t[e][7] && (a += " ", a += t[e][7])))));
                         return a + " "
                     }(this.value)
                 },
                 move: function (t, e) {
                     var i = this.bbox();
                     if (t -= i.x, e -= i.y, !isNaN(t) && !isNaN(e))
                         for (var a, s = this.value.length - 1; 0 <= s; s--) "M" == (a = this.value[s][0]) || "L" == a || "T" == a ? (this.value[s][1] += t, this.value[s][2] += e) : "H" == a ? this.value[s][1] += t : "V" == a ? this.value[s][1] += e : "C" == a || "S" == a || "Q" == a ? (this.value[s][1] += t, this.value[s][2] += e, this.value[s][3] += t, this.value[s][4] += e, "C" == a && (this.value[s][5] += t, this.value[s][6] += e)) : "A" == a && (this.value[s][6] += t, this.value[s][7] += e);
                     return this
                 },
                 size: function (t, e) {
                     var i, a, s = this.bbox();
                     for (i = this.value.length - 1; 0 <= i; i--) "M" == (a = this.value[i][0]) || "L" == a || "T" == a ? (this.value[i][1] = (this.value[i][1] - s.x) * t / s.width + s.x, this.value[i][2] = (this.value[i][2] - s.y) * e / s.height + s.y) : "H" == a ? this.value[i][1] = (this.value[i][1] - s.x) * t / s.width + s.x : "V" == a ? this.value[i][1] = (this.value[i][1] - s.y) * e / s.height + s.y : "C" == a || "S" == a || "Q" == a ? (this.value[i][1] = (this.value[i][1] - s.x) * t / s.width + s.x, this.value[i][2] = (this.value[i][2] - s.y) * e / s.height + s.y, this.value[i][3] = (this.value[i][3] - s.x) * t / s.width + s.x, this.value[i][4] = (this.value[i][4] - s.y) * e / s.height + s.y, "C" == a && (this.value[i][5] = (this.value[i][5] - s.x) * t / s.width + s.x, this.value[i][6] = (this.value[i][6] - s.y) * e / s.height + s.y)) : "A" == a && (this.value[i][1] = this.value[i][1] * t / s.width, this.value[i][2] = this.value[i][2] * e / s.height, this.value[i][6] = (this.value[i][6] - s.x) * t / s.width + s.x, this.value[i][7] = (this.value[i][7] - s.y) * e / s.height + s.y);
                     return this
                 },
                 equalCommands: function (t) {
                     var e, i, a;
                     for (t = new u.PathArray(t), a = this.value.length === t.value.length, e = 0, i = this.value.length; a && e < i; e++) a = this.value[e][0] === t.value[e][0];
                     return a
                 },
                 morph: function (t) {
                     return t = new u.PathArray(t), this.equalCommands(t) ? this.destination = t : this.destination = null, this
                 },
                 at: function (t) {
                     if (!this.destination) return this;
                     var e, i, a, s, n = this.value,
                         r = this.destination.value,
                         o = [],
                         l = new u.PathArray;
                     for (e = 0, i = n.length; e < i; e++) {
                         for (o[e] = [n[e][0]], a = 1, s = n[e].length; a < s; a++) o[e][a] = n[e][a] + (r[e][a] - n[e][a]) * t;
                         "A" === o[e][0] && (o[e][4] = +(0 != o[e][4]), o[e][5] = +(0 != o[e][5]))
                     }
                     return l.value = o, l
                 },
                 parse: function (t) {
                     if (t instanceof u.PathArray) return t.valueOf();
                     var e, i = {
                         M: 2,
                         L: 2,
                         H: 1,
                         V: 1,
                         C: 6,
                         S: 4,
                         Q: 4,
                         T: 2,
                         A: 7,
                         Z: 0
                     };
                     t = "string" == typeof t ? t.replace(u.regex.numbersWithDots, h).replace(u.regex.pathLetters, " $& ").replace(u.regex.hyphen, "$1 -").trim().split(u.regex.delimiter) : t.reduce(function (t, e) {
                         return [].concat.call(t, e)
                     }, []);
                     for (var a = [], s = new u.Point, n = new u.Point, r = 0, o = t.length; u.regex.isPathLetter.test(t[r]) ? (e = t[r], ++r) : "M" == e ? e = "L" : "m" == e && (e = "l"), a.push(l[e].call(null, t.slice(r, r += i[e.toUpperCase()]).map(parseFloat), s, n)), r < o;);
                     return a
                 },
                 bbox: function () {
                     return u.parser.draw || u.prepare(), u.parser.path.setAttribute("d", this.toString()), u.parser.path.getBBox()
                 }
             }), u.Number = u.invent({
                 create: function (t, e) {
                     this.value = 0, this.unit = e || "", "number" == typeof t ? this.value = isNaN(t) ? 0 : isFinite(t) ? t : t < 0 ? -34e37 : 34e37 : "string" == typeof t ? (e = t.match(u.regex.numberAndUnit)) && (this.value = parseFloat(e[1]), "%" == e[5] ? this.value /= 100 : "s" == e[5] && (this.value *= 1e3), this.unit = e[5]) : t instanceof u.Number && (this.value = t.valueOf(), this.unit = t.unit)
                 },
                 extend: {
                     toString: function () {
                         return ("%" == this.unit ? ~~(1e8 * this.value) / 1e6 : "s" == this.unit ? this.value / 1e3 : this.value) + this.unit
                     },
                     toJSON: function () {
                         return this.toString()
                     },
                     valueOf: function () {
                         return this.value
                     },
                     plus: function (t) {
                         return t = new u.Number(t), new u.Number(this + t, this.unit || t.unit)
                     },
                     minus: function (t) {
                         return t = new u.Number(t), new u.Number(this - t, this.unit || t.unit)
                     },
                     times: function (t) {
                         return t = new u.Number(t), new u.Number(this * t, this.unit || t.unit)
                     },
                     divide: function (t) {
                         return t = new u.Number(t), new u.Number(this / t, this.unit || t.unit)
                     },
                     to: function (t) {
                         var e = new u.Number(this);
                         return "string" == typeof t && (e.unit = t), e
                     },
                     morph: function (t) {
                         return this.destination = new u.Number(t), t.relative && (this.destination.value += this.value), this
                     },
                     at: function (t) {
                         return this.destination ? new u.Number(this.destination).minus(this).times(t).plus(this) : this
                     }
                 }
             }), u.Element = u.invent({
                 create: function (t) {
                     this._stroke = u.defaults.attrs.stroke, this._event = null, this.dom = {}, (this.node = t) && (this.type = t.nodeName, (this.node.instance = this)._stroke = t.getAttribute("stroke") || this._stroke)
                 },
                 extend: {
                     x: function (t) {
                         return this.attr("x", t)
                     },
                     y: function (t) {
                         return this.attr("y", t)
                     },
                     cx: function (t) {
                         return null == t ? this.x() + this.width() / 2 : this.x(t - this.width() / 2)
                     },
                     cy: function (t) {
                         return null == t ? this.y() + this.height() / 2 : this.y(t - this.height() / 2)
                     },
                     move: function (t, e) {
                         return this.x(t).y(e)
                     },
                     center: function (t, e) {
                         return this.cx(t).cy(e)
                     },
                     width: function (t) {
                         return this.attr("width", t)
                     },
                     height: function (t) {
                         return this.attr("height", t)
                     },
                     size: function (t, e) {
                         var i = d(this, t, e);
                         return this.width(new u.Number(i.width)).height(new u.Number(i.height))
                     },
                     clone: function (t) {
                         this.writeDataToDom();
                         var e = x(this.node.cloneNode(!0));
                         return t ? t.add(e) : this.after(e), e
                     },
                     remove: function () {
                         return this.parent() && this.parent().removeElement(this), this
                     },
                     replace: function (t) {
                         return this.after(t).remove(), t
                     },
                     addTo: function (t) {
                         return t.put(this)
                     },
                     putIn: function (t) {
                         return t.add(this)
                     },
                     id: function (t) {
                         return this.attr("id", t)
                     },
                     inside: function (t, e) {
                         var i = this.bbox();
                         return t > i.x && e > i.y && t < i.x + i.width && e < i.y + i.height
                     },
                     show: function () {
                         return this.style("display", "")
                     },
                     hide: function () {
                         return this.style("display", "none")
                     },
                     visible: function () {
                         return "none" != this.style("display")
                     },
                     toString: function () {
                         return this.attr("id")
                     },
                     classes: function () {
                         var t = this.attr("class");
                         return null == t ? [] : t.trim().split(u.regex.delimiter)
                     },
                     hasClass: function (t) {
                         return -1 != this.classes().indexOf(t)
                     },
                     addClass: function (t) {
                         if (!this.hasClass(t)) {
                             var e = this.classes();
                             e.push(t), this.attr("class", e.join(" "))
                         }
                         return this
                     },
                     removeClass: function (e) {
                         return this.hasClass(e) && this.attr("class", this.classes().filter(function (t) {
                             return t != e
                         }).join(" ")), this
                     },
                     toggleClass: function (t) {
                         return this.hasClass(t) ? this.removeClass(t) : this.addClass(t)
                     },
                     reference: function (t) {
                         return u.get(this.attr(t))
                     },
                     parent: function (t) {
                         var e = this;
                         if (!e.node.parentNode) return null;
                         if (e = u.adopt(e.node.parentNode), !t) return e;
                         for (; e && e.node instanceof r.SVGElement;) {
                             if ("string" == typeof t ? e.matches(t) : e instanceof t) return e;
                             if (!e.node.parentNode || "#document" == e.node.parentNode.nodeName) return null;
                             e = u.adopt(e.node.parentNode)
                         }
                     },
                     doc: function () {
                         return this instanceof u.Doc ? this : this.parent(u.Doc)
                     },
                     parents: function (t) {
                         var e = [],
                             i = this;
                         do {
                             if (!(i = i.parent(t)) || !i.node) break;
                             e.push(i)
                         } while (i.parent);
                         return e
                     },
                     matches: function (t) {
                         return e = this.node, i = t, (e.matches || e.matchesSelector || e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.oMatchesSelector).call(e, i);
                         var e, i
                     },
                     native: function () {
                         return this.node
                     },
                     svg: function (t) {
                         var e = s.createElement("svg");
                         if (!(t && this instanceof u.Parent)) return e.appendChild(t = s.createElement("svg")), this.writeDataToDom(), t.appendChild(this.node.cloneNode(!0)), e.innerHTML.replace(/^<svg>/, "").replace(/<\/svg>$/, "");
                         e.innerHTML = "<svg>" + t.replace(/\n/, "").replace(/<([\w:-]+)([^<]+?)\/>/g, "<$1$2></$1>") + "</svg>";
                         for (var i = 0, a = e.firstChild.childNodes.length; i < a; i++) this.node.appendChild(e.firstChild.firstChild);
                         return this
                     },
                     writeDataToDom: function () {
                         (this.each || this.lines) && (this.each ? this : this.lines()).each(function () {
                             this.writeDataToDom()
                         });
                         return this.node.removeAttribute("svgjs:data"), Object.keys(this.dom).length && this.node.setAttribute("svgjs:data", JSON.stringify(this.dom)), this
                     },
                     setData: function (t) {
                         return this.dom = t, this
                     },
                     is: function (t) {
                         return this instanceof t
                     }
                 }
             }), u.easing = {
                 "-": function (t) {
                     return t
                 },
                 "<>": function (t) {
                     return -Math.cos(t * Math.PI) / 2 + .5
                 },
                 ">": function (t) {
                     return Math.sin(t * Math.PI / 2)
                 },
                 "<": function (t) {
                     return 1 - Math.cos(t * Math.PI / 2)
                 }
             }, u.morph = function (i) {
                 return function (t, e) {
                     return new u.MorphObj(t, e).at(i)
                 }
             }, u.Situation = u.invent({
                 create: function (t) {
                     this.init = !1, this.reversed = !1, this.reversing = !1, this.duration = new u.Number(t.duration).valueOf(), this.delay = new u.Number(t.delay).valueOf(), this.start = +new Date + this.delay, this.finish = this.start + this.duration, this.ease = t.ease, this.loop = 0, this.loops = !1, this.animations = {}, this.attrs = {}, this.styles = {}, this.transforms = [], this.once = {}
                 }
             }), u.FX = u.invent({
                 create: function (t) {
                     this._target = t, this.situations = [], this.active = !1, this.situation = null, this.paused = !1, this.lastPos = 0, this.pos = 0, this.absPos = 0, this._speed = 1
                 },
                 extend: {
                     animate: function (t, e, i) {
                         "object" === (void 0 === t ? "undefined" : w(t)) && (e = t.ease, i = t.delay, t = t.duration);
                         var a = new u.Situation({
                             duration: t || 1e3,
                             delay: i || 0,
                             ease: u.easing[e || "-"] || e
                         });
                         return this.queue(a), this
                     },
                     delay: function (t) {
                         var e = new u.Situation({
                             duration: t,
                             delay: 0,
                             ease: u.easing["-"]
                         });
                         return this.queue(e)
                     },
                     target: function (t) {
                         return t && t instanceof u.Element ? (this._target = t, this) : this._target
                     },
                     timeToAbsPos: function (t) {
                         return (t - this.situation.start) / (this.situation.duration / this._speed)
                     },
                     absPosToTime: function (t) {
                         return this.situation.duration / this._speed * t + this.situation.start
                     },
                     startAnimFrame: function () {
                         this.stopAnimFrame(), this.animationFrame = r.requestAnimationFrame(function () {
                             this.step()
                         }.bind(this))
                     },
                     stopAnimFrame: function () {
                         r.cancelAnimationFrame(this.animationFrame)
                     },
                     start: function () {
                         return !this.active && this.situation && (this.active = !0, this.startCurrent()), this
                     },
                     startCurrent: function () {
                         return this.situation.start = +new Date + this.situation.delay / this._speed, this.situation.finish = this.situation.start + this.situation.duration / this._speed, this.initAnimations().step()
                     },
                     queue: function (t) {
                         return ("function" == typeof t || t instanceof u.Situation) && this.situations.push(t), this.situation || (this.situation = this.situations.shift()), this
                     },
                     dequeue: function () {
                         return this.stop(), this.situation = this.situations.shift(), this.situation && (this.situation instanceof u.Situation ? this.start() : this.situation.call(this)), this
                     },
                     initAnimations: function () {
                         var t, e, i, a = this.situation;
                         if (a.init) return this;
                         for (t in a.animations)
                             for (i = this.target()[t](), Array.isArray(i) || (i = [i]), Array.isArray(a.animations[t]) || (a.animations[t] = [a.animations[t]]), e = i.length; e--;) a.animations[t][e] instanceof u.Number && (i[e] = new u.Number(i[e])), a.animations[t][e] = i[e].morph(a.animations[t][e]);
                         for (t in a.attrs) a.attrs[t] = new u.MorphObj(this.target().attr(t), a.attrs[t]);
                         for (t in a.styles) a.styles[t] = new u.MorphObj(this.target().style(t), a.styles[t]);
                         return a.initialTransformation = this.target().matrixify(), a.init = !0, this
                     },
                     clearQueue: function () {
                         return this.situations = [], this
                     },
                     clearCurrent: function () {
                         return this.situation = null, this
                     },
                     stop: function (t, e) {
                         var i = this.active;
                         return this.active = !1, e && this.clearQueue(), t && this.situation && (!i && this.startCurrent(), this.atEnd()), this.stopAnimFrame(), this.clearCurrent()
                     },
                     reset: function () {
                         if (this.situation) {
                             var t = this.situation;
                             this.stop(), this.situation = t, this.atStart()
                         }
                         return this
                     },
                     finish: function () {
                         for (this.stop(!0, !1); this.dequeue().situation && this.stop(!0, !1););
                         return this.clearQueue().clearCurrent(), this
                     },
                     atStart: function () {
                         return this.at(0, !0)
                     },
                     atEnd: function () {
                         return !0 === this.situation.loops && (this.situation.loops = this.situation.loop + 1), "number" == typeof this.situation.loops ? this.at(this.situation.loops, !0) : this.at(1, !0)
                     },
                     at: function (t, e) {
                         var i = this.situation.duration / this._speed;
                         return this.absPos = t, e || (this.situation.reversed && (this.absPos = 1 - this.absPos), this.absPos += this.situation.loop), this.situation.start = +new Date - this.absPos * i, this.situation.finish = this.situation.start + i, this.step(!0)
                     },
                     speed: function (t) {
                         return 0 === t ? this.pause() : t ? (this._speed = t, this.at(this.absPos, !0)) : this._speed
                     },
                     loop: function (t, e) {
                         var i = this.last();
                         return i.loops = null == t || t, i.loop = 0, e && (i.reversing = !0), this
                     },
                     pause: function () {
                         return this.paused = !0, this.stopAnimFrame(), this
                     },
                     play: function () {
                         return this.paused ? (this.paused = !1, this.at(this.absPos, !0)) : this
                     },
                     reverse: function (t) {
                         var e = this.last();
                         return e.reversed = void 0 === t ? !e.reversed : t, this
                     },
                     progress: function (t) {
                         return t ? this.situation.ease(this.pos) : this.pos
                     },
                     after: function (i) {
                         var a = this.last();
                         return this.target().on("finished.fx", function t(e) {
                             e.detail.situation == a && (i.call(this, a), this.off("finished.fx", t))
                         }), this._callStart()
                     },
                     during: function (e) {
                         var i = this.last(),
                             t = function (t) {
                                 t.detail.situation == i && e.call(this, t.detail.pos, u.morph(t.detail.pos), t.detail.eased, i)
                             };
                         return this.target().off("during.fx", t).on("during.fx", t), this.after(function () {
                             this.off("during.fx", t)
                         }), this._callStart()
                     },
                     afterAll: function (i) {
                         var t = function t(e) {
                             i.call(this), this.off("allfinished.fx", t)
                         };
                         return this.target().off("allfinished.fx", t).on("allfinished.fx", t), this._callStart()
                     },
                     duringAll: function (e) {
                         var t = function (t) {
                             e.call(this, t.detail.pos, u.morph(t.detail.pos), t.detail.eased, t.detail.situation)
                         };
                         return this.target().off("during.fx", t).on("during.fx", t), this.afterAll(function () {
                             this.off("during.fx", t)
                         }), this._callStart()
                     },
                     last: function () {
                         return this.situations.length ? this.situations[this.situations.length - 1] : this.situation
                     },
                     add: function (t, e, i) {
                         return this.last()[i || "animations"][t] = e, this._callStart()
                     },
                     step: function (t) {
                         var e, i, a;
                         (t || (this.absPos = this.timeToAbsPos(+new Date)), !1 !== this.situation.loops) ? (e = Math.max(this.absPos, 0), i = Math.floor(e), !0 === this.situation.loops || i < this.situation.loops ? (this.pos = e - i, a = this.situation.loop, this.situation.loop = i) : (this.absPos = this.situation.loops, this.pos = 1, a = this.situation.loop - 1, this.situation.loop = this.situation.loops), this.situation.reversing && (this.situation.reversed = this.situation.reversed != Boolean((this.situation.loop - a) % 2))) : (this.absPos = Math.min(this.absPos, 1), this.pos = this.absPos);
                         this.pos < 0 && (this.pos = 0), this.situation.reversed && (this.pos = 1 - this.pos);
                         var s = this.situation.ease(this.pos);
                         for (var n in this.situation.once) n > this.lastPos && n <= s && (this.situation.once[n].call(this.target(), this.pos, s), delete this.situation.once[n]);
                         return this.active && this.target().fire("during", {
                             pos: this.pos,
                             eased: s,
                             fx: this,
                             situation: this.situation
                         }), this.situation && (this.eachAt(), 1 == this.pos && !this.situation.reversed || this.situation.reversed && 0 == this.pos ? (this.stopAnimFrame(), this.target().fire("finished", {
                             fx: this,
                             situation: this.situation
                         }), this.situations.length || (this.target().fire("allfinished"), this.situations.length || (this.target().off(".fx"), this.active = !1)), this.active ? this.dequeue() : this.clearCurrent()) : !this.paused && this.active && this.startAnimFrame(), this.lastPos = s), this
                     },
                     eachAt: function () {
                         var t, e, i, a = this,
                             s = this.target(),
                             n = this.situation;
                         for (t in n.animations) i = [].concat(n.animations[t]).map(function (t) {
                             return "string" != typeof t && t.at ? t.at(n.ease(a.pos), a.pos) : t
                         }), s[t].apply(s, i);
                         for (t in n.attrs) i = [t].concat(n.attrs[t]).map(function (t) {
                             return "string" != typeof t && t.at ? t.at(n.ease(a.pos), a.pos) : t
                         }), s.attr.apply(s, i);
                         for (t in n.styles) i = [t].concat(n.styles[t]).map(function (t) {
                             return "string" != typeof t && t.at ? t.at(n.ease(a.pos), a.pos) : t
                         }), s.style.apply(s, i);
                         if (n.transforms.length) {
                             for (i = n.initialTransformation, t = 0, e = n.transforms.length; t < e; t++) {
                                 var r = n.transforms[t];
                                 r instanceof u.Matrix ? i = r.relative ? i.multiply((new u.Matrix).morph(r).at(n.ease(this.pos))) : i.morph(r).at(n.ease(this.pos)) : (r.relative || r.undo(i.extract()), i = i.multiply(r.at(n.ease(this.pos))))
                             }
                             s.matrix(i)
                         }
                         return this
                     },
                     once: function (t, e, i) {
                         var a = this.last();
                         return i || (t = a.ease(t)), a.once[t] = e, this
                     },
                     _callStart: function () {
                         return setTimeout(function () {
                             this.start()
                         }.bind(this), 0), this
                     }
                 },
                 parent: u.Element,
                 construct: {
                     animate: function (t, e, i) {
                         return (this.fx || (this.fx = new u.FX(this))).animate(t, e, i)
                     },
                     delay: function (t) {
                         return (this.fx || (this.fx = new u.FX(this))).delay(t)
                     },
                     stop: function (t, e) {
                         return this.fx && this.fx.stop(t, e), this
                     },
                     finish: function () {
                         return this.fx && this.fx.finish(), this
                     },
                     pause: function () {
                         return this.fx && this.fx.pause(), this
                     },
                     play: function () {
                         return this.fx && this.fx.play(), this
                     },
                     speed: function (t) {
                         if (this.fx) {
                             if (null == t) return this.fx.speed();
                             this.fx.speed(t)
                         }
                         return this
                     }
                 }
             }), u.MorphObj = u.invent({
                 create: function (t, e) {
                     return u.Color.isColor(e) ? new u.Color(t).morph(e) : u.regex.delimiter.test(t) ? u.regex.pathLetters.test(t) ? new u.PathArray(t).morph(e) : new u.Array(t).morph(e) : u.regex.numberAndUnit.test(e) ? new u.Number(t).morph(e) : (this.value = t, void(this.destination = e))
                 },
                 extend: {
                     at: function (t, e) {
                         return e < 1 ? this.value : this.destination
                     },
                     valueOf: function () {
                         return this.value
                     }
                 }
             }), u.extend(u.FX, {
                 attr: function (t, e, i) {
                     if ("object" === (void 0 === t ? "undefined" : w(t)))
                         for (var a in t) this.attr(a, t[a]);
                     else this.add(t, e, "attrs");
                     return this
                 },
                 style: function (t, e) {
                     if ("object" === (void 0 === t ? "undefined" : w(t)))
                         for (var i in t) this.style(i, t[i]);
                     else this.add(t, e, "styles");
                     return this
                 },
                 x: function (t, e) {
                     if (this.target() instanceof u.G) return this.transform({
                         x: t
                     }, e), this;
                     var i = new u.Number(t);
                     return i.relative = e, this.add("x", i)
                 },
                 y: function (t, e) {
                     if (this.target() instanceof u.G) return this.transform({
                         y: t
                     }, e), this;
                     var i = new u.Number(t);
                     return i.relative = e, this.add("y", i)
                 },
                 cx: function (t) {
                     return this.add("cx", new u.Number(t))
                 },
                 cy: function (t) {
                     return this.add("cy", new u.Number(t))
                 },
                 move: function (t, e) {
                     return this.x(t).y(e)
                 },
                 center: function (t, e) {
                     return this.cx(t).cy(e)
                 },
                 size: function (t, e) {
                     var i;
                     this.target() instanceof u.Text ? this.attr("font-size", t) : (t && e || (i = this.target().bbox()), t || (t = i.width / i.height * e), e || (e = i.height / i.width * t), this.add("width", new u.Number(t)).add("height", new u.Number(e)));
                     return this
                 },
                 width: function (t) {
                     return this.add("width", new u.Number(t))
                 },
                 height: function (t) {
                     return this.add("height", new u.Number(t))
                 },
                 plot: function (t, e, i, a) {
                     return 4 == arguments.length ? this.plot([t, e, i, a]) : this.add("plot", new(this.target().morphArray)(t))
                 },
                 leading: function (t) {
                     return this.target().leading ? this.add("leading", new u.Number(t)) : this
                 },
                 viewbox: function (t, e, i, a) {
                     return this.target() instanceof u.Container && this.add("viewbox", new u.ViewBox(t, e, i, a)), this
                 },
                 update: function (t) {
                     if (this.target() instanceof u.Stop) {
                         if ("number" == typeof t || t instanceof u.Number) return this.update({
                             offset: t,
                             color: arguments[1],
                             opacity: arguments[2]
                         });
                         null != t.opacity && this.attr("stop-opacity", t.opacity), null != t.color && this.attr("stop-color", t.color), null != t.offset && this.attr("offset", t.offset)
                     }
                     return this
                 }
             }), u.Box = u.invent({
                 create: function (t, e, i, a) {
                     if (!("object" !== (void 0 === t ? "undefined" : w(t)) || t instanceof u.Element)) return u.Box.call(this, null != t.left ? t.left : t.x, null != t.top ? t.top : t.y, t.width, t.height);
                     4 == arguments.length && (this.x = t, this.y = e, this.width = i, this.height = a), v(this)
                 },
                 extend: {
                     merge: function (t) {
                         var e = new this.constructor;
                         return e.x = Math.min(this.x, t.x), e.y = Math.min(this.y, t.y), e.width = Math.max(this.x + this.width, t.x + t.width) - e.x, e.height = Math.max(this.y + this.height, t.y + t.height) - e.y, v(e)
                     },
                     transform: function (e) {
                         var t, i = 1 / 0,
                             a = -1 / 0,
                             s = 1 / 0,
                             n = -1 / 0;
                         return [new u.Point(this.x, this.y), new u.Point(this.x2, this.y), new u.Point(this.x, this.y2), new u.Point(this.x2, this.y2)].forEach(function (t) {
                             t = t.transform(e), i = Math.min(i, t.x), a = Math.max(a, t.x), s = Math.min(s, t.y), n = Math.max(n, t.y)
                         }), (t = new this.constructor).x = i, t.width = a - i, t.y = s, t.height = n - s, v(t), t
                     }
                 }
             }), u.BBox = u.invent({
                 create: function (e) {
                     if (u.Box.apply(this, [].slice.call(arguments)), e instanceof u.Element) {
                         var i;
                         try {
                             if (!s.documentElement.contains) {
                                 for (var t = e.node; t.parentNode;) t = t.parentNode;
                                 if (t != s) throw new Error("Element not in the dom")
                             }
                             i = e.node.getBBox()
                         } catch (t) {
                             if (e instanceof u.Shape) {
                                 u.parser.draw || u.prepare();
                                 var a = e.clone(u.parser.draw.instance).show();
                                 i = a.node.getBBox(), a.remove()
                             } else i = {
                                 x: e.node.clientLeft,
                                 y: e.node.clientTop,
                                 width: e.node.clientWidth,
                                 height: e.node.clientHeight
                             }
                         }
                         u.Box.call(this, i)
                     }
                 },
                 inherit: u.Box,
                 parent: u.Element,
                 construct: {
                     bbox: function () {
                         return new u.BBox(this)
                     }
                 }
             }), u.BBox.prototype.constructor = u.BBox, u.extend(u.Element, {
                 tbox: function () {
                     return console.warn("Use of TBox is deprecated and mapped to RBox. Use .rbox() instead."), this.rbox(this.doc())
                 }
             }), u.RBox = u.invent({
                 create: function (t) {
                     u.Box.apply(this, [].slice.call(arguments)), t instanceof u.Element && u.Box.call(this, t.node.getBoundingClientRect())
                 },
                 inherit: u.Box,
                 parent: u.Element,
                 extend: {
                     addOffset: function () {
                         return this.x += r.pageXOffset, this.y += r.pageYOffset, this
                     }
                 },
                 construct: {
                     rbox: function (t) {
                         return t ? new u.RBox(this).transform(t.screenCTM().inverse()) : new u.RBox(this).addOffset()
                     }
                 }
             }), u.RBox.prototype.constructor = u.RBox, u.Matrix = u.invent({
                 create: function (t) {
                     var e, i = p([1, 0, 0, 1, 0, 0]);
                     for (t = t instanceof u.Element ? t.matrixify() : "string" == typeof t ? p(t.split(u.regex.delimiter).map(parseFloat)) : 6 == arguments.length ? p([].slice.call(arguments)) : Array.isArray(t) ? p(t) : "object" === (void 0 === t ? "undefined" : w(t)) ? t : i, e = m.length - 1; 0 <= e; --e) this[m[e]] = null != t[m[e]] ? t[m[e]] : i[m[e]]
                 },
                 extend: {
                     extract: function () {
                         var t = f(this, 0, 1),
                             e = f(this, 1, 0),
                             i = 180 / Math.PI * Math.atan2(t.y, t.x) - 90;
                         return {
                             x: this.e,
                             y: this.f,
                             transformedX: (this.e * Math.cos(i * Math.PI / 180) + this.f * Math.sin(i * Math.PI / 180)) / Math.sqrt(this.a * this.a + this.b * this.b),
                             transformedY: (this.f * Math.cos(i * Math.PI / 180) + this.e * Math.sin(-i * Math.PI / 180)) / Math.sqrt(this.c * this.c + this.d * this.d),
                             skewX: -i,
                             skewY: 180 / Math.PI * Math.atan2(e.y, e.x),
                             scaleX: Math.sqrt(this.a * this.a + this.b * this.b),
                             scaleY: Math.sqrt(this.c * this.c + this.d * this.d),
                             rotation: i,
                             a: this.a,
                             b: this.b,
                             c: this.c,
                             d: this.d,
                             e: this.e,
                             f: this.f,
                             matrix: new u.Matrix(this)
                         }
                     },
                     clone: function () {
                         return new u.Matrix(this)
                     },
                     morph: function (t) {
                         return this.destination = new u.Matrix(t), this
                     },
                     at: function (t) {
                         return this.destination ? new u.Matrix({
                             a: this.a + (this.destination.a - this.a) * t,
                             b: this.b + (this.destination.b - this.b) * t,
                             c: this.c + (this.destination.c - this.c) * t,
                             d: this.d + (this.destination.d - this.d) * t,
                             e: this.e + (this.destination.e - this.e) * t,
                             f: this.f + (this.destination.f - this.f) * t
                         }) : this
                     },
                     multiply: function (t) {
                         return new u.Matrix(this.native().multiply(function (t) {
                             t instanceof u.Matrix || (t = new u.Matrix(t));
                             return t
                         }(t).native()))
                     },
                     inverse: function () {
                         return new u.Matrix(this.native().inverse())
                     },
                     translate: function (t, e) {
                         return new u.Matrix(this.native().translate(t || 0, e || 0))
                     },
                     scale: function (t, e, i, a) {
                         return 1 == arguments.length ? e = t : 3 == arguments.length && (a = i, i = e, e = t), this.around(i, a, new u.Matrix(t, 0, 0, e, 0, 0))
                     },
                     rotate: function (t, e, i) {
                         return t = u.utils.radians(t), this.around(e, i, new u.Matrix(Math.cos(t), Math.sin(t), -Math.sin(t), Math.cos(t), 0, 0))
                     },
                     flip: function (t, e) {
                         return "x" == t ? this.scale(-1, 1, e, 0) : "y" == t ? this.scale(1, -1, 0, e) : this.scale(-1, -1, t, null != e ? e : t)
                     },
                     skew: function (t, e, i, a) {
                         return 1 == arguments.length ? e = t : 3 == arguments.length && (a = i, i = e, e = t), t = u.utils.radians(t), e = u.utils.radians(e), this.around(i, a, new u.Matrix(1, Math.tan(e), Math.tan(t), 1, 0, 0))
                     },
                     skewX: function (t, e, i) {
                         return this.skew(t, 0, e, i)
                     },
                     skewY: function (t, e, i) {
                         return this.skew(0, t, e, i)
                     },
                     around: function (t, e, i) {
                         return this.multiply(new u.Matrix(1, 0, 0, 1, t || 0, e || 0)).multiply(i).multiply(new u.Matrix(1, 0, 0, 1, -t || 0, -e || 0))
                     },
                     native: function () {
                         for (var t = u.parser.native.createSVGMatrix(), e = m.length - 1; 0 <= e; e--) t[m[e]] = this[m[e]];
                         return t
                     },
                     toString: function () {
                         return "matrix(" + b(this.a) + "," + b(this.b) + "," + b(this.c) + "," + b(this.d) + "," + b(this.e) + "," + b(this.f) + ")"
                     }
                 },
                 parent: u.Element,
                 construct: {
                     ctm: function () {
                         return new u.Matrix(this.node.getCTM())
                     },
                     screenCTM: function () {
                         if (this instanceof u.Nested) {
                             var t = this.rect(1, 1),
                                 e = t.node.getScreenCTM();
                             return t.remove(), new u.Matrix(e)
                         }
                         return new u.Matrix(this.node.getScreenCTM())
                     }
                 }
             }), u.Point = u.invent({
                 create: function (t, e) {
                     var i;
                     i = Array.isArray(t) ? {
                         x: t[0],
                         y: t[1]
                     } : "object" === (void 0 === t ? "undefined" : w(t)) ? {
                         x: t.x,
                         y: t.y
                     } : null != t ? {
                         x: t,
                         y: null != e ? e : t
                     } : {
                         x: 0,
                         y: 0
                     }, this.x = i.x, this.y = i.y
                 },
                 extend: {
                     clone: function () {
                         return new u.Point(this)
                     },
                     morph: function (t, e) {
                         return this.destination = new u.Point(t, e), this
                     },
                     at: function (t) {
                         return this.destination ? new u.Point({
                             x: this.x + (this.destination.x - this.x) * t,
                             y: this.y + (this.destination.y - this.y) * t
                         }) : this
                     },
                     native: function () {
                         var t = u.parser.native.createSVGPoint();
                         return t.x = this.x, t.y = this.y, t
                     },
                     transform: function (t) {
                         return new u.Point(this.native().matrixTransform(t.native()))
                     }
                 }
             }), u.extend(u.Element, {
                 point: function (t, e) {
                     return new u.Point(t, e).transform(this.screenCTM().inverse())
                 }
             }), u.extend(u.Element, {
                 attr: function (t, e, i) {
                     if (null == t) {
                         for (t = {}, i = (e = this.node.attributes).length - 1; 0 <= i; i--) t[e[i].nodeName] = u.regex.isNumber.test(e[i].nodeValue) ? parseFloat(e[i].nodeValue) : e[i].nodeValue;
                         return t
                     }
                     if ("object" === (void 0 === t ? "undefined" : w(t)))
                         for (e in t) this.attr(e, t[e]);
                     else if (null === e) this.node.removeAttribute(t);
                     else {
                         if (null == e) return null == (e = this.node.getAttribute(t)) ? u.defaults.attrs[t] : u.regex.isNumber.test(e) ? parseFloat(e) : e;
                         "stroke-width" == t ? this.attr("stroke", 0 < parseFloat(e) ? this._stroke : null) : "stroke" == t && (this._stroke = e), "fill" != t && "stroke" != t || (u.regex.isImage.test(e) && (e = this.doc().defs().image(e, 0, 0)), e instanceof u.Image && (e = this.doc().defs().pattern(0, 0, function () {
                             this.add(e)
                         }))), "number" == typeof e ? e = new u.Number(e) : u.Color.isColor(e) ? e = new u.Color(e) : Array.isArray(e) && (e = new u.Array(e)), "leading" == t ? this.leading && this.leading(e) : "string" == typeof i ? this.node.setAttributeNS(i, t, e.toString()) : this.node.setAttribute(t, e.toString()), !this.rebuild || "font-size" != t && "x" != t || this.rebuild(t, e)
                     }
                     return this
                 }
             }), u.extend(u.Element, {
                 transform: function (t, e) {
                     var i, a;
                     if ("object" !== (void 0 === t ? "undefined" : w(t))) return i = new u.Matrix(this).extract(), "string" == typeof t ? i[t] : i;
                     if (i = new u.Matrix(this), e = !!e || !!t.relative, null != t.a) i = e ? i.multiply(new u.Matrix(t)) : new u.Matrix(t);
                     else if (null != t.rotation) g(t, this), i = e ? i.rotate(t.rotation, t.cx, t.cy) : i.rotate(t.rotation - i.extract().rotation, t.cx, t.cy);
                     else if (null != t.scale || null != t.scaleX || null != t.scaleY) {
                         if (g(t, this), t.scaleX = null != t.scale ? t.scale : null != t.scaleX ? t.scaleX : 1, t.scaleY = null != t.scale ? t.scale : null != t.scaleY ? t.scaleY : 1, !e) {
                             var s = i.extract();
                             t.scaleX = 1 * t.scaleX / s.scaleX, t.scaleY = 1 * t.scaleY / s.scaleY
                         }
                         i = i.scale(t.scaleX, t.scaleY, t.cx, t.cy)
                     } else if (null != t.skew || null != t.skewX || null != t.skewY) {
                         if (g(t, this), t.skewX = null != t.skew ? t.skew : null != t.skewX ? t.skewX : 0, t.skewY = null != t.skew ? t.skew : null != t.skewY ? t.skewY : 0, !e) {
                             s = i.extract();
                             i = i.multiply((new u.Matrix).skew(s.skewX, s.skewY, t.cx, t.cy).inverse())
                         }
                         i = i.skew(t.skewX, t.skewY, t.cx, t.cy)
                     } else t.flip ? ("x" == t.flip || "y" == t.flip ? t.offset = null == t.offset ? this.bbox()["c" + t.flip] : t.offset : null == t.offset ? (a = this.bbox(), t.flip = a.cx, t.offset = a.cy) : t.flip = t.offset, i = (new u.Matrix).flip(t.flip, t.offset)) : null == t.x && null == t.y || (e ? i = i.translate(t.x, t.y) : (null != t.x && (i.e = t.x), null != t.y && (i.f = t.y)));
                     return this.attr("transform", i)
                 }
             }), u.extend(u.FX, {
                 transform: function (t, e) {
                     var i, a, s = this.target();
                     return "object" !== (void 0 === t ? "undefined" : w(t)) ? (i = new u.Matrix(s).extract(), "string" == typeof t ? i[t] : i) : (e = !!e || !!t.relative, null != t.a ? i = new u.Matrix(t) : null != t.rotation ? (g(t, s), i = new u.Rotate(t.rotation, t.cx, t.cy)) : null != t.scale || null != t.scaleX || null != t.scaleY ? (g(t, s), t.scaleX = null != t.scale ? t.scale : null != t.scaleX ? t.scaleX : 1, t.scaleY = null != t.scale ? t.scale : null != t.scaleY ? t.scaleY : 1, i = new u.Scale(t.scaleX, t.scaleY, t.cx, t.cy)) : null != t.skewX || null != t.skewY ? (g(t, s), t.skewX = null != t.skewX ? t.skewX : 0, t.skewY = null != t.skewY ? t.skewY : 0, i = new u.Skew(t.skewX, t.skewY, t.cx, t.cy)) : t.flip ? ("x" == t.flip || "y" == t.flip ? t.offset = null == t.offset ? s.bbox()["c" + t.flip] : t.offset : null == t.offset ? (a = s.bbox(), t.flip = a.cx, t.offset = a.cy) : t.flip = t.offset, i = (new u.Matrix).flip(t.flip, t.offset)) : null == t.x && null == t.y || (i = new u.Translate(t.x, t.y)), i ? (i.relative = e, this.last().transforms.push(i), this._callStart()) : this)
                 }
             }), u.extend(u.Element, {
                 untransform: function () {
                     return this.attr("transform", null)
                 },
                 matrixify: function () {
                     return (this.attr("transform") || "").split(u.regex.transforms).slice(0, -1).map(function (t) {
                         var e = t.trim().split("(");
                         return [e[0], e[1].split(u.regex.delimiter).map(function (t) {
                             return parseFloat(t)
                         })]
                     }).reduce(function (t, e) {
                         return "matrix" == e[0] ? t.multiply(p(e[1])) : t[e[0]].apply(t, e[1])
                     }, new u.Matrix)
                 },
                 toParent: function (t) {
                     if (this == t) return this;
                     var e = this.screenCTM(),
                         i = t.screenCTM().inverse();
                     return this.addTo(t).untransform().transform(i.multiply(e)), this
                 },
                 toDoc: function () {
                     return this.toParent(this.doc())
                 }
             }), u.Transformation = u.invent({
                 create: function (t, e) {
                     if (1 < arguments.length && "boolean" != typeof e) return this.constructor.call(this, [].slice.call(arguments));
                     if (Array.isArray(t))
                         for (var i = 0, a = this.arguments.length; i < a; ++i) this[this.arguments[i]] = t[i];
                     else if ("object" === (void 0 === t ? "undefined" : w(t)))
                         for (i = 0, a = this.arguments.length; i < a; ++i) this[this.arguments[i]] = t[this.arguments[i]];
                     !(this.inversed = !1) === e && (this.inversed = !0)
                 },
                 extend: {
                     arguments: [],
                     method: "",
                     at: function (t) {
                         for (var e = [], i = 0, a = this.arguments.length; i < a; ++i) e.push(this[this.arguments[i]]);
                         var s = this._undo || new u.Matrix;
                         return s = (new u.Matrix).morph(u.Matrix.prototype[this.method].apply(s, e)).at(t), this.inversed ? s.inverse() : s
                     },
                     undo: function (t) {
                         for (var e = 0, i = this.arguments.length; e < i; ++e) t[this.arguments[e]] = void 0 === this[this.arguments[e]] ? 0 : t[this.arguments[e]];
                         return t.cx = this.cx, t.cy = this.cy, this._undo = new(u[o(this.method)])(t, !0).at(1), this
                     }
                 }
             }), u.Translate = u.invent({
                 parent: u.Matrix,
                 inherit: u.Transformation,
                 create: function (t, e) {
                     this.constructor.apply(this, [].slice.call(arguments))
                 },
                 extend: {
                     arguments: ["transformedX", "transformedY"],
                     method: "translate"
                 }
             }), u.Rotate = u.invent({
                 parent: u.Matrix,
                 inherit: u.Transformation,
                 create: function (t, e) {
                     this.constructor.apply(this, [].slice.call(arguments))
                 },
                 extend: {
                     arguments: ["rotation", "cx", "cy"],
                     method: "rotate",
                     at: function (t) {
                         var e = (new u.Matrix).rotate((new u.Number).morph(this.rotation - (this._undo ? this._undo.rotation : 0)).at(t), this.cx, this.cy);
                         return this.inversed ? e.inverse() : e
                     },
                     undo: function (t) {
                         return this._undo = t, this
                     }
                 }
             }), u.Scale = u.invent({
                 parent: u.Matrix,
                 inherit: u.Transformation,
                 create: function (t, e) {
                     this.constructor.apply(this, [].slice.call(arguments))
                 },
                 extend: {
                     arguments: ["scaleX", "scaleY", "cx", "cy"],
                     method: "scale"
                 }
             }), u.Skew = u.invent({
                 parent: u.Matrix,
                 inherit: u.Transformation,
                 create: function (t, e) {
                     this.constructor.apply(this, [].slice.call(arguments))
                 },
                 extend: {
                     arguments: ["skewX", "skewY", "cx", "cy"],
                     method: "skew"
                 }
             }), u.extend(u.Element, {
                 style: function (t, e) {
                     if (0 == arguments.length) return this.node.style.cssText || "";
                     if (arguments.length < 2)
                         if ("object" === (void 0 === t ? "undefined" : w(t)))
                             for (e in t) this.style(e, t[e]);
                         else {
                             if (!u.regex.isCss.test(t)) return this.node.style[n(t)];
                             for (t = t.split(/\s*;\s*/).filter(function (t) {
                                     return !!t
                                 }).map(function (t) {
                                     return t.split(/\s*:\s*/)
                                 }); e = t.pop();) this.style(e[0], e[1])
                         }
                     else this.node.style[n(t)] = null === e || u.regex.isBlank.test(e) ? "" : e;
                     return this
                 }
             }), u.Parent = u.invent({
                 create: function (t) {
                     this.constructor.call(this, t)
                 },
                 inherit: u.Element,
                 extend: {
                     children: function () {
                         return u.utils.map(u.utils.filterSVGElements(this.node.childNodes), function (t) {
                             return u.adopt(t)
                         })
                     },
                     add: function (t, e) {
                         return null == e ? this.node.appendChild(t.node) : t.node != this.node.childNodes[e] && this.node.insertBefore(t.node, this.node.childNodes[e]), this
                     },
                     put: function (t, e) {
                         return this.add(t, e), t
                     },
                     has: function (t) {
                         return 0 <= this.index(t)
                     },
                     index: function (t) {
                         return [].slice.call(this.node.childNodes).indexOf(t.node)
                     },
                     get: function (t) {
                         return u.adopt(this.node.childNodes[t])
                     },
                     first: function () {
                         return this.get(0)
                     },
                     last: function () {
                         return this.get(this.node.childNodes.length - 1)
                     },
                     each: function (t, e) {
                         var i, a, s = this.children();
                         for (i = 0, a = s.length; i < a; i++) s[i] instanceof u.Element && t.apply(s[i], [i, s]), e && s[i] instanceof u.Container && s[i].each(t, e);
                         return this
                     },
                     removeElement: function (t) {
                         return this.node.removeChild(t.node), this
                     },
                     clear: function () {
                         for (; this.node.hasChildNodes();) this.node.removeChild(this.node.lastChild);
                         return delete this._defs, this
                     },
                     defs: function () {
                         return this.doc().defs()
                     }
                 }
             }), u.extend(u.Parent, {
                 ungroup: function (t, e) {
                     return 0 === e || this instanceof u.Defs || this.node == u.parser.draw || (t = t || (this instanceof u.Doc ? this : this.parent(u.Parent)), e = e || 1 / 0, this.each(function () {
                         return this instanceof u.Defs ? this : this instanceof u.Parent ? this.ungroup(t, e - 1) : this.toParent(t)
                     }), this.node.firstChild || this.remove()), this
                 },
                 flatten: function (t, e) {
                     return this.ungroup(t, e)
                 }
             }), u.Container = u.invent({
                 create: function (t) {
                     this.constructor.call(this, t)
                 },
                 inherit: u.Parent
             }), u.ViewBox = u.invent({
                 create: function (t) {
                     var e, i, a, s, n, r, o, l = 1,
                         h = 1,
                         c = /[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?/gi;
                     if (t instanceof u.Element) {
                         for (n = ((o = r = t).attr("viewBox") || "").match(c), t.bbox, a = new u.Number(t.width()), s = new u.Number(t.height());
                             "%" == a.unit;) l *= a.value, a = new u.Number(r instanceof u.Doc ? r.parent().offsetWidth : r.parent().width()), r = r.parent();
                         for (;
                             "%" == s.unit;) h *= s.value, s = new u.Number(o instanceof u.Doc ? o.parent().offsetHeight : o.parent().height()), o = o.parent();
                         this.x = 0, this.y = 0, this.width = a * l, this.height = s * h, this.zoom = 1, n && (e = parseFloat(n[0]), i = parseFloat(n[1]), a = parseFloat(n[2]), s = parseFloat(n[3]), this.zoom = this.width / this.height > a / s ? this.height / s : this.width / a, this.x = e, this.y = i, this.width = a, this.height = s)
                     } else t = "string" == typeof t ? t.match(c).map(function (t) {
                         return parseFloat(t)
                     }) : Array.isArray(t) ? t : "object" === (void 0 === t ? "undefined" : w(t)) ? [t.x, t.y, t.width, t.height] : 4 == arguments.length ? [].slice.call(arguments) : [0, 0, 0, 0], this.x = t[0], this.y = t[1], this.width = t[2], this.height = t[3]
                 },
                 extend: {
                     toString: function () {
                         return this.x + " " + this.y + " " + this.width + " " + this.height
                     },
                     morph: function (t, e, i, a) {
                         return this.destination = new u.ViewBox(t, e, i, a), this
                     },
                     at: function (t) {
                         return this.destination ? new u.ViewBox([this.x + (this.destination.x - this.x) * t, this.y + (this.destination.y - this.y) * t, this.width + (this.destination.width - this.width) * t, this.height + (this.destination.height - this.height) * t]) : this
                     }
                 },
                 parent: u.Container,
                 construct: {
                     viewbox: function (t, e, i, a) {
                         return 0 == arguments.length ? new u.ViewBox(this) : this.attr("viewBox", new u.ViewBox(t, e, i, a))
                     }
                 }
             }), ["click", "dblclick", "mousedown", "mouseup", "mouseover", "mouseout", "mousemove", "touchstart", "touchmove", "touchleave", "touchend", "touchcancel"].forEach(function (e) {
                 u.Element.prototype[e] = function (t) {
                     return u.on(this.node, e, t), this
                 }
             }), u.listeners = [], u.handlerMap = [], u.listenerId = 0, u.on = function (t, e, i, a, s) {
                 var n = i.bind(a || t.instance || t),
                     r = (u.handlerMap.indexOf(t) + 1 || u.handlerMap.push(t)) - 1,
                     o = e.split(".")[0],
                     l = e.split(".")[1] || "*";
                 u.listeners[r] = u.listeners[r] || {}, u.listeners[r][o] = u.listeners[r][o] || {}, u.listeners[r][o][l] = u.listeners[r][o][l] || {}, i._svgjsListenerId || (i._svgjsListenerId = ++u.listenerId), u.listeners[r][o][l][i._svgjsListenerId] = n, t.addEventListener(o, n, s || !1)
             }, u.off = function (t, e, i) {
                 var a = u.handlerMap.indexOf(t),
                     s = e && e.split(".")[0],
                     n = e && e.split(".")[1],
                     r = "";
                 if (-1 != a)
                     if (i) {
                         if ("function" == typeof i && (i = i._svgjsListenerId), !i) return;
                         u.listeners[a][s] && u.listeners[a][s][n || "*"] && (t.removeEventListener(s, u.listeners[a][s][n || "*"][i], !1), delete u.listeners[a][s][n || "*"][i])
                     } else if (n && s) {
                     if (u.listeners[a][s] && u.listeners[a][s][n]) {
                         for (i in u.listeners[a][s][n]) u.off(t, [s, n].join("."), i);
                         delete u.listeners[a][s][n]
                     }
                 } else if (n)
                     for (e in u.listeners[a])
                         for (r in u.listeners[a][e]) n === r && u.off(t, [e, n].join("."));
                 else if (s) {
                     if (u.listeners[a][s]) {
                         for (r in u.listeners[a][s]) u.off(t, [s, r].join("."));
                         delete u.listeners[a][s]
                     }
                 } else {
                     for (e in u.listeners[a]) u.off(t, e);
                     delete u.listeners[a], delete u.handlerMap[a]
                 }
             }, u.extend(u.Element, {
                 on: function (t, e, i, a) {
                     return u.on(this.node, t, e, i, a), this
                 },
                 off: function (t, e) {
                     return u.off(this.node, t, e), this
                 },
                 fire: function (t, e) {
                     return t instanceof r.Event ? this.node.dispatchEvent(t) : this.node.dispatchEvent(t = new u.CustomEvent(t, {
                         detail: e,
                         cancelable: !0
                     })), this._event = t, this
                 },
                 event: function () {
                     return this._event
                 }
             }), u.Defs = u.invent({
                 create: "defs",
                 inherit: u.Container
             }), u.G = u.invent({
                 create: "g",
                 inherit: u.Container,
                 extend: {
                     x: function (t) {
                         return null == t ? this.transform("x") : this.transform({
                             x: t - this.x()
                         }, !0)
                     },
                     y: function (t) {
                         return null == t ? this.transform("y") : this.transform({
                             y: t - this.y()
                         }, !0)
                     },
                     cx: function (t) {
                         return null == t ? this.gbox().cx : this.x(t - this.gbox().width / 2)
                     },
                     cy: function (t) {
                         return null == t ? this.gbox().cy : this.y(t - this.gbox().height / 2)
                     },
                     gbox: function () {
                         var t = this.bbox(),
                             e = this.transform();
                         return t.x += e.x, t.x2 += e.x, t.cx += e.x, t.y += e.y, t.y2 += e.y, t.cy += e.y, t
                     }
                 },
                 construct: {
                     group: function () {
                         return this.put(new u.G)
                     }
                 }
             }), u.Doc = u.invent({
                 create: function (t) {
                     t && ("svg" == (t = "string" == typeof t ? s.getElementById(t) : t).nodeName ? this.constructor.call(this, t) : (this.constructor.call(this, u.create("svg")), t.appendChild(this.node), this.size("100%", "100%")), this.namespace().defs())
                 },
                 inherit: u.Container,
                 extend: {
                     namespace: function () {
                         return this.attr({
                             xmlns: u.ns,
                             version: "1.1"
                         }).attr("xmlns:xlink", u.xlink, u.xmlns).attr("xmlns:svgjs", u.svgjs, u.xmlns)
                     },
                     defs: function () {
                         var t;
                         this._defs || ((t = this.node.getElementsByTagName("defs")[0]) ? this._defs = u.adopt(t) : this._defs = new u.Defs, this.node.appendChild(this._defs.node));
                         return this._defs
                     },
                     parent: function () {
                         return this.node.parentNode && "#document" != this.node.parentNode.nodeName ? this.node.parentNode : null
                     },
                     spof: function () {
                         var t = this.node.getScreenCTM();
                         return t && this.style("left", -t.e % 1 + "px").style("top", -t.f % 1 + "px"), this
                     },
                     remove: function () {
                         return this.parent() && this.parent().removeChild(this.node), this
                     },
                     clear: function () {
                         for (; this.node.hasChildNodes();) this.node.removeChild(this.node.lastChild);
                         return delete this._defs, u.parser.draw && !u.parser.draw.parentNode && this.node.appendChild(u.parser.draw), this
                     },
                     clone: function (t) {
                         this.writeDataToDom();
                         var e = this.node,
                             i = x(e.cloneNode(!0));
                         return t ? (t.node || t).appendChild(i.node) : e.parentNode.insertBefore(i.node, e.nextSibling), i
                     }
                 }
             }), u.extend(u.Element, {
                 siblings: function () {
                     return this.parent().children()
                 },
                 position: function () {
                     return this.parent().index(this)
                 },
                 next: function () {
                     return this.siblings()[this.position() + 1]
                 },
                 previous: function () {
                     return this.siblings()[this.position() - 1]
                 },
                 forward: function () {
                     var t = this.position() + 1,
                         e = this.parent();
                     return e.removeElement(this).add(this, t), e instanceof u.Doc && e.node.appendChild(e.defs().node), this
                 },
                 backward: function () {
                     var t = this.position();
                     return 0 < t && this.parent().removeElement(this).add(this, t - 1), this
                 },
                 front: function () {
                     var t = this.parent();
                     return t.node.appendChild(this.node), t instanceof u.Doc && t.node.appendChild(t.defs().node), this
                 },
                 back: function () {
                     return 0 < this.position() && this.parent().removeElement(this).add(this, 0), this
                 },
                 before: function (t) {
                     t.remove();
                     var e = this.position();
                     return this.parent().add(t, e), this
                 },
                 after: function (t) {
                     t.remove();
                     var e = this.position();
                     return this.parent().add(t, e + 1), this
                 }
             }), u.Mask = u.invent({
                 create: function () {
                     this.constructor.call(this, u.create("mask")), this.targets = []
                 },
                 inherit: u.Container,
                 extend: {
                     remove: function () {
                         for (var t = this.targets.length - 1; 0 <= t; t--) this.targets[t] && this.targets[t].unmask();
                         return this.targets = [], u.Element.prototype.remove.call(this), this
                     }
                 },
                 construct: {
                     mask: function () {
                         return this.defs().put(new u.Mask)
                     }
                 }
             }), u.extend(u.Element, {
                 maskWith: function (t) {
                     return this.masker = t instanceof u.Mask ? t : this.parent().mask().add(t), this.masker.targets.push(this), this.attr("mask", 'url("#' + this.masker.attr("id") + '")')
                 },
                 unmask: function () {
                     return delete this.masker, this.attr("mask", null)
                 }
             }), u.ClipPath = u.invent({
                 create: function () {
                     this.constructor.call(this, u.create("clipPath")), this.targets = []
                 },
                 inherit: u.Container,
                 extend: {
                     remove: function () {
                         for (var t = this.targets.length - 1; 0 <= t; t--) this.targets[t] && this.targets[t].unclip();
                         return this.targets = [], this.parent().removeElement(this), this
                     }
                 },
                 construct: {
                     clip: function () {
                         return this.defs().put(new u.ClipPath)
                     }
                 }
             }), u.extend(u.Element, {
                 clipWith: function (t) {
                     return this.clipper = t instanceof u.ClipPath ? t : this.parent().clip().add(t), this.clipper.targets.push(this), this.attr("clip-path", 'url("#' + this.clipper.attr("id") + '")')
                 },
                 unclip: function () {
                     return delete this.clipper, this.attr("clip-path", null)
                 }
             }), u.Gradient = u.invent({
                 create: function (t) {
                     this.constructor.call(this, u.create(t + "Gradient")), this.type = t
                 },
                 inherit: u.Container,
                 extend: {
                     at: function (t, e, i) {
                         return this.put(new u.Stop).update(t, e, i)
                     },
                     update: function (t) {
                         return this.clear(), "function" == typeof t && t.call(this, this), this
                     },
                     fill: function () {
                         return "url(#" + this.id() + ")"
                     },
                     toString: function () {
                         return this.fill()
                     },
                     attr: function (t, e, i) {
                         return "transform" == t && (t = "gradientTransform"), u.Container.prototype.attr.call(this, t, e, i)
                     }
                 },
                 construct: {
                     gradient: function (t, e) {
                         return this.defs().gradient(t, e)
                     }
                 }
             }), u.extend(u.Gradient, u.FX, {
                 from: function (t, e) {
                     return "radial" == (this._target || this).type ? this.attr({
                         fx: new u.Number(t),
                         fy: new u.Number(e)
                     }) : this.attr({
                         x1: new u.Number(t),
                         y1: new u.Number(e)
                     })
                 },
                 to: function (t, e) {
                     return "radial" == (this._target || this).type ? this.attr({
                         cx: new u.Number(t),
                         cy: new u.Number(e)
                     }) : this.attr({
                         x2: new u.Number(t),
                         y2: new u.Number(e)
                     })
                 }
             }), u.extend(u.Defs, {
                 gradient: function (t, e) {
                     return this.put(new u.Gradient(t)).update(e)
                 }
             }), u.Stop = u.invent({
                 create: "stop",
                 inherit: u.Element,
                 extend: {
                     update: function (t) {
                         return ("number" == typeof t || t instanceof u.Number) && (t = {
                             offset: arguments[0],
                             color: arguments[1],
                             opacity: arguments[2]
                         }), null != t.opacity && this.attr("stop-opacity", t.opacity), null != t.color && this.attr("stop-color", t.color), null != t.offset && this.attr("offset", new u.Number(t.offset)), this
                     }
                 }
             }), u.Pattern = u.invent({
                 create: "pattern",
                 inherit: u.Container,
                 extend: {
                     fill: function () {
                         return "url(#" + this.id() + ")"
                     },
                     update: function (t) {
                         return this.clear(), "function" == typeof t && t.call(this, this), this
                     },
                     toString: function () {
                         return this.fill()
                     },
                     attr: function (t, e, i) {
                         return "transform" == t && (t = "patternTransform"), u.Container.prototype.attr.call(this, t, e, i)
                     }
                 },
                 construct: {
                     pattern: function (t, e, i) {
                         return this.defs().pattern(t, e, i)
                     }
                 }
             }), u.extend(u.Defs, {
                 pattern: function (t, e, i) {
                     return this.put(new u.Pattern).update(i).attr({
                         x: 0,
                         y: 0,
                         width: t,
                         height: e,
                         patternUnits: "userSpaceOnUse"
                     })
                 }
             }), u.Shape = u.invent({
                 create: function (t) {
                     this.constructor.call(this, t)
                 },
                 inherit: u.Element
             }), u.Bare = u.invent({
                 create: function (t, e) {
                     if (this.constructor.call(this, u.create(t)), e)
                         for (var i in e.prototype) "function" == typeof e.prototype[i] && (this[i] = e.prototype[i])
                 },
                 inherit: u.Element,
                 extend: {
                     words: function (t) {
                         for (; this.node.hasChildNodes();) this.node.removeChild(this.node.lastChild);
                         return this.node.appendChild(s.createTextNode(t)), this
                     }
                 }
             }), u.extend(u.Parent, {
                 element: function (t, e) {
                     return this.put(new u.Bare(t, e))
                 }
             }), u.Symbol = u.invent({
                 create: "symbol",
                 inherit: u.Container,
                 construct: {
                     symbol: function () {
                         return this.put(new u.Symbol)
                     }
                 }
             }), u.Use = u.invent({
                 create: "use",
                 inherit: u.Shape,
                 extend: {
                     element: function (t, e) {
                         return this.attr("href", (e || "") + "#" + t, u.xlink)
                     }
                 },
                 construct: {
                     use: function (t, e) {
                         return this.put(new u.Use).element(t, e)
                     }
                 }
             }), u.Rect = u.invent({
                 create: "rect",
                 inherit: u.Shape,
                 construct: {
                     rect: function (t, e) {
                         return this.put(new u.Rect).size(t, e)
                     }
                 }
             }), u.Circle = u.invent({
                 create: "circle",
                 inherit: u.Shape,
                 construct: {
                     circle: function (t) {
                         return this.put(new u.Circle).rx(new u.Number(t).divide(2)).move(0, 0)
                     }
                 }
             }), u.extend(u.Circle, u.FX, {
                 rx: function (t) {
                     return this.attr("r", t)
                 },
                 ry: function (t) {
                     return this.rx(t)
                 }
             }), u.Ellipse = u.invent({
                 create: "ellipse",
                 inherit: u.Shape,
                 construct: {
                     ellipse: function (t, e) {
                         return this.put(new u.Ellipse).size(t, e).move(0, 0)
                     }
                 }
             }), u.extend(u.Ellipse, u.Rect, u.FX, {
                 rx: function (t) {
                     return this.attr("rx", t)
                 },
                 ry: function (t) {
                     return this.attr("ry", t)
                 }
             }), u.extend(u.Circle, u.Ellipse, {
                 x: function (t) {
                     return null == t ? this.cx() - this.rx() : this.cx(t + this.rx())
                 },
                 y: function (t) {
                     return null == t ? this.cy() - this.ry() : this.cy(t + this.ry())
                 },
                 cx: function (t) {
                     return null == t ? this.attr("cx") : this.attr("cx", t)
                 },
                 cy: function (t) {
                     return null == t ? this.attr("cy") : this.attr("cy", t)
                 },
                 width: function (t) {
                     return null == t ? 2 * this.rx() : this.rx(new u.Number(t).divide(2))
                 },
                 height: function (t) {
                     return null == t ? 2 * this.ry() : this.ry(new u.Number(t).divide(2))
                 },
                 size: function (t, e) {
                     var i = d(this, t, e);
                     return this.rx(new u.Number(i.width).divide(2)).ry(new u.Number(i.height).divide(2))
                 }
             }), u.Line = u.invent({
                 create: "line",
                 inherit: u.Shape,
                 extend: {
                     array: function () {
                         return new u.PointArray([
                             [this.attr("x1"), this.attr("y1")],
                             [this.attr("x2"), this.attr("y2")]
                         ])
                     },
                     plot: function (t, e, i, a) {
                         return null == t ? this.array() : (t = void 0 !== e ? {
                             x1: t,
                             y1: e,
                             x2: i,
                             y2: a
                         } : new u.PointArray(t).toLine(), this.attr(t))
                     },
                     move: function (t, e) {
                         return this.attr(this.array().move(t, e).toLine())
                     },
                     size: function (t, e) {
                         var i = d(this, t, e);
                         return this.attr(this.array().size(i.width, i.height).toLine())
                     }
                 },
                 construct: {
                     line: function (t, e, i, a) {
                         return u.Line.prototype.plot.apply(this.put(new u.Line), null != t ? [t, e, i, a] : [0, 0, 0, 0])
                     }
                 }
             }), u.Polyline = u.invent({
                 create: "polyline",
                 inherit: u.Shape,
                 construct: {
                     polyline: function (t) {
                         return this.put(new u.Polyline).plot(t || new u.PointArray)
                     }
                 }
             }), u.Polygon = u.invent({
                 create: "polygon",
                 inherit: u.Shape,
                 construct: {
                     polygon: function (t) {
                         return this.put(new u.Polygon).plot(t || new u.PointArray)
                     }
                 }
             }), u.extend(u.Polyline, u.Polygon, {
                 array: function () {
                     return this._array || (this._array = new u.PointArray(this.attr("points")))
                 },
                 plot: function (t) {
                     return null == t ? this.array() : this.clear().attr("points", "string" == typeof t ? t : this._array = new u.PointArray(t))
                 },
                 clear: function () {
                     return delete this._array, this
                 },
                 move: function (t, e) {
                     return this.attr("points", this.array().move(t, e))
                 },
                 size: function (t, e) {
                     var i = d(this, t, e);
                     return this.attr("points", this.array().size(i.width, i.height))
                 }
             }), u.extend(u.Line, u.Polyline, u.Polygon, {
                 morphArray: u.PointArray,
                 x: function (t) {
                     return null == t ? this.bbox().x : this.move(t, this.bbox().y)
                 },
                 y: function (t) {
                     return null == t ? this.bbox().y : this.move(this.bbox().x, t)
                 },
                 width: function (t) {
                     var e = this.bbox();
                     return null == t ? e.width : this.size(t, e.height)
                 },
                 height: function (t) {
                     var e = this.bbox();
                     return null == t ? e.height : this.size(e.width, t)
                 }
             }), u.Path = u.invent({
                 create: "path",
                 inherit: u.Shape,
                 extend: {
                     morphArray: u.PathArray,
                     array: function () {
                         return this._array || (this._array = new u.PathArray(this.attr("d")))
                     },
                     plot: function (t) {
                         return null == t ? this.array() : this.clear().attr("d", "string" == typeof t ? t : this._array = new u.PathArray(t))
                     },
                     clear: function () {
                         return delete this._array, this
                     },
                     move: function (t, e) {
                         return this.attr("d", this.array().move(t, e))
                     },
                     x: function (t) {
                         return null == t ? this.bbox().x : this.move(t, this.bbox().y)
                     },
                     y: function (t) {
                         return null == t ? this.bbox().y : this.move(this.bbox().x, t)
                     },
                     size: function (t, e) {
                         var i = d(this, t, e);
                         return this.attr("d", this.array().size(i.width, i.height))
                     },
                     width: function (t) {
                         return null == t ? this.bbox().width : this.size(t, this.bbox().height)
                     },
                     height: function (t) {
                         return null == t ? this.bbox().height : this.size(this.bbox().width, t)
                     }
                 },
                 construct: {
                     path: function (t) {
                         return this.put(new u.Path).plot(t || new u.PathArray)
                     }
                 }
             }), u.Image = u.invent({
                 create: "image",
                 inherit: u.Shape,
                 extend: {
                     load: function (e) {
                         if (!e) return this;
                         var i = this,
                             a = new r.Image;
                         return u.on(a, "load", function () {
                             u.off(a);
                             var t = i.parent(u.Pattern);
                             null !== t && (0 == i.width() && 0 == i.height() && i.size(a.width, a.height), t && 0 == t.width() && 0 == t.height() && t.size(i.width(), i.height()), "function" == typeof i._loaded && i._loaded.call(i, {
                                 width: a.width,
                                 height: a.height,
                                 ratio: a.width / a.height,
                                 url: e
                             }))
                         }), u.on(a, "error", function (t) {
                             u.off(a), "function" == typeof i._error && i._error.call(i, t)
                         }), this.attr("href", a.src = this.src = e, u.xlink)
                     },
                     loaded: function (t) {
                         return this._loaded = t, this
                     },
                     error: function (t) {
                         return this._error = t, this
                     }
                 },
                 construct: {
                     image: function (t, e, i) {
                         return this.put(new u.Image).load(t).size(e || 0, i || e || 0)
                     }
                 }
             }), u.Text = u.invent({
                 create: function () {
                     this.constructor.call(this, u.create("text")), this.dom.leading = new u.Number(1.3), this._rebuild = !0, this._build = !1, this.attr("font-family", u.defaults.attrs["font-family"])
                 },
                 inherit: u.Shape,
                 extend: {
                     x: function (t) {
                         return null == t ? this.attr("x") : this.attr("x", t)
                     },
                     y: function (t) {
                         var e = this.attr("y"),
                             i = "number" == typeof e ? e - this.bbox().y : 0;
                         return null == t ? "number" == typeof e ? e - i : e : this.attr("y", "number" == typeof t.valueOf() ? t + i : t)
                     },
                     cx: function (t) {
                         return null == t ? this.bbox().cx : this.x(t - this.bbox().width / 2)
                     },
                     cy: function (t) {
                         return null == t ? this.bbox().cy : this.y(t - this.bbox().height / 2)
                     },
                     text: function (t) {
                         if (void 0 === t) {
                             t = "";
                             for (var e = this.node.childNodes, i = 0, a = e.length; i < a; ++i) 0 != i && 3 != e[i].nodeType && 1 == u.adopt(e[i]).dom.newLined && (t += "\n"), t += e[i].textContent;
                             return t
                         }
                         if (this.clear().build(!0), "function" == typeof t) t.call(this, this);
                         else {
                             t = t.split("\n");
                             i = 0;
                             for (var s = t.length; i < s; i++) this.tspan(t[i]).newLine()
                         }
                         return this.build(!1).rebuild()
                     },
                     size: function (t) {
                         return this.attr("font-size", t).rebuild()
                     },
                     leading: function (t) {
                         return null == t ? this.dom.leading : (this.dom.leading = new u.Number(t), this.rebuild())
                     },
                     lines: function () {
                         var t = (this.textPath && this.textPath() || this).node,
                             e = u.utils.map(u.utils.filterSVGElements(t.childNodes), function (t) {
                                 return u.adopt(t)
                             });
                         return new u.Set(e)
                     },
                     rebuild: function (t) {
                         if ("boolean" == typeof t && (this._rebuild = t), this._rebuild) {
                             var e = this,
                                 i = 0,
                                 a = this.dom.leading * new u.Number(this.attr("font-size"));
                             this.lines().each(function () {
                                 this.dom.newLined && (e.textPath() || this.attr("x", e.attr("x")), "\n" == this.text() ? i += a : (this.attr("dy", a + i), i = 0))
                             }), this.fire("rebuild")
                         }
                         return this
                     },
                     build: function (t) {
                         return this._build = !!t, this
                     },
                     setData: function (t) {
                         return this.dom = t, this.dom.leading = new u.Number(t.leading || 1.3), this
                     }
                 },
                 construct: {
                     text: function (t) {
                         return this.put(new u.Text).text(t)
                     },
                     plain: function (t) {
                         return this.put(new u.Text).plain(t)
                     }
                 }
             }), u.Tspan = u.invent({
                 create: "tspan",
                 inherit: u.Shape,
                 extend: {
                     text: function (t) {
                         return null == t ? this.node.textContent + (this.dom.newLined ? "\n" : "") : ("function" == typeof t ? t.call(this, this) : this.plain(t), this)
                     },
                     dx: function (t) {
                         return this.attr("dx", t)
                     },
                     dy: function (t) {
                         return this.attr("dy", t)
                     },
                     newLine: function () {
                         var t = this.parent(u.Text);
                         return this.dom.newLined = !0, this.dy(t.dom.leading * t.attr("font-size")).attr("x", t.x())
                     }
                 }
             }), u.extend(u.Text, u.Tspan, {
                 plain: function (t) {
                     return !1 === this._build && this.clear(), this.node.appendChild(s.createTextNode(t)), this
                 },
                 tspan: function (t) {
                     var e = (this.textPath && this.textPath() || this).node,
                         i = new u.Tspan;
                     return !1 === this._build && this.clear(), e.appendChild(i.node), i.text(t)
                 },
                 clear: function () {
                     for (var t = (this.textPath && this.textPath() || this).node; t.hasChildNodes();) t.removeChild(t.lastChild);
                     return this
                 },
                 length: function () {
                     return this.node.getComputedTextLength()
                 }
             }), u.TextPath = u.invent({
                 create: "textPath",
                 inherit: u.Parent,
                 parent: u.Text,
                 construct: {
                     morphArray: u.PathArray,
                     path: function (t) {
                         for (var e = new u.TextPath, i = this.doc().defs().path(t); this.node.hasChildNodes();) e.node.appendChild(this.node.firstChild);
                         return this.node.appendChild(e.node), e.attr("href", "#" + i, u.xlink), this
                     },
                     array: function () {
                         var t = this.track();
                         return t ? t.array() : null
                     },
                     plot: function (t) {
                         var e = this.track(),
                             i = null;
                         return e && (i = e.plot(t)), null == t ? i : this
                     },
                     track: function () {
                         var t = this.textPath();
                         if (t) return t.reference("href")
                     },
                     textPath: function () {
                         if (this.node.firstChild && "textPath" == this.node.firstChild.nodeName) return u.adopt(this.node.firstChild)
                     }
                 }
             }), u.Nested = u.invent({
                 create: function () {
                     this.constructor.call(this, u.create("svg")), this.style("overflow", "visible")
                 },
                 inherit: u.Container,
                 construct: {
                     nested: function () {
                         return this.put(new u.Nested)
                     }
                 }
             }), u.A = u.invent({
                 create: "a",
                 inherit: u.Container,
                 extend: {
                     to: function (t) {
                         return this.attr("href", t, u.xlink)
                     },
                     show: function (t) {
                         return this.attr("show", t, u.xlink)
                     },
                     target: function (t) {
                         return this.attr("target", t)
                     }
                 },
                 construct: {
                     link: function (t) {
                         return this.put(new u.A).to(t)
                     }
                 }
             }), u.extend(u.Element, {
                 linkTo: function (t) {
                     var e = new u.A;
                     return "function" == typeof t ? t.call(e, e) : e.to(t), this.parent().put(e).put(this)
                 }
             }), u.Marker = u.invent({
                 create: "marker",
                 inherit: u.Container,
                 extend: {
                     width: function (t) {
                         return this.attr("markerWidth", t)
                     },
                     height: function (t) {
                         return this.attr("markerHeight", t)
                     },
                     ref: function (t, e) {
                         return this.attr("refX", t).attr("refY", e)
                     },
                     update: function (t) {
                         return this.clear(), "function" == typeof t && t.call(this, this), this
                     },
                     toString: function () {
                         return "url(#" + this.id() + ")"
                     }
                 },
                 construct: {
                     marker: function (t, e, i) {
                         return this.defs().marker(t, e, i)
                     }
                 }
             }), u.extend(u.Defs, {
                 marker: function (t, e, i) {
                     return this.put(new u.Marker).size(t, e).ref(t / 2, e / 2).viewbox(0, 0, t, e).attr("orient", "auto").update(i)
                 }
             }), u.extend(u.Line, u.Polyline, u.Polygon, u.Path, {
                 marker: function (t, e, i, a) {
                     var s = ["marker"];
                     return "all" != t && s.push(t), s = s.join("-"), t = e instanceof u.Marker ? e : this.doc().marker(e, i, a), this.attr(s, t)
                 }
             });
             var a = {
                 stroke: ["color", "width", "opacity", "linecap", "linejoin", "miterlimit", "dasharray", "dashoffset"],
                 fill: ["color", "opacity", "rule"],
                 prefix: function (t, e) {
                     return "color" == e ? t : t + "-" + e
                 }
             };

             function h(t, e, i, a) {
                 return i + a.replace(u.regex.dots, " .")
             }

             function n(t) {
                 return t.toLowerCase().replace(/-(.)/g, function (t, e) {
                     return e.toUpperCase()
                 })
             }

             function o(t) {
                 return t.charAt(0).toUpperCase() + t.slice(1)
             }

             function c(t) {
                 var e = t.toString(16);
                 return 1 == e.length ? "0" + e : e
             }

             function d(t, e, i) {
                 if (null == e || null == i) {
                     var a = t.bbox();
                     null == e ? e = a.width / a.height * i : null == i && (i = a.height / a.width * e)
                 }
                 return {
                     width: e,
                     height: i
                 }
             }

             function f(t, e, i) {
                 return {
                     x: e * t.a + i * t.c + 0,
                     y: e * t.b + i * t.d + 0
                 }
             }

             function p(t) {
                 return {
                     a: t[0],
                     b: t[1],
                     c: t[2],
                     d: t[3],
                     e: t[4],
                     f: t[5]
                 }
             }

             function g(t, e) {
                 t.cx = null == t.cx ? e.bbox().cx : t.cx, t.cy = null == t.cy ? e.bbox().cy : t.cy
             }

             function x(t) {
                 for (var e = t.childNodes.length - 1; 0 <= e; e--) t.childNodes[e] instanceof r.SVGElement && x(t.childNodes[e]);
                 return u.adopt(t).id(u.eid(t.nodeName))
             }

             function v(t) {
                 return null == t.x && (t.x = 0, t.y = 0, t.width = 0, t.height = 0), t.w = t.width, t.h = t.height, t.x2 = t.x + t.width, t.y2 = t.y + t.height, t.cx = t.x + t.width / 2, t.cy = t.y + t.height / 2, t
             }

             function b(t) {
                 return 1e-37 < Math.abs(t) ? t : 0
             } ["fill", "stroke"].forEach(function (e) {
                 var i, t = {};
                 t[e] = function (t) {
                     if (void 0 === t) return this;
                     if ("string" == typeof t || u.Color.isRgb(t) || t && "function" == typeof t.fill) this.attr(e, t);
                     else
                         for (i = a[e].length - 1; 0 <= i; i--) null != t[a[e][i]] && this.attr(a.prefix(e, a[e][i]), t[a[e][i]]);
                     return this
                 }, u.extend(u.Element, u.FX, t)
             }), u.extend(u.Element, u.FX, {
                 rotate: function (t, e, i) {
                     return this.transform({
                         rotation: t,
                         cx: e,
                         cy: i
                     })
                 },
                 skew: function (t, e, i, a) {
                     return 1 == arguments.length || 3 == arguments.length ? this.transform({
                         skew: t,
                         cx: e,
                         cy: i
                     }) : this.transform({
                         skewX: t,
                         skewY: e,
                         cx: i,
                         cy: a
                     })
                 },
                 scale: function (t, e, i, a) {
                     return 1 == arguments.length || 3 == arguments.length ? this.transform({
                         scale: t,
                         cx: e,
                         cy: i
                     }) : this.transform({
                         scaleX: t,
                         scaleY: e,
                         cx: i,
                         cy: a
                     })
                 },
                 translate: function (t, e) {
                     return this.transform({
                         x: t,
                         y: e
                     })
                 },
                 flip: function (t, e) {
                     return e = "number" == typeof t ? t : e, this.transform({
                         flip: t || "both",
                         offset: e
                     })
                 },
                 matrix: function (t) {
                     return this.attr("transform", new u.Matrix(6 == arguments.length ? [].slice.call(arguments) : t))
                 },
                 opacity: function (t) {
                     return this.attr("opacity", t)
                 },
                 dx: function (t) {
                     return this.x(new u.Number(t).plus(this instanceof u.FX ? 0 : this.x()), !0)
                 },
                 dy: function (t) {
                     return this.y(new u.Number(t).plus(this instanceof u.FX ? 0 : this.y()), !0)
                 },
                 dmove: function (t, e) {
                     return this.dx(t).dy(e)
                 }
             }), u.extend(u.Rect, u.Ellipse, u.Circle, u.Gradient, u.FX, {
                 radius: function (t, e) {
                     var i = (this._target || this).type;
                     return "radial" == i || "circle" == i ? this.attr("r", new u.Number(t)) : this.rx(t).ry(null == e ? t : e)
                 }
             }), u.extend(u.Path, {
                 length: function () {
                     return this.node.getTotalLength()
                 },
                 pointAt: function (t) {
                     return this.node.getPointAtLength(t)
                 }
             }), u.extend(u.Parent, u.Text, u.Tspan, u.FX, {
                 font: function (t, e) {
                     if ("object" === (void 0 === t ? "undefined" : w(t)))
                         for (e in t) this.font(e, t[e]);
                     return "leading" == t ? this.leading(e) : "anchor" == t ? this.attr("text-anchor", e) : "size" == t || "family" == t || "weight" == t || "stretch" == t || "variant" == t || "style" == t ? this.attr("font-" + t, e) : this.attr(t, e)
                 }
             }), u.Set = u.invent({
                 create: function (t) {
                     Array.isArray(t) ? this.members = t : this.clear()
                 },
                 extend: {
                     add: function () {
                         var t, e, i = [].slice.call(arguments);
                         for (t = 0, e = i.length; t < e; t++) this.members.push(i[t]);
                         return this
                     },
                     remove: function (t) {
                         var e = this.index(t);
                         return -1 < e && this.members.splice(e, 1), this
                     },
                     each: function (t) {
                         for (var e = 0, i = this.members.length; e < i; e++) t.apply(this.members[e], [e, this.members]);
                         return this
                     },
                     clear: function () {
                         return this.members = [], this
                     },
                     length: function () {
                         return this.members.length
                     },
                     has: function (t) {
                         return 0 <= this.index(t)
                     },
                     index: function (t) {
                         return this.members.indexOf(t)
                     },
                     get: function (t) {
                         return this.members[t]
                     },
                     first: function () {
                         return this.get(0)
                     },
                     last: function () {
                         return this.get(this.members.length - 1)
                     },
                     valueOf: function () {
                         return this.members
                     },
                     bbox: function () {
                         if (0 == this.members.length) return new u.RBox;
                         var t = this.members[0].rbox(this.members[0].doc());
                         return this.each(function () {
                             t = t.merge(this.rbox(this.doc()))
                         }), t
                     }
                 },
                 construct: {
                     set: function (t) {
                         return new u.Set(t)
                     }
                 }
             }), u.FX.Set = u.invent({
                 create: function (t) {
                     this.set = t
                 }
             }), u.Set.inherit = function () {
                 var t = [];
                 for (var e in u.Shape.prototype) "function" == typeof u.Shape.prototype[e] && "function" != typeof u.Set.prototype[e] && t.push(e);
                 for (var e in t.forEach(function (i) {
                         u.Set.prototype[i] = function () {
                             for (var t = 0, e = this.members.length; t < e; t++) this.members[t] && "function" == typeof this.members[t][i] && this.members[t][i].apply(this.members[t], arguments);
                             return "animate" == i ? this.fx || (this.fx = new u.FX.Set(this)) : this
                         }
                     }), t = [], u.FX.prototype) "function" == typeof u.FX.prototype[e] && "function" != typeof u.FX.Set.prototype[e] && t.push(e);
                 t.forEach(function (i) {
                     u.FX.Set.prototype[i] = function () {
                         for (var t = 0, e = this.set.members.length; t < e; t++) this.set.members[t].fx[i].apply(this.set.members[t].fx, arguments);
                         return this
                     }
                 })
             }, u.extend(u.Element, {
                 data: function (e, t, i) {
                     if ("object" === (void 0 === e ? "undefined" : w(e)))
                         for (t in e) this.data(t, e[t]);
                     else if (arguments.length < 2) try {
                         return JSON.parse(this.attr("data-" + e))
                     } catch (t) {
                         return this.attr("data-" + e)
                     } else this.attr("data-" + e, null === t ? null : !0 === i || "string" == typeof t || "number" == typeof t ? t : JSON.stringify(t));
                     return this
                 }
             }), u.extend(u.Element, {
                 remember: function (t, e) {
                     if ("object" === w(t))
                         for (var e in t) this.remember(e, t[e]);
                     else {
                         if (1 == arguments.length) return this.memory()[t];
                         this.memory()[t] = e
                     }
                     return this
                 },
                 forget: function () {
                     if (0 == arguments.length) this._memory = {};
                     else
                         for (var t = arguments.length - 1; 0 <= t; t--) delete this.memory()[arguments[t]];
                     return this
                 },
                 memory: function () {
                     return this._memory || (this._memory = {})
                 }
             }), u.get = function (t) {
                 var e = s.getElementById(function (t) {
                     var e = (t || "").toString().match(u.regex.reference);
                     if (e) return e[1]
                 }(t) || t);
                 return u.adopt(e)
             }, u.select = function (t, e) {
                 return new u.Set(u.utils.map((e || s).querySelectorAll(t), function (t) {
                     return u.adopt(t)
                 }))
             }, u.extend(u.Parent, {
                 select: function (t) {
                     return u.select(t, this.node)
                 }
             });
             var m = "abcdef".split("");
             if ("function" != typeof r.CustomEvent) {
                 var y = function (t, e) {
                     e = e || {
                         bubbles: !1,
                         cancelable: !1,
                         detail: void 0
                     };
                     var i = s.createEvent("CustomEvent");
                     return i.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), i
                 };
                 y.prototype = r.Event.prototype, u.CustomEvent = y
             } else u.CustomEvent = r.CustomEvent;
             return function (s) {
                 for (var n = 0, t = ["moz", "webkit"], e = 0; e < t.length && !r.requestAnimationFrame; ++e) s.requestAnimationFrame = s[t[e] + "RequestAnimationFrame"], s.cancelAnimationFrame = s[t[e] + "CancelAnimationFrame"] || s[t[e] + "CancelRequestAnimationFrame"];
                 s.requestAnimationFrame = s.requestAnimationFrame || function (t) {
                     var e = (new Date).getTime(),
                         i = Math.max(0, 16 - (e - n)),
                         a = s.setTimeout(function () {
                             t(e + i)
                         }, i);
                     return n = e + i, a
                 }, s.cancelAnimationFrame = s.cancelAnimationFrame || s.clearTimeout
             }(r), u
         }, void 0 === (a = function () {
             return n(s, s.document)
         }.call(e, i, e, t)) || (t.exports = a)
     }, function (t, e, i) {
         "use strict";
         "document" in self && ("classList" in document.createElement("_") && (!document.createElementNS || "classList" in document.createElementNS("http://www.w3.org/2000/svg", "g")) || function (t) {
             if ("Element" in t) {
                 var e = "classList",
                     i = "prototype",
                     a = t.Element[i],
                     s = Object,
                     n = String[i].trim || function () {
                         return this.replace(/^\s+|\s+$/g, "")
                     },
                     r = Array[i].indexOf || function (t) {
                         for (var e = 0, i = this.length; e < i; e++)
                             if (e in this && this[e] === t) return e;
                         return -1
                     },
                     o = function (t, e) {
                         this.name = t, this.code = DOMException[t], this.message = e
                     },
                     l = function (t, e) {
                         if ("" === e) throw new o("SYNTAX_ERR", "The token must not be empty.");
                         if (/\s/.test(e)) throw new o("INVALID_CHARACTER_ERR", "The token must not contain space characters.");
                         return r.call(t, e)
                     },
                     h = function (t) {
                         for (var e = n.call(t.getAttribute("class") || ""), i = e ? e.split(/\s+/) : [], a = 0, s = i.length; a < s; a++) this.push(i[a]);
                         this._updateClassName = function () {
                             t.setAttribute("class", this.toString())
                         }
                     },
                     c = h[i] = [],
                     u = function () {
                         return new h(this)
                     };
                 if (o[i] = Error[i], c.item = function (t) {
                         return this[t] || null
                     }, c.contains = function (t) {
                         return ~l(this, t + "")
                     }, c.add = function () {
                         for (var t, e = arguments, i = 0, a = e.length, s = !1; t = e[i] + "", ~l(this, t) || (this.push(t), s = !0), ++i < a;);
                         s && this._updateClassName()
                     }, c.remove = function () {
                         var t, e, i = arguments,
                             a = 0,
                             s = i.length,
                             n = !1;
                         do {
                             for (t = i[a] + "", e = l(this, t); ~e;) this.splice(e, 1), n = !0, e = l(this, t)
                         } while (++a < s);
                         n && this._updateClassName()
                     }, c.toggle = function (t, e) {
                         var i = this.contains(t),
                             a = i ? !0 !== e && "remove" : !1 !== e && "add";
                         return a && this[a](t), !0 === e || !1 === e ? e : !i
                     }, c.replace = function (t, e) {
                         var i = l(t + "");
                         ~i && (this.splice(i, 1, e), this._updateClassName())
                     }, c.toString = function () {
                         return this.join(" ")
                     }, s.defineProperty) {
                     var d = {
                         get: u,
                         enumerable: !0,
                         configurable: !0
                     };
                     try {
                         s.defineProperty(a, e, d)
                     } catch (t) {
                         void 0 !== t.number && -2146823252 !== t.number || (d.enumerable = !1, s.defineProperty(a, e, d))
                     }
                 } else s[i].__defineGetter__ && a.__defineGetter__(e, u)
             }
         }(self), function () {
             var t = document.createElement("_");
             if (t.classList.add("c1", "c2"), !t.classList.contains("c2")) {
                 var e = function (t) {
                     var a = DOMTokenList.prototype[t];
                     DOMTokenList.prototype[t] = function (t) {
                         var e, i = arguments.length;
                         for (e = 0; e < i; e++) t = arguments[e], a.call(this, t)
                     }
                 };
                 e("add"), e("remove")
             }
             if (t.classList.toggle("c3", !1), t.classList.contains("c3")) {
                 var i = DOMTokenList.prototype.toggle;
                 DOMTokenList.prototype.toggle = function (t, e) {
                     return 1 in arguments && !this.contains(t) == !e ? e : i.call(this, t)
                 }
             }
             "replace" in document.createElement("_").classList || (DOMTokenList.prototype.replace = function (t, e) {
                 var i = this.toString().split(" "),
                     a = i.indexOf(t + "");
                 ~a && (i = i.slice(a), this.remove.apply(this, i), this.add(e), this.add.apply(this, i.slice(1)))
             }), t = null
         }())
     }, function (t, e, i) {
         "use strict";
         ! function () {
             var a = !1;

             function s(t) {
                 var e = t.__resizeTriggers__,
                     i = e.firstElementChild,
                     a = e.lastElementChild,
                     s = i.firstElementChild;
                 a.scrollLeft = a.scrollWidth, a.scrollTop = a.scrollHeight, s.style.width = i.offsetWidth + 1 + "px", s.style.height = i.offsetHeight + 1 + "px", i.scrollLeft = i.scrollWidth, i.scrollTop = i.scrollHeight
             }

             function i(e) {
                 var i = this;
                 s(this), this.__resizeRAF__ && r(this.__resizeRAF__), this.__resizeRAF__ = t(function () {
                     var t;
                     ((t = i).offsetWidth != t.__resizeLast__.width || t.offsetHeight != t.__resizeLast__.height) && (i.__resizeLast__.width = i.offsetWidth, i.__resizeLast__.height = i.offsetHeight, i.__resizeListeners__.forEach(function (t) {
                         t.call(e)
                     }))
                 })
             }
             var e, n, t = (e = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (t) {
                     return window.setTimeout(t, 20)
                 }, function (t) {
                     return e(t)
                 }),
                 r = (n = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.clearTimeout, function (t) {
                     return n(t)
                 }),
                 o = !1,
                 l = "",
                 h = "animationstart",
                 c = "Webkit Moz O ms".split(" "),
                 u = "webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),
                 d = document.createElement("fakeelement");
             if (void 0 !== d.style.animationName && (o = !0), !1 === o)
                 for (var f = 0; f < c.length; f++)
                     if (void 0 !== d.style[c[f] + "AnimationName"]) {
                         l = "-" + c[f].toLowerCase() + "-", h = u[f];
                         break
                     } var p = "resizeanim",
                 g = "@" + l + "keyframes " + p + " { from { opacity: 0; } to { opacity: 0; } } ",
                 x = l + "animation: 1ms " + p + "; ";
             window.addResizeListener = function (e, t) {
                 e.__resizeTriggers__ || ("static" == getComputedStyle(e).position && (e.style.position = "relative"), function () {
                     if (!a) {
                         var t = (g || "") + ".resize-triggers { " + (x || "") + 'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',
                             e = document.head || document.getElementsByTagName("head")[0],
                             i = document.createElement("style");
                         i.type = "text/css", i.styleSheet ? i.styleSheet.cssText = t : i.appendChild(document.createTextNode(t)), e.appendChild(i), a = !0
                     }
                 }(), e.__resizeLast__ = {}, e.__resizeListeners__ = [], (e.__resizeTriggers__ = document.createElement("div")).className = "resize-triggers", e.__resizeTriggers__.innerHTML = '<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>', e.appendChild(e.__resizeTriggers__), s(e), e.addEventListener("scroll", i, !0), h && e.__resizeTriggers__.addEventListener(h, function (t) {
                     t.animationName == p && s(e)
                 })), e.__resizeListeners__.push(t)
             }, window.removeResizeListener = function (t, e) {
                 t.__resizeListeners__.splice(t.__resizeListeners__.indexOf(e), 1), t.__resizeListeners__.length || (t.removeEventListener("scroll", i), t.__resizeTriggers__ = !t.removeChild(t.__resizeTriggers__))
             }
         }()
     }, function (t, e, i) {
         (t.exports = i(126)(!1)).push([t.i, '.apexcharts-canvas {\n  position: relative;\n  user-select: none;\n  /* cannot give overflow: hidden as it will crop tooltips which overflow outside chart area */\n}\n\n/* scrollbar is not visible by default for legend, hence forcing the visibility */\n.apexcharts-canvas ::-webkit-scrollbar {\n  -webkit-appearance: none;\n  width: 6px;\n}\n.apexcharts-canvas ::-webkit-scrollbar-thumb {\n  border-radius: 4px;\n  background-color: rgba(0,0,0,.5);\n  box-shadow: 0 0 1px rgba(255,255,255,.5);\n  -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5);\n}\n\n.apexcharts-inner {\n  position: relative;\n}\n\n.legend-mouseover-inactive {\n  transition: 0.15s ease all;\n  opacity: 0.20;\n}\n\n.apexcharts-series-collapsed {\n  opacity: 0;\n}\n\n.apexcharts-gridline, .apexcharts-text {\n  pointer-events: none;\n}\n\n.apexcharts-tooltip {\n  border-radius: 5px;\n  box-shadow: 2px 2px 6px -4px #999;\n  cursor: default;\n  font-size: 14px;\n  left: 62px;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  top: 20px;\n  overflow: hidden;\n  white-space: nowrap;\n  z-index: 12;\n  transition: 0.15s ease all;\n}\n.apexcharts-tooltip.light {\n  border: 1px solid #e3e3e3;\n  background: rgba(255, 255, 255, 0.96);\n}\n.apexcharts-tooltip.dark {\n  color: #fff;\n  background: rgba(30,30,30, 0.8);\n}\n\n.apexcharts-tooltip .apexcharts-marker,\n.apexcharts-area-series .apexcharts-area,\n.apexcharts-line {\n  pointer-events: none;\n}\n\n.apexcharts-tooltip.active {\n  opacity: 1;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-tooltip-title {\n  padding: 6px;\n  font-size: 15px;\n  margin-bottom: 4px;\n}\n.apexcharts-tooltip.light .apexcharts-tooltip-title {\n  background: #ECEFF1;\n  border-bottom: 1px solid #ddd;\n}\n.apexcharts-tooltip.dark .apexcharts-tooltip-title {\n  background: rgba(0, 0, 0, 0.7);\n  border-bottom: 1px solid #222;\n}\n\n.apexcharts-tooltip-text-value,\n.apexcharts-tooltip-text-z-value {\n  display: inline-block;\n  font-weight: 600;\n  margin-left: 5px;\n}\n\n.apexcharts-tooltip-text-z-label:empty,\n.apexcharts-tooltip-text-z-value:empty {\n  display: none;\n}\n\n.apexcharts-tooltip-text-value, \n.apexcharts-tooltip-text-z-value {\n  font-weight: 600;\n}\n\n.apexcharts-tooltip-marker {\n  width: 12px;\n  height: 12px;\n  position: relative;\n  top: 0px;\n  margin-right: 10px;\n  border-radius: 50%;\n}\n\n.apexcharts-tooltip-series-group {\n  padding: 0 10px;\n  display: none;\n  text-align: left;\n  justify-content: left;\n  align-items: center;\n}\n\n.apexcharts-tooltip-series-group.active .apexcharts-tooltip-marker {\n  opacity: 1;\n}\n.apexcharts-tooltip-series-group.active, .apexcharts-tooltip-series-group:last-child {\n  padding-bottom: 4px;\n}\n.apexcharts-tooltip-y-group {\n  padding: 6px 0 5px;\n}\n.apexcharts-tooltip-candlestick {\n  padding: 4px 8px;\n}\n.apexcharts-tooltip-candlestick > div {\n  margin: 4px 0;\n}\n.apexcharts-tooltip-candlestick span.value {\n  font-weight: bold;\n}\n\n.apexcharts-xaxistooltip {\n  opacity: 0;\n  padding: 9px 10px;\n  pointer-events: none;\n  color: #373d3f;\n  font-size: 13px;\n  text-align: center;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n\tbackground: #ECEFF1;\n  border: 1px solid #90A4AE;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-xaxistooltip:after, .apexcharts-xaxistooltip:before {\n\tleft: 50%;\n\tborder: solid transparent;\n\tcontent: " ";\n\theight: 0;\n\twidth: 0;\n\tposition: absolute;\n\tpointer-events: none;\n}\n\n.apexcharts-xaxistooltip:after {\n\tborder-color: rgba(236, 239, 241, 0);\n\tborder-width: 6px;\n\tmargin-left: -6px;\n}\n.apexcharts-xaxistooltip:before {\n\tborder-color: rgba(144, 164, 174, 0);\n\tborder-width: 7px;\n\tmargin-left: -7px;\n}\n\n.apexcharts-xaxistooltip-bottom:after, .apexcharts-xaxistooltip-bottom:before {\n  bottom: 100%;\n}\n\n.apexcharts-xaxistooltip-bottom:after {\n  border-bottom-color: #ECEFF1;\n}\n.apexcharts-xaxistooltip-bottom:before {\n  border-bottom-color: #90A4AE;\n}\n\n.apexcharts-xaxistooltip-top:after, .apexcharts-xaxistooltip-top:before {\n  top: 100%;\n}\n.apexcharts-xaxistooltip-top:after {\n  border-top-color: #ECEFF1;\n}\n.apexcharts-xaxistooltip-top:before {\n  border-top-color: #90A4AE;\n}\n\n.apexcharts-xaxistooltip.active {\n  opacity: 1;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-yaxistooltip {\n  opacity: 0;\n  padding: 4px 10px;\n  pointer-events: none;\n  color: #373d3f;\n  font-size: 13px;\n  text-align: center;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n\tbackground: #ECEFF1;\n  border: 1px solid #90A4AE;\n}\n\n.apexcharts-yaxistooltip:after, .apexcharts-yaxistooltip:before {\n\ttop: 50%;\n\tborder: solid transparent;\n\tcontent: " ";\n\theight: 0;\n\twidth: 0;\n\tposition: absolute;\n\tpointer-events: none;\n}\n.apexcharts-yaxistooltip:after {\n\tborder-color: rgba(236, 239, 241, 0);\n\tborder-width: 6px;\n\tmargin-top: -6px;\n}\n.apexcharts-yaxistooltip:before {\n\tborder-color: rgba(144, 164, 174, 0);\n\tborder-width: 7px;\n\tmargin-top: -7px;\n}\n\n.apexcharts-yaxistooltip-left:after, .apexcharts-yaxistooltip-left:before {\n  left: 100%;\n}\n.apexcharts-yaxistooltip-left:after {\n  border-left-color: #ECEFF1;\n}\n.apexcharts-yaxistooltip-left:before {\n  border-left-color: #90A4AE;\n}\n\n.apexcharts-yaxistooltip-right:after, .apexcharts-yaxistooltip-right:before {\n  right: 100%;\n}\n.apexcharts-yaxistooltip-right:after {\n  border-right-color: #ECEFF1;\n}\n.apexcharts-yaxistooltip-right:before {\n  border-right-color: #90A4AE;\n}\n\n.apexcharts-yaxistooltip.active {\n  opacity: 1;\n}\n\n.apexcharts-xcrosshairs, .apexcharts-ycrosshairs {\n  pointer-events: none;\n  opacity: 0;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-xcrosshairs.active, .apexcharts-ycrosshairs.active {\n  opacity: 1;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-ycrosshairs-hidden {\n  opacity: 0;\n}\n\n.apexcharts-zoom-rect {\n  pointer-events: none;\n}\n.apexcharts-selection-rect {\n  cursor: move;\n}\n\n.svg_select_points, .svg_select_points_rot {\n  opacity: 0;\n  visibility: hidden;\n}\n.svg_select_points_l, .svg_select_points_r {\n  cursor: ew-resize;\n  opacity: 1;\n  visibility: visible;\n  fill: #888;\n}\n.apexcharts-canvas.zoomable .hovering-zoom {\n  cursor: crosshair\n}\n.apexcharts-canvas.zoomable .hovering-pan {\n  cursor: move\n}\n\n.apexcharts-xaxis,\n.apexcharts-yaxis {\n  pointer-events: none;\n}\n\n.apexcharts-zoom-icon, \n.apexcharts-zoom-in-icon,\n.apexcharts-zoom-out-icon,\n.apexcharts-reset-zoom-icon, \n.apexcharts-pan-icon, \n.apexcharts-selection-icon,\n.apexcharts-menu-icon {\n  cursor: pointer;\n  width: 20px;\n  height: 20px;\n  text-align: center;\n}\n\n\n.apexcharts-zoom-icon svg, \n.apexcharts-zoom-in-icon svg,\n.apexcharts-zoom-out-icon svg,\n.apexcharts-reset-zoom-icon svg,\n.apexcharts-menu-icon svg {\n  fill: #6E8192;\n}\n.apexcharts-selection-icon svg {\n  fill: #444;\n  transform: scale(0.86)\n}\n.apexcharts-zoom-icon.selected svg, \n.apexcharts-selection-icon.selected svg, \n.apexcharts-reset-zoom-icon.selected svg {\n  fill: #008FFB;\n}\n.apexcharts-selection-icon:not(.selected):hover svg,\n.apexcharts-zoom-icon:not(.selected):hover svg, \n.apexcharts-zoom-in-icon:hover svg, \n.apexcharts-zoom-out-icon:hover svg, \n.apexcharts-reset-zoom-icon:hover svg, \n.apexcharts-menu-icon:hover svg {\n  fill: #333;\n}\n\n.apexcharts-selection-icon, .apexcharts-menu-icon {\n  margin-right: 3px;\n  margin-left: 5px;\n  position: relative;\n  top: 1px;\n}\n.apexcharts-reset-zoom-icon {\n  margin-left: 7px;\n}\n.apexcharts-zoom-icon {\n  transform: scale(1);\n}\n\n.apexcharts-zoom-in-icon, .apexcharts-zoom-out-icon {\n  transform: scale(0.8)\n}\n\n.apexcharts-zoom-out-icon {\n  margin-right: 3px;\n}\n\n.apexcharts-pan-icon {\n  transform: scale(0.72);\n  position: relative;\n  left: 1px;\n  top: 0px;\n}\n.apexcharts-pan-icon svg {\n  fill: #fff;\n  stroke: #6E8192;\n  stroke-width: 2;\n}\n.apexcharts-pan-icon.selected svg {\n  stroke: #008FFB;\n}\n.apexcharts-pan-icon:not(.selected):hover svg {\n  stroke: #333;\n}\n\n.apexcharts-toolbar {\n  position: absolute;\n  z-index: 11;\n  top: 0px;\n  right: 3px;\n  max-width: 176px;\n  text-align: right;\n  border-radius: 3px;\n  padding: 0px 6px 2px 6px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center; \n}\n\n.apexcharts-toolbar svg {\n  pointer-events: none;\n}\n\n.apexcharts-menu {\n  background: #fff;\n  position: absolute;\n  top: 100%;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  padding: 3px;\n  right: 10px;\n  opacity: 0;\n  min-width: 110px;\n  transition: 0.15s ease all;\n  pointer-events: none;\n}\n\n.apexcharts-menu.open {\n  opacity: 1;\n  pointer-events: all;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-menu-item {\n  padding: 6px 7px;\n  font-size: 12px;\n  cursor: pointer;\n}\n.apexcharts-menu-item:hover {\n  background: #eee;\n}\n\n@media screen and (min-width: 768px) {\n  .apexcharts-toolbar {\n    /*opacity: 0;*/\n  }\n\n  .apexcharts-canvas:hover .apexcharts-toolbar {\n    opacity: 1;\n  } \n}\n\n.apexcharts-datalabel.hidden {\n  opacity: 0;\n}\n\n.apexcharts-pie-label,\n.apexcharts-datalabel, .apexcharts-datalabel-label, .apexcharts-datalabel-value {\n  cursor: default;\n  pointer-events: none;\n}\n\n.apexcharts-pie-label-delay {\n  opacity: 0;\n  animation-name: opaque;\n  animation-duration: 0.3s;\n  animation-fill-mode: forwards;\n  animation-timing-function: ease;\n}\n\n.apexcharts-canvas .hidden {\n  opacity: 0;\n}\n\n.apexcharts-hide .apexcharts-series-points {\n  opacity: 0;\n}\n\n.apexcharts-area-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,\n.apexcharts-line-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events, .apexcharts-radar-series path, .apexcharts-radar-series polygon {\n  pointer-events: none;\n}\n\n/* markers */\n\n.apexcharts-marker {\n  transition: 0.15s ease all;\n}\n\n@keyframes opaque {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}', ""])
     }, function (t, e, i) {
         var a = i(159);
         "string" == typeof a && (a = [
             [t.i, a, ""]
         ]);
         var s = {
             hmr: !0,
             transform: void 0,
             insertInto: void 0
         };
         i(161)(a, s);
         a.locals && (t.exports = a.locals)
     }, function (t, e, i) {
         var a, s, n, l = {},
             h = (a = function () {
                 return window && document && document.all && !window.atob
             }, function () {
                 return void 0 === s && (s = a.apply(this, arguments)), s
             }),
             r = (n = {}, function (t) {
                 if ("function" == typeof t) return t();
                 if (void 0 === n[t]) {
                     var e = function (t) {
                         return document.querySelector(t)
                     }.call(this, t);
                     if (window.HTMLIFrameElement && e instanceof window.HTMLIFrameElement) try {
                         e = e.contentDocument.head
                     } catch (t) {
                         e = null
                     }
                     n[t] = e
                 }
                 return n[t]
             }),
             c = null,
             u = 0,
             o = [],
             d = i(150);

         function f(t, e) {
             for (var i = 0; i < t.length; i++) {
                 var a = t[i],
                     s = l[a.id];
                 if (s) {
                     s.refs++;
                     for (var n = 0; n < s.parts.length; n++) s.parts[n](a.parts[n]);
                     for (; n < a.parts.length; n++) s.parts.push(m(a.parts[n], e))
                 } else {
                     var r = [];
                     for (n = 0; n < a.parts.length; n++) r.push(m(a.parts[n], e));
                     l[a.id] = {
                         id: a.id,
                         refs: 1,
                         parts: r
                     }
                 }
             }
         }

         function p(t, e) {
             for (var i = [], a = {}, s = 0; s < t.length; s++) {
                 var n = t[s],
                     r = e.base ? n[0] + e.base : n[0],
                     o = {
                         css: n[1],
                         media: n[2],
                         sourceMap: n[3]
                     };
                 a[r] ? a[r].parts.push(o) : i.push(a[r] = {
                     id: r,
                     parts: [o]
                 })
             }
             return i
         }

         function g(t, e) {
             var i = r(t.insertInto);
             if (!i) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
             var a = o[o.length - 1];
             if ("top" === t.insertAt) a ? a.nextSibling ? i.insertBefore(e, a.nextSibling) : i.appendChild(e) : i.insertBefore(e, i.firstChild), o.push(e);
             else if ("bottom" === t.insertAt) i.appendChild(e);
             else {
                 if ("object" != typeof t.insertAt || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                 var s = r(t.insertInto + " " + t.insertAt.before);
                 i.insertBefore(e, s)
             }
         }

         function x(t) {
             if (null === t.parentNode) return !1;
             t.parentNode.removeChild(t);
             var e = o.indexOf(t);
             0 <= e && o.splice(e, 1)
         }

         function v(t) {
             var e = document.createElement("style");
             return t.attrs.type = "text/css", b(e, t.attrs), g(t, e), e
         }

         function b(e, i) {
             Object.keys(i).forEach(function (t) {
                 e.setAttribute(t, i[t])
             })
         }

         function m(e, t) {
             var i, a, s, n, r, o;
             if (t.transform && e.css) {
                 if (!(n = t.transform(e.css))) return function () {};
                 e.css = n
             }
             if (t.singleton) {
                 var l = u++;
                 i = c || (c = v(t)), a = k.bind(null, i, l, !1), s = k.bind(null, i, l, !0)
             } else s = e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (r = t, o = document.createElement("link"), r.attrs.type = "text/css", r.attrs.rel = "stylesheet", b(o, r.attrs), g(r, o), a = function (t, e, i) {
                 var a = i.css,
                     s = i.sourceMap,
                     n = void 0 === e.convertToAbsoluteUrls && s;
                 (e.convertToAbsoluteUrls || n) && (a = d(a));
                 s && (a += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(s)))) + " */");
                 var r = new Blob([a], {
                         type: "text/css"
                     }),
                     o = t.href;
                 t.href = URL.createObjectURL(r), o && URL.revokeObjectURL(o)
             }.bind(null, i = o, t), function () {
                 x(i), i.href && URL.revokeObjectURL(i.href)
             }) : (i = v(t), a = function (t, e) {
                 var i = e.css,
                     a = e.media;
                 a && t.setAttribute("media", a);
                 if (t.styleSheet) t.styleSheet.cssText = i;
                 else {
                     for (; t.firstChild;) t.removeChild(t.firstChild);
                     t.appendChild(document.createTextNode(i))
                 }
             }.bind(null, i), function () {
                 x(i)
             });
             return a(e),
                 function (t) {
                     if (t) {
                         if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                         a(e = t)
                     } else s()
                 }
         }
         t.exports = function (t, r) {
             if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
             (r = r || {}).attrs = "object" == typeof r.attrs ? r.attrs : {}, r.singleton || "boolean" == typeof r.singleton || (r.singleton = h()), r.insertInto || (r.insertInto = "head"), r.insertAt || (r.insertAt = "bottom");
             var o = p(t, r);
             return f(o, r),
                 function (t) {
                     for (var e = [], i = 0; i < o.length; i++) {
                         var a = o[i];
                         (s = l[a.id]).refs--, e.push(s)
                     }
                     t && f(p(t, r), r);
                     for (i = 0; i < e.length; i++) {
                         var s;
                         if (0 === (s = e[i]).refs) {
                             for (var n = 0; n < s.parts.length; n++) s.parts[n]();
                             delete l[s.id]
                         }
                     }
                 }
         };
         var y, w = (y = [], function (t, e) {
             return y[t] = e, y.filter(Boolean).join("\n")
         });

         function k(t, e, i, a) {
             var s = i ? "" : a.css;
             if (t.styleSheet) t.styleSheet.cssText = w(e, s);
             else {
                 var n = document.createTextNode(s),
                     r = t.childNodes;
                 r[e] && t.removeChild(r[e]), r.length ? t.insertBefore(n, r[e]) : t.appendChild(n)
             }
         }
     }, function (t, e) {
         t.exports = '<svg fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>'
     }, function (t, e) {
         t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>'
     }, function (t, e) {
         t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>'
     }, function (t, e) {
         t.exports = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" viewBox="0 0 24 24"><defs><path d="M0 0h24v24H0z" id="a"></path></defs><clipPath id="b"><use overflow="visible" xlink:href="#a"></use></clipPath><path clip-path="url(#b)" d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"></path></svg>'
     }, function (t, e) {
         t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>'
     }, function (t, e) {
         t.exports = '<svg fill="#6E8192" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2z"></path></svg>'
     }, function (t, e) {
         t.exports = '<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"></path></svg>'
     }, function (t, e, i) {
         i(88), i(86), i(87), i(85), i(84), i(89), t.exports = i(90)
     }])
 });