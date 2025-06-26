import{b as et}from"./chunk-VQCCQFE4.js";import{c as D}from"./chunk-TJYO3A7R.js";import{A as l,C as z,E as K,G as B,Ka as v,O as a,Oa as tt,V as Q,b as U,fa as Y,ma as x,q as O,sa as g,v as J,w as q,x as X}from"./chunk-O3H3I6RT.js";import{r as $,t as G}from"./chunk-AVOZNQAF.js";import{$a as I,Ca as Z,Db as f,Fa as j,Ha as _,La as E,M as s,Ma as d,N as c,Na as W,Oa as u,R,S as h,Sb as L,Tb as m,X as N,Za as w,aa as r,f as k,g as C,ha as A,nb as M,ob as S,u as F}from"./chunk-44MJFOUP.js";import{a as y,h as T}from"./chunk-UVUYC35V.js";var it=class e{interval=6e4;elapsedMs=0;intervalSub;tickSub;refreshSubject=new k;refreshState$=this.refreshSubject.asObservable();message$=new C("");isMessageVisible$=new C(!1);setRefreshInterval(n,t){this.refreshSubject.next({isPaused:n,interval:t}),this.elapsedMs=0}start(n){this.elapsedMs=0,this.intervalSub?.unsubscribe(),this.tickSub?.unsubscribe(),this.intervalSub=F(this.interval).subscribe(()=>{n(),this.elapsedMs=0}),this.tickSub=F(1e3).subscribe(()=>{this.elapsedMs+=1e3;let t=this.interval-this.elapsedMs;this.message$.next(`Will be updated in ${Math.ceil(t/1e3)} s`),t<=5e3&&t>0?this.isMessageVisible$.next(!0):this.isMessageVisible$.next(!1)})}stop(){this.intervalSub?.unsubscribe(),this.tickSub?.unsubscribe(),this.isMessageVisible$.next(!1)}getElapsedSeconds(){return Math.floor(this.elapsedMs/1e3)}static \u0275fac=function(t){return new(t||e)};static \u0275prov=s({token:e,factory:e.\u0275fac,providedIn:"root"})};var b=et.ServidorGenerales,ot=class e{constructor(n){this.http=n}generacionTRXInOut(n,t){return this.http.post(`${b}InOutPersonal/GenerarTRX/${n}`,t).toPromise()}getTemplateReport(n,t){return T(this,null,function*(){return this.http.get(`${b}ReporteBI/get_template_reporte/${n}`,{params:{id_rep:t}}).toPromise().then(i=>JSON.parse(i).RESPUESTA.RPTemplate).then(i=>i)})}getMenu(n,t){return this.http.get(`${b}General/getMenuV2/${n}/MTR/${t}`).toPromise().then(i=>(console.log("MENU REP: ",i),i=i.split("DESCRIPCION").join("label"),i=i.split("OPCION").join("items"),i=JSON.parse(i),this.recursivaMenu(i.MENU),i)).then(i=>i.MENU.items).then(i=>i)}recursivaMenu(n){if(n!==void 0&&n!=null){if(n.length===void 0&&n.items!==void 0&&n.items!==null&&n.items.length===void 0)n.items=new Array(n.items);else if(n.length!==void 0)for(let t=0;t<n.length;t++)this.recursivaMenu(n[t]);else if(n.items!==void 0&&n.items.length!==void 0)for(let t=0;t<n.items.length;t++)this.recursivaMenu(n.items[t])}}getReportesByTipo(n,t){return T(this,null,function*(){return this.http.get(`${b}ReporteBI/GetReportesByTipo/${n}`,{params:t}).toPromise().then(i=>JSON.parse(i).RESPUESTA.expT).then(i=>i)})}ejectuarStoreGenerico(n,t){return T(this,null,function*(){return this.http.get(`${b}General/ejecutar_stored_generico/${n}`,{params:t}).toPromise()})}getTblParametros(n,t,i){return T(this,null,function*(){return this.http.get(`${b}Parametros/getParametros/${n.trim()}/${i.trim()}/${t.trim()}`).toPromise().then(o=>JSON.parse(o)).then(o=>o)})}static \u0275fac=function(t){return new(t||e)(R(U))};static \u0275prov=s({token:e,factory:e.\u0275fac,providedIn:"root"})};var lt=["*"],at=({dt:e})=>`
.p-iconfield {
    position: relative;
    display: block;
}

.p-inputicon {
    position: absolute;
    top: 50%;
    margin-top: calc(-1 * (${e("icon.size")} / 2));
    color: ${e("iconfield.icon.color")};
    line-height: 1;
}

.p-iconfield .p-inputicon:first-child {
    inset-inline-start: ${e("form.field.padding.x")};
}

.p-iconfield .p-inputicon:last-child {
    inset-inline-end: ${e("form.field.padding.x")};
}

.p-iconfield .p-inputtext:not(:first-child) {
    padding-inline-start: calc((${e("form.field.padding.x")} * 2) + ${e("icon.size")});
}

.p-iconfield .p-inputtext:not(:last-child) {
    padding-inline-end: calc((${e("form.field.padding.x")} * 2) + ${e("icon.size")});
}

.p-iconfield:has(.p-inputfield-sm) .p-inputicon {
    font-size: ${e("form.field.sm.font.size")};
    width: ${e("form.field.sm.font.size")};
    height: ${e("form.field.sm.font.size")};
    margin-top: calc(-1 * (${e("form.field.sm.font.size")} / 2));
}

.p-iconfield:has(.p-inputfield-lg) .p-inputicon {
    font-size: ${e("form.field.lg.font.size")};
    width: ${e("form.field.lg.font.size")};
    height: ${e("form.field.lg.font.size")};
    margin-top: calc(-1 * (${e("form.field.lg.font.size")} / 2));
}
`,pt={root:"p-iconfield"},nt=(()=>{class e extends g{name="iconfield";theme=at;classes=pt;static \u0275fac=(()=>{let t;return function(o){return(t||(t=r(e)))(o||e)}})();static \u0275prov=s({token:e,factory:e.\u0275fac})}return e})();var ct=(()=>{class e extends v{iconPosition="left";get _styleClass(){return this.styleClass}styleClass;_componentStyle=h(nt);static \u0275fac=(()=>{let t;return function(o){return(t||(t=r(e)))(o||e)}})();static \u0275cmp=E({type:e,selectors:[["p-iconfield"],["p-iconField"],["p-icon-field"]],hostAttrs:[1,"p-iconfield"],hostVars:6,hostBindings:function(i,o){i&2&&(I(o._styleClass),w("p-iconfield-left",o.iconPosition==="left")("p-iconfield-right",o.iconPosition==="right"))},inputs:{iconPosition:"iconPosition",styleClass:"styleClass"},features:[f([nt]),u],ngContentSelectors:lt,decls:1,vars:0,template:function(i,o){i&1&&(M(),S(0))},dependencies:[$],encapsulation:2,changeDetection:0})}return e})(),Ft=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=d({type:e});static \u0275inj=c({imports:[ct]})}return e})();var ht=["*"],dt={root:"p-inputicon"},st=(()=>{class e extends g{name="inputicon";classes=dt;static \u0275fac=(()=>{let t;return function(o){return(t||(t=r(e)))(o||e)}})();static \u0275prov=s({token:e,factory:e.\u0275fac})}return e})(),ut=(()=>{class e extends v{styleClass;get hostClasses(){return this.styleClass}_componentStyle=h(st);static \u0275fac=(()=>{let t;return function(o){return(t||(t=r(e)))(o||e)}})();static \u0275cmp=E({type:e,selectors:[["p-inputicon"],["p-inputIcon"]],hostVars:4,hostBindings:function(i,o){i&2&&(I(o.hostClasses),w("p-inputicon",!0))},inputs:{styleClass:"styleClass"},features:[f([st]),u],ngContentSelectors:ht,decls:1,vars:0,template:function(i,o){i&1&&(M(),S(0))},dependencies:[$,x],encapsulation:2,changeDetection:0})}return e})(),Jt=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=d({type:e});static \u0275inj=c({imports:[ut,x,x]})}return e})();var ft=({dt:e})=>`
.p-tooltip {
    position: absolute;
    display: none;
    max-width: ${e("tooltip.max.width")};
}

.p-tooltip-right,
.p-tooltip-left {
    padding: 0 ${e("tooltip.gutter")};
}

.p-tooltip-top,
.p-tooltip-bottom {
    padding: ${e("tooltip.gutter")} 0;
}

.p-tooltip-text {
    white-space: pre-line;
    word-break: break-word;
    background: ${e("tooltip.background")};
    color: ${e("tooltip.color")};
    padding: ${e("tooltip.padding")};
    box-shadow: ${e("tooltip.shadow")};
    border-radius: ${e("tooltip.border.radius")};
}

.p-tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    scale: 2;
}

.p-tooltip-right .p-tooltip-arrow {
    top: 50%;
    left: 0;
    margin-top: calc(-1 * ${e("tooltip.gutter")});
    border-width: ${e("tooltip.gutter")} ${e("tooltip.gutter")} ${e("tooltip.gutter")} 0;
    border-right-color: ${e("tooltip.background")};
}

.p-tooltip-left .p-tooltip-arrow {
    top: 50%;
    right: 0;
    margin-top: calc(-1 * ${e("tooltip.gutter")});
    border-width: ${e("tooltip.gutter")} 0 ${e("tooltip.gutter")} ${e("tooltip.gutter")};
    border-left-color: ${e("tooltip.background")};
}

.p-tooltip-top .p-tooltip-arrow {
    bottom: 0;
    left: 50%;
    margin-left: calc(-1 * ${e("tooltip.gutter")});
    border-width: ${e("tooltip.gutter")} ${e("tooltip.gutter")} 0 ${e("tooltip.gutter")};
    border-top-color: ${e("tooltip.background")};
    border-bottom-color: ${e("tooltip.background")};
}

.p-tooltip-bottom .p-tooltip-arrow {
    top: 0;
    left: 50%;
    margin-left: calc(-1 * ${e("tooltip.gutter")});
    border-width: 0 ${e("tooltip.gutter")} ${e("tooltip.gutter")} ${e("tooltip.gutter")};
    border-top-color: ${e("tooltip.background")};
    border-bottom-color: ${e("tooltip.background")};
}
`,mt={root:"p-tooltip p-component",arrow:"p-tooltip-arrow",text:"p-tooltip-text"},rt=(()=>{class e extends g{name="tooltip";theme=ft;classes=mt;static \u0275fac=(()=>{let t;return function(o){return(t||(t=r(e)))(o||e)}})();static \u0275prov=s({token:e,factory:e.\u0275fac})}return e})();var le=(()=>{class e extends v{zone;viewContainer;tooltipPosition;tooltipEvent="hover";appendTo;positionStyle;tooltipStyleClass;tooltipZIndex;escape=!0;showDelay;hideDelay;life;positionTop;positionLeft;autoHide=!0;fitContent=!0;hideOnEscape=!0;content;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this.deactivate()}tooltipOptions;_tooltipOptions={tooltipLabel:null,tooltipPosition:"right",tooltipEvent:"hover",appendTo:"body",positionStyle:null,tooltipStyleClass:null,tooltipZIndex:"auto",escape:!0,disabled:null,showDelay:null,hideDelay:null,positionTop:null,positionLeft:null,life:null,autoHide:!0,hideOnEscape:!0,id:Y("pn_id_")+"_tooltip"};_disabled;container;styleClass;tooltipText;showTimeout;hideTimeout;active;mouseEnterListener;mouseLeaveListener;containerMouseleaveListener;clickListener;focusListener;blurListener;documentEscapeListener;scrollHandler;resizeListener;_componentStyle=h(rt);interactionInProgress=!1;constructor(t,i){super(),this.zone=t,this.viewContainer=i}ngAfterViewInit(){super.ngAfterViewInit(),G(this.platformId)&&this.zone.runOutsideAngular(()=>{let t=this.getOption("tooltipEvent");if((t==="hover"||t==="both")&&(this.mouseEnterListener=this.onMouseEnter.bind(this),this.mouseLeaveListener=this.onMouseLeave.bind(this),this.clickListener=this.onInputClick.bind(this),this.el.nativeElement.addEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.addEventListener("click",this.clickListener),this.el.nativeElement.addEventListener("mouseleave",this.mouseLeaveListener)),t==="focus"||t==="both"){this.focusListener=this.onFocus.bind(this),this.blurListener=this.onBlur.bind(this);let i=this.el.nativeElement.querySelector(".p-component");i||(i=this.getTarget(this.el.nativeElement)),i.addEventListener("focus",this.focusListener),i.addEventListener("blur",this.blurListener)}})}ngOnChanges(t){super.ngOnChanges(t),t.tooltipPosition&&this.setOption({tooltipPosition:t.tooltipPosition.currentValue}),t.tooltipEvent&&this.setOption({tooltipEvent:t.tooltipEvent.currentValue}),t.appendTo&&this.setOption({appendTo:t.appendTo.currentValue}),t.positionStyle&&this.setOption({positionStyle:t.positionStyle.currentValue}),t.tooltipStyleClass&&this.setOption({tooltipStyleClass:t.tooltipStyleClass.currentValue}),t.tooltipZIndex&&this.setOption({tooltipZIndex:t.tooltipZIndex.currentValue}),t.escape&&this.setOption({escape:t.escape.currentValue}),t.showDelay&&this.setOption({showDelay:t.showDelay.currentValue}),t.hideDelay&&this.setOption({hideDelay:t.hideDelay.currentValue}),t.life&&this.setOption({life:t.life.currentValue}),t.positionTop&&this.setOption({positionTop:t.positionTop.currentValue}),t.positionLeft&&this.setOption({positionLeft:t.positionLeft.currentValue}),t.disabled&&this.setOption({disabled:t.disabled.currentValue}),t.content&&(this.setOption({tooltipLabel:t.content.currentValue}),this.active&&(t.content.currentValue?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide())),t.autoHide&&this.setOption({autoHide:t.autoHide.currentValue}),t.id&&this.setOption({id:t.id.currentValue}),t.tooltipOptions&&(this._tooltipOptions=y(y({},this._tooltipOptions),t.tooltipOptions.currentValue),this.deactivate(),this.active&&(this.getOption("tooltipLabel")?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide()))}isAutoHide(){return this.getOption("autoHide")}onMouseEnter(t){!this.container&&!this.showTimeout&&this.activate()}onMouseLeave(t){this.isAutoHide()?this.deactivate():!(O(t.relatedTarget,"p-tooltip")||O(t.relatedTarget,"p-tooltip-text")||O(t.relatedTarget,"p-tooltip-arrow"))&&this.deactivate()}onFocus(t){this.activate()}onBlur(t){this.deactivate()}onInputClick(t){this.deactivate()}activate(){if(!this.interactionInProgress){if(this.active=!0,this.clearHideTimeout(),this.getOption("showDelay")?this.showTimeout=setTimeout(()=>{this.show()},this.getOption("showDelay")):this.show(),this.getOption("life")){let t=this.getOption("showDelay")?this.getOption("life")+this.getOption("showDelay"):this.getOption("life");this.hideTimeout=setTimeout(()=>{this.hide()},t)}this.getOption("hideOnEscape")&&(this.documentEscapeListener=this.renderer.listen("document","keydown.escape",()=>{this.deactivate(),this.documentEscapeListener()})),this.interactionInProgress=!0}}deactivate(){this.interactionInProgress=!1,this.active=!1,this.clearShowTimeout(),this.getOption("hideDelay")?(this.clearHideTimeout(),this.hideTimeout=setTimeout(()=>{this.hide()},this.getOption("hideDelay"))):this.hide(),this.documentEscapeListener&&this.documentEscapeListener()}create(){this.container&&(this.clearHideTimeout(),this.remove()),this.container=document.createElement("div"),this.container.setAttribute("id",this.getOption("id")),this.container.setAttribute("role","tooltip");let t=document.createElement("div");t.className="p-tooltip-arrow",this.container.appendChild(t),this.tooltipText=document.createElement("div"),this.tooltipText.className="p-tooltip-text",this.updateText(),this.getOption("positionStyle")&&(this.container.style.position=this.getOption("positionStyle")),this.container.appendChild(this.tooltipText),this.getOption("appendTo")==="body"?document.body.appendChild(this.container):this.getOption("appendTo")==="target"?z(this.container,this.el.nativeElement):z(this.getOption("appendTo"),this.container),this.container.style.display="none",this.fitContent&&(this.container.style.width="fit-content"),this.isAutoHide()?this.container.style.pointerEvents="none":(this.container.style.pointerEvents="unset",this.bindContainerMouseleaveListener())}bindContainerMouseleaveListener(){if(!this.containerMouseleaveListener){let t=this.container??this.container.nativeElement;this.containerMouseleaveListener=this.renderer.listen(t,"mouseleave",i=>{this.deactivate()})}}unbindContainerMouseleaveListener(){this.containerMouseleaveListener&&(this.bindContainerMouseleaveListener(),this.containerMouseleaveListener=null)}show(){if(!this.getOption("tooltipLabel")||this.getOption("disabled"))return;this.create(),this.el.nativeElement.closest("p-dialog")?setTimeout(()=>{this.container&&(this.container.style.display="inline-block"),this.container&&this.align()},100):(this.container.style.display="inline-block",this.align()),K(this.container,250),this.getOption("tooltipZIndex")==="auto"?D.set("tooltip",this.container,this.config.zIndex.tooltip):this.container.style.zIndex=this.getOption("tooltipZIndex"),this.bindDocumentResizeListener(),this.bindScrollListener()}hide(){this.getOption("tooltipZIndex")==="auto"&&D.clear(this.container),this.remove()}updateText(){let t=this.getOption("tooltipLabel");if(t instanceof Z){let i=this.viewContainer.createEmbeddedView(t);i.detectChanges(),i.rootNodes.forEach(o=>this.tooltipText.appendChild(o))}else this.getOption("escape")?(this.tooltipText.innerHTML="",this.tooltipText.appendChild(document.createTextNode(t))):this.tooltipText.innerHTML=t}align(){let t=this.getOption("tooltipPosition"),i={top:[this.alignTop,this.alignBottom,this.alignRight,this.alignLeft],bottom:[this.alignBottom,this.alignTop,this.alignRight,this.alignLeft],left:[this.alignLeft,this.alignRight,this.alignTop,this.alignBottom],right:[this.alignRight,this.alignLeft,this.alignTop,this.alignBottom]};for(let[o,p]of i[t].entries())if(o===0)p.call(this);else if(this.isOutOfBounds())p.call(this);else break}getHostOffset(){if(this.getOption("appendTo")==="body"||this.getOption("appendTo")==="target"){let t=this.el.nativeElement.getBoundingClientRect(),i=t.left+q(),o=t.top+X();return{left:i,top:o}}else return{left:0,top:0}}get activeElement(){return this.el.nativeElement.nodeName.includes("P-")?B(this.el.nativeElement,".p-component"):this.el.nativeElement}alignRight(){this.preAlign("right");let t=this.activeElement,i=l(t),o=(a(t)-a(this.container))/2;this.alignTooltip(i,o)}alignLeft(){this.preAlign("left");let t=l(this.container),i=(a(this.el.nativeElement)-a(this.container))/2;this.alignTooltip(-t,i)}alignTop(){this.preAlign("top");let t=(l(this.el.nativeElement)-l(this.container))/2,i=a(this.container);this.alignTooltip(t,-i)}alignBottom(){this.preAlign("bottom");let t=(l(this.el.nativeElement)-l(this.container))/2,i=a(this.el.nativeElement);this.alignTooltip(t,i)}alignTooltip(t,i){let o=this.getHostOffset(),p=o.left+t,H=o.top+i;this.container.style.left=p+this.getOption("positionLeft")+"px",this.container.style.top=H+this.getOption("positionTop")+"px"}setOption(t){this._tooltipOptions=y(y({},this._tooltipOptions),t)}getOption(t){return this._tooltipOptions[t]}getTarget(t){return O(t,"p-inputwrapper")?B(t,"input"):t}preAlign(t){this.container.style.left="-999px",this.container.style.top="-999px";let i="p-tooltip p-component p-tooltip-"+t;this.container.className=this.getOption("tooltipStyleClass")?i+" "+this.getOption("tooltipStyleClass"):i}isOutOfBounds(){let t=this.container.getBoundingClientRect(),i=t.top,o=t.left,p=l(this.container),H=a(this.container),V=J();return o+p>V.width||o<0||i<0||i+H>V.height}onWindowResize(t){this.hide()}bindDocumentResizeListener(){this.zone.runOutsideAngular(()=>{this.resizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.resizeListener)})}unbindDocumentResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new tt(this.el.nativeElement,()=>{this.container&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindEvents(){let t=this.getOption("tooltipEvent");if((t==="hover"||t==="both")&&(this.el.nativeElement.removeEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.removeEventListener("mouseleave",this.mouseLeaveListener),this.el.nativeElement.removeEventListener("click",this.clickListener)),t==="focus"||t==="both"){let i=this.el.nativeElement.querySelector(".p-component");i||(i=this.getTarget(this.el.nativeElement)),i.removeEventListener("focus",this.focusListener),i.removeEventListener("blur",this.blurListener)}this.unbindDocumentResizeListener()}remove(){this.container&&this.container.parentElement&&(this.getOption("appendTo")==="body"?document.body.removeChild(this.container):this.getOption("appendTo")==="target"?this.el.nativeElement.removeChild(this.container):Q(this.getOption("appendTo"),this.container)),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.unbindContainerMouseleaveListener(),this.clearTimeouts(),this.container=null,this.scrollHandler=null}clearShowTimeout(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)}clearHideTimeout(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)}clearTimeouts(){this.clearShowTimeout(),this.clearHideTimeout()}ngOnDestroy(){this.unbindEvents(),super.ngOnDestroy(),this.container&&D.clear(this.container),this.remove(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.documentEscapeListener&&this.documentEscapeListener()}static \u0275fac=function(i){return new(i||e)(j(A),j(_))};static \u0275dir=W({type:e,selectors:[["","pTooltip",""]],inputs:{tooltipPosition:"tooltipPosition",tooltipEvent:"tooltipEvent",appendTo:"appendTo",positionStyle:"positionStyle",tooltipStyleClass:"tooltipStyleClass",tooltipZIndex:"tooltipZIndex",escape:[2,"escape","escape",L],showDelay:[2,"showDelay","showDelay",m],hideDelay:[2,"hideDelay","hideDelay",m],life:[2,"life","life",m],positionTop:[2,"positionTop","positionTop",m],positionLeft:[2,"positionLeft","positionLeft",m],autoHide:[2,"autoHide","autoHide",L],fitContent:[2,"fitContent","fitContent",L],hideOnEscape:[2,"hideOnEscape","hideOnEscape",L],content:[0,"pTooltip","content"],disabled:[0,"tooltipDisabled","disabled"],tooltipOptions:"tooltipOptions"},features:[f([rt]),u,N]})}return e})(),ae=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=d({type:e});static \u0275inj=c({})}return e})();export{ct as a,Ft as b,ut as c,Jt as d,it as e,le as f,ae as g,ot as h};
