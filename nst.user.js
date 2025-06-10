// ==UserScript==
// @name         nst
// @namespace    seintz.torn.nst
// @version      2.1.1
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
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

(function () {
	'use strict';

	!function(){
	const t=t=>GM.notification(t),e=()=>document.cookie.split("; ").find((t=>t.startsWith("rfc_v"))).split("=")[1],n=t=>new URLSearchParams(window.location.search).get(t),i=()=>{
	var t;return null==(t=window.location.search.match(/\?sid=(\w+)/))?void 0:t[1]
	},o=()=>window.location.pathname.replace(/\//,"").replace(/\.php/,""),r=()=>window.location.hash.replace(/^#\/(?:\w+=)?/,""),a=()=>Math.round(Date.now()/1e3),s=t=>!t||null==t||0===Object.keys(t).length,l=(t="")=>{
	let e;try{e=JSON.parse(localStorage.getItem("nstdata"));}catch{e={};}
	return ""===t?e??{}:null==e?void 0:e[t]},c=t=>{const e=l()
	;Object.entries(t).forEach((([t,n])=>e[t]=n)),
	localStorage.setItem("nstdata",JSON.stringify(e));},d=t=>{
	localStorage.removeItem(t);
	},u=t=>+(t+"").replace(/[^\d]/g,""),m=t=>Math.round(t).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),p=t=>{
	let e=""
	;const n=Math.floor(t/86400),i=Math.floor(t%86400/3600),o=Math.floor(t%3600/60),r=Math.floor(t%3600%60)
	;return n>0&&(e+=n.toString().padStart(2,"0")+"d "),
	i>0&&(e+=i.toString().padStart(2,"0")+"h "),
	o>0&&(e+=o.toString().padStart(2,"0")+"m "),
	r>0&&(e+=r.toString().padStart(2,"0")+"s"),""+e
	},f=t=>t.toLowerCase().replace(/ /g,""),h=(t,e)=>{
	const n=document.createElement(t);return Object.entries(e).forEach((([t,e])=>{
	t.startsWith("on")&&"function"==typeof e?n.addEventListener(t.slice(2),e):t in n?n[t]=e:n.setAttribute(t,e+"");
	})),n
	},v=t=>h("div",t),b=t=>h("span",t),g=t=>h("button",t),w=t=>h("li",t),y=t=>h("p",t),x=t=>h("a",t),k=t=>h("img",t),L=t=>h("input",t),_=t=>h("label",t),T=t=>{
	const{elem:e,title:n,cback:i=()=>{}}=t,o=f(n),r=v({classList:"nst-box-item"
	}),a=h("input",{id:"nst-"+o,type:"text",classList:"nst-input",
	value:m(+(l(o)??"0")),placeholder:o,onkeyup:t=>{const e=t.target,n=u(e.value)
	;e.value=n.toLocaleString("en-US");const o=f(e.placeholder);c({[o]:n}),i();}})
	;return r.appendChild(a),e.appendChild(r),r},O=(t,e,n,i)=>{const o=v({
	classList:"nst-box-item",onchange:i}),r=L({...t,type:"checkbox"}),a={
	innerText:e,htmlFor:null==t?void 0:t.id,title:n},s=_(a);return o.appendChild(r),
	o.appendChild(s),o},D=(t,e)=>{const n=l("outcome").toString(),i=v({
	classList:"nst-box-item"}),o=L({id:t,type:"radio",name:e,value:t,checked:n===t
	}),r=_({innerText:"hospitalize"===t?"hosp":t,htmlFor:t,classList:""})
	;return i.appendChild(o),i.appendChild(r),i
	},I='<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9" /></svg>',j='<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6" /></svg>',M=t=>{
	const e=t.target.closest(".nst-box-header"),n=e.nextElementSibling;if(!n)return
	;const i=e.querySelector("#nst-box-title").innerText,o=f(i)+"Folded",r=n.classList.toggle("hidden")
	;e.querySelector("#nst-arrow").innerHTML=r?j:I,c({[o]:r});},S=t=>{
	const{element:e,title:n}=t;if(!e)return
	;const i=f(n),o=i+"Folded",r=l(o)?"nst-box-content hidden":"nst-box-content",a=v({
	classList:"nst-box"}),s=(t=>{const e=v({classList:"nst-box-header",onclick:M})
	;return e.appendChild(b({classList:"nst-box-title"})).appendChild(b({
	id:"nst-box-title",innerText:t})),e.appendChild(v({id:"nst-arrow"})),e})(n)
	;s.querySelector("#nst-arrow").innerHTML=l(o)?j:I;const c=v({classList:r})
	;if(document.querySelector("#nst-"+i))return;const d=v({id:"nst-"+i,
	classList:"nst-box-row"})
	;return c.appendChild(d),a.appendChild(s),a.appendChild(c),
	e.insertAdjacentElement("beforebegin",a),d},P=(t,e)=>{
	const n=new Event("input",{bubbles:true})
	;t.value=""+e,t.dispatchEvent(n),t.select();},E=async t=>{var e,n
	;const{section:i,select:o,objID:r,api:a}=t,s=`https://api.torn.com/${i}/${r??""}?selections=${o}&key=${a??l("apikey")}&comment=nst`,c=await V("GET",s),u=H()?c:null==c?void 0:c.response
	;return void 0!==(null==u?void 0:u.error)?(console.error(null==(e=null==u?void 0:u.error)?void 0:e.error),
	[2,10,13,18].includes(null==(n=null==u?void 0:u.error)?void 0:n.code)&&d("nstdata"),
	{status:false,error:"broken key"}):{status:true,...u}},$=async t=>{
	const{selection:e,api:n}=t,i=`https://www.tornstats.com/api/v2/${n??l("tsapikey")??l("apikey")}${e}`,o=await V("GET",i),r=H()?o:null==o?void 0:o.response
	;return void 0===(null==r?void 0:r.status)||false===(null==r?void 0:r.status)?(console.error(null==r?void 0:r.message,r),
	{status:false}):r},q=(t={})=>{var e;const n=s(t)?l("userdata"):t;return {
	t:null==n?void 0:n.player_id,
	i:null==(e=null==n?void 0:n.faction)?void 0:e.faction_id}
	},A=t=>t.toString(16),z=(t={})=>{const e=l("apikey")
	;if(16!==(null==e?void 0:e.length))return  false
	;const n=s(t)?l("userdata"):t,{t:i,i:o}=q(n)
	;return !s(n)&&!!((t,e)=>!(!["1402a5","1c2b3b","1f6fae","21d210","21d476","257b50","258d3f","259d63","279b7d","2ac242","4cffd","30a6cc"].includes(e)&&!["253d","2de3","2d3d","235f","5416","2396"].includes(t)))(A(o),A(i))
	},C=async()=>{var e,n;setTimeout(C,6e4);const i=l();if(s(i))return
	;const o=null==i?void 0:i.apikey;if(16!==(null==o?void 0:o.length))return
	;const r=null==i?void 0:i.userdata,d=1e3*((null==r?void 0:r.timestamp)??0)
	;if(Date.now()-3e4<=d)return;const m={section:"user",
	select:"bars,basic,battlestats,cooldowns,education,icons,money,networth,notifications,perks,profile,refills,timestamp,travel,newmessages,newevents,personalstats",
	api:o},f=await E(m);if(!(null==f?void 0:f.status))return;const{t:h,i:v}=q(f)
	;if(void 0===h||void 0===v)return
	;const b=(null==(n=null==(e=null==f?void 0:f.merit_perks)?void 0:e.filter((t=>t.includes("mug"))))?void 0:n.join())??0,g=(u(b)/5+20)/400
	;var w,y;"player_id"in f&&c({userdata:f}),c({mugperc:g
	}),H()||(w=r,y=f,N("drugnoti")&&((e,n)=>{var i,o
	;const r=null==(i=null==n?void 0:n.cooldowns)?void 0:i.drug
	;0!==(null==(o=null==e?void 0:e.cooldowns)?void 0:o.drug)&&0===r&&t({
	title:"NST: Drug Cooldown",text:"Your drug cooldown has expired."});
	})(w,y),N("travnoti")&&((e,n)=>{var i,o,r
	;const a=null==(i=null==n?void 0:n.travel)?void 0:i.time_left,s=null==(o=null==e?void 0:e.travel)?void 0:o.time_left,l=null==(r=null==n?void 0:n.travel)?void 0:r.destination
	;a<=120&&a!==s&&t({title:"NST: Travel",text:`${l} - Landing in ${p(a)}`});
	})(w,y),N("hospnoti")&&((e,n)=>{var i,o
	;const r=null==(i=null==n?void 0:n.states)?void 0:i.hospital_timestamp,s=null==(o=null==e?void 0:e.states)?void 0:o.hospital_timestamp
	;if(!(r-a()<=300&&r!==s))return;const l=Math.round(r-a());t({
	title:"NST: Hospital",text:"Out of hosp in "+p(l)});
	})(w,y),N("eventnoti")&&((e,n)=>{var i,o
	;const r=null==(i=null==n?void 0:n.notifications)?void 0:i.events,a=null==(o=null==e?void 0:e.notifications)?void 0:o.events
	;0!==r&&r!==a&&t({title:"NST: New Event",
	text:`You have ${r} new event${1===r?"":"s"}.`});})(w,y),N("msgnoti")&&((e,n)=>{
	var i,o
	;const r=null==(i=null==n?void 0:n.notifications)?void 0:i.messages,a=null==(o=null==e?void 0:e.notifications)?void 0:o.messages
	;0!==r&&r!==a&&t({title:"NST: New Message",
	text:`You have ${r} new message${1===r?"":"s"}.`});})(w,y));},N=(t="")=>{var e
	;if(!z())return  false;const n=l("script")
	;return ""===t||!!(null==(e=null==n?void 0:n[t])?void 0:e.enabled)},R=()=>{
	var t,e
	;const n=null==(t=null==document?void 0:document.body)?void 0:t.getAttribute("data-traveling"),i=null==(e=null==document?void 0:document.body)?void 0:e.getAttribute("data-abroad")
	;return "false"==n&&"false"==i?"home":"true"==n&&"true"==i?"trav":"false"==n&&"true"==i?"abro":`${n}, ${i}`
	},B=t=>t.split("&").reduce(((t,e)=>({...t,[e.split("=")[0]]:e.split("=")[1]
	})),{}),F=t=>Object.keys(t).map((e=>`${e}=${t[e]}`)).join("&"),H=()=>void 0!==window.flutter_inappwebview,U=t=>{
	H()||(XMLHttpRequest.prototype._original_send=XMLHttpRequest.prototype.send,
	XMLHttpRequest.prototype.send=function(e){try{
	if(!e)return this._original_send(e);const n=t(e)
	;console.log("data",e),console.log("new_data",n),this._original_send(n);
	}catch(n){console.error(n),this._original_send(e);}});},G=(t,e)=>{
	const n=H()?window:unsafeWindow,{fetch:i}=n;n.fetch=async(...n)=>{var o,r,a
	;const s=await i(...n),l=(null==(o=n[0])?void 0:o.url)||n[0],c=null==(r=null==l?void 0:l.match(RegExp("(?<=step=|sid=)(\\w+)","g")))?void 0:r[0]
	;if(!c||c!==e)return s;let d;try{
	d=await(null==(a=null==s?void 0:s.clone())?void 0:a.json());}catch(u){
	return console.error(n,u),s}return t(d),s};
	},W=+l("mugperc"),X=u(l("mugthreshold")),Y="Quick Items",J=f(Y),K="Quick Faction",Q=f(K),V=(t,e,n={},i={})=>new Promise(((i,o)=>{
	if(H())PDA_httpGet(e).then((t=>i(JSON.parse(t.responseText)))).catch(o);else {
	const r={url:e,method:t,headers:n,responseType:"json",onload:i,onerror:o}
	;GM.xmlHttpRequest(r);}})),Z=()=>{console.log("nst - init default start")
	;const t=l()??{},e={},n=tt.script,i=(null==t?void 0:t.script)??n
	;Object.keys(i).forEach((t=>{n[t]&&(n[t].enabled=i[t].enabled);
	})),t.script=n,Object.keys(tt).forEach((n=>e[n]=t[n]??tt[n])),
	c(e),console.log("nst - init default end");},tt={script:{drugnoti:{
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
	weapon:{primary:0,secondary:1,melee:2}},et=async()=>{
	const t=document.getElementById("nst-ts-message"),e=document.getElementById("nst-tsapikey")
	;if(!t||!e)return;const n=e.value
	;if(t.innerText="",19!==(null==n?void 0:n.length))return t.classList.remove("text-nstgreen"),
	void(t.innerText="Invalid Key Length");const i=await $({api:n,selection:""})
	;if(!(null==i?void 0:i.status))return t.classList.remove("text-nstgreen"),
	void(t.innerText="Invalid Key");c({tsapikey:n
	}),t.classList.add("text-nstgreen"),t.innerText="Key Saved";},nt=async()=>{
	const t=document.getElementById("nst-message"),e=document.getElementById("nst-apikey")
	;if(!t||!e)return;const n=e.value
	;if(t.innerText="",16!==(null==n?void 0:n.length))return t.classList.remove("text-nstgreen"),
	void(t.innerText="Invalid Key Length");const i={section:"user",select:"profile",
	api:n},o=await E(i)
	;if(!(null==o?void 0:o.status))return t.classList.remove("text-nstgreen"),
	void(t.innerText=null==o?void 0:o.error);const{t:r,i:a}=q(o)
	;return void 0===r||void 0===a?(t.classList.remove("text-nstgreen"),
	void(t.innerText="API broken, wait for ched to fix")):(c({apikey:n}),z(o)?(c({
	userdata:o
	}),t.classList.add("text-nstgreen"),t.innerText="Login Successful",void hn()):(d("nstdata"),
	t.classList.remove("text-nstgreen"),
	void(t.innerText="You are not allowed, contact seintz[2460991]")))
	},it=async()=>{
	confirm("Are you sure you want to reset?")&&(d("nstdata"),window.location.reload());
	},ot=t=>{const e=document.getElementById(t);if(!e)return;e.innerHTML=""
	;const n=x({href:"https://www.tornstats.com/settings/general",target:"_blank",
	innerText:"here",classList:"text-nstmain font-bold"}),i=v({classList:"text-base"
	});i.innerHTML="Create your TS key ",i.appendChild(n);const o=v({
	classList:"nst-api-wrap"}),r=v({classList:"nst-block"}).appendChild(b({
	id:"nst-ts-message",classList:"nst-message"})),a="tsapikey",s=h("input",{
	id:"nst-"+a,type:"password",classList:"nst-input m-2",maxLength:19,required:true,
	value:l(a)??""}),c=g({id:"nst-tslogin",classList:"torn-btn m-2",
	innerText:"save",onclick:et})
	;o.appendChild(i),o.appendChild(r),o.appendChild(s),
	o.appendChild(c),e.appendChild(o);},rt=t=>{const e=document.getElementById(t)
	;if(!e)return;e.innerHTML="";const n=x({
	href:"https://www.torn.com/preferences.php#tab=api",target:"_blank",
	innerText:"limited",classList:"text-nstyellow font-bold"}),i=x({
	href:"https://www.torn.com/preferences.php#tab=api?&step=addNewKey&title=nst&type=3",
	target:"_blank",innerText:"create",classList:"text-nstmain font-bold"}),o=v({
	classList:"text-base"})
	;o.innerHTML="Enter a ",o.appendChild(n),o.innerHTML+=" apikey or ",
	o.appendChild(i),o.innerHTML+=" one ad-hoc";const r=v({classList:"nst-api-wrap"
	}),a=v({classList:"nst-block"}).appendChild(b({id:"nst-message",
	classList:"nst-message"})),s="apikey",c=h("input",{id:"nst-"+s,type:"password",
	classList:"nst-input m-2",maxLength:16,required:true,value:l(s)??""}),d=g({
	id:"nst-login",classList:"torn-btn m-2",innerText:"save",onclick:nt}),u=g({
	id:"nst-reset",classList:"torn-btn m-2",innerText:"reset",onclick:it})
	;r.appendChild(o),
	r.appendChild(a),r.appendChild(c),r.appendChild(d),r.appendChild(u),
	e.appendChild(r);};function at(t,e){var n=Object.keys(t)
	;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t)
	;e&&(i=i.filter((function(e){
	return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i);}
	return n}function st(t){for(var e=1;e<arguments.length;e++){
	var n=null!=arguments[e]?arguments[e]:{}
	;e%2?at(Object(n),true).forEach((function(e){ct(t,e,n[e]);
	})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):at(Object(n)).forEach((function(e){
	Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e));}));}return t}
	function lt(t){
	return (lt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){
	return typeof t}:function(t){
	return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t
	})(t)}function ct(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,
	enumerable:true,configurable:true,writable:true}):t[e]=n,t}function dt(){
	return dt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){
	var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i]);}
	return t},dt.apply(this,arguments)}function ut(t){
	if("undefined"!=typeof window&&window.navigator)return !!navigator.userAgent.match(t)
	}
	var mt=ut(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),pt=ut(/Edge/i),ft=ut(/firefox/i),ht=ut(/safari/i)&&!ut(/chrome/i)&&!ut(/android/i),vt=ut(/iP(ad|od|hone)/i),bt=ut(/chrome/i)&&ut(/android/i),gt={
	capture:false,passive:false};function wt(t,e,n){t.addEventListener(e,n,!mt&&gt);}
	function yt(t,e,n){t.removeEventListener(e,n,!mt&&gt);}function xt(t,e){if(e){
	if(">"===e[0]&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e)
	;if(t.msMatchesSelector)return t.msMatchesSelector(e)
	;if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch(n){return  false}
	return  false}}function kt(t){
	return t.host&&t!==document&&t.host.nodeType?t.host:t.parentNode}
	function Lt(t,e,n,i){if(t){n=n||document;do{
	if(null!=e&&(">"===e[0]?t.parentNode===n&&xt(t,e):xt(t,e))||i&&t===n)return t
	;if(t===n)break}while(t=kt(t))}return null}var _t,Tt=/\s+/g;function Ot(t,e,n){
	if(t&&e)if(t.classList)t.classList[n?"add":"remove"](e);else {
	var i=(" "+t.className+" ").replace(Tt," ").replace(" "+e+" "," ")
	;t.className=(i+(n?" "+e:"")).replace(Tt," ");}}function Dt(t,e,n){
	var i=t&&t.style;if(i){
	if(void 0===n)return document.defaultView&&document.defaultView.getComputedStyle?n=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),
	void 0===e?n:n[e]
	;e in i||-1!==e.indexOf("webkit")||(e="-webkit-"+e),i[e]=n+("string"==typeof n?"":"px");
	}}function It(t,e){var n="";if("string"==typeof t)n=t;else do{
	var i=Dt(t,"transform");i&&"none"!==i&&(n=i+" "+n);}while(!e&&(t=t.parentNode))
	;var o=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix
	;return o&&new o(n)}function jt(t,e,n){if(t){
	var i=t.getElementsByTagName(e),o=0,r=i.length;if(n)for(;o<r;o++)n(i[o],o)
	;return i}return []}function Mt(){
	return document.scrollingElement||document.documentElement}
	function St(t,e,n,i,o){if(t.getBoundingClientRect||t===window){var r,a,s,l,c,d,u
	;if(t!==window&&t.parentNode&&t!==Mt()?(a=(r=t.getBoundingClientRect()).top,
	s=r.left,
	l=r.bottom,c=r.right,d=r.height,u=r.width):(a=0,s=0,l=window.innerHeight,
	c=window.innerWidth,
	d=window.innerHeight,u=window.innerWidth),(e||n)&&t!==window&&(o=o||t.parentNode,
	!mt))do{
	if(o&&o.getBoundingClientRect&&("none"!==Dt(o,"transform")||n&&"static"!==Dt(o,"position"))){
	var m=o.getBoundingClientRect()
	;a-=m.top+parseInt(Dt(o,"border-top-width")),s-=m.left+parseInt(Dt(o,"border-left-width")),
	l=a+r.height,c=s+r.width;break}}while(o=o.parentNode);if(i&&t!==window){
	var p=It(o||t),f=p&&p.a,h=p&&p.d;p&&(l=(a/=h)+(d/=h),c=(s/=f)+(u/=f));}return {
	top:a,left:s,bottom:l,right:c,width:u,height:d}}}function Pt(t,e,n){
	for(var i=zt(t,true),o=St(t)[e];i;){if(!(o>=St(i)[n]))return i;if(i===Mt())break
	;i=zt(i,false);}return  false}function Et(t,e,n,i){
	for(var o=0,r=0,a=t.children;r<a.length;){
	if("none"!==a[r].style.display&&a[r]!==Re.ghost&&(i||a[r]!==Re.dragged)&&Lt(a[r],n.draggable,t,false)){
	if(o===e)return a[r];o++;}r++;}return null}function $t(t,e){
	for(var n=t.lastElementChild;n&&(n===Re.ghost||"none"===Dt(n,"display")||e&&!xt(n,e));)n=n.previousElementSibling
	;return n||null}function qt(t,e){var n=0;if(!t||!t.parentNode)return  -1
	;for(;t=t.previousElementSibling;)"TEMPLATE"===t.nodeName.toUpperCase()||t===Re.clone||e&&!xt(t,e)||n++
	;return n}function At(t){var e=0,n=0,i=Mt();if(t)do{var o=It(t),r=o.a,a=o.d
	;e+=t.scrollLeft*r,n+=t.scrollTop*a;}while(t!==i&&(t=t.parentNode));return [e,n]}
	function zt(t,e){if(!t||!t.getBoundingClientRect)return Mt();var n=t,i=false;do{
	if(n.clientWidth<n.scrollWidth||n.clientHeight<n.scrollHeight){var o=Dt(n)
	;if(n.clientWidth<n.scrollWidth&&("auto"==o.overflowX||"scroll"==o.overflowX)||n.clientHeight<n.scrollHeight&&("auto"==o.overflowY||"scroll"==o.overflowY)){
	if(!n.getBoundingClientRect||n===document.body)return Mt();if(i||e)return n;i=true;
	}}}while(n=n.parentNode);return Mt()}function Ct(t,e){
	return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)
	}function Nt(t,e){return function(){if(!_t){var n=arguments
	;1===n.length?t.call(this,n[0]):t.apply(this,n),_t=setTimeout((function(){
	_t=void 0;}),e);}}}function Rt(t,e,n){t.scrollLeft+=e,t.scrollTop+=n;}
	function Bt(t){var e=window.Polymer,n=window.jQuery||window.Zepto
	;return e&&e.dom?e.dom(t).cloneNode(true):n?n(t).clone(true)[0]:t.cloneNode(true)}
	function Ft(t,e,n){var i={};return Array.from(t.children).forEach((function(o){
	var r,a,s,l;if(Lt(o,e.draggable,t,false)&&!o.animated&&o!==n){var c=St(o)
	;i.left=Math.min(null!==(r=i.left)&&void 0!==r?r:1/0,c.left),
	i.top=Math.min(null!==(a=i.top)&&void 0!==a?a:1/0,c.top),
	i.right=Math.max(null!==(s=i.right)&&void 0!==s?s:-1/0,c.right),
	i.bottom=Math.max(null!==(l=i.bottom)&&void 0!==l?l:-1/0,c.bottom);}
	})),i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}
	var Ht="Sortable"+(new Date).getTime(),Ut=[],Gt={initializeByDefault:true},Wt={
	mount:function(t){for(var e in Gt)Gt.hasOwnProperty(e)&&!(e in t)&&(t[e]=Gt[e])
	;Ut.forEach((function(e){
	if(e.pluginName===t.pluginName)throw "Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")
	})),Ut.push(t);},pluginEvent:function(t,e,n){var i=this
	;this.eventCanceled=false,n.cancel=function(){i.eventCanceled=true;};var o=t+"Global"
	;Ut.forEach((function(i){
	e[i.pluginName]&&(e[i.pluginName][o]&&e[i.pluginName][o](st({sortable:e
	},n)),e.options[i.pluginName]&&e[i.pluginName][t]&&e[i.pluginName][t](st({
	sortable:e},n)));}));},initializePlugins:function(t,e,n,i){
	for(var o in Ut.forEach((function(i){var o=i.pluginName
	;if(t.options[o]||i.initializeByDefault){var r=new i(t,e,t.options)
	;r.sortable=t,r.options=t.options,t[o]=r,dt(n,r.defaults);}
	})),t.options)if(t.options.hasOwnProperty(o)){
	var r=this.modifyOption(t,o,t.options[o]);void 0!==r&&(t.options[o]=r);}},
	getEventProperties:function(t,e){var n={};return Ut.forEach((function(i){
	"function"==typeof i.eventProperties&&dt(n,i.eventProperties.call(e[i.pluginName],t));
	})),n},modifyOption:function(t,e,n){var i;return Ut.forEach((function(o){
	t[o.pluginName]&&o.optionListeners&&"function"==typeof o.optionListeners[e]&&(i=o.optionListeners[e].call(t[o.pluginName],n));
	})),i}},Xt=["evt"],Yt=function(t,e){
	var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=n.evt,o=function(t,e){
	if(null==t)return {};var n,i,o=function(t,e){if(null==t)return {}
	;var n,i,o={},r=Object.keys(t)
	;for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e)
	;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t)
	;for(i=0;i<r.length;i++)n=r[i],
	e.indexOf(n)>=0||{}.propertyIsEnumerable.call(t,n)&&(o[n]=t[n]);}return o}(n,Xt)
	;Wt.pluginEvent.bind(Re)(t,e,st({dragEl:Kt,parentEl:Qt,ghostEl:Vt,rootEl:Zt,
	nextEl:te,lastDownEl:ee,cloneEl:ne,cloneHidden:ie,dragStarted:ve,putSortable:ce,
	activeSortable:Re.active,originalEvent:i,oldIndex:oe,oldDraggableIndex:ae,
	newIndex:re,newDraggableIndex:se,hideGhostForTarget:Ae,unhideGhostForTarget:ze,
	cloneNowHidden:function(){ie=true;},cloneNowShown:function(){ie=false;},
	dispatchSortableEvent:function(t){Jt({sortable:e,name:t,originalEvent:i});}},o));}
	;function Jt(t){!function(t){
	var e=t.sortable,n=t.rootEl,i=t.name,o=t.targetEl,r=t.cloneEl,a=t.toEl,s=t.fromEl,l=t.oldIndex,c=t.newIndex,d=t.oldDraggableIndex,u=t.newDraggableIndex,m=t.originalEvent,p=t.putSortable,f=t.extraEventProperties
	;if(e=e||n&&n[Ht]){
	var h,v=e.options,b="on"+i.charAt(0).toUpperCase()+i.substr(1)
	;!window.CustomEvent||mt||pt?(h=document.createEvent("Event")).initEvent(i,true,true):h=new CustomEvent(i,{
	bubbles:true,cancelable:true
	}),h.to=a||n,h.from=s||n,h.item=o||n,h.clone=r,h.oldIndex=l,
	h.newIndex=c,h.oldDraggableIndex=d,
	h.newDraggableIndex=u,h.originalEvent=m,h.pullMode=p?p.lastPutMode:void 0
	;var g=st(st({},f),Wt.getEventProperties(i,e));for(var w in g)h[w]=g[w]
	;n&&n.dispatchEvent(h),v[b]&&v[b].call(e,h);}}(st({putSortable:ce,cloneEl:ne,
	targetEl:Kt,rootEl:Zt,oldIndex:oe,oldDraggableIndex:ae,newIndex:re,
	newDraggableIndex:se},t));}
	var Kt,Qt,Vt,Zt,te,ee,ne,ie,oe,re,ae,se,le,ce,de,ue,me,pe,fe,he,ve,be,ge,we,ye,xe=false,ke=false,Le=[],_e=false,Te=false,Oe=[],De=false,Ie=[],je="undefined"!=typeof document,Me=vt,Se=pt||mt?"cssFloat":"float",Pe=je&&!bt&&!vt&&"draggable"in document.createElement("div"),Ee=function(){
	if(je){if(mt)return  false;var t=document.createElement("x")
	;return t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}
	}(),$e=function(t,e){
	var n=Dt(t),i=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),o=Et(t,0,e),r=Et(t,1,e),a=o&&Dt(o),s=r&&Dt(r),l=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+St(o).width,c=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+St(r).width
	;if("flex"===n.display)return "column"===n.flexDirection||"column-reverse"===n.flexDirection?"vertical":"horizontal"
	;if("grid"===n.display)return n.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal"
	;if(o&&a.float&&"none"!==a.float){var d="left"===a.float?"left":"right"
	;return !r||"both"!==s.clear&&s.clear!==d?"horizontal":"vertical"}
	return o&&("block"===a.display||"flex"===a.display||"table"===a.display||"grid"===a.display||l>=i&&"none"===n[Se]||r&&"none"===n[Se]&&l+c>i)?"vertical":"horizontal"
	},qe=function(t){function e(t,n){return function(i,o,r,a){
	var s=i.options.group.name&&o.options.group.name&&i.options.group.name===o.options.group.name
	;if(null==t&&(n||s))return  true;if(null==t||false===t)return  false
	;if(n&&"clone"===t)return t
	;if("function"==typeof t)return e(t(i,o,r,a),n)(i,o,r,a)
	;var l=(n?i:o).options.group.name
	;return  true===t||"string"==typeof t&&t===l||t.join&&t.indexOf(l)>-1}}
	var n={},i=t.group;i&&"object"==lt(i)||(i={name:i
	}),n.name=i.name,n.checkPull=e(i.pull,true),
	n.checkPut=e(i.put),n.revertClone=i.revertClone,t.group=n;},Ae=function(){
	!Ee&&Vt&&Dt(Vt,"display","none");},ze=function(){!Ee&&Vt&&Dt(Vt,"display","");}
	;je&&!bt&&document.addEventListener("click",(function(t){
	if(ke)return t.preventDefault(),
	t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),
	ke=false,false}),true);var Ce=function(t){if(Kt){t=t.touches?t.touches[0]:t
	;var e=(o=t.clientX,r=t.clientY,Le.some((function(t){
	var e=t[Ht].options.emptyInsertThreshold;if(e&&!$t(t)){
	var n=St(t),i=o>=n.left-e&&o<=n.right+e,s=r>=n.top-e&&r<=n.bottom+e
	;return i&&s?a=t:void 0}})),a);if(e){var n={}
	;for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i])
	;n.target=n.rootEl=e,n.preventDefault=void 0,
	n.stopPropagation=void 0,e[Ht]._onDragOver(n);}}var o,r,a;},Ne=function(t){
	Kt&&Kt.parentNode[Ht]._isOutsideThisEl(t.target);};function Re(t,e){
	if(!t||!t.nodeType||1!==t.nodeType)throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t))
	;this.el=t,this.options=e=dt({},e),t[Ht]=this;var n,i,o={group:null,sort:true,
	disabled:false,store:null,handle:null,
	draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:false,
	invertedSwapThreshold:null,removeCloneOnHide:true,direction:function(){
	return $e(t,this.options)},ghostClass:"sortable-ghost",
	chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",
	filter:null,preventOnFilter:true,animation:0,easing:null,setData:function(t,e){
	t.setData("Text",e.textContent);},dropBubble:false,dragoverBubble:false,
	dataIdAttr:"data-id",delay:0,delayOnTouchOnly:false,
	touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,
	forceFallback:false,fallbackClass:"sortable-fallback",fallbackOnBody:false,
	fallbackTolerance:0,fallbackOffset:{x:0,y:0},
	supportPointer:false!==Re.supportPointer&&"PointerEvent"in window&&(!ht||vt),
	emptyInsertThreshold:5}
	;for(var r in Wt.initializePlugins(this,t,o),o)!(r in e)&&(e[r]=o[r])
	;for(var a in qe(e),
	this)"_"===a.charAt(0)&&"function"==typeof this[a]&&(this[a]=this[a].bind(this))
	;this.nativeDraggable=!e.forceFallback&&Pe,
	this.nativeDraggable&&(this.options.touchStartThreshold=1),
	e.supportPointer?wt(t,"pointerdown",this._onTapStart):(wt(t,"mousedown",this._onTapStart),
	wt(t,"touchstart",this._onTapStart)),
	this.nativeDraggable&&(wt(t,"dragover",this),
	wt(t,"dragenter",this)),Le.push(this.el),
	e.store&&e.store.get&&this.sort(e.store.get(this)||[]),dt(this,(i=[],{
	captureAnimationState:function(){
	i=[],this.options.animation&&[].slice.call(this.el.children).forEach((function(t){
	if("none"!==Dt(t,"display")&&t!==Re.ghost){i.push({target:t,rect:St(t)})
	;var e=st({},i[i.length-1].rect);if(t.thisAnimationDuration){var n=It(t,true)
	;n&&(e.top-=n.f,e.left-=n.e);}t.fromRect=e;}}));},addAnimationState:function(t){
	i.push(t);},removeAnimationState:function(t){i.splice(function(t,e){
	for(var n in t)if(t.hasOwnProperty(n))for(var i in e)if(e.hasOwnProperty(i)&&e[i]===t[n][i])return +n
	;return  -1}(i,{target:t}),1);},animateAll:function(t){var e=this
	;if(!this.options.animation)return clearTimeout(n),
	void("function"==typeof t&&t());var o=false,r=0;i.forEach((function(t){
	var n=0,i=t.target,a=i.fromRect,s=St(i),l=i.prevFromRect,c=i.prevToRect,d=t.rect,u=It(i,true)
	;u&&(s.top-=u.f,
	s.left-=u.e),i.toRect=s,i.thisAnimationDuration&&Ct(l,s)&&!Ct(a,s)&&(d.top-s.top)/(d.left-s.left)===(a.top-s.top)/(a.left-s.left)&&(n=function(t,e,n,i){
	return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-n.top,2)+Math.pow(e.left-n.left,2))*i.animation
	}(d,l,c,e.options)),
	Ct(s,a)||(i.prevFromRect=a,i.prevToRect=s,n||(n=e.options.animation),
	e.animate(i,d,s,n)),
	n&&(o=true,r=Math.max(r,n),clearTimeout(i.animationResetTimer),
	i.animationResetTimer=setTimeout((function(){
	i.animationTime=0,i.prevFromRect=null,
	i.fromRect=null,i.prevToRect=null,i.thisAnimationDuration=null;
	}),n),i.thisAnimationDuration=n);})),clearTimeout(n),o?n=setTimeout((function(){
	"function"==typeof t&&t();}),r):"function"==typeof t&&t(),i=[];},
	animate:function(t,e,n,i){if(i){Dt(t,"transition",""),Dt(t,"transform","")
	;var o=It(this.el),r=o&&o.a,a=o&&o.d,s=(e.left-n.left)/(r||1),l=(e.top-n.top)/(a||1)
	;t.animatingX=!!s,
	t.animatingY=!!l,Dt(t,"transform","translate3d("+s+"px,"+l+"px,0)"),
	this.forRepaintDummy=function(t){return t.offsetWidth
	}(t),Dt(t,"transition","transform "+i+"ms"+(this.options.easing?" "+this.options.easing:"")),
	Dt(t,"transform","translate3d(0,0,0)"),
	"number"==typeof t.animated&&clearTimeout(t.animated),
	t.animated=setTimeout((function(){
	Dt(t,"transition",""),Dt(t,"transform",""),t.animated=false,
	t.animatingX=false,t.animatingY=false;}),i);}}}));}function Be(t,e,n,i,o,r,a,s){
	var l,c,d=t[Ht],u=d.options.onMove
	;return !window.CustomEvent||mt||pt?(l=document.createEvent("Event")).initEvent("move",true,true):l=new CustomEvent("move",{
	bubbles:true,cancelable:true
	}),l.to=e,l.from=t,l.dragged=n,l.draggedRect=i,l.related=o||e,
	l.relatedRect=r||St(e),l.willInsertAfter=s,l.originalEvent=a,t.dispatchEvent(l),
	u&&(c=u.call(d,l,a)),c}function Fe(t){t.draggable=false;}function He(){De=false;}
	function Ue(t){
	for(var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,i=0;n--;)i+=e.charCodeAt(n)
	;return i.toString(36)}function Ge(t){return setTimeout(t,0)}function We(t){
	return clearTimeout(t)}Re.prototype={constructor:Re,
	_isOutsideThisEl:function(t){this.el.contains(t)||t===this.el||(be=null);},
	_getDirection:function(t,e){
	return "function"==typeof this.options.direction?this.options.direction.call(this,t,e,Kt):this.options.direction
	},_onTapStart:function(t){if(t.cancelable){
	var e=this,n=this.el,i=this.options,o=i.preventOnFilter,r=t.type,a=t.touches&&t.touches[0]||t.pointerType&&"touch"===t.pointerType&&t,s=(a||t).target,l=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||s,c=i.filter
	;if(function(t){Ie.length=0
	;for(var e=t.getElementsByTagName("input"),n=e.length;n--;){var i=e[n]
	;i.checked&&Ie.push(i);}
	}(n),!Kt&&!(/mousedown|pointerdown/.test(r)&&0!==t.button||i.disabled)&&!l.isContentEditable&&(this.nativeDraggable||!ht||!s||"SELECT"!==s.tagName.toUpperCase())&&!((s=Lt(s,i.draggable,n,false))&&s.animated||ee===s)){
	if(oe=qt(s),ae=qt(s,i.draggable),"function"==typeof c){
	if(c.call(this,t,s,this))return Jt({sortable:e,rootEl:l,name:"filter",
	targetEl:s,toEl:n,fromEl:n}),Yt("filter",e,{evt:t}),void(o&&t.preventDefault())
	}else if(c&&(c=c.split(",").some((function(i){
	if(i=Lt(l,i.trim(),n,false))return Jt({sortable:e,rootEl:i,name:"filter",
	targetEl:s,fromEl:n,toEl:n}),Yt("filter",e,{evt:t}),true
	}))))return void(o&&t.preventDefault())
	;i.handle&&!Lt(l,i.handle,n,false)||this._prepareDragStart(t,a,s);}}},
	_prepareDragStart:function(t,e,n){
	var i,o=this,r=o.el,a=o.options,s=r.ownerDocument;if(n&&!Kt&&n.parentNode===r){
	var l=St(n)
	;if(Zt=r,Qt=(Kt=n).parentNode,te=Kt.nextSibling,ee=n,le=a.group,Re.dragged=Kt,
	de={target:Kt,clientX:(e||t).clientX,clientY:(e||t).clientY
	},fe=de.clientX-l.left,
	he=de.clientY-l.top,this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,
	Kt.style["will-change"]="all",i=function(){Yt("delayEnded",o,{evt:t
	}),Re.eventCanceled?o._onDrop():(o._disableDelayedDragEvents(),
	!ft&&o.nativeDraggable&&(Kt.draggable=true),o._triggerDragStart(t,e),Jt({
	sortable:o,name:"choose",originalEvent:t}),Ot(Kt,a.chosenClass,true));
	},a.ignore.split(",").forEach((function(t){jt(Kt,t.trim(),Fe);
	})),wt(s,"dragover",Ce),
	wt(s,"mousemove",Ce),wt(s,"touchmove",Ce),a.supportPointer?(wt(s,"pointerup",o._onDrop),
	!this.nativeDraggable&&wt(s,"pointercancel",o._onDrop)):(wt(s,"mouseup",o._onDrop),
	wt(s,"touchend",o._onDrop),
	wt(s,"touchcancel",o._onDrop)),ft&&this.nativeDraggable&&(this.options.touchStartThreshold=4,
	Kt.draggable=true),Yt("delayStart",this,{evt:t
	}),!a.delay||a.delayOnTouchOnly&&!e||this.nativeDraggable&&(pt||mt))i();else {
	if(Re.eventCanceled)return void this._onDrop()
	;a.supportPointer?(wt(s,"pointerup",o._disableDelayedDrag),
	wt(s,"pointercancel",o._disableDelayedDrag)):(wt(s,"mouseup",o._disableDelayedDrag),
	wt(s,"touchend",o._disableDelayedDrag),
	wt(s,"touchcancel",o._disableDelayedDrag)),
	wt(s,"mousemove",o._delayedDragTouchMoveHandler),
	wt(s,"touchmove",o._delayedDragTouchMoveHandler),
	a.supportPointer&&wt(s,"pointermove",o._delayedDragTouchMoveHandler),
	o._dragStartTimer=setTimeout(i,a.delay);}}},
	_delayedDragTouchMoveHandler:function(t){var e=t.touches?t.touches[0]:t
	;Math.max(Math.abs(e.clientX-this._lastX),Math.abs(e.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag();
	},_disableDelayedDrag:function(){
	Kt&&Fe(Kt),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents();},
	_disableDelayedDragEvents:function(){var t=this.el.ownerDocument
	;yt(t,"mouseup",this._disableDelayedDrag),
	yt(t,"touchend",this._disableDelayedDrag),
	yt(t,"touchcancel",this._disableDelayedDrag),
	yt(t,"pointerup",this._disableDelayedDrag),
	yt(t,"pointercancel",this._disableDelayedDrag),
	yt(t,"mousemove",this._delayedDragTouchMoveHandler),
	yt(t,"touchmove",this._delayedDragTouchMoveHandler),
	yt(t,"pointermove",this._delayedDragTouchMoveHandler);},
	_triggerDragStart:function(t,e){
	e=e||"touch"==t.pointerType&&t,!this.nativeDraggable||e?this.options.supportPointer?wt(document,"pointermove",this._onTouchMove):wt(document,e?"touchmove":"mousemove",this._onTouchMove):(wt(Kt,"dragend",this),
	wt(Zt,"dragstart",this._onDragStart));try{document.selection?Ge((function(){
	document.selection.empty();})):window.getSelection().removeAllRanges();}catch(n){}
	},_dragStarted:function(t,e){if(xe=false,Zt&&Kt){Yt("dragStarted",this,{evt:e
	}),this.nativeDraggable&&wt(document,"dragover",Ne);var n=this.options
	;!t&&Ot(Kt,n.dragClass,false),
	Ot(Kt,n.ghostClass,true),Re.active=this,t&&this._appendGhost(),Jt({sortable:this,
	name:"start",originalEvent:e});}else this._nulling();},
	_emulateDragOver:function(){if(ue){
	this._lastX=ue.clientX,this._lastY=ue.clientY,Ae()
	;for(var t=document.elementFromPoint(ue.clientX,ue.clientY),e=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(ue.clientX,ue.clientY))!==e;)e=t
	;if(Kt.parentNode[Ht]._isOutsideThisEl(t),e)do{if(e[Ht]&&e[Ht]._onDragOver({
	clientX:ue.clientX,clientY:ue.clientY,target:t,rootEl:e
	})&&!this.options.dragoverBubble)break;t=e;}while(e=kt(e));ze();}},
	_onTouchMove:function(t){if(de){
	var e=this.options,n=e.fallbackTolerance,i=e.fallbackOffset,o=t.touches?t.touches[0]:t,r=Vt&&It(Vt,true),a=Vt&&r&&r.a,s=Vt&&r&&r.d,l=Me&&ye&&At(ye),c=(o.clientX-de.clientX+i.x)/(a||1)+(l?l[0]-Oe[0]:0)/(a||1),d=(o.clientY-de.clientY+i.y)/(s||1)+(l?l[1]-Oe[1]:0)/(s||1)
	;if(!Re.active&&!xe){
	if(n&&Math.max(Math.abs(o.clientX-this._lastX),Math.abs(o.clientY-this._lastY))<n)return
	;this._onDragStart(t,true);}if(Vt){r?(r.e+=c-(me||0),r.f+=d-(pe||0)):r={a:1,b:0,
	c:0,d:1,e:c,f:d}
	;var u="matrix(".concat(r.a,",").concat(r.b,",").concat(r.c,",").concat(r.d,",").concat(r.e,",").concat(r.f,")")
	;Dt(Vt,"webkitTransform",u),
	Dt(Vt,"mozTransform",u),Dt(Vt,"msTransform",u),Dt(Vt,"transform",u),
	me=c,pe=d,ue=o;}t.cancelable&&t.preventDefault();}},_appendGhost:function(){
	if(!Vt){
	var t=this.options.fallbackOnBody?document.body:Zt,e=St(Kt,true,Me,true,t),n=this.options
	;if(Me){
	for(ye=t;"static"===Dt(ye,"position")&&"none"===Dt(ye,"transform")&&ye!==document;)ye=ye.parentNode
	;ye!==document.body&&ye!==document.documentElement?(ye===document&&(ye=Mt()),
	e.top+=ye.scrollTop,e.left+=ye.scrollLeft):ye=Mt(),Oe=At(ye);}
	Ot(Vt=Kt.cloneNode(true),n.ghostClass,false),
	Ot(Vt,n.fallbackClass,true),Ot(Vt,n.dragClass,true),
	Dt(Vt,"transition",""),Dt(Vt,"transform",""),
	Dt(Vt,"box-sizing","border-box"),Dt(Vt,"margin",0),
	Dt(Vt,"top",e.top),Dt(Vt,"left",e.left),
	Dt(Vt,"width",e.width),Dt(Vt,"height",e.height),
	Dt(Vt,"opacity","0.8"),Dt(Vt,"position",Me?"absolute":"fixed"),
	Dt(Vt,"zIndex","100000"),
	Dt(Vt,"pointerEvents","none"),Re.ghost=Vt,t.appendChild(Vt),
	Dt(Vt,"transform-origin",fe/parseInt(Vt.style.width)*100+"% "+he/parseInt(Vt.style.height)*100+"%");
	}},_onDragStart:function(t,e){var n=this,i=t.dataTransfer,o=n.options
	;Yt("dragStart",this,{evt:t
	}),Re.eventCanceled?this._onDrop():(Yt("setupClone",this),
	Re.eventCanceled||((ne=Bt(Kt)).removeAttribute("id"),
	ne.draggable=false,ne.style["will-change"]="",
	this._hideClone(),Ot(ne,this.options.chosenClass,false),
	Re.clone=ne),n.cloneId=Ge((function(){
	Yt("clone",n),Re.eventCanceled||(n.options.removeCloneOnHide||Zt.insertBefore(ne,Kt),
	n._hideClone(),Jt({sortable:n,name:"clone"}));
	})),!e&&Ot(Kt,o.dragClass,true),e?(ke=true,
	n._loopId=setInterval(n._emulateDragOver,50)):(yt(document,"mouseup",n._onDrop),
	yt(document,"touchend",n._onDrop),
	yt(document,"touchcancel",n._onDrop),i&&(i.effectAllowed="move",
	o.setData&&o.setData.call(n,i,Kt)),
	wt(document,"drop",n),Dt(Kt,"transform","translateZ(0)")),
	xe=true,n._dragStartId=Ge(n._dragStarted.bind(n,e,t)),
	wt(document,"selectstart",n),
	ve=true,window.getSelection().removeAllRanges(),ht&&Dt(document.body,"user-select","none"));
	},_onDragOver:function(t){
	var e,n,i,o,r=this.el,a=t.target,s=this.options,l=s.group,c=Re.active,d=le===l,u=s.sort,m=ce||c,p=this,f=false
	;if(!De){
	if(void 0!==t.preventDefault&&t.cancelable&&t.preventDefault(),a=Lt(a,s.draggable,r,true),
	j("dragOver"),Re.eventCanceled)return f
	;if(Kt.contains(t.target)||a.animated&&a.animatingX&&a.animatingY||p._ignoreWhileAnimating===a)return S(false)
	;if(ke=false,
	c&&!s.disabled&&(d?u||(i=Qt!==Zt):ce===this||(this.lastPutMode=le.checkPull(this,c,Kt,t))&&l.checkPut(this,c,Kt,t))){
	if(o="vertical"===this._getDirection(t,a),
	e=St(Kt),j("dragOverValid"),Re.eventCanceled)return f
	;if(i)return Qt=Zt,M(),this._hideClone(),
	j("revert"),Re.eventCanceled||(te?Zt.insertBefore(Kt,te):Zt.appendChild(Kt)),
	S(true);var h=$t(r,s.draggable);if(!h||function(t,e,n){
	var i=St($t(n.el,n.options.draggable)),o=Ft(n.el,n.options,Vt)
	;return e?t.clientX>o.right+10||t.clientY>i.bottom&&t.clientX>i.left:t.clientY>o.bottom+10||t.clientX>i.right&&t.clientY>i.top
	}(t,o,this)&&!h.animated){if(h===Kt)return S(false)
	;if(h&&r===t.target&&(a=h),a&&(n=St(a)),false!==Be(Zt,r,Kt,e,a,n,t,!!a))return M(),
	h&&h.nextSibling?r.insertBefore(Kt,h.nextSibling):r.appendChild(Kt),
	Qt=r,P(),S(true)}else if(h&&function(t,e,n){
	var i=St(Et(n.el,0,n.options,true)),o=Ft(n.el,n.options,Vt)
	;return e?t.clientX<o.left-10||t.clientY<i.top&&t.clientX<i.right:t.clientY<o.top-10||t.clientY<i.bottom&&t.clientX<i.left
	}(t,o,this)){var v=Et(r,0,s,true);if(v===Kt)return S(false)
	;if(n=St(a=v),false!==Be(Zt,r,Kt,e,a,n,t,false))return M(),
	r.insertBefore(Kt,v),Qt=r,P(),S(true)}else if(a.parentNode===r){n=St(a)
	;var b,g,w,y=Kt.parentNode!==r,x=!function(t,e,n){
	var i=n?t.left:t.top,o=n?t.right:t.bottom,r=n?t.width:t.height,a=n?e.left:e.top,s=n?e.right:e.bottom,l=n?e.width:e.height
	;return i===a||o===s||i+r/2===a+l/2
	}(Kt.animated&&Kt.toRect||e,a.animated&&a.toRect||n,o),k=o?"top":"left",L=Pt(a,"top","top")||Pt(Kt,"top","top"),_=L?L.scrollTop:void 0
	;if(be!==a&&(g=n[k],_e=false,Te=!x&&s.invertSwap||y),b=function(t,e,n,i,o,r,a,s){
	var l=i?t.clientY:t.clientX,c=i?n.height:n.width,d=i?n.top:n.left,u=i?n.bottom:n.right,m=false
	;if(!a)if(s&&we<c*o){
	if(!_e&&(1===ge?l>d+c*r/2:l<u-c*r/2)&&(_e=true),_e)m=true;else if(1===ge?l<d+we:l>u-we)return -ge
	}else if(l>d+c*(1-o)/2&&l<u-c*(1-o)/2)return function(t){
	return qt(Kt)<qt(t)?1:-1}(e)
	;return (m=m||a)&&(l<d+c*r/2||l>u-c*r/2)?l>d+c/2?1:-1:0
	}(t,a,n,o,x?1:s.swapThreshold,null==s.invertedSwapThreshold?s.swapThreshold:s.invertedSwapThreshold,Te,be===a),
	0!==b){var T=qt(Kt);do{T-=b,w=Qt.children[T];
	}while(w&&("none"===Dt(w,"display")||w===Vt))}if(0===b||w===a)return S(false);be=a,
	ge=b;var O=a.nextElementSibling,D=false,I=Be(Zt,r,Kt,e,a,n,t,D=1===b)
	;if(false!==I)return 1!==I&&-1!==I||(D=1===I),
	De=true,setTimeout(He,30),M(),D&&!O?r.appendChild(Kt):a.parentNode.insertBefore(Kt,D?O:a),
	L&&Rt(L,0,_-L.scrollTop),
	Qt=Kt.parentNode,void 0===g||Te||(we=Math.abs(g-St(a)[k])),P(),S(true)}
	if(r.contains(Kt))return S(false)}return  false}function j(s,l){Yt(s,p,st({evt:t,
	isOwner:d,axis:o?"vertical":"horizontal",revert:i,dragRect:e,targetRect:n,
	canSort:u,fromSortable:m,target:a,completed:S,onMove:function(n,i){
	return Be(Zt,r,Kt,e,n,St(n),t,i)},changed:P},l));}function M(){
	j("dragOverAnimationCapture"),
	p.captureAnimationState(),p!==m&&m.captureAnimationState();}function S(e){
	return j("dragOverCompleted",{insertion:e
	}),e&&(d?c._hideClone():c._showClone(p),
	p!==m&&(Ot(Kt,ce?ce.options.ghostClass:c.options.ghostClass,false),
	Ot(Kt,s.ghostClass,true)),ce!==p&&p!==Re.active?ce=p:p===Re.active&&ce&&(ce=null),
	m===p&&(p._ignoreWhileAnimating=a),p.animateAll((function(){
	j("dragOverAnimationComplete"),p._ignoreWhileAnimating=null;
	})),p!==m&&(m.animateAll(),
	m._ignoreWhileAnimating=null)),(a===Kt&&!Kt.animated||a===r&&!a.animated)&&(be=null),
	s.dragoverBubble||t.rootEl||a===document||(Kt.parentNode[Ht]._isOutsideThisEl(t.target),
	!e&&Ce(t)),!s.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),f=true}
	function P(){re=qt(Kt),se=qt(Kt,s.draggable),Jt({sortable:p,name:"change",
	toEl:r,newIndex:re,newDraggableIndex:se,originalEvent:t});}},
	_ignoreWhileAnimating:null,_offMoveEvents:function(){
	yt(document,"mousemove",this._onTouchMove),
	yt(document,"touchmove",this._onTouchMove),
	yt(document,"pointermove",this._onTouchMove),
	yt(document,"dragover",Ce),yt(document,"mousemove",Ce),
	yt(document,"touchmove",Ce);},_offUpEvents:function(){var t=this.el.ownerDocument
	;yt(t,"mouseup",this._onDrop),
	yt(t,"touchend",this._onDrop),yt(t,"pointerup",this._onDrop),
	yt(t,"pointercancel",this._onDrop),
	yt(t,"touchcancel",this._onDrop),yt(document,"selectstart",this);},
	_onDrop:function(t){var e=this.el,n=this.options
	;re=qt(Kt),se=qt(Kt,n.draggable),Yt("drop",this,{evt:t
	}),Qt=Kt&&Kt.parentNode,re=qt(Kt),
	se=qt(Kt,n.draggable),Re.eventCanceled||(xe=false,
	Te=false,_e=false,clearInterval(this._loopId),
	clearTimeout(this._dragStartTimer),We(this.cloneId),
	We(this._dragStartId),this.nativeDraggable&&(yt(document,"drop",this),
	yt(e,"dragstart",this._onDragStart)),
	this._offMoveEvents(),this._offUpEvents(),ht&&Dt(document.body,"user-select",""),
	Dt(Kt,"transform",""),
	t&&(ve&&(t.cancelable&&t.preventDefault(),!n.dropBubble&&t.stopPropagation()),
	Vt&&Vt.parentNode&&Vt.parentNode.removeChild(Vt),
	(Zt===Qt||ce&&"clone"!==ce.lastPutMode)&&ne&&ne.parentNode&&ne.parentNode.removeChild(ne),
	Kt&&(this.nativeDraggable&&yt(Kt,"dragend",this),
	Fe(Kt),Kt.style["will-change"]="",
	ve&&!xe&&Ot(Kt,ce?ce.options.ghostClass:this.options.ghostClass,false),
	Ot(Kt,this.options.chosenClass,false),Jt({sortable:this,name:"unchoose",toEl:Qt,
	newIndex:null,newDraggableIndex:null,originalEvent:t}),Zt!==Qt?(re>=0&&(Jt({
	rootEl:Qt,name:"add",toEl:Qt,fromEl:Zt,originalEvent:t}),Jt({sortable:this,
	name:"remove",toEl:Qt,originalEvent:t}),Jt({rootEl:Qt,name:"sort",toEl:Qt,
	fromEl:Zt,originalEvent:t}),Jt({sortable:this,name:"sort",toEl:Qt,
	originalEvent:t})),ce&&ce.save()):re!==oe&&re>=0&&(Jt({sortable:this,
	name:"update",toEl:Qt,originalEvent:t}),Jt({sortable:this,name:"sort",toEl:Qt,
	originalEvent:t})),Re.active&&(null!=re&&-1!==re||(re=oe,se=ae),Jt({
	sortable:this,name:"end",toEl:Qt,originalEvent:t
	}),this.save())))),this._nulling();},_nulling:function(){
	Yt("nulling",this),Zt=Kt=Qt=Vt=te=ne=ee=ie=de=ue=ve=re=se=oe=ae=be=ge=ce=le=Re.dragged=Re.ghost=Re.clone=Re.active=null,
	Ie.forEach((function(t){t.checked=true;})),Ie.length=me=pe=0;},
	handleEvent:function(t){switch(t.type){case "drop":case "dragend":this._onDrop(t)
	;break;case "dragenter":case "dragover":Kt&&(this._onDragOver(t),function(t){
	t.dataTransfer&&(t.dataTransfer.dropEffect="move"),
	t.cancelable&&t.preventDefault();}(t));break;case "selectstart":t.preventDefault();
	}},toArray:function(){
	for(var t,e=[],n=this.el.children,i=0,o=n.length,r=this.options;i<o;i++)Lt(t=n[i],r.draggable,this.el,false)&&e.push(t.getAttribute(r.dataIdAttr)||Ue(t))
	;return e},sort:function(t,e){var n={},i=this.el
	;this.toArray().forEach((function(t,e){var o=i.children[e]
	;Lt(o,this.options.draggable,i,false)&&(n[t]=o);
	}),this),e&&this.captureAnimationState(),t.forEach((function(t){
	n[t]&&(i.removeChild(n[t]),i.appendChild(n[t]));})),e&&this.animateAll();},
	save:function(){var t=this.options.store;t&&t.set&&t.set(this);},
	closest:function(t,e){return Lt(t,e||this.options.draggable,this.el,false)},
	option:function(t,e){var n=this.options;if(void 0===e)return n[t]
	;var i=Wt.modifyOption(this,t,e);n[t]=void 0!==i?i:e,"group"===t&&qe(n);},
	destroy:function(){Yt("destroy",this);var t=this.el
	;t[Ht]=null,yt(t,"mousedown",this._onTapStart),
	yt(t,"touchstart",this._onTapStart),
	yt(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(yt(t,"dragover",this),
	yt(t,"dragenter",this)),
	[].forEach.call(t.querySelectorAll("[draggable]"),(function(t){
	t.removeAttribute("draggable");
	})),this._onDrop(),this._disableDelayedDragEvents(),
	Le.splice(Le.indexOf(this.el),1),this.el=t=null;},_hideClone:function(){if(!ie){
	if(Yt("hideClone",this),Re.eventCanceled)return
	;Dt(ne,"display","none"),this.options.removeCloneOnHide&&ne.parentNode&&ne.parentNode.removeChild(ne),
	ie=true;}},_showClone:function(t){if("clone"===t.lastPutMode){if(ie){
	if(Yt("showClone",this),Re.eventCanceled)return
	;Kt.parentNode!=Zt||this.options.group.revertClone?te?Zt.insertBefore(ne,te):Zt.appendChild(ne):Zt.insertBefore(ne,Kt),
	this.options.group.revertClone&&this.animate(Kt,ne),Dt(ne,"display",""),ie=false;}
	}else this._hideClone();}},je&&wt(document,"touchmove",(function(t){
	(Re.active||xe)&&t.cancelable&&t.preventDefault();})),Re.utils={on:wt,off:yt,
	css:Dt,find:jt,is:function(t,e){return !!Lt(t,e,t,false)},extend:function(t,e){
	if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t},throttle:Nt,
	closest:Lt,toggleClass:Ot,clone:Bt,index:qt,nextTick:Ge,cancelNextTick:We,
	detectDirection:$e,getChild:Et,expando:Ht},Re.get=function(t){return t[Ht]
	},Re.mount=function(){
	for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n]
	;e[0].constructor===Array&&(e=e[0]),e.forEach((function(t){
	if(!t.prototype||!t.prototype.constructor)throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t))
	;t.utils&&(Re.utils=st(st({},Re.utils),t.utils)),Wt.mount(t);}));
	},Re.create=function(t,e){return new Re(t,e)},Re.version="1.15.6"
	;var Xe,Ye,Je,Ke,Qe,Ve,Ze=[],tn=false;function en(){Ze.forEach((function(t){
	clearInterval(t.pid);})),Ze=[];}function nn(){clearInterval(Ve);}
	var on=Nt((function(t,e,n,i){if(e.scroll){
	var o,r=(t.touches?t.touches[0]:t).clientX,a=(t.touches?t.touches[0]:t).clientY,s=e.scrollSensitivity,l=e.scrollSpeed,c=Mt(),d=false
	;Ye!==n&&(Ye=n,en(),Xe=e.scroll,o=e.scrollFn,true===Xe&&(Xe=zt(n,true)))
	;var u=0,m=Xe;do{
	var p=m,f=St(p),h=f.top,v=f.bottom,b=f.left,g=f.right,w=f.width,y=f.height,x=void 0,k=void 0,L=p.scrollWidth,_=p.scrollHeight,T=Dt(p),O=p.scrollLeft,D=p.scrollTop
	;p===c?(x=w<L&&("auto"===T.overflowX||"scroll"===T.overflowX||"visible"===T.overflowX),
	k=y<_&&("auto"===T.overflowY||"scroll"===T.overflowY||"visible"===T.overflowY)):(x=w<L&&("auto"===T.overflowX||"scroll"===T.overflowX),
	k=y<_&&("auto"===T.overflowY||"scroll"===T.overflowY))
	;var I=x&&(Math.abs(g-r)<=s&&O+w<L)-(Math.abs(b-r)<=s&&!!O),j=k&&(Math.abs(v-a)<=s&&D+y<_)-(Math.abs(h-a)<=s&&!!D)
	;if(!Ze[u])for(var M=0;M<=u;M++)Ze[M]||(Ze[M]={})
	;Ze[u].vx==I&&Ze[u].vy==j&&Ze[u].el===p||(Ze[u].el=p,
	Ze[u].vx=I,Ze[u].vy=j,clearInterval(Ze[u].pid),
	0==I&&0==j||(d=true,Ze[u].pid=setInterval(function(){
	i&&0===this.layer&&Re.active._onTouchMove(Qe)
	;var e=Ze[this.layer].vy?Ze[this.layer].vy*l:0,n=Ze[this.layer].vx?Ze[this.layer].vx*l:0
	;"function"==typeof o&&"continue"!==o.call(Re.dragged.parentNode[Ht],n,e,t,Qe,Ze[this.layer].el)||Rt(Ze[this.layer].el,n,e);
	}.bind({layer:u}),24))),u++;}while(e.bubbleScroll&&m!==c&&(m=zt(m,false)));tn=d;}
	}),30),rn=function(t){
	var e=t.originalEvent,n=t.putSortable,i=t.dragEl,o=t.activeSortable,r=t.dispatchSortableEvent,a=t.hideGhostForTarget,s=t.unhideGhostForTarget
	;if(e){var l=n||o;a()
	;var c=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e,d=document.elementFromPoint(c.clientX,c.clientY)
	;s(),l&&!l.el.contains(d)&&(r("spill"),this.onSpill({dragEl:i,putSortable:n}));}}
	;function an(){}function sn(){}an.prototype={startIndex:null,
	dragStart:function(t){var e=t.oldDraggableIndex;this.startIndex=e;},
	onSpill:function(t){var e=t.dragEl,n=t.putSortable
	;this.sortable.captureAnimationState(),n&&n.captureAnimationState()
	;var i=Et(this.sortable.el,this.startIndex,this.options)
	;i?this.sortable.el.insertBefore(e,i):this.sortable.el.appendChild(e),
	this.sortable.animateAll(),n&&n.animateAll();},drop:rn},dt(an,{
	pluginName:"revertOnSpill"}),sn.prototype={onSpill:function(t){
	var e=t.dragEl,n=t.putSortable||this.sortable
	;n.captureAnimationState(),e.parentNode&&e.parentNode.removeChild(e),
	n.animateAll();},drop:rn},dt(sn,{pluginName:"removeOnSpill"
	}),Re.mount(new function(){function t(){for(var t in this.defaults={scroll:true,
	forceAutoScrollFallback:false,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:true},
	this)"_"===t.charAt(0)&&"function"==typeof this[t]&&(this[t]=this[t].bind(this));
	}return t.prototype={dragStarted:function(t){var e=t.originalEvent
	;this.sortable.nativeDraggable?wt(document,"dragover",this._handleAutoScroll):this.options.supportPointer?wt(document,"pointermove",this._handleFallbackAutoScroll):e.touches?wt(document,"touchmove",this._handleFallbackAutoScroll):wt(document,"mousemove",this._handleFallbackAutoScroll);
	},dragOverCompleted:function(t){var e=t.originalEvent
	;this.options.dragOverBubble||e.rootEl||this._handleAutoScroll(e);},
	drop:function(){
	this.sortable.nativeDraggable?yt(document,"dragover",this._handleAutoScroll):(yt(document,"pointermove",this._handleFallbackAutoScroll),
	yt(document,"touchmove",this._handleFallbackAutoScroll),
	yt(document,"mousemove",this._handleFallbackAutoScroll)),
	nn(),en(),clearTimeout(_t),_t=void 0;},nulling:function(){
	Qe=Ye=Xe=tn=Ve=Je=Ke=null,Ze.length=0;},_handleFallbackAutoScroll:function(t){
	this._handleAutoScroll(t,true);},_handleAutoScroll:function(t,e){
	var n=this,i=(t.touches?t.touches[0]:t).clientX,o=(t.touches?t.touches[0]:t).clientY,r=document.elementFromPoint(i,o)
	;if(Qe=t,e||this.options.forceAutoScrollFallback||pt||mt||ht){
	on(t,this.options,r,e);var a=zt(r,true)
	;!tn||Ve&&i===Je&&o===Ke||(Ve&&nn(),Ve=setInterval((function(){
	var r=zt(document.elementFromPoint(i,o),true)
	;r!==a&&(a=r,en()),on(t,n.options,r,e);}),10),Je=i,Ke=o);}else {
	if(!this.options.bubbleScroll||zt(r,true)===Mt())return void en()
	;on(t,this.options,zt(r,false),false);}}},dt(t,{pluginName:"scroll",
	initializeByDefault:true})}),Re.mount(sn,an);const ln=t=>{
	const e=document.getElementById(t);e&&(e.innerHTML="",e.appendChild((()=>{
	const t=v({classList:"nst-block"}),e=h("h4",{classList:"nst-block-title",
	innerText:"mug threshold"});return t.appendChild(e),T({elem:t,
	title:"mug threshold"}),t})()),e.appendChild((()=>{const t=v({
	classList:"nst-block"}),e=h("h4",{classList:"nst-block-title",
	innerText:"default outcome"}),n=v({id:"outcome",classList:"nst-outcome",
	onchange:t=>c({outcome:t.target.id})
	}),i=D("leave","outcome"),o=D("mug","outcome"),r=D("hospitalize","outcome"),a={
	id:"nst-hold",checked:l("hold")},s=O(a,"hold","",(t=>c({hold:t.target.checked
	})));return n.appendChild(i),n.appendChild(o),n.appendChild(r),t.appendChild(e),
	t.appendChild(n),t.appendChild(s),t})()),e.appendChild((()=>{
	const t=l("weapon"),e=v({classList:"nst-block"}),n=h("h4",{
	classList:"nst-block-title",innerText:"weapon order"}),i=v({id:"weapon"})
	;Object.keys(t).forEach((t=>{const e=v({id:t,classList:"list-group-item",
	innerText:t});e.setAttribute("data-id",t),i.appendChild(e);})),new Re(i,{
	animation:150,store:{get:()=>{const t=l("weapon"),e=["","","",""]
	;return Object.entries(t).forEach((t=>e[t[1]]=t[0])),e},set:t=>{
	const e=t.toArray(),n=l("weapon");e.forEach((t=>n[t]=e.indexOf(t))),c({weapon:n
	});}}});const o={id:"nst-temp",checked:l("temp")
	},r=O(o,"use temp first","",(t=>c({temp:t.target.checked}))),a={id:"nst-assa",
	checked:l("assaperk")},s=O(a,"assassinate","",(t=>c({assaperk:t.target.checked
	}))),d={id:"nst-execute",checked:l("executeperk")},u=O(d,"execute","",(t=>c({
	executeperk:t.target.checked})))
	;return e.appendChild(n),e.appendChild(i),e.appendChild(r),
	e.appendChild(s),e.appendChild(u),e})()),e.appendChild((()=>{const t=v({
	classList:"nst-block"}),e=h("h4",{classList:"nst-block-title",
	innerText:"weapon reload"}),n=v({id:"reload",classList:"nst-outcome"}),i={
	id:"nst-reloadone",checked:l("reloadone")},o=O(i,"primary","",(t=>c({
	reloadone:t.target.checked}))),r={id:"nst-reloadtwo",checked:l("reloadtwo")
	},a=O(r,"secondary","",(t=>c({reloadtwo:t.target.checked})))
	;return n.appendChild(o),n.appendChild(a),t.appendChild(e),t.appendChild(n),t
	})()));},cn=t=>{const e=document.getElementById(t);if(!e)return;e.innerHTML=""
	;const n=v({id:"nst-export-wrap",classList:"nst-api-wrap"}),i=g({
	id:"nst-export-btn",innerText:"export",classList:"torn-btn m-2",onclick:()=>{
	const t=JSON.stringify(l())
	;o.setAttribute("href",window.URL.createObjectURL(new Blob([t],{
	type:"application/json"
	}))+"#/nst-export"),o.setAttribute("download","nst-export.json"),
	o.classList.remove("hidden");}}),o=x({id:"nst-export-download",
	innerText:"Download"});o.classList.add("hidden","text-sm","text-nstmain","m-2"),
	n.appendChild(i),n.appendChild(o),e.appendChild(n);},dn=t=>{
	const e=document.getElementById(t);if(!e)return;e.innerHTML=""
	;const n=b({}),i=v({id:"nst-import-wrap",classList:"nst-api-wrap"}),o=g({
	id:"nst-import-btn",innerText:"import",classList:"torn-btn m-2",
	onclick:()=>r.click()}),r=L({id:"nst-import-input",type:"file",accept:"json",
	onchange:t=>{const e=new FileReader;e.addEventListener("load",(t=>{var e
	;const i=(t=>{try{return JSON.parse(t)}catch(e){console.error(e);}return null
	})(""+(null==(e=t.target)?void 0:e.result))
	;c(i),Z(),n.classList.remove("hidden"),
	n.classList.add("text-nstgreen"),n.innerHTML="<b>Import Successful</b>";
	})),e.addEventListener("error",(t=>{
	n.classList.remove("hidden"),n.classList.add("text-nstred"),
	n.innerHTML="<b>Import Unsuccessful</b>",console.error(t);
	})),e.readAsText(t.target.files[0]);}})
	;r.classList.add("hidden"),n.classList.add("hidden"),
	i.appendChild(o),i.appendChild(r),i.appendChild(n),e.appendChild(i);},un=t=>{
	const e=document.getElementById(t);if(!e)return;e.innerHTML="";const n={
	company:["employees"].sort(),market:["bazaar"].sort(),torn:["items"].sort(),
	user:["bars","basic","battlestats","bazaar","cooldowns","education","icons","money","networth","newevents","newmessages","notifications","perks","personalstats","profile","refills","timestamp","travel"].sort()
	},i=v({classList:"nst-tos-wrap"}),o=h("h4",{classList:"nst-tos-title",
	innerText:"Terms of Service"});i.appendChild(o),Object.entries({
	"Data Storage":"Only locally","Data Sharing":"Nobody",
	"Purpose of Use":"Optimization / Maintenance but only end user has access",
	"Key Storage & Sharing":"Stored locally but not shared",
	"Key Access Level":"Limited or Custom (see below)"
	}).forEach((([t,e])=>i.appendChild(v({classList:"nst-tos-wrap",
	innerHTML:`<b>${t}</b>: ${e}`}))));const r=h("h4",{classList:"nst-tos-title",
	innerText:"Api usage"})
	;i.appendChild(r),Object.entries(n).forEach((([t,e])=>i.appendChild(v({
	classList:"nst-tos-wrap",innerHTML:`<b>${t}</b>: ${1!==e.length?e.join(", "):e}`
	})))),e.appendChild(i);},mn=t=>{
	const e=document.getElementById("nst-icon"),n=t.querySelector('ul[class^="status-icon"]')
	;if(e||!n)return;const i=w({id:"nst-icon",classList:"nst-icon"})
	;n.insertAdjacentElement("afterbegin",i).addEventListener("click",pn);},pn=()=>{
	var t,e
	;const n=null==document?void 0:document.querySelector(".content-wrapper.spring"),i=null==(t=null==n?void 0:n.style)?void 0:t.display
	;n.style.display="none"===i?"":"none",
	null==(e=null==document?void 0:document.getElementById("nst-menu"))||e.remove(),
	"none"===n.style.display&&fn(n);},fn=t=>{const e=v({id:"nst-menu",
	classList:"nst-menu"}),n=v({id:"nst-menu-wrap",classList:"nst-menu-wrap "
	}),i=v({id:"nst-menu-title",classList:"nst-menu-title"}),o=v({
	id:"nst-menu-body",classList:"nst-menu-body"});i.appendChild(b({
	classList:"nst-logo"})).appendChild(h("b",{innerText:"NST"}))
	;const r=o.appendChild(h("ul",{id:"nst-ul-main",classList:"nst-ul-main"}))
	;n.appendChild(i),
	n.appendChild(o),e.appendChild(n),t.insertAdjacentElement("beforebegin",e),
	vn(r,"tos",un),vn(r,"api",rt)
	;const a=o.querySelector("#nst-api-li"),s=o.querySelector("#nst-api")
	;null==a||a.classList.add("nst-menu-sel"),
	null==s||s.classList.add("nst-menu-active"),
	null==s||s.classList.toggle("hidden"),hn();},hn=()=>{if(!z())return;Z()
	;const t=document.querySelector("#nst-ul-main")
	;vn(t,"tsapi",ot),vn(t,"attack",ln),vn(t,"export",cn),vn(t,"import",dn)
	;const e=l("script"),n=Object.keys(e).sort().reduce(((t,n)=>(t[n]=null==e?void 0:e[n],
	t)),{})
	;Object.values(n).map((t=>t.onpage)).filter((t=>void 0!==t)).filter(((t,e,n)=>n.indexOf(t)==e)).sort().forEach((e=>vn(t,e,gn)));
	},vn=(t,e,n=()=>{})=>{
	const i=null==t?void 0:t.parentElement,o="nst-"+e.toLowerCase(),r=o+"-li",a=w({
	id:r,classList:"nst-menu-page",innerText:e,onclick:bn})
	;i.querySelector("#"+o)||i.querySelector("#"+r)||(t.appendChild(a),
	i.appendChild(v({id:o,classList:"nst-menu-item hidden"})),n(o));},bn=t=>{
	const e=t.target,n=e.id,i=null==e?void 0:e.closest("#nst-menu-body"),o=e,r=null==i?void 0:i.querySelector(".nst-menu-sel"),a=null==i?void 0:i.querySelector(".nst-menu-active"),s=null==i?void 0:i.querySelector("#"+n.replace(/-li/g,""))
	;null==r||r.classList.remove("nst-menu-sel"),
	null==a||a.classList.remove("nst-menu-active"),
	null==a||a.classList.toggle("hidden"),
	null==o||o.classList.add("nst-menu-sel"),null==s||s.classList.add("nst-menu-active"),
	null==s||s.classList.toggle("hidden");},gn=t=>{const e=document.getElementById(t)
	;if(!e)return;e.innerHTML=""
	;const n=t.replace(/nst-/g,""),i=l("script"),o=Object.keys(i).sort().reduce(((t,e)=>{
	var o
	;return (null==(o=null==i?void 0:i[e])?void 0:o.onpage)===n&&(t[e]=null==i?void 0:i[e]),
	t}),{}),r=v({classList:"nst-script-block"})
	;Object.entries(o).forEach((([t,e])=>{const n=null==e?void 0:e.name,i=f(t),o={
	id:"nst-"+i,value:i,checked:(null==e?void 0:e.enabled)??false
	},a=O(o,n,e.description.toLowerCase(),(t=>{const e=t.target,n=l("script")
	;n[e.value].enabled=e.checked,c({script:n});}));r.appendChild(a);
	})),e.appendChild(r);},wn=(t,e,n=false)=>{
	const i=null==document?void 0:document.querySelector(e)
	;if(i&&(console.log("noobs "+e),t(i),!n))return;let o=false
	;const r=new MutationObserver((i=>{i.forEach((i=>{var a;if(o)return
	;const s=Array.from(i.addedNodes);for(const l of s){
	if(!(null==l?void 0:l.querySelector))continue
	;const i=null==l?void 0:l.querySelector(e),s=null==(a=null==l?void 0:l.parentElement)?void 0:a.querySelector(e),c=i||s||false
	;if(c&&(console.log("obs "+e),t(c),!n)){o=true,r.disconnect();break}}}));}))
	;r.observe(document.documentElement,{childList:true,subtree:true});},yn={add:()=>({
	closeSel:"li",mvSel:".info-wrap"}),manage:()=>({closeSel:'[class^="item"]',
	mvSel:'[class^="rrp"]'})},xn=()=>{document.addEventListener("dblclick",(t=>{
	const e=null==t?void 0:t.target
	;console.log(e),"INPUT"===(null==e?void 0:e.tagName)&&(e.className.includes("buyAmountInput")&&(t=>{
	var e,n,i
	;const o=null==(e=null==t?void 0:t.closest("div[class^=buyMenu]"))?void 0:e.querySelector("span[class^=amount]"),r=parseInt((null==(i=null==(n=null==o?void 0:o.innerText)?void 0:n.match(/x(\d+)/))?void 0:i[1])??"1",10)
	;((t,e)=>{var n,i;const o=new Event("input",{bubbles:true
	}),r=null==(n=Object.getOwnPropertyDescriptor(t,"value"))?void 0:n.set,a=null==(i=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t),"value"))?void 0:i.set
	;r&&r!==a?a.call(t,e):r.call(t,e),t.dispatchEvent(o),t.select();
	})(t,Math.min(r,1e4).toString());
	})(e),e.className.includes("input-money")&&(async t=>{var e,n;const i=r()
	;console.log(i);const{closeSel:o,mvSel:a}=null==(e=yn[i])?void 0:e.call(yn)
	;console.log(o,a);const s=t.closest(o);if(!s)return
	;if(s.classList.contains("disabled"))return;const l=s.querySelector("img")
	;if(!(null==(n=null==l?void 0:l.src.match(/\d+/))?void 0:n[0]))return
	;const c=s.querySelector(a),d=parseInt(c.innerText.replace(/\D/g,"")||"0",10)
	;P(t,""+(d-1));})(e),"clear-all"==e.className&&(t=>{var e,n
	;const i=t.closest("li"),o=null==i?void 0:i.querySelector("div.name-wrap"),r=parseInt((null==(n=null==(e=null==o?void 0:o.innerText)?void 0:e.match(/x(\d+)/))?void 0:n[1])??"1",10)
	;P(t,r.toString());})(e),e.className.includes("removeAmount")&&(t=>{var e,n
	;const i=t.closest("div[class^=row]"),o=null==i?void 0:i.querySelector("div[class^=desc]"),r=parseInt((null==(n=null==(e=null==o?void 0:o.innerText)?void 0:e.match(/x(\d+)/))?void 0:n[1])??"1",10)
	;P(t,r.toString());})(e));}));},kn=async()=>{var t;const e={section:"user",
	select:"bazaar",objID:n("userId")??""},i=await E(e)
	;if(!(null==i?void 0:i.status))return
	;const{bazaar:o}=i,r=o.reduce(((t,e)=>t+ +(null==e?void 0:e.price)*+e.quantity),0),a=o.reduce(((t,e)=>t+ +(null==e?void 0:e.market_price)*+e.quantity),0),s=v({
	classList:"nst-trade-value",innerText:`Total: $${m(r)} - MV: $${m(a)}`})
	;null==(t=null==document?void 0:document.querySelector("#bazaarRoot .wrapper"))||t.insertAdjacentElement("afterend",s);
	},Ln=t=>{const e=t.target;c({[e.value]:e.checked})
	;const n=document.querySelector("#map .leaflet-marker-pane"),i=Array.from(n.querySelectorAll('[class*="torn-item"]'))
	;0!==i.length&&i.forEach((t=>{
	e.checked?t.classList.remove("nst-city-item"):t.classList.add("nst-city-item");
	}));},_n=async t=>{const e=Array.from(t.querySelectorAll('[class*="torn-item"]'))
	;if(0===e.length)return;const n=S({title:"City Finds",
	element:t.closest("#tab-menu")}),i="Hide Items",o=f(i),r={id:"nst-"+o,
	type:"checkbox",value:o,checked:l(o)??false},a=l(o)??false,s=await E({section:"torn",
	select:"items"});if(!(null==s?void 0:s.status))return
	;const c=null==s?void 0:s.items,d={};e.forEach((t=>{var e,n,i,o
	;const r=t.getAttribute("src"),s=u(r);d[s]={name:null==(e=c[s])?void 0:e.name,
	type:null==(n=c[s])?void 0:n.type,value:+(null==(i=c[s])?void 0:i.market_value),
	count:s in d?+(null==(o=d[s])?void 0:o.count)+1:1
	},t.setAttribute("src",r.replace("small","large")),
	a||t.classList.add("nst-city-item");}))
	;const p=Object.values(d).reduce(((t,e)=>t+e.value*e.count),0),h=Object.values(d).map((t=>`${t.name} x${t.count}`)).join(", ").replace(/, $/,"."),b=v({
	classList:"nst-box-column"});b.appendChild(O(r,i,"",Ln)),b.appendChild(v({
	classList:"nst-findsworth",innerText:"Worth: $"+m(p)})),b.appendChild(v({
	classList:"nst-findslist",innerText:""+h})),n.appendChild(b);},Tn=()=>{
	document.addEventListener("dblclick",(t=>{const e=null==t?void 0:t.target
	;"INPUT"===(null==e?void 0:e.tagName)&&"text"===(null==e?void 0:e.type)&&e.className.includes("input-money")&&(t=>{
	var e;if(!t.closest("li"))return
	;const n=null==(e=null==t?void 0:t.closest("li"))?void 0:e.querySelector("div.sold-daily").innerText,i=u(n).toString()
	;P(t,i);})(e);}));},On=()=>{document.addEventListener("dblclick",(t=>{var e
	;const n=null==t?void 0:t.target;if("INPUT"!==(null==n?void 0:n.tagName))return
	;const i=null==(e=n.parentElement)?void 0:e.parentElement,o=u(null==i?void 0:i.querySelector(".instock").innerText)
	;n.value=""+Math.min(o,100);}));},Dn=t=>{
	0!==r().match(/manage/g).length&&t&&Array.from(t.children).forEach((t=>{
	const e=t.getAttribute("itemid"),n=t.querySelector(".name .desc")
	;n&&e&&n.insertAdjacentElement("afterBegin",b({classList:"text-nstmain",
	innerText:"ID: "+e}));}));},In=t=>{
	Array.from(null==t?void 0:t.querySelectorAll("ul[class*='slotItems']")).forEach((t=>{
	t.addEventListener("click",(()=>{var e,n,i,o
	;(null==(o=null==(i=null==(n=null==(e=null==t?void 0:t.parentNode)?void 0:e.parentNode)?void 0:n.childNodes[0])?void 0:i.childNodes[1])?void 0:o.childNodes[1]).click();
	}));}));},jn=t=>{if(!t)return
	;const e=t.getElementsByTagName("ul")[0],n=Array.from(e.children),i={Strength:0,
	Defense:0,Speed:0,Dexterity:0,Total:0};for(const r of n){
	const t=r.getAttribute("aria-label");if(!t)return;const e=t.split(" ")
	;if(e.length>2){
	const t=e[0].replace(/:/g,""),n=u(e[1]),o=e[2].replace(/%/g,""),r=o.charAt(0),a=u(o),s="+"==r?a/100+1:1-a/100
	;i[t]=Math.round(n*s),i.Total+=Math.round(n*s);}}
	e.lastElementChild.removeAttribute("class");const o=v({
	classList:"nst-box-header"});o.appendChild(b({classList:"nst-box-title"
	})).appendChild(b({id:"nst-box-title",innerText:"Effective Stats"
	})),e.appendChild(o),Object.keys(i).forEach((t=>{const n=w({tabIndex:0,
	ariaLabel:`${t} ${m(i[t])}`}),o=b({classList:"divider",
	innerHTML:`<span>${t}</span>`}),r=b({classList:"desc",innerText:` ${m(i[t])} `,
	style:"margin-left: 3px"});n.appendChild(o),n.appendChild(r),e.appendChild(n);
	})),e.lastElementChild.classList.add("last");},Mn=(t,e)=>{var n
	;if(!(null==t?void 0:t.querySelector))return
	;if(!(null==t?void 0:t.querySelector("ul.employee-list")))return
	;const i=null==(n=null==t?void 0:t.querySelector("ul.employee-list"))?void 0:n.children,o=Array.from(i)
	;if(0===o.length)return;const r=a()-86400,s=a()-172800;o.forEach((t=>{var n,i
	;const o=null==t?void 0:t.getAttribute("data-user");if(!o)return
	;const a=null==(i=null==(n=e[o])?void 0:n.last_action)?void 0:i.timestamp,l=null==t?void 0:t.querySelector(".employee")
	;if(!l)return;const c=a<s?"bg-nstred":a<r?"bg-nstyellow":""
	;c&&l.classList.add(c);}));},Sn=async t=>{if(!t)return;const e=await E({
	section:"company",select:"employees"});if(!(null==e?void 0:e.status))return
	;const{company_employees:n}=e;Mn(t,n),new MutationObserver((t=>{t.forEach((t=>{
	Array.from(t.addedNodes).forEach((t=>Mn(t,n)));}));})).observe(t,{childList:true,
	subtree:true});},Pn=t=>{const{step:e,action:n,confirm:i}=B(t)
	;return F("actionForm"!==e||"equip"!==n||1===i?{...B(t)}:{...B(t),confirm:1})
	},En=t=>{let e=0;t.addEventListener("click",(()=>{if(1!==e++)return
	;e=0,document.querySelector('.deposit-box input[value="DEPOSIT"], .deposit button.torn-btn, #armoury-donate .cash button').click()
	;const t=document.querySelector("#armoury-donate .cash-confirm .yes")
	;t&&t.click();}));},$n=t=>{
	const e=document.querySelector(".deposit-box .input-money-symbol, .deposit .input-money-symbol")
	;e&&En(e),new MutationObserver((t=>{t.forEach((t=>{
	Array.from(t.addedNodes).forEach((t=>{
	const e=t.querySelector&&t.querySelector(".deposit-box .input-money-symbol, .deposit .input-money-symbol, .donate .input-money-symbol")
	;e&&En(e);}));}));})).observe(t,{childList:true,subtree:true});},qn=t=>{
	t.stopPropagation()
	;const n=t.target.closest("#nst-quick-use").parentElement.getAttribute("data-itemID")
	;if(!n)return;const i=l(Q);Object.keys(i).includes(n)&&(async t=>{
	const n=document.getElementById("nst-item-resp");if(n){
	for(;n.lastChild;)n.removeChild(n.lastChild);(async(t,n)=>{
	const{id:i}=t,o="energy"===i?{step:"armouryRefillEnergy"}:{step:"useItem",
	itemID:i,fac:"1"
	},r="energy"===i?"https://www.torn.com/factions.php?rfcv="+e():"https://www.torn.com/item.php?rfcv="+e(),a={
	method:"POST",headers:{"x-requested-with":"XMLHttpRequest"},
	body:new URLSearchParams(o)},s=await(await fetch(r,{...a
	})).json(),l=s.links??{},c=(null==s?void 0:s.text)??(null==s?void 0:s.message)??{},d=v({})
	;d.appendChild(y({innerHTML:c}));const u=y({});Object.values(l).forEach((t=>{
	const e=x({classList:"t-blue h m-left10 "+t.class,href:t.url,innerText:t.title})
	;t.attr.split(/\s+/).forEach((t=>{
	const n=t.split("=")[0].toString(),i=t.split("=")[1].toString()
	;e.setAttribute(n,i);})),u.appendChild(e);
	})),d.appendChild(u),n.appendChild(d),n.classList.remove("nstGreen"),
	n.classList.remove("nstBold");const m=n.querySelector(".counter-wrap")
	;if(!m)return
	;const p=1e3*+(m.getAttribute("data-time")||0),f=Math.floor(p/864e5),h=Math.floor(p%864e5/36e5)+24*f,b=Math.floor(p%36e5/6e4),g=Math.floor(p%6e4/1e3)
	;m.innerText=`${h}:${b}:${g}`;})(t,n),n.classList.remove("hidden");}})(i[n]);
	},An=t=>{t.stopPropagation(),t.preventDefault()
	;const e=t.target.closest("#nst-quick-use").parentElement.getAttribute("data-itemID")
	;if(!e)return;const n=l(Q);Object.keys(n).includes(e)&&(delete n[e],c({[Q]:n
	}),zn());},zn=()=>{const t=document.getElementById("nst-"+Q);if(t){
	for(;t.lastChild;)t.removeChild(t.lastChild)
	;Object.values(l(Q)).forEach((e=>((t,e)=>{
	const{id:n,name:i,quantity:o}=t,r=`/images/items/${n}/medium.png`,a=v({
	classList:"nst-box-btn-div"})
	;a.setAttribute("data-itemID",n),a.setAttribute("data-qty",o);const s=g({
	id:"nst-quick-use",classList:"nst-box-button",onclick:qn
	}),l="energy"===i?h("i",{classList:"currency-points"}):k({src:r,alt:i,
	classList:"nst-box-img"}),c=b({id:"nst-quick-name",innerText:i}),d=b({
	id:"nst-quick-close",classList:"nst-box-close",innerText:"✕",onclick:An})
	;s.appendChild(l),
	s.appendChild(c),s.appendChild(d),a.appendChild(s),e.appendChild(a);
	})(e,t))),new Re(t,{animation:150,dataIdAttr:"data-itemid",store:{get:()=>{
	const t=l(Q)
	;return Object.entries(t).sort(((t,e)=>t[1].order-e[1].order)).map((t=>t[0]))},
	set:t=>{const e=t.toArray(),n=l(Q);e.forEach((t=>n[t].order=e.indexOf(t))),c({
	[Q]:n});}}});}},Cn=t=>{var e,n,i;t.stopPropagation(),t.preventDefault()
	;const{target:o}=t,r=null==o?void 0:o.closest(".name"),a=null==(e=null==r?void 0:r.closest("li"))?void 0:e.querySelector("img"),s=(null==r?void 0:r.innerText.match(/Points/))?"energy":null==r?void 0:r.innerText.replace(/ x\d+$/,"").replace(/[ ]*Blood Bag[ :]*/,"").replace(/[ ]*Bottle of[ :]*/,"").replace(/[ ]*First Aid[ :]*/,"").replace(/[ ]*Lawyer's Business Card[ :]*/,"LBC").replace(/[ ]*Can of[ :]*/,""),d="energy"===s?"energy":u(a.getAttribute("src")).toString()
	;if(!d)return;const m=l(Q);if(Object.keys(m).includes(d))return
	;const p=0===(null==(n=Object.values(m))?void 0:n.length)?0:+(null==(i=Object.values(m).reduce(((t,e)=>(null==t?void 0:t.order)>(null==e?void 0:e.order)?t:e)))?void 0:i.order)
	;m[d]={id:d,order:p+1,name:s},c({[Q]:m}),zn();},Nn={box:t=>{var e;const n=S({
	title:K,element:t});null==(e=null==n?void 0:n.parentElement)||e.appendChild(v({
	id:"nst-item-resp",classList:"nst-box-row hidden"})),zn();},item:t=>{
	Array.from(t.querySelectorAll("div.name")).forEach((t=>t.addEventListener("dblclick",Cn)));
	},nopager:()=>{}},Rn=t=>{new MutationObserver((t=>{t.forEach((t=>{
	const e=Array.from(t.addedNodes);(null==e?void 0:e.length)>0&&e.forEach((t=>{
	var e,n
	;const i="faction-armoury-tabs"===(null==t?void 0:t.id),o=RegExp("armoury-(medical|drugs|boosters|points)","g"),r=(null==(n=null==(e=null==t?void 0:t.parentElement)?void 0:e.id)?void 0:n.match(o))&&"UL"===t.tagName&&t.classList.contains("item-list")
	;Nn[i?"box":r?"item":"nopager"](t);}));}));})).observe(t,{childList:true,subtree:true});
	},Bn=t=>{
	document.getElementById("skip-to-content").innerText=null==t?void 0:t.innerText;
	},Fn=t=>{var e,n;if(!t)return
	;const i=null==t?void 0:t.parentElement,o=l("userdata"),r=u(null==(e=null==o?void 0:o.networth)?void 0:e.total),a=u(null==(n=null==o?void 0:o.personalstats)?void 0:n.networth),s=Math.round(r-a),c=s>0?"text-nstgreen":s<0?"text-nstred":"",d=`<b class='${c}'>$${m(s)}</b>`,p=w({
	classList:"last",tabIndex:0,ariaLabel:"Live NW: "+m(r)}),f=b({
	classList:"divider",innerHTML:"<span>Live Networth</span>"}),v=b({
	classList:`desc ${c} font-bold`,innerText:` $${m(r)} `,
	style:"margin-left: 3px; margin-right: 3px;"}),g=h("i",{
	classList:"networth-info-icon",title:d,style:"margin-left: 6px;"})
	;p.appendChild(f),
	p.appendChild(v).insertAdjacentElement("beforeend",g),i.lastElementChild.removeAttribute("class"),
	i.appendChild(p);},Hn=t=>{var e,n;const{step:i}=B(t);if("buyItem"!==i)return F({
	...B(t)});const o={market:t=>{
	const e=t.replace("step=buyItem","step=buyItemConfirm");return F({...B(e),item:0
	})},shop:t=>{const e=t.replace("step=buyItem","step=buyItemConfirm");return F({
	...B(e),item:0})},noloc:t=>F({...B(t)})}
	;return (o[null==(n=null==(e=r())?void 0:e.match(/(shop|market)/g))?void 0:n[0]]??o.noloc)(t)
	},Un=t=>{new MutationObserver((e=>{e.forEach((e=>{var n,i
	;const o=null==(i=null==(n=r())?void 0:n.match(/(shop|market)/g))?void 0:i[0],a=".items > li.show-item-info"
	;Array.from(e.addedNodes).forEach((e=>{if(e.querySelector&&e.querySelector(a)){
	if("shop"!==o)return;Array.from(t.querySelectorAll(a)).forEach((t=>{var e,n,i,o
	;t.querySelector(".buy .buy-link").dataset.price=null==(o=null==(i=null==(n=null==(e=null==t?void 0:t.querySelector(".cost"))?void 0:e.innerText)?void 0:n.replace(",",""))?void 0:i.match(/\d+/))?void 0:o[0];
	}));}}));}));})).observe(t,{childList:true,subtree:true});},Gn=()=>{
	document.addEventListener("dblclick",(t=>{var e,n,i,o
	;const r=null==t?void 0:t.target;if("INPUT"!==(null==r?void 0:r.tagName))return
	;const a=null==(i=null==(n=null==(e=null==r?void 0:r.parentElement)?void 0:e.parentElement)?void 0:n.parentElement)?void 0:i.parentElement,s=u(null==(o=null==document?void 0:document.querySelector(".travel-agency-market .availableItemsAmount"))?void 0:o.getAttribute("value")),l=u(document.getElementById("user-money").innerText),c=u(null==a?void 0:a.querySelector(".cost .c-price").innerText),d=u(null==a?void 0:a.querySelector(".stock .stck-amount").innerText),m=l/c>=s?s:Math.trunc(l/c),p=Math.min(m,d).toString()
	;P(r,p);}));},Wn={a_good_day_to_get_hard:{task:"Achieve a killstreak of 3 - 10."},
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
	task:"Injure (P)'s both arms."},wrath_of_duke:{task:"Defeat 4 (P)."}},Xn=t=>{
	Array.from(t.querySelectorAll(".giver-cont-wrap > div[id^=mission]:not(.nst-edit)")).forEach((t=>{
	var e,n,i;if(!(null==t?void 0:t.querySelector))return
	;const o=(null==(e=null==t?void 0:t.querySelector(".title-black"))?void 0:e.childNodes[0].textContent.replace(/\n/g,"").trim()).toLowerCase().replaceAll(/[ -]/g,"_").replaceAll(/[:!,]/g,""),r=o in Wn?null==(n=null==Wn?void 0:Wn[o])?void 0:n.task:"mission not found",a=b({
	innerHTML:"<br/><br/><b>todo:</b> "+r,classList:"text-nstmain"})
	;null==(i=t.querySelector(".max-height-fix"))||i.appendChild(a),
	t.classList.add("nst-edit");}));},Yn=t=>{
	const e=null==t?void 0:t.querySelector(".total-price"),n=null==t?void 0:t.querySelector(".action")
	;u(null==e?void 0:e.innerText)*W>=X&&n.classList.add("text-black","bg-nstmain");
	},Jn=t=>{new MutationObserver((t=>{t.forEach((t=>{
	Array.from(t.addedNodes).forEach((t=>{
	const e="LI"===(null==t?void 0:t.tagName),n=null==t?void 0:t.firstElementChild
	;e&&n&&Yn(n);}));}));})).observe(t,{childList:true,subtree:true
	}),Array.from(document.querySelectorAll(".users-point-sell > li")).forEach((t=>Yn(null==t?void 0:t.firstElementChild)));
	},Kn=t=>{var e,n,i;if(t.classList.contains("yes"))return;t.classList.add("yes")
	;const o=null==(i=null==(n=null==(e=null==t?void 0:t.getAttribute("href"))?void 0:e.replace(/=buy/g,"=buy1"))?void 0:n.replace(/=remove/g,"=remove1"))?void 0:i.replace(/&points=\d+$/g,"")
	;t.setAttribute("href",o);},Qn=t=>{new MutationObserver((t=>{t.forEach((t=>{
	Array.from(t.addedNodes).forEach((t=>{
	const e="LI"===(null==t?void 0:t.tagName),n=null==t?void 0:t.firstElementChild
	;e&&n&&Kn(n);}));}));})).observe(t,{childList:true,subtree:true
	}),Array.from(document.querySelectorAll(".users-point-sell > li")).forEach((t=>Kn(null==t?void 0:t.firstElementChild)));
	},Vn=["Primary","Secondary","Melee","Temporary"],Zn=["Medical","Drug","Energy Drink","Alcohol","Candy","Booster","Supply Pack",...Vn],ti=t=>{
	t.stopPropagation()
	;const n=t.target.closest("#nst-quick-use").parentElement.getAttribute("data-itemID")
	;if(!n)return;const i=l(J);Object.keys(i).includes(n)&&(async t=>{
	const{category:n}=t,i=document.getElementById("nst-item-resp");if(i){
	for(;i.lastChild;)i.removeChild(i.lastChild);Vn.includes(n)?await(async(t,n)=>{
	const{id:i,strangeID:o}=t,r={step:"actionForm",item_id:i,type:5,action:"equip",
	item:i,id:o,confirm:1};if(!r)return
	;const a="https://www.torn.com/item.php?rfcv="+e(),s={method:"POST",headers:{
	"x-requested-with":"XMLHttpRequest"},body:new URLSearchParams(r)
	},l=await(await fetch(a,{...s})).text()
	;n.innerHTML=l,(null==l?void 0:l.match(/ equipped/))?n.classList.add("text-nstgreen"):n.classList.remove("text-nstgreen");
	})(t,i):await(async(t,n)=>{const{id:i}=t,o={step:"useItem",itemID:i,item:i}
	;if(!o)return;const r="https://www.torn.com/item.php?rfcv="+e(),a={
	method:"POST",headers:{"x-requested-with":"XMLHttpRequest"},
	body:new URLSearchParams(o)},s=await(await fetch(r,{...a
	})).json(),l=s.links??{},c=s.text??{},d=v({});d.appendChild(y({innerHTML:c}))
	;const u=y({});Object.values(l).forEach((t=>{const e=x({
	classList:t.class+" t-blue h m-left10",href:t.url,innerText:t.title})
	;t.attr.split(/\s+/).forEach((t=>{
	const n=t.split("=")[0].toString(),i=t.split("=")[1].toString()
	;e.setAttribute(n,i);})),u.appendChild(e);
	})),d.appendChild(u),n.appendChild(d),n.classList.remove("nstGreen"),
	n.classList.remove("nstBold");const m=n.querySelector(".counter-wrap")
	;if(!m)return
	;const p=1e3*+(m.getAttribute("data-time")||0),f=Math.floor(p/864e5),h=Math.floor(p%864e5/36e5)+24*f,b=Math.floor(p%36e5/6e4),g=Math.floor(p%6e4/1e3)
	;m.innerText=`${h}:${b}:${g}`;})(t,i),i.classList.remove("hidden");}})(i[n]);
	},ei=t=>{t.stopPropagation(),t.preventDefault()
	;const e=t.target.closest("#nst-quick-use").parentElement.getAttribute("data-itemID")
	;if(!e)return;const n=l(J);Object.keys(n).includes(e)&&(delete n[e],c({[J]:n
	}),ni());},ni=()=>{const t=document.getElementById("nst-"+J);if(t){
	for(;t.lastChild;)t.removeChild(t.lastChild)
	;Object.values(l(J)).forEach((e=>((t,e)=>{
	const{id:n,name:i,quantity:o}=t,r=`/images/items/${n}/medium.png`,a=v({
	classList:"nst-box-btn-div"})
	;a.setAttribute("data-itemID",n),a.setAttribute("data-qty",o);const s=g({
	id:"nst-quick-use",classList:"nst-box-button",onclick:ti}),l=k({src:r,alt:i,
	classList:"nst-box-img"}),c=b({id:"nst-quick-name",innerText:i}),d=b({
	id:"nst-quick-close",classList:"nst-box-close",innerText:"✕",onclick:ei})
	;s.appendChild(l),
	s.appendChild(c),s.appendChild(d),a.appendChild(s),e.appendChild(a);
	})(e,t))),new Re(t,{animation:150,dataIdAttr:"data-itemid",store:{get:()=>{
	const t=l(J)
	;return Object.entries(t).sort(((t,e)=>t[1].order-e[1].order)).map((t=>t[0]))},
	set:t=>{const e=t.toArray(),n=l(J);e.forEach((t=>n[t].order=e.indexOf(t))),c({
	[J]:n});}}});}},ii=t=>{var e,n,i,o,r,a,s,d,u,m,p
	;t.stopPropagation(),t.preventDefault();const f=t.target
	;if(!/name-wrap/.test(f.className))return
	;const h=f.closest("li"),v=null==(e=null==h?void 0:h.dataset)?void 0:e.item,b=null==(n=null==h?void 0:h.dataset)?void 0:n.qty,g=(null==(i=null==h?void 0:h.dataset)?void 0:i.category)??"",w=(null==(o=null==h?void 0:h.querySelector('.cont-wrap ul [class*="equipped"]'))?void 0:o.getAttribute("data-id"))??"",y=null==h?void 0:h.querySelector(".title-wrap .name-wrap .name"),x=null==(u=null==(d=null==(s=null==(a=null==(r=null==y?void 0:y.innerText)?void 0:r.replace(/[ ]*Blood Bag[ :]*/,""))?void 0:a.replace(/[ ]*Bottle of[ :]*/,""))?void 0:s.replace(/[ ]*First Aid[ :]*/,""))?void 0:d.replace(/[ ]*Lawyer's Business Card[ :]*/,"LBC"))?void 0:u.replace(/[ ]*Can of[ :]*/,"")
	;if(!(h&&v&&g&&Zn.includes(g)))return;const k=l(J)
	;if(Object.keys(k).includes(v))return
	;const L=0===(null==(m=Object.values(k))?void 0:m.length)?0:+(null==(p=Object.values(k).reduce(((t,e)=>(null==t?void 0:t.order)>(null==e?void 0:e.order)?t:e)))?void 0:p.order)
	;k[v]={id:v,order:L+1,name:x,quantity:b,category:g,strangeID:w},c({[J]:k}),ni();
	},oi=t=>{var e
	;const n=null==t?void 0:t.parentElement,i=null==n?void 0:n.querySelector("div.equipped-items-wrap"),o=S({
	title:Y,element:i});null==(e=null==o?void 0:o.parentElement)||e.appendChild(v({
	id:"nst-item-resp",classList:"nst-box-row hidden"
	})),ni(),new MutationObserver((t=>{t.forEach((t=>{var e
	;const n=t.target,i=Array.from(t.addedNodes)
	;(null==i?void 0:i.length)>0&&"UL"===(null==n?void 0:n.nodeName)&&"category-wrap"==(null==(e=null==n?void 0:n.parentElement)?void 0:e.id)&&null==(null==t?void 0:t.previousSibling)&&i.forEach((t=>{
	var e
	;(null==(e=null==t?void 0:t.dataset)?void 0:e.item)&&t.addEventListener("dblclick",ii);
	}));}));})).observe(t,{childList:true,subtree:true});},ri=(t,e)=>{
	const{item:n,selector:i,reg:o}=e,r=l("quick"+n)??false,a=(null==t?void 0:t.parentElement).querySelector("a."+i),s=null==a?void 0:a.getAttribute("href")
	;if(!a||!s)return
	;const c=RegExp(o+"$","g"),d=RegExp(o+"1$","g"),u=r?s.replace(c,o+"1"):s.replace(d,o)
	;a.setAttribute("href",u);},ai=t=>{var e
	;const n=+(l("jailscore")??"0"),i=null==t?void 0:t.parentElement,o=t.querySelector("span.time").innerText.split(" ").reduce(((t,e)=>t+(/h/.test(e)?60*+e.replace(/h/g,""):/m/.test(e)?+e.replace(/m/g,""):0)),0),r=u(null==(e=t.querySelector("span.level").innerText.match(/\d+/g))?void 0:e.join())*o
	;t.setAttribute("title","score: "+m(r));const a=r>n&&0!==n
	;i.style.display=a?"none":"",ri(t,{item:"bail",selector:"bye",reg:"buy"}),ri(t,{
	item:"bust",selector:"bust",reg:"breakout"});},si=t=>{const e=document,n=t.target
	;c({[n.value]:n.checked});const i=e.querySelectorAll("span.info-wrap")
	;Array.from(i).forEach((t=>ai(t)));},li=t=>{(t=>{const e=S({title:"Quick Jail",
	element:null==t?void 0:t.parentElement}),n=v({classList:"nst-box-column"}),i=v({
	classList:"nst-box-column"});e.appendChild(n),e.appendChild(i),T({elem:n,
	title:"Jail Score",cback:()=>{const e=t.querySelectorAll("span.info-wrap")
	;Array.from(e).forEach((t=>ai(t)));}});const o="Quick Bust",r=f(o),a={
	id:"nst-"+r,type:"checkbox",value:r,checked:l(r)??false}
	;i.appendChild(O(a,o,"",si));const s="Quick Bail",c=f(s),d={id:"nst-"+c,
	type:"checkbox",value:c,checked:l(c)??false};i.appendChild(O(d,s,"",si));
	})(t),new MutationObserver((t=>{t.forEach((t=>{
	Array.from(t.addedNodes).forEach((t=>{if("LI"!==t.tagName)return
	;const e=t.querySelector("span.info-wrap");e&&ai(e);}));}));})).observe(t,{
	childList:true,subtree:true});},ci=t=>{t=t.parentElement
	;const{refills:{energy_refill_used:e,nerve_refill_used:n}}=l("userdata")
	;Object.values({energy:{name:"energy",
	selector:"[class*='bar'][class*='energy']",link:"https://www.torn.com/gym.php",
	refillUsed:e},nerve:{name:"nerve",selector:"[class*='bar'][class*='nerve']",
	link:"https://www.torn.com/crimes.php",refillUsed:n}}).forEach((e=>{var n
	;const{name:i,selector:o,link:r,refillUsed:a}=e,s=o+' p[class^="bar-name"]',l=null==t?void 0:t.querySelector(s),c=null==(n=null==l?void 0:l.parentElement)?void 0:n.parentElement
	;null==c||c.removeAttribute("href"),
	null==c||c.addEventListener("click",(()=>window.open(r,"_blank")))
	;const d="energy"===i?"text-nstgreen":"nerve"===i?"text-nstred":""
	;a||null==l||l.classList.add(d);}));},di=t=>null==t?void 0:t.remove(),ui=t=>{
	const e=t.getAttribute&&"true"==t.getAttribute("contenteditable")
	;t.textContent&&!e&&(t.textContent=t.textContent.replaceAll("Natural Selection","NS"));
	},mi=t=>{3==t.nodeType&&ui(t);let e=null==t?void 0:t.firstChild
	;for(;e;)3==e.nodeType?ui(e):mi(e),e=e.nextSibling;},pi=t=>{mi(t)
	;const e=document.querySelector("#map");e&&new MutationObserver((t=>{
	t.forEach((t=>{
	Array.from(t.addedNodes).forEach((t=>mi(t))),"attributes"==t.type&&mi(t.target);
	}));})).observe(e,{childList:true,subtree:true,attributes:true});},fi={amarket:()=>{
	new MutationObserver((t=>{t.forEach((t=>{Array.from(t.addedNodes).forEach((t=>{
	var e,n
	;if("LI"!==(null==t?void 0:t.tagName)||!(null==(n=null==(e=null==t?void 0:t.firstElementChild)?void 0:e.classList)?void 0:n.contains("item-cont-wrap")))return
	;const i=Array.from(t.querySelectorAll(".bonus-attachment-icons"))
	;if(0===i.length)return;let o="";i.forEach((t=>{
	o+=vi(null==t?void 0:t.title),1!==i.length&&(o+="<br />");
	})),t.querySelector("p.t-gray-6").innerHTML=o;}));}));
	})).observe(document.documentElement,{childList:true,subtree:true});},bazaar:()=>{
	new MutationObserver((t=>{t.forEach((t=>{Array.from(t.addedNodes).forEach((t=>{
	if(!/(itemsContainner|row)/.test(t.className)||t.querySelector(".nst-edit"))return
	;const e=Array.from(t.querySelectorAll('[class*="iconBonuses"] > div > i'))
	;0!==e.length&&e.forEach((t=>{var e,n,i
	;const o="radiation"===t.className.split("-")[3]?"radiation":t.className.split("-")[2],r="full"===o?"EOD":"negative"===o?"Delta":"sentinel"===o?"defense":"vanguard"===o?"dex":o,a=null==(e=null==t?void 0:t.parentElement)?void 0:e.parentElement
	;null==a||a.setAttribute("style","float:left;right:0px;top:3px;padding-left:5px;display:inline-block;white-space:nowrap;"),
	a.classList.add("nst-edit"),
	null==(n=null==t?void 0:t.parentElement)||n.appendChild(b({innerText:r
	})),null==(i=null==t?void 0:t.parentElement)||i.appendChild(h("br",{}));}));}));}));
	})).observe(document.documentElement,{childList:true,subtree:true});},
	displaycase:t=>{
	const e=Array.from(t.querySelectorAll(".bonus-attachment-icons"))
	;0!==e.length&&e.forEach((t=>{const e=vi(null==t?void 0:t.title)
	;t.setAttribute("style","float:left;white-space: nowrap;right: 0px;top:-40px"),
	t.appendChild(Object.assign(document.createElement("span"),{innerText:e
	})),null==t||t.insertAdjacentElement("afterend",document.createElement("br"));}));
	},item:()=>{new MutationObserver((t=>{t.forEach((t=>{var e
	;const n=t.target,i=Array.from(t.addedNodes)
	;(null==i?void 0:i.length)>0&&"UL"===(null==n?void 0:n.nodeName)&&"category-wrap"==(null==(e=null==n?void 0:n.parentElement)?void 0:e.id)&&null==(null==t?void 0:t.previousSibling)&&i.forEach((t=>{
	if(!t.querySelector||!t.querySelector(".bonuses.left"))return
	;const e=null==t?void 0:t.querySelector(".name-wrap")
	;if(/nst-rw-show/.test(e.className))return
	;const n=t.querySelector("ul.bonuses-wrap").lastElementChild,i=Array.from(n.children),o=v({
	classList:"nst-rw-show-wrap"});i.forEach((t=>{
	if(""===(null==t?void 0:t.title))return;const e=v({classList:"nst-rw-single",
	innerText:vi(null==t?void 0:t.title)});o.appendChild(e);
	})),e.classList.add("nst-rw-show"),e.appendChild(o);}));}));
	})).observe(document.documentElement,{childList:true,subtree:true});}},hi={
	Impregnable:"melee",Impenetrable:"guns",Insurmountable:"dune",
	Invulnerable:"delta",Imperviable:"life",Immutable:"def",Irrepressible:"dex",
	Impassable:"EOD"},vi=t=>{var e,n
	;const i=(null==(e=null==t?void 0:t.match(RegExp("(?<=>)[\\w\\s-]+(?=<)")))?void 0:e[0])??"FAIL",o=(null==(n=null==t?void 0:t.match(/\d+(?=(%| turns))/))?void 0:n[0])??"XX",r=hi[i]??i
	;return `${o}${/disarm|disable/.test(i.toLowerCase())?"T":"%"} ${r}`
	},bi=t=>fi[o()](t),gi=async t=>{
	const e=null==t?void 0:t.querySelectorAll(".trade-cont .user.right li.color2 ul li")
	;if(0===e.length)return;let n=0;const i=await E({section:"torn",select:"items"})
	;if(!(null==i?void 0:i.status))return;const o=null==i?void 0:i.items
	;Array.from(e).forEach((t=>{
	const e=null==t?void 0:t.querySelector(".name"),i=null==e?void 0:e.firstChild.textContent.trim(),{name:r,quantity:a}=(t=>{
	const e=/^x\d+\s/.test(n=t)?"start":/\sx\d+$/.test(n)?"end":null;var n
	;if(!e)return {name:t,quantity:1};const i=t.split(" "),o={start:0,end:i.length-1
	}[e],r=i[o].substr(1),a=parseInt(r,10)
	;return !e||isNaN(a)||a.toString().length!==r.length?{name:t,quantity:1}:{
	name:i.filter(((t,e)=>e!==o)).join(" ").trim(),quantity:a}
	})(i),s=Object.values(o).filter((t=>t.name===r))[0]
	;n+=parseInt(null==s?void 0:s.market_value)*a;}));const r=v({
	classList:"nst-trade-value",innerText:"MV: $"+m(n)})
	;t.insertAdjacentElement("beforebegin",r);
	},wi=n("user2ID")??"",yi=l(),{reloadone:xi,reloadtwo:ki,weapon:Li}=yi
	;let _i={},Ti={},Oi=false,Di=0;const Ii=()=>{var t
	;const e=null==(t=null==Ti?void 0:Ti.defenderUser)?void 0:t.life,n=null==_i?void 0:_i.currentAttackStatus,i=null==Ti?void 0:Ti.attackStatus,{hold:o}=l()
	;return o&&e<2?"hold":"end"===i&&"endResult"in Ti?"end":e<2&&"finishOptions"in Ti?"finish":"error"in Ti||"startButtonTimer"in Ti?"check":Oi||"notStarted"!==i?Oi||"process"===n?"hit":"check":"start"
	},ji=()=>{var t,e,n,i,o,r,a,s,c,d,u,m
	;const p=null==Ti?void 0:Ti.attackerAmmoStatus,f=null==(t=null==Ti?void 0:Ti.currentClips)?void 0:t[0],h=null==(n=null==(e=null==Ti?void 0:Ti.attackerItems[1])?void 0:e.item[0])?void 0:n.currentBonuses,v=null==(o=null==(i=null==Ti?void 0:Ti.attackerItems[2])?void 0:i.item[0])?void 0:o.currentBonuses,b={
	primary:()=>{var t,e,n
	;const i=null!=(null==(e=null==(t=null==Ti?void 0:Ti.attackerItems[1])?void 0:t.item[0])?void 0:e.ID),o="0"!==(null==f?void 0:f.attackerPrimaryRoundsLeft),r=!(null==(n=null==p?void 0:p[1])?void 0:n.includes("No ammo"))
	;return i&&r&&(o||xi)},secondary:()=>{var t,e,n,i
	;const o=null!=(null==(n=null==(e=null==(t=null==Ti?void 0:Ti.attackerItems)?void 0:t[2])?void 0:e.item[0])?void 0:n.ID),r="0"!==(null==f?void 0:f.attackerSecondaryRoundsLeft),a=!(null==(i=null==p?void 0:p[2])?void 0:i.includes("No ammo"))
	;return o&&a&&(r||ki)},melee:()=>{var t,e,n
	;return null!=(null==(n=null==(e=null==(t=null==Ti?void 0:Ti.attackerItems)?void 0:t[3])?void 0:e.item[0])?void 0:n.ID)
	}};if(0===(null==Ti?void 0:Ti.currentMove)&&(null==(r=l())?void 0:r.assaperk)){
	if("Assassinate"===(null==(a=null==h?void 0:h[72])?void 0:a.title))return 1
	;if("Assassinate"===(null==(s=null==v?void 0:v[72])?void 0:s.title))return 2}
	if((null==(c=l())?void 0:c.executeperk)&&"Execute"===(null==(d=null==v?void 0:v[75])?void 0:d.title)){
	const t=v[75].value
	;if(+(null==(u=null==Ti?void 0:Ti.defenderUser)?void 0:u.life)/+(null==(m=null==Ti?void 0:Ti.defenderUser)?void 0:m.maxlife)*100<=t)return 2
	}if((()=>{var t,e,n,i,o,r,a
	;if(void 0===(null==(n=null==(e=null==(t=null==Ti?void 0:Ti.attackerItems)?void 0:t[5])?void 0:e.item[0])?void 0:n.ID))return  false
	;const{temp:s}=l();if(!s)return  false
	;const c=null==(o=null==(i=null==Ti?void 0:Ti.attackerItems[5])?void 0:i.item[0])?void 0:o.ID,d=null==(a=null==(r=null==Ti?void 0:Ti.defenderItems[6])?void 0:r.item[0])?void 0:a.ID
	;return !("256"===c&&["670","1355","348"].includes(d)||"392"===c&&["348","642","644","655","670","675","680","1355"].includes(d))
	})())return 5;do{const t=Object.keys(Li).filter((t=>Li[t]==Di))[0]
	;if(b[t]())return Mi[t];Di++;}while(Di<3);return 999},Mi={primary:1,secondary:2,
	melee:3,temp:5},Si={check:()=>{var t
	;return "error"in Ti?Ti.error:"startButtonTimer"in Ti?`attack in ${+(null==(t=null==Ti?void 0:Ti.startButtonTimer)?void 0:t.timeLeft)}s`:"checking"
	},start:()=>"start fight",finish:()=>"executing",end:()=>{var t,e
	;return (null==(t=null==Ti?void 0:Ti.endResult)?void 0:t.info)??(null==(e=null==Ti?void 0:Ti.endResult)?void 0:e.groupEvent)
	},hit:()=>{var t,e
	;const n=+(null==(t=null==Ti?void 0:Ti.defenderUser)?void 0:t.life),i=+(null==(e=null==Ti?void 0:Ti.defenderUser)?void 0:e.maxlife)
	;return `${n} / ${i} (${Math.floor(n/i*100)}%)`}},Pi={hold:()=>({}),end:()=>({}),
	finish:()=>{const{outcome:t}=l();return {step:"finish",fightResult:t}},
	check:()=>({user2ID:wi}),start:()=>(Oi=true,{step:"startFight",user2ID:wi}),
	hit:()=>{const t="user1EquipedItemID";return {step:"attack",user2ID:wi,[t]:ji()}}
	},Ei=async t=>{const n=t.target;n.disabled=true;const i=Ii(),o=(Pi[i]??Pi.error)()
	;if(s(o))return
	;const r="https://www.torn.com/loader.php?sid=attackData&mode=json&rfcv="+e(),a={
	method:"POST",headers:{"x-requested-with":"XMLHttpRequest"},
	body:new URLSearchParams(o)};console.log(i,o),await fetch(r,{...a
	}).then((t=>t.json())).then((t=>((t,e)=>{
	e.disabled=false,console.log(t),_i=t,Ti=t.DB;const n=Ii();e.innerText=Si[n]();
	})(t,n))).catch((t=>console.error(t)));},$i=t=>(t=>{const e=S({
	title:"fighterino",element:t})
	;e.classList.remove("nst-box-row"),e.classList.add("nst-box-column")
	;const n=(()=>{const t=v({classList:"nst-box-column"}),e=v({
	classList:"nst-outcome",onchange:t=>{const e=t.target.id;c({outcome:e});}
	}),n=D("leave","outcome"),i=D("mug","outcome"),o=D("hospitalize","outcome")
	;e.appendChild(n),e.appendChild(i),e.appendChild(o),t.appendChild(e);const r=v({
	classList:"nst-outcome"}),a={id:"nst-hold",checked:l("hold")
	},s=O(a,"hold","",(t=>{c({hold:t.target.checked});})),d={id:"nst-temp",
	checked:l("temp")},u=O(d,"use temp first","",(t=>{c({temp:t.target.checked});
	})),m={id:"nst-assa",checked:l("assaperk")},p=O(m,"assassinate","",(t=>{c({
	assaperk:t.target.checked});})),f={id:"nst-execute",checked:l("executeperk")
	},h=O(f,"execute","",(t=>{c({executeperk:t.target.checked});}))
	;return r.appendChild(s),
	r.appendChild(u),r.appendChild(p),r.appendChild(h),t.appendChild(r),t})(),i=v({
	classList:"nst-box-column"}),o=g({id:"nst-fighteroo",classList:"torn-btn m-2",
	innerText:"fighterino",onclick:Ei})
	;i.appendChild(o),e.appendChild(n),e.appendChild(i);})(t),qi=t=>{
	if(!("currentFightStatistics"in t))return
	;const e=Array.from(document.querySelectorAll('ul[class^="participants"] div[class^= "playerWrap"] > span[class^= "playername"]'))
	;0!==e.length&&e.forEach((e=>{if(e.querySelector(".nst-intercept"))return
	;const n=e.innerText,i=Object.values(null==t?void 0:t.currentFightStatistics).filter((t=>(null==t?void 0:t.playername)===n))[0],o=null==i?void 0:i.userID
	;e.innerHTML="",e.appendChild(x({classList:"nst-intercept text-nsttorntext",
	href:"loader.php?sid=attack&user2ID="+o,target:"_blank",innerText:""+n}));}));}
	;let Ai;const zi=t=>{
	(null==t?void 0:t.querySelector("#nst-lastaction"))||t.appendChild(v({
	id:"nst-lastaction",innerText:"last action: "+Ai}));},Ci=t=>{
	Ai=p(+t.user.lastAction.seconds).trim(),
	wn(zi,'#profile-mini-root [class*="profile-mini-_userProfileWrapper"]');
	},Ni=n("XID"),Ri=async t=>{var e,n,i;(t=>{
	const e=null==t?void 0:t.closest(".profile-wrapper"),n=S({title:"Stat Spies",
	element:e}),i=v({id:"nst-compare",classList:"nst-box-column"}),o=v({
	id:"nst-spies",classList:"nst-box-column item-start"});i.appendChild(h("table",{
	id:"nst-compare-table",classList:"nst-table"})),o.appendChild(h("table",{
	id:"nst-spies-table",classList:"nst-table"})),o.appendChild(h("table",{
	id:"nst-avg-table",classList:"nst-table"})),n.appendChild(i),n.appendChild(o);
	})(t);const o=await $({selection:"/spy/user/"+Ni})
	;(null==o?void 0:o.status)&&((null==(e=null==o?void 0:o.compare)?void 0:e.status)&&(t=>{
	const e=document.getElementById("nst-compare-table"),n=h("tr",{
	classList:"nst-table-row text-center nst-nodrag"})
	;e.appendChild(n),["Stat","Them","You"].forEach((t=>n.appendChild(h("th",{
	innerText:t,classList:"nst-table-cell nst-table-cell-head"
	})))),Object.keys(t).forEach((n=>{var i,o;const r=h("tr",{
	classList:"nst-table-row"});r.setAttribute("data-id",n)
	;const a=+(null==(i=null==t?void 0:t[n])?void 0:i.amount),s=+(null==(o=null==t?void 0:t[n])?void 0:o.difference),l=s>0?"text-nstgreen":s<0?"text-nstred":"text-nsttorntext",c=h("td",{
	innerText:""+n,classList:"nst-table-cell text-nsttorntext"}),d=h("td",{
	innerText:""+m(a),classList:"nst-table-cell text-nsttorntext"}),u=h("td",{
	innerText:""+m(a+s),classList:"nst-table-cell"})
	;u.classList.add(l),r.appendChild(c),
	r.appendChild(d),r.appendChild(u),e.appendChild(r);})),new Re(e,{animation:150,
	filter:".nst-nodrag",store:{get:()=>l("tscompare")??Object.keys(t),set:t=>c({
	tscompare:t.toArray()})}});const i=h("tr",{
	classList:"nst-table-row nst-nodrag text-center"}),o=h("td",{
	classList:"nst-table-cell",colSpan:3}),r=x({
	href:"https://www.tornstats.com/settings/script",target:"_blank",
	classList:"t-blue nst-nodrag",innerText:"Change your script settings here"})
	;o.appendChild(r),i.appendChild(o),e.appendChild(i);
	})(null==(n=null==o?void 0:o.compare)?void 0:n.data),
	(null==(i=null==o?void 0:o.spy)?void 0:i.status)&&(t=>{
	const e=document.getElementById("nst-spies-table"),n=h("tr",{
	classList:"nst-table-row text-center"})
	;e.appendChild(n),["Stat","Them","You"].forEach((t=>n.appendChild(h("th",{
	innerText:t,classList:"nst-table-cell nst-table-cell-head"
	})))),["Strength","Defense","Speed","Dexterity","Total"].forEach((n=>{
	const i=+(null==t?void 0:t[n.toLowerCase()]),o=+(null==t?void 0:t["delta"+n]),r=o>0?"text-nstgreen":o<0?"text-nstred":"text-nsttorntext",a=h("tr",{
	classList:"nst-table-row"}),s=h("td",{innerText:""+n,
	classList:"nst-table-cell text-nsttorntext"}),l=h("td",{innerText:""+m(i),
	classList:"nst-table-cell text-nsttorntext"}),c=h("td",{innerText:""+m(i+o),
	classList:"nst-table-cell"})
	;c.classList.add(r),a.appendChild(s),a.appendChild(l),
	a.appendChild(c),e.appendChild(a);}));const i=h("tr",{
	classList:"nst-table-row nst-nodrag text-center"}),o=h("td",{
	classList:"nst-table-cell text-nsttorntext",colSpan:3,
	innerText:"Last Update: "+((null==t?void 0:t.difference)??"")})
	;i.appendChild(o),e.appendChild(i);})(null==o?void 0:o.spy));
	},Bi=n("user2ID")??"",Fi=async t=>{var e,n,i,o
	;if(document.querySelector("#nst-target-status"))return;const r={section:"user",
	select:"",objID:Bi},s=await E(r);if(!(null==s?void 0:s.status))return
	;const l=null==(e=null==s?void 0:s.states)?void 0:e.hospital_timestamp,c=null==(n=null==s?void 0:s.last_action)?void 0:n.timestamp,d=null==(i=null==s?void 0:s.life)?void 0:i.maximum,m=null==(o=null==s?void 0:s.life)?void 0:o.current,f=1===(null==s?void 0:s.revivable),h=0!==Object.values(null==s?void 0:s.basicicons).filter((t=>t.includes("Territory War"))).length,b=p(a()-c),g=p(l-a()),w=v({
	id:"nst-target-status",classList:"nst-status-wrap"}),y=v({
	classList:"nst-status-middle"}),x=v({classList:"nst-status-middle"}),k=v({
	id:"nst-status-life",classList:"nst-status-item",
	innerText:`life: ${Math.floor(m/d*100)}%`}),L=v({id:"nst-status-la",
	classList:"nst-status-item",innerText:"la: "+b});L.setAttribute("data-time",c)
	;const _=v({id:"nst-status-hosp",classList:"nst-status-item",
	innerText:"hosp: "+(""===g?"OUT":g)});_.setAttribute("data-time",l);const T=v({
	id:"nst-status-wall",classList:"nst-status-item",
	innerText:"wall: "+(h?"ON":"OFF")}),O=v({id:"nst-status-rev",
	classList:"nst-status-item",innerText:"rev: "+(f?"ON":"OFF")});y.appendChild(k),
	y.appendChild(T),
	y.appendChild(O),x.appendChild(_),x.appendChild(L),w.appendChild(y),
	w.appendChild(x),t.appendChild(w),setInterval((()=>((t,e,n)=>{
	const i=u(t.getAttribute("data-time")),o=u(e.getAttribute("data-time")),r=p(a()-i),s=p(o-a())
	;t.innerText="la: "+r,e.innerText="hosp: "+(""===s?"OUT":s)
	;const l=document.querySelector('#defender [id^="player-health-value"')??document.querySelector('[id^="player-health-value"'),[c,d]=l.innerText.split(" / "),m=Math.floor(u(c)/u(d)*100)
	;n.innerText=`life: ${m}%`;})(L,_,k)),2e3);},Hi={},Ui={balboas:{
	req:["defense","dexterity"],desc:"balboas (def/dex)"},frontline:{
	req:["strength","speed"],desc:"frontline (str/spd)"},gym3000:{req:["strength"],
	desc:"gym3000 (str)"},isoyamas:{req:["defense"],desc:"isoyamas (def)"},rebound:{
	req:["speed"],desc:"rebound (spd)"},elites:{req:["dexterity"],
	desc:"elites (dex)"}},Gi=()=>{["one","two"].forEach((t=>{
	const e=document.querySelector(`#nst-spgym-${t}-sel`),n=document.querySelector(`#nst-spgym-${t}-msg`),i=e.value,o=Object.keys(Hi).filter((t=>Ui[i].req.includes(t))).reduce(((t,e)=>({
	...t,[e]:Hi[e]
	})),{}),r=Object.keys(Hi).filter((t=>!Ui[i].req.includes(t))).reduce(((t,e)=>({
	...t,[e]:Hi[e]
	})),{}),a=Object.values(o).reduce(((t,e)=>t+e),0),s=Object.values(r).reduce(Object.keys(o).length>1?(t,e)=>t+e:(t,e)=>Math.max(t,e),0),l=m(a>=1.25*s?a/1.25-s:1.25*s-a),c=Object.keys(o).length>1?Object.keys(a>=1.25*s?r:o).join(" and "):(a>=1.25*s?Object.keys(r).filter((t=>Hi[t]===s)):Object.keys(o)).join(""),d=`Gain ${a>=1.25*s?"no more than":""} ${l} ${c}`
	;n.innerText=d;}));},Wi=t=>(t=>{const e=S({title:"Special Gym",element:t})
	;["one","two"].forEach((t=>{const n=v({id:"nst-spgym-"+t}),i=h("select",{
	id:`nst-spgym-${t}-sel`,classList:"nst-spgym-sel",onchange:t=>{
	const e=null==t?void 0:t.target,n=e.id.replace(/nst-/g,"").replace(/-sel/g,"").replace(/-/g,"")
	;c({[n]:e.value}),Gi();}});Object.entries(Ui).forEach((([e,n])=>{var o;const r={
	value:e,innerText:n.desc},a=h("option",r)
	;a.selected=(null==(o=l("spgym"+t))?void 0:o.toString())===e,i.appendChild(a);}))
	;const o=y({id:`nst-spgym-${t}-msg`,classList:"nst-spgym-msg"})
	;n.appendChild(i),n.appendChild(o),e.appendChild(n);}));})(t),Xi=t=>{var e,n
	;"stats"in t?Object.entries(null==t?void 0:t.stats).forEach((([t,e])=>Hi[t]=u(null==e?void 0:e.value))):"stat"in t&&(Hi[null==(e=null==t?void 0:t.stat)?void 0:e.name]=u(null==(n=null==t?void 0:t.stat)?void 0:n.newValue)),
	Gi();},Yi=t=>{t=t.closest('ul[class*="properties"]')
	;const e=l("userdata"),n=[...e.faction_perks,...e.job_perks,...e.property_perks,...e.education_perks,...e.book_perks].filter((t=>t.includes("gym gains")))
	;["strength","defense","speed","dexterity"].forEach((i=>{
	const o=e.faction_perks.filter((t=>t.includes(i+" gym gains"))).reduce(((t,e)=>t+u(e.match(/\d+/))),0),r=n.filter((t=>t.includes(i)||t.match(/% gym gains?/))).reduce(((t,e)=>t+u(e.match(/\d+/))),0),a=v({
	id:"nst-steadfast-"+i,classList:"nst-steadfast",
	innerText:`steadfast: ${o}% (${r}%)`})
	;t.querySelector("[class*="+i).insertAdjacentElement("afterbegin",a);}));},Ji=t=>{
	if(!t)return;if(t.querySelector("a"))return;const e=t.innerHTML,n=x({
	classList:"nst-pokername",href:"profiles.php?NID="+e,target:"_blank",
	innerText:""+e});t.innerHTML="",t.appendChild(n);},Ki=t=>{
	const e="p[class^=name]"
	;t.querySelectorAll(e).forEach((t=>Ji(t))),new MutationObserver((t=>{
	t.forEach((t=>{
	Array.from(t.addedNodes).forEach((t=>Ji(t.querySelector&&t.querySelector(e))));
	}));})).observe(t,{childList:true,subtree:true});},Qi={"Small Arms Cache":20,
	"Melee Cache":30,"Medium Arms Cache":50,"Heavy Arms Cache":70,"Armor Cache":60
	},Vi=async t=>{const e=null==t?void 0:t.parentElement,n=await E({section:"torn",
	select:"items"});if(!(null==n?void 0:n.status))return
	;const i=null==n?void 0:n.items;Array.from(e.children).forEach((t=>((t,e)=>{
	const n=t.innerText.split(",").filter((t=>Object.keys(Qi).includes(t.trim().replace(/^\d+x /,""))))
	;let i=0,o=0,r=0;n.forEach((t=>{
	const n=parseInt(t.trim().match(/\d+x/)[0]),a=t.trim().replace(/^\d+x /,""),s=Object.values(e).filter((t=>t.name.includes(a)))[0].market_value
	;o+=n,i+=s*n,r+=n*+Qi[a];}));const a=`caches: ${o} | BB: ${r} | MV: $${m(i)}`
	;t.appendChild(v({innerText:a}));})(t,i)));};let Zi={};const to=()=>{
	const t=document.querySelector("div[class^='joinWrap'] div[class^='rowsWrap']")
	;if(!t)return;const e=Array.from(t.children);0===e.length?Zi={}:e.forEach((t=>{
	const e=null==t?void 0:t.getAttribute("id");Zi[e]||(Zi[e]=a());const n=(i=Zi[e],
	p(900-(a()-i)));var i
	;const o=t.querySelector("div[class^='betBlock']"),r=o.getAttribute("aria-label").split(":")[1].trim(),s="$"+m(u(r))
	;o.innerText=s+"\n"+n;}));},eo=t=>{if("lobby"!==(null==t?void 0:t.step))return
	;const e=null==t?void 0:t.data;Object.values(e).forEach((t=>{
	void 0!==t.ID&&(Zi[t.ID]=t.timeCreated);})),setInterval(to,1e3);},no=async()=>{
	const t=u(r().match(/ID=(\d+)/)[1]),n=await(async()=>{
	const t=`https://www.torn.com/trade.php?step=getFullMoney&ID=${u(r().match(/ID=(\d+)/)[1])}&rfcv=${e()}`
	;return await fetch(t,{method:"GET",headers:{"x-requested-with":"XMLHttpRequest"
	}}).then((t=>t.json())).then((t=>u(t))).catch((t=>console.error(t)))||0
	})(),i="https://www.torn.com/trade.php?rfcv="+e(),o={method:"POST",headers:{
	"x-requested-with":"XMLHttpRequest"},body:new URLSearchParams({step:"view",ID:t,
	ajax:"true",amount:n,sub_step:"addmoney2"})};await fetch(i,{...o
	}).catch((t=>console.error(t)));},io=async t=>(t=>{const e=v({
	classList:"nst-ghost-wrap"}),n=g({innerText:"deposit",classList:"torn-btn",
	onclick:no});e.appendChild(n),t.insertAdjacentElement("beforebegin",e);
	})(t),oo=t=>{t.classList.add("nst-hide-medal");},ro=t=>{
	const e=t.parentElement.children[0],n=e.innerText.split("\n")[0],i=`${n} [${window.location.search.match(/\ID=(\d+)/)[1]}]`
	;e.innerHTML=e.innerHTML.replace(n,i);},ao={home:()=>{
	N("livenetworth")&&wn(Fn,'ul.info-cont-wrap [aria-label^="Networth"]'),
	N("effectivestats")&&wn(jn,".battle");},abro:()=>{
	N("maxbuyabroad")&&wn(Gn,"body");},trav:()=>{}},so={amarket:()=>{
	N("rwbonus")&&wn(bi,"body");},bazaar:()=>{
	N("rwbonus")&&wn(bi,"body"),N("bazaarvalue")&&wn(kn,"#bazaarRoot .wrapper");},
	city:()=>{},companies:()=>{},displaycase:()=>{},faction:()=>{},gym:()=>{
	N("specialgym")&&(wn(Wi,"#gymroot"),G(Xi,"getInitialGymInfo"),G(Xi,"train"));},
	index:()=>{},item:()=>{N("equipnoconfirm")&&U(Pn),N("rwbonus")&&wn(bi,"body");},
	imarket:()=>{N("marketnoconfirm")&&U(Hn);},loader:()=>{
	N("warintercept")&&"attack"===i()&&G(qi,"attackData");},page:()=>{
	N("rrtimeout")&&"russianRoulette"===i()&&G(eo,"russianRouletteData");},
	pmarket:()=>{},profiles:()=>{},search:()=>{},trade:()=>{},all:()=>{
	N("leftalign")&&document.documentElement.classList.add("nst-left-align"),
	N("minilastaction")&&G(Ci,"UserMiniProfile");},nopager:()=>{}},lo={
	amarket:()=>{},bazaar:()=>{N("bazaarautoprice")&&wn(xn,"body");},city:()=>{
	N()&&wn(pi,"body"),N("cityfinds")&&wn(_n,"#map .leaflet-marker-pane");},
	companies:()=>{
	N("ezmoneydeposit")&&wn($n,"body"),N("employeela")&&wn(Sn,".manage-company"),
	N("companyrestock")&&/stock/.test(r())&&wn(Tn,"body");},displaycase:()=>{
	N("displaycaseitemid")&&wn(Dn,"ul.dc-list"),
	N("rwbonus")&&wn(bi,"ul.display-cabinet");},factions:()=>{
	N("ezmoneydeposit")&&wn($n,"body"),
	N(Q)&&wn(Rn,"#faction-armoury"),N("hidefactiondesc")&&document.documentElement.style.setProperty("--nst-hide-fact-desc","none"),
	N("hidewargraph")&&document.documentElement.style.setProperty("--nst-hide-war-graph","none"),
	N("factionid")&&wn(ro,"#factions .faction-profile .faction-info");},gym:()=>{
	N("")&&wn(Yi,'#gymroot ul[class*="properties"] [class*="strength"]');},
	index:()=>{ao[R()]();},item:()=>{
	N("removeuglyimage")&&wn(di,'[class^="itemPreviewWrapper"]',true),
	N("easyloadoutequip")&&wn(In,'ul[class^="slots"]'),N(J)&&wn(oi,"div.items-wrap");
	},imarket:()=>{N("marketnoconfirm")&&wn(Un,"body");},jailview:()=>{
	N("quickjail")&&wn(li,"ul.users-list");},loader:()=>{
	N("missionhelper")&&"missions"===i()&&wn(Xn,".giver-cont-wrap"),
	N("fighterino")&&"attack"===i()&&wn($i,'div[class^="playersModelWrap"]'),
	N("targetstatus")&&"attack"===i()&&wn(Fi,'[class^="playerWindow"] [class*="defender"]');
	},page:()=>{
	ao[R()](),N("pokername")&&"holdem"===i()&&wn(Ki,"div[class^=players]");},
	pmarket:()=>{
	N("pointsnoconfirm")&&wn(Qn,".users-point-sell"),N("pointsmuglight")&&wn(Jn,".users-point-sell");
	},profiles:()=>{
	N("idtoname")&&wn(Bn,".user-info-value"),N("hidemedals")&&wn(oo,".medals-wrapper"),
	N("statspies")&&wn(Ri,".user-info-value");},properties:()=>{
	N("ezmoneydeposit")&&wn($n,"body");},shops:()=>{N("cshopmaxbuy")&&wn(On,"body");},
	trade:()=>{
	N("tradevalue")&&wn(gi,"#trade-container .trade-cont"),N("quickghost")&&wn(io,"#trade-container .trade-cont .user.left");
	},war:()=>{var t
	;N("warvalue")&&"rankreport"===(null==(t=window.location.search.match(/\?step=(\w+)/))?void 0:t[1])&&wn(Vi,'li[class^="members-bonus-row"]');
	},all:()=>{N("refillreminder")&&wn(ci,'[class*="bar"][class*="energy"]');},
	nopager:()=>{}},co={loading:async()=>{
	wn(mn,"#sidebar"),z()&&(document.onreadystatechange=()=>co[document.readyState](),
	(so.all??so.nopager)(),(so[o()]??so.nopager)(),C());},interactive:()=>{(()=>{
	const t=h("style",{})
	;t.textContent='*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.nst-hide-medal{display:none!important}.nst-left-align .d .container{margin-left:1.25rem!important;justify-content:flex-start!important}.nst-left-align .d.without-sidebar .container,.nst-left-align .d.without-sidebar .content-wrapper,.nst-left-align .d .anonymous .content-wrapper{margin-left:1.25rem}.nst-trade-value{height:1.5rem;text-align:center;font-size:.875rem;line-height:1.5rem;--tw-text-opacity: 1;color:rgb(108 173 43 / var(--tw-text-opacity, 1))}.nst-city-item{left:-1.25rem!important;top:-1.25rem!important;z-index:999!important;box-sizing:border-box!important;display:block!important;height:2.5rem!important;width:2.5rem!important;border-radius:9999px!important;border-width:1px!important;border-style:solid!important;--tw-border-opacity: 1 !important;border-color:rgb(0 0 0 / var(--tw-border-opacity, 1))!important;background-color:#124707cc!important;padding:.75rem!important;--tw-shadow: 0 25px 50px -12px rgb(0 0 0 / .25) !important;--tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color) !important;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)!important}.nst-city-item:hover{left:-2.5rem!important;top:-2.5rem!important;z-index:999!important;height:10rem!important;width:10rem!important;--tw-bg-opacity: 1 !important;background-color:rgb(0 0 0 / var(--tw-bg-opacity, 1))!important;padding:2.25rem!important}.nst-findsworth{margin:.25rem;padding:.25rem;font-weight:700}.nst-findslist{margin:.25rem;padding:.25rem;text-align:left}.nst-status-wrap{position:absolute;top:0;z-index:10;display:flex;width:100%;flex-direction:column;flex-wrap:wrap;align-content:flex-start;align-items:flex-start;justify-content:center}.nst-status-middle{display:flex;width:100%;flex-direction:row;flex-wrap:wrap;align-content:center;align-items:center;justify-content:space-between}.nst-status-item{margin:.25rem;border-width:1px;border-style:solid;--tw-border-opacity: 1;border-color:rgb(0 0 0 / var(--tw-border-opacity, 1));padding:.25rem}.nst-lastaction{padding:.25rem}.nst-spgym-sel,.nst-spgym-msg{margin:.25rem;padding:.25rem}.nst-steadfast{margin:.25rem;padding:.25rem;text-align:center}.nst-pokername{color:var(--holdem-text-color-main)}.nst-ghost-wrap{display:flex;flex-direction:column;flex-wrap:wrap;align-content:center;align-items:center;justify-content:center;padding:.25rem}.nst-rw-show{display:flex!important;flex-direction:row!important;flex-wrap:nowrap!important;align-content:center!important;align-items:center!important;justify-content:flex-start!important}.nst-rw-show-wrap{margin-left:.5rem;display:flex;flex-direction:row;flex-wrap:nowrap}.nst-rw-single{margin-right:.5rem;border-radius:.5rem;border-width:2px;border-style:solid;--tw-border-opacity: 1;border-color:rgb(34 34 34 / var(--tw-border-opacity, 1));padding:.25rem;font-size:.75rem;line-height:1rem}.nst-icon{cursor:pointer!important;background-image:url(https://factiontags.torn.com/11581-56425.png)!important;background-position:center!important}.nst-logo{font-size:1.5rem;line-height:2rem;font-weight:700;--tw-text-opacity: 1;color:rgb(66 140 165 / var(--tw-text-opacity, 1))}.nst-menu{margin-left:2rem;margin-top:2rem;margin-bottom:10rem;flex:1 1 0%}.nst-menu-wrap{border-radius:.5rem}.nst-menu-title{position:relative;top:0;left:0;display:flex;height:2rem;flex-wrap:wrap;align-content:center;align-items:center;border-top-left-radius:.5rem;border-top-right-radius:.5rem;border-bottom-width:1px;border-style:solid;--tw-border-opacity: 1;border-bottom-color:rgb(0 0 0 / var(--tw-border-opacity, 1));background-color:var(--default-bg-panel-color);padding:.25rem .75rem;font-size:.875rem;line-height:2rem;font-weight:700;color:var(--default-color)}.nst-menu-body{display:flex;border-bottom-right-radius:.5rem;border-bottom-left-radius:.5rem;background-color:var(--default-bg-panel-color);line-height:.75rem}.nst-ul-main{float:none;display:table-cell;list-style-type:none;border-right-width:1px;border-style:solid;--tw-border-opacity: 1;border-right-color:rgb(0 0 0 / var(--tw-border-opacity, 1));vertical-align:top}.nst-menu-page{position:relative;display:block;width:9rem;border-bottom-width:1px;border-style:solid;--tw-border-opacity: 1;border-bottom-color:rgb(0 0 0 / var(--tw-border-opacity, 1));background-color:var(--default-bg-panel-color);padding:.5rem;font-weight:700;color:var(--default-color)}.nst-menu-page:hover{background-color:var(--default-bg-panel-active-color)}.nst-menu-sel{background-color:var(--default-bg-panel-active-color)!important}.nst-menu-item{float:none;display:block;width:100%;vertical-align:top}.nst-message{margin:.5rem;padding:.25rem;--tw-text-opacity: 1;color:rgb(185 70 45 / var(--tw-text-opacity, 1))}.nst-api-wrap{margin:.5rem;display:flex;flex-direction:column;flex-wrap:wrap;align-content:center;align-items:center;justify-content:center;padding:.25rem}.nst-block-title{margin:.5rem!important}.nst-block{margin:.5rem;display:flex;flex-direction:column;flex-wrap:wrap;align-content:center;align-items:center;justify-content:center;border-bottom-width:1px;border-style:solid;--tw-border-opacity: 1;border-bottom-color:rgb(249 250 251 / var(--tw-border-opacity, 1));padding:.5rem}.nst-script-block{margin:.5rem;display:flex;flex-direction:column;flex-wrap:wrap;align-content:flex-start;align-items:flex-start;justify-content:center;padding:.5rem}.nst-outcome{display:flex;flex-direction:row;flex-wrap:wrap;align-content:center;align-items:center;justify-content:center}.list-group-item{margin:.5rem;border-width:1px;border-style:solid;--tw-border-opacity: 1;border-color:rgb(107 114 128 / var(--tw-border-opacity, 1));padding:.5rem 1rem;text-align:center;font-size:.875rem;line-height:1.25rem}.nst-tos-title{margin-top:.75rem!important;margin-bottom:1.25rem!important;text-align:center!important;font-size:1.5rem!important;line-height:2rem!important;font-weight:700!important}.nst-tos-wrap{margin:.5rem;white-space:normal;overflow-wrap:normal;word-break:normal;overflow-wrap:break-word;padding:.25rem;font-size:.875rem;line-height:1.25rem}.nst-box{margin-top:.75rem;margin-bottom:.75rem;box-sizing:border-box;display:flex;flex-direction:column}.nst-box-header{display:flex;border-top-left-radius:.5rem;border-top-right-radius:.5rem;border-bottom-width:0px;--tw-bg-opacity: 1;background-color:rgb(0 0 0 / var(--tw-bg-opacity, 1));padding:.25rem .75rem;font-size:1.125rem;line-height:1.75rem;--tw-text-opacity: 1;color:rgb(66 140 165 / var(--tw-text-opacity, 1));--tw-shadow: inset 0 2px 4px 0 rgb(0 0 0 / .05);--tw-shadow-colored: inset 0 2px 4px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}#nst-arrow{display:flex;height:1rem;width:1rem}.nst-box-title{flex-grow:1;font-size:.875rem;font-weight:700;line-height:1rem;--tw-text-opacity: 1;color:rgb(66 140 165 / var(--tw-text-opacity, 1))}.nst-box-content{border-bottom-right-radius:.5rem;border-bottom-left-radius:.5rem;border-width:1px;border-top-width:0px;border-style:solid;--tw-border-opacity: 1;border-color:rgb(0 0 0 / var(--tw-border-opacity, 1));background-color:var(--default-bg-panel-color);color:var(--default-color)}.nst-box-content>p{margin:.25rem;text-align:center}.nst-box-row{margin:.25rem;display:flex;flex-direction:row;flex-wrap:wrap;align-content:center;align-items:flex-start;justify-content:space-evenly;text-align:center}.nst-box-column{margin:.25rem;display:flex;flex:1 1 0%;flex-direction:column;flex-wrap:wrap;align-content:center;align-items:center;justify-content:center;text-align:center}.nst-box-item{margin:.125rem .25rem;display:flex;align-content:flex-start;align-items:center;font-size:.875rem;line-height:1.25rem}.nst-box-item>input{margin-top:0;margin-bottom:0;margin-left:.25rem;margin-right:.25rem}.nst-box-button{position:relative;display:flex;width:100%;flex-direction:column;flex-wrap:wrap;align-items:center;padding:.25rem;color:var(--default-color)}.nst-box-close{position:absolute;top:0;right:.25rem;cursor:pointer;font-size:.75rem;line-height:1rem}.nst-box-img{vertical-align:middle}.nst-box-btn-div{margin:.25rem;display:flex;flex:0 0 14%;justify-content:center;align-self:stretch;border-radius:.5rem;border-width:1px;border-style:solid;--tw-border-opacity: 1;border-color:rgb(34 34 34 / var(--tw-border-opacity, 1));padding:0}.nst-box-btn-div:hover{background-color:var(--default-bg-panel-active-color)}#nst-item-resp{justify-content:center}.nst-input{margin:0;box-sizing:border-box;height:1.5rem;border-radius:.25rem;border-width:1px;border-style:solid;--tw-border-opacity: 1;border-color:rgb(0 0 0 / var(--tw-border-opacity, 1));background-color:var(--default-bg-panel-active-color);text-align:center;font-size:.875rem;line-height:1.25rem;font-weight:500;color:var(--default-color)}.nst-table{box-sizing:border-box;width:100%;border-width:2px;border-style:solid;--tw-border-opacity: 1;border-color:rgb(31 41 55 / var(--tw-border-opacity, 1))}.nst-table-row{text-align:left}.nst-table-cell-head{font-size:.875rem;line-height:1.25rem;font-weight:700}.nst-table-cell{box-sizing:border-box!important;border-width:1px!important;border-style:solid!important;--tw-border-opacity: 1 !important;border-color:rgb(31 41 55 / var(--tw-border-opacity, 1))!important;padding:.25rem!important;font-size:.75rem!important;line-height:1rem!important}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.m-2{margin:.5rem}.block{display:block}.inline{display:inline}.table{display:table}.table-cell{display:table-cell}.table-row{display:table-row}.hidden{display:none}.h-4{height:1rem}.w-4{width:1rem}.resize{resize:both}.border{border-width:1px}.bg-nstmain{--tw-bg-opacity: 1;background-color:rgb(66 140 165 / var(--tw-bg-opacity, 1))}.bg-nstred{--tw-bg-opacity: 1;background-color:rgb(185 70 45 / var(--tw-bg-opacity, 1))}.bg-nstyellow{--tw-bg-opacity: 1;background-color:rgb(252 196 25 / var(--tw-bg-opacity, 1))}.text-center{text-align:center}.text-base{font-size:1rem;line-height:1.5rem}.text-sm{font-size:.875rem;line-height:1.25rem}.font-bold{font-weight:700}.text-black{--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity, 1))}.text-nstgreen{--tw-text-opacity: 1;color:rgb(108 173 43 / var(--tw-text-opacity, 1))}.text-nstmain{--tw-text-opacity: 1;color:rgb(66 140 165 / var(--tw-text-opacity, 1))}.text-nstred{--tw-text-opacity: 1;color:rgb(185 70 45 / var(--tw-text-opacity, 1))}.text-nsttorntext{color:var(--default-color)}.text-nstyellow{--tw-text-opacity: 1;color:rgb(252 196 25 / var(--tw-text-opacity, 1))}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}:root{--nst-hide-fact-desc: block;--nst-hide-war-graph: block}.f-war-list .descriptions .faction-war-info,.f-war-list .descriptions .faction-names{display:var(--nst-hide-war-graph)!important}#faction-main [data-title^=announcement],#faction-main .announcement,.faction-title,.faction-description{display:var(--nst-hide-fact-desc)!important}[aria-label="Reset loadout"],[class*=airspaceScene],[class*=randomFactWrapper]{display:none!important}',
	document.head.appendChild(t);
	})(),z()&&((lo.all??lo.nopager)(),(lo[o()]??lo.nopager)());},complete:()=>{z();}}
	;co[document.readyState]();}();

})();