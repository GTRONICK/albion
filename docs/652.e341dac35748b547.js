"use strict";(self.webpackChunkalbion=self.webpackChunkalbion||[]).push([[652],{5652:(C,a,o)=>{o.r(a),o.d(a,{SettingsModule:()=>S});var m=o(4043),e=o(2096),r=o(930),u=o(4182);let d=(()=>{class n{constructor(){this.gbOnlyReal=!1,this.gbExclude=!1}ngOnInit(){this.gbOnlyReal="true"===sessionStorage.getItem("onlyReal"),this.gbExclude="true"===sessionStorage.getItem("exclude")}onlyReal(t){sessionStorage.setItem("onlyReal",`${t.checked}`)}exclude(t){sessionStorage.setItem("exclude",`${t.checked}`)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-settings-home"]],decls:9,vars:2,consts:[[1,"w-full","flex","flex-column","animate__animated","animate__fadeIn","animate__faster","flex","flex-column","align-content-center"],[1,"flex","justify-content-between"],[1,"mr-2"],[3,"ngModel","onChange","ngModelChange"]],template:function(t,s){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"span",2),e._uU(3,"Use only real continent cities"),e.qZA(),e.TgZ(4,"p-inputSwitch",3),e.NdJ("onChange",function(l){return s.onlyReal(l)})("ngModelChange",function(l){return s.gbOnlyReal=l}),e.qZA(),e.qZA(),e.TgZ(5,"div",1),e.TgZ(6,"span",2),e._uU(7,"Exclude Caerleon from the city list"),e.qZA(),e.TgZ(8,"p-inputSwitch",3),e.NdJ("onChange",function(l){return s.exclude(l)})("ngModelChange",function(l){return s.gbExclude=l}),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(4),e.Q6J("ngModel",s.gbOnlyReal),e.xp6(4),e.Q6J("ngModel",s.gbExclude))},directives:[r.Ql,u.JJ,u.On],styles:["p-inputswitch[_ngcontent-%COMP%]{line-height:100%}"]}),n})();var c=o(3460);const p=[{path:"",component:d}];let h=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[c.Bz.forChild(p)],c.Bz]}),n})();var f=o(9808);let S=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[f.ez,m.m,h]]}),n})()}}]);