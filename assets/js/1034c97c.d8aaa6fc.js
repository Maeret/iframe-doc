(self.webpackChunkiframe_api_docs=self.webpackChunkiframe_api_docs||[]).push([[5599],{14948:(e,n,s)=>{"use strict";s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>d,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"backend/wallet","title":"Seam Wallet API","description":"This API allows you to get and alter the balance of users\' wallets managed on","source":"@site/docs/backend/wallet.mdx","sourceDirName":"backend","slug":"/backend/wallet","permalink":"/iframe-doc/docs/backend/wallet","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Seam Wallet API","sidebar_position":2,"hide_table_of_contents":true},"sidebar":"defaultSidebar","previous":{"title":"IFRAME Backend","permalink":"/iframe-doc/docs/backend/API"},"next":{"title":"Transactions","permalink":"/iframe-doc/docs/backend/payments"}}');var r=s(74848),a=s(28453),i=s(32346);const d={title:"Seam Wallet API",sidebar_position:2,hide_table_of_contents:!0},l=void 0,o={},c=[];function h(e){const n={a:"a",admonition:"admonition",code:"code",li:"li",mermaid:"mermaid",ol:"ol",p:"p",...(0,a.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"This API allows you to get and alter the balance of users' wallets managed on\nthe IFRAME Service side."}),"\n",(0,r.jsx)(n.p,{children:"For these purposes, your service must send requests to the IFRAME Service along\nwith a token unique for the user and a wallet."}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("b",{children:"Getting the balance"}),". Integration flow"]})}),(0,r.jsx)(n.p,{children:"You need to:"}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["(optionally) Generate unique ",(0,r.jsx)(n.code,{children:"token1"})," and ",(0,r.jsx)(n.code,{children:"sign"})," (see\n",(0,r.jsx)(n.a,{href:"/en/get-started/backend/sign",children:"Request signature"}),")."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Call ",(0,r.jsx)(n.a,{href:"/en/get-started/wallet/#operation/getBalance",children:"/GetBalance"})," method."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["IFRAME Service will send a ",(0,r.jsx)(n.a,{href:"/en/get-started/wallet/#operation/getUserData",children:"/GetUserData"}),"\nrequest to your host address."]}),"\n",(0,r.jsxs)(n.p,{children:["Your service should validate the token and signature and return data,\nincluding the existing user's ",(0,r.jsx)(n.code,{children:"userId"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"IFRAME Service will send a response that contains the balance of the\nwallet tied to the user."}),"\n"]}),"\n"]}),(0,r.jsx)(n.mermaid,{value:"sequenceDiagram\n  participant P as Your service\n  participant I as IFRAME Service\n\n\n  P->>I: /GetBalance (token1, sign)\n  activate I\n\n  alt\n    I--\x3e>P: /GetUserData\n  else Invalid token1 or sign\n    I--\x3e>P: 401\n  end\n\n  alt\n    P->>I: 200 (userId, errorCode = 0)\n  else\n    P->>I: 200 (errorCode = 1)\n  else\n    P->>I: 200 (errorCode = 4)\n  end\n\n  alt\n    I--\x3e>P: 200 (balance)\n  else\n    I--\x3e>P: 500\n    deactivate I\n  end"})]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("b",{children:"Getting the balance"}),". Integration flow"]})}),(0,r.jsx)(n.p,{children:"You need to:"}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["(optionally) Generate unique ",(0,r.jsx)(n.code,{children:"token1"})," and ",(0,r.jsx)(n.code,{children:"sign"})," (see\n",(0,r.jsx)(n.a,{href:"/en/get-started/backend/sign",children:"Request signature"}),")."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Call ",(0,r.jsx)(n.a,{href:"/en/get-started/wallet/#operation/transferFunds",children:"/TransferFunds"})," method with operation\nparameters including ",(0,r.jsx)(n.code,{children:"transferId"}),"."]}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsxs)(n.p,{children:["Requests with the same ",(0,r.jsx)(n.code,{children:"transferId"})," and other parameters are idempotent,\nmeaning that if the first request was successful, the service will return\na response with a status of 409 for all subsequent requests."]}),(0,r.jsxs)(n.p,{children:["If in repeat requests the ",(0,r.jsx)(n.code,{children:"transferId"})," matches, but other parameters\ndiffer, they will be rejected with 400 status code. One ",(0,r.jsx)(n.code,{children:"transferId"}),"\ncannot be used for different ",(0,r.jsx)(n.code,{children:"userId"}),"."]})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["IFRAME Service will send a ",(0,r.jsx)(n.a,{href:"/en/get-started/wallet/#operation/getUserData",children:"/GetUserData"}),"\nrequest to your host address."]}),"\n",(0,r.jsxs)(n.p,{children:["Your service should validate the token and signature and return data,\nincluding the existing user's ",(0,r.jsx)(n.code,{children:"userId"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"In the case of success, IFRAME Service will respond with 200 status code."}),"\n"]}),"\n"]}),(0,r.jsx)(n.mermaid,{value:"sequenceDiagram\n  participant P as Your service\n  participant I as IFRAME Service\n\n\n  P->>I: /TransferFunds (token1, sign, transferId)\n  activate I\n\n  alt\n    I--\x3e>P: /GetUserData\n  else Invalid token1 or sign\n    I--\x3e>P: 401\n  end\n\n  alt\n    P->>I: 200 (userId, errorCode = 0)\n  else Invalid token1\n    P->>I: 200 (errorCode = 1)\n  else Invalid sign\n    P->>I: 200 (errorCode = 4)\n  end\n\n  alt\n    I--\x3e>P: 200 (balance)\n  else Invalid response to /GetUserData or violated idempotence\n    I--\x3e>P: 400\n  else userId not found\n    I--\x3e>P: 403\n  else Operation under this transferId is already complete\n    I--\x3e>P: 409\n  else Insufficient funds\n    I--\x3e>P: 422\n  else\n    I--\x3e>P: 500\n    deactivate I\n  end"})]}),"\n",(0,r.jsx)(i.A,{id:"en-wallet"})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},67992:()=>{},28825:()=>{},7411:()=>{},93290:()=>{},92441:()=>{}}]);