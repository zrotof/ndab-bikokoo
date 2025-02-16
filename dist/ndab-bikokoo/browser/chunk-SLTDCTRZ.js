import{d as i2}from"./chunk-LYNNH4BW.js";import{Cb as e2,Db as s2,Ha as Y1,N as t1,O as j1,Pa as K1,Qa as k,T as _1,Wa as m1,Xa as Q1,Ya as J1,Z as Q,Za as $1,ec as r2,hb as c2,la as X1,yb as a2}from"./chunk-MMDD2HJG.js";function y3(c,a,e){return(a=T3(a))in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function f2(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(c);a&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),e.push.apply(e,s)}return e}function l(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?f2(Object(e),!0).forEach(function(s){y3(c,s,e[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):f2(Object(e)).forEach(function(s){Object.defineProperty(c,s,Object.getOwnPropertyDescriptor(e,s))})}return c}function P3(c,a){if(typeof c!="object"||!c)return c;var e=c[Symbol.toPrimitive];if(e!==void 0){var s=e.call(c,a||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(c)}function T3(c){var a=P3(c,"string");return typeof a=="symbol"?a:a+""}var l2=()=>{},F1={},T2={},F2=null,B2={mark:l2,measure:l2};try{typeof window<"u"&&(F1=window),typeof document<"u"&&(T2=document),typeof MutationObserver<"u"&&(F2=MutationObserver),typeof performance<"u"&&(B2=performance)}catch{}var{userAgent:n2=""}=F1.navigator||{},y=F1,h=T2,o2=F2,J=B2,Z6=!!y.document,S=!!h.documentElement&&!!h.head&&typeof h.addEventListener=="function"&&typeof h.createElement=="function",D2=~n2.indexOf("MSIE")||~n2.indexOf("Trident/"),F3=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,B3=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,R2={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},D3={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},q2=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],V="classic",r1="duotone",R3="sharp",q3="sharp-duotone",E2=[V,r1,R3,q3],E3={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},U3={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},I3=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),G3={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},W3=["fak","fa-kit","fakd","fa-kit-duotone"],t2={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},O3=["kit"],Z3={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},j3=["fak","fakd"],_3={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},m2={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},$={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},X3=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Y3=["fak","fa-kit","fakd","fa-kit-duotone"],K3={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Q3={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},J3={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},M1={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},$3=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],C1=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...X3,...$3],c4=["solid","regular","light","thin","duotone","brands"],U2=[1,2,3,4,5,6,7,8,9,10],a4=U2.concat([11,12,13,14,15,16,17,18,19,20]),e4=[...Object.keys(J3),...c4,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",$.GROUP,$.SWAP_OPACITY,$.PRIMARY,$.SECONDARY].concat(U2.map(c=>"".concat(c,"x"))).concat(a4.map(c=>"w-".concat(c))),s4={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},b="___FONT_AWESOME___",p1=16,I2="fa",G2="svg-inline--fa",D="data-fa-i2svg",L1="data-fa-pseudo-element",r4="data-fa-pseudo-element-pending",B1="data-prefix",D1="data-icon",z2="fontawesome-i2svg",i4="async",f4=["HTML","HEAD","STYLE","SCRIPT"],W2=(()=>{try{return!0}catch{return!1}})();function Y(c){return new Proxy(c,{get(a,e){return e in a?a[e]:a[V]}})}var O2=l({},R2);O2[V]=l(l(l(l({},{"fa-duotone":"duotone"}),R2[V]),t2.kit),t2["kit-duotone"]);var l4=Y(O2),u1=l({},G3);u1[V]=l(l(l(l({},{duotone:"fad"}),u1[V]),m2.kit),m2["kit-duotone"]);var v2=Y(u1),d1=l({},M1);d1[V]=l(l({},d1[V]),_3.kit);var R1=Y(d1),g1=l({},Q3);g1[V]=l(l({},g1[V]),Z3.kit);var j6=Y(g1),n4=F3,Z2="fa-layers-text",o4=B3,t4=l({},E3),_6=Y(t4),m4=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],z1=D3,z4=[...O3,...e4],Z=y.FontAwesomeConfig||{};function v4(c){var a=h.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function H4(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}h&&typeof h.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(a=>{let[e,s]=a,r=H4(v4(e));r!=null&&(Z[s]=r)});var j2={styleDefault:"solid",familyDefault:V,cssPrefix:I2,replacementClass:G2,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Z.familyPrefix&&(Z.cssPrefix=Z.familyPrefix);var G=l(l({},j2),Z);G.autoReplaceSvg||(G.observeMutations=!1);var o={};Object.keys(j2).forEach(c=>{Object.defineProperty(o,c,{enumerable:!0,set:function(a){G[c]=a,j.forEach(e=>e(o))},get:function(){return G[c]}})});Object.defineProperty(o,"familyPrefix",{enumerable:!0,set:function(c){G.cssPrefix=c,j.forEach(a=>a(o))},get:function(){return G.cssPrefix}});y.FontAwesomeConfig=o;var j=[];function h4(c){return j.push(c),()=>{j.splice(j.indexOf(c),1)}}var w=p1,d={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function V4(c){if(!c||!S)return;let a=h.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;let e=h.head.childNodes,s=null;for(let r=e.length-1;r>-1;r--){let i=e[r],f=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(f)>-1&&(s=i)}return h.head.insertBefore(a,s),c}var M4="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function _(){let c=12,a="";for(;c-- >0;)a+=M4[Math.random()*62|0];return a}function W(c){let a=[];for(let e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function q1(c){return c.classList?W(c.classList):(c.getAttribute("class")||"").split(" ").filter(a=>a)}function _2(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function C4(c){return Object.keys(c||{}).reduce((a,e)=>a+"".concat(e,'="').concat(_2(c[e]),'" '),"").trim()}function i1(c){return Object.keys(c||{}).reduce((a,e)=>a+"".concat(e,": ").concat(c[e].trim(),";"),"")}function E1(c){return c.size!==d.size||c.x!==d.x||c.y!==d.y||c.rotate!==d.rotate||c.flipX||c.flipY}function p4(c){let{transform:a,containerWidth:e,iconWidth:s}=c,r={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),n="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(i," ").concat(f," ").concat(n)},t={transform:"translate(".concat(s/2*-1," -256)")};return{outer:r,inner:m,path:t}}function L4(c){let{transform:a,width:e=p1,height:s=p1,startCentered:r=!1}=c,i="";return r&&D2?i+="translate(".concat(a.x/w-e/2,"em, ").concat(a.y/w-s/2,"em) "):r?i+="translate(calc(-50% + ".concat(a.x/w,"em), calc(-50% + ").concat(a.y/w,"em)) "):i+="translate(".concat(a.x/w,"em, ").concat(a.y/w,"em) "),i+="scale(".concat(a.size/w*(a.flipX?-1:1),", ").concat(a.size/w*(a.flipY?-1:1),") "),i+="rotate(".concat(a.rotate,"deg) "),i}var u4=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function X2(){let c=I2,a=G2,e=o.cssPrefix,s=o.replacementClass,r=u4;if(e!==c||s!==a){let i=new RegExp("\\.".concat(c,"\\-"),"g"),f=new RegExp("\\--".concat(c,"\\-"),"g"),n=new RegExp("\\.".concat(a),"g");r=r.replace(i,".".concat(e,"-")).replace(f,"--".concat(e,"-")).replace(n,".".concat(s))}return r}var H2=!1;function v1(){o.autoAddCss&&!H2&&(V4(X2()),H2=!0)}var d4={mixout(){return{dom:{css:X2,insertCss:v1}}},hooks(){return{beforeDOMElementCreation(){v1()},beforeI2svg(){v1()}}}},N=y||{};N[b]||(N[b]={});N[b].styles||(N[b].styles={});N[b].hooks||(N[b].hooks={});N[b].shims||(N[b].shims=[]);var g=N[b],Y2=[],K2=function(){h.removeEventListener("DOMContentLoaded",K2),e1=1,Y2.map(c=>c())},e1=!1;S&&(e1=(h.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(h.readyState),e1||h.addEventListener("DOMContentLoaded",K2));function g4(c){S&&(e1?setTimeout(c,0):Y2.push(c))}function K(c){let{tag:a,attributes:e={},children:s=[]}=c;return typeof c=="string"?_2(c):"<".concat(a," ").concat(C4(e),">").concat(s.map(K).join(""),"</").concat(a,">")}function h2(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var x4=function(a,e){return function(s,r,i,f){return a.call(e,s,r,i,f)}},H1=function(a,e,s,r){var i=Object.keys(a),f=i.length,n=r!==void 0?x4(e,r):e,m,t,z;for(s===void 0?(m=1,z=a[i[0]]):(m=0,z=s);m<f;m++)t=i[m],z=n(z,a[t],t,a);return z};function b4(c){let a=[],e=0,s=c.length;for(;e<s;){let r=c.charCodeAt(e++);if(r>=55296&&r<=56319&&e<s){let i=c.charCodeAt(e++);(i&64512)==56320?a.push(((r&1023)<<10)+(i&1023)+65536):(a.push(r),e--)}else a.push(r)}return a}function x1(c){let a=b4(c);return a.length===1?a[0].toString(16):null}function N4(c,a){let e=c.length,s=c.charCodeAt(a),r;return s>=55296&&s<=56319&&e>a+1&&(r=c.charCodeAt(a+1),r>=56320&&r<=57343)?(s-55296)*1024+r-56320+65536:s}function V2(c){return Object.keys(c).reduce((a,e)=>{let s=c[e];return!!s.icon?a[s.iconName]=s.icon:a[e]=s,a},{})}function b1(c,a){let e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:s=!1}=e,r=V2(a);typeof g.hooks.addPack=="function"&&!s?g.hooks.addPack(c,V2(a)):g.styles[c]=l(l({},g.styles[c]||{}),r),c==="fas"&&b1("fa",a)}var{styles:X,shims:S4}=g,Q2=Object.keys(R1),A4=Q2.reduce((c,a)=>(c[a]=Object.keys(R1[a]),c),{}),U1=null,J2={},$2={},c3={},a3={},e3={};function k4(c){return~z4.indexOf(c)}function w4(c,a){let e=a.split("-"),s=e[0],r=e.slice(1).join("-");return s===c&&r!==""&&!k4(r)?r:null}var s3=()=>{let c=s=>H1(X,(r,i,f)=>(r[f]=H1(i,s,{}),r),{});J2=c((s,r,i)=>(r[3]&&(s[r[3]]=i),r[2]&&r[2].filter(n=>typeof n=="number").forEach(n=>{s[n.toString(16)]=i}),s)),$2=c((s,r,i)=>(s[i]=i,r[2]&&r[2].filter(n=>typeof n=="string").forEach(n=>{s[n]=i}),s)),e3=c((s,r,i)=>{let f=r[2];return s[i]=i,f.forEach(n=>{s[n]=i}),s});let a="far"in X||o.autoFetchSvg,e=H1(S4,(s,r)=>{let i=r[0],f=r[1],n=r[2];return f==="far"&&!a&&(f="fas"),typeof i=="string"&&(s.names[i]={prefix:f,iconName:n}),typeof i=="number"&&(s.unicodes[i.toString(16)]={prefix:f,iconName:n}),s},{names:{},unicodes:{}});c3=e.names,a3=e.unicodes,U1=f1(o.styleDefault,{family:o.familyDefault})};h4(c=>{U1=f1(c.styleDefault,{family:o.familyDefault})});s3();function I1(c,a){return(J2[c]||{})[a]}function y4(c,a){return($2[c]||{})[a]}function B(c,a){return(e3[c]||{})[a]}function r3(c){return c3[c]||{prefix:null,iconName:null}}function P4(c){let a=a3[c],e=I1("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function P(){return U1}var i3=()=>({prefix:null,iconName:null,rest:[]});function T4(c){let a=V,e=Q2.reduce((s,r)=>(s[r]="".concat(o.cssPrefix,"-").concat(r),s),{});return E2.forEach(s=>{(c.includes(e[s])||c.some(r=>A4[s].includes(r)))&&(a=s)}),a}function f1(c){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:e=V}=a,s=l4[e][c];if(e===r1&&!c)return"fad";let r=v2[e][c]||v2[e][s],i=c in g.styles?c:null;return r||i||null}function F4(c){let a=[],e=null;return c.forEach(s=>{let r=w4(o.cssPrefix,s);r?e=r:s&&a.push(s)}),{iconName:e,rest:a}}function M2(c){return c.sort().filter((a,e,s)=>s.indexOf(a)===e)}function l1(c){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:e=!1}=a,s=null,r=C1.concat(Y3),i=M2(c.filter(H=>r.includes(H))),f=M2(c.filter(H=>!C1.includes(H))),n=i.filter(H=>(s=H,!q2.includes(H))),[m=null]=n,t=T4(i),z=l(l({},F4(f)),{},{prefix:f1(m,{family:t})});return l(l(l({},z),q4({values:c,family:t,styles:X,config:o,canonical:z,givenPrefix:s})),B4(e,s,z))}function B4(c,a,e){let{prefix:s,iconName:r}=e;if(c||!s||!r)return{prefix:s,iconName:r};let i=a==="fa"?r3(r):{},f=B(s,r);return r=i.iconName||f||r,s=i.prefix||s,s==="far"&&!X.far&&X.fas&&!o.autoFetchSvg&&(s="fas"),{prefix:s,iconName:r}}var D4=E2.filter(c=>c!==V||c!==r1),R4=Object.keys(M1).filter(c=>c!==V).map(c=>Object.keys(M1[c])).flat();function q4(c){let{values:a,family:e,canonical:s,givenPrefix:r="",styles:i={},config:f={}}=c,n=e===r1,m=a.includes("fa-duotone")||a.includes("fad"),t=f.familyDefault==="duotone",z=s.prefix==="fad"||s.prefix==="fa-duotone";if(!n&&(m||t||z)&&(s.prefix="fad"),(a.includes("fa-brands")||a.includes("fab"))&&(s.prefix="fab"),!s.prefix&&D4.includes(e)&&(Object.keys(i).find(v=>R4.includes(v))||f.autoFetchSvg)){let v=I3.get(e).defaultShortPrefixId;s.prefix=v,s.iconName=B(s.prefix,s.iconName)||s.iconName}return(s.prefix==="fa"||r==="fa")&&(s.prefix=P()||"fas"),s}var N1=class{constructor(){this.definitions={}}add(){for(var a=arguments.length,e=new Array(a),s=0;s<a;s++)e[s]=arguments[s];let r=e.reduce(this._pullDefinitions,{});Object.keys(r).forEach(i=>{this.definitions[i]=l(l({},this.definitions[i]||{}),r[i]),b1(i,r[i]);let f=R1[V][i];f&&b1(f,r[i]),s3()})}reset(){this.definitions={}}_pullDefinitions(a,e){let s=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(s).map(r=>{let{prefix:i,iconName:f,icon:n}=s[r],m=n[2];a[i]||(a[i]={}),m.length>0&&m.forEach(t=>{typeof t=="string"&&(a[i][t]=n)}),a[i][f]=n}),a}},C2=[],U={},I={},E4=Object.keys(I);function U4(c,a){let{mixoutsTo:e}=a;return C2=c,U={},Object.keys(I).forEach(s=>{E4.indexOf(s)===-1&&delete I[s]}),C2.forEach(s=>{let r=s.mixout?s.mixout():{};if(Object.keys(r).forEach(i=>{typeof r[i]=="function"&&(e[i]=r[i]),typeof r[i]=="object"&&Object.keys(r[i]).forEach(f=>{e[i]||(e[i]={}),e[i][f]=r[i][f]})}),s.hooks){let i=s.hooks();Object.keys(i).forEach(f=>{U[f]||(U[f]=[]),U[f].push(i[f])})}s.provides&&s.provides(I)}),e}function S1(c,a){for(var e=arguments.length,s=new Array(e>2?e-2:0),r=2;r<e;r++)s[r-2]=arguments[r];return(U[c]||[]).forEach(f=>{a=f.apply(null,[a,...s])}),a}function R(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),s=1;s<a;s++)e[s-1]=arguments[s];(U[c]||[]).forEach(i=>{i.apply(null,e)})}function T(){let c=arguments[0],a=Array.prototype.slice.call(arguments,1);return I[c]?I[c].apply(null,a):void 0}function A1(c){c.prefix==="fa"&&(c.prefix="fas");let{iconName:a}=c,e=c.prefix||P();if(a)return a=B(e,a)||a,h2(f3.definitions,e,a)||h2(g.styles,e,a)}var f3=new N1,I4=()=>{o.autoReplaceSvg=!1,o.observeMutations=!1,R("noAuto")},G4={i2svg:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return S?(R("beforeI2svg",c),T("pseudoElements2svg",c),T("i2svg",c)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:a}=c;o.autoReplaceSvg===!1&&(o.autoReplaceSvg=!0),o.observeMutations=!0,g4(()=>{O4({autoReplaceSvgRoot:a}),R("watch",c)})}},W4={icon:c=>{if(c===null)return null;if(typeof c=="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:B(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){let a=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],e=f1(c[0]);return{prefix:e,iconName:B(e,a)||a}}if(typeof c=="string"&&(c.indexOf("".concat(o.cssPrefix,"-"))>-1||c.match(n4))){let a=l1(c.split(" "),{skipLookups:!0});return{prefix:a.prefix||P(),iconName:B(a.prefix,a.iconName)||a.iconName}}if(typeof c=="string"){let a=P();return{prefix:a,iconName:B(a,c)||c}}}},p={noAuto:I4,config:o,dom:G4,parse:W4,library:f3,findIconDefinition:A1,toHtml:K},O4=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:a=h}=c;(Object.keys(g.styles).length>0||o.autoFetchSvg)&&S&&o.autoReplaceSvg&&p.dom.i2svg({node:a})};function n1(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(e=>K(e))}}),Object.defineProperty(c,"node",{get:function(){if(!S)return;let e=h.createElement("div");return e.innerHTML=c.html,e.children}}),c}function Z4(c){let{children:a,main:e,mask:s,attributes:r,styles:i,transform:f}=c;if(E1(f)&&e.found&&!s.found){let{width:n,height:m}=e,t={x:n/m/2,y:.5};r.style=i1(l(l({},i),{},{"transform-origin":"".concat(t.x+f.x/16,"em ").concat(t.y+f.y/16,"em")}))}return[{tag:"svg",attributes:r,children:a}]}function j4(c){let{prefix:a,iconName:e,children:s,attributes:r,symbol:i}=c,f=i===!0?"".concat(a,"-").concat(o.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l(l({},r),{},{id:f}),children:s}]}]}function G1(c){let{icons:{main:a,mask:e},prefix:s,iconName:r,transform:i,symbol:f,title:n,maskId:m,titleId:t,extra:z,watchable:H=!1}=c,{width:v,height:M}=e.found?e:a,A=j3.includes(s),F=[o.replacementClass,r?"".concat(o.cssPrefix,"-").concat(r):""].filter(E=>z.classes.indexOf(E)===-1).filter(E=>E!==""||!!E).concat(z.classes).join(" "),L={children:[],attributes:l(l({},z.attributes),{},{"data-prefix":s,"data-icon":r,class:F,role:z.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(M)})},x=A&&!~z.classes.indexOf("fa-fw")?{width:"".concat(v/M*16*.0625,"em")}:{};H&&(L.attributes[D]=""),n&&(L.children.push({tag:"title",attributes:{id:L.attributes["aria-labelledby"]||"title-".concat(t||_())},children:[n]}),delete L.attributes.title);let C=l(l({},L),{},{prefix:s,iconName:r,main:a,mask:e,maskId:m,transform:i,symbol:f,styles:l(l({},x),z.styles)}),{children:u,attributes:q}=e.found&&a.found?T("generateAbstractMask",C)||{children:[],attributes:{}}:T("generateAbstractIcon",C)||{children:[],attributes:{}};return C.children=u,C.attributes=q,f?j4(C):Z4(C)}function p2(c){let{content:a,width:e,height:s,transform:r,title:i,extra:f,watchable:n=!1}=c,m=l(l(l({},f.attributes),i?{title:i}:{}),{},{class:f.classes.join(" ")});n&&(m[D]="");let t=l({},f.styles);E1(r)&&(t.transform=L4({transform:r,startCentered:!0,width:e,height:s}),t["-webkit-transform"]=t.transform);let z=i1(t);z.length>0&&(m.style=z);let H=[];return H.push({tag:"span",attributes:m,children:[a]}),i&&H.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),H}function _4(c){let{content:a,title:e,extra:s}=c,r=l(l(l({},s.attributes),e?{title:e}:{}),{},{class:s.classes.join(" ")}),i=i1(s.styles);i.length>0&&(r.style=i);let f=[];return f.push({tag:"span",attributes:r,children:[a]}),e&&f.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),f}var{styles:h1}=g;function k1(c){let a=c[0],e=c[1],[s]=c.slice(4),r=null;return Array.isArray(s)?r={tag:"g",attributes:{class:"".concat(o.cssPrefix,"-").concat(z1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(o.cssPrefix,"-").concat(z1.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(o.cssPrefix,"-").concat(z1.PRIMARY),fill:"currentColor",d:s[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:a,height:e,icon:r}}var X4={found:!1,width:512,height:512};function Y4(c,a){!W2&&!o.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function w1(c,a){let e=a;return a==="fa"&&o.styleDefault!==null&&(a=P()),new Promise((s,r)=>{if(e==="fa"){let i=r3(c)||{};c=i.iconName||c,a=i.prefix||a}if(c&&a&&h1[a]&&h1[a][c]){let i=h1[a][c];return s(k1(i))}Y4(c,a),s(l(l({},X4),{},{icon:o.showMissingIcons&&c?T("missingIconAbstract")||{}:{}}))})}var L2=()=>{},y1=o.measurePerformance&&J&&J.mark&&J.measure?J:{mark:L2,measure:L2},O='FA "6.7.2"',K4=c=>(y1.mark("".concat(O," ").concat(c," begins")),()=>l3(c)),l3=c=>{y1.mark("".concat(O," ").concat(c," ends")),y1.measure("".concat(O," ").concat(c),"".concat(O," ").concat(c," begins"),"".concat(O," ").concat(c," ends"))},W1={begin:K4,end:l3},c1=()=>{};function u2(c){return typeof(c.getAttribute?c.getAttribute(D):null)=="string"}function Q4(c){let a=c.getAttribute?c.getAttribute(B1):null,e=c.getAttribute?c.getAttribute(D1):null;return a&&e}function J4(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(o.replacementClass)}function $4(){return o.autoReplaceSvg===!0?a1.replace:a1[o.autoReplaceSvg]||a1.replace}function c6(c){return h.createElementNS("http://www.w3.org/2000/svg",c)}function a6(c){return h.createElement(c)}function n3(c){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:e=c.tag==="svg"?c6:a6}=a;if(typeof c=="string")return h.createTextNode(c);let s=e(c.tag);return Object.keys(c.attributes||[]).forEach(function(i){s.setAttribute(i,c.attributes[i])}),(c.children||[]).forEach(function(i){s.appendChild(n3(i,{ceFn:e}))}),s}function e6(c){let a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var a1={replace:function(c){let a=c[0];if(a.parentNode)if(c[1].forEach(e=>{a.parentNode.insertBefore(n3(e),a)}),a.getAttribute(D)===null&&o.keepOriginalSource){let e=h.createComment(e6(a));a.parentNode.replaceChild(e,a)}else a.remove()},nest:function(c){let a=c[0],e=c[1];if(~q1(a).indexOf(o.replacementClass))return a1.replace(c);let s=new RegExp("".concat(o.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){let i=e[0].attributes.class.split(" ").reduce((f,n)=>(n===o.replacementClass||n.match(s)?f.toSvg.push(n):f.toNode.push(n),f),{toNode:[],toSvg:[]});e[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",i.toNode.join(" "))}let r=e.map(i=>K(i)).join(`
`);a.setAttribute(D,""),a.innerHTML=r}};function d2(c){c()}function o3(c,a){let e=typeof a=="function"?a:c1;if(c.length===0)e();else{let s=d2;o.mutateApproach===i4&&(s=y.requestAnimationFrame||d2),s(()=>{let r=$4(),i=W1.begin("mutate");c.map(r),i(),e()})}}var O1=!1;function t3(){O1=!0}function P1(){O1=!1}var s1=null;function g2(c){if(!o2||!o.observeMutations)return;let{treeCallback:a=c1,nodeCallback:e=c1,pseudoElementsCallback:s=c1,observeMutationsRoot:r=h}=c;s1=new o2(i=>{if(O1)return;let f=P();W(i).forEach(n=>{if(n.type==="childList"&&n.addedNodes.length>0&&!u2(n.addedNodes[0])&&(o.searchPseudoElements&&s(n.target),a(n.target)),n.type==="attributes"&&n.target.parentNode&&o.searchPseudoElements&&s(n.target.parentNode),n.type==="attributes"&&u2(n.target)&&~m4.indexOf(n.attributeName))if(n.attributeName==="class"&&Q4(n.target)){let{prefix:m,iconName:t}=l1(q1(n.target));n.target.setAttribute(B1,m||f),t&&n.target.setAttribute(D1,t)}else J4(n.target)&&e(n.target)})}),S&&s1.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function s6(){s1&&s1.disconnect()}function r6(c){let a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce((s,r)=>{let i=r.split(":"),f=i[0],n=i.slice(1);return f&&n.length>0&&(s[f]=n.join(":").trim()),s},{})),e}function i6(c){let a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),s=c.innerText!==void 0?c.innerText.trim():"",r=l1(q1(c));return r.prefix||(r.prefix=P()),a&&e&&(r.prefix=a,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&s.length>0&&(r.iconName=y4(r.prefix,c.innerText)||I1(r.prefix,x1(c.innerText))),!r.iconName&&o.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=c.firstChild.data)),r}function f6(c){let a=W(c.attributes).reduce((r,i)=>(r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r),{}),e=c.getAttribute("title"),s=c.getAttribute("data-fa-title-id");return o.autoA11y&&(e?a["aria-labelledby"]="".concat(o.replacementClass,"-title-").concat(s||_()):(a["aria-hidden"]="true",a.focusable="false")),a}function l6(){return{iconName:null,title:null,titleId:null,prefix:null,transform:d,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function x2(c){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:e,prefix:s,rest:r}=i6(c),i=f6(c),f=S1("parseNodeAttributes",{},c),n=a.styleParser?r6(c):[];return l({iconName:e,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:s,transform:d,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:n,attributes:i}},f)}var{styles:n6}=g;function m3(c){let a=o.autoReplaceSvg==="nest"?x2(c,{styleParser:!1}):x2(c);return~a.extra.classes.indexOf(Z2)?T("generateLayersText",c,a):T("generateSvgReplacementMutation",c,a)}function o6(){return[...W3,...C1]}function b2(c){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!S)return Promise.resolve();let e=h.documentElement.classList,s=z=>e.add("".concat(z2,"-").concat(z)),r=z=>e.remove("".concat(z2,"-").concat(z)),i=o.autoFetchSvg?o6():q2.concat(Object.keys(n6));i.includes("fa")||i.push("fa");let f=[".".concat(Z2,":not([").concat(D,"])")].concat(i.map(z=>".".concat(z,":not([").concat(D,"])"))).join(", ");if(f.length===0)return Promise.resolve();let n=[];try{n=W(c.querySelectorAll(f))}catch{}if(n.length>0)s("pending"),r("complete");else return Promise.resolve();let m=W1.begin("onTree"),t=n.reduce((z,H)=>{try{let v=m3(H);v&&z.push(v)}catch(v){W2||v.name==="MissingIcon"&&console.error(v)}return z},[]);return new Promise((z,H)=>{Promise.all(t).then(v=>{o3(v,()=>{s("active"),s("complete"),r("pending"),typeof a=="function"&&a(),m(),z()})}).catch(v=>{m(),H(v)})})}function t6(c){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;m3(c).then(e=>{e&&o3([e],a)})}function m6(c){return function(a){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=(a||{}).icon?a:A1(a||{}),{mask:r}=e;return r&&(r=(r||{}).icon?r:A1(r||{})),c(s,l(l({},e),{},{mask:r}))}}var z6=function(c){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:e=d,symbol:s=!1,mask:r=null,maskId:i=null,title:f=null,titleId:n=null,classes:m=[],attributes:t={},styles:z={}}=a;if(!c)return;let{prefix:H,iconName:v,icon:M}=c;return n1(l({type:"icon"},c),()=>(R("beforeDOMElementCreation",{iconDefinition:c,params:a}),o.autoA11y&&(f?t["aria-labelledby"]="".concat(o.replacementClass,"-title-").concat(n||_()):(t["aria-hidden"]="true",t.focusable="false")),G1({icons:{main:k1(M),mask:r?k1(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:H,iconName:v,transform:l(l({},d),e),symbol:s,title:f,maskId:i,titleId:n,extra:{attributes:t,styles:z,classes:m}})))},v6={mixout(){return{icon:m6(z6)}},hooks(){return{mutationObserverCallbacks(c){return c.treeCallback=b2,c.nodeCallback=t6,c}}},provides(c){c.i2svg=function(a){let{node:e=h,callback:s=()=>{}}=a;return b2(e,s)},c.generateSvgReplacementMutation=function(a,e){let{iconName:s,title:r,titleId:i,prefix:f,transform:n,symbol:m,mask:t,maskId:z,extra:H}=e;return new Promise((v,M)=>{Promise.all([w1(s,f),t.iconName?w1(t.iconName,t.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(A=>{let[F,L]=A;v([a,G1({icons:{main:F,mask:L},prefix:f,iconName:s,transform:n,symbol:m,maskId:z,title:r,titleId:i,extra:H,watchable:!0})])}).catch(M)})},c.generateAbstractIcon=function(a){let{children:e,attributes:s,main:r,transform:i,styles:f}=a,n=i1(f);n.length>0&&(s.style=n);let m;return E1(i)&&(m=T("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),e.push(m||r.icon),{children:e,attributes:s}}}},H6={mixout(){return{layer(c){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:e=[]}=a;return n1({type:"layer"},()=>{R("beforeDOMElementCreation",{assembler:c,params:a});let s=[];return c(r=>{Array.isArray(r)?r.map(i=>{s=s.concat(i.abstract)}):s=s.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(o.cssPrefix,"-layers"),...e].join(" ")},children:s}]})}}}},h6={mixout(){return{counter(c){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:e=null,classes:s=[],attributes:r={},styles:i={}}=a;return n1({type:"counter",content:c},()=>(R("beforeDOMElementCreation",{content:c,params:a}),_4({content:c.toString(),title:e,extra:{attributes:r,styles:i,classes:["".concat(o.cssPrefix,"-layers-counter"),...s]}})))}}}},V6={mixout(){return{text(c){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:e=d,title:s=null,classes:r=[],attributes:i={},styles:f={}}=a;return n1({type:"text",content:c},()=>(R("beforeDOMElementCreation",{content:c,params:a}),p2({content:c,transform:l(l({},d),e),title:s,extra:{attributes:i,styles:f,classes:["".concat(o.cssPrefix,"-layers-text"),...r]}})))}}},provides(c){c.generateLayersText=function(a,e){let{title:s,transform:r,extra:i}=e,f=null,n=null;if(D2){let m=parseInt(getComputedStyle(a).fontSize,10),t=a.getBoundingClientRect();f=t.width/m,n=t.height/m}return o.autoA11y&&!s&&(i.attributes["aria-hidden"]="true"),Promise.resolve([a,p2({content:a.innerHTML,width:f,height:n,transform:r,title:s,extra:i,watchable:!0})])}}},M6=new RegExp('"',"ug"),N2=[1105920,1112319],S2=l(l(l(l({},{FontAwesome:{normal:"fas",400:"fas"}}),U3),s4),K3),T1=Object.keys(S2).reduce((c,a)=>(c[a.toLowerCase()]=S2[a],c),{}),C6=Object.keys(T1).reduce((c,a)=>{let e=T1[a];return c[a]=e[900]||[...Object.entries(e)][0][1],c},{});function p6(c){let a=c.replace(M6,""),e=N4(a,0),s=e>=N2[0]&&e<=N2[1],r=a.length===2?a[0]===a[1]:!1;return{value:x1(r?a[0]:a),isSecondary:s||r}}function L6(c,a){let e=c.replace(/^['"]|['"]$/g,"").toLowerCase(),s=parseInt(a),r=isNaN(s)?"normal":s;return(T1[e]||{})[r]||C6[e]}function A2(c,a){let e="".concat(r4).concat(a.replace(":","-"));return new Promise((s,r)=>{if(c.getAttribute(e)!==null)return s();let f=W(c.children).filter(v=>v.getAttribute(L1)===a)[0],n=y.getComputedStyle(c,a),m=n.getPropertyValue("font-family"),t=m.match(o4),z=n.getPropertyValue("font-weight"),H=n.getPropertyValue("content");if(f&&!t)return c.removeChild(f),s();if(t&&H!=="none"&&H!==""){let v=n.getPropertyValue("content"),M=L6(m,z),{value:A,isSecondary:F}=p6(v),L=t[0].startsWith("FontAwesome"),x=I1(M,A),C=x;if(L){let u=P4(A);u.iconName&&u.prefix&&(x=u.iconName,M=u.prefix)}if(x&&!F&&(!f||f.getAttribute(B1)!==M||f.getAttribute(D1)!==C)){c.setAttribute(e,C),f&&c.removeChild(f);let u=l6(),{extra:q}=u;q.attributes[L1]=a,w1(x,M).then(E=>{let k3=G1(l(l({},u),{},{icons:{main:E,mask:i3()},prefix:M,iconName:C,extra:q,watchable:!0})),o1=h.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(o1,c.firstChild):c.appendChild(o1),o1.outerHTML=k3.map(w3=>K(w3)).join(`
`),c.removeAttribute(e),s()}).catch(r)}else s()}else s()})}function u6(c){return Promise.all([A2(c,"::before"),A2(c,"::after")])}function d6(c){return c.parentNode!==document.head&&!~f4.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(L1)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function k2(c){if(S)return new Promise((a,e)=>{let s=W(c.querySelectorAll("*")).filter(d6).map(u6),r=W1.begin("searchPseudoElements");t3(),Promise.all(s).then(()=>{r(),P1(),a()}).catch(()=>{r(),P1(),e()})})}var g6={hooks(){return{mutationObserverCallbacks(c){return c.pseudoElementsCallback=k2,c}}},provides(c){c.pseudoElements2svg=function(a){let{node:e=h}=a;o.searchPseudoElements&&k2(e)}}},w2=!1,x6={mixout(){return{dom:{unwatch(){t3(),w2=!0}}}},hooks(){return{bootstrap(){g2(S1("mutationObserverCallbacks",{}))},noAuto(){s6()},watch(c){let{observeMutationsRoot:a}=c;w2?P1():g2(S1("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},y2=c=>{let a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce((e,s)=>{let r=s.toLowerCase().split("-"),i=r[0],f=r.slice(1).join("-");if(i&&f==="h")return e.flipX=!0,e;if(i&&f==="v")return e.flipY=!0,e;if(f=parseFloat(f),isNaN(f))return e;switch(i){case"grow":e.size=e.size+f;break;case"shrink":e.size=e.size-f;break;case"left":e.x=e.x-f;break;case"right":e.x=e.x+f;break;case"up":e.y=e.y-f;break;case"down":e.y=e.y+f;break;case"rotate":e.rotate=e.rotate+f;break}return e},a)},b6={mixout(){return{parse:{transform:c=>y2(c)}}},hooks(){return{parseNodeAttributes(c,a){let e=a.getAttribute("data-fa-transform");return e&&(c.transform=y2(e)),c}}},provides(c){c.generateAbstractTransformGrouping=function(a){let{main:e,transform:s,containerWidth:r,iconWidth:i}=a,f={transform:"translate(".concat(r/2," 256)")},n="translate(".concat(s.x*32,", ").concat(s.y*32,") "),m="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),t="rotate(".concat(s.rotate," 0 0)"),z={transform:"".concat(n," ").concat(m," ").concat(t)},H={transform:"translate(".concat(i/2*-1," -256)")},v={outer:f,inner:z,path:H};return{tag:"g",attributes:l({},v.outer),children:[{tag:"g",attributes:l({},v.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:l(l({},e.icon.attributes),v.path)}]}]}}}},V1={x:0,y:0,width:"100%",height:"100%"};function P2(c){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}function N6(c){return c.tag==="g"?c.children:[c]}var S6={hooks(){return{parseNodeAttributes(c,a){let e=a.getAttribute("data-fa-mask"),s=e?l1(e.split(" ").map(r=>r.trim())):i3();return s.prefix||(s.prefix=P()),c.mask=s,c.maskId=a.getAttribute("data-fa-mask-id"),c}}},provides(c){c.generateAbstractMask=function(a){let{children:e,attributes:s,main:r,mask:i,maskId:f,transform:n}=a,{width:m,icon:t}=r,{width:z,icon:H}=i,v=p4({transform:n,containerWidth:z,iconWidth:m}),M={tag:"rect",attributes:l(l({},V1),{},{fill:"white"})},A=t.children?{children:t.children.map(P2)}:{},F={tag:"g",attributes:l({},v.inner),children:[P2(l({tag:t.tag,attributes:l(l({},t.attributes),v.path)},A))]},L={tag:"g",attributes:l({},v.outer),children:[F]},x="mask-".concat(f||_()),C="clip-".concat(f||_()),u={tag:"mask",attributes:l(l({},V1),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[M,L]},q={tag:"defs",children:[{tag:"clipPath",attributes:{id:C},children:N6(H)},u]};return e.push(q,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(C,")"),mask:"url(#".concat(x,")")},V1)}),{children:e,attributes:s}}}},A6={provides(c){let a=!1;y.matchMedia&&(a=y.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){let e=[],s={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:l(l({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let i=l(l({},r),{},{attributeName:"opacity"}),f={tag:"circle",attributes:l(l({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||f.children.push({tag:"animate",attributes:l(l({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:l(l({},i),{},{values:"1;0;1;1;0;1;"})}),e.push(f),e.push({tag:"path",attributes:l(l({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:l(l({},i),{},{values:"1;0;0;0;0;1;"})}]}),a||e.push({tag:"path",attributes:l(l({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:l(l({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},k6={hooks(){return{parseNodeAttributes(c,a){let e=a.getAttribute("data-fa-symbol"),s=e===null?!1:e===""?!0:e;return c.symbol=s,c}}}},w6=[d4,v6,H6,h6,V6,g6,x6,b6,S6,A6,k6];U4(w6,{mixoutsTo:p});var X6=p.noAuto,z3=p.config,Y6=p.library,v3=p.dom,H3=p.parse,K6=p.findIconDefinition,Q6=p.toHtml,h3=p.icon,J6=p.layer,y6=p.text,P6=p.counter;var F6=["*"],B6=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},D6=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},M3=c=>c!=null&&(c===90||c===180||c===270||c==="90"||c==="180"||c==="270"),R6=c=>{let a=M3(c.rotate),e={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:a,"fa-rotate-by":c.rotate!=null&&!a,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(e).map(s=>e[s]?s:null).filter(s=>s)},Z1=new WeakSet,V3="fa-auto-css";function q6(c,a){if(!a.autoAddCss||Z1.has(c))return;if(c.getElementById(V3)!=null){a.autoAddCss=!1,Z1.add(c);return}let e=c.createElement("style");e.setAttribute("type","text/css"),e.setAttribute("id",V3),e.innerHTML=v3.css();let s=c.head.childNodes,r=null;for(let i=s.length-1;i>-1;i--){let f=s[i],n=f.nodeName.toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(r=f)}c.head.insertBefore(e,r),a.autoAddCss=!1,Z1.add(c)}var E6=c=>c.prefix!==void 0&&c.iconName!==void 0,U6=(c,a)=>E6(c)?c:Array.isArray(c)&&c.length===2?{prefix:c[0],iconName:c[1]}:{prefix:a,iconName:c},I6=(()=>{class c{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null,this._autoAddCss=!0}set autoAddCss(e){z3.autoAddCss=e,this._autoAddCss=e}get autoAddCss(){return this._autoAddCss}static{this.\u0275fac=function(s){return new(s||c)}}static{this.\u0275prov=t1({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),G6=(()=>{class c{constructor(){this.definitions={}}addIcons(...e){for(let s of e){s.prefix in this.definitions||(this.definitions[s.prefix]={}),this.definitions[s.prefix][s.iconName]=s;for(let r of s.icon[2])typeof r=="string"&&(this.definitions[s.prefix][r]=s)}}addIconPacks(...e){for(let s of e){let r=Object.keys(s).map(i=>s[i]);this.addIcons(...r)}}getIconDefinition(e,s){return e in this.definitions&&s in this.definitions[e]?this.definitions[e][s]:null}static{this.\u0275fac=function(s){return new(s||c)}}static{this.\u0275prov=t1({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),W6=(()=>{class c{constructor(){this.stackItemSize="1x"}ngOnChanges(e){if("size"in e)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}static{this.\u0275fac=function(s){return new(s||c)}}static{this.\u0275dir=J1({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},features:[Q]})}}return c})(),O6=(()=>{class c{constructor(e,s){this.renderer=e,this.elementRef=s}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(e){"size"in e&&(e.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${e.size.currentValue}`),e.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${e.size.previousValue}`))}static{this.\u0275fac=function(s){return new(s||c)(k(K1),k(X1))}}static{this.\u0275cmp=m1({type:c,selectors:[["fa-stack"]],inputs:{size:"size"},features:[Q],ngContentSelectors:F6,decls:1,vars:0,template:function(s,r){s&1&&(e2(),s2(0))},encapsulation:2})}}return c})(),H8=(()=>{class c{constructor(e,s,r,i,f){this.sanitizer=e,this.config=s,this.iconLibrary=r,this.stackItem=i,this.document=_1(r2),f!=null&&i==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(e){if(this.icon==null&&this.config.fallbackIcon==null){D6();return}if(e){let s=this.findIconDefinition(this.icon??this.config.fallbackIcon);if(s!=null){let r=this.buildParams();q6(this.document,this.config);let i=h3(s,r);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(i.html.join(`
`))}}}render(){this.ngOnChanges({})}findIconDefinition(e){let s=U6(e,this.config.defaultPrefix);if("icon"in s)return s;let r=this.iconLibrary.getIconDefinition(s.prefix,s.iconName);return r??(B6(s),null)}buildParams(){let e={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},s=typeof this.transform=="string"?H3.transform(this.transform):this.transform,r={};return e.rotate!=null&&!M3(e.rotate)&&(r["--fa-rotate-angle"]=`${e.rotate}`),{title:this.title,transform:s,classes:R6(e),mask:this.mask!=null?this.findIconDefinition(this.mask):null,symbol:this.symbol,attributes:{role:this.a11yRole},styles:r}}static{this.\u0275fac=function(s){return new(s||c)(k(i2),k(I6),k(G6),k(W6,8),k(O6,8))}}static{this.\u0275cmp=m1({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(s,r){s&2&&(a2("innerHTML",r.renderedIconHTML,Y1),c2("title",r.title))},inputs:{icon:"icon",title:"title",animation:"animation",mask:"mask",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",transform:"transform",a11yRole:"a11yRole"},features:[Q],decls:0,vars:0,template:function(s,r){},encapsulation:2})}}return c})();var h8=(()=>{class c{static{this.\u0275fac=function(s){return new(s||c)}}static{this.\u0275mod=Q1({type:c})}static{this.\u0275inj=j1({})}}return c})();var C3={prefix:"fas",iconName:"calendar-days",icon:[448,512,["calendar-alt"],"f073","M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"]};var p3={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]};var L3={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"]};var u3={prefix:"fas",iconName:"quote-right",icon:[448,512,[8221,"quote-right-alt"],"f10e","M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"]};var d3={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]};var g3={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]};var x3={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]};var b3={prefix:"fab",iconName:"facebook-f",icon:[320,512,[],"f39e","M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"]};var N3={prefix:"fab",iconName:"x-twitter",icon:[512,512,[],"e61b","M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"]};var S3={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]};var A3={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]};var u8=(()=>{class c{transform(e){switch(e){case"faCalendarDays":return C3;case"faEnvelope":return d3;case"faInstagram":return S3;case"faFacebookF":return b3;case"faLocationDot":return g3;case"faPlay":return x3;case"faPhone":return L3;case"faQuoteRight":return u3;case"faXTwitter":return N3;case"faYoutube":return A3;default:return p3}}static{this.\u0275fac=function(s){return new(s||c)}}static{this.\u0275pipe=$1({name:"convertStringLabelToFontawesomeIcon",type:c,pure:!0})}}return c})();export{H8 as a,h8 as b,u8 as c};
