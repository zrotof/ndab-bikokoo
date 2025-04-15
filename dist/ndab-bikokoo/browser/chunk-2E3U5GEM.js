import{a as O,c as l,e as L,j as h,k as M,l as S,m as g,n as N,p as T,v as u,x as d}from"./chunk-3IPQIHX7.js";import{Cb as E,Db as w,N as f,Nb as p,T as m,Wa as D,Ya as x,Zb as F,_a as c,ab as k,ba as a,bc as C,ia as v,sc as A}from"./chunk-OFYSWQHK.js";var R=({dt:t})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${t("ripple.background")};
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
`,B={root:"p-ink"},V=(()=>{class t extends u{name="ripple";theme=R;classes=B;static \u0275fac=(()=>{let e;return function(r){return(e||(e=a(t)))(r||t)}})();static \u0275prov=f({token:t,factory:t.\u0275fac})}return t})();var j=(()=>{class t extends d{zone=m(v);_componentStyle=m(V);animationListener;mouseDownListener;timeout;constructor(){super(),C(()=>{A(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(e){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(l(n,"p-ink-active"),!h(n)&&!g(n)){let s=Math.max(L(this.el.nativeElement),S(this.el.nativeElement));n.style.height=s+"px",n.style.width=s+"px"}let r=M(this.el.nativeElement),i=e.pageX-r.left+this.document.body.scrollTop-g(n)/2,o=e.pageY-r.top+this.document.body.scrollLeft-h(n)/2;this.renderer.setStyle(n,"top",o+"px"),this.renderer.setStyle(n,"left",i+"px"),O(n,"p-ink-active"),this.timeout=setTimeout(()=>{let s=this.getInk();s&&l(s,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let n=0;n<e.length;n++)if(typeof e[n].className=="string"&&e[n].className.indexOf("p-ink")!==-1)return e[n];return null}resetInk(){let e=this.getInk();e&&l(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),l(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,N(e))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=x({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[p([V]),c]})}return t})();function z(){let t=[],y=(i,o)=>{let s=t.length>0?t[t.length-1]:{key:i,value:o},I=s.value+(s.key===i?0:o)+2;return t.push({key:i,value:I}),I},e=i=>{t=t.filter(o=>o.value!==i)},n=()=>t.length>0?t[t.length-1].value:0,r=i=>i&&parseInt(i.style.zIndex,10)||0;return{get:r,set:(i,o,s)=>{o&&(o.style.zIndex=String(y(i,s)))},clear:i=>{i&&(e(r(i)),i.style.zIndex="")},getCurrent:()=>n(),generateZIndex:y,revertZIndex:e}}var ne=z(),ie=t=>!!t;var Z=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,P=(()=>{class t extends u{name="baseicon";inlineStyles=Z;static \u0275fac=(()=>{let e;return function(r){return(e||(e=a(t)))(r||t)}})();static \u0275prov=f({token:t,factory:t.\u0275fac})}return t})();var $=["*"],he=(()=>{class t extends d{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let e=T(this.label);this.role=e?void 0:"img",this.ariaLabel=e?void 0:this.label,this.ariaHidden=e}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let e;return function(r){return(e||(e=a(t)))(r||t)}})();static \u0275cmp=D({type:t,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",F],styleClass:"styleClass"},features:[p([P]),k,c],ngContentSelectors:$,decls:1,vars:0,template:function(n,r){n&1&&(E(),w(0))},encapsulation:2,changeDetection:0})}return t})();export{he as a,j as b,ne as c,ie as d};
