function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function o(){return Object.create(null)}function r(e){e.forEach(n)}function i(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function s(t,...n){if(null==t)return e;const o=t.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}function c(e){let t;return s(e,(e=>t=e))(),t}function l(e,t,n){e.$$.on_destroy.push(s(t,n))}function u(e,t,n,o){if(e){const r=p(e,t,n,o);return e[0](r)}}function p(e,n,o,r){return e[1]&&r?t(o.ctx.slice(),e[1](r(n))):o.ctx}function d(e,t,n,o,r,i,a){const s=function(e,t,n,o){if(e[2]&&o){const r=e[2](o(n));if(void 0===t.dirty)return r;if("object"==typeof r){const e=[],n=Math.max(t.dirty.length,r.length);for(let o=0;o<n;o+=1)e[o]=t.dirty[o]|r[o];return e}return t.dirty|r}return t.dirty}(t,o,r,i);if(s){const r=p(t,n,o,a);e.p(r,s)}}function f(e,t){e.appendChild(t)}function h(e,t,n){e.insertBefore(t,n||null)}function m(e){e.parentNode.removeChild(e)}function g(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function y(e){return document.createElement(e)}function $(e){return document.createTextNode(e)}function b(){return $(" ")}function w(){return $("")}function x(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function _(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function v(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function P(e,t,n,o){e.style.setProperty(t,n,o?"important":"")}let k;function j(e){k=e}function O(){if(!k)throw new Error("Function called outside component initialization");return k}function E(e,t){O().$$.context.set(e,t)}function I(e){return O().$$.context.get(e)}const S=[],L=[],T=[],N=[],F=Promise.resolve();let M=!1;function R(){M||(M=!0,F.then(U))}function A(){return R(),F}function C(e){T.push(e)}let B=!1;const q=new Set;function U(){if(!B){B=!0;do{for(let e=0;e<S.length;e+=1){const t=S[e];j(t),H(t.$$)}for(j(null),S.length=0;L.length;)L.pop()();for(let e=0;e<T.length;e+=1){const t=T[e];q.has(t)||(q.add(t),t())}T.length=0}while(S.length);for(;N.length;)N.pop()();M=!1,B=!1,q.clear()}}function H(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(C)}}const K=new Set;let z;function D(){z={r:0,c:[],p:z}}function W(){z.r||r(z.c),z=z.p}function J(e,t){e&&e.i&&(K.delete(e),e.i(t))}function G(e,t,n,o){if(e&&e.o){if(K.has(e))return;K.add(e),z.c.push((()=>{K.delete(e),o&&(n&&e.d(1),o())})),e.o(t)}}const Q="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function V(e,t){e.d(1),t.delete(e.key)}function Z(e,t){G(e,1,1,(()=>{t.delete(e.key)}))}function X(e,t,n,o,r,i,a,s,c,l,u,p){let d=e.length,f=i.length,h=d;const m={};for(;h--;)m[e[h].key]=h;const g=[],y=new Map,$=new Map;for(h=f;h--;){const e=p(r,i,h),s=n(e);let c=a.get(s);c?o&&c.p(e,t):(c=l(s,e),c.c()),y.set(s,g[h]=c),s in m&&$.set(s,Math.abs(h-m[s]))}const b=new Set,w=new Set;function x(e){J(e,1),e.m(s,u),a.set(e.key,e),u=e.first,f--}for(;d&&f;){const t=g[f-1],n=e[d-1],o=t.key,r=n.key;t===n?(u=t.first,d--,f--):y.has(r)?!a.has(o)||b.has(o)?x(t):w.has(r)?d--:$.get(o)>$.get(r)?(w.add(o),x(t)):(b.add(r),d--):(c(n,a),d--)}for(;d--;){const t=e[d];y.has(t.key)||c(t,a)}for(;f;)x(g[f-1]);return g}function Y(e){e&&e.c()}function ee(e,t,o,a){const{fragment:s,on_mount:c,on_destroy:l,after_update:u}=e.$$;s&&s.m(t,o),a||C((()=>{const t=c.map(n).filter(i);l?l.push(...t):r(t),e.$$.on_mount=[]})),u.forEach(C)}function te(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ne(t,n,i,a,s,c,l=[-1]){const u=k;j(t);const p=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:s,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:n.context||[]),callbacks:o(),dirty:l,skip_bound:!1};let d=!1;if(p.ctx=i?i(t,n.props||{},((e,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&s(p.ctx[e],p.ctx[e]=r)&&(!p.skip_bound&&p.bound[e]&&p.bound[e](r),d&&function(e,t){-1===e.$$.dirty[0]&&(S.push(e),R(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}(t,e)),n})):[],p.update(),d=!0,r(p.before_update),p.fragment=!!a&&a(p.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);p.fragment&&p.fragment.l(e),e.forEach(m)}else p.fragment&&p.fragment.c();n.intro&&J(t.$$.fragment),ee(t,n.target,n.anchor,n.customElement),U()}j(u)}class oe{$destroy(){te(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}var re={queryHandler:{parse:e=>{return t=new URLSearchParams(e),[...t].reduce(((e,[t,n])=>(e[t]=n,e)),{});var t},stringify:e=>"?"+new URLSearchParams(e).toString()},urlTransform:{apply:e=>e,remove:e=>e},useHash:!1};const ie=RegExp(/\:([^/()]+)/g);function ae(e,t){if(navigator.userAgent.includes("jsdom"))return!1;t&&se(e),function(){if(navigator.userAgent.includes("jsdom"))return!1;const{hash:e}=window.location;if(e){if(/^[A-Za-z]+[\w\-\:\.]*$/.test(e.substring(1))){const t=document.querySelector(e);t&&t.scrollIntoView()}}}()}function se(e){e&&e.scrollTo&&"scroll-lock"!==e.dataset.routify&&"lock"!==e.dataset["routify-scroll"]&&(e.style["scroll-behavior"]="auto",e.scrollTo({top:0,behavior:"auto"}),e.style["scroll-behavior"]="",se(e.parentElement))}const ce=e=>{const t=[];let n;for(;n=ie.exec(e);)t.push(n[1]);return t};function le(e,t){le._console=le._console||{log:console.log,warn:console.warn};const{_console:n}=le,o=e.componentFile.name.replace(/Proxy<_?(.+)>/,"$1").replace(/^Index$/,e.component.shortPath.split("/").pop()).replace(/^./,(e=>e.toUpperCase())).replace(/\:(.+)/,"U5B$1u5D"),r=[`<${o}> received an unexpected slot "default".`,`<${o}> was created with unknown prop 'scoped'`,`<${o}> was created with unknown prop 'scopedSync'`];for(const e of["log","warn"])console[e]=(...t)=>{r.includes(t[0])||n[e](...t)},t().then((()=>{console[e]=n[e]}))}function ue(){let e=window.location.pathname+window.location.search+window.location.hash;const{url:t,options:n}=function(e){const[t,n]=e.split("__[[routify_url_options]]__"),o=JSON.parse(decodeURIComponent(n||"")||"{}");return window.routify=window.routify||{},window.routify.prefetched=o.prefetch,{url:t,options:o}}(e);return{...pe(t),options:n}}function pe(e){re.useHash&&(e=e.replace(/.*#(.+)/,"$1"));const t=e.startsWith("/")?window.location.origin:void 0,n=new URL(e,t);return{url:n,fullpath:n.pathname+n.search+n.hash}}function de(e,t,n){const o=re.useHash?"#":"";let r;return r=function(e,t,n){const o=Object.assign({},n,t),r=function(e,t){if(!re.queryHandler)return"";const n=ce(e),o={};t&&Object.entries(t).forEach((([e,t])=>{n.includes(e)||(o[e]=t)}));return re.queryHandler.stringify(o).replace(/\?$/,"")}(e,t);for(const[t,n]of Object.entries(o))e=e.replace(`:${t}`,n);return`${e}${r}`}(e,t,n),r=re.urlTransform.apply(r),r=o+r,r}function fe(e){let t;const n=e[2].default,o=u(n,e,e[1],null);return{c(){o&&o.c()},m(e,n){o&&o.m(e,n),t=!0},p(e,[r]){o&&o.p&&(!t||2&r)&&d(o,n,e,e[1],r,null,null)},i(e){t||(J(o,e),t=!0)},o(e){G(o,e),t=!1},d(e){o&&o.d(e)}}}function he(e,t,n){let{$$slots:o={},$$scope:r}=t,{scoped:i={}}=t;return e.$$set=e=>{"scoped"in e&&n(0,i=e.scoped),"$$scope"in e&&n(1,r=e.$$scope)},[i,r,o]}class me extends oe{constructor(e){super(),ne(this,e,he,fe,a,{scoped:0})}}const ge=[];function ye(t,n=e){let o;const r=[];function i(e){if(a(t,e)&&(t=e,o)){const e=!ge.length;for(let e=0;e<r.length;e+=1){const n=r[e];n[1](),ge.push(n,t)}if(e){for(let e=0;e<ge.length;e+=2)ge[e][0](ge[e+1]);ge.length=0}}}return{set:i,update:function(e){i(e(t))},subscribe:function(a,s=e){const c=[a,s];return r.push(c),1===r.length&&(o=n(i)||e),a(t),()=>{const e=r.indexOf(c);-1!==e&&r.splice(e,1),0===r.length&&(o(),o=null)}}}}function $e(t,n,o){const a=!Array.isArray(t),c=a?[t]:t,l=n.length<2;return{subscribe:ye(o,(t=>{let o=!1;const u=[];let p=0,d=e;const f=()=>{if(p)return;d();const o=n(a?u[0]:u,t);l?t(o):d=i(o)?o:e},h=c.map(((e,t)=>s(e,(e=>{u[t]=e,p&=~(1<<t),o&&f()}),(()=>{p|=1<<t}))));return o=!0,f(),function(){r(h),d()}})).subscribe}}window.routify=window.routify||{};const be=ye(null),we=ye([]);we.subscribe((e=>window.routify.routes=e));let xe=ye({component:{params:{}}});const _e=ye(null),ve=ye(!0);function Pe(e,t=!1){e=re.urlTransform.remove(e);let{pathname:n,search:o}=pe(e).url;const r=c(we),i=r.find((e=>n===e.meta.name))||r.find((e=>n.match(e.regex)));if(!i)throw new Error(`Route could not be found for "${n}".`);const a=t?Object.create(i):i,{route:s,redirectPath:l,rewritePath:u}=ke(a,r);return u&&(({pathname:n,search:o}=pe(de(u,s.params)).url),l&&(s.redirectTo=de(l,s.params||{}))),re.queryHandler&&(s.params=Object.assign({},re.queryHandler.parse(o))),function(e,t){if(e.paramKeys){const n=function(e){const t=[];return e.forEach((e=>{t[e.path.split("/").filter(Boolean).length-1]=e})),t}(e.layouts),o=t.split("/").filter(Boolean);(function(e){return e.split("/").filter(Boolean).map((e=>e.match(/\:(.+)/))).map((e=>e&&e[1]))})(e.path).forEach(((t,r)=>{t&&(e.params[t]=o[r],n[r]?n[r].param={[t]:o[r]}:e.param={[t]:o[r]})}))}}(s,n),s.leftover=e.replace(new RegExp(s.regex),""),s}function ke(e,t,n,o){const{redirect:r,rewrite:i}=e.meta;if(r||i){n=r?r.path||r:n,o=i?i.path||i:n;const a=r&&r.params,s=i&&i.params,c=t.find((e=>e.path.replace(/\/index$/,"")===o));return c===e&&console.error(`${o} is redirecting to itself`),c||console.error(`${e.path} is redirecting to non-existent path: ${o}`),(a||s)&&(c.params=Object.assign({},c.params,a,s)),ke(c,t,n,o)}return{route:e,redirectPath:n,rewritePath:o}}function je(e,t,n){const o=e.slice();return o[1]=t[n],o}function Oe(e,t){let n,o;return{key:e,first:null,c(){n=y("iframe"),n.src!==(o=t[1].url)&&_(n,"src",o),_(n,"frameborder","0"),_(n,"title","routify prefetcher"),this.first=n},m(e,t){h(e,n,t)},p(e,r){t=e,1&r&&n.src!==(o=t[1].url)&&_(n,"src",o)},d(e){e&&m(n)}}}function Ee(t){let n,o=[],r=new Map,i=t[0];const a=e=>e[1].options.prefetch;for(let e=0;e<i.length;e+=1){let n=je(t,i,e),s=a(n);r.set(s,o[e]=Oe(s,n))}return{c(){n=y("div");for(let e=0;e<o.length;e+=1)o[e].c();_(n,"id","__routify_iframes"),P(n,"display","none")},m(e,t){h(e,n,t);for(let e=0;e<o.length;e+=1)o[e].m(n,null)},p(e,[t]){1&t&&(i=e[0],o=X(o,t,a,1,e,i,r,n,V,Oe,null,je))},i:e,o:e,d(e){e&&m(n);for(let e=0;e<o.length;e+=1)o[e].d()}}}const Ie=ye([]),Se=$e(Ie,(e=>e.slice(0,2)));function Le(e){const t=e.data?e.data.prefetchId:e;if(!t)return null;const n=c(Ie).find((e=>e&&e.options.prefetch==t));if(n){const{gracePeriod:e}=n.options,o=new Promise((t=>setTimeout(t,e))),r=new Promise((t=>{window.requestIdleCallback?window.requestIdleCallback(t):setTimeout(t,e+1e3)}));Promise.all([o,r]).then((()=>{Ie.update((e=>e.filter((e=>e.options.prefetch!=t))))}))}}function Te(e,t,n){let o;return l(e,Se,(e=>n(0,o=e))),[o]}Se.subscribe((e=>e.forEach((({options:e})=>{setTimeout((()=>Le(e.prefetch)),e.timeout)})))),addEventListener("message",Le,!1);class Ne extends oe{constructor(e){super(),ne(this,e,Te,Ee,a,{})}}function Fe(){return I("routify")||xe}const Me={_hooks:[e=>ve.set(!1)],subscribe:Ae},Re={_hooks:[],subscribe:Ae};function Ae(e){const t=this._hooks,n=t.length;return e((e=>{t[n]=e})),(...o)=>{delete t[n],e(...o)}}const Ce={subscribe:e=>$e(Fe(),(e=>{return t=e,n=e.route,o=e.routes,function(e,r={},i){const{component:a}=t,s=Object.assign({},n.params,a.params);let c=e&&e.nodeType&&e;c&&(e=e.getAttribute("href")),e=e?p(e):a.shortPath;const l=o.find((t=>[t.shortPath||"/",t.path].includes(e)));if(l&&"proximity"===l.meta.preload&&window.requestIdleCallback){const e=routify.appLoaded?0:1500;setTimeout((()=>{window.requestIdleCallback((()=>l.api.preload()))}),e)}i&&!1!==i.strict||(e=e.replace(/index$/,""));let u=de(e,r,s);return c?(c.href=u,{update(t){c.href=de(e,t,s)}}):u;function p(e){if(e.match(/^\.\.?\//)){let[,t,n]=e.match(/^([\.\/]+)(.*)/),o=a.path.replace(/\/$/,"");const r=t.match(/\.\.\//g)||[];a.isPage&&r.push(null),r.forEach((()=>o=o.replace(/\/[^\/]+\/?$/,""))),e=(e=`${o}/${n}`.replace(/\/$/,""))||"/"}else if(e.match(/^\//));else{const t=o.find((t=>t.meta.name===e));t&&(e=t.shortPath)}return e}};var t,n,o})).subscribe(e)};const Be={subscribe(e){return this._origin=this.getOrigin(),e(qe)},props:{},templates:{},services:{plain:{propField:"name",valueField:"content"},twitter:{propField:"name",valueField:"content"},og:{propField:"property",valueField:"content"}},plugins:[{name:"applyTemplate",condition:()=>!0,action:(e,t)=>[e,(Be.getLongest(Be.templates,e)||(e=>e))(t)]},{name:"createMeta",condition:()=>!0,action(e,t){Be.writeMeta(e,t)}},{name:"createOG",condition:e=>!e.match(":"),action(e,t){Be.writeMeta(`og:${e}`,t)}},{name:"createTitle",condition:e=>"title"===e,action(e,t){document.title=t}}],getLongest(e,t){const n=e[t];if(n){const o=c(be).path;return n[Object.keys(e[t]).filter((e=>o.includes(e))).sort(((e,t)=>t.length-e.length))[0]]}},writeMeta(e,t){const n=document.getElementsByTagName("head")[0],o=e.match(/(.+)\:/),r=o&&o[1]||"plain",{propField:i,valueField:a}=qe.services[r]||qe.services.plain,s=document.querySelector(`meta[${i}='${e}']`);s&&s.remove();const c=document.createElement("meta");c.setAttribute(i,e),c.setAttribute(a,t),c.setAttribute("data-origin","routify"),n.appendChild(c)},set(e,t){"string"==typeof e&&Be.plugins.forEach((n=>{n.condition(e,t)&&([e,t]=n.action(e,t)||[e,t])}))},clear(){const e=document.querySelector("meta");e&&e.remove()},template(e,t){const n=Be.getOrigin;Be.templates[e]=Be.templates[e]||{},Be.templates[e][n]=t},update(){Object.keys(Be.props).forEach((e=>{let t=Be.getLongest(Be.props,e);Be.plugins.forEach((n=>{n.condition(e,t)&&([e,t]=n.action(e,t)||[e,t])}))}))},batchedUpdate(){Be._pendingUpdate||(Be._pendingUpdate=!0,setTimeout((()=>{Be._pendingUpdate=!1,this.update()})))},_updateQueued:!1,_origin:!1,getOrigin(){if(this._origin)return this._origin;const e=Fe();return e&&c(e).path||"/"},_pendingUpdate:!1},qe=new Proxy(Be,{set(e,t,n,o){const{props:r}=e;return Reflect.has(e,t)?Reflect.set(e,t,n,o):(r[t]=r[t]||{},r[t][e.getOrigin()]=n),window.routify.appLoaded&&e.batchedUpdate(),!0}});function Ue(e,t,n){const o=e.slice();return o[21]=t[n].component,o[22]=t[n].componentFile,o[2]=t[n].decorator,o[1]=t[n].nodes,o}function He(e){let t,n,o=[],r=new Map,i=[e[4]];const a=e=>e[7];for(let t=0;t<1;t+=1){let n=Ue(e,i,t),s=a(n);r.set(s,o[t]=We(s,n))}return{c(){for(let e=0;e<1;e+=1)o[e].c();t=w()},m(e,r){for(let t=0;t<1;t+=1)o[t].m(e,r);h(e,t,r),n=!0},p(e,n){33554621&n&&(i=[e[4]],D(),o=X(o,n,a,1,e,i,r,t.parentNode,Z,We,t,Ue),W())},i(e){if(!n){for(let e=0;e<1;e+=1)J(o[e]);n=!0}},o(e){for(let e=0;e<1;e+=1)G(o[e]);n=!1},d(e){for(let t=0;t<1;t+=1)o[t].d(e);e&&m(t)}}}function Ke(e){let t,n;return t=new Ve({props:{decorator:e[2],nodes:e[1],scoped:{...e[0],...e[25]}}}),{c(){Y(t.$$.fragment)},m(e,o){ee(t,e,o),n=!0},p(e,n){const o={};4&n&&(o.decorator=e[2]),16&n&&(o.nodes=e[1]),33554433&n&&(o.scoped={...e[0],...e[25]}),t.$set(o)},i(e){n||(J(t.$$.fragment,e),n=!0)},o(e){G(t.$$.fragment,e),n=!1},d(e){te(t,e)}}}function ze(e){let t,n,o=e[21]&&e[1].length&&Ke(e);return{c(){o&&o.c(),t=w()},m(e,r){o&&o.m(e,r),h(e,t,r),n=!0},p(e,n){e[21]&&e[1].length?o?(o.p(e,n),16&n&&J(o,1)):(o=Ke(e),o.c(),J(o,1),o.m(t.parentNode,t)):o&&(D(),G(o,1,1,(()=>{o=null})),W())},i(e){n||(J(o),n=!0)},o(e){G(o),n=!1},d(e){o&&o.d(e),e&&m(t)}}}function De(e){let n,o,r;const i=[{scoped:e[0]},{scopedSync:e[5]},e[3].param||{}];var a=e[22];function s(e){let n={$$slots:{default:[ze,({scoped:e,decorator:t})=>({25:e,2:t}),({scoped:e,decorator:t})=>(e?33554432:0)|(t?4:0)]},$$scope:{ctx:e}};for(let e=0;e<i.length;e+=1)n=t(n,i[e]);return{props:n}}return a&&(n=new a(s(e))),{c(){n&&Y(n.$$.fragment),o=b()},m(e,t){n&&ee(n,e,t),h(e,o,t),r=!0},p(e,t){const r=41&t?function(e,t){const n={},o={},r={$$scope:1};let i=e.length;for(;i--;){const a=e[i],s=t[i];if(s){for(const e in a)e in s||(o[e]=1);for(const e in s)r[e]||(n[e]=s[e],r[e]=1);e[i]=s}else for(const e in a)r[e]=1}for(const e in o)e in n||(n[e]=void 0);return n}(i,[1&t&&{scoped:e[0]},32&t&&{scopedSync:e[5]},8&t&&(c=e[3].param||{},"object"==typeof c&&null!==c?c:{})]):{};var c;if(100663317&t&&(r.$$scope={dirty:t,ctx:e}),a!==(a=e[22])){if(n){D();const e=n;G(e.$$.fragment,1,0,(()=>{te(e,1)})),W()}a?(n=new a(s(e)),Y(n.$$.fragment),J(n.$$.fragment,1),ee(n,o.parentNode,o)):n=null}else a&&n.$set(r)},i(e){r||(n&&J(n.$$.fragment,e),r=!0)},o(e){n&&G(n.$$.fragment,e),r=!1},d(e){n&&te(n,e),e&&m(o)}}}function We(e,t){let n,o,r,i;var a=t[2];function s(e){return{props:{scoped:e[0],$$slots:{default:[De]},$$scope:{ctx:e}}}}return a&&(o=new a(s(t))),{key:e,first:null,c(){n=w(),o&&Y(o.$$.fragment),r=w(),this.first=n},m(e,t){h(e,n,t),o&&ee(o,e,t),h(e,r,t),i=!0},p(e,n){t=e;const i={};if(1&n&&(i.scoped=t[0]),67108925&n&&(i.$$scope={dirty:n,ctx:t}),a!==(a=t[2])){if(o){D();const e=o;G(e.$$.fragment,1,0,(()=>{te(e,1)})),W()}a?(o=new a(s(t)),Y(o.$$.fragment),J(o.$$.fragment,1),ee(o,r.parentNode,r)):o=null}else a&&o.$set(i)},i(e){i||(o&&J(o.$$.fragment,e),i=!0)},o(e){o&&G(o.$$.fragment,e),i=!1},d(e){e&&m(n),e&&m(r),o&&te(o,e)}}}function Je(t){let n,o,r;return{c(){n=y("div"),P(n,"display","contents")},m(a,s){var c;h(a,n,s),o||(c=t[10].call(null,n),r=c&&i(c.destroy)?c.destroy:e,o=!0)},d(e){e&&m(n),o=!1,r()}}}function Ge(e){let t,n,o,r=e[4]&&He(e),i=!e[6]&&Je(e);return{c(){r&&r.c(),t=b(),i&&i.c(),n=w()},m(e,a){r&&r.m(e,a),h(e,t,a),i&&i.m(e,a),h(e,n,a),o=!0},p(e,[o]){e[4]?r?(r.p(e,o),16&o&&J(r,1)):(r=He(e),r.c(),J(r,1),r.m(t.parentNode,t)):r&&(D(),G(r,1,1,(()=>{r=null})),W()),e[6]?i&&(i.d(1),i=null):i||(i=Je(e),i.c(),i.m(n.parentNode,n))},i(e){o||(J(r),o=!0)},o(e){G(r),o=!1},d(e){r&&r.d(e),e&&m(t),i&&i.d(e),e&&m(n)}}}function Qe(e,t,n){let o,r,i,a,s;l(e,be,(e=>n(15,a=e))),l(e,we,(e=>n(16,s=e)));let c,{nodes:u=[]}=t,{scoped:p={}}=t,{decorator:d}=t,f=null,h=null,m={},g=1;const y=ye(null);l(e,y,(e=>n(4,r=e)));const $=I("routify")||xe;l(e,$,(e=>n(14,i=e)));E("routify",y);let b=[];function w(e){n(5,m={...p});const t={...r,nodes:h,decorator:d||me,layout:f.isLayout?f:i.layout,component:f,route:a,routes:s,componentFile:e,parentNode:c||i.parentNode};y.set(t),function(e,t,n=t){e.set(n)}($,i.child=f,i),0===h.length&&async function(){await new Promise((e=>setTimeout(e)));const e=r.component.path===a.path;!window.routify.stopAutoReady&&e&&async function({page:e,metatags:t,afterPageLoad:n,parentNode:o}){const r=e.last!==e;setTimeout((()=>ae(o,r)));const{path:i}=e,{options:a}=ue(),s=a.prefetch;for(const t of n._hooks)t&&await t(e.api);t.update(),dispatchEvent(new CustomEvent("app-loaded")),parent.postMessage({msg:"app-loaded",prefetched:window.routify.prefetched,path:i,prefetchId:s},"*"),window.routify.appLoaded=!0,window.routify.stopAutoReady=!1}({page:r.component,metatags:qe,afterPageLoad:Me,parentNode:c})}()}return e.$$set=e=>{"nodes"in e&&n(1,u=e.nodes),"scoped"in e&&n(0,p=e.scoped),"decorator"in e&&n(2,d=e.decorator)},e.$$.update=()=>{6146&e.$$.dirty&&b!==u&&(n(12,b=u),n(3,[f,...h]=[...u],f),n(3,f.api.reset=()=>n(11,g++,g),f)),8&e.$$.dirty&&function(e){let t=e.component();t instanceof Promise?t.then(w):w(t)}(f),2064&e.$$.dirty&&n(7,o=r&&g&&function({meta:e,path:t,param:n,params:o}){return JSON.stringify({path:t,invalidate:g,param:(e["param-is-page"]||e["slug-is-page"])&&n,queryParams:e["query-params-is-page"]&&o})}(r.component)),16&e.$$.dirty&&r&&le(r,A)},[p,u,d,f,r,m,c,o,y,$,e=>n(6,c=e.parentNode),g,b]}class Ve extends oe{constructor(e){super(),ne(this,e,Qe,Ge,a,{nodes:1,scoped:0,decorator:2})}}function Ze(e,t){let n=!1;function o(o,r){const i=Pe(o||ue().fullpath);i.redirectTo&&(history.replaceStateNative({},null,i.redirectTo),delete i.redirectTo);const a=[...(r&&Pe(ue().fullpath,e)||i).layouts,i];n&&delete n.last,i.last=n,n=i,o||_e.set(i),be.set(i),i.api.preload().then((()=>{ve.set(!0),t(a)}))}const r=function(e){["pushState","replaceState"].forEach((e=>{history[e+"Native"]||(history[e+"Native"]=history[e]),history[e]=async function(t={},n,o){if(o===location.pathname+location.search+location.hash)return!1;const{id:r,path:i,params:a}=c(be);t={id:r,path:i,params:a,...t};const s=new Event(e.toLowerCase());Object.assign(s,{state:t,title:n,url:o});return await Ye(s,o)?(history[e+"Native"].apply(this,[t,n,o]),dispatchEvent(s)):void 0}}));let t=!1;const n={click:Xe,pushstate:()=>e(),replacestate:()=>e(),popstate:async n=>{t?t=!1:await Ye(n,ue().fullpath)?e():(t=!0,n.preventDefault(),history.go(1))}};Object.entries(n).forEach((e=>addEventListener(...e)));return()=>{Object.entries(n).forEach((e=>removeEventListener(...e)))}}(o);return{updatePage:o,destroy:r}}function Xe(e){const t=e.target.closest("a"),n=t&&t.href;if(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||e.button||e.defaultPrevented)return;if(!n||t.target||t.host!==location.host)return;const o=new URL(n),r=o.pathname+o.search+o.hash;e.preventDefault(),history.pushState({},"",r)}async function Ye(e,t){const n=Pe(t).api;for(const o of Re._hooks.filter(Boolean)){if(!await o(e,n,{url:t}))return!1}return!0}function et(e){let t,n;return t=new Ve({props:{nodes:e[0]}}),{c(){Y(t.$$.fragment)},m(e,o){ee(t,e,o),n=!0},p(e,n){const o={};1&n&&(o.nodes=e[0]),t.$set(o)},i(e){n||(J(t.$$.fragment,e),n=!0)},o(e){G(t.$$.fragment,e),n=!1},d(e){te(t,e)}}}function tt(e){let t,n,o,r=e[0]&&null!==e[1]&&et(e);return n=new Ne({}),{c(){r&&r.c(),t=b(),Y(n.$$.fragment)},m(e,i){r&&r.m(e,i),h(e,t,i),ee(n,e,i),o=!0},p(e,[n]){e[0]&&null!==e[1]?r?(r.p(e,n),3&n&&J(r,1)):(r=et(e),r.c(),J(r,1),r.m(t.parentNode,t)):r&&(D(),G(r,1,1,(()=>{r=null})),W())},i(e){o||(J(r),J(n.$$.fragment,e),o=!0)},o(e){G(r),G(n.$$.fragment,e),o=!1},d(e){r&&r.d(e),e&&m(t),te(n,e)}}}function nt(e,t,n){let o;l(e,be,(e=>n(1,o=e)));let r,i,{routes:a}=t,{config:s={}}=t;window.routify=window.routify||{},window.routify.inBrowser=!window.navigator.userAgent.match("jsdom"),Object.assign(re,s);E("routifyupdatepage",((...e)=>i&&i.updatePage(...e)));const c=e=>n(0,r=e),u=()=>{i&&(i.destroy(),i=null)};let p=null;var d;return d=u,O().$$.on_destroy.push(d),e.$$set=e=>{"routes"in e&&n(2,a=e.routes),"config"in e&&n(3,s=e.config)},e.$$.update=()=>{4&e.$$.dirty&&a&&(clearTimeout(p),p=setTimeout((()=>{u(),i=Ze(a,c),we.set(a),i.updatePage()})))},[r,o,a,s]}class ot extends oe{constructor(e){super(),ne(this,e,nt,tt,a,{routes:2,config:3})}}function rt(e){const t=async function(t){return await it(e,{file:t.tree,state:{treePayload:t},scope:{}})};return t.sync=function(t){return at(e,{file:t.tree,state:{treePayload:t},scope:{}})},t}async function it(e,t){const n=await e(t);if(!1===n)return!1;const o=n||t.file;if(o.children){const n=await Promise.all(o.children.map((async n=>it(e,{state:t.state,scope:st(t.scope||{}),parent:t.file,file:await n}))));o.children=n.filter(Boolean)}return o}function at(e,t){const n=e(t);if(!1===n)return!1;const o=n||t.file;if(o.children){const n=o.children.map((n=>at(e,{state:t.state,scope:st(t.scope||{}),parent:t.file,file:n})));o.children=n.filter(Boolean)}return o}function st(e){return JSON.parse(JSON.stringify(e))}const ct=rt((({file:e})=>{(e.isPage||e.isFallback)&&(e.regex=((e,t)=>{const n=t?"":"/?$";return`^${e=(e=(e=e.replace(/\/_fallback?$/,"(/|$)")).replace(/\/index$/,"(/index)?")).replace(ie,"([^/]+)")+n}`})(e.path,e.isFallback))})),lt=rt((({file:e})=>{e.paramKeys=ce(e.path)})),ut=rt((({file:e})=>{e.isFallback||e.isIndex?e.shortPath=e.path.replace(/\/[^/]+$/,""):e.shortPath=e.path})),pt=rt((({file:e})=>{e.ranking=(({path:e})=>e.split("/").filter(Boolean).map((e=>"_fallback"===e?"A":e.startsWith(":")?"B":"C")).join(""))(e)})),dt=rt((({file:e})=>{const t=e,n=e.meta&&e.meta.children||[];n.length&&(t.children=t.children||[],t.children.push(...n.map((e=>({isMeta:!0,...e,meta:e})))))})),ft=rt((e=>{const{file:t}=e,{isFallback:n,meta:o}=t,r=t.path.split("/").pop().startsWith(":"),i=t.path.endsWith("/index"),a=o.index||0===o.index,s=!1===o.index;t.isIndexable=a||!n&&!r&&!i&&!s,t.isNonIndexable=!t.isIndexable})),ht=rt((({file:e,parent:t})=>{Object.defineProperty(e,"parent",{get:()=>t}),Object.defineProperty(e,"nextSibling",{get:()=>gt(e,1)}),Object.defineProperty(e,"prevSibling",{get:()=>gt(e,-1)}),Object.defineProperty(e,"lineage",{get:()=>mt(t)})}));function mt(e,t=[]){return e&&(t.unshift(e),mt(e.parent,t)),t}function gt(e,t){if(!e.root){const n=e.parent.children.filter((e=>e.isIndexable)),o=n.indexOf(e);return n[o+t]}}const yt=rt((({file:e,parent:t})=>{e.isIndex&&Object.defineProperty(t,"index",{get:()=>e})})),$t=rt((({file:e,scope:t})=>{function n(e){if(!e.isLayout&&e.meta.reset)return[];const{parent:t}=e,o=t&&t.component&&t,r=o&&(o.isReset||o.meta.reset),i=t&&!r&&n(t)||[];return o&&i.push(o),i}Object.defineProperty(e,"layouts",{get:()=>n(e)})})),bt=rt((({file:e})=>{const t=e.root?function(){}:e.children?(e.isPage,function(){}):(e.isReset||e.isLayout||e.isFallback,function(){});Object.setPrototypeOf(e,t.prototype)}));var wt=Object.freeze({__proto__:null,setRegex:ct,setParamKeys:lt,setShortPath:ut,setRank:pt,addMetaChildren:dt,setIsIndexable:ft,assignRelations:ht,assignIndex:yt,assignLayout:$t,createFlatList:e=>{rt((e=>{(e.file.isPage||e.file.isFallback)&&e.state.treePayload.routes.push(e.file)})).sync(e),e.routes.sort(((e,t)=>e.ranking>=t.ranking?-1:1))},setPrototype:bt});const xt={isDir:!1,ext:"svelte",isLayout:!1,isReset:!1,isIndex:!1,isFallback:!1,isPage:!1,ownMeta:{},meta:{recursive:!0,preload:!1,prerender:!0},id:"__fallback"};function _t(e){return Object.entries(xt).forEach((([t,n])=>{void 0===e[t]&&(e[t]=n)})),e.children&&(e.children=e.children.map(_t)),e}const vt=rt((({file:e})=>{e.api=new Pt(e)}));class Pt{constructor(e){this.__file=e,Object.defineProperty(this,"__file",{enumerable:!1}),this.isMeta=!!e.isMeta,this.path=e.path,this.title=function(e){return void 0!==e.meta.title?e.meta.title:(e.shortPath||e.path).split("/").pop().replace(/-/g," ")}(e),this.meta=e.meta}get parent(){return!this.__file.root&&this.__file.parent.api}get children(){return(this.__file.children||this.__file.isLayout&&this.__file.parent.children||[]).filter((e=>!e.isNonIndexable)).sort(((e,t)=>e.isMeta&&t.isMeta?0:(e=(e.meta.index||e.meta.title||e.path).toString(),t=(t.meta.index||t.meta.title||t.path).toString(),e.localeCompare(t,void 0,{numeric:!0,sensitivity:"base"})))).map((({api:e})=>e))}get next(){return kt(this,1)}get prev(){return kt(this,-1)}async preload(){const e=[...this.__file.layouts,this.__file,this.index&&this.index.__file].filter(Boolean).map((e=>e.component()));await Promise.all(e)}get component(){return this.__file.component?this.__file.component():!!this.__file.index&&this.__file.index.component()}get componentWithIndex(){return new Promise((e=>Promise.all([this.component,this.index&&this.index.component]).then((t=>e(t)))))}get index(){const e=this.__file.children&&this.__file.children.find((e=>e.isIndex));return e&&e.api}}function kt(e,t){if(!e.__file.root){const n=e.parent.children.indexOf(e);return e.parent.children[n+t]}}const jt={...wt,restoreDefaults:({tree:e})=>_t(e),assignAPI:vt};const Ot={root:!0,ownMeta:{preload:"proximity"},children:[{isFallback:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/_fallback",component:()=>import("./fallback-f87825f6.js").then((e=>e.default))},{isPage:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/about-us",id:"_aboutUs",component:()=>import("./about-us-23476078.js").then((e=>e.default))},{isIndex:!0,isPage:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/index",id:"_index",component:()=>import("./index-b09777d1.js").then((e=>e.default))},{isPage:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/internet",id:"_internet",component:()=>import("./internet-d1d69db3.js").then((e=>e.default))},{isPage:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/ip-telephone",id:"_ipTelephone",component:()=>import("./ip-telephone-cfb584cd.js").then((e=>e.default))},{isPage:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/ip-tv",id:"_ipTv",component:()=>import("./ip-tv-46ea5f47.js").then((e=>e.default))},{isPage:!0,meta:{recursive:!0,preload:"proximity",prerender:!0},path:"/public-offer",id:"_publicOffer",component:()=>import("./public-offer-6f7f916f.js").then((e=>e.default))}],isLayout:!0,meta:{preload:"proximity",recursive:!0,prerender:!0},path:"/",id:"__layout",component:()=>import("./layout-07470ffd.js").then((e=>e.default))},{tree:Et,routes:It}=function(e){const t=["restoreDefaults","setParamKeys","setRegex","setShortPath","setRank","assignLayout","setPrototype","addMetaChildren","assignRelations","setIsIndexable","assignIndex","assignAPI","createFlatList"],n={tree:e,routes:[]};for(let e of t){(jt[e].sync||jt[e])(n)}return n}(Ot);function St(t){let n,o;return n=new ot({props:{routes:It}}),{c(){Y(n.$$.fragment)},m(e,t){ee(n,e,t),o=!0},p:e,i(e){o||(J(n.$$.fragment,e),o=!0)},o(e){G(n.$$.fragment,e),o=!1},d(e){te(n,e)}}}!function(e,t={target:document.body},n="hmr",o="app-loaded"){const r=document.getElementById(n),i=document.createElement("div");function a(){removeEventListener(o,a),r&&r.remove(),i.style.visibility=null,i.setAttribute("id",n)}i.style.visibility="hidden",t.target.appendChild(i),r?addEventListener(o,a):a(),new e({...t,target:i})}(class extends oe{constructor(e){var t;super(),document.getElementById("svelte-rux7j0-style")||((t=y("style")).id="svelte-rux7j0-style",t.textContent='html,body{position:relative;width:100%;height:100%}body{color:#333;margin:0;padding:8px;box-sizing:border-box;font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif}a{color:rgb(0,100,200);text-decoration:none}a:hover{text-decoration:underline}a:visited{color:rgb(0,80,160)}label{display:block}input,button,select,textarea{font-family:inherit;font-size:inherit;padding:0.4em;margin:0 0 0.5em 0;box-sizing:border-box;border:1px solid #ccc;border-radius:2px}input:disabled{color:#ccc}input[type="range"]{height:0}button{color:#333;background-color:#f4f4f4;outline:none}button:disabled{color:#999}button:not(:disabled):active{background-color:#ddd}button:focus{border-color:#666}#routify-app{display:flex;flex-direction:column;justify-content:flex-start;margin:0;position:relative}html{scroll-behavior:smooth}body{padding:0;scroll-behavior:smooth}@media(min-width:320px) and (max-width:1023px){.fade{visibility:hidden;opacity:0;display:block;width:100%;height:100vh;background-color:rgb(70, 63, 50);transition:all 1s ease}.change{transform:rotate(45deg) !important;transition:all 1s ease}.change-2{opacity:0;transition:all 1s ease}.change-3{transform:rotate(-45deg) !important;margin-top:-8px !important;transition:all 1s ease}}',f(document.head,t)),ne(this,e,null,St,a,{})}},{target:document.body},"routify-app");export{u as A,d as B,oe as S,f as a,b,_ as c,h as d,y as e,m as f,l as g,w as h,ne as i,v as j,g as k,Y as l,ee as m,e as n,J as o,G as p,te as q,W as r,a as s,$ as t,Ce as u,D as v,Q as w,x,r as y,L as z};
//# sourceMappingURL=main.js.map
