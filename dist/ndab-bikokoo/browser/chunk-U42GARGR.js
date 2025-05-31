import{d as q,g as N,m as H,n as B}from"./chunk-LA2KYK2M.js";import{U as D,W as R}from"./chunk-HU3WP57W.js";import{a as T,b as k,c as j}from"./chunk-RR6FYIPE.js";import"./chunk-M6M4MBKF.js";import"./chunk-5T3ZR4BN.js";import{Cb as E,Lc as F,Mb as r,Na as s,O as m,Ob as S,P as g,Sa as d,U as f,Xb as w,Ya as v,Za as M,_a as C,ab as b,ca as x,cb as O,cc as $,dc as I,ia as h,kb as p,kc as u,mb as P,qb as _,rb as y,sb as z,tb as n,ub as t,vb as c}from"./chunk-MHSFUDBF.js";var G=({dt:e})=>`
.p-textarea {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: ${e("textarea.color")};
    background: ${e("textarea.background")};
    padding: ${e("textarea.padding.y")} ${e("textarea.padding.x")};
    border: 1px solid ${e("textarea.border.color")};
    transition: background ${e("textarea.transition.duration")}, color ${e("textarea.transition.duration")}, border-color ${e("textarea.transition.duration")}, outline-color ${e("textarea.transition.duration")}, box-shadow ${e("textarea.transition.duration")};
    appearance: none;
    border-radius: ${e("textarea.border.radius")};
    outline-color: transparent;
    box-shadow: ${e("textarea.shadow")};
}

.p-textarea.ng-invalid.ng-dirty {
    border-color: ${e("textarea.invalid.border.color")};
}

.p-textarea:enabled:hover {
    border-color: ${e("textarea.hover.border.color")};
}

.p-textarea:enabled:focus {
    border-color: ${e("textarea.focus.border.color")};
    box-shadow: ${e("textarea.focus.ring.shadow")};
    outline: ${e("textarea.focus.ring.width")} ${e("textarea.focus.ring.style")} ${e("textarea.focus.ring.color")};
    outline-offset: ${e("textarea.focus.ring.offset")};
}

.p-textarea.p-invalid {
    border-color: ${e("textarea.invalid.border.color")};
}

.p-textarea.p-variant-filled {
    background: ${e("textarea.filled.background")};
}

.p-textarea.p-variant-filled:enabled:focus {
    background: ${e("textarea.filled.focus.background")};
}

.p-textarea:disabled {
    opacity: 1;
    background: ${e("textarea.disabled.background")};
    color: ${e("textarea.disabled.color")};
}

.p-textarea::placeholder {
    color: ${e("textarea.placeholder.color")};
}

.p-textarea.ng-invalid.ng-dirty::placeholder {
    color: ${e("textarea.invalid.placeholder.color")};
}

.p-textarea-fluid {
    width: 100%;
}

.p-textarea-resizable {
    overflow: hidden;
    resize: none;
}

.p-textarea-sm {
    font-size: ${e("textarea.sm.font.size")};
    padding-block: ${e("textarea.sm.padding.y")};
    padding-inline: ${e("textarea.sm.padding.x")};
}

.p-textarea-lg {
    font-size: ${e("textarea.lg.font.size")};
    padding-block: ${e("textarea.lg.padding.y")};
    padding-inline: ${e("textarea.lg.padding.x")};
}
`,Q={root:({instance:e,props:l})=>["p-textarea p-component",{"p-filled":e.filled,"p-textarea-resizable ":l.autoResize,"p-invalid":l.invalid,"p-variant-filled":l.variant?l.variant==="filled":e.config.inputStyle==="filled"||e.config.inputVariant==="filled","p-textarea-fluid":l.fluid}]},A=(()=>{class e extends D{name="textarea";theme=G;classes=Q;static \u0275fac=(()=>{let o;return function(a){return(o||(o=x(e)))(a||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();var V=(()=>{class e extends R{ngModel;control;autoResize;variant;fluid=!1;pSize;onResize=new h;filled;cachedScrollHeight;ngModelSubscription;ngControlSubscription;_componentStyle=f(A);constructor(o,i){super(),this.ngModel=o,this.control=i}ngOnInit(){super.ngOnInit(),this.ngModel&&(this.ngModelSubscription=this.ngModel.valueChanges.subscribe(()=>{this.updateState()})),this.control&&(this.ngControlSubscription=this.control.valueChanges.subscribe(()=>{this.updateState()}))}get hasFluid(){let i=this.el.nativeElement.closest("p-fluid");return this.fluid||!!i}ngAfterViewInit(){super.ngAfterViewInit(),this.autoResize&&this.resize(),this.updateFilledState(),this.cd.detectChanges()}onInput(o){this.updateState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length}resize(o){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(o||{})}updateState(){this.updateFilledState(),this.autoResize&&this.resize()}ngOnDestroy(){this.ngModelSubscription&&this.ngModelSubscription.unsubscribe(),this.ngControlSubscription&&this.ngControlSubscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=function(i){return new(i||e)(d(N,8),d(q,8))};static \u0275dir=C({type:e,selectors:[["","pTextarea",""]],hostAttrs:[1,"p-textarea","p-component"],hostVars:16,hostBindings:function(i,a){i&1&&E("input",function(W){return a.onInput(W)}),i&2&&P("p-filled",a.filled)("p-textarea-resizable",a.autoResize)("p-variant-filled",a.variant==="filled"||a.config.inputStyle()==="filled"||a.config.inputVariant()==="filled")("p-textarea-fluid",a.hasFluid)("p-textarea-sm",a.pSize==="small")("p-inputfield-sm",a.pSize==="small")("p-textarea-lg",a.pSize==="large")("p-inputfield-lg",a.pSize==="large")},inputs:{autoResize:[2,"autoResize","autoResize",u],variant:"variant",fluid:[2,"fluid","fluid",u],pSize:"pSize"},outputs:{onResize:"onResize"},features:[w([A]),O,b]})}return e})(),L=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=M({type:e});static \u0275inj=g({})}return e})();function K(e,l){if(e&1&&(n(0,"li"),c(1,"fa-icon",10),$(2,"convertStringLabelToFontawesomeIcon"),n(3,"span"),r(4),t()()),e&2){let o=l.$implicit;s(),p("icon",I(2,2,o.icon)),s(3),S(" ",o.value," ")}}var he=(()=>{class e{constructor(){this.heroData={image:"",title:"Contactez-Nous",menus:[{label:"Accueil",url:"/"},{label:"Contact",url:""}]},this.contactWays=[{icon:"faEnvelope",value:"contact@ndabbikokoo.com"},{icon:"faWhatsapp",value:"+49 179 7510920"},{icon:"faLocationDot",value:"Hermann-Albertz-Stra\xDFe 218 46045 Oberhausen Deutschland (Germany)"}]}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=v({type:e,selectors:[["app-feature-contact"]],decls:43,vars:1,consts:[[1,"feature-contact"],["ngSrc","/img/contact/bg-contact.webp","fill","","priority",""],[1,"content","my-container"],[1,"texts"],[1,"field"],["type","text","pInputText","","placeholder","Entrez votre pr\xE9nom"],["type","text","pInputText","","placeholder","Entrez votre nom"],["type","text","pInputText","","placeholder","Entrez votre adresse mail"],["type","text","pInputText","","placeholder","Entrez votre num\xE9ro de t\xE9l\xE9phone"],["rows","7","cols","30","pTextarea","","formControlName","text","placeholder","Vous pouvez entrez votre message ici ...",3,"autoResize"],[3,"icon"]],template:function(i,a){i&1&&(n(0,"div",0),c(1,"img",1),n(2,"div",2)(3,"div",3)(4,"h1")(5,"span"),r(6,"Nos "),n(7,"span"),r(8,"cadres"),t()(),n(9,"span"),r(10,"vous r\xE9pondent,"),t(),n(11,"span")(12,"span"),r(13,"\xE9crivez-nous !"),t()()(),n(14,"p"),r(15," Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus laudantium quibusdam eaque, laborum, doloribus vero quam illo similique natus optio aliquam incidunt! Quidem perspiciatis, minima numquam incidunt quo explicabo esse. "),t(),n(16,"ul"),y(17,K,5,4,"li",null,_),t()(),n(19,"form")(20,"div",4)(21,"label"),r(22,"Pr\xE9nom"),t(),c(23,"input",5),t(),n(24,"div",4)(25,"label"),r(26,"Nom"),t(),c(27,"input",6),t(),n(28,"div",4)(29,"label"),r(30,"Email"),t(),c(31,"input",7),t(),n(32,"div",4)(33,"label"),r(34,"T\xE9l\xE9phone"),t(),c(35,"input",8),t(),n(36,"div",4)(37,"label"),r(38,"Message"),t(),n(39,"textarea",9),r(40,"                 "),t()(),n(41,"button"),r(42,"Envoyer"),t()()()()),i&2&&(s(17),z(a.contactWays),s(22),p("autoResize",!1))},dependencies:[F,k,T,j,B,H,L,V],styles:[".feature-contact[_ngcontent-%COMP%]{position:relative;display:flex;justify-content:center;min-height:100vh;height:100%;padding-bottom:5rem;margin-top:10rem}.feature-contact[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;z-index:1}.feature-contact[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:5rem;z-index:2;padding-top:5rem;width:100%}.feature-contact[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .texts[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2rem;margin-top:5rem}.feature-contact[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .texts[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{display:flex;flex-direction:column;font-size:3rem;font-weight:900}.feature-contact[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .texts[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--project-brown-quaterly-color)}.feature-contact[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .texts[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem;line-height:1.8rem;width:700px}.feature-contact[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .texts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem;width:550px}.feature-contact[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .texts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1.5rem}.feature-contact[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .texts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:1.5rem;color:var(--project-brown-quaterly-color)}.feature-contact[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .texts[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1.1rem;font-weight:500;line-height:1.8rem}.feature-contact[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem;background-color:var(--project-white-primary-color);width:550px;padding:3rem 2rem;border-radius:8px;box-shadow:#32325d40 0 13px 27px -5px,#0000004d 0 8px 16px -8px}.feature-contact[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.5em}.feature-contact[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:600;font-size:1rem;color:var(--project-black-primary-color)}.feature-contact[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .feature-contact[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;background-color:#f3f4f6}.feature-contact[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:1rem;padding:10px 25px;font-size:1rem;width:fit-content;background-color:var(--project-brown-quaterly-color);color:var(--project-white-primary-color);border:none}"]})}}return e})();export{he as FeatureContactComponent};
