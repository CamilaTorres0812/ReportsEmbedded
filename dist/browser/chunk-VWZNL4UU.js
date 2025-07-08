import{b as O}from"./chunk-YUKE4YFX.js";import{b as Ft}from"./chunk-XJMN3SLQ.js";import{$ as Pt,A as St,B as Et,Ba as w,D as b,Ea as L,F as V,Fa as Rt,H as xt,J as A,Ka as Q,R as rt,S as C,Y as $t,_ as Dt,d as Tt,na as K,qa as kt,t as z,ta as _t,u as Lt,ua as T,y as Ot,ya as Mt,z as It}from"./chunk-Y7WV5QTW.js";import{c as wt,d as nt,f as U,g as J,h as st}from"./chunk-S35HUXPS.js";import{$ as a,$a as Z,Ab as P,Bb as k,Bc as M,Cb as tt,Eb as et,Fb as it,Ja as dt,Ka as F,L as p,M as u,Ma as ht,Pa as Y,Q as lt,Qb as v,R as c,Ra as ut,Sb as gt,Tb as ot,W as pt,Wa as f,X as E,Xa as m,Y as x,Ya as ft,Z as ct,Za as d,cc as h,dc as y,fa as q,ga as j,gb as H,hb as $,jb as G,lb as g,rb as D,sb as B,sc as vt,tb as X,uc as yt,xb as mt,xc as bt,yb as W,yc as Ct,zb as I,zc as _}from"./chunk-3PM7GAU5.js";import{a as R,h as S}from"./chunk-UVUYC35V.js";var Nt=({dt:e})=>`
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
`,jt={root:"p-tooltip p-component",arrow:"p-tooltip-arrow",text:"p-tooltip-text"},Ht=(()=>{class e extends w{name="tooltip";theme=Nt;classes=jt;static \u0275fac=(()=>{let t;return function(o){return(t||(t=a(e)))(o||e)}})();static \u0275prov=p({token:e,factory:e.\u0275fac})}return e})();var be=(()=>{class e extends L{zone;viewContainer;tooltipPosition;tooltipEvent="hover";appendTo;positionStyle;tooltipStyleClass;tooltipZIndex;escape=!0;showDelay;hideDelay;life;positionTop;positionLeft;autoHide=!0;fitContent=!0;hideOnEscape=!0;content;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this.deactivate()}tooltipOptions;_tooltipOptions={tooltipLabel:null,tooltipPosition:"right",tooltipEvent:"hover",appendTo:"body",positionStyle:null,tooltipStyleClass:null,tooltipZIndex:"auto",escape:!0,disabled:null,showDelay:null,hideDelay:null,positionTop:null,positionLeft:null,life:null,autoHide:!0,hideOnEscape:!0,id:K("pn_id_")+"_tooltip"};_disabled;container;styleClass;tooltipText;showTimeout;hideTimeout;active;mouseEnterListener;mouseLeaveListener;containerMouseleaveListener;clickListener;focusListener;blurListener;documentEscapeListener;scrollHandler;resizeListener;_componentStyle=c(Ht);interactionInProgress=!1;constructor(t,i){super(),this.zone=t,this.viewContainer=i}ngAfterViewInit(){super.ngAfterViewInit(),M(this.platformId)&&this.zone.runOutsideAngular(()=>{let t=this.getOption("tooltipEvent");if((t==="hover"||t==="both")&&(this.mouseEnterListener=this.onMouseEnter.bind(this),this.mouseLeaveListener=this.onMouseLeave.bind(this),this.clickListener=this.onInputClick.bind(this),this.el.nativeElement.addEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.addEventListener("click",this.clickListener),this.el.nativeElement.addEventListener("mouseleave",this.mouseLeaveListener)),t==="focus"||t==="both"){this.focusListener=this.onFocus.bind(this),this.blurListener=this.onBlur.bind(this);let i=this.el.nativeElement.querySelector(".p-component");i||(i=this.getTarget(this.el.nativeElement)),i.addEventListener("focus",this.focusListener),i.addEventListener("blur",this.blurListener)}})}ngOnChanges(t){super.ngOnChanges(t),t.tooltipPosition&&this.setOption({tooltipPosition:t.tooltipPosition.currentValue}),t.tooltipEvent&&this.setOption({tooltipEvent:t.tooltipEvent.currentValue}),t.appendTo&&this.setOption({appendTo:t.appendTo.currentValue}),t.positionStyle&&this.setOption({positionStyle:t.positionStyle.currentValue}),t.tooltipStyleClass&&this.setOption({tooltipStyleClass:t.tooltipStyleClass.currentValue}),t.tooltipZIndex&&this.setOption({tooltipZIndex:t.tooltipZIndex.currentValue}),t.escape&&this.setOption({escape:t.escape.currentValue}),t.showDelay&&this.setOption({showDelay:t.showDelay.currentValue}),t.hideDelay&&this.setOption({hideDelay:t.hideDelay.currentValue}),t.life&&this.setOption({life:t.life.currentValue}),t.positionTop&&this.setOption({positionTop:t.positionTop.currentValue}),t.positionLeft&&this.setOption({positionLeft:t.positionLeft.currentValue}),t.disabled&&this.setOption({disabled:t.disabled.currentValue}),t.content&&(this.setOption({tooltipLabel:t.content.currentValue}),this.active&&(t.content.currentValue?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide())),t.autoHide&&this.setOption({autoHide:t.autoHide.currentValue}),t.id&&this.setOption({id:t.id.currentValue}),t.tooltipOptions&&(this._tooltipOptions=R(R({},this._tooltipOptions),t.tooltipOptions.currentValue),this.deactivate(),this.active&&(this.getOption("tooltipLabel")?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide()))}isAutoHide(){return this.getOption("autoHide")}onMouseEnter(t){!this.container&&!this.showTimeout&&this.activate()}onMouseLeave(t){this.isAutoHide()?this.deactivate():!(z(t.relatedTarget,"p-tooltip")||z(t.relatedTarget,"p-tooltip-text")||z(t.relatedTarget,"p-tooltip-arrow"))&&this.deactivate()}onFocus(t){this.activate()}onBlur(t){this.deactivate()}onInputClick(t){this.deactivate()}activate(){if(!this.interactionInProgress){if(this.active=!0,this.clearHideTimeout(),this.getOption("showDelay")?this.showTimeout=setTimeout(()=>{this.show()},this.getOption("showDelay")):this.show(),this.getOption("life")){let t=this.getOption("showDelay")?this.getOption("life")+this.getOption("showDelay"):this.getOption("life");this.hideTimeout=setTimeout(()=>{this.hide()},t)}this.getOption("hideOnEscape")&&(this.documentEscapeListener=this.renderer.listen("document","keydown.escape",()=>{this.deactivate(),this.documentEscapeListener()})),this.interactionInProgress=!0}}deactivate(){this.interactionInProgress=!1,this.active=!1,this.clearShowTimeout(),this.getOption("hideDelay")?(this.clearHideTimeout(),this.hideTimeout=setTimeout(()=>{this.hide()},this.getOption("hideDelay"))):this.hide(),this.documentEscapeListener&&this.documentEscapeListener()}create(){this.container&&(this.clearHideTimeout(),this.remove()),this.container=document.createElement("div"),this.container.setAttribute("id",this.getOption("id")),this.container.setAttribute("role","tooltip");let t=document.createElement("div");t.className="p-tooltip-arrow",this.container.appendChild(t),this.tooltipText=document.createElement("div"),this.tooltipText.className="p-tooltip-text",this.updateText(),this.getOption("positionStyle")&&(this.container.style.position=this.getOption("positionStyle")),this.container.appendChild(this.tooltipText),this.getOption("appendTo")==="body"?document.body.appendChild(this.container):this.getOption("appendTo")==="target"?V(this.container,this.el.nativeElement):V(this.getOption("appendTo"),this.container),this.container.style.display="none",this.fitContent&&(this.container.style.width="fit-content"),this.isAutoHide()?this.container.style.pointerEvents="none":(this.container.style.pointerEvents="unset",this.bindContainerMouseleaveListener())}bindContainerMouseleaveListener(){if(!this.containerMouseleaveListener){let t=this.container??this.container.nativeElement;this.containerMouseleaveListener=this.renderer.listen(t,"mouseleave",i=>{this.deactivate()})}}unbindContainerMouseleaveListener(){this.containerMouseleaveListener&&(this.bindContainerMouseleaveListener(),this.containerMouseleaveListener=null)}show(){if(!this.getOption("tooltipLabel")||this.getOption("disabled"))return;this.create(),this.el.nativeElement.closest("p-dialog")?setTimeout(()=>{this.container&&(this.container.style.display="inline-block"),this.container&&this.align()},100):(this.container.style.display="inline-block",this.align()),xt(this.container,250),this.getOption("tooltipZIndex")==="auto"?O.set("tooltip",this.container,this.config.zIndex.tooltip):this.container.style.zIndex=this.getOption("tooltipZIndex"),this.bindDocumentResizeListener(),this.bindScrollListener()}hide(){this.getOption("tooltipZIndex")==="auto"&&O.clear(this.container),this.remove()}updateText(){let t=this.getOption("tooltipLabel");if(t instanceof ht){let i=this.viewContainer.createEmbeddedView(t);i.detectChanges(),i.rootNodes.forEach(o=>this.tooltipText.appendChild(o))}else this.getOption("escape")?(this.tooltipText.innerHTML="",this.tooltipText.appendChild(document.createTextNode(t))):this.tooltipText.innerHTML=t}align(){let t=this.getOption("tooltipPosition"),i={top:[this.alignTop,this.alignBottom,this.alignRight,this.alignLeft],bottom:[this.alignBottom,this.alignTop,this.alignRight,this.alignLeft],left:[this.alignLeft,this.alignRight,this.alignTop,this.alignBottom],right:[this.alignRight,this.alignLeft,this.alignTop,this.alignBottom]};for(let[o,s]of i[t].entries())if(o===0)s.call(this);else if(this.isOutOfBounds())s.call(this);else break}getHostOffset(){if(this.getOption("appendTo")==="body"||this.getOption("appendTo")==="target"){let t=this.el.nativeElement.getBoundingClientRect(),i=t.left+It(),o=t.top+St();return{left:i,top:o}}else return{left:0,top:0}}get activeElement(){return this.el.nativeElement.nodeName.includes("P-")?A(this.el.nativeElement,".p-component"):this.el.nativeElement}alignRight(){this.preAlign("right");let t=this.activeElement,i=b(t),o=(C(t)-C(this.container))/2;this.alignTooltip(i,o)}alignLeft(){this.preAlign("left");let t=b(this.container),i=(C(this.el.nativeElement)-C(this.container))/2;this.alignTooltip(-t,i)}alignTop(){this.preAlign("top");let t=(b(this.el.nativeElement)-b(this.container))/2,i=C(this.container);this.alignTooltip(t,-i)}alignBottom(){this.preAlign("bottom");let t=(b(this.el.nativeElement)-b(this.container))/2,i=C(this.el.nativeElement);this.alignTooltip(t,i)}alignTooltip(t,i){let o=this.getHostOffset(),s=o.left+t,l=o.top+i;this.container.style.left=s+this.getOption("positionLeft")+"px",this.container.style.top=l+this.getOption("positionTop")+"px"}setOption(t){this._tooltipOptions=R(R({},this._tooltipOptions),t)}getOption(t){return this._tooltipOptions[t]}getTarget(t){return z(t,"p-inputwrapper")?A(t,"input"):t}preAlign(t){this.container.style.left="-999px",this.container.style.top="-999px";let i="p-tooltip p-component p-tooltip-"+t;this.container.className=this.getOption("tooltipStyleClass")?i+" "+this.getOption("tooltipStyleClass"):i}isOutOfBounds(){let t=this.container.getBoundingClientRect(),i=t.top,o=t.left,s=b(this.container),l=C(this.container),at=Ot();return o+s>at.width||o<0||i<0||i+l>at.height}onWindowResize(t){this.hide()}bindDocumentResizeListener(){this.zone.runOutsideAngular(()=>{this.resizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.resizeListener)})}unbindDocumentResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new Q(this.el.nativeElement,()=>{this.container&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindEvents(){let t=this.getOption("tooltipEvent");if((t==="hover"||t==="both")&&(this.el.nativeElement.removeEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.removeEventListener("mouseleave",this.mouseLeaveListener),this.el.nativeElement.removeEventListener("click",this.clickListener)),t==="focus"||t==="both"){let i=this.el.nativeElement.querySelector(".p-component");i||(i=this.getTarget(this.el.nativeElement)),i.removeEventListener("focus",this.focusListener),i.removeEventListener("blur",this.blurListener)}this.unbindDocumentResizeListener()}remove(){this.container&&this.container.parentElement&&(this.getOption("appendTo")==="body"?document.body.removeChild(this.container):this.getOption("appendTo")==="target"?this.el.nativeElement.removeChild(this.container):Pt(this.getOption("appendTo"),this.container)),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.unbindContainerMouseleaveListener(),this.clearTimeouts(),this.container=null,this.scrollHandler=null}clearShowTimeout(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)}clearHideTimeout(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)}clearTimeouts(){this.clearShowTimeout(),this.clearHideTimeout()}ngOnDestroy(){this.unbindEvents(),super.ngOnDestroy(),this.container&&O.clear(this.container),this.remove(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.documentEscapeListener&&this.documentEscapeListener()}static \u0275fac=function(i){return new(i||e)(Y(j),Y(ut))};static \u0275dir=ft({type:e,selectors:[["","pTooltip",""]],inputs:{tooltipPosition:"tooltipPosition",tooltipEvent:"tooltipEvent",appendTo:"appendTo",positionStyle:"positionStyle",tooltipStyleClass:"tooltipStyleClass",tooltipZIndex:"tooltipZIndex",escape:[2,"escape","escape",h],showDelay:[2,"showDelay","showDelay",y],hideDelay:[2,"hideDelay","hideDelay",y],life:[2,"life","life",y],positionTop:[2,"positionTop","positionTop",y],positionLeft:[2,"positionLeft","positionLeft",y],autoHide:[2,"autoHide","autoHide",h],fitContent:[2,"fitContent","fitContent",h],hideOnEscape:[2,"hideOnEscape","hideOnEscape",h],content:[0,"pTooltip","content"],disabled:[0,"tooltipDisabled","disabled"],tooltipOptions:"tooltipOptions"},features:[v([Ht]),d,pt]})}return e})(),Ce=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=m({type:e});static \u0275inj=u({})}return e})();var r=Ft.ServidorGenerales,Bt=class e{constructor(n){this.http=n}generacionTRXInOut(n,t){return this.http.post(`${r}InOutPersonal/GenerarTRX/${n}`,t).toPromise()}getTemplateReport(n,t){return S(this,null,function*(){return this.http.get(`${r}ReporteBI/get_template_reporte/${n}`,{params:{id_rep:t}}).toPromise().then(i=>JSON.parse(i).RESPUESTA.RPTemplate).then(i=>i)})}getMenu(n,t){return this.http.get(`${r}General/getMenuV2/${n}/MTR/${t}`).toPromise().then(i=>(i=i.split("DESCRIPCION").join("label"),i=i.split("OPCION").join("items"),i=JSON.parse(i),this.prepararMenu(i.MENU),i)).then(i=>i.MENU.items).then(i=>i)}prepararMenu(n){if(n)if(Array.isArray(n))n.forEach(t=>this.prepararMenu(t));else{let i=(n.LINK||"").match(/Componente=([^&]+)/);i&&(n.routerLink=decodeURIComponent(i[1])),n.items&&!Array.isArray(n.items)&&(n.items=[n.items]),n.items&&n.items.length===0&&delete n.items,n.items&&this.prepararMenu(n.items)}}getReportesByTipo(n,t){return S(this,null,function*(){return this.http.get(`${r}ReporteBI/GetReportesByTipo/${n}`,{params:t}).toPromise().then(i=>JSON.parse(i).RESPUESTA.expT).then(i=>i)})}ejectuarStoreGenerico(n,t){return S(this,null,function*(){return this.http.get(`${r}General/ejecutar_stored_generico/${n}`,{params:t}).toPromise()})}getTblParametros(n,t,i){return S(this,null,function*(){return this.http.get(`${r}Parametros/getParametros/${n.trim()}/${i.trim()}/${t.trim()}`).toPromise().then(o=>JSON.parse(o)).then(o=>o)})}getReportsByClasification(n,t){return this.http.get(`${r}General/M3GetClasificacionByTipo/${n}/${t}`).toPromise()}getReportsByFilter(n,t,i){return this.http.get(`${r}ReporteBI/getReportesByFiltro/${n}/${t}`,{params:i}).toPromise()}getSPReports(n,t){return this.http.get(`${r}ReporteBI/getSPReportes/${n}`,{params:t}).toPromise().then(i=>JSON.parse(i))}crearReporteNotificacionKatios(n,t,i){let o=new FormData;return o.append("reporte",JSON.stringify(t)),i&&o.append("uploadFile1",i),this.http.post(`${r}ReporteBI/crearReporteNotificacionKatios/${n}`,o).toPromise()}ejecutarStoredGenericoWithFormat(n,t){return this.http.get(`${r}General/ejecutarStoredGenericoWithFormat/${n}`,{params:t}).toPromise()}getReporteAdicionalesById(n,t){return S(this,null,function*(){let i=[];return this.http.get(`${r}ReporteBI/getReporteAdicionalesById/${n}`,{params:t}).toPromise().then(o=>(i=JSON.parse(o),i.RESPUESTA?i.RESPUESTA.ReportesAdic.length?i.RESPUESTA.ReportesAdic:[i.RESPUESTA.ReportesAdic]:[])).catch(()=>[])})}editarReporteNotificacionKatios(n,t,i){let o=new FormData;return o.append("reporte",JSON.stringify(t)),i&&o.append("uploadFile1",i),this.http.post(`${r}ReporteBI/editarReporteNotificacionKatios/${n}`,o).toPromise()}eliminarReporte(n,t){let i={reporte:JSON.stringify(t)};return this.http.post(`${r}ReporteBI/eliminarReporte/${n}`,i).toPromise()}static \u0275fac=function(t){return new(t||e)(lt(Tt))};static \u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"})};var $e=(()=>{class e extends Rt{pathId;ngOnInit(){this.pathId="url(#"+K()+")"}static \u0275fac=(()=>{let t;return function(o){return(t||(t=a(e)))(o||e)}})();static \u0275cmp=f({type:e,selectors:[["TimesCircleIcon"]],features:[d],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,o){i&1&&(ct(),D(0,"svg",0)(1,"g"),X(2,"path",1),B(),D(3,"defs")(4,"clipPath",2),X(5,"rect",3),B()()()),i&2&&(g(o.getClassNames()),H("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role),F(),H("clip-path",o.pathId),F(3),$("id",o.pathId))},encapsulation:2})}return e})();var Zt=["content"],Gt=["*"],Wt=(e,n)=>({showTransitionParams:e,hideTransitionParams:n}),Ut=(e,n)=>({value:e,params:n}),Jt=e=>({closeCallback:e});function Kt(e,n){}function Qt(e,n){e&1&&Z(0,Kt,0,0,"ng-template")}function qt(e,n){if(e&1){let t=mt();D(0,"div",1),W("click",function(o){E(t);let s=I();return x(s.onOverlayClick(o))})("@animation.start",function(o){E(t);let s=I();return x(s.onAnimationStart(o))})("@animation.done",function(o){E(t);let s=I();return x(s.onAnimationEnd(o))}),D(1,"div",2),W("click",function(o){E(t);let s=I();return x(s.onContentClick(o))})("mousedown",function(o){E(t);let s=I();return x(s.onContentClick(o))}),k(2),Z(3,Qt,1,0,null,3),B()()}if(e&2){let t=I();g(t.styleClass),$("ngClass","p-popover p-component")("ngStyle",t.style)("@animation",ot(13,Ut,t.overlayVisible?"open":"close",ot(10,Wt,t.showTransitionOptions,t.hideTransitionOptions))),H("aria-modal",t.overlayVisible)("aria-label",t.ariaLabel)("aria-labelledBy",t.ariaLabelledBy),F(3),$("ngTemplateOutlet",t.contentTemplate||t._contentTemplate)("ngTemplateOutletContext",gt(16,Jt,t.onCloseClick.bind(t)))}}var Yt=({dt:e})=>`
.p-popover {
    margin-top: ${e("popover.gutter")};
    background: ${e("popover.background")};
    color: ${e("popover.color")};
    border: 1px solid ${e("popover.border.color")};
    border-radius: ${e("popover.border.radius")};
    box-shadow: ${e("popover.shadow")};
    position: absolute
}

.p-popover-content {
    padding: ${e("popover.content.padding")};
}

.p-popover-flipped {
    margin-top: calc(${e("popover.gutter")} * -1);
    margin-bottom: ${e("popover.gutter")};
}

.p-popover-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-popover-leave-to {
    opacity: 0;
}

.p-popover-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-popover-leave-active {
    transition: opacity 0.1s linear;
}

.p-popover:after,
.p-popover:before {
    bottom: 100%;
    left: calc(${e("popover.arrow.offset")} + ${e("popover.arrow.left")});
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
}

.p-popover:after {
    border-width: calc(${e("popover.gutter")} - 2px);
    margin-left: calc(-1 * (${e("popover.gutter")} - 2px));
    border-style: solid;
    border-color: transparent;
    border-bottom-color: ${e("popover.background")};
}

.p-popover:before {
    border-width: ${e("popover.gutter")};
    margin-left: calc(-1 * ${e("popover.gutter")});
    border-style: solid;
    border-color: transparent;
    border-bottom-color: ${e("popover.border.color")};
}

.p-popover-flipped:after,
.p-popover-flipped:before {
    bottom: auto;
    top: 100%;
}

.p-popover.p-popover-flipped:after {
    border-bottom-color: transparent;
    border-top-color: ${e("popover.background")};
}

.p-popover.p-popover-flipped:before {
    border-bottom-color: transparent;
    border-top-color: ${e("popover.border.color")};
}

`,Xt={root:"p-popover p-component",content:"p-popover-content"},zt=(()=>{class e extends w{name="popover";theme=Yt;classes=Xt;static \u0275fac=(()=>{let t;return function(o){return(t||(t=a(e)))(o||e)}})();static \u0275prov=p({token:e,factory:e.\u0275fac})}return e})(),te=(()=>{class e extends L{ariaLabel;ariaLabelledBy;dismissable=!0;style;styleClass;appendTo="body";autoZIndex=!0;ariaCloseLabel;baseZIndex=0;focusOnShow=!0;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";onShow=new q;onHide=new q;container;overlayVisible=!1;render=!1;isOverlayAnimationInProgress=!1;selfClick=!1;documentClickListener;target;willHide;scrollHandler;documentResizeListener;contentTemplate;templates;_contentTemplate;destroyCallback;overlayEventListener;overlaySubscription;_componentStyle=c(zt);zone=c(j);overlayService=c(kt);ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break}})}bindDocumentClickListener(){if(M(this.platformId)&&!this.documentClickListener){let t=$t()?"touchstart":"click",i=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentClickListener=this.renderer.listen(i,t,o=>{this.dismissable&&(!this.container?.contains(o.target)&&this.target!==o.target&&!this.target.contains(o.target)&&!this.selfClick&&this.hide(),this.selfClick=!1,this.cd.markForCheck())})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null,this.selfClick=!1)}toggle(t,i){this.isOverlayAnimationInProgress||(this.overlayVisible?(this.hasTargetChanged(t,i)&&(this.destroyCallback=()=>{this.show(null,i||t.currentTarget||t.target)}),this.hide()):this.show(t,i))}show(t,i){i&&t&&t.stopPropagation(),!this.isOverlayAnimationInProgress&&(this.target=i||t.currentTarget||t.target,this.overlayVisible=!0,this.render=!0,this.cd.markForCheck())}onOverlayClick(t){this.overlayService.add({originalEvent:t,target:this.el.nativeElement}),this.selfClick=!0}onContentClick(t){let i=t.target;this.selfClick=t.offsetX<i.clientWidth&&t.offsetY<i.clientHeight}hasTargetChanged(t,i){return this.target!=null&&this.target!==(i||t.currentTarget||t.target)}appendContainer(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.container):V(this.appendTo,this.container))}restoreAppend(){this.container&&this.appendTo&&this.renderer.appendChild(this.el.nativeElement,this.container)}align(){this.autoZIndex&&O.set("overlay",this.container,this.baseZIndex+this.config.zIndex.overlay),Et(this.container,this.target,!1);let t=rt(this.container),i=rt(this.target),o=this.document.defaultView?.getComputedStyle(this.container).getPropertyValue("border-radius"),s=0;t.left<i.left&&(s=i.left-t.left-parseFloat(o)*2),this.container?.style.setProperty(Mt("popover.arrow.left").name,`${s}px`),t.top<i.top&&(this.container.setAttribute("data-p-popover-flipped","true"),Lt(this.container,"p-popover-flipped"))}onAnimationStart(t){t.toState==="open"&&(this.container=t.element,this.appendContainer(),this.align(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),this.focusOnShow&&this.focus(),this.overlayEventListener=i=>{this.container&&this.container.contains(i.target)&&(this.selfClick=!0)},this.overlaySubscription=this.overlayService.clickObservable.subscribe(this.overlayEventListener),this.onShow.emit(null)),this.isOverlayAnimationInProgress=!0}onAnimationEnd(t){switch(t.toState){case"void":this.destroyCallback&&(this.destroyCallback(),this.destroyCallback=null),this.overlaySubscription&&this.overlaySubscription.unsubscribe();break;case"close":this.autoZIndex&&O.clear(this.container),this.overlaySubscription&&this.overlaySubscription.unsubscribe(),this.onContainerDestroy(),this.onHide.emit({}),this.render=!1;break}this.isOverlayAnimationInProgress=!1}focus(){let t=A(this.container,"[autofocus]");t&&this.zone.runOutsideAngular(()=>{setTimeout(()=>t.focus(),5)})}hide(){this.overlayVisible=!1,this.cd.markForCheck()}onCloseClick(t){this.hide(),t.preventDefault()}onEscapeKeydown(t){this.hide()}onWindowResize(){this.overlayVisible&&!Dt()&&this.hide()}bindDocumentResizeListener(){if(M(this.platformId)&&!this.documentResizeListener){let t=this.document.defaultView;this.documentResizeListener=this.renderer.listen(t,"resize",this.onWindowResize.bind(this))}}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){M(this.platformId)&&(this.scrollHandler||(this.scrollHandler=new Q(this.target,()=>{this.overlayVisible&&this.hide()})),this.scrollHandler.bindScrollListener())}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}onContainerDestroy(){this.cd.destroyed||(this.target=null),this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener()}ngOnDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.container&&this.autoZIndex&&O.clear(this.container),this.cd.destroyed||(this.target=null),this.destroyCallback=null,this.container&&(this.restoreAppend(),this.onContainerDestroy()),this.overlaySubscription&&this.overlaySubscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=(()=>{let t;return function(o){return(t||(t=a(e)))(o||e)}})();static \u0275cmp=f({type:e,selectors:[["p-popover"]],contentQueries:function(i,o,s){if(i&1&&(tt(s,Zt,4),tt(s,_t,4)),i&2){let l;et(l=it())&&(o.contentTemplate=l.first),et(l=it())&&(o.templates=l)}},hostBindings:function(i,o){i&1&&W("keydown.escape",function(l){return o.onEscapeKeydown(l)},!1,dt)},inputs:{ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",dismissable:[2,"dismissable","dismissable",h],style:"style",styleClass:"styleClass",appendTo:"appendTo",autoZIndex:[2,"autoZIndex","autoZIndex",h],ariaCloseLabel:"ariaCloseLabel",baseZIndex:[2,"baseZIndex","baseZIndex",y],focusOnShow:[2,"focusOnShow","focusOnShow",h],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{onShow:"onShow",onHide:"onHide"},features:[v([zt]),d],ngContentSelectors:Gt,decls:1,vars:1,consts:[["role","dialog",3,"ngClass","ngStyle","class","click",4,"ngIf"],["role","dialog",3,"click","ngClass","ngStyle"],[1,"p-popover-content",3,"click","mousedown"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,o){i&1&&(P(),Z(0,qt,4,18,"div",0)),i&2&&$("ngIf",o.render)},dependencies:[_,vt,yt,Ct,bt,T],encapsulation:2,data:{animation:[wt("animation",[J("void",U({transform:"scaleY(0.8)",opacity:0})),J("close",U({opacity:0})),J("open",U({transform:"translateY(0)",opacity:1})),st("void => open",nt("{{showTransitionParams}}")),st("open => close",nt("{{hideTransitionParams}}"))])]},changeDetection:0})}return e})(),Ye=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=m({type:e});static \u0275inj=u({imports:[te,T,T]})}return e})();var ee=["*"],ie=({dt:e})=>`
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
`,oe={root:"p-iconfield"},Vt=(()=>{class e extends w{name="iconfield";theme=ie;classes=oe;static \u0275fac=(()=>{let t;return function(o){return(t||(t=a(e)))(o||e)}})();static \u0275prov=p({token:e,factory:e.\u0275fac})}return e})();var ne=(()=>{class e extends L{iconPosition="left";get _styleClass(){return this.styleClass}styleClass;_componentStyle=c(Vt);static \u0275fac=(()=>{let t;return function(o){return(t||(t=a(e)))(o||e)}})();static \u0275cmp=f({type:e,selectors:[["p-iconfield"],["p-iconField"],["p-icon-field"]],hostAttrs:[1,"p-iconfield"],hostVars:6,hostBindings:function(i,o){i&2&&(g(o._styleClass),G("p-iconfield-left",o.iconPosition==="left")("p-iconfield-right",o.iconPosition==="right"))},inputs:{iconPosition:"iconPosition",styleClass:"styleClass"},features:[v([Vt]),d],ngContentSelectors:ee,decls:1,vars:0,template:function(i,o){i&1&&(P(),k(0))},dependencies:[_],encapsulation:2,changeDetection:0})}return e})(),di=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=m({type:e});static \u0275inj=u({imports:[ne]})}return e})();var se=["*"],re={root:"p-inputicon"},At=(()=>{class e extends w{name="inputicon";classes=re;static \u0275fac=(()=>{let t;return function(o){return(t||(t=a(e)))(o||e)}})();static \u0275prov=p({token:e,factory:e.\u0275fac})}return e})(),ae=(()=>{class e extends L{styleClass;get hostClasses(){return this.styleClass}_componentStyle=c(At);static \u0275fac=(()=>{let t;return function(o){return(t||(t=a(e)))(o||e)}})();static \u0275cmp=f({type:e,selectors:[["p-inputicon"],["p-inputIcon"]],hostVars:4,hostBindings:function(i,o){i&2&&(g(o.hostClasses),G("p-inputicon",!0))},inputs:{styleClass:"styleClass"},features:[v([At]),d],ngContentSelectors:se,decls:1,vars:0,template:function(i,o){i&1&&(P(),k(0))},dependencies:[_,T],encapsulation:2,changeDetection:0})}return e})(),Ii=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=m({type:e});static \u0275inj=u({imports:[ae,T,T]})}return e})();export{$e as a,te as b,Ye as c,ne as d,di as e,ae as f,Ii as g,be as h,Ce as i,Bt as j};
