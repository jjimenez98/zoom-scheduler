(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(9),s=n.n(r),o=(n(15),n(6)),i=n(10),l=n(3),j=n.n(l),u=n(4),b=n(2),d=(n.p,n(17),n(0)),m=function(e){return Object(d.jsx)("h1",{className:"header-app",children:e.header})},p=function(e){var t=Object(c.useState)(!1),n=Object(b.a)(t,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){r(e.task.important)})),Object(d.jsx)("div",{children:a?Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"task-item-important",onDoubleClick:function(){return e.onUpdate(e.task.id)},children:[Object(d.jsxs)("div",{className:"task-title",children:[Object(d.jsx)("h3",{style:{marginBottom:"0",marginTop:"0"},children:e.task.title}),Object(d.jsx)("div",{style:{color:"red",cursor:"pointer"},onClick:function(){return e.onDelete(e.task.id)},className:"task-delete",children:"Delete"})]}),Object(d.jsx)("p",{style:{marginBottom:"0",marginTop:"0"},children:e.task.day}),Object(d.jsx)("p",{style:{marginBottom:"0",marginTop:"0"},children:e.task.time}),Object(d.jsx)("a",{href:e.task.zoom,children:e.task.zoom})]})}):Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"task-item",onDoubleClick:function(){return e.onUpdate(e.task.id)},children:[Object(d.jsxs)("div",{className:"task-title",children:[Object(d.jsx)("h3",{style:{marginBottom:"0",marginTop:"0"},children:e.task.title}),Object(d.jsx)("div",{style:{color:"red",cursor:"pointer"},onClick:function(){return e.onDelete(e.task.id)},className:"task-delete",children:"Delete"})]}),Object(d.jsx)("p",{style:{marginBottom:"0",marginTop:"0"},children:e.task.day}),Object(d.jsx)("p",{style:{marginBottom:"0",marginTop:"0"},children:e.task.time}),Object(d.jsx)("a",{href:e.task.zoom,children:e.task.zoom})]})})})},O=function(e){var t=Object(c.useState)([]),n=Object(b.a)(t,2),a=(n[0],n[1]);return Object(c.useEffect)((function(){0===e.tasks.length&&a("")})),Object(d.jsx)("div",{children:e.tasks.map((function(t){return Object(d.jsx)(p,{task:t,onDelete:e.onDelete,onUpdate:e.onUpdate},t.id)}))})},h=function(e){var t=Object(c.useState)(""),n=Object(b.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(""),o=Object(b.a)(s,2),i=o[0],l=o[1],j=Object(c.useState)(!1),u=Object(b.a)(j,2),m=u[0],p=u[1],O=Object(c.useState)(""),h=Object(b.a)(O,2),f=h[0],x=h[1],y=Object(c.useState)(""),v=Object(b.a)(y,2),g=v[0],k=v[1];return Object(d.jsxs)("form",{className:"add-form",onSubmit:function(t){t.preventDefault();var n=function(e){var t=(new Date).setHours(0,0,0,0);return e=e.split("/"),t-(e=new Date(e[0],e[1]-1,e[2]).getTime())<0}(i.replace("-","/").replace("-","/"));return 0==a.length||a.length>30?(alert("length of title is empty or too long"),""):n?f.includes("zoom")?(e.onAdd({title:a,day:i,important:m,zoom:f,time:g}),alert("task added"),r(""),l(""),void p(!1)):(alert("The link does not contain zoom"),""):(alert("Must include future dates"),"")},children:[Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{style:{marginBottom:"1rem"},for:"meeting",children:"Meeting"}),Object(d.jsx)("input",{type:"text",placeholder:"Add Task",value:a,onChange:function(e){return r(e.target.value)},id:"meeting",style:{display:"inline-block"}})]}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{style:{marginBottom:"1rem"},children:" Date"}),Object(d.jsx)("input",{type:"date",value:i,onChange:function(e){return l(e.target.value)},id:"date",placeholder:"dd/mm/yyyy",name:"begin"})]}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsxs)("label",{style:{marginBottom:"1rem"},for:"date",children:[" ","Time"]}),Object(d.jsx)("input",{type:"time",placeholder:"Time",id:"time",style:{display:"inline-block"},onChange:function(e){return k(e.target.value)}})]}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsxs)("label",{style:{marginBottom:"1rem"},for:"date",children:[" ","Zoom Link"]}),Object(d.jsx)("input",{type:"text",placeholder:"zoom link",id:"date",style:{display:"inline-block"},onChange:function(e){return x(e.target.value)}})]}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{className:"from-control form-control-check",children:[Object(d.jsx)("label",{className:"label-important",children:"Important"}),Object(d.jsx)("input",{type:"checkbox",checked:m,value:m,onChange:function(e){return p(e.currentTarget.checked)},className:"checkbox"})]}),Object(d.jsx)("input",{className:"btn1",type:"submit",value:"Save"})]})},f=function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),s=Object(b.a)(r,2),l=s[0],p=s[1],f=Object(c.useState)(!1),x=Object(b.a)(f,2),y=x[0],v=x[1],g=Object(c.useState)(""),k=Object(b.a)(g,2),N=k[0],S=k[1],z=Object(c.useState)(""),C=Object(b.a)(z,2),T=C[0],w=C[1],D=Object(c.useState)(""),B=Object(b.a)(D,2),M=B[0],U=B[1],E=Object(c.useState)(!1),A=Object(b.a)(E,2),F=A[0],L=A[1],P=Object(c.useState)(""),I=Object(b.a)(P,2),J=I[0],Z=I[1],H=Object(c.useState)(""),q=Object(b.a)(H,2),G=q[0],K=q[1],Q=Object(c.useState)(""),R=Object(b.a)(Q,2),V=(R[0],R[1]),W=Object(c.useState)(""),X=Object(b.a)(W,2),Y=(X[0],X[1]),$=Object(c.useState)(!1),_=Object(b.a)($,2),ee=(_[0],_[1]);Object(c.useEffect)((function(){(function(){var e=Object(u.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var te=function(){var e=Object(u.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://my-json-server.typicode.com/jjimenez98/zoom-scheduler/tasks");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ne=function(){var e=Object(u.a)(j.a.mark((function e(t){var n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://my-json-server.typicode.com/jjimenez98/zoom-scheduler/tasks/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ce=function(){var e=Object(u.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://my-json-server.typicode.com/jjimenez98/zoom-scheduler/tasks/".concat(t),{method:"DELETE"});case 2:e.sent,a(n.filter((function(e){return e.id!==t})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ae=function(){var e=Object(u.a)(j.a.mark((function e(t){var c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://my-json-server.typicode.com/jjimenez98/zoom-scheduler/tasks",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 2:return c=e.sent,e.next=5,c.json();case 5:r=e.sent,a([].concat(Object(i.a)(n),[r]));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),re=function(){var e=Object(u.a)(j.a.mark((function e(t){var n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://my-json-server.typicode.com/jjimenez98/zoom-scheduler/tasks/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,0==y?(V(c.title),Y(c.day),ee(c.important),v(!0),S(t)):v(!1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),se=function(){var e=Object(u.a)(j.a.mark((function e(){var t,c,r,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return 0==T.length&&T.length>30&&alert("length of title is empty or too long"),e.next=3,ne(N);case 3:return t=e.sent,c=Object(o.a)(Object(o.a)({},t),{},{important:F,title:T,day:M,zoom:J,time:G}),e.next=7,fetch("https://my-json-server.typicode.com/jjimenez98/zoom-scheduler/tasks/".concat(N),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(c)});case 7:return r=e.sent,e.next=10,r.json();case 10:s=e.sent,a(n.map((function(e){return e.id===N?Object(o.a)(Object(o.a)({},e),{},{important:s.important,title:s.title,day:s.day,zoom:s.zoom,time:s.time}):e})));case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"container",children:l?Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"create-meeting",children:[Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)(m,{className:"title",header:"Zoom Meetings Manager"}),Object(d.jsx)("button",{className:"btn",onClick:function(){p(!1)},children:"Full Schedule"})]}),Object(d.jsx)(h,{onAdd:ae})]})}):Object(d.jsxs)("div",{className:"create-meeting",children:[Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)(m,{className:"title",header:"Zoom Meetings Manager"}),Object(d.jsx)("button",{className:"btn",onClick:function(){console.log("create-meeting"),p(!0)},children:"Create a Meeting"})]}),0===n.length?Object(d.jsx)("p",{style:{textAlign:"center"},children:"No Meetings Available"}):Object(d.jsx)(O,{tasks:n,onDelete:ce,onUpdate:re}),y?Object(d.jsx)("div",{children:Object(d.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),e.stopPropagation(),se()},children:[Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{style:{marginBottom:"1rem"},for:"meeting",children:"Meeting"}),Object(d.jsx)("input",{type:"text",placeholder:"Update Task",id:"meeting",style:{display:"inline-block"},onChange:function(e){return w(e.target.value)}})]}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsxs)("label",{style:{marginBottom:"1rem"},for:"date",children:[" ","Date"]}),Object(d.jsx)("input",{type:"date",placeholder:"Update Date",id:"date",style:{display:"inline-block"},onChange:function(e){return U(e.target.value)}})]}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsxs)("label",{style:{marginBottom:"1rem"},for:"date",children:[" ","Time"]}),Object(d.jsx)("input",{type:"time",placeholder:"Time",id:"time",style:{display:"inline-block"},onChange:function(e){return K(e.target.value)}})]}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsxs)("label",{style:{marginBottom:"1rem"},for:"date",children:[" ","Zoom Link"]}),Object(d.jsx)("input",{type:"text",placeholder:"zoom link",id:"date",style:{display:"inline-block"},onChange:function(e){return Z(e.target.value)}})]}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{className:"from-control form-control-check",children:[Object(d.jsx)("label",{className:"label-important",for:"important",children:"Important"}),Object(d.jsx)("input",{id:"important",type:"checkbox",onChange:function(e){return L(e.target.value)},className:"checkbox"})]}),Object(d.jsx)("input",{className:"btn1",type:"submit",value:"Save"})]})}):""]})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),x()}},[[19,1,2]]]);
//# sourceMappingURL=main.e492ddda.chunk.js.map