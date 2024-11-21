"use strict";(self.webpackChunkiframe_api_docs=self.webpackChunkiframe_api_docs||[]).push([[3888],{74821:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>f,frontMatter:()=>c,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"frontend/auth","title":"Authorization","description":"The user token needed to access the iframe\'s sections is generated","source":"@site/docs/frontend/auth.mdx","sourceDirName":"frontend","slug":"/frontend/auth","permalink":"/docs/frontend/auth","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Authorization","sidebar_position":2,"hide_table_of_contents":false},"sidebar":"defaultSidebar","previous":{"title":"iframe URL","permalink":"/docs/frontend/API"},"next":{"title":"Events MessageEvent","permalink":"/docs/frontend/event"}}');var s=t(74848),i=t(28453);function o(e){const n={mermaid:"mermaid",...(0,i.R)(),...e.components};return(0,s.jsx)(n.mermaid,{value:"sequenceDiagram\n  participant P as Partner Service\n  participant IW as IFRAME WEB\n  participant IS as IFRAME Service\n\n\n  P->>IW: iframe URL(token, sign)\n  \n  activate IW\n  IW->>IW: Check sign()\n  IW->>IS: Check(token)\n  \n  activate IS\n  IS->>P: POST /GetUserData (token1, sign)\n\n  P->>P: Check sign()\n  P--\x3e>IS: 200: token is valid\n\n  IS--\x3e>IW: auth, can run iframe\n  deactivate IS\n\n  IW--\x3e>P: show iframe content\n  deactivate IW"})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}const c={title:"Authorization",sidebar_position:2,hide_table_of_contents:!1},d=void 0,h={},l=[];function u(e){const n={a:"a",admonition:"admonition",code:"code",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["The user token needed to access the iframe's sections is generated\n",(0,s.jsx)(n.strong,{children:"on your side"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Your service passes the user token in the iframe URL request.\nAfter that, the wallet provider's service calls\n",(0,s.jsx)(n.a,{href:"/backend/API#operation/GetUserData",children:(0,s.jsx)(n.strong,{children:"GetUserData"})})," with the received\n",(0,s.jsx)(n.code,{children:"token1"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The API expects a ",(0,s.jsx)(n.code,{children:"200"})," response from your service with user data in the\nresponse body and no ",(0,s.jsx)(n.code,{children:"errorCode"}),". This response verifies that the token exists\nand that a user account exists for it on your side. The iframe URL request is\nauthorized."]}),"\n",(0,s.jsx)(a,{}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Partner Service \u2014 your service;"}),"\n",(0,s.jsxs)(n.li,{children:["IFRAME WEB \u2014 frontend iframe. Responsible for the iframe URL. The API is\ndescribed in ",(0,s.jsx)(n.a,{href:"/category/api-frontend",children:"this section"}),";"]}),"\n",(0,s.jsxs)(n.li,{children:["IFRAME Service \u2014 backend iframe. Responsible for sending requests to the\nPartner Service. Described in section ",(0,s.jsx)(n.a,{href:"/category/api-backend",children:"API Backend"}),"."]}),"\n"]})})]})}function f(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var r=t(96540);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);