"use strict";(self.webpackChunkalbion=self.webpackChunkalbion||[]).push([[55],{6055:(x,s,i)=>{i.r(s),i.d(s,{LayoutModule:()=>M});var l=i(9808),c=i(400),n=i(2096),p=i(845),u=i(4119),r=i(3460);let d=(()=>{class t{constructor(e){this.router=e,this.items=[]}ngOnInit(){this.items=[{label:"Notifications",icon:"pi pi-fw pi-bell",command:()=>this.goToNotifications()},{label:"Account",icon:"pi pi-fw pi-user"}]}goToLogin(){this.router.navigate(["login"])}goToNotifications(){console.log("Notifications activated")}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(r.F0))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-header"]],decls:2,vars:0,consts:[[1,"text-center","font-semibold","header-title","w-full","pr-8"]],template:function(e,a){1&e&&(n.TgZ(0,"span",0),n._uU(1,"AlbiMarket"),n.qZA())},styles:["p[_ngcontent-%COMP%]{text-align:center}"]}),t})(),m=(()=>{class t{constructor(e){this.router=e}ngOnInit(){}gotoHome(){this.router.navigate(["home"])}gotoCreate(){this.router.navigate(["create"])}gotoQuery(){this.router.navigate(["query"])}gotoMarket(){this.router.navigate(["market"])}gotoSettings(){this.router.navigate(["settings"])}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(r.F0))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-sidebar"]],decls:1,vars:0,consts:[["pButton","","type","button","icon","pi pi-shopping-bag","iconPos","left","pTooltip","Market",1,"p-button","p-button-outlined","mt-2",3,"click"]],template:function(e,a){1&e&&(n.TgZ(0,"button",0),n.NdJ("click",function(){return a.gotoMarket()}),n.qZA())},directives:[p.Hq,u.u],styles:["p[_ngcontent-%COMP%]{text-align:center;margin:auto;padding:1rem}"]}),t})();var g=i(313);let f=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-main"]],decls:3,vars:1,consts:[[1,"flex","flex-wrap","w-full","justify-content-center","p-3"],[3,"threshold"]],template:function(e,a){1&e&&(n.TgZ(0,"div",0),n._UZ(1,"p-scrollTop",1),n._UZ(2,"router-outlet"),n.qZA()),2&e&&(n.xp6(1),n.Q6J("threshold",100))},directives:[g.F,r.lC],styles:["[_nghost-%COMP%]{width:100%}p[_ngcontent-%COMP%]{margin:auto;text-align:center}"]}),t})(),h=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-footer"]],decls:2,vars:0,template:function(e,a){1&e&&(n.TgZ(0,"p"),n._uU(1,"gtronick.com"),n.qZA())},styles:[""]}),t})();const y=function(t){return{hidden:t}},C=[{path:"",component:(()=>{class t{constructor(){this.gbShowSidebar=!1}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-layout"]],decls:9,vars:4,consts:[[1,"menu"],[1,"menu-button"],["type","button","pButton","","pRipple","","pTooltip","Menu","tooltipPosition","bottom",1,"mt-2","mb-2","ml-auto","mr-2",3,"icon","click"],[1,"header","flex","shadow-2"],[1,"middle"],[1,"shadow-1","sidebar","animate__animated","animate__fadeIn","animate__faster"],[1,"shadow-1","sidebar-by-button","animate__animated","animate__slideInLeft","animate__faster",3,"ngClass"],[1,"main"],[1,"footer","shadow-4"]],template:function(e,a){1&e&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"button",2),n.NdJ("click",function(){return a.gbShowSidebar=!a.gbShowSidebar}),n.qZA(),n.qZA(),n._UZ(3,"app-header",3),n.qZA(),n.TgZ(4,"div",4),n._UZ(5,"app-sidebar",5),n._UZ(6,"app-sidebar",6),n._UZ(7,"app-main",7),n.qZA(),n._UZ(8,"app-footer",8)),2&e&&(n.xp6(2),n.Q6J("icon",a.gbShowSidebar?"pi pi-times":"pi pi-bars"),n.xp6(4),n.Q6J("ngClass",n.VKq(2,y,!a.gbShowSidebar)))},directives:[p.Hq,u.u,d,m,l.mk,f,h],styles:["[_nghost-%COMP%]{height:100%;display:flex;justify-content:space-between;flex-direction:column}.middle[_ngcontent-%COMP%]{display:flex;flex-grow:1;flex-direction:row}.menu[_ngcontent-%COMP%]{display:flex}.menu-button[_ngcontent-%COMP%]{display:none;padding:0 .8rem 0 1.16rem;cursor:pointer}.header[_ngcontent-%COMP%]{width:100%}.sidebar[_ngcontent-%COMP%], .sidebar-by-button[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:flex-start;padding:1.2rem}.hidden[_ngcontent-%COMP%]{display:none}.main[_ngcontent-%COMP%]{display:flex}.footer[_ngcontent-%COMP%]{text-align:center}@media screen and (max-width: 800px){.sidebar[_ngcontent-%COMP%]{display:none}.menu-button[_ngcontent-%COMP%]{display:block}}@media screen and (min-width: 800px){.sidebar-by-button[_ngcontent-%COMP%]{display:none}}"]}),t})(),children:[{path:"",loadChildren:()=>i.e(646).then(i.bind(i,6646)).then(t=>t.MarketModule)}]}];let b=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[r.Bz.forChild(C)]]}),t})(),M=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[c.m,l.ez,b],c.m]}),t})()}}]);