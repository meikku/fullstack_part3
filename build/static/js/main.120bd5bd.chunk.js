(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},36:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(13),c=t.n(o),u=t(2),i=function(e){var n=e.persons,t=e.deletePerson;return n.map((function(e){return r.a.createElement("p",{key:e.id},e.name," ",e.number,r.a.createElement("button",{onClick:function(){return t(e.id)}},"delete"))}))},l=function(e){return r.a.createElement("form",{onSubmit:e.addPerson},r.a.createElement("div",null,"name:",r.a.createElement("input",{value:e.newName,onChange:e.handleNameChange})),r.a.createElement("div",null,"number:",r.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},m=function(e){var n=e.notification;return null===n?null:r.a.createElement("div",{className:n.type},n.message)},d=function(e){return r.a.createElement("input",{value:e.value,onChange:e.onChange})},f=t(3),s=t.n(f),h="/api/persons",b=function(){return s.a.get(h).then((function(e){return e.data}))},p=function(e){return s.a.post(h,e).then((function(e){return e.data}))},v=function(e,n){return s.a.put("".concat(h,"/").concat(e),n).then((function(e){return e.data}))},E=function(e){return s.a.delete("".concat(h,"/").concat(e)).then((function(e){return e.data}))},g=function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],o=n[1],c=Object(a.useState)(""),f=Object(u.a)(c,2),s=f[0],h=f[1],g=Object(a.useState)(""),w=Object(u.a)(g,2),C=w[0],O=w[1],j=Object(a.useState)(""),N=Object(u.a)(j,2),k=N[0],y=N[1],S=Object(a.useState)(null),P=Object(u.a)(S,2),D=P[0],x=P[1];Object(a.useEffect)((function(){b().then((function(e){o(e)}))}),[]);var J=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";x({message:e,type:n}),setTimeout((function(){x(null)}),5e3)},L=0===k.length?t:t.filter((function(e){return e.name.toLowerCase().indexOf(k.toLowerCase())>0}));return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(m,{notification:D}),"filter shown with:",r.a.createElement(d,{value:k,onChange:function(e){y(e.target.value)}}),r.a.createElement("h3",null,"add a new"),r.a.createElement(l,{handleNameChange:function(e){h(e.target.value)},handleNumberChange:function(e){O(e.target.value)},newNumber:C,newName:s,addPerson:function(e){e.preventDefault();var n=t.find((function(e){return e.name===s}));n?window.confirm("".concat(n.name," already in phonebook, replace the old number with new one?"))&&v(n.id,{name:n.name,number:C}).then((function(e){o(t.map((function(t){return t.id!==n.id?t:e}))),J("Changed number of  ".concat(n.name)),h(""),O("")})):p({name:s,number:C}).then((function(e){o(t.concat(e)),J("Added ".concat(s)),h(""),O("")})).catch((function(e){console.log(e.response.data.error),J("".concat(e.response.data.error," "),"error")}))}}),r.a.createElement("h3",null,"Numbers"),r.a.createElement(i,{persons:L,deletePerson:function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name))&&E(e).then((function(a){o(t.filter((function(n){return n.id!==e}))),J("Deleted ".concat(n.name))})).catch((function(){o(t.filter((function(n){return n.id!==e}))),J("".concat(n.name," had already been removed"),"error")}))}}))};t(36);c.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.120bd5bd.chunk.js.map