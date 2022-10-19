var L=Object.defineProperty;var l=(e,t)=>L(e,"name",{value:t,configurable:!0});import{g as N}from"./iframe.dde03a80.js";function U(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const s=Object.getOwnPropertyDescriptor(r,o);s&&Object.defineProperty(e,o,s.get?s:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}l(U,"_mergeNamespaces");var h={exports:{}},u={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d=Symbol.for("react.element"),V=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),z=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),H=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),Y=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),$=Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=$&&e[$]||e["@@iterator"],typeof e=="function"?e:null)}l(K,"A");var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,P={};function y(e,t,n){this.props=e,this.context=t,this.refs=P,this.updater=n||g}l(y,"E");y.prototype.isReactComponent={};y.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function I(){}l(I,"F");I.prototype=y.prototype;function E(e,t,n){this.props=e,this.context=t,this.refs=P,this.updater=n||g}l(E,"G");var b=E.prototype=new I;b.constructor=E;C(b,y.prototype);b.isPureReactComponent=!0;var w=Array.isArray,F=Object.prototype.hasOwnProperty,j={current:null},T={key:!0,ref:!0,__self:!0,__source:!0};function D(e,t,n){var r,o={},s=null,c=null;if(t!=null)for(r in t.ref!==void 0&&(c=t.ref),t.key!==void 0&&(s=""+t.key),t)F.call(t,r)&&!T.hasOwnProperty(r)&&(o[r]=t[r]);var f=arguments.length-2;if(f===1)o.children=n;else if(1<f){for(var i=Array(f),p=0;p<f;p++)i[p]=arguments[p+2];o.children=i}if(e&&e.defaultProps)for(r in f=e.defaultProps,f)o[r]===void 0&&(o[r]=f[r]);return{$$typeof:d,type:e,key:s,ref:c,props:o,_owner:j.current}}l(D,"M");function Q(e,t){return{$$typeof:d,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}l(Q,"N");function k(e){return typeof e=="object"&&e!==null&&e.$$typeof===d}l(k,"O");function X(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}l(X,"escape");var O=/\/+/g;function x(e,t){return typeof e=="object"&&e!==null&&e.key!=null?X(""+e.key):t.toString(36)}l(x,"Q");function m(e,t,n,r,o){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case d:case V:c=!0}}if(c)return c=e,o=o(c),e=r===""?"."+x(c,0):r,w(o)?(n="",e!=null&&(n=e.replace(O,"$&/")+"/"),m(o,t,n,"",function(p){return p})):o!=null&&(k(o)&&(o=Q(o,n+(!o.key||c&&c.key===o.key?"":(""+o.key).replace(O,"$&/")+"/")+e)),t.push(o)),1;if(c=0,r=r===""?".":r+":",w(e))for(var f=0;f<e.length;f++){s=e[f];var i=r+x(s,f);c+=m(s,t,n,i,o)}else if(i=K(e),typeof i=="function")for(e=i.call(e),f=0;!(s=e.next()).done;)s=s.value,i=r+x(s,f++),c+=m(s,t,n,i,o);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}l(m,"R");function _(e,t,n){if(e==null)return e;var r=[],o=0;return m(e,r,"","",function(s){return t.call(n,s,o++)}),r}l(_,"S");function Z(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}l(Z,"T");var a={current:null},v={transition:null},ee={ReactCurrentDispatcher:a,ReactCurrentBatchConfig:v,ReactCurrentOwner:j};u.Children={map:_,forEach:function(e,t,n){_(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return _(e,function(){t++}),t},toArray:function(e){return _(e,function(t){return t})||[]},only:function(e){if(!k(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};u.Component=y;u.Fragment=q;u.Profiler=z;u.PureComponent=E;u.StrictMode=M;u.Suspense=J;u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ee;u.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=C({},e.props),o=e.key,s=e.ref,c=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,c=j.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var f=e.type.defaultProps;for(i in t)F.call(t,i)&&!T.hasOwnProperty(i)&&(r[i]=t[i]===void 0&&f!==void 0?f[i]:t[i])}var i=arguments.length-2;if(i===1)r.children=n;else if(1<i){f=Array(i);for(var p=0;p<i;p++)f[p]=arguments[p+2];r.children=f}return{$$typeof:d,type:e.type,key:o,ref:s,props:r,_owner:c}};u.createContext=function(e){return e={$$typeof:H,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:B,_context:e},e.Consumer=e};u.createElement=D;u.createFactory=function(e){var t=D.bind(null,e);return t.type=e,t};u.createRef=function(){return{current:null}};u.forwardRef=function(e){return{$$typeof:W,render:e}};u.isValidElement=k;u.lazy=function(e){return{$$typeof:G,_payload:{_status:-1,_result:e},_init:Z}};u.memo=function(e,t){return{$$typeof:Y,type:e,compare:t===void 0?null:t}};u.startTransition=function(e){var t=v.transition;v.transition={};try{e()}finally{v.transition=t}};u.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};u.useCallback=function(e,t){return a.current.useCallback(e,t)};u.useContext=function(e){return a.current.useContext(e)};u.useDebugValue=function(){};u.useDeferredValue=function(e){return a.current.useDeferredValue(e)};u.useEffect=function(e,t){return a.current.useEffect(e,t)};u.useId=function(){return a.current.useId()};u.useImperativeHandle=function(e,t,n){return a.current.useImperativeHandle(e,t,n)};u.useInsertionEffect=function(e,t){return a.current.useInsertionEffect(e,t)};u.useLayoutEffect=function(e,t){return a.current.useLayoutEffect(e,t)};u.useMemo=function(e,t){return a.current.useMemo(e,t)};u.useReducer=function(e,t,n){return a.current.useReducer(e,t,n)};u.useRef=function(e){return a.current.useRef(e)};u.useState=function(e){return a.current.useState(e)};u.useSyncExternalStore=function(e,t,n){return a.current.useSyncExternalStore(e,t,n)};u.useTransition=function(){return a.current.useTransition()};u.version="18.2.0";(function(e){e.exports=u})(h);const te=N(h.exports),le=U({__proto__:null,default:te},[h.exports]);var S={exports:{}},R={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var re=h.exports,ne=Symbol.for("react.element"),oe=Symbol.for("react.fragment"),ue=Object.prototype.hasOwnProperty,se=re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ce={key:!0,ref:!0,__self:!0,__source:!0};function A(e,t,n){var r,o={},s=null,c=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(c=t.ref);for(r in t)ue.call(t,r)&&!ce.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:ne,type:e,key:s,ref:c,props:o,_owner:se.current}}l(A,"q");R.Fragment=oe;R.jsx=A;R.jsxs=A;(function(e){e.exports=R})(S);const ae=S.exports.Fragment,pe=S.exports.jsx,ye=S.exports.jsxs;export{ae as F,te as R,ye as a,le as b,pe as j,h as r};
//# sourceMappingURL=jsx-runtime.7fdd1291.js.map
