import{r as d,v as It}from"./vendor-ffd51fc4.js";const Fu="/assets/LogoHorizontal-ab16c970.png";var lr=Array.isArray,fr=Object.keys,Ct=Object.prototype.hasOwnProperty,Mt=typeof Element<"u";function Ce(e,r){if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){var t=lr(e),a=lr(r),n,i,u;if(t&&a){if(i=e.length,i!=r.length)return!1;for(n=i;n--!==0;)if(!Ce(e[n],r[n]))return!1;return!0}if(t!=a)return!1;var s=e instanceof Date,h=r instanceof Date;if(s!=h)return!1;if(s&&h)return e.getTime()==r.getTime();var v=e instanceof RegExp,F=r instanceof RegExp;if(v!=F)return!1;if(v&&F)return e.toString()==r.toString();var T=fr(e);if(i=T.length,i!==fr(r).length)return!1;for(n=i;n--!==0;)if(!Ct.call(r,T[n]))return!1;if(Mt&&e instanceof Element&&r instanceof Element)return e===r;for(n=i;n--!==0;)if(u=T[n],!(u==="_owner"&&e.$$typeof)&&!Ce(e[u],r[u]))return!1;return!0}return e!==e&&r!==r}var x=function(r,t){try{return Ce(r,t)}catch(a){if(a.message&&a.message.match(/stack|recursion/i)||a.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",a.name,a.message),!1;throw a}},Pt=function(r){return Rt(r)&&!Lt(r)};function Rt(e){return!!e&&typeof e=="object"}function Lt(e){var r=Object.prototype.toString.call(e);return r==="[object RegExp]"||r==="[object Date]"||Nt(e)}var Dt=typeof Symbol=="function"&&Symbol.for,Ut=Dt?Symbol.for("react.element"):60103;function Nt(e){return e.$$typeof===Ut}function Vt(e){return Array.isArray(e)?[]:{}}function pe(e,r){return r.clone!==!1&&r.isMergeableObject(e)?ie(Vt(e),e,r):e}function xt(e,r,t){return e.concat(r).map(function(a){return pe(a,t)})}function Bt(e,r,t){var a={};return t.isMergeableObject(e)&&Object.keys(e).forEach(function(n){a[n]=pe(e[n],t)}),Object.keys(r).forEach(function(n){!t.isMergeableObject(r[n])||!e[n]?a[n]=pe(r[n],t):a[n]=ie(e[n],r[n],t)}),a}function ie(e,r,t){t=t||{},t.arrayMerge=t.arrayMerge||xt,t.isMergeableObject=t.isMergeableObject||Pt;var a=Array.isArray(r),n=Array.isArray(e),i=a===n;return i?a?t.arrayMerge(e,r,t):Bt(e,r,t):pe(r,t)}ie.all=function(r,t){if(!Array.isArray(r))throw new Error("first argument should be an array");return r.reduce(function(a,n){return ie(a,n,t)},{})};var Me=ie,kt=typeof global=="object"&&global&&global.Object===Object&&global;const xr=kt;var Gt=typeof self=="object"&&self&&self.Object===Object&&self,Ht=xr||Gt||Function("return this")();const D=Ht;var zt=D.Symbol;const B=zt;var Br=Object.prototype,Kt=Br.hasOwnProperty,Wt=Br.toString,te=B?B.toStringTag:void 0;function Yt(e){var r=Kt.call(e,te),t=e[te];try{e[te]=void 0;var a=!0}catch{}var n=Wt.call(e);return a&&(r?e[te]=t:delete e[te]),n}var qt=Object.prototype,Xt=qt.toString;function Zt(e){return Xt.call(e)}var Jt="[object Null]",Qt="[object Undefined]",dr=B?B.toStringTag:void 0;function K(e){return e==null?e===void 0?Qt:Jt:dr&&dr in Object(e)?Yt(e):Zt(e)}function kr(e,r){return function(t){return e(r(t))}}var en=kr(Object.getPrototypeOf,Object);const Ne=en;function W(e){return e!=null&&typeof e=="object"}var rn="[object Object]",tn=Function.prototype,nn=Object.prototype,Gr=tn.toString,an=nn.hasOwnProperty,on=Gr.call(Object);function pr(e){if(!W(e)||K(e)!=rn)return!1;var r=Ne(e);if(r===null)return!0;var t=an.call(r,"constructor")&&r.constructor;return typeof t=="function"&&t instanceof t&&Gr.call(t)==on}function un(){this.__data__=[],this.size=0}function Hr(e,r){return e===r||e!==e&&r!==r}function he(e,r){for(var t=e.length;t--;)if(Hr(e[t][0],r))return t;return-1}var sn=Array.prototype,cn=sn.splice;function ln(e){var r=this.__data__,t=he(r,e);if(t<0)return!1;var a=r.length-1;return t==a?r.pop():cn.call(r,t,1),--this.size,!0}function fn(e){var r=this.__data__,t=he(r,e);return t<0?void 0:r[t][1]}function dn(e){return he(this.__data__,e)>-1}function pn(e,r){var t=this.__data__,a=he(t,e);return a<0?(++this.size,t.push([e,r])):t[a][1]=r,this}function N(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var a=e[r];this.set(a[0],a[1])}}N.prototype.clear=un;N.prototype.delete=ln;N.prototype.get=fn;N.prototype.has=dn;N.prototype.set=pn;function hn(){this.__data__=new N,this.size=0}function vn(e){var r=this.__data__,t=r.delete(e);return this.size=r.size,t}function yn(e){return this.__data__.get(e)}function gn(e){return this.__data__.has(e)}function se(e){var r=typeof e;return e!=null&&(r=="object"||r=="function")}var mn="[object AsyncFunction]",bn="[object Function]",Tn="[object GeneratorFunction]",En="[object Proxy]";function zr(e){if(!se(e))return!1;var r=K(e);return r==bn||r==Tn||r==mn||r==En}var Sn=D["__core-js_shared__"];const Oe=Sn;var hr=function(){var e=/[^.]+$/.exec(Oe&&Oe.keys&&Oe.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function _n(e){return!!hr&&hr in e}var An=Function.prototype,$n=An.toString;function Y(e){if(e!=null){try{return $n.call(e)}catch{}try{return e+""}catch{}}return""}var On=/[\\^$.*+?()[\]{}|]/g,jn=/^\[object .+?Constructor\]$/,Fn=Function.prototype,wn=Object.prototype,In=Fn.toString,Cn=wn.hasOwnProperty,Mn=RegExp("^"+In.call(Cn).replace(On,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Pn(e){if(!se(e)||_n(e))return!1;var r=zr(e)?Mn:jn;return r.test(Y(e))}function Rn(e,r){return e==null?void 0:e[r]}function q(e,r){var t=Rn(e,r);return Pn(t)?t:void 0}var Ln=q(D,"Map");const oe=Ln;var Dn=q(Object,"create");const ue=Dn;function Un(){this.__data__=ue?ue(null):{},this.size=0}function Nn(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r}var Vn="__lodash_hash_undefined__",xn=Object.prototype,Bn=xn.hasOwnProperty;function kn(e){var r=this.__data__;if(ue){var t=r[e];return t===Vn?void 0:t}return Bn.call(r,e)?r[e]:void 0}var Gn=Object.prototype,Hn=Gn.hasOwnProperty;function zn(e){var r=this.__data__;return ue?r[e]!==void 0:Hn.call(r,e)}var Kn="__lodash_hash_undefined__";function Wn(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=ue&&r===void 0?Kn:r,this}function z(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var a=e[r];this.set(a[0],a[1])}}z.prototype.clear=Un;z.prototype.delete=Nn;z.prototype.get=kn;z.prototype.has=zn;z.prototype.set=Wn;function Yn(){this.size=0,this.__data__={hash:new z,map:new(oe||N),string:new z}}function qn(e){var r=typeof e;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?e!=="__proto__":e===null}function ve(e,r){var t=e.__data__;return qn(r)?t[typeof r=="string"?"string":"hash"]:t.map}function Xn(e){var r=ve(this,e).delete(e);return this.size-=r?1:0,r}function Zn(e){return ve(this,e).get(e)}function Jn(e){return ve(this,e).has(e)}function Qn(e,r){var t=ve(this,e),a=t.size;return t.set(e,r),this.size+=t.size==a?0:1,this}function k(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var a=e[r];this.set(a[0],a[1])}}k.prototype.clear=Yn;k.prototype.delete=Xn;k.prototype.get=Zn;k.prototype.has=Jn;k.prototype.set=Qn;var ea=200;function ra(e,r){var t=this.__data__;if(t instanceof N){var a=t.__data__;if(!oe||a.length<ea-1)return a.push([e,r]),this.size=++t.size,this;t=this.__data__=new k(a)}return t.set(e,r),this.size=t.size,this}function ee(e){var r=this.__data__=new N(e);this.size=r.size}ee.prototype.clear=hn;ee.prototype.delete=vn;ee.prototype.get=yn;ee.prototype.has=gn;ee.prototype.set=ra;function ta(e,r){for(var t=-1,a=e==null?0:e.length;++t<a&&r(e[t],t,e)!==!1;);return e}var na=function(){try{var e=q(Object,"defineProperty");return e({},"",{}),e}catch{}}();const vr=na;function Kr(e,r,t){r=="__proto__"&&vr?vr(e,r,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[r]=t}var aa=Object.prototype,ia=aa.hasOwnProperty;function Wr(e,r,t){var a=e[r];(!(ia.call(e,r)&&Hr(a,t))||t===void 0&&!(r in e))&&Kr(e,r,t)}function ye(e,r,t,a){var n=!t;t||(t={});for(var i=-1,u=r.length;++i<u;){var s=r[i],h=a?a(t[s],e[s],s,t,e):void 0;h===void 0&&(h=e[s]),n?Kr(t,s,h):Wr(t,s,h)}return t}function oa(e,r){for(var t=-1,a=Array(e);++t<e;)a[t]=r(t);return a}var ua="[object Arguments]";function yr(e){return W(e)&&K(e)==ua}var Yr=Object.prototype,sa=Yr.hasOwnProperty,ca=Yr.propertyIsEnumerable,la=yr(function(){return arguments}())?yr:function(e){return W(e)&&sa.call(e,"callee")&&!ca.call(e,"callee")};const fa=la;var da=Array.isArray;const ce=da;function pa(){return!1}var qr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,gr=qr&&typeof module=="object"&&module&&!module.nodeType&&module,ha=gr&&gr.exports===qr,mr=ha?D.Buffer:void 0,va=mr?mr.isBuffer:void 0,ya=va||pa;const Xr=ya;var ga=9007199254740991,ma=/^(?:0|[1-9]\d*)$/;function ba(e,r){var t=typeof e;return r=r??ga,!!r&&(t=="number"||t!="symbol"&&ma.test(e))&&e>-1&&e%1==0&&e<r}var Ta=9007199254740991;function Zr(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Ta}var Ea="[object Arguments]",Sa="[object Array]",_a="[object Boolean]",Aa="[object Date]",$a="[object Error]",Oa="[object Function]",ja="[object Map]",Fa="[object Number]",wa="[object Object]",Ia="[object RegExp]",Ca="[object Set]",Ma="[object String]",Pa="[object WeakMap]",Ra="[object ArrayBuffer]",La="[object DataView]",Da="[object Float32Array]",Ua="[object Float64Array]",Na="[object Int8Array]",Va="[object Int16Array]",xa="[object Int32Array]",Ba="[object Uint8Array]",ka="[object Uint8ClampedArray]",Ga="[object Uint16Array]",Ha="[object Uint32Array]",S={};S[Da]=S[Ua]=S[Na]=S[Va]=S[xa]=S[Ba]=S[ka]=S[Ga]=S[Ha]=!0;S[Ea]=S[Sa]=S[Ra]=S[_a]=S[La]=S[Aa]=S[$a]=S[Oa]=S[ja]=S[Fa]=S[wa]=S[Ia]=S[Ca]=S[Ma]=S[Pa]=!1;function za(e){return W(e)&&Zr(e.length)&&!!S[K(e)]}function Ve(e){return function(r){return e(r)}}var Jr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ne=Jr&&typeof module=="object"&&module&&!module.nodeType&&module,Ka=ne&&ne.exports===Jr,je=Ka&&xr.process,Wa=function(){try{var e=ne&&ne.require&&ne.require("util").types;return e||je&&je.binding&&je.binding("util")}catch{}}();const J=Wa;var br=J&&J.isTypedArray,Ya=br?Ve(br):za;const qa=Ya;var Xa=Object.prototype,Za=Xa.hasOwnProperty;function Qr(e,r){var t=ce(e),a=!t&&fa(e),n=!t&&!a&&Xr(e),i=!t&&!a&&!n&&qa(e),u=t||a||n||i,s=u?oa(e.length,String):[],h=s.length;for(var v in e)(r||Za.call(e,v))&&!(u&&(v=="length"||n&&(v=="offset"||v=="parent")||i&&(v=="buffer"||v=="byteLength"||v=="byteOffset")||ba(v,h)))&&s.push(v);return s}var Ja=Object.prototype;function xe(e){var r=e&&e.constructor,t=typeof r=="function"&&r.prototype||Ja;return e===t}var Qa=kr(Object.keys,Object);const ei=Qa;var ri=Object.prototype,ti=ri.hasOwnProperty;function ni(e){if(!xe(e))return ei(e);var r=[];for(var t in Object(e))ti.call(e,t)&&t!="constructor"&&r.push(t);return r}function et(e){return e!=null&&Zr(e.length)&&!zr(e)}function Be(e){return et(e)?Qr(e):ni(e)}function ai(e,r){return e&&ye(r,Be(r),e)}function ii(e){var r=[];if(e!=null)for(var t in Object(e))r.push(t);return r}var oi=Object.prototype,ui=oi.hasOwnProperty;function si(e){if(!se(e))return ii(e);var r=xe(e),t=[];for(var a in e)a=="constructor"&&(r||!ui.call(e,a))||t.push(a);return t}function ke(e){return et(e)?Qr(e,!0):si(e)}function ci(e,r){return e&&ye(r,ke(r),e)}var rt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Tr=rt&&typeof module=="object"&&module&&!module.nodeType&&module,li=Tr&&Tr.exports===rt,Er=li?D.Buffer:void 0,Sr=Er?Er.allocUnsafe:void 0;function fi(e,r){if(r)return e.slice();var t=e.length,a=Sr?Sr(t):new e.constructor(t);return e.copy(a),a}function tt(e,r){var t=-1,a=e.length;for(r||(r=Array(a));++t<a;)r[t]=e[t];return r}function di(e,r){for(var t=-1,a=e==null?0:e.length,n=0,i=[];++t<a;){var u=e[t];r(u,t,e)&&(i[n++]=u)}return i}function nt(){return[]}var pi=Object.prototype,hi=pi.propertyIsEnumerable,_r=Object.getOwnPropertySymbols,vi=_r?function(e){return e==null?[]:(e=Object(e),di(_r(e),function(r){return hi.call(e,r)}))}:nt;const Ge=vi;function yi(e,r){return ye(e,Ge(e),r)}function at(e,r){for(var t=-1,a=r.length,n=e.length;++t<a;)e[n+t]=r[t];return e}var gi=Object.getOwnPropertySymbols,mi=gi?function(e){for(var r=[];e;)at(r,Ge(e)),e=Ne(e);return r}:nt;const it=mi;function bi(e,r){return ye(e,it(e),r)}function ot(e,r,t){var a=r(e);return ce(e)?a:at(a,t(e))}function Ti(e){return ot(e,Be,Ge)}function Ei(e){return ot(e,ke,it)}var Si=q(D,"DataView");const Pe=Si;var _i=q(D,"Promise");const Re=_i;var Ai=q(D,"Set");const Le=Ai;var $i=q(D,"WeakMap");const De=$i;var Ar="[object Map]",Oi="[object Object]",$r="[object Promise]",Or="[object Set]",jr="[object WeakMap]",Fr="[object DataView]",ji=Y(Pe),Fi=Y(oe),wi=Y(Re),Ii=Y(Le),Ci=Y(De),H=K;(Pe&&H(new Pe(new ArrayBuffer(1)))!=Fr||oe&&H(new oe)!=Ar||Re&&H(Re.resolve())!=$r||Le&&H(new Le)!=Or||De&&H(new De)!=jr)&&(H=function(e){var r=K(e),t=r==Oi?e.constructor:void 0,a=t?Y(t):"";if(a)switch(a){case ji:return Fr;case Fi:return Ar;case wi:return $r;case Ii:return Or;case Ci:return jr}return r});const He=H;var Mi=Object.prototype,Pi=Mi.hasOwnProperty;function Ri(e){var r=e.length,t=new e.constructor(r);return r&&typeof e[0]=="string"&&Pi.call(e,"index")&&(t.index=e.index,t.input=e.input),t}var Li=D.Uint8Array;const wr=Li;function ze(e){var r=new e.constructor(e.byteLength);return new wr(r).set(new wr(e)),r}function Di(e,r){var t=r?ze(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.byteLength)}var Ui=/\w*$/;function Ni(e){var r=new e.constructor(e.source,Ui.exec(e));return r.lastIndex=e.lastIndex,r}var Ir=B?B.prototype:void 0,Cr=Ir?Ir.valueOf:void 0;function Vi(e){return Cr?Object(Cr.call(e)):{}}function xi(e,r){var t=r?ze(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}var Bi="[object Boolean]",ki="[object Date]",Gi="[object Map]",Hi="[object Number]",zi="[object RegExp]",Ki="[object Set]",Wi="[object String]",Yi="[object Symbol]",qi="[object ArrayBuffer]",Xi="[object DataView]",Zi="[object Float32Array]",Ji="[object Float64Array]",Qi="[object Int8Array]",eo="[object Int16Array]",ro="[object Int32Array]",to="[object Uint8Array]",no="[object Uint8ClampedArray]",ao="[object Uint16Array]",io="[object Uint32Array]";function oo(e,r,t){var a=e.constructor;switch(r){case qi:return ze(e);case Bi:case ki:return new a(+e);case Xi:return Di(e,t);case Zi:case Ji:case Qi:case eo:case ro:case to:case no:case ao:case io:return xi(e,t);case Gi:return new a;case Hi:case Wi:return new a(e);case zi:return Ni(e);case Ki:return new a;case Yi:return Vi(e)}}var Mr=Object.create,uo=function(){function e(){}return function(r){if(!se(r))return{};if(Mr)return Mr(r);e.prototype=r;var t=new e;return e.prototype=void 0,t}}();const so=uo;function co(e){return typeof e.constructor=="function"&&!xe(e)?so(Ne(e)):{}}var lo="[object Map]";function fo(e){return W(e)&&He(e)==lo}var Pr=J&&J.isMap,po=Pr?Ve(Pr):fo;const ho=po;var vo="[object Set]";function yo(e){return W(e)&&He(e)==vo}var Rr=J&&J.isSet,go=Rr?Ve(Rr):yo;const mo=go;var bo=1,To=2,Eo=4,ut="[object Arguments]",So="[object Array]",_o="[object Boolean]",Ao="[object Date]",$o="[object Error]",st="[object Function]",Oo="[object GeneratorFunction]",jo="[object Map]",Fo="[object Number]",ct="[object Object]",wo="[object RegExp]",Io="[object Set]",Co="[object String]",Mo="[object Symbol]",Po="[object WeakMap]",Ro="[object ArrayBuffer]",Lo="[object DataView]",Do="[object Float32Array]",Uo="[object Float64Array]",No="[object Int8Array]",Vo="[object Int16Array]",xo="[object Int32Array]",Bo="[object Uint8Array]",ko="[object Uint8ClampedArray]",Go="[object Uint16Array]",Ho="[object Uint32Array]",E={};E[ut]=E[So]=E[Ro]=E[Lo]=E[_o]=E[Ao]=E[Do]=E[Uo]=E[No]=E[Vo]=E[xo]=E[jo]=E[Fo]=E[ct]=E[wo]=E[Io]=E[Co]=E[Mo]=E[Bo]=E[ko]=E[Go]=E[Ho]=!0;E[$o]=E[st]=E[Po]=!1;function ae(e,r,t,a,n,i){var u,s=r&bo,h=r&To,v=r&Eo;if(t&&(u=n?t(e,a,n,i):t(e)),u!==void 0)return u;if(!se(e))return e;var F=ce(e);if(F){if(u=Ri(e),!s)return tt(e,u)}else{var T=He(e),l=T==st||T==Oo;if(Xr(e))return fi(e,s);if(T==ct||T==ut||l&&!n){if(u=h||l?{}:co(e),!s)return h?bi(e,ci(u,e)):yi(e,ai(u,e))}else{if(!E[T])return n?e:{};u=oo(e,T,s)}}i||(i=new ee);var w=i.get(e);if(w)return w;i.set(e,u),mo(e)?e.forEach(function($){u.add(ae($,r,t,$,e,i))}):ho(e)&&e.forEach(function($,O){u.set(O,ae($,r,t,O,e,i))});var P=v?h?Ei:Ti:h?ke:Be,C=F?void 0:P(e);return ta(C||e,function($,O){C&&(O=$,$=e[O]),Wr(u,O,ae($,r,t,O,e,i))}),u}var zo=4;function Lr(e){return ae(e,zo)}function lt(e,r){for(var t=-1,a=e==null?0:e.length,n=Array(a);++t<a;)n[t]=r(e[t],t,e);return n}var Ko="[object Symbol]";function Ke(e){return typeof e=="symbol"||W(e)&&K(e)==Ko}var Wo="Expected a function";function We(e,r){if(typeof e!="function"||r!=null&&typeof r!="function")throw new TypeError(Wo);var t=function(){var a=arguments,n=r?r.apply(this,a):a[0],i=t.cache;if(i.has(n))return i.get(n);var u=e.apply(this,a);return t.cache=i.set(n,u)||i,u};return t.cache=new(We.Cache||k),t}We.Cache=k;var Yo=500;function qo(e){var r=We(e,function(a){return t.size===Yo&&t.clear(),a}),t=r.cache;return r}var Xo=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Zo=/\\(\\)?/g,Jo=qo(function(e){var r=[];return e.charCodeAt(0)===46&&r.push(""),e.replace(Xo,function(t,a,n,i){r.push(n?i.replace(Zo,"$1"):a||t)}),r});const Qo=Jo;var eu=1/0;function ru(e){if(typeof e=="string"||Ke(e))return e;var r=e+"";return r=="0"&&1/e==-eu?"-0":r}var tu=1/0,Dr=B?B.prototype:void 0,Ur=Dr?Dr.toString:void 0;function ft(e){if(typeof e=="string")return e;if(ce(e))return lt(e,ft)+"";if(Ke(e))return Ur?Ur.call(e):"";var r=e+"";return r=="0"&&1/e==-tu?"-0":r}function nu(e){return e==null?"":ft(e)}function dt(e){return ce(e)?lt(e,ru):Ke(e)?[e]:tt(Qo(nu(e)))}var au=!0;function Ye(e,r){if(!au){if(e)return;var t="Warning: "+r;typeof console<"u"&&console.warn(t);try{throw Error(t)}catch{}}}var iu=1,ou=4;function uu(e){return ae(e,iu|ou)}function A(){return A=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},A.apply(this,arguments)}function pt(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r}function ge(e,r){if(e==null)return{};var t={},a=Object.keys(e),n,i;for(i=0;i<a.length;i++)n=a[i],!(r.indexOf(n)>=0)&&(t[n]=e[n]);return t}function Nr(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Vr=function(r){return Array.isArray(r)&&r.length===0},I=function(r){return typeof r=="function"},le=function(r){return r!==null&&typeof r=="object"},su=function(r){return String(Math.floor(Number(r)))===r},Fe=function(r){return Object.prototype.toString.call(r)==="[object String]"},ht=function(r){return d.Children.count(r)===0},we=function(r){return le(r)&&I(r.then)};function _(e,r,t,a){a===void 0&&(a=0);for(var n=dt(r);e&&a<n.length;)e=e[n[a++]];return e===void 0?t:e}function L(e,r,t){for(var a=Lr(e),n=a,i=0,u=dt(r);i<u.length-1;i++){var s=u[i],h=_(e,u.slice(0,i+1));if(h&&(le(h)||Array.isArray(h)))n=n[s]=Lr(h);else{var v=u[i+1];n=n[s]=su(v)&&Number(v)>=0?[]:{}}}return(i===0?e:n)[u[i]]===t?e:(t===void 0?delete n[u[i]]:n[u[i]]=t,i===0&&t===void 0&&delete a[u[i]],a)}function vt(e,r,t,a){t===void 0&&(t=new WeakMap),a===void 0&&(a={});for(var n=0,i=Object.keys(e);n<i.length;n++){var u=i[n],s=e[u];le(s)?t.get(s)||(t.set(s,!0),a[u]=Array.isArray(s)?[]:{},vt(s,r,t,a[u])):a[u]=r}return a}var me=d.createContext(void 0);me.displayName="FormikContext";var cu=me.Provider,lu=me.Consumer;function yt(){var e=d.useContext(me);return e||Ye(!1),e}function fu(e,r){switch(r.type){case"SET_VALUES":return A({},e,{values:r.payload});case"SET_TOUCHED":return A({},e,{touched:r.payload});case"SET_ERRORS":return x(e.errors,r.payload)?e:A({},e,{errors:r.payload});case"SET_STATUS":return A({},e,{status:r.payload});case"SET_ISSUBMITTING":return A({},e,{isSubmitting:r.payload});case"SET_ISVALIDATING":return A({},e,{isValidating:r.payload});case"SET_FIELD_VALUE":return A({},e,{values:L(e.values,r.payload.field,r.payload.value)});case"SET_FIELD_TOUCHED":return A({},e,{touched:L(e.touched,r.payload.field,r.payload.value)});case"SET_FIELD_ERROR":return A({},e,{errors:L(e.errors,r.payload.field,r.payload.value)});case"RESET_FORM":return A({},e,r.payload);case"SET_FORMIK_STATE":return r.payload(e);case"SUBMIT_ATTEMPT":return A({},e,{touched:vt(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return A({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return A({},e,{isSubmitting:!1});default:return e}}var G={},de={};function du(e){var r=e.validateOnChange,t=r===void 0?!0:r,a=e.validateOnBlur,n=a===void 0?!0:a,i=e.validateOnMount,u=i===void 0?!1:i,s=e.isInitialValid,h=e.enableReinitialize,v=h===void 0?!1:h,F=e.onSubmit,T=ge(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),l=A({validateOnChange:t,validateOnBlur:n,validateOnMount:u,onSubmit:F},T),w=d.useRef(l.initialValues),P=d.useRef(l.initialErrors||G),C=d.useRef(l.initialTouched||de),$=d.useRef(l.initialStatus),O=d.useRef(!1),V=d.useRef({});d.useEffect(function(){return O.current=!0,function(){O.current=!1}},[]);var qe=d.useReducer(fu,{values:l.initialValues,errors:l.initialErrors||G,touched:l.initialTouched||de,status:l.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),b=qe[0],m=qe[1],Xe=d.useCallback(function(o,c){return new Promise(function(f,p){var y=l.validate(o,c);y==null?f(G):we(y)?y.then(function(g){f(g||G)},function(g){p(g)}):f(y)})},[l.validate]),be=d.useCallback(function(o,c){var f=l.validationSchema,p=I(f)?f(c):f,y=c&&p.validateAt?p.validateAt(c,o):hu(o,p);return new Promise(function(g,j){y.then(function(){g(G)},function(U){U.name==="ValidationError"?g(pu(U)):j(U)})})},[l.validationSchema]),Ze=d.useCallback(function(o,c){return new Promise(function(f){return f(V.current[o].validate(c))})},[]),Je=d.useCallback(function(o){var c=Object.keys(V.current).filter(function(p){return I(V.current[p].validate)}),f=c.length>0?c.map(function(p){return Ze(p,_(o,p))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(f).then(function(p){return p.reduce(function(y,g,j){return g==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||g&&(y=L(y,c[j],g)),y},{})})},[Ze]),gt=d.useCallback(function(o){return Promise.all([Je(o),l.validationSchema?be(o):{},l.validate?Xe(o):{}]).then(function(c){var f=c[0],p=c[1],y=c[2],g=Me.all([f,p,y],{arrayMerge:vu});return g})},[l.validate,l.validationSchema,Je,Xe,be]),R=M(function(o){return o===void 0&&(o=b.values),m({type:"SET_ISVALIDATING",payload:!0}),gt(o).then(function(c){return O.current&&(m({type:"SET_ISVALIDATING",payload:!1}),m({type:"SET_ERRORS",payload:c})),c})});d.useEffect(function(){u&&O.current===!0&&x(w.current,l.initialValues)&&R(w.current)},[u,R]);var re=d.useCallback(function(o){var c=o&&o.values?o.values:w.current,f=o&&o.errors?o.errors:P.current?P.current:l.initialErrors||{},p=o&&o.touched?o.touched:C.current?C.current:l.initialTouched||{},y=o&&o.status?o.status:$.current?$.current:l.initialStatus;w.current=c,P.current=f,C.current=p,$.current=y;var g=function(){m({type:"RESET_FORM",payload:{isSubmitting:!!o&&!!o.isSubmitting,errors:f,touched:p,status:y,values:c,isValidating:!!o&&!!o.isValidating,submitCount:o&&o.submitCount&&typeof o.submitCount=="number"?o.submitCount:0}})};if(l.onReset){var j=l.onReset(b.values,sr);we(j)?j.then(g):g()}else g()},[l.initialErrors,l.initialStatus,l.initialTouched]);d.useEffect(function(){O.current===!0&&!x(w.current,l.initialValues)&&(v&&(w.current=l.initialValues,re()),u&&R(w.current))},[v,l.initialValues,re,u,R]),d.useEffect(function(){v&&O.current===!0&&!x(P.current,l.initialErrors)&&(P.current=l.initialErrors||G,m({type:"SET_ERRORS",payload:l.initialErrors||G}))},[v,l.initialErrors]),d.useEffect(function(){v&&O.current===!0&&!x(C.current,l.initialTouched)&&(C.current=l.initialTouched||de,m({type:"SET_TOUCHED",payload:l.initialTouched||de}))},[v,l.initialTouched]),d.useEffect(function(){v&&O.current===!0&&!x($.current,l.initialStatus)&&($.current=l.initialStatus,m({type:"SET_STATUS",payload:l.initialStatus}))},[v,l.initialStatus,l.initialTouched]);var Qe=M(function(o){if(V.current[o]&&I(V.current[o].validate)){var c=_(b.values,o),f=V.current[o].validate(c);return we(f)?(m({type:"SET_ISVALIDATING",payload:!0}),f.then(function(p){return p}).then(function(p){m({type:"SET_FIELD_ERROR",payload:{field:o,value:p}}),m({type:"SET_ISVALIDATING",payload:!1})})):(m({type:"SET_FIELD_ERROR",payload:{field:o,value:f}}),Promise.resolve(f))}else if(l.validationSchema)return m({type:"SET_ISVALIDATING",payload:!0}),be(b.values,o).then(function(p){return p}).then(function(p){m({type:"SET_FIELD_ERROR",payload:{field:o,value:p[o]}}),m({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),mt=d.useCallback(function(o,c){var f=c.validate;V.current[o]={validate:f}},[]),bt=d.useCallback(function(o){delete V.current[o]},[]),er=M(function(o,c){m({type:"SET_TOUCHED",payload:o});var f=c===void 0?n:c;return f?R(b.values):Promise.resolve()}),rr=d.useCallback(function(o){m({type:"SET_ERRORS",payload:o})},[]),tr=M(function(o,c){var f=I(o)?o(b.values):o;m({type:"SET_VALUES",payload:f});var p=c===void 0?t:c;return p?R(f):Promise.resolve()}),fe=d.useCallback(function(o,c){m({type:"SET_FIELD_ERROR",payload:{field:o,value:c}})},[]),X=M(function(o,c,f){m({type:"SET_FIELD_VALUE",payload:{field:o,value:c}});var p=f===void 0?t:f;return p?R(L(b.values,o,c)):Promise.resolve()}),nr=d.useCallback(function(o,c){var f=c,p=o,y;if(!Fe(o)){o.persist&&o.persist();var g=o.target?o.target:o.currentTarget,j=g.type,U=g.name,Ae=g.id,$e=g.value,Ft=g.checked,Ou=g.outerHTML,cr=g.options,wt=g.multiple;f=c||U||Ae,p=/number|range/.test(j)?(y=parseFloat($e),isNaN(y)?"":y):/checkbox/.test(j)?gu(_(b.values,f),Ft,$e):cr&&wt?yu(cr):$e}f&&X(f,p)},[X,b.values]),Te=M(function(o){if(Fe(o))return function(c){return nr(c,o)};nr(o)}),Z=M(function(o,c,f){c===void 0&&(c=!0),m({type:"SET_FIELD_TOUCHED",payload:{field:o,value:c}});var p=f===void 0?n:f;return p?R(b.values):Promise.resolve()}),ar=d.useCallback(function(o,c){o.persist&&o.persist();var f=o.target,p=f.name,y=f.id,g=f.outerHTML,j=c||p||y;Z(j,!0)},[Z]),Ee=M(function(o){if(Fe(o))return function(c){return ar(c,o)};ar(o)}),ir=d.useCallback(function(o){I(o)?m({type:"SET_FORMIK_STATE",payload:o}):m({type:"SET_FORMIK_STATE",payload:function(){return o}})},[]),or=d.useCallback(function(o){m({type:"SET_STATUS",payload:o})},[]),ur=d.useCallback(function(o){m({type:"SET_ISSUBMITTING",payload:o})},[]),Se=M(function(){return m({type:"SUBMIT_ATTEMPT"}),R().then(function(o){var c=o instanceof Error,f=!c&&Object.keys(o).length===0;if(f){var p;try{if(p=Et(),p===void 0)return}catch(y){throw y}return Promise.resolve(p).then(function(y){return O.current&&m({type:"SUBMIT_SUCCESS"}),y}).catch(function(y){if(O.current)throw m({type:"SUBMIT_FAILURE"}),y})}else if(O.current&&(m({type:"SUBMIT_FAILURE"}),c))throw o})}),Tt=M(function(o){o&&o.preventDefault&&I(o.preventDefault)&&o.preventDefault(),o&&o.stopPropagation&&I(o.stopPropagation)&&o.stopPropagation(),Se().catch(function(c){console.warn("Warning: An unhandled error was caught from submitForm()",c)})}),sr={resetForm:re,validateForm:R,validateField:Qe,setErrors:rr,setFieldError:fe,setFieldTouched:Z,setFieldValue:X,setStatus:or,setSubmitting:ur,setTouched:er,setValues:tr,setFormikState:ir,submitForm:Se},Et=M(function(){return F(b.values,sr)}),St=M(function(o){o&&o.preventDefault&&I(o.preventDefault)&&o.preventDefault(),o&&o.stopPropagation&&I(o.stopPropagation)&&o.stopPropagation(),re()}),_t=d.useCallback(function(o){return{value:_(b.values,o),error:_(b.errors,o),touched:!!_(b.touched,o),initialValue:_(w.current,o),initialTouched:!!_(C.current,o),initialError:_(P.current,o)}},[b.errors,b.touched,b.values]),At=d.useCallback(function(o){return{setValue:function(f,p){return X(o,f,p)},setTouched:function(f,p){return Z(o,f,p)},setError:function(f){return fe(o,f)}}},[X,Z,fe]),$t=d.useCallback(function(o){var c=le(o),f=c?o.name:o,p=_(b.values,f),y={name:f,value:p,onChange:Te,onBlur:Ee};if(c){var g=o.type,j=o.value,U=o.as,Ae=o.multiple;g==="checkbox"?j===void 0?y.checked=!!p:(y.checked=!!(Array.isArray(p)&&~p.indexOf(j)),y.value=j):g==="radio"?(y.checked=p===j,y.value=j):U==="select"&&Ae&&(y.value=y.value||[],y.multiple=!0)}return y},[Ee,Te,b.values]),_e=d.useMemo(function(){return!x(w.current,b.values)},[w.current,b.values]),Ot=d.useMemo(function(){return typeof s<"u"?_e?b.errors&&Object.keys(b.errors).length===0:s!==!1&&I(s)?s(l):s:b.errors&&Object.keys(b.errors).length===0},[s,_e,b.errors,l]),jt=A({},b,{initialValues:w.current,initialErrors:P.current,initialTouched:C.current,initialStatus:$.current,handleBlur:Ee,handleChange:Te,handleReset:St,handleSubmit:Tt,resetForm:re,setErrors:rr,setFormikState:ir,setFieldTouched:Z,setFieldValue:X,setFieldError:fe,setStatus:or,setSubmitting:ur,setTouched:er,setValues:tr,submitForm:Se,validateForm:R,validateField:Qe,isValid:Ot,dirty:_e,unregisterField:bt,registerField:mt,getFieldProps:$t,getFieldMeta:_t,getFieldHelpers:At,validateOnBlur:n,validateOnChange:t,validateOnMount:u});return jt}function wu(e){var r=du(e),t=e.component,a=e.children,n=e.render,i=e.innerRef;return d.useImperativeHandle(i,function(){return r}),d.createElement(cu,{value:r},t?d.createElement(t,r):n?n(r):a?I(a)?a(r):ht(a)?null:d.Children.only(a):null)}function pu(e){var r={};if(e.inner){if(e.inner.length===0)return L(r,e.path,e.message);for(var n=e.inner,t=Array.isArray(n),a=0,n=t?n:n[Symbol.iterator]();;){var i;if(t){if(a>=n.length)break;i=n[a++]}else{if(a=n.next(),a.done)break;i=a.value}var u=i;_(r,u.path)||(r=L(r,u.path,u.message))}}return r}function hu(e,r,t,a){t===void 0&&(t=!1),a===void 0&&(a={});var n=Ue(e);return r[t?"validateSync":"validate"](n,{abortEarly:!1,context:a})}function Ue(e){var r=Array.isArray(e)?[]:{};for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var a=String(t);Array.isArray(e[a])===!0?r[a]=e[a].map(function(n){return Array.isArray(n)===!0||pr(n)?Ue(n):n!==""?n:void 0}):pr(e[a])?r[a]=Ue(e[a]):r[a]=e[a]!==""?e[a]:void 0}return r}function vu(e,r,t){var a=e.slice();return r.forEach(function(i,u){if(typeof a[u]>"u"){var s=t.clone!==!1,h=s&&t.isMergeableObject(i);a[u]=h?Me(Array.isArray(i)?[]:{},i,t):i}else t.isMergeableObject(i)?a[u]=Me(e[u],i,t):e.indexOf(i)===-1&&a.push(i)}),a}function yu(e){return Array.from(e).filter(function(r){return r.selected}).map(function(r){return r.value})}function gu(e,r,t){if(typeof e=="boolean")return!!r;var a=[],n=!1,i=-1;if(Array.isArray(e))a=e,i=e.indexOf(t),n=i>=0;else if(!t||t=="true"||t=="false")return!!r;return r&&t&&!n?a.concat(t):n?a.slice(0,i).concat(a.slice(i+1)):a}var mu=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?d.useLayoutEffect:d.useEffect;function M(e){var r=d.useRef(e);return mu(function(){r.current=e}),d.useCallback(function(){for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];return r.current.apply(void 0,a)},[])}function Iu(e){var r=yt(),t=r.getFieldProps,a=r.getFieldMeta,n=r.getFieldHelpers,i=r.registerField,u=r.unregisterField,s=le(e),h=s?e:{name:e},v=h.name,F=h.validate;return d.useEffect(function(){return v&&i(v,{validate:F}),function(){v&&u(v)}},[i,u,v,F]),v||Ye(!1),[t(h),a(v),n(v)]}var bu=d.forwardRef(function(e,r){var t=e.action,a=ge(e,["action"]),n=t??"#",i=yt(),u=i.handleReset,s=i.handleSubmit;return d.createElement("form",Object.assign({onSubmit:s,ref:r,onReset:u,action:n},a))});bu.displayName="Form";function Tu(e){var r=function(n){return d.createElement(lu,null,function(i){return i||Ye(!1),d.createElement(e,Object.assign({},n,{formik:i}))})},t=e.displayName||e.name||e.constructor&&e.constructor.name||"Component";return r.WrappedComponent=e,r.displayName="FormikConnect("+t+")",It(r,e)}var Eu=function(r,t,a){var n=Q(r),i=n[t];return n.splice(t,1),n.splice(a,0,i),n},Su=function(r,t,a){var n=Q(r),i=n[t];return n[t]=n[a],n[a]=i,n},Ie=function(r,t,a){var n=Q(r);return n.splice(t,0,a),n},_u=function(r,t,a){var n=Q(r);return n[t]=a,n},Q=function(r){if(r){if(Array.isArray(r))return[].concat(r);var t=Object.keys(r).map(function(a){return parseInt(a)}).reduce(function(a,n){return n>a?n:a},0);return Array.from(A({},r,{length:t+1}))}else return[]},Au=function(e){pt(r,e);function r(a){var n;return n=e.call(this,a)||this,n.updateArrayField=function(i,u,s){var h=n.props,v=h.name,F=h.formik.setFormikState;F(function(T){var l=typeof s=="function"?s:i,w=typeof u=="function"?u:i,P=L(T.values,v,i(_(T.values,v))),C=s?l(_(T.errors,v)):void 0,$=u?w(_(T.touched,v)):void 0;return Vr(C)&&(C=void 0),Vr($)&&($=void 0),A({},T,{values:P,errors:s?L(T.errors,v,C):T.errors,touched:u?L(T.touched,v,$):T.touched})})},n.push=function(i){return n.updateArrayField(function(u){return[].concat(Q(u),[uu(i)])},!1,!1)},n.handlePush=function(i){return function(){return n.push(i)}},n.swap=function(i,u){return n.updateArrayField(function(s){return Su(s,i,u)},!0,!0)},n.handleSwap=function(i,u){return function(){return n.swap(i,u)}},n.move=function(i,u){return n.updateArrayField(function(s){return Eu(s,i,u)},!0,!0)},n.handleMove=function(i,u){return function(){return n.move(i,u)}},n.insert=function(i,u){return n.updateArrayField(function(s){return Ie(s,i,u)},function(s){return Ie(s,i,null)},function(s){return Ie(s,i,null)})},n.handleInsert=function(i,u){return function(){return n.insert(i,u)}},n.replace=function(i,u){return n.updateArrayField(function(s){return _u(s,i,u)},!1,!1)},n.handleReplace=function(i,u){return function(){return n.replace(i,u)}},n.unshift=function(i){var u=-1;return n.updateArrayField(function(s){var h=s?[i].concat(s):[i];return u<0&&(u=h.length),h},function(s){var h=s?[null].concat(s):[null];return u<0&&(u=h.length),h},function(s){var h=s?[null].concat(s):[null];return u<0&&(u=h.length),h}),u},n.handleUnshift=function(i){return function(){return n.unshift(i)}},n.handleRemove=function(i){return function(){return n.remove(i)}},n.handlePop=function(){return function(){return n.pop()}},n.remove=n.remove.bind(Nr(n)),n.pop=n.pop.bind(Nr(n)),n}var t=r.prototype;return t.componentDidUpdate=function(n){this.props.validateOnChange&&this.props.formik.validateOnChange&&!x(_(n.formik.values,n.name),_(this.props.formik.values,this.props.name))&&this.props.formik.validateForm(this.props.formik.values)},t.remove=function(n){var i;return this.updateArrayField(function(u){var s=u?Q(u):[];return i||(i=s[n]),I(s.splice)&&s.splice(n,1),s},!0,!0),i},t.pop=function(){var n;return this.updateArrayField(function(i){var u=i;return n||(n=u&&u.pop&&u.pop()),u},!0,!0),n},t.render=function(){var n={push:this.push,pop:this.pop,swap:this.swap,move:this.move,insert:this.insert,replace:this.replace,unshift:this.unshift,remove:this.remove,handlePush:this.handlePush,handlePop:this.handlePop,handleSwap:this.handleSwap,handleMove:this.handleMove,handleInsert:this.handleInsert,handleReplace:this.handleReplace,handleUnshift:this.handleUnshift,handleRemove:this.handleRemove},i=this.props,u=i.component,s=i.render,h=i.children,v=i.name,F=i.formik,T=ge(F,["validate","validationSchema"]),l=A({},n,{form:T,name:v});return u?d.createElement(u,l):s?s(l):h?typeof h=="function"?h(l):ht(h)?null:d.Children.only(h):null},r}(d.Component);Au.defaultProps={validateOnChange:!0};var $u=function(e){pt(r,e);function r(){return e.apply(this,arguments)||this}var t=r.prototype;return t.shouldComponentUpdate=function(n){return _(this.props.formik.errors,this.props.name)!==_(n.formik.errors,this.props.name)||_(this.props.formik.touched,this.props.name)!==_(n.formik.touched,this.props.name)||Object.keys(this.props).length!==Object.keys(n).length},t.render=function(){var n=this.props,i=n.component,u=n.formik,s=n.render,h=n.children,v=n.name,F=ge(n,["component","formik","render","children","name"]),T=_(u.touched,v),l=_(u.errors,v);return T&&l?s?I(s)?s(l):null:h?I(h)?h(l):null:i?d.createElement(i,F,l):l:null},r}(d.Component),Cu=Tu($u);export{Cu as E,wu as F,Iu as a,bu as b,Fu as i,du as u};
