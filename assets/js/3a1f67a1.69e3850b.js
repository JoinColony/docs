"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2936],{3905:(M,N,e)=>{e.d(N,{Zo:()=>i,kt:()=>n});var D=e(7294);function z(M,N,e){return N in M?Object.defineProperty(M,N,{value:e,enumerable:!0,configurable:!0,writable:!0}):M[N]=e,M}function g(M,N){var e=Object.keys(M);if(Object.getOwnPropertySymbols){var D=Object.getOwnPropertySymbols(M);N&&(D=D.filter((function(N){return Object.getOwnPropertyDescriptor(M,N).enumerable}))),e.push.apply(e,D)}return e}function t(M){for(var N=1;N<arguments.length;N++){var e=null!=arguments[N]?arguments[N]:{};N%2?g(Object(e),!0).forEach((function(N){z(M,N,e[N])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(e)):g(Object(e)).forEach((function(N){Object.defineProperty(M,N,Object.getOwnPropertyDescriptor(e,N))}))}return M}function o(M,N){if(null==M)return{};var e,D,z=function(M,N){if(null==M)return{};var e,D,z={},g=Object.keys(M);for(D=0;D<g.length;D++)e=g[D],N.indexOf(e)>=0||(z[e]=M[e]);return z}(M,N);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(M);for(D=0;D<g.length;D++)e=g[D],N.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(M,e)&&(z[e]=M[e])}return z}var j=D.createContext({}),u=function(M){var N=D.useContext(j),e=N;return M&&(e="function"==typeof M?M(N):t(t({},N),M)),e},i=function(M){var N=u(M.components);return D.createElement(j.Provider,{value:N},M.children)},I={inlineCode:"code",wrapper:function(M){var N=M.children;return D.createElement(D.Fragment,{},N)}},y=D.forwardRef((function(M,N){var e=M.components,z=M.mdxType,g=M.originalType,j=M.parentName,i=o(M,["components","mdxType","originalType","parentName"]),y=u(e),n=z,T=y["".concat(j,".").concat(n)]||y[n]||I[n]||g;return e?D.createElement(T,t(t({ref:N},i),{},{components:e})):D.createElement(T,t({ref:N},i))}));function n(M,N){var e=arguments,z=N&&N.mdxType;if("string"==typeof M||z){var g=e.length,t=new Array(g);t[0]=y;var o={};for(var j in N)hasOwnProperty.call(N,j)&&(o[j]=N[j]);o.originalType=M,o.mdxType="string"==typeof M?M:z,t[1]=o;for(var u=2;u<g;u++)t[u]=e[u];return D.createElement.apply(null,t)}return D.createElement.apply(null,e)}y.displayName="MDXCreateElement"},6870:(M,N,e)=>{e.r(N),e.d(N,{assets:()=>j,contentTitle:()=>t,default:()=>I,frontMatter:()=>g,metadata:()=>o,toc:()=>u});var D=e(7462),z=(e(7294),e(3905));const g={id:"index",description:"Documentation for the Colony Network Smart Contracts",sidebar_position:2},t="The Colony Network",o={unversionedId:"colonynetwork/index",id:"colonynetwork/index",title:"The Colony Network",description:"Documentation for the Colony Network Smart Contracts",source:"@site/docs/colonynetwork/index.md",sourceDirName:"colonynetwork",slug:"/colonynetwork/",permalink:"/docs/colonynetwork/",draft:!1,editUrl:"https://github.com/JoinColony/colonyNetwork/edit/develop/docs/index.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"index",description:"Documentation for the Colony Network Smart Contracts",sidebar_position:2},sidebar:"sidebar",previous:{title:"Upgrading the ColonyNetwork version",permalink:"/docs/colonyjs/guides/upgrading-the-colonynetwork-version"},next:{title:"Quick Start",permalink:"/docs/colonynetwork/quick-start"}},j={},u=[{value:"Want to jump right in?",id:"want-to-jump-right-in",level:2},{value:"The Colony Ecosystem",id:"the-colony-ecosystem",level:2},{value:"The Colony Protocol",id:"the-colony-protocol",level:3},{value:"The Colony Network",id:"the-colony-network-1",level:3},{value:"Colony SDK",id:"colony-sdk",level:3},{value:"Developer Portal",id:"developer-portal",level:3}],i={toc:u};function I(M){let{components:N,...g}=M;return(0,z.kt)("wrapper",(0,D.Z)({},i,g,{components:N,mdxType:"MDXLayout"}),(0,z.kt)("h1",{id:"the-colony-network"},"The Colony Network"),(0,z.kt)("p",null,(0,z.kt)("img",{src:e(1720).Z,width:"1829",height:"453"})),(0,z.kt)("p",null,"Colony is a platform for organizations that operate via software rather than paperwork and management hierarchy."),(0,z.kt)("p",null,"At its core, a colony is a set of smart contracts that describe all aspects of a traditional organization, as well as some new capabilities that would only be possible using a decentralized protocol like Ethereum."),(0,z.kt)("p",null,"It's infrastructure for the future of the firm, built to organize and incentivize teams, projects, and communities."),(0,z.kt)("h2",{id:"want-to-jump-right-in"},"Want to jump right in?"),(0,z.kt)("p",null,"Feeling like an eager beaver? Jump in to the ",(0,z.kt)("a",{parentName:"p",href:"quick-start"},"quick start docs")," and get the Smart Contracts running on your machine:"),(0,z.kt)("h2",{id:"the-colony-ecosystem"},"The Colony Ecosystem"),(0,z.kt)("h3",{id:"the-colony-protocol"},"The Colony Protocol"),(0,z.kt)("p",null,"The Colony White Paper describes a complete protocol for organizations, with crypto-economic processes for:"),(0,z.kt)("ul",null,(0,z.kt)("li",{parentName:"ul"},"Ownership and permissions"),(0,z.kt)("li",{parentName:"ul"},"Reputation"),(0,z.kt)("li",{parentName:"ul"},"Dispute resolution and decision-making"),(0,z.kt)("li",{parentName:"ul"},"Work management and delegation"),(0,z.kt)("li",{parentName:"ul"},"Financial management, including rewards and payments")),(0,z.kt)("p",null,"To learn more about the Colony Protocol, dig in to the ",(0,z.kt)("a",{parentName:"p",href:"https://colony.io/whitepaper.pdf"},"Colony White Paper")," or read the ",(0,z.kt)("a",{parentName:"p",href:"tldr/"},"White Paper TL;DR")),(0,z.kt)("h3",{id:"the-colony-network-1"},"The Colony Network"),(0,z.kt)("p",null,"The Colony Network is the infrastructure upon which all colonies run."),(0,z.kt)("p",null,"The colonyNetwork repository contains the solidity implementation of Colony, which is developed as free software. See our ",(0,z.kt)("a",{parentName:"p",href:"https://github.com/JoinColony/colonyNetwork/blob/develop/.github/CONTRIBUTING.md"},"guidelines")," if you're interested in contributing to the colonyNetwork codebase. Developers interested in contributing to the Colony Network are encouraged to look at the code on ",(0,z.kt)("a",{parentName:"p",href:"https://github.com/JoinColony/colonyNetwork"},"GitHub"),", and to come say hi on ",(0,z.kt)("a",{parentName:"p",href:"https://discord.gg/feVZWwysqM"},"Discord"),"."),(0,z.kt)("p",null,"The current colonyNetwork release is ",(0,z.kt)("a",{parentName:"p",href:"https://github.com/JoinColony/colonyNetwork/releases/tag/flwss"},(0,z.kt)("inlineCode",{parentName:"a"},"flwss"))," (Fuchsia Lightweight Spaceship). It implements some, but not all, of the Colony Protocol:"),(0,z.kt)("ul",null,(0,z.kt)("li",{parentName:"ul"},"Ownership and permissions (through roles)"),(0,z.kt)("li",{parentName:"ul"},"Reputation"),(0,z.kt)("li",{parentName:"ul"},"Funding Pots and payments"),(0,z.kt)("li",{parentName:"ul"},"Domains and Skills"),(0,z.kt)("li",{parentName:"ul"},"Tasks and work ratings")),(0,z.kt)("p",null,"The Colony Network is maintained and improved by the ",(0,z.kt)("a",{parentName:"p",href:"/docs/colonynetwork/tldr/metacolony"},"Meta Colony")," (which is, itself, a colony on the network with special permissions)."),(0,z.kt)("p",null,"Membership in the Metacolony is open to all (and heartily encouraged!), but changes such as ",(0,z.kt)("a",{parentName:"p",href:"/docs/colonynetwork/concepts/upgrades"},"network upgrades")," require a minimum ",(0,z.kt)("em",{parentName:"p"},"reputation")," within the Metacolony to proceed."),(0,z.kt)("h3",{id:"colony-sdk"},"Colony SDK"),(0,z.kt)("p",null,"The Colony SDK is a JavaScript library designed to make interaction with the Colony Network as straightforward as possible for (d)app developers."),(0,z.kt)("p",null,"Using the Colony SDK, all of the functions of a colony can be imported and called as methods within a JavaScript application. It runs on all modern browsers as well as in an NodeJS environment."),(0,z.kt)("p",null,"Things like parsing returned parameters from a transaction, and signing transactions with a wallet provider are all handled by this library while providing a small API with sane defaults."),(0,z.kt)("p",null,"To learn more about how to use the Colony SDK with your dapp, or to get specific info about the Colony SDK API, see its ",(0,z.kt)("a",{parentName:"p",href:"/docs/colonysdk"},"docs"),"."),(0,z.kt)("h3",{id:"developer-portal"},"Developer Portal"),(0,z.kt)("p",null,"If you didn't get here from there, have a look at our Developer Portal to ",(0,z.kt)("a",{parentName:"p",href:"https://www.notion.so/colony/Colony-Developer-Portal-2155ba0a012e46f9991bbd693b04de2b"},"get started"),"."),(0,z.kt)("p",null,"Or, if you're feeling old skool and just want to chat, send an email to ",(0,z.kt)("a",{parentName:"p",href:"mailto:build@colony.io"},"chris@colony.io")," or ping chmanie#5800 on Discord!"))}I.isMDXComponent=!0},1720:(M,N,e)=>{e.d(N,{Z:()=>D});const D="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgyOSIgaGVpZ2h0PSI0NTMiIHZpZXdCb3g9IjAgMCAxODI5IDQ1MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTY3OC4yOCAxNDkuMzZDNjcyLjY0IDE1NS44NCA2NjUuNjggMTYxIDY1Ny40IDE2NC44NEM2NDkuMTIgMTY4LjU2IDYzOS41OCAxNzAuNDIgNjI4Ljc4IDE3MC40MkM2MTguOTQgMTcwLjQyIDYwOS44MiAxNjguOCA2MDEuNDIgMTY1LjU2QzU5My4xNCAxNjIuMzIgNTg1Ljk0IDE1Ny43NiA1NzkuODIgMTUxLjg4QzU3My43IDE0NS44OCA1NjguOSAxMzguNzQgNTY1LjQyIDEzMC40NkM1NjEuOTQgMTIyLjE4IDU2MC4yIDExMy4wNiA1NjAuMiAxMDMuMUM1NjAuMiA5Mi45IDU2MS45NCA4My42NiA1NjUuNDIgNzUuMzhDNTY5LjAyIDY3LjEgNTczLjk0IDYwLjA4IDU4MC4xOCA1NC4zMkM1ODYuNDIgNDguNDQgNTkzLjc0IDQzLjk0IDYwMi4xNCA0MC44MkM2MTAuNTQgMzcuNyA2MTkuNiAzNi4xNCA2MjkuMzIgMzYuMTRDNjM4LjMyIDM2LjE0IDY0Ny4xNCAzNy43NiA2NTUuNzggNDFDNjY0LjU0IDQ0LjEyIDY3MS42MiA0OC43NCA2NzcuMDIgNTQuODZMNjU2LjE0IDc1Ljc0QzY1My4yNiA3MS43OCA2NDkuNDggNjguODQgNjQ0LjggNjYuOTJDNjQwLjEyIDY1IDYzNS4zMiA2NC4wNCA2MzAuNCA2NC4wNEM2MjUgNjQuMDQgNjIwLjAyIDY1LjA2IDYxNS40NiA2Ny4xQzYxMS4wMiA2OS4wMiA2MDcuMTggNzEuNzIgNjAzLjk0IDc1LjJDNjAwLjcgNzguNjggNTk4LjE4IDgyLjgyIDU5Ni4zOCA4Ny42MkM1OTQuNTggOTIuMyA1OTMuNjggOTcuNDYgNTkzLjY4IDEwMy4xQzU5My42OCAxMDguODYgNTk0LjU4IDExNC4xNCA1OTYuMzggMTE4Ljk0QzU5OC4xOCAxMjMuNzQgNjAwLjY0IDEyNy44OCA2MDMuNzYgMTMxLjM2QzYwNyAxMzQuNzIgNjEwLjg0IDEzNy4zNiA2MTUuMjggMTM5LjI4QzYxOS43MiAxNDEuMiA2MjQuNTggMTQyLjE2IDYyOS44NiAxNDIuMTZDNjM1Ljk4IDE0Mi4xNiA2NDEuMzIgMTQwLjk2IDY0NS44OCAxMzguNTZDNjUwLjQ0IDEzNi4xNiA2NTQuMSAxMzMuMDQgNjU2Ljg2IDEyOS4yTDY3OC4yOCAxNDkuMzZaTTg3MS43MDMgMTAyLjc0Qzg3MS43MDMgMTEyLjgyIDg2OS45NjMgMTIyLjA2IDg2Ni40ODMgMTMwLjQ2Qzg2My4wMDMgMTM4Ljc0IDg1OC4xNDMgMTQ1Ljg4IDg1MS45MDMgMTUxLjg4Qzg0NS43ODMgMTU3Ljc2IDgzOC40NjMgMTYyLjMyIDgyOS45NDMgMTY1LjU2QzgyMS40MjMgMTY4LjggODEyLjE4MyAxNzAuNDIgODAyLjIyMyAxNzAuNDJDNzkyLjI2MyAxNzAuNDIgNzgzLjAyMyAxNjguOCA3NzQuNTAzIDE2NS41NkM3NjYuMTAzIDE2Mi4zMiA3NTguNzgzIDE1Ny43NiA3NTIuNTQzIDE1MS44OEM3NDYuNDIzIDE0NS44OCA3NDEuNjIzIDEzOC43NCA3MzguMTQzIDEzMC40NkM3MzQuNjYzIDEyMi4wNiA3MzIuOTIzIDExMi44MiA3MzIuOTIzIDEwMi43NEM3MzIuOTIzIDkyLjU0IDczNC42NjMgODMuMzYgNzM4LjE0MyA3NS4yQzc0MS42MjMgNjYuOTIgNzQ2LjQyMyA1OS45IDc1Mi41NDMgNTQuMTRDNzU4Ljc4MyA0OC4zOCA3NjYuMTAzIDQzLjk0IDc3NC41MDMgNDAuODJDNzgzLjAyMyAzNy43IDc5Mi4yNjMgMzYuMTQgODAyLjIyMyAzNi4xNEM4MTIuMTgzIDM2LjE0IDgyMS40MjMgMzcuNyA4MjkuOTQzIDQwLjgyQzgzOC40NjMgNDMuOTQgODQ1Ljc4MyA0OC4zOCA4NTEuOTAzIDU0LjE0Qzg1OC4xNDMgNTkuOSA4NjMuMDAzIDY2LjkyIDg2Ni40ODMgNzUuMkM4NjkuOTYzIDgzLjM2IDg3MS43MDMgOTIuNTQgODcxLjcwMyAxMDIuNzRaTTgzOC43NjMgMTAyLjc0QzgzOC43NjMgOTcuMjIgODM3Ljg2MyA5Mi4wNiA4MzYuMDYzIDg3LjI2QzgzNC4yNjMgODIuNDYgODMxLjc0MyA3OC4zOCA4MjguNTAzIDc1LjAyQzgyNS4zODMgNzEuNTQgODIxLjU0MyA2OC44NCA4MTYuOTgzIDY2LjkyQzgxMi41NDMgNjQuODggODA3LjYyMyA2My44NiA4MDIuMjIzIDYzLjg2Qzc5Ni44MjMgNjMuODYgNzkxLjkwMyA2NC44OCA3ODcuNDYzIDY2LjkyQzc4My4wMjMgNjguODQgNzc5LjE4MyA3MS41NCA3NzUuOTQzIDc1LjAyQzc3Mi43MDMgNzguMzggNzcwLjE4MyA4Mi40NiA3NjguMzgzIDg3LjI2Qzc2Ni43MDMgOTIuMDYgNzY1Ljg2MyA5Ny4yMiA3NjUuODYzIDEwMi43NEM3NjUuODYzIDEwOC41IDc2Ni43NjMgMTEzLjg0IDc2OC41NjMgMTE4Ljc2Qzc3MC4zNjMgMTIzLjU2IDc3Mi44MjMgMTI3LjcgNzc1Ljk0MyAxMzEuMThDNzc5LjE4MyAxMzQuNjYgNzgzLjAyMyAxMzcuNDIgNzg3LjQ2MyAxMzkuNDZDNzkxLjkwMyAxNDEuMzggNzk2LjgyMyAxNDIuMzQgODAyLjIyMyAxNDIuMzRDODA3LjYyMyAxNDIuMzQgODEyLjU0MyAxNDEuMzggODE2Ljk4MyAxMzkuNDZDODIxLjQyMyAxMzcuNDIgODI1LjI2MyAxMzQuNjYgODI4LjUwMyAxMzEuMThDODMxLjc0MyAxMjcuNyA4MzQuMjYzIDEyMy41NiA4MzYuMDYzIDExOC43NkM4MzcuODYzIDExMy44NCA4MzguNzYzIDEwOC41IDgzOC43NjMgMTAyLjc0Wk05NDEuNDY4IDE2N1YzOS41Nkg5NzIuNDI4VjE0MC4xOEgxMDIxLjc1VjE2N0g5NDEuNDY4Wk0xMjEzLjExIDEwMi43NEMxMjEzLjExIDExMi44MiAxMjExLjM3IDEyMi4wNiAxMjA3Ljg5IDEzMC40NkMxMjA0LjQxIDEzOC43NCAxMTk5LjU1IDE0NS44OCAxMTkzLjMxIDE1MS44OEMxMTg3LjE5IDE1Ny43NiAxMTc5Ljg3IDE2Mi4zMiAxMTcxLjM1IDE2NS41NkMxMTYyLjgzIDE2OC44IDExNTMuNTkgMTcwLjQyIDExNDMuNjMgMTcwLjQyQzExMzMuNjcgMTcwLjQyIDExMjQuNDMgMTY4LjggMTExNS45MSAxNjUuNTZDMTEwNy41MSAxNjIuMzIgMTEwMC4xOSAxNTcuNzYgMTA5My45NSAxNTEuODhDMTA4Ny44MyAxNDUuODggMTA4My4wMyAxMzguNzQgMTA3OS41NSAxMzAuNDZDMTA3Ni4wNyAxMjIuMDYgMTA3NC4zMyAxMTIuODIgMTA3NC4zMyAxMDIuNzRDMTA3NC4zMyA5Mi41NCAxMDc2LjA3IDgzLjM2IDEwNzkuNTUgNzUuMkMxMDgzLjAzIDY2LjkyIDEwODcuODMgNTkuOSAxMDkzLjk1IDU0LjE0QzExMDAuMTkgNDguMzggMTEwNy41MSA0My45NCAxMTE1LjkxIDQwLjgyQzExMjQuNDMgMzcuNyAxMTMzLjY3IDM2LjE0IDExNDMuNjMgMzYuMTRDMTE1My41OSAzNi4xNCAxMTYyLjgzIDM3LjcgMTE3MS4zNSA0MC44MkMxMTc5Ljg3IDQzLjk0IDExODcuMTkgNDguMzggMTE5My4zMSA1NC4xNEMxMTk5LjU1IDU5LjkgMTIwNC40MSA2Ni45MiAxMjA3Ljg5IDc1LjJDMTIxMS4zNyA4My4zNiAxMjEzLjExIDkyLjU0IDEyMTMuMTEgMTAyLjc0Wk0xMTgwLjE3IDEwMi43NEMxMTgwLjE3IDk3LjIyIDExNzkuMjcgOTIuMDYgMTE3Ny40NyA4Ny4yNkMxMTc1LjY3IDgyLjQ2IDExNzMuMTUgNzguMzggMTE2OS45MSA3NS4wMkMxMTY2Ljc5IDcxLjU0IDExNjIuOTUgNjguODQgMTE1OC4zOSA2Ni45MkMxMTUzLjk1IDY0Ljg4IDExNDkuMDMgNjMuODYgMTE0My42MyA2My44NkMxMTM4LjIzIDYzLjg2IDExMzMuMzEgNjQuODggMTEyOC44NyA2Ni45MkMxMTI0LjQzIDY4Ljg0IDExMjAuNTkgNzEuNTQgMTExNy4zNSA3NS4wMkMxMTE0LjExIDc4LjM4IDExMTEuNTkgODIuNDYgMTEwOS43OSA4Ny4yNkMxMTA4LjExIDkyLjA2IDExMDcuMjcgOTcuMjIgMTEwNy4yNyAxMDIuNzRDMTEwNy4yNyAxMDguNSAxMTA4LjE3IDExMy44NCAxMTA5Ljk3IDExOC43NkMxMTExLjc3IDEyMy41NiAxMTE0LjIzIDEyNy43IDExMTcuMzUgMTMxLjE4QzExMjAuNTkgMTM0LjY2IDExMjQuNDMgMTM3LjQyIDExMjguODcgMTM5LjQ2QzExMzMuMzEgMTQxLjM4IDExMzguMjMgMTQyLjM0IDExNDMuNjMgMTQyLjM0QzExNDkuMDMgMTQyLjM0IDExNTMuOTUgMTQxLjM4IDExNTguMzkgMTM5LjQ2QzExNjIuODMgMTM3LjQyIDExNjYuNjcgMTM0LjY2IDExNjkuOTEgMTMxLjE4QzExNzMuMTUgMTI3LjcgMTE3NS42NyAxMjMuNTYgMTE3Ny40NyAxMTguNzZDMTE3OS4yNyAxMTMuODQgMTE4MC4xNyAxMDguNSAxMTgwLjE3IDEwMi43NFpNMTM2My44NyAxNjdMMTMxMi41NyA4My42NkgxMzEyLjAzTDEzMTIuNzUgMTY3SDEyODIuODdWMzkuNTZIMTMxNy45N0wxMzY5LjA5IDEyMi43MkgxMzY5LjYzTDEzNjguOTEgMzkuNTZIMTM5OC43OVYxNjdIMTM2My44N1pNMTUzNi41IDExM1YxNjdIMTUwNS43MlYxMTNMMTQ1Ny44NCAzOS41NkgxNDk1LjFMMTUyMi4yOCA4Ni43MkwxNTQ5LjQ2IDM5LjU2SDE1ODUuNDZMMTUzNi41IDExM1pNNjQ3LjE0IDQxM0w1OTUuODQgMzI5LjY2SDU5NS4zTDU5Ni4wMiA0MTNINTY2LjE0VjI4NS41Nkg2MDEuMjRMNjUyLjM2IDM2OC43Mkg2NTIuOUw2NTIuMTggMjg1LjU2SDY4Mi4wNlY0MTNINjQ3LjE0Wk03NTcuODQ3IDQxM1YyODUuNTZIODQzLjUyN1YzMTEuNjZINzg3LjU0N1YzMzUuNkg4NDAuNDY3VjM2MC4yNkg3ODcuNTQ3VjM4Ni43Mkg4NDYuNzY3VjQxM0g3NTcuODQ3Wk05NzEuMjIzIDMxMS44NFY0MTNIOTQwLjQ0M1YzMTEuODRIOTA0LjQ0M1YyODUuNTZIMTAwNy4yMlYzMTEuODRIOTcxLjIyM1pNMTIwNS43NyA0MTNIMTE3NS4zNUwxMTUwLjE1IDMyNi43OEgxMTQ5LjYxTDExMjQuNDEgNDEzSDEwOTMuODFMMTA1Ny42MyAyODUuNTZIMTA5MC43NUwxMTEwLjkxIDM3MC4zNEgxMTExLjQ1TDExMzQuMTMgMjg1LjU2SDExNjYuMTdMMTE4OS4wMyAzNzAuMzRIMTE4OS41N0wxMjEwLjA5IDI4NS41NkgxMjQyLjEzTDEyMDUuNzcgNDEzWk0xNDM1LjU3IDM0OC43NEMxNDM1LjU3IDM1OC44MiAxNDMzLjgzIDM2OC4wNiAxNDMwLjM1IDM3Ni40NkMxNDI2Ljg3IDM4NC43NCAxNDIyLjAxIDM5MS44OCAxNDE1Ljc3IDM5Ny44OEMxNDA5LjY1IDQwMy43NiAxNDAyLjMzIDQwOC4zMiAxMzkzLjgxIDQxMS41NkMxMzg1LjI5IDQxNC44IDEzNzYuMDUgNDE2LjQyIDEzNjYuMDkgNDE2LjQyQzEzNTYuMTMgNDE2LjQyIDEzNDYuODkgNDE0LjggMTMzOC4zNyA0MTEuNTZDMTMyOS45NyA0MDguMzIgMTMyMi42NSA0MDMuNzYgMTMxNi40MSAzOTcuODhDMTMxMC4yOSAzOTEuODggMTMwNS40OSAzODQuNzQgMTMwMi4wMSAzNzYuNDZDMTI5OC41MyAzNjguMDYgMTI5Ni43OSAzNTguODIgMTI5Ni43OSAzNDguNzRDMTI5Ni43OSAzMzguNTQgMTI5OC41MyAzMjkuMzYgMTMwMi4wMSAzMjEuMkMxMzA1LjQ5IDMxMi45MiAxMzEwLjI5IDMwNS45IDEzMTYuNDEgMzAwLjE0QzEzMjIuNjUgMjk0LjM4IDEzMjkuOTcgMjg5Ljk0IDEzMzguMzcgMjg2LjgyQzEzNDYuODkgMjgzLjcgMTM1Ni4xMyAyODIuMTQgMTM2Ni4wOSAyODIuMTRDMTM3Ni4wNSAyODIuMTQgMTM4NS4yOSAyODMuNyAxMzkzLjgxIDI4Ni44MkMxNDAyLjMzIDI4OS45NCAxNDA5LjY1IDI5NC4zOCAxNDE1Ljc3IDMwMC4xNEMxNDIyLjAxIDMwNS45IDE0MjYuODcgMzEyLjkyIDE0MzAuMzUgMzIxLjJDMTQzMy44MyAzMjkuMzYgMTQzNS41NyAzMzguNTQgMTQzNS41NyAzNDguNzRaTTE0MDIuNjMgMzQ4Ljc0QzE0MDIuNjMgMzQzLjIyIDE0MDEuNzMgMzM4LjA2IDEzOTkuOTMgMzMzLjI2QzEzOTguMTMgMzI4LjQ2IDEzOTUuNjEgMzI0LjM4IDEzOTIuMzcgMzIxLjAyQzEzODkuMjUgMzE3LjU0IDEzODUuNDEgMzE0Ljg0IDEzODAuODUgMzEyLjkyQzEzNzYuNDEgMzEwLjg4IDEzNzEuNDkgMzA5Ljg2IDEzNjYuMDkgMzA5Ljg2QzEzNjAuNjkgMzA5Ljg2IDEzNTUuNzcgMzEwLjg4IDEzNTEuMzMgMzEyLjkyQzEzNDYuODkgMzE0Ljg0IDEzNDMuMDUgMzE3LjU0IDEzMzkuODEgMzIxLjAyQzEzMzYuNTcgMzI0LjM4IDEzMzQuMDUgMzI4LjQ2IDEzMzIuMjUgMzMzLjI2QzEzMzAuNTcgMzM4LjA2IDEzMjkuNzMgMzQzLjIyIDEzMjkuNzMgMzQ4Ljc0QzEzMjkuNzMgMzU0LjUgMTMzMC42MyAzNTkuODQgMTMzMi40MyAzNjQuNzZDMTMzNC4yMyAzNjkuNTYgMTMzNi42OSAzNzMuNyAxMzM5LjgxIDM3Ny4xOEMxMzQzLjA1IDM4MC42NiAxMzQ2Ljg5IDM4My40MiAxMzUxLjMzIDM4NS40NkMxMzU1Ljc3IDM4Ny4zOCAxMzYwLjY5IDM4OC4zNCAxMzY2LjA5IDM4OC4zNEMxMzcxLjQ5IDM4OC4zNCAxMzc2LjQxIDM4Ny4zOCAxMzgwLjg1IDM4NS40NkMxMzg1LjI5IDM4My40MiAxMzg5LjEzIDM4MC42NiAxMzkyLjM3IDM3Ny4xOEMxMzk1LjYxIDM3My43IDEzOTguMTMgMzY5LjU2IDEzOTkuOTMgMzY0Ljc2QzE0MDEuNzMgMzU5Ljg0IDE0MDIuNjMgMzU0LjUgMTQwMi42MyAzNDguNzRaTTE1NzMuNTYgNDEzTDE1NDYuMDIgMzYyLjQySDE1MzUuNThWNDEzSDE1MDUuMzRWMjg1LjU2SDE1NTMuOTRDMTU2MC4wNiAyODUuNTYgMTU2NiAyODYuMjIgMTU3MS43NiAyODcuNTRDMTU3Ny42NCAyODguNzQgMTU4Mi44NiAyOTAuODQgMTU4Ny40MiAyOTMuODRDMTU5Mi4xIDI5Ni44NCAxNTk1LjgyIDMwMC44IDE1OTguNTggMzA1LjcyQzE2MDEuMzQgMzEwLjY0IDE2MDIuNzIgMzE2Ljc2IDE2MDIuNzIgMzI0LjA4QzE2MDIuNzIgMzMyLjcyIDE2MDAuMzggMzM5Ljk4IDE1OTUuNyAzNDUuODZDMTU5MS4wMiAzNTEuNzQgMTU4NC41NCAzNTUuOTQgMTU3Ni4yNiAzNTguNDZMMTYwOS41NiA0MTNIMTU3My41NlpNMTU3Mi4zIDMyNC42MkMxNTcyLjMgMzIxLjYyIDE1NzEuNjQgMzE5LjIyIDE1NzAuMzIgMzE3LjQyQzE1NjkuMTIgMzE1LjUgMTU2Ny41IDMxNC4wNiAxNTY1LjQ2IDMxMy4xQzE1NjMuNTQgMzEyLjAyIDE1NjEuMzIgMzExLjMgMTU1OC44IDMxMC45NEMxNTU2LjQgMzEwLjU4IDE1NTQuMDYgMzEwLjQgMTU1MS43OCAzMTAuNEgxNTM1LjRWMzQwLjFIMTU0OS45OEMxNTUyLjUgMzQwLjEgMTU1NS4wOCAzMzkuOTIgMTU1Ny43MiAzMzkuNTZDMTU2MC4zNiAzMzkuMDggMTU2Mi43NiAzMzguMyAxNTY0LjkyIDMzNy4yMkMxNTY3LjA4IDMzNi4xNCAxNTY4LjgyIDMzNC41OCAxNTcwLjE0IDMzMi41NEMxNTcxLjU4IDMzMC41IDE1NzIuMyAzMjcuODYgMTU3Mi4zIDMyNC42MlpNMTc1Mi4xMyA0MTNMMTcwNC43OSAzNTQuMzJIMTcwNC40M1Y0MTNIMTY3NC4xOVYyODUuNTZIMTcwNC40M1YzMzcuNEgxNzA0Ljk3TDE3NTAuNTEgMjg1LjU2SDE3ODkuMDNMMTczNC4xMyAzNDQuMjRMMTc5Mi4yNyA0MTNIMTc1Mi4xM1oiIGZpbGw9IiMyODlCREMiLz4KPHJlY3QgeD0iMTA3LjY3NiIgd2lkdGg9IjE1Mi4yNzYiIGhlaWdodD0iMTUyLjI3NiIgdHJhbnNmb3JtPSJyb3RhdGUoNDUgMTA3LjY3NiAwKSIgZmlsbD0iIzI4OUJEQyIvPgo8cmVjdCB4PSIxMDcuNjc2IiB5PSIyMzYuNjU2IiB3aWR0aD0iMTUyLjI3NiIgaGVpZ2h0PSIxNTIuMjc2IiB0cmFuc2Zvcm09InJvdGF0ZSg0NSAxMDcuNjc2IDIzNi42NTYpIiBmaWxsPSIjMjg5QkRDIi8+CjxyZWN0IHg9IjMzOS45ODQiIHdpZHRoPSIxNTIuMjc2IiBoZWlnaHQ9IjE1Mi4yNzYiIHRyYW5zZm9ybT0icm90YXRlKDQ1IDMzOS45ODQgMCkiIGZpbGw9IiMyODlCREMiLz4KPHJlY3QgeD0iMzM5Ljk4NCIgeT0iMjM2LjY1NiIgd2lkdGg9IjE1Mi4yNzYiIGhlaWdodD0iMTUyLjI3NiIgdHJhbnNmb3JtPSJyb3RhdGUoNDUgMzM5Ljk4NCAyMzYuNjU2KSIgZmlsbD0iIzI4OUJEQyIvPgo8L3N2Zz4K"}}]);