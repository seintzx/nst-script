// ==UserScript==
// @name         nst
// @namespace    seintz.torn.nst
// @version      1.3.9
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

(()=>{var t={246:(t,e,n)=>{function o(t,e){var n=Object.keys(t)
;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t)
;e&&(o=o.filter((function(e){
return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}
return n}function i(t){for(var e=1;e<arguments.length;e++){
var n=null!=arguments[e]?arguments[e]:{}
;e%2?o(Object(n),!0).forEach((function(e){s(t,e,n[e])
})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){
Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}
function r(t){
return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){
return typeof t}:function(t){
return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t
},r(t)}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,
enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(){
return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){
var n=arguments[e];for(var o in n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o])}
return t},a.apply(this,arguments)}function c(t,e){
(null==e||e>t.length)&&(e=t.length);for(var n=0,o=Array(e);n<e;n++)o[n]=t[n]
;return o}function l(t){
if("undefined"!=typeof window&&window.navigator)return!!navigator.userAgent.match(t)
}n.r(e),n.d(e,{MultiDrag:()=>ye,Sortable:()=>Ut,Swap:()=>le,default:()=>_e})
;var d=l(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),u=l(/Edge/i),m=l(/firefox/i),p=l(/safari/i)&&!l(/chrome/i)&&!l(/android/i),f=l(/iP(ad|od|hone)/i),h=l(/chrome/i)&&l(/android/i),b={
capture:!1,passive:!1};function g(t,e,n){t.addEventListener(e,n,!d&&b)}
function v(t,e,n){t.removeEventListener(e,n,!d&&b)}function w(t,e){if(e){
if(">"===e[0]&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e)
;if(t.msMatchesSelector)return t.msMatchesSelector(e)
;if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch(t){return!1}
return!1}}function y(t){
return t.host&&t!==document&&t.host.nodeType?t.host:t.parentNode}
function x(t,e,n,o){if(t){n=n||document;do{
if(null!=e&&(">"===e[0]?t.parentNode===n&&w(t,e):w(t,e))||o&&t===n)return t
;if(t===n)break}while(t=y(t))}return null}var k,_=/\s+/g;function L(t,e,n){
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
;return o}return[]}function T(){
return document.scrollingElement||document.documentElement}
function D(t,e,n,o,i){if(t.getBoundingClientRect||t===window){var r,s,a,c,l,u,m
;if(t!==window&&t.parentNode&&t!==T()?(s=(r=t.getBoundingClientRect()).top,
a=r.left,
c=r.bottom,l=r.right,u=r.height,m=r.width):(s=0,a=0,c=window.innerHeight,
l=window.innerWidth,
u=window.innerHeight,m=window.innerWidth),(e||n)&&t!==window&&(i=i||t.parentNode,
!d))do{
if(i&&i.getBoundingClientRect&&("none"!==O(i,"transform")||n&&"static"!==O(i,"position"))){
var p=i.getBoundingClientRect()
;s-=p.top+parseInt(O(i,"border-top-width")),a-=p.left+parseInt(O(i,"border-left-width")),
c=s+r.height,l=a+r.width;break}}while(i=i.parentNode);if(o&&t!==window){
var f=M(i||t),h=f&&f.a,b=f&&f.d;f&&(c=(s/=b)+(u/=b),l=(a/=h)+(m/=h))}return{
top:s,left:a,bottom:c,right:l,width:m,height:u}}}function I(t,e,n){
for(var o=q(t,!0),i=D(t)[e];o;){var r=D(o)[n]
;if(!("top"===n||"left"===n?i>=r:i<=r))return o;if(o===T())break;o=q(o,!1)}
return!1}function S(t,e,n,o){for(var i=0,r=0,s=t.children;r<s.length;){
if("none"!==s[r].style.display&&s[r]!==Ut.ghost&&(o||s[r]!==Ut.dragged)&&x(s[r],n.draggable,t,!1)){
if(i===e)return s[r];i++}r++}return null}function P(t,e){
for(var n=t.lastElementChild;n&&(n===Ut.ghost||"none"===O(n,"display")||e&&!w(n,e));)n=n.previousElementSibling
;return n||null}function E(t,e){var n=0;if(!t||!t.parentNode)return-1
;for(;t=t.previousElementSibling;)"TEMPLATE"===t.nodeName.toUpperCase()||t===Ut.clone||e&&!w(t,e)||n++
;return n}function A(t){var e=0,n=0,o=T();if(t)do{var i=M(t),r=i.a,s=i.d
;e+=t.scrollLeft*r,n+=t.scrollTop*s}while(t!==o&&(t=t.parentNode));return[e,n]}
function q(t,e){if(!t||!t.getBoundingClientRect)return T();var n=t,o=!1;do{
if(n.clientWidth<n.scrollWidth||n.clientHeight<n.scrollHeight){var i=O(n)
;if(n.clientWidth<n.scrollWidth&&("auto"==i.overflowX||"scroll"==i.overflowX)||n.clientHeight<n.scrollHeight&&("auto"==i.overflowY||"scroll"==i.overflowY)){
if(!n.getBoundingClientRect||n===document.body)return T();if(o||e)return n;o=!0}
}}while(n=n.parentNode);return T()}function $(t,e){
return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)
}function z(t,e){return function(){if(!k){var n=arguments
;1===n.length?t.call(this,n[0]):t.apply(this,n),k=setTimeout((function(){
k=void 0}),e)}}}function C(t,e,n){t.scrollLeft+=e,t.scrollTop+=n}function N(t){
var e=window.Polymer,n=window.jQuery||window.Zepto
;return e&&e.dom?e.dom(t).cloneNode(!0):n?n(t).clone(!0)[0]:t.cloneNode(!0)}
function R(t,e){
O(t,"position","absolute"),O(t,"top",e.top),O(t,"left",e.left),O(t,"width",e.width),
O(t,"height",e.height)}function U(t){
O(t,"position",""),O(t,"top",""),O(t,"left",""),O(t,"width",""),O(t,"height","")
}function B(t,e,n){var o={};return Array.from(t.children).forEach((function(i){
var r,s,a,c;if(x(i,e.draggable,t,!1)&&!i.animated&&i!==n){var l=D(i)
;o.left=Math.min(null!==(r=o.left)&&void 0!==r?r:1/0,l.left),
o.top=Math.min(null!==(s=o.top)&&void 0!==s?s:1/0,l.top),
o.right=Math.max(null!==(a=o.right)&&void 0!==a?a:-1/0,l.right),
o.bottom=Math.max(null!==(c=o.bottom)&&void 0!==c?c:-1/0,l.bottom)}
})),o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}
var F="Sortable"+(new Date).getTime(),H=[],G={initializeByDefault:!0},W={
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
;r.sortable=t,r.options=t.options,t[i]=r,a(n,r.defaults)}
})),t.options)if(t.options.hasOwnProperty(i)){
var r=this.modifyOption(t,i,t.options[i]);void 0!==r&&(t.options[i]=r)}},
getEventProperties:function(t,e){var n={};return H.forEach((function(o){
"function"==typeof o.eventProperties&&a(n,o.eventProperties.call(e[o.pluginName],t))
})),n},modifyOption:function(t,e,n){var o;return H.forEach((function(i){
t[i.pluginName]&&i.optionListeners&&"function"==typeof i.optionListeners[e]&&(o=i.optionListeners[e].call(t[i.pluginName],n))
})),o}};function X(t){
var e=t.sortable,n=t.rootEl,o=t.name,r=t.targetEl,s=t.cloneEl,a=t.toEl,c=t.fromEl,l=t.oldIndex,m=t.newIndex,p=t.oldDraggableIndex,f=t.newDraggableIndex,h=t.originalEvent,b=t.putSortable,g=t.extraEventProperties
;if(e=e||n&&n[F]){var v,w=e.options,y="on"+o.charAt(0).toUpperCase()+o.substr(1)
;!window.CustomEvent||d||u?(v=document.createEvent("Event")).initEvent(o,!0,!0):v=new CustomEvent(o,{
bubbles:!0,cancelable:!0
}),v.to=a||n,v.from=c||n,v.item=r||n,v.clone=s,v.oldIndex=l,
v.newIndex=m,v.oldDraggableIndex=p,
v.newDraggableIndex=f,v.originalEvent=h,v.pullMode=b?b.lastPutMode:void 0
;var x=i(i({},g),W.getEventProperties(o,e));for(var k in x)v[k]=x[k]
;n&&n.dispatchEvent(v),w[y]&&w[y].call(e,v)}}var K=["evt"],J=function(t,e){
var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.evt,r=function(t,e){
if(null==t)return{};var n,o,i=function(t,e){if(null==t)return{}
;var n,o,i={},r=Object.keys(t)
;for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e)
;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t)
;for(o=0;o<r.length;o++)n=r[o],
e.indexOf(n)>=0||{}.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}(n,K)
;W.pluginEvent.bind(Ut)(t,e,i({dragEl:Q,parentEl:V,ghostEl:Z,rootEl:tt,
nextEl:et,lastDownEl:nt,cloneEl:ot,cloneHidden:it,dragStarted:gt,putSortable:dt,
activeSortable:Ut.active,originalEvent:o,oldIndex:rt,oldDraggableIndex:at,
newIndex:st,newDraggableIndex:ct,hideGhostForTarget:zt,unhideGhostForTarget:Ct,
cloneNowHidden:function(){it=!0},cloneNowShown:function(){it=!1},
dispatchSortableEvent:function(t){Y({sortable:e,name:t,originalEvent:o})}},r))}
;function Y(t){X(i({putSortable:dt,cloneEl:ot,targetEl:Q,rootEl:tt,oldIndex:rt,
oldDraggableIndex:at,newIndex:st,newDraggableIndex:ct},t))}
var Q,V,Z,tt,et,nt,ot,it,rt,st,at,ct,lt,dt,ut,mt,pt,ft,ht,bt,gt,vt,wt,yt,xt,kt=!1,_t=!1,Lt=[],Ot=!1,Mt=!1,jt=[],Tt=!1,Dt=[],It="undefined"!=typeof document,St=f,Pt=u||d?"cssFloat":"float",Et=It&&!h&&!f&&"draggable"in document.createElement("div"),At=function(){
if(It){if(d)return!1;var t=document.createElement("x")
;return t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}
}(),qt=function(t,e){
var n=O(t),o=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),i=S(t,0,e),r=S(t,1,e),s=i&&O(i),a=r&&O(r),c=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+D(i).width,l=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+D(r).width
;if("flex"===n.display)return"column"===n.flexDirection||"column-reverse"===n.flexDirection?"vertical":"horizontal"
;if("grid"===n.display)return n.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal"
;if(i&&s.float&&"none"!==s.float){var d="left"===s.float?"left":"right"
;return!r||"both"!==a.clear&&a.clear!==d?"horizontal":"vertical"}
return i&&("block"===s.display||"flex"===s.display||"table"===s.display||"grid"===s.display||c>=o&&"none"===n[Pt]||r&&"none"===n[Pt]&&c+l>o)?"vertical":"horizontal"
},$t=function(t){function e(t,n){return function(o,i,r,s){
var a=o.options.group.name&&i.options.group.name&&o.options.group.name===i.options.group.name
;if(null==t&&(n||a))return!0;if(null==t||!1===t)return!1
;if(n&&"clone"===t)return t
;if("function"==typeof t)return e(t(o,i,r,s),n)(o,i,r,s)
;var c=(n?o:i).options.group.name
;return!0===t||"string"==typeof t&&t===c||t.join&&t.indexOf(c)>-1}}
var n={},o=t.group;o&&"object"==r(o)||(o={name:o
}),n.name=o.name,n.checkPull=e(o.pull,!0),
n.checkPut=e(o.put),n.revertClone=o.revertClone,t.group=n},zt=function(){
!At&&Z&&O(Z,"display","none")},Ct=function(){!At&&Z&&O(Z,"display","")}
;It&&!h&&document.addEventListener("click",(function(t){
if(_t)return t.preventDefault(),
t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),
_t=!1,!1}),!0);var Nt=function(t){if(Q){t=t.touches?t.touches[0]:t
;var e=(i=t.clientX,r=t.clientY,Lt.some((function(t){
var e=t[F].options.emptyInsertThreshold;if(e&&!P(t)){
var n=D(t),o=i>=n.left-e&&i<=n.right+e,a=r>=n.top-e&&r<=n.bottom+e
;return o&&a?s=t:void 0}})),s);if(e){var n={}
;for(var o in t)t.hasOwnProperty(o)&&(n[o]=t[o])
;n.target=n.rootEl=e,n.preventDefault=void 0,
n.stopPropagation=void 0,e[F]._onDragOver(n)}}var i,r,s},Rt=function(t){
Q&&Q.parentNode[F]._isOutsideThisEl(t.target)};function Ut(t,e){
if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t))
;this.el=t,this.options=e=a({},e),t[F]=this;var n,o,r={group:null,sort:!0,
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
supportPointer:!1!==Ut.supportPointer&&"PointerEvent"in window&&(!p||f),
emptyInsertThreshold:5}
;for(var s in W.initializePlugins(this,t,r),r)!(s in e)&&(e[s]=r[s])
;for(var c in $t(e),
this)"_"===c.charAt(0)&&"function"==typeof this[c]&&(this[c]=this[c].bind(this))
;this.nativeDraggable=!e.forceFallback&&Et,
this.nativeDraggable&&(this.options.touchStartThreshold=1),
e.supportPointer?g(t,"pointerdown",this._onTapStart):(g(t,"mousedown",this._onTapStart),
g(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(g(t,"dragover",this),
g(t,"dragenter",this)),
Lt.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),
a(this,(o=[],{captureAnimationState:function(){
o=[],this.options.animation&&[].slice.call(this.el.children).forEach((function(t){
if("none"!==O(t,"display")&&t!==Ut.ghost){o.push({target:t,rect:D(t)})
;var e=i({},o[o.length-1].rect);if(t.thisAnimationDuration){var n=M(t,!0)
;n&&(e.top-=n.f,e.left-=n.e)}t.fromRect=e}}))},addAnimationState:function(t){
o.push(t)},removeAnimationState:function(t){o.splice(function(t,e){
for(var n in t)if(t.hasOwnProperty(n))for(var o in e)if(e.hasOwnProperty(o)&&e[o]===t[n][o])return+n
;return-1}(o,{target:t}),1)},animateAll:function(t){var e=this
;if(!this.options.animation)return clearTimeout(n),
void("function"==typeof t&&t());var i=!1,r=0;o.forEach((function(t){
var n=0,o=t.target,s=o.fromRect,a=D(o),c=o.prevFromRect,l=o.prevToRect,d=t.rect,u=M(o,!0)
;u&&(a.top-=u.f,
a.left-=u.e),o.toRect=a,o.thisAnimationDuration&&$(c,a)&&!$(s,a)&&(d.top-a.top)/(d.left-a.left)===(s.top-a.top)/(s.left-a.left)&&(n=function(t,e,n,o){
return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-n.top,2)+Math.pow(e.left-n.left,2))*o.animation
}(d,c,l,e.options)),
$(a,s)||(o.prevFromRect=s,o.prevToRect=a,n||(n=e.options.animation),
e.animate(o,d,a,n)),
n&&(i=!0,r=Math.max(r,n),clearTimeout(o.animationResetTimer),
o.animationResetTimer=setTimeout((function(){
o.animationTime=0,o.prevFromRect=null,
o.fromRect=null,o.prevToRect=null,o.thisAnimationDuration=null
}),n),o.thisAnimationDuration=n)})),clearTimeout(n),i?n=setTimeout((function(){
"function"==typeof t&&t()}),r):"function"==typeof t&&t(),o=[]},
animate:function(t,e,n,o){if(o){O(t,"transition",""),O(t,"transform","")
;var i=M(this.el),r=i&&i.a,s=i&&i.d,a=(e.left-n.left)/(r||1),c=(e.top-n.top)/(s||1)
;t.animatingX=!!a,
t.animatingY=!!c,O(t,"transform","translate3d("+a+"px,"+c+"px,0)"),
this.forRepaintDummy=function(t){return t.offsetWidth
}(t),O(t,"transition","transform "+o+"ms"+(this.options.easing?" "+this.options.easing:"")),
O(t,"transform","translate3d(0,0,0)"),
"number"==typeof t.animated&&clearTimeout(t.animated),
t.animated=setTimeout((function(){
O(t,"transition",""),O(t,"transform",""),t.animated=!1,
t.animatingX=!1,t.animatingY=!1}),o)}}}))}function Bt(t,e,n,o,i,r,s,a){
var c,l,m=t[F],p=m.options.onMove
;return!window.CustomEvent||d||u?(c=document.createEvent("Event")).initEvent("move",!0,!0):c=new CustomEvent("move",{
bubbles:!0,cancelable:!0
}),c.to=e,c.from=t,c.dragged=n,c.draggedRect=o,c.related=i||e,
c.relatedRect=r||D(e),
c.willInsertAfter=a,c.originalEvent=s,t.dispatchEvent(c),p&&(l=p.call(m,c,s)),l}
function Ft(t){t.draggable=!1}function Ht(){Tt=!1}function Gt(t){
for(var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,o=0;n--;)o+=e.charCodeAt(n)
;return o.toString(36)}function Wt(t){return setTimeout(t,0)}function Xt(t){
return clearTimeout(t)}Ut.prototype={constructor:Ut,
_isOutsideThisEl:function(t){this.el.contains(t)||t===this.el||(vt=null)},
_getDirection:function(t,e){
return"function"==typeof this.options.direction?this.options.direction.call(this,t,e,Q):this.options.direction
},_onTapStart:function(t){if(t.cancelable){
var e=this,n=this.el,o=this.options,i=o.preventOnFilter,r=t.type,s=t.touches&&t.touches[0]||t.pointerType&&"touch"===t.pointerType&&t,a=(s||t).target,c=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||a,l=o.filter
;if(function(t){Dt.length=0
;for(var e=t.getElementsByTagName("input"),n=e.length;n--;){var o=e[n]
;o.checked&&Dt.push(o)}
}(n),!Q&&!(/mousedown|pointerdown/.test(r)&&0!==t.button||o.disabled)&&!c.isContentEditable&&(this.nativeDraggable||!p||!a||"SELECT"!==a.tagName.toUpperCase())&&!((a=x(a,o.draggable,n,!1))&&a.animated||nt===a)){
if(rt=E(a),at=E(a,o.draggable),"function"==typeof l){
if(l.call(this,t,a,this))return Y({sortable:e,rootEl:c,name:"filter",targetEl:a,
toEl:n,fromEl:n}),J("filter",e,{evt:t}),void(i&&t.preventDefault())
}else if(l&&(l=l.split(",").some((function(o){if(o=x(c,o.trim(),n,!1))return Y({
sortable:e,rootEl:o,name:"filter",targetEl:a,fromEl:n,toEl:n}),J("filter",e,{
evt:t}),!0}))))return void(i&&t.preventDefault())
;o.handle&&!x(c,o.handle,n,!1)||this._prepareDragStart(t,s,a)}}},
_prepareDragStart:function(t,e,n){
var o,i=this,r=i.el,s=i.options,a=r.ownerDocument;if(n&&!Q&&n.parentNode===r){
var c=D(n)
;if(tt=r,V=(Q=n).parentNode,et=Q.nextSibling,nt=n,lt=s.group,Ut.dragged=Q,ut={
target:Q,clientX:(e||t).clientX,clientY:(e||t).clientY
},ht=ut.clientX-c.left,bt=ut.clientY-c.top,
this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,
Q.style["will-change"]="all",o=function(){J("delayEnded",i,{evt:t
}),Ut.eventCanceled?i._onDrop():(i._disableDelayedDragEvents(),
!m&&i.nativeDraggable&&(Q.draggable=!0),i._triggerDragStart(t,e),Y({sortable:i,
name:"choose",originalEvent:t}),L(Q,s.chosenClass,!0))
},s.ignore.split(",").forEach((function(t){j(Q,t.trim(),Ft)
})),g(a,"dragover",Nt),
g(a,"mousemove",Nt),g(a,"touchmove",Nt),s.supportPointer?(g(a,"pointerup",i._onDrop),
!this.nativeDraggable&&g(a,"pointercancel",i._onDrop)):(g(a,"mouseup",i._onDrop),
g(a,"touchend",i._onDrop),
g(a,"touchcancel",i._onDrop)),m&&this.nativeDraggable&&(this.options.touchStartThreshold=4,
Q.draggable=!0),J("delayStart",this,{evt:t
}),!s.delay||s.delayOnTouchOnly&&!e||this.nativeDraggable&&(u||d))o();else{
if(Ut.eventCanceled)return void this._onDrop()
;s.supportPointer?(g(a,"pointerup",i._disableDelayedDrag),
g(a,"pointercancel",i._disableDelayedDrag)):(g(a,"mouseup",i._disableDelayedDrag),
g(a,"touchend",i._disableDelayedDrag),g(a,"touchcancel",i._disableDelayedDrag)),
g(a,"mousemove",i._delayedDragTouchMoveHandler),
g(a,"touchmove",i._delayedDragTouchMoveHandler),
s.supportPointer&&g(a,"pointermove",i._delayedDragTouchMoveHandler),
i._dragStartTimer=setTimeout(o,s.delay)}}},
_delayedDragTouchMoveHandler:function(t){var e=t.touches?t.touches[0]:t
;Math.max(Math.abs(e.clientX-this._lastX),Math.abs(e.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()
},_disableDelayedDrag:function(){
Q&&Ft(Q),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},
_disableDelayedDragEvents:function(){var t=this.el.ownerDocument
;v(t,"mouseup",this._disableDelayedDrag),
v(t,"touchend",this._disableDelayedDrag),
v(t,"touchcancel",this._disableDelayedDrag),
v(t,"pointerup",this._disableDelayedDrag),
v(t,"pointercancel",this._disableDelayedDrag),
v(t,"mousemove",this._delayedDragTouchMoveHandler),
v(t,"touchmove",this._delayedDragTouchMoveHandler),
v(t,"pointermove",this._delayedDragTouchMoveHandler)},
_triggerDragStart:function(t,e){
e=e||"touch"==t.pointerType&&t,!this.nativeDraggable||e?this.options.supportPointer?g(document,"pointermove",this._onTouchMove):g(document,e?"touchmove":"mousemove",this._onTouchMove):(g(Q,"dragend",this),
g(tt,"dragstart",this._onDragStart));try{document.selection?Wt((function(){
document.selection.empty()})):window.getSelection().removeAllRanges()}catch(t){}
},_dragStarted:function(t,e){if(kt=!1,tt&&Q){J("dragStarted",this,{evt:e
}),this.nativeDraggable&&g(document,"dragover",Rt);var n=this.options
;!t&&L(Q,n.dragClass,!1),
L(Q,n.ghostClass,!0),Ut.active=this,t&&this._appendGhost(),Y({sortable:this,
name:"start",originalEvent:e})}else this._nulling()},
_emulateDragOver:function(){if(mt){
this._lastX=mt.clientX,this._lastY=mt.clientY,zt()
;for(var t=document.elementFromPoint(mt.clientX,mt.clientY),e=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(mt.clientX,mt.clientY))!==e;)e=t
;if(Q.parentNode[F]._isOutsideThisEl(t),e)do{if(e[F]&&e[F]._onDragOver({
clientX:mt.clientX,clientY:mt.clientY,target:t,rootEl:e
})&&!this.options.dragoverBubble)break;t=e}while(e=y(e));Ct()}},
_onTouchMove:function(t){if(ut){
var e=this.options,n=e.fallbackTolerance,o=e.fallbackOffset,i=t.touches?t.touches[0]:t,r=Z&&M(Z,!0),s=Z&&r&&r.a,a=Z&&r&&r.d,c=St&&xt&&A(xt),l=(i.clientX-ut.clientX+o.x)/(s||1)+(c?c[0]-jt[0]:0)/(s||1),d=(i.clientY-ut.clientY+o.y)/(a||1)+(c?c[1]-jt[1]:0)/(a||1)
;if(!Ut.active&&!kt){
if(n&&Math.max(Math.abs(i.clientX-this._lastX),Math.abs(i.clientY-this._lastY))<n)return
;this._onDragStart(t,!0)}if(Z){r?(r.e+=l-(pt||0),r.f+=d-(ft||0)):r={a:1,b:0,c:0,
d:1,e:l,f:d}
;var u="matrix(".concat(r.a,",").concat(r.b,",").concat(r.c,",").concat(r.d,",").concat(r.e,",").concat(r.f,")")
;O(Z,"webkitTransform",u),
O(Z,"mozTransform",u),O(Z,"msTransform",u),O(Z,"transform",u),pt=l,ft=d,mt=i}
t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!Z){
var t=this.options.fallbackOnBody?document.body:tt,e=D(Q,!0,St,!0,t),n=this.options
;if(St){
for(xt=t;"static"===O(xt,"position")&&"none"===O(xt,"transform")&&xt!==document;)xt=xt.parentNode
;xt!==document.body&&xt!==document.documentElement?(xt===document&&(xt=T()),
e.top+=xt.scrollTop,e.left+=xt.scrollLeft):xt=T(),jt=A(xt)}
L(Z=Q.cloneNode(!0),n.ghostClass,!1),
L(Z,n.fallbackClass,!0),L(Z,n.dragClass,!0),
O(Z,"transition",""),O(Z,"transform",""),
O(Z,"box-sizing","border-box"),O(Z,"margin",0),
O(Z,"top",e.top),O(Z,"left",e.left),O(Z,"width",e.width),O(Z,"height",e.height),
O(Z,"opacity","0.8"),
O(Z,"position",St?"absolute":"fixed"),O(Z,"zIndex","100000"),
O(Z,"pointerEvents","none"),
Ut.ghost=Z,t.appendChild(Z),O(Z,"transform-origin",ht/parseInt(Z.style.width)*100+"% "+bt/parseInt(Z.style.height)*100+"%")
}},_onDragStart:function(t,e){var n=this,o=t.dataTransfer,i=n.options
;J("dragStart",this,{evt:t
}),Ut.eventCanceled?this._onDrop():(J("setupClone",this),
Ut.eventCanceled||((ot=N(Q)).removeAttribute("id"),
ot.draggable=!1,ot.style["will-change"]="",
this._hideClone(),L(ot,this.options.chosenClass,!1),
Ut.clone=ot),n.cloneId=Wt((function(){
J("clone",n),Ut.eventCanceled||(n.options.removeCloneOnHide||tt.insertBefore(ot,Q),
n._hideClone(),Y({sortable:n,name:"clone"}))
})),!e&&L(Q,i.dragClass,!0),e?(_t=!0,
n._loopId=setInterval(n._emulateDragOver,50)):(v(document,"mouseup",n._onDrop),
v(document,"touchend",n._onDrop),
v(document,"touchcancel",n._onDrop),o&&(o.effectAllowed="move",
i.setData&&i.setData.call(n,o,Q)),
g(document,"drop",n),O(Q,"transform","translateZ(0)")),
kt=!0,n._dragStartId=Wt(n._dragStarted.bind(n,e,t)),g(document,"selectstart",n),
gt=!0,
window.getSelection().removeAllRanges(),p&&O(document.body,"user-select","none"))
},_onDragOver:function(t){
var e,n,o,r,s=this.el,a=t.target,c=this.options,l=c.group,d=Ut.active,u=lt===l,m=c.sort,p=dt||d,f=this,h=!1
;if(!Tt){
if(void 0!==t.preventDefault&&t.cancelable&&t.preventDefault(),a=x(a,c.draggable,s,!0),
N("dragOver"),Ut.eventCanceled)return h
;if(Q.contains(t.target)||a.animated&&a.animatingX&&a.animatingY||f._ignoreWhileAnimating===a)return U(!1)
;if(_t=!1,
d&&!c.disabled&&(u?m||(o=V!==tt):dt===this||(this.lastPutMode=lt.checkPull(this,d,Q,t))&&l.checkPut(this,d,Q,t))){
if(r="vertical"===this._getDirection(t,a),
e=D(Q),N("dragOverValid"),Ut.eventCanceled)return h
;if(o)return V=tt,R(),this._hideClone(),
N("revert"),Ut.eventCanceled||(et?tt.insertBefore(Q,et):tt.appendChild(Q)),U(!0)
;var b=P(s,c.draggable);if(!b||function(t,e,n){
var o=D(P(n.el,n.options.draggable)),i=B(n.el,n.options,Z)
;return e?t.clientX>i.right+10||t.clientY>o.bottom&&t.clientX>o.left:t.clientY>i.bottom+10||t.clientX>o.right&&t.clientY>o.top
}(t,r,this)&&!b.animated){if(b===Q)return U(!1)
;if(b&&s===t.target&&(a=b),a&&(n=D(a)),
!1!==Bt(tt,s,Q,e,a,n,t,!!a))return R(),b&&b.nextSibling?s.insertBefore(Q,b.nextSibling):s.appendChild(Q),
V=s,H(),U(!0)}else if(b&&function(t,e,n){
var o=D(S(n.el,0,n.options,!0)),i=B(n.el,n.options,Z)
;return e?t.clientX<i.left-10||t.clientY<o.top&&t.clientX<o.right:t.clientY<i.top-10||t.clientY<o.bottom&&t.clientX<o.left
}(t,r,this)){var g=S(s,0,c,!0);if(g===Q)return U(!1)
;if(n=D(a=g),!1!==Bt(tt,s,Q,e,a,n,t,!1))return R(),
s.insertBefore(Q,g),V=s,H(),U(!0)}else if(a.parentNode===s){n=D(a)
;var v,w,y,k=Q.parentNode!==s,_=!function(t,e,n){
var o=n?t.left:t.top,i=n?t.right:t.bottom,r=n?t.width:t.height,s=n?e.left:e.top,a=n?e.right:e.bottom,c=n?e.width:e.height
;return o===s||i===a||o+r/2===s+c/2
}(Q.animated&&Q.toRect||e,a.animated&&a.toRect||n,r),M=r?"top":"left",j=I(a,"top","top")||I(Q,"top","top"),T=j?j.scrollTop:void 0
;if(vt!==a&&(w=n[M],Ot=!1,Mt=!_&&c.invertSwap||k),v=function(t,e,n,o,i,r,s,a){
var c=o?t.clientY:t.clientX,l=o?n.height:n.width,d=o?n.top:n.left,u=o?n.bottom:n.right,m=!1
;if(!s)if(a&&yt<l*i){
if(!Ot&&(1===wt?c>d+l*r/2:c<u-l*r/2)&&(Ot=!0),Ot)m=!0;else if(1===wt?c<d+yt:c>u-yt)return-wt
}else if(c>d+l*(1-i)/2&&c<u-l*(1-i)/2)return function(t){return E(Q)<E(t)?1:-1
}(e);return(m=m||s)&&(c<d+l*r/2||c>u-l*r/2)?c>d+l/2?1:-1:0
}(t,a,n,r,_?1:c.swapThreshold,null==c.invertedSwapThreshold?c.swapThreshold:c.invertedSwapThreshold,Mt,vt===a),
0!==v){var A=E(Q);do{A-=v,y=V.children[A]
}while(y&&("none"===O(y,"display")||y===Z))}if(0===v||y===a)return U(!1)
;vt=a,wt=v;var q=a.nextElementSibling,$=!1,z=Bt(tt,s,Q,e,a,n,t,$=1===v)
;if(!1!==z)return 1!==z&&-1!==z||($=1===z),
Tt=!0,setTimeout(Ht,30),R(),$&&!q?s.appendChild(Q):a.parentNode.insertBefore(Q,$?q:a),
j&&C(j,0,T-j.scrollTop),V=Q.parentNode,void 0===w||Mt||(yt=Math.abs(w-D(a)[M])),
H(),U(!0)}if(s.contains(Q))return U(!1)}return!1}function N(c,l){J(c,f,i({evt:t,
isOwner:u,axis:r?"vertical":"horizontal",revert:o,dragRect:e,targetRect:n,
canSort:m,fromSortable:p,target:a,completed:U,onMove:function(n,o){
return Bt(tt,s,Q,e,n,D(n),t,o)},changed:H},l))}function R(){
N("dragOverAnimationCapture"),
f.captureAnimationState(),f!==p&&p.captureAnimationState()}function U(e){
return N("dragOverCompleted",{insertion:e
}),e&&(u?d._hideClone():d._showClone(f),
f!==p&&(L(Q,dt?dt.options.ghostClass:d.options.ghostClass,!1),
L(Q,c.ghostClass,!0)),
dt!==f&&f!==Ut.active?dt=f:f===Ut.active&&dt&&(dt=null),p===f&&(f._ignoreWhileAnimating=a),
f.animateAll((function(){
N("dragOverAnimationComplete"),f._ignoreWhileAnimating=null
})),f!==p&&(p.animateAll(),
p._ignoreWhileAnimating=null)),(a===Q&&!Q.animated||a===s&&!a.animated)&&(vt=null),
c.dragoverBubble||t.rootEl||a===document||(Q.parentNode[F]._isOutsideThisEl(t.target),
!e&&Nt(t)),!c.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),h=!0}
function H(){st=E(Q),ct=E(Q,c.draggable),Y({sortable:f,name:"change",toEl:s,
newIndex:st,newDraggableIndex:ct,originalEvent:t})}},_ignoreWhileAnimating:null,
_offMoveEvents:function(){
v(document,"mousemove",this._onTouchMove),v(document,"touchmove",this._onTouchMove),
v(document,"pointermove",this._onTouchMove),
v(document,"dragover",Nt),v(document,"mousemove",Nt),v(document,"touchmove",Nt)
},_offUpEvents:function(){var t=this.el.ownerDocument
;v(t,"mouseup",this._onDrop),
v(t,"touchend",this._onDrop),v(t,"pointerup",this._onDrop),
v(t,"pointercancel",this._onDrop),
v(t,"touchcancel",this._onDrop),v(document,"selectstart",this)},
_onDrop:function(t){var e=this.el,n=this.options
;st=E(Q),ct=E(Q,n.draggable),J("drop",this,{evt:t
}),V=Q&&Q.parentNode,st=E(Q),ct=E(Q,n.draggable),Ut.eventCanceled||(kt=!1,Mt=!1,
Ot=!1,
clearInterval(this._loopId),clearTimeout(this._dragStartTimer),Xt(this.cloneId),
Xt(this._dragStartId),
this.nativeDraggable&&(v(document,"drop",this),v(e,"dragstart",this._onDragStart)),
this._offMoveEvents(),
this._offUpEvents(),p&&O(document.body,"user-select",""),O(Q,"transform",""),
t&&(gt&&(t.cancelable&&t.preventDefault(),
!n.dropBubble&&t.stopPropagation()),Z&&Z.parentNode&&Z.parentNode.removeChild(Z),
(tt===V||dt&&"clone"!==dt.lastPutMode)&&ot&&ot.parentNode&&ot.parentNode.removeChild(ot),
Q&&(this.nativeDraggable&&v(Q,"dragend",this),
Ft(Q),Q.style["will-change"]="",gt&&!kt&&L(Q,dt?dt.options.ghostClass:this.options.ghostClass,!1),
L(Q,this.options.chosenClass,!1),Y({sortable:this,name:"unchoose",toEl:V,
newIndex:null,newDraggableIndex:null,originalEvent:t}),tt!==V?(st>=0&&(Y({
rootEl:V,name:"add",toEl:V,fromEl:tt,originalEvent:t}),Y({sortable:this,
name:"remove",toEl:V,originalEvent:t}),Y({rootEl:V,name:"sort",toEl:V,fromEl:tt,
originalEvent:t}),Y({sortable:this,name:"sort",toEl:V,originalEvent:t
})),dt&&dt.save()):st!==rt&&st>=0&&(Y({sortable:this,name:"update",toEl:V,
originalEvent:t}),Y({sortable:this,name:"sort",toEl:V,originalEvent:t
})),Ut.active&&(null!=st&&-1!==st||(st=rt,ct=at),Y({sortable:this,name:"end",
toEl:V,originalEvent:t}),this.save())))),this._nulling()},_nulling:function(){
J("nulling",this),
tt=Q=V=Z=et=ot=nt=it=ut=mt=gt=st=ct=rt=at=vt=wt=dt=lt=Ut.dragged=Ut.ghost=Ut.clone=Ut.active=null,
Dt.forEach((function(t){t.checked=!0})),Dt.length=pt=ft=0},
handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t)
;break;case"dragenter":case"dragover":Q&&(this._onDragOver(t),function(t){
t.dataTransfer&&(t.dataTransfer.dropEffect="move"),
t.cancelable&&t.preventDefault()}(t));break;case"selectstart":t.preventDefault()
}},toArray:function(){
for(var t,e=[],n=this.el.children,o=0,i=n.length,r=this.options;o<i;o++)x(t=n[o],r.draggable,this.el,!1)&&e.push(t.getAttribute(r.dataIdAttr)||Gt(t))
;return e},sort:function(t,e){var n={},o=this.el
;this.toArray().forEach((function(t,e){var i=o.children[e]
;x(i,this.options.draggable,o,!1)&&(n[t]=i)
}),this),e&&this.captureAnimationState(),t.forEach((function(t){
n[t]&&(o.removeChild(n[t]),o.appendChild(n[t]))})),e&&this.animateAll()},
save:function(){var t=this.options.store;t&&t.set&&t.set(this)},
closest:function(t,e){return x(t,e||this.options.draggable,this.el,!1)},
option:function(t,e){var n=this.options;if(void 0===e)return n[t]
;var o=W.modifyOption(this,t,e);n[t]=void 0!==o?o:e,"group"===t&&$t(n)},
destroy:function(){J("destroy",this);var t=this.el
;t[F]=null,v(t,"mousedown",this._onTapStart),v(t,"touchstart",this._onTapStart),
v(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(v(t,"dragover",this),
v(t,"dragenter",this)),
[].forEach.call(t.querySelectorAll("[draggable]"),(function(t){
t.removeAttribute("draggable")
})),this._onDrop(),this._disableDelayedDragEvents(),
Lt.splice(Lt.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!it){
if(J("hideClone",this),Ut.eventCanceled)return
;O(ot,"display","none"),this.options.removeCloneOnHide&&ot.parentNode&&ot.parentNode.removeChild(ot),
it=!0}},_showClone:function(t){if("clone"===t.lastPutMode){if(it){
if(J("showClone",this),Ut.eventCanceled)return
;Q.parentNode!=tt||this.options.group.revertClone?et?tt.insertBefore(ot,et):tt.appendChild(ot):tt.insertBefore(ot,Q),
this.options.group.revertClone&&this.animate(Q,ot),O(ot,"display",""),it=!1}
}else this._hideClone()}},It&&g(document,"touchmove",(function(t){
(Ut.active||kt)&&t.cancelable&&t.preventDefault()})),Ut.utils={on:g,off:v,css:O,
find:j,is:function(t,e){return!!x(t,e,t,!1)},extend:function(t,e){
if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t},throttle:z,
closest:x,toggleClass:L,clone:N,index:E,nextTick:Wt,cancelNextTick:Xt,
detectDirection:qt,getChild:S,expando:F},Ut.get=function(t){return t[F]
},Ut.mount=function(){
for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n]
;e[0].constructor===Array&&(e=e[0]),e.forEach((function(t){
if(!t.prototype||!t.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t))
;t.utils&&(Ut.utils=i(i({},Ut.utils),t.utils)),W.mount(t)}))
},Ut.create=function(t,e){return new Ut(t,e)},Ut.version="1.15.6"
;var Kt,Jt,Yt,Qt,Vt,Zt,te=[],ee=!1;function ne(){te.forEach((function(t){
clearInterval(t.pid)})),te=[]}function oe(){clearInterval(Zt)}
var ie,re=z((function(t,e,n,o){if(e.scroll){
var i,r=(t.touches?t.touches[0]:t).clientX,s=(t.touches?t.touches[0]:t).clientY,a=e.scrollSensitivity,c=e.scrollSpeed,l=T(),d=!1
;Jt!==n&&(Jt=n,ne(),Kt=e.scroll,i=e.scrollFn,!0===Kt&&(Kt=q(n,!0)));var u=0,m=Kt
;do{
var p=m,f=D(p),h=f.top,b=f.bottom,g=f.left,v=f.right,w=f.width,y=f.height,x=void 0,k=void 0,_=p.scrollWidth,L=p.scrollHeight,M=O(p),j=p.scrollLeft,I=p.scrollTop
;p===l?(x=w<_&&("auto"===M.overflowX||"scroll"===M.overflowX||"visible"===M.overflowX),
k=y<L&&("auto"===M.overflowY||"scroll"===M.overflowY||"visible"===M.overflowY)):(x=w<_&&("auto"===M.overflowX||"scroll"===M.overflowX),
k=y<L&&("auto"===M.overflowY||"scroll"===M.overflowY))
;var S=x&&(Math.abs(v-r)<=a&&j+w<_)-(Math.abs(g-r)<=a&&!!j),P=k&&(Math.abs(b-s)<=a&&I+y<L)-(Math.abs(h-s)<=a&&!!I)
;if(!te[u])for(var E=0;E<=u;E++)te[E]||(te[E]={})
;te[u].vx==S&&te[u].vy==P&&te[u].el===p||(te[u].el=p,
te[u].vx=S,te[u].vy=P,clearInterval(te[u].pid),
0==S&&0==P||(d=!0,te[u].pid=setInterval(function(){
o&&0===this.layer&&Ut.active._onTouchMove(Vt)
;var e=te[this.layer].vy?te[this.layer].vy*c:0,n=te[this.layer].vx?te[this.layer].vx*c:0
;"function"==typeof i&&"continue"!==i.call(Ut.dragged.parentNode[F],n,e,t,Vt,te[this.layer].el)||C(te[this.layer].el,n,e)
}.bind({layer:u}),24))),u++}while(e.bubbleScroll&&m!==l&&(m=q(m,!1)));ee=d}
}),30),se=function(t){
var e=t.originalEvent,n=t.putSortable,o=t.dragEl,i=t.activeSortable,r=t.dispatchSortableEvent,s=t.hideGhostForTarget,a=t.unhideGhostForTarget
;if(e){var c=n||i;s()
;var l=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e,d=document.elementFromPoint(l.clientX,l.clientY)
;a(),c&&!c.el.contains(d)&&(r("spill"),this.onSpill({dragEl:o,putSortable:n}))}}
;function ae(){}function ce(){}function le(){function t(){this.defaults={
swapClass:"sortable-swap-highlight"}}return t.prototype={dragStart:function(t){
var e=t.dragEl;ie=e},dragOverValid:function(t){
var e=t.completed,n=t.target,o=t.onMove,i=t.activeSortable,r=t.changed,s=t.cancel
;if(i.options.swap){var a=this.sortable.el,c=this.options;if(n&&n!==a){var l=ie
;!1!==o(n)?(L(n,c.swapClass,!0),ie=n):ie=null,l&&l!==ie&&L(l,c.swapClass,!1)}
r(),e(!0),s()}},drop:function(t){
var e,n,o,i,r,s,a=t.activeSortable,c=t.putSortable,l=t.dragEl,d=c||this.sortable,u=this.options
;ie&&L(ie,u.swapClass,!1),
ie&&(u.swap||c&&c.options.swap)&&l!==ie&&(d.captureAnimationState(),
d!==a&&a.captureAnimationState(),
n=ie,r=(e=l).parentNode,s=n.parentNode,r&&s&&!r.isEqualNode(n)&&!s.isEqualNode(e)&&(o=E(e),
i=E(n),
r.isEqualNode(s)&&o<i&&i++,r.insertBefore(n,r.children[o]),s.insertBefore(e,s.children[i])),
d.animateAll(),d!==a&&a.animateAll())},nulling:function(){ie=null}},a(t,{
pluginName:"swap",eventProperties:function(){return{swapItem:ie}}})}
ae.prototype={startIndex:null,dragStart:function(t){var e=t.oldDraggableIndex
;this.startIndex=e},onSpill:function(t){var e=t.dragEl,n=t.putSortable
;this.sortable.captureAnimationState(),n&&n.captureAnimationState()
;var o=S(this.sortable.el,this.startIndex,this.options)
;o?this.sortable.el.insertBefore(e,o):this.sortable.el.appendChild(e),
this.sortable.animateAll(),n&&n.animateAll()},drop:se},a(ae,{
pluginName:"revertOnSpill"}),ce.prototype={onSpill:function(t){
var e=t.dragEl,n=t.putSortable||this.sortable
;n.captureAnimationState(),e.parentNode&&e.parentNode.removeChild(e),
n.animateAll()},drop:se},a(ce,{pluginName:"removeOnSpill"})
;var de,ue,me,pe,fe,he=[],be=[],ge=!1,ve=!1,we=!1;function ye(){function t(t){
for(var e in this)"_"===e.charAt(0)&&"function"==typeof this[e]&&(this[e]=this[e].bind(this))
;t.options.avoidImplicitDeselect||(t.options.supportPointer?g(document,"pointerup",this._deselectMultiDrag):(g(document,"mouseup",this._deselectMultiDrag),
g(document,"touchend",this._deselectMultiDrag))),
g(document,"keydown",this._checkKeyDown),
g(document,"keyup",this._checkKeyUp),this.defaults={
selectedClass:"sortable-selected",multiDragKey:null,avoidImplicitDeselect:!1,
setData:function(e,n){var o="";he.length&&ue===t?he.forEach((function(t,e){
o+=(e?", ":"")+t.textContent})):o=n.textContent,e.setData("Text",o)}}}
return t.prototype={multiDragKeyDown:!1,isMultiDrag:!1,
delayStartGlobal:function(t){var e=t.dragEl;me=e},delayEnded:function(){
this.isMultiDrag=~he.indexOf(me)},setupClone:function(t){
var e=t.sortable,n=t.cancel;if(this.isMultiDrag){
for(var o=0;o<he.length;o++)be.push(N(he[o])),
be[o].sortableIndex=he[o].sortableIndex,
be[o].draggable=!1,be[o].style["will-change"]="",
L(be[o],this.options.selectedClass,!1),
he[o]===me&&L(be[o],this.options.chosenClass,!1);e._hideClone(),n()}},
clone:function(t){
var e=t.sortable,n=t.rootEl,o=t.dispatchSortableEvent,i=t.cancel
;this.isMultiDrag&&(this.options.removeCloneOnHide||he.length&&ue===e&&(xe(!0,n),
o("clone"),i()))},showClone:function(t){
var e=t.cloneNowShown,n=t.rootEl,o=t.cancel
;this.isMultiDrag&&(xe(!1,n),be.forEach((function(t){O(t,"display","")
})),e(),fe=!1,o())},hideClone:function(t){
var e=this,n=(t.sortable,t.cloneNowHidden),o=t.cancel
;this.isMultiDrag&&(be.forEach((function(t){
O(t,"display","none"),e.options.removeCloneOnHide&&t.parentNode&&t.parentNode.removeChild(t)
})),n(),fe=!0,o())},dragStartGlobal:function(t){
t.sortable,!this.isMultiDrag&&ue&&ue.multiDrag._deselectMultiDrag(),
he.forEach((function(t){t.sortableIndex=E(t)})),he=he.sort((function(t,e){
return t.sortableIndex-e.sortableIndex})),we=!0},dragStarted:function(t){
var e=this,n=t.sortable;if(this.isMultiDrag){
if(this.options.sort&&(n.captureAnimationState(),this.options.animation)){
he.forEach((function(t){t!==me&&O(t,"position","absolute")}))
;var o=D(me,!1,!0,!0);he.forEach((function(t){t!==me&&R(t,o)})),ve=!0,ge=!0}
n.animateAll((function(){
ve=!1,ge=!1,e.options.animation&&he.forEach((function(t){U(t)
})),e.options.sort&&ke()}))}},dragOver:function(t){
var e=t.target,n=t.completed,o=t.cancel;ve&&~he.indexOf(e)&&(n(!1),o())},
revert:function(t){var e=t.fromSortable,n=t.rootEl,o=t.sortable,i=t.dragRect
;he.length>1&&(he.forEach((function(t){o.addAnimationState({target:t,
rect:ve?D(t):i}),U(t),t.fromRect=i,e.removeAnimationState(t)
})),ve=!1,function(t,e){he.forEach((function(n,o){
var i=e.children[n.sortableIndex+(t?+o:0)]
;i?e.insertBefore(n,i):e.appendChild(n)}))}(!this.options.removeCloneOnHide,n))
},dragOverCompleted:function(t){
var e=t.sortable,n=t.isOwner,o=t.insertion,i=t.activeSortable,r=t.parentEl,s=t.putSortable,a=this.options
;if(o){
if(n&&i._hideClone(),ge=!1,a.animation&&he.length>1&&(ve||!n&&!i.options.sort&&!s)){
var c=D(me,!1,!0,!0);he.forEach((function(t){t!==me&&(R(t,c),r.appendChild(t))
})),ve=!0}if(!n)if(ve||ke(),he.length>1){var l=fe
;i._showClone(e),i.options.animation&&!fe&&l&&be.forEach((function(t){
i.addAnimationState({target:t,rect:pe
}),t.fromRect=pe,t.thisAnimationDuration=null}))}else i._showClone(e)}},
dragOverAnimationCapture:function(t){
var e=t.dragRect,n=t.isOwner,o=t.activeSortable;if(he.forEach((function(t){
t.thisAnimationDuration=null
})),o.options.animation&&!n&&o.multiDrag.isMultiDrag){pe=a({},e);var i=M(me,!0)
;pe.top-=i.f,pe.left-=i.e}},dragOverAnimationComplete:function(){
ve&&(ve=!1,ke())},drop:function(t){
var e=t.originalEvent,n=t.rootEl,o=t.parentEl,i=t.sortable,r=t.dispatchSortableEvent,s=t.oldIndex,a=t.putSortable,c=a||this.sortable
;if(e){var l=this.options,d=o.children
;if(!we)if(l.multiDragKey&&!this.multiDragKeyDown&&this._deselectMultiDrag(),
L(me,l.selectedClass,!~he.indexOf(me)),
~he.indexOf(me))he.splice(he.indexOf(me),1),de=null,X({sortable:i,rootEl:n,
name:"deselect",targetEl:me,originalEvent:e});else{if(he.push(me),X({sortable:i,
rootEl:n,name:"select",targetEl:me,originalEvent:e
}),e.shiftKey&&de&&i.el.contains(de)){var u=E(de),m=E(me)
;~u&&~m&&u!==m&&function(){var t,r;m>u?(r=u,t=m):(r=m,t=u+1)
;for(var s=l.filter;r<t;r++)~he.indexOf(d[r])||x(d[r],l.draggable,o,!1)&&(s&&("function"==typeof s?s.call(i,e,d[r],i):s.split(",").some((function(t){
return x(d[r],t.trim(),o,!1)})))||(L(d[r],l.selectedClass,!0),he.push(d[r]),X({
sortable:i,rootEl:n,name:"select",targetEl:d[r],originalEvent:e})))}()
}else de=me;ue=c}if(we&&this.isMultiDrag){
if(ve=!1,(o[F].options.sort||o!==n)&&he.length>1){
var p=D(me),f=E(me,":not(."+this.options.selectedClass+")")
;if(!ge&&l.animation&&(me.thisAnimationDuration=null),c.captureAnimationState(),
!ge&&(l.animation&&(me.fromRect=p,he.forEach((function(t){
if(t.thisAnimationDuration=null,t!==me){var e=ve?D(t):p
;t.fromRect=e,c.addAnimationState({target:t,rect:e})}
}))),ke(),he.forEach((function(t){
d[f]?o.insertBefore(t,d[f]):o.appendChild(t),f++})),s===E(me))){var h=!1
;he.forEach((function(t){t.sortableIndex===E(t)||(h=!0)
})),h&&(r("update"),r("sort"))}he.forEach((function(t){U(t)})),c.animateAll()}
ue=c}(n===o||a&&"clone"!==a.lastPutMode)&&be.forEach((function(t){
t.parentNode&&t.parentNode.removeChild(t)}))}},nullingGlobal:function(){
this.isMultiDrag=we=!1,be.length=0},destroyGlobal:function(){
this._deselectMultiDrag(),
v(document,"pointerup",this._deselectMultiDrag),v(document,"mouseup",this._deselectMultiDrag),
v(document,"touchend",this._deselectMultiDrag),
v(document,"keydown",this._checkKeyDown),v(document,"keyup",this._checkKeyUp)},
_deselectMultiDrag:function(t){
if(!(void 0!==we&&we||ue!==this.sortable||t&&x(t.target,this.options.draggable,this.sortable.el,!1)||t&&0!==t.button))for(;he.length;){
var e=he[0];L(e,this.options.selectedClass,!1),he.shift(),X({
sortable:this.sortable,rootEl:this.sortable.el,name:"deselect",targetEl:e,
originalEvent:t})}},_checkKeyDown:function(t){
t.key===this.options.multiDragKey&&(this.multiDragKeyDown=!0)},
_checkKeyUp:function(t){
t.key===this.options.multiDragKey&&(this.multiDragKeyDown=!1)}},a(t,{
pluginName:"multiDrag",utils:{select:function(t){var e=t.parentNode[F]
;e&&e.options.multiDrag&&!~he.indexOf(t)&&(ue&&ue!==e&&(ue.multiDrag._deselectMultiDrag(),
ue=e),L(t,e.options.selectedClass,!0),he.push(t))},deselect:function(t){
var e=t.parentNode[F],n=he.indexOf(t)
;e&&e.options.multiDrag&&~n&&(L(t,e.options.selectedClass,!1),he.splice(n,1))}},
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
t}}})}function xe(t,e){be.forEach((function(n,o){
var i=e.children[n.sortableIndex+(t?+o:0)]
;i?e.insertBefore(n,i):e.appendChild(n)}))}function ke(){
he.forEach((function(t){t!==me&&t.parentNode&&t.parentNode.removeChild(t)}))}
Ut.mount(new function(){function t(){for(var t in this.defaults={scroll:!0,
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
oe(),ne(),clearTimeout(k),k=void 0},nulling:function(){
Vt=Jt=Kt=ee=Zt=Yt=Qt=null,te.length=0},_handleFallbackAutoScroll:function(t){
this._handleAutoScroll(t,!0)},_handleAutoScroll:function(t,e){
var n=this,o=(t.touches?t.touches[0]:t).clientX,i=(t.touches?t.touches[0]:t).clientY,r=document.elementFromPoint(o,i)
;if(Vt=t,e||this.options.forceAutoScrollFallback||u||d||p){
re(t,this.options,r,e);var s=q(r,!0)
;!ee||Zt&&o===Yt&&i===Qt||(Zt&&oe(),Zt=setInterval((function(){
var r=q(document.elementFromPoint(o,i),!0);r!==s&&(s=r,ne()),re(t,n.options,r,e)
}),10),Yt=o,Qt=i)}else{
if(!this.options.bubbleScroll||q(r,!0)===T())return void ne()
;re(t,this.options,q(r,!1),!1)}}},a(t,{pluginName:"scroll",
initializeByDefault:!0})}),Ut.mount(ce,ae);const _e=Ut},263:(t,e)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.t=void 0;const n=t=>{
const e=t.getAttribute&&"true"==t.getAttribute("contenteditable")
;t.textContent&&!e&&(t.textContent=t.textContent.replaceAll("Natural Selection","NS"))
},o=t=>{3==t.nodeType&&n(t);let e=t?.firstChild;for(;e;)3==e.nodeType?n(e):o(e),
e=e.nextSibling};e.t=t=>{o(t);const e=document.querySelector("#map")
;e&&new MutationObserver((t=>{t.forEach((t=>{
Array.from(t.addedNodes).forEach((t=>o(t))),"attributes"==t.type&&o(t.target)}))
})).observe(e,{childList:!0,subtree:!0,attributes:!0})}},276:(t,e,n)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.l=void 0;const o=n(6185)
;e.l=()=>{document.addEventListener("dblclick",(t=>{const e=t?.target
;"INPUT"===e?.tagName&&(e.className.includes("buyAmountInput")&&(t=>{
const e=t?.closest("div[class^=buyMenu]")?.querySelector("span[class^=amount]"),n=e?.innerText?.match(/\d+/)?.[0]??"1"
;(0,o.u)(t,Math.min((0,o.m)(n),1e4).toString())
})(e),e.className.includes("input-money")&&(async t=>{if(!t)return
;const e=t.closest("li")?"li":"div[class^=row]",n=t?.closest(e)?.querySelector("img")?.src.match(/\d+/)?.[0]
;if(!n)return;const i={section:"market",select:"bazaar",objID:n
},r=await(0,o.p)(i);if(!r?.status)return
;const{bazaar:s}=r,a=(0,o.m)(s[1]?.cost??"")-1;(0,o.h)(t,a.toString())
})(e),"clear-all"==e.className&&(t=>{
const e=t?.closest("li")?.querySelector("div.name-wrap"),n=e?.innerText?.match(/x(\d+)/)?.[1]??"1"
;t.className.includes("removeAmount")?(0,o.u)(t,n):(0,o.h)(t,n)
})(e),e.className.includes("removeAmount")&&(t=>{
const e=t?.closest("div[class^=row]")?.querySelector("div[class^=desc]"),n=e?.innerText?.match(/x(\d+)/)?.[1]??"1"
;(0,o.u)(t,n)})(e))}))}},291:(t,e,n)=>{Object.defineProperty(e,"__esModule",{
value:!0}),e.v=void 0;const o=n(6185),i={amarket:()=>{new MutationObserver((t=>{
t.forEach((t=>{Array.from(t.addedNodes).forEach((t=>{
if("LI"!==t?.tagName||!t?.firstElementChild?.classList?.contains("item-cont-wrap"))return
;const e=Array.from(t.querySelectorAll(".bonus-attachment-icons"))
;if(0===e.length)return;let n="";e.forEach((t=>{
n+=s(t?.title),1!==e.length&&(n+="<br />")
})),t.querySelector("p.t-gray-6").innerHTML=n}))}))
})).observe(document.documentElement,{childList:!0,subtree:!0})},bazaar:()=>{
new MutationObserver((t=>{t.forEach((t=>{Array.from(t.addedNodes).forEach((t=>{
if(!/(itemsContainner|row)/.test(t.className)||t.querySelector(".nst-edit"))return
;const e=Array.from(t.querySelectorAll('[class*="iconBonuses"] > div > i'))
;0!==e.length&&e.forEach((t=>{
const e="radiation"===t.className.split("-")[3]?"radiation":t.className.split("-")[2],n="full"===e?"EOD":"negative"===e?"Delta":"sentinel"===e?"defense":"vanguard"===e?"dex":e,i=t?.parentElement?.parentElement
;i?.setAttribute("style","float:left;right:0px;top:3px;padding-left:5px;display:inline-block;white-space:nowrap;"),
i.classList.add("nst-edit"),t?.parentElement?.appendChild((0,o.k)({innerText:n
})),t?.parentElement?.appendChild((0,o._)("br",{}))}))}))}))
})).observe(document.documentElement,{childList:!0,subtree:!0})},
displaycase:t=>{
const e=Array.from(t.querySelectorAll(".bonus-attachment-icons"))
;0!==e.length&&e.forEach((t=>{const e=s(t?.title)
;t.setAttribute("style","float:left;white-space: nowrap;right: 0px;top:-40px"),
t.appendChild(Object.assign(document.createElement("span"),{innerText:e
})),t?.insertAdjacentElement("afterend",document.createElement("br"))}))},
item:()=>{new MutationObserver((t=>{t.forEach((t=>{
const e=t.target,n=Array.from(t.addedNodes)
;n?.length>0&&"UL"===e?.nodeName&&"category-wrap"==e?.parentElement?.id&&null==t?.previousSibling&&n.forEach((t=>{
if(!t.querySelector||!t.querySelector(".bonuses.left"))return
;const e=t?.querySelector(".name-wrap")
;if(/nst-rw-show/.test(e.className))return
;const n=t.querySelector("ul.bonuses-wrap").lastElementChild,i=Array.from(n.children),r=(0,
o.L)({classList:"nst-rw-show-wrap"});i.forEach((t=>{const e=t?.title
;if(""===e)return;const n=(0,o.L)({classList:"nst-rw-single",
innerText:s(t?.title)});r.appendChild(n)
})),e.classList.add("nst-rw-show"),e.appendChild(r)}))}))
})).observe(document.documentElement,{childList:!0,subtree:!0})}},r={
Impregnable:"melee",Impenetrable:"guns",Insurmountable:"dune",
Invulnerable:"delta",Imperviable:"life",Immutable:"def",Irrepressible:"dex",
Impassable:"EOD"},s=t=>{
const e=t?.match(/(?<=>)[\w\s-]+(?=<)/)?.[0]??"FAIL",n=t?.match(/\d+(?=(%| turns))/)?.[0]??"XX",o=r[e]??e
;return n+(/disarm|disable/.test(e.toLowerCase())?"T":"%")+" "+o}
;e.v=t=>i[(0,o.O)()](t)},488:(t,e,n)=>{Object.defineProperty(e,"__esModule",{
value:!0}),e.M=void 0;const o=n(6185);e.M=()=>{
console.log("nst - init default start")
;const t=(0,o.j)()??{},e={},n=i.script,r=t?.script??n
;Object.keys(r).forEach((t=>{n[t]&&(n[t].enabled=r[t].enabled)
})),t.script=n,Object.keys(i).forEach((n=>e[n]=t[n]??i[n])),
(0,o.T)(e),console.log("nst - init default end")};const i={script:{drugnoti:{
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
onpage:"company"},displaycaseitemid:{name:"display case items id",enabled:!1,
description:"shows item id on display case's manage page",onpage:"displaycase"},
quickfaction:{name:"faction quick item",enabled:!1,
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
description:"quickly use items",onpage:"items"},rwbonus:{
name:"rw bonus display",enabled:!1,
description:"display rw weapon bonus over the item instead of tooltip",
onpage:"items"},removeuglyimage:{name:"hide new images",enabled:!1,
description:"hide new images from item page",onpage:"items"},equipnoconfirm:{
name:"equip without confirm",enabled:!1,
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
onpage:"profile"},hidemedals:{name:"hide medals",enabled:!1,
description:"hide medal tab on profile",onpage:"profile"},statspies:{
name:"stat spies",enabled:!1,description:"add items and stats on profile page",
onpage:"profile"},tradevalue:{name:"trade value",enabled:!1,
description:"add market value of items in trade",onpage:"trade"},quickghost:{
name:"quick deposit ghost",enabled:!1,
description:"quickly deposit all money in a ghost trade",onpage:"trade"},
warvalue:{name:"war reward value",enabled:!1,
description:"add caches value to war report",onpage:"war"}},assaperk:!1,hold:!1,
jailscore:1e4,lastnoti:1,mugperc:.075,mugthreshold:4e6,outcome:"leave",
quickbail:!1,quickbust:!1,quickfaction:{},quickitems:{},reloadone:!1,
reloadtwo:!1,spgymone:"elites",spgymtwo:"frontline",temp:!1,weapon:{primary:0,
secondary:1,melee:2}}},540:t=>{t.exports=function(t){
var e=document.createElement("style")
;return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},714:(t,e,n)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.D=void 0;const o=n(6185)
;e.D=t=>{
0!==(0,o.I)().match(/manage/g).length&&t&&Array.from(t.children).forEach((t=>{
const e=t.getAttribute("itemid"),n=t.querySelector(".name .desc")
;n&&e&&n.insertAdjacentElement("afterBegin",(0,o.k)({classList:"text-nstmain",
innerText:"ID: "+e}))}))}},763:(t,e,n)=>{Object.defineProperty(e,"__esModule",{
value:!0}),e.S=void 0;const o=n(6185),i={a_good_day_to_get_hard:{
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
task:"Injure (P)'s both arms."},wrath_of_duke:{task:"Defeat 4 (P)."}};e.S=t=>{
Array.from(t.querySelectorAll(".giver-cont-wrap > div[id^=mission]:not(.nst-edit)")).forEach((t=>{
if(!t?.querySelector)return
;const e=t?.querySelector(".title-black")?.childNodes[0].textContent.replace(/\n/g,"").trim(),n=e.toLowerCase().replaceAll(/[ -]/g,"_").replaceAll(/[:!,]/g,""),r=n in i?i?.[n]?.task:"mission not found",s=(0,
o.k)({innerHTML:"<br/><br/><b>todo:</b> "+r,classList:"text-nstmain"})
;t.querySelector(".max-height-fix")?.appendChild(s),t.classList.add("nst-edit")
}))}},1108:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0
}),e.P=void 0,e.P=t=>{
Array.from(t?.querySelectorAll("ul[class*='slotItems']")).forEach((t=>{
t.addEventListener("click",(()=>{
const e=t?.parentNode?.parentNode?.childNodes[0]?.childNodes[1]?.childNodes[1]
;e.click()}))}))}},1113:t=>{t.exports=function(t,e){
if(e.styleSheet)e.styleSheet.cssText=t;else{
for(;e.firstChild;)e.removeChild(e.firstChild)
;e.appendChild(document.createTextNode(t))}}},1379:(t,e)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.q=void 0,e.q=()=>{
document.documentElement.classList.add("nst-left-align")}},1549:(t,e,n)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.$=void 0
;const o=n(6185),i=(0,
o.C)("user2ID")??"",r=(0,o.j)(),{reloadone:s,reloadtwo:a,weapon:c}=r
;let l={},d={},u=!1,m=0;const p=()=>{
const t=d?.defenderUser?.life,e=l?.currentAttackStatus,n=d?.attackStatus,{hold:i}=(0,
o.j)()
;return i&&t<2?"hold":"end"===n&&"endResult"in d?"end":t<2&&"finishOptions"in d?"finish":"error"in d?"check":u||"notStarted"!==n?u||"process"===e?"hit":"check":"start"
},f=()=>{
const t=d?.attackerAmmoStatus,e=d?.currentClips?.[0],n=d?.attackerItems[1]?.item[0]?.currentBonuses,i=d?.attackerItems[2]?.item[0]?.currentBonuses,r=d?.currentMove,l={
primary:()=>{
const n=null!=d?.attackerItems[1]?.item[0]?.ID,o="0"!==e?.attackerPrimaryRoundsLeft,i=!t?.[1]?.includes("No ammo")
;return n&&i&&(o||s)},secondary:()=>{
const n=null!=d?.attackerItems?.[2]?.item[0]?.ID,o="0"!==e?.attackerSecondaryRoundsLeft,i=!t?.[2]?.includes("No ammo")
;return n&&i&&(o||a)},melee:()=>null!=d?.attackerItems?.[3]?.item[0]?.ID}
;if(0===r&&(0,o.j)()?.assaperk){if("Assassinate"===n?.[72]?.title)return 1
;if("Assassinate"===i?.[72]?.title)return 2}if((()=>{
if(void 0===d?.attackerItems?.[5]?.item[0]?.ID)return!1;const{temp:t}=(0,o.j)()
;if(!t)return!1
;const e=d?.attackerItems[5]?.item[0]?.ID,n=d?.defenderItems[6]?.item[0]?.ID
;return!("256"===e&&["670","1355","348"].includes(n)||"392"===e&&["348","642","644","655","670","675","680","1355"].includes(n))
})())return 5;do{const t=Object.keys(c).filter((t=>c[t]==m))[0]
;if(l[t]())return h[t];m++}while(m<3);return 999},h={primary:1,secondary:2,
melee:3,temp:5},b={check:()=>d.error??"checking",start:()=>"start fight",
finish:()=>"executing",end:()=>d?.endResult?.info??d?.endResult?.groupEvent,
hit:()=>{const t=+d?.defenderUser?.life,e=+d?.defenderUser?.maxlife
;return`${t} / ${e} (${Math.floor(t/e*100)}%)`}},g={check:()=>({user2ID:i}),
start:()=>(u=!0,{step:"startFight",user2ID:i}),finish:()=>{
const{outcome:t}=(0,o.j)();return{step:"finish",fightResult:t}},hold:()=>({}),
end:()=>({}),hit:()=>{const t="user1EquipedItemID";return{step:"attack",
user2ID:i,[t]:f()}}},v=async t=>{const e=t.target;e.disabled=!0
;const n=p(),i=(g[n]??g.error)();if((0,o.N)(i))return
;const r="https://www.torn.com/loader.php?sid=attackData&mode=json&rfcv="+(0,
o.R)(),s={method:"POST",headers:{"x-requested-with":"XMLHttpRequest"},
body:new URLSearchParams(i)};console.log(n,i),await fetch(r,{...s
}).then((t=>t.json())).then((t=>((t,e)=>{e.disabled=!1,console.log(t),l=t,d=t.DB
;const n=p();e.innerText=b[n]()})(t,e))).catch((t=>console.error(t)))}
;e.$=t=>(t=>{const e=(0,o.U)({title:"fighterino",element:t})
;e.classList.remove("nst-box-row"),e.classList.add("nst-box-column")
;const n=(()=>{const t=(0,o.L)({classList:"nst-box-column"}),e=(0,o.L)({
classList:"nst-outcome",onchange:t=>{const e=t.target.id;(0,o.T)({outcome:e})}
}),n=(0,
o.B)("leave","outcome"),i=(0,o.B)("mug","outcome"),r=(0,o.B)("hospitalize","outcome")
;e.appendChild(n),e.appendChild(i),e.appendChild(r),t.appendChild(e);const s=(0,
o.L)({classList:"nst-outcome"}),a={id:"nst-hold",checked:(0,o.j)("hold")
},c=(0,o.F)(a,"hold","",(t=>{const e=t.target.checked;(0,o.T)({hold:e})})),l={
id:"nst-temp",checked:(0,o.j)("temp")},d=(0,o.F)(l,"use temp first","",(t=>{
const e=t.target.checked;(0,o.T)({temp:e})})),u={id:"nst-assa",
checked:(0,o.j)("assaperk")},m=(0,o.F)(u,"assassinate","",(t=>{
const e=t.target.checked;(0,o.T)({assaperk:e})}))
;return s.appendChild(c),s.appendChild(d),s.appendChild(m),t.appendChild(s),t
})(),i=(0,o.L)({classList:"nst-box-column"}),r=(0,o.H)({id:"nst-fighteroo",
classList:"torn-btn m-2",innerText:"fighterino",onclick:v})
;i.appendChild(r),e.appendChild(n),e.appendChild(i)})(t)},1601:t=>{
t.exports=function(t){return t[1]}},1717:(t,e,n)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.G=void 0
;const o=n(6185),i=n(9607);let r;const s=t=>{
t?.querySelector("#nst-lastaction")||t.appendChild((0,o.L)({id:"nst-lastaction",
innerText:"last action: "+r}))};e.G=t=>{
r=(0,o.W)(+t.user.lastAction.seconds).trim(),
(0,i.X)(s,'#profile-mini-root [class*="profile-mini-_userProfileWrapper"]')}},
1896:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.K=void 0
;const o=n(6185);let i={};const r=()=>{
const t=document.querySelector("div[class^='joinWrap'] div[class^='rowsWrap']")
;if(!t)return;const e=Array.from(t.children);0===e.length?i={}:e.forEach((t=>{
const e=t?.getAttribute("id");i[e]||(i[e]=(0,o.J)())
;const n=(r=i[e],(0,o.W)(900-((0,o.J)()-r)));var r
;const s=t.querySelector("div[class^='betBlock']"),a=s.getAttribute("aria-label").split(":")[1].trim(),c="$"+(0,
o.Y)((0,o.m)(a));s.innerText=c+"\n"+n}))};e.K=t=>{if("lobby"!==t?.step)return
;const e=t?.data;Object.values(e).forEach((t=>{
void 0!==t.ID&&(i[t.ID]=t.timeCreated)})),setInterval(r,1e3)}},1913:(t,e,n)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.V=void 0;const o=n(6185)
;e.V=async()=>{const t={section:"user",select:"bazaar",
objID:(0,o.C)("userId")??""},e=await(0,o.p)(t);if(!e?.status)return
;const{bazaar:n}=e,i=n.reduce(((t,e)=>t+ +e?.price*+e.quantity),0),r=n.reduce(((t,e)=>t+ +e?.market_price*+e.quantity),0),s=(0,
o.L)({classList:"nst-trade-value",
innerText:`Total: $${(0,o.Y)(i)} - MV: $${(0,o.Y)(r)}`})
;document?.querySelector("#bazaarRoot .wrapper")?.insertAdjacentElement("afterend",s)
}},2268:function(t,e,n){var o=this&&this.__importDefault||function(t){
return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{
value:!0}),e.Z=void 0;const i=o(n(246)),r=n(488),s=n(6185),a=async()=>{
const t=document.getElementById("nst-ts-message"),e=document.getElementById("nst-tsapikey")
;if(!t||!e)return;const n=e.value
;if(t.innerText="",19!==n?.length)return t.classList.remove("text-nstgreen"),
void(t.innerText="Invalid Key Length");const o=await(0,s.tt)({api:n,selection:""
})
;if(!o?.status)return t.classList.remove("text-nstgreen"),void(t.innerText="Invalid Key")
;(0,s.T)({tsapikey:n}),t.classList.add("text-nstgreen"),t.innerText="Key Saved"
},c=async()=>{
const t=document.getElementById("nst-message"),e=document.getElementById("nst-apikey")
;if(!t||!e)return;const n=e.value
;if(t.innerText="",16!==n?.length)return t.classList.remove("text-nstgreen"),
void(t.innerText="Invalid Key Length");const o={section:"user",select:"profile",
api:n},i=await(0,s.p)(o)
;if(!i?.status)return t.classList.remove("text-nstgreen"),
void(t.innerText=i?.error);const{et:r,nt:a}=(0,s.ot)(i)
;return void 0===r||void 0===a?(t.classList.remove("text-nstgreen"),
void(t.innerText="API broken, wait for ched to fix")):((0,s.T)({apikey:n
}),(0,s.it)(i)?((0,s.T)({userdata:i
}),t.classList.add("text-nstgreen"),t.innerText="Login Successful",
void d()):((0,
s.rt)("nstdata"),t.classList.remove("text-nstgreen"),void(t.innerText="You are not allowed, contact seintz[2460991]")))
},l=async()=>{
confirm("Are you sure you want to reset?")&&((0,s.rt)("nstdata"),window.location.reload())
},d=()=>{if(!(0,s.it)())return;(0,r.M)()
;const t=document.querySelector("#nst-ul-main")
;w(t,"tsapi",h),w(t,"attack",f),w(t,"export",u),w(t,"import",m)
;const e=(0,s.j)("script"),n=Object.keys(e).sort().reduce(((t,n)=>(t[n]=e?.[n],
t)),{})
;Object.values(n).map((t=>t.onpage)).filter((t=>void 0!==t)).filter(((t,e,n)=>n.indexOf(t)==e)).sort().forEach((e=>w(t,e,p)))
},u=t=>{const e=document.getElementById(t);if(!e)return;e.innerHTML=""
;const n=(0,s.L)({id:"nst-export-wrap",classList:"nst-api-wrap"}),o=(0,s.H)({
id:"nst-export-btn",innerText:"export",classList:"torn-btn m-2",onclick:()=>{
const t=JSON.stringify((0,s.j)())
;i.setAttribute("href",window.URL.createObjectURL(new Blob([t],{
type:"application/json"
}))+"#/nst-export"),i.setAttribute("download","nst-export.json"),
i.classList.remove("hidden")}}),i=(0,s.st)({id:"nst-export-download",
innerText:"Download"});i.classList.add("hidden","text-sm","text-nstmain","m-2"),
n.appendChild(o),n.appendChild(i),e.appendChild(n)},m=t=>{
const e=document.getElementById(t);if(!e)return;e.innerHTML=""
;const n=(0,s.k)({}),o=(0,s.L)({id:"nst-import-wrap",classList:"nst-api-wrap"
}),i=(0,s.H)({id:"nst-import-btn",innerText:"import",classList:"torn-btn m-2",
onclick:()=>a.click()}),a=(0,s.ct)({id:"nst-import-input",type:"file",
accept:"json",onchange:t=>{const e=new FileReader
;e.addEventListener("load",(t=>{const e=(0,s.lt)(""+t.target?.result)
;(0,s.T)(e),
(0,r.M)(),n.classList.remove("hidden"),n.classList.add("text-nstgreen"),
n.innerHTML="<b>Import Successful</b>"})),e.addEventListener("error",(t=>{
n.classList.remove("hidden"),
n.classList.add("text-nstred"),n.innerHTML="<b>Import Unsuccessful</b>",
console.error(t)})),e.readAsText(t.target.files[0])}})
;a.classList.add("hidden"),
n.classList.add("hidden"),o.appendChild(i),o.appendChild(a),
o.appendChild(n),e.appendChild(o)},p=t=>{const e=document.getElementById(t)
;if(!e)return;e.innerHTML=""
;const n=t.replace(/nst-/g,""),o=(0,s.j)("script"),i=Object.keys(o).sort().reduce(((t,e)=>(o?.[e]?.onpage===n&&(t[e]=o?.[e]),
t)),{}),r=(0,s.L)({classList:"nst-script-block"})
;Object.entries(i).forEach((([t,e])=>{const n=e?.name,o=(0,s.dt)(t),i={
id:"nst-"+o,value:o,checked:e?.enabled??!1
},a=(0,s.F)(i,n,e.description.toLowerCase(),(t=>{
const e=t.target,n=(0,s.j)("script");n[e.value].enabled=e.checked,(0,s.T)({
script:n})}));r.appendChild(a)})),e.appendChild(r)},f=t=>{
const e=document.getElementById(t);e&&(e.innerHTML="",e.appendChild((()=>{
const t=(0,s.L)({classList:"nst-block"}),e=(0,s._)("h4",{
classList:"nst-block-title",innerText:"mug threshold"});return t.appendChild(e),
(0,s.ut)({elem:t,title:"mug threshold"}),t})()),e.appendChild((()=>{
const t=(0,s.L)({classList:"nst-block"}),e=(0,s._)("h4",{
classList:"nst-block-title",innerText:"default outcome"}),n=(0,s.L)({
id:"outcome",classList:"nst-outcome",onchange:t=>(0,s.T)({outcome:t.target.id})
}),o=(0,
s.B)("leave","outcome"),i=(0,s.B)("mug","outcome"),r=(0,s.B)("hospitalize","outcome"),a={
id:"nst-hold",checked:(0,s.j)("hold")},c=(0,s.F)(a,"hold","",(t=>(0,s.T)({
hold:t.target.checked})))
;return n.appendChild(o),n.appendChild(i),n.appendChild(r),
t.appendChild(e),t.appendChild(n),t.appendChild(c),t})()),e.appendChild((()=>{
const t=(0,s.j)("weapon"),e=(0,s.L)({classList:"nst-block"}),n=(0,s._)("h4",{
classList:"nst-block-title",innerText:"weapon order"}),o=(0,s.L)({id:"weapon"})
;Object.keys(t).forEach((t=>{const e=(0,s.L)({id:t,classList:"list-group-item",
innerText:t});e.setAttribute("data-id",t),o.appendChild(e)})),new i.default(o,{
animation:150,store:{get:()=>{const t=(0,s.j)("weapon"),e=["","","",""]
;return Object.entries(t).forEach((t=>e[t[1]]=t[0])),e},set:t=>{
const e=t.toArray(),n=(0,s.j)("weapon")
;e.forEach((t=>n[t]=e.indexOf(t))),(0,s.T)({weapon:n})}}});const r={
id:"nst-temp",checked:(0,s.j)("temp")
},a=(0,s.F)(r,"use temp first","",(t=>(0,s.T)({temp:t.target.checked}))),c={
id:"nst-assa",checked:(0,s.j)("assaperk")
},l=(0,s.F)(c,"assassinate","",(t=>(0,s.T)({assaperk:t.target.checked})))
;return e.appendChild(n),e.appendChild(o),e.appendChild(a),e.appendChild(l),e
})()),e.appendChild((()=>{const t=(0,s.L)({classList:"nst-block"
}),e=(0,s._)("h4",{classList:"nst-block-title",innerText:"weapon reload"}),n=(0,
s.L)({id:"reload",classList:"nst-outcome"}),o={id:"nst-reloadone",
checked:(0,s.j)("reloadone")},i=(0,s.F)(o,"primary","",(t=>(0,s.T)({
reloadone:t.target.checked}))),r={id:"nst-reloadtwo",
checked:(0,s.j)("reloadtwo")},a=(0,s.F)(r,"secondary","",(t=>(0,s.T)({
reloadtwo:t.target.checked})))
;return n.appendChild(i),n.appendChild(a),t.appendChild(e),t.appendChild(n),t
})()))},h=t=>{const e=document.getElementById(t);if(!e)return;e.innerHTML=""
;const n=(0,s.st)({href:"https://www.tornstats.com/settings/general",
target:"_blank",innerText:"here",classList:"text-nstmain font-bold"
}),o=(0,s.L)({classList:"text-base"})
;o.innerHTML="Create your TS key ",o.appendChild(n);const i=(0,s.L)({
classList:"nst-api-wrap"}),r=(0,s.L)({classList:"nst-block"
}).appendChild((0,s.k)({id:"nst-ts-message",classList:"nst-message"
})),c="tsapikey",l=(0,s._)("input",{id:"nst-"+c,type:"password",
classList:"nst-input m-2",maxLength:19,required:!0,value:(0,s.j)(c)??""
}),d=(0,s.H)({id:"nst-tslogin",classList:"torn-btn m-2",innerText:"save",
onclick:a});i.appendChild(o),i.appendChild(r),i.appendChild(l),i.appendChild(d),
e.appendChild(i)},b=t=>{const e=document.getElementById(t);if(!e)return
;e.innerHTML="";const n=(0,s.st)({
href:"https://www.torn.com/preferences.php#tab=api",target:"_blank",
innerText:"limited",classList:"text-nstyellow font-bold"}),o=(0,s.st)({
href:"https://www.torn.com/preferences.php#tab=api?&step=addNewKey&title=nst&type=3",
target:"_blank",innerText:"create",classList:"text-nstmain font-bold"
}),i=(0,s.L)({classList:"text-base"})
;i.innerHTML="Enter a ",i.appendChild(n),i.innerHTML+=" apikey or ",
i.appendChild(o),i.innerHTML+=" one ad-hoc";const r=(0,s.L)({
classList:"nst-api-wrap"}),a=(0,s.L)({classList:"nst-block"
}).appendChild((0,s.k)({id:"nst-message",classList:"nst-message"
})),d="apikey",u=(0,s._)("input",{id:"nst-"+d,type:"password",
classList:"nst-input m-2",maxLength:16,required:!0,value:(0,s.j)(d)??""
}),m=(0,s.H)({id:"nst-login",classList:"torn-btn m-2",innerText:"save",onclick:c
}),p=(0,s.H)({id:"nst-reset",classList:"torn-btn m-2",innerText:"reset",
onclick:l});r.appendChild(i),r.appendChild(a),r.appendChild(u),r.appendChild(m),
r.appendChild(p),e.appendChild(r)},g=t=>{const e=document.getElementById(t)
;if(!e)return;e.innerHTML="";const n={company:["employees"].sort(),
market:["bazaar"].sort(),torn:["items"].sort(),
user:["bars","basic","battlestats","bazaar","cooldowns","education","icons","money","networth","newevents","newmessages","notifications","perks","personalstats","profile","refills","timestamp","travel"].sort()
},o=(0,s.L)({classList:"nst-tos-wrap"}),i=(0,s._)("h4",{
classList:"nst-tos-title",innerText:"Terms of Service"})
;o.appendChild(i),Object.entries({"Data Storage":"Only locally",
"Data Sharing":"Nobody",
"Purpose of Use":"Optimization / Maintenance but only end user has access",
"Key Storage & Sharing":"Stored locally but not shared",
"Key Access Level":"Limited or Custom (see below)"
}).forEach((([t,e])=>o.appendChild((0,s.L)({classList:"nst-tos-wrap",
innerHTML:`<b>${t}</b>: ${e}`}))));const r=(0,s._)("h4",{
classList:"nst-tos-title",innerText:"Api usage"})
;o.appendChild(r),Object.entries(n).forEach((([t,e])=>o.appendChild((0,s.L)({
classList:"nst-tos-wrap",innerHTML:`<b>${t}</b>: ${1!==e.length?e.join(", "):e}`
})))),e.appendChild(o)},v=t=>{
const e=t.target,n=e.id,o=e?.closest("#nst-menu-body"),i=e,r=o?.querySelector(".nst-menu-sel"),s=o?.querySelector(".nst-menu-active"),a=o?.querySelector("#"+n.replace(/-li/g,""))
;r?.classList.remove("nst-menu-sel"),
s?.classList.remove("nst-menu-active"),s?.classList.toggle("hidden"),
i?.classList.add("nst-menu-sel"),
a?.classList.add("nst-menu-active"),a?.classList.toggle("hidden")
},w=(t,e,n=()=>{})=>{
const o=t?.parentElement,i="nst-"+e.toLowerCase(),r=i+"-li",a=(0,s.ft)({id:r,
classList:"nst-menu-page",innerText:e,onclick:v})
;o.querySelector("#"+i)||o.querySelector("#"+r)||(t.appendChild(a),
o.appendChild((0,s.L)({id:i,classList:"nst-menu-item hidden"})),n(i))},y=()=>{
const t=document?.querySelector(".content-wrapper.spring"),e=t?.style?.display
;t.style.display="none"===e?"":"none",
document?.getElementById("nst-menu")?.remove(),"none"===t.style.display&&(t=>{
const e=(0,s.L)({id:"nst-menu",classList:"nst-menu"}),n=(0,s.L)({
id:"nst-menu-wrap",classList:"nst-menu-wrap "}),o=(0,s.L)({id:"nst-menu-title",
classList:"nst-menu-title"}),i=(0,s.L)({id:"nst-menu-body",
classList:"nst-menu-body"});o.appendChild((0,s.k)({classList:"nst-logo"
})).appendChild((0,s._)("b",{innerText:"NST"}))
;const r=i.appendChild((0,s._)("ul",{id:"nst-ul-main",classList:"nst-ul-main"}))
;n.appendChild(o),
n.appendChild(i),e.appendChild(n),t.insertAdjacentElement("beforebegin",e),
w(r,"tos",g),w(r,"api",b)
;const a=i.querySelector("#nst-api-li"),c=i.querySelector("#nst-api")
;a?.classList.add("nst-menu-sel"),
c?.classList.add("nst-menu-active"),c?.classList.toggle("hidden"),d()})(t)}
;e.Z=t=>{
const e=document.getElementById("nst-icon"),n=t.querySelector('ul[class^="status-icon"]')
;if(e||!n)return;const o=(0,s.ft)({id:"nst-icon",classList:"nst-icon"})
;n.insertAdjacentElement("afterbegin",o).addEventListener("click",y)}},
2470:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.ht=void 0
;const o=n(6185);e.ht=t=>{if(!("currentFightStatistics"in t))return
;const e=Array.from(document.querySelectorAll('ul[class^="participants"] div[class^= "playerWrap"] > span[class^= "playername"]'))
;0!==e.length&&e.forEach((e=>{if(e.querySelector(".nst-intercept"))return
;const n=e.innerText,i=Object.values(t?.currentFightStatistics).filter((t=>t?.playername===n))[0],r=i?.userID
;e.innerHTML="",e.appendChild((0,o.st)({
classList:"nst-intercept text-nsttorntext",
href:"loader.php?sid=attack&user2ID="+r,target:"_blank",innerText:""+n}))}))}},
2585:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.bt=void 0
;const o=n(6185),i=async()=>{
const t=(0,o.m)((0,o.I)().match(/ID=(\d+)/)[1]),e=await(async()=>{
const t=`https://www.torn.com/trade.php?step=getFullMoney&ID=${(0,
o.m)((0,o.I)().match(/ID=(\d+)/)[1])}&rfcv=${(0,o.R)()}`;return await fetch(t,{
method:"GET",headers:{"x-requested-with":"XMLHttpRequest"}
}).then((t=>t.json())).then((t=>(0,o.m)(t))).catch((t=>console.error(t)))||0
})(),n="https://www.torn.com/trade.php?rfcv="+(0,o.R)(),i={method:"POST",
headers:{"x-requested-with":"XMLHttpRequest"},body:new URLSearchParams({
step:"view",ID:t,ajax:"true",amount:e,sub_step:"addmoney2"})};await fetch(n,{
...i}).catch((t=>console.error(t)))};e.bt=async t=>(t=>{const e=(0,o.L)({
classList:"nst-ghost-wrap"}),n=(0,o.H)({innerText:"deposit",
classList:"torn-btn",onclick:i})
;e.appendChild(n),t.insertAdjacentElement("beforebegin",e)})(t)},
2718:function(t,e,n){var o=this&&this.__importDefault||function(t){
return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{
value:!0}),e.gt=void 0;const i=o(n(246)),r=n(6185),s=t=>{t.stopPropagation()
;const e=t.target.closest("#nst-quick-use").parentElement.getAttribute("data-itemID")
;if(!e)return;const n=(0,r.j)(r.qfs);Object.keys(n).includes(e)&&(async t=>{
const e=document.getElementById("nst-item-resp");if(e){
for(;e.lastChild;)e.removeChild(e.lastChild);(async(t,e)=>{const{id:n}=t,o={
step:"useItem",itemID:n,fac:"1"};if(!o)return
;const i="https://www.torn.com/item.php?rfcv="+(0,r.R)(),s={method:"POST",
headers:{"x-requested-with":"XMLHttpRequest"},body:new URLSearchParams(o)
},a=await(await fetch(i,{...s})).json(),c=a.links??{},l=a.text??{},d=(0,r.L)({})
;d.appendChild((0,r.vt)({innerHTML:l}));const u=(0,r.vt)({})
;Object.values(c).forEach((t=>{const e=(0,r.st)({
classList:"t-blue h m-left10 "+t.class,href:t.url,innerText:t.title})
;t.attr.split(/\s+/).forEach((t=>{
const n=t.split("=")[0].toString(),o=t.split("=")[1].toString()
;e.setAttribute(n,o)})),u.appendChild(e)
})),d.appendChild(u),e.appendChild(d),e.classList.remove("nstGreen"),
e.classList.remove("nstBold");const m=e.querySelector(".counter-wrap")
;if(!m)return
;const p=1e3*+(m.getAttribute("data-time")||0),f=Math.floor(p/864e5),h=Math.floor(p%864e5/36e5)+24*f,b=Math.floor(p%36e5/6e4),g=Math.floor(p%6e4/1e3)
;m.innerText=`${h}:${b}:${g}`})(t,e),e.classList.remove("hidden")}})(n[e])
},a=t=>{t.stopPropagation(),t.preventDefault()
;const e=t.target.closest("#nst-quick-use").parentElement.getAttribute("data-itemID")
;if(!e)return;const n=(0,r.j)(r.qfs)
;Object.keys(n).includes(e)&&(delete n[e],(0,r.T)({[r.qfs]:n}),c())},c=()=>{
const t=document.getElementById("nst-"+r.qfs);if(t){
for(;t.lastChild;)t.removeChild(t.lastChild)
;Object.values((0,r.j)(r.qfs)).forEach((e=>((t,e)=>{
const{id:n,name:o,quantity:i}=t,c=`/images/items/${n}/medium.png`,l=(0,r.L)({
classList:"nst-box-btn-div"})
;l.setAttribute("data-itemID",n),l.setAttribute("data-qty",i);const d=(0,r.H)({
id:"nst-quick-use",classList:"nst-box-button",onclick:s}),u=(0,r.wt)({src:c,
alt:o,classList:"nst-box-img"}),m=(0,r.k)({id:"nst-quick-name",innerText:o
}),p=(0,r.k)({id:"nst-quick-close",classList:"nst-box-close",innerText:"✕",
onclick:a});d.appendChild(u),d.appendChild(m),d.appendChild(p),l.appendChild(d),
e.appendChild(l)})(e,t))),new i.default(t,{animation:150,
dataIdAttr:"data-itemid",store:{get:()=>{const t=(0,r.j)(r.qfs)
;return Object.entries(t).sort(((t,e)=>t[1].order-e[1].order)).map((t=>t[0]))},
set:t=>{const e=t.toArray(),n=(0,r.j)(r.qfs)
;e.forEach((t=>n[t].order=e.indexOf(t))),(0,r.T)({[r.qfs]:n})}}})}},l=t=>{
t.stopPropagation(),t.preventDefault()
;const{target:e}=t,n=e?.closest(".name"),o=n?.closest("li")?.querySelector("img"),i=(0,
r.m)(o.getAttribute("src")).toString(),s=n?.innerText.replace(/ x\d+$/,"").replace(/[ ]*Blood Bag[ :]*/,"").replace(/[ ]*Bottle of[ :]*/,"").replace(/[ ]*First Aid[ :]*/,"").replace(/[ ]*Lawyer's Business Card[ :]*/,"LBC").replace(/[ ]*Can of[ :]*/,"")
;if(!i)return;const a=(0,r.j)(r.qfs);if(Object.keys(a).includes(i))return
;const l=0===Object.values(a)?.length?0:+Object.values(a).reduce(((t,e)=>t?.order>e?.order?t:e))?.order
;a[i]={id:i,order:l+1,name:s},(0,r.T)({[r.qfs]:a}),c()},d={box:t=>{
const e=(0,r.U)({title:r.qft,element:t});e?.parentElement?.appendChild((0,r.L)({
id:"nst-item-resp",classList:"nst-box-row hidden"})),c()},item:t=>{
Array.from(t.querySelectorAll("div.name")).forEach((t=>t.addEventListener("dblclick",l)))
},nopager:()=>{}};e.gt=t=>{new MutationObserver((t=>{t.forEach((t=>{
const e=Array.from(t.addedNodes);e?.length>0&&e.forEach((t=>{
const e="faction-armoury-tabs"===t?.id,n=RegExp("armoury-(medical|drugs|boosters)","g"),o=t?.parentElement?.id?.match(n)&&"UL"===t.tagName&&t.classList.contains("item-list")
;d[e?"box":o?"item":"nopager"](t)}))}))})).observe(t,{childList:!0,subtree:!0})}
},2957:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.yt=void 0
;const o=n(6185);e.yt=t=>{t=t.parentElement
;const{refills:{energy_refill_used:e,nerve_refill_used:n}}=(0,o.j)("userdata")
;Object.values({energy:{name:"energy",
selector:"[class*='bar'][class*='energy']",link:"https://www.torn.com/gym.php",
refillUsed:e},nerve:{name:"nerve",selector:"[class*='bar'][class*='nerve']",
link:"https://www.torn.com/crimes.php",refillUsed:n}}).forEach((e=>{
const{name:n,selector:o,link:i,refillUsed:r}=e,s=o+' p[class^="bar-name"]',a=t?.querySelector(s),c=a?.parentElement?.parentElement
;c?.removeAttribute("href"),
c?.addEventListener("click",(()=>window.open(i,"_blank")))
;const l="energy"===n?"text-nstgreen":"nerve"===n?"text-nstred":""
;r||a?.classList.add(l)}))}},3243:(t,e,n)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.xt=void 0
;const o=n(6185),i=t=>{
const e=t?.querySelector(".total-price"),n=t?.querySelector(".action")
;(0,o.m)(e?.innerText)*o.minMugPerc>=o.mugThres&&n.classList.add("text-black","bg-nstmain")
};e.xt=t=>{new MutationObserver((t=>{t.forEach((t=>{
Array.from(t.addedNodes).forEach((t=>{
const e="LI"===t?.tagName,n=t?.firstElementChild;e&&n&&i(n)}))}))})).observe(t,{
childList:!0,subtree:!0
}),Array.from(document.querySelectorAll(".users-point-sell > li")).forEach((t=>i(t?.firstElementChild)))
}},3376:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0
}),e.kt=void 0,e.kt=(t,e)=>!(!["258d3f","1f6fae","21d476","2ac242","259d63","1402a5","279b7d","4cffd","21d210","220e2c","1c2b3b","225c05","30a6cc"].includes(e)&&!["253d","2de3","2d3d","235f","5416","2396"].includes(t))
},3403:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0
}),e._t=void 0,e._t=t=>{t.classList.add("nst-hide-medal")}},3424:(t,e,n)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.Lt=void 0;const o=n(6185)
;e.Lt=()=>{document.addEventListener("dblclick",(t=>{const e=t?.target
;if("INPUT"!==e?.tagName)return
;const n=e?.parentElement?.parentElement?.parentElement?.parentElement,i=(0,
o.m)(document?.querySelector(".travel-agency-market .availableItemsAmount")?.getAttribute("value")),r=(0,
o.m)(document.getElementById("user-money").innerText),s=(0,
o.m)(n?.querySelector(".cost .c-price").innerText),a=(0,
o.m)(n?.querySelector(".stock .stck-amount").innerText),c=r/s>=i?i:Math.trunc(r/s),l=Math.min(c,a).toString()
;(0,o.h)(e,l)}))}},3840:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0
}),e.Ot=void 0;const o=n(6185),i=(t,e)=>{
const{item:n,selector:i,reg:r}=e,s=(0,o.j)("quick"+n)??!1,a=t?.parentElement,c=a.querySelector("a."+i),l=c?.getAttribute("href")
;if(!c||!l)return
;const d=RegExp(r+"$","g"),u=RegExp(r+"1$","g"),m=s?l.replace(d,r+"1"):l.replace(u,r)
;c.setAttribute("href",m)},r=t=>{
const e=+((0,o.j)("jailscore")??"0"),n=t?.parentElement,r=t.querySelector("span.time").innerText.split(" ").reduce(((t,e)=>t+(/h/.test(e)?60*+e.replace(/h/g,""):/m/.test(e)?+e.replace(/m/g,""):0)),0),s=(0,
o.m)(t.querySelector("span.level").innerText.match(/\d+/g)?.join())*r
;t.setAttribute("title","score: "+(0,o.Y)(s));const a=s>e&&0!==e
;n.style.display=a?"none":"",i(t,{item:"bail",selector:"bye",reg:"buy"}),i(t,{
item:"bust",selector:"bust",reg:"breakout"})},s=t=>{const e=document,n=t.target
;(0,o.T)({[n.value]:n.checked});const i=e.querySelectorAll("span.info-wrap")
;Array.from(i).forEach((t=>r(t)))};e.Ot=t=>{(t=>{const e=(0,o.U)({
title:"Quick Jail",element:t?.parentElement}),n=(0,o.L)({
classList:"nst-box-column"}),i=(0,o.L)({classList:"nst-box-column"})
;e.appendChild(n),e.appendChild(i),(0,o.ut)({elem:n,title:"Jail Score",
cback:()=>{const e=t.querySelectorAll("span.info-wrap")
;Array.from(e).forEach((t=>r(t)))}});const a="Quick Bust",c=(0,o.dt)(a),l={
id:"nst-"+c,type:"checkbox",value:c,checked:(0,o.j)(c)??!1}
;i.appendChild((0,o.F)(l,a,"",s));const d="Quick Bail",u=(0,o.dt)(d),m={
id:"nst-"+u,type:"checkbox",value:u,checked:(0,o.j)(u)??!1}
;i.appendChild((0,o.F)(m,d,"",s))})(t),new MutationObserver((t=>{t.forEach((t=>{
Array.from(t.addedNodes).forEach((t=>{if("LI"!==t.tagName)return
;const e=t.querySelector("span.info-wrap");e&&r(e)}))}))})).observe(t,{
childList:!0,subtree:!0})}},3980:(t,e,n)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.Mt=void 0;const o=n(6185)
;e.Mt=()=>{document.addEventListener("dblclick",(t=>{const e=t?.target
;if("INPUT"!==e?.tagName)return
;const n=e.parentElement?.parentElement,i=(0,o.m)(n?.querySelector(".instock").innerText)
;e.value=""+Math.min(i,100)}))}},4051:(t,e,n)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.jt=void 0;const o=n(6185)
;e.jt=()=>{document.addEventListener("dblclick",(t=>{const e=t?.target
;"INPUT"===e?.tagName&&"text"===e?.type&&e.className.includes("input-money")&&(t=>{
if(!t.closest("li"))return
;const e=t?.closest("li")?.querySelector("div.sold-daily").innerText,n=(0,
o.m)(e).toString();(0,o.h)(t,n)})(e)}))}},4538:(t,e,n)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.Tt=void 0;const o=n(6185)
;e.Tt=async t=>{
const e=t?.querySelectorAll(".trade-cont .user.right li.color2 ul li")
;if(0===e.length)return;let n=0;const i=await(0,o.p)({section:"torn",
select:"items"});if(!i?.status)return;const r=i?.items
;Array.from(e).forEach((t=>{
const e=t?.querySelector(".name"),o=e?.firstChild.textContent.trim(),{name:i,quantity:s}=(t=>{
const e=/^x\d+\s/.test(n=t)?"start":/\sx\d+$/.test(n)?"end":null;var n
;if(!e)return{name:t,quantity:1};const o=t.split(" "),i={start:0,end:o.length-1
}[e],r=o[i].substr(1),s=parseInt(r,10)
;return!e||isNaN(s)||s.toString().length!==r.length?{name:t,quantity:1}:{
name:o.filter(((t,e)=>e!==i)).join(" ").trim(),quantity:s}
})(o),a=Object.values(r).filter((t=>t.name===i))[0]
;n+=parseInt(a?.market_value)*s}));const s=(0,o.L)({classList:"nst-trade-value",
innerText:"MV: $"+(0,o.Y)(n)});t.insertAdjacentElement("beforebegin",s)}},
4893:(t,e,n)=>{n.r(e),n.d(e,{default:()=>g})
;var o=n(5072),i=n.n(o),r=n(7825),s=n.n(r),a=n(7659),c=n.n(a),l=n(5056),d=n.n(l),u=n(540),m=n.n(u),p=n(1113),f=n.n(p),h=n(6906),b={}
;b.styleTagTransform=f(),
b.setAttributes=d(),b.insert=c().bind(null,"html"),b.domAPI=s(),
b.insertStyleElement=m(),i()(h.A,b);const g=h.A&&h.A.locals?h.A.locals:void 0},
5056:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},
5072:t=>{var e=[];function n(t){
for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}
function o(t,o){for(var r={},s=[],a=0;a<t.length;a++){
var c=t[a],l=o.base?c[0]+o.base:c[0],d=r[l]||0,u="".concat(l," ").concat(d)
;r[l]=d+1;var m=n(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],
layer:c[5]};if(-1!==m)e[m].references++,e[m].updater(p);else{var f=i(p,o)
;o.byIndex=a,e.splice(a,0,{identifier:u,updater:f,references:1})}s.push(u)}
return s}function i(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){
if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return
;n.update(t=e)}else n.remove()}}t.exports=function(t,i){var r=o(t=t||[],i=i||{})
;return function(t){t=t||[];for(var s=0;s<r.length;s++){var a=n(r[s])
;e[a].references--}for(var c=o(t,i),l=0;l<r.length;l++){var d=n(r[l])
;0===e[d].references&&(e[d].updater(),e.splice(d,1))}r=c}}},5661:(t,e,n)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.Dt=void 0
;const o=n(6185),i=t=>{const e=t.target;(0,o.T)({[e.value]:e.checked})
;const n=document.querySelector("#map .leaflet-marker-pane"),i=Array.from(n.querySelectorAll('[class*="torn-item"]'))
;0!==i.length&&i.forEach((t=>{
e.checked?t.classList.remove("nst-city-item"):t.classList.add("nst-city-item")
}))};e.Dt=async t=>{
const e=Array.from(t.querySelectorAll('[class*="torn-item"]'))
;if(0===e.length)return;const n=(0,o.U)({title:"City Finds",
element:t.closest("#tab-menu")}),r="Hide Items",s=(0,o.dt)(r),a={id:"nst-"+s,
type:"checkbox",value:s,checked:(0,o.j)(s)??!1
},c=(0,o.j)(s)??!1,l=await(0,o.p)({section:"torn",select:"items"})
;if(!l?.status)return;const d=l?.items,u={};e.forEach((t=>{
const e=t.getAttribute("src"),n=(0,o.m)(e);u[n]={name:d[n]?.name,
type:d[n]?.type,value:+d[n]?.market_value,count:n in u?+u[n]?.count+1:1
},t.setAttribute("src",e.replace("small","large")),
c||t.classList.add("nst-city-item")}))
;const m=Object.values(u).reduce(((t,e)=>t+e.value*e.count),0),p=Object.values(u).map((t=>`${t.name} x${t.count}`)).join(", ").replace(/, $/,"."),f=(0,
o.L)({classList:"nst-box-column"})
;f.appendChild((0,o.F)(a,r,"",i)),f.appendChild((0,o.L)({
classList:"nst-findsworth",innerText:"Worth: $"+(0,o.Y)(m)
})),f.appendChild((0,o.L)({classList:"nst-findslist",innerText:""+p
})),n.appendChild(f)}},5689:(t,e)=>{Object.defineProperty(e,"__esModule",{
value:!0}),e.It=void 0,e.It=t=>{
document.getElementById("skip-to-content").innerText=t?.innerText}},
6185:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0
}),e.St=e.Pt=e.Et=e.At=e.qt=e.$t=e.it=e.zt=e.ot=e.tt=e.p=e.u=e.h=e.U=e.Ct=e.Nt=e.Rt=e.Ut=e.B=e.F=e.ut=e.Bt=e.ct=e.wt=e.st=e.vt=e.ft=e.H=e.k=e.L=e._=e.Ft=e.dt=e.W=e.Ht=e.Gt=e.Y=e.m=e.rt=e.T=e.j=e.lt=e.N=e.J=e.I=e.O=e.Wt=e.Xt=e.C=e.R=void 0,
e.qfs=e.qft=e.qis=e.qit=e.mugThres=e.minMugPerc=e.Kt=e.Jt=e.Yt=void 0
;const o=n(3376),i=n(8689)
;e.R=()=>document.cookie.split("; ").find((t=>t.startsWith("rfc_v"))).split("=")[1],
e.C=t=>new URLSearchParams(window.location.search).get(t),
e.Xt=()=>window.location.search.match(/\?sid=(\w+)/)?.[1],
e.Wt=()=>window.location.search.match(/\?step=(\w+)/)?.[1],
e.O=()=>window.location.pathname.replace(/\//,"").replace(/\.php/,""),
e.I=()=>window.location.hash.replace(/#\/\w+=/g,""),
e.J=()=>Math.round(Date.now()/1e3),
e.N=t=>!t||null==t||0===Object.keys(t).length,e.lt=t=>{try{return JSON.parse(t)
}catch(t){console.error(t)}return null},e.j=(t="")=>{let e;try{
e=JSON.parse(localStorage.getItem("nstdata"))}catch{e={}}
return""===t?e??{}:e?.[t]},e.T=t=>{const n=(0,e.j)()
;Object.entries(t).forEach((([t,e])=>n[t]=e)),
localStorage.setItem("nstdata",JSON.stringify(n))},e.rt=t=>{
localStorage.removeItem(t)
},e.m=t=>+(t+"").replace(/[^\d]/g,""),e.Y=t=>Math.round(t).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),
e.Gt=t=>{const e=["K","M","B","T","Q"];let n=Math.abs(t)
;if(n<1e3)return""+ +n.toFixed(2)
;for(let t=0;t<5;t++)if(n/=1e3,!(n>=1e3))return`${+n.toFixed(2)} ${e[t]}`
},e.Ht=t=>{const n=t.toLowerCase();let o=(0,e.m)(n),i=1
;return-1!==n.indexOf("k")?i=1e3:-1!==n.indexOf("m")?i=1e6:-1!==n.indexOf("b")?i=1e9:-1!==n.indexOf("t")&&(i=1e12),
o*=i,o>0?o.toLocaleString("en-US"):""},e.W=t=>{let e=""
;const n=Math.floor(t/86400),o=Math.floor(t%86400/3600),i=Math.floor(t%3600/60),r=Math.floor(t%3600%60)
;return n>0&&(e+=n.toString().padStart(2,"0")+"d "),
o>0&&(e+=o.toString().padStart(2,"0")+"h "),
i>0&&(e+=i.toString().padStart(2,"0")+"m "),
r>0&&(e+=r.toString().padStart(2,"0")+"s"),""+e
},e.dt=t=>t.toLowerCase().replace(/ /g,""),e.Ft=t=>{const e=t.replace(/ /g,"")
;return e.charAt(0).toLowerCase()+e.slice(1)},e._=(t,e)=>{
const n=document.createElement(t);return Object.entries(e).forEach((([t,e])=>{
t.startsWith("on")&&"function"==typeof e?n.addEventListener(t.slice(2),e):t in n?n[t]=e:n.setAttribute(t,e+"")
})),n
},e.L=t=>(0,e._)("div",t),e.k=t=>(0,e._)("span",t),e.H=t=>(0,e._)("button",t),
e.ft=t=>(0,
e._)("li",t),e.vt=t=>(0,e._)("p",t),e.st=t=>(0,e._)("a",t),e.wt=t=>(0,
e._)("img",t),e.ct=t=>(0,e._)("input",t),e.Bt=t=>(0,e._)("label",t),e.ut=t=>{
const{elem:n,title:o,cback:i=()=>{}}=t,r=(0,e.dt)(o),s=(0,e.L)({
classList:"nst-box-item"}),a=(0,e._)("input",{id:"nst-"+r,type:"text",
classList:"nst-input",value:(0,e.Y)(+((0,e.j)(r)??"0")),placeholder:r,
onkeyup:t=>{const n=t.target,o=(0,e.m)(n.value)
;n.value=o.toLocaleString("en-US");const r=(0,e.dt)(n.placeholder);(0,e.T)({
[r]:o}),i()}});return s.appendChild(a),n.appendChild(s),s},e.F=(t,n,o,i)=>{
const r=(0,e.L)({classList:"nst-box-item",onchange:i}),s=(0,e.ct)({...t,
type:"checkbox"}),a={innerText:n,htmlFor:t?.id,title:o},c=(0,e.Bt)(a)
;return r.appendChild(s),r.appendChild(c),r},e.B=(t,n)=>{
const o=(0,e.j)("outcome").toString(),i=(0,e.L)({classList:"nst-box-item"
}),r=(0,e.ct)({id:t,type:"radio",name:n,value:t,checked:o===t}),s=(0,e.Bt)({
innerText:"hospitalize"===t?"hosp":t,htmlFor:t,classList:""})
;return i.appendChild(r),i.appendChild(s),i
},e.Ut=(t,e)=>document?.getElementById(t)?.appendChild(e),
e.Rt=t=>document.body.appendChild(t),e.Nt=(t,e)=>{
const n=document?.getElementById(t)
;if(n&&n.parentElement)return n.parentElement.insertBefore(e,n)}
;const r='<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9" /></svg>',s='<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6" /></svg>',a=t=>{
const n=t.target.closest(".nst-box-header"),o=n.nextElementSibling;if(!o)return
;const i=n.querySelector("#nst-box-title").innerText,a=(0,
e.dt)(i)+"Folded",c=o.classList.toggle("hidden")
;n.querySelector("#nst-arrow").innerHTML=c?s:r,(0,e.T)({[a]:c})};e.Ct=t=>{
const n=(0,e.L)({classList:"nst-box-header",onclick:a});return n.appendChild((0,
e.k)({classList:"nst-box-title"})).appendChild((0,e.k)({id:"nst-box-title",
innerText:t})),n.appendChild((0,e.L)({id:"nst-arrow"})),n},e.U=t=>{
const{element:n,title:o}=t;if(!n)return
;const i=(0,e.dt)(o),a=i+"Folded",c=(0,e.j)(a)?"nst-box-content hidden":"nst-box-content",l=(0,
e.L)({classList:"nst-box"}),d=(0,e.Ct)(o)
;d.querySelector("#nst-arrow").innerHTML=(0,e.j)(a)?s:r;const u=(0,e.L)({
classList:c});if(document.querySelector("#nst-"+i))return;const m=(0,e.L)({
id:"nst-"+i,classList:"nst-box-row"})
;return u.appendChild(m),l.appendChild(d),l.appendChild(u),
n.insertAdjacentElement("beforebegin",l),m},e.h=(t,e)=>{
const n=new Event("input",{bubbles:!0})
;t.value=""+e,t.dispatchEvent(n),t.select()},e.u=(t,e)=>{
const n=new Event("input",{bubbles:!0
}),o=Object.getOwnPropertyDescriptor(t,"value")?.set,i=Object.getPrototypeOf(t),r=Object.getOwnPropertyDescriptor(i,"value")?.set
;o&&o!==r?r.call(t,e):o.call(t,e),t.dispatchEvent(n),t.select()},e.p=async t=>{
const{section:n,select:o,objID:i,api:r}=t,s="https://api.torn.com/"+n+`/${i??""}?selections=${o}`+`&key=${r??(0,
e.j)("apikey")}&comment=nst`,a=await c("GET",s),l=(0,e.St)()?a:a?.response
;return void 0!==l?.error?(console.error(l?.error?.error),
[2,10,13,18].includes(l?.error?.code)&&(0,e.rt)("nstdata"),{status:!1,
error:"broken key"}):{status:!0,...l}},e.tt=async t=>{
const{selection:n,api:o}=t,i=`https://www.tornstats.com/api/v2/${o??(0,
e.j)("tsapikey")??(0,
e.j)("apikey")}${n}`,r=await c("GET",i),s=(0,e.St)()?r:r?.response
;return void 0===s?.status||!1===s?.status?(console.error(s?.message,s),{
status:!1}):s},e.ot=(t={})=>{const n=(0,e.N)(t)?(0,e.j)("userdata"):t;return{
et:n?.player_id,nt:n?.faction?.faction_id}
},e.zt=t=>t.toString(16),e.it=(t={})=>{const n=(0,e.j)("apikey")
;if(16!==n?.length)return!1
;const i=(0,e.N)(t)?(0,e.j)("userdata"):t,{et:r,nt:s}=(0,e.ot)(i)
;return!(0,e.N)(i)&&!!(0,o.kt)((0,e.zt)(s),(0,e.zt)(r))},e.$t=async()=>{
setTimeout(e.$t,6e4);const t=(0,e.j)();if((0,e.N)(t))return;const n=t?.apikey
;if(16!==n?.length)return;const o=t?.userdata,r=1e3*(o?.timestamp??0)
;if(Date.now()-3e4<=r)return;const s={section:"user",
select:"bars,basic,battlestats,cooldowns,education,icons,money,networth,notifications,perks,profile,refills,timestamp,travel,newmessages,newevents,personalstats",
api:n},a=await(0,e.p)(s);if(!a?.status)return;const{et:c,nt:l}=(0,e.ot)(a)
;if(void 0===c||void 0===l)return
;const d=a?.merit_perks?.filter((t=>t.includes("mug")))?.join()??0,u=((0,
e.m)(d)/5+20)/400;"player_id"in a&&(0,e.T)({userdata:a}),(0,e.T)({mugperc:u
}),(0,e.St)()||(0,i.Qt)(o,a)},e.qt=(t="")=>{if(!(0,e.it)())return!1
;const n=(0,e.j)("script");if(""===t)return!0;const o=n?.[t]?.enabled;return!!o
},e.At=()=>{
const t=document?.body?.getAttribute("data-traveling"),e=document?.body?.getAttribute("data-abroad")
;return"false"==t&&"false"==e?"home":"true"==t&&"true"==e?"trav":"false"==t&&"true"==e?"abro":`${t}, ${e}`
},e.Et=t=>t.split("&").reduce(((t,e)=>({...t,[e.split("=")[0]]:e.split("=")[1]
})),{}),
e.Pt=t=>Object.keys(t).map((e=>`${e}=${t[e]}`)).join("&"),e.St=()=>void 0!==window.flutter_inappwebview,
e.Yt=t=>{
(0,e.St)()||(XMLHttpRequest.prototype._original_send=XMLHttpRequest.prototype.send,
XMLHttpRequest.prototype.send=function(e){try{
if(!e)return this._original_send(e);const n=t(e)
;console.log("data",e),console.log("new_data",n),this._original_send(n)
}catch(t){console.error(t),this._original_send(e)}})},e.Jt=(t,n)=>{
const o=(0,e.St)()?window:unsafeWindow,{fetch:i}=o;o.fetch=async(...e)=>{
const o=await i(...e),r=e[0]?.url||e[0],s=r?.match(/(?<=step=|sid=)(\w+)/g)?.[0]
;if(!s||s!==n)return o;let a;try{a=await(o?.clone()?.json())}catch(t){
return console.error(e,t),o}return t(a),o}},e.Kt=t=>{
const n=(0,e.St)()?window:unsafeWindow,{WebSocket:o}=n
;n.WebSocket=function(...e){const n=new o(...e)
;return n.addEventListener("message",t),n}
},e.minMugPerc=+(0,e.j)("mugperc"),e.mugThres=(0,
e.m)((0,e.j)("mugthreshold")),e.qit="Quick Items",
e.qis=(0,e.dt)(e.qit),e.qft="Quick Faction",e.qfs=(0,e.dt)(e.qft)
;const c=(t,n,o={},i={})=>new Promise(((r,s)=>{
if((0,e.St)())"GET"===t&&PDA_httpGet(n).then((t=>r(JSON.parse(t.responseText)))).catch(s),
"POST"===t&&PDA_httpPost(n,o,i).then((t=>r(JSON.parse(t.responseText)))).catch(s);else{
const e={url:n,method:t,headers:o,responseType:"json",onload:r,onerror:s
},a="GET"==t?e:{...e,data:i};GM.xmlHttpRequest(a)}}))},6215:function(t,e,n){
var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{
default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.Vt=void 0
;const i=o(n(246)),r=n(6185),s=["Primary","Secondary","Melee","Temporary"],a=["Medical","Drug","Energy Drink","Alcohol","Candy","Booster","Supply Pack",...s],c=t=>{
t.stopPropagation()
;const e=t.target.closest("#nst-quick-use").parentElement.getAttribute("data-itemID")
;if(!e)return;const n=(0,r.j)(r.qis);Object.keys(n).includes(e)&&(async t=>{
const{category:e}=t,n=document.getElementById("nst-item-resp");if(n){
for(;n.lastChild;)n.removeChild(n.lastChild);s.includes(e)?await(async(t,e)=>{
const{id:n,strangeID:o}=t,i={step:"actionForm",item_id:n,type:5,action:"equip",
item:n,id:o,confirm:1};if(!i)return
;const s="https://www.torn.com/item.php?rfcv="+(0,r.R)(),a={method:"POST",
headers:{"x-requested-with":"XMLHttpRequest"},body:new URLSearchParams(i)
},c=await(await fetch(s,{...a})).text()
;e.innerHTML=c,c?.match(/ equipped/)?e.classList.add("text-nstgreen"):e.classList.remove("text-nstgreen")
})(t,n):await(async(t,e)=>{const{id:n}=t,o={step:"useItem",itemID:n,item:n}
;if(!o)return;const i="https://www.torn.com/item.php?rfcv="+(0,r.R)(),s={
method:"POST",headers:{"x-requested-with":"XMLHttpRequest"},
body:new URLSearchParams(o)},a=await(await fetch(i,{...s
})).json(),c=a.links??{},l=a.text??{},d=(0,r.L)({});d.appendChild((0,r.vt)({
innerHTML:l}));const u=(0,r.vt)({});Object.values(c).forEach((t=>{
const e=(0,r.st)({classList:t.class+" t-blue h m-left10",href:t.url,
innerText:t.title});t.attr.split(/\s+/).forEach((t=>{
const n=t.split("=")[0].toString(),o=t.split("=")[1].toString()
;e.setAttribute(n,o)})),u.appendChild(e)
})),d.appendChild(u),e.appendChild(d),e.classList.remove("nstGreen"),
e.classList.remove("nstBold");const m=e.querySelector(".counter-wrap")
;if(!m)return
;const p=1e3*+(m.getAttribute("data-time")||0),f=Math.floor(p/864e5),h=Math.floor(p%864e5/36e5)+24*f,b=Math.floor(p%36e5/6e4),g=Math.floor(p%6e4/1e3)
;m.innerText=`${h}:${b}:${g}`})(t,n),n.classList.remove("hidden")}})(n[e])
},l=t=>{t.stopPropagation(),t.preventDefault()
;const e=t.target.closest("#nst-quick-use").parentElement.getAttribute("data-itemID")
;if(!e)return;const n=(0,r.j)(r.qis)
;Object.keys(n).includes(e)&&(delete n[e],(0,r.T)({[r.qis]:n}),d())},d=()=>{
const t=document.getElementById("nst-"+r.qis);if(t){
for(;t.lastChild;)t.removeChild(t.lastChild)
;Object.values((0,r.j)(r.qis)).forEach((e=>((t,e)=>{
const{id:n,name:o,quantity:i}=t,s=`/images/items/${n}/medium.png`,a=(0,r.L)({
classList:"nst-box-btn-div"})
;a.setAttribute("data-itemID",n),a.setAttribute("data-qty",i);const d=(0,r.H)({
id:"nst-quick-use",classList:"nst-box-button",onclick:c}),u=(0,r.wt)({src:s,
alt:o,classList:"nst-box-img"}),m=(0,r.k)({id:"nst-quick-name",innerText:o
}),p=(0,r.k)({id:"nst-quick-close",classList:"nst-box-close",innerText:"✕",
onclick:l});d.appendChild(u),d.appendChild(m),d.appendChild(p),a.appendChild(d),
e.appendChild(a)})(e,t))),new i.default(t,{animation:150,
dataIdAttr:"data-itemid",store:{get:()=>{const t=(0,r.j)(r.qis)
;return Object.entries(t).sort(((t,e)=>t[1].order-e[1].order)).map((t=>t[0]))},
set:t=>{const e=t.toArray(),n=(0,r.j)(r.qis)
;e.forEach((t=>n[t].order=e.indexOf(t))),(0,r.T)({[r.qis]:n})}}})}},u=t=>{
t.stopPropagation(),t.preventDefault();const e=t.target
;if(!/name-wrap/.test(e.className))return
;const n=e.closest("li"),o=n?.dataset?.item,i=n?.dataset?.qty,s=n?.dataset?.category??"",c=n?.querySelector('.cont-wrap ul [class*="equipped"]')?.getAttribute("data-id")??"",l=n?.querySelector(".title-wrap .name-wrap .name"),u=l?.innerText?.replace(/[ ]*Blood Bag[ :]*/,"")?.replace(/[ ]*Bottle of[ :]*/,"")?.replace(/[ ]*First Aid[ :]*/,"")?.replace(/[ ]*Lawyer's Business Card[ :]*/,"LBC")?.replace(/[ ]*Can of[ :]*/,"")
;if(!(n&&o&&s&&a.includes(s)))return;const m=(0,r.j)(r.qis)
;if(Object.keys(m).includes(o))return
;const p=0===Object.values(m)?.length?0:+Object.values(m).reduce(((t,e)=>t?.order>e?.order?t:e))?.order
;m[o]={id:o,order:p+1,name:u,quantity:i,category:s,strangeID:c},(0,r.T)({
[r.qis]:m}),d()};e.Vt=t=>{
const e=t?.parentElement,n=e?.querySelector("div.equipped-items-wrap"),o=(0,
r.U)({title:r.qit,element:n});o?.parentElement?.appendChild((0,r.L)({
id:"nst-item-resp",classList:"nst-box-row hidden"
})),d(),new MutationObserver((t=>{t.forEach((t=>{
const e=t.target,n=Array.from(t.addedNodes)
;n?.length>0&&"UL"===e?.nodeName&&"category-wrap"==e?.parentElement?.id&&null==t?.previousSibling&&n.forEach((t=>{
const e=t?.dataset?.item;e&&t.addEventListener("dblclick",u)}))}))
})).observe(t,{childList:!0,subtree:!0})}},6314:t=>{t.exports=function(t){
var e=[];return e.toString=function(){return this.map((function(e){
var n="",o=void 0!==e[5]
;return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),
o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),
n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")
},e.i=function(t,n,o,i,r){"string"==typeof t&&(t=[[null,t,void 0]]);var s={}
;if(o)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(s[c]=!0)}
for(var l=0;l<t.length;l++){var d=[].concat(t[l])
;o&&s[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),
d[5]=r),
n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),
i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),
d[4]=i):d[4]="".concat(i)),e.push(d))}},e}},6703:(t,e,n)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.Zt=void 0;const o=n(6185)
;e.Zt=t=>{t=t.closest('ul[class*="properties"]')
;const e=(0,o.j)("userdata"),n=[...e.faction_perks,...e.job_perks,...e.property_perks,...e.education_perks,...e.book_perks].filter((t=>t.includes("gym gains")))
;["strength","defense","speed","dexterity"].forEach((i=>{
const r=e.faction_perks.filter((t=>t.includes(i+" gym gains"))).reduce(((t,e)=>t+(0,
o.m)(e.match(/\d+/))),0),s=n.filter((t=>t.includes(i)||t.match(/% gym gains?/))).reduce(((t,e)=>t+(0,
o.m)(e.match(/\d+/))),0),a=(0,o.L)({id:"nst-steadfast-"+i,
classList:"nst-steadfast",innerText:`steadfast: ${r}% (${s}%)`})
;t.querySelector("[class*="+i).insertAdjacentElement("afterbegin",a)}))}},
6906:(t,e,n)=>{n.d(e,{A:()=>a});var o=n(1601),i=n.n(o),r=n(6314),s=n.n(r)()(i())
;s.push([t.id,'*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.nst-hide-medal{display:none!important}.nst-left-align .d .container{justify-content:flex-start!important;margin-left:1.25rem!important}.nst-left-align .d .anonymous .content-wrapper,.nst-left-align .d.without-sidebar .container,.nst-left-align .d.without-sidebar .content-wrapper{margin-left:1.25rem}.nst-trade-value{font-size:.875rem;height:1.5rem;line-height:1.5rem;text-align:center;--tw-text-opacity:1;color:rgb(108 173 43/var(--tw-text-opacity,1))}.nst-city-item{border-radius:9999px!important;border-style:solid!important;border-width:1px!important;box-sizing:border-box!important;display:block!important;height:2.5rem!important;left:-1.25rem!important;top:-1.25rem!important;width:2.5rem!important;z-index:999!important;--tw-border-opacity:1!important;background-color:#124707cc!important;border-color:rgb(0 0 0/var(--tw-border-opacity,1))!important;padding:.75rem!important;--tw-shadow:0 25px 50px -12px rgba(0,0,0,.25)!important;--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color)!important;box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)!important}.nst-city-item:hover{height:10rem!important;left:-2.5rem!important;top:-2.5rem!important;width:10rem!important;z-index:999!important;--tw-bg-opacity:1!important;background-color:rgb(0 0 0/var(--tw-bg-opacity,1))!important;padding:2.25rem!important}.nst-findsworth{font-weight:700}.nst-findslist,.nst-findsworth{margin:.25rem;padding:.25rem}.nst-findslist{text-align:left}.nst-status-wrap{align-content:flex-start;align-items:flex-start;flex-direction:column;justify-content:center;position:absolute;top:0;z-index:10}.nst-status-middle,.nst-status-wrap{display:flex;flex-wrap:wrap;width:100%}.nst-status-middle{align-content:center;align-items:center;flex-direction:row;justify-content:space-between}.nst-status-item{border-style:solid;border-width:1px;margin:.25rem;--tw-border-opacity:1;border-color:rgb(0 0 0/var(--tw-border-opacity,1))}.nst-lastaction,.nst-status-item{padding:.25rem}.nst-spgym-msg,.nst-spgym-sel,.nst-steadfast{margin:.25rem;padding:.25rem}.nst-steadfast{text-align:center}.nst-pokername{color:var(--holdem-text-color-main)}.nst-ghost-wrap{align-content:center;align-items:center;display:flex;flex-direction:column;flex-wrap:wrap;justify-content:center;padding:.25rem}.nst-rw-show{align-content:center!important;align-items:center!important;display:flex!important;flex-direction:row!important;flex-wrap:nowrap!important;justify-content:flex-start!important}.nst-rw-show-wrap{margin-left:.25rem}.nst-rw-single{border-radius:.5rem;border-style:solid;border-width:2px;margin-right:.25rem;--tw-border-opacity:1;border-color:rgb(34 34 34/var(--tw-border-opacity,1));font-size:.75rem;line-height:1rem;padding:.25rem}.nst-icon{background-image:url(https://factiontags.torn.com/11581-56425.png)!important;background-position:50%!important;cursor:pointer!important}.nst-logo{font-size:1.5rem;font-weight:700;line-height:2rem;--tw-text-opacity:1;color:rgb(66 140 165/var(--tw-text-opacity,1))}.nst-menu{flex:1 1 0%;margin-bottom:10rem;margin-left:2rem;margin-top:2rem}.nst-menu-wrap{border-radius:.5rem}.nst-menu-title{align-content:center;align-items:center;border-top-left-radius:.5rem;border-top-right-radius:.5rem;flex-wrap:wrap;height:2rem;left:0;position:relative;top:0;--tw-border-opacity:1;border-bottom:1px rgb(0 0 0/var(--tw-border-opacity,1));border-style:solid;color:var(--default-color);font-size:.875rem;font-weight:700;line-height:2rem;padding:.25rem .75rem}.nst-menu-body,.nst-menu-title{background-color:var(--default-bg-panel-color);display:flex}.nst-menu-body{border-bottom-left-radius:.5rem;border-bottom-right-radius:.5rem;line-height:.75rem}.nst-ul-main{display:table-cell;float:none;list-style-type:none;--tw-border-opacity:1;border-right:1px rgb(0 0 0/var(--tw-border-opacity,1));border-style:solid;vertical-align:top}.nst-menu-page{display:block;position:relative;width:9rem;--tw-border-opacity:1;background-color:var(--default-bg-panel-color);border-bottom:1px rgb(0 0 0/var(--tw-border-opacity,1));border-style:solid;color:var(--default-color);font-weight:700;padding:.5rem}.nst-menu-page:hover{background-color:var(--default-bg-panel-active-color)}.nst-menu-sel{background-color:var(--default-bg-panel-active-color)!important}.nst-menu-item{display:block;float:none;vertical-align:top;width:100%}.nst-message{--tw-text-opacity:1;color:rgb(185 70 45/var(--tw-text-opacity,1))}.nst-api-wrap,.nst-message{margin:.5rem;padding:.25rem}.nst-api-wrap{align-content:center;align-items:center;display:flex;flex-direction:column;flex-wrap:wrap;justify-content:center}.nst-block-title{margin:.5rem!important}.nst-block{align-content:center;align-items:center;--tw-border-opacity:1;border-bottom:1px rgb(249 250 251/var(--tw-border-opacity,1));border-style:solid}.nst-block,.nst-script-block{display:flex;flex-direction:column;flex-wrap:wrap;justify-content:center;margin:.5rem;padding:.5rem}.nst-script-block{align-content:flex-start;align-items:flex-start}.nst-outcome{align-content:center;align-items:center;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center}.list-group-item{border-style:solid;border-width:1px;margin:.5rem;--tw-border-opacity:1;border-color:rgb(107 114 128/var(--tw-border-opacity,1));font-size:.875rem;line-height:1.25rem;padding:.5rem 1rem;text-align:center}.nst-tos-title{font-size:1.5rem!important;font-weight:700!important;line-height:2rem!important;margin-bottom:1.25rem!important;margin-top:.75rem!important;text-align:center!important}.nst-tos-wrap{font-size:.875rem;line-height:1.25rem;margin:.5rem;overflow-wrap:normal;overflow-wrap:break-word;padding:.25rem;white-space:normal;word-break:normal}.nst-box{box-sizing:border-box;display:flex;flex-direction:column;margin-bottom:.75rem;margin-top:.75rem}.nst-box-header{border-bottom-width:0;border-top-left-radius:.5rem;border-top-right-radius:.5rem;display:flex;--tw-bg-opacity:1;background-color:rgb(0 0 0/var(--tw-bg-opacity,1));font-size:1.125rem;line-height:1.75rem;padding:.25rem .75rem;--tw-text-opacity:1;color:rgb(66 140 165/var(--tw-text-opacity,1));--tw-shadow:inset 0 2px 4px 0 rgba(0,0,0,.05);--tw-shadow-colored:inset 0 2px 4px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}#nst-arrow{display:flex;height:1rem;width:1rem}.nst-box-title{flex-grow:1;font-size:.875rem;font-weight:700;line-height:1rem;--tw-text-opacity:1;color:rgb(66 140 165/var(--tw-text-opacity,1))}.nst-box-content{border-bottom-left-radius:.5rem;border-bottom-right-radius:.5rem;border-style:solid;border-width:0 1px 1px;--tw-border-opacity:1;background-color:var(--default-bg-panel-color);border-color:rgb(0 0 0/var(--tw-border-opacity,1));color:var(--default-color)}.nst-box-content>p{margin:.25rem;text-align:center}.nst-box-row{align-items:flex-start;flex-direction:row;flex-wrap:wrap;justify-content:space-evenly}.nst-box-column,.nst-box-row{align-content:center;display:flex;margin:.25rem;text-align:center}.nst-box-column{align-items:center;flex:1 1 0%;flex-direction:column;flex-wrap:wrap;justify-content:center}.nst-box-item{align-content:flex-start;align-items:center;display:flex;font-size:.875rem;line-height:1.25rem;margin:.125rem .25rem}.nst-box-item>input{margin:0 .25rem}.nst-box-button{align-items:center;color:var(--default-color);display:flex;flex-direction:column;flex-wrap:wrap;padding:.25rem;position:relative;width:100%}.nst-box-close{cursor:pointer;font-size:.75rem;line-height:1rem;position:absolute;right:.25rem;top:0}.nst-box-img{vertical-align:middle}.nst-box-btn-div{align-self:stretch;border-radius:.5rem;border-style:solid;border-width:1px;display:flex;flex:0 0 14%;justify-content:center;margin:.25rem;--tw-border-opacity:1;border-color:rgb(34 34 34/var(--tw-border-opacity,1));padding:0}.nst-box-btn-div:hover{background-color:var(--default-bg-panel-active-color)}#nst-item-resp{justify-content:center}.nst-input{background-color:var(--default-bg-panel-active-color);border-color:rgb(0 0 0/var(--tw-border-opacity,1));border-radius:.25rem;border-style:solid;border-width:1px;color:var(--default-color);font-size:.875rem;font-weight:500;height:1.5rem;line-height:1.25rem;margin:0;text-align:center}.nst-input,.nst-table{box-sizing:border-box;--tw-border-opacity:1}.nst-table{border-color:rgb(31 41 55/var(--tw-border-opacity,1));border-style:solid;border-width:2px;width:100%}.nst-table-row{text-align:left}.nst-table-cell-head{font-size:.875rem;font-weight:700;line-height:1.25rem}.nst-table-cell{border-style:solid!important;border-width:1px!important;box-sizing:border-box!important;--tw-border-opacity:1!important;border-color:rgb(31 41 55/var(--tw-border-opacity,1))!important;font-size:.75rem!important;line-height:1rem!important;padding:.25rem!important}.m-2{margin:.5rem}.table{display:table}.hidden{display:none}.h-4{height:1rem}.w-4{width:1rem}.bg-nstmain{--tw-bg-opacity:1;background-color:rgb(66 140 165/var(--tw-bg-opacity,1))}.bg-nstred{--tw-bg-opacity:1;background-color:rgb(185 70 45/var(--tw-bg-opacity,1))}.bg-nstyellow{--tw-bg-opacity:1;background-color:rgb(252 196 25/var(--tw-bg-opacity,1))}.text-center{text-align:center}.text-base{font-size:1rem;line-height:1.5rem}.text-sm{font-size:.875rem;line-height:1.25rem}.font-bold{font-weight:700}.text-black{--tw-text-opacity:1;color:rgb(0 0 0/var(--tw-text-opacity,1))}.text-nstgreen{--tw-text-opacity:1;color:rgb(108 173 43/var(--tw-text-opacity,1))}.text-nstmain{--tw-text-opacity:1;color:rgb(66 140 165/var(--tw-text-opacity,1))}.text-nstred{--tw-text-opacity:1;color:rgb(185 70 45/var(--tw-text-opacity,1))}.text-nsttorntext{color:var(--default-color)}.text-nstyellow{--tw-text-opacity:1;color:rgb(252 196 25/var(--tw-text-opacity,1))}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}[aria-label="Reset loadout"],[class*=airspaceScene],[class*=randomFactWrapper]{display:none!important}',""])
;const a=s},7188:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0
}),e.te=void 0;const o=n(6185),i=(t,e)=>{if(!t?.querySelector)return
;if(!t?.querySelector("ul.employee-list"))return
;const n=t?.querySelector("ul.employee-list")?.children,i=Array.from(n)
;if(0===i.length)return;const r=(0,o.J)()-86400,s=(0,o.J)()-172800
;i.forEach((t=>{const n=t?.getAttribute("data-user");if(!n)return
;const o=e[n]?.last_action?.timestamp,i=t?.querySelector(".employee")
;if(!i)return;const a=o<s?"bg-nstred":o<r?"bg-nstyellow":""
;a&&i.classList.add(a)}))};e.te=async t=>{if(!t)return;const e=await(0,o.p)({
section:"company",select:"employees"});if(!e?.status)return
;const{company_employees:n}=e;i(t,n),new MutationObserver((t=>{t.forEach((t=>{
Array.from(t.addedNodes).forEach((t=>i(t,n)))}))})).observe(t,{childList:!0,
subtree:!0})}},7298:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0
}),e.ee=void 0;const o=n(6185),i={"Small Arms Cache":20,"Melee Cache":30,
"Medium Arms Cache":50,"Heavy Arms Cache":70,"Armor Cache":60};e.ee=async t=>{
const e=t?.parentElement,n=await(0,o.p)({section:"torn",select:"items"})
;if(!n?.status)return;const r=n?.items
;Array.from(e.children).forEach((t=>((t,e)=>{
const n=t.innerText.split(",").filter((t=>Object.keys(i).includes(t.trim().replace(/^\d+x /,""))))
;let r=0,s=0,a=0;n.forEach((t=>{
const n=parseInt(t.trim().match(/\d+x/)[0]),o=t.trim().replace(/^\d+x /,""),c=Object.values(e).filter((t=>t.name.includes(o)))[0].market_value
;s+=n,r+=c*n,a+=n*+i[o]}));const c=`caches: ${s} | BB: ${a} | MV: $`+(0,o.Y)(r)
;t.appendChild((0,o.L)({innerText:c}))})(t,r)))}},7659:t=>{var e={}
;t.exports=function(t,n){var o=function(t){if(void 0===e[t]){
var n=document.querySelector(t)
;if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{
n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t)
;if(!o)throw Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.")
;o.appendChild(n)}},7673:(t,e,n)=>{Object.defineProperty(e,"__esModule",{
value:!0}),e.ne=void 0;const o=n(6185),i=t=>{if(!t)return
;if(t.querySelector("a"))return;const e=t.innerHTML,n=(0,o.st)({
classList:"nst-pokername",href:"profiles.php?NID="+e,target:"_blank",
innerText:""+e});t.innerHTML="",t.appendChild(n)};e.ne=t=>{
const e="p[class^=name]"
;t.querySelectorAll(e).forEach((t=>i(t))),new MutationObserver((t=>{
t.forEach((t=>{
Array.from(t.addedNodes).forEach((t=>i(t.querySelector&&t.querySelector(e))))}))
})).observe(t,{childList:!0,subtree:!0})}},7716:(t,e,n)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.oe=void 0;const o=n(6185)
;e.oe=t=>{const{step:e,action:n,confirm:i}=(0,o.Et)(t)
;return"actionForm"!==e||"equip"!==n||1===i?(0,o.Pt)({...(0,o.Et)(t)
}):(0,o.Pt)({...(0,o.Et)(t),confirm:1})}},7825:t=>{t.exports=function(t){
if("undefined"==typeof document)return{update:function(){},remove:function(){}}
;var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){
var o=""
;n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"))
;var i=void 0!==n.layer
;i&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,
i&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var r=n.sourceMap
;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),
e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){
if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},
8257:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.ie=e.re=void 0
;const o=n(6185),i={},r={balboas:{req:["defense","dexterity"],
desc:"balboas (def/dex)"},frontline:{req:["strength","speed"],
desc:"frontline (str/spd)"},gym3000:{req:["strength"],desc:"gym3000 (str)"},
isoyamas:{req:["defense"],desc:"isoyamas (def)"},rebound:{req:["speed"],
desc:"rebound (spd)"},elites:{req:["dexterity"],desc:"elites (dex)"}},s=()=>{
["one","two"].forEach((t=>{
const e=document.querySelector(`#nst-spgym-${t}-sel`),n=document.querySelector(`#nst-spgym-${t}-msg`),s=e.value,a=Object.keys(i).filter((t=>r[s].req.includes(t))).reduce(((t,e)=>({
...t,[e]:i[e]
})),{}),c=Object.keys(i).filter((t=>!r[s].req.includes(t))).reduce(((t,e)=>({
...t,[e]:i[e]
})),{}),l=Object.values(a).reduce(((t,e)=>t+e),0),d=Object.values(c).reduce(Object.keys(a).length>1?(t,e)=>t+e:(t,e)=>Math.max(t,e),0),u=l>=1.25*d?(0,
o.Y)(l/1.25-d):(0,
o.Y)(1.25*d-l),m=Object.keys(a).length>1?Object.keys(l>=1.25*d?c:a).join(" and "):(l>=1.25*d?Object.keys(c).filter((t=>i[t]===d)):Object.keys(a)).join(""),p=`Gain ${l>=1.25*d?"no more than":""} ${u} ${m}`
;n.innerText=p}))};e.re=t=>(t=>{const e=(0,o.U)({title:"Special Gym",element:t})
;["one","two"].forEach((t=>{const n=(0,o.L)({id:"nst-spgym-"+t
}),i=(0,o._)("select",{id:`nst-spgym-${t}-sel`,classList:"nst-spgym-sel",
onchange:t=>{
const e=t?.target,n=e.id.replace(/nst-/g,"").replace(/-sel/g,"").replace(/-/g,"")
;(0,o.T)({[n]:e.value}),s()}});Object.entries(r).forEach((([e,n])=>{const r={
value:e,innerText:n.desc},s=(0,o._)("option",r)
;s.selected=(0,o.j)("spgym"+t)?.toString()===e,i.appendChild(s)}))
;const a=(0,o.vt)({id:`nst-spgym-${t}-msg`,classList:"nst-spgym-msg"})
;n.appendChild(i),n.appendChild(a),e.appendChild(n)}))})(t),e.ie=t=>{
"stats"in t?Object.entries(t?.stats).forEach((([t,e])=>i[t]=(0,
o.m)(e?.value))):"stat"in t&&(i[t?.stat?.name]=(0,o.m)(t?.stat?.newValue)),s()}
},8292:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0
}),e.se=void 0,e.se=t=>t?.remove()},8527:function(t,e,n){
var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{
default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.ae=void 0
;const i=o(n(246)),r=n(6185),s=(0,r.C)("XID");e.ae=async t=>{(t=>{
const e=t?.closest(".profile-wrapper"),n=(0,r.U)({title:"Stat Spies",element:e
}),o=(0,r.L)({id:"nst-compare",classList:"nst-box-column"}),i=(0,r.L)({
id:"nst-spies",classList:"nst-box-column item-start"})
;o.appendChild((0,r._)("table",{id:"nst-compare-table",classList:"nst-table"})),
i.appendChild((0,r._)("table",{id:"nst-spies-table",classList:"nst-table"
})),i.appendChild((0,r._)("table",{id:"nst-avg-table",classList:"nst-table"
})),n.appendChild(o),n.appendChild(i)})(t);const e=await(0,r.tt)({
selection:"/spy/user/"+s});e?.status&&(e?.compare?.status&&(t=>{
const e=document.getElementById("nst-compare-table"),n=(0,r._)("tr",{
classList:"nst-table-row text-center nst-nodrag"})
;e.appendChild(n),["Stat","Them","You"].forEach((t=>n.appendChild((0,r._)("th",{
innerText:t,classList:"nst-table-cell nst-table-cell-head"
})))),Object.keys(t).forEach((n=>{const o=(0,r._)("tr",{
classList:"nst-table-row"});o.setAttribute("data-id",n)
;const i=+t?.[n]?.amount,s=+t?.[n]?.difference,a=s>0?"text-nstgreen":s<0?"text-nstred":"text-nsttorntext",c=(0,
r._)("td",{innerText:""+n,classList:"nst-table-cell text-nsttorntext"
}),l=(0,r._)("td",{innerText:""+(0,r.Y)(i),
classList:"nst-table-cell text-nsttorntext"}),d=(0,r._)("td",{
innerText:""+(0,r.Y)(i+s),classList:"nst-table-cell"})
;d.classList.add(a),o.appendChild(c),
o.appendChild(l),o.appendChild(d),e.appendChild(o)})),new i.default(e,{
animation:150,filter:".nst-nodrag",store:{
get:()=>(0,r.j)("tscompare")??Object.keys(t),set:t=>(0,r.T)({
tscompare:t.toArray()})}});const o=(0,r._)("tr",{
classList:"nst-table-row nst-nodrag text-center"}),s=(0,r._)("td",{
classList:"nst-table-cell",colSpan:3}),a=(0,r.st)({
href:"https://www.tornstats.com/settings/script",target:"_blank",
classList:"t-blue nst-nodrag",innerText:"Change your script settings here"})
;s.appendChild(a),o.appendChild(s),e.appendChild(o)
})(e?.compare?.data),e?.spy?.status&&(t=>{
const e=document.getElementById("nst-spies-table"),n=(0,r._)("tr",{
classList:"nst-table-row text-center"})
;e.appendChild(n),["Stat","Them","You"].forEach((t=>n.appendChild((0,r._)("th",{
innerText:t,classList:"nst-table-cell nst-table-cell-head"
})))),["Strength","Defense","Speed","Dexterity","Total"].forEach((n=>{
const o=+t?.[n.toLowerCase()],i=+t?.["delta"+n],s=i>0?"text-nstgreen":i<0?"text-nstred":"text-nsttorntext",a=(0,
r._)("tr",{classList:"nst-table-row"}),c=(0,r._)("td",{innerText:""+n,
classList:"nst-table-cell text-nsttorntext"}),l=(0,r._)("td",{
innerText:""+(0,r.Y)(o),classList:"nst-table-cell text-nsttorntext"
}),d=(0,r._)("td",{innerText:""+(0,r.Y)(o+i),classList:"nst-table-cell"})
;d.classList.add(s),
a.appendChild(c),a.appendChild(l),a.appendChild(d),e.appendChild(a)}))
;const o=(0,r._)("tr",{classList:"nst-table-row nst-nodrag text-center"
}),i=(0,r._)("td",{classList:"nst-table-cell text-nsttorntext",colSpan:3,
innerText:"Last Update: "+(t?.difference??"")})
;o.appendChild(i),e.appendChild(o)})(e?.spy))}},8601:(t,e)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.ce=void 0;const n=t=>{
if(t.classList.contains("yes"))return;t.classList.add("yes")
;const e=t?.getAttribute("href")?.replace(/=buy/g,"=buy1")?.replace(/=remove/g,"=remove1")?.replace(/&points=\d+$/g,"")
;t.setAttribute("href",e)};e.ce=t=>{new MutationObserver((t=>{t.forEach((t=>{
Array.from(t.addedNodes).forEach((t=>{
const e="LI"===t?.tagName,o=t?.firstElementChild;e&&o&&n(o)}))}))})).observe(t,{
childList:!0,subtree:!0
}),Array.from(document.querySelectorAll(".users-point-sell > li")).forEach((t=>n(t?.firstElementChild)))
}},8620:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.le=void 0
;const o=n(6185);e.le=t=>{if(!t)return
;const e=t?.parentElement,n=(0,o.j)("userdata"),i=(0,
o.m)(n?.networth?.total),r=(0,
o.m)(n?.personalstats?.networth),s=Math.round(i-r),a=s>0?"text-nstgreen":s<0?"text-nstred":"",c=`<b class='${a}'>$${(0,
o.Y)(s)}</b>`,l=(0,o.ft)({classList:"last",tabIndex:0,
ariaLabel:"Live NW: "+(0,o.Y)(i)}),d=(0,o.k)({classList:"divider",
innerHTML:"<span>Live Networth</span>"}),u=(0,o.k)({
classList:`desc ${a} font-bold`,innerText:` $${(0,o.Y)(i)} `,
style:"margin-left: 3px; margin-right: 3px;"}),m=(0,o._)("i",{
classList:"networth-info-icon",title:c,style:"margin-left: 6px;"})
;l.appendChild(d),
l.appendChild(u).insertAdjacentElement("beforeend",m),e.lastElementChild.removeAttribute("class"),
e.appendChild(l)}},8689:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0
}),e.Qt=void 0;const o=n(6185),i=t=>GM.notification(t);e.Qt=(t,e)=>{
(0,o.qt)("drugnoti")&&((t,e)=>{const n=e?.cooldowns?.drug,o=t?.cooldowns?.drug
;0!==o&&0===n&&i({title:"NST: Drug Cooldown",
text:"Your drug cooldown has expired."})})(t,e),(0,o.qt)("travnoti")&&((t,e)=>{
const n=e?.travel?.time_left,r=t?.travel?.time_left,s=e?.travel?.destination
;n<=120&&n!==r&&i({title:"NST: Travel",text:`${s} - Landing in ${(0,o.W)(n)}`})
})(t,e),(0,o.qt)("hospnoti")&&((t,e)=>{
const n=e?.states?.hospital_timestamp,r=t?.states?.hospital_timestamp;if(!(n-(0,
o.J)()<=300&&n!==r))return;const s=Math.round(n-(0,o.J)());i({
title:"NST: Hospital",text:"Out of hosp in "+(0,o.W)(s)})
})(t,e),(0,o.qt)("eventnoti")&&((t,e)=>{
const n=e?.notifications?.events,o=t?.notifications?.events;0!==n&&n!==o&&i({
title:"NST: New Event",text:`You have ${n} new event${1===n?"":"s"}.`})
})(t,e),(0,o.qt)("msgnoti")&&((t,e)=>{
const n=e?.notifications?.messages,o=t?.notifications?.messages
;0!==n&&n!==o&&i({title:"NST: New Message",
text:`You have ${n} new message${1===n?"":"s"}.`})})(t,e)}},8954:(t,e,n)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.de=e.ue=void 0
;const o=n(6185);e.ue=t=>{const{step:e}=(0,o.Et)(t)
;if("buyItem"!==e)return(0,o.Pt)({...(0,o.Et)(t)})
;const n=(0,o.I)()?.match(/(shop|market)/g)?.[0],i={market:t=>{
const e=t.replace("step=buyItem","step=buyItemConfirm");return(0,o.Pt)({
...(0,o.Et)(e),item:0})},shop:t=>{
const e=t.replace("step=buyItem","step=buyItemConfirm");return(0,o.Pt)({
...(0,o.Et)(e),item:0})},noloc:t=>(0,o.Pt)({...(0,o.Et)(t)})}
;return(i[n]??i.noloc)(t)},e.de=t=>{new MutationObserver((e=>{e.forEach((e=>{
const n=(0,o.I)()?.match(/(shop|market)/g)?.[0],i=".items > li.show-item-info"
;Array.from(e.addedNodes).forEach((e=>{if(e.querySelector&&e.querySelector(i)){
if("shop"!==n)return;Array.from(t.querySelectorAll(i)).forEach((t=>{
t.querySelector(".buy .buy-link").dataset.price=t?.querySelector(".cost")?.innerText?.replace(",","")?.match(/\d+/)?.[0]
}))}}))}))})).observe(t,{childList:!0,subtree:!0})}},8990:(t,e,n)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.me=void 0
;const o=n(6185),i=(0,o.C)("user2ID")??"";e.me=async t=>{
if(document.querySelector("#nst-target-status"))return;const e={section:"user",
select:"",objID:i},n=await(0,o.p)(e);if(!n?.status)return
;const r=n?.states?.hospital_timestamp,s=n?.last_action?.timestamp,a=n?.life?.maximum,c=n?.life?.current,l=1===n?.revivable,d=0!==Object.values(n?.basicicons).filter((t=>t.includes("Territory War"))).length,u=(0,
o.W)((0,o.J)()-s),m=(0,o.W)(r-(0,o.J)()),p=(0,o.L)({id:"nst-target-status",
classList:"nst-status-wrap"}),f=(0,o.L)({classList:"nst-status-middle"
}),h=(0,o.L)({classList:"nst-status-middle"}),b=(0,o.L)({id:"nst-status-life",
classList:"nst-status-item",innerText:`life: ${Math.floor(c/a*100)}%`
}),g=(0,o.L)({id:"nst-status-la",classList:"nst-status-item",innerText:"la: "+u
});g.setAttribute("data-time",s);const v=(0,o.L)({id:"nst-status-hosp",
classList:"nst-status-item",innerText:"hosp: "+(""===m?"OUT":m)})
;v.setAttribute("data-time",r);const w=(0,o.L)({id:"nst-status-wall",
classList:"nst-status-item",innerText:"wall: "+(d?"ON":"OFF")}),y=(0,o.L)({
id:"nst-status-rev",classList:"nst-status-item",innerText:"rev: "+(l?"ON":"OFF")
})
;f.appendChild(b),f.appendChild(w),f.appendChild(y),h.appendChild(v),h.appendChild(g),
p.appendChild(f),p.appendChild(h),t.appendChild(p),setInterval((()=>((t,e,n)=>{
const i=(0,
o.m)(t.getAttribute("data-time")),r=(0,o.m)(e.getAttribute("data-time")),s=(0,
o.W)((0,o.J)()-i),a=(0,o.W)(r-(0,o.J)())
;t.innerText="la: "+s,e.innerText="hosp: "+(""===a?"OUT":a)
;const c=document.querySelector('#defender [id^="player-health-value"')??document.querySelector('[id^="player-health-value"'),[l,d]=c.innerText.split(" / "),u=Math.floor((0,
o.m)(l)/(0,o.m)(d)*100);n.innerText=`life: ${u}%`})(g,v,b)),2e3)}},
9149:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.pe=void 0
;const o=n(6185);e.pe=t=>{if(!t)return
;const e=t.getElementsByTagName("ul")[0],n=Array.from(e.children),i={Strength:0,
Defense:0,Speed:0,Dexterity:0,Total:0};for(const t of n){
const e=t.getAttribute("aria-label");if(!e)return;const n=e.split(" ")
;if(n.length>2){
const t=n[0].replace(/:/g,""),e=(0,o.m)(n[1]),r=n[2].replace(/%/g,""),s=r.charAt(0),a=(0,
o.m)(r),c="+"==s?a/100+1:1-a/100;i[t]=Math.round(e*c),i.Total+=Math.round(e*c)}}
e.lastElementChild.removeAttribute("class");const r=(0,o.L)({
classList:"nst-box-header"});r.appendChild((0,o.k)({classList:"nst-box-title"
})).appendChild((0,o.k)({id:"nst-box-title",innerText:"Effective Stats"
})),e.appendChild(r),Object.keys(i).forEach((t=>{const n=(0,o.ft)({tabIndex:0,
ariaLabel:`${t} ${(0,o.Y)(i[t])}`}),r=(0,o.k)({classList:"divider",
innerHTML:`<span>${t}</span>`}),s=(0,o.k)({classList:"desc",
innerText:` ${(0,o.Y)(i[t])} `,style:"margin-left: 3px"})
;n.appendChild(r),n.appendChild(s),e.appendChild(n)
})),e.lastElementChild.classList.add("last")}},9355:(t,e)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.fe=void 0;const n=t=>{let e=0
;t.addEventListener("click",(()=>{if(1!==e++)return
;e=0,document.querySelector('.deposit-box input[value="DEPOSIT"], .deposit button.torn-btn, #armoury-donate .cash button').click()
;const t=document.querySelector("#armoury-donate .cash-confirm .yes")
;t&&t.click()}))};e.fe=t=>{
const e=document.querySelector(".deposit-box .input-money-symbol, .deposit .input-money-symbol")
;e&&n(e),new MutationObserver((t=>{t.forEach((t=>{
Array.from(t.addedNodes).forEach((t=>{
const e=t.querySelector&&t.querySelector(".deposit-box .input-money-symbol, .deposit .input-money-symbol, .donate .input-money-symbol")
;e&&n(e)}))}))})).observe(t,{childList:!0,subtree:!0})}},9607:(t,e)=>{
Object.defineProperty(e,"__esModule",{value:!0}),e.X=void 0,e.X=(t,e,n=!1)=>{
const o=document?.querySelector(e)
;if(o&&(console.log("noobs "+e),t(o),!n))return;let i=!1
;const r=new MutationObserver((o=>{o.forEach((o=>{if(i)return
;const s=Array.from(o.addedNodes);for(const o of s){
if(!o?.querySelector)continue
;const s=o?.querySelector(e),a=o?.parentElement?.querySelector(e),c=s||a||!1
;if(c&&(console.log("obs "+e),t(c),!n)){i=!0,r.disconnect();break}}}))}))
;r.observe(document.documentElement,{childList:!0,subtree:!0})}}},e={}
;function n(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={id:o,
exports:{}};return t[o].call(r.exports,r,r.exports,n),r.exports}n.n=t=>{
var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{
for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,
get:e[o]})},n.o=(t,e)=>({}.hasOwnProperty.call(t,e)),n.r=t=>{
"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{
value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})
},n.nc=void 0,(()=>{n(4893)
;const t=n(6185),e=n(2268),o=n(9607),i=n(276),r=n(1913),s=n(5661),a=n(4051),c=n(3980),l=n(714),d=n(1108),u=n(9149),m=n(7188),p=n(7716),f=n(9355),h=n(2718),b=n(5689),g=n(1379),v=n(8620),w=n(8954),y=n(3424),x=n(763),k=n(3243),_=n(8601),L=n(6215),O=n(3840),M=n(2957),j=n(8292),T=n(263),D=n(291),I=n(4538),S=n(1549),P=n(2470),E=n(1717),A=n(8527),q=n(8990),$=n(8257),z=n(6703),C=n(7673),N=n(7298),R=n(1896),U=n(2585),B=n(3403),F={
home:()=>{
(0,t.qt)("livenetworth")&&(0,o.X)(v.le,'ul.info-cont-wrap [aria-label^="Networth"]'),
(0,t.qt)("effectivestats")&&(0,o.X)(u.pe,".battle")},abro:()=>{
(0,t.qt)("maxbuyabroad")&&(0,o.X)(y.Lt,"body")},trav:()=>{}},H={amarket:()=>{(0,
t.qt)("rwbonus")&&(0,o.X)(D.v,"body")},bazaar:()=>{
(0,t.qt)("rwbonus")&&(0,o.X)(D.v,"body"),
(0,t.qt)("bazaarvalue")&&(0,o.X)(r.V,"#bazaarRoot .wrapper")},city:()=>{},
companies:()=>{},displaycase:()=>{},faction:()=>{},gym:()=>{
(0,t.qt)("specialgym")&&((0,
o.X)($.re,"#gymroot"),(0,t.Jt)($.ie,"getInitialGymInfo"),(0,t.Jt)($.ie,"train"))
},index:()=>{},item:()=>{
(0,t.qt)("equipnoconfirm")&&(0,t.Yt)(p.oe),(0,t.qt)("rwbonus")&&(0,
o.X)(D.v,"body")},imarket:()=>{(0,t.qt)("marketnoconfirm")&&(0,t.Yt)(w.ue)},
loader:()=>{
(0,t.qt)("intercept")&&"attack"===(0,t.Xt)()&&(0,t.Jt)(P.ht,"attackData")},
page:()=>{
(0,t.qt)("rrtimeout")&&"russianRoulette"===(0,t.Xt)()&&(0,t.Jt)(R.K,"russianRouletteData")
},pmarket:()=>{},profiles:()=>{},search:()=>{},trade:()=>{},all:()=>{
(0,t.qt)("leftalign")&&(0,
g.q)(),(0,t.qt)("minilastaction")&&(0,t.Jt)(E.G,"UserMiniProfile")},
nopager:()=>{}},G={amarket:()=>{},bazaar:()=>{
(0,t.qt)("bazaarautoprice")&&(0,o.X)(i.l,"body")},city:()=>{
(0,t.qt)()&&(0,o.X)(T.t,"body"),
(0,t.qt)("cityfinds")&&(0,o.X)(s.Dt,"#map .leaflet-marker-pane")},
companies:()=>{
(0,t.qt)("ezmoneydeposit")&&(0,o.X)(f.fe,"body"),(0,t.qt)("employeela")&&(0,
o.X)(m.te,".manage-company"),
(0,t.qt)("companyrestock")&&/stock/.test((0,t.I)())&&(0,o.X)(a.jt,"body")},
displaycase:()=>{
(0,t.qt)("displaycaseitemid")&&(0,o.X)(l.D,"ul.dc-list"),(0,t.qt)("rwbonus")&&(0,
o.X)(D.v,"ul.display-cabinet")},factions:()=>{
(0,t.qt)("ezmoneydeposit")&&(0,o.X)(f.fe,"body"),
(0,t.qt)(t.qfs)&&(0,o.X)(h.gt,"#faction-armoury")},gym:()=>{
(0,t.qt)("")&&(0,o.X)(z.Zt,'#gymroot ul[class*="properties"] [class*="strength"]')
},index:()=>{F[(0,t.At)()]()},item:()=>{
(0,t.qt)("removeuglyimage")&&(0,o.X)(j.se,'[class^="itemPreviewWrapper"]',!0),
(0,
t.qt)("easyloadoutequip")&&(0,o.X)(d.P,'ul[class^="slots"]'),(0,t.qt)(t.qis)&&(0,
o.X)(L.Vt,"div.items-wrap")},imarket:()=>{
(0,t.qt)("marketnoconfirm")&&(0,o.X)(w.de,"body")},jailview:()=>{
(0,t.qt)("quickjail")&&(0,o.X)(O.Ot,"ul.users-list")},loader:()=>{
(0,t.qt)("missionhelper")&&"missions"===(0,
t.Xt)()&&(0,o.X)(x.S,".giver-cont-wrap"),
(0,t.qt)("fighterino")&&"attack"===(0,t.Xt)()&&(0,
o.X)(S.$,'div[class^="playersModelWrap"]'),
(0,t.qt)("targetstatus")&&"attack"===(0,
t.Xt)()&&(0,o.X)(q.me,'[class^="playerWindow"] [class*="defender"]')},page:()=>{
F[(0,
t.At)()](),(0,t.qt)("pokername")&&"holdem"===(0,t.Xt)()&&(0,o.X)(C.ne,"div[class^=players]")
},pmarket:()=>{
(0,t.qt)("pointsnoconfirm")&&(0,o.X)(_.ce,".users-point-sell"),(0,
t.qt)("pointsmuglight")&&(0,o.X)(k.xt,".users-point-sell")},profiles:()=>{
(0,t.qt)("idtoname")&&(0,
o.X)(b.It,".user-info-value"),(0,t.qt)("hidemedals")&&(0,
o.X)(B._t,".medals-wrapper"),
(0,t.qt)("statspies")&&(0,o.X)(A.ae,".user-info-value")},properties:()=>{
(0,t.qt)("ezmoneydeposit")&&(0,o.X)(f.fe,"body")},shops:()=>{
(0,t.qt)("cshopmaxbuy")&&(0,o.X)(c.Mt,"body")},trade:()=>{
(0,t.qt)("tradevalue")&&(0,
o.X)(I.Tt,"#trade-container .trade-cont"),(0,t.qt)("quickghost")&&(0,
o.X)(U.bt,"#trade-container .trade-cont .user.left")},war:()=>{
(0,t.qt)("warvalue")&&"rankreport"===(0,
t.Wt)()&&(0,o.X)(N.ee,'li[class^="members-bonus-row"]')},all:()=>{
(0,t.qt)("refillreminder")&&(0,o.X)(M.yt,'[class*="bar"][class*="energy"]')},
nopager:()=>{}},W={loading:async()=>{
(0,o.X)(e.Z,"#sidebar"),(0,t.it)()&&(document.onreadystatechange=()=>W[document.readyState](),
(H.all??H.nopager)(),(H[(0,t.O)()]??H.nopager)(),(0,t.$t)())},interactive:()=>{
(0,t.it)()&&((G.all??G.nopager)(),(G[(0,t.O)()]??G.nopager)())},complete:()=>{
(0,t.it)()}};W[document.readyState]()})()})();