"use strict";(self.webpackChunktaskChart=self.webpackChunktaskChart||[]).push([[568],{6568:(M,r,e)=>{e.r(r),e.d(r,{CountriesModule:()=>y});var m=e(9808),c=e(7656),u=e(4393),t=e(4893),h=e(5601),d=e(5034);function g(o,s){1&o&&(t.TgZ(0,"div",3)(1,"h3"),t._uU(2," Loading... "),t.qZA()())}const C=function(){return{backdropBorderRadius:"3px"}},v=[{path:"",component:(()=>{class o{constructor(n){this.server=n,this.loading=!1,this.line_chart=[],u.kL.register(...u.zX)}ngOnInit(){this.loading=!0,this.server.getCountriesAll().then(n=>{var i,a;this.output=n,this.loading=!1,this.population=null===(i=this.output)||void 0===i?void 0:i.slice(5,25).map(l=>l.population),this.country=null===(a=this.output)||void 0===a?void 0:a.map(l=>l.name),this.name=this.country.slice(5,25).map(l=>l.common),console.log(this.name),this.line_chart=new u.kL("line",{type:"line",data:{labels:this.name,datasets:[{fill:!1,tension:.1,label:"Population country",backgroundColor:"rgb(57,192,237)",data:this.population}]}})})}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(h.r))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-countries"]],decls:6,vars:5,consts:[["id","line"],["customLoadingTemplate",""],[3,"show","config","template"],[1,"custom-class"]],template:function(n,i){if(1&n&&(t.TgZ(0,"div")(1,"canvas",0),t._uU(2),t.qZA(),t.YNc(3,g,3,0,"ng-template",null,1,t.W1O),t._UZ(5,"ngx-loading",2),t.qZA()),2&n){const a=t.MAs(4);t.xp6(2),t.Oqu(i.line_chart),t.xp6(3),t.Q6J("show",i.loading)("config",t.DdM(4,C))("template",a)}},directives:[d.RJ],styles:[""]}),o})()}];let f=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[c.Bz.forChild(v)],c.Bz]}),o})();var p=e(5404);let y=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[m.ez,f,d.q,p.Fq,p.yi]]}),o})()}}]);