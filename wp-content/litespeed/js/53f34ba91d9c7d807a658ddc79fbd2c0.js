window._wpemojiSettings={"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/svg\/","svgExt":".svg","source":{"concatemoji":"https:\/\/chriskthomas.com\/wp-includes\/js\/wp-emoji-release.min.js"}};
/*! This file is auto-generated */
!function(e,a,t){var n,r,o,i=a.createElement("canvas"),p=i.getContext&&i.getContext("2d");function s(e,t){var a=String.fromCharCode,e=(p.clearRect(0,0,i.width,i.height),p.fillText(a.apply(this,e),0,0),i.toDataURL());return p.clearRect(0,0,i.width,i.height),p.fillText(a.apply(this,t),0,0),e===i.toDataURL()}function c(e){var t=a.createElement("script");t.src=e,t.defer=t.type="text/javascript",a.getElementsByTagName("head")[0].appendChild(t)}for(o=Array("flag","emoji"),t.supports={everything:!0,everythingExceptFlag:!0},r=0;r<o.length;r++)t.supports[o[r]]=function(e){if(!p||!p.fillText)return!1;switch(p.textBaseline="top",p.font="600 32px Arial",e){case"flag":return s([127987,65039,8205,9895,65039],[127987,65039,8203,9895,65039])?!1:!s([55356,56826,55356,56819],[55356,56826,8203,55356,56819])&&!s([55356,57332,56128,56423,56128,56418,56128,56421,56128,56430,56128,56423,56128,56447],[55356,57332,8203,56128,56423,8203,56128,56418,8203,56128,56421,8203,56128,56430,8203,56128,56423,8203,56128,56447]);case"emoji":return!s([129777,127995,8205,129778,127999],[129777,127995,8203,129778,127999])}return!1}(o[r]),t.supports.everything=t.supports.everything&&t.supports[o[r]],"flag"!==o[r]&&(t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&t.supports[o[r]]);t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&!t.supports.flag,t.DOMReady=!1,t.readyCallback=function(){t.DOMReady=!0},t.supports.everything||(n=function(){t.readyCallback()},a.addEventListener?(a.addEventListener("DOMContentLoaded",n,!1),e.addEventListener("load",n,!1)):(e.attachEvent("onload",n),a.attachEvent("onreadystatechange",function(){"complete"===a.readyState&&t.readyCallback()})),(e=t.source||{}).concatemoji?c(e.concatemoji):e.wpemoji&&e.twemoji&&(c(e.twemoji),c(e.wpemoji)))}(window,document,window._wpemojiSettings)
;/*! jQuery Migrate v3.3.2 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function(e){return t(e,window)}):"object"==typeof module&&module.exports?module.exports=t(require("jquery"),window):t(jQuery,window)}(function(s,n){"use strict";function e(e){return 0<=function(e,t){for(var r=/^(\d+)\.(\d+)\.(\d+)/,n=r.exec(e)||[],o=r.exec(t)||[],i=1;i<=3;i++){if(+o[i]<+n[i])return 1;if(+n[i]<+o[i])return-1}return 0}(s.fn.jquery,e)}s.migrateVersion="3.3.2",n.console&&n.console.log&&(s&&e("3.0.0")||n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),s.migrateWarnings&&n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),n.console.log("JQMIGRATE: Migrate is installed"+(s.migrateMute?"":" with logging active")+", version "+s.migrateVersion));var r={};function u(e){var t=n.console;s.migrateDeduplicateWarnings&&r[e]||(r[e]=!0,s.migrateWarnings.push(e),t&&t.warn&&!s.migrateMute&&(t.warn("JQMIGRATE: "+e),s.migrateTrace&&t.trace&&t.trace()))}function t(e,t,r,n){Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return u(n),r},set:function(e){u(n),r=e}})}function o(e,t,r,n){e[t]=function(){return u(n),r.apply(this,arguments)}}s.migrateDeduplicateWarnings=!0,s.migrateWarnings=[],void 0===s.migrateTrace&&(s.migrateTrace=!0),s.migrateReset=function(){r={},s.migrateWarnings.length=0},"BackCompat"===n.document.compatMode&&u("jQuery is not compatible with Quirks Mode");var i,a,c,d={},l=s.fn.init,p=s.find,f=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,y=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,m=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;for(i in s.fn.init=function(e){var t=Array.prototype.slice.call(arguments);return"string"==typeof e&&"#"===e&&(u("jQuery( '#' ) is not a valid selector"),t[0]=[]),l.apply(this,t)},s.fn.init.prototype=s.fn,s.find=function(t){var r=Array.prototype.slice.call(arguments);if("string"==typeof t&&f.test(t))try{n.document.querySelector(t)}catch(e){t=t.replace(y,function(e,t,r,n){return"["+t+r+'"'+n+'"]'});try{n.document.querySelector(t),u("Attribute selector with '#' must be quoted: "+r[0]),r[0]=t}catch(e){u("Attribute selector with '#' was not fixed: "+r[0])}}return p.apply(this,r)},p)Object.prototype.hasOwnProperty.call(p,i)&&(s.find[i]=p[i]);o(s.fn,"size",function(){return this.length},"jQuery.fn.size() is deprecated and removed; use the .length property"),o(s,"parseJSON",function(){return JSON.parse.apply(null,arguments)},"jQuery.parseJSON is deprecated; use JSON.parse"),o(s,"holdReady",s.holdReady,"jQuery.holdReady is deprecated"),o(s,"unique",s.uniqueSort,"jQuery.unique is deprecated; use jQuery.uniqueSort"),t(s.expr,"filters",s.expr.pseudos,"jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"),t(s.expr,":",s.expr.pseudos,"jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"),e("3.1.1")&&o(s,"trim",function(e){return null==e?"":(e+"").replace(m,"")},"jQuery.trim is deprecated; use String.prototype.trim"),e("3.2.0")&&(o(s,"nodeName",function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},"jQuery.nodeName is deprecated"),o(s,"isArray",Array.isArray,"jQuery.isArray is deprecated; use Array.isArray")),e("3.3.0")&&(o(s,"isNumeric",function(e){var t=typeof e;return("number"==t||"string"==t)&&!isNaN(e-parseFloat(e))},"jQuery.isNumeric() is deprecated"),s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){d["[object "+t+"]"]=t.toLowerCase()}),o(s,"type",function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?d[Object.prototype.toString.call(e)]||"object":typeof e},"jQuery.type is deprecated"),o(s,"isFunction",function(e){return"function"==typeof e},"jQuery.isFunction() is deprecated"),o(s,"isWindow",function(e){return null!=e&&e===e.window},"jQuery.isWindow() is deprecated")),s.ajax&&(a=s.ajax,c=/(=)\?(?=&|$)|\?\?/,s.ajax=function(){var e=a.apply(this,arguments);return e.promise&&(o(e,"success",e.done,"jQXHR.success is deprecated and removed"),o(e,"error",e.fail,"jQXHR.error is deprecated and removed"),o(e,"complete",e.always,"jQXHR.complete is deprecated and removed")),e},e("4.0.0")||s.ajaxPrefilter("+json",function(e){!1!==e.jsonp&&(c.test(e.url)||"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&c.test(e.data))&&u("JSON-to-JSONP auto-promotion is deprecated")}));var g=s.fn.removeAttr,h=s.fn.toggleClass,v=/\S+/g;function j(e){return e.replace(/-([a-z])/g,function(e,t){return t.toUpperCase()})}s.fn.removeAttr=function(e){var r=this;return s.each(e.match(v),function(e,t){s.expr.match.bool.test(t)&&(u("jQuery.fn.removeAttr no longer sets boolean properties: "+t),r.prop(t,!1))}),g.apply(this,arguments)};var Q,b=!(s.fn.toggleClass=function(t){return void 0!==t&&"boolean"!=typeof t?h.apply(this,arguments):(u("jQuery.fn.toggleClass( boolean ) is deprecated"),this.each(function(){var e=this.getAttribute&&this.getAttribute("class")||"";e&&s.data(this,"__className__",e),this.setAttribute&&this.setAttribute("class",!e&&!1!==t&&s.data(this,"__className__")||"")}))}),w=/^[a-z]/,x=/^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;s.swap&&s.each(["height","width","reliableMarginRight"],function(e,t){var r=s.cssHooks[t]&&s.cssHooks[t].get;r&&(s.cssHooks[t].get=function(){var e;return b=!0,e=r.apply(this,arguments),b=!1,e})}),s.swap=function(e,t,r,n){var o,i,a={};for(i in b||u("jQuery.swap() is undocumented and deprecated"),t)a[i]=e.style[i],e.style[i]=t[i];for(i in o=r.apply(e,n||[]),t)e.style[i]=a[i];return o},e("3.4.0")&&"undefined"!=typeof Proxy&&(s.cssProps=new Proxy(s.cssProps||{},{set:function(){return u("JQMIGRATE: jQuery.cssProps is deprecated"),Reflect.set.apply(this,arguments)}})),s.cssNumber||(s.cssNumber={}),Q=s.fn.css,s.fn.css=function(e,t){var r,n,o=this;return e&&"object"==typeof e&&!Array.isArray(e)?(s.each(e,function(e,t){s.fn.css.call(o,e,t)}),this):("number"==typeof t&&(r=j(e),n=r,w.test(n)&&x.test(n[0].toUpperCase()+n.slice(1))||s.cssNumber[r]||u('Number-typed values are deprecated for jQuery.fn.css( "'+e+'", value )')),Q.apply(this,arguments))};var A,k,S,M,N=s.data;s.data=function(e,t,r){var n,o,i;if(t&&"object"==typeof t&&2===arguments.length){for(i in n=s.hasData(e)&&N.call(this,e),o={},t)i!==j(i)?(u("jQuery.data() always sets/gets camelCased names: "+i),n[i]=t[i]):o[i]=t[i];return N.call(this,e,o),t}return t&&"string"==typeof t&&t!==j(t)&&(n=s.hasData(e)&&N.call(this,e))&&t in n?(u("jQuery.data() always sets/gets camelCased names: "+t),2<arguments.length&&(n[t]=r),n[t]):N.apply(this,arguments)},s.fx&&(S=s.Tween.prototype.run,M=function(e){return e},s.Tween.prototype.run=function(){1<s.easing[this.easing].length&&(u("'jQuery.easing."+this.easing.toString()+"' should use only one argument"),s.easing[this.easing]=M),S.apply(this,arguments)},A=s.fx.interval||13,k="jQuery.fx.interval is deprecated",n.requestAnimationFrame&&Object.defineProperty(s.fx,"interval",{configurable:!0,enumerable:!0,get:function(){return n.document.hidden||u(k),A},set:function(e){u(k),A=e}}));var R=s.fn.load,H=s.event.add,C=s.event.fix;s.event.props=[],s.event.fixHooks={},t(s.event.props,"concat",s.event.props.concat,"jQuery.event.props.concat() is deprecated and removed"),s.event.fix=function(e){var t,r=e.type,n=this.fixHooks[r],o=s.event.props;if(o.length){u("jQuery.event.props are deprecated and removed: "+o.join());while(o.length)s.event.addProp(o.pop())}if(n&&!n._migrated_&&(n._migrated_=!0,u("jQuery.event.fixHooks are deprecated and removed: "+r),(o=n.props)&&o.length))while(o.length)s.event.addProp(o.pop());return t=C.call(this,e),n&&n.filter?n.filter(t,e):t},s.event.add=function(e,t){return e===n&&"load"===t&&"complete"===n.document.readyState&&u("jQuery(window).on('load'...) called after load event occurred"),H.apply(this,arguments)},s.each(["load","unload","error"],function(e,t){s.fn[t]=function(){var e=Array.prototype.slice.call(arguments,0);return"load"===t&&"string"==typeof e[0]?R.apply(this,e):(u("jQuery.fn."+t+"() is deprecated"),e.splice(0,0,t),arguments.length?this.on.apply(this,e):(this.triggerHandler.apply(this,e),this))}}),s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,r){s.fn[r]=function(e,t){return u("jQuery.fn."+r+"() event shorthand is deprecated"),0<arguments.length?this.on(r,null,e,t):this.trigger(r)}}),s(function(){s(n.document).triggerHandler("ready")}),s.event.special.ready={setup:function(){this===n.document&&u("'ready' event is deprecated")}},s.fn.extend({bind:function(e,t,r){return u("jQuery.fn.bind() is deprecated"),this.on(e,null,t,r)},unbind:function(e,t){return u("jQuery.fn.unbind() is deprecated"),this.off(e,null,t)},delegate:function(e,t,r,n){return u("jQuery.fn.delegate() is deprecated"),this.on(t,e,r,n)},undelegate:function(e,t,r){return u("jQuery.fn.undelegate() is deprecated"),1===arguments.length?this.off(e,"**"):this.off(t,e||"**",r)},hover:function(e,t){return u("jQuery.fn.hover() is deprecated"),this.on("mouseenter",e).on("mouseleave",t||e)}});function T(e){var t=n.document.implementation.createHTMLDocument("");return t.body.innerHTML=e,t.body&&t.body.innerHTML}function P(e){var t=e.replace(O,"<$1></$2>");t!==e&&T(e)!==T(t)&&u("HTML tags must be properly nested and closed: "+e)}var O=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,q=s.htmlPrefilter;s.UNSAFE_restoreLegacyHtmlPrefilter=function(){s.htmlPrefilter=function(e){return P(e),e.replace(O,"<$1></$2>")}},s.htmlPrefilter=function(e){return P(e),q(e)};var D,_=s.fn.offset;s.fn.offset=function(){var e=this[0];return!e||e.nodeType&&e.getBoundingClientRect?_.apply(this,arguments):(u("jQuery.fn.offset() requires a valid DOM element"),arguments.length?this:void 0)},s.ajax&&(D=s.param,s.param=function(e,t){var r=s.ajaxSettings&&s.ajaxSettings.traditional;return void 0===t&&r&&(u("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),t=r),D.call(this,e,t)});var E,F,J=s.fn.andSelf||s.fn.addBack;return s.fn.andSelf=function(){return u("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"),J.apply(this,arguments)},s.Deferred&&(E=s.Deferred,F=[["resolve","done",s.Callbacks("once memory"),s.Callbacks("once memory"),"resolved"],["reject","fail",s.Callbacks("once memory"),s.Callbacks("once memory"),"rejected"],["notify","progress",s.Callbacks("memory"),s.Callbacks("memory")]],s.Deferred=function(e){var i=E(),a=i.promise();return i.pipe=a.pipe=function(){var o=arguments;return u("deferred.pipe() is deprecated"),s.Deferred(function(n){s.each(F,function(e,t){var r="function"==typeof o[e]&&o[e];i[t[1]](function(){var e=r&&r.apply(this,arguments);e&&"function"==typeof e.promise?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[t[0]+"With"](this===a?n.promise():this,r?[e]:arguments)})}),o=null}).promise()},e&&e.call(i,i),i},s.Deferred.exceptionHook=E.exceptionHook),s});
;document.documentElement.classList.add('jetpack-lazy-images-js-enabled')
;document.addEventListener('DOMContentLoaded',function(){var commentForms=document.getElementsByClassName('jetpack_remote_comment');for(var i=0;i<commentForms.length;i++){commentForms[i].allowTransparency=!1;commentForms[i].scrolling='no'}})
;!function(){function t(){if(this.complete){var e=this.getAttribute("data-lazy-src");if(e&&this.src!==e)this.addEventListener("onload",t);else{var d=this.width,n=this.height;d&&d>0&&n&&n>0&&(this.setAttribute("width",d),this.setAttribute("height",n),i(this))}}else this.addEventListener("onload",t)}var e=function(){for(var e=document.querySelectorAll("img[data-recalc-dims]"),i=0;i<e.length;i++)t.call(e[i])},i=function(t){t.removeAttribute("data-recalc-dims"),t.removeAttribute("scale")};"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?document.addEventListener("DOMContentLoaded",e):e()),document.body.addEventListener("is.post-load",e)}();
;var ct_author_objectL10n={"openPrimaryMenu":"open primary menu","closePrimaryMenu":"close primary menu","openChildMenu":"open child menu","closeChildMenu":"close child menu"}
;!function(a){"use strict";a.fn.fitVids=function(b){var c={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){var d=document.head||document.getElementsByTagName("head")[0],e=document.createElement("div");e.innerHTML='<p>x</p><style id="fit-vids-style">'+".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}"+"</style>",d.appendChild(e.childNodes[1])}return b&&a.extend(c,b),this.each(function(){var b=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];c.customSelector&&b.push(c.customSelector);var d=".fitvidsignore";c.ignore&&(d=d+", "+c.ignore);var e=a(this).find(b.join(","));e=e.not("object object"),e=e.not(d),e.each(function(){var b=a(this);if(!(b.parents(d).length>0||"embed"===this.tagName.toLowerCase()&&b.parent("object").length||b.parent(".fluid-width-video-wrapper").length)){b.css("height")||b.css("width")||!isNaN(b.attr("height"))&&!isNaN(b.attr("width"))||(b.attr("height",9),b.attr("width",16));var c="object"===this.tagName.toLowerCase()||b.attr("height")&&!isNaN(parseInt(b.attr("height"),10))?parseInt(b.attr("height"),10):b.height(),e=isNaN(parseInt(b.attr("width"),10))?b.width():parseInt(b.attr("width"),10),f=c/e;if(!b.attr("name")){var g="fitvid"+a.fn.fitVids._count;b.attr("name",g),a.fn.fitVids._count++}b.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*f+"%"),b.removeAttr("height").removeAttr("width")}})})},a.fn.fitVids._count=0}(window.jQuery||window.Zepto),jQuery(document).ready(function(a){function b(){if(r.hasClass("open"))r.trigger("close"),r.removeClass("open"),a(this).children("span").text(ct_author_objectL10n.openPrimaryMenu),a(this).attr("aria-expanded","false"),a("#menu-primary-items ul, .menu-unset ul").removeAttr("style"),a(".menu-item-has-children").each(function(){a(this).hasClass("open")&&a(this).removeClass("open")}),g(),d(),a(window).unbind("scroll",k);else{r.addClass("open"),r.trigger("open"),a(this).children("span").text(ct_author_objectL10n.closePrimaryMenu),a(this).attr("aria-expanded","true");var b=window.innerWidth;if(b>549&&b<950){var c=0;s.find(".social-media-icons").length&&(c=s.find(".social-media-icons").find("ul").outerHeight());var e=y.outerHeight(),f=r.outerHeight(),h=u.height(),i=h+f+c+e;i>window.innerHeight&&t.css("min-height",i+"px"),a(window).scroll(k)}}}function c(){var b=a(this).parent();b.hasClass("open")?(b.removeClass("open"),a(this).children("span").text(ct_author_objectL10n.openChildMenu),a(this).attr("aria-expanded","false")):(b.addClass("open"),a(this).children("span").text(ct_author_objectL10n.closeChildMenu),a(this).attr("aria-expanded","true"),A=!1),e(a(this)),g()}function d(){var b=window.innerWidth;if(b>549&&b<950){var c=0;s.find(".social-media-icons").length&&(c=s.find(".social-media-icons").find("ul").outerHeight());var d=y.outerHeight(),e=r.outerHeight();a("#menu-primary").css("top",e+c+24+"px"),u.css("top",e+c+d+48+"px")}else a("#sidebar-primary, #menu-primary").css("top","")}function e(a){var b=window.innerWidth;if(b>549&&b<950){var c=a.next(),d=0;c.children().each(function(){d+=36});var e=u.css("top"),f=t.css("min-height");e=parseInt(e),f=parseInt(f);a.parent().hasClass("open")?(u.css("top",e+d+"px"),t.css("min-height",f+d+"px")):(u.css("top",e-d+"px"),t.css("min-height",f-d+"px"))}}function f(){window.innerWidth>949&&r.hasClass("open")&&b()}function g(){t.css("min-height","");var a=v.height();x.length>0&&(a-=x.outerHeight()),G=r.outerHeight(),G>a&&(a=G),a>window.innerHeight&&t.css("min-height",a.toString()+"px")}function h(){if(C=window.innerWidth,D=a(window).height(),E=a("body").hasClass("admin-bar")?a("#wpadminbar").height():0,F=v.height(),G=r.outerHeight(),window.innerWidth<950){r.removeAttr("style")}}function i(){if(!(950>C)){var b=a(window).scrollTop();G+E>D&&1!=A?b>z?n?(n=!1,B=r.offset().top>0?r.offset().top-E:0,r.attr("style","top: "+B+"px;")):!o&&b+D>=G+r.offset().top&&G+E<=F?(o=!0,r.attr("style","position: fixed; bottom: 0;")):G+E>D&&!o&&(B=r.offset().top>0?r.offset().top-E:0,r.attr("style","top: "+B+"px;")):b<z?o?(o=!1,B=r.offset().top>0?r.offset().top-E:0,r.attr("style","top: "+B+"px;")):!n&&b>=0&&b+E<=r.offset().top&&(n=!0,r.attr("style","position: fixed;")):n=o=!1:(n=!0,A=!0,r.attr("style","position: fixed;")),z=b}}function j(){h(),i()}function k(){var c=u.offset().top+u.height();a(window).scrollTop()>c+50&&b()}function l(){"object-fit"in document.body.style||a(".featured-image").each(function(){if(!a(this).parent(".entry").hasClass("ratio-natural")){var b=a(this).children("img").add(a(this).children("a").children("img"));if(b.hasClass("no-object-fit"))return;b.addClass("no-object-fit"),b.outerWidth()<a(this).outerWidth()&&b.css({width:"100%","min-width":"100%","max-width":"100%",height:"auto","min-height":"100%","max-height":"none"}),b.outerHeight()<a(this).outerHeight()&&b.css({height:"100%","min-height":"100%","max-height":"100%",width:"auto","min-width":"100%","max-width":"none"})}})}function m(){a(".infinite-wrap").children(".entry").detach().appendTo(w),a(".infinite-wrap, .infinite-loader").remove()}var n,o,p,q=a(".toggle-dropdown"),r=a("#main-sidebar"),s=a("#site-header"),t=a("#main"),u=a("#sidebar-primary"),v=a("#overflow-container"),w=a("#loop-container"),x=a("#header-image"),y=a(a(".menu-unset").length?".menu-unset":"#menu-primary-items"),z=0,A=!1,B=0,C=window.innerWidth,D=a(window).height(),E=a("body").hasClass("admin-bar")?a("#wpadminbar").height():0,F=v.height(),G=r.outerHeight();d(),l(),a("#toggle-navigation").on("click",b),q.on("click",c),a(document).ready(function(){g()}),a(window).on("resize",function(){d(),f(),g(),l()}),a(document.body).on("post-load",function(){a.when(m()).then(function(){l()})}),a(".post-content").fitVids({customSelector:'iframe[src*="dailymotion.com"], iframe[src*="slideshare.net"], iframe[src*="animoto.com"], iframe[src*="blip.tv"], iframe[src*="funnyordie.com"], iframe[src*="hulu.com"], iframe[src*="ted.com"], iframe[src*="wordpress.tv"]'}),a(".current-menu-ancestor").addClass("open"),a(window).on("scroll",i).on("resize",function(){clearTimeout(p),p=setTimeout(j,500)}),r.on("click keydown","button",j),j(),0!==a("#scroll-to-top").length&&(a(window).on("scroll",function(){a(this).scrollTop()>=200?a("#scroll-to-top").addClass("visible"):a("#scroll-to-top").removeClass("visible")}),a("#scroll-to-top").click(function(b){a("body,html").animate({scrollTop:0},800),a(this).blur()}))}),window.addEventListener("hashchange",function(a){var b=document.getElementById(location.hash.substring(1));b&&(/^(?:a|select|input|button|textarea)$/i.test(b.tagName)||(b.tabIndex=-1),b.focus())},!1);
;/*! This file is auto-generated */
window.addComment=function(v){var I,C,h,E=v.document,b={commentReplyClass:"comment-reply-link",commentReplyTitleId:"reply-title",cancelReplyId:"cancel-comment-reply-link",commentFormId:"commentform",temporaryFormId:"wp-temp-form-div",parentIdFieldId:"comment_parent",postIdFieldId:"comment_post_ID"},e=v.MutationObserver||v.WebKitMutationObserver||v.MozMutationObserver,r="querySelector"in E&&"addEventListener"in v,n=!!E.documentElement.dataset;function t(){d(),e&&new e(o).observe(E.body,{childList:!0,subtree:!0})}function d(e){if(r&&(I=g(b.cancelReplyId),C=g(b.commentFormId),I)){I.addEventListener("touchstart",l),I.addEventListener("click",l);function t(e){if((e.metaKey||e.ctrlKey)&&13===e.keyCode)return C.removeEventListener("keydown",t),e.preventDefault(),C.submit.click(),!1}C&&C.addEventListener("keydown",t);for(var n,d=function(e){var t=b.commentReplyClass;e&&e.childNodes||(e=E);e=E.getElementsByClassName?e.getElementsByClassName(t):e.querySelectorAll("."+t);return e}(e),o=0,i=d.length;o<i;o++)(n=d[o]).addEventListener("touchstart",a),n.addEventListener("click",a)}}function l(e){var t,n,d=g(b.temporaryFormId);d&&h&&(g(b.parentIdFieldId).value="0",t=d.textContent,d.parentNode.replaceChild(h,d),this.style.display="none",n=(d=(d=g(b.commentReplyTitleId))&&d.firstChild)&&d.nextSibling,d&&d.nodeType===Node.TEXT_NODE&&t&&(n&&"A"===n.nodeName&&n.id!==b.cancelReplyId&&(n.style.display=""),d.textContent=t),e.preventDefault())}function a(e){var t=g(b.commentReplyTitleId),t=t&&t.firstChild.textContent,n=this,d=m(n,"belowelement"),o=m(n,"commentid"),i=m(n,"respondelement"),r=m(n,"postid"),n=m(n,"replyto")||t;d&&o&&i&&r&&!1===v.addComment.moveForm(d,o,i,r,n)&&e.preventDefault()}function o(e){for(var t=e.length;t--;)if(e[t].addedNodes.length)return void d()}function m(e,t){return n?e.dataset[t]:e.getAttribute("data-"+t)}function g(e){return E.getElementById(e)}return r&&"loading"!==E.readyState?t():r&&v.addEventListener("DOMContentLoaded",t,!1),{init:d,moveForm:function(e,t,n,d,o){var i,r,l,a,m,c,s,e=g(e),n=(h=g(n),g(b.parentIdFieldId)),y=g(b.postIdFieldId),p=g(b.commentReplyTitleId),u=(p=p&&p.firstChild)&&p.nextSibling;if(e&&h&&n){void 0===o&&(o=p&&p.textContent),a=h,m=b.temporaryFormId,c=g(m),s=(s=g(b.commentReplyTitleId))?s.firstChild.textContent:"",c||((c=E.createElement("div")).id=m,c.style.display="none",c.textContent=s,a.parentNode.insertBefore(c,a)),d&&y&&(y.value=d),n.value=t,I.style.display="",e.parentNode.insertBefore(h,e.nextSibling),p&&p.nodeType===Node.TEXT_NODE&&(u&&"A"===u.nodeName&&u.id!==b.cancelReplyId&&(u.style.display="none"),p.textContent=o),I.onclick=function(){return!1};try{for(var f=0;f<C.elements.length;f++)if(i=C.elements[f],r=!1,"getComputedStyle"in v?l=v.getComputedStyle(i):E.documentElement.currentStyle&&(l=i.currentStyle),(i.offsetWidth<=0&&i.offsetHeight<=0||"hidden"===l.visibility)&&(r=!0),"hidden"!==i.type&&!i.disabled&&!r){i.focus();break}}catch(e){}return!1}}}}(window);
;!function(){"use strict";if("object"==typeof window)if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});else{var t=function(t){for(var e=window.document,o=i(e);o;)o=i(e=o.ownerDocument);return e}(),e=[],o=null,n=null;s.prototype.THROTTLE_TIMEOUT=100,s.prototype.POLL_INTERVAL=null,s.prototype.USE_MUTATION_OBSERVER=!0,s._setupCrossOriginUpdater=function(){return o||(o=function(t,o){n=t&&o?l(t,o):{top:0,bottom:0,left:0,right:0,width:0,height:0},e.forEach((function(t){t._checkForIntersections()}))}),o},s._resetCrossOriginUpdater=function(){o=null,n=null},s.prototype.observe=function(t){if(!this._observationTargets.some((function(e){return e.element==t}))){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(t.ownerDocument),this._checkForIntersections()}},s.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter((function(e){return e.element!=t})),this._unmonitorIntersections(t.ownerDocument),0==this._observationTargets.length&&this._unregisterInstance()},s.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorAllIntersections(),this._unregisterInstance()},s.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},s.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter((function(t,e,o){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==o[e-1]}))},s.prototype._parseRootMargin=function(t){var e=(t||"0px").split(/\s+/).map((function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}}));return e[1]=e[1]||e[0],e[2]=e[2]||e[0],e[3]=e[3]||e[1],e},s.prototype._monitorIntersections=function(e){var o=e.defaultView;if(o&&-1==this._monitoringDocuments.indexOf(e)){var n=this._checkForIntersections,r=null,s=null;this.POLL_INTERVAL?r=o.setInterval(n,this.POLL_INTERVAL):(h(o,"resize",n,!0),h(e,"scroll",n,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in o&&(s=new o.MutationObserver(n)).observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0})),this._monitoringDocuments.push(e),this._monitoringUnsubscribes.push((function(){var t=e.defaultView;t&&(r&&t.clearInterval(r),c(t,"resize",n,!0)),c(e,"scroll",n,!0),s&&s.disconnect()}));var u=this.root&&(this.root.ownerDocument||this.root)||t;if(e!=u){var a=i(e);a&&this._monitorIntersections(a.ownerDocument)}}},s.prototype._unmonitorIntersections=function(e){var o=this._monitoringDocuments.indexOf(e);if(-1!=o){var n=this.root&&(this.root.ownerDocument||this.root)||t,r=this._observationTargets.some((function(t){var o=t.element.ownerDocument;if(o==e)return!0;for(;o&&o!=n;){var r=i(o);if((o=r&&r.ownerDocument)==e)return!0}return!1}));if(!r){var s=this._monitoringUnsubscribes[o];if(this._monitoringDocuments.splice(o,1),this._monitoringUnsubscribes.splice(o,1),s(),e!=n){var h=i(e);h&&this._unmonitorIntersections(h.ownerDocument)}}}},s.prototype._unmonitorAllIntersections=function(){var t=this._monitoringUnsubscribes.slice(0);this._monitoringDocuments.length=0,this._monitoringUnsubscribes.length=0;for(var e=0;e<t.length;e++)t[e]()},s.prototype._checkForIntersections=function(){if(this.root||!o||n){var t=this._rootIsInDom(),e=t?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach((function(n){var i=n.element,s=u(i),h=this._rootContainsTarget(i),c=n.entry,a=t&&h&&this._computeTargetAndRootIntersection(i,s,e),l=null;this._rootContainsTarget(i)?o&&!this.root||(l=e):l={top:0,bottom:0,left:0,right:0,width:0,height:0};var f=n.entry=new r({time:window.performance&&performance.now&&performance.now(),target:i,boundingClientRect:s,rootBounds:l,intersectionRect:a});c?t&&h?this._hasCrossedThreshold(c,f)&&this._queuedEntries.push(f):c&&c.isIntersecting&&this._queuedEntries.push(f):this._queuedEntries.push(f)}),this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)}},s.prototype._computeTargetAndRootIntersection=function(e,i,r){if("none"!=window.getComputedStyle(e).display){for(var s,h,c,a,f,d,g,m,v=i,_=p(e),b=!1;!b&&_;){var w=null,y=1==_.nodeType?window.getComputedStyle(_):{};if("none"==y.display)return null;if(_==this.root||9==_.nodeType)if(b=!0,_==this.root||_==t)o&&!this.root?!n||0==n.width&&0==n.height?(_=null,w=null,v=null):w=n:w=r;else{var I=p(_),E=I&&u(I),T=I&&this._computeTargetAndRootIntersection(I,E,r);E&&T?(_=I,w=l(E,T)):(_=null,v=null)}else{var R=_.ownerDocument;_!=R.body&&_!=R.documentElement&&"visible"!=y.overflow&&(w=u(_))}if(w&&(s=w,h=v,c=void 0,a=void 0,f=void 0,d=void 0,g=void 0,m=void 0,c=Math.max(s.top,h.top),a=Math.min(s.bottom,h.bottom),f=Math.max(s.left,h.left),d=Math.min(s.right,h.right),m=a-c,v=(g=d-f)>=0&&m>=0&&{top:c,bottom:a,left:f,right:d,width:g,height:m}||null),!v)break;_=_&&p(_)}return v}},s.prototype._getRootRect=function(){var e;if(this.root&&!d(this.root))e=u(this.root);else{var o=d(this.root)?this.root:t,n=o.documentElement,i=o.body;e={top:0,left:0,right:n.clientWidth||i.clientWidth,width:n.clientWidth||i.clientWidth,bottom:n.clientHeight||i.clientHeight,height:n.clientHeight||i.clientHeight}}return this._expandRectByRootMargin(e)},s.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map((function(e,o){return"px"==e.unit?e.value:e.value*(o%2?t.width:t.height)/100})),o={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return o.width=o.right-o.left,o.height=o.bottom-o.top,o},s.prototype._hasCrossedThreshold=function(t,e){var o=t&&t.isIntersecting?t.intersectionRatio||0:-1,n=e.isIntersecting?e.intersectionRatio||0:-1;if(o!==n)for(var i=0;i<this.thresholds.length;i++){var r=this.thresholds[i];if(r==o||r==n||r<o!=r<n)return!0}},s.prototype._rootIsInDom=function(){return!this.root||f(t,this.root)},s.prototype._rootContainsTarget=function(e){var o=this.root&&(this.root.ownerDocument||this.root)||t;return f(o,e)&&(!this.root||o==e.ownerDocument)},s.prototype._registerInstance=function(){e.indexOf(this)<0&&e.push(this)},s.prototype._unregisterInstance=function(){var t=e.indexOf(this);-1!=t&&e.splice(t,1)},window.IntersectionObserver=s,window.IntersectionObserverEntry=r}function i(t){try{return t.defaultView&&t.defaultView.frameElement||null}catch(t){return null}}function r(t){this.time=t.time,this.target=t.target,this.rootBounds=a(t.rootBounds),this.boundingClientRect=a(t.boundingClientRect),this.intersectionRect=a(t.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0}),this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,o=e.width*e.height,n=this.intersectionRect,i=n.width*n.height;this.intersectionRatio=o?Number((i/o).toFixed(4)):this.isIntersecting?1:0}function s(t,e){var o,n,i,r=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(r.root&&1!=r.root.nodeType&&9!=r.root.nodeType)throw new Error("root must be a Document or Element");this._checkForIntersections=(o=this._checkForIntersections.bind(this),n=this.THROTTLE_TIMEOUT,i=null,function(){i||(i=setTimeout((function(){o(),i=null}),n))}),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(r.rootMargin),this.thresholds=this._initThresholds(r.threshold),this.root=r.root||null,this.rootMargin=this._rootMarginValues.map((function(t){return t.value+t.unit})).join(" "),this._monitoringDocuments=[],this._monitoringUnsubscribes=[]}function h(t,e,o,n){"function"==typeof t.addEventListener?t.addEventListener(e,o,n||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,o)}function c(t,e,o,n){"function"==typeof t.removeEventListener?t.removeEventListener(e,o,n||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,o)}function u(t){var e;try{e=t.getBoundingClientRect()}catch(t){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function a(t){return!t||"x"in t?t:{top:t.top,y:t.top,bottom:t.bottom,left:t.left,x:t.left,right:t.right,width:t.width,height:t.height}}function l(t,e){var o=e.top-t.top,n=e.left-t.left;return{top:o,left:n,height:e.height,width:e.width,bottom:o+e.height,right:n+e.width}}function f(t,e){for(var o=e;o;){if(o==t)return!0;o=p(o)}return!1}function p(e){var o=e.parentNode;return 9==e.nodeType&&e!=t?i(e):(o&&o.assignedSlot&&(o=o.assignedSlot.parentNode),o&&11==o.nodeType&&o.host?o.host:o)}function d(t){return t&&9===t.nodeType}}()
;var jetpackLazyImagesL10n={"loading_warning":"Images are still loading. Please cancel your print and try again."}
;(()=>{const e=function(){const e={rootMargin:"200px 0px",threshold:.01},t=[];let n,a,i;d();const o=document.querySelector("body");function d(){n=Array.from(document.querySelectorAll("img.jetpack-lazy-image:not(.jetpack-lazy-image--handled)")),i&&i.disconnect(),"IntersectionObserver"in window?(i=new IntersectionObserver(l,e),n.forEach((function(e){e.getAttribute("data-lazy-loaded")||i.observe(e)})),window.addEventListener("beforeprint",c),window.matchMedia&&window.matchMedia("print").addListener((function(e){e.matches&&c()}))):r()}function r(){for(i&&i.disconnect();n.length>0;)s(n[0])}function l(e){for(let t=0;t<e.length;t++){const n=e[t];n.intersectionRatio>0&&(i.unobserve(n.target),s(n.target))}0===n.length&&i.disconnect()}function c(){if(!a&&(n.length>0||t.length>0)){a=document.createElement("div"),a.id="loadingWarning",a.style.fontWeight="bold",a.innerText=jetpackLazyImagesL10n.loading_warning;const e=document.createElement("style");e.innerHTML="#loadingWarning { display: none; }\n@media print {\n#loadingWarning { display: block; }\nbody > #loadingWarning ~ * { display: none !important; }\n}",a.appendChild(e),o.insertBefore(a,o.firstChild)}n.length>0&&r(),a&&alert(jetpackLazyImagesL10n.loading_warning)}function s(e){let a;if(!(e instanceof HTMLImageElement))return;const i=e.getAttribute("data-lazy-srcset"),o=e.getAttribute("data-lazy-sizes");e.removeAttribute("data-lazy-srcset"),e.removeAttribute("data-lazy-sizes"),e.removeAttribute("data-lazy-src"),e.classList.add("jetpack-lazy-image--handled"),e.setAttribute("data-lazy-loaded",1),o&&e.setAttribute("sizes",o),i?e.setAttribute("srcset",i):e.removeAttribute("srcset"),e.setAttribute("loading","eager"),t.push(e);const d=n.indexOf(e);d>=0&&n.splice(d,1),e.complete?g.call(e,null):(e.addEventListener("load",g,{once:!0}),e.addEventListener("error",g,{once:!0}));try{a=new Event("jetpack-lazy-loaded-image",{bubbles:!0,cancelable:!0})}catch(e){a=document.createEvent("Event"),a.initEvent("jetpack-lazy-loaded-image",!0,!0)}e.dispatchEvent(a)}function g(){const e=t.indexOf(this);e>=0&&t.splice(e,1),a&&0===n.length&&0===t.length&&(a.parentNode.removeChild(a),a=null)}o&&(o.addEventListener("is.post-load",d),o.addEventListener("jetpack-lazy-images-load",d))};"interactive"===document.readyState||"complete"===document.readyState?e():document.addEventListener("DOMContentLoaded",e)})()
;(function(){var comm_par_el=document.getElementById('comment_parent'),comm_par=(comm_par_el&&comm_par_el.value)?comm_par_el.value:'',frame=document.getElementById('jetpack_remote_comment'),tellFrameNewParent;tellFrameNewParent=function(){if(comm_par){frame.src="https://jetpack.wordpress.com/jetpack-comment/?blogid=200260868&postid=199&comment_registration=0&require_name_email=1&stc_enabled=0&stb_enabled=0&show_avatars=1&avatar_default=identicon&greeting=Leave+a+Reply&jetpack_comments_nonce=6946ce7e5a&greeting_reply=Leave+a+Reply+to+%25s&color_scheme=light&lang=en_US&jetpack_version=11.1&show_cookie_consent=10&has_cookie_consent=0&token_key=%3Bnormal%3B&sig=fa2fbad0a3f83ebc3d25f722adae9c1e3cfeea97#parent=https%3A%2F%2Fchriskthomas.com%2Fnew-fantasy%2F"+'&replytocom='+parseInt(comm_par,10).toString()}else{frame.src="https://jetpack.wordpress.com/jetpack-comment/?blogid=200260868&postid=199&comment_registration=0&require_name_email=1&stc_enabled=0&stb_enabled=0&show_avatars=1&avatar_default=identicon&greeting=Leave+a+Reply&jetpack_comments_nonce=6946ce7e5a&greeting_reply=Leave+a+Reply+to+%25s&color_scheme=light&lang=en_US&jetpack_version=11.1&show_cookie_consent=10&has_cookie_consent=0&token_key=%3Bnormal%3B&sig=fa2fbad0a3f83ebc3d25f722adae9c1e3cfeea97#parent=https%3A%2F%2Fchriskthomas.com%2Fnew-fantasy%2F"}};if('undefined'!==typeof addComment){addComment._Jetpack_moveForm=addComment.moveForm;addComment.moveForm=function(commId,parentId,respondId,postId){var returnValue=addComment._Jetpack_moveForm(commId,parentId,respondId,postId),cancelClick,cancel;if(!1===returnValue){cancel=document.getElementById('cancel-comment-reply-link');cancelClick=cancel.onclick;cancel.onclick=function(){var cancelReturn=cancelClick.call(this);if(!1!==cancelReturn){return cancelReturn}
if(!comm_par){return cancelReturn}
comm_par=0;tellFrameNewParent();return cancelReturn}}
if(comm_par==parentId){return returnValue}
comm_par=parentId;tellFrameNewParent();return returnValue}}
document.addEventListener('DOMContentLoaded',function(){var iframe_url="https:\/\/jetpack.wordpress.com";if(window.postMessage){if(document.addEventListener){window.addEventListener('message',function(event){var origin=event.origin.replace(/^http:\/\//i,'https://');if(iframe_url.replace(/^http:\/\//i,'https://')!==origin){return}
frame.style.height=event.data+'px'})}else if(document.attachEvent){window.attachEvent('message',function(event){var origin=event.origin.replace(/^http:\/\//i,'https://');if(iframe_url.replace(/^http:\/\//i,'https://')!==origin){return}
frame.style.height=event.data+'px'})}}})})()
;_stq=window._stq||[];_stq.push(['view',{v:'ext',j:'1:11.1',blog:'200260868',post:'199',tz:'-5',srv:'chriskthomas.com'}]);_stq.push(['clickTrackerInit','200260868','199'])
;