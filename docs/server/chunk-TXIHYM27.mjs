import './polyfills.server.mjs';
import{a as Z,b as B}from"./chunk-QBZSTHDM.mjs";import"./chunk-PZ7OMX4K.mjs";import{a as P,b as F}from"./chunk-WJWWKD2M.mjs";import"./chunk-TRMP2QUV.mjs";import{a as j,b as U,c as V,d as $,e as z}from"./chunk-CH7ITGSV.mjs";import"./chunk-NFD4YNLC.mjs";import{b as R,c as l,d as q,e as M,f as L,g as c,i as k,j as A,k as G,l as D,m as O}from"./chunk-TXIPOYUB.mjs";import{d as h}from"./chunk-BLIVCY6P.mjs";import{P as b,Q as E,f as N,h as T,k as I}from"./chunk-BNJ4LZ24.mjs";import{Ha as r,Ia as w,X as _,Ya as m,_a as n,aa as C,db as a,eb as o,fb as p,kb as S,lb as u,tb as d,wb as y,xb as x,zb as f}from"./chunk-HZLO2NHA.mjs";import"./chunk-VVCT4QZE.mjs";var g=e=>({"ng-invalid ng-dirty":e});function H(e,s){e&1&&(a(0,"small",18),d(1,"User Name is required."),o())}function J(e,s){if(e&1&&(a(0,"div",17),m(1,H,2,0,"small",13),o()),e&2){let i=u();r(),n("ngIf",i.f.username.errors==null?null:i.f.username.errors.required)}}function K(e,s){e&1&&(a(0,"small",18),d(1,"First Name is required."),o())}function Q(e,s){if(e&1&&(a(0,"div",17),m(1,K,2,0,"small",13),o()),e&2){let i=u();r(),n("ngIf",i.f.firstName.errors==null?null:i.f.firstName.errors.required)}}function W(e,s){e&1&&(a(0,"small",18),d(1,"Last Name is required."),o())}function X(e,s){if(e&1&&(a(0,"div",17),m(1,W,2,0,"small",13),o()),e&2){let i=u();r(),n("ngIf",i.f.lastName.errors==null?null:i.f.lastName.errors.required)}}function Y(e,s){e&1&&(a(0,"small",18),d(1,"Email is required."),o())}function ee(e,s){e&1&&(a(0,"small",18),d(1,"Invalid email address."),o())}function te(e,s){if(e&1&&(a(0,"div",17),m(1,Y,2,0,"small",13)(2,ee,2,0,"small",13),o()),e&2){let i=u();r(),n("ngIf",i.f.email.errors==null?null:i.f.email.errors.required),r(),n("ngIf",i.f.email.errors==null?null:i.f.email.errors.email)}}function ie(e,s){e&1&&(a(0,"small",18),d(1,"phone is required."),o())}function re(e,s){if(e&1&&(a(0,"div",17),m(1,ie,2,0,"small",13),o()),e&2){let i=u();r(),n("ngIf",i.f.phone.errors==null?null:i.f.phone.errors.required)}}function ne(e,s){e&1&&(a(0,"small",18),d(1,"Password is required."),o())}function ae(e,s){e&1&&(a(0,"small",18),d(1,"Invalid password ."),o())}function oe(e,s){if(e&1&&(a(0,"div",17),m(1,ne,2,0,"small",13)(2,ae,2,0,"small",13),o()),e&2){let i=u();r(),n("ngIf",i.f.password.errors==null?null:i.f.password.errors.required),r(),n("ngIf",i.f.password.errors==null?null:i.f.password.errors.password)}}function se(e,s){e&1&&(a(0,"small",18),d(1,"Password is required."),o())}function le(e,s){e&1&&(a(0,"small",18),d(1,"Invalid Password "),o())}function me(e,s){if(e&1&&(a(0,"div",17),m(1,se,2,0,"small",13)(2,le,2,0,"small",13),o()),e&2){let i=u();r(),n("ngIf",i.f.rePassword.errors==null?null:i.f.rePassword.errors.required),r(),n("ngIf",i.f.rePassword.errors==null?null:i.f.rePassword.errors.rePassword)}}function de(e,s){e&1&&(a(0,"small",18),d(1,"Password Not Match"),o())}var Re=(()=>{class e{constructor(i){this.messageService=i,this._AuthApiService=_(j),this._router=_(b),this._toastService=_(z),this.isLoading=!1,this.isSubmitted=!1,this.registerForm=new L({firstName:new c(null,[l.required]),lastName:new c(null,[l.required]),username:new c(null,[l.required,l.minLength(4),l.maxLength(25)]),email:new c(null,[l.required,l.email]),password:new c(null,[l.required,l.minLength(6),l.pattern(/^(?=.*[A-Z])(?=.*\d).{6,}$/)]),rePassword:new c(null,[l.required,l.minLength(6),l.minLength(6),l.pattern(/^(?=.*[A-Z])(?=.*\d).{6,}$/)]),phone:new c(null,[l.required,l.pattern(/^01[0125][0-9]{8}$/)])})}get f(){return this.registerForm.controls}register(){if(this.isSubmitted=!0,this.registerForm.invalid){this._toastService.showToast("Please Fill Form","warn");return}this.isLoading=!0,this._AuthApiService.register(this.registerForm.value).subscribe({next:()=>{this.isLoading=!1,this._toastService.showToast("Created Successfully","success"),this._router.navigate(["/auth/login"])},error:i=>{this.isLoading=!1,this._toastService.showToast(i.error.message,"error")}})}static{this.\u0275fac=function(v){return new(v||e)(w(h))}}static{this.\u0275cmp=C({type:e,selectors:[["app-register"]],standalone:!0,features:[y([h]),x],decls:31,vars:38,consts:[[1,"",3,"formGroup"],[1,"mb-4","fw-bold"],[1,"group"],["type","text","id","inputtext","pInputText","","formControlName","username","placeholder","User Name",1,"w-100",3,"ngClass"],["class","text-danger",4,"ngIf"],[1,"my-3"],["type","text","id","inputtext","pInputText","","formControlName","firstName","placeholder","First Name",1,"w-100",3,"ngClass"],["type","text","id","inputtext","pInputText","","formControlName","lastName","placeholder","Last Name",1,"w-100",3,"ngClass"],["type","email","id","inputtext","pInputText","","formControlName","email","placeholder","Email",1,"w-100",3,"ngClass"],["type","text","id","inputtext","pInputText","","formControlName","phone","placeholder","Phone",1,"w-100",3,"ngClass"],["formControlName","password","placeholder","Password",1,"pass",3,"feedback","toggleMask","ngClass"],[1,""],["formControlName","rePassword","placeholder","Confirm Password",3,"feedback","toggleMask","ngClass"],["class","p-error block",4,"ngIf"],[1,"mt-2","d-flex","justify-content-end"],["routerLink","/auth/login",1,"text-decoration-none"],[3,"clickEmitter","text","isLoading","classes","type"],[1,"text-danger"],[1,"p-error","block"]],template:function(v,t){v&1&&(p(0,"p-toast"),a(1,"form",0)(2,"h3",1),d(3,"Sign Up"),o(),a(4,"div",2),p(5,"input",3),m(6,J,2,1,"div",4),a(7,"div",5),p(8,"input",6),m(9,Q,2,1,"div",4),o(),p(10,"input",7),m(11,X,2,1,"div",4),a(12,"div",5),p(13,"input",8),m(14,te,3,2,"div",4),o(),p(15,"input",9),m(16,re,2,1,"div",4),a(17,"div",5),p(18,"p-password",10),m(19,oe,3,2,"div",4),o(),a(20,"div",11),p(21,"p-password",12),m(22,me,3,2,"div",4)(23,de,2,0,"small",13),o()(),a(24,"div",14)(25,"span"),d(26,"Already have an account? "),a(27,"a",15),d(28,"Login"),o()()(),a(29,"div",5)(30,"app-main-btn",16),S("clickEmitter",function(){return t.register()}),o()()()),v&2&&(r(),n("formGroup",t.registerForm),r(4),n("ngClass",f(24,g,t.f.username.invalid&&(t.f.username.touched||t.isSubmitted))),r(),n("ngIf",(t.f.username.touched||t.isSubmitted)&&t.f.username.invalid),r(2),n("ngClass",f(26,g,t.f.firstName.invalid&&(t.f.firstName.touched||t.isSubmitted))),r(),n("ngIf",(t.f.firstName.touched||t.isSubmitted)&&t.f.firstName.invalid),r(),n("ngClass",f(28,g,t.f.lastName.invalid&&(t.f.lastName.touched||t.isSubmitted))),r(),n("ngIf",(t.f.lastName.touched||t.isSubmitted)&&t.f.lastName.invalid),r(2),n("ngClass",f(30,g,t.f.email.invalid&&(t.f.email.touched||t.isSubmitted))),r(),n("ngIf",(t.f.email.touched||t.isSubmitted)&&t.f.email.invalid),r(),n("ngClass",f(32,g,t.f.phone.invalid&&(t.f.phone.touched||t.isSubmitted))),r(),n("ngIf",(t.f.phone.touched||t.isSubmitted)&&t.f.phone.invalid),r(2),n("feedback",!1)("toggleMask",!0)("ngClass",f(34,g,t.f.password.invalid&&(t.f.password.touched||t.isSubmitted))),r(),n("ngIf",(t.f.password.touched||t.isSubmitted)&&t.f.password.invalid),r(2),n("feedback",!1)("toggleMask",!0)("ngClass",f(36,g,t.f.rePassword.invalid&&(t.f.rePassword.touched||t.isSubmitted))),r(),n("ngIf",(t.f.rePassword.touched||t.isSubmitted)&&t.f.rePassword.invalid),r(),n("ngIf",t.f.rePassword.touched&&t.f.rePassword.value!=t.f.password.value),r(7),n("text","Create Account")("isLoading",t.isLoading)("classes","rounded-4 w-100")("type","submit"))},dependencies:[D,k,R,q,M,O,A,G,V,U,$,E,F,P,I,N,T,B,Z],styles:["[_nghost-%COMP%]  .p-password{width:100%!important}[_nghost-%COMP%]  .p-input-icon-right>.p-inputtext{width:100%!important;box-shadow:#959da533 0 8px 24px}.group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{box-shadow:#959da533 0 8px 24px}"]})}}return e})();export{Re as RegisterComponent};