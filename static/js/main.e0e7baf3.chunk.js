(this["webpackJsonptest-task-hf"]=this["webpackJsonptest-task-hf"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(7),u=n.n(c),s=(n(13),n(4)),l=n(8),o=n(2),b=(n(14),n(0));function i(e){var t=e.onSubmit,n=e.onAddRow,r=Object(a.useState)(0),c=Object(s.a)(r,2),u=c[0],l=c[1],o=Object(a.useState)(0),i=Object(s.a)(o,2),j=i[0],d=i[1];function f(e){e.preventDefault(),t({rows:u,columns:j})}return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("form",{className:"form",onSubmit:function(e){return f(e)},children:[Object(b.jsxs)("label",{className:"inputLabel",children:[Object(b.jsx)("span",{className:"labelText",children:"Rows"}),Object(b.jsx)("input",{type:"number",name:"rows",className:"input",value:u,onChange:function(e){var t=e.target.value;l(Number(t))},required:!0})]}),Object(b.jsxs)("label",{className:"inputLabel",children:[Object(b.jsx)("span",{className:"labelText",children:"Columns"}),Object(b.jsx)("input",{type:"number",name:"columns",className:"input",value:j,onChange:function(e){var t=e.target.value;d(Number(t))},required:!0})]}),Object(b.jsx)("button",{type:"submit",children:"Create table"})]}),Object(b.jsx)("button",{type:"button",onClick:function(){return n()},children:"Add row"})]})}function j(e){var t,n=e.tableValues,a=e.onDelRow;function r(e){var t=[];return e.forEach((function(e){e.forEach((function(e,n){void 0===t[n]&&(t[n]=0),t[n]+=e}))})),t}return Object(b.jsxs)("table",{children:[Object(b.jsx)("tbody",{className:"tableBody",children:n.map((function(e,t){return Object(b.jsx)("tr",{className:"bodyRow",onClick:function(){return a(t)},children:e.map((function(e,t){return Object(b.jsx)("td",{children:e},t)}))},t)}))}),Object(b.jsxs)("tfoot",{children:[Object(b.jsx)("tr",{className:"footRow",children:(t=n,r(t).map((function(e){return Math.round(e/t.length)}))).map((function(e,t){return Object(b.jsx)("td",{children:e},t)}))}),Object(b.jsx)("tr",{className:"footRow",children:r(n).map((function(e,t){return Object(b.jsx)("td",{children:e},t)}))})]})]})}function d(e){var t=e.tableValues;function n(e){return e.flatMap((function(e){return e})).reduce((function(e,t){return t+e}),0)}return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{children:["Total: ",n(t)]}),Object(b.jsxs)("div",{children:["Total avarage: ",function(e){if(!n(e))return 0;var t=e.flatMap((function(e){return e})).length;return Math.round(n(e)/t)}(t)]})]})}var f={tableValues:[],numColumns:0};function m(e,t){return Math.floor(Math.random()*(t-e+1))+e}function h(e,t){switch(t.type){case"createTable":for(var n=[],a=t.payload,r=a.columns,c=a.rows,u=0;u<c;u++){for(var s=[],b=0;b<r;b++)s.push(m(100,999));n.push(s)}return Object(o.a)(Object(o.a)({},e),{},{tableValues:n,numColumns:r});case"addRow":for(var i=[],j=0;j<e.numColumns;j++)i.push(m(100,999));return Object(o.a)(Object(o.a)({},e),{},{tableValues:[].concat(Object(l.a)(e.tableValues),[i])});case"delRow":var d=e.tableValues.filter((function(e,n){return n!==t.payload}));return Object(o.a)(Object(o.a)({},e),{},{tableValues:d});default:return e}}var O=function(){var e=Object(a.useReducer)(h,f),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(i,{onSubmit:function(e){var t=e.rows,n=e.columns;r({type:"createTable",payload:{rows:t,columns:n}})},onAddRow:function(){n.tableValues.length>0&&r({type:"addRow"})}}),n.tableValues.length>0&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(j,{tableValues:n.tableValues,onDelRow:function(e){r({type:"delRow",payload:e})}}),Object(b.jsx)(d,{tableValues:n.tableValues})]})]})};u.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.e0e7baf3.chunk.js.map