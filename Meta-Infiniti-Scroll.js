                            /*! Simple AJAX infinite scroll ( loadmore ) by Aan FAuzi  */
                            ! function(t, e) {
                                t.InfiniteScroll = function(n) {
                                    function r(t, n) { return n = n || e, n.querySelectorAll(t) }

                                    function o(t) { return void 0 !== t }

                                    function a(t) { return "function" == typeof t }

                                    function i(t, e) { t = t || {}; for (var n in e) t[n] = "object" == typeof e[n] ? i(t[n], e[n]) : e[n]; return t }

                                    function s(t, e, n) { return o(t) ? o(e) ? void(o(n) ? g[t][n] = e : g[t].push(e)) : g[t] : g }

                                    function d(t, e) { o(e) ? delete g[t][e] : g[t] = [] }

                                    function l(t, e) {
                                        if (o(g[t]))
                                            for (var n in g[t]) g[t][n](e)
                                    }

                                    function f() {
                                        return L.innerHTML = p.text.loading, T = !0, y ? (M.classList.add(p.state.loading), l("loading", [p]), void u(y, function(t, n) {
                                            M.className = x + " " + p.state.load, h = e.createElement("div"), h.innerHTML = t;
                                            var o = r("title", h),
                                                a = r(p.target.post, h),
                                                i = r(p.target.anchors + " " + p.target.anchor, h),
                                                s = r(p.target.post, H);
                                            if (o = o && o[0] ? o[0].innerHTML : "", a.length && s.length) {
                                                var d = s[s.length - 1];
                                                e.title = o, h = e.createElement("div");
                                                for (var f = 0, u = a.length; u > f; ++f) h.appendChild(a[f]);
                                                d.insertAdjacentHTML("afterend", h.innerHTML), c(), y = i.length ? i[0].href : !1, T = !1, j++, l("load", [p, t, n])
                                            }
                                        }, function(t, e) { M.classList.add(p.state.error), T = !1, c(1), l("error", [p, t, e]) })) : (M.classList.add(p.state.loaded), L.innerHTML = p.text.loaded, l("loaded", [p]))
                                    }

                                    function c(t) {
                                        if (L.innerHTML = "", v) {
                                            h.innerHTML = p.text[t ? "error" : "load"];
                                            var e = h.firstChild;
                                            e.onclick = function() { return 2 === p.type && (v = !1), f(), !1 }, L.appendChild(e)
                                        }
                                    }
                                    var u = "infinite-scroll-state-",
                                        p = { target: { posts: ".posts", post: ".post", anchors: ".anchors", anchor: ".anchor" }, text: { load: "%s", loading: "%s", loaded: "%s", error: "%s" }, state: { load: u + "load", loading: u + "loading", loaded: u + "loaded", error: u + "error" } },
                                        g = { load: [], loading: [], loaded: [], error: [] };
                                    p = i(p, n || {}), p.on = s, p.off = d;
                                    var h = null,
                                        u = function(e, n, r) {
                                            if (t.XMLHttpRequest) {
                                                var o = new XMLHttpRequest;
                                                o.onreadystatechange = function() {
                                                    if (4 === o.readyState) {
                                                        if (200 !== o.status) return void(r && a(r) && r(o.responseText, o));
                                                        n && a(n) && n(o.responseText, o)
                                                    }
                                                }, o.open("GET", e), o.send()
                                            }
                                        },
                                        v = 1 !== p.type,
                                        T = !1,
                                        H = r(p.target.posts)[0],
                                        L = r(p.target.anchors)[0],
                                        y = r(p.target.anchor, L),
                                        m = e.body,
                                        M = e.documentElement,
                                        x = M.className || "",
                                        E = H.offsetTop + H.offsetHeight,
                                        b = t.innerHeight,
                                        w = 0,
                                        S = null,
                                        j = 1;
                                    if (y.length) {
                                        y = y[0].href, h = e.createElement("div"), c();
                                        var A = function() { E = H.offsetTop + H.offsetHeight, b = t.innerHeight, w = m.scrollTop || M.scrollTop, T || E > w + b || f() };
                                        A(), 0 !== p.type && t.addEventListener("scroll", function() { v || (S && t.clearTimeout(S), S = t.setTimeout(A, 500)) }, !1)
                                    }
                                    return p
                                }
                            }(window, document);

                            var infinite_scroll = new InfiniteScroll({
                                type: 0,
                                target: {
                                    posts: '.loop',
                                    post: '.article',
                                    anchors: '.blog-pager',
                                    anchor: '.blog-pager-older-link'
                                },
                                text: {
                                    load: '<a class="js-load" href="javascript:;">' + config.text['more'] + ' <svg xmlns="//www.w3.org/2000/svg" xmlns:xlink="//www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 490.656 490.656" xml:space="preserve"><path d="M487.536,120.445c-4.16-4.16-10.923-4.16-15.083,0L245.317,347.581L18.203,120.445c-4.16-4.16-10.923-4.16-15.083,0c-4.16,4.16-4.16,10.923,0,15.083l234.667,234.667c2.069,2.091,4.8,3.136,7.531,3.136s5.461-1.045,7.552-3.115l234.667-234.667C491.696,131.368,491.696,124.627,487.536,120.445z"/></svg></a>',
                                    // loading: '<span class="js-loading" style="cursor:wait;"><span class="loading" style="width:20px;height:20px;display:inline-block;vertical-align:middle;line-height:1;margin-right:10px;"></span> Memuat\u2026</span>',
                                    loading: '',
                                    loaded: '',
                                    error: '<a class="js-error" href="javascript:;">Kesalahan.</a>'
                                }
                            })