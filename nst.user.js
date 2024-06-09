// ==UserScript==
// @name         nst
// @namespace    seintz.torn.nst
// @version      1.1.9
// @description  usefull scripts packed as one
// @licence      GNU GPLv3
// @author       seintz [2460991]
// @icon         https://factiontags.torn.com/11581-56425.png
// @updateURL    https://github.com/seintzx/nst-script/raw/main/nst.user.js
// @downloadURL  https://github.com/seintzx/nst-script/raw/main/nst.user.js
// @run-at       document-start
// @match        https://www.torn.com/*
// @grant        GM.notification
// @grant        GM.xmlHttpRequest
// @grant        unsafeWindow
// @connect      torn.com
// @connect      api.torn.com
// @connect      tornstats.com
// ==/UserScript==

(()=>{var t={6906:(t,e,n)=>{n.d(e,{A:()=>r})
;var o=n(1601),i=n.n(o),a=n(6314),s=n.n(a)()(i())
;s.push([t.id,'*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.nst-left-align .d .container{justify-content:flex-start!important;margin-left:1.25rem!important}.nst-left-align .d .anonymous .content-wrapper,.nst-left-align .d.without-sidebar .container,.nst-left-align .d.without-sidebar .content-wrapper{margin-left:1.25rem}.nst-trade-value{font-size:.875rem;height:1.5rem;line-height:1.5rem;text-align:center;--tw-text-opacity:1;color:rgb(108 173 43/var(--tw-text-opacity))}.nst-city-item{border-radius:9999px!important;border-style:solid!important;border-width:1px!important;box-sizing:border-box!important;display:block!important;height:2.5rem!important;left:-1.25rem!important;top:-1.25rem!important;width:2.5rem!important;z-index:999!important;--tw-border-opacity:1!important;background-color:#12470780!important;border-color:rgb(0 0 0/var(--tw-border-opacity))!important;padding:.75rem!important;--tw-shadow:0 25px 50px -12px rgba(0,0,0,.25)!important;--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color)!important;box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)!important}.nst-city-item:hover{height:10rem!important;left:-2.5rem!important;top:-2.5rem!important;width:10rem!important;z-index:999!important;--tw-bg-opacity:1!important;background-color:rgb(0 0 0/var(--tw-bg-opacity))!important;padding:2.25rem!important}.nst-findsworth{font-weight:700}.nst-findslist,.nst-findsworth{margin:.25rem;padding:.25rem}.nst-findslist{text-align:left}.nst-status-wrap{align-content:flex-start;align-items:flex-start;flex-direction:column;justify-content:center;position:absolute;top:0;z-index:10}.nst-status-middle,.nst-status-wrap{display:flex;flex-wrap:wrap;width:100%}.nst-status-middle{align-content:center;align-items:center;flex-direction:row;justify-content:space-between}.nst-status-item{border-style:solid;border-width:1px;margin:.25rem;--tw-border-opacity:1;border-color:rgb(0 0 0/var(--tw-border-opacity))}.nst-lastaction,.nst-status-item{padding:.25rem}.nst-spgym-msg,.nst-spgym-sel,.nst-steadfast{margin:.25rem;padding:.25rem}.nst-steadfast{text-align:center}.nst-pokername{color:var(--holdem-text-color-main)}.nst-icon{background-image:url(https://factiontags.torn.com/11581-56425.png)!important;background-position:50%!important;cursor:pointer!important}.nst-logo{font-size:1.5rem;font-weight:700;line-height:2rem;--tw-text-opacity:1;color:rgb(66 140 165/var(--tw-text-opacity))}.nst-menu{flex:1 1 0%;margin-bottom:10rem;margin-left:2rem;margin-top:2rem}.nst-menu-wrap{border-radius:.5rem}.nst-menu-title{align-content:center;align-items:center;border-top-left-radius:.5rem;border-top-right-radius:.5rem;flex-wrap:wrap;height:2rem;left:0;position:relative;top:0;--tw-border-opacity:1;border-bottom:1px rgb(0 0 0/var(--tw-border-opacity));border-style:solid;color:var(--default-color);font-size:.875rem;font-weight:700;line-height:2rem;padding:.25rem .75rem}.nst-menu-body,.nst-menu-title{background-color:var(--default-bg-panel-color);display:flex}.nst-menu-body{border-bottom-left-radius:.5rem;border-bottom-right-radius:.5rem;line-height:.75rem}.nst-ul-main{display:table-cell;float:none;list-style-type:none;--tw-border-opacity:1;border-right:1px rgb(0 0 0/var(--tw-border-opacity));border-style:solid;vertical-align:top}.nst-menu-page{display:block;position:relative;width:9rem;--tw-border-opacity:1;background-color:var(--default-bg-panel-color);border-bottom:1px rgb(0 0 0/var(--tw-border-opacity));border-style:solid;color:var(--default-color);font-weight:700;padding:.5rem}.nst-menu-page:hover{background-color:var(--default-bg-panel-active-color)}.nst-menu-sel{background-color:var(--default-bg-panel-active-color)!important}.nst-menu-item{display:block;float:none;vertical-align:top;width:100%}.nst-message{--tw-text-opacity:1;color:rgb(185 70 45/var(--tw-text-opacity))}.nst-api-wrap,.nst-message{margin:.5rem;padding:.25rem}.nst-api-wrap{align-content:center;align-items:center;display:flex;flex-direction:column;flex-wrap:wrap;justify-content:center}.nst-block-title{margin:.5rem!important}.nst-block{align-content:center;align-items:center;--tw-border-opacity:1;border-bottom:1px rgb(249 250 251/var(--tw-border-opacity));border-style:solid}.nst-block,.nst-script-block{display:flex;flex-direction:column;flex-wrap:wrap;justify-content:center;margin:.5rem;padding:.5rem}.nst-script-block{align-content:flex-start;align-items:flex-start}.nst-outcome{align-content:center;align-items:center;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center}.list-group-item{border-style:solid;border-width:1px;margin:.5rem;--tw-border-opacity:1;border-color:rgb(107 114 128/var(--tw-border-opacity));font-size:.875rem;line-height:1.25rem;padding:.5rem 1rem;text-align:center}.nst-box{box-sizing:border-box;display:flex;flex-direction:column;margin-bottom:.75rem;margin-top:.75rem}.nst-box-header{border-bottom-width:0;border-top-left-radius:.5rem;border-top-right-radius:.5rem;display:flex;--tw-bg-opacity:1;background-color:rgb(0 0 0/var(--tw-bg-opacity));font-size:1.125rem;line-height:1.75rem;padding:.25rem .75rem;--tw-text-opacity:1;color:rgb(66 140 165/var(--tw-text-opacity));--tw-shadow:inset 0 2px 4px 0 rgba(0,0,0,.05);--tw-shadow-colored:inset 0 2px 4px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}#nst-arrow{display:flex;height:1rem;width:1rem}.nst-box-title{flex-grow:1;font-size:.875rem;font-weight:700;line-height:1rem;--tw-text-opacity:1;color:rgb(66 140 165/var(--tw-text-opacity))}.nst-box-content{border-bottom-left-radius:.5rem;border-bottom-right-radius:.5rem;border-style:solid;border-width:0 1px 1px;--tw-border-opacity:1;background-color:var(--default-bg-panel-color);border-color:rgb(0 0 0/var(--tw-border-opacity));color:var(--default-color)}.nst-box-content>p{margin:.25rem;text-align:center}.nst-box-row{align-items:flex-start;flex-direction:row;flex-wrap:wrap;justify-content:space-evenly}.nst-box-column,.nst-box-row{align-content:center;display:flex;margin:.25rem;text-align:center}.nst-box-column{align-items:center;flex:1 1 0%;flex-direction:column;flex-wrap:wrap;justify-content:center}.nst-box-item{align-content:flex-start;align-items:center;display:flex;font-size:.875rem;line-height:1.25rem;margin:.125rem .25rem}.nst-box-item>input{margin:0 .25rem}.nst-box-button{align-items:center;color:var(--default-color);display:flex;flex-direction:column;flex-wrap:wrap;padding:.25rem;position:relative;width:100%}.nst-box-close{cursor:pointer;font-size:.75rem;line-height:1rem;position:absolute;right:.25rem;top:0}.nst-box-img{vertical-align:middle}.nst-box-btn-div{align-self:stretch;border-radius:.5rem;border-style:solid;border-width:1px;display:flex;flex:0 0 14%;justify-content:center;margin:.25rem;--tw-border-opacity:1;border-color:rgb(34 34 34/var(--tw-border-opacity));padding:0}.nst-box-btn-div:hover{background-color:var(--default-bg-panel-active-color)}#nst-item-resp{justify-content:center}.nst-input{background-color:var(--default-bg-panel-active-color);border-color:rgb(0 0 0/var(--tw-border-opacity));border-radius:.25rem;border-style:solid;border-width:1px;color:var(--default-color);font-size:.875rem;font-weight:500;height:1.5rem;line-height:1.25rem;margin:0;text-align:center}.nst-input,.nst-table{box-sizing:border-box;--tw-border-opacity:1}.nst-table{border-color:rgb(31 41 55/var(--tw-border-opacity));border-style:solid;border-width:2px;width:100%}.nst-table-row{text-align:left}.nst-table-cell-head{font-size:.875rem;font-weight:700;line-height:1.25rem}.nst-table-cell{border-style:solid!important;border-width:1px!important;box-sizing:border-box!important;--tw-border-opacity:1!important;border-color:rgb(31 41 55/var(--tw-border-opacity))!important;font-size:.75rem!important;line-height:1rem!important;padding:.25rem!important}.m-2{margin:.5rem}.table{display:table}.hidden{display:none}.h-4{height:1rem}.w-4{width:1rem}.bg-nstmain{--tw-bg-opacity:1;background-color:rgb(66 140 165/var(--tw-bg-opacity))}.bg-nstred{--tw-bg-opacity:1;background-color:rgb(185 70 45/var(--tw-bg-opacity))}.bg-nstyellow{--tw-bg-opacity:1;background-color:rgb(252 196 25/var(--tw-bg-opacity))}.text-center{text-align:center}.text-base{font-size:1rem;line-height:1.5rem}.font-bold{font-weight:700}.text-black{--tw-text-opacity:1;color:rgb(0 0 0/var(--tw-text-opacity))}.text-nstgreen{--tw-text-opacity:1;color:rgb(108 173 43/var(--tw-text-opacity))}.text-nstmain{--tw-text-opacity:1;color:rgb(66 140 165/var(--tw-text-opacity))}.text-nstred{--tw-text-opacity:1;color:rgb(185 70 45/var(--tw-text-opacity))}.text-nsttorntext{color:var(--default-color)}.text-nstyellow{--tw-text-opacity:1;color:rgb(252 196 25/var(--tw-text-opacity))}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.medals-wrapper,.travel-agency-travelling .popup-info,.travel-agency-travelling .stage,.travel-agency-travelling .stage+hr,[aria-label="Reset loadout"]{display:none!important}',""])
;const r=s},6314:t=>{t.exports=function(t){var e=[]
;return e.toString=function(){return this.map((function(e){
var n="",o=void 0!==e[5]
;return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),
o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),
n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")
},e.i=function(t,n,o,i,a){"string"==typeof t&&(t=[[null,t,void 0]]);var s={}
;if(o)for(var r=0;r<this.length;r++){var c=this[r][0];null!=c&&(s[c]=!0)}
for(var l=0;l<t.length;l++){var u=[].concat(t[l])
;o&&s[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),
u[5]=a),
n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),
i&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),
u[4]=i):u[4]="".concat(i)),e.push(u))}},e}},1601:t=>{t.exports=function(t){
return t[1]}},246:(t,e,n)=>{function o(t,e){var n=Object.keys(t)
;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t)
;e&&(o=o.filter((function(e){
return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}
return n}function i(t){for(var e=1;e<arguments.length;e++){
var n=null!=arguments[e]?arguments[e]:{}
;e%2?o(Object(n),!0).forEach((function(e){s(t,e,n[e])
})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){
Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}
function a(t){
return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){
return typeof t}:function(t){
return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t
},a(t)}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,
enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(){
return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){
var n=arguments[e];for(var o in n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o])}
return t},r.apply(this,arguments)}function c(t,e){
(null==e||e>t.length)&&(e=t.length);for(var n=0,o=Array(e);n<e;n++)o[n]=t[n]
;return o}function l(t){
if("undefined"!=typeof window&&window.navigator)return!!navigator.userAgent.match(t)
}n.r(e),n.d(e,{MultiDrag:()=>ye,Sortable:()=>Rt,Swap:()=>le,default:()=>_e})
;var u=l(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),d=l(/Edge/i),m=l(/firefox/i),f=l(/safari/i)&&!l(/chrome/i)&&!l(/android/i),p=l(/iP(ad|od|hone)/i),h=l(/chrome/i)&&l(/android/i),b={
capture:!1,passive:!1};function g(t,e,n){t.addEventListener(e,n,!u&&b)}
function v(t,e,n){t.removeEventListener(e,n,!u&&b)}function w(t,e){if(e){
if(">"===e[0]&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e)
;if(t.msMatchesSelector)return t.msMatchesSelector(e)
;if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch(t){return!1}
return!1}}function y(t){
return t.host&&t!==document&&t.host.nodeType?t.host:t.parentNode}
function k(t,e,n,o){if(t){n=n||document;do{
if(null!=e&&(">"===e[0]?t.parentNode===n&&w(t,e):w(t,e))||o&&t===n)return t
;if(t===n)break}while(t=y(t))}return null}var x,_=/\s+/g;function O(t,e,n){
if(t&&e)if(t.classList)t.classList[n?"add":"remove"](e);else{
var o=(" "+t.className+" ").replace(_," ").replace(" "+e+" "," ")
;t.className=(o+(n?" "+e:"")).replace(_," ")}}function L(t,e,n){var o=t&&t.style
;if(o){
if(void 0===n)return document.defaultView&&document.defaultView.getComputedStyle?n=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),
void 0===e?n:n[e]
;e in o||-1!==e.indexOf("webkit")||(e="-webkit-"+e),o[e]=n+("string"==typeof n?"":"px")
}}function M(t,e){var n="";if("string"==typeof t)n=t;else do{
var o=L(t,"transform");o&&"none"!==o&&(n=o+" "+n)}while(!e&&(t=t.parentNode))
;var i=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix
;return i&&new i(n)}function j(t,e,n){if(t){
var o=t.getElementsByTagName(e),i=0,a=o.length;if(n)for(;i<a;i++)n(o[i],i)
;return o}return[]}function T(){
return document.scrollingElement||document.documentElement}
function D(t,e,n,o,i){if(t.getBoundingClientRect||t===window){var a,s,r,c,l,d,m
;if(t!==window&&t.parentNode&&t!==T()?(s=(a=t.getBoundingClientRect()).top,
r=a.left,
c=a.bottom,l=a.right,d=a.height,m=a.width):(s=0,r=0,c=window.innerHeight,
l=window.innerWidth,
d=window.innerHeight,m=window.innerWidth),(e||n)&&t!==window&&(i=i||t.parentNode,
!u))do{
if(i&&i.getBoundingClientRect&&("none"!==L(i,"transform")||n&&"static"!==L(i,"position"))){
var f=i.getBoundingClientRect()
;s-=f.top+parseInt(L(i,"border-top-width")),r-=f.left+parseInt(L(i,"border-left-width")),
c=s+a.height,l=r+a.width;break}}while(i=i.parentNode);if(o&&t!==window){
var p=M(i||t),h=p&&p.a,b=p&&p.d;p&&(c=(s/=b)+(d/=b),l=(r/=h)+(m/=h))}return{
top:s,left:r,bottom:c,right:l,width:m,height:d}}}function S(t,e,n){
for(var o=$(t,!0),i=D(t)[e];o;){var a=D(o)[n]
;if(!("top"===n||"left"===n?i>=a:i<=a))return o;if(o===T())break;o=$(o,!1)}
return!1}function I(t,e,n,o){for(var i=0,a=0,s=t.children;a<s.length;){
if("none"!==s[a].style.display&&s[a]!==Rt.ghost&&(o||s[a]!==Rt.dragged)&&k(s[a],n.draggable,t,!1)){
if(i===e)return s[a];i++}a++}return null}function P(t,e){
for(var n=t.lastElementChild;n&&(n===Rt.ghost||"none"===L(n,"display")||e&&!w(n,e));)n=n.previousElementSibling
;return n||null}function E(t,e){var n=0;if(!t||!t.parentNode)return-1
;for(;t=t.previousElementSibling;)"TEMPLATE"===t.nodeName.toUpperCase()||t===Rt.clone||e&&!w(t,e)||n++
;return n}function A(t){var e=0,n=0,o=T();if(t)do{var i=M(t),a=i.a,s=i.d
;e+=t.scrollLeft*a,n+=t.scrollTop*s}while(t!==o&&(t=t.parentNode));return[e,n]}
function $(t,e){if(!t||!t.getBoundingClientRect)return T();var n=t,o=!1;do{
if(n.clientWidth<n.scrollWidth||n.clientHeight<n.scrollHeight){var i=L(n)
;if(n.clientWidth<n.scrollWidth&&("auto"==i.overflowX||"scroll"==i.overflowX)||n.clientHeight<n.scrollHeight&&("auto"==i.overflowY||"scroll"==i.overflowY)){
if(!n.getBoundingClientRect||n===document.body)return T();if(o||e)return n;o=!0}
}}while(n=n.parentNode);return T()}function q(t,e){
return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)
}function z(t,e){return function(){if(!x){var n=arguments
;1===n.length?t.call(this,n[0]):t.apply(this,n),x=setTimeout((function(){
x=void 0}),e)}}}function C(t,e,n){t.scrollLeft+=e,t.scrollTop+=n}function N(t){
var e=window.Polymer,n=window.jQuery||window.Zepto
;return e&&e.dom?e.dom(t).cloneNode(!0):n?n(t).clone(!0)[0]:t.cloneNode(!0)}
function B(t,e){
L(t,"position","absolute"),L(t,"top",e.top),L(t,"left",e.left),L(t,"width",e.width),
L(t,"height",e.height)}function R(t){
L(t,"position",""),L(t,"top",""),L(t,"left",""),L(t,"width",""),L(t,"height","")
}function U(t,e,n){var o={};return Array.from(t.children).forEach((function(i){
var a,s,r,c;if(k(i,e.draggable,t,!1)&&!i.animated&&i!==n){var l=D(i)
;o.left=Math.min(null!==(a=o.left)&&void 0!==a?a:1/0,l.left),
o.top=Math.min(null!==(s=o.top)&&void 0!==s?s:1/0,l.top),
o.right=Math.max(null!==(r=o.right)&&void 0!==r?r:-1/0,l.right),
o.bottom=Math.max(null!==(c=o.bottom)&&void 0!==c?c:-1/0,l.bottom)}
})),o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}
var F="Sortable"+(new Date).getTime(),H=[],G={initializeByDefault:!0},W={
mount:function(t){for(var e in G)G.hasOwnProperty(e)&&!(e in t)&&(t[e]=G[e])
;H.forEach((function(e){
if(e.pluginName===t.pluginName)throw"Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")
})),H.push(t)},pluginEvent:function(t,e,n){var o=this
;this.eventCanceled=!1,n.cancel=function(){o.eventCanceled=!0};var a=t+"Global"
;H.forEach((function(o){
e[o.pluginName]&&(e[o.pluginName][a]&&e[o.pluginName][a](i({sortable:e
},n)),e.options[o.pluginName]&&e[o.pluginName][t]&&e[o.pluginName][t](i({
sortable:e},n)))}))},initializePlugins:function(t,e,n,o){
for(var i in H.forEach((function(o){var i=o.pluginName
;if(t.options[i]||o.initializeByDefault){var a=new o(t,e,t.options)
;a.sortable=t,a.options=t.options,t[i]=a,r(n,a.defaults)}
})),t.options)if(t.options.hasOwnProperty(i)){
var a=this.modifyOption(t,i,t.options[i]);void 0!==a&&(t.options[i]=a)}},
getEventProperties:function(t,e){var n={};return H.forEach((function(o){
"function"==typeof o.eventProperties&&r(n,o.eventProperties.call(e[o.pluginName],t))
})),n},modifyOption:function(t,e,n){var o;return H.forEach((function(i){
t[i.pluginName]&&i.optionListeners&&"function"==typeof i.optionListeners[e]&&(o=i.optionListeners[e].call(t[i.pluginName],n))
})),o}};function X(t){
var e=t.sortable,n=t.rootEl,o=t.name,a=t.targetEl,s=t.cloneEl,r=t.toEl,c=t.fromEl,l=t.oldIndex,m=t.newIndex,f=t.oldDraggableIndex,p=t.newDraggableIndex,h=t.originalEvent,b=t.putSortable,g=t.extraEventProperties
;if(e=e||n&&n[F]){var v,w=e.options,y="on"+o.charAt(0).toUpperCase()+o.substr(1)
;!window.CustomEvent||u||d?(v=document.createEvent("Event")).initEvent(o,!0,!0):v=new CustomEvent(o,{
bubbles:!0,cancelable:!0
}),v.to=r||n,v.from=c||n,v.item=a||n,v.clone=s,v.oldIndex=l,
v.newIndex=m,v.oldDraggableIndex=f,
v.newDraggableIndex=p,v.originalEvent=h,v.pullMode=b?b.lastPutMode:void 0
;var k=i(i({},g),W.getEventProperties(o,e));for(var x in k)v[x]=k[x]
;n&&n.dispatchEvent(v),w[y]&&w[y].call(e,v)}}var K=["evt"],J=function(t,e){
var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.evt,a=function(t,e){
if(null==t)return{};var n,o,i=function(t,e){if(null==t)return{}
;var n,o,i={},a=Object.keys(t)
;for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e)
;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t)
;for(o=0;o<a.length;o++)n=a[o],
e.indexOf(n)>=0||{}.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}(n,K)
;W.pluginEvent.bind(Rt)(t,e,i({dragEl:Q,parentEl:V,ghostEl:Z,rootEl:tt,
nextEl:et,lastDownEl:nt,cloneEl:ot,cloneHidden:it,dragStarted:gt,putSortable:ut,
activeSortable:Rt.active,originalEvent:o,oldIndex:at,oldDraggableIndex:rt,
newIndex:st,newDraggableIndex:ct,hideGhostForTarget:zt,unhideGhostForTarget:Ct,
cloneNowHidden:function(){it=!0},cloneNowShown:function(){it=!1},
dispatchSortableEvent:function(t){Y({sortable:e,name:t,originalEvent:o})}},a))}
;function Y(t){X(i({putSortable:ut,cloneEl:ot,targetEl:Q,rootEl:tt,oldIndex:at,
oldDraggableIndex:rt,newIndex:st,newDraggableIndex:ct},t))}
var Q,V,Z,tt,et,nt,ot,it,at,st,rt,ct,lt,ut,dt,mt,ft,pt,ht,bt,gt,vt,wt,yt,kt,xt=!1,_t=!1,Ot=[],Lt=!1,Mt=!1,jt=[],Tt=!1,Dt=[],St="undefined"!=typeof document,It=p,Pt=d||u?"cssFloat":"float",Et=St&&!h&&!p&&"draggable"in document.createElement("div"),At=function(){
if(St){if(u)return!1;var t=document.createElement("x")
;return t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}
}(),$t=function(t,e){
var n=L(t),o=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),i=I(t,0,e),a=I(t,1,e),s=i&&L(i),r=a&&L(a),c=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+D(i).width,l=r&&parseInt(r.marginLeft)+parseInt(r.marginRight)+D(a).width
;if("flex"===n.display)return"column"===n.flexDirection||"column-reverse"===n.flexDirection?"vertical":"horizontal"
;if("grid"===n.display)return n.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal"
;if(i&&s.float&&"none"!==s.float){var u="left"===s.float?"left":"right"
;return!a||"both"!==r.clear&&r.clear!==u?"horizontal":"vertical"}
return i&&("block"===s.display||"flex"===s.display||"table"===s.display||"grid"===s.display||c>=o&&"none"===n[Pt]||a&&"none"===n[Pt]&&c+l>o)?"vertical":"horizontal"
},qt=function(t){function e(t,n){return function(o,i,a,s){
var r=o.options.group.name&&i.options.group.name&&o.options.group.name===i.options.group.name
;if(null==t&&(n||r))return!0;if(null==t||!1===t)return!1
;if(n&&"clone"===t)return t
;if("function"==typeof t)return e(t(o,i,a,s),n)(o,i,a,s)
;var c=(n?o:i).options.group.name
;return!0===t||"string"==typeof t&&t===c||t.join&&t.indexOf(c)>-1}}
var n={},o=t.group;o&&"object"==a(o)||(o={name:o
}),n.name=o.name,n.checkPull=e(o.pull,!0),
n.checkPut=e(o.put),n.revertClone=o.revertClone,t.group=n},zt=function(){
!At&&Z&&L(Z,"display","none")},Ct=function(){!At&&Z&&L(Z,"display","")}
;St&&!h&&document.addEventListener("click",(function(t){
if(_t)return t.preventDefault(),
t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),
_t=!1,!1}),!0);var Nt=function(t){if(Q){t=t.touches?t.touches[0]:t
;var e=(i=t.clientX,a=t.clientY,Ot.some((function(t){
var e=t[F].options.emptyInsertThreshold;if(e&&!P(t)){
var n=D(t),o=i>=n.left-e&&i<=n.right+e,r=a>=n.top-e&&a<=n.bottom+e
;return o&&r?s=t:void 0}})),s);if(e){var n={}
;for(var o in t)t.hasOwnProperty(o)&&(n[o]=t[o])
;n.target=n.rootEl=e,n.preventDefault=void 0,
n.stopPropagation=void 0,e[F]._onDragOver(n)}}var i,a,s},Bt=function(t){
Q&&Q.parentNode[F]._isOutsideThisEl(t.target)};function Rt(t,e){
if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t))
;this.el=t,this.options=e=r({},e),t[F]=this;var n,o,a={group:null,sort:!0,
disabled:!1,store:null,handle:null,
draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,
invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){
return $t(t,this.options)},ghostClass:"sortable-ghost",
chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",
filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(t,e){
t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,
dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,
touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,
forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,
fallbackTolerance:0,fallbackOffset:{x:0,y:0},
supportPointer:!1!==Rt.supportPointer&&"PointerEvent"in window&&!f,
emptyInsertThreshold:5}
;for(var s in W.initializePlugins(this,t,a),a)!(s in e)&&(e[s]=a[s])
;for(var c in qt(e),
this)"_"===c.charAt(0)&&"function"==typeof this[c]&&(this[c]=this[c].bind(this))
;this.nativeDraggable=!e.forceFallback&&Et,
this.nativeDraggable&&(this.options.touchStartThreshold=1),
e.supportPointer?g(t,"pointerdown",this._onTapStart):(g(t,"mousedown",this._onTapStart),
g(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(g(t,"dragover",this),
g(t,"dragenter",this)),
Ot.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),
r(this,(o=[],{captureAnimationState:function(){
o=[],this.options.animation&&[].slice.call(this.el.children).forEach((function(t){
if("none"!==L(t,"display")&&t!==Rt.ghost){o.push({target:t,rect:D(t)})
;var e=i({},o[o.length-1].rect);if(t.thisAnimationDuration){var n=M(t,!0)
;n&&(e.top-=n.f,e.left-=n.e)}t.fromRect=e}}))},addAnimationState:function(t){
o.push(t)},removeAnimationState:function(t){o.splice(function(t,e){
for(var n in t)if(t.hasOwnProperty(n))for(var o in e)if(e.hasOwnProperty(o)&&e[o]===t[n][o])return+n
;return-1}(o,{target:t}),1)},animateAll:function(t){var e=this
;if(!this.options.animation)return clearTimeout(n),
void("function"==typeof t&&t());var i=!1,a=0;o.forEach((function(t){
var n=0,o=t.target,s=o.fromRect,r=D(o),c=o.prevFromRect,l=o.prevToRect,u=t.rect,d=M(o,!0)
;d&&(r.top-=d.f,
r.left-=d.e),o.toRect=r,o.thisAnimationDuration&&q(c,r)&&!q(s,r)&&(u.top-r.top)/(u.left-r.left)==(s.top-r.top)/(s.left-r.left)&&(n=function(t,e,n,o){
return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-n.top,2)+Math.pow(e.left-n.left,2))*o.animation
}(u,c,l,e.options)),
q(r,s)||(o.prevFromRect=s,o.prevToRect=r,n||(n=e.options.animation),
e.animate(o,u,r,n)),
n&&(i=!0,a=Math.max(a,n),clearTimeout(o.animationResetTimer),
o.animationResetTimer=setTimeout((function(){
o.animationTime=0,o.prevFromRect=null,
o.fromRect=null,o.prevToRect=null,o.thisAnimationDuration=null
}),n),o.thisAnimationDuration=n)})),clearTimeout(n),i?n=setTimeout((function(){
"function"==typeof t&&t()}),a):"function"==typeof t&&t(),o=[]},
animate:function(t,e,n,o){if(o){L(t,"transition",""),L(t,"transform","")
;var i=M(this.el),a=i&&i.a,s=i&&i.d,r=(e.left-n.left)/(a||1),c=(e.top-n.top)/(s||1)
;t.animatingX=!!r,
t.animatingY=!!c,L(t,"transform","translate3d("+r+"px,"+c+"px,0)"),
this.forRepaintDummy=function(t){return t.offsetWidth
}(t),L(t,"transition","transform "+o+"ms"+(this.options.easing?" "+this.options.easing:"")),
L(t,"transform","translate3d(0,0,0)"),
"number"==typeof t.animated&&clearTimeout(t.animated),
t.animated=setTimeout((function(){
L(t,"transition",""),L(t,"transform",""),t.animated=!1,
t.animatingX=!1,t.animatingY=!1}),o)}}}))}function Ut(t,e,n,o,i,a,s,r){
var c,l,m=t[F],f=m.options.onMove
;return!window.CustomEvent||u||d?(c=document.createEvent("Event")).initEvent("move",!0,!0):c=new CustomEvent("move",{
bubbles:!0,cancelable:!0
}),c.to=e,c.from=t,c.dragged=n,c.draggedRect=o,c.related=i||e,
c.relatedRect=a||D(e),
c.willInsertAfter=r,c.originalEvent=s,t.dispatchEvent(c),f&&(l=f.call(m,c,s)),l}
function Ft(t){t.draggable=!1}function Ht(){Tt=!1}function Gt(t){
for(var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,o=0;n--;)o+=e.charCodeAt(n)
;return o.toString(36)}function Wt(t){return setTimeout(t,0)}function Xt(t){
return clearTimeout(t)}Rt.prototype={constructor:Rt,
_isOutsideThisEl:function(t){this.el.contains(t)||t===this.el||(vt=null)},
_getDirection:function(t,e){
return"function"==typeof this.options.direction?this.options.direction.call(this,t,e,Q):this.options.direction
},_onTapStart:function(t){if(t.cancelable){
var e=this,n=this.el,o=this.options,i=o.preventOnFilter,a=t.type,s=t.touches&&t.touches[0]||t.pointerType&&"touch"===t.pointerType&&t,r=(s||t).target,c=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||r,l=o.filter
;if(function(t){Dt.length=0
;for(var e=t.getElementsByTagName("input"),n=e.length;n--;){var o=e[n]
;o.checked&&Dt.push(o)}
}(n),!Q&&!(/mousedown|pointerdown/.test(a)&&0!==t.button||o.disabled)&&!c.isContentEditable&&(this.nativeDraggable||!f||!r||"SELECT"!==r.tagName.toUpperCase())&&!((r=k(r,o.draggable,n,!1))&&r.animated||nt===r)){
if(at=E(r),rt=E(r,o.draggable),"function"==typeof l){
if(l.call(this,t,r,this))return Y({sortable:e,rootEl:c,name:"filter",targetEl:r,
toEl:n,fromEl:n}),J("filter",e,{evt:t
}),void(i&&t.cancelable&&t.preventDefault())
}else if(l&&(l=l.split(",").some((function(o){if(o=k(c,o.trim(),n,!1))return Y({
sortable:e,rootEl:o,name:"filter",targetEl:r,fromEl:n,toEl:n}),J("filter",e,{
evt:t}),!0}))))return void(i&&t.cancelable&&t.preventDefault())
;o.handle&&!k(c,o.handle,n,!1)||this._prepareDragStart(t,s,r)}}},
_prepareDragStart:function(t,e,n){
var o,i=this,a=i.el,s=i.options,r=a.ownerDocument;if(n&&!Q&&n.parentNode===a){
var c=D(n)
;if(tt=a,V=(Q=n).parentNode,et=Q.nextSibling,nt=n,lt=s.group,Rt.dragged=Q,dt={
target:Q,clientX:(e||t).clientX,clientY:(e||t).clientY
},ht=dt.clientX-c.left,bt=dt.clientY-c.top,
this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,
Q.style["will-change"]="all",o=function(){J("delayEnded",i,{evt:t
}),Rt.eventCanceled?i._onDrop():(i._disableDelayedDragEvents(),
!m&&i.nativeDraggable&&(Q.draggable=!0),i._triggerDragStart(t,e),Y({sortable:i,
name:"choose",originalEvent:t}),O(Q,s.chosenClass,!0))
},s.ignore.split(",").forEach((function(t){j(Q,t.trim(),Ft)
})),g(r,"dragover",Nt),
g(r,"mousemove",Nt),g(r,"touchmove",Nt),g(r,"mouseup",i._onDrop),
g(r,"touchend",i._onDrop),
g(r,"touchcancel",i._onDrop),m&&this.nativeDraggable&&(this.options.touchStartThreshold=4,
Q.draggable=!0),J("delayStart",this,{evt:t
}),!s.delay||s.delayOnTouchOnly&&!e||this.nativeDraggable&&(d||u))o();else{
if(Rt.eventCanceled)return void this._onDrop()
;g(r,"mouseup",i._disableDelayedDrag),
g(r,"touchend",i._disableDelayedDrag),g(r,"touchcancel",i._disableDelayedDrag),
g(r,"mousemove",i._delayedDragTouchMoveHandler),
g(r,"touchmove",i._delayedDragTouchMoveHandler),
s.supportPointer&&g(r,"pointermove",i._delayedDragTouchMoveHandler),
i._dragStartTimer=setTimeout(o,s.delay)}}},
_delayedDragTouchMoveHandler:function(t){var e=t.touches?t.touches[0]:t
;Math.max(Math.abs(e.clientX-this._lastX),Math.abs(e.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()
},_disableDelayedDrag:function(){
Q&&Ft(Q),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},
_disableDelayedDragEvents:function(){var t=this.el.ownerDocument
;v(t,"mouseup",this._disableDelayedDrag),
v(t,"touchend",this._disableDelayedDrag),
v(t,"touchcancel",this._disableDelayedDrag),
v(t,"mousemove",this._delayedDragTouchMoveHandler),
v(t,"touchmove",this._delayedDragTouchMoveHandler),
v(t,"pointermove",this._delayedDragTouchMoveHandler)},
_triggerDragStart:function(t,e){
e=e||"touch"==t.pointerType&&t,!this.nativeDraggable||e?this.options.supportPointer?g(document,"pointermove",this._onTouchMove):g(document,e?"touchmove":"mousemove",this._onTouchMove):(g(Q,"dragend",this),
g(tt,"dragstart",this._onDragStart));try{document.selection?Wt((function(){
document.selection.empty()})):window.getSelection().removeAllRanges()}catch(t){}
},_dragStarted:function(t,e){if(xt=!1,tt&&Q){J("dragStarted",this,{evt:e
}),this.nativeDraggable&&g(document,"dragover",Bt);var n=this.options
;!t&&O(Q,n.dragClass,!1),
O(Q,n.ghostClass,!0),Rt.active=this,t&&this._appendGhost(),Y({sortable:this,
name:"start",originalEvent:e})}else this._nulling()},
_emulateDragOver:function(){if(mt){
this._lastX=mt.clientX,this._lastY=mt.clientY,zt()
;for(var t=document.elementFromPoint(mt.clientX,mt.clientY),e=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(mt.clientX,mt.clientY))!==e;)e=t
;if(Q.parentNode[F]._isOutsideThisEl(t),e)do{if(e[F]&&e[F]._onDragOver({
clientX:mt.clientX,clientY:mt.clientY,target:t,rootEl:e
})&&!this.options.dragoverBubble)break;t=e}while(e=e.parentNode);Ct()}},
_onTouchMove:function(t){if(dt){
var e=this.options,n=e.fallbackTolerance,o=e.fallbackOffset,i=t.touches?t.touches[0]:t,a=Z&&M(Z,!0),s=Z&&a&&a.a,r=Z&&a&&a.d,c=It&&kt&&A(kt),l=(i.clientX-dt.clientX+o.x)/(s||1)+(c?c[0]-jt[0]:0)/(s||1),u=(i.clientY-dt.clientY+o.y)/(r||1)+(c?c[1]-jt[1]:0)/(r||1)
;if(!Rt.active&&!xt){
if(n&&Math.max(Math.abs(i.clientX-this._lastX),Math.abs(i.clientY-this._lastY))<n)return
;this._onDragStart(t,!0)}if(Z){a?(a.e+=l-(ft||0),a.f+=u-(pt||0)):a={a:1,b:0,c:0,
d:1,e:l,f:u}
;var d="matrix(".concat(a.a,",").concat(a.b,",").concat(a.c,",").concat(a.d,",").concat(a.e,",").concat(a.f,")")
;L(Z,"webkitTransform",d),
L(Z,"mozTransform",d),L(Z,"msTransform",d),L(Z,"transform",d),ft=l,pt=u,mt=i}
t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!Z){
var t=this.options.fallbackOnBody?document.body:tt,e=D(Q,!0,It,!0,t),n=this.options
;if(It){
for(kt=t;"static"===L(kt,"position")&&"none"===L(kt,"transform")&&kt!==document;)kt=kt.parentNode
;kt!==document.body&&kt!==document.documentElement?(kt===document&&(kt=T()),
e.top+=kt.scrollTop,e.left+=kt.scrollLeft):kt=T(),jt=A(kt)}
O(Z=Q.cloneNode(!0),n.ghostClass,!1),
O(Z,n.fallbackClass,!0),O(Z,n.dragClass,!0),
L(Z,"transition",""),L(Z,"transform",""),
L(Z,"box-sizing","border-box"),L(Z,"margin",0),
L(Z,"top",e.top),L(Z,"left",e.left),L(Z,"width",e.width),L(Z,"height",e.height),
L(Z,"opacity","0.8"),
L(Z,"position",It?"absolute":"fixed"),L(Z,"zIndex","100000"),
L(Z,"pointerEvents","none"),
Rt.ghost=Z,t.appendChild(Z),L(Z,"transform-origin",ht/parseInt(Z.style.width)*100+"% "+bt/parseInt(Z.style.height)*100+"%")
}},_onDragStart:function(t,e){var n=this,o=t.dataTransfer,i=n.options
;J("dragStart",this,{evt:t
}),Rt.eventCanceled?this._onDrop():(J("setupClone",this),
Rt.eventCanceled||((ot=N(Q)).removeAttribute("id"),
ot.draggable=!1,ot.style["will-change"]="",
this._hideClone(),O(ot,this.options.chosenClass,!1),
Rt.clone=ot),n.cloneId=Wt((function(){
J("clone",n),Rt.eventCanceled||(n.options.removeCloneOnHide||tt.insertBefore(ot,Q),
n._hideClone(),Y({sortable:n,name:"clone"}))
})),!e&&O(Q,i.dragClass,!0),e?(_t=!0,
n._loopId=setInterval(n._emulateDragOver,50)):(v(document,"mouseup",n._onDrop),
v(document,"touchend",n._onDrop),
v(document,"touchcancel",n._onDrop),o&&(o.effectAllowed="move",
i.setData&&i.setData.call(n,o,Q)),
g(document,"drop",n),L(Q,"transform","translateZ(0)")),
xt=!0,n._dragStartId=Wt(n._dragStarted.bind(n,e,t)),g(document,"selectstart",n),
gt=!0,f&&L(document.body,"user-select","none"))},_onDragOver:function(t){
var e,n,o,a,s=this.el,r=t.target,c=this.options,l=c.group,u=Rt.active,d=lt===l,m=c.sort,f=ut||u,p=this,h=!1
;if(!Tt){
if(void 0!==t.preventDefault&&t.cancelable&&t.preventDefault(),r=k(r,c.draggable,s,!0),
N("dragOver"),Rt.eventCanceled)return h
;if(Q.contains(t.target)||r.animated&&r.animatingX&&r.animatingY||p._ignoreWhileAnimating===r)return R(!1)
;if(_t=!1,
u&&!c.disabled&&(d?m||(o=V!==tt):ut===this||(this.lastPutMode=lt.checkPull(this,u,Q,t))&&l.checkPut(this,u,Q,t))){
if(a="vertical"===this._getDirection(t,r),
e=D(Q),N("dragOverValid"),Rt.eventCanceled)return h
;if(o)return V=tt,B(),this._hideClone(),
N("revert"),Rt.eventCanceled||(et?tt.insertBefore(Q,et):tt.appendChild(Q)),R(!0)
;var b=P(s,c.draggable);if(!b||function(t,e,n){
var o=D(P(n.el,n.options.draggable)),i=U(n.el,n.options,Z)
;return e?t.clientX>i.right+10||t.clientY>o.bottom&&t.clientX>o.left:t.clientY>i.bottom+10||t.clientX>o.right&&t.clientY>o.top
}(t,a,this)&&!b.animated){if(b===Q)return R(!1)
;if(b&&s===t.target&&(r=b),r&&(n=D(r)),
!1!==Ut(tt,s,Q,e,r,n,t,!!r))return B(),b&&b.nextSibling?s.insertBefore(Q,b.nextSibling):s.appendChild(Q),
V=s,H(),R(!0)}else if(b&&function(t,e,n){
var o=D(I(n.el,0,n.options,!0)),i=U(n.el,n.options,Z)
;return e?t.clientX<i.left-10||t.clientY<o.top&&t.clientX<o.right:t.clientY<i.top-10||t.clientY<o.bottom&&t.clientX<o.left
}(t,a,this)){var g=I(s,0,c,!0);if(g===Q)return R(!1)
;if(n=D(r=g),!1!==Ut(tt,s,Q,e,r,n,t,!1))return B(),
s.insertBefore(Q,g),V=s,H(),R(!0)}else if(r.parentNode===s){n=D(r)
;var v,w,y,x=Q.parentNode!==s,_=!function(t,e,n){
var o=n?t.left:t.top,i=n?t.right:t.bottom,a=n?t.width:t.height,s=n?e.left:e.top,r=n?e.right:e.bottom,c=n?e.width:e.height
;return o===s||i===r||o+a/2===s+c/2
}(Q.animated&&Q.toRect||e,r.animated&&r.toRect||n,a),M=a?"top":"left",j=S(r,"top","top")||S(Q,"top","top"),T=j?j.scrollTop:void 0
;if(vt!==r&&(w=n[M],Lt=!1,Mt=!_&&c.invertSwap||x),v=function(t,e,n,o,i,a,s,r){
var c=o?t.clientY:t.clientX,l=o?n.height:n.width,u=o?n.top:n.left,d=o?n.bottom:n.right,m=!1
;if(!s)if(r&&yt<l*i){
if(!Lt&&(1===wt?c>u+l*a/2:c<d-l*a/2)&&(Lt=!0),Lt)m=!0;else if(1===wt?c<u+yt:c>d-yt)return-wt
}else if(c>u+l*(1-i)/2&&c<d-l*(1-i)/2)return function(t){return E(Q)<E(t)?1:-1
}(e);return(m=m||s)&&(c<u+l*a/2||c>d-l*a/2)?c>u+l/2?1:-1:0
}(t,r,n,a,_?1:c.swapThreshold,null==c.invertedSwapThreshold?c.swapThreshold:c.invertedSwapThreshold,Mt,vt===r),
0!==v){var A=E(Q);do{A-=v,y=V.children[A]
}while(y&&("none"===L(y,"display")||y===Z))}if(0===v||y===r)return R(!1)
;vt=r,wt=v;var $=r.nextElementSibling,q=!1,z=Ut(tt,s,Q,e,r,n,t,q=1===v)
;if(!1!==z)return 1!==z&&-1!==z||(q=1===z),
Tt=!0,setTimeout(Ht,30),B(),q&&!$?s.appendChild(Q):r.parentNode.insertBefore(Q,q?$:r),
j&&C(j,0,T-j.scrollTop),V=Q.parentNode,void 0===w||Mt||(yt=Math.abs(w-D(r)[M])),
H(),R(!0)}if(s.contains(Q))return R(!1)}return!1}function N(c,l){J(c,p,i({evt:t,
isOwner:d,axis:a?"vertical":"horizontal",revert:o,dragRect:e,targetRect:n,
canSort:m,fromSortable:f,target:r,completed:R,onMove:function(n,o){
return Ut(tt,s,Q,e,n,D(n),t,o)},changed:H},l))}function B(){
N("dragOverAnimationCapture"),
p.captureAnimationState(),p!==f&&f.captureAnimationState()}function R(e){
return N("dragOverCompleted",{insertion:e
}),e&&(d?u._hideClone():u._showClone(p),
p!==f&&(O(Q,ut?ut.options.ghostClass:u.options.ghostClass,!1),
O(Q,c.ghostClass,!0)),
ut!==p&&p!==Rt.active?ut=p:p===Rt.active&&ut&&(ut=null),f===p&&(p._ignoreWhileAnimating=r),
p.animateAll((function(){
N("dragOverAnimationComplete"),p._ignoreWhileAnimating=null
})),p!==f&&(f.animateAll(),
f._ignoreWhileAnimating=null)),(r===Q&&!Q.animated||r===s&&!r.animated)&&(vt=null),
c.dragoverBubble||t.rootEl||r===document||(Q.parentNode[F]._isOutsideThisEl(t.target),
!e&&Nt(t)),!c.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),h=!0}
function H(){st=E(Q),ct=E(Q,c.draggable),Y({sortable:p,name:"change",toEl:s,
newIndex:st,newDraggableIndex:ct,originalEvent:t})}},_ignoreWhileAnimating:null,
_offMoveEvents:function(){
v(document,"mousemove",this._onTouchMove),v(document,"touchmove",this._onTouchMove),
v(document,"pointermove",this._onTouchMove),
v(document,"dragover",Nt),v(document,"mousemove",Nt),v(document,"touchmove",Nt)
},_offUpEvents:function(){var t=this.el.ownerDocument
;v(t,"mouseup",this._onDrop),
v(t,"touchend",this._onDrop),v(t,"pointerup",this._onDrop),
v(t,"touchcancel",this._onDrop),v(document,"selectstart",this)},
_onDrop:function(t){var e=this.el,n=this.options
;st=E(Q),ct=E(Q,n.draggable),J("drop",this,{evt:t
}),V=Q&&Q.parentNode,st=E(Q),ct=E(Q,n.draggable),Rt.eventCanceled||(xt=!1,Mt=!1,
Lt=!1,
clearInterval(this._loopId),clearTimeout(this._dragStartTimer),Xt(this.cloneId),
Xt(this._dragStartId),
this.nativeDraggable&&(v(document,"drop",this),v(e,"dragstart",this._onDragStart)),
this._offMoveEvents(),
this._offUpEvents(),f&&L(document.body,"user-select",""),L(Q,"transform",""),
t&&(gt&&(t.cancelable&&t.preventDefault(),
!n.dropBubble&&t.stopPropagation()),Z&&Z.parentNode&&Z.parentNode.removeChild(Z),
(tt===V||ut&&"clone"!==ut.lastPutMode)&&ot&&ot.parentNode&&ot.parentNode.removeChild(ot),
Q&&(this.nativeDraggable&&v(Q,"dragend",this),
Ft(Q),Q.style["will-change"]="",gt&&!xt&&O(Q,ut?ut.options.ghostClass:this.options.ghostClass,!1),
O(Q,this.options.chosenClass,!1),Y({sortable:this,name:"unchoose",toEl:V,
newIndex:null,newDraggableIndex:null,originalEvent:t}),tt!==V?(st>=0&&(Y({
rootEl:V,name:"add",toEl:V,fromEl:tt,originalEvent:t}),Y({sortable:this,
name:"remove",toEl:V,originalEvent:t}),Y({rootEl:V,name:"sort",toEl:V,fromEl:tt,
originalEvent:t}),Y({sortable:this,name:"sort",toEl:V,originalEvent:t
})),ut&&ut.save()):st!==at&&st>=0&&(Y({sortable:this,name:"update",toEl:V,
originalEvent:t}),Y({sortable:this,name:"sort",toEl:V,originalEvent:t
})),Rt.active&&(null!=st&&-1!==st||(st=at,ct=rt),Y({sortable:this,name:"end",
toEl:V,originalEvent:t}),this.save())))),this._nulling()},_nulling:function(){
J("nulling",this),
tt=Q=V=Z=et=ot=nt=it=dt=mt=gt=st=ct=at=rt=vt=wt=ut=lt=Rt.dragged=Rt.ghost=Rt.clone=Rt.active=null,
Dt.forEach((function(t){t.checked=!0})),Dt.length=ft=pt=0},
handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t)
;break;case"dragenter":case"dragover":Q&&(this._onDragOver(t),function(t){
t.dataTransfer&&(t.dataTransfer.dropEffect="move"),
t.cancelable&&t.preventDefault()}(t));break;case"selectstart":t.preventDefault()
}},toArray:function(){
for(var t,e=[],n=this.el.children,o=0,i=n.length,a=this.options;o<i;o++)k(t=n[o],a.draggable,this.el,!1)&&e.push(t.getAttribute(a.dataIdAttr)||Gt(t))
;return e},sort:function(t,e){var n={},o=this.el
;this.toArray().forEach((function(t,e){var i=o.children[e]
;k(i,this.options.draggable,o,!1)&&(n[t]=i)
}),this),e&&this.captureAnimationState(),t.forEach((function(t){
n[t]&&(o.removeChild(n[t]),o.appendChild(n[t]))})),e&&this.animateAll()},
save:function(){var t=this.options.store;t&&t.set&&t.set(this)},
closest:function(t,e){return k(t,e||this.options.draggable,this.el,!1)},
option:function(t,e){var n=this.options;if(void 0===e)return n[t]
;var o=W.modifyOption(this,t,e);n[t]=void 0!==o?o:e,"group"===t&&qt(n)},
destroy:function(){J("destroy",this);var t=this.el
;t[F]=null,v(t,"mousedown",this._onTapStart),v(t,"touchstart",this._onTapStart),
v(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(v(t,"dragover",this),
v(t,"dragenter",this)),
[].forEach.call(t.querySelectorAll("[draggable]"),(function(t){
t.removeAttribute("draggable")
})),this._onDrop(),this._disableDelayedDragEvents(),
Ot.splice(Ot.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!it){
if(J("hideClone",this),Rt.eventCanceled)return
;L(ot,"display","none"),this.options.removeCloneOnHide&&ot.parentNode&&ot.parentNode.removeChild(ot),
it=!0}},_showClone:function(t){if("clone"===t.lastPutMode){if(it){
if(J("showClone",this),Rt.eventCanceled)return
;Q.parentNode!=tt||this.options.group.revertClone?et?tt.insertBefore(ot,et):tt.appendChild(ot):tt.insertBefore(ot,Q),
this.options.group.revertClone&&this.animate(Q,ot),L(ot,"display",""),it=!1}
}else this._hideClone()}},St&&g(document,"touchmove",(function(t){
(Rt.active||xt)&&t.cancelable&&t.preventDefault()})),Rt.utils={on:g,off:v,css:L,
find:j,is:function(t,e){return!!k(t,e,t,!1)},extend:function(t,e){
if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t},throttle:z,
closest:k,toggleClass:O,clone:N,index:E,nextTick:Wt,cancelNextTick:Xt,
detectDirection:$t,getChild:I},Rt.get=function(t){return t[F]
},Rt.mount=function(){
for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n]
;e[0].constructor===Array&&(e=e[0]),e.forEach((function(t){
if(!t.prototype||!t.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t))
;t.utils&&(Rt.utils=i(i({},Rt.utils),t.utils)),W.mount(t)}))
},Rt.create=function(t,e){return new Rt(t,e)},Rt.version="1.15.2"
;var Kt,Jt,Yt,Qt,Vt,Zt,te=[],ee=!1;function ne(){te.forEach((function(t){
clearInterval(t.pid)})),te=[]}function oe(){clearInterval(Zt)}
var ie,ae=z((function(t,e,n,o){if(e.scroll){
var i,a=(t.touches?t.touches[0]:t).clientX,s=(t.touches?t.touches[0]:t).clientY,r=e.scrollSensitivity,c=e.scrollSpeed,l=T(),u=!1
;Jt!==n&&(Jt=n,ne(),Kt=e.scroll,i=e.scrollFn,!0===Kt&&(Kt=$(n,!0)));var d=0,m=Kt
;do{
var f=m,p=D(f),h=p.top,b=p.bottom,g=p.left,v=p.right,w=p.width,y=p.height,k=void 0,x=void 0,_=f.scrollWidth,O=f.scrollHeight,M=L(f),j=f.scrollLeft,S=f.scrollTop
;f===l?(k=w<_&&("auto"===M.overflowX||"scroll"===M.overflowX||"visible"===M.overflowX),
x=y<O&&("auto"===M.overflowY||"scroll"===M.overflowY||"visible"===M.overflowY)):(k=w<_&&("auto"===M.overflowX||"scroll"===M.overflowX),
x=y<O&&("auto"===M.overflowY||"scroll"===M.overflowY))
;var I=k&&(Math.abs(v-a)<=r&&j+w<_)-(Math.abs(g-a)<=r&&!!j),P=x&&(Math.abs(b-s)<=r&&S+y<O)-(Math.abs(h-s)<=r&&!!S)
;if(!te[d])for(var E=0;E<=d;E++)te[E]||(te[E]={})
;te[d].vx==I&&te[d].vy==P&&te[d].el===f||(te[d].el=f,
te[d].vx=I,te[d].vy=P,clearInterval(te[d].pid),
0==I&&0==P||(u=!0,te[d].pid=setInterval(function(){
o&&0===this.layer&&Rt.active._onTouchMove(Vt)
;var e=te[this.layer].vy?te[this.layer].vy*c:0,n=te[this.layer].vx?te[this.layer].vx*c:0
;"function"==typeof i&&"continue"!==i.call(Rt.dragged.parentNode[F],n,e,t,Vt,te[this.layer].el)||C(te[this.layer].el,n,e)
}.bind({layer:d}),24))),d++}while(e.bubbleScroll&&m!==l&&(m=$(m,!1)));ee=u}
}),30),se=function(t){
var e=t.originalEvent,n=t.putSortable,o=t.dragEl,i=t.activeSortable,a=t.dispatchSortableEvent,s=t.hideGhostForTarget,r=t.unhideGhostForTarget
;if(e){var c=n||i;s()
;var l=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e,u=document.elementFromPoint(l.clientX,l.clientY)
;r(),c&&!c.el.contains(u)&&(a("spill"),this.onSpill({dragEl:o,putSortable:n}))}}
;function re(){}function ce(){}function le(){function t(){this.defaults={
swapClass:"sortable-swap-highlight"}}return t.prototype={dragStart:function(t){
var e=t.dragEl;ie=e},dragOverValid:function(t){
var e=t.completed,n=t.target,o=t.onMove,i=t.activeSortable,a=t.changed,s=t.cancel
;if(i.options.swap){var r=this.sortable.el,c=this.options;if(n&&n!==r){var l=ie
;!1!==o(n)?(O(n,c.swapClass,!0),ie=n):ie=null,l&&l!==ie&&O(l,c.swapClass,!1)}
a(),e(!0),s()}},drop:function(t){
var e,n,o,i,a,s,r=t.activeSortable,c=t.putSortable,l=t.dragEl,u=c||this.sortable,d=this.options
;ie&&O(ie,d.swapClass,!1),
ie&&(d.swap||c&&c.options.swap)&&l!==ie&&(u.captureAnimationState(),
u!==r&&r.captureAnimationState(),
n=ie,a=(e=l).parentNode,s=n.parentNode,a&&s&&!a.isEqualNode(n)&&!s.isEqualNode(e)&&(o=E(e),
i=E(n),
a.isEqualNode(s)&&o<i&&i++,a.insertBefore(n,a.children[o]),s.insertBefore(e,s.children[i])),
u.animateAll(),u!==r&&r.animateAll())},nulling:function(){ie=null}},r(t,{
pluginName:"swap",eventProperties:function(){return{swapItem:ie}}})}
re.prototype={startIndex:null,dragStart:function(t){var e=t.oldDraggableIndex
;this.startIndex=e},onSpill:function(t){var e=t.dragEl,n=t.putSortable
;this.sortable.captureAnimationState(),n&&n.captureAnimationState()
;var o=I(this.sortable.el,this.startIndex,this.options)
;o?this.sortable.el.insertBefore(e,o):this.sortable.el.appendChild(e),
this.sortable.animateAll(),n&&n.animateAll()},drop:se},r(re,{
pluginName:"revertOnSpill"}),ce.prototype={onSpill:function(t){
var e=t.dragEl,n=t.putSortable||this.sortable
;n.captureAnimationState(),e.parentNode&&e.parentNode.removeChild(e),
n.animateAll()},drop:se},r(ce,{pluginName:"removeOnSpill"})
;var ue,de,me,fe,pe,he=[],be=[],ge=!1,ve=!1,we=!1;function ye(){function t(t){
for(var e in this)"_"===e.charAt(0)&&"function"==typeof this[e]&&(this[e]=this[e].bind(this))
;t.options.avoidImplicitDeselect||(t.options.supportPointer?g(document,"pointerup",this._deselectMultiDrag):(g(document,"mouseup",this._deselectMultiDrag),
g(document,"touchend",this._deselectMultiDrag))),
g(document,"keydown",this._checkKeyDown),
g(document,"keyup",this._checkKeyUp),this.defaults={
selectedClass:"sortable-selected",multiDragKey:null,avoidImplicitDeselect:!1,
setData:function(e,n){var o="";he.length&&de===t?he.forEach((function(t,e){
o+=(e?", ":"")+t.textContent})):o=n.textContent,e.setData("Text",o)}}}
return t.prototype={multiDragKeyDown:!1,isMultiDrag:!1,
delayStartGlobal:function(t){var e=t.dragEl;me=e},delayEnded:function(){
this.isMultiDrag=~he.indexOf(me)},setupClone:function(t){
var e=t.sortable,n=t.cancel;if(this.isMultiDrag){
for(var o=0;o<he.length;o++)be.push(N(he[o])),
be[o].sortableIndex=he[o].sortableIndex,
be[o].draggable=!1,be[o].style["will-change"]="",
O(be[o],this.options.selectedClass,!1),
he[o]===me&&O(be[o],this.options.chosenClass,!1);e._hideClone(),n()}},
clone:function(t){
var e=t.sortable,n=t.rootEl,o=t.dispatchSortableEvent,i=t.cancel
;this.isMultiDrag&&(this.options.removeCloneOnHide||he.length&&de===e&&(ke(!0,n),
o("clone"),i()))},showClone:function(t){
var e=t.cloneNowShown,n=t.rootEl,o=t.cancel
;this.isMultiDrag&&(ke(!1,n),be.forEach((function(t){L(t,"display","")
})),e(),pe=!1,o())},hideClone:function(t){
var e=this,n=(t.sortable,t.cloneNowHidden),o=t.cancel
;this.isMultiDrag&&(be.forEach((function(t){
L(t,"display","none"),e.options.removeCloneOnHide&&t.parentNode&&t.parentNode.removeChild(t)
})),n(),pe=!0,o())},dragStartGlobal:function(t){
t.sortable,!this.isMultiDrag&&de&&de.multiDrag._deselectMultiDrag(),
he.forEach((function(t){t.sortableIndex=E(t)})),he=he.sort((function(t,e){
return t.sortableIndex-e.sortableIndex})),we=!0},dragStarted:function(t){
var e=this,n=t.sortable;if(this.isMultiDrag){
if(this.options.sort&&(n.captureAnimationState(),this.options.animation)){
he.forEach((function(t){t!==me&&L(t,"position","absolute")}))
;var o=D(me,!1,!0,!0);he.forEach((function(t){t!==me&&B(t,o)})),ve=!0,ge=!0}
n.animateAll((function(){
ve=!1,ge=!1,e.options.animation&&he.forEach((function(t){R(t)
})),e.options.sort&&xe()}))}},dragOver:function(t){
var e=t.target,n=t.completed,o=t.cancel;ve&&~he.indexOf(e)&&(n(!1),o())},
revert:function(t){var e=t.fromSortable,n=t.rootEl,o=t.sortable,i=t.dragRect
;he.length>1&&(he.forEach((function(t){o.addAnimationState({target:t,
rect:ve?D(t):i}),R(t),t.fromRect=i,e.removeAnimationState(t)
})),ve=!1,function(t,e){he.forEach((function(n,o){
var i=e.children[n.sortableIndex+(t?+o:0)]
;i?e.insertBefore(n,i):e.appendChild(n)}))}(!this.options.removeCloneOnHide,n))
},dragOverCompleted:function(t){
var e=t.sortable,n=t.isOwner,o=t.insertion,i=t.activeSortable,a=t.parentEl,s=t.putSortable,r=this.options
;if(o){
if(n&&i._hideClone(),ge=!1,r.animation&&he.length>1&&(ve||!n&&!i.options.sort&&!s)){
var c=D(me,!1,!0,!0);he.forEach((function(t){t!==me&&(B(t,c),a.appendChild(t))
})),ve=!0}if(!n)if(ve||xe(),he.length>1){var l=pe
;i._showClone(e),i.options.animation&&!pe&&l&&be.forEach((function(t){
i.addAnimationState({target:t,rect:fe
}),t.fromRect=fe,t.thisAnimationDuration=null}))}else i._showClone(e)}},
dragOverAnimationCapture:function(t){
var e=t.dragRect,n=t.isOwner,o=t.activeSortable;if(he.forEach((function(t){
t.thisAnimationDuration=null
})),o.options.animation&&!n&&o.multiDrag.isMultiDrag){fe=r({},e);var i=M(me,!0)
;fe.top-=i.f,fe.left-=i.e}},dragOverAnimationComplete:function(){
ve&&(ve=!1,xe())},drop:function(t){
var e=t.originalEvent,n=t.rootEl,o=t.parentEl,i=t.sortable,a=t.dispatchSortableEvent,s=t.oldIndex,r=t.putSortable,c=r||this.sortable
;if(e){var l=this.options,u=o.children
;if(!we)if(l.multiDragKey&&!this.multiDragKeyDown&&this._deselectMultiDrag(),
O(me,l.selectedClass,!~he.indexOf(me)),
~he.indexOf(me))he.splice(he.indexOf(me),1),ue=null,X({sortable:i,rootEl:n,
name:"deselect",targetEl:me,originalEvent:e});else{if(he.push(me),X({sortable:i,
rootEl:n,name:"select",targetEl:me,originalEvent:e
}),e.shiftKey&&ue&&i.el.contains(ue)){var d,m,f=E(ue),p=E(me)
;if(~f&&~p&&f!==p)for(p>f?(m=f,
d=p):(m=p,d=f+1);m<d;m++)~he.indexOf(u[m])||(O(u[m],l.selectedClass,!0),
he.push(u[m]),X({sortable:i,rootEl:n,name:"select",targetEl:u[m],originalEvent:e
}))}else ue=me;de=c}if(we&&this.isMultiDrag){
if(ve=!1,(o[F].options.sort||o!==n)&&he.length>1){
var h=D(me),b=E(me,":not(."+this.options.selectedClass+")")
;if(!ge&&l.animation&&(me.thisAnimationDuration=null),c.captureAnimationState(),
!ge&&(l.animation&&(me.fromRect=h,he.forEach((function(t){
if(t.thisAnimationDuration=null,t!==me){var e=ve?D(t):h
;t.fromRect=e,c.addAnimationState({target:t,rect:e})}
}))),xe(),he.forEach((function(t){
u[b]?o.insertBefore(t,u[b]):o.appendChild(t),b++})),s===E(me))){var g=!1
;he.forEach((function(t){t.sortableIndex===E(t)||(g=!0)
})),g&&(a("update"),a("sort"))}he.forEach((function(t){R(t)})),c.animateAll()}
de=c}(n===o||r&&"clone"!==r.lastPutMode)&&be.forEach((function(t){
t.parentNode&&t.parentNode.removeChild(t)}))}},nullingGlobal:function(){
this.isMultiDrag=we=!1,be.length=0},destroyGlobal:function(){
this._deselectMultiDrag(),
v(document,"pointerup",this._deselectMultiDrag),v(document,"mouseup",this._deselectMultiDrag),
v(document,"touchend",this._deselectMultiDrag),
v(document,"keydown",this._checkKeyDown),v(document,"keyup",this._checkKeyUp)},
_deselectMultiDrag:function(t){
if(!(void 0!==we&&we||de!==this.sortable||t&&k(t.target,this.options.draggable,this.sortable.el,!1)||t&&0!==t.button))for(;he.length;){
var e=he[0];O(e,this.options.selectedClass,!1),he.shift(),X({
sortable:this.sortable,rootEl:this.sortable.el,name:"deselect",targetEl:e,
originalEvent:t})}},_checkKeyDown:function(t){
t.key===this.options.multiDragKey&&(this.multiDragKeyDown=!0)},
_checkKeyUp:function(t){
t.key===this.options.multiDragKey&&(this.multiDragKeyDown=!1)}},r(t,{
pluginName:"multiDrag",utils:{select:function(t){var e=t.parentNode[F]
;e&&e.options.multiDrag&&!~he.indexOf(t)&&(de&&de!==e&&(de.multiDrag._deselectMultiDrag(),
de=e),O(t,e.options.selectedClass,!0),he.push(t))},deselect:function(t){
var e=t.parentNode[F],n=he.indexOf(t)
;e&&e.options.multiDrag&&~n&&(O(t,e.options.selectedClass,!1),he.splice(n,1))}},
eventProperties:function(){var t,e=this,n=[],o=[]
;return he.forEach((function(t){var i;n.push({multiDragElement:t,
index:t.sortableIndex
}),i=ve&&t!==me?-1:ve?E(t,":not(."+e.options.selectedClass+")"):E(t),o.push({
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
he.forEach((function(t){t!==me&&t.parentNode&&t.parentNode.removeChild(t)}))}
Rt.mount(new function(){function t(){for(var t in this.defaults={scroll:!0,
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
Vt=Jt=Kt=ee=Zt=Yt=Qt=null,te.length=0},_handleFallbackAutoScroll:function(t){
this._handleAutoScroll(t,!0)},_handleAutoScroll:function(t,e){
var n=this,o=(t.touches?t.touches[0]:t).clientX,i=(t.touches?t.touches[0]:t).clientY,a=document.elementFromPoint(o,i)
;if(Vt=t,e||this.options.forceAutoScrollFallback||d||u||f){
ae(t,this.options,a,e);var s=$(a,!0)
;!ee||Zt&&o===Yt&&i===Qt||(Zt&&oe(),Zt=setInterval((function(){
var a=$(document.elementFromPoint(o,i),!0);a!==s&&(s=a,ne()),ae(t,n.options,a,e)
}),10),Yt=o,Qt=i)}else{
if(!this.options.bubbleScroll||$(a,!0)===T())return void ne()
;ae(t,this.options,$(a,!1),!1)}}},r(t,{pluginName:"scroll",
initializeByDefault:!0})}),Rt.mount(ce,re);const _e=Rt},4893:(t,e,n)=>{
n.r(e),n.d(e,{default:()=>g})
;var o=n(5072),i=n.n(o),a=n(7825),s=n.n(a),r=n(7659),c=n.n(r),l=n(5056),u=n.n(l),d=n(540),m=n.n(d),f=n(1113),p=n.n(f),h=n(6906),b={}
;b.styleTagTransform=p(),
b.setAttributes=u(),b.insert=c().bind(null,"html"),b.domAPI=s(),
b.insertStyleElement=m(),i()(h.A,b);const g=h.A&&h.A.locals?h.A.locals:void 0},
5072:t=>{var e=[];function n(t){
for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}
function o(t,o){for(var a={},s=[],r=0;r<t.length;r++){
var c=t[r],l=o.base?c[0]+o.base:c[0],u=a[l]||0,d="".concat(l," ").concat(u)
;a[l]=u+1;var m=n(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],
layer:c[5]};if(-1!==m)e[m].references++,e[m].updater(f);else{var p=i(f,o)
;o.byIndex=r,e.splice(r,0,{identifier:d,updater:p,references:1})}s.push(d)}
return s}function i(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){
if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return
;n.update(t=e)}else n.remove()}}t.exports=function(t,i){var a=o(t=t||[],i=i||{})
;return function(t){t=t||[];for(var s=0;s<a.length;s++){var r=n(a[s])
;e[r].references--}for(var c=o(t,i),l=0;l<a.length;l++){var u=n(a[l])
;0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=c}}},7659:t=>{var e={}
;t.exports=function(t,n){var o=function(t){if(void 0===e[t]){
var n=document.querySelector(t)
;if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{
n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t)
;if(!o)throw Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.")
;o.appendChild(n)}},540:t=>{t.exports=function(t){
var e=document.createElement("style")
;return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},
5056:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},
7825:t=>{t.exports=function(t){if("undefined"==typeof document)return{
update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{
update:function(n){!function(t,e,n){var o=""
;n.supports&&(o+="@supports (".concat(n.supports,") {")),
n.media&&(o+="@media ".concat(n.media," {"));var i=void 0!==n.layer
;i&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,
i&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap
;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),
e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){
if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},1113:t=>{
t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{
for(;e.firstChild;)e.removeChild(e.firstChild)
;e.appendChild(document.createTextNode(t))}}},3376:(t,e)=>{
Object.defineProperty(e,"__esModule",{value:!0
}),e.t=void 0,e.t=(t,e)=>!(!["258d3f","28fa48","1f6fae","21d476"].includes(e)&&!["253d","2de3","2d3d","235f","5416","2396"].includes(t))
},276:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.l=void 0
;const o=n(6185);e.l=()=>{document.addEventListener("dblclick",(t=>{
const e=t?.target
;"INPUT"===e?.tagName&&(e.className.includes("buyAmountInput")&&(t=>{
const e=t?.closest("div[class^=buyMenu]")?.querySelector("span[class^=amount]"),n=e?.innerText?.match(/\d+/)?.[0]??"1"
;(0,o.u)(t,Math.min((0,o.m)(n),1e4).toString())
})(e),e.className.includes("input-money")&&(async t=>{if(!t)return
;const e=t.closest("li")?"li":"div[class^=row]",n=t?.closest(e)?.querySelector("img")?.src.match(/\d+/)?.[0]
;if(!n)return;const i={section:"market",select:"bazaar",objID:n
},a=await(0,o.p)(i);if(!a?.status)return
;const{bazaar:s}=a,r=(0,o.m)(s[1]?.cost??"")-1;(0,o.h)(t,r.toString())
})(e),"clear-all"==e.className&&(t=>{
const e=t?.closest("li")?.querySelector("div.name-wrap"),n=e?.innerText?.match(/x(\d+)/)?.[1]??"1"
;t.className.includes("removeAmount")?(0,o.u)(t,n):(0,o.h)(t,n)
})(e),e.className.includes("removeAmount")&&(t=>{
const e=t?.closest("div[class^=row]")?.querySelector("div[class^=desc]"),n=e?.innerText?.match(/x(\d+)/)?.[1]??"1"
;(0,o.u)(t,n)})(e))}))}},1913:(t,e,n)=>{Object.defineProperty(e,"__esModule",{
value:!0}),e.v=void 0;const o=n(6185);e.v=async()=>{const t={section:"user",
select:"bazaar",objID:(0,o.k)("userId")??""},e=await(0,o.p)(t)
;if(!e?.status)return
;const{bazaar:n}=e,i=n.reduce(((t,e)=>t+ +e?.price*+e.quantity),0),a=n.reduce(((t,e)=>t+ +e?.market_price*+e.quantity),0),s=(0,
o._)({classList:"nst-trade-value",
innerText:`Total: $${(0,o.O)(i)} - MV: $${(0,o.O)(a)}`})
;document?.querySelector("#bazaarRoot .wrapper")?.insertAdjacentElement("afterend",s)
}},5661:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.L=void 0
;const o=n(6185);e.L=async t=>{
const e=Array.from(t.querySelectorAll('[class*="torn-item"]'))
;if(0===e.length)return;const n=await(0,o.p)({section:"torn",select:"items"})
;if(!n?.status)return;const i=n?.items,a={};e.forEach((t=>{
const e=t.getAttribute("src"),n=(0,o.m)(e);a[n]={name:i[n]?.name,
type:i[n]?.type,value:+i[n]?.market_value,count:n in a?+a[n]?.count+1:1
},t.setAttribute("src",e.replace("small","large")),
t.classList.add("nst-city-item")}))
;const s=Object.values(a).reduce(((t,e)=>t+e.value*e.count),0),r=Object.values(a).map((t=>`${t.name} x${t.count}`)).join(", ").replace(/, $/,"."),c=(0,
o.M)({title:"City Finds",element:t.closest("#tab-menu")}),l=(0,o._)({
classList:"nst-box-column"});l.appendChild((0,o._)({classList:"nst-findsworth",
innerText:"Worth: $"+(0,o.O)(s)})),l.appendChild((0,o._)({
classList:"nst-findslist",innerText:""+r})),c.appendChild(l)}},4051:(t,e,n)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.j=void 0;const o=n(6185)
;e.j=()=>{document.addEventListener("dblclick",(t=>{const e=t?.target
;"INPUT"===e?.tagName&&"text"===e?.type&&e.className.includes("input-money")&&(t=>{
if(!t.closest("li"))return
;const e=t?.closest("li")?.querySelector("div.sold-daily").innerText,n=(0,
o.m)(e).toString();(0,o.h)(t,n)})(e)}))}},3980:(t,e,n)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.T=void 0;const o=n(6185)
;e.T=()=>{document.addEventListener("dblclick",(t=>{const e=t?.target
;if("INPUT"!==e?.tagName)return
;const n=e.parentElement?.parentElement,i=(0,o.m)(n?.querySelector(".instock").innerText)
;e.value=""+Math.min(i,100)}))}},488:(t,e,n)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.D=void 0;const o=n(6185)
;e.D=()=>{console.log("nst - init default start")
;const t=(0,o.S)()??{},e={},n=i.script,a=t?.script??n
;Object.keys(a).forEach((t=>{n[t]&&(n[t].enabled=a[t].enabled)
})),t.script=n,Object.keys(i).forEach((n=>e[n]=t[n]??i[n])),
(0,o.I)(e),console.log("nst - init default end")};const i={script:{drugnoti:{
name:"drug cooldown",enabled:!1,
description:"display a notification when not on drugs",onpage:"notification"},
travnoti:{name:"travel",enabled:!1,
description:"display a notification when near landing",onpage:"notification"},
hospnoti:{name:"hospital",enabled:!1,
description:"display a notification when almost out of hosp",
onpage:"notification"},eventnoti:{name:"events",enabled:!1,
description:"display a notification when there are new events",
onpage:"notification"},msgnoti:{name:"messages",enabled:!1,
description:"display a notification when there are new messages",
onpage:"notification"},leftalign:{name:"left align",enabled:!1,
description:"align torn to the left",onpage:"all"},refillreminder:{
name:"refill reminder",enabled:!1,
description:"highlight energy and nerve bar if refills haven't been used",
onpage:"all"},minilastaction:{name:"mini profile last action",enabled:!1,
description:"display last action on mini profile",onpage:"all"},
bazaarautoprice:{name:"bazaar auto price",enabled:!1,
description:"autoprice item for bazaar (double-click on input box)",
onpage:"bazaar"},bazaarvalue:{name:"bazaar value",enabled:!1,
description:"show value of bazaar",onpage:"bazaar"},pokername:{
name:"poker name link",enabled:!1,description:"add link to player name",
onpage:"casino"},rrtimeout:{name:"RR timeout",enabled:!1,
description:"add timeout timer to RR games",onpage:"casino"},cityfinds:{
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
onpage:"trade"},warvalue:{name:"war reward value",enabled:!1,
description:"add caches value to war report",onpage:"war"}},assaperk:!1,hold:!1,
jailscore:1e4,lastnoti:1,mugperc:.075,mugthreshold:4e6,outcome:"leave",
quickbail:!1,quickbust:!1,quickfaction:{},quickitems:{},reloadone:!1,
reloadtwo:!1,spgymone:"elites",spgymtwo:"frontline",temp:!1,weapon:{primary:0,
secondary:1,melee:2}}},714:(t,e,n)=>{Object.defineProperty(e,"__esModule",{
value:!0}),e.P=void 0;const o=n(6185);e.P=t=>{
0!==(0,o.$)().match(/manage/g).length&&t&&Array.from(t.children).forEach((t=>{
const e=t.getAttribute("itemid"),n=t.querySelector(".name .desc")
;n&&e&&n.insertAdjacentElement("afterBegin",(0,o.q)({classList:"text-nstmain",
innerText:"ID: "+e}))}))}},1108:(t,e)=>{Object.defineProperty(e,"__esModule",{
value:!0}),e.C=void 0,e.C=t=>{
Array.from(t?.querySelectorAll("ul[class*='slotItems']")).forEach((t=>{
t.addEventListener("click",(()=>{
const e=t?.parentNode?.parentNode?.childNodes[0]?.childNodes[1]?.childNodes[1]
;e.click()}))}))}},9149:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0
}),e.N=void 0;const o=n(6185);e.N=t=>{if(!t)return
;const e=t.getElementsByTagName("ul")[0],n=Array.from(e.children),i={Strength:0,
Defense:0,Speed:0,Dexterity:0,Total:0};for(const t of n){
const e=t.getAttribute("aria-label");if(!e)return;const n=e.split(" ")
;if(n.length>2){
const t=n[0].replace(/:/g,""),e=(0,o.m)(n[1]),a=n[2].replace(/%/g,""),s=a.charAt(0),r=(0,
o.m)(a),c="+"==s?r/100+1:1-r/100;i[t]=Math.round(e*c),i.Total+=Math.round(e*c)}}
e.lastElementChild.removeAttribute("class");const a=(0,o._)({
classList:"nst-box-header"});a.appendChild((0,o.q)({classList:"nst-box-title"
})).appendChild((0,o.q)({id:"nst-box-title",innerText:"Effective Stats"
})),e.appendChild(a),Object.keys(i).forEach((t=>{const n=(0,o.B)({tabIndex:0,
ariaLabel:`${t} ${(0,o.O)(i[t])}`}),a=(0,o.q)({classList:"divider",
innerHTML:`<span>${t}</span>`}),s=(0,o.q)({classList:"desc",
innerText:` ${(0,o.O)(i[t])} `,style:"margin-left: 3px"})
;n.appendChild(a),n.appendChild(s),e.appendChild(n)
})),e.lastElementChild.classList.add("last")}},7188:(t,e,n)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.R=void 0
;const o=n(6185),i=(t,e)=>{if(!t?.querySelector)return
;if(!t?.querySelector("ul.employee-list"))return
;const n=t?.querySelector("ul.employee-list")?.children,i=Array.from(n)
;if(0===i.length)return;const a=(0,o.U)()-86400,s=(0,o.U)()-172800
;i.forEach((t=>{const n=t?.getAttribute("data-user");if(!n)return
;const o=e[n]?.last_action?.timestamp,i=t?.querySelector(".employee")
;if(!i)return;const r=o<s?"bg-nstred":o<a?"bg-nstyellow":""
;r&&i.classList.add(r)}))};e.R=async t=>{if(!t)return;const e=await(0,o.p)({
section:"company",select:"employees"});if(!e?.status)return
;const{company_employees:n}=e;i(t,n),new MutationObserver((t=>{t.forEach((t=>{
Array.from(t.addedNodes).forEach((t=>i(t,n)))}))})).observe(t,{childList:!0,
subtree:!0})}},7716:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0
}),e.F=void 0;const o=n(6185);e.F=t=>{
const{step:e,action:n,confirm:i}=(0,o.H)(t)
;return"actionForm"!==e||"equip"!==n||1===i?(0,o.G)({...(0,o.H)(t)}):(0,o.G)({
...(0,o.H)(t),confirm:1})}},9355:(t,e)=>{Object.defineProperty(e,"__esModule",{
value:!0}),e.W=void 0;const n=t=>{let e=0;t.addEventListener("click",(()=>{
if(1!=e++)return
;e=0,document.querySelector('.deposit-box input[value="DEPOSIT"], .deposit button.torn-btn, #armoury-donate .cash button').click()
;const t=document.querySelector("#armoury-donate .cash-confirm .yes")
;t&&t.click()}))};e.W=t=>{
const e=document.querySelector(".deposit-box .input-money-symbol, .deposit .input-money-symbol")
;e&&n(e),new MutationObserver((t=>{t.forEach((t=>{
Array.from(t.addedNodes).forEach((t=>{
const e=t.querySelector&&t.querySelector(".deposit-box .input-money-symbol, .deposit .input-money-symbol, .donate .input-money-symbol")
;e&&n(e)}))}))})).observe(t,{childList:!0,subtree:!0})}},1549:(t,e,n)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.X=void 0
;const o=n(6185),i=(0,
o.k)("user2ID")??"",a=(0,o.S)(),{reloadone:s,reloadtwo:r,weapon:c}=a
;let l={},u={},d=!1,m=0;const f=()=>{
const t=u?.defenderUser?.life,e=l?.currentAttackStatus,n=u?.attackStatus,{hold:i}=(0,
o.S)()
;return i&&t<2?"hold":"end"===n&&"endResult"in u?"end":t<2&&"finishOptions"in u?"finish":"error"in u?"check":d||"notStarted"!==n?d||"process"===e?"hit":"check":"start"
},p=()=>{
const t=u?.attackerAmmoStatus,e=u?.currentClips?.[0],n=u?.attackerItems[1]?.item[0]?.currentBonuses,i=u?.attackerItems[2]?.item[0]?.currentBonuses,a=u?.currentMove,l={
primary:()=>{
const n=null!=u?.attackerItems[1]?.item[0]?.ID,o="0"!==e?.attackerPrimaryRoundsLeft,i=!t?.[1]?.includes("No ammo")
;return n&&i&&(o||s)},secondary:()=>{
const n=null!=u?.attackerItems?.[2]?.item[0]?.ID,o="0"!==e?.attackerSecondaryRoundsLeft,i=!t?.[2]?.includes("No ammo")
;return n&&i&&(o||r)},melee:()=>null!=u?.attackerItems?.[3]?.item[0]?.ID}
;if(0===a&&(0,o.S)()?.assaperk){if("Assassinate"===n?.[72]?.title)return 1
;if("Assassinate"===i?.[72]?.title)return 2}if((()=>{
if(void 0===u?.attackerItems?.[5]?.item[0]?.ID)return!1;const{temp:t}=(0,o.S)()
;if(!t)return!1
;const e=u?.attackerItems[5]?.item[0]?.ID,n=u?.defenderItems[6]?.item[0]?.ID
;return!("256"===e&&["670","1355","348"].includes(n)||"392"===e&&["348","642","644","655","670","675","680","1355"].includes(n))
})())return 5;do{const t=Object.keys(c).filter((t=>c[t]==m))[0]
;if(l[t]())return h[t];m++}while(m<3);return 999},h={primary:1,secondary:2,
melee:3,temp:5},b={check:()=>u.error??"checking",start:()=>"start fight",
finish:()=>"executing",end:()=>u?.endResult?.info??u?.endResult?.groupEvent,
hit:()=>{const t=+u?.defenderUser?.life,e=+u?.defenderUser?.maxlife
;return`${t} / ${e} (${Math.floor(t/e*100)}%)`}},g={check:()=>({user2ID:i}),
start:()=>(d=!0,{step:"startFight",user2ID:i}),finish:()=>{
const{outcome:t}=(0,o.S)();return{step:"finish",fightResult:t}},hold:()=>({}),
end:()=>({}),hit:()=>{const t="user1EquipedItemID";return{step:"attack",
user2ID:i,[t]:p()}}},v=async t=>{const e=t.target;e.disabled=!0
;const n=f(),i=(g[n]??g.error)();if((0,o.K)(i))return
;const a="https://www.torn.com/loader.php?sid=attackData&mode=json&rfcv="+(0,
o.J)(),s={method:"POST",headers:{"x-requested-with":"XMLHttpRequest"},
body:new URLSearchParams(i)};console.log(n,i),await fetch(a,{...s
}).then((t=>t.json())).then((t=>((t,e)=>{e.disabled=!1,console.log(t),l=t,u=t.DB
;const n=f();e.innerText=b[n]()})(t,e))).catch((t=>console.error(t)))}
;e.X=t=>(t=>{const e=(0,o.M)({title:"fighterino",element:t})
;e.classList.remove("nst-box-row"),e.classList.add("nst-box-column")
;const n=(()=>{const t=(0,o._)({classList:"nst-box-column"}),e=(0,o._)({
classList:"nst-outcome"});e.addEventListener("change",(t=>{const e=t.target.id
;(0,o.I)({outcome:e})}))
;const n=(0,o.Y)("leave","outcome"),i=(0,o.Y)("mug","outcome"),a=(0,
o.Y)("hospitalize","outcome")
;e.appendChild(n),e.appendChild(i),e.appendChild(a),t.appendChild(e);const s=(0,
o._)({classList:"nst-outcome"}),r={id:"nst-hold",checked:(0,o.S)("hold")
},c=(0,o.V)(r,"hold","",(t=>{const e=t.target.checked;(0,o.I)({hold:e})})),l={
id:"nst-temp",checked:(0,o.S)("temp")},u=(0,o.V)(l,"use temp first","",(t=>{
const e=t.target.checked;(0,o.I)({temp:e})})),d={id:"nst-assa",
checked:(0,o.S)("assaperk")},m=(0,o.V)(d,"assassinate","",(t=>{
const e=t.target.checked;(0,o.I)({assaperk:e})}))
;return s.appendChild(c),s.appendChild(u),s.appendChild(m),t.appendChild(s),t
})(),i=(0,o._)({classList:"nst-box-column"}),a=(0,o.Z)({id:"nst-fighteroo",
classList:"torn-btn m-2",innerText:"fighterino"});a.addEventListener("click",v),
i.appendChild(a),e.appendChild(n),e.appendChild(i)})(t)},8257:(t,e,n)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.tt=e.et=void 0
;const o=n(6185),i=n(9607),a={},s={balboas:{req:["defense","dexterity"],
desc:"balboas (def/dex)"},frontline:{req:["strength","speed"],
desc:"frontline (str/spd)"},gym3000:{req:["strength"],desc:"gym3000 (str)"},
isoyamas:{req:["defense"],desc:"isoyamas (def)"},rebound:{req:["speed"],
desc:"rebound (spd)"},elites:{req:["dexterity"],desc:"elites (dex)"}},r=t=>{
const e=(0,o.M)({title:"Special Gym",element:t});["one","two"].forEach((t=>{
const n=(0,o._)({id:"nst-spgym-"+t}),i=(0,o.nt)("select",{
id:`nst-spgym-${t}-sel`,classList:"nst-spgym-sel"})
;Object.entries(s).forEach((([e,n])=>{const a={value:e,innerText:n.desc
},s=(0,o.nt)("option",a)
;s.selected=(0,o.S)("spgym"+t)?.toString()===e,i.appendChild(s)
})),i.addEventListener("change",(t=>{
const e=t?.target,n=e.id.replace(/nst-/g,"").replace(/-sel/g,"").replace(/-/g,"")
;(0,o.I)({[n]:e.value})}));const a=(0,o.ot)({id:`nst-spgym-${t}-msg`,
classList:"nst-spgym-msg"});n.appendChild(i),n.appendChild(a),e.appendChild(n)
}))},c=()=>{["one","two"].forEach((t=>{
const e=document.querySelector(`#nst-spgym-${t}-sel`),n=document.querySelector(`#nst-spgym-${t}-msg`),i=e.value,r=Object.keys(a).filter((t=>s[i].req.includes(t))).reduce(((t,e)=>({
...t,[e]:a[e]
})),{}),c=Object.keys(a).filter((t=>!s[i].req.includes(t))).reduce(((t,e)=>({
...t,[e]:a[e]
})),{}),l=Object.values(r).reduce(((t,e)=>t+e),0),u=Object.values(c).reduce(Object.keys(r).length>1?(t,e)=>t+e:(t,e)=>Math.max(t,e),0),d=l>=1.25*u?(0,
o.O)(l/1.25-u):(0,
o.O)(1.25*u-l),m=Object.keys(r).length>1?Object.keys(l>=1.25*u?c:r).join(" and "):(l>=1.25*u?Object.keys(c).filter((t=>a[t]===u)):Object.keys(r)).join(""),f=`Gain ${l>=1.25*u?"no more than":""} ${d} ${m}`
;n.innerText=f}))};e.et=t=>{
Object.entries(t?.stats).forEach((([t,e])=>a[t]=(0,o.m)(e?.value))),
(0,i.it)(r,"#gymroot"),c()},e.tt=t=>{
a[t?.stat?.name]=(0,o.m)(t?.stat?.newValue),c()}},6703:(t,e,n)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.st=void 0;const o=n(6185)
;e.st=t=>{t=t.closest('ul[class*="properties"]')
;const e=(0,o.S)("userdata"),n=[...e.faction_perks,...e.job_perks,...e.property_perks,...e.education_perks,...e.book_perks].filter((t=>t.includes("gym gains")))
;["strength","defense","speed","dexterity"].forEach((i=>{
const a=e.faction_perks.filter((t=>t.includes(i+" gym gains"))).reduce(((t,e)=>t+(0,
o.m)(e.match(/\d+/))),0),s=n.filter((t=>t.includes(i)||t.match(/% gym gains?/))).reduce(((t,e)=>t+(0,
o.m)(e.match(/\d+/))),0),r=(0,o._)({id:"nst-steadfast-"+i,
classList:"nst-steadfast",innerText:`steadfast: ${a}% (${s}%)`})
;t.querySelector("[class*="+i).insertAdjacentElement("afterbegin",r)}))}},
5689:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0
}),e.rt=void 0,e.rt=t=>{
document.getElementById("skip-to-content").innerText=t?.innerText}},
2470:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.ct=void 0
;const o=n(6185);e.ct=t=>{if(!("currentFightStatistics"in t))return
;const e=Array.from(document.querySelectorAll('ul[class^="participants"] div[class^= "playerWrap"] > span[class^= "playername"]'))
;0!==e.length&&e.forEach((e=>{if(e.querySelector(".nst-intercept"))return
;const n=e.innerText,i=Object.values(t?.currentFightStatistics).filter((t=>t?.playername===n))[0],a=i?.userID
;e.innerHTML="",e.appendChild((0,o.lt)({classList:"nst-intercept",
href:"loader.php?sid=attack&user2ID="+a,target:"_blank",innerText:""+n}))}))}},
1379:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0
}),e.ut=void 0,e.ut=()=>{
document.documentElement.classList.add("nst-left-align")}},8620:(t,e,n)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.dt=void 0;const o=n(6185)
;e.dt=t=>{if(!t)return
;const e=t?.parentElement,n=(0,o.S)("userdata"),i=(0,o.m)(n?.networth?.total),a=(0,
o.m)(n?.personalstats?.networth),s=Math.round(i-a),r=s>0?"text-nstgreen":s<0?"text-nstred":"",c=`<b class='${r}'>$${(0,
o.O)(s)}</b>`,l=(0,o.B)({classList:"last",tabIndex:0,
ariaLabel:"Live NW: "+(0,o.O)(i)}),u=(0,o.q)({classList:"divider",
innerHTML:"<span>Live Networth</span>"}),d=(0,o.q)({
classList:`desc ${r} font-bold`,innerText:` $${(0,o.O)(i)} `,
style:"margin-left: 3px; margin-right: 3px;"}),m=(0,o.nt)("i",{
classList:"networth-info-icon",title:c,style:"margin-left: 6px;"})
;l.appendChild(u),
l.appendChild(d).insertAdjacentElement("beforeend",m),e.lastElementChild.removeAttribute("class"),
e.appendChild(l)}},8954:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0
}),e.ft=e.ht=void 0;const o=n(6185);e.ht=t=>{const{step:e}=(0,o.H)(t)
;if("buyItem"!==e)return(0,o.G)({...(0,o.H)(t)})
;const n=(0,o.$)()?.match(/(shop|market)/g)?.[0],i={market:t=>{
const e=t.replace("step=buyItem","step=buyItemConfirm");return(0,o.G)({
...(0,o.H)(e),item:0})},shop:t=>{
const e=t.replace("step=buyItem","step=buyItemConfirm");return(0,o.G)({
...(0,o.H)(e),item:0})},noloc:t=>(0,o.G)({...(0,o.H)(t)})}
;return(i[n]??i.noloc)(t)},e.ft=t=>{new MutationObserver((e=>{e.forEach((e=>{
const n=(0,o.$)()?.match(/(shop|market)/g)?.[0],i=".items > li.show-item-info"
;Array.from(e.addedNodes).forEach((e=>{if(e.querySelector&&e.querySelector(i)){
if("shop"!==n)return;Array.from(t.querySelectorAll(i)).forEach((t=>{
t.querySelector(".buy .buy-link").dataset.price=t?.querySelector(".cost")?.innerText?.replace(",","")?.match(/\d+/)?.[0]
}))}}))}))})).observe(t,{childList:!0,subtree:!0})}},3424:(t,e,n)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.bt=void 0;const o=n(6185)
;e.bt=()=>{document.addEventListener("dblclick",(t=>{const e=t?.target
;if("INPUT"!==e?.tagName)return
;const n=e?.parentElement?.parentElement?.parentElement?.parentElement,i=(0,
o.m)(document?.querySelector(".travel-agency-market .availableItemsAmount")?.getAttribute("value")),a=(0,
o.m)(document.getElementById("user-money").innerText),s=(0,
o.m)(n?.querySelector(".cost .c-price").innerText),r=(0,
o.m)(n?.querySelector(".stock .stck-amount").innerText),c=a/s>=i?i:Math.trunc(a/s),l=Math.min(c,r).toString()
;(0,o.h)(e,l)}))}},1717:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0
}),e.gt=void 0;const o=n(6185),i=n(9607);let a;const s=t=>{
t?.querySelector("#nst-lastaction")||t.appendChild((0,o._)({id:"nst-lastaction",
innerText:"last action: "+a}))};e.gt=t=>{
a=(0,o.vt)(+t.user.lastAction.seconds).trim(),
(0,i.it)(s,'#profile-mini-root [class*="profile-mini-_userProfileWrapper"]')}},
763:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.wt=void 0
;const o=n(6185),i={a_good_day_to_get_hard:{
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
task:"Injure (P)'s both arms."},wrath_of_duke:{task:"Defeat 4 (P)."}};e.wt=t=>{
Array.from(t.querySelectorAll(".giver-cont-wrap > div[id^=mission]:not(.nst-edit)")).forEach((t=>{
if(!t?.querySelector)return
;const e=t?.querySelector(".title-black")?.childNodes[0].textContent.replace(/\n/g,"").trim(),n=e.toLowerCase().replaceAll(/[ -]/g,"_").replaceAll(/[:!,]/g,""),a=n in i?i?.[n]?.task:"mission not found",s=(0,
o.q)({innerHTML:"<br/><br/><b>todo:</b> "+a,classList:"text-nstmain"})
;t.querySelector(".max-height-fix")?.appendChild(s),t.classList.add("nst-edit")
}))}},8689:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0
}),e.yt=void 0;const o=n(6185),i=t=>GM.notification(t);e.yt=(t,e)=>{
(0,o.kt)("drugnoti")&&((t,e)=>{const n=e?.cooldowns?.drug,o=t?.cooldowns?.drug
;0!==o&&0===n&&i({title:"NST: Drug Cooldown",
text:"Your drug cooldown has expired."})})(t,e),(0,o.kt)("travnoti")&&((t,e)=>{
const n=e?.travel?.time_left,a=t?.travel?.time_left,s=e?.travel?.destination
;n<=120&&n!==a&&i({title:"NST: Travel",text:`${s} - Landing in ${(0,o.vt)(n)}`})
})(t,e),(0,o.kt)("hospnoti")&&((t,e)=>{
const n=e?.states?.hospital_timestamp,a=t?.states?.hospital_timestamp;if(!(n-(0,
o.U)()<=300&&n!==a))return;const s=Math.round(n-(0,o.U)());i({
title:"NST: Hospital",text:"Out of hosp in "+(0,o.vt)(s)})
})(t,e),(0,o.kt)("eventnoti")&&((t,e)=>{
const n=e?.notifications?.messages,o=t?.notifications?.messages
;0!==n&&n!==o&&i({title:"NST: New Message",
text:`You have ${n} new message${1===n?"":"s"}.`})
})(t,e),(0,o.kt)("msgnoti")&&((t,e)=>{
const n=e?.notifications?.events,o=t?.notifications?.events;0!==n&&n!==o&&i({
title:"NST: New Event",text:`You have ${n} new event${1===n?"":"s"}.`})})(t,e)}
},3243:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.xt=void 0
;const o=n(6185),i=t=>{
const e=t?.querySelector(".total-price"),n=t?.querySelector(".action")
;(0,o.m)(e?.innerText)*o.minMugPerc>=o.mugThres&&n.classList.add("text-black","bg-nstmain")
};e.xt=t=>{new MutationObserver((t=>{t.forEach((t=>{
Array.from(t.addedNodes).forEach((t=>{
const e="LI"===t?.tagName,n=t?.firstElementChild;e&&n&&i(n)}))}))})).observe(t,{
childList:!0,subtree:!0
}),Array.from(document.querySelectorAll(".users-point-sell > li")).forEach((t=>i(t?.firstElementChild)))
}},8601:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e._t=void 0
;const n=t=>{if(t.classList.contains("yes"))return;t.classList.add("yes")
;const e=t?.getAttribute("href")?.replace(/=buy/g,"=buy1")?.replace(/=remove/g,"=remove1")?.replace(/&points=\d+$/g,"")
;t.setAttribute("href",e)};e._t=t=>{new MutationObserver((t=>{t.forEach((t=>{
Array.from(t.addedNodes).forEach((t=>{
const e="LI"===t?.tagName,o=t?.firstElementChild;e&&o&&n(o)}))}))})).observe(t,{
childList:!0,subtree:!0
}),Array.from(document.querySelectorAll(".users-point-sell > li")).forEach((t=>n(t?.firstElementChild)))
}},7673:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Ot=void 0
;const o=n(6185),i=t=>{if(!t)return;if(t.querySelector("a"))return
;const e=t.innerHTML,n=(0,o.lt)({classList:"nst-pokername",
href:"profiles.php?NID="+e,target:"_blank",innerText:""+e})
;t.innerHTML="",t.appendChild(n)};e.Ot=t=>{const e="p[class^=name]"
;t.querySelectorAll(e).forEach((t=>i(t))),new MutationObserver((t=>{
t.forEach((t=>{
Array.from(t.addedNodes).forEach((t=>i(t.querySelector&&t.querySelector(e))))}))
})).observe(t,{childList:!0,subtree:!0})}},2718:function(t,e,n){
var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{
default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.Lt=void 0
;const i=o(n(246)),a=n(6185),s=t=>{t.stopPropagation()
;const e=t.target.closest("#nst-quick-use").parentElement.getAttribute("data-itemID")
;if(!e)return;const n=(0,a.S)(a.qfs);Object.keys(n).includes(e)&&(async t=>{
const e=document.getElementById("nst-item-resp");if(e){
for(;e.lastChild;)e.removeChild(e.lastChild);(async(t,e)=>{const{id:n}=t,o={
step:"useItem",itemID:n,fac:"1"};if(!o)return
;const i="https://www.torn.com/item.php?rfcv="+(0,a.J)(),s={method:"POST",
headers:{"x-requested-with":"XMLHttpRequest"},body:new URLSearchParams(o)
},r=await(await fetch(i,{...s})).json(),c=r.links??{},l=r.text??{},u=(0,a._)({})
;u.appendChild((0,a.ot)({innerHTML:l}));const d=(0,a.ot)({})
;Object.values(c).forEach((t=>{const e=(0,a.lt)({
classList:"t-blue h m-left10 "+t.class,href:t.url,innerText:t.title})
;t.attr.split(/\s+/).forEach((t=>{
const n=t.split("=")[0].toString(),o=t.split("=")[1].toString()
;e.setAttribute(n,o)})),d.appendChild(e)
})),u.appendChild(d),e.appendChild(u),e.classList.remove("nstGreen"),
e.classList.remove("nstBold");const m=e.querySelector(".counter-wrap")
;if(!m)return
;const f=1e3*+(m.getAttribute("data-time")||0),p=Math.floor(f/864e5),h=Math.floor(f%864e5/36e5)+24*p,b=Math.floor(f%36e5/6e4),g=Math.floor(f%6e4/1e3)
;m.innerText=`${h}:${b}:${g}`})(t,e),e.classList.remove("hidden")}})(n[e])
},r=t=>{t.stopPropagation(),t.preventDefault()
;const e=t.target.closest("#nst-quick-use").parentElement.getAttribute("data-itemID")
;if(!e)return;const n=(0,a.S)(a.qfs)
;Object.keys(n).includes(e)&&(delete n[e],(0,a.I)({[a.qfs]:n}),c())},c=()=>{
const t=document.getElementById("nst-"+a.qfs);if(t){
for(;t.lastChild;)t.removeChild(t.lastChild)
;Object.values((0,a.S)(a.qfs)).forEach((e=>((t,e)=>{
const{id:n,name:o,quantity:i}=t,c=`/images/items/${n}/medium.png`,l=(0,a._)({
classList:"nst-box-btn-div"})
;l.setAttribute("data-itemID",n),l.setAttribute("data-qty",i);const u=(0,a.Z)({
id:"nst-quick-use",classList:"nst-box-button"}),d=(0,a.Mt)({src:c,alt:o,
classList:"nst-box-img"}),m=(0,a.q)({id:"nst-quick-name",innerText:o
}),f=(0,a.q)({id:"nst-quick-close",classList:"nst-box-close",innerText:"✕"})
;u.addEventListener("click",s),
f.addEventListener("click",r),u.appendChild(d),u.appendChild(m),
u.appendChild(f),l.appendChild(u),e.appendChild(l)})(e,t))),new i.default(t,{
animation:150,dataIdAttr:"data-itemid",store:{get:()=>{const t=(0,a.S)(a.qfs)
;return Object.entries(t).sort(((t,e)=>t[1].order-e[1].order)).map((t=>t[0]))},
set:t=>{const e=t.toArray(),n=(0,a.S)(a.qfs)
;e.forEach((t=>n[t].order=e.indexOf(t))),(0,a.I)({[a.qfs]:n})}}})}},l=t=>{
t.stopPropagation(),t.preventDefault()
;const{target:e}=t,n=e?.closest(".name"),o=n?.closest("li")?.querySelector("img"),i=(0,
a.m)(o.getAttribute("src")).toString(),s=n?.innerText.replace(/ x\d+$/,"").replace(/[ ]*Blood Bag[ :]*/,"").replace(/[ ]*Bottle of[ :]*/,"").replace(/[ ]*First Aid[ :]*/,"").replace(/[ ]*Lawyer's Business Card[ :]*/,"LBC").replace(/[ ]*Can of[ :]*/,"")
;if(!i)return;const r=(0,a.S)(a.qfs);if(Object.keys(r).includes(i))return
;const l=0===Object.values(r)?.length?0:+Object.values(r).reduce(((t,e)=>t?.order>e?.order?t:e))?.order??0
;r[i]={id:i,order:l+1,name:s},(0,a.I)({[a.qfs]:r}),c()},u={box:t=>{
const e=(0,a.M)({title:a.qft,element:t});e?.parentElement?.appendChild((0,a._)({
id:"nst-item-resp",classList:"nst-box-row hidden"})),c()},item:t=>{
Array.from(t.querySelectorAll("div.name")).forEach((t=>t.addEventListener("dblclick",l)))
},nopager:()=>{}};e.Lt=t=>{new MutationObserver((t=>{t.forEach((t=>{
const e=Array.from(t.addedNodes);e?.length>0&&e.forEach((t=>{
const e="faction-armoury-tabs"===t?.id,n=RegExp("armoury-(medical|drugs|boosters)","g"),o=t?.parentElement?.id?.match(n)&&"UL"===t.tagName&&t.classList.contains("item-list")
;u[e?"box":o?"item":"nopager"](t)}))}))})).observe(t,{childList:!0,subtree:!0})}
},6215:function(t,e,n){var o=this&&this.__importDefault||function(t){
return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{
value:!0}),e.jt=void 0
;const i=o(n(246)),a=n(6185),s=["Primary","Secondary","Melee","Temporary"],r=["Medical","Drug","Energy Drink","Alcohol","Candy","Booster","Supply Pack",...s],c=t=>{
t.stopPropagation()
;const e=t.target.closest("#nst-quick-use").parentElement.getAttribute("data-itemID")
;if(!e)return;const n=(0,a.S)(a.qis);Object.keys(n).includes(e)&&(async t=>{
const{category:e}=t,n=document.getElementById("nst-item-resp");if(n){
for(;n.lastChild;)n.removeChild(n.lastChild);s.includes(e)?await(async(t,e)=>{
const{id:n,strangeID:o}=t,i={step:"actionForm",item_id:n,type:5,action:"equip",
item:n,id:o,confirm:1};if(!i)return
;const s="https://www.torn.com/item.php?rfcv="+(0,a.J)(),r={method:"POST",
headers:{"x-requested-with":"XMLHttpRequest"},body:new URLSearchParams(i)
},c=await(await fetch(s,{...r})).text()
;e.innerHTML=c,c?.match(/ equipped/)?e.classList.add("text-nstgreen"):e.classList.remove("text-nstgreen")
})(t,n):await(async(t,e)=>{const{id:n}=t,o={step:"useItem",itemID:n,item:n}
;if(!o)return;const i="https://www.torn.com/item.php?rfcv="+(0,a.J)(),s={
method:"POST",headers:{"x-requested-with":"XMLHttpRequest"},
body:new URLSearchParams(o)},r=await(await fetch(i,{...s
})).json(),c=r.links??{},l=r.text??{},u=(0,a._)({});u.appendChild((0,a.ot)({
innerHTML:l}));const d=(0,a.ot)({});Object.values(c).forEach((t=>{
const e=(0,a.lt)({classList:"t-blue h m-left10 "+t.class,href:t.url,
innerText:t.title});t.attr.split(/\s+/).forEach((t=>{
const n=t.split("=")[0].toString(),o=t.split("=")[1].toString()
;e.setAttribute(n,o)})),d.appendChild(e)
})),u.appendChild(d),e.appendChild(u),e.classList.remove("nstGreen"),
e.classList.remove("nstBold");const m=e.querySelector(".counter-wrap")
;if(!m)return
;const f=1e3*+(m.getAttribute("data-time")||0),p=Math.floor(f/864e5),h=Math.floor(f%864e5/36e5)+24*p,b=Math.floor(f%36e5/6e4),g=Math.floor(f%6e4/1e3)
;m.innerText=`${h}:${b}:${g}`})(t,n),n.classList.remove("hidden")}})(n[e])
},l=t=>{t.stopPropagation(),t.preventDefault()
;const e=t.target.closest("#nst-quick-use").parentElement.getAttribute("data-itemID")
;if(!e)return;const n=(0,a.S)(a.qis)
;Object.keys(n).includes(e)&&(delete n[e],(0,a.I)({[a.qis]:n}),u())},u=()=>{
const t=document.getElementById("nst-"+a.qis);if(t){
for(;t.lastChild;)t.removeChild(t.lastChild)
;Object.values((0,a.S)(a.qis)).forEach((e=>((t,e)=>{
const{id:n,name:o,quantity:i}=t,s=`/images/items/${n}/medium.png`,r=(0,a._)({
classList:"nst-box-btn-div"})
;r.setAttribute("data-itemID",n),r.setAttribute("data-qty",i);const u=(0,a.Z)({
id:"nst-quick-use",classList:"nst-box-button"}),d=(0,a.Mt)({src:s,alt:o,
classList:"nst-box-img"}),m=(0,a.q)({id:"nst-quick-name",innerText:o
}),f=(0,a.q)({id:"nst-quick-close",classList:"nst-box-close",innerText:"✕"})
;u.addEventListener("click",c),
f.addEventListener("click",l),u.appendChild(d),u.appendChild(m),
u.appendChild(f),r.appendChild(u),e.appendChild(r)})(e,t))),new i.default(t,{
animation:150,dataIdAttr:"data-itemid",store:{get:()=>{const t=(0,a.S)(a.qis)
;return Object.entries(t).sort(((t,e)=>t[1].order-e[1].order)).map((t=>t[0]))},
set:t=>{const e=t.toArray(),n=(0,a.S)(a.qis)
;e.forEach((t=>n[t].order=e.indexOf(t))),(0,a.I)({[a.qis]:n})}}})}},d=t=>{
t.stopPropagation(),t.preventDefault();const e=t.target
;if(!/name-wrap/.test(e.className))return
;const n=e.closest("li"),o=n?.dataset?.item,i=n?.dataset?.qty,s=n?.dataset?.category??"",c=n?.querySelector('.cont-wrap ul [class*="equipped"]')?.getAttribute("data-id")??"",l=n?.querySelector(".title-wrap .name-wrap .name"),d=l?.innerText?.replace(/[ ]*Blood Bag[ :]*/,"")?.replace(/[ ]*Bottle of[ :]*/,"")?.replace(/[ ]*First Aid[ :]*/,"")?.replace(/[ ]*Lawyer's Business Card[ :]*/,"LBC")?.replace(/[ ]*Can of[ :]*/,"")
;if(!(n&&o&&s&&r.includes(s)))return;const m=(0,a.S)(a.qis)
;if(Object.keys(m).includes(o))return
;const f=0===Object.values(m)?.length?0:+Object.values(m).reduce(((t,e)=>t?.order>e?.order?t:e))?.order??0
;m[o]={id:o,order:f+1,name:d,quantity:i,category:s,strangeID:c},(0,a.I)({
[a.qis]:m}),u()};e.jt=t=>{
const e=t?.parentElement,n=e?.querySelector("div.equipped-items-wrap"),o=(0,
a.M)({title:a.qit,element:n});o?.parentElement?.appendChild((0,a._)({
id:"nst-item-resp",classList:"nst-box-row hidden"
})),u(),new MutationObserver((t=>{t.forEach((t=>{
const e=t.target,n=Array.from(t.addedNodes)
;n?.length>0&&"UL"===e?.nodeName&&"category-wrap"==e?.parentElement?.id&&null==t?.previousSibling&&n.forEach((t=>{
const e=t?.dataset?.item;e&&t.addEventListener("dblclick",d)}))}))
})).observe(t,{childList:!0,subtree:!0})}},3840:(t,e,n)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.Tt=void 0
;const o=n(6185),i=(t,e)=>{
const{item:n,selector:i,reg:a}=e,s=(0,o.S)("quick"+n)??!1,r=t?.parentElement,c=r.querySelector("a."+i),l=c?.getAttribute("href")
;if(!c||!l)return
;const u=RegExp(a+"$","g"),d=RegExp(a+"1$","g"),m=s?l.replace(u,a+"1"):l.replace(d,a)
;c.setAttribute("href",m)},a=t=>{
const e=+((0,o.S)("jailscore")??"0"),n=t?.parentElement,a=t.querySelector("span.time").innerText.split(" ").reduce(((t,e)=>t+(/h/.test(e)?60*+e.replace(/h/g,""):/m/.test(e)?+e.replace(/m/g,""):0)),0),s=(0,
o.m)(t.querySelector("span.level").innerText.match(/\d+/g)?.join())*a
;t.setAttribute("title","score: "+(0,o.O)(s));const r=s>e&&0!==e
;n.style.display=r?"none":"",i(t,{item:"bail",selector:"bye",reg:"buy"}),i(t,{
item:"bust",selector:"bust",reg:"breakout"})},s=t=>{const e=document,n=t.target
;(0,o.I)({[n.value]:n.checked});const i=e.querySelectorAll("span.info-wrap")
;Array.from(i).forEach((t=>a(t)))};e.Tt=t=>{(t=>{const e=(0,o.M)({
title:"Quick Jail",element:t?.parentElement}),n=(0,o._)({
classList:"nst-box-column"}),i=(0,o._)({classList:"nst-box-column"})
;e.appendChild(n),e.appendChild(i),(0,o.Dt)({elem:n,title:"Jail Score",
cback:()=>{const e=t.querySelectorAll("span.info-wrap")
;Array.from(e).forEach((t=>a(t)))}});const r="Quick Bust",c=(0,o.St)(r),l={
id:"nst-"+c,type:"checkbox",value:c,checked:(0,o.S)(c)??!1}
;i.appendChild((0,o.V)(l,r,"",s));const u="Quick Bail",d=(0,o.St)(u),m={
id:"nst-"+d,type:"checkbox",value:d,checked:(0,o.S)(d)??!1}
;i.appendChild((0,o.V)(m,u,"",s))})(t),new MutationObserver((t=>{t.forEach((t=>{
Array.from(t.addedNodes).forEach((t=>{if("LI"!==t.tagName)return
;const e=t.querySelector("span.info-wrap");e&&a(e)}))}))})).observe(t,{
childList:!0,subtree:!0})}},2957:(t,e,n)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.It=void 0;const o=n(6185)
;e.It=t=>{t=t.parentElement
;const{refills:{energy_refill_used:e,nerve_refill_used:n}}=(0,o.S)("userdata")
;Object.values({energy:{name:"energy",
selector:"[class*='bar'][class*='energy']",link:"https://www.torn.com/gym.php",
refillUsed:e},nerve:{name:"nerve",selector:"[class*='bar'][class*='nerve']",
link:"https://www.torn.com/crimes.php",refillUsed:n}}).forEach((e=>{
const{name:n,selector:o,link:i,refillUsed:a}=e,s=o+' p[class^="bar-name"]',r=t?.querySelector(s),c=r?.parentElement?.parentElement
;c?.removeAttribute("href"),
c?.addEventListener("click",(()=>window.open(i,"_blank")))
;const l="energy"===n?"text-nstgreen":"nerve"===n?"text-nstred":""
;a||r?.classList.add(l)}))}},8292:(t,e)=>{Object.defineProperty(e,"__esModule",{
value:!0}),e.Pt=void 0,e.Pt=t=>t?.remove()},263:(t,e)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.Et=void 0;const n=t=>{
const e=t.getAttribute&&"true"==t.getAttribute("contenteditable")
;t.textContent&&!e&&(t.textContent=t.textContent.replaceAll("Natural Selection","NS"))
},o=t=>{3==t.nodeType&&n(t);let e=t?.firstChild;for(;e;)3==e.nodeType?n(e):o(e),
e=e.nextSibling};e.Et=t=>{o(t);const e=document.querySelector("#map")
;e&&new MutationObserver((t=>{t.forEach((t=>{
Array.from(t.addedNodes).forEach((t=>o(t))),"attributes"==t.type&&o(t.target)}))
})).observe(e,{childList:!0,subtree:!0,attributes:!0})}},1896:(t,e,n)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.At=void 0;const o=n(6185)
;let i={};const a=()=>{
const t=document.querySelector("div[class^='joinWrap'] div[class^='rowsWrap']")
;if(!t)return;const e=Array.from(t.children);0===e.length?i={}:e.forEach((t=>{
const e=t?.getAttribute("id");i[e]||(i[e]=(0,o.U)())
;const n=(a=i[e],(0,o.vt)(900-((0,o.U)()-a)));var a
;const s=t.querySelector("div[class^='betBlock']"),r=s.getAttribute("aria-label").split(":")[1].trim(),c="$"+(0,
o.O)((0,o.m)(r));s.innerText=c+"\n"+n}))};e.At=t=>{if("lobby"!==t?.step)return
;const e=t?.data;Object.values(e).forEach((t=>{
void 0!==t.ID&&(i[t.ID]=t.timeCreated)})),setInterval(a,1e3)}},7052:(t,e,n)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.$t=void 0;const o=n(6185),i={
amarket:()=>{new MutationObserver((t=>{t.forEach((t=>{
Array.from(t.addedNodes).forEach((t=>{
if("LI"!==t?.tagName||!t?.firstElementChild?.classList?.contains("item-cont-wrap"))return
;const e=Array.from(t.querySelectorAll(".bonus-attachment-icons"))
;if(0===e.length)return;let n="";e.forEach((t=>{
const o=t?.title,i=o?.match(/(?<=>)[\w\s-]+(?=<)/)?.[0]??"FAIL",a=o?.match(/\d+(?=(%| turns))/)?.[0]??"XX"
;n+=`${a}${/disarm/.test(i.toLowerCase())?"T":"%"} ${i}`,
1!==e.length&&(n+="<br />")})),t.querySelector("p.t-gray-6").innerHTML=n}))}))
})).observe(document.documentElement,{childList:!0,subtree:!0})},bazaar:()=>{
new MutationObserver((t=>{t.forEach((t=>{Array.from(t.addedNodes).forEach((t=>{
if(!/(itemsContainner|row)/.test(t.className)||t.querySelector(".nst-edit"))return
;const e=Array.from(t.querySelectorAll('[class*="iconBonuses"] > div > i'))
;0!==e.length&&e.forEach((t=>{
const e="radiation"===t.className.split("-")[3]?"radiation":t.className.split("-")[2],n="full"===e?"EOD":"negative"===e?"Delta":"sentinel"===e?"defense":"vanguard"===e?"dex":e,i=t?.parentElement?.parentElement
;i?.setAttribute("style","float:left;right:0px;top:3px;padding-left:5px;display:inline-block;white-space:nowrap;"),
i.classList.add("nst-edit"),t?.parentElement?.appendChild((0,o.q)({innerText:n
})),t?.parentElement?.appendChild((0,o.nt)("br",{}))}))}))}))
})).observe(document.documentElement,{childList:!0,subtree:!0})},
displaycase:t=>{
const e=Array.from(t.querySelectorAll(".bonus-attachment-icons"))
;if(0===e.length)return;let n="";e.forEach((t=>{n=""
;const e=t?.title,o=e?.match(/(?<=>)[\w\s-]+(?=<)/)?.[0]??"FAIL",i=e?.match(/\d+(?=(%| turns))/)?.[0]??"XX"
;n+=`${i}${/disarm/.test(o.toLowerCase())?"T":"%"} ${o}`,
t.setAttribute("style","float:left;white-space: nowrap;right: 0px;top:-40px"),
t.appendChild(Object.assign(document.createElement("span"),{innerText:n
})),t?.insertAdjacentElement("afterend",document.createElement("br"))}))}}
;e.$t=t=>i[(0,o.qt)()](t)},2268:function(t,e,n){
var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{
default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.zt=void 0
;const i=o(n(246)),a=n(488),s=n(6185),r=async()=>{
const t=document.getElementById("nst-ts-message"),e=document.getElementById("nst-tsapikey")
;if(!t||!e)return;const n=e.value
;if(t.innerText="",19!==n?.length)return t.classList.remove("text-nstgreen"),
void(t.innerText="Invalid Key Length");const o=await(0,s.Ct)({api:n,selection:""
})
;if(!o?.status)return t.classList.remove("text-nstgreen"),void(t.innerText="Invalid Key")
;(0,s.I)({tsapikey:n}),t.classList.add("text-nstgreen"),t.innerText="Key Saved"
},c=async()=>{
const t=document.getElementById("nst-message"),e=document.getElementById("nst-apikey")
;if(!t||!e)return;const n=e.value
;if(t.innerText="",16!==n?.length)return t.classList.remove("text-nstgreen"),
void(t.innerText="Invalid Key Length");const o={section:"user",select:"profile",
api:n},i=await(0,s.p)(o);return i?.status?((0,s.I)({apikey:n
}),(0,s.Nt)(i)?((0,s.I)({userdata:i
}),t.classList.add("text-nstgreen"),t.innerText="Login Successful",
void u()):((0,
s.Bt)("nstdata"),t.classList.remove("text-nstgreen"),void(t.innerText="You are not allowed, contact seintz[2460991]"))):(t.classList.remove("text-nstgreen"),
void(t.innerText=i?.error))},l=async()=>{
confirm("Are you sure you want to reset?")&&((0,
s.Bt)("nstdata"),window.location.reload())},u=()=>{if(!(0,s.Nt)())return
;(0,a.D)();const t=document.querySelector("#nst-ul-main")
;b(t,"tsapi",f),b(t,"attack",m)
;const e=(0,s.S)("script"),n=Object.keys(e).sort().reduce(((t,n)=>(t[n]=e?.[n],
t)),{})
;Object.values(n).map((t=>t.onpage)).filter((t=>void 0!==t)).filter(((t,e,n)=>n.indexOf(t)==e)).sort().forEach((e=>b(t,e,d)))
},d=t=>{const e=document.getElementById(t);if(!e)return;e.innerHTML=""
;const n=t.replace(/nst-/g,""),o=(0,
s.S)("script"),i=Object.keys(o).sort().reduce(((t,e)=>(o?.[e]?.onpage===n&&(t[e]=o?.[e]),
t)),{}),a=(0,s._)({classList:"nst-script-block"})
;Object.entries(i).forEach((([t,e])=>{const n=e?.name,o=(0,s.St)(t),i={
id:"nst-"+o,value:o,checked:e?.enabled??!1
},r=(0,s.V)(i,n,e.description.toLowerCase(),(t=>{
const e=t.target,n=(0,s.S)("script");n[e.value].enabled=e.checked,(0,s.I)({
script:n})}));a.appendChild(r)})),e.appendChild(a)},m=t=>{
const e=document.getElementById(t);e&&(e.innerHTML="",e.appendChild((()=>{
const t=(0,s._)({classList:"nst-block"}),e=(0,s.nt)("h4",{
classList:"nst-block-title",innerText:"mug threshold"});return t.appendChild(e),
(0,s.Dt)({elem:t,title:"mug threshold"}),t})()),e.appendChild((()=>{
const t=(0,s._)({classList:"nst-block"}),e=(0,s.nt)("h4",{
classList:"nst-block-title",innerText:"default outcome"}),n=(0,s._)({
id:"outcome",classList:"nst-outcome"});n.addEventListener("change",(t=>{
const e=t.target.id;(0,s.I)({outcome:e})}))
;const o=(0,s.Y)("leave","outcome"),i=(0,
s.Y)("mug","outcome"),a=(0,s.Y)("hospitalize","outcome"),r={id:"nst-hold",
checked:(0,s.S)("hold")},c=(0,s.V)(r,"hold","",(t=>{const e=t.target.checked;(0,
s.I)({hold:e})}))
;return n.appendChild(o),n.appendChild(i),n.appendChild(a),t.appendChild(e),
t.appendChild(n),t.appendChild(c),t})()),e.appendChild((()=>{
const t=(0,s.S)("weapon"),e=(0,s._)({classList:"nst-block"}),n=(0,s.nt)("h4",{
classList:"nst-block-title",innerText:"weapon order"}),o=(0,s._)({id:"weapon"})
;Object.keys(t).forEach((t=>{const e=(0,s._)({id:t,classList:"list-group-item",
innerText:t});e.setAttribute("data-id",t),o.appendChild(e)})),new i.default(o,{
animation:150,store:{get:()=>{const t=(0,s.S)("weapon"),e=["","","",""]
;return Object.entries(t).forEach((t=>e[t[1]]=t[0])),e},set:t=>{
const e=t.toArray(),n=(0,s.S)("weapon")
;e.forEach((t=>n[t]=e.indexOf(t))),(0,s.I)({weapon:n})}}});const a={
id:"nst-temp",checked:(0,s.S)("temp")},r=(0,s.V)(a,"use temp first","",(t=>{
const e=t.target.checked;(0,s.I)({temp:e})})),c={id:"nst-assa",
checked:(0,s.S)("assaperk")},l=(0,s.V)(c,"assassinate","",(t=>{
const e=t.target.checked;(0,s.I)({assaperk:e})}))
;return e.appendChild(n),e.appendChild(o),e.appendChild(r),e.appendChild(l),e
})()),e.appendChild((()=>{const t=(0,s._)({classList:"nst-block"
}),e=(0,s.nt)("h4",{classList:"nst-block-title",innerText:"weapon reload"
}),n=(0,s._)({id:"reload",classList:"nst-outcome"}),o={id:"nst-reloadone",
checked:(0,s.S)("reloadone")},i=(0,s.V)(o,"primary","",(t=>{
const e=t.target.checked;(0,s.I)({reloadone:e})})),a={id:"nst-reloadtwo",
checked:(0,s.S)("reloadtwo")},r=(0,s.V)(a,"secondary","",(t=>{
const e=t.target.checked;(0,s.I)({reloadtwo:e})}))
;return n.appendChild(i),n.appendChild(r),t.appendChild(e),t.appendChild(n),t
})()))},f=t=>{const e=document.getElementById(t);if(!e)return;e.innerHTML=""
;const n=(0,s.lt)({href:"https://www.tornstats.com/settings/general",
target:"_blank",innerText:"here",classList:"text-nstmain font-bold"
}),o=(0,s._)({classList:"text-base"})
;o.innerHTML="Create your TS key ",o.appendChild(n);const i=(0,s._)({
classList:"nst-api-wrap"}),a=(0,s._)({classList:"nst-block"
}).appendChild((0,s.q)({id:"nst-ts-message",classList:"nst-message"
})),c="tsapikey",l=(0,s.nt)("input",{id:"nst-"+c,type:"password",
classList:"nst-input m-2",maxLength:19,required:!0,value:(0,s.S)(c)??""
}),u=(0,s.Z)({id:"nst-tslogin",classList:"torn-btn m-2",innerText:"save"})
;u.addEventListener("click",r),
i.appendChild(o),i.appendChild(a),i.appendChild(l),
i.appendChild(u),e.appendChild(i)},p=t=>{const e=document.getElementById(t)
;if(!e)return;e.innerHTML="";const n=(0,s.lt)({
href:"https://www.torn.com/preferences.php#tab=api",target:"_blank",
innerText:"limited",classList:"text-nstyellow font-bold"}),o=(0,s.lt)({
href:"https://www.torn.com/preferences.php#tab=api?&step=addNewKey&title=nst&type=3",
target:"_blank",innerText:"create",classList:"text-nstmain font-bold"
}),i=(0,s._)({classList:"text-base"})
;i.innerHTML="Enter a ",i.appendChild(n),i.innerHTML+=" apikey or ",
i.appendChild(o),i.innerHTML+=" one ad-hoc";const a=(0,s._)({
classList:"nst-api-wrap"}),r=(0,s._)({classList:"nst-block"
}).appendChild((0,s.q)({id:"nst-message",classList:"nst-message"
})),u="apikey",d=(0,s.nt)("input",{id:"nst-"+u,type:"password",
classList:"nst-input m-2",maxLength:16,required:!0,value:(0,s.S)(u)??""
}),m=(0,s.Z)({id:"nst-login",classList:"torn-btn m-2",innerText:"save"
}),f=(0,s.Z)({id:"nst-reset",classList:"torn-btn m-2",innerText:"reset"})
;m.addEventListener("click",c),
f.addEventListener("click",l),a.appendChild(i),a.appendChild(r),
a.appendChild(d),a.appendChild(m),a.appendChild(f),e.appendChild(a)},h=t=>{
const e=t.target,n=e.id,o=e?.closest("#nst-menu-body"),i=e,a=o?.querySelector(".nst-menu-sel"),s=o?.querySelector(".nst-menu-active"),r=o?.querySelector("#"+n.replace(/-li/g,""))
;a?.classList.remove("nst-menu-sel"),
s?.classList.remove("nst-menu-active"),s?.classList.toggle("hidden"),
i?.classList.add("nst-menu-sel"),
r?.classList.add("nst-menu-active"),r?.classList.toggle("hidden")
},b=(t,e,n=(()=>{}))=>{
const o=t?.parentElement,i="nst-"+e.toLowerCase(),a=i+"-li",r=(0,s.B)({id:a,
classList:"nst-menu-page",innerText:e})
;o.querySelector("#"+i)||o.querySelector("#"+a)||(t.appendChild(r),
o.appendChild((0,s._)({id:i,classList:"nst-menu-item hidden"
})),r.addEventListener("click",h),n(i))},g=()=>{
const t=document?.querySelector(".content-wrapper.spring"),e=t?.style?.display
;t.style.display="none"===e?"":"none",
document?.getElementById("nst-menu")?.remove(),"none"===t.style.display&&(t=>{
const e=(0,s._)({id:"nst-menu",classList:"nst-menu"}),n=(0,s._)({
id:"nst-menu-wrap",classList:"nst-menu-wrap "}),o=(0,s._)({id:"nst-menu-title",
classList:"nst-menu-title"}),i=(0,s._)({id:"nst-menu-body",
classList:"nst-menu-body"});o.appendChild((0,s.q)({classList:"nst-logo"
})).appendChild((0,s.nt)("b",{innerText:"NST"}))
;const a=i.appendChild((0,s.nt)("ul",{id:"nst-ul-main",classList:"nst-ul-main"
}))
;n.appendChild(o),n.appendChild(i),e.appendChild(n),t.insertAdjacentElement("beforebegin",e),
b(a,"api",p)
;const r=i.querySelector("#nst-api-li"),c=i.querySelector("#nst-api")
;r?.classList.add("nst-menu-sel"),
c?.classList.add("nst-menu-active"),c?.classList.toggle("hidden"),u()})(t)}
;e.zt=t=>{
const e=document.getElementById("nst-icon"),n=t.querySelector('ul[class^="status-icon"]')
;if(e||!n)return;const o=(0,s.B)({id:"nst-icon",classList:"nst-icon"})
;n.insertAdjacentElement("afterbegin",o).addEventListener("click",g)}},
8527:function(t,e,n){var o=this&&this.__importDefault||function(t){
return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{
value:!0}),e.Rt=void 0;const i=o(n(246)),a=n(6185),s=(0,a.k)("XID")
;e.Rt=async t=>{(t=>{const e=t?.closest(".profile-wrapper"),n=(0,a.M)({
title:"Stat Spies",element:e}),o=(0,a._)({id:"nst-compare",
classList:"nst-box-column"}),i=(0,a._)({id:"nst-spies",
classList:"nst-box-column item-start"});o.appendChild((0,a.nt)("table",{
id:"nst-compare-table",classList:"nst-table"})),i.appendChild((0,a.nt)("table",{
id:"nst-spies-table",classList:"nst-table"})),i.appendChild((0,a.nt)("table",{
id:"nst-avg-table",classList:"nst-table"})),n.appendChild(o),n.appendChild(i)
})(t);const e=await(0,a.Ct)({selection:"/spy/user/"+s})
;e?.status&&(e?.compare?.status&&(t=>{
const e=document.getElementById("nst-compare-table"),n=(0,a.nt)("tr",{
classList:"nst-table-row text-center nst-nodrag"})
;e.appendChild(n),["Stat","Them","You"].forEach((t=>n.appendChild((0,
a.nt)("th",{innerText:t,classList:"nst-table-cell nst-table-cell-head"
})))),Object.keys(t).forEach((n=>{const o=(0,a.nt)("tr",{
classList:"nst-table-row"});o.setAttribute("data-id",n)
;const i=+t?.[n]?.amount,s=+t?.[n]?.difference,r=s>0?"text-nstgreen":s<0?"text-nstred":"text-nsttorntext",c=(0,
a.nt)("td",{innerText:""+n,classList:"nst-table-cell text-nsttorntext"
}),l=(0,a.nt)("td",{innerText:""+(0,a.O)(i),
classList:"nst-table-cell text-nsttorntext"}),u=(0,a.nt)("td",{
innerText:""+(0,a.O)(i+s),classList:"nst-table-cell"})
;u.classList.add(r),o.appendChild(c),
o.appendChild(l),o.appendChild(u),e.appendChild(o)})),new i.default(e,{
animation:150,filter:".nst-nodrag",store:{
get:()=>(0,a.S)("tscompare")??Object.keys(t),set:t=>(0,a.I)({
tscompare:t.toArray()})}});const o=(0,a.nt)("tr",{
classList:"nst-table-row nst-nodrag text-center"}),s=(0,a.nt)("td",{
classList:"nst-table-cell",colSpan:3}),r=(0,a.lt)({
href:"https://www.tornstats.com/settings/script",target:"_blank",
classList:"t-blue nst-nodrag",innerText:"Change your script settings here"})
;s.appendChild(r),o.appendChild(s),e.appendChild(o)
})(e?.compare?.data),e?.spy?.status&&(t=>{
const e=document.getElementById("nst-spies-table"),n=(0,a.nt)("tr",{
classList:"nst-table-row text-center"})
;e.appendChild(n),["Stat","Them","You"].forEach((t=>n.appendChild((0,
a.nt)("th",{innerText:t,classList:"nst-table-cell nst-table-cell-head"
})))),["Strength","Defense","Speed","Dexterity","Total"].forEach((n=>{
const o=+t?.[n.toLowerCase()],i=+t?.["delta"+n],s=i>0?"text-nstgreen":i<0?"text-nstred":"text-nsttorntext",r=(0,
a.nt)("tr",{classList:"nst-table-row"}),c=(0,a.nt)("td",{innerText:""+n,
classList:"nst-table-cell text-nsttorntext"}),l=(0,a.nt)("td",{
innerText:""+(0,a.O)(o),classList:"nst-table-cell text-nsttorntext"
}),u=(0,a.nt)("td",{innerText:""+(0,a.O)(o+i),classList:"nst-table-cell"})
;u.classList.add(s),
r.appendChild(c),r.appendChild(l),r.appendChild(u),e.appendChild(r)}))
;const o=(0,a.nt)("tr",{classList:"nst-table-row nst-nodrag text-center"}),i=(0,
a.nt)("td",{classList:"nst-table-cell text-nsttorntext",colSpan:3,
innerText:"Last Update: "+(t?.difference??"")})
;o.appendChild(i),e.appendChild(o)})(e?.spy))}},8990:(t,e,n)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.Ut=void 0
;const o=n(6185),i=(0,o.k)("user2ID")??"";e.Ut=async t=>{
if(document.querySelector("#nst-target-status"))return;const e={section:"user",
select:"",objID:i},n=await(0,o.p)(e);if(!n?.status)return
;const a=n?.states?.hospital_timestamp,s=n?.last_action?.timestamp,r=n?.life?.maximum,c=n?.life?.current,l=1===n?.revivable,u=0!==Object.values(n?.basicicons).filter((t=>t.includes("Territory War"))).length,d=(0,
o.vt)((0,o.U)()-s),m=(0,o.vt)(a-(0,o.U)()),f=(0,o._)({id:"nst-target-status",
classList:"nst-status-wrap"}),p=(0,o._)({classList:"nst-status-middle"
}),h=(0,o._)({classList:"nst-status-middle"}),b=(0,o._)({id:"nst-status-life",
classList:"nst-status-item",innerText:`life: ${Math.floor(c/r*100)}%`
}),g=(0,o._)({id:"nst-status-la",classList:"nst-status-item",innerText:"la: "+d
});g.setAttribute("data-time",s);const v=(0,o._)({id:"nst-status-hosp",
classList:"nst-status-item",innerText:"hosp: "+(""===m?"OUT":m)})
;v.setAttribute("data-time",a);const w=(0,o._)({id:"nst-status-wall",
classList:"nst-status-item",innerText:"wall: "+(u?"ON":"OFF")}),y=(0,o._)({
id:"nst-status-rev",classList:"nst-status-item",innerText:"rev: "+(l?"ON":"OFF")
})
;p.appendChild(b),p.appendChild(w),p.appendChild(y),h.appendChild(v),h.appendChild(g),
f.appendChild(p),f.appendChild(h),t.appendChild(f),setInterval((()=>((t,e,n)=>{
const i=(0,
o.m)(t.getAttribute("data-time")),a=(0,o.m)(e.getAttribute("data-time")),s=(0,
o.vt)((0,o.U)()-i),r=(0,o.vt)(a-(0,o.U)())
;t.innerText="la: "+s,e.innerText="hosp: "+(""===r?"OUT":r)
;const c=document.querySelector('#defender [id^="player-health-value"')??document.querySelector('[id^="player-health-value"'),[l,u]=c.innerText.split(" / "),d=Math.floor((0,
o.m)(l)/(0,o.m)(u)*100);n.innerText=`life: ${d}%`})(g,v,b)),2e3)}},
4538:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Ft=void 0
;const o=n(6185);e.Ft=async t=>{
const e=t?.querySelectorAll(".trade-cont .user.right li.color2 ul li")
;if(0===e.length)return;let n=0;const i=await(0,o.p)({section:"torn",
select:"items"});if(!i?.status)return;const a=i?.items
;Array.from(e).forEach((t=>{
const e=t?.querySelector(".name"),o=e?.firstChild.textContent.trim(),{name:i,quantity:s}=(t=>{
const e=/^x\d+\s/.test(n=t)?"start":/\sx\d+$/.test(n)?"end":null;var n
;if(!e)return{name:t,quantity:1};const o=t.split(" "),i={start:0,end:o.length-1
}[e],a=o[i].substr(1),s=parseInt(a,10)
;return!e||isNaN(s)||s.toString().length!==a.length?{name:t,quantity:1}:{
name:o.filter(((t,e)=>e!==i)).join(" ").trim(),quantity:s}
})(o),r=Object.values(a).filter((t=>t.name===i))[0]
;n+=parseInt(r?.market_value)*s}));const s=(0,o._)({classList:"nst-trade-value",
innerText:"MV: $"+(0,o.O)(n)});t.insertAdjacentElement("beforebegin",s)}},
6185:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0
}),e.Ht=e.G=e.H=e.Gt=e.kt=e.Wt=e.Nt=e.Xt=e.Kt=e.Ct=e.p=e.u=e.h=e.M=e.Jt=e.Yt=e.Qt=e.Vt=e.Y=e.V=e.Dt=e.Zt=e.te=e.Mt=e.lt=e.ot=e.B=e.Z=e.q=e._=e.nt=e.ee=e.St=e.vt=e.ne=e.oe=e.O=e.m=e.Bt=e.I=e.S=e.ie=e.K=e.U=e.$=e.qt=e.ae=e.se=e.k=e.J=void 0,
e.qfs=e.qft=e.qis=e.qit=e.mugThres=e.minMugPerc=e.re=e.ce=void 0
;const o=n(3376),i=n(8689)
;e.J=()=>document.cookie.split("; ").find((t=>t.startsWith("rfc_v"))).split("=")[1],
e.k=t=>new URLSearchParams(window.location.search).get(t),
e.se=()=>window.location.search.match(/\?sid=(\w+)/)?.[1],
e.ae=()=>window.location.search.match(/\?step=(\w+)/)?.[1],
e.qt=()=>window.location.pathname.replace(/\//,"").replace(/\.php/,""),
e.$=()=>window.location.hash.replace(/#\/\w+=/g,""),
e.U=()=>Math.round(Date.now()/1e3),
e.K=t=>!t||null==t||0===Object.keys(t).length,e.ie=t=>{try{return JSON.parse(t)
}catch(t){console.error(t)}return null},e.S=(t="")=>{let e;try{
e=JSON.parse(localStorage.getItem("nstdata"))}catch{e={}}
return""===t?e??{}:e?.[t]},e.I=t=>{const n=(0,e.S)()
;Object.entries(t).forEach((([t,e])=>n[t]=e)),
localStorage.setItem("nstdata",JSON.stringify(n))},e.Bt=t=>{
localStorage.removeItem(t)
},e.m=t=>+(t+"").replace(/[^\d]/g,""),e.O=t=>Math.round(t).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),
e.oe=t=>{const e=["K","M","B","T","Q"];let n=Math.abs(t)
;if(n<1e3)return""+ +n.toFixed(2)
;for(let t=0;t<5;t++)if(n/=1e3,!(n>=1e3))return`${+n.toFixed(2)} ${e[t]}`
},e.ne=t=>{const n=t.toLowerCase();let o=(0,e.m)(n),i=1
;return-1!==n.indexOf("k")?i=1e3:-1!==n.indexOf("m")?i=1e6:-1!==n.indexOf("b")?i=1e9:-1!==n.indexOf("t")&&(i=1e12),
o*=i,o>0?o.toLocaleString("en-US"):""},e.vt=t=>{let e=""
;const n=Math.floor(t/86400),o=Math.floor(t%86400/3600),i=Math.floor(t%3600/60),a=Math.floor(t%3600%60)
;return n>0&&(e+=n.toString().padStart(2,"0")+"d "),
o>0&&(e+=o.toString().padStart(2,"0")+"h "),
i>0&&(e+=i.toString().padStart(2,"0")+"m "),
a>0&&(e+=a.toString().padStart(2,"0")+"s"),""+e
},e.St=t=>t.toLowerCase().replace(/ /g,""),e.ee=t=>{const e=t.replace(/ /g,"")
;return e.charAt(0).toLowerCase()+e.slice(1)
},e.nt=(t,e)=>Object.assign(document.createElement(t),e),
e._=t=>(0,e.nt)("div",t),
e.q=t=>(0,e.nt)("span",t),e.Z=t=>(0,e.nt)("button",t),e.B=t=>(0,
e.nt)("li",t),e.ot=t=>(0,
e.nt)("p",t),e.lt=t=>(0,e.nt)("a",t),e.Mt=t=>(0,e.nt)("img",t),
e.te=t=>(0,e.nt)("input",t),e.Zt=t=>(0,e.nt)("label",t),e.Dt=t=>{
const{elem:n,title:o,cback:i=(()=>{})}=t,a=(0,e.St)(o),s=(0,e._)({
classList:"nst-box-item"}),r=(0,e.nt)("input",{id:"nst-"+a,type:"text",
classList:"nst-input",value:(0,e.O)(+((0,e.S)(a)??"0")),placeholder:a})
;return r.addEventListener("keyup",(t=>{const n=t.target,o=(0,e.m)(n.value)
;n.value=o.toLocaleString("en-US");const a=(0,e.St)(n.placeholder);(0,e.I)({
[a]:o}),i()})),s.appendChild(r),n.appendChild(s),s},e.V=(t,n,o,i)=>{
const a=(0,e._)({classList:"nst-box-item"}),s=(0,e.te)({...t,type:"checkbox"
}),r={innerText:n,htmlFor:t?.id,title:o},c=(0,e.Zt)(r)
;return a.addEventListener("change",i),a.appendChild(s),a.appendChild(c),a
},e.Y=(t,n)=>{const o=(0,e.S)("outcome").toString(),i=(0,e._)({
classList:"nst-box-item"}),a=(0,e.te)({id:t,type:"radio",name:n,value:t,
checked:o===t}),s=(0,e.Zt)({innerText:"hospitalize"===t?"hosp":t,htmlFor:t,
classList:""});return i.appendChild(a),i.appendChild(s),i
},e.Vt=(t,e)=>document?.getElementById(t)?.appendChild(e),
e.Qt=t=>document.body.appendChild(t),e.Yt=(t,e)=>{
const n=document?.getElementById(t)
;if(n&&n.parentElement)return n.parentElement.insertBefore(e,n)}
;const a='<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9" /></svg>',s='<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6" /></svg>',r=t=>{
const n=t.target.closest(".nst-box-header"),o=n.nextElementSibling;if(!o)return
;const i=n.querySelector("#nst-box-title").innerText,r=(0,
e.St)(i)+"Folded",c=o.classList.toggle("hidden")
;n.querySelector("#nst-arrow").innerHTML=c?s:a,(0,e.I)({[r]:c})};e.Jt=t=>{
const n=(0,e._)({classList:"nst-box-header"});return n.appendChild((0,e.q)({
classList:"nst-box-title"})).appendChild((0,e.q)({id:"nst-box-title",innerText:t
})),n.appendChild((0,e._)({id:"nst-arrow"})),n.addEventListener("click",r),n
},e.M=t=>{const{element:n,title:o}=t;if(!n)return
;const i=(0,e.St)(o),r=i+"Folded",c=(0,
e.S)(r)?"nst-box-content hidden":"nst-box-content",l=(0,e._)({
classList:"nst-box"}),u=(0,e.Jt)(o)
;u.querySelector("#nst-arrow").innerHTML=(0,e.S)(r)?s:a;const d=(0,e._)({
classList:c});if(document.querySelector("#nst-"+i))return;const m=(0,e._)({
id:"nst-"+i,classList:"nst-box-row"})
;return d.appendChild(m),l.appendChild(u),l.appendChild(d),
n.insertAdjacentElement("beforebegin",l),m},e.h=(t,e)=>{
const n=new Event("input",{bubbles:!0})
;t.value=""+e,t.dispatchEvent(n),t.select()},e.u=(t,e)=>{
const n=new Event("input",{bubbles:!0
}),o=Object.getOwnPropertyDescriptor(t,"value")?.set,i=Object.getPrototypeOf(t),a=Object.getOwnPropertyDescriptor(i,"value")?.set
;o&&o!==a?a.call(t,e):o.call(t,e),t.dispatchEvent(n),t.select()},e.p=async t=>{
const{section:n,select:o,objID:i,api:a}=t,s="https://api.torn.com/"+n+`/${i??""}?selections=${o}`+`&key=${a??(0,
e.S)("apikey")}&comment=nst`,r=await c("GET",s),l=(0,e.Ht)()?r:r?.response
;return void 0!==l?.error?(console.error(l?.error?.error),
[2,10,13,18].includes(l?.error?.code)&&(0,e.Bt)("nstdata"),{status:!1,
error:"broken key"}):{status:!0,...l}},e.Ct=async t=>{
const{selection:n,api:o}=t,i=`https://www.tornstats.com/api/v2/${o??(0,
e.S)("tsapikey")??(0,
e.S)("apikey")}${n}`,a=await c("GET",i),s=(0,e.Ht)()?a:a?.response
;return void 0===s?.status||!1===s?.status?(console.error(s?.message,s),{
status:!1}):s},e.Kt=(t={})=>{const n=(0,e.K)(t)?(0,e.S)("userdata"):t;return{
le:n?.player_id,ue:n?.faction?.faction_id}
},e.Xt=t=>t.toString(16),e.Nt=(t={})=>{const n=(0,e.S)("apikey")
;if(16!==n?.length)return!1
;const i=(0,e.K)(t)?(0,e.S)("userdata"):t,{le:a,ue:s}=(0,e.Kt)(i)
;return!(0,e.K)(i)&&!!(0,o.t)((0,e.Xt)(s),(0,e.Xt)(a))},e.Wt=async()=>{
setTimeout(e.Wt,6e4);const t=(0,e.S)();if((0,e.K)(t))return;const n=t?.apikey
;if(16!==n?.length)return;const o=t?.userdata,a={section:"user",
select:"bars,basic,cooldowns,education,icons,money,networth,notifications,perks,profile,refills,timestamp,travel,newmessages,newevents,personalstats",
api:n},s=await(0,e.p)(a);if(!s?.status)return
;const r=s.merit_perks.filter((t=>t.includes("mug"))).join(),c=((0,
e.m)(r)/5+20)/400;(0,e.I)({userdata:s}),(0,e.I)({mugperc:c
}),(0,e.Ht)()||(0,i.yt)(o,s)},e.kt=(t="")=>{if(!(0,e.Nt)())return!1
;const n=(0,e.S)("script");if(""===t)return!0;const o=n?.[t]?.enabled;return!!o
},e.Gt=()=>{
const t=document?.body?.getAttribute("data-traveling"),e=document?.body?.getAttribute("data-abroad")
;return"false"==t&&"false"==e?"home":"true"==t&&"true"==e?"trav":"false"==t&&"true"==e?"abro":`${t}, ${e}`
},e.H=t=>t.split("&").reduce(((t,e)=>({...t,[e.split("=")[0]]:e.split("=")[1]
})),{}),
e.G=t=>Object.keys(t).map((e=>`${e}=${t[e]}`)).join("&"),e.Ht=()=>void 0!==window.flutter_inappwebview,
e.ce=t=>{
(0,e.Ht)()||(XMLHttpRequest.prototype._original_send=XMLHttpRequest.prototype.send,
XMLHttpRequest.prototype.send=function(e){try{
if(!e)return this._original_send(e);const n=t(e)
;console.log("data",e),console.log("new_data",n),this._original_send(n)
}catch(t){console.error(t),this._original_send(e)}})},e.re=(t,n)=>{
if((0,e.Ht)())return;const{fetch:o}=unsafeWindow
;unsafeWindow.fetch=async(...e)=>{
const i=await o(...e),a=e[0]?.match(/(?<=step=|sid=)(\w+)/g)?.[0]
;if(!a||a!==n)return i;let s;try{s=await(i?.clone()?.json())}catch(t){
return console.error(e,t),i}return t(s),i}
},e.minMugPerc=+(0,e.S)("mugperc"),e.mugThres=(0,
e.m)((0,e.S)("mugthreshold")),e.qit="Quick Items",
e.qis=(0,e.St)(e.qit),e.qft="Quick Faction",e.qfs=(0,e.St)(e.qft)
;const c=(t,n,o={},i={})=>new Promise(((a,s)=>{
if((0,e.Ht)())"GET"===t&&PDA_httpGet(n).then((t=>a(JSON.parse(t.responseText)))).catch(s),
"POST"===t&&PDA_httpPost(n,o,i).then((t=>a(JSON.parse(t.responseText)))).catch(s);else{
const e={url:n,method:t,headers:o,data:i,responseType:"json",onload:a,onerror:s}
;GM.xmlHttpRequest(e)}}))},7298:(t,e,n)=>{Object.defineProperty(e,"__esModule",{
value:!0}),e.de=void 0;const o=n(6185),i={"Small Arms Cache":20,
"Melee Cache":30,"Medium Arms Cache":50,"Heavy Arms Cache":70,"Armor Cache":60}
;e.de=async t=>{const e=t?.parentElement,n=await(0,o.p)({section:"torn",
select:"items"});if(!n?.status)return;const a=n?.items
;Array.from(e.children).forEach((t=>((t,e)=>{
const n=t.innerText.split(",").filter((t=>Object.keys(i).includes(t.trim().replace(/^\d+x /,""))))
;console.log(n);let a=0,s=0,r=0;n.forEach((t=>{
const n=parseInt(t.trim().match(/\d+x/)[0]),o=t.trim().replace(/^\d+x /,""),c=Object.values(e).filter((t=>t.name.includes(o)))[0].market_value
;s+=n,a+=c*n,r+=n*+i[o]}));const c=`caches: ${s} | BB: ${r} | MV: $`+(0,o.O)(a)
;t.appendChild((0,o._)({innerText:c}))})(t,a)))}},9607:(t,e)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.it=void 0,e.it=(t,e,n=!1)=>{
const o=document?.querySelector(e)
;if(o&&(console.log("noobs "+e),t(o),!n))return;let i=!1
;const a=new MutationObserver((o=>{o.forEach((o=>{if(i)return
;const s=Array.from(o.addedNodes);for(const o of s){
if(!o?.querySelector)continue
;const s=o?.querySelector(e),r=o?.parentElement?.querySelector(e),c=s||r||!1
;if(c&&(console.log("obs "+e),t(c),!n)){i=!0,a.disconnect();break}}}))}))
;a.observe(document.documentElement,{childList:!0,subtree:!0})}}},e={}
;function n(o){var i=e[o];if(void 0!==i)return i.exports;var a=e[o]={id:o,
exports:{}};return t[o].call(a.exports,a,a.exports,n),a.exports}n.n=t=>{
var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{
for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,
get:e[o]})},n.o=(t,e)=>({}.hasOwnProperty.call(t,e)),n.r=t=>{
"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{
value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})
},n.nc=void 0,(()=>{n(4893)
;const t=n(6185),e=n(2268),o=n(9607),i=n(276),a=n(1913),s=n(5661),r=n(4051),c=n(3980),l=n(714),u=n(1108),d=n(9149),m=n(7188),f=n(7716),p=n(9355),h=n(2718),b=n(5689),g=n(1379),v=n(8620),w=n(8954),y=n(3424),k=n(763),x=n(3243),_=n(8601),O=n(6215),L=n(3840),M=n(2957),j=n(8292),T=n(263),D=n(7052),S=n(4538),I=n(1549),P=n(2470),E=n(1717),A=n(8527),$=n(8990),q=n(8257),z=n(6703),C=n(7673),N=n(7298),B=n(1896),R={
home:()=>{
(0,t.kt)("livenetworth")&&(0,o.it)(v.dt,'ul.info-cont-wrap [aria-label^="Networth"]'),
(0,t.kt)("effectivestats")&&(0,o.it)(d.N,".battle")},abro:()=>{
(0,t.kt)("maxbuyabroad")&&(0,o.it)(y.bt,"body")},trav:()=>{}},U={amarket:()=>{
(0,t.kt)("rwbonusdisplay")&&(0,o.it)(D.$t,"body")},bazaar:()=>{
(0,t.kt)("rwbonusdisplay")&&(0,
o.it)(D.$t,"body"),(0,t.kt)("bazaarvalue")&&(0,o.it)(a.v,"#bazaarRoot .wrapper")
},city:()=>{},companies:()=>{},displaycase:()=>{},faction:()=>{},gym:()=>{
(0,t.kt)("specialgym")&&((0,
t.re)(q.et,"getInitialGymInfo"),(0,t.re)(q.tt,"train"))},index:()=>{},item:()=>{
(0,t.kt)("equipnoconfirm")&&(0,t.ce)(f.F)},imarket:()=>{
(0,t.kt)("marketnoconfirm")&&(0,t.ce)(w.ht)},loader:()=>{
(0,t.kt)("intercept")&&"attack"===(0,t.se)()&&(0,t.re)(P.ct,"attackData")},
page:()=>{
(0,t.kt)("rrtimeout")&&"russianRoulette"===(0,t.se)()&&(0,t.re)(B.At,"russianRouletteData")
},pmarket:()=>{},profiles:()=>{},search:()=>{},trade:()=>{},all:()=>{
(0,t.kt)("leftalign")&&(0,
g.ut)(),(0,t.kt)("minilastaction")&&(0,t.re)(E.gt,"UserMiniProfile")},
nopager:()=>{}},F={amarket:()=>{},bazaar:()=>{
(0,t.kt)("bazaarautoprice")&&(0,o.it)(i.l,"body")},city:()=>{
(0,t.kt)()&&(0,o.it)(T.Et,"body"),
(0,t.kt)("cityfinds")&&(0,o.it)(s.L,"#map .leaflet-marker-pane")},
companies:()=>{
(0,t.kt)("ezmoneydeposit")&&(0,o.it)(p.W,"body"),(0,t.kt)("employeela")&&(0,
o.it)(m.R,".manage-company"),
(0,t.kt)("companyrestock")&&/stock/.test((0,t.$)())&&(0,o.it)(r.j,"body")},
displaycase:()=>{
(0,t.kt)("displaycaseitemid")&&(0,o.it)(l.P,"ul.dc-list"),(0,t.kt)("rwbonusdisplay")&&(0,
o.it)(D.$t,"ul.display-cabinet")},factions:()=>{
(0,t.kt)("ezmoneydeposit")&&(0,o.it)(p.W,"body"),
(0,t.kt)(t.qfs)&&(0,o.it)(h.Lt,"#faction-armoury")},gym:()=>{
(0,t.kt)("")&&(0,o.it)(z.st,'#gymroot ul[class*="properties"] [class*="strength"]')
},index:()=>{R[(0,t.Gt)()]()},item:()=>{
(0,t.kt)("removeuglyimage")&&(0,o.it)(j.Pt,'[class^="itemPreviewWrapper"]',!0),
(0,
t.kt)("easyloadoutequip")&&(0,o.it)(u.C,'ul[class^="slots"]'),(0,t.kt)(t.qis)&&(0,
o.it)(O.jt,"div.items-wrap")},imarket:()=>{
(0,t.kt)("marketnoconfirm")&&(0,o.it)(w.ft,"body")},jailview:()=>{
(0,t.kt)("quickjail")&&(0,o.it)(L.Tt,"ul.users-list")},loader:()=>{
(0,t.kt)("missionhelper")&&"missions"===(0,
t.se)()&&(0,o.it)(k.wt,".giver-cont-wrap"),
(0,t.kt)("fighterino")&&"attack"===(0,
t.se)()&&(0,o.it)(I.X,'div[class^="playersModelWrap"]')
;const e=window.innerWidth<=784?'#attacker [class^="playerWindow"]':'#defender [class^="playerWindow"]'
;(0,t.kt)("targetstatus")&&"attack"===(0,t.se)()&&(0,o.it)($.Ut,e)},page:()=>{
(0,
t.kt)("pokername")&&"holdem"===(0,t.se)()&&(0,o.it)(C.Ot,"div[class^=players]")
},pmarket:()=>{
(0,t.kt)("pointsnoconfirm")&&(0,o.it)(_._t,".users-point-sell"),(0,
t.kt)("pointsmuglight")&&(0,o.it)(x.xt,".users-point-sell")},profiles:()=>{
(0,t.kt)("idtoname")&&(0,
o.it)(b.rt,".user-info-value"),(0,t.kt)("statspies")&&(0,
o.it)(A.Rt,".user-info-value")},properties:()=>{
(0,t.kt)("ezmoneydeposit")&&(0,o.it)(p.W,"body")},shops:()=>{
(0,t.kt)("cshopmaxbuy")&&(0,o.it)(c.T,"body")},trade:()=>{
(0,t.kt)("tradevalue")&&(0,o.it)(S.Ft,"#trade-container .trade-cont")},war:()=>{
(0,
t.kt)("warvalue")&&"rankreport"===(0,t.ae)()&&(0,o.it)(N.de,'li[class^="members-bonus-row"]')
},all:()=>{
(0,t.kt)("refillreminder")&&(0,o.it)(M.It,'[class*="bar"][class*="energy"]')},
nopager:()=>{}},H={loading:async()=>{
(0,o.it)(e.zt,"#sidebar"),(0,t.Nt)()&&(document.onreadystatechange=()=>H[document.readyState](),
(U.all??U.nopager)(),(U[(0,t.qt)()]??U.nopager)(),(0,t.Wt)())},interactive:()=>{
(0,t.Nt)()&&((F.all??F.nopager)(),(F[(0,t.qt)()]??F.nopager)())},complete:()=>{
(0,t.Nt)()}};H[document.readyState]()})()})();