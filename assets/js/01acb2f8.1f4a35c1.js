"use strict";(self.webpackChunkiframe_api_docs=self.webpackChunkiframe_api_docs||[]).push([[572],{12795:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"frontend/event","title":"Events MessageEvent","description":"The iframe sends messages about user actions using the postMessage() method.","source":"@site/get-started/frontend/event.mdx","sourceDirName":"frontend","slug":"/frontend/event","permalink":"/iframe-doc/frontend/event","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Events MessageEvent","sidebar_position":3,"hide_table_of_contents":false},"sidebar":"defaultSidebar","previous":{"title":"Authorization","permalink":"/iframe-doc/frontend/auth"},"next":{"title":"Open in new tab","permalink":"/iframe-doc/frontend/newTab"}}');var i=t(74848),r=t(28453);const o={title:"Events MessageEvent",sidebar_position:3,hide_table_of_contents:!1},a=void 0,c={},d=[{value:"<code>appLoaded</code>",id:"apploaded",level:2},{value:"<code>registrationClick</code>",id:"registrationclick",level:2},{value:"<code>loginClick</code>",id:"loginclick",level:2},{value:"<code>rechargeClick</code>",id:"rechargeclick",level:2},{value:"<code>routeChanged</code>",id:"routechanged",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["The iframe sends messages about user actions using the ",(0,i.jsx)(n.code,{children:"postMessage()"})," method."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/docs/Web/API/Window/postMessage",children:"Learn more about postMessage()"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:"You can add an event handler in your application. For example, to receive user\naction statistics or redirect them to an app page:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"window.addEventListener('message', (message) => {\n  if (message.data.sender === 'b2b') {\n    if (message.data.event === 'registrationClick') {\n      console.log('Registration button clicked');\n    }\n  }\n});\n"})}),"\n",(0,i.jsx)(n.h2,{id:"apploaded",children:(0,i.jsx)(n.code,{children:"appLoaded"})}),"\n",(0,i.jsx)(n.p,{children:"App is ready:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"{\n  sender: 'b2b',\n  event: 'appLoaded',\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"registrationclick",children:(0,i.jsx)(n.code,{children:"registrationClick"})}),"\n",(0,i.jsx)(n.p,{children:"Click on the registration button:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"{\n  sender: 'b2b',\n  event: 'registrationClick',\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"loginclick",children:(0,i.jsx)(n.code,{children:"loginClick"})}),"\n",(0,i.jsx)(n.p,{children:"Click on the login button:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"{\n  sender: 'b2b',\n  event: 'loginClick',\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"rechargeclick",children:(0,i.jsx)(n.code,{children:"rechargeClick"})}),"\n",(0,i.jsx)(n.p,{children:"Click on the balance recharge button:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"{\n  sender: 'b2b',\n  event: 'rechargeClick',\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"routechanged",children:(0,i.jsx)(n.code,{children:"routeChanged"})}),"\n",(0,i.jsx)(n.p,{children:"A route has changed:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"{\n  sender: 'b2b',\n  event: 'routeChanged',\n  path: '/en/line',       // new route in the iframe\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(96540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);