import{$ as X,A as b,B as u,C as j,D as T,E as M,F as $,G as A,H as F,I as V,K as W,L as G,M as Q,R as L,T as k,X as K,Y as H,Z as J,_ as U,a as E,aa as Y,b as P,ba as Z,c as l,d as I,da as tt,e as g,ea as et,fa as y,g as v,h,i as B,j as x,ja as it,k as w,l as R,m as f,n as S,o as N,q as D,r as O,v as a,w as m,x as _,y as q,z as C}from"./chunk-KAUGAJXA.js";var o=function(t){return t.Recognize="recognize",t.EnterAnswer="enter-answer",t.ChooseWord="choose-word",t.ChooseGesture="choose-gesture",t.Repeat="repeat",t.Connect="connect",t}(o||{});var nt=[{path:"",redirectTo:"1",pathMatch:"full"},{path:`${o.Recognize}/:id`,loadComponent:()=>import("./chunk-B6A2FPO2.js").then(t=>t.RecognizeComponent)},{path:`${o.EnterAnswer}/:id`,loadComponent:()=>import("./chunk-AKTPVJYA.js").then(t=>t.EnterAnswerComponent)},{path:`${o.ChooseWord}/:id`,loadComponent:()=>import("./chunk-IOFM3ECE.js").then(t=>t.ChooseWordComponent)},{path:`${o.ChooseGesture}/:id`,loadComponent:()=>import("./chunk-BUSC24YI.js").then(t=>t.ChooseGestureComponent)},{path:`${o.Repeat}/:id`,loadComponent:()=>import("./chunk-UUGYDDIO.js").then(t=>t.RepeatComponent)},{path:`${o.Connect}/:id`,loadComponent:()=>import("./chunk-F5Q7RULF.js").then(t=>t.ConnectComponent)}];var ot={providers:[Q(nt),L()]};var rt=[{count:1,route:o.Recognize},{count:1,route:o.Connect},{count:2,route:o.EnterAnswer},{count:2,route:o.ChooseWord},{count:2,route:o.ChooseGesture},{count:2,route:o.Repeat}];var at=(()=>{let n=class n{constructor(){this.snackBarRef=B(H),this.data=B(J)}};n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=x({type:n,selectors:[["snack-bar-annotated-component-example-snack"]],standalone:!0,features:[M],decls:6,vars:1,consts:[["matSnackBarLabel","",1,"example-pizza-party"],["matSnackBarActions",""],["mat-button","","matSnackBarAction","",3,"click"]],template:function(i,c){i&1&&(a(0,"span",0),u(1),m(),a(2,"span",1)(3,"button",2),C("click",function(){return c.snackBarRef.dismissWithAction()}),a(4,"mat-icon"),u(5,"close"),m()()()),i&2&&(f(1),j(c.data))},dependencies:[y,k,K,U,X,Y],styles:["[_nghost-%COMP%]{display:flex}.example-pizza-party[_ngcontent-%COMP%]{color:#ff69b4}"]});let t=n;return t})();function ut(t,n){if(t&1){let d=q();a(0,"div",1)(1,"div",2),_(2,"mat-progress-bar",3),$(3,"async"),a(4,"p"),u(5),$(6,"async"),m()(),a(7,"div",4),_(8,"router-outlet"),m(),a(9,"div",5)(10,"div",6)(11,"button",7),C("click",function(){w(d);let i=b();return R(i.onPrev())}),u(12,"\u10E3\u10D9\u10D0\u10DC"),m()(),a(13,"div",8)(14,"button",9),C("click",function(){w(d);let i=b();return R(i.onNext())}),u(15," \u10E8\u10D4\u10DB\u10D3\u10D4\u10D2\u10D8 "),m()()()()}if(t&2){let d=b();f(2),N("value",A(3,2,d.progess$)),f(3),T("",A(6,4,d.lives$),"/5")}}function lt(t,n){t&1&&_(0,"mat-spinner")}var pt=(()=>{let n=class n{constructor(p,i,c){this.quizService=p,this.router=i,this.matSnackbar=c,this.tasks$=this.quizService.tasks$,this.lives$=this.quizService.lives$,this.currentRoute$=this.tasks$.pipe(l(r=>r[0])),this.showSpinner$=this.tasks$.pipe(l(r=>r.length)),this.progess$=new E(0),this.generateQuiz=()=>this.quizService.generateQuiz(rt),this.onNext=()=>this.navigate(!0),this.onPrev=()=>this.navigate(!1),this.navigate=r=>this.tasks$.pipe(v(1),I(s=>this.currentRoute$.pipe(v(1),l(e=>s.findIndex(z=>z.id==e.id)),g(e=>r?s[s.length-1].id!=s[e].id:!0),g(e=>this.handleNavigationNext(r,s,e)),l(e=>s[e+(r?1:-1)]),g(e=>!!e),h(e=>this.router.navigate([e.route+`/${e.id}`])),h(e=>this.currentRoute$=P(e)),l(e=>s.findIndex(z=>z.id==e.id)),h(e=>this.progess$.next(e/s.length*100+s.length))))).subscribe(),this.initNavigation=()=>this.tasks$.pipe(v(1),h(r=>this.router.navigate([r[0].route+`/${r[0].id}`]))).subscribe()}ngOnInit(){this.initNavigation(),this.generateQuiz()}handleNavigationNext(p,i,c){return!p||this.quizService.existsInStore(i[c].id)?!0:(this.matSnackbar.openFromComponent(at,{data:"\u10E8\u10D4\u10D8\u10E7\u10D5\u10D0\u10DC\u10D4\u10D7 \u10DE\u10D0\u10E1\u10E3\u10EE\u10D8",duration:2e3}),!1)}};n.\u0275fac=function(i){return new(i||n)(S(it),S(G),S(Z))},n.\u0275cmp=x({type:n,selectors:[["app-root"]],standalone:!0,features:[M],decls:3,vars:3,consts:[["class","app"],[1,"app"],[1,"top-bar"],["mode","determinate",1,"box-shadow",3,"value"],[1,"test"],[1,"navigation"],[1,"previous"],["mat-raised-button","",3,"click"],[1,"next"],["mat-raised-button","","color","primary",3,"click"]],template:function(i,c){i&1&&(D(0,ut,16,6,"div",0),$(1,"async"),D(2,lt,1,0)),i&2&&O(0,A(1,1,c.showSpinner$)?0:2)},dependencies:[W,y,k,tt,et,F],styles:[".app[_ngcontent-%COMP%]{padding:40px}.navigation[_ngcontent-%COMP%]{display:flex;justify-content:end;align-items:center;gap:15px;margin:50px}.test[_ngcontent-%COMP%]{min-height:450px}.top-bar[_ngcontent-%COMP%]{display:flex;gap:50px}"]});let t=n;return t})();V(pt,ot).catch(t=>console.error(t));
