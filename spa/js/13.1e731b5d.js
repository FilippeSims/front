(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{f5f1:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-page",{attrs:{padding:""}},[r("q-breadcrumbs",[r("q-breadcrumbs-el",{attrs:{icon:"home",to:"/sistema"}}),r("q-breadcrumbs-el",{attrs:{label:"Registro",icon:"widgets",to:"/sistema/registro"}})],1),!0===e.inserirForm?r("div",{attrs:{id:"tituloForm"}},[r("b",[e._v("Inserir registro")])]):e._e(),!0===e.editarForm&&e.checkReg.length<2&&0!=e.checkReg.length?r("div",{attrs:{id:"tituloForm"}},[r("b",[e._v("Editar registro")])]):e._e(),!0===e.inserirForm||!0===e.editarForm&&e.checkReg.length<2&&0!=e.checkReg.length?r("q-form",{staticClass:"q-gutter-md q-mt-sm",on:{submit:function(t){return t.preventDefault(),e.save()}}},[r("q-input",{attrs:{filled:"",dense:"",prefix:"R$",label:"Valor",hint:"Valor do registro","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Por favor digite o valor"}]},model:{value:e.toSave.valorreg,callback:function(t){e.$set(e.toSave,"valorreg",t)},expression:"toSave.valorreg"}}),r("q-input",{attrs:{filled:"",dense:"",label:"Observação",hint:"Observação do registro","hide-underline":"true",type:"textarea",rows:"3"},model:{value:e.toSave.obsreg,callback:function(t){e.$set(e.toSave,"obsreg",t)},expression:"toSave.obsreg"}}),r("q-input",{attrs:{filled:"",dense:"",label:"Descrição",hint:"Descrição do registro","hide-underline":"true",type:"textarea",rows:"3"},model:{value:e.toSave.descreg,callback:function(t){e.$set(e.toSave,"descreg",t)},expression:"toSave.descreg"}}),r("div",[r("q-btn",{staticClass:"q-mb-sm float-left",attrs:{type:"submit",color:"green",icon:"send",unelevated:""}})],1)],1):e._e(),!1===e.inserirForm?r("q-btn",{staticClass:"q-mb-sm float-right",attrs:{color:"green",icon:"add_circle",unelevated:"",dense:""},on:{click:function(t){return e.inserirShow(!0)}}}):e._e(),!0===e.inserirForm||!0===e.editarForm&&0!=e.checkReg.length?r("q-btn",{staticClass:"q-mr-sm float-right",attrs:{color:"red",icon:"remove_circle",unelevated:"",dense:""},on:{click:function(t){e.inserirShow(!1),e.editarShow(!1)}}}):e._e(),!1===e.inserirForm&&e.checkReg.length>0?r("q-btn",{staticClass:"q-mr-sm float-right",attrs:{color:"red",icon:"delete_forever",unelevated:"",dense:""},on:{click:function(t){return e.remove(e.checkReg)}}}):e._e(),!1===e.inserirForm&&e.checkReg.length>0&&e.checkReg.length<2?r("q-btn",{staticClass:"q-mr-sm float-right",attrs:{color:"primary",icon:"edit",unelevated:"",dense:""},on:{click:[function(t){return t.preventDefault(),e.toUpdate(e.checkReg[0])},function(t){return e.editarShow(!0)}]}}):e._e(),r("table",[r("thead",[r("tr",[r("th",{attrs:{scope:"col"}},[e._v("Ação")]),r("th",{attrs:{scope:"col"}},[e._v("Número Registro")]),r("th",{attrs:{scope:"col"}},[e._v("Data Registro")]),r("th",{attrs:{scope:"col"}},[e._v("Valor Registro")]),r("th",{attrs:{scope:"col"}},[e._v("Observação Registro")]),r("th",{attrs:{scope:"col"}},[e._v("Descrição Registro")])])]),r("tbody",e._l(e.registros,(function(t,a){return r("tr",{key:a},[r("td",{attrs:{"data-label":"Ação Reg"}},[r("q-checkbox",{attrs:{val:t.nreg},model:{value:e.checkReg,callback:function(t){e.checkReg=t},expression:"checkReg"}})],1),null===t.nreg?r("td",{attrs:{"data-label":"Número Reg"}},[r("q-badge",{staticClass:"q-ml-sm",attrs:{color:"red"}},[e._v("NULL")])],1):r("td",{attrs:{"data-label":"Número Reg"}},[e._v(" "+e._s(t.nreg)+" ")]),null===t.dtreg?r("td",{attrs:{"data-label":"Data Reg"}},[r("q-badge",{staticClass:"q-ml-sm",attrs:{color:"red"}},[e._v("NULL")])],1):r("td",{attrs:{"data-label":"Data Reg"}},[e._v(" "+e._s(e._f("formatDate")(t.dtreg))+" ")]),null===t.valorreg?r("td",{attrs:{"data-label":"Valor Reg"}},[r("q-badge",{staticClass:"q-ml-sm",attrs:{color:"red"}},[e._v("NULL")])],1):r("td",{attrs:{"data-label":"Valor Reg"}},[e._v(" "+e._s("R$ "+e.formatPrice(t.valorreg))+" ")]),null===t.obsreg?r("td",{attrs:{"data-label":"Observação Reg"}},[r("q-badge",{staticClass:"q-ml-sm",attrs:{color:"red"}},[e._v("NULL")])],1):r("td",{attrs:{"data-label":"Observação Reg"}},[e._v(" "+e._s(t.obsreg)+" ")]),null===t.descreg?r("td",{attrs:{"data-label":"Descrição Reg"}},[r("q-badge",{staticClass:"q-ml-sm",attrs:{color:"red"}},[e._v("NULL")])],1):r("td",{attrs:{"data-label":"Descrição Reg"}},[e._v(" "+e._s(t.descreg)+" ")])])})),0)])],1)},o=[],s=(r("7514"),r("6b54"),r("06db"),r("a481"),localStorage.getItem("token")),i={data:function(){return{registros:{data:[]},checkReg:[],toSave:{},inserirForm:!1,editarForm:!1,updateStatus:!1,token:{tokenUser:s}}},methods:{save:function(){this.updateStatus?this.update():this.create()},inserirShow:function(e){this.inserirForm=e,this.toSave={},this.checkReg=[]},editarShow:function(e){this.editarForm=e},formatPrice:function(e){var t=(e/1).toFixed(2).replace(".",",");return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")},getList:function(){var e=this;window.axios.get("".concat("http://api.absolutier.com.br/api/sistema/v1","/registro"),{headers:{"x-access-token":this.token.tokenUser}}).then((function(t){e.registros=t.data}))},remove:function(e){var t=this;confirm("Você tem certeza que deseja apagar?")&&window.axios.delete("".concat("http://api.absolutier.com.br/api/sistema/v1","/registro/")+e,{headers:{"x-access-token":this.token.tokenUser}}).then((function(e){t.getList(),t.checkReg=[],t.$q.notify({color:e.data.color,timeout:1e4,textColor:"white",icon:e.data.icon,message:e.data.msg,position:"top"})}))},create:function(){var e=this;window.axios.post("".concat("http://api.absolutier.com.br/api/sistema/v1","/registro"),this.toSave,{headers:{"x-access-token":this.token.tokenUser}}).then((function(){e.toSave={},e.inserirForm=!1,e.editarForm=!1,e.getList(),e.$q.notify({color:"green",timeout:1e3,textColor:"white",icon:"tag_faces",message:"Registro inserido com sucesso!",position:"top"})}))},update:function(){var e=this;window.axios.put("".concat("http://api.absolutier.com.br/api/sistema/v1","/registro/")+this.toSave.nreg,this.toSave,{headers:{"x-access-token":this.token.tokenUser}}).then((function(){e.updateStatus=!1,e.toSave={},e.inserirForm=!1,e.editarForm=!1,e.getList(),e.$q.notify({color:"green",timeout:1e3,textColor:"white",icon:"tag_faces",message:"Registro editado com sucesso!",position:"top"})}))},toUpdate:function(e){this.updateStatus=e;var t=this.registros,r=t.find((function(t){return t.nreg===e}));this.toSave=r}},mounted:function(){this.getList()}},n=i,c=r("2877"),l=r("eebe"),d=r.n(l),g=r("9989"),u=r("ead5"),m=r("079e"),h=r("0378"),v=r("27f9"),b=r("9c40"),f=r("8f8e"),p=r("58a8"),k=Object(c["a"])(n,a,o,!1,null,null,null);t["default"]=k.exports;d()(k,"components",{QPage:g["a"],QBreadcrumbs:u["a"],QBreadcrumbsEl:m["a"],QForm:h["a"],QInput:v["a"],QBtn:b["a"],QCheckbox:f["a"],QBadge:p["a"]})}}]);