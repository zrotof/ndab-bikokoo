import{b as ze}from"./chunk-5UBFVUMN.js";import{c as ge}from"./chunk-AXWZK5AM.js";import{c as De,d as ce,f as de,g as me,h as ue}from"./chunk-U3QUSVWF.js";import{b as ee,c as s,e as te,f as ne,h as ke,i as je,j as Ne,k as Ve,l as ie,m as $,n as k,o as oe,p as j}from"./chunk-3E4NNHJO.js";import{M as Ie,P as Fe,U as fe,V as D,X as $e,Z as S,o as Te}from"./chunk-43WM7RTN.js";import{b as we}from"./chunk-2RHMV3GA.js";import"./chunk-RFYV55MT.js";import{k as Ee,m as le,p as _}from"./chunk-I7BPIA2H.js";import{$a as Me,$b as R,Ab as h,Db as C,Eb as W,Fb as X,Gb as Y,Hb as r,Ib as o,Jb as a,Kc as f,Mb as pe,Mc as se,Nb as B,Sb as F,T as J,Tb as v,U as xe,Ub as O,V as be,Vb as E,Wa as c,Yb as Q,_ as b,_b as A,ac as w,bc as Z,cb as K,db as U,dc as p,eb as q,ec as Pe,fa as V,fc as L,ga as z,ia as y,jb as d,kb as Se,nb as M,oc as Oe,qb as g,qc as G,sa as P,sc as ae,va as ye,xb as I,yb as u}from"./chunk-5PUNC7MN.js";var We=({dt:e})=>`
.p-steplist {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style-type: none;
    overflow-x: auto;
}

.p-step {
    position: relative;
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    gap: ${e("stepper.step.gap")};
    padding: ${e("stepper.step.padding")};
}

.p-step:last-of-type {
    flex: initial;
}

.p-step-header {
    border: 0 none;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    transition: background ${e("stepper.transition.duration")}, color ${e("stepper.transition.duration")}, border-color ${e("stepper.transition.duration")}, outline-color ${e("stepper.transition.duration")}, box-shadow ${e("stepper.transition.duration")};
    border-radius: ${e("stepper.step.header.border.radius")};
    outline-color: transparent;
    background: transparent;
    padding: ${e("stepper.step.header.padding")};
    gap: ${e("stepper.step.header.gap")};
}

.p-step-header:focus-visible {
    box-shadow: ${e("stepper.step.header.focus.ring.shadow")};
    outline: ${e("stepper.step.header.focus.ring.width")} ${e("stepper.step.header.focus.ring.style")} ${e("stepper.step.header.focus.ring.color")};
    outline-offset: ${e("stepper.step.header.focus.ring.offset")};
}

.p-stepper.p-stepper-readonly .p-step {
    cursor: auto;
}

.p-step-title {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    color: ${e("stepper.step.title.color")};
    font-weight: ${e("stepper.step.title.font.weight")};
    transition: background ${e("stepper.transition.duration")}, color ${e("stepper.transition.duration")}, border-color ${e("stepper.transition.duration")}, box-shadow ${e("stepper.transition.duration")}, outline-color ${e("stepper.transition.duration")};
}

.p-step-number {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${e("stepper.step.number.color")};
    border: 2px solid ${e("stepper.step.number.border.color")};
    background: ${e("stepper.step.number.background")};
    min-width: ${e("stepper.step.number.size")};
    height: ${e("stepper.step.number.size")};
    line-height: ${e("stepper.step.number.size")};
    font-size: ${e("stepper.step.number.font.size")};
    z-index: 1;
    border-radius: ${e("stepper.step.number.border.radius")};
    position: relative;
    font-weight: ${e("stepper.step.number.font.weight")};
}

.p-step-number::after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${e("stepper.step.number.border.radius")};
    box-shadow: ${e("stepper.step.number.shadow")};
}

.p-step-active .p-step-header {
    cursor: default;
}

.p-step-active .p-step-number {
    background: ${e("stepper.step.number.active.background")};
    border-color: ${e("stepper.step.number.active.border.color")};
    color: ${e("stepper.step.number.active.color")};
}

.p-step-active .p-step-title {
    color: ${e("stepper.step.title.active.color")};
}

.p-step:not(.p-disabled):focus-visible {
    outline: ${e("focus.ring.width")} ${e("focus.ring.style")} ${e("focus.ring.color")};
    outline-offset: ${e("focus.ring.offset")};
}

.p-step:has(~ .p-step-active) .p-stepper-separator {
    background: ${e("stepper.separator.active.background")};
}

.p-stepper-separator {
    flex: 1 1 0;
    background: ${e("stepper.separator.background")};
    width: 100%;
    height: ${e("stepper.separator.size")};
    transition: background ${e("stepper.transition.duration")}, color ${e("stepper.transition.duration")}, border-color ${e("stepper.transition.duration")}, box-shadow ${e("stepper.transition.duration")}, outline-color ${e("stepper.transition.duration")};
}

.p-steppanels {
    padding: ${e("stepper.steppanels.padding")};
}

.p-steppanel {
    background: ${e("stepper.steppanel.background")};
    color: ${e("stepper.steppanel.color")};
}

.p-stepper:has(.p-stepitem) {
    display: flex;
    flex-direction: column;
}

.p-stepitem {
    display: flex;
    flex-direction: column;
    flex: initial;
}

.p-stepitem.p-stepitem-active {
    flex: 1 1 auto;
}

.p-stepitem .p-step {
    flex: initial;
}

.p-stepitem .p-steppanel-content {
    width: 100%;
    padding: ${e("stepper.steppanel.padding")};
    margin-inline-start: 1rem;
}

.p-stepitem .p-steppanel {
    display: flex;
    flex: 1 1 auto;
}

.p-stepitem .p-stepper-separator {
    flex: 0 0 auto;
    width: ${e("stepper.separator.size")};
    height: auto;
    margin: ${e("stepper.separator.margin")};
    position: relative;
    left: calc(-1 * ${e("stepper.separator.size")});
}

.p-stepitem .p-stepper-separator:dir(rtl) {
    left: calc(-9 * ${e("stepper.separator.size")});
}

.p-stepitem:has(~ .p-stepitem-active) .p-stepper-separator {
    background: ${e("stepper.separator.active.background")};
}

.p-stepitem:last-of-type .p-steppanel {
    padding-inline-start: ${e("stepper.step.number.size")};
}
/* For PrimeNG */
.p-steppanel {
    overflow: hidden;
}

.p-stepppanel:not(.ng-animating) {
    overflow: inherit;
}
`,Xe={root:({props:e})=>["p-stepper p-component",{"p-readonly":e.linear}],separator:"p-stepper-separator"},qe=(()=>{class e extends $e{name="stepper";theme=We;classes=Xe;static \u0275fac=(()=>{let t;return function(i){return(t||(t=y(e)))(i||e)}})();static \u0275prov=xe({token:e,factory:e.\u0275fac})}return e})();var N=["*"],Qe=["content"],Ae=(e,l,t)=>({activateCallback:e,value:l,active:t});function Ye(e,l){e&1&&a(0,"p-stepper-separator")}function Ze(e,l){if(e&1){let t=B();r(0,"button",0),F("click",function(){V(t);let i=v();return z(i.onStepClick())}),r(1,"span",1),p(2),o(),r(3,"span",2),E(4),o()(),g(5,Ye,1,0,"p-stepper-separator")}if(e&2){let t=v();u("tabindex",t.isStepDisabled()?-1:void 0)("disabled",t.isStepDisabled()),I("id",t.id())("role","tab")("aria-controls",t.ariaControls()),c(2),Pe(t.value()),c(3),C(t.isSeparatorVisible()?5:-1)}}function et(e,l){e&1&&pe(0)}function tt(e,l){e&1&&a(0,"p-stepper-separator")}function nt(e,l){if(e&1&&g(0,et,1,0,"ng-container",3)(1,tt,1,0,"p-stepper-separator"),e&2){let t=v();u("ngTemplateOutlet",t.content||t._contentTemplate)("ngTemplateOutletContext",ae(3,Ae,t.onStepClick.bind(t),t.value(),t.active())),c(),C(t.isSeparatorVisible()?1:-1)}}var Be=e=>({transitionParams:e}),it=e=>({value:"visible",params:e}),ot=e=>({value:"hidden",params:e});function rt(e,l){e&1&&a(0,"p-stepper-separator")}function pt(e,l){e&1&&pe(0)}function at(e,l){if(e&1&&g(0,pt,1,0,"ng-container",1),e&2){let t=v();u("ngTemplateOutlet",t.contentTemplate||t._contentTemplate)("ngTemplateOutletContext",ae(2,Ae,t.updateValue.bind(t),t.value(),t.active()))}}var ve=(()=>{class e extends S{steps=U(T);static \u0275fac=(()=>{let t;return function(i){return(t||(t=y(e)))(i||e)}})();static \u0275cmp=d({type:e,selectors:[["p-step-list"]],contentQueries:function(n,i,m){n&1&&w(m,i.steps,T,4),n&2&&Z()},hostVars:4,hostBindings:function(n,i){n&2&&h("p-steplist",!0)("p-component",!0)},features:[M],ngContentSelectors:N,decls:1,vars:0,template:function(n,i){n&1&&(O(),E(0))},dependencies:[_],encapsulation:2,changeDetection:0})}return e})(),_e=(()=>{class e extends S{static \u0275fac=(()=>{let t;return function(i){return(t||(t=y(e)))(i||e)}})();static \u0275cmp=d({type:e,selectors:[["p-stepper-separator"]],hostVars:4,hostBindings:function(n,i){n&2&&h("p-stepper-separator",!0)("p-component",!0)},features:[M],ngContentSelectors:N,decls:1,vars:0,template:function(n,i){n&1&&(O(),E(0))},dependencies:[_],encapsulation:2,changeDetection:0})}return e})(),he=(()=>{class e extends S{pcStepper=b(J(()=>re));value=q();isActive=f(()=>this.pcStepper.value()===this.value());step=K(T);stepPanel=K(Ce);constructor(){super(),se(()=>{this.step().value.set(this.value())}),se(()=>{this.stepPanel().value.set(this.value())})}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=d({type:e,selectors:[["p-step-item"]],contentQueries:function(n,i,m){n&1&&(w(m,i.step,T,5),w(m,i.stepPanel,Ce,5)),n&2&&Z(2)},hostVars:5,hostBindings:function(n,i){n&2&&(I("data-p-active",i.isActive()),h("p-stepitem",!0)("p-component",!0))},inputs:{value:[1,"value"]},outputs:{value:"valueChange"},features:[M],ngContentSelectors:N,decls:1,vars:0,template:function(n,i){n&1&&(O(),E(0))},dependencies:[_],encapsulation:2,changeDetection:0})}return e})(),T=(()=>{class e extends S{pcStepper=b(J(()=>re));value=q();disabled=P(!1,{transform:t=>ge(t)});active=f(()=>this.pcStepper.isStepActive(this.value()));isStepDisabled=f(()=>!this.active()&&(this.pcStepper.linear()||this.disabled()));id=f(()=>`${this.pcStepper.id()}_step_${this.value()}`);ariaControls=f(()=>`${this.pcStepper.id()}_steppanel_${this.value()}`);isSeparatorVisible=f(()=>{if(this.pcStepper.stepList()){let t=this.pcStepper.stepList().steps(),n=t.indexOf(this),i=t.length;return n!==i-1}else return!1});content;templates;_contentTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break}})}onStepClick(){this.pcStepper.updateValue(this.value())}static \u0275fac=(()=>{let t;return function(i){return(t||(t=y(e)))(i||e)}})();static \u0275cmp=d({type:e,selectors:[["p-step"]],contentQueries:function(n,i,m){if(n&1&&(Q(m,Qe,4),Q(m,fe,4)),n&2){let x;A(x=R())&&(i.content=x.first),A(x=R())&&(i.templates=x)}},hostVars:13,hostBindings:function(n,i){n&2&&(I("aria-current",i.active()?"step":void 0)("role","presentation")("data-p-active",i.active())("data-p-disabled",i.isStepDisabled())("data-pc-name","step"),h("p-step",!0)("p-step-active",i.active())("p-disabled",i.isStepDisabled())("p-component",!0))},inputs:{value:[1,"value"],disabled:[1,"disabled"]},outputs:{value:"valueChange"},features:[M],ngContentSelectors:N,decls:2,vars:1,consts:[[1,"p-step-header",3,"click","tabindex","disabled"],[1,"p-step-number"],[1,"p-step-title"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,i){n&1&&(O(),g(0,Ze,6,7)(1,nt,2,7)),n&2&&C(!i.content&&!i._contentTemplate?0:1)},dependencies:[_,le,_e,D],encapsulation:2,changeDetection:0})}return e})(),Ce=(()=>{class e extends S{pcStepper=b(J(()=>re));transitionOptions=f(()=>this.pcStepper.transitionOptions());value=q(void 0);active=f(()=>this.pcStepper.value()===this.value());ariaControls=f(()=>`${this.pcStepper.id()}_step_${this.value()}`);id=f(()=>`${this.pcStepper.id()}_steppanel_${this.value()}`);isVertical=f(()=>this.pcStepper.stepItems().length>0);isSeparatorVisible=f(()=>{if(this.pcStepper.stepItems()){let t=this.pcStepper.stepItems().length,n=Te(this.pcStepper.el.nativeElement,'[data-pc-name="steppanel"]');return Ie(this.el.nativeElement,n)!==t-1}});contentTemplate;templates;_contentTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break}})}updateValue(t){this.pcStepper.updateValue(t)}static \u0275fac=(()=>{let t;return function(i){return(t||(t=y(e)))(i||e)}})();static \u0275cmp=d({type:e,selectors:[["p-step-panel"]],contentQueries:function(n,i,m){if(n&1&&(Q(m,Qe,5),Q(m,fe,4)),n&2){let x;A(x=R())&&(i.contentTemplate=x.first),A(x=R())&&(i.templates=x)}},hostVars:11,hostBindings:function(n,i){n&2&&(I("role","tabpanel")("aria-controls",i.ariaControls())("id",i.id())("data-p-active",i.active())("data-pc-name","steppanel"),h("p-steppanel",!0)("p-component",!0)("p-steppanel-active",i.active()))},inputs:{value:[1,"value"]},outputs:{value:"valueChange"},features:[M],decls:3,vars:11,consts:[[1,"p-steppanel-content"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,i){n&1&&(g(0,rt,1,0,"p-stepper-separator"),r(1,"div",0),g(2,at,1,6,"ng-container"),o()),n&2&&(C(i.isSeparatorVisible()?0:-1),c(),u("@content",i.isVertical()?i.active()?G(5,it,G(3,Be,i.transitionOptions())):G(9,ot,G(7,Be,i.transitionOptions())):void 0),c(),C(i.active()?2:-1))},dependencies:[_,le,_e,D],encapsulation:2,data:{animation:[De("content",[me("hidden",de({height:"0",visibility:"hidden"})),me("visible",de({height:"*",visibility:"visible"})),ue("visible <=> hidden",[ce("250ms cubic-bezier(0.86, 0, 0.07, 1)")]),ue("void => *",ce(0))])]},changeDetection:0})}return e})(),st=(()=>{class e extends S{static \u0275fac=(()=>{let t;return function(i){return(t||(t=y(e)))(i||e)}})();static \u0275cmp=d({type:e,selectors:[["p-step-panels"]],hostVars:4,hostBindings:function(n,i){n&2&&h("p-steppanels",!0)("p-component",!0)},features:[M],ngContentSelectors:N,decls:1,vars:0,template:function(n,i){n&1&&(O(),E(0))},dependencies:[_,D],encapsulation:2,changeDetection:0})}return e})(),re=(()=>{class e extends S{value=q(void 0);linear=P(!1,{transform:t=>ge(t)});transitionOptions=P("400ms cubic-bezier(0.86, 0, 0.07, 1)");_componentStyle=b(qe);id=ye(Fe("pn_id_"));stepItems=U(he);steps=U(T);stepList=K(ve);updateValue(t){this.value.set(t)}isStepActive(t){return this.value()===t}static \u0275fac=(()=>{let t;return function(i){return(t||(t=y(e)))(i||e)}})();static \u0275cmp=d({type:e,selectors:[["p-stepper"]],contentQueries:function(n,i,m){n&1&&(w(m,i.stepItems,he,4),w(m,i.steps,T,4),w(m,i.stepList,ve,5)),n&2&&Z(3)},hostVars:6,hostBindings:function(n,i){n&2&&(I("role","tablist")("id",i.id()),h("p-stepper",!0)("p-component",!0))},inputs:{value:[1,"value"],linear:[1,"linear"],transitionOptions:[1,"transitionOptions"]},outputs:{value:"valueChange"},features:[Oe([qe]),M],ngContentSelectors:N,decls:1,vars:0,template:function(n,i){n&1&&(O(),E(0))},dependencies:[_,D],encapsulation:2,changeDetection:0})}return e})(),Re=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=Se({type:e});static \u0275inj=be({imports:[re,ve,st,Ce,he,T,_e,D,D]})}return e})();var Ge=(()=>{class e{constructor(){this.fb=b($),this.informationForm=this.fb.group({lastname:["",s.required],firstname:["",s.required],maritalname:[""],sex:["",s.required],address:["",s.required],birthdate:["",s.required],country:["",s.required],phone:["",s.required],email:["",[s.required,s.email]]})}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=d({type:e,selectors:[["app-informations"]],decls:53,vars:1,consts:[[3,"formGroup"],[1,"fields"],[1,"row-two"],[1,"field"],["type","text","pInputText","","formControlName","lastname","placeholder","Entrez votre/vos nom(s)"],["type","text","pInputText","","formControlName","firstname","placeholder","Entrez votre/vos pr\xE9nom(s)"],["type","text","pInputText","","formControlName","maritalname","placeholder","Entrez un nom marrital"],["type","text","pInputText","","formControlName","sex","placeholder","Choisissez votre sexe"],["type","text","pInputText","","formControlName","address","placeholder","Entrez votre date de naissance"],["type","text","pInputText","","formControlName","country","placeholder","Entrez votre lieu de naissance"],["type","text","pInputText","","formControlName","address","placeholder","Entrez votre addresse"],["type","text","pInputText","","formControlName","country","placeholder","Entrez votre pays de r\xE9sidence"],["type","text","pInputText","","formControlName","address","placeholder","Entrez votre t\xE9l\xE9phone"],["type","text","pInputText","","formControlName","country","placeholder","Entrez votre email"]],template:function(n,i){n&1&&(r(0,"form",0)(1,"h2"),p(2,"Vos informations personnelles"),o(),r(3,"div",1)(4,"div",2)(5,"div",3)(6,"label"),p(7,"Nom(s)"),o(),a(8,"input",4),o(),r(9,"div",3)(10,"label"),p(11,"Pr\xE9nom(s)"),o(),a(12,"input",5),o()(),r(13,"div",2)(14,"div",3)(15,"label"),p(16,"Nom Marital"),o(),a(17,"input",6),o(),r(18,"div",3)(19,"label"),p(20,"Sexe"),o(),a(21,"input",7),o()(),r(22,"div",2)(23,"div",3)(24,"label"),p(25,"Date de naissance"),o(),a(26,"input",8),o(),r(27,"div",3)(28,"label"),p(29,"Lieu de naissance"),o(),a(30,"input",9),o()(),r(31,"div",2)(32,"div",3)(33,"label"),p(34,"Adresse"),o(),a(35,"input",10),o(),r(36,"div",3)(37,"label"),p(38,"Ville"),o(),a(39,"input",11),o()(),r(40,"div",2)(41,"div",3)(42,"label"),p(43,"Pays"),o(),a(44,"input",11),o(),r(45,"div",3)(46,"label"),p(47,"T\xE9l\xE9phone"),o(),a(48,"input",12),o(),r(49,"div",3)(50,"label"),p(51,"Email"),o(),a(52,"input",13),o()()()()),n&2&&u("formGroup",i.informationForm)},dependencies:[k,ke,ee,te,ne,je,ie,j,oe],styles:["form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2rem;width:100%}form[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem;background-color:var(--project-white-primary-color);padding:4rem 2rem;border-radius:1rem}form[_ngcontent-%COMP%]   .row-two[_ngcontent-%COMP%]{display:flex;gap:1rem;width:100%}form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.7rem;width:100%}form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:600;font-size:1rem;width:fit-content;color:var(--project-black-primary-color)}form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:#eeece2}form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;height:50px;font-size:1.1rem;font-weight:500;background-color:var(--project-brown-quaterly-color);border:none;color:var(--project-white-primary-color);border-radius:5px;width:250px;margin:auto}form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:1rem;color:var(--project-orange-secondary-color);font-weight:600;text-decoration:underline;text-align:center;margin-top:1rem}"]})}}return e})();function ct(e,l){e&1&&p(0," \u2713 ")}function dt(e,l){if(e&1&&p(0),e&2){let t=v().$index;L(" ",t+1," ")}}function mt(e,l){if(e&1&&(r(0,"div",2)(1,"div",3)(2,"div",4),g(3,ct,1,0)(4,dt,1,1),o(),r(5,"h3"),p(6),o()(),a(7,"div",5),o()),e&2){let t=l.$implicit,n=l.$index,i=v();h("active",i.currentStepIndex()===n+1)("completed",t.isCompleted),c(3),C(t.isCompleted?3:4),c(3),L(" ",t.name," ")}}var He=(()=>{class e{constructor(){this.steps=P.required(),this.currentStepIndex=P.required()}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=d({type:e,selectors:[["app-steps-menu"]],inputs:{steps:[1,"steps"],currentStepIndex:[1,"currentStepIndex"]},decls:3,vars:0,consts:[[1,"steps"],[1,"step-block",3,"active","completed"],[1,"step-block"],[1,"top-step"],[1,"circle"],[1,"step-bar"]],template:function(n,i){n&1&&(r(0,"div",0),X(1,mt,8,6,"div",1,W),o()),n&2&&(c(),Y(i.steps()))},styles:[".steps[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:2rem;margin-bottom:4rem;width:100%}.steps[_ngcontent-%COMP%]   .step-block[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;gap:1rem}.steps[_ngcontent-%COMP%]   .step-block[_ngcontent-%COMP%]   .top-step[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem}.steps[_ngcontent-%COMP%]   .step-block[_ngcontent-%COMP%]   .top-step[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:32px;height:32px;flex-shrink:0;border-radius:5px;color:var(--project-white-primary-color);font-weight:700;background-color:var(--project-brown-quaterly-color)}.steps[_ngcontent-%COMP%]   .step-block[_ngcontent-%COMP%]   .top-step[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:300}.steps[_ngcontent-%COMP%]   .step-block[_ngcontent-%COMP%]   .step-bar[_ngcontent-%COMP%]{height:4px;width:100%;background-color:var(--project-white-secondary-color);border-radius:2px}.steps[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   .top-step[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%], .steps[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   .top-step[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]{background-color:var(--project-brown-quaterly-color)}.steps[_ngcontent-%COMP%]   .completed[_ngcontent-%COMP%]   .top-step[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%], .steps[_ngcontent-%COMP%]   .completed[_ngcontent-%COMP%]   .top-step[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]{background-color:var(--project-blue-primary-color)}"],changeDetection:0})}}return e})();var Je=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=d({type:e,selectors:[["app-paiement"]],decls:30,vars:0,consts:[[1,"paiements"],["formControlName","amount"],["value","20"],["value","35"],["value","50"],["value","250"],["formControlName","paymentMethod"],["value","especes"],["value","cheque"],["value","virement"],["formControlName","reserve","type","number"],["formControlName","place"],["formControlName","date","type","date"]],template:function(n,i){n&1&&(r(0,"div",0)(1,"label"),p(2,"Montant d'inscription (\u20AC) : "),r(3,"select",1)(4,"option",2),p(5,"20 \u20AC"),o(),r(6,"option",3),p(7,"35 \u20AC"),o(),r(8,"option",4),p(9,"50 \u20AC"),o(),r(10,"option",5),p(11,"250 \u20AC"),o()()(),r(12,"label"),p(13,"Mode de paiement : "),r(14,"select",6)(15,"option",7),p(16,"Esp\xE8ces"),o(),r(17,"option",8),p(18,"Ch\xE8que"),o(),r(19,"option",9),p(20,"Virement bancaire"),o()()(),r(21,"label"),p(22,"Montant de la r\xE9serve (\u20AC) : "),a(23,"input",10),o(),r(24,"label"),p(25,"Fait \xE0 : "),a(26,"input",11),o(),r(27,"label"),p(28,"Date : "),a(29,"input",12),o()())},encapsulation:2})}}return e})();function ut(e,l){if(e&1&&(r(0,"div",2)(1,"h3"),p(2),o(),r(3,"div",4)(4,"div",5)(5,"label",6),p(6,"Nom"),o(),a(7,"input",7),o(),r(8,"div",5)(9,"label",6),p(10,"pr\xE9nom"),o(),a(11,"input",7),o(),r(12,"div",5)(13,"label",6),p(14,"Matricule"),o(),a(15,"input",7),o()(),r(16,"div",4)(17,"div",5)(18,"label",6),p(19,"Filiation / Parent\xE9"),o(),a(20,"input",7),o(),r(21,"div",5)(22,"label",6),p(23,"T\xE9l\xE9phone"),o(),a(24,"input",10),o(),r(25,"div",5)(26,"label",6),p(27,"Email"),o(),a(28,"input",11),o()(),a(29,"hr"),o()),e&2){let t=l.$index;u("formGroupName",t),c(2),L("Ayant droit ",t+1,"")}}var Ke=(()=>{class e{constructor(){this.fb=b($),this.form=this.fb.group({dependents:this.fb.array([this.createDependent(),this.createDependent()]),sponsor:this.fb.group({name:["",s.required],canton:["",s.required],matricule:[""]})})}createDependent(){return this.fb.group({name:["",s.required],phone:[""],email:[""],relation:[""],country:[""],canton:[""],matricule:[""]})}get dependents(){return this.form.get("dependents")}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=d({type:e,selectors:[["app-dependents"]],decls:22,vars:0,consts:[[1,"dependents-sponsor"],["formArrayName","dependents",1,"dependents"],[1,"dependent",3,"formGroupName"],["formGroupName","sponsor",1,"sponsor"],[1,"row-two"],[1,"field"],["for",""],["pInputText","","formControlName","name"],["pInputText","","formControlName","canton"],["pInputText","","formControlName","matricule"],["pInputText","","formControlName","phone"],["pInputText","","formControlName","email"]],template:function(n,i){n&1&&(r(0,"div",0)(1,"h2"),p(2,"Vos ayants droits"),o(),r(3,"div",1),X(4,ut,30,2,"div",2,W),o(),r(6,"h2"),p(7,"Ton parrain / Ta marraine"),o(),r(8,"div",3)(9,"div",4)(10,"div",5)(11,"label",6),p(12,"Nom & pr\xE9nom"),o(),a(13,"input",7),o(),r(14,"div",5)(15,"label",6),p(16,"Canton"),o(),a(17,"input",8),o(),r(18,"div",5)(19,"label",6),p(20,"Matricule"),o(),a(21,"input",9),o()()()()),n&2&&(c(4),Y(i.dependents.controls))},dependencies:[k,ee,te,ne,ie,Ne,Ve,j,oe],styles:[".dependents-sponsor[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2rem;width:100%}.dependents-sponsor[_ngcontent-%COMP%]   .dependents[_ngcontent-%COMP%]{background-color:var(--project-white-primary-color);padding:4rem 2rem;border-radius:1rem;display:flex;flex-direction:column;gap:2rem}.dependents-sponsor[_ngcontent-%COMP%]   .dependents[_ngcontent-%COMP%]   .dependent[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.dependents-sponsor[_ngcontent-%COMP%]   .row-two[_ngcontent-%COMP%]{display:flex;gap:1rem;width:100%}.dependents-sponsor[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.7rem;width:100%}.dependents-sponsor[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:600;font-size:1rem;width:fit-content;color:var(--project-black-primary-color)}.dependents-sponsor[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:#eeece2}.dependents-sponsor[_ngcontent-%COMP%]   .sponsor[_ngcontent-%COMP%]{background-color:var(--project-white-primary-color);padding:4rem 2rem;border-radius:1rem;display:flex}"]})}}return e})();function ft(e,l){e&1&&a(0,"app-informations")}function gt(e,l){e&1&&a(0,"app-dependents")}function vt(e,l){e&1&&a(0,"app-paiement")}function ht(e,l){if(e&1){let t=B();r(0,"button",7),F("click",function(){V(t);let i=v();return z(i.nextStep())}),p(1,"Suivant"),o()}}function Ct(e,l){if(e&1){let t=B();r(0,"button",7),F("click",function(){V(t);let i=v();return z(i.onSubmit())}),p(1,"Soumettre"),o()}}var dn=(()=>{class e{constructor(t){this.fb=t,this.steps=[{name:"Vos personnelles",order:1,isCompleted:!0},{name:"Ayants-droit & Parrain",order:2,isCompleted:!1},{name:"Engagement & Paiement",order:3,isCompleted:!1}],this.currentStepIndex=1}ngOnInit(){this.form=this.fb.group({dependents:this.fb.array([this.createDependent(),this.createDependent()]),sponsor:this.fb.group({name:["",s.required],canton:["",s.required],matricule:[""]}),commitment:this.fb.group({amount:["",s.required],paymentMethod:["",s.required],reserve:["",s.required],place:["",s.required],date:["",s.required]})})}createDependent(){return this.fb.group({name:[""],phone:[""],email:[""],relation:[""],country:[""],canton:[""],matricule:[""]})}get dependents(){return this.form.get("dependents")}nextStep(){this.currentStepIndex<this.steps.length&&(this.steps[this.currentStepIndex-1].isCompleted=!0,this.currentStepIndex++)}previousStep(){this.currentStepIndex>0&&this.currentStepIndex--}onSubmit(){this.form.valid?console.log("Formulaire soumis",this.form.value):console.log("Formulaire invalide")}static{this.\u0275fac=function(n){return new(n||e)(Me($))}}static{this.\u0275cmp=d({type:e,selectors:[["app-feature-register"]],decls:15,vars:6,consts:[[1,"stepper-container"],[1,"content","my-container"],[3,"steps","currentStepIndex"],[1,"stepper-content"],[1,"stepper-nav"],[3,"click","disabled"],[3,"click",4,"ngIf"],[3,"click"]],template:function(n,i){n&1&&(a(0,"app-top-header"),r(1,"div",0)(2,"div",1)(3,"h1"),p(4,"Nous Rejoindre"),o(),a(5,"app-steps-menu",2),r(6,"div",3),g(7,ft,1,0,"app-informations")(8,gt,1,0,"app-dependents")(9,vt,1,0,"app-paiement"),o(),r(10,"div",4)(11,"button",5),F("click",function(){return i.previousStep()}),p(12,"Pr\xE9c\xE9dent"),o(),g(13,ht,2,0,"button",6)(14,Ct,2,0,"button",6),o()()()),n&2&&(c(5),u("steps",i.steps)("currentStepIndex",i.currentStepIndex),c(2),C(i.currentStepIndex===1?7:i.currentStepIndex===2?8:9),c(4),u("disabled",i.currentStepIndex===1),c(2),u("ngIf",i.currentStepIndex<3),c(),u("ngIf",i.currentStepIndex===3))},dependencies:[_,Ee,Re,k,we,j,ze,He,Ge,Ke,Je],styles:[".stepper-container[_ngcontent-%COMP%]{display:flex;justify-content:center;background-color:#10250e;width:100%;min-height:100vh;min-height:100svh;height:100%}.stepper-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:100%;flex:1;color:var(--project-white-primary-color);padding-top:4rem;padding-bottom:4rem}.stepper-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:4rem;font-weight:900;margin-bottom:4rem;color:var(--project-orange-secondary-color)}.stepper-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .stepper-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1.5rem;width:100%}.stepper-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .stepper-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:left;color:#007bff}.stepper-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .stepper-content[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:flex;flex-direction:column;text-align:left;font-size:14px;margin-bottom:1rem}.stepper-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .stepper-content[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .stepper-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .stepper-content[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{padding:.4rem;font-size:14px;border:1px solid #ccc;border-radius:4px;margin-top:.25rem}.stepper-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .stepper-content[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{margin:1rem 0;border:none;border-top:1px solid #e0e0e0}.stepper-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2rem;width:100%}.stepper-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.7rem}.stepper-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:500;font-size:1rem;width:fit-content}.stepper-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;height:50px;font-size:1.1rem;font-weight:500;background-color:var(--project-brown-quaterly-color);border:none;color:var(--project-white-primary-color);border-radius:5px;width:250px;margin:auto}.stepper-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:1rem;color:var(--project-orange-secondary-color);font-weight:600;text-decoration:underline;text-align:center;margin-top:1rem}.stepper-nav[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:1rem;margin-top:2rem}.stepper-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:8px 16px;border:none;background-color:var(--project-blue-primary-color);color:var(--project-white-primary-color);font-weight:600;border-radius:4px;cursor:pointer;font-size:1rem}.stepper-nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{background-color:var(--project-white-secondary-color);cursor:not-allowed}"]})}}return e})();export{dn as FeatureRegisterComponent};
