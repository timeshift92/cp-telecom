import{Q as t,R as n,T as e}from"./main.js";function a(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function o(t){const n=t-1;return n*n*n+1}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function r(t,{delay:n=0,duration:a=400,easing:o=e}={}){const r=+getComputedStyle(t).opacity;return{delay:n,duration:a,easing:o,css:t=>"opacity: "+t*r}}function s(t,{delay:n=0,duration:e=400,easing:a=o,x:r=0,y:s=0,opacity:i=0}={}){const c=getComputedStyle(t),u=+c.opacity,y="none"===c.transform?"":c.transform,l=u*(1-i);return{delay:n,duration:e,easing:a,css:(t,n)=>`\n\t\t\ttransform: ${y} translate(${(1-t)*r}px, ${(1-t)*s}px);\n\t\t\topacity: ${u-l*n}`}}function i(t,{delay:n=0,duration:e=400,easing:a=o,start:r=0,opacity:s=0}={}){const i=getComputedStyle(t),c=+i.opacity,u="none"===i.transform?"":i.transform,y=1-r,l=c*(1-s);return{delay:n,duration:e,easing:a,css:(t,n)=>`\n\t\t\ttransform: ${u} scale(${1-y*n});\n\t\t\topacity: ${c-l*n}\n\t\t`}}function c(t,{delay:n=0,speed:e,duration:o,easing:r=a}={}){const s=t.getTotalLength();return void 0===o?o=void 0===e?800:s/e:"function"==typeof o&&(o=o(s)),{delay:n,duration:o,easing:r,css:(t,n)=>`stroke-dasharray: ${t*s} ${n*s}`}}function u(e){var{fallback:a}=e,r=function(t,n){var e={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&n.indexOf(a)<0&&(e[a]=t[a]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(t);o<a.length;o++)n.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(t,a[o])&&(e[a[o]]=t[a[o]])}return e}(e,["fallback"]);const s=new Map,i=new Map;function c(e,s,i){return(c,u)=>(e.set(u.key,{rect:c.getBoundingClientRect()}),()=>{if(s.has(u.key)){const{rect:e}=s.get(u.key);return s.delete(u.key),function(e,a,s){const{delay:i=0,duration:c=(t=>30*Math.sqrt(t)),easing:u=o}=n(n({},r),s),y=a.getBoundingClientRect(),l=e.left-y.left,p=e.top-y.top,d=e.width/y.width,f=e.height/y.height,g=Math.sqrt(l*l+p*p),m=getComputedStyle(a),$="none"===m.transform?"":m.transform,h=+m.opacity;return{delay:i,duration:t(c)?c(g):c,easing:u,css:(t,n)=>`\n\t\t\t\topacity: ${t*h};\n\t\t\t\ttransform-origin: top left;\n\t\t\t\ttransform: ${$} translate(${n*l}px,${n*p}px) scale(${t+(1-t)*d}, ${t+(1-t)*f});\n\t\t\t`}}(e,c,u)}return e.delete(u.key),a&&a(c,u,i)})}return[c(i,s,!1),c(s,i,!0)]}export{s as a,u as c,c as d,r as f,i as s};
//# sourceMappingURL=index-929e1add.js.map
