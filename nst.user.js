// ==UserScript==
// @name         nst
// @namespace    seintz.torn.nst
// @version      2.3.15
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
	;a.observe(document.documentElement,{childList:true,subtree:true});}const ut={
	weapons:'[id*="tab=armoury&sub=weapons"]',
	armor:'[id*="tab=armoury&sub=armour"]',itemList:"ul.item-list",
	itemName:"div.name",bonusIcon:"ul.bonuses li.bonus i"},dt={
	weapons:`${ut.weapons} ${ut.itemList}`,armor:`${ut.armor} ${ut.itemList}`
	},ft=[ut.weapons,ut.armor].join(", "),pt=Object.values(dt).join(", ")
	;let mt=null;function ht(t){const e=t.closest(ft)
	;return e?e.matches(ut.weapons)?"weapons":e.matches(ut.armor)?"armour":null:null
	}function gt(t){const e=ht(t);if(!e)return
	;const n=((f("weapons"===e?"armfweapons":"armfarmor")??"")+"").trim().toLowerCase(),o="weapons"===e?((f("armfbonuses")??"")+"").trim().toLowerCase():""
	;t.querySelectorAll(ut.itemName).forEach(t=>function(t,e,n,o){var i
	;const r=t.parentElement;if(!r)return
	;const a=(null==(i=t.textContent)?void 0:i.trim().toLowerCase())??"",s=!n||a.includes(n),c="bonus-attachment-"+o.replace(/\s+/g,""),l="armour"===e||!o||Array.from(r.querySelectorAll(ut.bonusIcon)).some(t=>t.classList.contains(c))
	;r.classList.toggle("hidden",!(s&&l));}(t,e,n,o));}function bt(t){
	t.querySelectorAll(pt).forEach(gt);}const vt=b(bt,"armoryfilter");function wt(t){
	if(!mt)return
	;const{weaponsDiv:e,armorDiv:n}=mt,o=t.querySelector(dt.armor),i=!!(o&&o.getClientRects().length>0)
	;e.classList.toggle("hidden",i),n.classList.toggle("hidden",!i);}function yt(t){
	!function(t){const e=J("armory filter",t),n=z({classList:"nst-box-column"
	}),o=z({classList:"nst-box-column"}),i=z({classList:"nst-box-column hidden"})
	;X({elem:o,title:"armf weapons",label:"Weapon",options:et,cback:()=>vt(t)}),X({
	elem:o,title:"armf bonuses",label:"Bonus",options:nt,cback:()=>vt(t)}),X({
	elem:i,title:"armf armor",label:"Armor Set / Item",options:tt,cback:()=>vt(t)}),
	n.append(o,i),null==e||e.appendChild(n),mt={weaponsDiv:o,armorDiv:i};
	}(t),wt(t),function(t){new MutationObserver(e=>{const n=new Set,o=t=>{
	ht(t)&&n.add(t);};for(const t of e){if("childList"!==t.type)continue
	;const e=t.target.closest(ut.itemList);e&&o(e)
	;for(const n of t.addedNodes)n instanceof HTMLElement&&(n.matches(ut.itemList)&&o(n),
	n.querySelectorAll(ut.itemList).forEach(o));}for(const t of n)gt(t);wt(t);
	}).observe(t,{childList:true,subtree:true});}(t),bt(t);}const xt=[{key:"armoryfilter",
	name:"armory filter",description:"filter items in faction armory",
	onpage:Q.Faction,category:V.Faction,enabled:false,readyStates:["interactive"],
	run:()=>lt(yt,"#faction-armoury-tabs",true)}],kt=b(St,"auctionfilter")
	;function St(t){
	const e=(f("aucfweapons")??"")+"",n=(f("aucfbonuses")??"")+"",o=e?RegExp(e,"g"):null,i=n?RegExp(n,"g"):null
	;t.querySelectorAll("div.item-cont-wrap").forEach(t=>function(t,e,n){var o
	;const i=t.parentElement;if(!i)return
	;const r=t.querySelector("span.title"),a=t.querySelector("div.item-bonuses")
	;if(!r||!a)return;const s=function(t,e,n,o){
	const i=!n||n.test(t)||n.test(e),r=!o||o.test(t)||o.test(e);return i&&r
	}(r.innerText.toLowerCase(),(null==(o=a.innerHTML)?void 0:o.toLowerCase())??"",e,n)
	;i.classList.toggle("hidden",!s);}(t,o,i));}function Lt(t){!function(t){
	const e=J("auction filter",t),n=z({classList:"nst-box-column"});U({elem:n,
	title:"aucf weapons",cback:()=>kt(t)}),U({elem:n,title:"aucf bonuses",
	cback:()=>kt(t)}),null==e||e.appendChild(n);}(t),function(t){
	new MutationObserver(t=>{
	for(const e of t)for(const t of Array.from(e.addedNodes))t instanceof HTMLElement&&"LI"===t.tagName&&t.firstElementChild instanceof HTMLElement&&t.firstElementChild.classList.contains("item-cont-wrap")&&St(t);
	}).observe(t,{childList:true,subtree:true});}(t);}const Tt=[{key:"auctionfilter",
	name:"auction filter",description:"filter items in auction",onpage:Q.Auction,
	category:V.Auction,enabled:false,readyStates:["loading"],
	run:()=>lt(Lt,"#auction-house-tabs")}];function _t(t,e,n){
	Os.filter(n=>function(t,e,n){
	const o=t.onpage===e||"all"===t.onpage,i=t.readyStates.includes(n),r=Bt(t.key),a=!t.condition||t.condition()
	;return o&&i&&r&&a}(n,t,e)).forEach(t=>t.run(n||{}));}function Mt(t){
	GM.notification(t);}const Dt=[{key:"notidrug",name:"drug cooldown",
	description:"display a notification when not on drugs",onpage:Q.Notification,
	category:V.Notification,enabled:false,readyStates:["complete"],run:t=>function(t){
	var e,n
	;const{old:o,new:i}=t,r=null==(e=null==i?void 0:i.cooldowns)?void 0:e.drug
	;0!==(null==(n=null==o?void 0:o.cooldowns)?void 0:n.drug)&&0===r&&Mt({
	title:"NST: Drug Cooldown",text:"Your drug cooldown has expired."});}(t)},{
	key:"notitrav",name:"traveling",
	description:"display a notification when you are about to land",
	onpage:Q.Notification,category:V.Notification,enabled:false,
	readyStates:["complete"],run:t=>function(t){var e,n,o
	;const{old:i,new:r}=t,a=null==(e=null==r?void 0:r.travel)?void 0:e.time_left,c=null==(n=null==i?void 0:i.travel)?void 0:n.time_left,l=null==(o=null==r?void 0:r.travel)?void 0:o.destination
	;a<=120&&a!==c&&Mt({title:"NST: Travel",text:`${l} - Landing in ${s(a)}`});}(t)
	},{key:"notihosp",name:"hospital",
	description:"display a notification when almost out of hosp",
	onpage:Q.Notification,category:V.Notification,enabled:false,
	readyStates:["complete"],run:t=>function(t){var e,n
	;const{old:o,new:i}=t,r=null==(e=null==i?void 0:i.states)?void 0:e.hospital_timestamp,a=null==(n=null==o?void 0:o.states)?void 0:n.hospital_timestamp,c=r-Ct()
	;c<=300&&r!==a&&Mt({title:"NST: Hospital",
	text:"Out of hosp in "+s(Math.round(c))});}(t)},{key:"notimsg",name:"messages",
	description:"display a notification when there are new messages",
	onpage:Q.Notification,category:V.Notification,enabled:false,
	readyStates:["complete"],run:t=>function(t){var e,n
	;const{old:o,new:i}=t,r=null==(e=null==i?void 0:i.notifications)?void 0:e.messages,a=null==(n=null==o?void 0:o.notifications)?void 0:n.messages
	;0!==r&&r!==a&&Mt({title:"NST: New Message",
	text:`You have ${r} new message${1===r?"":"s"}.`});}(t)},{key:"notievent",
	name:"events",description:"display a notification when there are new events",
	onpage:Q.Notification,category:V.Notification,enabled:false,
	readyStates:["complete"],run:t=>function(t){var e,n
	;const{old:o,new:i}=t,r=null==(e=null==i?void 0:i.notifications)?void 0:e.events,a=null==(n=null==o?void 0:o.notifications)?void 0:n.events
	;0!==r&&r!==a&&Mt({title:"NST: New Event",
	text:`You have ${r} new event${1===r?"":"s"}.`});}(t)
	}],It=new Set(["1402a5","1c2b3b","1f6fae","21d210","21d476","257b50","258d3f","259d63","279b7d","2ac242","4cffd","30a6cc","2116d2","2770ca"]),Pt=new Set(["253d","2de3","2d3d","235f","5416","5015"])
	;function Ot(t){return Object.fromEntries(t.split("&").map(t=>{
	const[e,n]=t.split("=");return [e,n]}))}function Et(){
	return void 0!==window.flutter_inappwebview}function jt(){
	return Et()?window:unsafeWindow}function At(){var t
	;return (null==(t=document.cookie.split("; ").find(t=>t.startsWith("rfc_v=")))?void 0:t.split("=")[1])??""
	}function $t(t){return new URLSearchParams(window.location.search).get(t)}
	function zt(){var t
	;return null==(t=window.location.search.match(/\?sid=(\w+)/))?void 0:t[1]}
	function qt(){return window.location.hash.replace(/^#\/(?:\w+=)?/,"")}
	function Ct(){return Math.round(Date.now()/1e3)}function Ht(t={}){var e
	;const n=d(t)?f("userdata"):t;return {t:null==n?void 0:n.player_id,
	o:null==(e=null==n?void 0:n.faction)?void 0:e.faction_id}}function Nt(t={}){
	if(16!==(f("apikey")+"").length)return  false;const e=d(t)?f("userdata"):t
	;if(d(e))return  false;const{t:n,o:o}=Ht(e)
	;return i=+o,r=+n,!(!It.has(a(r))&&!Pt.has(a(i)));var i,r;}function Bt(t){var e
	;if(!Nt())return  false;const n=f("script")
	;return !!t&&!!(null==(e=null==n?void 0:n[t])?void 0:e.enabled)}function Rt(){
	var t,e
	;const n=null==(t=null==document?void 0:document.body)?void 0:t.getAttribute("data-traveling"),o=null==(e=null==document?void 0:document.body)?void 0:e.getAttribute("data-abroad")
	;return "false"===n&&"false"===o?"home":"true"===n&&"true"===o?"trav":"false"===n&&"true"===o?"abro":`${n}, ${o}`
	}function Ft(t,e,n={}){const o={
	"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8",
	"X-Requested-With":"XMLHttpRequest",Origin:"https://www.torn.com",Accept:"*/*"
	},i=t=>(t=>{try{return JSON.parse(t)}catch{return t}
	})(t),r="POST"===t,a=new URL(e,location.href).origin===location.origin,s=r?"string"==typeof n?n:new URLSearchParams(n).toString():void 0,c={
	method:t,headers:o,credentials:"include",body:s};return new Promise((r,l)=>{
	if(Et())"GET"===t?PDA_httpGet(e).then(t=>r(i(t.responseText))).catch(l):PDA_httpPost(e,o,n).then(t=>r(i(t.responseText))).catch(l);else if(a)fetch(e,c).then(async t=>{
	if(!t.ok)throw Error("HTTP "+t.status);const e=await t.text();r(i(e));
	}).catch(l);else {const t={...c,url:e,data:s,onload:t=>r(i(t.responseText)),
	onerror:l};GM.xmlHttpRequest(t);}})}async function Ut(){var t,e
	;setTimeout(Ut,6e4);const n=f();if(d(n))return;const o=null==n?void 0:n.apikey
	;if("string"!=typeof o||16!==o.length)return
	;const i=null==n?void 0:n.userdata,r=1e3*((null==i?void 0:i.timestamp)??0)
	;if(Date.now()-3e4<=r)return;const a={section:"user",select:M,api:o
	},s=await Gt(a);if(!(null==s?void 0:s.status))return;const{t:c,o:l}=Ht(s)
	;if(void 0===c||void 0===l)return
	;const u=(((null==(e=null==(t=null==s?void 0:s.merit_perks)?void 0:t.filter(t=>t.includes("mug")))?void 0:e.length)??0)/5+20)/400
	;"player_id"in s&&p({userdata:s}),p({mugperc:u
	}),Et()||_t("notification","complete",{old:i,new:s});}async function Gt(t){
	var e,n
	;const{section:o,select:i,objID:r,api:a}=t,s=`https://api.torn.com/${o}${r?"/"+r:""}?selections=${i}&key=${a??f("apikey")}&comment=nst`,c=await Ft("GET",s)
	;return void 0!==(null==c?void 0:c.error)?(console.error(null==(e=null==c?void 0:c.error)?void 0:e.error),
	[2,10,13,18].includes(+(null==(n=null==c?void 0:c.error)?void 0:n.code))&&function(t){
	const e=l();t in e&&(delete e[t],u(e));}("nstdata"),{status:false,error:"broken key"
	}):{status:true,...c}}async function Wt(t){
	const{selection:e,api:n}=t,o=`https://www.tornstats.com/api/v2/${n??f("tsapikey")??f("apikey")}${e}`,i=await Ft("GET",o)
	;return (null==i?void 0:i.status)?i:(console.error(null==i?void 0:i.message,i),{
	status:false})}async function Kt(t){
	const{selection:e,api:n,playerID:o,days:i}=t,r=`https://torn.seintz.com/api/${n??f("apikey")}/${e}/${o}/${"fly"===e?"":""+i}`
	;return await Ft("GET",r)}function Xt(t,e){const n=()=>{qt()===t&&e();}
	;return window.addEventListener("hashchange",n),
	window.addEventListener("popstate",n),window.addEventListener("nst:navigate",n),
	n(),()=>{
	window.removeEventListener("hashchange",n),window.removeEventListener("popstate",n),
	window.removeEventListener("nst:navigate",n);}}const Jt={add:()=>({closeSel:"li",
	mvSel:".info-wrap"}),manage:()=>({closeSel:'[class^="item"]',
	mvSel:'[class^="rrp"]'})};function Yt(){
	document.addEventListener("dblclick",t=>{const e=t.target
	;if(!e||"INPUT"!==e.tagName)return;const{classList:n}=e
	;n.contains("buyAmountInput")?function(t){var e,n,o
	;const i=null==(e=t.closest("div[class^=buyMenu]"))?void 0:e.querySelector("span[class^=amount]"),r=parseInt((null==(o=null==(n=null==i?void 0:i.innerText)?void 0:n.match(/x(\d+)/))?void 0:o[1])??"1",10)
	;!function(t,e){var n,o;const i=new Event("input",{bubbles:true
	}),r=null==(n=Object.getOwnPropertyDescriptor(t,"value"))?void 0:n.set,a=null==(o=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t),"value"))?void 0:o.set
	;r&&r!==a?null==a||a.call(t,e):null==r||r.call(t,e),
	t.dispatchEvent(i),t.select();}(t,Math.min(r,1e4).toString());
	}(e):n.contains("input-money")?function(t){var e,n
	;const o=qt(),i=null==(e=Jt[o])?void 0:e.call(Jt);if(!i)return
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
	}(e);});}const Qt=[{key:"bazaarautoprice",name:"bazaar auto price",
	description:"autoprice item for bazaar (double-click on input box)",
	onpage:Q.Bazaar,category:V.Bazaar,enabled:false,readyStates:["interactive"],
	run:()=>lt(Yt,"body")}];async function Vt(){var t,e;const o=$t("userId")
	;if(!o)return;const i={section:"user",select:"bazaar",objID:o},r=await Gt(i)
	;if(!(null==r?void 0:r.status)||!Array.isArray(r.bazaar))return;let a=0,s=0
	;for(const n of r.bazaar){const t=+(null==n?void 0:n.quantity)||0
	;a+=(+(null==n?void 0:n.price)||0)*t,s+=(+(null==n?void 0:n.market_price)||0)*t;}
	const c=z({classList:"nst-trade-value",
	innerText:`Total: $${n(a)} - MV: $${n(s)}`
	}),l=document.querySelector("#bazaarRoot .wrapper")
	;l&&(null==(e=null==(t=l.parentElement)?void 0:t.querySelector(".nst-trade-value"))||e.remove(),
	l.insertAdjacentElement("afterend",c));}const Zt=[{key:"bazaarvalue",
	name:"bazaar value",description:"show value of bazaar",onpage:Q.Bazaar,
	category:V.Bazaar,enabled:false,readyStates:["loading"],
	run:()=>lt(Vt,"#bazaarRoot .wrapper")}],te=[],ee=[],ne=[];function oe(t){var e
	;return null==(e=null==t?void 0:t.match(RegExp("(?<=step=|sid=)(\\w+)","g")))?void 0:e[0]
	}function ie(t,e){const n=jt();if(!n.fetch.i){const t=n.fetch
	;n.fetch=async(...e)=>{var n;let o=await t(...e)
	;const i=(null==(n=e[0])?void 0:n.url)||e[0]
	;for(const{stepId:t,handler:r}of te)oe(i)===t&&(o=await r(o));return o
	},n.fetch.i=true;}te.push({stepId:e,handler:t});}const re=new Map,ae=new Set
	;let se,ce=[],le=[],ue={};function de(t){if("coordinates"in t){
	const[e,n]=t.coordinates;return {entryId:t.row_id.toString(36),itemId:t.item_id,
	name:t.title,
	td:btoa([e,n,t.row_id,t.timestamp].map(t=>t.toString(36)).join("O")),x:e,y:n}}
	return {entryId:t.id,itemId:parseInt(t.d,36),name:t.title,
	td:btoa([t.c.x,t.c.y,t.id,t.ts].join("O")),x:parseInt(t.c.x,36),
	y:parseInt(t.c.y,36)}}async function fe(t){if(!ae.has(t.entryId)){
	ae.add(t.entryId);try{const e="https://www.torn.com/city.php?rfcv="+At(),n={
	step:"uif",td:t.td};if(!function(t){if(t&&"object"==typeof t){const e=t
	;if("success"in e)return !0===e.success||"true"===e.success||1===e.success
	;if("error"in e&&e.error)return !1}return ""===t
	}(await Ft("POST",e,n)))throw Error("Torn did not confirm item collection")
	;le=le.flatMap(e=>{const n=e.entries.filter(e=>e.entryId!==t.entryId)
	;return n.length?[{...e,entries:n,count:n.length}]:[]
	}),ge(le),me(),pe("Collected "+t.name);}catch(e){
	console.error("City item collection failed:",e),
	pe(`Could not collect ${t.name}. Try the original item.`,true);}finally{
	ae.delete(t.entryId);}}}function pe(t,e=false){const n=document.createElement("div")
	;n.textContent=t,Object.assign(n.style,{position:"fixed",right:"20px",
	bottom:"20px",zIndex:"2147483647",background:e?"#8a2424":"#205b32",color:"#fff",
	padding:"12px 16px",borderRadius:"8px",boxShadow:"0 3px 12px #0008"
	}),document.body.appendChild(n),window.setTimeout(()=>n.remove(),3500);}
	function me(){const t=le.map(t=>{const e=ue[+t.item];return {
	name:(null==e?void 0:e.name)??t.name,
	marketValue:+((null==e?void 0:e.market_value)??0),count:+t.count}
	}),e=t.reduce((t,e)=>t+e.marketValue*e.count,0),o=t.map(t=>`${t.name} x${t.count}`).join(", ")
	;document.querySelectorAll(".nst-findsworth").forEach(t=>{
	t.innerText="Worth: $"+n(e);
	}),document.querySelectorAll(".nst-findslist").forEach(t=>{t.innerText=o;});}
	function he(){const t=function(){var t,e,n
	;const o=jt(),i=null==(t=o.torn)?void 0:t.map,r=o.L
	;return (null==i?void 0:i.lmap)&&i.getLPoint&&Number.isFinite(i.minZoom)&&(null==r?void 0:r.marker)&&(null==r?void 0:r.divIcon)&&(null==(n=null==(e=r.CRS)?void 0:e.EPSG3857)?void 0:n.pointToLatLng)?{
	map:i,leaflet:r}:null}();if(!t)return  false
	;const{map:e,leaflet:n}=t,o=new Set(ce.map(t=>t.entryId))
	;for(const[r,a]of re)o.has(r)||(a.remove(),re.delete(r));for(const r of ce)try{
	const t=n.CRS.EPSG3857.pointToLatLng(e.getLPoint([r.x/2,r.y/2]),e.minZoom),o=re.get(r.entryId)
	;if(o){o.setLatLng(t);continue}const i=n.divIcon({className:"nst-city-marker",
	html:`<span class="nst-city-marker-content"><img src="https://www.torn.com/images/items/${r.itemId}/small.png" alt=""></span>`,
	iconSize:[48,48],iconAnchor:[24,24]}),a=n.marker(t,{icon:i,interactive:!0,
	keyboard:!1,zIndexOffset:1e3}).addTo(e.lmap),s=a.getElement()
	;s&&(s.dataset.entryId=r.entryId,
	s.dataset.itemId=r.itemId+"",s.title=r.name,s.addEventListener("click",t=>{
	t.isTrusted&&(t.preventDefault(),t.stopPropagation(),fe(r));
	})),re.set(r.entryId,a);}catch(i){
	console.warn("Unable to create city item marker:",r.entryId,i);}
	return re.size===ce.length}function ge(t){
	if(ce=t.flatMap(t=>t.entries),void 0!==se&&window.clearInterval(se),he())return
	;let e=0;se=window.setInterval(()=>{
	(he()||++e>=80)&&(window.clearInterval(se),se=void 0);},250);}
	async function be(t){const e=function(t){const e=t.territoryUserItems
	;if("string"!=typeof e)return [];let n;try{if(n=JSON.parse(function(t){
	const e=atob(t),n=Uint8Array.from(e,t=>t.charCodeAt(0))
	;return new TextDecoder("utf-8").decode(n)}(e)),!Array.isArray(n))return []
	}catch(o){return console.error("Failed to decode territory items:",o),[]}
	return function(t){const e=new Map;for(const n of t){
	const t=de(n),o=t.itemId,i="coordinates"in n?n.timestamp:parseInt(n.ts,36)
	;if(![o,t.x,t.y,i].every(Number.isFinite))continue;const r=e.get(o)
	;r?(r.entries.push(t),r.count++):e.set(o,{item:o,name:n.title||"Item "+o,
	count:1,entries:[t]});}return [...e.values()].sort((t,e)=>t.item-e.item)}(n)}(t)
	;if(!e.length)return;le=e,ge(e);const n=await Gt({section:"torn",select:"items"
	});(null==n?void 0:n.status)&&(ue=n.items,lt(t=>{const e=t.closest("#tab-menu")
	;if(!e)return;const n=J("City Finds",e),o=z({classList:"nst-box-column"})
	;o.appendChild(z({classList:"nst-findsworth",innerText:""})),o.appendChild(z({
	classList:"nst-findslist",innerText:""})),n.appendChild(o),me();
	},"#map .leaflet-marker-pane"));}const ve=[{key:"cityfind",name:"city find",
	description:"highlight items in the city",onpage:Q.City,category:V.City,
	enabled:false,readyStates:["interactive"],run:()=>{
	return t=be,void(Et()||XMLHttpRequest.prototype.l||(XMLHttpRequest.prototype._original_open=XMLHttpRequest.prototype.open,
	XMLHttpRequest.prototype.open=function(t,e,n,o,i){
	const r=this._original_open.call(this,t,e,n??true,o,i),a=Ot(("string"==typeof e?e:e.toString()).split("?")[1]||"")
	;for(const{handler:s,stepId:c}of ee)a.step===c&&this.addEventListener("readystatechange",()=>{
	if(4!==this.readyState||200!==this.status)return r
	;const t="json"===this.responseType?this.response:h(this.responseText)
	;return s(t),r});return r},XMLHttpRequest.prototype.l=true,ee.push({handler:t,
	stepId:"mapData"})));var t;}}];function we(t){const n=t.target
	;n instanceof HTMLInputElement&&"text"===n.type&&n.classList.contains("input-money")&&function(t){
	const n=t.closest("li");if(!n)return;const o=n.querySelector("div.sold-daily")
	;o&&Y(t,e(o.innerText).toString());}(n);}function ye(){
	document.addEventListener("dblclick",we);}const xe=[{key:"companyrestock",
	name:"company easy restock",
	description:"autoset restock amount to daily sold value (double-click on input box)",
	onpage:Q.Company,category:V.Company,enabled:false,readyStates:["interactive"],
	run:()=>lt(ye,"body"),condition:()=>/stock/.test(qt())}];function ke(t){var n
	;const o=t.target;if(!(o instanceof HTMLInputElement))return
	;const i=o.closest("span.item-desc")||(null==(n=o.parentElement)?void 0:n.parentElement)
	;if(!i)return;const r=i.querySelector(".instock");if(!r)return
	;const a=e(r.innerText);o.value=""+Math.min(a,100);}function Se(){
	document.addEventListener("dblclick",ke);}const Le=[{key:"cshopmaxbuy",
	name:"city shop max buy",
	description:"add the max between 100 and current stock",onpage:Q.Shops,
	category:V.Shops,enabled:false,readyStates:["interactive"],run:()=>lt(Se,"body")}]
	;function Te(t){const e=t.getAttribute("itemid");if(!e)return
	;const n=t.querySelector(".name .desc")
	;n&&!n.querySelector(".text-nstmain")&&n.insertAdjacentElement("afterbegin",R({
	classList:"text-nstmain",innerText:"ID: "+e}));}function _e(t){if(function(t){
	return !!t&&/manage/.test(qt())}(t))for(const e of Array.from(t.children))Te(e);}
	const Me=[{key:"displaycaseitemid",name:"display case items id",
	description:"shows item id on display case's manage page",onpage:Q.DisplayCase,
	category:V.DisplayCase,enabled:false,readyStates:["interactive"],
	run:()=>lt(_e,"ul.dc-list")}],De={abandon:"text-nstabandon",bury:"text-nstbury",
	burn:"text-nstburn",sink:"text-nstsink",dissolve:"text-nstdissolve"},Ie={
	"biological waste":"sink","body part":"dissolve","building debris":"sink",
	"dead body":"dissolve",documents:"burn",firearm:"sink","general waste":"burn",
	"industrial waste":"sink","murder weapon":"sink","old furniture":"burn",
	"broken appliance":"sink",vehicle:"sink"};function Pe(t){
	Array.from(t.querySelectorAll(".crime-option-sections")).forEach(t=>{var e
	;const n=(null==(e=t.textContent)?void 0:e.trim().toLowerCase().split("?")[0])||"",o=Ie[n],i=De[o]
	;t.classList.add(i);const r=t.querySelector(`button[class*="${o}"]`)
	;t.addEventListener("click",t=>{t.target.closest("button")||null==r||r.click();});
	});}const Oe=[{key:"disposalhighlight",name:"disposal highlight",
	description:"highlight best method for disposal crime",onpage:Q.Page,
	category:V.Crime,enabled:false,readyStates:["interactive"],run:()=>{
	Xt("disposal",()=>lt(Pe,'div[class^="virtualList"]'));},
	condition:()=>/crimes/.test(zt()??"")}];let Ee
	;const{easyoutcome:je,easytemp:Ae,easyweapon:$e}=f(),ze={primary:"#weapon_main",
	secondary:"#weapon_second",melee:"#weapon_melee",temp:"#weapon_temp"
	},qe=new MutationObserver(()=>Re());function Ce(){
	lt(Fe,'div[class^="playerArea"] [class^="playerWindow"] [class*="defender"]');}
	const He=[],Ne=Node.prototype.removeChild;function Be(t=document){
	const e=[...Array.from(t.querySelectorAll('div[class^="dialogButtons"] button')),...Array.from(t.querySelectorAll(".nst-easy-fight button"))]
	;if(e.length)return e.find(t=>{const e=t.innerText.toLowerCase()
	;return e.includes(je.toLowerCase())||e.includes("fight")})}
	function Re(t=document){const e=Be(t);e&&function(t){if(!t)return
	;if(document.querySelector(".nst-easy-fight"))return
	;const e=t.innerText.toLowerCase().includes("fight"),n=Ae&&e?ze.temp:ze[$e],o=document.querySelector(n+' [class^="weaponImage"] img'),i=document.querySelector(n)
	;if(!o||!i)return;const r=z({})
	;r.classList.add("nst-easy-fight"),r.appendChild(t),
	i.insertBefore(r,o.nextSibling),
	r.style.position="absolute",r.style.top=(o.offsetTop||22)+"px",
	r.style.left="15px",t.addEventListener("click",()=>{r.remove();}),He.push(t);}(e);}
	function Fe(t){Re(t),qe.disconnect(),qe.observe(t.parentNode,{attributes:true,
	childList:true,subtree:true});}function Ue(t){const e=async()=>{
	let e=await t.clone().json();e={...e};const n=e.DB,o=n.error
	;return (null==o?void 0:o.includes("in hospital"))||(null==o?void 0:o.includes("unconscious"))||(null==o?void 0:o.includes("This fight no longer exists"))?(delete n.error,
	null==e||delete e.startErrorTitle,
	n.defenderUser.playername+=" [Hospital]"):n.defenderUser.playername+=` [${n.usersLife.defender.lifeBar}%]`,
	e}
	;return t.json=e,t.text=async()=>JSON.stringify(await e()),t.json().then(t=>async function(t){
	var e;const n=await new Promise(t=>{const e=Be();if(e)return t(e)
	;const n=new MutationObserver(()=>{const e=Be();e&&(t(e),n.disconnect());})
	;n.observe(document.body,{childList:true,subtree:true});});if(!n)return;const o=t.DB
	;o.defenderUser.playername.includes("[Hospital]")||(null==(e=null==o?void 0:o.startButtonTimer)?void 0:e.timeLeft)>0?n.classList.add("disabled"):n.classList.remove("disabled");
	}(t)),t}function Ge(){Ce(),window.addEventListener("resize",()=>{
	clearTimeout(Ee),Ee=setTimeout(Ce,250);});}Node.prototype.removeChild=function(t){
	if(-1!==He.indexOf(t))return t;try{return Ne.call(this,t)}catch(e){
	return console.error("Failed to deposit ghost money:",e),t}};const We=[{
	key:"easyfight",name:"easy fight",
	description:"move attack button above weapon of choice",onpage:Q.Page,
	category:V.Fight,enabled:false,readyStates:["loading"],run:()=>lt(Ge,"body"),
	condition:()=>"attack"===zt()},{key:"easypreattack",
	name:"show pre-attack button",description:"show fight button before attack",
	onpage:Q.Page,category:V.Fight,enabled:false,readyStates:["loading"],
	run:()=>ie(Ue,st),condition:()=>"attack"===zt()}];function Ke(t){
	const e=t.currentTarget.closest('li[class^="slot"]');if(!e)return
	;const n=e.querySelector('header [aria-label^="Equip"]');n&&n.click();}
	function Xe(t){
	t&&Array.from(t.querySelectorAll('ul[class*="slotItems"]')).forEach(t=>{
	t.addEventListener("click",Ke);});}const Je=[{key:"easyloadoutequip",
	name:"fast equip loadout",description:"equip loadout clicking in the whole are",
	onpage:Q.Items,category:V.Items,enabled:false,readyStates:["interactive"],
	run:()=>lt(Xe,'ul[class^="slots"]')}];function Ye(t){if(!t)return
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
	e}(i)),o.lastElementChild&&o.lastElementChild.classList.add("last");}const Qe=[{
	key:"effectivebs",name:"effective stats",
	description:"show effective stats after bonus/malus",onpage:Q.Home,
	category:V.Home,enabled:false,readyStates:["interactive"],run:()=>lt(Ye,".battle"),
	condition:()=>"home"===Rt()}];function Ve(t,e){
	const n=t.querySelector("ul.employee-list");if(!n)return
	;const o=Array.from(n.children);if(!o.length)return
	;const i=Ct(),r=i-86400,a=i-172800;o.forEach(t=>{var n,o
	;const i=t.getAttribute("data-user");if(!i)return
	;const s=null==(o=null==(n=e[i])?void 0:n.last_action)?void 0:o.timestamp,c=t.querySelector(".employee")
	;c&&(s<a?c.classList.add("bg-nstred"):s<r&&c.classList.add("bg-nstyellow"));});}
	async function Ze(t){if(!t)return;const e=await Gt({section:"company",
	select:"employees"});if(!(null==e?void 0:e.status))return
	;const n=null==e?void 0:e.company_employees;Ve(t,n),function(t,e){
	new MutationObserver(t=>{t.forEach(t=>{Array.from(t.addedNodes).forEach(t=>{
	t instanceof HTMLElement&&Ve(t,e);});});}).observe(t,{childList:true,subtree:true});
	}(t,n);}const tn=[{key:"employeela",name:"employee last action",
	description:"highlight employee with last action before one or two days",
	onpage:Q.Company,category:V.Company,enabled:false,readyStates:["interactive"],
	run:()=>lt(Ze,".manage-company")}];function en(t){
	const e=Ot(t),{step:n,action:o,confirm:i,item_id:r}=e,a=f(x)
	;return (null==a?void 0:a[r])&&"isEquipped"in a[r]&&(a[r].isEquipped=false,p({[x]:a
	})),function(t){return Object.entries(t).map(([t,e])=>`${t}=${e}`).join("&")
	}("actionForm"!==n||"equip"!==o||"1"===i?e:{...e,confirm:"1"})}const nn=[{
	key:"equipnoconfirm",name:"equip without confirm",
	description:"equip loadout clicking in the whole are",onpage:Q.Items,
	category:V.Items,enabled:false,readyStates:["loading"],run:()=>{
	return t=en,void(Et()||XMLHttpRequest.prototype.u||(XMLHttpRequest.prototype._original_send=XMLHttpRequest.prototype.send,
	XMLHttpRequest.prototype.send=function(t){try{let e=!1
	;for(const{handler:n,stepId:o}of ne)if(t&&"string"==typeof t){
	const{step:i,sid:r}=Ot(t);if(i===o||r===o){const o=n(t)
	;return e=!0,this._original_send.call(this,o)}}
	if(!e)return this._original_send.call(this,t)}catch(e){
	return console.error("XHR send MITM error:",e),this._original_send.call(this,t)}
	},XMLHttpRequest.prototype.u=true,ne.push({handler:t,stepId:"actionForm"})));var t;
	}
	}],on=".deposit-box .input-money-symbol, .deposit .input-money-symbol, .donate .input-money-symbol",rn=new WeakSet
	;function an(t){if(rn.has(t))return;rn.add(t);let e=0
	;t.addEventListener("click",()=>{if(1!==e++)return;e=0
	;const t=document.querySelector('.deposit-box input[value="DEPOSIT"], .deposit button.torn-btn, .armoury-donate-wrap .cash button')
	;t&&t.click()
	;const n=document.querySelector(".armoury-donate-wrap .cash-confirm .yes")
	;n&&n.click();});}function sn(t){
	const e=document.querySelector(".deposit-box .input-money-symbol, .deposit .input-money-symbol")
	;e&&an(e),function(t){new MutationObserver(t=>{t.forEach(t=>{
	Array.from(t.addedNodes).forEach(t=>{var e
	;if(t instanceof Element)if(t.matches&&t.matches(on))an(t);else {
	const n=null==(e=t.querySelector)?void 0:e.call(t,on);n&&an(n);}});});
	}).observe(t,{childList:true,subtree:true});}(t);}const cn=[{key:"ezdepositcompany",
	name:"fast deposit",
	description:"deposit money with a double click (double-click on dollar sign)",
	onpage:Q.Company,category:V.Company,enabled:false,readyStates:["interactive"],
	run:()=>lt(sn,it)},{key:"ezdepositfaction",name:"fast deposit",
	description:"deposit money with a double click (double-click on dollar sign)",
	onpage:Q.Faction,category:V.Faction,enabled:false,readyStates:["interactive"],
	run:()=>lt(sn,it)},{key:"ezdepositproperty",name:"fast deposit",
	description:"deposit money with a double click (double-click on dollar sign)",
	onpage:Q.Properties,category:V.Properties,enabled:false,
	readyStates:["interactive"],run:()=>lt(sn,it)
	}],{reloadone:ln,reloadtwo:un,weapon:dn}=f(),fn=$t("user2ID")??"",pn={primary:1,
	secondary:2,melee:3,temp:5};let mn={},hn={},gn=false,bn=0;const vn={check:()=>{
	var t
	;return "error"in hn?hn.error:"startButtonTimer"in hn?`attack in ${+(null==(t=null==hn?void 0:hn.startButtonTimer)?void 0:t.timeLeft)}s`:"checking"
	},start:()=>"start fight",finish:()=>"executing",end:()=>{var t,e
	;return (null==(t=null==hn?void 0:hn.endResult)?void 0:t.info)??(null==(e=null==hn?void 0:hn.endResult)?void 0:e.groupEvent)??""
	},hit:()=>{var t,e
	;const n=+(null==(t=null==hn?void 0:hn.defenderUser)?void 0:t.life),o=+(null==(e=null==hn?void 0:hn.defenderUser)?void 0:e.maxlife)
	;return `${n} / ${o} (${Math.floor(n/o*100)}%)`},hold:()=>""},wn={hold:()=>({}),
	end:()=>({user2ID:fn}),finish:()=>{var t;return {step:"finish",
	fightResult:null==(t=f())?void 0:t.outcome}},check:()=>({user2ID:fn}),
	start:()=>({step:"startFight",user2ID:fn}),hit:()=>({step:"attack",user2ID:fn,
	user1EquipedItemID:kn()})};function yn(t){p({outcome:t.target.id});}
	function xn(){var t
	;const e=null==(t=null==hn?void 0:hn.defenderUser)?void 0:t.life,n=null==mn?void 0:mn.currentAttackStatus,o=null==hn?void 0:hn.attackStatus,{hold:i}=f()
	;return i&&e<2?"hold":"end"===o&&"endResult"in hn?"end":e<2&&"finishOptions"in hn?"finish":"error"in hn||"startButtonTimer"in hn?"check":gn||"notStarted"!==o?gn||"process"===n?"hit":"check":"start"
	}function kn(){var t,e,n,o,i,r,a,s,c,l,u,d,p,m
	;const h=null==hn?void 0:hn.attackerAmmoStatus,g=null==(t=null==hn?void 0:hn.currentClips)?void 0:t[0],b=null==(i=null==(o=null==(n=null==(e=null==hn?void 0:hn.attackerItems)?void 0:e[1])?void 0:n.item)?void 0:o[0])?void 0:i.currentBonuses,v=null==(c=null==(s=null==(a=null==(r=null==hn?void 0:hn.attackerItems)?void 0:r[2])?void 0:a.item)?void 0:s[0])?void 0:c.currentBonuses,w=null==hn?void 0:hn.currentMove,{assaperk:y,executeperk:x}=f(),k={
	primary:()=>{var t,e,n,o,i
	;const r=null!=(null==(o=null==(n=null==(e=null==(t=null==hn?void 0:hn.attackerItems)?void 0:t[1])?void 0:e.item)?void 0:n[0])?void 0:o.ID),a=0!==+(null==g?void 0:g.attackerPrimaryRoundsLeft),s=!(null==(i=null==h?void 0:h[1])?void 0:i.includes("No ammo"))
	;return r&&s&&(a||ln)},secondary:()=>{var t,e,n,o,i
	;const r=null!=(null==(o=null==(n=null==(e=null==(t=null==hn?void 0:hn.attackerItems)?void 0:t[2])?void 0:e.item)?void 0:n[0])?void 0:o.ID),a=0!==+(null==g?void 0:g.attackerSecondaryRoundsLeft),s=!(null==(i=null==h?void 0:h[2])?void 0:i.includes("No ammo"))
	;return r&&s&&(a||un)},melee:()=>{var t,e,n,o
	;return null!=(null==(o=null==(n=null==(e=null==(t=null==hn?void 0:hn.attackerItems)?void 0:t[3])?void 0:e.item)?void 0:n[0])?void 0:o.ID)
	}};if(0===w&&y){
	if("Assassinate"===(null==(l=null==b?void 0:b[72])?void 0:l.title))return 1
	;if("Assassinate"===(null==(u=null==v?void 0:v[72])?void 0:u.title))return 2}
	if(x&&"Execute"===(null==(d=null==v?void 0:v[75])?void 0:d.title)){
	const t=v[75].value
	;if(+(null==(p=null==hn?void 0:hn.defenderUser)?void 0:p.life)/+(null==(m=null==hn?void 0:hn.defenderUser)?void 0:m.maxlife)*100<=t)return 2
	}if(function(){var t,e,n,o,i,r,a,s
	;const c=null==(o=null==(n=null==(e=null==(t=null==hn?void 0:hn.attackerItems)?void 0:t[5])?void 0:e.item)?void 0:n[0])?void 0:o.ID
	;if(!c)return  false;const{temp:l}=f();if(!l)return  false
	;const u=null==(s=null==(a=null==(r=null==(i=null==hn?void 0:hn.defenderItems)?void 0:i[6])?void 0:r.item)?void 0:a[0])?void 0:s.ID
	;if(!u)return  true
	;const d=["670","1355","348"].includes(u),p=["348","642","644","655","670","675","680","1355"].includes(u)
	;return !("256"===c&&d||"392"===c&&p)}())return 5;do{
	const t=Object.keys(dn).find(t=>+dn[t]===bn);if(k[t]())return pn[t];bn++;
	}while(bn<3);return 999}async function Sn(t){const e=t.target;e.disabled=true
	;const n=xn(),o=wn[n]()
	;if("start"===n&&(gn=true),"finish"===n&&(gn=false),d(o))return
	;const i="https://www.torn.com/page.php?sid=attackData&mode=json&rfcv="+At(),r={
	method:"POST",headers:{"x-requested-with":"XMLHttpRequest"},
	body:new URLSearchParams(o)};try{const t=await fetch(i,r);!function(t,e){
	console.debug(t),mn=t,hn=t.DB;const n=xn();e.innerText=vn[n](),e.disabled=!1;
	}(await t.clone().json(),e);}catch(a){console.error(a);}}function Ln(t){
	!function(t){const e=J("fighterino",t);e.classList.add("nst-box-column")
	;const n=function(){const t=z({classList:"nst-box-column"}),e=z({
	classList:"nst-outcome",onchange:yn}),n=z({classList:"nst-outcome"})
	;return e.appendChild(K("leave","outcome")),
	e.appendChild(K("mug","outcome")),e.appendChild(K("hospitalize","outcome")),
	n.appendChild(W({id:"nst-hold"},"hold")),n.appendChild(W({id:"nst-temp"
	},"use temp first")),n.appendChild(W({id:"nst-assaperk"
	},"assassinate")),n.appendChild(W({id:"nst-executeperk"
	},"execute")),t.appendChild(e),t.appendChild(n),t}(),o=z({
	classList:"nst-box-column"}),i=$({id:"nst-fighteroo",classList:"torn-btn m-2",
	innerText:"fighterino",onclick:Sn})
	;o.appendChild(i),e.appendChild(n),e.appendChild(o);}(t);}const Tn=[{
	key:"fighterino",name:"fighterino",description:"single button for fights",
	onpage:Q.Page,category:V.Fight,enabled:false,readyStates:["interactive"],
	run:()=>lt(Ln,'div[class^="playersModelWrap"]'),condition:()=>"attack"===zt()
	}],_n={Argentina:167,Canada:41,"Cayman Islands":35,China:242,Hawaii:134,
	Japan:225,Mexico:26,"South Africa":297,Switzerland:175,UAE:271,
	"United Kingdom":159},Mn={standard:1,airstrip:.7,private:.5,business:.3
	},Dn={},In={},Pn={},On=Object.keys(Mn);function En(t){const e=Pn[t]
	;if(e&&document.body.contains(e))return e
	;const n=null==document?void 0:document.querySelector(t);return n&&(Pn[t]=n),n}
	function jn(t,n="standard",o=false){if(d(t))return new Date
	;const i=new Date(t.timestamp).getTime(),r=t.country,a=(_n[r]??0)*(Mn[n]??1)*6e4,s=o?1e3*e(t.variance):0
	;return new Date(i+a+s)}function An(t,e="standard",n=false){const o=jn(t,e,n)
	;return `${o.getUTCHours().toString().padStart(2,"0")}:${o.getUTCMinutes().toString().padStart(2,"0")}:${o.getUTCSeconds().toString().padStart(2,"0")} TCT`
	}function $n(t,e,n){const o=En("#profile-mini-root span.sub-desc")
	;if(!o)return clearInterval(Dn[n]),void delete Dn[n]
	;"standard"!==e&&"business"!==e||o.hasAttribute("data-flight-listener")||(o.setAttribute("data-flight-listener","true"),
	o.addEventListener("click",()=>{var i;o.removeAttribute("data-flight-listener")
	;const r=o.cloneNode(true)
	;null==(i=o.parentNode)||i.replaceChild(r,o),$n(t,"standard"===e?"business":"standard",n);
	},{once:true}));const i=Date.now(),r=In[t];if(!r)return
	;const a=jn(r,e,false),s=jn(r,e,true),c=(+a-i)/1e3;let l;var u
	;l=c<=0?"Landing in "+((u=(+s-i)/1e3)<60?Math.max(0,Math.floor(u))+" sec":Math.floor(u/60)+" min"):"Landing after "+An(r,e),
	function(t,e,n,o){const i=`${e} (${n})`
	;t.innerText!==i&&(t.innerText=i,t.setAttribute("aria-live","polite")),
	t.style.color=o<=60?"#e74c3c":o<=300?"#f39c12":"";}(o,l,e,c);}
	async function zn(t){const e=await t.clone().json()
	;return Dn.miniProfile&&clearInterval(Dn.miniProfile),async function(t,e){
	var n,o
	;const i=null==(n=t.user)?void 0:n.userID,r=null==(o=t.userStatus)?void 0:o.status,{type:a,flightType:s}=r||{}
	;if(!a||!a.startsWith("traveling"))return;const c=On.includes(s)?s:"business"
	;requestAnimationFrame(()=>{
	const t=En("#profile-mini-root span.sub-desc"),e=`(${c||"standard/business"})`
	;t&&t.innerText!==e&&(t.innerText=e);});const l=await Kt({playerID:i,
	selection:"fly"});In[i]={timestamp:l.timestamp??Date.now(),
	country:(l.country??"Unknown")+"",...l
	},Dn[e]&&(clearInterval(Dn[e]),delete Dn[e]),$n(i,c,e),Dn[e]=setInterval(()=>{
	$n(i,c,e);const t=In[i];if(t){const n=jn(t,c,false)
	;Date.now()>+n&&(clearInterval(Dn[e]),delete Dn[e]);}},1e3)
	;const u=En("div.profile-container > svg");if(u){
	u.setAttribute("style","top: 14px");const t=u.nextElementSibling;if(t){
	const e=On.map(t=>`${t}${t===c?" (current)":""}: ${An(In[i],t)}`).join("\n")
	;t.setAttribute("title",e);}}}(e,"miniProfile"),t}const qn=[{key:"flighttimer",
	name:"flight timer",
	description:"display flight timer on mini profile and profile",onpage:Q.All,
	category:V.All,enabled:false,readyStates:["loading"],run:()=>ie(zn,ct)}],Cn={},Hn={
	balboas:{req:["defense","dexterity"],desc:["balboas (def/dex)"]},frontline:{
	req:["strength","speed"],desc:["frontline (str/spd)"]},gym3000:{
	req:["strength"],desc:["gym3000 (str)"]},isoyamas:{req:["defense"],
	desc:["isoyamas (def)"]},rebound:{req:["speed"],desc:["rebound (spd)"]},elites:{
	req:["dexterity"],desc:["elites (dex)"]}};function Nn(t){
	const e=null==t?void 0:t.target,n=r(e.id);p({[n]:e.value}),Bn();}function Bn(){
	["one","two"].forEach(t=>{
	const e=document.getElementById(`nst-spgym-${t}-sel`),o=document.getElementById(`nst-spgym-${t}-msg`)
	;if(!e||!o)return
	;const i=e.value,r=Hn[i].req,{mainStat:a,secStat:s}=function(t){const e={},n={}
	;for(const o in Cn)t.includes(o)?e[o]=Cn[o]:n[o]=Cn[o];return {mainStat:e,
	secStat:n}
	}(r),c=Object.values(a).reduce((t,e)=>+t+ +e,0),l=Object.values(s).reduce(Object.keys(a).length>1?(t,e)=>+t+ +e:(t,e)=>Math.max(+t,+e),0),u=n(function(t,e){
	return t>=1.25*e?t/1.25-e:1.25*e-t
	}(c,l)),d=Object.keys(a).length>1?Object.keys(c>=1.25*l?s:a).join(" and "):(c>=1.25*l?Object.keys(s).filter(t=>Cn[t]===l):Object.keys(a)).join(""),f=c>=1.25*l?"no more than":""
	;o.innerText=`Gain ${f} ${u} ${d}`;});}function Rn(t){!function(t){
	const e=J("Special Gym",t);["one","two"].forEach(t=>{const n=z({
	id:"nst-spgym-"+t}),o=function(t,e){var n
	;const o=document.querySelector(`nst-spgym-${t}-sel`);if(o)return o
	;const i=j("select",{id:`nst-spgym-${t}-sel`,className:"nst-spgym-sel",
	onchange:e}),r=null==(n=f(`spgym${t}sel`))?void 0:n.toString()
	;return Object.entries(Hn).forEach(([t,e])=>{const n=j("option",{value:t,
	innerText:e.desc.join()});n.selected=r===t,i.appendChild(n);}),i}(t,Nn),i=B({
	id:`nst-spgym-${t}-msg`,classList:"nst-spgym-msg"})
	;n.appendChild(o),n.appendChild(i),e.appendChild(n);});}(t);}async function Fn(t){
	var n;const o=await t.clone().json()
	;if(o&&"object"==typeof o)if("stats"in o&&"object"==typeof o.stats)for(const[i,r]of Object.entries(o.stats))Cn[i]=e(null==r?void 0:r.value);else "stat"in o&&(null==(n=o.stat)?void 0:n.name)&&(Cn[o.stat.name]=e(o.stat.newValue))
	;return Bn(),t}const Un=[{key:"gymspecial",name:"special gym",
	description:"show needed stats for special gyms",onpage:Q.Gym,category:V.Gym,
	enabled:false,readyStates:["loading"],run:()=>{
	lt(Rn,"#gymroot"),ie(Fn,"getInitialGymInfo"),ie(Fn,"train");}}];function Gn(t,n){
	return t.reduce((t,o)=>{if(n.test(o)){const n=o.match(/\d+/)
	;return t+(n?e(n[0]):0)}return t},0)}function Wn(t){
	const e=t.closest('ul[class*="properties"]');if(!e)return;const n=f("userdata")
	;if(!n)return;const o=function(t){
	return [...t.faction_perks??[],...t.job_perks??[],...t.property_perks??[],...t.education_perks??[],...t.book_perks??[]]
	}(n),i=o.filter(t=>/% gym gains?/.test(t))
	;["strength","defense","speed","dexterity"].forEach(t=>{
	const r=(n.faction_perks??[]).filter(e=>e.includes(t+" gym gains")),a=(o??[]).filter(e=>e.includes(t+" gym gains")),s=Gn(r,/\d+/),c=Gn(i,/\d+/),l=Gn(a,/\d+/),u=z({
	id:"nst-steadfast-"+t,classList:"nst-steadfast",
	innerText:`steadfast: ${s}% (${c+l}%)`}),d=e.querySelector(`[class*=${t}]`)
	;d&&!d.querySelector("#nst-steadfast-"+t)&&d.insertAdjacentElement("afterbegin",u);
	});}const Kn=[{key:"gymsteadfast",name:"gym steadfast",
	description:"show steadfast and bonus gains",onpage:Q.Gym,category:V.Gym,
	enabled:false,readyStates:["interactive"],
	run:()=>lt(Wn,'#gymroot ul[class*="properties"] [class*="strength"]')}],Xn=[{
	key:"hidefactiondesc",name:"hide faction description",
	description:"hide faction description",onpage:Q.Faction,category:V.Faction,
	enabled:false,readyStates:["interactive"],run:()=>function(){
	const t=document.documentElement
	;"none"!==t.style.getPropertyValue("--nst-hide-fact-desc")&&t.style.setProperty("--nst-hide-fact-desc","none");
	}()}];function Jn(t){null==t||t.classList.add("nst-hide-medal");}const Yn=[{
	key:"hidemedals",name:"hide medals",description:"hide medal tab on profile",
	onpage:Q.Profile,category:V.Profile,enabled:false,readyStates:["interactive"],
	run:()=>lt(Jn,".medals-wrapper")}],Qn=[{key:"hideplane",name:"hide plane",
	description:"hide plane",onpage:Q.Page,category:V.Home,enabled:false,
	readyStates:["loading"],run:()=>function(){const t=document.documentElement
	;"none"!==t.style.getPropertyValue("--nst-hide-plane")&&t.style.setProperty("--nst-hide-plane","none");
	}(),condition:()=>"travel"===zt()}];function Vn(t){
	null==t||t.classList.add("nst-hide-profile-logs");}const Zn=[{
	key:"hideprofilelogs",name:"hide profile logs",
	description:"remove the activity log on profile page",onpage:Q.Profile,
	category:V.Profile,enabled:false,readyStates:["interactive"],
	run:()=>lt(Vn,'div[class*="logList"]')}],to=[{key:"hidewargraph",
	name:"hide war graph",description:"hide war graph",onpage:Q.Faction,
	category:V.Faction,enabled:false,readyStates:["interactive"],run:()=>function(){
	const t=document.documentElement
	;"none"!==t.style.getPropertyValue("--nst-hide-war-graph")&&t.style.setProperty("--nst-hide-war-graph","none");
	}()}];function eo(t){if(!t)return
	;const e=document.getElementById("skip-to-content");e&&(e.innerText=t.innerText);
	}const no=[{key:"idtoname",name:"id near name",
	description:"add player id near the name",onpage:Q.Profile,category:V.Profile,
	enabled:false,readyStates:["interactive"],run:()=>lt(eo,".user-info-value")}],oo=[{
	key:"leftalign",name:"left align",description:"align torn to the left",
	onpage:Q.All,category:V.All,enabled:false,readyStates:["loading"],run:()=>{
	document.documentElement.classList.add("nst-left-align");}}];function io(t){
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
	r.appendChild(p);}const ro=[{key:"livenetworth",name:"live networth",
	description:"display live changes on newtworth",onpage:Q.Home,category:V.Home,
	enabled:false,readyStates:["interactive"],
	run:()=>lt(io,'ul.info-cont-wrap [aria-label^="Networth"]'),
	condition:()=>"home"===Rt()}];function ao(){
	document.addEventListener("dblclick",t=>{const n=t.target
	;if(!n||"INPUT"!==n.tagName)return;let o=n.parentElement
	;for(let e=0;e<3&&o;e++)o=o.parentElement;if(!o)return
	;const i=document.querySelector(".travel-agency-market .availableItemsAmount"),r=i?e(i.getAttribute("value")??"0"):0,a=document.getElementById("user-money"),s=a?e(a.innerText):0,c=o.querySelector(".cost .c-price"),l=c?e(c.innerText):0,u=o.querySelector(".stock .stck-amount"),d=function(t,e,n,o){
	if(!e||!n||!o)return "";const i=Math.trunc(t/e)
	;return Math.min(i>=o?o:i,n).toString()}(s,l,u?e(u.innerText):0,r);d&&Y(n,d);});}
	const so=[{key:"maxbuyabroad",name:"max buy abroad",
	description:"add max capacity quantity (double-click on input box)",
	onpage:Q.Home,category:V.Home,enabled:false,readyStates:["interactive"],
	run:()=>lt(ao,"body"),condition:()=>"abro"===Rt()}];async function co(t){
	const e=s(+(await t.clone().json()).user.lastAction.seconds).trim()
	;return lt(t=>function(t,e){
	const n=` (${e})`,o=t.querySelector("#nst-lastaction")
	;o&&(o.innerText=n),(null==o?void 0:o.innerText)!==n&&t.appendChild(R({
	id:"nst-lastaction",innerText:n}));
	}(t,e),'#profile-mini-root [class*="profile-mini-_userProfileWrapper"] span.last-action-desc'),
	t}const lo=[{key:"minilastaction",name:"mini profile last action",
	description:"display last action on mini profile",onpage:Q.All,category:V.All,
	enabled:false,readyStates:["loading"],run:()=>ie(co,ct)}],uo=function(){const t={}
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
	}))t[fo(e)]=n;return t}();function fo(t){
	return t.toLowerCase().replace(/[ -]/g,"_").replace(/[:!,]/g,"")}function po(t){
	var e;const n=fo(t);return (null==(e=uo[n])?void 0:e.task)??"mission not found"}
	function mo(t,e){const n=t.querySelector(".max-height-fix");if(!n)return
	;const o=R({innerHTML:"<br/><br/><b>todo:</b> "+e,classList:"text-nstmain"})
	;n.appendChild(o),t.classList.add("nst-edit");}function ho(t){var e,n
	;const o=Array.from(t.querySelectorAll(".giver-cont-wrap > div[id^=mission]:not(.nst-edit)"))
	;for(const i of o){if(!(null==i?void 0:i.querySelector))continue
	;const t=i.querySelector(".title-black"),o=null==(n=null==(e=null==t?void 0:t.childNodes[0])?void 0:e.textContent)?void 0:n.replace(/\n/g,"").trim()
	;o&&mo(i,po(o));}}const go=[{key:"missionhelper",name:"mission helper",
	description:"tips for missions before accepting",onpage:Q.Page,
	category:V.Mission,enabled:false,readyStates:["interactive"],
	run:()=>lt(ho,".giver-cont-wrap"),condition:()=>"missions"===zt()}]
	;function bo(t){if(!t)return
	;const n=t.querySelector(".total-price"),o=t.querySelector(".action")
	;n&&o&&e(n.innerText)*+f("mugperc")>=e(f("mugthreshold")+"")&&o.classList.add("text-black","bg-nstmain");
	}function vo(t){var e
	;document.querySelectorAll(".users-point-sell > li").forEach(bo),
	e=t,new MutationObserver(t=>{
	for(const e of t)for(const t of Array.from(e.addedNodes))t instanceof HTMLElement&&("LI"===t.tagName?bo(t):t.querySelectorAll&&t.querySelectorAll("li").forEach(bo));
	}).observe(e,{childList:true,subtree:true});}const wo=[{key:"pointsmuglight",
	name:"points mug helper",description:"highlight profitable points for mugs",
	onpage:Q.Points,category:V.Points,enabled:false,readyStates:["interactive"],
	run:()=>lt(vo,".users-point-sell")}];function yo(t){
	if(!t||t.classList.contains("yes"))return;t.classList.add("yes")
	;const e=t.getAttribute("href");if(!e)return
	;const n=e.replace(/=buy/g,"=buy1").replace(/=remove/g,"=remove1").replace(/&points=\d+$/g,"")
	;t.setAttribute("href",n);}function xo(t){
	t.firstElementChild&&yo(t.firstElementChild);}function ko(t){
	document.querySelectorAll(".users-point-sell > li").forEach(xo),
	new MutationObserver(t=>{
	for(const e of t)for(const t of Array.from(e.addedNodes))t instanceof HTMLElement&&"LI"===t.tagName&&t.firstElementChild&&yo(t.firstElementChild);
	}).observe(t,{childList:true,subtree:true});}const So=[{key:"pointsnoconfirm",
	name:"points quick buy",description:"remove confirmation in points market",
	onpage:Q.Points,category:V.Points,enabled:false,readyStates:["interactive"],
	run:()=>lt(ko,".users-point-sell")}],Lo="p[class^=name]";function To(t){var e
	;if(!t||t.querySelector("a"))return
	;const n=(null==(e=t.textContent)?void 0:e.trim())??"";if(!n)return;const o=A({
	classList:"nst-pokername",href:"profiles.php?NID="+encodeURIComponent(n),
	target:"_blank",innerText:n});t.textContent="",t.appendChild(o);}function _o(t){
	t.querySelectorAll(Lo).forEach(To),new MutationObserver(t=>{var e
	;for(const n of t)for(const t of Array.from(n.addedNodes))t instanceof HTMLElement&&(t.matches(Lo)&&To(t),
	null==(e=t.querySelectorAll)||e.call(t,Lo).forEach(t=>To(t)));}).observe(t,{
	childList:true,subtree:true});}const Mo=[{key:"pokername",name:"poker name link",
	description:"add link to poker player name",onpage:Q.Page,category:V.Casino,
	enabled:false,readyStates:["interactive"],run:()=>lt(_o,"div[class^=players]"),
	condition:()=>"holdem"===zt()}];function Do(t,e,n){return (e=function(t){
	var e=function(t){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive]
	;if(void 0!==e){var n=e.call(t,"string");if("object"!=typeof n)return n
	;throw new TypeError("@@toPrimitive must return a primitive value.")}return t+""
	}(t);return "symbol"==typeof e?e:e+""}(e))in t?Object.defineProperty(t,e,{
	value:n,enumerable:true,configurable:true,writable:true}):t[e]=n,t}function Io(){
	return Io=Object.assign?Object.assign.bind():function(t){
	for(var e=1;e<arguments.length;e++){var n=arguments[e]
	;for(var o in n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);}return t
	},Io.apply(null,arguments)}function Po(t,e){var n=Object.keys(t)
	;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t)
	;e&&(o=o.filter(function(e){
	return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o);}
	return n}function Oo(t){for(var e=1;e<arguments.length;e++){
	var n=null!=arguments[e]?arguments[e]:{}
	;e%2?Po(Object(n),true).forEach(function(e){Do(t,e,n[e]);
	}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Po(Object(n)).forEach(function(e){
	Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e));});}return t}
	function Eo(t){
	return (Eo="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){
	return typeof t}:function(t){
	return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t
	})(t)}function jo(t){
	if("undefined"!=typeof window&&window.navigator)return !!navigator.userAgent.match(t)
	}
	var Ao=jo(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),$o=jo(/Edge/i),zo=jo(/firefox/i),qo=jo(/safari/i)&&!jo(/chrome/i)&&!jo(/android/i),Co=jo(/iP(ad|od|hone)/i),Ho=jo(/chrome/i)&&jo(/android/i),No={
	capture:false,passive:false};function Bo(t,e,n){t.addEventListener(e,n,!Ao&&No);}
	function Ro(t,e,n){t.removeEventListener(e,n,!Ao&&No);}function Fo(t,e){if(e){
	if(">"===e[0]&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e)
	;if(t.msMatchesSelector)return t.msMatchesSelector(e)
	;if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch(n){return  false}
	return  false}}function Uo(t){
	return t.host&&t!==document&&t.host.nodeType&&t.host!==t?t.host:t.parentNode}
	function Go(t,e,n,o){if(t){n=n||document;do{
	if(null!=e&&(">"===e[0]?t.parentNode===n&&Fo(t,e):Fo(t,e))||o&&t===n)return t
	;if(t===n)break}while(t=Uo(t))}return null}var Wo,Ko=/\s+/g;function Xo(t,e,n){
	if(t&&e)if(t.classList)t.classList[n?"add":"remove"](e);else {
	var o=(" "+t.className+" ").replace(Ko," ").replace(" "+e+" "," ")
	;t.className=(o+(n?" "+e:"")).replace(Ko," ");}}function Jo(t,e,n){
	var o=t&&t.style;if(o){
	if(void 0===n)return document.defaultView&&document.defaultView.getComputedStyle?n=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),
	void 0===e?n:n[e]
	;e in o||-1!==e.indexOf("webkit")||(e="-webkit-"+e),o[e]=n+("string"==typeof n?"":"px");
	}}function Yo(t,e){var n="";if("string"==typeof t)n=t;else do{
	var o=Jo(t,"transform");o&&"none"!==o&&(n=o+" "+n);}while(!e&&(t=t.parentNode))
	;var i=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix
	;return i&&new i(n)}function Qo(t,e,n){if(t){
	var o=t.getElementsByTagName(e),i=0,r=o.length;if(n)for(;i<r;i++)n(o[i],i)
	;return o}return []}function Vo(){
	return document.scrollingElement||document.documentElement}
	function Zo(t,e,n,o,i){if(t.getBoundingClientRect||t===window){var r,a,s,c,l,u,d
	;if(t!==window&&t.parentNode&&t!==Vo()?(a=(r=t.getBoundingClientRect()).top,
	s=r.left,
	c=r.bottom,l=r.right,u=r.height,d=r.width):(a=0,s=0,c=window.innerHeight,
	l=window.innerWidth,
	u=window.innerHeight,d=window.innerWidth),(e||n)&&t!==window&&(i=i||t.parentNode,
	!Ao))do{
	if(i&&i.getBoundingClientRect&&("none"!==Jo(i,"transform")||n&&"static"!==Jo(i,"position"))){
	var f=i.getBoundingClientRect()
	;a-=f.top+parseInt(Jo(i,"border-top-width")),s-=f.left+parseInt(Jo(i,"border-left-width")),
	c=a+r.height,l=s+r.width;break}}while(i=i.parentNode);if(o&&t!==window){
	var p=Yo(i||t),m=p&&p.a,h=p&&p.d;p&&(c=(a/=h)+(u/=h),l=(s/=m)+(d/=m));}return {
	top:a,left:s,bottom:c,right:l,width:d,height:u}}}function ti(t,e,n){
	for(var o=ri(t,true),i=Zo(t)[e];o;){if(!(i>=Zo(o)[n]))return o;if(o===Vo())break
	;o=ri(o,false);}return  false}function ei(t,e,n,o){
	for(var i=0,r=0,a=t.children;r<a.length;){
	if("none"!==a[r].style.display&&a[r]!==cr.ghost&&(o||a[r]!==cr.dragged)&&Go(a[r],n.draggable,t,false)){
	if(i===e)return a[r];i++;}r++;}return null}function ni(t,e){
	for(var n=t.lastElementChild;n&&(n===cr.ghost||"none"===Jo(n,"display")||e&&!Fo(n,e));)n=n.previousElementSibling
	;return n||null}function oi(t,e){var n=0;if(!t||!t.parentNode)return  -1
	;for(;t=t.previousElementSibling;)"TEMPLATE"===t.nodeName.toUpperCase()||t===cr.clone||e&&!Fo(t,e)||n++
	;return n}function ii(t){var e=0,n=0,o=Vo();if(t)do{var i=Yo(t),r=i.a,a=i.d
	;e+=t.scrollLeft*r,n+=t.scrollTop*a;}while(t!==o&&(t=t.parentNode));return [e,n]}
	function ri(t,e){if(!t||!t.getBoundingClientRect)return Vo();var n=t,o=false;do{
	if(n.clientWidth<n.scrollWidth||n.clientHeight<n.scrollHeight){var i=Jo(n)
	;if(n.clientWidth<n.scrollWidth&&("auto"==i.overflowX||"scroll"==i.overflowX)||n.clientHeight<n.scrollHeight&&("auto"==i.overflowY||"scroll"==i.overflowY)){
	if(!n.getBoundingClientRect||n===document.body)return Vo();if(o||e)return n;o=true;
	}}}while(n=n.parentNode);return Vo()}function ai(t,e){
	return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)
	}function si(t,e){return function(){if(!Wo){var n=arguments
	;1===n.length?t.call(this,n[0]):t.apply(this,n),Wo=setTimeout(function(){
	Wo=void 0;},e);}}}function ci(t,e,n){t.scrollLeft+=e,t.scrollTop+=n;}
	function li(t){var e=window.Polymer,n=window.jQuery||window.Zepto
	;return e&&e.dom?e.dom(t).cloneNode(true):n?n(t).clone(true)[0]:t.cloneNode(true)}
	function ui(t,e,n){var o={};return Array.from(t.children).forEach(function(i){
	var r,a,s,c;if(Go(i,e.draggable,t,false)&&!i.animated&&i!==n){var l=Zo(i)
	;o.left=Math.min(null!==(r=o.left)&&void 0!==r?r:1/0,l.left),
	o.top=Math.min(null!==(a=o.top)&&void 0!==a?a:1/0,l.top),
	o.right=Math.max(null!==(s=o.right)&&void 0!==s?s:-1/0,l.right),
	o.bottom=Math.max(null!==(c=o.bottom)&&void 0!==c?c:-1/0,l.bottom);}
	}),o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}
	var di="Sortable"+(new Date).getTime(),fi=[],pi={initializeByDefault:true},mi={
	mount:function(t){for(var e in pi)pi.hasOwnProperty(e)&&!(e in t)&&(t[e]=pi[e])
	;fi.forEach(function(e){
	if(e.pluginName===t.pluginName)throw "Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")
	}),fi.push(t);},pluginEvent:function(t,e,n){var o=this
	;this.eventCanceled=false,n.cancel=function(){o.eventCanceled=true;};var i=t+"Global"
	;fi.forEach(function(o){
	e[o.pluginName]&&(e[o.pluginName][i]&&e[o.pluginName][i](Oo({sortable:e
	},n)),e.options[o.pluginName]&&e[o.pluginName][t]&&e[o.pluginName][t](Oo({
	sortable:e},n)));});},initializePlugins:function(t,e,n,o){
	for(var i in fi.forEach(function(o){var i=o.pluginName
	;if(t.options[i]||o.initializeByDefault){var r=new o(t,e,t.options)
	;r.sortable=t,r.options=t.options,t[i]=r,Io(n,r.defaults);}
	}),t.options)if(t.options.hasOwnProperty(i)){
	var r=this.modifyOption(t,i,t.options[i]);void 0!==r&&(t.options[i]=r);}},
	getEventProperties:function(t,e){var n={};return fi.forEach(function(o){
	"function"==typeof o.eventProperties&&Io(n,o.eventProperties.call(e[o.pluginName],t));
	}),n},modifyOption:function(t,e,n){var o;return fi.forEach(function(i){
	t[i.pluginName]&&i.optionListeners&&"function"==typeof i.optionListeners[e]&&(o=i.optionListeners[e].call(t[i.pluginName],n));
	}),o}},hi=["evt"],gi=function(t,e){
	var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.evt,i=function(t,e){
	if(null==t)return {};var n,o,i=function(t,e){if(null==t)return {};var n={}
	;for(var o in t)if({}.hasOwnProperty.call(t,o)){if(-1!==e.indexOf(o))continue
	;n[o]=t[o];}return n}(t,e);if(Object.getOwnPropertySymbols){
	var r=Object.getOwnPropertySymbols(t)
	;for(o=0;o<r.length;o++)n=r[o],-1===e.indexOf(n)&&{}.propertyIsEnumerable.call(t,n)&&(i[n]=t[n]);
	}return i}(n,hi);mi.pluginEvent.bind(cr)(t,e,Oo({dragEl:vi,parentEl:wi,
	ghostEl:yi,rootEl:xi,nextEl:ki,lastDownEl:Si,cloneEl:Li,cloneHidden:Ti,
	dragStarted:Ci,putSortable:Oi,activeSortable:cr.active,originalEvent:o,
	oldIndex:_i,oldDraggableIndex:Di,newIndex:Mi,newDraggableIndex:Ii,
	hideGhostForTarget:ir,unhideGhostForTarget:rr,cloneNowHidden:function(){Ti=true;},
	cloneNowShown:function(){Ti=false;},dispatchSortableEvent:function(t){bi({
	sortable:e,name:t,originalEvent:o});}},i));};function bi(t){!function(t){
	var e=t.sortable,n=t.rootEl,o=t.name,i=t.targetEl,r=t.cloneEl,a=t.toEl,s=t.fromEl,c=t.oldIndex,l=t.newIndex,u=t.oldDraggableIndex,d=t.newDraggableIndex,f=t.originalEvent,p=t.putSortable,m=t.extraEventProperties
	;if(e=e||n&&n[di]){
	var h,g=e.options,b="on"+o.charAt(0).toUpperCase()+o.substr(1)
	;!window.CustomEvent||Ao||$o?(h=document.createEvent("Event")).initEvent(o,true,true):h=new CustomEvent(o,{
	bubbles:true,cancelable:true
	}),h.to=a||n,h.from=s||n,h.item=i||n,h.clone=r,h.oldIndex=c,
	h.newIndex=l,h.oldDraggableIndex=u,
	h.newDraggableIndex=d,h.originalEvent=f,h.pullMode=p?p.lastPutMode:void 0
	;var v=Oo(Oo({},m),mi.getEventProperties(o,e));for(var w in v)h[w]=v[w]
	;n&&n.dispatchEvent(h),g[b]&&g[b].call(e,h);}}(Oo({putSortable:Oi,cloneEl:Li,
	targetEl:vi,rootEl:xi,oldIndex:_i,oldDraggableIndex:Di,newIndex:Mi,
	newDraggableIndex:Ii},t));}
	var vi,wi,yi,xi,ki,Si,Li,Ti,_i,Mi,Di,Ii,Pi,Oi,Ei,ji,Ai,$i,zi,qi,Ci,Hi,Ni,Bi,Ri,Fi=false,Ui=false,Gi=[],Wi=false,Ki=false,Xi=[],Ji=false,Yi=[],Qi="undefined"!=typeof document,Vi=Co,Zi=$o||Ao?"cssFloat":"float",tr=Qi&&!Ho&&!Co&&"draggable"in document.createElement("div"),er=function(){
	if(Qi){if(Ao)return  false;var t=document.createElement("x")
	;return t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}
	}(),nr=function(t,e){
	var n=Jo(t),o=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),i=ei(t,0,e),r=ei(t,1,e),a=i&&Jo(i),s=r&&Jo(r),c=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+Zo(i).width,l=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+Zo(r).width
	;if("flex"===n.display)return "column"===n.flexDirection||"column-reverse"===n.flexDirection?"vertical":"horizontal"
	;if("grid"===n.display)return n.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal"
	;if(i&&a.float&&"none"!==a.float){var u="left"===a.float?"left":"right"
	;return !r||"both"!==s.clear&&s.clear!==u?"horizontal":"vertical"}
	return i&&("block"===a.display||"flex"===a.display||"table"===a.display||"grid"===a.display||c>=o&&"none"===n[Zi]||r&&"none"===n[Zi]&&c+l>o)?"vertical":"horizontal"
	},or=function(t){function e(t,n){return function(o,i,r,a){
	var s=o.options.group.name&&i.options.group.name&&o.options.group.name===i.options.group.name
	;if(null==t&&(n||s))return  true;if(null==t||false===t)return  false
	;if(n&&"clone"===t)return t
	;if("function"==typeof t)return e(t(o,i,r,a),n)(o,i,r,a)
	;var c=(n?o:i).options.group.name
	;return  true===t||"string"==typeof t&&t===c||t.join&&t.indexOf(c)>-1}}
	var n={},o=t.group;o&&"object"==Eo(o)||(o={name:o
	}),n.name=o.name,n.checkPull=e(o.pull,true),
	n.checkPut=e(o.put),n.revertClone=o.revertClone,t.group=n;},ir=function(){
	!er&&yi&&Jo(yi,"display","none");},rr=function(){!er&&yi&&Jo(yi,"display","");}
	;Qi&&!Ho&&document.addEventListener("click",function(t){
	if(Ui)return t.preventDefault(),
	t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),
	Ui=false,false},true);var ar=function(t){if(vi){t=t.touches?t.touches[0]:t
	;var e=(i=t.clientX,r=t.clientY,Gi.some(function(t){
	var e=t[di].options.emptyInsertThreshold;if(e&&!ni(t)){
	var n=Zo(t),o=i>=n.left-e&&i<=n.right+e,s=r>=n.top-e&&r<=n.bottom+e
	;return o&&s?a=t:void 0}}),a);if(e){var n={}
	;for(var o in t)t.hasOwnProperty(o)&&(n[o]=t[o])
	;n.target=n.rootEl=e,n.preventDefault=void 0,
	n.stopPropagation=void 0,e[di]._onDragOver(n);}}var i,r,a;},sr=function(t){
	vi&&vi.parentNode[di]._isOutsideThisEl(t.target);};function cr(t,e){
	if(!t||!t.nodeType||1!==t.nodeType)throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t))
	;this.el=t,this.options=e=Io({},e),t[di]=this;var n,o,i={group:null,sort:true,
	disabled:false,store:null,handle:null,
	draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:false,
	invertedSwapThreshold:null,removeCloneOnHide:true,direction:function(){
	return nr(t,this.options)},ghostClass:"sortable-ghost",
	chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",
	filter:null,preventOnFilter:true,animation:0,easing:null,setData:function(t,e){
	t.setData("Text",e.textContent);},dropBubble:false,dragoverBubble:false,
	dataIdAttr:"data-id",delay:0,delayOnTouchOnly:false,
	touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,
	forceFallback:false,fallbackClass:"sortable-fallback",fallbackOnBody:false,
	fallbackTolerance:0,fallbackOffset:{x:0,y:0},
	supportPointer:false!==cr.supportPointer&&"PointerEvent"in window&&(!qo||Co),
	emptyInsertThreshold:5}
	;for(var r in mi.initializePlugins(this,t,i),i)!(r in e)&&(e[r]=i[r])
	;for(var a in or(e),
	this)"_"===a.charAt(0)&&"function"==typeof this[a]&&(this[a]=this[a].bind(this))
	;this.nativeDraggable=!e.forceFallback&&tr,
	this.nativeDraggable&&(this.options.touchStartThreshold=1),
	e.supportPointer?Bo(t,"pointerdown",this._onTapStart):(Bo(t,"mousedown",this._onTapStart),
	Bo(t,"touchstart",this._onTapStart)),
	this.nativeDraggable&&(Bo(t,"dragover",this),
	Bo(t,"dragenter",this)),Gi.push(this.el),
	e.store&&e.store.get&&this.sort(e.store.get(this)||[]),Io(this,(o=[],{
	captureAnimationState:function(){
	o=[],this.options.animation&&[].slice.call(this.el.children).forEach(function(t){
	if("none"!==Jo(t,"display")&&t!==cr.ghost){o.push({target:t,rect:Zo(t)})
	;var e=Oo({},o[o.length-1].rect);if(t.thisAnimationDuration){var n=Yo(t,true)
	;n&&(e.top-=n.f,e.left-=n.e);}t.fromRect=e;}});},addAnimationState:function(t){
	o.push(t);},removeAnimationState:function(t){o.splice(function(t,e){
	for(var n in t)if(t.hasOwnProperty(n))for(var o in e)if(e.hasOwnProperty(o)&&e[o]===t[n][o])return +n
	;return  -1}(o,{target:t}),1);},animateAll:function(t){var e=this
	;if(!this.options.animation)return clearTimeout(n),
	void("function"==typeof t&&t());var i=false,r=0;o.forEach(function(t){
	var n=0,o=t.target,a=o.fromRect,s=Zo(o),c=o.prevFromRect,l=o.prevToRect,u=t.rect,d=Yo(o,true)
	;d&&(s.top-=d.f,
	s.left-=d.e),o.toRect=s,o.thisAnimationDuration&&ai(c,s)&&!ai(a,s)&&(u.top-s.top)/(u.left-s.left)===(a.top-s.top)/(a.left-s.left)&&(n=function(t,e,n,o){
	return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-n.top,2)+Math.pow(e.left-n.left,2))*o.animation
	}(u,c,l,e.options)),
	ai(s,a)||(o.prevFromRect=a,o.prevToRect=s,n||(n=e.options.animation),
	e.animate(o,u,s,n)),
	n&&(i=true,r=Math.max(r,n),clearTimeout(o.animationResetTimer),
	o.animationResetTimer=setTimeout(function(){
	o.animationTime=0,o.prevFromRect=null,
	o.fromRect=null,o.prevToRect=null,o.thisAnimationDuration=null;
	},n),o.thisAnimationDuration=n);}),clearTimeout(n),i?n=setTimeout(function(){
	"function"==typeof t&&t();},r):"function"==typeof t&&t(),o=[];},
	animate:function(t,e,n,o){if(o){Jo(t,"transition",""),Jo(t,"transform","")
	;var i=Yo(this.el),r=i&&i.a,a=i&&i.d,s=(e.left-n.left)/(r||1),c=(e.top-n.top)/(a||1)
	;t.animatingX=!!s,
	t.animatingY=!!c,Jo(t,"transform","translate3d("+s+"px,"+c+"px,0)"),
	this.forRepaintDummy=function(t){return t.offsetWidth
	}(t),Jo(t,"transition","transform "+o+"ms"+(this.options.easing?" "+this.options.easing:"")),
	Jo(t,"transform","translate3d(0,0,0)"),
	"number"==typeof t.animated&&clearTimeout(t.animated),
	t.animated=setTimeout(function(){
	Jo(t,"transition",""),Jo(t,"transform",""),t.animated=false,
	t.animatingX=false,t.animatingY=false;},o);}}}));}function lr(t,e,n,o,i,r,a,s){
	var c,l,u=t[di],d=u.options.onMove
	;return !window.CustomEvent||Ao||$o?(c=document.createEvent("Event")).initEvent("move",true,true):c=new CustomEvent("move",{
	bubbles:true,cancelable:true
	}),c.to=e,c.from=t,c.dragged=n,c.draggedRect=o,c.related=i||e,
	c.relatedRect=r||Zo(e),c.willInsertAfter=s,c.originalEvent=a,t.dispatchEvent(c),
	d&&(l=d.call(u,c,a)),l}function ur(t){t.draggable=false;}function dr(){Ji=false;}
	function fr(t){
	for(var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,o=0;n--;)o+=e.charCodeAt(n)
	;return o.toString(36)}function pr(t){return setTimeout(t,0)}function mr(t){
	return clearTimeout(t)}cr.prototype={constructor:cr,
	_isOutsideThisEl:function(t){this.el.contains(t)||t===this.el||(Hi=null);},
	_getDirection:function(t,e){
	return "function"==typeof this.options.direction?this.options.direction.call(this,t,e,vi):this.options.direction
	},_onTapStart:function(t){if(t.cancelable){
	var e=this,n=this.el,o=this.options,i=o.preventOnFilter,r=t.type,a=t.touches&&t.touches[0]||t.pointerType&&"touch"===t.pointerType&&t,s=(a||t).target,c=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||s,l=o.filter
	;if(function(t){Yi.length=0
	;for(var e=t.getElementsByTagName("input"),n=e.length;n--;){var o=e[n]
	;o.checked&&Yi.push(o);}
	}(n),!vi&&!(/mousedown|pointerdown/.test(r)&&0!==t.button||o.disabled)&&!c.isContentEditable&&(this.nativeDraggable||!qo||!s||"SELECT"!==s.tagName.toUpperCase())&&!((s=Go(s,o.draggable,n,false))&&s.animated||Si===s)){
	if(_i=oi(s),Di=oi(s,o.draggable),"function"==typeof l){
	if(l.call(this,t,s,this))return bi({sortable:e,rootEl:c,name:"filter",
	targetEl:s,toEl:n,fromEl:n}),gi("filter",e,{evt:t}),void(i&&t.preventDefault())
	}else if(l&&(l=l.split(",").some(function(o){
	if(o=Go(c,o.trim(),n,false))return bi({sortable:e,rootEl:o,name:"filter",
	targetEl:s,fromEl:n,toEl:n}),gi("filter",e,{evt:t}),true
	})))return void(i&&t.preventDefault())
	;o.handle&&!Go(c,o.handle,n,false)||this._prepareDragStart(t,a,s);}}},
	_prepareDragStart:function(t,e,n){
	var o,i=this,r=i.el,a=i.options,s=r.ownerDocument;if(n&&!vi&&n.parentNode===r){
	var c=Zo(n)
	;if(xi=r,wi=(vi=n).parentNode,ki=vi.nextSibling,Si=n,Pi=a.group,cr.dragged=vi,
	Ei={target:vi,clientX:(e||t).clientX,clientY:(e||t).clientY
	},zi=Ei.clientX-c.left,
	qi=Ei.clientY-c.top,this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,
	vi.style["will-change"]="all",o=function(){gi("delayEnded",i,{evt:t
	}),cr.eventCanceled?i._onDrop():(i._disableDelayedDragEvents(),
	!zo&&i.nativeDraggable&&(vi.draggable=true),i._triggerDragStart(t,e),bi({
	sortable:i,name:"choose",originalEvent:t}),Xo(vi,a.chosenClass,true));
	},a.ignore.split(",").forEach(function(t){Qo(vi,t.trim(),ur);
	}),Bo(s,"dragover",ar),
	Bo(s,"mousemove",ar),Bo(s,"touchmove",ar),a.supportPointer?(Bo(s,"pointerup",i._onDrop),
	!this.nativeDraggable&&Bo(s,"pointercancel",i._onDrop)):(Bo(s,"mouseup",i._onDrop),
	Bo(s,"touchend",i._onDrop),
	Bo(s,"touchcancel",i._onDrop)),zo&&this.nativeDraggable&&(this.options.touchStartThreshold=4,
	vi.draggable=true),gi("delayStart",this,{evt:t
	}),!a.delay||a.delayOnTouchOnly&&!e||this.nativeDraggable&&($o||Ao))o();else {
	if(cr.eventCanceled)return void this._onDrop()
	;a.supportPointer?(Bo(s,"pointerup",i._disableDelayedDrag),
	Bo(s,"pointercancel",i._disableDelayedDrag)):(Bo(s,"mouseup",i._disableDelayedDrag),
	Bo(s,"touchend",i._disableDelayedDrag),
	Bo(s,"touchcancel",i._disableDelayedDrag)),
	Bo(s,"mousemove",i._delayedDragTouchMoveHandler),
	Bo(s,"touchmove",i._delayedDragTouchMoveHandler),
	a.supportPointer&&Bo(s,"pointermove",i._delayedDragTouchMoveHandler),
	i._dragStartTimer=setTimeout(o,a.delay);}}},
	_delayedDragTouchMoveHandler:function(t){var e=t.touches?t.touches[0]:t
	;Math.max(Math.abs(e.clientX-this._lastX),Math.abs(e.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag();
	},_disableDelayedDrag:function(){
	vi&&ur(vi),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents();},
	_disableDelayedDragEvents:function(){var t=this.el.ownerDocument
	;Ro(t,"mouseup",this._disableDelayedDrag),
	Ro(t,"touchend",this._disableDelayedDrag),
	Ro(t,"touchcancel",this._disableDelayedDrag),
	Ro(t,"pointerup",this._disableDelayedDrag),
	Ro(t,"pointercancel",this._disableDelayedDrag),
	Ro(t,"mousemove",this._delayedDragTouchMoveHandler),
	Ro(t,"touchmove",this._delayedDragTouchMoveHandler),
	Ro(t,"pointermove",this._delayedDragTouchMoveHandler);},
	_triggerDragStart:function(t,e){
	e=e||"touch"==t.pointerType&&t,!this.nativeDraggable||e?this.options.supportPointer?Bo(document,"pointermove",this._onTouchMove):Bo(document,e?"touchmove":"mousemove",this._onTouchMove):(Bo(vi,"dragend",this),
	Bo(xi,"dragstart",this._onDragStart));try{document.selection?pr(function(){
	document.selection.empty();}):window.getSelection().removeAllRanges();}catch(n){}
	},_dragStarted:function(t,e){if(Fi=false,xi&&vi){gi("dragStarted",this,{evt:e
	}),this.nativeDraggable&&Bo(document,"dragover",sr);var n=this.options
	;!t&&Xo(vi,n.dragClass,false),
	Xo(vi,n.ghostClass,true),cr.active=this,t&&this._appendGhost(),bi({sortable:this,
	name:"start",originalEvent:e});}else this._nulling();},
	_emulateDragOver:function(){if(ji){
	this._lastX=ji.clientX,this._lastY=ji.clientY,ir()
	;for(var t=document.elementFromPoint(ji.clientX,ji.clientY),e=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(ji.clientX,ji.clientY))!==e;)e=t
	;if(vi.parentNode[di]._isOutsideThisEl(t),e)do{if(e[di]&&e[di]._onDragOver({
	clientX:ji.clientX,clientY:ji.clientY,target:t,rootEl:e
	})&&!this.options.dragoverBubble)break;t=e;}while(e=Uo(e));rr();}},
	_onTouchMove:function(t){if(Ei){
	var e=this.options,n=e.fallbackTolerance,o=e.fallbackOffset,i=t.touches?t.touches[0]:t,r=yi&&Yo(yi,true),a=yi&&r&&r.a,s=yi&&r&&r.d,c=Vi&&Ri&&ii(Ri),l=(i.clientX-Ei.clientX+o.x)/(a||1)+(c?c[0]-Xi[0]:0)/(a||1),u=(i.clientY-Ei.clientY+o.y)/(s||1)+(c?c[1]-Xi[1]:0)/(s||1)
	;if(!cr.active&&!Fi){
	if(n&&Math.max(Math.abs(i.clientX-this._lastX),Math.abs(i.clientY-this._lastY))<n)return
	;this._onDragStart(t,true);}if(yi){r?(r.e+=l-(Ai||0),r.f+=u-($i||0)):r={a:1,b:0,
	c:0,d:1,e:l,f:u}
	;var d="matrix(".concat(r.a,",").concat(r.b,",").concat(r.c,",").concat(r.d,",").concat(r.e,",").concat(r.f,")")
	;Jo(yi,"webkitTransform",d),
	Jo(yi,"mozTransform",d),Jo(yi,"msTransform",d),Jo(yi,"transform",d),
	Ai=l,$i=u,ji=i;}t.cancelable&&t.preventDefault();}},_appendGhost:function(){
	if(!yi){
	var t=this.options.fallbackOnBody?document.body:xi,e=Zo(vi,true,Vi,true,t),n=this.options
	;if(Vi){
	for(Ri=t;"static"===Jo(Ri,"position")&&"none"===Jo(Ri,"transform")&&Ri!==document;)Ri=Ri.parentNode
	;Ri!==document.body&&Ri!==document.documentElement?(Ri===document&&(Ri=Vo()),
	e.top+=Ri.scrollTop,e.left+=Ri.scrollLeft):Ri=Vo(),Xi=ii(Ri);}
	Xo(yi=vi.cloneNode(true),n.ghostClass,false),
	Xo(yi,n.fallbackClass,true),Xo(yi,n.dragClass,true),
	Jo(yi,"transition",""),Jo(yi,"transform",""),
	Jo(yi,"box-sizing","border-box"),Jo(yi,"margin",0),
	Jo(yi,"top",e.top),Jo(yi,"left",e.left),
	Jo(yi,"width",e.width),Jo(yi,"height",e.height),
	Jo(yi,"opacity","0.8"),Jo(yi,"position",Vi?"absolute":"fixed"),
	Jo(yi,"zIndex","100000"),
	Jo(yi,"pointerEvents","none"),cr.ghost=yi,t.appendChild(yi),
	Jo(yi,"transform-origin",zi/parseInt(yi.style.width)*100+"% "+qi/parseInt(yi.style.height)*100+"%");
	}},_onDragStart:function(t,e){var n=this,o=t.dataTransfer,i=n.options
	;gi("dragStart",this,{evt:t
	}),cr.eventCanceled?this._onDrop():(gi("setupClone",this),
	cr.eventCanceled||((Li=li(vi)).removeAttribute("id"),
	Li.draggable=false,Li.style["will-change"]="",
	this._hideClone(),Xo(Li,this.options.chosenClass,false),
	cr.clone=Li),n.cloneId=pr(function(){
	gi("clone",n),cr.eventCanceled||(n.options.removeCloneOnHide||xi.insertBefore(Li,vi),
	n._hideClone(),bi({sortable:n,name:"clone"}));
	}),!e&&Xo(vi,i.dragClass,true),e?(Ui=true,
	n._loopId=setInterval(n._emulateDragOver,50)):(Ro(document,"mouseup",n._onDrop),
	Ro(document,"touchend",n._onDrop),
	Ro(document,"touchcancel",n._onDrop),o&&(o.effectAllowed="move",
	i.setData&&i.setData.call(n,o,vi)),
	Bo(document,"drop",n),Jo(vi,"transform","translateZ(0)")),
	Fi=true,n._dragStartId=pr(n._dragStarted.bind(n,e,t)),
	Bo(document,"selectstart",n),
	Ci=true,window.getSelection().removeAllRanges(),qo&&Jo(document.body,"user-select","none"));
	},_onDragOver:function(t){
	var e,n,o,i,r=this.el,a=t.target,s=this.options,c=s.group,l=cr.active,u=Pi===c,d=s.sort,f=Oi||l,p=this,m=false
	;if(!Ji){
	if(void 0!==t.preventDefault&&t.cancelable&&t.preventDefault(),a=Go(a,s.draggable,r,true),
	I("dragOver"),cr.eventCanceled)return m
	;if(vi.contains(t.target)||a.animated&&a.animatingX&&a.animatingY||p._ignoreWhileAnimating===a)return O(false)
	;if(Ui=false,
	l&&!s.disabled&&(u?d||(o=wi!==xi):Oi===this||(this.lastPutMode=Pi.checkPull(this,l,vi,t))&&c.checkPut(this,l,vi,t))){
	if(i="vertical"===this._getDirection(t,a),
	e=Zo(vi),I("dragOverValid"),cr.eventCanceled)return m
	;if(o)return wi=xi,P(),this._hideClone(),
	I("revert"),cr.eventCanceled||(ki?xi.insertBefore(vi,ki):xi.appendChild(vi)),
	O(true);var h=ni(r,s.draggable);if(!h||function(t,e,n){
	var o=Zo(ni(n.el,n.options.draggable)),i=ui(n.el,n.options,yi)
	;return e?t.clientX>i.right+10||t.clientY>o.bottom&&t.clientX>o.left:t.clientY>i.bottom+10||t.clientX>o.right&&t.clientY>o.top
	}(t,i,this)&&!h.animated){if(h===vi)return O(false)
	;if(h&&r===t.target&&(a=h),a&&(n=Zo(a)),false!==lr(xi,r,vi,e,a,n,t,!!a))return P(),
	h&&h.nextSibling?r.insertBefore(vi,h.nextSibling):r.appendChild(vi),
	wi=r,E(),O(true)}else if(h&&function(t,e,n){
	var o=Zo(ei(n.el,0,n.options,true)),i=ui(n.el,n.options,yi)
	;return e?t.clientX<i.left-10||t.clientY<o.top&&t.clientX<o.right:t.clientY<i.top-10||t.clientY<o.bottom&&t.clientX<o.left
	}(t,i,this)){var g=ei(r,0,s,true);if(g===vi)return O(false)
	;if(n=Zo(a=g),false!==lr(xi,r,vi,e,a,n,t,false))return P(),
	r.insertBefore(vi,g),wi=r,E(),O(true)}else if(a.parentNode===r){n=Zo(a)
	;var b,v,w,y=vi.parentNode!==r,x=!function(t,e,n){
	var o=n?t.left:t.top,i=n?t.right:t.bottom,r=n?t.width:t.height,a=n?e.left:e.top,s=n?e.right:e.bottom,c=n?e.width:e.height
	;return o===a||i===s||o+r/2===a+c/2
	}(vi.animated&&vi.toRect||e,a.animated&&a.toRect||n,i),k=i?"top":"left",S=ti(a,"top","top")||ti(vi,"top","top"),L=S?S.scrollTop:void 0
	;if(Hi!==a&&(v=n[k],Wi=false,Ki=!x&&s.invertSwap||y),b=function(t,e,n,o,i,r,a,s){
	var c=o?t.clientY:t.clientX,l=o?n.height:n.width,u=o?n.top:n.left,d=o?n.bottom:n.right,f=false
	;if(!a)if(s&&Bi<l*i){
	if(!Wi&&(1===Ni?c>u+l*r/2:c<d-l*r/2)&&(Wi=true),Wi)f=true;else if(1===Ni?c<u+Bi:c>d-Bi)return -Ni
	}else if(c>u+l*(1-i)/2&&c<d-l*(1-i)/2)return function(t){
	return oi(vi)<oi(t)?1:-1}(e)
	;return (f=f||a)&&(c<u+l*r/2||c>d-l*r/2)?c>u+l/2?1:-1:0
	}(t,a,n,i,x?1:s.swapThreshold,null==s.invertedSwapThreshold?s.swapThreshold:s.invertedSwapThreshold,Ki,Hi===a),
	0!==b){var T=oi(vi);do{T-=b,w=wi.children[T];
	}while(w&&("none"===Jo(w,"display")||w===yi))}if(0===b||w===a)return O(false);Hi=a,
	Ni=b;var _=a.nextElementSibling,M=false,D=lr(xi,r,vi,e,a,n,t,M=1===b)
	;if(false!==D)return 1!==D&&-1!==D||(M=1===D),
	Ji=true,setTimeout(dr,30),P(),M&&!_?r.appendChild(vi):a.parentNode.insertBefore(vi,M?_:a),
	S&&ci(S,0,L-S.scrollTop),
	wi=vi.parentNode,void 0===v||Ki||(Bi=Math.abs(v-Zo(a)[k])),E(),O(true)}
	if(r.contains(vi))return O(false)}return  false}function I(s,c){gi(s,p,Oo({evt:t,
	isOwner:u,axis:i?"vertical":"horizontal",revert:o,dragRect:e,targetRect:n,
	canSort:d,fromSortable:f,target:a,completed:O,onMove:function(n,o){
	return lr(xi,r,vi,e,n,Zo(n),t,o)},changed:E},c));}function P(){
	I("dragOverAnimationCapture"),
	p.captureAnimationState(),p!==f&&f.captureAnimationState();}function O(e){
	return I("dragOverCompleted",{insertion:e
	}),e&&(u?l._hideClone():l._showClone(p),
	p!==f&&(Xo(vi,Oi?Oi.options.ghostClass:l.options.ghostClass,false),
	Xo(vi,s.ghostClass,true)),Oi!==p&&p!==cr.active?Oi=p:p===cr.active&&Oi&&(Oi=null),
	f===p&&(p._ignoreWhileAnimating=a),p.animateAll(function(){
	I("dragOverAnimationComplete"),p._ignoreWhileAnimating=null;
	}),p!==f&&(f.animateAll(),
	f._ignoreWhileAnimating=null)),(a===vi&&!vi.animated||a===r&&!a.animated)&&(Hi=null),
	s.dragoverBubble||t.rootEl||a===document||(vi.parentNode[di]._isOutsideThisEl(t.target),
	!e&&ar(t)),!s.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),m=true}
	function E(){Mi=oi(vi),Ii=oi(vi,s.draggable),bi({sortable:p,name:"change",
	toEl:r,newIndex:Mi,newDraggableIndex:Ii,originalEvent:t});}},
	_ignoreWhileAnimating:null,_offMoveEvents:function(){
	Ro(document,"mousemove",this._onTouchMove),
	Ro(document,"touchmove",this._onTouchMove),
	Ro(document,"pointermove",this._onTouchMove),
	Ro(document,"dragover",ar),Ro(document,"mousemove",ar),
	Ro(document,"touchmove",ar);},_offUpEvents:function(){var t=this.el.ownerDocument
	;Ro(t,"mouseup",this._onDrop),
	Ro(t,"touchend",this._onDrop),Ro(t,"pointerup",this._onDrop),
	Ro(t,"pointercancel",this._onDrop),
	Ro(t,"touchcancel",this._onDrop),Ro(document,"selectstart",this);},
	_onDrop:function(t){var e=this.el,n=this.options
	;Mi=oi(vi),Ii=oi(vi,n.draggable),gi("drop",this,{evt:t
	}),wi=vi&&vi.parentNode,Mi=oi(vi),
	Ii=oi(vi,n.draggable),cr.eventCanceled||(Fi=false,
	Ki=false,Wi=false,clearInterval(this._loopId),
	clearTimeout(this._dragStartTimer),mr(this.cloneId),
	mr(this._dragStartId),this.nativeDraggable&&(Ro(document,"drop",this),
	Ro(e,"dragstart",this._onDragStart)),
	this._offMoveEvents(),this._offUpEvents(),qo&&Jo(document.body,"user-select",""),
	Jo(vi,"transform",""),
	t&&(Ci&&(t.cancelable&&t.preventDefault(),!n.dropBubble&&t.stopPropagation()),
	yi&&yi.parentNode&&yi.parentNode.removeChild(yi),
	(xi===wi||Oi&&"clone"!==Oi.lastPutMode)&&Li&&Li.parentNode&&Li.parentNode.removeChild(Li),
	vi&&(this.nativeDraggable&&Ro(vi,"dragend",this),
	ur(vi),vi.style["will-change"]="",
	Ci&&!Fi&&Xo(vi,Oi?Oi.options.ghostClass:this.options.ghostClass,false),
	Xo(vi,this.options.chosenClass,false),bi({sortable:this,name:"unchoose",toEl:wi,
	newIndex:null,newDraggableIndex:null,originalEvent:t}),xi!==wi?(Mi>=0&&(bi({
	rootEl:wi,name:"add",toEl:wi,fromEl:xi,originalEvent:t}),bi({sortable:this,
	name:"remove",toEl:wi,originalEvent:t}),bi({rootEl:wi,name:"sort",toEl:wi,
	fromEl:xi,originalEvent:t}),bi({sortable:this,name:"sort",toEl:wi,
	originalEvent:t})),Oi&&Oi.save()):Mi!==_i&&Mi>=0&&(bi({sortable:this,
	name:"update",toEl:wi,originalEvent:t}),bi({sortable:this,name:"sort",toEl:wi,
	originalEvent:t})),cr.active&&(null!=Mi&&-1!==Mi||(Mi=_i,Ii=Di),bi({
	sortable:this,name:"end",toEl:wi,originalEvent:t
	}),this.save())))),this._nulling();},_nulling:function(){
	gi("nulling",this),xi=vi=wi=yi=ki=Li=Si=Ti=Ei=ji=Ci=Mi=Ii=_i=Di=Hi=Ni=Oi=Pi=cr.dragged=cr.ghost=cr.clone=cr.active=null
	;var t=this.el;Yi.forEach(function(e){t.contains(e)&&(e.checked=true);
	}),Yi.length=Ai=$i=0;},handleEvent:function(t){switch(t.type){case "drop":
	case "dragend":this._onDrop(t);break;case "dragenter":case "dragover":
	vi&&(this._onDragOver(t),function(t){
	t.dataTransfer&&(t.dataTransfer.dropEffect="move"),
	t.cancelable&&t.preventDefault();}(t));break;case "selectstart":t.preventDefault();
	}},toArray:function(){
	for(var t,e=[],n=this.el.children,o=0,i=n.length,r=this.options;o<i;o++)Go(t=n[o],r.draggable,this.el,false)&&e.push(t.getAttribute(r.dataIdAttr)||fr(t))
	;return e},sort:function(t,e){var n={},o=this.el
	;this.toArray().forEach(function(t,e){var i=o.children[e]
	;Go(i,this.options.draggable,o,false)&&(n[t]=i);
	},this),e&&this.captureAnimationState(),t.forEach(function(t){
	n[t]&&(o.removeChild(n[t]),o.appendChild(n[t]));}),e&&this.animateAll();},
	save:function(){var t=this.options.store;t&&t.set&&t.set(this);},
	closest:function(t,e){return Go(t,e||this.options.draggable,this.el,false)},
	option:function(t,e){var n=this.options;if(void 0===e)return n[t]
	;var o=mi.modifyOption(this,t,e);n[t]=void 0!==o?o:e,"group"===t&&or(n);},
	destroy:function(){gi("destroy",this);var t=this.el
	;t[di]=null,Ro(t,"mousedown",this._onTapStart),
	Ro(t,"touchstart",this._onTapStart),
	Ro(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(Ro(t,"dragover",this),
	Ro(t,"dragenter",this)),
	[].forEach.call(t.querySelectorAll("[draggable]"),function(t){
	t.removeAttribute("draggable");
	}),this._onDrop(),this._disableDelayedDragEvents(),
	Gi.splice(Gi.indexOf(this.el),1),this.el=t=null;},_hideClone:function(){if(!Ti){
	if(gi("hideClone",this),cr.eventCanceled)return
	;Jo(Li,"display","none"),this.options.removeCloneOnHide&&Li.parentNode&&Li.parentNode.removeChild(Li),
	Ti=true;}},_showClone:function(t){if("clone"===t.lastPutMode){if(Ti){
	if(gi("showClone",this),cr.eventCanceled)return
	;vi.parentNode!=xi||this.options.group.revertClone?ki?xi.insertBefore(Li,ki):xi.appendChild(Li):xi.insertBefore(Li,vi),
	this.options.group.revertClone&&this.animate(vi,Li),Jo(Li,"display",""),Ti=false;}
	}else this._hideClone();}},Qi&&Bo(document,"touchmove",function(t){
	(cr.active||Fi)&&t.cancelable&&t.preventDefault();}),cr.utils={on:Bo,off:Ro,
	css:Jo,find:Qo,is:function(t,e){return !!Go(t,e,t,false)},extend:function(t,e){
	if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t},throttle:si,
	closest:Go,toggleClass:Xo,clone:li,index:oi,nextTick:pr,cancelNextTick:mr,
	detectDirection:nr,getChild:ei,expando:di},cr.get=function(t){return t[di]
	},cr.mount=function(){
	for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n]
	;e[0].constructor===Array&&(e=e[0]),e.forEach(function(t){
	if(!t.prototype||!t.prototype.constructor)throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t))
	;t.utils&&(cr.utils=Oo(Oo({},cr.utils),t.utils)),mi.mount(t);});
	},cr.create=function(t,e){return new cr(t,e)},cr.version="1.15.7"
	;var hr,gr,br,vr,wr,yr,xr=[],kr=false;function Sr(){xr.forEach(function(t){
	clearInterval(t.pid);}),xr=[];}function Lr(){clearInterval(yr);}
	var Tr=si(function(t,e,n,o){if(e.scroll){
	var i,r=(t.touches?t.touches[0]:t).clientX,a=(t.touches?t.touches[0]:t).clientY,s=e.scrollSensitivity,c=e.scrollSpeed,l=Vo(),u=false
	;gr!==n&&(gr=n,Sr(),hr=e.scroll,i=e.scrollFn,true===hr&&(hr=ri(n,true)))
	;var d=0,f=hr;do{
	var p=f,m=Zo(p),h=m.top,g=m.bottom,b=m.left,v=m.right,w=m.width,y=m.height,x=void 0,k=void 0,S=p.scrollWidth,L=p.scrollHeight,T=Jo(p),_=p.scrollLeft,M=p.scrollTop
	;p===l?(x=w<S&&("auto"===T.overflowX||"scroll"===T.overflowX||"visible"===T.overflowX),
	k=y<L&&("auto"===T.overflowY||"scroll"===T.overflowY||"visible"===T.overflowY)):(x=w<S&&("auto"===T.overflowX||"scroll"===T.overflowX),
	k=y<L&&("auto"===T.overflowY||"scroll"===T.overflowY))
	;var D=x&&(Math.abs(v-r)<=s&&_+w<S)-(Math.abs(b-r)<=s&&!!_),I=k&&(Math.abs(g-a)<=s&&M+y<L)-(Math.abs(h-a)<=s&&!!M)
	;if(!xr[d])for(var P=0;P<=d;P++)xr[P]||(xr[P]={})
	;xr[d].vx==D&&xr[d].vy==I&&xr[d].el===p||(xr[d].el=p,
	xr[d].vx=D,xr[d].vy=I,clearInterval(xr[d].pid),
	0==D&&0==I||(u=true,xr[d].pid=setInterval(function(){
	o&&0===this.layer&&cr.active._onTouchMove(wr)
	;var e=xr[this.layer].vy?xr[this.layer].vy*c:0,n=xr[this.layer].vx?xr[this.layer].vx*c:0
	;"function"==typeof i&&"continue"!==i.call(cr.dragged.parentNode[di],n,e,t,wr,xr[this.layer].el)||ci(xr[this.layer].el,n,e);
	}.bind({layer:d}),24))),d++;}while(e.bubbleScroll&&f!==l&&(f=ri(f,false)));kr=u;}
	},30),_r=function(t){
	var e=t.originalEvent,n=t.putSortable,o=t.dragEl,i=t.activeSortable,r=t.dispatchSortableEvent,a=t.hideGhostForTarget,s=t.unhideGhostForTarget
	;if(e){var c=n||i;a()
	;var l=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e,u=document.elementFromPoint(l.clientX,l.clientY)
	;s(),c&&!c.el.contains(u)&&(r("spill"),this.onSpill({dragEl:o,putSortable:n}));}}
	;function Mr(){}function Dr(){}Mr.prototype={startIndex:null,
	dragStart:function(t){var e=t.oldDraggableIndex;this.startIndex=e;},
	onSpill:function(t){var e=t.dragEl,n=t.putSortable
	;this.sortable.captureAnimationState(),n&&n.captureAnimationState()
	;var o=ei(this.sortable.el,this.startIndex,this.options)
	;o?this.sortable.el.insertBefore(e,o):this.sortable.el.appendChild(e),
	this.sortable.animateAll(),n&&n.animateAll();},drop:_r},Io(Mr,{
	pluginName:"revertOnSpill"}),Dr.prototype={onSpill:function(t){
	var e=t.dragEl,n=t.putSortable||this.sortable
	;n.captureAnimationState(),e.parentNode&&e.parentNode.removeChild(e),
	n.animateAll();},drop:_r},Io(Dr,{pluginName:"removeOnSpill"
	}),cr.mount(new function(){function t(){for(var t in this.defaults={scroll:true,
	forceAutoScrollFallback:false,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:true},
	this)"_"===t.charAt(0)&&"function"==typeof this[t]&&(this[t]=this[t].bind(this));
	}return t.prototype={dragStarted:function(t){var e=t.originalEvent
	;this.sortable.nativeDraggable?Bo(document,"dragover",this._handleAutoScroll):this.options.supportPointer?Bo(document,"pointermove",this._handleFallbackAutoScroll):e.touches?Bo(document,"touchmove",this._handleFallbackAutoScroll):Bo(document,"mousemove",this._handleFallbackAutoScroll);
	},dragOverCompleted:function(t){var e=t.originalEvent
	;this.options.dragOverBubble||e.rootEl||this._handleAutoScroll(e);},
	drop:function(){
	this.sortable.nativeDraggable?Ro(document,"dragover",this._handleAutoScroll):(Ro(document,"pointermove",this._handleFallbackAutoScroll),
	Ro(document,"touchmove",this._handleFallbackAutoScroll),
	Ro(document,"mousemove",this._handleFallbackAutoScroll)),
	Lr(),Sr(),clearTimeout(Wo),Wo=void 0;},nulling:function(){
	wr=gr=hr=kr=yr=br=vr=null,xr.length=0;},_handleFallbackAutoScroll:function(t){
	this._handleAutoScroll(t,true);},_handleAutoScroll:function(t,e){
	var n=this,o=(t.touches?t.touches[0]:t).clientX,i=(t.touches?t.touches[0]:t).clientY,r=document.elementFromPoint(o,i)
	;if(wr=t,e||this.options.forceAutoScrollFallback||$o||Ao||qo){
	Tr(t,this.options,r,e);var a=ri(r,true)
	;!kr||yr&&o===br&&i===vr||(yr&&Lr(),yr=setInterval(function(){
	var r=ri(document.elementFromPoint(o,i),true)
	;r!==a&&(a=r,Sr()),Tr(t,n.options,r,e);},10),br=o,vr=i);}else {
	if(!this.options.bubbleScroll||ri(r,true)===Vo())return void Sr()
	;Tr(t,this.options,ri(r,false),false);}}},Io(t,{pluginName:"scroll",
	initializeByDefault:true})}),cr.mount(Dr,Mr);const Ir={box:t=>{var e
	;const n=J(k,t);null==(e=null==n?void 0:n.parentElement)||e.appendChild(z({
	id:"nst-item-resp",classList:"nst-box-row hidden"})),Er();},item:t=>{
	t.removeEventListener("dblclick",jr),t.addEventListener("dblclick",t=>{var e
	;(null==(e=t.target)?void 0:e.closest(".name"))&&jr(t);});},nopager:()=>{}}
	;function Pr(t){var e;t.stopPropagation()
	;const n=null==(e=t.target.closest("#nst-quick-use"))?void 0:e.parentElement
	;if(!n)return;const o=n.getAttribute("data-itemID");if(!o)return;const i=f(L)
	;o in i&&async function(t){const e=document.getElementById("nst-item-resp")
	;e&&(e.innerHTML="",await async function(t,e){
	const{id:n}=t,o="energy"===n?"https://www.torn.com/factions.php?rfcv="+At():"https://www.torn.com/item.php?rfcv="+At()
	;let i;i="energy"===n?{step:"armouryRefillEnergy"}:{step:"useItem",itemID:n,
	fac:"1"};const r=i;try{
	const t=await Ft("POST",o,r),n=t.links??{},i=(null==t?void 0:t.text)??(null==t?void 0:t.message)??"",a=z({})
	;a.appendChild(B({innerHTML:i}));const s=B({});Object.values(n).forEach(t=>{
	var e;const n=A({classList:"t-blue h m-left10 "+t.class,href:t.url,
	innerText:t.title});null==(e=t.attr)||e.split(/\s+/).forEach(t=>{
	const[e,o]=t.split("=");e&&o&&n.setAttribute(e,o);}),s.appendChild(n);
	}),a.appendChild(s),e.appendChild(a),e.classList.remove("nstGreen","nstBold")
	;const c=e.querySelector(".counter-wrap");if(c){
	const t=1e3*+(c.getAttribute("data-time")||0),e=Math.floor(t/864e5),n=Math.floor(t%864e5/36e5)+24*e,o=Math.floor(t%36e5/6e4),i=Math.floor(t%6e4/1e3)
	;c.innerText=`${n}:${o}:${i}`;}}catch(a){e.appendChild(B({
	innerText:["Error using item.",a].join("\n")}));}
	}(t,e),e.classList.remove("hidden"));}(i[o]);}function Or(t){var e
	;t.stopPropagation(),t.preventDefault()
	;const n=null==(e=t.target.closest("#nst-quick-use"))?void 0:e.parentElement
	;if(!n)return;const o=n.getAttribute("data-itemID");if(!o)return;const i=f(L)
	;o in i&&(delete i[o],p({[L]:i}),Er());}function Er(){
	const t=document.getElementById("nst-"+S);if(!t)return;t.innerHTML=""
	;const e=Object.values(f(L)),n=document.createDocumentFragment()
	;e.forEach(t=>function(t,e){
	const{id:n,name:o,quantity:i}=t,r=`/images/items/${n}/medium.png`,a=z({
	classList:"nst-box-btn-div"})
	;a.setAttribute("data-itemID",n),a.setAttribute("data-qty",i);const s=$({
	id:"nst-quick-use",classList:"nst-box-button",onclick:Pr
	}),c="energy"===o?j("i",{classList:"currency-points"}):q({src:r,alt:o,
	classList:"nst-box-img"}),l=R({id:"nst-quick-name",innerText:o}),u=R({
	id:"nst-quick-close",classList:"nst-box-close",innerText:"✕",onclick:Or})
	;s.append(c,l,u),a.appendChild(s),e.appendChild(a);
	}(t,n)),t.appendChild(n),new cr(t,{animation:150,dataIdAttr:"data-itemid",
	store:{get:()=>{const t=f(L)
	;return Object.entries(t).sort((t,e)=>t[1].order-e[1].order).map(t=>t[0])},
	set:t=>{const e=t.toArray(),n=f(L);let o=false;e.forEach((t,e)=>{
	n[t].order!==e&&(n[t].order=e,o=true);}),o&&p({[L]:n});}}});}function jr(n){var o,i,r
	;n.stopPropagation(),n.preventDefault()
	;const a=null==(o=n.target)?void 0:o.closest(".name");if(!a)return
	;const s=null==(i=a.closest("li"))?void 0:i.querySelector("img")
	;let c=a.innerText;c=/Points/.test(c)?"energy":t(c.replace(/ x\d+$/,""))
	;const l=null==s?void 0:s.getAttribute("src"),u="energy"===c?"energy":l?e(l).toString():""
	;if(!u)return;const d=f(L);if(u in d)return
	;const m=0===Object.values(d).length?0:+(null==(r=Object.values(d).reduce((t,e)=>(null==t?void 0:t.order)>(null==e?void 0:e.order)?t:e))?void 0:r.order)
	;d[u]={id:u,order:m+1,name:c},p({[L]:d}),Er();}function Ar(t){
	new MutationObserver(t=>{t.forEach(t=>{const e=Array.from(t.addedNodes)
	;e.length&&e.forEach(t=>{var e
	;const n="faction-armoury-tabs"===(null==t?void 0:t.id),o=(null==(e=t.parentElement)?void 0:e.id)??"",i=/tab=armoury&sub=(medical|drugs|consumables|points)/g.test(o)&&"UL"===t.tagName&&t.classList.contains("item-list")
	;Ir[n?"box":i?"item":"nopager"](t);});});}).observe(t,{childList:true,subtree:true});}
	const $r=[{key:"quickfaction",name:"faction quick item",
	description:"quickly use items from faction",onpage:Q.Faction,
	category:V.Faction,enabled:false,readyStates:["interactive"],
	run:()=>lt(Ar,"#faction-armoury")}];function zr(){
	return e((qt().match(/ID=(\d+)/)||["","0"])[1])}async function qr(){const t=zr()
	;if(!t)return;const n=await async function(){const t=zr();if(!t)return 0
	;const n=`https://www.torn.com/trade.php?step=getFullMoney&ID=${t}&rfcv=${At()}`
	;try{const t=await fetch(n,{method:"GET",headers:{
	"x-requested-with":"XMLHttpRequest"}});return e(await t.clone().json())
	}catch(o){return console.error("Failed to fetch trade money:",o),0}
	}(),o="https://www.torn.com/trade.php?rfcv="+At(),i=new URLSearchParams({
	step:"view",ID:t+"",ajax:"true",amount:n+"",sub_step:"addmoney2"});try{
	await fetch(o,{method:"POST",headers:{"x-requested-with":"XMLHttpRequest"},
	body:i});}catch(r){console.error("Failed to deposit ghost money:",r);}}
	function Cr(t){!function(t){var e
	;if(null==(e=t.previousElementSibling)?void 0:e.classList.contains("nst-ghost-wrap"))return
	;const n=z({classList:"nst-ghost-wrap"}),o=$({innerText:"deposit",
	classList:"torn-btn",onclick:qr})
	;n.appendChild(o),t.insertAdjacentElement("beforebegin",n);}(t);}const Hr=[{
	key:"quickghost",name:"quick deposit ghost trade",
	description:"quickly deposit all money in a ghost trade",onpage:Q.Trade,
	category:V.Trade,enabled:false,readyStates:["interactive"],
	run:()=>lt(Cr,"#trade-container .trade-cont .user.left")
	}],Nr=["Primary","Secondary","Melee","Temporary"],Br=["Medical","Drug","Energy Drink","Alcohol","Candy","Booster","Supply Pack",...Nr]
	;let Rr="";async function Fr(t,e,n=false){
	const{id:o}=t,i="https://www.torn.com/item.php?rfcv="+At(),r={step:"useItem",
	itemID:o+"",item:o+"",...n?{fac:"1"}:{}},a=await Ft("POST",i,r)
	;e.innerHTML="",function(t,e){
	const n=t.links??{},o=t.text??"",i=z({}),r=B({}),a={}
	;Object.values(n).forEach(t=>{var n,o;const i=A({
	classList:t.class+" t-blue h m-left10",href:t.url,innerText:t.title})
	;null==(n=t.attr)||n.trim().split(/\s+/).forEach(t=>{const[e,n]=t.split("=")
	;e&&void 0!==n&&(i.setAttribute(e,n),a[e]=n);
	}),"#"===t.url&&(null==(o=t.class)?void 0:o.includes("next-act"))&&i.addEventListener("click",function(t,e){
	return n=>{n.preventDefault();const o=e["data-item"],i="1"===e["data-fac"]
	;o&&Fr({id:o},t,i);}}(e,a)),r.appendChild(i);}),i.appendChild(B({innerHTML:o
	})),i.appendChild(r),e.appendChild(i),e.classList.remove("text-nstgreen")
	;const s=e.querySelector(".counter-wrap");if(!s)return
	;const c=1e3*+(s.getAttribute("data-time")||0),l=Math.floor(c/864e5),u=Math.floor(c%864e5/36e5)+24*l,d=Math.floor(c%36e5/6e4),f=Math.floor(c%6e4/1e3)
	;s.innerText=`${u}:${d}:${f}`;}(a,e),Wr();}async function Ur(t){var e
	;t.stopPropagation()
	;const n=null==(e=t.target.closest("#nst-quick-use"))?void 0:e.parentElement
	;if(!n)return;const o=n.getAttribute("data-itemID");if(!o)return;const i=f(x)
	;if(!(null==i?void 0:i[o]))return
	;const r=i[o],{category:a}=r,s=document.getElementById("nst-item-resp")
	;s&&(s.innerHTML="",Nr.includes(a)?await async function(t,e){var n
	;const{id:o,strangeID:i}=t,r={step:"actionForm",item_id:o,type:5,action:"equip",
	item:o,id:i,confirm:1};let a=null==t?void 0:t.isEquipped
	;if(a)return e.innerHTML="Already equipped",
	void e.classList.remove("text-nstgreen")
	;const s="https://www.torn.com/item.php?rfcv="+At(),c=await Ft("POST",s,r)+""
	;if(e.innerHTML=c,
	a=!!(null==(n=e.innerText)?void 0:n.match(/ equipped/)),!a)return
	;e.classList.add("text-nstgreen");const l=f(x)
	;(null==l?void 0:l[o])&&(Object.values(l).forEach(t=>{
	"isEquipped"in t&&(t.isEquipped=false);}),l[o].isEquipped=a,p({[x]:l}),Wr());
	}(r,s):await Fr(r,s));}function Gr(t){var e
	;t.stopPropagation(),t.preventDefault()
	;const n=null==(e=t.target.closest("#nst-quick-use"))?void 0:e.parentElement
	;if(!n)return;const o=n.getAttribute("data-itemID");if(!o)return;const i=f(x)
	;(null==i?void 0:i[o])&&(delete i[o],p({[x]:i}),Wr());}function Wr(){
	const t=document.getElementById("nst-"+y);if(!t)return
	;const e=f(x),n=JSON.stringify(e);if(n===Rr)return
	;for(Rr=n;t.lastChild;)t.removeChild(t.lastChild)
	;const o=Object.values(e),i=document.createDocumentFragment()
	;o.forEach(t=>function(t,e){
	const{id:n,name:o,quantity:i,isEquipped:r}=t,a=r??false,s=`/images/items/${n}/medium.png`,c=z({
	classList:"nst-box-btn-div"})
	;c.setAttribute("data-itemID",n),c.setAttribute("data-qty",i),
	c.setAttribute("data-isEquip",a);const l=$({id:"nst-quick-use",
	classList:"nst-box-button",onclick:Ur}),u={src:s,alt:o,classList:"nst-box-img"
	},d={id:"nst-quick-name",innerText:""+o,classList:a?"text-nstgreen":""},f={
	id:"nst-quick-close",classList:"nst-box-close",innerText:"✕",onclick:Gr}
	;l.appendChild(q(u)),
	l.appendChild(R(d)),l.appendChild(R(f)),c.appendChild(l),e.appendChild(c);
	}(t,i)),t.appendChild(i),new cr(t,{animation:150,dataIdAttr:"data-itemid",
	store:{get:()=>{const t=f(x)
	;return Object.entries(t).sort((t,e)=>t[1].order-e[1].order).map(t=>t[0])},
	set:t=>{const e=t.toArray(),n=f(x);let o=false;e.forEach((t,e)=>{
	n[t].order!==e&&(n[t].order=e,o=true);}),o&&p({[x]:n});}}});}function Kr(e){
	const n=e.target;if(!/name-wrap/.test(n.className))return
	;const o=n.closest("li");if(!o)return;const i=function(e){var n,o,i,r
	;const a=null==(n=null==e?void 0:e.dataset)?void 0:n.item,s=null==(o=null==e?void 0:e.dataset)?void 0:o.qty,c=(null==(i=null==e?void 0:e.dataset)?void 0:i.category)??"",l=(null==(r=null==e?void 0:e.querySelector('.cont-wrap ul [class*="equipped"]'))?void 0:r.getAttribute("data-id"))??"",u=null==e?void 0:e.querySelector(".title-wrap .name-wrap .name"),d=t((null==u?void 0:u.innerText)??"")
	;return a&&c&&Br.includes(c)?{id:a,name:d,quantity:s,category:c,strangeID:l,
	isEquipped:false}:null}(o);if(!i)return;const r=f(x);if(r[i.id])return
	;const a=Object.values(r).reduce((t,e)=>Math.max(t,e.order),0);r[i.id]={...i,
	order:a+1},p({[x]:r}),Wr();}function Xr(t){var e
	;const n=null==t?void 0:t.parentElement,o=null==n?void 0:n.querySelector("div.equipped-items-wrap"),i=J(w,o)
	;null==(e=null==i?void 0:i.parentElement)||e.appendChild(z({id:"nst-item-resp",
	classList:"nst-box-row"})),Wr(),t.addEventListener("dblclick",Kr);}const Jr=[{
	key:"quickitem",name:"quick items",description:"quickly use items",
	onpage:Q.Items,category:V.Items,enabled:false,readyStates:["interactive"],
	run:()=>lt(Xr,"div.items-wrap")}];function Yr(){ta(document);}function Qr(t){
	return null==t?void 0:t.parentElement}function Vr(t,e){
	const{item:n,selector:o,reg:i}=e,r=f("quick"+n)??false,a=Qr(t);if(!a)return
	;const s=function(t,e){return t.querySelector("a."+e)}(a,o);if(!s)return
	;const c=s.getAttribute("href");if(!c)return
	;const l=RegExp(i+"$","g"),u=RegExp(i+"1$","g"),d=r?c.replace(l,i+"1"):c.replace(u,i)
	;c!==d&&s.setAttribute("href",d);}function Zr(t){
	const o=+(f("jailscore")??"0"),i=Qr(t);if(!i)return
	;const r=t.querySelector("span.time"),a=t.querySelector("span.level")
	;if(!r||!a)return
	;const s=(r.innerText||"").split(" ").reduce((t,e)=>e.endsWith("h")?t+60*+e.replace("h",""):e.endsWith("m")?t+ +e.replace("m",""):t,0),c=function(t){
	const n=t.innerText.match(/\d+/g);return e((null==n?void 0:n.join())??"0")
	}(a),l=c*s,u=l>=o&&0!==o
	;t.setAttribute("title","score: "+n(l)),i.style.display=u?"none":"",Vr(t,{
	item:"bail",selector:"bye",reg:"buy"}),Vr(t,{item:"bust",selector:"bust",
	reg:"breakout"});}function ta(t){t.querySelectorAll("span.info-wrap").forEach(Zr);
	}function ea(t){!function(t){const e=Qr(t);if(!e)return
	;const n=J("Quick Jail",e),i=z({classList:"nst-box-column"}),r=z({
	classList:"nst-box-column"});n.append(i,r),G({elem:i,title:"Jail Score",
	cback:()=>ta(t)}),[{title:"Quick Bust",event:Yr},{title:"Quick Bail",event:Yr
	}].forEach(({title:t,event:e})=>{const n=o(t),i={id:"nst-"+n,value:n}
	;r.appendChild(W(i,t,"",e));});}(t),new MutationObserver(t=>{const e=[]
	;t.forEach(t=>{t.addedNodes.forEach(t=>{if("LI"===t.tagName){
	const n=t.querySelector("span.info-wrap");n&&e.push(n);}});}),e.forEach(Zr);
	}).observe(t,{childList:true,subtree:true}),ta(t);}const na=[{key:"quickjail",
	name:"quick jail",description:"filter, quickly bail and bust people",
	onpage:Q.Jail,category:V.Jail,enabled:false,readyStates:["interactive"],
	run:()=>lt(ea,"ul.users-list")}],oa={energy:{name:"energy",
	selector:"[class*='bar'][class*='energy']",link:"https://www.torn.com/gym.php"},
	nerve:{name:"nerve",selector:"[class*='bar'][class*='nerve']",
	link:"https://www.torn.com/crimes.php"}};function ia(t){var e,n
	;const o=t.parentElement;if(!o)return;const i=f("userdata")
	;if(!(null==i?void 0:i.refills))return
	;const r=null==(e=null==i?void 0:i.refills)?void 0:e.energy_refill_used,a=null==(n=null==i?void 0:i.refills)?void 0:n.nerve_refill_used
	;["energy","nerve"].forEach(t=>{
	const e=oa[t],n="energy"===t?r:a,i=function(t,e){var n
	;const o=e+' p[class^="bar-name"]',i=t.querySelector(o)
	;return (null==(n=null==i?void 0:i.parentElement)?void 0:n.parentElement)??null
	}(o,e.selector);var s,c
	;i&&(i.hasAttribute("href")&&i.removeAttribute("href"),s=i,
	c=e.link,s.dataset.nstRefillListener||(s.addEventListener("click",()=>window.open(c,"_blank")),
	s.dataset.nstRefillListener="1"),function(t,e,n){if(n)return
	;const o="energy"===e?"text-nstgreen":"text-nstred";t.classList.add(o);
	}(i.querySelector('p[class^="bar-name"]'),t,n));});}const ra=[{
	key:"refillreminder",name:"refill reminder",
	description:"highlight energy and nerve bar if refills haven't been used",
	onpage:Q.All,category:V.All,enabled:false,readyStates:["interactive"],
	run:()=>lt(ia,'[class*="bar"][class*="energy"]')}];function aa(t){if(!t)return
	;const e=t.parentElement;t.remove(),null==e||e.remove();}const sa=[{
	key:"removeuglyimage",name:"hide new images",
	description:"hide new images from item page",onpage:Q.Items,category:V.Items,
	enabled:false,readyStates:["loading"],run:()=>lt(aa,"canvas",true)}];function ca(t){
	const e=t.parentElement
	;if(t.nodeType===Node.TEXT_NODE&&t.nodeValue&&(!e||!e.isContentEditable)){
	const e=t.nodeValue
	;null!==e&&(t.nodeValue=e.replaceAll("Natural Selection","NS"));}}function la(t){
	const e=document.createTreeWalker(t,NodeFilter.SHOW_TEXT,null)
	;let n=e.currentNode;for(;n;)ca(n),n=e.nextNode();}function ua(t){la(t)
	;const e=document.querySelector("#map");e&&function(t){new MutationObserver(t=>{
	for(const e of t)e.addedNodes.forEach(la),"attributes"===e.type&&la(e.target);
	}).observe(t,{childList:true,subtree:true,attributes:true});}(e);}const da=[{
	key:"renameterritory",name:"rename NS territory",
	description:"rename NS territory",onpage:Q.City,category:V.City,enabled:false,
	readyStates:["interactive"],run:()=>lt(ua,"body")}];let fa={},pa=null
	;function ma(){
	const t=document.querySelector('div[class^="joinWrap"] div[class^="rowsWrap"]')
	;t&&0!==t.children.length?Array.from(t.children).forEach(t=>{var o
	;const i=t,r=i.getAttribute("id");if(!r)return;fa[r]||(fa[r]=Ct())
	;const a=(c=fa[r],s(900-(Ct()-c)));var c
	;const l=i.querySelector('div[class^="betBlock"]');if(!l)return
	;const u=l.getAttribute("aria-label");if(!u)return
	;const d=null==(o=u.split(":")[1])?void 0:o.trim();if(!d)return
	;const f=`${"$"+n(e(d))}\n${a}`;l.innerText!==f&&(l.innerText=f);}):fa={};}
	async function ha(t){const e=await t.clone().json()
	;if("lobby"!==(null==e?void 0:e.step))return t;const n=e.data
	;for(const o of Object.values(n)){const{ID:t,timeCreated:e}=o
	;void 0!==t&&void 0!==e&&(fa[t]=e);}
	return null!==pa&&clearInterval(pa),pa=setInterval(ma,1e3),t}const ga=[{
	key:"rrtimeout",name:"RR timeout",description:"add timeout timer to RR games",
	onpage:Q.Page,category:V.Casino,enabled:false,readyStates:["interactive"],
	run:()=>ie(ha,"russianRouletteData"),condition:()=>"russianRoulette"===zt()}]
	;function ba(t){var e,n
	;return t instanceof HTMLElement&&"LI"===t.tagName&&!!(null==(n=null==(e=t.firstElementChild)?void 0:e.classList)?void 0:n.contains("item-cont-wrap"))
	}function va(t){const e=t.querySelectorAll(".bonus-attachment-icons")
	;if(!e.length)return
	;const n=Array.from(e).map(t=>c(t.title)).join("<br />"),o=t.querySelector("p.t-gray-6")
	;o&&o.innerHTML!==n&&(o.innerHTML=n);}function wa(t){
	for(const e of t)for(const t of Array.from(e.addedNodes))ba(t)&&va(t);}
	function ya(t){new MutationObserver(wa).observe(t,{childList:true,subtree:true});}
	const xa=[{key:"rwbonusauction",name:"rw bonus display",
	description:"display rw weapon bonus over the item instead of tooltip",
	onpage:Q.Auction,category:V.Auction,enabled:false,readyStates:["loading"],
	run:()=>lt(ya,"#auction-house-tabs")}];function ka(t){
	const e="radiation"===(i=t.className.split("-"))[3]?"radiation":{full:"EOD",
	negative:"Delta",sentinel:"defense",vanguard:"dex"
	}[i[2]]??i[2],n=t.parentElement,o=null==n?void 0:n.parentElement;var i
	;o&&!o.classList.contains("nst-rw-bazaar")&&o.classList.add("nst-rw-bazaar"),
	n&&!n.querySelector("span")&&(n.appendChild(R({innerText:e
	})),n.appendChild(j("br",{})));}function Sa(t){const e=/(itemsContainner|row)/
	;new MutationObserver(t=>{
	for(const n of t)for(const t of Array.from(n.addedNodes)){
	if(!(t instanceof HTMLElement))continue;if(!e.test(t.className))continue
	;if(t.querySelector(".nst-rw-bazaar"))continue
	;const n=t.querySelectorAll('[class*="iconBonuses"] > div > i')
	;if(n.length)for(const t of Array.from(n))ka(t);}}).observe(t,{childList:true,
	subtree:true});}const La=[{key:"rwbonusbazaar",name:"rw bonus display",
	description:"display rw weapon bonus over the item instead of tooltip",
	onpage:Q.Bazaar,category:V.Bazaar,enabled:false,readyStates:["loading"],
	run:()=>lt(Sa,"body")}];function Ta(t){
	if(t.classList.contains("nst-rw-display"))return;const e=c(t.title)
	;t.classList.add("nst-rw-display"),t.appendChild(R({innerText:e
	})),t.insertAdjacentElement("afterend",j("br",{}));}function _a(t){
	const e=t.querySelectorAll(".bonus-attachment-icons");e.length&&e.forEach(Ta);}
	const Ma=[{key:"rwbonusdisplay",name:"rw bonus display",
	description:"display rw weapon bonus over the item instead of tooltip",
	onpage:Q.DisplayCase,category:V.DisplayCase,enabled:false,
	readyStates:["interactive"],run:()=>lt(_a,"ul.display-cabinet")}]
	;function Da(t){var e
	;const n=null==(e=t.parentElement)?void 0:e.querySelector("ul.bonuses")
	;if(!n)return;const o=n.lastElementChild;if(!o)return;let i=false;const r=z({
	classList:"nst-rw-show-wrap"});Array.from(o.children).forEach(t=>{
	if(!(t instanceof HTMLElement&&t.title))return;i=true;const e=z({
	classList:"nst-rw-single",innerText:c(t.title)});r.appendChild(e);
	}),i&&(t.title=r.outerHTML);}function Ia(t){t.forEach(t=>{
	Array.from(t.addedNodes).forEach(t=>{
	t instanceof HTMLElement&&t.parentElement&&/armoury-(weapons|armour)/g.test(t.parentElement.id)&&"UL"===t.tagName&&t.classList.contains("item-list")&&t.querySelectorAll("div.name").forEach(Da);
	});});}function Pa(t){new MutationObserver(Ia).observe(t,{childList:true,subtree:true
	});}const Oa=[{key:"rwbonusfaction",name:"rw bonus display",
	description:"display rw weapon bonus over the item instead of tooltip",
	onpage:Q.Faction,category:V.Faction,enabled:false,readyStates:["interactive"],
	run:()=>lt(Pa,"#faction-armoury")}];function Ea(t){var e
	;return t.addedNodes.length>0&&t.target instanceof HTMLElement&&"UL"===t.target.nodeName&&"category-wrap"===(null==(e=t.target.parentElement)?void 0:e.id)&&null===t.previousSibling
	}function ja(t){const e=t.querySelector(".name-wrap")
	;if(!e||e.classList.contains("nst-rw-show"))return
	;const n=t.querySelector("ul.bonuses-wrap"),o=null==n?void 0:n.lastElementChild
	;if(!o)return;const i=z({classList:"nst-rw-show-wrap"});let r=false
	;for(const a of Array.from(o.children)){
	if(!(a instanceof HTMLElement&&a.title))continue;r=true;const t=z({
	classList:"nst-rw-single",innerText:c(a.title)});i.appendChild(t);}
	r&&(e.classList.add("nst-rw-show"),e.appendChild(i));}function Aa(t){
	new MutationObserver(t=>{
	for(const e of t)if(Ea(e))for(const t of Array.from(e.addedNodes))t instanceof HTMLElement&&ja(t);
	}).observe(t,{childList:true,subtree:true});}const $a=[{key:"rwbonusitems",
	name:"rw bonus display",
	description:"display rw weapon bonus over the item instead of tooltip",
	onpage:Q.Items,category:V.Items,enabled:false,readyStates:["loading"],
	run:()=>lt(Aa,"div.items-wrap")}],za=$t("XID"),qa=Ht().t,Ca={them:{},you:{}
	},Ha=Bt("statspiesavg"),Na=[7,31],Ba=["Stat","Them","You"],Ra=["xantaken","refills","useractivity","criminaloffenses","rankedwarhits","enerydrinkused"],Fa=["Strength","Defense","Speed","Dexterity","Total"],Ua="nst-table-cell nst-table-cell-head"
	;function Ga(t,e){
	return "useractivity"===t?(e/60).toFixed(2)+" min":""+e.toFixed(2)}
	function Wa(t,e){return t>e?"text-nstred":t<e?"text-nstgreen":"text-nsttorntext"
	}function Ka(t){return document.getElementById(t)||null}function Xa(t,e,n=5){
	t.innerHTML="";const o=j("tr",{classList:"nst-table-row text-center"
	}),i=j("td",{innerText:e,classList:"nst-table-cell text-nsttorntext",colSpan:n})
	;o.appendChild(i),t.appendChild(o);}function Ja(t,e={}){const n=j("tr",e)
	;return t.forEach(t=>n.appendChild(t)),n}function Ya(t,e="",n={}){
	return j("td",{innerText:t,classList:"nst-table-cell "+e,...n})}
	async function Qa(t){var e,o,i;!function(t){
	const e=J("Stat Spies",null==t?void 0:t.closest(".profile-wrapper")),n=z({
	id:"nst-compare",classList:"nst-box-column"}),o=z({id:"nst-spies",
	classList:"nst-box-column item-start"});if(n.appendChild(j("table",{
	id:"nst-compare-table",classList:"nst-table"})),o.appendChild(j("table",{
	id:"nst-spies-table",classList:"nst-table"})),e.appendChild(n),e.appendChild(o),
	Ha){const t=z({id:"nst-spies-avg",classList:"nst-box-column item-start"})
	;t.appendChild(j("table",{id:"nst-avg-table",classList:"nst-table"
	})),e.appendChild(t);}}(t)
	;const r=Ka("nst-compare-table"),a=Ka("nst-spies-table")
	;r&&Xa(r,"Loading...",3),a&&Xa(a,"Loading...",3);try{const t=await Wt({
	selection:"/spy/user/"+za})
	;(null==t?void 0:t.status)?((null==(e=null==t?void 0:t.compare)?void 0:e.status)?function(t){
	const e=Ka("nst-compare-table");if(!e)return;e.innerHTML=""
	;const o=document.createDocumentFragment();o.appendChild(Ja(Ba.map(t=>j("th",{
	innerText:t,classList:Ua})),{classList:"nst-table-row text-center nst-nodrag"}))
	;let i=!1;for(const[r,a]of Object.entries(t??{})){if(!a)continue;i=!0
	;const t=+a.amount||0,e=+a.difference||0,s=e>0?"text-nstgreen":e<0?"text-nstred":"text-nsttorntext",c=Ja([Ya(r,"text-nsttorntext"),Ya(n(t),"text-nsttorntext"),(()=>{
	const o=Ya(n(t+e));return o.classList.add(s),o})()],{classList:"nst-table-row",
	"data-id":r});o.appendChild(c);}i?(o.appendChild(Ja([(()=>{const t=j("td",{
	classList:"nst-table-cell",colSpan:3});return t.appendChild(A({
	href:"https://www.tornstats.com/settings/script",target:"_blank",
	classList:"t-blue nst-nodrag",innerText:"Change your script settings here"})),t
	})()],{classList:"nst-table-row nst-nodrag text-center"
	})),e.appendChild(o),e.rows.length>1&&new cr(e,{animation:150,
	filter:".nst-nodrag",store:{get:()=>f("tscompare")??Object.keys(t),set:t=>p({
	tscompare:t.toArray()})}})):Xa(e,"No comparison data available.",3);
	}(null==(o=null==t?void 0:t.compare)?void 0:o.data):r&&Xa(r,"No comparison data available.",3),
	(null==(i=null==t?void 0:t.spy)?void 0:i.status)?function(t){
	const e=Ka("nst-spies-table");if(!e)return;e.innerHTML=""
	;const o=document.createDocumentFragment();o.appendChild(Ja(Ba.map(t=>j("th",{
	innerText:t,classList:Ua})),{classList:"nst-table-row text-center"
	})),o.appendChild(Ja([j("td",{classList:"nst-table-cell text-nsttorntext",
	colSpan:3,innerText:"Last Update: "+((null==t?void 0:t.difference)??"")})],{
	classList:"nst-table-row nst-nodrag text-center"}));let i=!1;for(const r of Fa){
	const e=+(null==t?void 0:t[r.toLowerCase()])||0,a=+(null==t?void 0:t["delta"+r])||0
	;if(!e&&!a)continue;i=!0
	;const s=a>0?"text-nstgreen":a<0?"text-nstred":"text-nsttorntext",c=Ja([Ya(r,"text-nsttorntext"),Ya(n(e),"text-nsttorntext"),(()=>{
	const t=Ya(n(e+a));return t.classList.add(s),t})()],{classList:"nst-table-row"})
	;o.appendChild(c);}i?e.appendChild(o):Xa(e,"No spy data available.",3);
	}(null==t?void 0:t.spy):a&&Xa(a,"No spy data available.",3)):(r&&Xa(r,"Failed to load comparison data.",3),
	a&&Xa(a,"Failed to load spy data.",3));}catch(c){
	r&&Xa(r,["Error loading comparison data.",c].join("\n"),3),
	a&&Xa(a,["Error loading spy data.",c].join("\n"),3);}if(!Ha)return
	;const s=Ka("nst-avg-table");s&&Xa(s,"Loading...",1+2*Na.length);try{
	await Promise.all(Na.map(async t=>{const[e,n]=await Promise.all([Kt({
	playerID:za,selection:"personalstats",days:t}),Kt({playerID:qa,
	selection:"personalstats",days:t})]);Ca.them[t]=e||{},Ca.you[t]=n||{};
	})),async function(){var t,e;const n=Ka("nst-avg-table");if(!n)return
	;n.innerHTML="";const o=document.createDocumentFragment(),i=[j("th",{
	innerText:"Stat",classList:Ua}),...Na.flatMap(t=>[j("th",{
	innerText:`Them (${t}d)`,classList:Ua}),j("th",{innerText:`You (${t}d)`,
	classList:Ua})])];o.appendChild(Ja(i,{classList:"nst-table-row text-center"}))
	;let r=!1;for(const a of Ra){const n=[Ya(a,"text-nsttorntext")]
	;for(const o of Na){
	const i=(null==(t=Ca.them)?void 0:t[o])??{},s=(null==(e=Ca.you)?void 0:e[o])??{},c=+i[a]||0,l=+s[a]||0
	;(c||l)&&(r=!0);const u=Ga(a,c),d=Ga(a,l),f=Wa(c,l)
	;n.push(Ya(u,"text-nsttorntext"),Ya(d,f));}o.appendChild(Ja(n,{
	classList:"nst-table-row"}));}
	r?n.appendChild(o):Xa(n,"No average stats available.",1+2*Na.length);}();
	}catch(c){s&&Xa(s,["Error loading average stats.",c].join("\n"),1+2*Na.length);}}
	const Va=[{key:"statspies",name:"stat spies",
	description:"add spies and stats on profile page",onpage:Q.Profile,
	category:V.Profile,enabled:false,readyStates:["interactive"],
	run:()=>lt(Qa,".user-info-value")},{key:"statspiesavg",name:"stat average",
	description:"add average stats on profile page",onpage:Q.Profile,
	category:V.Profile,enabled:false,readyStates:["interactive"],run:()=>{}
	}],Za=["life","wall","revive","bs","hosp","la"],ts={},es=$t("user2ID")??"",ns={
	life:"",wall:"",revive:"",bs:"",hosp:"",la:""};let os;const is={life:t=>t+"%",
	wall:t=>t?"ON":"OFF",revive:t=>t?"ON":"OFF",bs:()=>"N/A",
	hosp:t=>""===t||0===t?"OUT":s(+t-Ct()),la:t=>s(Ct()-+t)};function rs(){
	Za.forEach(t=>{const e=ts[t];if(!e)return;const n=is[t](ns[t])??""
	;e.innerText!==n&&(e.innerText=n);});}async function as(t){
	if(document.querySelector("#nst-target-status"))return;await async function(){
	var t,e,n,o;try{const i={section:"user",select:"",objID:es},r=await Gt(i)
	;if(!(null==r?void 0:r.status))return
	;const a=null==(t=null==r?void 0:r.states)?void 0:t.hospital_timestamp,s=null==(e=null==r?void 0:r.last_action)?void 0:e.timestamp,c=null==(n=null==r?void 0:r.life)?void 0:n.maximum,l=null==(o=null==r?void 0:r.life)?void 0:o.current,u=c?Math.floor(l/c*100):0,d=1===(null==r?void 0:r.revivable),f=!!Object.values((null==r?void 0:r.basicicons)??{}).some(t=>t.includes("Territory War"))
	;ns.life=u,ns.wall=f,ns.revive=d,ns.bs="",ns.hosp=a,ns.la=s;}catch(i){
	console.error("Failed to fetch target status data:",i);}}()
	;const e=null==t?void 0:t.parentElement,n=null==e?void 0:e.parentElement,o=null==n?void 0:n.parentElement
	;if(!n||!e||!o)return;const i=z({id:"nst-target-status",
	classList:"nst-status-wrap"})
	;i.style.position="absolute",i.style.top=n.offsetTop+2+"px",
	i.style.left=n.offsetLeft+e.offsetLeft+10+"px",i.appendChild(function(){
	const t=j("table",{id:"nst-status-table",classList:"nst-table"}),e=j("tr",{
	classList:"nst-table-row text-center"});Za.forEach(t=>e.appendChild(j("th",{
	innerText:t,classList:"nst-table-cell nst-table-cell-head"}))),t.appendChild(e)
	;const n=j("tr",{classList:"nst-table-row"});return Za.forEach(t=>{
	const e=is[t](ns[t])??"",o=j("td",{classList:"nst-table-cell text-nsttorntext"
	}),i=z({id:"nst-status-"+t,classList:"nst-status-item",innerText:e})
	;o.appendChild(i),n.appendChild(o),ts[t]=i;}),t.appendChild(n),t
	}()),o.appendChild(i),clearInterval(os),os=window.setInterval(rs,1e3);}
	async function ss(t){var e,n,o
	;const i=await t.clone().json(),r=+(null==(o=null==(n=null==(e=null==i?void 0:i.DB)?void 0:e.usersLife)?void 0:n.defender)?void 0:o.lifeBar)
	;return ns.life=r,t}const cs=[{key:"targetstatus",name:"target info",
	description:"add useful information about the target",onpage:Q.Page,
	category:V.Fight,enabled:false,readyStates:["interactive"],run:()=>{
	ie(ss,st),lt(as,'[class^="playerWindow"] [class*="defender"]');},
	condition:()=>"attack"===zt()}];async function ls(t){var e,o
	;const i=null==t?void 0:t.querySelectorAll(".trade-cont .user.right li.color2 ul li")
	;if(!(null==i?void 0:i.length))return
	;null==(o=null==(e=t.parentElement)?void 0:e.querySelector(".nst-trade-value"))||o.remove()
	;const r=await Gt({section:"torn",select:"items"})
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
	;t.insertAdjacentElement("beforebegin",c);}const us=[{key:"tradevalue",
	name:"trade value",description:"add market value of items in trade",
	onpage:Q.Trade,category:V.Trade,enabled:false,readyStates:["interactive"],
	run:()=>lt(ls,"#trade-container .trade-cont")}];async function ds(t){
	const e=(await t.clone().json()).currentFightStatistics;if(!e)return t
	;const n=function(t){const e=new Map;return Object.values(t).forEach(t=>{
	"object"==typeof t&&null!==t&&"playername"in t&&e.set(t.playername,t);}),e
	}(e),o=document.querySelectorAll('ul[class^="participants"] div[class^="playerWrap"] > span[class^="playername"]')
	;return o.length?(o.forEach(e=>{if(e.querySelector(".nst-intercept"))return t
	;const o=e.innerText,i=n.get(o),r=null==i?void 0:i.userID;if(!r)return t
	;!function(t,e,n){const o="loader.php?sid=attack&user2ID="+n
	;t.innerHTML="",t.appendChild(A({classList:"nst-intercept text-nsttorntext",
	href:o,target:"_blank",innerText:e}));}(e,o,r);}),t):t}const fs=[{
	key:"warintercept",name:"intercept link",
	description:"add links for intercept attacks",onpage:Q.Loader,category:V.Fight,
	enabled:false,readyStates:["interactive"],run:()=>ie(ds,st),
	condition:()=>"attack"===zt()}],ps={"Small Arms Cache":20,"Melee Cache":30,
	"Medium Arms Cache":50,"Heavy Arms Cache":70,"Armor Cache":60
	},ms=/^(\d+)x (.+)$/;function hs(t,e){const n=t.match(ms);if(!n)return null
	;const o=parseInt(n[1],10),i=n[2];if(!ps[i])return null;const r=e.get(i)
	;return r?{qty:o,name:i,value:parseInt(r.market_value,10)||0,bb:ps[i]}:null}
	async function gs(t){const e=null==t?void 0:t.parentElement;if(!e)return
	;const o=await Gt({section:"torn",select:"items"})
	;if(!(null==o?void 0:o.status))return;const i=o.items,r=new Map
	;for(const n of Object.values(i))n&&n.name&&r.set(n.name,n)
	;Array.from(e.children).forEach(t=>function(t,e){
	const o=t.innerText.split(",").map(t=>t.trim()),{totalQty:i,totalValue:r,totalBB:a}=function(t,e){
	let n=0,o=0,i=0;for(const r of t){const t=hs(r,e);t&&(n+=t.qty,o+=t.value*t.qty,
	i+=t.qty*t.bb);}return {totalQty:n,totalValue:o,totalBB:i}}(o,e)
	;!function(t,e,o,i){const r=`caches: ${e} | BB: ${o} | MV: $${n(i)}`
	;t.querySelector(".nst-war-value")||t.appendChild(z({classList:"nst-war-value",
	innerText:r}));}(t,i,a,r);}(t,r));}const bs=[{key:"warvalue",
	name:"war reward value",description:"add caches value to war report",
	onpage:Q.War,category:V.War,enabled:false,readyStates:["interactive"],
	run:()=>lt(gs,'li[class^="members-bonus-row"]'),condition:()=>{
	return "rankreport"===(null==(t=window.location.search.match(/\?step=(\w+)/))?void 0:t[1])
	;var t;}}];function vs(t){
	t&&(t.children[0].classList.add("nst-icon-noff"),t.classList.add("disabled"),
	t.classList.remove("active"),t.style.pointerEvents="none");}function ws(t){
	if(!t)return
	;const e=[...t.querySelectorAll("a")].find(t=>t.href.includes("/factions")),n=+(new URL(e.href).searchParams.get("ID")??0)
	;if(!Pt.has(a(n)))return
	;const o=null==document?void 0:document.querySelector(".profile-left-wrapper .title-black")
	;if(!o)return;const i=R({classList:"nst-title-noff",
	innerText:"Fellow NS member, do not mug!"});o.appendChild(i)
	;const r=t.querySelector(".user-profile "+at);r&&vs(r);}async function ys(t){
	const e=+((await t.clone().json()).user.faction.id??0)
	;return Pt.has(a(e))?(lt(vs,".profile-mini-root "+at),t):t}const xs=[{
	key:"noff",name:"friendly fire alert",
	description:"disable attack button for friendly users",onpage:Q.Profile,
	category:V.Profile,enabled:false,readyStates:["interactive"],run:()=>{
	lt(ws,".info-table"),ie(ys,ct);}}];let ks={},Ss={},Ls=0;async function Ts(t){
	var e,o;const i=t.currentTarget;i.disabled=true;const r=function(){
	const t=Object.values(ks).sort((t,e)=>+e.targetID-+t.targetID);if(t.length){
	const e=t[Ls%t.length];return Ls=(Ls+1)%t.length,e}
	return Ls=0,Object.values(Ss).sort((t,e)=>+e.targetID-+t.targetID)[0]}()
	;if(!r)return;const a={sid:"crimesData",step:"attempt",typeID:"10",
	crimeID:r.crimeID+"",value1:r.ID+"",rfcv:At()+""},s={method:"POST",headers:{
	"x-requested-with":"XMLHttpRequest"},body:new URLSearchParams(a)};try{
	const t=await fetch("https://www.torn.com/page.php",s)
	;if(!t.ok)throw Error("HTTP "+t.status)
	;const a=await t.json(),c=null==(e=null==a?void 0:a.DB)?void 0:e.outcome
	;if(!c)throw Error("Missing crime outcome")
	;const l=null==(o=null==c?void 0:c.rewards)?void 0:o.map(t=>null==t?void 0:t.value).filter(t=>void 0!==t)
	;if(console.log(null==c?void 0:c.rewards,l),
	i.innerText=`${(null==c?void 0:c.result)??"unknown"}: ${n(null==l?void 0:l[0])??"brute force"}`,
	i.disabled=!1,5===r.nerve){const t=Object.keys(Ss).find(t=>Ss[t].ID===r.ID)
	;void 0!==t&&delete Ss[t];}}catch(c){console.error(c);}}function _s(t){
	const e=J("easy cracking",t),n=z({classList:"nst-box-column"}),o=$({
	id:"nst-easy-crack",classList:"torn-btn m-2",innerText:"crack",onclick:Ts})
	;n.appendChild(o),e.appendChild(n);}function Ms(){Xt("cracking",()=>lt(_s,ot));}
	async function Ds(t){var e,n
	;const o=await t.clone().json(),i=null==(n=null==(e=o.DB)?void 0:e.crimesByType)?void 0:n.targets
	;if(!i||d(i))return t;!function(t){ks={},Ss={}
	;for(const[e,n]of Object.entries(t))7===n.nerve?ks[e]=n:5===n.nerve&&(Ss[e]=n);
	}(i);const r=Object.values(i).sort((t,e)=>e.nerve-t.nerve)
	;return Object.keys(i).forEach((t,e)=>{i[t]=r[e];
	}),t.json=async()=>o,t.text=async()=>JSON.stringify(o),t}function Is(t){
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
	function Ps(t){!function(t,e){const n=J("Filters",t),i=z({
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
	}(t,Is),Is(t),new MutationObserver(()=>Is(t)).observe(t,{childList:true,subtree:true
	});}
	const Os=[...xt,...Tt,...Qt,...Zt,...ve,...xe,...Le,...Me,...Oe,...We,...Je,...Qe,...tn,...nn,...cn,...Tn,...qn,...Un,...Kn,...Xn,...Yn,...Qn,...Zn,...to,...no,...oo,...ro,...so,...lo,...go,...Dt,...wo,...So,...Mo,...$r,...Hr,...Jr,...na,...ra,...sa,...da,...ga,...xa,...La,...Ma,...Oa,...$a,...Va,...cs,...us,...fs,...bs,...xs,{
	key:"crackingeasy",name:"easy cracking",description:"one button cracking",
	onpage:Q.Page,category:V.Crime,enabled:false,readyStates:["loading"],run:()=>{
	ie(Ds,"crimesData"),lt(Ms,ot);},condition:()=>/crimes/.test(zt()??"")},{
	key:"searchfilter",name:"search filtering",description:"filter search results",
	onpage:Q.Page,category:V.Search,enabled:false,readyStates:["interactive"],
	run:()=>lt(Ps,rt),condition:()=>/UserList/.test(zt()??"")}];function Es(){
	var t,e;console.debug("nst - init default start");const n={}
	;for(const r of Os)n[r.key]={name:r.name,description:r.description,
	onpage:r.onpage,category:r.category,enabled:r.enabled};const o=f()??{},i={
	script:{}};for(const r in n)i.script[r]={...n[r],
	enabled:(null==(e=null==(t=null==o?void 0:o.script)?void 0:t[r])?void 0:e.enabled)??n[r].enabled
	}
	;Object.keys(O).forEach(t=>i[t]=o[t]??O[t]),m("nstdata"),p(i),console.debug("nst - init default end");
	}function js(t,e,n=false){const o=document.getElementById(t);var i
	;o&&((i=o).innerText="",
	i.classList.remove("text-nstgreen","text-nstred"),o.innerText=e,
	o.classList.toggle("text-nstgreen",n),o.classList.toggle("text-nstred",!n));}
	async function As(){const t=document.getElementById("nst-tsapikey");if(!t)return
	;const e=t.value.trim()
	;if(19!==e.length)return js("nst-ts-message","Invalid Key Length")
	;const n=await Wt({api:e,selection:""})
	;if(!(null==n?void 0:n.status))return js("nst-ts-message",(null==n?void 0:n.error)||"Invalid Key")
	;try{p({tsapikey:e}),js("nst-ts-message","Key Saved",!0);}catch(o){
	js("nst-ts-message",o.message||"Unknown error");}}async function $s(){
	const t=document.getElementById("nst-apikey");if(!t)return
	;const e=t.value.trim()
	;if(16!==e.length)return js("nst-message","Invalid Key Length")
	;const n=await Gt({section:"user",select:"profile",api:e})
	;if(!(null==n?void 0:n.status))return js("nst-message",(null==n?void 0:n.error)||"Invalid Key")
	;try{const{t:t,o:o}=Ht(n)
	;if(void 0===t||void 0===o)return js("nst-message","API broken, wait for ched to fix")
	;if(p({apikey:e
	}),!Nt(n))return m("nstdata"),js("nst-message","You are not allowed, contact seintz[2460991]")
	;p({userdata:n}),oc(),js("nst-message","Key Saved",!0);}catch(o){
	js("nst-message",o.message||"Unknown error");}}async function zs(){
	confirm("Are you sure you want to reset?")&&(m("nstdata"),
	window.location.reload());}async function qs(){
	if(!confirm("Are you sure you want to reset your TornStats API key?"))return
	;const t=document.getElementById("nst-tsapikey");t&&(t.value=""),p({tsapikey:""
	}),js("nst-ts-message","TornStats API key cleared",true);}function Cs(t){
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
	function Hs(t){const e=document.getElementById(t);if(!e)return;e.innerHTML=""
	;const n=z({classList:"flex flex-col gap-6"}),o=z({classList:"nst-api-section"
	}),i=Cs({icon:"🔑",title:"Torn API Key",required:true,
	features:["Powers 40+ features including Quick Items, Stat Tracking, and Mission Helper","Authenticates you and unlocks all script features","Accesses: inventory, stats, cooldowns, travel status, and more","Validates user authorization and stores game data locally"],
	links:[{text:"limited",url:Z.tornapisetting,color:"text-nstyellow"},{
	text:"custom",url:Z.tornapicustom,color:"text-nstmain"}],
	note:"Without this key, most features won't work.",inputName:"apikey",
	inputMaxLength:16,messageId:"nst-message",buttons:[{id:"nst-login",text:"Save",
	onClick:$s,variant:"primary"},{id:"nst-reset",text:"Reset",onClick:zs,
	variant:"secondary"}]});o.appendChild(i),n.appendChild(o);const r=z({
	classList:"nst-api-section"}),a=Cs({icon:"📊",title:"TornStats API Key",
	required:false,
	features:['Enables "Stat Spies" feature on player profiles',"Shows battle stat comparisons (you vs target)","Displays historical spy data from TornStats database","Helps track stat changes over time"],
	links:[{text:"Create your key here",url:Z.tornstats+"/settings/general",
	color:"text-nstmain"}],
	note:"Falls back to Torn API key if not provided, but recommended for full functionality.",
	inputName:"tsapikey",inputMaxLength:19,messageId:"nst-ts-message",buttons:[{
	id:"nst-tslogin",text:"Save",onClick:As,variant:"primary"},{id:"nst-tsreset",
	text:"Reset",onClick:qs,variant:"secondary"}]})
	;r.appendChild(a),n.appendChild(r),e.appendChild(n);}function Ns(t,...e){
	const n=z({classList:"nst-block"}),o=j("h4",{classList:"nst-block-title",
	innerText:t});return n.appendChild(o),e.forEach(t=>n.appendChild(t)),n}
	function Bs(t,e,n){const o=z({id:e,classList:"nst-outcome"})
	;o.addEventListener("change",t=>{const e=t.target;e&&"radio"===e.type&&n(e.id);})
	;const i=document.createDocumentFragment()
	;return t.forEach(t=>i.appendChild(K(t,e))),o.appendChild(i),o}function Rs(t){
	const e=document.getElementById(t);if(!e)return;e.innerHTML=""
	;const n=document.createDocumentFragment();n.appendChild(function(){
	const t=document.createDocumentFragment();return G({elem:t,title:"mug threshold"
	}),Ns("mug threshold",t)
	}()),n.appendChild(Ns("default outcome",Bs(["leave","mug","hospitalize"],"outcome",t=>p({
	outcome:t})),W({id:"nst-hold"},"hold"))),n.appendChild(function(){
	const t=f("weapon"),e=z({id:"weapon"}),n=document.createDocumentFragment()
	;return Object.keys(t).forEach(t=>{const e=z({id:t,classList:"list-group-item",
	innerText:t});e.setAttribute("data-id",t),n.appendChild(e);
	}),e.appendChild(n),new cr(e,{animation:150,store:{get:()=>{
	const t=f("weapon"),e=["","","",""]
	;return Object.entries(t).forEach(([t,n])=>e[n]=t),e},set:t=>{
	const e=t.toArray(),n=f("weapon");e.forEach(t=>n[t]=e.indexOf(t)),p({weapon:n});}
	}}),Ns("weapon order",e,W({id:"nst-temp"},"use temp first"),W({id:"nst-assaperk"
	},"assassinate"),W({id:"nst-executeperk"},"execute"))
	}()),n.appendChild(function(){const t=z({id:"reload",classList:"nst-outcome"
	}),e=document.createDocumentFragment();return e.appendChild(W({
	id:"nst-reloadone"},"primary")),e.appendChild(W({id:"nst-reloadtwo"
	},"secondary")),t.appendChild(e),Ns("weapon reload",t)}()),e.appendChild(n);}
	function Fs(t){const e=document.getElementById(t);if(!e)return;e.innerHTML=""
	;const n=document.createDocumentFragment()
	;n.appendChild(Ns("default outcome",Bs(["easy-leave","easy-mug","easy-hospitalize"],"easy-outcome",t=>p({
	easyoutcome:t.replace(/easy-/g,"")
	})))),n.appendChild(Ns("default weapon",Bs(["easy-primary","easy-secondary","easy-melee"],"easy-weapon",t=>p({
	easyweapon:t.replace(/easy-/g,"")})),W({id:"nst-easy-temp"},"use temp first"))),
	e.appendChild(n);}let Us=null;function Gs(t){const e=document.getElementById(t)
	;return e?(e.innerHTML="",e):null}function Ws(t,e,n){
	t.className=n,t.innerHTML=`<b>${e}</b>`,t.classList.remove("hidden");}
	function Ks(t){const e=Gs(t);if(!e)return;const n=z({id:"nst-export-wrap",
	classList:"nst-api-wrap"}),o=A({id:"nst-export-download",innerText:"Download"})
	;o.classList.add("hidden","text-sm","text-nstmain","m-2");const i=$({
	id:"nst-export-btn",innerText:"export",classList:"torn-btn m-2",
	onclick:()=>function(t){const e=JSON.stringify(f())
	;Us&&window.URL.revokeObjectURL(Us),Us=window.URL.createObjectURL(new Blob([e],{
	type:"application/json"
	})),t.setAttribute("href",Us+"#/nst-export"),t.setAttribute("download","nst-export.json"),
	t.classList.remove("hidden");}(o)});n.append(i,o),e.appendChild(n);}
	function Xs(t){const e=Gs(t);if(!e)return;const n=R({})
	;n.classList.add("hidden");const o=z({id:"nst-import-wrap",
	classList:"nst-api-wrap"}),i=C({id:"nst-import-input",type:"file",
	accept:"application/json",onchange:()=>function(t,e){const n=t.files
	;if(!n||!n[0])return;const o=new FileReader;o.onload=t=>{var n;try{
	const o=h(""+(null==(n=t.target)?void 0:n.result))
	;if(null===o)throw Error("Parsed data is null")
	;p(o),Es(),Ws(e,"Import Successful","text-nstgreen");}catch{
	Ws(e,"Import Unsuccessful","text-nstred");}},o.onerror=t=>{
	Ws(e,"Import Unsuccessful","text-nstred"),console.error(t);},o.readAsText(n[0]);
	}(i,n)});i.classList.add("hidden");const r=$({id:"nst-import-btn",
	innerText:"import",classList:"torn-btn m-2",onclick:()=>i.click()})
	;o.append(r,i,n),e.appendChild(o);}const Js={
	"Data Storage":"Only locally, changes","Data Sharing":"Nobody",
	"Purpose of Use":"Optimization / Maintenance but only end user has access",
	"Key Storage & Sharing":"Stored locally but not shared",
	"Key Access Level":"Limited or Custom (see below)"},Ys={"Data Storage":"💾",
	"Data Sharing":"🔒","Purpose of Use":"🎯","Key Storage & Sharing":"🔑",
	"Key Access Level":"⚙️",company:"🏢",market:"🛒",torn:"📦",user:"👤"}
	;function Qs(t,e){const n=z({classList:"nst-tos-section"})
	;n.appendChild(j("h4",{classList:"nst-tos-title",innerText:t}));const o=z({
	classList:"nst-tos-grid"});return Object.entries(e).forEach(([t,e])=>{
	o.appendChild(function(t,e){const n=z({classList:"nst-tos-card"}),o=z({
	classList:"nst-tos-card-header"}),i=j("span",{classList:"nst-tos-icon",
	innerText:Ys[t]||"📋"}),r=j("span",{classList:"nst-tos-label",innerText:t})
	;o.appendChild(i),o.appendChild(r);const a=j("div",{classList:"nst-tos-value",
	innerText:e});return n.appendChild(o),n.appendChild(a),n}(t,e));
	}),n.appendChild(o),n}function Vs(t){const e=document.getElementById(t)
	;if(!e)return;e.innerHTML="";const n=document.createDocumentFragment()
	;n.appendChild(Qs("Terms of Service",Js)),
	n.appendChild(Qs("API Usage",D)),e.appendChild(n);}function Zs(){
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
	tc(a,"tos",Vs,"Terms of Service"),tc(a,"api",Hs,"Api Keys"),function(t){
	const e=t.querySelector("#nst-api-li"),n=t.querySelector("#nst-api")
	;null==e||e.classList.add("nst-menu-sel"),
	null==n||n.classList.add("nst-menu-active"),
	null==n||n.classList.toggle("hidden");}(r),oc();}(t);}function tc(t,e,n=()=>{},o){
	const i=null==t?void 0:t.parentElement;if(!i)return;const r="nst-"+e,a=r+"-li"
	;if(i.querySelector("#"+r)||i.querySelector("#"+a))return;const s=N({id:a,
	classList:"nst-menu-page",innerText:o||e,onclick:ec})
	;t.appendChild(s),i.appendChild(z({id:r,classList:"nst-menu-item hidden"})),n(r);
	}function ec(t){
	const e=t.target,n=e.id,o=null==e?void 0:e.closest("#nst-menu-body")
	;if(!o)return
	;const i=o.querySelector(".nst-menu-sel"),r=o.querySelector(".nst-menu-active"),a=o.querySelector("#"+n.replace(/-li/g,""))
	;null==i||i.classList.remove("nst-menu-sel"),
	r&&(r.classList.remove("nst-menu-active"),
	r.classList.toggle("hidden")),e.classList.add("nst-menu-sel"),
	a&&(a.classList.add("nst-menu-active"),a.classList.toggle("hidden"));}
	function nc(t){const e=document.getElementById(t);if(!e)return;e.innerHTML=""
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
	}),s.appendChild(c),e.appendChild(s);}function oc(){if(!Nt())return;Es()
	;const t=document.querySelector("#nst-ul-main");if(!t)return;const e={attack:Rs,
	"easy-fight":Fs,export:Ks,import:Xs};Object.keys(e).forEach(n=>tc(t,n,e[n]))
	;const n=f("script"),o=Object.keys(n).sort().reduce((t,e)=>(t[e]=null==n?void 0:n[e],
	t),{})
	;Array.from(new Set(Object.values(o).map(t=>t.category).filter(Boolean))).sort().forEach(e=>tc(t,e,nc));
	}function ic(t){if(document.getElementById("nst-icon"))return
	;const e=t.querySelector('ul[class^="statusIcons"]')||t.querySelector('ul[class^="status-icons"]')
	;if(!e)return;const n=N({id:"nst-icon",classList:"nst-icon"})
	;e.insertBefore(n,e.firstChild),n.addEventListener("click",Zs);}
	const rc=window.location.pathname.replace(/^\//,"").replace(/\.php$/,""),ac={
	loading:()=>{lt(E,"head"),lt(ic,"#sidebar"),Nt()&&(function(){
	for(const t of ["pushState","replaceState"]){const e=history[t]
	;history[t]=function(...t){const n=e.apply(this,t)
	;return window.dispatchEvent(new Event("nst:navigate")),n};}
	}(),document.onreadystatechange||(document.onreadystatechange=()=>{
	const t=document.readyState;ac[t]&&ac[t]();}),_t(rc,"loading"),Ut());},
	interactive:()=>{Nt()&&_t(rc,"interactive");},complete:()=>{_t(rc,"complete");}}
	;ac[document.readyState]&&ac[document.readyState]();}();

})();