import{A as p,B as C,E as D,J as z,S as g,ca as k,fa as y,j as m,ja as E,k as v,l as f,m as c,n as u,o as l,s as S,t as w,u as x,v as n,w as o,x as q,y as I,z as _}from"./chunk-KAUGAJXA.js";function F(s,t){if(s&1){let a=I();n(0,"app-word-option",5),_("clicked",function(e){let d=v(a).$index,h=p();return f(h.onSelect(e,d))}),o()}if(s&2){let a=t.$implicit,i=t.$index,e=p();l("value",a.value)("state",i===e.answeredsIdx?e.state:"")("disabled",e.answeredsIdx!=null)}}var M=(()=>{let t=class t{constructor(i,e){this.quizService=i,this.route=e,this.taskId=+this.route.snapshot.params.id,this.initialize()}onSelect(i,e){this.answeredsIdx=e;let r=this.quizService.getWordByValue(i);r?this.quizService.isRight(r,this.question)?this.state="correct":(this.state="incorrect",this.quizService.decrementLives()):this.state="incorrect";let d={question:this.question,answers:this.answers,state:this.state,answeredsIdx:this.answeredsIdx};this.quizService.setInStore(this.taskId,d)}initialize(){if(this.quizService.existsInStore(this.taskId)){let e=this.quizService.getFromStore(this.taskId);this.question=e.question,this.answers=e.answers,this.state=e.state,this.answeredsIdx=e.answeredsIdx}else this.question=this.quizService.getRandomGif(),this.answers=this.quizService.getFourWord()}};t.\u0275fac=function(e){return new(e||t)(u(E),u(z))},t.\u0275cmp=m({type:t,selectors:[["app-choos-answer"]],standalone:!0,features:[D],decls:9,vars:1,consts:[[1,"task"],[1,"list-column"],[1,"cell"],[3,"src"],[1,"list-row"],[3,"value","state","disabled","clicked"],[3,"value","state","disabled"]],template:function(e,r){e&1&&(n(0,"div",0)(1,"h1"),C(2,"\u10D0\u10DB\u10DD\u10D8\u10E0\u10E9\u10D8\u10D4 \u10E1\u10D8\u10E2\u10E7\u10D5\u10D0"),o(),n(3,"div",1)(4,"div",2),q(5,"app-card",3),o(),n(6,"div",4),w(7,F,1,3,"app-word-option",6,S),o()()()),e&2&&(c(5),l("src",r.question.value),c(2),x(r.answers))},dependencies:[y,g,k]});let s=t;return s})();export{M as ChooseWordComponent};
