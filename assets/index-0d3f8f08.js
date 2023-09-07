import{a as L,u as D,b as k,c as R,r as j,d as W,S as Y,j as e,M as Q,N as C,C as X,O as v,e as I,L as x,f as m,T as ee,I as se,A as T,g as te,h as f,D as ne,i as y,k as oe,l as ae,m as re,n as ie,o as M,R as p,B as le,p as b,q as l,s as ce,t as de,v as ue,w as he,P as me}from"./vendor-9abfd91f.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}})();const pe="modulepreload",xe=function(s){return"/"+s},P={},E=function(t,o,n){if(!o||o.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(o.map(a=>{if(a=xe(a),a in P)return;P[a]=!0;const c=a.endsWith(".css"),_=c?'[rel="stylesheet"]':"";if(!!n)for(let d=r.length-1;d>=0;d--){const g=r[d];if(g.href===a&&(!c||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${_}`))return;const i=document.createElement("link");if(i.rel=c?"stylesheet":pe,c||(i.as="script",i.crossOrigin=""),i.href=a,document.head.appendChild(i),c)return new Promise((d,g)=>{i.addEventListener("load",d),i.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>t()).catch(a=>{const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a})},Ee="/assets/LogoHorizontal-ab16c970.png",ge="CREATE_PROFILE",z="REGISTER_SUCCESS",_e="REGISTER_FAIL",B="LOGIN_SUCCESS",fe="LOGIN_FAIL",V="LOGOUT_SUCCESS",Se="LOGOUT_FAIL",je="GET_ALL_USERS",Le="GET_ALL_USERS_FAIL",Ae="GET_USER",Ce="GET_USER_FAIL",Ie="CREATE_PROFILE",ye="CREATE_PROFILE_FAIL",ve="UPDATE_PROFILE",Te="UPDATE_PROFILE_FAIL",Oe="CREATE_COMPENSATION",Re="CREATE_COMPENSATION_FAIL",Ne="GET_COMPENSATION",be="GET_COMPENSATION_FAIL",Pe="GET_ALL_COMPENSATION",we="GET_ALL_COMPENSATION_FAIL",Ue="CREATE_ASSET",Fe="CREATE_ASSET_FAIL",Ge="GET_ASSET",De="GET_ASSET_FAIL",ke="GET_ALL_ASSET",Me="GET_ALL_ASSET_FAIL",ze="UPDATE_ASSET",Be="UPDATE_ASSET_FAIL";function Ts(s){return console.log("axios.defaults.baseURL",L.defaults.baseURL),console.log("Create en actions",s),async t=>{try{let o=await L.post("/users",s);const n=o.data;return console.log("Response",n),t({type:z,payload:o})}catch(o){return console.log("ERROR: ",o.response.data),t({type:_e,payload:o.response.data})}}}function Ve(s){return console.log("axios.defaults.baseURL",L.defaults.baseURL),async t=>{try{const n=(await L.post("/userlogin",s)).data;return n.data.token&&(localStorage.setItem("user",JSON.stringify(n.data)),localStorage.setItem("profile",JSON.stringify(n.data.user))),t({type:B,payload:n})}catch(o){return console.log(o),t({type:fe,payload:o.response.data})}}}function $e(s){return async t=>{try{return localStorage.removeItem("user"),t({type:V,payload:[]})}catch(o){return console.log(o),t({type:Se,payload:o})}}}const He=s=>{const t={},o=/(?=.*[0-9])/;return s.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(s.email)||(t.email="Correo electronico incorrecto"):t.email="Obligatorio",s.password?s.password.length<8?t.password="*Password must be 8 characters long.":o.test(s.password)||(t.password="La contraseña debe tener mínimo 1 número."):t.password="Obligatorio",t};function w(){const s=D();k();const t=R(d=>d.auth.isLoggedIn);j.useState(t);const[o,n]=j.useState(!1),[r,a]=j.useState(""),c=()=>{n(!0)},_=()=>{n(!1)},A=()=>{n(!1)},i=W({initialValues:{email:"",password:""},validate:He,onSubmit:({email:d,password:g})=>{s(Ve({email:d,password:g})).then(h=>{h.payload.status===200?a(h.payload.message):(a(h.payload.message),c())}).catch(h=>{Y.fire(h)})}});return e.jsx(e.Fragment,{children:e.jsx("div",{className:"",children:e.jsxs("div",{className:"",children:[e.jsx("div",{className:"grid alignItem",children:e.jsxs("div",{className:"register",style:{marginTop:30,marginBottom:30},children:[e.jsx("img",{src:Ee,className:"siteLogo",width:"306",height:"84",alt:"siteLogo"}),e.jsx("p",{children:"Inicia sesión a continuación con tu usuario y contraseña "}),e.jsxs("form",{className:"form ",style:{marginTop:"3rem"},onSubmit:i.handleSubmit,children:[e.jsx("label",{htmlFor:"email",children:"Usuario (email)"}),e.jsxs("div",{className:"formField",children:[e.jsx("input",{type:"text",name:"email",placeholder:"Usuario",onChange:i.handleChange,onBlur:i.handleBlur,value:i.values.email}),i.touched.email&&i.errors.email&&e.jsx("span",{style:{color:"red",display:"block"},children:i.errors.email})]}),e.jsx("label",{htmlFor:"password",children:"Contraseña"}),e.jsxs("div",{className:"formField",children:[e.jsx("input",{type:"password",name:"password",placeholder:"Contraseña",onChange:i.handleChange,onBlur:i.handleBlur,value:i.values.password}),i.touched.password&&i.errors.password&&e.jsx("span",{style:{color:"red",display:"block"},children:i.errors.password})]}),e.jsx("div",{className:"formField",style:{marginTop:"8rem"},children:e.jsx("input",{type:"submit",value:"INICIAR SESIÓN",className:"btn btn-success btnLanding"})})]}),e.jsxs("p",{children:["¿Aún no tienes cuenta? ",e.jsx("a",{href:"/register",children:"Regístrate"})]})]})}),e.jsx(Q,{title:"Basic Modal",open:o,onOk:_,onCancel:A,children:e.jsx("p",{children:r})})]})})})}const qe="/assets/Logo1-9d7283fd.png";function Je(){var N;const s=D(),t=k(),o=R(S=>S.auth),n=(N=JSON.parse(localStorage.getItem("user")))==null?void 0:N.user;let r;o.avatar!==""&&(r=o.avatar);const[a,c]=j.useState(null),_=!!a,A=S=>{c(S.currentTarget)},i=()=>{c(null)},d=o.isLoggedIn,g=n==null?void 0:n.role,h="lg",$=()=>{s($e()).then(S=>{console.log("Respuesta del logout: ",S),t("/")})},H=()=>{t("/login")},q=()=>{t("/register")},J=()=>{t("/user-dashboard")},Z=()=>{t("/")},K=()=>{t("/profile")};return e.jsx(e.Fragment,{children:e.jsx(C,{expand:h,className:"",bg:"dark","data-bs-theme":"dark",variant:"dark",sticky:"top",children:e.jsxs(X,{fluid:!0,children:[e.jsx(C.Brand,{href:"/",children:e.jsx("img",{src:qe,alt:"MyPropChain",width:"30",height:"30",className:"d-inline-block align-top"})}),e.jsx(C.Toggle,{"aria-controls":`offcanvasNavbar-expand-${h}`}),e.jsxs(C.Offcanvas,{id:`offcanvasNavbar-expand-${h}`,"aria-labelledby":`offcanvasNavbarLabel-expand-${h}`,placement:"end",children:[e.jsx(v.Header,{closeButton:!0,children:e.jsx(v.Title,{id:`offcanvasNavbarLabel-expand-${h}`,children:"MyPropChain"})}),e.jsxs(v.Body,{children:[e.jsxs(I,{className:"justify-content-start flex-grow-1 pe-3",children:[e.jsx(I.Link,{as:x,to:"/",children:"Home"}),e.jsx(I.Link,{as:x,to:"/register",children:"Register"}),d?e.jsxs(m,{title:"Mi Cuenta",id:`offcanvasNavbarDropdown-expand-${h}`,children:[e.jsx(m.Item,{as:x,to:"/user-dashboard",children:"Dashboard"}),e.jsx(m.Item,{as:x,to:"/user-dashboard",children:"Activos"}),e.jsx(m.Divider,{}),e.jsx(m.Item,{as:x,to:"/profile",children:"Perfil"}),d&&g==="admin"?e.jsx(m.Divider,{}):null,d&&g==="admin"?e.jsx(m.Item,{as:x,to:"/admin-dashboard",children:"Admin panel"}):null]}):null,d?e.jsxs(m,{title:"Activos",id:`offcanvasNavbarDropdown-expand-${h}`,children:[e.jsx(m.Item,{as:x,to:"/assets",children:"Crear Activo"}),e.jsx(m.Item,{as:x,to:"/assets",children:"Consultar Activo"})]}):null,d?e.jsxs(m,{title:"Compensaciones",id:`offcanvasNavbarDropdown-expand-${h}`,children:[e.jsx(m.Item,{as:x,to:"/compensations",children:"Crear Compensación"}),e.jsx(m.Item,{as:x,to:"/consult-compensations",children:"Consultar Compensaciones"})]}):null,d?e.jsxs(m,{title:"Managment",id:`offcanvasNavbarDropdown-expand-${h}`,children:[e.jsx(m.Item,{as:x,to:"gei-control",children:"Gestión de emisiones GEI"}),e.jsx(m.Item,{as:x,to:"/",children:"Modulo OKR"})]}):null]}),e.jsxs(I,{children:[e.jsx(ee,{title:"Account settings",children:e.jsx(se,{onClick:A,size:"small",sx:{ml:2},"aria-controls":_?"account-menu":void 0,"aria-haspopup":"true","aria-expanded":_?"true":void 0,children:e.jsx(T,{sx:{width:32,height:32},children:r})})}),e.jsxs(te,{anchorEl:a,id:"account-menu",open:_,onClose:i,onClick:i,PaperProps:{elevation:0,sx:{overflow:"visible",filter:"drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",mt:1.5,"& .MuiAvatar-root":{width:32,height:32,ml:-.5,mr:1},"&:before":{content:'""',display:"block",position:"absolute",top:0,right:14,width:10,height:10,bgcolor:"background.paper",transform:"translateY(-50%) rotate(45deg)",zIndex:0}}},transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"},children:[d?e.jsxs(f,{onClick:K,children:[e.jsx(T,{})," Perfil"]}):null,e.jsxs(f,{onClick:J,children:[e.jsx(T,{})," Mi Cuenta"]}),e.jsx(ne,{}),e.jsxs(f,{onClick:q,children:[e.jsx(y,{children:e.jsx(oe,{fontSize:"small"})}),"Agregar cuenta nueva"]}),e.jsxs(f,{onClick:Z,children:[e.jsx(y,{children:e.jsx(ae,{fontSize:"small"})}),"Configuración"]}),d?e.jsxs(f,{onClick:$,children:[e.jsx(y,{children:e.jsx(re,{fontSize:"small"})}),"Logout"]}):e.jsxs(f,{onClick:H,children:[e.jsx(y,{children:e.jsx(ie,{fontSize:"small"})}),"Login"]})]})]})]})]})]})},h)})}const Ze="/assets/LogoPart2-62813117.png",{Header:Os,Content:Ke,Footer:We}=M;function Ye({children:s}){const t={Height:"100vh",minWidth:"95%",overflow:"hidden",margin:"0"},o={textAlign:"center",height:"100vh",backgroundColor:"#fff",overflow:"auto"},n={backgroundColor:"#fff"};return e.jsx(e.Fragment,{children:e.jsxs(M,{style:{height:"100vh",overflow:"none"},children:[e.jsx(Je,{}),e.jsx(Ke,{style:o,children:e.jsx("div",{className:"d-flex justify-content-center",children:e.jsx("div",{style:t,children:s})})}),e.jsx(We,{style:n,children:e.jsxs("div",{className:"d-flex flex-row text-center align-items-center justify-content-center",children:[e.jsx("div",{className:"me-3",children:"MyPropChain"}),e.jsx("a",{href:"/",className:"",children:e.jsx("img",{src:Ze,alt:"",className:"",style:{width:30}})}),e.jsx("small",{className:"d-block ms-3 text-body-secondary",children:"© 2022–2023"})]})})]})})}function Qe(){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"d-flex flex-column justify-content-center align-items-center pt-5",children:[e.jsx("h1",{children:"404"}),e.jsx("h3",{children:"Oops! La página a la que intenta ingresar"}),e.jsx("h3",{children:"No existe o no tiene permiso de acceso."}),e.jsx("p",{children:"Aqui hay unos links que puede ayudarlo:"}),e.jsx(x,{to:"/",children:"Home"}),e.jsx(x,{to:"/contact",children:"Contact"})]})})}class Xe extends p.Component{constructor(t){super(t),this.state={tieneError:!1,mensajeError:""}}static getDerivedStateFromError(t){return{tieneError:!0,mensajeError:t.message}}componentDidCatch(t){console.log("Component did catch:",t.message)}render(){return this.state.tieneError?e.jsxs("div",{className:"px-4 py-2 m-4",children:[e.jsx("h1",{className:"mt-2 font-bold text-lg mb-1",children:"Hubo un error:"}),e.jsxs("p",{children:[" ",this.state.mensajeError," "]}),e.jsxs("button",{className:"px-4 py-2 rounded bg-blue-800 hover:bg-blue-700 active:outline text-sm",onClick:()=>window.location.href="/",children:["Recargar la página"," "]})]}):this.props.children}}const es=p.lazy(()=>E(()=>import("./Home-44eeedf7.js"),["assets/Home-44eeedf7.js","assets/vendor-9abfd91f.js","assets/Home-07c959c0.css"])),ss=p.lazy(()=>E(()=>import("./Landing-c5a6f98d.js"),["assets/Landing-c5a6f98d.js","assets/vendor-9abfd91f.js"])),U=p.lazy(()=>E(()=>import("./Register-3d10a64c.js"),["assets/Register-3d10a64c.js","assets/vendor-9abfd91f.js","assets/FormHelper-484b6e84.js","assets/index.esm-a37803b6.js"])),ts=p.lazy(()=>E(()=>import("./Profile-5b52d2b3.js"),["assets/Profile-5b52d2b3.js","assets/vendor-9abfd91f.js","assets/FormikDynamic-54f30901.js","assets/users-7e9b8868.js","assets/compensation-a06a3c43.js","assets/index.esm-a37803b6.js"])),ns=p.lazy(()=>E(()=>import("./About-aa3f7c23.js"),["assets/About-aa3f7c23.js","assets/vendor-9abfd91f.js"])),os=p.lazy(()=>E(()=>import("./Logout-147c3555.js"),["assets/Logout-147c3555.js","assets/vendor-9abfd91f.js"])),as=p.lazy(()=>E(()=>import("./Contact-6b442c11.js"),["assets/Contact-6b442c11.js","assets/vendor-9abfd91f.js"])),rs=p.lazy(()=>E(()=>import("./News-0f990199.js"),["assets/News-0f990199.js","assets/vendor-9abfd91f.js"])),is=p.lazy(()=>E(()=>import("./Assets-5b73ec2c.js"),["assets/Assets-5b73ec2c.js","assets/vendor-9abfd91f.js","assets/FormikDynamic-54f30901.js","assets/users-7e9b8868.js","assets/compensation-a06a3c43.js","assets/index.esm-a37803b6.js"])),ls=p.lazy(()=>E(()=>import("./Compensations-e6b2dc92.js"),["assets/Compensations-e6b2dc92.js","assets/vendor-9abfd91f.js","assets/FormikDynamic-54f30901.js","assets/users-7e9b8868.js","assets/compensation-a06a3c43.js","assets/index.esm-a37803b6.js","assets/FormHelper-484b6e84.js"])),cs=p.lazy(()=>E(()=>import("./ConsultCompensations-bacbca59.js"),["assets/ConsultCompensations-bacbca59.js","assets/vendor-9abfd91f.js","assets/Table-b6f33c79.js","assets/compensation-a06a3c43.js"])),ds=p.lazy(()=>E(()=>import("./GeiControl-94ec5d3d.js"),["assets/GeiControl-94ec5d3d.js","assets/vendor-9abfd91f.js"])),us=p.lazy(()=>E(()=>import("./index-0d53a539.js"),["assets/index-0d53a539.js","assets/vendor-9abfd91f.js","assets/users-7e9b8868.js"])),O=p.lazy(()=>E(()=>import("./index-46bf9e8e.js"),["assets/index-46bf9e8e.js","assets/vendor-9abfd91f.js","assets/Table-b6f33c79.js"]));function hs(){var o;const s=R(n=>n.auth.isLoggedIn),t=(o=JSON.parse(localStorage.getItem("user")))==null?void 0:o.user;return console.log("<<<<LOGGED desde APP>>>>",s),e.jsx("div",{className:"App",children:e.jsx(j.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(le,{children:e.jsx(Xe,{children:s?e.jsx(Ye,{children:e.jsxs(b,{children:[e.jsx(l,{path:"/",element:e.jsx(O,{})}),",",e.jsx(l,{index:!0,element:e.jsx(O,{})}),",",e.jsx(l,{path:"*",element:e.jsx(Qe,{})}),e.jsx(l,{path:"/register",element:e.jsx(U,{})}),e.jsx(l,{path:"/home",element:e.jsx(es,{})}),e.jsx(l,{path:"/about",element:e.jsx(ns,{})}),e.jsx(l,{path:"/news",element:e.jsx(rs,{})}),e.jsx(l,{path:"/contact",elemamt:e.jsx(as,{})}),e.jsx(l,{path:"/logout",element:e.jsx(os,{})}),e.jsx(l,{path:"/landing",element:e.jsx(ss,{})}),",",e.jsx(l,{path:"/profile",element:e.jsx(ts,{})}),",",e.jsx(l,{path:"/assets",element:e.jsx(is,{})}),",",e.jsx(l,{path:"/compensations",element:e.jsx(ls,{})}),",",e.jsx(l,{path:"/consult-compensations",element:e.jsx(cs,{})}),",",e.jsx(l,{path:"/gei-control",element:e.jsx(ds,{})}),",",e.jsx(l,{path:"/user-dashboard",element:e.jsx(O,{})}),",",(t==null?void 0:t.role)==="admin"?e.jsx(l,{path:"/admin-dashboard",element:e.jsx(us,{})}):null]})}):e.jsxs(b,{children:[e.jsx(l,{path:"/",element:e.jsx(w,{})}),e.jsx(l,{path:"/login",element:e.jsx(w,{})}),e.jsx(l,{path:"/register",element:e.jsx(U,{})})]})})})})})}const u=JSON.parse(localStorage.getItem("user"));var F,G;const ms=u?{isLoggedIn:!0,user:u,avatar:(G=u==null?void 0:u.user)==null?void 0:G.name.charAt(0).toUpperCase().concat((F=u==null?void 0:u.user)==null?void 0:F.lastname.charAt(0).toUpperCase())}:{isLoggedIn:!1,user:null,avatar:""};function ps(s=ms,t){var r,a;const{type:o,payload:n}=t;switch(t.type){case z:return{...s,isLoggedIn:!1,user:n.data.data,avatar:""};case B:return console.log("<<<<REDUCER LOGIN_SUCCESS>>>>",u==null?void 0:u.user),{...s,isLoggedIn:!0,user:n,avatar:(a=u==null?void 0:u.user)==null?void 0:a.name.charAt(0).toUpperCase().concat((r=u==null?void 0:u.user)==null?void 0:r.lastname.charAt(0).toUpperCase())};case ge:return{...s,user:n};case V:return{...s,isLoggedIn:!1,user:null,avatar:""};default:return s}}const xs={userProfile:[],users:[],isLoading:!0};function Es(s=xs,t){const{type:o,payload:n}=t;switch(t.type){case Ie:return{...s,userProfile:n.data.data};case ye:return{...s,userProfile:n};case ve:return console.log("Update profile success",n),{...s,userProfile:n};case Te:return{...s,userProfile:n};case je:return{...s,isLoading:!1,users:n};case Le:return{...s,users:n};default:return s}}const gs={user:[],isLoading:!0};function _s(s=gs,t){const{type:o,payload:n}=t;switch(t.type){case Ae:return{...s,isLoading:!1,user:n};case Ce:return{...s,user:n};default:return s}}const fs={compensation:[]};function Ss(s=fs,t){const{type:o,payload:n}=t;switch(t.type){case Ne:return{...s,isLoading:!1,compensation:n};case be:return{...s,compensation:n};case Pe:return{...s,isLoading:!1,compensation:n};case we:return{...s,compensation:n};case Oe:return{...s,isLoading:!1,compensation:n};case Re:return{...s,compensation:n};default:return s}}const js={assets:[]};function Ls(s=js,t){const{type:o,payload:n}=t;switch(o){case ke:return{...s,assets:n};case Me:return{...s,assets:[]};case Ge:return{...s,assets:n};case De:return{...s,assets:[]};case Ue:return{...s,assets:n};case Fe:return{...s,assets:[]};case ze:return{...s,assets:n};case Be:return{...s,assets:[]};default:return s}}const As=ce({name:"userSlice",initialState:{users:[],user:[],isLoading:!1},reducers:{startLoading:s=>{s.isLoading=!0},setUsers:(s,t)=>{s.isLoading=!1,s.users=t.payload}}}),Cs=de({reducer:{auth:ps,users:Es,user:_s,compensation:Ss,assets:Ls,userSlice:As.reducer},middleware:s=>s().concat(ue)});const Is="https://myprop.joselimardo.com";L.defaults.baseURL=Is;const ys=he.createRoot(document.getElementById("root"));ys.render(e.jsx(me,{store:Cs,children:e.jsx(p.StrictMode,{children:e.jsx(hs,{})})}));export{Ue as C,Pe as G,ve as U,Fe as a,be as b,Ts as c,Oe as d,Re as e,je as f,Le as g,Te as h,Ee as i,Ze as l};
