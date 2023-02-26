"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[281],{174:function(n,e,t){t.d(e,{O:function(){return h}});var r,i,a=t(779),o=t(87),c=t(689),s=t(168),u=t(444),l=u.ZP.ul(r||(r=(0,s.Z)(["\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  align-content: center;\n  justify-content: center;\n  align-items: center;\n  gap: 15px;\n"]))),p=u.ZP.li(i||(i=(0,s.Z)(["\n  display: block;\n  border-radius: 6px;\n  transition: scale 200ms;\n  &:hover,\n  &:focus {\n    scale: 1.06;\n  }\n  & img {\n    border-radius: 6px;\n    height: 100%;\n  }\n"]))),d=t(184),h=function(n){var e=n.movies,t=n.title,r=(0,c.TH)();return(0,d.jsxs)(a.W2,{children:[(0,d.jsx)("h2",{children:t}),(0,d.jsx)(l,{children:e.map((function(n){var e=n.id,t=n.title,i=n.poster_path;return(0,d.jsx)(p,{children:(0,d.jsx)(o.Link,{to:"/movies/".concat(e),state:{from:r},children:(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(i),alt:t,width:"150",title:t})})},e)}))})]})}},281:function(n,e,t){t.r(e),t.d(e,{default:function(){return b}});var r,i,a,o=t(439),c=t(791),s=t(87),u=t(779),l=t(168),p=t(444),d=p.ZP.form(r||(r=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 10px;\n  overflow: hidden;\n  border: 1px solid black;\n  margin-top: 10px;\n"]))),h=p.ZP.button(i||(i=(0,l.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    opacity: 1;\n    color: white;\n    background-color: orangered;\n  }\n  & label {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    clip-path: inset(50%);\n    border: 0;\n  }\n  & svg {\n    width: 24px;\n    height: 24px;\n  }\n"]))),f=p.ZP.input(a||(a=(0,l.Z)(["\n  display: inline-block;\n  /* width: 100%; */\n  /* font: inherit; */\n  font-size: 25px;\n  border: none;\n  outline: none;\n  padding: 0px 4px 4px 4px;\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),v=t(184);function x(n){var e=n.value,t=n.onSearch,r=n.onChangeFilter;return(0,v.jsx)(u.W2,{children:(0,v.jsxs)(d,{onSubmit:t,children:[(0,v.jsx)(h,{type:"submit",children:"Search"}),(0,v.jsx)(f,{name:"query",type:"text",value:e,typeof:"text",autoFocus:!0,placeholder:"Search move",onChange:function(n){return r(n.target.value)}})]})})}var g=t(174),m=t(179),b=function(){var n=(0,c.useState)(null),e=(0,o.Z)(n,2),t=e[0],r=e[1],i=(0,s.useSearchParams)(),a=(0,o.Z)(i,2),u=a[0],l=a[1],p=(0,c.useState)((function(){var n;return null!==(n=u.get("query"))&&void 0!==n?n:""})),d=(0,o.Z)(p,2),h=d[0],f=d[1],b=u.get("query");return(0,c.useEffect)((function(){b&&(0,m.Pv)(b).then(r)}),[b]),(0,v.jsxs)("div",{children:[(0,v.jsx)(x,{value:h,onSearch:function(n){n.preventDefault(),l(""!==h?{query:h}:{})},onChangeFilter:function(n){f(n)}}),t&&(0,v.jsx)(g.O,{movies:t}),t&&0===t.length&&(0,v.jsx)("div",{children:"There are not movies with such name"})]})}},179:function(n,e,t){t.d(e,{Pv:function(){return s},SU:function(){return c}});var r=t(861),i=t(757),a=t.n(i),o=t(243);o.Z.defaults.baseURL="https://api.themoviedb.org/3/",o.Z.defaults.params={api_key:"0e13fbdd8c25dd146508a582d48a9360",language:"en-US"};var c=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("trending/movie/".concat(e));case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("search/movie?query=".concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=281.664cd331.chunk.js.map