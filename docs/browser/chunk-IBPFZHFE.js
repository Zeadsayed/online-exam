import{a as O,b as B}from"./chunk-PEONLE7D.js";import"./chunk-MQ2HQP63.js";import{a as D,b as q,c as R,d as V,e as j}from"./chunk-SEGRH3AH.js";import"./chunk-D6GV4WKX.js";import{b as T,c as f,d as E,e as M,f as I,g as P,i as N,j as A,k as L,l as k,m as G}from"./chunk-2DU57IS5.js";import{c as w,e as y,h as b,q as x,y as p}from"./chunk-OIVN5BXV.js";import{$ as m,Bb as C,Ja as o,Ka as v,_a as d,ab as r,ea as g,fb as s,gb as n,hb as u,mb as h,nb as _,vb as l,yb as S,zb as F}from"./chunk-LT4NTUAE.js";var z=e=>({"ng-invalid ng-dirty":e});function H(e,c){e&1&&(s(0,"small",9),l(1,"Email is required."),n())}function J(e,c){e&1&&(s(0,"small",9),l(1,"Invalid email address."),n())}function K(e,c){if(e&1&&(s(0,"div",7),d(1,H,2,0,"small",8)(2,J,2,0,"small",8),n()),e&2){let t=_();o(),r("ngIf",t.f.email.errors==null?null:t.f.email.errors.required),o(),r("ngIf",t.f.email.errors==null?null:t.f.email.errors.email)}}var de=(()=>{class e{constructor(t){this.messageService=t,this._AuthApiService=m(D),this._router=m(x),this._toastService=m(j),this.isLoading=!1,this.isSubmitted=!1,this.forgetForm=new I({email:new P(null,[f.required,f.email])})}get f(){return this.forgetForm.controls}submit(){if(this.isSubmitted=!0,this.forgetForm.invalid){this._toastService.showToast("Please Fill Form","warn");return}this.isLoading=!0,this._AuthApiService.forgotPassword(this.forgetForm.value).subscribe({next:()=>{this.isLoading=!1,this._toastService.showToast("Code is Sent Successfully","success"),this._router.navigate(["/auth/verify"])},error:t=>{this.isLoading=!1,this._toastService.showToast(t.error.message,"error")}})}static{this.\u0275fac=function(a){return new(a||e)(v(p))}}static{this.\u0275cmp=g({type:e,selectors:[["app-forget-password"]],standalone:!0,features:[S([p]),F],decls:9,vars:9,consts:[[3,"formGroup"],[1,"mb-5","fw-bold"],[1,"group"],["type","email","id","inputtext","pInputText","","formControlName","email","placeholder","Enter Email",1,"w-100",3,"ngClass"],["class","text-danger",4,"ngIf"],[1,"mt-5"],[3,"clickEmitter","text","isLoading","classes","type"],[1,"text-danger"],["class","p-error block",4,"ngIf"],[1,"p-error","block"]],template:function(a,i){a&1&&(u(0,"p-toast"),s(1,"form",0)(2,"h3",1),l(3,"Forgot your password?"),n(),s(4,"div",2),u(5,"input",3),d(6,K,3,2,"div",4),n(),s(7,"div",5)(8,"app-main-btn",6),h("clickEmitter",function(){return i.submit()}),n()()()),a&2&&(o(),r("formGroup",i.forgetForm),o(4),r("ngClass",C(7,z,i.f.email.invalid&&(i.f.email.touched||i.isSubmitted))),o(),r("ngIf",(i.f.email.touched||i.isSubmitted)&&i.f.email.invalid),o(2),r("text","Reset")("isLoading",i.isLoading)("classes","rounded-4 w-100")("type","submit"))},dependencies:[k,N,T,E,M,G,A,L,R,q,V,B,O,b,w,y],styles:[".group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{box-shadow:#959da533 0 8px 24px}"]})}}return e})();export{de as ForgetPasswordComponent};
