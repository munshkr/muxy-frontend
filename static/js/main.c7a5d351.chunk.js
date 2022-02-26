(this["webpackJsonpmuxy-frontend"]=this["webpackJsonpmuxy-frontend"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(6),c=n.n(o),s=(n(12),n(2)),i=(n(13),n(14),n(0));var u=function(e){var t=e.eventUrl,n=e.startsAt,a=e.endsAt,o=Object(r.useState)(""),c=Object(s.a)(o,2),u=c[0],l=c[1],d=Object(r.useState)(""),j=Object(s.a)(d,2),O=j[0],m=j[1],b=Object(r.useState)(""),h=Object(s.a)(b,2),p=h[0],_=h[1],S=Object(r.useState)(""),v=Object(s.a)(S,2),f=v[0],y=v[1],T=Object(r.useState)(""),E=Object(s.a)(T,2),x=E[0],C=E[1],A=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_MUXY_API_KEY,g=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_MUXY_URL;return Object(i.jsxs)(i.Fragment,{children:[f&&Object(i.jsxs)("div",{children:[Object(i.jsxs)("p",{children:["You have successfully registered for the event. Your streamkey is ",Object(i.jsx)("b",{children:f})," "]}),Object(i.jsx)("p",{children:"You should have received this as an email too. "}),Object(i.jsx)("p",{children:"Save this key well, you will need it for the event and also to delete your slot again. "}),Object(i.jsx)("p",{children:"When this page is reloaded, the key will no longer be displayed. "})]}),!f&&Object(i.jsxs)("form",{className:"PerformanceCreateForm",onSubmit:function(e){e.preventDefault(),fetch("".concat(g,"/streams/"),{method:"post",headers:new Headers({Authorization:"Api-Key ".concat(A),"Content-Type":"application/json",Accept:"application/json"}),body:JSON.stringify({publisher_name:u,publisher_email:O,description:p,location:x,timezone:Intl.DateTimeFormat().resolvedOptions().timeZone,event:t,starts_at:n,ends_at:a})}).then((function(e){return e.json()})).then((function(e){y(e.key)})).catch(console.error)},children:[Object(i.jsx)("input",{id:"name",type:"text",placeholder:"Name",value:u,onChange:function(e){return l(e.target.value)},required:!0}),Object(i.jsx)("input",{id:"email",type:"text",placeholder:"E-Mail",value:O,onChange:function(e){return m(e.target.value)},required:!0}),Object(i.jsx)("input",{id:"description",type:"text",placeholder:"Description",value:p,onChange:function(e){return _(e.target.value)},required:!0}),Object(i.jsx)("input",{id:"location",type:"text",placeholder:"Location",value:x,onChange:function(e){return C(e.target.value)},required:!0}),Object(i.jsx)("input",{type:"submit",className:"card-button",value:"Rave On"})]})]})};var l=function(e){var t=e.streamUrl,n=e.onRemove,a=Object(r.useState)(""),o=Object(s.a)(a,2),c=o[0],u=o[1],l=Object(r.useState)(!1),d=Object(s.a)(l,2),j=d[0],O=d[1],m=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_MUXY_API_KEY;return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("form",{className:"PerformanceCreateForm",onSubmit:function(e){e.preventDefault(),O(!1);var r=new Headers({Authorization:"Api-Key ".concat(m),"X-Stream-Key":c,"Content-Type":"application/json",Accept:"application/json"});fetch(t,{method:"DELETE",headers:r}).then((function(e){e.ok?(u(""),n&&n()):O(!0)})).catch((function(e){console.error(e),O(!0)}))},children:[Object(i.jsx)("p",{children:"Enter your streaming key to confirm you want to remove your slot. If you do not remember your streaming key, please contact the event organizer."}),j&&Object(i.jsx)("p",{style:{color:"red"},children:"Something went wrong, did you entered the incorrect stream key? Please try again."}),Object(i.jsx)("input",{id:"key",type:"text",placeholder:"Stream key",value:c,onChange:function(e){return u(e.target.value)},required:!0}),Object(i.jsx)("input",{type:"submit",className:"card-button",value:"Remove slot"})]})})},d=n(3),j=n(5);var O=function(e){var t=e.streamUrl,n=e.currMuxyStream,a=e.onSetInEditMode,o=e.setCurrMuxyStream,c=Object(r.useState)(n.publisher_name),u=Object(s.a)(c,2),l=u[0],d=u[1],O=Object(r.useState)(n.description),m=Object(s.a)(O,2),b=m[0],h=m[1],p=Object(r.useState)(""),_=Object(s.a)(p,2),S=_[0],v=_[1],f=Object(r.useState)(n.location),y=Object(s.a)(f,2),T=y[0],E=y[1],x=Object(r.useState)(!1),C=Object(s.a)(x,2),A=C[0],g=C[1],P=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_MUXY_API_KEY;return Object(i.jsx)("div",{className:"PerformanceEditForm",children:Object(i.jsxs)("form",{className:"PerformanceCreateForm",onSubmit:function(e){e.preventDefault(),g(!1);var r=new Headers({Authorization:"Api-Key ".concat(P),"X-Stream-Key":S,"Content-Type":"application/json",Accept:"application/json"}),c=JSON.stringify({publisher_name:l,description:b,location:T,ends_at:n.ends_at,starts_at:n.starts_at,event:n.event});fetch(t,{method:"PUT",headers:r,body:c}).then((function(e){e.ok?(v(""),a(!1),o(Object(j.a)(Object(j.a)({},n),{},{publisher_name:l,description:b,location:T}))):g(!0)})).catch((function(e){console.error(e),g(!0)}))},children:[Object(i.jsx)("p",{children:"Enter your streaming key to confirm you want to edit your slot. If you do not remember your streaming key, please contact the event organizer."}),A&&Object(i.jsx)("p",{style:{color:"red"},children:"Something went wrong, did you entered the incorrect stream key? Please try again."}),Object(i.jsx)("input",{id:"key",type:"text",placeholder:"Stream-Key",value:S,onChange:function(e){return v(e.target.value)},required:!0}),Object(i.jsx)("p",{children:"Here you find your stream information that you can edit. The email address can not displayed for security reasons. If you have problems with your e-mail adress, please contace the event organizer. The information will only be updated if you have entered the correct stream key."}),Object(i.jsx)("input",{id:"name",type:"text",placeholder:"Name",value:l,onChange:function(e){return d(e.target.value)},required:!0}),Object(i.jsx)("input",{id:"description",type:"text",placeholder:"Description",value:b,onChange:function(e){return h(e.target.value)},required:!0}),Object(i.jsx)("input",{id:"location",type:"text",placeholder:"Location",value:T,onChange:function(e){return E(e.target.value)},required:!0}),Object(i.jsx)("input",{type:"submit",className:"card-button",value:"Save"})]})})},m=function(e){var t=e.muxyStream,n=e.cycleNo,a=e.eventUrl,o=Object(r.useState)(!1),c=Object(s.a)(o,2),j=c[0],m=c[1],b=Object(r.useState)(t),h=Object(s.a)(b,2),p=h[0],_=h[1],S=Object(r.useState)(!1),v=Object(s.a)(S,2),f=v[0],y=v[1],T=Object(r.useState)(!1),E=Object(s.a)(T,2),x=E[0],C=E[1],A=Object(r.useState)(!1),g=Object(s.a)(A,2),P=g[0],R=g[1],D=d.DateTime.fromISO(t.starts_at).toFormat("HH:mm LLL dd"),N=d.DateTime.fromISO(t.ends_at).toFormat("HH:mm LLL dd"),H=null;"publisher_name"in p&&(H=[p.publisher_name,p.location,p.description,p.timezone].join(" / "));var U=function(){m(!1),y(!1),C(!1)};return Object(i.jsx)("div",{className:"card",children:Object(i.jsxs)("div",{className:"card-body",children:[Object(i.jsxs)("p",{className:"card-header",children:["Cycle #",n]}),Object(i.jsxs)("p",{className:"card-time",children:[D,"-",N," ",!j&&!H&&Object(i.jsx)("button",{className:"card-button-plus",onClick:function(){return m(!0)},children:"+"})]}),P&&Object(i.jsx)("p",{children:"You have removed your slot succesfully."}),j?Object(i.jsx)(u,{eventUrl:a,startsAt:p.starts_at,endsAt:p.ends_at}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("p",{className:"card-text",children:P?"":H||""}),!P&&H&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("button",{onClick:function(){U(),C((function(e){return!e}))},className:"card-button",children:"Edit"}),Object(i.jsx)("button",{onClick:function(){U(),y((function(e){return!e}))},className:"card-button",children:"Remove"}),x&&"url"in p&&Object(i.jsx)(O,{streamUrl:p.url,currMuxyStream:p,onSetInEditMode:C,setCurrMuxyStream:_}),f&&"url"in p&&Object(i.jsx)(l,{streamUrl:p.url,onRemove:function(){return R(!0)}})]})]}),Object(i.jsx)("hr",{})]})})},b=function(e){var t=e.slug,n=e.eventUrl,a=e.startsAt,o=e.endsAt,c=e.setReservedStreamCount,u=e.setTotalStreamCount,l=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_MUXY_API_KEY,j=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_MUXY_URL,O=Object(r.useState)(null),b=Object(s.a)(O,2),h=b[0],p=b[1];Object(r.useEffect)((function(){fetch("".concat(j,"/streams/?event__slug=").concat(t),{method:"get",headers:new Headers({Authorization:"Api-Key ".concat(l)})}).then((function(e){return e.json()})).then((function(e){p(e)})).catch(console.error)}),[t]);var _=Object(r.useMemo)((function(){if(!a||!o)return[];if(!h)return[];var e=d.DateTime.fromISO(a),t=d.DateTime.fromISO(o).diff(e,["minute"]).toObject(),n=null!==t&&void 0!==t&&t.minutes?t.minutes/20:0,r=(null===h||void 0===h?void 0:h.results)||[];return Array.from(Array(n)).map((function(t,n){var a=e.plus({minutes:20*n}),o=a.plus({minutes:20}),c=a.toUTC().toFormat("yyyy-MM-dd'T'HH:mm:ss'Z'"),s=o.toUTC().toFormat("yyyy-MM-dd'T'HH:mm:ss'Z'");return r.find((function(e){return e.starts_at==c&&e.ends_at==s}))||{starts_at:c,ends_at:s}}))}),[h]);return c(h?h.results.length:0),u(_?_.length:0),Object(i.jsx)("div",{className:"performance-list",children:_&&_.map((function(e,t){return Object(i.jsx)(m,{eventUrl:n,muxyStream:e,cycleNo:t+1},t)}))})},h=n.p+"static/media/longestnight-sunset-2.0.2ad7016e.svg",p=n(7),_=n.n(p);var S=function(e){var t=e.event,n=function(e,t){return null===e||null===t?{reserved:0,total:0,percent:0}:{reserved:e,total:t,percent:100*e/t}}(e.reservedStreamCount,e.totalStreamCount);return Object(i.jsxs)("header",{className:"App-header",children:[Object(i.jsx)("img",{src:h,className:"App-logo",alt:"logo"}),Object(i.jsx)("h4",{children:"Tidal Club Presents ..."}),Object(i.jsx)("h1",{children:"The Longest Night"}),Object(i.jsxs)("h2",{children:[" ",t&&d.DateTime.fromISO(t.starts_at).toFormat("dd. LLLL HH:mm")," - ",t&&d.DateTime.fromISO(t.ends_at).toFormat("dd. LLLL HH:mm")," ",t&&d.DateTime.fromISO(t.starts_at).toFormat("yyyy")]}),Object(i.jsx)("hr",{}),Object(i.jsx)(_.a,{className:"wrapper",bgColor:"#ffce96",baseBgColor:"#bbbbbb54",labelClassName:"label",labelAlignment:"outside",width:"100%",height:"28px",margin:"8px",customLabel:"".concat(n.reserved,"/").concat(n.total," slots are filled"),completed:n.percent}),Object(i.jsx)("hr",{}),Object(i.jsxs)("p",{children:["Your timezone: ",Intl.DateTimeFormat().resolvedOptions().timeZone]}),Object(i.jsx)("p",{className:"link-paragraph",children:Object(i.jsx)("a",{href:"https://www.youtube.com/eulerroom/live",children:"https://www.youtube.com/eulerroom/live"})}),Object(i.jsx)("p",{className:"link-paragraph",children:Object(i.jsx)("a",{href:"https://www.twitch.tv/eulerroom",children:"https://www.twitch.tv/eulerroom"})})]})};var v=function(){var e=Object(r.useState)(null),t=Object(s.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)(null),c=Object(s.a)(o,2),u=c[0],l=c[1],d=Object(r.useState)(null),j=Object(s.a)(d,2),O=j[0],m=j[1],h=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_MUXY_API_KEY,p=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_MUXY_URL,_=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_EVENT_SLUG;Object(r.useEffect)((function(){fetch("".concat(p,"/events/?slug=").concat(_),{method:"get",headers:new Headers({Authorization:"Api-Key ".concat(h)})}).then((function(e){return e.json()})).then((function(e){a(e)})).catch(console.error)}),[_]);var v=null===n||void 0===n?void 0:n.results[0];return Object(i.jsxs)("main",{className:"App",children:[Object(i.jsx)(S,{event:v,reservedStreamCount:u,totalStreamCount:O}),v&&Object(i.jsx)(b,{slug:v.slug,eventUrl:v.url,startsAt:v.starts_at,endsAt:v.ends_at,setReservedStreamCount:l,setTotalStreamCount:m})]})};var f=function(){return Object(i.jsx)(v,{})};c.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(f,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.c7a5d351.chunk.js.map