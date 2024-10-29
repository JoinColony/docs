"use strict";(globalThis.webpackChunkdocs=globalThis.webpackChunkdocs||[]).push([[5603],{8860:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>h});var o=t(7953);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),d=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=d(e.components);return o.createElement(s.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=d(t),m=a,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return t?o.createElement(h,l(l({ref:n},p),{},{components:t})):o.createElement(h,l({ref:n},p))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r[c]="string"==typeof e?e:a,l[1]=r;for(var d=2;d<i;d++)l[d]=t[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5157:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var o=t(4432),a=(t(7953),t(8860));const i={description:"Colony Domains and Skills explained",sidebar_position:3},l="Domains and Skills",r={unversionedId:"develop/dev-learning/domains-skills",id:"develop/dev-learning/domains-skills",title:"Domains and Skills",description:"Colony Domains and Skills explained",source:"@site/colony/develop/dev-learning/domains-skills.md",sourceDirName:"develop/dev-learning",slug:"/develop/dev-learning/domains-skills",permalink:"/next/develop/dev-learning/domains-skills",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/develop/dev-learning/domains-skills.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Colony Domains and Skills explained",sidebar_position:3},sidebar:"develop",previous:{title:"The Metacolony and CLNY",permalink:"/next/develop/dev-learning/metacolony"},next:{title:"Pots and Funding",permalink:"/next/develop/dev-learning/pots"}},s={},d=[{value:"Domains",id:"domains",level:2},{value:"Skills",id:"skills",level:2},{value:"Disputes",id:"disputes",level:2}],p={toc:d},c="wrapper";function u(e){let{components:n,...i}=e;return(0,a.yg)(c,(0,o.A)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"domains-and-skills"},"Domains and Skills"),(0,a.yg)("p",null,"Domains and Skills are concepts that define a colony's organizational structure in a decentralized context, and allow for the division of labor without a strict management hierarchy."),(0,a.yg)("p",null,"Domains are a structure for compartmentalizing the work and shared resources of a colony into smaller, more specialized sub-groups which are analogous to the departments of a traditional company."),(0,a.yg)("p",null,"Skills are a similar structure that categorize the ",(0,a.yg)("em",{parentName:"p"},"type")," of work done, independent of the domain or colony in which the work took place."),(0,a.yg)("h2",{id:"domains"},"Domains"),(0,a.yg)("p",null,"Like a file system that contains files and sub-folders, any domain can contain tasks, sub-domains, or both."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Example Domains",src:t(406).A,width:"1200",height:"917"})),(0,a.yg)("p",null,"With the exception of the top-level colony domain, which contains all tasks and sub-domains, every domain in a colony belongs to a larger parent domain."),(0,a.yg)("p",null,"Every domain has an associated ",(0,a.yg)("a",{parentName:"p",href:"/next/develop/dev-learning/pots"},"pot")," which can receive funding (in most circumstances from the parent domain's pot)."),(0,a.yg)("p",null,"Tasks are tagged with a ",(0,a.yg)("inlineCode",{parentName:"p"},"DomainId")," that specifies which domain they belong to. When a member of a colony earns internal tokens as a result of a completed task (Managers, Workers, and Evaluators all earn reputation from task completion), they earn reputation in that domain as well as all parent domains, including the colony-wide domain. They do not earn any reputation in child domains."),(0,a.yg)("p",null,"A well-organized domain hierarchy is one way to isolate and compartmentalize work within a colony: In the Colony Protocol, reputation mediates the flow of funding from parent domains to their children (see ",(0,a.yg)("a",{parentName:"p",href:"/next/develop/dev-learning/pots"},"pots")," for more about funding), which may in turn direct funding toward smaller and more specialized or specific child domains or tasks. In version 1 of the colonyNetwork, however, the flow of funds between domain pots is permissioned based on Colony Roles."),(0,a.yg)("h2",{id:"skills"},"Skills"),(0,a.yg)("p",null,"Skills do not exist within a particular colony, but instead are a single structure available to all colonies on the network. The global skill hierarchy is maintained by ",(0,a.yg)("a",{parentName:"p",href:"/next/develop/dev-learning/metacolony"},"The Meta Colony"),"."),(0,a.yg)("p",null,"Tasks are tagged with a ",(0,a.yg)("inlineCode",{parentName:"p"},"SkillId")," that specifies a skill from the global skill hierarchy. When a member of a colony earns internal tokens for completing a task, they earn reputation in the skill, as well as all parent skills. They do not earn any reputation in child skills."),(0,a.yg)("p",null,"Even though the global set of Skills is shared by all colonies, reputation earned in a particular skill only affects an individual's influence over the colony in which the reputation was earned."),(0,a.yg)("p",null,"Skill tags are meant to provide a more fine-grained categorization of work than domains, allowing for tasks within the same domain to be further differentiated."),(0,a.yg)("p",null,"See the ",(0,a.yg)("a",{parentName:"p",href:"https://docs.colony.io/colonyjs"},"ColonyJS")," ",(0,a.yg)("inlineCode",{parentName:"p"},"colonyClient")," API for implementation details."),(0,a.yg)("h2",{id:"disputes"},"Disputes"),(0,a.yg)("p",null,"Domains and Skills determine the scope of voting in the event of a dispute or collective decision."),(0,a.yg)("p",null,"In Colony you cannot escalate a decision to higher management, you can only escalate to bigger groups of your peers. Domains and Skills mediate this behavior."),(0,a.yg)("p",null,"When an objection is raised, the objector must specify at least one domain or skill which should vote on the issue in the event of a dispute. All members within the specified domain/skill will then carry out a reputation-weighted vote to settle the dispute. If the results of the vote are disagreeable to a sufficient amount of collective reputation, the dispute may be escalated to a parent domain and/or skill with a subsequent round of objection/dispute."),(0,a.yg)("p",null,"Because of the recursively-awarded reputation in parent domains/skills, an individual will always have the same absolute voting power as a dispute is escalated, but of course will have diminishing proportional voting power as the dispute involves more and more participants."),(0,a.yg)("p",null,"See ",(0,a.yg)("a",{parentName:"p",href:"/next/develop/dev-learning/disputes"},"Objections and Disputes")," for more information about the complete dispute resolution process as described in the Colony whitepaper."))}u.isMDXComponent=!0},406:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/domains_1-1d97fe2ef8b2a9dd0315369f7b4855fe.png"}}]);