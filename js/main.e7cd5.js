webpackJsonp([1],{"./components/article/article.scss":function(e,t){},"./components/blog-digest/blog-digest.scss":function(e,t){},"./components/button.scss":function(e,t){},"./components/footer.scss":function(e,t){},"./components/header.scss":function(e,t){},"./components/icon.scss":function(e,t){},"./components/main-menu.scss":function(e,t){},"./components/peoples/peoples.scss":function(e,t){},"./components/questions/questions.scss":function(e,t){},"./css/basics/basics.scss":function(e,t){},"./css/basics/fonts.scss":function(e,t){},"./html lazy-once recursive ^\\.\\/.*\\.html$":function(e,t,n){function r(e){return s(e).then(n)}function s(e){return n.e(0).then(function(){var t=o[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t})}var o={"./article-1.html":"./html/article-1.html","./article-2.html":"./html/article-2.html","./article-3.html":"./html/article-3.html","./article-4.html":"./html/article-4.html"};r.keys=function(){return Object.keys(o)},r.resolve=s,r.id="./html lazy-once recursive ^\\.\\/.*\\.html$",e.exports=r},"./main.ts":function(e,t,n){"use strict";function r(e,t){var n=e.attributes.getNamedItem(t);if(null!==n&&n.specified)return e;var s=e.parentElement;return null===s?null:r(s,t)}function s(e){var t=e.querySelector("[data-person-view]");if(null!==t){var n=e.querySelector("[data-persons-selector]");if(null!==n){var s=t.querySelectorAll("[data-person-id]");o(s),s.length>0&&s[0].classList.add("i-active"),n.addEventListener("click",function(e){var t=r(e.target,"data-person-id");if(null!==t){var n=t.getAttribute("data-person-id");if(null!=n){o(s);try{for(var l=a.d(Array.from(s)),i=l.next();!i.done;i=l.next()){var c=i.value,u=c.attributes.getNamedItem("data-person-id");null!==u&&u.specified&&u.value===n&&c.classList.add("i-active")}}catch(e){d={error:e}}finally{try{i&&!i.done&&(f=l.return)&&f.call(l)}finally{if(d)throw d.error}}var d,f}}},!1)}}}function o(e){try{for(var t=a.d(Array.from(e)),n=t.next();!n.done;n=t.next()){n.value.classList.remove("i-active")}}catch(e){r={error:e}}finally{try{n&&!n.done&&(s=t.return)&&s.call(t)}finally{if(r)throw r.error}}var r,s}function l(e){0!==e.childNodes.length&&e.addEventListener("click",function(e){var t=r(e.target,"data-article-id");if(null!==t){e.preventDefault();var n=t.getAttribute("data-article-id");null!=n&&i(n)}},!1)}function i(e){return a.a(this,void 0,void 0,function(){var t,r,s,o;return a.b(this,function(l){switch(l.label){case 0:return[4,Promise.all([n.e(0).then(n.bind(null,"../node_modules/tingle.js/dist/tingle.min.js")),n("./html lazy-once recursive ^\\.\\/.*\\.html$")("./"+e+".html")])];case 1:return t=a.c.apply(void 0,[l.sent(),2]),r=t[0].modal,s=t[1],o=new r({closeMethods:["overlay","escape"],cssClass:["tingle-modal--overflow"],onOpen:function(){o.modal.classList.add("tingle-modal--overflow")}}),o.setContent(s),o.open(),[2]}})})}Object.defineProperty(t,"__esModule",{value:!0});var a=(n("./css/basics/fonts.scss"),n("./css/basics/basics.scss"),n("./components/icon.scss"),n("./components/button.scss"),n("./components/main-menu.scss"),n("./components/header.scss"),n("../node_modules/tslib/tslib.es6.js"));n("./components/questions/questions.scss"),n("./components/peoples/peoples.scss"),n("./components/blog-digest/blog-digest.scss");console.log("blog-digest components");n("./components/footer.scss"),n("./components/article/article.scss");!function(){var e=n("./svg/icons \\.svg$");e.keys().forEach(e)}(),function(){var e=document.querySelectorAll("[data-spoilers-root]");try{for(var t=a.d(Array.from(e)),n=t.next();!n.done;n=t.next()){var r=n.value;!function(e){var t=e.querySelectorAll("[data-spoiler]");try{for(var n=a.d(Array.from(t)),r=n.next();!r.done;r=n.next())r.value.classList.remove("i-open")}catch(e){s={error:e}}finally{try{r&&!r.done&&(o=n.return)&&o.call(n)}finally{if(s)throw s.error}}e.addEventListener("click",function(e){if(Boolean(e.target.attributes.getNamedItem("data-spoiler-header"))){var n=e.target.parentNode;if(null!==n){var r=Array.from(t).filter(function(e){return e!==n});try{for(var s=a.d(r),o=s.next();!o.done;o=s.next())o.value.classList.remove("i-open")}catch(e){l={error:e}}finally{try{o&&!o.done&&(i=s.return)&&i.call(s)}finally{if(l)throw l.error}}n.classList.toggle("i-open");var l,i}}},!1);var s,o}(r)}}catch(e){s={error:e}}finally{try{n&&!n.done&&(o=t.return)&&o.call(t)}finally{if(s)throw s.error}}var s,o}(),function(){var e=document.querySelectorAll("[data-peoples]");try{for(var t=a.d(Array.from(e)),n=t.next();!n.done;n=t.next())s(n.value)}catch(e){r={error:e}}finally{try{n&&!n.done&&(o=t.return)&&o.call(t)}finally{if(r)throw r.error}}var r,o}(),function(){var e=document.querySelectorAll("[data-articles]");if(null!==e){try{for(var t=a.d(Array.from(e)),n=t.next();!n.done;n=t.next())l(n.value)}catch(e){r={error:e}}finally{try{n&&!n.done&&(s=t.return)&&s.call(t)}finally{if(r)throw r.error}}var r,s}}()},"./svg/icons \\.svg$":function(e,t,n){function r(e){return n(s(e))}function s(e){var t=o[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var o={"./minus.svg":"./svg/icons/minus.svg","./plus.svg":"./svg/icons/plus.svg"};r.keys=function(){return Object.keys(o)},r.resolve=s,e.exports=r,r.id="./svg/icons \\.svg$"},"./svg/icons/minus.svg":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("../node_modules/svg-baker-runtime/browser-symbol.js"),s=n.n(r),o=n("../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js"),l=n.n(o),i=new s.a({id:"minus",use:"minus-usage",viewBox:"0 0 42 42",content:'<symbol viewBox="0 0 42 42" id="minus"><path d="M0 19h42v4H0z" /></symbol>'});l.a.add(i);t.default=i},"./svg/icons/plus.svg":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("../node_modules/svg-baker-runtime/browser-symbol.js"),s=n.n(r),o=n("../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js"),l=n.n(o),i=new s.a({id:"plus",use:"plus-usage",viewBox:"0 0 42 42",content:'<symbol viewBox="0 0 42 42" id="plus"><path d="M42 19H23V0h-4v19H0v4h19v19h4V23h19z" /></symbol>'});l.a.add(i);t.default=i}},["./main.ts"]);