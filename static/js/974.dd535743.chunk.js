"use strict";(self.webpackChunkcars_app=self.webpackChunkcars_app||[]).push([[974],{238:(n,o,r)=>{r.d(o,{Z:()=>h});var e,t,i,l=r(168),s=r(87),c=r(256);const d=c.ZP.div(e||(e=(0,l.Z)(["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n\n  width: 100vw;\n\n  padding: 22px 0;\n\n  background-color: lightblue;\n\n  z-index: 100;\n"]))),a=c.ZP.ul(t||(t=(0,l.Z)(["\n  display: flex;\n  padding: 0 128px;\n  justify-content: space-around;\n"]))),p=(0,c.ZP)(s.OL)(i||(i=(0,l.Z)(["\n  padding: 10px 24px;\n\n  background-color: var(--color-button);\n  color: var(--color-text-button);\n\n  border: 1px solid var(--color-button);\n  border-radius: 12px;\n\n  cursor: pointer;\n\n  transition: border 2500ms var(--timing-function);\n\n  &:hover {\n    background-color: var(--color-button-hover);\n    border-color: var(--color-button-hover);\n  }\n\n  &.active {\n    background-color: var(--color-button-hover);\n  }\n"])));var x=r(184);const h=()=>(0,x.jsx)(d,{children:(0,x.jsxs)(a,{children:[(0,x.jsx)("li",{children:(0,x.jsx)(p,{to:"/",children:"Home"})}),(0,x.jsx)("li",{children:(0,x.jsx)(p,{to:"/catalog",children:"Catalog"})}),(0,x.jsx)("li",{children:(0,x.jsx)(p,{to:"/favorite",children:"Favorite"})})]})})},974:(n,o,r)=>{r.r(o),r.d(o,{default:()=>co});var e=r(791),t=r(434);const i=r.p+"static/media/sprite.8ec92338f9144dff5fece67209cc7505.svg";var l=r(164);const s=n=>{let{children:o}=n;const r=document.getElementById("modal-root");return r?(0,l.createPortal)(o,r):(console.error("Modal root element isn't found."),null)};var c,d,a,p,x=r(168),h=r(256);const u=h.ZP.div(c||(c=(0,x.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n\n  z-index: 200;\n\n  width: 100vw;\n  height: 100vh;\n\n  background-color: var(--color-text-info);\n"]))),f=h.ZP.div(d||(d=(0,x.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  padding: 40px;\n  width: 541px;\n\n  overflow: hidden;\n  z-index: 200;\n\n  background-color: var(--color-text-button);\n\n  border-radius: 24px;\n"]))),g=h.ZP.svg(a||(a=(0,x.Z)(["\n  position: absolute;\n  top: 16px;\n  right: 16px;\n\n  width: 24px;\n  height: 24px;\n  stroke: var(--color-text);\n\n  cursor: pointer;\n"])));h.ZP.div(p||(p=(0,x.Z)(["\n  margin: 0 auto;\n  text-align: center;\n"])));var v=r(184);const b=n=>{let{children:o,onClick:r}=n;const t=n=>{"Escape"===n.code&&r()};return(0,e.useEffect)((()=>(window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}))),(0,v.jsx)(s,{children:(0,v.jsx)(u,{onClick:n=>{n.currentTarget===n.target&&r()},children:(0,v.jsxs)(f,{children:[(0,v.jsx)(g,{onClick:()=>{r()},children:(0,v.jsx)("use",{href:"".concat(i,"#icon-x")})}),o]})})})},Z=n=>n.cars.cars,j=n=>n.filters.brand,w=n=>n.filters.price,m=n=>n.filters.mileage;var P,y,k,z,C,S,E,F,L,I,R,T,_,A,B=r(396);const M=h.ZP.ul(P||(P=(0,x.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  column-gap: 29px;\n  row-gap: 50px;\n"]))),U=h.ZP.li(y||(y=(0,x.Z)(["\n  width: 274px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 28px;\n"]))),Y=h.ZP.img(k||(k=(0,x.Z)(["\n  width: 100%;\n  height: 268px;\n\n  border-radius: 14px;\n\n  object-fit: cover;\n"]))),H=h.ZP.div(z||(z=(0,x.Z)([""]))),O=h.ZP.a(C||(C=(0,x.Z)(["\n  display: block;\n  width: 100%;\n\n  padding: 12px 99.5px;\n\n  text-align: center;\n  font-size: 14px;\n  line-height: 1.43;\n\n  background-color: var(--color-button);\n  color: var(--color-text-button);\n\n  border: 1px solid var(--color-button);\n  border-radius: 12px;\n\n  cursor: pointer;\n\n  transition: border 2500ms var(--timing-function);\n\n  &:hover {\n    background-color: var(--color-button-hover);\n    border-color: var(--color-button-hover);\n  }\n"]))),V=h.ZP.div(S||(S=(0,x.Z)(["\n  display: flex;\n  justify-content: space-between;\n\n  margin-bottom: 8px;\n\n  font-size: 16px;\n  line-height: 1.5;\n"]))),X=h.ZP.div(E||(E=(0,x.Z)(["\n  display: flex;\n  flex-wrap: nowrap;\n  gap: 6px;\n\n  font-size: 12px;\n  line-height: 1.5;\n  color: var(--color-text-info);\n"]))),$=h.ZP.p(F||(F=(0,x.Z)(['\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-overflow: nowrap;\n\n  &::after {\n    content: "";\n    margin-left: 6px;\n    border-right: 1px solid #1214171a;\n  }\n']))),q=h.ZP.p(L||(L=(0,x.Z)(["\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-overflow: nowrap;\n"]))),D=h.ZP.span(I||(I=(0,x.Z)(["\n  color: var(--color-button);\n"]))),G=h.ZP.svg(R||(R=(0,x.Z)(["\n  position: absolute;\n  top: 14px;\n  right: 14px;\n\n  width: 18px;\n  height: 18px;\n"]))),J=h.ZP.div(T||(T=(0,x.Z)(["\n  position: relative;\n"]))),K=h.ZP.div(_||(_=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n"]))),N=h.ZP.button(A||(A=(0,x.Z)(["\n  margin-top: 100px;\n\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.5;\n  color: var(--color-button);\n\n  text-decoration: underline;\n\n  background-color: transparent;\n  border: none;\n"])));let Q=function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce(((n,o)=>n+=(o&=63)<36?o.toString(36):o<62?(o-26).toString(36).toUpperCase():o>62?"-":"_"),"")};var W,nn,on,rn,en,tn,ln,sn,cn,dn,an,pn,xn,hn,un,fn,gn,vn,bn,Zn;const jn=h.ZP.div(W||(W=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n"]))),wn=h.ZP.img(nn||(nn=(0,x.Z)(["\n  width: 100%;\n  height: 248px;\n\n  border-radius: 14px;\n\n  object-fit: cover;\n"]))),mn=h.ZP.button(on||(on=(0,x.Z)(["\n  display: inline;\n  text-align: center;\n\n  width: 168px;\n  padding: 12px 50px;\n\n  background-color: var(--color-button);\n  color: var(--color-text-button);\n\n  border: 1px solid var(--color-button);\n  border-radius: 12px;\n\n  cursor: pointer;\n\n  transition: border 2500ms var(--timing-function);\n\n  &:hover {\n    background-color: var(--color-button-hover);\n    border-color: var(--color-button-hover);\n  }\n"]))),Pn=h.ZP.h2(rn||(rn=(0,x.Z)(["\n  margin-bottom: 8px;\n\n  font-size: 18px;\n  line-height: 1.5;\n"]))),yn=(0,h.ZP)(X)(en||(en=(0,x.Z)([""]))),kn=h.ZP.div(tn||(tn=(0,x.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  column-gap: 8px;\n  row-gap: 8px;\n"]))),zn=h.ZP.div(ln||(ln=(0,x.Z)(["\n  display: flex;\n  flex-wrap: nowrap;\n  gap: 6px;\n\n  font-size: 12px;\n  line-height: 1.5;\n  color: var(--color-text-info);\n"]))),Cn=h.ZP.h3(sn||(sn=(0,x.Z)(["\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.43;\n"]))),Sn=h.ZP.p(cn||(cn=(0,x.Z)(["\n  font-size: 14px;\n  line-height: 1.43;\n"]))),En=h.ZP.span(dn||(dn=(0,x.Z)(["\n  color: var(--color-button);\n  font-weight: 500;\n"]))),Fn=h.ZP.span(an||(an=(0,x.Z)(["\n  color: var(--color-button);\n  font-weight: 600;\n"]))),Ln=h.ZP.div(pn||(pn=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n"]))),In=h.ZP.div(xn||(xn=(0,x.Z)([""]))),Rn=h.ZP.div(hn||(hn=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n"]))),Tn=h.ZP.p(un||(un=(0,x.Z)(['\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-overflow: nowrap;\n\n  &:not(:last-child)::after {\n    content: "";\n    margin-left: 6px;\n    border-right: 1px solid #1214171a;\n    text-overflow: nowrap;\n  }\n']))),_n=h.ZP.p(fn||(fn=(0,x.Z)([""]))),An=h.ZP.div(gn||(gn=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n"]))),Bn=h.ZP.div(vn||(vn=(0,x.Z)(["\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  column-gap: 8px;\n  row-gap: 8px;\n\n  font-size: 12px;\n  line-height: 1.5;\n  color: var(--color-text);\n"]))),Mn=h.ZP.div(bn||(bn=(0,x.Z)(["\n  display: flex;\n  flex-wrap: nowrap;\n\n  padding: 7px 14px;\n  border-radius: 35px;\n  background-color: #f9f9f9;\n"]))),Un=h.ZP.div(Zn||(Zn=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"]))),Yn=n=>{let{id:o}=n;const r=(0,t.v9)(Z).find((n=>n.id===o)),{year:i,make:l,model:s,type:c,img:d,description:a,fuelConsumption:p,engineSize:x,accessories:h,functionalities:u,address:f,rentalConditions:g}=r;return(0,v.jsxs)(jn,{children:[(0,v.jsxs)(Rn,{children:[(0,v.jsx)(wn,{src:d,alt:a}),(0,v.jsxs)(In,{children:[(0,v.jsxs)(Pn,{children:[l," ",(0,v.jsx)(En,{children:s}),", ",i]}),(0,v.jsxs)(Ln,{children:[(0,v.jsxs)(yn,{children:[(0,v.jsx)(Tn,{children:f.split(",").splice(1,1)}),(0,v.jsx)(Tn,{children:f.split(",").splice(2,1)}),(0,v.jsxs)(Tn,{children:["Id: ",o]}),(0,v.jsxs)(Tn,{children:["Year: ",i]}),(0,v.jsxs)(_n,{children:["Type: ",c]})]}),(0,v.jsxs)(yn,{children:[(0,v.jsxs)(Tn,{children:["Fuel Consumption: ",p]}),(0,v.jsxs)(_n,{children:["Engine Size: ",x]})]})]})]}),(0,v.jsx)(Sn,{children:a})]}),(0,v.jsxs)(Un,{children:[(0,v.jsx)(Cn,{children:"Accessories and functionalities:"}),(0,v.jsxs)(An,{children:[(0,v.jsx)(zn,{children:h.map((n=>{const o=Q();return(0,v.jsx)(Tn,{children:n},o)}))}),(0,v.jsx)(yn,{children:u.map((n=>{const o=Q();return(0,v.jsx)(Tn,{children:n},o)}))})]})]}),(0,v.jsxs)(Un,{children:[(0,v.jsx)(Cn,{children:"Rental Conditions:"}),(0,v.jsx)(kn,{children:g.split("\n").map(((n,o)=>(0,v.jsx)(Bn,{children:(0,v.jsx)(Mn,{children:n.includes(":")?n.split(":").map(((n,o)=>(0,v.jsx)(e.Fragment,{children:0===o?(0,v.jsxs)(Bn,{children:[n,":\xa0"]}):(0,v.jsx)(Fn,{children:n})},o))):n})},o)))})]}),(0,v.jsx)(mn,{children:"Rental Car"})]})};var Hn,On,Vn,Xn,$n,qn,Dn,Gn,Jn,Kn=r(467);const Nn=h.ZP.button(Hn||(Hn=(0,x.Z)(["\n  display: inline;\n  text-align: center;\n\n  padding: 14px 44px;\n\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.43;\n\n  background-color: var(--color-button);\n  color: var(--color-text-button);\n\n  border: 1px solid var(--color-button);\n  border-radius: 12px;\n\n  cursor: pointer;\n\n  transition: border 2500ms var(--timing-function);\n\n  &:hover {\n    background-color: var(--color-button-hover);\n    border-color: var(--color-button-hover);\n  }\n"]))),Qn=h.ZP.label(On||(On=(0,x.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 18px;\n"]))),Wn=h.ZP.form(Vn||(Vn=(0,x.Z)(["\n  margin-bottom: 50px;\n"]))),no=h.ZP.p(Xn||(Xn=(0,x.Z)(["\n  position: absolute;\n  top: -8px;\n  left: 0px;\n  transform: translateY(-50%);\n  pointer-events: none;\n\n  color: #8a8a89;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.28;\n\n  white-space: nowrap;\n"]))),oo=h.ZP.select($n||($n=(0,x.Z)(["\n  width: 100%;\n  min-width: 224px;\n  padding: 14px 18px;\n  box-sizing: border-box;\n\n  border-radius: 14px;\n  background-color: #f7f7fb;\n  border: transparent;\n\n  &:focus {\n    outline: none;\n  }\n"]))),ro=h.ZP.select(qn||(qn=(0,x.Z)(["\n  width: 100%;\n  min-width: 125px;\n  padding: 14px 18px;\n  box-sizing: border-box;\n\n  border-radius: 14px;\n  background-color: #f7f7fb;\n  border: transparent;\n\n  &:focus {\n    outline: none;\n  }\n"]))),eo=h.ZP.div(Dn||(Dn=(0,x.Z)(["\n  position: relative;\n  display: inline-block;\n"]))),to=h.ZP.input(Gn||(Gn=(0,x.Z)(["\n  padding: 14px 24px;\n\n  border-top-left-radius: 14px;\n  border-bottom-left-radius: 14px;\n  border: transparent;\n  border-right: 1px solid rgba(138, 138, 137, 0.2);\n\n  background-color: #f7f7fb;\n\n  &:focus {\n    border-color: var(--color-button);\n  }\n"]))),io=h.ZP.input(Jn||(Jn=(0,x.Z)(["\n  padding: 14px 24px;\n\n  border-top-right-radius: 14px;\n  border-bottom-right-radius: 14px;\n  border: transparent;\n\n  background-color: #f7f7fb;\n  &:focus {\n    border-color: var(--color-button);\n  }\n"]))),lo=()=>{const n=(0,t.v9)(Z),o=(0,t.v9)(j),r=(0,t.v9)(w),e=(0,t.v9)(m);console.log("c",n[0]);const i=(0,t.I0)(),l=[...n.map((n=>{let{id:o,rentalPrice:r}=n;return{value:o,label:r}}))];return(0,v.jsx)(Wn,{children:(0,v.jsxs)(Qn,{children:[(0,v.jsxs)(eo,{children:[(0,v.jsx)(oo,{value:o||"",onChange:n=>{i((0,Kn.X7)(n))},children:(0,v.jsx)("option",{disabled:!0,value:"",children:"Select your brand"})}),(0,v.jsx)(no,{children:"Car Brand"})]}),(0,v.jsxs)(eo,{children:[(0,v.jsx)(ro,{value:r,placeholder:"To $",options:l}),(0,v.jsx)(no,{children:"Price/ 1 hour"})]}),(0,v.jsxs)(eo,{children:[(0,v.jsx)(to,{value:e,placeholder:"From"}),(0,v.jsx)(io,{placeholder:"To"}),(0,v.jsx)(no,{children:"\u0421ar mileage / km"})]}),(0,v.jsx)(Nn,{type:"submit",children:"Search"})]})})};var so=r(238);const co=()=>{const n=(0,t.v9)(Z),[o,r]=(0,e.useState)(!1),[l,s]=(0,e.useState)(1),[c,d]=(0,e.useState)(null),a=()=>{r((n=>!n))},p=(0,t.I0)();(0,e.useEffect)((()=>{p((0,B.Rn)())}),[p]),(0,e.useEffect)((()=>{p((0,B.do)(l))}),[p,l]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(so.Z,{}),(0,v.jsx)(lo,{}),(0,v.jsx)(M,{children:n.map((n=>{let{id:r,year:e,make:t,model:l,type:s,img:p,description:x,fuelConsumption:h,engineSize:u,accessories:f,functionalities:g,rentalPrice:Z,rentalCompany:j,address:w}=n;return(0,v.jsxs)(U,{children:[(0,v.jsxs)(K,{children:[(0,v.jsxs)(J,{children:[p?(0,v.jsx)(Y,{src:p,alt:x}):(0,v.jsx)("svg",{children:(0,v.jsx)("use",{href:"".concat(i,"#icon-auto")})}),(0,v.jsx)(G,{children:(0,v.jsx)("use",{href:"".concat(i,"#icon-heart")})})]}),(0,v.jsxs)(H,{children:[(0,v.jsxs)(V,{children:[(0,v.jsxs)("p",{children:[t," ",(0,v.jsx)(D,{children:l}),","," ",e]}),(0,v.jsx)("p",{children:Z})]}),(0,v.jsxs)(X,{children:[(0,v.jsx)($,{children:w.split(",").splice(1,1)}),(0,v.jsx)($,{children:w.split(",").splice(2,1)}),(0,v.jsx)($,{children:j})]}),(0,v.jsxs)(X,{children:[(0,v.jsx)($,{children:s}),(0,v.jsx)($,{children:l}),(0,v.jsx)($,{children:r}),(0,v.jsx)(q,{children:g[0]})]})]})]}),(0,v.jsx)(O,{onClick:()=>(d(r),void a()),children:"Learn More"}),o&&r===c&&(0,v.jsx)(b,{onClick:a,children:(0,v.jsx)(Yn,{id:r})})]},r)}))}),(0,v.jsx)(N,{type:"button",onClick:()=>{s(l+1),console.log("page",l)},children:"Load more"})]})}}}]);
//# sourceMappingURL=974.dd535743.chunk.js.map