// ==UserScript==
// @name         nst
// @namespace    seintz.torn.nst
// @version      2.1.0
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
// @grant        GM.notification
// @grant        GM.xmlHttpRequest
// @grant        GM_addStyle
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

(t=>{if(typeof GM_addStyle=="function"){GM_addStyle(t);return}const r=document.createElement("style");r.textContent=t,document.head.append(r)})(' *,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.nst-hide-medal{display:none!important}.nst-left-align .d .container{margin-left:1.25rem!important;justify-content:flex-start!important}.nst-left-align .d.without-sidebar .container,.nst-left-align .d.without-sidebar .content-wrapper,.nst-left-align .d .anonymous .content-wrapper{margin-left:1.25rem}.nst-trade-value{height:1.5rem;text-align:center;font-size:.875rem;line-height:1.5rem;--tw-text-opacity: 1;color:rgb(108 173 43 / var(--tw-text-opacity, 1))}.nst-city-item{left:-1.25rem!important;top:-1.25rem!important;z-index:999!important;box-sizing:border-box!important;display:block!important;height:2.5rem!important;width:2.5rem!important;border-radius:9999px!important;border-width:1px!important;border-style:solid!important;--tw-border-opacity: 1 !important;border-color:rgb(0 0 0 / var(--tw-border-opacity, 1))!important;background-color:#124707cc!important;padding:.75rem!important;--tw-shadow: 0 25px 50px -12px rgb(0 0 0 / .25) !important;--tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color) !important;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)!important}.nst-city-item:hover{left:-2.5rem!important;top:-2.5rem!important;z-index:999!important;height:10rem!important;width:10rem!important;--tw-bg-opacity: 1 !important;background-color:rgb(0 0 0 / var(--tw-bg-opacity, 1))!important;padding:2.25rem!important}.nst-findsworth{margin:.25rem;padding:.25rem;font-weight:700}.nst-findslist{margin:.25rem;padding:.25rem;text-align:left}.nst-status-wrap{position:absolute;top:0;z-index:10;display:flex;width:100%;flex-direction:column;flex-wrap:wrap;align-content:flex-start;align-items:flex-start;justify-content:center}.nst-status-middle{display:flex;width:100%;flex-direction:row;flex-wrap:wrap;align-content:center;align-items:center;justify-content:space-between}.nst-status-item{margin:.25rem;border-width:1px;border-style:solid;--tw-border-opacity: 1;border-color:rgb(0 0 0 / var(--tw-border-opacity, 1));padding:.25rem}.nst-lastaction{padding:.25rem}.nst-spgym-sel,.nst-spgym-msg{margin:.25rem;padding:.25rem}.nst-steadfast{margin:.25rem;padding:.25rem;text-align:center}.nst-pokername{color:var(--holdem-text-color-main)}.nst-ghost-wrap{display:flex;flex-direction:column;flex-wrap:wrap;align-content:center;align-items:center;justify-content:center;padding:.25rem}.nst-rw-show{display:flex!important;flex-direction:row!important;flex-wrap:nowrap!important;align-content:center!important;align-items:center!important;justify-content:flex-start!important}.nst-rw-show-wrap{margin-left:.5rem;display:flex;flex-direction:row;flex-wrap:nowrap}.nst-rw-single{margin-right:.5rem;border-radius:.5rem;border-width:2px;border-style:solid;--tw-border-opacity: 1;border-color:rgb(34 34 34 / var(--tw-border-opacity, 1));padding:.25rem;font-size:.75rem;line-height:1rem}.nst-icon{cursor:pointer!important;background-image:url(https://factiontags.torn.com/11581-56425.png)!important;background-position:center!important}.nst-logo{font-size:1.5rem;line-height:2rem;font-weight:700;--tw-text-opacity: 1;color:rgb(66 140 165 / var(--tw-text-opacity, 1))}.nst-menu{margin-left:2rem;margin-top:2rem;margin-bottom:10rem;flex:1 1 0%}.nst-menu-wrap{border-radius:.5rem}.nst-menu-title{position:relative;top:0;left:0;display:flex;height:2rem;flex-wrap:wrap;align-content:center;align-items:center;border-top-left-radius:.5rem;border-top-right-radius:.5rem;border-bottom-width:1px;border-style:solid;--tw-border-opacity: 1;border-bottom-color:rgb(0 0 0 / var(--tw-border-opacity, 1));background-color:var(--default-bg-panel-color);padding:.25rem .75rem;font-size:.875rem;line-height:2rem;font-weight:700;color:var(--default-color)}.nst-menu-body{display:flex;border-bottom-right-radius:.5rem;border-bottom-left-radius:.5rem;background-color:var(--default-bg-panel-color);line-height:.75rem}.nst-ul-main{float:none;display:table-cell;list-style-type:none;border-right-width:1px;border-style:solid;--tw-border-opacity: 1;border-right-color:rgb(0 0 0 / var(--tw-border-opacity, 1));vertical-align:top}.nst-menu-page{position:relative;display:block;width:9rem;border-bottom-width:1px;border-style:solid;--tw-border-opacity: 1;border-bottom-color:rgb(0 0 0 / var(--tw-border-opacity, 1));background-color:var(--default-bg-panel-color);padding:.5rem;font-weight:700;color:var(--default-color)}.nst-menu-page:hover{background-color:var(--default-bg-panel-active-color)}.nst-menu-sel{background-color:var(--default-bg-panel-active-color)!important}.nst-menu-item{float:none;display:block;width:100%;vertical-align:top}.nst-message{margin:.5rem;padding:.25rem;--tw-text-opacity: 1;color:rgb(185 70 45 / var(--tw-text-opacity, 1))}.nst-api-wrap{margin:.5rem;display:flex;flex-direction:column;flex-wrap:wrap;align-content:center;align-items:center;justify-content:center;padding:.25rem}.nst-block-title{margin:.5rem!important}.nst-block{margin:.5rem;display:flex;flex-direction:column;flex-wrap:wrap;align-content:center;align-items:center;justify-content:center;border-bottom-width:1px;border-style:solid;--tw-border-opacity: 1;border-bottom-color:rgb(249 250 251 / var(--tw-border-opacity, 1));padding:.5rem}.nst-script-block{margin:.5rem;display:flex;flex-direction:column;flex-wrap:wrap;align-content:flex-start;align-items:flex-start;justify-content:center;padding:.5rem}.nst-outcome{display:flex;flex-direction:row;flex-wrap:wrap;align-content:center;align-items:center;justify-content:center}.list-group-item{margin:.5rem;border-width:1px;border-style:solid;--tw-border-opacity: 1;border-color:rgb(107 114 128 / var(--tw-border-opacity, 1));padding:.5rem 1rem;text-align:center;font-size:.875rem;line-height:1.25rem}.nst-tos-title{margin-top:.75rem!important;margin-bottom:1.25rem!important;text-align:center!important;font-size:1.5rem!important;line-height:2rem!important;font-weight:700!important}.nst-tos-wrap{margin:.5rem;white-space:normal;overflow-wrap:normal;word-break:normal;overflow-wrap:break-word;padding:.25rem;font-size:.875rem;line-height:1.25rem}.nst-box{margin-top:.75rem;margin-bottom:.75rem;box-sizing:border-box;display:flex;flex-direction:column}.nst-box-header{display:flex;border-top-left-radius:.5rem;border-top-right-radius:.5rem;border-bottom-width:0px;--tw-bg-opacity: 1;background-color:rgb(0 0 0 / var(--tw-bg-opacity, 1));padding:.25rem .75rem;font-size:1.125rem;line-height:1.75rem;--tw-text-opacity: 1;color:rgb(66 140 165 / var(--tw-text-opacity, 1));--tw-shadow: inset 0 2px 4px 0 rgb(0 0 0 / .05);--tw-shadow-colored: inset 0 2px 4px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}#nst-arrow{display:flex;height:1rem;width:1rem}.nst-box-title{flex-grow:1;font-size:.875rem;font-weight:700;line-height:1rem;--tw-text-opacity: 1;color:rgb(66 140 165 / var(--tw-text-opacity, 1))}.nst-box-content{border-bottom-right-radius:.5rem;border-bottom-left-radius:.5rem;border-width:1px;border-top-width:0px;border-style:solid;--tw-border-opacity: 1;border-color:rgb(0 0 0 / var(--tw-border-opacity, 1));background-color:var(--default-bg-panel-color);color:var(--default-color)}.nst-box-content>p{margin:.25rem;text-align:center}.nst-box-row{margin:.25rem;display:flex;flex-direction:row;flex-wrap:wrap;align-content:center;align-items:flex-start;justify-content:space-evenly;text-align:center}.nst-box-column{margin:.25rem;display:flex;flex:1 1 0%;flex-direction:column;flex-wrap:wrap;align-content:center;align-items:center;justify-content:center;text-align:center}.nst-box-item{margin:.125rem .25rem;display:flex;align-content:flex-start;align-items:center;font-size:.875rem;line-height:1.25rem}.nst-box-item>input{margin-top:0;margin-bottom:0;margin-left:.25rem;margin-right:.25rem}.nst-box-button{position:relative;display:flex;width:100%;flex-direction:column;flex-wrap:wrap;align-items:center;padding:.25rem;color:var(--default-color)}.nst-box-close{position:absolute;top:0;right:.25rem;cursor:pointer;font-size:.75rem;line-height:1rem}.nst-box-img{vertical-align:middle}.nst-box-btn-div{margin:.25rem;display:flex;flex:0 0 14%;justify-content:center;align-self:stretch;border-radius:.5rem;border-width:1px;border-style:solid;--tw-border-opacity: 1;border-color:rgb(34 34 34 / var(--tw-border-opacity, 1));padding:0}.nst-box-btn-div:hover{background-color:var(--default-bg-panel-active-color)}#nst-item-resp{justify-content:center}.nst-input{margin:0;box-sizing:border-box;height:1.5rem;border-radius:.25rem;border-width:1px;border-style:solid;--tw-border-opacity: 1;border-color:rgb(0 0 0 / var(--tw-border-opacity, 1));background-color:var(--default-bg-panel-active-color);text-align:center;font-size:.875rem;line-height:1.25rem;font-weight:500;color:var(--default-color)}.nst-table{box-sizing:border-box;width:100%;border-width:2px;border-style:solid;--tw-border-opacity: 1;border-color:rgb(31 41 55 / var(--tw-border-opacity, 1))}.nst-table-row{text-align:left}.nst-table-cell-head{font-size:.875rem;line-height:1.25rem;font-weight:700}.nst-table-cell{box-sizing:border-box!important;border-width:1px!important;border-style:solid!important;--tw-border-opacity: 1 !important;border-color:rgb(31 41 55 / var(--tw-border-opacity, 1))!important;padding:.25rem!important;font-size:.75rem!important;line-height:1rem!important}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.m-2{margin:.5rem}.block{display:block}.table{display:table}.table-cell{display:table-cell}.table-row{display:table-row}.hidden{display:none}.h-4{height:1rem}.w-4{width:1rem}.resize{resize:both}.border{border-width:1px}.bg-nstmain{--tw-bg-opacity: 1;background-color:rgb(66 140 165 / var(--tw-bg-opacity, 1))}.bg-nstred{--tw-bg-opacity: 1;background-color:rgb(185 70 45 / var(--tw-bg-opacity, 1))}.bg-nstyellow{--tw-bg-opacity: 1;background-color:rgb(252 196 25 / var(--tw-bg-opacity, 1))}.text-center{text-align:center}.text-base{font-size:1rem;line-height:1.5rem}.text-sm{font-size:.875rem;line-height:1.25rem}.font-bold{font-weight:700}.text-black{--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity, 1))}.text-nstgreen{--tw-text-opacity: 1;color:rgb(108 173 43 / var(--tw-text-opacity, 1))}.text-nstmain{--tw-text-opacity: 1;color:rgb(66 140 165 / var(--tw-text-opacity, 1))}.text-nstred{--tw-text-opacity: 1;color:rgb(185 70 45 / var(--tw-text-opacity, 1))}.text-nsttorntext{color:var(--default-color)}.text-nstyellow{--tw-text-opacity: 1;color:rgb(252 196 25 / var(--tw-text-opacity, 1))}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}:root{--nst-hide-fact-desc: block;--nst-hide-war-graph: block}.f-war-list .descriptions .faction-war-info,.f-war-list .descriptions .faction-names{display:var(--nst-hide-war-graph)!important}#faction-main [data-title^=announcement],#faction-main .announcement,.faction-title,.faction-description{display:var(--nst-hide-fact-desc)!important}[aria-label="Reset loadout"],[class*=airspaceScene],[class*=randomFactWrapper]{display:none!important} ');

