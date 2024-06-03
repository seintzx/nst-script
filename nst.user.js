// ==UserScript==
// @name         nst
// @namespace    seintz.torn.nst
// @version      1.1.6
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

(()=>{var t={6906:(t,e,n)=>{n.d(e,{A:()=>s})
;var i=n(1601),o=n.n(i),a=n(6314),r=n.n(a)()(o())
;r.push([t.id,'*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.nst-left-align .d .container{justify-content:flex-start!important;margin-left:1.25rem!important}.nst-left-align .d .anonymous .content-wrapper,.nst-left-align .d.without-sidebar .container,.nst-left-align .d.without-sidebar .content-wrapper{margin-left:1.25rem}.nst-trade-value{font-size:.875rem;height:1.5rem;line-height:1.5rem;text-align:center;--tw-text-opacity:1;color:rgb(108 173 43/var(--tw-text-opacity))}.nst-city-item{border-radius:9999px!important;border-style:solid!important;border-width:1px!important;box-sizing:border-box!important;display:block!important;height:2.5rem!important;left:-1.25rem!important;top:-1.25rem!important;width:2.5rem!important;z-index:999!important;--tw-border-opacity:1!important;background-color:#12470780!important;border-color:rgb(0 0 0/var(--tw-border-opacity))!important;padding:.75rem!important;--tw-shadow:0 25px 50px -12px rgba(0,0,0,.25)!important;--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color)!important;box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)!important}.nst-city-item:hover{height:10rem!important;left:-2.5rem!important;top:-2.5rem!important;width:10rem!important;z-index:999!important;--tw-bg-opacity:1!important;background-color:rgb(0 0 0/var(--tw-bg-opacity))!important;padding:2.25rem!important}.nst-status-wrap{align-content:flex-start;align-items:flex-start;flex-direction:column;justify-content:center;position:absolute;top:0;z-index:10}.nst-status-middle,.nst-status-wrap{display:flex;flex-wrap:wrap;width:100%}.nst-status-middle{align-content:center;align-items:center;flex-direction:row;justify-content:space-between}.nst-status-item{border-style:solid;border-width:1px;margin:.25rem;--tw-border-opacity:1;border-color:rgb(0 0 0/var(--tw-border-opacity))}.nst-lastaction,.nst-status-item{padding:.25rem}.nst-spgym-msg,.nst-spgym-sel,.nst-steadfast{margin:.25rem;padding:.25rem}.nst-steadfast{text-align:center}.nst-icon{background-image:url(https://factiontags.torn.com/11581-56425.png)!important;background-position:50%!important;cursor:pointer!important}.nst-logo{font-size:1.5rem;font-weight:700;line-height:2rem;--tw-text-opacity:1;color:rgb(66 140 165/var(--tw-text-opacity))}.nst-menu{flex:1 1 0%;margin-bottom:10rem;margin-left:2rem;margin-top:2rem}.nst-menu-wrap{border-radius:.5rem}.nst-menu-title{align-content:center;align-items:center;border-top-left-radius:.5rem;border-top-right-radius:.5rem;flex-wrap:wrap;height:2rem;left:0;position:relative;top:0;--tw-border-opacity:1;border-bottom:1px rgb(0 0 0/var(--tw-border-opacity));border-style:solid;color:var(--default-color);font-size:.875rem;font-weight:700;line-height:2rem;padding:.25rem .75rem}.nst-menu-body,.nst-menu-title{background-color:var(--default-bg-panel-color);display:flex}.nst-menu-body{border-bottom-left-radius:.5rem;border-bottom-right-radius:.5rem;line-height:.75rem}.nst-ul-main{display:table-cell;float:none;list-style-type:none;--tw-border-opacity:1;border-right:1px rgb(0 0 0/var(--tw-border-opacity));border-style:solid;vertical-align:top}.nst-menu-page{display:block;position:relative;width:9rem;--tw-border-opacity:1;background-color:var(--default-bg-panel-color);border-bottom:1px rgb(0 0 0/var(--tw-border-opacity));border-style:solid;color:var(--default-color);font-weight:700;padding:.5rem}.nst-menu-page:hover{background-color:var(--default-bg-panel-active-color)}.nst-menu-sel{background-color:var(--default-bg-panel-active-color)!important}.nst-menu-item{display:block;float:none;vertical-align:top;width:100%}.nst-message{--tw-text-opacity:1;color:rgb(185 70 45/var(--tw-text-opacity))}.nst-api-wrap,.nst-message{margin:.5rem;padding:.25rem}.nst-api-wrap{align-content:center;align-items:center;display:flex;flex-direction:column;flex-wrap:wrap;justify-content:center}.nst-block-title{margin:.5rem!important}.nst-block{align-content:center;align-items:center;--tw-border-opacity:1;border-bottom:1px rgb(249 250 251/var(--tw-border-opacity));border-style:solid}.nst-block,.nst-script-block{display:flex;flex-direction:column;flex-wrap:wrap;justify-content:center;margin:.5rem;padding:.5rem}.nst-script-block{align-content:flex-start;align-items:flex-start}.nst-outcome{align-content:center;align-items:center;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center}.list-group-item{border-style:solid;border-width:1px;margin:.5rem;--tw-border-opacity:1;border-color:rgb(107 114 128/var(--tw-border-opacity));font-size:.875rem;line-height:1.25rem;padding:.5rem 1rem;text-align:center}.nst-box{box-sizing:border-box;display:flex;flex-direction:column;margin-bottom:.75rem;margin-top:.75rem}.nst-box-header{border-bottom-width:0;border-top-left-radius:.5rem;border-top-right-radius:.5rem;display:flex;--tw-bg-opacity:1;background-color:rgb(0 0 0/var(--tw-bg-opacity));font-size:1.125rem;line-height:1.75rem;padding:.25rem .75rem;--tw-text-opacity:1;--tw-shadow:inset 0 2px 4px 0 rgba(0,0,0,.05);--tw-shadow-colored:inset 0 2px 4px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.nst-box-header,.nst-box-title{color:rgb(66 140 165/var(--tw-text-opacity))}.nst-box-title{flex-grow:1;font-size:.875rem;font-weight:700;line-height:1rem;--tw-text-opacity:1}.nst-box-content{border-bottom-left-radius:.5rem;border-bottom-right-radius:.5rem;border-style:solid;border-width:0 1px 1px;--tw-border-opacity:1;background-color:var(--default-bg-panel-color);border-color:rgb(0 0 0/var(--tw-border-opacity));color:var(--default-color)}.nst-box-content>p{margin:.25rem;text-align:center}.nst-box-row{align-items:flex-start;flex-direction:row;flex-wrap:wrap;justify-content:space-evenly}.nst-box-column,.nst-box-row{align-content:center;display:flex;margin:.25rem;text-align:center}.nst-box-column{align-items:center;flex:1 1 0%;flex-direction:column;flex-wrap:wrap;justify-content:center}.nst-box-item{align-content:flex-start;align-items:center;display:flex;font-size:.875rem;line-height:1.25rem;margin:.125rem .25rem}.nst-box-item>input{margin:0 .25rem}.nst-box-button{align-items:center;color:var(--default-color);display:flex;flex-direction:column;flex-wrap:wrap;padding:.25rem;position:relative;width:100%}.nst-box-close{cursor:pointer;font-size:.75rem;line-height:1rem;position:absolute;right:.25rem;top:0}.nst-box-img{vertical-align:middle}.nst-box-btn-div{align-self:stretch;border-radius:.5rem;border-style:solid;border-width:1px;display:flex;flex:0 0 14%;justify-content:center;margin:.25rem;--tw-border-opacity:1;border-color:rgb(34 34 34/var(--tw-border-opacity));padding:0}.nst-box-btn-div:hover{background-color:var(--default-bg-panel-active-color)}#nst-item-resp{justify-content:center}.nst-input{background-color:var(--default-bg-panel-active-color);border-color:rgb(0 0 0/var(--tw-border-opacity));border-radius:.25rem;border-style:solid;border-width:1px;color:var(--default-color);font-size:.875rem;font-weight:500;height:1.5rem;line-height:1.25rem;margin:0;text-align:center}.nst-input,.nst-table{box-sizing:border-box;--tw-border-opacity:1}.nst-table{border-color:rgb(31 41 55/var(--tw-border-opacity));border-style:solid;border-width:2px;width:100%}.nst-table-row{text-align:left}.nst-table-cell-head{font-size:.875rem;font-weight:700;line-height:1.25rem}.nst-table-cell{border-style:solid!important;border-width:1px!important;box-sizing:border-box!important;--tw-border-opacity:1!important;border-color:rgb(31 41 55/var(--tw-border-opacity))!important;font-size:.75rem!important;line-height:1rem!important;padding:.25rem!important}.m-2{margin:.5rem}.table{display:table}.hidden{display:none}.bg-nstmain{--tw-bg-opacity:1;background-color:rgb(66 140 165/var(--tw-bg-opacity))}.bg-nstred{--tw-bg-opacity:1;background-color:rgb(185 70 45/var(--tw-bg-opacity))}.bg-nstyellow{--tw-bg-opacity:1;background-color:rgb(252 196 25/var(--tw-bg-opacity))}.text-center{text-align:center}.text-base{font-size:1rem;line-height:1.5rem}.font-bold{font-weight:700}.text-black{--tw-text-opacity:1;color:rgb(0 0 0/var(--tw-text-opacity))}.text-nstgreen{--tw-text-opacity:1;color:rgb(108 173 43/var(--tw-text-opacity))}.text-nstmain{--tw-text-opacity:1;color:rgb(66 140 165/var(--tw-text-opacity))}.text-nstred{--tw-text-opacity:1;color:rgb(185 70 45/var(--tw-text-opacity))}.text-nsttorntext{color:var(--default-color)}.text-nstyellow{--tw-text-opacity:1;color:rgb(252 196 25/var(--tw-text-opacity))}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.medals-wrapper,.travel-agency-travelling .popup-info,.travel-agency-travelling .stage,.travel-agency-travelling .stage+hr,[aria-label="Reset loadout"]{display:none!important}',""])
;const s=r},6314:t=>{t.exports=function(t){var e=[]
;return e.toString=function(){return this.map((function(e){
var n="",i=void 0!==e[5]
;return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),
i&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),
n+=t(e),i&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")
},e.i=function(t,n,i,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var r={}
;if(i)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(r[c]=!0)}
for(var l=0;l<t.length;l++){var u=[].concat(t[l])
;i&&r[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),
u[5]=a),
n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),
o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),
u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},1601:t=>{t.exports=function(t){
return t[1]}},246:(t,e,n)=>{function i(t,e){var n=Object.keys(t)
;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t)
;e&&(i=i.filter((function(e){
return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}
return n}function o(t){for(var e=1;e<arguments.length;e++){
var n=null!=arguments[e]?arguments[e]:{}
;e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])
})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){
Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}
function a(t){
return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){
return typeof t}:function(t){
return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t
},a(t)}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,
enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(){
return s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){
var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}
return t},s.apply(this,arguments)}function c(t,e){
(null==e||e>t.length)&&(e=t.length);for(var n=0,i=Array(e);n<e;n++)i[n]=t[n]
;return i}function l(t){
if("undefined"!=typeof window&&window.navigator)return!!navigator.userAgent.match(t)
}n.r(e),n.d(e,{MultiDrag:()=>ye,Sortable:()=>Bt,Swap:()=>le,default:()=>_e})
;var u=l(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),d=l(/Edge/i),m=l(/firefox/i),f=l(/safari/i)&&!l(/chrome/i)&&!l(/android/i),p=l(/iP(ad|od|hone)/i),h=l(/chrome/i)&&l(/android/i),b={
capture:!1,passive:!1};function g(t,e,n){t.addEventListener(e,n,!u&&b)}
function v(t,e,n){t.removeEventListener(e,n,!u&&b)}function w(t,e){if(e){
if(">"===e[0]&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e)
;if(t.msMatchesSelector)return t.msMatchesSelector(e)
;if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch(t){return!1}
return!1}}function y(t){
return t.host&&t!==document&&t.host.nodeType?t.host:t.parentNode}
function k(t,e,n,i){if(t){n=n||document;do{
if(null!=e&&(">"===e[0]?t.parentNode===n&&w(t,e):w(t,e))||i&&t===n)return t
;if(t===n)break}while(t=y(t))}return null}var x,_=/\s+/g;function L(t,e,n){
if(t&&e)if(t.classList)t.classList[n?"add":"remove"](e);else{
var i=(" "+t.className+" ").replace(_," ").replace(" "+e+" "," ")
;t.className=(i+(n?" "+e:"")).replace(_," ")}}function O(t,e,n){var i=t&&t.style
;if(i){
if(void 0===n)return document.defaultView&&document.defaultView.getComputedStyle?n=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),
void 0===e?n:n[e]
;e in i||-1!==e.indexOf("webkit")||(e="-webkit-"+e),i[e]=n+("string"==typeof n?"":"px")
}}function M(t,e){var n="";if("string"==typeof t)n=t;else do{
var i=O(t,"transform");i&&"none"!==i&&(n=i+" "+n)}while(!e&&(t=t.parentNode))
;var o=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix
;return o&&new o(n)}function j(t,e,n){if(t){
var i=t.getElementsByTagName(e),o=0,a=i.length;if(n)for(;o<a;o++)n(i[o],o)
;return i}return[]}function D(){
return document.scrollingElement||document.documentElement}
function T(t,e,n,i,o){if(t.getBoundingClientRect||t===window){var a,r,s,c,l,d,m
;if(t!==window&&t.parentNode&&t!==D()?(r=(a=t.getBoundingClientRect()).top,
s=a.left,
c=a.bottom,l=a.right,d=a.height,m=a.width):(r=0,s=0,c=window.innerHeight,
l=window.innerWidth,
d=window.innerHeight,m=window.innerWidth),(e||n)&&t!==window&&(o=o||t.parentNode,
!u))do{
if(o&&o.getBoundingClientRect&&("none"!==O(o,"transform")||n&&"static"!==O(o,"position"))){
var f=o.getBoundingClientRect()
;r-=f.top+parseInt(O(o,"border-top-width")),s-=f.left+parseInt(O(o,"border-left-width")),
c=r+a.height,l=s+a.width;break}}while(o=o.parentNode);if(i&&t!==window){
var p=M(o||t),h=p&&p.a,b=p&&p.d;p&&(c=(r/=b)+(d/=b),l=(s/=h)+(m/=h))}return{
top:r,left:s,bottom:c,right:l,width:m,height:d}}}function I(t,e,n){
for(var i=q(t,!0),o=T(t)[e];i;){var a=T(i)[n]
;if(!("top"===n||"left"===n?o>=a:o<=a))return i;if(i===D())break;i=q(i,!1)}
return!1}function S(t,e,n,i){for(var o=0,a=0,r=t.children;a<r.length;){
if("none"!==r[a].style.display&&r[a]!==Bt.ghost&&(i||r[a]!==Bt.dragged)&&k(r[a],n.draggable,t,!1)){
if(o===e)return r[a];o++}a++}return null}function P(t,e){
for(var n=t.lastElementChild;n&&(n===Bt.ghost||"none"===O(n,"display")||e&&!w(n,e));)n=n.previousElementSibling
;return n||null}function E(t,e){var n=0;if(!t||!t.parentNode)return-1
;for(;t=t.previousElementSibling;)"TEMPLATE"===t.nodeName.toUpperCase()||t===Bt.clone||e&&!w(t,e)||n++
;return n}function A(t){var e=0,n=0,i=D();if(t)do{var o=M(t),a=o.a,r=o.d
;e+=t.scrollLeft*a,n+=t.scrollTop*r}while(t!==i&&(t=t.parentNode));return[e,n]}
function q(t,e){if(!t||!t.getBoundingClientRect)return D();var n=t,i=!1;do{
if(n.clientWidth<n.scrollWidth||n.clientHeight<n.scrollHeight){var o=O(n)
;if(n.clientWidth<n.scrollWidth&&("auto"==o.overflowX||"scroll"==o.overflowX)||n.clientHeight<n.scrollHeight&&("auto"==o.overflowY||"scroll"==o.overflowY)){
if(!n.getBoundingClientRect||n===document.body)return D();if(i||e)return n;i=!0}
}}while(n=n.parentNode);return D()}function z(t,e){
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
}function F(t,e,n){var i={};return Array.from(t.children).forEach((function(o){
var a,r,s,c;if(k(o,e.draggable,t,!1)&&!o.animated&&o!==n){var l=T(o)
;i.left=Math.min(null!==(a=i.left)&&void 0!==a?a:1/0,l.left),
i.top=Math.min(null!==(r=i.top)&&void 0!==r?r:1/0,l.top),
i.right=Math.max(null!==(s=i.right)&&void 0!==s?s:-1/0,l.right),
i.bottom=Math.max(null!==(c=i.bottom)&&void 0!==c?c:-1/0,l.bottom)}
})),i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}
var R="Sortable"+(new Date).getTime(),H=[],G={initializeByDefault:!0},X={
mount:function(t){for(var e in G)G.hasOwnProperty(e)&&!(e in t)&&(t[e]=G[e])
;H.forEach((function(e){
if(e.pluginName===t.pluginName)throw"Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")
})),H.push(t)},pluginEvent:function(t,e,n){var i=this
;this.eventCanceled=!1,n.cancel=function(){i.eventCanceled=!0};var a=t+"Global"
;H.forEach((function(i){
e[i.pluginName]&&(e[i.pluginName][a]&&e[i.pluginName][a](o({sortable:e
},n)),e.options[i.pluginName]&&e[i.pluginName][t]&&e[i.pluginName][t](o({
sortable:e},n)))}))},initializePlugins:function(t,e,n,i){
for(var o in H.forEach((function(i){var o=i.pluginName
;if(t.options[o]||i.initializeByDefault){var a=new i(t,e,t.options)
;a.sortable=t,a.options=t.options,t[o]=a,s(n,a.defaults)}
})),t.options)if(t.options.hasOwnProperty(o)){
var a=this.modifyOption(t,o,t.options[o]);void 0!==a&&(t.options[o]=a)}},
getEventProperties:function(t,e){var n={};return H.forEach((function(i){
"function"==typeof i.eventProperties&&s(n,i.eventProperties.call(e[i.pluginName],t))
})),n},modifyOption:function(t,e,n){var i;return H.forEach((function(o){
t[o.pluginName]&&o.optionListeners&&"function"==typeof o.optionListeners[e]&&(i=o.optionListeners[e].call(t[o.pluginName],n))
})),i}};function W(t){
var e=t.sortable,n=t.rootEl,i=t.name,a=t.targetEl,r=t.cloneEl,s=t.toEl,c=t.fromEl,l=t.oldIndex,m=t.newIndex,f=t.oldDraggableIndex,p=t.newDraggableIndex,h=t.originalEvent,b=t.putSortable,g=t.extraEventProperties
;if(e=e||n&&n[R]){var v,w=e.options,y="on"+i.charAt(0).toUpperCase()+i.substr(1)
;!window.CustomEvent||u||d?(v=document.createEvent("Event")).initEvent(i,!0,!0):v=new CustomEvent(i,{
bubbles:!0,cancelable:!0
}),v.to=s||n,v.from=c||n,v.item=a||n,v.clone=r,v.oldIndex=l,
v.newIndex=m,v.oldDraggableIndex=f,
v.newDraggableIndex=p,v.originalEvent=h,v.pullMode=b?b.lastPutMode:void 0
;var k=o(o({},g),X.getEventProperties(i,e));for(var x in k)v[x]=k[x]
;n&&n.dispatchEvent(v),w[y]&&w[y].call(e,v)}}var K=["evt"],J=function(t,e){
var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=n.evt,a=function(t,e){
if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{}
;var n,i,o={},a=Object.keys(t)
;for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e)
;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t)
;for(i=0;i<a.length;i++)n=a[i],
e.indexOf(n)>=0||{}.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}(n,K)
;X.pluginEvent.bind(Bt)(t,e,o({dragEl:Y,parentEl:V,ghostEl:Z,rootEl:tt,
nextEl:et,lastDownEl:nt,cloneEl:it,cloneHidden:ot,dragStarted:gt,putSortable:ut,
activeSortable:Bt.active,originalEvent:i,oldIndex:at,oldDraggableIndex:st,
newIndex:rt,newDraggableIndex:ct,hideGhostForTarget:$t,unhideGhostForTarget:Ct,
cloneNowHidden:function(){ot=!0},cloneNowShown:function(){ot=!1},
dispatchSortableEvent:function(t){Q({sortable:e,name:t,originalEvent:i})}},a))}
;function Q(t){W(o({putSortable:ut,cloneEl:it,targetEl:Y,rootEl:tt,oldIndex:at,
oldDraggableIndex:st,newIndex:rt,newDraggableIndex:ct},t))}
var Y,V,Z,tt,et,nt,it,ot,at,rt,st,ct,lt,ut,dt,mt,ft,pt,ht,bt,gt,vt,wt,yt,kt,xt=!1,_t=!1,Lt=[],Ot=!1,Mt=!1,jt=[],Dt=!1,Tt=[],It="undefined"!=typeof document,St=p,Pt=d||u?"cssFloat":"float",Et=It&&!h&&!p&&"draggable"in document.createElement("div"),At=function(){
if(It){if(u)return!1;var t=document.createElement("x")
;return t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}
}(),qt=function(t,e){
var n=O(t),i=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),o=S(t,0,e),a=S(t,1,e),r=o&&O(o),s=a&&O(a),c=r&&parseInt(r.marginLeft)+parseInt(r.marginRight)+T(o).width,l=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+T(a).width
;if("flex"===n.display)return"column"===n.flexDirection||"column-reverse"===n.flexDirection?"vertical":"horizontal"
;if("grid"===n.display)return n.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal"
;if(o&&r.float&&"none"!==r.float){var u="left"===r.float?"left":"right"
;return!a||"both"!==s.clear&&s.clear!==u?"horizontal":"vertical"}
return o&&("block"===r.display||"flex"===r.display||"table"===r.display||"grid"===r.display||c>=i&&"none"===n[Pt]||a&&"none"===n[Pt]&&c+l>i)?"vertical":"horizontal"
},zt=function(t){function e(t,n){return function(i,o,a,r){
var s=i.options.group.name&&o.options.group.name&&i.options.group.name===o.options.group.name
;if(null==t&&(n||s))return!0;if(null==t||!1===t)return!1
;if(n&&"clone"===t)return t
;if("function"==typeof t)return e(t(i,o,a,r),n)(i,o,a,r)
;var c=(n?i:o).options.group.name
;return!0===t||"string"==typeof t&&t===c||t.join&&t.indexOf(c)>-1}}
var n={},i=t.group;i&&"object"==a(i)||(i={name:i
}),n.name=i.name,n.checkPull=e(i.pull,!0),
n.checkPut=e(i.put),n.revertClone=i.revertClone,t.group=n},$t=function(){
!At&&Z&&O(Z,"display","none")},Ct=function(){!At&&Z&&O(Z,"display","")}
;It&&!h&&document.addEventListener("click",(function(t){
if(_t)return t.preventDefault(),
t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),
_t=!1,!1}),!0);var Nt=function(t){if(Y){t=t.touches?t.touches[0]:t
;var e=(o=t.clientX,a=t.clientY,Lt.some((function(t){
var e=t[R].options.emptyInsertThreshold;if(e&&!P(t)){
var n=T(t),i=o>=n.left-e&&o<=n.right+e,s=a>=n.top-e&&a<=n.bottom+e
;return i&&s?r=t:void 0}})),r);if(e){var n={}
;for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i])
;n.target=n.rootEl=e,n.preventDefault=void 0,
n.stopPropagation=void 0,e[R]._onDragOver(n)}}var o,a,r},Ut=function(t){
Y&&Y.parentNode[R]._isOutsideThisEl(t.target)};function Bt(t,e){
if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t))
;this.el=t,this.options=e=s({},e),t[R]=this;var n,i,a={group:null,sort:!0,
disabled:!1,store:null,handle:null,
draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,
invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){
return qt(t,this.options)},ghostClass:"sortable-ghost",
chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",
filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(t,e){
t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,
dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,
touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,
forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,
fallbackTolerance:0,fallbackOffset:{x:0,y:0},
supportPointer:!1!==Bt.supportPointer&&"PointerEvent"in window&&!f,
emptyInsertThreshold:5}
;for(var r in X.initializePlugins(this,t,a),a)!(r in e)&&(e[r]=a[r])
;for(var c in zt(e),
this)"_"===c.charAt(0)&&"function"==typeof this[c]&&(this[c]=this[c].bind(this))
;this.nativeDraggable=!e.forceFallback&&Et,
this.nativeDraggable&&(this.options.touchStartThreshold=1),
e.supportPointer?g(t,"pointerdown",this._onTapStart):(g(t,"mousedown",this._onTapStart),
g(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(g(t,"dragover",this),
g(t,"dragenter",this)),
Lt.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),
s(this,(i=[],{captureAnimationState:function(){
i=[],this.options.animation&&[].slice.call(this.el.children).forEach((function(t){
if("none"!==O(t,"display")&&t!==Bt.ghost){i.push({target:t,rect:T(t)})
;var e=o({},i[i.length-1].rect);if(t.thisAnimationDuration){var n=M(t,!0)
;n&&(e.top-=n.f,e.left-=n.e)}t.fromRect=e}}))},addAnimationState:function(t){
i.push(t)},removeAnimationState:function(t){i.splice(function(t,e){
for(var n in t)if(t.hasOwnProperty(n))for(var i in e)if(e.hasOwnProperty(i)&&e[i]===t[n][i])return+n
;return-1}(i,{target:t}),1)},animateAll:function(t){var e=this
;if(!this.options.animation)return clearTimeout(n),
void("function"==typeof t&&t());var o=!1,a=0;i.forEach((function(t){
var n=0,i=t.target,r=i.fromRect,s=T(i),c=i.prevFromRect,l=i.prevToRect,u=t.rect,d=M(i,!0)
;d&&(s.top-=d.f,
s.left-=d.e),i.toRect=s,i.thisAnimationDuration&&z(c,s)&&!z(r,s)&&(u.top-s.top)/(u.left-s.left)==(r.top-s.top)/(r.left-s.left)&&(n=function(t,e,n,i){
return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-n.top,2)+Math.pow(e.left-n.left,2))*i.animation
}(u,c,l,e.options)),
z(s,r)||(i.prevFromRect=r,i.prevToRect=s,n||(n=e.options.animation),
e.animate(i,u,s,n)),
n&&(o=!0,a=Math.max(a,n),clearTimeout(i.animationResetTimer),
i.animationResetTimer=setTimeout((function(){
i.animationTime=0,i.prevFromRect=null,
i.fromRect=null,i.prevToRect=null,i.thisAnimationDuration=null
}),n),i.thisAnimationDuration=n)})),clearTimeout(n),o?n=setTimeout((function(){
"function"==typeof t&&t()}),a):"function"==typeof t&&t(),i=[]},
animate:function(t,e,n,i){if(i){O(t,"transition",""),O(t,"transform","")
;var o=M(this.el),a=o&&o.a,r=o&&o.d,s=(e.left-n.left)/(a||1),c=(e.top-n.top)/(r||1)
;t.animatingX=!!s,
t.animatingY=!!c,O(t,"transform","translate3d("+s+"px,"+c+"px,0)"),
this.forRepaintDummy=function(t){return t.offsetWidth
}(t),O(t,"transition","transform "+i+"ms"+(this.options.easing?" "+this.options.easing:"")),
O(t,"transform","translate3d(0,0,0)"),
"number"==typeof t.animated&&clearTimeout(t.animated),
t.animated=setTimeout((function(){
O(t,"transition",""),O(t,"transform",""),t.animated=!1,
t.animatingX=!1,t.animatingY=!1}),i)}}}))}function Ft(t,e,n,i,o,a,r,s){
var c,l,m=t[R],f=m.options.onMove
;return!window.CustomEvent||u||d?(c=document.createEvent("Event")).initEvent("move",!0,!0):c=new CustomEvent("move",{
bubbles:!0,cancelable:!0
}),c.to=e,c.from=t,c.dragged=n,c.draggedRect=i,c.related=o||e,
c.relatedRect=a||T(e),
c.willInsertAfter=s,c.originalEvent=r,t.dispatchEvent(c),f&&(l=f.call(m,c,r)),l}
function Rt(t){t.draggable=!1}function Ht(){Dt=!1}function Gt(t){
for(var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,i=0;n--;)i+=e.charCodeAt(n)
;return i.toString(36)}function Xt(t){return setTimeout(t,0)}function Wt(t){
return clearTimeout(t)}Bt.prototype={constructor:Bt,
_isOutsideThisEl:function(t){this.el.contains(t)||t===this.el||(vt=null)},
_getDirection:function(t,e){
return"function"==typeof this.options.direction?this.options.direction.call(this,t,e,Y):this.options.direction
},_onTapStart:function(t){if(t.cancelable){
var e=this,n=this.el,i=this.options,o=i.preventOnFilter,a=t.type,r=t.touches&&t.touches[0]||t.pointerType&&"touch"===t.pointerType&&t,s=(r||t).target,c=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||s,l=i.filter
;if(function(t){Tt.length=0
;for(var e=t.getElementsByTagName("input"),n=e.length;n--;){var i=e[n]
;i.checked&&Tt.push(i)}
}(n),!Y&&!(/mousedown|pointerdown/.test(a)&&0!==t.button||i.disabled)&&!c.isContentEditable&&(this.nativeDraggable||!f||!s||"SELECT"!==s.tagName.toUpperCase())&&!((s=k(s,i.draggable,n,!1))&&s.animated||nt===s)){
if(at=E(s),st=E(s,i.draggable),"function"==typeof l){
if(l.call(this,t,s,this))return Q({sortable:e,rootEl:c,name:"filter",targetEl:s,
toEl:n,fromEl:n}),J("filter",e,{evt:t
}),void(o&&t.cancelable&&t.preventDefault())
}else if(l&&(l=l.split(",").some((function(i){if(i=k(c,i.trim(),n,!1))return Q({
sortable:e,rootEl:i,name:"filter",targetEl:s,fromEl:n,toEl:n}),J("filter",e,{
evt:t}),!0}))))return void(o&&t.cancelable&&t.preventDefault())
;i.handle&&!k(c,i.handle,n,!1)||this._prepareDragStart(t,r,s)}}},
_prepareDragStart:function(t,e,n){
var i,o=this,a=o.el,r=o.options,s=a.ownerDocument;if(n&&!Y&&n.parentNode===a){
var c=T(n)
;if(tt=a,V=(Y=n).parentNode,et=Y.nextSibling,nt=n,lt=r.group,Bt.dragged=Y,dt={
target:Y,clientX:(e||t).clientX,clientY:(e||t).clientY
},ht=dt.clientX-c.left,bt=dt.clientY-c.top,
this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,
Y.style["will-change"]="all",i=function(){J("delayEnded",o,{evt:t
}),Bt.eventCanceled?o._onDrop():(o._disableDelayedDragEvents(),
!m&&o.nativeDraggable&&(Y.draggable=!0),o._triggerDragStart(t,e),Q({sortable:o,
name:"choose",originalEvent:t}),L(Y,r.chosenClass,!0))
},r.ignore.split(",").forEach((function(t){j(Y,t.trim(),Rt)
})),g(s,"dragover",Nt),
g(s,"mousemove",Nt),g(s,"touchmove",Nt),g(s,"mouseup",o._onDrop),
g(s,"touchend",o._onDrop),
g(s,"touchcancel",o._onDrop),m&&this.nativeDraggable&&(this.options.touchStartThreshold=4,
Y.draggable=!0),J("delayStart",this,{evt:t
}),!r.delay||r.delayOnTouchOnly&&!e||this.nativeDraggable&&(d||u))i();else{
if(Bt.eventCanceled)return void this._onDrop()
;g(s,"mouseup",o._disableDelayedDrag),
g(s,"touchend",o._disableDelayedDrag),g(s,"touchcancel",o._disableDelayedDrag),
g(s,"mousemove",o._delayedDragTouchMoveHandler),
g(s,"touchmove",o._delayedDragTouchMoveHandler),
r.supportPointer&&g(s,"pointermove",o._delayedDragTouchMoveHandler),
o._dragStartTimer=setTimeout(i,r.delay)}}},
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
_emulateDragOver:function(){if(mt){
this._lastX=mt.clientX,this._lastY=mt.clientY,$t()
;for(var t=document.elementFromPoint(mt.clientX,mt.clientY),e=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(mt.clientX,mt.clientY))!==e;)e=t
;if(Y.parentNode[R]._isOutsideThisEl(t),e)do{if(e[R]&&e[R]._onDragOver({
clientX:mt.clientX,clientY:mt.clientY,target:t,rootEl:e
})&&!this.options.dragoverBubble)break;t=e}while(e=e.parentNode);Ct()}},
_onTouchMove:function(t){if(dt){
var e=this.options,n=e.fallbackTolerance,i=e.fallbackOffset,o=t.touches?t.touches[0]:t,a=Z&&M(Z,!0),r=Z&&a&&a.a,s=Z&&a&&a.d,c=St&&kt&&A(kt),l=(o.clientX-dt.clientX+i.x)/(r||1)+(c?c[0]-jt[0]:0)/(r||1),u=(o.clientY-dt.clientY+i.y)/(s||1)+(c?c[1]-jt[1]:0)/(s||1)
;if(!Bt.active&&!xt){
if(n&&Math.max(Math.abs(o.clientX-this._lastX),Math.abs(o.clientY-this._lastY))<n)return
;this._onDragStart(t,!0)}if(Z){a?(a.e+=l-(ft||0),a.f+=u-(pt||0)):a={a:1,b:0,c:0,
d:1,e:l,f:u}
;var d="matrix(".concat(a.a,",").concat(a.b,",").concat(a.c,",").concat(a.d,",").concat(a.e,",").concat(a.f,")")
;O(Z,"webkitTransform",d),
O(Z,"mozTransform",d),O(Z,"msTransform",d),O(Z,"transform",d),ft=l,pt=u,mt=o}
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
}},_onDragStart:function(t,e){var n=this,i=t.dataTransfer,o=n.options
;J("dragStart",this,{evt:t
}),Bt.eventCanceled?this._onDrop():(J("setupClone",this),
Bt.eventCanceled||((it=N(Y)).removeAttribute("id"),
it.draggable=!1,it.style["will-change"]="",
this._hideClone(),L(it,this.options.chosenClass,!1),
Bt.clone=it),n.cloneId=Xt((function(){
J("clone",n),Bt.eventCanceled||(n.options.removeCloneOnHide||tt.insertBefore(it,Y),
n._hideClone(),Q({sortable:n,name:"clone"}))
})),!e&&L(Y,o.dragClass,!0),e?(_t=!0,
n._loopId=setInterval(n._emulateDragOver,50)):(v(document,"mouseup",n._onDrop),
v(document,"touchend",n._onDrop),
v(document,"touchcancel",n._onDrop),i&&(i.effectAllowed="move",
o.setData&&o.setData.call(n,i,Y)),
g(document,"drop",n),O(Y,"transform","translateZ(0)")),
xt=!0,n._dragStartId=Xt(n._dragStarted.bind(n,e,t)),g(document,"selectstart",n),
gt=!0,f&&O(document.body,"user-select","none"))},_onDragOver:function(t){
var e,n,i,a,r=this.el,s=t.target,c=this.options,l=c.group,u=Bt.active,d=lt===l,m=c.sort,f=ut||u,p=this,h=!1
;if(!Dt){
if(void 0!==t.preventDefault&&t.cancelable&&t.preventDefault(),s=k(s,c.draggable,r,!0),
N("dragOver"),Bt.eventCanceled)return h
;if(Y.contains(t.target)||s.animated&&s.animatingX&&s.animatingY||p._ignoreWhileAnimating===s)return B(!1)
;if(_t=!1,
u&&!c.disabled&&(d?m||(i=V!==tt):ut===this||(this.lastPutMode=lt.checkPull(this,u,Y,t))&&l.checkPut(this,u,Y,t))){
if(a="vertical"===this._getDirection(t,s),
e=T(Y),N("dragOverValid"),Bt.eventCanceled)return h
;if(i)return V=tt,U(),this._hideClone(),
N("revert"),Bt.eventCanceled||(et?tt.insertBefore(Y,et):tt.appendChild(Y)),B(!0)
;var b=P(r,c.draggable);if(!b||function(t,e,n){
var i=T(P(n.el,n.options.draggable)),o=F(n.el,n.options,Z)
;return e?t.clientX>o.right+10||t.clientY>i.bottom&&t.clientX>i.left:t.clientY>o.bottom+10||t.clientX>i.right&&t.clientY>i.top
}(t,a,this)&&!b.animated){if(b===Y)return B(!1)
;if(b&&r===t.target&&(s=b),s&&(n=T(s)),
!1!==Ft(tt,r,Y,e,s,n,t,!!s))return U(),b&&b.nextSibling?r.insertBefore(Y,b.nextSibling):r.appendChild(Y),
V=r,H(),B(!0)}else if(b&&function(t,e,n){
var i=T(S(n.el,0,n.options,!0)),o=F(n.el,n.options,Z)
;return e?t.clientX<o.left-10||t.clientY<i.top&&t.clientX<i.right:t.clientY<o.top-10||t.clientY<i.bottom&&t.clientX<i.left
}(t,a,this)){var g=S(r,0,c,!0);if(g===Y)return B(!1)
;if(n=T(s=g),!1!==Ft(tt,r,Y,e,s,n,t,!1))return U(),
r.insertBefore(Y,g),V=r,H(),B(!0)}else if(s.parentNode===r){n=T(s)
;var v,w,y,x=Y.parentNode!==r,_=!function(t,e,n){
var i=n?t.left:t.top,o=n?t.right:t.bottom,a=n?t.width:t.height,r=n?e.left:e.top,s=n?e.right:e.bottom,c=n?e.width:e.height
;return i===r||o===s||i+a/2===r+c/2
}(Y.animated&&Y.toRect||e,s.animated&&s.toRect||n,a),M=a?"top":"left",j=I(s,"top","top")||I(Y,"top","top"),D=j?j.scrollTop:void 0
;if(vt!==s&&(w=n[M],Ot=!1,Mt=!_&&c.invertSwap||x),v=function(t,e,n,i,o,a,r,s){
var c=i?t.clientY:t.clientX,l=i?n.height:n.width,u=i?n.top:n.left,d=i?n.bottom:n.right,m=!1
;if(!r)if(s&&yt<l*o){
if(!Ot&&(1===wt?c>u+l*a/2:c<d-l*a/2)&&(Ot=!0),Ot)m=!0;else if(1===wt?c<u+yt:c>d-yt)return-wt
}else if(c>u+l*(1-o)/2&&c<d-l*(1-o)/2)return function(t){return E(Y)<E(t)?1:-1
}(e);return(m=m||r)&&(c<u+l*a/2||c>d-l*a/2)?c>u+l/2?1:-1:0
}(t,s,n,a,_?1:c.swapThreshold,null==c.invertedSwapThreshold?c.swapThreshold:c.invertedSwapThreshold,Mt,vt===s),
0!==v){var A=E(Y);do{A-=v,y=V.children[A]
}while(y&&("none"===O(y,"display")||y===Z))}if(0===v||y===s)return B(!1)
;vt=s,wt=v;var q=s.nextElementSibling,z=!1,$=Ft(tt,r,Y,e,s,n,t,z=1===v)
;if(!1!==$)return 1!==$&&-1!==$||(z=1===$),
Dt=!0,setTimeout(Ht,30),U(),z&&!q?r.appendChild(Y):s.parentNode.insertBefore(Y,z?q:s),
j&&C(j,0,D-j.scrollTop),V=Y.parentNode,void 0===w||Mt||(yt=Math.abs(w-T(s)[M])),
H(),B(!0)}if(r.contains(Y))return B(!1)}return!1}function N(c,l){J(c,p,o({evt:t,
isOwner:d,axis:a?"vertical":"horizontal",revert:i,dragRect:e,targetRect:n,
canSort:m,fromSortable:f,target:s,completed:B,onMove:function(n,i){
return Ft(tt,r,Y,e,n,T(n),t,i)},changed:H},l))}function U(){
N("dragOverAnimationCapture"),
p.captureAnimationState(),p!==f&&f.captureAnimationState()}function B(e){
return N("dragOverCompleted",{insertion:e
}),e&&(d?u._hideClone():u._showClone(p),
p!==f&&(L(Y,ut?ut.options.ghostClass:u.options.ghostClass,!1),
L(Y,c.ghostClass,!0)),
ut!==p&&p!==Bt.active?ut=p:p===Bt.active&&ut&&(ut=null),f===p&&(p._ignoreWhileAnimating=s),
p.animateAll((function(){
N("dragOverAnimationComplete"),p._ignoreWhileAnimating=null
})),p!==f&&(f.animateAll(),
f._ignoreWhileAnimating=null)),(s===Y&&!Y.animated||s===r&&!s.animated)&&(vt=null),
c.dragoverBubble||t.rootEl||s===document||(Y.parentNode[R]._isOutsideThisEl(t.target),
!e&&Nt(t)),!c.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),h=!0}
function H(){rt=E(Y),ct=E(Y,c.draggable),Q({sortable:p,name:"change",toEl:r,
newIndex:rt,newDraggableIndex:ct,originalEvent:t})}},_ignoreWhileAnimating:null,
_offMoveEvents:function(){
v(document,"mousemove",this._onTouchMove),v(document,"touchmove",this._onTouchMove),
v(document,"pointermove",this._onTouchMove),
v(document,"dragover",Nt),v(document,"mousemove",Nt),v(document,"touchmove",Nt)
},_offUpEvents:function(){var t=this.el.ownerDocument
;v(t,"mouseup",this._onDrop),
v(t,"touchend",this._onDrop),v(t,"pointerup",this._onDrop),
v(t,"touchcancel",this._onDrop),v(document,"selectstart",this)},
_onDrop:function(t){var e=this.el,n=this.options
;rt=E(Y),ct=E(Y,n.draggable),J("drop",this,{evt:t
}),V=Y&&Y.parentNode,rt=E(Y),ct=E(Y,n.draggable),Bt.eventCanceled||(xt=!1,Mt=!1,
Ot=!1,
clearInterval(this._loopId),clearTimeout(this._dragStartTimer),Wt(this.cloneId),
Wt(this._dragStartId),
this.nativeDraggable&&(v(document,"drop",this),v(e,"dragstart",this._onDragStart)),
this._offMoveEvents(),
this._offUpEvents(),f&&O(document.body,"user-select",""),O(Y,"transform",""),
t&&(gt&&(t.cancelable&&t.preventDefault(),
!n.dropBubble&&t.stopPropagation()),Z&&Z.parentNode&&Z.parentNode.removeChild(Z),
(tt===V||ut&&"clone"!==ut.lastPutMode)&&it&&it.parentNode&&it.parentNode.removeChild(it),
Y&&(this.nativeDraggable&&v(Y,"dragend",this),
Rt(Y),Y.style["will-change"]="",gt&&!xt&&L(Y,ut?ut.options.ghostClass:this.options.ghostClass,!1),
L(Y,this.options.chosenClass,!1),Q({sortable:this,name:"unchoose",toEl:V,
newIndex:null,newDraggableIndex:null,originalEvent:t}),tt!==V?(rt>=0&&(Q({
rootEl:V,name:"add",toEl:V,fromEl:tt,originalEvent:t}),Q({sortable:this,
name:"remove",toEl:V,originalEvent:t}),Q({rootEl:V,name:"sort",toEl:V,fromEl:tt,
originalEvent:t}),Q({sortable:this,name:"sort",toEl:V,originalEvent:t
})),ut&&ut.save()):rt!==at&&rt>=0&&(Q({sortable:this,name:"update",toEl:V,
originalEvent:t}),Q({sortable:this,name:"sort",toEl:V,originalEvent:t
})),Bt.active&&(null!=rt&&-1!==rt||(rt=at,ct=st),Q({sortable:this,name:"end",
toEl:V,originalEvent:t}),this.save())))),this._nulling()},_nulling:function(){
J("nulling",this),
tt=Y=V=Z=et=it=nt=ot=dt=mt=gt=rt=ct=at=st=vt=wt=ut=lt=Bt.dragged=Bt.ghost=Bt.clone=Bt.active=null,
Tt.forEach((function(t){t.checked=!0})),Tt.length=ft=pt=0},
handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t)
;break;case"dragenter":case"dragover":Y&&(this._onDragOver(t),function(t){
t.dataTransfer&&(t.dataTransfer.dropEffect="move"),
t.cancelable&&t.preventDefault()}(t));break;case"selectstart":t.preventDefault()
}},toArray:function(){
for(var t,e=[],n=this.el.children,i=0,o=n.length,a=this.options;i<o;i++)k(t=n[i],a.draggable,this.el,!1)&&e.push(t.getAttribute(a.dataIdAttr)||Gt(t))
;return e},sort:function(t,e){var n={},i=this.el
;this.toArray().forEach((function(t,e){var o=i.children[e]
;k(o,this.options.draggable,i,!1)&&(n[t]=o)
}),this),e&&this.captureAnimationState(),t.forEach((function(t){
n[t]&&(i.removeChild(n[t]),i.appendChild(n[t]))})),e&&this.animateAll()},
save:function(){var t=this.options.store;t&&t.set&&t.set(this)},
closest:function(t,e){return k(t,e||this.options.draggable,this.el,!1)},
option:function(t,e){var n=this.options;if(void 0===e)return n[t]
;var i=X.modifyOption(this,t,e);n[t]=void 0!==i?i:e,"group"===t&&zt(n)},
destroy:function(){J("destroy",this);var t=this.el
;t[R]=null,v(t,"mousedown",this._onTapStart),v(t,"touchstart",this._onTapStart),
v(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(v(t,"dragover",this),
v(t,"dragenter",this)),
[].forEach.call(t.querySelectorAll("[draggable]"),(function(t){
t.removeAttribute("draggable")
})),this._onDrop(),this._disableDelayedDragEvents(),
Lt.splice(Lt.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!ot){
if(J("hideClone",this),Bt.eventCanceled)return
;O(it,"display","none"),this.options.removeCloneOnHide&&it.parentNode&&it.parentNode.removeChild(it),
ot=!0}},_showClone:function(t){if("clone"===t.lastPutMode){if(ot){
if(J("showClone",this),Bt.eventCanceled)return
;Y.parentNode!=tt||this.options.group.revertClone?et?tt.insertBefore(it,et):tt.appendChild(it):tt.insertBefore(it,Y),
this.options.group.revertClone&&this.animate(Y,it),O(it,"display",""),ot=!1}
}else this._hideClone()}},It&&g(document,"touchmove",(function(t){
(Bt.active||xt)&&t.cancelable&&t.preventDefault()})),Bt.utils={on:g,off:v,css:O,
find:j,is:function(t,e){return!!k(t,e,t,!1)},extend:function(t,e){
if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t},throttle:$,
closest:k,toggleClass:L,clone:N,index:E,nextTick:Xt,cancelNextTick:Wt,
detectDirection:qt,getChild:S},Bt.get=function(t){return t[R]
},Bt.mount=function(){
for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n]
;e[0].constructor===Array&&(e=e[0]),e.forEach((function(t){
if(!t.prototype||!t.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t))
;t.utils&&(Bt.utils=o(o({},Bt.utils),t.utils)),X.mount(t)}))
},Bt.create=function(t,e){return new Bt(t,e)},Bt.version="1.15.2"
;var Kt,Jt,Qt,Yt,Vt,Zt,te=[],ee=!1;function ne(){te.forEach((function(t){
clearInterval(t.pid)})),te=[]}function ie(){clearInterval(Zt)}
var oe,ae=$((function(t,e,n,i){if(e.scroll){
var o,a=(t.touches?t.touches[0]:t).clientX,r=(t.touches?t.touches[0]:t).clientY,s=e.scrollSensitivity,c=e.scrollSpeed,l=D(),u=!1
;Jt!==n&&(Jt=n,ne(),Kt=e.scroll,o=e.scrollFn,!0===Kt&&(Kt=q(n,!0)));var d=0,m=Kt
;do{
var f=m,p=T(f),h=p.top,b=p.bottom,g=p.left,v=p.right,w=p.width,y=p.height,k=void 0,x=void 0,_=f.scrollWidth,L=f.scrollHeight,M=O(f),j=f.scrollLeft,I=f.scrollTop
;f===l?(k=w<_&&("auto"===M.overflowX||"scroll"===M.overflowX||"visible"===M.overflowX),
x=y<L&&("auto"===M.overflowY||"scroll"===M.overflowY||"visible"===M.overflowY)):(k=w<_&&("auto"===M.overflowX||"scroll"===M.overflowX),
x=y<L&&("auto"===M.overflowY||"scroll"===M.overflowY))
;var S=k&&(Math.abs(v-a)<=s&&j+w<_)-(Math.abs(g-a)<=s&&!!j),P=x&&(Math.abs(b-r)<=s&&I+y<L)-(Math.abs(h-r)<=s&&!!I)
;if(!te[d])for(var E=0;E<=d;E++)te[E]||(te[E]={})
;te[d].vx==S&&te[d].vy==P&&te[d].el===f||(te[d].el=f,
te[d].vx=S,te[d].vy=P,clearInterval(te[d].pid),
0==S&&0==P||(u=!0,te[d].pid=setInterval(function(){
i&&0===this.layer&&Bt.active._onTouchMove(Vt)
;var e=te[this.layer].vy?te[this.layer].vy*c:0,n=te[this.layer].vx?te[this.layer].vx*c:0
;"function"==typeof o&&"continue"!==o.call(Bt.dragged.parentNode[R],n,e,t,Vt,te[this.layer].el)||C(te[this.layer].el,n,e)
}.bind({layer:d}),24))),d++}while(e.bubbleScroll&&m!==l&&(m=q(m,!1)));ee=u}
}),30),re=function(t){
var e=t.originalEvent,n=t.putSortable,i=t.dragEl,o=t.activeSortable,a=t.dispatchSortableEvent,r=t.hideGhostForTarget,s=t.unhideGhostForTarget
;if(e){var c=n||o;r()
;var l=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e,u=document.elementFromPoint(l.clientX,l.clientY)
;s(),c&&!c.el.contains(u)&&(a("spill"),this.onSpill({dragEl:i,putSortable:n}))}}
;function se(){}function ce(){}function le(){function t(){this.defaults={
swapClass:"sortable-swap-highlight"}}return t.prototype={dragStart:function(t){
var e=t.dragEl;oe=e},dragOverValid:function(t){
var e=t.completed,n=t.target,i=t.onMove,o=t.activeSortable,a=t.changed,r=t.cancel
;if(o.options.swap){var s=this.sortable.el,c=this.options;if(n&&n!==s){var l=oe
;!1!==i(n)?(L(n,c.swapClass,!0),oe=n):oe=null,l&&l!==oe&&L(l,c.swapClass,!1)}
a(),e(!0),r()}},drop:function(t){
var e,n,i,o,a,r,s=t.activeSortable,c=t.putSortable,l=t.dragEl,u=c||this.sortable,d=this.options
;oe&&L(oe,d.swapClass,!1),
oe&&(d.swap||c&&c.options.swap)&&l!==oe&&(u.captureAnimationState(),
u!==s&&s.captureAnimationState(),
n=oe,a=(e=l).parentNode,r=n.parentNode,a&&r&&!a.isEqualNode(n)&&!r.isEqualNode(e)&&(i=E(e),
o=E(n),
a.isEqualNode(r)&&i<o&&o++,a.insertBefore(n,a.children[i]),r.insertBefore(e,r.children[o])),
u.animateAll(),u!==s&&s.animateAll())},nulling:function(){oe=null}},s(t,{
pluginName:"swap",eventProperties:function(){return{swapItem:oe}}})}
se.prototype={startIndex:null,dragStart:function(t){var e=t.oldDraggableIndex
;this.startIndex=e},onSpill:function(t){var e=t.dragEl,n=t.putSortable
;this.sortable.captureAnimationState(),n&&n.captureAnimationState()
;var i=S(this.sortable.el,this.startIndex,this.options)
;i?this.sortable.el.insertBefore(e,i):this.sortable.el.appendChild(e),
this.sortable.animateAll(),n&&n.animateAll()},drop:re},s(se,{
pluginName:"revertOnSpill"}),ce.prototype={onSpill:function(t){
var e=t.dragEl,n=t.putSortable||this.sortable
;n.captureAnimationState(),e.parentNode&&e.parentNode.removeChild(e),
n.animateAll()},drop:re},s(ce,{pluginName:"removeOnSpill"})
;var ue,de,me,fe,pe,he=[],be=[],ge=!1,ve=!1,we=!1;function ye(){function t(t){
for(var e in this)"_"===e.charAt(0)&&"function"==typeof this[e]&&(this[e]=this[e].bind(this))
;t.options.avoidImplicitDeselect||(t.options.supportPointer?g(document,"pointerup",this._deselectMultiDrag):(g(document,"mouseup",this._deselectMultiDrag),
g(document,"touchend",this._deselectMultiDrag))),
g(document,"keydown",this._checkKeyDown),
g(document,"keyup",this._checkKeyUp),this.defaults={
selectedClass:"sortable-selected",multiDragKey:null,avoidImplicitDeselect:!1,
setData:function(e,n){var i="";he.length&&de===t?he.forEach((function(t,e){
i+=(e?", ":"")+t.textContent})):i=n.textContent,e.setData("Text",i)}}}
return t.prototype={multiDragKeyDown:!1,isMultiDrag:!1,
delayStartGlobal:function(t){var e=t.dragEl;me=e},delayEnded:function(){
this.isMultiDrag=~he.indexOf(me)},setupClone:function(t){
var e=t.sortable,n=t.cancel;if(this.isMultiDrag){
for(var i=0;i<he.length;i++)be.push(N(he[i])),
be[i].sortableIndex=he[i].sortableIndex,
be[i].draggable=!1,be[i].style["will-change"]="",
L(be[i],this.options.selectedClass,!1),
he[i]===me&&L(be[i],this.options.chosenClass,!1);e._hideClone(),n()}},
clone:function(t){
var e=t.sortable,n=t.rootEl,i=t.dispatchSortableEvent,o=t.cancel
;this.isMultiDrag&&(this.options.removeCloneOnHide||he.length&&de===e&&(ke(!0,n),
i("clone"),o()))},showClone:function(t){
var e=t.cloneNowShown,n=t.rootEl,i=t.cancel
;this.isMultiDrag&&(ke(!1,n),be.forEach((function(t){O(t,"display","")
})),e(),pe=!1,i())},hideClone:function(t){
var e=this,n=(t.sortable,t.cloneNowHidden),i=t.cancel
;this.isMultiDrag&&(be.forEach((function(t){
O(t,"display","none"),e.options.removeCloneOnHide&&t.parentNode&&t.parentNode.removeChild(t)
})),n(),pe=!0,i())},dragStartGlobal:function(t){
t.sortable,!this.isMultiDrag&&de&&de.multiDrag._deselectMultiDrag(),
he.forEach((function(t){t.sortableIndex=E(t)})),he=he.sort((function(t,e){
return t.sortableIndex-e.sortableIndex})),we=!0},dragStarted:function(t){
var e=this,n=t.sortable;if(this.isMultiDrag){
if(this.options.sort&&(n.captureAnimationState(),this.options.animation)){
he.forEach((function(t){t!==me&&O(t,"position","absolute")}))
;var i=T(me,!1,!0,!0);he.forEach((function(t){t!==me&&U(t,i)})),ve=!0,ge=!0}
n.animateAll((function(){
ve=!1,ge=!1,e.options.animation&&he.forEach((function(t){B(t)
})),e.options.sort&&xe()}))}},dragOver:function(t){
var e=t.target,n=t.completed,i=t.cancel;ve&&~he.indexOf(e)&&(n(!1),i())},
revert:function(t){var e=t.fromSortable,n=t.rootEl,i=t.sortable,o=t.dragRect
;he.length>1&&(he.forEach((function(t){i.addAnimationState({target:t,
rect:ve?T(t):o}),B(t),t.fromRect=o,e.removeAnimationState(t)
})),ve=!1,function(t,e){he.forEach((function(n,i){
var o=e.children[n.sortableIndex+(t?+i:0)]
;o?e.insertBefore(n,o):e.appendChild(n)}))}(!this.options.removeCloneOnHide,n))
},dragOverCompleted:function(t){
var e=t.sortable,n=t.isOwner,i=t.insertion,o=t.activeSortable,a=t.parentEl,r=t.putSortable,s=this.options
;if(i){
if(n&&o._hideClone(),ge=!1,s.animation&&he.length>1&&(ve||!n&&!o.options.sort&&!r)){
var c=T(me,!1,!0,!0);he.forEach((function(t){t!==me&&(U(t,c),a.appendChild(t))
})),ve=!0}if(!n)if(ve||xe(),he.length>1){var l=pe
;o._showClone(e),o.options.animation&&!pe&&l&&be.forEach((function(t){
o.addAnimationState({target:t,rect:fe
}),t.fromRect=fe,t.thisAnimationDuration=null}))}else o._showClone(e)}},
dragOverAnimationCapture:function(t){
var e=t.dragRect,n=t.isOwner,i=t.activeSortable;if(he.forEach((function(t){
t.thisAnimationDuration=null
})),i.options.animation&&!n&&i.multiDrag.isMultiDrag){fe=s({},e);var o=M(me,!0)
;fe.top-=o.f,fe.left-=o.e}},dragOverAnimationComplete:function(){
ve&&(ve=!1,xe())},drop:function(t){
var e=t.originalEvent,n=t.rootEl,i=t.parentEl,o=t.sortable,a=t.dispatchSortableEvent,r=t.oldIndex,s=t.putSortable,c=s||this.sortable
;if(e){var l=this.options,u=i.children
;if(!we)if(l.multiDragKey&&!this.multiDragKeyDown&&this._deselectMultiDrag(),
L(me,l.selectedClass,!~he.indexOf(me)),
~he.indexOf(me))he.splice(he.indexOf(me),1),ue=null,W({sortable:o,rootEl:n,
name:"deselect",targetEl:me,originalEvent:e});else{if(he.push(me),W({sortable:o,
rootEl:n,name:"select",targetEl:me,originalEvent:e
}),e.shiftKey&&ue&&o.el.contains(ue)){var d,m,f=E(ue),p=E(me)
;if(~f&&~p&&f!==p)for(p>f?(m=f,
d=p):(m=p,d=f+1);m<d;m++)~he.indexOf(u[m])||(L(u[m],l.selectedClass,!0),
he.push(u[m]),W({sortable:o,rootEl:n,name:"select",targetEl:u[m],originalEvent:e
}))}else ue=me;de=c}if(we&&this.isMultiDrag){
if(ve=!1,(i[R].options.sort||i!==n)&&he.length>1){
var h=T(me),b=E(me,":not(."+this.options.selectedClass+")")
;if(!ge&&l.animation&&(me.thisAnimationDuration=null),c.captureAnimationState(),
!ge&&(l.animation&&(me.fromRect=h,he.forEach((function(t){
if(t.thisAnimationDuration=null,t!==me){var e=ve?T(t):h
;t.fromRect=e,c.addAnimationState({target:t,rect:e})}
}))),xe(),he.forEach((function(t){
u[b]?i.insertBefore(t,u[b]):i.appendChild(t),b++})),r===E(me))){var g=!1
;he.forEach((function(t){t.sortableIndex===E(t)||(g=!0)
})),g&&(a("update"),a("sort"))}he.forEach((function(t){B(t)})),c.animateAll()}
de=c}(n===i||s&&"clone"!==s.lastPutMode)&&be.forEach((function(t){
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
eventProperties:function(){var t,e=this,n=[],i=[]
;return he.forEach((function(t){var o;n.push({multiDragElement:t,
index:t.sortableIndex
}),o=ve&&t!==me?-1:ve?E(t,":not(."+e.options.selectedClass+")"):E(t),i.push({
multiDragElement:t,index:o})})),{items:(t=he,function(t){
if(Array.isArray(t))return c(t)}(t)||function(t){
if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)
}(t)||function(t,e){if(t){if("string"==typeof t)return c(t,e)
;var n={}.toString.call(t).slice(8,-1)
;return"Object"===n&&t.constructor&&(n=t.constructor.name),
"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0
}}(t)||function(){
throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}()),clones:[].concat(be),oldIndicies:n,newIndicies:i}},optionListeners:{
multiDragKey:function(t){
return"ctrl"===(t=t.toLowerCase())?t="Control":t.length>1&&(t=t.charAt(0).toUpperCase()+t.substr(1)),
t}}})}function ke(t,e){be.forEach((function(n,i){
var o=e.children[n.sortableIndex+(t?+i:0)]
;o?e.insertBefore(n,o):e.appendChild(n)}))}function xe(){
he.forEach((function(t){t!==me&&t.parentNode&&t.parentNode.removeChild(t)}))}
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
ie(),ne(),clearTimeout(x),x=void 0},nulling:function(){
Vt=Jt=Kt=ee=Zt=Qt=Yt=null,te.length=0},_handleFallbackAutoScroll:function(t){
this._handleAutoScroll(t,!0)},_handleAutoScroll:function(t,e){
var n=this,i=(t.touches?t.touches[0]:t).clientX,o=(t.touches?t.touches[0]:t).clientY,a=document.elementFromPoint(i,o)
;if(Vt=t,e||this.options.forceAutoScrollFallback||d||u||f){
ae(t,this.options,a,e);var r=q(a,!0)
;!ee||Zt&&i===Qt&&o===Yt||(Zt&&ie(),Zt=setInterval((function(){
var a=q(document.elementFromPoint(i,o),!0);a!==r&&(r=a,ne()),ae(t,n.options,a,e)
}),10),Qt=i,Yt=o)}else{
if(!this.options.bubbleScroll||q(a,!0)===D())return void ne()
;ae(t,this.options,q(a,!1),!1)}}},s(t,{pluginName:"scroll",
initializeByDefault:!0})}),Bt.mount(ce,se);const _e=Bt},4893:(t,e,n)=>{
n.r(e),n.d(e,{default:()=>g})
;var i=n(5072),o=n.n(i),a=n(7825),r=n.n(a),s=n(7659),c=n.n(s),l=n(5056),u=n.n(l),d=n(540),m=n.n(d),f=n(1113),p=n.n(f),h=n(6906),b={}
;b.styleTagTransform=p(),
b.setAttributes=u(),b.insert=c().bind(null,"html"),b.domAPI=r(),
b.insertStyleElement=m(),o()(h.A,b);const g=h.A&&h.A.locals?h.A.locals:void 0},
5072:t=>{var e=[];function n(t){
for(var n=-1,i=0;i<e.length;i++)if(e[i].identifier===t){n=i;break}return n}
function i(t,i){for(var a={},r=[],s=0;s<t.length;s++){
var c=t[s],l=i.base?c[0]+i.base:c[0],u=a[l]||0,d="".concat(l," ").concat(u)
;a[l]=u+1;var m=n(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],
layer:c[5]};if(-1!==m)e[m].references++,e[m].updater(f);else{var p=o(f,i)
;i.byIndex=s,e.splice(s,0,{identifier:d,updater:p,references:1})}r.push(d)}
return r}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){
if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return
;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var a=i(t=t||[],o=o||{})
;return function(t){t=t||[];for(var r=0;r<a.length;r++){var s=n(a[r])
;e[s].references--}for(var c=i(t,o),l=0;l<a.length;l++){var u=n(a[l])
;0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=c}}},7659:t=>{var e={}
;t.exports=function(t,n){var i=function(t){if(void 0===e[t]){
var n=document.querySelector(t)
;if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{
n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t)
;if(!i)throw Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.")
;i.appendChild(n)}},540:t=>{t.exports=function(t){
var e=document.createElement("style")
;return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},
5056:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},
7825:t=>{t.exports=function(t){if("undefined"==typeof document)return{
update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{
update:function(n){!function(t,e,n){var i=""
;n.supports&&(i+="@supports (".concat(n.supports,") {")),
n.media&&(i+="@media ".concat(n.media," {"));var o=void 0!==n.layer
;o&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,
o&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var a=n.sourceMap
;a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),
e.styleTagTransform(i,t,e.options)}(e,t,n)},remove:function(){!function(t){
if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},1113:t=>{
t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{
for(;e.firstChild;)e.removeChild(e.firstChild)
;e.appendChild(document.createTextNode(t))}}},3376:(t,e)=>{
Object.defineProperty(e,"__esModule",{value:!0
}),e.t=void 0,e.t=(t,e)=>!(!["258d3f","28fa48","1f6fae","21d476"].includes(e)&&!["253d","2de3","2d3d","235f","5416","2396"].includes(t))
},276:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.l=void 0
;const i=n(6185);e.l=()=>{document.addEventListener("dblclick",(t=>{
const e=t?.target
;"INPUT"===e?.tagName&&(e.className.includes("buyAmountInput")&&(t=>{
const e=t?.closest("div[class^=buyMenu]")?.querySelector("span[class^=amount]"),n=e?.innerText?.match(/\d+/)?.[0]??"1"
;(0,i.u)(t,Math.min((0,i.m)(n),1e4).toString())
})(e),e.className.includes("input-money")&&(async t=>{if(!t)return
;const e=t.closest("li")?"li":"div[class^=row]",n=t?.closest(e)?.querySelector("img")?.src.match(/\d+/)?.[0]
;if(!n)return;const o={section:"market",select:"bazaar",objID:n
},a=await(0,i.p)(o);if(!a?.status)return
;const{bazaar:r}=a,s=(0,i.m)(r[1]?.cost??"")-1;(0,i.h)(t,s.toString())
})(e),"clear-all"==e.className&&(t=>{
const e=t?.closest("li")?.querySelector("div.name-wrap"),n=e?.innerText?.match(/x(\d+)/)?.[1]??"1"
;t.className.includes("removeAmount")?(0,i.u)(t,n):(0,i.h)(t,n)
})(e),e.className.includes("removeAmount")&&(t=>{
const e=t?.closest("div[class^=row]")?.querySelector("div[class^=desc]"),n=e?.innerText?.match(/x(\d+)/)?.[1]??"1"
;(0,i.u)(t,n)})(e))}))}},1913:(t,e,n)=>{Object.defineProperty(e,"__esModule",{
value:!0}),e.v=void 0;const i=n(6185);e.v=async()=>{const t={section:"user",
select:"bazaar",objID:(0,i.k)("userId")??""},e=await(0,i.p)(t)
;if(!e?.status)return
;const{bazaar:n}=e,o=n.reduce(((t,e)=>t+ +e?.price*+e.quantity),0),a=n.reduce(((t,e)=>t+ +e?.market_price*+e.quantity),0),r=(0,
i._)({classList:"nst-trade-value",
innerText:`Total: $${(0,i.L)(o)} - MV: $${(0,i.L)(a)}`})
;document?.querySelector("#bazaarRoot .wrapper")?.insertAdjacentElement("afterend",r)
}},5661:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0
}),e.O=void 0,e.O=t=>{
Array.from(t.querySelectorAll('[class*="torn-item"]')).forEach((t=>{
const e=t.getAttribute("src")
;t.setAttribute("src",e.replace("small","large")),t.classList.add("nst-city-item")
}))}},4051:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.M=void 0
;const i=n(6185);e.M=()=>{document.addEventListener("dblclick",(t=>{
const e=t?.target
;"INPUT"===e?.tagName&&"text"===e?.type&&e.className.includes("input-money")&&(t=>{
if(!t.closest("li"))return
;const e=t?.closest("li")?.querySelector("div.sold-daily").innerText,n=(0,
i.m)(e).toString();(0,i.h)(t,n)})(e)}))}},3980:(t,e,n)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.j=void 0;const i=n(6185)
;e.j=()=>{document.addEventListener("dblclick",(t=>{const e=t?.target
;if("INPUT"!==e?.tagName)return
;const n=e.parentElement?.parentElement,o=(0,i.m)(n?.querySelector(".instock").innerText)
;e.value=""+Math.min(o,100)}))}},488:(t,e,n)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.D=void 0;const i=n(6185)
;e.D=()=>{console.log("nst - init default start")
;const t=(0,i.T)()??{},e={},n=o.script,a=t?.script??n
;Object.keys(a).forEach((t=>{n[t]&&(n[t].enabled=a[t].enabled)
})),t.script=n,Object.keys(o).forEach((n=>e[n]=t[n]??o[n])),
(0,i.I)(e),console.log("nst - init default end")};const o={script:{leftalign:{
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
intercept:{name:"intercept link",enabled:!1,
description:"add links for intercept attacks",onpage:"fight"},specialgym:{
name:"special gym",enabled:!1,description:"show needed stats for special gyms",
onpage:"gym"},livenetworth:{name:"live networth",enabled:!1,
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
onpage:"trade"}},assaperk:!1,hold:!1,jailscore:1e4,mugperc:.075,
mugthreshold:4e6,outcome:"leave",quickbail:!1,quickbust:!1,quickfaction:{},
quickitems:{},reloadone:!1,reloadtwo:!1,spgymone:"elites",spgymtwo:"frontline",
temp:!1,weapon:{primary:0,secondary:1,melee:2}}},714:(t,e,n)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.S=void 0;const i=n(6185)
;e.S=t=>{
0!==(0,i.P)().match(/manage/g).length&&t&&Array.from(t.children).forEach((t=>{
const e=t.getAttribute("itemid"),n=t.querySelector(".name .desc")
;n&&e&&n.insertAdjacentElement("afterBegin",(0,i.q)({classList:"text-nstmain",
innerText:"ID: "+e}))}))}},1108:(t,e)=>{Object.defineProperty(e,"__esModule",{
value:!0}),e.$=void 0,e.$=t=>{
Array.from(t?.querySelectorAll("ul[class*='slotItems']")).forEach((t=>{
t.addEventListener("click",(()=>{
const e=t?.parentNode?.parentNode?.childNodes[0]?.childNodes[1]?.childNodes[1]
;e.click()}))}))}},9149:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0
}),e.C=void 0;const i=n(6185);e.C=t=>{if(!t)return
;const e=t.getElementsByTagName("ul")[0],n=Array.from(e.children),o={Strength:0,
Defense:0,Speed:0,Dexterity:0,Total:0};for(const t of n){
const e=t.getAttribute("aria-label");if(!e)return;const n=e.split(" ")
;if(n.length>2){
const t=n[0].replace(/:/g,""),e=(0,i.m)(n[1]),a=n[2].replace(/%/g,""),r=a.charAt(0),s=(0,
i.m)(a),c="+"==r?s/100+1:1-s/100;o[t]=Math.round(e*c),o.Total+=Math.round(e*c)}}
e.lastElementChild.removeAttribute("class");const a=(0,i._)({
classList:"nst-box-header"});a.appendChild((0,i.q)({classList:"nst-box-title"
})).appendChild((0,i.q)({id:"nst-box-title",innerText:"Effective Stats"
})),e.appendChild(a),Object.keys(o).forEach((t=>{const n=(0,i.N)({tabIndex:0,
ariaLabel:`${t} ${(0,i.L)(o[t])}`}),a=(0,i.q)({classList:"divider",
innerHTML:`<span>${t}</span>`}),r=(0,i.q)({classList:"desc",
innerText:` ${(0,i.L)(o[t])} `,style:"margin-left: 3px"})
;n.appendChild(a),n.appendChild(r),e.appendChild(n)
})),e.lastElementChild.classList.add("last")}},7188:(t,e,n)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.U=void 0
;const i=n(6185),o=(t,e)=>{if(!t?.querySelector)return
;if(!t?.querySelector("ul.employee-list"))return
;const n=t?.querySelector("ul.employee-list")?.children,i=Array.from(n)
;if(0===i.length)return;const o=(Date.now()-864e5)/1e3,a=(Date.now()-1728e5)/1e3
;i.forEach((t=>{const n=t?.getAttribute("data-user");if(!n)return
;const i=e[n]?.last_action?.timestamp,r=t?.querySelector(".employee")
;if(!r)return;const s=i<a?"bg-nstred":i<o?"bg-nstyellow":""
;s&&r.classList.add(s)}))};e.U=async t=>{if(!t)return;const e=await(0,i.p)({
section:"company",select:"employees"});if(!e?.status)return
;const{company_employees:n}=e;o(t,n),new MutationObserver((t=>{t.forEach((t=>{
Array.from(t.addedNodes).forEach((t=>o(t,n)))}))})).observe(t,{childList:!0,
subtree:!0})}},7716:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0
}),e.B=void 0;const i=n(6185);e.B=t=>{
const{step:e,action:n,confirm:o}=(0,i.F)(t)
;return"actionForm"!==e||"equip"!==n||1===o?(0,i.R)({...(0,i.F)(t)}):(0,i.R)({
...(0,i.F)(t),confirm:1})}},9355:(t,e)=>{Object.defineProperty(e,"__esModule",{
value:!0}),e.H=void 0;const n=t=>{let e=0;t.addEventListener("click",(()=>{
if(1!=e++)return
;e=0,document.querySelector('.deposit-box input[value="DEPOSIT"], .deposit button.torn-btn, #armoury-donate .cash button').click()
;const t=document.querySelector("#armoury-donate .cash-confirm .yes")
;t&&t.click()}))};e.H=t=>{
const e=document.querySelector(".deposit-box .input-money-symbol, .deposit .input-money-symbol")
;e&&n(e),new MutationObserver((t=>{t.forEach((t=>{
Array.from(t.addedNodes).forEach((t=>{
const e=t.querySelector&&t.querySelector(".deposit-box .input-money-symbol, .deposit .input-money-symbol, .donate .input-money-symbol")
;e&&n(e)}))}))})).observe(t,{childList:!0,subtree:!0})}},1549:(t,e,n)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.G=void 0
;const i=n(6185),o=(0,
i.k)("user2ID")??"",a=(0,i.T)(),{reloadone:r,reloadtwo:s,weapon:c}=a
;let l={},u={},d=!1,m=0;const f=()=>{
const t=u?.defenderUser?.life,e=l?.currentAttackStatus,n=u?.attackStatus,{hold:o}=(0,
i.T)()
;return o&&t<2?"hold":"end"===n&&"endResult"in u?"end":t<2&&"finishOptions"in u?"finish":"error"in u?"check":d||"notStarted"!==n?d||"process"===e?"hit":"check":"start"
},p=()=>{
const t=u?.attackerAmmoStatus,e=u?.currentClips?.[0],n=u?.attackerItems[1]?.item[0]?.currentBonuses,o=u?.attackerItems[2]?.item[0]?.currentBonuses,a=u?.currentMove,l={
primary:()=>{
const n=null!=u?.attackerItems[1]?.item[0]?.ID,i="0"!==e?.attackerPrimaryRoundsLeft,o=!t?.[1]?.includes("No ammo")
;return n&&o&&(i||r)},secondary:()=>{
const n=null!=u?.attackerItems?.[2]?.item[0]?.ID,i="0"!==e?.attackerSecondaryRoundsLeft,o=!t?.[2]?.includes("No ammo")
;return n&&o&&(i||s)},melee:()=>null!=u?.attackerItems?.[3]?.item[0]?.ID}
;if(0===a&&(0,i.T)()?.assaperk){if("Assassinate"===n?.[72]?.title)return 1
;if("Assassinate"===o?.[72]?.title)return 2}if((()=>{
if(void 0===u?.attackerItems?.[5]?.item[0]?.ID)return!1;const{temp:t}=(0,i.T)()
;if(!t)return!1
;const e=u?.attackerItems[5]?.item[0]?.ID,n=u?.defenderItems[6]?.item[0]?.ID
;return!("256"===e&&["670","1355","348"].includes(n)||"392"===e&&["348","642","644","655","670","675","680","1355"].includes(n))
})())return 5;do{const t=Object.keys(c).filter((t=>c[t]==m))[0]
;if(l[t]())return h[t];m++}while(m<3);return 999},h={primary:1,secondary:2,
melee:3,temp:5},b={check:()=>u.error??"checking",start:()=>"start fight",
finish:()=>"executing",end:()=>u?.endResult?.info??u?.endResult?.groupEvent,
hit:()=>{const t=+u?.defenderUser?.life,e=+u?.defenderUser?.maxlife
;return`${t} / ${e} (${Math.floor(t/e*100)}%)`}},g={check:()=>({user2ID:o}),
start:()=>(d=!0,{step:"startFight",user2ID:o}),finish:()=>{
const{outcome:t}=(0,i.T)();return{step:"finish",fightResult:t}},hold:()=>({}),
end:()=>({}),hit:()=>{const t="user1EquipedItemID";return{step:"attack",
user2ID:o,[t]:p()}}},v=async t=>{const e=t.target;e.disabled=!0
;const n=f(),o=(g[n]??g.error)();if((0,i.X)(o))return
;const a="https://www.torn.com/loader.php?sid=attackData&mode=json&rfcv="+(0,
i.W)(),r={method:"POST",headers:{"x-requested-with":"XMLHttpRequest"},
body:new URLSearchParams(o)};console.log(n,o),await fetch(a,{...r
}).then((t=>t.json())).then((t=>((t,e)=>{e.disabled=!1,console.log(t),l=t,u=t.DB
;const n=f();e.innerText=b[n]()})(t,e))).catch((t=>console.error(t)))}
;e.G=t=>(t=>{const e=(0,i.K)({title:"fighterino",element:t})
;e.classList.remove("nst-box-row"),e.classList.add("nst-box-column")
;const n=(()=>{const t=(0,i._)({classList:"nst-box-column"}),e=(0,i._)({
classList:"nst-outcome"});e.addEventListener("change",(t=>{const e=t.target.id
;(0,i.I)({outcome:e})}))
;const n=(0,i.J)("leave","outcome"),o=(0,i.J)("mug","outcome"),a=(0,
i.J)("hospitalize","outcome")
;e.appendChild(n),e.appendChild(o),e.appendChild(a),t.appendChild(e);const r=(0,
i._)({classList:"nst-outcome"}),s={id:"nst-hold",checked:(0,i.T)("hold")
},c=(0,i.Y)(s,"hold","",(t=>{const e=t.target.checked;(0,i.I)({hold:e})})),l={
id:"nst-temp",checked:(0,i.T)("temp")},u=(0,i.Y)(l,"use temp first","",(t=>{
const e=t.target.checked;(0,i.I)({temp:e})})),d={id:"nst-assa",
checked:(0,i.T)("assaperk")},m=(0,i.Y)(d,"assassinate","",(t=>{
const e=t.target.checked;(0,i.I)({assaperk:e})}))
;return r.appendChild(c),r.appendChild(u),r.appendChild(m),t.appendChild(r),t
})(),o=(0,i._)({classList:"nst-box-column"}),a=(0,i.V)({id:"nst-fighteroo",
classList:"torn-btn m-2",innerText:"fighterino"});a.addEventListener("click",v),
o.appendChild(a),e.appendChild(n),e.appendChild(o)})(t)},8257:(t,e,n)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.Z=e.tt=void 0
;const i=n(6185),o=n(9607),a={},r={balboas:{req:["defense","dexterity"],
desc:"balboas (def/dex)"},frontline:{req:["strength","speed"],
desc:"frontline (str/spd)"},gym3000:{req:["strength"],desc:"gym3000 (str)"},
isoyamas:{req:["defense"],desc:"isoyamas (def)"},rebound:{req:["speed"],
desc:"rebound (spd)"},elites:{req:["dexterity"],desc:"elites (dex)"}},s=t=>{
const e=(0,i.K)({title:"Special Gym",element:t});["one","two"].forEach((t=>{
const n=(0,i._)({id:"nst-spgym-"+t}),o=(0,i.et)("select",{
id:`nst-spgym-${t}-sel`,classList:"nst-spgym-sel"})
;Object.entries(r).forEach((([e,n])=>{const a={value:e,innerText:n.desc
},r=(0,i.et)("option",a)
;r.selected=(0,i.T)("spgym"+t)?.toString()===e,o.appendChild(r)
})),o.addEventListener("change",(t=>{
const e=t?.target,n=e.id.replace(/nst-/g,"").replace(/-sel/g,"").replace(/-/g,"")
;(0,i.I)({[n]:e.value})}));const a=(0,i.nt)({id:`nst-spgym-${t}-msg`,
classList:"nst-spgym-msg"});n.appendChild(o),n.appendChild(a),e.appendChild(n)
}))},c=()=>{["one","two"].forEach((t=>{
const e=document.querySelector(`#nst-spgym-${t}-sel`),n=document.querySelector(`#nst-spgym-${t}-msg`),o=e.value,s=Object.keys(a).filter((t=>r[o].req.includes(t))).reduce(((t,e)=>({
...t,[e]:a[e]
})),{}),c=Object.keys(a).filter((t=>!r[o].req.includes(t))).reduce(((t,e)=>({
...t,[e]:a[e]
})),{}),l=Object.values(s).reduce(((t,e)=>t+e),0),u=Object.values(c).reduce(Object.keys(s).length>1?(t,e)=>t+e:(t,e)=>Math.max(t,e),0),d=l>=1.25*u?(0,
i.L)(l/1.25-u):(0,
i.L)(1.25*u-l),m=Object.keys(s).length>1?Object.keys(l>=1.25*u?c:s).join(" and "):(l>=1.25*u?Object.keys(c).filter((t=>a[t]===u)):Object.keys(s)).join(""),f=`Gain ${l>=1.25*u?"no more than":""} ${d} ${m}`
;n.innerText=f}))};e.tt=t=>{
Object.entries(t?.stats).forEach((([t,e])=>a[t]=(0,i.m)(e?.value))),
(0,o.it)(s,"#gymroot"),c()},e.Z=t=>{a[t?.stat?.name]=(0,i.m)(t?.stat?.newValue),
c()}},6703:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0
}),e.ot=void 0;const i=n(6185);e.ot=t=>{t=t.closest('ul[class*="properties"]')
;const e=(0,
i.T)("userdata"),n=[...e.faction_perks,...e.job_perks,...e.property_perks,...e.education_perks,...e.book_perks].filter((t=>t.includes("gym gains")))
;["strength","defense","speed","dexterity"].forEach((o=>{
const a=e.faction_perks.filter((t=>t.includes(o+" gym gains"))).reduce(((t,e)=>t+(0,
i.m)(e.match(/\d+/))),0),r=n.filter((t=>t.includes(o)||t.match(/% gym gains?/))).reduce(((t,e)=>t+(0,
i.m)(e.match(/\d+/))),0),s=(0,i._)({id:"nst-steadfast-"+o,
classList:"nst-steadfast",innerText:`steadfast: ${a}% (${r}%)`})
;t.querySelector("[class*="+o).insertAdjacentElement("afterbegin",s)}))}},
5689:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0
}),e.rt=void 0,e.rt=t=>{
document.getElementById("skip-to-content").innerText=t?.innerText}},
2470:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.st=void 0
;const i=n(6185);e.st=t=>{if(!("currentFightStatistics"in t))return
;const e=Array.from(document.querySelectorAll('ul[class^="participants"] div[class^= "playerWrap"] > span[class^= "playername"]'))
;0!==e.length&&e.forEach((e=>{if(e.querySelector(".nst-intercept"))return
;const n=e.innerText,o=Object.values(t?.currentFightStatistics).filter((t=>t?.playername===n))[0],a=o?.userID
;e.innerHTML="",e.appendChild((0,i.ct)({classList:"nst-intercept",
href:"loader.php?sid=attack&user2ID="+a,target:"_blank",innerText:""+n}))}))}},
1379:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0
}),e.lt=void 0,e.lt=()=>{
document.documentElement.classList.add("nst-left-align")}},8620:(t,e,n)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.ut=void 0;const i=n(6185)
;e.ut=t=>{if(!t)return
;const e=t?.parentElement,n=(0,i.T)("userdata"),o=(0,i.m)(n?.networth?.total),a=(0,
i.m)(n?.personalstats?.networth),r=Math.round(o-a),s=r>0?"text-nstgreen":r<0?"text-nstred":"",c=`<b class='${s}'>$${(0,
i.L)(r)}</b>`,l=(0,i.N)({classList:"last",tabIndex:0,
ariaLabel:"Live NW: "+(0,i.L)(o)}),u=(0,i.q)({classList:"divider",
innerHTML:"<span>Live Networth</span>"}),d=(0,i.q)({
classList:`desc ${s} font-bold`,innerText:` $${(0,i.L)(o)} `,
style:"margin-left: 3px; margin-right: 3px;"}),m=(0,i.et)("i",{
classList:"networth-info-icon",title:c,style:"margin-left: 6px;"})
;l.appendChild(u),
l.appendChild(d).insertAdjacentElement("beforeend",m),e.lastElementChild.removeAttribute("class"),
e.appendChild(l)}},8954:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0
}),e.dt=e.ft=void 0;const i=n(6185);e.ft=t=>{const{step:e}=(0,i.F)(t)
;if("buyItem"!==e)return(0,i.R)({...(0,i.F)(t)})
;const n=(0,i.P)()?.match(/(shop|market)/g)?.[0],o={market:t=>{
const e=t.replace("step=buyItem","step=buyItemConfirm");return(0,i.R)({
...(0,i.F)(e),item:0})},shop:t=>{
const e=t.replace("step=buyItem","step=buyItemConfirm");return(0,i.R)({
...(0,i.F)(e),item:0})},noloc:t=>(0,i.R)({...(0,i.F)(t)})}
;return(o[n]??o.noloc)(t)},e.dt=t=>{new MutationObserver((e=>{e.forEach((e=>{
const n=(0,i.P)()?.match(/(shop|market)/g)?.[0],o=".items > li.show-item-info"
;Array.from(e.addedNodes).forEach((e=>{if(e.querySelector&&e.querySelector(o)){
if("shop"!==n)return;Array.from(t.querySelectorAll(o)).forEach((t=>{
t.querySelector(".buy .buy-link").dataset.price=t?.querySelector(".cost")?.innerText?.replace(",","")?.match(/\d+/)?.[0]
}))}}))}))})).observe(t,{childList:!0,subtree:!0})}},3424:(t,e,n)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.ht=void 0;const i=n(6185)
;e.ht=()=>{document.addEventListener("dblclick",(t=>{const e=t?.target
;if("INPUT"!==e?.tagName)return
;const n=e?.parentElement?.parentElement?.parentElement?.parentElement,o=(0,
i.m)(document?.querySelector(".travel-agency-market .availableItemsAmount")?.getAttribute("value")),a=(0,
i.m)(document.getElementById("user-money").innerText),r=(0,
i.m)(n?.querySelector(".cost .c-price").innerText),s=(0,
i.m)(n?.querySelector(".stock .stck-amount").innerText),c=a/r>=o?o:Math.trunc(a/r),l=Math.min(c,s).toString()
;(0,i.h)(e,l)}))}},1717:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0
}),e.bt=void 0;const i=n(6185),o=n(9607);let a;const r=t=>{
t?.querySelector("#nst-lastaction")||t.appendChild((0,i._)({id:"nst-lastaction",
innerText:"last action: "+a}))};e.bt=t=>{
a=(0,i.gt)(+t.user.lastAction.seconds).trim(),
(0,o.it)(r,'#profile-mini-root [class*="profile-mini-_userProfileWrapper"]')}},
763:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.vt=void 0
;const i=n(6185),o={a_good_day_to_get_hard:{
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
task:"Injure (P)'s both arms."},wrath_of_duke:{task:"Defeat 4 (P)."}};e.vt=t=>{
Array.from(t.querySelectorAll(".giver-cont-wrap > div[id^=mission]:not(.nst-edit)")).forEach((t=>{
if(!t?.querySelector)return
;const e=t?.querySelector(".title-black")?.childNodes[0].textContent.replace(/\n/g,"").trim(),n=e.toLowerCase().replaceAll(/[ -]/g,"_").replaceAll(/[:!,]/g,""),a=n in o?o?.[n]?.task:"mission not found",r=(0,
i.q)({innerHTML:"<br/><br/><b>todo:</b> "+a,classList:"text-nstmain"})
;t.querySelector(".max-height-fix")?.appendChild(r),t.classList.add("nst-edit")
}))}},3243:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0
}),e.wt=void 0;const i=n(6185),o=t=>{
const e=t?.querySelector(".total-price"),n=t?.querySelector(".action")
;(0,i.m)(e?.innerText)*i.minMugPerc>=i.mugThres&&n.classList.add("text-black","bg-nstmain")
};e.wt=t=>{new MutationObserver((t=>{t.forEach((t=>{
Array.from(t.addedNodes).forEach((t=>{
const e="LI"===t?.tagName,n=t?.firstElementChild;e&&n&&o(n)}))}))})).observe(t,{
childList:!0,subtree:!0
}),Array.from(document.querySelectorAll(".users-point-sell > li")).forEach((t=>o(t?.firstElementChild)))
}},8601:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.yt=void 0
;const n=t=>{if(t.classList.contains("yes"))return;t.classList.add("yes")
;const e=t?.getAttribute("href")?.replace(/=buy/g,"=buy1")?.replace(/=remove/g,"=remove1")?.replace(/&points=\d+$/g,"")
;t.setAttribute("href",e)};e.yt=t=>{new MutationObserver((t=>{t.forEach((t=>{
Array.from(t.addedNodes).forEach((t=>{
const e="LI"===t?.tagName,i=t?.firstElementChild;e&&i&&n(i)}))}))})).observe(t,{
childList:!0,subtree:!0
}),Array.from(document.querySelectorAll(".users-point-sell > li")).forEach((t=>n(t?.firstElementChild)))
}},2718:function(t,e,n){var i=this&&this.__importDefault||function(t){
return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{
value:!0}),e.kt=void 0;const o=i(n(246)),a=n(6185),r=t=>{t.stopPropagation()
;const e=t.target.closest("#nst-quick-use").parentElement.getAttribute("data-itemID")
;if(!e)return;const n=(0,a.T)(a.qfs);Object.keys(n).includes(e)&&(async t=>{
const e=document.getElementById("nst-item-resp");if(e){
for(;e.lastChild;)e.removeChild(e.lastChild);(async(t,e)=>{const{id:n}=t,i={
step:"useItem",itemID:n,fac:"1"};if(!i)return
;const o="https://www.torn.com/item.php?rfcv="+(0,a.W)(),r={method:"POST",
headers:{"x-requested-with":"XMLHttpRequest"},body:new URLSearchParams(i)
},s=await(await fetch(o,{...r})).json(),c=s.links??{},l=s.text??{},u=(0,a._)({})
;u.appendChild((0,a.nt)({innerHTML:l}));const d=(0,a.nt)({})
;Object.values(c).forEach((t=>{const e=(0,a.ct)({
classList:"t-blue h m-left10 "+t.class,href:t.url,innerText:t.title})
;t.attr.split(/\s+/).forEach((t=>{
const n=t.split("=")[0].toString(),i=t.split("=")[1].toString()
;e.setAttribute(n,i)})),d.appendChild(e)
})),u.appendChild(d),e.appendChild(u),e.classList.remove("nstGreen"),
e.classList.remove("nstBold");const m=e.querySelector(".counter-wrap")
;if(!m)return
;const f=1e3*+(m.getAttribute("data-time")||0),p=Math.floor(f/864e5),h=Math.floor(f%864e5/36e5)+24*p,b=Math.floor(f%36e5/6e4),g=Math.floor(f%6e4/1e3)
;m.innerText=`${h}:${b}:${g}`})(t,e),e.classList.remove("hidden")}})(n[e])
},s=t=>{t.stopPropagation(),t.preventDefault()
;const e=t.target.closest("#nst-quick-use").parentElement.getAttribute("data-itemID")
;if(!e)return;const n=(0,a.T)(a.qfs)
;Object.keys(n).includes(e)&&(delete n[e],(0,a.I)({[a.qfs]:n}),c())},c=()=>{
const t=document.getElementById("nst-"+a.qfs);if(t){
for(;t.lastChild;)t.removeChild(t.lastChild)
;Object.values((0,a.T)(a.qfs)).forEach((e=>((t,e)=>{
const{id:n,name:i,quantity:o}=t,c=`/images/items/${n}/medium.png`,l=(0,a._)({
classList:"nst-box-btn-div"})
;l.setAttribute("data-itemID",n),l.setAttribute("data-qty",o);const u=(0,a.V)({
id:"nst-quick-use",classList:"nst-box-button"}),d=(0,a.xt)({src:c,alt:i,
classList:"nst-box-img"}),m=(0,a.q)({id:"nst-quick-name",innerText:i
}),f=(0,a.q)({id:"nst-quick-close",classList:"nst-box-close",innerText:"✕"})
;u.addEventListener("click",r),
f.addEventListener("click",s),u.appendChild(d),u.appendChild(m),
u.appendChild(f),l.appendChild(u),e.appendChild(l)})(e,t))),new o.default(t,{
animation:150,dataIdAttr:"data-itemid",store:{get:()=>{const t=(0,a.T)(a.qfs)
;return Object.entries(t).sort(((t,e)=>t[1].order-e[1].order)).map((t=>t[0]))},
set:t=>{const e=t.toArray(),n=(0,a.T)(a.qfs)
;e.forEach((t=>n[t].order=e.indexOf(t))),(0,a.I)({[a.qfs]:n})}}})}},l=t=>{
t.stopPropagation(),t.preventDefault()
;const{target:e}=t,n=e?.closest(".name"),i=n?.closest("li")?.querySelector("img"),o=(0,
a.m)(i.getAttribute("src")).toString(),r=n?.innerText.replace(/ x\d+$/,"").replace(/[ ]*Blood Bag[ :]*/,"").replace(/[ ]*Bottle of[ :]*/,"").replace(/[ ]*First Aid[ :]*/,"").replace(/[ ]*Lawyer's Business Card[ :]*/,"LBC").replace(/[ ]*Can of[ :]*/,"")
;if(!o)return;const s=(0,a.T)(a.qfs);if(Object.keys(s).includes(o))return
;const l=0===Object.values(s)?.length?0:+Object.values(s).reduce(((t,e)=>t?.order>e?.order?t:e))?.order??0
;s[o]={id:o,order:l+1,name:r},(0,a.I)({[a.qfs]:s}),c()},u={box:t=>{
const e=(0,a.K)({title:a.qft,element:t});e?.parentElement?.appendChild((0,a._)({
id:"nst-item-resp",classList:"nst-box-row hidden"})),c()},item:t=>{
Array.from(t.querySelectorAll("div.name")).forEach((t=>t.addEventListener("dblclick",l)))
},nopager:()=>{}};e.kt=t=>{new MutationObserver((t=>{t.forEach((t=>{
const e=Array.from(t.addedNodes);e?.length>0&&e.forEach((t=>{
const e="faction-armoury-tabs"===t?.id,n=RegExp("armoury-(medical|drugs|boosters)","g"),i=t?.parentElement?.id?.match(n)&&"UL"===t.tagName&&t.classList.contains("item-list")
;u[e?"box":i?"item":"nopager"](t)}))}))})).observe(t,{childList:!0,subtree:!0})}
},6215:function(t,e,n){var i=this&&this.__importDefault||function(t){
return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{
value:!0}),e._t=void 0
;const o=i(n(246)),a=n(6185),r=["Primary","Secondary","Melee","Temporary"],s=["Medical","Drug","Energy Drink","Alcohol","Candy","Booster","Supply Pack",...r],c=t=>{
t.stopPropagation()
;const e=t.target.closest("#nst-quick-use").parentElement.getAttribute("data-itemID")
;if(!e)return;const n=(0,a.T)(a.qis);Object.keys(n).includes(e)&&(async t=>{
const{category:e}=t,n=document.getElementById("nst-item-resp");if(n){
for(;n.lastChild;)n.removeChild(n.lastChild);r.includes(e)?await(async(t,e)=>{
const{id:n,strangeID:i}=t,o={step:"actionForm",item_id:n,type:5,action:"equip",
item:n,id:i,confirm:1};if(!o)return
;const r="https://www.torn.com/item.php?rfcv="+(0,a.W)(),s={method:"POST",
headers:{"x-requested-with":"XMLHttpRequest"},body:new URLSearchParams(o)
},c=await(await fetch(r,{...s})).text()
;e.innerHTML=c,c?.match(/ equipped/)?e.classList.add("text-nstgreen"):e.classList.remove("text-nstgreen")
})(t,n):await(async(t,e)=>{const{id:n}=t,i={step:"useItem",itemID:n,item:n}
;if(!i)return;const o="https://www.torn.com/item.php?rfcv="+(0,a.W)(),r={
method:"POST",headers:{"x-requested-with":"XMLHttpRequest"},
body:new URLSearchParams(i)},s=await(await fetch(o,{...r
})).json(),c=s.links??{},l=s.text??{},u=(0,a._)({});u.appendChild((0,a.nt)({
innerHTML:l}));const d=(0,a.nt)({});Object.values(c).forEach((t=>{
const e=(0,a.ct)({classList:"t-blue h m-left10 "+t.class,href:t.url,
innerText:t.title});t.attr.split(/\s+/).forEach((t=>{
const n=t.split("=")[0].toString(),i=t.split("=")[1].toString()
;e.setAttribute(n,i)})),d.appendChild(e)
})),u.appendChild(d),e.appendChild(u),e.classList.remove("nstGreen"),
e.classList.remove("nstBold");const m=e.querySelector(".counter-wrap")
;if(!m)return
;const f=1e3*+(m.getAttribute("data-time")||0),p=Math.floor(f/864e5),h=Math.floor(f%864e5/36e5)+24*p,b=Math.floor(f%36e5/6e4),g=Math.floor(f%6e4/1e3)
;m.innerText=`${h}:${b}:${g}`})(t,n),n.classList.remove("hidden")}})(n[e])
},l=t=>{t.stopPropagation(),t.preventDefault()
;const e=t.target.closest("#nst-quick-use").parentElement.getAttribute("data-itemID")
;if(!e)return;const n=(0,a.T)(a.qis)
;Object.keys(n).includes(e)&&(delete n[e],(0,a.I)({[a.qis]:n}),u())},u=()=>{
const t=document.getElementById("nst-"+a.qis);if(t){
for(;t.lastChild;)t.removeChild(t.lastChild)
;Object.values((0,a.T)(a.qis)).forEach((e=>((t,e)=>{
const{id:n,name:i,quantity:o}=t,r=`/images/items/${n}/medium.png`,s=(0,a._)({
classList:"nst-box-btn-div"})
;s.setAttribute("data-itemID",n),s.setAttribute("data-qty",o);const u=(0,a.V)({
id:"nst-quick-use",classList:"nst-box-button"}),d=(0,a.xt)({src:r,alt:i,
classList:"nst-box-img"}),m=(0,a.q)({id:"nst-quick-name",innerText:i
}),f=(0,a.q)({id:"nst-quick-close",classList:"nst-box-close",innerText:"✕"})
;u.addEventListener("click",c),
f.addEventListener("click",l),u.appendChild(d),u.appendChild(m),
u.appendChild(f),s.appendChild(u),e.appendChild(s)})(e,t))),new o.default(t,{
animation:150,dataIdAttr:"data-itemid",store:{get:()=>{const t=(0,a.T)(a.qis)
;return Object.entries(t).sort(((t,e)=>t[1].order-e[1].order)).map((t=>t[0]))},
set:t=>{const e=t.toArray(),n=(0,a.T)(a.qis)
;e.forEach((t=>n[t].order=e.indexOf(t))),(0,a.I)({[a.qis]:n})}}})}},d=t=>{
t.stopPropagation(),t.preventDefault();const e=t.target
;if(!/name-wrap/.test(e.className))return
;const n=e.closest("li"),i=n?.dataset?.item,o=n?.dataset?.qty,r=n?.dataset?.category??"",c=n?.querySelector('.cont-wrap ul [class*="equipped"]')?.getAttribute("data-id")??"",l=n?.querySelector(".title-wrap .name-wrap .name"),d=l?.innerText?.replace(/[ ]*Blood Bag[ :]*/,"")?.replace(/[ ]*Bottle of[ :]*/,"")?.replace(/[ ]*First Aid[ :]*/,"")?.replace(/[ ]*Lawyer's Business Card[ :]*/,"LBC")?.replace(/[ ]*Can of[ :]*/,"")
;if(!(n&&i&&r&&s.includes(r)))return;const m=(0,a.T)(a.qis)
;if(Object.keys(m).includes(i))return
;const f=0===Object.values(m)?.length?0:+Object.values(m).reduce(((t,e)=>t?.order>e?.order?t:e))?.order??0
;m[i]={id:i,order:f+1,name:d,quantity:o,category:r,strangeID:c},(0,a.I)({
[a.qis]:m}),u()};e._t=t=>{
const e=t?.parentElement,n=e?.querySelector("div.equipped-items-wrap"),i=(0,
a.K)({title:a.qit,element:n});i?.parentElement?.appendChild((0,a._)({
id:"nst-item-resp",classList:"nst-box-row hidden"
})),u(),new MutationObserver((t=>{t.forEach((t=>{
const e=t.target,n=Array.from(t.addedNodes)
;n?.length>0&&"UL"===e?.nodeName&&"category-wrap"==e?.parentElement?.id&&null==t?.previousSibling&&n.forEach((t=>{
const e=t?.dataset?.item;e&&t.addEventListener("dblclick",d)}))}))
})).observe(t,{childList:!0,subtree:!0})}},3840:(t,e,n)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.Lt=void 0
;const i=n(6185),o=(t,e)=>{
const{item:n,selector:o,reg:a}=e,r=(0,i.T)("quick"+n)??!1,s=t?.parentElement,c=s.querySelector("a."+o),l=c?.getAttribute("href")
;if(!c||!l)return
;const u=RegExp(a+"$","g"),d=RegExp(a+"1$","g"),m=r?l.replace(u,a+"1"):l.replace(d,a)
;c.setAttribute("href",m)},a=t=>{
const e=+((0,i.T)("jailscore")??"0"),n=t?.parentElement,a=t.querySelector("span.time").innerText.split(" ").reduce(((t,e)=>t+(/h/.test(e)?60*+e.replace(/h/g,""):/m/.test(e)?+e.replace(/m/g,""):0)),0),r=(0,
i.m)(t.querySelector("span.level").innerText.match(/\d+/g)?.join())*a
;t.setAttribute("title","score: "+(0,i.L)(r));const s=r>e&&0!==e
;n.style.display=s?"none":"",o(t,{item:"bail",selector:"bye",reg:"buy"}),o(t,{
item:"bust",selector:"bust",reg:"breakout"})},r=t=>{const e=document,n=t.target
;(0,i.I)({[n.value]:n.checked});const o=e.querySelectorAll("span.info-wrap")
;Array.from(o).forEach((t=>a(t)))};e.Lt=t=>{(t=>{const e=(0,i.K)({
title:"Quick Jail",element:t?.parentElement}),n=(0,i._)({
classList:"nst-box-column"}),o=(0,i._)({classList:"nst-box-column"})
;e.appendChild(n),e.appendChild(o),(0,i.Ot)({elem:n,title:"Jail Score",
cback:()=>{const e=t.querySelectorAll("span.info-wrap")
;Array.from(e).forEach((t=>a(t)))}});const s="Quick Bust",c=(0,i.Mt)(s),l={
id:"nst-"+c,type:"checkbox",value:c,checked:(0,i.T)(c)??!1}
;o.appendChild((0,i.Y)(l,s,"",r));const u="Quick Bail",d=(0,i.Mt)(u),m={
id:"nst-"+d,type:"checkbox",value:d,checked:(0,i.T)(d)??!1}
;o.appendChild((0,i.Y)(m,u,"",r))})(t),new MutationObserver((t=>{t.forEach((t=>{
Array.from(t.addedNodes).forEach((t=>{if("LI"!==t.tagName)return
;const e=t.querySelector("span.info-wrap");e&&a(e)}))}))})).observe(t,{
childList:!0,subtree:!0})}},2957:(t,e,n)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.jt=void 0;const i=n(6185)
;e.jt=t=>{t=t.parentElement
;const{refills:{energy_refill_used:e,nerve_refill_used:n}}=(0,i.T)("userdata")
;Object.values({energy:{name:"energy",
selector:"[class*='bar'][class*='energy']",link:"https://www.torn.com/gym.php",
refillUsed:e},nerve:{name:"nerve",selector:"[class*='bar'][class*='nerve']",
link:"https://www.torn.com/crimes.php",refillUsed:n}}).forEach((e=>{
const{name:n,selector:i,link:o,refillUsed:a}=e,r=i+' p[class^="bar-name"]',s=t?.querySelector(r),c=s?.parentElement?.parentElement
;c?.removeAttribute("href"),
c?.addEventListener("click",(()=>window.open(o,"_blank")))
;const l="energy"===n?"text-nstgreen":"nerve"===n?"text-nstred":""
;a||s?.classList.add(l)}))}},8292:(t,e)=>{Object.defineProperty(e,"__esModule",{
value:!0}),e.Dt=void 0,e.Dt=t=>t?.remove()},263:(t,e)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.Tt=void 0;const n=t=>{
const e=t.getAttribute&&"true"==t.getAttribute("contenteditable")
;t.textContent&&!e&&(t.textContent=t.textContent.replaceAll("Natural Selection","NS"))
},i=t=>{3==t.nodeType&&n(t);let e=t?.firstChild;for(;e;)3==e.nodeType?n(e):i(e),
e=e.nextSibling};e.Tt=t=>{i(t);const e=document.querySelector("#map")
;e&&new MutationObserver((t=>{t.forEach((t=>{
Array.from(t.addedNodes).forEach((t=>i(t))),"attributes"==t.type&&i(t.target)}))
})).observe(e,{childList:!0,subtree:!0,attributes:!0})}},7052:(t,e,n)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.It=void 0;const i=n(6185),o={
amarket:()=>{new MutationObserver((t=>{t.forEach((t=>{
Array.from(t.addedNodes).forEach((t=>{
if("LI"!==t?.tagName||!t?.firstElementChild?.classList?.contains("item-cont-wrap"))return
;const e=Array.from(t.querySelectorAll(".bonus-attachment-icons"))
;if(0===e.length)return;let n="";e.forEach((t=>{
const i=t?.title,o=i?.match(/(?<=>)[\w\s-]+(?=<)/)?.[0]??"FAIL",a=i?.match(/\d+(?=(%| turns))/)?.[0]??"XX"
;n+=`${a}${/disarm/.test(o.toLowerCase())?"T":"%"} ${o}`,
1!==e.length&&(n+="<br />")})),t.querySelector("p.t-gray-6").innerHTML=n}))}))
})).observe(document.documentElement,{childList:!0,subtree:!0})},bazaar:()=>{
new MutationObserver((t=>{t.forEach((t=>{Array.from(t.addedNodes).forEach((t=>{
if(!/(itemsContainner|row)/.test(t.className)||t.querySelector(".nst-edit"))return
;const e=Array.from(t.querySelectorAll('[class*="iconBonuses"] > div > i'))
;0!==e.length&&e.forEach((t=>{
const e="radiation"===t.className.split("-")[3]?"radiation":t.className.split("-")[2],n="full"===e?"EOD":"negative"===e?"Delta":"sentinel"===e?"defense":"vanguard"===e?"dex":e,o=t?.parentElement?.parentElement
;o?.setAttribute("style","float:left;right:0px;top:3px;padding-left:5px;display:inline-block;white-space:nowrap;"),
o.classList.add("nst-edit"),t?.parentElement?.appendChild((0,i.q)({innerText:n
})),t?.parentElement?.appendChild((0,i.et)("br",{}))}))}))}))
})).observe(document.documentElement,{childList:!0,subtree:!0})},
displaycase:t=>{
const e=Array.from(t.querySelectorAll(".bonus-attachment-icons"))
;if(0===e.length)return;let n="";e.forEach((t=>{n=""
;const e=t?.title,i=e?.match(/(?<=>)[\w\s-]+(?=<)/)?.[0]??"FAIL",o=e?.match(/\d+(?=(%| turns))/)?.[0]??"XX"
;n+=`${o}${/disarm/.test(i.toLowerCase())?"T":"%"} ${i}`,
t.setAttribute("style","float:left;white-space: nowrap;right: 0px;top:-40px"),
t.appendChild(Object.assign(document.createElement("span"),{innerText:n
})),t?.insertAdjacentElement("afterend",document.createElement("br"))}))}}
;e.It=t=>o[(0,i.St)()](t)},2268:function(t,e,n){
var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{
default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.Pt=void 0
;const o=i(n(246)),a=n(488),r=n(6185),s=async()=>{
const t=document.getElementById("nst-ts-message"),e=document.getElementById("nst-tsapikey")
;if(!t||!e)return;const n=e.value
;if(t.innerText="",19!==n?.length)return t.classList.remove("text-nstgreen"),
void(t.innerText="Invalid Key Length");const i=await(0,r.Et)({api:n,selection:""
})
;if(!i?.status)return t.classList.remove("text-nstgreen"),void(t.innerText="Invalid Key")
;(0,r.I)({tsapikey:n}),t.classList.add("text-nstgreen"),t.innerText="Key Saved"
},c=async()=>{
const t=document.getElementById("nst-message"),e=document.getElementById("nst-apikey")
;if(!t||!e)return;const n=e.value
;if(t.innerText="",16!==n?.length)return t.classList.remove("text-nstgreen"),
void(t.innerText="Invalid Key Length");const i={section:"user",select:"profile",
api:n},o=await(0,r.p)(i);return o?.status?((0,r.I)({apikey:n
}),(0,r.At)(o)?((0,r.I)({userdata:o
}),t.classList.add("text-nstgreen"),t.innerText="Login Successful",
void u()):((0,
r.qt)("nstdata"),t.classList.remove("text-nstgreen"),void(t.innerText="You are not allowed, contact seintz[2460991]"))):(t.classList.remove("text-nstgreen"),
void(t.innerText=o?.error))},l=async()=>{
confirm("Are you sure you want to reset?")&&((0,
r.qt)("nstdata"),window.location.reload())},u=()=>{if(!(0,r.At)())return
;(0,a.D)();const t=document.querySelector("#nst-ul-main")
;b(t,"tsapi",f),b(t,"attack",m)
;const e=(0,r.T)("script"),n=Object.keys(e).sort().reduce(((t,n)=>(t[n]=e?.[n],
t)),{})
;Object.values(n).map((t=>t.onpage)).filter((t=>void 0!==t)).filter(((t,e,n)=>n.indexOf(t)==e)).sort().forEach((e=>b(t,e,d)))
},d=t=>{const e=document.getElementById(t);if(!e)return;e.innerHTML=""
;const n=t.replace(/nst-/g,""),i=(0,
r.T)("script"),o=Object.keys(i).sort().reduce(((t,e)=>(i?.[e]?.onpage===n&&(t[e]=i?.[e]),
t)),{}),a=(0,r._)({classList:"nst-script-block"})
;Object.entries(o).forEach((([t,e])=>{const n=e?.name,i=(0,r.Mt)(t),o={
id:"nst-"+i,value:i,checked:e?.enabled??!1
},s=(0,r.Y)(o,n,e.description.toLowerCase(),(t=>{
const e=t.target,n=(0,r.T)("script");n[e.value].enabled=e.checked,(0,r.I)({
script:n})}));a.appendChild(s)})),e.appendChild(a)},m=t=>{
const e=document.getElementById(t);e&&(e.innerHTML="",e.appendChild((()=>{
const t=(0,r._)({classList:"nst-block"}),e=(0,r.et)("h4",{
classList:"nst-block-title",innerText:"mug threshold"});return t.appendChild(e),
(0,r.Ot)({elem:t,title:"mug threshold"}),t})()),e.appendChild((()=>{
const t=(0,r._)({classList:"nst-block"}),e=(0,r.et)("h4",{
classList:"nst-block-title",innerText:"default outcome"}),n=(0,r._)({
id:"outcome",classList:"nst-outcome"});n.addEventListener("change",(t=>{
const e=t.target.id;(0,r.I)({outcome:e})}))
;const i=(0,r.J)("leave","outcome"),o=(0,
r.J)("mug","outcome"),a=(0,r.J)("hospitalize","outcome"),s={id:"nst-hold",
checked:(0,r.T)("hold")},c=(0,r.Y)(s,"hold","",(t=>{const e=t.target.checked;(0,
r.I)({hold:e})}))
;return n.appendChild(i),n.appendChild(o),n.appendChild(a),t.appendChild(e),
t.appendChild(n),t.appendChild(c),t})()),e.appendChild((()=>{
const t=(0,r.T)("weapon"),e=(0,r._)({classList:"nst-block"}),n=(0,r.et)("h4",{
classList:"nst-block-title",innerText:"weapon order"}),i=(0,r._)({id:"weapon"})
;Object.keys(t).forEach((t=>{const e=(0,r._)({id:t,classList:"list-group-item",
innerText:t});e.setAttribute("data-id",t),i.appendChild(e)})),new o.default(i,{
animation:150,store:{get:()=>{const t=(0,r.T)("weapon"),e=["","","",""]
;return Object.entries(t).forEach((t=>e[t[1]]=t[0])),e},set:t=>{
const e=t.toArray(),n=(0,r.T)("weapon")
;e.forEach((t=>n[t]=e.indexOf(t))),(0,r.I)({weapon:n})}}});const a={
id:"nst-temp",checked:(0,r.T)("temp")},s=(0,r.Y)(a,"use temp first","",(t=>{
const e=t.target.checked;(0,r.I)({temp:e})})),c={id:"nst-assa",
checked:(0,r.T)("assaperk")},l=(0,r.Y)(c,"assassinate","",(t=>{
const e=t.target.checked;(0,r.I)({assaperk:e})}))
;return e.appendChild(n),e.appendChild(i),e.appendChild(s),e.appendChild(l),e
})()),e.appendChild((()=>{const t=(0,r._)({classList:"nst-block"
}),e=(0,r.et)("h4",{classList:"nst-block-title",innerText:"weapon reload"
}),n=(0,r._)({id:"reload",classList:"nst-outcome"}),i={id:"nst-reloadone",
checked:(0,r.T)("reloadone")},o=(0,r.Y)(i,"primary","",(t=>{
const e=t.target.checked;(0,r.I)({reloadone:e})})),a={id:"nst-reloadtwo",
checked:(0,r.T)("reloadtwo")},s=(0,r.Y)(a,"secondary","",(t=>{
const e=t.target.checked;(0,r.I)({reloadtwo:e})}))
;return n.appendChild(o),n.appendChild(s),t.appendChild(e),t.appendChild(n),t
})()))},f=t=>{const e=document.getElementById(t);if(!e)return;e.innerHTML=""
;const n=(0,r.ct)({href:"https://www.tornstats.com/settings/general",
target:"_blank",innerText:"here",classList:"text-nstmain font-bold"
}),i=(0,r._)({classList:"text-base"})
;i.innerHTML="Create your TS key ",i.appendChild(n);const o=(0,r._)({
classList:"nst-api-wrap"}),a=(0,r._)({classList:"nst-block"
}).appendChild((0,r.q)({id:"nst-ts-message",classList:"nst-message"
})),c="tsapikey",l=(0,r.et)("input",{id:"nst-"+c,type:"password",
classList:"nst-input m-2",maxLength:19,required:!0,value:(0,r.T)(c)??""
}),u=(0,r.V)({id:"nst-tslogin",classList:"torn-btn m-2",innerText:"save"})
;u.addEventListener("click",s),
o.appendChild(i),o.appendChild(a),o.appendChild(l),
o.appendChild(u),e.appendChild(o)},p=t=>{const e=document.getElementById(t)
;if(!e)return;e.innerHTML="";const n=(0,r.ct)({
href:"https://www.torn.com/preferences.php#tab=api",target:"_blank",
innerText:"limited",classList:"text-nstyellow font-bold"}),i=(0,r.ct)({
href:"https://www.torn.com/preferences.php#tab=api?&step=addNewKey&title=nst&type=3",
target:"_blank",innerText:"create",classList:"text-nstmain font-bold"
}),o=(0,r._)({classList:"text-base"})
;o.innerHTML="Enter a ",o.appendChild(n),o.innerHTML+=" apikey or ",
o.appendChild(i),o.innerHTML+=" one ad-hoc";const a=(0,r._)({
classList:"nst-api-wrap"}),s=(0,r._)({classList:"nst-block"
}).appendChild((0,r.q)({id:"nst-message",classList:"nst-message"
})),u="apikey",d=(0,r.et)("input",{id:"nst-"+u,type:"password",
classList:"nst-input m-2",maxLength:16,required:!0,value:(0,r.T)(u)??""
}),m=(0,r.V)({id:"nst-login",classList:"torn-btn m-2",innerText:"save"
}),f=(0,r.V)({id:"nst-reset",classList:"torn-btn m-2",innerText:"reset"})
;m.addEventListener("click",c),
f.addEventListener("click",l),a.appendChild(o),a.appendChild(s),
a.appendChild(d),a.appendChild(m),a.appendChild(f),e.appendChild(a)},h=t=>{
const e=t.target,n=e.id,i=e?.closest("#nst-menu-body"),o=e,a=i?.querySelector(".nst-menu-sel"),r=i?.querySelector(".nst-menu-active"),s=i?.querySelector("#"+n.replace(/-li/g,""))
;a?.classList.remove("nst-menu-sel"),
r?.classList.remove("nst-menu-active"),r?.classList.toggle("hidden"),
o?.classList.add("nst-menu-sel"),
s?.classList.add("nst-menu-active"),s?.classList.toggle("hidden")
},b=(t,e,n=(()=>{}))=>{
const i=t?.parentElement,o="nst-"+e.toLowerCase(),a=o+"-li",s=(0,r.N)({id:a,
classList:"nst-menu-page",innerText:e})
;i.querySelector("#"+o)||i.querySelector("#"+a)||(t.appendChild(s),
i.appendChild((0,r._)({id:o,classList:"nst-menu-item hidden"
})),s.addEventListener("click",h),n(o))},g=()=>{
const t=document?.querySelector(".content-wrapper.spring"),e=t?.style?.display
;t.style.display="none"===e?"":"none",
document?.getElementById("nst-menu")?.remove(),"none"===t.style.display&&(t=>{
const e=(0,r._)({id:"nst-menu",classList:"nst-menu"}),n=(0,r._)({
id:"nst-menu-wrap",classList:"nst-menu-wrap "}),i=(0,r._)({id:"nst-menu-title",
classList:"nst-menu-title"}),o=(0,r._)({id:"nst-menu-body",
classList:"nst-menu-body"});i.appendChild((0,r.q)({classList:"nst-logo"
})).appendChild((0,r.et)("b",{innerText:"NST"}))
;const a=o.appendChild((0,r.et)("ul",{id:"nst-ul-main",classList:"nst-ul-main"
}))
;n.appendChild(i),n.appendChild(o),e.appendChild(n),t.insertAdjacentElement("beforebegin",e),
b(a,"api",p)
;const s=o.querySelector("#nst-api-li"),c=o.querySelector("#nst-api")
;s?.classList.add("nst-menu-sel"),
c?.classList.add("nst-menu-active"),c?.classList.toggle("hidden"),u()})(t)}
;e.Pt=t=>{
const e=document.getElementById("nst-icon"),n=t.querySelector('ul[class^="status-icon"]')
;if(e||!n)return;const i=(0,r.N)({id:"nst-icon",classList:"nst-icon"})
;n.insertAdjacentElement("afterbegin",i).addEventListener("click",g)}},
8527:function(t,e,n){var i=this&&this.__importDefault||function(t){
return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{
value:!0}),e.zt=void 0;const o=i(n(246)),a=n(6185),r=(0,a.k)("XID")
;e.zt=async t=>{(t=>{const e=t?.closest(".profile-wrapper"),n=(0,a.K)({
title:"Stat Spies",element:e}),i=(0,a._)({id:"nst-compare",
classList:"nst-box-column"}),o=(0,a._)({id:"nst-spies",
classList:"nst-box-column item-start"});i.appendChild((0,a.et)("table",{
id:"nst-compare-table",classList:"nst-table"})),o.appendChild((0,a.et)("table",{
id:"nst-spies-table",classList:"nst-table"})),o.appendChild((0,a.et)("table",{
id:"nst-avg-table",classList:"nst-table"})),n.appendChild(i),n.appendChild(o)
})(t);const e=await(0,a.Et)({selection:"/spy/user/"+r})
;e?.status&&(e?.compare?.status&&(t=>{
const e=document.getElementById("nst-compare-table"),n=(0,a.et)("tr",{
classList:"nst-table-row text-center nst-nodrag"})
;e.appendChild(n),["Stat","Them","You"].forEach((t=>n.appendChild((0,
a.et)("th",{innerText:t,classList:"nst-table-cell nst-table-cell-head"
})))),Object.keys(t).forEach((n=>{const i=(0,a.et)("tr",{
classList:"nst-table-row"});i.setAttribute("data-id",n)
;const o=+t?.[n]?.amount,r=+t?.[n]?.difference,s=r>0?"text-nstgreen":r<0?"text-nstred":"text-nsttorntext",c=(0,
a.et)("td",{innerText:""+n,classList:"nst-table-cell text-nsttorntext"
}),l=(0,a.et)("td",{innerText:""+(0,a.L)(o),
classList:"nst-table-cell text-nsttorntext"}),u=(0,a.et)("td",{
innerText:""+(0,a.L)(o+r),classList:"nst-table-cell"})
;u.classList.add(s),i.appendChild(c),
i.appendChild(l),i.appendChild(u),e.appendChild(i)})),new o.default(e,{
animation:150,filter:".nst-nodrag",store:{
get:()=>(0,a.T)("tscompare")??Object.keys(t),set:t=>(0,a.I)({
tscompare:t.toArray()})}});const i=(0,a.et)("tr",{
classList:"nst-table-row nst-nodrag text-center"}),r=(0,a.et)("td",{
classList:"nst-table-cell",colSpan:3}),s=(0,a.ct)({
href:"https://www.tornstats.com/settings/script",target:"_blank",
classList:"t-blue nst-nodrag",innerText:"Change your script settings here"})
;r.appendChild(s),i.appendChild(r),e.appendChild(i)
})(e?.compare?.data),e?.spy?.status&&(t=>{
const e=document.getElementById("nst-spies-table"),n=(0,a.et)("tr",{
classList:"nst-table-row text-center"})
;e.appendChild(n),["Stat","Them","You"].forEach((t=>n.appendChild((0,
a.et)("th",{innerText:t,classList:"nst-table-cell nst-table-cell-head"
})))),["Strength","Defense","Speed","Dexterity","Total"].forEach((n=>{
const i=+t?.[n.toLowerCase()],o=+t?.["delta"+n],r=o>0?"text-nstgreen":o<0?"text-nstred":"text-nsttorntext",s=(0,
a.et)("tr",{classList:"nst-table-row"}),c=(0,a.et)("td",{innerText:""+n,
classList:"nst-table-cell text-nsttorntext"}),l=(0,a.et)("td",{
innerText:""+(0,a.L)(i),classList:"nst-table-cell text-nsttorntext"
}),u=(0,a.et)("td",{innerText:""+(0,a.L)(i+o),classList:"nst-table-cell"})
;u.classList.add(r),
s.appendChild(c),s.appendChild(l),s.appendChild(u),e.appendChild(s)}))
;const i=(0,a.et)("tr",{classList:"nst-table-row nst-nodrag text-center"}),o=(0,
a.et)("td",{classList:"nst-table-cell text-nsttorntext",colSpan:3,
innerText:"Last Update: "+(t?.difference??"")})
;i.appendChild(o),e.appendChild(i)})(e?.spy))}},8990:(t,e,n)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.$t=void 0
;const i=n(6185),o=(0,i.k)("user2ID")??"";e.$t=async t=>{
if(document.querySelector("#nst-target-status"))return;const e={section:"user",
select:"",objID:o},n=await(0,i.p)(e);if(!n?.status)return
;const a=n?.states?.hospital_timestamp,r=n?.last_action?.timestamp,s=n?.life?.maximum,c=n?.life?.current,l=1===n?.revivable,u=0!==Object.values(n?.basicicons).filter((t=>t.includes("Territory War"))).length,d=(0,
i.gt)(Date.now()/1e3-r),m=(0,i.gt)(a-Date.now()/1e3),f=(0,i._)({
id:"nst-target-status",classList:"nst-status-wrap"}),p=(0,i._)({
classList:"nst-status-middle"}),h=(0,i._)({classList:"nst-status-middle"}),b=(0,
i._)({id:"nst-status-life",classList:"nst-status-item",
innerText:`life: ${Math.floor(c/s*100)}%`}),g=(0,i._)({id:"nst-status-la",
classList:"nst-status-item",innerText:"la: "+d});g.setAttribute("data-time",r)
;const v=(0,i._)({id:"nst-status-hosp",classList:"nst-status-item",
innerText:"hosp: "+(""===m?"OUT":m)});v.setAttribute("data-time",a)
;const w=(0,i._)({id:"nst-status-wall",classList:"nst-status-item",
innerText:"wall: "+(u?"ON":"OFF")}),y=(0,i._)({id:"nst-status-rev",
classList:"nst-status-item",innerText:"rev: "+(l?"ON":"OFF")});p.appendChild(b),
p.appendChild(w),
p.appendChild(y),h.appendChild(v),h.appendChild(g),f.appendChild(p),
f.appendChild(h),t.appendChild(f),setInterval((()=>((t,e,n)=>{
const o=(0,i.m)(t.getAttribute("data-time")),a=(0,
i.m)(e.getAttribute("data-time")),r=(0,
i.gt)(Date.now()/1e3-o),s=(0,i.gt)(a-Date.now()/1e3)
;t.innerText="la: "+r,e.innerText="hosp: "+(""===s?"OUT":s)
;const c=document.querySelector('#defender [id^="player-health-value"')??document.querySelector('[id^="player-health-value"'),[l,u]=c.innerText.split(" / "),d=Math.floor((0,
i.m)(l)/(0,i.m)(u)*100);n.innerText=`life: ${d}%`})(g,v,b)),2e3)}},
4538:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Ct=void 0
;const i=n(6185);e.Ct=t=>{
const e=t?.querySelectorAll(".trade-cont .user.right li.color2 ul li")
;if(0===e.length)return;let n=0;const o=(0,i.T)("items")
;Array.from(e).forEach((t=>{
const e=t?.querySelector(".name"),i=e?.firstChild.textContent.trim(),{name:a,quantity:r}=(t=>{
const e=/^x\d+\s/.test(n=t)?"start":/\sx\d+$/.test(n)?"end":null;var n
;if(!e)return{name:t,quantity:1};const i=t.split(" "),o={start:0,end:i.length-1
}[e],a=i[o].substr(1),r=parseInt(a,10)
;return!e||isNaN(r)||r.toString().length!==a.length?{name:t,quantity:1}:{
name:i.filter(((t,e)=>e!==o)).join(" ").trim(),quantity:r}
})(i),s=Object.values(o).filter((t=>t.name===a))[0]
;n+=parseInt(s?.market_value)*r}));const a=(0,i._)({classList:"nst-trade-value",
innerText:"MV: $"+(0,i.L)(n)});t.insertAdjacentElement("beforebegin",a)}},
6185:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0
}),e.Nt=e.Ut=e.Bt=e.R=e.F=e.Ft=e.Rt=e.Ht=e.At=e.Gt=e.Xt=e.Et=e.p=e.u=e.h=e.K=e.Wt=e.Kt=e.Jt=e.Qt=e.J=e.Y=e.Ot=e.Yt=e.Vt=e.xt=e.ct=e.nt=e.N=e.V=e.q=e._=e.et=e.Zt=e.Mt=e.gt=e.te=e.ee=e.L=e.m=e.qt=e.I=e.T=e.ne=e.X=e.P=e.St=e.ie=e.k=e.W=void 0,
e.qfs=e.qft=e.qis=e.qit=e.mugThres=e.minMugPerc=void 0;const i=n(3376)
;e.W=()=>document.cookie.split("; ").find((t=>t.startsWith("rfc_v"))).split("=")[1],
e.k=t=>new URLSearchParams(window.location.search).get(t),
e.ie=()=>window.location.search.match(/\?sid=(\w+)/)?.[1],
e.St=()=>window.location.pathname.replace(/\//,"").replace(/\.php/,""),
e.P=()=>window.location.hash.replace(/#\/\w+=/g,""),
e.X=t=>!t||null==t||0===Object.keys(t).length,e.ne=t=>{try{return JSON.parse(t)
}catch(t){console.error(t)}return null},e.T=(t="")=>{let e;try{
e=JSON.parse(localStorage.getItem("nstdata"))}catch{e={}}
return""===t?e??{}:e?.[t]},e.I=t=>{const n=(0,e.T)()
;Object.entries(t).forEach((([t,e])=>n[t]=e)),
localStorage.setItem("nstdata",JSON.stringify(n))},e.qt=t=>{
localStorage.removeItem(t)
},e.m=t=>+(t+"").replace(/[^\d]/g,""),e.L=t=>Math.round(t).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),
e.ee=t=>{const e=["K","M","B","T","Q"];let n=Math.abs(t)
;if(n<1e3)return""+ +n.toFixed(2)
;for(let t=0;t<5;t++)if(n/=1e3,!(n>=1e3))return`${+n.toFixed(2)} ${e[t]}`
},e.te=t=>{const n=t.toLowerCase();let i=(0,e.m)(n),o=1
;return-1!==n.indexOf("k")?o=1e3:-1!==n.indexOf("m")?o=1e6:-1!==n.indexOf("b")?o=1e9:-1!==n.indexOf("t")&&(o=1e12),
i*=o,i>0?i.toLocaleString("en-US"):""},e.gt=t=>{let e=""
;const n=Math.floor(t/86400),i=Math.floor(t%86400/3600),o=Math.floor(t%3600/60),a=Math.floor(t%3600%60)
;return n>0&&(e+=n.toString().padStart(2,"0")+"d "),
i>0&&(e+=i.toString().padStart(2,"0")+"h "),
o>0&&(e+=o.toString().padStart(2,"0")+"m "),
a>0&&(e+=a.toString().padStart(2,"0")+"s"),""+e
},e.Mt=t=>t.toLowerCase().replace(/ /g,""),e.Zt=t=>{const e=t.replace(/ /g,"")
;return e.charAt(0).toLowerCase()+e.slice(1)
},e.et=(t,e)=>Object.assign(document.createElement(t),e),
e._=t=>(0,e.et)("div",t),
e.q=t=>(0,e.et)("span",t),e.V=t=>(0,e.et)("button",t),e.N=t=>(0,
e.et)("li",t),e.nt=t=>(0,
e.et)("p",t),e.ct=t=>(0,e.et)("a",t),e.xt=t=>(0,e.et)("img",t),
e.Vt=t=>(0,e.et)("input",t),e.Yt=t=>(0,e.et)("label",t),e.Ot=t=>{
const{elem:n,title:i,cback:o=(()=>{})}=t,a=(0,e.Mt)(i),r=(0,e._)({
classList:"nst-box-item"}),s=(0,e.et)("input",{id:"nst-"+a,type:"text",
classList:"nst-input",value:(0,e.L)(+((0,e.T)(a)??"0")),placeholder:a})
;return s.addEventListener("keyup",(t=>{const n=t.target,i=(0,e.m)(n.value)
;n.value=i.toLocaleString("en-US");const a=(0,e.Mt)(n.placeholder);(0,e.I)({
[a]:i}),o()})),r.appendChild(s),n.appendChild(r),r},e.Y=(t,n,i,o)=>{
const a=(0,e._)({classList:"nst-box-item"}),r=(0,e.Vt)({...t,type:"checkbox"
}),s={innerText:n,htmlFor:t?.id,title:i},c=(0,e.Yt)(s)
;return a.addEventListener("change",o),a.appendChild(r),a.appendChild(c),a
},e.J=(t,n)=>{const i=(0,e.T)("outcome").toString(),o=(0,e._)({
classList:"nst-box-item"}),a=(0,e.Vt)({id:t,type:"radio",name:n,value:t,
checked:i===t}),r=(0,e.Yt)({innerText:"hospitalize"===t?"hosp":t,htmlFor:t,
classList:""});return o.appendChild(a),o.appendChild(r),o
},e.Qt=(t,e)=>document?.getElementById(t)?.appendChild(e),
e.Jt=t=>document.body.appendChild(t),e.Kt=(t,e)=>{
const n=document?.getElementById(t)
;if(n&&n.parentElement)return n.parentElement.insertBefore(e,n)};const o=t=>{
const n=t.target.closest(".nst-box-header"),i=n.nextElementSibling;if(!i)return
;const o=n.querySelector("#nst-box-title").innerText,a=(0,
e.Mt)(o)+"Folded",r=i.classList.toggle("hidden");(0,e.I)({[a]:r})};e.Wt=t=>{
const n=(0,e._)({classList:"nst-box-header"});return n.appendChild((0,e.q)({
classList:"nst-box-title"})).appendChild((0,e.q)({id:"nst-box-title",innerText:t
})),n.addEventListener("click",o),n},e.K=t=>{const{element:n,title:i}=t
;if(!n)return
;const o=(0,e.Mt)(i),a=o+"Folded",r=(0,e.T)(a)?"nst-box-content hidden":"nst-box-content",s=(0,
e._)({classList:"nst-box"}),c=(0,e.Wt)(i),l=(0,e._)({classList:r})
;if(document.querySelector("#nst-"+o))return;const u=(0,e._)({id:"nst-"+o,
classList:"nst-box-row"})
;return l.appendChild(u),s.appendChild(c),s.appendChild(l),
n.insertAdjacentElement("beforebegin",s),u},e.h=(t,e)=>{
const n=new Event("input",{bubbles:!0})
;t.value=""+e,t.dispatchEvent(n),t.select()},e.u=(t,e)=>{
const n=new Event("input",{bubbles:!0
}),i=Object.getOwnPropertyDescriptor(t,"value")?.set,o=Object.getPrototypeOf(t),a=Object.getOwnPropertyDescriptor(o,"value")?.set
;i&&i!==a?a.call(t,e):i.call(t,e),t.dispatchEvent(n),t.select()},e.p=async t=>{
const{section:n,select:i,objID:o,api:r}=t,s="https://api.torn.com/"+n+`/${o??""}?selections=${i}`+`&key=${r??(0,
e.T)("apikey")}&comment=nst`,c=await a("GET",s),l=(0,e.Bt)()?c:c?.response
;return void 0!==l?.error?(console.error(l?.error?.error),
[2,10,13,18].includes(l?.error?.code)&&(0,e.qt)("nstdata"),{status:!1,
error:"broken key"}):{status:!0,...l}},e.Et=async t=>{
const{selection:n,api:i}=t,o=`https://www.tornstats.com/api/v2/${i??(0,
e.T)("tsapikey")??(0,
e.T)("apikey")}${n}`,r=await a("GET",o),s=(0,e.Bt)()?r:r?.response
;return void 0===s?.status||!1===s?.status?(console.error(s?.message,s),{
status:!1}):s},e.Xt=(t={})=>{const n=(0,e.X)(t)?(0,e.T)("userdata"):t;return{
oe:n?.player_id,ae:n?.faction?.faction_id}
},e.Gt=t=>t.toString(16),e.At=(t={})=>{const n=(0,e.T)("apikey")
;if(16!==n?.length)return!1
;const o=(0,e.X)(t)?(0,e.T)("userdata"):t,{oe:a,ae:r}=(0,e.Xt)(o)
;return!(0,e.X)(o)&&!!(0,i.t)((0,e.Gt)(r),(0,e.Gt)(a))},e.Ht=async()=>{
const t=(0,e.T)("apikey");if(16!==t?.length)return
;const n=(0,e.T)("userdata"),i=1e3*n?.timestamp??0;if(Date.now()-6e4<=i)return
;const o={section:"user",
select:"bars,basic,cooldowns,education,icons,money,networth,notifications,perks,profile,refills,timestamp,travel,newmessages,newevents,personalstats",
api:t},a=await(0,e.p)(o);if(!a?.status)return
;const r=a.merit_perks.filter((t=>t.includes("mug"))).join(),s=((0,
e.m)(r)/5+20)/400;if((0,e.I)({userdata:a}),(0,e.I)({mugperc:s
}),Date.now()-36e5<=i)return;const c={section:"torn",select:"items",api:t
},l=await(0,e.p)(c);if(!l?.status)return;const{items:u}=l
;Object.values(u).forEach((t=>delete t.description)),
Object.values(u).forEach((t=>delete t.image)),(0,e.I)({items:u})},e.Rt=(t="")=>{
if(!(0,e.At)())return!1;const n=(0,e.T)("script");if(""===t)return!0
;const i=n?.[t]?.enabled;return!!i},e.Ft=()=>{
const t=document?.body?.getAttribute("data-traveling"),e=document?.body?.getAttribute("data-abroad")
;return"false"==t&&"false"==e?"home":"true"==t&&"true"==e?"trav":"false"==t&&"true"==e?"abro":`${t}, ${e}`
},e.F=t=>t.split("&").reduce(((t,e)=>({...t,[e.split("=")[0]]:e.split("=")[1]
})),{}),
e.R=t=>Object.keys(t).map((e=>`${e}=${t[e]}`)).join("&"),e.Bt=()=>void 0!==window.flutter_inappwebview,
e.Ut=t=>{
(0,e.Bt)()||(XMLHttpRequest.prototype._original_send=XMLHttpRequest.prototype.send,
XMLHttpRequest.prototype.send=function(e){try{
if(!e)return this._original_send(e);const n=t(e)
;console.log("data",e),console.log("new_data",n),this._original_send(n)
}catch(t){console.error(t),this._original_send(e)}})},e.Nt=(t,n)=>{
if((0,e.Bt)())return;const{fetch:i}=unsafeWindow
;unsafeWindow.fetch=async(...e)=>{
const o=await i(...e),a=e[0]?.match(/(?<=step=|sid=)(\w+)/g)?.[0]
;if(!a||a!==n)return o;let r;try{r=await(o?.clone()?.json())}catch(t){
return console.error(e,t),o}return t(r),o}
},e.minMugPerc=+(0,e.T)("mugperc"),e.mugThres=(0,
e.m)((0,e.T)("mugthreshold")),e.qit="Quick Items",
e.qis=(0,e.Mt)(e.qit),e.qft="Quick Faction",e.qfs=(0,e.Mt)(e.qft)
;const a=(t,n,i={},o={})=>new Promise(((a,r)=>{
if((0,e.Bt)())"GET"===t&&PDA_httpGet(n).then((t=>a(JSON.parse(t.responseText)))).catch(r),
"POST"===t&&PDA_httpPost(n,i,o).then((t=>a(JSON.parse(t.responseText)))).catch(r);else{
const e={url:n,method:t,headers:i,data:o,responseType:"json",onload:a,onerror:r}
;GM.xmlHttpRequest(e)}}))},9607:(t,e)=>{Object.defineProperty(e,"__esModule",{
value:!0}),e.it=void 0,e.it=(t,e,n=!1)=>{const i=document?.querySelector(e)
;if(i&&(console.log("noobs "+e),t(i),!n))return;let o=!1
;const a=new MutationObserver((i=>{i.forEach((i=>{if(o)return
;const r=Array.from(i.addedNodes);for(const i of r){
if(!i?.querySelector)continue
;const r=i?.querySelector(e),s=i?.parentElement?.querySelector(e),c=r||s||!1
;if(c&&(console.log("obs "+e),t(c),!n)){o=!0,a.disconnect();break}}}))}))
;a.observe(document.documentElement,{childList:!0,subtree:!0})}}},e={}
;function n(i){var o=e[i];if(void 0!==o)return o.exports;var a=e[i]={id:i,
exports:{}};return t[i].call(a.exports,a,a.exports,n),a.exports}n.n=t=>{
var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{
for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,
get:e[i]})},n.o=(t,e)=>({}.hasOwnProperty.call(t,e)),n.r=t=>{
"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{
value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})
},n.nc=void 0,(()=>{n(4893)
;const t=n(6185),e=n(2268),i=n(9607),o=n(276),a=n(1913),r=n(5661),s=n(4051),c=n(3980),l=n(714),u=n(1108),d=n(9149),m=n(7188),f=n(7716),p=n(9355),h=n(2718),b=n(5689),g=n(1379),v=n(8620),w=n(8954),y=n(3424),k=n(763),x=n(3243),_=n(8601),L=n(6215),O=n(3840),M=n(2957),j=n(8292),D=n(263),T=n(7052),I=n(4538),S=n(1549),P=n(2470),E=n(1717),A=n(8527),q=n(8990),z=n(8257),$=n(6703),C={
home:()=>{
(0,t.Rt)("livenetworth")&&(0,i.it)(v.ut,'ul.info-cont-wrap [aria-label^="Networth"]'),
(0,t.Rt)("effectivestats")&&(0,i.it)(d.C,".battle")},abro:()=>{
(0,t.Rt)("maxbuyabroad")&&(0,i.it)(y.ht,"body")},trav:()=>{}},N={amarket:()=>{
(0,t.Rt)("rwbonusdisplay")&&(0,i.it)(T.It,"body")},bazaar:()=>{
(0,t.Rt)("rwbonusdisplay")&&(0,
i.it)(T.It,"body"),(0,t.Rt)("bazaarvalue")&&(0,i.it)(a.v,"#bazaarRoot .wrapper")
},city:()=>{},companies:()=>{},displaycase:()=>{},faction:()=>{},gym:()=>{
(0,t.Rt)("specialgym")&&((0,
t.Nt)(z.tt,"getInitialGymInfo"),(0,t.Nt)(z.Z,"train"))},index:()=>{},item:()=>{
(0,t.Rt)("equipnoconfirm")&&(0,t.Ut)(f.B)},imarket:()=>{
(0,t.Rt)("marketnoconfirm")&&(0,t.Ut)(w.ft)},loader:()=>{
(0,t.Rt)("intercept")&&"attack"===(0,t.ie)()&&(0,t.Nt)(P.st,"attackData")},
pmarket:()=>{},profiles:()=>{},search:()=>{},trade:()=>{},all:()=>{
(0,i.it)(e.Pt,"#sidebar"),
(0,t.Rt)("leftalign")&&(0,g.lt)(),(0,t.Rt)("minilastaction")&&(0,
t.Nt)(E.bt,"UserMiniProfile")},nopager:()=>{}},U={amarket:()=>{},bazaar:()=>{(0,
t.Rt)("bazaarautoprice")&&(0,i.it)(o.l,"body")},city:()=>{
(0,t.Rt)()&&(0,i.it)(D.Tt,"body"),
(0,t.Rt)("cityfinds")&&(0,i.it)(r.O,"#map .leaflet-marker-pane")},
companies:()=>{
(0,t.Rt)("ezmoneydeposit")&&(0,i.it)(p.H,"body"),(0,t.Rt)("employeela")&&(0,
i.it)(m.U,".manage-company"),
(0,t.Rt)("companyrestock")&&/stock/.test((0,t.P)())&&(0,i.it)(s.M,"body")},
displaycase:()=>{
(0,t.Rt)("displaycaseitemid")&&(0,i.it)(l.S,"ul.dc-list"),(0,t.Rt)("rwbonusdisplay")&&(0,
i.it)(T.It,"ul.display-cabinet")},factions:()=>{
(0,t.Rt)("ezmoneydeposit")&&(0,i.it)(p.H,"body"),
(0,t.Rt)(t.qfs)&&(0,i.it)(h.kt,"#faction-armoury")},gym:()=>{
(0,t.Rt)("")&&(0,i.it)($.ot,'#gymroot ul[class*="properties"] [class*="strength"]')
},index:()=>{C[(0,t.Ft)()]()},item:()=>{
(0,t.Rt)("removeuglyimage")&&(0,i.it)(j.Dt,'[class^="itemPreviewWrapper"]',!0),
(0,
t.Rt)("easyloadoutequip")&&(0,i.it)(u.$,'ul[class^="slots"]'),(0,t.Rt)(t.qis)&&(0,
i.it)(L._t,"div.items-wrap")},imarket:()=>{
(0,t.Rt)("marketnoconfirm")&&(0,i.it)(w.dt,"body")},jailview:()=>{
(0,t.Rt)("quickjail")&&(0,i.it)(O.Lt,"ul.users-list")},loader:()=>{
(0,t.Rt)("missionhelper")&&"missions"===(0,
t.ie)()&&(0,i.it)(k.vt,".giver-cont-wrap"),
(0,t.Rt)("fighterino")&&"attack"===(0,
t.ie)()&&(0,i.it)(S.G,'div[class^="playersModelWrap"]')
;const e=window.innerWidth<=784?'#attacker [class^="playerWindow"]':'#defender [class^="playerWindow"]'
;(0,t.Rt)("targetstatus")&&"attack"===(0,t.ie)()&&(0,i.it)(q.$t,e)},
pmarket:()=>{(0,t.Rt)("pointsnoconfirm")&&(0,i.it)(_.yt,".users-point-sell"),(0,
t.Rt)("pointsmuglight")&&(0,i.it)(x.wt,".users-point-sell")},profiles:()=>{
(0,t.Rt)("idtoname")&&(0,
i.it)(b.rt,".user-info-value"),(0,t.Rt)("statspies")&&(0,
i.it)(A.zt,".user-info-value")},properties:()=>{
(0,t.Rt)("ezmoneydeposit")&&(0,i.it)(p.H,"body")},shops:()=>{
(0,t.Rt)("cshopmaxbuy")&&(0,i.it)(c.j,"body")},trade:()=>{
(0,t.Rt)("tradevalue")&&(0,i.it)(I.Ct,"#trade-container .trade-cont")},all:()=>{
(0,t.Rt)("refillreminder")&&(0,i.it)(M.jt,'[class*="bar"][class*="energy"]')},
nopager:()=>{}},B={loading:async()=>{const e=(0,t.T)()
;if("userdata"in e||(0,t.qt)("nstdata"),!(0,t.X)(e)&&!(0,t.At)())return
;document.onreadystatechange=()=>B[document.readyState]();const n=(0,t.St)()
;(N.all??N.nopager)(),(N[n]??N.nopager)(),(0,t.X)(e)||(0,t.Ht)()},
interactive:()=>{const e=(0,t.St)();(U.all??U.nopager)(),(U[e]??U.nopager)()},
complete:()=>{}};B[document.readyState]()})()})();