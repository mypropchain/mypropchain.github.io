import{j as r}from"./vendor-3430416b.js";import{F as n}from"./FormikDynamic-6723aa02.js";import"./users-08008d4b.js";import"./index-2b6999c1.js";import"./compensation-5673c79f.js";function a(){var i;const e=(i=JSON.parse(localStorage.getItem("user")))==null?void 0:i.user,o="profile",s=`Perfil de: ${e==null?void 0:e.name} ${e==null?void 0:e.lastname}`;return e!=null?r.jsx("div",{children:r.jsx("div",{className:"",children:r.jsx(n,{title:s,section:o})})}):r.jsx("div",{children:r.jsx("div",{className:"",children:r.jsx("h3",{children:"...cargando"})})})}export{a as default};
