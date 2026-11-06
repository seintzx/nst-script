// ==UserScript==
// @name         nst
// @namespace    seintz.torn.nst
// @version      2.3.14
// @author       seintz [2460991]
// @description  handful of scripts packed as one
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
	}function e(t){return +(t+"").replace(/[^\d]/g,"")||0}function n(t){
	return Math.round(+t).toLocaleString("en-US")}function o(t){
	return t.toLowerCase().replace(/ /g,"-")}function i(t){
	return t.toLowerCase().replace(/ /g,"")}function r(t){
	return t.toLowerCase().replace(/^nst-/,"").replace(/-/g,"")}function a(t){
	return t.toString(16)}function s(t){
	const e=Math.floor(t/3600),n=Math.floor(t%3600/60),o=t%60
	;return [e>0?e+"h":"",n>0?n+"m":"",o>0?o+"s":""].filter(Boolean).join(" ").trim()
	}function c(t){var e,n
	;const o=(null==(e=t.match(RegExp("(?<=>)[\\w\\s-]+(?=<)")))?void 0:e[0])??"FAIL",i=(null==(n=t.match(/\d+(?=(%| turns))/))?void 0:n[0])??"XX",r={
	Impregnable:"melee",Impenetrable:"guns",Insurmountable:"dune",
	Invulnerable:"delta",Imperviable:"life",Immutable:"def",Irrepressible:"dex",
	Impassable:"EOD"}[o]??o;return `${i}${/disarm|disable/i.test(o)?"T":"%"} ${r}`}
	function l(){try{const t=localStorage.getItem("nstdata")
	;return t?JSON.parse(t):{}}catch(t){
	return console.error("Failed to read nstdata:",t),{}}}function u(t){try{
	localStorage.setItem("nstdata",JSON.stringify(t));}catch(e){
	console.error("Failed to write nstdata:",e);}}function d(t){
	return !t||0===Object.keys(t).length}function f(t=""){return ""===t?l():l()[t]}
	function p(t){const e=l();let n=false
	;for(const[o,i]of Object.entries(t))e[o]!==i&&(e[o]=i,n=true);n&&u(e);}
	function m(t){try{localStorage.removeItem(t);}catch(e){
	console.error("Failed to remove data:",e);}}function h(t){try{
	return JSON.parse(t)}catch(e){return console.error("JSON parse error:",e),null}}
	const g=new Map;function b(t,e,n=250){return (...o)=>{
	const i=e??"__default__",r=g.get(i);r&&clearTimeout(r)
	;const a=window.setTimeout(()=>t(...o),n);g.set(i,a);}}function v(t){
	return t.length>1?t.sort().join(", "):t[0]||""}
	const w="Quick Items",y=o(w),x=i(w),k="Quick Faction",S=o(k),L=i(k),T=["Online","Idle","Offline"],_=["Hospital","Jail","Travel"],M=["bars","basic","battlestats","cooldowns","education","icons","money","networth","newevents","newmessages","notifications","perks","personalstats","profile","refills","timestamp","travel"],D={
	company:v(["employees"]),market:v(["bazaar"]),torn:v(["items"]),user:v([...M])
	},I='<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9" /></svg>',P='<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6" /></svg>',O={
	apikey:"",armfbonuses:"",armfweapons:"",assaperk:false,aucfbonuses:"",
	aucfweapons:"",easyoutcome:"leave",easytemp:false,easyweapon:"primary",
	executeperk:false,hidecityitems:true,hold:false,jailscore:21e3,mugperc:.05,
	mugthreshold:4e6,outcome:"leave",quickbail:false,quickbust:false,quickfaction:{},
	quickitems:{},reloadone:false,reloadtwo:false,spgymone:"elites",spgymtwo:"frontline",
	temp:false,tsapikey:"",tscompare:[],userdata:{},weapon:{primary:0,secondary:1,
	melee:2}};function E(t){const e=j("style",{})
	;e.textContent='*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.nst-select-label{margin-right:.75rem!important;display:block!important;font-size:.875rem!important;line-height:1.25rem!important;font-weight:600!important}.nst-eggfinder button{position:fixed!important}.nst-eggfinder button{top:40%!important}.nst-eggfinder button{left:40%!important}.nst-eggfinder button{z-index:99999!important}.nst-eggfinder button{height:20%!important}.nst-eggfinder button{width:20%!important}.nst-eggfinder button{border-width:5px!important}.nst-eggfinder button{border-style:solid!important}.nst-eggfinder button{border-color:#ef4444!important}.nst-eggfinder button>:first-child{height:100%!important}.nst-eggfinder button>:last-child{left:0!important}.nst-eggfinder button>:last-child{height:100%!important}.nst-eggfinder button>:last-child{width:100%!important}.nst-title-noff{padding:1rem!important;--tw-text-opacity: 1 !important;color:rgb(252 196 25 / var(--tw-text-opacity))!important}.nst-icon-noff{fill:#fcc419!important}.nst-hide-medal,.nst-hide-profile-logs{display:none!important}.nst-left-align .d .container,.nst-left-align .d .\\!container{margin-left:1.25rem!important;justify-content:flex-start!important}.nst-left-align .d.without-sidebar .container,.nst-left-align .d.without-sidebar .content-wrapper,.nst-left-align .d .anonymous .content-wrapper,.nst-left-align .d.without-sidebar .\\!container{margin-left:1.25rem}.nst-trade-value{height:1.5rem;text-align:center;font-size:.875rem;line-height:1.5rem;--tw-text-opacity: 1;color:rgb(108 173 43 / var(--tw-text-opacity))}.nst-findsworth{margin:.25rem;padding:.25rem;font-weight:700}.nst-findslist{margin:.25rem;padding:.25rem;text-align:left}.nst-status-wrap{z-index:10;display:flex;flex-direction:column;flex-wrap:wrap;align-content:flex-start;align-items:flex-start;justify-content:center}.nst-status-item{text-align:center}.nst-lastaction{padding:.25rem}.nst-spgym-sel,.nst-spgym-msg{margin:.25rem;padding:.25rem}.nst-steadfast{margin:.25rem;padding:.25rem;text-align:center}.nst-pokername{color:var(--holdem-text-color-main)}.nst-ghost-wrap{display:flex;flex-direction:column;flex-wrap:wrap;align-content:center;align-items:center;justify-content:center;padding:.25rem}.nst-rw-show{display:flex!important;flex-direction:row!important;flex-wrap:nowrap!important;align-content:center!important;align-items:center!important;justify-content:flex-start!important}.nst-rw-show-wrap{margin-left:.5rem;display:flex;flex-direction:row;flex-wrap:nowrap}.nst-rw-single{margin-right:.5rem;border-radius:.5rem;border-width:2px;border-style:solid;--tw-border-opacity: 1;border-color:rgb(34 34 34 / var(--tw-border-opacity));padding:.2rem;font-size:.7rem;line-height:.6rem}.nst-rw-bazaar{top:.25rem!important;float:left!important;display:inline-block!important;white-space:nowrap!important;padding-right:0!important;padding-left:.25rem!important}.nst-rw-display{right:0!important;top:-2.5rem!important;float:left!important;white-space:nowrap!important}.nst-icon{cursor:pointer!important;background-image:url(https://factiontags.torn.com/11581-56425.png)!important;background-position:center!important}.nst-logo{font-size:1.5rem;line-height:2rem;font-weight:700;--tw-text-opacity: 1;color:rgb(66 140 165 / var(--tw-text-opacity))}.nst-menu{margin-left:2rem;margin-top:2rem;margin-bottom:10rem;flex:1 1 0%}.nst-menu-wrap{border-radius:.5rem}.nst-menu-title{position:relative;top:0;left:0;display:flex;height:2rem;flex-wrap:wrap;align-content:center;align-items:center;border-top-left-radius:.5rem;border-top-right-radius:.5rem;border-bottom-width:1px;border-style:solid;--tw-border-opacity: 1;border-bottom-color:rgb(0 0 0 / var(--tw-border-opacity));background-color:var(--default-bg-panel-color);padding:.25rem .75rem;font-size:.875rem;line-height:2rem;font-weight:700;color:var(--default-color)}.nst-menu-body{display:flex;border-bottom-right-radius:.5rem;border-bottom-left-radius:.5rem;background-color:var(--default-bg-panel-color);line-height:.75rem}.nst-ul-main{float:none;display:table-cell;list-style-type:none;border-right-width:1px;border-style:solid;--tw-border-opacity: 1;border-right-color:rgb(0 0 0 / var(--tw-border-opacity));vertical-align:top}.nst-menu-page{position:relative;display:block;width:9rem;border-bottom-width:1px;border-style:solid;--tw-border-opacity: 1;border-bottom-color:rgb(0 0 0 / var(--tw-border-opacity));background-color:var(--default-bg-panel-color);padding:.5rem;font-weight:700;color:var(--default-color)}.nst-menu-page:hover{background-color:var(--default-bg-panel-active-color)}.nst-menu-sel{background-color:var(--default-bg-panel-active-color)!important}.nst-menu-item{float:none;display:block;width:100%;vertical-align:top}.nst-message{margin:.5rem;padding:.25rem;--tw-text-opacity: 1;color:rgb(185 70 45 / var(--tw-text-opacity))}.nst-api-wrap{margin:.5rem;display:flex;flex-direction:column;flex-wrap:wrap;align-content:center;align-items:center;justify-content:center;padding:.25rem}.nst-block-title{margin:.5rem!important}.nst-block{margin:.5rem;display:flex;flex-direction:column;flex-wrap:wrap;align-content:center;align-items:center;justify-content:center;border-bottom-width:1px;border-style:solid;--tw-border-opacity: 1;border-bottom-color:rgb(249 250 251 / var(--tw-border-opacity));padding:.5rem}.nst-script-block{margin:.5rem;display:flex;flex-direction:column;flex-wrap:wrap;align-content:flex-start;align-items:flex-start;justify-content:center;padding:.5rem}.nst-outcome{display:flex;flex-direction:row;flex-wrap:wrap;align-content:center;align-items:center;justify-content:center}.list-group-item{margin:.5rem;border-width:1px;border-style:solid;--tw-border-opacity: 1;border-color:rgb(107 114 128 / var(--tw-border-opacity));padding:.5rem 1rem;text-align:center;font-size:.875rem;line-height:1.25rem}.nst-tos-title{margin-top:.75rem!important;margin-bottom:1.25rem!important;text-align:center!important;font-size:1.5rem!important;line-height:2rem!important;font-weight:700!important}.nst-box{margin-top:.75rem;margin-bottom:.75rem;box-sizing:border-box;display:flex;flex-direction:column}.nst-box-header{display:flex;border-top-left-radius:.5rem;border-top-right-radius:.5rem;border-bottom-width:0px;--tw-bg-opacity: 1;background-color:rgb(0 0 0 / var(--tw-bg-opacity));padding:.25rem .75rem;font-size:1.125rem;line-height:1.75rem;--tw-text-opacity: 1;color:rgb(66 140 165 / var(--tw-text-opacity));--tw-shadow: inset 0 2px 4px 0 rgb(0 0 0 / .05);--tw-shadow-colored: inset 0 2px 4px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}#nst-arrow{display:flex;height:1rem;width:1rem}.nst-box-title{flex-grow:1;font-size:.875rem;font-weight:700;line-height:1rem;--tw-text-opacity: 1;color:rgb(66 140 165 / var(--tw-text-opacity))}.nst-box-content{border-bottom-right-radius:.5rem;border-bottom-left-radius:.5rem;border-width:1px;border-top-width:0px;border-style:solid;--tw-border-opacity: 1;border-color:rgb(0 0 0 / var(--tw-border-opacity));background-color:var(--default-bg-panel-color);color:var(--default-color)}.nst-box-content>p{margin:.25rem;text-align:center}.nst-box-row{margin:.25rem;display:flex;flex-direction:row;flex-wrap:wrap;align-content:center;align-items:flex-start;justify-content:space-evenly;text-align:center}.nst-box-column{margin:.25rem;display:flex;flex:1 1 0%;flex-direction:column;flex-wrap:wrap;align-content:center;align-items:center;justify-content:center;text-align:center}.nst-box-item{margin:.125rem .25rem;display:flex;align-content:flex-start;align-items:center;font-size:.875rem;line-height:1.25rem}.nst-box-item>input{margin-top:0;margin-bottom:0;margin-left:.25rem;margin-right:.25rem}.nst-box-button{position:relative;display:flex;width:100%;flex-direction:column;flex-wrap:wrap;align-items:center;padding:.25rem;color:var(--default-color)}.nst-box-close{position:absolute;top:0;right:.25rem;cursor:pointer;font-size:.75rem;line-height:1rem}.nst-box-img{vertical-align:middle}.nst-box-btn-div{margin:.25rem;display:flex;flex:0 0 14%;justify-content:center;align-self:stretch;border-radius:.5rem;border-width:1px;border-style:solid;--tw-border-opacity: 1;border-color:rgb(34 34 34 / var(--tw-border-opacity));padding:0}.nst-box-btn-div:hover{background-color:var(--default-bg-panel-active-color)}#nst-item-resp{justify-content:center}.nst-input{margin:0;box-sizing:border-box;height:1.5rem;border-radius:.25rem;border-width:1px;border-style:solid;--tw-border-opacity: 1;border-color:rgb(0 0 0 / var(--tw-border-opacity));background-color:var(--default-bg-panel-active-color);text-align:center;font-size:.875rem;line-height:1.25rem;font-weight:500;color:var(--default-color)}.nst-table{box-sizing:border-box;width:100%;border-width:2px;border-style:solid;--tw-border-opacity: 1;border-color:rgb(31 41 55 / var(--tw-border-opacity))}.nst-table-row{text-align:left}.nst-table-cell-head{font-size:.875rem;line-height:1.25rem;font-weight:700}.nst-table-cell{box-sizing:border-box!important;border-width:1px!important;border-style:solid!important;--tw-border-opacity: 1 !important;border-color:rgb(31 41 55 / var(--tw-border-opacity))!important;padding:.25rem!important;font-size:.75rem!important;line-height:1rem!important}.nst-tos-section{margin-bottom:1.5rem}.nst-tos-title{margin-bottom:1rem;font-size:1.25rem;line-height:1.75rem;font-weight:700;--tw-text-opacity: 1;color:rgb(66 140 165 / var(--tw-text-opacity))}.nst-tos-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr))}.nst-tos-card{margin:.5rem;border-radius:.5rem;border-width:1px;--tw-border-opacity: 1;border-color:rgb(31 41 55 / var(--tw-border-opacity));background-color:var(--default-bg-panel-color);padding:1rem;--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.2s}.nst-tos-card:hover{--tw-border-opacity: 1;border-color:rgb(55 65 81 / var(--tw-border-opacity));--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.nst-tos-card{box-shadow:0 0 0 1px #428ca51a,0 4px 6px -1px #0000001a}.nst-tos-card:hover{box-shadow:0 0 0 1px #428ca54d,0 10px 15px -3px #0003}.nst-tos-card-header{margin-bottom:.75rem;display:flex;align-items:center;gap:.75rem}.nst-tos-icon{font-size:1.5rem;line-height:2rem;filter:drop-shadow(0 0 8px rgba(66,140,165,.6))}.nst-tos-label{font-size:1rem;line-height:1.5rem;font-weight:600;--tw-text-opacity: 1;color:rgb(66 140 165 / var(--tw-text-opacity))}.nst-tos-value{font-size:.875rem;line-height:1.25rem;line-height:1.625;--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity))}.nst-api-card{margin:.5rem;border-radius:.5rem;border-width:1px;--tw-border-opacity: 1;border-color:rgb(31 41 55 / var(--tw-border-opacity));background-color:var(--default-bg-panel-color);padding:1.25rem;--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.2s}.nst-api-card:hover{--tw-border-opacity: 1;border-color:rgb(55 65 81 / var(--tw-border-opacity));--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.nst-api-card{box-shadow:0 0 0 1px #428ca51a,0 4px 6px -1px #0000001a}.nst-api-card:hover{box-shadow:0 0 0 1px #428ca54d,0 10px 15px -3px #0003}.nst-api-card-header{margin-bottom:1rem;display:flex;align-items:center;gap:.75rem}.nst-api-icon{font-size:1.5rem;line-height:2rem;filter:drop-shadow(0 0 8px rgba(66,140,165,.6))}.nst-api-card-title{flex:1 1 0%;font-size:1.25rem;line-height:1.75rem;font-weight:700;--tw-text-opacity: 1;color:rgb(66 140 165 / var(--tw-text-opacity))}.nst-api-badge{border-radius:9999px;padding:.25rem .5rem;font-size:.75rem;line-height:1rem;font-weight:600}.nst-api-badge-required{background-color:rgb(185 70 45 / var(--tw-bg-opacity));--tw-bg-opacity: .2;--tw-text-opacity: 1;color:rgb(185 70 45 / var(--tw-text-opacity))}.nst-api-badge-optional{background-color:rgb(252 196 25 / var(--tw-bg-opacity));--tw-bg-opacity: .2;--tw-text-opacity: 1;color:rgb(252 196 25 / var(--tw-text-opacity))}.nst-api-links{margin-bottom:.75rem;font-size:.875rem;line-height:1.25rem}.nst-api-description-list{margin-bottom:1rem;list-style-position:inside;list-style-type:disc}.nst-api-description-list>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.25rem * var(--tw-space-y-reverse))}.nst-api-description-list{font-size:.875rem;line-height:1.25rem;--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity))}.nst-api-note{margin-bottom:1rem;font-size:.75rem;line-height:1rem;font-style:italic;--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.nst-api-divider{margin-top:1rem;margin-bottom:1rem;border-top-width:1px;--tw-border-opacity: 1;border-color:rgb(55 65 81 / var(--tw-border-opacity))}.nst-api-input-section>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.75rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.75rem * var(--tw-space-y-reverse))}.nst-input-field{max-width:24rem;border-radius:.375rem;border-width:1px;--tw-border-opacity: 1;border-color:rgb(55 65 81 / var(--tw-border-opacity));background-color:var(--default-bg-panel-active-color);padding:.5rem .75rem;color:var(--default-color);transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.2s}.nst-input-field:focus{--tw-border-opacity: 1;border-color:rgb(66 140 165 / var(--tw-border-opacity));outline:2px solid transparent;outline-offset:2px;box-shadow:0 0 0 3px #428ca51a}.nst-api-button-group{display:flex;gap:.5rem}.fixed{position:fixed}.absolute{position:absolute}.m-2{margin:.5rem}.mb-3{margin-bottom:.75rem}.block{display:block}.inline{display:inline}.flex{display:flex}.\\!table{display:table!important}.table{display:table}.grid{display:grid}.hidden{display:none}.h-4{height:1rem}.w-4{width:1rem}.resize{resize:both}.flex-col{flex-direction:column}.gap-6{gap:1.5rem}.bg-nstmain{--tw-bg-opacity: 1;background-color:rgb(66 140 165 / var(--tw-bg-opacity))}.bg-nstred{--tw-bg-opacity: 1;background-color:rgb(185 70 45 / var(--tw-bg-opacity))}.bg-nstyellow{--tw-bg-opacity: 1;background-color:rgb(252 196 25 / var(--tw-bg-opacity))}.text-center{text-align:center}.text-sm{font-size:.875rem;line-height:1.25rem}.font-bold{font-weight:700}.text-black{--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity))}.text-nstabandon{--tw-text-opacity: 1;color:rgb(96 96 96 / var(--tw-text-opacity))}.text-nstburn{--tw-text-opacity: 1;color:rgb(221 74 34 / var(--tw-text-opacity))}.text-nstbury{--tw-text-opacity: 1;color:rgb(211 113 8 / var(--tw-text-opacity))}.text-nstdissolve{--tw-text-opacity: 1;color:rgb(52 144 59 / var(--tw-text-opacity))}.text-nstgreen{--tw-text-opacity: 1;color:rgb(108 173 43 / var(--tw-text-opacity))}.text-nstmain{--tw-text-opacity: 1;color:rgb(66 140 165 / var(--tw-text-opacity))}.text-nstred{--tw-text-opacity: 1;color:rgb(185 70 45 / var(--tw-text-opacity))}.text-nstsink{--tw-text-opacity: 1;color:rgb(29 148 200 / var(--tw-text-opacity))}.text-nsttorntext{color:var(--default-color)}.text-nstyellow{--tw-text-opacity: 1;color:rgb(252 196 25 / var(--tw-text-opacity))}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}:root{--nst-hide-fact-desc: block;--nst-hide-war-graph: block}input[type=number]::-webkit-outer-spin-button,input[type=number]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-webkit-appearance:textfield;appearance:textfield;-moz-appearance:textfield}.f-war-list .descriptions .faction-war-info,.f-war-list .descriptions .faction-names{display:var(--nst-hide-war-graph)!important}#faction-main [data-title^=announcement],#faction-main .announcement,.faction-title,.faction-description{display:var(--nst-hide-fact-desc)!important}[aria-label="Reset loadout"]{display:none!important}[class*=airspaceScene],[class*=factWrapper]{display:var(--nst-hide-plane)!important}#map .nst-city-marker.leaflet-marker-icon{box-sizing:border-box;cursor:pointer;border-width:0px;background-color:transparent;z-index:999!important}#map .nst-city-marker .nst-city-marker-content{pointer-events:none;position:absolute;left:50%;top:50%;box-sizing:border-box;display:flex;width:3rem;height:3rem;--tw-translate-x: -50%;--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));align-items:center;justify-content:center;border-radius:9999px;background-color:#000000a6;padding:7px;--tw-shadow: 0 0 10px 4px rgba(0,0,0,.8);--tw-shadow-colored: 0 0 10px 4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);outline-style:solid;outline-width:2px;outline-color:#428ca5;transition-property:width,height,background;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:75ms}#map .nst-city-marker img{pointer-events:none;width:100%;height:100%;-o-object-fit:contain;object-fit:contain}#map .nst-city-marker:hover{z-index:2000!important}#map .nst-city-marker:hover .nst-city-marker-content{width:4rem;height:4rem;background-color:#000000d9}button.nst-api-btn-primary,button.nst-api-btn-secondary,.nst-api-btn-primary,.nst-api-btn-secondary{cursor:pointer!important}',
	t.appendChild(e);}function j(t,e={}){const n=document.createElement(t)
	;for(const[o,i]of Object.entries(e))"classList"===o&&"string"==typeof i?i.split(" ").forEach(t=>t&&n.classList.add(t)):"style"===o&&"string"==typeof i?n.setAttribute("style",i):o.startsWith("on")&&"function"==typeof i?n.addEventListener(o.slice(2),i):o in n&&n[o]!==i?n[o]=i:o in n||n.setAttribute(o,i+"")
	;return n}function A(t={}){return j("a",t)}function $(t={}){return j("button",t)
	}function z(t={}){return j("div",t)}function q(t={}){return j("img",t)}
	function C(t={}){return j("input",t)}function H(t={}){return j("label",t)}
	function N(t={}){return j("li",t)}function B(t={}){return j("p",t)}
	function R(t={}){return j("span",t)}function F(t){var e
	;const n=t.target.closest(".nst-box-header"),o=null==n?void 0:n.nextElementSibling
	;if(!o||!n)return
	;const r=i((null==(e=n.querySelector("#nst-box-title"))?void 0:e.innerText)??"")+"Folded",a=o.classList.toggle("hidden")
	;n.querySelector("#nst-arrow").innerHTML=a?P:I,p({[r]:a});}function U(t){
	const{elem:e,title:n,cback:r}=t,a=o(n),s=i(n),c=z({classList:"nst-box-item"
	}),l=(f(s)??"")+"",u=C({id:"nst-"+a,type:"text",classList:"nst-input",value:l,
	placeholder:s,oninput:t=>{const e=t.target.value.trim();e!==l&&(p({[s]:e}),r());}
	});return c.appendChild(u),e.appendChild(c),c}function G(t){
	const{elem:n,title:r,cback:a}=t,s=o(r),c=i(r);let l=+(f(c)??0);const u=z({
	classList:"nst-box-item"}),d=C({id:"nst-"+s,type:"number",classList:"nst-input",
	value:l,placeholder:c,min:0,oninput:t=>{const n=e(t.target.value)
	;n!==l&&(l=n,p({[c]:n}),a());}});return u.appendChild(d),n.appendChild(u),u}
	function W(t,e,n="",o){const i=r(null==t?void 0:t.id),a=z({
	classList:"nst-box-item"}),s=!!f(i),c=C({...t,type:"checkbox",checked:s,
	onchange:t=>{const e=t.target,n=r(null==e?void 0:e.id);!!f(n)!==e.checked&&(p({
	[n]:e.checked}),o&&o(t));}}),l=H({innerText:e,htmlFor:null==t?void 0:t.id,title:n
	});return a.appendChild(c),a.appendChild(l),a}function K(t,e){
	const n=t.replace(/easy-/g,""),o=f(t.includes("easy-")?"easy"+e.replace(/easy-/g,""):e)+"",i=z({
	classList:"nst-box-item"}),r=C({id:t,type:"radio",name:e,value:t,checked:o===n
	}),a=H({innerText:n,htmlFor:t,classList:""})
	;return i.appendChild(r),i.appendChild(a),i}function X(t){
	const{elem:e,title:n,label:r=n,options:a,cback:s}=t,c=o(n),l=i(n),u=(f(l)??"")+"",d=z({
	classList:"nst-box-item"}),m=document.createElement("label");m.htmlFor="nst-"+c,
	m.textContent=r,m.className="nst-select-label"
	;const h=document.createElement("select");h.id="nst-"+c,h.className="nst-input"
	;const g=[...new Set(a)].sort((t,e)=>t.localeCompare(e))
	;for(const o of ["",...g.filter(Boolean)]){
	const t=document.createElement("option")
	;t.value=o,t.textContent=o||"All",h.appendChild(t);}
	return h.value=g.includes(u)?u:"",h.addEventListener("change",()=>{p({
	[l]:h.value}),s();}),d.append(m,h),e.appendChild(d),d}function J(t,e){
	const n=o(t),r=!!f(i(t)+"Folded"),a=r?"nst-box-content hidden":"nst-box-content",s=z({
	classList:"nst-box"}),c=function(t){const e=z({classList:"nst-box-header",
	onclick:F}),n=R({classList:"nst-box-title"});return n.appendChild(R({
	id:"nst-box-title",innerText:t})),e.appendChild(n),e.appendChild(z({
	id:"nst-arrow"})),e}(t);c.querySelector("#nst-arrow").innerHTML=r?P:I
	;const l=z({classList:a}),u=document.querySelector("#nst-"+n);if(u)return u
	;const d=z({id:"nst-"+n,classList:"nst-box-row"})
	;return l.appendChild(d),s.appendChild(c),
	s.appendChild(l),e.insertAdjacentElement("beforebegin",s),d}function Y(t,e){
	t.value=""+e,t.dispatchEvent(new Event("input",{bubbles:true})),t.select();}
	var Q=(t=>(t.All="all",
	t.Auction="amarket",t.Bazaar="bazaar",t.City="city",t.Company="companies",
	t.DisplayCase="displaycase",
	t.Faction="factions",t.Fight="fight",t.Gym="gym",t.Home="index",
	t.Items="item",t.Jail="jailview",
	t.Loader="loader",t.Market="imarket",t.Notification="notification",
	t.Page="page",t.Points="pmarket",t.Profile="profiles",t.Properties="properties",
	t.Search="search",
	t.Shops="shops",t.Trade="trade",t.War="war",t))(Q||{}),V=(t=>(t.All="all",
	t.Auction="auction",
	t.Bazaar="bazaar",t.Casino="casino",t.City="city",t.Company="company",
	t.Crime="crime",t.DisplayCase="displaycase",t.Event="event",t.Faction="faction",
	t.Fight="fight",
	t.Gym="gym",t.Home="home",t.Items="item",t.Jail="jail",t.Loader="loader",
	t.Market="market",
	t.Mission="mission",t.Notification="notification",t.Page="page",
	t.Points="points",
	t.Profile="profiles",t.Properties="properties",t.Search="search",
	t.Shops="shops",
	t.Trade="trade",t.War="war",t))(V||{}),Z=(t=>(t.tornstats="https://www.tornstats.com",
	t.tornapisetting="https://www.torn.com/preferences.php#tab=api",
	t.tornapicustom="https://www.torn.com/preferences.php#tab=api?&step=addNewKey&title=nst&type=3",
	t))(Z||{})
	;const tt=["Motorcycle Helmet","Welding Helmet","Leather","Combat","Assault","Riot","Dune","Delta","Sentinel","Vanguard","Marauder","EOD"],et=["Hammer","Baseball Bat","Crowbar","Knuckle Dusters","Pen Knife","Kitchen Knife","Dagger","Axe","Scimitar","Chainsaw","Samurai Sword","Glock 17","Raven MP25","Ruger 57","Beretta M9","USP","Beretta 92FS","Fiveseven","Magnum","Desert Eagle","Dual 92G Berettas","Sawed-Off Shotgun","Benelli M1 Tactical","MP5 Navy","P90","AK-47","M4A1 Colt Carbine","Benelli M4 Super","M16 A2 Rifle","Steyr AUG","M249 SAW","Minigun","Snow Cannon","Neutrilux 2000","Springfield 1911","Egg Propelled Launcher","9mm Uzi","RPG Launcher","Leather Bullwhip","Ninja Claws","Yasukuni Sword","Rusty Sword","Wand of Destruction","Butterfly Knife","XM8 Rifle","Taser","Cobra Derringer","S&W Revolver","Claymore Sword","Crossbow","Enfield SA-80","Jackhammer","Swiss Army Knife","Mag 7","Spear","Vektor CR-21","Flare Gun","Heckler & Koch SL8","SIG 550","BT MP9","Chain Whip","Wooden Nunchaku","Kama","Kodachi","Sai","Type 98 Anti Tank","Bushmaster Carbon 15","Taurus PT92","Blowgun","Bo Staff","Katana","Qsz-92","SKS Carbine","Twin Tiger Hooks","Wushu Double Axes","Ithaca 37","Lorcin 380","S&W M29","Flamethrower","Dual Axes","Dual Hammers","Dual Scimitars","Dual Samurai Swords","Pair of High Heels","Fine Chisel","Ivory Walking Cane","Gold Plated AK-47","Handbag","Pink Mac-10","Macana","Slingshot","Metal Nunchaku","Flail","SIG 552","ArmaLite M-15A4","Guandao","Lead Pipe","Ice Pick","Cricket Bat","Frying Pan","Pillow","MP5k","AK74U","Skorpion","TMP","Thompson","MP 40","Luger","Blunderbuss","Blood Spattered Sickle","Dual TMPs","Dual Bushmasters","Dual MP5s","Dual P90s","Dual Uzis","Golden Broomstick","Devil's Pitchfork","Pair of Ice Skates","Diamond Icicle","Tavor TAR-21","Harpoon","Diamond Bladed Knife","Naval Cutlass","Petrified Humerus","Plastic Sword","Penelope","Duke's Hammer","Nock Gun","Beretta Pico","Riding Crop","Rheinmetall MG 3","Homemade Pocket Shotgun","Madball","Tranquilizer Gun","Bolt Gun","Scalpel","Sledgehammer","Bug Swatter","Prototype","Bread Knife","Poison Umbrella","Millwall Brick","SMAW Launcher","China Lake","Milkor MGL","PKM","Negev NG-5","Stoner 96","Meat Hook","Cleaver","Crystalline Falcata","Golf Club","Bone Saw","Cattle Prod","Ban Hammer","Nightstick"],nt=["Blindfire","Burn","Demoralized","Emasculate","Freeze","Hazardous","Laceration","Poisoned","Severe Burning","Shock","Sleep","Smash","Spray","Storage","Toxin","Achilles","Assassinate","Backstab","Berserk","Bleed","Blindside","Bloodlust","Comeback","Conserve","Cripple","Crusher","Cupid","Deadeye","Deadly","Disarm","Double-edged","Double Tap","Empower","Eviscerate","Execute","Expose","Finale","Focus","Frenzy","Fury","Grace","Home Run","Irradiate","Motivation","Paralyze","Parry","Penetrate","Plunder","Powerful","Proficience","Puncture","Quicken","Rage","Revitalize","Roshambo","Slow","Smurf","Specialist","Stricken","Stun","Suppress","Sure Shot","Throttle","Warlord","Weaken","Wind-up","Wither"],ot=".cracking-root",it="body",rt=".userlist-wrapper",at="a.profile-button.profile-button-attack",st="attackData",ct="UserMiniProfile"
	;function lt(t,e,n=false){const o=(t=document)=>t.querySelector(e),i=n=>{
	console.debug("[nst] Element found: "+e),t(n);},r=o();if(r&&(i(r),!n))return
	;const a=new MutationObserver(t=>{var r
	;for(const s of t)for(const t of Array.from(s.addedNodes)){
	if(!(t instanceof Element))continue;if(null==(r=t.matches)?void 0:r.call(t,e)){
	if(i(t),!n)return void a.disconnect();continue}const s=o(t)
	;if(s&&(i(s),!n))return void a.disconnect()}})
	;a.observe(document.documentElement,{childList:true,subtree:true});}let ut=null
	;const dt=b(function(t){
	t.querySelectorAll('[id*="tab=armoury&sub=weapons"] ul.item-list, [id*="tab=armoury&sub=armour"] ul.item-list').forEach(t=>ft(t));
	},"armoryfilter");function ft(t){var e
	;const n=t.closest('[id*="tab=armoury&sub="]'),o=null==(e=null==n?void 0:n.id.match(/tab=armoury&sub=(weapons|armour)/))?void 0:e[1]
	;if(!o)return
	;const i=((f("weapons"===o?"armfweapons":"armfarmor")??"")+"").trim().toLowerCase(),r="weapons"===o?((f("armfbonuses")??"")+"").trim().toLowerCase():""
	;t.querySelectorAll("div.name").forEach(t=>{!function(t,e,n,o=""){var i,r,a
	;const s=t.parentElement;if(!s)return
	;const c=(null==(i=t.textContent)?void 0:i.trim().toLowerCase())??"",l=(null==(a=null==(r=s.querySelector("ul.bonuses"))?void 0:r.textContent)?void 0:a.toLowerCase())??"",u=!n||c.includes(n),d="armour"===e||!o||l.includes(o)
	;s.classList.toggle("hidden",!(u&&d));}(t,o,i,r);});}function pt(t){if(!ut)return
	;const{weaponsDiv:e,armorDiv:n}=ut,o=t.querySelector('[id*="tab=armoury&sub=armour"] ul.item-list'),i=!!(o&&o.getClientRects().length>0)
	;e.classList.toggle("hidden",i),n.classList.toggle("hidden",!i);}function mt(t){
	!function(t){const e=J("armory filter",t),n=z({classList:"nst-box-column"
	}),o=z({classList:"nst-box-column"}),i=z({classList:"nst-box-column hidden"})
	;X({elem:o,title:"armf weapons",label:"Weapon",options:et,cback:()=>dt(t)}),X({
	elem:o,title:"armf bonuses",label:"Bonus",options:nt,cback:()=>dt(t)}),X({
	elem:i,title:"armf armor",label:"Armor",options:tt,cback:()=>dt(t)
	}),n.append(o,i),e.appendChild(n),ut={weaponsDiv:o,armorDiv:i};
	}(t),pt(t),function(t){new MutationObserver(e=>{const n=new Set,o=t=>{
	const e=t.closest('[id*="tab=armoury&sub="]')
	;/tab=armoury&sub=(weapons|armour)/.test((null==e?void 0:e.id)??"")&&n.add(t);}
	;for(const t of e){if("childList"!==t.type)continue
	;const e=t.target.closest("ul.item-list");e&&o(e)
	;for(const n of t.addedNodes)n instanceof HTMLElement&&(n.matches("ul.item-list")&&o(n),
	n.querySelectorAll("ul.item-list").forEach(o));}for(const t of n)ft(t);pt(t);
	}).observe(t,{childList:true,subtree:true});}(t);}const ht=[{key:"armoryfilter",
	name:"armory filter",description:"filter items in faction armory",
	onpage:Q.Faction,category:V.Faction,enabled:false,readyStates:["interactive"],
	run:()=>lt(mt,"#faction-armoury-tabs",true)}],gt=b(bt,"auctionfilter")
	;function bt(t){
	const e=(f("aucfweapons")??"")+"",n=(f("aucfbonuses")??"")+"",o=e?RegExp(e,"g"):null,i=n?RegExp(n,"g"):null
	;t.querySelectorAll("div.item-cont-wrap").forEach(t=>function(t,e,n){var o
	;const i=t.parentElement;if(!i)return
	;const r=t.querySelector("span.title"),a=t.querySelector("div.item-bonuses")
	;if(!r||!a)return;const s=function(t,e,n,o){
	const i=!n||n.test(t)||n.test(e),r=!o||o.test(t)||o.test(e);return i&&r
	}(r.innerText.toLowerCase(),(null==(o=a.innerHTML)?void 0:o.toLowerCase())??"",e,n)
	;i.classList.toggle("hidden",!s);}(t,o,i));}function vt(t){!function(t){
	const e=J("auction filter",t),n=z({classList:"nst-box-column"});U({elem:n,
	title:"aucf weapons",cback:()=>gt(t)}),U({elem:n,title:"aucf bonuses",
	cback:()=>gt(t)}),null==e||e.appendChild(n);}(t),function(t){
	new MutationObserver(t=>{
	for(const e of t)for(const t of Array.from(e.addedNodes))t instanceof HTMLElement&&"LI"===t.tagName&&t.firstElementChild instanceof HTMLElement&&t.firstElementChild.classList.contains("item-cont-wrap")&&bt(t);
	}).observe(t,{childList:true,subtree:true});}(t);}const wt=[{key:"auctionfilter",
	name:"auction filter",description:"filter items in auction",onpage:Q.Auction,
	category:V.Auction,enabled:false,readyStates:["loading"],
	run:()=>lt(vt,"#auction-house-tabs")}];function yt(t,e,n){
	Ts.filter(n=>function(t,e,n){
	const o=t.onpage===e||"all"===t.onpage,i=t.readyStates.includes(n),r=$t(t.key),a=!t.condition||t.condition()
	;return o&&i&&r&&a}(n,t,e)).forEach(t=>t.run(n||{}));}function xt(t){
	GM.notification(t);}const kt=[{key:"notidrug",name:"drug cooldown",
	description:"display a notification when not on drugs",onpage:Q.Notification,
	category:V.Notification,enabled:false,readyStates:["complete"],run:t=>function(t){
	var e,n
	;const{old:o,new:i}=t,r=null==(e=null==i?void 0:i.cooldowns)?void 0:e.drug
	;0!==(null==(n=null==o?void 0:o.cooldowns)?void 0:n.drug)&&0===r&&xt({
	title:"NST: Drug Cooldown",text:"Your drug cooldown has expired."});}(t)},{
	key:"notitrav",name:"traveling",
	description:"display a notification when you are about to land",
	onpage:Q.Notification,category:V.Notification,enabled:false,
	readyStates:["complete"],run:t=>function(t){var e,n,o
	;const{old:i,new:r}=t,a=null==(e=null==r?void 0:r.travel)?void 0:e.time_left,c=null==(n=null==i?void 0:i.travel)?void 0:n.time_left,l=null==(o=null==r?void 0:r.travel)?void 0:o.destination
	;a<=120&&a!==c&&xt({title:"NST: Travel",text:`${l} - Landing in ${s(a)}`});}(t)
	},{key:"notihosp",name:"hospital",
	description:"display a notification when almost out of hosp",
	onpage:Q.Notification,category:V.Notification,enabled:false,
	readyStates:["complete"],run:t=>function(t){var e,n
	;const{old:o,new:i}=t,r=null==(e=null==i?void 0:i.states)?void 0:e.hospital_timestamp,a=null==(n=null==o?void 0:o.states)?void 0:n.hospital_timestamp,c=r-Et()
	;c<=300&&r!==a&&xt({title:"NST: Hospital",
	text:"Out of hosp in "+s(Math.round(c))});}(t)},{key:"notimsg",name:"messages",
	description:"display a notification when there are new messages",
	onpage:Q.Notification,category:V.Notification,enabled:false,
	readyStates:["complete"],run:t=>function(t){var e,n
	;const{old:o,new:i}=t,r=null==(e=null==i?void 0:i.notifications)?void 0:e.messages,a=null==(n=null==o?void 0:o.notifications)?void 0:n.messages
	;0!==r&&r!==a&&xt({title:"NST: New Message",
	text:`You have ${r} new message${1===r?"":"s"}.`});}(t)},{key:"notievent",
	name:"events",description:"display a notification when there are new events",
	onpage:Q.Notification,category:V.Notification,enabled:false,
	readyStates:["complete"],run:t=>function(t){var e,n
	;const{old:o,new:i}=t,r=null==(e=null==i?void 0:i.notifications)?void 0:e.events,a=null==(n=null==o?void 0:o.notifications)?void 0:n.events
	;0!==r&&r!==a&&xt({title:"NST: New Event",
	text:`You have ${r} new event${1===r?"":"s"}.`});}(t)
	}],St=new Set(["1402a5","1c2b3b","1f6fae","21d210","21d476","257b50","258d3f","259d63","279b7d","2ac242","4cffd","30a6cc","2116d2","2770ca"]),Lt=new Set(["253d","2de3","2d3d","235f","5416","5015"])
	;function Tt(t){return Object.fromEntries(t.split("&").map(t=>{
	const[e,n]=t.split("=");return [e,n]}))}function _t(){
	return void 0!==window.flutter_inappwebview}function Mt(){
	return _t()?window:unsafeWindow}function Dt(){var t
	;return (null==(t=document.cookie.split("; ").find(t=>t.startsWith("rfc_v=")))?void 0:t.split("=")[1])??""
	}function It(t){return new URLSearchParams(window.location.search).get(t)}
	function Pt(){var t
	;return null==(t=window.location.search.match(/\?sid=(\w+)/))?void 0:t[1]}
	function Ot(){return window.location.hash.replace(/^#\/(?:\w+=)?/,"")}
	function Et(){return Math.round(Date.now()/1e3)}function jt(t={}){var e
	;const n=d(t)?f("userdata"):t;return {t:null==n?void 0:n.player_id,
	o:null==(e=null==n?void 0:n.faction)?void 0:e.faction_id}}function At(t={}){
	if(16!==(f("apikey")+"").length)return  false;const e=d(t)?f("userdata"):t
	;if(d(e))return  false;const{t:n,o:o}=jt(e)
	;return i=+o,r=+n,!(!St.has(a(r))&&!Lt.has(a(i)));var i,r;}function $t(t){var e
	;if(!At())return  false;const n=f("script")
	;return !!t&&!!(null==(e=null==n?void 0:n[t])?void 0:e.enabled)}function zt(){
	var t,e
	;const n=null==(t=null==document?void 0:document.body)?void 0:t.getAttribute("data-traveling"),o=null==(e=null==document?void 0:document.body)?void 0:e.getAttribute("data-abroad")
	;return "false"===n&&"false"===o?"home":"true"===n&&"true"===o?"trav":"false"===n&&"true"===o?"abro":`${n}, ${o}`
	}function qt(t,e,n={}){const o={
	"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8",
	"X-Requested-With":"XMLHttpRequest",Origin:"https://www.torn.com",Accept:"*/*"
	},i=t=>(t=>{try{return JSON.parse(t)}catch{return t}
	})(t),r="POST"===t,a=new URL(e,location.href).origin===location.origin,s=r?"string"==typeof n?n:new URLSearchParams(n).toString():void 0,c={
	method:t,headers:o,credentials:"include",body:s};return new Promise((r,l)=>{
	if(_t())"GET"===t?PDA_httpGet(e).then(t=>r(i(t.responseText))).catch(l):PDA_httpPost(e,o,n).then(t=>r(i(t.responseText))).catch(l);else if(a)fetch(e,c).then(async t=>{
	if(!t.ok)throw Error("HTTP "+t.status);const e=await t.text();r(i(e));
	}).catch(l);else {const t={...c,url:e,data:s,onload:t=>r(i(t.responseText)),
	onerror:l};GM.xmlHttpRequest(t);}})}async function Ct(){var t,e
	;setTimeout(Ct,6e4);const n=f();if(d(n))return;const o=null==n?void 0:n.apikey
	;if("string"!=typeof o||16!==o.length)return
	;const i=null==n?void 0:n.userdata,r=1e3*((null==i?void 0:i.timestamp)??0)
	;if(Date.now()-3e4<=r)return;const a={section:"user",select:M,api:o
	},s=await Ht(a);if(!(null==s?void 0:s.status))return;const{t:c,o:l}=jt(s)
	;if(void 0===c||void 0===l)return
	;const u=(((null==(e=null==(t=null==s?void 0:s.merit_perks)?void 0:t.filter(t=>t.includes("mug")))?void 0:e.length)??0)/5+20)/400
	;"player_id"in s&&p({userdata:s}),p({mugperc:u
	}),_t()||yt("notification","complete",{old:i,new:s});}async function Ht(t){
	var e,n
	;const{section:o,select:i,objID:r,api:a}=t,s=`https://api.torn.com/${o}${r?"/"+r:""}?selections=${i}&key=${a??f("apikey")}&comment=nst`,c=await qt("GET",s)
	;return void 0!==(null==c?void 0:c.error)?(console.error(null==(e=null==c?void 0:c.error)?void 0:e.error),
	[2,10,13,18].includes(+(null==(n=null==c?void 0:c.error)?void 0:n.code))&&function(t){
	const e=l();t in e&&(delete e[t],u(e));}("nstdata"),{status:false,error:"broken key"
	}):{status:true,...c}}async function Nt(t){
	const{selection:e,api:n}=t,o=`https://www.tornstats.com/api/v2/${n??f("tsapikey")??f("apikey")}${e}`,i=await qt("GET",o)
	;return (null==i?void 0:i.status)?i:(console.error(null==i?void 0:i.message,i),{
	status:false})}async function Bt(t){
	const{selection:e,api:n,playerID:o,days:i}=t,r=`https://torn.seintz.com/api/${n??f("apikey")}/${e}/${o}/${"fly"===e?"":""+i}`
	;return await qt("GET",r)}function Rt(t,e){const n=()=>{Ot()===t&&e();}
	;return window.addEventListener("hashchange",n),
	window.addEventListener("popstate",n),window.addEventListener("nst:navigate",n),
	n(),()=>{
	window.removeEventListener("hashchange",n),window.removeEventListener("popstate",n),
	window.removeEventListener("nst:navigate",n);}}const Ft={add:()=>({closeSel:"li",
	mvSel:".info-wrap"}),manage:()=>({closeSel:'[class^="item"]',
	mvSel:'[class^="rrp"]'})};function Ut(){
	document.addEventListener("dblclick",t=>{const e=t.target
	;if(!e||"INPUT"!==e.tagName)return;const{classList:n}=e
	;n.contains("buyAmountInput")?function(t){var e,n,o
	;const i=null==(e=t.closest("div[class^=buyMenu]"))?void 0:e.querySelector("span[class^=amount]"),r=parseInt((null==(o=null==(n=null==i?void 0:i.innerText)?void 0:n.match(/x(\d+)/))?void 0:o[1])??"1",10)
	;!function(t,e){var n,o;const i=new Event("input",{bubbles:true
	}),r=null==(n=Object.getOwnPropertyDescriptor(t,"value"))?void 0:n.set,a=null==(o=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t),"value"))?void 0:o.set
	;r&&r!==a?null==a||a.call(t,e):null==r||r.call(t,e),
	t.dispatchEvent(i),t.select();}(t,Math.min(r,1e4).toString());
	}(e):n.contains("input-money")?function(t){var e,n
	;const o=Ot(),i=null==(e=Ft[o])?void 0:e.call(Ft);if(!i)return
	;const{closeSel:r,mvSel:a}=i,s=t.closest(r)
	;if(!s||s.classList.contains("disabled"))return;const c=s.querySelector("img")
	;if(!(null==(n=null==c?void 0:c.src.match(/\d+/))?void 0:n[0]))return
	;const l=s.querySelector(a)
	;l&&Y(t,""+(parseInt(l.innerText.replace(/\D/g,"")||"0",10)-1));
	}(e):n.contains("clear-all")?function(t){var e,n
	;const o=t.closest("li"),i=null==o?void 0:o.querySelector("div.name-wrap")
	;Y(t,parseInt((null==(n=null==(e=null==i?void 0:i.innerText)?void 0:e.match(/x(\d+)/))?void 0:n[1])??"1",10).toString());
	}(e):n.contains("removeAmount")&&function(t){var e,n
	;const o=t.closest("div[class^=row]"),i=null==o?void 0:o.querySelector("div[class^=desc]")
	;Y(t,parseInt((null==(n=null==(e=null==i?void 0:i.innerText)?void 0:e.match(/x(\d+)/))?void 0:n[1])??"1",10).toString());
	}(e);});}const Gt=[{key:"bazaarautoprice",name:"bazaar auto price",
	description:"autoprice item for bazaar (double-click on input box)",
	onpage:Q.Bazaar,category:V.Bazaar,enabled:false,readyStates:["interactive"],
	run:()=>lt(Ut,"body")}];async function Wt(){var t,e;const o=It("userId")
	;if(!o)return;const i={section:"user",select:"bazaar",objID:o},r=await Ht(i)
	;if(!(null==r?void 0:r.status)||!Array.isArray(r.bazaar))return;let a=0,s=0
	;for(const n of r.bazaar){const t=+(null==n?void 0:n.quantity)||0
	;a+=(+(null==n?void 0:n.price)||0)*t,s+=(+(null==n?void 0:n.market_price)||0)*t;}
	const c=z({classList:"nst-trade-value",
	innerText:`Total: $${n(a)} - MV: $${n(s)}`
	}),l=document.querySelector("#bazaarRoot .wrapper")
	;l&&(null==(e=null==(t=l.parentElement)?void 0:t.querySelector(".nst-trade-value"))||e.remove(),
	l.insertAdjacentElement("afterend",c));}const Kt=[{key:"bazaarvalue",
	name:"bazaar value",description:"show value of bazaar",onpage:Q.Bazaar,
	category:V.Bazaar,enabled:false,readyStates:["loading"],
	run:()=>lt(Wt,"#bazaarRoot .wrapper")}],Xt=[],Jt=[],Yt=[];function Qt(t){var e
	;return null==(e=null==t?void 0:t.match(RegExp("(?<=step=|sid=)(\\w+)","g")))?void 0:e[0]
	}function Vt(t,e){const n=Mt();if(!n.fetch.i){const t=n.fetch
	;n.fetch=async(...e)=>{var n;let o=await t(...e)
	;const i=(null==(n=e[0])?void 0:n.url)||e[0]
	;for(const{stepId:t,handler:r}of Xt)Qt(i)===t&&(o=await r(o));return o
	},n.fetch.i=true;}Xt.push({stepId:e,handler:t});}const Zt=new Map,te=new Set
	;let ee,ne=[],oe=[],ie={};function re(t){if("coordinates"in t){
	const[e,n]=t.coordinates;return {entryId:t.row_id.toString(36),itemId:t.item_id,
	name:t.title,
	td:btoa([e,n,t.row_id,t.timestamp].map(t=>t.toString(36)).join("O")),x:e,y:n}}
	return {entryId:t.id,itemId:parseInt(t.d,36),name:t.title,
	td:btoa([t.c.x,t.c.y,t.id,t.ts].join("O")),x:parseInt(t.c.x,36),
	y:parseInt(t.c.y,36)}}async function ae(t){if(!te.has(t.entryId)){
	te.add(t.entryId);try{const e="https://www.torn.com/city.php?rfcv="+Dt(),n={
	step:"uif",td:t.td};if(!function(t){if(t&&"object"==typeof t){const e=t
	;if("success"in e)return !0===e.success||"true"===e.success||1===e.success
	;if("error"in e&&e.error)return !1}return ""===t
	}(await qt("POST",e,n)))throw Error("Torn did not confirm item collection")
	;oe=oe.flatMap(e=>{const n=e.entries.filter(e=>e.entryId!==t.entryId)
	;return n.length?[{...e,entries:n,count:n.length}]:[]
	}),ue(oe),ce(),se("Collected "+t.name);}catch(e){
	console.error("City item collection failed:",e),
	se(`Could not collect ${t.name}. Try the original item.`,true);}finally{
	te.delete(t.entryId);}}}function se(t,e=false){const n=document.createElement("div")
	;n.textContent=t,Object.assign(n.style,{position:"fixed",right:"20px",
	bottom:"20px",zIndex:"2147483647",background:e?"#8a2424":"#205b32",color:"#fff",
	padding:"12px 16px",borderRadius:"8px",boxShadow:"0 3px 12px #0008"
	}),document.body.appendChild(n),window.setTimeout(()=>n.remove(),3500);}
	function ce(){const t=oe.map(t=>{const e=ie[+t.item];return {
	name:(null==e?void 0:e.name)??t.name,
	marketValue:+((null==e?void 0:e.market_value)??0),count:+t.count}
	}),e=t.reduce((t,e)=>t+e.marketValue*e.count,0),o=t.map(t=>`${t.name} x${t.count}`).join(", ")
	;document.querySelectorAll(".nst-findsworth").forEach(t=>{
	t.innerText="Worth: $"+n(e);
	}),document.querySelectorAll(".nst-findslist").forEach(t=>{t.innerText=o;});}
	function le(){const t=function(){var t,e,n
	;const o=Mt(),i=null==(t=o.torn)?void 0:t.map,r=o.L
	;return (null==i?void 0:i.lmap)&&i.getLPoint&&Number.isFinite(i.minZoom)&&(null==r?void 0:r.marker)&&(null==r?void 0:r.divIcon)&&(null==(n=null==(e=r.CRS)?void 0:e.EPSG3857)?void 0:n.pointToLatLng)?{
	map:i,leaflet:r}:null}();if(!t)return  false
	;const{map:e,leaflet:n}=t,o=new Set(ne.map(t=>t.entryId))
	;for(const[r,a]of Zt)o.has(r)||(a.remove(),Zt.delete(r));for(const r of ne)try{
	const t=n.CRS.EPSG3857.pointToLatLng(e.getLPoint([r.x/2,r.y/2]),e.minZoom),o=Zt.get(r.entryId)
	;if(o){o.setLatLng(t);continue}const i=n.divIcon({className:"nst-city-marker",
	html:`<span class="nst-city-marker-content"><img src="https://www.torn.com/images/items/${r.itemId}/small.png" alt=""></span>`,
	iconSize:[48,48],iconAnchor:[24,24]}),a=n.marker(t,{icon:i,interactive:!0,
	keyboard:!1,zIndexOffset:1e3}).addTo(e.lmap),s=a.getElement()
	;s&&(s.dataset.entryId=r.entryId,
	s.dataset.itemId=r.itemId+"",s.title=r.name,s.addEventListener("click",t=>{
	t.isTrusted&&(t.preventDefault(),t.stopPropagation(),ae(r));
	})),Zt.set(r.entryId,a);}catch(i){
	console.warn("Unable to create city item marker:",r.entryId,i);}
	return Zt.size===ne.length}function ue(t){
	if(ne=t.flatMap(t=>t.entries),void 0!==ee&&window.clearInterval(ee),le())return
	;let e=0;ee=window.setInterval(()=>{
	(le()||++e>=80)&&(window.clearInterval(ee),ee=void 0);},250);}
	async function de(t){const e=function(t){const e=t.territoryUserItems
	;if("string"!=typeof e)return [];let n;try{if(n=JSON.parse(function(t){
	const e=atob(t),n=Uint8Array.from(e,t=>t.charCodeAt(0))
	;return new TextDecoder("utf-8").decode(n)}(e)),!Array.isArray(n))return []
	}catch(o){return console.error("Failed to decode territory items:",o),[]}
	return function(t){const e=new Map;for(const n of t){
	const t=re(n),o=t.itemId,i="coordinates"in n?n.timestamp:parseInt(n.ts,36)
	;if(![o,t.x,t.y,i].every(Number.isFinite))continue;const r=e.get(o)
	;r?(r.entries.push(t),r.count++):e.set(o,{item:o,name:n.title||"Item "+o,
	count:1,entries:[t]});}return [...e.values()].sort((t,e)=>t.item-e.item)}(n)}(t)
	;if(!e.length)return;oe=e,ue(e);const n=await Ht({section:"torn",select:"items"
	});(null==n?void 0:n.status)&&(ie=n.items,lt(t=>{const e=t.closest("#tab-menu")
	;if(!e)return;const n=J("City Finds",e),o=z({classList:"nst-box-column"})
	;o.appendChild(z({classList:"nst-findsworth",innerText:""})),o.appendChild(z({
	classList:"nst-findslist",innerText:""})),n.appendChild(o),ce();
	},"#map .leaflet-marker-pane"));}const fe=[{key:"cityfind",name:"city find",
	description:"highlight items in the city",onpage:Q.City,category:V.City,
	enabled:false,readyStates:["interactive"],run:()=>{
	return t=de,void(_t()||XMLHttpRequest.prototype.l||(XMLHttpRequest.prototype._original_open=XMLHttpRequest.prototype.open,
	XMLHttpRequest.prototype.open=function(t,e,n,o,i){
	const r=this._original_open.call(this,t,e,n??true,o,i),a=Tt(("string"==typeof e?e:e.toString()).split("?")[1]||"")
	;for(const{handler:s,stepId:c}of Jt)a.step===c&&this.addEventListener("readystatechange",()=>{
	if(4!==this.readyState||200!==this.status)return r
	;const t="json"===this.responseType?this.response:h(this.responseText)
	;return s(t),r});return r},XMLHttpRequest.prototype.l=true,Jt.push({handler:t,
	stepId:"mapData"})));var t;}}];function pe(t){const n=t.target
	;n instanceof HTMLInputElement&&"text"===n.type&&n.classList.contains("input-money")&&function(t){
	const n=t.closest("li");if(!n)return;const o=n.querySelector("div.sold-daily")
	;o&&Y(t,e(o.innerText).toString());}(n);}function me(){
	document.addEventListener("dblclick",pe);}const he=[{key:"companyrestock",
	name:"company easy restock",
	description:"autoset restock amount to daily sold value (double-click on input box)",
	onpage:Q.Company,category:V.Company,enabled:false,readyStates:["interactive"],
	run:()=>lt(me,"body"),condition:()=>/stock/.test(Ot())}];function ge(t){var n
	;const o=t.target;if(!(o instanceof HTMLInputElement))return
	;const i=o.closest("span.item-desc")||(null==(n=o.parentElement)?void 0:n.parentElement)
	;if(!i)return;const r=i.querySelector(".instock");if(!r)return
	;const a=e(r.innerText);o.value=""+Math.min(a,100);}function be(){
	document.addEventListener("dblclick",ge);}const ve=[{key:"cshopmaxbuy",
	name:"city shop max buy",
	description:"add the max between 100 and current stock",onpage:Q.Shops,
	category:V.Shops,enabled:false,readyStates:["interactive"],run:()=>lt(be,"body")}]
	;function we(t){const e=t.getAttribute("itemid");if(!e)return
	;const n=t.querySelector(".name .desc")
	;n&&!n.querySelector(".text-nstmain")&&n.insertAdjacentElement("afterbegin",R({
	classList:"text-nstmain",innerText:"ID: "+e}));}function ye(t){if(function(t){
	return !!t&&/manage/.test(Ot())}(t))for(const e of Array.from(t.children))we(e);}
	const xe=[{key:"displaycaseitemid",name:"display case items id",
	description:"shows item id on display case's manage page",onpage:Q.DisplayCase,
	category:V.DisplayCase,enabled:false,readyStates:["interactive"],
	run:()=>lt(ye,"ul.dc-list")}],ke={abandon:"text-nstabandon",bury:"text-nstbury",
	burn:"text-nstburn",sink:"text-nstsink",dissolve:"text-nstdissolve"},Se={
	"biological waste":"sink","body part":"dissolve","building debris":"sink",
	"dead body":"dissolve",documents:"burn",firearm:"sink","general waste":"burn",
	"industrial waste":"sink","murder weapon":"sink","old furniture":"burn",
	"broken appliance":"sink",vehicle:"sink"};function Le(t){
	Array.from(t.querySelectorAll(".crime-option-sections")).forEach(t=>{var e
	;const n=(null==(e=t.textContent)?void 0:e.trim().toLowerCase().split("?")[0])||"",o=Se[n],i=ke[o]
	;t.classList.add(i);const r=t.querySelector(`button[class*="${o}"]`)
	;t.addEventListener("click",t=>{t.target.closest("button")||null==r||r.click();});
	});}const Te=[{key:"disposalhighlight",name:"disposal highlight",
	description:"highlight best method for disposal crime",onpage:Q.Page,
	category:V.Crime,enabled:false,readyStates:["interactive"],run:()=>{
	Rt("disposal",()=>lt(Le,'div[class^="virtualList"]'));},
	condition:()=>/crimes/.test(Pt()??"")}];let _e
	;const{easyoutcome:Me,easytemp:De,easyweapon:Ie}=f(),Pe={primary:"#weapon_main",
	secondary:"#weapon_second",melee:"#weapon_melee",temp:"#weapon_temp"
	},Oe=new MutationObserver(()=>ze());function Ee(){
	lt(qe,'div[class^="playerArea"] [class^="playerWindow"] [class*="defender"]');}
	const je=[],Ae=Node.prototype.removeChild;function $e(t=document){
	const e=[...Array.from(t.querySelectorAll('div[class^="dialogButtons"] button')),...Array.from(t.querySelectorAll(".nst-easy-fight button"))]
	;if(e.length)return e.find(t=>{const e=t.innerText.toLowerCase()
	;return e.includes(Me.toLowerCase())||e.includes("fight")})}
	function ze(t=document){const e=$e(t);e&&function(t){if(!t)return
	;if(document.querySelector(".nst-easy-fight"))return
	;const e=t.innerText.toLowerCase().includes("fight"),n=De&&e?Pe.temp:Pe[Ie],o=document.querySelector(n+' [class^="weaponImage"] img'),i=document.querySelector(n)
	;if(!o||!i)return;const r=z({})
	;r.classList.add("nst-easy-fight"),r.appendChild(t),
	i.insertBefore(r,o.nextSibling),
	r.style.position="absolute",r.style.top=(o.offsetTop||22)+"px",
	r.style.left="15px",t.addEventListener("click",()=>{r.remove();}),je.push(t);}(e);}
	function qe(t){ze(t),Oe.disconnect(),Oe.observe(t.parentNode,{attributes:true,
	childList:true,subtree:true});}function Ce(t){const e=async()=>{
	let e=await t.clone().json();e={...e};const n=e.DB,o=n.error
	;return (null==o?void 0:o.includes("in hospital"))||(null==o?void 0:o.includes("unconscious"))||(null==o?void 0:o.includes("This fight no longer exists"))?(delete n.error,
	null==e||delete e.startErrorTitle,
	n.defenderUser.playername+=" [Hospital]"):n.defenderUser.playername+=` [${n.usersLife.defender.lifeBar}%]`,
	e}
	;return t.json=e,t.text=async()=>JSON.stringify(await e()),t.json().then(t=>async function(t){
	var e;const n=await new Promise(t=>{const e=$e();if(e)return t(e)
	;const n=new MutationObserver(()=>{const e=$e();e&&(t(e),n.disconnect());})
	;n.observe(document.body,{childList:true,subtree:true});});if(!n)return;const o=t.DB
	;o.defenderUser.playername.includes("[Hospital]")||(null==(e=null==o?void 0:o.startButtonTimer)?void 0:e.timeLeft)>0?n.classList.add("disabled"):n.classList.remove("disabled");
	}(t)),t}function He(){Ee(),window.addEventListener("resize",()=>{
	clearTimeout(_e),_e=setTimeout(Ee,250);});}Node.prototype.removeChild=function(t){
	if(-1!==je.indexOf(t))return t;try{return Ae.call(this,t)}catch(e){
	return console.error("Failed to deposit ghost money:",e),t}};const Ne=[{
	key:"easyfight",name:"easy fight",
	description:"move attack button above weapon of choice",onpage:Q.Page,
	category:V.Fight,enabled:false,readyStates:["loading"],run:()=>lt(He,"body"),
	condition:()=>"attack"===Pt()},{key:"easypreattack",
	name:"show pre-attack button",description:"show fight button before attack",
	onpage:Q.Page,category:V.Fight,enabled:false,readyStates:["loading"],
	run:()=>Vt(Ce,st),condition:()=>"attack"===Pt()}];function Be(t){
	const e=t.currentTarget.closest('li[class^="slot"]');if(!e)return
	;const n=e.querySelector('header [aria-label^="Equip"]');n&&n.click();}
	function Re(t){
	t&&Array.from(t.querySelectorAll('ul[class*="slotItems"]')).forEach(t=>{
	t.addEventListener("click",Be);});}const Fe=[{key:"easyloadoutequip",
	name:"fast equip loadout",description:"equip loadout clicking in the whole are",
	onpage:Q.Items,category:V.Items,enabled:false,readyStates:["interactive"],
	run:()=>lt(Re,'ul[class^="slots"]')}];function Ue(t){if(!t)return
	;const o=t.querySelector("ul");if(!o)return;const i=function(t){const n={
	Strength:0,Defense:0,Speed:0,Dexterity:0,Total:0};return t.forEach(t=>{
	const o=t.getAttribute("aria-label");if(!o)return;const i=function(t){
	const n=t.split(" ");if(n.length<=2)return null
	;const o=n[0].replace(/:/g,""),i=e(n[1]),r=n[2].replace(/%/g,""),a=r.charAt(0),s=e(r)
	;return {name:o,effective:Math.round(i*("+"===a?s/100+1:1-s/100))}}(o)
	;i&&(n[i.name]=i.effective,n.Total+=i.effective);}),n}(Array.from(o.children))
	;o.lastElementChild&&o.lastElementChild.removeAttribute("class"),
	o.appendChild(function(t){const e=document.createDocumentFragment(),o=z({
	classList:"nst-box-header"});return o.appendChild(R({classList:"nst-box-title"
	})).appendChild(R({id:"nst-box-title",innerText:"Effective Stats"
	})),e.appendChild(o),Object.keys(t).forEach(o=>{const i=N({tabIndex:0,
	ariaLabel:`${o} ${n(t[o])}`}),r=R({classList:"divider",
	innerHTML:`<span>${o}</span>`}),a=R({classList:"desc",innerText:` ${n(t[o])} `,
	style:"margin-left: 3px"});i.appendChild(r),i.appendChild(a),e.appendChild(i);}),
	e}(i)),o.lastElementChild&&o.lastElementChild.classList.add("last");}const Ge=[{
	key:"effectivebs",name:"effective stats",
	description:"show effective stats after bonus/malus",onpage:Q.Home,
	category:V.Home,enabled:false,readyStates:["interactive"],run:()=>lt(Ue,".battle"),
	condition:()=>"home"===zt()}];function We(t,e){
	const n=t.querySelector("ul.employee-list");if(!n)return
	;const o=Array.from(n.children);if(!o.length)return
	;const i=Et(),r=i-86400,a=i-172800;o.forEach(t=>{var n,o
	;const i=t.getAttribute("data-user");if(!i)return
	;const s=null==(o=null==(n=e[i])?void 0:n.last_action)?void 0:o.timestamp,c=t.querySelector(".employee")
	;c&&(s<a?c.classList.add("bg-nstred"):s<r&&c.classList.add("bg-nstyellow"));});}
	async function Ke(t){if(!t)return;const e=await Ht({section:"company",
	select:"employees"});if(!(null==e?void 0:e.status))return
	;const n=null==e?void 0:e.company_employees;We(t,n),function(t,e){
	new MutationObserver(t=>{t.forEach(t=>{Array.from(t.addedNodes).forEach(t=>{
	t instanceof HTMLElement&&We(t,e);});});}).observe(t,{childList:true,subtree:true});
	}(t,n);}const Xe=[{key:"employeela",name:"employee last action",
	description:"highlight employee with last action before one or two days",
	onpage:Q.Company,category:V.Company,enabled:false,readyStates:["interactive"],
	run:()=>lt(Ke,".manage-company")}];function Je(t){
	const e=Tt(t),{step:n,action:o,confirm:i,item_id:r}=e,a=f(x)
	;return (null==a?void 0:a[r])&&"isEquipped"in a[r]&&(a[r].isEquipped=false,p({[x]:a
	})),function(t){return Object.entries(t).map(([t,e])=>`${t}=${e}`).join("&")
	}("actionForm"!==n||"equip"!==o||"1"===i?e:{...e,confirm:"1"})}const Ye=[{
	key:"equipnoconfirm",name:"equip without confirm",
	description:"equip loadout clicking in the whole are",onpage:Q.Items,
	category:V.Items,enabled:false,readyStates:["loading"],run:()=>{
	return t=Je,void(_t()||XMLHttpRequest.prototype.u||(XMLHttpRequest.prototype._original_send=XMLHttpRequest.prototype.send,
	XMLHttpRequest.prototype.send=function(t){try{let e=!1
	;for(const{handler:n,stepId:o}of Yt)if(t&&"string"==typeof t){
	const{step:i,sid:r}=Tt(t);if(i===o||r===o){const o=n(t)
	;return e=!0,this._original_send.call(this,o)}}
	if(!e)return this._original_send.call(this,t)}catch(e){
	return console.error("XHR send MITM error:",e),this._original_send.call(this,t)}
	},XMLHttpRequest.prototype.u=true,Yt.push({handler:t,stepId:"actionForm"})));var t;
	}
	}],Qe=".deposit-box .input-money-symbol, .deposit .input-money-symbol, .donate .input-money-symbol",Ve=new WeakSet
	;function Ze(t){if(Ve.has(t))return;Ve.add(t);let e=0
	;t.addEventListener("click",()=>{if(1!==e++)return;e=0
	;const t=document.querySelector('.deposit-box input[value="DEPOSIT"], .deposit button.torn-btn, .armoury-donate-wrap .cash button')
	;t&&t.click()
	;const n=document.querySelector(".armoury-donate-wrap .cash-confirm .yes")
	;n&&n.click();});}function tn(t){
	const e=document.querySelector(".deposit-box .input-money-symbol, .deposit .input-money-symbol")
	;e&&Ze(e),function(t){new MutationObserver(t=>{t.forEach(t=>{
	Array.from(t.addedNodes).forEach(t=>{var e
	;if(t instanceof Element)if(t.matches&&t.matches(Qe))Ze(t);else {
	const n=null==(e=t.querySelector)?void 0:e.call(t,Qe);n&&Ze(n);}});});
	}).observe(t,{childList:true,subtree:true});}(t);}const en=[{key:"ezdepositcompany",
	name:"fast deposit",
	description:"deposit money with a double click (double-click on dollar sign)",
	onpage:Q.Company,category:V.Company,enabled:false,readyStates:["interactive"],
	run:()=>lt(tn,it)},{key:"ezdepositfaction",name:"fast deposit",
	description:"deposit money with a double click (double-click on dollar sign)",
	onpage:Q.Faction,category:V.Faction,enabled:false,readyStates:["interactive"],
	run:()=>lt(tn,it)},{key:"ezdepositproperty",name:"fast deposit",
	description:"deposit money with a double click (double-click on dollar sign)",
	onpage:Q.Properties,category:V.Properties,enabled:false,
	readyStates:["interactive"],run:()=>lt(tn,it)
	}],{reloadone:nn,reloadtwo:on,weapon:rn}=f(),an=It("user2ID")??"",sn={primary:1,
	secondary:2,melee:3,temp:5};let cn={},ln={},un=false,dn=0;const fn={check:()=>{
	var t
	;return "error"in ln?ln.error:"startButtonTimer"in ln?`attack in ${+(null==(t=null==ln?void 0:ln.startButtonTimer)?void 0:t.timeLeft)}s`:"checking"
	},start:()=>"start fight",finish:()=>"executing",end:()=>{var t,e
	;return (null==(t=null==ln?void 0:ln.endResult)?void 0:t.info)??(null==(e=null==ln?void 0:ln.endResult)?void 0:e.groupEvent)??""
	},hit:()=>{var t,e
	;const n=+(null==(t=null==ln?void 0:ln.defenderUser)?void 0:t.life),o=+(null==(e=null==ln?void 0:ln.defenderUser)?void 0:e.maxlife)
	;return `${n} / ${o} (${Math.floor(n/o*100)}%)`},hold:()=>""},pn={hold:()=>({}),
	end:()=>({user2ID:an}),finish:()=>{var t;return {step:"finish",
	fightResult:null==(t=f())?void 0:t.outcome}},check:()=>({user2ID:an}),
	start:()=>({step:"startFight",user2ID:an}),hit:()=>({step:"attack",user2ID:an,
	user1EquipedItemID:gn()})};function mn(t){p({outcome:t.target.id});}
	function hn(){var t
	;const e=null==(t=null==ln?void 0:ln.defenderUser)?void 0:t.life,n=null==cn?void 0:cn.currentAttackStatus,o=null==ln?void 0:ln.attackStatus,{hold:i}=f()
	;return i&&e<2?"hold":"end"===o&&"endResult"in ln?"end":e<2&&"finishOptions"in ln?"finish":"error"in ln||"startButtonTimer"in ln?"check":un||"notStarted"!==o?un||"process"===n?"hit":"check":"start"
	}function gn(){var t,e,n,o,i,r,a,s,c,l,u,d,p,m
	;const h=null==ln?void 0:ln.attackerAmmoStatus,g=null==(t=null==ln?void 0:ln.currentClips)?void 0:t[0],b=null==(i=null==(o=null==(n=null==(e=null==ln?void 0:ln.attackerItems)?void 0:e[1])?void 0:n.item)?void 0:o[0])?void 0:i.currentBonuses,v=null==(c=null==(s=null==(a=null==(r=null==ln?void 0:ln.attackerItems)?void 0:r[2])?void 0:a.item)?void 0:s[0])?void 0:c.currentBonuses,w=null==ln?void 0:ln.currentMove,{assaperk:y,executeperk:x}=f(),k={
	primary:()=>{var t,e,n,o,i
	;const r=null!=(null==(o=null==(n=null==(e=null==(t=null==ln?void 0:ln.attackerItems)?void 0:t[1])?void 0:e.item)?void 0:n[0])?void 0:o.ID),a=0!==+(null==g?void 0:g.attackerPrimaryRoundsLeft),s=!(null==(i=null==h?void 0:h[1])?void 0:i.includes("No ammo"))
	;return r&&s&&(a||nn)},secondary:()=>{var t,e,n,o,i
	;const r=null!=(null==(o=null==(n=null==(e=null==(t=null==ln?void 0:ln.attackerItems)?void 0:t[2])?void 0:e.item)?void 0:n[0])?void 0:o.ID),a=0!==+(null==g?void 0:g.attackerSecondaryRoundsLeft),s=!(null==(i=null==h?void 0:h[2])?void 0:i.includes("No ammo"))
	;return r&&s&&(a||on)},melee:()=>{var t,e,n,o
	;return null!=(null==(o=null==(n=null==(e=null==(t=null==ln?void 0:ln.attackerItems)?void 0:t[3])?void 0:e.item)?void 0:n[0])?void 0:o.ID)
	}};if(0===w&&y){
	if("Assassinate"===(null==(l=null==b?void 0:b[72])?void 0:l.title))return 1
	;if("Assassinate"===(null==(u=null==v?void 0:v[72])?void 0:u.title))return 2}
	if(x&&"Execute"===(null==(d=null==v?void 0:v[75])?void 0:d.title)){
	const t=v[75].value
	;if(+(null==(p=null==ln?void 0:ln.defenderUser)?void 0:p.life)/+(null==(m=null==ln?void 0:ln.defenderUser)?void 0:m.maxlife)*100<=t)return 2
	}if(function(){var t,e,n,o,i,r,a,s
	;const c=null==(o=null==(n=null==(e=null==(t=null==ln?void 0:ln.attackerItems)?void 0:t[5])?void 0:e.item)?void 0:n[0])?void 0:o.ID
	;if(!c)return  false;const{temp:l}=f();if(!l)return  false
	;const u=null==(s=null==(a=null==(r=null==(i=null==ln?void 0:ln.defenderItems)?void 0:i[6])?void 0:r.item)?void 0:a[0])?void 0:s.ID
	;if(!u)return  true
	;const d=["670","1355","348"].includes(u),p=["348","642","644","655","670","675","680","1355"].includes(u)
	;return !("256"===c&&d||"392"===c&&p)}())return 5;do{
	const t=Object.keys(rn).find(t=>+rn[t]===dn);if(k[t]())return sn[t];dn++;
	}while(dn<3);return 999}async function bn(t){const e=t.target;e.disabled=true
	;const n=hn(),o=pn[n]()
	;if("start"===n&&(un=true),"finish"===n&&(un=false),d(o))return
	;const i="https://www.torn.com/page.php?sid=attackData&mode=json&rfcv="+Dt(),r={
	method:"POST",headers:{"x-requested-with":"XMLHttpRequest"},
	body:new URLSearchParams(o)};try{const t=await fetch(i,r);!function(t,e){
	console.debug(t),cn=t,ln=t.DB;const n=hn();e.innerText=fn[n](),e.disabled=!1;
	}(await t.clone().json(),e);}catch(a){console.error(a);}}function vn(t){
	!function(t){const e=J("fighterino",t);e.classList.add("nst-box-column")
	;const n=function(){const t=z({classList:"nst-box-column"}),e=z({
	classList:"nst-outcome",onchange:mn}),n=z({classList:"nst-outcome"})
	;return e.appendChild(K("leave","outcome")),
	e.appendChild(K("mug","outcome")),e.appendChild(K("hospitalize","outcome")),
	n.appendChild(W({id:"nst-hold"},"hold")),n.appendChild(W({id:"nst-temp"
	},"use temp first")),n.appendChild(W({id:"nst-assaperk"
	},"assassinate")),n.appendChild(W({id:"nst-executeperk"
	},"execute")),t.appendChild(e),t.appendChild(n),t}(),o=z({
	classList:"nst-box-column"}),i=$({id:"nst-fighteroo",classList:"torn-btn m-2",
	innerText:"fighterino",onclick:bn})
	;o.appendChild(i),e.appendChild(n),e.appendChild(o);}(t);}const wn=[{
	key:"fighterino",name:"fighterino",description:"single button for fights",
	onpage:Q.Page,category:V.Fight,enabled:false,readyStates:["interactive"],
	run:()=>lt(vn,'div[class^="playersModelWrap"]'),condition:()=>"attack"===Pt()
	}],yn={Argentina:167,Canada:41,"Cayman Islands":35,China:242,Hawaii:134,
	Japan:225,Mexico:26,"South Africa":297,Switzerland:175,UAE:271,
	"United Kingdom":159},xn={standard:1,airstrip:.7,private:.5,business:.3
	},kn={},Sn={},Ln={},Tn=Object.keys(xn);function _n(t){const e=Ln[t]
	;if(e&&document.body.contains(e))return e
	;const n=null==document?void 0:document.querySelector(t);return n&&(Ln[t]=n),n}
	function Mn(t,n="standard",o=false){if(d(t))return new Date
	;const i=new Date(t.timestamp).getTime(),r=t.country,a=(yn[r]??0)*(xn[n]??1)*6e4,s=o?1e3*e(t.variance):0
	;return new Date(i+a+s)}function Dn(t,e="standard",n=false){const o=Mn(t,e,n)
	;return `${o.getUTCHours().toString().padStart(2,"0")}:${o.getUTCMinutes().toString().padStart(2,"0")}:${o.getUTCSeconds().toString().padStart(2,"0")} TCT`
	}function In(t,e,n){const o=_n("#profile-mini-root span.sub-desc")
	;if(!o)return clearInterval(kn[n]),void delete kn[n]
	;"standard"!==e&&"business"!==e||o.hasAttribute("data-flight-listener")||(o.setAttribute("data-flight-listener","true"),
	o.addEventListener("click",()=>{var i;o.removeAttribute("data-flight-listener")
	;const r=o.cloneNode(true)
	;null==(i=o.parentNode)||i.replaceChild(r,o),In(t,"standard"===e?"business":"standard",n);
	},{once:true}));const i=Date.now(),r=Sn[t];if(!r)return
	;const a=Mn(r,e,false),s=Mn(r,e,true),c=(+a-i)/1e3;let l;var u
	;l=c<=0?"Landing in "+((u=(+s-i)/1e3)<60?Math.max(0,Math.floor(u))+" sec":Math.floor(u/60)+" min"):"Landing after "+Dn(r,e),
	function(t,e,n,o){const i=`${e} (${n})`
	;t.innerText!==i&&(t.innerText=i,t.setAttribute("aria-live","polite")),
	t.style.color=o<=60?"#e74c3c":o<=300?"#f39c12":"";}(o,l,e,c);}
	async function Pn(t){const e=await t.clone().json()
	;return kn.miniProfile&&clearInterval(kn.miniProfile),async function(t,e){
	var n,o
	;const i=null==(n=t.user)?void 0:n.userID,r=null==(o=t.userStatus)?void 0:o.status,{type:a,flightType:s}=r||{}
	;if(!a||!a.startsWith("traveling"))return;const c=Tn.includes(s)?s:"business"
	;requestAnimationFrame(()=>{
	const t=_n("#profile-mini-root span.sub-desc"),e=`(${c||"standard/business"})`
	;t&&t.innerText!==e&&(t.innerText=e);});const l=await Bt({playerID:i,
	selection:"fly"});Sn[i]={timestamp:l.timestamp??Date.now(),
	country:(l.country??"Unknown")+"",...l
	},kn[e]&&(clearInterval(kn[e]),delete kn[e]),In(i,c,e),kn[e]=setInterval(()=>{
	In(i,c,e);const t=Sn[i];if(t){const n=Mn(t,c,false)
	;Date.now()>+n&&(clearInterval(kn[e]),delete kn[e]);}},1e3)
	;const u=_n("div.profile-container > svg");if(u){
	u.setAttribute("style","top: 14px");const t=u.nextElementSibling;if(t){
	const e=Tn.map(t=>`${t}${t===c?" (current)":""}: ${Dn(Sn[i],t)}`).join("\n")
	;t.setAttribute("title",e);}}}(e,"miniProfile"),t}const On=[{key:"flighttimer",
	name:"flight timer",
	description:"display flight timer on mini profile and profile",onpage:Q.All,
	category:V.All,enabled:false,readyStates:["loading"],run:()=>Vt(Pn,ct)}],En={},jn={
	balboas:{req:["defense","dexterity"],desc:["balboas (def/dex)"]},frontline:{
	req:["strength","speed"],desc:["frontline (str/spd)"]},gym3000:{
	req:["strength"],desc:["gym3000 (str)"]},isoyamas:{req:["defense"],
	desc:["isoyamas (def)"]},rebound:{req:["speed"],desc:["rebound (spd)"]},elites:{
	req:["dexterity"],desc:["elites (dex)"]}};function An(t){
	const e=null==t?void 0:t.target,n=r(e.id);p({[n]:e.value}),$n();}function $n(){
	["one","two"].forEach(t=>{
	const e=document.getElementById(`nst-spgym-${t}-sel`),o=document.getElementById(`nst-spgym-${t}-msg`)
	;if(!e||!o)return
	;const i=e.value,r=jn[i].req,{mainStat:a,secStat:s}=function(t){const e={},n={}
	;for(const o in En)t.includes(o)?e[o]=En[o]:n[o]=En[o];return {mainStat:e,
	secStat:n}
	}(r),c=Object.values(a).reduce((t,e)=>+t+ +e,0),l=Object.values(s).reduce(Object.keys(a).length>1?(t,e)=>+t+ +e:(t,e)=>Math.max(+t,+e),0),u=n(function(t,e){
	return t>=1.25*e?t/1.25-e:1.25*e-t
	}(c,l)),d=Object.keys(a).length>1?Object.keys(c>=1.25*l?s:a).join(" and "):(c>=1.25*l?Object.keys(s).filter(t=>En[t]===l):Object.keys(a)).join(""),f=c>=1.25*l?"no more than":""
	;o.innerText=`Gain ${f} ${u} ${d}`;});}function zn(t){!function(t){
	const e=J("Special Gym",t);["one","two"].forEach(t=>{const n=z({
	id:"nst-spgym-"+t}),o=function(t,e){var n
	;const o=document.querySelector(`nst-spgym-${t}-sel`);if(o)return o
	;const i=j("select",{id:`nst-spgym-${t}-sel`,className:"nst-spgym-sel",
	onchange:e}),r=null==(n=f(`spgym${t}sel`))?void 0:n.toString()
	;return Object.entries(jn).forEach(([t,e])=>{const n=j("option",{value:t,
	innerText:e.desc.join()});n.selected=r===t,i.appendChild(n);}),i}(t,An),i=B({
	id:`nst-spgym-${t}-msg`,classList:"nst-spgym-msg"})
	;n.appendChild(o),n.appendChild(i),e.appendChild(n);});}(t);}async function qn(t){
	var n;const o=await t.clone().json()
	;if(o&&"object"==typeof o)if("stats"in o&&"object"==typeof o.stats)for(const[i,r]of Object.entries(o.stats))En[i]=e(null==r?void 0:r.value);else "stat"in o&&(null==(n=o.stat)?void 0:n.name)&&(En[o.stat.name]=e(o.stat.newValue))
	;return $n(),t}const Cn=[{key:"gymspecial",name:"special gym",
	description:"show needed stats for special gyms",onpage:Q.Gym,category:V.Gym,
	enabled:false,readyStates:["loading"],run:()=>{
	lt(zn,"#gymroot"),Vt(qn,"getInitialGymInfo"),Vt(qn,"train");}}];function Hn(t,n){
	return t.reduce((t,o)=>{if(n.test(o)){const n=o.match(/\d+/)
	;return t+(n?e(n[0]):0)}return t},0)}function Nn(t){
	const e=t.closest('ul[class*="properties"]');if(!e)return;const n=f("userdata")
	;if(!n)return;const o=function(t){
	return [...t.faction_perks??[],...t.job_perks??[],...t.property_perks??[],...t.education_perks??[],...t.book_perks??[]]
	}(n),i=o.filter(t=>/% gym gains?/.test(t))
	;["strength","defense","speed","dexterity"].forEach(t=>{
	const r=(n.faction_perks??[]).filter(e=>e.includes(t+" gym gains")),a=(o??[]).filter(e=>e.includes(t+" gym gains")),s=Hn(r,/\d+/),c=Hn(i,/\d+/),l=Hn(a,/\d+/),u=z({
	id:"nst-steadfast-"+t,classList:"nst-steadfast",
	innerText:`steadfast: ${s}% (${c+l}%)`}),d=e.querySelector(`[class*=${t}]`)
	;d&&!d.querySelector("#nst-steadfast-"+t)&&d.insertAdjacentElement("afterbegin",u);
	});}const Bn=[{key:"gymsteadfast",name:"gym steadfast",
	description:"show steadfast and bonus gains",onpage:Q.Gym,category:V.Gym,
	enabled:false,readyStates:["interactive"],
	run:()=>lt(Nn,'#gymroot ul[class*="properties"] [class*="strength"]')}],Rn=[{
	key:"hidefactiondesc",name:"hide faction description",
	description:"hide faction description",onpage:Q.Faction,category:V.Faction,
	enabled:false,readyStates:["interactive"],run:()=>function(){
	const t=document.documentElement
	;"none"!==t.style.getPropertyValue("--nst-hide-fact-desc")&&t.style.setProperty("--nst-hide-fact-desc","none");
	}()}];function Fn(t){null==t||t.classList.add("nst-hide-medal");}const Un=[{
	key:"hidemedals",name:"hide medals",description:"hide medal tab on profile",
	onpage:Q.Profile,category:V.Profile,enabled:false,readyStates:["interactive"],
	run:()=>lt(Fn,".medals-wrapper")}],Gn=[{key:"hideplane",name:"hide plane",
	description:"hide plane",onpage:Q.Page,category:V.Home,enabled:false,
	readyStates:["loading"],run:()=>function(){const t=document.documentElement
	;"none"!==t.style.getPropertyValue("--nst-hide-plane")&&t.style.setProperty("--nst-hide-plane","none");
	}(),condition:()=>"travel"===Pt()}];function Wn(t){
	null==t||t.classList.add("nst-hide-profile-logs");}const Kn=[{
	key:"hideprofilelogs",name:"hide profile logs",
	description:"remove the activity log on profile page",onpage:Q.Profile,
	category:V.Profile,enabled:false,readyStates:["interactive"],
	run:()=>lt(Wn,'div[class*="logList"]')}],Xn=[{key:"hidewargraph",
	name:"hide war graph",description:"hide war graph",onpage:Q.Faction,
	category:V.Faction,enabled:false,readyStates:["interactive"],run:()=>function(){
	const t=document.documentElement
	;"none"!==t.style.getPropertyValue("--nst-hide-war-graph")&&t.style.setProperty("--nst-hide-war-graph","none");
	}()}];function Jn(t){if(!t)return
	;const e=document.getElementById("skip-to-content");e&&(e.innerText=t.innerText);
	}const Yn=[{key:"idtoname",name:"id near name",
	description:"add player id near the name",onpage:Q.Profile,category:V.Profile,
	enabled:false,readyStates:["interactive"],run:()=>lt(Jn,".user-info-value")}],Qn=[{
	key:"leftalign",name:"left align",description:"align torn to the left",
	onpage:Q.All,category:V.All,enabled:false,readyStates:["loading"],run:()=>{
	document.documentElement.classList.add("nst-left-align");}}];function Vn(t){
	var o,i;if(!t)return;const r=t.parentElement;if(!r)return
	;if(r.querySelector(".nst-live-networth"))return
	;const a=f("userdata"),s=e(null==(o=null==a?void 0:a.networth)?void 0:o.total),c=e(null==(i=null==a?void 0:a.personalstats)?void 0:i.networth),l=Math.round(s-c),u=l>0?"text-nstgreen":l<0?"text-nstred":"",d=`<b class='${u}'>$${n(l)}</b>`,p=N({
	classList:"last nst-live-networth",tabIndex:0,ariaLabel:"Live NW: "+n(s)}),m=R({
	classList:"divider",innerHTML:"<span>Live Networth</span>"}),h=R({
	classList:`desc ${u} font-bold`,innerText:` $${n(s)} `,
	style:"margin-left: 3px; margin-right: 3px;"}),g=j("i",{
	classList:"networth-info-icon",title:d,style:"margin-left: 6px;"})
	;h.appendChild(g),
	p.appendChild(m),p.appendChild(h),r.lastElementChild&&r.lastElementChild.removeAttribute("class"),
	r.appendChild(p);}const Zn=[{key:"livenetworth",name:"live networth",
	description:"display live changes on newtworth",onpage:Q.Home,category:V.Home,
	enabled:false,readyStates:["interactive"],
	run:()=>lt(Vn,'ul.info-cont-wrap [aria-label^="Networth"]'),
	condition:()=>"home"===zt()}];function to(){
	document.addEventListener("dblclick",t=>{const n=t.target
	;if(!n||"INPUT"!==n.tagName)return;let o=n.parentElement
	;for(let e=0;e<3&&o;e++)o=o.parentElement;if(!o)return
	;const i=document.querySelector(".travel-agency-market .availableItemsAmount"),r=i?e(i.getAttribute("value")??"0"):0,a=document.getElementById("user-money"),s=a?e(a.innerText):0,c=o.querySelector(".cost .c-price"),l=c?e(c.innerText):0,u=o.querySelector(".stock .stck-amount"),d=function(t,e,n,o){
	if(!e||!n||!o)return "";const i=Math.trunc(t/e)
	;return Math.min(i>=o?o:i,n).toString()}(s,l,u?e(u.innerText):0,r);d&&Y(n,d);});}
	const eo=[{key:"maxbuyabroad",name:"max buy abroad",
	description:"add max capacity quantity (double-click on input box)",
	onpage:Q.Home,category:V.Home,enabled:false,readyStates:["interactive"],
	run:()=>lt(to,"body"),condition:()=>"abro"===zt()}];async function no(t){
	const e=s(+(await t.clone().json()).user.lastAction.seconds).trim()
	;return lt(t=>function(t,e){
	const n=` (${e})`,o=t.querySelector("#nst-lastaction")
	;o&&(o.innerText=n),(null==o?void 0:o.innerText)!==n&&t.appendChild(R({
	id:"nst-lastaction",innerText:n}));
	}(t,e),'#profile-mini-root [class*="profile-mini-_userProfileWrapper"] span.last-action-desc'),
	t}const oo=[{key:"minilastaction",name:"mini profile last action",
	description:"display last action on mini profile",onpage:Q.All,category:V.All,
	enabled:false,readyStates:["loading"],run:()=>Vt(no,ct)}],io=function(){const t={}
	;for(const[e,n]of Object.entries({a_good_day_to_get_hard:{
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
	task:"Injure (P)'s both arms."},wrath_of_duke:{task:"Defeat 4 (P)."}
	}))t[ro(e)]=n;return t}();function ro(t){
	return t.toLowerCase().replace(/[ -]/g,"_").replace(/[:!,]/g,"")}function ao(t){
	var e;const n=ro(t);return (null==(e=io[n])?void 0:e.task)??"mission not found"}
	function so(t,e){const n=t.querySelector(".max-height-fix");if(!n)return
	;const o=R({innerHTML:"<br/><br/><b>todo:</b> "+e,classList:"text-nstmain"})
	;n.appendChild(o),t.classList.add("nst-edit");}function co(t){var e,n
	;const o=Array.from(t.querySelectorAll(".giver-cont-wrap > div[id^=mission]:not(.nst-edit)"))
	;for(const i of o){if(!(null==i?void 0:i.querySelector))continue
	;const t=i.querySelector(".title-black"),o=null==(n=null==(e=null==t?void 0:t.childNodes[0])?void 0:e.textContent)?void 0:n.replace(/\n/g,"").trim()
	;o&&so(i,ao(o));}}const lo=[{key:"missionhelper",name:"mission helper",
	description:"tips for missions before accepting",onpage:Q.Page,
	category:V.Mission,enabled:false,readyStates:["interactive"],
	run:()=>lt(co,".giver-cont-wrap"),condition:()=>"missions"===Pt()}]
	;function uo(t){if(!t)return
	;const n=t.querySelector(".total-price"),o=t.querySelector(".action")
	;n&&o&&e(n.innerText)*+f("mugperc")>=e(f("mugthreshold")+"")&&o.classList.add("text-black","bg-nstmain");
	}function fo(t){var e
	;document.querySelectorAll(".users-point-sell > li").forEach(uo),
	e=t,new MutationObserver(t=>{
	for(const e of t)for(const t of Array.from(e.addedNodes))t instanceof HTMLElement&&("LI"===t.tagName?uo(t):t.querySelectorAll&&t.querySelectorAll("li").forEach(uo));
	}).observe(e,{childList:true,subtree:true});}const po=[{key:"pointsmuglight",
	name:"points mug helper",description:"highlight profitable points for mugs",
	onpage:Q.Points,category:V.Points,enabled:false,readyStates:["interactive"],
	run:()=>lt(fo,".users-point-sell")}];function mo(t){
	if(!t||t.classList.contains("yes"))return;t.classList.add("yes")
	;const e=t.getAttribute("href");if(!e)return
	;const n=e.replace(/=buy/g,"=buy1").replace(/=remove/g,"=remove1").replace(/&points=\d+$/g,"")
	;t.setAttribute("href",n);}function ho(t){
	t.firstElementChild&&mo(t.firstElementChild);}function go(t){
	document.querySelectorAll(".users-point-sell > li").forEach(ho),
	new MutationObserver(t=>{
	for(const e of t)for(const t of Array.from(e.addedNodes))t instanceof HTMLElement&&"LI"===t.tagName&&t.firstElementChild&&mo(t.firstElementChild);
	}).observe(t,{childList:true,subtree:true});}const bo=[{key:"pointsnoconfirm",
	name:"points quick buy",description:"remove confirmation in points market",
	onpage:Q.Points,category:V.Points,enabled:false,readyStates:["interactive"],
	run:()=>lt(go,".users-point-sell")}],vo="p[class^=name]";function wo(t){var e
	;if(!t||t.querySelector("a"))return
	;const n=(null==(e=t.textContent)?void 0:e.trim())??"";if(!n)return;const o=A({
	classList:"nst-pokername",href:"profiles.php?NID="+encodeURIComponent(n),
	target:"_blank",innerText:n});t.textContent="",t.appendChild(o);}function yo(t){
	t.querySelectorAll(vo).forEach(wo),new MutationObserver(t=>{var e
	;for(const n of t)for(const t of Array.from(n.addedNodes))t instanceof HTMLElement&&(t.matches(vo)&&wo(t),
	null==(e=t.querySelectorAll)||e.call(t,vo).forEach(t=>wo(t)));}).observe(t,{
	childList:true,subtree:true});}const xo=[{key:"pokername",name:"poker name link",
	description:"add link to poker player name",onpage:Q.Page,category:V.Casino,
	enabled:false,readyStates:["interactive"],run:()=>lt(yo,"div[class^=players]"),
	condition:()=>"holdem"===Pt()}];function ko(t,e,n){return (e=function(t){
	var e=function(t){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive]
	;if(void 0!==e){var n=e.call(t,"string");if("object"!=typeof n)return n
	;throw new TypeError("@@toPrimitive must return a primitive value.")}return t+""
	}(t);return "symbol"==typeof e?e:e+""}(e))in t?Object.defineProperty(t,e,{
	value:n,enumerable:true,configurable:true,writable:true}):t[e]=n,t}function So(){
	return So=Object.assign?Object.assign.bind():function(t){
	for(var e=1;e<arguments.length;e++){var n=arguments[e]
	;for(var o in n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);}return t
	},So.apply(null,arguments)}function Lo(t,e){var n=Object.keys(t)
	;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t)
	;e&&(o=o.filter(function(e){
	return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o);}
	return n}function To(t){for(var e=1;e<arguments.length;e++){
	var n=null!=arguments[e]?arguments[e]:{}
	;e%2?Lo(Object(n),true).forEach(function(e){ko(t,e,n[e]);
	}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Lo(Object(n)).forEach(function(e){
	Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e));});}return t}
	function _o(t){
	return (_o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){
	return typeof t}:function(t){
	return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t
	})(t)}function Mo(t){
	if("undefined"!=typeof window&&window.navigator)return !!navigator.userAgent.match(t)
	}
	var Do=Mo(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),Io=Mo(/Edge/i),Po=Mo(/firefox/i),Oo=Mo(/safari/i)&&!Mo(/chrome/i)&&!Mo(/android/i),Eo=Mo(/iP(ad|od|hone)/i),jo=Mo(/chrome/i)&&Mo(/android/i),Ao={
	capture:false,passive:false};function $o(t,e,n){t.addEventListener(e,n,!Do&&Ao);}
	function zo(t,e,n){t.removeEventListener(e,n,!Do&&Ao);}function qo(t,e){if(e){
	if(">"===e[0]&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e)
	;if(t.msMatchesSelector)return t.msMatchesSelector(e)
	;if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch(n){return  false}
	return  false}}function Co(t){
	return t.host&&t!==document&&t.host.nodeType&&t.host!==t?t.host:t.parentNode}
	function Ho(t,e,n,o){if(t){n=n||document;do{
	if(null!=e&&(">"===e[0]?t.parentNode===n&&qo(t,e):qo(t,e))||o&&t===n)return t
	;if(t===n)break}while(t=Co(t))}return null}var No,Bo=/\s+/g;function Ro(t,e,n){
	if(t&&e)if(t.classList)t.classList[n?"add":"remove"](e);else {
	var o=(" "+t.className+" ").replace(Bo," ").replace(" "+e+" "," ")
	;t.className=(o+(n?" "+e:"")).replace(Bo," ");}}function Fo(t,e,n){
	var o=t&&t.style;if(o){
	if(void 0===n)return document.defaultView&&document.defaultView.getComputedStyle?n=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),
	void 0===e?n:n[e]
	;e in o||-1!==e.indexOf("webkit")||(e="-webkit-"+e),o[e]=n+("string"==typeof n?"":"px");
	}}function Uo(t,e){var n="";if("string"==typeof t)n=t;else do{
	var o=Fo(t,"transform");o&&"none"!==o&&(n=o+" "+n);}while(!e&&(t=t.parentNode))
	;var i=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix
	;return i&&new i(n)}function Go(t,e,n){if(t){
	var o=t.getElementsByTagName(e),i=0,r=o.length;if(n)for(;i<r;i++)n(o[i],i)
	;return o}return []}function Wo(){
	return document.scrollingElement||document.documentElement}
	function Ko(t,e,n,o,i){if(t.getBoundingClientRect||t===window){var r,a,s,c,l,u,d
	;if(t!==window&&t.parentNode&&t!==Wo()?(a=(r=t.getBoundingClientRect()).top,
	s=r.left,
	c=r.bottom,l=r.right,u=r.height,d=r.width):(a=0,s=0,c=window.innerHeight,
	l=window.innerWidth,
	u=window.innerHeight,d=window.innerWidth),(e||n)&&t!==window&&(i=i||t.parentNode,
	!Do))do{
	if(i&&i.getBoundingClientRect&&("none"!==Fo(i,"transform")||n&&"static"!==Fo(i,"position"))){
	var f=i.getBoundingClientRect()
	;a-=f.top+parseInt(Fo(i,"border-top-width")),s-=f.left+parseInt(Fo(i,"border-left-width")),
	c=a+r.height,l=s+r.width;break}}while(i=i.parentNode);if(o&&t!==window){
	var p=Uo(i||t),m=p&&p.a,h=p&&p.d;p&&(c=(a/=h)+(u/=h),l=(s/=m)+(d/=m));}return {
	top:a,left:s,bottom:c,right:l,width:d,height:u}}}function Xo(t,e,n){
	for(var o=Zo(t,true),i=Ko(t)[e];o;){if(!(i>=Ko(o)[n]))return o;if(o===Wo())break
	;o=Zo(o,false);}return  false}function Jo(t,e,n,o){
	for(var i=0,r=0,a=t.children;r<a.length;){
	if("none"!==a[r].style.display&&a[r]!==nr.ghost&&(o||a[r]!==nr.dragged)&&Ho(a[r],n.draggable,t,false)){
	if(i===e)return a[r];i++;}r++;}return null}function Yo(t,e){
	for(var n=t.lastElementChild;n&&(n===nr.ghost||"none"===Fo(n,"display")||e&&!qo(n,e));)n=n.previousElementSibling
	;return n||null}function Qo(t,e){var n=0;if(!t||!t.parentNode)return  -1
	;for(;t=t.previousElementSibling;)"TEMPLATE"===t.nodeName.toUpperCase()||t===nr.clone||e&&!qo(t,e)||n++
	;return n}function Vo(t){var e=0,n=0,o=Wo();if(t)do{var i=Uo(t),r=i.a,a=i.d
	;e+=t.scrollLeft*r,n+=t.scrollTop*a;}while(t!==o&&(t=t.parentNode));return [e,n]}
	function Zo(t,e){if(!t||!t.getBoundingClientRect)return Wo();var n=t,o=false;do{
	if(n.clientWidth<n.scrollWidth||n.clientHeight<n.scrollHeight){var i=Fo(n)
	;if(n.clientWidth<n.scrollWidth&&("auto"==i.overflowX||"scroll"==i.overflowX)||n.clientHeight<n.scrollHeight&&("auto"==i.overflowY||"scroll"==i.overflowY)){
	if(!n.getBoundingClientRect||n===document.body)return Wo();if(o||e)return n;o=true;
	}}}while(n=n.parentNode);return Wo()}function ti(t,e){
	return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)
	}function ei(t,e){return function(){if(!No){var n=arguments
	;1===n.length?t.call(this,n[0]):t.apply(this,n),No=setTimeout(function(){
	No=void 0;},e);}}}function ni(t,e,n){t.scrollLeft+=e,t.scrollTop+=n;}
	function oi(t){var e=window.Polymer,n=window.jQuery||window.Zepto
	;return e&&e.dom?e.dom(t).cloneNode(true):n?n(t).clone(true)[0]:t.cloneNode(true)}
	function ii(t,e,n){var o={};return Array.from(t.children).forEach(function(i){
	var r,a,s,c;if(Ho(i,e.draggable,t,false)&&!i.animated&&i!==n){var l=Ko(i)
	;o.left=Math.min(null!==(r=o.left)&&void 0!==r?r:1/0,l.left),
	o.top=Math.min(null!==(a=o.top)&&void 0!==a?a:1/0,l.top),
	o.right=Math.max(null!==(s=o.right)&&void 0!==s?s:-1/0,l.right),
	o.bottom=Math.max(null!==(c=o.bottom)&&void 0!==c?c:-1/0,l.bottom);}
	}),o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}
	var ri="Sortable"+(new Date).getTime(),ai=[],si={initializeByDefault:true},ci={
	mount:function(t){for(var e in si)si.hasOwnProperty(e)&&!(e in t)&&(t[e]=si[e])
	;ai.forEach(function(e){
	if(e.pluginName===t.pluginName)throw "Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")
	}),ai.push(t);},pluginEvent:function(t,e,n){var o=this
	;this.eventCanceled=false,n.cancel=function(){o.eventCanceled=true;};var i=t+"Global"
	;ai.forEach(function(o){
	e[o.pluginName]&&(e[o.pluginName][i]&&e[o.pluginName][i](To({sortable:e
	},n)),e.options[o.pluginName]&&e[o.pluginName][t]&&e[o.pluginName][t](To({
	sortable:e},n)));});},initializePlugins:function(t,e,n,o){
	for(var i in ai.forEach(function(o){var i=o.pluginName
	;if(t.options[i]||o.initializeByDefault){var r=new o(t,e,t.options)
	;r.sortable=t,r.options=t.options,t[i]=r,So(n,r.defaults);}
	}),t.options)if(t.options.hasOwnProperty(i)){
	var r=this.modifyOption(t,i,t.options[i]);void 0!==r&&(t.options[i]=r);}},
	getEventProperties:function(t,e){var n={};return ai.forEach(function(o){
	"function"==typeof o.eventProperties&&So(n,o.eventProperties.call(e[o.pluginName],t));
	}),n},modifyOption:function(t,e,n){var o;return ai.forEach(function(i){
	t[i.pluginName]&&i.optionListeners&&"function"==typeof i.optionListeners[e]&&(o=i.optionListeners[e].call(t[i.pluginName],n));
	}),o}},li=["evt"],ui=function(t,e){
	var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.evt,i=function(t,e){
	if(null==t)return {};var n,o,i=function(t,e){if(null==t)return {};var n={}
	;for(var o in t)if({}.hasOwnProperty.call(t,o)){if(-1!==e.indexOf(o))continue
	;n[o]=t[o];}return n}(t,e);if(Object.getOwnPropertySymbols){
	var r=Object.getOwnPropertySymbols(t)
	;for(o=0;o<r.length;o++)n=r[o],-1===e.indexOf(n)&&{}.propertyIsEnumerable.call(t,n)&&(i[n]=t[n]);
	}return i}(n,li);ci.pluginEvent.bind(nr)(t,e,To({dragEl:fi,parentEl:pi,
	ghostEl:mi,rootEl:hi,nextEl:gi,lastDownEl:bi,cloneEl:vi,cloneHidden:wi,
	dragStarted:Ei,putSortable:Ti,activeSortable:nr.active,originalEvent:o,
	oldIndex:yi,oldDraggableIndex:ki,newIndex:xi,newDraggableIndex:Si,
	hideGhostForTarget:Vi,unhideGhostForTarget:Zi,cloneNowHidden:function(){wi=true;},
	cloneNowShown:function(){wi=false;},dispatchSortableEvent:function(t){di({
	sortable:e,name:t,originalEvent:o});}},i));};function di(t){!function(t){
	var e=t.sortable,n=t.rootEl,o=t.name,i=t.targetEl,r=t.cloneEl,a=t.toEl,s=t.fromEl,c=t.oldIndex,l=t.newIndex,u=t.oldDraggableIndex,d=t.newDraggableIndex,f=t.originalEvent,p=t.putSortable,m=t.extraEventProperties
	;if(e=e||n&&n[ri]){
	var h,g=e.options,b="on"+o.charAt(0).toUpperCase()+o.substr(1)
	;!window.CustomEvent||Do||Io?(h=document.createEvent("Event")).initEvent(o,true,true):h=new CustomEvent(o,{
	bubbles:true,cancelable:true
	}),h.to=a||n,h.from=s||n,h.item=i||n,h.clone=r,h.oldIndex=c,
	h.newIndex=l,h.oldDraggableIndex=u,
	h.newDraggableIndex=d,h.originalEvent=f,h.pullMode=p?p.lastPutMode:void 0
	;var v=To(To({},m),ci.getEventProperties(o,e));for(var w in v)h[w]=v[w]
	;n&&n.dispatchEvent(h),g[b]&&g[b].call(e,h);}}(To({putSortable:Ti,cloneEl:vi,
	targetEl:fi,rootEl:hi,oldIndex:yi,oldDraggableIndex:ki,newIndex:xi,
	newDraggableIndex:Si},t));}
	var fi,pi,mi,hi,gi,bi,vi,wi,yi,xi,ki,Si,Li,Ti,_i,Mi,Di,Ii,Pi,Oi,Ei,ji,Ai,$i,zi,qi=false,Ci=false,Hi=[],Ni=false,Bi=false,Ri=[],Fi=false,Ui=[],Gi="undefined"!=typeof document,Wi=Eo,Ki=Io||Do?"cssFloat":"float",Xi=Gi&&!jo&&!Eo&&"draggable"in document.createElement("div"),Ji=function(){
	if(Gi){if(Do)return  false;var t=document.createElement("x")
	;return t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}
	}(),Yi=function(t,e){
	var n=Fo(t),o=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),i=Jo(t,0,e),r=Jo(t,1,e),a=i&&Fo(i),s=r&&Fo(r),c=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+Ko(i).width,l=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+Ko(r).width
	;if("flex"===n.display)return "column"===n.flexDirection||"column-reverse"===n.flexDirection?"vertical":"horizontal"
	;if("grid"===n.display)return n.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal"
	;if(i&&a.float&&"none"!==a.float){var u="left"===a.float?"left":"right"
	;return !r||"both"!==s.clear&&s.clear!==u?"horizontal":"vertical"}
	return i&&("block"===a.display||"flex"===a.display||"table"===a.display||"grid"===a.display||c>=o&&"none"===n[Ki]||r&&"none"===n[Ki]&&c+l>o)?"vertical":"horizontal"
	},Qi=function(t){function e(t,n){return function(o,i,r,a){
	var s=o.options.group.name&&i.options.group.name&&o.options.group.name===i.options.group.name
	;if(null==t&&(n||s))return  true;if(null==t||false===t)return  false
	;if(n&&"clone"===t)return t
	;if("function"==typeof t)return e(t(o,i,r,a),n)(o,i,r,a)
	;var c=(n?o:i).options.group.name
	;return  true===t||"string"==typeof t&&t===c||t.join&&t.indexOf(c)>-1}}
	var n={},o=t.group;o&&"object"==_o(o)||(o={name:o
	}),n.name=o.name,n.checkPull=e(o.pull,true),
	n.checkPut=e(o.put),n.revertClone=o.revertClone,t.group=n;},Vi=function(){
	!Ji&&mi&&Fo(mi,"display","none");},Zi=function(){!Ji&&mi&&Fo(mi,"display","");}
	;Gi&&!jo&&document.addEventListener("click",function(t){
	if(Ci)return t.preventDefault(),
	t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),
	Ci=false,false},true);var tr=function(t){if(fi){t=t.touches?t.touches[0]:t
	;var e=(i=t.clientX,r=t.clientY,Hi.some(function(t){
	var e=t[ri].options.emptyInsertThreshold;if(e&&!Yo(t)){
	var n=Ko(t),o=i>=n.left-e&&i<=n.right+e,s=r>=n.top-e&&r<=n.bottom+e
	;return o&&s?a=t:void 0}}),a);if(e){var n={}
	;for(var o in t)t.hasOwnProperty(o)&&(n[o]=t[o])
	;n.target=n.rootEl=e,n.preventDefault=void 0,
	n.stopPropagation=void 0,e[ri]._onDragOver(n);}}var i,r,a;},er=function(t){
	fi&&fi.parentNode[ri]._isOutsideThisEl(t.target);};function nr(t,e){
	if(!t||!t.nodeType||1!==t.nodeType)throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t))
	;this.el=t,this.options=e=So({},e),t[ri]=this;var n,o,i={group:null,sort:true,
	disabled:false,store:null,handle:null,
	draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:false,
	invertedSwapThreshold:null,removeCloneOnHide:true,direction:function(){
	return Yi(t,this.options)},ghostClass:"sortable-ghost",
	chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",
	filter:null,preventOnFilter:true,animation:0,easing:null,setData:function(t,e){
	t.setData("Text",e.textContent);},dropBubble:false,dragoverBubble:false,
	dataIdAttr:"data-id",delay:0,delayOnTouchOnly:false,
	touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,
	forceFallback:false,fallbackClass:"sortable-fallback",fallbackOnBody:false,
	fallbackTolerance:0,fallbackOffset:{x:0,y:0},
	supportPointer:false!==nr.supportPointer&&"PointerEvent"in window&&(!Oo||Eo),
	emptyInsertThreshold:5}
	;for(var r in ci.initializePlugins(this,t,i),i)!(r in e)&&(e[r]=i[r])
	;for(var a in Qi(e),
	this)"_"===a.charAt(0)&&"function"==typeof this[a]&&(this[a]=this[a].bind(this))
	;this.nativeDraggable=!e.forceFallback&&Xi,
	this.nativeDraggable&&(this.options.touchStartThreshold=1),
	e.supportPointer?$o(t,"pointerdown",this._onTapStart):($o(t,"mousedown",this._onTapStart),
	$o(t,"touchstart",this._onTapStart)),
	this.nativeDraggable&&($o(t,"dragover",this),
	$o(t,"dragenter",this)),Hi.push(this.el),
	e.store&&e.store.get&&this.sort(e.store.get(this)||[]),So(this,(o=[],{
	captureAnimationState:function(){
	o=[],this.options.animation&&[].slice.call(this.el.children).forEach(function(t){
	if("none"!==Fo(t,"display")&&t!==nr.ghost){o.push({target:t,rect:Ko(t)})
	;var e=To({},o[o.length-1].rect);if(t.thisAnimationDuration){var n=Uo(t,true)
	;n&&(e.top-=n.f,e.left-=n.e);}t.fromRect=e;}});},addAnimationState:function(t){
	o.push(t);},removeAnimationState:function(t){o.splice(function(t,e){
	for(var n in t)if(t.hasOwnProperty(n))for(var o in e)if(e.hasOwnProperty(o)&&e[o]===t[n][o])return +n
	;return  -1}(o,{target:t}),1);},animateAll:function(t){var e=this
	;if(!this.options.animation)return clearTimeout(n),
	void("function"==typeof t&&t());var i=false,r=0;o.forEach(function(t){
	var n=0,o=t.target,a=o.fromRect,s=Ko(o),c=o.prevFromRect,l=o.prevToRect,u=t.rect,d=Uo(o,true)
	;d&&(s.top-=d.f,
	s.left-=d.e),o.toRect=s,o.thisAnimationDuration&&ti(c,s)&&!ti(a,s)&&(u.top-s.top)/(u.left-s.left)===(a.top-s.top)/(a.left-s.left)&&(n=function(t,e,n,o){
	return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-n.top,2)+Math.pow(e.left-n.left,2))*o.animation
	}(u,c,l,e.options)),
	ti(s,a)||(o.prevFromRect=a,o.prevToRect=s,n||(n=e.options.animation),
	e.animate(o,u,s,n)),
	n&&(i=true,r=Math.max(r,n),clearTimeout(o.animationResetTimer),
	o.animationResetTimer=setTimeout(function(){
	o.animationTime=0,o.prevFromRect=null,
	o.fromRect=null,o.prevToRect=null,o.thisAnimationDuration=null;
	},n),o.thisAnimationDuration=n);}),clearTimeout(n),i?n=setTimeout(function(){
	"function"==typeof t&&t();},r):"function"==typeof t&&t(),o=[];},
	animate:function(t,e,n,o){if(o){Fo(t,"transition",""),Fo(t,"transform","")
	;var i=Uo(this.el),r=i&&i.a,a=i&&i.d,s=(e.left-n.left)/(r||1),c=(e.top-n.top)/(a||1)
	;t.animatingX=!!s,
	t.animatingY=!!c,Fo(t,"transform","translate3d("+s+"px,"+c+"px,0)"),
	this.forRepaintDummy=function(t){return t.offsetWidth
	}(t),Fo(t,"transition","transform "+o+"ms"+(this.options.easing?" "+this.options.easing:"")),
	Fo(t,"transform","translate3d(0,0,0)"),
	"number"==typeof t.animated&&clearTimeout(t.animated),
	t.animated=setTimeout(function(){
	Fo(t,"transition",""),Fo(t,"transform",""),t.animated=false,
	t.animatingX=false,t.animatingY=false;},o);}}}));}function or(t,e,n,o,i,r,a,s){
	var c,l,u=t[ri],d=u.options.onMove
	;return !window.CustomEvent||Do||Io?(c=document.createEvent("Event")).initEvent("move",true,true):c=new CustomEvent("move",{
	bubbles:true,cancelable:true
	}),c.to=e,c.from=t,c.dragged=n,c.draggedRect=o,c.related=i||e,
	c.relatedRect=r||Ko(e),c.willInsertAfter=s,c.originalEvent=a,t.dispatchEvent(c),
	d&&(l=d.call(u,c,a)),l}function ir(t){t.draggable=false;}function rr(){Fi=false;}
	function ar(t){
	for(var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,o=0;n--;)o+=e.charCodeAt(n)
	;return o.toString(36)}function sr(t){return setTimeout(t,0)}function cr(t){
	return clearTimeout(t)}nr.prototype={constructor:nr,
	_isOutsideThisEl:function(t){this.el.contains(t)||t===this.el||(ji=null);},
	_getDirection:function(t,e){
	return "function"==typeof this.options.direction?this.options.direction.call(this,t,e,fi):this.options.direction
	},_onTapStart:function(t){if(t.cancelable){
	var e=this,n=this.el,o=this.options,i=o.preventOnFilter,r=t.type,a=t.touches&&t.touches[0]||t.pointerType&&"touch"===t.pointerType&&t,s=(a||t).target,c=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||s,l=o.filter
	;if(function(t){Ui.length=0
	;for(var e=t.getElementsByTagName("input"),n=e.length;n--;){var o=e[n]
	;o.checked&&Ui.push(o);}
	}(n),!fi&&!(/mousedown|pointerdown/.test(r)&&0!==t.button||o.disabled)&&!c.isContentEditable&&(this.nativeDraggable||!Oo||!s||"SELECT"!==s.tagName.toUpperCase())&&!((s=Ho(s,o.draggable,n,false))&&s.animated||bi===s)){
	if(yi=Qo(s),ki=Qo(s,o.draggable),"function"==typeof l){
	if(l.call(this,t,s,this))return di({sortable:e,rootEl:c,name:"filter",
	targetEl:s,toEl:n,fromEl:n}),ui("filter",e,{evt:t}),void(i&&t.preventDefault())
	}else if(l&&(l=l.split(",").some(function(o){
	if(o=Ho(c,o.trim(),n,false))return di({sortable:e,rootEl:o,name:"filter",
	targetEl:s,fromEl:n,toEl:n}),ui("filter",e,{evt:t}),true
	})))return void(i&&t.preventDefault())
	;o.handle&&!Ho(c,o.handle,n,false)||this._prepareDragStart(t,a,s);}}},
	_prepareDragStart:function(t,e,n){
	var o,i=this,r=i.el,a=i.options,s=r.ownerDocument;if(n&&!fi&&n.parentNode===r){
	var c=Ko(n)
	;if(hi=r,pi=(fi=n).parentNode,gi=fi.nextSibling,bi=n,Li=a.group,nr.dragged=fi,
	_i={target:fi,clientX:(e||t).clientX,clientY:(e||t).clientY
	},Pi=_i.clientX-c.left,
	Oi=_i.clientY-c.top,this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,
	fi.style["will-change"]="all",o=function(){ui("delayEnded",i,{evt:t
	}),nr.eventCanceled?i._onDrop():(i._disableDelayedDragEvents(),
	!Po&&i.nativeDraggable&&(fi.draggable=true),i._triggerDragStart(t,e),di({
	sortable:i,name:"choose",originalEvent:t}),Ro(fi,a.chosenClass,true));
	},a.ignore.split(",").forEach(function(t){Go(fi,t.trim(),ir);
	}),$o(s,"dragover",tr),
	$o(s,"mousemove",tr),$o(s,"touchmove",tr),a.supportPointer?($o(s,"pointerup",i._onDrop),
	!this.nativeDraggable&&$o(s,"pointercancel",i._onDrop)):($o(s,"mouseup",i._onDrop),
	$o(s,"touchend",i._onDrop),
	$o(s,"touchcancel",i._onDrop)),Po&&this.nativeDraggable&&(this.options.touchStartThreshold=4,
	fi.draggable=true),ui("delayStart",this,{evt:t
	}),!a.delay||a.delayOnTouchOnly&&!e||this.nativeDraggable&&(Io||Do))o();else {
	if(nr.eventCanceled)return void this._onDrop()
	;a.supportPointer?($o(s,"pointerup",i._disableDelayedDrag),
	$o(s,"pointercancel",i._disableDelayedDrag)):($o(s,"mouseup",i._disableDelayedDrag),
	$o(s,"touchend",i._disableDelayedDrag),
	$o(s,"touchcancel",i._disableDelayedDrag)),
	$o(s,"mousemove",i._delayedDragTouchMoveHandler),
	$o(s,"touchmove",i._delayedDragTouchMoveHandler),
	a.supportPointer&&$o(s,"pointermove",i._delayedDragTouchMoveHandler),
	i._dragStartTimer=setTimeout(o,a.delay);}}},
	_delayedDragTouchMoveHandler:function(t){var e=t.touches?t.touches[0]:t
	;Math.max(Math.abs(e.clientX-this._lastX),Math.abs(e.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag();
	},_disableDelayedDrag:function(){
	fi&&ir(fi),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents();},
	_disableDelayedDragEvents:function(){var t=this.el.ownerDocument
	;zo(t,"mouseup",this._disableDelayedDrag),
	zo(t,"touchend",this._disableDelayedDrag),
	zo(t,"touchcancel",this._disableDelayedDrag),
	zo(t,"pointerup",this._disableDelayedDrag),
	zo(t,"pointercancel",this._disableDelayedDrag),
	zo(t,"mousemove",this._delayedDragTouchMoveHandler),
	zo(t,"touchmove",this._delayedDragTouchMoveHandler),
	zo(t,"pointermove",this._delayedDragTouchMoveHandler);},
	_triggerDragStart:function(t,e){
	e=e||"touch"==t.pointerType&&t,!this.nativeDraggable||e?this.options.supportPointer?$o(document,"pointermove",this._onTouchMove):$o(document,e?"touchmove":"mousemove",this._onTouchMove):($o(fi,"dragend",this),
	$o(hi,"dragstart",this._onDragStart));try{document.selection?sr(function(){
	document.selection.empty();}):window.getSelection().removeAllRanges();}catch(n){}
	},_dragStarted:function(t,e){if(qi=false,hi&&fi){ui("dragStarted",this,{evt:e
	}),this.nativeDraggable&&$o(document,"dragover",er);var n=this.options
	;!t&&Ro(fi,n.dragClass,false),
	Ro(fi,n.ghostClass,true),nr.active=this,t&&this._appendGhost(),di({sortable:this,
	name:"start",originalEvent:e});}else this._nulling();},
	_emulateDragOver:function(){if(Mi){
	this._lastX=Mi.clientX,this._lastY=Mi.clientY,Vi()
	;for(var t=document.elementFromPoint(Mi.clientX,Mi.clientY),e=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(Mi.clientX,Mi.clientY))!==e;)e=t
	;if(fi.parentNode[ri]._isOutsideThisEl(t),e)do{if(e[ri]&&e[ri]._onDragOver({
	clientX:Mi.clientX,clientY:Mi.clientY,target:t,rootEl:e
	})&&!this.options.dragoverBubble)break;t=e;}while(e=Co(e));Zi();}},
	_onTouchMove:function(t){if(_i){
	var e=this.options,n=e.fallbackTolerance,o=e.fallbackOffset,i=t.touches?t.touches[0]:t,r=mi&&Uo(mi,true),a=mi&&r&&r.a,s=mi&&r&&r.d,c=Wi&&zi&&Vo(zi),l=(i.clientX-_i.clientX+o.x)/(a||1)+(c?c[0]-Ri[0]:0)/(a||1),u=(i.clientY-_i.clientY+o.y)/(s||1)+(c?c[1]-Ri[1]:0)/(s||1)
	;if(!nr.active&&!qi){
	if(n&&Math.max(Math.abs(i.clientX-this._lastX),Math.abs(i.clientY-this._lastY))<n)return
	;this._onDragStart(t,true);}if(mi){r?(r.e+=l-(Di||0),r.f+=u-(Ii||0)):r={a:1,b:0,
	c:0,d:1,e:l,f:u}
	;var d="matrix(".concat(r.a,",").concat(r.b,",").concat(r.c,",").concat(r.d,",").concat(r.e,",").concat(r.f,")")
	;Fo(mi,"webkitTransform",d),
	Fo(mi,"mozTransform",d),Fo(mi,"msTransform",d),Fo(mi,"transform",d),
	Di=l,Ii=u,Mi=i;}t.cancelable&&t.preventDefault();}},_appendGhost:function(){
	if(!mi){
	var t=this.options.fallbackOnBody?document.body:hi,e=Ko(fi,true,Wi,true,t),n=this.options
	;if(Wi){
	for(zi=t;"static"===Fo(zi,"position")&&"none"===Fo(zi,"transform")&&zi!==document;)zi=zi.parentNode
	;zi!==document.body&&zi!==document.documentElement?(zi===document&&(zi=Wo()),
	e.top+=zi.scrollTop,e.left+=zi.scrollLeft):zi=Wo(),Ri=Vo(zi);}
	Ro(mi=fi.cloneNode(true),n.ghostClass,false),
	Ro(mi,n.fallbackClass,true),Ro(mi,n.dragClass,true),
	Fo(mi,"transition",""),Fo(mi,"transform",""),
	Fo(mi,"box-sizing","border-box"),Fo(mi,"margin",0),
	Fo(mi,"top",e.top),Fo(mi,"left",e.left),
	Fo(mi,"width",e.width),Fo(mi,"height",e.height),
	Fo(mi,"opacity","0.8"),Fo(mi,"position",Wi?"absolute":"fixed"),
	Fo(mi,"zIndex","100000"),
	Fo(mi,"pointerEvents","none"),nr.ghost=mi,t.appendChild(mi),
	Fo(mi,"transform-origin",Pi/parseInt(mi.style.width)*100+"% "+Oi/parseInt(mi.style.height)*100+"%");
	}},_onDragStart:function(t,e){var n=this,o=t.dataTransfer,i=n.options
	;ui("dragStart",this,{evt:t
	}),nr.eventCanceled?this._onDrop():(ui("setupClone",this),
	nr.eventCanceled||((vi=oi(fi)).removeAttribute("id"),
	vi.draggable=false,vi.style["will-change"]="",
	this._hideClone(),Ro(vi,this.options.chosenClass,false),
	nr.clone=vi),n.cloneId=sr(function(){
	ui("clone",n),nr.eventCanceled||(n.options.removeCloneOnHide||hi.insertBefore(vi,fi),
	n._hideClone(),di({sortable:n,name:"clone"}));
	}),!e&&Ro(fi,i.dragClass,true),e?(Ci=true,
	n._loopId=setInterval(n._emulateDragOver,50)):(zo(document,"mouseup",n._onDrop),
	zo(document,"touchend",n._onDrop),
	zo(document,"touchcancel",n._onDrop),o&&(o.effectAllowed="move",
	i.setData&&i.setData.call(n,o,fi)),
	$o(document,"drop",n),Fo(fi,"transform","translateZ(0)")),
	qi=true,n._dragStartId=sr(n._dragStarted.bind(n,e,t)),
	$o(document,"selectstart",n),
	Ei=true,window.getSelection().removeAllRanges(),Oo&&Fo(document.body,"user-select","none"));
	},_onDragOver:function(t){
	var e,n,o,i,r=this.el,a=t.target,s=this.options,c=s.group,l=nr.active,u=Li===c,d=s.sort,f=Ti||l,p=this,m=false
	;if(!Fi){
	if(void 0!==t.preventDefault&&t.cancelable&&t.preventDefault(),a=Ho(a,s.draggable,r,true),
	I("dragOver"),nr.eventCanceled)return m
	;if(fi.contains(t.target)||a.animated&&a.animatingX&&a.animatingY||p._ignoreWhileAnimating===a)return O(false)
	;if(Ci=false,
	l&&!s.disabled&&(u?d||(o=pi!==hi):Ti===this||(this.lastPutMode=Li.checkPull(this,l,fi,t))&&c.checkPut(this,l,fi,t))){
	if(i="vertical"===this._getDirection(t,a),
	e=Ko(fi),I("dragOverValid"),nr.eventCanceled)return m
	;if(o)return pi=hi,P(),this._hideClone(),
	I("revert"),nr.eventCanceled||(gi?hi.insertBefore(fi,gi):hi.appendChild(fi)),
	O(true);var h=Yo(r,s.draggable);if(!h||function(t,e,n){
	var o=Ko(Yo(n.el,n.options.draggable)),i=ii(n.el,n.options,mi)
	;return e?t.clientX>i.right+10||t.clientY>o.bottom&&t.clientX>o.left:t.clientY>i.bottom+10||t.clientX>o.right&&t.clientY>o.top
	}(t,i,this)&&!h.animated){if(h===fi)return O(false)
	;if(h&&r===t.target&&(a=h),a&&(n=Ko(a)),false!==or(hi,r,fi,e,a,n,t,!!a))return P(),
	h&&h.nextSibling?r.insertBefore(fi,h.nextSibling):r.appendChild(fi),
	pi=r,E(),O(true)}else if(h&&function(t,e,n){
	var o=Ko(Jo(n.el,0,n.options,true)),i=ii(n.el,n.options,mi)
	;return e?t.clientX<i.left-10||t.clientY<o.top&&t.clientX<o.right:t.clientY<i.top-10||t.clientY<o.bottom&&t.clientX<o.left
	}(t,i,this)){var g=Jo(r,0,s,true);if(g===fi)return O(false)
	;if(n=Ko(a=g),false!==or(hi,r,fi,e,a,n,t,false))return P(),
	r.insertBefore(fi,g),pi=r,E(),O(true)}else if(a.parentNode===r){n=Ko(a)
	;var b,v,w,y=fi.parentNode!==r,x=!function(t,e,n){
	var o=n?t.left:t.top,i=n?t.right:t.bottom,r=n?t.width:t.height,a=n?e.left:e.top,s=n?e.right:e.bottom,c=n?e.width:e.height
	;return o===a||i===s||o+r/2===a+c/2
	}(fi.animated&&fi.toRect||e,a.animated&&a.toRect||n,i),k=i?"top":"left",S=Xo(a,"top","top")||Xo(fi,"top","top"),L=S?S.scrollTop:void 0
	;if(ji!==a&&(v=n[k],Ni=false,Bi=!x&&s.invertSwap||y),b=function(t,e,n,o,i,r,a,s){
	var c=o?t.clientY:t.clientX,l=o?n.height:n.width,u=o?n.top:n.left,d=o?n.bottom:n.right,f=false
	;if(!a)if(s&&$i<l*i){
	if(!Ni&&(1===Ai?c>u+l*r/2:c<d-l*r/2)&&(Ni=true),Ni)f=true;else if(1===Ai?c<u+$i:c>d-$i)return -Ai
	}else if(c>u+l*(1-i)/2&&c<d-l*(1-i)/2)return function(t){
	return Qo(fi)<Qo(t)?1:-1}(e)
	;return (f=f||a)&&(c<u+l*r/2||c>d-l*r/2)?c>u+l/2?1:-1:0
	}(t,a,n,i,x?1:s.swapThreshold,null==s.invertedSwapThreshold?s.swapThreshold:s.invertedSwapThreshold,Bi,ji===a),
	0!==b){var T=Qo(fi);do{T-=b,w=pi.children[T];
	}while(w&&("none"===Fo(w,"display")||w===mi))}if(0===b||w===a)return O(false);ji=a,
	Ai=b;var _=a.nextElementSibling,M=false,D=or(hi,r,fi,e,a,n,t,M=1===b)
	;if(false!==D)return 1!==D&&-1!==D||(M=1===D),
	Fi=true,setTimeout(rr,30),P(),M&&!_?r.appendChild(fi):a.parentNode.insertBefore(fi,M?_:a),
	S&&ni(S,0,L-S.scrollTop),
	pi=fi.parentNode,void 0===v||Bi||($i=Math.abs(v-Ko(a)[k])),E(),O(true)}
	if(r.contains(fi))return O(false)}return  false}function I(s,c){ui(s,p,To({evt:t,
	isOwner:u,axis:i?"vertical":"horizontal",revert:o,dragRect:e,targetRect:n,
	canSort:d,fromSortable:f,target:a,completed:O,onMove:function(n,o){
	return or(hi,r,fi,e,n,Ko(n),t,o)},changed:E},c));}function P(){
	I("dragOverAnimationCapture"),
	p.captureAnimationState(),p!==f&&f.captureAnimationState();}function O(e){
	return I("dragOverCompleted",{insertion:e
	}),e&&(u?l._hideClone():l._showClone(p),
	p!==f&&(Ro(fi,Ti?Ti.options.ghostClass:l.options.ghostClass,false),
	Ro(fi,s.ghostClass,true)),Ti!==p&&p!==nr.active?Ti=p:p===nr.active&&Ti&&(Ti=null),
	f===p&&(p._ignoreWhileAnimating=a),p.animateAll(function(){
	I("dragOverAnimationComplete"),p._ignoreWhileAnimating=null;
	}),p!==f&&(f.animateAll(),
	f._ignoreWhileAnimating=null)),(a===fi&&!fi.animated||a===r&&!a.animated)&&(ji=null),
	s.dragoverBubble||t.rootEl||a===document||(fi.parentNode[ri]._isOutsideThisEl(t.target),
	!e&&tr(t)),!s.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),m=true}
	function E(){xi=Qo(fi),Si=Qo(fi,s.draggable),di({sortable:p,name:"change",
	toEl:r,newIndex:xi,newDraggableIndex:Si,originalEvent:t});}},
	_ignoreWhileAnimating:null,_offMoveEvents:function(){
	zo(document,"mousemove",this._onTouchMove),
	zo(document,"touchmove",this._onTouchMove),
	zo(document,"pointermove",this._onTouchMove),
	zo(document,"dragover",tr),zo(document,"mousemove",tr),
	zo(document,"touchmove",tr);},_offUpEvents:function(){var t=this.el.ownerDocument
	;zo(t,"mouseup",this._onDrop),
	zo(t,"touchend",this._onDrop),zo(t,"pointerup",this._onDrop),
	zo(t,"pointercancel",this._onDrop),
	zo(t,"touchcancel",this._onDrop),zo(document,"selectstart",this);},
	_onDrop:function(t){var e=this.el,n=this.options
	;xi=Qo(fi),Si=Qo(fi,n.draggable),ui("drop",this,{evt:t
	}),pi=fi&&fi.parentNode,xi=Qo(fi),
	Si=Qo(fi,n.draggable),nr.eventCanceled||(qi=false,
	Bi=false,Ni=false,clearInterval(this._loopId),
	clearTimeout(this._dragStartTimer),cr(this.cloneId),
	cr(this._dragStartId),this.nativeDraggable&&(zo(document,"drop",this),
	zo(e,"dragstart",this._onDragStart)),
	this._offMoveEvents(),this._offUpEvents(),Oo&&Fo(document.body,"user-select",""),
	Fo(fi,"transform",""),
	t&&(Ei&&(t.cancelable&&t.preventDefault(),!n.dropBubble&&t.stopPropagation()),
	mi&&mi.parentNode&&mi.parentNode.removeChild(mi),
	(hi===pi||Ti&&"clone"!==Ti.lastPutMode)&&vi&&vi.parentNode&&vi.parentNode.removeChild(vi),
	fi&&(this.nativeDraggable&&zo(fi,"dragend",this),
	ir(fi),fi.style["will-change"]="",
	Ei&&!qi&&Ro(fi,Ti?Ti.options.ghostClass:this.options.ghostClass,false),
	Ro(fi,this.options.chosenClass,false),di({sortable:this,name:"unchoose",toEl:pi,
	newIndex:null,newDraggableIndex:null,originalEvent:t}),hi!==pi?(xi>=0&&(di({
	rootEl:pi,name:"add",toEl:pi,fromEl:hi,originalEvent:t}),di({sortable:this,
	name:"remove",toEl:pi,originalEvent:t}),di({rootEl:pi,name:"sort",toEl:pi,
	fromEl:hi,originalEvent:t}),di({sortable:this,name:"sort",toEl:pi,
	originalEvent:t})),Ti&&Ti.save()):xi!==yi&&xi>=0&&(di({sortable:this,
	name:"update",toEl:pi,originalEvent:t}),di({sortable:this,name:"sort",toEl:pi,
	originalEvent:t})),nr.active&&(null!=xi&&-1!==xi||(xi=yi,Si=ki),di({
	sortable:this,name:"end",toEl:pi,originalEvent:t
	}),this.save())))),this._nulling();},_nulling:function(){
	ui("nulling",this),hi=fi=pi=mi=gi=vi=bi=wi=_i=Mi=Ei=xi=Si=yi=ki=ji=Ai=Ti=Li=nr.dragged=nr.ghost=nr.clone=nr.active=null
	;var t=this.el;Ui.forEach(function(e){t.contains(e)&&(e.checked=true);
	}),Ui.length=Di=Ii=0;},handleEvent:function(t){switch(t.type){case "drop":
	case "dragend":this._onDrop(t);break;case "dragenter":case "dragover":
	fi&&(this._onDragOver(t),function(t){
	t.dataTransfer&&(t.dataTransfer.dropEffect="move"),
	t.cancelable&&t.preventDefault();}(t));break;case "selectstart":t.preventDefault();
	}},toArray:function(){
	for(var t,e=[],n=this.el.children,o=0,i=n.length,r=this.options;o<i;o++)Ho(t=n[o],r.draggable,this.el,false)&&e.push(t.getAttribute(r.dataIdAttr)||ar(t))
	;return e},sort:function(t,e){var n={},o=this.el
	;this.toArray().forEach(function(t,e){var i=o.children[e]
	;Ho(i,this.options.draggable,o,false)&&(n[t]=i);
	},this),e&&this.captureAnimationState(),t.forEach(function(t){
	n[t]&&(o.removeChild(n[t]),o.appendChild(n[t]));}),e&&this.animateAll();},
	save:function(){var t=this.options.store;t&&t.set&&t.set(this);},
	closest:function(t,e){return Ho(t,e||this.options.draggable,this.el,false)},
	option:function(t,e){var n=this.options;if(void 0===e)return n[t]
	;var o=ci.modifyOption(this,t,e);n[t]=void 0!==o?o:e,"group"===t&&Qi(n);},
	destroy:function(){ui("destroy",this);var t=this.el
	;t[ri]=null,zo(t,"mousedown",this._onTapStart),
	zo(t,"touchstart",this._onTapStart),
	zo(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(zo(t,"dragover",this),
	zo(t,"dragenter",this)),
	[].forEach.call(t.querySelectorAll("[draggable]"),function(t){
	t.removeAttribute("draggable");
	}),this._onDrop(),this._disableDelayedDragEvents(),
	Hi.splice(Hi.indexOf(this.el),1),this.el=t=null;},_hideClone:function(){if(!wi){
	if(ui("hideClone",this),nr.eventCanceled)return
	;Fo(vi,"display","none"),this.options.removeCloneOnHide&&vi.parentNode&&vi.parentNode.removeChild(vi),
	wi=true;}},_showClone:function(t){if("clone"===t.lastPutMode){if(wi){
	if(ui("showClone",this),nr.eventCanceled)return
	;fi.parentNode!=hi||this.options.group.revertClone?gi?hi.insertBefore(vi,gi):hi.appendChild(vi):hi.insertBefore(vi,fi),
	this.options.group.revertClone&&this.animate(fi,vi),Fo(vi,"display",""),wi=false;}
	}else this._hideClone();}},Gi&&$o(document,"touchmove",function(t){
	(nr.active||qi)&&t.cancelable&&t.preventDefault();}),nr.utils={on:$o,off:zo,
	css:Fo,find:Go,is:function(t,e){return !!Ho(t,e,t,false)},extend:function(t,e){
	if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t},throttle:ei,
	closest:Ho,toggleClass:Ro,clone:oi,index:Qo,nextTick:sr,cancelNextTick:cr,
	detectDirection:Yi,getChild:Jo,expando:ri},nr.get=function(t){return t[ri]
	},nr.mount=function(){
	for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n]
	;e[0].constructor===Array&&(e=e[0]),e.forEach(function(t){
	if(!t.prototype||!t.prototype.constructor)throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t))
	;t.utils&&(nr.utils=To(To({},nr.utils),t.utils)),ci.mount(t);});
	},nr.create=function(t,e){return new nr(t,e)},nr.version="1.15.7"
	;var lr,ur,dr,fr,pr,mr,hr=[],gr=false;function br(){hr.forEach(function(t){
	clearInterval(t.pid);}),hr=[];}function vr(){clearInterval(mr);}
	var wr=ei(function(t,e,n,o){if(e.scroll){
	var i,r=(t.touches?t.touches[0]:t).clientX,a=(t.touches?t.touches[0]:t).clientY,s=e.scrollSensitivity,c=e.scrollSpeed,l=Wo(),u=false
	;ur!==n&&(ur=n,br(),lr=e.scroll,i=e.scrollFn,true===lr&&(lr=Zo(n,true)))
	;var d=0,f=lr;do{
	var p=f,m=Ko(p),h=m.top,g=m.bottom,b=m.left,v=m.right,w=m.width,y=m.height,x=void 0,k=void 0,S=p.scrollWidth,L=p.scrollHeight,T=Fo(p),_=p.scrollLeft,M=p.scrollTop
	;p===l?(x=w<S&&("auto"===T.overflowX||"scroll"===T.overflowX||"visible"===T.overflowX),
	k=y<L&&("auto"===T.overflowY||"scroll"===T.overflowY||"visible"===T.overflowY)):(x=w<S&&("auto"===T.overflowX||"scroll"===T.overflowX),
	k=y<L&&("auto"===T.overflowY||"scroll"===T.overflowY))
	;var D=x&&(Math.abs(v-r)<=s&&_+w<S)-(Math.abs(b-r)<=s&&!!_),I=k&&(Math.abs(g-a)<=s&&M+y<L)-(Math.abs(h-a)<=s&&!!M)
	;if(!hr[d])for(var P=0;P<=d;P++)hr[P]||(hr[P]={})
	;hr[d].vx==D&&hr[d].vy==I&&hr[d].el===p||(hr[d].el=p,
	hr[d].vx=D,hr[d].vy=I,clearInterval(hr[d].pid),
	0==D&&0==I||(u=true,hr[d].pid=setInterval(function(){
	o&&0===this.layer&&nr.active._onTouchMove(pr)
	;var e=hr[this.layer].vy?hr[this.layer].vy*c:0,n=hr[this.layer].vx?hr[this.layer].vx*c:0
	;"function"==typeof i&&"continue"!==i.call(nr.dragged.parentNode[ri],n,e,t,pr,hr[this.layer].el)||ni(hr[this.layer].el,n,e);
	}.bind({layer:d}),24))),d++;}while(e.bubbleScroll&&f!==l&&(f=Zo(f,false)));gr=u;}
	},30),yr=function(t){
	var e=t.originalEvent,n=t.putSortable,o=t.dragEl,i=t.activeSortable,r=t.dispatchSortableEvent,a=t.hideGhostForTarget,s=t.unhideGhostForTarget
	;if(e){var c=n||i;a()
	;var l=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e,u=document.elementFromPoint(l.clientX,l.clientY)
	;s(),c&&!c.el.contains(u)&&(r("spill"),this.onSpill({dragEl:o,putSortable:n}));}}
	;function xr(){}function kr(){}xr.prototype={startIndex:null,
	dragStart:function(t){var e=t.oldDraggableIndex;this.startIndex=e;},
	onSpill:function(t){var e=t.dragEl,n=t.putSortable
	;this.sortable.captureAnimationState(),n&&n.captureAnimationState()
	;var o=Jo(this.sortable.el,this.startIndex,this.options)
	;o?this.sortable.el.insertBefore(e,o):this.sortable.el.appendChild(e),
	this.sortable.animateAll(),n&&n.animateAll();},drop:yr},So(xr,{
	pluginName:"revertOnSpill"}),kr.prototype={onSpill:function(t){
	var e=t.dragEl,n=t.putSortable||this.sortable
	;n.captureAnimationState(),e.parentNode&&e.parentNode.removeChild(e),
	n.animateAll();},drop:yr},So(kr,{pluginName:"removeOnSpill"
	}),nr.mount(new function(){function t(){for(var t in this.defaults={scroll:true,
	forceAutoScrollFallback:false,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:true},
	this)"_"===t.charAt(0)&&"function"==typeof this[t]&&(this[t]=this[t].bind(this));
	}return t.prototype={dragStarted:function(t){var e=t.originalEvent
	;this.sortable.nativeDraggable?$o(document,"dragover",this._handleAutoScroll):this.options.supportPointer?$o(document,"pointermove",this._handleFallbackAutoScroll):e.touches?$o(document,"touchmove",this._handleFallbackAutoScroll):$o(document,"mousemove",this._handleFallbackAutoScroll);
	},dragOverCompleted:function(t){var e=t.originalEvent
	;this.options.dragOverBubble||e.rootEl||this._handleAutoScroll(e);},
	drop:function(){
	this.sortable.nativeDraggable?zo(document,"dragover",this._handleAutoScroll):(zo(document,"pointermove",this._handleFallbackAutoScroll),
	zo(document,"touchmove",this._handleFallbackAutoScroll),
	zo(document,"mousemove",this._handleFallbackAutoScroll)),
	vr(),br(),clearTimeout(No),No=void 0;},nulling:function(){
	pr=ur=lr=gr=mr=dr=fr=null,hr.length=0;},_handleFallbackAutoScroll:function(t){
	this._handleAutoScroll(t,true);},_handleAutoScroll:function(t,e){
	var n=this,o=(t.touches?t.touches[0]:t).clientX,i=(t.touches?t.touches[0]:t).clientY,r=document.elementFromPoint(o,i)
	;if(pr=t,e||this.options.forceAutoScrollFallback||Io||Do||Oo){
	wr(t,this.options,r,e);var a=Zo(r,true)
	;!gr||mr&&o===dr&&i===fr||(mr&&vr(),mr=setInterval(function(){
	var r=Zo(document.elementFromPoint(o,i),true)
	;r!==a&&(a=r,br()),wr(t,n.options,r,e);},10),dr=o,fr=i);}else {
	if(!this.options.bubbleScroll||Zo(r,true)===Wo())return void br()
	;wr(t,this.options,Zo(r,false),false);}}},So(t,{pluginName:"scroll",
	initializeByDefault:true})}),nr.mount(kr,xr);const Sr={box:t=>{var e
	;const n=J(k,t);null==(e=null==n?void 0:n.parentElement)||e.appendChild(z({
	id:"nst-item-resp",classList:"nst-box-row hidden"})),_r();},item:t=>{
	t.removeEventListener("dblclick",Mr),t.addEventListener("dblclick",t=>{var e
	;(null==(e=t.target)?void 0:e.closest(".name"))&&Mr(t);});},nopager:()=>{}}
	;function Lr(t){var e;t.stopPropagation()
	;const n=null==(e=t.target.closest("#nst-quick-use"))?void 0:e.parentElement
	;if(!n)return;const o=n.getAttribute("data-itemID");if(!o)return;const i=f(L)
	;o in i&&async function(t){const e=document.getElementById("nst-item-resp")
	;e&&(e.innerHTML="",await async function(t,e){
	const{id:n}=t,o="energy"===n?"https://www.torn.com/factions.php?rfcv="+Dt():"https://www.torn.com/item.php?rfcv="+Dt()
	;let i;i="energy"===n?{step:"armouryRefillEnergy"}:{step:"useItem",itemID:n,
	fac:"1"};const r=i;try{
	const t=await qt("POST",o,r),n=t.links??{},i=(null==t?void 0:t.text)??(null==t?void 0:t.message)??"",a=z({})
	;a.appendChild(B({innerHTML:i}));const s=B({});Object.values(n).forEach(t=>{
	var e;const n=A({classList:"t-blue h m-left10 "+t.class,href:t.url,
	innerText:t.title});null==(e=t.attr)||e.split(/\s+/).forEach(t=>{
	const[e,o]=t.split("=");e&&o&&n.setAttribute(e,o);}),s.appendChild(n);
	}),a.appendChild(s),e.appendChild(a),e.classList.remove("nstGreen","nstBold")
	;const c=e.querySelector(".counter-wrap");if(c){
	const t=1e3*+(c.getAttribute("data-time")||0),e=Math.floor(t/864e5),n=Math.floor(t%864e5/36e5)+24*e,o=Math.floor(t%36e5/6e4),i=Math.floor(t%6e4/1e3)
	;c.innerText=`${n}:${o}:${i}`;}}catch(a){e.appendChild(B({
	innerText:["Error using item.",a].join("\n")}));}
	}(t,e),e.classList.remove("hidden"));}(i[o]);}function Tr(t){var e
	;t.stopPropagation(),t.preventDefault()
	;const n=null==(e=t.target.closest("#nst-quick-use"))?void 0:e.parentElement
	;if(!n)return;const o=n.getAttribute("data-itemID");if(!o)return;const i=f(L)
	;o in i&&(delete i[o],p({[L]:i}),_r());}function _r(){
	const t=document.getElementById("nst-"+S);if(!t)return;t.innerHTML=""
	;const e=Object.values(f(L)),n=document.createDocumentFragment()
	;e.forEach(t=>function(t,e){
	const{id:n,name:o,quantity:i}=t,r=`/images/items/${n}/medium.png`,a=z({
	classList:"nst-box-btn-div"})
	;a.setAttribute("data-itemID",n),a.setAttribute("data-qty",i);const s=$({
	id:"nst-quick-use",classList:"nst-box-button",onclick:Lr
	}),c="energy"===o?j("i",{classList:"currency-points"}):q({src:r,alt:o,
	classList:"nst-box-img"}),l=R({id:"nst-quick-name",innerText:o}),u=R({
	id:"nst-quick-close",classList:"nst-box-close",innerText:"✕",onclick:Tr})
	;s.append(c,l,u),a.appendChild(s),e.appendChild(a);
	}(t,n)),t.appendChild(n),new nr(t,{animation:150,dataIdAttr:"data-itemid",
	store:{get:()=>{const t=f(L)
	;return Object.entries(t).sort((t,e)=>t[1].order-e[1].order).map(t=>t[0])},
	set:t=>{const e=t.toArray(),n=f(L);let o=false;e.forEach((t,e)=>{
	n[t].order!==e&&(n[t].order=e,o=true);}),o&&p({[L]:n});}}});}function Mr(n){var o,i,r
	;n.stopPropagation(),n.preventDefault()
	;const a=null==(o=n.target)?void 0:o.closest(".name");if(!a)return
	;const s=null==(i=a.closest("li"))?void 0:i.querySelector("img")
	;let c=a.innerText;c=/Points/.test(c)?"energy":t(c.replace(/ x\d+$/,""))
	;const l=null==s?void 0:s.getAttribute("src"),u="energy"===c?"energy":l?e(l).toString():""
	;if(!u)return;const d=f(L);if(u in d)return
	;const m=0===Object.values(d).length?0:+(null==(r=Object.values(d).reduce((t,e)=>(null==t?void 0:t.order)>(null==e?void 0:e.order)?t:e))?void 0:r.order)
	;d[u]={id:u,order:m+1,name:c},p({[L]:d}),_r();}function Dr(t){
	new MutationObserver(t=>{t.forEach(t=>{const e=Array.from(t.addedNodes)
	;e.length&&e.forEach(t=>{var e
	;const n="faction-armoury-tabs"===(null==t?void 0:t.id),o=(null==(e=t.parentElement)?void 0:e.id)??"",i=/tab=armoury&sub=(medical|drugs|consumables|points)/g.test(o)&&"UL"===t.tagName&&t.classList.contains("item-list")
	;Sr[n?"box":i?"item":"nopager"](t);});});}).observe(t,{childList:true,subtree:true});}
	const Ir=[{key:"quickfaction",name:"faction quick item",
	description:"quickly use items from faction",onpage:Q.Faction,
	category:V.Faction,enabled:false,readyStates:["interactive"],
	run:()=>lt(Dr,"#faction-armoury")}];function Pr(){
	return e((Ot().match(/ID=(\d+)/)||["","0"])[1])}async function Or(){const t=Pr()
	;if(!t)return;const n=await async function(){const t=Pr();if(!t)return 0
	;const n=`https://www.torn.com/trade.php?step=getFullMoney&ID=${t}&rfcv=${Dt()}`
	;try{const t=await fetch(n,{method:"GET",headers:{
	"x-requested-with":"XMLHttpRequest"}});return e(await t.clone().json())
	}catch(o){return console.error("Failed to fetch trade money:",o),0}
	}(),o="https://www.torn.com/trade.php?rfcv="+Dt(),i=new URLSearchParams({
	step:"view",ID:t+"",ajax:"true",amount:n+"",sub_step:"addmoney2"});try{
	await fetch(o,{method:"POST",headers:{"x-requested-with":"XMLHttpRequest"},
	body:i});}catch(r){console.error("Failed to deposit ghost money:",r);}}
	function Er(t){!function(t){var e
	;if(null==(e=t.previousElementSibling)?void 0:e.classList.contains("nst-ghost-wrap"))return
	;const n=z({classList:"nst-ghost-wrap"}),o=$({innerText:"deposit",
	classList:"torn-btn",onclick:Or})
	;n.appendChild(o),t.insertAdjacentElement("beforebegin",n);}(t);}const jr=[{
	key:"quickghost",name:"quick deposit ghost trade",
	description:"quickly deposit all money in a ghost trade",onpage:Q.Trade,
	category:V.Trade,enabled:false,readyStates:["interactive"],
	run:()=>lt(Er,"#trade-container .trade-cont .user.left")
	}],Ar=["Primary","Secondary","Melee","Temporary"],$r=["Medical","Drug","Energy Drink","Alcohol","Candy","Booster","Supply Pack",...Ar]
	;let zr="";async function qr(t,e,n=false){
	const{id:o}=t,i="https://www.torn.com/item.php?rfcv="+Dt(),r={step:"useItem",
	itemID:o+"",item:o+"",...n?{fac:"1"}:{}},a=await qt("POST",i,r)
	;e.innerHTML="",function(t,e){
	const n=t.links??{},o=t.text??"",i=z({}),r=B({}),a={}
	;Object.values(n).forEach(t=>{var n,o;const i=A({
	classList:t.class+" t-blue h m-left10",href:t.url,innerText:t.title})
	;null==(n=t.attr)||n.trim().split(/\s+/).forEach(t=>{const[e,n]=t.split("=")
	;e&&void 0!==n&&(i.setAttribute(e,n),a[e]=n);
	}),"#"===t.url&&(null==(o=t.class)?void 0:o.includes("next-act"))&&i.addEventListener("click",function(t,e){
	return n=>{n.preventDefault();const o=e["data-item"],i="1"===e["data-fac"]
	;o&&qr({id:o},t,i);}}(e,a)),r.appendChild(i);}),i.appendChild(B({innerHTML:o
	})),i.appendChild(r),e.appendChild(i),e.classList.remove("text-nstgreen")
	;const s=e.querySelector(".counter-wrap");if(!s)return
	;const c=1e3*+(s.getAttribute("data-time")||0),l=Math.floor(c/864e5),u=Math.floor(c%864e5/36e5)+24*l,d=Math.floor(c%36e5/6e4),f=Math.floor(c%6e4/1e3)
	;s.innerText=`${u}:${d}:${f}`;}(a,e),Nr();}async function Cr(t){var e
	;t.stopPropagation()
	;const n=null==(e=t.target.closest("#nst-quick-use"))?void 0:e.parentElement
	;if(!n)return;const o=n.getAttribute("data-itemID");if(!o)return;const i=f(x)
	;if(!(null==i?void 0:i[o]))return
	;const r=i[o],{category:a}=r,s=document.getElementById("nst-item-resp")
	;s&&(s.innerHTML="",Ar.includes(a)?await async function(t,e){var n
	;const{id:o,strangeID:i}=t,r={step:"actionForm",item_id:o,type:5,action:"equip",
	item:o,id:i,confirm:1};let a=null==t?void 0:t.isEquipped
	;if(a)return e.innerHTML="Already equipped",
	void e.classList.remove("text-nstgreen")
	;const s="https://www.torn.com/item.php?rfcv="+Dt(),c=await qt("POST",s,r)+""
	;if(e.innerHTML=c,
	a=!!(null==(n=e.innerText)?void 0:n.match(/ equipped/)),!a)return
	;e.classList.add("text-nstgreen");const l=f(x)
	;(null==l?void 0:l[o])&&(Object.values(l).forEach(t=>{
	"isEquipped"in t&&(t.isEquipped=false);}),l[o].isEquipped=a,p({[x]:l}),Nr());
	}(r,s):await qr(r,s));}function Hr(t){var e
	;t.stopPropagation(),t.preventDefault()
	;const n=null==(e=t.target.closest("#nst-quick-use"))?void 0:e.parentElement
	;if(!n)return;const o=n.getAttribute("data-itemID");if(!o)return;const i=f(x)
	;(null==i?void 0:i[o])&&(delete i[o],p({[x]:i}),Nr());}function Nr(){
	const t=document.getElementById("nst-"+y);if(!t)return
	;const e=f(x),n=JSON.stringify(e);if(n===zr)return
	;for(zr=n;t.lastChild;)t.removeChild(t.lastChild)
	;const o=Object.values(e),i=document.createDocumentFragment()
	;o.forEach(t=>function(t,e){
	const{id:n,name:o,quantity:i,isEquipped:r}=t,a=r??false,s=`/images/items/${n}/medium.png`,c=z({
	classList:"nst-box-btn-div"})
	;c.setAttribute("data-itemID",n),c.setAttribute("data-qty",i),
	c.setAttribute("data-isEquip",a);const l=$({id:"nst-quick-use",
	classList:"nst-box-button",onclick:Cr}),u={src:s,alt:o,classList:"nst-box-img"
	},d={id:"nst-quick-name",innerText:""+o,classList:a?"text-nstgreen":""},f={
	id:"nst-quick-close",classList:"nst-box-close",innerText:"✕",onclick:Hr}
	;l.appendChild(q(u)),
	l.appendChild(R(d)),l.appendChild(R(f)),c.appendChild(l),e.appendChild(c);
	}(t,i)),t.appendChild(i),new nr(t,{animation:150,dataIdAttr:"data-itemid",
	store:{get:()=>{const t=f(x)
	;return Object.entries(t).sort((t,e)=>t[1].order-e[1].order).map(t=>t[0])},
	set:t=>{const e=t.toArray(),n=f(x);let o=false;e.forEach((t,e)=>{
	n[t].order!==e&&(n[t].order=e,o=true);}),o&&p({[x]:n});}}});}function Br(e){
	const n=e.target;if(!/name-wrap/.test(n.className))return
	;const o=n.closest("li");if(!o)return;const i=function(e){var n,o,i,r
	;const a=null==(n=null==e?void 0:e.dataset)?void 0:n.item,s=null==(o=null==e?void 0:e.dataset)?void 0:o.qty,c=(null==(i=null==e?void 0:e.dataset)?void 0:i.category)??"",l=(null==(r=null==e?void 0:e.querySelector('.cont-wrap ul [class*="equipped"]'))?void 0:r.getAttribute("data-id"))??"",u=null==e?void 0:e.querySelector(".title-wrap .name-wrap .name"),d=t((null==u?void 0:u.innerText)??"")
	;return a&&c&&$r.includes(c)?{id:a,name:d,quantity:s,category:c,strangeID:l,
	isEquipped:false}:null}(o);if(!i)return;const r=f(x);if(r[i.id])return
	;const a=Object.values(r).reduce((t,e)=>Math.max(t,e.order),0);r[i.id]={...i,
	order:a+1},p({[x]:r}),Nr();}function Rr(t){var e
	;const n=null==t?void 0:t.parentElement,o=null==n?void 0:n.querySelector("div.equipped-items-wrap"),i=J(w,o)
	;null==(e=null==i?void 0:i.parentElement)||e.appendChild(z({id:"nst-item-resp",
	classList:"nst-box-row"})),Nr(),t.addEventListener("dblclick",Br);}const Fr=[{
	key:"quickitem",name:"quick items",description:"quickly use items",
	onpage:Q.Items,category:V.Items,enabled:false,readyStates:["interactive"],
	run:()=>lt(Rr,"div.items-wrap")}];function Ur(){Xr(document);}function Gr(t){
	return null==t?void 0:t.parentElement}function Wr(t,e){
	const{item:n,selector:o,reg:i}=e,r=f("quick"+n)??false,a=Gr(t);if(!a)return
	;const s=function(t,e){return t.querySelector("a."+e)}(a,o);if(!s)return
	;const c=s.getAttribute("href");if(!c)return
	;const l=RegExp(i+"$","g"),u=RegExp(i+"1$","g"),d=r?c.replace(l,i+"1"):c.replace(u,i)
	;c!==d&&s.setAttribute("href",d);}function Kr(t){
	const o=+(f("jailscore")??"0"),i=Gr(t);if(!i)return
	;const r=t.querySelector("span.time"),a=t.querySelector("span.level")
	;if(!r||!a)return
	;const s=(r.innerText||"").split(" ").reduce((t,e)=>e.endsWith("h")?t+60*+e.replace("h",""):e.endsWith("m")?t+ +e.replace("m",""):t,0),c=function(t){
	const n=t.innerText.match(/\d+/g);return e((null==n?void 0:n.join())??"0")
	}(a),l=c*s,u=l>=o&&0!==o
	;t.setAttribute("title","score: "+n(l)),i.style.display=u?"none":"",Wr(t,{
	item:"bail",selector:"bye",reg:"buy"}),Wr(t,{item:"bust",selector:"bust",
	reg:"breakout"});}function Xr(t){t.querySelectorAll("span.info-wrap").forEach(Kr);
	}function Jr(t){!function(t){const e=Gr(t);if(!e)return
	;const n=J("Quick Jail",e),i=z({classList:"nst-box-column"}),r=z({
	classList:"nst-box-column"});n.append(i,r),G({elem:i,title:"Jail Score",
	cback:()=>Xr(t)}),[{title:"Quick Bust",event:Ur},{title:"Quick Bail",event:Ur
	}].forEach(({title:t,event:e})=>{const n=o(t),i={id:"nst-"+n,value:n}
	;r.appendChild(W(i,t,"",e));});}(t),new MutationObserver(t=>{const e=[]
	;t.forEach(t=>{t.addedNodes.forEach(t=>{if("LI"===t.tagName){
	const n=t.querySelector("span.info-wrap");n&&e.push(n);}});}),e.forEach(Kr);
	}).observe(t,{childList:true,subtree:true}),Xr(t);}const Yr=[{key:"quickjail",
	name:"quick jail",description:"filter, quickly bail and bust people",
	onpage:Q.Jail,category:V.Jail,enabled:false,readyStates:["interactive"],
	run:()=>lt(Jr,"ul.users-list")}],Qr={energy:{name:"energy",
	selector:"[class*='bar'][class*='energy']",link:"https://www.torn.com/gym.php"},
	nerve:{name:"nerve",selector:"[class*='bar'][class*='nerve']",
	link:"https://www.torn.com/crimes.php"}};function Vr(t){var e,n
	;const o=t.parentElement;if(!o)return;const i=f("userdata")
	;if(!(null==i?void 0:i.refills))return
	;const r=null==(e=null==i?void 0:i.refills)?void 0:e.energy_refill_used,a=null==(n=null==i?void 0:i.refills)?void 0:n.nerve_refill_used
	;["energy","nerve"].forEach(t=>{
	const e=Qr[t],n="energy"===t?r:a,i=function(t,e){var n
	;const o=e+' p[class^="bar-name"]',i=t.querySelector(o)
	;return (null==(n=null==i?void 0:i.parentElement)?void 0:n.parentElement)??null
	}(o,e.selector);var s,c
	;i&&(i.hasAttribute("href")&&i.removeAttribute("href"),s=i,
	c=e.link,s.dataset.nstRefillListener||(s.addEventListener("click",()=>window.open(c,"_blank")),
	s.dataset.nstRefillListener="1"),function(t,e,n){if(n)return
	;const o="energy"===e?"text-nstgreen":"text-nstred";t.classList.add(o);
	}(i.querySelector('p[class^="bar-name"]'),t,n));});}const Zr=[{
	key:"refillreminder",name:"refill reminder",
	description:"highlight energy and nerve bar if refills haven't been used",
	onpage:Q.All,category:V.All,enabled:false,readyStates:["interactive"],
	run:()=>lt(Vr,'[class*="bar"][class*="energy"]')}];function ta(t){if(!t)return
	;const e=t.parentElement;t.remove(),null==e||e.remove();}const ea=[{
	key:"removeuglyimage",name:"hide new images",
	description:"hide new images from item page",onpage:Q.Items,category:V.Items,
	enabled:false,readyStates:["loading"],run:()=>lt(ta,"canvas",true)}];function na(t){
	const e=t.parentElement
	;if(t.nodeType===Node.TEXT_NODE&&t.nodeValue&&(!e||!e.isContentEditable)){
	const e=t.nodeValue
	;null!==e&&(t.nodeValue=e.replaceAll("Natural Selection","NS"));}}function oa(t){
	const e=document.createTreeWalker(t,NodeFilter.SHOW_TEXT,null)
	;let n=e.currentNode;for(;n;)na(n),n=e.nextNode();}function ia(t){oa(t)
	;const e=document.querySelector("#map");e&&function(t){new MutationObserver(t=>{
	for(const e of t)e.addedNodes.forEach(oa),"attributes"===e.type&&oa(e.target);
	}).observe(t,{childList:true,subtree:true,attributes:true});}(e);}const ra=[{
	key:"renameterritory",name:"rename NS territory",
	description:"rename NS territory",onpage:Q.City,category:V.City,enabled:false,
	readyStates:["interactive"],run:()=>lt(ia,"body")}];let aa={},sa=null
	;function ca(){
	const t=document.querySelector('div[class^="joinWrap"] div[class^="rowsWrap"]')
	;t&&0!==t.children.length?Array.from(t.children).forEach(t=>{var o
	;const i=t,r=i.getAttribute("id");if(!r)return;aa[r]||(aa[r]=Et())
	;const a=(c=aa[r],s(900-(Et()-c)));var c
	;const l=i.querySelector('div[class^="betBlock"]');if(!l)return
	;const u=l.getAttribute("aria-label");if(!u)return
	;const d=null==(o=u.split(":")[1])?void 0:o.trim();if(!d)return
	;const f=`${"$"+n(e(d))}\n${a}`;l.innerText!==f&&(l.innerText=f);}):aa={};}
	async function la(t){const e=await t.clone().json()
	;if("lobby"!==(null==e?void 0:e.step))return t;const n=e.data
	;for(const o of Object.values(n)){const{ID:t,timeCreated:e}=o
	;void 0!==t&&void 0!==e&&(aa[t]=e);}
	return null!==sa&&clearInterval(sa),sa=setInterval(ca,1e3),t}const ua=[{
	key:"rrtimeout",name:"RR timeout",description:"add timeout timer to RR games",
	onpage:Q.Page,category:V.Casino,enabled:false,readyStates:["interactive"],
	run:()=>Vt(la,"russianRouletteData"),condition:()=>"russianRoulette"===Pt()}]
	;function da(t){var e,n
	;return t instanceof HTMLElement&&"LI"===t.tagName&&!!(null==(n=null==(e=t.firstElementChild)?void 0:e.classList)?void 0:n.contains("item-cont-wrap"))
	}function fa(t){const e=t.querySelectorAll(".bonus-attachment-icons")
	;if(!e.length)return
	;const n=Array.from(e).map(t=>c(t.title)).join("<br />"),o=t.querySelector("p.t-gray-6")
	;o&&o.innerHTML!==n&&(o.innerHTML=n);}function pa(t){
	for(const e of t)for(const t of Array.from(e.addedNodes))da(t)&&fa(t);}
	function ma(t){new MutationObserver(pa).observe(t,{childList:true,subtree:true});}
	const ha=[{key:"rwbonusauction",name:"rw bonus display",
	description:"display rw weapon bonus over the item instead of tooltip",
	onpage:Q.Auction,category:V.Auction,enabled:false,readyStates:["loading"],
	run:()=>lt(ma,"#auction-house-tabs")}];function ga(t){
	const e="radiation"===(i=t.className.split("-"))[3]?"radiation":{full:"EOD",
	negative:"Delta",sentinel:"defense",vanguard:"dex"
	}[i[2]]??i[2],n=t.parentElement,o=null==n?void 0:n.parentElement;var i
	;o&&!o.classList.contains("nst-rw-bazaar")&&o.classList.add("nst-rw-bazaar"),
	n&&!n.querySelector("span")&&(n.appendChild(R({innerText:e
	})),n.appendChild(j("br",{})));}function ba(t){const e=/(itemsContainner|row)/
	;new MutationObserver(t=>{
	for(const n of t)for(const t of Array.from(n.addedNodes)){
	if(!(t instanceof HTMLElement))continue;if(!e.test(t.className))continue
	;if(t.querySelector(".nst-rw-bazaar"))continue
	;const n=t.querySelectorAll('[class*="iconBonuses"] > div > i')
	;if(n.length)for(const t of Array.from(n))ga(t);}}).observe(t,{childList:true,
	subtree:true});}const va=[{key:"rwbonusbazaar",name:"rw bonus display",
	description:"display rw weapon bonus over the item instead of tooltip",
	onpage:Q.Bazaar,category:V.Bazaar,enabled:false,readyStates:["loading"],
	run:()=>lt(ba,"body")}];function wa(t){
	if(t.classList.contains("nst-rw-display"))return;const e=c(t.title)
	;t.classList.add("nst-rw-display"),t.appendChild(R({innerText:e
	})),t.insertAdjacentElement("afterend",j("br",{}));}function ya(t){
	const e=t.querySelectorAll(".bonus-attachment-icons");e.length&&e.forEach(wa);}
	const xa=[{key:"rwbonusdisplay",name:"rw bonus display",
	description:"display rw weapon bonus over the item instead of tooltip",
	onpage:Q.DisplayCase,category:V.DisplayCase,enabled:false,
	readyStates:["interactive"],run:()=>lt(ya,"ul.display-cabinet")}]
	;function ka(t){var e
	;const n=null==(e=t.parentElement)?void 0:e.querySelector("ul.bonuses")
	;if(!n)return;const o=n.lastElementChild;if(!o)return;let i=false;const r=z({
	classList:"nst-rw-show-wrap"});Array.from(o.children).forEach(t=>{
	if(!(t instanceof HTMLElement&&t.title))return;i=true;const e=z({
	classList:"nst-rw-single",innerText:c(t.title)});r.appendChild(e);
	}),i&&(t.title=r.outerHTML);}function Sa(t){t.forEach(t=>{
	Array.from(t.addedNodes).forEach(t=>{
	t instanceof HTMLElement&&t.parentElement&&/armoury-(weapons|armour)/g.test(t.parentElement.id)&&"UL"===t.tagName&&t.classList.contains("item-list")&&t.querySelectorAll("div.name").forEach(ka);
	});});}function La(t){new MutationObserver(Sa).observe(t,{childList:true,subtree:true
	});}const Ta=[{key:"rwbonusfaction",name:"rw bonus display",
	description:"display rw weapon bonus over the item instead of tooltip",
	onpage:Q.Faction,category:V.Faction,enabled:false,readyStates:["interactive"],
	run:()=>lt(La,"#faction-armoury")}];function _a(t){var e
	;return t.addedNodes.length>0&&t.target instanceof HTMLElement&&"UL"===t.target.nodeName&&"category-wrap"===(null==(e=t.target.parentElement)?void 0:e.id)&&null===t.previousSibling
	}function Ma(t){const e=t.querySelector(".name-wrap")
	;if(!e||e.classList.contains("nst-rw-show"))return
	;const n=t.querySelector("ul.bonuses-wrap"),o=null==n?void 0:n.lastElementChild
	;if(!o)return;const i=z({classList:"nst-rw-show-wrap"});let r=false
	;for(const a of Array.from(o.children)){
	if(!(a instanceof HTMLElement&&a.title))continue;r=true;const t=z({
	classList:"nst-rw-single",innerText:c(a.title)});i.appendChild(t);}
	r&&(e.classList.add("nst-rw-show"),e.appendChild(i));}function Da(t){
	new MutationObserver(t=>{
	for(const e of t)if(_a(e))for(const t of Array.from(e.addedNodes))t instanceof HTMLElement&&Ma(t);
	}).observe(t,{childList:true,subtree:true});}const Ia=[{key:"rwbonusitems",
	name:"rw bonus display",
	description:"display rw weapon bonus over the item instead of tooltip",
	onpage:Q.Items,category:V.Items,enabled:false,readyStates:["loading"],
	run:()=>lt(Da,"div.items-wrap")}],Pa=It("XID"),Oa=jt().t,Ea={them:{},you:{}
	},ja=$t("statspiesavg"),Aa=[7,31],$a=["Stat","Them","You"],za=["xantaken","refills","useractivity","criminaloffenses","rankedwarhits","enerydrinkused"],qa=["Strength","Defense","Speed","Dexterity","Total"],Ca="nst-table-cell nst-table-cell-head"
	;function Ha(t,e){
	return "useractivity"===t?(e/60).toFixed(2)+" min":""+e.toFixed(2)}
	function Na(t,e){return t>e?"text-nstred":t<e?"text-nstgreen":"text-nsttorntext"
	}function Ba(t){return document.getElementById(t)||null}function Ra(t,e,n=5){
	t.innerHTML="";const o=j("tr",{classList:"nst-table-row text-center"
	}),i=j("td",{innerText:e,classList:"nst-table-cell text-nsttorntext",colSpan:n})
	;o.appendChild(i),t.appendChild(o);}function Fa(t,e={}){const n=j("tr",e)
	;return t.forEach(t=>n.appendChild(t)),n}function Ua(t,e="",n={}){
	return j("td",{innerText:t,classList:"nst-table-cell "+e,...n})}
	async function Ga(t){var e,o,i;!function(t){
	const e=J("Stat Spies",null==t?void 0:t.closest(".profile-wrapper")),n=z({
	id:"nst-compare",classList:"nst-box-column"}),o=z({id:"nst-spies",
	classList:"nst-box-column item-start"});if(n.appendChild(j("table",{
	id:"nst-compare-table",classList:"nst-table"})),o.appendChild(j("table",{
	id:"nst-spies-table",classList:"nst-table"})),e.appendChild(n),e.appendChild(o),
	ja){const t=z({id:"nst-spies-avg",classList:"nst-box-column item-start"})
	;t.appendChild(j("table",{id:"nst-avg-table",classList:"nst-table"
	})),e.appendChild(t);}}(t)
	;const r=Ba("nst-compare-table"),a=Ba("nst-spies-table")
	;r&&Ra(r,"Loading...",3),a&&Ra(a,"Loading...",3);try{const t=await Nt({
	selection:"/spy/user/"+Pa})
	;(null==t?void 0:t.status)?((null==(e=null==t?void 0:t.compare)?void 0:e.status)?function(t){
	const e=Ba("nst-compare-table");if(!e)return;e.innerHTML=""
	;const o=document.createDocumentFragment();o.appendChild(Fa($a.map(t=>j("th",{
	innerText:t,classList:Ca})),{classList:"nst-table-row text-center nst-nodrag"}))
	;let i=!1;for(const[r,a]of Object.entries(t??{})){if(!a)continue;i=!0
	;const t=+a.amount||0,e=+a.difference||0,s=e>0?"text-nstgreen":e<0?"text-nstred":"text-nsttorntext",c=Fa([Ua(r,"text-nsttorntext"),Ua(n(t),"text-nsttorntext"),(()=>{
	const o=Ua(n(t+e));return o.classList.add(s),o})()],{classList:"nst-table-row",
	"data-id":r});o.appendChild(c);}i?(o.appendChild(Fa([(()=>{const t=j("td",{
	classList:"nst-table-cell",colSpan:3});return t.appendChild(A({
	href:"https://www.tornstats.com/settings/script",target:"_blank",
	classList:"t-blue nst-nodrag",innerText:"Change your script settings here"})),t
	})()],{classList:"nst-table-row nst-nodrag text-center"
	})),e.appendChild(o),e.rows.length>1&&new nr(e,{animation:150,
	filter:".nst-nodrag",store:{get:()=>f("tscompare")??Object.keys(t),set:t=>p({
	tscompare:t.toArray()})}})):Ra(e,"No comparison data available.",3);
	}(null==(o=null==t?void 0:t.compare)?void 0:o.data):r&&Ra(r,"No comparison data available.",3),
	(null==(i=null==t?void 0:t.spy)?void 0:i.status)?function(t){
	const e=Ba("nst-spies-table");if(!e)return;e.innerHTML=""
	;const o=document.createDocumentFragment();o.appendChild(Fa($a.map(t=>j("th",{
	innerText:t,classList:Ca})),{classList:"nst-table-row text-center"
	})),o.appendChild(Fa([j("td",{classList:"nst-table-cell text-nsttorntext",
	colSpan:3,innerText:"Last Update: "+((null==t?void 0:t.difference)??"")})],{
	classList:"nst-table-row nst-nodrag text-center"}));let i=!1;for(const r of qa){
	const e=+(null==t?void 0:t[r.toLowerCase()])||0,a=+(null==t?void 0:t["delta"+r])||0
	;if(!e&&!a)continue;i=!0
	;const s=a>0?"text-nstgreen":a<0?"text-nstred":"text-nsttorntext",c=Fa([Ua(r,"text-nsttorntext"),Ua(n(e),"text-nsttorntext"),(()=>{
	const t=Ua(n(e+a));return t.classList.add(s),t})()],{classList:"nst-table-row"})
	;o.appendChild(c);}i?e.appendChild(o):Ra(e,"No spy data available.",3);
	}(null==t?void 0:t.spy):a&&Ra(a,"No spy data available.",3)):(r&&Ra(r,"Failed to load comparison data.",3),
	a&&Ra(a,"Failed to load spy data.",3));}catch(c){
	r&&Ra(r,["Error loading comparison data.",c].join("\n"),3),
	a&&Ra(a,["Error loading spy data.",c].join("\n"),3);}if(!ja)return
	;const s=Ba("nst-avg-table");s&&Ra(s,"Loading...",1+2*Aa.length);try{
	await Promise.all(Aa.map(async t=>{const[e,n]=await Promise.all([Bt({
	playerID:Pa,selection:"personalstats",days:t}),Bt({playerID:Oa,
	selection:"personalstats",days:t})]);Ea.them[t]=e||{},Ea.you[t]=n||{};
	})),async function(){var t,e;const n=Ba("nst-avg-table");if(!n)return
	;n.innerHTML="";const o=document.createDocumentFragment(),i=[j("th",{
	innerText:"Stat",classList:Ca}),...Aa.flatMap(t=>[j("th",{
	innerText:`Them (${t}d)`,classList:Ca}),j("th",{innerText:`You (${t}d)`,
	classList:Ca})])];o.appendChild(Fa(i,{classList:"nst-table-row text-center"}))
	;let r=!1;for(const a of za){const n=[Ua(a,"text-nsttorntext")]
	;for(const o of Aa){
	const i=(null==(t=Ea.them)?void 0:t[o])??{},s=(null==(e=Ea.you)?void 0:e[o])??{},c=+i[a]||0,l=+s[a]||0
	;(c||l)&&(r=!0);const u=Ha(a,c),d=Ha(a,l),f=Na(c,l)
	;n.push(Ua(u,"text-nsttorntext"),Ua(d,f));}o.appendChild(Fa(n,{
	classList:"nst-table-row"}));}
	r?n.appendChild(o):Ra(n,"No average stats available.",1+2*Aa.length);}();
	}catch(c){s&&Ra(s,["Error loading average stats.",c].join("\n"),1+2*Aa.length);}}
	const Wa=[{key:"statspies",name:"stat spies",
	description:"add spies and stats on profile page",onpage:Q.Profile,
	category:V.Profile,enabled:false,readyStates:["interactive"],
	run:()=>lt(Ga,".user-info-value")},{key:"statspiesavg",name:"stat average",
	description:"add average stats on profile page",onpage:Q.Profile,
	category:V.Profile,enabled:false,readyStates:["interactive"],run:()=>{}
	}],Ka=["life","wall","revive","bs","hosp","la"],Xa={},Ja=It("user2ID")??"",Ya={
	life:"",wall:"",revive:"",bs:"",hosp:"",la:""};let Qa;const Va={life:t=>t+"%",
	wall:t=>t?"ON":"OFF",revive:t=>t?"ON":"OFF",bs:()=>"N/A",
	hosp:t=>""===t||0===t?"OUT":s(+t-Et()),la:t=>s(Et()-+t)};function Za(){
	Ka.forEach(t=>{const e=Xa[t];if(!e)return;const n=Va[t](Ya[t])??""
	;e.innerText!==n&&(e.innerText=n);});}async function ts(t){
	if(document.querySelector("#nst-target-status"))return;await async function(){
	var t,e,n,o;try{const i={section:"user",select:"",objID:Ja},r=await Ht(i)
	;if(!(null==r?void 0:r.status))return
	;const a=null==(t=null==r?void 0:r.states)?void 0:t.hospital_timestamp,s=null==(e=null==r?void 0:r.last_action)?void 0:e.timestamp,c=null==(n=null==r?void 0:r.life)?void 0:n.maximum,l=null==(o=null==r?void 0:r.life)?void 0:o.current,u=c?Math.floor(l/c*100):0,d=1===(null==r?void 0:r.revivable),f=!!Object.values((null==r?void 0:r.basicicons)??{}).some(t=>t.includes("Territory War"))
	;Ya.life=u,Ya.wall=f,Ya.revive=d,Ya.bs="",Ya.hosp=a,Ya.la=s;}catch(i){
	console.error("Failed to fetch target status data:",i);}}()
	;const e=null==t?void 0:t.parentElement,n=null==e?void 0:e.parentElement,o=null==n?void 0:n.parentElement
	;if(!n||!e||!o)return;const i=z({id:"nst-target-status",
	classList:"nst-status-wrap"})
	;i.style.position="absolute",i.style.top=n.offsetTop+2+"px",
	i.style.left=n.offsetLeft+e.offsetLeft+10+"px",i.appendChild(function(){
	const t=j("table",{id:"nst-status-table",classList:"nst-table"}),e=j("tr",{
	classList:"nst-table-row text-center"});Ka.forEach(t=>e.appendChild(j("th",{
	innerText:t,classList:"nst-table-cell nst-table-cell-head"}))),t.appendChild(e)
	;const n=j("tr",{classList:"nst-table-row"});return Ka.forEach(t=>{
	const e=Va[t](Ya[t])??"",o=j("td",{classList:"nst-table-cell text-nsttorntext"
	}),i=z({id:"nst-status-"+t,classList:"nst-status-item",innerText:e})
	;o.appendChild(i),n.appendChild(o),Xa[t]=i;}),t.appendChild(n),t
	}()),o.appendChild(i),clearInterval(Qa),Qa=window.setInterval(Za,1e3);}
	async function es(t){var e,n,o
	;const i=await t.clone().json(),r=+(null==(o=null==(n=null==(e=null==i?void 0:i.DB)?void 0:e.usersLife)?void 0:n.defender)?void 0:o.lifeBar)
	;return Ya.life=r,t}const ns=[{key:"targetstatus",name:"target info",
	description:"add useful information about the target",onpage:Q.Page,
	category:V.Fight,enabled:false,readyStates:["interactive"],run:()=>{
	Vt(es,st),lt(ts,'[class^="playerWindow"] [class*="defender"]');},
	condition:()=>"attack"===Pt()}];async function os(t){var e,o
	;const i=null==t?void 0:t.querySelectorAll(".trade-cont .user.right li.color2 ul li")
	;if(!(null==i?void 0:i.length))return
	;null==(o=null==(e=t.parentElement)?void 0:e.querySelector(".nst-trade-value"))||o.remove()
	;const r=await Ht({section:"torn",select:"items"})
	;if(!(null==r?void 0:r.status)||!r.items)return void console.debug("Failed to fetch items from API")
	;const a=new Map;Object.values(r.items).forEach(t=>{
	(null==t?void 0:t.name)&&a.set(t.name,t);});let s=0;i.forEach(t=>{var e,n
	;const o=t.querySelector(".name"),i=null==(n=null==(e=null==o?void 0:o.firstChild)?void 0:e.textContent)?void 0:n.trim()
	;if(!i)return;const{name:r,quantity:c}=function(t){const e=function(t){
	return /^x\d+\s/.test(t)?"start":/\sx\d+$/.test(t)?"end":null}(t);if(!e)return {
	name:t,quantity:1}
	;const n=t.split(" "),o="start"===e?0:n.length-1,i=n[o].substring(1),r=parseInt(i,10)
	;return isNaN(r)||r.toString().length!==i.length?{name:t,quantity:1}:{
	name:n.filter((t,e)=>e!==o).join(" ").trim(),quantity:r}}(i),l=a.get(r)
	;(null==l?void 0:l.market_value)&&(s+=parseInt(l.market_value,10)*c);})
	;const c=z({classList:"nst-trade-value",innerText:"MV: $"+n(s)})
	;t.insertAdjacentElement("beforebegin",c);}const is=[{key:"tradevalue",
	name:"trade value",description:"add market value of items in trade",
	onpage:Q.Trade,category:V.Trade,enabled:false,readyStates:["interactive"],
	run:()=>lt(os,"#trade-container .trade-cont")}];async function rs(t){
	const e=(await t.clone().json()).currentFightStatistics;if(!e)return t
	;const n=function(t){const e=new Map;return Object.values(t).forEach(t=>{
	"object"==typeof t&&null!==t&&"playername"in t&&e.set(t.playername,t);}),e
	}(e),o=document.querySelectorAll('ul[class^="participants"] div[class^="playerWrap"] > span[class^="playername"]')
	;return o.length?(o.forEach(e=>{if(e.querySelector(".nst-intercept"))return t
	;const o=e.innerText,i=n.get(o),r=null==i?void 0:i.userID;if(!r)return t
	;!function(t,e,n){const o="loader.php?sid=attack&user2ID="+n
	;t.innerHTML="",t.appendChild(A({classList:"nst-intercept text-nsttorntext",
	href:o,target:"_blank",innerText:e}));}(e,o,r);}),t):t}const as=[{
	key:"warintercept",name:"intercept link",
	description:"add links for intercept attacks",onpage:Q.Loader,category:V.Fight,
	enabled:false,readyStates:["interactive"],run:()=>Vt(rs,st),
	condition:()=>"attack"===Pt()}],ss={"Small Arms Cache":20,"Melee Cache":30,
	"Medium Arms Cache":50,"Heavy Arms Cache":70,"Armor Cache":60
	},cs=/^(\d+)x (.+)$/;function ls(t,e){const n=t.match(cs);if(!n)return null
	;const o=parseInt(n[1],10),i=n[2];if(!ss[i])return null;const r=e.get(i)
	;return r?{qty:o,name:i,value:parseInt(r.market_value,10)||0,bb:ss[i]}:null}
	async function us(t){const e=null==t?void 0:t.parentElement;if(!e)return
	;const o=await Ht({section:"torn",select:"items"})
	;if(!(null==o?void 0:o.status))return;const i=o.items,r=new Map
	;for(const n of Object.values(i))n&&n.name&&r.set(n.name,n)
	;Array.from(e.children).forEach(t=>function(t,e){
	const o=t.innerText.split(",").map(t=>t.trim()),{totalQty:i,totalValue:r,totalBB:a}=function(t,e){
	let n=0,o=0,i=0;for(const r of t){const t=ls(r,e);t&&(n+=t.qty,o+=t.value*t.qty,
	i+=t.qty*t.bb);}return {totalQty:n,totalValue:o,totalBB:i}}(o,e)
	;!function(t,e,o,i){const r=`caches: ${e} | BB: ${o} | MV: $${n(i)}`
	;t.querySelector(".nst-war-value")||t.appendChild(z({classList:"nst-war-value",
	innerText:r}));}(t,i,a,r);}(t,r));}const ds=[{key:"warvalue",
	name:"war reward value",description:"add caches value to war report",
	onpage:Q.War,category:V.War,enabled:false,readyStates:["interactive"],
	run:()=>lt(us,'li[class^="members-bonus-row"]'),condition:()=>{
	return "rankreport"===(null==(t=window.location.search.match(/\?step=(\w+)/))?void 0:t[1])
	;var t;}}];function fs(t){
	t&&(t.children[0].classList.add("nst-icon-noff"),t.classList.add("disabled"),
	t.classList.remove("active"),t.style.pointerEvents="none");}function ps(t){
	if(!t)return
	;const e=[...t.querySelectorAll("a")].find(t=>t.href.includes("/factions")),n=+(new URL(e.href).searchParams.get("ID")??0)
	;if(!Lt.has(a(n)))return
	;const o=null==document?void 0:document.querySelector(".profile-left-wrapper .title-black")
	;if(!o)return;const i=R({classList:"nst-title-noff",
	innerText:"Fellow NS member, do not mug!"});o.appendChild(i)
	;const r=t.querySelector(".user-profile "+at);r&&fs(r);}async function ms(t){
	const e=+((await t.clone().json()).user.faction.id??0)
	;return Lt.has(a(e))?(lt(fs,".profile-mini-root "+at),t):t}const hs=[{
	key:"noff",name:"friendly fire alert",
	description:"disable attack button for friendly users",onpage:Q.Profile,
	category:V.Profile,enabled:false,readyStates:["interactive"],run:()=>{
	lt(ps,".info-table"),Vt(ms,ct);}}];let gs={},bs={},vs=0;async function ws(t){
	var e,o;const i=t.currentTarget;i.disabled=true;const r=function(){
	const t=Object.values(gs).sort((t,e)=>+e.targetID-+t.targetID);if(t.length){
	const e=t[vs%t.length];return vs=(vs+1)%t.length,e}
	return vs=0,Object.values(bs).sort((t,e)=>+e.targetID-+t.targetID)[0]}()
	;if(!r)return;const a={sid:"crimesData",step:"attempt",typeID:"10",
	crimeID:r.crimeID+"",value1:r.ID+"",rfcv:Dt()+""},s={method:"POST",headers:{
	"x-requested-with":"XMLHttpRequest"},body:new URLSearchParams(a)};try{
	const t=await fetch("https://www.torn.com/page.php",s)
	;if(!t.ok)throw Error("HTTP "+t.status)
	;const a=await t.json(),c=null==(e=null==a?void 0:a.DB)?void 0:e.outcome
	;if(!c)throw Error("Missing crime outcome")
	;const l=null==(o=null==c?void 0:c.rewards)?void 0:o.map(t=>null==t?void 0:t.value).filter(t=>void 0!==t)
	;if(console.log(null==c?void 0:c.rewards,l),
	i.innerText=`${(null==c?void 0:c.result)??"unknown"}: ${n(null==l?void 0:l[0])??"brute force"}`,
	i.disabled=!1,5===r.nerve){const t=Object.keys(bs).find(t=>bs[t].ID===r.ID)
	;void 0!==t&&delete bs[t];}}catch(c){console.error(c);}}function ys(t){
	const e=J("easy cracking",t),n=z({classList:"nst-box-column"}),o=$({
	id:"nst-easy-crack",classList:"torn-btn m-2",innerText:"crack",onclick:ws})
	;n.appendChild(o),e.appendChild(n);}function xs(){Rt("cracking",()=>lt(ys,ot));}
	async function ks(t){var e,n
	;const o=await t.clone().json(),i=null==(n=null==(e=o.DB)?void 0:e.crimesByType)?void 0:n.targets
	;if(!i||d(i))return t;!function(t){gs={},bs={}
	;for(const[e,n]of Object.entries(t))7===n.nerve?gs[e]=n:5===n.nerve&&(bs[e]=n);
	}(i);const r=Object.values(i).sort((t,e)=>e.nerve-t.nerve)
	;return Object.keys(i).forEach((t,e)=>{i[t]=r[e];
	}),t.json=async()=>o,t.text=async()=>JSON.stringify(o),t}function Ss(t){
	const e=["married","company","faction"],n=function(){
	const t=Object.entries(f()).filter(([t,e])=>t.includes("filter")&&true===e).map(([t])=>t.replace("filter",""))
	;return t.includes("travel")&&t.push("abroad"),t.push("fallen","federal"),t
	}(),o=t instanceof HTMLElement?t:document.querySelector(rt)
	;o&&o.querySelectorAll('li[class^="user"]').forEach(t=>{
	const o=[...[...t.querySelectorAll("a[aria-label]")].filter(t=>{var n
	;const o=(null==(n=t.getAttribute("aria-label"))?void 0:n.toLowerCase())??""
	;return !e.some(t=>o.includes(t.toLowerCase()))})].find(t=>{
	const e=(t.getAttribute("aria-label")??"").toLowerCase()
	;return [...n].some(t=>e.includes(t))});t.style.display=o?"none":"";});}
	function Ls(t){!function(t,e){const n=J("Filters",t),i=z({
	classList:"nst-box-column",style:"align-items: start"}),r=z({
	classList:"nst-box-item"}),a=j("b",{innerText:"Activity"}),s=z({
	classList:"nst-box-column",style:"align-items: start"}),c=z({
	classList:"nst-box-item"}),l=j("b",{innerText:"Status"})
	;r.appendChild(a),i.appendChild(r),
	c.appendChild(l),s.appendChild(c),T.map(t=>t+" filter").forEach(t=>{const n={
	id:"nst-"+o(t),value:t};i.appendChild(W(n,t.replace(/ filter$/,""),"",e));
	}),_.map(t=>t+" filter").forEach(t=>{const n={id:"nst-"+o(t),value:t}
	;s.appendChild(W(n,t.replace(/ filter$/,""),"",e));
	}),n.appendChild(i),n.appendChild(s);
	}(t,Ss),Ss(t),new MutationObserver(()=>Ss(t)).observe(t,{childList:true,subtree:true
	});}
	const Ts=[...ht,...wt,...Gt,...Kt,...fe,...he,...ve,...xe,...Te,...Ne,...Fe,...Ge,...Xe,...Ye,...en,...wn,...On,...Cn,...Bn,...Rn,...Un,...Gn,...Kn,...Xn,...Yn,...Qn,...Zn,...eo,...oo,...lo,...kt,...po,...bo,...xo,...Ir,...jr,...Fr,...Yr,...Zr,...ea,...ra,...ua,...ha,...va,...xa,...Ta,...Ia,...Wa,...ns,...is,...as,...ds,...hs,{
	key:"crackingeasy",name:"easy cracking",description:"one button cracking",
	onpage:Q.Page,category:V.Crime,enabled:false,readyStates:["loading"],run:()=>{
	Vt(ks,"crimesData"),lt(xs,ot);},condition:()=>/crimes/.test(Pt()??"")},{
	key:"searchfilter",name:"search filtering",description:"filter search results",
	onpage:Q.Page,category:V.Search,enabled:false,readyStates:["interactive"],
	run:()=>lt(Ls,rt),condition:()=>/UserList/.test(Pt()??"")}];function _s(){
	var t,e;console.debug("nst - init default start");const n={}
	;for(const r of Ts)n[r.key]={name:r.name,description:r.description,
	onpage:r.onpage,category:r.category,enabled:r.enabled};const o=f()??{},i={
	script:{}};for(const r in n)i.script[r]={...n[r],
	enabled:(null==(e=null==(t=null==o?void 0:o.script)?void 0:t[r])?void 0:e.enabled)??n[r].enabled
	}
	;Object.keys(O).forEach(t=>i[t]=o[t]??O[t]),m("nstdata"),p(i),console.debug("nst - init default end");
	}function Ms(t,e,n=false){const o=document.getElementById(t);var i
	;o&&((i=o).innerText="",
	i.classList.remove("text-nstgreen","text-nstred"),o.innerText=e,
	o.classList.toggle("text-nstgreen",n),o.classList.toggle("text-nstred",!n));}
	async function Ds(){const t=document.getElementById("nst-tsapikey");if(!t)return
	;const e=t.value.trim()
	;if(19!==e.length)return Ms("nst-ts-message","Invalid Key Length")
	;const n=await Nt({api:e,selection:""})
	;if(!(null==n?void 0:n.status))return Ms("nst-ts-message",(null==n?void 0:n.error)||"Invalid Key")
	;try{p({tsapikey:e}),Ms("nst-ts-message","Key Saved",!0);}catch(o){
	Ms("nst-ts-message",o.message||"Unknown error");}}async function Is(){
	const t=document.getElementById("nst-apikey");if(!t)return
	;const e=t.value.trim()
	;if(16!==e.length)return Ms("nst-message","Invalid Key Length")
	;const n=await Ht({section:"user",select:"profile",api:e})
	;if(!(null==n?void 0:n.status))return Ms("nst-message",(null==n?void 0:n.error)||"Invalid Key")
	;try{const{t:t,o:o}=jt(n)
	;if(void 0===t||void 0===o)return Ms("nst-message","API broken, wait for ched to fix")
	;if(p({apikey:e
	}),!At(n))return m("nstdata"),Ms("nst-message","You are not allowed, contact seintz[2460991]")
	;p({userdata:n}),Qs(),Ms("nst-message","Key Saved",!0);}catch(o){
	Ms("nst-message",o.message||"Unknown error");}}async function Ps(){
	confirm("Are you sure you want to reset?")&&(m("nstdata"),
	window.location.reload());}async function Os(){
	if(!confirm("Are you sure you want to reset your TornStats API key?"))return
	;const t=document.getElementById("nst-tsapikey");t&&(t.value=""),p({tsapikey:""
	}),Ms("nst-ts-message","TornStats API key cleared",true);}function Es(t){
	const e=z({classList:"nst-api-card"}),n=z({classList:"nst-api-card-header"
	}),o=j("span",{classList:"nst-api-icon",innerText:t.icon}),i=j("span",{
	classList:"nst-api-card-title",innerText:t.title}),r=j("span",{
	classList:"nst-api-badge "+(t.required?"nst-api-badge-required":"nst-api-badge-optional"),
	innerText:t.required?"Required":"Optional"})
	;if(n.appendChild(o),n.appendChild(i),
	n.appendChild(r),e.appendChild(n),t.links&&t.links.length>0){const n=z({
	classList:"nst-api-links mb-3"});if(1===t.links.length){const e=A({
	href:t.links[0].url,target:"_blank",innerText:t.links[0].text,
	classList:t.links[0].color+" font-bold"});n.appendChild(e);}else {
	n.innerHTML="Create a ";const e=A({href:t.links[0].url,target:"_blank",
	innerText:t.links[0].text,classList:t.links[0].color+" font-bold"})
	;n.appendChild(e),n.innerHTML+=" key or ";const o=A({href:t.links[1].url,
	target:"_blank",innerText:t.links[1].text,
	classList:t.links[1].color+" font-bold"});n.appendChild(o),n.innerHTML+=" one";}
	e.appendChild(n);}const a=j("ul",{classList:"nst-api-description-list"})
	;t.features.forEach(t=>{const e=j("li",{innerText:t});a.appendChild(e);
	}),e.appendChild(a);const s=z({classList:"nst-api-note",innerText:t.note})
	;e.appendChild(s);const c=z({classList:"nst-api-divider"});e.appendChild(c)
	;const l=z({classList:"nst-api-input-section"}),u=C({id:"nst-"+t.inputName,
	type:"password",classList:"nst-input-field",maxLength:t.inputMaxLength,
	required:true,value:(f(t.inputName)??"")+""});l.appendChild(u);const d=z({
	classList:"nst-api-button-group"});t.buttons.forEach(t=>{
	const e=t.variant||"primary",n=$({id:t.id,
	classList:"nst-api-btn nst-api-btn-"+e,innerText:t.text,onclick:t.onClick})
	;d.appendChild(n);}),l.appendChild(d);const p=z({id:t.messageId,
	classList:"nst-message"});return l.appendChild(p),e.appendChild(l),e}
	function js(t){const e=document.getElementById(t);if(!e)return;e.innerHTML=""
	;const n=z({classList:"flex flex-col gap-6"}),o=z({classList:"nst-api-section"
	}),i=Es({icon:"🔑",title:"Torn API Key",required:true,
	features:["Powers 40+ features including Quick Items, Stat Tracking, and Mission Helper","Authenticates you and unlocks all script features","Accesses: inventory, stats, cooldowns, travel status, and more","Validates user authorization and stores game data locally"],
	links:[{text:"limited",url:Z.tornapisetting,color:"text-nstyellow"},{
	text:"custom",url:Z.tornapicustom,color:"text-nstmain"}],
	note:"Without this key, most features won't work.",inputName:"apikey",
	inputMaxLength:16,messageId:"nst-message",buttons:[{id:"nst-login",text:"Save",
	onClick:Is,variant:"primary"},{id:"nst-reset",text:"Reset",onClick:Ps,
	variant:"secondary"}]});o.appendChild(i),n.appendChild(o);const r=z({
	classList:"nst-api-section"}),a=Es({icon:"📊",title:"TornStats API Key",
	required:false,
	features:['Enables "Stat Spies" feature on player profiles',"Shows battle stat comparisons (you vs target)","Displays historical spy data from TornStats database","Helps track stat changes over time"],
	links:[{text:"Create your key here",url:Z.tornstats+"/settings/general",
	color:"text-nstmain"}],
	note:"Falls back to Torn API key if not provided, but recommended for full functionality.",
	inputName:"tsapikey",inputMaxLength:19,messageId:"nst-ts-message",buttons:[{
	id:"nst-tslogin",text:"Save",onClick:Ds,variant:"primary"},{id:"nst-tsreset",
	text:"Reset",onClick:Os,variant:"secondary"}]})
	;r.appendChild(a),n.appendChild(r),e.appendChild(n);}function As(t,...e){
	const n=z({classList:"nst-block"}),o=j("h4",{classList:"nst-block-title",
	innerText:t});return n.appendChild(o),e.forEach(t=>n.appendChild(t)),n}
	function $s(t,e,n){const o=z({id:e,classList:"nst-outcome"})
	;o.addEventListener("change",t=>{const e=t.target;e&&"radio"===e.type&&n(e.id);})
	;const i=document.createDocumentFragment()
	;return t.forEach(t=>i.appendChild(K(t,e))),o.appendChild(i),o}function zs(t){
	const e=document.getElementById(t);if(!e)return;e.innerHTML=""
	;const n=document.createDocumentFragment();n.appendChild(function(){
	const t=document.createDocumentFragment();return G({elem:t,title:"mug threshold"
	}),As("mug threshold",t)
	}()),n.appendChild(As("default outcome",$s(["leave","mug","hospitalize"],"outcome",t=>p({
	outcome:t})),W({id:"nst-hold"},"hold"))),n.appendChild(function(){
	const t=f("weapon"),e=z({id:"weapon"}),n=document.createDocumentFragment()
	;return Object.keys(t).forEach(t=>{const e=z({id:t,classList:"list-group-item",
	innerText:t});e.setAttribute("data-id",t),n.appendChild(e);
	}),e.appendChild(n),new nr(e,{animation:150,store:{get:()=>{
	const t=f("weapon"),e=["","","",""]
	;return Object.entries(t).forEach(([t,n])=>e[n]=t),e},set:t=>{
	const e=t.toArray(),n=f("weapon");e.forEach(t=>n[t]=e.indexOf(t)),p({weapon:n});}
	}}),As("weapon order",e,W({id:"nst-temp"},"use temp first"),W({id:"nst-assaperk"
	},"assassinate"),W({id:"nst-executeperk"},"execute"))
	}()),n.appendChild(function(){const t=z({id:"reload",classList:"nst-outcome"
	}),e=document.createDocumentFragment();return e.appendChild(W({
	id:"nst-reloadone"},"primary")),e.appendChild(W({id:"nst-reloadtwo"
	},"secondary")),t.appendChild(e),As("weapon reload",t)}()),e.appendChild(n);}
	function qs(t){const e=document.getElementById(t);if(!e)return;e.innerHTML=""
	;const n=document.createDocumentFragment()
	;n.appendChild(As("default outcome",$s(["easy-leave","easy-mug","easy-hospitalize"],"easy-outcome",t=>p({
	easyoutcome:t.replace(/easy-/g,"")
	})))),n.appendChild(As("default weapon",$s(["easy-primary","easy-secondary","easy-melee"],"easy-weapon",t=>p({
	easyweapon:t.replace(/easy-/g,"")})),W({id:"nst-easy-temp"},"use temp first"))),
	e.appendChild(n);}let Cs=null;function Hs(t){const e=document.getElementById(t)
	;return e?(e.innerHTML="",e):null}function Ns(t,e,n){
	t.className=n,t.innerHTML=`<b>${e}</b>`,t.classList.remove("hidden");}
	function Bs(t){const e=Hs(t);if(!e)return;const n=z({id:"nst-export-wrap",
	classList:"nst-api-wrap"}),o=A({id:"nst-export-download",innerText:"Download"})
	;o.classList.add("hidden","text-sm","text-nstmain","m-2");const i=$({
	id:"nst-export-btn",innerText:"export",classList:"torn-btn m-2",
	onclick:()=>function(t){const e=JSON.stringify(f())
	;Cs&&window.URL.revokeObjectURL(Cs),Cs=window.URL.createObjectURL(new Blob([e],{
	type:"application/json"
	})),t.setAttribute("href",Cs+"#/nst-export"),t.setAttribute("download","nst-export.json"),
	t.classList.remove("hidden");}(o)});n.append(i,o),e.appendChild(n);}
	function Rs(t){const e=Hs(t);if(!e)return;const n=R({})
	;n.classList.add("hidden");const o=z({id:"nst-import-wrap",
	classList:"nst-api-wrap"}),i=C({id:"nst-import-input",type:"file",
	accept:"application/json",onchange:()=>function(t,e){const n=t.files
	;if(!n||!n[0])return;const o=new FileReader;o.onload=t=>{var n;try{
	const o=h(""+(null==(n=t.target)?void 0:n.result))
	;if(null===o)throw Error("Parsed data is null")
	;p(o),_s(),Ns(e,"Import Successful","text-nstgreen");}catch{
	Ns(e,"Import Unsuccessful","text-nstred");}},o.onerror=t=>{
	Ns(e,"Import Unsuccessful","text-nstred"),console.error(t);},o.readAsText(n[0]);
	}(i,n)});i.classList.add("hidden");const r=$({id:"nst-import-btn",
	innerText:"import",classList:"torn-btn m-2",onclick:()=>i.click()})
	;o.append(r,i,n),e.appendChild(o);}const Fs={
	"Data Storage":"Only locally, changes","Data Sharing":"Nobody",
	"Purpose of Use":"Optimization / Maintenance but only end user has access",
	"Key Storage & Sharing":"Stored locally but not shared",
	"Key Access Level":"Limited or Custom (see below)"},Us={"Data Storage":"💾",
	"Data Sharing":"🔒","Purpose of Use":"🎯","Key Storage & Sharing":"🔑",
	"Key Access Level":"⚙️",company:"🏢",market:"🛒",torn:"📦",user:"👤"}
	;function Gs(t,e){const n=z({classList:"nst-tos-section"})
	;n.appendChild(j("h4",{classList:"nst-tos-title",innerText:t}));const o=z({
	classList:"nst-tos-grid"});return Object.entries(e).forEach(([t,e])=>{
	o.appendChild(function(t,e){const n=z({classList:"nst-tos-card"}),o=z({
	classList:"nst-tos-card-header"}),i=j("span",{classList:"nst-tos-icon",
	innerText:Us[t]||"📋"}),r=j("span",{classList:"nst-tos-label",innerText:t})
	;o.appendChild(i),o.appendChild(r);const a=j("div",{classList:"nst-tos-value",
	innerText:e});return n.appendChild(o),n.appendChild(a),n}(t,e));
	}),n.appendChild(o),n}function Ws(t){const e=document.getElementById(t)
	;if(!e)return;e.innerHTML="";const n=document.createDocumentFragment()
	;n.appendChild(Gs("Terms of Service",Fs)),
	n.appendChild(Gs("API Usage",D)),e.appendChild(n);}function Ks(){
	const t=document.querySelector(".content-wrapper:is(.spring, .summer, .autumn, .winter)")
	;if(!t)return;const e=document.getElementById("nst-menu");e&&e.remove()
	;const n="none"===t.style.display;t.style.display=n?"":"none",n||function(t){
	const e=document.createDocumentFragment(),n=z({id:"nst-menu",
	classList:"nst-menu"}),o=z({id:"nst-menu-wrap",classList:"nst-menu-wrap"}),i=z({
	id:"nst-menu-title",classList:"nst-menu-title"}),r=z({id:"nst-menu-body",
	classList:"nst-menu-body"}),a=j("ul",{id:"nst-ul-main",classList:"nst-ul-main"})
	;i.appendChild(R({classList:"nst-logo"})).appendChild(j("b",{innerText:"NST"})),
	r.appendChild(a),
	o.appendChild(i),o.appendChild(r),n.appendChild(o),e.appendChild(n),
	t.insertAdjacentElement("beforebegin",e.firstChild),
	Xs(a,"tos",Ws,"Terms of Service"),Xs(a,"api",js,"Api Keys"),function(t){
	const e=t.querySelector("#nst-api-li"),n=t.querySelector("#nst-api")
	;null==e||e.classList.add("nst-menu-sel"),
	null==n||n.classList.add("nst-menu-active"),
	null==n||n.classList.toggle("hidden");}(r),Qs();}(t);}function Xs(t,e,n=()=>{},o){
	const i=null==t?void 0:t.parentElement;if(!i)return;const r="nst-"+e,a=r+"-li"
	;if(i.querySelector("#"+r)||i.querySelector("#"+a))return;const s=N({id:a,
	classList:"nst-menu-page",innerText:o||e,onclick:Js})
	;t.appendChild(s),i.appendChild(z({id:r,classList:"nst-menu-item hidden"})),n(r);
	}function Js(t){
	const e=t.target,n=e.id,o=null==e?void 0:e.closest("#nst-menu-body")
	;if(!o)return
	;const i=o.querySelector(".nst-menu-sel"),r=o.querySelector(".nst-menu-active"),a=o.querySelector("#"+n.replace(/-li/g,""))
	;null==i||i.classList.remove("nst-menu-sel"),
	r&&(r.classList.remove("nst-menu-active"),
	r.classList.toggle("hidden")),e.classList.add("nst-menu-sel"),
	a&&(a.classList.add("nst-menu-active"),a.classList.toggle("hidden"));}
	function Ys(t){const e=document.getElementById(t);if(!e)return;e.innerHTML=""
	;const n=t.replace(/nst-/g,""),i=f("script"),a=Object.keys(i).sort().reduce((t,e)=>{
	var o
	;return (null==(o=null==i?void 0:i[e])?void 0:o.category)===n&&(t[e]=null==i?void 0:i[e]),
	t},{}),s=z({classList:"nst-script-block"}),c=document.createDocumentFragment()
	;Object.entries(a).forEach(([t,e])=>{
	const n=null==e?void 0:e.name,i=o(t),a=function(t,e,n){
	const o=r(null==t?void 0:t.id),i=z({classList:"nst-box-item"
	}),a=f("script"),s=null==a?void 0:a[o],c=C({...t,type:"checkbox",
	checked:!!(null==s?void 0:s.enabled),onchange:t=>{
	const e=t.target,n=r(null==e?void 0:e.id),o=f("script"),i=null==o?void 0:o[n]
	;i&&!!i.enabled!==e.checked&&o[n]&&(o[n].enabled=e.checked),p({script:o});}
	}),l=H({innerText:e,htmlFor:null==t?void 0:t.id,title:n})
	;return i.appendChild(c),i.appendChild(l),i}({id:"nst-"+i,value:i
	},n,e.description.toLowerCase());c.appendChild(a);
	}),s.appendChild(c),e.appendChild(s);}function Qs(){if(!At())return;_s()
	;const t=document.querySelector("#nst-ul-main");if(!t)return;const e={attack:zs,
	"easy-fight":qs,export:Bs,import:Rs};Object.keys(e).forEach(n=>Xs(t,n,e[n]))
	;const n=f("script"),o=Object.keys(n).sort().reduce((t,e)=>(t[e]=null==n?void 0:n[e],
	t),{})
	;Array.from(new Set(Object.values(o).map(t=>t.category).filter(Boolean))).sort().forEach(e=>Xs(t,e,Ys));
	}function Vs(t){if(document.getElementById("nst-icon"))return
	;const e=t.querySelector('ul[class^="statusIcons"]')||t.querySelector('ul[class^="status-icons"]')
	;if(!e)return;const n=N({id:"nst-icon",classList:"nst-icon"})
	;e.insertBefore(n,e.firstChild),n.addEventListener("click",Ks);}
	const Zs=window.location.pathname.replace(/^\//,"").replace(/\.php$/,""),tc={
	loading:()=>{lt(E,"head"),lt(Vs,"#sidebar"),At()&&(function(){
	for(const t of ["pushState","replaceState"]){const e=history[t]
	;history[t]=function(...t){const n=e.apply(this,t)
	;return window.dispatchEvent(new Event("nst:navigate")),n};}
	}(),document.onreadystatechange||(document.onreadystatechange=()=>{
	const t=document.readyState;tc[t]&&tc[t]();}),yt(Zs,"loading"),Ct());},
	interactive:()=>{At()&&yt(Zs,"interactive");},complete:()=>{yt(Zs,"complete");}}
	;tc[document.readyState]&&tc[document.readyState]();}();

})();