import{S as e,i as t,s as a,y as r,e as s,b as o,t as l,c as f,d as n,a as u,z as c,o as i,p as h,f as p,g as $,u as d}from"./main.js";function m(e){let t,a,$,d,m,v,x,b,g,y,C,F,k,w,_,j,z,S,T,V;const q=e[2].default,A=r(q,e,e[1],null);return{c(){t=s("p"),t.textContent="V1.1 has only one file: feature2.svelte",a=o(),$=s("p"),$.textContent="The rest are handled with _fallback.svelte, which redirects to v1",d=o(),m=s("code"),v=s("pre"),v.textContent="/** _fallback.svelte **/\n    import {(goto, leftover)} from '@roxi/routify'\n    $goto('../../v1/'+$leftover, null, true, true)",x=o(),b=s("a"),g=l("Feature 1"),C=o(),F=s("a"),k=l("Feature 2"),_=o(),j=s("a"),z=l("Feature 3"),T=o(),A&&A.c(),f(b,"href",y=e[0]("./feature1")),f(F,"href",w=e[0]("./feature2")),f(j,"href",S=e[0]("./feature3"))},m(e,r){n(e,t,r),n(e,a,r),n(e,$,r),n(e,d,r),n(e,m,r),u(m,v),n(e,x,r),n(e,b,r),u(b,g),n(e,C,r),n(e,F,r),u(F,k),n(e,_,r),n(e,j,r),u(j,z),n(e,T,r),A&&A.m(e,r),V=!0},p(e,[t]){(!V||1&t&&y!==(y=e[0]("./feature1")))&&f(b,"href",y),(!V||1&t&&w!==(w=e[0]("./feature2")))&&f(F,"href",w),(!V||1&t&&S!==(S=e[0]("./feature3")))&&f(j,"href",S),A&&A.p&&(!V||2&t)&&c(A,q,e,e[1],t,null,null)},i(e){V||(i(A,e),V=!0)},o(e){h(A,e),V=!1},d(e){e&&p(t),e&&p(a),e&&p($),e&&p(d),e&&p(m),e&&p(x),e&&p(b),e&&p(C),e&&p(F),e&&p(_),e&&p(j),e&&p(T),A&&A.d(e)}}}function v(e,t,a){let r;$(e,d,(e=>a(0,r=e)));let{$$slots:s={},$$scope:o}=t;return e.$$set=e=>{"$$scope"in e&&a(1,o=e.$$scope)},[r,o,s]}export default class extends e{constructor(e){super(),t(this,e,v,m,a,{})}}
//# sourceMappingURL=_layout-bb873829.js.map
