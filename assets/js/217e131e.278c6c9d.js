"use strict";(self.webpackChunkiframe_api_docs=self.webpackChunkiframe_api_docs||[]).push([[98],{70230:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"backend/betLimits","title":"payment limits","description":"You can implement several types of payment limits on your service and return the","source":"@site/get-started/backend/betLimits.mdx","sourceDirName":"backend","slug":"/backend/betLimits","permalink":"/iframe-doc/backend/betLimits","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"payment limits","sidebar_position":4,"hide_table_of_contents":false},"sidebar":"defaultSidebar","previous":{"title":"Request signature","permalink":"/iframe-doc/backend/sign"}}');var s=t(74848),r=t(28453);const o={title:"payment limits",sidebar_position:4,hide_table_of_contents:!1},a=void 0,c={},d=[];function l(e){const n={a:"a",admonition:"admonition",code:"code",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"You can implement several types of payment limits on your service and return the\ncorresponding error to us if the user reaches the limit."}),"\n",(0,s.jsx)(n.p,{children:"If your service returns one of these errors when accepting a payment, the wallet provider\nservice will return an error. The payment will not be placed."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["All listed error codes errorCode should be returned in the response of the\n",(0,s.jsx)(n.a,{href:"/backend/API#operation/MakePayment",children:(0,s.jsx)(n.strong,{children:"MakePayment"})})," method for a payment\n",(0,s.jsx)(n.a,{href:"/backend/payments#payment-acceptance",children:"transaction"})," with ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"type: payment"})}),"."]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"6"})," \u2014 limit on the amount of a single payment. The user has reached the limit of\nthe amount of a single payment, so the payment for the current amount cannot be\nplaced."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"7"})," \u2014 daily limit on the total amount of payment. The user has reached the\nlimit of the total amount of payment per day, so the current payment cannot be\nplaced."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"8"})," \u2014 loss limit. The user has reached the limit of the amount of lost\nfunds, so the current payment cannot be placed."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"9"})," \u2014 self-imposed limit. The user has set a limit on the amount of payment and\nexceeded the limit, so the current payment cannot be placed."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"The mechanism for setting self-restrictions is implemented on your side."})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"10"})," \u2014 unverified user profile. The user's profile has unverified data, such\nas not uploaded documents confirming their identity."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"The verification mechanism is implemented on your side."})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(96540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);