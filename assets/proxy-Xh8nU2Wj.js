import{r as d,k as X,l as ht,j as D,m as pt}from"./index-C8FCQPJD.js";function wt(t){if(typeof Proxy>"u")return t;const e=new Map,n=(...s)=>t(...s);return new Proxy(n,{get:(s,r)=>r==="create"?t:(e.has(r)||e.set(r,t(r)),e.get(r))})}function Y(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const xt=t=>Array.isArray(t);function O(t){return typeof t=="string"||Array.isArray(t)}function I(t){const e=[{},{}];return t?.values.forEach((n,s)=>{e[0][s]=n.get(),e[1][s]=n.getVelocity()}),e}function Ct(t,e,n,s){if(typeof e=="function"){const[r,o]=I(s);e=e(n!==void 0?n:t.custom,r,o)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[r,o]=I(s);e=e(n!==void 0?n:t.custom,r,o)}return e}const bt=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Mt=["initial",...bt],A=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],z=new Set(A),vt={skipAnimations:!1,useManualTiming:!1},Pt=t=>t;function St(t){let e=new Set,n=new Set,s=!1,r=!1;const o=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1};function l(c){o.has(c)&&(f.schedule(c),t()),c(a)}const f={schedule:(c,m=!1,g=!1)=>{const y=g&&s?e:n;return m&&o.add(c),y.has(c)||y.add(c),c},cancel:c=>{n.delete(c),o.delete(c)},process:c=>{if(a=c,s){r=!0;return}s=!0,[e,n]=[n,e],e.forEach(l),e.clear(),s=!1,r&&(r=!1,f.process(c))}};return f}const S=["read","resolveKeyframes","update","preRender","render","postRender"],Vt=40;function Z(t,e){let n=!1,s=!0;const r={delta:0,timestamp:0,isProcessing:!1},o=()=>n=!0,a=S.reduce((h,w)=>(h[w]=St(o),h),{}),{read:l,resolveKeyframes:f,update:c,preRender:m,render:g,postRender:u}=a,y=()=>{const h=vt.useManualTiming?r.timestamp:performance.now();n=!1,r.delta=s?1e3/60:Math.max(Math.min(h-r.timestamp,Vt),1),r.timestamp=h,r.isProcessing=!0,l.process(r),f.process(r),c.process(r),m.process(r),g.process(r),u.process(r),r.isProcessing=!1,n&&e&&(s=!1,t(y))},p=()=>{n=!0,s=!0,r.isProcessing||t(y)};return{schedule:S.reduce((h,w)=>{const C=a[w];return h[w]=(L,gt=!1,yt=!1)=>(n||p(),C.schedule(L,gt,yt)),h},{}),cancel:h=>{for(let w=0;w<S.length;w++)a[S[w]].cancel(h)},state:r,steps:a}}const{schedule:$,cancel:Ve,state:Te,steps:Ae}=Z(typeof requestAnimationFrame<"u"?requestAnimationFrame:Pt,!0),_=t=>e=>typeof e=="string"&&e.startsWith(t),Tt=_("--"),At=_("var(--"),Re=t=>At(t)?Rt.test(t.split("/*")[0].trim()):!1,Rt=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Lt=(t,e,n)=>n>e?e:n<t?t:n,j={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},F={...j,transform:t=>Lt(0,1,t)},V={...j,default:1},P=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),b=P("deg"),k=P("%"),i=P("px"),Le=P("vh"),ke=P("vw"),E={...k,parse:t=>k.parse(t)/100,transform:t=>k.transform(t*100)},kt={borderWidth:i,borderTopWidth:i,borderRightWidth:i,borderBottomWidth:i,borderLeftWidth:i,borderRadius:i,radius:i,borderTopLeftRadius:i,borderTopRightRadius:i,borderBottomRightRadius:i,borderBottomLeftRadius:i,width:i,maxWidth:i,height:i,maxHeight:i,top:i,right:i,bottom:i,left:i,padding:i,paddingTop:i,paddingRight:i,paddingBottom:i,paddingLeft:i,margin:i,marginTop:i,marginRight:i,marginBottom:i,marginLeft:i,backgroundPositionX:i,backgroundPositionY:i},Ot={rotate:b,rotateX:b,rotateY:b,rotateZ:b,scale:V,scaleX:V,scaleY:V,scaleZ:V,skew:b,skewX:b,skewY:b,distance:i,translateX:i,translateY:i,translateZ:i,x:i,y:i,z:i,perspective:i,transformPerspective:i,opacity:F,originX:E,originY:E,originZ:i},G={...j,transform:Math.round},K={...kt,...Ot,zIndex:G,size:i,fillOpacity:F,strokeOpacity:F,numOctaves:G},Ft=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),Oe=t=>xt(t)?t[t.length-1]||0:t,q=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),jt="framerAppearId",Wt="data-"+q(jt),M=t=>!!(t&&t.getVelocity);function U(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}const J=d.createContext(null),Bt=d.createContext({}),Dt=d.createContext({}),Q={};function Fe(t){Object.assign(Q,t)}const{schedule:It,cancel:je}=Z(queueMicrotask,!1);function $t(t){const e=M(t)?t.get():t;return Ft(e)?e.toValue():e}const tt=d.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),R=d.createContext({}),et=typeof window<"u",Et=et?d.useLayoutEffect:d.useEffect;function Gt(t,e,n,s,r){var o,a;const{visualElement:l}=d.useContext(R),f=d.useContext(X),c=d.useContext(J),m=d.useContext(tt).reducedMotion,g=d.useRef(null);s=s||f.renderer,!g.current&&s&&(g.current=s(t,{visualState:e,parent:l,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:m}));const u=g.current,y=d.useContext(Dt);u&&!u.projection&&r&&(u.type==="html"||u.type==="svg")&&Ht(g.current,n,r,y);const p=d.useRef(!1);d.useInsertionEffect(()=>{u&&p.current&&u.update(n,c)});const x=n[Wt],v=d.useRef(!!x&&!(!((o=window.MotionHandoffIsComplete)===null||o===void 0)&&o.call(window,x))&&((a=window.MotionHasOptimisedAnimation)===null||a===void 0?void 0:a.call(window,x)));return Et(()=>{u&&(p.current=!0,window.MotionIsMounted=!0,u.updateFeatures(),It.render(u.render),v.current&&u.animationState&&u.animationState.animateChanges())}),d.useEffect(()=>{u&&(!v.current&&u.animationState&&u.animationState.animateChanges(),v.current&&(queueMicrotask(()=>{var h;(h=window.MotionHandoffMarkAsComplete)===null||h===void 0||h.call(window,x)}),v.current=!1))}),u}function Ht(t,e,n,s){const{layoutId:r,layout:o,drag:a,dragConstraints:l,layoutScroll:f,layoutRoot:c}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:nt(t.parent)),t.projection.setOptions({layoutId:r,layout:o,alwaysMeasureLayout:!!a||l&&U(l),visualElement:t,animationType:typeof o=="string"?o:"both",initialPromotionConfig:s,layoutScroll:f,layoutRoot:c})}function nt(t){if(t)return t.options.allowProjection!==!1?t.projection:nt(t.parent)}function Nt(t,e,n){return d.useCallback(s=>{s&&t.mount&&t.mount(s),e&&(s?e.mount(s):e.unmount()),n&&(typeof n=="function"?n(s):U(n)&&(n.current=s))},[e])}function W(t){return Y(t.animate)||Mt.some(e=>O(t[e]))}function Xt(t){return!!(W(t)||t.variants)}function Yt(t,e){if(W(t)){const{initial:n,animate:s}=t;return{initial:n===!1||O(n)?n:void 0,animate:O(s)?s:void 0}}return t.inherit!==!1?e:{}}function zt(t){const{initial:e,animate:n}=Yt(t,d.useContext(R));return d.useMemo(()=>({initial:e,animate:n}),[H(e),H(n)])}function H(t){return Array.isArray(t)?t.join(" "):t}const Zt=Symbol.for("motionComponentSymbol");function _t({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:s,Component:r}){t&&ht(t);function o(l,f){let c;const m={...d.useContext(tt),...l,layoutId:Kt(l)},{isStatic:g}=m,u=zt(l),y=s(l,g);if(!g&&et){qt();const p=Ut(m);c=p.MeasureLayout,u.visualElement=Gt(r,y,m,e,p.ProjectionNode)}return D.jsxs(R.Provider,{value:u,children:[c&&u.visualElement?D.jsx(c,{visualElement:u.visualElement,...m}):null,n(r,l,Nt(y,u.visualElement,f),y,g,u.visualElement)]})}const a=d.forwardRef(o);return a[Zt]=r,a}function Kt({layoutId:t}){const e=d.useContext(Bt).id;return e&&t!==void 0?e+"-"+t:t}function qt(t,e){d.useContext(X).strict}function Ut(t){const{drag:e,layout:n}=pt;if(!e&&!n)return{};const s={...e,...n};return{MeasureLayout:e?.isEnabled(t)||n?.isEnabled(t)?s.MeasureLayout:void 0,ProjectionNode:s.ProjectionNode}}const Jt=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function st(t){return typeof t!="string"||t.includes("-")?!1:!!(Jt.indexOf(t)>-1||/[A-Z]/u.test(t))}function Qt(t,{style:e,vars:n},s,r){Object.assign(t.style,e,r&&r.getProjectionStyles(s));for(const o in n)t.style.setProperty(o,n[o])}const te=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function ee(t,e,n,s){Qt(t,e,void 0,s);for(const r in e.attrs)t.setAttribute(te.has(r)?r:q(r),e.attrs[r])}function rt(t,{layout:e,layoutId:n}){return z.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Q[t]||t==="opacity")}function ot(t,e,n){var s;const{style:r}=t,o={};for(const a in r)(M(r[a])||e.style&&M(e.style[a])||rt(a,t)||((s=n?.getValue(a))===null||s===void 0?void 0:s.liveStyle)!==void 0)&&(o[a]=r[a]);return o}function ne(t,e,n){const s=ot(t,e,n);for(const r in t)if(M(t[r])||M(e[r])){const o=A.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;s[o]=t[r]}return s}function se(t){const e=d.useRef(null);return e.current===null&&(e.current=t()),e.current}function re({scrapeMotionValuesFromProps:t,createRenderState:e,onMount:n},s,r,o){const a={latestValues:oe(s,r,o,t),renderState:e()};return n&&(a.mount=l=>n(s,l,a)),a}const at=t=>(e,n)=>{const s=d.useContext(R),r=d.useContext(J),o=()=>re(t,e,s,r);return n?o():se(o)};function oe(t,e,n,s){const r={},o=s(t,{});for(const u in o)r[u]=$t(o[u]);let{initial:a,animate:l}=t;const f=W(t),c=Xt(t);e&&c&&!f&&t.inherit!==!1&&(a===void 0&&(a=e.initial),l===void 0&&(l=e.animate));let m=n?n.initial===!1:!1;m=m||a===!1;const g=m?l:a;if(g&&typeof g!="boolean"&&!Y(g)){const u=Array.isArray(g)?g:[g];for(let y=0;y<u.length;y++){const p=Ct(t,u[y]);if(p){const{transitionEnd:x,transition:v,...h}=p;for(const w in h){let C=h[w];if(Array.isArray(C)){const L=m?C.length-1:0;C=C[L]}C!==null&&(r[w]=C)}for(const w in x)r[w]=x[w]}}}return r}const B=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),it=()=>({...B(),attrs:{}}),ct=(t,e)=>e&&typeof t=="number"?e.transform(t):t,ae={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},ie=A.length;function ce(t,e,n){let s="",r=!0;for(let o=0;o<ie;o++){const a=A[o],l=t[a];if(l===void 0)continue;let f=!0;if(typeof l=="number"?f=l===(a.startsWith("scale")?1:0):f=parseFloat(l)===0,!f||n){const c=ct(l,K[a]);if(!f){r=!1;const m=ae[a]||a;s+=`${m}(${c}) `}n&&(e[a]=c)}}return s=s.trim(),n?s=n(e,r?"":s):r&&(s="none"),s}function ut(t,e,n){const{style:s,vars:r,transformOrigin:o}=t;let a=!1,l=!1;for(const f in e){const c=e[f];if(z.has(f)){a=!0;continue}else if(Tt(f)){r[f]=c;continue}else{const m=ct(c,K[f]);f.startsWith("origin")?(l=!0,o[f]=m):s[f]=m}}if(e.transform||(a||n?s.transform=ce(e,t.transform,n):s.transform&&(s.transform="none")),l){const{originX:f="50%",originY:c="50%",originZ:m=0}=o;s.transformOrigin=`${f} ${c} ${m}`}}function N(t,e,n){return typeof t=="string"?t:i.transform(e+n*t)}function ue(t,e,n){const s=N(e,t.x,t.width),r=N(n,t.y,t.height);return`${s} ${r}`}const le={offset:"stroke-dashoffset",array:"stroke-dasharray"},fe={offset:"strokeDashoffset",array:"strokeDasharray"};function de(t,e,n=1,s=0,r=!0){t.pathLength=1;const o=r?le:fe;t[o.offset]=i.transform(-s);const a=i.transform(e),l=i.transform(n);t[o.array]=`${a} ${l}`}function lt(t,{attrX:e,attrY:n,attrScale:s,originX:r,originY:o,pathLength:a,pathSpacing:l=1,pathOffset:f=0,...c},m,g){if(ut(t,c,g),m){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:u,style:y,dimensions:p}=t;u.transform&&(p&&(y.transform=u.transform),delete u.transform),p&&(r!==void 0||o!==void 0||y.transform)&&(y.transformOrigin=ue(p,r!==void 0?r:.5,o!==void 0?o:.5)),e!==void 0&&(u.x=e),n!==void 0&&(u.y=n),s!==void 0&&(u.scale=s),a!==void 0&&de(u,a,l,f,!1)}const ft=t=>typeof t=="string"&&t.toLowerCase()==="svg",me={useVisualState:at({scrapeMotionValuesFromProps:ne,createRenderState:it,onMount:(t,e,{renderState:n,latestValues:s})=>{$.read(()=>{try{n.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),$.render(()=>{lt(n,s,ft(e.tagName),t.transformTemplate),ee(e,n)})}})},ge={useVisualState:at({scrapeMotionValuesFromProps:ot,createRenderState:B})};function dt(t,e,n){for(const s in e)!M(e[s])&&!rt(s,n)&&(t[s]=e[s])}function ye({transformTemplate:t},e){return d.useMemo(()=>{const n=B();return ut(n,e,t),Object.assign({},n.vars,n.style)},[e])}function he(t,e){const n=t.style||{},s={};return dt(s,n,t),Object.assign(s,ye(t,e)),s}function pe(t,e){const n={},s=he(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=s,n}const we=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function T(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||we.has(t)}let mt=t=>!T(t);function xe(t){t&&(mt=e=>e.startsWith("on")?!T(e):t(e))}try{xe(require("@emotion/is-prop-valid").default)}catch{}function Ce(t,e,n){const s={};for(const r in t)r==="values"&&typeof t.values=="object"||(mt(r)||n===!0&&T(r)||!e&&!T(r)||t.draggable&&r.startsWith("onDrag"))&&(s[r]=t[r]);return s}function be(t,e,n,s){const r=d.useMemo(()=>{const o=it();return lt(o,e,ft(s),t.transformTemplate),{...o.attrs,style:{...o.style}}},[e]);if(t.style){const o={};dt(o,t.style,t),r.style={...o,...r.style}}return r}function Me(t=!1){return(n,s,r,{latestValues:o},a)=>{const f=(st(n)?be:pe)(s,o,a,n),c=Ce(s,typeof n=="string",t),m=n!==d.Fragment?{...c,...f,ref:r}:{},{children:g}=s,u=d.useMemo(()=>M(g)?g.get():g,[g]);return d.createElement(n,{...m,children:u})}}function ve(t,e){return function(s,{forwardMotionProps:r}={forwardMotionProps:!1}){const a={...st(s)?me:ge,preloadedFeatures:t,useRender:Me(r),createVisualElement:e,Component:s};return _t(a)}}const Pe=ve(),We=wt(Pe);export{Q as $,vt as A,Wt as B,Ae as C,Ce as D,et as E,Ct as F,Re as G,j as H,A as I,k as J,b as K,Bt as L,tt as M,ke as N,Le as O,J as P,F as Q,K as R,Dt as S,Oe as T,O as U,Mt as V,Y as W,xt as X,bt as Y,U as Z,It as _,Et as a,W as a0,Xt as a1,Qt as a2,Tt as a3,ut as a4,ot as a5,te as a6,ne as a7,lt as a8,ee as a9,ft as aa,st as ab,ve as b,Ve as c,wt as d,Te as e,$ as f,q as g,kt as h,M as i,Zt as j,at as k,xe as l,We as m,Pt as n,jt as o,R as p,Lt as q,$t as r,S as s,z as t,se as u,T as v,_t as w,Fe as x,ce as y,i as z};
