import{Ka as Z,Sa as J,aa as P,ja as V,ka as A,la as G,ma as I,sa as L}from"./chunk-O3H3I6RT.js";import{k as R,m as N,p as O,q as H,r as z}from"./chunk-AVOZNQAF.js";import{$a as b,Aa as i,Db as B,La as g,M as x,Ma as $,N as w,Oa as T,Pa as p,S as D,Wa as v,Xa as o,_ as E,aa as h,eb as c,fb as d,gb as j,hb as F,ib as M,jb as y,ma as k,mb as _,nb as q,ob as C,pb as s,rb as m,sb as f,wb as S,xb as Q}from"./chunk-44MJFOUP.js";var W=["header"],X=["title"],Y=["subtitle"],ee=["content"],te=["footer"],ne=["*",[["p-header"]],[["p-footer"]]],ae=["*","p-header","p-footer"];function ie(e,l){e&1&&y(0)}function re(e,l){if(e&1&&(c(0,"div",8),C(1,1),p(2,ie,1,0,"ng-container",6),d()),e&2){let t=_();i(2),o("ngTemplateOutlet",t.headerTemplate||t._headerTemplate)}}function oe(e,l){if(e&1&&(F(0),S(1),M()),e&2){let t=_(2);i(),Q(t.header)}}function le(e,l){e&1&&y(0)}function ce(e,l){if(e&1&&(c(0,"div",9),p(1,oe,2,1,"ng-container",10)(2,le,1,0,"ng-container",6),d()),e&2){let t=_();i(),o("ngIf",t.header&&!t._titleTemplate&&!t.titleTemplate),i(),o("ngTemplateOutlet",t.titleTemplate||t._titleTemplate)}}function pe(e,l){if(e&1&&(F(0),S(1),M()),e&2){let t=_(2);i(),Q(t.subheader)}}function de(e,l){e&1&&y(0)}function se(e,l){if(e&1&&(c(0,"div",11),p(1,pe,2,1,"ng-container",10)(2,de,1,0,"ng-container",6),d()),e&2){let t=_();i(),o("ngIf",t.subheader&&!t._subtitleTemplate&&!t.subtitleTemplate),i(),o("ngTemplateOutlet",t.subtitleTemplate||t._subtitleTemplate)}}function me(e,l){e&1&&y(0)}function fe(e,l){e&1&&y(0)}function ue(e,l){if(e&1&&(c(0,"div",12),C(1,2),p(2,fe,1,0,"ng-container",6),d()),e&2){let t=_();i(2),o("ngTemplateOutlet",t.footerTemplate||t._footerTemplate)}}var _e=({dt:e})=>`
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
`,ye={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},K=(()=>{class e extends L{name="card";theme=_e;classes=ye;static \u0275fac=(()=>{let t;return function(n){return(t||(t=h(e)))(n||e)}})();static \u0275prov=x({token:e,factory:e.\u0275fac})}return e})();var he=(()=>{class e extends Z{header;subheader;set style(t){P(this._style(),t)||this._style.set(t)}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=k(null);_componentStyle=D(K);getBlockableElement(){return this.el.nativeElement.children[0]}templates;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this._headerTemplate=t.template;break;case"title":this._titleTemplate=t.template;break;case"subtitle":this._subtitleTemplate=t.template;break;case"content":this._contentTemplate=t.template;break;case"footer":this._footerTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=h(e)))(n||e)}})();static \u0275cmp=g({type:e,selectors:[["p-card"]],contentQueries:function(r,n,u){if(r&1&&(s(u,V,5),s(u,A,5),s(u,W,4),s(u,X,4),s(u,Y,4),s(u,ee,4),s(u,te,4),s(u,G,4)),r&2){let a;m(a=f())&&(n.headerFacet=a.first),m(a=f())&&(n.footerFacet=a.first),m(a=f())&&(n.headerTemplate=a.first),m(a=f())&&(n.titleTemplate=a.first),m(a=f())&&(n.subtitleTemplate=a.first),m(a=f())&&(n.contentTemplate=a.first),m(a=f())&&(n.footerTemplate=a.first),m(a=f())&&(n.templates=a)}},inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},features:[B([K]),T],ngContentSelectors:ae,decls:9,vars:10,consts:[[3,"ngClass","ngStyle"],["class","p-card-header",4,"ngIf"],[1,"p-card-body"],["class","p-card-title",4,"ngIf"],["class","p-card-subtitle",4,"ngIf"],[1,"p-card-content"],[4,"ngTemplateOutlet"],["class","p-card-footer",4,"ngIf"],[1,"p-card-header"],[1,"p-card-title"],[4,"ngIf"],[1,"p-card-subtitle"],[1,"p-card-footer"]],template:function(r,n){r&1&&(q(ne),c(0,"div",0),p(1,re,3,1,"div",1),c(2,"div",2),p(3,ce,3,2,"div",3)(4,se,3,2,"div",4),c(5,"div",5),C(6),p(7,me,1,0,"ng-container",6),d(),p(8,ue,3,1,"div",7),d()()),r&2&&(b(n.styleClass),o("ngClass","p-card p-component")("ngStyle",n._style()),v("data-pc-name","card"),i(),o("ngIf",n.headerFacet||n.headerTemplate||n._headerTemplate),i(2),o("ngIf",n.header||n.titleTemplate||n._titleTemplate),i(),o("ngIf",n.subheader||n.subtitleTemplate||n._subtitleTemplate),i(3),o("ngTemplateOutlet",n.contentTemplate||n._contentTemplate),i(),o("ngIf",n.footerFacet||n.footerTemplate||n._footerTemplate))},dependencies:[z,R,N,H,O,I],encapsulation:2,changeDetection:0})}return e})(),$e=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=$({type:e});static \u0275inj=w({imports:[he,I,I]})}return e})();var Be=(()=>{class e extends J{static \u0275fac=(()=>{let t;return function(n){return(t||(t=h(e)))(n||e)}})();static \u0275cmp=g({type:e,selectors:[["MinusIcon"]],features:[T],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z","fill","currentColor"]],template:function(r,n){r&1&&(E(),c(0,"svg",0),j(1,"path",1),d()),r&2&&(b(n.getClassNames()),v("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role))},encapsulation:2})}return e})();export{Be as a,he as b,$e as c};
