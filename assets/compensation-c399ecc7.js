import{a as t}from"./vendor-5dc834d7.js";import{G as n,a as r,C as l,b as c}from"./index-dbee9d50.js";function C(e){return console.log("payload::: ",e),async a=>{try{const s=(await t.post("/compensations",e)).data;return console.log("res::: ",s),localStorage.setItem("compensations",JSON.stringify(e,null,2)),a({type:l,payload:s})}catch(o){return a({type:c,payload:o.response.data})}}}function i(e){return console.log("payload::: ",e),async a=>{try{const s=(await t.get("/compensations")).data;return console.log("Response",s.message),a({type:n,payload:s})}catch(o){return console.log(o),a({type:r,payload:o.response.data})}}}export{C as c,i as g};
