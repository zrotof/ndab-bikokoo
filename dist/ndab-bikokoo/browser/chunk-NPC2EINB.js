import{c as Et,d as Ee}from"./chunk-WMHDPZHO.js";import{A as Ve,D as Tt,H as ce,J as Ne,R as je,V as Ct,W as oe,Y as re,_ as se,b as Ce,d as ie,j as yt,u as Ge,w as St,x as xt}from"./chunk-ZGL5YIUF.js";import{k as gt,n as ht,o as mt,p as vt,s as Te,u as wt}from"./chunk-ZKLE5DCN.js";import{$ as K,$b as ae,Ab as F,Bb as _,Cb as at,Eb as lt,Fb as Q,Kb as U,Lb as J,Lc as B,Mb as N,Mc as ft,Nb as we,Nc as Fe,Ob as ye,Pb as dt,Pc as bt,V as te,Vb as ct,W as be,Wb as G,Xb as ut,Ya as L,Yb as pt,a as q,b as De,bc as le,cc as de,fa as Be,gc as Se,hc as xe,ia as ge,ja as A,lb as X,mb as me,nb as ve,pa as he,pb as V,qa as rt,rb as st,rc as ne,sb as Z,ta as Y,tc as Ae}from"./chunk-6N77HA4P.js";function $t(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function Re(e,n){e===void 0&&(e={}),n===void 0&&(n={}),Object.keys(n).forEach(t=>{typeof e[t]>"u"?e[t]=n[t]:$t(n[t])&&$t(e[t])&&Object.keys(n[t]).length>0&&Re(e[t],n[t])})}var It={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function j(){let e=typeof document<"u"?document:{};return Re(e,It),e}var on={document:It,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function z(){let e=typeof window<"u"?window:{};return Re(e,on),e}function rn(e){return e===void 0&&(e=""),e.trim().split(" ").filter(n=>!!n.trim())}function Mt(e){let n=e;Object.keys(n).forEach(t=>{try{n[t]=null}catch{}try{delete n[t]}catch{}})}function Ie(e,n){return n===void 0&&(n=0),setTimeout(e,n)}function ue(){return Date.now()}function sn(e){let n=z(),t;return n.getComputedStyle&&(t=n.getComputedStyle(e,null)),!t&&e.currentStyle&&(t=e.currentStyle),t||(t=e.style),t}function Pt(e,n){n===void 0&&(n="x");let t=z(),i,o,r,a=sn(e);return t.WebKitCSSMatrix?(o=a.transform||a.webkitTransform,o.split(",").length>6&&(o=o.split(", ").map(l=>l.replace(",",".")).join(", ")),r=new t.WebKitCSSMatrix(o==="none"?"":o)):(r=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),i=r.toString().split(",")),n==="x"&&(t.WebKitCSSMatrix?o=r.m41:i.length===16?o=parseFloat(i[12]):o=parseFloat(i[4])),n==="y"&&(t.WebKitCSSMatrix?o=r.m42:i.length===16?o=parseFloat(i[13]):o=parseFloat(i[5])),o||0}function $e(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function an(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function D(){let e=Object(arguments.length<=0?void 0:arguments[0]),n=["__proto__","constructor","prototype"];for(let t=1;t<arguments.length;t+=1){let i=t<0||arguments.length<=t?void 0:arguments[t];if(i!=null&&!an(i)){let o=Object.keys(Object(i)).filter(r=>n.indexOf(r)<0);for(let r=0,a=o.length;r<a;r+=1){let l=o[r],s=Object.getOwnPropertyDescriptor(i,l);s!==void 0&&s.enumerable&&($e(e[l])&&$e(i[l])?i[l].__swiper__?e[l]=i[l]:D(e[l],i[l]):!$e(e[l])&&$e(i[l])?(e[l]={},i[l].__swiper__?e[l]=i[l]:D(e[l],i[l])):e[l]=i[l])}}}return e}function pe(e,n,t){e.style.setProperty(n,t)}function He(e){let{swiper:n,targetPosition:t,side:i}=e,o=z(),r=-n.translate,a=null,l,s=n.params.speed;n.wrapperEl.style.scrollSnapType="none",o.cancelAnimationFrame(n.cssModeFrameID);let c=t>r?"next":"prev",d=(f,p)=>c==="next"&&f>=p||c==="prev"&&f<=p,u=()=>{l=new Date().getTime(),a===null&&(a=l);let f=Math.max(Math.min((l-a)/s,1),0),p=.5-Math.cos(f*Math.PI)/2,b=r+p*(t-r);if(d(b,t)&&(b=t),n.wrapperEl.scrollTo({[i]:b}),d(b,t)){n.wrapperEl.style.overflow="hidden",n.wrapperEl.style.scrollSnapType="",setTimeout(()=>{n.wrapperEl.style.overflow="",n.wrapperEl.scrollTo({[i]:b})}),o.cancelAnimationFrame(n.cssModeFrameID);return}n.cssModeFrameID=o.requestAnimationFrame(u)};u()}function Hi(e){return e.querySelector(".swiper-slide-transform")||e.shadowRoot&&e.shadowRoot.querySelector(".swiper-slide-transform")||e}function R(e,n){n===void 0&&(n="");let t=z(),i=[...e.children];return t.HTMLSlotElement&&e instanceof HTMLSlotElement&&i.push(...e.assignedElements()),n?i.filter(o=>o.matches(n)):i}function ln(e,n){let t=[n];for(;t.length>0;){let i=t.shift();if(e===i)return!0;t.push(...i.children,...i.shadowRoot?.children||[],...i.assignedElements?.()||[])}}function kt(e,n){let t=z(),i=n.contains(e);return!i&&t.HTMLSlotElement&&n instanceof HTMLSlotElement&&(i=[...n.assignedElements()].includes(e),i||(i=ln(e,n))),i}function fe(e){try{console.warn(e);return}catch{}}function Me(e,n){n===void 0&&(n=[]);let t=document.createElement(e);return t.classList.add(...Array.isArray(n)?n:rn(n)),t}function Wi(e){let n=z(),t=j(),i=e.getBoundingClientRect(),o=t.body,r=e.clientTop||o.clientTop||0,a=e.clientLeft||o.clientLeft||0,l=e===n?n.scrollY:e.scrollTop,s=e===n?n.scrollX:e.scrollLeft;return{top:i.top+l-r,left:i.left+s-a}}function _t(e,n){let t=[];for(;e.previousElementSibling;){let i=e.previousElementSibling;n?i.matches(n)&&t.push(i):t.push(i),e=i}return t}function zt(e,n){let t=[];for(;e.nextElementSibling;){let i=e.nextElementSibling;n?i.matches(n)&&t.push(i):t.push(i),e=i}return t}function H(e,n){return z().getComputedStyle(e,null).getPropertyValue(n)}function We(e){let n=e,t;if(n){for(t=0;(n=n.previousSibling)!==null;)n.nodeType===1&&(t+=1);return t}}function Lt(e,n){let t=[],i=e.parentElement;for(;i;)n?i.matches(n)&&t.push(i):t.push(i),i=i.parentElement;return t}function qi(e,n){function t(i){i.target===e&&(n.call(e,i),e.removeEventListener("transitionend",t))}n&&e.addEventListener("transitionend",t)}function qe(e,n,t){let i=z();return t?e[n==="width"?"offsetWidth":"offsetHeight"]+parseFloat(i.getComputedStyle(e,null).getPropertyValue(n==="width"?"margin-right":"margin-top"))+parseFloat(i.getComputedStyle(e,null).getPropertyValue(n==="width"?"margin-left":"margin-bottom")):e.offsetWidth}function Yi(e){return(Array.isArray(e)?e:[e]).filter(n=>!!n)}function Xi(e){return n=>Math.abs(n)>0&&e.browser&&e.browser.need3dFix&&Math.abs(n)%90===0?n+.001:n}var Ye;function dn(){let e=z(),n=j();return{smoothScroll:n.documentElement&&n.documentElement.style&&"scrollBehavior"in n.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&n instanceof e.DocumentTouch)}}function Ft(){return Ye||(Ye=dn()),Ye}var Xe;function cn(e){let{userAgent:n}=e===void 0?{}:e,t=Ft(),i=z(),o=i.navigator.platform,r=n||i.navigator.userAgent,a={ios:!1,android:!1},l=i.screen.width,s=i.screen.height,c=r.match(/(Android);?[\s\/]+([\d.]+)?/),d=r.match(/(iPad).*OS\s([\d_]+)/),u=r.match(/(iPod)(.*OS\s([\d_]+))?/),f=!d&&r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),p=o==="Win32",b=o==="MacIntel",g=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!d&&b&&t.touch&&g.indexOf(`${l}x${s}`)>=0&&(d=r.match(/(Version)\/([\d.]+)/),d||(d=[0,1,"13_0_0"]),b=!1),c&&!p&&(a.os="android",a.android=!0),(d||f||u)&&(a.os="ios",a.ios=!0),a}function Gt(e){return e===void 0&&(e={}),Xe||(Xe=cn(e)),Xe}var Qe;function un(){let e=z(),n=Gt(),t=!1;function i(){let l=e.navigator.userAgent.toLowerCase();return l.indexOf("safari")>=0&&l.indexOf("chrome")<0&&l.indexOf("android")<0}if(i()){let l=String(e.navigator.userAgent);if(l.includes("Version/")){let[s,c]=l.split("Version/")[1].split(" ")[0].split(".").map(d=>Number(d));t=s<16||s===16&&c<2}}let o=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),r=i(),a=r||o&&n.ios;return{isSafari:t||r,needPerspectiveFix:t,need3dFix:a,isWebView:o}}function Vt(){return Qe||(Qe=un()),Qe}function pn(e){let{swiper:n,on:t,emit:i}=e,o=z(),r=null,a=null,l=()=>{!n||n.destroyed||!n.initialized||(i("beforeResize"),i("resize"))},s=()=>{!n||n.destroyed||!n.initialized||(r=new ResizeObserver(u=>{a=o.requestAnimationFrame(()=>{let{width:f,height:p}=n,b=f,g=p;u.forEach(C=>{let{contentBoxSize:m,contentRect:v,target:w}=C;w&&w!==n.el||(b=v?v.width:(m[0]||m).inlineSize,g=v?v.height:(m[0]||m).blockSize)}),(b!==f||g!==p)&&l()})}),r.observe(n.el))},c=()=>{a&&o.cancelAnimationFrame(a),r&&r.unobserve&&n.el&&(r.unobserve(n.el),r=null)},d=()=>{!n||n.destroyed||!n.initialized||i("orientationchange")};t("init",()=>{if(n.params.resizeObserver&&typeof o.ResizeObserver<"u"){s();return}o.addEventListener("resize",l),o.addEventListener("orientationchange",d)}),t("destroy",()=>{c(),o.removeEventListener("resize",l),o.removeEventListener("orientationchange",d)})}function fn(e){let{swiper:n,extendParams:t,on:i,emit:o}=e,r=[],a=z(),l=function(d,u){u===void 0&&(u={});let f=a.MutationObserver||a.WebkitMutationObserver,p=new f(b=>{if(n.__preventObserver__)return;if(b.length===1){o("observerUpdate",b[0]);return}let g=function(){o("observerUpdate",b[0])};a.requestAnimationFrame?a.requestAnimationFrame(g):a.setTimeout(g,0)});p.observe(d,{attributes:typeof u.attributes>"u"?!0:u.attributes,childList:n.isElement||(typeof u.childList>"u"?!0:u).childList,characterData:typeof u.characterData>"u"?!0:u.characterData}),r.push(p)},s=()=>{if(n.params.observer){if(n.params.observeParents){let d=Lt(n.hostEl);for(let u=0;u<d.length;u+=1)l(d[u])}l(n.hostEl,{childList:n.params.observeSlideChildren}),l(n.wrapperEl,{attributes:!1})}},c=()=>{r.forEach(d=>{d.disconnect()}),r.splice(0,r.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),i("init",s),i("destroy",c)}var bn={on(e,n,t){let i=this;if(!i.eventsListeners||i.destroyed||typeof n!="function")return i;let o=t?"unshift":"push";return e.split(" ").forEach(r=>{i.eventsListeners[r]||(i.eventsListeners[r]=[]),i.eventsListeners[r][o](n)}),i},once(e,n,t){let i=this;if(!i.eventsListeners||i.destroyed||typeof n!="function")return i;function o(){i.off(e,o),o.__emitterProxy&&delete o.__emitterProxy;for(var r=arguments.length,a=new Array(r),l=0;l<r;l++)a[l]=arguments[l];n.apply(i,a)}return o.__emitterProxy=n,i.on(e,o,t)},onAny(e,n){let t=this;if(!t.eventsListeners||t.destroyed||typeof e!="function")return t;let i=n?"unshift":"push";return t.eventsAnyListeners.indexOf(e)<0&&t.eventsAnyListeners[i](e),t},offAny(e){let n=this;if(!n.eventsListeners||n.destroyed||!n.eventsAnyListeners)return n;let t=n.eventsAnyListeners.indexOf(e);return t>=0&&n.eventsAnyListeners.splice(t,1),n},off(e,n){let t=this;return!t.eventsListeners||t.destroyed||!t.eventsListeners||e.split(" ").forEach(i=>{typeof n>"u"?t.eventsListeners[i]=[]:t.eventsListeners[i]&&t.eventsListeners[i].forEach((o,r)=>{(o===n||o.__emitterProxy&&o.__emitterProxy===n)&&t.eventsListeners[i].splice(r,1)})}),t},emit(){let e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let n,t,i;for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return typeof r[0]=="string"||Array.isArray(r[0])?(n=r[0],t=r.slice(1,r.length),i=e):(n=r[0].events,t=r[0].data,i=r[0].context||e),t.unshift(i),(Array.isArray(n)?n:n.split(" ")).forEach(s=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(c=>{c.apply(i,[s,...t])}),e.eventsListeners&&e.eventsListeners[s]&&e.eventsListeners[s].forEach(c=>{c.apply(i,t)})}),e}};function gn(){let e=this,n,t,i=e.el;typeof e.params.width<"u"&&e.params.width!==null?n=e.params.width:n=i.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?t=e.params.height:t=i.clientHeight,!(n===0&&e.isHorizontal()||t===0&&e.isVertical())&&(n=n-parseInt(H(i,"padding-left")||0,10)-parseInt(H(i,"padding-right")||0,10),t=t-parseInt(H(i,"padding-top")||0,10)-parseInt(H(i,"padding-bottom")||0,10),Number.isNaN(n)&&(n=0),Number.isNaN(t)&&(t=0),Object.assign(e,{width:n,height:t,size:e.isHorizontal()?n:t}))}function hn(){let e=this;function n(h,$){return parseFloat(h.getPropertyValue(e.getDirectionLabel($))||0)}let t=e.params,{wrapperEl:i,slidesEl:o,size:r,rtlTranslate:a,wrongRTL:l}=e,s=e.virtual&&t.virtual.enabled,c=s?e.virtual.slides.length:e.slides.length,d=R(o,`.${e.params.slideClass}, swiper-slide`),u=s?e.virtual.slides.length:d.length,f=[],p=[],b=[],g=t.slidesOffsetBefore;typeof g=="function"&&(g=t.slidesOffsetBefore.call(e));let C=t.slidesOffsetAfter;typeof C=="function"&&(C=t.slidesOffsetAfter.call(e));let m=e.snapGrid.length,v=e.slidesGrid.length,w=t.spaceBetween,S=-g,x=0,M=0;if(typeof r>"u")return;typeof w=="string"&&w.indexOf("%")>=0?w=parseFloat(w.replace("%",""))/100*r:typeof w=="string"&&(w=parseFloat(w)),e.virtualSize=-w,d.forEach(h=>{a?h.style.marginLeft="":h.style.marginRight="",h.style.marginBottom="",h.style.marginTop=""}),t.centeredSlides&&t.cssMode&&(pe(i,"--swiper-centered-offset-before",""),pe(i,"--swiper-centered-offset-after",""));let P=t.grid&&t.grid.rows>1&&e.grid;P?e.grid.initSlides(d):e.grid&&e.grid.unsetSlides();let E,y=t.slidesPerView==="auto"&&t.breakpoints&&Object.keys(t.breakpoints).filter(h=>typeof t.breakpoints[h].slidesPerView<"u").length>0;for(let h=0;h<u;h+=1){E=0;let $;if(d[h]&&($=d[h]),P&&e.grid.updateSlide(h,$,d),!(d[h]&&H($,"display")==="none")){if(t.slidesPerView==="auto"){y&&(d[h].style[e.getDirectionLabel("width")]="");let I=getComputedStyle($),T=$.style.transform,k=$.style.webkitTransform;if(T&&($.style.transform="none"),k&&($.style.webkitTransform="none"),t.roundLengths)E=e.isHorizontal()?qe($,"width",!0):qe($,"height",!0);else{let O=n(I,"width"),W=n(I,"padding-left"),en=n(I,"padding-right"),nt=n(I,"margin-left"),it=n(I,"margin-right"),ot=I.getPropertyValue("box-sizing");if(ot&&ot==="border-box")E=O+nt+it;else{let{clientWidth:tn,offsetWidth:nn}=$;E=O+W+en+nt+it+(nn-tn)}}T&&($.style.transform=T),k&&($.style.webkitTransform=k),t.roundLengths&&(E=Math.floor(E))}else E=(r-(t.slidesPerView-1)*w)/t.slidesPerView,t.roundLengths&&(E=Math.floor(E)),d[h]&&(d[h].style[e.getDirectionLabel("width")]=`${E}px`);d[h]&&(d[h].swiperSlideSize=E),b.push(E),t.centeredSlides?(S=S+E/2+x/2+w,x===0&&h!==0&&(S=S-r/2-w),h===0&&(S=S-r/2-w),Math.abs(S)<1/1e3&&(S=0),t.roundLengths&&(S=Math.floor(S)),M%t.slidesPerGroup===0&&f.push(S),p.push(S)):(t.roundLengths&&(S=Math.floor(S)),(M-Math.min(e.params.slidesPerGroupSkip,M))%e.params.slidesPerGroup===0&&f.push(S),p.push(S),S=S+E+w),e.virtualSize+=E+w,x=E,M+=1}}if(e.virtualSize=Math.max(e.virtualSize,r)+C,a&&l&&(t.effect==="slide"||t.effect==="coverflow")&&(i.style.width=`${e.virtualSize+w}px`),t.setWrapperSize&&(i.style[e.getDirectionLabel("width")]=`${e.virtualSize+w}px`),P&&e.grid.updateWrapperSize(E,f),!t.centeredSlides){let h=[];for(let $=0;$<f.length;$+=1){let I=f[$];t.roundLengths&&(I=Math.floor(I)),f[$]<=e.virtualSize-r&&h.push(I)}f=h,Math.floor(e.virtualSize-r)-Math.floor(f[f.length-1])>1&&f.push(e.virtualSize-r)}if(s&&t.loop){let h=b[0]+w;if(t.slidesPerGroup>1){let $=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/t.slidesPerGroup),I=h*t.slidesPerGroup;for(let T=0;T<$;T+=1)f.push(f[f.length-1]+I)}for(let $=0;$<e.virtual.slidesBefore+e.virtual.slidesAfter;$+=1)t.slidesPerGroup===1&&f.push(f[f.length-1]+h),p.push(p[p.length-1]+h),e.virtualSize+=h}if(f.length===0&&(f=[0]),w!==0){let h=e.isHorizontal()&&a?"marginLeft":e.getDirectionLabel("marginRight");d.filter(($,I)=>!t.cssMode||t.loop?!0:I!==d.length-1).forEach($=>{$.style[h]=`${w}px`})}if(t.centeredSlides&&t.centeredSlidesBounds){let h=0;b.forEach(I=>{h+=I+(w||0)}),h-=w;let $=h>r?h-r:0;f=f.map(I=>I<=0?-g:I>$?$+C:I)}if(t.centerInsufficientSlides){let h=0;b.forEach(I=>{h+=I+(w||0)}),h-=w;let $=(t.slidesOffsetBefore||0)+(t.slidesOffsetAfter||0);if(h+$<r){let I=(r-h-$)/2;f.forEach((T,k)=>{f[k]=T-I}),p.forEach((T,k)=>{p[k]=T+I})}}if(Object.assign(e,{slides:d,snapGrid:f,slidesGrid:p,slidesSizesGrid:b}),t.centeredSlides&&t.cssMode&&!t.centeredSlidesBounds){pe(i,"--swiper-centered-offset-before",`${-f[0]}px`),pe(i,"--swiper-centered-offset-after",`${e.size/2-b[b.length-1]/2}px`);let h=-e.snapGrid[0],$=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(I=>I+h),e.slidesGrid=e.slidesGrid.map(I=>I+$)}if(u!==c&&e.emit("slidesLengthChange"),f.length!==m&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),p.length!==v&&e.emit("slidesGridLengthChange"),t.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!s&&!t.cssMode&&(t.effect==="slide"||t.effect==="fade")){let h=`${t.containerModifierClass}backface-hidden`,$=e.el.classList.contains(h);u<=t.maxBackfaceHiddenSlides?$||e.el.classList.add(h):$&&e.el.classList.remove(h)}}function mn(e){let n=this,t=[],i=n.virtual&&n.params.virtual.enabled,o=0,r;typeof e=="number"?n.setTransition(e):e===!0&&n.setTransition(n.params.speed);let a=l=>i?n.slides[n.getSlideIndexByData(l)]:n.slides[l];if(n.params.slidesPerView!=="auto"&&n.params.slidesPerView>1)if(n.params.centeredSlides)(n.visibleSlides||[]).forEach(l=>{t.push(l)});else for(r=0;r<Math.ceil(n.params.slidesPerView);r+=1){let l=n.activeIndex+r;if(l>n.slides.length&&!i)break;t.push(a(l))}else t.push(a(n.activeIndex));for(r=0;r<t.length;r+=1)if(typeof t[r]<"u"){let l=t[r].offsetHeight;o=l>o?l:o}(o||o===0)&&(n.wrapperEl.style.height=`${o}px`)}function vn(){let e=this,n=e.slides,t=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let i=0;i<n.length;i+=1)n[i].swiperSlideOffset=(e.isHorizontal()?n[i].offsetLeft:n[i].offsetTop)-t-e.cssOverflowAdjustment()}var Ot=(e,n,t)=>{n&&!e.classList.contains(t)?e.classList.add(t):!n&&e.classList.contains(t)&&e.classList.remove(t)};function wn(e){e===void 0&&(e=this&&this.translate||0);let n=this,t=n.params,{slides:i,rtlTranslate:o,snapGrid:r}=n;if(i.length===0)return;typeof i[0].swiperSlideOffset>"u"&&n.updateSlidesOffset();let a=-e;o&&(a=e),n.visibleSlidesIndexes=[],n.visibleSlides=[];let l=t.spaceBetween;typeof l=="string"&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*n.size:typeof l=="string"&&(l=parseFloat(l));for(let s=0;s<i.length;s+=1){let c=i[s],d=c.swiperSlideOffset;t.cssMode&&t.centeredSlides&&(d-=i[0].swiperSlideOffset);let u=(a+(t.centeredSlides?n.minTranslate():0)-d)/(c.swiperSlideSize+l),f=(a-r[0]+(t.centeredSlides?n.minTranslate():0)-d)/(c.swiperSlideSize+l),p=-(a-d),b=p+n.slidesSizesGrid[s],g=p>=0&&p<=n.size-n.slidesSizesGrid[s],C=p>=0&&p<n.size-1||b>1&&b<=n.size||p<=0&&b>=n.size;C&&(n.visibleSlides.push(c),n.visibleSlidesIndexes.push(s)),Ot(c,C,t.slideVisibleClass),Ot(c,g,t.slideFullyVisibleClass),c.progress=o?-u:u,c.originalProgress=o?-f:f}}function yn(e){let n=this;if(typeof e>"u"){let d=n.rtlTranslate?-1:1;e=n&&n.translate&&n.translate*d||0}let t=n.params,i=n.maxTranslate()-n.minTranslate(),{progress:o,isBeginning:r,isEnd:a,progressLoop:l}=n,s=r,c=a;if(i===0)o=0,r=!0,a=!0;else{o=(e-n.minTranslate())/i;let d=Math.abs(e-n.minTranslate())<1,u=Math.abs(e-n.maxTranslate())<1;r=d||o<=0,a=u||o>=1,d&&(o=0),u&&(o=1)}if(t.loop){let d=n.getSlideIndexByData(0),u=n.getSlideIndexByData(n.slides.length-1),f=n.slidesGrid[d],p=n.slidesGrid[u],b=n.slidesGrid[n.slidesGrid.length-1],g=Math.abs(e);g>=f?l=(g-f)/b:l=(g+b-p)/b,l>1&&(l-=1)}Object.assign(n,{progress:o,progressLoop:l,isBeginning:r,isEnd:a}),(t.watchSlidesProgress||t.centeredSlides&&t.autoHeight)&&n.updateSlidesProgress(e),r&&!s&&n.emit("reachBeginning toEdge"),a&&!c&&n.emit("reachEnd toEdge"),(s&&!r||c&&!a)&&n.emit("fromEdge"),n.emit("progress",o)}var Ue=(e,n,t)=>{n&&!e.classList.contains(t)?e.classList.add(t):!n&&e.classList.contains(t)&&e.classList.remove(t)};function Sn(){let e=this,{slides:n,params:t,slidesEl:i,activeIndex:o}=e,r=e.virtual&&t.virtual.enabled,a=e.grid&&t.grid&&t.grid.rows>1,l=u=>R(i,`.${t.slideClass}${u}, swiper-slide${u}`)[0],s,c,d;if(r)if(t.loop){let u=o-e.virtual.slidesBefore;u<0&&(u=e.virtual.slides.length+u),u>=e.virtual.slides.length&&(u-=e.virtual.slides.length),s=l(`[data-swiper-slide-index="${u}"]`)}else s=l(`[data-swiper-slide-index="${o}"]`);else a?(s=n.find(u=>u.column===o),d=n.find(u=>u.column===o+1),c=n.find(u=>u.column===o-1)):s=n[o];s&&(a||(d=zt(s,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!d&&(d=n[0]),c=_t(s,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!c===0&&(c=n[n.length-1]))),n.forEach(u=>{Ue(u,u===s,t.slideActiveClass),Ue(u,u===d,t.slideNextClass),Ue(u,u===c,t.slidePrevClass)}),e.emitSlidesClasses()}var Pe=(e,n)=>{if(!e||e.destroyed||!e.params)return;let t=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,i=n.closest(t());if(i){let o=i.querySelector(`.${e.params.lazyPreloaderClass}`);!o&&e.isElement&&(i.shadowRoot?o=i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{i.shadowRoot&&(o=i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),o&&o.remove())})),o&&o.remove()}},Je=(e,n)=>{if(!e.slides[n])return;let t=e.slides[n].querySelector('[loading="lazy"]');t&&t.removeAttribute("loading")},et=e=>{if(!e||e.destroyed||!e.params)return;let n=e.params.lazyPreloadPrevNext,t=e.slides.length;if(!t||!n||n<0)return;n=Math.min(n,t);let i=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),o=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){let a=o,l=[a-n];l.push(...Array.from({length:n}).map((s,c)=>a+i+c)),e.slides.forEach((s,c)=>{l.includes(s.column)&&Je(e,c)});return}let r=o+i-1;if(e.params.rewind||e.params.loop)for(let a=o-n;a<=r+n;a+=1){let l=(a%t+t)%t;(l<o||l>r)&&Je(e,l)}else for(let a=Math.max(o-n,0);a<=Math.min(r+n,t-1);a+=1)a!==o&&(a>r||a<o)&&Je(e,a)};function xn(e){let{slidesGrid:n,params:t}=e,i=e.rtlTranslate?e.translate:-e.translate,o;for(let r=0;r<n.length;r+=1)typeof n[r+1]<"u"?i>=n[r]&&i<n[r+1]-(n[r+1]-n[r])/2?o=r:i>=n[r]&&i<n[r+1]&&(o=r+1):i>=n[r]&&(o=r);return t.normalizeSlideIndex&&(o<0||typeof o>"u")&&(o=0),o}function Tn(e){let n=this,t=n.rtlTranslate?n.translate:-n.translate,{snapGrid:i,params:o,activeIndex:r,realIndex:a,snapIndex:l}=n,s=e,c,d=p=>{let b=p-n.virtual.slidesBefore;return b<0&&(b=n.virtual.slides.length+b),b>=n.virtual.slides.length&&(b-=n.virtual.slides.length),b};if(typeof s>"u"&&(s=xn(n)),i.indexOf(t)>=0)c=i.indexOf(t);else{let p=Math.min(o.slidesPerGroupSkip,s);c=p+Math.floor((s-p)/o.slidesPerGroup)}if(c>=i.length&&(c=i.length-1),s===r&&!n.params.loop){c!==l&&(n.snapIndex=c,n.emit("snapIndexChange"));return}if(s===r&&n.params.loop&&n.virtual&&n.params.virtual.enabled){n.realIndex=d(s);return}let u=n.grid&&o.grid&&o.grid.rows>1,f;if(n.virtual&&o.virtual.enabled&&o.loop)f=d(s);else if(u){let p=n.slides.find(g=>g.column===s),b=parseInt(p.getAttribute("data-swiper-slide-index"),10);Number.isNaN(b)&&(b=Math.max(n.slides.indexOf(p),0)),f=Math.floor(b/o.grid.rows)}else if(n.slides[s]){let p=n.slides[s].getAttribute("data-swiper-slide-index");p?f=parseInt(p,10):f=s}else f=s;Object.assign(n,{previousSnapIndex:l,snapIndex:c,previousRealIndex:a,realIndex:f,previousIndex:r,activeIndex:s}),n.initialized&&et(n),n.emit("activeIndexChange"),n.emit("snapIndexChange"),(n.initialized||n.params.runCallbacksOnInit)&&(a!==f&&n.emit("realIndexChange"),n.emit("slideChange"))}function Cn(e,n){let t=this,i=t.params,o=e.closest(`.${i.slideClass}, swiper-slide`);!o&&t.isElement&&n&&n.length>1&&n.includes(e)&&[...n.slice(n.indexOf(e)+1,n.length)].forEach(l=>{!o&&l.matches&&l.matches(`.${i.slideClass}, swiper-slide`)&&(o=l)});let r=!1,a;if(o){for(let l=0;l<t.slides.length;l+=1)if(t.slides[l]===o){r=!0,a=l;break}}if(o&&r)t.clickedSlide=o,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(o.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=a;else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}i.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}var En={updateSize:gn,updateSlides:hn,updateAutoHeight:mn,updateSlidesOffset:vn,updateSlidesProgress:wn,updateProgress:yn,updateSlidesClasses:Sn,updateActiveIndex:Tn,updateClickedSlide:Cn};function $n(e){e===void 0&&(e=this.isHorizontal()?"x":"y");let n=this,{params:t,rtlTranslate:i,translate:o,wrapperEl:r}=n;if(t.virtualTranslate)return i?-o:o;if(t.cssMode)return o;let a=Pt(r,e);return a+=n.cssOverflowAdjustment(),i&&(a=-a),a||0}function In(e,n){let t=this,{rtlTranslate:i,params:o,wrapperEl:r,progress:a}=t,l=0,s=0,c=0;t.isHorizontal()?l=i?-e:e:s=e,o.roundLengths&&(l=Math.floor(l),s=Math.floor(s)),t.previousTranslate=t.translate,t.translate=t.isHorizontal()?l:s,o.cssMode?r[t.isHorizontal()?"scrollLeft":"scrollTop"]=t.isHorizontal()?-l:-s:o.virtualTranslate||(t.isHorizontal()?l-=t.cssOverflowAdjustment():s-=t.cssOverflowAdjustment(),r.style.transform=`translate3d(${l}px, ${s}px, ${c}px)`);let d,u=t.maxTranslate()-t.minTranslate();u===0?d=0:d=(e-t.minTranslate())/u,d!==a&&t.updateProgress(e),t.emit("setTranslate",t.translate,n)}function Mn(){return-this.snapGrid[0]}function Pn(){return-this.snapGrid[this.snapGrid.length-1]}function kn(e,n,t,i,o){e===void 0&&(e=0),n===void 0&&(n=this.params.speed),t===void 0&&(t=!0),i===void 0&&(i=!0);let r=this,{params:a,wrapperEl:l}=r;if(r.animating&&a.preventInteractionOnTransition)return!1;let s=r.minTranslate(),c=r.maxTranslate(),d;if(i&&e>s?d=s:i&&e<c?d=c:d=e,r.updateProgress(d),a.cssMode){let u=r.isHorizontal();if(n===0)l[u?"scrollLeft":"scrollTop"]=-d;else{if(!r.support.smoothScroll)return He({swiper:r,targetPosition:-d,side:u?"left":"top"}),!0;l.scrollTo({[u?"left":"top"]:-d,behavior:"smooth"})}return!0}return n===0?(r.setTransition(0),r.setTranslate(d),t&&(r.emit("beforeTransitionStart",n,o),r.emit("transitionEnd"))):(r.setTransition(n),r.setTranslate(d),t&&(r.emit("beforeTransitionStart",n,o),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(f){!r||r.destroyed||f.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,r.animating=!1,t&&r.emit("transitionEnd"))}),r.wrapperEl.addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd))),!0}var _n={getTranslate:$n,setTranslate:In,minTranslate:Mn,maxTranslate:Pn,translateTo:kn};function zn(e,n){let t=this;t.params.cssMode||(t.wrapperEl.style.transitionDuration=`${e}ms`,t.wrapperEl.style.transitionDelay=e===0?"0ms":""),t.emit("setTransition",e,n)}function Nt(e){let{swiper:n,runCallbacks:t,direction:i,step:o}=e,{activeIndex:r,previousIndex:a}=n,l=i;if(l||(r>a?l="next":r<a?l="prev":l="reset"),n.emit(`transition${o}`),t&&r!==a){if(l==="reset"){n.emit(`slideResetTransition${o}`);return}n.emit(`slideChangeTransition${o}`),l==="next"?n.emit(`slideNextTransition${o}`):n.emit(`slidePrevTransition${o}`)}}function Ln(e,n){e===void 0&&(e=!0);let t=this,{params:i}=t;i.cssMode||(i.autoHeight&&t.updateAutoHeight(),Nt({swiper:t,runCallbacks:e,direction:n,step:"Start"}))}function On(e,n){e===void 0&&(e=!0);let t=this,{params:i}=t;t.animating=!1,!i.cssMode&&(t.setTransition(0),Nt({swiper:t,runCallbacks:e,direction:n,step:"End"}))}var Dn={setTransition:zn,transitionStart:Ln,transitionEnd:On};function Bn(e,n,t,i,o){e===void 0&&(e=0),t===void 0&&(t=!0),typeof e=="string"&&(e=parseInt(e,10));let r=this,a=e;a<0&&(a=0);let{params:l,snapGrid:s,slidesGrid:c,previousIndex:d,activeIndex:u,rtlTranslate:f,wrapperEl:p,enabled:b}=r;if(!b&&!i&&!o||r.destroyed||r.animating&&l.preventInteractionOnTransition)return!1;typeof n>"u"&&(n=r.params.speed);let g=Math.min(r.params.slidesPerGroupSkip,a),C=g+Math.floor((a-g)/r.params.slidesPerGroup);C>=s.length&&(C=s.length-1);let m=-s[C];if(l.normalizeSlideIndex)for(let P=0;P<c.length;P+=1){let E=-Math.floor(m*100),y=Math.floor(c[P]*100),h=Math.floor(c[P+1]*100);typeof c[P+1]<"u"?E>=y&&E<h-(h-y)/2?a=P:E>=y&&E<h&&(a=P+1):E>=y&&(a=P)}if(r.initialized&&a!==u&&(!r.allowSlideNext&&(f?m>r.translate&&m>r.minTranslate():m<r.translate&&m<r.minTranslate())||!r.allowSlidePrev&&m>r.translate&&m>r.maxTranslate()&&(u||0)!==a))return!1;a!==(d||0)&&t&&r.emit("beforeSlideChangeStart"),r.updateProgress(m);let v;a>u?v="next":a<u?v="prev":v="reset";let w=r.virtual&&r.params.virtual.enabled;if(!(w&&o)&&(f&&-m===r.translate||!f&&m===r.translate))return r.updateActiveIndex(a),l.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),l.effect!=="slide"&&r.setTranslate(m),v!=="reset"&&(r.transitionStart(t,v),r.transitionEnd(t,v)),!1;if(l.cssMode){let P=r.isHorizontal(),E=f?m:-m;if(n===0)w&&(r.wrapperEl.style.scrollSnapType="none",r._immediateVirtual=!0),w&&!r._cssModeVirtualInitialSet&&r.params.initialSlide>0?(r._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{p[P?"scrollLeft":"scrollTop"]=E})):p[P?"scrollLeft":"scrollTop"]=E,w&&requestAnimationFrame(()=>{r.wrapperEl.style.scrollSnapType="",r._immediateVirtual=!1});else{if(!r.support.smoothScroll)return He({swiper:r,targetPosition:E,side:P?"left":"top"}),!0;p.scrollTo({[P?"left":"top"]:E,behavior:"smooth"})}return!0}let M=Vt().isSafari;return w&&!o&&M&&r.isElement&&r.virtual.update(!1,!1,a),r.setTransition(n),r.setTranslate(m),r.updateActiveIndex(a),r.updateSlidesClasses(),r.emit("beforeTransitionStart",n,i),r.transitionStart(t,v),n===0?r.transitionEnd(t,v):r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(E){!r||r.destroyed||E.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(t,v))}),r.wrapperEl.addEventListener("transitionend",r.onSlideToWrapperTransitionEnd)),!0}function An(e,n,t,i){e===void 0&&(e=0),t===void 0&&(t=!0),typeof e=="string"&&(e=parseInt(e,10));let o=this;if(o.destroyed)return;typeof n>"u"&&(n=o.params.speed);let r=o.grid&&o.params.grid&&o.params.grid.rows>1,a=e;if(o.params.loop)if(o.virtual&&o.params.virtual.enabled)a=a+o.virtual.slidesBefore;else{let l;if(r){let f=a*o.params.grid.rows;l=o.slides.find(p=>p.getAttribute("data-swiper-slide-index")*1===f).column}else l=o.getSlideIndexByData(a);let s=r?Math.ceil(o.slides.length/o.params.grid.rows):o.slides.length,{centeredSlides:c}=o.params,d=o.params.slidesPerView;d==="auto"?d=o.slidesPerViewDynamic():(d=Math.ceil(parseFloat(o.params.slidesPerView,10)),c&&d%2===0&&(d=d+1));let u=s-l<d;if(c&&(u=u||l<Math.ceil(d/2)),i&&c&&o.params.slidesPerView!=="auto"&&!r&&(u=!1),u){let f=c?l<o.activeIndex?"prev":"next":l-o.activeIndex-1<o.params.slidesPerView?"next":"prev";o.loopFix({direction:f,slideTo:!0,activeSlideIndex:f==="next"?l+1:l-s+1,slideRealIndex:f==="next"?o.realIndex:void 0})}if(r){let f=a*o.params.grid.rows;a=o.slides.find(p=>p.getAttribute("data-swiper-slide-index")*1===f).column}else a=o.getSlideIndexByData(a)}return requestAnimationFrame(()=>{o.slideTo(a,n,t,i)}),o}function Fn(e,n,t){n===void 0&&(n=!0);let i=this,{enabled:o,params:r,animating:a}=i;if(!o||i.destroyed)return i;typeof e>"u"&&(e=i.params.speed);let l=r.slidesPerGroup;r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(l=Math.max(i.slidesPerViewDynamic("current",!0),1));let s=i.activeIndex<r.slidesPerGroupSkip?1:l,c=i.virtual&&r.virtual.enabled;if(r.loop){if(a&&!c&&r.loopPreventsSliding)return!1;if(i.loopFix({direction:"next"}),i._clientLeft=i.wrapperEl.clientLeft,i.activeIndex===i.slides.length-1&&r.cssMode)return requestAnimationFrame(()=>{i.slideTo(i.activeIndex+s,e,n,t)}),!0}return r.rewind&&i.isEnd?i.slideTo(0,e,n,t):i.slideTo(i.activeIndex+s,e,n,t)}function Gn(e,n,t){n===void 0&&(n=!0);let i=this,{params:o,snapGrid:r,slidesGrid:a,rtlTranslate:l,enabled:s,animating:c}=i;if(!s||i.destroyed)return i;typeof e>"u"&&(e=i.params.speed);let d=i.virtual&&o.virtual.enabled;if(o.loop){if(c&&!d&&o.loopPreventsSliding)return!1;i.loopFix({direction:"prev"}),i._clientLeft=i.wrapperEl.clientLeft}let u=l?i.translate:-i.translate;function f(v){return v<0?-Math.floor(Math.abs(v)):Math.floor(v)}let p=f(u),b=r.map(v=>f(v)),g=o.freeMode&&o.freeMode.enabled,C=r[b.indexOf(p)-1];if(typeof C>"u"&&(o.cssMode||g)){let v;r.forEach((w,S)=>{p>=w&&(v=S)}),typeof v<"u"&&(C=g?r[v]:r[v>0?v-1:v])}let m=0;if(typeof C<"u"&&(m=a.indexOf(C),m<0&&(m=i.activeIndex-1),o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(m=m-i.slidesPerViewDynamic("previous",!0)+1,m=Math.max(m,0))),o.rewind&&i.isBeginning){let v=i.params.virtual&&i.params.virtual.enabled&&i.virtual?i.virtual.slides.length-1:i.slides.length-1;return i.slideTo(v,e,n,t)}else if(o.loop&&i.activeIndex===0&&o.cssMode)return requestAnimationFrame(()=>{i.slideTo(m,e,n,t)}),!0;return i.slideTo(m,e,n,t)}function Vn(e,n,t){n===void 0&&(n=!0);let i=this;if(!i.destroyed)return typeof e>"u"&&(e=i.params.speed),i.slideTo(i.activeIndex,e,n,t)}function Nn(e,n,t,i){n===void 0&&(n=!0),i===void 0&&(i=.5);let o=this;if(o.destroyed)return;typeof e>"u"&&(e=o.params.speed);let r=o.activeIndex,a=Math.min(o.params.slidesPerGroupSkip,r),l=a+Math.floor((r-a)/o.params.slidesPerGroup),s=o.rtlTranslate?o.translate:-o.translate;if(s>=o.snapGrid[l]){let c=o.snapGrid[l],d=o.snapGrid[l+1];s-c>(d-c)*i&&(r+=o.params.slidesPerGroup)}else{let c=o.snapGrid[l-1],d=o.snapGrid[l];s-c<=(d-c)*i&&(r-=o.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,o.slidesGrid.length-1),o.slideTo(r,e,n,t)}function jn(){let e=this;if(e.destroyed)return;let{params:n,slidesEl:t}=e,i=n.slidesPerView==="auto"?e.slidesPerViewDynamic():n.slidesPerView,o=e.clickedIndex,r,a=e.isElement?"swiper-slide":`.${n.slideClass}`;if(n.loop){if(e.animating)return;r=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),n.centeredSlides?o<e.loopedSlides-i/2||o>e.slides.length-e.loopedSlides+i/2?(e.loopFix(),o=e.getSlideIndex(R(t,`${a}[data-swiper-slide-index="${r}"]`)[0]),Ie(()=>{e.slideTo(o)})):e.slideTo(o):o>e.slides.length-i?(e.loopFix(),o=e.getSlideIndex(R(t,`${a}[data-swiper-slide-index="${r}"]`)[0]),Ie(()=>{e.slideTo(o)})):e.slideTo(o)}else e.slideTo(o)}var Rn={slideTo:Bn,slideToLoop:An,slideNext:Fn,slidePrev:Gn,slideReset:Vn,slideToClosest:Nn,slideToClickedSlide:jn};function Hn(e){let n=this,{params:t,slidesEl:i}=n;if(!t.loop||n.virtual&&n.params.virtual.enabled)return;let o=()=>{R(i,`.${t.slideClass}, swiper-slide`).forEach((u,f)=>{u.setAttribute("data-swiper-slide-index",f)})},r=n.grid&&t.grid&&t.grid.rows>1,a=t.slidesPerGroup*(r?t.grid.rows:1),l=n.slides.length%a!==0,s=r&&n.slides.length%t.grid.rows!==0,c=d=>{for(let u=0;u<d;u+=1){let f=n.isElement?Me("swiper-slide",[t.slideBlankClass]):Me("div",[t.slideClass,t.slideBlankClass]);n.slidesEl.append(f)}};if(l){if(t.loopAddBlankSlides){let d=a-n.slides.length%a;c(d),n.recalcSlides(),n.updateSlides()}else fe("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else if(s){if(t.loopAddBlankSlides){let d=t.grid.rows-n.slides.length%t.grid.rows;c(d),n.recalcSlides(),n.updateSlides()}else fe("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else o();n.loopFix({slideRealIndex:e,direction:t.centeredSlides?void 0:"next"})}function Wn(e){let{slideRealIndex:n,slideTo:t=!0,direction:i,setTranslate:o,activeSlideIndex:r,byController:a,byMousewheel:l}=e===void 0?{}:e,s=this;if(!s.params.loop)return;s.emit("beforeLoopFix");let{slides:c,allowSlidePrev:d,allowSlideNext:u,slidesEl:f,params:p}=s,{centeredSlides:b}=p;if(s.allowSlidePrev=!0,s.allowSlideNext=!0,s.virtual&&p.virtual.enabled){t&&(!p.centeredSlides&&s.snapIndex===0?s.slideTo(s.virtual.slides.length,0,!1,!0):p.centeredSlides&&s.snapIndex<p.slidesPerView?s.slideTo(s.virtual.slides.length+s.snapIndex,0,!1,!0):s.snapIndex===s.snapGrid.length-1&&s.slideTo(s.virtual.slidesBefore,0,!1,!0)),s.allowSlidePrev=d,s.allowSlideNext=u,s.emit("loopFix");return}let g=p.slidesPerView;g==="auto"?g=s.slidesPerViewDynamic():(g=Math.ceil(parseFloat(p.slidesPerView,10)),b&&g%2===0&&(g=g+1));let C=p.slidesPerGroupAuto?g:p.slidesPerGroup,m=C;m%C!==0&&(m+=C-m%C),m+=p.loopAdditionalSlides,s.loopedSlides=m;let v=s.grid&&p.grid&&p.grid.rows>1;c.length<g+m?fe("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):v&&p.grid.fill==="row"&&fe("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");let w=[],S=[],x=s.activeIndex;typeof r>"u"?r=s.getSlideIndex(c.find(T=>T.classList.contains(p.slideActiveClass))):x=r;let M=i==="next"||!i,P=i==="prev"||!i,E=0,y=0,h=v?Math.ceil(c.length/p.grid.rows):c.length,I=(v?c[r].column:r)+(b&&typeof o>"u"?-g/2+.5:0);if(I<m){E=Math.max(m-I,C);for(let T=0;T<m-I;T+=1){let k=T-Math.floor(T/h)*h;if(v){let O=h-k-1;for(let W=c.length-1;W>=0;W-=1)c[W].column===O&&w.push(W)}else w.push(h-k-1)}}else if(I+g>h-m){y=Math.max(I-(h-m*2),C);for(let T=0;T<y;T+=1){let k=T-Math.floor(T/h)*h;v?c.forEach((O,W)=>{O.column===k&&S.push(W)}):S.push(k)}}if(s.__preventObserver__=!0,requestAnimationFrame(()=>{s.__preventObserver__=!1}),P&&w.forEach(T=>{c[T].swiperLoopMoveDOM=!0,f.prepend(c[T]),c[T].swiperLoopMoveDOM=!1}),M&&S.forEach(T=>{c[T].swiperLoopMoveDOM=!0,f.append(c[T]),c[T].swiperLoopMoveDOM=!1}),s.recalcSlides(),p.slidesPerView==="auto"?s.updateSlides():v&&(w.length>0&&P||S.length>0&&M)&&s.slides.forEach((T,k)=>{s.grid.updateSlide(k,T,s.slides)}),p.watchSlidesProgress&&s.updateSlidesOffset(),t){if(w.length>0&&P){if(typeof n>"u"){let T=s.slidesGrid[x],O=s.slidesGrid[x+E]-T;l?s.setTranslate(s.translate-O):(s.slideTo(x+Math.ceil(E),0,!1,!0),o&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-O,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-O))}else if(o){let T=v?w.length/p.grid.rows:w.length;s.slideTo(s.activeIndex+T,0,!1,!0),s.touchEventsData.currentTranslate=s.translate}}else if(S.length>0&&M)if(typeof n>"u"){let T=s.slidesGrid[x],O=s.slidesGrid[x-y]-T;l?s.setTranslate(s.translate-O):(s.slideTo(x-y,0,!1,!0),o&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-O,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-O))}else{let T=v?S.length/p.grid.rows:S.length;s.slideTo(s.activeIndex-T,0,!1,!0)}}if(s.allowSlidePrev=d,s.allowSlideNext=u,s.controller&&s.controller.control&&!a){let T={slideRealIndex:n,direction:i,setTranslate:o,activeSlideIndex:r,byController:!0};Array.isArray(s.controller.control)?s.controller.control.forEach(k=>{!k.destroyed&&k.params.loop&&k.loopFix(De(q({},T),{slideTo:k.params.slidesPerView===p.slidesPerView?t:!1}))}):s.controller.control instanceof s.constructor&&s.controller.control.params.loop&&s.controller.control.loopFix(De(q({},T),{slideTo:s.controller.control.params.slidesPerView===p.slidesPerView?t:!1}))}s.emit("loopFix")}function qn(){let e=this,{params:n,slidesEl:t}=e;if(!n.loop||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();let i=[];e.slides.forEach(o=>{let r=typeof o.swiperSlideIndex>"u"?o.getAttribute("data-swiper-slide-index")*1:o.swiperSlideIndex;i[r]=o}),e.slides.forEach(o=>{o.removeAttribute("data-swiper-slide-index")}),i.forEach(o=>{t.append(o)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var Yn={loopCreate:Hn,loopFix:Wn,loopDestroy:qn};function Xn(e){let n=this;if(!n.params.simulateTouch||n.params.watchOverflow&&n.isLocked||n.params.cssMode)return;let t=n.params.touchEventsTarget==="container"?n.el:n.wrapperEl;n.isElement&&(n.__preventObserver__=!0),t.style.cursor="move",t.style.cursor=e?"grabbing":"grab",n.isElement&&requestAnimationFrame(()=>{n.__preventObserver__=!1})}function Qn(){let e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var Un={setGrabCursor:Xn,unsetGrabCursor:Qn};function Jn(e,n){n===void 0&&(n=this);function t(i){if(!i||i===j()||i===z())return null;i.assignedSlot&&(i=i.assignedSlot);let o=i.closest(e);return!o&&!i.getRootNode?null:o||t(i.getRootNode().host)}return t(n)}function Dt(e,n,t){let i=z(),{params:o}=e,r=o.edgeSwipeDetection,a=o.edgeSwipeThreshold;return r&&(t<=a||t>=i.innerWidth-a)?r==="prevent"?(n.preventDefault(),!0):!1:!0}function Kn(e){let n=this,t=j(),i=e;i.originalEvent&&(i=i.originalEvent);let o=n.touchEventsData;if(i.type==="pointerdown"){if(o.pointerId!==null&&o.pointerId!==i.pointerId)return;o.pointerId=i.pointerId}else i.type==="touchstart"&&i.targetTouches.length===1&&(o.touchId=i.targetTouches[0].identifier);if(i.type==="touchstart"){Dt(n,i,i.targetTouches[0].pageX);return}let{params:r,touches:a,enabled:l}=n;if(!l||!r.simulateTouch&&i.pointerType==="mouse"||n.animating&&r.preventInteractionOnTransition)return;!n.animating&&r.cssMode&&r.loop&&n.loopFix();let s=i.target;if(r.touchEventsTarget==="wrapper"&&!kt(s,n.wrapperEl)||"which"in i&&i.which===3||"button"in i&&i.button>0||o.isTouched&&o.isMoved)return;let c=!!r.noSwipingClass&&r.noSwipingClass!=="",d=i.composedPath?i.composedPath():i.path;c&&i.target&&i.target.shadowRoot&&d&&(s=d[0]);let u=r.noSwipingSelector?r.noSwipingSelector:`.${r.noSwipingClass}`,f=!!(i.target&&i.target.shadowRoot);if(r.noSwiping&&(f?Jn(u,s):s.closest(u))){n.allowClick=!0;return}if(r.swipeHandler&&!s.closest(r.swipeHandler))return;a.currentX=i.pageX,a.currentY=i.pageY;let p=a.currentX,b=a.currentY;if(!Dt(n,i,p))return;Object.assign(o,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=p,a.startY=b,o.touchStartTime=ue(),n.allowClick=!0,n.updateSize(),n.swipeDirection=void 0,r.threshold>0&&(o.allowThresholdMove=!1);let g=!0;s.matches(o.focusableElements)&&(g=!1,s.nodeName==="SELECT"&&(o.isTouched=!1)),t.activeElement&&t.activeElement.matches(o.focusableElements)&&t.activeElement!==s&&(i.pointerType==="mouse"||i.pointerType!=="mouse"&&!s.matches(o.focusableElements))&&t.activeElement.blur();let C=g&&n.allowTouchMove&&r.touchStartPreventDefault;(r.touchStartForcePreventDefault||C)&&!s.isContentEditable&&i.preventDefault(),r.freeMode&&r.freeMode.enabled&&n.freeMode&&n.animating&&!r.cssMode&&n.freeMode.onTouchStart(),n.emit("touchStart",i)}function Zn(e){let n=j(),t=this,i=t.touchEventsData,{params:o,touches:r,rtlTranslate:a,enabled:l}=t;if(!l||!o.simulateTouch&&e.pointerType==="mouse")return;let s=e;if(s.originalEvent&&(s=s.originalEvent),s.type==="pointermove"&&(i.touchId!==null||s.pointerId!==i.pointerId))return;let c;if(s.type==="touchmove"){if(c=[...s.changedTouches].find(M=>M.identifier===i.touchId),!c||c.identifier!==i.touchId)return}else c=s;if(!i.isTouched){i.startMoving&&i.isScrolling&&t.emit("touchMoveOpposite",s);return}let d=c.pageX,u=c.pageY;if(s.preventedByNestedSwiper){r.startX=d,r.startY=u;return}if(!t.allowTouchMove){s.target.matches(i.focusableElements)||(t.allowClick=!1),i.isTouched&&(Object.assign(r,{startX:d,startY:u,currentX:d,currentY:u}),i.touchStartTime=ue());return}if(o.touchReleaseOnEdges&&!o.loop){if(t.isVertical()){if(u<r.startY&&t.translate<=t.maxTranslate()||u>r.startY&&t.translate>=t.minTranslate()){i.isTouched=!1,i.isMoved=!1;return}}else if(d<r.startX&&t.translate<=t.maxTranslate()||d>r.startX&&t.translate>=t.minTranslate())return}if(n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==s.target&&s.pointerType!=="mouse"&&n.activeElement.blur(),n.activeElement&&s.target===n.activeElement&&s.target.matches(i.focusableElements)){i.isMoved=!0,t.allowClick=!1;return}i.allowTouchCallbacks&&t.emit("touchMove",s),r.previousX=r.currentX,r.previousY=r.currentY,r.currentX=d,r.currentY=u;let f=r.currentX-r.startX,p=r.currentY-r.startY;if(t.params.threshold&&Math.sqrt(f**2+p**2)<t.params.threshold)return;if(typeof i.isScrolling>"u"){let M;t.isHorizontal()&&r.currentY===r.startY||t.isVertical()&&r.currentX===r.startX?i.isScrolling=!1:f*f+p*p>=25&&(M=Math.atan2(Math.abs(p),Math.abs(f))*180/Math.PI,i.isScrolling=t.isHorizontal()?M>o.touchAngle:90-M>o.touchAngle)}if(i.isScrolling&&t.emit("touchMoveOpposite",s),typeof i.startMoving>"u"&&(r.currentX!==r.startX||r.currentY!==r.startY)&&(i.startMoving=!0),i.isScrolling||s.type==="touchmove"&&i.preventTouchMoveFromPointerMove){i.isTouched=!1;return}if(!i.startMoving)return;t.allowClick=!1,!o.cssMode&&s.cancelable&&s.preventDefault(),o.touchMoveStopPropagation&&!o.nested&&s.stopPropagation();let b=t.isHorizontal()?f:p,g=t.isHorizontal()?r.currentX-r.previousX:r.currentY-r.previousY;o.oneWayMovement&&(b=Math.abs(b)*(a?1:-1),g=Math.abs(g)*(a?1:-1)),r.diff=b,b*=o.touchRatio,a&&(b=-b,g=-g);let C=t.touchesDirection;t.swipeDirection=b>0?"prev":"next",t.touchesDirection=g>0?"prev":"next";let m=t.params.loop&&!o.cssMode,v=t.touchesDirection==="next"&&t.allowSlideNext||t.touchesDirection==="prev"&&t.allowSlidePrev;if(!i.isMoved){if(m&&v&&t.loopFix({direction:t.swipeDirection}),i.startTranslate=t.getTranslate(),t.setTransition(0),t.animating){let M=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});t.wrapperEl.dispatchEvent(M)}i.allowMomentumBounce=!1,o.grabCursor&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!0),t.emit("sliderFirstMove",s)}let w;if(new Date().getTime(),o._loopSwapReset!==!1&&i.isMoved&&i.allowThresholdMove&&C!==t.touchesDirection&&m&&v&&Math.abs(b)>=1){Object.assign(r,{startX:d,startY:u,currentX:d,currentY:u,startTranslate:i.currentTranslate}),i.loopSwapReset=!0,i.startTranslate=i.currentTranslate;return}t.emit("sliderMove",s),i.isMoved=!0,i.currentTranslate=b+i.startTranslate;let S=!0,x=o.resistanceRatio;if(o.touchReleaseOnEdges&&(x=0),b>0?(m&&v&&!w&&i.allowThresholdMove&&i.currentTranslate>(o.centeredSlides?t.minTranslate()-t.slidesSizesGrid[t.activeIndex+1]-(o.slidesPerView!=="auto"&&t.slides.length-o.slidesPerView>=2?t.slidesSizesGrid[t.activeIndex+1]+t.params.spaceBetween:0)-t.params.spaceBetween:t.minTranslate())&&t.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),i.currentTranslate>t.minTranslate()&&(S=!1,o.resistance&&(i.currentTranslate=t.minTranslate()-1+(-t.minTranslate()+i.startTranslate+b)**x))):b<0&&(m&&v&&!w&&i.allowThresholdMove&&i.currentTranslate<(o.centeredSlides?t.maxTranslate()+t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween+(o.slidesPerView!=="auto"&&t.slides.length-o.slidesPerView>=2?t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween:0):t.maxTranslate())&&t.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:t.slides.length-(o.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(parseFloat(o.slidesPerView,10)))}),i.currentTranslate<t.maxTranslate()&&(S=!1,o.resistance&&(i.currentTranslate=t.maxTranslate()+1-(t.maxTranslate()-i.startTranslate-b)**x))),S&&(s.preventedByNestedSwiper=!0),!t.allowSlideNext&&t.swipeDirection==="next"&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!t.allowSlidePrev&&t.swipeDirection==="prev"&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),!t.allowSlidePrev&&!t.allowSlideNext&&(i.currentTranslate=i.startTranslate),o.threshold>0)if(Math.abs(b)>o.threshold||i.allowThresholdMove){if(!i.allowThresholdMove){i.allowThresholdMove=!0,r.startX=r.currentX,r.startY=r.currentY,i.currentTranslate=i.startTranslate,r.diff=t.isHorizontal()?r.currentX-r.startX:r.currentY-r.startY;return}}else{i.currentTranslate=i.startTranslate;return}!o.followFinger||o.cssMode||((o.freeMode&&o.freeMode.enabled&&t.freeMode||o.watchSlidesProgress)&&(t.updateActiveIndex(),t.updateSlidesClasses()),o.freeMode&&o.freeMode.enabled&&t.freeMode&&t.freeMode.onTouchMove(),t.updateProgress(i.currentTranslate),t.setTranslate(i.currentTranslate))}function ei(e){let n=this,t=n.touchEventsData,i=e;i.originalEvent&&(i=i.originalEvent);let o;if(i.type==="touchend"||i.type==="touchcancel"){if(o=[...i.changedTouches].find(x=>x.identifier===t.touchId),!o||o.identifier!==t.touchId)return}else{if(t.touchId!==null||i.pointerId!==t.pointerId)return;o=i}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(i.type)&&!(["pointercancel","contextmenu"].includes(i.type)&&(n.browser.isSafari||n.browser.isWebView)))return;t.pointerId=null,t.touchId=null;let{params:a,touches:l,rtlTranslate:s,slidesGrid:c,enabled:d}=n;if(!d||!a.simulateTouch&&i.pointerType==="mouse")return;if(t.allowTouchCallbacks&&n.emit("touchEnd",i),t.allowTouchCallbacks=!1,!t.isTouched){t.isMoved&&a.grabCursor&&n.setGrabCursor(!1),t.isMoved=!1,t.startMoving=!1;return}a.grabCursor&&t.isMoved&&t.isTouched&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!1);let u=ue(),f=u-t.touchStartTime;if(n.allowClick){let x=i.path||i.composedPath&&i.composedPath();n.updateClickedSlide(x&&x[0]||i.target,x),n.emit("tap click",i),f<300&&u-t.lastClickTime<300&&n.emit("doubleTap doubleClick",i)}if(t.lastClickTime=ue(),Ie(()=>{n.destroyed||(n.allowClick=!0)}),!t.isTouched||!t.isMoved||!n.swipeDirection||l.diff===0&&!t.loopSwapReset||t.currentTranslate===t.startTranslate&&!t.loopSwapReset){t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;return}t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;let p;if(a.followFinger?p=s?n.translate:-n.translate:p=-t.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){n.freeMode.onTouchEnd({currentPos:p});return}let b=p>=-n.maxTranslate()&&!n.params.loop,g=0,C=n.slidesSizesGrid[0];for(let x=0;x<c.length;x+=x<a.slidesPerGroupSkip?1:a.slidesPerGroup){let M=x<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;typeof c[x+M]<"u"?(b||p>=c[x]&&p<c[x+M])&&(g=x,C=c[x+M]-c[x]):(b||p>=c[x])&&(g=x,C=c[c.length-1]-c[c.length-2])}let m=null,v=null;a.rewind&&(n.isBeginning?v=a.virtual&&a.virtual.enabled&&n.virtual?n.virtual.slides.length-1:n.slides.length-1:n.isEnd&&(m=0));let w=(p-c[g])/C,S=g<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(f>a.longSwipesMs){if(!a.longSwipes){n.slideTo(n.activeIndex);return}n.swipeDirection==="next"&&(w>=a.longSwipesRatio?n.slideTo(a.rewind&&n.isEnd?m:g+S):n.slideTo(g)),n.swipeDirection==="prev"&&(w>1-a.longSwipesRatio?n.slideTo(g+S):v!==null&&w<0&&Math.abs(w)>a.longSwipesRatio?n.slideTo(v):n.slideTo(g))}else{if(!a.shortSwipes){n.slideTo(n.activeIndex);return}n.navigation&&(i.target===n.navigation.nextEl||i.target===n.navigation.prevEl)?i.target===n.navigation.nextEl?n.slideTo(g+S):n.slideTo(g):(n.swipeDirection==="next"&&n.slideTo(m!==null?m:g+S),n.swipeDirection==="prev"&&n.slideTo(v!==null?v:g))}}function Bt(){let e=this,{params:n,el:t}=e;if(t&&t.offsetWidth===0)return;n.breakpoints&&e.setBreakpoint();let{allowSlideNext:i,allowSlidePrev:o,snapGrid:r}=e,a=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();let l=a&&n.loop;(n.slidesPerView==="auto"||n.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!l?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!a?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=o,e.allowSlideNext=i,e.params.watchOverflow&&r!==e.snapGrid&&e.checkOverflow()}function ti(e){let n=this;n.enabled&&(n.allowClick||(n.params.preventClicks&&e.preventDefault(),n.params.preventClicksPropagation&&n.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function ni(){let e=this,{wrapperEl:n,rtlTranslate:t,enabled:i}=e;if(!i)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-n.scrollLeft:e.translate=-n.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let o,r=e.maxTranslate()-e.minTranslate();r===0?o=0:o=(e.translate-e.minTranslate())/r,o!==e.progress&&e.updateProgress(t?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function ii(e){let n=this;Pe(n,e.target),!(n.params.cssMode||n.params.slidesPerView!=="auto"&&!n.params.autoHeight)&&n.update()}function oi(){let e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}var jt=(e,n)=>{let t=j(),{params:i,el:o,wrapperEl:r,device:a}=e,l=!!i.nested,s=n==="on"?"addEventListener":"removeEventListener",c=n;!o||typeof o=="string"||(t[s]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:l}),o[s]("touchstart",e.onTouchStart,{passive:!1}),o[s]("pointerdown",e.onTouchStart,{passive:!1}),t[s]("touchmove",e.onTouchMove,{passive:!1,capture:l}),t[s]("pointermove",e.onTouchMove,{passive:!1,capture:l}),t[s]("touchend",e.onTouchEnd,{passive:!0}),t[s]("pointerup",e.onTouchEnd,{passive:!0}),t[s]("pointercancel",e.onTouchEnd,{passive:!0}),t[s]("touchcancel",e.onTouchEnd,{passive:!0}),t[s]("pointerout",e.onTouchEnd,{passive:!0}),t[s]("pointerleave",e.onTouchEnd,{passive:!0}),t[s]("contextmenu",e.onTouchEnd,{passive:!0}),(i.preventClicks||i.preventClicksPropagation)&&o[s]("click",e.onClick,!0),i.cssMode&&r[s]("scroll",e.onScroll),i.updateOnWindowResize?e[c](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",Bt,!0):e[c]("observerUpdate",Bt,!0),o[s]("load",e.onLoad,{capture:!0}))};function ri(){let e=this,{params:n}=e;e.onTouchStart=Kn.bind(e),e.onTouchMove=Zn.bind(e),e.onTouchEnd=ei.bind(e),e.onDocumentTouchStart=oi.bind(e),n.cssMode&&(e.onScroll=ni.bind(e)),e.onClick=ti.bind(e),e.onLoad=ii.bind(e),jt(e,"on")}function si(){jt(this,"off")}var ai={attachEvents:ri,detachEvents:si},At=(e,n)=>e.grid&&n.grid&&n.grid.rows>1;function li(){let e=this,{realIndex:n,initialized:t,params:i,el:o}=e,r=i.breakpoints;if(!r||r&&Object.keys(r).length===0)return;let a=j(),l=i.breakpointsBase==="window"||!i.breakpointsBase?i.breakpointsBase:"container",s=["window","container"].includes(i.breakpointsBase)||!i.breakpointsBase?e.el:a.querySelector(i.breakpointsBase),c=e.getBreakpoint(r,l,s);if(!c||e.currentBreakpoint===c)return;let u=(c in r?r[c]:void 0)||e.originalParams,f=At(e,i),p=At(e,u),b=e.params.grabCursor,g=u.grabCursor,C=i.enabled;f&&!p?(o.classList.remove(`${i.containerModifierClass}grid`,`${i.containerModifierClass}grid-column`),e.emitContainerClasses()):!f&&p&&(o.classList.add(`${i.containerModifierClass}grid`),(u.grid.fill&&u.grid.fill==="column"||!u.grid.fill&&i.grid.fill==="column")&&o.classList.add(`${i.containerModifierClass}grid-column`),e.emitContainerClasses()),b&&!g?e.unsetGrabCursor():!b&&g&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(M=>{if(typeof u[M]>"u")return;let P=i[M]&&i[M].enabled,E=u[M]&&u[M].enabled;P&&!E&&e[M].disable(),!P&&E&&e[M].enable()});let m=u.direction&&u.direction!==i.direction,v=i.loop&&(u.slidesPerView!==i.slidesPerView||m),w=i.loop;m&&t&&e.changeDirection(),D(e.params,u);let S=e.params.enabled,x=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),C&&!S?e.disable():!C&&S&&e.enable(),e.currentBreakpoint=c,e.emit("_beforeBreakpoint",u),t&&(v?(e.loopDestroy(),e.loopCreate(n),e.updateSlides()):!w&&x?(e.loopCreate(n),e.updateSlides()):w&&!x&&e.loopDestroy()),e.emit("breakpoint",u)}function di(e,n,t){if(n===void 0&&(n="window"),!e||n==="container"&&!t)return;let i=!1,o=z(),r=n==="window"?o.innerHeight:t.clientHeight,a=Object.keys(e).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){let s=parseFloat(l.substr(1));return{value:r*s,point:l}}return{value:l,point:l}});a.sort((l,s)=>parseInt(l.value,10)-parseInt(s.value,10));for(let l=0;l<a.length;l+=1){let{point:s,value:c}=a[l];n==="window"?o.matchMedia(`(min-width: ${c}px)`).matches&&(i=s):c<=t.clientWidth&&(i=s)}return i||"max"}var ci={setBreakpoint:li,getBreakpoint:di};function ui(e,n){let t=[];return e.forEach(i=>{typeof i=="object"?Object.keys(i).forEach(o=>{i[o]&&t.push(n+o)}):typeof i=="string"&&t.push(n+i)}),t}function pi(){let e=this,{classNames:n,params:t,rtl:i,el:o,device:r}=e,a=ui(["initialized",t.direction,{"free-mode":e.params.freeMode&&t.freeMode.enabled},{autoheight:t.autoHeight},{rtl:i},{grid:t.grid&&t.grid.rows>1},{"grid-column":t.grid&&t.grid.rows>1&&t.grid.fill==="column"},{android:r.android},{ios:r.ios},{"css-mode":t.cssMode},{centered:t.cssMode&&t.centeredSlides},{"watch-progress":t.watchSlidesProgress}],t.containerModifierClass);n.push(...a),o.classList.add(...n),e.emitContainerClasses()}function fi(){let e=this,{el:n,classNames:t}=e;!n||typeof n=="string"||(n.classList.remove(...t),e.emitContainerClasses())}var bi={addClasses:pi,removeClasses:fi};function gi(){let e=this,{isLocked:n,params:t}=e,{slidesOffsetBefore:i}=t;if(i){let o=e.slides.length-1,r=e.slidesGrid[o]+e.slidesSizesGrid[o]+i*2;e.isLocked=e.size>r}else e.isLocked=e.snapGrid.length===1;t.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),t.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),n&&n!==e.isLocked&&(e.isEnd=!1),n!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var hi={checkOverflow:gi},ke={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function mi(e,n){return function(i){i===void 0&&(i={});let o=Object.keys(i)[0],r=i[o];if(typeof r!="object"||r===null){D(n,i);return}if(e[o]===!0&&(e[o]={enabled:!0}),o==="navigation"&&e[o]&&e[o].enabled&&!e[o].prevEl&&!e[o].nextEl&&(e[o].auto=!0),["pagination","scrollbar"].indexOf(o)>=0&&e[o]&&e[o].enabled&&!e[o].el&&(e[o].auto=!0),!(o in e&&"enabled"in r)){D(n,i);return}typeof e[o]=="object"&&!("enabled"in e[o])&&(e[o].enabled=!0),e[o]||(e[o]={enabled:!1}),D(n,i)}}var Ke={eventsEmitter:bn,update:En,translate:_n,transition:Dn,slide:Rn,loop:Yn,grabCursor:Un,events:ai,breakpoints:ci,checkOverflow:hi,classes:bi},Ze={},_e=class e{constructor(){let n,t;for(var i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r];o.length===1&&o[0].constructor&&Object.prototype.toString.call(o[0]).slice(8,-1)==="Object"?t=o[0]:[n,t]=o,t||(t={}),t=D({},t),n&&!t.el&&(t.el=n);let a=j();if(t.el&&typeof t.el=="string"&&a.querySelectorAll(t.el).length>1){let d=[];return a.querySelectorAll(t.el).forEach(u=>{let f=D({},t,{el:u});d.push(new e(f))}),d}let l=this;l.__swiper__=!0,l.support=Ft(),l.device=Gt({userAgent:t.userAgent}),l.browser=Vt(),l.eventsListeners={},l.eventsAnyListeners=[],l.modules=[...l.__modules__],t.modules&&Array.isArray(t.modules)&&l.modules.push(...t.modules);let s={};l.modules.forEach(d=>{d({params:t,swiper:l,extendParams:mi(t,s),on:l.on.bind(l),once:l.once.bind(l),off:l.off.bind(l),emit:l.emit.bind(l)})});let c=D({},ke,s);return l.params=D({},c,Ze,t),l.originalParams=D({},l.params),l.passedParams=D({},t),l.params&&l.params.on&&Object.keys(l.params.on).forEach(d=>{l.on(d,l.params.on[d])}),l.params&&l.params.onAny&&l.onAny(l.params.onAny),Object.assign(l,{enabled:l.params.enabled,el:n,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return l.params.direction==="horizontal"},isVertical(){return l.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:l.params.allowSlideNext,allowSlidePrev:l.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:l.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:l.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),l.emit("_swiper"),l.params.init&&l.init(),l}getDirectionLabel(n){return this.isHorizontal()?n:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[n]}getSlideIndex(n){let{slidesEl:t,params:i}=this,o=R(t,`.${i.slideClass}, swiper-slide`),r=We(o[0]);return We(n)-r}getSlideIndexByData(n){return this.getSlideIndex(this.slides.find(t=>t.getAttribute("data-swiper-slide-index")*1===n))}recalcSlides(){let n=this,{slidesEl:t,params:i}=n;n.slides=R(t,`.${i.slideClass}, swiper-slide`)}enable(){let n=this;n.enabled||(n.enabled=!0,n.params.grabCursor&&n.setGrabCursor(),n.emit("enable"))}disable(){let n=this;n.enabled&&(n.enabled=!1,n.params.grabCursor&&n.unsetGrabCursor(),n.emit("disable"))}setProgress(n,t){let i=this;n=Math.min(Math.max(n,0),1);let o=i.minTranslate(),a=(i.maxTranslate()-o)*n+o;i.translateTo(a,typeof t>"u"?0:t),i.updateActiveIndex(),i.updateSlidesClasses()}emitContainerClasses(){let n=this;if(!n.params._emitClasses||!n.el)return;let t=n.el.className.split(" ").filter(i=>i.indexOf("swiper")===0||i.indexOf(n.params.containerModifierClass)===0);n.emit("_containerClasses",t.join(" "))}getSlideClasses(n){let t=this;return t.destroyed?"":n.className.split(" ").filter(i=>i.indexOf("swiper-slide")===0||i.indexOf(t.params.slideClass)===0).join(" ")}emitSlidesClasses(){let n=this;if(!n.params._emitClasses||!n.el)return;let t=[];n.slides.forEach(i=>{let o=n.getSlideClasses(i);t.push({slideEl:i,classNames:o}),n.emit("_slideClass",i,o)}),n.emit("_slideClasses",t)}slidesPerViewDynamic(n,t){n===void 0&&(n="current"),t===void 0&&(t=!1);let i=this,{params:o,slides:r,slidesGrid:a,slidesSizesGrid:l,size:s,activeIndex:c}=i,d=1;if(typeof o.slidesPerView=="number")return o.slidesPerView;if(o.centeredSlides){let u=r[c]?Math.ceil(r[c].swiperSlideSize):0,f;for(let p=c+1;p<r.length;p+=1)r[p]&&!f&&(u+=Math.ceil(r[p].swiperSlideSize),d+=1,u>s&&(f=!0));for(let p=c-1;p>=0;p-=1)r[p]&&!f&&(u+=r[p].swiperSlideSize,d+=1,u>s&&(f=!0))}else if(n==="current")for(let u=c+1;u<r.length;u+=1)(t?a[u]+l[u]-a[c]<s:a[u]-a[c]<s)&&(d+=1);else for(let u=c-1;u>=0;u-=1)a[c]-a[u]<s&&(d+=1);return d}update(){let n=this;if(!n||n.destroyed)return;let{snapGrid:t,params:i}=n;i.breakpoints&&n.setBreakpoint(),[...n.el.querySelectorAll('[loading="lazy"]')].forEach(a=>{a.complete&&Pe(n,a)}),n.updateSize(),n.updateSlides(),n.updateProgress(),n.updateSlidesClasses();function o(){let a=n.rtlTranslate?n.translate*-1:n.translate,l=Math.min(Math.max(a,n.maxTranslate()),n.minTranslate());n.setTranslate(l),n.updateActiveIndex(),n.updateSlidesClasses()}let r;if(i.freeMode&&i.freeMode.enabled&&!i.cssMode)o(),i.autoHeight&&n.updateAutoHeight();else{if((i.slidesPerView==="auto"||i.slidesPerView>1)&&n.isEnd&&!i.centeredSlides){let a=n.virtual&&i.virtual.enabled?n.virtual.slides:n.slides;r=n.slideTo(a.length-1,0,!1,!0)}else r=n.slideTo(n.activeIndex,0,!1,!0);r||o()}i.watchOverflow&&t!==n.snapGrid&&n.checkOverflow(),n.emit("update")}changeDirection(n,t){t===void 0&&(t=!0);let i=this,o=i.params.direction;return n||(n=o==="horizontal"?"vertical":"horizontal"),n===o||n!=="horizontal"&&n!=="vertical"||(i.el.classList.remove(`${i.params.containerModifierClass}${o}`),i.el.classList.add(`${i.params.containerModifierClass}${n}`),i.emitContainerClasses(),i.params.direction=n,i.slides.forEach(r=>{n==="vertical"?r.style.width="":r.style.height=""}),i.emit("changeDirection"),t&&i.update()),i}changeLanguageDirection(n){let t=this;t.rtl&&n==="rtl"||!t.rtl&&n==="ltr"||(t.rtl=n==="rtl",t.rtlTranslate=t.params.direction==="horizontal"&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(n){let t=this;if(t.mounted)return!0;let i=n||t.params.el;if(typeof i=="string"&&(i=document.querySelector(i)),!i)return!1;i.swiper=t,i.parentNode&&i.parentNode.host&&i.parentNode.host.nodeName===t.params.swiperElementNodeName.toUpperCase()&&(t.isElement=!0);let o=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`,a=i&&i.shadowRoot&&i.shadowRoot.querySelector?i.shadowRoot.querySelector(o()):R(i,o())[0];return!a&&t.params.createElements&&(a=Me("div",t.params.wrapperClass),i.append(a),R(i,`.${t.params.slideClass}`).forEach(l=>{a.append(l)})),Object.assign(t,{el:i,wrapperEl:a,slidesEl:t.isElement&&!i.parentNode.host.slideSlots?i.parentNode.host:a,hostEl:t.isElement?i.parentNode.host:i,mounted:!0,rtl:i.dir.toLowerCase()==="rtl"||H(i,"direction")==="rtl",rtlTranslate:t.params.direction==="horizontal"&&(i.dir.toLowerCase()==="rtl"||H(i,"direction")==="rtl"),wrongRTL:H(a,"display")==="-webkit-box"}),!0}init(n){let t=this;if(t.initialized||t.mount(n)===!1)return t;t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(),t.attachEvents();let o=[...t.el.querySelectorAll('[loading="lazy"]')];return t.isElement&&o.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),o.forEach(r=>{r.complete?Pe(t,r):r.addEventListener("load",a=>{Pe(t,a.target)})}),et(t),t.initialized=!0,et(t),t.emit("init"),t.emit("afterInit"),t}destroy(n,t){n===void 0&&(n=!0),t===void 0&&(t=!0);let i=this,{params:o,el:r,wrapperEl:a,slides:l}=i;return typeof i.params>"u"||i.destroyed||(i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),o.loop&&i.loopDestroy(),t&&(i.removeClasses(),r&&typeof r!="string"&&r.removeAttribute("style"),a&&a.removeAttribute("style"),l&&l.length&&l.forEach(s=>{s.classList.remove(o.slideVisibleClass,o.slideFullyVisibleClass,o.slideActiveClass,o.slideNextClass,o.slidePrevClass),s.removeAttribute("style"),s.removeAttribute("data-swiper-slide-index")})),i.emit("destroy"),Object.keys(i.eventsListeners).forEach(s=>{i.off(s)}),n!==!1&&(i.el&&typeof i.el!="string"&&(i.el.swiper=null),Mt(i)),i.destroyed=!0),null}static extendDefaults(n){D(Ze,n)}static get extendedDefaults(){return Ze}static get defaults(){return ke}static installModule(n){e.prototype.__modules__||(e.prototype.__modules__=[]);let t=e.prototype.__modules__;typeof n=="function"&&t.indexOf(n)<0&&t.push(n)}static use(n){return Array.isArray(n)?(n.forEach(t=>e.installModule(t)),e):(e.installModule(n),e)}};Object.keys(Ke).forEach(e=>{Object.keys(Ke[e]).forEach(n=>{_e.prototype[n]=Ke[e][n]})});_e.use([pn,fn]);var Rt=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function ee(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function ze(e,n){let t=["__proto__","constructor","prototype"];Object.keys(n).filter(i=>t.indexOf(i)<0).forEach(i=>{typeof e[i]>"u"?e[i]=n[i]:ee(n[i])&&ee(e[i])&&Object.keys(n[i]).length>0?n[i].__swiper__?e[i]=n[i]:ze(e[i],n[i]):e[i]=n[i]})}function eo(e){return e===void 0&&(e={}),e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function to(e){return e===void 0&&(e={}),e.pagination&&typeof e.pagination.el>"u"}function no(e){return e===void 0&&(e={}),e.scrollbar&&typeof e.scrollbar.el>"u"}function Le(e){return e===void 0&&(e=""),e.replace(/-[a-z]/g,n=>n.toUpperCase().replace("-",""))}function io(e){let{swiper:n,slides:t,passedParams:i,changedParams:o,nextEl:r,prevEl:a,scrollbarEl:l,paginationEl:s}=e,c=o.filter(y=>y!=="children"&&y!=="direction"&&y!=="wrapperClass"),{params:d,pagination:u,navigation:f,scrollbar:p,virtual:b,thumbs:g}=n,C,m,v,w,S,x,M,P;o.includes("thumbs")&&i.thumbs&&i.thumbs.swiper&&!i.thumbs.swiper.destroyed&&d.thumbs&&(!d.thumbs.swiper||d.thumbs.swiper.destroyed)&&(C=!0),o.includes("controller")&&i.controller&&i.controller.control&&d.controller&&!d.controller.control&&(m=!0),o.includes("pagination")&&i.pagination&&(i.pagination.el||s)&&(d.pagination||d.pagination===!1)&&u&&!u.el&&(v=!0),o.includes("scrollbar")&&i.scrollbar&&(i.scrollbar.el||l)&&(d.scrollbar||d.scrollbar===!1)&&p&&!p.el&&(w=!0),o.includes("navigation")&&i.navigation&&(i.navigation.prevEl||a)&&(i.navigation.nextEl||r)&&(d.navigation||d.navigation===!1)&&f&&!f.prevEl&&!f.nextEl&&(S=!0);let E=y=>{n[y]&&(n[y].destroy(),y==="navigation"?(n.isElement&&(n[y].prevEl.remove(),n[y].nextEl.remove()),d[y].prevEl=void 0,d[y].nextEl=void 0,n[y].prevEl=void 0,n[y].nextEl=void 0):(n.isElement&&n[y].el.remove(),d[y].el=void 0,n[y].el=void 0))};o.includes("loop")&&n.isElement&&(d.loop&&!i.loop?x=!0:!d.loop&&i.loop?M=!0:P=!0),c.forEach(y=>{if(ee(d[y])&&ee(i[y]))Object.assign(d[y],i[y]),(y==="navigation"||y==="pagination"||y==="scrollbar")&&"enabled"in i[y]&&!i[y].enabled&&E(y);else{let h=i[y];(h===!0||h===!1)&&(y==="navigation"||y==="pagination"||y==="scrollbar")?h===!1&&E(y):d[y]=i[y]}}),c.includes("controller")&&!m&&n.controller&&n.controller.control&&d.controller&&d.controller.control&&(n.controller.control=d.controller.control),o.includes("children")&&t&&b&&d.virtual.enabled?(b.slides=t,b.update(!0)):o.includes("virtual")&&b&&d.virtual.enabled&&(t&&(b.slides=t),b.update(!0)),o.includes("children")&&t&&d.loop&&(P=!0),C&&g.init()&&g.update(!0),m&&(n.controller.control=d.controller.control),v&&(n.isElement&&(!s||typeof s=="string")&&(s=document.createElement("div"),s.classList.add("swiper-pagination"),s.part.add("pagination"),n.el.appendChild(s)),s&&(d.pagination.el=s),u.init(),u.render(),u.update()),w&&(n.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-scrollbar"),l.part.add("scrollbar"),n.el.appendChild(l)),l&&(d.scrollbar.el=l),p.init(),p.updateSize(),p.setTranslate()),S&&(n.isElement&&((!r||typeof r=="string")&&(r=document.createElement("div"),r.classList.add("swiper-button-next"),r.innerHTML=n.hostEl.constructor.nextButtonSvg,r.part.add("button-next"),n.el.appendChild(r)),(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-button-prev"),a.innerHTML=n.hostEl.constructor.prevButtonSvg,a.part.add("button-prev"),n.el.appendChild(a))),r&&(d.navigation.nextEl=r),a&&(d.navigation.prevEl=a),f.init(),f.update()),o.includes("allowSlideNext")&&(n.allowSlideNext=i.allowSlideNext),o.includes("allowSlidePrev")&&(n.allowSlidePrev=i.allowSlidePrev),o.includes("direction")&&n.changeDirection(i.direction,!1),(x||P)&&n.loopDestroy(),(M||P)&&n.loopCreate(),n.update()}var Ht=e=>{if(parseFloat(e)===Number(e))return Number(e);if(e==="true"||e==="")return!0;if(e==="false")return!1;if(e==="null")return null;if(e!=="undefined"){if(typeof e=="string"&&e.includes("{")&&e.includes("}")&&e.includes('"')){let n;try{n=JSON.parse(e)}catch{n=e}return n}return e}},Wt=["a11y","autoplay","controller","cards-effect","coverflow-effect","creative-effect","cube-effect","fade-effect","flip-effect","free-mode","grid","hash-navigation","history","keyboard","mousewheel","navigation","pagination","parallax","scrollbar","thumbs","virtual","zoom"];function ao(e,n,t){let i={},o={};ze(i,ke);let r=[...Rt,"on"],a=r.map(s=>s.replace(/_/,""));r.forEach(s=>{s=s.replace("_",""),typeof e[s]<"u"&&(o[s]=e[s])});let l=[...e.attributes];return typeof n=="string"&&typeof t<"u"&&l.push({name:n,value:ee(t)?q({},t):t}),l.forEach(s=>{let c=Wt.find(d=>s.name.startsWith(`${d}-`));if(c){let d=Le(c),u=Le(s.name.split(`${c}-`)[1]);typeof o[d]>"u"&&(o[d]={}),o[d]===!0&&(o[d]={enabled:!0}),o[d][u]=Ht(s.value)}else{let d=Le(s.name);if(!a.includes(d))return;let u=Ht(s.value);o[d]&&Wt.includes(s.name)&&!ee(u)?(o[d].constructor!==Object&&(o[d]={}),o[d].enabled=!!u):o[d]=u}}),ze(i,o),i.navigation?i.navigation=q({prevEl:".swiper-button-prev",nextEl:".swiper-button-next"},i.navigation!==!0?i.navigation:{}):i.navigation===!1&&delete i.navigation,i.scrollbar?i.scrollbar=q({el:".swiper-scrollbar"},i.scrollbar!==!0?i.scrollbar:{}):i.scrollbar===!1&&delete i.scrollbar,i.pagination?i.pagination=q({el:".swiper-pagination"},i.pagination!==!0?i.pagination:{}):i.pagination===!1&&delete i.pagination,{params:i,passedParams:o}}var po=(()=>{class e extends Ee{static \u0275fac=(()=>{let t;return function(o){return(t||(t=A(e)))(o||e)}})();static \u0275cmp=X({type:e,selectors:[["ChevronDownIcon"]],features:[V],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z","fill","currentColor"]],template:function(i,o){i&1&&(ge(),U(0,"svg",0),N(1,"path",1),J()),i&2&&(Q(o.getClassNames()),F("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role))},encapsulation:2})}return e})();var vi=({dt:e})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${e("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,wi={root:"p-ink"},qt=(()=>{class e extends re{name="ripple";theme=vi;classes=wi;static \u0275fac=(()=>{let t;return function(o){return(t||(t=A(e)))(o||e)}})();static \u0275prov=te({token:e,factory:e.\u0275fac})}return e})();var Xt=(()=>{class e extends se{zone=K(rt);_componentStyle=K(qt);animationListener;mouseDownListener;timeout;constructor(){super(),bt(()=>{wt(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(t){let i=this.getInk();if(!i||this.document.defaultView?.getComputedStyle(i,null).display==="none")return;if(ie(i,"p-ink-active"),!Ge(i)&&!Ve(i)){let l=Math.max(yt(this.el.nativeElement),xt(this.el.nativeElement));i.style.height=l+"px",i.style.width=l+"px"}let o=St(this.el.nativeElement),r=t.pageX-o.left+this.document.body.scrollTop-Ve(i)/2,a=t.pageY-o.top+this.document.body.scrollLeft-Ge(i)/2;this.renderer.setStyle(i,"top",a+"px"),this.renderer.setStyle(i,"left",r+"px"),Ce(i,"p-ink-active"),this.timeout=setTimeout(()=>{let l=this.getInk();l&&ie(l,"p-ink-active")},401)}getInk(){let t=this.el.nativeElement.children;for(let i=0;i<t.length;i++)if(typeof t[i].className=="string"&&t[i].className.indexOf("p-ink")!==-1)return t[i];return null}resetInk(){let t=this.getInk();t&&ie(t,"p-ink-active")}onAnimationEnd(t){this.timeout&&clearTimeout(this.timeout),ie(t.currentTarget,"p-ink-active")}create(){let t=this.renderer.createElement("span");this.renderer.addClass(t,"p-ink"),this.renderer.appendChild(this.el.nativeElement,t),this.renderer.setAttribute(t,"aria-hidden","true"),this.renderer.setAttribute(t,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(t,"animationend",this.onAnimationEnd.bind(this)))}remove(){let t=this.getInk();t&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Tt(t))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(i){return new(i||e)};static \u0275dir=ve({type:e,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[ne([qt]),V]})}return e})();var yi=({dt:e})=>`
.p-badge {
    display: inline-flex;
    border-radius: ${e("badge.border.radius")};
    justify-content: center;
    padding: ${e("badge.padding")};
    background: ${e("badge.primary.background")};
    color: ${e("badge.primary.color")};
    font-size: ${e("badge.font.size")};
    font-weight: ${e("badge.font.weight")};
    min-width: ${e("badge.min.width")};
    height: ${e("badge.height")};
    line-height: ${e("badge.height")};
}

.p-badge-dot {
    width: ${e("badge.dot.size")};
    min-width: ${e("badge.dot.size")};
    height: ${e("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${e("badge.secondary.background")};
    color: ${e("badge.secondary.color")};
}

.p-badge-success {
    background: ${e("badge.success.background")};
    color: ${e("badge.success.color")};
}

.p-badge-info {
    background: ${e("badge.info.background")};
    color: ${e("badge.info.color")};
}

.p-badge-warn {
    background: ${e("badge.warn.background")};
    color: ${e("badge.warn.color")};
}

.p-badge-danger {
    background: ${e("badge.danger.background")};
    color: ${e("badge.danger.color")};
}

.p-badge-contrast {
    background: ${e("badge.contrast.background")};
    color: ${e("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${e("badge.sm.font.size")};
    min-width: ${e("badge.sm.min.width")};
    height: ${e("badge.sm.height")};
    line-height: ${e("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${e("badge.lg.font.size")};
    min-width: ${e("badge.lg.min.width")};
    height: ${e("badge.lg.height")};
    line-height: ${e("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${e("badge.xl.font.size")};
    min-width: ${e("badge.xl.min.width")};
    height: ${e("badge.xl.height")};
    line-height: ${e("badge.xl.height")};
}

/* For PrimeNG (directive)*/

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge > .p-badge {
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}
`,Si={root:({props:e,instance:n})=>["p-badge p-component",{"p-badge-circle":Ne(e.value)&&String(e.value).length===1,"p-badge-dot":ce(e.value)&&!n.$slots.default,"p-badge-sm":e.size==="small","p-badge-lg":e.size==="large","p-badge-xl":e.size==="xlarge","p-badge-info":e.severity==="info","p-badge-success":e.severity==="success","p-badge-warn":e.severity==="warn","p-badge-danger":e.severity==="danger","p-badge-secondary":e.severity==="secondary","p-badge-contrast":e.severity==="contrast"}]},Qt=(()=>{class e extends re{name="badge";theme=yi;classes=Si;static \u0275fac=(()=>{let t;return function(o){return(t||(t=A(e)))(o||e)}})();static \u0275prov=te({token:e,factory:e.\u0275fac})}return e})();var tt=(()=>{class e extends se{styleClass=Y();style=Y();badgeSize=Y();size=Y();severity=Y();value=Y();badgeDisabled=Y(!1,{transform:B});_componentStyle=K(Qt);containerClass=Fe(()=>{let t="p-badge p-component";return Ne(this.value())&&String(this.value()).length===1&&(t+=" p-badge-circle"),this.badgeSize()==="large"?t+=" p-badge-lg":this.badgeSize()==="xlarge"?t+=" p-badge-xl":this.badgeSize()==="small"&&(t+=" p-badge-sm"),ce(this.value())&&(t+=" p-badge-dot"),this.styleClass()&&(t+=` ${this.styleClass()}`),this.severity()&&(t+=` p-badge-${this.severity()}`),t});static \u0275fac=(()=>{let t;return function(o){return(t||(t=A(e)))(o||e)}})();static \u0275cmp=X({type:e,selectors:[["p-badge"]],hostVars:6,hostBindings:function(i,o){i&2&&(lt(o.style()),Q(o.containerClass()),at("display",o.badgeDisabled()&&"none"))},inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[ne([Qt]),V],decls:1,vars:1,template:function(i,o){i&1&&Se(0),i&2&&xe(o.value())},dependencies:[Te,oe],encapsulation:2,changeDetection:0})}return e})(),Ut=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=me({type:e});static \u0275inj=be({imports:[tt,oe,oe]})}return e})();var Jt=(()=>{class e extends Ee{pathId;ngOnInit(){this.pathId="url(#"+je()+")"}static \u0275fac=(()=>{let t;return function(o){return(t||(t=A(e)))(o||e)}})();static \u0275cmp=X({type:e,selectors:[["SpinnerIcon"]],features:[V],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,o){i&1&&(ge(),U(0,"svg",0)(1,"g"),N(2,"path",1),J(),U(3,"defs")(4,"clipPath",2),N(5,"rect",3),J()()()),i&2&&(Q(o.getClassNames()),F("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role),L(),F("clip-path",o.pathId),L(3),_("id",o.pathId))},encapsulation:2})}return e})();var Ti=({dt:e})=>`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${e("button.primary.color")};
    background: ${e("button.primary.background")};
    border: 1px solid ${e("button.primary.border.color")};
    padding-block: ${e("button.padding.y")};
    padding-inline: ${e("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${e("button.transition.duration")}, color ${e("button.transition.duration")}, border-color ${e("button.transition.duration")},
            outline-color ${e("button.transition.duration")}, box-shadow ${e("button.transition.duration")};
    border-radius: ${e("button.border.radius")};
    outline-color: transparent;
    gap: ${e("button.gap")};
}

.p-button-icon,
.p-button-icon:before,
.p-button-icon:after {
    line-height: inherit;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${e("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${e("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${e("button.sm.font.size")};
    padding-block: ${e("button.sm.padding.y")};
    padding-inline: ${e("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${e("button.sm.font.size")};
}

.p-button-lg {
    font-size: ${e("button.lg.font.size")};
    padding-block: ${e("button.lg.padding.y")};
    padding-inline: ${e("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${e("button.lg.font.size")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${e("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${e("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${e("button.primary.hover.background")};
    border: 1px solid ${e("button.primary.hover.border.color")};
    color: ${e("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${e("button.primary.active.background")};
    border: 1px solid ${e("button.primary.active.border.color")};
    color: ${e("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${e("button.primary.focus.ring.shadow")};
    outline: ${e("button.focus.ring.width")} ${e("button.focus.ring.style")} ${e("button.primary.focus.ring.color")};
    outline-offset: ${e("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${e("button.badge.size")};
    height: ${e("button.badge.size")};
    line-height: ${e("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${e("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${e("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${e("button.secondary.background")};
    border: 1px solid ${e("button.secondary.border.color")};
    color: ${e("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${e("button.secondary.hover.background")};
    border: 1px solid ${e("button.secondary.hover.border.color")};
    color: ${e("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${e("button.secondary.active.background")};
    border: 1px solid ${e("button.secondary.active.border.color")};
    color: ${e("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${e("button.secondary.focus.ring.color")};
    box-shadow: ${e("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${e("button.success.background")};
    border: 1px solid ${e("button.success.border.color")};
    color: ${e("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${e("button.success.hover.background")};
    border: 1px solid ${e("button.success.hover.border.color")};
    color: ${e("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${e("button.success.active.background")};
    border: 1px solid ${e("button.success.active.border.color")};
    color: ${e("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${e("button.success.focus.ring.color")};
    box-shadow: ${e("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${e("button.info.background")};
    border: 1px solid ${e("button.info.border.color")};
    color: ${e("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${e("button.info.hover.background")};
    border: 1px solid ${e("button.info.hover.border.color")};
    color: ${e("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${e("button.info.active.background")};
    border: 1px solid ${e("button.info.active.border.color")};
    color: ${e("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${e("button.info.focus.ring.color")};
    box-shadow: ${e("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${e("button.warn.background")};
    border: 1px solid ${e("button.warn.border.color")};
    color: ${e("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${e("button.warn.hover.background")};
    border: 1px solid ${e("button.warn.hover.border.color")};
    color: ${e("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${e("button.warn.active.background")};
    border: 1px solid ${e("button.warn.active.border.color")};
    color: ${e("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${e("button.warn.focus.ring.color")};
    box-shadow: ${e("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${e("button.help.background")};
    border: 1px solid ${e("button.help.border.color")};
    color: ${e("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${e("button.help.hover.background")};
    border: 1px solid ${e("button.help.hover.border.color")};
    color: ${e("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${e("button.help.active.background")};
    border: 1px solid ${e("button.help.active.border.color")};
    color: ${e("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${e("button.help.focus.ring.color")};
    box-shadow: ${e("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${e("button.danger.background")};
    border: 1px solid ${e("button.danger.border.color")};
    color: ${e("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${e("button.danger.hover.background")};
    border: 1px solid ${e("button.danger.hover.border.color")};
    color: ${e("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${e("button.danger.active.background")};
    border: 1px solid ${e("button.danger.active.border.color")};
    color: ${e("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${e("button.danger.focus.ring.color")};
    box-shadow: ${e("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${e("button.contrast.background")};
    border: 1px solid ${e("button.contrast.border.color")};
    color: ${e("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${e("button.contrast.hover.background")};
    border: 1px solid ${e("button.contrast.hover.border.color")};
    color: ${e("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${e("button.contrast.active.background")};
    border: 1px solid ${e("button.contrast.active.border.color")};
    color: ${e("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${e("button.contrast.focus.ring.color")};
    box-shadow: ${e("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${e("button.outlined.primary.hover.background")};
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${e("button.outlined.primary.active.background")};
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${e("button.outlined.secondary.hover.background")};
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${e("button.outlined.secondary.active.background")};
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${e("button.outlined.success.hover.background")};
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${e("button.outlined.success.active.background")};
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${e("button.outlined.info.hover.background")};
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${e("button.outlined.info.active.background")};
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${e("button.outlined.warn.hover.background")};
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${e("button.outlined.warn.active.background")};
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${e("button.outlined.help.hover.background")};
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${e("button.outlined.help.active.background")};
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${e("button.outlined.danger.hover.background")};
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${e("button.outlined.danger.active.background")};
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${e("button.outlined.contrast.hover.background")};
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${e("button.outlined.contrast.active.background")};
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${e("button.outlined.plain.hover.background")};
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${e("button.outlined.plain.active.background")};
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${e("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${e("button.text.primary.active.background")};
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${e("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${e("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${e("button.text.success.hover.background")};
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${e("button.text.success.active.background")};
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${e("button.text.info.hover.background")};
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${e("button.text.info.active.background")};
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${e("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${e("button.text.warn.active.background")};
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${e("button.text.help.hover.background")};
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${e("button.text.help.active.background")};
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${e("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${e("button.text.danger.active.background")};
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${e("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${e("button.text.plain.active.background")};
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${e("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${e("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.active.color")};
}

/* For PrimeNG */
.p-button-icon-right {
    order: 1;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`,Ci={root:({instance:e,props:n})=>["p-button p-component",{"p-button-icon-only":e.hasIcon&&!n.label&&!n.badge,"p-button-vertical":(n.iconPos==="top"||n.iconPos==="bottom")&&n.label,"p-button-loading":n.loading,"p-button-link":n.link,[`p-button-${n.severity}`]:n.severity,"p-button-raised":n.raised,"p-button-rounded":n.rounded,"p-button-text":n.text,"p-button-outlined":n.outlined,"p-button-sm":n.size==="small","p-button-lg":n.size==="large","p-button-plain":n.plain,"p-button-fluid":n.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:e})=>["p-button-icon",{[`p-button-icon-${e.iconPos}`]:e.label}],label:"p-button-label"},Kt=(()=>{class e extends re{name="button";theme=Ti;classes=Ci;static \u0275fac=(()=>{let t;return function(o){return(t||(t=A(e)))(o||e)}})();static \u0275prov=te({token:e,factory:e.\u0275fac})}return e})();var Ei=["content"],$i=["loading"],Ii=["icon"],Mi=["*"],Zt=e=>({class:e});function Pi(e,n){e&1&&dt(0)}function ki(e,n){if(e&1&&N(0,"span",8),e&2){let t=G(3);_("ngClass",t.iconClass()),F("aria-hidden",!0)("data-pc-section","loadingicon")}}function _i(e,n){if(e&1&&N(0,"SpinnerIcon",9),e&2){let t=G(3);_("styleClass",t.spinnerIconClass())("spin",!0),F("aria-hidden",!0)("data-pc-section","loadingicon")}}function zi(e,n){if(e&1&&(we(0),Z(1,ki,1,3,"span",6)(2,_i,1,4,"SpinnerIcon",7),ye()),e&2){let t=G(2);L(),_("ngIf",t.loadingIcon),L(),_("ngIf",!t.loadingIcon)}}function Li(e,n){}function Oi(e,n){if(e&1&&Z(0,Li,0,0,"ng-template",10),e&2){let t=G(2);_("ngIf",t.loadingIconTemplate||t._loadingIconTemplate)}}function Di(e,n){if(e&1&&(we(0),Z(1,zi,3,2,"ng-container",2)(2,Oi,1,1,null,5),ye()),e&2){let t=G();L(),_("ngIf",!t.loadingIconTemplate&&!t._loadingIconTemplate),L(),_("ngTemplateOutlet",t.loadingIconTemplate||t._loadingIconTemplate)("ngTemplateOutletContext",Ae(3,Zt,t.iconClass()))}}function Bi(e,n){if(e&1&&N(0,"span",8),e&2){let t=G(2);Q(t.icon),_("ngClass",t.iconClass()),F("data-pc-section","icon")}}function Ai(e,n){}function Fi(e,n){if(e&1&&Z(0,Ai,0,0,"ng-template",10),e&2){let t=G(2);_("ngIf",!t.icon&&(t.iconTemplate||t._iconTemplate))}}function Gi(e,n){if(e&1&&(we(0),Z(1,Bi,1,4,"span",11)(2,Fi,1,1,null,5),ye()),e&2){let t=G();L(),_("ngIf",t.icon&&!t.iconTemplate&&!t._iconTemplate),L(),_("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",Ae(3,Zt,t.iconClass()))}}function Vi(e,n){if(e&1&&(U(0,"span",12),Se(1),J()),e&2){let t=G();F("aria-hidden",t.icon&&!t.label)("data-pc-section","label"),L(),xe(t.label)}}function Ni(e,n){if(e&1&&N(0,"p-badge",13),e&2){let t=G();_("value",t.badge)("severity",t.badgeSeverity)}}var pr=(()=>{class e extends se{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new he;onFocus=new he;onBlur=new he;contentTemplate;loadingIconTemplate;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(t){this._buttonProps=t,t&&typeof t=="object"&&Object.entries(t).forEach(([i,o])=>this[`_${i}`]!==o&&(this[`_${i}`]=o))}get hasFluid(){let i=this.el.nativeElement.closest("p-fluid");return ce(this.fluid)?!!i:this.fluid}_componentStyle=K(Kt);templates;_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this.contentTemplate=t.template;break;case"icon":this.iconTemplate=t.template;break;case"loadingicon":this.loadingIconTemplate=t.template;break;default:this.contentTemplate=t.template;break}})}ngOnChanges(t){super.ngOnChanges(t);let{buttonProps:i}=t;if(i){let o=i.currentValue;for(let r in o)this[r]=o[r]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,t])=>!!t).reduce((t,[i])=>t+` ${i}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text||this.variant=="text","p-button-outlined":this.outlined||this.variant=="outlined","p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let t;return function(o){return(t||(t=A(e)))(o||e)}})();static \u0275cmp=X({type:e,selectors:[["p-button"]],contentQueries:function(i,o,r){if(i&1&&(ae(r,Ei,5),ae(r,$i,5),ae(r,Ii,5),ae(r,Ct,4)),i&2){let a;le(a=de())&&(o.contentTemplate=a.first),le(a=de())&&(o.loadingIconTemplate=a.first),le(a=de())&&(o.iconTemplate=a.first),le(a=de())&&(o.templates=a)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",B],loading:[2,"loading","loading",B],loadingIcon:"loadingIcon",raised:[2,"raised","raised",B],rounded:[2,"rounded","rounded",B],text:[2,"text","text",B],plain:[2,"plain","plain",B],severity:"severity",outlined:[2,"outlined","outlined",B],link:[2,"link","link",B],tabindex:[2,"tabindex","tabindex",ft],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",B],fluid:[2,"fluid","fluid",B],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[ne([Kt]),st,V,Be],ngContentSelectors:Mi,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(i,o){i&1&&(ut(),U(0,"button",0),ct("click",function(a){return o.onClick.emit(a)})("focus",function(a){return o.onFocus.emit(a)})("blur",function(a){return o.onBlur.emit(a)}),pt(1),Z(2,Pi,1,0,"ng-container",1)(3,Di,3,5,"ng-container",2)(4,Gi,3,5,"ng-container",2)(5,Vi,2,3,"span",3)(6,Ni,1,2,"p-badge",4),J()),i&2&&(_("ngStyle",o.style)("disabled",o.disabled||o.loading)("ngClass",o.buttonClass)("pAutoFocus",o.autofocus),F("type",o.type)("aria-label",o.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",o.tabindex),L(2),_("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),L(),_("ngIf",o.loading),L(),_("ngIf",!o.loading),L(),_("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.label),L(),_("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.badge))},dependencies:[Te,gt,ht,vt,mt,Xt,Et,Jt,Ut,tt,oe],encapsulation:2,changeDetection:0})}return e})();export{po as a,Jt as b,Xt as c,pr as d,j as e,z as f,rn as g,Ie as h,ue as i,Pt as j,$e as k,pe as l,Hi as m,R as n,Me as o,Wi as p,We as q,Lt as r,qi as s,qe as t,Yi as u,Xi as v,_e as w,Rt as x,eo as y,to as z,no as A,Le as B,io as C,ao as D};
