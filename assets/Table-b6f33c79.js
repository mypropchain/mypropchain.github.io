import{r as n,j as t,U as R,V as z,W as B}from"./vendor-9abfd91f.js";function U(c){const{header:h,content:p,fields:x,actions:m,onData:k,onDelete:S,onUpdate:N,title:V,total:u,items:b}=c,[o,C]=n.useState([]),[D,A]=n.useState(1),[g]=n.useState(b),[a,E]=n.useState(null),[y,j]=n.useState("asc"),[T,F]=n.useState(!0);console.log("TOTAL",u),n.useEffect(()=>{c.content&&(C(c.content),F(!1))},[c.content]),console.log("DATABASE",o);const L=e=>{e===a?j(y==="asc"?"desc":"asc"):(E(e),j("asc"))};let i=[...o];console.log("sortData",i),a&&(i=i.sort((e,s)=>{const l=e[a],d=s[a];return y==="asc"?l.localeCompare(d):d.localeCompare(l)}));const f=D*g,O=f-g,r=i.slice(O,f);console.log("currentItems",r);const P=e=>{console.log("ID",e),S(e)},v=e=>{console.log("ID",e),N(e)},I=(e,s)=>{console.log("onCheck",e,s),o[e].check=!o[e].check,k(p)};return console.log("data#### ",o),t.jsx(t.Fragment,{children:T?t.jsx("div",{className:"d-flex justify-content-center align-items-center",style:{height:300},children:t.jsx("div",{className:"spinner-border text-primary",role:"status",children:t.jsx("span",{className:"sr-only",children:"Loading..."})})}):t.jsxs(t.Fragment,{children:[t.jsxs("table",{children:[t.jsx("thead",{style:{borderTop:"1px solid",borderBottom:"1px solid",background:"#fff",color:"#fff",position:"sticky",top:0,height:25},children:t.jsxs("tr",{children:[t.jsx("th",{className:"",style:{marginLeft:10,width:100},children:"Select"}),h==null?void 0:h.map((e,s)=>t.jsxs("th",{onClick:l=>L(e.key),style:{cursor:"pointer"},children:[e.label," "]},s)),m&&t.jsx("th",{className:"",style:{paddingRight:20},children:"Acciones"})]})}),t.jsx("tbody",{children:r==null?void 0:r.map((e,s)=>t.jsxs("tr",{className:"",style:{borderTop:"1px solid",borderBottom:"1px solid",lineHeight:"2em"},children:[t.jsx("td",{className:"",style:{textAlign:"left"},children:t.jsx("div",{className:"d-flex align-items-center justify-content-center mt-2",children:t.jsx("input",{type:"checkbox",className:"",id:e.key,name:e.key,value:e.key,onChange:()=>I(s,e.key)})})},e.key),x==null?void 0:x.map((l,d)=>t.jsx("td",{style:{width:300,height:50,textAlign:"left"},children:e[`${l}`]?e[`${l}`]:"N/A"},d+1)),m&&t.jsx("td",{className:"",style:{textAlign:"ceter"},children:t.jsxs("div",{className:"actionStyle",children:[t.jsx(R,{style:{fontSize:20,color:"#008000",marginRight:10},onClick:()=>v(e.key)}),t.jsx(z,{style:{fontSize:20,color:"#FF0000",marginRight:10},onClick:()=>P(e.key)})]})})]},e.key))})]}),o.length>0&&t.jsx("div",{className:"pt-3",children:t.jsx(B,{pageSize:g,total:u,onChange:e=>{A(e)}})})]})})}export{U as T};
