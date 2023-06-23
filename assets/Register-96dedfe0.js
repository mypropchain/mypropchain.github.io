import{u as v,r as c,b,j as e}from"./vendor-5dc834d7.js";import{i as y}from"./LogoHorizontal-222b80f9.js";import{u as f,S as m}from"./sweetalert2.all-a46bd305.js";import{c as N}from"./index-dbee9d50.js";import{i as w,v as C}from"./FormHelper-26c37e11.js";import"./index.esm-d4c6dd44.js";function z(){const p=v(),[a,r]=c.useState(!1),h=b(),[u,x]=c.useState({name:"",lastname:"",email:"",password:"",role:"user",isActive:!0}),s=f({initialValues:w,validationSchema:C,onSubmit:({name:n,lastname:i,email:o,password:t},{resetForm:j,setSubmitting:g})=>{x({name:n,lastname:i,email:o,password:t,role:"user",isActive:!0}),console.log("values",u),p(N({name:n,lastname:i,email:o,password:t,role:"user",isActive:!0})).then(d=>{console.log("values",d.payload);const l=d.payload;l.status===201?m.fire(l.data.message).then(()=>{h("/login"),g(!1),j()}):m.fire(l.message).then(()=>{})})}});return e.jsx(e.Fragment,{children:e.jsx("div",{className:"loginBody",children:e.jsx("div",{className:"container-fluid",children:e.jsx("div",{className:"grid alignItem",children:e.jsxs("div",{className:"register",style:{marginTop:30,marginBottom:30},children:[e.jsx("img",{src:y,className:"siteLogo",width:"306",height:"84",alt:"siteLogo"}),e.jsx("p",{children:"Regístrate gratis para empezar"}),e.jsxs("form",{className:"form",onSubmit:s.handleSubmit,children:[e.jsx("label",{htmlFor:"name",children:"Nombre"}),e.jsx("div",{className:"formField",children:e.jsx("input",{type:"text",name:"name",placeholder:"Nombre",onChange:s.handleChange,onBlur:s.handleBlur,value:s.values.name})}),s.touched.name&&s.errors.name?e.jsx("span",{style:{color:"red",display:"block"},children:s.errors.name}):null,e.jsx("label",{htmlFor:"lastname",children:"Apellido"}),e.jsx("div",{className:"formField",children:e.jsx("input",{type:"text",name:"lastname",placeholder:"Lastname",onChange:s.handleChange,onBlur:s.handleBlur,value:s.values.lastname})}),s.touched.lastname&&s.errors.lastname?e.jsx("span",{style:{color:"red",display:"block"},children:s.errors.lastname}):null,e.jsx("label",{htmlFor:"email",children:"Correo electrónico"}),e.jsx("div",{className:"formField",children:e.jsx("input",{type:"email",name:"email",placeholder:"Correo electrónico",onChange:s.handleChange,onBlur:s.handleBlur,value:s.values.email})}),s.touched.email&&s.errors.email?e.jsx("span",{style:{color:"red",display:"block"},children:s.errors.email}):null,e.jsx("label",{htmlFor:"password",children:"Contraseña"}),e.jsx("div",{className:"formField",children:e.jsxs("div",{className:"inputWrapper",children:[e.jsx("input",{className:"inputRegister password",type:a?"text":"password",name:"password",placeholder:"Contraseña",onChange:s.handleChange,onBlur:s.handleBlur,value:s.values.password}),e.jsx("span",{className:"inputIcon password",onClick:()=>r(!a),children:a?e.jsx("i",{className:"bi bi-eye",style:{fontSize:"1.5rem"}}):e.jsx("i",{className:"bi bi-eye-slash ",style:{fontSize:"1.5rem"}})})]})}),s.touched.password&&s.errors.password?e.jsx("span",{style:{color:"red",display:"block"},children:s.errors.password}):null,e.jsx("label",{htmlFor:"password_repeat",children:"Repite tu contraseña"}),e.jsx("div",{className:"formField",children:e.jsxs("div",{className:"inputWrapper",children:[e.jsx("input",{type:a?"text":"password",name:"password_repeat",placeholder:"Repite tu contraseña",value:s.values.password_repeat,onChange:s.handleChange,onBlur:s.handleBlur,className:"inputRegister password"}),e.jsx("span",{className:"inputIcon password",onClick:()=>r(!a),children:a?e.jsx("i",{className:"bi bi-eye",style:{fontSize:"1.5rem"}}):e.jsx("i",{className:"bi bi-eye-slash",style:{fontSize:"1.5rem"}})})]})}),s.touched.password_repeat&&s.errors.password_repeat?e.jsx("span",{style:{color:"red",display:"block"},children:s.errors.password_repeat}):null,e.jsx("div",{className:"formField",children:e.jsx("input",{type:"submit",value:"ENVIAR",className:"btn btn-success btnLanding"})})]}),e.jsxs("p",{children:["¿Ya tienes una cuenta? ",e.jsx("a",{href:"/login",children:"Inicia sesión"})]})]})})})})})}export{z as default};
