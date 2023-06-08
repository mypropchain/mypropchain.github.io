import{j as a}from"./vendor-ffd51fc4.js";import{a as n,E as r,F as c,b as m,i as d}from"./formik.esm-8cc3d487.js";import{c as u,Y as h,b}from"./index.esm-d4c6dd44.js";const v=({label:l,...e})=>{const[s]=n(e);return a.jsxs(a.Fragment,{children:[a.jsx("div",{children:a.jsx("label",{className:"class-label",htmlFor:e.name||e.id,children:l})}),a.jsx("div",{children:a.jsx("input",{className:"form-control mb-3",...s,...e})}),a.jsx(r,{name:e.name,component:"span",className:"error"})]})},x=({label:l,...e})=>{const[s]=n(e);return a.jsxs(a.Fragment,{children:[a.jsx("div",{children:a.jsx("label",{className:"class-label",htmlFor:e.name||e.id,children:l})}),a.jsx("div",{children:a.jsxs("select",{className:"form-select mb-3","aria-label":"Default select example",...s,...e,children:[a.jsx("option",{value:"",children:"--- Select ---"}),e.options.map(({desc:t,value:i})=>a.jsx("option",{value:i,children:t},i))]})}),a.jsx(r,{name:e.name,component:"span",className:"error"})]})},p=l=>{const[e]=n(l);return a.jsxs("div",{className:"form-check mb-3",children:[a.jsx("input",{className:"form-check-input",type:"checkbox",...e,...l}),a.jsx("label",{className:"form-check-label",children:a.jsx("span",{children:l.label})}),a.jsx(r,{name:l.name,component:"span",className:"error"})]})},g=({label:l,options:e,...s})=>{const[t]=n(s);return a.jsxs("div",{className:"radio-group mb-2",children:[a.jsx("label",{className:"class-label",children:l}),e.map(i=>a.jsxs("label",{children:[a.jsx("input",{...t,...s,type:"radio",checked:i.value===t.value,value:i.value}),i.desc]},i.value)),a.jsx(r,{name:s.name,component:"span",className:"error"})]})},j=({children:l,title:e})=>a.jsx("div",{className:"container",children:l}),o={login:[{type:"text",name:"name",label:"Nombre",placeholder:"Nombre",value:"",validations:[{type:"minLength",value:3,message:"Min. 3 characters"},{type:"required",message:"Nombre es requerido"}]},{type:"text",name:"lastName",label:"Apellido",placeholder:"Apellido",value:"",validations:[{type:"minLength",value:3,message:"Min. 3 characters"},{type:"required",message:"Apellido es requerido"}]},{type:"email",name:"email",label:"Email",placeholder:"E-mail",value:"",validations:[{type:"required",message:"Email is required"},{type:"isEmail",message:"Email no vaalido"}]},{type:"password",name:"password",label:"Contraseña",placeholder:"Contraseña",value:"",validations:[{type:"isPassword",value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,message:"Mínimo 8 caracteres, al menos una letra mayúscula, una letra minúscula y un número"},{type:"required",message:"Password es requerido"}]},{type:"password",name:"passwordRepit",label:"Contraseña",placeholder:"Contraseña",value:"",validations:[{type:"passwordRepit",message:"La contraseña no coincide"},{type:"required",message:"Escriba nuevamente la contraseña"}]},{type:"select",name:"rol",label:"Seleccione una opción: ",value:"",options:[{value:"admin",desc:"Admin"},{value:"user",desc:"User"},{value:"super-admin",desc:"Super Admin"}],validations:[{type:"required",message:"Rol is required"}]},{type:"radio-group",name:"gender",label:"Gender: ",value:"",options:[{value:"man",desc:"Man"},{value:"woman",desc:"Woman"},{value:"other",desc:"Other"}],validations:[{type:"required",message:"Gender is required"}]},{type:"checkbox",name:"terms",typeValue:"boolean",label:"Terms and Conditions",value:!1,validations:[{type:"isTrue",message:"Accept the terms!"}]}]},y=l=>{let e=h[l.typeValue?l.typeValue:"string"]();for(const s of l.validations)switch(s.type){case"isTrue":e=e.isTrue(s.message);break;case"isEmail":e=e.email(s.message);break;case"minLength":e=e.min(s==null?void 0:s.value,s.message);break;case"isPassword":e=e.matches(s==null?void 0:s.value,s.message);break;case"passwordRepit":e=e.oneOf([b("password"),null],s.message);break;default:e=e.required(s.message);break}return e},f=l=>{let e={},s={};for(const t of o[l]){if(e[t.name]=t.value,!t.validations)continue;const i=y(t);s[t.name]=i}return{validationSchema:u({...s}),initialValues:e,inputs:o[l]}},{initialValues:N,inputs:k,validationSchema:q}=f("login"),w=({title:l})=>a.jsx(j,{children:a.jsx(c,{initialValues:N,validationSchema:q,onSubmit:e=>{console.log(e)},children:()=>a.jsxs(m,{noValidate:!0,className:"grid alignItem register custom",style:{marginTop:30,marginBottom:30},children:[a.jsx("img",{src:d,className:"siteLogo",width:"306",height:"84",alt:"siteLogo"}),a.jsx("div",{className:"title",children:l}),k.map(({name:e,type:s,value:t,...i})=>{switch(s){case"select":return a.jsx(x,{label:i.label,name:e,options:i.options},e);case"radio-group":return a.jsx(g,{label:i.label,name:e,options:i.options},e);case"checkbox":return a.jsx(p,{label:i.label,name:e},e);default:return a.jsx(v,{label:i.label,name:e,placeholder:i.placeholder,type:s},e)}}),a.jsx("div",{className:"d-flex justify-content-center",children:a.jsx("button",{className:"btnForm",type:"submit",children:"Submit"})})]})})});function S(){const l="Formulario Dinamico";return a.jsx("div",{children:a.jsx("div",{className:"loginBody",children:a.jsx(w,{title:l})})})}export{S as default};
