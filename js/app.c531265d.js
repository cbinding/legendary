(function(){"use strict";var e={4887:function(e,t,l){var o=l(9242),n=l(2578),a=l(3396);const s={class:"container"};function r(e,t,l,o,n,r){const i=(0,a.up)("LegendBuilder");return(0,a.wg)(),(0,a.iD)("div",s,[(0,a.Wm)(i)])}l(2062);var i=l(7139),c=l(4870);l(7658);const d=(0,n.Q_)("legend",{state:()=>({title:"",description:"",creator:"",contact:"",version:"",license:"",created:(new Date).toISOString(),updated:(new Date).toISOString(),items:[],nextID:0}),getters:{itemCount:e=>e.items.length,palette:e=>e.items.map((e=>e.colour)).filter((e=>e))},actions:{reset(){this.title="",this.description="",this.creator="",this.contact="",this.version="",this.license="",this.created=(new Date).toISOString(),this.updated=this.created,this.items=[],this.nextID=0},importJSON(e){const t=JSON.parse(e);this.importData(t)},importData(e){this.reset(),this.setTitle(e.title||""),this.setDescription(e.description||""),this.setCreator(e.creator||""),this.setContact(e.contact||""),this.setVersion(e.version||""),this.setLicense(e.license||""),(e.items||[]).forEach((e=>this.addItem(e)))},exportJSON(){return JSON.stringify(this.$state)},stampUpdated(){this.updated=(new Date).toISOString()},setTitle(e){const t=(e||"").trim();this.title!==t&&(this.title=t,this.stampUpdated())},setDescription(e){const t=(e||"").trim();this.description!==t&&(this.description=t,this.stampUpdated())},setCreator(e){const t=(e||"").trim();this.creator!==t&&(this.creator=t,this.stampUpdated())},setContact(e){const t=(e||"").trim();this.contact!==t&&(this.contact=t,this.stampUpdated())},setVersion(e){const t=(e||"").trim();this.version!==t&&(this.version=t,this.stampUpdated())},setLicense(e){const t=(e||"").trim();this.license!==t&&(this.license=t,this.stampUpdated())},newItem(){this.addItem({colour:"#dddddd",label:"new item"})},addItem(e){this.items.push({...e,id:this.nextID++}),this.stampUpdated()},getItem(e){const t=this.items.find((t=>t.id===e));return t||null},delItem(e){this.items=this.items.filter((t=>t.id!==e)),this.stampUpdated()},setItemColour(e,t){const l=this.getItem(e);l&&l.colour!==t&&(l.colour=t,this.stampUpdated())},setItemLabel(e,t){const l=this.getItem(e);l&&l.label!==t&&(l.label=t,this.stampUpdated())}}}),u=e=>((0,a.dD)("data-v-27d54888"),e=e(),(0,a.Cn)(),e),m={class:"legend-metadata"},p={class:"mb-2"},v=u((()=>(0,a._)("label",{for:"legend-title",class:"small"},"Title",-1))),b={class:"mb-2"},f=u((()=>(0,a._)("label",{for:"legend-description",class:"small"},"Description",-1))),h={class:"mb-2"},g=u((()=>(0,a._)("label",{for:"legend-creator",class:"small"},"Creator",-1))),_={class:"mb-2"},y=u((()=>(0,a._)("label",{for:"legend-contact",class:"small"},"Contact",-1))),w={class:"mb-2"},C=u((()=>(0,a._)("label",{for:"legend-version",class:"small"},"Version",-1))),I={class:"mb-2"},U=u((()=>(0,a._)("label",{for:"legend-license",class:"small"},"License",-1))),k={class:"mb-2"},F=u((()=>(0,a._)("label",{for:"legend-created",class:"small"},"Created",-1))),x={class:"mb-2"},D=u((()=>(0,a._)("label",{for:"legend-updated",class:"small"},"Updated",-1)));var L={__name:"LegendMetadata",setup(e){const t=d(),l=(0,a.Fl)({get(){return t.$state.title},set(e){t.setTitle(e)}}),n=(0,a.Fl)({get(){return t.$state.description},set(e){t.setDescription(e)}}),s=(0,a.Fl)({get(){return t.$state.creator},set(e){t.setCreator(e)}}),r=(0,a.Fl)({get(){return t.$state.contact},set(e){t.setContact(e)}}),i=(0,a.Fl)({get(){return t.$state.version},set(e){t.setVersion(e)}}),c=(0,a.Fl)({get(){return t.$state.license},set(e){t.setLicense(e)}}),u=(0,a.Fl)((()=>t.$state.created)),L=(0,a.Fl)((()=>t.$state.updated));return(e,t)=>((0,a.wg)(),(0,a.iD)("div",m,[(0,a._)("form",null,[(0,a._)("div",p,[v,(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>l.value=e),id:"legend-title",title:"legend title",placeholder:"enter a title for the legend",class:"form-control form-control-sm shadow-sm rounded hoverable"},null,512),[[o.nr,l.value]])]),(0,a._)("div",b,[f,(0,a.wy)((0,a._)("textarea",{type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>n.value=e),id:"legend-description",title:"legend description",placeholder:"enter a description for the legend",class:"form-control form-control-sm shadow-sm rounded hoverable"},"\n                ",512),[[o.nr,n.value]])]),(0,a._)("div",h,[g,(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=e=>s.value=e),id:"legend-creator",title:"legend creator",placeholder:"enter name of creator for the legend",class:"form-control form-control-sm shadow-sm rounded hoverable"},null,512),[[o.nr,s.value]])]),(0,a._)("div",_,[y,(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=e=>r.value=e),id:"legend-contact",title:"legend contact",placeholder:"enter contact details (e.g. email address) for the legend creator",class:"form-control form-control-sm shadow-sm rounded hoverable"},null,512),[[o.nr,r.value]])]),(0,a._)("div",w,[C,(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":t[4]||(t[4]=e=>i.value=e),id:"legend-version",title:"legend version",placeholder:"enter version for the legend",class:"form-control form-control-sm shadow-sm rounded hoverable"},null,512),[[o.nr,i.value]])]),(0,a._)("div",I,[U,(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":t[5]||(t[5]=e=>c.value=e),id:"legend-license",title:"legend license",placeholder:"enter license details (e.g. licence url) for the legend data",class:"form-control form-control-sm shadow-sm rounded hoverable"},null,512),[[o.nr,c.value]])]),(0,a._)("div",k,[F,(0,a.wy)((0,a._)("input",{id:"legend-created","aria-disabled":"true",class:"form-control form-control-sm shadow-sm rounded","onUpdate:modelValue":t[6]||(t[6]=e=>u.value=e),disabled:""},null,512),[[o.nr,u.value]])]),(0,a._)("div",x,[D,(0,a.wy)((0,a._)("input",{id:"legend-updated","aria-disabled":"true",class:"form-control form-control-sm shadow-sm rounded","onUpdate:modelValue":t[7]||(t[7]=e=>L.value=e),disabled:""},null,512),[[o.nr,L.value]])])])]))}},S=l(89);const O=(0,S.Z)(L,[["__scopeId","data-v-27d54888"]]);var V=O;const j=e=>((0,a.dD)("data-v-1e8d36b8"),e=e(),(0,a.Cn)(),e),M={class:"input-group input-group-sm flex-nowrap m-0 p-0 border"},$={class:"input-group-text p-0 border-0"},B=["title","alt"],E={class:"input-group-text p-0 border-0"},N=["title"],R=j((()=>(0,a._)("i",{class:"bi bi-x-circle"},null,-1))),T=[R];var A={__name:"LegendItem",props:{colour:{type:String,required:!1,default:"#FFFFFF"},label:{type:String,required:!1,default:""}},emits:["changeColour","changeLabel","deleteItem"],setup(e,{emit:t}){const l=e,n=(0,a.Fl)({get(){return l.colour},set(e){t("changeColour",e)}}),s=(0,a.Fl)({get(){return l.label},set(e){t("changeLabel",e)}});return(t,l)=>((0,a.wg)(),(0,a.iD)("div",M,[(0,a._)("div",$,[(0,a.wy)((0,a._)("input",{type:"color",class:"legend-item-colour form-control form-control-sm form-control-color border-0 rounded-0","aria-label":"Colour",title:n.value,alt:n.value,"onUpdate:modelValue":l[0]||(l[0]=e=>n.value=e),onChange:l[1]||(l[1]=(...e)=>t.changeColour&&t.changeColour(...e))},null,40,B),[[o.nr,n.value]])]),(0,a.wy)((0,a._)("input",{type:"text",class:"legend-item-label form-control form-control-sm p-1 border-0",placeholder:"Enter label for the legend item","onUpdate:modelValue":l[2]||(l[2]=e=>s.value=e),onChange:l[3]||(l[3]=(...e)=>t.changeLabel&&t.changeLabel(...e))},null,544),[[o.nr,s.value]]),(0,a._)("div",E,[(0,a._)("button",{class:"btn btn-sm btn-outline-secondary border-0",title:`delete '${e.label}'`,alt:"delete item",onClick:l[4]||(l[4]=(0,o.iM)((e=>t.$emit("deleteItem")),["prevent"]))},T,8,N)])]))}};const Z=(0,S.Z)(A,[["__scopeId","data-v-1e8d36b8"]]);var H=Z;const J=e=>((0,a.dD)("data-v-0f2cf8f1"),e=e(),(0,a.Cn)(),e),P=J((()=>(0,a._)("i",{class:"bi bi-plus-circle me-1"},null,-1))),W={id:"legend-items",class:"legend-items list-group"};var z={__name:"LegendItems",setup(e){const t=d(),l=(0,a.Fl)((()=>t.$state.items)),n=()=>t.newItem(),s=e=>{confirm(`delete "${e.label}" - are you sure?`)&&t.delItem(e.id)},r=(e,l)=>t.setItemColour(e,l),i=(e,l)=>t.setItemLabel(e,l);return(e,t)=>((0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("button",{class:"btn btn-sm btn-outline-secondary mb-2",onClick:t[0]||(t[0]=(0,o.iM)((e=>n()),["prevent"])),title:"add item",alt:"add item",id:"add"},[P,(0,a.Uk)("Add Item")]),(0,a._)("ul",W,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.value,((e,t)=>((0,a.wg)(),(0,a.iD)("li",{key:t,class:"list-group-item1 p-0"},[(0,a.Wm)((0,c.SU)(H),{colour:e.colour,label:e.label,onChangeColour:t=>r(e.id,t),onChangeLabel:t=>i(e.id,t),onDeleteItem:t=>s(e)},null,8,["colour","label","onChangeColour","onChangeLabel","onDeleteItem"])])))),128))])]))}};const G=(0,S.Z)(z,[["__scopeId","data-v-0f2cf8f1"]]);var q=G;const K=e=>((0,a.dD)("data-v-15a62393"),e=e(),(0,a.Cn)(),e),Y={class:"palette-display"},Q=["alt","title"],X=["onClick","disabled"],ee=K((()=>(0,a._)("i",{class:"bi bi-clipboard-plus me-1"},null,-1))),te=K((()=>(0,a._)("span",null,"Copy to clipboard",-1))),le=[ee,te];var oe={__name:"PaletteDisplay",props:{colours:{type:Array,default(){return[]}}},setup(e){const t=e,l=async()=>await navigator.clipboard.writeText(t.colours.join());return(t,n)=>((0,a.wg)(),(0,a.iD)("div",Y,[(0,a._)("div",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.colours,((e,t)=>((0,a.wg)(),(0,a.iD)("span",{key:t,alt:e,title:e,class:"swatch border-1 rounded-2 align-middle",style:(0,i.j5)({"background-color":e})},(0,i.zw)(e),13,Q)))),128))]),(0,a._)("button",{type:"button",class:"btn btn-sm btn-outline-secondary align-middle m-2",title:"copy palette colour values to clipboard",onClick:(0,o.iM)(l,["stop"]),disabled:!e.colours.length},le,8,X)]))}};const ne=(0,S.Z)(oe,[["__scopeId","data-v-15a62393"]]);var ae=ne;const se=e=>((0,a.dD)("data-v-92019642"),e=e(),(0,a.Cn)(),e),re={class:"card"},ie=se((()=>(0,a._)("div",{class:"card-header text-center fw-bold"},"Legendary",-1))),ce={class:"card-body p-2"},de={class:"form-check form-check-inline"},ue=se((()=>(0,a._)("label",{class:"form-check-label",for:"importFromFile"},"Import from file",-1))),me={class:"form-check form-check-inline"},pe=se((()=>(0,a._)("label",{class:"form-check-label",for:"importFromURL"},"Import from URL",-1))),ve=["onClick"],be=se((()=>(0,a._)("i",{class:"bi bi-x-circle me-1"},null,-1))),fe=se((()=>(0,a._)("span",null,"Clear All Data",-1))),he=[be,fe],ge={class:"input-group input-group-sm p-1"},_e=se((()=>(0,a._)("label",{for:"importFile",class:"input-group-text"},[(0,a._)("i",{class:"bi bi-filetype-json me-1"}),(0,a.Uk)("Import")],-1))),ye=["onChange"],we={class:"input-group input-group-sm p-1"},Ce=se((()=>(0,a._)("label",{for:"importURL",class:"input-group-text"},[(0,a._)("i",{class:"bi bi-filetype-json me-1"}),(0,a.Uk)("Import")],-1))),Ie=["onClick"],Ue=se((()=>(0,a._)("i",{class:"bi bi-check-circle me-1"},null,-1))),ke={class:"input-group input-group-sm p-1"},Fe=se((()=>(0,a._)("label",{for:"exportfile",class:"input-group-text"},[(0,a._)("i",{class:"bi bi-filetype-json me-1"}),(0,a.Uk)("Export")],-1))),xe=["onClick"],De=se((()=>(0,a._)("input",{type:"text",class:"form-control form-control-sm",disabled:""},null,-1))),Le={class:"nav nav-tabs"},Se=se((()=>(0,a._)("span",null,"Items",-1))),Oe={class:"badge text-bg-light ms-1 border rounded-pill"},Ve={id:"Items",class:"tabcontent bg-light"},je={id:"Metadata",class:"tabcontent bg-light"},Me={id:"Palette",class:"tabcontent bg-light"},$e={class:"card-footer small"};var Be={__name:"LegendBuilder",setup(e){const t=d(),l=(0,a.Fl)((()=>t.items.length)),n=(0,a.Fl)((()=>t.palette)),s=(0,c.iH)("fromFile"),r=(0,c.iH)(""),u=(0,c.iH)(""),m=(0,c.iH)("");(0,a.bv)((()=>{document.getElementById("defaultOpen").click()}));const p=()=>{confirm("This will clear all data, are you sure?")&&v()},v=()=>{document.getElementById("importFile").value="",s.value="fromFile",r.value="",u.value="",m.value="",t.reset()},b=e=>{m.value="",t.reset(),r.value=e.target.files[0];const l=new FileReader;l.onload=function(e){t.importJSON(e.target.result)},l.readAsText(r.value)},f=async()=>{m.value="",t.reset(),""!=u.value&&fetch(u.value,{headers:{accept:"application/json"}}).then((e=>e.json())).then((e=>t.importData(e))).catch((e=>m.value=e))},h=()=>(new Date).toISOString(),g=()=>h().replaceAll(/[:.\-Z]/g,""),_=()=>{const e=t.exportJSON(),l=r.value?.name||`legend-${g()}.json`;y(e,l),document.getElementById("importFile").value=""},y=(e,t)=>{let l=new Blob([e],{type:"text/plain;charset=utf-8;"});if(navigator.msSaveBlob)navigator.msSaveBlob(l,t);else{let e=document.createElement("a");if(void 0!==e.download){let o=URL.createObjectURL(l);e.setAttribute("href",o),e.setAttribute("download",t),e.style.visibility="hidden",document.body.appendChild(e),e.click(),document.body.removeChild(e)}}},w=(e,t)=>{var l,o;l=document.getElementsByClassName("tabcontent");for(let n=0;n<l.length;n++)l[n].style.display="none";o=document.getElementsByClassName("nav-link");for(let n=0;n<o.length;n++)o[n].className=o[n].className.replace(" active","");document.getElementById(t).style.display="block",e.currentTarget.className+=" active"};return(e,t)=>((0,a.wg)(),(0,a.iD)("div",re,[ie,(0,a._)("div",ce,[(0,a._)("form",null,[(0,a._)("div",de,[(0,a.wy)((0,a._)("input",{class:"form-check-input",type:"radio",name:"importSource",id:"importFromFile",value:"fromFile","onUpdate:modelValue":t[0]||(t[0]=e=>s.value=e)},null,512),[[o.G2,s.value]]),ue]),(0,a._)("div",me,[(0,a.wy)((0,a._)("input",{class:"form-check-input",type:"radio",name:"importSource",id:"importFromURL",value:"fromURL","onUpdate:modelValue":t[1]||(t[1]=e=>s.value=e)},null,512),[[o.G2,s.value]]),pe]),(0,a._)("button",{type:"button",onClick:(0,o.iM)(p,["stop"]),class:"btn btn-sm btn-outline-secondary rounded shadow"},he,8,ve),(0,a.wy)((0,a._)("div",ge,[_e,(0,a._)("input",{type:"file",id:"importFile",name:"importFile",accept:"application/json",class:"form-control form-control-sm",onChange:(0,o.iM)(b,["stop"])},null,40,ye)],512),[[o.F8,"fromFile"==s.value]]),(0,a.wy)((0,a._)("div",we,[Ce,(0,a.wy)((0,a._)("input",{type:"text",id:"importURL",name:"importURL",class:"form-control form-control-sm","onUpdate:modelValue":t[2]||(t[2]=e=>u.value=e)},null,512),[[o.nr,u.value]]),(0,a._)("button",{type:"button",onClick:(0,o.iM)(f,["stop"]),class:"btn btn-sm btn-outline-secondary rounded shadow float-right"},[Ue,(0,a.Uk)("Go")],8,Ie)],512),[[o.F8,"fromURL"==s.value]]),(0,a._)("div",ke,[Fe,(0,a._)("button",{type:"button",id:"exportfile",name:"exportfile",class:"btn btn-sm btn-outline-secondary",onClick:(0,o.iM)(_,["stop"])},"Choose file",8,xe),De])]),(0,a._)("div",Le,[(0,a._)("a",{class:"nav-link",href:"#",onClick:t[3]||(t[3]=(0,o.iM)((e=>w(e,"Items")),["stop"])),id:"defaultOpen"},[Se,(0,a._)("span",Oe,(0,i.zw)(l.value),1)]),(0,a._)("a",{class:"nav-link",href:"#",onClick:t[4]||(t[4]=(0,o.iM)((e=>w(e,"Metadata")),["stop"]))},"Metadata"),(0,a._)("a",{class:"nav-link",href:"#",onClick:t[5]||(t[5]=(0,o.iM)((e=>w(e,"Palette")),["stop"]))},"Palette")]),(0,a._)("div",Ve,[(0,a.Wm)((0,c.SU)(q))]),(0,a._)("div",je,[(0,a.Wm)((0,c.SU)(V))]),(0,a._)("div",Me,[(0,a.Wm)((0,c.SU)(ae),{colours:n.value},null,8,["colours"])])]),(0,a._)("div",$e,(0,i.zw)(m.value),1)]))}};const Ee=(0,S.Z)(Be,[["__scopeId","data-v-92019642"]]);var Ne=Ee,Re={name:"App",components:{LegendBuilder:Ne}};const Te=(0,S.Z)(Re,[["render",r]]);var Ae=Te;const Ze=(0,n.WB)(),He=(0,o.ri)(Ae);He.use(Ze),He.mount("#app")}},t={};function l(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,l),a.exports}l.m=e,function(){var e=[];l.O=function(t,o,n,a){if(!o){var s=1/0;for(d=0;d<e.length;d++){o=e[d][0],n=e[d][1],a=e[d][2];for(var r=!0,i=0;i<o.length;i++)(!1&a||s>=a)&&Object.keys(l.O).every((function(e){return l.O[e](o[i])}))?o.splice(i--,1):(r=!1,a<s&&(s=a));if(r){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[o,n,a]}}(),function(){l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,{a:t}),t}}(),function(){l.d=function(e,t){for(var o in t)l.o(t,o)&&!l.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};l.O.j=function(t){return 0===e[t]};var t=function(t,o){var n,a,s=o[0],r=o[1],i=o[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(n in r)l.o(r,n)&&(l.m[n]=r[n]);if(i)var d=i(l)}for(t&&t(o);c<s.length;c++)a=s[c],l.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return l.O(d)},o=self["webpackChunklegendary"]=self["webpackChunklegendary"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=l.O(void 0,[998],(function(){return l(4887)}));o=l.O(o)})();
//# sourceMappingURL=app.c531265d.js.map