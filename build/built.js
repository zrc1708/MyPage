(()=>{var n={543:(n,e,t)=>{"use strict";t.d(e,{Z:()=>f});var o=t(645),r=t.n(o),i=t(667),a=t.n(i),l=t(540),c=t.n(l),s=r()(!1),d=a()(c());s.push([n.id,"html,\nbody {\n  font: menu;\n  font-size: 16px;\n  height: 100%;\n  scroll-behavior: smooth;\n}\n:root {\n  box-sizing: border-box;\n}\n*,\n::before,\n::after {\n  box-sizing: inherit;\n}\nsection {\n  position: relative;\n}\nsection .point {\n  position: absolute;\n  top: 0;\n}\n@media screen and (min-width: 1200px) {\n  html,\n  body {\n    font-size: 20px;\n  }\n}\n.background {\n  background-image: url("+d+');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n}\n.header {\n  position: absolute;\n  width: 100%;\n  height: 6.25rem;\n  top: 0;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  z-index: 2;\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), transparent);\n}\n.header a {\n  color: white;\n  text-decoration: none;\n  margin: 0 2rem;\n  display: none;\n  position: relative;\n}\n.header a::after {\n  content: \'\';\n  transition: width 0.3s;\n  display: block;\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  margin-top: 5px;\n  transform: translateX(-50%);\n  width: 0;\n  height: 2px;\n  background-color: white;\n}\n.header a:hover::after {\n  width: 100%;\n}\n@media screen and (min-width: 768px) {\n  .header a {\n    display: block;\n  }\n  .header .icon {\n    display: none;\n  }\n}\n.header-scroll {\n  position: fixed;\n  width: 100%;\n  height: 6.25rem;\n  top: 0;\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), transparent);\n  animation: showheader 0.3s;\n}\n@keyframes showheader {\n  from {\n    transform: translateY(-100%);\n  }\n  to {\n    transform: translateY(0);\n  }\n}\n.icon {\n  width: 1.5625rem;\n  height: 1.25rem;\n  background-color: white;\n  box-sizing: border-box;\n  background-clip: content-box;\n  margin-right: 2rem;\n  padding-top: 0.4375rem;\n  padding-bottom: 0.4375rem;\n  border-top: 0.125rem solid white;\n  border-bottom: 0.125rem solid white;\n}\n.title {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.title .content {\n  margin-top: -5rem;\n}\n.title .title-content {\n  width: 100%;\n  font-size: 2.1875rem;\n  color: white;\n  text-align: center;\n}\n.title .title-underline {\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%, -2.5rem);\n  width: 5rem;\n  border-bottom: 4px solid white;\n}\n.title .discribe {\n  font-size: 1rem;\n  color: white;\n  text-align: center;\n}\n.title .comment {\n  color: rgba(255, 255, 255, 0.6);\n}\n@media screen and (min-width: 768px) {\n  .title .title-content {\n    font-size: 2.8125rem;\n  }\n}\n.scrollDown {\n  position: absolute;\n  padding: 1rem;\n  bottom: 2rem;\n}\n.scrollDown span {\n  display: block;\n  width: 1.25rem;\n  height: 1.25rem;\n  border-right: 0.125rem solid white;\n  border-bottom: 0.125rem solid white;\n  transform: rotate(45deg);\n}\n.scrollDown:hover span {\n  transition: transform 0.3s;\n  transform: translateY(-50%) rotate(45deg);\n}\n.me-title {\n  font-size: 1.875rem;\n  font-weight: 400;\n  text-align: center;\n  margin-bottom: 1rem;\n}\n.me-underline {\n  display: block;\n  width: 2.5rem;\n  height: 0.25rem;\n  background-color: #38b7ea;\n  margin: 0 auto;\n  margin-bottom: 1.5rem;\n  background-clip: content-box;\n}\n.aboutMe {\n  background-color: white;\n  padding-top: 5rem;\n  padding-bottom: 6.25rem;\n}\n.aboutMe .aboutMe-cardbox {\n  text-align: center;\n}\n.aboutMe .aboutMe-card {\n  display: inline-block;\n  background: rgba(0, 0, 0, 0.06);\n  padding: 0.625rem;\n  margin-left: 0.3125rem;\n  margin-right: 0.3125rem;\n  color: #646464;\n}\n.aboutMe .aboutMe-content {\n  text-align: center;\n  color: #5a5a5a;\n}\n.aboutMe .aboutMe-content a {\n  color: inherit;\n}\n.myWork {\n  background-color: #f5f5f5;\n  padding-top: 5rem;\n  padding-bottom: 6.25rem;\n}\n.works {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.works .workBox {\n  transition: box-shadow 0.3s;\n  width: 18.75rem;\n  margin: 0 1rem 2rem 1rem;\n  overflow: hidden;\n}\n.works .workBox .imgbox {\n  height: 9.6875rem;\n  overflow: hidden;\n}\n.works .workBox a {\n  text-decoration: none;\n  color: black;\n}\n.works .workBox img {\n  width: 100%;\n  display: block;\n  transition: all 0.3s;\n}\n.works .workBox .workBox-content {\n  height: 4.375rem;\n  background-color: white;\n  padding-left: 1rem;\n  padding-top: 0.5rem;\n  font-size: 1rem;\n}\n.works .workBox .workBox-content .workBox-content-title {\n  line-height: 0;\n  font-weight: 700;\n}\n.works .workBox .workBox-content .workBox-content-describe {\n  font-size: 0.8rem;\n}\n@media screen and (min-width: 992px) {\n  .workBox:hover {\n    box-shadow: rgba(0, 0, 0, 0.2) 0 10px 30px;\n  }\n  .workBox:hover img {\n    transform: scale(1.1);\n  }\n}\n.foot {\n  padding-top: 5rem;\n  padding-bottom: 3.75rem;\n  color: #fff;\n  display: grid;\n  justify-items: center;\n  grid-template-areas: "left right" "bottom bottom";\n}\n.foot .footbox {\n  margin: 0 1rem 1rem;\n}\n.foot .footbox:nth-child(1) {\n  grid-area: left;\n}\n.foot .footbox:nth-child(2) {\n  grid-area: right;\n}\n.foot .footbox:nth-child(3) {\n  grid-area: bottom;\n}\n.foot span {\n  display: block;\n}\n.foot p {\n  font-size: 0.9375rem;\n  font-weight: 700;\n}\n.foot a {\n  display: block;\n  text-decoration: none;\n  color: #fff;\n  font-size: 0.75rem;\n  line-height: 1.25rem;\n}\n@media screen and (min-width: 768px) {\n  .foot {\n    grid-template-columns: repeat(3, 12.5rem);\n    justify-content: center;\n  }\n  .foot .footbox:nth-child(1) {\n    grid-area: auto;\n  }\n  .foot .footbox:nth-child(2) {\n    grid-area: auto;\n  }\n  .foot .footbox:nth-child(3) {\n    grid-area: auto;\n  }\n}\n.mobileNav {\n  z-index: 4;\n  position: fixed;\n  top: 0;\n  left: 100%;\n  height: 100%;\n  width: 60%;\n  background-color: white;\n  transition: transform 0.3s;\n}\n.mobileNav .nav-iconbox {\n  height: 6.25rem;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n.mobileNav .nav-iconbox .nav-icon {\n  width: 1.5625rem;\n  height: 1.25rem;\n  background-color: rgba(0, 0, 0, 0.6);\n  box-sizing: border-box;\n  background-clip: content-box;\n  margin-right: 2rem;\n  padding-top: 0.4375rem;\n  padding-bottom: 0.4375rem;\n  border-top: 0.125rem solid rgba(0, 0, 0, 0.6);\n  border-bottom: 0.125rem solid rgba(0, 0, 0, 0.6);\n  float: right;\n}\n.mobileNav a {\n  display: block;\n  text-decoration: none;\n  color: rgba(0, 0, 0, 0.6);\n  padding: 1rem  2rem;\n}\n.mobileNav a:active {\n  background: none;\n}\n.mobileNav-show {\n  transform: translateX(-100%);\n}\n.mask {\n  z-index: 3;\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.3s linear, visibility 0s linear 0.2s;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n.mask-show {\n  opacity: 1;\n  visibility: visible;\n}\n',""]);const f=s},645:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t,o,r,i=n[1]||"",a=n[3];if(!a)return i;if(e&&"function"==typeof btoa){var l=(t=a,o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),"/*# ".concat(r," */")),c=a.sources.map((function(n){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(n," */")}));return[i].concat(c).concat([l]).join("\n")}return[i].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var l=0;l<n.length;l++){var c=[].concat(n[l]);o&&r[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},667:n=>{"use strict";n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},523:n=>{!function(){"use strict";n.exports={polyfill:function(){var n=window,e=document;if(!("scrollBehavior"in e.documentElement.style)||!0===n.__forceSmoothScrollPolyfill__){var t,o=n.HTMLElement||n.Element,r={scroll:n.scroll||n.scrollTo,scrollBy:n.scrollBy,elementScroll:o.prototype.scroll||l,scrollIntoView:o.prototype.scrollIntoView},i=n.performance&&n.performance.now?n.performance.now.bind(n.performance):Date.now,a=(t=n.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(t)?1:0);n.scroll=n.scrollTo=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?p.call(n,e.body,void 0!==arguments[0].left?~~arguments[0].left:n.scrollX||n.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:n.scrollY||n.pageYOffset):r.scroll.call(n,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:n.scrollX||n.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:n.scrollY||n.pageYOffset))},n.scrollBy=function(){void 0!==arguments[0]&&(c(arguments[0])?r.scrollBy.call(n,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):p.call(n,e.body,~~arguments[0].left+(n.scrollX||n.pageXOffset),~~arguments[0].top+(n.scrollY||n.pageYOffset)))},o.prototype.scroll=o.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==c(arguments[0])){var n=arguments[0].left,e=arguments[0].top;p.call(this,this,void 0===n?this.scrollLeft:~~n,void 0===e?this.scrollTop:~~e)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},o.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},o.prototype.scrollIntoView=function(){if(!0!==c(arguments[0])){var t=m(this),o=t.getBoundingClientRect(),i=this.getBoundingClientRect();t!==e.body?(p.call(this,t,t.scrollLeft+i.left-o.left,t.scrollTop+i.top-o.top),"fixed"!==n.getComputedStyle(t).position&&n.scrollBy({left:o.left,top:o.top,behavior:"smooth"})):n.scrollBy({left:i.left,top:i.top,behavior:"smooth"})}else r.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function l(n,e){this.scrollLeft=n,this.scrollTop=e}function c(n){if(null===n||"object"!=typeof n||void 0===n.behavior||"auto"===n.behavior||"instant"===n.behavior)return!0;if("object"==typeof n&&"smooth"===n.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+n.behavior+" is not a valid value for enumeration ScrollBehavior.")}function s(n,e){return"Y"===e?n.clientHeight+a<n.scrollHeight:"X"===e?n.clientWidth+a<n.scrollWidth:void 0}function d(e,t){var o=n.getComputedStyle(e,null)["overflow"+t];return"auto"===o||"scroll"===o}function f(n){var e=s(n,"Y")&&d(n,"Y"),t=s(n,"X")&&d(n,"X");return e||t}function m(n){for(;n!==e.body&&!1===f(n);)n=n.parentNode||n.host;return n}function u(e){var t,o,r,a,l=(i()-e.startTime)/468;a=l=l>1?1:l,t=.5*(1-Math.cos(Math.PI*a)),o=e.startX+(e.x-e.startX)*t,r=e.startY+(e.y-e.startY)*t,e.method.call(e.scrollable,o,r),o===e.x&&r===e.y||n.requestAnimationFrame(u.bind(n,e))}function p(t,o,a){var c,s,d,f,m=i();t===e.body?(c=n,s=n.scrollX||n.pageXOffset,d=n.scrollY||n.pageYOffset,f=r.scroll):(c=t,s=t.scrollLeft,d=t.scrollTop,f=l),u({scrollable:c,method:f,startTime:m,startX:s,startY:d,x:o,y:a})}}}}()},379:(n,e,t)=>{"use strict";var o,r=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function a(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function l(n,e){for(var t={},o=[],r=0;r<n.length;r++){var l=n[r],c=e.base?l[0]+e.base:l[0],s=t[c]||0,d="".concat(c," ").concat(s);t[c]=s+1;var f=a(d),m={css:l[1],media:l[2],sourceMap:l[3]};-1!==f?(i[f].references++,i[f].updater(m)):i.push({identifier:d,updater:h(m,e),references:1}),o.push(d)}return o}function c(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var i=t.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var a=r(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var s,d=(s=[],function(n,e){return s[n]=e,s.filter(Boolean).join("\n")});function f(n,e,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=d(e,r);else{var i=document.createTextNode(r),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function m(n,e,t){var o=t.css,r=t.media,i=t.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var u=null,p=0;function h(n,e){var t,o,r;if(e.singleton){var i=p++;t=u||(u=c(e)),o=f.bind(null,t,i,!1),r=f.bind(null,t,i,!0)}else t=c(e),o=m.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var t=l(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<t.length;o++){var r=a(t[o]);i[r].references--}for(var c=l(n,e),s=0;s<t.length;s++){var d=a(t[s]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}t=c}}}},540:n=>{n.exports="./c32bdf0b54.webp"}},e={};function t(o){if(e[o])return e[o].exports;var r=e[o]={id:o,exports:{}};return n[o](r,r.exports,t),r.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{"use strict";var n=t(523),e=t.n(n),o=t(379),r=t.n(o),i=t(543);r()(i.Z,{insert:"head",singleton:!1}),i.Z.locals,e().polyfill(),window.onscroll=function(n,e){let t=0;return function(){let n=Date.now();n-t>200&&(function(){let n=document.querySelector(".aboutMe").offsetTop;(function(){let n=0;return document.documentElement&&document.documentElement.scrollTop?n=document.documentElement.scrollTop:document.body&&(n=document.body.scrollTop),n})()>n?document.querySelector("header").classList.add("header-scroll"):document.querySelector("header").classList.remove("header-scroll")}(),t=n)}}(),document.querySelector(".icon").addEventListener("click",(()=>{document.querySelector(".mask").classList.add("mask-show"),document.querySelector(".mobileNav").classList.add("mobileNav-show")})),document.querySelector(".nav-iconbox").addEventListener("click",(()=>{document.querySelector(".mask").classList.remove("mask-show"),document.querySelector(".mobileNav").classList.remove("mobileNav-show")})),document.querySelector(".mask").addEventListener("click",(()=>{document.querySelector(".mask").classList.remove("mask-show"),document.querySelector(".mobileNav").classList.remove("mobileNav-show")}))})()})();