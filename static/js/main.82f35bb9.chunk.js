(this["webpackJsonpsgn-chartracing"]=this["webpackJsonpsgn-chartracing"]||[]).push([[0],{114:function(t,e,n){},115:function(t,e,n){},138:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(34),i=n.n(a),u=(n(114),n(3));n(115);var o=function(t,e){var n=Object(c.useRef)();Object(c.useEffect)((function(){n.current=t}),[t]),Object(c.useEffect)((function(){if(null!==e){var t=setInterval((function(){n.current()}),e);return function(){return clearInterval(t)}}}),[e])},s=n(35),f=n.n(s),l=n(10),b=n(36),j=function(t){var e=Object(c.useState)(null),n=Object(u.a)(e,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){var e=t.current,n=new b.a((function(t){t.forEach((function(t){a(t.contentRect)}))}));return n.observe(e),function(){n.unobserve(e)}}),[t]),r},d=n(4),O=n.n(d),h=n(1);var m=function(t){var e=t.data,n=t.mstime,r=Object(c.useRef)(),a=Object(c.useRef)(),i=j(a);return Object(c.useEffect)((function(){var t=Object(l.d)(r.current);if(i){e.sort((function(t,e){return e.timeline.cases[O()(n).format("M/D/YY")]-t.timeline.cases[O()(n).format("M/D/YY")]}));var c=Object(l.b)().paddingInner(.1).domain(e.map((function(t,e){return e}))).range([0,5e3]),a=Object(l.c)().domain([0,Object(l.a)(e,(function(t){return t.timeline.cases[O()(n).format("M/D/YY")]}))]).range([0,i.width]);t.selectAll(".bar").data(e,(function(t,e){return t.country})).join((function(t){return t.append("rect").attr("y",(function(t,e){return c(e)}))})).attr("fill","#5FB1E7").attr("class","bar").attr("x",0).attr("height",c.bandwidth()).transition().attr("width",(function(t){return a(t.timeline.cases[O()(n).format("M/D/YY")])})).attr("y",(function(t,e){return c(e)})),t.selectAll(".label").data(e,(function(t,e){return t.country})).join((function(t){return t.append("text").attr("y",(function(t,e){return c(e)+c.bandwidth()/2+5}))})).text((function(t){return" ".concat(t.country," (").concat(t.timeline.cases[O()(n).format("M/D/YY")],")")})).attr("class","label").attr("x",10).transition().attr("y",(function(t,e){return c(e)+c.bandwidth()/2+5}))}}),[e,i,n]),Object(h.jsx)("div",{ref:a,style:{marginBottom:"20rem"},children:Object(h.jsx)("svg",{ref:r})})};var v=function(){var t=Object(c.useState)(!1),e=Object(u.a)(t,2),n=e[0],r=e[1],a=Object(c.useState)(16196292e5),i=Object(u.a)(a,2),s=i[0],l=i[1],b=864e5,j=Object(c.useState)(),d=Object(u.a)(j,2),v=d[0],g=d[1];return o((function(){n||null!=v||(null==v?f.a.get("https://disease.sh/v3/covid-19/historical?lastdays=30").then((function(t){g(t.data),l(s),r(!n)})).catch((function(t){console.log(t)})):r(!n),r(!n)),n&&(l(s+b),s>=16220484e5&&r(!n))}),100),Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{}),Object(h.jsx)("div",{className:"headertext",children:Object(h.jsx)("b",{children:"Covid Global Cases by SGN"})}),Object(h.jsx)("p",{}),"Date : ",O()(s).format("M/D/YY"),Object(h.jsx)("p",{}),null!=v&&Object(h.jsx)(m,{data:v,mstime:s})]})},g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,139)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),c(t),r(t),a(t),i(t)}))};i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root")),g()}},[[138,1,2]]]);
//# sourceMappingURL=main.82f35bb9.chunk.js.map