(function () {
	'use strict';

	!function(){
	const t=t=>GM.notification(t),e=()=>document.cookie.split("; ").find((t=>t.startsWith("rfc_v"))).split("=")[1],n=t=>new URLSearchParams(window.location.search).get(t),i=()=>{
	var t;return null==(t=window.location.search.match(/\?sid=(\w+)/))?void 0:t[1]
	},o=()=>window.location.pathname.replace(/\//,"").replace(/\.php/,""),s=()=>window.location.hash.replace(/^#\/(?:\w+=)?/,""),a=()=>Math.round(Date.now()/1e3),r=t=>!t||null==t||0===Object.keys(t).length,l=(t="")=>{
	let e;try{e=JSON.parse(localStorage.getItem("nstdata"));}catch{e={};}
	return ""===t?e??{}:null==e?void 0:e[t]},c=t=>{const e=l()
	;Object.entries(t).forEach((([t,n])=>e[t]=n)),
	localStorage.setItem("nstdata",JSON.stringify(e));},u=t=>{
	localStorage.removeItem(t);
	},d=t=>+(t+"").replace(/[^\d]/g,""),m=t=>Math.round(t).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),v=t=>{
	let e=""
	;const n=Math.floor(t/86400),i=Math.floor(t%86400/3600),o=Math.floor(t%3600/60),s=Math.floor(t%3600%60)
	;return n>0&&(e+=n.toString().padStart(2,"0")+"d "),
	i>0&&(e+=i.toString().padStart(2,"0")+"h "),
	o>0&&(e+=o.toString().padStart(2,"0")+"m "),
	s>0&&(e+=s.toString().padStart(2,"0")+"s"),""+e
	},p=t=>t.toLowerCase().replace(/ /g,""),f=(t,e)=>{
	const n=document.createElement(t);return Object.entries(e).forEach((([t,e])=>{
	t.startsWith("on")&&"function"==typeof e?n.addEventListener(t.slice(2),e):t in n?n[t]=e:n.setAttribute(t,e+"");
	})),n
	},h=t=>f("div",t),b=t=>f("span",t),g=t=>f("button",t),y=t=>f("li",t),w=t=>f("p",t),k=t=>f("a",t),x=t=>f("img",t),L=t=>f("input",t),_=t=>f("label",t),T=t=>{
	const{elem:e,title:n,cback:i=()=>{}}=t,o=p(n),s=h({classList:"nst-box-item"
	}),a=f("input",{id:"nst-"+o,type:"text",classList:"nst-input",
	value:m(+(l(o)??"0")),placeholder:o,onkeyup:t=>{const e=t.target,n=d(e.value)
	;e.value=n.toLocaleString("en-US");const o=p(e.placeholder);c({[o]:n}),i();}})
	;return s.appendChild(a),e.appendChild(s),s},O=(t,e,n,i)=>{const o=h({
	classList:"nst-box-item",onchange:i}),s=L({...t,type:"checkbox"}),a={
	innerText:e,htmlFor:null==t?void 0:t.id,title:n},r=_(a);return o.appendChild(s),
	o.appendChild(r),o},D=(t,e)=>{const n=l("outcome").toString(),i=h({
	classList:"nst-box-item"}),o=L({id:t,type:"radio",name:e,value:t,checked:n===t
	}),s=_({innerText:"hospitalize"===t?"hosp":t,htmlFor:t,classList:""})
	;return i.appendChild(o),i.appendChild(s),i
	},I='<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9" /></svg>',M='<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6" /></svg>',S=t=>{
	const e=t.target.closest(".nst-box-header"),n=e.nextElementSibling;if(!n)return
	;const i=e.querySelector("#nst-box-title").innerText,o=p(i)+"Folded",s=n.classList.toggle("hidden")
	;e.querySelector("#nst-arrow").innerHTML=s?M:I,c({[o]:s});},j=t=>{
	const{element:e,title:n}=t;if(!e)return
	;const i=p(n),o=i+"Folded",s=l(o)?"nst-box-content hidden":"nst-box-content",a=h({
	classList:"nst-box"}),r=(t=>{const e=h({classList:"nst-box-header",onclick:S})
	;return e.appendChild(b({classList:"nst-box-title"})).appendChild(b({
	id:"nst-box-title",innerText:t})),e.appendChild(h({id:"nst-arrow"})),e})(n)
	;r.querySelector("#nst-arrow").innerHTML=l(o)?M:I;const c=h({classList:s})
	;if(document.querySelector("#nst-"+i))return;const u=h({id:"nst-"+i,
	classList:"nst-box-row"})
	;return c.appendChild(u),a.appendChild(r),a.appendChild(c),
	e.insertAdjacentElement("beforebegin",a),u},P=(t,e)=>{
	const n=new Event("input",{bubbles:true})
	;t.value=""+e,t.dispatchEvent(n),t.select();},E=async t=>{var e,n
	;const{section:i,select:o,objID:s,api:a}=t,r=`https://api.torn.com/${i}/${s??""}?selections=${o}&key=${a??l("apikey")}&comment=nst`,c=await V("GET",r),d=F()?c:null==c?void 0:c.response
	;return void 0!==(null==d?void 0:d.error)?(console.error(null==(e=null==d?void 0:d.error)?void 0:e.error),
	[2,10,13,18].includes(null==(n=null==d?void 0:d.error)?void 0:n.code)&&u("nstdata"),
	{status:false,error:"broken key"}):{status:true,...d}},$=async t=>{
	const{selection:e,api:n}=t,i=`https://www.tornstats.com/api/v2/${n??l("tsapikey")??l("apikey")}${e}`,o=await V("GET",i),s=F()?o:null==o?void 0:o.response
	;return void 0===(null==s?void 0:s.status)||false===(null==s?void 0:s.status)?(console.error(null==s?void 0:s.message,s),
	{status:false}):s},q=(t={})=>{var e;const n=r(t)?l("userdata"):t;return {
	t:null==n?void 0:n.player_id,
	i:null==(e=null==n?void 0:n.faction)?void 0:e.faction_id}
	},A=t=>t.toString(16),z=(t={})=>{const e=l("apikey")
	;if(16!==(null==e?void 0:e.length))return  false
	;const n=r(t)?l("userdata"):t,{t:i,i:o}=q(n)
	;return !r(n)&&!!((t,e)=>!(!["1402a5","1c2b3b","1f6fae","21d210","21d476","257b50","258d3f","259d63","279b7d","2ac242","4cffd","30a6cc"].includes(e)&&!["253d","2de3","2d3d","235f","5416","2396"].includes(t)))(A(o),A(i))
	},C=async()=>{var e,n;setTimeout(C,6e4);const i=l();if(r(i))return
	;const o=null==i?void 0:i.apikey;if(16!==(null==o?void 0:o.length))return
	;const s=null==i?void 0:i.userdata,u=1e3*((null==s?void 0:s.timestamp)??0)
	;if(Date.now()-3e4<=u)return;const m={section:"user",
	select:"bars,basic,battlestats,cooldowns,education,icons,money,networth,notifications,perks,profile,refills,timestamp,travel,newmessages,newevents,personalstats",
	api:o},p=await E(m);if(!(null==p?void 0:p.status))return;const{t:f,i:h}=q(p)
	;if(void 0===f||void 0===h)return
	;const b=(null==(n=null==(e=null==p?void 0:p.merit_perks)?void 0:e.filter((t=>t.includes("mug"))))?void 0:n.join())??0,g=(d(b)/5+20)/400
	;var y,w;"player_id"in p&&c({userdata:p}),c({mugperc:g
	}),F()||(y=s,w=p,N("drugnoti")&&((e,n)=>{var i,o
	;const s=null==(i=null==n?void 0:n.cooldowns)?void 0:i.drug
	;0!==(null==(o=null==e?void 0:e.cooldowns)?void 0:o.drug)&&0===s&&t({
	title:"NST: Drug Cooldown",text:"Your drug cooldown has expired."});
	})(y,w),N("travnoti")&&((e,n)=>{var i,o,s
	;const a=null==(i=null==n?void 0:n.travel)?void 0:i.time_left,r=null==(o=null==e?void 0:e.travel)?void 0:o.time_left,l=null==(s=null==n?void 0:n.travel)?void 0:s.destination
	;a<=120&&a!==r&&t({title:"NST: Travel",text:`${l} - Landing in ${v(a)}`});
	})(y,w),N("hospnoti")&&((e,n)=>{var i,o
	;const s=null==(i=null==n?void 0:n.states)?void 0:i.hospital_timestamp,r=null==(o=null==e?void 0:e.states)?void 0:o.hospital_timestamp
	;if(!(s-a()<=300&&s!==r))return;const l=Math.round(s-a());t({
	title:"NST: Hospital",text:"Out of hosp in "+v(l)});
	})(y,w),N("eventnoti")&&((e,n)=>{var i,o
	;const s=null==(i=null==n?void 0:n.notifications)?void 0:i.events,a=null==(o=null==e?void 0:e.notifications)?void 0:o.events
	;0!==s&&s!==a&&t({title:"NST: New Event",
	text:`You have ${s} new event${1===s?"":"s"}.`});})(y,w),N("msgnoti")&&((e,n)=>{
	var i,o
	;const s=null==(i=null==n?void 0:n.notifications)?void 0:i.messages,a=null==(o=null==e?void 0:e.notifications)?void 0:o.messages
	;0!==s&&s!==a&&t({title:"NST: New Message",
	text:`You have ${s} new message${1===s?"":"s"}.`});})(y,w));},N=(t="")=>{var e
	;if(!z())return  false;const n=l("script")
	;return ""===t||!!(null==(e=null==n?void 0:n[t])?void 0:e.enabled)},R=()=>{
	var t,e
	;const n=null==(t=null==document?void 0:document.body)?void 0:t.getAttribute("data-traveling"),i=null==(e=null==document?void 0:document.body)?void 0:e.getAttribute("data-abroad")
	;return "false"==n&&"false"==i?"home":"true"==n&&"true"==i?"trav":"false"==n&&"true"==i?"abro":`${n}, ${i}`
	},B=t=>t.split("&").reduce(((t,e)=>({...t,[e.split("=")[0]]:e.split("=")[1]
	})),{}),H=t=>Object.keys(t).map((e=>`${e}=${t[e]}`)).join("&"),F=()=>void 0!==window.flutter_inappwebview,U=t=>{
	F()||(XMLHttpRequest.prototype._original_send=XMLHttpRequest.prototype.send,
	XMLHttpRequest.prototype.send=function(e){try{
	if(!e)return this._original_send(e);const n=t(e)
	;console.log("data",e),console.log("new_data",n),this._original_send(n);
	}catch(n){console.error(n),this._original_send(e);}});},G=(t,e)=>{
	const n=F()?window:unsafeWindow,{fetch:i}=n;n.fetch=async(...n)=>{var o,s,a
	;const r=await i(...n),l=(null==(o=n[0])?void 0:o.url)||n[0],c=null==(s=null==l?void 0:l.match(RegExp("(?<=step=|sid=)(\\w+)","g")))?void 0:s[0]
	;if(!c||c!==e)return r;let u;try{
	u=await(null==(a=null==r?void 0:r.clone())?void 0:a.json());}catch(d){
	return console.error(n,d),r}return t(u),r};
	},W=+l("mugperc"),X=d(l("mugthreshold")),Y="Quick Items",J=p(Y),K="Quick Faction",Q=p(K),V=(t,e,n={},i={})=>new Promise(((i,o)=>{
	if(F())PDA_httpGet(e).then((t=>i(JSON.parse(t.responseText)))).catch(o);else {
	const s={url:e,method:t,headers:n,responseType:"json",onload:i,onerror:o}
	;GM.xmlHttpRequest(s);}}));function Z(t,e){var n=Object.keys(t)
	;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t)
	;e&&(i=i.filter((function(e){
	return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i);}
	return n}function tt(t){for(var e=1;e<arguments.length;e++){
	var n=null!=arguments[e]?arguments[e]:{}
	;e%2?Z(Object(n),true).forEach((function(e){nt(t,e,n[e]);
	})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(e){
	Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e));}));}return t}
	function et(t){
	return (et="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){
	return typeof t}:function(t){
	return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t
	})(t)}function nt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,
	enumerable:true,configurable:true,writable:true}):t[e]=n,t}function it(){
	return it=Object.assign||function(t){for(var e=1;e<arguments.length;e++){
	var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i]);}
	return t},it.apply(this,arguments)}function ot(t){
	if("undefined"!=typeof window&&window.navigator)return !!navigator.userAgent.match(t)
	}
	var st=ot(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),at=ot(/Edge/i),rt=ot(/firefox/i),lt=ot(/safari/i)&&!ot(/chrome/i)&&!ot(/android/i),ct=ot(/iP(ad|od|hone)/i),ut=ot(/chrome/i)&&ot(/android/i),dt={
	capture:false,passive:false};function mt(t,e,n){t.addEventListener(e,n,!st&&dt);}
	function vt(t,e,n){t.removeEventListener(e,n,!st&&dt);}function pt(t,e){if(e){
	if(">"===e[0]&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e)
	;if(t.msMatchesSelector)return t.msMatchesSelector(e)
	;if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch(n){return  false}
	return  false}}function ft(t){
	return t.host&&t!==document&&t.host.nodeType?t.host:t.parentNode}
	function ht(t,e,n,i){if(t){n=n||document;do{
	if(null!=e&&(">"===e[0]?t.parentNode===n&&pt(t,e):pt(t,e))||i&&t===n)return t
	;if(t===n)break}while(t=ft(t))}return null}var bt,gt=/\s+/g;function yt(t,e,n){
	if(t&&e)if(t.classList)t.classList[n?"add":"remove"](e);else {
	var i=(" "+t.className+" ").replace(gt," ").replace(" "+e+" "," ")
	;t.className=(i+(n?" "+e:"")).replace(gt," ");}}function wt(t,e,n){
	var i=t&&t.style;if(i){
	if(void 0===n)return document.defaultView&&document.defaultView.getComputedStyle?n=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),
	void 0===e?n:n[e]
	;e in i||-1!==e.indexOf("webkit")||(e="-webkit-"+e),i[e]=n+("string"==typeof n?"":"px");
	}}function kt(t,e){var n="";if("string"==typeof t)n=t;else do{
	var i=wt(t,"transform");i&&"none"!==i&&(n=i+" "+n);}while(!e&&(t=t.parentNode))
	;var o=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix
	;return o&&new o(n)}function xt(t,e,n){if(t){
	var i=t.getElementsByTagName(e),o=0,s=i.length;if(n)for(;o<s;o++)n(i[o],o)
	;return i}return []}function Lt(){
	return document.scrollingElement||document.documentElement}
	function _t(t,e,n,i,o){if(t.getBoundingClientRect||t===window){var s,a,r,l,c,u,d
	;if(t!==window&&t.parentNode&&t!==Lt()?(a=(s=t.getBoundingClientRect()).top,
	r=s.left,
	l=s.bottom,c=s.right,u=s.height,d=s.width):(a=0,r=0,l=window.innerHeight,
	c=window.innerWidth,
	u=window.innerHeight,d=window.innerWidth),(e||n)&&t!==window&&(o=o||t.parentNode,
	!st))do{
	if(o&&o.getBoundingClientRect&&("none"!==wt(o,"transform")||n&&"static"!==wt(o,"position"))){
	var m=o.getBoundingClientRect()
	;a-=m.top+parseInt(wt(o,"border-top-width")),r-=m.left+parseInt(wt(o,"border-left-width")),
	l=a+s.height,c=r+s.width;break}}while(o=o.parentNode);if(i&&t!==window){
	var v=kt(o||t),p=v&&v.a,f=v&&v.d;v&&(l=(a/=f)+(u/=f),c=(r/=p)+(d/=p));}return {
	top:a,left:r,bottom:l,right:c,width:d,height:u}}}function Tt(t,e,n){
	for(var i=St(t,true),o=_t(t)[e];i;){if(!(o>=_t(i)[n]))return i;if(i===Lt())break
	;i=St(i,false);}return  false}function Ot(t,e,n,i){
	for(var o=0,s=0,a=t.children;s<a.length;){
	if("none"!==a[s].style.display&&a[s]!==Ee.ghost&&(i||a[s]!==Ee.dragged)&&ht(a[s],n.draggable,t,false)){
	if(o===e)return a[s];o++;}s++;}return null}function Dt(t,e){
	for(var n=t.lastElementChild;n&&(n===Ee.ghost||"none"===wt(n,"display")||e&&!pt(n,e));)n=n.previousElementSibling
	;return n||null}function It(t,e){var n=0;if(!t||!t.parentNode)return  -1
	;for(;t=t.previousElementSibling;)"TEMPLATE"===t.nodeName.toUpperCase()||t===Ee.clone||e&&!pt(t,e)||n++
	;return n}function Mt(t){var e=0,n=0,i=Lt();if(t)do{var o=kt(t),s=o.a,a=o.d
	;e+=t.scrollLeft*s,n+=t.scrollTop*a;}while(t!==i&&(t=t.parentNode));return [e,n]}
	function St(t,e){if(!t||!t.getBoundingClientRect)return Lt();var n=t,i=false;do{
	if(n.clientWidth<n.scrollWidth||n.clientHeight<n.scrollHeight){var o=wt(n)
	;if(n.clientWidth<n.scrollWidth&&("auto"==o.overflowX||"scroll"==o.overflowX)||n.clientHeight<n.scrollHeight&&("auto"==o.overflowY||"scroll"==o.overflowY)){
	if(!n.getBoundingClientRect||n===document.body)return Lt();if(i||e)return n;i=true;
	}}}while(n=n.parentNode);return Lt()}function jt(t,e){
	return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)
	}function Pt(t,e){return function(){if(!bt){var n=arguments
	;1===n.length?t.call(this,n[0]):t.apply(this,n),bt=setTimeout((function(){
	bt=void 0;}),e);}}}function Et(t,e,n){t.scrollLeft+=e,t.scrollTop+=n;}
	function $t(t){var e=window.Polymer,n=window.jQuery||window.Zepto
	;return e&&e.dom?e.dom(t).cloneNode(true):n?n(t).clone(true)[0]:t.cloneNode(true)}
	function qt(t,e,n){var i={};return Array.from(t.children).forEach((function(o){
	var s,a,r,l;if(ht(o,e.draggable,t,false)&&!o.animated&&o!==n){var c=_t(o)
	;i.left=Math.min(null!==(s=i.left)&&void 0!==s?s:1/0,c.left),
	i.top=Math.min(null!==(a=i.top)&&void 0!==a?a:1/0,c.top),
	i.right=Math.max(null!==(r=i.right)&&void 0!==r?r:-1/0,c.right),
	i.bottom=Math.max(null!==(l=i.bottom)&&void 0!==l?l:-1/0,c.bottom);}
	})),i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}
	var At="Sortable"+(new Date).getTime(),zt=[],Ct={initializeByDefault:true},Nt={
	mount:function(t){for(var e in Ct)Ct.hasOwnProperty(e)&&!(e in t)&&(t[e]=Ct[e])
	;zt.forEach((function(e){
	if(e.pluginName===t.pluginName)throw "Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")
	})),zt.push(t);},pluginEvent:function(t,e,n){var i=this
	;this.eventCanceled=false,n.cancel=function(){i.eventCanceled=true;};var o=t+"Global"
	;zt.forEach((function(i){
	e[i.pluginName]&&(e[i.pluginName][o]&&e[i.pluginName][o](tt({sortable:e
	},n)),e.options[i.pluginName]&&e[i.pluginName][t]&&e[i.pluginName][t](tt({
	sortable:e},n)));}));},initializePlugins:function(t,e,n,i){
	for(var o in zt.forEach((function(i){var o=i.pluginName
	;if(t.options[o]||i.initializeByDefault){var s=new i(t,e,t.options)
	;s.sortable=t,s.options=t.options,t[o]=s,it(n,s.defaults);}
	})),t.options)if(t.options.hasOwnProperty(o)){
	var s=this.modifyOption(t,o,t.options[o]);void 0!==s&&(t.options[o]=s);}},
	getEventProperties:function(t,e){var n={};return zt.forEach((function(i){
	"function"==typeof i.eventProperties&&it(n,i.eventProperties.call(e[i.pluginName],t));
	})),n},modifyOption:function(t,e,n){var i;return zt.forEach((function(o){
	t[o.pluginName]&&o.optionListeners&&"function"==typeof o.optionListeners[e]&&(i=o.optionListeners[e].call(t[o.pluginName],n));
	})),i}},Rt=["evt"],Bt=function(t,e){
	var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=n.evt,o=function(t,e){
	if(null==t)return {};var n,i,o=function(t,e){if(null==t)return {}
	;var n,i,o={},s=Object.keys(t)
	;for(i=0;i<s.length;i++)n=s[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e)
	;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t)
	;for(i=0;i<s.length;i++)n=s[i],
	e.indexOf(n)>=0||{}.propertyIsEnumerable.call(t,n)&&(o[n]=t[n]);}return o}(n,Rt)
	;Nt.pluginEvent.bind(Ee)(t,e,tt({dragEl:Ft,parentEl:Ut,ghostEl:Gt,rootEl:Wt,
	nextEl:Xt,lastDownEl:Yt,cloneEl:Jt,cloneHidden:Kt,dragStarted:ce,putSortable:ne,
	activeSortable:Ee.active,originalEvent:i,oldIndex:Qt,oldDraggableIndex:Zt,
	newIndex:Vt,newDraggableIndex:te,hideGhostForTarget:Me,unhideGhostForTarget:Se,
	cloneNowHidden:function(){Kt=true;},cloneNowShown:function(){Kt=false;},
	dispatchSortableEvent:function(t){Ht({sortable:e,name:t,originalEvent:i});}},o));}
	;function Ht(t){!function(t){
	var e=t.sortable,n=t.rootEl,i=t.name,o=t.targetEl,s=t.cloneEl,a=t.toEl,r=t.fromEl,l=t.oldIndex,c=t.newIndex,u=t.oldDraggableIndex,d=t.newDraggableIndex,m=t.originalEvent,v=t.putSortable,p=t.extraEventProperties
	;if(e=e||n&&n[At]){
	var f,h=e.options,b="on"+i.charAt(0).toUpperCase()+i.substr(1)
	;!window.CustomEvent||st||at?(f=document.createEvent("Event")).initEvent(i,true,true):f=new CustomEvent(i,{
	bubbles:true,cancelable:true
	}),f.to=a||n,f.from=r||n,f.item=o||n,f.clone=s,f.oldIndex=l,
	f.newIndex=c,f.oldDraggableIndex=u,
	f.newDraggableIndex=d,f.originalEvent=m,f.pullMode=v?v.lastPutMode:void 0
	;var g=tt(tt({},p),Nt.getEventProperties(i,e));for(var y in g)f[y]=g[y]
	;n&&n.dispatchEvent(f),h[b]&&h[b].call(e,f);}}(tt({putSortable:ne,cloneEl:Jt,
	targetEl:Ft,rootEl:Wt,oldIndex:Qt,oldDraggableIndex:Zt,newIndex:Vt,
	newDraggableIndex:te},t));}
	var Ft,Ut,Gt,Wt,Xt,Yt,Jt,Kt,Qt,Vt,Zt,te,ee,ne,ie,oe,se,ae,re,le,ce,ue,de,me,ve,pe=false,fe=false,he=[],be=false,ge=false,ye=[],we=false,ke=[],xe="undefined"!=typeof document,Le=ct,_e=at||st?"cssFloat":"float",Te=xe&&!ut&&!ct&&"draggable"in document.createElement("div"),Oe=function(){
	if(xe){if(st)return  false;var t=document.createElement("x")
	;return t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}
	}(),De=function(t,e){
	var n=wt(t),i=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),o=Ot(t,0,e),s=Ot(t,1,e),a=o&&wt(o),r=s&&wt(s),l=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+_t(o).width,c=r&&parseInt(r.marginLeft)+parseInt(r.marginRight)+_t(s).width
	;if("flex"===n.display)return "column"===n.flexDirection||"column-reverse"===n.flexDirection?"vertical":"horizontal"
	;if("grid"===n.display)return n.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal"
	;if(o&&a.float&&"none"!==a.float){var u="left"===a.float?"left":"right"
	;return !s||"both"!==r.clear&&r.clear!==u?"horizontal":"vertical"}
	return o&&("block"===a.display||"flex"===a.display||"table"===a.display||"grid"===a.display||l>=i&&"none"===n[_e]||s&&"none"===n[_e]&&l+c>i)?"vertical":"horizontal"
	},Ie=function(t){function e(t,n){return function(i,o,s,a){
	var r=i.options.group.name&&o.options.group.name&&i.options.group.name===o.options.group.name
	;if(null==t&&(n||r))return  true;if(null==t||false===t)return  false
	;if(n&&"clone"===t)return t
	;if("function"==typeof t)return e(t(i,o,s,a),n)(i,o,s,a)
	;var l=(n?i:o).options.group.name
	;return  true===t||"string"==typeof t&&t===l||t.join&&t.indexOf(l)>-1}}
	var n={},i=t.group;i&&"object"==et(i)||(i={name:i
	}),n.name=i.name,n.checkPull=e(i.pull,true),
	n.checkPut=e(i.put),n.revertClone=i.revertClone,t.group=n;},Me=function(){
	!Oe&&Gt&&wt(Gt,"display","none");},Se=function(){!Oe&&Gt&&wt(Gt,"display","");}
	;xe&&!ut&&document.addEventListener("click",(function(t){
	if(fe)return t.preventDefault(),
	t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),
	fe=false,false}),true);var je=function(t){if(Ft){t=t.touches?t.touches[0]:t
	;var e=(o=t.clientX,s=t.clientY,he.some((function(t){
	var e=t[At].options.emptyInsertThreshold;if(e&&!Dt(t)){
	var n=_t(t),i=o>=n.left-e&&o<=n.right+e,r=s>=n.top-e&&s<=n.bottom+e
	;return i&&r?a=t:void 0}})),a);if(e){var n={}
	;for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i])
	;n.target=n.rootEl=e,n.preventDefault=void 0,
	n.stopPropagation=void 0,e[At]._onDragOver(n);}}var o,s,a;},Pe=function(t){
	Ft&&Ft.parentNode[At]._isOutsideThisEl(t.target);};function Ee(t,e){
	if(!t||!t.nodeType||1!==t.nodeType)throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t))
	;this.el=t,this.options=e=it({},e),t[At]=this;var n,i,o={group:null,sort:true,
	disabled:false,store:null,handle:null,
	draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:false,
	invertedSwapThreshold:null,removeCloneOnHide:true,direction:function(){
	return De(t,this.options)},ghostClass:"sortable-ghost",
	chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",
	filter:null,preventOnFilter:true,animation:0,easing:null,setData:function(t,e){
	t.setData("Text",e.textContent);},dropBubble:false,dragoverBubble:false,
	dataIdAttr:"data-id",delay:0,delayOnTouchOnly:false,
	touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,
	forceFallback:false,fallbackClass:"sortable-fallback",fallbackOnBody:false,
	fallbackTolerance:0,fallbackOffset:{x:0,y:0},
	supportPointer:false!==Ee.supportPointer&&"PointerEvent"in window&&(!lt||ct),
	emptyInsertThreshold:5}
	;for(var s in Nt.initializePlugins(this,t,o),o)!(s in e)&&(e[s]=o[s])
	;for(var a in Ie(e),
	this)"_"===a.charAt(0)&&"function"==typeof this[a]&&(this[a]=this[a].bind(this))
	;this.nativeDraggable=!e.forceFallback&&Te,
	this.nativeDraggable&&(this.options.touchStartThreshold=1),
	e.supportPointer?mt(t,"pointerdown",this._onTapStart):(mt(t,"mousedown",this._onTapStart),
	mt(t,"touchstart",this._onTapStart)),
	this.nativeDraggable&&(mt(t,"dragover",this),
	mt(t,"dragenter",this)),he.push(this.el),
	e.store&&e.store.get&&this.sort(e.store.get(this)||[]),it(this,(i=[],{
	captureAnimationState:function(){
	i=[],this.options.animation&&[].slice.call(this.el.children).forEach((function(t){
	if("none"!==wt(t,"display")&&t!==Ee.ghost){i.push({target:t,rect:_t(t)})
	;var e=tt({},i[i.length-1].rect);if(t.thisAnimationDuration){var n=kt(t,true)
	;n&&(e.top-=n.f,e.left-=n.e);}t.fromRect=e;}}));},addAnimationState:function(t){
	i.push(t);},removeAnimationState:function(t){i.splice(function(t,e){
	for(var n in t)if(t.hasOwnProperty(n))for(var i in e)if(e.hasOwnProperty(i)&&e[i]===t[n][i])return +n
	;return  -1}(i,{target:t}),1);},animateAll:function(t){var e=this
	;if(!this.options.animation)return clearTimeout(n),
	void("function"==typeof t&&t());var o=false,s=0;i.forEach((function(t){
	var n=0,i=t.target,a=i.fromRect,r=_t(i),l=i.prevFromRect,c=i.prevToRect,u=t.rect,d=kt(i,true)
	;d&&(r.top-=d.f,
	r.left-=d.e),i.toRect=r,i.thisAnimationDuration&&jt(l,r)&&!jt(a,r)&&(u.top-r.top)/(u.left-r.left)===(a.top-r.top)/(a.left-r.left)&&(n=function(t,e,n,i){
	return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-n.top,2)+Math.pow(e.left-n.left,2))*i.animation
	}(u,l,c,e.options)),
	jt(r,a)||(i.prevFromRect=a,i.prevToRect=r,n||(n=e.options.animation),
	e.animate(i,u,r,n)),
	n&&(o=true,s=Math.max(s,n),clearTimeout(i.animationResetTimer),
	i.animationResetTimer=setTimeout((function(){
	i.animationTime=0,i.prevFromRect=null,
	i.fromRect=null,i.prevToRect=null,i.thisAnimationDuration=null;
	}),n),i.thisAnimationDuration=n);})),clearTimeout(n),o?n=setTimeout((function(){
	"function"==typeof t&&t();}),s):"function"==typeof t&&t(),i=[];},
	animate:function(t,e,n,i){if(i){wt(t,"transition",""),wt(t,"transform","")
	;var o=kt(this.el),s=o&&o.a,a=o&&o.d,r=(e.left-n.left)/(s||1),l=(e.top-n.top)/(a||1)
	;t.animatingX=!!r,
	t.animatingY=!!l,wt(t,"transform","translate3d("+r+"px,"+l+"px,0)"),
	this.forRepaintDummy=function(t){return t.offsetWidth
	}(t),wt(t,"transition","transform "+i+"ms"+(this.options.easing?" "+this.options.easing:"")),
	wt(t,"transform","translate3d(0,0,0)"),
	"number"==typeof t.animated&&clearTimeout(t.animated),
	t.animated=setTimeout((function(){
	wt(t,"transition",""),wt(t,"transform",""),t.animated=false,
	t.animatingX=false,t.animatingY=false;}),i);}}}));}function $e(t,e,n,i,o,s,a,r){
	var l,c,u=t[At],d=u.options.onMove
	;return !window.CustomEvent||st||at?(l=document.createEvent("Event")).initEvent("move",true,true):l=new CustomEvent("move",{
	bubbles:true,cancelable:true
	}),l.to=e,l.from=t,l.dragged=n,l.draggedRect=i,l.related=o||e,
	l.relatedRect=s||_t(e),l.willInsertAfter=r,l.originalEvent=a,t.dispatchEvent(l),
	d&&(c=d.call(u,l,a)),c}function qe(t){t.draggable=false;}function Ae(){we=false;}
	function ze(t){
	for(var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,i=0;n--;)i+=e.charCodeAt(n)
	;return i.toString(36)}function Ce(t){return setTimeout(t,0)}function Ne(t){
	return clearTimeout(t)}Ee.prototype={constructor:Ee,
	_isOutsideThisEl:function(t){this.el.contains(t)||t===this.el||(ue=null);},
	_getDirection:function(t,e){
	return "function"==typeof this.options.direction?this.options.direction.call(this,t,e,Ft):this.options.direction
	},_onTapStart:function(t){if(t.cancelable){
	var e=this,n=this.el,i=this.options,o=i.preventOnFilter,s=t.type,a=t.touches&&t.touches[0]||t.pointerType&&"touch"===t.pointerType&&t,r=(a||t).target,l=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||r,c=i.filter
	;if(function(t){ke.length=0
	;for(var e=t.getElementsByTagName("input"),n=e.length;n--;){var i=e[n]
	;i.checked&&ke.push(i);}
	}(n),!Ft&&!(/mousedown|pointerdown/.test(s)&&0!==t.button||i.disabled)&&!l.isContentEditable&&(this.nativeDraggable||!lt||!r||"SELECT"!==r.tagName.toUpperCase())&&!((r=ht(r,i.draggable,n,false))&&r.animated||Yt===r)){
	if(Qt=It(r),Zt=It(r,i.draggable),"function"==typeof c){
	if(c.call(this,t,r,this))return Ht({sortable:e,rootEl:l,name:"filter",
	targetEl:r,toEl:n,fromEl:n}),Bt("filter",e,{evt:t}),void(o&&t.preventDefault())
	}else if(c&&(c=c.split(",").some((function(i){
	if(i=ht(l,i.trim(),n,false))return Ht({sortable:e,rootEl:i,name:"filter",
	targetEl:r,fromEl:n,toEl:n}),Bt("filter",e,{evt:t}),true
	}))))return void(o&&t.preventDefault())
	;i.handle&&!ht(l,i.handle,n,false)||this._prepareDragStart(t,a,r);}}},
	_prepareDragStart:function(t,e,n){
	var i,o=this,s=o.el,a=o.options,r=s.ownerDocument;if(n&&!Ft&&n.parentNode===s){
	var l=_t(n)
	;if(Wt=s,Ut=(Ft=n).parentNode,Xt=Ft.nextSibling,Yt=n,ee=a.group,Ee.dragged=Ft,
	ie={target:Ft,clientX:(e||t).clientX,clientY:(e||t).clientY
	},re=ie.clientX-l.left,
	le=ie.clientY-l.top,this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,
	Ft.style["will-change"]="all",i=function(){Bt("delayEnded",o,{evt:t
	}),Ee.eventCanceled?o._onDrop():(o._disableDelayedDragEvents(),
	!rt&&o.nativeDraggable&&(Ft.draggable=true),o._triggerDragStart(t,e),Ht({
	sortable:o,name:"choose",originalEvent:t}),yt(Ft,a.chosenClass,true));
	},a.ignore.split(",").forEach((function(t){xt(Ft,t.trim(),qe);
	})),mt(r,"dragover",je),
	mt(r,"mousemove",je),mt(r,"touchmove",je),a.supportPointer?(mt(r,"pointerup",o._onDrop),
	!this.nativeDraggable&&mt(r,"pointercancel",o._onDrop)):(mt(r,"mouseup",o._onDrop),
	mt(r,"touchend",o._onDrop),
	mt(r,"touchcancel",o._onDrop)),rt&&this.nativeDraggable&&(this.options.touchStartThreshold=4,
	Ft.draggable=true),Bt("delayStart",this,{evt:t
	}),!a.delay||a.delayOnTouchOnly&&!e||this.nativeDraggable&&(at||st))i();else {
	if(Ee.eventCanceled)return void this._onDrop()
	;a.supportPointer?(mt(r,"pointerup",o._disableDelayedDrag),
	mt(r,"pointercancel",o._disableDelayedDrag)):(mt(r,"mouseup",o._disableDelayedDrag),
	mt(r,"touchend",o._disableDelayedDrag),
	mt(r,"touchcancel",o._disableDelayedDrag)),
	mt(r,"mousemove",o._delayedDragTouchMoveHandler),
	mt(r,"touchmove",o._delayedDragTouchMoveHandler),
	a.supportPointer&&mt(r,"pointermove",o._delayedDragTouchMoveHandler),
	o._dragStartTimer=setTimeout(i,a.delay);}}},
	_delayedDragTouchMoveHandler:function(t){var e=t.touches?t.touches[0]:t
	;Math.max(Math.abs(e.clientX-this._lastX),Math.abs(e.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag();
	},_disableDelayedDrag:function(){
	Ft&&qe(Ft),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents();},
	_disableDelayedDragEvents:function(){var t=this.el.ownerDocument
	;vt(t,"mouseup",this._disableDelayedDrag),
	vt(t,"touchend",this._disableDelayedDrag),
	vt(t,"touchcancel",this._disableDelayedDrag),
	vt(t,"pointerup",this._disableDelayedDrag),
	vt(t,"pointercancel",this._disableDelayedDrag),
	vt(t,"mousemove",this._delayedDragTouchMoveHandler),
	vt(t,"touchmove",this._delayedDragTouchMoveHandler),
	vt(t,"pointermove",this._delayedDragTouchMoveHandler);},
	_triggerDragStart:function(t,e){
	e=e||"touch"==t.pointerType&&t,!this.nativeDraggable||e?this.options.supportPointer?mt(document,"pointermove",this._onTouchMove):mt(document,e?"touchmove":"mousemove",this._onTouchMove):(mt(Ft,"dragend",this),
	mt(Wt,"dragstart",this._onDragStart));try{document.selection?Ce((function(){
	document.selection.empty();})):window.getSelection().removeAllRanges();}catch(n){}
	},_dragStarted:function(t,e){if(pe=false,Wt&&Ft){Bt("dragStarted",this,{evt:e
	}),this.nativeDraggable&&mt(document,"dragover",Pe);var n=this.options
	;!t&&yt(Ft,n.dragClass,false),
	yt(Ft,n.ghostClass,true),Ee.active=this,t&&this._appendGhost(),Ht({sortable:this,
	name:"start",originalEvent:e});}else this._nulling();},
	_emulateDragOver:function(){if(oe){
	this._lastX=oe.clientX,this._lastY=oe.clientY,Me()
	;for(var t=document.elementFromPoint(oe.clientX,oe.clientY),e=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(oe.clientX,oe.clientY))!==e;)e=t
	;if(Ft.parentNode[At]._isOutsideThisEl(t),e)do{if(e[At]&&e[At]._onDragOver({
	clientX:oe.clientX,clientY:oe.clientY,target:t,rootEl:e
	})&&!this.options.dragoverBubble)break;t=e;}while(e=ft(e));Se();}},
	_onTouchMove:function(t){if(ie){
	var e=this.options,n=e.fallbackTolerance,i=e.fallbackOffset,o=t.touches?t.touches[0]:t,s=Gt&&kt(Gt,true),a=Gt&&s&&s.a,r=Gt&&s&&s.d,l=Le&&ve&&Mt(ve),c=(o.clientX-ie.clientX+i.x)/(a||1)+(l?l[0]-ye[0]:0)/(a||1),u=(o.clientY-ie.clientY+i.y)/(r||1)+(l?l[1]-ye[1]:0)/(r||1)
	;if(!Ee.active&&!pe){
	if(n&&Math.max(Math.abs(o.clientX-this._lastX),Math.abs(o.clientY-this._lastY))<n)return
	;this._onDragStart(t,true);}if(Gt){s?(s.e+=c-(se||0),s.f+=u-(ae||0)):s={a:1,b:0,
	c:0,d:1,e:c,f:u}
	;var d="matrix(".concat(s.a,",").concat(s.b,",").concat(s.c,",").concat(s.d,",").concat(s.e,",").concat(s.f,")")
	;wt(Gt,"webkitTransform",d),
	wt(Gt,"mozTransform",d),wt(Gt,"msTransform",d),wt(Gt,"transform",d),
	se=c,ae=u,oe=o;}t.cancelable&&t.preventDefault();}},_appendGhost:function(){
	if(!Gt){
	var t=this.options.fallbackOnBody?document.body:Wt,e=_t(Ft,true,Le,true,t),n=this.options
	;if(Le){
	for(ve=t;"static"===wt(ve,"position")&&"none"===wt(ve,"transform")&&ve!==document;)ve=ve.parentNode
	;ve!==document.body&&ve!==document.documentElement?(ve===document&&(ve=Lt()),
	e.top+=ve.scrollTop,e.left+=ve.scrollLeft):ve=Lt(),ye=Mt(ve);}
	yt(Gt=Ft.cloneNode(true),n.ghostClass,false),
	yt(Gt,n.fallbackClass,true),yt(Gt,n.dragClass,true),
	wt(Gt,"transition",""),wt(Gt,"transform",""),
	wt(Gt,"box-sizing","border-box"),wt(Gt,"margin",0),
	wt(Gt,"top",e.top),wt(Gt,"left",e.left),
	wt(Gt,"width",e.width),wt(Gt,"height",e.height),
	wt(Gt,"opacity","0.8"),wt(Gt,"position",Le?"absolute":"fixed"),
	wt(Gt,"zIndex","100000"),
	wt(Gt,"pointerEvents","none"),Ee.ghost=Gt,t.appendChild(Gt),
	wt(Gt,"transform-origin",re/parseInt(Gt.style.width)*100+"% "+le/parseInt(Gt.style.height)*100+"%");
	}},_onDragStart:function(t,e){var n=this,i=t.dataTransfer,o=n.options
	;Bt("dragStart",this,{evt:t
	}),Ee.eventCanceled?this._onDrop():(Bt("setupClone",this),
	Ee.eventCanceled||((Jt=$t(Ft)).removeAttribute("id"),
	Jt.draggable=false,Jt.style["will-change"]="",
	this._hideClone(),yt(Jt,this.options.chosenClass,false),
	Ee.clone=Jt),n.cloneId=Ce((function(){
	Bt("clone",n),Ee.eventCanceled||(n.options.removeCloneOnHide||Wt.insertBefore(Jt,Ft),
	n._hideClone(),Ht({sortable:n,name:"clone"}));
	})),!e&&yt(Ft,o.dragClass,true),e?(fe=true,
	n._loopId=setInterval(n._emulateDragOver,50)):(vt(document,"mouseup",n._onDrop),
	vt(document,"touchend",n._onDrop),
	vt(document,"touchcancel",n._onDrop),i&&(i.effectAllowed="move",
	o.setData&&o.setData.call(n,i,Ft)),
	mt(document,"drop",n),wt(Ft,"transform","translateZ(0)")),
	pe=true,n._dragStartId=Ce(n._dragStarted.bind(n,e,t)),
	mt(document,"selectstart",n),
	ce=true,window.getSelection().removeAllRanges(),lt&&wt(document.body,"user-select","none"));
	},_onDragOver:function(t){
	var e,n,i,o,s=this.el,a=t.target,r=this.options,l=r.group,c=Ee.active,u=ee===l,d=r.sort,m=ne||c,v=this,p=false
	;if(!we){
	if(void 0!==t.preventDefault&&t.cancelable&&t.preventDefault(),a=ht(a,r.draggable,s,true),
	M("dragOver"),Ee.eventCanceled)return p
	;if(Ft.contains(t.target)||a.animated&&a.animatingX&&a.animatingY||v._ignoreWhileAnimating===a)return j(false)
	;if(fe=false,
	c&&!r.disabled&&(u?d||(i=Ut!==Wt):ne===this||(this.lastPutMode=ee.checkPull(this,c,Ft,t))&&l.checkPut(this,c,Ft,t))){
	if(o="vertical"===this._getDirection(t,a),
	e=_t(Ft),M("dragOverValid"),Ee.eventCanceled)return p
	;if(i)return Ut=Wt,S(),this._hideClone(),
	M("revert"),Ee.eventCanceled||(Xt?Wt.insertBefore(Ft,Xt):Wt.appendChild(Ft)),
	j(true);var f=Dt(s,r.draggable);if(!f||function(t,e,n){
	var i=_t(Dt(n.el,n.options.draggable)),o=qt(n.el,n.options,Gt)
	;return e?t.clientX>o.right+10||t.clientY>i.bottom&&t.clientX>i.left:t.clientY>o.bottom+10||t.clientX>i.right&&t.clientY>i.top
	}(t,o,this)&&!f.animated){if(f===Ft)return j(false)
	;if(f&&s===t.target&&(a=f),a&&(n=_t(a)),false!==$e(Wt,s,Ft,e,a,n,t,!!a))return S(),
	f&&f.nextSibling?s.insertBefore(Ft,f.nextSibling):s.appendChild(Ft),
	Ut=s,P(),j(true)}else if(f&&function(t,e,n){
	var i=_t(Ot(n.el,0,n.options,true)),o=qt(n.el,n.options,Gt)
	;return e?t.clientX<o.left-10||t.clientY<i.top&&t.clientX<i.right:t.clientY<o.top-10||t.clientY<i.bottom&&t.clientX<i.left
	}(t,o,this)){var h=Ot(s,0,r,true);if(h===Ft)return j(false)
	;if(n=_t(a=h),false!==$e(Wt,s,Ft,e,a,n,t,false))return S(),
	s.insertBefore(Ft,h),Ut=s,P(),j(true)}else if(a.parentNode===s){n=_t(a)
	;var b,g,y,w=Ft.parentNode!==s,k=!function(t,e,n){
	var i=n?t.left:t.top,o=n?t.right:t.bottom,s=n?t.width:t.height,a=n?e.left:e.top,r=n?e.right:e.bottom,l=n?e.width:e.height
	;return i===a||o===r||i+s/2===a+l/2
	}(Ft.animated&&Ft.toRect||e,a.animated&&a.toRect||n,o),x=o?"top":"left",L=Tt(a,"top","top")||Tt(Ft,"top","top"),_=L?L.scrollTop:void 0
	;if(ue!==a&&(g=n[x],be=false,ge=!k&&r.invertSwap||w),b=function(t,e,n,i,o,s,a,r){
	var l=i?t.clientY:t.clientX,c=i?n.height:n.width,u=i?n.top:n.left,d=i?n.bottom:n.right,m=false
	;if(!a)if(r&&me<c*o){
	if(!be&&(1===de?l>u+c*s/2:l<d-c*s/2)&&(be=true),be)m=true;else if(1===de?l<u+me:l>d-me)return -de
	}else if(l>u+c*(1-o)/2&&l<d-c*(1-o)/2)return function(t){
	return It(Ft)<It(t)?1:-1}(e)
	;return (m=m||a)&&(l<u+c*s/2||l>d-c*s/2)?l>u+c/2?1:-1:0
	}(t,a,n,o,k?1:r.swapThreshold,null==r.invertedSwapThreshold?r.swapThreshold:r.invertedSwapThreshold,ge,ue===a),
	0!==b){var T=It(Ft);do{T-=b,y=Ut.children[T];
	}while(y&&("none"===wt(y,"display")||y===Gt))}if(0===b||y===a)return j(false);ue=a,
	de=b;var O=a.nextElementSibling,D=false,I=$e(Wt,s,Ft,e,a,n,t,D=1===b)
	;if(false!==I)return 1!==I&&-1!==I||(D=1===I),
	we=true,setTimeout(Ae,30),S(),D&&!O?s.appendChild(Ft):a.parentNode.insertBefore(Ft,D?O:a),
	L&&Et(L,0,_-L.scrollTop),
	Ut=Ft.parentNode,void 0===g||ge||(me=Math.abs(g-_t(a)[x])),P(),j(true)}
	if(s.contains(Ft))return j(false)}return  false}function M(r,l){Bt(r,v,tt({evt:t,
	isOwner:u,axis:o?"vertical":"horizontal",revert:i,dragRect:e,targetRect:n,
	canSort:d,fromSortable:m,target:a,completed:j,onMove:function(n,i){
	return $e(Wt,s,Ft,e,n,_t(n),t,i)},changed:P},l));}function S(){
	M("dragOverAnimationCapture"),
	v.captureAnimationState(),v!==m&&m.captureAnimationState();}function j(e){
	return M("dragOverCompleted",{insertion:e
	}),e&&(u?c._hideClone():c._showClone(v),
	v!==m&&(yt(Ft,ne?ne.options.ghostClass:c.options.ghostClass,false),
	yt(Ft,r.ghostClass,true)),ne!==v&&v!==Ee.active?ne=v:v===Ee.active&&ne&&(ne=null),
	m===v&&(v._ignoreWhileAnimating=a),v.animateAll((function(){
	M("dragOverAnimationComplete"),v._ignoreWhileAnimating=null;
	})),v!==m&&(m.animateAll(),
	m._ignoreWhileAnimating=null)),(a===Ft&&!Ft.animated||a===s&&!a.animated)&&(ue=null),
	r.dragoverBubble||t.rootEl||a===document||(Ft.parentNode[At]._isOutsideThisEl(t.target),
	!e&&je(t)),!r.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),p=true}
	function P(){Vt=It(Ft),te=It(Ft,r.draggable),Ht({sortable:v,name:"change",
	toEl:s,newIndex:Vt,newDraggableIndex:te,originalEvent:t});}},
	_ignoreWhileAnimating:null,_offMoveEvents:function(){
	vt(document,"mousemove",this._onTouchMove),
	vt(document,"touchmove",this._onTouchMove),
	vt(document,"pointermove",this._onTouchMove),
	vt(document,"dragover",je),vt(document,"mousemove",je),
	vt(document,"touchmove",je);},_offUpEvents:function(){var t=this.el.ownerDocument
	;vt(t,"mouseup",this._onDrop),
	vt(t,"touchend",this._onDrop),vt(t,"pointerup",this._onDrop),
	vt(t,"pointercancel",this._onDrop),
	vt(t,"touchcancel",this._onDrop),vt(document,"selectstart",this);},
	_onDrop:function(t){var e=this.el,n=this.options
	;Vt=It(Ft),te=It(Ft,n.draggable),Bt("drop",this,{evt:t
	}),Ut=Ft&&Ft.parentNode,Vt=It(Ft),
	te=It(Ft,n.draggable),Ee.eventCanceled||(pe=false,
	ge=false,be=false,clearInterval(this._loopId),
	clearTimeout(this._dragStartTimer),Ne(this.cloneId),
	Ne(this._dragStartId),this.nativeDraggable&&(vt(document,"drop",this),
	vt(e,"dragstart",this._onDragStart)),
	this._offMoveEvents(),this._offUpEvents(),lt&&wt(document.body,"user-select",""),
	wt(Ft,"transform",""),
	t&&(ce&&(t.cancelable&&t.preventDefault(),!n.dropBubble&&t.stopPropagation()),
	Gt&&Gt.parentNode&&Gt.parentNode.removeChild(Gt),
	(Wt===Ut||ne&&"clone"!==ne.lastPutMode)&&Jt&&Jt.parentNode&&Jt.parentNode.removeChild(Jt),
	Ft&&(this.nativeDraggable&&vt(Ft,"dragend",this),
	qe(Ft),Ft.style["will-change"]="",
	ce&&!pe&&yt(Ft,ne?ne.options.ghostClass:this.options.ghostClass,false),
	yt(Ft,this.options.chosenClass,false),Ht({sortable:this,name:"unchoose",toEl:Ut,
	newIndex:null,newDraggableIndex:null,originalEvent:t}),Wt!==Ut?(Vt>=0&&(Ht({
	rootEl:Ut,name:"add",toEl:Ut,fromEl:Wt,originalEvent:t}),Ht({sortable:this,
	name:"remove",toEl:Ut,originalEvent:t}),Ht({rootEl:Ut,name:"sort",toEl:Ut,
	fromEl:Wt,originalEvent:t}),Ht({sortable:this,name:"sort",toEl:Ut,
	originalEvent:t})),ne&&ne.save()):Vt!==Qt&&Vt>=0&&(Ht({sortable:this,
	name:"update",toEl:Ut,originalEvent:t}),Ht({sortable:this,name:"sort",toEl:Ut,
	originalEvent:t})),Ee.active&&(null!=Vt&&-1!==Vt||(Vt=Qt,te=Zt),Ht({
	sortable:this,name:"end",toEl:Ut,originalEvent:t
	}),this.save())))),this._nulling();},_nulling:function(){
	Bt("nulling",this),Wt=Ft=Ut=Gt=Xt=Jt=Yt=Kt=ie=oe=ce=Vt=te=Qt=Zt=ue=de=ne=ee=Ee.dragged=Ee.ghost=Ee.clone=Ee.active=null,
	ke.forEach((function(t){t.checked=true;})),ke.length=se=ae=0;},
	handleEvent:function(t){switch(t.type){case "drop":case "dragend":this._onDrop(t)
	;break;case "dragenter":case "dragover":Ft&&(this._onDragOver(t),function(t){
	t.dataTransfer&&(t.dataTransfer.dropEffect="move"),
	t.cancelable&&t.preventDefault();}(t));break;case "selectstart":t.preventDefault();
	}},toArray:function(){
	for(var t,e=[],n=this.el.children,i=0,o=n.length,s=this.options;i<o;i++)ht(t=n[i],s.draggable,this.el,false)&&e.push(t.getAttribute(s.dataIdAttr)||ze(t))
	;return e},sort:function(t,e){var n={},i=this.el
	;this.toArray().forEach((function(t,e){var o=i.children[e]
	;ht(o,this.options.draggable,i,false)&&(n[t]=o);
	}),this),e&&this.captureAnimationState(),t.forEach((function(t){
	n[t]&&(i.removeChild(n[t]),i.appendChild(n[t]));})),e&&this.animateAll();},
	save:function(){var t=this.options.store;t&&t.set&&t.set(this);},
	closest:function(t,e){return ht(t,e||this.options.draggable,this.el,false)},
	option:function(t,e){var n=this.options;if(void 0===e)return n[t]
	;var i=Nt.modifyOption(this,t,e);n[t]=void 0!==i?i:e,"group"===t&&Ie(n);},
	destroy:function(){Bt("destroy",this);var t=this.el
	;t[At]=null,vt(t,"mousedown",this._onTapStart),
	vt(t,"touchstart",this._onTapStart),
	vt(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(vt(t,"dragover",this),
	vt(t,"dragenter",this)),
	[].forEach.call(t.querySelectorAll("[draggable]"),(function(t){
	t.removeAttribute("draggable");
	})),this._onDrop(),this._disableDelayedDragEvents(),
	he.splice(he.indexOf(this.el),1),this.el=t=null;},_hideClone:function(){if(!Kt){
	if(Bt("hideClone",this),Ee.eventCanceled)return
	;wt(Jt,"display","none"),this.options.removeCloneOnHide&&Jt.parentNode&&Jt.parentNode.removeChild(Jt),
	Kt=true;}},_showClone:function(t){if("clone"===t.lastPutMode){if(Kt){
	if(Bt("showClone",this),Ee.eventCanceled)return
	;Ft.parentNode!=Wt||this.options.group.revertClone?Xt?Wt.insertBefore(Jt,Xt):Wt.appendChild(Jt):Wt.insertBefore(Jt,Ft),
	this.options.group.revertClone&&this.animate(Ft,Jt),wt(Jt,"display",""),Kt=false;}
	}else this._hideClone();}},xe&&mt(document,"touchmove",(function(t){
	(Ee.active||pe)&&t.cancelable&&t.preventDefault();})),Ee.utils={on:mt,off:vt,
	css:wt,find:xt,is:function(t,e){return !!ht(t,e,t,false)},extend:function(t,e){
	if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t},throttle:Pt,
	closest:ht,toggleClass:yt,clone:$t,index:It,nextTick:Ce,cancelNextTick:Ne,
	detectDirection:De,getChild:Ot,expando:At},Ee.get=function(t){return t[At]
	},Ee.mount=function(){
	for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n]
	;e[0].constructor===Array&&(e=e[0]),e.forEach((function(t){
	if(!t.prototype||!t.prototype.constructor)throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t))
	;t.utils&&(Ee.utils=tt(tt({},Ee.utils),t.utils)),Nt.mount(t);}));
	},Ee.create=function(t,e){return new Ee(t,e)},Ee.version="1.15.6"
	;var Re,Be,He,Fe,Ue,Ge,We=[],Xe=false;function Ye(){We.forEach((function(t){
	clearInterval(t.pid);})),We=[];}function Je(){clearInterval(Ge);}
	var Ke=Pt((function(t,e,n,i){if(e.scroll){
	var o,s=(t.touches?t.touches[0]:t).clientX,a=(t.touches?t.touches[0]:t).clientY,r=e.scrollSensitivity,l=e.scrollSpeed,c=Lt(),u=false
	;Be!==n&&(Be=n,Ye(),Re=e.scroll,o=e.scrollFn,true===Re&&(Re=St(n,true)))
	;var d=0,m=Re;do{
	var v=m,p=_t(v),f=p.top,h=p.bottom,b=p.left,g=p.right,y=p.width,w=p.height,k=void 0,x=void 0,L=v.scrollWidth,_=v.scrollHeight,T=wt(v),O=v.scrollLeft,D=v.scrollTop
	;v===c?(k=y<L&&("auto"===T.overflowX||"scroll"===T.overflowX||"visible"===T.overflowX),
	x=w<_&&("auto"===T.overflowY||"scroll"===T.overflowY||"visible"===T.overflowY)):(k=y<L&&("auto"===T.overflowX||"scroll"===T.overflowX),
	x=w<_&&("auto"===T.overflowY||"scroll"===T.overflowY))
	;var I=k&&(Math.abs(g-s)<=r&&O+y<L)-(Math.abs(b-s)<=r&&!!O),M=x&&(Math.abs(h-a)<=r&&D+w<_)-(Math.abs(f-a)<=r&&!!D)
	;if(!We[d])for(var S=0;S<=d;S++)We[S]||(We[S]={})
	;We[d].vx==I&&We[d].vy==M&&We[d].el===v||(We[d].el=v,
	We[d].vx=I,We[d].vy=M,clearInterval(We[d].pid),
	0==I&&0==M||(u=true,We[d].pid=setInterval(function(){
	i&&0===this.layer&&Ee.active._onTouchMove(Ue)
	;var e=We[this.layer].vy?We[this.layer].vy*l:0,n=We[this.layer].vx?We[this.layer].vx*l:0
	;"function"==typeof o&&"continue"!==o.call(Ee.dragged.parentNode[At],n,e,t,Ue,We[this.layer].el)||Et(We[this.layer].el,n,e);
	}.bind({layer:d}),24))),d++;}while(e.bubbleScroll&&m!==c&&(m=St(m,false)));Xe=u;}
	}),30),Qe=function(t){
	var e=t.originalEvent,n=t.putSortable,i=t.dragEl,o=t.activeSortable,s=t.dispatchSortableEvent,a=t.hideGhostForTarget,r=t.unhideGhostForTarget
	;if(e){var l=n||o;a()
	;var c=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e,u=document.elementFromPoint(c.clientX,c.clientY)
	;r(),l&&!l.el.contains(u)&&(s("spill"),this.onSpill({dragEl:i,putSortable:n}));}}
	;function Ve(){}function Ze(){}Ve.prototype={startIndex:null,
	dragStart:function(t){var e=t.oldDraggableIndex;this.startIndex=e;},
	onSpill:function(t){var e=t.dragEl,n=t.putSortable
	;this.sortable.captureAnimationState(),n&&n.captureAnimationState()
	;var i=Ot(this.sortable.el,this.startIndex,this.options)
	;i?this.sortable.el.insertBefore(e,i):this.sortable.el.appendChild(e),
	this.sortable.animateAll(),n&&n.animateAll();},drop:Qe},it(Ve,{
	pluginName:"revertOnSpill"}),Ze.prototype={onSpill:function(t){
	var e=t.dragEl,n=t.putSortable||this.sortable
	;n.captureAnimationState(),e.parentNode&&e.parentNode.removeChild(e),
	n.animateAll();},drop:Qe},it(Ze,{pluginName:"removeOnSpill"
	}),Ee.mount(new function(){function t(){for(var t in this.defaults={scroll:true,
	forceAutoScrollFallback:false,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:true},
	this)"_"===t.charAt(0)&&"function"==typeof this[t]&&(this[t]=this[t].bind(this));
	}return t.prototype={dragStarted:function(t){var e=t.originalEvent
	;this.sortable.nativeDraggable?mt(document,"dragover",this._handleAutoScroll):this.options.supportPointer?mt(document,"pointermove",this._handleFallbackAutoScroll):e.touches?mt(document,"touchmove",this._handleFallbackAutoScroll):mt(document,"mousemove",this._handleFallbackAutoScroll);
	},dragOverCompleted:function(t){var e=t.originalEvent
	;this.options.dragOverBubble||e.rootEl||this._handleAutoScroll(e);},
	drop:function(){
	this.sortable.nativeDraggable?vt(document,"dragover",this._handleAutoScroll):(vt(document,"pointermove",this._handleFallbackAutoScroll),
	vt(document,"touchmove",this._handleFallbackAutoScroll),
	vt(document,"mousemove",this._handleFallbackAutoScroll)),
	Je(),Ye(),clearTimeout(bt),bt=void 0;},nulling:function(){
	Ue=Be=Re=Xe=Ge=He=Fe=null,We.length=0;},_handleFallbackAutoScroll:function(t){
	this._handleAutoScroll(t,true);},_handleAutoScroll:function(t,e){
	var n=this,i=(t.touches?t.touches[0]:t).clientX,o=(t.touches?t.touches[0]:t).clientY,s=document.elementFromPoint(i,o)
	;if(Ue=t,e||this.options.forceAutoScrollFallback||at||st||lt){
	Ke(t,this.options,s,e);var a=St(s,true)
	;!Xe||Ge&&i===He&&o===Fe||(Ge&&Je(),Ge=setInterval((function(){
	var s=St(document.elementFromPoint(i,o),true)
	;s!==a&&(a=s,Ye()),Ke(t,n.options,s,e);}),10),He=i,Fe=o);}else {
	if(!this.options.bubbleScroll||St(s,true)===Lt())return void Ye()
	;Ke(t,this.options,St(s,false),false);}}},it(t,{pluginName:"scroll",
	initializeByDefault:true})}),Ee.mount(Ze,Ve);const tn=()=>{
	console.log("nst - init default start")
	;const t=l()??{},e={},n=en.script,i=(null==t?void 0:t.script)??n
	;Object.keys(i).forEach((t=>{n[t]&&(n[t].enabled=i[t].enabled);
	})),t.script=n,Object.keys(en).forEach((n=>e[n]=t[n]??en[n])),
	c(e),console.log("nst - init default end");},en={script:{drugnoti:{
	name:"drug cooldown",enabled:false,
	description:"display a notification when not on drugs",onpage:"notification"},
	travnoti:{name:"travel",enabled:false,
	description:"display a notification when near landing",onpage:"notification"},
	hospnoti:{name:"hospital",enabled:false,
	description:"display a notification when almost out of hosp",
	onpage:"notification"},eventnoti:{name:"events",enabled:false,
	description:"display a notification when there are new events",
	onpage:"notification"},msgnoti:{name:"messages",enabled:false,
	description:"display a notification when there are new messages",
	onpage:"notification"},leftalign:{name:"left align",enabled:false,
	description:"align torn to the left",onpage:"all"},refillreminder:{
	name:"refill reminder",enabled:false,
	description:"highlight energy and nerve bar if refills haven't been used",
	onpage:"all"},minilastaction:{name:"mini profile last action",enabled:false,
	description:"display last action on mini profile",onpage:"all"},
	bazaarautoprice:{name:"bazaar auto price",enabled:false,
	description:"autoprice item for bazaar (double-click on input box)",
	onpage:"bazaar"},bazaarvalue:{name:"bazaar value",enabled:false,
	description:"show value of bazaar",onpage:"bazaar"},pokername:{
	name:"poker name link",enabled:false,description:"add link to player name",
	onpage:"casino"},rrtimeout:{name:"RR timeout",enabled:false,
	description:"add timeout timer to RR games",onpage:"casino"},cityfinds:{
	name:"city finds",enabled:false,description:"highlight items in the city",
	onpage:"city"},cshopmaxbuy:{name:"city shop max buy",enabled:false,
	description:"add the max between 100 and current stock",onpage:"city"},
	ezmoneydeposit:{name:"fast deposit",enabled:false,
	description:"deposit money with a double click (double-click on dollar sign)",
	onpage:"company"},companyrestock:{name:"company easy restock",enabled:false,
	description:"autoset restock amount to daily sold value (double-click on input box)",
	onpage:"company"},employeela:{name:"employee last action",enabled:false,
	description:"highlight employee with last action before one or two days",
	onpage:"company"},displaycaseitemid:{name:"display case items id",enabled:false,
	description:"shows item id on display case's manage page",onpage:"displaycase"},
	factionid:{name:"faction id",enabled:false,description:"show faction ID near name",
	onpage:"faction"},hidefactiondesc:{name:"hide faction description",enabled:false,
	description:"hide faction description",onpage:"faction"},hidewargraph:{
	name:"hide war graph",enabled:false,description:"hide war graph",onpage:"faction"},
	quickfaction:{name:"faction quick item",enabled:false,
	description:"quickly use items from faction",onpage:"faction"},fighterino:{
	name:"enhanced attack button",enabled:false,
	description:"add a button for faster attacks",onpage:"fight"},targetstatus:{
	name:"target info",enabled:false,
	description:"add useful information about the target",onpage:"fight"},
	warintercept:{name:"intercept link",enabled:false,
	description:"add links for intercept attacks",onpage:"fight"},specialgym:{
	name:"special gym",enabled:false,description:"show needed stats for special gyms",
	onpage:"gym"},livenetworth:{name:"live networth",enabled:false,
	description:"display live changes on newtworth",onpage:"home"},effectivestats:{
	name:"effective stats",enabled:false,
	description:"show effective stats after bonus/malus",onpage:"home"},
	maxbuyabroad:{name:"max buy abroad",enabled:false,
	description:"add max capacity quantity (double-click on input box)",
	onpage:"home"},quickitems:{name:"quick items",enabled:false,
	description:"quickly use items",onpage:"items"},rwbonus:{
	name:"rw bonus display",enabled:false,
	description:"display rw weapon bonus over the item instead of tooltip",
	onpage:"items"},removeuglyimage:{name:"hide new images",enabled:false,
	description:"hide new images from item page",onpage:"items"},equipnoconfirm:{
	name:"equip without confirm",enabled:false,
	description:"remove confirmation from item equip/use",onpage:"items"},
	easyloadoutequip:{name:"fast equip loadout",enabled:false,
	description:"equip loadout clicking in the whole are",onpage:"items"},
	marketnoconfirm:{name:"market quick buy",enabled:false,
	description:"remove confirmation in item market",onpage:"market"},quickjail:{
	name:"quick jail",enabled:false,description:"quickly bail and bust people",
	onpage:"jail"},missionhelper:{name:"mission helper",enabled:false,
	description:"tips for missions before accepting",onpage:"mission"},
	pointsnoconfirm:{name:"points quick buy",enabled:false,
	description:"remove confirmation in points market",onpage:"points"},
	pointsmuglight:{name:"points mug helper",enabled:false,
	description:"highlight profitable points for mugs",onpage:"points"},idtoname:{
	name:"id near name",enabled:false,description:"add player id near the name",
	onpage:"profile"},hidemedals:{name:"hide medals",enabled:false,
	description:"hide medal tab on profile",onpage:"profile"},statspies:{
	name:"stat spies",enabled:false,description:"add items and stats on profile page",
	onpage:"profile"},tradevalue:{name:"trade value",enabled:false,
	description:"add market value of items in trade",onpage:"trade"},quickghost:{
	name:"quick deposit ghost",enabled:false,
	description:"quickly deposit all money in a ghost trade",onpage:"trade"},
	warvalue:{name:"war reward value",enabled:false,
	description:"add caches value to war report",onpage:"war"}},assaperk:false,
	executeperk:false,hold:false,jailscore:1e4,lastnoti:1,mugperc:.075,mugthreshold:4e6,
	outcome:"leave",quickbail:false,quickbust:false,quickfaction:{},quickitems:{},
	reloadone:false,reloadtwo:false,spgymone:"elites",spgymtwo:"frontline",temp:false,
	weapon:{primary:0,secondary:1,melee:2}},nn=async()=>{
	const t=document.getElementById("nst-ts-message"),e=document.getElementById("nst-tsapikey")
	;if(!t||!e)return;const n=e.value
	;if(t.innerText="",19!==(null==n?void 0:n.length))return t.classList.remove("text-nstgreen"),
	void(t.innerText="Invalid Key Length");const i=await $({api:n,selection:""})
	;if(!(null==i?void 0:i.status))return t.classList.remove("text-nstgreen"),
	void(t.innerText="Invalid Key");c({tsapikey:n
	}),t.classList.add("text-nstgreen"),t.innerText="Key Saved";},on=async()=>{
	const t=document.getElementById("nst-message"),e=document.getElementById("nst-apikey")
	;if(!t||!e)return;const n=e.value
	;if(t.innerText="",16!==(null==n?void 0:n.length))return t.classList.remove("text-nstgreen"),
	void(t.innerText="Invalid Key Length");const i={section:"user",select:"profile",
	api:n},o=await E(i)
	;if(!(null==o?void 0:o.status))return t.classList.remove("text-nstgreen"),
	void(t.innerText=null==o?void 0:o.error);const{t:s,i:a}=q(o)
	;return void 0===s||void 0===a?(t.classList.remove("text-nstgreen"),
	void(t.innerText="API broken, wait for ched to fix")):(c({apikey:n}),z(o)?(c({
	userdata:o
	}),t.classList.add("text-nstgreen"),t.innerText="Login Successful",void an()):(u("nstdata"),
	t.classList.remove("text-nstgreen"),
	void(t.innerText="You are not allowed, contact seintz[2460991]")))
	},sn=async()=>{
	confirm("Are you sure you want to reset?")&&(u("nstdata"),window.location.reload());
	},an=()=>{if(!z())return;tn();const t=document.querySelector("#nst-ul-main")
	;fn(t,"tsapi",dn),fn(t,"attack",un),fn(t,"export",rn),fn(t,"import",ln)
	;const e=l("script"),n=Object.keys(e).sort().reduce(((t,n)=>(t[n]=null==e?void 0:e[n],
	t)),{})
	;Object.values(n).map((t=>t.onpage)).filter((t=>void 0!==t)).filter(((t,e,n)=>n.indexOf(t)==e)).sort().forEach((e=>fn(t,e,cn)));
	},rn=t=>{const e=document.getElementById(t);if(!e)return;e.innerHTML=""
	;const n=h({id:"nst-export-wrap",classList:"nst-api-wrap"}),i=g({
	id:"nst-export-btn",innerText:"export",classList:"torn-btn m-2",onclick:()=>{
	const t=JSON.stringify(l())
	;o.setAttribute("href",window.URL.createObjectURL(new Blob([t],{
	type:"application/json"
	}))+"#/nst-export"),o.setAttribute("download","nst-export.json"),
	o.classList.remove("hidden");}}),o=k({id:"nst-export-download",
	innerText:"Download"});o.classList.add("hidden","text-sm","text-nstmain","m-2"),
	n.appendChild(i),n.appendChild(o),e.appendChild(n);},ln=t=>{
	const e=document.getElementById(t);if(!e)return;e.innerHTML=""
	;const n=b({}),i=h({id:"nst-import-wrap",classList:"nst-api-wrap"}),o=g({
	id:"nst-import-btn",innerText:"import",classList:"torn-btn m-2",
	onclick:()=>s.click()}),s=L({id:"nst-import-input",type:"file",accept:"json",
	onchange:t=>{const e=new FileReader;e.addEventListener("load",(t=>{var e
	;const i=(t=>{try{return JSON.parse(t)}catch(e){console.error(e);}return null
	})(""+(null==(e=t.target)?void 0:e.result))
	;c(i),tn(),n.classList.remove("hidden"),
	n.classList.add("text-nstgreen"),n.innerHTML="<b>Import Successful</b>";
	})),e.addEventListener("error",(t=>{
	n.classList.remove("hidden"),n.classList.add("text-nstred"),
	n.innerHTML="<b>Import Unsuccessful</b>",console.error(t);
	})),e.readAsText(t.target.files[0]);}})
	;s.classList.add("hidden"),n.classList.add("hidden"),
	i.appendChild(o),i.appendChild(s),i.appendChild(n),e.appendChild(i);},cn=t=>{
	const e=document.getElementById(t);if(!e)return;e.innerHTML=""
	;const n=t.replace(/nst-/g,""),i=l("script"),o=Object.keys(i).sort().reduce(((t,e)=>{
	var o
	;return (null==(o=null==i?void 0:i[e])?void 0:o.onpage)===n&&(t[e]=null==i?void 0:i[e]),
	t}),{}),s=h({classList:"nst-script-block"})
	;Object.entries(o).forEach((([t,e])=>{const n=null==e?void 0:e.name,i=p(t),o={
	id:"nst-"+i,value:i,checked:(null==e?void 0:e.enabled)??false
	},a=O(o,n,e.description.toLowerCase(),(t=>{const e=t.target,n=l("script")
	;n[e.value].enabled=e.checked,c({script:n});}));s.appendChild(a);
	})),e.appendChild(s);},un=t=>{const e=document.getElementById(t)
	;e&&(e.innerHTML="",e.appendChild((()=>{const t=h({classList:"nst-block"
	}),e=f("h4",{classList:"nst-block-title",innerText:"mug threshold"})
	;return t.appendChild(e),T({elem:t,title:"mug threshold"}),t
	})()),e.appendChild((()=>{const t=h({classList:"nst-block"}),e=f("h4",{
	classList:"nst-block-title",innerText:"default outcome"}),n=h({id:"outcome",
	classList:"nst-outcome",onchange:t=>c({outcome:t.target.id})
	}),i=D("leave","outcome"),o=D("mug","outcome"),s=D("hospitalize","outcome"),a={
	id:"nst-hold",checked:l("hold")},r=O(a,"hold","",(t=>c({hold:t.target.checked
	})));return n.appendChild(i),n.appendChild(o),n.appendChild(s),t.appendChild(e),
	t.appendChild(n),t.appendChild(r),t})()),e.appendChild((()=>{
	const t=l("weapon"),e=h({classList:"nst-block"}),n=f("h4",{
	classList:"nst-block-title",innerText:"weapon order"}),i=h({id:"weapon"})
	;Object.keys(t).forEach((t=>{const e=h({id:t,classList:"list-group-item",
	innerText:t});e.setAttribute("data-id",t),i.appendChild(e);})),new Ee(i,{
	animation:150,store:{get:()=>{const t=l("weapon"),e=["","","",""]
	;return Object.entries(t).forEach((t=>e[t[1]]=t[0])),e},set:t=>{
	const e=t.toArray(),n=l("weapon");e.forEach((t=>n[t]=e.indexOf(t))),c({weapon:n
	});}}});const o={id:"nst-temp",checked:l("temp")
	},s=O(o,"use temp first","",(t=>c({temp:t.target.checked}))),a={id:"nst-assa",
	checked:l("assaperk")},r=O(a,"assassinate","",(t=>c({assaperk:t.target.checked
	}))),u={id:"nst-execute",checked:l("executeperk")},d=O(u,"execute","",(t=>c({
	executeperk:t.target.checked})))
	;return e.appendChild(n),e.appendChild(i),e.appendChild(s),
	e.appendChild(r),e.appendChild(d),e})()),e.appendChild((()=>{const t=h({
	classList:"nst-block"}),e=f("h4",{classList:"nst-block-title",
	innerText:"weapon reload"}),n=h({id:"reload",classList:"nst-outcome"}),i={
	id:"nst-reloadone",checked:l("reloadone")},o=O(i,"primary","",(t=>c({
	reloadone:t.target.checked}))),s={id:"nst-reloadtwo",checked:l("reloadtwo")
	},a=O(s,"secondary","",(t=>c({reloadtwo:t.target.checked})))
	;return n.appendChild(o),n.appendChild(a),t.appendChild(e),t.appendChild(n),t
	})()));},dn=t=>{const e=document.getElementById(t);if(!e)return;e.innerHTML=""
	;const n=k({href:"https://www.tornstats.com/settings/general",target:"_blank",
	innerText:"here",classList:"text-nstmain font-bold"}),i=h({classList:"text-base"
	});i.innerHTML="Create your TS key ",i.appendChild(n);const o=h({
	classList:"nst-api-wrap"}),s=h({classList:"nst-block"}).appendChild(b({
	id:"nst-ts-message",classList:"nst-message"})),a="tsapikey",r=f("input",{
	id:"nst-"+a,type:"password",classList:"nst-input m-2",maxLength:19,required:true,
	value:l(a)??""}),c=g({id:"nst-tslogin",classList:"torn-btn m-2",
	innerText:"save",onclick:nn})
	;o.appendChild(i),o.appendChild(s),o.appendChild(r),
	o.appendChild(c),e.appendChild(o);},mn=t=>{const e=document.getElementById(t)
	;if(!e)return;e.innerHTML="";const n=k({
	href:"https://www.torn.com/preferences.php#tab=api",target:"_blank",
	innerText:"limited",classList:"text-nstyellow font-bold"}),i=k({
	href:"https://www.torn.com/preferences.php#tab=api?&step=addNewKey&title=nst&type=3",
	target:"_blank",innerText:"create",classList:"text-nstmain font-bold"}),o=h({
	classList:"text-base"})
	;o.innerHTML="Enter a ",o.appendChild(n),o.innerHTML+=" apikey or ",
	o.appendChild(i),o.innerHTML+=" one ad-hoc";const s=h({classList:"nst-api-wrap"
	}),a=h({classList:"nst-block"}).appendChild(b({id:"nst-message",
	classList:"nst-message"})),r="apikey",c=f("input",{id:"nst-"+r,type:"password",
	classList:"nst-input m-2",maxLength:16,required:true,value:l(r)??""}),u=g({
	id:"nst-login",classList:"torn-btn m-2",innerText:"save",onclick:on}),d=g({
	id:"nst-reset",classList:"torn-btn m-2",innerText:"reset",onclick:sn})
	;s.appendChild(o),
	s.appendChild(a),s.appendChild(c),s.appendChild(u),s.appendChild(d),
	e.appendChild(s);},vn=t=>{const e=document.getElementById(t);if(!e)return
	;e.innerHTML="";const n={company:["employees"].sort(),market:["bazaar"].sort(),
	torn:["items"].sort(),
	user:["bars","basic","battlestats","bazaar","cooldowns","education","icons","money","networth","newevents","newmessages","notifications","perks","personalstats","profile","refills","timestamp","travel"].sort()
	},i=h({classList:"nst-tos-wrap"}),o=f("h4",{classList:"nst-tos-title",
	innerText:"Terms of Service"});i.appendChild(o),Object.entries({
	"Data Storage":"Only locally","Data Sharing":"Nobody",
	"Purpose of Use":"Optimization / Maintenance but only end user has access",
	"Key Storage & Sharing":"Stored locally but not shared",
	"Key Access Level":"Limited or Custom (see below)"
	}).forEach((([t,e])=>i.appendChild(h({classList:"nst-tos-wrap",
	innerHTML:`<b>${t}</b>: ${e}`}))));const s=f("h4",{classList:"nst-tos-title",
	innerText:"Api usage"})
	;i.appendChild(s),Object.entries(n).forEach((([t,e])=>i.appendChild(h({
	classList:"nst-tos-wrap",innerHTML:`<b>${t}</b>: ${1!==e.length?e.join(", "):e}`
	})))),e.appendChild(i);},pn=t=>{
	const e=t.target,n=e.id,i=null==e?void 0:e.closest("#nst-menu-body"),o=e,s=null==i?void 0:i.querySelector(".nst-menu-sel"),a=null==i?void 0:i.querySelector(".nst-menu-active"),r=null==i?void 0:i.querySelector("#"+n.replace(/-li/g,""))
	;null==s||s.classList.remove("nst-menu-sel"),
	null==a||a.classList.remove("nst-menu-active"),
	null==a||a.classList.toggle("hidden"),
	null==o||o.classList.add("nst-menu-sel"),null==r||r.classList.add("nst-menu-active"),
	null==r||r.classList.toggle("hidden");},fn=(t,e,n=()=>{})=>{
	const i=null==t?void 0:t.parentElement,o="nst-"+e.toLowerCase(),s=o+"-li",a=y({
	id:s,classList:"nst-menu-page",innerText:e,onclick:pn})
	;i.querySelector("#"+o)||i.querySelector("#"+s)||(t.appendChild(a),
	i.appendChild(h({id:o,classList:"nst-menu-item hidden"})),n(o));},hn=()=>{var t,e
	;const n=null==document?void 0:document.querySelector(".content-wrapper.spring"),i=null==(t=null==n?void 0:n.style)?void 0:t.display
	;n.style.display="none"===i?"":"none",
	null==(e=null==document?void 0:document.getElementById("nst-menu"))||e.remove(),
	"none"===n.style.display&&(t=>{const e=h({id:"nst-menu",classList:"nst-menu"
	}),n=h({id:"nst-menu-wrap",classList:"nst-menu-wrap "}),i=h({
	id:"nst-menu-title",classList:"nst-menu-title"}),o=h({id:"nst-menu-body",
	classList:"nst-menu-body"});i.appendChild(b({classList:"nst-logo"
	})).appendChild(f("b",{innerText:"NST"}));const s=o.appendChild(f("ul",{
	id:"nst-ul-main",classList:"nst-ul-main"}))
	;n.appendChild(i),n.appendChild(o),e.appendChild(n),
	t.insertAdjacentElement("beforebegin",e),fn(s,"tos",vn),fn(s,"api",mn)
	;const a=o.querySelector("#nst-api-li"),r=o.querySelector("#nst-api")
	;null==a||a.classList.add("nst-menu-sel"),
	null==r||r.classList.add("nst-menu-active"),
	null==r||r.classList.toggle("hidden"),an();})(n);},bn=t=>{
	const e=document.getElementById("nst-icon"),n=t.querySelector('ul[class^="status-icon"]')
	;if(e||!n)return;const i=y({id:"nst-icon",classList:"nst-icon"})
	;n.insertAdjacentElement("afterbegin",i).addEventListener("click",hn);
	},gn=(t,e,n=false)=>{const i=null==document?void 0:document.querySelector(e)
	;if(i&&(console.log("noobs "+e),t(i),!n))return;let o=false
	;const s=new MutationObserver((i=>{i.forEach((i=>{var a;if(o)return
	;const r=Array.from(i.addedNodes);for(const l of r){
	if(!(null==l?void 0:l.querySelector))continue
	;const i=null==l?void 0:l.querySelector(e),r=null==(a=null==l?void 0:l.parentElement)?void 0:a.querySelector(e),c=i||r||false
	;if(c&&(console.log("obs "+e),t(c),!n)){o=true,s.disconnect();break}}}));}))
	;s.observe(document.documentElement,{childList:true,subtree:true});},yn={add:()=>({
	closeSel:"li",mvSel:".info-wrap"}),manage:()=>({closeSel:'[class^="item"]',
	mvSel:'[class^="rrp"]'})},wn=()=>{document.addEventListener("dblclick",(t=>{
	const e=null==t?void 0:t.target
	;console.log(e),"INPUT"===(null==e?void 0:e.tagName)&&(e.className.includes("buyAmountInput")&&(t=>{
	var e,n,i
	;const o=null==(e=null==t?void 0:t.closest("div[class^=buyMenu]"))?void 0:e.querySelector("span[class^=amount]"),s=parseInt((null==(i=null==(n=null==o?void 0:o.innerText)?void 0:n.match(/x(\d+)/))?void 0:i[1])??"1",10)
	;((t,e)=>{var n,i;const o=new Event("input",{bubbles:true
	}),s=null==(n=Object.getOwnPropertyDescriptor(t,"value"))?void 0:n.set,a=null==(i=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t),"value"))?void 0:i.set
	;s&&s!==a?a.call(t,e):s.call(t,e),t.dispatchEvent(o),t.select();
	})(t,Math.min(s,1e4).toString());
	})(e),e.className.includes("input-money")&&(async t=>{var e,n;const i=s()
	;console.log(i);const{closeSel:o,mvSel:a}=null==(e=yn[i])?void 0:e.call(yn)
	;console.log(o,a);const r=t.closest(o);if(!r)return
	;if(r.classList.contains("disabled"))return;const l=r.querySelector("img")
	;if(!(null==(n=null==l?void 0:l.src.match(/\d+/))?void 0:n[0]))return
	;const c=r.querySelector(a),u=parseInt(c.innerText.replace(/\D/g,"")||"0",10)
	;P(t,""+(u-1));})(e),"clear-all"==e.className&&(t=>{var e,n
	;const i=t.closest("li"),o=null==i?void 0:i.querySelector("div.name-wrap"),s=parseInt((null==(n=null==(e=null==o?void 0:o.innerText)?void 0:e.match(/x(\d+)/))?void 0:n[1])??"1",10)
	;P(t,s.toString());})(e),e.className.includes("removeAmount")&&(t=>{var e,n
	;const i=t.closest("div[class^=row]"),o=null==i?void 0:i.querySelector("div[class^=desc]"),s=parseInt((null==(n=null==(e=null==o?void 0:o.innerText)?void 0:e.match(/x(\d+)/))?void 0:n[1])??"1",10)
	;P(t,s.toString());})(e));}));},kn=async()=>{var t;const e={section:"user",
	select:"bazaar",objID:n("userId")??""},i=await E(e)
	;if(!(null==i?void 0:i.status))return
	;const{bazaar:o}=i,s=o.reduce(((t,e)=>t+ +(null==e?void 0:e.price)*+e.quantity),0),a=o.reduce(((t,e)=>t+ +(null==e?void 0:e.market_price)*+e.quantity),0),r=h({
	classList:"nst-trade-value",innerText:`Total: $${m(s)} - MV: $${m(a)}`})
	;null==(t=null==document?void 0:document.querySelector("#bazaarRoot .wrapper"))||t.insertAdjacentElement("afterend",r);
	},xn=t=>{const e=t.target;c({[e.value]:e.checked})
	;const n=document.querySelector("#map .leaflet-marker-pane"),i=Array.from(n.querySelectorAll('[class*="torn-item"]'))
	;0!==i.length&&i.forEach((t=>{
	e.checked?t.classList.remove("nst-city-item"):t.classList.add("nst-city-item");
	}));},Ln=async t=>{const e=Array.from(t.querySelectorAll('[class*="torn-item"]'))
	;if(0===e.length)return;const n=j({title:"City Finds",
	element:t.closest("#tab-menu")}),i="Hide Items",o=p(i),s={id:"nst-"+o,
	type:"checkbox",value:o,checked:l(o)??false},a=l(o)??false,r=await E({section:"torn",
	select:"items"});if(!(null==r?void 0:r.status))return
	;const c=null==r?void 0:r.items,u={};e.forEach((t=>{var e,n,i,o
	;const s=t.getAttribute("src"),r=d(s);u[r]={name:null==(e=c[r])?void 0:e.name,
	type:null==(n=c[r])?void 0:n.type,value:+(null==(i=c[r])?void 0:i.market_value),
	count:r in u?+(null==(o=u[r])?void 0:o.count)+1:1
	},t.setAttribute("src",s.replace("small","large")),
	a||t.classList.add("nst-city-item");}))
	;const v=Object.values(u).reduce(((t,e)=>t+e.value*e.count),0),f=Object.values(u).map((t=>`${t.name} x${t.count}`)).join(", ").replace(/, $/,"."),b=h({
	classList:"nst-box-column"});b.appendChild(O(s,i,"",xn)),b.appendChild(h({
	classList:"nst-findsworth",innerText:"Worth: $"+m(v)})),b.appendChild(h({
	classList:"nst-findslist",innerText:""+f})),n.appendChild(b);},_n=()=>{
	document.addEventListener("dblclick",(t=>{const e=null==t?void 0:t.target
	;"INPUT"===(null==e?void 0:e.tagName)&&"text"===(null==e?void 0:e.type)&&e.className.includes("input-money")&&(t=>{
	var e;if(!t.closest("li"))return
	;const n=null==(e=null==t?void 0:t.closest("li"))?void 0:e.querySelector("div.sold-daily").innerText,i=d(n).toString()
	;P(t,i);})(e);}));},Tn=()=>{document.addEventListener("dblclick",(t=>{var e
	;const n=null==t?void 0:t.target;if("INPUT"!==(null==n?void 0:n.tagName))return
	;const i=null==(e=n.parentElement)?void 0:e.parentElement,o=d(null==i?void 0:i.querySelector(".instock").innerText)
	;n.value=""+Math.min(o,100);}));},On=t=>{
	0!==s().match(/manage/g).length&&t&&Array.from(t.children).forEach((t=>{
	const e=t.getAttribute("itemid"),n=t.querySelector(".name .desc")
	;n&&e&&n.insertAdjacentElement("afterBegin",b({classList:"text-nstmain",
	innerText:"ID: "+e}));}));},Dn=t=>{
	Array.from(null==t?void 0:t.querySelectorAll("ul[class*='slotItems']")).forEach((t=>{
	t.addEventListener("click",(()=>{var e,n,i,o
	;(null==(o=null==(i=null==(n=null==(e=null==t?void 0:t.parentNode)?void 0:e.parentNode)?void 0:n.childNodes[0])?void 0:i.childNodes[1])?void 0:o.childNodes[1]).click();
	}));}));},In=t=>{if(!t)return
	;const e=t.getElementsByTagName("ul")[0],n=Array.from(e.children),i={Strength:0,
	Defense:0,Speed:0,Dexterity:0,Total:0};for(const s of n){
	const t=s.getAttribute("aria-label");if(!t)return;const e=t.split(" ")
	;if(e.length>2){
	const t=e[0].replace(/:/g,""),n=d(e[1]),o=e[2].replace(/%/g,""),s=o.charAt(0),a=d(o),r="+"==s?a/100+1:1-a/100
	;i[t]=Math.round(n*r),i.Total+=Math.round(n*r);}}
	e.lastElementChild.removeAttribute("class");const o=h({
	classList:"nst-box-header"});o.appendChild(b({classList:"nst-box-title"
	})).appendChild(b({id:"nst-box-title",innerText:"Effective Stats"
	})),e.appendChild(o),Object.keys(i).forEach((t=>{const n=y({tabIndex:0,
	ariaLabel:`${t} ${m(i[t])}`}),o=b({classList:"divider",
	innerHTML:`<span>${t}</span>`}),s=b({classList:"desc",innerText:` ${m(i[t])} `,
	style:"margin-left: 3px"});n.appendChild(o),n.appendChild(s),e.appendChild(n);
	})),e.lastElementChild.classList.add("last");},Mn=(t,e)=>{var n
	;if(!(null==t?void 0:t.querySelector))return
	;if(!(null==t?void 0:t.querySelector("ul.employee-list")))return
	;const i=null==(n=null==t?void 0:t.querySelector("ul.employee-list"))?void 0:n.children,o=Array.from(i)
	;if(0===o.length)return;const s=a()-86400,r=a()-172800;o.forEach((t=>{var n,i
	;const o=null==t?void 0:t.getAttribute("data-user");if(!o)return
	;const a=null==(i=null==(n=e[o])?void 0:n.last_action)?void 0:i.timestamp,l=null==t?void 0:t.querySelector(".employee")
	;if(!l)return;const c=a<r?"bg-nstred":a<s?"bg-nstyellow":""
	;c&&l.classList.add(c);}));},Sn=async t=>{if(!t)return;const e=await E({
	section:"company",select:"employees"});if(!(null==e?void 0:e.status))return
	;const{company_employees:n}=e;Mn(t,n),new MutationObserver((t=>{t.forEach((t=>{
	Array.from(t.addedNodes).forEach((t=>Mn(t,n)));}));})).observe(t,{childList:true,
	subtree:true});},jn=t=>{const{step:e,action:n,confirm:i}=B(t)
	;return H("actionForm"!==e||"equip"!==n||1===i?{...B(t)}:{...B(t),confirm:1})
	},Pn=t=>{let e=0;t.addEventListener("click",(()=>{if(1!==e++)return
	;e=0,document.querySelector('.deposit-box input[value="DEPOSIT"], .deposit button.torn-btn, #armoury-donate .cash button').click()
	;const t=document.querySelector("#armoury-donate .cash-confirm .yes")
	;t&&t.click();}));},En=t=>{
	const e=document.querySelector(".deposit-box .input-money-symbol, .deposit .input-money-symbol")
	;e&&Pn(e),new MutationObserver((t=>{t.forEach((t=>{
	Array.from(t.addedNodes).forEach((t=>{
	const e=t.querySelector&&t.querySelector(".deposit-box .input-money-symbol, .deposit .input-money-symbol, .donate .input-money-symbol")
	;e&&Pn(e);}));}));})).observe(t,{childList:true,subtree:true});},$n=t=>{
	t.stopPropagation()
	;const n=t.target.closest("#nst-quick-use").parentElement.getAttribute("data-itemID")
	;if(!n)return;const i=l(Q);Object.keys(i).includes(n)&&(async t=>{
	const n=document.getElementById("nst-item-resp");if(n){
	for(;n.lastChild;)n.removeChild(n.lastChild);(async(t,n)=>{
	const{id:i}=t,o="energy"===i?{step:"armouryRefillEnergy"}:{step:"useItem",
	itemID:i,fac:"1"
	},s="energy"===i?"https://www.torn.com/factions.php?rfcv="+e():"https://www.torn.com/item.php?rfcv="+e(),a={
	method:"POST",headers:{"x-requested-with":"XMLHttpRequest"},
	body:new URLSearchParams(o)},r=await(await fetch(s,{...a
	})).json(),l=r.links??{},c=(null==r?void 0:r.text)??(null==r?void 0:r.message)??{},u=h({})
	;u.appendChild(w({innerHTML:c}));const d=w({});Object.values(l).forEach((t=>{
	const e=k({classList:"t-blue h m-left10 "+t.class,href:t.url,innerText:t.title})
	;t.attr.split(/\s+/).forEach((t=>{
	const n=t.split("=")[0].toString(),i=t.split("=")[1].toString()
	;e.setAttribute(n,i);})),d.appendChild(e);
	})),u.appendChild(d),n.appendChild(u),n.classList.remove("nstGreen"),
	n.classList.remove("nstBold");const m=n.querySelector(".counter-wrap")
	;if(!m)return
	;const v=1e3*+(m.getAttribute("data-time")||0),p=Math.floor(v/864e5),f=Math.floor(v%864e5/36e5)+24*p,b=Math.floor(v%36e5/6e4),g=Math.floor(v%6e4/1e3)
	;m.innerText=`${f}:${b}:${g}`;})(t,n),n.classList.remove("hidden");}})(i[n]);
	},qn=t=>{t.stopPropagation(),t.preventDefault()
	;const e=t.target.closest("#nst-quick-use").parentElement.getAttribute("data-itemID")
	;if(!e)return;const n=l(Q);Object.keys(n).includes(e)&&(delete n[e],c({[Q]:n
	}),An());},An=()=>{const t=document.getElementById("nst-"+Q);if(t){
	for(;t.lastChild;)t.removeChild(t.lastChild)
	;Object.values(l(Q)).forEach((e=>((t,e)=>{
	const{id:n,name:i,quantity:o}=t,s=`/images/items/${n}/medium.png`,a=h({
	classList:"nst-box-btn-div"})
	;a.setAttribute("data-itemID",n),a.setAttribute("data-qty",o);const r=g({
	id:"nst-quick-use",classList:"nst-box-button",onclick:$n
	}),l="energy"===i?f("i",{classList:"currency-points"}):x({src:s,alt:i,
	classList:"nst-box-img"}),c=b({id:"nst-quick-name",innerText:i}),u=b({
	id:"nst-quick-close",classList:"nst-box-close",innerText:"✕",onclick:qn})
	;r.appendChild(l),
	r.appendChild(c),r.appendChild(u),a.appendChild(r),e.appendChild(a);
	})(e,t))),new Ee(t,{animation:150,dataIdAttr:"data-itemid",store:{get:()=>{
	const t=l(Q)
	;return Object.entries(t).sort(((t,e)=>t[1].order-e[1].order)).map((t=>t[0]))},
	set:t=>{const e=t.toArray(),n=l(Q);e.forEach((t=>n[t].order=e.indexOf(t))),c({
	[Q]:n});}}});}},zn=t=>{var e,n,i;t.stopPropagation(),t.preventDefault()
	;const{target:o}=t,s=null==o?void 0:o.closest(".name"),a=null==(e=null==s?void 0:s.closest("li"))?void 0:e.querySelector("img"),r=(null==s?void 0:s.innerText.match(/Points/))?"energy":null==s?void 0:s.innerText.replace(/ x\d+$/,"").replace(/[ ]*Blood Bag[ :]*/,"").replace(/[ ]*Bottle of[ :]*/,"").replace(/[ ]*First Aid[ :]*/,"").replace(/[ ]*Lawyer's Business Card[ :]*/,"LBC").replace(/[ ]*Can of[ :]*/,""),u="energy"===r?"energy":d(a.getAttribute("src")).toString()
	;if(!u)return;const m=l(Q);if(Object.keys(m).includes(u))return
	;const v=0===(null==(n=Object.values(m))?void 0:n.length)?0:+(null==(i=Object.values(m).reduce(((t,e)=>(null==t?void 0:t.order)>(null==e?void 0:e.order)?t:e)))?void 0:i.order)
	;m[u]={id:u,order:v+1,name:r},c({[Q]:m}),An();},Cn={box:t=>{var e;const n=j({
	title:K,element:t});null==(e=null==n?void 0:n.parentElement)||e.appendChild(h({
	id:"nst-item-resp",classList:"nst-box-row hidden"})),An();},item:t=>{
	Array.from(t.querySelectorAll("div.name")).forEach((t=>t.addEventListener("dblclick",zn)));
	},nopager:()=>{}},Nn=t=>{new MutationObserver((t=>{t.forEach((t=>{
	const e=Array.from(t.addedNodes);(null==e?void 0:e.length)>0&&e.forEach((t=>{
	var e,n
	;const i="faction-armoury-tabs"===(null==t?void 0:t.id),o=RegExp("armoury-(medical|drugs|boosters|points)","g"),s=(null==(n=null==(e=null==t?void 0:t.parentElement)?void 0:e.id)?void 0:n.match(o))&&"UL"===t.tagName&&t.classList.contains("item-list")
	;Cn[i?"box":s?"item":"nopager"](t);}));}));})).observe(t,{childList:true,subtree:true});
	},Rn=t=>{
	document.getElementById("skip-to-content").innerText=null==t?void 0:t.innerText;
	},Bn=t=>{var e,n;if(!t)return
	;const i=null==t?void 0:t.parentElement,o=l("userdata"),s=d(null==(e=null==o?void 0:o.networth)?void 0:e.total),a=d(null==(n=null==o?void 0:o.personalstats)?void 0:n.networth),r=Math.round(s-a),c=r>0?"text-nstgreen":r<0?"text-nstred":"",u=`<b class='${c}'>$${m(r)}</b>`,v=y({
	classList:"last",tabIndex:0,ariaLabel:"Live NW: "+m(s)}),p=b({
	classList:"divider",innerHTML:"<span>Live Networth</span>"}),h=b({
	classList:`desc ${c} font-bold`,innerText:` $${m(s)} `,
	style:"margin-left: 3px; margin-right: 3px;"}),g=f("i",{
	classList:"networth-info-icon",title:u,style:"margin-left: 6px;"})
	;v.appendChild(p),
	v.appendChild(h).insertAdjacentElement("beforeend",g),i.lastElementChild.removeAttribute("class"),
	i.appendChild(v);},Hn=t=>{var e,n;const{step:i}=B(t);if("buyItem"!==i)return H({
	...B(t)});const o={market:t=>{
	const e=t.replace("step=buyItem","step=buyItemConfirm");return H({...B(e),item:0
	})},shop:t=>{const e=t.replace("step=buyItem","step=buyItemConfirm");return H({
	...B(e),item:0})},noloc:t=>H({...B(t)})}
	;return (o[null==(n=null==(e=s())?void 0:e.match(/(shop|market)/g))?void 0:n[0]]??o.noloc)(t)
	},Fn=t=>{new MutationObserver((e=>{e.forEach((e=>{var n,i
	;const o=null==(i=null==(n=s())?void 0:n.match(/(shop|market)/g))?void 0:i[0],a=".items > li.show-item-info"
	;Array.from(e.addedNodes).forEach((e=>{if(e.querySelector&&e.querySelector(a)){
	if("shop"!==o)return;Array.from(t.querySelectorAll(a)).forEach((t=>{var e,n,i,o
	;t.querySelector(".buy .buy-link").dataset.price=null==(o=null==(i=null==(n=null==(e=null==t?void 0:t.querySelector(".cost"))?void 0:e.innerText)?void 0:n.replace(",",""))?void 0:i.match(/\d+/))?void 0:o[0];
	}));}}));}));})).observe(t,{childList:true,subtree:true});},Un=()=>{
	document.addEventListener("dblclick",(t=>{var e,n,i,o
	;const s=null==t?void 0:t.target;if("INPUT"!==(null==s?void 0:s.tagName))return
	;const a=null==(i=null==(n=null==(e=null==s?void 0:s.parentElement)?void 0:e.parentElement)?void 0:n.parentElement)?void 0:i.parentElement,r=d(null==(o=null==document?void 0:document.querySelector(".travel-agency-market .availableItemsAmount"))?void 0:o.getAttribute("value")),l=d(document.getElementById("user-money").innerText),c=d(null==a?void 0:a.querySelector(".cost .c-price").innerText),u=d(null==a?void 0:a.querySelector(".stock .stck-amount").innerText),m=l/c>=r?r:Math.trunc(l/c),v=Math.min(m,u).toString()
	;P(s,v);}));},Gn={a_good_day_to_get_hard:{task:"Achieve a killstreak of 3 - 10."},
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
	task:"Injure (P)'s both arms."},wrath_of_duke:{task:"Defeat 4 (P)."}},Wn=t=>{
	Array.from(t.querySelectorAll(".giver-cont-wrap > div[id^=mission]:not(.nst-edit)")).forEach((t=>{
	var e,n,i;if(!(null==t?void 0:t.querySelector))return
	;const o=(null==(e=null==t?void 0:t.querySelector(".title-black"))?void 0:e.childNodes[0].textContent.replace(/\n/g,"").trim()).toLowerCase().replaceAll(/[ -]/g,"_").replaceAll(/[:!,]/g,""),s=o in Gn?null==(n=null==Gn?void 0:Gn[o])?void 0:n.task:"mission not found",a=b({
	innerHTML:"<br/><br/><b>todo:</b> "+s,classList:"text-nstmain"})
	;null==(i=t.querySelector(".max-height-fix"))||i.appendChild(a),
	t.classList.add("nst-edit");}));},Xn=t=>{
	const e=null==t?void 0:t.querySelector(".total-price"),n=null==t?void 0:t.querySelector(".action")
	;d(null==e?void 0:e.innerText)*W>=X&&n.classList.add("text-black","bg-nstmain");
	},Yn=t=>{new MutationObserver((t=>{t.forEach((t=>{
	Array.from(t.addedNodes).forEach((t=>{
	const e="LI"===(null==t?void 0:t.tagName),n=null==t?void 0:t.firstElementChild
	;e&&n&&Xn(n);}));}));})).observe(t,{childList:true,subtree:true
	}),Array.from(document.querySelectorAll(".users-point-sell > li")).forEach((t=>Xn(null==t?void 0:t.firstElementChild)));
	},Jn=t=>{var e,n,i;if(t.classList.contains("yes"))return;t.classList.add("yes")
	;const o=null==(i=null==(n=null==(e=null==t?void 0:t.getAttribute("href"))?void 0:e.replace(/=buy/g,"=buy1"))?void 0:n.replace(/=remove/g,"=remove1"))?void 0:i.replace(/&points=\d+$/g,"")
	;t.setAttribute("href",o);},Kn=t=>{new MutationObserver((t=>{t.forEach((t=>{
	Array.from(t.addedNodes).forEach((t=>{
	const e="LI"===(null==t?void 0:t.tagName),n=null==t?void 0:t.firstElementChild
	;e&&n&&Jn(n);}));}));})).observe(t,{childList:true,subtree:true
	}),Array.from(document.querySelectorAll(".users-point-sell > li")).forEach((t=>Jn(null==t?void 0:t.firstElementChild)));
	},Qn=["Primary","Secondary","Melee","Temporary"],Vn=["Medical","Drug","Energy Drink","Alcohol","Candy","Booster","Supply Pack",...Qn],Zn=t=>{
	t.stopPropagation()
	;const n=t.target.closest("#nst-quick-use").parentElement.getAttribute("data-itemID")
	;if(!n)return;const i=l(J);Object.keys(i).includes(n)&&(async t=>{
	const{category:n}=t,i=document.getElementById("nst-item-resp");if(i){
	for(;i.lastChild;)i.removeChild(i.lastChild);Qn.includes(n)?await(async(t,n)=>{
	const{id:i,strangeID:o}=t,s={step:"actionForm",item_id:i,type:5,action:"equip",
	item:i,id:o,confirm:1};if(!s)return
	;const a="https://www.torn.com/item.php?rfcv="+e(),r={method:"POST",headers:{
	"x-requested-with":"XMLHttpRequest"},body:new URLSearchParams(s)
	},l=await(await fetch(a,{...r})).text()
	;n.innerHTML=l,(null==l?void 0:l.match(/ equipped/))?n.classList.add("text-nstgreen"):n.classList.remove("text-nstgreen");
	})(t,i):await(async(t,n)=>{const{id:i}=t,o={step:"useItem",itemID:i,item:i}
	;if(!o)return;const s="https://www.torn.com/item.php?rfcv="+e(),a={
	method:"POST",headers:{"x-requested-with":"XMLHttpRequest"},
	body:new URLSearchParams(o)},r=await(await fetch(s,{...a
	})).json(),l=r.links??{},c=r.text??{},u=h({});u.appendChild(w({innerHTML:c}))
	;const d=w({});Object.values(l).forEach((t=>{const e=k({
	classList:t.class+" t-blue h m-left10",href:t.url,innerText:t.title})
	;t.attr.split(/\s+/).forEach((t=>{
	const n=t.split("=")[0].toString(),i=t.split("=")[1].toString()
	;e.setAttribute(n,i);})),d.appendChild(e);
	})),u.appendChild(d),n.appendChild(u),n.classList.remove("nstGreen"),
	n.classList.remove("nstBold");const m=n.querySelector(".counter-wrap")
	;if(!m)return
	;const v=1e3*+(m.getAttribute("data-time")||0),p=Math.floor(v/864e5),f=Math.floor(v%864e5/36e5)+24*p,b=Math.floor(v%36e5/6e4),g=Math.floor(v%6e4/1e3)
	;m.innerText=`${f}:${b}:${g}`;})(t,i),i.classList.remove("hidden");}})(i[n]);
	},ti=t=>{t.stopPropagation(),t.preventDefault()
	;const e=t.target.closest("#nst-quick-use").parentElement.getAttribute("data-itemID")
	;if(!e)return;const n=l(J);Object.keys(n).includes(e)&&(delete n[e],c({[J]:n
	}),ei());},ei=()=>{const t=document.getElementById("nst-"+J);if(t){
	for(;t.lastChild;)t.removeChild(t.lastChild)
	;Object.values(l(J)).forEach((e=>((t,e)=>{
	const{id:n,name:i,quantity:o}=t,s=`/images/items/${n}/medium.png`,a=h({
	classList:"nst-box-btn-div"})
	;a.setAttribute("data-itemID",n),a.setAttribute("data-qty",o);const r=g({
	id:"nst-quick-use",classList:"nst-box-button",onclick:Zn}),l=x({src:s,alt:i,
	classList:"nst-box-img"}),c=b({id:"nst-quick-name",innerText:i}),u=b({
	id:"nst-quick-close",classList:"nst-box-close",innerText:"✕",onclick:ti})
	;r.appendChild(l),
	r.appendChild(c),r.appendChild(u),a.appendChild(r),e.appendChild(a);
	})(e,t))),new Ee(t,{animation:150,dataIdAttr:"data-itemid",store:{get:()=>{
	const t=l(J)
	;return Object.entries(t).sort(((t,e)=>t[1].order-e[1].order)).map((t=>t[0]))},
	set:t=>{const e=t.toArray(),n=l(J);e.forEach((t=>n[t].order=e.indexOf(t))),c({
	[J]:n});}}});}},ni=t=>{var e,n,i,o,s,a,r,u,d,m,v
	;t.stopPropagation(),t.preventDefault();const p=t.target
	;if(!/name-wrap/.test(p.className))return
	;const f=p.closest("li"),h=null==(e=null==f?void 0:f.dataset)?void 0:e.item,b=null==(n=null==f?void 0:f.dataset)?void 0:n.qty,g=(null==(i=null==f?void 0:f.dataset)?void 0:i.category)??"",y=(null==(o=null==f?void 0:f.querySelector('.cont-wrap ul [class*="equipped"]'))?void 0:o.getAttribute("data-id"))??"",w=null==f?void 0:f.querySelector(".title-wrap .name-wrap .name"),k=null==(d=null==(u=null==(r=null==(a=null==(s=null==w?void 0:w.innerText)?void 0:s.replace(/[ ]*Blood Bag[ :]*/,""))?void 0:a.replace(/[ ]*Bottle of[ :]*/,""))?void 0:r.replace(/[ ]*First Aid[ :]*/,""))?void 0:u.replace(/[ ]*Lawyer's Business Card[ :]*/,"LBC"))?void 0:d.replace(/[ ]*Can of[ :]*/,"")
	;if(!(f&&h&&g&&Vn.includes(g)))return;const x=l(J)
	;if(Object.keys(x).includes(h))return
	;const L=0===(null==(m=Object.values(x))?void 0:m.length)?0:+(null==(v=Object.values(x).reduce(((t,e)=>(null==t?void 0:t.order)>(null==e?void 0:e.order)?t:e)))?void 0:v.order)
	;x[h]={id:h,order:L+1,name:k,quantity:b,category:g,strangeID:y},c({[J]:x}),ei();
	},ii=t=>{var e
	;const n=null==t?void 0:t.parentElement,i=null==n?void 0:n.querySelector("div.equipped-items-wrap"),o=j({
	title:Y,element:i});null==(e=null==o?void 0:o.parentElement)||e.appendChild(h({
	id:"nst-item-resp",classList:"nst-box-row hidden"
	})),ei(),new MutationObserver((t=>{t.forEach((t=>{var e
	;const n=t.target,i=Array.from(t.addedNodes)
	;(null==i?void 0:i.length)>0&&"UL"===(null==n?void 0:n.nodeName)&&"category-wrap"==(null==(e=null==n?void 0:n.parentElement)?void 0:e.id)&&null==(null==t?void 0:t.previousSibling)&&i.forEach((t=>{
	var e
	;(null==(e=null==t?void 0:t.dataset)?void 0:e.item)&&t.addEventListener("dblclick",ni);
	}));}));})).observe(t,{childList:true,subtree:true});},oi=(t,e)=>{
	const{item:n,selector:i,reg:o}=e,s=l("quick"+n)??false,a=(null==t?void 0:t.parentElement).querySelector("a."+i),r=null==a?void 0:a.getAttribute("href")
	;if(!a||!r)return
	;const c=RegExp(o+"$","g"),u=RegExp(o+"1$","g"),d=s?r.replace(c,o+"1"):r.replace(u,o)
	;a.setAttribute("href",d);},si=t=>{var e
	;const n=+(l("jailscore")??"0"),i=null==t?void 0:t.parentElement,o=t.querySelector("span.time").innerText.split(" ").reduce(((t,e)=>t+(/h/.test(e)?60*+e.replace(/h/g,""):/m/.test(e)?+e.replace(/m/g,""):0)),0),s=d(null==(e=t.querySelector("span.level").innerText.match(/\d+/g))?void 0:e.join())*o
	;t.setAttribute("title","score: "+m(s));const a=s>n&&0!==n
	;i.style.display=a?"none":"",oi(t,{item:"bail",selector:"bye",reg:"buy"}),oi(t,{
	item:"bust",selector:"bust",reg:"breakout"});},ai=t=>{const e=document,n=t.target
	;c({[n.value]:n.checked});const i=e.querySelectorAll("span.info-wrap")
	;Array.from(i).forEach((t=>si(t)));},ri=t=>{(t=>{const e=j({title:"Quick Jail",
	element:null==t?void 0:t.parentElement}),n=h({classList:"nst-box-column"}),i=h({
	classList:"nst-box-column"});e.appendChild(n),e.appendChild(i),T({elem:n,
	title:"Jail Score",cback:()=>{const e=t.querySelectorAll("span.info-wrap")
	;Array.from(e).forEach((t=>si(t)));}});const o="Quick Bust",s=p(o),a={
	id:"nst-"+s,type:"checkbox",value:s,checked:l(s)??false}
	;i.appendChild(O(a,o,"",ai));const r="Quick Bail",c=p(r),u={id:"nst-"+c,
	type:"checkbox",value:c,checked:l(c)??false};i.appendChild(O(u,r,"",ai));
	})(t),new MutationObserver((t=>{t.forEach((t=>{
	Array.from(t.addedNodes).forEach((t=>{if("LI"!==t.tagName)return
	;const e=t.querySelector("span.info-wrap");e&&si(e);}));}));})).observe(t,{
	childList:true,subtree:true});},li=t=>{t=t.parentElement
	;const{refills:{energy_refill_used:e,nerve_refill_used:n}}=l("userdata")
	;Object.values({energy:{name:"energy",
	selector:"[class*='bar'][class*='energy']",link:"https://www.torn.com/gym.php",
	refillUsed:e},nerve:{name:"nerve",selector:"[class*='bar'][class*='nerve']",
	link:"https://www.torn.com/crimes.php",refillUsed:n}}).forEach((e=>{var n
	;const{name:i,selector:o,link:s,refillUsed:a}=e,r=o+' p[class^="bar-name"]',l=null==t?void 0:t.querySelector(r),c=null==(n=null==l?void 0:l.parentElement)?void 0:n.parentElement
	;null==c||c.removeAttribute("href"),
	null==c||c.addEventListener("click",(()=>window.open(s,"_blank")))
	;const u="energy"===i?"text-nstgreen":"nerve"===i?"text-nstred":""
	;a||null==l||l.classList.add(u);}));},ci=t=>null==t?void 0:t.remove(),ui=t=>{
	const e=t.getAttribute&&"true"==t.getAttribute("contenteditable")
	;t.textContent&&!e&&(t.textContent=t.textContent.replaceAll("Natural Selection","NS"));
	},di=t=>{3==t.nodeType&&ui(t);let e=null==t?void 0:t.firstChild
	;for(;e;)3==e.nodeType?ui(e):di(e),e=e.nextSibling;},mi=t=>{di(t)
	;const e=document.querySelector("#map");e&&new MutationObserver((t=>{
	t.forEach((t=>{
	Array.from(t.addedNodes).forEach((t=>di(t))),"attributes"==t.type&&di(t.target);
	}));})).observe(e,{childList:true,subtree:true,attributes:true});},vi={amarket:()=>{
	new MutationObserver((t=>{t.forEach((t=>{Array.from(t.addedNodes).forEach((t=>{
	var e,n
	;if("LI"!==(null==t?void 0:t.tagName)||!(null==(n=null==(e=null==t?void 0:t.firstElementChild)?void 0:e.classList)?void 0:n.contains("item-cont-wrap")))return
	;const i=Array.from(t.querySelectorAll(".bonus-attachment-icons"))
	;if(0===i.length)return;let o="";i.forEach((t=>{
	o+=fi(null==t?void 0:t.title),1!==i.length&&(o+="<br />");
	})),t.querySelector("p.t-gray-6").innerHTML=o;}));}));
	})).observe(document.documentElement,{childList:true,subtree:true});},bazaar:()=>{
	new MutationObserver((t=>{t.forEach((t=>{Array.from(t.addedNodes).forEach((t=>{
	if(!/(itemsContainner|row)/.test(t.className)||t.querySelector(".nst-edit"))return
	;const e=Array.from(t.querySelectorAll('[class*="iconBonuses"] > div > i'))
	;0!==e.length&&e.forEach((t=>{var e,n,i
	;const o="radiation"===t.className.split("-")[3]?"radiation":t.className.split("-")[2],s="full"===o?"EOD":"negative"===o?"Delta":"sentinel"===o?"defense":"vanguard"===o?"dex":o,a=null==(e=null==t?void 0:t.parentElement)?void 0:e.parentElement
	;null==a||a.setAttribute("style","float:left;right:0px;top:3px;padding-left:5px;display:inline-block;white-space:nowrap;"),
	a.classList.add("nst-edit"),
	null==(n=null==t?void 0:t.parentElement)||n.appendChild(b({innerText:s
	})),null==(i=null==t?void 0:t.parentElement)||i.appendChild(f("br",{}));}));}));}));
	})).observe(document.documentElement,{childList:true,subtree:true});},
	displaycase:t=>{
	const e=Array.from(t.querySelectorAll(".bonus-attachment-icons"))
	;0!==e.length&&e.forEach((t=>{const e=fi(null==t?void 0:t.title)
	;t.setAttribute("style","float:left;white-space: nowrap;right: 0px;top:-40px"),
	t.appendChild(Object.assign(document.createElement("span"),{innerText:e
	})),null==t||t.insertAdjacentElement("afterend",document.createElement("br"));}));
	},item:()=>{new MutationObserver((t=>{t.forEach((t=>{var e
	;const n=t.target,i=Array.from(t.addedNodes)
	;(null==i?void 0:i.length)>0&&"UL"===(null==n?void 0:n.nodeName)&&"category-wrap"==(null==(e=null==n?void 0:n.parentElement)?void 0:e.id)&&null==(null==t?void 0:t.previousSibling)&&i.forEach((t=>{
	if(!t.querySelector||!t.querySelector(".bonuses.left"))return
	;const e=null==t?void 0:t.querySelector(".name-wrap")
	;if(/nst-rw-show/.test(e.className))return
	;const n=t.querySelector("ul.bonuses-wrap").lastElementChild,i=Array.from(n.children),o=h({
	classList:"nst-rw-show-wrap"});i.forEach((t=>{
	if(""===(null==t?void 0:t.title))return;const e=h({classList:"nst-rw-single",
	innerText:fi(null==t?void 0:t.title)});o.appendChild(e);
	})),e.classList.add("nst-rw-show"),e.appendChild(o);}));}));
	})).observe(document.documentElement,{childList:true,subtree:true});}},pi={
	Impregnable:"melee",Impenetrable:"guns",Insurmountable:"dune",
	Invulnerable:"delta",Imperviable:"life",Immutable:"def",Irrepressible:"dex",
	Impassable:"EOD"},fi=t=>{var e,n
	;const i=(null==(e=null==t?void 0:t.match(RegExp("(?<=>)[\\w\\s-]+(?=<)")))?void 0:e[0])??"FAIL",o=(null==(n=null==t?void 0:t.match(/\d+(?=(%| turns))/))?void 0:n[0])??"XX",s=pi[i]??i
	;return `${o}${/disarm|disable/.test(i.toLowerCase())?"T":"%"} ${s}`
	},hi=t=>vi[o()](t),bi=async t=>{
	const e=null==t?void 0:t.querySelectorAll(".trade-cont .user.right li.color2 ul li")
	;if(0===e.length)return;let n=0;const i=await E({section:"torn",select:"items"})
	;if(!(null==i?void 0:i.status))return;const o=null==i?void 0:i.items
	;Array.from(e).forEach((t=>{
	const e=null==t?void 0:t.querySelector(".name"),i=null==e?void 0:e.firstChild.textContent.trim(),{name:s,quantity:a}=(t=>{
	const e=/^x\d+\s/.test(n=t)?"start":/\sx\d+$/.test(n)?"end":null;var n
	;if(!e)return {name:t,quantity:1};const i=t.split(" "),o={start:0,end:i.length-1
	}[e],s=i[o].substr(1),a=parseInt(s,10)
	;return !e||isNaN(a)||a.toString().length!==s.length?{name:t,quantity:1}:{
	name:i.filter(((t,e)=>e!==o)).join(" ").trim(),quantity:a}
	})(i),r=Object.values(o).filter((t=>t.name===s))[0]
	;n+=parseInt(null==r?void 0:r.market_value)*a;}));const s=h({
	classList:"nst-trade-value",innerText:"MV: $"+m(n)})
	;t.insertAdjacentElement("beforebegin",s);
	},gi=n("user2ID")??"",yi=l(),{reloadone:wi,reloadtwo:ki,weapon:xi}=yi
	;let Li={},_i={},Ti=false,Oi=0;const Di=()=>{var t
	;const e=null==(t=null==_i?void 0:_i.defenderUser)?void 0:t.life,n=null==Li?void 0:Li.currentAttackStatus,i=null==_i?void 0:_i.attackStatus,{hold:o}=l()
	;return o&&e<2?"hold":"end"===i&&"endResult"in _i?"end":e<2&&"finishOptions"in _i?"finish":"error"in _i||"startButtonTimer"in _i?"check":Ti||"notStarted"!==i?Ti||"process"===n?"hit":"check":"start"
	},Ii=()=>{var t,e,n,i,o,s,a,r,c,u,d,m
	;const v=null==_i?void 0:_i.attackerAmmoStatus,p=null==(t=null==_i?void 0:_i.currentClips)?void 0:t[0],f=null==(n=null==(e=null==_i?void 0:_i.attackerItems[1])?void 0:e.item[0])?void 0:n.currentBonuses,h=null==(o=null==(i=null==_i?void 0:_i.attackerItems[2])?void 0:i.item[0])?void 0:o.currentBonuses,b={
	primary:()=>{var t,e,n
	;const i=null!=(null==(e=null==(t=null==_i?void 0:_i.attackerItems[1])?void 0:t.item[0])?void 0:e.ID),o="0"!==(null==p?void 0:p.attackerPrimaryRoundsLeft),s=!(null==(n=null==v?void 0:v[1])?void 0:n.includes("No ammo"))
	;return i&&s&&(o||wi)},secondary:()=>{var t,e,n,i
	;const o=null!=(null==(n=null==(e=null==(t=null==_i?void 0:_i.attackerItems)?void 0:t[2])?void 0:e.item[0])?void 0:n.ID),s="0"!==(null==p?void 0:p.attackerSecondaryRoundsLeft),a=!(null==(i=null==v?void 0:v[2])?void 0:i.includes("No ammo"))
	;return o&&a&&(s||ki)},melee:()=>{var t,e,n
	;return null!=(null==(n=null==(e=null==(t=null==_i?void 0:_i.attackerItems)?void 0:t[3])?void 0:e.item[0])?void 0:n.ID)
	}};if(0===(null==_i?void 0:_i.currentMove)&&(null==(s=l())?void 0:s.assaperk)){
	if("Assassinate"===(null==(a=null==f?void 0:f[72])?void 0:a.title))return 1
	;if("Assassinate"===(null==(r=null==h?void 0:h[72])?void 0:r.title))return 2}
	if((null==(c=l())?void 0:c.executeperk)&&"Execute"===(null==(u=null==h?void 0:h[75])?void 0:u.title)){
	const t=h[75].value
	;if(+(null==(d=null==_i?void 0:_i.defenderUser)?void 0:d.life)/+(null==(m=null==_i?void 0:_i.defenderUser)?void 0:m.maxlife)*100<=t)return 2
	}if((()=>{var t,e,n,i,o,s,a
	;if(void 0===(null==(n=null==(e=null==(t=null==_i?void 0:_i.attackerItems)?void 0:t[5])?void 0:e.item[0])?void 0:n.ID))return  false
	;const{temp:r}=l();if(!r)return  false
	;const c=null==(o=null==(i=null==_i?void 0:_i.attackerItems[5])?void 0:i.item[0])?void 0:o.ID,u=null==(a=null==(s=null==_i?void 0:_i.defenderItems[6])?void 0:s.item[0])?void 0:a.ID
	;return !("256"===c&&["670","1355","348"].includes(u)||"392"===c&&["348","642","644","655","670","675","680","1355"].includes(u))
	})())return 5;do{const t=Object.keys(xi).filter((t=>xi[t]==Oi))[0]
	;if(b[t]())return Mi[t];Oi++;}while(Oi<3);return 999},Mi={primary:1,secondary:2,
	melee:3,temp:5},Si={check:()=>{var t
	;return "error"in _i?_i.error:"startButtonTimer"in _i?`attack in ${+(null==(t=null==_i?void 0:_i.startButtonTimer)?void 0:t.timeLeft)}s`:"checking"
	},start:()=>"start fight",finish:()=>"executing",end:()=>{var t,e
	;return (null==(t=null==_i?void 0:_i.endResult)?void 0:t.info)??(null==(e=null==_i?void 0:_i.endResult)?void 0:e.groupEvent)
	},hit:()=>{var t,e
	;const n=+(null==(t=null==_i?void 0:_i.defenderUser)?void 0:t.life),i=+(null==(e=null==_i?void 0:_i.defenderUser)?void 0:e.maxlife)
	;return `${n} / ${i} (${Math.floor(n/i*100)}%)`}},ji={hold:()=>({}),end:()=>({}),
	finish:()=>{const{outcome:t}=l();return {step:"finish",fightResult:t}},
	check:()=>({user2ID:gi}),start:()=>(Ti=true,{step:"startFight",user2ID:gi}),
	hit:()=>{const t="user1EquipedItemID";return {step:"attack",user2ID:gi,[t]:Ii()}}
	},Pi=async t=>{const n=t.target;n.disabled=true;const i=Di(),o=(ji[i]??ji.error)()
	;if(r(o))return
	;const s="https://www.torn.com/loader.php?sid=attackData&mode=json&rfcv="+e(),a={
	method:"POST",headers:{"x-requested-with":"XMLHttpRequest"},
	body:new URLSearchParams(o)};console.log(i,o),await fetch(s,{...a
	}).then((t=>t.json())).then((t=>((t,e)=>{
	e.disabled=false,console.log(t),Li=t,_i=t.DB;const n=Di();e.innerText=Si[n]();
	})(t,n))).catch((t=>console.error(t)));},Ei=t=>(t=>{const e=j({
	title:"fighterino",element:t})
	;e.classList.remove("nst-box-row"),e.classList.add("nst-box-column")
	;const n=(()=>{const t=h({classList:"nst-box-column"}),e=h({
	classList:"nst-outcome",onchange:t=>{const e=t.target.id;c({outcome:e});}
	}),n=D("leave","outcome"),i=D("mug","outcome"),o=D("hospitalize","outcome")
	;e.appendChild(n),e.appendChild(i),e.appendChild(o),t.appendChild(e);const s=h({
	classList:"nst-outcome"}),a={id:"nst-hold",checked:l("hold")
	},r=O(a,"hold","",(t=>{c({hold:t.target.checked});})),u={id:"nst-temp",
	checked:l("temp")},d=O(u,"use temp first","",(t=>{c({temp:t.target.checked});
	})),m={id:"nst-assa",checked:l("assaperk")},v=O(m,"assassinate","",(t=>{c({
	assaperk:t.target.checked});})),p={id:"nst-execute",checked:l("executeperk")
	},f=O(p,"execute","",(t=>{c({executeperk:t.target.checked});}))
	;return s.appendChild(r),
	s.appendChild(d),s.appendChild(v),s.appendChild(f),t.appendChild(s),t})(),i=h({
	classList:"nst-box-column"}),o=g({id:"nst-fighteroo",classList:"torn-btn m-2",
	innerText:"fighterino",onclick:Pi})
	;i.appendChild(o),e.appendChild(n),e.appendChild(i);})(t),$i=t=>{
	if(!("currentFightStatistics"in t))return
	;const e=Array.from(document.querySelectorAll('ul[class^="participants"] div[class^= "playerWrap"] > span[class^= "playername"]'))
	;0!==e.length&&e.forEach((e=>{if(e.querySelector(".nst-intercept"))return
	;const n=e.innerText,i=Object.values(null==t?void 0:t.currentFightStatistics).filter((t=>(null==t?void 0:t.playername)===n))[0],o=null==i?void 0:i.userID
	;e.innerHTML="",e.appendChild(k({classList:"nst-intercept text-nsttorntext",
	href:"loader.php?sid=attack&user2ID="+o,target:"_blank",innerText:""+n}));}));}
	;let qi;const Ai=t=>{
	(null==t?void 0:t.querySelector("#nst-lastaction"))||t.appendChild(h({
	id:"nst-lastaction",innerText:"last action: "+qi}));},zi=t=>{
	qi=v(+t.user.lastAction.seconds).trim(),
	gn(Ai,'#profile-mini-root [class*="profile-mini-_userProfileWrapper"]');
	},Ci=n("XID"),Ni=async t=>{var e,n,i;(t=>{
	const e=null==t?void 0:t.closest(".profile-wrapper"),n=j({title:"Stat Spies",
	element:e}),i=h({id:"nst-compare",classList:"nst-box-column"}),o=h({
	id:"nst-spies",classList:"nst-box-column item-start"});i.appendChild(f("table",{
	id:"nst-compare-table",classList:"nst-table"})),o.appendChild(f("table",{
	id:"nst-spies-table",classList:"nst-table"})),o.appendChild(f("table",{
	id:"nst-avg-table",classList:"nst-table"})),n.appendChild(i),n.appendChild(o);
	})(t);const o=await $({selection:"/spy/user/"+Ci})
	;(null==o?void 0:o.status)&&((null==(e=null==o?void 0:o.compare)?void 0:e.status)&&(t=>{
	const e=document.getElementById("nst-compare-table"),n=f("tr",{
	classList:"nst-table-row text-center nst-nodrag"})
	;e.appendChild(n),["Stat","Them","You"].forEach((t=>n.appendChild(f("th",{
	innerText:t,classList:"nst-table-cell nst-table-cell-head"
	})))),Object.keys(t).forEach((n=>{var i,o;const s=f("tr",{
	classList:"nst-table-row"});s.setAttribute("data-id",n)
	;const a=+(null==(i=null==t?void 0:t[n])?void 0:i.amount),r=+(null==(o=null==t?void 0:t[n])?void 0:o.difference),l=r>0?"text-nstgreen":r<0?"text-nstred":"text-nsttorntext",c=f("td",{
	innerText:""+n,classList:"nst-table-cell text-nsttorntext"}),u=f("td",{
	innerText:""+m(a),classList:"nst-table-cell text-nsttorntext"}),d=f("td",{
	innerText:""+m(a+r),classList:"nst-table-cell"})
	;d.classList.add(l),s.appendChild(c),
	s.appendChild(u),s.appendChild(d),e.appendChild(s);})),new Ee(e,{animation:150,
	filter:".nst-nodrag",store:{get:()=>l("tscompare")??Object.keys(t),set:t=>c({
	tscompare:t.toArray()})}});const i=f("tr",{
	classList:"nst-table-row nst-nodrag text-center"}),o=f("td",{
	classList:"nst-table-cell",colSpan:3}),s=k({
	href:"https://www.tornstats.com/settings/script",target:"_blank",
	classList:"t-blue nst-nodrag",innerText:"Change your script settings here"})
	;o.appendChild(s),i.appendChild(o),e.appendChild(i);
	})(null==(n=null==o?void 0:o.compare)?void 0:n.data),
	(null==(i=null==o?void 0:o.spy)?void 0:i.status)&&(t=>{
	const e=document.getElementById("nst-spies-table"),n=f("tr",{
	classList:"nst-table-row text-center"})
	;e.appendChild(n),["Stat","Them","You"].forEach((t=>n.appendChild(f("th",{
	innerText:t,classList:"nst-table-cell nst-table-cell-head"
	})))),["Strength","Defense","Speed","Dexterity","Total"].forEach((n=>{
	const i=+(null==t?void 0:t[n.toLowerCase()]),o=+(null==t?void 0:t["delta"+n]),s=o>0?"text-nstgreen":o<0?"text-nstred":"text-nsttorntext",a=f("tr",{
	classList:"nst-table-row"}),r=f("td",{innerText:""+n,
	classList:"nst-table-cell text-nsttorntext"}),l=f("td",{innerText:""+m(i),
	classList:"nst-table-cell text-nsttorntext"}),c=f("td",{innerText:""+m(i+o),
	classList:"nst-table-cell"})
	;c.classList.add(s),a.appendChild(r),a.appendChild(l),
	a.appendChild(c),e.appendChild(a);}));const i=f("tr",{
	classList:"nst-table-row nst-nodrag text-center"}),o=f("td",{
	classList:"nst-table-cell text-nsttorntext",colSpan:3,
	innerText:"Last Update: "+((null==t?void 0:t.difference)??"")})
	;i.appendChild(o),e.appendChild(i);})(null==o?void 0:o.spy));
	},Ri=n("user2ID")??"",Bi=async t=>{var e,n,i,o
	;if(document.querySelector("#nst-target-status"))return;const s={section:"user",
	select:"",objID:Ri},r=await E(s);if(!(null==r?void 0:r.status))return
	;const l=null==(e=null==r?void 0:r.states)?void 0:e.hospital_timestamp,c=null==(n=null==r?void 0:r.last_action)?void 0:n.timestamp,u=null==(i=null==r?void 0:r.life)?void 0:i.maximum,m=null==(o=null==r?void 0:r.life)?void 0:o.current,p=1===(null==r?void 0:r.revivable),f=0!==Object.values(null==r?void 0:r.basicicons).filter((t=>t.includes("Territory War"))).length,b=v(a()-c),g=v(l-a()),y=h({
	id:"nst-target-status",classList:"nst-status-wrap"}),w=h({
	classList:"nst-status-middle"}),k=h({classList:"nst-status-middle"}),x=h({
	id:"nst-status-life",classList:"nst-status-item",
	innerText:`life: ${Math.floor(m/u*100)}%`}),L=h({id:"nst-status-la",
	classList:"nst-status-item",innerText:"la: "+b});L.setAttribute("data-time",c)
	;const _=h({id:"nst-status-hosp",classList:"nst-status-item",
	innerText:"hosp: "+(""===g?"OUT":g)});_.setAttribute("data-time",l);const T=h({
	id:"nst-status-wall",classList:"nst-status-item",
	innerText:"wall: "+(f?"ON":"OFF")}),O=h({id:"nst-status-rev",
	classList:"nst-status-item",innerText:"rev: "+(p?"ON":"OFF")});w.appendChild(x),
	w.appendChild(T),
	w.appendChild(O),k.appendChild(_),k.appendChild(L),y.appendChild(w),
	y.appendChild(k),t.appendChild(y),setInterval((()=>((t,e,n)=>{
	const i=d(t.getAttribute("data-time")),o=d(e.getAttribute("data-time")),s=v(a()-i),r=v(o-a())
	;t.innerText="la: "+s,e.innerText="hosp: "+(""===r?"OUT":r)
	;const l=document.querySelector('#defender [id^="player-health-value"')??document.querySelector('[id^="player-health-value"'),[c,u]=l.innerText.split(" / "),m=Math.floor(d(c)/d(u)*100)
	;n.innerText=`life: ${m}%`;})(L,_,x)),2e3);},Hi={},Fi={balboas:{
	req:["defense","dexterity"],desc:"balboas (def/dex)"},frontline:{
	req:["strength","speed"],desc:"frontline (str/spd)"},gym3000:{req:["strength"],
	desc:"gym3000 (str)"},isoyamas:{req:["defense"],desc:"isoyamas (def)"},rebound:{
	req:["speed"],desc:"rebound (spd)"},elites:{req:["dexterity"],
	desc:"elites (dex)"}},Ui=()=>{["one","two"].forEach((t=>{
	const e=document.querySelector(`#nst-spgym-${t}-sel`),n=document.querySelector(`#nst-spgym-${t}-msg`),i=e.value,o=Object.keys(Hi).filter((t=>Fi[i].req.includes(t))).reduce(((t,e)=>({
	...t,[e]:Hi[e]
	})),{}),s=Object.keys(Hi).filter((t=>!Fi[i].req.includes(t))).reduce(((t,e)=>({
	...t,[e]:Hi[e]
	})),{}),a=Object.values(o).reduce(((t,e)=>t+e),0),r=Object.values(s).reduce(Object.keys(o).length>1?(t,e)=>t+e:(t,e)=>Math.max(t,e),0),l=m(a>=1.25*r?a/1.25-r:1.25*r-a),c=Object.keys(o).length>1?Object.keys(a>=1.25*r?s:o).join(" and "):(a>=1.25*r?Object.keys(s).filter((t=>Hi[t]===r)):Object.keys(o)).join(""),u=`Gain ${a>=1.25*r?"no more than":""} ${l} ${c}`
	;n.innerText=u;}));},Gi=t=>(t=>{const e=j({title:"Special Gym",element:t})
	;["one","two"].forEach((t=>{const n=h({id:"nst-spgym-"+t}),i=f("select",{
	id:`nst-spgym-${t}-sel`,classList:"nst-spgym-sel",onchange:t=>{
	const e=null==t?void 0:t.target,n=e.id.replace(/nst-/g,"").replace(/-sel/g,"").replace(/-/g,"")
	;c({[n]:e.value}),Ui();}});Object.entries(Fi).forEach((([e,n])=>{var o;const s={
	value:e,innerText:n.desc},a=f("option",s)
	;a.selected=(null==(o=l("spgym"+t))?void 0:o.toString())===e,i.appendChild(a);}))
	;const o=w({id:`nst-spgym-${t}-msg`,classList:"nst-spgym-msg"})
	;n.appendChild(i),n.appendChild(o),e.appendChild(n);}));})(t),Wi=t=>{var e,n
	;"stats"in t?Object.entries(null==t?void 0:t.stats).forEach((([t,e])=>Hi[t]=d(null==e?void 0:e.value))):"stat"in t&&(Hi[null==(e=null==t?void 0:t.stat)?void 0:e.name]=d(null==(n=null==t?void 0:t.stat)?void 0:n.newValue)),
	Ui();},Xi=t=>{t=t.closest('ul[class*="properties"]')
	;const e=l("userdata"),n=[...e.faction_perks,...e.job_perks,...e.property_perks,...e.education_perks,...e.book_perks].filter((t=>t.includes("gym gains")))
	;["strength","defense","speed","dexterity"].forEach((i=>{
	const o=e.faction_perks.filter((t=>t.includes(i+" gym gains"))).reduce(((t,e)=>t+d(e.match(/\d+/))),0),s=n.filter((t=>t.includes(i)||t.match(/% gym gains?/))).reduce(((t,e)=>t+d(e.match(/\d+/))),0),a=h({
	id:"nst-steadfast-"+i,classList:"nst-steadfast",
	innerText:`steadfast: ${o}% (${s}%)`})
	;t.querySelector("[class*="+i).insertAdjacentElement("afterbegin",a);}));},Yi=t=>{
	if(!t)return;if(t.querySelector("a"))return;const e=t.innerHTML,n=k({
	classList:"nst-pokername",href:"profiles.php?NID="+e,target:"_blank",
	innerText:""+e});t.innerHTML="",t.appendChild(n);},Ji=t=>{
	const e="p[class^=name]"
	;t.querySelectorAll(e).forEach((t=>Yi(t))),new MutationObserver((t=>{
	t.forEach((t=>{
	Array.from(t.addedNodes).forEach((t=>Yi(t.querySelector&&t.querySelector(e))));
	}));})).observe(t,{childList:true,subtree:true});},Ki={"Small Arms Cache":20,
	"Melee Cache":30,"Medium Arms Cache":50,"Heavy Arms Cache":70,"Armor Cache":60
	},Qi=async t=>{const e=null==t?void 0:t.parentElement,n=await E({section:"torn",
	select:"items"});if(!(null==n?void 0:n.status))return
	;const i=null==n?void 0:n.items;Array.from(e.children).forEach((t=>((t,e)=>{
	const n=t.innerText.split(",").filter((t=>Object.keys(Ki).includes(t.trim().replace(/^\d+x /,""))))
	;let i=0,o=0,s=0;n.forEach((t=>{
	const n=parseInt(t.trim().match(/\d+x/)[0]),a=t.trim().replace(/^\d+x /,""),r=Object.values(e).filter((t=>t.name.includes(a)))[0].market_value
	;o+=n,i+=r*n,s+=n*+Ki[a];}));const a=`caches: ${o} | BB: ${s} | MV: $${m(i)}`
	;t.appendChild(h({innerText:a}));})(t,i)));};let Vi={};const Zi=()=>{
	const t=document.querySelector("div[class^='joinWrap'] div[class^='rowsWrap']")
	;if(!t)return;const e=Array.from(t.children);0===e.length?Vi={}:e.forEach((t=>{
	const e=null==t?void 0:t.getAttribute("id");Vi[e]||(Vi[e]=a());const n=(i=Vi[e],
	v(900-(a()-i)));var i
	;const o=t.querySelector("div[class^='betBlock']"),s=o.getAttribute("aria-label").split(":")[1].trim(),r="$"+m(d(s))
	;o.innerText=r+"\n"+n;}));},to=t=>{if("lobby"!==(null==t?void 0:t.step))return
	;const e=null==t?void 0:t.data;Object.values(e).forEach((t=>{
	void 0!==t.ID&&(Vi[t.ID]=t.timeCreated);})),setInterval(Zi,1e3);},eo=async()=>{
	const t=d(s().match(/ID=(\d+)/)[1]),n=await(async()=>{
	const t=`https://www.torn.com/trade.php?step=getFullMoney&ID=${d(s().match(/ID=(\d+)/)[1])}&rfcv=${e()}`
	;return await fetch(t,{method:"GET",headers:{"x-requested-with":"XMLHttpRequest"
	}}).then((t=>t.json())).then((t=>d(t))).catch((t=>console.error(t)))||0
	})(),i="https://www.torn.com/trade.php?rfcv="+e(),o={method:"POST",headers:{
	"x-requested-with":"XMLHttpRequest"},body:new URLSearchParams({step:"view",ID:t,
	ajax:"true",amount:n,sub_step:"addmoney2"})};await fetch(i,{...o
	}).catch((t=>console.error(t)));},no=async t=>(t=>{const e=h({
	classList:"nst-ghost-wrap"}),n=g({innerText:"deposit",classList:"torn-btn",
	onclick:eo});e.appendChild(n),t.insertAdjacentElement("beforebegin",e);
	})(t),io=t=>{t.classList.add("nst-hide-medal");},oo=t=>{
	const e=t.parentElement.children[0],n=e.innerText.split("\n")[0],i=`${n} [${window.location.search.match(/\ID=(\d+)/)[1]}]`
	;e.innerHTML=e.innerHTML.replace(n,i);},so={home:()=>{
	N("livenetworth")&&gn(Bn,'ul.info-cont-wrap [aria-label^="Networth"]'),
	N("effectivestats")&&gn(In,".battle");},abro:()=>{
	N("maxbuyabroad")&&gn(Un,"body");},trav:()=>{}},ao={amarket:()=>{
	N("rwbonus")&&gn(hi,"body");},bazaar:()=>{
	N("rwbonus")&&gn(hi,"body"),N("bazaarvalue")&&gn(kn,"#bazaarRoot .wrapper");},
	city:()=>{},companies:()=>{},displaycase:()=>{},faction:()=>{},gym:()=>{
	N("specialgym")&&(gn(Gi,"#gymroot"),G(Wi,"getInitialGymInfo"),G(Wi,"train"));},
	index:()=>{},item:()=>{N("equipnoconfirm")&&U(jn),N("rwbonus")&&gn(hi,"body");},
	imarket:()=>{N("marketnoconfirm")&&U(Hn);},loader:()=>{
	N("warintercept")&&"attack"===i()&&G($i,"attackData");},page:()=>{
	N("rrtimeout")&&"russianRoulette"===i()&&G(to,"russianRouletteData");},
	pmarket:()=>{},profiles:()=>{},search:()=>{},trade:()=>{},all:()=>{
	N("leftalign")&&document.documentElement.classList.add("nst-left-align"),
	N("minilastaction")&&G(zi,"UserMiniProfile");},nopager:()=>{}},ro={
	amarket:()=>{},bazaar:()=>{N("bazaarautoprice")&&gn(wn,"body");},city:()=>{
	N()&&gn(mi,"body"),N("cityfinds")&&gn(Ln,"#map .leaflet-marker-pane");},
	companies:()=>{
	N("ezmoneydeposit")&&gn(En,"body"),N("employeela")&&gn(Sn,".manage-company"),
	N("companyrestock")&&/stock/.test(s())&&gn(_n,"body");},displaycase:()=>{
	N("displaycaseitemid")&&gn(On,"ul.dc-list"),
	N("rwbonus")&&gn(hi,"ul.display-cabinet");},factions:()=>{
	N("ezmoneydeposit")&&gn(En,"body"),
	N(Q)&&gn(Nn,"#faction-armoury"),N("hidefactiondesc")&&document.documentElement.style.setProperty("--nst-hide-fact-desc","none"),
	N("hidewargraph")&&document.documentElement.style.setProperty("--nst-hide-war-graph","none"),
	N("factionid")&&gn(oo,"#factions .faction-profile .faction-info");},gym:()=>{
	N("")&&gn(Xi,'#gymroot ul[class*="properties"] [class*="strength"]');},
	index:()=>{so[R()]();},item:()=>{
	N("removeuglyimage")&&gn(ci,'[class^="itemPreviewWrapper"]',true),
	N("easyloadoutequip")&&gn(Dn,'ul[class^="slots"]'),N(J)&&gn(ii,"div.items-wrap");
	},imarket:()=>{N("marketnoconfirm")&&gn(Fn,"body");},jailview:()=>{
	N("quickjail")&&gn(ri,"ul.users-list");},loader:()=>{
	N("missionhelper")&&"missions"===i()&&gn(Wn,".giver-cont-wrap"),
	N("fighterino")&&"attack"===i()&&gn(Ei,'div[class^="playersModelWrap"]'),
	N("targetstatus")&&"attack"===i()&&gn(Bi,'[class^="playerWindow"] [class*="defender"]');
	},page:()=>{
	so[R()](),N("pokername")&&"holdem"===i()&&gn(Ji,"div[class^=players]");},
	pmarket:()=>{
	N("pointsnoconfirm")&&gn(Kn,".users-point-sell"),N("pointsmuglight")&&gn(Yn,".users-point-sell");
	},profiles:()=>{
	N("idtoname")&&gn(Rn,".user-info-value"),N("hidemedals")&&gn(io,".medals-wrapper"),
	N("statspies")&&gn(Ni,".user-info-value");},properties:()=>{
	N("ezmoneydeposit")&&gn(En,"body");},shops:()=>{N("cshopmaxbuy")&&gn(Tn,"body");},
	trade:()=>{
	N("tradevalue")&&gn(bi,"#trade-container .trade-cont"),N("quickghost")&&gn(no,"#trade-container .trade-cont .user.left");
	},war:()=>{var t
	;N("warvalue")&&"rankreport"===(null==(t=window.location.search.match(/\?step=(\w+)/))?void 0:t[1])&&gn(Qi,'li[class^="members-bonus-row"]');
	},all:()=>{N("refillreminder")&&gn(li,'[class*="bar"][class*="energy"]');},
	nopager:()=>{}},lo={loading:async()=>{
	gn(bn,"#sidebar"),z()&&(document.onreadystatechange=()=>lo[document.readyState](),
	(ao.all??ao.nopager)(),(ao[o()]??ao.nopager)(),C());},interactive:()=>{
	z()&&((ro.all??ro.nopager)(),(ro[o()]??ro.nopager)());},complete:()=>{z();}}
	;lo[document.readyState]();}();

})();