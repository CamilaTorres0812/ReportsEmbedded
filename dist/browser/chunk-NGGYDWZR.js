import{a as oe}from"./chunk-4FRYFY54.js";import{b as ne,c as re,e as pe,f as se,g as fe}from"./chunk-VPOEWBWB.js";import{b as ie,c as le}from"./chunk-XJMN3SLQ.js";import{a as X,b as Q,c as Z,d as ee}from"./chunk-PWFDMVFT.js";import{a as te,b as ae}from"./chunk-QXI5W3E2.js";import"./chunk-UAF4RMYB.js";import{$a as Y,Ba as R,Ea as K,Ha as L,Ia as _,Pa as G,Ra as O,Ta as U,Ua as g,Wa as A,Xa as J,Za as V,_a as W,ab as q,bb as z,cb as H,k as E,m as P,pa as B,s as j,ua as b}from"./chunk-Y7WV5QTW.js";import"./chunk-S35HUXPS.js";import{$ as v,$a as F,Ab as N,Bb as T,Jb as p,Ka as f,L as S,M as y,Pa as s,Qb as c,R as I,Rb as $,Wa as m,Xa as M,Za as x,hb as u,jb as C,kb as w,rb as o,sb as l,tb as r,uc as k,yb as D,zc as d}from"./chunk-3PM7GAU5.js";import"./chunk-UVUYC35V.js";var be=["*"],ge=({dt:e})=>`
.p-floatlabel {
    display: block;
    position: relative;
}

.p-floatlabel label {
    position: absolute;
    pointer-events: none;
    top: 50%;
    transform: translateY(-50%);
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
    font-weight: ${e("floatlabel.font.weight")};
    inset-inline-start: ${e("floatlabel.position.x")};
    color: ${e("floatlabel.color")};
    transition-duration: ${e("floatlabel.transition.duration")};
}

.p-floatlabel:has(.p-textarea) label {
    top: ${e("floatlabel.position.y")};
    transform: translateY(0);
}

.p-floatlabel:has(.p-inputicon:first-child) label {
    inset-inline-start: calc((${e("form.field.padding.x")} * 2) + ${e("icon.size")});
}

.p-floatlabel:has(.ng-invalid.ng-dirty) label {
    color: ${e("floatlabel.invalid.color")};
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-focus) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    top: ${e("floatlabel.over.active.top")};
    transform: translateY(0);
    font-size: ${e("floatlabel.active.font.size")};
    font-weight: ${e("floatlabel.label.active.font.weight")};
}

.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    color: ${e("floatlabel.active.color")};
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label,
.p-floatlabel:has(.p-inputwrapper-focus) label {
    color: ${e("floatlabel.focus.color")};
}

.p-floatlabel-in .p-inputtext,
.p-floatlabel-in .p-textarea,
.p-floatlabel-in .p-select-label,
.p-floatlabel-in .p-multiselect-label-container,
.p-floatlabel-in .p-autocomplete-input-multiple,
.p-floatlabel-in .p-cascadeselect-label,
.p-floatlabel-in .p-treeselect-label {
    padding-top: ${e("floatlabel.in.input.padding.top")};
}

.p-floatlabel-in:has(input:focus) label,
.p-floatlabel-in:has(input.p-filled) label,
.p-floatlabel-in:has(input:-webkit-autofill) label,
.p-floatlabel-in:has(textarea:focus) label,
.p-floatlabel-in:has(textarea.p-filled) label,
.p-floatlabel-in:has(.p-inputwrapper-focus) label,
.p-floatlabel-in:has(.p-inputwrapper-filled) label {
    top: ${e("floatlabel.in.active.top")};
}

.p-floatlabel-on:has(input:focus) label,
.p-floatlabel-on:has(input.p-filled) label,
.p-floatlabel-on:has(input:-webkit-autofill) label,
.p-floatlabel-on:has(textarea:focus) label,
.p-floatlabel-on:has(textarea.p-filled) label,
.p-floatlabel-on:has(.p-inputwrapper-focus) label,
.p-floatlabel-on:has(.p-inputwrapper-filled) label {
    top: 0;
    transform: translateY(-50%);
    border-radius: ${e("floatlabel.on.border.radius")};
    background: ${e("floatlabel.on.active.background")};
    padding: ${e("floatlabel.on.active.padding")};
}
`,ve={root:({instance:e,props:i})=>["p-floatlabel",{"p-floatlabel-over":i.variant==="over","p-floatlabel-on":i.variant==="on","p-floatlabel-in":i.variant==="in"}]},ue=(()=>{class e extends R{name="floatlabel";theme=ge;classes=ve;static \u0275fac=(()=>{let a;return function(n){return(a||(a=v(e)))(n||e)}})();static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();var h=(()=>{class e extends K{_componentStyle=I(ue);variant="over";static \u0275fac=(()=>{let a;return function(n){return(a||(a=v(e)))(n||e)}})();static \u0275cmp=m({type:e,selectors:[["p-floatlabel"],["p-floatLabel"],["p-float-label"]],hostVars:8,hostBindings:function(t,n){t&2&&C("p-floatlabel",!0)("p-floatlabel-over",n.variant==="over")("p-floatlabel-on",n.variant==="on")("p-floatlabel-in",n.variant==="in")},inputs:{variant:"variant"},features:[c([ue]),x],ngContentSelectors:be,decls:1,vars:0,template:function(t,n){t&1&&(N(),T(0))},dependencies:[d,b],encapsulation:2,changeDetection:0})}return e})(),me=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=M({type:e});static \u0275inj=y({imports:[h,b,b]})}return e})();var Se=()=>({backgroundImage:"url(./images/pages/login-bg.jpg)"});function ye(e,i){e&1&&(o(0,"p-message",20),p(1,"Credenciales inv\xE1lidas"),l())}var ce=class e{constructor(i,a,t,n,Ie){this.fb=i;this.router=a;this.personasService=t;this.sessionService=n;this.route=Ie;this.typeTRX=1,this.showPass=!1,this.typePass="password",this.loginKatiosForm=this.fb.group({idKatios:["",g.required],User:["",g.required],Pass:["",g.required],TipoAuth:[this.typeTRX]})}loginKatiosForm;showPass;typePass;typeTRX;usuarioLogueadoBD;invalidCredentials=!1;loading=!1;ngOnInit(){let i=this.route.snapshot.paramMap.get("idKatios"),a=this.route.snapshot.paramMap.get("token");i&&a&&this.loginWithToken(i,a)}login(){this.loading=!0,this.personasService.loginTCI(this.loginKatiosForm.value.idKatios,this.loginKatiosForm.value).subscribe(i=>{this.sessionService.setDataUserM3SinHubM3(i),this.router.navigateByUrl("/admin"),this.cargaInicial()},i=>{i.status===400&&(this.invalidCredentials=!0),console.error(i),this.loading=!1})}cargaInicial(){let i=ie,a=sessionStorage.getItem("ConfigJSON");if(a){let t=JSON.parse(a);t.ServidorPersonas&&(i=t)}else sessionStorage.setItem("ConfigJSON",JSON.stringify(i))}loginWithToken(i,a){this.personasService.loginTCIToken(i,a).subscribe(t=>{this.sessionService.setDataUserM3SinHubM3(t),this.router.navigateByUrl("/admin")},t=>{console.error(t)})}static \u0275fac=function(a){return new(a||e)(s(q),s(P),s(oe),s(le),s(E))};static \u0275cmp=m({type:e,selectors:[["app-login"]],features:[c([B])],decls:32,vars:10,consts:[[1,"min-h-screen","flex","flex-col","bg-cover"],[1,"self-center","mt-auto","mb-auto"],[1,"text-center"],[1,"pages-header","px-3","py-1","text-3xl","font-bold","mb-3"],[1,"text-2xl","font-semibold","mt-2"],["variant","outlined","severity","error","icon","pi pi-times-circle","styleClass","mb-2",4,"ngIf"],["autocomplete","off",1,"flex","flex-col","gap-4","px-3","input-panel","mt-3",3,"ngSubmit","formGroup"],[1,"pi","pi-briefcase"],["variant","on"],["pInputText","","id","idKatios","formControlName","idKatios"],["for","idKatios"],[1,"mt-3"],[1,"pi","pi-user"],["pInputText","","id","user","formControlName","User"],["for","user"],[1,"mt-3","mb-3"],[1,"pi","pi-lock"],["type","password","id","password","pInputText","","formControlName","Pass",3,"type"],["for","password"],["pButton","","pRipple","","type","submit","severity","success",1,"w-full",3,"label","disabled","raised","loading"],["variant","outlined","severity","error","icon","pi pi-times-circle","styleClass","mb-2"]],template:function(a,t){a&1&&(o(0,"div",0)(1,"div",1)(2,"p-card",2)(3,"div",3)(4,"h2"),p(5,"Reports Embedded"),l()(),o(6,"span",4),p(7,"Bienvenido"),l(),F(8,ye,2,0,"p-message",5),o(9,"form",6),D("ngSubmit",function(){return t.login()}),o(10,"p-inputgroup")(11,"p-inputgroup-addon"),r(12,"i",7),l(),o(13,"p-floatlabel",8),r(14,"input",9),o(15,"label",10),p(16,"IdKatios"),l()()(),o(17,"p-inputgroup",11)(18,"p-inputgroup-addon"),r(19,"i",12),l(),o(20,"p-floatlabel",8),r(21,"input",13),o(22,"label",14),p(23,"Usuario"),l()()(),o(24,"p-inputgroup",15)(25,"p-inputgroup-addon"),r(26,"i",16),l(),o(27,"p-floatlabel",8),r(28,"input",17),o(29,"label",18),p(30,"Contrase\xF1a"),l()()(),r(31,"button",19),l()()()()),a&2&&(w($(9,Se)),f(8),u("ngIf",t.invalidCredentials),f(),u("formGroup",t.loginKatiosForm),f(19),u("type",t.typePass),f(3),u("label",t.loading?"Entrando...":"Iniciar Sesi\xF3n")("disabled",!t.loginKatiosForm.valid)("raised",!0)("loading",t.loading))},dependencies:[O,G,pe,ae,te,z,V,U,A,J,j,_,L,H,W,Y,Q,X,ee,Z,me,h,re,ne,d,k,fe,se],styles:['.pages-header[_ngcontent-%COMP%]{background:#0097a7;margin-top:-3rem;color:var(--primary-color-text);border:1.5px solid #E4E4E4;border-radius:4px;margin-left:auto;margin-right:auto}.input-panel[_ngcontent-%COMP%]{width:"100%"}']})};export{ce as Login};
