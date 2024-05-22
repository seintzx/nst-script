// ==UserScript==
// @name         nst
// @namespace    seintz.torn.nst
// @version      1.1.1
// @description  usefull scripts packed as one
// @licence      GNU GPLv3
// @author       seintz [2460991]
// @icon         https://factiontags.torn.com/11581-56425.png
// @updateURL    https://github.com/seintzx/nst-script/raw/main/nst.user.js
// @downloadURL  https://github.com/seintzx/nst-script/raw/main/nst.user.js
// @run-at       document-start
// @match        https://www.torn.com/*
// @grant        GM.xmlHttpRequest
// @grant        unsafeWindow
// @connect      torn.com
// @connect      api.torn.com
// @connect      tornstats.com
// ==/UserScript==

(()=>{var t={906:(t,e,n)=>{n.d(e,{A:()=>s})
;var o=n(601),i=n.n(o),r=n(314),a=n.n(r)()(i())
;a.push([t.id,'*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.nst-left-align .d .container{justify-content:flex-start!important;margin-left:1.25rem!important}.nst-left-align .d .anonymous .content-wrapper,.nst-left-align .d.without-sidebar .container,.nst-left-align .d.without-sidebar .content-wrapper{margin-left:1.25rem}.nst-trade-value{font-size:.875rem;height:1.5rem;line-height:1.5rem;text-align:center;--tw-text-opacity:1;color:rgb(108 173 43/var(--tw-text-opacity))}.nst-city-item{border-radius:9999px!important;border-style:solid!important;border-width:1px!important;box-sizing:border-box!important;display:block!important;height:2.5rem!important;left:-1.25rem!important;top:-1.25rem!important;width:2.5rem!important;z-index:999!important;--tw-border-opacity:1!important;background-color:#12470780!important;border-color:rgb(0 0 0/var(--tw-border-opacity))!important;padding:.75rem!important;--tw-shadow:0 25px 50px -12px rgba(0,0,0,.25)!important;--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color)!important;box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)!important}.nst-city-item:hover{height:10rem!important;left:-2.5rem!important;top:-2.5rem!important;width:10rem!important;z-index:999!important;--tw-bg-opacity:1!important;background-color:rgb(0 0 0/var(--tw-bg-opacity))!important;padding:2.25rem!important}.nst-status-wrap{align-content:flex-start;align-items:flex-start;flex-direction:column;justify-content:center;position:absolute;top:0;z-index:10}.nst-status-middle,.nst-status-wrap{display:flex;flex-wrap:wrap;width:100%}.nst-status-middle{align-content:center;align-items:center;flex-direction:row;justify-content:space-between}.nst-status-item{border-style:solid;border-width:1px;margin:.25rem;--tw-border-opacity:1;border-color:rgb(0 0 0/var(--tw-border-opacity));padding:.25rem}.nst-icon{background-image:url(https://factiontags.torn.com/11581-56425.png)!important;background-position:50%!important;cursor:pointer!important}.nst-logo{font-size:1.5rem;font-weight:700;line-height:2rem;--tw-text-opacity:1;color:rgb(66 140 165/var(--tw-text-opacity))}.nst-menu{flex:1 1 0%;margin-bottom:10rem;margin-left:2rem;margin-top:2rem}.nst-menu-wrap{border-radius:.5rem}.nst-menu-title{align-content:center;align-items:center;border-top-left-radius:.5rem;border-top-right-radius:.5rem;flex-wrap:wrap;height:2rem;left:0;position:relative;top:0;--tw-border-opacity:1;border-bottom:1px rgb(0 0 0/var(--tw-border-opacity));border-style:solid;color:var(--default-color);font-size:.875rem;font-weight:700;line-height:2rem;padding:.25rem .75rem}.nst-menu-body,.nst-menu-title{background-color:var(--default-bg-panel-color);display:flex}.nst-menu-body{border-bottom-left-radius:.5rem;border-bottom-right-radius:.5rem;line-height:.75rem}.nst-ul-main{display:table-cell;float:none;list-style-type:none;--tw-border-opacity:1;border-right:1px rgb(0 0 0/var(--tw-border-opacity));border-style:solid;vertical-align:top}.nst-menu-page{display:block;position:relative;width:9rem;--tw-border-opacity:1;background-color:var(--default-bg-panel-color);border-bottom:1px rgb(0 0 0/var(--tw-border-opacity));border-style:solid;color:var(--default-color);font-weight:700;padding:.5rem}.nst-menu-page:hover{background-color:var(--default-bg-panel-active-color)}.nst-menu-sel{background-color:var(--default-bg-panel-active-color)!important}.nst-menu-item{display:block;float:none;vertical-align:top;width:100%}.nst-message{--tw-text-opacity:1;color:rgb(185 70 45/var(--tw-text-opacity))}.nst-api-wrap,.nst-message{margin:.5rem;padding:.25rem}.nst-api-wrap{align-content:center;align-items:center;display:flex;flex-direction:column;flex-wrap:wrap;justify-content:center}.nst-block-title{margin:.5rem!important}.nst-block{align-content:center;align-items:center;--tw-border-opacity:1;border-bottom:1px rgb(249 250 251/var(--tw-border-opacity));border-style:solid}.nst-block,.nst-script-block{display:flex;flex-direction:column;flex-wrap:wrap;justify-content:center;margin:.5rem;padding:.5rem}.nst-script-block{align-content:flex-start;align-items:flex-start}.nst-outcome{align-content:center;align-items:center;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center}.list-group-item{border-style:solid;border-width:1px;margin:.5rem;--tw-border-opacity:1;border-color:rgb(107 114 128/var(--tw-border-opacity));font-size:.875rem;line-height:1.25rem;padding:.5rem 1rem;text-align:center}.nst-box{box-sizing:border-box;display:flex;flex-direction:column;margin-bottom:.75rem;margin-top:.75rem}.nst-box-header{border-bottom-width:0;border-top-left-radius:.5rem;border-top-right-radius:.5rem;display:flex;--tw-bg-opacity:1;background-color:rgb(0 0 0/var(--tw-bg-opacity));font-size:1.125rem;line-height:1.75rem;padding:.25rem .75rem;--tw-text-opacity:1;--tw-shadow:inset 0 2px 4px 0 rgba(0,0,0,.05);--tw-shadow-colored:inset 0 2px 4px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.nst-box-header,.nst-box-title{color:rgb(66 140 165/var(--tw-text-opacity))}.nst-box-title{flex-grow:1;font-size:.875rem;font-weight:700;line-height:1rem;--tw-text-opacity:1}.nst-box-content{border-bottom-left-radius:.5rem;border-bottom-right-radius:.5rem;border-style:solid;border-width:0 1px 1px;--tw-border-opacity:1;background-color:var(--default-bg-panel-color);border-color:rgb(0 0 0/var(--tw-border-opacity));color:var(--default-color)}.nst-box-content>p{margin:.25rem;text-align:center}.nst-box-row{align-items:flex-start;flex-direction:row;flex-wrap:wrap;justify-content:space-evenly}.nst-box-column,.nst-box-row{align-content:center;display:flex;margin:.25rem;text-align:center}.nst-box-column{align-items:center;flex:1 1 0%;flex-direction:column;flex-wrap:wrap;justify-content:center}.nst-box-item{align-content:flex-start;align-items:center;display:flex;font-size:.875rem;line-height:1.25rem;margin:.125rem .25rem}.nst-box-item>input{margin:0 .25rem}.nst-box-button{align-items:center;color:var(--default-color);display:flex;flex-direction:column;flex-wrap:wrap;padding:.25rem;position:relative;width:100%}.nst-box-close{cursor:pointer;font-size:.75rem;line-height:1rem;position:absolute;right:.25rem;top:0}.nst-box-img{vertical-align:middle}.nst-box-btn-div{align-self:stretch;border-radius:.5rem;border-style:solid;border-width:1px;display:flex;flex:0 0 14%;justify-content:center;margin:.25rem;--tw-border-opacity:1;border-color:rgb(34 34 34/var(--tw-border-opacity));padding:0}.nst-box-btn-div:hover{background-color:var(--default-bg-panel-active-color)}#nst-item-resp{justify-content:center}.nst-input{background-color:var(--default-bg-panel-active-color);border-color:rgb(0 0 0/var(--tw-border-opacity));border-radius:.25rem;border-style:solid;border-width:1px;color:var(--default-color);font-size:.875rem;font-weight:500;height:1.5rem;line-height:1.25rem;margin:0;text-align:center}.nst-input,.nst-table{box-sizing:border-box;--tw-border-opacity:1}.nst-table{border-color:rgb(31 41 55/var(--tw-border-opacity));border-style:solid;border-width:2px;width:100%}.nst-table-row{text-align:left}.nst-table-cell-head{font-size:.875rem;font-weight:700;line-height:1.25rem}.nst-table-cell{border-style:solid!important;border-width:1px!important;box-sizing:border-box!important;--tw-border-opacity:1!important;border-color:rgb(31 41 55/var(--tw-border-opacity))!important;font-size:.75rem!important;line-height:1rem!important;padding:.25rem!important}.m-2{margin:.5rem}.table{display:table}.hidden{display:none}.bg-nstmain{--tw-bg-opacity:1;background-color:rgb(66 140 165/var(--tw-bg-opacity))}.bg-nstred{--tw-bg-opacity:1;background-color:rgb(185 70 45/var(--tw-bg-opacity))}.bg-nstyellow{--tw-bg-opacity:1;background-color:rgb(252 196 25/var(--tw-bg-opacity))}.text-center{text-align:center}.text-base{font-size:1rem;line-height:1.5rem}.font-bold{font-weight:700}.text-black{--tw-text-opacity:1;color:rgb(0 0 0/var(--tw-text-opacity))}.text-nstgreen{--tw-text-opacity:1;color:rgb(108 173 43/var(--tw-text-opacity))}.text-nstmain{--tw-text-opacity:1;color:rgb(66 140 165/var(--tw-text-opacity))}.text-nstred{--tw-text-opacity:1;color:rgb(185 70 45/var(--tw-text-opacity))}.text-nsttorntext{color:var(--default-color)}.text-nstyellow{--tw-text-opacity:1;color:rgb(252 196 25/var(--tw-text-opacity))}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.medals-wrapper,.travel-agency-travelling .popup-info,.travel-agency-travelling .stage,.travel-agency-travelling .stage+hr,[aria-label="Reset loadout"]{display:none!important}',""])
;const s=a},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){
return this.map((function(e){var n="",o=void 0!==e[5]
;return e[4]&&(n+="@supports (".concat(e[4],") {")),
e[2]&&(n+="@media ".concat(e[2]," {")),
o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),
n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")
},e.i=function(t,n,o,i,r){"string"==typeof t&&(t=[[null,t,void 0]]);var a={}
;if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}
for(var l=0;l<t.length;l++){var u=[].concat(t[l])
;o&&a[u[0]]||(void 0!==r&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),
u[5]=r),
n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),
i&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),
u[4]=i):u[4]="".concat(i)),e.push(u))}},e}},601:t=>{t.exports=function(t){
return t[1]}},246:(t,e,n)=>{function o(t,e){var n=Object.keys(t)
;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t)
;e&&(o=o.filter((function(e){
return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}
return n}function i(t){for(var e=1;e<arguments.length;e++){
var n=null!=arguments[e]?arguments[e]:{}
;e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])
})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){
Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}
function r(t){
return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){
return typeof t}:function(t){
return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t
},r(t)}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,
enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(){
return s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){
var n=arguments[e];for(var o in n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o])}
return t},s.apply(this,arguments)}function c(t,e){
(null==e||e>t.length)&&(e=t.length);for(var n=0,o=Array(e);n<e;n++)o[n]=t[n]
;return o}function l(t){
if("undefined"!=typeof window&&window.navigator)return!!navigator.userAgent.match(t)
}n.r(e),n.d(e,{MultiDrag:()=>ye,Sortable:()=>Bt,Swap:()=>le,default:()=>_e})
;var u=l(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),d=l(/Edge/i),f=l(/firefox/i),m=l(/safari/i)&&!l(/chrome/i)&&!l(/android/i),p=l(/iP(ad|od|hone)/i),h=l(/chrome/i)&&l(/android/i),b={
capture:!1,passive:!1};function g(t,e,n){t.addEventListener(e,n,!u&&b)}
function v(t,e,n){t.removeEventListener(e,n,!u&&b)}function w(t,e){if(e){
if(">"===e[0]&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e)
;if(t.msMatchesSelector)return t.msMatchesSelector(e)
;if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch(t){return!1}
return!1}}function y(t){
return t.host&&t!==document&&t.host.nodeType?t.host:t.parentNode}
function k(t,e,n,o){if(t){n=n||document;do{
if(null!=e&&(">"===e[0]?t.parentNode===n&&w(t,e):w(t,e))||o&&t===n)return t
;if(t===n)break}while(t=y(t))}return null}var x,_=/\s+/g;function L(t,e,n){
if(t&&e)if(t.classList)t.classList[n?"add":"remove"](e);else{
var o=(" "+t.className+" ").replace(_," ").replace(" "+e+" "," ")
;t.className=(o+(n?" "+e:"")).replace(_," ")}}function O(t,e,n){var o=t&&t.style
;if(o){
if(void 0===n)return document.defaultView&&document.defaultView.getComputedStyle?n=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),
void 0===e?n:n[e]
;e in o||-1!==e.indexOf("webkit")||(e="-webkit-"+e),o[e]=n+("string"==typeof n?"":"px")
}}function M(t,e){var n="";if("string"==typeof t)n=t;else do{
var o=O(t,"transform");o&&"none"!==o&&(n=o+" "+n)}while(!e&&(t=t.parentNode))
;var i=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix
;return i&&new i(n)}function j(t,e,n){if(t){
var o=t.getElementsByTagName(e),i=0,r=o.length;if(n)for(;i<r;i++)n(o[i],i)
;return o}return[]}function D(){
return document.scrollingElement||document.documentElement}
function T(t,e,n,o,i){if(t.getBoundingClientRect||t===window){var r,a,s,c,l,d,f
;if(t!==window&&t.parentNode&&t!==D()?(a=(r=t.getBoundingClientRect()).top,
s=r.left,
c=r.bottom,l=r.right,d=r.height,f=r.width):(a=0,s=0,c=window.innerHeight,
l=window.innerWidth,
d=window.innerHeight,f=window.innerWidth),(e||n)&&t!==window&&(i=i||t.parentNode,
!u))do{
if(i&&i.getBoundingClientRect&&("none"!==O(i,"transform")||n&&"static"!==O(i,"position"))){
var m=i.getBoundingClientRect()
;a-=m.top+parseInt(O(i,"border-top-width")),s-=m.left+parseInt(O(i,"border-left-width")),
c=a+r.height,l=s+r.width;break}}while(i=i.parentNode);if(o&&t!==window){
var p=M(i||t),h=p&&p.a,b=p&&p.d;p&&(c=(a/=b)+(d/=b),l=(s/=h)+(f/=h))}return{
top:a,left:s,bottom:c,right:l,width:f,height:d}}}function I(t,e,n){
for(var o=z(t,!0),i=T(t)[e];o;){var r=T(o)[n]
;if(!("top"===n||"left"===n?i>=r:i<=r))return o;if(o===D())break;o=z(o,!1)}
return!1}function S(t,e,n,o){for(var i=0,r=0,a=t.children;r<a.length;){
if("none"!==a[r].style.display&&a[r]!==Bt.ghost&&(o||a[r]!==Bt.dragged)&&k(a[r],n.draggable,t,!1)){
if(i===e)return a[r];i++}r++}return null}function P(t,e){
for(var n=t.lastElementChild;n&&(n===Bt.ghost||"none"===O(n,"display")||e&&!w(n,e));)n=n.previousElementSibling
;return n||null}function E(t,e){var n=0;if(!t||!t.parentNode)return-1
;for(;t=t.previousElementSibling;)"TEMPLATE"===t.nodeName.toUpperCase()||t===Bt.clone||e&&!w(t,e)||n++
;return n}function A(t){var e=0,n=0,o=D();if(t)do{var i=M(t),r=i.a,a=i.d
;e+=t.scrollLeft*r,n+=t.scrollTop*a}while(t!==o&&(t=t.parentNode));return[e,n]}
function z(t,e){if(!t||!t.getBoundingClientRect)return D();var n=t,o=!1;do{
if(n.clientWidth<n.scrollWidth||n.clientHeight<n.scrollHeight){var i=O(n)
;if(n.clientWidth<n.scrollWidth&&("auto"==i.overflowX||"scroll"==i.overflowX)||n.clientHeight<n.scrollHeight&&("auto"==i.overflowY||"scroll"==i.overflowY)){
if(!n.getBoundingClientRect||n===document.body)return D();if(o||e)return n;o=!0}
}}while(n=n.parentNode);return D()}function q(t,e){
return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)
}function $(t,e){return function(){if(!x){var n=arguments
;1===n.length?t.call(this,n[0]):t.apply(this,n),x=setTimeout((function(){
x=void 0}),e)}}}function C(t,e,n){t.scrollLeft+=e,t.scrollTop+=n}function N(t){
var e=window.Polymer,n=window.jQuery||window.Zepto
;return e&&e.dom?e.dom(t).cloneNode(!0):n?n(t).clone(!0)[0]:t.cloneNode(!0)}
function U(t,e){
O(t,"position","absolute"),O(t,"top",e.top),O(t,"left",e.left),O(t,"width",e.width),
O(t,"height",e.height)}function B(t){
O(t,"position",""),O(t,"top",""),O(t,"left",""),O(t,"width",""),O(t,"height","")
}function F(t,e,n){var o={};return Array.from(t.children).forEach((function(i){
var r,a,s,c;if(k(i,e.draggable,t,!1)&&!i.animated&&i!==n){var l=T(i)
;o.left=Math.min(null!==(r=o.left)&&void 0!==r?r:1/0,l.left),
o.top=Math.min(null!==(a=o.top)&&void 0!==a?a:1/0,l.top),
o.right=Math.max(null!==(s=o.right)&&void 0!==s?s:-1/0,l.right),
o.bottom=Math.max(null!==(c=o.bottom)&&void 0!==c?c:-1/0,l.bottom)}
})),o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}
var R="Sortable"+(new Date).getTime(),H=[],G={initializeByDefault:!0},X={
mount:function(t){for(var e in G)G.hasOwnProperty(e)&&!(e in t)&&(t[e]=G[e])
;H.forEach((function(e){
if(e.pluginName===t.pluginName)throw"Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")
})),H.push(t)},pluginEvent:function(t,e,n){var o=this
;this.eventCanceled=!1,n.cancel=function(){o.eventCanceled=!0};var r=t+"Global"
;H.forEach((function(o){
e[o.pluginName]&&(e[o.pluginName][r]&&e[o.pluginName][r](i({sortable:e
},n)),e.options[o.pluginName]&&e[o.pluginName][t]&&e[o.pluginName][t](i({
sortable:e},n)))}))},initializePlugins:function(t,e,n,o){
for(var i in H.forEach((function(o){var i=o.pluginName
;if(t.options[i]||o.initializeByDefault){var r=new o(t,e,t.options)
;r.sortable=t,r.options=t.options,t[i]=r,s(n,r.defaults)}
})),t.options)if(t.options.hasOwnProperty(i)){
var r=this.modifyOption(t,i,t.options[i]);void 0!==r&&(t.options[i]=r)}},
getEventProperties:function(t,e){var n={};return H.forEach((function(o){
"function"==typeof o.eventProperties&&s(n,o.eventProperties.call(e[o.pluginName],t))
})),n},modifyOption:function(t,e,n){var o;return H.forEach((function(i){
t[i.pluginName]&&i.optionListeners&&"function"==typeof i.optionListeners[e]&&(o=i.optionListeners[e].call(t[i.pluginName],n))
})),o}};function W(t){
var e=t.sortable,n=t.rootEl,o=t.name,r=t.targetEl,a=t.cloneEl,s=t.toEl,c=t.fromEl,l=t.oldIndex,f=t.newIndex,m=t.oldDraggableIndex,p=t.newDraggableIndex,h=t.originalEvent,b=t.putSortable,g=t.extraEventProperties
;if(e=e||n&&n[R]){var v,w=e.options,y="on"+o.charAt(0).toUpperCase()+o.substr(1)
;!window.CustomEvent||u||d?(v=document.createEvent("Event")).initEvent(o,!0,!0):v=new CustomEvent(o,{
bubbles:!0,cancelable:!0
}),v.to=s||n,v.from=c||n,v.item=r||n,v.clone=a,v.oldIndex=l,
v.newIndex=f,v.oldDraggableIndex=m,
v.newDraggableIndex=p,v.originalEvent=h,v.pullMode=b?b.lastPutMode:void 0
;var k=i(i({},g),X.getEventProperties(o,e));for(var x in k)v[x]=k[x]
;n&&n.dispatchEvent(v),w[y]&&w[y].call(e,v)}}var K=["evt"],J=function(t,e){
var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.evt,r=function(t,e){
if(null==t)return{};var n,o,i=function(t,e){if(null==t)return{}
;var n,o,i={},r=Object.keys(t)
;for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e)
;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t)
;for(o=0;o<r.length;o++)n=r[o],
e.indexOf(n)>=0||{}.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}(n,K)
;X.pluginEvent.bind(Bt)(t,e,i({dragEl:Y,parentEl:V,ghostEl:Z,rootEl:tt,
nextEl:et,lastDownEl:nt,cloneEl:ot,cloneHidden:it,dragStarted:gt,putSortable:ut,
activeSortable:Bt.active,originalEvent:o,oldIndex:rt,oldDraggableIndex:st,
newIndex:at,newDraggableIndex:ct,hideGhostForTarget:$t,unhideGhostForTarget:Ct,
cloneNowHidden:function(){it=!0},cloneNowShown:function(){it=!1},
dispatchSortableEvent:function(t){Q({sortable:e,name:t,originalEvent:o})}},r))}
;function Q(t){W(i({putSortable:ut,cloneEl:ot,targetEl:Y,rootEl:tt,oldIndex:rt,
oldDraggableIndex:st,newIndex:at,newDraggableIndex:ct},t))}
var Y,V,Z,tt,et,nt,ot,it,rt,at,st,ct,lt,ut,dt,ft,mt,pt,ht,bt,gt,vt,wt,yt,kt,xt=!1,_t=!1,Lt=[],Ot=!1,Mt=!1,jt=[],Dt=!1,Tt=[],It="undefined"!=typeof document,St=p,Pt=d||u?"cssFloat":"float",Et=It&&!h&&!p&&"draggable"in document.createElement("div"),At=function(){
if(It){if(u)return!1;var t=document.createElement("x")
;return t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}
}(),zt=function(t,e){
var n=O(t),o=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),i=S(t,0,e),r=S(t,1,e),a=i&&O(i),s=r&&O(r),c=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+T(i).width,l=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+T(r).width
;if("flex"===n.display)return"column"===n.flexDirection||"column-reverse"===n.flexDirection?"vertical":"horizontal"
;if("grid"===n.display)return n.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal"
;if(i&&a.float&&"none"!==a.float){var u="left"===a.float?"left":"right"
;return!r||"both"!==s.clear&&s.clear!==u?"horizontal":"vertical"}
return i&&("block"===a.display||"flex"===a.display||"table"===a.display||"grid"===a.display||c>=o&&"none"===n[Pt]||r&&"none"===n[Pt]&&c+l>o)?"vertical":"horizontal"
},qt=function(t){function e(t,n){return function(o,i,r,a){
var s=o.options.group.name&&i.options.group.name&&o.options.group.name===i.options.group.name
;if(null==t&&(n||s))return!0;if(null==t||!1===t)return!1
;if(n&&"clone"===t)return t
;if("function"==typeof t)return e(t(o,i,r,a),n)(o,i,r,a)
;var c=(n?o:i).options.group.name
;return!0===t||"string"==typeof t&&t===c||t.join&&t.indexOf(c)>-1}}
var n={},o=t.group;o&&"object"==r(o)||(o={name:o
}),n.name=o.name,n.checkPull=e(o.pull,!0),
n.checkPut=e(o.put),n.revertClone=o.revertClone,t.group=n},$t=function(){
!At&&Z&&O(Z,"display","none")},Ct=function(){!At&&Z&&O(Z,"display","")}
;It&&!h&&document.addEventListener("click",(function(t){
if(_t)return t.preventDefault(),
t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),
_t=!1,!1}),!0);var Nt=function(t){if(Y){t=t.touches?t.touches[0]:t
;var e=(i=t.clientX,r=t.clientY,Lt.some((function(t){
var e=t[R].options.emptyInsertThreshold;if(e&&!P(t)){
var n=T(t),o=i>=n.left-e&&i<=n.right+e,s=r>=n.top-e&&r<=n.bottom+e
;return o&&s?a=t:void 0}})),a);if(e){var n={}
;for(var o in t)t.hasOwnProperty(o)&&(n[o]=t[o])
;n.target=n.rootEl=e,n.preventDefault=void 0,
n.stopPropagation=void 0,e[R]._onDragOver(n)}}var i,r,a},Ut=function(t){
Y&&Y.parentNode[R]._isOutsideThisEl(t.target)};function Bt(t,e){
if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t))
;this.el=t,this.options=e=s({},e),t[R]=this;var n,o,r={group:null,sort:!0,
disabled:!1,store:null,handle:null,
draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,
invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){
return zt(t,this.options)},ghostClass:"sortable-ghost",
chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",
filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(t,e){
t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,
dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,
touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,
forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,
fallbackTolerance:0,fallbackOffset:{x:0,y:0},
supportPointer:!1!==Bt.supportPointer&&"PointerEvent"in window&&!m,
emptyInsertThreshold:5}
;for(var a in X.initializePlugins(this,t,r),r)!(a in e)&&(e[a]=r[a])
;for(var c in qt(e),
this)"_"===c.charAt(0)&&"function"==typeof this[c]&&(this[c]=this[c].bind(this))
;this.nativeDraggable=!e.forceFallback&&Et,
this.nativeDraggable&&(this.options.touchStartThreshold=1),
e.supportPointer?g(t,"pointerdown",this._onTapStart):(g(t,"mousedown",this._onTapStart),
g(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(g(t,"dragover",this),
g(t,"dragenter",this)),
Lt.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),
s(this,(o=[],{captureAnimationState:function(){
o=[],this.options.animation&&[].slice.call(this.el.children).forEach((function(t){
if("none"!==O(t,"display")&&t!==Bt.ghost){o.push({target:t,rect:T(t)})
;var e=i({},o[o.length-1].rect);if(t.thisAnimationDuration){var n=M(t,!0)
;n&&(e.top-=n.f,e.left-=n.e)}t.fromRect=e}}))},addAnimationState:function(t){
o.push(t)},removeAnimationState:function(t){o.splice(function(t,e){
for(var n in t)if(t.hasOwnProperty(n))for(var o in e)if(e.hasOwnProperty(o)&&e[o]===t[n][o])return+n
;return-1}(o,{target:t}),1)},animateAll:function(t){var e=this
;if(!this.options.animation)return clearTimeout(n),
void("function"==typeof t&&t());var i=!1,r=0;o.forEach((function(t){
var n=0,o=t.target,a=o.fromRect,s=T(o),c=o.prevFromRect,l=o.prevToRect,u=t.rect,d=M(o,!0)
;d&&(s.top-=d.f,
s.left-=d.e),o.toRect=s,o.thisAnimationDuration&&q(c,s)&&!q(a,s)&&(u.top-s.top)/(u.left-s.left)==(a.top-s.top)/(a.left-s.left)&&(n=function(t,e,n,o){
return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-n.top,2)+Math.pow(e.left-n.left,2))*o.animation
}(u,c,l,e.options)),
q(s,a)||(o.prevFromRect=a,o.prevToRect=s,n||(n=e.options.animation),
e.animate(o,u,s,n)),
n&&(i=!0,r=Math.max(r,n),clearTimeout(o.animationResetTimer),
o.animationResetTimer=setTimeout((function(){
o.animationTime=0,o.prevFromRect=null,
o.fromRect=null,o.prevToRect=null,o.thisAnimationDuration=null
}),n),o.thisAnimationDuration=n)})),clearTimeout(n),i?n=setTimeout((function(){
"function"==typeof t&&t()}),r):"function"==typeof t&&t(),o=[]},
animate:function(t,e,n,o){if(o){O(t,"transition",""),O(t,"transform","")
;var i=M(this.el),r=i&&i.a,a=i&&i.d,s=(e.left-n.left)/(r||1),c=(e.top-n.top)/(a||1)
;t.animatingX=!!s,
t.animatingY=!!c,O(t,"transform","translate3d("+s+"px,"+c+"px,0)"),
this.forRepaintDummy=function(t){return t.offsetWidth
}(t),O(t,"transition","transform "+o+"ms"+(this.options.easing?" "+this.options.easing:"")),
O(t,"transform","translate3d(0,0,0)"),
"number"==typeof t.animated&&clearTimeout(t.animated),
t.animated=setTimeout((function(){
O(t,"transition",""),O(t,"transform",""),t.animated=!1,
t.animatingX=!1,t.animatingY=!1}),o)}}}))}function Ft(t,e,n,o,i,r,a,s){
var c,l,f=t[R],m=f.options.onMove
;return!window.CustomEvent||u||d?(c=document.createEvent("Event")).initEvent("move",!0,!0):c=new CustomEvent("move",{
bubbles:!0,cancelable:!0
}),c.to=e,c.from=t,c.dragged=n,c.draggedRect=o,c.related=i||e,
c.relatedRect=r||T(e),
c.willInsertAfter=s,c.originalEvent=a,t.dispatchEvent(c),m&&(l=m.call(f,c,a)),l}
function Rt(t){t.draggable=!1}function Ht(){Dt=!1}function Gt(t){
for(var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,o=0;n--;)o+=e.charCodeAt(n)
;return o.toString(36)}function Xt(t){return setTimeout(t,0)}function Wt(t){
return clearTimeout(t)}Bt.prototype={constructor:Bt,
_isOutsideThisEl:function(t){this.el.contains(t)||t===this.el||(vt=null)},
_getDirection:function(t,e){
return"function"==typeof this.options.direction?this.options.direction.call(this,t,e,Y):this.options.direction
},_onTapStart:function(t){if(t.cancelable){
var e=this,n=this.el,o=this.options,i=o.preventOnFilter,r=t.type,a=t.touches&&t.touches[0]||t.pointerType&&"touch"===t.pointerType&&t,s=(a||t).target,c=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||s,l=o.filter
;if(function(t){Tt.length=0
;for(var e=t.getElementsByTagName("input"),n=e.length;n--;){var o=e[n]
;o.checked&&Tt.push(o)}
}(n),!Y&&!(/mousedown|pointerdown/.test(r)&&0!==t.button||o.disabled)&&!c.isContentEditable&&(this.nativeDraggable||!m||!s||"SELECT"!==s.tagName.toUpperCase())&&!((s=k(s,o.draggable,n,!1))&&s.animated||nt===s)){
if(rt=E(s),st=E(s,o.draggable),"function"==typeof l){
if(l.call(this,t,s,this))return Q({sortable:e,rootEl:c,name:"filter",targetEl:s,
toEl:n,fromEl:n}),J("filter",e,{evt:t
}),void(i&&t.cancelable&&t.preventDefault())
}else if(l&&(l=l.split(",").some((function(o){if(o=k(c,o.trim(),n,!1))return Q({
sortable:e,rootEl:o,name:"filter",targetEl:s,fromEl:n,toEl:n}),J("filter",e,{
evt:t}),!0}))))return void(i&&t.cancelable&&t.preventDefault())
;o.handle&&!k(c,o.handle,n,!1)||this._prepareDragStart(t,a,s)}}},
_prepareDragStart:function(t,e,n){
var o,i=this,r=i.el,a=i.options,s=r.ownerDocument;if(n&&!Y&&n.parentNode===r){
var c=T(n)
;if(tt=r,V=(Y=n).parentNode,et=Y.nextSibling,nt=n,lt=a.group,Bt.dragged=Y,dt={
target:Y,clientX:(e||t).clientX,clientY:(e||t).clientY
},ht=dt.clientX-c.left,bt=dt.clientY-c.top,
this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,
Y.style["will-change"]="all",o=function(){J("delayEnded",i,{evt:t
}),Bt.eventCanceled?i._onDrop():(i._disableDelayedDragEvents(),
!f&&i.nativeDraggable&&(Y.draggable=!0),i._triggerDragStart(t,e),Q({sortable:i,
name:"choose",originalEvent:t}),L(Y,a.chosenClass,!0))
},a.ignore.split(",").forEach((function(t){j(Y,t.trim(),Rt)
})),g(s,"dragover",Nt),
g(s,"mousemove",Nt),g(s,"touchmove",Nt),g(s,"mouseup",i._onDrop),
g(s,"touchend",i._onDrop),
g(s,"touchcancel",i._onDrop),f&&this.nativeDraggable&&(this.options.touchStartThreshold=4,
Y.draggable=!0),J("delayStart",this,{evt:t
}),!a.delay||a.delayOnTouchOnly&&!e||this.nativeDraggable&&(d||u))o();else{
if(Bt.eventCanceled)return void this._onDrop()
;g(s,"mouseup",i._disableDelayedDrag),
g(s,"touchend",i._disableDelayedDrag),g(s,"touchcancel",i._disableDelayedDrag),
g(s,"mousemove",i._delayedDragTouchMoveHandler),
g(s,"touchmove",i._delayedDragTouchMoveHandler),
a.supportPointer&&g(s,"pointermove",i._delayedDragTouchMoveHandler),
i._dragStartTimer=setTimeout(o,a.delay)}}},
_delayedDragTouchMoveHandler:function(t){var e=t.touches?t.touches[0]:t
;Math.max(Math.abs(e.clientX-this._lastX),Math.abs(e.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()
},_disableDelayedDrag:function(){
Y&&Rt(Y),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},
_disableDelayedDragEvents:function(){var t=this.el.ownerDocument
;v(t,"mouseup",this._disableDelayedDrag),
v(t,"touchend",this._disableDelayedDrag),
v(t,"touchcancel",this._disableDelayedDrag),
v(t,"mousemove",this._delayedDragTouchMoveHandler),
v(t,"touchmove",this._delayedDragTouchMoveHandler),
v(t,"pointermove",this._delayedDragTouchMoveHandler)},
_triggerDragStart:function(t,e){
e=e||"touch"==t.pointerType&&t,!this.nativeDraggable||e?this.options.supportPointer?g(document,"pointermove",this._onTouchMove):g(document,e?"touchmove":"mousemove",this._onTouchMove):(g(Y,"dragend",this),
g(tt,"dragstart",this._onDragStart));try{document.selection?Xt((function(){
document.selection.empty()})):window.getSelection().removeAllRanges()}catch(t){}
},_dragStarted:function(t,e){if(xt=!1,tt&&Y){J("dragStarted",this,{evt:e
}),this.nativeDraggable&&g(document,"dragover",Ut);var n=this.options
;!t&&L(Y,n.dragClass,!1),
L(Y,n.ghostClass,!0),Bt.active=this,t&&this._appendGhost(),Q({sortable:this,
name:"start",originalEvent:e})}else this._nulling()},
_emulateDragOver:function(){if(ft){
this._lastX=ft.clientX,this._lastY=ft.clientY,$t()
;for(var t=document.elementFromPoint(ft.clientX,ft.clientY),e=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(ft.clientX,ft.clientY))!==e;)e=t
;if(Y.parentNode[R]._isOutsideThisEl(t),e)do{if(e[R]&&e[R]._onDragOver({
clientX:ft.clientX,clientY:ft.clientY,target:t,rootEl:e
})&&!this.options.dragoverBubble)break;t=e}while(e=e.parentNode);Ct()}},
_onTouchMove:function(t){if(dt){
var e=this.options,n=e.fallbackTolerance,o=e.fallbackOffset,i=t.touches?t.touches[0]:t,r=Z&&M(Z,!0),a=Z&&r&&r.a,s=Z&&r&&r.d,c=St&&kt&&A(kt),l=(i.clientX-dt.clientX+o.x)/(a||1)+(c?c[0]-jt[0]:0)/(a||1),u=(i.clientY-dt.clientY+o.y)/(s||1)+(c?c[1]-jt[1]:0)/(s||1)
;if(!Bt.active&&!xt){
if(n&&Math.max(Math.abs(i.clientX-this._lastX),Math.abs(i.clientY-this._lastY))<n)return
;this._onDragStart(t,!0)}if(Z){r?(r.e+=l-(mt||0),r.f+=u-(pt||0)):r={a:1,b:0,c:0,
d:1,e:l,f:u}
;var d="matrix(".concat(r.a,",").concat(r.b,",").concat(r.c,",").concat(r.d,",").concat(r.e,",").concat(r.f,")")
;O(Z,"webkitTransform",d),
O(Z,"mozTransform",d),O(Z,"msTransform",d),O(Z,"transform",d),mt=l,pt=u,ft=i}
t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!Z){
var t=this.options.fallbackOnBody?document.body:tt,e=T(Y,!0,St,!0,t),n=this.options
;if(St){
for(kt=t;"static"===O(kt,"position")&&"none"===O(kt,"transform")&&kt!==document;)kt=kt.parentNode
;kt!==document.body&&kt!==document.documentElement?(kt===document&&(kt=D()),
e.top+=kt.scrollTop,e.left+=kt.scrollLeft):kt=D(),jt=A(kt)}
L(Z=Y.cloneNode(!0),n.ghostClass,!1),
L(Z,n.fallbackClass,!0),L(Z,n.dragClass,!0),
O(Z,"transition",""),O(Z,"transform",""),
O(Z,"box-sizing","border-box"),O(Z,"margin",0),
O(Z,"top",e.top),O(Z,"left",e.left),O(Z,"width",e.width),O(Z,"height",e.height),
O(Z,"opacity","0.8"),
O(Z,"position",St?"absolute":"fixed"),O(Z,"zIndex","100000"),
O(Z,"pointerEvents","none"),
Bt.ghost=Z,t.appendChild(Z),O(Z,"transform-origin",ht/parseInt(Z.style.width)*100+"% "+bt/parseInt(Z.style.height)*100+"%")
}},_onDragStart:function(t,e){var n=this,o=t.dataTransfer,i=n.options
;J("dragStart",this,{evt:t
}),Bt.eventCanceled?this._onDrop():(J("setupClone",this),
Bt.eventCanceled||((ot=N(Y)).removeAttribute("id"),
ot.draggable=!1,ot.style["will-change"]="",
this._hideClone(),L(ot,this.options.chosenClass,!1),
Bt.clone=ot),n.cloneId=Xt((function(){
J("clone",n),Bt.eventCanceled||(n.options.removeCloneOnHide||tt.insertBefore(ot,Y),
n._hideClone(),Q({sortable:n,name:"clone"}))
})),!e&&L(Y,i.dragClass,!0),e?(_t=!0,
n._loopId=setInterval(n._emulateDragOver,50)):(v(document,"mouseup",n._onDrop),
v(document,"touchend",n._onDrop),
v(document,"touchcancel",n._onDrop),o&&(o.effectAllowed="move",
i.setData&&i.setData.call(n,o,Y)),
g(document,"drop",n),O(Y,"transform","translateZ(0)")),
xt=!0,n._dragStartId=Xt(n._dragStarted.bind(n,e,t)),g(document,"selectstart",n),
gt=!0,m&&O(document.body,"user-select","none"))},_onDragOver:function(t){
var e,n,o,r,a=this.el,s=t.target,c=this.options,l=c.group,u=Bt.active,d=lt===l,f=c.sort,m=ut||u,p=this,h=!1
;if(!Dt){
if(void 0!==t.preventDefault&&t.cancelable&&t.preventDefault(),s=k(s,c.draggable,a,!0),
N("dragOver"),Bt.eventCanceled)return h
;if(Y.contains(t.target)||s.animated&&s.animatingX&&s.animatingY||p._ignoreWhileAnimating===s)return B(!1)
;if(_t=!1,
u&&!c.disabled&&(d?f||(o=V!==tt):ut===this||(this.lastPutMode=lt.checkPull(this,u,Y,t))&&l.checkPut(this,u,Y,t))){
if(r="vertical"===this._getDirection(t,s),
e=T(Y),N("dragOverValid"),Bt.eventCanceled)return h
;if(o)return V=tt,U(),this._hideClone(),
N("revert"),Bt.eventCanceled||(et?tt.insertBefore(Y,et):tt.appendChild(Y)),B(!0)
;var b=P(a,c.draggable);if(!b||function(t,e,n){
var o=T(P(n.el,n.options.draggable)),i=F(n.el,n.options,Z)
;return e?t.clientX>i.right+10||t.clientY>o.bottom&&t.clientX>o.left:t.clientY>i.bottom+10||t.clientX>o.right&&t.clientY>o.top
}(t,r,this)&&!b.animated){if(b===Y)return B(!1)
;if(b&&a===t.target&&(s=b),s&&(n=T(s)),
!1!==Ft(tt,a,Y,e,s,n,t,!!s))return U(),b&&b.nextSibling?a.insertBefore(Y,b.nextSibling):a.appendChild(Y),
V=a,H(),B(!0)}else if(b&&function(t,e,n){
var o=T(S(n.el,0,n.options,!0)),i=F(n.el,n.options,Z)
;return e?t.clientX<i.left-10||t.clientY<o.top&&t.clientX<o.right:t.clientY<i.top-10||t.clientY<o.bottom&&t.clientX<o.left
}(t,r,this)){var g=S(a,0,c,!0);if(g===Y)return B(!1)
;if(n=T(s=g),!1!==Ft(tt,a,Y,e,s,n,t,!1))return U(),
a.insertBefore(Y,g),V=a,H(),B(!0)}else if(s.parentNode===a){n=T(s)
;var v,w,y,x=Y.parentNode!==a,_=!function(t,e,n){
var o=n?t.left:t.top,i=n?t.right:t.bottom,r=n?t.width:t.height,a=n?e.left:e.top,s=n?e.right:e.bottom,c=n?e.width:e.height
;return o===a||i===s||o+r/2===a+c/2
}(Y.animated&&Y.toRect||e,s.animated&&s.toRect||n,r),M=r?"top":"left",j=I(s,"top","top")||I(Y,"top","top"),D=j?j.scrollTop:void 0
;if(vt!==s&&(w=n[M],Ot=!1,Mt=!_&&c.invertSwap||x),v=function(t,e,n,o,i,r,a,s){
var c=o?t.clientY:t.clientX,l=o?n.height:n.width,u=o?n.top:n.left,d=o?n.bottom:n.right,f=!1
;if(!a)if(s&&yt<l*i){
if(!Ot&&(1===wt?c>u+l*r/2:c<d-l*r/2)&&(Ot=!0),Ot)f=!0;else if(1===wt?c<u+yt:c>d-yt)return-wt
}else if(c>u+l*(1-i)/2&&c<d-l*(1-i)/2)return function(t){return E(Y)<E(t)?1:-1
}(e);return(f=f||a)&&(c<u+l*r/2||c>d-l*r/2)?c>u+l/2?1:-1:0
}(t,s,n,r,_?1:c.swapThreshold,null==c.invertedSwapThreshold?c.swapThreshold:c.invertedSwapThreshold,Mt,vt===s),
0!==v){var A=E(Y);do{A-=v,y=V.children[A]
}while(y&&("none"===O(y,"display")||y===Z))}if(0===v||y===s)return B(!1)
;vt=s,wt=v;var z=s.nextElementSibling,q=!1,$=Ft(tt,a,Y,e,s,n,t,q=1===v)
;if(!1!==$)return 1!==$&&-1!==$||(q=1===$),
Dt=!0,setTimeout(Ht,30),U(),q&&!z?a.appendChild(Y):s.parentNode.insertBefore(Y,q?z:s),
j&&C(j,0,D-j.scrollTop),V=Y.parentNode,void 0===w||Mt||(yt=Math.abs(w-T(s)[M])),
H(),B(!0)}if(a.contains(Y))return B(!1)}return!1}function N(c,l){J(c,p,i({evt:t,
isOwner:d,axis:r?"vertical":"horizontal",revert:o,dragRect:e,targetRect:n,
canSort:f,fromSortable:m,target:s,completed:B,onMove:function(n,o){
return Ft(tt,a,Y,e,n,T(n),t,o)},changed:H},l))}function U(){
N("dragOverAnimationCapture"),
p.captureAnimationState(),p!==m&&m.captureAnimationState()}function B(e){
return N("dragOverCompleted",{insertion:e
}),e&&(d?u._hideClone():u._showClone(p),
p!==m&&(L(Y,ut?ut.options.ghostClass:u.options.ghostClass,!1),
L(Y,c.ghostClass,!0)),
ut!==p&&p!==Bt.active?ut=p:p===Bt.active&&ut&&(ut=null),m===p&&(p._ignoreWhileAnimating=s),
p.animateAll((function(){
N("dragOverAnimationComplete"),p._ignoreWhileAnimating=null
})),p!==m&&(m.animateAll(),
m._ignoreWhileAnimating=null)),(s===Y&&!Y.animated||s===a&&!s.animated)&&(vt=null),
c.dragoverBubble||t.rootEl||s===document||(Y.parentNode[R]._isOutsideThisEl(t.target),
!e&&Nt(t)),!c.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),h=!0}
function H(){at=E(Y),ct=E(Y,c.draggable),Q({sortable:p,name:"change",toEl:a,
newIndex:at,newDraggableIndex:ct,originalEvent:t})}},_ignoreWhileAnimating:null,
_offMoveEvents:function(){
v(document,"mousemove",this._onTouchMove),v(document,"touchmove",this._onTouchMove),
v(document,"pointermove",this._onTouchMove),
v(document,"dragover",Nt),v(document,"mousemove",Nt),v(document,"touchmove",Nt)
},_offUpEvents:function(){var t=this.el.ownerDocument
;v(t,"mouseup",this._onDrop),
v(t,"touchend",this._onDrop),v(t,"pointerup",this._onDrop),
v(t,"touchcancel",this._onDrop),v(document,"selectstart",this)},
_onDrop:function(t){var e=this.el,n=this.options
;at=E(Y),ct=E(Y,n.draggable),J("drop",this,{evt:t
}),V=Y&&Y.parentNode,at=E(Y),ct=E(Y,n.draggable),Bt.eventCanceled||(xt=!1,Mt=!1,
Ot=!1,
clearInterval(this._loopId),clearTimeout(this._dragStartTimer),Wt(this.cloneId),
Wt(this._dragStartId),
this.nativeDraggable&&(v(document,"drop",this),v(e,"dragstart",this._onDragStart)),
this._offMoveEvents(),
this._offUpEvents(),m&&O(document.body,"user-select",""),O(Y,"transform",""),
t&&(gt&&(t.cancelable&&t.preventDefault(),
!n.dropBubble&&t.stopPropagation()),Z&&Z.parentNode&&Z.parentNode.removeChild(Z),
(tt===V||ut&&"clone"!==ut.lastPutMode)&&ot&&ot.parentNode&&ot.parentNode.removeChild(ot),
Y&&(this.nativeDraggable&&v(Y,"dragend",this),
Rt(Y),Y.style["will-change"]="",gt&&!xt&&L(Y,ut?ut.options.ghostClass:this.options.ghostClass,!1),
L(Y,this.options.chosenClass,!1),Q({sortable:this,name:"unchoose",toEl:V,
newIndex:null,newDraggableIndex:null,originalEvent:t}),tt!==V?(at>=0&&(Q({
rootEl:V,name:"add",toEl:V,fromEl:tt,originalEvent:t}),Q({sortable:this,
name:"remove",toEl:V,originalEvent:t}),Q({rootEl:V,name:"sort",toEl:V,fromEl:tt,
originalEvent:t}),Q({sortable:this,name:"sort",toEl:V,originalEvent:t
})),ut&&ut.save()):at!==rt&&at>=0&&(Q({sortable:this,name:"update",toEl:V,
originalEvent:t}),Q({sortable:this,name:"sort",toEl:V,originalEvent:t
})),Bt.active&&(null!=at&&-1!==at||(at=rt,ct=st),Q({sortable:this,name:"end",
toEl:V,originalEvent:t}),this.save())))),this._nulling()},_nulling:function(){
J("nulling",this),
tt=Y=V=Z=et=ot=nt=it=dt=ft=gt=at=ct=rt=st=vt=wt=ut=lt=Bt.dragged=Bt.ghost=Bt.clone=Bt.active=null,
Tt.forEach((function(t){t.checked=!0})),Tt.length=mt=pt=0},
handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t)
;break;case"dragenter":case"dragover":Y&&(this._onDragOver(t),function(t){
t.dataTransfer&&(t.dataTransfer.dropEffect="move"),
t.cancelable&&t.preventDefault()}(t));break;case"selectstart":t.preventDefault()
}},toArray:function(){
for(var t,e=[],n=this.el.children,o=0,i=n.length,r=this.options;o<i;o++)k(t=n[o],r.draggable,this.el,!1)&&e.push(t.getAttribute(r.dataIdAttr)||Gt(t))
;return e},sort:function(t,e){var n={},o=this.el
;this.toArray().forEach((function(t,e){var i=o.children[e]
;k(i,this.options.draggable,o,!1)&&(n[t]=i)
}),this),e&&this.captureAnimationState(),t.forEach((function(t){
n[t]&&(o.removeChild(n[t]),o.appendChild(n[t]))})),e&&this.animateAll()},
save:function(){var t=this.options.store;t&&t.set&&t.set(this)},
closest:function(t,e){return k(t,e||this.options.draggable,this.el,!1)},
option:function(t,e){var n=this.options;if(void 0===e)return n[t]
;var o=X.modifyOption(this,t,e);n[t]=void 0!==o?o:e,"group"===t&&qt(n)},
destroy:function(){J("destroy",this);var t=this.el
;t[R]=null,v(t,"mousedown",this._onTapStart),v(t,"touchstart",this._onTapStart),
v(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(v(t,"dragover",this),
v(t,"dragenter",this)),
[].forEach.call(t.querySelectorAll("[draggable]"),(function(t){
t.removeAttribute("draggable")
})),this._onDrop(),this._disableDelayedDragEvents(),
Lt.splice(Lt.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!it){
if(J("hideClone",this),Bt.eventCanceled)return
;O(ot,"display","none"),this.options.removeCloneOnHide&&ot.parentNode&&ot.parentNode.removeChild(ot),
it=!0}},_showClone:function(t){if("clone"===t.lastPutMode){if(it){
if(J("showClone",this),Bt.eventCanceled)return
;Y.parentNode!=tt||this.options.group.revertClone?et?tt.insertBefore(ot,et):tt.appendChild(ot):tt.insertBefore(ot,Y),
this.options.group.revertClone&&this.animate(Y,ot),O(ot,"display",""),it=!1}
}else this._hideClone()}},It&&g(document,"touchmove",(function(t){
(Bt.active||xt)&&t.cancelable&&t.preventDefault()})),Bt.utils={on:g,off:v,css:O,
find:j,is:function(t,e){return!!k(t,e,t,!1)},extend:function(t,e){
if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t},throttle:$,
closest:k,toggleClass:L,clone:N,index:E,nextTick:Xt,cancelNextTick:Wt,
detectDirection:zt,getChild:S},Bt.get=function(t){return t[R]
},Bt.mount=function(){
for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n]
;e[0].constructor===Array&&(e=e[0]),e.forEach((function(t){
if(!t.prototype||!t.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t))
;t.utils&&(Bt.utils=i(i({},Bt.utils),t.utils)),X.mount(t)}))
},Bt.create=function(t,e){return new Bt(t,e)},Bt.version="1.15.2"
;var Kt,Jt,Qt,Yt,Vt,Zt,te=[],ee=!1;function ne(){te.forEach((function(t){
clearInterval(t.pid)})),te=[]}function oe(){clearInterval(Zt)}
var ie,re=$((function(t,e,n,o){if(e.scroll){
var i,r=(t.touches?t.touches[0]:t).clientX,a=(t.touches?t.touches[0]:t).clientY,s=e.scrollSensitivity,c=e.scrollSpeed,l=D(),u=!1
;Jt!==n&&(Jt=n,ne(),Kt=e.scroll,i=e.scrollFn,!0===Kt&&(Kt=z(n,!0)));var d=0,f=Kt
;do{
var m=f,p=T(m),h=p.top,b=p.bottom,g=p.left,v=p.right,w=p.width,y=p.height,k=void 0,x=void 0,_=m.scrollWidth,L=m.scrollHeight,M=O(m),j=m.scrollLeft,I=m.scrollTop
;m===l?(k=w<_&&("auto"===M.overflowX||"scroll"===M.overflowX||"visible"===M.overflowX),
x=y<L&&("auto"===M.overflowY||"scroll"===M.overflowY||"visible"===M.overflowY)):(k=w<_&&("auto"===M.overflowX||"scroll"===M.overflowX),
x=y<L&&("auto"===M.overflowY||"scroll"===M.overflowY))
;var S=k&&(Math.abs(v-r)<=s&&j+w<_)-(Math.abs(g-r)<=s&&!!j),P=x&&(Math.abs(b-a)<=s&&I+y<L)-(Math.abs(h-a)<=s&&!!I)
;if(!te[d])for(var E=0;E<=d;E++)te[E]||(te[E]={})
;te[d].vx==S&&te[d].vy==P&&te[d].el===m||(te[d].el=m,
te[d].vx=S,te[d].vy=P,clearInterval(te[d].pid),
0==S&&0==P||(u=!0,te[d].pid=setInterval(function(){
o&&0===this.layer&&Bt.active._onTouchMove(Vt)
;var e=te[this.layer].vy?te[this.layer].vy*c:0,n=te[this.layer].vx?te[this.layer].vx*c:0
;"function"==typeof i&&"continue"!==i.call(Bt.dragged.parentNode[R],n,e,t,Vt,te[this.layer].el)||C(te[this.layer].el,n,e)
}.bind({layer:d}),24))),d++}while(e.bubbleScroll&&f!==l&&(f=z(f,!1)));ee=u}
}),30),ae=function(t){
var e=t.originalEvent,n=t.putSortable,o=t.dragEl,i=t.activeSortable,r=t.dispatchSortableEvent,a=t.hideGhostForTarget,s=t.unhideGhostForTarget
;if(e){var c=n||i;a()
;var l=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e,u=document.elementFromPoint(l.clientX,l.clientY)
;s(),c&&!c.el.contains(u)&&(r("spill"),this.onSpill({dragEl:o,putSortable:n}))}}
;function se(){}function ce(){}function le(){function t(){this.defaults={
swapClass:"sortable-swap-highlight"}}return t.prototype={dragStart:function(t){
var e=t.dragEl;ie=e},dragOverValid:function(t){
var e=t.completed,n=t.target,o=t.onMove,i=t.activeSortable,r=t.changed,a=t.cancel
;if(i.options.swap){var s=this.sortable.el,c=this.options;if(n&&n!==s){var l=ie
;!1!==o(n)?(L(n,c.swapClass,!0),ie=n):ie=null,l&&l!==ie&&L(l,c.swapClass,!1)}
r(),e(!0),a()}},drop:function(t){
var e,n,o,i,r,a,s=t.activeSortable,c=t.putSortable,l=t.dragEl,u=c||this.sortable,d=this.options
;ie&&L(ie,d.swapClass,!1),
ie&&(d.swap||c&&c.options.swap)&&l!==ie&&(u.captureAnimationState(),
u!==s&&s.captureAnimationState(),
n=ie,r=(e=l).parentNode,a=n.parentNode,r&&a&&!r.isEqualNode(n)&&!a.isEqualNode(e)&&(o=E(e),
i=E(n),
r.isEqualNode(a)&&o<i&&i++,r.insertBefore(n,r.children[o]),a.insertBefore(e,a.children[i])),
u.animateAll(),u!==s&&s.animateAll())},nulling:function(){ie=null}},s(t,{
pluginName:"swap",eventProperties:function(){return{swapItem:ie}}})}
se.prototype={startIndex:null,dragStart:function(t){var e=t.oldDraggableIndex
;this.startIndex=e},onSpill:function(t){var e=t.dragEl,n=t.putSortable
;this.sortable.captureAnimationState(),n&&n.captureAnimationState()
;var o=S(this.sortable.el,this.startIndex,this.options)
;o?this.sortable.el.insertBefore(e,o):this.sortable.el.appendChild(e),
this.sortable.animateAll(),n&&n.animateAll()},drop:ae},s(se,{
pluginName:"revertOnSpill"}),ce.prototype={onSpill:function(t){
var e=t.dragEl,n=t.putSortable||this.sortable
;n.captureAnimationState(),e.parentNode&&e.parentNode.removeChild(e),
n.animateAll()},drop:ae},s(ce,{pluginName:"removeOnSpill"})
;var ue,de,fe,me,pe,he=[],be=[],ge=!1,ve=!1,we=!1;function ye(){function t(t){
for(var e in this)"_"===e.charAt(0)&&"function"==typeof this[e]&&(this[e]=this[e].bind(this))
;t.options.avoidImplicitDeselect||(t.options.supportPointer?g(document,"pointerup",this._deselectMultiDrag):(g(document,"mouseup",this._deselectMultiDrag),
g(document,"touchend",this._deselectMultiDrag))),
g(document,"keydown",this._checkKeyDown),
g(document,"keyup",this._checkKeyUp),this.defaults={
selectedClass:"sortable-selected",multiDragKey:null,avoidImplicitDeselect:!1,
setData:function(e,n){var o="";he.length&&de===t?he.forEach((function(t,e){
o+=(e?", ":"")+t.textContent})):o=n.textContent,e.setData("Text",o)}}}
return t.prototype={multiDragKeyDown:!1,isMultiDrag:!1,
delayStartGlobal:function(t){var e=t.dragEl;fe=e},delayEnded:function(){
this.isMultiDrag=~he.indexOf(fe)},setupClone:function(t){
var e=t.sortable,n=t.cancel;if(this.isMultiDrag){
for(var o=0;o<he.length;o++)be.push(N(he[o])),
be[o].sortableIndex=he[o].sortableIndex,
be[o].draggable=!1,be[o].style["will-change"]="",
L(be[o],this.options.selectedClass,!1),
he[o]===fe&&L(be[o],this.options.chosenClass,!1);e._hideClone(),n()}},
clone:function(t){
var e=t.sortable,n=t.rootEl,o=t.dispatchSortableEvent,i=t.cancel
;this.isMultiDrag&&(this.options.removeCloneOnHide||he.length&&de===e&&(ke(!0,n),
o("clone"),i()))},showClone:function(t){
var e=t.cloneNowShown,n=t.rootEl,o=t.cancel
;this.isMultiDrag&&(ke(!1,n),be.forEach((function(t){O(t,"display","")
})),e(),pe=!1,o())},hideClone:function(t){
var e=this,n=(t.sortable,t.cloneNowHidden),o=t.cancel
;this.isMultiDrag&&(be.forEach((function(t){
O(t,"display","none"),e.options.removeCloneOnHide&&t.parentNode&&t.parentNode.removeChild(t)
})),n(),pe=!0,o())},dragStartGlobal:function(t){
t.sortable,!this.isMultiDrag&&de&&de.multiDrag._deselectMultiDrag(),
he.forEach((function(t){t.sortableIndex=E(t)})),he=he.sort((function(t,e){
return t.sortableIndex-e.sortableIndex})),we=!0},dragStarted:function(t){
var e=this,n=t.sortable;if(this.isMultiDrag){
if(this.options.sort&&(n.captureAnimationState(),this.options.animation)){
he.forEach((function(t){t!==fe&&O(t,"position","absolute")}))
;var o=T(fe,!1,!0,!0);he.forEach((function(t){t!==fe&&U(t,o)})),ve=!0,ge=!0}
n.animateAll((function(){
ve=!1,ge=!1,e.options.animation&&he.forEach((function(t){B(t)
})),e.options.sort&&xe()}))}},dragOver:function(t){
var e=t.target,n=t.completed,o=t.cancel;ve&&~he.indexOf(e)&&(n(!1),o())},
revert:function(t){var e=t.fromSortable,n=t.rootEl,o=t.sortable,i=t.dragRect
;he.length>1&&(he.forEach((function(t){o.addAnimationState({target:t,
rect:ve?T(t):i}),B(t),t.fromRect=i,e.removeAnimationState(t)
})),ve=!1,function(t,e){he.forEach((function(n,o){
var i=e.children[n.sortableIndex+(t?+o:0)]
;i?e.insertBefore(n,i):e.appendChild(n)}))}(!this.options.removeCloneOnHide,n))
},dragOverCompleted:function(t){
var e=t.sortable,n=t.isOwner,o=t.insertion,i=t.activeSortable,r=t.parentEl,a=t.putSortable,s=this.options
;if(o){
if(n&&i._hideClone(),ge=!1,s.animation&&he.length>1&&(ve||!n&&!i.options.sort&&!a)){
var c=T(fe,!1,!0,!0);he.forEach((function(t){t!==fe&&(U(t,c),r.appendChild(t))
})),ve=!0}if(!n)if(ve||xe(),he.length>1){var l=pe
;i._showClone(e),i.options.animation&&!pe&&l&&be.forEach((function(t){
i.addAnimationState({target:t,rect:me
}),t.fromRect=me,t.thisAnimationDuration=null}))}else i._showClone(e)}},
dragOverAnimationCapture:function(t){
var e=t.dragRect,n=t.isOwner,o=t.activeSortable;if(he.forEach((function(t){
t.thisAnimationDuration=null
})),o.options.animation&&!n&&o.multiDrag.isMultiDrag){me=s({},e);var i=M(fe,!0)
;me.top-=i.f,me.left-=i.e}},dragOverAnimationComplete:function(){
ve&&(ve=!1,xe())},drop:function(t){
var e=t.originalEvent,n=t.rootEl,o=t.parentEl,i=t.sortable,r=t.dispatchSortableEvent,a=t.oldIndex,s=t.putSortable,c=s||this.sortable
;if(e){var l=this.options,u=o.children
;if(!we)if(l.multiDragKey&&!this.multiDragKeyDown&&this._deselectMultiDrag(),
L(fe,l.selectedClass,!~he.indexOf(fe)),
~he.indexOf(fe))he.splice(he.indexOf(fe),1),ue=null,W({sortable:i,rootEl:n,
name:"deselect",targetEl:fe,originalEvent:e});else{if(he.push(fe),W({sortable:i,
rootEl:n,name:"select",targetEl:fe,originalEvent:e
}),e.shiftKey&&ue&&i.el.contains(ue)){var d,f,m=E(ue),p=E(fe)
;if(~m&&~p&&m!==p)for(p>m?(f=m,
d=p):(f=p,d=m+1);f<d;f++)~he.indexOf(u[f])||(L(u[f],l.selectedClass,!0),
he.push(u[f]),W({sortable:i,rootEl:n,name:"select",targetEl:u[f],originalEvent:e
}))}else ue=fe;de=c}if(we&&this.isMultiDrag){
if(ve=!1,(o[R].options.sort||o!==n)&&he.length>1){
var h=T(fe),b=E(fe,":not(."+this.options.selectedClass+")")
;if(!ge&&l.animation&&(fe.thisAnimationDuration=null),c.captureAnimationState(),
!ge&&(l.animation&&(fe.fromRect=h,he.forEach((function(t){
if(t.thisAnimationDuration=null,t!==fe){var e=ve?T(t):h
;t.fromRect=e,c.addAnimationState({target:t,rect:e})}
}))),xe(),he.forEach((function(t){
u[b]?o.insertBefore(t,u[b]):o.appendChild(t),b++})),a===E(fe))){var g=!1
;he.forEach((function(t){t.sortableIndex===E(t)||(g=!0)
})),g&&(r("update"),r("sort"))}he.forEach((function(t){B(t)})),c.animateAll()}
de=c}(n===o||s&&"clone"!==s.lastPutMode)&&be.forEach((function(t){
t.parentNode&&t.parentNode.removeChild(t)}))}},nullingGlobal:function(){
this.isMultiDrag=we=!1,be.length=0},destroyGlobal:function(){
this._deselectMultiDrag(),
v(document,"pointerup",this._deselectMultiDrag),v(document,"mouseup",this._deselectMultiDrag),
v(document,"touchend",this._deselectMultiDrag),
v(document,"keydown",this._checkKeyDown),v(document,"keyup",this._checkKeyUp)},
_deselectMultiDrag:function(t){
if(!(void 0!==we&&we||de!==this.sortable||t&&k(t.target,this.options.draggable,this.sortable.el,!1)||t&&0!==t.button))for(;he.length;){
var e=he[0];L(e,this.options.selectedClass,!1),he.shift(),W({
sortable:this.sortable,rootEl:this.sortable.el,name:"deselect",targetEl:e,
originalEvent:t})}},_checkKeyDown:function(t){
t.key===this.options.multiDragKey&&(this.multiDragKeyDown=!0)},
_checkKeyUp:function(t){
t.key===this.options.multiDragKey&&(this.multiDragKeyDown=!1)}},s(t,{
pluginName:"multiDrag",utils:{select:function(t){var e=t.parentNode[R]
;e&&e.options.multiDrag&&!~he.indexOf(t)&&(de&&de!==e&&(de.multiDrag._deselectMultiDrag(),
de=e),L(t,e.options.selectedClass,!0),he.push(t))},deselect:function(t){
var e=t.parentNode[R],n=he.indexOf(t)
;e&&e.options.multiDrag&&~n&&(L(t,e.options.selectedClass,!1),he.splice(n,1))}},
eventProperties:function(){var t,e=this,n=[],o=[]
;return he.forEach((function(t){var i;n.push({multiDragElement:t,
index:t.sortableIndex
}),i=ve&&t!==fe?-1:ve?E(t,":not(."+e.options.selectedClass+")"):E(t),o.push({
multiDragElement:t,index:i})})),{items:(t=he,function(t){
if(Array.isArray(t))return c(t)}(t)||function(t){
if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)
}(t)||function(t,e){if(t){if("string"==typeof t)return c(t,e)
;var n={}.toString.call(t).slice(8,-1)
;return"Object"===n&&t.constructor&&(n=t.constructor.name),
"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0
}}(t)||function(){
throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}()),clones:[].concat(be),oldIndicies:n,newIndicies:o}},optionListeners:{
multiDragKey:function(t){
return"ctrl"===(t=t.toLowerCase())?t="Control":t.length>1&&(t=t.charAt(0).toUpperCase()+t.substr(1)),
t}}})}function ke(t,e){be.forEach((function(n,o){
var i=e.children[n.sortableIndex+(t?+o:0)]
;i?e.insertBefore(n,i):e.appendChild(n)}))}function xe(){
he.forEach((function(t){t!==fe&&t.parentNode&&t.parentNode.removeChild(t)}))}
Bt.mount(new function(){function t(){for(var t in this.defaults={scroll:!0,
forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0},
this)"_"===t.charAt(0)&&"function"==typeof this[t]&&(this[t]=this[t].bind(this))
}return t.prototype={dragStarted:function(t){var e=t.originalEvent
;this.sortable.nativeDraggable?g(document,"dragover",this._handleAutoScroll):this.options.supportPointer?g(document,"pointermove",this._handleFallbackAutoScroll):e.touches?g(document,"touchmove",this._handleFallbackAutoScroll):g(document,"mousemove",this._handleFallbackAutoScroll)
},dragOverCompleted:function(t){var e=t.originalEvent
;this.options.dragOverBubble||e.rootEl||this._handleAutoScroll(e)},
drop:function(){
this.sortable.nativeDraggable?v(document,"dragover",this._handleAutoScroll):(v(document,"pointermove",this._handleFallbackAutoScroll),
v(document,"touchmove",this._handleFallbackAutoScroll),
v(document,"mousemove",this._handleFallbackAutoScroll)),
oe(),ne(),clearTimeout(x),x=void 0},nulling:function(){
Vt=Jt=Kt=ee=Zt=Qt=Yt=null,te.length=0},_handleFallbackAutoScroll:function(t){
this._handleAutoScroll(t,!0)},_handleAutoScroll:function(t,e){
var n=this,o=(t.touches?t.touches[0]:t).clientX,i=(t.touches?t.touches[0]:t).clientY,r=document.elementFromPoint(o,i)
;if(Vt=t,e||this.options.forceAutoScrollFallback||d||u||m){
re(t,this.options,r,e);var a=z(r,!0)
;!ee||Zt&&o===Qt&&i===Yt||(Zt&&oe(),Zt=setInterval((function(){
var r=z(document.elementFromPoint(o,i),!0);r!==a&&(a=r,ne()),re(t,n.options,r,e)
}),10),Qt=o,Yt=i)}else{
if(!this.options.bubbleScroll||z(r,!0)===D())return void ne()
;re(t,this.options,z(r,!1),!1)}}},s(t,{pluginName:"scroll",
initializeByDefault:!0})}),Bt.mount(ce,se);const _e=Bt},893:(t,e,n)=>{
n.r(e),n.d(e,{default:()=>g})
;var o=n(72),i=n.n(o),r=n(825),a=n.n(r),s=n(659),c=n.n(s),l=n(56),u=n.n(l),d=n(540),f=n.n(d),m=n(113),p=n.n(m),h=n(906),b={}
;b.styleTagTransform=p(),
b.setAttributes=u(),b.insert=c().bind(null,"html"),b.domAPI=a(),
b.insertStyleElement=f(),i()(h.A,b);const g=h.A&&h.A.locals?h.A.locals:void 0},
72:t=>{var e=[];function n(t){
for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}
function o(t,o){for(var r={},a=[],s=0;s<t.length;s++){
var c=t[s],l=o.base?c[0]+o.base:c[0],u=r[l]||0,d="".concat(l," ").concat(u)
;r[l]=u+1;var f=n(d),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],
layer:c[5]};if(-1!==f)e[f].references++,e[f].updater(m);else{var p=i(m,o)
;o.byIndex=s,e.splice(s,0,{identifier:d,updater:p,references:1})}a.push(d)}
return a}function i(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){
if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return
;n.update(t=e)}else n.remove()}}t.exports=function(t,i){var r=o(t=t||[],i=i||{})
;return function(t){t=t||[];for(var a=0;a<r.length;a++){var s=n(r[a])
;e[s].references--}for(var c=o(t,i),l=0;l<r.length;l++){var u=n(r[l])
;0===e[u].references&&(e[u].updater(),e.splice(u,1))}r=c}}},659:t=>{var e={}
;t.exports=function(t,n){var o=function(t){if(void 0===e[t]){
var n=document.querySelector(t)
;if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{
n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t)
;if(!o)throw Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.")
;o.appendChild(n)}},540:t=>{t.exports=function(t){
var e=document.createElement("style")
;return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{
t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{
t.exports=function(t){if("undefined"==typeof document)return{
update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{
update:function(n){!function(t,e,n){var o=""
;n.supports&&(o+="@supports (".concat(n.supports,") {")),
n.media&&(o+="@media ".concat(n.media," {"));var i=void 0!==n.layer
;i&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,
i&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var r=n.sourceMap
;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),
e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){
if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{
t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{
for(;e.firstChild;)e.removeChild(e.firstChild)
;e.appendChild(document.createTextNode(t))}}},376:(t,e)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.t=void 0,e.t=()=>({
l:["258d3f","28fa48","1f6fae"],u:["253d","2de3","2d3d","235f","5416","2396"]})},
276:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.m=void 0
;const o=n(185);e.m=()=>{document.addEventListener("dblclick",(t=>{
const e=t?.target
;"INPUT"===e?.tagName&&(e.className.includes("buyAmountInput")&&(t=>{
const e=t?.closest("div[class^=buyMenu]")?.querySelector("span[class^=amount]"),n=e?.innerText?.match(/\d+/)?.[0]??"1"
;(0,o.p)(t,Math.max((0,o.h)(n),1e4).toString())
})(e),e.className.includes("input-money")&&(async t=>{if(!t)return
;const e=t.closest("li")?"li":"div[class^=row]",n=t?.closest(e)?.querySelector("img")?.src.match(/\d+/)?.[0]
;if(!n)return;const i={section:"market",select:"bazaar",objID:n
},r=await(0,o.v)(i);if(!r?.status)return
;const{bazaar:a}=r,s=(0,o.h)(a[1]?.cost??"")-1;(0,o.k)(t,s.toString())
})(e),"clear-all"==e.className&&(t=>{
const e=t?.closest("li")?.querySelector("div.name-wrap"),n=e?.innerText?.match(/x(\d+)/)?.[1]??"1"
;t.className.includes("removeAmount")?(0,o.p)(t,n):(0,o.k)(t,n)
})(e),e.className.includes("removeAmount")&&(t=>{
const e=t?.closest("div[class^=row]")?.querySelector("div[class^=desc]"),n=e?.innerText?.match(/x(\d+)/)?.[1]??"1"
;(0,o.p)(t,n)})(e))}))}},913:(t,e,n)=>{Object.defineProperty(e,"__esModule",{
value:!0}),e._=void 0;const o=n(185);e._=async()=>{const t={section:"user",
select:"bazaar",objID:(0,o.L)("userId")??""},e=await(0,o.v)(t)
;if(!e?.status)return
;const{bazaar:n}=e,i=n.reduce(((t,e)=>t+ +e?.price*+e.quantity),0),r=n.reduce(((t,e)=>t+ +e?.market_price*+e.quantity),0),a=(0,
o.O)({classList:"nst-trade-value",
innerText:`Total: $${(0,o.M)(i)} - MV: $${(0,o.M)(r)}`})
;document?.querySelector("#bazaarRoot .wrapper")?.insertAdjacentElement("afterend",a)
}},661:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0
}),e.j=void 0,e.j=t=>{
Array.from(t.querySelectorAll('[class*="torn-item"]')).forEach((t=>{
const e=t.getAttribute("src")
;t.setAttribute("src",e.replace("small","large")),t.classList.add("nst-city-item")
}))}},51:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.D=void 0
;const o=n(185);e.D=()=>{document.addEventListener("dblclick",(t=>{
const e=t?.target
;"INPUT"===e?.tagName&&"text"===e?.type&&e.className.includes("input-money")&&(t=>{
if(!t.closest("li"))return
;const e=t?.closest("li")?.querySelector("div.sold-daily").innerText,n=(0,
o.h)(e).toString();(0,o.k)(t,n)})(e)}))}},980:(t,e,n)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.T=void 0;const o=n(185)
;e.T=()=>{document.addEventListener("dblclick",(t=>{const e=t?.target
;if("INPUT"!==e?.tagName)return
;const n=e.parentElement?.parentElement,i=(0,o.h)(n?.querySelector(".instock").innerText)
;e.value=""+Math.min(i,100)}))}},488:(t,e,n)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.I=void 0;const o=n(185)
;e.I=()=>{console.log("nst - init default start")
;const t=(0,o.S)()??{},e={},n=i.script,r=t?.script??n
;Object.keys(r).forEach((t=>{n[t]&&(n[t].enabled=r[t].enabled)
})),t.script=n,Object.keys(i).forEach((n=>e[n]=t[n]??i[n])),
(0,o.P)(e),console.log("nst - init default end")};const i={script:{leftalign:{
name:"left align",enabled:!1,description:"align torn to the left",onpage:"all"},
refillreminder:{name:"refill reminder",enabled:!1,
description:"highlight energy and nerve bar if refills haven't been used",
onpage:"all"},minilastaction:{name:"mini profile last action",enabled:!1,
description:"display last action on mini profile",onpage:"all"},
bazaarautoprice:{name:"bazaar auto price",enabled:!1,
description:"autoprice item for bazaar (double-click on input box)",
onpage:"bazaar"},bazaarvalue:{name:"bazaar value",enabled:!1,
description:"show value of bazaar",onpage:"bazaar"},cityfinds:{
name:"city finds",enabled:!1,description:"highlight items in the city",
onpage:"city"},cshopmaxbuy:{name:"city shop max buy",enabled:!1,
description:"add the max between 100 and current stock",onpage:"city"},
ezmoneydeposit:{name:"fast deposit",enabled:!1,
description:"deposit money with a double click (double-click on dollar sign)",
onpage:"company"},companyrestock:{name:"company easy restock",enabled:!1,
description:"autoset restock amount to daily sold value (double-click on input box)",
onpage:"company"},employeela:{name:"employee last action",enabled:!1,
description:"highlight employee with last action before one or two days",
onpage:"company"},rwbonusdisplay:{name:"rw bonus display",enabled:!1,
description:"display rw weapon bonus over the item instead of tooltip",
onpage:"displaycase"},displaycaseitemid:{name:"display case items id",
enabled:!1,description:"shows item id on display case's manage page",
onpage:"displaycase"},quickfaction:{name:"faction quick item",enabled:!1,
description:"quickly use items from faction",onpage:"faction"},fighterino:{
name:"enhanced attack button",enabled:!1,
description:"add a button for faster attacks",onpage:"fight"},targetstatus:{
name:"target info",enabled:!1,
description:"add useful information about the target",onpage:"fight"},
livenetworth:{name:"live networth",enabled:!1,
description:"display live changes on newtworth",onpage:"home"},effectivestats:{
name:"effective stats",enabled:!1,
description:"show effective stats after bonus/malus",onpage:"home"},
maxbuyabroad:{name:"max buy abroad",enabled:!1,
description:"add max capacity quantity (double-click on input box)",
onpage:"home"},quickitems:{name:"quick items",enabled:!1,
description:"quickly use items",onpage:"items"},removeuglyimage:{
name:"hide new images",enabled:!1,description:"hide new images from item page",
onpage:"items"},equipnoconfirm:{name:"equip without confirm",enabled:!1,
description:"remove confirmation from item equip/use",onpage:"items"},
easyloadoutequip:{name:"fast equip loadout",enabled:!1,
description:"equip loadout clicking in the whole are",onpage:"items"},
marketnoconfirm:{name:"market quick buy",enabled:!1,
description:"remove confirmation in item market",onpage:"market"},quickjail:{
name:"quick jail",enabled:!1,description:"quickly bail and bust people",
onpage:"jail"},missionhelper:{name:"mission helper",enabled:!1,
description:"tips for missions before accepting",onpage:"mission"},
pointsnoconfirm:{name:"points quick buy",enabled:!1,
description:"remove confirmation in points market",onpage:"points"},
pointsmuglight:{name:"points mug helper",enabled:!1,
description:"highlight profitable points for mugs",onpage:"points"},idtoname:{
name:"id near name",enabled:!1,description:"add player id near the name",
onpage:"profile"},statspies:{name:"stat spies",enabled:!1,
description:"add items and stats on profile page",onpage:"profile"},tradevalue:{
name:"trade value",enabled:!1,description:"add market value of items in trade",
onpage:"trade"}},hold:!1,jailscore:1e4,mugperc:.075,mugthreshold:4e6,
outcome:"leave",quickbail:!1,quickbust:!1,quickfaction:{},quickitems:{},
reloadone:!1,reloadtwo:!1,temp:!1,assaperk:!1,weapon:{primary:0,secondary:1,
melee:2}}},714:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0
}),e.q=void 0;const o=n(185);e.q=t=>{
0!==(0,o.$)().match(/manage/g).length&&t&&Array.from(t.children).forEach((t=>{
const e=t.getAttribute("itemid"),n=t.querySelector(".name .desc")
;n&&e&&n.insertAdjacentElement("afterBegin",(0,o.C)({classList:"text-nstmain",
innerText:"ID: "+e}))}))}},108:(t,e)=>{Object.defineProperty(e,"__esModule",{
value:!0}),e.N=void 0,e.N=t=>{
Array.from(t?.querySelectorAll("ul[class*='slotItems']")).forEach((t=>{
t.addEventListener("click",(()=>{
const e=t?.parentNode?.parentNode?.childNodes[0]?.childNodes[1]?.childNodes[1]
;e.click()}))}))}},149:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0
}),e.U=void 0;const o=n(185);e.U=t=>{if(!t)return
;const e=t.getElementsByTagName("ul")[0],n=Array.from(e.children),i={Strength:0,
Defense:0,Speed:0,Dexterity:0,Total:0};for(const t of n){
const e=t.getAttribute("aria-label");if(!e)return;const n=e.split(" ")
;if(n.length>2){
const t=n[0].replace(/:/g,""),e=(0,o.h)(n[1]),r=n[2].replace(/%/g,""),a=r.charAt(0),s=(0,
o.h)(r),c="+"==a?s/100+1:1-s/100;i[t]=Math.round(e*c),i.Total+=Math.round(e*c)}}
e.lastElementChild.removeAttribute("class");const r=(0,o.O)({
classList:"nst-box-header"});r.appendChild((0,o.C)({classList:"nst-box-title"
})).appendChild((0,o.C)({id:"nst-box-title",innerText:"Effective Stats"
})),e.appendChild(r),Object.keys(i).forEach((t=>{const n=(0,o.B)({tabIndex:0,
ariaLabel:`${t} ${(0,o.M)(i[t])}`}),r=(0,o.C)({classList:"divider",
innerHTML:`<span>${t}</span>`}),a=(0,o.C)({classList:"desc",
innerText:` ${(0,o.M)(i[t])} `,style:"margin-left: 3px"})
;n.appendChild(r),n.appendChild(a),e.appendChild(n)
})),e.lastElementChild.classList.add("last")}},188:(t,e,n)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.F=void 0
;const o=n(185),i=(t,e)=>{if(!t?.querySelector)return
;if(!t?.querySelector("ul.employee-list"))return
;const n=t?.querySelector("ul.employee-list")?.children,o=Array.from(n)
;if(0===o.length)return;const i=(Date.now()-864e5)/1e3,r=(Date.now()-1728e5)/1e3
;o.forEach((t=>{const n=t?.getAttribute("data-user");if(!n)return
;const o=e[n]?.last_action?.timestamp,a=t?.querySelector(".employee")
;if(!a)return;const s=o<r?"bg-nstred":o<i?"bg-nstyellow":""
;s&&a.classList.add(s)}))};e.F=async t=>{if(!t)return;const e=await(0,o.v)({
section:"company",select:"employees"});if(!e?.status)return
;const{company_employees:n}=e;i(t,n),new MutationObserver((t=>{t.forEach((t=>{
Array.from(t.addedNodes).forEach((t=>i(t,n)))}))})).observe(t,{childList:!0,
subtree:!0})}},716:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0
}),e.R=void 0;const o=n(185);e.R=t=>{const{step:e,action:n,confirm:i}=(0,o.H)(t)
;return"actionForm"!==e||"equip"!==n||1===i?(0,o.G)({...(0,o.H)(t)}):(0,o.G)({
...(0,o.H)(t),confirm:1})}},355:(t,e)=>{Object.defineProperty(e,"__esModule",{
value:!0}),e.X=void 0;const n=t=>{let e=0;t.addEventListener("click",(()=>{
if(1!=e++)return
;e=0,document.querySelector('.deposit-box input[value="DEPOSIT"], .deposit button.torn-btn, #armoury-donate .cash button').click()
;const t=document.querySelector("#armoury-donate .cash-confirm .yes")
;t&&t.click()}))};e.X=t=>{
const e=document.querySelector(".deposit-box .input-money-symbol, .deposit .input-money-symbol")
;e&&n(e),new MutationObserver((t=>{t.forEach((t=>{
Array.from(t.addedNodes).forEach((t=>{
const e=t.querySelector&&t.querySelector(".deposit-box .input-money-symbol, .deposit .input-money-symbol, .donate .input-money-symbol")
;e&&n(e)}))}))})).observe(t,{childList:!0,subtree:!0})}},549:(t,e,n)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.W=void 0;const o=n(185),i=(0,
o.L)("user2ID")??"",r=(0,o.S)(),{reloadone:a,reloadtwo:s,weapon:c}=r
;let l={},u={},d=!1,f=0;const m=()=>{
const t=u?.defenderUser?.life,e=l?.currentAttackStatus,n=u?.attackStatus,{hold:i}=(0,
o.S)()
;return i&&t<2?"hold":"end"===n&&"endResult"in u?"end":t<2&&"finishOptions"in u?"finish":"error"in u?"check":d||"notStarted"!==n?d||"process"===e?"hit":"check":"start"
},p=()=>{
const t=u?.attackerAmmoStatus,e=u?.currentClips?.[0],n=u?.attackerItems[1]?.item[0]?.currentBonuses,i=u?.currentMove,r={
primary:()=>{
const n=null!=u?.attackerItems[1]?.item[0]?.ID,o="0"!==e?.attackerPrimaryRoundsLeft,i=!t?.[1]?.includes("No ammo")
;return n&&i&&(o||a)},secondary:()=>{
const n=null!=u?.attackerItems?.[2]?.item[0]?.ID,o="0"!==e?.attackerSecondaryRoundsLeft,i=!t?.[2]?.includes("No ammo")
;return n&&i&&(o||s)},melee:()=>null!=u?.attackerItems?.[3]?.item[0]?.ID}
;if(0===i&&"Assassinate"===n?.[72]?.title&&(0,o.S)()?.assaperk)return 1;do{
const t=Object.keys(c).filter((t=>c[t]==f))[0];if(r[t]())return h[t];f++
}while(f<3);return 999},h={primary:1,secondary:2,melee:3,temp:5},b={
check:()=>u.error??"checking",start:()=>"start fight",finish:()=>"executing",
end:()=>u?.endResult?.info??u?.endResult?.groupEvent,hit:()=>{
const t=+u?.defenderUser?.life,e=+u?.defenderUser?.maxlife
;return`${t} / ${e} (${Math.floor(t/e*100)}%)`}},g={check:()=>({user2ID:i}),
start:()=>(d=!0,{step:"startFight",user2ID:i}),finish:()=>{
const{outcome:t}=(0,o.S)();return{step:"finish",fightResult:t}},hold:()=>({}),
end:()=>({}),hit:()=>{const t="user1EquipedItemID";return(()=>{
if(void 0===u?.attackerItems?.[5]?.item[0]?.ID)return!1;const{temp:t}=(0,o.S)()
;if(!t)return!1
;const e=u?.attackerItems[5]?.item[0]?.ID,n=u?.defenderItems[6]?.item[0]?.ID
;return!("256"===e&&["670","1355","348"].includes(n)||"392"===e&&["348","642","644","655","670","675","680","1355"].includes(n))
})()?{step:"attack",user2ID:i,[t]:5}:{step:"attack",user2ID:i,[t]:p()}}
},v=async t=>{const e=t.target;e.disabled=!0;const n=m(),i=(g[n]??g.error)()
;if((0,o.K)(i))return
;const r="https://www.torn.com/loader.php?sid=attackData&mode=json&rfcv="+(0,
o.J)(),a={method:"POST",headers:{"x-requested-with":"XMLHttpRequest"},
body:new URLSearchParams(i)};console.log(n,i),await fetch(r,{...a
}).then((t=>t.json())).then((t=>((t,e)=>{e.disabled=!1,console.log(t),l=t,u=t.DB
;const n=m();e.innerText=b[n]()})(t,e))).catch((t=>console.error(t)))}
;e.W=t=>(t=>{const e=(0,o.Y)({title:"fighterino",element:t})
;e.classList.remove("nst-box-row"),e.classList.add("nst-box-column")
;const n=(()=>{const t=(0,o.O)({classList:"nst-box-column"}),e=(0,o.O)({
classList:"nst-outcome"});e.addEventListener("change",(t=>{const e=t.target.id
;(0,o.P)({outcome:e})}))
;const n=(0,o.V)("leave","outcome"),i=(0,o.V)("mug","outcome"),r=(0,
o.V)("hospitalize","outcome")
;e.appendChild(n),e.appendChild(i),e.appendChild(r),t.appendChild(e);const a=(0,
o.O)({classList:"nst-outcome"}),s={id:"nst-hold",checked:(0,o.S)("hold")
},c=(0,o.Z)(s,"hold","",(t=>{const e=t.target.checked;(0,o.P)({hold:e})})),l={
id:"nst-temp",checked:(0,o.S)("temp")},u=(0,o.Z)(l,"use temp first","",(t=>{
const e=t.target.checked;(0,o.P)({temp:e})})),d={id:"nst-assa",
checked:(0,o.S)("assaperk")},f=(0,o.Z)(d,"assassinate","",(t=>{
const e=t.target.checked;(0,o.P)({assaperk:e})}))
;return a.appendChild(c),a.appendChild(u),a.appendChild(f),t.appendChild(a),t
})(),i=(0,o.O)({classList:"nst-box-column"}),r=(0,o.tt)({id:"nst-fighteroo",
classList:"torn-btn m-2",innerText:"fighterino"});r.addEventListener("click",v),
i.appendChild(r),e.appendChild(n),e.appendChild(i)})(t)},689:(t,e)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.et=void 0,e.et=t=>{
document.getElementById("skip-to-content").innerText=t?.innerText}},470:(t,e)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.nt=void 0,e.nt=t=>{}},
379:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0
}),e.ot=void 0,e.ot=()=>{
document.documentElement.classList.add("nst-left-align")}},620:(t,e,n)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.it=void 0;const o=n(185)
;e.it=t=>{if(!t)return
;const e=t?.parentElement,n=(0,o.S)("userdata"),i=(0,o.h)(n?.networth?.total),r=(0,
o.h)(n?.personalstats?.networth),a=Math.round(i-r),s=a>0?"text-nstgreen":a<0?"text-nstred":"",c=`<b class='${s}'>$${(0,
o.M)(a)}</b>`,l=(0,o.B)({classList:"last",tabIndex:0,
ariaLabel:"Live NW: "+(0,o.M)(i)}),u=(0,o.C)({classList:"divider",
innerHTML:"<span>Live Networth</span>"}),d=(0,o.C)({
classList:`desc ${s} font-bold`,innerText:` $${(0,o.M)(i)} `,
style:"margin-left: 3px; margin-right: 3px;"}),f=(0,o.rt)("i",{
classList:"networth-info-icon",title:c,style:"margin-left: 6px;"})
;l.appendChild(u),
l.appendChild(d).insertAdjacentElement("beforeend",f),e.lastElementChild.removeAttribute("class"),
e.appendChild(l)}},954:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0
}),e.st=e.ct=void 0;const o=n(185);e.ct=t=>{const{step:e}=(0,o.H)(t)
;if("buyItem"!==e)return(0,o.G)({...(0,o.H)(t)})
;const n=(0,o.$)()?.match(/(shop|market)/g)?.[0],i={market:t=>{
const e=t.replace("step=buyItem","step=buyItemConfirm");return(0,o.G)({
...(0,o.H)(e),item:0})},shop:t=>{
const e=t.replace("step=buyItem","step=buyItemConfirm");return(0,o.G)({
...(0,o.H)(e),item:0})},noloc:t=>(0,o.G)({...(0,o.H)(t)})}
;return(i[n]??i.noloc)(t)},e.st=t=>{new MutationObserver((e=>{e.forEach((e=>{
const n=(0,o.$)()?.match(/(shop|market)/g)?.[0],i=".items > li.show-item-info"
;Array.from(e.addedNodes).forEach((e=>{if(e.querySelector&&e.querySelector(i)){
if("shop"!==n)return;Array.from(t.querySelectorAll(i)).forEach((t=>{
t.querySelector(".buy .buy-link").dataset.price=t?.querySelector(".cost")?.innerText?.replace(",","")?.match(/\d+/)?.[0]
}))}}))}))})).observe(t,{childList:!0,subtree:!0})}},424:(t,e,n)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.lt=void 0;const o=n(185)
;e.lt=()=>{document.addEventListener("dblclick",(t=>{const e=t?.target
;if("INPUT"!==e?.tagName)return
;const n=e?.parentElement?.parentElement?.parentElement?.parentElement,i=(0,
o.h)(document?.querySelector(".travel-agency-market .availableItemsAmount")?.getAttribute("value")),r=(0,
o.h)(document.getElementById("user-money").innerText),a=(0,
o.h)(n?.querySelector(".cost .c-price").innerText),s=(0,
o.h)(n?.querySelector(".stock .stck-amount").innerText),c=r/a>=i?i:Math.trunc(r/a),l=Math.min(c,s).toString()
;(0,o.k)(e,l)}))}},717:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0
}),e.ut=void 0;const o=n(185),i=n(607);let r;const a=t=>{
t.querySelector("#nst-lastaction")||t.appendChild((0,o.C)({id:"nst-lastaction",
classList:"sub-desc",innerText:"last action: "+r}))};e.ut=t=>{
r=(0,o.dt)(+t.user.lastAction.seconds).trim(),
(0,i.ft)(a,"#profile-mini-root .profile-container .description")}},
763:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.ht=void 0
;const o=n(185),i={a_good_day_to_get_hard:{
task:"Achieve a killstreak of 3 - 10."},a_kimpossible_task:{
task:"Defeat (P) using only melee and temporary weapons."},
a_problem_at_the_tracks:{task:"Defeat 3 (P) without using any guns."},
a_thor_loser:{task:"Use Duke's hammer to hit 8 - 16 unique body parts"},
against_the_odds:{task:"Defeat 2 (P)."},an_honorary_degree:{
task:"Defeat (P) without using any guns"},army_of_one:{
task:"Attack (P) 3 times with various masks."},bakeout_breakout:{
task:"Combine a fruitcake and the lock pick, and send 'special fruitcake' to someone in jail."
},bare_knuckle:{task:"Defeat (P) with no weapons or armor equipped."},
batshit_crazy:{task:"Inflict damage with Penelope."},battering_ram:{
task:"Attack (P) 3 times."},big_tub_of_muscle:{
task:"Defeat (P) despite their gargantuan strength."},birthday_surprise:{
task:"Obtain and send a specific item as a present to Duke."},bonnie_and_clyde:{
task:"Defeat (P), and their spouse."},bountiful:{
task:"Successfully claim 2 - 5 bounties"},bounty_on_the_mutiny:{
task:"Bounty (P) and wait for the bounty to be claimed."},bring_it:{
task:"Defeat Duke in a group attack"},candy_from_babies:{
task:"Collect $50,000 - $250,000 in bounties."},charity_work:{task:"Mug 2 (P)"},
cracking_up:{
task:"Defeat and interrogate (P) for the code to unlock Duke's safe and send the content to Duke after opening it."
},critical_education:{task:"Achieve 3 - 9 critical hits"},
cut_them_down_to_size:{task:"Defeat any player of your level or higher."},
dirty_little_secret:{
task:"Put a bounty on (P), then attack the person who claimed it."},
double_jeopardy:{task:"Put a bounty on (P) and defeat them."},drug_problem:{
task:"Defeat 4 - 7 (P)."},emotional_debt:{
task:"Hit (P) with tear gas or pepper spray."},estranged:{
task:"Injure one of (P)'s legs."},family_ties:{task:"Hospitalize (P) 3 times"},
field_trip:{task:"Win $100 - $1,000,000 on 3 casino games."},fireworks:{
task:"Expend 250 - 1250 rounds of ammunition"},forgotten_bills:{
task:"Defeat (P)"},frenzy:{task:"Defeat any 5 - 15 players."},
get_things_jumping:{task:"Deal and receive damage."},graffiti:{
task:"Hit (P) with pepper spray."},guardian:{task:"Defeat (P)."},hammer_time:{
task:"Defeat (P) with a hammer."},hands_off:{task:"Defeat 3 - 5 (P)."},
hare_meet_tortoise:{task:"Defeat (P) despite their lightning fast speed."},
hide_and_seek:{task:"Find (P) from 3 - 5 listed and defeat them."},
hiding_in_plain_view:{task:"Defeat (P) in a random country."},high_fliers:{
task:"Defeat 3 (P) in random countries"},hobgoblin:{
task:"Defeat a player of your choice 5 times"},immovable_object:{
task:"Defeat (P) despite their impenetrable defense."},inside_job:{
task:"Attack (P) and secrete an item on them."},introduction_duke:{
task:"Complete 10 Duke contracts."},keeping_up_appearances:{
task:"Mug (P) and send them back the money."},kiss_of_death:{
task:"Defeat (P) and use the kiss option."},lack_of_awareness:{
task:"Defeat (P)."},lost_and_found:{task:"Put (P) in the hospital for 12 hours."
},loud_and_clear:{task:"Use 3 - 11 explosive grenades."},loyal_customer:{
task:"Defeat (P)."},make_it_slow:{
task:"Defeat (P) in no fewer than 5 - 9 turns in a single attack."},
marriage_counseling:{task:"Defeat (P)'s spouse."},massacrist:{task:"Defeat (P)."
},meeting_the_challenge:{task:"Mug people for a total of $10,000 - $16,000,000."
},motivator:{task:"Lose or stalemate to (P) on the first attempt."},
new_kid_on_the_block:{task:"Defeat 5 players."},no_man_is_an_island:{
task:"Mug 2 out of 3 (P)."},no_second_chances:{
task:"Defeat (P) on the first attempt."},out_of_the_frying_pan:{
task:"Go to the jail, use Felovax to go to the hospital, then use Zylkene."},
painleth_dentitht:{task:"Defeat (P) with a baseball bat."},party_tricks:{
task:"Defeat (P) despite their nimble dexterity."},pass_the_word:{
task:"Send a message including keyword to (P)."},peak_experience:{
task:"Defeat (P)."},proof_of_the_pudding:{
task:"Use a specific weapon on (P), then send the weapon to them."},
rabbit_response:{task:"Defeat 3 (P) within 30 - 10 minutes."},reconstruction:{
task:"Equip kitchen knife and leather gloves, defeat (P) then dump both items."
},red_faced:{task:"Defeat (P) with a trout on the finishing hit."},
rising_costs:{task:"Hit (P) with a brick."},rolling_in_it:{task:"Mug (P)."},
safari:{task:"Defeat (P) with a rifle in South Africa."},scammer:{
task:"Defeat (P)."},sellout_slayer:{
task:"Buy a gun, use the gun on any 2 - 6 players, then sell it again."},
sending_a_message:{task:"Defeat (P)."},show_some_muscle:{task:"Attack (P)."},
sleep_aid:{task:"Defeat (P)."},some_people:{
task:"Send any item as a parcel to (P)."},standard_routine:{
task:"Defeat (P) with a clubbed weapon, fists or kick."},stomach_upset:{
task:"Injure (P)'s stomach."},swan_step_too_far:{
task:"Get an item from the dump and defeat its previous owner."},
the_executive_game:{task:"Defeat (P) using only fists or kick."},
the_tattoo_artist:{task:"Defeat (P) using only a slashing or piercing weapon."},
three_peat:{task:"Leave any player, mug any player and hospitalize any player."
},training_day:{task:"Use 250 - 1,250 energy in the gym."},tree_huggers:{
task:"Defeat 5 - 8 (P)."},undercutters:{task:"Defeat 3 (P)."},
unwanted_attention:{task:"Hospitalize 4 (P)."},withdrawal:{
task:"Injure (P)'s both arms."},wrath_of_duke:{task:"Defeat 4 (P)."}};e.ht=t=>{
Array.from(t.querySelectorAll(".giver-cont-wrap > div[id^=mission]:not(.nst-edit)")).forEach((t=>{
if(!t?.querySelector)return
;const e=t?.querySelector(".title-black")?.childNodes[0].textContent.replace(/\n/g,"").trim(),n=e.toLowerCase().replaceAll(/[ -]/g,"_").replaceAll(/[:!,]/g,""),r=n in i?i?.[n]?.task:"mission not found",a=(0,
o.C)({innerHTML:"<br/><br/><b>todo:</b> "+r,classList:"text-nstmain"})
;t.querySelector(".max-height-fix")?.appendChild(a),t.classList.add("nst-edit")
}))}},243:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.bt=void 0
;const o=n(185),i=t=>{
const e=t?.querySelector(".total-price"),n=t?.querySelector(".action")
;(0,o.h)(e?.innerText)*o.minMugPerc>=o.mugThres&&n.classList.add("text-black","bg-nstmain")
};e.bt=t=>{new MutationObserver((t=>{t.forEach((t=>{
Array.from(t.addedNodes).forEach((t=>{
const e="LI"===t?.tagName,n=t?.firstElementChild;e&&n&&i(n)}))}))})).observe(t,{
childList:!0,subtree:!0
}),Array.from(document.querySelectorAll(".users-point-sell > li")).forEach((t=>i(t?.firstElementChild)))
}},982:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.gt=void 0
;const n=t=>{if(t.classList.contains("yes"))return;t.classList.add("yes")
;const e=t?.getAttribute("href")?.replace(/=buy/g,"=buy1")?.replace(/=remove/g,"=remove1")?.replace(/&points=\d+$/g,"")
;t.setAttribute("href",e)};e.gt=t=>{new MutationObserver((t=>{t.forEach((t=>{
Array.from(t.addedNodes).forEach((t=>{
const e="LI"===t?.tagName,o=t?.firstElementChild;e&&o&&n(o)}))}))})).observe(t,{
childList:!0,subtree:!0
}),Array.from(document.querySelectorAll(".users-point-sell > li")).forEach((t=>n(t?.firstElementChild)))
}},718:function(t,e,n){var o=this&&this.__importDefault||function(t){
return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{
value:!0}),e.vt=void 0;const i=o(n(246)),r=n(185),a=t=>{t.stopPropagation()
;const e=t.target.closest("#nst-quick-use").parentElement.getAttribute("data-itemID")
;if(!e)return;const n=(0,r.S)(r.qfs);Object.keys(n).includes(e)&&(async t=>{
const e=document.getElementById("nst-item-resp");if(e){
for(;e.lastChild;)e.removeChild(e.lastChild);(async(t,e)=>{const{id:n}=t,o={
step:"useItem",itemID:n,fac:"1"};if(!o)return
;const i="https://www.torn.com/item.php?rfcv="+(0,r.J)(),a={method:"POST",
headers:{"x-requested-with":"XMLHttpRequest"},body:new URLSearchParams(o)
},s=await(await fetch(i,{...a})).json(),c=s.links??{},l=s.text??{},u=(0,r.O)({})
;u.appendChild((0,r.wt)({innerHTML:l}));const d=(0,r.wt)({})
;Object.values(c).forEach((t=>{const e=(0,r.yt)({
classList:"t-blue h m-left10 "+t.class,href:t.url,innerText:t.title})
;t.attr.split(/\s+/).forEach((t=>{
const n=t.split("=")[0].toString(),o=t.split("=")[1].toString()
;e.setAttribute(n,o)})),d.appendChild(e)
})),u.appendChild(d),e.appendChild(u),e.classList.remove("nstGreen"),
e.classList.remove("nstBold");const f=e.querySelector(".counter-wrap")
;if(!f)return
;const m=1e3*+(f.getAttribute("data-time")||0),p=Math.floor(m/864e5),h=Math.floor(m%864e5/36e5)+24*p,b=Math.floor(m%36e5/6e4),g=Math.floor(m%6e4/1e3)
;f.innerText=`${h}:${b}:${g}`})(t,e),e.classList.remove("hidden")}})(n[e])
},s=t=>{t.stopPropagation(),t.preventDefault()
;const e=t.target.closest("#nst-quick-use").parentElement.getAttribute("data-itemID")
;if(!e)return;const n=(0,r.S)(r.qfs)
;Object.keys(n).includes(e)&&(delete n[e],(0,r.P)({[r.qfs]:n}),c())},c=()=>{
const t=document.getElementById("nst-"+r.qfs);if(t){
for(;t.lastChild;)t.removeChild(t.lastChild)
;Object.values((0,r.S)(r.qfs)).forEach((e=>((t,e)=>{
const{id:n,name:o,quantity:i}=t,c=`/images/items/${n}/medium.png`,l=(0,r.O)({
classList:"nst-box-btn-div"})
;l.setAttribute("data-itemID",n),l.setAttribute("data-qty",i);const u=(0,r.tt)({
id:"nst-quick-use",classList:"nst-box-button"}),d=(0,r.kt)({src:c,alt:o,
classList:"nst-box-img"}),f=(0,r.C)({id:"nst-quick-name",innerText:o
}),m=(0,r.C)({id:"nst-quick-close",classList:"nst-box-close",innerText:"✕"})
;u.addEventListener("click",a),
m.addEventListener("click",s),u.appendChild(d),u.appendChild(f),
u.appendChild(m),l.appendChild(u),e.appendChild(l)})(e,t))),new i.default(t,{
animation:150,dataIdAttr:"data-itemid",store:{get:()=>{const t=(0,r.S)(r.qfs)
;return Object.entries(t).sort(((t,e)=>t[1].order-e[1].order)).map((t=>t[0]))},
set:t=>{const e=t.toArray(),n=(0,r.S)(r.qfs)
;e.forEach((t=>n[t].order=e.indexOf(t))),(0,r.P)({[r.qfs]:n})}}})}},l=t=>{
t.stopPropagation(),t.preventDefault()
;const{target:e}=t,n=e?.closest(".name"),o=n?.closest("li")?.querySelector("img"),i=(0,
r.h)(o.getAttribute("src")).toString(),a=n?.innerText.replace(/ x\d+$/,"").replace(/[ ]*Blood Bag[ :]*/,"").replace(/[ ]*Bottle of[ :]*/,"").replace(/[ ]*First Aid[ :]*/,"").replace(/[ ]*Lawyer's Business Card[ :]*/,"LBC").replace(/[ ]*Can of[ :]*/,"")
;if(!i)return;const s=(0,r.S)(r.qfs);if(Object.keys(s).includes(i))return
;const l=0===Object.values(s)?.length?0:+Object.values(s).reduce(((t,e)=>t?.order>e?.order?t:e))?.order??0
;s[i]={id:i,order:l+1,name:a},(0,r.P)({[r.qfs]:s}),c()},u={box:t=>{
const e=(0,r.Y)({title:r.qft,element:t});e?.parentElement?.appendChild((0,r.O)({
id:"nst-item-resp",classList:"nst-box-row hidden"})),c()},item:t=>{
Array.from(t.querySelectorAll("div.name")).forEach((t=>t.addEventListener("dblclick",l)))
},nopager:()=>{}};e.vt=t=>{new MutationObserver((t=>{t.forEach((t=>{
const e=Array.from(t.addedNodes);e?.length>0&&e.forEach((t=>{
const e="faction-armoury-tabs"===t?.id,n=RegExp("armoury-(medical|drugs|boosters)","g"),o=t?.parentElement?.id?.match(n)&&"UL"===t.tagName&&t.classList.contains("item-list")
;u[e?"box":o?"item":"nopager"](t)}))}))})).observe(t,{childList:!0,subtree:!0})}
},215:function(t,e,n){var o=this&&this.__importDefault||function(t){
return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{
value:!0}),e.xt=void 0
;const i=o(n(246)),r=n(185),a=["Primary","Secondary","Melee","Temporary"],s=["Medical","Drug","Energy Drink","Alcohol","Candy","Booster","Supply Pack",...a],c=t=>{
t.stopPropagation()
;const e=t.target.closest("#nst-quick-use").parentElement.getAttribute("data-itemID")
;if(!e)return;const n=(0,r.S)(r.qis);Object.keys(n).includes(e)&&(async t=>{
const{category:e}=t,n=document.getElementById("nst-item-resp");if(n){
for(;n.lastChild;)n.removeChild(n.lastChild);a.includes(e)?await(async(t,e)=>{
const{id:n,strangeID:o}=t,i={step:"actionForm",item_id:n,type:5,action:"equip",
item:n,id:o,confirm:1};if(!i)return
;const a="https://www.torn.com/item.php?rfcv="+(0,r.J)(),s={method:"POST",
headers:{"x-requested-with":"XMLHttpRequest"},body:new URLSearchParams(i)
},c=await(await fetch(a,{...s})).text()
;e.innerHTML=c,c?.match(/ equipped/)?e.classList.add("text-nstgreen"):e.classList.remove("text-nstgreen")
})(t,n):await(async(t,e)=>{const{id:n}=t,o={step:"useItem",itemID:n,item:n}
;if(!o)return;const i="https://www.torn.com/item.php?rfcv="+(0,r.J)(),a={
method:"POST",headers:{"x-requested-with":"XMLHttpRequest"},
body:new URLSearchParams(o)},s=await(await fetch(i,{...a
})).json(),c=s.links??{},l=s.text??{},u=(0,r.O)({});u.appendChild((0,r.wt)({
innerHTML:l}));const d=(0,r.wt)({});Object.values(c).forEach((t=>{
const e=(0,r.yt)({classList:"t-blue h m-left10 "+t.class,href:t.url,
innerText:t.title});t.attr.split(/\s+/).forEach((t=>{
const n=t.split("=")[0].toString(),o=t.split("=")[1].toString()
;e.setAttribute(n,o)})),d.appendChild(e)
})),u.appendChild(d),e.appendChild(u),e.classList.remove("nstGreen"),
e.classList.remove("nstBold");const f=e.querySelector(".counter-wrap")
;if(!f)return
;const m=1e3*+(f.getAttribute("data-time")||0),p=Math.floor(m/864e5),h=Math.floor(m%864e5/36e5)+24*p,b=Math.floor(m%36e5/6e4),g=Math.floor(m%6e4/1e3)
;f.innerText=`${h}:${b}:${g}`})(t,n),n.classList.remove("hidden")}})(n[e])
},l=t=>{t.stopPropagation(),t.preventDefault()
;const e=t.target.closest("#nst-quick-use").parentElement.getAttribute("data-itemID")
;if(!e)return;const n=(0,r.S)(r.qis)
;Object.keys(n).includes(e)&&(delete n[e],(0,r.P)({[r.qis]:n}),u())},u=()=>{
const t=document.getElementById("nst-"+r.qis);if(t){
for(;t.lastChild;)t.removeChild(t.lastChild)
;Object.values((0,r.S)(r.qis)).forEach((e=>((t,e)=>{
const{id:n,name:o,quantity:i}=t,a=`/images/items/${n}/medium.png`,s=(0,r.O)({
classList:"nst-box-btn-div"})
;s.setAttribute("data-itemID",n),s.setAttribute("data-qty",i);const u=(0,r.tt)({
id:"nst-quick-use",classList:"nst-box-button"}),d=(0,r.kt)({src:a,alt:o,
classList:"nst-box-img"}),f=(0,r.C)({id:"nst-quick-name",innerText:o
}),m=(0,r.C)({id:"nst-quick-close",classList:"nst-box-close",innerText:"✕"})
;u.addEventListener("click",c),
m.addEventListener("click",l),u.appendChild(d),u.appendChild(f),
u.appendChild(m),s.appendChild(u),e.appendChild(s)})(e,t))),new i.default(t,{
animation:150,dataIdAttr:"data-itemid",store:{get:()=>{const t=(0,r.S)(r.qis)
;return Object.entries(t).sort(((t,e)=>t[1].order-e[1].order)).map((t=>t[0]))},
set:t=>{const e=t.toArray(),n=(0,r.S)(r.qis)
;e.forEach((t=>n[t].order=e.indexOf(t))),(0,r.P)({[r.qis]:n})}}})}},d=t=>{
t.stopPropagation(),t.preventDefault();const e=t.target
;if(!/name-wrap/.test(e.className))return
;const n=e.closest("li"),o=n?.dataset?.item,i=n?.dataset?.qty,a=n?.dataset?.category??"",c=n?.querySelector('.cont-wrap ul [class*="equipped"]')?.getAttribute("data-id")??"",l=n?.querySelector(".title-wrap .name-wrap .name"),d=l?.innerText?.replace(/[ ]*Blood Bag[ :]*/,"")?.replace(/[ ]*Bottle of[ :]*/,"")?.replace(/[ ]*First Aid[ :]*/,"")?.replace(/[ ]*Lawyer's Business Card[ :]*/,"LBC")?.replace(/[ ]*Can of[ :]*/,"")
;if(!(n&&o&&a&&s.includes(a)))return;const f=(0,r.S)(r.qis)
;if(Object.keys(f).includes(o))return
;const m=0===Object.values(f)?.length?0:+Object.values(f).reduce(((t,e)=>t?.order>e?.order?t:e))?.order??0
;f[o]={id:o,order:m+1,name:d,quantity:i,category:a,strangeID:c},(0,r.P)({
[r.qis]:f}),u()};e.xt=t=>{
const e=t?.parentElement,n=e?.querySelector("div.equipped-items-wrap"),o=(0,
r.Y)({title:r.qit,element:n});o?.parentElement?.appendChild((0,r.O)({
id:"nst-item-resp",classList:"nst-box-row hidden"
})),u(),new MutationObserver((t=>{t.forEach((t=>{
const e=t.target,n=Array.from(t.addedNodes)
;n?.length>0&&"UL"===e?.nodeName&&"category-wrap"==e?.parentElement?.id&&null==t?.previousSibling&&n.forEach((t=>{
const e=t?.dataset?.item;e&&t.addEventListener("dblclick",d)}))}))
})).observe(t,{childList:!0,subtree:!0})}},840:(t,e,n)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e._t=void 0
;const o=n(185),i=(t,e)=>{
const{item:n,selector:i,reg:r}=e,a=(0,o.S)("quick"+n)??!1,s=t?.parentElement,c=s.querySelector("a."+i),l=c?.getAttribute("href")
;if(!c||!l)return
;const u=RegExp(r+"$","g"),d=RegExp(r+"1$","g"),f=a?l.replace(u,r+"1"):l.replace(d,r)
;c.setAttribute("href",f)},r=t=>{
const e=+((0,o.S)("jailscore")??"0"),n=t?.parentElement,r=t.querySelector("span.time").innerText.split(" ").reduce(((t,e)=>t+(/h/.test(e)?60*+e.replace(/h/g,""):/m/.test(e)?+e.replace(/m/g,""):0)),0),a=(0,
o.h)(t.querySelector("span.level").innerText.match(/\d+/g)?.join())*r
;t.setAttribute("title","score: "+(0,o.M)(a));const s=a>e&&0!==e
;n.style.display=s?"none":"",i(t,{item:"bail",selector:"bye",reg:"buy"}),i(t,{
item:"bust",selector:"bust",reg:"breakout"})},a=t=>{const e=document,n=t.target
;(0,o.P)({[n.value]:n.checked});const i=e.querySelectorAll("span.info-wrap")
;Array.from(i).forEach((t=>r(t)))};e._t=t=>{(t=>{const e=(0,o.Y)({
title:"Quick Jail",element:t?.parentElement}),n=(0,o.O)({
classList:"nst-box-column"}),i=(0,o.O)({classList:"nst-box-column"})
;e.appendChild(n),e.appendChild(i),(0,o.Lt)({elem:n,title:"Jail Score",
cback:()=>{const e=t.querySelectorAll("span.info-wrap")
;Array.from(e).forEach((t=>r(t)))}});const s="Quick Bust",c=(0,o.Ot)(s),l={
id:"nst-"+c,type:"checkbox",value:c,checked:(0,o.S)(c)??!1}
;i.appendChild((0,o.Z)(l,s,"",a));const u="Quick Bail",d=(0,o.Ot)(u),f={
id:"nst-"+d,type:"checkbox",value:d,checked:(0,o.S)(d)??!1}
;i.appendChild((0,o.Z)(f,u,"",a))})(t),new MutationObserver((t=>{t.forEach((t=>{
Array.from(t.addedNodes).forEach((t=>{if("LI"!==t.tagName)return
;const e=t.querySelector("span.info-wrap");e&&r(e)}))}))})).observe(t,{
childList:!0,subtree:!0})}},957:(t,e,n)=>{Object.defineProperty(e,"__esModule",{
value:!0}),e.Mt=void 0;const o=n(185);e.Mt=t=>{t=t.parentElement
;const{refills:{energy_refill_used:e,nerve_refill_used:n}}=(0,o.S)("userdata")
;Object.values({energy:{name:"energy",
selector:"[class*='bar'][class*='energy']",link:"https://www.torn.com/gym.php",
refillUsed:e},nerve:{name:"nerve",selector:"[class*='bar'][class*='nerve']",
link:"https://www.torn.com/crimes.php",refillUsed:n}}).forEach((e=>{
const{name:n,selector:o,link:i,refillUsed:r}=e,a=o+' p[class^="bar-name"]',s=t?.querySelector(a),c=s?.parentElement?.parentElement
;c?.removeAttribute("href"),
c?.addEventListener("click",(()=>window.open(i,"_blank")))
;const l="energy"===n?"text-nstgreen":"nerve"===n?"text-nstred":""
;r||s?.classList.add(l)}))}},292:(t,e)=>{Object.defineProperty(e,"__esModule",{
value:!0}),e.jt=void 0,e.jt=t=>t?.remove()},263:(t,e)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.Dt=void 0;const n=t=>{
const e=t.getAttribute&&"true"==t.getAttribute("contenteditable")
;t.textContent&&!e&&(t.textContent=t.textContent.replaceAll("Natural Selection","NS"))
},o=t=>{3==t.nodeType&&n(t);let e=t?.firstChild;for(;e;)3==e.nodeType?n(e):o(e),
e=e.nextSibling};e.Dt=t=>{o(t);const e=document.querySelector("#map")
;e&&new MutationObserver((t=>{t.forEach((t=>{
Array.from(t.addedNodes).forEach((t=>o(t))),"attributes"==t.type&&o(t.target)}))
})).observe(e,{childList:!0,subtree:!0,attributes:!0})}},52:(t,e,n)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.Tt=void 0;const o=n(185),i={
amarket:()=>{new MutationObserver((t=>{t.forEach((t=>{
Array.from(t.addedNodes).forEach((t=>{
if("LI"!==t?.tagName||!t?.firstElementChild?.classList?.contains("item-cont-wrap"))return
;const e=Array.from(t.querySelectorAll(".bonus-attachment-icons"))
;if(0===e.length)return;let n="";e.forEach((t=>{
const o=t?.title,i=o?.match(/(?<=>)[\w\s-]+(?=<)/)?.[0]??"FAIL",r=o?.match(/\d+(?=(%| turns))/)?.[0]??"XX"
;n+=`${r}${/disarm/.test(i.toLowerCase())?"T":"%"} ${i}`,
1!==e.length&&(n+="<br />")})),t.querySelector("p.t-gray-6").innerHTML=n}))}))
})).observe(document.documentElement,{childList:!0,subtree:!0})},bazaar:()=>{
new MutationObserver((t=>{t.forEach((t=>{Array.from(t.addedNodes).forEach((t=>{
if(!/(itemsContainner|row)/.test(t.className)||t.querySelector(".nst-edit"))return
;const e=Array.from(t.querySelectorAll('[class*="iconBonuses"] > div > i'))
;0!==e.length&&e.forEach((t=>{
const e="radiation"===t.className.split("-")[3]?"radiation":t.className.split("-")[2],n="full"===e?"EOD":"negative"===e?"Delta":"sentinel"===e?"defense":"vanguard"===e?"dex":e,i=t?.parentElement?.parentElement
;i?.setAttribute("style","float:left;right:0px;top:3px;padding-left:5px;display:inline-block;white-space:nowrap;"),
i.classList.add("nst-edit"),t?.parentElement?.appendChild((0,o.C)({innerText:n
})),t?.parentElement?.appendChild((0,o.rt)("br",{}))}))}))}))
})).observe(document.documentElement,{childList:!0,subtree:!0})},
displaycase:t=>{
const e=Array.from(t.querySelectorAll(".bonus-attachment-icons"))
;if(0===e.length)return;let n="";e.forEach((t=>{n=""
;const e=t?.title,o=e?.match(/(?<=>)[\w\s-]+(?=<)/)?.[0]??"FAIL",i=e?.match(/\d+(?=(%| turns))/)?.[0]??"XX"
;n+=`${i}${/disarm/.test(o.toLowerCase())?"T":"%"} ${o}`,
t.setAttribute("style","float:left;white-space: nowrap;right: 0px;top:-40px"),
t.appendChild(Object.assign(document.createElement("span"),{innerText:n
})),t?.insertAdjacentElement("afterend",document.createElement("br"))}))}}
;e.Tt=t=>i[(0,o.It)()](t)},268:function(t,e,n){
var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{
default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.St=void 0
;const i=o(n(246)),r=n(488),a=n(185),s=async()=>{
const t=document.getElementById("nst-ts-message"),e=document.getElementById("nst-tsapikey")
;if(!t||!e)return;const n=e.value
;if(t.innerText="",19!==n?.length)return t.classList.remove("text-nstgreen"),
void(t.innerText="Invalid Key Length");const o=await(0,a.Pt)({api:n,selection:""
})
;if(!o?.status)return t.classList.remove("text-nstgreen"),void(t.innerText="Invalid Key")
;(0,a.P)({tsapikey:n}),t.classList.add("text-nstgreen"),t.innerText="Key Saved"
},c=async()=>{
const t=document.getElementById("nst-message"),e=document.getElementById("nst-apikey")
;if(!t||!e)return;const n=e.value
;if(t.innerText="",16!==n?.length)return void(t.innerText="Invalid Key Length")
;const o={section:"user",select:"profile",api:n},i=await(0,a.v)(o)
;i?.status&&((0,a.P)({apikey:n}),(0,a.Et)(i)?((0,a.P)({userdata:i
}),l()):t.innerText="You are not allowed, contact seintz[2460991]")},l=()=>{
if(!(0,a.Et)())return;(0,r.I)();const t=document.querySelector("#nst-ul-main")
;h(t,"tsapi",f),h(t,"attack",d)
;const e=(0,a.S)("script"),n=Object.keys(e).sort().reduce(((t,n)=>(t[n]=e?.[n],
t)),{})
;Object.values(n).map((t=>t.onpage)).filter((t=>void 0!==t)).filter(((t,e,n)=>n.indexOf(t)==e)).sort().forEach((e=>h(t,e,u)))
},u=t=>{const e=document.getElementById(t);if(!e)return;e.innerHTML=""
;const n=t.replace(/nst-/g,""),o=(0,
a.S)("script"),i=Object.keys(o).sort().reduce(((t,e)=>(o?.[e]?.onpage===n&&(t[e]=o?.[e]),
t)),{}),r=(0,a.O)({classList:"nst-script-block"})
;Object.entries(i).forEach((([t,e])=>{const n=e?.name,o=(0,a.Ot)(t),i={
id:"nst-"+o,value:o,checked:e?.enabled??!1
},s=(0,a.Z)(i,n,e.description.toLowerCase(),(t=>{
const e=t.target,n=(0,a.S)("script");n[e.value].enabled=e.checked,(0,a.P)({
script:n})}));r.appendChild(s)})),e.appendChild(r)},d=t=>{
const e=document.getElementById(t);e&&(e.innerHTML="",e.appendChild((()=>{
const t=(0,a.O)({classList:"nst-block"}),e=(0,a.rt)("h4",{
classList:"nst-block-title",innerText:"mug threshold"});return t.appendChild(e),
(0,a.Lt)({elem:t,title:"mug threshold"}),t})()),e.appendChild((()=>{
const t=(0,a.O)({classList:"nst-block"}),e=(0,a.rt)("h4",{
classList:"nst-block-title",innerText:"default outcome"}),n=(0,a.O)({
id:"outcome",classList:"nst-outcome"});n.addEventListener("change",(t=>{
const e=t.target.id;(0,a.P)({outcome:e})}))
;const o=(0,a.V)("leave","outcome"),i=(0,
a.V)("mug","outcome"),r=(0,a.V)("hospitalize","outcome"),s={id:"nst-hold",
checked:(0,a.S)("hold")},c=(0,a.Z)(s,"hold","",(t=>{const e=t.target.checked;(0,
a.P)({hold:e})}))
;return n.appendChild(o),n.appendChild(i),n.appendChild(r),t.appendChild(e),
t.appendChild(n),t.appendChild(c),t})()),e.appendChild((()=>{
const t=(0,a.S)("weapon"),e=(0,a.O)({classList:"nst-block"}),n=(0,a.rt)("h4",{
classList:"nst-block-title",innerText:"weapon order"}),o=(0,a.O)({id:"weapon"})
;Object.keys(t).forEach((t=>{const e=(0,a.O)({id:t,classList:"list-group-item",
innerText:t});e.setAttribute("data-id",t),o.appendChild(e)})),new i.default(o,{
animation:150,store:{get:()=>{const t=(0,a.S)("weapon"),e=["","","",""]
;return Object.entries(t).forEach((t=>e[t[1]]=t[0])),e},set:t=>{
const e=t.toArray(),n=(0,a.S)("weapon")
;e.forEach((t=>n[t]=e.indexOf(t))),(0,a.P)({weapon:n})}}});const r={
id:"nst-temp",checked:(0,a.S)("temp")},s=(0,a.Z)(r,"use temp first","",(t=>{
const e=t.target.checked;(0,a.P)({temp:e})})),c={id:"nst-assa",
checked:(0,a.S)("assaperk")},l=(0,a.Z)(c,"assassinate","",(t=>{
const e=t.target.checked;(0,a.P)({assaperk:e})}))
;return e.appendChild(n),e.appendChild(o),e.appendChild(s),e.appendChild(l),e
})()),e.appendChild((()=>{const t=(0,a.O)({classList:"nst-block"
}),e=(0,a.rt)("h4",{classList:"nst-block-title",innerText:"weapon reload"
}),n=(0,a.O)({id:"reload",classList:"nst-outcome"}),o={id:"nst-reloadone",
checked:(0,a.S)("reloadone")},i=(0,a.Z)(o,"primary","",(t=>{
const e=t.target.checked;(0,a.P)({reloadone:e})})),r={id:"nst-reloadtwo",
checked:(0,a.S)("reloadtwo")},s=(0,a.Z)(r,"secondary","",(t=>{
const e=t.target.checked;(0,a.P)({reloadtwo:e})}))
;return n.appendChild(i),n.appendChild(s),t.appendChild(e),t.appendChild(n),t
})()))},f=t=>{const e=document.getElementById(t);if(!e)return;e.innerHTML=""
;const n=(0,a.yt)({href:"https://www.tornstats.com/settings/general",
target:"_blank",innerText:"here",classList:"text-nstmain font-bold"
}),o=(0,a.O)({classList:"text-base"})
;o.innerHTML="Create your TS key ",o.appendChild(n);const i=(0,a.O)({
classList:"nst-api-wrap"}),r=(0,a.O)({classList:"nst-block"
}).appendChild((0,a.C)({id:"nst-ts-message",classList:"nst-message"
})),c="tsapikey",l=(0,a.rt)("input",{id:"nst-"+c,type:"password",
classList:"nst-input m-2",maxLength:19,required:!0,value:(0,a.S)(c)??""
}),u=(0,a.tt)({id:"nst-tslogin",classList:"torn-btn m-2",innerText:"save"})
;u.addEventListener("click",s),
i.appendChild(o),i.appendChild(r),i.appendChild(l),
i.appendChild(u),e.appendChild(i)},m=t=>{const e=document.getElementById(t)
;if(!e)return;e.innerHTML="";const n=(0,a.yt)({
href:"https://www.torn.com/preferences.php#tab=api",target:"_blank",
innerText:"limited",classList:"text-nstyellow font-bold"}),o=(0,a.yt)({
href:"https://www.torn.com/preferences.php#tab=api?&step=addNewKey&title=nst&type=3",
target:"_blank",innerText:"create",classList:"text-nstmain font-bold"
}),i=(0,a.O)({classList:"text-base"})
;i.innerHTML="Enter a ",i.appendChild(n),i.innerHTML+=" apikey or ",
i.appendChild(o),i.innerHTML+=" one ad-hoc";const r=(0,a.O)({
classList:"nst-api-wrap"}),s=(0,a.O)({classList:"nst-block"
}).appendChild((0,a.C)({id:"nst-message",classList:"nst-message"
})),l="apikey",u=(0,a.rt)("input",{id:"nst-"+l,type:"password",
classList:"nst-input m-2",maxLength:16,required:!0,value:(0,a.S)(l)??""
}),d=(0,a.tt)({id:"nst-login",classList:"torn-btn m-2",innerText:"save"})
;d.addEventListener("click",c),
r.appendChild(i),r.appendChild(s),r.appendChild(u),
r.appendChild(d),e.appendChild(r)},p=t=>{
const e=t.target,n=e.id,o=e?.closest("#nst-menu-body"),i=e,r=o?.querySelector(".nst-menu-sel"),a=o?.querySelector(".nst-menu-active"),s=o?.querySelector("#"+n.replace(/-li/g,""))
;r?.classList.remove("nst-menu-sel"),
a?.classList.remove("nst-menu-active"),a?.classList.toggle("hidden"),
i?.classList.add("nst-menu-sel"),
s?.classList.add("nst-menu-active"),s?.classList.toggle("hidden")
},h=(t,e,n=(()=>{}))=>{
const o=t?.parentElement,i="nst-"+e.toLowerCase(),r=i+"-li",s=(0,a.B)({id:r,
classList:"nst-menu-page",innerText:e})
;o.querySelector("#"+i)||o.querySelector("#"+r)||(t.appendChild(s),
o.appendChild((0,a.O)({id:i,classList:"nst-menu-item hidden"
})),s.addEventListener("click",p),n(i))},b=()=>{
const t=document?.querySelector(".content-wrapper.spring"),e=t?.style?.display
;t.style.display="none"===e?"":"none",
document?.getElementById("nst-menu")?.remove(),"none"===t.style.display&&(t=>{
const e=(0,a.O)({id:"nst-menu",classList:"nst-menu"}),n=(0,a.O)({
id:"nst-menu-wrap",classList:"nst-menu-wrap "}),o=(0,a.O)({id:"nst-menu-title",
classList:"nst-menu-title"}),i=(0,a.O)({id:"nst-menu-body",
classList:"nst-menu-body"});o.appendChild((0,a.C)({classList:"nst-logo"
})).appendChild((0,a.rt)("b",{innerText:"NST"}))
;const r=i.appendChild((0,a.rt)("ul",{id:"nst-ul-main",classList:"nst-ul-main"
}))
;n.appendChild(o),n.appendChild(i),e.appendChild(n),t.insertAdjacentElement("beforebegin",e),
h(r,"api",m)
;const s=i.querySelector("#nst-api-li"),c=i.querySelector("#nst-api")
;s?.classList.add("nst-menu-sel"),
c?.classList.add("nst-menu-active"),c?.classList.toggle("hidden"),l()})(t)}
;e.St=t=>{
const e=document.getElementById("nst-icon"),n=t.querySelector('ul[class^="status-icon"]')
;if(e||!n)return;const o=(0,a.B)({id:"nst-icon",classList:"nst-icon"})
;n.insertAdjacentElement("afterbegin",o).addEventListener("click",b)}},
527:function(t,e,n){var o=this&&this.__importDefault||function(t){
return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{
value:!0}),e.At=void 0;const i=o(n(246)),r=n(185),a=(0,r.L)("XID")
;e.At=async t=>{(t=>{const e=t?.closest(".profile-wrapper"),n=(0,r.Y)({
title:"Stat Spies",element:e}),o=(0,r.O)({id:"nst-compare",
classList:"nst-box-column"}),i=(0,r.O)({id:"nst-spies",
classList:"nst-box-column item-start"});o.appendChild((0,r.rt)("table",{
id:"nst-compare-table",classList:"nst-table"})),i.appendChild((0,r.rt)("table",{
id:"nst-spies-table",classList:"nst-table"})),i.appendChild((0,r.rt)("table",{
id:"nst-avg-table",classList:"nst-table"})),n.appendChild(o),n.appendChild(i)
})(t);const e=await(0,r.Pt)({selection:"/spy/user/"+a})
;e?.status&&(e?.compare?.status&&(t=>{
const e=document.getElementById("nst-compare-table"),n=(0,r.rt)("tr",{
classList:"nst-table-row text-center nst-nodrag"})
;e.appendChild(n),["Stat","Them","You"].forEach((t=>n.appendChild((0,
r.rt)("th",{innerText:t,classList:"nst-table-cell nst-table-cell-head"
})))),Object.keys(t).forEach((n=>{const o=(0,r.rt)("tr",{
classList:"nst-table-row"});o.setAttribute("data-id",n)
;const i=+t?.[n]?.amount,a=+t?.[n]?.difference,s=a>0?"text-nstgreen":a<0?"text-nstred":"text-nsttorntext",c=(0,
r.rt)("td",{innerText:""+n,classList:"nst-table-cell text-nsttorntext"
}),l=(0,r.rt)("td",{innerText:""+(0,r.M)(i),
classList:"nst-table-cell text-nsttorntext"}),u=(0,r.rt)("td",{
innerText:""+(0,r.M)(i+a),classList:"nst-table-cell"})
;u.classList.add(s),o.appendChild(c),
o.appendChild(l),o.appendChild(u),e.appendChild(o)})),new i.default(e,{
animation:150,filter:".nst-nodrag",store:{
get:()=>(0,r.S)("tscompare")??Object.keys(t),set:t=>(0,r.P)({
tscompare:t.toArray()})}});const o=(0,r.rt)("tr",{
classList:"nst-table-row nst-nodrag text-center"}),a=(0,r.rt)("td",{
classList:"nst-table-cell",colSpan:3}),s=(0,r.yt)({
href:"https://www.tornstats.com/settings/script",target:"_blank",
classList:"t-blue nst-nodrag",innerText:"Change your script settings here"})
;a.appendChild(s),o.appendChild(a),e.appendChild(o)
})(e?.compare?.data),e?.spy?.status&&(t=>{
const e=document.getElementById("nst-spies-table"),n=(0,r.rt)("tr",{
classList:"nst-table-row text-center"})
;e.appendChild(n),["Stat","Them","You"].forEach((t=>n.appendChild((0,
r.rt)("th",{innerText:t,classList:"nst-table-cell nst-table-cell-head"
})))),["Strength","Defense","Speed","Dexterity","Total"].forEach((n=>{
const o=+t?.[n.toLowerCase()],i=+t?.["delta"+n],a=i>0?"text-nstgreen":i<0?"text-nstred":"text-nsttorntext",s=(0,
r.rt)("tr",{classList:"nst-table-row"}),c=(0,r.rt)("td",{innerText:""+n,
classList:"nst-table-cell text-nsttorntext"}),l=(0,r.rt)("td",{
innerText:""+(0,r.M)(o),classList:"nst-table-cell text-nsttorntext"
}),u=(0,r.rt)("td",{innerText:""+(0,r.M)(o+i),classList:"nst-table-cell"})
;u.classList.add(a),
s.appendChild(c),s.appendChild(l),s.appendChild(u),e.appendChild(s)}))
;const o=(0,r.rt)("tr",{classList:"nst-table-row nst-nodrag text-center"}),i=(0,
r.rt)("td",{classList:"nst-table-cell text-nsttorntext",colSpan:3,
innerText:"Last Update: "+(t?.difference??"")})
;o.appendChild(i),e.appendChild(o)})(e?.spy))}},990:(t,e,n)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.zt=void 0
;const o=n(185),i=(0,o.L)("user2ID")??"";e.zt=async t=>{
if(document.querySelector("#nst-target-status"))return;const e={section:"user",
select:"",objID:i},n=await(0,o.v)(e);if(!n?.status)return
;const r=n?.states?.hospital_timestamp,a=n?.last_action?.timestamp,s=n?.life?.maximum,c=n?.life?.current,l=1===n?.revivable,u=0!==Object.values(n?.basicicons).filter((t=>t.includes("Territory War"))).length,d=(0,
o.dt)(Date.now()/1e3-a),f=(0,o.dt)(r-Date.now()/1e3),m=(0,o.O)({
id:"nst-target-status",classList:"nst-status-wrap"}),p=(0,o.O)({
classList:"nst-status-middle"}),h=(0,o.O)({classList:"nst-status-middle"}),b=(0,
o.O)({id:"nst-status-life",classList:"nst-status-item",
innerText:`life: ${Math.floor(c/s*100)}%`}),g=(0,o.O)({id:"nst-status-la",
classList:"nst-status-item",innerText:"la: "+d});g.setAttribute("data-time",a)
;const v=(0,o.O)({id:"nst-status-hosp",classList:"nst-status-item",
innerText:"hosp: "+(""===f?"OUT":f)});v.setAttribute("data-time",r)
;const w=(0,o.O)({id:"nst-status-wall",classList:"nst-status-item",
innerText:"wall: "+(u?"ON":"OFF")}),y=(0,o.O)({id:"nst-status-rev",
classList:"nst-status-item",innerText:"rev: "+(l?"ON":"OFF")});p.appendChild(b),
p.appendChild(w),
p.appendChild(y),h.appendChild(g),h.appendChild(v),m.appendChild(p),
m.appendChild(h),t.appendChild(m),setInterval((()=>((t,e,n)=>{
const i=(0,o.h)(t.getAttribute("data-time")),r=(0,
o.h)(e.getAttribute("data-time")),a=(0,
o.dt)(Date.now()/1e3-i),s=(0,o.dt)(r-Date.now()/1e3)
;t.innerText="la: "+a,e.innerText="hosp: "+(""===s?"OUT":s)
;const c=document.querySelector('#defender [id^="player-health-value"')??document.querySelector('[id^="player-health-value"'),[l,u]=c.innerText.split(" / "),d=Math.floor((0,
o.h)(l)/(0,o.h)(u)*100);n.innerText=`life: ${d}%`})(g,v,b)),5e3)}},
538:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.qt=void 0
;const o=n(185);e.qt=t=>{
const e=t?.querySelectorAll(".trade-cont .user.right li.color2 ul li")
;if(0===e.length)return;let n=0;const i=(0,o.S)("items")
;Array.from(e).forEach((t=>{
const e=t?.querySelector(".name"),o=e?.firstChild.textContent.trim(),{name:r,quantity:a}=(t=>{
const e=/^x\d+\s/.test(n=t)?"start":/\sx\d+$/.test(n)?"end":null;var n
;if(!e)return{name:t,quantity:1};const o=t.split(" "),i={start:0,end:o.length-1
}[e],r=o[i].substr(1),a=parseInt(r,10)
;return!e||isNaN(a)||a.toString().length!==r.length?{name:t,quantity:1}:{
name:o.filter(((t,e)=>e!==i)).join(" ").trim(),quantity:a}
})(o),s=Object.values(i).filter((t=>t.name===r))[0]
;n+=parseInt(s?.market_value)*a}));const r=(0,o.O)({classList:"nst-trade-value",
innerText:"MV: $"+(0,o.M)(n)});t.insertAdjacentElement("beforebegin",r)}},
185:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0
}),e.$t=e.Ct=e.G=e.H=e.Nt=e.Ut=e.Bt=e.Et=e.Ft=e.Rt=e.Ht=e.Pt=e.v=e.p=e.k=e.Y=e.Gt=e.Xt=e.Wt=e.Kt=e.V=e.Z=e.Lt=e.Jt=e.Qt=e.kt=e.yt=e.wt=e.B=e.tt=e.C=e.O=e.rt=e.Yt=e.Ot=e.dt=e.Vt=e.Zt=e.M=e.h=e.te=e.P=e.S=e.ee=e.K=e.$=e.It=e.ne=e.L=e.J=void 0,
e.qfs=e.qft=e.qis=e.qit=e.mugThres=e.minMugPerc=void 0;const o=n(376)
;e.J=()=>document.cookie.split("; ").find((t=>t.startsWith("rfc_v"))).split("=")[1],
e.L=t=>new URLSearchParams(window.location.search).get(t),
e.ne=()=>window.location.search.match(/\?sid=(\w+)/)?.[1],
e.It=()=>window.location.pathname.replace(/\//,"").replace(/\.php/,""),
e.$=()=>window.location.hash.replace(/#\/\w+=/g,""),
e.K=t=>!t||null==t||0===Object.keys(t).length,e.ee=t=>{try{return JSON.parse(t)
}catch(t){console.error(t)}return null},e.S=(t="")=>{let e;try{
e=JSON.parse(localStorage.getItem("nstdata"))}catch{e={}}
return""===t?e??{}:e?.[t]},e.P=t=>{const n=(0,e.S)()
;Object.entries(t).forEach((([t,e])=>n[t]=e)),
localStorage.setItem("nstdata",JSON.stringify(n))},e.te=t=>{
localStorage.removeItem(t)
},e.h=t=>+(t+"").replace(/[^\d]/g,""),e.M=t=>Math.round(t).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),
e.Zt=t=>{const e=["K","M","B","T","Q"];let n=Math.abs(t)
;if(n<1e3)return""+ +n.toFixed(2)
;for(let t=0;t<5;t++)if(n/=1e3,!(n>=1e3))return`${+n.toFixed(2)} ${e[t]}`
},e.Vt=t=>{const n=t.toLowerCase();let o=(0,e.h)(n),i=1
;return-1!==n.indexOf("k")?i=1e3:-1!==n.indexOf("m")?i=1e6:-1!==n.indexOf("b")?i=1e9:-1!==n.indexOf("t")&&(i=1e12),
o*=i,o>0?o.toLocaleString("en-US"):""},e.dt=t=>{let e=""
;const n=Math.floor(t/86400),o=Math.floor(t%86400/3600),i=Math.floor(t%3600/60),r=Math.floor(t%3600%60)
;return n>0&&(e+=n.toString().padStart(2,"0")+"d "),
o>0&&(e+=o.toString().padStart(2,"0")+"h "),
i>0&&(e+=i.toString().padStart(2,"0")+"m "),
r>0&&(e+=r.toString().padStart(2,"0")+"s"),""+e
},e.Ot=t=>t.toLowerCase().replace(/ /g,""),e.Yt=t=>{const e=t.replace(/ /g,"")
;return e.charAt(0).toLowerCase()+e.slice(1)
},e.rt=(t,e)=>Object.assign(document.createElement(t),e),
e.O=t=>(0,e.rt)("div",t),e.C=t=>(0,e.rt)("span",t),e.tt=t=>(0,e.rt)("button",t),
e.B=t=>(0,
e.rt)("li",t),e.wt=t=>(0,e.rt)("p",t),e.yt=t=>(0,e.rt)("a",t),e.kt=t=>(0,
e.rt)("img",t),e.Qt=t=>(0,e.rt)("input",t),e.Jt=t=>(0,e.rt)("label",t),e.Lt=t=>{
const{elem:n,title:o,cback:i=(()=>{})}=t,r=(0,e.Ot)(o),a=(0,e.O)({
classList:"nst-box-item"}),s=(0,e.rt)("input",{id:"nst-"+r,type:"text",
classList:"nst-input",value:(0,e.M)(+((0,e.S)(r)??"0")),placeholder:r})
;return s.addEventListener("keyup",(t=>{const n=t.target,o=(0,e.h)(n.value)
;n.value=o.toLocaleString("en-US");const r=(0,e.Ot)(n.placeholder);(0,e.P)({
[r]:o}),i()})),a.appendChild(s),n.appendChild(a),a},e.Z=(t,n,o,i)=>{
const r=(0,e.O)({classList:"nst-box-item"}),a=(0,e.Qt)({...t,type:"checkbox"
}),s={innerText:n,htmlFor:t?.id,title:o},c=(0,e.Jt)(s)
;return r.addEventListener("change",i),r.appendChild(a),r.appendChild(c),r
},e.V=(t,n)=>{const o=(0,e.S)("outcome").toString(),i=(0,e.O)({
classList:"nst-box-item"}),r=(0,e.Qt)({id:t,type:"radio",name:n,value:t,
checked:o===t}),a=(0,e.Jt)({innerText:"hospitalize"===t?"hosp":t,htmlFor:t,
classList:""});return i.appendChild(r),i.appendChild(a),i
},e.Kt=(t,e)=>document?.getElementById(t)?.appendChild(e),
e.Wt=t=>document.body.appendChild(t),e.Xt=(t,e)=>{
const n=document?.getElementById(t)
;if(n&&n.parentElement)return n.parentElement.insertBefore(e,n)};const i=t=>{
const n=t.target.closest(".nst-box-header"),o=n.nextElementSibling;if(!o)return
;const i=n.querySelector("#nst-box-title").innerText,r=(0,
e.Ot)(i)+"Folded",a=o.classList.toggle("hidden");(0,e.P)({[r]:a})};e.Gt=t=>{
const n=(0,e.O)({classList:"nst-box-header"});return n.appendChild((0,e.C)({
classList:"nst-box-title"})).appendChild((0,e.C)({id:"nst-box-title",innerText:t
})),n.addEventListener("click",i),n},e.Y=t=>{const{element:n,title:o}=t
;if(!n)return
;const i=(0,e.Ot)(o),r=i+"Folded",a=(0,e.S)(r)?"nst-box-content hidden":"nst-box-content",s=(0,
e.O)({classList:"nst-box"}),c=(0,e.Gt)(o),l=(0,e.O)({classList:a})
;if(document.querySelector("#nst-"+i))return;const u=(0,e.O)({id:"nst-"+i,
classList:"nst-box-row"})
;return l.appendChild(u),s.appendChild(c),s.appendChild(l),
n.insertAdjacentElement("beforebegin",s),u},e.k=(t,e)=>{
const n=new Event("input",{bubbles:!0})
;t.value=""+e,t.dispatchEvent(n),t.select()},e.p=(t,e)=>{
const n=new Event("input",{bubbles:!0
}),o=Object.getOwnPropertyDescriptor(t,"value")?.set,i=Object.getPrototypeOf(t),r=Object.getOwnPropertyDescriptor(i,"value")?.set
;o&&o!==r?r.call(t,e):o.call(t,e),t.dispatchEvent(n),t.select()},e.v=async t=>{
const{section:n,select:o,objID:i,api:a}=t,s="https://api.torn.com/"+n+`/${i??""}?selections=${o}`+`&key=${a??(0,
e.S)("apikey")}&comment=nst`,c=await r("GET",s)
;if(200!==c?.status)return console.error(c),{status:!1};const l=c?.response
;return void 0!==l?.error?(console.error(l?.error?.error),{status:!1}):{
status:!0,...l}},e.Pt=async t=>{
const{selection:n,api:o}=t,i=`https://www.tornstats.com/api/v2/${o??(0,
e.S)("tsapikey")??(0,e.S)("apikey")}${n}`,a=await r("GET",i)
;if(200!==a?.status)return console.error(a),{status:!1};const s=a?.response
;return void 0===s?.status||!1===s?.status?(console.error(s?.message,s),{
status:!1}):s},e.Ht=(t={})=>{const n=(0,e.K)(t)?(0,e.S)("userdata"):t;return{
oe:n?.player_id,ie:n?.faction?.faction_id}},e.Rt=t=>t.toString(16),e.Ft=()=>{
const{ie:t}=(0,e.Ht)();return!!(0,o.t)().u.includes((0,e.Rt)(t))},e.Et=(t={})=>{
const n=(0,e.S)("apikey");if(16!==n?.length)return!1
;const i=(0,e.K)(t)?(0,e.S)("userdata"):t,{oe:r,ie:a}=(0,e.Ht)(i)
;return!((0,e.K)(i)||!(0,
o.t)().u.includes((0,e.Rt)(a))&&!(0,o.t)().l.includes((0,e.Rt)(r)))
},e.Bt=async()=>{const t=(0,e.S)("apikey");if(16!==t?.length)return
;const n=(0,e.S)("userdata"),o=1e3*n?.timestamp??0;if(Date.now()-6e4<=o)return
;const i={section:"user",
select:"bars,basic,cooldowns,education,icons,money,networth,notifications,perks,profile,refills,timestamp,travel,newmessages,newevents,personalstats",
api:t},r=await(0,e.v)(i);if(!r?.status)return
;const a=r.merit_perks.filter((t=>t.includes("mug"))).join(),s=((0,
e.h)(a)/5+20)/400;if((0,e.P)({userdata:r}),(0,e.P)({mugperc:s
}),Date.now()-36e5<=o)return;const c={section:"torn",select:"items",api:t
},l=await(0,e.v)(c);if(!l?.status)return;const{items:u}=l;(0,e.P)({items:u})
},e.Ut=(t="")=>{if(!(0,e.Et)())return!1;const n=(0,e.S)("script")
;if(""===t)return!0;const o=n?.[t]?.enabled;return!!o},e.Nt=()=>{
const t=document?.body?.getAttribute("data-traveling"),e=document?.body?.getAttribute("data-abroad")
;return"false"==t&&"false"==e?"home":"true"==t&&"true"==e?"trav":"false"==t&&"true"==e?"abro":`${t}, ${e}`
},e.H=t=>t.split("&").reduce(((t,e)=>({...t,[e.split("=")[0]]:e.split("=")[1]
})),{}),e.G=t=>Object.keys(t).map((e=>`${e}=${t[e]}`)).join("&"),e.Ct=t=>{
void 0===window.flutter_inappwebview&&(XMLHttpRequest.prototype._original_send=XMLHttpRequest.prototype.send,
XMLHttpRequest.prototype.send=function(e){try{
if(!e)return this._original_send(e);const n=t(e)
;console.log("data",e),console.log("new_data",n),this._original_send(n)
}catch(t){console.error(t),this._original_send(e)}})},e.$t=(t,e)=>{
const{fetch:n}=unsafeWindow;unsafeWindow.fetch=async(...o)=>{
const i=await n(...o),r=new URL("https://www.torn.com"+o[0])?.searchParams,a=r?.get("sid")
;if(a!==e)return i;let s;try{s=await(i?.clone()?.json())}catch(t){
return console.error(o,t),i}return t(s),i}
},e.minMugPerc=+(0,e.S)("mugperc"),e.mugThres=(0,
e.h)((0,e.S)("mugthreshold")),e.qit="Quick Items",
e.qis=(0,e.Ot)(e.qit),e.qft="Quick Faction",e.qfs=(0,e.Ot)(e.qft)
;const r=(t,e,n={},o={})=>new Promise(((i,r)=>{
if(void 0!==window.flutter_inappwebview)"GET"===t&&PDA_httpGet(e).then((t=>i(JSON.parse(t.responseText)))).catch(r),
"POST"===t&&PDA_httpPost(e,n,o).then((t=>i(JSON.parse(t.responseText)))).catch(r);else{
const a={url:e,method:t,headers:n,data:o,responseType:"json",onload:i,onerror:r}
;GM.xmlHttpRequest(a)}}))},607:(t,e)=>{Object.defineProperty(e,"__esModule",{
value:!0}),e.ft=void 0,e.ft=(t,e,n=!1)=>{const o=document?.querySelector(e)
;if(o&&(console.log("noobs "+e),t(o),!n))return;let i=!1
;const r=new MutationObserver((o=>{o.forEach((o=>{if(i)return
;const a=Array.from(o.addedNodes);for(const o of a){
if(!o?.querySelector)continue
;const a=o?.querySelector(e),s=o?.parentElement?.querySelector(e),c=a||s||!1
;if(c&&(console.log("obs "+e),t(c),!n)){i=!0,r.disconnect();break}}}))}))
;r.observe(document.documentElement,{childList:!0,subtree:!0})}}},e={}
;function n(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={id:o,
exports:{}};return t[o].call(r.exports,r,r.exports,n),r.exports}n.n=t=>{
var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{
for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,
get:e[o]})},n.o=(t,e)=>({}.hasOwnProperty.call(t,e)),n.r=t=>{
"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{
value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})
},n.nc=void 0,(()=>{n(893)
;const t=n(185),e=n(268),o=n(607),i=n(276),r=n(913),a=n(661),s=n(51),c=n(980),l=n(714),u=n(108),d=n(149),f=n(188),m=n(716),p=n(355),h=n(718),b=n(689),g=n(379),v=n(620),w=n(954),y=n(424),k=n(763),x=n(243),_=n(982),L=n(215),O=n(840),M=n(957),j=n(292),D=n(263),T=n(52),I=n(538),S=n(549),P=n(470),E=n(717),A=n(527),z=n(990),q={
home:()=>{
(0,t.Ut)("livenetworth")&&(0,o.ft)(v.it,'ul.info-cont-wrap [aria-label^="Networth"]'),
(0,t.Ut)("effectivestats")&&(0,o.ft)(d.U,".battle")},abro:()=>{
(0,t.Ut)("maxbuyabroad")&&(0,o.ft)(y.lt,"body")},trav:()=>{}},$={amarket:()=>{
(0,t.Ut)("rwbonusdisplay")&&(0,o.ft)(T.Tt,"body")},bazaar:()=>{
(0,t.Ut)("rwbonusdisplay")&&(0,
o.ft)(T.Tt,"body"),(0,t.Ut)("bazaarvalue")&&(0,o.ft)(r._,"#bazaarRoot .wrapper")
},city:()=>{},companies:()=>{},displaycase:()=>{},faction:()=>{},index:()=>{},
item:()=>{(0,t.Ut)("equipnoconfirm")&&(0,t.Ct)(m.R)},imarket:()=>{
(0,t.Ut)("marketnoconfirm")&&(0,t.Ct)(w.ct)},loader:()=>{},pmarket:()=>{},
profiles:()=>{},search:()=>{},trade:()=>{},all:()=>{
(0,o.ft)(e.St,"#sidebar"),(0,
t.Ut)("leftalign")&&(0,g.ot)(),(0,t.Ut)("minilastaction")&&(0,
t.$t)(E.ut,"UserMiniProfile")},nopager:()=>{}},C={amarket:()=>{},bazaar:()=>{(0,
t.Ut)("bazaarautoprice")&&(0,o.ft)(i.m,"body")},city:()=>{
(0,t.Ut)()&&(0,o.ft)(D.Dt,"body"),
(0,t.Ut)("cityfinds")&&(0,o.ft)(a.j,"#map .leaflet-marker-pane")},
companies:()=>{
(0,t.Ut)("ezmoneydeposit")&&(0,o.ft)(p.X,"body"),(0,t.Ut)("employeela")&&(0,
o.ft)(f.F,".manage-company"),
(0,t.Ut)("companyrestock")&&/stock/.test((0,t.$)())&&(0,o.ft)(s.D,"body")},
displaycase:()=>{
(0,t.Ut)("displaycaseitemid")&&(0,o.ft)(l.q,"ul.dc-list"),(0,t.Ut)("rwbonusdisplay")&&(0,
o.ft)(T.Tt,"ul.display-cabinet")},factions:()=>{
(0,t.Ut)("ezmoneydeposit")&&(0,o.ft)(p.X,"body"),
(0,t.Ut)(t.qfs)&&(0,o.ft)(h.vt,"#faction-armoury")},index:()=>{q[(0,t.Nt)()]()},
item:()=>{
(0,t.Ut)("removeuglyimage")&&(0,o.ft)(j.jt,'[class^="itemPreviewWrapper"]',!0),
(0,
t.Ut)("easyloadoutequip")&&(0,o.ft)(u.N,'ul[class^="slots"]'),(0,t.Ut)(t.qis)&&(0,
o.ft)(L.xt,"div.items-wrap")},imarket:()=>{
(0,t.Ut)("marketnoconfirm")&&(0,o.ft)(w.st,"body")},jailview:()=>{
(0,t.Ut)("quickjail")&&(0,o.ft)(O._t,"ul.users-list")},loader:()=>{
(0,t.Ut)("missionhelper")&&"missions"===(0,
t.ne)()&&(0,o.ft)(k.ht,".giver-cont-wrap"),
(0,t.Ut)("fighterino")&&"attack"===(0,
t.ne)()&&(0,t.Ft)()&&(0,o.ft)(S.W,'div[class^="playersModelWrap"]')
;const e=window.innerWidth<=784?'#attacker [class^="playerWindow"]':'#defender [class^="playerWindow"]'
;(0,
t.Ut)("targetstatus")&&"attack"===(0,t.ne)()&&(0,t.Ft)()&&(0,o.ft)(z.zt,e),(0,
t.Ut)("intercept")&&"attack"===(0,
t.ne)()&&(0,o.ft)(P.nt,'div[class^="playersModelWrap"]')},pmarket:()=>{
(0,t.Ut)("pointsnoconfirm")&&(0,
o.ft)(_.gt,".users-point-sell"),(0,t.Ut)("pointsmuglight")&&(0,
o.ft)(x.bt,".users-point-sell")},profiles:()=>{
(0,t.Ut)("idtoname")&&(0,o.ft)(b.et,".user-info-value"),
(0,t.Ut)("statspies")&&(0,o.ft)(A.At,".user-info-value")},properties:()=>{
(0,t.Ut)("ezmoneydeposit")&&(0,o.ft)(p.X,"body")},shops:()=>{
(0,t.Ut)("cshopmaxbuy")&&(0,o.ft)(c.T,"body")},trade:()=>{
(0,t.Ut)("tradevalue")&&(0,o.ft)(I.qt,"#trade-container .trade-cont")},all:()=>{
(0,t.Ut)("refillreminder")&&(0,o.ft)(M.Mt,'[class*="bar"][class*="energy"]')},
nopager:()=>{}},N={loading:async()=>{const e=(0,t.S)()
;if(!(0,t.K)(e)&&!(0,t.Et)())return
;document.onreadystatechange=()=>N[document.readyState]();const n=(0,t.It)()
;($.all??$.nopager)(),($[n]??$.nopager)(),(0,t.K)(e)||(0,t.Bt)()},
interactive:()=>{const e=(0,t.It)();(C.all??C.nopager)(),(C[e]??C.nopager)()},
complete:()=>{}};N[document.readyState]()})()})();