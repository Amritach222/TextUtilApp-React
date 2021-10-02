(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,o){},11:function(e,t,o){},14:function(e,t,o){"use strict";o.r(t);var c=o(0),a=o.n(c),n=o(3),r=o.n(n),s=(o(10),o(2)),l=(o(11),o(1));function i(e){return Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)("a",{className:"navbar-brand ",href:"#",children:e.title}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(l.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})}),Object(l.jsx)("li",{className:"nav-item"})]}),Object(l.jsx)("button",{className:"btn-circle mx-2",onClick:function(){return e.chooseColor("red")},style:{backgroundColor:"red",height:"20px",width:"20px",borderRadius:"20px"},type:"submit"}),Object(l.jsx)("button",{className:" btn-circle",onClick:function(){return e.chooseColor("green")},style:{backgroundColor:"green",height:"20px",width:"20px",borderRadius:"20px"},type:"submit"}),Object(l.jsx)("button",{className:" btn-circle mx-2",onClick:function(){return e.chooseColor("yellow")},style:{backgroundColor:"yellow",height:"20px",width:"20px",borderRadius:"20px"},type:"submit"}),Object(l.jsxs)("div",{className:"form-check form-switch form-inline text-".concat("light"===e.mode?"dark":"light"," mx-3"),children:[Object(l.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckChecked"}),Object(l.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckChecked",children:"light"===e.mode?"Enable Dark Mode":"Disable Dark Mode"})]})]})]})})}var b=o(5);o(13);function d(e){var t=Object(c.useState)(""),o=Object(s.a)(t,2),a=o[0],n=o[1],r=function(e){return(e=(e=(e=e.replace(/(^\s*)|(\s*$)/gi,"")).replace(/[ ]{2,}/gi," ")).replace(/\n /,"\n")).split(" ").length};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"container",style:{color:"light"===e.mode?"#271a6f":"white"},children:[Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{htmlFor:"myBox",className:"form-label",children:Object(l.jsx)("h3",{children:e.heading})}),Object(l.jsx)("textarea",{className:"form-control my-3",style:{backgroundColor:"light"===e.mode?"white":"#271a6f",color:"light"===e.mode?"#271a6f":"white"},onChange:function(e){n(e.target.value)},value:a,id:"exampleFormControlTextarea1",rows:"12"})]}),Object(l.jsx)("button",{className:"btn ",style:e.color,onClick:function(){var t=a.toUpperCase();n(t),e.showAlert("Text has been converted to upperCase","success")},children:"convertToUppercase"}),Object(l.jsx)("button",{className:"btn  mx-3",style:e.color,onClick:function(){var t=a.toLowerCase();n(t),e.showAlert("Text has been converted to lowerCase","success")},children:"convertToLowercase"}),Object(l.jsx)("button",{className:"btn  ",style:e.color,onClick:function(){navigator.clipboard.writeText(a),b.b.success("text copied!"),e.showAlert("Copied to the clipBoard!","success")},children:"Copy"}),Object(l.jsx)(b.a,{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]}),Object(l.jsxs)("div",{className:"container",style:{color:"light"===e.mode?"#271a6f":"white"},children:[Object(l.jsx)("h3",{children:"Your text Summary:"}),Object(l.jsxs)("p",{children:[""===a?0:r(a)," words and ",a.length," characters"]}),Object(l.jsxs)("p",{children:[""===a?0:.008*r(a)," Minutes Read"]}),Object(l.jsx)("h4",{children:"Preview"}),Object(l.jsx)("p",{children:a.length>0?a:"Enter your text to preview it here."})]})]})}function h(e){return e.alert&&Object(l.jsxs)("div",{class:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(l.jsxs)("strong",{children:[function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)," "]})," ",e.alert.msg,Object(l.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})]})}var u=function(){var e=Object(c.useState)("light"),t=Object(s.a)(e,2),o=t[0],a=t[1],n=Object(c.useState)(null),r=Object(s.a)(n,2),b=r[0],u=r[1],j=Object(c.useState)({backgroundColor:"blue",color:"white"}),m=Object(s.a)(j,2),x=m[0],g=m[1],p=function(e,t){u({msg:e,type:t}),setTimeout((function(){u(null)}),2e3)};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(i,{title:"TextUtils",mode:o,about:"AboutUs",toggleMode:function(){"light"===o?(a("dark"),document.body.style.backgroundColor="#271a6f",p("Dark mode has been enabled","success")):(a("light"),document.body.style.backgroundColor="white",p("Light mode has been enabled","success"))},chooseColor:function(e){g("red"===e?{backgroundColor:"red",color:"white"}:"yellow"===e?{backgroundColor:"yellow",color:"white"}:{backgroundColor:"green",color:"white"})}}),Object(l.jsx)(h,{alert:b}),Object(l.jsx)(d,{showAlert:p,heading:"Enter the text to analyze",mode:o,color:x})]})},j=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,16)).then((function(t){var o=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;o(e),c(e),a(e),n(e),r(e)}))};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root")),j()}},[[14,1,2]]]);
//# sourceMappingURL=main.434555a7.chunk.js.map