(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{7993:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{attrs:{padding:""}},[a("q-form",{staticClass:"q-pa-md",on:{submit:function(t){return t.preventDefault(),e.create()}}},[a("q-input",{staticClass:"q-mb-sm",attrs:{color:"yellow-9",filled:"",label:"Nome",hint:"Digite seu nome","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Por favor digite seu nome"}]},model:{value:e.toSave.nome,callback:function(t){e.$set(e.toSave,"nome",t)},expression:"toSave.nome"}}),a("q-input",{staticClass:"q-mb-sm",attrs:{color:"yellow-9",filled:"",label:"Sobrenome",hint:"Digite seu sobrenome","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Por favor digite seu sobrenome"}]},model:{value:e.toSave.sobrenome,callback:function(t){e.$set(e.toSave,"sobrenome",t)},expression:"toSave.sobrenome"}}),a("q-input",{staticClass:"q-mb-sm",attrs:{color:"yellow-9",filled:"",label:"E-mail",hint:"Digite seu e-mail","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Por favor digite seu e-mail"}]},model:{value:e.toSave.email,callback:function(t){e.$set(e.toSave,"email",t)},expression:"toSave.email"}}),a("q-input",{staticClass:"q-mb-sm",attrs:{type:"password",color:"yellow-9",filled:"",label:"Senha",hint:"Digite sua senha","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Por favor digite sua senha"}]},model:{value:e.toSave.senha,callback:function(t){e.$set(e.toSave,"senha",t)},expression:"toSave.senha"}}),a("q-input",{staticClass:"q-mb-sm",attrs:{type:"password",color:"yellow-9",filled:"",label:"Repetir Senha",hint:"Repita sua senha",rules:[function(e){return e&&e.length>0||"Por favor repita sua senha"},function(t){return t==e.toSave.senha||"Senhas não coincidem"}]},model:{value:e.toSave.senhaRepetida,callback:function(t){e.$set(e.toSave,"senhaRepetida",t)},expression:"toSave.senhaRepetida"}}),a("q-checkbox",{staticClass:"q-mt-sm q-mb-sm",attrs:{label:"Aceito os termos e condições de uso",color:"green","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Por favor digite seu nome"}]},model:{value:e.aceitarTermos,callback:function(t){e.aceitarTermos=t},expression:"aceitarTermos"}}),!0===e.aceitarTermos?a("q-btn",{staticClass:"full-width",attrs:{type:"submit",color:"yellow-9",label:"Registra-se",unelevated:""}}):a("q-btn",{staticClass:"full-width",attrs:{color:"yellow-9",label:"Registra-se",unelevated:"",disabled:""}},[a("q-tooltip",{attrs:{"transition-show":"flip-right","transition-hide":"flip-left","content-class":"bg-red",offset:[0,5]}},[e._v("\n                Aceite os termos!\n            ")])],1)],1)],1)},s=[];window.axios=a("bc3a"),window.axios.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",window.axios.defaults.headers.put["Content-Type"]="application/x-www-form-urlencoded";var n={data:function(){return{aceitarTermos:!1,toSave:{}}},methods:{create:function(){var e=this;window.axios.post("".concat("http://api.absolutier.com.br/api/sistema/v1","/usuarios"),this.toSave).then((function(t){e.$q.notify({color:t.data.color,timeout:1e3,textColor:"white",icon:t.data.icon,message:t.data.msg,position:"top"}),!0===t.data.status?e.$router.push("/"):e.toSave={}}))}}},l=n,i=a("2877"),r=a("eebe"),u=a.n(r),c=a("9989"),m=a("0378"),d=a("27f9"),p=a("8f8e"),f=a("9c40"),h=a("05c0"),b=Object(i["a"])(l,o,s,!1,null,null,null);t["default"]=b.exports;u()(b,"components",{QPage:c["a"],QForm:m["a"],QInput:d["a"],QCheckbox:p["a"],QBtn:f["a"],QTooltip:h["a"]})}}]);