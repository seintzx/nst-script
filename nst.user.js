// ==UserScript==
// @name         nst
// @namespace    seintz.torn.nst
// @version      2.3.1
// @author       seintz [2460991]
// @description  useful scripts packed as one
// @license      GPL-3.0-or-later
// @icon         https://factiontags.torn.com/11581-56425.png
// @source       https://github.com/seintzx/nst-script/raw/main/nst.user.js
// @downloadURL  https://github.com/seintzx/nst-script/raw/main/nst.user.js
// @updateURL    https://github.com/seintzx/nst-script/raw/main/nst.user.js
// @match        https://www.torn.com/*
// @connect      torn.com
// @connect      api.torn.com
// @connect      tornstats.com
// @connect      torn.seintz.com
// @grant        GM.notification
// @grant        GM.xmlHttpRequest
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

(function () {
	'use strict';

	!function(){function t(t){
	return t.replace(/[ ]*Blood Bag[ :]*/g,"").replace(/[ ]*Bottle of[ :]*/g,"").replace(/[ ]*First Aid[ :]*/g,"").replace(/[ ]*Can of[ :]*/g,"").replace(/[ ]*Grenade[ :]*/g,"").replace(/[ ]*Lawyer's Business Card[ :]*/g,"LBC").replace(/[ ]*Feathery Hotel Coupon[ :]*/g,"FHC").trim()
	}function n(t){return +(t+"").replace(/[^\d]/g,"")||0}function e(t){
	return Math.round(+t).toLocaleString("en-US")}function o(t){
	return t.toLowerCase().replace(/ /g,"-")}function i(t){
	return t.toLowerCase().replace(/ /g,"")}function r(t){
	return t.toLowerCase().replace(/^nst-/,"").replace(/-/g,"")}function a(t){
	return t.toString(16)}function s(t){
	const n=Math.floor(t/3600),e=Math.floor(t%3600/60),o=t%60
	;return [n>0?n+"h":"",e>0?e+"m":"",o>0?o+"s":""].filter(Boolean).join(" ").trim()
	}function c(t){var n,e
	;const o=(null==(n=t.match(RegExp("(?<=>)[\\w\\s-]+(?=<)")))?void 0:n[0])??"FAIL",i=(null==(e=t.match(/\d+(?=(%| turns))/))?void 0:e[0])??"XX",r={
	Impregnable:"melee",Impenetrable:"guns",Insurmountable:"dune",
	Invulnerable:"delta",Imperviable:"life",Immutable:"def",Irrepressible:"dex",
	Impassable:"EOD"}[o]??o;return `${i}${/disarm|disable/i.test(o)?"T":"%"} ${r}`}
	function l(){try{const t=localStorage.getItem("nstdata")
	;return t?JSON.parse(t):{}}catch(t){
	return console.error("Failed to read nstdata:",t),{}}}function u(t){try{
	localStorage.setItem("nstdata",JSON.stringify(t));}catch(n){
	console.error("Failed to write nstdata:",n);}}function d(t){
	return !t||0===Object.keys(t).length}function f(t=""){return ""===t?l():l()[t]}
	function p(t){const n=l();let e=false
	;for(const[o,i]of Object.entries(t))n[o]!==i&&(n[o]=i,e=true);e&&u(n);}
	function m(t){try{localStorage.removeItem(t);}catch(n){
	console.error("Failed to remove data:",n);}}const h=new Map
	;function v(t,n,e=250){return (...o)=>{const i=n??"__default__",r=h.get(i)
	;r&&clearTimeout(r);const a=window.setTimeout(()=>t(...o),e);h.set(i,a);}}
	function g(t){return t.length>1?t.sort().join(", "):t[0]||""}
	const b="Quick Items",y=o(b),w=i(b),k="Quick Faction",x=o(k),L=i(k),S="bars,basic,battlestats,cooldowns,education,icons,money,networth,newevents,newmessages,notifications,perks,personalstats,profile,refills,timestamp,travel",_={
	company:g(["employees"]),market:g(["bazaar"]),torn:g(["items"]),user:g([...S])
	},T='<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9" /></svg>',M='<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6" /></svg>',I={
	apikey:"",armfbonuses:"",armfweapons:"",assaperk:false,aucfbonuses:"",
	aucfweapons:"",easyoutcome:"leave",easytemp:false,easyweapon:"primary",
	executeperk:false,hidecityitems:true,hold:false,jailscore:21e3,mugperc:.05,
	mugthreshold:4e6,outcome:"leave",quickbail:false,quickbust:false,quickfaction:{},
	quickitems:{},reloadone:false,reloadtwo:false,spgymone:"elites",spgymtwo:"frontline",
	temp:false,tsapikey:"",tscompare:[],userdata:{},weapon:{primary:0,secondary:1,
	melee:2}};function D(t){const n=O("style",{})
	;n.textContent='*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.nst-hide-medal{display:none!important}.nst-left-align .d .container,.nst-left-align .d .\\!container{margin-left:1.25rem!important;justify-content:flex-start!important}.nst-left-align .d.without-sidebar .container,.nst-left-align .d.without-sidebar .content-wrapper,.nst-left-align .d .anonymous .content-wrapper,.nst-left-align .d.without-sidebar .\\!container{margin-left:1.25rem}.nst-trade-value{height:1.5rem;text-align:center;font-size:.875rem;line-height:1.5rem;--tw-text-opacity: 1;color:rgb(108 173 43 / var(--tw-text-opacity))}.nst-city-item{left:-1.25rem!important;top:-1.25rem!important;z-index:999!important;box-sizing:border-box!important;display:block!important;height:2.5rem!important;width:2.5rem!important;border-radius:9999px!important;border-width:1px!important;border-style:solid!important;--tw-border-opacity: 1 !important;border-color:rgb(0 0 0 / var(--tw-border-opacity))!important;background-color:#124707cc!important;padding:.75rem!important;--tw-shadow: 0 25px 50px -12px rgb(0 0 0 / .25) !important;--tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color) !important;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)!important}.nst-city-item:hover{left:-2.5rem!important;top:-2.5rem!important;z-index:999!important;height:10rem!important;width:10rem!important;--tw-bg-opacity: 1 !important;background-color:rgb(0 0 0 / var(--tw-bg-opacity))!important;padding:2.25rem!important}.nst-findsworth{margin:.25rem;padding:.25rem;font-weight:700}.nst-findslist{margin:.25rem;padding:.25rem;text-align:left}.nst-status-wrap{z-index:10;display:flex;flex-direction:column;flex-wrap:wrap;align-content:flex-start;align-items:flex-start;justify-content:center}.nst-status-item{text-align:center}.nst-lastaction{padding:.25rem}.nst-spgym-sel,.nst-spgym-msg{margin:.25rem;padding:.25rem}.nst-steadfast{margin:.25rem;padding:.25rem;text-align:center}.nst-pokername{color:var(--holdem-text-color-main)}.nst-ghost-wrap{display:flex;flex-direction:column;flex-wrap:wrap;align-content:center;align-items:center;justify-content:center;padding:.25rem}.nst-rw-show{display:flex!important;flex-direction:row!important;flex-wrap:nowrap!important;align-content:center!important;align-items:center!important;justify-content:flex-start!important}.nst-rw-show-wrap{margin-left:.5rem;display:flex;flex-direction:row;flex-wrap:nowrap}.nst-rw-single{margin-right:.5rem;border-radius:.5rem;border-width:2px;border-style:solid;--tw-border-opacity: 1;border-color:rgb(34 34 34 / var(--tw-border-opacity));padding:.2rem;font-size:.7rem;line-height:.6rem}.nst-rw-bazaar{top:.25rem!important;float:left!important;display:inline-block!important;white-space:nowrap!important;padding-right:0!important;padding-left:.25rem!important}.nst-rw-display{right:0!important;top:-2.5rem!important;float:left!important;white-space:nowrap!important}.nst-icon{cursor:pointer!important;background-image:url(https://factiontags.torn.com/11581-56425.png)!important;background-position:center!important}.nst-logo{font-size:1.5rem;line-height:2rem;font-weight:700;--tw-text-opacity: 1;color:rgb(66 140 165 / var(--tw-text-opacity))}.nst-menu{margin-left:2rem;margin-top:2rem;margin-bottom:10rem;flex:1 1 0%}.nst-menu-wrap{border-radius:.5rem}.nst-menu-title{position:relative;top:0;left:0;display:flex;height:2rem;flex-wrap:wrap;align-content:center;align-items:center;border-top-left-radius:.5rem;border-top-right-radius:.5rem;border-bottom-width:1px;border-style:solid;--tw-border-opacity: 1;border-bottom-color:rgb(0 0 0 / var(--tw-border-opacity));background-color:var(--default-bg-panel-color);padding:.25rem .75rem;font-size:.875rem;line-height:2rem;font-weight:700;color:var(--default-color)}.nst-menu-body{display:flex;border-bottom-right-radius:.5rem;border-bottom-left-radius:.5rem;background-color:var(--default-bg-panel-color);line-height:.75rem}.nst-ul-main{float:none;display:table-cell;list-style-type:none;border-right-width:1px;border-style:solid;--tw-border-opacity: 1;border-right-color:rgb(0 0 0 / var(--tw-border-opacity));vertical-align:top}.nst-menu-page{position:relative;display:block;width:9rem;border-bottom-width:1px;border-style:solid;--tw-border-opacity: 1;border-bottom-color:rgb(0 0 0 / var(--tw-border-opacity));background-color:var(--default-bg-panel-color);padding:.5rem;font-weight:700;color:var(--default-color)}.nst-menu-page:hover{background-color:var(--default-bg-panel-active-color)}.nst-menu-sel{background-color:var(--default-bg-panel-active-color)!important}.nst-menu-item{float:none;display:block;width:100%;vertical-align:top}.nst-message{margin:.5rem;padding:.25rem;--tw-text-opacity: 1;color:rgb(185 70 45 / var(--tw-text-opacity))}.nst-api-wrap{margin:.5rem;display:flex;flex-direction:column;flex-wrap:wrap;align-content:center;align-items:center;justify-content:center;padding:.25rem}.nst-block-title{margin:.5rem!important}.nst-block{margin:.5rem;display:flex;flex-direction:column;flex-wrap:wrap;align-content:center;align-items:center;justify-content:center;border-bottom-width:1px;border-style:solid;--tw-border-opacity: 1;border-bottom-color:rgb(249 250 251 / var(--tw-border-opacity));padding:.5rem}.nst-script-block{margin:.5rem;display:flex;flex-direction:column;flex-wrap:wrap;align-content:flex-start;align-items:flex-start;justify-content:center;padding:.5rem}.nst-outcome{display:flex;flex-direction:row;flex-wrap:wrap;align-content:center;align-items:center;justify-content:center}.list-group-item{margin:.5rem;border-width:1px;border-style:solid;--tw-border-opacity: 1;border-color:rgb(107 114 128 / var(--tw-border-opacity));padding:.5rem 1rem;text-align:center;font-size:.875rem;line-height:1.25rem}.nst-tos-title{margin-top:.75rem!important;margin-bottom:1.25rem!important;text-align:center!important;font-size:1.5rem!important;line-height:2rem!important;font-weight:700!important}.nst-box{margin-top:.75rem;margin-bottom:.75rem;box-sizing:border-box;display:flex;flex-direction:column}.nst-box-header{display:flex;border-top-left-radius:.5rem;border-top-right-radius:.5rem;border-bottom-width:0px;--tw-bg-opacity: 1;background-color:rgb(0 0 0 / var(--tw-bg-opacity));padding:.25rem .75rem;font-size:1.125rem;line-height:1.75rem;--tw-text-opacity: 1;color:rgb(66 140 165 / var(--tw-text-opacity));--tw-shadow: inset 0 2px 4px 0 rgb(0 0 0 / .05);--tw-shadow-colored: inset 0 2px 4px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}#nst-arrow{display:flex;height:1rem;width:1rem}.nst-box-title{flex-grow:1;font-size:.875rem;font-weight:700;line-height:1rem;--tw-text-opacity: 1;color:rgb(66 140 165 / var(--tw-text-opacity))}.nst-box-content{border-bottom-right-radius:.5rem;border-bottom-left-radius:.5rem;border-width:1px;border-top-width:0px;border-style:solid;--tw-border-opacity: 1;border-color:rgb(0 0 0 / var(--tw-border-opacity));background-color:var(--default-bg-panel-color);color:var(--default-color)}.nst-box-content>p{margin:.25rem;text-align:center}.nst-box-row{margin:.25rem;display:flex;flex-direction:row;flex-wrap:wrap;align-content:center;align-items:flex-start;justify-content:space-evenly;text-align:center}.nst-box-column{margin:.25rem;display:flex;flex:1 1 0%;flex-direction:column;flex-wrap:wrap;align-content:center;align-items:center;justify-content:center;text-align:center}.nst-box-item{margin:.125rem .25rem;display:flex;align-content:flex-start;align-items:center;font-size:.875rem;line-height:1.25rem}.nst-box-item>input{margin-top:0;margin-bottom:0;margin-left:.25rem;margin-right:.25rem}.nst-box-button{position:relative;display:flex;width:100%;flex-direction:column;flex-wrap:wrap;align-items:center;padding:.25rem;color:var(--default-color)}.nst-box-close{position:absolute;top:0;right:.25rem;cursor:pointer;font-size:.75rem;line-height:1rem}.nst-box-img{vertical-align:middle}.nst-box-btn-div{margin:.25rem;display:flex;flex:0 0 14%;justify-content:center;align-self:stretch;border-radius:.5rem;border-width:1px;border-style:solid;--tw-border-opacity: 1;border-color:rgb(34 34 34 / var(--tw-border-opacity));padding:0}.nst-box-btn-div:hover{background-color:var(--default-bg-panel-active-color)}#nst-item-resp{justify-content:center}.nst-input{margin:0;box-sizing:border-box;height:1.5rem;border-radius:.25rem;border-width:1px;border-style:solid;--tw-border-opacity: 1;border-color:rgb(0 0 0 / var(--tw-border-opacity));background-color:var(--default-bg-panel-active-color);text-align:center;font-size:.875rem;line-height:1.25rem;font-weight:500;color:var(--default-color)}.nst-table{box-sizing:border-box;width:100%;border-width:2px;border-style:solid;--tw-border-opacity: 1;border-color:rgb(31 41 55 / var(--tw-border-opacity))}.nst-table-row{text-align:left}.nst-table-cell-head{font-size:.875rem;line-height:1.25rem;font-weight:700}.nst-table-cell{box-sizing:border-box!important;border-width:1px!important;border-style:solid!important;--tw-border-opacity: 1 !important;border-color:rgb(31 41 55 / var(--tw-border-opacity))!important;padding:.25rem!important;font-size:.75rem!important;line-height:1rem!important}.absolute{position:absolute}.m-2{margin:.5rem}.block{display:block}.inline{display:inline}.\\!table{display:table!important}.table{display:table}.hidden{display:none}.h-4{height:1rem}.w-4{width:1rem}.resize{resize:both}.bg-nstmain{--tw-bg-opacity: 1;background-color:rgb(66 140 165 / var(--tw-bg-opacity))}.bg-nstred{--tw-bg-opacity: 1;background-color:rgb(185 70 45 / var(--tw-bg-opacity))}.bg-nstyellow{--tw-bg-opacity: 1;background-color:rgb(252 196 25 / var(--tw-bg-opacity))}.text-center{text-align:center}.text-base{font-size:1rem;line-height:1.5rem}.text-sm{font-size:.875rem;line-height:1.25rem}.font-bold{font-weight:700}.text-black{--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity))}.text-nstabandon{--tw-text-opacity: 1;color:rgb(96 96 96 / var(--tw-text-opacity))}.text-nstburn{--tw-text-opacity: 1;color:rgb(221 74 34 / var(--tw-text-opacity))}.text-nstbury{--tw-text-opacity: 1;color:rgb(211 113 8 / var(--tw-text-opacity))}.text-nstdissolve{--tw-text-opacity: 1;color:rgb(52 144 59 / var(--tw-text-opacity))}.text-nstgreen{--tw-text-opacity: 1;color:rgb(108 173 43 / var(--tw-text-opacity))}.text-nstmain{--tw-text-opacity: 1;color:rgb(66 140 165 / var(--tw-text-opacity))}.text-nstred{--tw-text-opacity: 1;color:rgb(185 70 45 / var(--tw-text-opacity))}.text-nstsink{--tw-text-opacity: 1;color:rgb(29 148 200 / var(--tw-text-opacity))}.text-nsttorntext{color:var(--default-color)}.text-nstyellow{--tw-text-opacity: 1;color:rgb(252 196 25 / var(--tw-text-opacity))}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}:root{--nst-hide-fact-desc: block;--nst-hide-war-graph: block}input[type=number]::-webkit-outer-spin-button,input[type=number]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-webkit-appearance:textfield;appearance:textfield;-moz-appearance:textfield}.f-war-list .descriptions .faction-war-info,.f-war-list .descriptions .faction-names{display:var(--nst-hide-war-graph)!important}#faction-main [data-title^=announcement],#faction-main .announcement,.faction-title,.faction-description{display:var(--nst-hide-fact-desc)!important}[aria-label="Reset loadout"],[class*=airspaceScene],[class*=randomFactWrapper]{display:none!important}',
	t.appendChild(n);}function O(t,n={}){const e=document.createElement(t)
	;for(const[o,i]of Object.entries(n))"classList"===o&&"string"==typeof i?i.split(" ").forEach(t=>t&&e.classList.add(t)):"style"===o&&"string"==typeof i?e.setAttribute("style",i):o.startsWith("on")&&"function"==typeof i?e.addEventListener(o.slice(2),i):o in e&&e[o]!==i?e[o]=i:o in e||e.setAttribute(o,i+"")
	;return e}function E(t={}){return O("a",t)}function P(t={}){return O("button",t)
	}function j(t={}){return O("div",t)}function $(t={}){return O("img",t)}
	function A(t={}){return O("input",t)}function q(t={}){return O("label",t)}
	function z(t={}){return O("li",t)}function N(t={}){return O("p",t)}
	function C(t={}){return O("span",t)}function H(t){var n
	;const e=t.target.closest(".nst-box-header"),o=null==e?void 0:e.nextElementSibling
	;if(!o)return
	;const r=i((null==(n=e.querySelector("#nst-box-title"))?void 0:n.innerText)??"")+"Folded",a=o.classList.toggle("hidden")
	;e.querySelector("#nst-arrow").innerHTML=a?M:T,p({[r]:a});}function F(t){
	const{elem:n,title:e,cback:r}=t,a=o(e),s=i(e),c=j({classList:"nst-box-item"
	}),l=f(s)??"",u=A({id:"nst-"+a,type:"text",classList:"nst-input",value:l,
	placeholder:s,oninput:t=>{const n=t.target.value.trim();n!==l&&(p({[s]:n}),r());}
	});return c.appendChild(u),n.appendChild(c),c}function R(t){
	const{elem:e,title:r,cback:a}=t,s=o(r),c=i(r);let l=+(f(c)??0);const u=j({
	classList:"nst-box-item"}),d=A({id:"nst-"+s,type:"number",classList:"nst-input",
	value:l,placeholder:c,min:0,oninput:t=>{const e=n(t.target.value)
	;e!==l&&(l=e,p({[c]:e}),a());}});return u.appendChild(d),e.appendChild(u),u}
	function B(t,n,e="",o){const i=r(null==t?void 0:t.id),a=j({
	classList:"nst-box-item"}),s=!!f(i),c=A({...t,type:"checkbox",checked:s,
	onchange:t=>{const n=t.target,e=r(null==n?void 0:n.id);!!f(e)!==n.checked&&(p({
	[e]:n.checked}),o&&o(t));}}),l=q({innerText:n,htmlFor:null==t?void 0:t.id,title:e
	});return a.appendChild(c),a.appendChild(l),a}function U(t,n){
	const e=t.replace(/easy-/g,""),o=f(t.includes("easy-")?"easy"+n.replace(/easy-/g,""):n)+"",i=j({
	classList:"nst-box-item"}),r=A({id:t,type:"radio",name:n,value:t,checked:o===e
	}),a=q({innerText:e,htmlFor:t,classList:""})
	;return i.appendChild(r),i.appendChild(a),i}function G(t){
	const{element:n,title:e}=t;if(!n)return
	;const r=o(e),a=!!f(i(e)+"Folded"),s=a?"nst-box-content hidden":"nst-box-content",c=j({
	classList:"nst-box"}),l=function(t){const n=j({classList:"nst-box-header",
	onclick:H}),e=C({classList:"nst-box-title"});return e.appendChild(C({
	id:"nst-box-title",innerText:t})),n.appendChild(e),n.appendChild(j({
	id:"nst-arrow"})),n}(e);l.querySelector("#nst-arrow").innerHTML=a?M:T
	;const u=j({classList:s}),d=document.querySelector("#nst-"+r);if(d)return d
	;const p=j({id:"nst-"+r,classList:"nst-box-row"})
	;return u.appendChild(p),c.appendChild(l),
	c.appendChild(u),n.insertAdjacentElement("beforebegin",c),p}function W(t,n){
	t.value=""+n,t.dispatchEvent(new Event("input",{bubbles:true})),t.select();}
	const X=v(K,"armoryfilter"),J={box:function(t){const n=G({title:"armory filter",
	element:t}),e=j({classList:"nst-box-column"});F({elem:e,title:"armf weapons",
	cback:()=>X(t)}),F({elem:e,title:"armf bonuses",cback:()=>X(t)
	}),null==n||n.appendChild(e);},item:K,nopager:()=>{}};function K(t){
	const n=(f("armfweapons")??"")+"",e=(f("armfbonuses")??"")+"",o=n?RegExp(n,"g"):null,i=e?RegExp(e,"g"):null
	;t.querySelectorAll("div.name").forEach(t=>function(t,n,e){
	const o=t.parentElement;if(!o)return
	;const i=t.innerText.toLowerCase(),r=o.querySelector("ul.bonuses"),a=(null==r?void 0:r.innerHTML.toLowerCase())??"",s=!n||n.test(i)||n.test(a),c=!e||e.test(i)||e.test(a),l=s&&c,u=o.classList.contains("hidden")
	;l&&u?o.classList.remove("hidden"):l||u||o.classList.add("hidden");}(t,o,i));}
	function Y(t){new MutationObserver(t=>{var n;for(const e of t){
	const t=Array.from(e.addedNodes);if(t.length)for(const e of t){
	if(!(e instanceof HTMLElement))continue
	;const t="faction-armoury-tabs"===e.id,o=(null==(n=e.parentElement)?void 0:n.id)??"",i=/armoury-(weapons|armour)/g.test(o)&&"UL"===e.tagName&&e.classList.contains("item-list")
	;J[t?"box":i?"item":"nopager"](e);}}}).observe(t,{childList:true,subtree:true});}
	const Q={armoryfilter:"#faction-armoury",auctionfilter:"#auction-house-tabs",
	bazaarautoprice:"body",bazaarvalue:"#bazaarRoot .wrapper",
	cityfinds:"#map .leaflet-marker-pane",companyrestock:"body",cshopmaxbuy:"body",
	displaycaseitemid:"ul.dc-list",easyfight:"body",
	easyloadoutequip:'ul[class^="slots"]',effectivebs:".battle",
	employeela:".manage-company",equipnoconfirm:"actionForm",ezmoneydeposit:"body",
	fighterino:'div[class^="playersModelWrap"]',
	gymsteadfast:'#gymroot ul[class*="properties"] [class*="strength"]',
	hidemedals:".medals-wrapper",idtoname:".user-info-value",
	livenetworth:'ul.info-cont-wrap [aria-label^="Networth"]',maxbuyabroad:"body",
	missionhelper:".giver-cont-wrap",pointsmuglight:".users-point-sell",
	pointsnoconfirm:".users-point-sell",pokername:"div[class^=players]",
	quickfaction:"#faction-armoury",
	quickghost:"#trade-container .trade-cont .user.left",quickitem:"div.items-wrap",
	quickjail:"ul.users-list",refillreminder:'[class*="bar"][class*="energy"]',
	removeuglyimage:"canvas",renameterritory:"body",
	rwbonusbazaar:"body",
	rwbonusdisplay:"ul.display-cabinet",rwbonusfaction:"#faction-armoury",
	rwbonusitems:"div.items-wrap",specialgym:"#gymroot",
	statspies:".user-info-value",
	targetstatus:'[class^="playerWindow"] [class*="defender"]',
	tradevalue:"#trade-container .trade-cont",
	warvalue:'li[class^="members-bonus-row"]',
	disposalhighlight:'div[class^="virtualList"]',
	depositDollaSel:".deposit-box .input-money-symbol, .deposit .input-money-symbol",
	depositMutSelector:".deposit-box .input-money-symbol, .deposit .input-money-symbol, .donate .input-money-symbol",
	depsoitHandlerSelector:'.deposit-box input[value="DEPOSIT"], .deposit button.torn-btn, #armoury-donate .cash button',
	depositArmorySelector:"#armoury-donate .cash-confirm .yes",
	pokerNameSelector:"p[class^=name]",
	interceptSelector:'ul[class^="participants"] div[class^="playerWrap"] > span[class^="playername"]',
	minilastaction:'#profile-mini-root [class*="profile-mini-_userProfileWrapper"]',
	primary:"#weapon_main",secondary:"#weapon_second",melee:"#weapon_melee",
	temp:"#weapon_temp"}
	;var V=(t=>(t.All="all",t.Auction="amarket",t.Bazaar="bazaar",
	t.City="city",t.Company="companies",
	t.DisplayCase="displaycase",t.Faction="factions",
	t.Fight="fight",t.Gym="gym",t.Home="index",
	t.Items="item",t.Jail="jailview",t.Loader="loader",
	t.Market="imarket",t.Notification="notification",
	t.Page="page",t.Points="pmarket",t.Profile="profiles",t.Properties="properties",
	t.Search="search",
	t.Shops="shops",t.Trade="trade",t.War="war",t))(V||{}),Z=(t=>(t.All="all",
	t.Auction="auction",
	t.Bazaar="bazaar",t.Casino="casino",t.City="city",t.Company="company",
	t.Crime="crime",t.DisplayCase="displaycase",t.Faction="faction",t.Fight="fight",
	t.Gym="gym",
	t.Home="home",t.Items="item",t.Jail="jail",t.Loader="loader",t.Market="market",
	t.Mission="mission",
	t.Notification="notification",t.Page="page",t.Points="points",
	t.Profile="profiles",
	t.Properties="properties",t.Search="search",t.Shops="shops",
	t.Trade="trade",t.War="war",
	t))(Z||{}),tt=(t=>(t.tornstats="https://www.tornstats.com",
	t.tornapisetting="https://www.torn.com/preferences.php#tab=api",
	t.tornapicustom="https://www.torn.com/preferences.php#tab=api?&step=addNewKey&title=nst&type=3",
	t))(tt||{});function nt(t,n,e=false){
	const o=(t=document)=>t.querySelector(n),i=e=>{
	console.debug("[nst] Element found: "+n),t(e);},r=o();if(r&&(i(r),!e))return
	;const a=new MutationObserver(t=>{var r
	;for(const s of t)for(const t of Array.from(s.addedNodes)){
	if(!(t instanceof Element))continue;if(null==(r=t.matches)?void 0:r.call(t,n)){
	if(i(t),!e)return void a.disconnect();continue}const s=o(t)
	;if(s&&(i(s),!e))return void a.disconnect()}})
	;a.observe(document.documentElement,{childList:true,subtree:true});}const et=[{
	key:"armoryfilter",name:"armory filter",
	description:"filter items in faction armory",onpage:V.Faction,
	category:Z.Faction,enabled:false,readyStates:["interactive"],
	run:()=>nt(Y,Q.armoryfilter)}],ot=v(it,"auctionfilter");function it(t){
	const n=(f("aucfweapons")??"")+"",e=(f("aucfbonuses")??"")+"",o=n?RegExp(n,"g"):null,i=e?RegExp(e,"g"):null
	;t.querySelectorAll("div.item-cont-wrap").forEach(t=>function(t,n,e){var o
	;const i=t.parentElement;if(!i)return
	;const r=t.querySelector("span.title"),a=t.querySelector("div.item-bonuses")
	;if(!r||!a)return;const s=function(t,n,e,o){
	const i=!e||e.test(t)||e.test(n),r=!o||o.test(t)||o.test(n);return i&&r
	}(r.innerText.toLowerCase(),(null==(o=a.innerHTML)?void 0:o.toLowerCase())??"",n,e)
	;i.classList.toggle("hidden",!s);}(t,o,i));}function rt(t){!function(t){
	const n=G({title:"auction filter",element:t}),e=j({classList:"nst-box-column"})
	;F({elem:e,title:"aucf weapons",cback:()=>ot(t)}),F({elem:e,
	title:"aucf bonuses",cback:()=>ot(t)}),null==n||n.appendChild(e);
	}(t),function(t){new MutationObserver(t=>{
	for(const n of t)for(const t of Array.from(n.addedNodes))t instanceof HTMLElement&&"LI"===t.tagName&&t.firstElementChild instanceof HTMLElement&&t.firstElementChild.classList.contains("item-cont-wrap")&&it(t);
	}).observe(t,{childList:true,subtree:true});}(t);}const at=[{key:"auctionfilter",
	name:"auction filter",description:"filter items in auction",onpage:V.Auction,
	category:Z.Auction,enabled:false,readyStates:["loading"],
	run:()=>nt(rt,Q.auctionfilter)}];function st(t,n,e){
	qa.filter(e=>function(t,n,e){
	const o=t.onpage===n||"all"===t.onpage,i=t.readyStates.includes(e),r=bt(t.key),a=!t.condition||t.condition()
	;return o&&i&&r&&a}(e,t,n)).forEach(t=>t.run(e));}function ct(t){
	GM.notification(t);}function lt(t){
	return Object.fromEntries(t.split("&").map(t=>{const[n,e]=t.split("=")
	;return [n,e]}))}function ut(){return void 0!==window.flutter_inappwebview}
	function dt(){var t
	;return (null==(t=document.cookie.split("; ").find(t=>t.startsWith("rfc_v=")))?void 0:t.split("=")[1])??""
	}function ft(t){return new URLSearchParams(window.location.search).get(t)}
	function pt(){var t
	;return null==(t=window.location.search.match(/\?sid=(\w+)/))?void 0:t[1]}
	function mt(){return window.location.hash.replace(/^#\/(?:\w+=)?/,"")}
	function ht(){return Math.round(Date.now()/1e3)}function vt(t={}){var n
	;const e=d(t)?f("userdata"):t;return {t:null==e?void 0:e.player_id,
	o:null==(n=null==e?void 0:e.faction)?void 0:n.faction_id}}function gt(t={}){
	if(16!==(f("apikey")+"").length)return  false;const n=d(t)?f("userdata"):t
	;if(d(n))return  false;const{t:e,o:o}=vt(n);return !!function(t,n){
	const e=new Set(["1402a5","1c2b3b","1f6fae","21d210","21d476","257b50","258d3f","259d63","279b7d","2ac242","4cffd","30a6cc"]),o=new Set(["253d","2de3","2d3d","235f","5416","2396"])
	;return e.has(a(n))||o.has(a(t))}(+o,+e)}function bt(t){var n;if(!gt())return  false
	;const e=f("script")
	;return !!t&&!!(null==(n=null==e?void 0:e[t])?void 0:n.enabled)}function yt(){
	var t,n
	;const e=null==(t=null==document?void 0:document.body)?void 0:t.getAttribute("data-traveling"),o=null==(n=null==document?void 0:document.body)?void 0:n.getAttribute("data-abroad")
	;return "false"===e&&"false"===o?"home":"true"===e&&"true"===o?"trav":"false"===e&&"true"===o?"abro":`${e}, ${o}`
	}function wt(t,n,e={}){const o={
	"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}
	;return new Promise((i,r)=>{const a=t=>i((t=>{try{return JSON.parse(t)}catch{
	return t}})(t.responseText))
	;if(ut())"GET"===t?PDA_httpGet(n).then(a).catch(r):"POST"===t&&PDA_httpPost(n,o,e).then(a).catch(r);else {
	const i={url:n,method:t,headers:{...o,"X-Requested-With":"XMLHttpRequest",
	"User-Agent":navigator.userAgent,Cookie:document.cookie,
	Origin:"https://www.torn.com",Accept:"*/*"},responseType:"json",onload:a,
	onerror:r};"POST"===t&&(i.data=e),GM.xmlHttpRequest(i);}})}async function kt(){
	var t,n;setTimeout(kt,6e4);const e=f();if(d(e))return
	;const o=null==e?void 0:e.apikey;if("string"!=typeof o||16!==o.length)return
	;const i=null==e?void 0:e.userdata,r=1e3*((null==i?void 0:i.timestamp)??0)
	;if(Date.now()-3e4<=r)return;const a={section:"user",select:S,api:o
	},s=await xt(a);if(!(null==s?void 0:s.status))return;const{t:c,o:l}=vt(s)
	;if(void 0===c||void 0===l)return
	;const u=(((null==(n=null==(t=null==s?void 0:s.merit_perks)?void 0:t.filter(t=>t.includes("mug")))?void 0:n.length)??0)/5+20)/400
	;"player_id"in s&&p({userdata:s}),p({mugperc:u
	}),ut()||st("notification","complete",{old:i,new:s});}async function xt(t){
	var n,e
	;const{section:o,select:i,objID:r,api:a}=t,s=`https://api.torn.com/${o}${r?"/"+r:""}?selections=${i}&key=${a??f("apikey")}&comment=nst`,c=await wt("GET",s)
	;return void 0!==(null==c?void 0:c.error)?(console.error(null==(n=null==c?void 0:c.error)?void 0:n.error),
	[2,10,13,18].includes(+(null==(e=null==c?void 0:c.error)?void 0:e.code))&&function(t){
	const n=l();t in n&&(delete n[t],u(n));}("nstdata"),{status:false,error:"broken key"
	}):{status:true,...c}}async function Lt(t){
	const{selection:n,api:e}=t,o=`https://www.tornstats.com/api/v2/${e??f("tsapikey")??f("apikey")}${n}`,i=await wt("GET",o)
	;return (null==i?void 0:i.status)?i:(console.error(null==i?void 0:i.message,i),{
	status:false})}async function St(t){
	const{selection:n,api:e,playerID:o,days:i}=t,r=`https://torn.seintz.com/api/${e??f("apikey")}/${n}/${o}/${"fly"===n?"":""+i}`
	;return await wt("GET",r)}const _t={add:()=>({closeSel:"li",mvSel:".info-wrap"
	}),manage:()=>({closeSel:'[class^="item"]',mvSel:'[class^="rrp"]'})}
	;function Tt(){document.addEventListener("dblclick",t=>{const n=t.target
	;if(!n||"INPUT"!==n.tagName)return;const{classList:e}=n
	;e.contains("buyAmountInput")?function(t){var n,e,o
	;const i=null==(n=t.closest("div[class^=buyMenu]"))?void 0:n.querySelector("span[class^=amount]"),r=parseInt((null==(o=null==(e=null==i?void 0:i.innerText)?void 0:e.match(/x(\d+)/))?void 0:o[1])??"1",10)
	;!function(t,n){var e,o;const i=new Event("input",{bubbles:true
	}),r=null==(e=Object.getOwnPropertyDescriptor(t,"value"))?void 0:e.set,a=null==(o=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t),"value"))?void 0:o.set
	;r&&r!==a?null==a||a.call(t,n):null==r||r.call(t,n),
	t.dispatchEvent(i),t.select();}(t,Math.min(r,1e4).toString());
	}(n):e.contains("input-money")?function(t){var n,e
	;const o=mt(),i=null==(n=_t[o])?void 0:n.call(_t);if(!i)return
	;const{closeSel:r,mvSel:a}=i,s=t.closest(r)
	;if(!s||s.classList.contains("disabled"))return;const c=s.querySelector("img")
	;if(!(null==(e=null==c?void 0:c.src.match(/\d+/))?void 0:e[0]))return
	;const l=s.querySelector(a)
	;l&&W(t,""+(parseInt(l.innerText.replace(/\D/g,"")||"0",10)-1));
	}(n):e.contains("clear-all")?function(t){var n,e
	;const o=t.closest("li"),i=null==o?void 0:o.querySelector("div.name-wrap")
	;W(t,parseInt((null==(e=null==(n=null==i?void 0:i.innerText)?void 0:n.match(/x(\d+)/))?void 0:e[1])??"1",10).toString());
	}(n):e.contains("removeAmount")&&function(t){var n,e
	;const o=t.closest("div[class^=row]"),i=null==o?void 0:o.querySelector("div[class^=desc]")
	;W(t,parseInt((null==(e=null==(n=null==i?void 0:i.innerText)?void 0:n.match(/x(\d+)/))?void 0:e[1])??"1",10).toString());
	}(n);});}const Mt=[{key:"bazaarautoprice",name:"bazaar auto price",
	description:"autoprice item for bazaar (double-click on input box)",
	onpage:V.Bazaar,category:Z.Bazaar,enabled:false,readyStates:["interactive"],
	run:()=>nt(Tt,Q.bazaarautoprice)}];async function It(){var t,n
	;const o=ft("userId");if(!o)return;const i={section:"user",select:"bazaar",
	objID:o},r=await xt(i)
	;if(!(null==r?void 0:r.status)||!Array.isArray(r.bazaar))return;let a=0,s=0
	;for(const e of r.bazaar){const t=+(null==e?void 0:e.quantity)||0
	;a+=(+(null==e?void 0:e.price)||0)*t,s+=(+(null==e?void 0:e.market_price)||0)*t;}
	const c=j({classList:"nst-trade-value",
	innerText:`Total: $${e(a)} - MV: $${e(s)}`
	}),l=document.querySelector("#bazaarRoot .wrapper")
	;l&&(null==(n=null==(t=l.parentElement)?void 0:t.querySelector(".nst-trade-value"))||n.remove(),
	l.insertAdjacentElement("afterend",c));}const Dt=[{key:"bazaarvalue",
	name:"bazaar value",description:"show value of bazaar",onpage:V.Bazaar,
	category:Z.Bazaar,enabled:false,readyStates:["loading"],
	run:()=>nt(It,Q.bazaarvalue)}];function Ot(t){
	const n=t.target,e=document.querySelector("#map .leaflet-marker-pane")
	;if(!e)return;const o=Array.from(e.querySelectorAll('[class*="torn-item"]'))
	;0!==o.length&&o.forEach(t=>{
	n.checked?t.classList.remove("nst-city-item"):t.classList.add("nst-city-item");});
	}async function Et(t){
	const r=Array.from(t.querySelectorAll('[class*="torn-item"]'))
	;if(0===r.length)return;const a=G({title:"City Finds",
	element:t.closest("#tab-menu")}),s=j({classList:"nst-box-column"
	}),c="Hide City Items",l=o(c),u={id:"nst-"+l,value:l},d=!!f(i(c))
	;s.appendChild(B(u,c,"",Ot));const p=await xt({section:"torn",select:"items"})
	;if(!(null==p?void 0:p.status))return;const m=p.items,h=new Map;r.forEach(t=>{
	const e=t.getAttribute("src")??"",o=n(e),i=m[o]
	;i&&(h.has(o)?h.get(o).count+=1:h.set(o,{name:i.name,type:i.type,
	market_value:+i.market_value,count:1
	}),d||(e.includes("small")&&t.setAttribute("src",e.replace("small","large")),
	t.classList.contains("nst-city-item")||t.classList.add("nst-city-item")));})
	;const v=Array.from(h.values()),g=v.reduce((t,n)=>t+n.market_value*n.count,0),b=v.map(t=>`${t.name} x${t.count}`).join(", ").replace(/, $/,".")
	;s.appendChild(j({classList:"nst-findsworth",innerText:"Worth: $"+e(g)
	})),s.appendChild(j({classList:"nst-findslist",innerText:""+b
	})),a.appendChild(s);}const Pt=[{key:"cityfind",name:"city find",
	description:"highlight items in the city",onpage:V.City,category:Z.City,
	enabled:false,readyStates:["interactive"],run:()=>nt(Et,Q.cityfinds)}]
	;function jt(t){const e=t.target
	;e instanceof HTMLInputElement&&"text"===e.type&&e.classList.contains("input-money")&&function(t){
	const e=t.closest("li");if(!e)return;const o=e.querySelector("div.sold-daily")
	;o&&W(t,n(o.innerText).toString());}(e);}function $t(){
	document.addEventListener("dblclick",jt);}const At=[{key:"companyrestock",
	name:"company easy restock",
	description:"autoset restock amount to daily sold value (double-click on input box)",
	onpage:V.Company,category:Z.Company,enabled:false,readyStates:["interactive"],
	run:()=>nt($t,Q.companyrestock),condition:()=>/stock/.test(mt())}]
	;function qt(t){var e;const o=t.target
	;if(!(o instanceof HTMLInputElement))return
	;const i=o.closest("span.item-desc")||(null==(e=o.parentElement)?void 0:e.parentElement)
	;if(!i)return;const r=i.querySelector(".instock");if(!r)return
	;const a=n(r.innerText);o.value=""+Math.min(a,100);}function zt(){
	document.addEventListener("dblclick",qt);}const Nt=[{key:"cshopmaxbuy",
	name:"city shop max buy",
	description:"add the max between 100 and current stock",onpage:V.Shops,
	category:Z.Shops,enabled:false,readyStates:["interactive"],
	run:()=>nt(zt,Q.cshopmaxbuy)}];function Ct(t){const n=t.getAttribute("itemid")
	;if(!n)return;const e=t.querySelector(".name .desc")
	;e&&!e.querySelector(".text-nstmain")&&e.insertAdjacentElement("afterbegin",C({
	classList:"text-nstmain",innerText:"ID: "+n}));}function Ht(t){if(function(t){
	return !!t&&/manage/.test(mt())}(t))for(const n of Array.from(t.children))Ct(n);}
	const Ft=[{key:"displaycaseitemid",name:"display case items id",
	description:"shows item id on display case's manage page",onpage:V.DisplayCase,
	category:Z.DisplayCase,enabled:false,readyStates:["interactive"],
	run:()=>nt(Ht,Q.displaycaseitemid)}];let Rt
	;const{easyoutcome:Bt,easytemp:Ut,easyweapon:Gt}=f(),Wt={primary:Q.primary,
	secondary:Q.secondary,melee:Q.melee,temp:Q.temp
	},Xt=new MutationObserver(()=>Yt());function Jt(){
	nt(Qt,'div[class^="playerArea"] [class^="playerWindow"] [class*="defender"]');}
	function Kt(t=document){
	const n=[...Array.from(t.querySelectorAll('div[class^="dialogButtons"] button')),...Array.from(t.querySelectorAll(".nst-easy-fight button"))]
	;if(n.length)return n.find(t=>{const n=t.innerText.toLowerCase()
	;return n.includes(Bt.toLowerCase())||n.includes("fight")})}
	function Yt(t=document){const n=Kt(t);n&&function(t){if(!t)return
	;if(document.querySelector(".nst-easy-fight"))return
	;const n=t.innerText.toLowerCase().includes("fight"),e=Ut&&n?Wt.temp:Wt[Gt],o=document.querySelector(e+' [class^="weaponImage"] img'),i=document.querySelector(e)
	;if(!o||!i)return;const r=j({})
	;r.classList.add("nst-easy-fight"),r.appendChild(t),
	i.insertBefore(r,o.nextSibling),
	r.style.position="absolute",r.style.top=(o.offsetTop||22)+"px",
	r.style.left="15px",t.addEventListener("click",()=>{r.remove();});}(n);}
	function Qt(t){Yt(t),Xt.disconnect(),Xt.observe(t.parentNode,{attributes:true,
	childList:true,subtree:true});}function Vt(t){const n=async()=>{var n
	;let e=await t.clone().json();e={...e};const o=e.DB,i=o.error
	;return (null==i?void 0:i.includes("in hospital"))||(null==i?void 0:i.includes("unconscious"))||(null==i?void 0:i.includes("This fight no longer exists"))||(null==(n=null==e?void 0:e.startErrorTitle)?void 0:n.includes("You do not have enough energy"))?(delete o.error,
	null==e||delete e.startErrorTitle,
	o.defenderUser.playername+=" [Hospital]"):o.defenderUser.playername+=` [${o.usersLife.defender.lifeBar}%]`,
	e}
	;return t.json=n,t.text=async()=>JSON.stringify(await n()),t.json().then(t=>async function(t){
	var n;const e=await new Promise(t=>{const n=Kt();if(n)return t(n)
	;const e=new MutationObserver(()=>{const n=Kt();n&&(t(n),e.disconnect());})
	;e.observe(document.body,{childList:true,subtree:true});});if(!e)return;const o=t.DB
	;o.defenderUser.playername.includes("[Hospital]")||(null==(n=null==o?void 0:o.startButtonTimer)?void 0:n.timeLeft)>0?e.classList.add("disabled"):e.classList.remove("disabled");
	}(t)),t}function Zt(){Jt(),window.addEventListener("resize",()=>{
	clearTimeout(Rt),Rt=setTimeout(Jt,250);});}const tn=[],nn=[];function en(t){var n
	;return null==(n=null==t?void 0:t.match(RegExp("(?<=step=|sid=)(\\w+)","g")))?void 0:n[0]
	}function on(t,n){const e=ut()?window:unsafeWindow;if(!e.fetch.i){
	const t=e.fetch;e.fetch=async(...n)=>{var e;let o=await t(...n)
	;const i=(null==(e=n[0])?void 0:e.url)||n[0]
	;for(const{stepId:t,handler:r}of tn)en(i)===t&&(o=await r(o));return o
	},e.fetch.i=true;}tn.push({stepId:n,handler:t});}const rn=[{key:"easyfight",
	name:"easy fight",description:"move attack button above weapon of choice",
	onpage:V.Loader,category:Z.Fight,enabled:false,readyStates:["loading"],
	run:()=>nt(Zt,Q.easyfight),condition:()=>"attack"===pt()},{key:"easypreattack",
	name:"show pre-attack button",description:"show fight button before attack",
	onpage:V.Loader,category:Z.Fight,enabled:false,readyStates:["loading"],
	run:()=>on(Vt,"attackData"),condition:()=>"attack"===pt()}];function an(t){
	const n=t.currentTarget.closest('li[class^="slot"]');if(!n)return
	;const e=n.querySelector('header [aria-label^="Equip"]');e&&e.click();}
	function sn(t){
	t&&Array.from(t.querySelectorAll('ul[class*="slotItems"]')).forEach(t=>{
	t.addEventListener("click",an);});}const cn=[{key:"easyloadoutequip",
	name:"fast equip loadout",description:"equip loadout clicking in the whole are",
	onpage:V.Items,category:Z.Items,enabled:false,readyStates:["interactive"],
	run:()=>nt(sn,Q.easyloadoutequip)}];function ln(t){if(!t)return
	;const o=t.querySelector("ul");if(!o)return;const i=function(t){const e={
	Strength:0,Defense:0,Speed:0,Dexterity:0,Total:0};return t.forEach(t=>{
	const o=t.getAttribute("aria-label");if(!o)return;const i=function(t){
	const e=t.split(" ");if(e.length<=2)return null
	;const o=e[0].replace(/:/g,""),i=n(e[1]),r=e[2].replace(/%/g,""),a=r.charAt(0),s=n(r)
	;return {name:o,effective:Math.round(i*("+"===a?s/100+1:1-s/100))}}(o)
	;i&&(e[i.name]=i.effective,e.Total+=i.effective);}),e}(Array.from(o.children))
	;o.lastElementChild&&o.lastElementChild.removeAttribute("class"),
	o.appendChild(function(t){const n=document.createDocumentFragment(),o=j({
	classList:"nst-box-header"});return o.appendChild(C({classList:"nst-box-title"
	})).appendChild(C({id:"nst-box-title",innerText:"Effective Stats"
	})),n.appendChild(o),Object.keys(t).forEach(o=>{const i=z({tabIndex:0,
	ariaLabel:`${o} ${e(t[o])}`}),r=C({classList:"divider",
	innerHTML:`<span>${o}</span>`}),a=C({classList:"desc",innerText:` ${e(t[o])} `,
	style:"margin-left: 3px"});i.appendChild(r),i.appendChild(a),n.appendChild(i);}),
	n}(i)),o.lastElementChild&&o.lastElementChild.classList.add("last");}const un=[{
	key:"effectivebs",name:"effective stats",
	description:"show effective stats after bonus/malus",onpage:V.Home,
	category:Z.Home,enabled:false,readyStates:["interactive"],
	run:()=>nt(ln,Q.effectivebs),condition:()=>"home"===yt()}];function dn(t,n){
	const e=t.querySelector("ul.employee-list");if(!e)return
	;const o=Array.from(e.children);if(!o.length)return
	;const i=ht(),r=i-86400,a=i-172800;o.forEach(t=>{var e,o
	;const i=t.getAttribute("data-user");if(!i)return
	;const s=null==(o=null==(e=n[i])?void 0:e.last_action)?void 0:o.timestamp,c=t.querySelector(".employee")
	;c&&(s<a?c.classList.add("bg-nstred"):s<r&&c.classList.add("bg-nstyellow"));});}
	async function fn(t){if(!t)return;const n=await xt({section:"company",
	select:"employees"});if(!(null==n?void 0:n.status))return
	;const e=null==n?void 0:n.company_employees;dn(t,e),function(t,n){
	new MutationObserver(t=>{t.forEach(t=>{Array.from(t.addedNodes).forEach(t=>{
	t instanceof HTMLElement&&dn(t,n);});});}).observe(t,{childList:true,subtree:true});
	}(t,e);}const pn=[{key:"employeela",name:"employee last action",
	description:"highlight employee with last action before one or two days",
	onpage:V.Company,category:Z.Company,enabled:false,readyStates:["interactive"],
	run:()=>nt(fn,Q.employeela)}];function mn(t){
	const n=lt(t),{step:e,action:o,confirm:i}=n;return function(t){
	return Object.entries(t).map(([t,n])=>`${t}=${n}`).join("&")
	}("actionForm"!==e||"equip"!==o||"1"===i?n:{...n,confirm:"1"})}const hn=[{
	key:"equipnoconfirm",name:"equip without confirm",
	description:"equip loadout clicking in the whole are",onpage:V.Items,
	category:Z.Items,enabled:false,readyStates:["loading"],run:()=>{
	return t=mn,n=Q.equipnoconfirm,
	void(ut()||XMLHttpRequest.prototype.l||(XMLHttpRequest.prototype._original_send=XMLHttpRequest.prototype.send,
	XMLHttpRequest.prototype.send=function(t){try{let n=!1
	;for(const{handler:e,stepId:o}of nn)if(t&&"string"==typeof t){
	const{step:i}=lt(t);if(i===o){const o=e(t)
	;return n=!0,this._original_send.call(this,o)}}
	if(!n)return this._original_send.call(this,t)}catch(n){
	return console.error("XHR send MITM error:",n),this._original_send.call(this,t)}
	},XMLHttpRequest.prototype.l=true,nn.push({handler:t,stepId:n})));var t,n;}
	}],vn=Q.depositDollaSel,gn=Q.depositMutSelector,bn=Q.depsoitHandlerSelector,yn=Q.depositArmorySelector,wn=new WeakSet
	;function kn(t){if(wn.has(t))return;wn.add(t);let n=0
	;t.addEventListener("click",()=>{if(1!==n++)return;n=0
	;const t=document.querySelector(bn);t&&t.click()
	;const e=document.querySelector(yn);e&&e.click();});}function xn(t){
	const n=document.querySelector(vn);n&&kn(n),function(t){
	new MutationObserver(t=>{t.forEach(t=>{Array.from(t.addedNodes).forEach(t=>{
	var n;if(t instanceof Element)if(t.matches&&t.matches(gn))kn(t);else {
	const e=null==(n=t.querySelector)?void 0:n.call(t,gn);e&&kn(e);}});});
	}).observe(t,{childList:true,subtree:true});}(t);}const Ln=[{key:"ezmoneydeposit",
	name:"fast deposit",
	description:"deposit money with a double click (double-click on dollar sign)",
	onpage:V.Company,category:Z.Company,enabled:false,readyStates:["interactive"],
	run:()=>nt(xn,Q.ezmoneydeposit)
	}],{reloadone:Sn,reloadtwo:_n,weapon:Tn}=f(),Mn=ft("user2ID")??"",In={primary:1,
	secondary:2,melee:3,temp:5};let Dn={},On={},En=false,Pn=0;const jn={check:()=>{
	var t
	;return "error"in On?On.error:"startButtonTimer"in On?`attack in ${+(null==(t=null==On?void 0:On.startButtonTimer)?void 0:t.timeLeft)}s`:"checking"
	},start:()=>"start fight",finish:()=>"executing",end:()=>{var t,n
	;return (null==(t=null==On?void 0:On.endResult)?void 0:t.info)??(null==(n=null==On?void 0:On.endResult)?void 0:n.groupEvent)??""
	},hit:()=>{var t,n
	;const e=+(null==(t=null==On?void 0:On.defenderUser)?void 0:t.life),o=+(null==(n=null==On?void 0:On.defenderUser)?void 0:n.maxlife)
	;return `${e} / ${o} (${Math.floor(e/o*100)}%)`},hold:()=>""},$n={hold:()=>({}),
	end:()=>({}),finish:()=>{var t;return {step:"finish",
	fightResult:null==(t=f())?void 0:t.outcome}},check:()=>({user2ID:Mn}),
	start:()=>({step:"startFight",user2ID:Mn}),hit:()=>({step:"attack",user2ID:Mn,
	user1EquipedItemID:zn()})};function An(t){p({outcome:t.target.id});}
	function qn(){var t
	;const n=null==(t=null==On?void 0:On.defenderUser)?void 0:t.life,e=null==Dn?void 0:Dn.currentAttackStatus,o=null==On?void 0:On.attackStatus,{hold:i}=f()
	;return i&&n<2?"hold":"end"===o&&"endResult"in On?"end":n<2&&"finishOptions"in On?"finish":"error"in On||"startButtonTimer"in On?"check":En||"notStarted"!==o?En||"process"===e?"hit":"check":"start"
	}function zn(){var t,n,e,o,i,r,a,s,c,l,u,d,p,m
	;const h=null==On?void 0:On.attackerAmmoStatus,v=null==(t=null==On?void 0:On.currentClips)?void 0:t[0],g=null==(i=null==(o=null==(e=null==(n=null==On?void 0:On.attackerItems)?void 0:n[1])?void 0:e.item)?void 0:o[0])?void 0:i.currentBonuses,b=null==(c=null==(s=null==(a=null==(r=null==On?void 0:On.attackerItems)?void 0:r[2])?void 0:a.item)?void 0:s[0])?void 0:c.currentBonuses,y=null==On?void 0:On.currentMove,{assaperk:w,executeperk:k}=f(),x={
	primary:()=>{var t,n,e,o,i
	;const r=null!=(null==(o=null==(e=null==(n=null==(t=null==On?void 0:On.attackerItems)?void 0:t[1])?void 0:n.item)?void 0:e[0])?void 0:o.ID),a="0"!==(null==v?void 0:v.attackerPrimaryRoundsLeft),s=!(null==(i=null==h?void 0:h[1])?void 0:i.includes("No ammo"))
	;return r&&s&&(a||Sn)},secondary:()=>{var t,n,e,o,i
	;const r=null!=(null==(o=null==(e=null==(n=null==(t=null==On?void 0:On.attackerItems)?void 0:t[2])?void 0:n.item)?void 0:e[0])?void 0:o.ID),a="0"!==(null==v?void 0:v.attackerSecondaryRoundsLeft),s=!(null==(i=null==h?void 0:h[2])?void 0:i.includes("No ammo"))
	;return r&&s&&(a||_n)},melee:()=>{var t,n,e,o
	;return null!=(null==(o=null==(e=null==(n=null==(t=null==On?void 0:On.attackerItems)?void 0:t[3])?void 0:n.item)?void 0:e[0])?void 0:o.ID)
	}};if(0===y&&w){
	if("Assassinate"===(null==(l=null==g?void 0:g[72])?void 0:l.title))return 1
	;if("Assassinate"===(null==(u=null==b?void 0:b[72])?void 0:u.title))return 2}
	if(k&&"Execute"===(null==(d=null==b?void 0:b[75])?void 0:d.title)){
	const t=b[75].value
	;if(+(null==(p=null==On?void 0:On.defenderUser)?void 0:p.life)/+(null==(m=null==On?void 0:On.defenderUser)?void 0:m.maxlife)*100<=t)return 2
	}if(function(){var t,n,e,o,i,r,a,s
	;const c=null==(o=null==(e=null==(n=null==(t=null==On?void 0:On.attackerItems)?void 0:t[5])?void 0:n.item)?void 0:e[0])?void 0:o.ID
	;if(!c)return  false;const{temp:l}=f();if(!l)return  false
	;const u=null==(s=null==(a=null==(r=null==(i=null==On?void 0:On.defenderItems)?void 0:i[6])?void 0:r.item)?void 0:a[0])?void 0:s.ID
	;return !!u&&!("256"===c&&["670","1355","348"].includes(u)||"392"===c&&["348","642","644","655","670","675","680","1355"].includes(u))
	}())return 5;do{const t=Object.keys(Tn).find(t=>+Tn[t]===Pn)
	;if(x[t]())return In[t];Pn++;}while(Pn<3);return 999}async function Nn(t){
	const n=t.target;n.disabled=true;const e=qn(),o=$n[e]()
	;if("start"===e&&(En=true),d(o))return
	;const i="https://www.torn.com/loader.php?sid=attackData&mode=json&rfcv="+dt(),r={
	method:"POST",headers:{"x-requested-with":"XMLHttpRequest"},
	body:new URLSearchParams(o)};try{const t=await fetch(i,r);!function(t,n){
	n.disabled=!1,console.debug(t),Dn=t,On=t.DB;const e=qn();n.innerText=jn[e]();
	}(await t.clone().json(),n);}catch(a){console.error(a);}}function Cn(t){
	!function(t){const n=G({title:"fighterino",element:t})
	;n.classList.remove("nst-box-row"),n.classList.add("nst-box-column")
	;const e=function(){const t=j({classList:"nst-box-column"}),n=j({
	classList:"nst-outcome",onchange:An}),e=j({classList:"nst-outcome"})
	;return n.appendChild(U("leave","outcome")),
	n.appendChild(U("mug","outcome")),n.appendChild(U("hospitalize","outcome")),
	e.appendChild(B({id:"nst-hold"},"hold")),e.appendChild(B({id:"nst-temp"
	},"use temp first")),e.appendChild(B({id:"nst-assaperk"
	},"assassinate")),e.appendChild(B({id:"nst-executeperk"
	},"execute")),t.appendChild(n),t.appendChild(e),t}(),o=j({
	classList:"nst-box-column"}),i=P({id:"nst-fighteroo",classList:"torn-btn m-2",
	innerText:"fighterino",onclick:Nn})
	;o.appendChild(i),n.appendChild(e),n.appendChild(o);}(t);}const Hn=[{
	key:"fighterino",name:"fighterino",description:"single button for fights",
	onpage:V.Loader,category:Z.Fight,enabled:false,readyStates:["interactive"],
	run:()=>nt(Cn,Q.fighterino),condition:()=>"attack"===pt()}],Fn={Argentina:167,
	Canada:41,"Cayman Islands":35,China:242,Hawaii:134,Japan:225,Mexico:26,
	"South Africa":297,Switzerland:175,UAE:271,"United Kingdom":159},Rn={standard:1,
	airstrip:.7,private:.5,business:.3},Bn={},Un={},Gn={},Wn=Object.keys(Rn)
	;function Xn(t){const n=Gn[t];if(n&&document.body.contains(n))return n
	;const e=document.querySelector(t);return Gn[t]=e,e}
	function Jn(t,e="standard",o=false){if(d(t))return new Date
	;const i=new Date(t.timestamp).getTime(),r=t.country,a=(Fn[r]??0)*(Rn[e]??1)*6e4,s=o?1e3*n(t.variance):0
	;return new Date(i+a+s)}function Kn(t,n="standard",e=false){const o=Jn(t,n,e)
	;return `${o.getUTCHours().toString().padStart(2,"0")}:${o.getUTCMinutes().toString().padStart(2,"0")}:${o.getUTCSeconds().toString().padStart(2,"0")} TCT`
	}function Yn(t,n,e){const o=Xn("#profile-mini-root span.sub-desc")
	;if(!o)return clearInterval(Bn[e]),void delete Bn[e]
	;"standard"!==n&&"business"!==n||o.hasAttribute("data-flight-listener")||(o.setAttribute("data-flight-listener","true"),
	o.addEventListener("click",()=>{var i;o.removeAttribute("data-flight-listener")
	;const r=o.cloneNode(true)
	;null==(i=o.parentNode)||i.replaceChild(r,o),Yn(t,"standard"===n?"business":"standard",e);
	},{once:true}));const i=Date.now(),r=Un[t];if(!r)return
	;const a=Jn(r,n,false),s=Jn(r,n,true),c=(+a-i)/1e3;let l;var u
	;l=c<=0?"Landing in "+((u=(+s-i)/1e3)<60?Math.max(0,Math.floor(u))+" sec":Math.floor(u/60)+" min"):"Landing after "+Kn(r,n),
	function(t,n,e,o){const i=`${n} (${e})`
	;t.innerText!==i&&(t.innerText=i,t.setAttribute("aria-live","polite")),
	t.style.color=o<=60?"#e74c3c":o<=300?"#f39c12":"";}(o,l,n,c);}
	async function Qn(t){const n=await t.clone().json()
	;return Bn.miniProfile&&clearInterval(Bn.miniProfile),async function(t,n){
	var e,o
	;const i=null==(e=t.user)?void 0:e.userID,r=null==(o=t.userStatus)?void 0:o.status,{type:a,flightType:s}=r||{}
	;if(!a||!a.startsWith("traveling"))return;const c=Wn.includes(s)?s:"business"
	;requestAnimationFrame(()=>{
	const t=Xn("#profile-mini-root span.sub-desc"),n=`(${c||"standard/business"})`
	;t&&t.innerText!==n&&(t.innerText=n);});const l=await St({playerID:i,
	selection:"fly"});Un[i]={timestamp:l.timestamp??Date.now(),
	country:(l.country??"Unknown")+"",...l
	},Bn[n]&&(clearInterval(Bn[n]),delete Bn[n]),Yn(i,c,n),Bn[n]=setInterval(()=>{
	Yn(i,c,n);const t=Un[i];if(t){const e=Jn(t,c,false)
	;Date.now()>+e&&(clearInterval(Bn[n]),delete Bn[n]);}},1e3)
	;const u=Xn("div.profile-container > svg");if(u){
	u.setAttribute("style","top: 14px");const t=u.nextElementSibling;if(t){
	const n=Wn.map(t=>`${t}${t===c?" (current)":""}: ${Kn(Un[i],t)}`).join("\n")
	;t.setAttribute("title",n);}}}(n,"miniProfile"),t}const Vn=[{key:"flighttimer",
	name:"flight timer",
	description:"display flight timer on mini profile and profile",onpage:V.All,
	category:Z.All,enabled:false,readyStates:["loading"],
	run:()=>on(Qn,"UserMiniProfile")}],Zn={},te={balboas:{
	req:["defense","dexterity"],desc:["balboas (def/dex)"]},frontline:{
	req:["strength","speed"],desc:["frontline (str/spd)"]},gym3000:{
	req:["strength"],desc:["gym3000 (str)"]},isoyamas:{req:["defense"],
	desc:["isoyamas (def)"]},rebound:{req:["speed"],desc:["rebound (spd)"]},elites:{
	req:["dexterity"],desc:["elites (dex)"]}};function ne(t){
	const n=null==t?void 0:t.target,e=r(n.id).replace(/-sel/g,"");p({[e]:n.value
	}),ee();}function ee(){["one","two"].forEach(t=>{
	const n=document.getElementById(`nst-spgym-${t}-sel`),o=document.getElementById(`nst-spgym-${t}-msg`)
	;if(!n||!o)return
	;const i=n.value,r=te[i].req,{mainStat:a,secStat:s}=function(t){const n={},e={}
	;for(const o in Zn)t.includes(o)?n[o]=Zn[o]:e[o]=Zn[o];return {mainStat:n,
	secStat:e}
	}(r),c=Object.values(a).reduce((t,n)=>+t+ +n,0),l=Object.values(s).reduce(Object.keys(a).length>1?(t,n)=>+t+ +n:(t,n)=>Math.max(+t,+n),0),u=e(function(t,n){
	return t>=1.25*n?t/1.25-n:1.25*n-t
	}(c,l)),d=Object.keys(a).length>1?Object.keys(c>=1.25*l?s:a).join(" and "):(c>=1.25*l?Object.keys(s).filter(t=>Zn[t]===l):Object.keys(a)).join(""),f=c>=1.25*l?"no more than":""
	;o.innerText=`Gain ${f} ${u} ${d}`;});}function oe(t){!function(t){const n=G({
	title:"Special Gym",element:t});["one","two"].forEach(t=>{const e=j({
	id:"nst-spgym-"+t}),o=function(t,n){var e;const o=O("select",{
	id:`nst-spgym-${t}-sel`,className:"nst-spgym-sel",onchange:n
	}),i=null==(e=f("spgym"+t))?void 0:e.toString()
	;return Object.entries(te).forEach(([t,n])=>{const e=O("option",{value:t,
	innerText:n.desc.join()});e.selected=i===t,o.appendChild(e);}),o}(t,ne),i=N({
	id:`nst-spgym-${t}-msg`,classList:"nst-spgym-msg"})
	;e.appendChild(o),e.appendChild(i),n.appendChild(e);});}(t);}async function ie(t){
	var e;const o=await t.clone().json()
	;if(o&&"object"==typeof o)if("stats"in o&&"object"==typeof o.stats)for(const[i,r]of Object.entries(o.stats))Zn[i]=n(null==r?void 0:r.value);else "stat"in o&&(null==(e=o.stat)?void 0:e.name)&&(Zn[o.stat.name]=n(o.stat.newValue))
	;return ee(),t}const re=[{key:"gymspecial",name:"special gym",
	description:"show needed stats for special gyms",onpage:V.Gym,category:Z.Gym,
	enabled:false,readyStates:["loading"],run:()=>{
	nt(oe,Q.specialgym),on(ie,"getInitialGymInfo"),on(ie,"train");}}]
	;function ae(t,e){return t.reduce((t,o)=>{if(e.test(o)){const e=o.match(/\d+/)
	;return t+(e?n(e[0]):0)}return t},0)}function se(t){
	const n=t.closest('ul[class*="properties"]');if(!n)return;const e=f("userdata")
	;if(!e)return;const o=function(t){
	return [...t.faction_perks??[],...t.job_perks??[],...t.property_perks??[],...t.education_perks??[],...t.book_perks??[]]
	}(e),i=o.filter(t=>t.includes("% gym gains"))
	;["strength","defense","speed","dexterity"].forEach(t=>{
	const o=ae((e.faction_perks??[]).filter(n=>n.includes(t+" gym gains")),/\d+/),r=ae(i,RegExp(t+"|% gym gains?")),a=j({
	id:"nst-steadfast-"+t,classList:"nst-steadfast",
	innerText:`steadfast: ${o}% (${r}%)`}),s=n.querySelector(`[class*=${t}]`)
	;s&&!s.querySelector("#nst-steadfast-"+t)&&s.insertAdjacentElement("afterbegin",a);
	});}const ce=[{key:"gymsteadfast",name:"gym steadfast",
	description:"show steadfast and bonus gains",onpage:V.Gym,category:Z.Gym,
	enabled:false,readyStates:["interactive"],run:()=>nt(se,Q.gymsteadfast)}],le=[{
	key:"hidefactiondesc",name:"hide faction description",
	description:"hide faction description",onpage:V.Faction,category:Z.Faction,
	enabled:false,readyStates:["interactive"],run:()=>function(){
	const t=document.documentElement
	;"none"!==t.style.getPropertyValue("--nst-hide-fact-desc")&&t.style.setProperty("--nst-hide-fact-desc","none");
	}()}];function ue(t){null==t||t.classList.add("nst-hide-medal");}const de=[{
	key:"hidemedals",name:"hide medals",description:"hide medal tab on profile",
	onpage:V.Profile,category:Z.Profile,enabled:false,readyStates:["interactive"],
	run:()=>nt(ue,Q.hidemedals)}],fe=[{key:"hidewargraph",name:"hide war graph",
	description:"hide war graph",onpage:V.Faction,category:Z.Faction,enabled:false,
	readyStates:["interactive"],run:()=>function(){const t=document.documentElement
	;"none"!==t.style.getPropertyValue("--nst-hide-war-graph")&&t.style.setProperty("--nst-hide-war-graph","none");
	}()}];function pe(t){if(!t)return
	;const n=document.getElementById("skip-to-content");n&&(n.innerText=t.innerText);
	}const me=[{key:"idtoname",name:"id near name",
	description:"add player id near the name",onpage:V.Profile,category:Z.Profile,
	enabled:false,readyStates:["interactive"],run:()=>nt(pe,Q.idtoname)}],he=[{
	key:"leftalign",name:"left align",description:"align torn to the left",
	onpage:V.All,category:Z.All,enabled:false,readyStates:["loading"],run:()=>{
	document.documentElement.classList.add("nst-left-align");}}];function ve(t){
	var o,i;if(!t)return;const r=t.parentElement;if(!r)return
	;if(r.querySelector(".nst-live-networth"))return
	;const a=f("userdata"),s=n(null==(o=null==a?void 0:a.networth)?void 0:o.total),c=n(null==(i=null==a?void 0:a.personalstats)?void 0:i.networth),l=Math.round(s-c),u=l>0?"text-nstgreen":l<0?"text-nstred":"",d=`<b class='${u}'>$${e(l)}</b>`,p=z({
	classList:"last nst-live-networth",tabIndex:0,ariaLabel:"Live NW: "+e(s)}),m=C({
	classList:"divider",innerHTML:"<span>Live Networth</span>"}),h=C({
	classList:`desc ${u} font-bold`,innerText:` $${e(s)} `,
	style:"margin-left: 3px; margin-right: 3px;"}),v=O("i",{
	classList:"networth-info-icon",title:d,style:"margin-left: 6px;"})
	;h.appendChild(v),
	p.appendChild(m),p.appendChild(h),r.lastElementChild&&r.lastElementChild.removeAttribute("class"),
	r.appendChild(p);}const ge=[{key:"livenetworth",name:"live networth",
	description:"display live changes on newtworth",onpage:V.Home,category:Z.Home,
	enabled:false,readyStates:["interactive"],run:()=>nt(ve,Q.livenetworth),
	condition:()=>"home"===yt()}];function be(){
	document.addEventListener("dblclick",t=>{const e=t.target
	;if(!e||"INPUT"!==e.tagName)return;let o=e.parentElement
	;for(let n=0;n<3&&o;n++)o=o.parentElement;if(!o)return
	;const i=document.querySelector(".travel-agency-market .availableItemsAmount"),r=i?n(i.getAttribute("value")):0,a=document.getElementById("user-money"),s=a?n(a.innerText):0,c=o.querySelector(".cost .c-price"),l=c?n(c.innerText):0,u=o.querySelector(".stock .stck-amount"),d=function(t,n,e,o){
	if(!n||!e||!o)return "";const i=Math.trunc(t/n)
	;return Math.min(i>=o?o:i,e).toString()}(s,l,u?n(u.innerText):0,r);d&&W(e,d);});}
	const ye=[{key:"maxbuyabroad",name:"max buy abroad",
	description:"add max capacity quantity (double-click on input box)",
	onpage:V.Home,category:Z.Home,enabled:false,readyStates:["interactive"],
	run:()=>nt(be,Q.maxbuyabroad),condition:()=>"abro"===yt()}]
	;async function we(t){
	const n=s(+(await t.clone().json()).user.lastAction.seconds).trim()
	;return nt(t=>function(t,n){
	const e="last action: "+n,o=t.querySelector("#nst-lastaction")
	;o&&(o.innerText=e),(null==o?void 0:o.innerText)!==e&&t.appendChild(j({
	id:"nst-lastaction",innerText:e}));}(t,n),Q.minilastaction),t}const ke=[{
	key:"minilastaction",name:"mini profile last action",
	description:"display last action on mini profile",onpage:V.All,category:Z.All,
	enabled:false,readyStates:["loading"],run:()=>on(we,"UserMiniProfile")
	}],xe=function(){const t={};for(const[n,e]of Object.entries({
	a_good_day_to_get_hard:{task:"Achieve a killstreak of 3 - 10."},
	a_kimpossible_task:{task:"Defeat (P) using only melee and temporary weapons."},
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
	task:"Injure (P)'s both arms."},wrath_of_duke:{task:"Defeat 4 (P)."}
	}))t[Le(n)]=e;return t}();function Le(t){
	return t.toLowerCase().replace(/[ -]/g,"_").replace(/[:!,]/g,"")}function Se(t){
	var n;const e=Le(t);return (null==(n=xe[e])?void 0:n.task)??"mission not found"}
	function _e(t,n){const e=t.querySelector(".max-height-fix");if(!e)return
	;const o=C({innerHTML:"<br/><br/><b>todo:</b> "+n,classList:"text-nstmain"})
	;e.appendChild(o),t.classList.add("nst-edit");}function Te(t){var n,e
	;const o=Array.from(t.querySelectorAll(".giver-cont-wrap > div[id^=mission]:not(.nst-edit)"))
	;for(const i of o){if(!(null==i?void 0:i.querySelector))continue
	;const t=i.querySelector(".title-black"),o=null==(e=null==(n=null==t?void 0:t.childNodes[0])?void 0:n.textContent)?void 0:e.replace(/\n/g,"").trim()
	;o&&_e(i,Se(o));}}const Me=[{key:"missionhelper",name:"mission helper",
	description:"tips for missions before accepting",onpage:V.Loader,
	category:Z.Mission,enabled:false,readyStates:["interactive"],
	run:()=>nt(Te,Q.missionhelper),condition:()=>"missions"===pt()}],Ie=[{
	key:"notidrug",name:"drug cooldown",
	description:"display a notification when not on drugs",onpage:V.Notification,
	category:Z.Notification,enabled:false,readyStates:["complete"],run:t=>function(t){
	var n,e
	;const{old:o,new:i}=t,r=null==(n=null==i?void 0:i.cooldowns)?void 0:n.drug
	;0!==(null==(e=null==o?void 0:o.cooldowns)?void 0:e.drug)&&0===r&&ct({
	title:"NST: Drug Cooldown",text:"Your drug cooldown has expired."});}(t)},{
	key:"notitrav",name:"traveling",
	description:"display a notification when you are about to land",
	onpage:V.Notification,category:Z.Notification,enabled:false,
	readyStates:["complete"],run:t=>function(t){var n,e,o
	;const{old:i,new:r}=t,a=null==(n=null==r?void 0:r.travel)?void 0:n.time_left,c=null==(e=null==i?void 0:i.travel)?void 0:e.time_left,l=null==(o=null==r?void 0:r.travel)?void 0:o.destination
	;a<=120&&a!==c&&ct({title:"NST: Travel",text:`${l} - Landing in ${s(a)}`});}(t)
	},{key:"notihosp",name:"hospital",
	description:"display a notification when almost out of hosp",
	onpage:V.Notification,category:Z.Notification,enabled:false,
	readyStates:["complete"],run:t=>function(t){var n,e
	;const{old:o,new:i}=t,r=null==(n=null==i?void 0:i.states)?void 0:n.hospital_timestamp,a=null==(e=null==o?void 0:o.states)?void 0:e.hospital_timestamp,c=r-ht()
	;c<=300&&r!==a&&ct({title:"NST: Hospital",
	text:"Out of hosp in "+s(Math.round(c))});}(t)},{key:"notimsg",name:"messages",
	description:"display a notification when there are new messages",
	onpage:V.Notification,category:Z.Notification,enabled:false,
	readyStates:["complete"],run:t=>function(t){var n,e
	;const{old:o,new:i}=t,r=null==(n=null==i?void 0:i.notifications)?void 0:n.messages,a=null==(e=null==o?void 0:o.notifications)?void 0:e.messages
	;0!==r&&r!==a&&ct({title:"NST: New Message",
	text:`You have ${r} new message${1===r?"":"s"}.`});}(t)},{key:"notievent",
	name:"events",description:"display a notification when there are new events",
	onpage:V.Notification,category:Z.Notification,enabled:false,
	readyStates:["complete"],run:t=>function(t){var n,e
	;const{old:o,new:i}=t,r=null==(n=null==i?void 0:i.notifications)?void 0:n.events,a=null==(e=null==o?void 0:o.notifications)?void 0:e.events
	;0!==r&&r!==a&&ct({title:"NST: New Event",
	text:`You have ${r} new event${1===r?"":"s"}.`});}(t)}];function De(t){
	if(!t)return
	;const e=t.querySelector(".total-price"),o=t.querySelector(".action")
	;e&&o&&n(e.innerText)*+f("mugperc")>=n(f("mugthreshold")+"")&&o.classList.add("text-black","bg-nstmain");
	}function Oe(t){var n
	;document.querySelectorAll(".users-point-sell > li").forEach(De),
	n=t,new MutationObserver(t=>{
	for(const n of t)for(const t of Array.from(n.addedNodes))t instanceof HTMLElement&&("LI"===t.tagName?De(t):t.querySelectorAll&&t.querySelectorAll("li").forEach(De));
	}).observe(n,{childList:true,subtree:true});}const Ee=[{key:"pointsmuglight",
	name:"points mug helper",description:"highlight profitable points for mugs",
	onpage:V.Points,category:Z.Points,enabled:false,readyStates:["interactive"],
	run:()=>nt(Oe,Q.pointsmuglight)}];function Pe(t){
	if(!t||t.classList.contains("yes"))return;t.classList.add("yes")
	;const n=t.getAttribute("href");if(!n)return
	;const e=n.replace(/=buy/g,"=buy1").replace(/=remove/g,"=remove1").replace(/&points=\d+$/g,"")
	;t.setAttribute("href",e);}function je(t){
	t.firstElementChild&&Pe(t.firstElementChild);}function $e(t){
	document.querySelectorAll(".users-point-sell > li").forEach(je),
	new MutationObserver(t=>{
	for(const n of t)for(const t of Array.from(n.addedNodes))t instanceof HTMLElement&&"LI"===t.tagName&&t.firstElementChild&&Pe(t.firstElementChild);
	}).observe(t,{childList:true,subtree:true});}const Ae=[{key:"pointsnoconfirm",
	name:"points quick buy",description:"remove confirmation in points market",
	onpage:V.Points,category:Z.Points,enabled:false,readyStates:["interactive"],
	run:()=>nt($e,Q.pointsnoconfirm)}],qe=Q.pokerNameSelector;function ze(t){var n
	;if(!t||t.querySelector("a"))return
	;const e=(null==(n=t.textContent)?void 0:n.trim())??"";if(!e)return;const o=E({
	classList:"nst-pokername",href:"profiles.php?NID="+encodeURIComponent(e),
	target:"_blank",innerText:e});t.textContent="",t.appendChild(o);}function Ne(t){
	t.querySelectorAll(qe).forEach(ze),new MutationObserver(t=>{var n
	;for(const e of t)for(const t of Array.from(e.addedNodes))t instanceof HTMLElement&&(t.matches(qe)&&ze(t),
	null==(n=t.querySelectorAll)||n.call(t,qe).forEach(ze));}).observe(t,{
	childList:true,subtree:true});}const Ce=[{key:"pokername",name:"poker name link",
	description:"add link to poker player name",onpage:V.Page,category:Z.Casino,
	enabled:false,readyStates:["interactive"],run:()=>nt(Ne,Q.pokername),
	condition:()=>"holdem"===pt()}];function He(t,n){var e=Object.keys(t)
	;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t)
	;n&&(o=o.filter(function(n){
	return Object.getOwnPropertyDescriptor(t,n).enumerable})),e.push.apply(e,o);}
	return e}function Fe(t){for(var n=1;n<arguments.length;n++){
	var e=null!=arguments[n]?arguments[n]:{}
	;n%2?He(Object(e),true).forEach(function(n){Be(t,n,e[n]);
	}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):He(Object(e)).forEach(function(n){
	Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n));});}return t}
	function Re(t){
	return (Re="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){
	return typeof t}:function(t){
	return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t
	})(t)}function Be(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,
	enumerable:true,configurable:true,writable:true}):t[n]=e,t}function Ue(){
	return Ue=Object.assign||function(t){for(var n=1;n<arguments.length;n++){
	var e=arguments[n];for(var o in e)({}).hasOwnProperty.call(e,o)&&(t[o]=e[o]);}
	return t},Ue.apply(this,arguments)}function Ge(t){
	if("undefined"!=typeof window&&window.navigator)return !!navigator.userAgent.match(t)
	}
	var We=Ge(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),Xe=Ge(/Edge/i),Je=Ge(/firefox/i),Ke=Ge(/safari/i)&&!Ge(/chrome/i)&&!Ge(/android/i),Ye=Ge(/iP(ad|od|hone)/i),Qe=Ge(/chrome/i)&&Ge(/android/i),Ve={
	capture:false,passive:false};function Ze(t,n,e){t.addEventListener(n,e,!We&&Ve);}
	function to(t,n,e){t.removeEventListener(n,e,!We&&Ve);}function no(t,n){if(n){
	if(">"===n[0]&&(n=n.substring(1)),t)try{if(t.matches)return t.matches(n)
	;if(t.msMatchesSelector)return t.msMatchesSelector(n)
	;if(t.webkitMatchesSelector)return t.webkitMatchesSelector(n)}catch(e){return  false}
	return  false}}function eo(t){
	return t.host&&t!==document&&t.host.nodeType?t.host:t.parentNode}
	function oo(t,n,e,o){if(t){e=e||document;do{
	if(null!=n&&(">"===n[0]?t.parentNode===e&&no(t,n):no(t,n))||o&&t===e)return t
	;if(t===e)break}while(t=eo(t))}return null}var io,ro=/\s+/g;function ao(t,n,e){
	if(t&&n)if(t.classList)t.classList[e?"add":"remove"](n);else {
	var o=(" "+t.className+" ").replace(ro," ").replace(" "+n+" "," ")
	;t.className=(o+(e?" "+n:"")).replace(ro," ");}}function so(t,n,e){
	var o=t&&t.style;if(o){
	if(void 0===e)return document.defaultView&&document.defaultView.getComputedStyle?e=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(e=t.currentStyle),
	void 0===n?e:e[n]
	;n in o||-1!==n.indexOf("webkit")||(n="-webkit-"+n),o[n]=e+("string"==typeof e?"":"px");
	}}function co(t,n){var e="";if("string"==typeof t)e=t;else do{
	var o=so(t,"transform");o&&"none"!==o&&(e=o+" "+e);}while(!n&&(t=t.parentNode))
	;var i=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix
	;return i&&new i(e)}function lo(t,n,e){if(t){
	var o=t.getElementsByTagName(n),i=0,r=o.length;if(e)for(;i<r;i++)e(o[i],i)
	;return o}return []}function uo(){
	return document.scrollingElement||document.documentElement}
	function fo(t,n,e,o,i){if(t.getBoundingClientRect||t===window){var r,a,s,c,l,u,d
	;if(t!==window&&t.parentNode&&t!==uo()?(a=(r=t.getBoundingClientRect()).top,
	s=r.left,
	c=r.bottom,l=r.right,u=r.height,d=r.width):(a=0,s=0,c=window.innerHeight,
	l=window.innerWidth,
	u=window.innerHeight,d=window.innerWidth),(n||e)&&t!==window&&(i=i||t.parentNode,
	!We))do{
	if(i&&i.getBoundingClientRect&&("none"!==so(i,"transform")||e&&"static"!==so(i,"position"))){
	var f=i.getBoundingClientRect()
	;a-=f.top+parseInt(so(i,"border-top-width")),s-=f.left+parseInt(so(i,"border-left-width")),
	c=a+r.height,l=s+r.width;break}}while(i=i.parentNode);if(o&&t!==window){
	var p=co(i||t),m=p&&p.a,h=p&&p.d;p&&(c=(a/=h)+(u/=h),l=(s/=m)+(d/=m));}return {
	top:a,left:s,bottom:c,right:l,width:d,height:u}}}function po(t,n,e){
	for(var o=bo(t,true),i=fo(t)[n];o;){if(!(i>=fo(o)[e]))return o;if(o===uo())break
	;o=bo(o,false);}return  false}function mo(t,n,e,o){
	for(var i=0,r=0,a=t.children;r<a.length;){
	if("none"!==a[r].style.display&&a[r]!==ki.ghost&&(o||a[r]!==ki.dragged)&&oo(a[r],e.draggable,t,false)){
	if(i===n)return a[r];i++;}r++;}return null}function ho(t,n){
	for(var e=t.lastElementChild;e&&(e===ki.ghost||"none"===so(e,"display")||n&&!no(e,n));)e=e.previousElementSibling
	;return e||null}function vo(t,n){var e=0;if(!t||!t.parentNode)return  -1
	;for(;t=t.previousElementSibling;)"TEMPLATE"===t.nodeName.toUpperCase()||t===ki.clone||n&&!no(t,n)||e++
	;return e}function go(t){var n=0,e=0,o=uo();if(t)do{var i=co(t),r=i.a,a=i.d
	;n+=t.scrollLeft*r,e+=t.scrollTop*a;}while(t!==o&&(t=t.parentNode));return [n,e]}
	function bo(t,n){if(!t||!t.getBoundingClientRect)return uo();var e=t,o=false;do{
	if(e.clientWidth<e.scrollWidth||e.clientHeight<e.scrollHeight){var i=so(e)
	;if(e.clientWidth<e.scrollWidth&&("auto"==i.overflowX||"scroll"==i.overflowX)||e.clientHeight<e.scrollHeight&&("auto"==i.overflowY||"scroll"==i.overflowY)){
	if(!e.getBoundingClientRect||e===document.body)return uo();if(o||n)return e;o=true;
	}}}while(e=e.parentNode);return uo()}function yo(t,n){
	return Math.round(t.top)===Math.round(n.top)&&Math.round(t.left)===Math.round(n.left)&&Math.round(t.height)===Math.round(n.height)&&Math.round(t.width)===Math.round(n.width)
	}function wo(t,n){return function(){if(!io){var e=arguments
	;1===e.length?t.call(this,e[0]):t.apply(this,e),io=setTimeout(function(){
	io=void 0;},n);}}}function ko(t,n,e){t.scrollLeft+=n,t.scrollTop+=e;}
	function xo(t){var n=window.Polymer,e=window.jQuery||window.Zepto
	;return n&&n.dom?n.dom(t).cloneNode(true):e?e(t).clone(true)[0]:t.cloneNode(true)}
	function Lo(t,n,e){var o={};return Array.from(t.children).forEach(function(i){
	var r,a,s,c;if(oo(i,n.draggable,t,false)&&!i.animated&&i!==e){var l=fo(i)
	;o.left=Math.min(null!==(r=o.left)&&void 0!==r?r:1/0,l.left),
	o.top=Math.min(null!==(a=o.top)&&void 0!==a?a:1/0,l.top),
	o.right=Math.max(null!==(s=o.right)&&void 0!==s?s:-1/0,l.right),
	o.bottom=Math.max(null!==(c=o.bottom)&&void 0!==c?c:-1/0,l.bottom);}
	}),o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}
	var So="Sortable"+(new Date).getTime(),_o=[],To={initializeByDefault:true},Mo={
	mount:function(t){for(var n in To)To.hasOwnProperty(n)&&!(n in t)&&(t[n]=To[n])
	;_o.forEach(function(n){
	if(n.pluginName===t.pluginName)throw "Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")
	}),_o.push(t);},pluginEvent:function(t,n,e){var o=this
	;this.eventCanceled=false,e.cancel=function(){o.eventCanceled=true;};var i=t+"Global"
	;_o.forEach(function(o){
	n[o.pluginName]&&(n[o.pluginName][i]&&n[o.pluginName][i](Fe({sortable:n
	},e)),n.options[o.pluginName]&&n[o.pluginName][t]&&n[o.pluginName][t](Fe({
	sortable:n},e)));});},initializePlugins:function(t,n,e,o){
	for(var i in _o.forEach(function(o){var i=o.pluginName
	;if(t.options[i]||o.initializeByDefault){var r=new o(t,n,t.options)
	;r.sortable=t,r.options=t.options,t[i]=r,Ue(e,r.defaults);}
	}),t.options)if(t.options.hasOwnProperty(i)){
	var r=this.modifyOption(t,i,t.options[i]);void 0!==r&&(t.options[i]=r);}},
	getEventProperties:function(t,n){var e={};return _o.forEach(function(o){
	"function"==typeof o.eventProperties&&Ue(e,o.eventProperties.call(n[o.pluginName],t));
	}),e},modifyOption:function(t,n,e){var o;return _o.forEach(function(i){
	t[i.pluginName]&&i.optionListeners&&"function"==typeof i.optionListeners[n]&&(o=i.optionListeners[n].call(t[i.pluginName],e));
	}),o}},Io=["evt"],Do=function(t,n){
	var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=e.evt,i=function(t,n){
	if(null==t)return {};var e,o,i=function(t,n){if(null==t)return {}
	;var e,o,i={},r=Object.keys(t)
	;for(o=0;o<r.length;o++)e=r[o],n.indexOf(e)>=0||(i[e]=t[e]);return i}(t,n)
	;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t)
	;for(o=0;o<r.length;o++)e=r[o],
	n.indexOf(e)>=0||{}.propertyIsEnumerable.call(t,e)&&(i[e]=t[e]);}return i}(e,Io)
	;Mo.pluginEvent.bind(ki)(t,n,Fe({dragEl:Eo,parentEl:Po,ghostEl:jo,rootEl:$o,
	nextEl:Ao,lastDownEl:qo,cloneEl:zo,cloneHidden:No,dragStarted:Qo,putSortable:Uo,
	activeSortable:ki.active,originalEvent:o,oldIndex:Co,oldDraggableIndex:Fo,
	newIndex:Ho,newDraggableIndex:Ro,hideGhostForTarget:gi,unhideGhostForTarget:bi,
	cloneNowHidden:function(){No=true;},cloneNowShown:function(){No=false;},
	dispatchSortableEvent:function(t){Oo({sortable:n,name:t,originalEvent:o});}},i));}
	;function Oo(t){!function(t){
	var n=t.sortable,e=t.rootEl,o=t.name,i=t.targetEl,r=t.cloneEl,a=t.toEl,s=t.fromEl,c=t.oldIndex,l=t.newIndex,u=t.oldDraggableIndex,d=t.newDraggableIndex,f=t.originalEvent,p=t.putSortable,m=t.extraEventProperties
	;if(n=n||e&&e[So]){
	var h,v=n.options,g="on"+o.charAt(0).toUpperCase()+o.substr(1)
	;!window.CustomEvent||We||Xe?(h=document.createEvent("Event")).initEvent(o,true,true):h=new CustomEvent(o,{
	bubbles:true,cancelable:true
	}),h.to=a||e,h.from=s||e,h.item=i||e,h.clone=r,h.oldIndex=c,
	h.newIndex=l,h.oldDraggableIndex=u,
	h.newDraggableIndex=d,h.originalEvent=f,h.pullMode=p?p.lastPutMode:void 0
	;var b=Fe(Fe({},m),Mo.getEventProperties(o,n));for(var y in b)h[y]=b[y]
	;e&&e.dispatchEvent(h),v[g]&&v[g].call(n,h);}}(Fe({putSortable:Uo,cloneEl:zo,
	targetEl:Eo,rootEl:$o,oldIndex:Co,oldDraggableIndex:Fo,newIndex:Ho,
	newDraggableIndex:Ro},t));}
	var Eo,Po,jo,$o,Ao,qo,zo,No,Co,Ho,Fo,Ro,Bo,Uo,Go,Wo,Xo,Jo,Ko,Yo,Qo,Vo,Zo,ti,ni,ei=false,oi=false,ii=[],ri=false,ai=false,si=[],ci=false,li=[],ui="undefined"!=typeof document,di=Ye,fi=Xe||We?"cssFloat":"float",pi=ui&&!Qe&&!Ye&&"draggable"in document.createElement("div"),mi=function(){
	if(ui){if(We)return  false;var t=document.createElement("x")
	;return t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}
	}(),hi=function(t,n){
	var e=so(t),o=parseInt(e.width)-parseInt(e.paddingLeft)-parseInt(e.paddingRight)-parseInt(e.borderLeftWidth)-parseInt(e.borderRightWidth),i=mo(t,0,n),r=mo(t,1,n),a=i&&so(i),s=r&&so(r),c=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+fo(i).width,l=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+fo(r).width
	;if("flex"===e.display)return "column"===e.flexDirection||"column-reverse"===e.flexDirection?"vertical":"horizontal"
	;if("grid"===e.display)return e.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal"
	;if(i&&a.float&&"none"!==a.float){var u="left"===a.float?"left":"right"
	;return !r||"both"!==s.clear&&s.clear!==u?"horizontal":"vertical"}
	return i&&("block"===a.display||"flex"===a.display||"table"===a.display||"grid"===a.display||c>=o&&"none"===e[fi]||r&&"none"===e[fi]&&c+l>o)?"vertical":"horizontal"
	},vi=function(t){function n(t,e){return function(o,i,r,a){
	var s=o.options.group.name&&i.options.group.name&&o.options.group.name===i.options.group.name
	;if(null==t&&(e||s))return  true;if(null==t||false===t)return  false
	;if(e&&"clone"===t)return t
	;if("function"==typeof t)return n(t(o,i,r,a),e)(o,i,r,a)
	;var c=(e?o:i).options.group.name
	;return  true===t||"string"==typeof t&&t===c||t.join&&t.indexOf(c)>-1}}
	var e={},o=t.group;o&&"object"==Re(o)||(o={name:o
	}),e.name=o.name,e.checkPull=n(o.pull,true),
	e.checkPut=n(o.put),e.revertClone=o.revertClone,t.group=e;},gi=function(){
	!mi&&jo&&so(jo,"display","none");},bi=function(){!mi&&jo&&so(jo,"display","");}
	;ui&&!Qe&&document.addEventListener("click",function(t){
	if(oi)return t.preventDefault(),
	t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),
	oi=false,false},true);var yi=function(t){if(Eo){t=t.touches?t.touches[0]:t
	;var n=(i=t.clientX,r=t.clientY,ii.some(function(t){
	var n=t[So].options.emptyInsertThreshold;if(n&&!ho(t)){
	var e=fo(t),o=i>=e.left-n&&i<=e.right+n,s=r>=e.top-n&&r<=e.bottom+n
	;return o&&s?a=t:void 0}}),a);if(n){var e={}
	;for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])
	;e.target=e.rootEl=n,e.preventDefault=void 0,
	e.stopPropagation=void 0,n[So]._onDragOver(e);}}var i,r,a;},wi=function(t){
	Eo&&Eo.parentNode[So]._isOutsideThisEl(t.target);};function ki(t,n){
	if(!t||!t.nodeType||1!==t.nodeType)throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t))
	;this.el=t,this.options=n=Ue({},n),t[So]=this;var e,o,i={group:null,sort:true,
	disabled:false,store:null,handle:null,
	draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:false,
	invertedSwapThreshold:null,removeCloneOnHide:true,direction:function(){
	return hi(t,this.options)},ghostClass:"sortable-ghost",
	chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",
	filter:null,preventOnFilter:true,animation:0,easing:null,setData:function(t,n){
	t.setData("Text",n.textContent);},dropBubble:false,dragoverBubble:false,
	dataIdAttr:"data-id",delay:0,delayOnTouchOnly:false,
	touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,
	forceFallback:false,fallbackClass:"sortable-fallback",fallbackOnBody:false,
	fallbackTolerance:0,fallbackOffset:{x:0,y:0},
	supportPointer:false!==ki.supportPointer&&"PointerEvent"in window&&(!Ke||Ye),
	emptyInsertThreshold:5}
	;for(var r in Mo.initializePlugins(this,t,i),i)!(r in n)&&(n[r]=i[r])
	;for(var a in vi(n),
	this)"_"===a.charAt(0)&&"function"==typeof this[a]&&(this[a]=this[a].bind(this))
	;this.nativeDraggable=!n.forceFallback&&pi,
	this.nativeDraggable&&(this.options.touchStartThreshold=1),
	n.supportPointer?Ze(t,"pointerdown",this._onTapStart):(Ze(t,"mousedown",this._onTapStart),
	Ze(t,"touchstart",this._onTapStart)),
	this.nativeDraggable&&(Ze(t,"dragover",this),
	Ze(t,"dragenter",this)),ii.push(this.el),
	n.store&&n.store.get&&this.sort(n.store.get(this)||[]),Ue(this,(o=[],{
	captureAnimationState:function(){
	o=[],this.options.animation&&[].slice.call(this.el.children).forEach(function(t){
	if("none"!==so(t,"display")&&t!==ki.ghost){o.push({target:t,rect:fo(t)})
	;var n=Fe({},o[o.length-1].rect);if(t.thisAnimationDuration){var e=co(t,true)
	;e&&(n.top-=e.f,n.left-=e.e);}t.fromRect=n;}});},addAnimationState:function(t){
	o.push(t);},removeAnimationState:function(t){o.splice(function(t,n){
	for(var e in t)if(t.hasOwnProperty(e))for(var o in n)if(n.hasOwnProperty(o)&&n[o]===t[e][o])return +e
	;return  -1}(o,{target:t}),1);},animateAll:function(t){var n=this
	;if(!this.options.animation)return clearTimeout(e),
	void("function"==typeof t&&t());var i=false,r=0;o.forEach(function(t){
	var e=0,o=t.target,a=o.fromRect,s=fo(o),c=o.prevFromRect,l=o.prevToRect,u=t.rect,d=co(o,true)
	;d&&(s.top-=d.f,
	s.left-=d.e),o.toRect=s,o.thisAnimationDuration&&yo(c,s)&&!yo(a,s)&&(u.top-s.top)/(u.left-s.left)===(a.top-s.top)/(a.left-s.left)&&(e=function(t,n,e,o){
	return Math.sqrt(Math.pow(n.top-t.top,2)+Math.pow(n.left-t.left,2))/Math.sqrt(Math.pow(n.top-e.top,2)+Math.pow(n.left-e.left,2))*o.animation
	}(u,c,l,n.options)),
	yo(s,a)||(o.prevFromRect=a,o.prevToRect=s,e||(e=n.options.animation),
	n.animate(o,u,s,e)),
	e&&(i=true,r=Math.max(r,e),clearTimeout(o.animationResetTimer),
	o.animationResetTimer=setTimeout(function(){
	o.animationTime=0,o.prevFromRect=null,
	o.fromRect=null,o.prevToRect=null,o.thisAnimationDuration=null;
	},e),o.thisAnimationDuration=e);}),clearTimeout(e),i?e=setTimeout(function(){
	"function"==typeof t&&t();},r):"function"==typeof t&&t(),o=[];},
	animate:function(t,n,e,o){if(o){so(t,"transition",""),so(t,"transform","")
	;var i=co(this.el),r=i&&i.a,a=i&&i.d,s=(n.left-e.left)/(r||1),c=(n.top-e.top)/(a||1)
	;t.animatingX=!!s,
	t.animatingY=!!c,so(t,"transform","translate3d("+s+"px,"+c+"px,0)"),
	this.forRepaintDummy=function(t){return t.offsetWidth
	}(t),so(t,"transition","transform "+o+"ms"+(this.options.easing?" "+this.options.easing:"")),
	so(t,"transform","translate3d(0,0,0)"),
	"number"==typeof t.animated&&clearTimeout(t.animated),
	t.animated=setTimeout(function(){
	so(t,"transition",""),so(t,"transform",""),t.animated=false,
	t.animatingX=false,t.animatingY=false;},o);}}}));}function xi(t,n,e,o,i,r,a,s){
	var c,l,u=t[So],d=u.options.onMove
	;return !window.CustomEvent||We||Xe?(c=document.createEvent("Event")).initEvent("move",true,true):c=new CustomEvent("move",{
	bubbles:true,cancelable:true
	}),c.to=n,c.from=t,c.dragged=e,c.draggedRect=o,c.related=i||n,
	c.relatedRect=r||fo(n),c.willInsertAfter=s,c.originalEvent=a,t.dispatchEvent(c),
	d&&(l=d.call(u,c,a)),l}function Li(t){t.draggable=false;}function Si(){ci=false;}
	function _i(t){
	for(var n=t.tagName+t.className+t.src+t.href+t.textContent,e=n.length,o=0;e--;)o+=n.charCodeAt(e)
	;return o.toString(36)}function Ti(t){return setTimeout(t,0)}function Mi(t){
	return clearTimeout(t)}ki.prototype={constructor:ki,
	_isOutsideThisEl:function(t){this.el.contains(t)||t===this.el||(Vo=null);},
	_getDirection:function(t,n){
	return "function"==typeof this.options.direction?this.options.direction.call(this,t,n,Eo):this.options.direction
	},_onTapStart:function(t){if(t.cancelable){
	var n=this,e=this.el,o=this.options,i=o.preventOnFilter,r=t.type,a=t.touches&&t.touches[0]||t.pointerType&&"touch"===t.pointerType&&t,s=(a||t).target,c=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||s,l=o.filter
	;if(function(t){li.length=0
	;for(var n=t.getElementsByTagName("input"),e=n.length;e--;){var o=n[e]
	;o.checked&&li.push(o);}
	}(e),!Eo&&!(/mousedown|pointerdown/.test(r)&&0!==t.button||o.disabled)&&!c.isContentEditable&&(this.nativeDraggable||!Ke||!s||"SELECT"!==s.tagName.toUpperCase())&&!((s=oo(s,o.draggable,e,false))&&s.animated||qo===s)){
	if(Co=vo(s),Fo=vo(s,o.draggable),"function"==typeof l){
	if(l.call(this,t,s,this))return Oo({sortable:n,rootEl:c,name:"filter",
	targetEl:s,toEl:e,fromEl:e}),Do("filter",n,{evt:t}),void(i&&t.preventDefault())
	}else if(l&&(l=l.split(",").some(function(o){
	if(o=oo(c,o.trim(),e,false))return Oo({sortable:n,rootEl:o,name:"filter",
	targetEl:s,fromEl:e,toEl:e}),Do("filter",n,{evt:t}),true
	})))return void(i&&t.preventDefault())
	;o.handle&&!oo(c,o.handle,e,false)||this._prepareDragStart(t,a,s);}}},
	_prepareDragStart:function(t,n,e){
	var o,i=this,r=i.el,a=i.options,s=r.ownerDocument;if(e&&!Eo&&e.parentNode===r){
	var c=fo(e)
	;if($o=r,Po=(Eo=e).parentNode,Ao=Eo.nextSibling,qo=e,Bo=a.group,ki.dragged=Eo,
	Go={target:Eo,clientX:(n||t).clientX,clientY:(n||t).clientY
	},Ko=Go.clientX-c.left,
	Yo=Go.clientY-c.top,this._lastX=(n||t).clientX,this._lastY=(n||t).clientY,
	Eo.style["will-change"]="all",o=function(){Do("delayEnded",i,{evt:t
	}),ki.eventCanceled?i._onDrop():(i._disableDelayedDragEvents(),
	!Je&&i.nativeDraggable&&(Eo.draggable=true),i._triggerDragStart(t,n),Oo({
	sortable:i,name:"choose",originalEvent:t}),ao(Eo,a.chosenClass,true));
	},a.ignore.split(",").forEach(function(t){lo(Eo,t.trim(),Li);
	}),Ze(s,"dragover",yi),
	Ze(s,"mousemove",yi),Ze(s,"touchmove",yi),a.supportPointer?(Ze(s,"pointerup",i._onDrop),
	!this.nativeDraggable&&Ze(s,"pointercancel",i._onDrop)):(Ze(s,"mouseup",i._onDrop),
	Ze(s,"touchend",i._onDrop),
	Ze(s,"touchcancel",i._onDrop)),Je&&this.nativeDraggable&&(this.options.touchStartThreshold=4,
	Eo.draggable=true),Do("delayStart",this,{evt:t
	}),!a.delay||a.delayOnTouchOnly&&!n||this.nativeDraggable&&(Xe||We))o();else {
	if(ki.eventCanceled)return void this._onDrop()
	;a.supportPointer?(Ze(s,"pointerup",i._disableDelayedDrag),
	Ze(s,"pointercancel",i._disableDelayedDrag)):(Ze(s,"mouseup",i._disableDelayedDrag),
	Ze(s,"touchend",i._disableDelayedDrag),
	Ze(s,"touchcancel",i._disableDelayedDrag)),
	Ze(s,"mousemove",i._delayedDragTouchMoveHandler),
	Ze(s,"touchmove",i._delayedDragTouchMoveHandler),
	a.supportPointer&&Ze(s,"pointermove",i._delayedDragTouchMoveHandler),
	i._dragStartTimer=setTimeout(o,a.delay);}}},
	_delayedDragTouchMoveHandler:function(t){var n=t.touches?t.touches[0]:t
	;Math.max(Math.abs(n.clientX-this._lastX),Math.abs(n.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag();
	},_disableDelayedDrag:function(){
	Eo&&Li(Eo),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents();},
	_disableDelayedDragEvents:function(){var t=this.el.ownerDocument
	;to(t,"mouseup",this._disableDelayedDrag),
	to(t,"touchend",this._disableDelayedDrag),
	to(t,"touchcancel",this._disableDelayedDrag),
	to(t,"pointerup",this._disableDelayedDrag),
	to(t,"pointercancel",this._disableDelayedDrag),
	to(t,"mousemove",this._delayedDragTouchMoveHandler),
	to(t,"touchmove",this._delayedDragTouchMoveHandler),
	to(t,"pointermove",this._delayedDragTouchMoveHandler);},
	_triggerDragStart:function(t,n){
	n=n||"touch"==t.pointerType&&t,!this.nativeDraggable||n?this.options.supportPointer?Ze(document,"pointermove",this._onTouchMove):Ze(document,n?"touchmove":"mousemove",this._onTouchMove):(Ze(Eo,"dragend",this),
	Ze($o,"dragstart",this._onDragStart));try{document.selection?Ti(function(){
	document.selection.empty();}):window.getSelection().removeAllRanges();}catch(e){}
	},_dragStarted:function(t,n){if(ei=false,$o&&Eo){Do("dragStarted",this,{evt:n
	}),this.nativeDraggable&&Ze(document,"dragover",wi);var e=this.options
	;!t&&ao(Eo,e.dragClass,false),
	ao(Eo,e.ghostClass,true),ki.active=this,t&&this._appendGhost(),Oo({sortable:this,
	name:"start",originalEvent:n});}else this._nulling();},
	_emulateDragOver:function(){if(Wo){
	this._lastX=Wo.clientX,this._lastY=Wo.clientY,gi()
	;for(var t=document.elementFromPoint(Wo.clientX,Wo.clientY),n=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(Wo.clientX,Wo.clientY))!==n;)n=t
	;if(Eo.parentNode[So]._isOutsideThisEl(t),n)do{if(n[So]&&n[So]._onDragOver({
	clientX:Wo.clientX,clientY:Wo.clientY,target:t,rootEl:n
	})&&!this.options.dragoverBubble)break;t=n;}while(n=eo(n));bi();}},
	_onTouchMove:function(t){if(Go){
	var n=this.options,e=n.fallbackTolerance,o=n.fallbackOffset,i=t.touches?t.touches[0]:t,r=jo&&co(jo,true),a=jo&&r&&r.a,s=jo&&r&&r.d,c=di&&ni&&go(ni),l=(i.clientX-Go.clientX+o.x)/(a||1)+(c?c[0]-si[0]:0)/(a||1),u=(i.clientY-Go.clientY+o.y)/(s||1)+(c?c[1]-si[1]:0)/(s||1)
	;if(!ki.active&&!ei){
	if(e&&Math.max(Math.abs(i.clientX-this._lastX),Math.abs(i.clientY-this._lastY))<e)return
	;this._onDragStart(t,true);}if(jo){r?(r.e+=l-(Xo||0),r.f+=u-(Jo||0)):r={a:1,b:0,
	c:0,d:1,e:l,f:u}
	;var d="matrix(".concat(r.a,",").concat(r.b,",").concat(r.c,",").concat(r.d,",").concat(r.e,",").concat(r.f,")")
	;so(jo,"webkitTransform",d),
	so(jo,"mozTransform",d),so(jo,"msTransform",d),so(jo,"transform",d),
	Xo=l,Jo=u,Wo=i;}t.cancelable&&t.preventDefault();}},_appendGhost:function(){
	if(!jo){
	var t=this.options.fallbackOnBody?document.body:$o,n=fo(Eo,true,di,true,t),e=this.options
	;if(di){
	for(ni=t;"static"===so(ni,"position")&&"none"===so(ni,"transform")&&ni!==document;)ni=ni.parentNode
	;ni!==document.body&&ni!==document.documentElement?(ni===document&&(ni=uo()),
	n.top+=ni.scrollTop,n.left+=ni.scrollLeft):ni=uo(),si=go(ni);}
	ao(jo=Eo.cloneNode(true),e.ghostClass,false),
	ao(jo,e.fallbackClass,true),ao(jo,e.dragClass,true),
	so(jo,"transition",""),so(jo,"transform",""),
	so(jo,"box-sizing","border-box"),so(jo,"margin",0),
	so(jo,"top",n.top),so(jo,"left",n.left),
	so(jo,"width",n.width),so(jo,"height",n.height),
	so(jo,"opacity","0.8"),so(jo,"position",di?"absolute":"fixed"),
	so(jo,"zIndex","100000"),
	so(jo,"pointerEvents","none"),ki.ghost=jo,t.appendChild(jo),
	so(jo,"transform-origin",Ko/parseInt(jo.style.width)*100+"% "+Yo/parseInt(jo.style.height)*100+"%");
	}},_onDragStart:function(t,n){var e=this,o=t.dataTransfer,i=e.options
	;Do("dragStart",this,{evt:t
	}),ki.eventCanceled?this._onDrop():(Do("setupClone",this),
	ki.eventCanceled||((zo=xo(Eo)).removeAttribute("id"),
	zo.draggable=false,zo.style["will-change"]="",
	this._hideClone(),ao(zo,this.options.chosenClass,false),
	ki.clone=zo),e.cloneId=Ti(function(){
	Do("clone",e),ki.eventCanceled||(e.options.removeCloneOnHide||$o.insertBefore(zo,Eo),
	e._hideClone(),Oo({sortable:e,name:"clone"}));
	}),!n&&ao(Eo,i.dragClass,true),n?(oi=true,
	e._loopId=setInterval(e._emulateDragOver,50)):(to(document,"mouseup",e._onDrop),
	to(document,"touchend",e._onDrop),
	to(document,"touchcancel",e._onDrop),o&&(o.effectAllowed="move",
	i.setData&&i.setData.call(e,o,Eo)),
	Ze(document,"drop",e),so(Eo,"transform","translateZ(0)")),
	ei=true,e._dragStartId=Ti(e._dragStarted.bind(e,n,t)),
	Ze(document,"selectstart",e),
	Qo=true,window.getSelection().removeAllRanges(),Ke&&so(document.body,"user-select","none"));
	},_onDragOver:function(t){
	var n,e,o,i,r=this.el,a=t.target,s=this.options,c=s.group,l=ki.active,u=Bo===c,d=s.sort,f=Uo||l,p=this,m=false
	;if(!ci){
	if(void 0!==t.preventDefault&&t.cancelable&&t.preventDefault(),a=oo(a,s.draggable,r,true),
	D("dragOver"),ki.eventCanceled)return m
	;if(Eo.contains(t.target)||a.animated&&a.animatingX&&a.animatingY||p._ignoreWhileAnimating===a)return E(false)
	;if(oi=false,
	l&&!s.disabled&&(u?d||(o=Po!==$o):Uo===this||(this.lastPutMode=Bo.checkPull(this,l,Eo,t))&&c.checkPut(this,l,Eo,t))){
	if(i="vertical"===this._getDirection(t,a),
	n=fo(Eo),D("dragOverValid"),ki.eventCanceled)return m
	;if(o)return Po=$o,O(),this._hideClone(),
	D("revert"),ki.eventCanceled||(Ao?$o.insertBefore(Eo,Ao):$o.appendChild(Eo)),
	E(true);var h=ho(r,s.draggable);if(!h||function(t,n,e){
	var o=fo(ho(e.el,e.options.draggable)),i=Lo(e.el,e.options,jo)
	;return n?t.clientX>i.right+10||t.clientY>o.bottom&&t.clientX>o.left:t.clientY>i.bottom+10||t.clientX>o.right&&t.clientY>o.top
	}(t,i,this)&&!h.animated){if(h===Eo)return E(false)
	;if(h&&r===t.target&&(a=h),a&&(e=fo(a)),false!==xi($o,r,Eo,n,a,e,t,!!a))return O(),
	h&&h.nextSibling?r.insertBefore(Eo,h.nextSibling):r.appendChild(Eo),
	Po=r,P(),E(true)}else if(h&&function(t,n,e){
	var o=fo(mo(e.el,0,e.options,true)),i=Lo(e.el,e.options,jo)
	;return n?t.clientX<i.left-10||t.clientY<o.top&&t.clientX<o.right:t.clientY<i.top-10||t.clientY<o.bottom&&t.clientX<o.left
	}(t,i,this)){var v=mo(r,0,s,true);if(v===Eo)return E(false)
	;if(e=fo(a=v),false!==xi($o,r,Eo,n,a,e,t,false))return O(),
	r.insertBefore(Eo,v),Po=r,P(),E(true)}else if(a.parentNode===r){e=fo(a)
	;var g,b,y,w=Eo.parentNode!==r,k=!function(t,n,e){
	var o=e?t.left:t.top,i=e?t.right:t.bottom,r=e?t.width:t.height,a=e?n.left:n.top,s=e?n.right:n.bottom,c=e?n.width:n.height
	;return o===a||i===s||o+r/2===a+c/2
	}(Eo.animated&&Eo.toRect||n,a.animated&&a.toRect||e,i),x=i?"top":"left",L=po(a,"top","top")||po(Eo,"top","top"),S=L?L.scrollTop:void 0
	;if(Vo!==a&&(b=e[x],ri=false,ai=!k&&s.invertSwap||w),g=function(t,n,e,o,i,r,a,s){
	var c=o?t.clientY:t.clientX,l=o?e.height:e.width,u=o?e.top:e.left,d=o?e.bottom:e.right,f=false
	;if(!a)if(s&&ti<l*i){
	if(!ri&&(1===Zo?c>u+l*r/2:c<d-l*r/2)&&(ri=true),ri)f=true;else if(1===Zo?c<u+ti:c>d-ti)return -Zo
	}else if(c>u+l*(1-i)/2&&c<d-l*(1-i)/2)return function(t){
	return vo(Eo)<vo(t)?1:-1}(n)
	;return (f=f||a)&&(c<u+l*r/2||c>d-l*r/2)?c>u+l/2?1:-1:0
	}(t,a,e,i,k?1:s.swapThreshold,null==s.invertedSwapThreshold?s.swapThreshold:s.invertedSwapThreshold,ai,Vo===a),
	0!==g){var _=vo(Eo);do{_-=g,y=Po.children[_];
	}while(y&&("none"===so(y,"display")||y===jo))}if(0===g||y===a)return E(false);Vo=a,
	Zo=g;var T=a.nextElementSibling,M=false,I=xi($o,r,Eo,n,a,e,t,M=1===g)
	;if(false!==I)return 1!==I&&-1!==I||(M=1===I),
	ci=true,setTimeout(Si,30),O(),M&&!T?r.appendChild(Eo):a.parentNode.insertBefore(Eo,M?T:a),
	L&&ko(L,0,S-L.scrollTop),
	Po=Eo.parentNode,void 0===b||ai||(ti=Math.abs(b-fo(a)[x])),P(),E(true)}
	if(r.contains(Eo))return E(false)}return  false}function D(s,c){Do(s,p,Fe({evt:t,
	isOwner:u,axis:i?"vertical":"horizontal",revert:o,dragRect:n,targetRect:e,
	canSort:d,fromSortable:f,target:a,completed:E,onMove:function(e,o){
	return xi($o,r,Eo,n,e,fo(e),t,o)},changed:P},c));}function O(){
	D("dragOverAnimationCapture"),
	p.captureAnimationState(),p!==f&&f.captureAnimationState();}function E(n){
	return D("dragOverCompleted",{insertion:n
	}),n&&(u?l._hideClone():l._showClone(p),
	p!==f&&(ao(Eo,Uo?Uo.options.ghostClass:l.options.ghostClass,false),
	ao(Eo,s.ghostClass,true)),Uo!==p&&p!==ki.active?Uo=p:p===ki.active&&Uo&&(Uo=null),
	f===p&&(p._ignoreWhileAnimating=a),p.animateAll(function(){
	D("dragOverAnimationComplete"),p._ignoreWhileAnimating=null;
	}),p!==f&&(f.animateAll(),
	f._ignoreWhileAnimating=null)),(a===Eo&&!Eo.animated||a===r&&!a.animated)&&(Vo=null),
	s.dragoverBubble||t.rootEl||a===document||(Eo.parentNode[So]._isOutsideThisEl(t.target),
	!n&&yi(t)),!s.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),m=true}
	function P(){Ho=vo(Eo),Ro=vo(Eo,s.draggable),Oo({sortable:p,name:"change",
	toEl:r,newIndex:Ho,newDraggableIndex:Ro,originalEvent:t});}},
	_ignoreWhileAnimating:null,_offMoveEvents:function(){
	to(document,"mousemove",this._onTouchMove),
	to(document,"touchmove",this._onTouchMove),
	to(document,"pointermove",this._onTouchMove),
	to(document,"dragover",yi),to(document,"mousemove",yi),
	to(document,"touchmove",yi);},_offUpEvents:function(){var t=this.el.ownerDocument
	;to(t,"mouseup",this._onDrop),
	to(t,"touchend",this._onDrop),to(t,"pointerup",this._onDrop),
	to(t,"pointercancel",this._onDrop),
	to(t,"touchcancel",this._onDrop),to(document,"selectstart",this);},
	_onDrop:function(t){var n=this.el,e=this.options
	;Ho=vo(Eo),Ro=vo(Eo,e.draggable),Do("drop",this,{evt:t
	}),Po=Eo&&Eo.parentNode,Ho=vo(Eo),
	Ro=vo(Eo,e.draggable),ki.eventCanceled||(ei=false,
	ai=false,ri=false,clearInterval(this._loopId),
	clearTimeout(this._dragStartTimer),Mi(this.cloneId),
	Mi(this._dragStartId),this.nativeDraggable&&(to(document,"drop",this),
	to(n,"dragstart",this._onDragStart)),
	this._offMoveEvents(),this._offUpEvents(),Ke&&so(document.body,"user-select",""),
	so(Eo,"transform",""),
	t&&(Qo&&(t.cancelable&&t.preventDefault(),!e.dropBubble&&t.stopPropagation()),
	jo&&jo.parentNode&&jo.parentNode.removeChild(jo),
	($o===Po||Uo&&"clone"!==Uo.lastPutMode)&&zo&&zo.parentNode&&zo.parentNode.removeChild(zo),
	Eo&&(this.nativeDraggable&&to(Eo,"dragend",this),
	Li(Eo),Eo.style["will-change"]="",
	Qo&&!ei&&ao(Eo,Uo?Uo.options.ghostClass:this.options.ghostClass,false),
	ao(Eo,this.options.chosenClass,false),Oo({sortable:this,name:"unchoose",toEl:Po,
	newIndex:null,newDraggableIndex:null,originalEvent:t}),$o!==Po?(Ho>=0&&(Oo({
	rootEl:Po,name:"add",toEl:Po,fromEl:$o,originalEvent:t}),Oo({sortable:this,
	name:"remove",toEl:Po,originalEvent:t}),Oo({rootEl:Po,name:"sort",toEl:Po,
	fromEl:$o,originalEvent:t}),Oo({sortable:this,name:"sort",toEl:Po,
	originalEvent:t})),Uo&&Uo.save()):Ho!==Co&&Ho>=0&&(Oo({sortable:this,
	name:"update",toEl:Po,originalEvent:t}),Oo({sortable:this,name:"sort",toEl:Po,
	originalEvent:t})),ki.active&&(null!=Ho&&-1!==Ho||(Ho=Co,Ro=Fo),Oo({
	sortable:this,name:"end",toEl:Po,originalEvent:t
	}),this.save())))),this._nulling();},_nulling:function(){
	Do("nulling",this),$o=Eo=Po=jo=Ao=zo=qo=No=Go=Wo=Qo=Ho=Ro=Co=Fo=Vo=Zo=Uo=Bo=ki.dragged=ki.ghost=ki.clone=ki.active=null,
	li.forEach(function(t){t.checked=true;}),li.length=Xo=Jo=0;},
	handleEvent:function(t){switch(t.type){case "drop":case "dragend":this._onDrop(t)
	;break;case "dragenter":case "dragover":Eo&&(this._onDragOver(t),function(t){
	t.dataTransfer&&(t.dataTransfer.dropEffect="move"),
	t.cancelable&&t.preventDefault();}(t));break;case "selectstart":t.preventDefault();
	}},toArray:function(){
	for(var t,n=[],e=this.el.children,o=0,i=e.length,r=this.options;o<i;o++)oo(t=e[o],r.draggable,this.el,false)&&n.push(t.getAttribute(r.dataIdAttr)||_i(t))
	;return n},sort:function(t,n){var e={},o=this.el
	;this.toArray().forEach(function(t,n){var i=o.children[n]
	;oo(i,this.options.draggable,o,false)&&(e[t]=i);
	},this),n&&this.captureAnimationState(),t.forEach(function(t){
	e[t]&&(o.removeChild(e[t]),o.appendChild(e[t]));}),n&&this.animateAll();},
	save:function(){var t=this.options.store;t&&t.set&&t.set(this);},
	closest:function(t,n){return oo(t,n||this.options.draggable,this.el,false)},
	option:function(t,n){var e=this.options;if(void 0===n)return e[t]
	;var o=Mo.modifyOption(this,t,n);e[t]=void 0!==o?o:n,"group"===t&&vi(e);},
	destroy:function(){Do("destroy",this);var t=this.el
	;t[So]=null,to(t,"mousedown",this._onTapStart),
	to(t,"touchstart",this._onTapStart),
	to(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(to(t,"dragover",this),
	to(t,"dragenter",this)),
	[].forEach.call(t.querySelectorAll("[draggable]"),function(t){
	t.removeAttribute("draggable");
	}),this._onDrop(),this._disableDelayedDragEvents(),
	ii.splice(ii.indexOf(this.el),1),this.el=t=null;},_hideClone:function(){if(!No){
	if(Do("hideClone",this),ki.eventCanceled)return
	;so(zo,"display","none"),this.options.removeCloneOnHide&&zo.parentNode&&zo.parentNode.removeChild(zo),
	No=true;}},_showClone:function(t){if("clone"===t.lastPutMode){if(No){
	if(Do("showClone",this),ki.eventCanceled)return
	;Eo.parentNode!=$o||this.options.group.revertClone?Ao?$o.insertBefore(zo,Ao):$o.appendChild(zo):$o.insertBefore(zo,Eo),
	this.options.group.revertClone&&this.animate(Eo,zo),so(zo,"display",""),No=false;}
	}else this._hideClone();}},ui&&Ze(document,"touchmove",function(t){
	(ki.active||ei)&&t.cancelable&&t.preventDefault();}),ki.utils={on:Ze,off:to,
	css:so,find:lo,is:function(t,n){return !!oo(t,n,t,false)},extend:function(t,n){
	if(t&&n)for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e]);return t},throttle:wo,
	closest:oo,toggleClass:ao,clone:xo,index:vo,nextTick:Ti,cancelNextTick:Mi,
	detectDirection:hi,getChild:mo,expando:So},ki.get=function(t){return t[So]
	},ki.mount=function(){
	for(var t=arguments.length,n=Array(t),e=0;e<t;e++)n[e]=arguments[e]
	;n[0].constructor===Array&&(n=n[0]),n.forEach(function(t){
	if(!t.prototype||!t.prototype.constructor)throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t))
	;t.utils&&(ki.utils=Fe(Fe({},ki.utils),t.utils)),Mo.mount(t);});
	},ki.create=function(t,n){return new ki(t,n)},ki.version="1.15.6"
	;var Ii,Di,Oi,Ei,Pi,ji,$i=[],Ai=false;function qi(){$i.forEach(function(t){
	clearInterval(t.pid);}),$i=[];}function zi(){clearInterval(ji);}
	var Ni=wo(function(t,n,e,o){if(n.scroll){
	var i,r=(t.touches?t.touches[0]:t).clientX,a=(t.touches?t.touches[0]:t).clientY,s=n.scrollSensitivity,c=n.scrollSpeed,l=uo(),u=false
	;Di!==e&&(Di=e,qi(),Ii=n.scroll,i=n.scrollFn,true===Ii&&(Ii=bo(e,true)))
	;var d=0,f=Ii;do{
	var p=f,m=fo(p),h=m.top,v=m.bottom,g=m.left,b=m.right,y=m.width,w=m.height,k=void 0,x=void 0,L=p.scrollWidth,S=p.scrollHeight,_=so(p),T=p.scrollLeft,M=p.scrollTop
	;p===l?(k=y<L&&("auto"===_.overflowX||"scroll"===_.overflowX||"visible"===_.overflowX),
	x=w<S&&("auto"===_.overflowY||"scroll"===_.overflowY||"visible"===_.overflowY)):(k=y<L&&("auto"===_.overflowX||"scroll"===_.overflowX),
	x=w<S&&("auto"===_.overflowY||"scroll"===_.overflowY))
	;var I=k&&(Math.abs(b-r)<=s&&T+y<L)-(Math.abs(g-r)<=s&&!!T),D=x&&(Math.abs(v-a)<=s&&M+w<S)-(Math.abs(h-a)<=s&&!!M)
	;if(!$i[d])for(var O=0;O<=d;O++)$i[O]||($i[O]={})
	;$i[d].vx==I&&$i[d].vy==D&&$i[d].el===p||($i[d].el=p,
	$i[d].vx=I,$i[d].vy=D,clearInterval($i[d].pid),
	0==I&&0==D||(u=true,$i[d].pid=setInterval(function(){
	o&&0===this.layer&&ki.active._onTouchMove(Pi)
	;var n=$i[this.layer].vy?$i[this.layer].vy*c:0,e=$i[this.layer].vx?$i[this.layer].vx*c:0
	;"function"==typeof i&&"continue"!==i.call(ki.dragged.parentNode[So],e,n,t,Pi,$i[this.layer].el)||ko($i[this.layer].el,e,n);
	}.bind({layer:d}),24))),d++;}while(n.bubbleScroll&&f!==l&&(f=bo(f,false)));Ai=u;}
	},30),Ci=function(t){
	var n=t.originalEvent,e=t.putSortable,o=t.dragEl,i=t.activeSortable,r=t.dispatchSortableEvent,a=t.hideGhostForTarget,s=t.unhideGhostForTarget
	;if(n){var c=e||i;a()
	;var l=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:n,u=document.elementFromPoint(l.clientX,l.clientY)
	;s(),c&&!c.el.contains(u)&&(r("spill"),this.onSpill({dragEl:o,putSortable:e}));}}
	;function Hi(){}function Fi(){}Hi.prototype={startIndex:null,
	dragStart:function(t){var n=t.oldDraggableIndex;this.startIndex=n;},
	onSpill:function(t){var n=t.dragEl,e=t.putSortable
	;this.sortable.captureAnimationState(),e&&e.captureAnimationState()
	;var o=mo(this.sortable.el,this.startIndex,this.options)
	;o?this.sortable.el.insertBefore(n,o):this.sortable.el.appendChild(n),
	this.sortable.animateAll(),e&&e.animateAll();},drop:Ci},Ue(Hi,{
	pluginName:"revertOnSpill"}),Fi.prototype={onSpill:function(t){
	var n=t.dragEl,e=t.putSortable||this.sortable
	;e.captureAnimationState(),n.parentNode&&n.parentNode.removeChild(n),
	e.animateAll();},drop:Ci},Ue(Fi,{pluginName:"removeOnSpill"
	}),ki.mount(new function(){function t(){for(var t in this.defaults={scroll:true,
	forceAutoScrollFallback:false,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:true},
	this)"_"===t.charAt(0)&&"function"==typeof this[t]&&(this[t]=this[t].bind(this));
	}return t.prototype={dragStarted:function(t){var n=t.originalEvent
	;this.sortable.nativeDraggable?Ze(document,"dragover",this._handleAutoScroll):this.options.supportPointer?Ze(document,"pointermove",this._handleFallbackAutoScroll):n.touches?Ze(document,"touchmove",this._handleFallbackAutoScroll):Ze(document,"mousemove",this._handleFallbackAutoScroll);
	},dragOverCompleted:function(t){var n=t.originalEvent
	;this.options.dragOverBubble||n.rootEl||this._handleAutoScroll(n);},
	drop:function(){
	this.sortable.nativeDraggable?to(document,"dragover",this._handleAutoScroll):(to(document,"pointermove",this._handleFallbackAutoScroll),
	to(document,"touchmove",this._handleFallbackAutoScroll),
	to(document,"mousemove",this._handleFallbackAutoScroll)),
	zi(),qi(),clearTimeout(io),io=void 0;},nulling:function(){
	Pi=Di=Ii=Ai=ji=Oi=Ei=null,$i.length=0;},_handleFallbackAutoScroll:function(t){
	this._handleAutoScroll(t,true);},_handleAutoScroll:function(t,n){
	var e=this,o=(t.touches?t.touches[0]:t).clientX,i=(t.touches?t.touches[0]:t).clientY,r=document.elementFromPoint(o,i)
	;if(Pi=t,n||this.options.forceAutoScrollFallback||Xe||We||Ke){
	Ni(t,this.options,r,n);var a=bo(r,true)
	;!Ai||ji&&o===Oi&&i===Ei||(ji&&zi(),ji=setInterval(function(){
	var r=bo(document.elementFromPoint(o,i),true)
	;r!==a&&(a=r,qi()),Ni(t,e.options,r,n);},10),Oi=o,Ei=i);}else {
	if(!this.options.bubbleScroll||bo(r,true)===uo())return void qi()
	;Ni(t,this.options,bo(r,false),false);}}},Ue(t,{pluginName:"scroll",
	initializeByDefault:true})}),ki.mount(Fi,Hi);const Ri={box:t=>{var n;const e=G({
	title:k,element:t});null==(n=null==e?void 0:e.parentElement)||n.appendChild(j({
	id:"nst-item-resp",classList:"nst-box-row hidden"})),Gi();},item:t=>{
	t.removeEventListener("dblclick",Wi),t.addEventListener("dblclick",t=>{var n
	;(null==(n=t.target)?void 0:n.closest(".name"))&&Wi(t);});},nopager:()=>{}}
	;function Bi(t){var n;t.stopPropagation()
	;const e=null==(n=t.target.closest("#nst-quick-use"))?void 0:n.parentElement
	;if(!e)return;const o=e.getAttribute("data-itemID");if(!o)return;const i=f(L)
	;o in i&&async function(t){const n=document.getElementById("nst-item-resp")
	;n&&(n.innerHTML="",await async function(t,n){
	const{id:e}=t,o="energy"===e?"https://www.torn.com/factions.php?rfcv="+dt():"https://www.torn.com/item.php?rfcv="+dt()
	;let i;i="energy"===e?{step:"armouryRefillEnergy"}:{step:"useItem",itemID:e,
	fac:"1"};const r=new URLSearchParams(i);try{
	const t=await wt("POST",o,r),e=t.links??{},i=(null==t?void 0:t.text)??(null==t?void 0:t.message)??"",a=j({})
	;a.appendChild(N({innerHTML:i}));const s=N({});Object.values(e).forEach(t=>{
	var n;const e=E({classList:"t-blue h m-left10 "+t.class,href:t.url,
	innerText:t.title});null==(n=t.attr)||n.split(/\s+/).forEach(t=>{
	const[n,o]=t.split("=");n&&o&&e.setAttribute(n,o);}),s.appendChild(e);
	}),a.appendChild(s),n.appendChild(a),n.classList.remove("nstGreen","nstBold")
	;const c=n.querySelector(".counter-wrap");if(c){
	const t=1e3*+(c.getAttribute("data-time")||0),n=Math.floor(t/864e5),e=Math.floor(t%864e5/36e5)+24*n,o=Math.floor(t%36e5/6e4),i=Math.floor(t%6e4/1e3)
	;c.innerText=`${e}:${o}:${i}`;}}catch(a){n.appendChild(N({
	innerText:["Error using item.",a].join("\n")}));}
	}(t,n),n.classList.remove("hidden"));}(i[o]);}function Ui(t){var n
	;t.stopPropagation(),t.preventDefault()
	;const e=null==(n=t.target.closest("#nst-quick-use"))?void 0:n.parentElement
	;if(!e)return;const o=e.getAttribute("data-itemID");if(!o)return;const i=f(L)
	;o in i&&(delete i[o],p({[L]:i}),Gi());}function Gi(){
	const t=document.getElementById("nst-"+x);if(!t)return;t.innerHTML=""
	;const n=Object.values(f(L)),e=document.createDocumentFragment()
	;n.forEach(t=>function(t,n){
	const{id:e,name:o,quantity:i}=t,r=`/images/items/${e}/medium.png`,a=j({
	classList:"nst-box-btn-div"})
	;a.setAttribute("data-itemID",e),a.setAttribute("data-qty",i);const s=P({
	id:"nst-quick-use",classList:"nst-box-button",onclick:Bi
	}),c="energy"===o?O("i",{classList:"currency-points"}):$({src:r,alt:o,
	classList:"nst-box-img"}),l=C({id:"nst-quick-name",innerText:o}),u=C({
	id:"nst-quick-close",classList:"nst-box-close",innerText:"✕",onclick:Ui})
	;s.append(c,l,u),a.appendChild(s),n.appendChild(a);
	}(t,e)),t.appendChild(e),new ki(t,{animation:150,dataIdAttr:"data-itemid",
	store:{get:()=>{const t=f(L)
	;return Object.entries(t).sort((t,n)=>t[1].order-n[1].order).map(t=>t[0])},
	set:t=>{const n=t.toArray(),e=f(L);let o=false;n.forEach((t,n)=>{
	e[t].order!==n&&(e[t].order=n,o=true);}),o&&p({[L]:e});}}});}function Wi(e){var o,i,r
	;e.stopPropagation(),e.preventDefault()
	;const a=null==(o=e.target)?void 0:o.closest(".name");if(!a)return
	;const s=null==(i=a.closest("li"))?void 0:i.querySelector("img")
	;let c=a.innerText;c=/Points/.test(c)?"energy":t(c.replace(/ x\d+$/,""))
	;const l="energy"===c?"energy":s?n(s.getAttribute("src")).toString():""
	;if(!l)return;const u=f(L);if(l in u)return
	;const d=0===Object.values(u).length?0:+(null==(r=Object.values(u).reduce((t,n)=>(null==t?void 0:t.order)>(null==n?void 0:n.order)?t:n))?void 0:r.order)
	;u[l]={id:l,order:d+1,name:c},p({[L]:u}),Gi();}function Xi(t){
	new MutationObserver(t=>{t.forEach(t=>{const n=Array.from(t.addedNodes)
	;n.length&&n.forEach(t=>{var n
	;const e="faction-armoury-tabs"===(null==t?void 0:t.id),o=/armoury-(medical|drugs|boosters|points)/g.test(null==(n=null==t?void 0:t.parentElement)?void 0:n.id)&&"UL"===t.tagName&&t.classList.contains("item-list")
	;Ri[e?"box":o?"item":"nopager"](t);});});}).observe(t,{childList:true,subtree:true});}
	const Ji=[{key:"quickfaction",name:"faction quick item",
	description:"quickly use items from faction",onpage:V.Faction,
	category:Z.Faction,enabled:false,readyStates:["interactive"],
	run:()=>nt(Xi,Q.quickfaction)}];function Ki(){
	return n((mt().match(/ID=(\d+)/)||["","0"])[1])}async function Yi(){const t=Ki()
	;if(!t)return;const e=await async function(){const t=Ki();if(!t)return 0
	;const e=`https://www.torn.com/trade.php?step=getFullMoney&ID=${t}&rfcv=${dt()}`
	;try{const t=await fetch(e,{method:"GET",headers:{
	"x-requested-with":"XMLHttpRequest"}});return n(await t.clone().json())
	}catch(o){return console.error("Failed to fetch trade money:",o),0}
	}(),o="https://www.torn.com/trade.php?rfcv="+dt(),i=new URLSearchParams({
	step:"view",ID:t+"",ajax:"true",amount:e+"",sub_step:"addmoney2"});try{
	await fetch(o,{method:"POST",headers:{"x-requested-with":"XMLHttpRequest"},
	body:i});}catch(r){console.error("Failed to deposit ghost money:",r);}}
	function Qi(t){!function(t){var n
	;if(null==(n=t.previousElementSibling)?void 0:n.classList.contains("nst-ghost-wrap"))return
	;const e=j({classList:"nst-ghost-wrap"}),o=P({innerText:"deposit",
	classList:"torn-btn",onclick:Yi})
	;e.appendChild(o),t.insertAdjacentElement("beforebegin",e);}(t);}const Vi=[{
	key:"quickghost",name:"quick deposit ghost trade",
	description:"quickly deposit all money in a ghost trade",onpage:V.Trade,
	category:Z.Trade,enabled:false,readyStates:["interactive"],
	run:()=>nt(Qi,Q.quickghost)
	}],Zi=["Primary","Secondary","Melee","Temporary"],tr=["Medical","Drug","Energy Drink","Alcohol","Candy","Booster","Supply Pack",...Zi]
	;let nr="";async function er(t,n,e=false){
	const{id:o}=t,i="https://www.torn.com/item.php?rfcv="+dt(),r=new URLSearchParams({
	step:"useItem",itemID:o,item:o,fac:e?"1":"0"}),a=await wt("POST",i,r)
	;n.innerHTML="",function(t,n){
	const e=t.links??{},o=t.text??"",i=j({}),r=N({}),a={}
	;Object.values(e).forEach(t=>{var e,o;const i=E({
	classList:t.class+" t-blue h m-left10",href:t.url,innerText:t.title})
	;null==(e=t.attr)||e.trim().split(/\s+/).forEach(t=>{const[n,e]=t.split("=")
	;n&&void 0!==e&&(i.setAttribute(n,e),a[n]=e);
	}),"#"===t.url&&(null==(o=t.class)?void 0:o.includes("next-act"))&&i.addEventListener("click",function(t,n){
	return e=>{e.preventDefault();const o=n["data-item"],i="1"===n["data-fac"]
	;o&&er({id:o},t,i);}}(n,a)),r.appendChild(i);}),i.appendChild(N({innerHTML:o
	})),i.appendChild(r),n.appendChild(i),n.classList.remove("nstGreen","nstBold")
	;const s=n.querySelector(".counter-wrap");if(!s)return
	;const c=1e3*+(s.getAttribute("data-time")||0),l=Math.floor(c/864e5),u=Math.floor(c%864e5/36e5)+24*l,d=Math.floor(c%36e5/6e4),f=Math.floor(c%6e4/1e3)
	;s.innerText=`${u}:${d}:${f}`;}(a,n),rr();}async function or(t){var n
	;t.stopPropagation()
	;const e=null==(n=t.target.closest("#nst-quick-use"))?void 0:n.parentElement
	;if(!e)return;const o=e.getAttribute("data-itemID");if(!o)return;const i=f(w)
	;if(!(null==i?void 0:i[o]))return
	;const r=i[o],{category:a}=r,s=document.getElementById("nst-item-resp")
	;s&&(s.innerHTML="",Zi.includes(a)?await async function(t,n){
	const{id:e,strangeID:o}=t,i={step:"actionForm",item_id:e,type:5,action:"equip",
	item:e,id:o,confirm:1
	},r="https://www.torn.com/item.php?rfcv="+dt(),a=new URLSearchParams(i),s=await wt("POST",r,a)+""
	;n.innerHTML=s,
	(null==s?void 0:s.match(/ equipped/))?n.classList.add("text-nstgreen"):n.classList.remove("text-nstgreen");
	}(r,s):await er(r,s));}function ir(t){var n
	;t.stopPropagation(),t.preventDefault()
	;const e=null==(n=t.target.closest("#nst-quick-use"))?void 0:n.parentElement
	;if(!e)return;const o=e.getAttribute("data-itemID");if(!o)return;const i=f(w)
	;(null==i?void 0:i[o])&&(delete i[o],p({[w]:i}),rr());}function rr(){
	const t=document.getElementById("nst-"+y);if(!t)return
	;const n=f(w),e=JSON.stringify(n);if(e===nr)return
	;for(nr=e;t.lastChild;)t.removeChild(t.lastChild)
	;const o=Object.values(n),i=document.createDocumentFragment()
	;o.forEach(t=>function(t,n){
	const{id:e,name:o,quantity:i}=t,r=`/images/items/${e}/medium.png`,a=j({
	classList:"nst-box-btn-div"})
	;a.setAttribute("data-itemID",e),a.setAttribute("data-qty",i);const s=P({
	id:"nst-quick-use",classList:"nst-box-button",onclick:or}),c={src:r,alt:o,
	classList:"nst-box-img"},l={id:"nst-quick-name",innerText:""+o},u={
	id:"nst-quick-close",classList:"nst-box-close",innerText:"✕",onclick:ir}
	;s.appendChild($(c)),
	s.appendChild(C(l)),s.appendChild(C(u)),a.appendChild(s),n.appendChild(a);
	}(t,i)),t.appendChild(i),new ki(t,{animation:150,dataIdAttr:"data-itemid",
	store:{get:()=>{const t=f(w)
	;return Object.entries(t).sort((t,n)=>t[1].order-n[1].order).map(t=>t[0])},
	set:t=>{const n=t.toArray(),e=f(w);let o=false;n.forEach((t,n)=>{
	e[t].order!==n&&(e[t].order=n,o=true);}),o&&p({[w]:e});}}});}function ar(n){
	const e=n.target;if(!/name-wrap/.test(e.className))return
	;const o=e.closest("li");if(!o)return;const i=function(n){var e,o,i,r
	;const a=null==(e=null==n?void 0:n.dataset)?void 0:e.item,s=null==(o=null==n?void 0:n.dataset)?void 0:o.qty,c=(null==(i=null==n?void 0:n.dataset)?void 0:i.category)??"",l=(null==(r=null==n?void 0:n.querySelector('.cont-wrap ul [class*="equipped"]'))?void 0:r.getAttribute("data-id"))??"",u=null==n?void 0:n.querySelector(".title-wrap .name-wrap .name"),d=t(null==u?void 0:u.innerText)
	;return a&&c&&tr.includes(c)?{id:a,name:d,quantity:s,category:c,strangeID:l
	}:null}(o);if(!i)return;const r=f(w);if(r[i.id])return
	;const a=Object.values(r).reduce((t,n)=>Math.max(t,n.order),0);r[i.id]={...i,
	order:a+1},p({[w]:r}),rr();}function sr(t){var n
	;const e=null==t?void 0:t.parentElement,o=null==e?void 0:e.querySelector("div.equipped-items-wrap"),i=G({
	title:b,element:o});null==(n=null==i?void 0:i.parentElement)||n.appendChild(j({
	id:"nst-item-resp",classList:"nst-box-row"
	})),rr(),t.addEventListener("dblclick",ar);}const cr=[{key:"quickitem",
	name:"quick items",description:"quickly use items",onpage:V.Items,
	category:Z.Items,enabled:false,readyStates:["interactive"],
	run:()=>nt(sr,Q.quickitem)}];function lr(){pr(document);}function ur(t){
	return null==t?void 0:t.parentElement}function dr(t,n){
	const{item:e,selector:o,reg:i}=n,r=f("quick"+e)??false,a=ur(t);if(!a)return
	;const s=function(t,n){return t.querySelector("a."+n)}(a,o);if(!s)return
	;const c=s.getAttribute("href");if(!c)return
	;const l=RegExp(i+"$","g"),u=RegExp(i+"1$","g"),d=r?c.replace(l,i+"1"):c.replace(u,i)
	;c!==d&&s.setAttribute("href",d);}function fr(t){
	const o=+(f("jailscore")??"0"),i=ur(t);if(!i)return
	;const r=t.querySelector("span.time"),a=t.querySelector("span.level")
	;if(!r||!a)return
	;const s=(r.innerText||"").split(" ").reduce((t,n)=>n.endsWith("h")?t+60*+n.replace("h",""):n.endsWith("m")?t+ +n.replace("m",""):t,0),c=function(t){
	const e=t.innerText.match(/\d+/g);return n((null==e?void 0:e.join())??"0")
	}(a),l=c*s,u=l>=o&&0!==o
	;t.setAttribute("title","score: "+e(l)),i.style.display=u?"none":"",dr(t,{
	item:"bail",selector:"bye",reg:"buy"}),dr(t,{item:"bust",selector:"bust",
	reg:"breakout"});}function pr(t){t.querySelectorAll("span.info-wrap").forEach(fr);
	}function mr(t){!function(t){const n=ur(t);if(!n)return;const e=G({
	title:"Quick Jail",element:n}),i=j({classList:"nst-box-column"}),r=j({
	classList:"nst-box-column"});e.append(i,r),R({elem:i,title:"Jail Score",
	cback:()=>pr(t)}),[{title:"Quick Bust",event:lr},{title:"Quick Bail",event:lr
	}].forEach(({title:t,event:n})=>{const e=o(t),i={id:"nst-"+e,value:e}
	;r.appendChild(B(i,t,"",n));});}(t),new MutationObserver(t=>{const n=[]
	;t.forEach(t=>{t.addedNodes.forEach(t=>{if("LI"===t.tagName){
	const e=t.querySelector("span.info-wrap");e&&n.push(e);}});}),n.forEach(fr);
	}).observe(t,{childList:true,subtree:true}),pr(t);}const hr=[{key:"quickjail",
	name:"quick jail",description:"filter, quickly bail and bust people",
	onpage:V.Jail,category:Z.Jail,enabled:false,readyStates:["interactive"],
	run:()=>nt(mr,Q.quickjail)}],vr={energy:{name:"energy",
	selector:"[class*='bar'][class*='energy']",link:"https://www.torn.com/gym.php"},
	nerve:{name:"nerve",selector:"[class*='bar'][class*='nerve']",
	link:"https://www.torn.com/crimes.php"}};function gr(t){var n,e
	;const o=t.parentElement;if(!o)return;const i=f("userdata")
	;if(!(null==i?void 0:i.refills))return
	;const r=null==(n=null==i?void 0:i.refills)?void 0:n.energy_refill_used,a=null==(e=null==i?void 0:i.refills)?void 0:e.nerve_refill_used
	;["energy","nerve"].forEach(t=>{
	const n=vr[t],e="energy"===t?r:a,i=function(t,n){var e
	;const o=n+' p[class^="bar-name"]',i=t.querySelector(o)
	;return null==(e=null==i?void 0:i.parentElement)?void 0:e.parentElement
	}(o,n.selector);var s,c
	;i&&(i.hasAttribute("href")&&i.removeAttribute("href"),s=i,
	c=n.link,s.dataset.nstRefillListener||(s.addEventListener("click",()=>window.open(c,"_blank")),
	s.dataset.nstRefillListener="1"),function(t,n,e){if(e)return
	;const o="energy"===n?"text-nstgreen":"text-nstred";t.classList.add(o);
	}(i.querySelector('p[class^="bar-name"]'),t,e));});}const br=[{
	key:"refillreminder",name:"refill reminder",
	description:"highlight energy and nerve bar if refills haven't been used",
	onpage:V.All,category:Z.All,enabled:false,readyStates:["interactive"],
	run:()=>nt(gr,Q.refillreminder)}];function yr(t){if(!t)return
	;const n=t.parentElement;t.remove(),null==n||n.remove();}const wr=[{
	key:"removeuglyimage",name:"hide new images",
	description:"hide new images from item page",onpage:V.Items,category:Z.Items,
	enabled:false,readyStates:["loading"],run:()=>nt(yr,Q.removeuglyimage,true)}]
	;function kr(t){const n=t.parentElement
	;t.nodeType===Node.TEXT_NODE&&t.nodeValue&&(!n||!n.isContentEditable)&&(t.nodeValue=t.nodeValue.replaceAll("Natural Selection","NS"));
	}function xr(t){const n=document.createTreeWalker(t,NodeFilter.SHOW_TEXT,null)
	;let e=n.currentNode;for(;e;)kr(e),e=n.nextNode();}function Lr(t){xr(t)
	;const n=document.querySelector("#map");n&&function(t){new MutationObserver(t=>{
	for(const n of t)n.addedNodes.forEach(xr),"attributes"===n.type&&xr(n.target);
	}).observe(t,{childList:true,subtree:true,attributes:true});}(n);}const Sr=[{
	key:"renameterritory",name:"rename NS territory",
	description:"rename NS territory",onpage:V.City,category:Z.City,enabled:false,
	readyStates:["interactive"],run:()=>nt(Lr,Q.renameterritory)}];let _r={},Tr=null
	;function Mr(){
	const t=document.querySelector('div[class^="joinWrap"] div[class^="rowsWrap"]')
	;t&&0!==t.children.length?Array.from(t.children).forEach(t=>{var o
	;const i=t,r=i.getAttribute("id");if(!r)return;_r[r]||(_r[r]=ht())
	;const a=(c=_r[r],s(900-(ht()-c)));var c
	;const l=i.querySelector('div[class^="betBlock"]');if(!l)return
	;const u=l.getAttribute("aria-label");if(!u)return
	;const d=null==(o=u.split(":")[1])?void 0:o.trim();if(!d)return
	;const f=`${"$"+e(n(d))}\n${a}`;l.innerText!==f&&(l.innerText=f);}):_r={};}
	async function Ir(t){const n=await t.clone().json()
	;if("lobby"!==(null==n?void 0:n.step))return t;const e=n.data
	;for(const o of Object.values(e)){const{ID:t,timeCreated:n}=o
	;void 0!==t&&(_r[t]=n);}
	return null!==Tr&&clearInterval(Tr),Tr=setInterval(Mr,1e3),t}const Dr=[{
	key:"rrtimeout",name:"RR timeout",description:"add timeout timer to RR games",
	onpage:V.Page,category:Z.Casino,enabled:false,readyStates:["interactive"],
	run:()=>on(Ir,"russianRouletteData"),condition:()=>"russianRoulette"===pt()}]
	;function Or(t){var n,e
	;return t instanceof HTMLElement&&"LI"===t.tagName&&(null==(e=null==(n=t.firstElementChild)?void 0:n.classList)?void 0:e.contains("item-cont-wrap"))
	}function Er(t){const n=t.querySelectorAll(".bonus-attachment-icons")
	;if(!n.length)return
	;const e=Array.from(n).map(t=>c(t.title)).join("<br />"),o=t.querySelector("p.t-gray-6")
	;o&&o.innerHTML!==e&&(o.innerHTML=e);}function Pr(t){
	for(const n of t)for(const t of Array.from(n.addedNodes))Or(t)&&Er(t);}
	function jr(t){new MutationObserver(Pr).observe(t,{childList:true,subtree:true});}
	const $r=[{key:"rwbonusauction",name:"rw bonus display",
	description:"display rw weapon bonus over the item instead of tooltip",
	onpage:V.Auction,category:Z.Auction,enabled:false,readyStates:["loading"],
	run:()=>nt(jr,Q.auctionrwbonus)}];function Ar(t){
	const n="radiation"===(i=t.className.split("-"))[3]?"radiation":{full:"EOD",
	negative:"Delta",sentinel:"defense",vanguard:"dex"
	}[i[2]]??i[2],e=t.parentElement,o=null==e?void 0:e.parentElement;var i
	;o&&!o.classList.contains("nst-rw-bazaar")&&o.classList.add("nst-rw-bazaar"),
	e&&!e.querySelector("span")&&(e.appendChild(C({innerText:n
	})),e.appendChild(O("br",{})));}function qr(t){const n=/(itemsContainner|row)/
	;new MutationObserver(t=>{
	for(const e of t)for(const t of Array.from(e.addedNodes)){
	if(!(t instanceof HTMLElement))continue;if(!n.test(t.className))continue
	;if(t.querySelector(".nst-rw-bazaar"))continue
	;const e=t.querySelectorAll('[class*="iconBonuses"] > div > i')
	;if(e.length)for(const t of Array.from(e))Ar(t);}}).observe(t,{childList:true,
	subtree:true});}const zr=[{key:"rwbonusbazaar",name:"rw bonus display",
	description:"display rw weapon bonus over the item instead of tooltip",
	onpage:V.Bazaar,category:Z.Bazaar,enabled:false,readyStates:["loading"],
	run:()=>nt(qr,Q.rwbonusbazaar)}];function Nr(t){
	if(t.classList.contains("nst-rw-display"))return;const n=c(t.title)
	;t.classList.add("nst-rw-display"),t.appendChild(C({innerText:n
	})),t.insertAdjacentElement("afterend",O("br",{}));}function Cr(t){
	const n=t.querySelectorAll(".bonus-attachment-icons");n.length&&n.forEach(Nr);}
	const Hr=[{key:"rwbonusdisplay",name:"rw bonus display",
	description:"display rw weapon bonus over the item instead of tooltip",
	onpage:V.DisplayCase,category:Z.DisplayCase,enabled:false,
	readyStates:["interactive"],run:()=>nt(Cr,Q.rwbonusdisplay)}];function Fr(t){
	var n;const e=null==(n=t.parentElement)?void 0:n.querySelector("ul.bonuses")
	;if(!e)return;const o=e.lastElementChild;if(!o)return;let i=false;const r=j({
	classList:"nst-rw-show-wrap"});Array.from(o.children).forEach(t=>{
	if(!(t instanceof HTMLElement&&t.title))return;i=true;const n=j({
	classList:"nst-rw-single",innerText:c(t.title)});r.appendChild(n);
	}),i&&(t.title=r.outerHTML);}function Rr(t){t.forEach(t=>{
	Array.from(t.addedNodes).forEach(t=>{
	t instanceof HTMLElement&&t.parentElement&&/armoury-(weapons|armour)/g.test(t.parentElement.id)&&"UL"===t.tagName&&t.classList.contains("item-list")&&t.querySelectorAll("div.name").forEach(Fr);
	});});}function Br(t){new MutationObserver(Rr).observe(t,{childList:true,subtree:true
	});}const Ur=[{key:"rwbonusfaction",name:"rw bonus display",
	description:"display rw weapon bonus over the item instead of tooltip",
	onpage:V.Faction,category:Z.Faction,enabled:false,readyStates:["interactive"],
	run:()=>nt(Br,Q.rwbonusfaction)}];function Gr(t){var n
	;return t.addedNodes.length>0&&t.target instanceof HTMLElement&&"UL"===t.target.nodeName&&"category-wrap"===(null==(n=t.target.parentElement)?void 0:n.id)&&null===t.previousSibling
	}function Wr(t){const n=t.querySelector(".name-wrap")
	;if(!n||n.classList.contains("nst-rw-show"))return
	;const e=t.querySelector("ul.bonuses-wrap"),o=null==e?void 0:e.lastElementChild
	;if(!o)return;const i=j({classList:"nst-rw-show-wrap"});let r=false
	;for(const a of Array.from(o.children)){
	if(!(a instanceof HTMLElement&&a.title))continue;r=true;const t=j({
	classList:"nst-rw-single",innerText:c(a.title)});i.appendChild(t);}
	r&&(n.classList.add("nst-rw-show"),n.appendChild(i));}function Xr(t){
	new MutationObserver(t=>{
	for(const n of t)if(Gr(n))for(const t of Array.from(n.addedNodes))t instanceof HTMLElement&&Wr(t);
	}).observe(t,{childList:true,subtree:true});}const Jr=[{key:"rwbonusitems",
	name:"rw bonus display",
	description:"display rw weapon bonus over the item instead of tooltip",
	onpage:V.Items,category:Z.Items,enabled:false,readyStates:["loading"],
	run:()=>nt(Xr,Q.rwbonusitems)}],Kr=ft("XID"),Yr=vt().t,Qr={them:{},you:{}
	},Vr=bt("statspiesavg"),Zr=[7,31],ta=["Stat","Them","You"],na=["xantaken","refills","useractivity","criminaloffenses","rankedwarhits","enerydrinkyused"],ea=["Strength","Defense","Speed","Dexterity","Total"],oa="nst-table-cell nst-table-cell-head"
	;function ia(t,n){
	return "useractivity"===t?(n/60).toFixed(2)+" min":""+n.toFixed(2)}
	function ra(t,n){return t>n?"text-nstred":t<n?"text-nstgreen":"text-nsttorntext"
	}function aa(t){return document.getElementById(t)||null}function sa(t,n,e=5){
	t.innerHTML="";const o=O("tr",{classList:"nst-table-row text-center"
	}),i=O("td",{innerText:n,classList:"nst-table-cell text-nsttorntext",colSpan:e})
	;o.appendChild(i),t.appendChild(o);}function ca(t,n={}){const e=O("tr",n)
	;return t.forEach(t=>e.appendChild(t)),e}function la(t,n="",e={}){
	return O("td",{innerText:t,classList:"nst-table-cell "+n,...e})}
	async function ua(t){var n,o,i;!function(t){const n=G({title:"Stat Spies",
	element:null==t?void 0:t.closest(".profile-wrapper")}),e=j({id:"nst-compare",
	classList:"nst-box-column"}),o=j({id:"nst-spies",
	classList:"nst-box-column item-start"});if(e.appendChild(O("table",{
	id:"nst-compare-table",classList:"nst-table"})),o.appendChild(O("table",{
	id:"nst-spies-table",classList:"nst-table"})),n.appendChild(e),n.appendChild(o),
	Vr){const t=j({id:"nst-spies-avg",classList:"nst-box-column item-start"})
	;t.appendChild(O("table",{id:"nst-avg-table",classList:"nst-table"
	})),n.appendChild(t);}}(t)
	;const r=aa("nst-compare-table"),a=aa("nst-spies-table")
	;r&&sa(r,"Loading...",3),a&&sa(a,"Loading...",3);try{const t=await Lt({
	selection:"/spy/user/"+Kr})
	;(null==t?void 0:t.status)?((null==(n=null==t?void 0:t.compare)?void 0:n.status)?function(t){
	const n=aa("nst-compare-table");if(!n)return;n.innerHTML=""
	;const o=document.createDocumentFragment();o.appendChild(ca(ta.map(t=>O("th",{
	innerText:t,classList:oa})),{classList:"nst-table-row text-center nst-nodrag"}))
	;let i=!1;for(const[r,a]of Object.entries(t??{})){if(!a)continue;i=!0
	;const t=+a.amount||0,n=+a.difference||0,s=n>0?"text-nstgreen":n<0?"text-nstred":"text-nsttorntext",c=ca([la(r,"text-nsttorntext"),la(e(t),"text-nsttorntext"),(()=>{
	const o=la(e(t+n));return o.classList.add(s),o})()],{classList:"nst-table-row",
	"data-id":r});o.appendChild(c);}i?(o.appendChild(ca([(()=>{const t=O("td",{
	classList:"nst-table-cell",colSpan:3});return t.appendChild(E({
	href:"https://www.tornstats.com/settings/script",target:"_blank",
	classList:"t-blue nst-nodrag",innerText:"Change your script settings here"})),t
	})()],{classList:"nst-table-row nst-nodrag text-center"
	})),n.appendChild(o),n.rows.length>1&&new ki(n,{animation:150,
	filter:".nst-nodrag",store:{get:()=>f("tscompare")??Object.keys(t),set:t=>p({
	tscompare:t.toArray()})}})):sa(n,"No comparison data available.",3);
	}(null==(o=null==t?void 0:t.compare)?void 0:o.data):r&&sa(r,"No comparison data available.",3),
	(null==(i=null==t?void 0:t.spy)?void 0:i.status)?function(t){
	const n=aa("nst-spies-table");if(!n)return;n.innerHTML=""
	;const o=document.createDocumentFragment();o.appendChild(ca(ta.map(t=>O("th",{
	innerText:t,classList:oa})),{classList:"nst-table-row text-center"
	})),o.appendChild(ca([O("td",{classList:"nst-table-cell text-nsttorntext",
	colSpan:3,innerText:"Last Update: "+((null==t?void 0:t.difference)??"")})],{
	classList:"nst-table-row nst-nodrag text-center"}));let i=!1;for(const r of ea){
	const n=+(null==t?void 0:t[r.toLowerCase()])||0,a=+(null==t?void 0:t["delta"+r])||0
	;if(!n&&!a)continue;i=!0
	;const s=a>0?"text-nstgreen":a<0?"text-nstred":"text-nsttorntext",c=ca([la(r,"text-nsttorntext"),la(e(n),"text-nsttorntext"),(()=>{
	const t=la(e(n+a));return t.classList.add(s),t})()],{classList:"nst-table-row"})
	;o.appendChild(c);}i?n.appendChild(o):sa(n,"No spy data available.",3);
	}(null==t?void 0:t.spy):a&&sa(a,"No spy data available.",3)):(r&&sa(r,"Failed to load comparison data.",3),
	a&&sa(a,"Failed to load spy data.",3));}catch(c){
	r&&sa(r,["Error loading comparison data.",c].join("\n"),3),
	a&&sa(a,["Error loading spy data.",c].join("\n"),3);}if(!Vr)return
	;const s=aa("nst-avg-table");s&&sa(s,"Loading...",1+2*Zr.length);try{
	await Promise.all(Zr.map(async t=>{const[n,e]=await Promise.all([St({
	playerID:Kr,selection:"personalstats",days:t}),St({playerID:Yr,
	selection:"personalstats",days:t})]);Qr.them[t]=n||{},Qr.you[t]=e||{};
	})),async function(){var t,n;const e=aa("nst-avg-table");if(!e)return
	;e.innerHTML="";const o=document.createDocumentFragment(),i=[O("th",{
	innerText:"Stat",classList:oa}),...Zr.flatMap(t=>[O("th",{
	innerText:`Them (${t}d)`,classList:oa}),O("th",{innerText:`You (${t}d)`,
	classList:oa})])];o.appendChild(ca(i,{classList:"nst-table-row text-center"}))
	;let r=!1;for(const a of na){const e=[la(a,"text-nsttorntext")]
	;for(const o of Zr){
	const i=(null==(t=Qr.them)?void 0:t[o])??{},s=(null==(n=Qr.you)?void 0:n[o])??{},c=+i[a]||0,l=+s[a]||0
	;(c||l)&&(r=!0);const u=ia(a,c),d=ia(a,l),f=ra(c,l)
	;e.push(la(u,"text-nsttorntext"),la(d,f));}o.appendChild(ca(e,{
	classList:"nst-table-row"}));}
	r?e.appendChild(o):sa(e,"No average stats available.",1+2*Zr.length);}();
	}catch(c){s&&sa(s,["Error loading average stats.",c].join("\n"),1+2*Zr.length);}}
	const da=[{key:"statspies",name:"stat spies",
	description:"add spies and stats on profile page",onpage:V.Profile,
	category:Z.Profile,enabled:false,readyStates:["interactive"],
	run:()=>nt(ua,Q.statspies)},{key:"statspiesavg",name:"stat average",
	description:"add average stats on profile page",onpage:V.Profile,
	category:Z.Profile,enabled:false,readyStates:["interactive"],run:()=>{}
	}],fa=["life","wall","revive","bs","hosp","la"],pa={},ma=ft("user2ID")??"",ha={
	life:"",wall:"",revive:"",bs:"",hosp:"",la:""};let va;const ga={life:t=>t+"%",
	wall:t=>t?"ON":"OFF",revive:t=>t?"ON":"OFF",bs:()=>"N/A",
	hosp:t=>""===t||0===t?"OUT":s(+t-ht()),la:t=>s(ht()-+t)};function ba(){
	fa.forEach(t=>{const n=pa[t];if(!n)return;const e=ga[t](ha[t])??""
	;n.innerText!==e&&(n.innerText=e);});}async function ya(t){
	if(document.querySelector("#nst-target-status"))return;await async function(){
	var t,n,e,o;try{const i={section:"user",select:"",objID:ma},r=await xt(i)
	;if(!(null==r?void 0:r.status))return
	;const a=null==(t=null==r?void 0:r.states)?void 0:t.hospital_timestamp,s=null==(n=null==r?void 0:r.last_action)?void 0:n.timestamp,c=null==(e=null==r?void 0:r.life)?void 0:e.maximum,l=null==(o=null==r?void 0:r.life)?void 0:o.current,u=c?Math.floor(l/c*100):0,d=1===(null==r?void 0:r.revivable),f=!!Object.values((null==r?void 0:r.basicicons)??{}).some(t=>t.includes("Territory War"))
	;ha.life=u,ha.wall=f,ha.revive=d,ha.bs="",ha.hosp=a,ha.la=s;}catch(i){
	console.error("Failed to fetch target status data:",i);}}()
	;const n=null==t?void 0:t.parentElement,e=null==n?void 0:n.parentElement,o=null==e?void 0:e.parentElement
	;if(!e||!n||!o)return;const i=j({id:"nst-target-status",
	classList:"nst-status-wrap"})
	;i.style.position="absolute",i.style.top=e.offsetTop+2+"px",
	i.style.left=e.offsetLeft+n.offsetLeft+10+"px",i.appendChild(function(){
	const t=O("table",{id:"nst-status-table",classList:"nst-table"}),n=O("tr",{
	classList:"nst-table-row text-center"});fa.forEach(t=>n.appendChild(O("th",{
	innerText:t,classList:"nst-table-cell nst-table-cell-head"}))),t.appendChild(n)
	;const e=O("tr",{classList:"nst-table-row"});return fa.forEach(t=>{
	const n=ga[t](ha[t])??"",o=O("td",{classList:"nst-table-cell text-nsttorntext"
	}),i=j({id:"nst-status-"+t,classList:"nst-status-item",innerText:n})
	;o.appendChild(i),e.appendChild(o),pa[t]=i;}),t.appendChild(e),t
	}()),o.appendChild(i),clearInterval(va),va=window.setInterval(ba,1e3);}
	async function wa(t){var n,e,o,i,r
	;const a=await t.clone().json(),s=+(null==(o=null==(e=null==(n=null==a?void 0:a.DB)?void 0:n.usersLife)?void 0:e.defender)?void 0:o.lifeBar),c=+(null==(r=null==(i=null==a?void 0:a.DB)?void 0:i.defenderUser)?void 0:r.lastaction)
	;return ha.life=s,ha.la=c,t}const ka=[{key:"targetstatus",name:"target info",
	description:"add useful information about the target",onpage:V.Loader,
	category:Z.Fight,enabled:false,readyStates:["interactive"],run:()=>{
	on(wa,"attackData"),nt(ya,Q.targetstatus);},condition:()=>"attack"===pt()}]
	;async function xa(t){var n,o
	;const i=null==t?void 0:t.querySelectorAll(".trade-cont .user.right li.color2 ul li")
	;if(!(null==i?void 0:i.length))return
	;null==(o=null==(n=t.parentElement)?void 0:n.querySelector(".nst-trade-value"))||o.remove()
	;const r=await xt({section:"torn",select:"items"})
	;if(!(null==r?void 0:r.status)||!r.items)return void console.debug("Failed to fetch items from API")
	;const a=new Map;Object.values(r.items).forEach(t=>{
	(null==t?void 0:t.name)&&a.set(t.name,t);});let s=0;i.forEach(t=>{var n,e
	;const o=t.querySelector(".name"),i=null==(e=null==(n=null==o?void 0:o.firstChild)?void 0:n.textContent)?void 0:e.trim()
	;if(!i)return;const{name:r,quantity:c}=function(t){const n=function(t){
	return /^x\d+\s/.test(t)?"start":/\sx\d+$/.test(t)?"end":null}(t);if(!n)return {
	name:t,quantity:1}
	;const e=t.split(" "),o="start"===n?0:e.length-1,i=e[o].substring(1),r=parseInt(i,10)
	;return isNaN(r)||r.toString().length!==i.length?{name:t,quantity:1}:{
	name:e.filter((t,n)=>n!==o).join(" ").trim(),quantity:r}}(i),l=a.get(r)
	;(null==l?void 0:l.market_value)&&(s+=parseInt(l.market_value,10)*c);})
	;const c=j({classList:"nst-trade-value",innerText:"MV: $"+e(s)})
	;t.insertAdjacentElement("beforebegin",c);}const La=[{key:"tradevalue",
	name:"trade value",description:"add market value of items in trade",
	onpage:V.Trade,category:Z.Trade,enabled:false,readyStates:["interactive"],
	run:()=>nt(xa,Q.tradevalue)}];async function Sa(t){
	const n=(await t.clone().json()).currentFightStatistics;if(!n)return t
	;const e=function(t){const n=new Map;return Object.values(t).forEach(t=>{
	"object"==typeof t&&null!==t&&"playername"in t&&n.set(t.playername,t);}),n
	}(n),o=document.querySelectorAll(Q.interceptSelector)
	;return o.length?(o.forEach(n=>{if(n.querySelector(".nst-intercept"))return t
	;const o=n.innerText,i=e.get(o),r=null==i?void 0:i.userID;if(!r)return t
	;!function(t,n,e){const o="loader.php?sid=attack&user2ID="+e
	;t.innerHTML="",t.appendChild(E({classList:"nst-intercept text-nsttorntext",
	href:o,target:"_blank",innerText:n}));}(n,o,r);}),t):t}const _a=[{
	key:"warintercept",name:"intercept link",
	description:"add links for intercept attacks",onpage:V.Loader,category:Z.Fight,
	enabled:false,readyStates:["interactive"],run:()=>on(Sa,"attackData"),
	condition:()=>"attack"===pt()}],Ta={"Small Arms Cache":20,"Melee Cache":30,
	"Medium Arms Cache":50,"Heavy Arms Cache":70,"Armor Cache":60
	},Ma=/^(\d+)x (.+)$/;function Ia(t,n){const e=t.match(Ma);if(!e)return null
	;const o=parseInt(e[1],10),i=e[2];if(!Ta[i])return null;const r=n.get(i)
	;return r?{qty:o,name:i,value:parseInt(r.market_value,10)||0,bb:Ta[i]}:null}
	async function Da(t){const n=null==t?void 0:t.parentElement;if(!n)return
	;const o=await xt({section:"torn",select:"items"})
	;if(!(null==o?void 0:o.status))return;const i=o.items,r=new Map
	;for(const e of Object.values(i))e&&e.name&&r.set(e.name,e)
	;Array.from(n.children).forEach(t=>function(t,n){
	const o=t.innerText.split(",").map(t=>t.trim()),{totalQty:i,totalValue:r,totalBB:a}=function(t,n){
	let e=0,o=0,i=0;for(const r of t){const t=Ia(r,n);t&&(e+=t.qty,o+=t.value*t.qty,
	i+=t.qty*t.bb);}return {totalQty:e,totalValue:o,totalBB:i}}(o,n)
	;!function(t,n,o,i){const r=`caches: ${n} | BB: ${o} | MV: $${e(i)}`
	;t.querySelector(".nst-war-value")||t.appendChild(j({classList:"nst-war-value",
	innerText:r}));}(t,i,a,r);}(t,r));}const Oa=[{key:"warvalue",
	name:"war reward value",description:"add caches value to war report",
	onpage:V.War,category:Z.War,enabled:false,readyStates:["interactive"],
	run:()=>nt(Da,Q.warvalue),condition:()=>{
	return "rankreport"===(null==(t=window.location.search.match(/\?step=(\w+)/))?void 0:t[1])
	;var t;}}],Ea={abandon:"text-nstabandon",bury:"text-nstbury",burn:"text-nstburn",
	sink:"text-nstsink",dissolve:"text-nstdissolve"},Pa={"biological waste":"sink",
	"body part":"dissolve","building debris":"sink","dead body":"dissolve",
	documents:"burn",firearm:"sink","general waste":"burn",
	"industrial waste":"sink","murder weapon":"sink","old furniture":"burn",
	"broken appliance":"sink",vehicle:"sink"};let ja=location.href,$a=null
	;function Aa(t){
	Array.from(t.querySelectorAll(".crime-option-sections")).forEach(t=>{var n
	;const e=(null==(n=t.textContent)?void 0:n.trim().toLowerCase().split("?")[0])||"",o=Pa[e],i=Ea[o]
	;t.classList.add(i);const r=t.querySelector(`button[class*="${o}"]`)
	;t.addEventListener("click",t=>{t.target.closest("button")||r.click();});});}
	const qa=[...et,...at,...Mt,...Dt,...Pt,...At,...Nt,...Ft,...rn,...cn,...un,...pn,...hn,...Ln,...Hn,...Vn,...re,...ce,...le,...de,...fe,...me,...he,...ge,...ye,...ke,...Me,...Ie,...Ee,...Ae,...Ce,...Ji,...Vi,...cr,...hr,...br,...wr,...Sr,...Dr,...$r,...zr,...Hr,...Ur,...Jr,...da,...ka,...La,..._a,...Oa,{
	key:"disposalhighlight",name:"disposal highlight",
	description:"highlight best method for disposal crime",onpage:V.Loader,
	category:Z.Crime,enabled:false,readyStates:["interactive"],run:()=>{
	null===$a&&($a=setInterval(()=>{const t=location.href
	;t!==ja&&(ja=t,/disposal/.test(mt())&&(nt(Aa,Q.disposalhighlight),
	clearInterval($a),$a=null));},500));},condition:()=>/crimes/.test(pt())}],za={}
	;for(const ps of qa)za[ps.key]={name:ps.name,description:ps.description,
	onpage:ps.onpage,category:ps.category,enabled:ps.enabled};function Na(){var t,n
	;console.debug("nst - init default start");const e=f()??{},o={script:{}}
	;for(const i in za)o.script[i]={...za[i],
	enabled:(null==(n=null==(t=null==e?void 0:e.script)?void 0:t[i])?void 0:n.enabled)??za[i].enabled
	};Object.keys(I).forEach(t=>{o[t]=e[t]??I[t];
	}),m("nstdata"),p(o),console.debug("nst - init default end");}function Ca(t,n,e){
	return A({id:"nst-"+t,type:"password",classList:"nst-input m-2",maxLength:n,
	required:true,value:e})}function Ha(t,n=false){
	const e=document.getElementById("nst-ts-message");var o
	;e&&((o=e).innerText="",o.classList.remove("text-nstgreen"),
	e.innerText=t,e.classList.toggle("text-nstgreen",n));}async function Fa(){
	const t=document.getElementById("nst-tsapikey");if(!t)return
	;const n=t.value.trim();if(19!==n.length)return Ha("Invalid Key Length")
	;const e=await Lt({api:n,selection:""})
	;if(!(null==e?void 0:e.status))return Ha((null==e?void 0:e.error)||"Invalid Key")
	;try{p({tsapikey:n}),Ha("Key Saved",!0);}catch(o){Ha(o.message||"Unknown error");}
	}async function Ra(){const t=document.getElementById("nst-apikey");if(!t)return
	;const n=t.value.trim();if(16!==n.length)return Ha("Invalid Key Length")
	;const e=await xt({section:"user",select:"profile",api:n})
	;if(!(null==e?void 0:e.status))return Ha((null==e?void 0:e.error)||"Invalid Key")
	;try{const{t:t,o:o}=vt(e)
	;if(void 0===t||void 0===o)return Ha("API broken, wait for ched to fix");if(p({
	apikey:n
	}),!gt(e))return m("nstdata"),Ha("You are not allowed, contact seintz[2460991]")
	;p({userdata:e}),ls(),Ha("Key Saved",!0);}catch(o){Ha(o||"Unknown error");}}
	async function Ba(){
	confirm("Are you sure you want to reset?")&&(m("nstdata"),window.location.reload());
	}function Ua(t){const n=document.getElementById(t);if(!n)return;n.innerHTML=""
	;const e=E({href:tt.tornstats+"/settings/general",target:"_blank",
	innerText:"here",classList:"text-nstmain font-bold"}),o=j({classList:"text-base"
	});o.innerHTML="Create your TS key ",o.appendChild(e);const i=j({
	classList:"nst-api-wrap"}),r=j({classList:"nst-block"}).appendChild(C({
	id:"nst-ts-message",classList:"nst-message"
	})),a="tsapikey",s=Ca(a,19,(f(a)??"")+""),c=P({id:"nst-tslogin",
	classList:"torn-btn m-2",innerText:"save",onclick:Fa})
	;i.appendChild(o),i.appendChild(r),
	i.appendChild(s),i.appendChild(c),n.appendChild(i);}function Ga(t){
	const n=document.getElementById(t);if(!n)return;n.innerHTML=""
	;const e=tt.tornapicustom,o=E({href:tt.tornapisetting,target:"_blank",
	innerText:"limited",classList:"text-nstyellow font-bold"}),i=E({href:e,
	target:"_blank",innerText:"create",classList:"text-nstmain font-bold"}),r=j({
	classList:"text-base"})
	;r.innerHTML="Enter a ",r.appendChild(o),r.innerHTML+=" apikey or ",
	r.appendChild(i),r.innerHTML+=" one ad-hoc";const a=j({classList:"nst-api-wrap"
	}),s=j({classList:"nst-block"}).appendChild(C({id:"nst-message",
	classList:"nst-message"})),c="apikey",l=Ca(c,16,(f(c)??"")+""),u=P({
	id:"nst-login",classList:"torn-btn m-2",innerText:"save",onclick:Ra}),d=P({
	id:"nst-reset",classList:"torn-btn m-2",innerText:"reset",onclick:Ba})
	;a.appendChild(r),
	a.appendChild(s),a.appendChild(l),a.appendChild(u),a.appendChild(d),
	n.appendChild(a);}function Wa(t,...n){const e=j({classList:"nst-block"
	}),o=O("h4",{classList:"nst-block-title",innerText:t})
	;return e.appendChild(o),n.forEach(t=>e.appendChild(t)),e}function Xa(t,n,e){
	const o=j({id:n,classList:"nst-outcome"});o.addEventListener("change",t=>{
	const n=t.target;n&&"radio"===n.type&&e(n.id);})
	;const i=document.createDocumentFragment()
	;return t.forEach(t=>i.appendChild(U(t,n))),o.appendChild(i),o}function Ja(t){
	const n=document.getElementById(t);if(!n)return;n.innerHTML=""
	;const e=document.createDocumentFragment();e.appendChild(function(){
	const t=document.createDocumentFragment();return R({elem:t,title:"mug threshold"
	}),Wa("mug threshold",t)
	}()),e.appendChild(Wa("default outcome",Xa(["leave","mug","hospitalize"],"outcome",t=>p({
	outcome:t})),B({id:"nst-hold"},"hold"))),e.appendChild(function(){
	const t=f("weapon"),n=j({id:"weapon"}),e=document.createDocumentFragment()
	;return Object.keys(t).forEach(t=>{const n=j({id:t,classList:"list-group-item",
	innerText:t});n.setAttribute("data-id",t),e.appendChild(n);
	}),n.appendChild(e),new ki(n,{animation:150,store:{get:()=>{
	const t=f("weapon"),n=["","","",""]
	;return Object.entries(t).forEach(([t,e])=>n[e]=t),n},set:t=>{
	const n=t.toArray(),e=f("weapon");n.forEach(t=>e[t]=n.indexOf(t)),p({weapon:e});}
	}}),Wa("weapon order",n,B({id:"nst-temp"},"use temp first"),B({id:"nst-assaperk"
	},"assassinate"),B({id:"nst-executeperk"},"execute"))
	}()),e.appendChild(function(){const t=j({id:"reload",classList:"nst-outcome"
	}),n=document.createDocumentFragment();return n.appendChild(B({
	id:"nst-reloadone"},"primary")),n.appendChild(B({id:"nst-reloadtwo"
	},"secondary")),t.appendChild(n),Wa("weapon reload",t)}()),n.appendChild(e);}
	function Ka(t){const n=document.getElementById(t);if(!n)return;n.innerHTML=""
	;const e=document.createDocumentFragment()
	;e.appendChild(Wa("default outcome",Xa(["easy-leave","easy-mug","easy-hospitalize"],"easy-outcome",t=>p({
	easyoutcome:t.replace(/easy-/g,"")
	})))),e.appendChild(Wa("default weapon",Xa(["easy-primary","easy-secondary","easy-melee"],"easy-weapon",t=>p({
	easyweapon:t.replace(/easy-/g,"")})),B({id:"nst-easy-temp"},"use temp first"))),
	n.appendChild(e);}let Ya=null;function Qa(t){const n=document.getElementById(t)
	;return n?(n.innerHTML="",n):null}function Va(t,n,e){
	t.className=e,t.innerHTML=`<b>${n}</b>`,t.classList.remove("hidden");}
	function Za(t){const n=Qa(t);if(!n)return;const e=j({id:"nst-export-wrap",
	classList:"nst-api-wrap"}),o=E({id:"nst-export-download",innerText:"Download"})
	;o.classList.add("hidden","text-sm","text-nstmain","m-2");const i=P({
	id:"nst-export-btn",innerText:"export",classList:"torn-btn m-2",
	onclick:()=>function(t){const n=JSON.stringify(f())
	;Ya&&window.URL.revokeObjectURL(Ya),Ya=window.URL.createObjectURL(new Blob([n],{
	type:"application/json"
	})),t.setAttribute("href",Ya+"#/nst-export"),t.setAttribute("download","nst-export.json"),
	t.classList.remove("hidden");}(o)});e.append(i,o),n.appendChild(e);}
	function ts(t){const n=Qa(t);if(!n)return;const e=C({})
	;e.classList.add("hidden");const o=j({id:"nst-import-wrap",
	classList:"nst-api-wrap"}),i=A({id:"nst-import-input",type:"file",
	accept:"application/json",onchange:()=>function(t,n){const e=t.files
	;if(!e||!e[0])return;const o=new FileReader;o.onload=t=>{var e;try{
	p(function(t){try{return JSON.parse(t)}catch(n){
	return console.error("JSON parse error:",n),null}
	}(""+(null==(e=t.target)?void 0:e.result))),
	Na(),Va(n,"Import Successful","text-nstgreen");}catch{
	Va(n,"Import Unsuccessful","text-nstred");}},o.onerror=t=>{
	Va(n,"Import Unsuccessful","text-nstred"),console.error(t);},o.readAsText(e[0]);
	}(i,e)});i.classList.add("hidden");const r=P({id:"nst-import-btn",
	innerText:"import",classList:"torn-btn m-2",onclick:()=>i.click()})
	;o.append(r,i,e),n.appendChild(o);}const ns={"Data Storage":"Only locally",
	"Data Sharing":"Nobody",
	"Purpose of Use":"Optimization / Maintenance but only end user has access",
	"Key Storage & Sharing":"Stored locally but not shared",
	"Key Access Level":"Limited or Custom (see below)"};function es(t,n){const e=j({
	classList:"nst-tos-section"});return e.appendChild(O("h4",{
	classList:"nst-tos-title",innerText:t})),Object.entries(n).forEach(([t,n])=>{
	const o=j({classList:"nst-tos-row"}),i=O("b",{innerText:t+": "})
	;o.appendChild(i),o.appendChild(document.createTextNode(n)),e.appendChild(o);}),e
	}function os(t){const n=document.getElementById(t);if(!n)return;n.innerHTML=""
	;const e=document.createDocumentFragment()
	;e.appendChild(es("Terms of Service",ns)),
	e.appendChild(es("Api usage",_)),n.appendChild(e);}
	const is=["spring","summer","autumn","winter"];function rs(){
	const t=is.map(t=>document.querySelector(".content-wrapper."+t)).find(Boolean)
	;if(!t)return;const n=document.getElementById("nst-menu");n&&n.remove()
	;const e="none"===t.style.display;t.style.display=e?"":"none",e||function(t){
	const n=document.createDocumentFragment(),e=j({id:"nst-menu",
	classList:"nst-menu"}),o=j({id:"nst-menu-wrap",classList:"nst-menu-wrap"}),i=j({
	id:"nst-menu-title",classList:"nst-menu-title"}),r=j({id:"nst-menu-body",
	classList:"nst-menu-body"}),a=O("ul",{id:"nst-ul-main",classList:"nst-ul-main"})
	;i.appendChild(C({classList:"nst-logo"})).appendChild(O("b",{innerText:"NST"})),
	r.appendChild(a),
	o.appendChild(i),o.appendChild(r),e.appendChild(o),n.appendChild(e),
	t.insertAdjacentElement("beforebegin",n.firstChild),
	as(a,"tos",os),as(a,"api",Ga),function(t){
	const n=t.querySelector("#nst-api-li"),e=t.querySelector("#nst-api")
	;null==n||n.classList.add("nst-menu-sel"),
	null==e||e.classList.add("nst-menu-active"),
	null==e||e.classList.toggle("hidden");}(r),ls();}(t);}function as(t,n,e=()=>{}){
	const o=null==t?void 0:t.parentElement;if(!o)return;const i="nst-"+n,r=i+"-li"
	;if(o.querySelector("#"+i)||o.querySelector("#"+r))return;const a=z({id:r,
	classList:"nst-menu-page",innerText:n,onclick:ss})
	;t.appendChild(a),o.appendChild(j({id:i,classList:"nst-menu-item hidden"})),e(i);
	}function ss(t){
	const n=t.target,e=n.id,o=null==n?void 0:n.closest("#nst-menu-body")
	;if(!o)return
	;const i=o.querySelector(".nst-menu-sel"),r=o.querySelector(".nst-menu-active"),a=o.querySelector("#"+e.replace(/-li/g,""))
	;null==i||i.classList.remove("nst-menu-sel"),
	r&&(r.classList.remove("nst-menu-active"),
	r.classList.toggle("hidden")),n.classList.add("nst-menu-sel"),
	a&&(a.classList.add("nst-menu-active"),a.classList.toggle("hidden"));}
	function cs(t){const n=document.getElementById(t);if(!n)return;n.innerHTML=""
	;const e=t.replace(/nst-/g,""),i=f("script"),a=Object.keys(i).sort().reduce((t,n)=>{
	var o
	;return (null==(o=null==i?void 0:i[n])?void 0:o.category)===e&&(t[n]=null==i?void 0:i[n]),
	t},{}),s=j({classList:"nst-script-block"}),c=document.createDocumentFragment()
	;Object.entries(a).forEach(([t,n])=>{
	const e=null==n?void 0:n.name,i=o(t),a=function(t,n,e){
	const o=r(null==t?void 0:t.id),i=j({classList:"nst-box-item"
	}),a=f("script"),s=null==a?void 0:a[o],c=A({...t,type:"checkbox",
	checked:!!(null==s?void 0:s.enabled),onchange:t=>{
	const n=t.target,e=r(null==n?void 0:n.id),o=f("script"),i=null==o?void 0:o[e]
	;i&&!!i.enabled!==n.checked&&o[e]&&(o[e].enabled=n.checked),p({script:o});}
	}),l=q({innerText:n,htmlFor:null==t?void 0:t.id,title:e})
	;return i.appendChild(c),i.appendChild(l),i}({id:"nst-"+i,value:i
	},e,n.description.toLowerCase());c.appendChild(a);
	}),s.appendChild(c),n.appendChild(s);}function ls(){if(!gt())return;Na()
	;const t=document.querySelector("#nst-ul-main");if(!t)return;const n={tsapi:Ua,
	attack:Ja,"easy-fight":Ka,export:Za,import:ts}
	;Object.keys(n).forEach(e=>as(t,e,n[e]))
	;const e=f("script"),o=Object.keys(e).sort().reduce((t,n)=>(t[n]=null==e?void 0:e[n],
	t),{})
	;Array.from(new Set(Object.values(o).map(t=>t.category).filter(Boolean))).sort().forEach(n=>as(t,n,cs));
	}function us(t){if(document.getElementById("nst-icon"))return
	;const n=t.querySelector('ul[class^="status-icon"]');if(!n)return;const e=z({
	id:"nst-icon",classList:"nst-icon"})
	;n.insertBefore(e,n.firstChild),e.addEventListener("click",rs);}
	const ds=window.location.pathname.replace(/^\//,"").replace(/\.php$/,""),fs={
	loading:()=>{
	nt(D,"head"),nt(us,"#sidebar"),gt()&&(document.onreadystatechange||(document.onreadystatechange=()=>{
	const t=document.readyState;fs[t]&&fs[t]();}),st(ds,"loading"),kt());},
	interactive:()=>{gt()&&st(ds,"interactive");},complete:()=>{st(ds,"complete");}}
	;fs[document.readyState]&&fs[document.readyState]();}();

})();