import{A as _,B as h,C as l,D as C,F as D,K as z,k as p,ka as k,l as f,m as v,ma as q,n as a,o as u,p as S,qa as y,t as x,u as w,v as g,w as o,x as n,z as I}from"./chunk-ZWY6K752.js";function E(s,t){if(s&1){let d=I();o(0,"div",4)(1,"app-card",5),_("clicked",function(e){let c=f(d).$index,m=h();return v(m.onSelect(e,c))}),n()()}if(s&2){let d=t.$implicit,i=t.$index,e=h();a(1),S("src",d.value)("state",i===e.answeredsIdx?e.state:"")("disabled",e.answeredsIdx!=null)}}var B=(()=>{let t=class t{constructor(i,e){this.quizService=i,this.route=e,this.taskId=+this.route.snapshot.params.id,this.initialize()}onSelect(i,e){this.answeredsIdx=e;let r=this.quizService.getGifByValue(i);r&&this.quizService.isRight(this.word,r)&&(this.state="correct"),this.state!="correct"&&(this.state="incorrect",this.quizService.decrementLives());let c={state:this.state,answeredsIdx:this.answeredsIdx,word:this.word,gifs:this.gifs};this.quizService.setInStore(this.taskId,c)}initialize(){if(this.quizService.existsInStore(this.taskId)){let e=this.quizService.getFromStore(this.taskId);this.word=e.word,this.gifs=e.gifs,this.state=e.state,this.answeredsIdx=e.answeredsIdx}else this.word=this.quizService.getRandomWord(),this.gifs=this.quizService.getFourGif()}};t.\u0275fac=function(e){return new(e||t)(u(y),u(z))},t.\u0275cmp=p({type:t,selectors:[["app-choose-gesture"]],standalone:!0,features:[D],decls:10,vars:1,consts:[[1,"task"],[1,"list-column"],[1,"cell"],[1,"list-row"],[1,"hover"],[3,"src","state","disabled","clicked"],["class","hover"]],template:function(e,r){e&1&&(o(0,"div",0)(1,"h1"),l(2,"\u10D0\u10DB\u10DD\u10D8\u10E0\u10E9\u10D8\u10D4 \u10DF\u10D4\u10E1\u10E2\u10D8"),n(),o(3,"div",1)(4,"div",2)(5,"p"),l(6),n()(),o(7,"div",3),w(8,E,2,3,"div",6,x),n()()()),e&2&&(a(6),C(r.word.value),a(2),g(r.gifs))},dependencies:[q,k]});let s=t;return s})();export{B as ChooseGestureComponent};
