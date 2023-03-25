"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[186,854,109,547],{854:function(t,n,e){e.r(n),e.d(n,{Loader:function(){return i}});var r=e(4691),c=e(5602),a=e(184),i=function(){return(0,a.jsx)("div",{className:c.default.Loader,children:(0,a.jsx)(r.VL,{height:"45",width:"45",colors:["black","yellow","black","yellow","yellow","black"]})})}},186:function(t,n,e){e.r(n),e.d(n,{Reviews:function(){return f}});var r=e(9439),c=e(2791),a=e(7689),i=e(7737),s=e(854),u=e(6547),o=e(184),f=function(){var t=(0,c.useState)([]),n=(0,r.Z)(t,2),e=n[0],f=n[1],p=(0,c.useState)(!0),l=(0,r.Z)(p,2),d=l[0],h=l[1],v=(0,a.UO)("movieId").movieId;return(0,c.useEffect)((function(){v&&(0,i.SB)(v).then((function(t){h(!1),f(t.results)})).catch((function(t){return console.log(t.message)})).finally(h(!0))}),[v]),(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:u.default.Container,children:[d&&(0,o.jsx)(s.Loader,{}),e.length>0?(0,o.jsx)("ul",{className:u.default.ReviewsList,children:e.map((function(t){var n=t.id,e=t.author,r=t.content;return(0,o.jsxs)("li",{className:u.default.ReviewsListItem,children:[(0,o.jsxs)("h3",{className:u.default.ReviewsListItemAuthor,children:["Author: ",e]}),(0,o.jsx)("p",{className:u.default.ReviewsListItemContent,children:r})]},n)}))}):(0,o.jsx)("b",{children:"Sorry, there is no reviews for this movie"})]})})}},7737:function(t,n,e){e.d(n,{HW:function(){return x},SB:function(){return Z},bI:function(){return y},d_:function(){return w},fS:function(){return k},hq:function(){return v},ib:function(){return h},mO:function(){return g},o6:function(){return m},yd:function(){return L}});var r=e(5861),c=e(7757),a=e.n(c),i=e(1243),s="https://api.themoviedb.org/3",u="008c8606747b1b5922ba109cd86c2637",o="movie",f="day",p="en-US",l=1,d=!1,h="https://image.tmdb.org/t/p/w300/",v=170,w=250,m="https://i.pinimg.com/564x/6f/8c/f1/6f8cf13bd79b8be7d50cced5552eb99f.jpg",g="https://i.pinimg.com/564x/6d/88/40/6d8840c2c2a29dca141b53754787c944.jpg";function x(){return _.apply(this,arguments)}function _(){return(_=(0,r.Z)(a().mark((function t(){var n,e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("\n    ".concat(s,"/trending/").concat(o,"/").concat(f,"?api_key=").concat(u,"\n  "));case 2:return n=t.sent,e=n.data,t.next=6,e;case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(a().mark((function t(n){var e,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("\n    ".concat(s,"/search/").concat(o,"?api_key=").concat(u,"&language=").concat(p,"&page=").concat(l,"&include_adult=").concat(d,"&query=").concat(n,"\n  "));case 2:return e=t.sent,r=e.data,t.next=6,r;case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(t){return R.apply(this,arguments)}function R(){return(R=(0,r.Z)(a().mark((function t(n){var e,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("\n    ".concat(s,"/").concat(o,"/").concat(n,"?api_key=").concat(u,"&language=").concat(p,"\n  "));case 2:return e=t.sent,r=e.data,t.next=6,r;case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function L(t){return j.apply(this,arguments)}function j(){return(j=(0,r.Z)(a().mark((function t(n){var e,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("\n    ".concat(s,"/").concat(o,"/").concat(n,"/credits?api_key=").concat(u,"&language=").concat(p,"\n  "));case 2:return e=t.sent,r=e.data,t.next=6,r;case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Z(t){return I.apply(this,arguments)}function I(){return(I=(0,r.Z)(a().mark((function t(n){var e,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("\n    ".concat(s,"/").concat(o,"/").concat(n,"/reviews?api_key=").concat(u,"&language=").concat(p,"\n  "));case 2:return e=t.sent,r=e.data,t.next=6,r;case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},5602:function(t,n,e){e.r(n),n.default={}},6547:function(t,n,e){e.r(n),n.default={Container:"Reviews_Container__jQEDF",ReviewsList:"Reviews_ReviewsList__pyBOr",ReviewsListItem:"Reviews_ReviewsListItem__cFLRg",ReviewsListItemContent:"Reviews_ReviewsListItemContent__NXdrN"}}}]);
//# sourceMappingURL=186.ff3a25b9.chunk.js.map