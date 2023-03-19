(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{70:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a(2),r=a(6),l=(a(0),a(89)),o={id:"flashing",title:"Flashing an Image"},i={unversionedId:"sw/flashing",id:"sw/flashing",isDocsHomePage:!1,title:"Flashing an Image",description:"Before You Start ...",source:"@site/docs/sw/flashing.md",permalink:"/docs/sw/flashing",editUrl:"https://github.com/ISOBlue/isoblue.github.io/edit/source/website-v2/docs/sw/flashing.md",sidebar:"someSidebar",previous:{title:"Build Instructions",permalink:"/docs/sw/swbuild"},next:{title:"Setting It Up",permalink:"/docs/sw/setup"}},c=[{value:"Before You Start ...",id:"before-you-start-",children:[]},{value:"Preparing a Flashable SD Card",id:"preparing-a-flashable-sd-card",children:[{value:"Editing <code>rootfs/etc/hosts</code>",id:"editing-rootfsetchosts",children:[]},{value:"Making a Flashable SD card",id:"making-a-flashable-sd-card",children:[]}]},{value:"Flashing",id:"flashing",children:[]}],s={rightToc:c};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"before-you-start-"},"Before You Start ..."),Object(l.b)("p",null,"Here are some stuff you need before you start:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"An microSD card that is at least 4GB."),Object(l.b)("li",{parentName:"ul"},"A USB to serial adapter."),Object(l.b)("li",{parentName:"ul"},"A 5 VDC power supply."),Object(l.b)("li",{parentName:"ul"},"A serial adapter. It would be the best if you get it from ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.toradex.com/products/carrier-board-accessory-kit"}),"Toradex"),"\nsince it needs a correct header to connect to the serial ports on the Ixora\nmodule."),Object(l.b)("li",{parentName:"ul"},"All parts are properly installed.")),Object(l.b)("h2",{id:"preparing-a-flashable-sd-card"},"Preparing a Flashable SD Card"),Object(l.b)("p",null,"After you follow through the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/sw/swbuild"}),"building instructions")," or download\nthe ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://drive.google.com/open?id=0B6AeE6Ne4z3aX0VFXzRVWGNSRjQ"}),"prebuilt ISOBlue image"),", you should have an image tar ball. You would\nneed to extract the tar ball content:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"you@yourpc:~$ sudo tar xvf Isoblue2_apalis-imx6_image_2.7b2-YYYYMMDD.tar.bz2\n")),Object(l.b)("p",null,"After extracting process, the extracted directory will look like the following:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"extracted-dir\n\u2514\u2500\u2500 apalis-imx6_bin\n\u2514\u2500\u2500 imx_flash\n\u2514\u2500\u2500 mnt\n\u2514\u2500\u2500 rootfs\nupdate.sh\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"apalis-imx6_bin")," contains the kernel image ",Object(l.b)("inlineCode",{parentName:"li"},"uImage")," as well as the image\nfiles for flashing purposes."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"imx_flash")," contains custom scripts from Toradex for flashing iMX modules."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"rootfs")," contains all the ISOBlue files that would be flashed onto the\nflash memory.")),Object(l.b)("h3",{id:"editing-rootfsetchosts"},"Editing ",Object(l.b)("inlineCode",{parentName:"h3"},"rootfs/etc/hosts")),Object(l.b)("p",null,"The default ",Object(l.b)("inlineCode",{parentName:"p"},"rootfs/etc/hosts")," contains a hostname that would cause malfunction\nof Kafka. To correct this, change the first line to:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"127.0.0.1 localhost.localdomain   apalis-imx6\n")),Object(l.b)("p",null,"Save the changed file."),Object(l.b)("h3",{id:"making-a-flashable-sd-card"},"Making a Flashable SD card"),Object(l.b)("p",null,"Use ",Object(l.b)("inlineCode",{parentName:"p"},"update.sh")," to make a flashable microSD card:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"you@yourpc:~/ib-image/rootfs$ ./update.sh -o /yourmicroSDcard/mntpt\n")),Object(l.b)("p",null,"After the script finishes, you will have a flashable microSD card."),Object(l.b)("h2",{id:"flashing"},"Flashing"),Object(l.b)("p",null,"Please follow the listed steps:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Connect the serial adapter to the corresponding serial header (X22) on Ixora\nboard. Bring up your favoriate serial terminal."),Object(l.b)("li",{parentName:"ul"},"Insert the flashable microSD card you have prepared to SD card slot (X19)."),Object(l.b)("li",{parentName:"ul"},"Connect the power supply to the Ixora board."),Object(l.b)("li",{parentName:"ul"},"Apply power and hit any key to stop autobooting.")),Object(l.b)("p",null,"After interrupting the boot sequence, you will be put into U-Boot command line."),Object(l.b)("p",null,"Then, for ",Object(l.b)("strong",{parentName:"p"},"Ixora V1.0A"),", do:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"Apalis iMX6 # setenv drive 2\nApalis iMX6 # setenv setupdate 'fatload mmc ${drive}:1 ${loadaddr} flash_mmc.img; source ${loadaddr}'\nApalis iMX6 # setenv fdt_file imx6q-apalis-ixora.dtb\nApalis iMX6 # saveenv\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Reset the board and hit any key to stop autobooting. In U-Boot command line,\ndo:")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"Apalis iMX6 # run setupdate\n")),Object(l.b)("p",null,"and"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"Apalis iMX6 # run update\n")),Object(l.b)("p",null,"For ",Object(l.b)("strong",{parentName:"p"},"Ixora V1.1A"),", you can skip the ",Object(l.b)("inlineCode",{parentName:"p"},"setenv")," and ",Object(l.b)("inlineCode",{parentName:"p"},"saveenv")," commands. After\ndropping into the U-Boot command line for the first time, do:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"Apalis iMX6 # run setupdate\n")),Object(l.b)("p",null,"and"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"Apalis iMX6 # run update\n")),Object(l.b)("p",null,"If the flashing is successful, the device will automatically boot into the\nISOBlue image. Don't turn it off or disconnect anything yet. Please proceed to\n",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/sw/setup"}),"Setting It Up")," to configure the newly flashed ISOBlue 2.0."),Object(l.b)("p",null,"You can also take a look at ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.toradex.com/knowledge-base/flashing-linux-on-imx6-modules#Apalis_iMX6"}),"Toradex's instructions")," for flashing an image as\nthis documentaion is referenced heavily upon this resource."))}b.isMDXComponent=!0},89:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(a),d=n,m=p["".concat(o,".").concat(d)]||p[d]||u[d]||l;return a?r.a.createElement(m,i(i({ref:t},s),{},{components:a})):r.a.createElement(m,i({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);