(this["webpackJsonpmi-primera-web"]=this["webpackJsonpmi-primera-web"]||[]).push([[0],{14:function(e,n,t){},16:function(e,n,t){"use strict";t.r(n);var c=t(1),s=t(7),a=t.n(s),o=t(3),l=t(9),r=t(6),i=(t(14),t(8)),d=t(0);var b=function(){var e="all",n=Object(c.useState)(i),t=Object(r.a)(n,2),s=t[0],a=t[1],b=Object(c.useState)({name:"",openOnWeekdays:!1,openOnWeekend:!1}),j=Object(r.a)(b,2),O=j[0],u=j[1],p=function(e){e.preventDefault()},h=function(e){return console.log(s),s.filter((function(n){return void 0===e||"all"===e?n:"week"===e?!0===n.openOnWeekdays:"weekend"===e?!0===n.openOnWeekend:void 0})).map((function(e,n){return Object(d.jsxs)("li",{className:"li_container",children:[Object(d.jsxs)("h3",{children:["#",n," ",e.name,Object(d.jsx)("button",{onClick:p,className:"buttonX",children:"x"})]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"Abierto entre semana: "}),Object(d.jsx)("small",{children:e.openOnWeekdays?"Si":"No"})]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"Abierto el fin de semana: "}),Object(d.jsx)("small",{children:e.openOnWeekend?"Si":"No"})]})]},n)}))};return Object(d.jsxs)("div",{children:[Object(d.jsxs)("header",{children:[Object(d.jsx)("h2",{className:"title",children:"Mis clubs"}),Object(d.jsxs)("select",{onChange:function(n){return e=n.currentTarget.value,console.log(e),h(e),e},name:"show",id:"show",children:[Object(d.jsx)("option",{value:"all",children:"Todos"}),Object(d.jsx)("option",{value:"week",children:"Los que abren entre semana"}),Object(d.jsx)("option",{value:"weekend",children:"Los que abren el fin de semana"})]})]}),Object(d.jsxs)("main",{children:[Object(d.jsx)("section",{children:Object(d.jsx)("ul",{children:h()})}),Object(d.jsxs)("section",{children:[Object(d.jsx)("h2",{children:"A\xf1adir un nuevo club"}),Object(d.jsxs)("form",{action:"",children:[Object(d.jsxs)("label",{htmlFor:"name",children:["Nombre del club:",Object(d.jsx)("input",{type:"text",name:"name",id:"name",placeholder:"Nombre del club...",value:O.name,onChange:function(e){u(Object(o.a)(Object(o.a)({},O),{},{name:e.currentTarget.value}))}})]}),Object(d.jsxs)("label",{htmlFor:"weekOpen",children:["\xbfAbre entre semana?",Object(d.jsx)("input",{type:"checkbox",name:"weekOpen",id:"weekOpen",onChange:function(e){O.openOnWeekdays=!O.openOnWeekdays,u(Object(o.a)({},O))},checked:!!O.openOnWeekdays})]}),Object(d.jsxs)("label",{htmlFor:"weekOpen",children:["\xbfAbre el fin de semana?",Object(d.jsx)("input",{type:"checkbox",name:"weekendOpen",id:"weekendOpen",onChange:function(e){O.openOnWeekend=!O.openOnWeekend,u(Object(o.a)({},O))},checked:!!O.openOnWeekend})]}),Object(d.jsx)("button",{className:"submitBtn",onClick:function(e){e.preventDefault(),s.push(O),a(Object(l.a)(s))},children:"A\xf1adir un nuevo club"})]})]})]})]})};a.a.render(Object(d.jsx)(b,{}),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('[{"name":"Book club","openOnWeekdays":true,"openOnWeekend":true},{"name":"Chess club","openOnWeekdays":false,"openOnWeekend":true},{"name":"Escape room club","openOnWeekdays":false,"openOnWeekend":false},{"name":"Debate club","openOnWeekdays":true,"openOnWeekend":false}]')}},[[16,1,2]]]);
//# sourceMappingURL=main.c83be16f.chunk.js.map