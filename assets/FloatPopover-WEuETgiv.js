import{r as h,b as It,j as M}from"./index-C8FCQPJD.js";import{u as Yt}from"./viewport-Ce-6u8DJ.js";import"./owner-Cr2WHyze.js";import{m as qt}from"./spring-C80N1tKa.js";import{u as Xt}from"./use-event-callback-CmA4BDF-.js";import{c as pt}from"./StyledButton-KUTxOzSd.js";import{P as Ut,b as Kt}from"./index-D5bSxXOH.js";import{A as Gt}from"./index-D20PbLMm.js";import{m as Et}from"./proxy-Xh8nU2Wj.js";const it=Math.min,q=Math.max,rt=Math.round,nt=Math.floor,B=t=>({x:t,y:t}),Jt={left:"right",right:"left",bottom:"top",top:"bottom"},Qt={start:"end",end:"start"};function At(t,e,n){return q(t,it(e,n))}function ft(t,e){return typeof t=="function"?t(e):t}function X(t){return t.split("-")[0]}function at(t){return t.split("-")[1]}function Tt(t){return t==="x"?"y":"x"}function Mt(t){return t==="y"?"height":"width"}function G(t){return["top","bottom"].includes(X(t))?"y":"x"}function Dt(t){return Tt(G(t))}function Zt(t,e,n){n===void 0&&(n=!1);const o=at(t),i=Dt(t),r=Mt(i);let s=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=st(s)),[s,st(s)]}function te(t){const e=st(t);return[xt(t),e,xt(e)]}function xt(t){return t.replace(/start|end/g,e=>Qt[e])}function ee(t,e,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?r:s;default:return[]}}function ne(t,e,n,o){const i=at(t);let r=ee(X(t),n==="start",o);return i&&(r=r.map(s=>s+"-"+i),e&&(r=r.concat(r.map(xt)))),r}function st(t){return t.replace(/left|right|bottom|top/g,e=>Jt[e])}function oe(t){return{top:0,right:0,bottom:0,left:0,...t}}function ie(t){return typeof t!="number"?oe(t):{top:t,right:t,bottom:t,left:t}}function ct(t){const{x:e,y:n,width:o,height:i}=t;return{width:o,height:i,top:n,left:e,right:e+o,bottom:n+i,x:e,y:n}}function Ot(t,e,n){let{reference:o,floating:i}=t;const r=G(e),s=Dt(e),c=Mt(s),l=X(e),f=r==="y",u=o.x+o.width/2-i.width/2,a=o.y+o.height/2-i.height/2,m=o[c]/2-i[c]/2;let d;switch(l){case"top":d={x:u,y:o.y-i.height};break;case"bottom":d={x:u,y:o.y+o.height};break;case"right":d={x:o.x+o.width,y:a};break;case"left":d={x:o.x-i.width,y:a};break;default:d={x:o.x,y:o.y}}switch(at(e)){case"start":d[s]-=m*(n&&f?-1:1);break;case"end":d[s]+=m*(n&&f?-1:1);break}return d}const re=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:s}=n,c=r.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(e));let f=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:u,y:a}=Ot(f,o,l),m=o,d={},p=0;for(let x=0;x<c.length;x++){const{name:y,fn:g}=c[x],{x:v,y:R,data:C,reset:w}=await g({x:u,y:a,initialPlacement:o,placement:m,strategy:i,middlewareData:d,rects:f,platform:s,elements:{reference:t,floating:e}});u=v??u,a=R??a,d={...d,[y]:{...d[y],...C}},w&&p<=50&&(p++,typeof w=="object"&&(w.placement&&(m=w.placement),w.rects&&(f=w.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):w.rects),{x:u,y:a}=Ot(f,m,l)),x=-1)}return{x:u,y:a,placement:m,strategy:i,middlewareData:d}};async function Ft(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:r,rects:s,elements:c,strategy:l}=t,{boundary:f="clippingAncestors",rootBoundary:u="viewport",elementContext:a="floating",altBoundary:m=!1,padding:d=0}=ft(e,t),p=ie(d),y=c[m?a==="floating"?"reference":"floating":a],g=ct(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(y)))==null||n?y:y.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(c.floating)),boundary:f,rootBoundary:u,strategy:l})),v=a==="floating"?{x:o,y:i,width:s.floating.width,height:s.floating.height}:s.reference,R=await(r.getOffsetParent==null?void 0:r.getOffsetParent(c.floating)),C=await(r.isElement==null?void 0:r.isElement(R))?await(r.getScale==null?void 0:r.getScale(R))||{x:1,y:1}:{x:1,y:1},w=ct(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:v,offsetParent:R,strategy:l}):v);return{top:(g.top-w.top+p.top)/C.y,bottom:(w.bottom-g.bottom+p.bottom)/C.y,left:(g.left-w.left+p.left)/C.x,right:(w.right-g.right+p.right)/C.x}}const se=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:i,middlewareData:r,rects:s,initialPlacement:c,platform:l,elements:f}=e,{mainAxis:u=!0,crossAxis:a=!0,fallbackPlacements:m,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:x=!0,...y}=ft(t,e);if((n=r.arrow)!=null&&n.alignmentOffset)return{};const g=X(i),v=G(c),R=X(c)===c,C=await(l.isRTL==null?void 0:l.isRTL(f.floating)),w=m||(R||!x?[st(c)]:te(c)),E=p!=="none";!m&&E&&w.push(...ne(c,x,p,C));const F=[c,...w],N=await Ft(e,y),_=[];let P=((o=r.flip)==null?void 0:o.overflows)||[];if(u&&_.push(N[g]),a){const k=Zt(i,s,C);_.push(N[k[0]],N[k[1]])}if(P=[...P,{placement:i,overflows:_}],!_.every(k=>k<=0)){var z,Y;const k=(((z=r.flip)==null?void 0:z.index)||0)+1,H=F[k];if(H)return{data:{index:k,overflows:P},reset:{placement:H}};let A=(Y=P.filter(L=>L.overflows[0]<=0).sort((L,b)=>L.overflows[1]-b.overflows[1])[0])==null?void 0:Y.placement;if(!A)switch(d){case"bestFit":{var S;const L=(S=P.filter(b=>{if(E){const O=G(b.placement);return O===v||O==="y"}return!0}).map(b=>[b.placement,b.overflows.filter(O=>O>0).reduce((O,T)=>O+T,0)]).sort((b,O)=>b[1]-O[1])[0])==null?void 0:S[0];L&&(A=L);break}case"initialPlacement":A=c;break}if(i!==A)return{reset:{placement:A}}}return{}}}};async function ce(t,e){const{placement:n,platform:o,elements:i}=t,r=await(o.isRTL==null?void 0:o.isRTL(i.floating)),s=X(n),c=at(n),l=G(n)==="y",f=["left","top"].includes(s)?-1:1,u=r&&l?-1:1,a=ft(e,t);let{mainAxis:m,crossAxis:d,alignmentAxis:p}=typeof a=="number"?{mainAxis:a,crossAxis:0,alignmentAxis:null}:{mainAxis:a.mainAxis||0,crossAxis:a.crossAxis||0,alignmentAxis:a.alignmentAxis};return c&&typeof p=="number"&&(d=c==="end"?p*-1:p),l?{x:d*u,y:m*f}:{x:m*f,y:d*u}}const le=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:r,placement:s,middlewareData:c}=e,l=await ce(e,t);return s===((n=c.offset)==null?void 0:n.placement)&&(o=c.arrow)!=null&&o.alignmentOffset?{}:{x:i+l.x,y:r+l.y,data:{...l,placement:s}}}}},fe=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:c={fn:y=>{let{x:g,y:v}=y;return{x:g,y:v}}},...l}=ft(t,e),f={x:n,y:o},u=await Ft(e,l),a=G(X(i)),m=Tt(a);let d=f[m],p=f[a];if(r){const y=m==="y"?"top":"left",g=m==="y"?"bottom":"right",v=d+u[y],R=d-u[g];d=At(v,d,R)}if(s){const y=a==="y"?"top":"left",g=a==="y"?"bottom":"right",v=p+u[y],R=p-u[g];p=At(v,p,R)}const x=c.fn({...e,[m]:d,[a]:p});return{...x,data:{x:x.x-n,y:x.y-o,enabled:{[m]:r,[a]:s}}}}}};function ut(){return typeof window<"u"}function Q(t){return Nt(t)?(t.nodeName||"").toLowerCase():"#document"}function D(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function $(t){var e;return(e=(Nt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Nt(t){return ut()?t instanceof Node||t instanceof D(t).Node:!1}function V(t){return ut()?t instanceof Element||t instanceof D(t).Element:!1}function j(t){return ut()?t instanceof HTMLElement||t instanceof D(t).HTMLElement:!1}function Pt(t){return!ut()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof D(t).ShadowRoot}function tt(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=W(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function ae(t){return["table","td","th"].includes(Q(t))}function dt(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function yt(t){const e=vt(),n=V(t)?W(t):t;return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function ue(t){let e=I(t);for(;j(e)&&!J(e);){if(yt(e))return e;if(dt(e))return null;e=I(e)}return null}function vt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function J(t){return["html","body","#document"].includes(Q(t))}function W(t){return D(t).getComputedStyle(t)}function mt(t){return V(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function I(t){if(Q(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Pt(t)&&t.host||$(t);return Pt(e)?e.host:e}function Vt(t){const e=I(t);return J(e)?t.ownerDocument?t.ownerDocument.body:t.body:j(e)&&tt(e)?e:Vt(e)}function Z(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=Vt(t),r=i===((o=t.ownerDocument)==null?void 0:o.body),s=D(i);if(r){const c=wt(s);return e.concat(s,s.visualViewport||[],tt(i)?i:[],c&&n?Z(c):[])}return e.concat(i,Z(i,[],n))}function wt(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Wt(t){const e=W(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=j(t),r=i?t.offsetWidth:n,s=i?t.offsetHeight:o,c=rt(n)!==r||rt(o)!==s;return c&&(n=r,o=s),{width:n,height:o,$:c}}function bt(t){return V(t)?t:t.contextElement}function K(t){const e=bt(t);if(!j(e))return B(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:r}=Wt(e);let s=(r?rt(n.width):n.width)/o,c=(r?rt(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!c||!Number.isFinite(c))&&(c=1),{x:s,y:c}}const de=B(0);function Bt(t){const e=D(t);return!vt()||!e.visualViewport?de:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function me(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==D(t)?!1:e}function U(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),r=bt(t);let s=B(1);e&&(o?V(o)&&(s=K(o)):s=K(t));const c=me(r,n,o)?Bt(r):B(0);let l=(i.left+c.x)/s.x,f=(i.top+c.y)/s.y,u=i.width/s.x,a=i.height/s.y;if(r){const m=D(r),d=o&&V(o)?D(o):o;let p=m,x=wt(p);for(;x&&o&&d!==p;){const y=K(x),g=x.getBoundingClientRect(),v=W(x),R=g.left+(x.clientLeft+parseFloat(v.paddingLeft))*y.x,C=g.top+(x.clientTop+parseFloat(v.paddingTop))*y.y;l*=y.x,f*=y.y,u*=y.x,a*=y.y,l+=R,f+=C,p=D(x),x=wt(p)}}return ct({width:u,height:a,x:l,y:f})}function Rt(t,e){const n=mt(t).scrollLeft;return e?e.left+n:U($(t)).left+n}function jt(t,e,n){n===void 0&&(n=!1);const o=t.getBoundingClientRect(),i=o.left+e.scrollLeft-(n?0:Rt(t,o)),r=o.top+e.scrollTop;return{x:i,y:r}}function pe(t){let{elements:e,rect:n,offsetParent:o,strategy:i}=t;const r=i==="fixed",s=$(o),c=e?dt(e.floating):!1;if(o===s||c&&r)return n;let l={scrollLeft:0,scrollTop:0},f=B(1);const u=B(0),a=j(o);if((a||!a&&!r)&&((Q(o)!=="body"||tt(s))&&(l=mt(o)),j(o))){const d=U(o);f=K(o),u.x=d.x+o.clientLeft,u.y=d.y+o.clientTop}const m=s&&!a&&!r?jt(s,l,!0):B(0);return{width:n.width*f.x,height:n.height*f.y,x:n.x*f.x-l.scrollLeft*f.x+u.x+m.x,y:n.y*f.y-l.scrollTop*f.y+u.y+m.y}}function ge(t){return Array.from(t.getClientRects())}function he(t){const e=$(t),n=mt(t),o=t.ownerDocument.body,i=q(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=q(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+Rt(t);const c=-n.scrollTop;return W(o).direction==="rtl"&&(s+=q(e.clientWidth,o.clientWidth)-i),{width:i,height:r,x:s,y:c}}function xe(t,e){const n=D(t),o=$(t),i=n.visualViewport;let r=o.clientWidth,s=o.clientHeight,c=0,l=0;if(i){r=i.width,s=i.height;const f=vt();(!f||f&&e==="fixed")&&(c=i.offsetLeft,l=i.offsetTop)}return{width:r,height:s,x:c,y:l}}function we(t,e){const n=U(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=j(t)?K(t):B(1),s=t.clientWidth*r.x,c=t.clientHeight*r.y,l=i*r.x,f=o*r.y;return{width:s,height:c,x:l,y:f}}function Lt(t,e,n){let o;if(e==="viewport")o=xe(t,n);else if(e==="document")o=he($(t));else if(V(e))o=we(e,n);else{const i=Bt(t);o={x:e.x-i.x,y:e.y-i.y,width:e.width,height:e.height}}return ct(o)}function $t(t,e){const n=I(t);return n===e||!V(n)||J(n)?!1:W(n).position==="fixed"||$t(n,e)}function ye(t,e){const n=e.get(t);if(n)return n;let o=Z(t,[],!1).filter(c=>V(c)&&Q(c)!=="body"),i=null;const r=W(t).position==="fixed";let s=r?I(t):t;for(;V(s)&&!J(s);){const c=W(s),l=yt(s);!l&&c.position==="fixed"&&(i=null),(r?!l&&!i:!l&&c.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||tt(s)&&!l&&$t(t,s))?o=o.filter(u=>u!==s):i=c,s=I(s)}return e.set(t,o),o}function ve(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const s=[...n==="clippingAncestors"?dt(e)?[]:ye(e,this._c):[].concat(n),o],c=s[0],l=s.reduce((f,u)=>{const a=Lt(e,u,i);return f.top=q(a.top,f.top),f.right=it(a.right,f.right),f.bottom=it(a.bottom,f.bottom),f.left=q(a.left,f.left),f},Lt(e,c,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function be(t){const{width:e,height:n}=Wt(t);return{width:e,height:n}}function Re(t,e,n){const o=j(e),i=$(e),r=n==="fixed",s=U(t,!0,r,e);let c={scrollLeft:0,scrollTop:0};const l=B(0);if(o||!o&&!r)if((Q(e)!=="body"||tt(i))&&(c=mt(e)),o){const m=U(e,!0,r,e);l.x=m.x+e.clientLeft,l.y=m.y+e.clientTop}else i&&(l.x=Rt(i));const f=i&&!o&&!r?jt(i,c):B(0),u=s.left+c.scrollLeft-l.x-f.x,a=s.top+c.scrollTop-l.y-f.y;return{x:u,y:a,width:s.width,height:s.height}}function gt(t){return W(t).position==="static"}function St(t,e){if(!j(t)||W(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return $(t)===n&&(n=n.ownerDocument.body),n}function _t(t,e){const n=D(t);if(dt(t))return n;if(!j(t)){let i=I(t);for(;i&&!J(i);){if(V(i)&&!gt(i))return i;i=I(i)}return n}let o=St(t,e);for(;o&&ae(o)&&gt(o);)o=St(o,e);return o&&J(o)&&gt(o)&&!yt(o)?n:o||ue(t)||n}const Ce=async function(t){const e=this.getOffsetParent||_t,n=this.getDimensions,o=await n(t.floating);return{reference:Re(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function Ee(t){return W(t).direction==="rtl"}const Ae={convertOffsetParentRelativeRectToViewportRelativeRect:pe,getDocumentElement:$,getClippingRect:ve,getOffsetParent:_t,getElementRects:Ce,getClientRects:ge,getDimensions:be,getScale:K,isElement:V,isRTL:Ee};function Oe(t,e){let n=null,o;const i=$(t);function r(){var c;clearTimeout(o),(c=n)==null||c.disconnect(),n=null}function s(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),r();const{left:f,top:u,width:a,height:m}=t.getBoundingClientRect();if(c||e(),!a||!m)return;const d=nt(u),p=nt(i.clientWidth-(f+a)),x=nt(i.clientHeight-(u+m)),y=nt(f),v={rootMargin:-d+"px "+-p+"px "+-x+"px "+-y+"px",threshold:q(0,it(1,l))||1};let R=!0;function C(w){const E=w[0].intersectionRatio;if(E!==l){if(!R)return s();E?s(!1,E):o=setTimeout(()=>{s(!1,1e-7)},1e3)}R=!1}try{n=new IntersectionObserver(C,{...v,root:i.ownerDocument})}catch{n=new IntersectionObserver(C,v)}n.observe(t)}return s(!0),r}function Pe(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=o,f=bt(t),u=i||r?[...f?Z(f):[],...Z(e)]:[];u.forEach(g=>{i&&g.addEventListener("scroll",n,{passive:!0}),r&&g.addEventListener("resize",n)});const a=f&&c?Oe(f,n):null;let m=-1,d=null;s&&(d=new ResizeObserver(g=>{let[v]=g;v&&v.target===f&&d&&(d.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var R;(R=d)==null||R.observe(e)})),n()}),f&&!l&&d.observe(f),d.observe(e));let p,x=l?U(t):null;l&&y();function y(){const g=U(t);x&&(g.x!==x.x||g.y!==x.y||g.width!==x.width||g.height!==x.height)&&n(),x=g,p=requestAnimationFrame(y)}return n(),()=>{var g;u.forEach(v=>{i&&v.removeEventListener("scroll",n),r&&v.removeEventListener("resize",n)}),a?.(),(g=d)==null||g.disconnect(),d=null,l&&cancelAnimationFrame(p)}}const Le=le,Se=fe,ke=se,Te=(t,e,n)=>{const o=new Map,i={platform:Ae,...n},r={...i.platform,_c:o};return re(t,e,{...i,platform:r})};var ot=typeof document<"u"?h.useLayoutEffect:h.useEffect;function lt(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(typeof t=="function"&&t.toString()===e.toString())return!0;let n,o,i;if(t&&e&&typeof t=="object"){if(Array.isArray(t)){if(n=t.length,n!==e.length)return!1;for(o=n;o--!==0;)if(!lt(t[o],e[o]))return!1;return!0}if(i=Object.keys(t),n=i.length,n!==Object.keys(e).length)return!1;for(o=n;o--!==0;)if(!{}.hasOwnProperty.call(e,i[o]))return!1;for(o=n;o--!==0;){const r=i[o];if(!(r==="_owner"&&t.$$typeof)&&!lt(t[r],e[r]))return!1}return!0}return t!==t&&e!==e}function zt(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function kt(t,e){const n=zt(t);return Math.round(e*n)/n}function ht(t){const e=h.useRef(t);return ot(()=>{e.current=t}),e}function Me(t){t===void 0&&(t={});const{placement:e="bottom",strategy:n="absolute",middleware:o=[],platform:i,elements:{reference:r,floating:s}={},transform:c=!0,whileElementsMounted:l,open:f}=t,[u,a]=h.useState({x:0,y:0,strategy:n,placement:e,middlewareData:{},isPositioned:!1}),[m,d]=h.useState(o);lt(m,o)||d(o);const[p,x]=h.useState(null),[y,g]=h.useState(null),v=h.useCallback(b=>{b!==E.current&&(E.current=b,x(b))},[]),R=h.useCallback(b=>{b!==F.current&&(F.current=b,g(b))},[]),C=r||p,w=s||y,E=h.useRef(null),F=h.useRef(null),N=h.useRef(u),_=l!=null,P=ht(l),z=ht(i),Y=ht(f),S=h.useCallback(()=>{if(!E.current||!F.current)return;const b={placement:e,strategy:n,middleware:m};z.current&&(b.platform=z.current),Te(E.current,F.current,b).then(O=>{const T={...O,isPositioned:Y.current!==!1};k.current&&!lt(N.current,T)&&(N.current=T,It.flushSync(()=>{a(T)}))})},[m,e,n,z,Y]);ot(()=>{f===!1&&N.current.isPositioned&&(N.current.isPositioned=!1,a(b=>({...b,isPositioned:!1})))},[f]);const k=h.useRef(!1);ot(()=>(k.current=!0,()=>{k.current=!1}),[]),ot(()=>{if(C&&(E.current=C),w&&(F.current=w),C&&w){if(P.current)return P.current(C,w,S);S()}},[C,w,S,P,_]);const H=h.useMemo(()=>({reference:E,floating:F,setReference:v,setFloating:R}),[v,R]),A=h.useMemo(()=>({reference:C,floating:w}),[C,w]),L=h.useMemo(()=>{const b={position:n,left:0,top:0};if(!A.floating)return b;const O=kt(A.floating,u.x),T=kt(A.floating,u.y);return c?{...b,transform:"translate("+O+"px, "+T+"px)",...zt(A.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:O,top:T}},[n,c,A.floating,u.x,u.y]);return h.useMemo(()=>({...u,update:S,refs:H,elements:A,floatingStyles:L}),[u,S,H,A,L])}const De=(t,e)=>({...Le(t),options:[t,e]}),Fe=(t,e)=>({...Se(t),options:[t,e]}),Ne=(t,e)=>({...ke(t),options:[t,e]});function Ve(t,...e){t&&t.addEventListener&&t.addEventListener(...e)}function We(t,...e){t&&t.removeEventListener&&t.removeEventListener(...e)}const Be=["mousedown","touchstart"],je=(t,e,n=Be)=>{const o=h.useRef(e);h.useEffect(()=>{o.current=e},[e]),h.useEffect(()=>{const i=r=>{const{current:s}=t;s&&!s.contains(r.target)&&o.current(r)};for(const r of n)Ve(document,r,i);return()=>{for(const r of n)We(document,r,i)}},[n,t])},Je=function(t){if(Yt()&&t.mobileAsSheet){const{triggerElement:n,TriggerComponent:o,triggerComponentProps:i}=t,r=n||(o?h.createElement(o,i):null);return M.jsx(Ut,{content:t.children,...t.sheet,children:r})}return M.jsx(_e,{...t})},$e=h.createContext(null),_e=function(e){const{headless:n=!1,wrapperClassName:o,TriggerComponent:i,triggerElement:r,trigger:s="hover",padding:c,offset:l,popoverWrapperClassNames:f,popoverClassNames:u,debug:a,animate:m=!0,as:d="div",type:p="popover",triggerComponentProps:x,isDisabled:y,onOpen:g,onClose:v,to:R,asChild:C,...w}=e,[E,F]=h.useState(!1),{x:N,y:_,refs:P,strategy:z,isPositioned:Y,elements:S,update:k}=Me({middleware:w.middleware??[Ne({padding:c??20}),De(l??10),Fe()],strategy:w.strategy,placement:w.placement??"bottom-start",whileElementsMounted:w.whileElementsMounted});h.useEffect(()=>{if(E&&S.reference&&S.floating)return Pe(S.reference,S.floating,k)},[E,S,k]);const H=h.useRef(null);je(H,()=>{(s=="click"||s=="both")&&A()});const A=h.useCallback(()=>{a||F(!1)},[a]),L=Xt(()=>{y||F(!0)}),b=h.useCallback(()=>{A()},[A]),O=h.useMemo(()=>{const et={};switch(s){case"click":return{...et,onClick:L};case"hover":return{...et,onMouseOver:L,onMouseOut:A};case"both":return{...et,onClick:L,onMouseOver:L,onMouseOut:b}}},[A,L,b,s]),T=r||(i?h.cloneElement(h.createElement(i,x),{tabIndex:0}):M.jsx(M.Fragment,{})),Ct=C?h.cloneElement(typeof T=="string"?M.jsx("span",{children:T}):T,{...O,ref:P.setReference}):M.jsx(d,{role:s==="both"||s==="click"?"button":"note",className:pt("inline-block",o),ref:P.setReference,...O,children:T});h.useEffect(()=>{P.floating.current&&E&&p==="popover"&&P.floating.current.focus()},[E]),h.useEffect(()=>{E?g?.():v?.()},[E]);const Ht=h.useMemo(()=>({close:A}),[A]);return e.children?M.jsxs(M.Fragment,{children:[Ct,M.jsx(Gt,{children:E&&M.jsx(Kt,{to:R,children:M.jsx(Et.div,{className:pt("float-popover","relative z-[99]",f),...s==="hover"||s==="both"?O:{},ref:H,children:M.jsx(Et.div,{tabIndex:-1,role:p==="tooltip"?"tooltip":"dialog",className:pt(!n&&["rounded-xl border border-zinc-400/20 p-4 outline-none backdrop-blur-lg dark:border-zinc-500/30","bg-zinc-50/80 dark:bg-neutral-900/80"],"relative z-[2]",p==="tooltip"?"max-w-[25rem] break-all rounded-xl px-4 py-2 shadow-out-sm":"shadow-lg",u),ref:P.setFloating,initial:{translateY:"10px",opacity:0},animate:{translateY:"0px",opacity:1},exit:{translateY:"10px",opacity:0},transition:qt,style:{position:z,top:_??"",left:N??"",visibility:Y&&N!==null?"visible":"hidden"},children:M.jsx($e.Provider,{value:Ht,children:e.children})})})})})]}):Ct};export{Je as F};
