!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.dashboardEmployee=t():e.dashboardEmployee=t()}(this,(function(){return function(e){function t(t){for(var n,l,c=t[0],i=t[1],s=t[2],m=0,d=[];m<c.length;m++)l=c[m],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&d.push(r[l][0]),r[l]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(u&&u(t);d.length;)d.shift()();return o.push.apply(o,s||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,c=1;c<a.length;c++){var i=a[c];0!==r[i]&&(n=!1)}n&&(o.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},r={0:0},o=[];function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/ona/static/src/js/dashboard_employee/lib/";var c=this.webpackJsonp=this.webpackJsonp||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var u=i;return o.push([110,1]),a()}({110:function(e,t,a){e.exports=a(111)},111:function(e,t,a){"use strict";a.r(t),function(e){var n=a(0),r=a.n(n),o=a(14),l=a.n(o),c=(a(117),a(144),a(70)),i={new:function(e,t,a){return{render:function(){l.a.render(r.a.createElement(c.a,{lang:e,odooWidget:a}),document.querySelector(t))},unmount:function(){l.a.unmountComponentAtNode(document.querySelector(t))}}}};"odoo"!==__DEVMODE__&&l.a.render(r.a.createElement(c.a,null),document.querySelector("#app"));try{e.hot.accept()}catch(e){}t.default=i}.call(this,a(112)(e))},144:function(e,t,a){var n=a(77),r=a(145);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};n(r,o);e.exports=r.locals||{}},145:function(e,t,a){(t=a(78)(!1)).push([e.i,"[aria-hidden='true'],[aria-hidden='1']{display:unset !important}#app{overflow-y:auto;max-height:calc(100% - 20px);padding:20px}\n",""]),e.exports=t},70:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(228),l=a(56),c=a(12),i=a(54),s=a.n(i),u=a(229),m=a(237),d=a(239),p=a(231),f=a(240),g=a(241),h=a(89),E=a.n(h),y=a(90),b=a.n(y),x=a(88),v=a.n(x),k=a(55),w=a.n(k),C=a(6),j=Object(o.a)({drawerContainer:{width:250,paddingTop:70,"& .MuiButtonBase-root":{paddingLeft:40}},openDrawerButton:{position:"absolute !important",zIndex:1201,top:48,left:5,"&.MuiButtonBase-root":{backgroundColor:function(e){return e.drawerOpen?"transparent":"rgb(25 118 210 / 80%)"},color:function(e){return e.drawerOpen?"#1976d2":"#fff"},"&:hover":{backgroundColor:function(e){return e.drawerOpen?"rgba(25, 118, 210, 0.04)":"rgb(25 118 210 / 70%)"}}}},link:{textDecoration:"none !important",color:"#000 !important","&:hover":{"& .MuiSvgIcon-root":{color:"#000 !important"},"& > .MuiButtonBase-root:hover":{color:"#000 !important",backgroundColor:"#1976d2c2 !important"}}},activeLink:{color:"#fff !important","& .MuiSvgIcon-root":{color:"#fff"},"& > .MuiButtonBase-root":{backgroundColor:"#1976d2"}}}),O=[{text:"Map",path:"/",Icon:n.createElement(v.a,null)},{text:"Missions",path:"missions",Icon:n.createElement(w.a,null)}];var T=function(){var e=n.useState(!1),t=s()(e,2),a=t[0],r=t[1],o=j({drawerOpen:a}),c=function(e,t){r(void 0!==t?t:!a)};return n.createElement(n.Fragment,null,n.createElement(m.a,{color:"primary","aria-label":"upload picture",component:"span",className:o.openDrawerButton,onClick:c},a?n.createElement(b.a,null):n.createElement(E.a,null)),n.createElement(u.a,{anchor:"left",open:a,onClose:function(e){return c(0,!1)},onOpen:function(e){return c(0,!0)}},n.createElement("div",{className:o.drawerContainer,onClick:function(e){return c(0,!1)}},n.createElement(d.a,null,O.map((function(e){return n.createElement(l.b,{className:function(e){return e.isActive?Object(C.a)(o.link,o.activeLink):o.link},to:e.path,key:"".concat(e.text,"-").concat(e.path)},n.createElement(p.a,{button:!0},n.createElement(f.a,null,e.Icon),n.createElement(g.a,{primary:e.text})))}))))))};var S=function(e){return r.a.createElement(T,e)},D=a(103),B=a(93),F=a.n(B),_=function(){return r.a.createElement("div",null,r.a.createElement(F.a,null))},I=Object(o.a)({mapContainer:{position:"absolute",top:0,left:0,zIndex:-1,width:"100%",height:"100vh"}}),L={center:{lat:36.820344103027615,lng:7.714581370296837},zoom:15},M=function(){var e=I();return r.a.createElement("div",{className:e.mapContainer},r.a.createElement(D.a,{bootstrapURLKeys:{key:"AIzaSyBHlbIHEr1Jfo_99EIfi870YUHRUfc2QKE"},defaultCenter:L.center,defaultZoom:L.zoom,options:function(e){return{fullscreenControl:!1,mapTypeId:e.MapTypeId.SATELLITE}},yesIWantToUseGoogleMapApiInternals:!0},r.a.createElement(_,{lat:36.820281644101755,lng:7.715169516991862}),r.a.createElement(_,{lat:36.82024943669526,lng:7.7150394298562714})))},P=function(e){return r.a.createElement(M,e)},R=a(246),A=a(236),z=a(233),G=a(43),N=a(23),J=a.n(N),q=a(243),W=a(244),Q=a(242),H=a(234),U=function(e){return r.a.createElement(q.a,J()({sx:{height:"100%"}},e),r.a.createElement(W.a,null,r.a.createElement(z.a,{container:!0,spacing:3,sx:{justifyContent:"space-between"}},r.a.createElement(z.a,{item:!0},r.a.createElement(Q.a,{color:"textSecondary",gutterBottom:!0,variant:"overline"},"total tâches"),r.a.createElement(Q.a,{color:"textPrimary",variant:"h4"},e.data)),r.a.createElement(z.a,{item:!0},r.a.createElement(H.a,{sx:{backgroundColor:"info.main",height:56,width:56}},r.a.createElement(w.a,null))))))},K=a(94),V=a.n(K),Z=a(245),Y=a(247),X=a(248),$=a(249),ee=a(250),te=a(251),ae=a(235),ne=a(58),re=a.n(ne),oe=a(95),le=a.n(oe),ce=a(7),ie=["color","children"],se=Object(ce.a)("span")((function(e){var t=e.theme,a=e.ownerState;return{alignItems:"center",backgroundColor:t.palette[a.color].main,borderRadius:12,color:t.palette[a.color].contrastText,cursor:"default",display:"inline-flex",flexGrow:0,flexShrink:0,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(12),lineHeight:2,fontWeight:600,justifyContent:"center",letterSpacing:.5,minWidth:20,paddingLeft:t.spacing(1),paddingRight:t.spacing(1),textTransform:"uppercase",whiteSpace:"nowrap"}})),ue=function(e){var t=e.color,a=void 0===t?"primary":t,n=e.children,o=le()(e,ie),l={color:a};return r.a.createElement(se,J()({ownerState:l},o),n)},me=function(e){return r.a.createElement(q.a,e,r.a.createElement(Z.a,{title:e.title}),r.a.createElement(V.a,null,r.a.createElement(R.a,{sx:{minWidth:800}},r.a.createElement(Y.a,{sx:{height:"100%"}},r.a.createElement(X.a,null,r.a.createElement($.a,null,e.columns.map((function(e){return r.a.createElement(ee.a,{key:e},e)})))),r.a.createElement(te.a,null,e.data.map((function(e){return r.a.createElement($.a,{key:e.id},Object.keys(e).splice(1).map((function(t){return r.a.createElement(r.a.Fragment,{key:t},"state"!==t?r.a.createElement(ee.a,null,e[t]):r.a.createElement(ee.a,null,r.a.createElement(ue,{color:("confirm"===e.state?"success":"cancel"===e.state&&"error")||"default"},e.state)))})))})))))),r.a.createElement(R.a,{sx:{display:"flex",justifyContent:"flex-end",p:2}},r.a.createElement(ae.a,{color:"primary",endIcon:r.a.createElement(re.a,{fontSize:"small"}),size:"small",variant:"text"},"View all")))},de=(a(159),a(96)),pe=a(25),fe=a(252),ge=function(e){var t=Object(pe.a)(),a={animation:!1,cornerRadius:20,layout:{padding:0},legend:{display:!1},maintainAspectRatio:!1,responsive:!0,xAxes:[{ticks:{fontColor:t.palette.text.secondary},gridLines:{display:!1,drawBorder:!1}}],yAxes:[{ticks:{fontColor:t.palette.text.secondary,beginAtZero:!0,min:0},gridLines:{borderDash:[2],borderDashOffset:[2],color:t.palette.divider,drawBorder:!1,zeroLineBorderDash:[2],zeroLineBorderDashOffset:[2],zeroLineColor:t.palette.divider}}],tooltips:{backgroundColor:t.palette.background.paper,bodyFontColor:t.palette.text.secondary,borderColor:t.palette.divider,borderWidth:1,enabled:!0,footerFontColor:t.palette.text.secondary,intersect:!1,mode:"index",titleFontColor:t.palette.text.primary}},n=r.a.useState({datasets:[],labels:[]}),o=s()(n,2),l=o[0],c=o[1];return r.a.useEffect((function(){var t=Object.keys(e.data),a=[{backgroundColor:"#eee",barPercentage:.5,barThickness:12,borderRadius:4,categoryPercentage:.5,data:Object.keys(e.data).map((function(t){return e.data[t].draft})),label:"Brouillon",maxBarThickness:10},{backgroundColor:"#2E7D32",barPercentage:.5,barThickness:12,borderRadius:4,categoryPercentage:.5,data:Object.keys(e.data).map((function(t){return e.data[t].confirm})),label:"Confirmer",maxBarThickness:10},{backgroundColor:"#D32F2F",barPercentage:.5,barThickness:12,borderRadius:4,categoryPercentage:.5,data:Object.keys(e.data).map((function(t){return e.data[t].cancel})),label:"Cancel",maxBarThickness:10}];c({datasets:a,labels:t})}),[e.data]),r.a.createElement(q.a,e,r.a.createElement(Z.a,{title:e.title}),r.a.createElement(fe.a,null),r.a.createElement(W.a,null,r.a.createElement(R.a,{sx:{height:400,position:"relative"}},r.a.createElement(de.a,{data:l,options:a}))),r.a.createElement(fe.a,null),r.a.createElement(R.a,{sx:{display:"flex",justifyContent:"flex-end",p:2}},r.a.createElement(ae.a,{color:"primary",endIcon:r.a.createElement(re.a,{fontSize:"small"}),size:"small"},"Overview")))},he=a(97),Ee=a.n(he),ye=function(e){return r.a.createElement(q.a,J()({sx:{height:"100%"}},e),r.a.createElement(W.a,null,r.a.createElement(z.a,{container:!0,spacing:3,sx:{justifyContent:"space-between"}},r.a.createElement(z.a,{item:!0},r.a.createElement(Q.a,{color:"textSecondary",gutterBottom:!0,variant:"overline"},"total tâches confirmées"),r.a.createElement(Q.a,{color:"textPrimary",variant:"h4"},e.data)),r.a.createElement(z.a,{item:!0},r.a.createElement(H.a,{sx:{backgroundColor:"success.main",height:56,width:56}},r.a.createElement(Ee.a,null))))))},be=a(98),xe=a.n(be),ve=function(e){return r.a.createElement(q.a,J()({sx:{height:"100%"}},e),r.a.createElement(W.a,null,r.a.createElement(z.a,{container:!0,spacing:3,sx:{justifyContent:"space-between"}},r.a.createElement(z.a,{item:!0},r.a.createElement(Q.a,{color:"textSecondary",gutterBottom:!0,variant:"overline"},"total tâches annulées"),r.a.createElement(Q.a,{color:"textPrimary",variant:"h4"},e.data)),r.a.createElement(z.a,{item:!0},r.a.createElement(H.a,{sx:{backgroundColor:"error.main",height:56,width:56}},r.a.createElement(xe.a,null))))))},ke=a(99),we=a.n(ke),Ce=function(e){return r.a.createElement(q.a,J()({sx:{height:"100%"}},e),r.a.createElement(W.a,null,r.a.createElement(z.a,{container:!0,spacing:3,sx:{justifyContent:"space-between"}},r.a.createElement(z.a,{item:!0},r.a.createElement(Q.a,{color:"textSecondary",gutterBottom:!0,variant:"overline"},"total tâches brouillons"),r.a.createElement(Q.a,{color:"textPrimary",variant:"h4"},e.data)),r.a.createElement(z.a,{item:!0},r.a.createElement(H.a,{sx:{backgroundColor:"default.main",height:56,width:56}},r.a.createElement(we.a,null))))))},je=a(41),Oe=a.n(je),Te=a(100),Se=a.n(Te),De=a(101),Be=a.n(De),Fe=a(27),_e=a.n(Fe),Ie=a(42),Le=a.n(Ie),Me=window.location.origin,Pe=new(function(){function e(){Se()(this,e)}var t,a,n,r,o;return Be()(e,[{key:"getTasksCount",value:(o=Oe()(_e.a.mark((function e(){var t,a;return _e.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",headers:{"content-type":"application/json","Accept-Language":"*"},params:JSON.stringify({}),url:"".concat(Me,"/missions/tasks_count")},e.next=3,Le()(t);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)}))),function(){return o.apply(this,arguments)})},{key:"getTableTasksDrainage",value:(r=Oe()(_e.a.mark((function e(){var t,a;return _e.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",headers:{"content-type":"application/json","Accept-Language":"*"},params:JSON.stringify({}),url:"".concat(Me,"/missions/table/tasks_drainage")},e.next=3,Le()(t);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)}))),function(){return r.apply(this,arguments)})},{key:"getTableTasksQuickDiagnosis",value:(n=Oe()(_e.a.mark((function e(){var t,a;return _e.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",headers:{"content-type":"application/json","Accept-Language":"*"},params:JSON.stringify({}),url:"".concat(Me,"/missions/table/tasks_quick_diagnosis")},e.next=3,Le()(t);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)}))),function(){return n.apply(this,arguments)})},{key:"getGraphTasksDrainage",value:(a=Oe()(_e.a.mark((function e(){var t,a;return _e.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",headers:{"content-type":"application/json","Accept-Language":"*"},params:JSON.stringify({}),url:"".concat(Me,"/missions/graph/tasks_drainage")},e.next=3,Le()(t);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)}))),function(){return a.apply(this,arguments)})},{key:"getGraphTasksQuickDiagnosis",value:(t=Oe()(_e.a.mark((function e(){var t,a;return _e.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",headers:{"content-type":"application/json","Accept-Language":"*"},params:JSON.stringify({}),url:"".concat(Me,"/missions/graph/tasks_quick_diagnosis")},e.next=3,Le()(t);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)}))),function(){return t.apply(this,arguments)})}]),e}()),Re=function(){var e=Object(G.a)({promiseFn:Pe.getTasksCount}),t=Object(G.a)({promiseFn:Pe.getTableTasksDrainage}),a=Object(G.a)({promiseFn:Pe.getTableTasksQuickDiagnosis}),n=Object(G.a)({promiseFn:Pe.getGraphTasksDrainage}),o=Object(G.a)({promiseFn:Pe.getGraphTasksQuickDiagnosis});return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,{component:"main",sx:{flexGrow:1}},r.a.createElement(A.a,{maxWidth:!1},r.a.createElement(z.a,{container:!0,spacing:3},r.a.createElement(z.a,{item:!0,lg:3,sm:6,xl:3,xs:12},r.a.createElement(U,{data:e.isFulfilled?e.data.total:0})),r.a.createElement(z.a,{item:!0,xl:3,lg:3,sm:6,xs:12},r.a.createElement(ye,{data:e.isFulfilled&&e.data.confirm||0})),r.a.createElement(z.a,{item:!0,xl:3,lg:3,sm:6,xs:12},r.a.createElement(ve,{data:e.isFulfilled&&e.data.cancel||0})),r.a.createElement(z.a,{item:!0,xl:3,lg:3,sm:6,xs:12},r.a.createElement(Ce,{sx:{height:"100%"},data:e.isFulfilled&&e.data.draft||0})),r.a.createElement(z.a,{item:!0,lg:6,md:6,xl:6,xs:12},r.a.createElement(me,{title:"Tâches Daignostique Rapide",columns:["Réf","Regard","Date","Etat"],data:a.isFulfilled?a.data:[]})),r.a.createElement(z.a,{item:!0,lg:6,md:6,xl:6,xs:12},r.a.createElement(me,{title:"Tâches Curage Manuel",columns:["Réf","Type","Immatriculation Camion","Date","Etat"],data:t.isFulfilled?t.data:[]})),r.a.createElement(z.a,{item:!0,md:6,xs:12},r.a.createElement(ge,{title:"Les Tâches de Diagnostique Rapide par Dates",data:o.isFulfilled?o.data:{}})),r.a.createElement(z.a,{item:!0,md:6,xs:12},r.a.createElement(ge,{title:"Les Tâches de Curage Manuel par Dates",data:n.isFulfilled?n.data:{}}))))))},Ae=Object(o.a)({root:{width:"100%",height:"100%"}});t.a=function(){var e=Ae();return n.createElement("div",{className:e.root},n.createElement(l.a,null,n.createElement(S,null),n.createElement(c.c,null,n.createElement(c.a,{path:"/missions",element:n.createElement(Re,null)}),n.createElement(c.a,{path:"/",element:n.createElement(P,null)}))))}}}).default}));
//# sourceMappingURL=app.bundle.js.map