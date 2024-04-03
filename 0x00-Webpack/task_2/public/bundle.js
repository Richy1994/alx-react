/*! For license information please see bundle.js.LICENSE.txt */

(()=>{var t={238:(t,e,n)=>{"use strict";n.d(e,{Z:()=>f});var r=n(645),i=n.n(r),o=n(667),u=n.n(o),a=new URL(n(868),n.b),s=i()((function(t){return t[1]})),c=u()(a);s.push([t.id,"#count {\n  display: inline;\n  font-weight: bold;\n}\n\n#logo {\n  background-image: url("+c+");\n  width: 200px;\n  height: 200px;\n  background-size: 200px 200px;\n}\n",""]);const f=s},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var u=this[o][0];null!=u&&(i[u]=!0)}for(var a=0;a<t.length;a++){var s=[].concat(t[a]);r&&i[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),e.push(s))}},e}},667:t=>{"use strict";t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},755:function(t,e){var n;!function(e,n){"use strict";"object"==typeof t.exports?t.exports=e.document?n(e,!0):function(t){if(!t.document)throw new Error("jQuery requires a window with a document");return n(t)}:n(e)}("undefined"!=typeof window?window:this,(function(r,i){"use strict";var o=[],u=Object.getPrototypeOf,a=o.slice,s=o.flat?function(t){return o.flat.call(t)}:function(t){return o.concat.apply([],t)},c=o.push,f=o.indexOf,l={},p=l.toString,h=l.hasOwnProperty,d=h.toString,v=d.call(Object),g={},y=function(t){return"function"==typeof t&&"number"!=typeof t.nodeType&&"function"!=typeof t.item},m=function(t){return null!=t&&t===t.window},b=r.document,x={type:!0,src:!0,nonce:!0,noModule:!0};function _(t,e,n){var r,i,o=(n=n||b).createElement("script");if(o.text=t,e)for(r in x)(i=e[r]||e.getAttribute&&e.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(t){return null==t?t+"":"object"==typeof t||"function"==typeof t?l[p.call(t)]||"object":typeof t}var T="3.6.0",C=function(t,e){return new C.fn.init(t,e)};function A(t){var e=!!t&&"length"in t&&t.length,n=w(t);return!y(t)&&!m(t)&&("array"===n||0===e||"number"==typeof e&&e>0&&e-1 in t)}C.fn=C.prototype={jquery:T,constructor:C,length:0,toArray:function(){return a.call(this)},get:function(t){return null==t?a.call(this):t<0?this[t+this.length]:this[t]},pushStack:function(t){var e=C.merge(this.constructor(),t);return e.prevObject=this,e},each:function(t){return C.each(this,t)},map:function(t){return this.pushStack(C.map(this,(function(e,n){return t.call(e,n,e)})))},slice:function(){return this.pushStack(a.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(C.grep(this,(function(t,e){return(e+1)%2})))},odd:function(){return this.pushStack(C.grep(this,(function(t,e){return e%2})))},eq:function(t){var e=this.length,n=+t+(t<0?e:0);return this.pushStack(n>=0&&n<e?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:c,sort:o.sort,splice:o.splice},C.extend=C.fn.extend=function(){var t,e,n,r,i,o,u=arguments[0]||{},a=1,s=arguments.length,c=!1;for("boolean"==typeof u&&(c=u,u=arguments[a]||{},a++),"object"==typeof u||y(u)||(u={}),a===s&&(u=this,a--);a<s;a++)if(null!=(t=arguments[a]))for(e in t)r=t[e],"__proto__"!==e&&u!==r&&(c&&r&&(C.isPlainObject(r)||(i=Array.isArray(r)))?(n=u[e],o=i&&!Array.isArray(n)?[]:i||C.isPlainObject(n)?n:{},i=!1,u[e]=C.extend(c,o,r)):void 0!==r&&(u[e]=r));return u},C.extend({expando:"jQuery"+(T+Math.random()).replace(/\D/g,""),isReady:!0,error:function(t){throw new Error(t)},noop:function(){},isPlainObject:function(t){var e,n;return!(!t||"[object Object]"!==p.call(t)||(e=u(t))&&("function"!=typeof(n=h.call(e,"constructor")&&e.constructor)||d.call(n)!==v))},isEmptyObject:function(t){var e;for(e in t)return!1;return!0},globalEval:function(t,e,n){_(t,{nonce:e&&e.nonce},n)},each:function(t,e){var n,r=0;if(A(t))for(n=t.length;r<n&&!1!==e.call(t
