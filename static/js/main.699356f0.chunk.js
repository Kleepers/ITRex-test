(this["webpackJsonpitrex-test"]=this["webpackJsonpitrex-test"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),a=n(7),s=n.n(a),l=(n(12),n(2)),o=(n(13),n(5)),j=(n(14),n(0));function r(e){var t=e.human,n=e.index,c=e.onHumanClick;return Object(j.jsxs)("tr",{className:"human",onClick:function(){return c(t)},children:[Object(j.jsx)("td",{className:"human__cell",children:t.id}),Object(j.jsx)("td",{className:"human__cell",children:t.firstName}),Object(j.jsx)("td",{className:"human__cell",children:t.lastName}),Object(j.jsx)("td",{className:"human__cell",children:t.email}),Object(j.jsx)("td",{className:"human__cell",children:t.phone}),Object(j.jsx)("td",{className:"human__cell",children:t.adress.state})]},n)}n(16);function d(e){for(var t=Object(c.useState)(1),n=Object(l.a)(t,2),i=n[0],a=n[1],s=e.people,d=Object(c.useState)({direction:null,key:null}),u=Object(l.a)(d,2),b=u[0],h=u[1],O=function(e){if(b)return b.key===e?"table__heading_".concat(b.direction):void 0},x=function(e){a(e.target.id)},p=Object(c.useMemo)((function(){var e=Object(o.a)(s);return null!==b.key&&e.sort((function(e,t){return"state"===b.key?e.adress.state<t.adress.state?"ascending"===b.direction?-1:1:e.adress.state>t.adress.state?"ascending"===b.direction?1:-1:0:e[b.key]<t[b.key]?"ascending"===b.direction?-1:1:e[b.key]>t[b.key]?"ascending"===b.direction?1:-1:0})),e}),[s,b]),v=function(e){var t="ascending";b.key===e&&"ascending"===b.direction&&(t="descending"),h({key:e,direction:t})},m=20*i,f=m-20,N=p.slice(f,m),_=[],C=1;C<=Math.ceil(p.length/20);C++)_.push(C);return Object(j.jsxs)("div",{className:"table",children:[Object(j.jsxs)("table",{className:"table__container",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{className:"table__heading ".concat(O("id")),onClick:function(){return v("id")},children:"id"}),Object(j.jsx)("th",{className:"table__heading ".concat(O("firstName")),onClick:function(){return v("firstName")},children:"First name"}),Object(j.jsx)("th",{className:"table__heading ".concat(O("lastName")),onClick:function(){return v("lastName")},children:"Last name"}),Object(j.jsx)("th",{className:"table__heading ".concat(O("email")),onClick:function(){return v("email")},children:"Email"}),Object(j.jsx)("th",{className:"table__heading ".concat(O("phone")),onClick:function(){return v("phone")},children:"Phone"}),Object(j.jsx)("th",{className:"table__heading ".concat(O("state")),onClick:function(){return v("state")},children:"State"})]})}),Object(j.jsx)("tbody",{children:N.map((function(t,n){return Object(j.jsx)(r,{human:t,index:n,onHumanClick:e.onHumanClick})}))})]}),Object(j.jsx)("ul",{className:"table__numbers",children:_.map((function(e){return Object(j.jsx)("li",{className:"table__number",id:e,onClick:x,children:e},e)}))})]})}n(17);function u(e){var t=e.human,n=e.isVisible;return Object(j.jsxs)("div",{className:"profile ".concat(n?"profile__active":""),children:[Object(j.jsx)("p",{children:"Profile Info:"}),Object(j.jsx)("p",{children:"Selected profile: ".concat(n?t.firstName:""," ").concat(n?t.lastName:"")}),Object(j.jsx)("p",{children:"Address: ".concat(n?t.adress.streetAddress:"")}),Object(j.jsx)("p",{children:"City: ".concat(n?t.adress.city:"")}),Object(j.jsx)("p",{children:"State: ".concat(n?t.adress.state:"")}),Object(j.jsx)("p",{children:"Index: ".concat(n?t.adress.zip:"")})]})}n(18);function b(e){var t=e.data,n=e.updateData,i=Object(c.useState)(""),a=Object(l.a)(i,2),s=a[0],r=a[1],d=Object(c.useState)("-"),u=Object(l.a)(d,2),b=u[0],h=u[1];return Object(c.useEffect)((function(){var e=Object(o.a)(t);""!==s&&(e=t.filter((function(e){return e.firstName.toLowerCase().includes(s.toLowerCase())||e.lastName.toLowerCase().includes(s.toLowerCase())}))),"-"!==b?(e=e.filter((function(e){return e.adress.state===b})),n(e)):n(e)}),[s,b]),Object(j.jsxs)("div",{className:"searchBar",children:[Object(j.jsx)("input",{type:"text",placeholder:"Search by name:",onChange:function(e){r(e.target.value)}}),Object(j.jsxs)("select",{className:"searchBar__select",name:"state",id:"state",onChange:function(e){h(e.target.value)},children:[Object(j.jsx)("option",{disabled:!0,selected:!0,children:"Choose by State:"}),Object(j.jsx)("option",{value:"-",children:"-"}),Object(j.jsx)("option",{value:"AK",children:"AK"}),Object(j.jsx)("option",{value:"AL",children:"AL"}),Object(j.jsx)("option",{value:"AR",children:"AR"}),Object(j.jsx)("option",{value:"AZ",children:"AZ"}),Object(j.jsx)("option",{value:"CA",children:"CA"}),Object(j.jsx)("option",{value:"CO",children:"CO"}),Object(j.jsx)("option",{value:"CT",children:"CT"}),Object(j.jsx)("option",{value:"DC",children:"DC"}),Object(j.jsx)("option",{value:"DE",children:"DE"}),Object(j.jsx)("option",{value:"FL",children:"FL"}),Object(j.jsx)("option",{value:"GA",children:"GA"}),Object(j.jsx)("option",{value:"HI",children:"HI"}),Object(j.jsx)("option",{value:"IA",children:"IA"}),Object(j.jsx)("option",{value:"ID",children:"ID"}),Object(j.jsx)("option",{value:"IL",children:"IL"}),Object(j.jsx)("option",{value:"IN",children:"IN"}),Object(j.jsx)("option",{value:"KS",children:"KS"}),Object(j.jsx)("option",{value:"KY",children:"KY"}),Object(j.jsx)("option",{value:"LA",children:"LA"}),Object(j.jsx)("option",{value:"MA",children:"MA"}),Object(j.jsx)("option",{value:"MD",children:"MD"}),Object(j.jsx)("option",{value:"ME",children:"ME"}),Object(j.jsx)("option",{value:"MI",children:"MI"}),Object(j.jsx)("option",{value:"MN",children:"MN"}),Object(j.jsx)("option",{value:"MO",children:"MO"}),Object(j.jsx)("option",{value:"MS",children:"MS"}),Object(j.jsx)("option",{value:"MT",children:"MT"}),Object(j.jsx)("option",{value:"NC",children:"NC"}),Object(j.jsx)("option",{value:"ND",children:"ND"}),Object(j.jsx)("option",{value:"NE",children:"NE"}),Object(j.jsx)("option",{value:"NH",children:"NH"}),Object(j.jsx)("option",{value:"NJ",children:"NJ"}),Object(j.jsx)("option",{value:"NM",children:"NM"}),Object(j.jsx)("option",{value:"NV",children:"NV"}),Object(j.jsx)("option",{value:"NY",children:"NY"}),Object(j.jsx)("option",{value:"OH",children:"OH"}),Object(j.jsx)("option",{value:"OK",children:"OK"}),Object(j.jsx)("option",{value:"OR",children:"OR"}),Object(j.jsx)("option",{value:"PA",children:"PA"}),Object(j.jsx)("option",{value:"RI",children:"RI"}),Object(j.jsx)("option",{value:"SC",children:"SC"}),Object(j.jsx)("option",{value:"SD",children:"SD"}),Object(j.jsx)("option",{value:"TN",children:"TN"}),Object(j.jsx)("option",{value:"TX",children:"TX"}),Object(j.jsx)("option",{value:"UT",children:"UT"}),Object(j.jsx)("option",{value:"VA",children:"VA"}),Object(j.jsx)("option",{value:"VT",children:"VT"}),Object(j.jsx)("option",{value:"WA",children:"WA"}),Object(j.jsx)("option",{value:"WI",children:"WI"}),Object(j.jsx)("option",{value:"WV",children:"WV"}),Object(j.jsx)("option",{value:"WY",children:"WY"})]})]})}var h=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)([]),s=Object(l.a)(a,2),o=s[0],r=s[1],h=Object(c.useState)({}),O=Object(l.a)(h,2),x=O[0],p=O[1],v=Object(c.useState)(!1),m=Object(l.a)(v,2),f=m[0],N=m[1];return Object(c.useEffect)((function(){fetch("https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json").then((function(e){return e.json()})).then((function(e){i(e),r(e)})).catch((function(e){return console.log(e)}))}),[]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(b,{updateData:function(e){r(e)},data:n}),Object(j.jsx)(d,{people:o,onHumanClick:function(e){p(e),!1===f&&N(!0)}}),Object(j.jsx)(u,{human:x,isVisible:f})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};s.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root")),O()}],[[19,1,2]]]);
//# sourceMappingURL=main.699356f0.chunk.js.map