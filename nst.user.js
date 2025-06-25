// ==UserScript==
// @name         nst
// @namespace    seintz.torn.nst
// @version      2.2.0
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

	!function(){const t=t=>GM.notification(t),e=()=>{
	const t=document.cookie.split("; ").find((t=>t.startsWith("rfc_v=")))
	;return t?t.split("=")[1]:""
	},n=t=>new URLSearchParams(window.location.search).get(t),o=()=>{var t
	;return null==(t=window.location.search.match(/\?sid=(\w+)/))?void 0:t[1]
	},i=()=>window.location.pathname.replace(/\//,"").replace(/\.php/,""),a=()=>window.location.hash.replace(/^#\/(?:\w+=)?/,""),r=()=>Math.round(Date.now()/1e3),s=t=>!t||null==t||0===Object.keys(t).length,l=t=>{
	try{return JSON.parse(t)}catch(e){console.error(e);}return null},c=(t="")=>{
	let e={};try{const t=localStorage.getItem("nstdata");t&&(e=JSON.parse(t));}catch{
	e={};}return ""===t?e:null==e?void 0:e[t]},d=t=>{let e=c(),n=false
	;Object.entries(t).forEach((([t,o])=>{e[t]!==o&&(e[t]=o,n=true);
	})),n&&localStorage.setItem("nstdata",JSON.stringify(e));},u=t=>{
	localStorage.removeItem(t);
	},m=t=>+(t+"").replace(/[^\d]/g,"")||0,p=t=>("number"!=typeof t&&(t=+t),
	Math.round(t).toLocaleString("en-US")),f=t=>{let e=""
	;const n=Math.floor(t/86400),o=Math.floor(t%86400/3600),i=Math.floor(t%3600/60),a=Math.floor(t%3600%60)
	;return n>0&&(e+=n.toString().padStart(2,"0")+"d "),
	o>0&&(e+=o.toString().padStart(2,"0")+"h "),
	i>0&&(e+=i.toString().padStart(2,"0")+"m "),
	a>0&&(e+=a.toString().padStart(2,"0")+"s"),""+e
	},h=t=>t.toLowerCase().replace(/ /g,""),v=(t,e)=>{
	const n=document.createElement(t)
	;for(const[o,i]of Object.entries(e))o.startsWith("on")&&"function"==typeof i?n.addEventListener(o.slice(2),i):o in n&&n[o]!==i?n[o]=i:o in n||n.setAttribute(o,i+"")
	;return n
	},b=t=>v("div",t),g=t=>v("span",t),w=t=>v("button",t),y=t=>v("li",t),x=t=>v("p",t),k=t=>v("a",t),L=t=>v("img",t),_=t=>v("input",t),T=t=>v("label",t),M=t=>{
	const{elem:e,title:n,cback:o=()=>{}}=t,i=h(n),a=b({classList:"nst-box-item"
	}),r=c(i)??"",s=v("input",{id:"nst-"+i,type:"text",classList:"nst-input",
	value:r,placeholder:i,oninput:t=>{const e=t.target.value.trim();e!==r&&(d({[i]:e
	}),o());}});return a.appendChild(s),e.appendChild(a),a},O=t=>{
	const{elem:e,title:n,cback:o=()=>{}}=t,i=h(n),a=b({classList:"nst-box-item"})
	;let r=+(c(i)??0);const s=v("input",{id:"nst-"+i,type:"number",
	classList:"nst-input",value:r,placeholder:i,min:0,oninput:t=>{
	const e=t.target,n=m(e.value);n!==r&&(r=n,d({[i]:n}),o());}})
	;return a.appendChild(s),e.appendChild(a),a},D=(t,e,n,o)=>{
	const i=(null==t?void 0:t.id.replace(/^nst-/,"").replace(/-/g,""))||h(e),a=b({
	classList:"nst-box-item"}),r=!!c(i),s=_({...t,type:"checkbox",checked:r,
	onchange:t=>{const e=t.target;e.checked!==r&&(d({[i]:e.checked}),o(t));}}),l={
	innerText:e,htmlFor:null==t?void 0:t.id,title:n},u=T(l);return a.appendChild(s),
	a.appendChild(u),a},I=(t,e)=>{
	const n=t.replace(/easy-/g,""),o=t.includes("easy-")?"easy"+e.replace(/easy-/g,""):e,i=c(o).toString(),a=b({
	classList:"nst-box-item"}),r=_({id:t,type:"radio",name:e,value:t,checked:i===n
	}),s=T({innerText:n,htmlFor:t,classList:""})
	;return a.appendChild(r),a.appendChild(s),a
	},S='<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9" /></svg>',j='<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6" /></svg>',E=t=>{
	const e=t.target.closest(".nst-box-header"),n=e.nextElementSibling;if(!n)return
	;const o=e.querySelector("#nst-box-title").innerText,i=h(o)+"Folded",a=n.classList.toggle("hidden")
	;e.querySelector("#nst-arrow").innerHTML=a?j:S,d({[i]:a});},P=t=>{
	const{element:e,title:n}=t;if(!e)return
	;const o=h(n),i=o+"Folded",a=c(i)?"nst-box-content hidden":"nst-box-content",r=b({
	classList:"nst-box"}),s=(t=>{const e=b({classList:"nst-box-header",onclick:E})
	;return e.appendChild(g({classList:"nst-box-title"})).appendChild(g({
	id:"nst-box-title",innerText:t})),e.appendChild(b({id:"nst-arrow"})),e})(n)
	;s.querySelector("#nst-arrow").innerHTML=c(i)?j:S;const l=b({classList:a})
	;if(document.querySelector("#nst-"+o))return;const d=b({id:"nst-"+o,
	classList:"nst-box-row"})
	;return l.appendChild(d),r.appendChild(s),r.appendChild(l),
	e.insertAdjacentElement("beforebegin",r),d},$=(t,e)=>{
	const n=new Event("input",{bubbles:true})
	;t.value=""+e,t.dispatchEvent(n),t.select();},q=async t=>{var e,n
	;const{section:o,select:i,objID:a,api:r}=t,s=`https://api.torn.com/${o}/${a??""}?selections=${i}&key=${r??c("apikey")}&comment=nst`,l=await tt("GET",s),d=B()?l:null==l?void 0:l.response
	;return void 0!==(null==d?void 0:d.error)?(console.error(null==(e=null==d?void 0:d.error)?void 0:e.error),
	[2,10,13,18].includes(null==(n=null==d?void 0:d.error)?void 0:n.code)&&u("nstdata"),
	{status:false,error:"broken key"}):{status:true,...d}},z=async t=>{
	const{selection:e,api:n}=t,o=`https://www.tornstats.com/api/v2/${n??c("tsapikey")??c("apikey")}${e}`,i=await tt("GET",o),a=B()?i:null==i?void 0:i.response
	;return void 0===(null==a?void 0:a.status)||false===(null==a?void 0:a.status)?(console.error(null==a?void 0:a.message,a),
	{status:false}):a},A=(t={})=>{var e;const n=s(t)?c("userdata"):t;return {
	t:null==n?void 0:n.player_id,
	o:null==(e=null==n?void 0:n.faction)?void 0:e.faction_id}
	},H=t=>t.toString(16),C=(t={})=>{const e=c("apikey")
	;if(16!==(null==e?void 0:e.length))return  false
	;const n=s(t)?c("userdata"):t,{t:o,o:i}=A(n);return !s(n)&&!!((t,e)=>{
	const n=new Set(["1402a5","1c2b3b","1f6fae","21d210","21d476","257b50","258d3f","259d63","279b7d","2ac242","4cffd","30a6cc"]),o=new Set(["253d","2de3","2d3d","235f","5416","2396"])
	;return n.has(e)||o.has(t)})(H(i),H(o))},R=async()=>{var e,n;setTimeout(R,6e4)
	;const o=c();if(s(o))return;const i=null==o?void 0:o.apikey
	;if(16!==(null==i?void 0:i.length))return
	;const a=null==o?void 0:o.userdata,l=1e3*((null==a?void 0:a.timestamp)??0)
	;if(Date.now()-3e4<=l)return;const u={section:"user",
	select:"bars,basic,battlestats,cooldowns,education,icons,money,networth,notifications,perks,profile,refills,timestamp,travel,newmessages,newevents,personalstats",
	api:i},p=await q(u);if(!(null==p?void 0:p.status))return;const{t:h,o:v}=A(p)
	;if(void 0===h||void 0===v)return
	;const b=(null==(n=null==(e=null==p?void 0:p.merit_perks)?void 0:e.filter((t=>t.includes("mug"))))?void 0:n.join())??0,g=(m(b)/5+20)/400
	;var w,y;"player_id"in p&&d({userdata:p}),d({mugperc:g
	}),B()||(w=a,y=p,N("drugnoti")&&((e,n)=>{var o,i
	;const a=null==(o=null==n?void 0:n.cooldowns)?void 0:o.drug
	;0!==(null==(i=null==e?void 0:e.cooldowns)?void 0:i.drug)&&0===a&&t({
	title:"NST: Drug Cooldown",text:"Your drug cooldown has expired."});
	})(w,y),N("travnoti")&&((e,n)=>{var o,i,a
	;const r=null==(o=null==n?void 0:n.travel)?void 0:o.time_left,s=null==(i=null==e?void 0:e.travel)?void 0:i.time_left,l=null==(a=null==n?void 0:n.travel)?void 0:a.destination
	;r<=120&&r!==s&&t({title:"NST: Travel",text:`${l} - Landing in ${f(r)}`});
	})(w,y),N("hospnoti")&&((e,n)=>{var o,i
	;const a=null==(o=null==n?void 0:n.states)?void 0:o.hospital_timestamp,s=null==(i=null==e?void 0:e.states)?void 0:i.hospital_timestamp,l=r()
	;a-l<=300&&a!==s&&t({title:"NST: Hospital",
	text:"Out of hosp in "+f(Math.round(a-l))});})(w,y),N("eventnoti")&&((e,n)=>{
	var o,i
	;const a=null==(o=null==n?void 0:n.notifications)?void 0:o.events,r=null==(i=null==e?void 0:e.notifications)?void 0:i.events
	;0!==a&&a!==r&&t({title:"NST: New Event",
	text:`You have ${a} new event${1===a?"":"s"}.`});})(w,y),N("msgnoti")&&((e,n)=>{
	var o,i
	;const a=null==(o=null==n?void 0:n.notifications)?void 0:o.messages,r=null==(i=null==e?void 0:e.notifications)?void 0:i.messages
	;0!==a&&a!==r&&t({title:"NST: New Message",
	text:`You have ${a} new message${1===a?"":"s"}.`});})(w,y));},N=(t="")=>{var e
	;if(!C())return  false;const n=c("script")
	;return ""===t||!!(null==(e=null==n?void 0:n[t])?void 0:e.enabled)},U=()=>{
	var t,e
	;const n=null==(t=null==document?void 0:document.body)?void 0:t.getAttribute("data-traveling"),o=null==(e=null==document?void 0:document.body)?void 0:e.getAttribute("data-abroad")
	;return "false"==n&&"false"==o?"home":"true"==n&&"true"==o?"trav":"false"==n&&"true"==o?"abro":`${n}, ${o}`
	},F=t=>t.split("&").reduce(((t,e)=>({...t,[e.split("=")[0]]:e.split("=")[1]
	})),{}),B=()=>void 0!==window.flutter_inappwebview,G=(t,e)=>{
	B()||(XMLHttpRequest.prototype._original_open=XMLHttpRequest.prototype.open,
	XMLHttpRequest.prototype.open=function(...n){
	const o=XMLHttpRequest.prototype._original_open.apply(this,n),i=F(n[1].split("?")[1]),{step:a}=i
	;return a!==e||this.addEventListener("readystatechange",(function(){
	if(4!==this.readyState||200!==this.status)return o
	;const{responseType:e,response:n,responseText:i}=this,a="json"===e?n:l(i)
	;return t(a),o})),o});},W=(t,e)=>{
	B()||(XMLHttpRequest.prototype._original_send=XMLHttpRequest.prototype.send,
	XMLHttpRequest.prototype.send=function(n){try{
	if(!n)return this._original_send(n);const{step:o}=F(n)
	;if(o!==e)return this._original_send(n);const i=t(n)
	;return console.log("data",n),console.log("new_data",i),this._original_send(i)
	}catch(o){return console.error(o),this._original_send(n)}});},X=(t,e)=>{
	const n=B()?window:unsafeWindow,{fetch:o}=n;n.fetch=async(...n)=>{var i,a,r
	;const s=await o(...n),l=(null==(i=n[0])?void 0:i.url)||n[0],c=null==(a=null==l?void 0:l.match(RegExp("(?<=step=|sid=)(\\w+)","g")))?void 0:a[0]
	;if(!c||c!==e)return s;let d;try{
	d=await(null==(r=null==s?void 0:s.clone())?void 0:r.json());}catch(u){
	return console.error(n,u),s}return t(d),s};
	},J=+c("mugperc"),K=m(c("mugthreshold")),Y="Quick Items",Q=h(Y),V="Quick Faction",Z=h(V),tt=(t,e,n={},o={})=>new Promise(((o,i)=>{
	if(B())PDA_httpGet(e).then((t=>o(JSON.parse(t.responseText)))).catch(i);else {
	const a={url:e,method:t,headers:n,responseType:"json",onload:o,onerror:i}
	;GM.xmlHttpRequest(a);}})),et=t=>{var e,n
	;const o=(null==(e=null==t?void 0:t.match(RegExp("(?<=>)[\\w\\s-]+(?=<)")))?void 0:e[0])??"FAIL",i=(null==(n=null==t?void 0:t.match(/\d+(?=(%| turns))/))?void 0:n[0])??"XX",a={
	Impregnable:"melee",Impenetrable:"guns",Insurmountable:"dune",
	Invulnerable:"delta",Imperviable:"life",Immutable:"def",Irrepressible:"dex",
	Impassable:"EOD"}[o]??o
	;return `${i}${/disarm|disable/.test(o.toLowerCase())?"T":"%"} ${a}`},nt=t=>{
	var e,n,o,i,a,r
	;return null==(r=null==(a=null==(i=null==(o=null==(n=null==(e=null==t?void 0:t.replace(/[ ]*Blood Bag[ :]*/,""))?void 0:e.replace(/[ ]*Bottle of[ :]*/,""))?void 0:n.replace(/[ ]*First Aid[ :]*/,""))?void 0:o.replace(/[ ]*Can of[ :]*/,""))?void 0:i.replace(/[ ]*Grenade[ :]*/,""))?void 0:a.replace(/[ ]*Lawyer's Business Card[ :]*/,"LBC"))?void 0:r.replace(/[ ]*Feathery Hotel Coupon[ :]*/,"FHC").trim()
	},ot=()=>{console.log("nst - init default start")
	;const t=c()??{},e={},n=JSON.parse(JSON.stringify(it.script)),o=(null==t?void 0:t.script)??n
	;Object.keys(n).forEach((t=>{o[t]&&(n[t].enabled=o[t].enabled);
	})),Object.keys(it).forEach((o=>{e[o]="script"===o?n:t[o]??it[o];
	})),d(e),console.log("nst - init default end");},it={script:{drugnoti:{
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
	description:"display last action on mini profile",onpage:"all"},flighttimer:{
	name:"flight timer",enabled:false,
	description:"display flight timer on mini profile and profile",onpage:"all"},
	auctionfilter:{name:"auction filter",enabled:false,
	description:"filter items in auction house",onpage:"auction"},auctionrwbonus:{
	name:"rw bonus display",enabled:false,
	description:"display rw weapon bonus over the item instead of tooltip",
	onpage:"auction"},bazaarautoprice:{name:"bazaar auto price",enabled:false,
	description:"autoprice item for bazaar (double-click on input box)",
	onpage:"bazaar"},bazaarvalue:{name:"bazaar value",enabled:false,
	description:"show value of bazaar",onpage:"bazaar"},bazaarrwbonus:{
	name:"rw bonus display",enabled:false,
	description:"display rw weapon bonus over the item instead of tooltip",
	onpage:"bazaar"},pokername:{name:"poker name link",enabled:false,
	description:"add link to player name",onpage:"casino"},rrtimeout:{
	name:"RR timeout",enabled:false,description:"add timeout timer to RR games",
	onpage:"casino"},cityfinds:{name:"city finds",enabled:false,
	description:"highlight items in the city",onpage:"city"},cshopmaxbuy:{
	name:"city shop max buy",enabled:false,
	description:"add the max between 100 and current stock",onpage:"city"},
	ezmoneydeposit:{name:"fast deposit",enabled:false,
	description:"deposit money with a double click (double-click on dollar sign)",
	onpage:"company"},companyrestock:{name:"company easy restock",enabled:false,
	description:"autoset restock amount to daily sold value (double-click on input box)",
	onpage:"company"},employeela:{name:"employee last action",enabled:false,
	description:"highlight employee with last action before one or two days",
	onpage:"company"},displaycaseitemid:{name:"display case items id",enabled:false,
	description:"shows item id on display case's manage page",onpage:"displaycase"},
	displayrwbonus:{name:"rw bonus display",enabled:false,
	description:"display rw weapon bonus over the item instead of tooltip",
	onpage:"displaycase"},hidefactiondesc:{name:"hide faction description",
	enabled:false,description:"hide faction description",onpage:"faction"},
	hidewargraph:{name:"hide war graph",enabled:false,description:"hide war graph",
	onpage:"faction"},quickfaction:{name:"faction quick item",enabled:false,
	description:"quickly use items from faction",onpage:"faction"},armoryfilter:{
	name:"armory filter",enabled:false,description:"filter items in faction armory",
	onpage:"faction"},easypreattack:{name:"show pre-attack button",enabled:false,
	description:"show fight button before attack",onpage:"fight"},easyfight:{
	name:"easy fight",enabled:false,
	description:"move attack button above weapon of choice",onpage:"fight"},
	fighterino:{name:"enhanced attack button",enabled:false,
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
	description:"quickly use items",onpage:"items"},removeuglyimage:{
	name:"hide new images",enabled:false,description:"hide new images from item page",
	onpage:"items"},equipnoconfirm:{name:"equip without confirm",enabled:false,
	description:"remove confirmation from item equip/use",onpage:"items"},
	easyloadoutequip:{name:"fast equip loadout",enabled:false,
	description:"equip loadout clicking in the whole are",onpage:"items"},
	itemsrwbonus:{name:"rw bonus display",enabled:false,
	description:"display rw weapon bonus over the item instead of tooltip",
	onpage:"items"},quickjail:{name:"quick jail",enabled:false,
	description:"quickly bail and bust people",onpage:"jail"},missionhelper:{
	name:"mission helper",enabled:false,
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
	weapon:{primary:0,secondary:1,melee:2},easyoutcome:"leave",easyweapon:"primary",
	easytemp:false};function at(t,e=400){let n;return (...o)=>{
	n&&clearTimeout(n),n=window.setTimeout((()=>t(...o)),e);}}const rt=at((async()=>{
	const t=document.getElementById("nst-ts-message"),e=document.getElementById("nst-tsapikey")
	;if(!t||!e)return;const n=e.value.trim()
	;if(t.innerText&&(t.innerText=""),19!==n.length)return t.classList.contains("text-nstgreen")||t.classList.remove("text-nstgreen"),
	void(t.innerText="Invalid Key Length");const o=await z({api:n,selection:""})
	;if(!(null==o?void 0:o.status))return t.classList.contains("text-nstgreen")||t.classList.remove("text-nstgreen"),
	void(t.innerText="Invalid Key");d({tsapikey:n
	}),t.classList.contains("text-nstgreen")||t.classList.add("text-nstgreen"),
	t.innerText="Key Saved";}),400),st=at((async()=>{
	const t=document.getElementById("nst-message"),e=document.getElementById("nst-apikey")
	;if(!t||!e)return;const n=e.value.trim()
	;if(t.innerText&&(t.innerText=""),16!==n.length)return t.classList.contains("text-nstgreen")||t.classList.remove("text-nstgreen"),
	void(t.innerText="Invalid Key Length");const o={section:"user",select:"profile",
	api:n},i=await q(o)
	;if(!(null==i?void 0:i.status))return t.classList.contains("text-nstgreen")||t.classList.remove("text-nstgreen"),
	void(t.innerText=null==i?void 0:i.error);const{t:a,o:r}=A(i)
	;return void 0===a||void 0===r?(t.classList.contains("text-nstgreen")||t.classList.remove("text-nstgreen"),
	void(t.innerText="API broken, wait for ched to fix")):(d({apikey:n}),C(i)?(d({
	userdata:i
	}),t.classList.contains("text-nstgreen")||t.classList.add("text-nstgreen"),
	t.innerText="Login Successful",
	void kn()):(u("nstdata"),t.classList.contains("text-nstgreen")||t.classList.remove("text-nstgreen"),
	void(t.innerText="You are not allowed, contact seintz[2460991]")))
	}),400),lt=async()=>{
	confirm("Are you sure you want to reset?")&&(u("nstdata"),window.location.reload());
	},ct=t=>{const e=document.getElementById(t);if(!e)return;e.innerHTML=""
	;const n=k({href:"https://www.tornstats.com/settings/general",target:"_blank",
	innerText:"here",classList:"text-nstmain font-bold"}),o=b({classList:"text-base"
	});o.innerHTML="Create your TS key ",o.appendChild(n);const i=b({
	classList:"nst-api-wrap"}),a=b({classList:"nst-block"}).appendChild(g({
	id:"nst-ts-message",classList:"nst-message"})),r="tsapikey",s=v("input",{
	id:"nst-"+r,type:"password",classList:"nst-input m-2",maxLength:19,required:true,
	value:c(r)??""}),l=w({id:"nst-tslogin",classList:"torn-btn m-2",
	innerText:"save",onclick:rt})
	;i.appendChild(o),i.appendChild(a),i.appendChild(s),
	i.appendChild(l),e.appendChild(i);},dt=t=>{const e=document.getElementById(t)
	;if(!e)return;e.innerHTML="";const n=k({
	href:"https://www.torn.com/preferences.php#tab=api",target:"_blank",
	innerText:"limited",classList:"text-nstyellow font-bold"}),o=k({
	href:"https://www.torn.com/preferences.php#tab=api?&step=addNewKey&title=nst&type=3",
	target:"_blank",innerText:"create",classList:"text-nstmain font-bold"}),i=b({
	classList:"text-base"})
	;i.innerHTML="Enter a ",i.appendChild(n),i.innerHTML+=" apikey or ",
	i.appendChild(o),i.innerHTML+=" one ad-hoc";const a=b({classList:"nst-api-wrap"
	}),r=b({classList:"nst-block"}).appendChild(g({id:"nst-message",
	classList:"nst-message"})),s="apikey",l=v("input",{id:"nst-"+s,type:"password",
	classList:"nst-input m-2",maxLength:16,required:true,value:c(s)??""}),d=w({
	id:"nst-login",classList:"torn-btn m-2",innerText:"save",onclick:st}),u=w({
	id:"nst-reset",classList:"torn-btn m-2",innerText:"reset",onclick:lt})
	;a.appendChild(i),
	a.appendChild(r),a.appendChild(l),a.appendChild(d),a.appendChild(u),
	e.appendChild(a);};function ut(t,e){var n=Object.keys(t)
	;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t)
	;e&&(o=o.filter((function(e){
	return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o);}
	return n}function mt(t){for(var e=1;e<arguments.length;e++){
	var n=null!=arguments[e]?arguments[e]:{}
	;e%2?ut(Object(n),true).forEach((function(e){ft(t,e,n[e]);
	})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ut(Object(n)).forEach((function(e){
	Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e));}));}return t}
	function pt(t){
	return (pt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){
	return typeof t}:function(t){
	return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t
	})(t)}function ft(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,
	enumerable:true,configurable:true,writable:true}):t[e]=n,t}function ht(){
	return ht=Object.assign||function(t){for(var e=1;e<arguments.length;e++){
	var n=arguments[e];for(var o in n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o]);}
	return t},ht.apply(this,arguments)}function vt(t){
	if("undefined"!=typeof window&&window.navigator)return !!navigator.userAgent.match(t)
	}
	var bt=vt(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),gt=vt(/Edge/i),wt=vt(/firefox/i),yt=vt(/safari/i)&&!vt(/chrome/i)&&!vt(/android/i),xt=vt(/iP(ad|od|hone)/i),kt=vt(/chrome/i)&&vt(/android/i),Lt={
	capture:false,passive:false};function _t(t,e,n){t.addEventListener(e,n,!bt&&Lt);}
	function Tt(t,e,n){t.removeEventListener(e,n,!bt&&Lt);}function Mt(t,e){if(e){
	if(">"===e[0]&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e)
	;if(t.msMatchesSelector)return t.msMatchesSelector(e)
	;if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch(n){return  false}
	return  false}}function Ot(t){
	return t.host&&t!==document&&t.host.nodeType?t.host:t.parentNode}
	function Dt(t,e,n,o){if(t){n=n||document;do{
	if(null!=e&&(">"===e[0]?t.parentNode===n&&Mt(t,e):Mt(t,e))||o&&t===n)return t
	;if(t===n)break}while(t=Ot(t))}return null}var It,St=/\s+/g;function jt(t,e,n){
	if(t&&e)if(t.classList)t.classList[n?"add":"remove"](e);else {
	var o=(" "+t.className+" ").replace(St," ").replace(" "+e+" "," ")
	;t.className=(o+(n?" "+e:"")).replace(St," ");}}function Et(t,e,n){
	var o=t&&t.style;if(o){
	if(void 0===n)return document.defaultView&&document.defaultView.getComputedStyle?n=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),
	void 0===e?n:n[e]
	;e in o||-1!==e.indexOf("webkit")||(e="-webkit-"+e),o[e]=n+("string"==typeof n?"":"px");
	}}function Pt(t,e){var n="";if("string"==typeof t)n=t;else do{
	var o=Et(t,"transform");o&&"none"!==o&&(n=o+" "+n);}while(!e&&(t=t.parentNode))
	;var i=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix
	;return i&&new i(n)}function $t(t,e,n){if(t){
	var o=t.getElementsByTagName(e),i=0,a=o.length;if(n)for(;i<a;i++)n(o[i],i)
	;return o}return []}function qt(){
	return document.scrollingElement||document.documentElement}
	function zt(t,e,n,o,i){if(t.getBoundingClientRect||t===window){var a,r,s,l,c,d,u
	;if(t!==window&&t.parentNode&&t!==qt()?(r=(a=t.getBoundingClientRect()).top,
	s=a.left,
	l=a.bottom,c=a.right,d=a.height,u=a.width):(r=0,s=0,l=window.innerHeight,
	c=window.innerWidth,
	d=window.innerHeight,u=window.innerWidth),(e||n)&&t!==window&&(i=i||t.parentNode,
	!bt))do{
	if(i&&i.getBoundingClientRect&&("none"!==Et(i,"transform")||n&&"static"!==Et(i,"position"))){
	var m=i.getBoundingClientRect()
	;r-=m.top+parseInt(Et(i,"border-top-width")),s-=m.left+parseInt(Et(i,"border-left-width")),
	l=r+a.height,c=s+a.width;break}}while(i=i.parentNode);if(o&&t!==window){
	var p=Pt(i||t),f=p&&p.a,h=p&&p.d;p&&(l=(r/=h)+(d/=h),c=(s/=f)+(u/=f));}return {
	top:r,left:s,bottom:l,right:c,width:u,height:d}}}function At(t,e,n){
	for(var o=Ut(t,true),i=zt(t)[e];o;){if(!(i>=zt(o)[n]))return o;if(o===qt())break
	;o=Ut(o,false);}return  false}function Ht(t,e,n,o){
	for(var i=0,a=0,r=t.children;a<r.length;){
	if("none"!==r[a].style.display&&r[a]!==Ge.ghost&&(o||r[a]!==Ge.dragged)&&Dt(r[a],n.draggable,t,false)){
	if(i===e)return r[a];i++;}a++;}return null}function Ct(t,e){
	for(var n=t.lastElementChild;n&&(n===Ge.ghost||"none"===Et(n,"display")||e&&!Mt(n,e));)n=n.previousElementSibling
	;return n||null}function Rt(t,e){var n=0;if(!t||!t.parentNode)return  -1
	;for(;t=t.previousElementSibling;)"TEMPLATE"===t.nodeName.toUpperCase()||t===Ge.clone||e&&!Mt(t,e)||n++
	;return n}function Nt(t){var e=0,n=0,o=qt();if(t)do{var i=Pt(t),a=i.a,r=i.d
	;e+=t.scrollLeft*a,n+=t.scrollTop*r;}while(t!==o&&(t=t.parentNode));return [e,n]}
	function Ut(t,e){if(!t||!t.getBoundingClientRect)return qt();var n=t,o=false;do{
	if(n.clientWidth<n.scrollWidth||n.clientHeight<n.scrollHeight){var i=Et(n)
	;if(n.clientWidth<n.scrollWidth&&("auto"==i.overflowX||"scroll"==i.overflowX)||n.clientHeight<n.scrollHeight&&("auto"==i.overflowY||"scroll"==i.overflowY)){
	if(!n.getBoundingClientRect||n===document.body)return qt();if(o||e)return n;o=true;
	}}}while(n=n.parentNode);return qt()}function Ft(t,e){
	return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)
	}function Bt(t,e){return function(){if(!It){var n=arguments
	;1===n.length?t.call(this,n[0]):t.apply(this,n),It=setTimeout((function(){
	It=void 0;}),e);}}}function Gt(t,e,n){t.scrollLeft+=e,t.scrollTop+=n;}
	function Wt(t){var e=window.Polymer,n=window.jQuery||window.Zepto
	;return e&&e.dom?e.dom(t).cloneNode(true):n?n(t).clone(true)[0]:t.cloneNode(true)}
	function Xt(t,e,n){var o={};return Array.from(t.children).forEach((function(i){
	var a,r,s,l;if(Dt(i,e.draggable,t,false)&&!i.animated&&i!==n){var c=zt(i)
	;o.left=Math.min(null!==(a=o.left)&&void 0!==a?a:1/0,c.left),
	o.top=Math.min(null!==(r=o.top)&&void 0!==r?r:1/0,c.top),
	o.right=Math.max(null!==(s=o.right)&&void 0!==s?s:-1/0,c.right),
	o.bottom=Math.max(null!==(l=o.bottom)&&void 0!==l?l:-1/0,c.bottom);}
	})),o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}
	var Jt="Sortable"+(new Date).getTime(),Kt=[],Yt={initializeByDefault:true},Qt={
	mount:function(t){for(var e in Yt)Yt.hasOwnProperty(e)&&!(e in t)&&(t[e]=Yt[e])
	;Kt.forEach((function(e){
	if(e.pluginName===t.pluginName)throw "Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")
	})),Kt.push(t);},pluginEvent:function(t,e,n){var o=this
	;this.eventCanceled=false,n.cancel=function(){o.eventCanceled=true;};var i=t+"Global"
	;Kt.forEach((function(o){
	e[o.pluginName]&&(e[o.pluginName][i]&&e[o.pluginName][i](mt({sortable:e
	},n)),e.options[o.pluginName]&&e[o.pluginName][t]&&e[o.pluginName][t](mt({
	sortable:e},n)));}));},initializePlugins:function(t,e,n,o){
	for(var i in Kt.forEach((function(o){var i=o.pluginName
	;if(t.options[i]||o.initializeByDefault){var a=new o(t,e,t.options)
	;a.sortable=t,a.options=t.options,t[i]=a,ht(n,a.defaults);}
	})),t.options)if(t.options.hasOwnProperty(i)){
	var a=this.modifyOption(t,i,t.options[i]);void 0!==a&&(t.options[i]=a);}},
	getEventProperties:function(t,e){var n={};return Kt.forEach((function(o){
	"function"==typeof o.eventProperties&&ht(n,o.eventProperties.call(e[o.pluginName],t));
	})),n},modifyOption:function(t,e,n){var o;return Kt.forEach((function(i){
	t[i.pluginName]&&i.optionListeners&&"function"==typeof i.optionListeners[e]&&(o=i.optionListeners[e].call(t[i.pluginName],n));
	})),o}},Vt=["evt"],Zt=function(t,e){
	var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.evt,i=function(t,e){
	if(null==t)return {};var n,o,i=function(t,e){if(null==t)return {}
	;var n,o,i={},a=Object.keys(t)
	;for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e)
	;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t)
	;for(o=0;o<a.length;o++)n=a[o],
	e.indexOf(n)>=0||{}.propertyIsEnumerable.call(t,n)&&(i[n]=t[n]);}return i}(n,Vt)
	;Qt.pluginEvent.bind(Ge)(t,e,mt({dragEl:ee,parentEl:ne,ghostEl:oe,rootEl:ie,
	nextEl:ae,lastDownEl:re,cloneEl:se,cloneHidden:le,dragStarted:xe,putSortable:fe,
	activeSortable:Ge.active,originalEvent:o,oldIndex:ce,oldDraggableIndex:ue,
	newIndex:de,newDraggableIndex:me,hideGhostForTarget:Ne,unhideGhostForTarget:Ue,
	cloneNowHidden:function(){le=true;},cloneNowShown:function(){le=false;},
	dispatchSortableEvent:function(t){te({sortable:e,name:t,originalEvent:o});}},i));}
	;function te(t){!function(t){
	var e=t.sortable,n=t.rootEl,o=t.name,i=t.targetEl,a=t.cloneEl,r=t.toEl,s=t.fromEl,l=t.oldIndex,c=t.newIndex,d=t.oldDraggableIndex,u=t.newDraggableIndex,m=t.originalEvent,p=t.putSortable,f=t.extraEventProperties
	;if(e=e||n&&n[Jt]){
	var h,v=e.options,b="on"+o.charAt(0).toUpperCase()+o.substr(1)
	;!window.CustomEvent||bt||gt?(h=document.createEvent("Event")).initEvent(o,true,true):h=new CustomEvent(o,{
	bubbles:true,cancelable:true
	}),h.to=r||n,h.from=s||n,h.item=i||n,h.clone=a,h.oldIndex=l,
	h.newIndex=c,h.oldDraggableIndex=d,
	h.newDraggableIndex=u,h.originalEvent=m,h.pullMode=p?p.lastPutMode:void 0
	;var g=mt(mt({},f),Qt.getEventProperties(o,e));for(var w in g)h[w]=g[w]
	;n&&n.dispatchEvent(h),v[b]&&v[b].call(e,h);}}(mt({putSortable:fe,cloneEl:se,
	targetEl:ee,rootEl:ie,oldIndex:ce,oldDraggableIndex:ue,newIndex:de,
	newDraggableIndex:me},t));}
	var ee,ne,oe,ie,ae,re,se,le,ce,de,ue,me,pe,fe,he,ve,be,ge,we,ye,xe,ke,Le,_e,Te,Me=false,Oe=false,De=[],Ie=false,Se=false,je=[],Ee=false,Pe=[],$e="undefined"!=typeof document,qe=xt,ze=gt||bt?"cssFloat":"float",Ae=$e&&!kt&&!xt&&"draggable"in document.createElement("div"),He=function(){
	if($e){if(bt)return  false;var t=document.createElement("x")
	;return t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}
	}(),Ce=function(t,e){
	var n=Et(t),o=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),i=Ht(t,0,e),a=Ht(t,1,e),r=i&&Et(i),s=a&&Et(a),l=r&&parseInt(r.marginLeft)+parseInt(r.marginRight)+zt(i).width,c=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+zt(a).width
	;if("flex"===n.display)return "column"===n.flexDirection||"column-reverse"===n.flexDirection?"vertical":"horizontal"
	;if("grid"===n.display)return n.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal"
	;if(i&&r.float&&"none"!==r.float){var d="left"===r.float?"left":"right"
	;return !a||"both"!==s.clear&&s.clear!==d?"horizontal":"vertical"}
	return i&&("block"===r.display||"flex"===r.display||"table"===r.display||"grid"===r.display||l>=o&&"none"===n[ze]||a&&"none"===n[ze]&&l+c>o)?"vertical":"horizontal"
	},Re=function(t){function e(t,n){return function(o,i,a,r){
	var s=o.options.group.name&&i.options.group.name&&o.options.group.name===i.options.group.name
	;if(null==t&&(n||s))return  true;if(null==t||false===t)return  false
	;if(n&&"clone"===t)return t
	;if("function"==typeof t)return e(t(o,i,a,r),n)(o,i,a,r)
	;var l=(n?o:i).options.group.name
	;return  true===t||"string"==typeof t&&t===l||t.join&&t.indexOf(l)>-1}}
	var n={},o=t.group;o&&"object"==pt(o)||(o={name:o
	}),n.name=o.name,n.checkPull=e(o.pull,true),
	n.checkPut=e(o.put),n.revertClone=o.revertClone,t.group=n;},Ne=function(){
	!He&&oe&&Et(oe,"display","none");},Ue=function(){!He&&oe&&Et(oe,"display","");}
	;$e&&!kt&&document.addEventListener("click",(function(t){
	if(Oe)return t.preventDefault(),
	t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),
	Oe=false,false}),true);var Fe=function(t){if(ee){t=t.touches?t.touches[0]:t
	;var e=(i=t.clientX,a=t.clientY,De.some((function(t){
	var e=t[Jt].options.emptyInsertThreshold;if(e&&!Ct(t)){
	var n=zt(t),o=i>=n.left-e&&i<=n.right+e,s=a>=n.top-e&&a<=n.bottom+e
	;return o&&s?r=t:void 0}})),r);if(e){var n={}
	;for(var o in t)t.hasOwnProperty(o)&&(n[o]=t[o])
	;n.target=n.rootEl=e,n.preventDefault=void 0,
	n.stopPropagation=void 0,e[Jt]._onDragOver(n);}}var i,a,r;},Be=function(t){
	ee&&ee.parentNode[Jt]._isOutsideThisEl(t.target);};function Ge(t,e){
	if(!t||!t.nodeType||1!==t.nodeType)throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t))
	;this.el=t,this.options=e=ht({},e),t[Jt]=this;var n,o,i={group:null,sort:true,
	disabled:false,store:null,handle:null,
	draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:false,
	invertedSwapThreshold:null,removeCloneOnHide:true,direction:function(){
	return Ce(t,this.options)},ghostClass:"sortable-ghost",
	chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",
	filter:null,preventOnFilter:true,animation:0,easing:null,setData:function(t,e){
	t.setData("Text",e.textContent);},dropBubble:false,dragoverBubble:false,
	dataIdAttr:"data-id",delay:0,delayOnTouchOnly:false,
	touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,
	forceFallback:false,fallbackClass:"sortable-fallback",fallbackOnBody:false,
	fallbackTolerance:0,fallbackOffset:{x:0,y:0},
	supportPointer:false!==Ge.supportPointer&&"PointerEvent"in window&&(!yt||xt),
	emptyInsertThreshold:5}
	;for(var a in Qt.initializePlugins(this,t,i),i)!(a in e)&&(e[a]=i[a])
	;for(var r in Re(e),
	this)"_"===r.charAt(0)&&"function"==typeof this[r]&&(this[r]=this[r].bind(this))
	;this.nativeDraggable=!e.forceFallback&&Ae,
	this.nativeDraggable&&(this.options.touchStartThreshold=1),
	e.supportPointer?_t(t,"pointerdown",this._onTapStart):(_t(t,"mousedown",this._onTapStart),
	_t(t,"touchstart",this._onTapStart)),
	this.nativeDraggable&&(_t(t,"dragover",this),
	_t(t,"dragenter",this)),De.push(this.el),
	e.store&&e.store.get&&this.sort(e.store.get(this)||[]),ht(this,(o=[],{
	captureAnimationState:function(){
	o=[],this.options.animation&&[].slice.call(this.el.children).forEach((function(t){
	if("none"!==Et(t,"display")&&t!==Ge.ghost){o.push({target:t,rect:zt(t)})
	;var e=mt({},o[o.length-1].rect);if(t.thisAnimationDuration){var n=Pt(t,true)
	;n&&(e.top-=n.f,e.left-=n.e);}t.fromRect=e;}}));},addAnimationState:function(t){
	o.push(t);},removeAnimationState:function(t){o.splice(function(t,e){
	for(var n in t)if(t.hasOwnProperty(n))for(var o in e)if(e.hasOwnProperty(o)&&e[o]===t[n][o])return +n
	;return  -1}(o,{target:t}),1);},animateAll:function(t){var e=this
	;if(!this.options.animation)return clearTimeout(n),
	void("function"==typeof t&&t());var i=false,a=0;o.forEach((function(t){
	var n=0,o=t.target,r=o.fromRect,s=zt(o),l=o.prevFromRect,c=o.prevToRect,d=t.rect,u=Pt(o,true)
	;u&&(s.top-=u.f,
	s.left-=u.e),o.toRect=s,o.thisAnimationDuration&&Ft(l,s)&&!Ft(r,s)&&(d.top-s.top)/(d.left-s.left)===(r.top-s.top)/(r.left-s.left)&&(n=function(t,e,n,o){
	return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-n.top,2)+Math.pow(e.left-n.left,2))*o.animation
	}(d,l,c,e.options)),
	Ft(s,r)||(o.prevFromRect=r,o.prevToRect=s,n||(n=e.options.animation),
	e.animate(o,d,s,n)),
	n&&(i=true,a=Math.max(a,n),clearTimeout(o.animationResetTimer),
	o.animationResetTimer=setTimeout((function(){
	o.animationTime=0,o.prevFromRect=null,
	o.fromRect=null,o.prevToRect=null,o.thisAnimationDuration=null;
	}),n),o.thisAnimationDuration=n);})),clearTimeout(n),i?n=setTimeout((function(){
	"function"==typeof t&&t();}),a):"function"==typeof t&&t(),o=[];},
	animate:function(t,e,n,o){if(o){Et(t,"transition",""),Et(t,"transform","")
	;var i=Pt(this.el),a=i&&i.a,r=i&&i.d,s=(e.left-n.left)/(a||1),l=(e.top-n.top)/(r||1)
	;t.animatingX=!!s,
	t.animatingY=!!l,Et(t,"transform","translate3d("+s+"px,"+l+"px,0)"),
	this.forRepaintDummy=function(t){return t.offsetWidth
	}(t),Et(t,"transition","transform "+o+"ms"+(this.options.easing?" "+this.options.easing:"")),
	Et(t,"transform","translate3d(0,0,0)"),
	"number"==typeof t.animated&&clearTimeout(t.animated),
	t.animated=setTimeout((function(){
	Et(t,"transition",""),Et(t,"transform",""),t.animated=false,
	t.animatingX=false,t.animatingY=false;}),o);}}}));}function We(t,e,n,o,i,a,r,s){
	var l,c,d=t[Jt],u=d.options.onMove
	;return !window.CustomEvent||bt||gt?(l=document.createEvent("Event")).initEvent("move",true,true):l=new CustomEvent("move",{
	bubbles:true,cancelable:true
	}),l.to=e,l.from=t,l.dragged=n,l.draggedRect=o,l.related=i||e,
	l.relatedRect=a||zt(e),l.willInsertAfter=s,l.originalEvent=r,t.dispatchEvent(l),
	u&&(c=u.call(d,l,r)),c}function Xe(t){t.draggable=false;}function Je(){Ee=false;}
	function Ke(t){
	for(var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,o=0;n--;)o+=e.charCodeAt(n)
	;return o.toString(36)}function Ye(t){return setTimeout(t,0)}function Qe(t){
	return clearTimeout(t)}Ge.prototype={constructor:Ge,
	_isOutsideThisEl:function(t){this.el.contains(t)||t===this.el||(ke=null);},
	_getDirection:function(t,e){
	return "function"==typeof this.options.direction?this.options.direction.call(this,t,e,ee):this.options.direction
	},_onTapStart:function(t){if(t.cancelable){
	var e=this,n=this.el,o=this.options,i=o.preventOnFilter,a=t.type,r=t.touches&&t.touches[0]||t.pointerType&&"touch"===t.pointerType&&t,s=(r||t).target,l=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||s,c=o.filter
	;if(function(t){Pe.length=0
	;for(var e=t.getElementsByTagName("input"),n=e.length;n--;){var o=e[n]
	;o.checked&&Pe.push(o);}
	}(n),!ee&&!(/mousedown|pointerdown/.test(a)&&0!==t.button||o.disabled)&&!l.isContentEditable&&(this.nativeDraggable||!yt||!s||"SELECT"!==s.tagName.toUpperCase())&&!((s=Dt(s,o.draggable,n,false))&&s.animated||re===s)){
	if(ce=Rt(s),ue=Rt(s,o.draggable),"function"==typeof c){
	if(c.call(this,t,s,this))return te({sortable:e,rootEl:l,name:"filter",
	targetEl:s,toEl:n,fromEl:n}),Zt("filter",e,{evt:t}),void(i&&t.preventDefault())
	}else if(c&&(c=c.split(",").some((function(o){
	if(o=Dt(l,o.trim(),n,false))return te({sortable:e,rootEl:o,name:"filter",
	targetEl:s,fromEl:n,toEl:n}),Zt("filter",e,{evt:t}),true
	}))))return void(i&&t.preventDefault())
	;o.handle&&!Dt(l,o.handle,n,false)||this._prepareDragStart(t,r,s);}}},
	_prepareDragStart:function(t,e,n){
	var o,i=this,a=i.el,r=i.options,s=a.ownerDocument;if(n&&!ee&&n.parentNode===a){
	var l=zt(n)
	;if(ie=a,ne=(ee=n).parentNode,ae=ee.nextSibling,re=n,pe=r.group,Ge.dragged=ee,
	he={target:ee,clientX:(e||t).clientX,clientY:(e||t).clientY
	},we=he.clientX-l.left,
	ye=he.clientY-l.top,this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,
	ee.style["will-change"]="all",o=function(){Zt("delayEnded",i,{evt:t
	}),Ge.eventCanceled?i._onDrop():(i._disableDelayedDragEvents(),
	!wt&&i.nativeDraggable&&(ee.draggable=true),i._triggerDragStart(t,e),te({
	sortable:i,name:"choose",originalEvent:t}),jt(ee,r.chosenClass,true));
	},r.ignore.split(",").forEach((function(t){$t(ee,t.trim(),Xe);
	})),_t(s,"dragover",Fe),
	_t(s,"mousemove",Fe),_t(s,"touchmove",Fe),r.supportPointer?(_t(s,"pointerup",i._onDrop),
	!this.nativeDraggable&&_t(s,"pointercancel",i._onDrop)):(_t(s,"mouseup",i._onDrop),
	_t(s,"touchend",i._onDrop),
	_t(s,"touchcancel",i._onDrop)),wt&&this.nativeDraggable&&(this.options.touchStartThreshold=4,
	ee.draggable=true),Zt("delayStart",this,{evt:t
	}),!r.delay||r.delayOnTouchOnly&&!e||this.nativeDraggable&&(gt||bt))o();else {
	if(Ge.eventCanceled)return void this._onDrop()
	;r.supportPointer?(_t(s,"pointerup",i._disableDelayedDrag),
	_t(s,"pointercancel",i._disableDelayedDrag)):(_t(s,"mouseup",i._disableDelayedDrag),
	_t(s,"touchend",i._disableDelayedDrag),
	_t(s,"touchcancel",i._disableDelayedDrag)),
	_t(s,"mousemove",i._delayedDragTouchMoveHandler),
	_t(s,"touchmove",i._delayedDragTouchMoveHandler),
	r.supportPointer&&_t(s,"pointermove",i._delayedDragTouchMoveHandler),
	i._dragStartTimer=setTimeout(o,r.delay);}}},
	_delayedDragTouchMoveHandler:function(t){var e=t.touches?t.touches[0]:t
	;Math.max(Math.abs(e.clientX-this._lastX),Math.abs(e.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag();
	},_disableDelayedDrag:function(){
	ee&&Xe(ee),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents();},
	_disableDelayedDragEvents:function(){var t=this.el.ownerDocument
	;Tt(t,"mouseup",this._disableDelayedDrag),
	Tt(t,"touchend",this._disableDelayedDrag),
	Tt(t,"touchcancel",this._disableDelayedDrag),
	Tt(t,"pointerup",this._disableDelayedDrag),
	Tt(t,"pointercancel",this._disableDelayedDrag),
	Tt(t,"mousemove",this._delayedDragTouchMoveHandler),
	Tt(t,"touchmove",this._delayedDragTouchMoveHandler),
	Tt(t,"pointermove",this._delayedDragTouchMoveHandler);},
	_triggerDragStart:function(t,e){
	e=e||"touch"==t.pointerType&&t,!this.nativeDraggable||e?this.options.supportPointer?_t(document,"pointermove",this._onTouchMove):_t(document,e?"touchmove":"mousemove",this._onTouchMove):(_t(ee,"dragend",this),
	_t(ie,"dragstart",this._onDragStart));try{document.selection?Ye((function(){
	document.selection.empty();})):window.getSelection().removeAllRanges();}catch(n){}
	},_dragStarted:function(t,e){if(Me=false,ie&&ee){Zt("dragStarted",this,{evt:e
	}),this.nativeDraggable&&_t(document,"dragover",Be);var n=this.options
	;!t&&jt(ee,n.dragClass,false),
	jt(ee,n.ghostClass,true),Ge.active=this,t&&this._appendGhost(),te({sortable:this,
	name:"start",originalEvent:e});}else this._nulling();},
	_emulateDragOver:function(){if(ve){
	this._lastX=ve.clientX,this._lastY=ve.clientY,Ne()
	;for(var t=document.elementFromPoint(ve.clientX,ve.clientY),e=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(ve.clientX,ve.clientY))!==e;)e=t
	;if(ee.parentNode[Jt]._isOutsideThisEl(t),e)do{if(e[Jt]&&e[Jt]._onDragOver({
	clientX:ve.clientX,clientY:ve.clientY,target:t,rootEl:e
	})&&!this.options.dragoverBubble)break;t=e;}while(e=Ot(e));Ue();}},
	_onTouchMove:function(t){if(he){
	var e=this.options,n=e.fallbackTolerance,o=e.fallbackOffset,i=t.touches?t.touches[0]:t,a=oe&&Pt(oe,true),r=oe&&a&&a.a,s=oe&&a&&a.d,l=qe&&Te&&Nt(Te),c=(i.clientX-he.clientX+o.x)/(r||1)+(l?l[0]-je[0]:0)/(r||1),d=(i.clientY-he.clientY+o.y)/(s||1)+(l?l[1]-je[1]:0)/(s||1)
	;if(!Ge.active&&!Me){
	if(n&&Math.max(Math.abs(i.clientX-this._lastX),Math.abs(i.clientY-this._lastY))<n)return
	;this._onDragStart(t,true);}if(oe){a?(a.e+=c-(be||0),a.f+=d-(ge||0)):a={a:1,b:0,
	c:0,d:1,e:c,f:d}
	;var u="matrix(".concat(a.a,",").concat(a.b,",").concat(a.c,",").concat(a.d,",").concat(a.e,",").concat(a.f,")")
	;Et(oe,"webkitTransform",u),
	Et(oe,"mozTransform",u),Et(oe,"msTransform",u),Et(oe,"transform",u),
	be=c,ge=d,ve=i;}t.cancelable&&t.preventDefault();}},_appendGhost:function(){
	if(!oe){
	var t=this.options.fallbackOnBody?document.body:ie,e=zt(ee,true,qe,true,t),n=this.options
	;if(qe){
	for(Te=t;"static"===Et(Te,"position")&&"none"===Et(Te,"transform")&&Te!==document;)Te=Te.parentNode
	;Te!==document.body&&Te!==document.documentElement?(Te===document&&(Te=qt()),
	e.top+=Te.scrollTop,e.left+=Te.scrollLeft):Te=qt(),je=Nt(Te);}
	jt(oe=ee.cloneNode(true),n.ghostClass,false),
	jt(oe,n.fallbackClass,true),jt(oe,n.dragClass,true),
	Et(oe,"transition",""),Et(oe,"transform",""),
	Et(oe,"box-sizing","border-box"),Et(oe,"margin",0),
	Et(oe,"top",e.top),Et(oe,"left",e.left),
	Et(oe,"width",e.width),Et(oe,"height",e.height),
	Et(oe,"opacity","0.8"),Et(oe,"position",qe?"absolute":"fixed"),
	Et(oe,"zIndex","100000"),
	Et(oe,"pointerEvents","none"),Ge.ghost=oe,t.appendChild(oe),
	Et(oe,"transform-origin",we/parseInt(oe.style.width)*100+"% "+ye/parseInt(oe.style.height)*100+"%");
	}},_onDragStart:function(t,e){var n=this,o=t.dataTransfer,i=n.options
	;Zt("dragStart",this,{evt:t
	}),Ge.eventCanceled?this._onDrop():(Zt("setupClone",this),
	Ge.eventCanceled||((se=Wt(ee)).removeAttribute("id"),
	se.draggable=false,se.style["will-change"]="",
	this._hideClone(),jt(se,this.options.chosenClass,false),
	Ge.clone=se),n.cloneId=Ye((function(){
	Zt("clone",n),Ge.eventCanceled||(n.options.removeCloneOnHide||ie.insertBefore(se,ee),
	n._hideClone(),te({sortable:n,name:"clone"}));
	})),!e&&jt(ee,i.dragClass,true),e?(Oe=true,
	n._loopId=setInterval(n._emulateDragOver,50)):(Tt(document,"mouseup",n._onDrop),
	Tt(document,"touchend",n._onDrop),
	Tt(document,"touchcancel",n._onDrop),o&&(o.effectAllowed="move",
	i.setData&&i.setData.call(n,o,ee)),
	_t(document,"drop",n),Et(ee,"transform","translateZ(0)")),
	Me=true,n._dragStartId=Ye(n._dragStarted.bind(n,e,t)),
	_t(document,"selectstart",n),
	xe=true,window.getSelection().removeAllRanges(),yt&&Et(document.body,"user-select","none"));
	},_onDragOver:function(t){
	var e,n,o,i,a=this.el,r=t.target,s=this.options,l=s.group,c=Ge.active,d=pe===l,u=s.sort,m=fe||c,p=this,f=false
	;if(!Ee){
	if(void 0!==t.preventDefault&&t.cancelable&&t.preventDefault(),r=Dt(r,s.draggable,a,true),
	I("dragOver"),Ge.eventCanceled)return f
	;if(ee.contains(t.target)||r.animated&&r.animatingX&&r.animatingY||p._ignoreWhileAnimating===r)return j(false)
	;if(Oe=false,
	c&&!s.disabled&&(d?u||(o=ne!==ie):fe===this||(this.lastPutMode=pe.checkPull(this,c,ee,t))&&l.checkPut(this,c,ee,t))){
	if(i="vertical"===this._getDirection(t,r),
	e=zt(ee),I("dragOverValid"),Ge.eventCanceled)return f
	;if(o)return ne=ie,S(),this._hideClone(),
	I("revert"),Ge.eventCanceled||(ae?ie.insertBefore(ee,ae):ie.appendChild(ee)),
	j(true);var h=Ct(a,s.draggable);if(!h||function(t,e,n){
	var o=zt(Ct(n.el,n.options.draggable)),i=Xt(n.el,n.options,oe)
	;return e?t.clientX>i.right+10||t.clientY>o.bottom&&t.clientX>o.left:t.clientY>i.bottom+10||t.clientX>o.right&&t.clientY>o.top
	}(t,i,this)&&!h.animated){if(h===ee)return j(false)
	;if(h&&a===t.target&&(r=h),r&&(n=zt(r)),false!==We(ie,a,ee,e,r,n,t,!!r))return S(),
	h&&h.nextSibling?a.insertBefore(ee,h.nextSibling):a.appendChild(ee),
	ne=a,E(),j(true)}else if(h&&function(t,e,n){
	var o=zt(Ht(n.el,0,n.options,true)),i=Xt(n.el,n.options,oe)
	;return e?t.clientX<i.left-10||t.clientY<o.top&&t.clientX<o.right:t.clientY<i.top-10||t.clientY<o.bottom&&t.clientX<o.left
	}(t,i,this)){var v=Ht(a,0,s,true);if(v===ee)return j(false)
	;if(n=zt(r=v),false!==We(ie,a,ee,e,r,n,t,false))return S(),
	a.insertBefore(ee,v),ne=a,E(),j(true)}else if(r.parentNode===a){n=zt(r)
	;var b,g,w,y=ee.parentNode!==a,x=!function(t,e,n){
	var o=n?t.left:t.top,i=n?t.right:t.bottom,a=n?t.width:t.height,r=n?e.left:e.top,s=n?e.right:e.bottom,l=n?e.width:e.height
	;return o===r||i===s||o+a/2===r+l/2
	}(ee.animated&&ee.toRect||e,r.animated&&r.toRect||n,i),k=i?"top":"left",L=At(r,"top","top")||At(ee,"top","top"),_=L?L.scrollTop:void 0
	;if(ke!==r&&(g=n[k],Ie=false,Se=!x&&s.invertSwap||y),b=function(t,e,n,o,i,a,r,s){
	var l=o?t.clientY:t.clientX,c=o?n.height:n.width,d=o?n.top:n.left,u=o?n.bottom:n.right,m=false
	;if(!r)if(s&&_e<c*i){
	if(!Ie&&(1===Le?l>d+c*a/2:l<u-c*a/2)&&(Ie=true),Ie)m=true;else if(1===Le?l<d+_e:l>u-_e)return -Le
	}else if(l>d+c*(1-i)/2&&l<u-c*(1-i)/2)return function(t){
	return Rt(ee)<Rt(t)?1:-1}(e)
	;return (m=m||r)&&(l<d+c*a/2||l>u-c*a/2)?l>d+c/2?1:-1:0
	}(t,r,n,i,x?1:s.swapThreshold,null==s.invertedSwapThreshold?s.swapThreshold:s.invertedSwapThreshold,Se,ke===r),
	0!==b){var T=Rt(ee);do{T-=b,w=ne.children[T];
	}while(w&&("none"===Et(w,"display")||w===oe))}if(0===b||w===r)return j(false);ke=r,
	Le=b;var M=r.nextElementSibling,O=false,D=We(ie,a,ee,e,r,n,t,O=1===b)
	;if(false!==D)return 1!==D&&-1!==D||(O=1===D),
	Ee=true,setTimeout(Je,30),S(),O&&!M?a.appendChild(ee):r.parentNode.insertBefore(ee,O?M:r),
	L&&Gt(L,0,_-L.scrollTop),
	ne=ee.parentNode,void 0===g||Se||(_e=Math.abs(g-zt(r)[k])),E(),j(true)}
	if(a.contains(ee))return j(false)}return  false}function I(s,l){Zt(s,p,mt({evt:t,
	isOwner:d,axis:i?"vertical":"horizontal",revert:o,dragRect:e,targetRect:n,
	canSort:u,fromSortable:m,target:r,completed:j,onMove:function(n,o){
	return We(ie,a,ee,e,n,zt(n),t,o)},changed:E},l));}function S(){
	I("dragOverAnimationCapture"),
	p.captureAnimationState(),p!==m&&m.captureAnimationState();}function j(e){
	return I("dragOverCompleted",{insertion:e
	}),e&&(d?c._hideClone():c._showClone(p),
	p!==m&&(jt(ee,fe?fe.options.ghostClass:c.options.ghostClass,false),
	jt(ee,s.ghostClass,true)),fe!==p&&p!==Ge.active?fe=p:p===Ge.active&&fe&&(fe=null),
	m===p&&(p._ignoreWhileAnimating=r),p.animateAll((function(){
	I("dragOverAnimationComplete"),p._ignoreWhileAnimating=null;
	})),p!==m&&(m.animateAll(),
	m._ignoreWhileAnimating=null)),(r===ee&&!ee.animated||r===a&&!r.animated)&&(ke=null),
	s.dragoverBubble||t.rootEl||r===document||(ee.parentNode[Jt]._isOutsideThisEl(t.target),
	!e&&Fe(t)),!s.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),f=true}
	function E(){de=Rt(ee),me=Rt(ee,s.draggable),te({sortable:p,name:"change",
	toEl:a,newIndex:de,newDraggableIndex:me,originalEvent:t});}},
	_ignoreWhileAnimating:null,_offMoveEvents:function(){
	Tt(document,"mousemove",this._onTouchMove),
	Tt(document,"touchmove",this._onTouchMove),
	Tt(document,"pointermove",this._onTouchMove),
	Tt(document,"dragover",Fe),Tt(document,"mousemove",Fe),
	Tt(document,"touchmove",Fe);},_offUpEvents:function(){var t=this.el.ownerDocument
	;Tt(t,"mouseup",this._onDrop),
	Tt(t,"touchend",this._onDrop),Tt(t,"pointerup",this._onDrop),
	Tt(t,"pointercancel",this._onDrop),
	Tt(t,"touchcancel",this._onDrop),Tt(document,"selectstart",this);},
	_onDrop:function(t){var e=this.el,n=this.options
	;de=Rt(ee),me=Rt(ee,n.draggable),Zt("drop",this,{evt:t
	}),ne=ee&&ee.parentNode,de=Rt(ee),
	me=Rt(ee,n.draggable),Ge.eventCanceled||(Me=false,
	Se=false,Ie=false,clearInterval(this._loopId),
	clearTimeout(this._dragStartTimer),Qe(this.cloneId),
	Qe(this._dragStartId),this.nativeDraggable&&(Tt(document,"drop",this),
	Tt(e,"dragstart",this._onDragStart)),
	this._offMoveEvents(),this._offUpEvents(),yt&&Et(document.body,"user-select",""),
	Et(ee,"transform",""),
	t&&(xe&&(t.cancelable&&t.preventDefault(),!n.dropBubble&&t.stopPropagation()),
	oe&&oe.parentNode&&oe.parentNode.removeChild(oe),
	(ie===ne||fe&&"clone"!==fe.lastPutMode)&&se&&se.parentNode&&se.parentNode.removeChild(se),
	ee&&(this.nativeDraggable&&Tt(ee,"dragend",this),
	Xe(ee),ee.style["will-change"]="",
	xe&&!Me&&jt(ee,fe?fe.options.ghostClass:this.options.ghostClass,false),
	jt(ee,this.options.chosenClass,false),te({sortable:this,name:"unchoose",toEl:ne,
	newIndex:null,newDraggableIndex:null,originalEvent:t}),ie!==ne?(de>=0&&(te({
	rootEl:ne,name:"add",toEl:ne,fromEl:ie,originalEvent:t}),te({sortable:this,
	name:"remove",toEl:ne,originalEvent:t}),te({rootEl:ne,name:"sort",toEl:ne,
	fromEl:ie,originalEvent:t}),te({sortable:this,name:"sort",toEl:ne,
	originalEvent:t})),fe&&fe.save()):de!==ce&&de>=0&&(te({sortable:this,
	name:"update",toEl:ne,originalEvent:t}),te({sortable:this,name:"sort",toEl:ne,
	originalEvent:t})),Ge.active&&(null!=de&&-1!==de||(de=ce,me=ue),te({
	sortable:this,name:"end",toEl:ne,originalEvent:t
	}),this.save())))),this._nulling();},_nulling:function(){
	Zt("nulling",this),ie=ee=ne=oe=ae=se=re=le=he=ve=xe=de=me=ce=ue=ke=Le=fe=pe=Ge.dragged=Ge.ghost=Ge.clone=Ge.active=null,
	Pe.forEach((function(t){t.checked=true;})),Pe.length=be=ge=0;},
	handleEvent:function(t){switch(t.type){case "drop":case "dragend":this._onDrop(t)
	;break;case "dragenter":case "dragover":ee&&(this._onDragOver(t),function(t){
	t.dataTransfer&&(t.dataTransfer.dropEffect="move"),
	t.cancelable&&t.preventDefault();}(t));break;case "selectstart":t.preventDefault();
	}},toArray:function(){
	for(var t,e=[],n=this.el.children,o=0,i=n.length,a=this.options;o<i;o++)Dt(t=n[o],a.draggable,this.el,false)&&e.push(t.getAttribute(a.dataIdAttr)||Ke(t))
	;return e},sort:function(t,e){var n={},o=this.el
	;this.toArray().forEach((function(t,e){var i=o.children[e]
	;Dt(i,this.options.draggable,o,false)&&(n[t]=i);
	}),this),e&&this.captureAnimationState(),t.forEach((function(t){
	n[t]&&(o.removeChild(n[t]),o.appendChild(n[t]));})),e&&this.animateAll();},
	save:function(){var t=this.options.store;t&&t.set&&t.set(this);},
	closest:function(t,e){return Dt(t,e||this.options.draggable,this.el,false)},
	option:function(t,e){var n=this.options;if(void 0===e)return n[t]
	;var o=Qt.modifyOption(this,t,e);n[t]=void 0!==o?o:e,"group"===t&&Re(n);},
	destroy:function(){Zt("destroy",this);var t=this.el
	;t[Jt]=null,Tt(t,"mousedown",this._onTapStart),
	Tt(t,"touchstart",this._onTapStart),
	Tt(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(Tt(t,"dragover",this),
	Tt(t,"dragenter",this)),
	[].forEach.call(t.querySelectorAll("[draggable]"),(function(t){
	t.removeAttribute("draggable");
	})),this._onDrop(),this._disableDelayedDragEvents(),
	De.splice(De.indexOf(this.el),1),this.el=t=null;},_hideClone:function(){if(!le){
	if(Zt("hideClone",this),Ge.eventCanceled)return
	;Et(se,"display","none"),this.options.removeCloneOnHide&&se.parentNode&&se.parentNode.removeChild(se),
	le=true;}},_showClone:function(t){if("clone"===t.lastPutMode){if(le){
	if(Zt("showClone",this),Ge.eventCanceled)return
	;ee.parentNode!=ie||this.options.group.revertClone?ae?ie.insertBefore(se,ae):ie.appendChild(se):ie.insertBefore(se,ee),
	this.options.group.revertClone&&this.animate(ee,se),Et(se,"display",""),le=false;}
	}else this._hideClone();}},$e&&_t(document,"touchmove",(function(t){
	(Ge.active||Me)&&t.cancelable&&t.preventDefault();})),Ge.utils={on:_t,off:Tt,
	css:Et,find:$t,is:function(t,e){return !!Dt(t,e,t,false)},extend:function(t,e){
	if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t},throttle:Bt,
	closest:Dt,toggleClass:jt,clone:Wt,index:Rt,nextTick:Ye,cancelNextTick:Qe,
	detectDirection:Ce,getChild:Ht,expando:Jt},Ge.get=function(t){return t[Jt]
	},Ge.mount=function(){
	for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n]
	;e[0].constructor===Array&&(e=e[0]),e.forEach((function(t){
	if(!t.prototype||!t.prototype.constructor)throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t))
	;t.utils&&(Ge.utils=mt(mt({},Ge.utils),t.utils)),Qt.mount(t);}));
	},Ge.create=function(t,e){return new Ge(t,e)},Ge.version="1.15.6"
	;var Ve,Ze,tn,en,nn,on,an=[],rn=false;function sn(){an.forEach((function(t){
	clearInterval(t.pid);})),an=[];}function ln(){clearInterval(on);}
	var cn=Bt((function(t,e,n,o){if(e.scroll){
	var i,a=(t.touches?t.touches[0]:t).clientX,r=(t.touches?t.touches[0]:t).clientY,s=e.scrollSensitivity,l=e.scrollSpeed,c=qt(),d=false
	;Ze!==n&&(Ze=n,sn(),Ve=e.scroll,i=e.scrollFn,true===Ve&&(Ve=Ut(n,true)))
	;var u=0,m=Ve;do{
	var p=m,f=zt(p),h=f.top,v=f.bottom,b=f.left,g=f.right,w=f.width,y=f.height,x=void 0,k=void 0,L=p.scrollWidth,_=p.scrollHeight,T=Et(p),M=p.scrollLeft,O=p.scrollTop
	;p===c?(x=w<L&&("auto"===T.overflowX||"scroll"===T.overflowX||"visible"===T.overflowX),
	k=y<_&&("auto"===T.overflowY||"scroll"===T.overflowY||"visible"===T.overflowY)):(x=w<L&&("auto"===T.overflowX||"scroll"===T.overflowX),
	k=y<_&&("auto"===T.overflowY||"scroll"===T.overflowY))
	;var D=x&&(Math.abs(g-a)<=s&&M+w<L)-(Math.abs(b-a)<=s&&!!M),I=k&&(Math.abs(v-r)<=s&&O+y<_)-(Math.abs(h-r)<=s&&!!O)
	;if(!an[u])for(var S=0;S<=u;S++)an[S]||(an[S]={})
	;an[u].vx==D&&an[u].vy==I&&an[u].el===p||(an[u].el=p,
	an[u].vx=D,an[u].vy=I,clearInterval(an[u].pid),
	0==D&&0==I||(d=true,an[u].pid=setInterval(function(){
	o&&0===this.layer&&Ge.active._onTouchMove(nn)
	;var e=an[this.layer].vy?an[this.layer].vy*l:0,n=an[this.layer].vx?an[this.layer].vx*l:0
	;"function"==typeof i&&"continue"!==i.call(Ge.dragged.parentNode[Jt],n,e,t,nn,an[this.layer].el)||Gt(an[this.layer].el,n,e);
	}.bind({layer:u}),24))),u++;}while(e.bubbleScroll&&m!==c&&(m=Ut(m,false)));rn=d;}
	}),30),dn=function(t){
	var e=t.originalEvent,n=t.putSortable,o=t.dragEl,i=t.activeSortable,a=t.dispatchSortableEvent,r=t.hideGhostForTarget,s=t.unhideGhostForTarget
	;if(e){var l=n||i;r()
	;var c=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e,d=document.elementFromPoint(c.clientX,c.clientY)
	;s(),l&&!l.el.contains(d)&&(a("spill"),this.onSpill({dragEl:o,putSortable:n}));}}
	;function un(){}function mn(){}un.prototype={startIndex:null,
	dragStart:function(t){var e=t.oldDraggableIndex;this.startIndex=e;},
	onSpill:function(t){var e=t.dragEl,n=t.putSortable
	;this.sortable.captureAnimationState(),n&&n.captureAnimationState()
	;var o=Ht(this.sortable.el,this.startIndex,this.options)
	;o?this.sortable.el.insertBefore(e,o):this.sortable.el.appendChild(e),
	this.sortable.animateAll(),n&&n.animateAll();},drop:dn},ht(un,{
	pluginName:"revertOnSpill"}),mn.prototype={onSpill:function(t){
	var e=t.dragEl,n=t.putSortable||this.sortable
	;n.captureAnimationState(),e.parentNode&&e.parentNode.removeChild(e),
	n.animateAll();},drop:dn},ht(mn,{pluginName:"removeOnSpill"
	}),Ge.mount(new function(){function t(){for(var t in this.defaults={scroll:true,
	forceAutoScrollFallback:false,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:true},
	this)"_"===t.charAt(0)&&"function"==typeof this[t]&&(this[t]=this[t].bind(this));
	}return t.prototype={dragStarted:function(t){var e=t.originalEvent
	;this.sortable.nativeDraggable?_t(document,"dragover",this._handleAutoScroll):this.options.supportPointer?_t(document,"pointermove",this._handleFallbackAutoScroll):e.touches?_t(document,"touchmove",this._handleFallbackAutoScroll):_t(document,"mousemove",this._handleFallbackAutoScroll);
	},dragOverCompleted:function(t){var e=t.originalEvent
	;this.options.dragOverBubble||e.rootEl||this._handleAutoScroll(e);},
	drop:function(){
	this.sortable.nativeDraggable?Tt(document,"dragover",this._handleAutoScroll):(Tt(document,"pointermove",this._handleFallbackAutoScroll),
	Tt(document,"touchmove",this._handleFallbackAutoScroll),
	Tt(document,"mousemove",this._handleFallbackAutoScroll)),
	ln(),sn(),clearTimeout(It),It=void 0;},nulling:function(){
	nn=Ze=Ve=rn=on=tn=en=null,an.length=0;},_handleFallbackAutoScroll:function(t){
	this._handleAutoScroll(t,true);},_handleAutoScroll:function(t,e){
	var n=this,o=(t.touches?t.touches[0]:t).clientX,i=(t.touches?t.touches[0]:t).clientY,a=document.elementFromPoint(o,i)
	;if(nn=t,e||this.options.forceAutoScrollFallback||gt||bt||yt){
	cn(t,this.options,a,e);var r=Ut(a,true)
	;!rn||on&&o===tn&&i===en||(on&&ln(),on=setInterval((function(){
	var a=Ut(document.elementFromPoint(o,i),true)
	;a!==r&&(r=a,sn()),cn(t,n.options,a,e);}),10),tn=o,en=i);}else {
	if(!this.options.bubbleScroll||Ut(a,true)===qt())return void sn()
	;cn(t,this.options,Ut(a,false),false);}}},ht(t,{pluginName:"scroll",
	initializeByDefault:true})}),Ge.mount(mn,un);const pn=t=>{
	const e=document.getElementById(t);if(!e)return;e.innerHTML=""
	;const n=document.createDocumentFragment();n.appendChild((()=>{const t=b({
	classList:"nst-block"}),e=document.createDocumentFragment(),n=v("h4",{
	classList:"nst-block-title",innerText:"mug threshold"});return e.appendChild(n),
	O({elem:e,title:"mug threshold"}),t.appendChild(e),t})()),n.appendChild((()=>{
	const t=b({classList:"nst-block"}),e=v("h4",{classList:"nst-block-title",
	innerText:"default outcome"}),n=b({id:"outcome",classList:"nst-outcome"})
	;n.addEventListener("change",(t=>{const e=t.target;e&&"radio"===e.type&&d({
	outcome:e.id});}));const o=document.createDocumentFragment()
	;o.appendChild(I("leave","outcome")),
	o.appendChild(I("mug","outcome")),o.appendChild(I("hospitalize","outcome")),
	n.appendChild(o);const i=D({id:"nst-hold"},"hold","",(()=>{}))
	;return t.appendChild(e),t.appendChild(n),t.appendChild(i),t
	})()),n.appendChild((()=>{const t=c("weapon"),e=b({classList:"nst-block"
	}),n=v("h4",{classList:"nst-block-title",innerText:"weapon order"}),o=b({
	id:"weapon"}),i=document.createDocumentFragment();Object.keys(t).forEach((t=>{
	const e=b({id:t,classList:"list-group-item",innerText:t})
	;e.setAttribute("data-id",t),i.appendChild(e);})),o.appendChild(i),new Ge(o,{
	animation:150,store:{get:()=>{const t=c("weapon"),e=["","","",""]
	;return Object.entries(t).forEach((t=>e[t[1]]=t[0])),e},set:t=>{
	const e=t.toArray(),n=c("weapon");e.forEach((t=>n[t]=e.indexOf(t))),d({weapon:n
	});}}});const a=D({id:"nst-temp"},"use temp first","",(()=>{})),r=D({
	id:"nst-assaperk"},"assassinate","",(()=>{})),s=D({id:"nst-executeperk"
	},"execute","",(()=>{}))
	;return e.appendChild(n),e.appendChild(o),e.appendChild(a),
	e.appendChild(r),e.appendChild(s),e})()),n.appendChild((()=>{const t=b({
	classList:"nst-block"}),e=v("h4",{classList:"nst-block-title",
	innerText:"weapon reload"}),n=b({id:"reload",classList:"nst-outcome"
	}),o=document.createDocumentFragment();return o.appendChild(D({
	id:"nst-reloadone"},"primary","",(()=>{}))),o.appendChild(D({id:"nst-reloadtwo"
	},"secondary","",(()=>{}))),n.appendChild(o),t.appendChild(e),t.appendChild(n),t
	})()),e.appendChild(n);},fn=t=>{const e=document.getElementById(t);if(!e)return
	;e.childNodes.length&&(e.innerHTML="");const n=document.createDocumentFragment()
	;n.appendChild((()=>{const t=b({classList:"nst-block"}),e=v("h4",{
	classList:"nst-block-title",innerText:"default outcome"}),n=b({
	id:"easy-outcome",classList:"nst-outcome"});n.addEventListener("change",(t=>{
	const e=t.target;e&&"radio"===e.type&&d({easyoutcome:e.id.replace(/easy-/g,"")});
	}));const o=document.createDocumentFragment()
	;return o.appendChild(I("easy-leave","easy-outcome")),
	o.appendChild(I("easy-mug","easy-outcome")),
	o.appendChild(I("easy-hospitalize","easy-outcome")),
	n.appendChild(o),t.appendChild(e),t.appendChild(n),t})()),n.appendChild((()=>{
	const t=b({classList:"nst-block"}),e=v("h4",{classList:"nst-block-title",
	innerText:"default weapon"}),n=b({id:"easy-weapon",classList:"nst-outcome"})
	;n.addEventListener("change",(t=>{const e=t.target;e&&"radio"===e.type&&d({
	easyweapon:e.id.replace(/easy-/g,"")});}))
	;const o=document.createDocumentFragment()
	;o.appendChild(I("easy-primary","easy-weapon")),
	o.appendChild(I("easy-secondary","easy-weapon")),
	o.appendChild(I("easy-melee","easy-weapon")),n.appendChild(o);const i=D({
	id:"nst-easy-temp"},"use temp first","",(()=>{}))
	;return t.appendChild(e),t.appendChild(n),t.appendChild(i),t
	})()),e.appendChild(n);};let hn=null;const vn=t=>{
	const e=document.getElementById(t);if(!e)return;e.innerHTML="";const n=b({
	id:"nst-export-wrap",classList:"nst-api-wrap"}),o=k({id:"nst-export-download",
	innerText:"Download"});o.classList.add("hidden","text-sm","text-nstmain","m-2")
	;const i=w({id:"nst-export-btn",innerText:"export",classList:"torn-btn m-2",
	onclick:()=>{const t=JSON.stringify(c())
	;hn&&window.URL.revokeObjectURL(hn),hn=window.URL.createObjectURL(new Blob([t],{
	type:"application/json"
	})),o.setAttribute("href",hn+"#/nst-export"),o.setAttribute("download","nst-export.json"),
	o.classList.remove("hidden");}})
	;n.appendChild(i),n.appendChild(o),e.appendChild(n);},bn=t=>{
	const e=document.getElementById(t);if(!e)return;e.innerHTML="";const n=g({})
	;n.classList.add("hidden");const o=b({id:"nst-import-wrap",
	classList:"nst-api-wrap"}),i=_({id:"nst-import-input",type:"file",
	accept:"application/json",onchange:t=>{const e=t.target.files
	;if(!e||!e[0])return;const o=new FileReader;o.onload=t=>{var e;try{
	const o=l(""+(null==(e=t.target)?void 0:e.result))
	;d(o),ot(),n.className="text-nstgreen",n.innerHTML="<b>Import Successful</b>";
	}catch{n.className="text-nstred",n.innerHTML="<b>Import Unsuccessful</b>";}
	n.classList.remove("hidden");},o.onerror=t=>{
	n.className="text-nstred",n.innerHTML="<b>Import Unsuccessful</b>",
	n.classList.remove("hidden"),console.error(t);},o.readAsText(e[0]);}})
	;i.classList.add("hidden");const a=w({id:"nst-import-btn",innerText:"import",
	classList:"torn-btn m-2",onclick:()=>i.click()})
	;o.appendChild(a),o.appendChild(i),o.appendChild(n),e.appendChild(o);},gn=t=>{
	const e=document.getElementById(t);if(!e)return;e.innerHTML="";const n={
	company:["employees"].sort(),market:["bazaar"].sort(),torn:["items"].sort(),
	user:["bars","basic","battlestats","bazaar","cooldowns","education","icons","money","networth","newevents","newmessages","notifications","perks","personalstats","profile","refills","timestamp","travel"].sort()
	},o=document.createDocumentFragment(),i=b({classList:"nst-tos-wrap"}),a=v("h4",{
	classList:"nst-tos-title",innerText:"Terms of Service"})
	;i.appendChild(a),Object.entries({"Data Storage":"Only locally",
	"Data Sharing":"Nobody",
	"Purpose of Use":"Optimization / Maintenance but only end user has access",
	"Key Storage & Sharing":"Stored locally but not shared",
	"Key Access Level":"Limited or Custom (see below)"}).forEach((([t,e])=>{
	const n=b({classList:"nst-tos-wrap"}),o=v("b",{})
	;o.textContent=t+": ",n.appendChild(o),
	n.appendChild(document.createTextNode(e+"")),i.appendChild(n);}))
	;const r=v("h4",{classList:"nst-tos-title",innerText:"Api usage"})
	;i.appendChild(r),Object.entries(n).forEach((([t,e])=>{const n=b({
	classList:"nst-tos-wrap"}),o=v("b",{})
	;o.textContent=t+": ",n.appendChild(o),n.appendChild(document.createTextNode(Array.isArray(e)?e.join(", "):e+"")),
	i.appendChild(n);})),o.appendChild(i),e.appendChild(o);},wn=t=>{
	const e=document.getElementById("nst-icon"),n=t.querySelector('ul[class^="status-icon"]')
	;if(e||!n)return;const o=y({id:"nst-icon",classList:"nst-icon"})
	;n.insertBefore(o,n.firstChild),o.addEventListener("click",yn);},yn=()=>{
	const t=["spring","summer","autumn","winter"].map((t=>null==document?void 0:document.querySelector(".content-wrapper."+t))).find((t=>null!==t))
	;if(!t)return;const e=t.style.display;t.style.display="none"===e?"":"none"
	;const n=document.getElementById("nst-menu")
	;n&&n.remove(),"none"===t.style.display&&xn(t);},xn=t=>{
	const e=document.createDocumentFragment(),n=b({id:"nst-menu",
	classList:"nst-menu"}),o=b({id:"nst-menu-wrap",classList:"nst-menu-wrap "
	}),i=b({id:"nst-menu-title",classList:"nst-menu-title"}),a=b({
	id:"nst-menu-body",classList:"nst-menu-body"}),r=v("ul",{id:"nst-ul-main",
	classList:"nst-ul-main"});i.appendChild(g({classList:"nst-logo"
	})).appendChild(v("b",{innerText:"NST"
	})),a.appendChild(r),o.appendChild(i),o.appendChild(a),
	n.appendChild(o),e.appendChild(n),
	t.insertAdjacentElement("beforebegin",e.firstChild),
	Ln(r,"tos",gn),Ln(r,"api",dt)
	;const s=a.querySelector("#nst-api-li"),l=a.querySelector("#nst-api")
	;null==s||s.classList.add("nst-menu-sel"),
	null==l||l.classList.add("nst-menu-active"),
	null==l||l.classList.toggle("hidden"),kn();},kn=()=>{if(!C())return;ot()
	;const t=document.querySelector("#nst-ul-main");if(!t)return
	;["tsapi","attack","easy-fight","export","import"].forEach(((e,n,o)=>{Ln(t,e,{
	tsapi:ct,attack:pn,"easy-fight":fn,export:vn,import:bn}[e]);}))
	;const e=c("script"),n=Object.keys(e).sort().reduce(((t,n)=>(t[n]=null==e?void 0:e[n],
	t)),{})
	;Object.values(n).map((t=>t.onpage)).filter((t=>void 0!==t)).filter(((t,e,n)=>n.indexOf(t)===e)).sort().forEach((e=>Ln(t,e,Tn)));
	},Ln=(t,e,n=()=>{})=>{const o=null==t?void 0:t.parentElement;if(!o)return
	;const i="nst-"+e.toLowerCase(),a=i+"-li"
	;if(o.querySelector("#"+i)||o.querySelector("#"+a))return;const r=y({id:a,
	classList:"nst-menu-page",innerText:e,onclick:_n})
	;t.appendChild(r),o.appendChild(b({id:i,classList:"nst-menu-item hidden"})),n(i);
	},_n=t=>{const e=t.target,n=e.id,o=null==e?void 0:e.closest("#nst-menu-body")
	;if(!o)return
	;const i=o.querySelector(".nst-menu-sel"),a=o.querySelector(".nst-menu-active"),r=o.querySelector("#"+n.replace(/-li/g,""))
	;i&&i.classList.remove("nst-menu-sel"),
	a&&(a.classList.remove("nst-menu-active"),
	a.classList.toggle("hidden")),e.classList.add("nst-menu-sel"),
	r&&(r.classList.add("nst-menu-active"),r.classList.toggle("hidden"));},Tn=t=>{
	const e=document.getElementById(t);if(!e)return;e.innerHTML=""
	;const n=t.replace(/nst-/g,""),o=c("script"),i=Object.keys(o).sort().reduce(((t,e)=>{
	var i
	;return (null==(i=null==o?void 0:o[e])?void 0:i.onpage)===n&&(t[e]=null==o?void 0:o[e]),
	t}),{}),a=b({classList:"nst-script-block"}),r=document.createDocumentFragment()
	;Object.entries(i).forEach((([t,e])=>{
	const n=null==e?void 0:e.name,o=h(t),i=((t,e,n)=>{
	const o=(null==t?void 0:t.id.replace(/^nst-/,"").replace(/-/g,""))||h(e),i=b({
	classList:"nst-box-item"
	}),a=c("script")[o],r=(null==a?void 0:a.enabled)??false,s=_({...t,type:"checkbox",
	checked:r,onchange:t=>{const e=t.target;if(a&&a.enabled!==e.checked){
	const t=c("script");t[e.value]&&(t[e.value].enabled=e.checked,d({script:t}));}}
	}),l={innerText:e,htmlFor:null==t?void 0:t.id,title:n},u=T(l)
	;return i.appendChild(s),i.appendChild(u),i})({id:"nst-"+o,value:o
	},n,e.description.toLowerCase());r.appendChild(i);
	})),a.appendChild(r),e.appendChild(a);},Mn=(t,e,n=false)=>{
	const o=null==document?void 0:document.querySelector(e)
	;if(o&&(console.log("noobs "+e),t(o),!n))return;let i=false
	;const a=new MutationObserver((o=>{o.forEach((o=>{var r;if(i)return
	;const s=Array.from(o.addedNodes);for(const l of s){
	if(!(null==l?void 0:l.querySelector))continue
	;const o=null==l?void 0:l.querySelector(e),s=null==(r=null==l?void 0:l.parentElement)?void 0:r.querySelector(e),c=o||s||false
	;if(c&&(console.log("obs "+e),t(c),!n)){i=true,a.disconnect();break}}}));}))
	;a.observe(document.documentElement,{childList:true,subtree:true});},On=t=>{
	const e=(c("armfweapons")??"")+"",n=(c("armfbonuses")??"")+"",o=e?RegExp(e,"g"):null,i=n?RegExp(n,"g"):null
	;t.querySelectorAll("div.name").forEach((t=>((t,e,n)=>{var o
	;const i=t.parentElement,a=t.innerText.toLowerCase(),r=(null==(o=null==i?void 0:i.querySelector("ul.bonuses"))?void 0:o.innerHTML.toLowerCase())??"",s=!e||e.test(a)||e.test(r),l=!n||n.test(a)||n.test(r),c=s&&l
	;if(i){const t=i.classList.contains("hidden")
	;c&&t?i.classList.remove("hidden"):c||t||i.classList.add("hidden");}})(t,o,i)));}
	;let Dn;const In=t=>{clearTimeout(Dn),Dn=setTimeout((()=>On(t)),250);},Sn={
	box:t=>(t=>{const e=P({title:"armory filter",element:t}),n=b({
	classList:"nst-box-column"});M({elem:n,title:"armf weapons",cback:()=>In(t)
	}),M({elem:n,title:"armf bonuses",cback:()=>In(t)}),null==e||e.appendChild(n);
	})(t),item:t=>On(t),nopager:()=>{}},jn=t=>{new MutationObserver((t=>{
	t.forEach((t=>{const e=Array.from(t.addedNodes)
	;(null==e?void 0:e.length)&&e.forEach((t=>{var e
	;const n="faction-armoury-tabs"===(null==t?void 0:t.id),o=/armoury-(weapons|armour)/g.test((null==(e=null==t?void 0:t.parentElement)?void 0:e.id)??"")&&"UL"===t.tagName&&t.classList.contains("item-list")
	;Sn[n?"box":o?"item":"nopager"](t);}));}));})).observe(t,{childList:true,subtree:true});
	},En=t=>{
	const e=(c("aucfweapons")??"")+"",n=(c("aucfbonuses")??"")+"",o=e?RegExp(e,"g"):null,i=n?RegExp(n,"g"):null
	;t.querySelectorAll("div.item-cont-wrap").forEach((t=>((t,e,n)=>{var o,i
	;const a=t.parentElement,r=null==(o=null==t?void 0:t.querySelector("span.title"))?void 0:o.innerText.toLowerCase(),s=null==(i=null==t?void 0:t.querySelector("div.item-bonuses"))?void 0:i.innerHTML.toLowerCase(),l=!e||e.test(r)||e.test(s),c=!n||n.test(r)||n.test(s),d=l&&c
	;if(a){const t=a.classList.contains("hidden")
	;d&&t?a.classList.remove("hidden"):d||t||a.classList.add("hidden");}})(t,o,i)));}
	;let Pn;const $n=t=>{clearTimeout(Pn),Pn=setTimeout((()=>En(t)),250);},qn=t=>{
	(t=>{const e=P({title:"auction filter",element:t}),n=b({
	classList:"nst-box-column"});M({elem:n,title:"aucf weapons",cback:()=>$n(t)
	}),M({elem:n,title:"aucf bonuses",cback:()=>$n(t)}),null==e||e.appendChild(n);
	})(t),new MutationObserver((t=>{t.forEach((t=>{const e=Array.from(t.addedNodes)
	;(null==e?void 0:e.length)&&e.forEach((t=>{
	t instanceof HTMLElement&&"LI"===t.tagName&&t.firstElementChild instanceof HTMLElement&&t.firstElementChild.classList.contains("item-cont-wrap")&&En(t);
	}));}));})).observe(t,{childList:true,subtree:true});},zn=t=>{
	new MutationObserver((t=>{var e,n
	;for(const o of t)for(const t of Array.from(o.addedNodes)){
	if(!(t instanceof HTMLElement&&"LI"===t.tagName&&(null==(n=null==(e=t.firstElementChild)?void 0:e.classList)?void 0:n.contains("item-cont-wrap"))))continue
	;const o=t.querySelectorAll(".bonus-attachment-icons");if(!o.length)continue
	;const i=Array.from(o).map((t=>et(t.title))).join("<br />"),a=t.querySelector("p.t-gray-6")
	;a&&a.innerHTML!==i&&(a.innerHTML=i);}})).observe(t,{childList:true,subtree:true});
	},An={add:()=>({closeSel:"li",mvSel:".info-wrap"}),manage:()=>({
	closeSel:'[class^="item"]',mvSel:'[class^="rrp"]'})},Hn=()=>{
	document.addEventListener("dblclick",(t=>{const e=t.target
	;if(!e||"INPUT"!==e.tagName)return;const{classList:n}=e
	;n.contains("buyAmountInput")?(t=>{var e,n,o
	;const i=null==(e=t.closest("div[class^=buyMenu]"))?void 0:e.querySelector("span[class^=amount]"),a=parseInt((null==(o=null==(n=null==i?void 0:i.innerText)?void 0:n.match(/x(\d+)/))?void 0:o[1])??"1",10)
	;((t,e)=>{var n,o;const i=new Event("input",{bubbles:true
	}),a=null==(n=Object.getOwnPropertyDescriptor(t,"value"))?void 0:n.set,r=null==(o=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t),"value"))?void 0:o.set
	;a&&a!==r?r.call(t,e):a.call(t,e),t.dispatchEvent(i),t.select();
	})(t,Math.min(a,1e4).toString());})(e):n.contains("input-money")?(t=>{var e,n
	;const o=a(),i=null==(e=An[o])?void 0:e.call(An);if(!i)return
	;const{closeSel:r,mvSel:s}=i,l=t.closest(r)
	;if(!l||l.classList.contains("disabled"))return;const c=l.querySelector("img")
	;if(!(null==(n=null==c?void 0:c.src.match(/\d+/))?void 0:n[0]))return
	;const d=l.querySelector(s);if(!d)return
	;const u=parseInt(d.innerText.replace(/\D/g,"")||"0",10);$(t,""+(u-1));
	})(e):n.contains("clear-all")?(t=>{var e,n
	;const o=t.closest("li"),i=null==o?void 0:o.querySelector("div.name-wrap"),a=parseInt((null==(n=null==(e=null==i?void 0:i.innerText)?void 0:e.match(/x(\d+)/))?void 0:n[1])??"1",10)
	;$(t,a.toString());})(e):n.contains("removeAmount")&&(t=>{var e,n
	;const o=t.closest("div[class^=row]"),i=null==o?void 0:o.querySelector("div[class^=desc]"),a=parseInt((null==(n=null==(e=null==i?void 0:i.innerText)?void 0:e.match(/x(\d+)/))?void 0:n[1])??"1",10)
	;$(t,a.toString());})(e);}));},Cn=t=>{const e=/(itemsContainner|row)/
	;new MutationObserver((t=>{var n
	;for(const o of t)for(const t of Array.from(o.addedNodes)){
	if(!(t instanceof HTMLElement))continue;if(!e.test(t.className))continue
	;if(t.querySelector(".nst-rw-bazaar"))continue
	;const o=t.querySelectorAll('[class*="iconBonuses"] > div > i')
	;if(o.length)for(const t of Array.from(o)){const e=t.className.split("-")
	;let o="radiation"===e[3]?"radiation":e[2]
	;const i="full"===o?"EOD":"negative"===o?"Delta":"sentinel"===o?"defense":"vanguard"===o?"dex":o,a=null==(n=t.parentElement)?void 0:n.parentElement
	;a&&a.classList.add("nst-rw-bazaar"),
	t.parentElement&&!t.parentElement.querySelector("span")&&(t.parentElement.appendChild(g({
	innerText:i})),t.parentElement.appendChild(v("br",{})));}}})).observe(t,{
	childList:true,subtree:true});},Rn=async()=>{var t,e;const o={section:"user",
	select:"bazaar",objID:n("userId")??""},i=await q(o)
	;if(!(null==i?void 0:i.status)||!Array.isArray(i.bazaar))return;let a=0,r=0
	;for(const n of i.bazaar){const t=+(null==n?void 0:n.quantity)||0
	;a+=(+(null==n?void 0:n.price)||0)*t,r+=(+(null==n?void 0:n.market_price)||0)*t;}
	const s=b({classList:"nst-trade-value",
	innerText:`Total: $${p(a)} - MV: $${p(r)}`
	}),l=null==document?void 0:document.querySelector("#bazaarRoot .wrapper")
	;l&&(null==(e=null==(t=l.parentElement)?void 0:t.querySelector(".nst-trade-value"))||e.remove(),
	l.insertAdjacentElement("afterend",s));},Nn=t=>{
	const e=t.target,n=document.querySelector("#map .leaflet-marker-pane"),o=Array.from(n.querySelectorAll('[class*="torn-item"]'))
	;0!==o.length&&o.forEach((t=>{
	e.checked?t.classList.remove("nst-city-item"):t.classList.add("nst-city-item");
	}));},Un=async t=>{const e=Array.from(t.querySelectorAll('[class*="torn-item"]'))
	;if(0===e.length)return;const n=P({title:"City Finds",
	element:t.closest("#tab-menu")}),o="Hide Items",i=h(o),a={id:"nst-"+i,value:i
	},r=c(i)??false,s=await q({section:"torn",select:"items"})
	;if(!(null==s?void 0:s.status))return;const l=s.items,d=new Map;e.forEach((t=>{
	const e=t.getAttribute("src"),n=m(e),o=l[n]
	;o&&(d.has(n)?d.get(n).count+=1:d.set(n,{name:o.name,type:o.type,
	value:+o.market_value,count:1
	}),e.includes("small")&&t.setAttribute("src",e.replace("small","large")),
	r||t.classList.contains("nst-city-item")||t.classList.add("nst-city-item"));}))
	;const u=Array.from(d.values()),f=u.reduce(((t,e)=>t+e.value*e.count),0),v=u.map((t=>`${t.name} x${t.count}`)).join(", ").replace(/, $/,"."),g=b({
	classList:"nst-box-column"});g.appendChild(D(a,o,"",Nn)),g.appendChild(b({
	classList:"nst-findsworth",innerText:"Worth: $"+p(f)})),g.appendChild(b({
	classList:"nst-findslist",innerText:""+v})),n.appendChild(g);},Fn=()=>{
	document.addEventListener("dblclick",(t=>{const e=t.target
	;e instanceof HTMLInputElement&&"text"===e.type&&e.classList.contains("input-money")&&(t=>{
	const e=t.closest("li");if(!e)return;const n=e.querySelector("div.sold-daily")
	;if(!n)return;const o=m(n.innerText).toString();$(t,o);})(e);}));},Bn=()=>{
	document.addEventListener("dblclick",(t=>{var e;const n=t.target
	;if(!n||"INPUT"!==n.tagName)return
	;const o=n.closest("span.item-desc")||(null==(e=n.parentElement)?void 0:e.parentElement)
	;if(!o)return;const i=o.querySelector(".instock");if(!i)return
	;const a=m(i.innerText);n.value=""+Math.min(a,100);}));},Gn=t=>{
	if(/manage/.test(a())&&t)for(const e of Array.from(t.children)){
	const t=e.getAttribute("itemid"),n=e.querySelector(".name .desc")
	;n&&t&&(n.querySelector(".text-nstmain")||n.insertAdjacentElement("afterbegin",g({
	classList:"text-nstmain",innerText:"ID: "+t})));}},Wn=t=>{
	const e=t.querySelectorAll(".bonus-attachment-icons")
	;if(e.length)for(const n of Array.from(e)){
	if(n.classList.contains("nst-rw-display"))continue;const t=et(n.title)
	;n.classList.add("nst-rw-display"),n.appendChild(g({innerText:t
	})),n.insertAdjacentElement("afterend",v("br",{}));}};let Xn;const Jn={
	primary:"#weapon_main",secondary:"#weapon_second",melee:"#weapon_melee",
	temp:"#weapon_temp"
	},Kn=c(),{easyoutcome:Yn,easytemp:Qn,easyweapon:Vn}=Kn,Zn=new MutationObserver((()=>eo())),to=(t=document)=>{
	t||(t=document)
	;const e=[...Array.from(t.querySelectorAll('div[class^="dialogButtons"] button')),...Array.from(t.querySelectorAll(".nst-easy-fight button"))]
	;if(0!==e.length)return e.find((t=>{const e=t.innerText.toLowerCase()
	;return e.includes(Yn.toLowerCase())||e.includes("fight")}))},eo=(t=document)=>{
	const e=to(t);e&&(t=>{if(!t)return
	;if(document.querySelector(".nst-easy-fight"))return
	;const e=t.innerText.toLowerCase().includes("fight"),n=Qn&&e?Jn.temp:Jn[Vn],o=document.querySelector(n+' [class^="weaponImage"] img'),i=document.querySelector(n)
	;if(!o||!i)return;const a=b({})
	;a.classList.add("nst-easy-fight"),a.appendChild(t),
	i.insertBefore(a,o.nextSibling),
	a.style.position="absolute",a.style.top=(o.offsetTop||22)+"px",
	a.style.left="15px",t.addEventListener("click",(()=>{a.remove();}));})(e);},no=t=>{
	eo(t),Zn.disconnect(),Zn.observe(t.parentNode,{attributes:true,childList:true,
	subtree:true});
	},oo=()=>Mn(no,'div[class^="playerArea"] [class^="playerWindow"] [class*="defender"]'),io=()=>{
	oo(),window.addEventListener("resize",(()=>{
	clearTimeout(Xn),Xn=setTimeout(oo,250);}));},ao=t=>{
	const e=()=>t.clone().json().then((t=>{const e=(t={...t}).DB.error
	;return (null==e?void 0:e.includes("in hospital"))||(null==e?void 0:e.includes("unconscious"))||(null==e?void 0:e.includes("This fight no longer exists"))?(delete t.DB.error,
	delete t.startErrorTitle,
	t.DB.defenderUser.playername+=" [Hospital]"):t.DB.defenderUser.playername+=` [${t.DB.usersLife.defender.lifeBar}%]`,
	t}))
	;return t.json=e,t.text=async()=>JSON.stringify(await e()),t.json().then((t=>(async t=>{
	var e;const n=await new Promise((t=>{const e=to();if(e)return t(e)
	;const n=new MutationObserver((()=>{const e=to();e&&(t(e),n.disconnect());}))
	;n.observe(document.body,{childList:true,subtree:true});}));if(!n)return;const o=t.DB
	;o.defenderUser.playername.includes("[Hospital]")||(null==(e=null==o?void 0:o.startButtonTimer)?void 0:e.timeLeft)>0?n.classList.add("disabled"):n.classList.contains("disabled")&&n.classList.remove("disabled");
	})(t))),t},ro=t=>{
	Array.from(null==t?void 0:t.querySelectorAll("ul[class*='slotItems']")).forEach((t=>{
	null==t||t.addEventListener("click",(()=>{
	const e=t.closest('li[class^="slot"]').querySelector('header [aria-label^="Equip"]')
	;e&&e.click();}));}));},so=t=>{if(!t)return;const e=t.getElementsByTagName("ul")[0]
	;if(!e)return;const n=Array.from(e.children),o={Strength:0,Defense:0,Speed:0,
	Dexterity:0,Total:0};for(const r of n){const t=r.getAttribute("aria-label")
	;if(!t)continue;const e=t.split(" ");if(e.length>2){
	const t=e[0].replace(/:/g,""),n=m(e[1]),i=e[2].replace(/%/g,""),a=i.charAt(0),r=m(i),s=Math.round(n*("+"===a?r/100+1:1-r/100))
	;o[t]=s,o.Total+=s;}}
	e.lastElementChild&&e.lastElementChild.removeAttribute("class")
	;const i=document.createDocumentFragment(),a=b({classList:"nst-box-header"})
	;a.appendChild(g({classList:"nst-box-title"})).appendChild(g({
	id:"nst-box-title",innerText:"Effective Stats"
	})),i.appendChild(a),Object.keys(o).forEach((t=>{const e=y({tabIndex:0,
	ariaLabel:`${t} ${p(o[t])}`}),n=g({classList:"divider",
	innerHTML:`<span>${t}</span>`}),a=g({classList:"desc",innerText:` ${p(o[t])} `,
	style:"margin-left: 3px"});e.appendChild(n),e.appendChild(a),i.appendChild(e);
	})),
	e.appendChild(i),e.lastElementChild&&e.lastElementChild.classList.add("last");
	},lo=(t,e)=>{var n,o;const i=t.querySelector("ul.employee-list");if(!i)return
	;const a=Array.from(i.children);if(0===a.length)return
	;const s=r(),l=s-86400,c=s-172800;for(const r of a){
	const t=r.getAttribute("data-user");if(!t)continue
	;const i=null==(o=null==(n=e[t])?void 0:n.last_action)?void 0:o.timestamp,a=r.querySelector(".employee")
	;a&&(i<c?a.classList.add("bg-nstred"):i<l&&a.classList.add("bg-nstyellow"));}
	},co=async t=>{if(!t)return;const e=await q({section:"company",
	select:"employees"});if(!(null==e?void 0:e.status))return
	;const{company_employees:n}=e;lo(t,n),new MutationObserver((t=>{
	for(const e of t)for(const t of Array.from(e.addedNodes))t instanceof HTMLElement&&lo(t,n);
	})).observe(t,{childList:true,subtree:true});},uo=t=>{
	const e=F(t),{step:n,action:o,confirm:i}=e
	;return (t=>Object.keys(t).map((e=>`${e}=${t[e]}`)).join("&"))("actionForm"!==n||"equip"!==o||1===i?e:{
	...e,confirm:1})
	},mo=".deposit-box .input-money-symbol, .deposit .input-money-symbol, .donate .input-money-symbol",po=new WeakSet,fo=t=>{
	if(po.has(t))return;po.add(t);let e=0;t.addEventListener("click",(()=>{
	if(1!==e++)return;e=0
	;const t=document.querySelector('.deposit-box input[value="DEPOSIT"], .deposit button.torn-btn, #armoury-donate .cash button')
	;t&&t.click()
	;const n=document.querySelector("#armoury-donate .cash-confirm .yes")
	;n&&n.click();}));},ho=t=>{
	const e=document.querySelector(".deposit-box .input-money-symbol, .deposit .input-money-symbol")
	;e&&fo(e),new MutationObserver((t=>{var e
	;for(const n of t)for(const t of Array.from(n.addedNodes))if(t instanceof Element)if(t.matches&&t.matches(mo))fo(t);else {
	const n=null==(e=t.querySelector)?void 0:e.call(t,mo);n&&fo(n);}})).observe(t,{
	childList:true,subtree:true});
	},vo=n("user2ID")??"",bo=c(),{reloadone:go,reloadtwo:wo,weapon:yo}=bo
	;let xo={},ko={},Lo=false,_o=0;const To={primary:1,secondary:2,melee:3,temp:5
	},Mo=()=>{var t
	;const e=null==(t=null==ko?void 0:ko.defenderUser)?void 0:t.life,n=null==xo?void 0:xo.currentAttackStatus,o=null==ko?void 0:ko.attackStatus,{hold:i}=c()
	;return i&&e<2?"hold":"end"===o&&"endResult"in ko?"end":e<2&&"finishOptions"in ko?"finish":"error"in ko||"startButtonTimer"in ko?"check":Lo||"notStarted"!==o?Lo||"process"===n?"hit":"check":"start"
	},Oo=()=>{var t,e,n,o,i,a,r,s,l,d,u,m,p,f
	;const h=null==ko?void 0:ko.attackerAmmoStatus,v=null==(t=null==ko?void 0:ko.currentClips)?void 0:t[0],b=null==(i=null==(o=null==(n=null==(e=null==ko?void 0:ko.attackerItems)?void 0:e[1])?void 0:n.item)?void 0:o[0])?void 0:i.currentBonuses,g=null==(l=null==(s=null==(r=null==(a=null==ko?void 0:ko.attackerItems)?void 0:a[2])?void 0:r.item)?void 0:s[0])?void 0:l.currentBonuses,w=null==ko?void 0:ko.currentMove,y=c(),x={
	primary:()=>{var t,e,n,o,i
	;const a=null!=(null==(o=null==(n=null==(e=null==(t=null==ko?void 0:ko.attackerItems)?void 0:t[1])?void 0:e.item)?void 0:n[0])?void 0:o.ID),r="0"!==(null==v?void 0:v.attackerPrimaryRoundsLeft),s=!(null==(i=null==h?void 0:h[1])?void 0:i.includes("No ammo"))
	;return a&&s&&(r||go)},secondary:()=>{var t,e,n,o,i
	;const a=null!=(null==(o=null==(n=null==(e=null==(t=null==ko?void 0:ko.attackerItems)?void 0:t[2])?void 0:e.item)?void 0:n[0])?void 0:o.ID),r="0"!==(null==v?void 0:v.attackerSecondaryRoundsLeft),s=!(null==(i=null==h?void 0:h[2])?void 0:i.includes("No ammo"))
	;return a&&s&&(r||wo)},melee:()=>{var t,e,n,o
	;return null!=(null==(o=null==(n=null==(e=null==(t=null==ko?void 0:ko.attackerItems)?void 0:t[3])?void 0:e.item)?void 0:n[0])?void 0:o.ID)
	}};if(0===w&&(null==y?void 0:y.assaperk)){
	if("Assassinate"===(null==(d=null==b?void 0:b[72])?void 0:d.title))return 1
	;if("Assassinate"===(null==(u=null==g?void 0:g[72])?void 0:u.title))return 2}
	if((null==y?void 0:y.executeperk)&&"Execute"===(null==(m=null==g?void 0:g[75])?void 0:m.title)){
	const t=g[75].value
	;if(+(null==(p=null==ko?void 0:ko.defenderUser)?void 0:p.life)/+(null==(f=null==ko?void 0:ko.defenderUser)?void 0:f.maxlife)*100<=t)return 2
	}if((()=>{var t,e,n,o,i,a,r,s
	;const l=null==(o=null==(n=null==(e=null==(t=null==ko?void 0:ko.attackerItems)?void 0:t[5])?void 0:e.item)?void 0:n[0])?void 0:o.ID
	;if(!l)return  false;const{temp:d}=c();if(!d)return  false
	;const u=null==(s=null==(r=null==(a=null==(i=null==ko?void 0:ko.defenderItems)?void 0:i[6])?void 0:a.item)?void 0:r[0])?void 0:s.ID
	;return !!u&&!("256"===l&&["670","1355","348"].includes(u)||"392"===l&&["348","642","644","655","670","675","680","1355"].includes(u))
	})())return 5;do{const t=Object.keys(yo).filter((t=>yo[t]==_o))[0]
	;if(x[t]())return To[t];_o++;}while(_o<3);return 999},Do={check:()=>{var t
	;return "error"in ko?ko.error:"startButtonTimer"in ko?`attack in ${+(null==(t=null==ko?void 0:ko.startButtonTimer)?void 0:t.timeLeft)}s`:"checking"
	},start:()=>"start fight",finish:()=>"executing",end:()=>{var t,e
	;return (null==(t=null==ko?void 0:ko.endResult)?void 0:t.info)??(null==(e=null==ko?void 0:ko.endResult)?void 0:e.groupEvent)
	},hit:()=>{var t,e
	;const n=+(null==(t=null==ko?void 0:ko.defenderUser)?void 0:t.life),o=+(null==(e=null==ko?void 0:ko.defenderUser)?void 0:e.maxlife)
	;return `${n} / ${o} (${Math.floor(n/o*100)}%)`}},Io={hold:()=>({}),end:()=>({}),
	finish:()=>{const{outcome:t}=c();return {step:"finish",fightResult:t}},
	check:()=>({user2ID:vo}),start:()=>(Lo=true,{step:"startFight",user2ID:vo}),
	hit:()=>{const t="user1EquipedItemID";return {step:"attack",user2ID:vo,[t]:Oo()}}
	},So=async t=>{const n=t.target;n.disabled=true;const o=Mo(),i=(Io[o]??Io.error)()
	;if(s(i))return
	;const a="https://www.torn.com/loader.php?sid=attackData&mode=json&rfcv="+e(),r={
	method:"POST",headers:{"x-requested-with":"XMLHttpRequest"},
	body:new URLSearchParams(i)};console.log(o,i),await fetch(a,{...r
	}).then((t=>t.json())).then((t=>((t,e)=>{
	e.disabled=false,console.log(t),xo=t,ko=t.DB;const n=Mo();e.innerText=Do[n]();
	})(t,n))).catch((t=>console.error(t)));},jo=t=>(t=>{const e=P({
	title:"fighterino",element:t})
	;e.classList.remove("nst-box-row"),e.classList.add("nst-box-column")
	;const n=(()=>{const t=b({classList:"nst-box-column"}),e=b({
	classList:"nst-outcome",onchange:t=>{const e=t.target.id;d({outcome:e});}
	}),n=I("leave","outcome"),o=I("mug","outcome"),i=I("hospitalize","outcome")
	;e.appendChild(n),e.appendChild(o),e.appendChild(i),t.appendChild(e);const a=b({
	classList:"nst-outcome"}),r=D({id:"nst-hold"},"hold","",(()=>{})),s=D({
	id:"nst-temp"},"use temp first","",(()=>{})),l=D({id:"nst-assaperk"
	},"assassinate","",(()=>{})),c=D({id:"nst-executeperk"},"execute","",(()=>{}))
	;return a.appendChild(r),
	a.appendChild(s),a.appendChild(l),a.appendChild(c),t.appendChild(a),t})(),o=b({
	classList:"nst-box-column"}),i=w({id:"nst-fighteroo",classList:"torn-btn m-2",
	innerText:"fighterino",onclick:So})
	;o.appendChild(i),e.appendChild(n),e.appendChild(o);})(t),Eo=t=>{
	t=t.closest('ul[class*="properties"]');const e=c("userdata");if(!e)return
	;const n=[...e.faction_perks??[],...e.job_perks??[],...e.property_perks??[],...e.education_perks??[],...e.book_perks??[]].filter((t=>t.includes("gym gains")))
	;["strength","defense","speed","dexterity"].forEach((o=>{
	const i=(e.faction_perks??[]).filter((t=>t.includes(o+" gym gains"))).reduce(((t,e)=>{
	const n=e.match(/\d+/);return t+(n?m(n[0]):0)
	}),0),a=n.filter((t=>t.includes(o)||/% gym gains?/.test(t))).reduce(((t,e)=>{
	const n=e.match(/\d+/);return t+(n?m(n[0]):0)}),0),r=b({id:"nst-steadfast-"+o,
	classList:"nst-steadfast",innerText:`steadfast: ${i}% (${a}%)`
	}),s=t.querySelector(`[class*=${o}]`);s&&s.insertAdjacentElement("afterbegin",r);
	}));},Po=t=>{t&&t.classList.add("nst-hide-medal");},$o=t=>{if(!t)return
	;const e=document.getElementById("skip-to-content");e&&(e.innerText=t.innerText);
	},qo=t=>{new MutationObserver((t=>{var e,n,o
	;for(const i of t)if(i.addedNodes.length&&i.target instanceof HTMLElement&&"UL"===i.target.nodeName&&"category-wrap"===(null==(e=i.target.parentElement)?void 0:e.id)&&null===i.previousSibling)for(const t of Array.from(i.addedNodes)){
	if(!(t instanceof HTMLElement))continue
	;const e=null==(n=t.querySelector)?void 0:n.call(t,".name-wrap")
	;if(!e||e.classList.contains("nst-rw-show"))continue
	;const i=null==(o=t.querySelector)?void 0:o.call(t,"ul.bonuses-wrap"),a=null==i?void 0:i.lastElementChild
	;if(!a)continue;let r=false;const s=b({classList:"nst-rw-show-wrap"})
	;for(const t of Array.from(a.children)){
	if(!(t instanceof HTMLElement&&t.title))continue;r=true;const e=b({
	classList:"nst-rw-single",innerText:et(t.title)});s.appendChild(e);}
	r&&(e.classList.add("nst-rw-show"),e.appendChild(s));}})).observe(t,{
	childList:true,subtree:true});},zo=t=>{var e,n;if(!t)return;const o=t.parentElement
	;if(!o)return
	;const i=c("userdata"),a=m(null==(e=null==i?void 0:i.networth)?void 0:e.total),r=m(null==(n=null==i?void 0:i.personalstats)?void 0:n.networth),s=Math.round(a-r),l=s>0?"text-nstgreen":s<0?"text-nstred":"",d=`<b class='${l}'>$${p(s)}</b>`
	;if(o.querySelector(".nst-live-networth"))return;const u=y({
	classList:"last nst-live-networth",tabIndex:0,ariaLabel:"Live NW: "+p(a)}),f=g({
	classList:"divider",innerHTML:"<span>Live Networth</span>"}),h=g({
	classList:`desc ${l} font-bold`,innerText:` $${p(a)} `,
	style:"margin-left: 3px; margin-right: 3px;"}),b=v("i",{
	classList:"networth-info-icon",title:d,style:"margin-left: 6px;"})
	;u.appendChild(f),
	h.appendChild(b),u.appendChild(h),o.lastElementChild&&o.lastElementChild.removeAttribute("class"),
	o.appendChild(u);},Ao=()=>{document.addEventListener("dblclick",(t=>{
	const e=t.target;if(!e||"INPUT"!==e.tagName)return;let n=e.parentElement
	;for(let m=0;m<3&&n;m++)n=n.parentElement;if(!n)return
	;const o=document.querySelector(".travel-agency-market .availableItemsAmount"),i=o?m(o.getAttribute("value")):0,a=document.getElementById("user-money"),r=a?m(a.innerText):0,s=n.querySelector(".cost .c-price"),l=s?m(s.innerText):0,c=n.querySelector(".stock .stck-amount"),d=c?m(c.innerText):0
	;if(!l||!d||!i)return
	;const u=r/l>=i?i:Math.trunc(r/l),p=Math.min(u,d).toString();$(e,p);}));},Ho=t=>{
	const e=f(+t.user.lastAction.seconds).trim();Mn((t=>((t,e)=>{
	let n=t.querySelector("#nst-lastaction")
	;n?n.innerText="last action: "+e:t.appendChild(b({id:"nst-lastaction",
	innerText:"last action: "+e}));
	})(t,e)),'#profile-mini-root [class*="profile-mini-_userProfileWrapper"]');},Co={
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
	task:"Injure (P)'s both arms."},wrath_of_duke:{task:"Defeat 4 (P)."}},Ro=t=>{
	var e
	;const n=Array.from(t.querySelectorAll(".giver-cont-wrap > div[id^=mission]:not(.nst-edit)"))
	;for(const o of n){if(!(null==o?void 0:o.querySelector))continue
	;const t=o.querySelector(".title-black")
	;if(!t||!t.childNodes[0]||!t.childNodes[0].textContent)continue
	;const n=t.childNodes[0].textContent.replace(/\n/g,"").trim().toLowerCase().replace(/[ -]/g,"_").replace(/[:!,]/g,""),i=(null==(e=Co[n])?void 0:e.task)??"mission not found",a=o.querySelector(".max-height-fix")
	;if(!a)continue;const r=g({innerHTML:"<br/><br/><b>todo:</b> "+i,
	classList:"text-nstmain"});a.appendChild(r),o.classList.add("nst-edit");}
	},No=t=>{if(!t)return
	;const e=t.querySelector(".total-price"),n=t.querySelector(".action")
	;e&&n&&m(e.innerText)*J>=K&&n.classList.add("text-black","bg-nstmain");},Uo=t=>{
	document.querySelectorAll(".users-point-sell > li").forEach((t=>No(t))),
	new MutationObserver((t=>{
	for(const e of t)for(const t of Array.from(e.addedNodes))t instanceof HTMLElement&&("LI"===t.tagName?No(t):t.querySelectorAll&&t.querySelectorAll("li").forEach((t=>No(t))));
	})).observe(t,{childList:true,subtree:true});},Fo=t=>{var e,n,o
	;if(!t||t.classList.contains("yes"))return;t.classList.add("yes")
	;const i=null==(o=null==(n=null==(e=null==t?void 0:t.getAttribute("href"))?void 0:e.replace(/=buy/g,"=buy1"))?void 0:n.replace(/=remove/g,"=remove1"))?void 0:o.replace(/&points=\d+$/g,"")
	;i&&t.setAttribute("href",i);},Bo=t=>{
	document.querySelectorAll(".users-point-sell > li").forEach((t=>{
	t.firstElementChild&&Fo(t.firstElementChild);})),new MutationObserver((t=>{
	for(const e of t)for(const t of Array.from(e.addedNodes)){
	const e=t instanceof HTMLElement&&"LI"===t.tagName&&t.firstElementChild;e&&Fo(e);
	}})).observe(t,{childList:true,subtree:true});},Go=t=>{
	if(!t||t.querySelector("a"))return;const e=t.innerHTML,n=k({
	classList:"nst-pokername",href:"profiles.php?NID="+e,target:"_blank",
	innerText:""+e});t.innerHTML="",t.appendChild(n);},Wo=t=>{
	const e="p[class^=name]"
	;t.querySelectorAll(e).forEach(Go),new MutationObserver((t=>{
	for(const n of t)Array.from(n.addedNodes).forEach((t=>{var n
	;t instanceof HTMLElement&&(t.matches&&t.matches(e)&&Go(t),
	null==(n=t.querySelectorAll)||n.call(t,e).forEach(Go));}));})).observe(t,{
	childList:true,subtree:true});},Xo=t=>{t.stopPropagation()
	;const n=t.target.closest("#nst-quick-use").parentElement.getAttribute("data-itemID")
	;if(!n)return;const o=c(Z);Object.keys(o).includes(n)&&(async t=>{
	const n=document.getElementById("nst-item-resp");if(n){
	for(;n.lastChild;)n.removeChild(n.lastChild);(async(t,n)=>{
	const{id:o}=t,i="energy"===o?{step:"armouryRefillEnergy"}:{step:"useItem",
	itemID:o,fac:"1"
	},a="energy"===o?"https://www.torn.com/factions.php?rfcv="+e():"https://www.torn.com/item.php?rfcv="+e(),r={
	method:"POST",headers:{"x-requested-with":"XMLHttpRequest"},
	body:new URLSearchParams(i)},s=await(await fetch(a,{...r
	})).json(),l=s.links??{},c=(null==s?void 0:s.text)??(null==s?void 0:s.message)??{},d=b({})
	;d.appendChild(x({innerHTML:c}));const u=x({});Object.values(l).forEach((t=>{
	const e=k({classList:"t-blue h m-left10 "+t.class,href:t.url,innerText:t.title})
	;t.attr.split(/\s+/).forEach((t=>{const[n,o]=t.split("=");e.setAttribute(n,o);
	})),u.appendChild(e);
	})),d.appendChild(u),n.appendChild(d),n.classList.remove("nstGreen"),
	n.classList.remove("nstBold");const m=n.querySelector(".counter-wrap")
	;if(!m)return
	;const p=1e3*+(m.getAttribute("data-time")||0),f=Math.floor(p/864e5),h=Math.floor(p%864e5/36e5)+24*f,v=Math.floor(p%36e5/6e4),g=Math.floor(p%6e4/1e3)
	;m.innerText=`${h}:${v}:${g}`;})(t,n),n.classList.remove("hidden");}})(o[n]);
	},Jo=t=>{t.stopPropagation(),t.preventDefault()
	;const e=t.target.closest("#nst-quick-use").parentElement.getAttribute("data-itemID")
	;if(!e)return;const n=c(Z);Object.keys(n).includes(e)&&(delete n[e],d({[Z]:n
	}),Ko());},Ko=()=>{const t=document.getElementById("nst-"+Z);if(!t)return
	;for(;t.lastChild;)t.removeChild(t.lastChild)
	;const e=Object.values(c(Z)),n=document.createDocumentFragment()
	;e.forEach((t=>((t,e)=>{
	const{id:n,name:o,quantity:i}=t,a=`/images/items/${n}/medium.png`,r=b({
	classList:"nst-box-btn-div"})
	;r.setAttribute("data-itemID",n),r.setAttribute("data-qty",i);const s=w({
	id:"nst-quick-use",classList:"nst-box-button",onclick:Xo
	}),l="energy"===o?v("i",{classList:"currency-points"}):L({src:a,alt:o,
	classList:"nst-box-img"}),c=g({id:"nst-quick-name",innerText:o}),d=g({
	id:"nst-quick-close",classList:"nst-box-close",innerText:"✕",onclick:Jo})
	;s.appendChild(l),
	s.appendChild(c),s.appendChild(d),r.appendChild(s),e.appendChild(r);
	})(t,n))),t.appendChild(n),new Ge(t,{animation:150,dataIdAttr:"data-itemid",
	store:{get:()=>{const t=c(Z)
	;return Object.entries(t).sort(((t,e)=>t[1].order-e[1].order)).map((t=>t[0]))},
	set:t=>{const e=t.toArray(),n=c(Z);let o=false;e.forEach(((t,e)=>{
	n[t].order!==e&&(n[t].order=e,o=true);})),o&&d({[Z]:n});}}});},Yo=t=>{var e,n,o,i
	;t.stopPropagation(),t.preventDefault()
	;const a=null==(e=t.target)?void 0:e.closest(".name");if(!a)return
	;const r=null==(n=a.closest("li"))?void 0:n.querySelector("img")
	;let s=a.innerText;s=/Points/.test(s)?"energy":nt(s.replace(/ x\d+$/,""))
	;const l="energy"===s?"energy":r?m(r.getAttribute("src")).toString():""
	;if(!l)return;const u=c(Z);if(Object.keys(u).includes(l))return
	;const p=0===(null==(o=Object.values(u))?void 0:o.length)?0:+(null==(i=Object.values(u).reduce(((t,e)=>(null==t?void 0:t.order)>(null==e?void 0:e.order)?t:e)))?void 0:i.order)
	;u[l]={id:l,order:p+1,name:s},d({[Z]:u}),Ko();},Qo={box:t=>{var e;const n=P({
	title:V,element:t});null==(e=null==n?void 0:n.parentElement)||e.appendChild(b({
	id:"nst-item-resp",classList:"nst-box-row hidden"})),Ko();},item:t=>{
	t.removeEventListener("dblclick",Yo),t.addEventListener("dblclick",(t=>{var e
	;(null==(e=t.target)?void 0:e.closest(".name"))&&Yo(t);}));},nopager:()=>{}
	},Vo=t=>{new MutationObserver((t=>{t.forEach((t=>{
	const e=Array.from(t.addedNodes);(null==e?void 0:e.length)&&e.forEach((t=>{var e
	;const n="faction-armoury-tabs"===(null==t?void 0:t.id),o=RegExp("armoury-(medical|drugs|boosters|points)","g").test(null==(e=null==t?void 0:t.parentElement)?void 0:e.id)&&"UL"===t.tagName&&t.classList.contains("item-list")
	;Qo[n?"box":o?"item":"nopager"](t);}));}));})).observe(t,{childList:true,subtree:true});
	},Zo=()=>{const t=a().match(/ID=(\d+)/);return t?m(t[1]):0},ti=async()=>{
	const t=Zo();if(!t)return;const n=await(async()=>{const t=Zo();if(!t)return 0
	;const n=`https://www.torn.com/trade.php?step=getFullMoney&ID=${t}&rfcv=${e()}`
	;try{const t=await fetch(n,{method:"GET",headers:{
	"x-requested-with":"XMLHttpRequest"}}),e=await t.json();return m(e)}catch(o){
	return console.error(o),0}})(),o="https://www.torn.com/trade.php?rfcv="+e(),i={
	step:"view",ID:t,ajax:"true",amount:n,sub_step:"addmoney2"};try{await fetch(o,{
	method:"POST",headers:{"x-requested-with":"XMLHttpRequest"},
	body:new URLSearchParams(i)});}catch(a){console.error(a);}},ei=t=>(t=>{var e
	;if(null==(e=t.previousElementSibling)?void 0:e.classList.contains("nst-ghost-wrap"))return
	;const n=b({classList:"nst-ghost-wrap"}),o=w({innerText:"deposit",
	classList:"torn-btn",onclick:ti})
	;n.appendChild(o),t.insertAdjacentElement("beforebegin",n);
	})(t),ni=["Medical","Drug","Energy Drink","Alcohol","Candy","Booster","Supply Pack"],oi=["Primary","Secondary","Melee","Temporary"],ii=[...ni,...oi],ai=(t,e)=>{
	const n=c(Q);n&&Object.keys(n).includes(t)&&(n[t].quantity=e,d({[Q]:n}));
	},ri=t=>{var n;t.stopPropagation()
	;const o=null==(n=t.target.closest("#nst-quick-use"))?void 0:n.parentElement
	;if(!o)return;const i=o.getAttribute("data-itemID");if(!i)return;const a=c(Q)
	;a&&Object.keys(a).includes(i)&&(async t=>{
	const{category:n}=t,o=document.getElementById("nst-item-resp");if(o){
	for(;o.lastChild;)o.removeChild(o.lastChild);oi.includes(n)?await(async(t,n)=>{
	const{id:o,strangeID:i}=t,a={step:"actionForm",item_id:o,type:5,action:"equip",
	item:o,id:i,confirm:1};if(!a)return
	;const r="https://www.torn.com/item.php?rfcv="+e(),s={method:"POST",headers:{
	"x-requested-with":"XMLHttpRequest"},body:new URLSearchParams(a)
	},l=await(await fetch(r,{...s})).text()
	;n.innerHTML=l,(null==l?void 0:l.match(/ equipped/))?n.classList.add("text-nstgreen"):n.classList.remove("text-nstgreen");
	})(t,o):await(async(t,n)=>{const{id:o}=t,i={step:"useItem",itemID:o,item:o}
	;if(!i)return;const a="https://www.torn.com/item.php?rfcv="+e(),r={
	method:"POST",headers:{"x-requested-with":"XMLHttpRequest"},
	body:new URLSearchParams(i)},s=await(await fetch(a,{...r
	})).json(),l=s.links??{},c=s.text??{},d=b({});d.appendChild(x({innerHTML:c}))
	;const u=x({});Object.values(l).forEach((t=>{const e=k({
	classList:t.class+" t-blue h m-left10",href:t.url,innerText:t.title})
	;t.attr.split(/\s+/).forEach((t=>{const[n,o]=t.split("=")
	;n&&o&&e.setAttribute(n,o);})),u.appendChild(e);
	})),d.appendChild(u),n.appendChild(d),n.classList.remove("nstGreen","nstBold")
	;const m=Math.max(0,parseInt(t.quantity,10)-1);ai(o,m),di()
	;const p=n.querySelector(".counter-wrap");if(!p)return
	;const f=1e3*+(p.getAttribute("data-time")||0),h=Math.floor(f/864e5),v=Math.floor(f%864e5/36e5)+24*h,g=Math.floor(f%36e5/6e4),w=Math.floor(f%6e4/1e3)
	;p.innerText=`${v}:${g}:${w}`;})(t,o),o.classList.remove("hidden");}})(a[i]);
	},si=t=>{var e;t.stopPropagation(),t.preventDefault()
	;const n=null==(e=t.target.closest("#nst-quick-use"))?void 0:e.parentElement
	;if(!n)return;const o=n.getAttribute("data-itemID");if(!o)return;const i=c(Q)
	;i&&Object.keys(i).includes(o)&&(delete i[o],d({[Q]:i}),di());};let li,ci=""
	;const di=()=>{const t=document.getElementById("nst-"+Q);if(!t)return
	;const e=c(Q),n=JSON.stringify(e);if(n===ci)return
	;for(ci=n;t.lastChild;)t.removeChild(t.lastChild)
	;const o=Object.values(e),i=document.createDocumentFragment()
	;o.forEach((t=>((t,e)=>{
	const{id:n,name:o,quantity:i,category:a}=t,r=`/images/items/${n}/medium.png`,s=b({
	classList:"nst-box-btn-div"})
	;s.setAttribute("data-itemID",n),s.setAttribute("data-qty",i);const l=w({
	id:"nst-quick-use",classList:"nst-box-button",onclick:ri}),c=L({src:r,alt:o,
	classList:"nst-box-img"}),d=ni.includes(a)?`${o} x${i}`:""+o,u=g({
	id:"nst-quick-name",innerText:d}),m=g({id:"nst-quick-close",
	classList:"nst-box-close",innerText:"✕",onclick:si})
	;l.appendChild(c),l.appendChild(u),
	l.appendChild(m),s.appendChild(l),e.appendChild(s);
	})(t,i))),t.appendChild(i),new Ge(t,{animation:150,dataIdAttr:"data-itemid",
	store:{get:()=>{const t=c(Q)
	;return Object.entries(t).sort(((t,e)=>t[1].order-e[1].order)).map((t=>t[0]))},
	set:t=>{const e=t.toArray(),n=c(Q);let o=false;e.forEach(((t,e)=>{
	n[t].order!==e&&(n[t].order=e,o=true);})),o&&d({[Q]:n});}}});},ui=t=>{var e,n,o,i,a,r
	;const s=t.target;if(!/name-wrap/.test(s.className))return
	;const l=s.closest("li"),u=null==(e=null==l?void 0:l.dataset)?void 0:e.item,m=null==(n=null==l?void 0:l.dataset)?void 0:n.qty,p=(null==(o=null==l?void 0:l.dataset)?void 0:o.category)??"",f=(null==(i=null==l?void 0:l.querySelector('.cont-wrap ul [class*="equipped"]'))?void 0:i.getAttribute("data-id"))??"",h=null==l?void 0:l.querySelector(".title-wrap .name-wrap .name"),v=nt(null==h?void 0:h.innerText)
	;if(!(l&&u&&p&&ii.includes(p)))return;const b=c(Q)
	;if(Object.keys(b).includes(u))return
	;const g=0===(null==(a=Object.values(b))?void 0:a.length)?0:+(null==(r=Object.values(b).reduce(((t,e)=>(null==t?void 0:t.order)>(null==e?void 0:e.order)?t:e)))?void 0:r.order)
	;b[u]={id:u,order:g+1,name:v,quantity:m,category:p,strangeID:f},d({[Q]:b}),di();
	},mi=t=>{var e
	;const n=null==t?void 0:t.parentElement,o=null==n?void 0:n.querySelector("div.equipped-items-wrap"),i=P({
	title:Y,element:o});null==(e=null==i?void 0:i.parentElement)||e.appendChild(b({
	id:"nst-item-resp",classList:"nst-box-row hidden"
	})),di(),t.addEventListener("dblclick",ui),new MutationObserver((t=>{
	const e=new Set;for(const o of t){const t=o.target
	;!(t instanceof HTMLElement)||"UL"!==(null==t?void 0:t.nodeName)||null===(null==t?void 0:t.offsetParent)||"all-items"===(null==t?void 0:t.id)||Array.from(o.addedNodes).forEach((t=>{
	t instanceof HTMLElement&&"LI"===t.nodeName&&e.add(t);}));}if(0===e.size)return
	;let n=false;for(const o of e){const{item:t,qty:e,category:i}=o.dataset
	;t&&e&&ni.includes(i??"")&&(ai(t,+e),n=true);}n&&function(t,e=100){
	li&&clearTimeout(li),li=window.setTimeout(t,e);}(di,100);})).observe(t,{
	childList:true,subtree:true});},pi=(t,e)=>{
	const{item:n,selector:o,reg:i}=e,a=c("quick"+n)??false,r=null==t?void 0:t.parentElement
	;if(!r)return;const s=r.querySelector("a."+o);if(!s)return
	;const l=s.getAttribute("href");if(!l)return
	;const d=RegExp(i+"$","g"),u=RegExp(i+"1$","g"),m=a?l.replace(d,i+"1"):l.replace(u,i)
	;l!==m&&s.setAttribute("href",m);},fi=t=>{
	const e=+(c("jailscore")??"0"),n=null==t?void 0:t.parentElement;if(!n)return
	;const o=t.querySelector("span.time"),i=t.querySelector("span.level")
	;if(!o||!i)return
	;const a=(o.innerText||"").split(" ").reduce(((t,e)=>t+(/h/.test(e)?60*+e.replace(/h/g,""):/m/.test(e)?+e.replace(/m/g,""):0)),0),r=i.innerText.match(/\d+/g),s=m((null==r?void 0:r.join())??"0")*a
	;t.setAttribute("title","score: "+p(s));const l=s>e&&0!==e
	;n.style.display!==(l?"none":"")&&(n.style.display=l?"none":""),pi(t,{
	item:"bail",selector:"bye",reg:"buy"}),pi(t,{item:"bust",selector:"bust",
	reg:"breakout"});},hi=t=>{
	document.querySelectorAll("span.info-wrap").forEach((t=>fi(t)));},vi=t=>{(t=>{
	const e=P({title:"Quick Jail",element:null==t?void 0:t.parentElement}),n=b({
	classList:"nst-box-column"}),o=b({classList:"nst-box-column"});e.appendChild(n),
	e.appendChild(o),O({elem:n,title:"Jail Score",cback:()=>{
	t.querySelectorAll("span.info-wrap").forEach((t=>fi(t)));}})
	;const i="Quick Bust",a=h(i),r={id:"nst-"+a,value:a};o.appendChild(D(r,i,"",hi))
	;const s="Quick Bail",l=h(s),c={id:"nst-"+l,value:l};o.appendChild(D(c,s,"",hi));
	})(t),new MutationObserver((t=>{const e=[];t.forEach((t=>{
	t.addedNodes.forEach((t=>{if("LI"===t.tagName){
	const n=t.querySelector("span.info-wrap");n&&e.push(n);}}));
	})),e.length&&e.forEach(fi);})).observe(t,{childList:true,subtree:true});},bi=t=>{
	t=t.parentElement;const e=c("userdata");if(!(null==e?void 0:e.refills))return
	;const{energy_refill_used:n,nerve_refill_used:o}=e.refills;Object.values({
	energy:{name:"energy",selector:"[class*='bar'][class*='energy']",
	link:"https://www.torn.com/gym.php",refillUsed:n},nerve:{name:"nerve",
	selector:"[class*='bar'][class*='nerve']",
	link:"https://www.torn.com/crimes.php",refillUsed:o}}).forEach((e=>{var n
	;const{name:o,selector:i,link:a,refillUsed:r}=e,s=i+' p[class^="bar-name"]',l=null==t?void 0:t.querySelector(s),c=null==(n=null==l?void 0:l.parentElement)?void 0:n.parentElement
	;if(!l||!c)return
	;c.hasAttribute("href")&&c.removeAttribute("href"),c.dataset.nstRefillListener||(c.addEventListener("click",(()=>window.open(a,"_blank"))),
	c.dataset.nstRefillListener="1")
	;const d="energy"===o?"text-nstgreen":"nerve"===o?"text-nstred":""
	;r||l.classList.add(d);}));},gi=t=>{t&&t.remove();},wi=t=>{
	if(3===t.nodeType)return void(t=>{var e
	;3===t.nodeType&&t.nodeValue&&!(null==(e=t.parentElement)?void 0:e.isContentEditable)&&(t.nodeValue=t.nodeValue.replaceAll("Natural Selection","NS"));
	})(t);let e=t.firstChild;for(;e;)wi(e),e=e.nextSibling;},yi=t=>{wi(t)
	;const e=document.querySelector("#map");e&&new MutationObserver((t=>{
	for(const e of t){for(const t of Array.from(e.addedNodes))wi(t)
	;"attributes"===e.type&&wi(e.target);}})).observe(e,{childList:true,subtree:true,
	attributes:true});};let xi={},ki=null;const Li=()=>{var t
	;const e=document.querySelector("div[class^='joinWrap'] div[class^='rowsWrap']")
	;if(!e)return void(xi={});const n=e.children;var o
	;if(0!==n.length)for(let i=0;i<n.length;i++){
	const e=n[i],a=null==e?void 0:e.getAttribute("id");if(!a)continue
	;xi[a]||(xi[a]=r())
	;const s=(o=xi[a],f(900-(r()-o))),l="div[class^='betBlock']",c=e.querySelector(l)
	;if(!c)continue;const d=c.getAttribute("aria-label");if(!d)continue
	;const u=null==(t=d.split(":")[1])?void 0:t.trim();if(!u)continue
	;const h="$"+p(m(u))+"\n"+s;c.innerText!==h&&(c.innerText=h);}else xi={};},_i=t=>{
	if("lobby"!==(null==t?void 0:t.step))return;const e=null==t?void 0:t.data
	;Object.values(e).forEach((t=>{ void 0!==t.ID&&(xi[t.ID]=t.timeCreated);
	})),null!==ki&&clearInterval(ki),ki=setInterval(Li,1e3);},Ti={},Mi={balboas:{
	req:["defense","dexterity"],desc:"balboas (def/dex)"},frontline:{
	req:["strength","speed"],desc:"frontline (str/spd)"},gym3000:{req:["strength"],
	desc:"gym3000 (str)"},isoyamas:{req:["defense"],desc:"isoyamas (def)"},rebound:{
	req:["speed"],desc:"rebound (spd)"},elites:{req:["dexterity"],
	desc:"elites (dex)"}},Oi=()=>{["one","two"].forEach((t=>{
	const e=document.getElementById(`nst-spgym-${t}-sel`),n=document.getElementById(`nst-spgym-${t}-msg`)
	;if(!e||!n)return;const o=e.value,i=Mi[o].req,a={},r={}
	;for(const m in Ti)i.includes(m)?a[m]=Ti[m]:r[m]=Ti[m]
	;const s=Object.values(a).reduce(((t,e)=>t+e),0),l=Object.values(r).reduce(Object.keys(a).length>1?(t,e)=>t+e:(t,e)=>Math.max(t,e),0),c=p(s>=1.25*l?s/1.25-l:1.25*l-s),d=Object.keys(a).length>1?Object.keys(s>=1.25*l?r:a).join(" and "):(s>=1.25*l?Object.keys(r).filter((t=>Ti[t]===l)):Object.keys(a)).join(""),u=`Gain ${s>=1.25*l?"no more than":""} ${c} ${d}`
	;n.innerText=u;}));},Di=t=>(t=>{const e=P({title:"Special Gym",element:t})
	;["one","two"].forEach((t=>{var n;const o=b({id:"nst-spgym-"+t}),i=v("select",{
	id:`nst-spgym-${t}-sel`,classList:"nst-spgym-sel",onchange:t=>{
	const e=null==t?void 0:t.target,n=e.id.replace(/nst-/g,"").replace(/-sel/g,"").replace(/-/g,"")
	;d({[n]:e.value}),Oi();}}),a=null==(n=c("spgym"+t))?void 0:n.toString()
	;Object.entries(Mi).forEach((([t,e])=>{const n={value:t,innerText:e.desc
	},o=v("option",n);o.selected=a===t,i.appendChild(o);}));const r=x({
	id:`nst-spgym-${t}-msg`,classList:"nst-spgym-msg"})
	;o.appendChild(i),o.appendChild(r),e.appendChild(o);}));})(t),Ii=t=>{var e,n
	;"stats"in t?Object.entries(null==t?void 0:t.stats).forEach((([t,e])=>Ti[t]=m(null==e?void 0:e.value))):"stat"in t&&(Ti[null==(e=null==t?void 0:t.stat)?void 0:e.name]=m(null==(n=null==t?void 0:t.stat)?void 0:n.newValue)),
	Oi();},Si=n("XID"),ji=async t=>{var e,n,o;(t=>{
	const e=null==t?void 0:t.closest(".profile-wrapper"),n=P({title:"Stat Spies",
	element:e}),o=b({id:"nst-compare",classList:"nst-box-column"}),i=b({
	id:"nst-spies",classList:"nst-box-column item-start"});o.appendChild(v("table",{
	id:"nst-compare-table",classList:"nst-table"})),i.appendChild(v("table",{
	id:"nst-spies-table",classList:"nst-table"})),i.appendChild(v("table",{
	id:"nst-avg-table",classList:"nst-table"})),n.appendChild(o),n.appendChild(i);
	})(t);const i=await z({selection:"/spy/user/"+Si})
	;(null==i?void 0:i.status)&&((null==(e=null==i?void 0:i.compare)?void 0:e.status)&&(t=>{
	const e=document.getElementById("nst-compare-table");if(!e)return;e.innerHTML=""
	;const n=document.createDocumentFragment(),o=v("tr",{
	classList:"nst-table-row text-center nst-nodrag"})
	;["Stat","Them","You"].forEach((t=>o.appendChild(v("th",{innerText:t,
	classList:"nst-table-cell nst-table-cell-head"
	})))),n.appendChild(o),Object.keys(t).forEach((e=>{var o,i;const a=v("tr",{
	classList:"nst-table-row","data-id":e
	}),r=+(null==(o=null==t?void 0:t[e])?void 0:o.amount),s=+(null==(i=null==t?void 0:t[e])?void 0:i.difference),l=s>0?"text-nstgreen":s<0?"text-nstred":"text-nsttorntext",c=v("td",{
	innerText:""+e,classList:"nst-table-cell text-nsttorntext"}),d=v("td",{
	innerText:""+p(r),classList:"nst-table-cell text-nsttorntext"}),u=v("td",{
	innerText:""+p(r+s),classList:"nst-table-cell"})
	;u.classList.add(l),a.appendChild(c),
	a.appendChild(d),a.appendChild(u),n.appendChild(a);}));const i=v("tr",{
	classList:"nst-table-row nst-nodrag text-center"}),a=v("td",{
	classList:"nst-table-cell",colSpan:3}),r=k({
	href:"https://www.tornstats.com/settings/script",target:"_blank",
	classList:"t-blue nst-nodrag",innerText:"Change your script settings here"})
	;a.appendChild(r),i.appendChild(a),n.appendChild(i),e.appendChild(n),new Ge(e,{
	animation:150,filter:".nst-nodrag",store:{
	get:()=>c("tscompare")??Object.keys(t),set:t=>d({tscompare:t.toArray()})}});
	})(null==(n=null==i?void 0:i.compare)?void 0:n.data),
	(null==(o=null==i?void 0:i.spy)?void 0:o.status)&&(t=>{
	const e=document.getElementById("nst-spies-table");if(!e)return;e.innerHTML=""
	;const n=document.createDocumentFragment(),o=v("tr",{
	classList:"nst-table-row text-center"})
	;["Stat","Them","You"].forEach((t=>o.appendChild(v("th",{innerText:t,
	classList:"nst-table-cell nst-table-cell-head"
	})))),n.appendChild(o),["Strength","Defense","Speed","Dexterity","Total"].forEach((e=>{
	const o=+(null==t?void 0:t[e.toLowerCase()]),i=+(null==t?void 0:t["delta"+e]),a=i>0?"text-nstgreen":i<0?"text-nstred":"text-nsttorntext",r=v("tr",{
	classList:"nst-table-row"}),s=v("td",{innerText:""+e,
	classList:"nst-table-cell text-nsttorntext"}),l=v("td",{innerText:""+p(o),
	classList:"nst-table-cell text-nsttorntext"}),c=v("td",{innerText:""+p(o+i),
	classList:"nst-table-cell"})
	;c.classList.add(a),r.appendChild(s),r.appendChild(l),
	r.appendChild(c),n.appendChild(r);}));const i=v("tr",{
	classList:"nst-table-row nst-nodrag text-center"}),a=v("td",{
	classList:"nst-table-cell text-nsttorntext",colSpan:3,
	innerText:"Last Update: "+((null==t?void 0:t.difference)??"")})
	;i.appendChild(a),n.appendChild(i),e.appendChild(n);})(null==i?void 0:i.spy));
	},Ei={},Pi=n("user2ID")??"",$i={life:"",wall:"",revive:"",bs:"",hosp:"",la:""
	},qi=Object.keys($i),zi={life:t=>t+"%",wall:t=>t?"ON":"OFF",
	revive:t=>t?"ON":"OFF",bs:()=>"N/A",hosp:t=>""===t||0===t?"OUT":f(+t-r()),
	la:t=>f(r()-+t)},Ai=()=>{qi.forEach((t=>{const e=Ei[t];if(!e)return
	;const n=zi[t]($i[t])??"";e.innerText!==n&&(e.innerText=n);}));},Hi=async t=>{
	if(document.querySelector("#nst-target-status"))return;await(async()=>{
	var t,e,n,o;const i={section:"user",select:"",objID:Pi},a=await q(i)
	;if(!(null==a?void 0:a.status))return
	;const r=null==(t=null==a?void 0:a.states)?void 0:t.hospital_timestamp,s=null==(e=null==a?void 0:a.last_action)?void 0:e.timestamp,l=null==(n=null==a?void 0:a.life)?void 0:n.maximum,c=null==(o=null==a?void 0:a.life)?void 0:o.current,d=Math.floor(c/l*100),u=1===(null==a?void 0:a.revivable),m=Object.values(null==a?void 0:a.basicicons).some((t=>t.includes("Territory War")))
	;$i.life=d,$i.wall=m,$i.revive=u,$i.bs="",$i.hosp=r,$i.la=s;})()
	;const e=null==t?void 0:t.parentElement,n=null==e?void 0:e.parentElement,o=null==n?void 0:n.parentElement,i=b({
	id:"nst-target-status",classList:"nst-status-wrap"
	}),a=n.offsetTop+2,r=n.offsetLeft+e.offsetLeft+10
	;i.style.position="absolute",i.style.top=a+"px",
	i.style.left=r+"px",i.appendChild((()=>{const t=v("table",{
	id:"nst-status-table",classList:"nst-table"}),e=v("tr",{
	classList:"nst-table-row text-center"});qi.forEach((t=>e.appendChild(v("th",{
	innerText:t,classList:"nst-table-cell nst-table-cell-head"})))),t.appendChild(e)
	;const n=v("tr",{classList:"nst-table-row"});return qi.forEach((t=>{var e
	;const o=(null==(e=zi[t])?void 0:e.call(zi,$i[t]))??"",i=v("td",{
	classList:"nst-table-cell text-nsttorntext"}),a=b({id:"nst-status-"+t,
	classList:"nst-status-item",innerText:o})
	;i.appendChild(a),n.appendChild(i),Ei[t]=a;})),t.appendChild(n),t
	})()),o.appendChild(i),window.setInterval(Ai,1e3);},Ci=async t=>{var e,n,o,i,a
	;const r=+(null==(o=null==(n=null==(e=null==t?void 0:t.DB)?void 0:e.usersLife)?void 0:n.defender)?void 0:o.lifeBar),s=+(null==(a=null==(i=null==t?void 0:t.DB)?void 0:i.defenderUser)?void 0:a.lastaction)
	;$i.life=r,$i.la=s;},Ri=t=>{
	const e=/^x\d+\s/.test(n=t)?"start":/\sx\d+$/.test(n)?"end":null;var n
	;if(!e)return {name:t,quantity:1};const o=t.split(" "),i={start:0,end:o.length-1
	}[e],a=o[i].substr(1),r=parseInt(a,10)
	;return !e||isNaN(r)||r.toString().length!==a.length?{name:t,quantity:1}:{
	name:o.filter(((t,e)=>e!==i)).join(" ").trim(),quantity:r}},Ni=async t=>{
	var e,n,o
	;const i=null==t?void 0:t.querySelectorAll(".trade-cont .user.right li.color2 ul li")
	;if(!i||0===i.length)return
	;const a=null==(e=t.parentElement)?void 0:e.querySelector(".nst-trade-value")
	;a&&a.remove();const r=await q({section:"torn",select:"items"})
	;if(!(null==r?void 0:r.status))return;const s=null==r?void 0:r.items,l=new Map
	;for(const u of Object.values(s))u&&u.name&&l.set(u.name,u);let c=0
	;for(const u of Array.from(i)){
	const t=u.querySelector(".name"),e=null==(o=null==(n=null==t?void 0:t.firstChild)?void 0:n.textContent)?void 0:o.trim()
	;if(!e)continue;const{name:i,quantity:a}=Ri(e),r=l.get(i)
	;r&&(c+=parseInt(r.market_value,10)*a);}const d=b({classList:"nst-trade-value",
	innerText:"MV: $"+p(c)});t.insertAdjacentElement("beforebegin",d);},Ui=t=>{
	if(!("currentFightStatistics"in t))return;const e=new Map
	;for(const o of Object.values(t.currentFightStatistics))"object"==typeof o&&null!==o&&"playername"in o&&e.set(o.playername,o)
	;const n=document.querySelectorAll('ul[class^="participants"] div[class^="playerWrap"] > span[class^="playername"]')
	;if(n.length)for(const o of Array.from(n)){
	if(o.querySelector(".nst-intercept"))continue
	;const t=o.innerText,n=e.get(t),i=null==n?void 0:n.userID
	;i&&(o.innerHTML="",o.appendChild(k({classList:"nst-intercept text-nsttorntext",
	href:"loader.php?sid=attack&user2ID="+i,target:"_blank",innerText:t})));}},Fi={
	"Small Arms Cache":20,"Melee Cache":30,"Medium Arms Cache":50,
	"Heavy Arms Cache":70,"Armor Cache":60},Bi=(t,e)=>{
	const n=t.innerText.split(",").map((t=>t.trim()));let o=0,i=0,a=0
	;for(const s of n){const t=s.match(/^(\d+)x (.+)$/);if(!t)continue
	;const n=parseInt(t[1],10),r=t[2];if(!Fi[r])continue;const l=e.get(r)
	;l&&(i+=n,o+=(parseInt(l.market_value,10)||0)*n,a+=n*+Fi[r]);}
	const r=`caches: ${i} | BB: ${a} | MV: $${p(o)}`
	;t.querySelector(".nst-war-value")||t.appendChild(b({classList:"nst-war-value",
	innerText:r}));},Gi=async t=>{const e=null==t?void 0:t.parentElement;if(!e)return
	;const n=await q({section:"torn",select:"items"})
	;if(!(null==n?void 0:n.status))return;const o=null==n?void 0:n.items,i=new Map
	;for(const a of Object.values(o))a&&a.name&&i.set(a.name,a)
	;for(const a of Array.from(e.children))Bi(a,i);},Wi={Argentina:167,Canada:41,
	"Cayman Islands":35,China:242,Hawaii:134,Japan:225,Mexico:26,"South Africa":297,
	Switzerland:175,UAE:271,"United Kingdom":159},Xi={standard:1,airstrip:.7,
	private:.5,business:.3},Ji={},Ki={},Yi={},Qi=Object.keys(Xi),Vi=t=>{
	if(Yi[t]&&document.body.contains(Yi[t]))return Yi[t]
	;const e=document.querySelector(t);return Yi[t]=e,e},Zi=(t,e="standard",n=false)=>{
	if(!t)return new Date;const o=new Date(t.timestamp).getTime(),i=t.country
	;i in Wi||console.warn("Unknown country: "+i)
	;const a=(Wi[i]??0)*(Xi[e]??1)*6e4,r=n?1e3*(t.variance??0):0
	;return new Date(o+a+r)},ta=(t,e="standard",n=false)=>{const o=Zi(t,e,n)
	;return `${o.getUTCHours().toString().padStart(2,"0")}:${o.getUTCMinutes().toString().padStart(2,"0")}:${o.getUTCSeconds().toString().padStart(2,"0")} TCT`
	},ea=(t,e,n)=>{
	const o=Vi("miniProfile"===n?"#profile-mini-root span.sub-desc":"div.description > span.sub-desc")
	;if(!o)return clearInterval(Ji[n]),void delete Ji[n]
	;"standard"!==e&&"business"!==e||o.hasAttribute("data-flight-listener")||(o.setAttribute("data-flight-listener","true"),
	o.addEventListener("click",(()=>{var i;o.removeAttribute("data-flight-listener")
	;const a=o.cloneNode(true)
	;null==(i=o.parentNode)||i.replaceChild(a,o),ea(t,"standard"===e?"business":"standard",n);
	}),{once:true}));const i=Date.now(),a=Ki[t];if(!a)return
	;const r=Zi(a,e,false),s=Zi(a,e,true),l=(+r-i)/1e3;let c;var d
	;c=l<=0?"Landing in "+((d=(+s-i)/1e3)<60?Math.max(0,Math.floor(d))+" sec":Math.floor(d/60)+" min"):"Landing after "+ta(a,e)
	;const u=`${c} (${e})`
	;o.innerText!==u&&(o.innerText=u,o.setAttribute("aria-live","polite")),
	o.style.color=l<=60?"#e74c3c":l<=300?"#f39c12":"";},na=async(t,e)=>{var n,o
	;const i=null==(n=t.user)?void 0:n.userID,a=null==(o=t.userStatus)?void 0:o.status,{type:r,flightType:s}=a||{}
	;if(!r||!r.startsWith("traveling"))return;const l=Qi.includes(s)?s:"business"
	;if(setTimeout((()=>{
	const t=Vi("miniProfile"===e?"#profile-mini-root span.sub-desc":"div.description > span.sub-desc"),n=`(${l||"standard/business"})`
	;t&&t.innerText!==n&&(t.innerText=n);}),500),!Ki[i]){const t=await(async t=>{
	const{selection:e,api:n,playerID:o}=t,i=`https://torn.seintz.com/api/${n??c("apikey")}/${e}/${o}/`,a=await tt("GET",i)
	;return B()?a:null==a?void 0:a.response})({playerID:i,selection:"fly"});Ki[i]={
	timestamp:t.timestamp??Date.now(),country:t.country??"Unknown",...t};}
	Ji[e]&&(clearInterval(Ji[e]),delete Ji[e]),ea(i,l,e),Ji[e]=setInterval((()=>{
	ea(i,l,e);const t=Ki[i];if(t){const n=Zi(t,l,false)
	;Date.now()>+n&&(clearInterval(Ji[e]),delete Ji[e]);}}),1e3)
	;const d=Vi("div.profile-container > svg");if(d){
	d.setAttribute("style","top: 14px");let t=d.nextElementSibling;if(t){
	const e=Qi.map((t=>`${t}${t===l?" (current)":""}: ${ta(Ki[i],t)}`)).join("\n")
	;t.setAttribute("title",e);}}},oa=t=>{
	Ji.miniProfile&&clearInterval(Ji.miniProfile),na(t,"miniProfile");},ia=t=>{
	Ji.profile&&clearInterval(Ji.profile),na(t,"profile");},aa={home:()=>{
	N("livenetworth")&&Mn(zo,'ul.info-cont-wrap [aria-label^="Networth"]'),
	N("effectivestats")&&Mn(so,".battle");},abro:()=>{
	N("maxbuyabroad")&&Mn(Ao,"body");},trav:()=>{}},ra={amarket:()=>{
	N("auctionrwbonus")&&Mn(zn,"#auction-house-tabs"),
	N("auctionfilter")&&Mn(qn,"#auction-house-tabs");},bazaar:()=>{
	N("bazaarrwbonus")&&Mn(Cn,"body"),
	N("bazaarvalue")&&Mn(Rn,"#bazaarRoot .wrapper");},city:()=>{},companies:()=>{},
	displaycase:()=>{},faction:()=>{},gym:()=>{
	N("specialgym")&&(Mn(Di,"#gymroot"),X(Ii,"getInitialGymInfo"),X(Ii,"train"));},
	index:()=>{},item:()=>{
	N("equipnoconfirm")&&W(uo,"actionForm"),N("itemsrwbonus")&&Mn(qo,"div.items-wrap");
	},imarket:()=>{},loader:()=>{
	N("warintercept")&&"attack"===o()&&X(Ui,"attackData"),
	N("easypreattack")&&"attack"===o()&&(t=>{
	const e=B()?window:unsafeWindow,{fetch:n}=e;e.fetch=async(...e)=>{var o,i
	;const a=await n(...e),r=(null==(o=e[0])?void 0:o.url)||e[0],s=null==(i=null==r?void 0:r.match(RegExp("(?<=step=|sid=)(\\w+)","g")))?void 0:i[0]
	;return s&&"attackData"===s?t(a):a};
	})(ao),N("easyfight")&&"attack"===o()&&Mn(io,"body"),
	N("targetstatus")&&"attack"===o()&&X(Ci,"attackData");},page:()=>{
	N("rrtimeout")&&"russianRoulette"===o()&&X(_i,"russianRouletteData");},
	pmarket:()=>{},profiles:()=>{N("flighttimer")&&G(ia,"getProfileData");},
	search:()=>{},trade:()=>{},all:()=>{
	N("leftalign")&&document.documentElement.classList.add("nst-left-align"),
	N("minilastaction")&&X(Ho,"UserMiniProfile"),
	N("flighttimer")&&X(oa,"UserMiniProfile");},nopager:()=>{}},sa={amarket:()=>{},
	bazaar:()=>{N("bazaarautoprice")&&Mn(Hn,"body");},city:()=>{
	N()&&Mn(yi,"body"),N("cityfinds")&&Mn(Un,"#map .leaflet-marker-pane");},
	companies:()=>{
	N("ezmoneydeposit")&&Mn(ho,"body"),N("employeela")&&Mn(co,".manage-company"),
	N("companyrestock")&&/stock/.test(a())&&Mn(Fn,"body");},displaycase:()=>{
	N("displaycaseitemid")&&Mn(Gn,"ul.dc-list"),
	N("displayrwbonus")&&Mn(Wn,"ul.display-cabinet");},factions:()=>{
	N("ezmoneydeposit")&&Mn(ho,"body"),
	N(Z)&&Mn(Vo,"#faction-armoury"),N("hidefactiondesc")&&(()=>{
	const t=document.documentElement
	;"none"!==t.style.getPropertyValue("--nst-hide-fact-desc")&&t.style.setProperty("--nst-hide-fact-desc","none");
	})(),N("hidewargraph")&&(()=>{const t=document.documentElement
	;"none"!==t.style.getPropertyValue("--nst-hide-war-graph")&&t.style.setProperty("--nst-hide-war-graph","none");
	})(),N("armoryfilter")&&Mn(jn,"#faction-armoury");},gym:()=>{
	N("")&&Mn(Eo,'#gymroot ul[class*="properties"] [class*="strength"]');},
	index:()=>{aa[U()]();},item:()=>{
	N("removeuglyimage")&&Mn(gi,'[class^="itemPreviewWrapper"]',true),
	N("easyloadoutequip")&&Mn(ro,'ul[class^="slots"]'),N(Q)&&Mn(mi,"div.items-wrap");
	},imarket:()=>{},jailview:()=>{N("quickjail")&&Mn(vi,"ul.users-list");},
	loader:()=>{
	N("missionhelper")&&"missions"===o()&&Mn(Ro,".giver-cont-wrap"),N("fighterino")&&"attack"===o()&&Mn(jo,'div[class^="playersModelWrap"]'),
	N("targetstatus")&&"attack"===o()&&Mn(Hi,'[class^="playerWindow"] [class*="defender"]');
	},page:()=>{
	aa[U()](),N("pokername")&&"holdem"===o()&&Mn(Wo,"div[class^=players]");},
	pmarket:()=>{
	N("pointsnoconfirm")&&Mn(Bo,".users-point-sell"),N("pointsmuglight")&&Mn(Uo,".users-point-sell");
	},profiles:()=>{
	N("idtoname")&&Mn($o,".user-info-value"),N("hidemedals")&&Mn(Po,".medals-wrapper"),
	N("statspies")&&Mn(ji,".user-info-value");},properties:()=>{
	N("ezmoneydeposit")&&Mn(ho,"body");},shops:()=>{N("cshopmaxbuy")&&Mn(Bn,"body");},
	trade:()=>{
	N("tradevalue")&&Mn(Ni,"#trade-container .trade-cont"),N("quickghost")&&Mn(ei,"#trade-container .trade-cont .user.left");
	},war:()=>{var t
	;N("warvalue")&&"rankreport"===(null==(t=window.location.search.match(/\?step=(\w+)/))?void 0:t[1])&&Mn(Gi,'li[class^="members-bonus-row"]');
	},all:()=>{N("refillreminder")&&Mn(bi,'[class*="bar"][class*="energy"]');},
	nopager:()=>{}},la={loading:()=>{
	Mn(wn,"#sidebar"),C()&&(document.onreadystatechange||(document.onreadystatechange=()=>la[document.readyState]()),
	(ra.all??ra.nopager)(),(ra[i()]??ra.nopager)(),R());},interactive:()=>{(()=>{
	const t=v("style",{})
	;t.textContent='*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.\\!container{width:100%!important}.container{width:100%}@media (min-width: 640px){.\\!container{max-width:640px!important}.container{max-width:640px}}@media (min-width: 768px){.\\!container{max-width:768px!important}.container{max-width:768px}}@media (min-width: 1024px){.\\!container{max-width:1024px!important}.container{max-width:1024px}}@media (min-width: 1280px){.\\!container{max-width:1280px!important}.container{max-width:1280px}}@media (min-width: 1536px){.\\!container{max-width:1536px!important}.container{max-width:1536px}}.nst-hide-medal{display:none!important}.nst-left-align .d .container,.nst-left-align .d .\\!container{margin-left:1.25rem!important;justify-content:flex-start!important}.nst-left-align .d.without-sidebar .container,.nst-left-align .d.without-sidebar .content-wrapper,.nst-left-align .d .anonymous .content-wrapper,.nst-left-align .d.without-sidebar .\\!container{margin-left:1.25rem}.nst-trade-value{height:1.5rem;text-align:center;font-size:.875rem;line-height:1.5rem;--tw-text-opacity: 1;color:rgb(108 173 43 / var(--tw-text-opacity, 1))}.nst-city-item{left:-1.25rem!important;top:-1.25rem!important;z-index:999!important;box-sizing:border-box!important;display:block!important;height:2.5rem!important;width:2.5rem!important;border-radius:9999px!important;border-width:1px!important;border-style:solid!important;--tw-border-opacity: 1 !important;border-color:rgb(0 0 0 / var(--tw-border-opacity, 1))!important;background-color:#124707cc!important;padding:.75rem!important;--tw-shadow: 0 25px 50px -12px rgb(0 0 0 / .25) !important;--tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color) !important;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)!important}.nst-city-item:hover{left:-2.5rem!important;top:-2.5rem!important;z-index:999!important;height:10rem!important;width:10rem!important;--tw-bg-opacity: 1 !important;background-color:rgb(0 0 0 / var(--tw-bg-opacity, 1))!important;padding:2.25rem!important}.nst-findsworth{margin:.25rem;padding:.25rem;font-weight:700}.nst-findslist{margin:.25rem;padding:.25rem;text-align:left}.nst-status-wrap{z-index:10;display:flex;flex-direction:column;flex-wrap:wrap;align-content:flex-start;align-items:flex-start;justify-content:center}.nst-status-item{text-align:center}.nst-lastaction{padding:.25rem}.nst-spgym-sel,.nst-spgym-msg{margin:.25rem;padding:.25rem}.nst-steadfast{margin:.25rem;padding:.25rem;text-align:center}.nst-pokername{color:var(--holdem-text-color-main)}.nst-ghost-wrap{display:flex;flex-direction:column;flex-wrap:wrap;align-content:center;align-items:center;justify-content:center;padding:.25rem}.nst-rw-show{display:flex!important;flex-direction:row!important;flex-wrap:nowrap!important;align-content:center!important;align-items:center!important;justify-content:flex-start!important}.nst-rw-show-wrap{margin-left:.5rem;display:flex;flex-direction:row;flex-wrap:nowrap}.nst-rw-single{margin-right:.5rem;border-radius:.5rem;border-width:2px;border-style:solid;--tw-border-opacity: 1;border-color:rgb(34 34 34 / var(--tw-border-opacity, 1));padding:.25rem;font-size:.75rem;line-height:1rem}.nst-rw-bazaar{top:.25rem!important;float:left!important;display:inline-block!important;white-space:nowrap!important;padding-right:0!important;padding-left:.25rem!important}.nst-rw-display{right:0!important;top:-2.5rem!important;float:left!important;white-space:nowrap!important}.nst-icon{cursor:pointer!important;background-image:url(https://factiontags.torn.com/11581-56425.png)!important;background-position:center!important}.nst-logo{font-size:1.5rem;line-height:2rem;font-weight:700;--tw-text-opacity: 1;color:rgb(66 140 165 / var(--tw-text-opacity, 1))}.nst-menu{margin-left:2rem;margin-top:2rem;margin-bottom:10rem;flex:1 1 0%}.nst-menu-wrap{border-radius:.5rem}.nst-menu-title{position:relative;top:0;left:0;display:flex;height:2rem;flex-wrap:wrap;align-content:center;align-items:center;border-top-left-radius:.5rem;border-top-right-radius:.5rem;border-bottom-width:1px;border-style:solid;--tw-border-opacity: 1;border-bottom-color:rgb(0 0 0 / var(--tw-border-opacity, 1));background-color:var(--default-bg-panel-color);padding:.25rem .75rem;font-size:.875rem;line-height:2rem;font-weight:700;color:var(--default-color)}.nst-menu-body{display:flex;border-bottom-right-radius:.5rem;border-bottom-left-radius:.5rem;background-color:var(--default-bg-panel-color);line-height:.75rem}.nst-ul-main{float:none;display:table-cell;list-style-type:none;border-right-width:1px;border-style:solid;--tw-border-opacity: 1;border-right-color:rgb(0 0 0 / var(--tw-border-opacity, 1));vertical-align:top}.nst-menu-page{position:relative;display:block;width:9rem;border-bottom-width:1px;border-style:solid;--tw-border-opacity: 1;border-bottom-color:rgb(0 0 0 / var(--tw-border-opacity, 1));background-color:var(--default-bg-panel-color);padding:.5rem;font-weight:700;color:var(--default-color)}.nst-menu-page:hover{background-color:var(--default-bg-panel-active-color)}.nst-menu-sel{background-color:var(--default-bg-panel-active-color)!important}.nst-menu-item{float:none;display:block;width:100%;vertical-align:top}.nst-message{margin:.5rem;padding:.25rem;--tw-text-opacity: 1;color:rgb(185 70 45 / var(--tw-text-opacity, 1))}.nst-api-wrap{margin:.5rem;display:flex;flex-direction:column;flex-wrap:wrap;align-content:center;align-items:center;justify-content:center;padding:.25rem}.nst-block-title{margin:.5rem!important}.nst-block{margin:.5rem;display:flex;flex-direction:column;flex-wrap:wrap;align-content:center;align-items:center;justify-content:center;border-bottom-width:1px;border-style:solid;--tw-border-opacity: 1;border-bottom-color:rgb(249 250 251 / var(--tw-border-opacity, 1));padding:.5rem}.nst-script-block{margin:.5rem;display:flex;flex-direction:column;flex-wrap:wrap;align-content:flex-start;align-items:flex-start;justify-content:center;padding:.5rem}.nst-outcome{display:flex;flex-direction:row;flex-wrap:wrap;align-content:center;align-items:center;justify-content:center}.list-group-item{margin:.5rem;border-width:1px;border-style:solid;--tw-border-opacity: 1;border-color:rgb(107 114 128 / var(--tw-border-opacity, 1));padding:.5rem 1rem;text-align:center;font-size:.875rem;line-height:1.25rem}.nst-tos-title{margin-top:.75rem!important;margin-bottom:1.25rem!important;text-align:center!important;font-size:1.5rem!important;line-height:2rem!important;font-weight:700!important}.nst-tos-wrap{margin:.5rem;white-space:normal;overflow-wrap:normal;word-break:normal;overflow-wrap:break-word;padding:.25rem;font-size:.875rem;line-height:1.25rem}.nst-box{margin-top:.75rem;margin-bottom:.75rem;box-sizing:border-box;display:flex;flex-direction:column}.nst-box-header{display:flex;border-top-left-radius:.5rem;border-top-right-radius:.5rem;border-bottom-width:0px;--tw-bg-opacity: 1;background-color:rgb(0 0 0 / var(--tw-bg-opacity, 1));padding:.25rem .75rem;font-size:1.125rem;line-height:1.75rem;--tw-text-opacity: 1;color:rgb(66 140 165 / var(--tw-text-opacity, 1));--tw-shadow: inset 0 2px 4px 0 rgb(0 0 0 / .05);--tw-shadow-colored: inset 0 2px 4px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}#nst-arrow{display:flex;height:1rem;width:1rem}.nst-box-title{flex-grow:1;font-size:.875rem;font-weight:700;line-height:1rem;--tw-text-opacity: 1;color:rgb(66 140 165 / var(--tw-text-opacity, 1))}.nst-box-content{border-bottom-right-radius:.5rem;border-bottom-left-radius:.5rem;border-width:1px;border-top-width:0px;border-style:solid;--tw-border-opacity: 1;border-color:rgb(0 0 0 / var(--tw-border-opacity, 1));background-color:var(--default-bg-panel-color);color:var(--default-color)}.nst-box-content>p{margin:.25rem;text-align:center}.nst-box-row{margin:.25rem;display:flex;flex-direction:row;flex-wrap:wrap;align-content:center;align-items:flex-start;justify-content:space-evenly;text-align:center}.nst-box-column{margin:.25rem;display:flex;flex:1 1 0%;flex-direction:column;flex-wrap:wrap;align-content:center;align-items:center;justify-content:center;text-align:center}.nst-box-item{margin:.125rem .25rem;display:flex;align-content:flex-start;align-items:center;font-size:.875rem;line-height:1.25rem}.nst-box-item>input{margin-top:0;margin-bottom:0;margin-left:.25rem;margin-right:.25rem}.nst-box-button{position:relative;display:flex;width:100%;flex-direction:column;flex-wrap:wrap;align-items:center;padding:.25rem;color:var(--default-color)}.nst-box-close{position:absolute;top:0;right:.25rem;cursor:pointer;font-size:.75rem;line-height:1rem}.nst-box-img{vertical-align:middle}.nst-box-btn-div{margin:.25rem;display:flex;flex:0 0 14%;justify-content:center;align-self:stretch;border-radius:.5rem;border-width:1px;border-style:solid;--tw-border-opacity: 1;border-color:rgb(34 34 34 / var(--tw-border-opacity, 1));padding:0}.nst-box-btn-div:hover{background-color:var(--default-bg-panel-active-color)}#nst-item-resp{justify-content:center}.nst-input{margin:0;box-sizing:border-box;height:1.5rem;border-radius:.25rem;border-width:1px;border-style:solid;--tw-border-opacity: 1;border-color:rgb(0 0 0 / var(--tw-border-opacity, 1));background-color:var(--default-bg-panel-active-color);text-align:center;font-size:.875rem;line-height:1.25rem;font-weight:500;color:var(--default-color)}.nst-table{box-sizing:border-box;width:100%;border-width:2px;border-style:solid;--tw-border-opacity: 1;border-color:rgb(31 41 55 / var(--tw-border-opacity, 1))}.nst-table-row{text-align:left}.nst-table-cell-head{font-size:.875rem;line-height:1.25rem;font-weight:700}.nst-table-cell{box-sizing:border-box!important;border-width:1px!important;border-style:solid!important;--tw-border-opacity: 1 !important;border-color:rgb(31 41 55 / var(--tw-border-opacity, 1))!important;padding:.25rem!important;font-size:.75rem!important;line-height:1rem!important}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.m-2{margin:.5rem}.block{display:block}.inline{display:inline}.\\!table{display:table!important}.table{display:table}.table-cell{display:table-cell}.table-row{display:table-row}.hidden{display:none}.h-4{height:1rem}.w-4{width:1rem}.resize{resize:both}.border{border-width:1px}.bg-nstmain{--tw-bg-opacity: 1;background-color:rgb(66 140 165 / var(--tw-bg-opacity, 1))}.bg-nstred{--tw-bg-opacity: 1;background-color:rgb(185 70 45 / var(--tw-bg-opacity, 1))}.bg-nstyellow{--tw-bg-opacity: 1;background-color:rgb(252 196 25 / var(--tw-bg-opacity, 1))}.text-center{text-align:center}.text-base{font-size:1rem;line-height:1.5rem}.text-sm{font-size:.875rem;line-height:1.25rem}.font-bold{font-weight:700}.text-black{--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity, 1))}.text-nstgreen{--tw-text-opacity: 1;color:rgb(108 173 43 / var(--tw-text-opacity, 1))}.text-nstmain{--tw-text-opacity: 1;color:rgb(66 140 165 / var(--tw-text-opacity, 1))}.text-nstred{--tw-text-opacity: 1;color:rgb(185 70 45 / var(--tw-text-opacity, 1))}.text-nsttorntext{color:var(--default-color)}.text-nstyellow{--tw-text-opacity: 1;color:rgb(252 196 25 / var(--tw-text-opacity, 1))}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}:root{--nst-hide-fact-desc: block;--nst-hide-war-graph: block}input[type=number]::-webkit-outer-spin-button,input[type=number]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-webkit-appearance:textfield;appearance:textfield;-moz-appearance:textfield}.f-war-list .descriptions .faction-war-info,.f-war-list .descriptions .faction-names{display:var(--nst-hide-war-graph)!important}#faction-main [data-title^=announcement],#faction-main .announcement,.faction-title,.faction-description{display:var(--nst-hide-fact-desc)!important}[aria-label="Reset loadout"],[class*=airspaceScene],[class*=randomFactWrapper]{display:none!important}',
	document.head.appendChild(t);
	})(),C()&&((sa.all??sa.nopager)(),(sa[i()]??sa.nopager)());},complete:()=>{}}
	;la[document.readyState]&&la[document.readyState]();}();

})();