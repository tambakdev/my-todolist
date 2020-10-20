(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(7),r=a.n(c),i=a(8),o=a(1),d=a(2),s=a(5),u=function(e){var t={id:null,description:"",created_at:"",due_date:""},a=Object(n.useState)(t),c=Object(o.a)(a,2),r=c[0],i=c[1],u=function(e){var t=e.target,a=t.name,n=t.value;i(Object(s.a)({},r,Object(d.a)({},a,n)))};return l.a.createElement("form",{onSubmit:function(a){a.preventDefault(),r.description&&r.due_date&&(e.addList(r),i(t))}},l.a.createElement("label",null,"Description"),l.a.createElement("textarea",{className:"input mb-5",placeholder:"Write your todo here",style:{minHeight:"70px"},name:"description",value:r.description,onChange:u}),l.a.createElement("label",null,"Due Date"),l.a.createElement("input",{className:"input",type:"date",name:"due_date",value:r.due_date,onChange:u}),l.a.createElement("button",{type:"button",className:"button is-danger mt-2",onClick:function(){e.closeModal(),i(t)}},"Cancel"),l.a.createElement("button",{className:"button is-info is-pulled-right mt-2"},"Save"))},m=function(e){var t=Object(n.useState)(e.currentList),a=Object(o.a)(t,2),c=a[0],r=a[1];Object(n.useEffect)((function(){r(e.currentList)}),[e]);var i=function(e){var t=e.target,a=t.name,n=t.value;r(Object(s.a)({},c,Object(d.a)({},a,n)))};return l.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.updateList(c.id,c)}},l.a.createElement("label",null,"Description"),l.a.createElement("textarea",{className:"input mb-5",placeholder:"Write your todo here",style:{minHeight:"70px"},name:"description",value:c.description,onChange:i}),l.a.createElement("label",null,"Due Date"),l.a.createElement("input",{className:"input",type:"date",name:"due_date",value:c.due_date,onChange:i}),l.a.createElement("button",{type:"button",className:"button is-danger mt-2"},"Cancel"),l.a.createElement("button",{className:"button is-info is-pulled-right mt-2"},"Update"))},E=function(e){return l.a.createElement("table",{className:"table is-fullwidth"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"#"),l.a.createElement("th",null,"Description"),l.a.createElement("th",null,"Created At"),l.a.createElement("th",null,"Due Date"),l.a.createElement("th",null))),l.a.createElement("tbody",null,e.lists.length>0?e.lists.map((function(t){return l.a.createElement("tr",{key:t.id},l.a.createElement("th",null,t.id),l.a.createElement("td",null,t.description),l.a.createElement("td",null,t.created_at),l.a.createElement("td",null,t.due_date),l.a.createElement("td",null,l.a.createElement("input",{name:t.id,onChange:function(){return e.checkedList(t.id)},type:"checkbox"}),l.a.createElement("button",{onClick:function(){e.editRow(t)},className:"button"},"Edit"),l.a.createElement("button",{onClick:function(){return e.deleteList(t.id)},className:"button"},"Delete")))})):l.a.createElement("tr",null,l.a.createElement("td",{colSpan:4,align:"center"},"No lists"))))},b=function(){var e=Object(n.useState)([{id:1,description:"Login",created_at:"2020-10-20",due_date:"2020-10-21"},{id:2,description:"Dashboard",created_at:"2020-10-20",due_date:"2020-10-21"}]),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)({id:null,description:"",created_at:"",due_date:""}),d=Object(o.a)(r,2),s=d[0],b=d[1],p=Object(n.useState)(!1),h=Object(o.a)(p,2),f=h[0],N=h[1],g=Object(n.useState)(),v=Object(o.a)(g,2),O=v[0],j=v[1],_=Object(n.useState)(),D=Object(o.a)(_,2),y=D[0],k=D[1];return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:O?"modal is-active":"modal"},l.a.createElement("div",{className:"modal-background"}),l.a.createElement("div",{className:"modal-card"},f?l.a.createElement(n.Fragment,null,l.a.createElement("header",{className:"modal-card-head"},l.a.createElement("p",{className:"modal-card-title"},"Edit Todo Item")),l.a.createElement("section",{className:"modal-card-body"},l.a.createElement(m,{editing:f,setEditing:N,currentList:s,updateList:function(e,t){N(!1),c(a.map((function(a){return a.id===e?t:a}))),j(!1)}}))):l.a.createElement(n.Fragment,null,l.a.createElement("header",{className:"modal-card-head"},l.a.createElement("p",{className:"modal-card-title"},"Add a New Todo Item")),l.a.createElement("section",{className:"modal-card-body"},l.a.createElement(u,{closeModal:function(){j(!1),console.log(O)},addList:function(e){e.id=a.length+1,e.created_at=(new Date).toISOString().slice(0,10),c([].concat(Object(i.a)(a),[e])),j(!1)}}))))),l.a.createElement("h1",{className:"is-size-1"},"Your Todo Lists"),l.a.createElement("div",{className:"flex-row"},l.a.createElement("div",{className:"mt-5"},l.a.createElement(E,{lists:a,editRow:function(e){N(!0),j(!0),b({id:e.id,description:e.description,created_at:e.created_at,due_date:e.due_date})},deleteList:function(e){N(!1),c(a.filter((function(t){return t.id!==e})))},checkedList:function(e){alert(e),k(!1),console.log(y)}})),l.a.createElement("div",{className:"columns mt-5"},l.a.createElement("div",{className:"column"},l.a.createElement("button",{className:"button is-info",onClick:function(){return j(!0)}},"ADD")),l.a.createElement("div",{className:"column"},l.a.createElement("button",{className:"button is-dark",disabled:!0},"EDIT")),l.a.createElement("div",{className:"column"},l.a.createElement("button",{className:"button is-danger is-pulled-right",disabled:!0},"DELETE")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(14);r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.0f21de5f.chunk.js.map