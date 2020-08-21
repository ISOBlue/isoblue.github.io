(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{123:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/antenna_issue-a5d5019552ca2a24dd65439e9184b80f.jpg"},71:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(2),a=t(6),o=(t(0),t(89)),i={title:"Houston, we have a problem",author:"Yang Wang",authorURL:"https://github.com/wang701"},c={permalink:"/blog/2018/02/19/antenna-issue",editUrl:"https://github.com/ISOBlue/isoblue.github.io/edit/source/website-v2/blog/2018-02-19-antenna-issue.md",source:"@site/blog/2018-02-19-antenna-issue.md",description:"We have built 5 ISOBlue 2.0s and they are up and running when they need to.",date:"2018-02-19T00:00:00.000Z",tags:[],title:"Houston, we have a problem",readingTime:1.09,truncated:!0,prevItem:{title:"DPAC Experiment",permalink:"/blog/2018/04/04/dpac"},nextItem:{title:"New ISOBlue Site",permalink:"/blog/2018/02/16/new-site"}},l=[],u={rightToc:l};function s(e){var n=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,i,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"We have built 5 ISOBlue 2.0s and they are up and running when they need to.\nSince we are not necessarily product design or mechanical design experts, we\ntry our best to fit ISOBlue inside a weatherproof enclosure with all the\nconnectors and antennas sticking out."),Object(o.b)("p",null,"Last Friday, we received one ISOBlue 2.0 back and it looked like this:\n",Object(o.b)("img",{alt:"broken antenna",src:t(123).default})),Object(o.b)("p",null,"The antennas are both snapped off. Broken antennas mean no cellular connection\nfor ISOBlue 2.0."),Object(o.b)("p",null,"A couple of things that we learned from this:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The antenna connectors become loose over time."),Object(o.b)("li",{parentName:"ul"},"When the antenna connectors become loose, there is not way to adjust or\ntighten them from the outside."),Object(o.b)("li",{parentName:"ul"},"There is no protection between the antenna and the antenna connector; it can\nbe easily snapped off if some heavy weights are accidently placed on the\nantennas (which happens a lot during machine during normal machine operation).")),Object(o.b)("p",null,"We need to come up with a better design and here are some thoughts:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"More debug-friendly antenna connectors for antennas. If a machine operator\nsees the antenna are loose, he or she could fix it without taking the lid off\nof ISOBlue 2.0."),Object(o.b)("li",{parentName:"ul"},"More compact/flat antennas (similar to\n",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"http://www.taoglas.com/product/sentinel-ma251-adhesive-mount-2lte-mimo-antenna/"}),"this one"),")\nrather than these long ones? Can we also place the antenna connectors inside\nthe enclosure?")))}s.isMDXComponent=!0},89:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),s=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=s(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},h=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),h=r,d=p["".concat(i,".").concat(h)]||p[h]||b[h]||o;return t?a.a.createElement(d,c(c({ref:n},u),{},{components:t})):a.a.createElement(d,c({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=h;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=t[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"}}]);