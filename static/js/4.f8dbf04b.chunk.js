(window.webpackJsonpmeeting=window.webpackJsonpmeeting||[]).push([[4],{29:function(e,a,t){e.exports=t.p+"static/media/baom-tit.6ce82f97.png"},30:function(e,a,t){e.exports=t.p+"static/media/ready.753c42dc.png"},31:function(e,a,t){},48:function(e,a,t){"use strict";t.r(a);var n=t(4),l=t(0),m=t.n(l),r=t(29),c=t.n(r),i=t(30),o=t.n(i),s=(t(31),t(46)),u=["\u5927\u6570\u636e","\u4eba\u5de5\u667a\u80fd\u5e94\u7528\u4e0e\u5176\u5b89\u5168\u7814\u7a76","\u79fb\u52a8\u4e92\u8054\u7f51","\u4e91\u8ba1\u7b97","\u4e92\u8054\u7f51","\u533a\u5757\u94fe","\u865a\u62df\u5316","\u667a\u80fd\u7f51\u8054\u6c7d\u8f66","\u5b89\u5168\u5de5\u5177\u5f00\u53d1\u4e0e\u5e94\u7528","\u684c\u9762\u7aef\u5e94\u7528","OS\u7b49\u5d4c\u5165\u5f0f\u5f00\u53d1\u4e0e\u96c6\u6210","\u5176\u4ed6"];a.default=function(e){e.isForm;var a=Object(l.useState)(""),t=Object(n.a)(a,2),r=t[0],i=t[1],d=Object(l.useState)(!1),p=Object(n.a)(d,2),E=p[0],f=p[1],y=Object(l.useState)(0),g=Object(n.a)(y,2),v=g[0],N=g[1],b=Object(l.useState)({message:"",type:0}),C=Object(n.a)(b,2),h=C[0],x=h.message,j=h.type,k=C[1],O=Object(l.useCallback)(function(){f(!E)},[E]),B=Object(l.useCallback)(function(e){i(e),N(0),setTimeout(function(){return f(!1)},800)},[r]);return Object(l.useEffect)(function(){N(E?1:0)},[E]),Object(l.useEffect)(function(){x&&setTimeout(function(){return k({message:"",type:0})},1500)},[x]),m.a.createElement(m.a.Fragment,null,m.a.createElement(s.a,{initialValues:{name:"",phone:"",smsCode:"",company:"",job:"",email:"",domain:""},validate:function(e){var a={};return e.name?e.phone?e.smsCode?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email):a.smsCode="\u9a8c\u8bc1\u7801\u4e0d\u80fd\u4e3a\u7a7a":a.phone="\u624b\u673a\u4e0d\u80fd\u4e3a\u7a7a":a.name="\u59d3\u540d\u4e0d\u80fd\u4e3a\u7a7a",a},onSubmit:function(e,a){var t=a.setSubmitting;setTimeout(function(){k({message:"\u63d0\u4ea4\u6210\u529f",type:1}),t(!1)},4e3)}},function(e){var a=e.values,t=e.errors,n=(e.touched,e.handleChange),l=e.handleBlur,i=e.handleSubmit,s=e.isSubmitting,d=e.setFieldValue;return m.a.createElement("form",{onSubmit:i},m.a.createElement("div",{className:"baom-tit"},m.a.createElement("img",{src:c.a})),m.a.createElement("div",{className:"form-box"},m.a.createElement("fieldset",{id:"form"},m.a.createElement("input",{type:"hidden",name:"mid",id:"mid",defaultValue:"4982087607801771565"}),m.a.createElement("input",{type:"hidden",name:"tokenid2",id:"tokenid2",defaultValue:"393D8C11FA848720B9E000C7CDCC7BA6"}),m.a.createElement("input",{type:"hidden",name:"checkType",id:"checkType",defaultValue:"1"}),m.a.createElement("div",{className:"form-group clearfix"+(t.name?" error":"")},m.a.createElement("div",{className:"form-groupL"},"\u59d3\u540d",m.a.createElement("i",null)),m.a.createElement("div",{className:"form-groupR"},m.a.createElement("input",{type:"text ",name:"name",onChange:n,onBlur:l,value:a.name}))),m.a.createElement("div",{className:"form-group clearfix"+(t.phone?" error":"")},m.a.createElement("div",{className:"form-groupL"},"\u8054\u7cfb\u65b9\u5f0f",m.a.createElement("i",null)),m.a.createElement("div",{className:"form-groupR"},m.a.createElement("input",{type:"tel",name:"phone",className:"getCodeInput",onChange:n,onBlur:l,value:a.phone}),m.a.createElement("a",{className:"getCode"},"\u83b7\u53d6\u9a8c\u8bc1\u7801"))),m.a.createElement("div",{className:"form-group clearfix"+(t.smsCode?" error":"")},m.a.createElement("div",{className:"form-groupL"},"\u9a8c\u8bc1\u7801",m.a.createElement("i",null)),m.a.createElement("div",{className:"form-groupR"},m.a.createElement("input",{type:"text ",name:"smsCode",onChange:n,onBlur:l,value:a.smsCode}))),m.a.createElement("div",{className:"form-group clearfix"},m.a.createElement("div",{className:"form-groupL"},"\u516c\u53f8\u540d\u79f0",m.a.createElement("i",null)),m.a.createElement("div",{className:"form-groupR"},m.a.createElement("input",{type:"text ",name:"company",onChange:n,onBlur:l,value:a.company}))),m.a.createElement("div",{className:"form-group clearfix"},m.a.createElement("div",{className:"form-groupL"},"\u4e1a\u52a1\u9886\u57df",m.a.createElement("i",null)),m.a.createElement("div",{className:"form-groupR form-domain",onClick:O},m.a.createElement("input",{type:"text ",className:"form-domainInput",name:"domain",onChange:n,onBlur:l,value:a.domain,readOnly:!0}))),m.a.createElement("div",{className:"form-group clearfix"},m.a.createElement("div",{className:"form-groupL"},"\u804c\u4f4d",m.a.createElement("i",null)),m.a.createElement("div",{className:"form-groupR"},m.a.createElement("input",{type:"text ",name:"job",onChange:n,onBlur:l,value:a.job}))),m.a.createElement("div",{className:"form-group clearfix"},m.a.createElement("div",{className:"form-groupL"},"\u8054\u7cfb\u90ae\u7bb1",m.a.createElement("i",null)),m.a.createElement("div",{className:"form-groupR"},m.a.createElement("input",{type:"email",name:"email",onChange:n,onBlur:l,value:a.email}))))),m.a.createElement("div",{className:"domain-box",style:{display:E?"block":"none",opacity:v}},m.a.createElement("div",{className:"domain-list"},m.a.createElement("ul",null,u.map(function(e){return m.a.createElement("li",{key:e,className:e===r?"activeli":"",onClick:function(){B(e),d("domain",e)}},e)})))),m.a.createElement("div",{className:"loading-box",style:{display:s?"block":"none"}},m.a.createElement("div",{className:"layui-layer layui-layer-loading",style:{zIndex:19891015,top:356,left:177}},m.a.createElement("div",{className:"layui-layer-content layui-layer-loading0"}),m.a.createElement("span",{className:"layui-layer-setwin"}))),m.a.createElement("div",{className:"msg-box",style:{display:x?"block":"none"}},m.a.createElement("div",{className:"layui-layer layui-layer-dialog layui-layer-border layui-layer-msg"},m.a.createElement("div",{className:"layui-layer-content layui-layer-padding"},m.a.createElement("i",{className:"layui-layer-ico layui-layer-ico"+j}),x))),m.a.createElement("div",{className:"sure-box"},m.a.createElement("img",{src:o.a}),m.a.createElement("a",{className:"submitBtn",type:"submit",onClick:function(e){return i(e)}})))}))}}}]);
//# sourceMappingURL=4.f8dbf04b.chunk.js.map