import{A as d,C as v,H as C,L as D,M as S,N as E,O as q,Q as g,S as I,T as y,U as z,Y as F,aa as M,f as c,h,i as p,l as s,m as u,n as l,o as f,u as n,v as o,w as m}from"./chunk-QOHZJDI4.js";var W=(()=>{let i=class i{constructor(e,t){this.quizService=e,this.route=t,this.taskId=this.route.snapshot.params.id,this.formControl=new E(""),this.listenFormControl=()=>this.formControl.valueChanges.pipe(c(2e3),h(()=>this.onDone())).subscribe()}ngOnInit(){this.listenFormControl(),this.initialize()}initialize(){if(this.quizService.existsInStore(this.taskId)){let t=this.quizService.getFromStore(this.taskId);this.formControl.setValue(t.value),this.formControl.disable(),this.state=t.state,this.question=t.question}else this.question=this.quizService.getRandomGif()}onDone(){this.formControl.disable();let e=this.quizService.getWordByValue(this.formControl.value);e?this.quizService.isRight(e,this.question)?this.state="correct":this.state="incorrect":this.state="incorrect";let t={value:this.formControl.value,state:this.state,question:this.question};this.quizService.setInStore(this.taskId,t)}};i.\u0275fac=function(t){return new(t||i)(u(M),u(C))},i.\u0275cmp=p({type:i,selectors:[["app-enter-answer"]],standalone:!0,features:[v],decls:11,vars:4,consts:[[1,"task"],[1,"list-column"],[1,"cell"],[3,"src"],[1,"padding"],[1,"example-form-field"],["matInput","","type","text",3,"formControl"]],template:function(t,r){t&1&&(n(0,"div",0)(1,"h1"),d(2,"\u10E9\u10D0\u10EC\u10D4\u10E0\u10D4 \u10E0\u10D0\u10E1 \u10DC\u10D8\u10E8\u10DC\u10D0\u10D5\u10E1"),o(),n(3,"div",1)(4,"div",2),m(5,"app-card",3),o(),n(6,"div",4)(7,"mat-form-field",5)(8,"mat-label"),d(9,"\u10E9\u10D0\u10EC\u10D4\u10E0\u10D4\u10D7 \u10DE\u10D0\u10E1\u10E3\u10EE\u10D8"),o(),m(10,"input",6),o()()()()),t&2&&(s(5),l("src",r.question.value),s(1),f(r.state),s(4),l("formControl",r.formControl))},dependencies:[F,D,S,g,z,y,I,q],styles:[".example-form-field[_ngcontent-%COMP%]{width:200px}"]});let a=i;return a})();export{W as EnterAnswerComponent};
