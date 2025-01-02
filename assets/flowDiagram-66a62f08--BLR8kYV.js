import{p as Lt,f as V}from"./flowDb-956e92f1-87PaazpE.js";import{G as _t}from"./graph-DPVF48RO.js";import{s as x,u as U}from"./isEmpty-C1jPZ8p9.js";import{K as H,H as tt,c as G,E as et,i as rt,l as R,L as z,J as Et}from"./index.demo-DKfw2r3n.js";import{l as Tt}from"./layout-eqQnYm25.js";import{b as N,c as at,i as nt,d as E,e as st,g as it,f as Nt,a as At,s as Ct}from"./styles-c10674c1-DrUNmJrB.js";import{h as S}from"./has-BgM3CcEf.js";import{u as It,r as Bt,p as Mt}from"./zipObject--EnKqV8U.js";import{l as Dt}from"./line-DunZT52S.js";import{d as M}from"./_basePickBy-CyWLllq_.js";import{a as ot}from"./_baseUniq-Cr4PoKqM.js";import"./owner-Cr2WHyze.js";import"./union-BRRwlvLQ.js";import"./index-C8FCQPJD.js";import"./use-is-dark-DcwDMAVh.js";import"./LinkCard-B30A7vKk.js";import"./StyledButton-KUTxOzSd.js";import"./proxy-Xh8nU2Wj.js";import"./image-5K13eDNy.js";import"./viewport-Ce-6u8DJ.js";import"./provider-CcvCwte_.js";import"./spring-C80N1tKa.js";import"./index-D5bSxXOH.js";import"./use-is-unmounted-n9QIjtbw.js";import"./use-event-callback-CmA4BDF-.js";import"./dom-BowoBODo.js";import"./use-drag-controls-BlgdNBe4.js";import"./visual-element-DHBQs-nJ.js";import"./index-D20PbLMm.js";import"./use-motion-template-CyT3U3eM.js";import"./Gallery-9KQyf---.js";import"./use-ref-value-CMns4bFP.js";import"./index-DbCzzoMg.js";import"./useQuery-DqhXa6hW.js";import"./util-CdLrwBAc.js";import"./Shiki-CKEK6EmM.js";import"./alert-C-8Oz18r.js";import"./index-DCBZ-Am_.js";import"./FloatPopover-WEuETgiv.js";import"./SocialSourceLink-CoD7AvAf.js";import"./Collapse-DGfrKIAc.js";import"./CodeEditor-Cx1no_9X.js";import"./index-LAI3pait.js";import"./cookie-BrzsCdrX.js";import"./Mermaid-DMEkeCQE.js";import"./index-3862675e-DvTwAQYW.js";import"./clone-BRQVr5N1.js";import"./edges-e0da2a9e-BBeYNmDx.js";import"./createText-2e5e7dd3-CH4ZQrPZ.js";import"./channel-DtuR5Uiy.js";import"./array-BKyUJesY.js";import"./path-CbwjOpE9.js";var Y={normal:Gt,vee:Pt,undirected:Ut};function Rt(r){Y=r}function Gt(r,e,t,n){var a=r.append("marker").attr("id",e).attr("viewBox","0 0 10 10").attr("refX",9).attr("refY",5).attr("markerUnits","strokeWidth").attr("markerWidth",8).attr("markerHeight",6).attr("orient","auto"),s=a.append("path").attr("d","M 0 0 L 10 5 L 0 10 z").style("stroke-width",1).style("stroke-dasharray","1,0");N(s,t[n+"Style"]),t[n+"Class"]&&s.attr("class",t[n+"Class"])}function Pt(r,e,t,n){var a=r.append("marker").attr("id",e).attr("viewBox","0 0 10 10").attr("refX",9).attr("refY",5).attr("markerUnits","strokeWidth").attr("markerWidth",8).attr("markerHeight",6).attr("orient","auto"),s=a.append("path").attr("d","M 0 0 L 10 5 L 0 10 L 4 5 z").style("stroke-width",1).style("stroke-dasharray","1,0");N(s,t[n+"Style"]),t[n+"Class"]&&s.attr("class",t[n+"Class"])}function Ut(r,e,t,n){var a=r.append("marker").attr("id",e).attr("viewBox","0 0 10 10").attr("refX",9).attr("refY",5).attr("markerUnits","strokeWidth").attr("markerWidth",8).attr("markerHeight",6).attr("orient","auto"),s=a.append("path").attr("d","M 0 5 L 10 5").style("stroke-width",1).style("stroke-dasharray","1,0");N(s,t[n+"Style"]),t[n+"Class"]&&s.attr("class",t[n+"Class"])}function $t(r,e){var t=r;return t.node().appendChild(e.label),N(t,e.labelStyle),t}function Wt(r,e){for(var t=r.append("text"),n=Vt(e.label).split(`
`),a=0;a<n.length;a++)t.append("tspan").attr("xml:space","preserve").attr("dy","1em").attr("x","1").text(n[a]);return N(t,e.labelStyle),t}function Vt(r){for(var e="",t=!1,n,a=0;a<r.length;++a)if(n=r[a],t){switch(n){case"n":e+=`
`;break;default:e+=n}t=!1}else n==="\\"?t=!0:e+=n;return e}function J(r,e,t){var n=e.label,a=r.append("g");e.labelType==="svg"?$t(a,e):typeof n!="string"||e.labelType==="html"?at(a,e):Wt(a,e);var s=a.node().getBBox(),i;switch(t){case"top":i=-e.height/2;break;case"bottom":i=e.height/2-s.height;break;default:i=-s.height/2}return a.attr("transform","translate("+-s.width/2+","+i+")"),a}var X=function(r,e){var t=e.nodes().filter(function(s){return nt(e,s)}),n=r.selectAll("g.cluster").data(t,function(s){return s});E(n.exit(),e).style("opacity",0).remove();var a=n.enter().append("g").attr("class","cluster").attr("id",function(s){var i=e.node(s);return i.id}).style("opacity",0).each(function(s){var i=e.node(s),o=x(this);x(this).append("rect");var c=o.append("g").attr("class","label");J(c,i,i.clusterLabelPos)});return n=n.merge(a),n=E(n,e).style("opacity",1),n.selectAll("rect").each(function(s){var i=e.node(s),o=x(this);N(o,i.style)}),n};function zt(r){X=r}let F=function(r,e){var t=r.selectAll("g.edgeLabel").data(e.edges(),function(a){return st(a)}).classed("update",!0);t.exit().remove(),t.enter().append("g").classed("edgeLabel",!0).style("opacity",0),t=r.selectAll("g.edgeLabel"),t.each(function(a){var s=x(this);s.select(".label").remove();var i=e.edge(a),o=J(s,e.edge(a),0).classed("label",!0),c=o.node().getBBox();i.labelId&&o.attr("id",i.labelId),S(i,"width")||(i.width=c.width),S(i,"height")||(i.height=c.height)});var n;return t.exit?n=t.exit():n=t.selectAll(null),E(n,e).style("opacity",0).remove(),t};function Ht(r){F=r}function O(r,e){return r.intersect(e)}var q=function(r,e,t){var n=r.selectAll("g.edgePath").data(e.edges(),function(i){return st(i)}).classed("update",!0),a=Kt(n,e);Qt(n,e);var s=n.merge!==void 0?n.merge(a):n;return E(s,e).style("opacity",1),s.each(function(i){var o=x(this),c=e.edge(i);c.elem=this,c.id&&o.attr("id",c.id),it(o,c.class,(o.classed("update")?"update ":"")+"edgePath")}),s.selectAll("path.path").each(function(i){var o=e.edge(i);o.arrowheadId=It("arrowhead");var c=x(this).attr("marker-end",function(){return"url("+Xt(location.href,o.arrowheadId)+")"}).style("fill","none");E(c,e).attr("d",function(d){return Ft(e,d)}),N(c,o.style)}),s.selectAll("defs *").remove(),s.selectAll("defs").each(function(i){var o=e.edge(i),c=t[o.arrowhead];c(x(this),o.arrowheadId,o,"arrowhead")}),s};function Yt(r){q=r}function Xt(r,e){var t=r.split("#")[0];return t+"#"+e}function Ft(r,e){var t=r.edge(e),n=r.node(e.v),a=r.node(e.w),s=t.points.slice(1,t.points.length-1);return s.unshift(O(n,s[0])),s.push(O(a,s[s.length-1])),lt(t,s)}function lt(r,e){var t=Dt().x(function(n){return n.x}).y(function(n){return n.y});return(t.curve||t.interpolate)(r.curve),t(e)}function qt(r){var e=r.getBBox(),t=r.ownerSVGElement.getScreenCTM().inverse().multiply(r.getScreenCTM()).translate(e.width/2,e.height/2);return{x:t.e,y:t.f}}function Kt(r,e){var t=r.enter().append("g").attr("class","edgePath").style("opacity",0);return t.append("path").attr("class","path").attr("d",function(n){var a=e.edge(n),s=e.node(n.v).elem,i=Bt(a.points.length).map(function(){return qt(s)});return lt(a,i)}),t.append("defs"),t}function Qt(r,e){var t=r.exit();E(t,e).style("opacity",0).remove()}var K=function(r,e,t){var n=e.nodes().filter(function(i){return!nt(e,i)}),a=r.selectAll("g.node").data(n,function(i){return i}).classed("update",!0);a.exit().remove(),a.enter().append("g").attr("class","node").style("opacity",0),a=r.selectAll("g.node"),a.each(function(i){var o=e.node(i),c=x(this);it(c,o.class,(c.classed("update")?"update ":"")+"node"),c.select("g.label").remove();var d=c.append("g").attr("class","label"),l=J(d,o),v=t[o.shape],h=Mt(l.node().getBBox(),"width","height");o.elem=this,o.id&&c.attr("id",o.id),o.labelId&&d.attr("id",o.labelId),S(o,"width")&&(h.width=o.width),S(o,"height")&&(h.height=o.height),h.width+=o.paddingLeft+o.paddingRight,h.height+=o.paddingTop+o.paddingBottom,d.attr("transform","translate("+(o.paddingLeft-o.paddingRight)/2+","+(o.paddingTop-o.paddingBottom)/2+")");var u=x(this);u.select(".label-container").remove();var f=v(u,h,o).classed("label-container",!0);N(f,o.style);var y=f.node().getBBox();o.width=y.width,o.height=y.height});var s;return a.exit?s=a.exit():s=a.selectAll(null),E(s,e).style("opacity",0).remove(),a};function Jt(r){K=r}function Zt(r,e){var t=r.filter(function(){return!x(this).classed("update")});function n(a){var s=e.node(a);return"translate("+s.x+","+s.y+")"}t.attr("transform",n),E(r,e).style("opacity",1).attr("transform",n),E(t.selectAll("rect"),e).attr("width",function(a){return e.node(a).width}).attr("height",function(a){return e.node(a).height}).attr("x",function(a){var s=e.node(a);return-s.width/2}).attr("y",function(a){var s=e.node(a);return-s.height/2})}function Ot(r,e){var t=r.filter(function(){return!x(this).classed("update")});function n(a){var s=e.edge(a);return S(s,"x")?"translate("+s.x+","+s.y+")":""}t.attr("transform",n),E(r,e).style("opacity",1).attr("transform",n)}function jt(r,e){var t=r.filter(function(){return!x(this).classed("update")});function n(a){var s=e.node(a);return"translate("+s.x+","+s.y+")"}t.attr("transform",n),E(r,e).style("opacity",1).attr("transform",n)}function ct(r,e,t,n){var a=r.x,s=r.y,i=a-n.x,o=s-n.y,c=Math.sqrt(e*e*o*o+t*t*i*i),d=Math.abs(e*t*i/c);n.x<a&&(d=-d);var l=Math.abs(e*t*o/c);return n.y<s&&(l=-l),{x:a+d,y:s+l}}function te(r,e,t){return ct(r,e,e,t)}function ee(r,e,t,n){var a,s,i,o,c,d,l,v,h,u,f,y,p,g,k;if(a=e.y-r.y,i=r.x-e.x,c=e.x*r.y-r.x*e.y,h=a*t.x+i*t.y+c,u=a*n.x+i*n.y+c,!(h!==0&&u!==0&&j(h,u))&&(s=n.y-t.y,o=t.x-n.x,d=n.x*t.y-t.x*n.y,l=s*r.x+o*r.y+d,v=s*e.x+o*e.y+d,!(l!==0&&v!==0&&j(l,v))&&(f=a*o-s*i,f!==0)))return y=Math.abs(f/2),p=i*d-o*c,g=p<0?(p-y)/f:(p+y)/f,p=s*c-a*d,k=p<0?(p-y)/f:(p+y)/f,{x:g,y:k}}function j(r,e){return r*e>0}function T(r,e,t){var n=r.x,a=r.y,s=[],i=Number.POSITIVE_INFINITY,o=Number.POSITIVE_INFINITY;e.forEach(function(f){i=Math.min(i,f.x),o=Math.min(o,f.y)});for(var c=n-r.width/2-i,d=a-r.height/2-o,l=0;l<e.length;l++){var v=e[l],h=e[l<e.length-1?l+1:0],u=ee(r,t,{x:c+v.x,y:d+v.y},{x:c+h.x,y:d+h.y});u&&s.push(u)}return s.length?(s.length>1&&s.sort(function(f,y){var p=f.x-t.x,g=f.y-t.y,k=Math.sqrt(p*p+g*g),I=y.x-t.x,_=y.y-t.y,$=Math.sqrt(I*I+_*_);return k<$?-1:k===$?0:1}),s[0]):(console.log("NO INTERSECTION FOUND, RETURN NODE CENTER",r),r)}function Z(r,e){var t=r.x,n=r.y,a=e.x-t,s=e.y-n,i=r.width/2,o=r.height/2,c,d;return Math.abs(s)*i>Math.abs(a)*o?(s<0&&(o=-o),c=s===0?0:o*a/s,d=o):(a<0&&(i=-i),c=i,d=a===0?0:i*s/a),{x:t+c,y:n+d}}var Q={rect:ae,ellipse:ne,circle:se,diamond:ie};function re(r){Q=r}function ae(r,e,t){var n=r.insert("rect",":first-child").attr("rx",t.rx).attr("ry",t.ry).attr("x",-e.width/2).attr("y",-e.height/2).attr("width",e.width).attr("height",e.height);return t.intersect=function(a){return Z(t,a)},n}function ne(r,e,t){var n=e.width/2,a=e.height/2,s=r.insert("ellipse",":first-child").attr("x",-e.width/2).attr("y",-e.height/2).attr("rx",n).attr("ry",a);return t.intersect=function(i){return ct(t,n,a,i)},s}function se(r,e,t){var n=Math.max(e.width,e.height)/2,a=r.insert("circle",":first-child").attr("x",-e.width/2).attr("y",-e.height/2).attr("r",n);return t.intersect=function(s){return te(t,n,s)},a}function ie(r,e,t){var n=e.width*Math.SQRT2/2,a=e.height*Math.SQRT2/2,s=[{x:0,y:-a},{x:-n,y:0},{x:0,y:a},{x:n,y:0}],i=r.insert("polygon",":first-child").attr("points",s.map(function(o){return o.x+","+o.y}).join(" "));return t.intersect=function(o){return T(t,s,o)},i}function oe(){var r=function(e,t){de(t);var n=D(e,"output"),a=D(n,"clusters"),s=D(n,"edgePaths"),i=F(D(n,"edgeLabels"),t),o=K(D(n,"nodes"),t,Q);Tt(t),jt(o,t),Ot(i,t),q(s,t,Y);var c=X(a,t);Zt(c,t),he(t)};return r.createNodes=function(e){return arguments.length?(Jt(e),r):K},r.createClusters=function(e){return arguments.length?(zt(e),r):X},r.createEdgeLabels=function(e){return arguments.length?(Ht(e),r):F},r.createEdgePaths=function(e){return arguments.length?(Yt(e),r):q},r.shapes=function(e){return arguments.length?(re(e),r):Q},r.arrows=function(e){return arguments.length?(Rt(e),r):Y},r}var le={paddingLeft:10,paddingRight:10,paddingTop:10,paddingBottom:10,rx:0,ry:0,shape:"rect"},ce={arrowhead:"normal",curve:U};function de(r){r.nodes().forEach(function(e){var t=r.node(e);!S(t,"label")&&!r.children(e).length&&(t.label=e),S(t,"paddingX")&&M(t,{paddingLeft:t.paddingX,paddingRight:t.paddingX}),S(t,"paddingY")&&M(t,{paddingTop:t.paddingY,paddingBottom:t.paddingY}),S(t,"padding")&&M(t,{paddingLeft:t.padding,paddingRight:t.padding,paddingTop:t.padding,paddingBottom:t.padding}),M(t,le),ot(["paddingLeft","paddingRight","paddingTop","paddingBottom"],function(n){t[n]=Number(t[n])}),S(t,"width")&&(t._prevWidth=t.width),S(t,"height")&&(t._prevHeight=t.height)}),r.edges().forEach(function(e){var t=r.edge(e);S(t,"label")||(t.label=""),M(t,ce)})}function he(r){ot(r.nodes(),function(e){var t=r.node(e);S(t,"_prevWidth")?t.width=t._prevWidth:delete t.width,S(t,"_prevHeight")?t.height=t._prevHeight:delete t.height,delete t._prevWidth,delete t._prevHeight})}function D(r,e){var t=r.select("g."+e);return t.empty()&&(t=r.append("g").attr("class",e)),t}function dt(r,e,t){const n=e.width,a=e.height,s=(n+a)*.9,i=[{x:s/2,y:0},{x:s,y:-s/2},{x:s/2,y:-s},{x:0,y:-s/2}],o=A(r,s,s,i);return t.intersect=function(c){return T(t,i,c)},o}function ht(r,e,t){const a=e.height,s=a/4,i=e.width+2*s,o=[{x:s,y:0},{x:i-s,y:0},{x:i,y:-a/2},{x:i-s,y:-a},{x:s,y:-a},{x:0,y:-a/2}],c=A(r,i,a,o);return t.intersect=function(d){return T(t,o,d)},c}function ut(r,e,t){const n=e.width,a=e.height,s=[{x:-a/2,y:0},{x:n,y:0},{x:n,y:-a},{x:-a/2,y:-a},{x:0,y:-a/2}],i=A(r,n,a,s);return t.intersect=function(o){return T(t,s,o)},i}function pt(r,e,t){const n=e.width,a=e.height,s=[{x:-2*a/6,y:0},{x:n-a/6,y:0},{x:n+2*a/6,y:-a},{x:a/6,y:-a}],i=A(r,n,a,s);return t.intersect=function(o){return T(t,s,o)},i}function ft(r,e,t){const n=e.width,a=e.height,s=[{x:2*a/6,y:0},{x:n+a/6,y:0},{x:n-2*a/6,y:-a},{x:-a/6,y:-a}],i=A(r,n,a,s);return t.intersect=function(o){return T(t,s,o)},i}function vt(r,e,t){const n=e.width,a=e.height,s=[{x:-2*a/6,y:0},{x:n+2*a/6,y:0},{x:n-a/6,y:-a},{x:a/6,y:-a}],i=A(r,n,a,s);return t.intersect=function(o){return T(t,s,o)},i}function gt(r,e,t){const n=e.width,a=e.height,s=[{x:a/6,y:0},{x:n-a/6,y:0},{x:n+2*a/6,y:-a},{x:-2*a/6,y:-a}],i=A(r,n,a,s);return t.intersect=function(o){return T(t,s,o)},i}function yt(r,e,t){const n=e.width,a=e.height,s=[{x:0,y:0},{x:n+a/2,y:0},{x:n,y:-a/2},{x:n+a/2,y:-a},{x:0,y:-a}],i=A(r,n,a,s);return t.intersect=function(o){return T(t,s,o)},i}function mt(r,e,t){const n=e.height,a=e.width+n/4,s=r.insert("rect",":first-child").attr("rx",n/2).attr("ry",n/2).attr("x",-a/2).attr("y",-n/2).attr("width",a).attr("height",n);return t.intersect=function(i){return Z(t,i)},s}function wt(r,e,t){const n=e.width,a=e.height,s=[{x:0,y:0},{x:n,y:0},{x:n,y:-a},{x:0,y:-a},{x:0,y:0},{x:-8,y:0},{x:n+8,y:0},{x:n+8,y:-a},{x:-8,y:-a},{x:-8,y:0}],i=A(r,n,a,s);return t.intersect=function(o){return T(t,s,o)},i}function xt(r,e,t){const n=e.width,a=n/2,s=a/(2.5+n/50),i=e.height+s,o="M 0,"+s+" a "+a+","+s+" 0,0,0 "+n+" 0 a "+a+","+s+" 0,0,0 "+-n+" 0 l 0,"+i+" a "+a+","+s+" 0,0,0 "+n+" 0 l 0,"+-i,c=r.attr("label-offset-y",s).insert("path",":first-child").attr("d",o).attr("transform","translate("+-n/2+","+-(i/2+s)+")");return t.intersect=function(d){const l=Z(t,d),v=l.x-t.x;if(a!=0&&(Math.abs(v)<t.width/2||Math.abs(v)==t.width/2&&Math.abs(l.y-t.y)>t.height/2-s)){let h=s*s*(1-v*v/(a*a));h!=0&&(h=Math.sqrt(h)),h=s-h,d.y-t.y>0&&(h=-h),l.y+=h}return l},c}function ue(r){r.shapes().question=dt,r.shapes().hexagon=ht,r.shapes().stadium=mt,r.shapes().subroutine=wt,r.shapes().cylinder=xt,r.shapes().rect_left_inv_arrow=ut,r.shapes().lean_right=pt,r.shapes().lean_left=ft,r.shapes().trapezoid=vt,r.shapes().inv_trapezoid=gt,r.shapes().rect_right_inv_arrow=yt}function pe(r){r({question:dt}),r({hexagon:ht}),r({stadium:mt}),r({subroutine:wt}),r({cylinder:xt}),r({rect_left_inv_arrow:ut}),r({lean_right:pt}),r({lean_left:ft}),r({trapezoid:vt}),r({inv_trapezoid:gt}),r({rect_right_inv_arrow:yt})}function A(r,e,t,n){return r.insert("polygon",":first-child").attr("points",n.map(function(a){return a.x+","+a.y}).join(" ")).attr("transform","translate("+-e/2+","+t/2+")")}const fe={addToRender:ue,addToRenderV2:pe},bt={},ve=function(r){const e=Object.keys(r);for(const t of e)bt[t]=r[t]},kt=async function(r,e,t,n,a,s){const i=n?n.select(`[id="${t}"]`):x(`[id="${t}"]`),o=a||document,c=Object.keys(r);for(const d of c){const l=r[d];let v="default";l.classes.length>0&&(v=l.classes.join(" "));const h=H(l.styles);let u=l.text!==void 0?l.text:l.id,f;if(tt(G().flowchart.htmlLabels)){const g={label:await et(u.replace(/fa[blrs]?:fa-[\w-]+/g,k=>`<i class='${k.replace(":"," ")}'></i>`),G())};f=at(i,g).node(),f.parentNode.removeChild(f)}else{const g=o.createElementNS("http://www.w3.org/2000/svg","text");g.setAttribute("style",h.labelStyle.replace("color:","fill:"));const k=u.split(rt.lineBreakRegex);for(const I of k){const _=o.createElementNS("http://www.w3.org/2000/svg","tspan");_.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),_.setAttribute("dy","1em"),_.setAttribute("x","1"),_.textContent=I,g.appendChild(_)}f=g}let y=0,p="";switch(l.type){case"round":y=5,p="rect";break;case"square":p="rect";break;case"diamond":p="question";break;case"hexagon":p="hexagon";break;case"odd":p="rect_left_inv_arrow";break;case"lean_right":p="lean_right";break;case"lean_left":p="lean_left";break;case"trapezoid":p="trapezoid";break;case"inv_trapezoid":p="inv_trapezoid";break;case"odd_right":p="rect_left_inv_arrow";break;case"circle":p="circle";break;case"ellipse":p="ellipse";break;case"stadium":p="stadium";break;case"subroutine":p="subroutine";break;case"cylinder":p="cylinder";break;case"group":p="rect";break;default:p="rect"}R.warn("Adding node",l.id,l.domId),e.setNode(s.db.lookUpDomId(l.id),{labelType:"svg",labelStyle:h.labelStyle,shape:p,label:f,rx:y,ry:y,class:v,style:h.style,id:s.db.lookUpDomId(l.id)})}},St=async function(r,e,t){let n=0,a,s;if(r.defaultStyle!==void 0){const i=H(r.defaultStyle);a=i.style,s=i.labelStyle}for(const i of r){n++;const o="L-"+i.start+"-"+i.end,c="LS-"+i.start,d="LE-"+i.end,l={};i.type==="arrow_open"?l.arrowhead="none":l.arrowhead="normal";let v="",h="";if(i.style!==void 0){const u=H(i.style);v=u.style,h=u.labelStyle}else switch(i.stroke){case"normal":v="fill:none",a!==void 0&&(v=a),s!==void 0&&(h=s);break;case"dotted":v="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":v=" stroke-width: 3.5px;fill:none";break}l.style=v,l.labelStyle=h,i.interpolate!==void 0?l.curve=z(i.interpolate,U):r.defaultInterpolate!==void 0?l.curve=z(r.defaultInterpolate,U):l.curve=z(bt.curve,U),i.text===void 0?i.style!==void 0&&(l.arrowheadStyle="fill: #333"):(l.arrowheadStyle="fill: #333",l.labelpos="c",tt(G().flowchart.htmlLabels)?(l.labelType="html",l.label=`<span id="L-${o}" class="edgeLabel L-${c}' L-${d}" style="${l.labelStyle}">${await et(i.text.replace(/fa[blrs]?:fa-[\w-]+/g,u=>`<i class='${u.replace(":"," ")}'></i>`),G())}</span>`):(l.labelType="text",l.label=i.text.replace(rt.lineBreakRegex,`
`),i.style===void 0&&(l.style=l.style||"stroke: #333; stroke-width: 1.5px;fill:none"),l.labelStyle=l.labelStyle.replace("color:","fill:"))),l.id=o,l.class=c+" "+d,l.minlen=i.length||1,e.setEdge(t.db.lookUpDomId(i.start),t.db.lookUpDomId(i.end),l,n)}},ge=function(r,e){return R.info("Extracting classes"),e.db.getClasses()},ye=async function(r,e,t,n){R.info("Drawing flowchart");const{securityLevel:a,flowchart:s}=G();let i;a==="sandbox"&&(i=x("#i"+e));const o=a==="sandbox"?x(i.nodes()[0].contentDocument.body):x("body"),c=a==="sandbox"?i.nodes()[0].contentDocument:document;let d=n.db.getDirection();d===void 0&&(d="TD");const l=s.nodeSpacing||50,v=s.rankSpacing||50,h=new _t({multigraph:!0,compound:!0}).setGraph({rankdir:d,nodesep:l,ranksep:v,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}});let u;const f=n.db.getSubGraphs();for(let m=f.length-1;m>=0;m--)u=f[m],n.db.addVertex(u.id,u.title,"group",void 0,u.classes);const y=n.db.getVertices();R.warn("Get vertices",y);const p=n.db.getEdges();let g=0;for(g=f.length-1;g>=0;g--){u=f[g],Ct("cluster").append("text");for(let m=0;m<u.nodes.length;m++)R.warn("Setting subgraph",u.nodes[m],n.db.lookUpDomId(u.nodes[m]),n.db.lookUpDomId(u.id)),h.setParent(n.db.lookUpDomId(u.nodes[m]),n.db.lookUpDomId(u.id))}await kt(y,h,e,o,c,n),await St(p,h,n);const k=new oe;fe.addToRender(k),k.arrows().none=function(b,L,w,B){const C=b.append("marker").attr("id",L).attr("viewBox","0 0 10 10").attr("refX",9).attr("refY",5).attr("markerUnits","strokeWidth").attr("markerWidth",8).attr("markerHeight",6).attr("orient","auto").append("path").attr("d","M 0 0 L 0 0 L 0 0 z");N(C,w[B+"Style"])},k.arrows().normal=function(b,L){b.append("marker").attr("id",L).attr("viewBox","0 0 10 10").attr("refX",9).attr("refY",5).attr("markerUnits","strokeWidth").attr("markerWidth",8).attr("markerHeight",6).attr("orient","auto").append("path").attr("d","M 0 0 L 10 5 L 0 10 z").attr("class","arrowheadPath").style("stroke-width",1).style("stroke-dasharray","1,0")};const I=o.select(`[id="${e}"]`),_=o.select("#"+e+" g");for(k(_,h),_.selectAll("g.node").attr("title",function(){return n.db.getTooltip(this.id)}),n.db.indexNodes("subGraph"+g),g=0;g<f.length;g++)if(u=f[g],u.title!=="undefined"){const m=c.querySelectorAll("#"+e+' [id="'+n.db.lookUpDomId(u.id)+'"] rect'),b=c.querySelectorAll("#"+e+' [id="'+n.db.lookUpDomId(u.id)+'"]'),L=m[0].x.baseVal.value,w=m[0].y.baseVal.value,B=m[0].width.baseVal.value,C=x(b[0]).select(".label");C.attr("transform",`translate(${L+B/2}, ${w+14})`),C.attr("id",e+"Text");for(let W=0;W<u.classes.length;W++)b[0].classList.add(u.classes[W])}if(!s.htmlLabels){const m=c.querySelectorAll('[id="'+e+'"] .edgeLabel .label');for(const b of m){const L=b.getBBox(),w=c.createElementNS("http://www.w3.org/2000/svg","rect");w.setAttribute("rx",0),w.setAttribute("ry",0),w.setAttribute("width",L.width),w.setAttribute("height",L.height),b.insertBefore(w,b.firstChild)}}Et(h,I,s.diagramPadding,s.useMaxWidth),Object.keys(y).forEach(function(m){const b=y[m];if(b.link){const L=o.select("#"+e+' [id="'+n.db.lookUpDomId(m)+'"]');if(L){const w=c.createElementNS("http://www.w3.org/2000/svg","a");w.setAttributeNS("http://www.w3.org/2000/svg","class",b.classes.join(" ")),w.setAttributeNS("http://www.w3.org/2000/svg","href",b.link),w.setAttributeNS("http://www.w3.org/2000/svg","rel","noopener"),a==="sandbox"?w.setAttributeNS("http://www.w3.org/2000/svg","target","_top"):b.linkTarget&&w.setAttributeNS("http://www.w3.org/2000/svg","target",b.linkTarget);const B=L.insert(function(){return w},":first-child"),P=L.select(".label-container");P&&B.append(function(){return P.node()});const C=L.select(".label");C&&B.append(function(){return C.node()})}}})},me={setConf:ve,addVertices:kt,addEdges:St,getClasses:ge,draw:ye},yr={parser:Lt,db:V,renderer:Nt,styles:At,init:r=>{r.flowchart||(r.flowchart={}),r.flowchart.arrowMarkerAbsolute=r.arrowMarkerAbsolute,me.setConf(r.flowchart),V.clear(),V.setGen("gen-1")}};export{yr as diagram};
