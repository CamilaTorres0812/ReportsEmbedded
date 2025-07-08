import{Ba as N,Ea as Q,Ha as at,Sa as R,Wa as rt,Ya as st,bb as ct,fa as A,ga as k,ta as z,ua as C}from"./chunk-Y7WV5QTW.js";import{$ as h,$a as c,Cb as d,Eb as p,Fb as b,Jb as ot,K as $,Ka as g,Kb as nt,L as B,M as P,Qb as S,R as L,Sb as q,Tb as F,Wa as E,X as G,Xa as K,Y as H,Za as O,_b as it,cc as u,dc as I,fa as v,gb as m,hb as r,jb as Y,kb as J,lb as w,mb as y,ob as W,pb as X,qb as Z,rb as _,sb as T,sc as lt,tb as tt,wb as x,xb as et,yb as M,yc as D,zb as s,zc as V}from"./chunk-3PM7GAU5.js";var ht=["icon"],mt=["content"],gt=t=>({$implicit:t}),yt=(t,a)=>({"p-togglebutton-icon":!0,"p-togglebutton-icon-left":t,"p-togglebutton-icon-right":a});function _t(t,a){t&1&&x(0)}function Ct(t,a){if(t&1&&tt(0,"span",1),t&2){let e=s(3);w(e.checked?e.onIcon:e.offIcon),r("ngClass",F(4,yt,e.iconPos==="left",e.iconPos==="right")),m("data-pc-section","icon")}}function vt(t,a){if(t&1&&c(0,Ct,1,7,"span",3),t&2){let e=s(2);y(e.onIcon||e.offIcon?0:-1)}}function Tt(t,a){t&1&&x(0)}function xt(t,a){if(t&1&&c(0,Tt,1,0,"ng-container",2),t&2){let e=s(2);r("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",q(2,gt,e.checked))}}function kt(t,a){if(t&1&&(c(0,vt,1,1)(1,xt,1,4,"ng-container"),_(2,"span",1),ot(3),T()),t&2){let e=s();y(e.iconTemplate?1:0),g(2),r("ngClass",e.cx("label")),m("data-pc-section","label"),g(),nt(e.checked?e.hasOnLabel?e.onLabel:"\xA0":e.hasOffLabel?e.offLabel:"\xA0")}}var $t=({dt:t})=>`
p-togglebutton {
    display: inline-flex;
}

.p-togglebutton {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${t("togglebutton.color")};
    background: ${t("togglebutton.background")};
    border: 1px solid ${t("togglebutton.border.color")};
    padding: ${t("togglebutton.padding")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${t("togglebutton.transition.duration")}, color ${t("togglebutton.transition.duration")}, border-color ${t("togglebutton.transition.duration")},
        outline-color ${t("togglebutton.transition.duration")}, box-shadow ${t("togglebutton.transition.duration")};
    border-radius: ${t("togglebutton.border.radius")};
    outline-color: transparent;
    font-weight: ${t("togglebutton.font.weight")};
}

.p-togglebutton-content {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${t("togglebutton.gap")};
}

.p-togglebutton-label,
.p-togglebutton-icon {
    position: relative;
    transition: none;
}

.p-togglebutton::before {
    content: "";
    background: transparent;
    transition: background ${t("togglebutton.transition.duration")}, color ${t("togglebutton.transition.duration")}, border-color ${t("togglebutton.transition.duration")},
            outline-color ${t("togglebutton.transition.duration")}, box-shadow ${t("togglebutton.transition.duration")};
    position: absolute;
    inset-inline-start: ${t("togglebutton.content.left")};
    top: ${t("togglebutton.content.top")};
    width: calc(100% - calc(2 *  ${t("togglebutton.content.left")}));
    height: calc(100% - calc(2 *  ${t("togglebutton.content.top")}));
    border-radius: ${t("togglebutton.border.radius")};
}

.p-togglebutton.p-togglebutton-checked::before {
    background: ${t("togglebutton.content.checked.background")};
    box-shadow: ${t("togglebutton.content.checked.shadow")};
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
    background: ${t("togglebutton.hover.background")};
    color: ${t("togglebutton.hover.color")};
}

.p-togglebutton.p-togglebutton-checked {
    background: ${t("togglebutton.checked.background")};
    border-color: ${t("togglebutton.checked.border.color")};
    color: ${t("togglebutton.checked.color")};
}

.p-togglebutton:focus-visible {
    box-shadow: ${t("togglebutton.focus.ring.shadow")};
    outline: ${t("togglebutton.focus.ring.width")} ${t("togglebutton.focus.ring.style")} ${t("togglebutton.focus.ring.color")};
    outline-offset: ${t("togglebutton.focus.ring.offset")};
}

.p-togglebutton.p-invalid {
    border-color: ${t("togglebutton.invalid.border.color")};
}

.p-togglebutton:disabled {
    opacity: 1;
    cursor: default;
    background: ${t("togglebutton.disabled.background")};
    border-color: ${t("togglebutton.disabled.border.color")};
    color: ${t("togglebutton.disabled.color")};
}

.p-togglebutton-icon {
    color: ${t("togglebutton.icon.color")};
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
    color: ${t("togglebutton.icon.hover.color")};
}

.p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
    color: ${t("togglebutton.icon.checked.color")};
}

.p-togglebutton:disabled .p-togglebutton-icon {
    color: ${t("togglebutton.icon.disabled.color")};
}

.p-togglebutton-sm {
    padding: ${t("togglebutton.sm.padding")};
    font-size: ${t("togglebutton.sm.font.size")};
}

.p-togglebutton-lg {
    padding: ${t("togglebutton.lg.padding")};
    font-size: ${t("togglebutton.lg.font.size")};
}

/* For PrimeNG (iconPos) */

.p-togglebutton-icon-right {
    order: 1;
}

p-togglebutton.ng-invalid.ng-dirty > .p-togglebutton {
    border-color: ${t("togglebutton.invalid.border.color")};
}
`,Bt={root:({instance:t})=>({"p-togglebutton p-component":!0,"p-togglebutton-checked":t.checked,"p-disabled":t.disabled,"p-togglebutton-sm p-inputfield-sm":t.size==="small","p-togglebutton-lg p-inputfield-lg":t.size==="large"}),content:"p-togglebutton-content",icon:"p-togglebutton-icon",label:"p-togglebutton-label"},ut=(()=>{class t extends N{name="togglebutton";theme=$t;classes=Bt;static \u0275fac=(()=>{let e;return function(n){return(e||(e=h(t)))(n||t)}})();static \u0275prov=B({token:t,factory:t.\u0275fac})}return t})();var Lt={provide:R,useExisting:$(()=>U),multi:!0},U=(()=>{class t extends Q{onLabel="Yes";offLabel="No";onIcon;offIcon;ariaLabel;ariaLabelledBy;disabled;style;styleClass;get hostClass(){return this.styleClass||""}inputId;tabindex=0;size;iconPos="left";autofocus;allowEmpty;onChange=new v;iconTemplate;contentTemplate;templates;checked=!1;onModelChange=()=>{};onModelTouched=()=>{};_componentStyle=L(ut);toggle(e){!this.disabled&&!(this.allowEmpty===!1&&this.checked)&&(this.checked=!this.checked,this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:e,checked:this.checked}),this.cd.markForCheck())}onKeyDown(e){switch(e.code){case"Enter":this.toggle(e),e.preventDefault();break;case"Space":this.toggle(e),e.preventDefault();break}}onBlur(){this.onModelTouched()}writeValue(e){this.checked=e,this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}get hasOnLabel(){return this.onLabel&&this.onLabel.length>0}get hasOffLabel(){return this.onLabel&&this.onLabel.length>0}get active(){return this.checked===!0}_iconTemplate;_contentTemplate;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"icon":this._iconTemplate=e.template;break;case"content":this._contentTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=h(t)))(n||t)}})();static \u0275cmp=E({type:t,selectors:[["p-toggleButton"],["p-togglebutton"],["p-toggle-button"]],contentQueries:function(o,n,i){if(o&1&&(d(i,ht,4),d(i,mt,4),d(i,z,4)),o&2){let l;p(l=b())&&(n.iconTemplate=l.first),p(l=b())&&(n.contentTemplate=l.first),p(l=b())&&(n.templates=l)}},hostVars:2,hostBindings:function(o,n){o&2&&w(n.hostClass)},inputs:{onLabel:"onLabel",offLabel:"offLabel",onIcon:"onIcon",offIcon:"offIcon",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",disabled:[2,"disabled","disabled",u],style:"style",styleClass:"styleClass",inputId:"inputId",tabindex:[2,"tabindex","tabindex",I],size:"size",iconPos:"iconPos",autofocus:[2,"autofocus","autofocus",u],allowEmpty:"allowEmpty"},outputs:{onChange:"onChange"},features:[S([Lt,ut]),O],decls:4,vars:15,consts:[["pRipple","","type","button",3,"click","ngClass","tabindex","disabled"],[3,"ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","ngClass"]],template:function(o,n){o&1&&(_(0,"button",0),M("click",function(l){return n.toggle(l)}),_(1,"span",1),c(2,_t,1,0,"ng-container",2)(3,kt,4,4),T()()),o&2&&(w(n.styleClass),r("ngClass",n.cx("root"))("tabindex",n.tabindex)("disabled",n.disabled),m("aria-labelledby",n.ariaLabelledBy)("aria-pressed",n.checked)("data-p-checked",n.active)("data-p-disabled",n.disabled),g(),r("ngClass",n.cx("content")),g(),r("ngTemplateOutlet",n.contentTemplate||n._contentTemplate)("ngTemplateOutletContext",q(13,gt,n.checked)),g(),y(n.contentTemplate?-1:3))},dependencies:[at,V,lt,D,C],encapsulation:2,changeDetection:0})}return t})();var Et=["item"],Ot=(t,a)=>({$implicit:t,index:a});function wt(t,a){t&1&&x(0)}function Mt(t,a){if(t&1&&c(0,wt,1,0,"ng-container",3),t&2){let e=s(2),o=e.$implicit,n=e.$index,i=s();r("ngTemplateOutlet",i.itemTemplate||i._itemTemplate)("ngTemplateOutletContext",F(2,Ot,o,n))}}function St(t,a){t&1&&c(0,Mt,1,5,"ng-template",null,0,it)}function Ft(t,a){if(t&1){let e=et();_(0,"p-toggleButton",2),M("onChange",function(n){let i=G(e),l=i.$implicit,f=i.$index,j=s();return H(j.onOptionSelect(n,l,f))}),c(1,St,2,0),T()}if(t&2){let e=a.$implicit,o=s();r("autofocus",o.autofocus)("styleClass",o.styleClass)("ngModel",o.isSelected(e))("onLabel",o.getOptionLabel(e))("offLabel",o.getOptionLabel(e))("disabled",o.disabled||o.isOptionDisabled(e))("allowEmpty",o.allowEmpty)("size",o.size),g(),y(o.itemTemplate||o._itemTemplate?1:-1)}}var It=({dt:t})=>`
.p-selectbutton {
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    outline-color: transparent;
    border-radius: ${t("selectbutton.border.radius")};
}

.p-selectbutton .p-togglebutton {
    border-radius: 0;
    border-width: 1px 1px 1px 0;
}

.p-selectbutton .p-togglebutton:focus-visible {
    position: relative;
    z-index: 1;
}

.p-selectbutton p-togglebutton:first-child .p-togglebutton {
    border-left-width: 1px;
    border-start-start-radius: ${t("selectbutton.border.radius")};
    border-end-start-radius: ${t("selectbutton.border.radius")};
}

.p-selectbutton p-togglebutton:last-child .p-togglebutton{
    border-start-end-radius: ${t("selectbutton.border.radius")};
    border-end-end-radius: ${t("selectbutton.border.radius")};
}

.p-selectbutton.ng-invalid.ng-dirty {
    outline: 1px solid ${t("selectbutton.invalid.border.color")};
    outline-offset: 0;
}
`,Dt={root:({props:t})=>["p-selectbutton p-component",{"p-invalid":t.invalid}]},dt=(()=>{class t extends N{name="selectbutton";theme=It;classes=Dt;static \u0275fac=(()=>{let e;return function(n){return(e||(e=h(t)))(n||t)}})();static \u0275prov=B({token:t,factory:t.\u0275fac})}return t})();var Vt={provide:R,useExisting:$(()=>pt),multi:!0},pt=(()=>{class t extends Q{options;optionLabel;optionValue;optionDisabled;unselectable=!1;tabindex=0;multiple;allowEmpty=!0;style;styleClass;ariaLabelledBy;size;disabled;dataKey;autofocus;onOptionClick=new v;onChange=new v;itemTemplate;_itemTemplate;get equalityKey(){return this.optionValue?null:this.dataKey}value;onModelChange=()=>{};onModelTouched=()=>{};focusedIndex=0;_componentStyle=L(dt);getOptionLabel(e){return this.optionLabel?A(e,this.optionLabel):e.label!=null?e.label:e}getOptionValue(e){return this.optionValue?A(e,this.optionValue):this.optionLabel||e.value===void 0?e:e.value}isOptionDisabled(e){return this.optionDisabled?A(e,this.optionDisabled):e.disabled!==void 0?e.disabled:!1}writeValue(e){this.value=e,this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}onOptionSelect(e,o,n){if(this.disabled||this.isOptionDisabled(o))return;let i=this.isSelected(o);if(i&&this.unselectable)return;let l=this.getOptionValue(o),f;if(this.multiple)i?f=this.value.filter(j=>!k(j,l,this.equalityKey)):f=this.value?[...this.value,l]:[l];else{if(i&&!this.allowEmpty)return;f=i?null:l}this.focusedIndex=n,this.value=f,this.onModelChange(this.value),this.onChange.emit({originalEvent:e,value:this.value}),this.onOptionClick.emit({originalEvent:e,option:o,index:n})}changeTabIndexes(e,o){let n,i;for(let l=0;l<=this.el.nativeElement.children.length-1;l++)this.el.nativeElement.children[l].getAttribute("tabindex")==="0"&&(n={elem:this.el.nativeElement.children[l],index:l});o==="prev"?n.index===0?i=this.el.nativeElement.children.length-1:i=n.index-1:n.index===this.el.nativeElement.children.length-1?i=0:i=n.index+1,this.focusedIndex=i,this.el.nativeElement.children[i].focus()}onFocus(e,o){this.focusedIndex=o}onBlur(){this.onModelTouched()}removeOption(e){this.value=this.value.filter(o=>!k(o,this.getOptionValue(e),this.dataKey))}isSelected(e){let o=!1,n=this.getOptionValue(e);if(this.multiple){if(this.value&&Array.isArray(this.value)){for(let i of this.value)if(k(i,n,this.dataKey)){o=!0;break}}}else o=k(this.getOptionValue(e),this.value,this.equalityKey);return o}templates;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"item":this._itemTemplate=e.template;break}})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=h(t)))(n||t)}})();static \u0275cmp=E({type:t,selectors:[["p-selectButton"],["p-selectbutton"],["p-select-button"]],contentQueries:function(o,n,i){if(o&1&&(d(i,Et,4),d(i,z,4)),o&2){let l;p(l=b())&&(n.itemTemplate=l.first),p(l=b())&&(n.templates=l)}},hostVars:10,hostBindings:function(o,n){o&2&&(m("role","group")("aria-labelledby",n.ariaLabelledBy)("data-pc-section","root")("data-pc-name","selectbutton"),J(n.style),Y("p-selectbutton",!0)("p-component",!0))},inputs:{options:"options",optionLabel:"optionLabel",optionValue:"optionValue",optionDisabled:"optionDisabled",unselectable:[2,"unselectable","unselectable",u],tabindex:[2,"tabindex","tabindex",I],multiple:[2,"multiple","multiple",u],allowEmpty:[2,"allowEmpty","allowEmpty",u],style:"style",styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy",size:"size",disabled:[2,"disabled","disabled",u],dataKey:"dataKey",autofocus:[2,"autofocus","autofocus",u]},outputs:{onOptionClick:"onOptionClick",onChange:"onChange"},features:[S([Vt,dt]),O],decls:2,vars:0,consts:[["content",""],[3,"autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size"],[3,"onChange","autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(o,n){o&1&&X(0,Ft,2,9,"p-toggleButton",1,W),o&2&&Z(n.options)},dependencies:[U,ct,rt,st,V,D,C],encapsulation:2,changeDetection:0})}return t})(),ye=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=K({type:t});static \u0275inj=P({imports:[pt,C,C]})}return t})();export{pt as a,ye as b};
