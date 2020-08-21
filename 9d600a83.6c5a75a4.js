(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{127:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/speed_test-c166eaa01163a082561596a8e412d892.png"},77:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(2),a=r(6),o=(r(0),r(89)),c={title:"DPAC Experiment",author:"Yang Wang",authorURL:"https://github.com/wang701"},i={permalink:"/blog/2018/04/04/dpac",editUrl:"https://github.com/ISOBlue/isoblue.github.io/edit/source/website-v2/blog/2018-04-04-dpac.md",source:"@site/blog/2018-04-04-dpac.md",description:"On a rather cold, chilly, and windy April afternoon, I drove to [Davis Purdue",date:"2018-04-04T00:00:00.000Z",tags:[],title:"DPAC Experiment",readingTime:1.48,truncated:!0,prevItem:{title:"Embrace Yourself",permalink:"/blog/2019/05/16/isobluehd"},nextItem:{title:"Houston, we have a problem",permalink:"/blog/2018/02/19/antenna-issue"}},l=[],u={rightToc:l};function s(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"On a rather cold, chilly, and windy April afternoon, I drove to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://ag.purdue.edu/arge/pac/Pages/dpac-home.aspx"}),"Davis Purdue\nAgricultural Center (DPAC)")," along with my colleague, Matt to collect some\nmachine data."),Object(o.b)("p",null,"The goal of this experiment was to see if there would be any sort of hiccups\nwhen using ISOBlue 2.0 to collect machine data. The data would be further\npost-processed to generate different maps during the season to check the\nprogress or detect anomalies for different machine operations. The machine of\ninterest is a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.tractordata.com/farm-tractors/005/6/2/5629-caseih-maxxum-140.html"}),"Case 140 Pro tractor")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.tractordata.com/farm-tractors/007/7/4/7740-caseih-magnum-310.html"}),"Case 310 CVT"),". It rained for a\nfew days before we went out so the fields were very wet so we didn't test drive\nthe tractor in any of the fields."),Object(o.b)("p",null,"Two main things we checked are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"cellular connectivity"),Object(o.b)("li",{parentName:"ul"},"machine data collection")),Object(o.b)("p",null,"For cellular connectivity, we were initially worried that ISOBlue 2.0 would not\nconnect to the AT&T network correctly since the area is mostly covered by\nVerizon. We did some speed test using our cell phone first (my phone uses AT&T):"),Object(o.b)("p",null,Object(o.b)("img",{alt:"phone speed test",src:r(127).default})),Object(o.b)("p",null,"Luckily, although the speed test doesn't show great result, the ISOBlue 2.0 was\nstill able to connect to the network fine after it was turned on."),Object(o.b)("p",null,"After we checked the ISOBlue 2.0 was collecting data, we started driving the\ntractor. We did make some different maneuvers to make the trip interesting. For\nthe 310 CVT tractor, we plugged in an ISOBlue 2.0 to check whether it worked\nbut we didn't drive it around."),Object(o.b)("p",null,"After getting back from the site, I parsed out the data. Instead of creating\nstatic maps for the data, I created a short animation showing what happened\nin the field along with some machine status parameters. Check out the video!"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=yzizE8-t4EM"}),Object(o.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.youtube.com/vi/yzizE8-t4EM/0.jpg",alt:"video"}))),"!"))}s.isMDXComponent=!0},89:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),b=n,h=p["".concat(c,".").concat(b)]||p[b]||d[b]||o;return r?a.a.createElement(h,i(i({ref:t},u),{},{components:r})):a.a.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);