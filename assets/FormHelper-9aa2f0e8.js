import{p as a,q as e,s as r}from"./vendor-3430416b.js";const o={name:"",lastname:"",email:"",password:"",password_repeat:""},s=a({name:e().required("El campo nombre es obligatorio").min(1,"El nombre tiene que tener al menos un carácter").max(100,"El nombre no puede superar los 100 carácteres"),lastname:e().required("El campo nombre es obligatorio").min(1,"El nombre tiene que tener al menos un carácter").max(100,"El nombre no puede superar los 100 carácteres"),email:e().required("El email es obligatorio").email("El email no tiene un formato válido"),password:e().required("La contraseña es obligatoria").min(8,"La contraseña debe tener al menos 8 caracteres").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,"La contraseña debe tener al menos una letra mayúscula, una minúscula y un número"),password_repeat:e().required("La contraseña es obligatoria").min(8,"La contraseña debe tener al menos 8 caracteres").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,"La contraseña debe tener al menos una letra mayúscula, una minúscula y un número").oneOf([r("password"),null],"Las contraseñas no coinciden")});export{o as i,s as v};
