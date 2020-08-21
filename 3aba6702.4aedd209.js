(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{122:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/can_logging-319241971f6867567fe59997b44c0d0a.png"},66:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),o=(n(0),n(89)),i={title:"ISOBlue 2.0 Explained (Part 1): CAN Logging",author:"Yang Wang",authorURL:"https://github.com/wang701"},s={permalink:"/blog/2019/05/21/can-logging",editUrl:"https://github.com/ISOBlue/isoblue.github.io/edit/source/website-v2/blog/2019-05-21-can-logging.md",source:"@site/blog/2019-05-21-can-logging.md",description:"The CAN data logging on ISOBlue 2.0s' is fully automatic. Machine operators need",date:"2019-05-21T00:00:00.000Z",tags:[],title:"ISOBlue 2.0 Explained (Part 1): CAN Logging",readingTime:4.77,truncated:!0,nextItem:{title:"Embrace Yourself",permalink:"/blog/2019/05/16/isobluehd"}},c=[{value:"udev",id:"udev",children:[]},{value:"systemd",id:"systemd",children:[]},{value:"CAN Logging Workflow",id:"can-logging-workflow",children:[{value:"System Boots",id:"system-boots",children:[]},{value:"CAN Devices Ready",id:"can-devices-ready",children:[]},{value:"Pink Node",id:"pink-node",children:[]},{value:"First Blue Node",id:"first-blue-node",children:[]},{value:"Zookeeper Up",id:"zookeeper-up",children:[]},{value:"Kafka Broker Up",id:"kafka-broker-up",children:[]},{value:"<code>systemdctl suspend</code> and System Suspends",id:"systemdctl-suspend-and-system-suspends",children:[]},{value:"System Wakes Up",id:"system-wakes-up",children:[]}]}],l={rightToc:c};function u(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The CAN data logging on ISOBlue 2.0s' is fully automatic. Machine operators need\nto install ISOBlues once and these little boxes will take care of the logging of\nCAN streams coming from the tractor and the implement busses. No human\nintervention needed."),Object(o.b)("p",null,"How does everything work under the hood?"),Object(o.b)("p",null,"In this part of the series, we will look into how ISOBlue 2.0 works in terms\nof CAN data logging."),Object(o.b)("p",null,"As ISOBlues run on a customized version of Linux. Let us go over two basic\nconcepts in Linux first:"),Object(o.b)("h2",{id:"udev"},"udev"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"udev")," is the device manager for the Linux kernel. It handles all user space\nevents when hardware devices are added and removed. It primarily manages device\nnodes in the ",Object(o.b)("inlineCode",{parentName:"p"},"/dev")," directory in Linux. For instance, if you plug in a wireless\nmouse to your computer, as long as your Linux distribution has the proper driver\nfor it, ",Object(o.b)("inlineCode",{parentName:"p"},"udev")," will correspondently match the mouse's ",Object(o.b)("inlineCode",{parentName:"p"},"device ID"),", load the\ndriver for you, and voila, you will be move your cursor and navigate your way\nwithin your desktop environment."),Object(o.b)("p",null,"Moreover, you can also write custom ",Object(o.b)("inlineCode",{parentName:"p"},"udev")," rules for running custom scripts\nwhenever a known device is installed onto a system."),Object(o.b)("p",null,"You can read more about it in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.freedesktop.org/software/systemd/man/udev.html"}),"here"),"."),Object(o.b)("h2",{id:"systemd"},"systemd"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"systemd")," is a software suite that handles system/user service configurations\nand manages processes in a Linux operation system. You can start, stop, and\nrestart background services. In addition, you can monitor the statuses of your\nbackground services using ",Object(o.b)("inlineCode",{parentName:"p"},"systemd"),"."),Object(o.b)("p",null,"You can read more about it in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.freedesktop.org/wiki/Software/systemd/"}),"here"),"."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The CAN data logging part of ISOBlue relies on these two tools heavily. Once\nyou get an idea of what they are for, then the whole workflow which I am about\nto explain is just a piece-of-cake to understand.")),Object(o.b)("h2",{id:"can-logging-workflow"},"CAN Logging Workflow"),Object(o.b)("p",null,"You can see from the picture below that the workflow is represented with nodes\nwithin a timeline. Each node on the timeline represents an important event in\nour workflow. Now, imagine you are carrying an ISOBlue and want to deploy it in\none of your tractors. You plugged in one end of the ISOBUS diagnostic cable into\nthe diagnostic port and the other end to your ISOBlue. Here are what will\nhappen."),Object(o.b)("p",null,Object(o.b)("img",{alt:"CAN logging workflow",src:n(122).default})),Object(o.b)("h3",{id:"system-boots"},"System Boots"),Object(o.b)("p",null,"This indicates the startup sequence of the ISOBlue. The kernel is working hard\nat this point to have all the required system services up and running as well as\nregistering all the devices along with their drivers."),Object(o.b)("h3",{id:"can-devices-ready"},"CAN Devices Ready"),Object(o.b)("p",null,"At this point, the two CAN interfaces available on the ISOBlue are enumerated as\n",Object(o.b)("inlineCode",{parentName:"p"},"can0")," and ",Object(o.b)("inlineCode",{parentName:"p"},"can1")," in ",Object(o.b)("inlineCode",{parentName:"p"},"/dev"),"."),Object(o.b)("h3",{id:"pink-node"},"Pink Node"),Object(o.b)("p",null,"As soon as ",Object(o.b)("inlineCode",{parentName:"p"},"udev")," sees the CAN interfaces are available, it triggers the ",Object(o.b)("inlineCode",{parentName:"p"},"udev"),"\nrule ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ISOBlue/isoblue2/blob/v2.7/udev/70-isoblue2-can.rules"}),Object(o.b)("inlineCode",{parentName:"a"},"70-isoblue2-can.rules")),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'# CAN interface on tractor bus\nKERNEL=="can[0-9]*", KERNELS=="2090000.can", NAME="tra", TAG+="systemd", ENV{SYSTEMD_WANTS}="can_up@tra.service"\n\n# CAN interface on implement bus\nKERNEL=="can[0-9]*", KERNELS=="2094000.can", NAME="imp", TAG+="systemd", ENV{SYSTEMD_WANTS}="can_up@imp.service"\n')),Object(o.b)("p",null,"This ",Object(o.b)("inlineCode",{parentName:"p"},"udev")," rule will rename ",Object(o.b)("inlineCode",{parentName:"p"},"can0")," and ",Object(o.b)("inlineCode",{parentName:"p"},"can1")," to ",Object(o.b)("inlineCode",{parentName:"p"},"tra")," (tractor bus) and ",Object(o.b)("inlineCode",{parentName:"p"},"imp"),"\n(implement bus). It will also trigger two ",Object(o.b)("inlineCode",{parentName:"p"},"systemd")," ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ISOBlue/isoblue2/blob/v2.7/systemd/can_up%40.service"}),"services")," to properly\nset up the two interfaces with the correct baudrates."),Object(o.b)("p",null,"Moreover, it also triggers another ",Object(o.b)("inlineCode",{parentName:"p"},"udev")," rule ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ISOBlue/isoblue2/blob/v2.7/udev/80-wakeoncan.rules"}),Object(o.b)("inlineCode",{parentName:"a"},"80-wakeoncan.rules")),". This\nrule enables the wake-on-CAN features on two CAN interfaces. Now, the two CAN\ninterfaces of the ISOBlue are propertly configured."),Object(o.b)("h3",{id:"first-blue-node"},"First Blue Node"),Object(o.b)("p",null,"Shortly after the interfaces are set, the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ISOBlue/isoblue2/blob/v2.7/systemd/can-watchdog.service"}),Object(o.b)("inlineCode",{parentName:"a"},"can-watchdog"))," service will\nstart. The service runs a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ISOBlue/isoblue2/blob/v2.7/software/producer/can_watchdog/can_watchdog.c"}),"program")," that monitors the CAN activities on the\ntwo CAN interfaces. Whenever there is no CAN activity for 5 seconds, the program\nwill issue a suspend command to the system."),Object(o.b)("h3",{id:"zookeeper-up"},"Zookeeper Up"),Object(o.b)("p",null,"This indicates the Zookeeper is up and running in the ISOBlue."),Object(o.b)("h3",{id:"kafka-broker-up"},"Kafka Broker Up"),Object(o.b)("p",null,"A Kafka broker is then brought up by a ",Object(o.b)("inlineCode",{parentName:"p"},"systemd")," ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ISOBlue/isoblue2/blob/v2.7/systemd/broker.service"}),"service"),". Note the\n",Object(o.b)("inlineCode",{parentName:"p"},"Requires")," line in the systemd service file. The ",Object(o.b)("inlineCode",{parentName:"p"},"Requires")," is a systemd unit\ndependency directive. It means that, in this context, it requires all the\nservices after the equal sign to run as long as the Kafka broker is up."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"[Unit]\nDescription=Apache Kafka Broker Service\nDocumentation=http://kafka.apache.org/documentation.html\nRequires=zookeeper.service can-log-limp.service can-log-ltra.service can-log-rimp.service can-log-rtra.service can-d-mr-imp.service can-d-mr-tra.service heartbeat.service\nBefore=shutdown.target sleep.target\nAfter=network.target dev-sda1.device zookeeper.service\nConditionPathExists=/opt/kafka\n\n[Service]\nType=simple\nExecStart=/opt/kafka/bin/kafka-server-start.sh /opt/kafka/config/server.properties\nExecStop=/opt/kafka/bin/kafka-server-stop.sh\nRestart=on-failure\nRestartSec=10\n")),Object(o.b)("p",null,"Therefore, the broker service spawns four CAN logging services:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"can-log-ltra")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"can-log-limp")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"can-log-rtra")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"can-log-rimp"))),Object(o.b)("p",null,'The letter "',Object(o.b)("strong",{parentName:"p"},"l"),'" stands for ',Object(o.b)("strong",{parentName:"p"},"local"),' and "',Object(o.b)("strong",{parentName:"p"},"r"),'" stands for ',Object(o.b)("strong",{parentName:"p"},"remote"),". For\nthe local Kafka CAN logging services, they logs every single CAN message and\nappend all of them to Kafka. On the other hand, the remote services log only the\nmessages specified by a PGN list file. Both local and remote services run the\nsame ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ISOBlue/isoblue2/blob/v2.7/software/producer/kafka_can_log/kafka_can_log.c"}),"program"),"; different flags are utilized to have them running in\ndifferent modes."),Object(o.b)("h3",{id:"systemdctl-suspend-and-system-suspends"},Object(o.b)("inlineCode",{parentName:"h3"},"systemdctl suspend")," and System Suspends"),Object(o.b)("p",null,"Now say you have driven your tractor for some time and need to take a lunch\nbreak. You turn your key and the tractor is off. Now the ",Object(o.b)("inlineCode",{parentName:"p"},"can-watchdog")," is not\nhappy, the program cannot see any CAN activity on the CAN interfaces so it tells\nthe ISOBlue to go to suspend."),Object(o.b)("p",null,"Before going to suspend, all system states will be saved to memory and shortly\nafter ",Object(o.b)("inlineCode",{parentName:"p"},"systemctl suspend")," has been issued, the ISOBlue goes to suspend."),Object(o.b)("h3",{id:"system-wakes-up"},"System Wakes Up"),Object(o.b)("p",null,"Now you are back from your lunch break and need to get back to work. You turn on\nthe tractor. Since the CAN interfaces are configured to wake on CAN, the system\nresumes from the suspend state to normal. The system is then restored to\nwherever it was left off earlier and start to collect more data."),Object(o.b)("p",null,"That's pretty much it. Hope you enjoy the first part of ISOBlue Explained!"))}u.isMDXComponent=!0},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,h=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?r.a.createElement(h,s(s({ref:t},l),{},{components:n})):r.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);