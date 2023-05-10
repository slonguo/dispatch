"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9815],{4137:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=i.createContext({}),c=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return i.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(n),g=r,m=p["".concat(d,".").concat(g)]||p[g]||u[g]||a;return n?i.createElement(m,o(o({ref:t},l),{},{components:n})):i.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=g;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},632:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=n(7462),r=(n(7294),n(4137));const a={description:"How to get useful incident metrics.",sidebar_position:1},o="Incidents",s={unversionedId:"user-guide/dashboard/incident",id:"user-guide/dashboard/incident",title:"Incidents",description:"How to get useful incident metrics.",source:"@site/docs/user-guide/dashboard/incident.mdx",sourceDirName:"user-guide/dashboard",slug:"/user-guide/dashboard/incident",permalink:"/dispatch/docs/user-guide/dashboard/incident",draft:!1,editUrl:"https://github.com/netflix/dispatch/edit/master/docs/docs/user-guide/dashboard/incident.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"How to get useful incident metrics.",sidebar_position:1},sidebar:"userGuideSidebar",previous:{title:"Dashboards",permalink:"/dispatch/docs/user-guide/dashboard/"},next:{title:"Incidents",permalink:"/dispatch/docs/user-guide/incidents/"}},d={},c=[{value:"Aggregated top-line metrics",id:"aggregated-top-line-metrics",level:2},{value:"Breakdown on key incident facets",id:"breakdown-on-key-incident-facets",level:2},{value:"By Incident Type",id:"by-incident-type",level:3},{value:"By Incident Priority",id:"by-incident-priority",level:3},{value:"Forecasting",id:"forecasting",level:2}],l={toc:c},p="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,i.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"incidents"},"Incidents"),(0,r.kt)("h2",{id:"aggregated-top-line-metrics"},"Aggregated top-line metrics"),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2258).Z,width:"1162",height:"125"}))),(0,r.kt)("p",null,"These metrics are aggregated across all currently filtered incidents."),(0,r.kt)("h2",{id:"breakdown-on-key-incident-facets"},"Breakdown on key incident facets"),(0,r.kt)("h3",{id:"by-incident-type"},"By Incident Type"),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7214).Z,width:"450",height:"455"}))),(0,r.kt)("h3",{id:"by-incident-priority"},"By Incident Priority"),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(1605).Z,width:"456",height:"447"}))),(0,r.kt)("h2",{id:"forecasting"},"Forecasting"),(0,r.kt)("p",null,"Dispatch has the ability to do some ",(0,r.kt)("em",{parentName:"p"},"simple")," forecasting. It looks at prior incident history and applies ",(0,r.kt)("a",{parentName:"p",href:"https://machinelearningmastery.com/exponential-smoothing-for-time-series-forecasting-in-python/#:~:text=Exponential%20smoothing%20is%20a%20time%20series%20forecasting%20method%20for%20univariate%20data.&text=Exponential%20smoothing%20forecasting%20methods%20are,decreasing%20weight%20for%20past%20observations"},"Exponential Smoothing")," to guess how many incidents will be encountered in the future."),(0,r.kt)("p",null,"This works okay for small incident loads but becomes better with more incidents. If there isn't enough data to make a reasonable forecast one will not be displayed in the UI."),(0,r.kt)("p",null,"An example forecast:"),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5057).Z,width:"923",height:"434"}))))}u.isMDXComponent=!0},5057:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/admin-ui-dashboard-forecast-09e70f060059abde087c8913591ba691.png"},1605:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/admin-ui-dashboard-priority-ba85e823d59e3ba8190e77d8f9d6f502.png"},2258:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/admin-ui-dashboard-top-line-38db6558a8e123a3f5134c3d9c08737d.png"},7214:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/admin-ui-dashboard-type-4958195b7f429bfe9e84b85bf0781a10.png"}}]);