import{c as r,j as s}from"./vendor-ffd51fc4.js";function n(){var t;const o=r(a=>a.auth.isLoggedIn),e=(t=JSON.parse(localStorage.getItem("user")))==null?void 0:t.user;return console.log("Usuario logeado",e),console.log("Login sttatus",o),s.jsx("div",{children:s.jsx("div",{className:"",children:s.jsx("div",{className:"row text-center pt-5",children:s.jsxs("h2",{children:["Dashboard de:"," ",s.jsx("span",{style:{fontStyle:"italic"},children:e==null?void 0:e.email})]})})})})}export{n as default};
