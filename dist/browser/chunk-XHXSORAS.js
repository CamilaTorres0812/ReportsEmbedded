import{a as pe}from"./chunk-7R2VNRLB.js";import{Da as H,Ga as P,Ha as se,La as de,Oa as he,ga as L,ha as ae,ta as re,ua as le,va as A,wa as g}from"./chunk-TB3JVR2Y.js";import{k as q,m as j,p as ce,q as N,r as R}from"./chunk-NB4XJFMV.js";import{Ab as ee,Bb as O,Cb as b,Db as te,Eb as d,Fb as h,Jb as U,Kb as K,L as X,La as l,M,N as F,Qb as z,Rb as oe,S,Sb as ie,X as Z,Xa as y,Y as V,Ya as D,Z as E,_ as J,_a as C,aa as k,ab as s,ec as _,fc as ne,ga as Q,hb as f,ib as c,lb as G,ma as B,mb as x,rb as p,sb as u,tb as v,ub as T,vb as I,wb as $,xb as W,yb as Y,zb as m}from"./chunk-VQMBXVQI.js";var xe=["header"],_e=["title"],ye=["subtitle"],Ce=["content"],ve=["footer"],Te=["*",[["p-header"]],[["p-footer"]]],Ie=["*","p-header","p-footer"];function $e(e,a){e&1&&$(0)}function we(e,a){if(e&1&&(p(0,"div",8),O(1,1),s(2,$e,1,0,"ng-container",6),u()),e&2){let t=m();l(2),c("ngTemplateOutlet",t.headerTemplate||t._headerTemplate)}}function Me(e,a){if(e&1&&(T(0),U(1),I()),e&2){let t=m(2);l(),K(t.header)}}function Fe(e,a){e&1&&$(0)}function Se(e,a){if(e&1&&(p(0,"div",9),s(1,Me,2,1,"ng-container",10)(2,Fe,1,0,"ng-container",6),u()),e&2){let t=m();l(),c("ngIf",t.header&&!t._titleTemplate&&!t.titleTemplate),l(),c("ngTemplateOutlet",t.titleTemplate||t._titleTemplate)}}function Ve(e,a){if(e&1&&(T(0),U(1),I()),e&2){let t=m(2);l(),K(t.subheader)}}function Ee(e,a){e&1&&$(0)}function Qe(e,a){if(e&1&&(p(0,"div",11),s(1,Ve,2,1,"ng-container",10)(2,Ee,1,0,"ng-container",6),u()),e&2){let t=m();l(),c("ngIf",t.subheader&&!t._subtitleTemplate&&!t.subtitleTemplate),l(),c("ngTemplateOutlet",t.subtitleTemplate||t._subtitleTemplate)}}function Be(e,a){e&1&&$(0)}function De(e,a){e&1&&$(0)}function Oe(e,a){if(e&1&&(p(0,"div",12),O(1,2),s(2,De,1,0,"ng-container",6),u()),e&2){let t=m();l(2),c("ngTemplateOutlet",t.footerTemplate||t._footerTemplate)}}var ze=({dt:e})=>`
.p-card {
    background: ${e("card.background")};
    color: ${e("card.color")};
    box-shadow: ${e("card.shadow")};
    border-radius: ${e("card.border.radius")};
    display: flex;
    flex-direction: column;
}

.p-card-caption {
    display: flex;
    flex-direction: column;
    gap: ${e("card.caption.gap")};
}

.p-card-body {
    padding: ${e("card.body.padding")};
    display: flex;
    flex-direction: column;
    gap: ${e("card.body.gap")};
}

.p-card-title {
    font-size: ${e("card.title.font.size")};
    font-weight: ${e("card.title.font.weight")};
}

.p-card-subtitle {
    color: ${e("card.subtitle.color")};
}
`,qe={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},ue=(()=>{class e extends H{name="card";theme=ze;classes=qe;static \u0275fac=(()=>{let t;return function(o){return(t||(t=k(e)))(o||e)}})();static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})();var je=(()=>{class e extends P{header;subheader;set style(t){L(this._style(),t)||this._style.set(t)}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=B(null);_componentStyle=S(ue);getBlockableElement(){return this.el.nativeElement.children[0]}templates;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this._headerTemplate=t.template;break;case"title":this._titleTemplate=t.template;break;case"subtitle":this._subtitleTemplate=t.template;break;case"content":this._contentTemplate=t.template;break;case"footer":this._footerTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=k(e)))(o||e)}})();static \u0275cmp=y({type:e,selectors:[["p-card"]],contentQueries:function(i,o,r){if(i&1&&(b(r,re,5),b(r,le,5),b(r,xe,4),b(r,_e,4),b(r,ye,4),b(r,Ce,4),b(r,ve,4),b(r,A,4)),i&2){let n;d(n=h())&&(o.headerFacet=n.first),d(n=h())&&(o.footerFacet=n.first),d(n=h())&&(o.headerTemplate=n.first),d(n=h())&&(o.titleTemplate=n.first),d(n=h())&&(o.subtitleTemplate=n.first),d(n=h())&&(o.contentTemplate=n.first),d(n=h())&&(o.footerTemplate=n.first),d(n=h())&&(o.templates=n)}},inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},features:[z([ue]),C],ngContentSelectors:Ie,decls:9,vars:10,consts:[[3,"ngClass","ngStyle"],["class","p-card-header",4,"ngIf"],[1,"p-card-body"],["class","p-card-title",4,"ngIf"],["class","p-card-subtitle",4,"ngIf"],[1,"p-card-content"],[4,"ngTemplateOutlet"],["class","p-card-footer",4,"ngIf"],[1,"p-card-header"],[1,"p-card-title"],[4,"ngIf"],[1,"p-card-subtitle"],[1,"p-card-footer"]],template:function(i,o){i&1&&(ee(Te),p(0,"div",0),s(1,we,3,1,"div",1),p(2,"div",2),s(3,Se,3,2,"div",3)(4,Qe,3,2,"div",4),p(5,"div",5),O(6),s(7,Be,1,0,"ng-container",6),u(),s(8,Oe,3,1,"div",7),u()()),i&2&&(x(o.styleClass),c("ngClass","p-card p-component")("ngStyle",o._style()),f("data-pc-name","card"),l(),c("ngIf",o.headerFacet||o.headerTemplate||o._headerTemplate),l(2),c("ngIf",o.header||o.titleTemplate||o._titleTemplate),l(),c("ngIf",o.subheader||o.subtitleTemplate||o._subtitleTemplate),l(3),c("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),l(),c("ngIf",o.footerFacet||o.footerTemplate||o._footerTemplate))},dependencies:[R,q,j,N,ce,g],encapsulation:2,changeDetection:0})}return e})(),bt=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=D({type:e});static \u0275inj=F({imports:[je,g,g]})}return e})();var me=(()=>{class e extends se{static \u0275fac=(()=>{let t;return function(o){return(t||(t=k(e)))(o||e)}})();static \u0275cmp=y({type:e,selectors:[["MinusIcon"]],features:[C],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z","fill","currentColor"]],template:function(i,o){i&1&&(J(),p(0,"svg",0),v(1,"path",1),u()),i&2&&(x(o.getClassNames()),f("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role))},encapsulation:2})}return e})();var Ne=["checkboxicon"],Re=["input"],Le=()=>({"p-checkbox-input":!0}),Ae=e=>({checked:e,class:"p-checkbox-icon"});function He(e,a){if(e&1&&v(0,"span",8),e&2){let t=m(3);c("ngClass",t.checkboxIcon),f("data-pc-section","icon")}}function Pe(e,a){e&1&&v(0,"CheckIcon",9),e&2&&(c("styleClass","p-checkbox-icon"),f("data-pc-section","icon"))}function Ge(e,a){if(e&1&&(T(0),s(1,He,1,2,"span",7)(2,Pe,1,2,"CheckIcon",6),I()),e&2){let t=m(2);l(),c("ngIf",t.checkboxIcon),l(),c("ngIf",!t.checkboxIcon)}}function Ue(e,a){e&1&&v(0,"MinusIcon",9),e&2&&(c("styleClass","p-checkbox-icon"),f("data-pc-section","icon"))}function Ke(e,a){if(e&1&&(T(0),s(1,Ge,3,2,"ng-container",4)(2,Ue,1,2,"MinusIcon",6),I()),e&2){let t=m();l(),c("ngIf",t.checked),l(),c("ngIf",t._indeterminate())}}function Xe(e,a){}function Ze(e,a){e&1&&s(0,Xe,0,0,"ng-template")}var Je=({dt:e})=>`
.p-checkbox {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    width: ${e("checkbox.width")};
    height: ${e("checkbox.height")};
}

.p-checkbox-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border: 1px solid transparent;
    border-radius: ${e("checkbox.border.radius")};
}

.p-checkbox-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${e("checkbox.border.radius")};
    border: 1px solid ${e("checkbox.border.color")};
    background: ${e("checkbox.background")};
    width: ${e("checkbox.width")};
    height: ${e("checkbox.height")};
    transition: background ${e("checkbox.transition.duration")}, color ${e("checkbox.transition.duration")}, border-color ${e("checkbox.transition.duration")}, box-shadow ${e("checkbox.transition.duration")}, outline-color ${e("checkbox.transition.duration")};
    outline-color: transparent;
    box-shadow: ${e("checkbox.shadow")};
}

.p-checkbox-icon {
    transition-duration: ${e("checkbox.transition.duration")};
    color: ${e("checkbox.icon.color")};
    font-size: ${e("checkbox.icon.size")};
    width: ${e("checkbox.icon.size")};
    height: ${e("checkbox.icon.size")};
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    border-color: ${e("checkbox.hover.border.color")};
}

.p-checkbox-checked .p-checkbox-box {
    border-color: ${e("checkbox.checked.border.color")};
    background: ${e("checkbox.checked.background")};
}

.p-checkbox-checked .p-checkbox-icon {
    color: ${e("checkbox.icon.checked.color")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: ${e("checkbox.checked.hover.background")};
    border-color: ${e("checkbox.checked.hover.border.color")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
    color: ${e("checkbox.icon.checked.hover.color")};
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: ${e("checkbox.focus.border.color")};
    box-shadow: ${e("checkbox.focus.ring.shadow")};
    outline: ${e("checkbox.focus.ring.width")} ${e("checkbox.focus.ring.style")} ${e("checkbox.focus.ring.color")};
    outline-offset: ${e("checkbox.focus.ring.offset")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: ${e("checkbox.checked.focus.border.color")};
}

p-checkbox.ng-invalid.ng-dirty .p-checkbox-box {
    border-color: ${e("checkbox.invalid.border.color")};
}

.p-checkbox.p-variant-filled .p-checkbox-box {
    background: ${e("checkbox.filled.background")};
}

.p-checkbox-checked.p-variant-filled .p-checkbox-box {
    background: ${e("checkbox.checked.background")};
}

.p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: ${e("checkbox.checked.hover.background")};
}

.p-checkbox.p-disabled {
    opacity: 1;
}

.p-checkbox.p-disabled .p-checkbox-box {
    background: ${e("checkbox.disabled.background")};
    border-color: ${e("checkbox.checked.disabled.border.color")};
}

.p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
    color: ${e("checkbox.icon.disabled.color")};
}

.p-checkbox-sm,
.p-checkbox-sm .p-checkbox-box {
    width: ${e("checkbox.sm.width")};
    height: ${e("checkbox.sm.height")};
}

.p-checkbox-sm .p-checkbox-icon {
    font-size: ${e("checkbox.icon.sm.size")};
    width: ${e("checkbox.icon.sm.size")};
    height: ${e("checkbox.icon.sm.size")};
}

.p-checkbox-lg,
.p-checkbox-lg .p-checkbox-box {
    width: ${e("checkbox.lg.width")};
    height: ${e("checkbox.lg.height")};
}

.p-checkbox-lg .p-checkbox-icon {
    font-size: ${e("checkbox.icon.lg.size")};
    width: ${e("checkbox.icon.lg.size")};
    height: ${e("checkbox.icon.lg.size")};
}
`,We={root:({instance:e,props:a})=>["p-checkbox p-component",{"p-checkbox-checked":e.checked,"p-disabled":a.disabled,"p-invalid":a.invalid,"p-variant-filled":a.variant?a.variant==="filled":e.config.inputStyle==="filled"||e.config.inputVariant==="filled"}],box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},fe=(()=>{class e extends H{name="checkbox";theme=Je;classes=We;static \u0275fac=(()=>{let t;return function(o){return(t||(t=k(e)))(o||e)}})();static \u0275prov=M({token:e,factory:e.\u0275fac})}return e})();var Ye={provide:de,useExisting:X(()=>ke),multi:!0},ke=(()=>{class e extends P{value;name;disabled;binary;ariaLabelledBy;ariaLabel;tabindex;inputId;style;inputStyle;styleClass;inputClass;indeterminate=!1;size;formControl;checkboxIcon;readonly;required;autofocus;trueValue=!0;falseValue=!1;variant;onChange=new Q;onFocus=new Q;onBlur=new Q;inputViewChild;get checked(){return this._indeterminate()?!1:this.binary?this.model===this.trueValue:ae(this.value,this.model)}get containerClass(){return{"p-checkbox p-component":!0,"p-checkbox-checked p-highlight":this.checked,"p-disabled":this.disabled,"p-variant-filled":this.variant==="filled"||this.config.inputStyle()==="filled"||this.config.inputVariant()==="filled","p-checkbox-sm p-inputfield-sm":this.size==="small","p-checkbox-lg p-inputfield-lg":this.size==="large"}}_indeterminate=B(void 0);checkboxIconTemplate;templates;_checkboxIconTemplate;model;onModelChange=()=>{};onModelTouched=()=>{};focused=!1;_componentStyle=S(fe);ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"icon":this._checkboxIconTemplate=t.template;break;case"checkboxicon":this._checkboxIconTemplate=t.template;break}})}ngOnChanges(t){super.ngOnChanges(t),t.indeterminate&&this._indeterminate.set(t.indeterminate.currentValue)}updateModel(t){let i,o=this.injector.get(he,null,{optional:!0,self:!0}),r=o&&!this.formControl?o.value:this.model;this.binary?(i=this._indeterminate()?this.trueValue:this.checked?this.falseValue:this.trueValue,this.model=i,this.onModelChange(i)):(this.checked||this._indeterminate()?i=r.filter(n=>!L(n,this.value)):i=r?[...r,this.value]:[this.value],this.onModelChange(i),this.model=i,this.formControl&&this.formControl.setValue(i)),this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:i,originalEvent:t})}handleChange(t){this.readonly||this.updateModel(t)}onInputFocus(t){this.focused=!0,this.onFocus.emit(t)}onInputBlur(t){this.focused=!1,this.onBlur.emit(t),this.onModelTouched()}focus(){this.inputViewChild.nativeElement.focus()}writeValue(t){this.model=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){setTimeout(()=>{this.disabled=t,this.cd.markForCheck()})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=k(e)))(o||e)}})();static \u0275cmp=y({type:e,selectors:[["p-checkbox"],["p-checkBox"],["p-check-box"]],contentQueries:function(i,o,r){if(i&1&&(b(r,Ne,4),b(r,A,4)),i&2){let n;d(n=h())&&(o.checkboxIconTemplate=n.first),d(n=h())&&(o.templates=n)}},viewQuery:function(i,o){if(i&1&&te(Re,5),i&2){let r;d(r=h())&&(o.inputViewChild=r.first)}},inputs:{value:"value",name:"name",disabled:[2,"disabled","disabled",_],binary:[2,"binary","binary",_],ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:[2,"tabindex","tabindex",ne],inputId:"inputId",style:"style",inputStyle:"inputStyle",styleClass:"styleClass",inputClass:"inputClass",indeterminate:[2,"indeterminate","indeterminate",_],size:"size",formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:[2,"readonly","readonly",_],required:[2,"required","required",_],autofocus:[2,"autofocus","autofocus",_],trueValue:"trueValue",falseValue:"falseValue",variant:"variant"},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},features:[z([Ye,fe]),C,Z],decls:6,vars:29,consts:[["input",""],[3,"ngClass"],["type","checkbox",3,"focus","blur","change","value","checked","disabled","readonly","ngClass"],[1,"p-checkbox-box"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"styleClass",4,"ngIf"],["class","p-checkbox-icon",3,"ngClass",4,"ngIf"],[1,"p-checkbox-icon",3,"ngClass"],[3,"styleClass"]],template:function(i,o){if(i&1){let r=W();p(0,"div",1)(1,"input",2,0),Y("focus",function(w){return V(r),E(o.onInputFocus(w))})("blur",function(w){return V(r),E(o.onInputBlur(w))})("change",function(w){return V(r),E(o.handleChange(w))}),u(),p(3,"div",3),s(4,Ke,3,2,"ng-container",4)(5,Ze,1,0,null,5),u()()}i&2&&(G(o.style),x(o.styleClass),c("ngClass",o.containerClass),f("data-p-highlight",o.checked)("data-p-checked",o.checked)("data-p-disabled",o.disabled),l(),G(o.inputStyle),x(o.inputClass),c("value",o.value)("checked",o.checked)("disabled",o.disabled)("readonly",o.readonly)("ngClass",oe(26,Le)),f("id",o.inputId)("name",o.name)("tabindex",o.tabindex)("required",o.required?!0:null)("aria-labelledby",o.ariaLabelledBy)("aria-label",o.ariaLabel),l(3),c("ngIf",!o.checkboxIconTemplate&&!o._checkboxIconTemplate),l(),c("ngTemplateOutlet",o.checkboxIconTemplate||o._checkboxIconTemplate)("ngTemplateOutletContext",ie(27,Ae,o.checked)))},dependencies:[R,q,j,N,pe,me,g],encapsulation:2,changeDetection:0})}return e})(),Ot=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=D({type:e});static \u0275inj=F({imports:[ke,g,g]})}return e})();export{me as a,je as b,bt as c,ke as d,Ot as e};
