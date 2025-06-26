import{a as W,c as X}from"./chunk-2KNLETZP.js";import{a as K}from"./chunk-XJXXPTEI.js";import{b as q}from"./chunk-7VMZG5J7.js";import"./chunk-MYQCYOKD.js";import"./chunk-TJYO3A7R.js";import{Ka as U,La as H,Va as O,Xa as G,ma as V,p as R,sa as P}from"./chunk-O3H3I6RT.js";import"./chunk-S35HUXPS.js";import{k as A,m as F,r as N}from"./chunk-AVOZNQAF.js";import{$a as h,Aa as m,Db as L,Eb as j,La as g,M as _,Mb as y,Oa as $,Pa as f,S as w,Wa as x,Xa as c,Y as E,Z as I,Za as S,_a as u,aa as d,eb as r,fb as i,ga as C,gb as n,kb as M,lb as k,mb as l,nb as B,ob as D,vb as b,wa as z,wb as s,xb as T}from"./chunk-44MJFOUP.js";import"./chunk-UVUYC35V.js";var ee=["*"];function te(e,p){if(e&1&&(r(0,"span",3),s(1),i()),e&2){let t=l();m(),T(t.label)}}function ae(e,p){if(e&1&&n(0,"span",5),e&2){let t=l(2);h(t.icon),c("ngClass","p-avatar-icon")}}function ie(e,p){if(e&1&&f(0,ae,1,3,"span",4),e&2){let t=l(),o=b(5);c("ngIf",t.icon)("ngIfElse",o)}}function re(e,p){if(e&1){let t=M();r(0,"img",7),k("error",function(a){E(t);let v=l(2);return I(v.imageError(a))}),i()}if(e&2){let t=l(2);c("src",t.image,z),x("aria-label",t.ariaLabel)}}function ne(e,p){if(e&1&&f(0,re,1,2,"img",6),e&2){let t=l();c("ngIf",t.image)}}var oe=({dt:e})=>`
.p-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${e("avatar.width")};
    height: ${e("avatar.height")};
    font-size: ${e("avatar.font.size")};
    color: ${e("avatar.color")};
    background: ${e("avatar.background")};
    border-radius: ${e("avatar.border.radius")};
}

.p-avatar-image {
    background: transparent;
}

.p-avatar-circle {
    border-radius: 50%;
}

.p-avatar-circle img {
    border-radius: 50%;
}

.p-avatar-icon {
    font-size: ${e("avatar.icon.size")};
    width: ${e("avatar.icon.size")};
    height: ${e("avatar.icon.size")};
}

.p-avatar img {
    width: 100%;
    height: 100%;
}

.p-avatar-lg {
    width: ${e("avatar.lg.width")};
    height: ${e("avatar.lg.width")};
    font-size: ${e("avatar.lg.font.size")};
}

.p-avatar-lg .p-avatar-icon {
    font-size: ${e("avatar.lg.icon.size")};
    width: ${e("avatar.lg.icon.size")};
    height: ${e("avatar.lg.icon.size")};
}

.p-avatar-xl {
    width: ${e("avatar.xl.width")};
    height: ${e("avatar.xl.width")};
    font-size: ${e("avatar.xl.font.size")};
}

.p-avatar-xl .p-avatar-icon {
    font-size: ${e("avatar.xl.font.size")};
    width: ${e("avatar.xl.icon.size")};
    height: ${e("avatar.xl.icon.size")};
}

.p-avatar-group {
    display: flex;
    align-items: center;
}

.p-avatar-group .p-avatar + .p-avatar {
    margin-inline-start: ${e("avatar.group.offset")};
}

.p-avatar-group .p-avatar {
    border: 2px solid ${e("avatar.group.border.color")};
}

.p-avatar-group .p-avatar-lg + .p-avatar-lg {
    margin-inline-start: ${e("avatar.lg.group.offset")};
}

.p-avatar-group .p-avatar-xl + .p-avatar-xl {
    margin-inline-start: ${e("avatar.xl.group.offset")};
}
`,le={root:({props:e})=>["p-avatar p-component",{"p-avatar-image":e.image!=null,"p-avatar-circle":e.shape==="circle","p-avatar-lg":e.size==="large","p-avatar-xl":e.size==="xlarge"}],label:"p-avatar-label",icon:"p-avatar-icon"},J=(()=>{class e extends P{name="avatar";theme=oe;classes=le;static \u0275fac=(()=>{let t;return function(a){return(t||(t=d(e)))(a||e)}})();static \u0275prov=_({token:e,factory:e.\u0275fac})}return e})();var Q=(()=>{class e extends U{label;icon;image;size="normal";shape="square";style;styleClass;ariaLabel;ariaLabelledBy;onImageError=new C;_componentStyle=w(J);imageError(t){this.onImageError.emit(t)}get hostClass(){return this.styleClass}static \u0275fac=(()=>{let t;return function(a){return(t||(t=d(e)))(a||e)}})();static \u0275cmp=g({type:e,selectors:[["p-avatar"]],hostVars:19,hostBindings:function(o,a){o&2&&(x("data-pc-name","avatar")("aria-label",a.ariaLabel)("aria-labelledby",a.ariaLabelledBy),u(a.style),h(a.hostClass),S("p-avatar",!0)("p-component",!0)("p-avatar-circle",a.shape==="circle")("p-avatar-lg",a.size==="large")("p-avatar-xl",a.size==="xlarge")("p-avatar-image",a.image!=null))},inputs:{label:"label",icon:"icon",image:"image",size:"size",shape:"shape",style:"style",styleClass:"styleClass",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onImageError:"onImageError"},features:[L([J]),$],ngContentSelectors:ee,decls:6,vars:2,consts:[["iconTemplate",""],["imageTemplate",""],["class","p-avatar-text",4,"ngIf","ngIfElse"],[1,"p-avatar-text"],[3,"class","ngClass",4,"ngIf","ngIfElse"],[3,"ngClass"],[3,"src","error",4,"ngIf"],[3,"error","src"]],template:function(o,a){if(o&1&&(B(),D(0),f(1,te,2,1,"span",2)(2,ie,1,2,"ng-template",null,0,y)(4,ne,1,1,"ng-template",null,1,y)),o&2){let v=b(3);m(),c("ngIf",a.label)("ngIfElse",v)}},dependencies:[N,A,F,V],encapsulation:2,changeDetection:0})}return e})();var se=()=>({backgroundImage:"url(/images/pages/accessDenied-bg.jpg)"}),Y=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=g({type:e,selectors:[["app-lockscreen"]],decls:32,vars:3,consts:[[1,"h-screen","flex","w-full","bg-surface-50","dark:bg-surface-950"],[1,"flex","flex-1","flex-col","bg-surface-50","dark:bg-surface-950","items-center","justify-center"],[1,"w-11/12","sm:w-[30rem]"],[1,"flex","flex-col"],[1,"bg-primary","rounded-full","flex","items-center","justify-center",2,"height","56px","width","56px"],[1,"pi","pi-lock","text-surface-0","dark:text-surface-900","!text-4xl"],[1,"mt-6"],[1,"m-0","text-primary","font-semibold","text-4xl"],[1,"block","text-surface-700","dark:text-surface-100","mt-2"],[1,"flex","flex-col","gap-4","mt-12"],[1,"flex","justify-between","items-center"],[1,"flex","gap-4","items-center"],["image","/images/avatar/annafali.png","shape","circle","size","large"],[1,"flex","flex-col","gap-1"],[1,"text-color","font-semibold","text-lg"],[1,"text-muted-color","text-sm"],["pButton","","pRipple","","text","","icon","pi pi-sign-out","label","Log out",1,"text-primary-500"],[1,"pi","pi-key"],["pInputText","","id","password2","type","password","placeholder","Password"],["pButton","","pRipple","","label","UNLOCK",1,"w-full"],["pButton","","pRipple","","text","","label","SWITCH ACCOUNT",1,"w-full","text-primary-500"],[1,"hidden","lg:flex","flex-1","items-center","justify-center","bg-cover"],["src","/layout/images/logo/vector_logo.png","alt",""],["simple",""]],template:function(t,o){t&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),n(5,"i",5),i(),r(6,"div",6)(7,"span",7),s(8,"Lock Screen"),i(),r(9,"span",8),s(10,"Enter your password"),i()()(),r(11,"div",9)(12,"div",10)(13,"div",11),n(14,"p-avatar",12),r(15,"div",13)(16,"span",14),s(17,"Amy Elsner"),i(),r(18,"span",15),s(19,"UX Designer"),i()()(),n(20,"button",16),i(),r(21,"p-input-group")(22,"p-inputgroup-addon"),n(23,"i",17),i(),n(24,"input",18),i(),r(25,"p-input-group"),n(26,"button",19),i(),r(27,"p-input-group"),n(28,"button",20),i()()()(),r(29,"div",21),n(30,"img",22),i()(),n(31,"app-configurator",23)),t&2&&(m(29),u(j(2,se)))},dependencies:[G,O,H,R,q,Q,W,X,K],encapsulation:2})};export{Y as LockScreen};
