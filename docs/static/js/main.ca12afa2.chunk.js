(this["webpackJsonpreact-clases"]=this["webpackJsonpreact-clases"]||[]).push([[0],{254:function(e,n,a){"use strict";a.r(n);var t,s,c,r,o,i=a(0),l=a.n(i),d=a(30),m=a.n(d),j=a(57),b=a(11),u=a(25),p=a(26),x=a(13),O=a(1),f=p.a.div(t||(t=Object(u.a)(["\n    .anticon svg{\n        display: flex;\n    }\n"]))),h=function(e){var n=e.name,a=e.type,t=e.estilo,s=e.icon,c=e.accion;switch(e.evento){case"onClick":case"onChange":default:return Object(O.jsx)(f,{children:Object(O.jsxs)("button",{type:a,className:"btn btn-".concat(t),onClick:c,children:[s,"\xa0",n]})})}},v=a(259),g=(a(50),a(260)),N=a(261),y=p.a.div(s||(s=Object(u.a)(["\n    .titulo{\n        text-align: center;\n    }\n    .titulo > p{\n        margin: 0;\n        font-family: fantasy;\n        font-size: 35px;\n    }\n\n    .boton{\n        display: flex;\n        justify-content: center;\n    }\n\n    .contenedor{\n        display: grid;\n        grid-template-columns: repeat(auto-fit, 30rem);\n        justify-content: center;\n        grid-gap: 10px;\n    }\n\n    @media screen and (max-width: 768px) and (orientation: portrait){\n        .contenedor{\n            grid-template-columns: repeat(auto-fit, 18rem);\n        }\n    }\n"]))),w=function(){var e=Object(b.f)(),n=function(){e.push("/")};return Object(O.jsxs)(y,{children:[Object(O.jsx)("div",{className:"titulo",children:Object(O.jsx)("p",{className:"text-info",children:"Formulario con Formik"})}),Object(O.jsx)("div",{className:"contenedorForm",children:Object(O.jsx)(x.d,{initialValues:{username:"",email:"",pais:"",direccion:""},validate:function(e){var n=e.username,a=e.email,t=e.pais,s=(e.genero,e.direccion),c={};return n?/^[a-zA-Z\xc0-\xff\s]{1,40}$/.test(n)||(c.username="El nombre solo puede contener letras y espacios"):c.username="Campo nombre es requerido",a?/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(a)||(c.email="Email ingresa es incorrecto"):c.email="Campo email es requerido",t||(c.pais="Campo pais es requerido"),s||(c.direccion="Campo direccion es requerido"),c},onSubmit:function(e,n){return function(e,n){console.log("formulario enviado",e),n()}(e,n.resetForm)},children:function(e){var a=e.errors;return Object(O.jsxs)(x.c,{children:[Object(O.jsxs)("div",{className:"contenedor",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:"Nombre de usuario"}),Object(O.jsx)(x.b,{type:"text",name:"username",className:"form-control"}),Object(O.jsx)(x.a,{name:"username",component:function(){return Object(O.jsx)("p",{className:"text-danger",children:a.username})}})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:"Correo"}),Object(O.jsx)(x.b,{type:"text",name:"email",className:"form-control"}),Object(O.jsx)(x.a,{name:"email",component:function(){return Object(O.jsx)("p",{className:"text-danger",children:a.email})}})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:"Pais"}),Object(O.jsxs)(x.b,{name:"pais",as:"select",className:"form-control",children:[Object(O.jsx)("option",{value:"El Salvador",children:"El Salvador"}),Object(O.jsx)("option",{value:"Estados Unidos",children:"Estados Unidos"}),Object(O.jsx)("option",{value:"Mexico",children:"Mexico"})]}),Object(O.jsx)(x.a,{name:"pais",component:function(){return Object(O.jsx)("p",{className:"text-danger",children:a.pais})}})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:"Direccion"}),Object(O.jsx)(x.b,{name:"direccion",as:"textarea",className:"form-control"}),Object(O.jsx)(x.a,{name:"direccion",component:function(){return Object(O.jsx)("p",{className:"text-danger",children:a.direccion})}})]})]}),Object(O.jsx)("div",{className:"boton mt-3",children:Object(O.jsxs)(v.b,{children:[Object(O.jsx)(h,{name:"Regresar",type:"button",estilo:"outline-warning",evento:"onClick",accion:n,icon:Object(O.jsx)(g.a,{})}),Object(O.jsx)(h,{name:"Enviar",type:"submit",estilo:"outline-info",icon:Object(O.jsx)(N.a,{})})]})})]})}})})]})},C=a(28),k=function(e){var n="";return/^(ftp|http|https):\/\/[^ "]+$/.test(e)||(n="la direccion de su sitio web es incorrecto"),n},q=p.a.div(c||(c=Object(u.a)(["\n    .contenedor{\n        display: grid;\n        grid-template-columns: repeat(auto-fit, 20rem);\n        grid-gap: 10px;\n        justify-content: center;\n    }\n\n    .boton{\n        display: flex;\n        justify-content: center;\n    }\n\n    .titulo{\n        text-align: center;\n    }\n    .titulo > p{\n        margin: 0;\n        font-family: fantasy;\n        font-size: 35px;\n    }\n"]))),F=function(){var e=Object(b.f)(),n=C.b().shape({nombres:C.d().required("Campo nombres es requido"),apellidos:C.d().required("Campo apellidos es requerido"),email:C.d().email("Correo ingresado no es valido").required("Campo email es requerido"),edad:C.a().required("Campo edad es requerido").integer("La edad debe de ser un numero entero").positive("La edad debe de tener un numero positivo"),sitioWeb:C.d(),password:C.d().min(4,"4 caracteres minimo").max(8,"8 caracteres maximo").required("Campo contrase\xf1a es requrido"),confirmarPassword:C.d().oneOf([C.c("password"),null],"Las contrase\xf1as no coinciden")}),a=function(){e.push("/")};return Object(O.jsxs)(q,{children:[Object(O.jsx)("div",{className:"titulo",children:Object(O.jsx)("p",{className:"text-info",children:"Formulario con Formik y Yup"})}),Object(O.jsx)("div",{className:"contenedorForm",children:Object(O.jsx)(x.d,{initialValues:{nombres:"",apellidos:"",email:"",edad:"",sitioWeb:"",password:"",confirmarPassword:""},validationSchema:n,onSubmit:function(e,n){return function(e,n){console.log(e),n()}(e,n.resetForm)},children:function(e){var n=e.errors,t=e.touched;return Object(O.jsxs)(x.c,{children:[Object(O.jsxs)("div",{className:"contenedor",children:[Object(O.jsxs)("div",{className:"nombres",children:[Object(O.jsx)("label",{children:"Nombres"}),Object(O.jsx)(x.b,{className:"form-control",name:"nombres",type:"text"}),n.nombres&&t.nombres&&Object(O.jsx)("p",{className:"text-danger",children:n.nombres})]}),Object(O.jsxs)("div",{className:"apellidos",children:[Object(O.jsx)("label",{children:"Apellidos"}),Object(O.jsx)(x.b,{className:"form-control",name:"apellidos",type:"text"}),n.apellidos&&t.apellidos&&Object(O.jsx)("p",{className:"text-danger",children:n.apellidos})]}),Object(O.jsxs)("div",{className:"email",children:[Object(O.jsx)("label",{children:"Eamil"}),Object(O.jsx)(x.b,{className:"form-control",name:"email",type:"text"}),n.email&&t.email&&Object(O.jsx)("p",{className:"text-danger",children:n.email})]}),Object(O.jsxs)("div",{className:"edad",children:[Object(O.jsx)("label",{children:"Edad"}),Object(O.jsx)(x.b,{className:"form-control",name:"edad",type:"number"}),n.edad&&t.edad&&Object(O.jsx)("p",{className:"text-danger",children:n.edad})]}),Object(O.jsxs)("div",{className:"sitioWeb",children:[Object(O.jsx)("label",{children:"Sitio web"}),Object(O.jsx)(x.b,{className:"form-control",name:"sitioWeb",type:"text",validate:k}),n.sitioWeb&&t.sitioWeb&&Object(O.jsx)("p",{className:"text-danger",children:n.sitioWeb})]}),Object(O.jsxs)("div",{className:"password",children:[Object(O.jsx)("label",{children:"Contrase\xf1a"}),Object(O.jsx)(x.b,{className:"form-control",name:"password",type:"password"}),n.password&&t.password&&Object(O.jsx)("p",{className:"text-danger",children:n.password})]}),Object(O.jsxs)("div",{className:"confirm",children:[Object(O.jsx)("label",{children:"Confirmar contrase\xf1a"}),Object(O.jsx)(x.b,{className:"form-control",name:"confirmarPassword",type:"password"}),n.confirmarPassword&&t.confirmarPassword&&Object(O.jsx)("p",{className:"text-danger",children:n.confirmarPassword})]})]}),Object(O.jsx)("div",{className:"boton mt-3",children:Object(O.jsxs)(v.b,{children:[Object(O.jsx)(h,{name:"Volver",type:"button",estilo:"warning",evento:"onClick",accion:a,icon:Object(O.jsx)(g.a,{})}),Object(O.jsx)(h,{name:"enviar",type:"Submit",estilo:"info",icon:Object(O.jsx)(N.a,{})})]})})]})}})})]})},E=a(3),S=a(256),z=a(262),P=p.a.div(r||(r=Object(u.a)(["\n    padding: 5px;\n    .titulo{\n        text-align: center;\n    }\n    .titulo > p{\n        margin: 0;\n        font-family: fantasy;\n        font-size: 35px;\n    }\n\n    .contenedorCard{\n        display: grid;\n        grid-template-columns: repeat(auto-fit,18rem);\n        grid-gap: 10px;\n        justify-content: center;\n    }\n"]))),W=function(){var e=Object(i.useState)([{name:"Formulario Formik",description:"Formik es una librer\xeda declarativa, intuitiva y adaptable desarrollada por Jared Palmer. Es muy f\xe1cil de utilizar y, gracias a su reducido peso (tan solo 12.7 kB), es perfecta para nuestras aplicaciones. Gracias a ella, al desarrollar nuestros formularios, conseguiremos:Obtener los valores dentro y fuera del State del formulario.Validaci\xf3n y mensajes de error. Controlar el env\xedo.",image:"https://miro.medium.com/max/1400/1*c1V37mc6XxLectWfolqwoA.png",ruta:"/formik"},{name:"Formulario Yup",description:"Yup es la librer\xeda perfecta para validar los campos de Formik, y es tanto as\xed que el equipo de Formik adora Yup que creo un accesorio o props especifico para Yup llamado validationSchema que transforma los errores en objetos y coincide con sus valores y funciones tocadas. Un esquema de Yup es un objeto inmutable responsable de validar un objeto.",image:"https://thumbs.dreamstime.com/b/print-145848581.jpg",ruta:"/yup"}]),n=Object(E.a)(e,2),a=n[0],t=(n[1],Object(b.f)());return Object(O.jsxs)(P,{children:[Object(O.jsx)("div",{className:"titulo",children:Object(O.jsx)("p",{className:"text-info",children:"Uso de formik"})}),Object(O.jsx)("div",{className:"contenedorCard",children:a&&a.map((function(e,n){return Object(O.jsxs)("div",{className:"card",children:[Object(O.jsx)(S.a,{src:e.image,className:"card-img-top",alt:"imagen"}),Object(O.jsxs)("div",{className:"card-body",children:[Object(O.jsx)("h5",{className:"card-title",children:e.name}),Object(O.jsx)("p",{className:"card-text",children:e.description})]}),Object(O.jsx)(h,{name:"Ver formulario",type:"button",estilo:"info btn-block",evento:"onClick",accion:function(){return n=e.ruta,void t.push(n);var n},icon:Object(O.jsx)(z.a,{})})]},n)}))})]})},A=a(258),V=a(263),Y=p.a.div(o||(o=Object(u.a)(["\n    background: #000000;\n    height: 100vh;\n    .ant-result-title{\n        color: #dc3545;\n        font-size: 75px;\n        font-weight: 700;\n    }\n\n    .ant-result-subtitle{\n        color: #dc3545;\n        font-size: 45px;\n        font-weight: 600; \n    }\n"]))),L=function(){var e=Object(b.f)();return Object(O.jsx)(Y,{children:Object(O.jsx)(A.a,{status:"404",title:"404",subTitle:"Oooops!, la pagina no se encuentra disponible.",extra:Object(O.jsx)(h,{name:"Regresar",type:"button",estilo:"danger",evento:"onClick",accion:function(){e.push("/")},icon:Object(O.jsx)(V.a,{})})})})};var U=function(){return Object(O.jsx)(j.a,{children:Object(O.jsxs)(b.c,{children:[Object(O.jsx)(b.a,{exact:!0,path:"/",component:W}),Object(O.jsx)(b.a,{exact:!0,path:"/formik",component:w}),Object(O.jsx)(b.a,{exact:!0,path:"/yup",component:F}),Object(O.jsx)(b.a,{component:L})]})})};m.a.render(Object(O.jsx)(l.a.StrictMode,{children:Object(O.jsx)(U,{})}),document.getElementById("root"))}},[[254,1,2]]]);
//# sourceMappingURL=main.ca12afa2.chunk.js.map