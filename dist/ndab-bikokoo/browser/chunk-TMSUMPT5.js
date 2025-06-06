import{d as R,g as N,o as H,p as B}from"./chunk-ATSKGUCJ.js";import{X as k,Z as q}from"./chunk-X5ID5EBR.js";import{a as T,b as j,c as D}from"./chunk-2XYSTG25.js";import"./chunk-YLXJLDUJ.js";import{Ab as z,Bb as n,Cb as e,Db as l,Kb as w,T as d,Ta as s,U as m,Xb as r,Ya as g,Z as f,Zb as E,Zc as F,eb as O,fb as x,gb as P,gc as S,ha as M,ib as _,kb as h,na as C,nc as $,oc as I,sb as p,ub as v,xc as u,yb as b,zb as y}from"./chunk-4FMB3CYS.js";var G=({dt:t})=>`
.p-textarea {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: ${t("textarea.color")};
    background: ${t("textarea.background")};
    padding: ${t("textarea.padding.y")} ${t("textarea.padding.x")};
    border: 1px solid ${t("textarea.border.color")};
    transition: background ${t("textarea.transition.duration")}, color ${t("textarea.transition.duration")}, border-color ${t("textarea.transition.duration")}, outline-color ${t("textarea.transition.duration")}, box-shadow ${t("textarea.transition.duration")};
    appearance: none;
    border-radius: ${t("textarea.border.radius")};
    outline-color: transparent;
    box-shadow: ${t("textarea.shadow")};
}

.p-textarea.ng-invalid.ng-dirty {
    border-color: ${t("textarea.invalid.border.color")};
}

.p-textarea:enabled:hover {
    border-color: ${t("textarea.hover.border.color")};
}

.p-textarea:enabled:focus {
    border-color: ${t("textarea.focus.border.color")};
    box-shadow: ${t("textarea.focus.ring.shadow")};
    outline: ${t("textarea.focus.ring.width")} ${t("textarea.focus.ring.style")} ${t("textarea.focus.ring.color")};
    outline-offset: ${t("textarea.focus.ring.offset")};
}

.p-textarea.p-invalid {
    border-color: ${t("textarea.invalid.border.color")};
}

.p-textarea.p-variant-filled {
    background: ${t("textarea.filled.background")};
}

.p-textarea.p-variant-filled:enabled:focus {
    background: ${t("textarea.filled.focus.background")};
}

.p-textarea:disabled {
    opacity: 1;
    background: ${t("textarea.disabled.background")};
    color: ${t("textarea.disabled.color")};
}

.p-textarea::placeholder {
    color: ${t("textarea.placeholder.color")};
}

.p-textarea.ng-invalid.ng-dirty::placeholder {
    color: ${t("textarea.invalid.placeholder.color")};
}

.p-textarea-fluid {
    width: 100%;
}

.p-textarea-resizable {
    overflow: hidden;
    resize: none;
}

.p-textarea-sm {
    font-size: ${t("textarea.sm.font.size")};
    padding-block: ${t("textarea.sm.padding.y")};
    padding-inline: ${t("textarea.sm.padding.x")};
}

.p-textarea-lg {
    font-size: ${t("textarea.lg.font.size")};
    padding-block: ${t("textarea.lg.padding.y")};
    padding-inline: ${t("textarea.lg.padding.x")};
}
`,Q={root:({instance:t,props:c})=>["p-textarea p-component",{"p-filled":t.filled,"p-textarea-resizable ":c.autoResize,"p-invalid":c.invalid,"p-variant-filled":c.variant?c.variant==="filled":t.config.inputStyle==="filled"||t.config.inputVariant==="filled","p-textarea-fluid":c.fluid}]},A=(()=>{class t extends k{name="textarea";theme=G;classes=Q;static \u0275fac=(()=>{let o;return function(i){return(o||(o=M(t)))(i||t)}})();static \u0275prov=d({token:t,factory:t.\u0275fac})}return t})();var V=(()=>{class t extends q{ngModel;control;autoResize;variant;fluid=!1;pSize;onResize=new C;filled;cachedScrollHeight;ngModelSubscription;ngControlSubscription;_componentStyle=f(A);constructor(o,a){super(),this.ngModel=o,this.control=a}ngOnInit(){super.ngOnInit(),this.ngModel&&(this.ngModelSubscription=this.ngModel.valueChanges.subscribe(()=>{this.updateState()})),this.control&&(this.ngControlSubscription=this.control.valueChanges.subscribe(()=>{this.updateState()}))}get hasFluid(){let a=this.el.nativeElement.closest("p-fluid");return this.fluid||!!a}ngAfterViewInit(){super.ngAfterViewInit(),this.autoResize&&this.resize(),this.updateFilledState(),this.cd.detectChanges()}onInput(o){this.updateState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length}resize(o){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(o||{})}updateState(){this.updateFilledState(),this.autoResize&&this.resize()}ngOnDestroy(){this.ngModelSubscription&&this.ngModelSubscription.unsubscribe(),this.ngControlSubscription&&this.ngControlSubscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=function(a){return new(a||t)(g(N,8),g(R,8))};static \u0275dir=P({type:t,selectors:[["","pTextarea",""]],hostAttrs:[1,"p-textarea","p-component"],hostVars:16,hostBindings:function(a,i){a&1&&w("input",function(W){return i.onInput(W)}),a&2&&v("p-filled",i.filled)("p-textarea-resizable",i.autoResize)("p-variant-filled",i.variant==="filled"||i.config.inputStyle()==="filled"||i.config.inputVariant()==="filled")("p-textarea-fluid",i.hasFluid)("p-textarea-sm",i.pSize==="small")("p-inputfield-sm",i.pSize==="small")("p-textarea-lg",i.pSize==="large")("p-inputfield-lg",i.pSize==="large")},inputs:{autoResize:[2,"autoResize","autoResize",u],variant:"variant",fluid:[2,"fluid","fluid",u],pSize:"pSize"},outputs:{onResize:"onResize"},features:[S([A]),h,_]})}return t})(),L=(()=>{class t{static \u0275fac=function(a){return new(a||t)};static \u0275mod=x({type:t});static \u0275inj=m({})}return t})();function K(t,c){if(t&1&&(n(0,"li"),l(1,"fa-icon",10),$(2,"convertStringLabelToFontawesomeIcon"),n(3,"span"),r(4),e()()),t&2){let o=c.$implicit;s(),p("icon",I(2,2,o.icon)),s(3),E(" ",o.value," ")}}var Ct=(()=>{class t{constructor(){this.heroData={image:"",title:"Contactez-Nous",menus:[{label:"Accueil",url:"/"},{label:"Contact",url:""}]},this.contactWays=[{icon:"faEnvelope",value:"contact@ndabbikokoo.com"},{icon:"faWhatsapp",value:"+49 179 7510920"},{icon:"faLocationDot",value:"Hermann-Albertz-Stra\xDFe 218 46045 Oberhausen Deutschland (Germany)"}]}static{this.\u0275fac=function(a){return new(a||t)}}static{this.\u0275cmp=O({type:t,selectors:[["app-feature-contact"]],decls:43,vars:1,consts:[[1,"feature-contact"],["ngSrc","/img/contact/bg-contact.webp","fill","","priority",""],[1,"content","my-container"],[1,"texts"],[1,"field"],["type","text","pInputText","","placeholder","Entrez votre pr\xE9nom"],["type","text","pInputText","","placeholder","Entrez votre nom"],["type","text","pInputText","","placeholder","Entrez votre adresse mail"],["type","text","pInputText","","placeholder","Entrez votre num\xE9ro de t\xE9l\xE9phone"],["rows","7","cols","30","pTextarea","","formControlName","text","placeholder","Vous pouvez entrez votre message ici ...",3,"autoResize"],[3,"icon"]],template:function(a,i){a&1&&(n(0,"div",0),l(1,"img",1),n(2,"div",2)(3,"div",3)(4,"h1")(5,"span"),r(6,"Nos "),n(7,"span"),r(8,"cadres"),e()(),n(9,"span"),r(10,"vous r\xE9pondent,"),e(),n(11,"span")(12,"span"),r(13,"\xE9crivez-nous !"),e()()(),n(14,"p"),r(15," Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus laudantium quibusdam eaque, laborum, doloribus vero quam illo similique natus optio aliquam incidunt! Quidem perspiciatis, minima numquam incidunt quo explicabo esse. "),e(),n(16,"ul"),y(17,K,5,4,"li",null,b),e()(),n(19,"form")(20,"div",4)(21,"label"),r(22,"Pr\xE9nom"),e(),l(23,"input",5),e(),n(24,"div",4)(25,"label"),r(26,"Nom"),e(),l(27,"input",6),e(),n(28,"div",4)(29,"label"),r(30,"Email"),e(),l(31,"input",7),e(),n(32,"div",4)(33,"label"),r(34,"T\xE9l\xE9phone"),e(),l(35,"input",8),e(),n(36,"div",4)(37,"label"),r(38,"Message"),e(),n(39,"textarea",9),r(40,"                 "),e()(),n(41,"button"),r(42,"Envoyer"),e()()()()),a&2&&(s(17),z(i.contactWays),s(22),p("autoResize",!1))},dependencies:[F,j,T,D,B,H,L,V],styles:[".feature-contact[_ngcontent-%COMP%]{position:relative;display:flex;justify-content:center;min-height:100vh;height:100%;padding-bottom:5rem;margin-top:10rem}.feature-contact[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;z-index:1}.feature-contact[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:5rem;z-index:2;padding-top:5rem;width:100%}.feature-contact[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .texts[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2rem;margin-top:5rem;flex:1}.feature-contact[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .texts[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{display:flex;flex-direction:column;font-size:3rem;font-weight:900}.feature-contact[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .texts[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--project-brown-quaterly-color)}.feature-contact[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .texts[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem;line-height:1.8rem;max-width:700px}.feature-contact[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .texts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem;max-width:550px}.feature-contact[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .texts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1.5rem}.feature-contact[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .texts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:1.5rem;color:var(--project-brown-quaterly-color)}.feature-contact[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .texts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1.1rem;font-weight:500;line-height:1.8rem}.feature-contact[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem;background-color:var(--project-white-primary-color);padding:3rem 2rem;border-radius:8px;box-shadow:#32325d40 0 13px 27px -5px,#0000004d 0 8px 16px -8px;max-width:550px;width:100%}.feature-contact[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.5em}.feature-contact[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:600;font-size:1rem;color:var(--project-black-primary-color)}.feature-contact[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .feature-contact[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;background-color:#f3f4f6}.feature-contact[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:1rem;padding:10px 25px;font-size:1rem;width:fit-content;background-color:var(--project-brown-quaterly-color);color:var(--project-white-primary-color);border:none}@media all and (max-width: 1150px){.feature-contact[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{max-width:430px}}@media all and (max-width: 1024px){.feature-contact[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{gap:3rem;padding-top:3rem}.feature-contact[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .texts[_ngcontent-%COMP%]{gap:2rem;margin-top:4rem}.feature-contact[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .texts[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.5rem}.feature-contact[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .texts[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--project-brown-quaterly-color)}.feature-contact[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .texts[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem;line-height:1.6rem}.feature-contact[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .texts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{gap:1rem}.feature-contact[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .texts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:1.35rem;color:var(--project-brown-quaterly-color)}.feature-contact[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .texts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1rem;line-height:1.6rem}}@media all and (max-width: 900px){.feature-contact[_ngcontent-%COMP%]{margin-top:6rem}.feature-contact[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{flex-direction:column;gap:3rem;padding-top:0}.feature-contact[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .texts[_ngcontent-%COMP%]{gap:1rem;margin-top:3rem;align-items:center}.feature-contact[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .texts[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.5rem;align-items:center}.feature-contact[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .texts[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--project-brown-quaterly-color)}.feature-contact[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .texts[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem;line-height:1.6rem;max-width:100%;text-align:center}.feature-contact[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .texts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{gap:1rem}.feature-contact[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .texts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:1.35rem;color:var(--project-brown-quaterly-color)}.feature-contact[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .texts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1rem;line-height:1.6rem}.feature-contact[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{max-width:100%}}@media all and (max-width: 500px){.feature-contact[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .texts[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.2rem}.feature-contact[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .texts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{gap:1rem}.feature-contact[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .texts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:1.35rem;color:var(--project-brown-quaterly-color)}.feature-contact[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .texts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1rem;line-height:1.6rem}.feature-contact[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{max-width:100%}}"]})}}return t})();export{Ct as FeatureContactComponent};
