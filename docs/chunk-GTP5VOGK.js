import{C as S,F as D,G as I,H as g,I as w,K as y,a as m,k as u,ka as z,ma as E,n as d,na as k,o as c,oa as C,p as f,pa as x,qa as T,u as l,v,w as n,x as a,y as h}from"./chunk-ZWY6K752.js";var $=(i,t)=>t.gif;function q(i,t){if(i&1&&(n(0,"div",2),h(1,"app-card",3),a()),i&2){let p=t.$implicit;d(1),f("src",p.gif)("describe",p.word)}}var G=(()=>{let t=class t{constructor(r,e){this.quizService=r,this.route=e,this.taskId=+this.route.snapshot.params.id,this.data$=new m([])}ngOnInit(){this.createTest()}createTest(){let r=this.quizService.existsInStore(this.taskId),e;r?e=this.quizService.getFromStore(this.taskId):(e=x.map(o=>({gif:C.find(s=>s.id==o.gifId).value,word:k.find(s=>s.id==o.wordId).value})),this.quizService.setInStore(this.taskId,e)),this.data$.next(e)}};t.\u0275fac=function(e){return new(e||t)(c(T),c(y))},t.\u0275cmp=u({type:t,selectors:[["app-recognize"]],standalone:!0,features:[D],decls:7,vars:2,consts:[[1,"task"],[1,"list-row"],[1,"cell"],[3,"src","describe"],["class","cell"]],template:function(e,o){e&1&&(n(0,"div",0)(1,"h1"),S(2,"\u10D3\u10D0\u10D8\u10DB\u10D0\u10EE\u10E1\u10DD\u10D5\u10E0\u10D4"),a(),n(3,"div",1),l(4,q,2,2,"div",4,$),I(6,"async"),a()()),e&2&&(d(4),v(g(6,0,o.data$)))},dependencies:[E,z,w]});let i=t;return i})();export{G as RecognizeComponent};
