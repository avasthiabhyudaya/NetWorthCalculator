var ee=Object.defineProperty;var W=Object.getOwnPropertySymbols;var te=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable;var j=(r,a,n)=>a in r?ee(r,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[a]=n,b=(r,a)=>{for(var n in a||(a={}))te.call(a,n)&&j(r,n,a[n]);if(W)for(var n of W(a))re.call(a,n)&&j(r,n,a[n]);return r};import{u as S,j as e,a as t,L as I,r as D,b as v,R as ae,c as w,p as ne,d as le,e as oe,f as ie,g as ce,h as se,P as de,i as ue,H as me}from"./vendor.6b83cc48.js";const he=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&l(h)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerpolicy&&(c.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?c.credentials="include":o.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function l(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}};he();var pe="/NetWorthCalculator/assets/logo.52093fe1.png";const G={realEstateNetWorth:0,realEstateDataList:[],realEstateTimeStamp:new Date(0)},U="ADD_REAL_ESTATE_DATA",M="DELETE_REAL_ESTATE_DATA",R="UPDATE_REAL_ESTATE_NW",X="REINIT_REAL_ESTATE_PROPS",_="UPDATE_REAL_ESTATE_TIMESTAMP",be=(r=G,a)=>{switch(a.type){case U:case M:case R:return b(b({},r),a.payload);case X:return G;case _:return b(b({},r),a.payload);default:return r}},B={totalNetWorth:0,goldDataList:[],goldTimeStamp:new Date(0)},K="ADD_GOLD_DATA",z="DELETE_GOLD_DATA",P="UPDATE_GOLD_NW",$="REINIT_GOLD_PROPS",O="UPDATE_GOLD_TIMESTAMP",ge=(r=B,a)=>{switch(a.type){case K:case z:case P:return b(b({},r),a.payload);case $:return B;case O:return b(b({},r),a.payload);default:return r}},H={traditionalNetWorth:0,traditionalDataList:[],traditionalTimeStamp:new Date(0)},J="ADD_TRADITIONAL_DATA",Q="DELETE_TRADITIONAL_DATA",F="UPDATE_TRADITIONAL_DATA",A="UPDATE_TRADITIONAL_NW",V="REINIT_TRADITIONAL_PROPS",T="UPDATE_TRADITIONAL_TIMESTAMP",fe=(r=H,a)=>{switch(a.type){case J:case Q:case F:case A:return b(b({},r),a.payload);case V:return H;case T:return b(b({},r),a.payload);default:return r}},C={totalNetWorth:0,dashboardTimeStamp:new Date(0)},ye="UPDATE_DASHBOARD_DATA",xe="UPDATE_DASHBOARD_DATA",Y="REINIT_DASHBOARD_DATA",Ne=(r=C,a)=>{switch(a.type){case ye:return b(b({},r),a.payload);case xe:return b(b({},r),a.payload);case Y:return C;default:return r}};function ve(){const r=S();return e("div",{children:e("nav",{className:"bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800",children:t("div",{className:"container flex flex-wrap justify-between items-center mx-auto",children:[e("a",{href:"#",className:"flex",children:e("img",{className:"mr-3 h-10",src:pe,alt:""})}),t("button",{"data-collapse-toggle":"mobile-menu",type:"button",className:"inline-flex items-center p-2 ml-3 text-sm text-gray-500  rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2  focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600","aria-controls":"mobile-menu-2","aria-expanded":"false",children:[e("span",{className:"sr-only",children:"Open main menu"}),e("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1  0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"})}),e("svg",{className:"hidden w-6 h-6",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1  0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0  01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})]}),e("div",{className:"hidden w-full md:block md:w-auto",id:"mobile-menu",children:t("ul",{className:"flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium",children:[e("li",{children:e("button",{className:"bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",onClick:()=>{r({type:X}),r({type:$}),r({type:V}),r({type:Y})},children:"RESET"})}),e("li",{children:e("button",{id:"download",className:"bg-red-500 hover:bg-blue-700 text-white font-bold py-2  px-4 rounded-full",children:"DOWNLOAD"})}),e("li",{children:e("button",{className:"bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",children:"UPLOAD"})})]})})]})})})}function we(){return e("div",{className:"relative min-h-screen md:flex",children:t("div",{className:"sidebar bg-gray-800 text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0  left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out",children:[e(I,{to:"/dashboard",className:"block py-2.5 px-4 rounded transition duration-200  hover:bg-gray-800 hover:text-white",children:"Dashboard"}),e(I,{to:"/traditional",className:"block py-2.5 px-4 rounded  transition duration-200 hover:bg-gray-800 hover:text-white",children:"Traditional"}),e(I,{to:"/gold",className:"block py-2.5 px-4 rounded  transition duration-200 hover:bg-gray-800 hover:text-white",children:"Gold"}),e(I,{to:"/realestate",className:"block py-2.5 px-4 rounded  transition duration-200 hover:bg-gray-800 hover:text-white",children:"Real Estate"})]})})}function Ae(r){const a=()=>{r.removeInstrument(r.nickName)},n=new Intl.NumberFormat("en-IN");return t("div",{className:"container mx-auto p-2 border-4 border-emerald-700 bg-green-400 m-4 ",children:[e("div",{className:"flex justify-end",children:e("button",{className:"bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 hover:cursor",onClick:a,children:"X"})}),e("div",{className:"text-xl",children:e("strong",{children:r.nickName})}),t("div",{className:"instrumentType",children:["Type : ",e("strong",{children:r.type})]}),e("div",{className:"flex-row",children:t("div",{className:"flex justify-between",children:[t("h3",{className:"instrumentTenure",children:["Rate : ",t("strong",{children:[r.rate,"%"]})," | Tenure :",t("strong",{children:[r.tenure," years"]})]}),e("h3",{className:"instrumentAmount",children:t("strong",{children:["\u20B9",n.format(r.amount)]})})]})})]})}function Te(r){var a;return e("div",{children:(a=r.instrumentData)==null?void 0:a.map((n,l)=>e(Ae,{nickName:n.nickName,type:n.type,rate:n.rate,tenure:n.tenure,amount:n.amount,removeInstrument:r.removeInstrument},n.nickName))})}function De({accountNumber:r,accountSum:a,nickName:n,instruments:l,bankName:o,instrumentArrayAddition:c,instrumentArrayDeletion:h,removeAccount:x}){const d=new Intl.NumberFormat("en-IN"),[p,g]=D.exports.useState(!1),u=i=>{i.preventDefault();let f=i.target.elements.nickName.value,y={nickName:i.target.elements.nickName.value,type:i.target.elements.type.value,rate:i.target.elements.rate.value,tenure:i.target.elements.tenure.value,amount:i.target.elements.amount.value};l.findIndex(N=>N.nickName===f)==-1&&c(r,y),i.target.reset(),g(N=>!N)},s=i=>{h(r,i)};return t("div",{className:"relative bg-fuchsia-300 w-full h-full my-4 p-4 shadow border-4 border-purple-600",children:[t("div",{children:[t("div",{className:"flex justify-end gap-2 m-1",children:[e("button",{onClick:()=>g(i=>!i),className:"bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 hover:cursor",children:"+"}),e("button",{onClick:()=>{x(r,a)},className:"bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 hover:cursor",children:"X"})]}),t("div",{className:"flex justify-between",children:[e("h1",{className:"text-xl",children:e("strong",{children:n})}),e("h1",{className:"text-xl",children:t("strong",{children:["\u20B9",d.format(a)]})})]}),t("h2",{children:[o," | ",r]})]}),p&&e("div",{className:"flex justify-center m-4",children:t("form",{className:"w-full p-2 border border-yellow-300",onSubmit:u,autoComplete:"off",children:[e("div",{className:"flex justify-end",children:e("button",{onClick:()=>g(i=>!i),className:"bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 hover:cursor",children:"X"})}),t("div",{className:"flex flex-row justify-around flex-wrap gap-8",children:[t("div",{children:[e("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",forHtml:"nickName",children:"nickName :"}),e("input",{className:"appearance-none block w-full bg-gray-200 text-gray-700 border  border-green-500 hover:border-red-500 rounded py-3 px-4 mb-3 leading-tight  focus:outline-none focus:bg-white",type:"text",name:"nickName",required:!0})]}),t("div",{children:[e("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",forHtml:"type",children:"Type :"}),t("select",{className:"appearance-none block w-full bg-gray-200 text-gray-700 border border-green-500 hover:border-red-500 rounded py-3 px-4 mb-3 leading-tight  focus:outline-none focus:bg-white",name:"type",id:"type",children:[e("option",{value:"Fixed Deposit",children:"Fixed Deposit"}),e("option",{value:"Recurring Deposit",children:"Recurring Deposit"}),e("option",{value:"PPF",children:"PPF"}),e("option",{value:"NPS",children:"NPS"}),e("option",{value:"Loan",children:"Loan"}),e("option",{value:"Non Invested",children:"Non Invested"})]})]}),t("div",{children:[e("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",forHtml:"rate",children:"Rate :"}),e("input",{className:"appearance-none block w-full bg-gray-200 text-gray-700 border border-green-500 hover:border-red-500 rounded py-3 px-4 mb-3 leading-tight  focus:outline-none focus:bg-white",type:"text",name:"rate",required:!0})]}),t("div",{children:[e("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",forHtml:"tenure",children:"Tenure :"}),e("input",{className:"appearance-none block w-full bg-gray-200 text-gray-700 border  border-green-500 hover:border-red-500 rounded py-3 px-4 mb-3 leading-tight  focus:outline-none focus:bg-white",type:"text",name:"tenure",required:!0})]}),t("div",{children:[e("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",forHtml:"amount",children:"Amount :"}),e("input",{className:"appearance-none block w-full bg-gray-200 text-gray-700 border  border-green-500 hover:border-red-500 rounded py-3 px-4 mb-3 leading-tight  focus:outline-none focus:bg-white",type:"text",name:"amount",required:!0})]})]}),e("div",{className:"flex justify-center",children:e("button",{className:"flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500  hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded",type:"submit",children:"Submit"})})]})}),e(Te,{instrumentData:l,removeInstrument:s})]})}function ke({traditionalDataList:r=[],traditionalWealthUpdation:a,instrumentArrayAddition:n,instrumentArrayDeletion:l,removeAccount:o}){return e("div",{children:r.map(c=>e(De,{instrumentArrayAddition:n,instrumentArrayDeletion:l,nickName:c.nickName,bankName:c.bankName,accountSum:c.accountSum,accountNumber:c.accountNumber,instruments:c.instruments,removeAccount:o,traditionalWealthUpdation:a},c.nickName))})}function L({AssetType:r,totalAmount:a,timestamp:n}){const l=new Intl.NumberFormat("en-IN");return e("div",{className:"justify-center items-center border-2 border-red-500 my-4 p-2 bg-red-100 shadow",children:t("div",{className:"w-96 h-72",children:[e("h1",{className:" flex justify-center text-3xl font-black",children:r}),e("h1",{className:" flex justify-center text-3xl font-black m-4",children:"Net Worth"}),e("div",{className:"justify-center items-center",children:t("h3",{className:" flex justify-center align-center text-3xl font-black m-10 border-4 border-red-500",children:["\u20B9",l.format(a)]})}),e("div",{className:"justify-center items-center justify-center",children:e("h4",{className:"flex justify-center align-center text-xl font-black m-4 ",children:n})})]})})}function Ee(){const r=new Intl.NumberFormat("en-IN"),{traditionalDataList:a=[],traditionalNetWorth:n,traditionalTimeStamp:l}=v(s=>s.traditional),o=S(),[c,h]=D.exports.useState(!1),x=s=>{setTraditionalNetWorth(parseInt(n,10)+parseInt(s,10)),props.totalWealthUpdation(s)},d=s=>{s.preventDefault();let m={nickName:s.target[0].value,bankName:s.target[1].value,accountNumber:s.target[2].value,instruments:[],accountSum:0};a.find(f=>f.accountNumber===m.accountNumber)||(o({type:J,payload:{traditionalDataList:[...a,m]}}),o({type:A,payload:{traditionalNetWorth:parseInt(n,10)+parseInt(m.accountSum,10)}}),o({type:T,payload:{traditionalTimeStamp:new Date}})),s.target.reset(),h(f=>!f)};function p(s,m){o({type:Q,payload:{traditionalDataList:a.filter(i=>i.accountNumber!==s)}}),o({type:A,payload:{traditionalNetWorth:n-parseInt(m,10)}}),o({type:T,payload:{traditionalTimeStamp:new Date}})}const g=(s,m)=>{let i=a.slice();for(let y=0;y<i.length;y++)i[y].accountNumber===s&&(i[y].instruments.push(m),m.type!=="Loan"&&(i[y].accountSum+=parseInt(m.amount,10)),m.type==="Loan"&&(i[y].accountSum-=parseInt(m.amount,10)));o({type:F,payload:{traditionalDataList:i}});let f=n;m.type!=="Loan"?f+=parseInt(m.amount,10):m.type==="Loan"&&(f-=parseInt(m.amount,10)),o({type:A,payload:{traditionalNetWorth:f}}),o({type:T,payload:{traditionalTimeStamp:new Date}})},u=(s,m)=>{let i=0,f,y=a.slice();for(let N=0;N<a.length;N++)a[N].accountNumber===s&&(y[N].instruments=a[N].instruments.filter(E=>(E.nickName===m&&(i=E.amount,f=E.type),E.nickName!==m)),f!=="Loan"&&(y[N].accountSum-=parseInt(i,10)),f==="Loan"&&(y[N].accountSum+=parseInt(i,10)));o({type:F,payload:{traditionalDataList:y}});let k=n;f!=="Loan"?k-=parseInt(i,10):f==="Loan"&&(k+=parseInt(i,10)),o({type:A,payload:{traditionalNetWorth:k}}),o({type:T,payload:{traditionalTimeStamp:new Date}})};return t("div",{className:"p-6",children:[t("div",{className:"flex flex-col justify-center items-center",children:[e(L,{AssetType:"Traditional",totalAmount:n,timestamp:new Date(l).toLocaleString()}),e("button",{onClick:()=>h(s=>!s),className:"bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 hover:cursor",children:c?"X":"+"})]}),c&&e("div",{className:"flex justify-center m-4",children:t("form",{className:"w-full border-2 border-yellow-300 p-4",onSubmit:d,autoComplete:"off",children:[t("div",{className:"flex flex-row justify-evenly flex-wrap",children:[t("div",{children:[e("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",forhtml:" bankName",children:"Account NickName :"}),e("input",{className:"appearance-none block w-full bg-gray-200 text-gray-700 border  border-green-500 hover:border-red-500 rounded py-3 px-4 mb-3 leading-tight  focus:outline-none focus:bg-white",type:"text",id:"bankName",required:!0})]}),t("div",{children:[e("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",forhtml:"bankName",children:"Bank Name :"}),e("input",{className:"appearance-none block w-full  bg-gray-200 text-gray-700 border border-green-500 hover:border-red-500  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",type:"text",id:"bankName",required:!0})]}),t("div",{children:[e("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",forhtml:"accNo",children:"Bank Account Number :"}),e("input",{className:"appearance-none block w-full bg-gray-200 text-gray-700 border  border-green-500 hover:border-red-500 rounded py-3 px-4 mb-3 leading-tight  focus:outline-none focus:bg-white",type:"text",id:"accNo",required:!0})]})]}),e("div",{className:"flex justify-center",children:e("button",{className:"flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500  hover:border-teal-700 text-sm  border-4 text-white py-1 px-2 rounded",type:"submit",children:"Submit"})})]})}),t("div",{className:"container p-2 my-4 bg-cyan-200 border-4 border-cyan-400",children:[e("strong",{children:t("div",{className:"flex justify-between",children:[e("h1",{className:"text-2xl",children:"Bank Balance"}),t("h1",{className:"text-2xl",children:["\u20B9",r.format(n)]})]})}),e(ke,{traditionalDataList:a,removeAccount:p,traditionalNetWorth:n,traditionalWealthUpdation:x,instrumentArrayAddition:g,instrumentArrayDeletion:u})]})]})}function Ie({removeGoldInstrument:r,weight:a,goldPrice:n,nickName:l,purchaseDate:o,purity:c}){const h=()=>{r(l,d)},x=new Intl.NumberFormat("en-IN"),d=Number(a)*Number(n);return t("div",{className:"container mx-auto p-2 border-4 border-emerald-700 bg-green-400 m-4 ",children:[e("div",{className:"flex justify-end",children:e("button",{className:"bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 hover:cursor",onClick:h,children:"X"})}),e("div",{className:"text-xl",children:e("strong",{children:l})}),t("div",{className:"instrumentType",children:["Weight : ",t("strong",{children:[a,"g"]})," | Gold Price (/gm) : ",t("strong",{children:["\u20B9",n]})]}),e("div",{className:"flex-row",children:t("div",{className:"flex justify-between",children:[t("h3",{className:"instrumentTenure",children:["Purity :",e("strong",{children:c})," | Date of Purchase : ",e("strong",{children:o})]}),e("h3",{className:"instrumentAmount",children:t("strong",{children:["\u20B9",x.format(d)]})})]})})]})}function Se({goldData:r,removeGoldInstrument:a}){return e("div",{children:r.map((n,l)=>e(Ie,{nickName:n.nickName,weight:n.weight,purity:n.purity,purchaseDate:n.purchaseDate,goldPrice:n.goldPrice,removeGoldInstrument:a},`loc-${l}`))})}function Le(){const{goldDataList:r,totalNetWorth:a,goldTimeStamp:n}=v(d=>d.gold),l=S(),[o,c]=D.exports.useState(!1),h=d=>{d.preventDefault();let p={nickName:d.target[0].value,weight:d.target[1].value,purity:d.target[2].value,purchaseDate:d.target[3].value,goldPrice:d.target[4].value};r.find(u=>u.nickName===p.nickName)||(l({type:K,payload:{goldDataList:[...r,p]}}),l({type:P,payload:{totalNetWorth:a+parseInt(p.goldPrice*p.weight,10)}}),l({type:O,payload:{goldTimeStamp:new Date}})),d.target.reset(),c(u=>!u)};function x(d,p){l({type:z,payload:{goldDataList:r.filter(g=>g.nickName!==d)}}),l({type:P,payload:{totalNetWorth:a-parseInt(p,10)}}),l({type:O,payload:{goldTimeStamp:new Date}})}return t("div",{className:"p-6",children:[t("div",{className:"flex flex-col justify-center items-center",children:[e(L,{AssetType:"Gold",totalAmount:a,timestamp:new Date(n).toLocaleString()}),e("button",{onClick:()=>c(d=>!d),className:"bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 hover:cursor",children:o?"X":"+"})]}),o&&e("div",{className:"flex justify-center m-4",children:t("form",{className:"w-full border-2 border-yellow-300 p-4",onSubmit:h,autoComplete:"off",children:[t("div",{className:"flex flex-row justify-around flex-wrap",children:[t("div",{children:[e("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",forHtml:" instrumentNickName",children:"Instrument NickName :"}),e("input",{className:"appearance-none block w-full bg-gray-200 text-gray-700 border  border-green-500 hover:border-red-500 rounded py-3 px-4 mb-3 leading-tight  focus:outline-none focus:bg-white",type:"text",id:"instrumentNickName",required:!0})]}),t("div",{children:[e("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",forHtml:"weight",children:"Weight (in grams) :"}),e("input",{className:"appearance-none block w-full bg-gray-200 text-gray-700 border  border-green-500 hover:border-red-500 rounded py-3 px-4 mb-3 leading-tight  focus:outline-none focus:bg-white",type:"text",id:"weight",required:!0})]}),t("div",{children:[e("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",forHtml:"purity",children:"Purity :"}),t("select",{className:"appearance-none block w-full bg-gray-200 text-gray-700 border  border-green-500 hover:border-red-500 rounded py-3 px-4 mb-3 leading-tight  focus:outline-none focus:bg-white",name:"purity",id:"purity",children:[e("option",{className:"block py-2 px-4 text-sm  text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600  dark:text-gray-200 dark:hover:text-white",value:"24K",children:"24K"}),e("option",{className:"block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100  dark:hover:bg-gray-600 dark:text-gray-200  dark:hover:text-white",value:"22K",children:"22K"}),e("option",{className:"block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100  dark:hover:bg-gray-600 dark:text-gray-200  dark:hover:text-white",value:"18K",children:"18K"})]})]}),t("div",{children:[e("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",forHtml:"purchaseDate",children:"Date of Purchase :"}),e("input",{className:"appearance-none block w-full bg-gray-200 text-gray-700 border  border-green-500 hover:border-red-500 rounded py-3 px-4 mb-3  leading-tight focus:outline-none focus:bg-white",type:"date",id:"purchaseDate",required:!0})]}),t("div",{children:[e("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",forHtml:"GoldPrice",children:"Gold Price (per gram) :"}),e("input",{className:"appearance-none block w-full bg-gray-200 text-gray-700 border  border-green-500 hover:border-red-500 rounded py-3 px-4 mb-3 leading-tight  focus:outline-none focus:bg-white",type:"text",id:"GoldPrice",required:!0})]})]}),e("div",{className:"flex justify-center",children:e("button",{className:"flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500  hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded",type:"submit",children:"Submit"})})]})}),t("div",{className:"container p-2 my-4 bg-amber-300 border-4 border-amber-600",children:[e("strong",{children:e("div",{className:"flex justify-between",children:e("h1",{className:"text-2xl",children:"Aurum"})})}),e(Se,{goldData:r,removeGoldInstrument:x})]})]})}function q(){const{totalNetWorth:r=0,goldDataList:a,goldTimeStamp:n}=v(i=>i.gold),{traditionalNetWorth:l=0,TraditionalDataList:o,traditionalTimeStamp:c}=v(i=>i.traditional),{realEstateNetWorth:h=0,realEstateDataList:x,realEstateTimeStamp:d}=v(i=>i.realestate);let p=r+l+h,g=n>c&&n>d?n:c>d?c:d,u=l/p*100,s=r/p*100,m=h/p*100;return t("div",{className:"p-6",children:[e("div",{className:"flex flex-col justify-center items-center",children:e(L,{AssetType:"Total",totalAmount:p,timestamp:new Date(g).toLocaleString()})}),t("div",{className:"w-full flex flex-col border-4 border-cyan-900 bg-cyan-400 m-4 gap-4 p-4 font-black justify-center align-center",children:[e("h1",{className:"text-3xl",children:"SPLIT :"}),t("div",{className:"flex flex-row gap-4 text-2xl",children:[t("div",{className:"flex flex-col gap-6",children:[e("label",{children:"Traditional Net Worth : "}),e("label",{children:"Gold Net Worth : "}),e("label",{children:"Real Estate Net Worth : "})]}),t("div",{className:"flex flex-col gap-6",children:[t("h1",{children:["\u20B9",l," (",(u||0).toFixed(2),"%)"]}),t("h1",{children:["\u20B9",r," (",(s||0).toFixed(2),"%)"]}),t("h1",{children:["\u20B9",h," (",(m||0).toFixed(2),"%)"]})]})]})]})]})}function Re({nickName:r,type:a,rentIncome:n,purchaseDate:l,area:o,priceSqft:c,removeREInstrument:h,rentFlag:x}){const d=()=>{h(r,g)},p=new Intl.NumberFormat("en-IN"),g=Number(c)*Number(o);return t("div",{className:"container mx-auto p-2 border-4 border-emerald-700 bg-green-400 m-4 ",children:[e("div",{className:"flex justify-end",children:e("button",{className:"bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 hover:cursor",onClick:d,children:"X"})}),e("div",{className:"text-xl",children:e("strong",{children:r})}),t("div",{className:"instrumentType",children:["Type : ",e("strong",{children:a})]}),e("div",{className:"flex-row",children:t("div",{className:"flex justify-between",children:[t("h3",{className:"instrumentTenure",children:["Rent Income :",t("strong",{children:["\u20B9",n]})," | Date of Purchase : ",e("strong",{children:l})]}),e("h3",{className:"instrumentAmount",children:t("strong",{children:["\u20B9",p.format(g)]})})]})})]})}function _e({realEstateData:r,removeREInstrument:a,rentFlag:n}){return e("div",{children:r.map((l,o)=>e(Re,{nickName:l.nickName,type:l.type,rentIncome:l.rentIncome,purchaseDate:l.purchaseDate,area:l.area,priceSqft:l.priceSqft,rentFlag:n,removeREInstrument:a},l.nickName))})}function Pe(){const{realEstateDataList:r,realEstateNetWorth:a,realEstateTimeStamp:n}=v(u=>u.realestate),l=S(),[o,c]=D.exports.useState(!1),[h,x]=D.exports.useState(!1),d=["Rent/PG","Flat/Bungalow/RowHouse","Commercial Office"],p=u=>{u.preventDefault();let s={nickName:u.target[0].value,type:u.target[1].value,rentIncome:u.target[2].value,purchaseDate:u.target[3].value,area:u.target[4].value,priceSqft:u.target[5].value};r.find(i=>i.nickName===s.nickName)||(l({type:U,payload:{realEstateDataList:[...r,s]}}),l({type:R,payload:{realEstateNetWorth:a+parseInt(s.area*s.priceSqft,10)}}),l({type:_,payload:{realEstateTimeStamp:new Date}})),u.target.reset(),c(i=>!i)},g=(u,s)=>{l({type:M,payload:{realEstateDataList:r.filter(m=>m.nickName!==u)}}),l({type:R,payload:{realEstateNetWorth:a-parseInt(s,10)}}),l({type:_,payload:{realEstateTimeStamp:new Date}})};return t("div",{className:"p-6",children:[t("div",{className:"flex flex-col justify-center items-center",children:[e(L,{AssetType:"Real Estate",totalAmount:a,timestamp:new Date(n).toLocaleString()}),e("button",{onClick:()=>c(u=>!u),className:"bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 hover:cursor",children:o?"X":"+"})]}),o&&e("div",{className:"flex justify-center m-4",children:t("form",{className:"w-full border-2 border-yellow-300 p-4",onSubmit:p,autoComplete:"off",children:[t("div",{className:"flex flex-row justify-evenly flex-wrap",children:[t("div",{children:[e("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",htmlFor:" instrumentNickName",children:"Instrument NickName :"}),e("input",{className:"appearance-none block w-full bg-gray-200 text-gray-700 border  border-green-500 hover:border-red-500 rounded py-3 px-4 mb-3 leading-tight  focus:outline-none focus:bg-white",type:"text",id:"instrumentNickName",required:!0})]}),t("div",{children:[e("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",htmlFor:"type",children:"Type :"}),t("select",{className:"appearance-none block w-full bg-gray-200 text-gray-700 border border-green-500 hover:border-red-500 rounded py-3 px-4 mb-3 leading-tight  //  focus:outline-none focus:bg-white",name:"type",id:"type",onChange:u=>{d.includes(u.target.value)&&h?x(s=>s):(d.includes(u.target.value)||h)&&x(s=>!s)},children:[e("option",{value:"Land",children:"Land"}),e("option",{value:"Flat/Bungalow/RowHouse",children:"Flat/Bungalow/RowHouse"}),e("option",{value:"Rent/PG",children:"Rent/PG"}),e("option",{value:"Studio Apartment",children:"Studio Apartment"}),e("option",{value:"Commercial Office",children:"Commercial Office"}),e("option",{value:"Hotel",children:"Hotel"}),e("option",{value:"Restaurant",children:"Restaurant"}),e("option",{value:"Food Franchise",children:"Food Franchise"})]})]}),t("div",{children:[e("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",htmlFor:"RentIncome",children:"Rent Income :"}),e("input",{className:"appearance-none block w-full bg-gray-200  text-gray-700 border border-green-500 hover:border-red-500 rounded  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",type:"text",id:"RentIncome",disabled:!h})]}),t("div",{children:[e("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",htmlFor:"purchaseDate",children:"Date of Purchase/Occupancy :"}),e("input",{className:"appearance-none block w-full bg-gray-200  text-gray-700 border border-green-500 hover:border-red-500 rounded  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",type:"date",id:"purchaseDate",required:!0})]}),t("div",{children:[e("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",htmlFor:"Area",children:" Area (in Sq.Ft): "}),e("input",{className:"appearance-none block w-full bg-gray-200 text-gray-700  border border-green-500 hover:border-red-500 rounded py-3 px-4 mb-3  leading-tight focus:outline-none focus:bg-white",type:"text",id:"GoldPrice",required:!0})]}),t("div",{children:[e("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",htmlFor:"Area",children:" Price/Sq.Ft: "}),e("input",{className:"appearance-none block w-full bg-gray-200 text-gray-700  border border-green-500 hover:border-red-500 rounded py-3 px-4 mb-3  leading-tight focus:outline-none focus:bg-white",type:"text",id:"GoldPrice",required:!0})]})]}),e("div",{className:"flex justify-center",children:e("button",{className:"flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500  hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded",type:"submit",children:"Submit"})})]})}),t("div",{className:"container p-2 my-4 bg-amber-300 border-4 border-amber-600",children:[e("strong",{children:e("div",{className:"flex justify-between",children:e("h1",{className:"text-2xl",children:"Real Estate Assets"})})}),e(_e,{realEstateData:r,removeREInstrument:g,rentFlag:h})]})]})}function Oe(){return t("main",{className:"App",children:[e("div",{children:e(ve,{})}),t("div",{className:"flex flex-row",children:[e(we,{}),e("div",{className:"w-full justify-center items-center",children:t(ae,{children:[e(w,{exact:!0,path:"/",element:e(q,{})}),e(w,{exact:!0,path:"/traditional",element:e(Ee,{})}),e(w,{exact:!0,path:"/dashboard",element:e(q,{})}),e(w,{exact:!0,path:"/gold",element:e(Le,{})}),e(w,{exact:!0,path:"/realEstate",element:e(Pe,{})})]})})]})]})}const Fe={gold:ge,traditional:fe,realestate:be,dashboard:Ne},We=ne({key:"nwc",storage:le},Fe),Z=oe(We,ie()),je=ce(Z);se.render(e(de,{store:Z,children:e(ue,{persistor:je,children:e(me,{children:e(Oe,{})})})}),document.getElementById("root"));
