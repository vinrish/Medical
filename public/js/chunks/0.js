(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{Bdqv:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,"button[data-v-3acd690a]{width:20px;height:20px;margin:0;padding:0}button .material-icons[data-v-3acd690a]{line-height:20px;font-size:20px}.vue-dropzone .table *[data-v-3acd690a]{cursor:auto}.vue-dropzone .table a[data-v-3acd690a],.vue-dropzone .table button.btn[data-v-3acd690a],.vue-dropzone .table button.btn i[data-v-3acd690a]{cursor:pointer}.table thead tr th[data-v-3acd690a]{color:rgba(0,0,0,.57);font-weight:500}.table tbody tr td[data-v-3acd690a]{color:rgba(0,0,0,.54);font-weight:400}.table tbody tr td.file-name[data-v-3acd690a],.table tbody tr td a[data-v-3acd690a]{color:#202124}.table tbody tr td a[data-v-3acd690a]:hover{text-decoration:underline}.table tbody tr td[data-v-3acd690a],.table thead tr th[data-v-3acd690a]{font-size:13px}.table td>div[data-v-3acd690a],.table th>div[data-v-3acd690a]{position:relative}.progress[data-v-3acd690a]{height:4px;border-radius:0}",""])},BgR8:function(t,e,a){var s=a("cTAv");"string"==typeof s&&(s=[[t.i,s,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(s,i);s.locals&&(t.exports=s.locals)},"M6B+":function(t,e,a){"use strict";a("BgR8")},"Qv/Y":function(t,e,a){var s=a("Bdqv");"string"==typeof s&&(s=[[t.i,s,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(s,i);s.locals&&(t.exports=s.locals)},ZX6z:function(t,e,a){"use strict";var s=a("ksP6"),i=a.n(s),r={name:"AttachmentList",props:{tmpAttachments:{type:Array,default:[]},attachments:{type:Array},modelId:{type:Number,default:0}},methods:{checkProgress:function(t){return this.tableKey+=1,null!==t.progress},isCanceledOrError:function(t){return"canceled"===t.status||"error"===t.status},isUploading:function(t){return"canceled"===t.status||"error"===t.status||"success"===t.status},removeTmpFile:function(t){this.$emit("tmp-file-removed",t)},filesize:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(0===t)return"0 Bytes";var a=1e3,s=e<0?0:e,i=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],r=Math.floor(Math.log(t)/Math.log(a));return parseFloat((t/Math.pow(a,r)).toFixed(s))+" "+i[r]}}},o=(a("dXTS"),a("KHd+")),n=Object(o.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"attachment-list-container",on:{click:function(t){t.stopPropagation()}}},[a("table",{staticClass:"table table-hover"},[t._m(0),t._v(" "),a("tbody",[t._l(t.attachments,(function(e){return[e.wasRecentlyCreated?t._e():a("tr",{key:e.id},[a("td",{staticClass:"font-weight-bold"},[a("a",{attrs:{href:e.url,target:"_blank"}},[t._v("\n              "+t._s(e.file_name)+"\n            ")])]),t._v(" "),a("td",{attrs:{width:"415"}},[t._v("—")]),t._v(" "),a("td",{attrs:{width:"140"}},[t._v(t._s(t.filesize(e.size)))]),t._v(" "),a("td",{attrs:{width:"36"}},[a("button",{staticClass:"btn btn-round btn-link text-rose",attrs:{type:"button"},on:{click:function(a){return t.$emit("file-removed",e)}}},[a("i",{staticClass:"material-icons"},[t._v("\n                delete\n              ")])])])])]})),t._v(" "),t._l(t.tmpAttachments,(function(e){return a("tr",{key:e.uuid},[a("td",{staticClass:"font-weight-bold file-name"},[t._v(t._s(e.file_name))]),t._v(" "),a("td",{attrs:{width:"415"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.checkProgress(e)&&!t.isCanceledOrError(e.o),expression:"checkProgress(file) && !isCanceledOrError(file.o)"}],staticClass:"progress"},[a("div",{staticClass:"progress-bar progress-bar-striped",class:{"progress-bar-animated":e.progress<100,"bg-success":100==e.progress},style:{width:e.progress+"%"},attrs:{role:"progressbar","aria-valuenow":e.progress,"aria-valuemin":"0","aria-valuemax":"100"}})]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.checkProgress(e)&&!t.isCanceledOrError(e.o),expression:"!checkProgress(file) && !isCanceledOrError(file.o)"}],staticClass:"text-capitalize"},[t._v("\n            "+t._s(e.o.status)+"\n          ")]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.errorMsg,expression:"file.errorMsg"}],staticClass:"text-danger"},[t._v("\n            "+t._s(e.errorMsg)+"\n          ")])]),t._v(" "),a("td",{attrs:{width:"140"}},[t._v(t._s(t.filesize(e.size)))]),t._v(" "),a("td",{attrs:{width:"36"}},[a("button",{staticClass:"btn btn-round btn-link text-rose",attrs:{type:"button"},on:{click:function(a){return t.removeTmpFile(e)}}},[a("i",{directives:[{name:"show",rawName:"v-show",value:t.isUploading(e.o),expression:"isUploading(file.o)"}],staticClass:"material-icons",attrs:{title:"Remove"}},[t._v("\n              delete\n            ")]),t._v(" "),a("i",{directives:[{name:"show",rawName:"v-show",value:!t.isUploading(e.o),expression:"!isUploading(file.o)"}],staticClass:"material-icons",attrs:{title:"Cancel"}},[t._v("\n              close\n            ")])])])])}))],2)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Name")]),this._v(" "),e("th",{attrs:{width:"415"}},[this._v("Status")]),this._v(" "),e("th",{attrs:{width:"140"}},[this._v("File size")]),this._v(" "),e("th",{attrs:{width:"36"}})])])}],!1,null,"3acd690a",null).exports,l={name:"AttachmentPictures",props:{tmpAttachments:{type:Array,default:[]},attachments:{type:Array},modelId:{type:Number,default:0}},methods:{checkProgress:function(t){return this.tableKey+=1,null!==t.progress},isCanceledOrError:function(t){return"canceled"===t.status||"error"===t.status},isUploading:function(t){return"canceled"===t.status||"error"===t.status||"success"===t.status},removeTmpFile:function(t){this.$emit("tmp-file-removed",t)},filesize:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(0===t)return"0 Bytes";var a=1e3,s=e<0?0:e,i=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],r=Math.floor(Math.log(t)/Math.log(a));return parseFloat((t/Math.pow(a,r)).toFixed(s))+" "+i[r]}}},d=(a("M6B+"),Object(o.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"attachment-list-container d-flex flex-wrap flex-gap pt-3",on:{click:function(t){t.stopPropagation()}}},[t._l(t.attachments,(function(e){return[e.wasRecentlyCreated?t._e():a("div",{key:e.id,staticClass:"pic-preview"},[a("div",{staticClass:"pic-image"},[a("a",{attrs:{href:e.url,target:"_blank"}},[a("img",{attrs:{src:e.preview_thumbnail,alt:e.file_name,title:e.file_name}})])]),t._v(" "),a("div",{staticClass:"pic-details"},[a("input",{staticClass:"form-control file-name",attrs:{type:"text",disabled:""},domProps:{value:e.file_name}}),t._v(" "),a("div",{staticClass:"d-flex justify-content-between"},[a("span",{staticClass:"file-size"},[t._v(t._s(t.filesize(e.size)))]),t._v(" "),a("button",{staticClass:"btn btn-round btn-link text-rose",attrs:{type:"button"},on:{click:function(a){return t.$emit("file-removed",e)}}},[a("i",{staticClass:"material-icons"},[t._v("\n              delete\n            ")])])])])])]})),t._v(" "),t._l(t.tmpAttachments,(function(e){return a("div",{key:e.uuid,staticClass:"pic-preview"},[a("div",{staticClass:"pic-image"},[a("img",{key:e.uuid,attrs:{src:e.preview_thumbnail,alt:e.file_name,title:e.file_name}})]),t._v(" "),a("div",{staticClass:"pic-details"},[a("div",{staticClass:"file-status mt-1"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.checkProgress(e)&&!t.isCanceledOrError(e.o),expression:"checkProgress(file) && !isCanceledOrError(file.o)"}],staticClass:"progress"},[a("div",{staticClass:"progress-bar progress-bar-striped",class:{"progress-bar-animated":e.progress<100,"bg-success":100==e.progress},style:{width:e.progress+"%"},attrs:{role:"progressbar","aria-valuenow":e.progress,"aria-valuemin":"0","aria-valuemax":"100"}})]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.checkProgress(e)&&!t.isCanceledOrError(e.o),expression:"!checkProgress(file) && !isCanceledOrError(file.o)"}],staticClass:"text-capitalize"},[t._v("\n          "+t._s(e.o.status)+"\n        ")]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.errorMsg,expression:"file.errorMsg"}],staticClass:"text-danger"},[t._v("\n          "+t._s(e.errorMsg)+"\n        ")])]),t._v(" "),a("input",{staticClass:"form-control file-name",attrs:{type:"text",disabled:""},domProps:{value:e.file_name}}),t._v(" "),a("div",{staticClass:"d-flex justify-content-between"},[a("span",{staticClass:"file-size"},[t._v(t._s(t.filesize(e.size)))]),t._v(" "),a("button",{staticClass:"btn btn-round btn-link text-rose",attrs:{type:"button"},on:{click:function(a){return t.removeTmpFile(e)}}},[a("i",{directives:[{name:"show",rawName:"v-show",value:t.isUploading(e.o),expression:"isUploading(file.o)"}],staticClass:"material-icons",attrs:{title:"Remove"}},[t._v("\n            delete\n          ")]),t._v(" "),a("i",{directives:[{name:"show",rawName:"v-show",value:!t.isUploading(e.o),expression:"!isUploading(file.o)"}],staticClass:"material-icons",attrs:{title:"Cancel"}},[t._v("\n            close\n          ")])])])])])}))],2)}),[],!1,null,"e575a5a2",null).exports),c={components:{vueDropzone:i.a,AttachmentList:n,AttachmentPictures:d},props:{accept:{type:String,default:null},component:{type:String,default:"list",validator:function(t){return-1!==["list","pictures"].indexOf(t)}},route:{type:String,required:!0},maxFiles:{type:Number,default:null},maxFileSize:{type:Number,default:2},collectionName:{type:String,required:!0},media:{type:Array,default:function(){return[]}},modelId:{type:[String,Number],default:0}},data:function(){return{hasFiles:!1,childKey:1,tmpAttachments:[],options:{url:this.route,maxFiles:this.maxFiles,maxFilesize:this.maxFileSize,acceptedFiles:this.accept,thumbnailWidth:120,addRemoveLinks:!0,timeout:0,params:{size:this.maxFileSize,collection_name:this.collectionName,model_id:this.modelId},previewsContainer:".attachment-list-container",previewTemplate:'<div class="d-none"></div>',headers:{"X-XSRF-TOKEN":this.$getCookie("XSRF-TOKEN")}}}},computed:{uid:function(){return"dropzone-".concat(this._uid)},previewComponent:function(){return"attachment-".concat(this.component)}},watch:{tmpAttachments:{handler:function(){this.hasFiles=this.media.length+this.tmpAttachments.length},deep:!0},media:{handler:function(){if(this.hasFiles=this.media.length+this.tmpAttachments.length,null!==this.maxFiles){var t=this.$refs[this.uid],e=this.media.filter((function(t){return!0!==t.wasRecentlyCreated}));t.dropzone.options.maxFiles=this.maxFiles-e.length}},deep:!0}},methods:{addTmpFile:function(t){var e={};e.uuid=t.upload.uuid,e.id=null,e.file_name=t.name,e.size=t.size,e.progress=null,e.errorMsg=null,e.o=t,e.preview_thumbnail=null,this.tmpAttachments.push(e)},uploadProgress:function(t,e,a){this.tmpAttachments.map((function(a){a.uuid===t.upload.uuid&&(a.progress="".concat(Math.floor(e)))}))},success:function(t,e){var a=e;a.wasRecentlyCreated=!0,this.fileUploaded(a)},error:function(t,e,a){this.tmpAttachments.map((function(a){a.uuid===t.upload.uuid&&(a.errorMsg=e)}))},handleTmpFileRemoved:function(t){if(console.log(t),_.includes(["canceled","error"],t.o.status))this.removeTmpFile(t);else{if("uploading"!==t.o.status)return"success"===t.o.status?(this.removeTmpFile(t),this.fileRemoved(t),void this.$refs[this.uid].removeFile(t.o)):"queued"===t.o.status?(this.cancelQueuedFile(t),void this.$refs[this.uid].removeFile(t.o)):void 0;this.$refs[this.uid].removeFile(t.o)}},removeTmpFile:function(t){this.tmpAttachments=this.tmpAttachments.filter((function(e){return e.uuid!==t.o.upload.uuid}))},cancelQueuedFile:function(t){this.tmpAttachments.map((function(e){e.uuid===t.o.upload.uuid&&(e.o.status="canceled",e.errorMsg="Upload canceled.")}))},updateDataUrl:function(t,e){this.tmpAttachments.map((function(a){a.uuid===t.upload.uuid&&(a.preview_thumbnail=e)}))},fileRemoved:function(t){this.$emit("file-removed",t)},fileUploaded:function(t){this.$emit("file-uploaded",t)}}},u=(a("y4RT"),Object(o.a)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("vue-dropzone",{ref:t.uid,attrs:{id:t.uid,options:t.options,"use-custom-slot":!0},on:{"vdropzone-file-added":t.addTmpFile,"vdropzone-upload-progress":t.uploadProgress,"vdropzone-success":t.success,"vdropzone-error":t.error,"vdropzone-thumbnail":t.updateDataUrl}},[a("div",{directives:[{name:"show",rawName:"v-show",value:!t.hasFiles,expression:"!hasFiles"}],staticClass:"dropzone-container"},[a("div",{staticClass:"file-selector"},[a("figure",[a("svg",{attrs:{width:"104px",height:"104px",viewBox:"0 0 104 104",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[a("defs",[a("circle",{attrs:{id:"path-1",cx:"36",cy:"36",r:"36"}}),t._v(" "),a("filter",{attrs:{x:"-37.5%",y:"-29.2%",width:"175.0%",height:"175.0%",filterUnits:"objectBoundingBox",id:"filter-2"}},[a("feOffset",{attrs:{dx:"0",dy:"6",in:"SourceAlpha",result:"shadowOffsetOuter1"}}),t._v(" "),a("feGaussianBlur",{attrs:{stdDeviation:"8",in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}}),t._v(" "),a("feColorMatrix",{attrs:{values:"0 0 0 0 0.0117647059   0 0 0 0 0.0862745098   0 0 0 0 0.160784314  0 0 0 0.08 0",type:"matrix",in:"shadowBlurOuter1",result:"shadowMatrixOuter1"}}),t._v(" "),a("feOffset",{attrs:{dx:"0",dy:"1",in:"SourceAlpha",result:"shadowOffsetOuter2"}}),t._v(" "),a("feGaussianBlur",{attrs:{stdDeviation:"1",in:"shadowOffsetOuter2",result:"shadowBlurOuter2"}}),t._v(" "),a("feColorMatrix",{attrs:{values:"0 0 0 0 0.0117647059   0 0 0 0 0.0862745098   0 0 0 0 0.160784314  0 0 0 0.11 0",type:"matrix",in:"shadowBlurOuter2",result:"shadowMatrixOuter2"}}),t._v(" "),a("feMerge",[a("feMergeNode",{attrs:{in:"shadowMatrixOuter1"}}),t._v(" "),a("feMergeNode",{attrs:{in:"shadowMatrixOuter2"}})],1)],1)]),t._v(" "),a("g",{attrs:{id:"Page-1",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[a("g",{attrs:{id:"Artboard",transform:"translate(-460.000000, -125.000000)"}},[a("g",{attrs:{id:"Group-4",transform:"translate(412.000000, 129.000000)"}},[a("g",{attrs:{id:"Group-2",transform:"translate(58.000000, 0.000000)"}},[a("circle",{attrs:{id:"Oval",fill:"#3560FF",opacity:"0.100000001",cx:"42",cy:"42",r:"42"}}),t._v(" "),a("g",{attrs:{id:"Group",transform:"translate(6.000000, 6.000000)"}},[a("g",{attrs:{id:"Oval"}},[a("use",{attrs:{fill:"black","fill-opacity":"1",filter:"url(#filter-2)","xlink:href":"#path-1"}}),t._v(" "),a("use",{attrs:{fill:"#FFFFFF","fill-rule":"evenodd","xlink:href":"#path-1"}})]),t._v(" "),a("g",{attrs:{id:"upload-cloud",transform:"translate(21.818182, 24.000000)","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[a("polyline",{attrs:{id:"Path",stroke:"#000000",points:"19.6458087 17.3789847 14.3565525 12.0897285 9.06729634 17.3789847"}}),t._v(" "),a("path",{attrs:{d:"M14.3565525,12.0897285 L14.3565525,24.1794569",id:"Path",stroke:"#3560FF"}}),t._v(" "),a("path",{attrs:{d:"M25.6438239,20.7792208 C28.2965835,19.3021499 29.6312816,16.1761528 28.8860265,13.1856562 C28.1407715,10.1951596 25.5052337,8.10125672 22.4838689,8.09921935 L20.8179512,8.09921935 C19.7219904,3.76967373 16.1275086,0.577339516 11.7773112,0.0700384831 C7.42711383,-0.43726255 3.22057026,1.84535014 1.19724759,5.81113853 C-0.826075091,9.77692693 -0.247870665,14.6059952 2.6515151,17.9569414",id:"Path",stroke:"#3560FF"}}),t._v(" "),a("polyline",{attrs:{id:"Path",stroke:"#3560FF",points:"19.6458087 17.3789847 14.3565525 12.0897285 9.06729634 17.3789847"}})])])])])])])])]),t._v(" "),a("span",{staticClass:"font-weight-bold"},[t._v("Drop files here to upload")]),t._v(" "),a("p",{staticClass:"separator"},[a("span",[t._v(" or ")])]),t._v(" "),a("button",{staticClass:"btn btn-azure",attrs:{type:"button"}},[t._v("\n          Browse\n        ")])])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.hasFiles,expression:"hasFiles"}],staticClass:"file-preview-container"},[a("button",{staticClass:"btn btn-azure",attrs:{type:"button"}},[t._v("\n        Browse\n      ")]),t._v(" "),a(t.previewComponent,{key:t.childKey,tag:"component",attrs:{"tmp-attachments":t.tmpAttachments,attachments:t.media},on:{"tmp-file-removed":t.handleTmpFileRemoved,"file-removed":t.fileRemoved}})],1)])],1)}),[],!1,null,"b2e30b0c",null));e.a=u.exports},cTAv:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".pic-image[data-v-e575a5a2],.pic-preview[data-v-e575a5a2]{width:120px;position:relative}.pic-image[data-v-e575a5a2]{height:120px}.pic-image img[data-v-e575a5a2]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.flex-gap[data-v-e575a5a2]{gap:2em}.file-name[data-v-e575a5a2]{font-weight:500;font-size:13px;color:#202124;text-overflow:ellipsis}.file-size[data-v-e575a5a2]{font-weight:400;color:rgba(0,0,0,.54);font-size:13px}.vue-dropzone .attachment-list-container *[data-v-e575a5a2]{cursor:auto}.vue-dropzone .attachment-list-container[data-v-e575a5a2]{cursor:default}.vue-dropzone .pic-preview a img[data-v-e575a5a2],.vue-dropzone .pic-preview button.btn[data-v-e575a5a2],.vue-dropzone .pic-preview button.btn i[data-v-e575a5a2]{cursor:pointer}.file-status[data-v-e575a5a2]{font-size:13px;font-weight:400;line-height:15px}button[data-v-e575a5a2]{width:20px;height:20px;margin:0;padding:0}button .material-icons[data-v-e575a5a2]{line-height:20px;font-size:20px}.progress[data-v-e575a5a2]{height:4px;border-radius:0}",""])},dXTS:function(t,e,a){"use strict";a("Qv/Y")},wBwZ:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,'.separator[data-v-b2e30b0c]{position:relative;width:130px;margin:0 auto 16px}.separator[data-v-b2e30b0c]:before{left:0}.separator[data-v-b2e30b0c]:after,.separator[data-v-b2e30b0c]:before{position:absolute;content:"";height:1px;width:100px;background:#d8d8d8;top:50%;transform:translate(-50%,-50%)}.separator[data-v-b2e30b0c]:after{left:130px}.file-preview-container[data-v-b2e30b0c]{text-align:left}.dropzone-container[data-v-b2e30b0c]{margin:2em 0}',""])},"y+x3":function(t,e,a){var s=a("wBwZ");"string"==typeof s&&(s=[[t.i,s,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(s,i);s.locals&&(t.exports=s.locals)},y4RT:function(t,e,a){"use strict";a("y+x3")}}]);