"use strict";(self.webpackChunkiframe_api_docs=self.webpackChunkiframe_api_docs||[]).push([[6903],{24891:(e,t,n)=>{n.d(t,{Ay:()=>y,RM:()=>x});var i=n(74848),r=n(28453),o=n(11470),s=n(19365),a=n(21432);const d={desktop:{width:"100%",height:"760"},mobile:{width:"360",height:"760"}};function l(e,t){const n=t.src?t.src.replace("PLATFORM_TYPE",t.type).replace("LNG",t.lng).replace("BG_COLOR",t.bgColor):"docs.uplatform.com"==e?t.ver?t.lng?"https://xmaxiframe.top/iframe/main?gear=1&method_id=2&lng=en&cyber_type=2&sign=6c2d90baab2429d2348a9cb63e74e4b1":"https://docs-iframe-demo.uplatform.com/iframe/main?gear=1&method_id=1&lng=ru&cyber_type=2&game=-1&sign=66a940a9eeb14b8a24215cd83f85ac4b":`https://xframe-docs-demo.uplatform.com${t.lng?"/"+t.lng:""}?platform_type=${t.type}`:t.ver?t.lng?"https://xmaxiframe.top/iframe/main?gear=1&method_id=2&lng=en&cyber_type=2&sign=6c2d90baab2429d2348a9cb63e74e4b1":"https://docs-iframe-demo.uplatform.com/en/iframe/main?gear=1&sign=484fdc158f359ba14afabf22ce88b64b&method_id=1&lng=en&cyber_type=2&game=-1":`https://xframe-docs-demo.payment-b2b.com${t.lng?"/"+t.lng:""}?platform_type=${t.type}`,r=t.id??`iframe-demo-${t.type}`,o=t.title??`demo-${t.type}`,s=t.width??d[t.type].width,a=t.height??d[t.type].height;return(0,i.jsx)("iframe",{id:r,title:o,width:s,height:a,src:n})}var c=n(34223),h=n(38193);const p=h.default.canUseDOM?window.location.host:"";function m(e){return h.default.canUseDOM&&window.location.pathname.indexOf("/en")>-1&&localStorage.setItem("lng","en"),l(p,{...e})}const u=[];function f(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(m,{...e}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",e.desc[0]?e.desc[0]:e.desc,"\n",(0,i.jsx)(a.A,{language:"html",children:(0,c.Ay)(l(p,{...e}))}),"\n",e.desc[0]?e.desc.slice(1):null]})}function b(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(f,{...e})}):f(e)}var g=n(95293);const x=[...u,...u];function w(e){return(0,i.jsxs)(o.A,{children:[(0,i.jsx)(s.A,{value:"desktop",label:"Desktop",default:!0,children:(0,i.jsx)(b,{type:"desktop",lng:e.lng,ver:e.ver,desc:e.children,width:e.desktop_width,height:e.desktop_height,src:e.src,bgColor:"dark"===(0,g.G)().colorMode?"%231b1b1d":"%2380808020"})}),(0,i.jsx)(s.A,{value:"mobile",label:"Mobile",children:(0,i.jsx)(b,{type:"mobile",lng:e.lng,ver:e.ver,desc:e.children,width:e.mobile_width,height:e.mobile_height,src:e.src,bgColor:"dark"===(0,g.G)().colorMode?"%231b1b1d":"%2380808020"})})]})}function y(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(w,{...e})}):w(e)}},57455:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"intro","title":"Get started","description":"This API will let you embed the contents of the wallet provider\'s website in an iframe","source":"@site/docs/intro.mdx","sourceDirName":".","slug":"/","permalink":"/iframe-doc/docs/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Get started","slug":"/","sidebar_position":1},"sidebar":"defaultSidebar"}');var r=n(74848),o=n(28453),s=n(24891);const a={title:"Get started",slug:"/",sidebar_position:1},d=void 0,l={},c=[...s.RM];function h(e){const t={a:"a",admonition:"admonition",code:"code",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"This API will let you embed the contents of the wallet provider's website in an iframe\nelement in your web application. The iframe element is hosted as an independent\nHTML document with its own browsing context. Your users will be able to log in\nto the wallet provider's application and place payment. Their credentials will be stored\non your side."}),"\n",(0,r.jsx)(t.p,{children:"The API uses callbacks to your server to provide communication between the\nwallet provider service and your user database."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.a,{href:"/category/api-frontend",children:"API frontend"})," section\ndescribes how to include an iframe element in your application code."]}),"\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.a,{href:"/category/api-backend",children:"API backend"})," section describes requests from the\nwallet provider's server to your app, which let the wallet provider get your user data,\nauthorize users, place and calculate their payment."]}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://www.w3.org/TR/2010/WD-html5-20100624/the-iframe-element.html",children:"More about the HTML iframe element"}),"."]})}),"\n",(0,r.jsxs)(s.Ay,{lng:"en",children:[(0,r.jsx)(t.p,{children:"Iframe examples above display the wallet provider's demo site (web and mobile\nversion)."}),(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:'Click a link holding the Ctrl or Cmd key or select "Open link in new tab" to\nfind out it works.'})})]}),"\n",(0,r.jsxs)(t.p,{children:["This iframe URL does not accept a ",(0,r.jsx)(t.code,{children:"token"})," and does not cause it to be checked,\nas ",(0,r.jsx)(t.a,{href:"/frontend/auth",children:"explained here"}),", so the user is not required to register or\nauthorize in order to navigate between sections of the website. In addition, it\ndoes not require any other ",(0,r.jsx)(t.a,{href:"/frontend/API",children:"mandatory parameters"}),". You can use\nthis widget in your application."]}),"\n",(0,r.jsxs)(t.p,{children:["In addition, the iframe you'll set up in ",(0,r.jsx)(t.a,{href:"/frontend/API",children:"this tutorial"})," has the\noption to disable (separately) user token authorization, the registration\nbutton, and the top menu. Please contact us to do so."]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}}}]);