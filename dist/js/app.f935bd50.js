(function(){"use strict";var e={8543:function(e,t,l){var o=l(9242),n=l(2578),a=l(3396);const r={class:"container"};function i(e,t,l,o,n,i){const s=(0,a.up)("LegendBuilder");return(0,a.wg)(),(0,a.iD)("div",r,[(0,a.Wm)(s)])}l(2062);var s=l(7139),d=l(4870);l(7658);const c=(0,n.Q_)("legend",{state:()=>({title:"",description:"",creator:"",contact:"",version:"",license:"",created:(new Date).toISOString(),updated:(new Date).toISOString(),items:[],nextID:0}),getters:{itemCount:e=>e.items.length,palette:e=>e.items.map((e=>e.colour)).filter((e=>e))},actions:{reset(){this.title="",this.description="",this.creator="",this.contact="",this.version="",this.license="",this.created=(new Date).toISOString(),this.updated=this.created,this.items=[],this.nextID=0},importJSON(e){const t=JSON.parse(e);this.importData(t)},importData(e){this.reset(),this.setTitle(e.title||""),this.setDescription(e.description||""),this.setCreator(e.creator||""),this.setContact(e.contact||""),this.setVersion(e.version||""),this.setLicense(e.license||""),(e.items||[]).forEach((e=>this.addItem(e)))},exportJSON(){return JSON.stringify(this.$state)},stampUpdated(){this.updated=(new Date).toISOString()},setTitle(e){const t=(e||"").trim();this.title!==t&&(this.title=t,this.stampUpdated())},setDescription(e){const t=(e||"").trim();this.description!==t&&(this.description=t,this.stampUpdated())},setCreator(e){const t=(e||"").trim();this.creator!==t&&(this.creator=t,this.stampUpdated())},setContact(e){const t=(e||"").trim();this.contact!==t&&(this.contact=t,this.stampUpdated())},setVersion(e){const t=(e||"").trim();this.version!==t&&(this.version=t,this.stampUpdated())},setLicense(e){const t=(e||"").trim();this.license!==t&&(this.license=t,this.stampUpdated())},newItem(){this.addItem({colour:"#dddddd",label:"new item"})},addItem(e){this.items.push({...e,id:this.nextID++}),this.stampUpdated()},getItem(e){const t=this.items.find((t=>t.id===e));return t||null},delItem(e){this.items=this.items.filter((t=>t.id!==e)),this.stampUpdated()},setItemColour(e,t){const l=this.getItem(e);l&&l.colour!==t&&(l.colour=t,this.stampUpdated())},setItemLabel(e,t){const l=this.getItem(e);l&&l.label!==t&&(l.label=t,this.stampUpdated())}}}),u=e=>((0,a.dD)("data-v-6f13f370"),e=e(),(0,a.Cn)(),e),m={class:"legend-metadata"},p={class:"mb-2"},f=u((()=>(0,a._)("label",{for:"legend-title"},"Title",-1))),h={class:"mb-2"},v=u((()=>(0,a._)("label",{for:"legend-description"},"Description",-1))),g={class:"mb-2"},b=u((()=>(0,a._)("label",{for:"legend-creator"},"Creator",-1))),_={class:"mb-2"},y=u((()=>(0,a._)("label",{for:"legend-contact"},"Contact",-1))),w={class:"mb-2"},C=u((()=>(0,a._)("label",{for:"legend-version"},"Version",-1))),U={class:"mb-2"},I=u((()=>(0,a._)("label",{for:"legend-license"},"License",-1))),k={class:"mb-2"},F=u((()=>(0,a._)("label",{for:"legend-created"},"Created",-1))),x={class:"mb-2"},D=u((()=>(0,a._)("label",{for:"legend-updated"},"Updated",-1)));var L={__name:"LegendMetadata",setup(e){const t=c(),l=(0,a.Fl)({get(){return t.$state.title},set(e){t.setTitle(e)}}),n=(0,a.Fl)({get(){return t.$state.description},set(e){t.setDescription(e)}}),r=(0,a.Fl)({get(){return t.$state.creator},set(e){t.setCreator(e)}}),i=(0,a.Fl)({get(){return t.$state.contact},set(e){t.setContact(e)}}),s=(0,a.Fl)({get(){return t.$state.version},set(e){t.setVersion(e)}}),d=(0,a.Fl)({get(){return t.$state.license},set(e){t.setLicense(e)}}),u=(0,a.Fl)((()=>t.$state.created)),L=(0,a.Fl)((()=>t.$state.updated));return(e,t)=>((0,a.wg)(),(0,a.iD)("div",m,[(0,a._)("form",null,[(0,a._)("div",p,[f,(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>l.value=e),id:"legend-title",title:"legend title",placeholder:"enter a title for the legend",class:"form-control form-control-sm shadow-sm rounded hoverable"},null,512),[[o.nr,l.value]])]),(0,a._)("div",h,[v,(0,a.wy)((0,a._)("textarea",{type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>n.value=e),id:"legend-description",title:"legend description",placeholder:"enter a description for the legend",class:"form-control form-control-sm shadow-sm rounded hoverable"},"\n                ",512),[[o.nr,n.value]])]),(0,a._)("div",g,[b,(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=e=>r.value=e),id:"legend-creator",title:"legend creator",placeholder:"enter name of creator for the legend",class:"form-control form-control-sm shadow-sm rounded hoverable"},null,512),[[o.nr,r.value]])]),(0,a._)("div",_,[y,(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=e=>i.value=e),id:"legend-contact",title:"legend contact",placeholder:"enter contact details (e.g. email address) for the legend creator",class:"form-control form-control-sm shadow-sm rounded hoverable"},null,512),[[o.nr,i.value]])]),(0,a._)("div",w,[C,(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":t[4]||(t[4]=e=>s.value=e),id:"legend-version",title:"legend version",placeholder:"enter version for the legend",class:"form-control form-control-sm shadow-sm rounded hoverable"},null,512),[[o.nr,s.value]])]),(0,a._)("div",U,[I,(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":t[5]||(t[5]=e=>d.value=e),id:"legend-license",title:"legend license",placeholder:"enter license details (e.g. licence url) for the legend data",class:"form-control form-control-sm shadow-sm rounded hoverable"},null,512),[[o.nr,d.value]])]),(0,a._)("div",k,[F,(0,a.wy)((0,a._)("input",{id:"legend-created","aria-disabled":"true",class:"form-control form-control-sm shadow-sm rounded","onUpdate:modelValue":t[6]||(t[6]=e=>u.value=e),disabled:""},null,512),[[o.nr,u.value]])]),(0,a._)("div",x,[D,(0,a.wy)((0,a._)("input",{id:"legend-updated","aria-disabled":"true",class:"form-control form-control-sm shadow-sm rounded","onUpdate:modelValue":t[7]||(t[7]=e=>L.value=e),disabled:""},null,512),[[o.nr,L.value]])])])]))}},O=l(89);const S=(0,O.Z)(L,[["__scopeId","data-v-6f13f370"]]);var V=S;const j=e=>((0,a.dD)("data-v-1e8d36b8"),e=e(),(0,a.Cn)(),e),$={class:"input-group input-group-sm flex-nowrap m-0 p-0 border"},B={class:"input-group-text p-0 border-0"},M=["title","alt"],E={class:"input-group-text p-0 border-0"},N=["title"],R=j((()=>(0,a._)("i",{class:"bi bi-x-circle"},null,-1))),T=[R];var A={__name:"LegendItem",props:{colour:{type:String,required:!1,default:"#FFFFFF"},label:{type:String,required:!1,default:""}},emits:["changeColour","changeLabel","deleteItem"],setup(e,{emit:t}){const l=e,n=(0,a.Fl)({get(){return l.colour},set(e){t("changeColour",e)}}),r=(0,a.Fl)({get(){return l.label},set(e){t("changeLabel",e)}});return(t,l)=>((0,a.wg)(),(0,a.iD)("div",$,[(0,a._)("div",B,[(0,a.wy)((0,a._)("input",{type:"color",class:"legend-item-colour form-control form-control-sm form-control-color border-0 rounded-0","aria-label":"Colour",title:n.value,alt:n.value,"onUpdate:modelValue":l[0]||(l[0]=e=>n.value=e),onChange:l[1]||(l[1]=(...e)=>t.changeColour&&t.changeColour(...e))},null,40,M),[[o.nr,n.value]])]),(0,a.wy)((0,a._)("input",{type:"text",class:"legend-item-label form-control form-control-sm p-1 border-0",placeholder:"Enter label for the legend item","onUpdate:modelValue":l[2]||(l[2]=e=>r.value=e),onChange:l[3]||(l[3]=(...e)=>t.changeLabel&&t.changeLabel(...e))},null,544),[[o.nr,r.value]]),(0,a._)("div",E,[(0,a._)("button",{class:"btn btn-sm btn-outline-secondary border-0",title:`delete '${e.label}'`,alt:"delete item",onClick:l[4]||(l[4]=(0,o.iM)((e=>t.$emit("deleteItem")),["prevent"]))},T,8,N)])]))}};const J=(0,O.Z)(A,[["__scopeId","data-v-1e8d36b8"]]);var Z=J;const H=e=>((0,a.dD)("data-v-735a7136"),e=e(),(0,a.Cn)(),e),W=H((()=>(0,a._)("i",{class:"bi bi-plus-circle"},null,-1))),G={id:"legend-items",class:"legend-items list-group"};var q={__name:"LegendItems",setup(e){const t=c(),l=(0,a.Fl)((()=>t.$state.items)),n=()=>t.newItem(),r=e=>{confirm(`delete "${e.label}" - are you sure?`)&&t.delItem(e.id)},i=(e,l)=>t.setItemColour(e,l),s=(e,l)=>t.setItemLabel(e,l);return(e,t)=>((0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("button",{class:"btn btn-sm btn-outline-secondary mb-2",onClick:t[0]||(t[0]=(0,o.iM)((e=>n()),["prevent"])),title:"add item",alt:"add item",id:"add"},[W,(0,a.Uk)(" Add Item")]),(0,a._)("ul",G,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.value,((e,t)=>((0,a.wg)(),(0,a.iD)("li",{key:t,class:"list-group-item1 p-0"},[(0,a.Wm)((0,d.SU)(Z),{colour:e.colour,label:e.label,onChangeColour:t=>i(e.id,t),onChangeLabel:t=>s(e.id,t),onDeleteItem:t=>r(e)},null,8,["colour","label","onChangeColour","onChangeLabel","onDeleteItem"])])))),128))])]))}};const z=(0,O.Z)(q,[["__scopeId","data-v-735a7136"]]);var P=z;const K=e=>((0,a.dD)("data-v-2877f7de"),e=e(),(0,a.Cn)(),e),Q={class:"card"},Y=K((()=>(0,a._)("div",{class:"card-header text-center fw-bold"},"Legendary",-1))),X={class:"card-body p-2"},ee={class:"form-check form-check-inline"},te=K((()=>(0,a._)("label",{class:"form-check-label",for:"importFromFile"},"Import from file",-1))),le={class:"form-check form-check-inline"},oe=K((()=>(0,a._)("label",{class:"form-check-label",for:"importFromURL"},"Import from URL",-1))),ne=["onClick"],ae=K((()=>(0,a._)("span",null,[(0,a._)("i",{class:"bi bi-x-circle"}),(0,a.Uk)(" Clear All Data")],-1))),re=[ae],ie={class:"input-group input-group-sm p-1"},se=K((()=>(0,a._)("label",{for:"importFile",class:"input-group-text"},[(0,a._)("i",{class:"bi bi-filetype-json"}),(0,a.Uk)(" Import")],-1))),de=["onChange"],ce={class:"input-group input-group-sm p-1"},ue=K((()=>(0,a._)("label",{for:"importURL",class:"input-group-text"},[(0,a._)("i",{class:"bi bi-filetype-json"}),(0,a.Uk)(" Import")],-1))),me=["onClick"],pe=K((()=>(0,a._)("i",{class:"bi bi-check-circle"},null,-1))),fe={class:"input-group input-group-sm p-1"},he=K((()=>(0,a._)("label",{for:"exportfile",class:"input-group-text"},[(0,a._)("i",{class:"bi bi-filetype-json"}),(0,a.Uk)(" Export")],-1))),ve=["onClick"],ge=K((()=>(0,a._)("input",{type:"text",class:"form-control form-control-sm",disabled:""},null,-1))),be={class:"nav nav-tabs"},_e={class:"badge text-bg-light border rounded-pill"},ye={id:"Items",class:"tabcontent bg-light"},we={id:"Metadata",class:"tabcontent bg-light"},Ce={class:"card-footer small"};var Ue={__name:"LegendBuilder",setup(e){const t=c(),l=(0,a.Fl)((()=>t.items.length)),n=(0,d.iH)("fromFile"),r=(0,d.iH)(""),i=(0,d.iH)(""),u=(0,d.iH)("");(0,a.bv)((()=>{document.getElementById("defaultOpen").click()}));const m=()=>{confirm("This will clear all data, are you sure?")&&p()},p=()=>{document.getElementById("importFile").value="",n.value="fromFile",r.value="",i.value="",u.value="",t.reset()},f=e=>{u.value="",t.reset(),r.value=e.target.files[0];const l=new FileReader;l.onload=function(e){t.importJSON(e.target.result)},l.readAsText(r.value)},h=async()=>{u.value="",t.reset(),""!=i.value&&fetch(i.value,{headers:{accept:"application/json"}}).then((e=>e.json())).then((e=>t.importData(e))).catch((e=>u.value=e))},v=()=>(new Date).toISOString(),g=()=>v().replaceAll(/[:.\-Z]/g,""),b=()=>{const e=t.exportJSON(),l=r.value?.name||`legend-${g()}.json`;_(e,l),document.getElementById("importFile").value=""},_=(e,t)=>{let l=new Blob([e],{type:"text/plain;charset=utf-8;"});if(navigator.msSaveBlob)navigator.msSaveBlob(l,t);else{let e=document.createElement("a");if(void 0!==e.download){let o=URL.createObjectURL(l);e.setAttribute("href",o),e.setAttribute("download",t),e.style.visibility="hidden",document.body.appendChild(e),e.click(),document.body.removeChild(e)}}},y=(e,t)=>{var l,o;l=document.getElementsByClassName("tabcontent");for(let n=0;n<l.length;n++)l[n].style.display="none";o=document.getElementsByClassName("nav-link");for(let n=0;n<o.length;n++)o[n].className=o[n].className.replace(" active","");document.getElementById(t).style.display="block",e.currentTarget.className+=" active"};return(e,t)=>((0,a.wg)(),(0,a.iD)("div",Q,[Y,(0,a._)("div",X,[(0,a._)("form",null,[(0,a._)("div",ee,[(0,a.wy)((0,a._)("input",{class:"form-check-input",type:"radio",name:"importSource",id:"importFromFile",value:"fromFile","onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e)},null,512),[[o.G2,n.value]]),te]),(0,a._)("div",le,[(0,a.wy)((0,a._)("input",{class:"form-check-input",type:"radio",name:"importSource",id:"importFromURL",value:"fromURL","onUpdate:modelValue":t[1]||(t[1]=e=>n.value=e)},null,512),[[o.G2,n.value]]),oe]),(0,a._)("button",{type:"button",onClick:(0,o.iM)(m,["stop"]),class:"btn btn-sm btn-outline-secondary rounded shadow"},re,8,ne),(0,a.wy)((0,a._)("div",ie,[se,(0,a._)("input",{type:"file",id:"importFile",name:"importFile",accept:"application/json",class:"form-control form-control-sm",onChange:(0,o.iM)(f,["stop"])},null,40,de)],512),[[o.F8,"fromFile"==n.value]]),(0,a.wy)((0,a._)("div",ce,[ue,(0,a.wy)((0,a._)("input",{type:"text",id:"importURL",name:"importURL",class:"form-control form-control-sm","onUpdate:modelValue":t[2]||(t[2]=e=>i.value=e)},null,512),[[o.nr,i.value]]),(0,a._)("button",{type:"button",onClick:(0,o.iM)(h,["stop"]),class:"btn btn-sm btn-outline-secondary rounded shadow float-right"},[pe,(0,a.Uk)(" Go")],8,me)],512),[[o.F8,"fromURL"==n.value]]),(0,a._)("div",fe,[he,(0,a._)("button",{type:"button",id:"exportfile",name:"exportfile",class:"btn btn-sm btn-outline-secondary",onClick:(0,o.iM)(b,["stop"])},"Choose file",8,ve),ge])]),(0,a._)("div",be,[(0,a._)("a",{class:"nav-link",href:"#",onClick:t[3]||(t[3]=(0,o.iM)((e=>y(e,"Items")),["stop"])),id:"defaultOpen"},[(0,a.Uk)("Items "),(0,a._)("span",_e,(0,s.zw)(l.value),1)]),(0,a._)("a",{class:"nav-link",href:"#",onClick:t[4]||(t[4]=(0,o.iM)((e=>y(e,"Metadata")),["stop"]))},"Metadata")]),(0,a._)("div",ye,[(0,a.Wm)((0,d.SU)(P))]),(0,a._)("div",we,[(0,a.Wm)((0,d.SU)(V))])]),(0,a._)("div",Ce,(0,s.zw)(u.value),1)]))}};const Ie=(0,O.Z)(Ue,[["__scopeId","data-v-2877f7de"]]);var ke=Ie,Fe={name:"App",components:{LegendBuilder:ke}};const xe=(0,O.Z)(Fe,[["render",i]]);var De=xe;const Le=(0,n.WB)(),Oe=(0,o.ri)(De);Oe.use(Le),Oe.mount("#app")}},t={};function l(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,l),a.exports}l.m=e,function(){var e=[];l.O=function(t,o,n,a){if(!o){var r=1/0;for(c=0;c<e.length;c++){o=e[c][0],n=e[c][1],a=e[c][2];for(var i=!0,s=0;s<o.length;s++)(!1&a||r>=a)&&Object.keys(l.O).every((function(e){return l.O[e](o[s])}))?o.splice(s--,1):(i=!1,a<r&&(r=a));if(i){e.splice(c--,1);var d=n();void 0!==d&&(t=d)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[o,n,a]}}(),function(){l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,{a:t}),t}}(),function(){l.d=function(e,t){for(var o in t)l.o(t,o)&&!l.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};l.O.j=function(t){return 0===e[t]};var t=function(t,o){var n,a,r=o[0],i=o[1],s=o[2],d=0;if(r.some((function(t){return 0!==e[t]}))){for(n in i)l.o(i,n)&&(l.m[n]=i[n]);if(s)var c=s(l)}for(t&&t(o);d<r.length;d++)a=r[d],l.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return l.O(c)},o=self["webpackChunklegendary"]=self["webpackChunklegendary"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=l.O(void 0,[998],(function(){return l(8543)}));o=l.O(o)})();
//# sourceMappingURL=app.f935bd50.js.map