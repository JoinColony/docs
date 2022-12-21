"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3635],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},l=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),l=m(n),y=r,d=l["".concat(p,".").concat(y)]||l[y]||u[y]||o;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=l;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var m=2;m<o;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}l.displayName="MDXCreateElement"},314:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const o={description:"How to send a payment to an Ethereum address in any token.",sidebar_position:4},i="Payments",s={unversionedId:"use/making-payments/payments",id:"use/making-payments/payments",title:"Payments",description:"How to send a payment to an Ethereum address in any token.",source:"@site/colony/use/making-payments/payments.md",sourceDirName:"use/making-payments",slug:"/use/making-payments/payments",permalink:"/next/use/making-payments/payments",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/use/making-payments/payments.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"How to send a payment to an Ethereum address in any token.",sidebar_position:4},sidebar:"use",previous:{title:"Making Payments",permalink:"/next/use/making-payments/"},next:{title:"Motions and Disputes",permalink:"/next/use/motions-and-disputes/"}},p={},m=[],c={toc:m};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"payments"},"Payments"),(0,r.kt)("p",null,"To create an expenditure and send a payment in any ERC20 token to any address, simply navigate to ",(0,r.kt)("strong",{parentName:"p"},"New Action > Create Expenditure > Payment")," and input:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"From where you want to send the payment"),(0,r.kt)("li",{parentName:"ol"},"To which Ethereum address"),(0,r.kt)("li",{parentName:"ol"},"Which token and amount you wish to send")),(0,r.kt)("p",null,"You can also input details of why you are making this payment (optional)."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5691).Z,width:"2878",height:"1636"})),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Sending a payment currently requires you to have ",(0,r.kt)("a",{parentName:"p",href:"/next/use/teams/permissions#administration"},(0,r.kt)("strong",{parentName:"a"},"Administration"))," and ",(0,r.kt)("a",{parentName:"p",href:"/next/use/teams/permissions#funding"},(0,r.kt)("strong",{parentName:"a"},"Funding"))," permissions in the domain from which you're creating the expenditure.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Only payments in the colony's native tokens confer reputation! Sending stablecoins does not. You can use stablecoin payments to adjust for cost-of-living requirements for contributors, or any other situation where making a payment without giving additional reputation is appropriate. ")),(0,r.kt)("p",null,"Communication between colony members is highly encouraged. You can leave a comment below every action, such as a payment, or the creation of a new team."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(3468).Z,width:"2878",height:"1636"})))}u.isMDXComponent=!0},3468:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/CommentPay-f23deb377741002b79d545fbcc95a741.gif"},5691:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/CreatePayment-333487665ebcdc39fcedc9c61ce38a8e.gif"}}]);