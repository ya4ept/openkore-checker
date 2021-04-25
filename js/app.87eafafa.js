(function(e){function t(t){for(var r,a,c=t[0],l=t[1],u=t[2],f=0,h=[];f<c.length;f++)a=c[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&h.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);s&&s(t);while(h.length)h.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,c=1;c<n.length;c++){var l=n[c];0!==o[l]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/openkore-checker/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var s=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"13a2":function(e,t,n){},"1f5d":function(e,t,n){"use strict";function r(e,t){function n(){this.constructor=e}n.prototype=t.prototype,e.prototype=new n}function o(e,t,n,r){this.message=e,this.expected=t,this.found=n,this.location=r,this.name="SyntaxError","function"===typeof Error.captureStackTrace&&Error.captureStackTrace(this,o)}function i(e,t){t=void 0!==t?t:{};var r,i={},a={config:J},c=J,l=z(),u=function(e,t){return{type:"key",key:e,value:t,location:F(),isKeyValid:ae.check_key(e),isValueValid:ae.check_value(e,t)}},s="{",f=I("{",!1),h="}",p=I("}",!1),d=function(e,t){let n=[];return t.forEach(t=>{n.push({key:t.key,value:t.value,isKeyValid:ae.check_block_key(e,t.key),isValueValid:ae.check_block_keyvalue(e,t.key,t.value)})}),{type:"block",key:e,value:n,location:F(),isKeyValid:ae.check_block(e)}},y=function(e,t){return{key:e,value:t}},g="#",v=I("#",!1),k=function(){return{type:"comment"}},b=/^[a-z0-9_]/i,m=L([["a","z"],["0","9"],"_"],!1,!0),_=/^[a-z0-9!-~]/i,w=L([["a","z"],["0","9"],["!","~"]],!1,!0),x=/^[<>]/,A=L(["<",">"],!1,!1),E=/^[' '\t]/,C=L(["'"," ","'","\t"],!1,!1),S="\n",j=I("\n",!1),K="\r",V=I("\r",!1),M=0,O=0,P=[{line:1,column:1}],T=0,X=[],D=0;if("startRule"in t){if(!(t.startRule in a))throw new Error("Can't start parsing from rule \""+t.startRule+'".');c=a[t.startRule]}function F(){return U(O,M)}function I(e,t){return{type:"literal",text:e,ignoreCase:t}}function L(e,t,n){return{type:"class",parts:e,inverted:t,ignoreCase:n}}function z(){return{type:"any"}}function $(){return{type:"end"}}function R(t){var n,r=P[t];if(r)return r;n=t-1;while(!P[n])n--;r=P[n],r={line:r.line,column:r.column};while(n<t)10===e.charCodeAt(n)?(r.line++,r.column=1):r.column++,n++;return P[t]=r,r}function U(e,t){var n=R(e),r=R(t);return{start:{offset:e,line:n.line,column:n.column},end:{offset:t,line:r.line,column:r.column}}}function B(e){M<T||(M>T&&(T=M,X=[]),X.push(e))}function G(e,t,n){return new o(o.buildMessage(e,t),e,t,n)}function J(){var e;return e=N(),e}function N(){var e,t;e=[],t=Y();while(t!==i)e.push(t),t=Y();return e}function Y(){var t,n,r,o,a,c;if(t=W(),t===i&&(t=H(),t===i&&(t=q(),t===i&&(t=oe(),t===i))))if(t=M,e.length>M?(n=e.charAt(M),M++):(n=i,0===D&&B(l)),n!==i){r=[],o=M,a=M,D++,c=oe(),D--,c===i?a=void 0:(M=a,a=i),a!==i?(e.length>M?(c=e.charAt(M),M++):(c=i,0===D&&B(l)),c!==i?(a=[a,c],o=a):(M=o,o=i)):(M=o,o=i);while(o!==i)r.push(o),o=M,a=M,D++,c=oe(),D--,c===i?a=void 0:(M=a,a=i),a!==i?(e.length>M?(c=e.charAt(M),M++):(c=i,0===D&&B(l)),c!==i?(a=[a,c],o=a):(M=o,o=i)):(M=o,o=i);r!==i?(n=[n,r],t=n):(M=t,t=i)}else M=t,t=i;return t}function q(){var t,n,r,o,a,c,l;return t=M,n=M,r=ee(),n=r!==i?e.substring(n,M):r,n!==i?(r=re(),r===i&&(r=null),r!==i?(o=ne(),o===i&&(o=null),o!==i?(a=re(),a===i&&(a=null),a!==i?(c=M,l=te(),l===i&&(l=null),c=l!==i?e.substring(c,M):l,c!==i?(l=oe(),l===i&&(l=null),l!==i?(O=t,n=u(n,c),t=n):(M=t,t=i)):(M=t,t=i)):(M=t,t=i)):(M=t,t=i)):(M=t,t=i)):(M=t,t=i),t}function H(){var t,n,r,o,a,c,l,u,y;if(t=M,n=M,r=ee(),n=r!==i?e.substring(n,M):r,n!==i)if(r=re(),r!==i)if(123===e.charCodeAt(M)?(o=s,M++):(o=i,0===D&&B(f)),o!==i)if(a=oe(),a!==i){c=[],l=W();while(l!==i)c.push(l),l=W();if(c!==i){l=[],u=Q();while(u!==i)l.push(u),u=Q();l!==i?(125===e.charCodeAt(M)?(u=h,M++):(u=i,0===D&&B(p)),u!==i?(y=oe(),y===i&&(y=null),y!==i?(O=t,n=d(n,l),t=n):(M=t,t=i)):(M=t,t=i)):(M=t,t=i)}else M=t,t=i}else M=t,t=i;else M=t,t=i;else M=t,t=i;else M=t,t=i;return t}function Q(){var t,n,r,o,a,c,l,u,s,f;t=M,n=[],r=re();while(r!==i)n.push(r),r=re();if(n!==i)if(r=M,o=ee(),r=o!==i?e.substring(r,M):o,r!==i)if(o=re(),o===i&&(o=null),o!==i)if(a=ne(),a===i&&(a=null),a!==i)if(c=re(),c===i&&(c=null),c!==i)if(l=M,u=te(),u===i&&(u=null),l=u!==i?e.substring(l,M):u,l!==i)if(u=oe(),u===i&&(u=null),u!==i){s=[],f=W();while(f!==i)s.push(f),f=W();s!==i?(f=oe(),f===i&&(f=null),f!==i?(O=t,n=y(r,l),t=n):(M=t,t=i)):(M=t,t=i)}else M=t,t=i;else M=t,t=i;else M=t,t=i;else M=t,t=i;else M=t,t=i;else M=t,t=i;else M=t,t=i;return t}function W(){var t,n,r,o,a;t=M,n=[],r=re();while(r!==i)n.push(r),r=re();if(n!==i){if(r=[],35===e.charCodeAt(M)?(o=g,M++):(o=i,0===D&&B(v)),o!==i)while(o!==i)r.push(o),35===e.charCodeAt(M)?(o=g,M++):(o=i,0===D&&B(v));else r=i;r!==i?(o=Z(),o!==i?(a=oe(),a===i&&(a=null),a!==i?(O=t,n=k(),t=n):(M=t,t=i)):(M=t,t=i)):(M=t,t=i)}else M=t,t=i;return t}function Z(){var t,n,r,o,a,c;if(t=M,e.length>M?(n=e.charAt(M),M++):(n=i,0===D&&B(l)),n!==i){r=[],o=M,a=M,D++,c=oe(),D--,c===i?a=void 0:(M=a,a=i),a!==i?(e.length>M?(c=e.charAt(M),M++):(c=i,0===D&&B(l)),c!==i?(a=[a,c],o=a):(M=o,o=i)):(M=o,o=i);while(o!==i)r.push(o),o=M,a=M,D++,c=oe(),D--,c===i?a=void 0:(M=a,a=i),a!==i?(e.length>M?(c=e.charAt(M),M++):(c=i,0===D&&B(l)),c!==i?(a=[a,c],o=a):(M=o,o=i)):(M=o,o=i);r!==i?(n=[n,r],t=n):(M=t,t=i)}else M=t,t=i;return t}function ee(){var t,n;if(t=[],b.test(e.charAt(M))?(n=e.charAt(M),M++):(n=i,0===D&&B(m)),n!==i)while(n!==i)t.push(n),b.test(e.charAt(M))?(n=e.charAt(M),M++):(n=i,0===D&&B(m));else t=i;return t}function te(){var t,n;if(t=[],_.test(e.charAt(M))?(n=e.charAt(M),M++):(n=i,0===D&&B(w)),n!==i)while(n!==i)t.push(n),_.test(e.charAt(M))?(n=e.charAt(M),M++):(n=i,0===D&&B(w));else t=i;return t}function ne(){var t;return x.test(e.charAt(M))?(t=e.charAt(M),M++):(t=i,0===D&&B(A)),t}function re(){var t;return E.test(e.charAt(M))?(t=e.charAt(M),M++):(t=i,0===D&&B(C)),t}function oe(){var t,n,r;return 10===e.charCodeAt(M)?(t=S,M++):(t=i,0===D&&B(j)),t===i&&(t=M,13===e.charCodeAt(M)?(n=K,M++):(n=i,0===D&&B(V)),n!==i?(10===e.charCodeAt(M)?(r=S,M++):(r=i,0===D&&B(j)),r===i&&(r=null),r!==i?(n=[n,r],t=n):(M=t,t=i)):(M=t,t=i)),t}const ie=n("e95b"),ae=new ie;if(r=c(),r!==i&&M===e.length)return r;throw r!==i&&M<e.length&&B($()),G(X,T<e.length?e.charAt(T):null,T<e.length?U(T,T+1):U(T,T))}r(o,Error),o.buildMessage=function(e,t){var n={literal:function(e){return'"'+o(e.text)+'"'},class:function(e){var t,n="";for(t=0;t<e.parts.length;t++)n+=e.parts[t]instanceof Array?i(e.parts[t][0])+"-"+i(e.parts[t][1]):i(e.parts[t]);return"["+(e.inverted?"^":"")+n+"]"},any:function(e){return"any character"},end:function(e){return"end of input"},other:function(e){return e.description}};function r(e){return e.charCodeAt(0).toString(16).toUpperCase()}function o(e){return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(e){return"\\x0"+r(e)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(e){return"\\x"+r(e)}))}function i(e){return e.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(e){return"\\x0"+r(e)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(e){return"\\x"+r(e)}))}function a(e){return n[e.type](e)}function c(e){var t,n,r=new Array(e.length);for(t=0;t<e.length;t++)r[t]=a(e[t]);if(r.sort(),r.length>0){for(t=1,n=1;t<r.length;t++)r[t-1]!==r[t]&&(r[n]=r[t],n++);r.length=n}switch(r.length){case 1:return r[0];case 2:return r[0]+" or "+r[1];default:return r.slice(0,-1).join(", ")+", or "+r[r.length-1]}}function l(e){return e?'"'+o(e)+'"':"end of input"}return"Expected "+c(e)+" but "+l(t)+" found."},e.exports={SyntaxError:o,parse:i}},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=n("ce5b"),i=n.n(o),a=(n("bf40"),n("5363"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-container",{attrs:{fluid:"","fill-height":""}},[n("v-row",{staticStyle:{height:"100%"},attrs:{align:"center",justify:"center"}},[n("v-col",{staticStyle:{height:"100%"},attrs:{cols:"10"}},[n("config")],1)],1)],1)],1)}),c=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{height:"100%"}},[n("span",[e._v("Check your config.txt")]),n("v-card",{attrs:{elevation:"2"}},[n("v-card-text",[n("codemirror",{ref:"cfgEditor",staticStyle:{height:"85%"},attrs:{options:e.options},model:{value:e.inputData,callback:function(t){e.inputData=t},expression:"inputData"}}),n("v-alert",{attrs:{elevation:"2",type:e.isValid?"success":"error",dense:""}},[e.isValid?n("div",[e._v(" Your config is valid. ")]):n("div",[e._v("Config is invalid. Errors: "+e._s(e.lintErrors.length))])])],1)],1)],1)},u=[],s=n("53ca"),f=(n("159b"),n("99af"),n("56b3")),h=n.n(f),p=(n("1fdb"),n("8822"),n("a7be"),n("4498"),n("0dd0"),n("8f94")),d={name:"config",components:{codemirror:p["codemirror"]},data:function(){return{inputData:null,lintErrors:[],keyList:{},options:{tabSize:4,lineNumbers:!0,gutters:["CodeMirror-lint-markers"],scrollbarStyle:"simple"}}},computed:{isValid:function(){return!this.lintErrors.length}},methods:{checkConfig:function(){var e=this,t=n("1f5d");this.keyList=[],this.lintErrors=[];try{var r=t.parse(this.inputData);r.forEach((function(t){"object"===Object(s["a"])(t)&&t.type&&("key"==t.type?(t.isKeyValid?t.isValueValid||e.addMsg({location:t.location,message:"Invalid value: ".concat(t.value)}):e.addMsg({location:t.location,type:"warning",message:"Unknown key: ".concat(t.key)}),t.key in e.keyList&&e.addMsg({location:t.location,message:"Duplicated: ".concat(t.key,". Already defined on ").concat(e.keyList[t.key].location.start.line," line")}),e.keyList[t.key]={location:t.location,value:t.value}):"block"==t.type&&(t.isKeyValid?t.value.forEach((function(n){n.isKeyValid?n.isValueValid||e.addMsg({location:t.location,message:"Invalid ".concat(t.key,"_").concat(n.key," value: ").concat(n.value)}):e.addMsg({location:t.location,type:"warning",message:"Unknown block key: ".concat(n.key)})})):e.addMsg({location:t.location,type:"warning",message:"Unknown block key: ".concat(t.key)})))}))}catch(o){console.log(o)}},addMsg:function(e){this.lintErrors.push({from:h.a.Pos(e.location.start.line-1,e.location.start.column-1),to:h.a.Pos(e.location.end.line-1,e.location.end.column-1),severity:e.type,message:e.message})}},watch:{lintErrors:function(){var e=this;this.$refs.cfgEditor.codemirror.setOption("lint",{getAnnotations:function(){return e.lintErrors}})},inputData:function(){this.lintErrors=[],this.checkConfig()},deep:!0}},y=d,g=(n("ab74"),n("2877")),v=Object(g["a"])(y,l,u,!1,null,null,null),k=v.exports,b={name:"App",components:{config:k},data:function(){return{configSelectedType:null,configTypes:["config.txt","mon_control.txt","items_control.txt","arrowcraft.txt","avoid.txt","chat_resp.txt"]}},methods:{}},m=b,_=Object(g["a"])(m,a,c,!1,null,"5a0cf819",null),w=_.exports;r["default"].config.productionTip=!1,r["default"].use(i.a),new r["default"]({vuetify:new i.a({}),render:function(e){return e(w)}}).$mount("#app")},ab74:function(e,t,n){"use strict";n("13a2")},e95b:function(e,t,n){var r=n("970b").default,o=n("5bc3").default,i=n("9523").default;n("d3b7"),n("ddb0");var a=function(){"use strict";function e(){r(this,e),i(this,"keys",{master:/.*/,server:/.*/,username:/.*/,password:/.*/,loginPinCode:/.*/,char:/\d?/,poseidonServer:/((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))?/,poseidonPort:/\d+/,bindIp:/((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))?/,forceMapIP:/((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))?/,XKore:/(0|1|2)/,XKore_port:/\d+/,XKore_dll:/.*/,XKore_injectDLL:/(0|1)/,XKore_autoAttachIfOneExe:/(0|1)/,XKore_silent:/(0|1)/,XKore_bypassBotDetection:/(0|1)/,XKore_exeName:/.*/,XKore_listenIp:/((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))?/,XKore_listenPort:/\d+/,XKore_publicIp:/((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))?/,secureAdminPassword:/(0|1)/,adminPassword:/.*/,commandPrefix:/^.$/,callSignGM:/(0|1)/,inGameAuth:/(0|1)/}),i(this,"blocks",{autoBreakTime:{keys:{startTime:/.*/,stopTime:/.*/}},autoConfChange:{keys:{minTime:/.*/,varTime:/.*/,lvl:/\d*/,joblvl:/\d*/}},monsterSkill:{keys:{}}})}return o(e,[{key:"check_key",value:function(e){return e in this.keys}},{key:"check_value",value:function(e,t){return!this.check_key(e)||(console.log(t),this.keys[e].test(t))}},{key:"check_block",value:function(e){return e in this.blocks}},{key:"check_block_key",value:function(e,t){return!!this.check_block(e)&&t in this.blocks[e].keys}},{key:"check_block_keyvalue",value:function(e,t,n){return!this.check_block(e)||!this.blocks[e].keys[t]||this.blocks[e].keys[t].test(n)}}]),e}();e.exports=a}});
//# sourceMappingURL=app.87eafafa.js.map