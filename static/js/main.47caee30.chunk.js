(this["webpackJsonppokedex-react"]=this["webpackJsonppokedex-react"]||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},39:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n.n(c),o=n(14),a=n.n(o),s=(n(19),n(4)),d=(n(20),n(3)),r=n.n(d),l=(n(39),n(0));function u(e){var t,n,i,o,a,d=Object(c.useState)({}),u=Object(s.a)(d,2),j=u[0],p=u[1];return Object(c.useEffect)((function(){r.a.get(e.pokemon.url).then((function(e){p(e.data)}))}),[e.pokemon.url]),Object(l.jsx)("div",{className:"my-6 mx-4 shadow-xl bg-white bg-opacity-50 rounded-2xl",children:Object(l.jsxs)("div",{className:"grid grid-cols-2",children:[Object(l.jsx)("div",{className:"bg-gray-300 bg-opacity-90 rounded-2xl",children:Object(l.jsxs)("div",{className:"p-6",children:[Object(l.jsx)("div",{children:(a=e.pokemon.name,a[0].toUpperCase()+a.slice(1))}),Object(l.jsx)("div",{children:null===j||void 0===j||null===(t=j.types)||void 0===t?void 0:t.map((function(e){return Object(l.jsx)("span",{className:"rounded p-1 mr-1 bg-white",children:e.type.name})}))})]})}),Object(l.jsx)("div",{className:"p-6",children:Object(l.jsx)("img",{className:"filter drop-shadow-lg",src:null===(n=j.sprites)||void 0===n||null===(i=n.other)||void 0===i||null===(o=i.dream_world)||void 0===o?void 0:o.front_default,alt:e.pokemon.name})})]})})}var j=function(){var e,t=Object(c.useState)({}),n=Object(s.a)(t,2),i=n[0],o=n[1];return Object(c.useEffect)((function(){r.a.get(" https://pokeapi.co/api/v2/pokemon?limit=151").then((function(e){o(e.data)}))}),[]),Object(l.jsx)("div",{children:null===i||void 0===i||null===(e=i.results)||void 0===e?void 0:e.map((function(e){return Object(l.jsx)(u,{pokemon:e},e.name)}))})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),o(e),a(e)}))};a.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root")),p()}},[[41,1,2]]]);
//# sourceMappingURL=main.47caee30.chunk.js.map