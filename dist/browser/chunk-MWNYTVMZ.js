import{a as Ue}from"./chunk-X5NJKZPB.js";import{a as Qe}from"./chunk-L3WCINKZ.js";import{a as Ge,b as He}from"./chunk-NFJL44DQ.js";import{b as ee}from"./chunk-YUKE4YFX.js";import{a as Ne}from"./chunk-UAF4RMYB.js";import{Aa as ze,Ba as U,Ca as we,Ea as K,F as Le,La as ce,Qa as We,Sa as de,Va as Re,Wa as je,Ya as qe,ba as Pe,bb as Ze,m as De,ta as se,u as ye,ua as M,v as Ae,x as Be,za as Oe}from"./chunk-Y7WV5QTW.js";import{c as $e,d as he,f as ge,h as fe,i as be,k as _e}from"./chunk-S35HUXPS.js";import{$,$a as h,Ab as Se,Bb as Te,Cb as F,Db as B,Eb as _,Fb as y,Ib as Me,Jb as g,K as te,Ka as s,Kb as Ee,L as z,M as R,Nb as x,Ob as S,Pb as T,Qb as Z,R as v,Sb as k,Tb as Ie,Wa as D,Wb as Ve,X as u,Xa as j,Xb as Fe,Y as p,Za as q,_b as re,ba as xe,cc as f,dc as G,ec as Y,fa as V,gb as b,hb as c,kb as N,lb as Q,mb as ie,ob as me,pb as J,qb as X,rb as a,sb as l,sc as L,tb as A,ub as oe,uc as ae,vb as ne,wb as W,xb as C,xc as H,yb as w,yc as le,zb as d,zc as P}from"./chunk-3PM7GAU5.js";import{a as E,b as I}from"./chunk-UVUYC35V.js";var lt=["header"],st=["footer"],ct=["content"],dt=["closeicon"],ut=["headless"],pt=["maskRef"],mt=["container"],ht=["closeButton"],gt=["*"],ft=(e,r,t,o,i,n)=>({"p-drawer":!0,"p-drawer-active":e,"p-drawer-left":r,"p-drawer-right":t,"p-drawer-top":o,"p-drawer-bottom":i,"p-drawer-full":n}),bt=(e,r)=>({transform:e,transition:r}),_t=e=>({value:"visible",params:e});function yt(e,r){e&1&&W(0)}function wt(e,r){if(e&1&&h(0,yt,1,0,"ng-container",4),e&2){let t=d(2);c("ngTemplateOutlet",t.headlessTemplate||t._headlessTemplate)}}function Ct(e,r){e&1&&W(0)}function vt(e,r){if(e&1&&(a(0,"div"),g(1),l()),e&2){let t=d(3);Q(t.cx("title")),s(),Ee(t.header)}}function kt(e,r){e&1&&A(0,"TimesIcon"),e&2&&b("data-pc-section","closeicon")}function xt(e,r){}function St(e,r){e&1&&h(0,xt,0,0,"ng-template")}function Tt(e,r){if(e&1&&h(0,kt,1,1,"TimesIcon",8)(1,St,1,0,null,4),e&2){let t=d(4);c("ngIf",!t.closeIconTemplate&&!t._closeIconTemplate),s(),c("ngTemplateOutlet",t.closeIconTemplate||t._closeIconTemplate)}}function Mt(e,r){if(e&1){let t=C();a(0,"p-button",9),w("onClick",function(i){u(t);let n=d(3);return p(n.close(i))})("keydown.enter",function(i){u(t);let n=d(3);return p(n.close(i))}),h(1,Tt,2,2,"ng-template",null,1,re),l()}if(e&2){let t=d(3);c("ngClass",t.cx("closeButton"))("buttonProps",t.closeButtonProps)("ariaLabel",t.ariaCloseLabel),b("data-pc-section","closebutton")("data-pc-group-section","iconcontainer")}}function Et(e,r){e&1&&W(0)}function It(e,r){e&1&&W(0)}function Vt(e,r){if(e&1&&(oe(0),a(1,"div",5),h(2,It,1,0,"ng-container",4),l(),ne()),e&2){let t=d(3);s(),c("ngClass",t.cx("footer")),b("data-pc-section","footer"),s(),c("ngTemplateOutlet",t.footerTemplate||t._footerTemplate)}}function Ft(e,r){if(e&1&&(a(0,"div",5),h(1,Ct,1,0,"ng-container",4)(2,vt,2,3,"div",6)(3,Mt,3,5,"p-button",7),l(),a(4,"div",5),Te(5),h(6,Et,1,0,"ng-container",4),l(),h(7,Vt,3,3,"ng-container",8)),e&2){let t=d(2);c("ngClass",t.cx("header")),b("data-pc-section","header"),s(),c("ngTemplateOutlet",t.headerTemplate||t._headerTemplate),s(),c("ngIf",t.header),s(),c("ngIf",t.showCloseIcon&&t.closable),s(),c("ngClass",t.cx("content")),b("data-pc-section","content"),s(2),c("ngTemplateOutlet",t.contentTemplate||t._contentTemplate),s(),c("ngIf",t.footerTemplate||t._footerTemplate)}}function $t(e,r){if(e&1){let t=C();a(0,"div",3,0),w("@panelState.start",function(i){u(t);let n=d();return p(n.onAnimationStart(i))})("@panelState.done",function(i){u(t);let n=d();return p(n.onAnimationEnd(i))})("keydown",function(i){u(t);let n=d();return p(n.onKeyDown(i))}),h(2,wt,1,1,"ng-container")(3,Ft,8,9),l()}if(e&2){let t=d();N(t.style),Q(t.styleClass),c("ngClass",Fe(9,ft,t.visible,t.position==="left"&&!t.fullScreen,t.position==="right"&&!t.fullScreen,t.position==="top"&&!t.fullScreen,t.position==="bottom"&&!t.fullScreen,t.fullScreen||t.position==="full"))("@panelState",k(19,_t,Ie(16,bt,t.transformOptions,t.transitionOptions))),b("data-pc-name","sidebar")("data-pc-section","root"),s(2),ie(t.headlessTemplate||t._headlessTemplate?2:3)}}var Dt=({dt:e})=>`
.p-drawer {
    display: flex;
    flex-direction: column;
    pointer-events: auto;
    transform: translate3d(0px, 0px, 0px);
    position: fixed;
    transition: transform 0.3s;
    background: ${e("drawer.background")};
    color: ${e("drawer.color")};
    border: 1px solid ${e("drawer.border.color")};
    box-shadow: ${e("drawer.shadow")};
}

.p-drawer-content {
    overflow-y: auto;
    flex-grow: 1;
    padding: ${e("drawer.content.padding")};
}

.p-drawer-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    padding: ${e("drawer.header.padding")};
}

.p-drawer-footer {
    padding: ${e("drawer.header.padding")};
}

.p-drawer-title {
    font-weight: ${e("drawer.title.font.weight")};
    font-size: ${e("drawer.title.font.size")};
}

.p-drawer-full .p-drawer {
    transition: none;
    transform: none;
    width: 100vw !important;
    height: 100vh !important;
    max-height: 100%;
    top: 0px !important;
    left: 0px !important;
    border-width: 1px;
}

.p-drawer-left .p-drawer {
    align-self: start;
    width: 20rem;
    height: 100%;
    border-right-width: 1px;
}

.p-drawer-right .p-drawer {
    align-self: end;
    width: 20rem;
    height: 100%;
    border-left-width: 1px;
}

.p-drawer-top .p-drawer {
    height: 10rem;
    width: 100%;
    border-bottom-width: 1px;
}

.p-drawer-bottom .p-drawer {
    height: 10rem;
    width: 100%;
    border-top-width: 1px;
}

.p-drawer-left .p-drawer-content,
.p-drawer-right .p-drawer-content,
.p-drawer-top .p-drawer-content,
.p-drawer-bottom .p-drawer-content {
    width: 100%;
    height: 100%;
}

.p-drawer-open {
    display: flex;
}

.p-drawer-top {
    justify-content: flex-start;
}

.p-drawer-bottom {
    justify-content: flex-end;
}

.p-drawer {
    position: fixed;
    transition: transform 0.3s;
    display: flex;
    flex-direction: column;
}

.p-drawer-content {
    position: relative;
    overflow-y: auto;
    flex-grow: 1;
}

.p-drawer-header {
    display: flex;
    align-items: center;
}

.p-drawer-footer {
    margin-top: auto;
}

.p-drawer-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
}

.p-drawer-left {
    top: 0;
    left: 0;
    width: 20rem;
    height: 100%;
}

.p-drawer-right {
    top: 0;
    right: 0;
    width: 20rem;
    height: 100%;
}

.p-drawer-top {
    top: 0;
    left: 0;
    width: 100%;
    height: 10rem;
}

.p-drawer-bottom {
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10rem;
}

.p-drawer-full {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    -webkit-transition: none;
    transition: none;
}

.p-drawer-mask {
    background-color: rgba(0, 0, 0, 0.4);
    transition-duration: 0.2s;
}

.p-overlay-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask:dir(rtl) {
    flex-direction: row-reverse;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation 150ms forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation 150ms forwards;
}

@keyframes p-overlay-mask-enter-animation {
    from {
        background-color: transparent;
    }
    to {
        background-color: rgba(0, 0, 0, 0.4);
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background-color: rgba(0, 0, 0, 0.4);
    }
    to {
        background-color: transparent;
    }
}
`,At={mask:({instance:e})=>({position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",flexDirection:"column",alignItems:e.position==="top"?"flex-start":e.position==="bottom"?"flex-end":"center"})},Bt={mask:({instance:e})=>({"p-drawer-mask":!0,"p-overlay-mask p-overlay-mask-enter":e.modal,"p-drawer-open":e.containerVisible,"p-drawer-full":e.fullScreen,[`p-drawer-${e.position}`]:!!e.position}),root:({instance:e})=>({"p-drawer p-component":!0,"p-drawer-full":e.fullScreen}),header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},Ke=(()=>{class e extends U{name="drawer";theme=Dt;classes=Bt;inlineStyles=At;static \u0275fac=(()=>{let t;return function(i){return(t||(t=$(e)))(i||e)}})();static \u0275prov=z({token:e,factory:e.\u0275fac})}return e})();var Lt=be([ge({transform:"{{transform}}",opacity:0}),he("{{transition}}")]),Pt=be([he("{{transition}}",ge({transform:"{{transform}}",opacity:0}))]),ke=(()=>{class e extends K{appendTo="body";blockScroll=!1;style;styleClass;ariaCloseLabel;autoZIndex=!0;baseZIndex=0;modal=!0;closeButtonProps={severity:"secondary",text:!0,rounded:!0};dismissible=!0;showCloseIcon=!0;closeOnEscape=!0;transitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";get visible(){return this._visible}set visible(t){this._visible=t}get position(){return this._position}set position(t){if(this._position=t,t==="full"){this.transformOptions="none";return}switch(t){case"left":this.transformOptions="translate3d(-100%, 0px, 0px)";break;case"right":this.transformOptions="translate3d(100%, 0px, 0px)";break;case"bottom":this.transformOptions="translate3d(0px, 100%, 0px)";break;case"top":this.transformOptions="translate3d(0px, -100%, 0px)";break}}get fullScreen(){return this._fullScreen}set fullScreen(t){this._fullScreen=t,t&&(this.transformOptions="none")}header;maskStyle;closable=!0;onShow=new V;onHide=new V;visibleChange=new V;maskRef;containerViewChild;closeButtonViewChild;initialized;_visible;_position="left";_fullScreen=!1;container;transformOptions="translate3d(-100%, 0px, 0px)";mask;maskClickListener;documentEscapeListener;animationEndListener;_componentStyle=v(Ke);ngAfterViewInit(){super.ngAfterViewInit(),this.initialized=!0}headerTemplate;footerTemplate;contentTemplate;closeIconTemplate;headlessTemplate;_headerTemplate;_footerTemplate;_contentTemplate;_closeIconTemplate;_headlessTemplate;templates;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"header":this._headerTemplate=t.template;break;case"footer":this._footerTemplate=t.template;break;case"closeicon":this._closeIconTemplate=t.template;break;case"headless":this._headlessTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}onKeyDown(t){t.code==="Escape"&&this.hide(!1)}show(){this.autoZIndex&&ee.set("modal",this.container,this.baseZIndex||this.config.zIndex.modal),this.modal&&this.enableModality(),this.onShow.emit({}),this.visibleChange.emit(!0)}hide(t=!0){t&&this.onHide.emit({}),this.modal&&this.disableModality()}close(t){this.hide(),this.visibleChange.emit(!1),t.preventDefault()}enableModality(){let t=this.document.querySelectorAll(".p-drawer-active"),o=t.length,i=o==1?String(parseInt(this.container.style.zIndex)-1):String(parseInt(t[o-1].style.zIndex)-1);this.container.setAttribute(this.attrSelector,""),this.mask||(this.mask=this.renderer.createElement("div"),this.renderer.setStyle(this.mask,"zIndex",i),Pe(this.mask,"style",this.maskStyle),ye(this.mask,"p-overlay-mask p-drawer-mask p-overlay-mask-enter"),this.dismissible&&(this.maskClickListener=this.renderer.listen(this.mask,"click",n=>{this.dismissible&&this.close(n)})),this.renderer.appendChild(this.document.body,this.mask),this.blockScroll&&Ae())}disableModality(){this.mask&&(ye(this.mask,"p-overlay-mask-leave"),this.animationEndListener=this.renderer.listen(this.mask,"animationend",this.destroyModal.bind(this)))}destroyModal(){this.unbindMaskClickListener(),this.mask&&this.renderer.removeChild(this.document.body,this.mask),this.blockScroll&&Be(),this.unbindAnimationEndListener(),this.mask=null}onAnimationStart(t){switch(t.toState){case"visible":this.container=t.element,this.appendContainer(),this.show(),this.closeOnEscape&&this.bindDocumentEscapeListener();break}}onAnimationEnd(t){switch(t.toState){case"void":this.hide(!1),ee.clear(this.container),this.unbindGlobalListeners();break}}appendContainer(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.container):Le(this.appendTo,this.container))}bindDocumentEscapeListener(){let t=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentEscapeListener=this.renderer.listen(t,"keydown",o=>{o.which==27&&parseInt(this.container.style.zIndex)===ee.get(this.container)&&this.close(o)})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}unbindGlobalListeners(){this.unbindMaskClickListener(),this.unbindDocumentEscapeListener()}unbindAnimationEndListener(){this.animationEndListener&&this.mask&&(this.animationEndListener(),this.animationEndListener=null)}ngOnDestroy(){this.initialized=!1,this.visible&&this.modal&&this.destroyModal(),this.appendTo&&this.container&&this.renderer.appendChild(this.el.nativeElement,this.container),this.container&&this.autoZIndex&&ee.clear(this.container),this.container=null,this.unbindGlobalListeners(),this.unbindAnimationEndListener()}static \u0275fac=(()=>{let t;return function(i){return(t||(t=$(e)))(i||e)}})();static \u0275cmp=D({type:e,selectors:[["p-drawer"]],contentQueries:function(o,i,n){if(o&1&&(F(n,lt,4),F(n,st,4),F(n,ct,4),F(n,dt,4),F(n,ut,4),F(n,se,4)),o&2){let m;_(m=y())&&(i.headerTemplate=m.first),_(m=y())&&(i.footerTemplate=m.first),_(m=y())&&(i.contentTemplate=m.first),_(m=y())&&(i.closeIconTemplate=m.first),_(m=y())&&(i.headlessTemplate=m.first),_(m=y())&&(i.templates=m)}},viewQuery:function(o,i){if(o&1&&(B(pt,5),B(mt,5),B(ht,5)),o&2){let n;_(n=y())&&(i.maskRef=n.first),_(n=y())&&(i.containerViewChild=n.first),_(n=y())&&(i.closeButtonViewChild=n.first)}},inputs:{appendTo:"appendTo",blockScroll:[2,"blockScroll","blockScroll",f],style:"style",styleClass:"styleClass",ariaCloseLabel:"ariaCloseLabel",autoZIndex:[2,"autoZIndex","autoZIndex",f],baseZIndex:[2,"baseZIndex","baseZIndex",G],modal:[2,"modal","modal",f],closeButtonProps:"closeButtonProps",dismissible:[2,"dismissible","dismissible",f],showCloseIcon:[2,"showCloseIcon","showCloseIcon",f],closeOnEscape:[2,"closeOnEscape","closeOnEscape",f],transitionOptions:"transitionOptions",visible:"visible",position:"position",fullScreen:"fullScreen",header:"header",maskStyle:"maskStyle",closable:[2,"closable","closable",f]},outputs:{onShow:"onShow",onHide:"onHide",visibleChange:"visibleChange"},features:[Z([Ke]),q],ngContentSelectors:gt,decls:1,vars:1,consts:[["container",""],["icon",""],["role","complementary",3,"ngClass","style","class","keydown",4,"ngIf"],["role","complementary",3,"keydown","ngClass"],[4,"ngTemplateOutlet"],[3,"ngClass"],[3,"class",4,"ngIf"],[3,"ngClass","buttonProps","ariaLabel","onClick","keydown.enter",4,"ngIf"],[4,"ngIf"],[3,"onClick","keydown.enter","ngClass","buttonProps","ariaLabel"]],template:function(o,i){o&1&&(Se(),h(0,$t,4,21,"div",2)),o&2&&c("ngIf",i.visible)},dependencies:[P,L,ae,le,We,Ne,M],encapsulation:2,data:{animation:[$e("panelState",[fe("void => visible",[_e(Lt)]),fe("visible => void",[_e(Pt)])])]},changeDetection:0})}return e})(),Je=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=j({type:e});static \u0275inj=R({imports:[ke,M,M]})}return e})();var zt=["handle"],Nt=["input"],Qt=e=>({checked:e});function Wt(e,r){e&1&&W(0)}function Rt(e,r){if(e&1&&h(0,Wt,1,0,"ng-container",4),e&2){let t=d();c("ngTemplateOutlet",t.handleTemplate||t._handleTemplate)("ngTemplateOutletContext",k(2,Qt,t.checked()))}}var jt=({dt:e})=>`
.p-toggleswitch {
    display: inline-block;
    width: ${e("toggleswitch.width")};
    height: ${e("toggleswitch.height")};
}

.p-toggleswitch-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border-radius: ${e("toggleswitch.border.radius")};
}

.p-toggleswitch-slider {
    display: inline-block;
    cursor: pointer;
    width: 100%;
    height: 100%;
    border-width: ${e("toggleswitch.border.width")};
    border-style: solid;
    border-color: ${e("toggleswitch.border.color")};
    background: ${e("toggleswitch.background")};
    transition: background ${e("toggleswitch.transition.duration")}, color ${e("toggleswitch.transition.duration")}, border-color ${e("toggleswitch.transition.duration")}, outline-color ${e("toggleswitch.transition.duration")}, box-shadow ${e("toggleswitch.transition.duration")};
    border-radius: ${e("toggleswitch.border.radius")};
    outline-color: transparent;
    box-shadow: ${e("toggleswitch.shadow")};
}

.p-toggleswitch-handle {
    position: absolute;
    top: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${e("toggleswitch.handle.background")};
    color: ${e("toggleswitch.handle.color")};
    width: ${e("toggleswitch.handle.size")};
    height: ${e("toggleswitch.handle.size")};
    inset-inline-start: ${e("toggleswitch.gap")};
    margin-block-start: calc(-1 * calc(${e("toggleswitch.handle.size")} / 2));
    border-radius: ${e("toggleswitch.handle.border.radius")};
    transition: background ${e("toggleswitch.transition.duration")}, color ${e("toggleswitch.transition.duration")}, inset-inline-start ${e("toggleswitch.slide.duration")}, box-shadow ${e("toggleswitch.slide.duration")};
}

.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
    background: ${e("toggleswitch.checked.background")};
    border-color: ${e("toggleswitch.checked.border.color")};
}

.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-handle {
    background: ${e("toggleswitch.handle.checked.background")};
    color: ${e("toggleswitch.handle.checked.color")};
    inset-inline-start: calc(${e("toggleswitch.width")} - calc(${e("toggleswitch.handle.size")} + ${e("toggleswitch.gap")}));
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {
    background: ${e("toggleswitch.hover.background")};
    border-color: ${e("toggleswitch.hover.border.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
    background: ${e("toggleswitch.handle.hover.background")};
    color: ${e("toggleswitch.handle.hover.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {
    background: ${e("toggleswitch.checked.hover.background")};
    border-color: ${e("toggleswitch.checked.hover.border.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
    background: ${e("toggleswitch.handle.checked.hover.background")};
    color: ${e("toggleswitch.handle.checked.hover.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {
    box-shadow: ${e("toggleswitch.focus.ring.shadow")};
    outline: ${e("toggleswitch.focus.ring.width")} ${e("toggleswitch.focus.ring.style")} ${e("toggleswitch.focus.ring.color")};
    outline-offset: ${e("toggleswitch.focus.ring.offset")};
}

.p-toggleswitch.p-invalid > .p-toggleswitch-slider {
    border-color: ${e("toggleswitch.invalid.border.color")};
}

.p-toggleswitch.p-disabled {
    opacity: 1;
}

.p-toggleswitch.p-disabled .p-toggleswitch-slider {
    background: ${e("toggleswitch.disabled.background")};
}

.p-toggleswitch.p-disabled .p-toggleswitch-handle {
    background: ${e("toggleswitch.handle.disabled.background")};
}

/* For PrimeNG */

p-toggleswitch.ng-invalid.ng-dirty > .p-toggleswitch > .p-toggleswitch-slider {
    border-color: ${e("toggleswitch.invalid.border.color")};
}`,qt={root:{position:"relative"}},Zt={root:({instance:e})=>({"p-toggleswitch p-component":!0,"p-toggleswitch-checked":e.checked(),"p-disabled":e.disabled,"p-invalid":e.invalid}),input:"p-toggleswitch-input",slider:"p-toggleswitch-slider",handle:"p-toggleswitch-handle"},Xe=(()=>{class e extends U{name="toggleswitch";theme=jt;classes=Zt;inlineStyles=qt;static \u0275fac=(()=>{let t;return function(i){return(t||(t=$(e)))(i||e)}})();static \u0275prov=z({token:e,factory:e.\u0275fac})}return e})();var Gt={provide:de,useExisting:te(()=>Ye),multi:!0},Ye=(()=>{class e extends K{style;styleClass;tabindex;inputId;name;disabled;readonly;trueValue=!0;falseValue=!1;ariaLabel;ariaLabelledBy;autofocus;onChange=new V;input;handleTemplate;_handleTemplate;modelValue=!1;focused=!1;onModelChange=()=>{};onModelTouched=()=>{};_componentStyle=v(Xe);templates;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"handle":this._handleTemplate=t.template;break;default:this._handleTemplate=t.template;break}})}onClick(t){!this.disabled&&!this.readonly&&(this.modelValue=this.checked()?this.falseValue:this.trueValue,this.onModelChange(this.modelValue),this.onChange.emit({originalEvent:t,checked:this.modelValue}),this.input.nativeElement.focus())}onFocus(){this.focused=!0}onBlur(){this.focused=!1,this.onModelTouched()}writeValue(t){this.modelValue=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}checked(){return this.modelValue===this.trueValue}static \u0275fac=(()=>{let t;return function(i){return(t||(t=$(e)))(i||e)}})();static \u0275cmp=D({type:e,selectors:[["p-toggleswitch"],["p-toggleSwitch"],["p-toggle-switch"]],contentQueries:function(o,i,n){if(o&1&&(F(n,zt,4),F(n,se,4)),o&2){let m;_(m=y())&&(i.handleTemplate=m.first),_(m=y())&&(i.templates=m)}},viewQuery:function(o,i){if(o&1&&B(Nt,5),o&2){let n;_(n=y())&&(i.input=n.first)}},inputs:{style:"style",styleClass:"styleClass",tabindex:[2,"tabindex","tabindex",G],inputId:"inputId",name:"name",disabled:[2,"disabled","disabled",f],readonly:[2,"readonly","readonly",f],trueValue:"trueValue",falseValue:"falseValue",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",autofocus:[2,"autofocus","autofocus",f]},outputs:{onChange:"onChange"},features:[Z([Gt,Xe]),q],decls:6,vars:23,consts:[["input",""],[3,"click","ngClass","ngStyle"],["type","checkbox","role","switch",3,"focus","blur","ngClass","checked","disabled","pAutoFocus"],[3,"ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(o,i){if(o&1){let n=C();a(0,"div",1),w("click",function(O){return u(n),p(i.onClick(O))}),a(1,"input",2,0),w("focus",function(){return u(n),p(i.onFocus())})("blur",function(){return u(n),p(i.onBlur())}),l(),a(3,"span",3)(4,"div",3),h(5,Rt,1,4,"ng-container"),l()()()}o&2&&(N(i.sx("root")),Q(i.styleClass),c("ngClass",i.cx("root"))("ngStyle",i.style),b("data-pc-name","toggleswitch")("data-pc-section","root"),s(),c("ngClass",i.cx("input"))("checked",i.checked())("disabled",i.disabled)("pAutoFocus",i.autofocus),b("id",i.inputId)("aria-checked",i.checked())("aria-labelledby",i.ariaLabelledBy)("aria-label",i.ariaLabel)("name",i.name)("tabindex",i.tabindex)("data-pc-section","hiddenInput"),s(2),c("ngClass",i.cx("slider")),b("data-pc-section","slider"),s(),c("ngClass",i.cx("handle")),s(),ie(i.handleTemplate||i._handleTemplate?5:-1))},dependencies:[P,L,le,H,ce,M],encapsulation:2,changeDetection:0})}return e})(),et=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=j({type:e});static \u0275inj=R({imports:[Ye,M,M]})}return e})();var Ht=["input"],Ut=(e,r,t,o,i)=>({"p-radiobutton p-component":!0,"p-radiobutton-checked":e,"p-disabled":r,"p-variant-filled":t,"p-radiobutton-sm p-inputfield-sm":o,"p-radiobutton-lg p-inputfield-lg":i}),Kt=({dt:e})=>`
.p-radiobutton {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    width: ${e("radiobutton.width")};
    height: ${e("radiobutton.height")};
}

.p-radiobutton-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border: 1px solid transparent;
    border-radius: 50%;
}

.p-radiobutton-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid ${e("radiobutton.border.color")};
    background: ${e("radiobutton.background")};
    width: ${e("radiobutton.width")};
    height: ${e("radiobutton.height")};
    transition: background ${e("radiobutton.transition.duration")}, color ${e("radiobutton.transition.duration")}, border-color ${e("radiobutton.transition.duration")}, box-shadow ${e("radiobutton.transition.duration")}, outline-color ${e("radiobutton.transition.duration")};
    outline-color: transparent;
    box-shadow: ${e("radiobutton.shadow")};
}

.p-radiobutton-icon {
    transition-duration: ${e("radiobutton.transition.duration")};
    background: transparent;
    font-size: ${e("radiobutton.icon.size")};
    width: ${e("radiobutton.icon.size")};
    height: ${e("radiobutton.icon.size")};
    border-radius: 50%;
    backface-visibility: hidden;
    transform: translateZ(0) scale(0.1);
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
    border-color: ${e("radiobutton.hover.border.color")};
}

.p-radiobutton-checked .p-radiobutton-box {
    border-color: ${e("radiobutton.checked.border.color")};
    background: ${e("radiobutton.checked.background")};
}

.p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {
    background: ${e("radiobutton.icon.checked.color")};
    transform: translateZ(0) scale(1, 1);
    visibility: visible;
}

.p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
    border-color: ${e("radiobutton.checked.hover.border.color")};
    background: ${e("radiobutton.checked.hover.background")};
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {
    background: ${e("radiobutton.icon.checked.hover.color")};
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {
    border-color: ${e("radiobutton.focus.border.color")};
    box-shadow: ${e("radiobutton.focus.ring.shadow")};
    outline: ${e("radiobutton.focus.ring.width")} ${e("radiobutton.focus.ring.style")} ${e("radiobutton.focus.ring.color")};
    outline-offset: ${e("radiobutton.focus.ring.offset")};
}

.p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {
    border-color: ${e("radiobutton.checked.focus.border.color")};
}

p-radiobutton.ng-invalid.ng-dirty .p-radiobutton-box {
    border-color: ${e("radiobutton.invalid.border.color")};
}

.p-radiobutton.p-variant-filled .p-radiobutton-box {
    background: ${e("radiobutton.filled.background")};
}

.p-radiobutton.p-variant-filled.p-radiobutton-checked .p-radiobutton-box {
    background: ${e("radiobutton.checked.background")};
}

.p-radiobutton.p-variant-filled:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box {
    background: ${e("radiobutton.checked.hover.background")};
}

.p-radiobutton.p-disabled {
    opacity: 1;
}

.p-radiobutton.p-disabled .p-radiobutton-box {
    background: ${e("radiobutton.disabled.background")};
    border-color: ${e("radiobutton.checked.disabled.border.color")};
}

.p-radiobutton-checked.p-disabled .p-radiobutton-box .p-radiobutton-icon {
    background: ${e("radiobutton.icon.disabled.color")};
}

.p-radiobutton-sm,
.p-radiobutton-sm .p-radiobutton-box {
    width: ${e("radiobutton.sm.width")};
    height: ${e("radiobutton.sm.height")};
}

.p-radiobutton-sm .p-radiobutton-icon {
    font-size: ${e("radiobutton.icon.sm.size")};
    width: ${e("radiobutton.icon.sm.size")};
    height: ${e("radiobutton.icon.sm.size")};
}

.p-radiobutton-lg,
.p-radiobutton-lg .p-radiobutton-box {
    width: ${e("radiobutton.lg.width")};
    height: ${e("radiobutton.lg.height")};
}

.p-radiobutton-lg .p-radiobutton-icon {
    font-size: ${e("radiobutton.icon.lg.size")};
    width: ${e("radiobutton.icon.lg.size")};
    height: ${e("radiobutton.icon.lg.size")};
}
`,Jt={root:({instance:e,props:r})=>["p-radiobutton p-component",{"p-radiobutton-checked":e.checked,"p-disabled":r.disabled,"p-invalid":r.invalid,"p-variant-filled":r.variant?r.variant==="filled":e.config.inputStyle==="filled"||e.config.inputVariant==="filled"}],box:"p-radiobutton-box",input:"p-radiobutton-input",icon:"p-radiobutton-icon"},tt=(()=>{class e extends U{name="radiobutton";theme=Kt;classes=Jt;static \u0275fac=(()=>{let t;return function(i){return(t||(t=$(e)))(i||e)}})();static \u0275prov=z({token:e,factory:e.\u0275fac})}return e})();var Xt={provide:de,useExisting:te(()=>ue),multi:!0},Yt=(()=>{class e{accessors=[];add(t,o){this.accessors.push([t,o])}remove(t){this.accessors=this.accessors.filter(o=>o[1]!==t)}select(t){this.accessors.forEach(o=>{this.isSameGroup(o,t)&&o[1]!==t&&o[1].writeValue(t.value)})}isSameGroup(t,o){return t[0].control?t[0].control.root===o.control.control.root&&t[1].name===o.name:!1}static \u0275fac=function(o){return new(o||e)};static \u0275prov=z({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),ue=(()=>{class e extends K{value;formControlName;name;disabled;variant;size;tabindex;inputId;ariaLabelledBy;ariaLabel;style;styleClass;autofocus;binary;onClick=new V;onFocus=new V;onBlur=new V;inputViewChild;onModelChange=()=>{};onModelTouched=()=>{};checked;focused;control;_componentStyle=v(tt);injector=v(xe);registry=v(Yt);ngOnInit(){super.ngOnInit(),this.control=this.injector.get(Re),this.checkName(),this.registry.add(this.control,this)}onChange(t){this.disabled||this.select(t)}select(t){this.disabled||(this.checked=!0,this.onModelChange(this.value),this.registry.select(this),this.onClick.emit({originalEvent:t,value:this.value}))}writeValue(t){this.binary?this.checked=!!t:this.checked=t==this.value,this.inputViewChild&&this.inputViewChild.nativeElement&&(this.inputViewChild.nativeElement.checked=this.checked),this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}onInputFocus(t){this.focused=!0,this.onFocus.emit(t)}onInputBlur(t){this.focused=!1,this.onModelTouched(),this.onBlur.emit(t)}focus(){this.inputViewChild.nativeElement.focus()}ngOnDestroy(){this.registry.remove(this),super.ngOnDestroy()}checkName(){this.name&&this.formControlName&&this.name!==this.formControlName&&this.throwNameError(),!this.name&&this.formControlName&&(this.name=this.formControlName)}throwNameError(){throw new Error(`
          If you define both a name and a formControlName attribute on your radio button, their values
          must match. Ex: <p-radioButton formControlName="food" name="food"></p-radioButton>
        `)}static \u0275fac=(()=>{let t;return function(i){return(t||(t=$(e)))(i||e)}})();static \u0275cmp=D({type:e,selectors:[["p-radioButton"],["p-radiobutton"],["p-radio-button"]],viewQuery:function(o,i){if(o&1&&B(Ht,5),o&2){let n;_(n=y())&&(i.inputViewChild=n.first)}},inputs:{value:"value",formControlName:"formControlName",name:"name",disabled:[2,"disabled","disabled",f],variant:"variant",size:"size",tabindex:[2,"tabindex","tabindex",G],inputId:"inputId",ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",style:"style",styleClass:"styleClass",autofocus:[2,"autofocus","autofocus",f],binary:[2,"binary","binary",f]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[Z([Xt,tt]),q],decls:5,vars:24,consts:[["input",""],[3,"ngStyle","ngClass"],["type","radio",1,"p-radiobutton-input",3,"focus","blur","change","checked","disabled","value","pAutoFocus"],[1,"p-radiobutton-box"],[1,"p-radiobutton-icon"]],template:function(o,i){if(o&1){let n=C();a(0,"div",1)(1,"input",2,0),w("focus",function(O){return u(n),p(i.onInputFocus(O))})("blur",function(O){return u(n),p(i.onInputBlur(O))})("change",function(O){return u(n),p(i.onChange(O))}),l(),a(3,"div",3),A(4,"div",4),l()()}o&2&&(Q(i.styleClass),c("ngStyle",i.style)("ngClass",Ve(18,Ut,i.checked,i.disabled,i.variant==="filled"||i.config.inputStyle()==="filled"||i.config.inputVariant()==="filled",i.size==="small",i.size==="large")),b("data-pc-name","radiobutton")("data-pc-section","root"),s(),c("checked",i.checked)("disabled",i.disabled)("value",i.value)("pAutoFocus",i.autofocus),b("id",i.inputId)("name",i.name)("aria-labelledby",i.ariaLabelledBy)("aria-label",i.ariaLabel)("tabindex",i.tabindex)("aria-checked",i.checked),s(2),b("data-pc-section","input"),s(),b("data-pc-section","icon"))},dependencies:[P,L,H,ce,M],encapsulation:2,changeDetection:0})}return e})(),it=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=j({type:e});static \u0275inj=R({imports:[ue,M,M]})}return e})();var pe=e=>({"background-color":e}),rt=e=>({"outline-primary":e}),at=e=>({"text-white":e}),ot=(e,r)=>r.name;function ti(e,r){if(e&1){let t=C();a(0,"button",10),w("click",function(){u(t);let i=d();return p(i.toggleConfigSidebar())}),A(1,"i",11),l()}}function ii(e,r){if(e&1){let t=C();a(0,"button",12),w("click",function(i){let n=u(t).$implicit,m=d();return p(m.updateColors(i,"primary",n))}),l()}if(e&2){let t=r.$implicit,o=d();N(k(4,pe,(t==null?null:t.name)==="noir"?"var(--text-color)":t==null||t.palette==null?null:t.palette[500])),c("title",t.name)("ngClass",k(6,rt,t.name===o.selectedPrimaryColor()))}}function oi(e,r){if(e&1){let t=C();a(0,"button",12),w("click",function(i){let n=u(t).$implicit,m=d();return p(m.updateColors(i,"surface",n))}),l()}if(e&2){let t=r.$implicit,o=d();N(k(4,pe,t==null||t.palette==null?null:t.palette[500])),c("title",t.name)("ngClass",k(6,rt,o.selectedSurface()?o.selectedSurface()===t.name:o.isDarkTheme()?t.name==="zinc":t.name==="slate"))}}function ni(e,r){e&1&&(a(0,"p"),g(1,"Menu themes are only available in light mode by design as large surfaces can emit too much brightness in dark mode."),l())}function ri(e,r){if(e&1&&A(0,"i",38),e&2){let t=d(4);c("ngClass",k(1,at,t.menuTheme!=="light"))}}function ai(e,r){if(e&1){let t=C();a(0,"button",36),w("click",function(){let i=u(t).$implicit,n=d(3);return p(n.changeMenuTheme(i.name))}),h(1,ri,1,3,"i",37),l()}if(e&2){let t=r.$implicit,o=d(3);c("ngStyle",k(2,pe,t.color)),s(),c("ngIf",o.menuTheme===t.name)}}function li(e,r){if(e&1&&(a(0,"div",5),J(1,ai,2,4,"button",35,me),l()),e&2){let t=d(2);s(),X(t.menuThemes)}}function si(e,r){if(e&1&&A(0,"i",38),e&2){let t=d(3);c("ngClass",k(1,at,t.topbarTheme!=="light"))}}function ci(e,r){if(e&1){let t=C();a(0,"button",36),w("click",function(){let i=u(t).$implicit,n=d(2);return p(n.changeTopbarTheme(i.name))}),h(1,si,1,3,"i",37),l()}if(e&2){let t=r.$implicit,o=d(2);c("ngStyle",k(2,pe,t.color)),s(),c("ngIf",o.topbarTheme===t.name)}}function di(e,r){if(e&1){let t=C();oe(0),a(1,"div",7)(2,"span",4),g(3,"Menu Type"),l(),a(4,"div",13)(5,"div",14)(6,"div",15)(7,"p-radio-button",16),T("ngModelChange",function(i){u(t);let n=d();return S(n.menuMode,i)||(n.menuMode=i),p(i)}),l(),a(8,"label",17),g(9,"Static"),l()(),a(10,"div",15)(11,"p-radio-button",18),T("ngModelChange",function(i){u(t);let n=d();return S(n.menuMode,i)||(n.menuMode=i),p(i)}),l(),a(12,"label",19),g(13,"Overlay"),l()()(),a(14,"div",14)(15,"div",15)(16,"p-radio-button",20),T("ngModelChange",function(i){u(t);let n=d();return S(n.menuMode,i)||(n.menuMode=i),p(i)}),l(),a(17,"label",21),g(18,"Slim"),l()(),a(19,"div",15)(20,"p-radio-button",22),T("ngModelChange",function(i){u(t);let n=d();return S(n.menuMode,i)||(n.menuMode=i),p(i)}),l(),a(21,"label",23),g(22,"Slim+"),l()()(),a(23,"div",14)(24,"div",15)(25,"p-radio-button",24),T("ngModelChange",function(i){u(t);let n=d();return S(n.menuMode,i)||(n.menuMode=i),p(i)}),l(),a(26,"label",25),g(27,"Reveal"),l()(),a(28,"div",15)(29,"p-radio-button",26),T("ngModelChange",function(i){u(t);let n=d();return S(n.menuMode,i)||(n.menuMode=i),p(i)}),l(),a(30,"label",27),g(31,"Drawer"),l()()(),a(32,"div",14)(33,"div",15)(34,"p-radio-button",28),T("ngModelChange",function(i){u(t);let n=d();return S(n.menuMode,i)||(n.menuMode=i),p(i)}),l(),a(35,"label",29),g(36,"Horizontal"),l()()()()(),a(37,"div",7)(38,"span",4),g(39,"Menu Profile"),l(),a(40,"div",13)(41,"div",14)(42,"div",15)(43,"p-radio-button",30),T("ngModelChange",function(i){u(t);let n=d();return S(n.menuProfilePosition,i)||(n.menuProfilePosition=i),p(i)}),l(),a(44,"label",31),g(45,"Start"),l()(),a(46,"div",15)(47,"p-radio-button",32),T("ngModelChange",function(i){u(t);let n=d();return S(n.menuProfilePosition,i)||(n.menuProfilePosition=i),p(i)}),l(),a(48,"label",33),g(49,"End"),l()()()()(),a(50,"div",7)(51,"span",4),g(52,"Menu Themes"),l(),h(53,ni,2,0,"p",34)(54,li,3,0,"ng-template",null,0,re),l(),a(56,"div",7)(57,"span",4),g(58,"Topbar Themes"),l(),a(59,"div",5),J(60,ci,2,4,"button",35,me),l()(),ne()}if(e&2){let t=Me(55),o=d();s(7),x("ngModel",o.menuMode),s(4),x("ngModel",o.menuMode),s(5),x("ngModel",o.menuMode),s(4),x("ngModel",o.menuMode),s(5),x("ngModel",o.menuMode),s(4),x("ngModel",o.menuMode),s(5),x("ngModel",o.menuMode),s(9),x("ngModel",o.menuProfilePosition),s(4),x("ngModel",o.menuProfilePosition),s(6),c("ngIf",o.isDarkTheme())("ngIfElse",t),s(7),X(o.topbarThemes)}}var nt=class e{simple=!1;router=v(De);config=v(we);layoutService=v(Qe);primeng=v(we);themeOptions=[{name:"Light",value:!1},{name:"Dark",value:!0}];menuThemes=[{name:"light",color:"#FDFEFF"},{name:"dark",color:"#434B54"},{name:"indigo",color:"#1A237E"},{name:"bluegrey",color:"#37474F"},{name:"brown",color:"#4E342E"},{name:"cyan",color:"#006064"},{name:"green",color:"#2E7D32"},{name:"deeppurple",color:"#4527A0"},{name:"deeporange",color:"#BF360C"},{name:"pink",color:"#880E4F"},{name:"purple",color:"#6A1B9A"},{name:"teal",color:"#00695C"}];topbarThemes=[{name:"lightblue",color:"#2E88FF"},{name:"dark",color:"#363636"},{name:"white",color:"#FDFEFF"},{name:"blue",color:"#1565C0"},{name:"deeppurple",color:"#4527A0"},{name:"purple",color:"#6A1B9A"},{name:"pink",color:"#AD1457"},{name:"cyan",color:"#0097A7"},{name:"teal",color:"#00796B"},{name:"green",color:"#43A047"},{name:"lightgreen",color:"#689F38"},{name:"lime",color:"#AFB42B"},{name:"yellow",color:"#FBC02D"},{name:"amber",color:"#FFA000"},{name:"orange",color:"#FB8C00"},{name:"deeporange",color:"#D84315"},{name:"brown",color:"#5D4037"},{name:"grey",color:"#616161"},{name:"bluegrey",color:"#546E7A"},{name:"indigo",color:"#3F51B5"}];surfaces=[{name:"slate",palette:{0:"#ffffff",50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a",950:"#020617"}},{name:"gray",palette:{0:"#ffffff",50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827",950:"#030712"}},{name:"zinc",palette:{0:"#ffffff",50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b",950:"#09090b"}},{name:"neutral",palette:{0:"#ffffff",50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717",950:"#0a0a0a"}},{name:"stone",palette:{0:"#ffffff",50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917",950:"#0c0a09"}},{name:"soho",palette:{0:"#ffffff",50:"#ececec",100:"#dedfdf",200:"#c4c4c6",300:"#adaeb0",400:"#97979b",500:"#7f8084",600:"#6a6b70",700:"#55565b",800:"#3f4046",900:"#2c2c34",950:"#16161d"}},{name:"viva",palette:{0:"#ffffff",50:"#f3f3f3",100:"#e7e7e8",200:"#cfd0d0",300:"#b7b8b9",400:"#9fa1a1",500:"#87898a",600:"#6e7173",700:"#565a5b",800:"#3e4244",900:"#262b2c",950:"#0e1315"}},{name:"ocean",palette:{0:"#ffffff",50:"#fbfcfc",100:"#F7F9F8",200:"#EFF3F2",300:"#DADEDD",400:"#B1B7B6",500:"#828787",600:"#5F7274",700:"#415B61",800:"#29444E",900:"#183240",950:"#0c1920"}}];selectedPrimaryColor=Y(()=>this.layoutService.layoutConfig().primary);get menuMode(){return this.layoutService.layoutConfig().menuMode}set menuMode(r){this.layoutService.layoutConfig.update(t=>I(E({},t),{menuMode:r}))}get menuTheme(){return this.layoutService.layoutConfig().menuTheme}set menuTheme(r){this.layoutService.layoutConfig.update(t=>I(E({},t),{menuTheme:r}))}get topbarTheme(){return this.layoutService.layoutConfig().topbarTheme}set topbarTheme(r){this.layoutService.layoutConfig.update(t=>I(E({},t),{topbarTheme:r}))}get menuProfilePosition(){return this.layoutService.layoutConfig().menuProfilePosition}set menuProfilePosition(r){this.layoutService.layoutConfig.update(t=>I(E({},t),{menuProfilePosition:r}))}get darkTheme(){return this.layoutService.layoutConfig().darkTheme}set darkTheme(r){this.layoutService.layoutConfig.update(t=>I(E({},t),{menuTheme:r?"dark":"light",darkTheme:r}))}get visible(){return this.layoutService.layoutState().configSidebarVisible}set visible(r){this.layoutService.layoutState.update(t=>I(E({},t),{configSidebarVisible:r}))}isDarkTheme=Y(()=>this.layoutService.layoutConfig().darkTheme);selectedSurface=Y(()=>this.layoutService.layoutConfig().surface);primaryColors=Y(()=>{let r=Ue.primitive,t=["emerald","green","lime","orange","amber","yellow","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","rose"],o=[{name:"noir",palette:{}}];return t.forEach(i=>{o.push({name:i,palette:r?.[i]})}),o});onLayoutThemeChange(r){this.layoutService.layoutConfig.update(t=>I(E({},t),{layoutTheme:r}))}getPresetExt(){let r=this.primaryColors().find(t=>t.name===this.selectedPrimaryColor())||{};return r.name==="noir"?{semantic:{primary:{50:"{surface.50}",100:"{surface.100}",200:"{surface.200}",300:"{surface.300}",400:"{surface.400}",500:"{surface.500}",600:"{surface.600}",700:"{surface.700}",800:"{surface.800}",900:"{surface.900}",950:"{surface.950}"},colorScheme:{light:{primary:{color:"{primary.950}",contrastColor:"#ffffff",hoverColor:"{primary.800}",activeColor:"{primary.700}"},highlight:{background:"{primary.950}",focusBackground:"{primary.700}",color:"#ffffff",focusColor:"#ffffff"}},dark:{primary:{color:"{primary.50}",contrastColor:"{primary.950}",hoverColor:"{primary.200}",activeColor:"{primary.300}"},highlight:{background:"{primary.50}",focusBackground:"{primary.300}",color:"{primary.950}",focusColor:"{primary.950}"}}}}}:{semantic:{primary:r.palette,colorScheme:{light:{primary:{color:"{primary.500}",contrastColor:"#ffffff",hoverColor:"{primary.600}",activeColor:"{primary.700}"},highlight:{background:"{primary.50}",focusBackground:"{primary.100}",color:"{primary.700}",focusColor:"{primary.800}"}},dark:{primary:{color:"{primary.400}",contrastColor:"{surface.900}",hoverColor:"{primary.300}",activeColor:"{primary.200}"},highlight:{background:"color-mix(in srgb, {primary.400}, transparent 84%)",focusBackground:"color-mix(in srgb, {primary.400}, transparent 76%)",color:"rgba(255,255,255,.87)",focusColor:"rgba(255,255,255,.87)"}}}}}}updateColors(r,t,o){t==="primary"?this.layoutService.layoutConfig.update(i=>I(E({},i),{primary:o.name})):t==="surface"&&this.layoutService.layoutConfig.update(i=>I(E({},i),{surface:o.name})),this.applyTheme(t,o),r.stopPropagation()}applyTheme(r,t){r==="primary"?Oe(this.getPresetExt()):r==="surface"&&ze(t.palette)}changeMenuTheme(r){this.menuTheme=r}changeTopbarTheme(r){this.topbarTheme=r}toggleConfigSidebar(){this.layoutService.layoutState.update(r=>I(E({},r),{configSidebarVisible:!r.configSidebarVisible}))}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=D({type:e,selectors:[["app-configurator"]],inputs:{simple:[2,"simple","simple",f]},decls:20,vars:7,consts:[["menu_theme_selector",""],["class","layout-config-button config-link","type","button",3,"click",4,"ngIf"],["position","right","styleClass","layout-config-sidebar w-80","header","Settings",3,"visibleChange","onHide","visible","transitionOptions"],[1,"flex","flex-col","gap-4"],[1,"text-lg","font-semibold"],[1,"pt-2","flex","gap-2","flex-wrap"],["type","button",1,"cursor-pointer","w-6","h-6","rounded-full","flex","flex-shrink-0","items-center","justify-center","p-0","outline-none","outline-offset-1",3,"title","ngClass","style"],[1,"flex","flex-col","gap-2"],["optionLabel","name","optionValue","value",3,"ngModelChange","ngModel","options","allowEmpty"],[4,"ngIf"],["type","button",1,"layout-config-button","config-link",3,"click"],[1,"pi","pi-cog"],["type","button",1,"cursor-pointer","w-6","h-6","rounded-full","flex","flex-shrink-0","items-center","justify-center","p-0","outline-none","outline-offset-1",3,"click","title","ngClass"],[1,"flex","flex-wrap","flex-col","gap-3"],[1,"flex"],[1,"flex","items-center","gap-2","w-1/2"],["name","menuMode","value","static",3,"ngModelChange","ngModel"],["for","static"],["name","menuMode","value","overlay",3,"ngModelChange","ngModel"],["for","overlay"],["name","menuMode","value","slim",3,"ngModelChange","ngModel"],["for","slim"],["name","menuMode","value","slim-plus","inputId","slim-plus",3,"ngModelChange","ngModel"],["for","slim-plus"],["name","menuMode","value","reveal",3,"ngModelChange","ngModel"],["for","reveal"],["name","menuMode","value","drawer","inputId","drawer",3,"ngModelChange","ngModel"],["for","drawer"],["name","menuMode","value","horizontal",3,"ngModelChange","ngModel"],["for","horizontal"],["name","menuProfilePosition","value","start",3,"ngModelChange","ngModel"],["for","start"],["name","menuProfilePosition","value","end",3,"ngModelChange","ngModel"],["for","end"],[4,"ngIf","ngIfElse"],["type","button",1,"cursor-pointer","w-6","h-6","rounded-full","flex","flex-shrink-0","items-center","justify-center","p-0","outline-none","outline-offset-1","shadow",3,"ngStyle"],["type","button",1,"cursor-pointer","w-6","h-6","rounded-full","flex","flex-shrink-0","items-center","justify-center","p-0","outline-none","outline-offset-1","shadow",3,"click","ngStyle"],["class","pi pi-check text-lg",3,"ngClass",4,"ngIf"],[1,"pi","pi-check","text-lg",3,"ngClass"]],template:function(t,o){t&1&&(h(0,ti,2,0,"button",1),a(1,"p-drawer",2),T("visibleChange",function(n){return S(o.visible,n)||(o.visible=n),n}),w("onHide",function(){return o.layoutService.hideConfigSidebar()}),a(2,"div",3)(3,"div")(4,"span",4),g(5,"Primary"),l(),a(6,"div",5),J(7,ii,1,8,"button",6,ot),l()(),a(9,"div")(10,"span",4),g(11,"Surface"),l(),a(12,"div",5),J(13,oi,1,8,"button",6,ot),l()(),a(15,"div",7)(16,"span",4),g(17,"Color Scheme"),l(),a(18,"p-selectbutton",8),T("ngModelChange",function(n){return S(o.darkTheme,n)||(o.darkTheme=n),n}),l()(),h(19,di,62,11,"ng-container",9),l()()),t&2&&(c("ngIf",o.simple),s(),x("visible",o.visible),c("transitionOptions",".3s cubic-bezier(0, 0, 0.2, 1)"),s(6),X(o.primaryColors()),s(6),X(o.surfaces),s(5),x("ngModel",o.darkTheme),c("options",o.themeOptions)("allowEmpty",!1),s(),c("ngIf",!o.simple))},dependencies:[P,L,ae,H,Ze,je,qe,He,Ge,Je,ke,et,it,ue],encapsulation:2})};export{nt as a};
