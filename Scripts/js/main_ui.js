(function ($) {

    $(document).ready(function () {
        var is_ie_version = getInternetExplorerVersion();
        var is_support;
        if (is_ie_version > 0 && is_ie_version <= 9) {
            is_support = false;
        } else {
            is_support = true;
        }
        if (is_support) {

            !function () { "use strict"; function e(n) { return "undefined" == typeof this || Object.getPrototypeOf(this) !== e.prototype ? new e(n) : (O = this, O.version = "3.3.4", O.tools = new E, O.isSupported() ? (O.tools.extend(O.defaults, n || {}), O.defaults.container = t(O.defaults), O.store = { elements: {}, containers: [] }, O.sequences = {}, O.history = [], O.uid = 0, O.initialized = !1) : "undefined" != typeof console && null !== console, O) } function t(e) { if (e && e.container) { if ("string" == typeof e.container) return window.document.documentElement.querySelector(e.container); if (O.tools.isNode(e.container)) return e.container } return O.defaults.container } function n(e, t) { return "string" == typeof e ? Array.prototype.slice.call(t.querySelectorAll(e)) : O.tools.isNode(e) ? [e] : O.tools.isNodeList(e) ? Array.prototype.slice.call(e) : [] } function i() { return ++O.uid } function o(e, t, n) { t.container && (t.container = n), e.config ? e.config = O.tools.extendClone(e.config, t) : e.config = O.tools.extendClone(O.defaults, t), "top" === e.config.origin || "bottom" === e.config.origin ? e.config.axis = "Y" : e.config.axis = "X" } function r(e) { var t = window.getComputedStyle(e.domEl); e.styles || (e.styles = { transition: {}, transform: {}, computed: {} }, e.styles.inline = e.domEl.getAttribute("style") || "", e.styles.inline += "; visibility: visible; ", e.styles.computed.opacity = t.opacity, t.transition && "all 0s ease 0s" !== t.transition ? e.styles.computed.transition = t.transition + ", " : e.styles.computed.transition = ""), e.styles.transition.instant = s(e, 0), e.styles.transition.delayed = s(e, e.config.delay), e.styles.transform.initial = " -webkit-transform:", e.styles.transform.target = " -webkit-transform:", a(e), e.styles.transform.initial += "transform:", e.styles.transform.target += "transform:", a(e) } function s(e, t) { var n = e.config; return "-webkit-transition: " + e.styles.computed.transition + "-webkit-transform " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s, opacity " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s; transition: " + e.styles.computed.transition + "transform " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s, opacity " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s; " } function a(e) { var t, n = e.config, i = e.styles.transform; t = "top" === n.origin || "left" === n.origin ? /^-/.test(n.distance) ? n.distance.substr(1) : "-" + n.distance : n.distance, parseInt(n.distance) && (i.initial += " translate" + n.axis + "(" + t + ")", i.target += " translate" + n.axis + "(0)"), n.scale && (i.initial += " scale(" + n.scale + ")", i.target += " scale(1)"), n.rotate.x && (i.initial += " rotateX(" + n.rotate.x + "deg)", i.target += " rotateX(0)"), n.rotate.y && (i.initial += " rotateY(" + n.rotate.y + "deg)", i.target += " rotateY(0)"), n.rotate.z && (i.initial += " rotateZ(" + n.rotate.z + "deg)", i.target += " rotateZ(0)"), i.initial += "; opacity: " + n.opacity + ";", i.target += "; opacity: " + e.styles.computed.opacity + ";" } function l(e) { var t = e.config.container; t && O.store.containers.indexOf(t) === -1 && O.store.containers.push(e.config.container), O.store.elements[e.id] = e } function c(e, t, n) { var i = { target: e, config: t, interval: n }; O.history.push(i) } function f() { if (O.isSupported()) { y(); for (var e = 0; e < O.store.containers.length; e++)O.store.containers[e].addEventListener("scroll", d), O.store.containers[e].addEventListener("resize", d); O.initialized || (window.addEventListener("scroll", d), window.addEventListener("resize", d), O.initialized = !0) } return O } function d() { T(y) } function u() { var e, t, n, i; O.tools.forOwn(O.sequences, function (o) { i = O.sequences[o], e = !1; for (var r = 0; r < i.elemIds.length; r++)n = i.elemIds[r], t = O.store.elements[n], q(t) && !e && (e = !0); i.active = e }) } function y() { var e, t; u(), O.tools.forOwn(O.store.elements, function (n) { t = O.store.elements[n], e = w(t), g(t) ? (t.config.beforeReveal(t.domEl), e ? t.domEl.setAttribute("style", t.styles.inline + t.styles.transform.target + t.styles.transition.delayed) : t.domEl.setAttribute("style", t.styles.inline + t.styles.transform.target + t.styles.transition.instant), p("reveal", t, e), t.revealing = !0, t.seen = !0, t.sequence && m(t, e)) : v(t) && (t.config.beforeReset(t.domEl), t.domEl.setAttribute("style", t.styles.inline + t.styles.transform.initial + t.styles.transition.instant), p("reset", t), t.revealing = !1) }) } function m(e, t) { var n = 0, i = 0, o = O.sequences[e.sequence.id]; o.blocked = !0, t && "onload" === e.config.useDelay && (i = e.config.delay), e.sequence.timer && (n = Math.abs(e.sequence.timer.started - new Date), window.clearTimeout(e.sequence.timer)), e.sequence.timer = { started: new Date }, e.sequence.timer.clock = window.setTimeout(function () { o.blocked = !1, e.sequence.timer = null, d() }, Math.abs(o.interval) + i - n) } function p(e, t, n) { var i = 0, o = 0, r = "after"; switch (e) { case "reveal": o = t.config.duration, n && (o += t.config.delay), r += "Reveal"; break; case "reset": o = t.config.duration, r += "Reset" }t.timer && (i = Math.abs(t.timer.started - new Date), window.clearTimeout(t.timer.clock)), t.timer = { started: new Date }, t.timer.clock = window.setTimeout(function () { t.config[r](t.domEl), t.timer = null }, o - i) } function g(e) { if (e.sequence) { var t = O.sequences[e.sequence.id]; return t.active && !t.blocked && !e.revealing && !e.disabled } return q(e) && !e.revealing && !e.disabled } function w(e) { var t = e.config.useDelay; return "always" === t || "onload" === t && !O.initialized || "once" === t && !e.seen } function v(e) { if (e.sequence) { var t = O.sequences[e.sequence.id]; return !t.active && e.config.reset && e.revealing && !e.disabled } return !q(e) && e.config.reset && e.revealing && !e.disabled } function b(e) { return { width: e.clientWidth, height: e.clientHeight } } function h(e) { if (e && e !== window.document.documentElement) { var t = x(e); return { x: e.scrollLeft + t.left, y: e.scrollTop + t.top } } return { x: window.pageXOffset, y: window.pageYOffset } } function x(e) { var t = 0, n = 0, i = e.offsetHeight, o = e.offsetWidth; do isNaN(e.offsetTop) || (t += e.offsetTop), isNaN(e.offsetLeft) || (n += e.offsetLeft), e = e.offsetParent; while (e); return { top: t, left: n, height: i, width: o } } function q(e) { function t() { var t = c + a * s, n = f + l * s, i = d - a * s, y = u - l * s, m = r.y + e.config.viewOffset.top, p = r.x + e.config.viewOffset.left, g = r.y - e.config.viewOffset.bottom + o.height, w = r.x - e.config.viewOffset.right + o.width; return t < g && i > m && n > p && y < w } function n() { return "fixed" === window.getComputedStyle(e.domEl).position } var i = x(e.domEl), o = b(e.config.container), r = h(e.config.container), s = e.config.viewFactor, a = i.height, l = i.width, c = i.top, f = i.left, d = c + a, u = f + l; return t() || n() } function E() { } var O, T; e.prototype.defaults = { origin: "bottom", distance: "20px", duration: 500, delay: 0, rotate: { x: 0, y: 0, z: 0 }, opacity: 0, scale: .9, easing: "cubic-bezier(0.6, 0.2, 0.1, 1)", container: window.document.documentElement, mobile: !0, reset: !1, useDelay: "always", viewFactor: .2, viewOffset: { top: 0, right: 0, bottom: 0, left: 0 }, beforeReveal: function (e) { }, beforeReset: function (e) { }, afterReveal: function (e) { }, afterReset: function (e) { } }, e.prototype.isSupported = function () { var e = document.documentElement.style; return "WebkitTransition" in e && "WebkitTransform" in e || "transition" in e && "transform" in e }, e.prototype.reveal = function (e, s, a, d) { var u, y, m, p, g, w; if (void 0 !== s && "number" == typeof s ? (a = s, s = {}) : void 0 !== s && null !== s || (s = {}), u = t(s), y = n(e, u), !y.length) return O; a && "number" == typeof a && (w = i(), g = O.sequences[w] = { id: w, interval: a, elemIds: [], active: !1 }); for (var v = 0; v < y.length; v++)p = y[v].getAttribute("data-sr-id"), p ? m = O.store.elements[p] : (m = { id: i(), domEl: y[v], seen: !1, revealing: !1 }, m.domEl.setAttribute("data-sr-id", m.id)), g && (m.sequence = { id: g.id, index: g.elemIds.length }, g.elemIds.push(m.id)), o(m, s, u), r(m), l(m), O.tools.isMobile() && !m.config.mobile || !O.isSupported() ? (m.domEl.setAttribute("style", m.styles.inline), m.disabled = !0) : m.revealing || m.domEl.setAttribute("style", m.styles.inline + m.styles.transform.initial); return !d && O.isSupported() && (c(e, s, a), O.initTimeout && window.clearTimeout(O.initTimeout), O.initTimeout = window.setTimeout(f, 0)), O }, e.prototype.sync = function () { if (O.history.length && O.isSupported()) { for (var e = 0; e < O.history.length; e++) { var t = O.history[e]; O.reveal(t.target, t.config, t.interval, !0) } f() } return O }, E.prototype.isObject = function (e) { return null !== e && "object" == typeof e && e.constructor === Object }, E.prototype.isNode = function (e) { return "object" == typeof window.Node ? e instanceof window.Node : e && "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName }, E.prototype.isNodeList = function (e) { var t = Object.prototype.toString.call(e), n = /^\[object (HTMLCollection|NodeList|Object)\]$/; return "object" == typeof window.NodeList ? e instanceof window.NodeList : e && "object" == typeof e && n.test(t) && "number" == typeof e.length && (0 === e.length || this.isNode(e[0])) }, E.prototype.forOwn = function (e, t) { if (!this.isObject(e)) throw new TypeError('Expected "object", but received "' + typeof e + '".'); for (var n in e) e.hasOwnProperty(n) && t(n) }, E.prototype.extend = function (e, t) { return this.forOwn(t, function (n) { this.isObject(t[n]) ? (e[n] && this.isObject(e[n]) || (e[n] = {}), this.extend(e[n], t[n])) : e[n] = t[n] }.bind(this)), e }, E.prototype.extendClone = function (e, t) { return this.extend(this.extend({}, e), t) }, E.prototype.isMobile = function () { return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) }, T = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (e) { window.setTimeout(e, 1e3 / 60) }, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function () { return e }) : "undefined" != typeof module && module.exports ? module.exports = e : window.ScrollReveal = e }();
            ScrollReveal.prototype.isSupported = function () {
                var style = document.documentElement.style
                return 'WebkitTransition' in style && 'WebkitTransform' in style
                    || 'transition' in style && 'transform' in style
            }

        }
        if (is_support) {

            window.sr = new ScrollReveal();
            sr.reveal('div.area-about h3', { distance: '10%', duration: 1000, scale: 1, reset: false }, 250);
            sr.reveal('ul.about-list1 li', { distance: '10%', duration: 1000, scale: 1, reset: false }, 100);
            sr.reveal('div.about-list2 li', { distance: '10%', duration: 1000, scale: 1, reset: false }, 100);
            sr.reveal('#section4 div.area-startup h3', { distance: '10%', duration: 500, scale: 1, reset: false }, 20);
            sr.reveal('#section4 ul.startup-list li', { distance: '10%', duration: 250, scale: 1, reset: false }, 150);
            sr.reveal('#section5 div.area-startup h3', { distance: '10%', duration: 250, scale: 1, reset: false }, 20);
            sr.reveal('#section5 ul.startup-list li', { distance: '10%', duration: 250, scale: 1, reset: false }, 150);

        }

        window.setAnimationText = function (start_anim, text_anim) {
            var $startAnim = $(start_anim);
            var $textAnim = $(text_anim);
            var main_txt = $(start_anim).find('div.main-txt');


            var text_width = $textAnim.outerWidth(true) + 46;

            $($textAnim).find('span').css({ autoAlpha: '0', opacity: '0' });
            $textAnim.css({ autoAlpha: '1', opacity: '1' });
            function startAnimation() {
                TweenMax.to(main_txt, 0.6, {height: '63px', width: text_width, ease: "Power3.easeOut", onComplete: function () {

                        TweenMax.staggerFromTo($textAnim.find("span"), 0, { autoAlpha: 0, opacity: '0' }, { autoAlpha: '1', opacity: '1', ease: "Power4.easeOut" }, 0.05);


                    }
                });

            }

            startAnimation();
        }


        var oldTop = 0;
        var $w_s_top = 0;
        window.sectionScrollCheck = function (e) {
            oldTop = $w_s_top;
            $w_s_top = $(window).scrollTop();
            $win_width = $(window).width();
            var check_up = oldTop - $w_s_top;

            if ($w_s_top > 50) {

                if ($win_width > 1243) {
                    $('.gnb').fadeIn();
                    TweenMax.fromTo($('.header'), 1, { 'background': 'rgba(0,0,0,1)' }, { 'background': 'rgba(0,0,0,0.5)' });

                } else {
                    TweenMax.fromTo($('.header'), 1, { 'background': 'rgba(0,0,0,1)' }, { 'background': 'rgba(0,0,0,0.5)' });
                }

            }
        }


        $(window).on("scroll", function (event) {
            sectionScrollCheck(event);
        });


        window.PreLoader = function (assets, callback) {
            if (this instanceof PreLoader === false) {
                return new PreLoader(assets, callback);
            }

            if (typeof assets !== 'object') return false;
            var _this = this;
            var imgs = [];
            var LENGTH = assets.length;
            var unit = 100 / LENGTH,
                progress = 0;
            this.initialize = function () {
                for (var i = 0; i < assets.length; i++) {
                    imgs[i] = new Image();
                    this.setHandler(imgs[i]);
                    imgs[i].src = assets[i];
                }
            };
            this.setHandler = function (img) {
                img.onload = this.calculate;
                img.onerror = this.calculate;
            };
            this.calculate = function () {
                progress += unit;
                if (Math.round(progress) >= 99) {
                    _this.load();
                }
            };
            this.load = function () {
                if (typeof callback === 'function') callback();
            };
            this.initialize();
        };


    });

}(jQuery, window, document));


$(document).ready(function () {
    var loading_txt = $('.loading .txt-tit');
    $('.loading').fadeIn('slow');
    $('.gnb').fadeOut();
    TweenMax.to($('.header'), 1, { 'background': 'none' });
    var txt_point_h2 = $('.txt-point h2');
    $('.txt-point h2').each(function (i) {
        var txt_point_h2 = $(this);
        txt_point_h2.html(txt_point_h2.eq(0).text().replace(/./g, "<span>$&</span>").replace(/\s/g, "&nbsp;"));
    });
    var assets = [];
    $('body').find('img').each(function (i, item) {
        assets[i] = $(item).attr('src');
    });
    assets.push('./Content/images/about/spritesheet.png');
    assets.push('./Content/images/about/spritesheet180.png');
    assets.push('./Content/images/about/spritesheet215.png');

    var _cs;
    new PreLoader(assets, function() {
		setTimeout(function(){
			$('#wrap_content').fadeIn('slow');
			$('.loading').fadeOut();
			setTimeout(function(){
				if(cpu_hackathon_open){
					TweenMax.to($('.slide0 .btn-apply'),1.5, {'top':'50%','opacity':'1',ease:"Power4.easeOut"});
				}else{
					setAnimationText(".slide1",".slide1 .txt-point h2");
				}
				_cs = new CommonSlider($('.swiper-container'), {
					duration: 1000,
					easing: 'easeInOutQuart',
					prevBtn: $('.swiper-button-prev'),
					nextBtn: $('.swiper-button-next'),
					before : function(i, prevI) {
							TweenMax.to($('.main-txt'),0.5, {'height':'38px','width':'38px',ease:"Power4.easeOut"});
							$('.txt-point h2').css({autoAlpha:'0',opacity:'0'});
					},
					after: function(i, prevI) {

							var swiper_index = i ;
							var total_section =  parseInt($('.swiper-slide').length,10);
							var _t = swiper_index%total_section;
							if(_t==0){
								swiper_index = total_section;
							}else{
								swiper_index = swiper_index % total_section;
							}
							if(_t==0){

							}else{
								var start_anim = ".slide"+swiper_index;
								var text_anim = start_anim + " .txt-point h2";
								setAnimationText(start_anim,text_anim);
							}
					},
					pagination : $('.swiper-pagination')
				});
			},200);
		},500);
	});


    $(".swiper-container").swipe( {
		   swipeLeft:function(event, distance, duration, fingerCount, fingerData, currentDirection) {
          $('.swiper-button-next').click();
        },
		 swipeRight:function(event, distance, duration, fingerCount, fingerData, currentDirection) {
          $('.swiper-button-prev').click()
        },
         threshold:0
      });

    $(".gnb li a, .gnb-m li a, #down-sr a").on('click',function(e){
		e.preventDefault();
		var link = $(this).attr("href");
		var link_arr = link.split("#");
		introUrl = link_arr[1];
		$(".gnb-m").hide();
		if(typeof(link_arr[1])!="undefined" && link_arr[1] != ""){
            if (introUrl.toLowerCase().indexOf('section') > -1) {
                var currentTop = $('#' + introUrl).offset().top;
                $("html, body").stop().animate({ scrollTop: currentTop }, 300, 'swing');
            }
            else {
                location.href = link;
            }
		}else{
			location.href= link;
		}
	 });



    $(".close_popup").click(function () {
        $(this).parent().hide();
        $(".startup-popbg").hide();
    });
    $(".startup-list li").on('click', function () {
        var name = $(this).attr("data-bis1"),
            cont = $(this).attr("data-bis2"),
            homep = $(this).attr("data-bis3"),
            email = $(this).attr("data-bis4");
        $(".startup-popup > h4").text(name);
        $(".startup-popup > .cont").text(cont);
        $(".startup-popup > .tit-home > a").text(homep);
        $(".startup-popup > .tit-home > a").attr('href', "http://" + homep);
        $(".startup-popup > .tit-mail > a").text(email);
        $(".startup-popup > .tit-mail > a").attr('href', "mailto:" + email);
        $(".startup-popbg").show();
        $(".startup-popup").show();
    });
    // mobile header close button
    $(".m-close a").on('click', function () {
        $(".gnb-m").hide();
    });
    var winWidth = $(window).width();
    if (winWidth >= 1260 - 17) {
        gnbAction();
    } else {
        $(".gnb").css('display', 'none');
        $(".gnb_m").click(function () {
            $(".gnb-m").css('display', 'block');
        });
    }
    $(window).resize(function () {
        var winWidth = $(window).width();
        if (winWidth >= 1260 - 17) {
            $('.sub-menu').hide();
            gnbAction();
        } else {
            $(".gnb").css('display', 'none');
            $(".gnb_m").click(function () {
                $(".gnb-m").css('display', 'block');
                $(".gnb-m ul li > .sub-menu").css('display', 'block');

            });
        }

    });
    /* main about crystal */
    var a = $(".about-pro");
    var a2 = $(".about-pro215");
    var a3 = $(".about-pro180");
    var tl3 = new TimelineMax({ repeat: -1 });
    var tl2 = new TimelineMax({ repeat: -1 });
    var tl = new TimelineMax({ repeat: -1 });
    tl2.to(a2, 1.5, {
        backgroundPosition: "-6880px 0",
        ease: SteppedEase.config(32)
    });
    tl2.play();
    TweenMax.set(a2, { backgroundPosition: "0 0", delay: 2 });
    tl3.to(a3, 1.5, {
        backgroundPosition: "-5760px 0",
        ease: SteppedEase.config(32)
    });
    tl3.play();
    TweenMax.set(a3, { backgroundPosition: "0 0", delay: 2 });

    tl.to(a, 1.5, {
        backgroundPosition: "-9376px 0",
        ease: SteppedEase.config(32)
    });
    tl.play();
    TweenMax.set(a, { backgroundPosition: "0 0", delay: 2 });


    function gnbAction() {
        $(".gnb").css('display', 'block');
        $(".gnb-m").css('display', 'none');
        $(".gnb ul li").hover(function () {
            $(this).find('.sub-menu').css('display', 'block');
            if ($(this).find('.sub-menu').css('display', 'block')) {
                $(this).css('background', '#000');
            } else {
                $(this).css('background', 'transparent');
            }
        }, function () {
            $(this).find('.sub-menu').css('display', 'none');
            $(this).css('background', 'transparent');
        });

    }


});



/* browser check */
function getInternetExplorerVersion() {
    var rv = -1;
    if (navigator.appName == 'Microsoft Internet Explorer') {
        var ua = navigator.userAgent;
        var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null)
            rv = parseFloat(RegExp.$1);
    }
    return rv;
}

/* slider */
(function ($) {
    window.CommonSlider = function (container, options) {
        if (this instanceof CommonSlider === false) {
            return new CommonSlider(container, options);
        }
        var _this = this;
        var container = typeof container === 'object' ? container : $('#' + container),
            opt = { autoPlay: true, startIndex: 0, itemsPerView: 1, itemsPerMove: 1, interval: 4000, duration: 500, easing: 'easeInExpo', pagination: undefined, prevBtn: undefined, nextBtn: undefined, axis: 'x', loop: true, lazyLoad: false, before: undefined, after: undefined };
        for (var prop in options) {
            opt[prop] = options[prop];
        }
        var wrapper = container.children('ul:first-child'),
            items = wrapper.children('li'),
            originalItems = items,
            length = items.length;
        var totalMove = Math.ceil((length - opt.itemsPerView) / opt.itemsPerMove) + 1;
        if (totalMove < 2) return false;
        var pagingList;
        var restItems = (length - opt.itemsPerMove) % opt.itemsPerMove;
        if (restItems === opt.itemsPerMove) restItems = 0;
        var prevIndex = 0,
            index = 0,
            itemsD,
            diff = [];
        var cloneClass = 'slider-clone';
        var imgLoadComplete = false;
        var prevTranslate = opt.loop === true ? 0 : diff[index],
            translate = prevTranslate,
            cssProp;
        if (opt.startIndex + 1 - opt.itemsPerView > 0) index = prevIndex = Math.ceil((opt.startIndex + 1 - opt.itemsPerView) / opt.itemsPerMove);

        var timerId,
            timerCleared = true,
            clearLists = [];
        var resizeTimer = null;

		/*
		 * CommonSlider class initialize
		 *
		 * @method initialize
		 */
        this.initialize = function () {
            cssProp = this.canIUse('transform') === true ? opt.axis : opt.axis === 'x' ? 'marginLeft' : 'marginTop';
            if (items.eq(0).css('position') === 'static') items.css({ position: 'relative' });
            if (opt.axis === 'x') items.css({ 'float': 'left' });
            this.setSliderSize();
            if (typeof opt.interval === 'number') {
                var interval = opt.interval;
                opt.interval = [];
                for (var i = 0; i < totalMove; i++) {
                    opt.interval[i] = interval;
                }
            }
            if (typeof opt.pagination === 'object') {
                if (opt.pagination.children('li').length === 0) {
                    opt.pagination.empty();
                    for (var i = 0; i < totalMove; i++) {
                        if (i === index) opt.pagination.append('<li class="on"><a href="#none">' + (i + 1) + '</a></li>');
                        else opt.pagination.append('<li><a href="#none">' + (i + 1) + '</a></li>');
                    }
                }
                pagingList = opt.pagination.children('li');
            }
            if (opt.loop === false) {
                for (var i = 0; i < totalMove; i++) {
                    if (restItems > 0 && i === totalMove - 1) {
                        diff[i] = diff[i - 1] - (itemsD * restItems);
                        break;
                    }
                    diff[i] = -(itemsD * opt.itemsPerMove * i);
                }
            }
            if (opt.startIndex > 0) {
                if (opt.loop === true) {
                    for (var i = 0; i < opt.startIndex; i++) {
                        items.first().appendTo(wrapper);
                        items = wrapper.children('li');
                    }
                } else {
                    if (index > 0) this.setTranslate(diff[index]);
                }
            }
            if (opt.lazyLoad === true) this.lazyLoad(0);
            $(window).resize(this.resize);
            this.setHandler('init');
            this.timerCtrl();
        };

		/*
		 * resize �̺�Ʈ �ڵ鷯
		 *
		 * @method resize
		 */
        this.resize = function () {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function () {
                _this.setSliderSize();
            }, 100);
        };

		/*
		 * �̺�Ʈ �ڵ鷯 �� Ÿ�̸Ӹ� �����մϴ�.
		 *
		 * @method setHandler
		 * @param {Object} str ���ڿ�
		 */
        this.setHandler = function (str) {
            if (opt.autoPlay === true) this.setTimer();
            if (typeof opt.pagination === 'object' && opt.pagination.length === 1) {
                pagingList.children().click(this.toIdx);
                if (typeof str === 'string') clearLists.push(pagingList.children());
            }
            if (typeof opt.prevBtn === 'object' && opt.prevBtn.length === 1) {
                opt.prevBtn.click(this.toPrev);
                if (typeof str === 'string') clearLists.push(opt.prevBtn);
            }
            if (typeof opt.nextBtn === 'object' && opt.nextBtn.length === 1) {
                opt.nextBtn.click(this.toNext);
                if (typeof str === 'string') clearLists.push(opt.nextBtn);
            }
        };

		/*
		 * �̺�Ʈ �ڵ鷯 �� Ÿ�̸Ӹ� �����մϴ�.
		 *
		 * @method remHandler
		 */
        this.remHandler = function () {
            if (opt.autoPlay === true) this.clearTimer();
            if (typeof opt.pagination === 'object' && opt.pagination.length === 1) pagingList.children().unbind('click', this.toIdx);
            if (typeof opt.prevBtn === 'object' && opt.prevBtn.length === 1) opt.prevBtn.unbind('click', this.toPrev);
            if (typeof opt.nextBtn === 'object' && opt.nextBtn.length === 1) opt.nextBtn.unbind('click', this.toNext);
        };

		/*
		 * Ÿ�̸Ӹ� �����մϴ�.
		 *
		 * @method setTimer
		 */
        this.setTimer = function () {
            if (timerCleared === true) {
                timerId = setTimeout(_this.timer, opt.interval[index]);
                timerCleared = false;
            }
        };

		/*
		 * Ÿ�̸Ӹ� �����մϴ�.
		 *
		 * @method clearTimer
		 */
        this.clearTimer = function () {
            if (timerCleared === false) {
                clearTimeout(timerId);
                timerCleared = true;
            }
        };

		/*
		 * Ÿ�̸Ӱ� �۵��ϸ� toNext @method�� ȣ���մϴ�.
		 *
		 * @method timer
		 */
        this.timer = function () {
            _this.toNext();
        };

		/*
		 * ���� ���������� �̵��մϴ�.
		 *
		 * @method toPrev
		 */
        this.toPrev = function () {
            index--;
            index = index === -1 ? opt.loop === true ? totalMove - 1 : 0 : index;
            if (opt.lazyLoad === true && imgLoadComplete === false) _this.lazyLoad(-1);
            if (opt.loop === true) {
                _this.setTranslate(-itemsD * opt.itemsPerMove);
                for (var i = 0; i < opt.itemsPerMove; i++) {
                    items.last().prependTo(wrapper);
                    items = wrapper.children('li');
                }
                _this.slide('toPrev', 0, 1);
            } else {
                _this.slide('toPrev');
            }
        };

		/*
		 * ���� ���������� �̵��մϴ�.
		 *
		 * @method toNext
		 */
        this.toNext = function () {
            index++;
            index = index === totalMove ? opt.loop === true ? 0 : totalMove - 1 : index;
            if (opt.lazyLoad === true && imgLoadComplete === false) _this.lazyLoad(1);
            if (opt.loop === true) {
                _this.slide('toNext', -itemsD * opt.itemsPerMove, 1, function () {
                    _this.setTranslate(0);
                    for (var i = 0; i < opt.itemsPerMove; i++) {
                        items.first().appendTo(wrapper);
                        items = wrapper.children('li');
                    }
                });
            } else {
                _this.slide('toNext');
            }
        };

		/*
		 * �ش� index ���������� �̵��մϴ�.
		 *
		 * @method toIdx
		 * @param {Object} e �̺�Ʈ ��ü Ȥ�� �ε��� ��ȣ
		 */
        this.toIdx = function (e) {
            index = typeof e === 'object' ? $(this).parent('li').index() : e;
            var dist = index - prevIndex;
            if (opt.lazyLoad === true && imgLoadComplete === false) _this.lazyLoad(dist);
            if (opt.loop === true) {
                if (dist > 0) {
                    _this.slide('toIdx', dist * (-itemsD * opt.itemsPerMove), dist, function () {
                        _this.setTranslate(0);
                        for (var i = 0; i < dist * opt.itemsPerMove; i++) {
                            items.first().appendTo(wrapper);
                            items = wrapper.children('li');
                        }
                    });
                } else if (dist < 0) {
                    _this.setTranslate(-dist * (-itemsD * opt.itemsPerMove));
                    for (var i = 0; i < -dist * opt.itemsPerMove; i++) {
                        items.last().prependTo(wrapper);
                        items = wrapper.children('li');
                    }
                    _this.slide('toIdx', 0, -dist);
                }
            } else {
                _this.slide('toIdx');
            }
            if (typeof e === 'object') e.preventDefault();
        };

		/*
		 * slide�մϴ�.
		 *
		 * @method slide
		 * @param {String} method slide �޼ҵ带 ȣ���� �޼ҵ� �̸�
		 * @param {Number} value �̵��� ��ġ ��
		 * @param {Number} dist �̵� �Ÿ�
		 * @param {Function} callback �ݹ� �Լ�
		 */
        this.slide = function (method, value, dist, callback) {
            this.remHandler();
            prevTranslate = translate;
            if (length < (opt.itemsPerView + opt.itemsPerMove) * dist) {
                for (var i = 0; i < (opt.itemsPerView + (opt.itemsPerMove * dist)) - length; i++) {
                    items.eq(i).clone().addClass(cloneClass).appendTo(wrapper);
                }
                items = wrapper.children('li');
                length = items.length;
                _this.setSliderSize();
            }
            if (typeof opt.pagination === 'object') {
                pagingList.filter('.on').removeClass('on');
                pagingList.eq(index).addClass('on');
            }
            if (typeof opt.before === 'function') opt.before(index, prevIndex, method);
            var tweenObj = {ease: opt.easing, onComplete: function () {
                    if (typeof callback === 'function') callback();
                    if (length < (opt.itemsPerView + opt.itemsPerMove) * dist) {
                        items.filter('.' + cloneClass).remove();
                        items = wrapper.children('li');
                        _this.setSliderSize();
                    }
                    if (typeof opt.after === 'function') opt.after(index, prevIndex, method);
                    prevIndex = index;
                    _this.setHandler();
                }
            };
            if (opt.loop === true) tweenObj[cssProp] = value;
            else tweenObj[cssProp] = diff[index];
            TweenLite.to(wrapper, opt.duration / 1000, tweenObj);
        };

		/*
		 * ���� �� �� ���� �� ����
		 *
		 * @method setSliderSize
		 */
        this.setSliderSize = function () {
            if (opt.itemsPerView === 1) {
                itemsD = opt.axis === 'x' ? parseFloat(container.css('width'), 10) : parseFloat(container.css('height'), 10);
                opt.axis === 'x' ? items.width(itemsD) : items.height(itemsD);
            } else {
                itemsD = opt.axis === 'x' ? items.eq(0).outerWidth(true) : items.eq(0).outerHeight(true);
            }
            opt.axis === 'x' ? wrapper.width(itemsD * length) : wrapper.height(itemsD * length);
        };

		/*
		 * wrapper�� ��ġ�� �����մϴ�.
		 *
		 * @method setTranslate
		 * @param {Number} css value �Ӽ� ��
		 */
        this.setTranslate = function (value) {
            var tempObj = {};
            tempObj[cssProp] = value;
            TweenLite.set(wrapper, tempObj);
        };

		/*
		 * �ش� ������ �����ϸ� �̹����� �ε��մϴ�.
		 *
		 * @method lazyLoad
		 * @param {Number} dist �̵� �Ÿ�
		 */
        this.lazyLoad = function (dist) {
            var start, limit;
            function imgLoad(idx) {
                items.eq(idx).data('lazyLoad', true);
                var imgs = items.eq(idx).find('img');
                for (var i = 0; i < imgs.length; i++) {
                    if (typeof imgs.eq(i).data('src') === 'string') {
                        imgs.eq(i).attr('src', imgs.eq(i).data('src'));
                        imgs.eq(i).removeData('src');
                    }
                }
            }
            if (opt.loop === true) {
                if (dist > 0) {
                    start = opt.itemsPerView;
                    limit = opt.itemsPerView * dist + opt.itemsPerMove < length ? opt.itemsPerView * dist + opt.itemsPerMove : length;
                } else if (dist < 0) {
                    start = opt.itemsPerMove * dist + length > 0 ? opt.itemsPerMove * dist + length : 0;
                    limit = start + (opt.itemsPerMove * -dist) < length ? start + (opt.itemsPerMove * -dist) : length;
                } else {
                    start = 0;
                    limit = opt.itemsPerView;
                }
                for (var i = start; i < limit; i++) imgLoad(i);
            } else {
                if (dist > 0) {
                    start = opt.itemsPerMove * (prevIndex + 1);
                    limit = opt.itemsPerMove * (index + 1) < length ? opt.itemsPerMove * (index + 1) : length;
                } else if (dist < 0) {
                    start = opt.itemsPerMove * index;
                    limit = opt.itemsPerMove * prevIndex;
                } else {
                    start = opt.itemsPerView * (index + 1) <= length ? opt.itemsPerView * index : opt.itemsPerView * index - (opt.itemsPerView * (index + 1) - length);
                    limit = opt.itemsPerView * (index + 1) < length ? opt.itemsPerView * (index + 1) : length;
                }
                for (var i = start; i < limit; i++) imgLoad(i);
            }
            for (var i = 0; i < length; i++) {
                if (typeof items.eq(i).data('lazyLoad') === 'undefined') break;
                if (i === length - 1) imgLoadComplete = true;
            }
        };


		/*
		 * �������� ���� ���θ� üũ�մϴ�.
		 *
		 * @method canIUse
		 * @param {String} style üũ�� css �Ӽ�
		 */
        this.canIUse = function (style) {
            var el = document.createElement('div'),
                testCssProp = ['-webkit-' + style, '-moz-' + style, '-ms-' + style, style];

            for (var i = 0; i < testCssProp.length; i++) {
                if (typeof el.style[testCssProp[i]] === 'string') {
                    return true;
                    break;
                }
            }

            return false;
        };

		/*
		 * click �̺�Ʈ�� ���� slider�� �����ϴ� ���ҿ� ���콺�� �ø��ų� ��Ŀ���� �̵��ϸ� Ÿ�̸Ӹ� �����մϴ�.
		 *
		 * @method timerCtrl
		 */
        this.timerCtrl = function () {
            this.clearT = function () {
                if (opt.autoPlay === true) _this.clearTimer();
            }
            this.setT = function () {
                if (opt.autoPlay === true) _this.setTimer();
            }
            for (var i = 0; i < clearLists.length; i++) {
                clearLists[i].bind('mouseenter focusin', this.clearT);
                clearLists[i].bind('mouseleave focusout', this.setT);
            }
        };

		/*
		 * autoPlay�� ��Ȱ��ȭ�մϴ�.
		 *
		 * @method stop
		 */
        this.stop = function () {
            opt.autoPlay = false;
            this.clearTimer();
        };

		/*
		 * autoPlay�� Ȱ��ȭ�մϴ�.
		 *
		 * @method play
		 */
        this.play = function () {
            opt.autoPlay = true;
            this.setTimer();
        };

		/*
		 * ���� ������ �����ϰ� DOM�� �ʱ�ȭ�մϴ�.
		 *
		 * @method kill
		 */
        this.kill = function () {
            wrapper.html(originalItems);
            this.setTranslate(0);
            this.remHandler();
            $(window).unbind('resize', this.resize);
            for (var i = 0; i < clearLists.length; i++) {
                clearLists[i].unbind('mouseenter focusin', this.clearT);
                clearLists[i].unbind('mouseleave focusout', this.setT);
                clearLists[i] = null;
            }
        };

        // CommonSlider class �ʱ�ȭ �Լ��� ȣ���մϴ�.
        this.initialize();
    };

}(jQuery));
