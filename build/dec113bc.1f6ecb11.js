(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(114)),i=["components"],c={id:"upgrading02",title:"Upgrading from 0.1.x to 0.2.x",sidebar_label:"Upgrading from 0.1.x to 0.2.x"},s={unversionedId:"upgrading02",id:"upgrading02",isDocsHomePage:!1,title:"Upgrading from 0.1.x to 0.2.x",description:"Basic upgrade",source:"@site/docs\\upgrading.md",slug:"/upgrading02",permalink:"/docs/upgrading02",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/upgrading.md",version:"current",sidebar_label:"Upgrading from 0.1.x to 0.2.x",sidebar:"someSidebar",previous:{title:"Installation without Expo",permalink:"/docs/installation-without-expo"},next:{title:"ThemeProvider",permalink:"/docs/themeProvider"}},p=[{value:"Basic upgrade",id:"basic-upgrade",children:[]},{value:"Color import",id:"color-import",children:[]},{value:"Preload and caching assets",id:"preload-and-caching-assets",children:[]}],l={toc:p};function u(e){var t=e.components,n=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"basic-upgrade"},"Basic upgrade"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Remove useCachedResource from root"),Object(a.b)("li",{parentName:"ol"},"Wrap your root component with ",Object(a.b)("inlineCode",{parentName:"li"},"<ThemeProvider />"))),Object(a.b)("p",null,"from this"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},'import { useCachedResources } from "react-native-rapi-ui";\n\nconst App = () => {\n  const isLoadingComplete = useCachedResources();\n  if (!isLoadingComplete) {\n    return <Loading />;\n  } else {\n    return <HomeScreen />;\n  }\n};\n\nexport default App;\n')),Object(a.b)("p",null,"to this"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},'import { ThemeProvider } from "react-native-rapi-ui";\n\nconst App = () => {\n  return (\n    <ThemeProvider theme="light">\n      <Navigator />\n    </ThemeProvider>\n  );\n};\n\nexport default App;\n')),Object(a.b)("h3",{id:"color-import"},"Color import"),Object(a.b)("p",null,"in version 0.2.x ",Object(a.b)("inlineCode",{parentName:"p"},"theme")," for importing color is now changed to ",Object(a.b)("inlineCode",{parentName:"p"},"themeColor")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},'import { themeColor } from "react-native-rapi-ui";\n')),Object(a.b)("h3",{id:"preload-and-caching-assets"},"Preload and caching assets"),Object(a.b)("p",null,"put your images and font into the ",Object(a.b)("inlineCode",{parentName:"p"},"<ThemeProvider />")," props"),Object(a.b)("p",null,"from this"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"const isLoadingComplete = useCachedResources(\n    [\n        require('./assets/logo'),\n        require('./assets/headerImage')\n    ],\n        {\n            otherFont1: require('../fonts/otherFont1.ttf'),\n            otherFont2: require('../fonts/otherFont2.ttf'),\n            otherFont3: require('../fonts/otherFont3.ttf'),\n        }\n    );\n    if (!isLoadingComplete) {\n        return <Loading />;\n    } else {\n        return <HomeScreen />;\n    }\n};\n\n")),Object(a.b)("p",null,"to this"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},'const images = [require("./assets/logo"), require("./assets/headerImage")];\nconst fonts = {\n  otherFont1: require("../fonts/otherFont1.ttf"),\n  otherFont2: require("../fonts/otherFont2.ttf"),\n  otherFont3: require("../fonts/otherFont3.ttf"),\n};\n\n<ThemeProvider theme="light" images={images} fonts={fonts}>\n  <Navigator />\n</ThemeProvider>;\n')))}u.isMDXComponent=!0},114:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return n?o.a.createElement(b,c(c({ref:t},p),{},{components:n})):o.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);