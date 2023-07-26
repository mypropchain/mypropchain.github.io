import{a as I,j as a,r as j,u as E,c as u,b as R}from"./vendor-5dc834d7.js";import{u as U}from"./users-e9791cf1.js";import{c as V}from"./compensation-4bc350ee.js";import{C as G,a as Y}from"./index-6028f560.js";import{a as p,E as h,F as _,b as J,S as m}from"./sweetalert2.all-a46bd305.js";import{c as B,Y as $,b as z}from"./index.esm-d4c6dd44.js";function H(i){return console.log("Create en actions",i),async s=>{try{let r=await I.post("/assets",i);const l=r.data;return console.log("Response",l),s({type:G,payload:r})}catch(r){return console.log(r),s({type:Y,payload:r.response.data})}}}const W=({label:i,...s})=>{const[r]=p(s);return a.jsx(a.Fragment,{children:a.jsxs("div",{className:"d-flex flex-column px-5",children:[a.jsx("div",{children:a.jsx("label",{className:"class-label",htmlFor:s.name||s.id,children:i})}),a.jsx("div",{children:a.jsx("input",{className:"form-control mb-3",style:{width:"30rem"},...r,...s})}),a.jsx(h,{name:s.name,component:"span",className:"error"})]})})},Z=({label:i,...s})=>{const[r]=p(s);return a.jsx(a.Fragment,{children:a.jsxs("div",{className:"d-flex flex-column px-5",children:[a.jsx("div",{children:a.jsx("label",{className:"class-label",htmlFor:s.name||s.id,children:i})}),a.jsx("div",{children:a.jsxs("select",{className:"form-control mb-3",style:{width:"30rem"},"aria-label":"Default select example",...r,...s,children:[a.jsx("option",{value:"",children:"--- Select ---"}),s.options.map(({desc:l,value:o})=>a.jsx("option",{value:o,children:l},o))]})}),a.jsx(h,{name:s.name,component:"span",className:"error"})]})})},K=i=>{const[s]=p(i);return a.jsxs("div",{className:"form-check mb-3",children:[a.jsx("input",{className:"form-check-input",type:"checkbox",...s,...i}),a.jsx("label",{className:"form-check-label",children:a.jsx("span",{children:i.label})}),a.jsx(h,{name:i.name,component:"span",className:"error"})]})},Q=({label:i,options:s,...r})=>{const[l]=p(r);return a.jsxs("div",{className:"radio-group mb-2 px-5",children:[a.jsx("label",{className:"class-label",children:i}),s.map(o=>a.jsxs("label",{children:[a.jsx("input",{...l,...r,type:"radio",checked:o.value===l.value,value:o.value}),o.desc]},o.value)),a.jsx(h,{name:r.name,component:"span",className:"error"})]})},X=({children:i,title:s})=>a.jsx("div",{className:"container",children:i}),t=JSON.parse(localStorage.getItem("profile"));function y(i){return i==null||i===""?i:i.charAt(0).toUpperCase()+i.slice(1)}var b,x,q,N,f,L,M,A,S;const v={login:[{type:"text",name:"name",label:"Nombre",placeholder:"Nombre",value:"",validations:[{type:"minLength",value:3,message:"Min. 3 characters"},{type:"required",message:"Nombre es requerido"}]},{type:"text",name:"lastName",label:"Apellido",placeholder:"Apellido",value:"",validations:[{type:"minLength",value:3,message:"Min. 3 characters"},{type:"required",message:"Apellido es requerido"}]},{type:"email",name:"email",label:"Email",placeholder:"E-mail",value:"",validations:[{type:"required",message:"Email is required"},{type:"isEmail",message:"Email no vaalido"}]},{type:"password",name:"password",label:"Contraseña",placeholder:"Contraseña",value:"",validations:[{type:"isPassword",value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,message:"Mínimo 8 caracteres, al menos una letra mayúscula, una letra minúscula y un número"},{type:"required",message:"Password es requerido"}]},{type:"password",name:"passwordRepit",label:"Contraseña",placeholder:"Contraseña",value:"",validations:[{type:"passwordRepit",message:"La contraseña no coincide"},{type:"required",message:"Escriba nuevamente la contraseña"}]},{type:"select",name:"rol",label:"Seleccione una opción: ",value:"",options:[{value:"admin",desc:"Admin"},{value:"user",desc:"User"},{value:"super-admin",desc:"Super Admin"}],validations:[{type:"required",message:"Rol is required"}]},{type:"radio-group",name:"gender",label:"Gender: ",value:"",options:[{value:"man",desc:"Man"},{value:"woman",desc:"Woman"},{value:"other",desc:"Other"}],validations:[{type:"required",message:"Gender is required"}]},{type:"checkbox",name:"terms",typeValue:"boolean",label:"Terms and Conditions",value:!1,validations:[{type:"isTrue",message:"Accept the terms!"}]}],profile:[{type:"text",name:"name",label:"Nombre",placeholder:"Nombre",value:y(t==null?void 0:t.name),validations:[{type:"minLength",value:3,message:"Min. 3 characters"},{type:"required",message:"Nombre es requerido"}]},{type:"text",name:"lastName",label:"Apellido",placeholder:"Apellido",value:y(t==null?void 0:t.lastname),validations:[{type:"minLength",value:3,message:"Min. 3 characters"},{type:"required",message:"Apellido es requerido"}]},{type:"number",name:"documentNumber",label:"Nro. de documento",placeholder:"Nro. de documento",value:((b=t==null?void 0:t.profile)==null?void 0:b.documentNumber)||"",validations:[{type:"minLength",value:3,message:"Min. 3 characters"},{type:"required",message:"Número de documento es requerido"}]},{type:"select",name:"documentType",label:"Tipo de cocumento: ",value:((x=t==null?void 0:t.profile)==null?void 0:x.documentType)||"",options:[{value:"cc",desc:"C.C."},{value:"ce",desc:"C.E."},{value:"passport",desc:"PASAPORTE"}],validations:[{type:"required",message:"Typo de documento es requerido"}]},{type:"date",name:"dob",label:"Fecha de nacimiento",placeholder:"fecha de nacimiento",value:((q=t==null?void 0:t.profile)==null?void 0:q.dob)||"",validations:[{type:"minLength",value:3,message:"Min. 3 characters"},{type:"required",message:"Fecha de nacimiento es requerida"}]},{type:"select",name:"gender",label:"Seleccione su sexo: ",value:((N=t==null?void 0:t.profile)==null?void 0:N.gender)||"",options:[{value:"male",desc:"Hombre"},{value:"female",desc:"Mujer"},{value:"other",desc:"Otro"},{value:"none",desc:"Prefiero no responder"}],validations:[{type:"required",message:"Es requerido"}]},{type:"txt",name:"phone",label:"Nro. de teléfono",placeholder:"Nro. de teléfono",value:((f=t==null?void 0:t.profile)==null?void 0:f.phone)||"",validations:[{type:"minLength",value:3,message:"Min. 3 characters"},{type:"required",message:"Teléfono es requerido"}]},{type:"email",name:"email",label:"Email",placeholder:"E-mail",value:t==null?void 0:t.email,validations:[{type:"required",message:"Email is required"},{type:"isEmail",message:"Email no vaalido"}]},{type:"text",name:"country",label:"País",placeholder:"País",value:((L=t==null?void 0:t.profile)==null?void 0:L.country)||"",validations:[{type:"minLength",value:3,message:"Min. 3 characters"},{type:"required",message:"País es requerido"}]},{type:"text",name:"state",label:"Estado/Departamento/Provincia",placeholder:"Estado/Departamento/Provincia",value:((M=t==null?void 0:t.profile)==null?void 0:M.state)||"",validations:[{type:"minLength",value:3,message:"Min. 3 characters"},{type:"required",message:"Estado es requerido"}]},{type:"text",name:"city",label:"Ciudad",placeholder:"Ciudad",value:((A=t==null?void 0:t.profile)==null?void 0:A.city)||"",validations:[{type:"minLength",value:3,message:"Min. 3 characters"},{type:"required",message:"Ciudad es requerida"}]},{type:"text",name:"address",label:"Dirección",placeholder:"Dirección",value:((S=t==null?void 0:t.profile)==null?void 0:S.address)||"",validations:[{type:"minLength",value:3,message:"Min. 3 characters"},{type:"required",message:"Apellido es requerido"}]}],fixedAssets:[{type:"text",name:"name",label:"Nombre",placeholder:"Nombre del activo",value:"",validations:[{type:"minLength",value:3,message:"Min. 3 characters"},{type:"required",message:"Nombre es requerido"}]},{type:"text",name:"chip",label:"Chip",placeholder:"Chip",value:"",validations:[{type:"minLength",value:3,message:"Min. 3 characters"},{type:"required",message:"Nombre es requerido"}]},{type:"text",name:"tag",label:"Matrícula inmobiliaria",placeholder:"Matrícula",value:"",validations:[{type:"minLength",value:3,message:"Min. 3 characters"},{type:"required",message:"Nombre es requerido"}]},{type:"text",name:"titleDeed",label:"Número de escritura",placeholder:"Número de escritura",value:"",validations:[{type:"minLength",value:3,message:"Min. 3 characters"},{type:"required",message:"Nombre es requerido"}]},{type:"text",name:"owner",label:"Propietario",placeholder:"Propietario",value:"",validations:[{type:"minLength",value:3,message:"Min. 3 characters"},{type:"required",message:"Nombre es requerido"}]},{type:"text",name:"address",label:"Dirección",placeholder:"Dirección",value:"",validations:[{type:"minLength",value:3,message:"Min. 3 characters"},{type:"required",message:"Nombre es requerido"}]},{type:"text",name:"city",label:"Ciudad",placeholder:"Ciudad",value:"",validations:[{type:"minLength",value:3,message:"Min. 3 characters"},{type:"required",message:"Nombre es requerido"}]},{type:"text",name:"state",label:"Estado / Departamento / Provincia",placeholder:"Estado",value:"",validations:[{type:"minLength",value:3,message:"Min. 3 characters"},{type:"required",message:"Nombre es requerido"}]},{type:"text",name:"specs",label:"Características",placeholder:"Características",value:"",validations:[{type:"minLength",value:3,message:"Min. 3 characters"},{type:"required",message:"Nombre es requerido"}]},{type:"text",name:"specs",label:"Características",placeholder:"Características",value:"",validations:[{type:"minLength",value:3,message:"Min. 3 characters"},{type:"required",message:"Nombre es requerido"}]},{type:"text",name:"manager",label:"Encargado",placeholder:"Encargado",value:"",validations:[{type:"minLength",value:3,message:"Min. 3 characters"},{type:"required",message:"Nombre es requerido"}]},{type:"text",name:"image",label:"Foto",placeholder:"Foto",value:"",validations:[{type:"minLength",value:3,message:"Min. 3 characters"},{type:"required",message:"Nombre es requerido"}]},{type:"text",name:"files",label:"Archivo",placeholder:"Archivo",value:"",validations:[{type:"minLength",value:3,message:"Min. 3 characters"},{type:"required",message:"Nombre es requerido"}]},{type:"text",name:"source",label:"Fuente",placeholder:"Fuente",value:"",validations:[{type:"minLength",value:3,message:"Min. 3 characters"},{type:"required",message:"Nombre es requerido"}]},{type:"radio-group",name:"isActive",label:"Está activo?: ",value:"true",options:[{value:"true",desc:"Activo"},{value:"false",desc:"Inactivo"}],validations:[{type:"required",message:"Gender is required"}]}],noFixedAsstes:[{type:"text",name:"name",label:"Nombre",placeholder:"Nombre vehículo",value:"",validations:[{type:"minLength",value:3,message:"Min. 3 characters"},{type:"required",message:"Nombre es requerido"}]},{type:"text",name:"type",label:"Tipo",placeholder:"Tipo",value:"",validations:[{type:"minLength",value:3,message:"Min. 3 characters"},{type:"required",message:"Nombre es requerido"}]},{type:"text",name:"licence",label:"Licencia",placeholder:"Licencia",value:"",validations:[{type:"minLength",value:3,message:"Min. 3 characters"},{type:"required",message:"Nombre es requerido"}]},{type:"text",name:"plate",label:"Placa",placeholder:"Placa",value:"",validations:[{type:"minLength",value:3,message:"Min. 3 characters"},{type:"required",message:"Nombre es requerido"}]},{type:"text",name:"brand",label:"Marca",placeholder:"Marca",value:"",validations:[{type:"minLength",value:3,message:"Min. 3 characters"},{type:"required",message:"Nombre es requerido"}]},{type:"text",name:"model",label:"Modelo",placeholder:"Modelo",value:"",validations:[{type:"minLength",value:3,message:"Min. 3 characters"},{type:"required",message:"Nombre es requerido"}]},{type:"text",name:"year",label:"Año",placeholder:"Año",value:"",validations:[{type:"minLength",value:3,message:"Min. 3 characters"},{type:"required",message:"Nombre es requerido"}]},{type:"text",name:"class",label:"Clase",placeholder:"Clase",value:"",validations:[{type:"minLength",value:3,message:"Min. 3 characters"},{type:"required",message:"Nombre es requerido"}]},{type:"text",name:"line",label:"Línea",placeholder:"Línea",value:""},{type:"text",name:"chassis",label:"Chasis",placeholder:"Chasis",value:"",validations:[{type:"minLength",value:3,message:"Min. 3 characters"},{type:"required",message:"Nombre es requerido"}]},{type:"text",name:"motor",label:"Motor",placeholder:"Motor",value:"",validations:[{type:"minLength",value:3,message:"Min. 3 characters"},{type:"required",message:"Nombre es requerido"}]},{type:"text",name:"Owner",label:"Propietario",placeholder:"Propietario",value:"",validations:[{type:"minLength",value:3,message:"Min. 3 characters"},{type:"required",message:"Nombre es requerido"}]},{type:"text",name:"manager",label:"Encargado",placeholder:"Encargado",value:""},{type:"text",name:"nit",label:"Nit",placeholder:"Nit",value:"",validations:[{type:"minLength",value:3,message:"Min. 3 characters"},{type:"required",message:"Nombre es requerido"}]},{type:"text",name:"mainLocation",label:"Ubicación Principal",placeholder:"Ubicación Principal",value:"",validations:[{type:"minLength",value:3,message:"Min. 3 characters"},{type:"required",message:"Nombre es requerido"}]},{type:"text",name:"secondaryLocation",label:"Ubicación Secundaria",placeholder:"Ubicación Secundaria",value:""},{type:"text",name:"image",label:"Foto",placeholder:"Foto",value:""},{type:"text",name:"files",label:"Archivo",placeholder:"Archivo",value:""},{type:"text",name:"source",label:"Fuente",placeholder:"Fuente",value:"",validations:[{type:"minLength",value:3,message:"Min. 3 characters"},{type:"required",message:"Nombre es requerido"}]},{type:"radio-group",name:"isActive",label:"Está activo?: ",value:"true",options:[{value:"true",desc:"Activo"},{value:"false",desc:"Inactivo"}],validations:[{type:"required",message:"Gender is required"}]}],compensation:[{type:"number",name:"compensation",label:"Compensación (toneladas)",placeholder:"Compensación",value:"",validations:[{type:"minLength",value:1,message:"Min. 3 characters"},{type:"required",message:"La compensación es requerida"}]},{type:"text",name:"activity",label:"Actividad",placeholder:"Actividad",value:"",validations:[{type:"minLength",value:3,message:"Min. 3 characters"},{type:"required",message:"La actividad es requerido"}]},{type:"file",name:"fileCompensation",label:"Archivo o certificado",placeholder:"Archivo o certificado",value:""}]},ee=i=>{let s=$[i.typeValue?i.typeValue:"string"]();for(const r of i.validations)switch(r.type){case"isTrue":s=s.isTrue(r.message);break;case"isEmail":s=s.email(r.message);break;case"minLength":s=s.min(r==null?void 0:r.value,r.message);break;case"isPassword":s=s.matches(r==null?void 0:r.value,r.message);break;case"passwordRepit":s=s.oneOf([z("password"),null],r.message);break;default:s=s.required(r.message);break}return s},ae=i=>{j.useState([]),E(),u(l=>l.userSlice.users),u(l=>l.auth.user),u(l=>l.userSlice.isLoading);let s={},r={};for(const l of v[i]){if(s[l.name]=l.value,!l.validations)continue;const o=ee(l);r[l.name]=o}return{validationSchema:B({...r}),initialValues:s,inputs:v[i]}},oe=i=>{var g;const{title:s,section:r}=i;u(e=>e.auth.user);const l=R(),o=E(),C=(g=JSON.parse(localStorage.getItem("user")))==null?void 0:g.user;j.useState([]);const{initialValues:w,inputs:F,validationSchema:T}=ae(r),P=e=>{console.log("<<<<<VALUES3>>>>>:",e);const c={_id:C._id,name:e.name||"",lastname:e.lastName||"",email:e.email||"",profile:{address:e.address||"",phone:e.phone||"",city:e.city||"",state:e.state||"",country:e.country||"",gender:e.gender||"",dob:e.dob||"",documentNumber:e.documentNumber||"",documentType:e.documentType||"",addressAux:e.addressAux||"",urlPhoto:e.urlPhoto||""}};localStorage.setItem("profile",JSON.stringify(c)),console.log("<<<<<PROFILE DATA>>>>>:",c),o(U(c)).then(d=>{const n=d.payload;n.status===200?m.fire(n.message).then(()=>{l("/user-dashboard")}):m.fire(n.message).then(()=>{})})},k=e=>{console.log("<<<<<VALUES3>>>>>:",e);const c={compensation:e.compensation||"",activity:e.activity||"",file:e.file||""};console.log("<<<<<compensacion DATA>>>>>:",c),o(V(c)).then(d=>{const n=d.payload;n.status===201?m.fire(n.message).then(()=>{console.log("res.message1::: ",n.message),l("/consult-compensations")}):m.fire(n.message).then(()=>{console.log("res.message2::: ",n)})})},D=e=>{console.log("<<<<<ASSETS>>>>>:",e);const c={name:e.name||"",assetType:"vehicle",isActive:!0,more:{type:e.type||"",brand:e.brand||"",model:e.model||"",year:e.year||"",color:e.color||"",plate:e.plate||"",class:e.class||"",line:e.line||"",motor:e.motor||"",chasis:e.chasis||"",owner:e.owner||"",nit:e.nit||"",manager:e.manager||"",mainLocation:e.mainLocation||"",secondaryLocation:e.secondaryLocation||"",source:e.source||"",images:e.images||"",files:e.files||""}};window.localStorage.setItem("asset",JSON.stringify(c)),JSON.parse(window.localStorage.getItem("asset")),o(H(c)).then(d=>{const n=d.payload;n.status===201?m.fire(n.message).then(()=>{l("/user-dashboard")}):m.fire(n.message).then(()=>{console.log("res.message2::: ",n)})}),c?m.fire(res.message).then(()=>{l("/user-dashboard")}):m.fire(res.message).then(()=>{})},O=e=>{switch(r){case"profile":console.log("SOY PROFILE"),P(e);break;case"assets":console.log("SOY ASSETS");break;case"compensation":k(e),console.log("SOY compensation");break;case"noFixedAsstes":D(e),console.log("SOY noFixedAsstes")}};return a.jsxs(X,{children:[a.jsx("div",{className:"text-center"}),a.jsx(_,{initialValues:w,validationSchema:T,onSubmit:e=>{O(e)},children:()=>a.jsxs(J,{noValidate:!0,className:"d-flex flex-wrap w-100 justify-content-center formContainer",style:{marginTop:20,marginBottom:20},children:[a.jsx("div",{className:"title w-100",children:s}),F.map(({name:e,type:c,value:d,...n})=>{switch(c){case"select":return a.jsx(Z,{label:n.label,name:e,options:n.options},e);case"radio-group":return a.jsx(Q,{label:n.label,name:e,options:n.options},e);case"checkbox":return a.jsx(K,{label:n.label,name:e},e);default:return a.jsx(W,{label:n.label,name:e,placeholder:n.placeholder,type:c},e)}}),a.jsx("div",{className:"text-center w-100",style:{marginTop:"4rem"},children:a.jsx("button",{className:"btn btn-success btnLanding w-25",type:"submit",children:"Guardar"})})]})})]})};export{oe as F};
