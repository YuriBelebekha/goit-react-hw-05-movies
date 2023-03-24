"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[133,423],{7737:function(t,e,n){n.d(e,{HW:function(){return g},SB:function(){return L},bI:function(){return b},d_:function(){return v},fS:function(){return k},hq:function(){return h},ib:function(){return m},mO:function(){return _},o6:function(){return x},yd:function(){return T}});var r=n(5861),c=n(7757),a=n.n(c),i=n(1243),s="https://api.themoviedb.org/3",u="008c8606747b1b5922ba109cd86c2637",o="movie",p="day",f="en-US",l=1,d=!1,m="https://image.tmdb.org/t/p/w300/",h=170,v=250,x="https://i.pinimg.com/564x/6f/8c/f1/6f8cf13bd79b8be7d50cced5552eb99f.jpg",_="https://i.pinimg.com/564x/6d/88/40/6d8840c2c2a29dca141b53754787c944.jpg";function g(){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(a().mark((function t(){var e,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("\n    ".concat(s,"/trending/").concat(o,"/").concat(p,"?api_key=").concat(u,"\n  "));case 2:return e=t.sent,n=e.data,t.next=6,n;case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function b(t){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(a().mark((function t(e){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("\n    ".concat(s,"/search/").concat(o,"?api_key=").concat(u,"&language=").concat(f,"&page=").concat(l,"&include_adult=").concat(d,"&query=").concat(e,"\n  "));case 2:return n=t.sent,r=n.data,t.next=6,r;case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(t){return j.apply(this,arguments)}function j(){return(j=(0,r.Z)(a().mark((function t(e){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("\n    ".concat(s,"/").concat(o,"/").concat(e,"?api_key=").concat(u,"&language=").concat(f,"\n  "));case 2:return n=t.sent,r=n.data,t.next=6,r;case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function T(t){return Z.apply(this,arguments)}function Z(){return(Z=(0,r.Z)(a().mark((function t(e){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("\n    ".concat(s,"/").concat(o,"/").concat(e,"/credits?api_key=").concat(u,"&language=").concat(f,"\n  "));case 2:return n=t.sent,r=n.data,t.next=6,r;case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function L(t){return M.apply(this,arguments)}function M(){return(M=(0,r.Z)(a().mark((function t(e){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("\n    ".concat(s,"/").concat(o,"/").concat(e,"/reviews?api_key=").concat(u,"&language=").concat(f,"\n  "));case 2:return n=t.sent,r=n.data,t.next=6,r;case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},9934:function(t,e,n){n.d(e,{F:function(){return c}});var r=n(8174),c=(n(5462),{autoClose:1500,pauseOnFocusLoss:!0,theme:"colored",transition:r.BW})},2133:function(t,e,n){n.r(e),n.d(e,{HomeView:function(){return h}});var r=n(5861),c=n(9439),a=n(7757),i=n.n(a),s=n(2791),u=n(7689),o=n(1087),p=n(7737),f=n(8174),l=n(9934),d=n(8423),m=n(184),h=function(){var t=(0,s.useState)(),e=(0,c.Z)(t,2),n=e[0],a=e[1],h=(0,u.TH)();return(0,s.useEffect)((function(){var t=function(){var t=(0,r.Z)(i().mark((function t(){var e,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,p.HW)();case 3:if(e=t.sent,n=e.results){t.next=7;break}return t.abrupt("return");case 7:a(n),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),setTimeout((function(){f.Am.error("Something went wrong... Details: ".concat(t.t0.message),l.F)}),100);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}();t()}),[n]),(0,m.jsxs)(m.Fragment,{children:[n&&(0,m.jsx)("div",{className:d.default.TitleBox,children:(0,m.jsx)("h1",{className:d.default.Title,children:"Trending Movies"})}),(0,m.jsx)("div",{className:d.default.Container,children:n&&(0,m.jsx)("ul",{className:d.default.MoviesList,children:n.map((function(t){var e=t.id,n=t.title,r=t.poster_path;return(0,m.jsx)("li",{className:d.default.MoviesListItem,children:(0,m.jsxs)(o.rU,{to:"/movies/".concat(e),state:{from:h},children:[(0,m.jsx)("img",{className:d.default.MovieListItemImg,src:r?"".concat(p.ib).concat(r):p.o6,alt:n,width:p.hq,height:p.d_}),(0,m.jsx)("h3",{className:d.default.MoviesListItemTitle,children:n})]},e)},e)}))})}),(0,m.jsx)(f.Ix,{})]})}},8423:function(t,e,n){n.r(e),e.default={Container:"HomeView_Container__+ntnS",TitleBox:"HomeView_TitleBox__6Btdl",Title:"HomeView_Title__FcsrT",MoviesList:"HomeView_MoviesList__qlkw3",MoviesListItem:"HomeView_MoviesListItem__KrXcP",MoviesListItemTitle:"HomeView_MoviesListItemTitle__jPXs9"}}}]);
//# sourceMappingURL=133.8d49bcb1.chunk.js.map