import './polyfills.server.mjs';
import{a as Q,d as X}from"./chunk-JT5C4GTW.mjs";import{a as ne,b as oe}from"./chunk-WJWWKD2M.mjs";import{d as re}from"./chunk-BLIVCY6P.mjs";import{N as ee,S as te,m as O,s as q,t as z,y as Y,z as J}from"./chunk-BNJ4LZ24.mjs";import{B as p,D as R,Ha as _,I as k,Jb as K,L as d,Lb as Z,N as D,Pa as j,Qb as G,R as y,U as N,W as C,_a as x,aa as F,ac as $,db as L,ea as W,eb as V,f as I,fb as B,j as v,k as A,n as a,oa as U,r as P,s as w,u as E,v as b,w as l,wa as T,x as h,xb as H}from"./chunk-HZLO2NHA.mjs";import{a as M}from"./chunk-VVCT4QZE.mjs";var ie=(()=>{class e{constructor(){this.title="online-exam"}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275cmp=F({type:e,selectors:[["app-root"]],standalone:!0,features:[H],decls:3,vars:3,consts:[[1,"container","vh-100","d-flex","align-items-center","justify-content-center"],["position","top-center",3,"showTransitionOptions","hideTransitionOptions","showTransformOptions"]],template:function(r,o){r&1&&(L(0,"div",0),B(1,"p-toast",1)(2,"router-outlet"),V()),r&2&&(_(),x("showTransitionOptions","500ms")("hideTransitionOptions","1000ms")("showTransformOptions","translatey(-100%)"))},dependencies:[ee,oe,ne]})}}return e})();var se=[{path:"",redirectTo:"auth",pathMatch:"full"},{path:"auth",loadComponent:()=>import("./chunk-YBJ372JS.mjs").then(e=>e.AuthComponent),children:[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",loadComponent:()=>import("./chunk-NQAKCEAO.mjs").then(e=>e.LoginComponent)},{path:"register",loadComponent:()=>import("./chunk-TXIHYM27.mjs").then(e=>e.RegisterComponent)},{path:"forget-password",loadComponent:()=>import("./chunk-RHGTNMHG.mjs").then(e=>e.ForgetPasswordComponent)},{path:"verify",loadComponent:()=>import("./chunk-ZD5LTK22.mjs").then(e=>e.VerifyComponent)},{path:"reset-password",loadComponent:()=>import("./chunk-DDI2QSGV.mjs").then(e=>e.SetPasswordComponent)}]},{path:"home",loadComponent:()=>import("./chunk-KJBKHFXA.mjs").then(e=>e.HomeComponent)}];var m="Service workers are disabled or not supported by this browser";function fe(e){return w(()=>A(new Error(e)))}var u=class{constructor(n){if(this.serviceWorker=n,!n)this.worker=this.events=this.registration=fe(m);else{let r=E(n,"controllerchange").pipe(a(()=>n.controller)),o=w(()=>v(n.controller)),s=P(o,r);this.worker=s.pipe(h(c=>!!c)),this.registration=this.worker.pipe(d(()=>n.getRegistration()));let S=E(n,"message").pipe(a(c=>c.data)).pipe(h(c=>c&&c.type)).pipe(k());S.connect(),this.events=S}}postMessage(n,t){return this.worker.pipe(p(1),D(r=>{r.postMessage(M({action:n},t))})).toPromise().then(()=>{})}postMessageWithOperation(n,t,r){let o=this.waitForOperationCompleted(r),s=this.postMessage(n,t);return Promise.all([s,o]).then(([,i])=>i)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(n){let t;return typeof n=="string"?t=r=>r.type===n:t=r=>n.includes(r.type),this.events.pipe(h(t))}nextEventOfType(n){return this.eventsOfType(n).pipe(p(1))}waitForOperationCompleted(n){return this.eventsOfType("OPERATION_COMPLETED").pipe(h(t=>t.nonce===n),p(1),a(t=>{if(t.result!==void 0)return t.result;throw new Error(t.error)})).toPromise()}get isEnabled(){return!!this.serviceWorker}},me=(()=>{class e{get isEnabled(){return this.sw.isEnabled}constructor(t){if(this.sw=t,this.pushManager=null,this.subscriptionChanges=new I,!t.isEnabled){this.messages=l,this.notificationClicks=l,this.subscription=l;return}this.messages=this.sw.eventsOfType("PUSH").pipe(a(o=>o.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(a(o=>o.data)),this.pushManager=this.sw.registration.pipe(a(o=>o.pushManager));let r=this.pushManager.pipe(d(o=>o.getSubscription()));this.subscription=b(r,this.subscriptionChanges)}requestSubscription(t){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(m));let r={userVisibleOnly:!0},o=this.decodeBase64(t.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),s=new Uint8Array(new ArrayBuffer(o.length));for(let i=0;i<o.length;i++)s[i]=o.charCodeAt(i);return r.applicationServerKey=s,this.pushManager.pipe(d(i=>i.subscribe(r)),p(1)).toPromise().then(i=>(this.subscriptionChanges.next(i),i))}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(m));let t=r=>{if(r===null)throw new Error("Not subscribed to push notifications.");return r.unsubscribe().then(o=>{if(!o)throw new Error("Unsubscribe failed!");this.subscriptionChanges.next(null)})};return this.subscription.pipe(p(1),d(t)).toPromise()}decodeBase64(t){return atob(t)}static{this.\u0275fac=function(r){return new(r||e)(C(u))}}static{this.\u0275prov=y({token:e,factory:e.\u0275fac})}}return e})(),ge=(()=>{class e{get isEnabled(){return this.sw.isEnabled}constructor(t){if(this.sw=t,!t.isEnabled){this.versionUpdates=l,this.unrecoverable=l;return}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(m));let t=this.sw.generateNonce();return this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:t},t)}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(m));let t=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:t},t)}static{this.\u0275fac=function(r){return new(r||e)(C(u))}}static{this.\u0275prov=y({token:e,factory:e.\u0275fac})}}return e})();var ae=new N("");function ve(e,n,t,r){return()=>{if(!(O(r)&&"serviceWorker"in navigator&&t.enabled!==!1))return;navigator.serviceWorker.addEventListener("controllerchange",()=>{navigator.serviceWorker.controller!==null&&navigator.serviceWorker.controller.postMessage({action:"INITIALIZE"})});let o;if(typeof t.registrationStrategy=="function")o=t.registrationStrategy();else{let[i,...g]=(t.registrationStrategy||"registerWhenStable:30000").split(":");switch(i){case"registerImmediately":o=v(null);break;case"registerWithDelay":o=pe(+g[0]||0);break;case"registerWhenStable":o=g[0]?b(ce(e),pe(+g[0])):ce(e);break;default:throw new Error(`Unknown ServiceWorker registration strategy: ${t.registrationStrategy}`)}}e.get(j).runOutsideAngular(()=>o.pipe(p(1)).subscribe(()=>navigator.serviceWorker.register(n,{scope:t.scope}).catch(i=>console.error("Service worker registration failed with:",i))))}}function pe(e){return v(null).pipe(R(e))}function ce(e){return e.get(Z).isStable.pipe(h(t=>t))}function we(e,n){return new u(O(n)&&e.enabled!==!1?navigator.serviceWorker:void 0)}var f=class{};function le(e,n={}){return W([me,ge,{provide:ae,useValue:e},{provide:f,useValue:n},{provide:u,useFactory:we,deps:[f,T]},{provide:K,useFactory:ve,deps:[U,ae,f,T],multi:!0}])}var he={providers:[te(se),re,J(),q(z()),le("ngsw-worker.js",{enabled:!G(),registrationStrategy:"registerWhenStable:30000"}),Q()]};var Ee={providers:[X()]},ue=$(he,Ee);var be=()=>Y(ie,ue),Xe=be;export{Xe as a};
