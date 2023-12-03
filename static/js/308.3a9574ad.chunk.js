"use strict";(self.webpackChunkcars_app=self.webpackChunkcars_app||[]).push([[308],{238:(n,e,r)=>{r.d(e,{Z:()=>h});var o,t,i,l=r(168),s=r(87),c=r(256);const a=c.ZP.nav(o||(o=(0,l.Z)(["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n\n  width: 100vw;\n\n  padding: 22px 0;\n\n  background-color: lightblue;\n\n  z-index: 100;\n"]))),d=c.ZP.ul(t||(t=(0,l.Z)(["\n  display: flex;\n  padding: 0 128px;\n  justify-content: space-around;\n"]))),p=(0,c.ZP)(s.OL)(i||(i=(0,l.Z)(["\n  padding: 10px 24px;\n\n  background-color: var(--color-button);\n  color: var(--color-text-button);\n\n  border: 1px solid var(--color-button);\n  border-radius: 12px;\n\n  cursor: pointer;\n\n  transform: scale(1);\n  transition: border 2500ms var(--timing-function),\n    transform 250ms var(--timing-function);\n\n  &:hover {\n    background-color: var(--color-button-hover);\n    border-color: var(--color-button-hover);\n    transform: scale(1.05);\n  }\n\n  &.active {\n    background-color: var(--color-button-hover);\n  }\n"])));var x=r(184);const h=()=>(0,x.jsx)(a,{children:(0,x.jsxs)(d,{children:[(0,x.jsx)("li",{children:(0,x.jsx)(p,{to:"/home",children:"Home"})}),(0,x.jsx)("li",{children:(0,x.jsx)(p,{to:"/catalog",children:"Catalog"})}),(0,x.jsx)("li",{children:(0,x.jsx)(p,{to:"/favorite",children:"Favorite"})})]})})},308:(n,e,r)=>{r.r(e),r.d(e,{default:()=>Bn});var o=r(791),t=r(434);let i=function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce(((n,e)=>n+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"),"")};const l=r.p+"static/media/sprite.8ec92338f9144dff5fece67209cc7505.svg";var s=r(164);const c=n=>{let{children:e}=n;const r=document.getElementById("modal-root");return r?(0,s.createPortal)(e,r):(console.error("Modal root element isn't found."),null)};var a,d,p,x,h=r(168),f=r(256);const u=f.ZP.div(a||(a=(0,h.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n\n  z-index: 200;\n\n  width: 100vw;\n  height: 100vh;\n\n  background-color: var(--color-text-info);\n"]))),v=f.ZP.div(d||(d=(0,h.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  padding: 40px;\n  width: 541px;\n\n  overflow: hidden;\n  z-index: 200;\n\n  background-color: var(--color-text-button);\n\n  border-radius: 24px;\n"]))),g=f.ZP.svg(p||(p=(0,h.Z)(["\n  position: absolute;\n  top: 16px;\n  right: 16px;\n\n  width: 24px;\n  height: 24px;\n  stroke: var(--color-text);\n\n  cursor: pointer;\n"])));f.ZP.div(x||(x=(0,h.Z)(["\n  margin: 0 auto;\n  text-align: center;\n"])));var Z=r(184);const j=n=>{let{children:e,onClick:r}=n;const t=n=>{"Escape"===n.code&&r()};return(0,o.useEffect)((()=>(window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}))),(0,Z.jsx)(c,{children:(0,Z.jsx)(u,{onClick:n=>{n.currentTarget===n.target&&r()},children:(0,Z.jsxs)(v,{children:[(0,Z.jsx)(g,{onClick:()=>{r()},children:(0,Z.jsx)("use",{href:"".concat(l,"#icon-x")})}),e]})})})},m=n=>n.cars.cars;var b,w,P,y,k,C,z,E,S,L,F,R,I,_,A=r(396);const M=f.ZP.ul(b||(b=(0,h.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  column-gap: 29px;\n  row-gap: 50px;\n"]))),T=f.ZP.li(w||(w=(0,h.Z)(["\n  width: 274px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 28px;\n"]))),U=f.ZP.img(P||(P=(0,h.Z)(["\n  width: 100%;\n  height: 268px;\n\n  border-radius: 14px;\n\n  object-fit: cover;\n"]))),B=f.ZP.div(y||(y=(0,h.Z)([""]))),H=f.ZP.a(k||(k=(0,h.Z)(["\n  display: block;\n  width: 100%;\n\n  padding: 12px 99.5px;\n\n  text-align: center;\n  font-size: 14px;\n  line-height: 1.43;\n\n  background-color: var(--color-button);\n  color: var(--color-text-button);\n\n  border: 1px solid var(--color-button);\n  border-radius: 12px;\n\n  cursor: pointer;\n\n  transform: scale(1);\n  transition: border 2500ms var(--timing-function),\n    transform 250ms var(--timing-function);\n\n  &:hover {\n    background-color: var(--color-button-hover);\n    border-color: var(--color-button-hover);\n    transform: scale(1.05);\n  }\n"]))),O=f.ZP.div(C||(C=(0,h.Z)(["\n  display: flex;\n  justify-content: space-between;\n\n  margin-bottom: 8px;\n\n  font-size: 16px;\n  line-height: 1.5;\n"]))),V=f.ZP.div(z||(z=(0,h.Z)(["\n  display: flex;\n  flex-wrap: nowrap;\n  gap: 6px;\n\n  font-size: 12px;\n  line-height: 1.5;\n  color: var(--color-text-info);\n"]))),Y=f.ZP.p(E||(E=(0,h.Z)(['\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-overflow: nowrap;\n\n  &::after {\n    content: "";\n    margin-left: 6px;\n    border-right: 1px solid #1214171a;\n  }\n']))),q=f.ZP.p(S||(S=(0,h.Z)(["\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-overflow: nowrap;\n"]))),D=f.ZP.span(L||(L=(0,h.Z)(["\n  color: var(--color-button);\n"]))),G=f.ZP.svg(F||(F=(0,h.Z)(["\n  position: absolute;\n  top: 14px;\n  right: 14px;\n\n  width: 18px;\n  height: 18px;\n"]))),J=f.ZP.div(R||(R=(0,h.Z)(["\n  position: relative;\n"]))),K=f.ZP.div(I||(I=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n"]))),N=f.ZP.button(_||(_=(0,h.Z)(["\n  margin-top: 100px;\n\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.5;\n  color: var(--color-button);\n\n  text-decoration: underline;\n\n  background-color: transparent;\n  border: none;\n"])));var Q,W,X,$,nn,en,rn,on,tn,ln,sn,cn,an,dn,pn,xn,hn,fn,un,vn;const gn=f.ZP.div(Q||(Q=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n"]))),Zn=f.ZP.img(W||(W=(0,h.Z)(["\n  width: 100%;\n  height: 248px;\n\n  border-radius: 14px;\n\n  object-fit: cover;\n\n  transform: scale(1);\n\n  transition: transform 250ms var(--timing-function);\n\n  &:hover {\n    transform: scale(1.05);\n  }\n"]))),jn=f.ZP.a(X||(X=(0,h.Z)(["\n  display: inline-block;\n\n  text-align: center;\n\n  width: 168px;\n  padding: 12px 50px;\n  white-space: nowrap;\n  background-color: var(--color-button);\n  color: var(--color-text-button);\n\n  border: 1px solid var(--color-button);\n  border-radius: 12px;\n\n  font-size: 14px;\n\n  cursor: pointer;\n\n  transform: scale(1);\n  transition: border 2500ms var(--timing-function),\n    transform 250ms var(--timing-function);\n\n  &:hover {\n    background-color: var(--color-button-hover);\n    border-color: var(--color-button-hover);\n    transform: scale(1.05);\n  }\n"]))),mn=f.ZP.h2($||($=(0,h.Z)(["\n  margin-bottom: 8px;\n\n  font-size: 18px;\n  line-height: 1.5;\n"]))),bn=(0,f.ZP)(V)(nn||(nn=(0,h.Z)([""]))),wn=f.ZP.div(en||(en=(0,h.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  column-gap: 8px;\n  row-gap: 8px;\n"]))),Pn=f.ZP.div(rn||(rn=(0,h.Z)(["\n  display: flex;\n  flex-wrap: nowrap;\n  gap: 6px;\n\n  font-size: 12px;\n  line-height: 1.5;\n  color: var(--color-text-info);\n"]))),yn=f.ZP.h3(on||(on=(0,h.Z)(["\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.43;\n"]))),kn=f.ZP.p(tn||(tn=(0,h.Z)(["\n  font-size: 14px;\n  line-height: 1.43;\n"]))),Cn=f.ZP.span(ln||(ln=(0,h.Z)(["\n  color: var(--color-button);\n  font-weight: 500;\n"]))),zn=f.ZP.span(sn||(sn=(0,h.Z)(["\n  color: var(--color-button);\n  font-weight: 600;\n"]))),En=f.ZP.div(cn||(cn=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n"]))),Sn=f.ZP.div(an||(an=(0,h.Z)([""]))),Ln=f.ZP.div(dn||(dn=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n"]))),Fn=f.ZP.p(pn||(pn=(0,h.Z)(['\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-overflow: nowrap;\n\n  &:not(:last-child)::after {\n    content: "";\n    margin-left: 6px;\n    border-right: 1px solid #1214171a;\n    text-overflow: nowrap;\n  }\n']))),Rn=f.ZP.p(xn||(xn=(0,h.Z)([""]))),In=f.ZP.div(hn||(hn=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n"]))),_n=f.ZP.div(fn||(fn=(0,h.Z)(["\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  column-gap: 8px;\n  row-gap: 8px;\n\n  font-size: 12px;\n  line-height: 1.5;\n  color: var(--color-text);\n"]))),An=f.ZP.div(un||(un=(0,h.Z)(["\n  display: flex;\n  flex-wrap: nowrap;\n\n  padding: 7px 14px;\n  border-radius: 35px;\n  background-color: #f9f9f9;\n"]))),Mn=f.ZP.div(vn||(vn=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"]))),Tn=n=>{let{id:e}=n;const r=(0,t.v9)(m).find((n=>n.id===e)),{year:l,make:s,model:c,type:a,img:d,description:p,fuelConsumption:x,engineSize:h,accessories:f,functionalities:u,address:v,rentalConditions:g}=r;return(0,Z.jsxs)(gn,{children:[(0,Z.jsxs)(Ln,{children:[(0,Z.jsx)(Zn,{src:d,alt:p}),(0,Z.jsxs)(Sn,{children:[(0,Z.jsxs)(mn,{children:[s," ",(0,Z.jsx)(Cn,{children:c}),", ",l]}),(0,Z.jsxs)(En,{children:[(0,Z.jsxs)(bn,{children:[(0,Z.jsx)(Fn,{children:v.split(",").splice(1,1)}),(0,Z.jsx)(Fn,{children:v.split(",").splice(2,1)}),(0,Z.jsxs)(Fn,{children:["Id: ",e]}),(0,Z.jsxs)(Fn,{children:["Year: ",l]}),(0,Z.jsxs)(Rn,{children:["Type: ",a]})]}),(0,Z.jsxs)(bn,{children:[(0,Z.jsxs)(Fn,{children:["Fuel Consumption: ",x]}),(0,Z.jsxs)(Rn,{children:["Engine Size: ",h]})]})]})]}),(0,Z.jsx)(kn,{children:p})]}),(0,Z.jsxs)(Mn,{children:[(0,Z.jsx)(yn,{children:"Accessories and functionalities:"}),(0,Z.jsxs)(In,{children:[(0,Z.jsx)(Pn,{children:f.map((n=>{const e=i();return(0,Z.jsx)(Fn,{children:n},e)}))}),(0,Z.jsx)(bn,{children:u.map((n=>{const e=i();return(0,Z.jsx)(Fn,{children:n},e)}))})]})]}),(0,Z.jsxs)(Mn,{children:[(0,Z.jsx)(yn,{children:"Rental Conditions:"}),(0,Z.jsx)(wn,{children:g.split("\n").map(((n,e)=>(0,Z.jsx)(_n,{children:(0,Z.jsx)(An,{children:n.includes(":")?n.split(":").map(((n,e)=>(0,Z.jsx)(o.Fragment,{children:0===e?(0,Z.jsxs)(_n,{children:[n,":\xa0"]}):(0,Z.jsx)(zn,{children:n})},e))):n})},e)))})]}),(0,Z.jsx)(jn,{href:"tel:+380730000000",children:"Rental Car"})]})};var Un=r(238);const Bn=()=>{const n=(0,t.v9)(m),[e,r]=(0,o.useState)(!1),[s,c]=(0,o.useState)(1),[a,d]=(0,o.useState)(null),p=()=>{r((n=>!n))},x=(0,t.I0)();(0,o.useEffect)((()=>{x((0,A.Rn)())}),[x]),(0,o.useEffect)((()=>{x((0,A.do)(s))}),[x,s]);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Un.Z,{}),(0,Z.jsx)(M,{children:n.map((n=>{let{id:r,year:o,make:t,model:s,type:c,img:x,description:h,fuelConsumption:f,engineSize:u,accessories:v,functionalities:g,rentalPrice:m,rentalCompany:b,address:w}=n;return(0,Z.jsxs)(T,{children:[(0,Z.jsxs)(K,{children:[(0,Z.jsxs)(J,{children:[x?(0,Z.jsx)(U,{src:x,alt:h}):(0,Z.jsx)("svg",{children:(0,Z.jsx)("use",{href:"".concat(l,"#icon-auto")})}),(0,Z.jsx)(G,{children:(0,Z.jsx)("use",{href:"".concat(l,"#icon-heart")})})]}),(0,Z.jsxs)(B,{children:[(0,Z.jsxs)(O,{children:[(0,Z.jsxs)("p",{children:[t," ",(0,Z.jsx)(D,{children:s}),","," ",o]}),(0,Z.jsx)("p",{children:m})]}),(0,Z.jsxs)(V,{children:[(0,Z.jsx)(Y,{children:w.split(",").splice(1,1)}),(0,Z.jsx)(Y,{children:w.split(",").splice(2,1)}),(0,Z.jsx)(Y,{children:b})]}),(0,Z.jsxs)(V,{children:[(0,Z.jsx)(Y,{children:c}),(0,Z.jsx)(Y,{children:s}),(0,Z.jsx)(Y,{children:r}),(0,Z.jsx)(q,{children:g[0]})]})]})]}),(0,Z.jsx)(H,{onClick:()=>(d(r),void p()),children:"Learn More"}),e&&r===a&&(0,Z.jsx)(j,{onClick:p,children:(0,Z.jsx)(Tn,{id:r})})]},i())}))}),(0,Z.jsx)(N,{type:"button",onClick:()=>{c(s+1),console.log("page",s)},children:"Load more"})]})}}}]);
//# sourceMappingURL=308.3a9574ad.chunk.js.map