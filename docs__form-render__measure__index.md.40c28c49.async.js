(window.webpackJsonp=window.webpackJsonp||[]).push([[49,13],{"0zqC":function(jn,ln,e){"use strict";e.r(ln);var L=e("tJVT"),t=e("q1tI"),y=e.n(t),K=e("wx14"),ue=e("rePB"),V=e("ODXe"),Te=e("U8pU"),Ce=e("Ff2n"),oe=e("VTBJ"),$n=e("TSYQ"),Re=e.n($n),Dn=e("Zm9Q"),Pn=e("5Z9U"),vn=e("6cGi"),an=e("KQm4"),$e=e("wgJM"),wn=e("t23M");function Tn(i){var u=Object(t.useRef)(),g=Object(t.useRef)(!1);function E(){for(var j=arguments.length,R=new Array(j),T=0;T<j;T++)R[T]=arguments[T];g.current||($e.a.cancel(u.current),u.current=Object($e.a)(function(){i.apply(void 0,R)}))}return Object(t.useEffect)(function(){return function(){g.current=!0,$e.a.cancel(u.current)}},[]),E}function gn(i){var u=Object(t.useRef)([]),g=Object(t.useState)({}),E=Object(V.a)(g,2),j=E[1],R=Object(t.useRef)(typeof i=="function"?i():i),T=Tn(function(){var W=R.current;u.current.forEach(function(x){W=x(W)}),u.current=[],R.current=W,j({})});function A(W){u.current.push(W),T()}return[R.current,A]}var Fe=e("4IlW");function et(i,u){var g,E=i.prefixCls,j=i.id,R=i.active,T=i.rtl,A=i.tab,W=A.key,x=A.tab,$=A.disabled,U=A.closeIcon,z=i.tabBarGutter,re=i.tabPosition,H=i.closable,Y=i.renderWrapper,se=i.removeAriaLabel,J=i.editable,q=i.onClick,ne=i.onRemove,Q=i.onFocus,ae="".concat(E,"-tab");t.useEffect(function(){return ne},[]);var k={};re==="top"||re==="bottom"?k[T?"marginLeft":"marginRight"]=z:k.marginBottom=z;var pe=J&&H!==!1&&!$;function _(te){$||q(te)}function le(te){te.preventDefault(),te.stopPropagation(),J.onEdit("remove",{key:W,event:te})}var de=t.createElement("div",{key:W,ref:u,className:Re()(ae,(g={},Object(ue.a)(g,"".concat(ae,"-with-remove"),pe),Object(ue.a)(g,"".concat(ae,"-active"),R),Object(ue.a)(g,"".concat(ae,"-disabled"),$),g)),style:k,onClick:_},t.createElement("div",{role:"tab","aria-selected":R,id:j&&"".concat(j,"-tab-").concat(W),className:"".concat(ae,"-btn"),"aria-controls":j&&"".concat(j,"-panel-").concat(W),"aria-disabled":$,tabIndex:$?null:0,onClick:function(G){G.stopPropagation(),_(G)},onKeyDown:function(G){[Fe.a.SPACE,Fe.a.ENTER].includes(G.which)&&(G.preventDefault(),_(G))},onFocus:Q},x),pe&&t.createElement("button",{type:"button","aria-label":se||"remove",tabIndex:0,className:"".concat(ae,"-remove"),onClick:function(G){G.stopPropagation(),le(G)}},U||J.removeIcon||"\xD7"));return Y&&(de=Y(de)),de}var Mn=t.forwardRef(et),nt={width:0,height:0,left:0,top:0};function ct(i,u,g){return Object(t.useMemo)(function(){for(var E,j=new Map,R=u.get((E=i[0])===null||E===void 0?void 0:E.key)||nt,T=R.left+R.width,A=0;A<i.length;A+=1){var W=i[A].key,x=u.get(W);if(!x){var $;x=u.get(($=i[A-1])===null||$===void 0?void 0:$.key)||nt}var U=j.get(W)||Object(oe.a)({},x);U.right=T-U.left-U.width,j.set(W,U)}return j},[i.map(function(E){return E.key}).join("_"),u,g])}var tt={width:0,height:0,left:0,top:0,right:0};function mt(i,u,g,E,j){var R=j.tabs,T=j.tabPosition,A=j.rtl,W,x,$;["top","bottom"].includes(T)?(W="width",x=A?"right":"left",$=Math.abs(u.left)):(W="height",x="top",$=-u.top);var U=u[W],z=g[W],re=E[W],H=U;return z+re>U&&(H=U-re),Object(t.useMemo)(function(){if(!R.length)return[0,0];for(var Y=R.length,se=Y,J=0;J<Y;J+=1){var q=i.get(R[J].key)||tt;if(q[x]+q[W]>$+H){se=J-1;break}}for(var ne=0,Q=Y-1;Q>=0;Q-=1){var ae=i.get(R[Q].key)||tt;if(ae[x]<$){ne=Q+1;break}}return[ne,se]},[i,$,H,T,R.map(function(Y){return Y.key}).join("_"),A])}var Bn=e("Gytx"),rt=e.n(Bn),Vn=e("Kwbf");function ft(i,u){var g=i.prefixCls,E=i.invalidate,j=i.item,R=i.renderItem,T=i.responsive,A=i.registerSize,W=i.itemKey,x=i.className,$=i.style,U=i.children,z=i.display,re=i.order,H=i.component,Y=H===void 0?"div":H,se=Object(Ce.a)(i,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),J=T&&!z;function q(pe){A(W,pe)}t.useEffect(function(){return function(){q(null)}},[]);var ne=R&&j!==void 0?R(j):U,Q;E||(Q={opacity:J?0:1,height:J?0:void 0,overflowY:J?"hidden":void 0,order:T?re:void 0,pointerEvents:J?"none":void 0});var ae={};J&&(ae["aria-hidden"]=!0);var k=t.createElement(Y,Object(K.a)({className:Re()(!E&&g,x),style:Object(oe.a)(Object(oe.a)({},Q),$)},ae,se,{ref:u}),ne);return T&&(k=t.createElement(wn.default,{onResize:function(_){var le=_.offsetWidth;q(le)}},k)),k}var Kn=t.forwardRef(ft);Kn.displayName="Item";var Wn=Kn;function Jn(){var i=Object(t.useState)({}),u=Object(V.a)(i,2),g=u[1],E=Object(t.useRef)([]),j=Object(t.useRef)(!1),R=0,T=0;Object(t.useEffect)(function(){return function(){j.current=!0}},[]);function A(W){var x=R;R+=1,E.current.length<x+1&&(E.current[x]=W);var $=E.current[x];function U(z){E.current[x]=typeof z=="function"?z(E.current[x]):z,$e.a.cancel(T),T=Object($e.a)(function(){j.current||g({})})}return[$,U]}return A}var at=function(u,g){var E=t.useContext(un);if(!E){var j=u.component,R=j===void 0?"div":j,T=Object(Ce.a)(u,["component"]);return t.createElement(R,Object(K.a)({},T,{ref:g}))}var A=E.className,W=Object(Ce.a)(E,["className"]),x=u.className,$=Object(Ce.a)(u,["className"]);return t.createElement(un.Provider,{value:null},t.createElement(Wn,Object(K.a)({ref:g,className:Re()(A,x)},W,$)))},Fn=t.forwardRef(at);Fn.displayName="RawItem";var st=Fn,un=t.createContext(null),it="responsive",F="invalidate";function D(i){return"+ ".concat(i.length," ...")}function I(i,u){var g=i.prefixCls,E=g===void 0?"rc-overflow":g,j=i.data,R=j===void 0?[]:j,T=i.renderItem,A=i.renderRawItem,W=i.itemKey,x=i.itemWidth,$=x===void 0?10:x,U=i.ssr,z=i.style,re=i.className,H=i.maxCount,Y=i.renderRest,se=i.renderRawRest,J=i.suffix,q=i.component,ne=q===void 0?"div":q,Q=i.itemComponent,ae=i.onVisibleChange,k=Object(Ce.a)(i,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),pe=Jn(),_=U==="full",le=pe(null),de=Object(V.a)(le,2),te=de[0],G=de[1],ie=te||0,fe=pe(new Map),me=Object(V.a)(fe,2),ye=me[0],Ie=me[1],he=pe(0),ge=Object(V.a)(he,2),De=ge[0],je=ge[1],Se=pe(0),Oe=Object(V.a)(Se,2),Ae=Oe[0],Ue=Oe[1],we=pe(0),Me=Object(V.a)(we,2),xe=Me[0],Ne=Me[1],yn=Object(t.useState)(null),Qe=Object(V.a)(yn,2),Ve=Qe[0],_e=Qe[1],mn=Object(t.useState)(null),fn=Object(V.a)(mn,2),Ee=fn[0],We=fn[1],Ge=t.useMemo(function(){return Ee===null&&_?Number.MAX_SAFE_INTEGER:Ee||0},[Ee,te]),Je=Object(t.useState)(!1),Nn=Object(V.a)(Je,2),Gn=Nn[0],An=Nn[1],Ze="".concat(E,"-item"),bn=Math.max(De,Ae),en=R.length&&H===it,On=H===F,He=en||typeof H=="number"&&R.length>H,ke=Object(t.useMemo)(function(){var ce=R;return en?te===null&&_?ce=R:ce=R.slice(0,Math.min(R.length,ie/$)):typeof H=="number"&&(ce=R.slice(0,H)),ce},[R,$,te,H,en]),Sn=Object(t.useMemo)(function(){return en?R.slice(Ge+1):R.slice(ke.length)},[R,ke,en,Ge]),tn=Object(t.useCallback)(function(ce,be){var Pe;return typeof W=="function"?W(ce):(Pe=W&&(ce==null?void 0:ce[W]))!==null&&Pe!==void 0?Pe:be},[W]),ze=Object(t.useCallback)(T||function(ce){return ce},[T]);function Le(ce,be){We(ce),be||(An(ce<R.length-1),ae==null||ae(ce))}function Hn(ce,be){G(be.clientWidth)}function Yn(ce,be){Ie(function(Pe){var Ye=new Map(Pe);return be===null?Ye.delete(ce):Ye.set(ce,be),Ye})}function lt(ce,be){Ue(be),je(Ae)}function pn(ce,be){Ne(be)}function on(ce){return ye.get(tn(ke[ce],ce))}t.useLayoutEffect(function(){if(ie&&bn&&ke){var ce=xe,be=ke.length,Pe=be-1;if(!be){Le(0),_e(null);return}for(var Ye=0;Ye<be;Ye+=1){var kn=on(Ye);if(kn===void 0){Le(Ye-1,!0);break}if(ce+=kn,Ye===Pe-1&&ce+on(Pe)<=ie){Le(Pe),_e(null);break}else if(ce+bn>ie){Le(Ye-1),_e(ce-kn-xe+Ae);break}else if(Ye===Pe){Le(Pe),_e(ce-xe);break}}J&&on(0)+xe>ie&&_e(null)}},[ie,ye,Ae,xe,tn,ke]);var Xn=Gn&&!!Sn.length,hn={};Ve!==null&&en&&(hn={position:"absolute",left:Ve,top:0});var rn={prefixCls:Ze,responsive:en,component:Q,invalidate:On},Qn=A?function(ce,be){var Pe=tn(ce,be);return t.createElement(un.Provider,{key:Pe,value:Object(oe.a)(Object(oe.a)({},rn),{},{order:be,item:ce,itemKey:Pe,registerSize:Yn,display:be<=Ge})},A(ce,be))}:function(ce,be){var Pe=tn(ce,be);return t.createElement(Wn,Object(K.a)({},rn,{order:be,key:Pe,item:ce,renderItem:ze,itemKey:Pe,registerSize:Yn,display:be<=Ge}))},Cn,Zn={order:Xn?Ge:Number.MAX_SAFE_INTEGER,className:"".concat(Ze,"-rest"),registerSize:lt,display:Xn};if(se)se&&(Cn=t.createElement(un.Provider,{value:Object(oe.a)(Object(oe.a)({},rn),Zn)},se(Sn)));else{var nn=Y||D;Cn=t.createElement(Wn,Object(K.a)({},rn,Zn),typeof nn=="function"?nn(Sn):nn)}var Rn=t.createElement(ne,Object(K.a)({className:Re()(!On&&E,re),style:z,ref:u},k),ke.map(Qn),He?Cn:null,J&&t.createElement(Wn,Object(K.a)({},rn,{order:Ge,className:"".concat(Ze,"-suffix"),registerSize:pn,display:!0,style:hn}),J));return en&&(Rn=t.createElement(wn.default,{onResize:Hn},Rn)),Rn}var c=t.forwardRef(I);c.displayName="Overflow",c.Item=st,c.RESPONSIVE=it,c.INVALIDATE=F;var s=c,p=s,b=e("1OyB"),O=e("vuIU"),o=e("Ji7U"),f=e("LK+K"),l=e("bT9E"),w=e("YrtM"),N=t.createContext(null);function S(i,u){var g=Object(oe.a)({},i);return Object.keys(u).forEach(function(E){var j=u[E];j!==void 0&&(g[E]=j)}),g}function d(i){var u=i.children,g=i.locked,E=Object(Ce.a)(i,["children","locked"]),j=t.useContext(N),R=Object(w.a)(function(){return S(j,E)},[j,E],function(T,A){return!g&&(T[0]!==A[0]||!rt()(T[1],A[1]))});return t.createElement(N.Provider,{value:R},u)}function C(i,u,g,E){var j=t.useContext(N),R=j.activeKey,T=j.onActive,A=j.onInactive,W={active:R===i};return u||(W.onMouseEnter=function(x){g==null||g({key:i,domEvent:x}),T(i)},W.onMouseLeave=function(x){E==null||E({key:i,domEvent:x}),A(i)}),W}function m(i){var u=i.item,g=Object(Ce.a)(i,["item"]);return Object.defineProperty(g,"item",{get:function(){return Object(Vn.a)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),u}}),g}function n(i){var u=i.icon,g=i.props,E=i.children,j;return typeof u=="function"?j=t.createElement(u,Object(oe.a)({},g)):j=u,j||E||null}function a(i){var u=t.useContext(N),g=u.mode,E=u.rtl,j=u.inlineIndent;if(g!=="inline")return null;var R=i;return E?{paddingRight:R*j}:{paddingLeft:R*j}}var r=[],v=t.createContext(null);function h(){return t.useContext(v)}var P=t.createContext(r);function M(i){var u=t.useContext(P);return t.useMemo(function(){return i!==void 0?[].concat(Object(an.a)(u),[i]):u},[u,i])}var B=t.createContext(null),X=t.createContext(null);function Ke(i,u){return i===void 0?null:"".concat(i,"-").concat(u)}function Xe(i){var u=t.useContext(X);return Ke(u,i)}var dn=function(i){Object(o.a)(g,i);var u=Object(f.a)(g);function g(){return Object(b.a)(this,g),u.apply(this,arguments)}return Object(O.a)(g,[{key:"render",value:function(){var j=this.props,R=j.title,T=j.attribute,A=j.elementRef,W=Object(Ce.a)(j,["title","attribute","elementRef"]),x=Object(l.a)(W,["eventKey"]);return Object(Vn.a)(!T,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),t.createElement(p.Item,Object(K.a)({},T,{title:typeof R=="string"?R:void 0},x,{ref:A}))}}]),g}(t.Component),In=function(u){var g,E=u.style,j=u.className,R=u.eventKey,T=u.disabled,A=u.itemIcon,W=u.children,x=u.role,$=u.onMouseEnter,U=u.onMouseLeave,z=u.onClick,re=u.onKeyDown,H=u.onFocus,Y=Object(Ce.a)(u,["style","className","eventKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"]),se=Xe(R),J=t.useContext(N),q=J.prefixCls,ne=J.onItemClick,Q=J.disabled,ae=J.overflowDisabled,k=J.itemIcon,pe=J.selectedKeys,_=J.onActive,le="".concat(q,"-item"),de=t.useRef(),te=t.useRef(),G=Q||T,ie=M(R),fe=function(we){return{key:R,keyPath:ie,item:de.current,domEvent:we}},me=A||k,ye=C(R,G,$,U),Ie=ye.active,he=Object(Ce.a)(ye,["active"]),ge=pe.includes(R),De=a(ie.length),je=function(we){if(!G){var Me=fe(we);z==null||z(m(Me)),ne(Me)}},Se=function(we){if(re==null||re(we),we.which===Fe.a.ENTER){var Me=fe(we);z==null||z(m(Me)),ne(Me)}},Oe=function(we){_(R),H==null||H(we)},Ae={};return u.role==="option"&&(Ae["aria-selected"]=ge),t.createElement(dn,Object(K.a)({ref:de,elementRef:te,role:x===null?"none":x||"menuitem",tabIndex:T?null:-1,"data-menu-id":ae&&se?null:se},Y,he,Ae,{component:"li","aria-disabled":T,style:Object(oe.a)(Object(oe.a)({},De),E),className:Re()(le,(g={},Object(ue.a)(g,"".concat(le,"-active"),Ie),Object(ue.a)(g,"".concat(le,"-selected"),ge),Object(ue.a)(g,"".concat(le,"-disabled"),G),g),j),onClick:je,onKeyDown:Se,onFocus:Oe}),W,t.createElement(n,{props:Object(oe.a)(Object(oe.a)({},u),{},{isSelected:ge}),icon:me}))};function zn(i){var u=i.eventKey,g=h(),E=M(u);return t.useEffect(function(){if(g)return g.registerPath(u,E),function(){g.unregisterPath(u,E)}},[E]),g?null:t.createElement(In,i)}var cn=zn;function Un(i,u){return Object(Dn.a)(i).map(function(g,E){if(t.isValidElement(g)){var j=g.key;return j==null&&(j="tmp_key-".concat([].concat(Object(an.a)(u),[E]).join("-"))),t.cloneElement(g,{key:j,eventKey:j})}return g})}function ot(i){var u=t.useRef(i);u.current=i;var g=t.useCallback(function(){for(var E,j=arguments.length,R=new Array(j),T=0;T<j;T++)R[T]=arguments[T];return(E=u.current)===null||E===void 0?void 0:E.call.apply(E,[u].concat(R))},[]);return i?g:void 0}var Cr=function(u,g){var E=u.className,j=u.children,R=Object(Ce.a)(u,["className","children"]),T=t.useContext(N),A=T.prefixCls,W=T.mode;return t.createElement("ul",Object(K.a)({className:Re()(A,"".concat(A,"-sub"),"".concat(A,"-").concat(W==="inline"?"inline":"vertical"),E)},R,{"data-menu-list":!0,ref:g}),j)},Xt=t.forwardRef(Cr);Xt.displayName="SubMenuList";var Qt=Xt,Rr=e("uciX"),Ln={adjustX:1,adjustY:1},Zt={topLeft:{points:["bl","tl"],overflow:Ln,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Ln,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:Ln,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:Ln,offset:[4,0]}},Er={topLeft:{points:["bl","tl"],overflow:Ln,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Ln,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:Ln,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:Ln,offset:[4,0]}},fa=Zt;function kt(i,u,g){if(u)return u;if(g)return g[i]||g.other}var jr={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Dr(i){var u=i.prefixCls,g=i.visible,E=i.children,j=i.popup,R=i.popupClassName,T=i.popupOffset,A=i.disabled,W=i.mode,x=i.onVisibleChange,$=t.useContext(N),U=$.getPopupContainer,z=$.rtl,re=$.subMenuOpenDelay,H=$.subMenuCloseDelay,Y=$.builtinPlacements,se=$.triggerSubMenuAction,J=$.forceSubMenuRender,q=$.motion,ne=$.defaultMotions,Q=t.useState(!1),ae=Object(V.a)(Q,2),k=ae[0],pe=ae[1],_=z?Object(oe.a)(Object(oe.a)({},Er),Y):Object(oe.a)(Object(oe.a)({},Zt),Y),le=jr[W],de=kt(W,q,ne),te=Object(oe.a)(Object(oe.a)({},de),{},{leavedClassName:"".concat(u,"-hidden"),removeOnLeave:!1,motionAppear:!0}),G=t.useRef();return t.useEffect(function(){return G.current=Object($e.a)(function(){pe(g)}),function(){$e.a.cancel(G.current)}},[g]),t.createElement(Rr.a,{prefixCls:u,popupClassName:Re()("".concat(u,"-popup"),Object(ue.a)({},"".concat(u,"-rtl"),z),R),stretch:W==="horizontal"?"minWidth":null,getPopupContainer:U,builtinPlacements:_,popupPlacement:le,popupVisible:k,popup:j,popupAlign:T&&{offset:T},action:A?[]:[se],mouseEnterDelay:re,mouseLeaveDelay:H,onPopupVisibleChange:x,forceRender:J,popupMotion:te},E)}var Pr=e("8XRh");function Tr(i){var u=i.id,g=i.open,E=i.keyPath,j=i.children,R="inline",T=t.useContext(N),A=T.prefixCls,W=T.forceSubMenuRender,x=T.motion,$=T.defaultMotions,U=T.mode,z=t.useRef(!1);z.current=U===R;var re=t.useState(!z.current),H=Object(V.a)(re,2),Y=H[0],se=H[1],J=z.current?g:!1;t.useEffect(function(){z.current&&se(!1)},[U]);var q=Object(oe.a)({},kt(R,x,$));E.length>1&&(q.motionAppear=!1);var ne=q.onVisibleChanged;return q.onVisibleChanged=function(Q){return!z.current&&!Q&&se(!0),ne==null?void 0:ne(Q)},Y?null:t.createElement(d,{mode:R,locked:!z.current},t.createElement(Pr.default,Object(K.a)({visible:J},q,{forceRender:W,removeOnLeave:!1,leavedClassName:"".concat(A,"-hidden")}),function(Q){var ae=Q.className,k=Q.style;return t.createElement(Qt,{id:u,className:ae,style:k},j)}))}var Fr=function(u){var g,E=u.style,j=u.className,R=u.title,T=u.eventKey,A=u.disabled,W=u.internalPopupClose,x=u.children,$=u.itemIcon,U=u.expandIcon,z=u.popupClassName,re=u.popupOffset,H=u.onClick,Y=u.onMouseEnter,se=u.onMouseLeave,J=u.onTitleClick,q=u.onTitleMouseEnter,ne=u.onTitleMouseLeave,Q=Object(Ce.a)(u,["style","className","title","eventKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"]),ae=Xe(T),k=t.useContext(N),pe=k.prefixCls,_=k.mode,le=k.openKeys,de=k.disabled,te=k.overflowDisabled,G=k.activeKey,ie=k.selectedKeys,fe=k.itemIcon,me=k.expandIcon,ye=k.onItemClick,Ie=k.onOpenChange,he=k.onActive,ge=t.useContext(B),De=ge.isSubPathKey,je=M(),Se="".concat(pe,"-submenu"),Oe=de||A,Ae=t.useRef(),Ue=t.useRef(),we=$||fe,Me=U||me,xe=le.includes(T),Ne=!te&&xe,yn=De(ie,T),Qe=C(T,Oe,q,ne),Ve=Qe.active,_e=Object(Ce.a)(Qe,["active"]),mn=t.useState(!1),fn=Object(V.a)(mn,2),Ee=fn[0],We=fn[1],Ge=function(Le){Oe||We(Le)},Je=function(Le){Ge(!0),Y==null||Y({key:T,domEvent:Le})},Nn=function(Le){Ge(!1),se==null||se({key:T,domEvent:Le})},Gn=t.useMemo(function(){return Ve||(_!=="inline"?Ee||De([G],T):!1)},[_,Ve,G,Ee,T,De]),An=a(je.length),Ze=function(Le){Oe||(J==null||J({key:T,domEvent:Le}),_==="inline"&&Ie(T,!xe))},bn=ot(function(ze){H==null||H(m(ze)),ye(ze)}),en=function(Le){_!=="inline"&&Ie(T,Le)},On=function(){he(T)},He=ae&&"".concat(ae,"-popup"),ke=t.createElement("div",Object(K.a)({role:"menuitem",style:An,className:"".concat(Se,"-title"),tabIndex:Oe?null:-1,ref:Ae,title:typeof R=="string"?R:null,"data-menu-id":te&&ae?null:ae,"aria-expanded":Ne,"aria-haspopup":!0,"aria-controls":He,"aria-disabled":Oe,onClick:Ze,onFocus:On},_e),R,t.createElement(n,{icon:_!=="horizontal"?Me:null,props:Object(oe.a)(Object(oe.a)({},u),{},{isOpen:Ne,isSubMenu:!0})},t.createElement("i",{className:"".concat(Se,"-arrow")}))),Sn=t.useRef(_);if(_!=="inline"&&(Sn.current=je.length>1?"vertical":_),!te){var tn=Sn.current;ke=t.createElement(Dr,{mode:tn,prefixCls:Se,visible:!W&&Ne&&_!=="inline",popupClassName:z,popupOffset:re,popup:t.createElement(d,{mode:tn},t.createElement(Qt,{id:He,ref:Ue},x)),disabled:Oe,onVisibleChange:en},ke)}return t.createElement(d,{onItemClick:bn,mode:_==="horizontal"?"vertical":_,itemIcon:we,expandIcon:Me},t.createElement(p.Item,Object(K.a)({role:"none"},Q,{component:"li",style:E,className:Re()(Se,"".concat(Se,"-").concat(_),j,(g={},Object(ue.a)(g,"".concat(Se,"-open"),Ne),Object(ue.a)(g,"".concat(Se,"-active"),Gn),Object(ue.a)(g,"".concat(Se,"-selected"),yn),Object(ue.a)(g,"".concat(Se,"-disabled"),Oe),g)),onMouseEnter:Je,onMouseLeave:Nn}),ke,!te&&t.createElement(Tr,{id:He,open:Ne,keyPath:je},x)))};function qt(i){var u=i.eventKey,g=i.children,E=M(u),j=Un(g,E),R=h();t.useEffect(function(){if(R)return R.registerPath(u,E),function(){R.unregisterPath(u,E)}},[E]);var T;return R?T=j:T=t.createElement(Fr,i,j),t.createElement(P.Provider,{value:E},T)}var Ir=e("x/xZ");function _t(i){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Object(Ir.a)(i)){var g=i.nodeName.toLowerCase(),E=["input","select","textarea","button"].includes(g)||i.isContentEditable||g==="a"&&!!i.getAttribute("href"),j=i.getAttribute("tabindex"),R=Number(j),T=null;return j&&!Number.isNaN(R)?T=R:E&&T===null&&(T=0),E&&i.disabled&&(T=null),T!==null&&(T>=0||u&&T<0)}return!1}function er(i){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,g=Object(an.a)(i.querySelectorAll("*")).filter(function(E){return _t(E,u)});return _t(i,u)&&g.unshift(i),g}var Ot=null;function pa(){Ot=document.activeElement}function ha(){Ot=null}function va(){if(Ot)try{Ot.focus()}catch(i){}}function ga(i,u){if(u.keyCode===9){var g=er(i),E=g[u.shiftKey?0:g.length-1],j=E===document.activeElement||i===document.activeElement;if(j){var R=g[u.shiftKey?g.length-1:0];R.focus(),u.preventDefault()}}}var Mt=Fe.a.LEFT,Bt=Fe.a.RIGHT,Kt=Fe.a.UP,St=Fe.a.DOWN,Ct=Fe.a.ENTER,nr=Fe.a.ESC,tr=[Kt,St,Mt,Bt];function Nr(i,u,g,E){var j,R,T,A,W="prev",x="next",$="children",U="parent";if(i==="inline"&&E===Ct)return{inlineTrigger:!0};var z=(j={},Object(ue.a)(j,Kt,W),Object(ue.a)(j,St,x),j),re=(R={},Object(ue.a)(R,Mt,g?x:W),Object(ue.a)(R,Bt,g?W:x),Object(ue.a)(R,St,$),Object(ue.a)(R,Ct,$),R),H=(T={},Object(ue.a)(T,Kt,W),Object(ue.a)(T,St,x),Object(ue.a)(T,Ct,$),Object(ue.a)(T,nr,U),Object(ue.a)(T,Mt,g?$:U),Object(ue.a)(T,Bt,g?U:$),T),Y={inline:z,horizontal:re,vertical:H,inlineSub:z,horizontalSub:H,verticalSub:H},se=(A=Y["".concat(i).concat(u?"":"Sub")])===null||A===void 0?void 0:A[E];switch(se){case W:return{offset:-1,sibling:!0};case x:return{offset:1,sibling:!0};case U:return{offset:-1,sibling:!1};case $:return{offset:1,sibling:!1};default:return null}}function Ar(i){for(var u=i;u;){if(u.getAttribute("data-menu-list"))return u;u=u.parentElement}return null}function wr(i,u){for(var g=i||document.activeElement;g;){if(u.has(g))return g;g=g.parentElement}return null}function Mr(i,u){var g=er(i,!0);return g.filter(function(E){return u.has(E)})}function rr(i,u,g){var E=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!i)return null;var j=Mr(i,u),R=j.length,T=j.findIndex(function(A){return g===A});return E<0?T===-1?T=R-1:T-=1:E>0&&(T+=1),T=(T+R)%R,j[T]}function Br(i,u,g,E,j,R,T,A,W,x){var $=t.useRef(),U=t.useRef();U.current=u;var z=function(){$e.a.cancel($.current)};return t.useEffect(function(){return function(){z()}},[]),function(re){var H=re.which;if([].concat(tr,[Ct,nr]).includes(H)){var Y,se,J,q=function(){Y=new Set,se=new Map,J=new Map;var fe=R();return fe.forEach(function(me){var ye=document.querySelector("[data-menu-id='".concat(Ke(E,me),"']"));ye&&(Y.add(ye),J.set(ye,me),se.set(me,ye))}),Y};q();var ne=se.get(u),Q=wr(ne,Y),ae=J.get(Q),k=Nr(i,T(ae,!0).length===1,g,H);if(!k)return;tr.includes(H)&&re.preventDefault();var pe=function(fe){if(fe){var me=fe,ye=fe.querySelector("a");(ye==null?void 0:ye.getAttribute("href"))&&(me=ye);var Ie=J.get(fe);A(Ie),z(),$.current=Object($e.a)(function(){U.current===Ie&&me.focus()})}};if(k.sibling||!Q){var _;!Q||i==="inline"?_=j.current:_=Ar(Q);var le=rr(_,Y,Q,k.offset);pe(le)}else if(k.inlineTrigger)W(ae);else if(k.offset>0)W(ae,!0),z(),$.current=Object($e.a)(function(){q();var ie=Q.getAttribute("aria-controls"),fe=document.getElementById(ie),me=rr(fe,Y);pe(me)},5);else if(k.offset<0){var de=T(ae,!0),te=de[de.length-2],G=se.get(te);W(te,!1),pe(G)}}x==null||x(re)}}var Kr=Math.random().toFixed(5).toString().slice(2),ar=0;function Wr(i){var u=Object(vn.a)(i,{value:i}),g=Object(V.a)(u,2),E=g[0],j=g[1];return t.useEffect(function(){ar+=1;var R="".concat(Kr,"-").concat(ar);j("rc-menu-uuid-".concat(R))},[]),E}var ya=e("p8sG");function Lr(i){Promise.resolve().then(i)}var Wt="__RC_UTIL_PATH_SPLIT__",sr=function(u){return u.join(Wt)},xr=function(u){return u.split(Wt)},Lt="rc-menu-more";function $r(){var i=t.useState({}),u=Object(V.a)(i,2),g=u[1],E=Object(t.useRef)(new Map),j=Object(t.useRef)(new Map),R=t.useState([]),T=Object(V.a)(R,2),A=T[0],W=T[1],x=Object(t.useRef)(0),$=Object(t.useCallback)(function(J,q){var ne=sr(q);j.current.set(ne,J),E.current.set(J,ne),x.current+=1;var Q=x.current;Lr(function(){Q===x.current&&g({})})},[]),U=Object(t.useCallback)(function(J,q){var ne=sr(q);j.current.delete(ne),E.current.delete(J)},[]),z=Object(t.useCallback)(function(J){W(J)},[]),re=Object(t.useCallback)(function(J,q){var ne=E.current.get(J)||"",Q=xr(ne);return q&&A.includes(Q[0])&&Q.unshift(Lt),Q},[A]),H=Object(t.useCallback)(function(J,q){return J.some(function(ne){var Q=re(ne,!0);return Q.includes(q)})},[re]),Y=function(){var q=Object(an.a)(E.current.keys());return A.length&&q.push(Lt),q},se=Object(t.useCallback)(function(J){var q="".concat(E.current.get(J)).concat(Wt),ne=new Set;return Object(an.a)(j.current.keys()).forEach(function(Q){Q.startsWith(q)&&ne.add(j.current.get(Q))}),ne},[]);return{registerPath:$,unregisterPath:U,refreshOverflowKeys:z,isSubPathKey:H,getKeyPath:re,getKeys:Y,getSubPathKeys:se}}var Rt=[],Vr=function(u){var g,E,j=u.prefixCls,R=j===void 0?"rc-menu":j,T=u.style,A=u.className,W=u.tabIndex,x=W===void 0?0:W,$=u.children,U=u.direction,z=u.id,re=u.mode,H=re===void 0?"vertical":re,Y=u.inlineCollapsed,se=u.disabled,J=u.disabledOverflow,q=u.subMenuOpenDelay,ne=q===void 0?.1:q,Q=u.subMenuCloseDelay,ae=Q===void 0?.1:Q,k=u.forceSubMenuRender,pe=u.defaultOpenKeys,_=u.openKeys,le=u.activeKey,de=u.defaultActiveFirst,te=u.selectable,G=te===void 0?!0:te,ie=u.multiple,fe=ie===void 0?!1:ie,me=u.defaultSelectedKeys,ye=u.selectedKeys,Ie=u.onSelect,he=u.onDeselect,ge=u.inlineIndent,De=ge===void 0?24:ge,je=u.motion,Se=u.defaultMotions,Oe=u.triggerSubMenuAction,Ae=Oe===void 0?"hover":Oe,Ue=u.builtinPlacements,we=u.itemIcon,Me=u.expandIcon,xe=u.overflowedIndicator,Ne=xe===void 0?"...":xe,yn=u.getPopupContainer,Qe=u.onClick,Ve=u.onOpenChange,_e=u.onKeyDown,mn=u.openAnimation,fn=u.openTransitionName,Ee=Object(Ce.a)(u,["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName"]),We=Un($,Rt),Ge=t.useState(!1),Je=Object(V.a)(Ge,2),Nn=Je[0],Gn=Je[1],An=t.useRef(),Ze=Wr(z),bn=U==="rtl",en=t.useMemo(function(){return H==="inline"&&Y?["vertical",Y]:[H,!1]},[H,Y]),On=Object(V.a)(en,2),He=On[0],ke=On[1],Sn=t.useState(0),tn=Object(V.a)(Sn,2),ze=tn[0],Le=tn[1],Hn=ze>=We.length-1||He!=="horizontal"||J,Yn=Object(vn.a)(pe,{value:_,postState:function(Z){return Z||Rt}}),lt=Object(V.a)(Yn,2),pn=lt[0],on=lt[1],Xn=t.useState(pn),hn=Object(V.a)(Xn,2),rn=hn[0],Qn=hn[1],Cn=He==="inline",Zn=t.useRef(!1);t.useEffect(function(){Cn&&Qn(pn)},[pn]),t.useEffect(function(){if(!Zn.current){Zn.current=!0;return}if(Cn)on(rn);else{var ee=[];on(ee),Ve==null||Ve(ee)}},[Cn]);var nn=$r(),Rn=nn.registerPath,ce=nn.unregisterPath,be=nn.refreshOverflowKeys,Pe=nn.isSubPathKey,Ye=nn.getKeyPath,kn=nn.getKeys,jt=nn.getSubPathKeys,Jt=t.useMemo(function(){return{registerPath:Rn,unregisterPath:ce}},[Rn,ce]),zt=t.useMemo(function(){return{isSubPathKey:Pe}},[Pe]);t.useEffect(function(){be(Hn?Rt:We.slice(ze+1).map(function(ee){return ee.key}))},[ze,Hn]);var Ut=Object(vn.a)(le||de&&((g=We[0])===null||g===void 0?void 0:g.key),{value:le}),ut=Object(V.a)(Ut,2),Dt=ut[0],ht=ut[1],Pt=ot(function(ee){ht(ee)}),Gt=ot(function(){ht(void 0)}),Tt=Object(vn.a)(me||[],{value:ye,postState:function(Z){return Array.isArray(Z)?Z:Z==null?Rt:[Z]}}),Ft=Object(V.a)(Tt,2),dt=Ft[0],En=Ft[1],It=function(Z){if(!!G){var ve=Z.key,Be=dt.includes(ve),qe;Be?qe=dt.filter(function(_n){return _n!==ve}):fe?qe=[].concat(Object(an.a)(dt),[ve]):qe=[ve],En(qe);var xn=Object(oe.a)(Object(oe.a)({},Z),{},{selectedKeys:qe});Be?he==null||he(xn):Ie==null||Ie(xn)}},Nt=ot(function(ee){Qe==null||Qe(m(ee)),It(ee)}),vt=ot(function(ee,Z){var ve=pn.filter(function(qe){return qe!==ee});if(Z)ve.push(ee);else if(He!=="inline"){var Be=jt(ee);ve=ve.filter(function(qe){return!Be.has(qe)})}rt()(pn,ve)||(on(ve),Ve==null||Ve(ve))}),qn=ot(yn),gt=function(Z,ve){var Be=ve!=null?ve:!pn.includes(Z);vt(Z,Be)},yt=Br(He,Dt,bn,Ze,An,kn,Ye,ht,gt,_e);t.useEffect(function(){Gn(!0)},[]);var At=He!=="horizontal"||J?We:We.map(function(ee,Z){return t.createElement(d,{key:ee.key,overflowDisabled:Z>ze},ee)}),wt=t.createElement(p,Object(K.a)({id:z,ref:An,prefixCls:"".concat(R,"-overflow"),component:"ul",itemComponent:cn,className:Re()(R,"".concat(R,"-root"),"".concat(R,"-").concat(He),A,(E={},Object(ue.a)(E,"".concat(R,"-inline-collapsed"),ke),Object(ue.a)(E,"".concat(R,"-rtl"),bn),E)),dir:U,style:T,role:"menu",tabIndex:x,data:At,renderRawItem:function(Z){return Z},renderRawRest:function(Z){var ve=Z.length,Be=ve?We.slice(-ve):null;return t.createElement(qt,{eventKey:Lt,title:Ne,disabled:Hn,internalPopupClose:ve===0},Be)},maxCount:He!=="horizontal"||J?p.INVALIDATE:p.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(Z){Le(Z)},onKeyDown:yt},Ee));return t.createElement(X.Provider,{value:Ze},t.createElement(d,{prefixCls:R,mode:He,openKeys:pn,rtl:bn,disabled:se,motion:Nn?je:null,defaultMotions:Nn?Se:null,activeKey:Dt,onActive:Pt,onInactive:Gt,selectedKeys:dt,inlineIndent:De,subMenuOpenDelay:ne,subMenuCloseDelay:ae,forceSubMenuRender:k,builtinPlacements:Ue,triggerSubMenuAction:Ae,getPopupContainer:qn,itemIcon:we,expandIcon:Me,onItemClick:Nt,onOpenChange:vt},t.createElement(B.Provider,{value:zt},wt),t.createElement(v.Provider,{value:Jt},We)))},Jr=Vr,zr=function(u){var g=u.className,E=u.title,j=u.eventKey,R=u.children,T=Object(Ce.a)(u,["className","title","eventKey","children"]),A=t.useContext(N),W=A.prefixCls,x="".concat(W,"-item-group");return t.createElement("li",Object(K.a)({},T,{onClick:function(U){return U.stopPropagation()},className:Re()(x,g)}),t.createElement("div",{className:"".concat(x,"-title"),title:typeof E=="string"?E:void 0},E),t.createElement("ul",{className:"".concat(x,"-list")},R))};function Ur(i){var u=i.children,g=Object(Ce.a)(i,["children"]),E=M(g.eventKey),j=Un(u,E),R=h();return R?j:t.createElement(zr,g,j)}function Gr(i){var u=i.className,g=i.style,E=t.useContext(N),j=E.prefixCls,R=h();return R?null:t.createElement("li",{className:Re()("".concat(j,"-item-divider"),u),style:g})}var pt=Jr;pt.Item=cn,pt.SubMenu=qt,pt.ItemGroup=Ur,pt.Divider=Gr;var Hr=pt,Yr=e("eDIo");function Xr(i,u){var g=i.prefixCls,E=i.editable,j=i.locale,R=i.style;return!E||E.showAdd===!1?null:t.createElement("button",{ref:u,type:"button",className:"".concat(g,"-nav-add"),style:R,"aria-label":(j==null?void 0:j.addAriaLabel)||"Add tab",onClick:function(A){E.onEdit("add",{event:A})}},E.addIcon||"+")}var ir=t.forwardRef(Xr);function Qr(i,u){var g=i.prefixCls,E=i.id,j=i.tabs,R=i.locale,T=i.mobile,A=i.moreIcon,W=A===void 0?"More":A,x=i.moreTransitionName,$=i.style,U=i.className,z=i.editable,re=i.tabBarGutter,H=i.rtl,Y=i.onTabClick,se=Object(t.useState)(!1),J=Object(V.a)(se,2),q=J[0],ne=J[1],Q=Object(t.useState)(null),ae=Object(V.a)(Q,2),k=ae[0],pe=ae[1],_="".concat(E,"-more-popup"),le="".concat(g,"-dropdown"),de=k!==null?"".concat(_,"-").concat(k):null,te=R==null?void 0:R.dropdownAriaLabel,G=t.createElement(Hr,{onClick:function(ge){var De=ge.key,je=ge.domEvent;Y(De,je),ne(!1)},id:_,tabIndex:-1,role:"listbox","aria-activedescendant":de,selectedKeys:[k],"aria-label":te!==void 0?te:"expanded dropdown"},j.map(function(he){return t.createElement(cn,{key:he.key,id:"".concat(_,"-").concat(he.key),role:"option","aria-controls":E&&"".concat(E,"-panel-").concat(he.key),disabled:he.disabled},he.tab)}));function ie(he){for(var ge=j.filter(function(Ae){return!Ae.disabled}),De=ge.findIndex(function(Ae){return Ae.key===k})||0,je=ge.length,Se=0;Se<je;Se+=1){De=(De+he+je)%je;var Oe=ge[De];if(!Oe.disabled){pe(Oe.key);return}}}function fe(he){var ge=he.which;if(!q){[Fe.a.DOWN,Fe.a.SPACE,Fe.a.ENTER].includes(ge)&&(ne(!0),he.preventDefault());return}switch(ge){case Fe.a.UP:ie(-1),he.preventDefault();break;case Fe.a.DOWN:ie(1),he.preventDefault();break;case Fe.a.ESC:ne(!1);break;case Fe.a.SPACE:case Fe.a.ENTER:k!==null&&Y(k,he);break}}Object(t.useEffect)(function(){var he=document.getElementById(de);he&&he.scrollIntoView&&he.scrollIntoView(!1)},[k]),Object(t.useEffect)(function(){q||pe(null)},[q]);var me=Object(ue.a)({},H?"marginLeft":"marginRight",re);j.length||(me.visibility="hidden",me.order=1);var ye=Re()(Object(ue.a)({},"".concat(le,"-rtl"),H)),Ie=T?null:t.createElement(Yr.default,{prefixCls:le,overlay:G,trigger:["hover"],visible:q,transitionName:x,onVisibleChange:ne,overlayClassName:ye,mouseEnterDelay:.1,mouseLeaveDelay:.1},t.createElement("button",{type:"button",className:"".concat(g,"-nav-more"),style:me,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":_,id:"".concat(E,"-more"),"aria-expanded":q,onKeyDown:fe},W));return t.createElement("div",{className:Re()("".concat(g,"-nav-operations"),U),style:$,ref:u},Ie,t.createElement(ir,{prefixCls:g,locale:R,editable:z}))}var Zr=t.forwardRef(Qr),xt=Object(t.createContext)(null),kr=.1,or=.01,Et=20,lr=Math.pow(.995,Et);function qr(i,u){var g=Object(t.useState)(),E=Object(V.a)(g,2),j=E[0],R=E[1],T=Object(t.useState)(0),A=Object(V.a)(T,2),W=A[0],x=A[1],$=Object(t.useState)(0),U=Object(V.a)($,2),z=U[0],re=U[1],H=Object(t.useState)(),Y=Object(V.a)(H,2),se=Y[0],J=Y[1],q=Object(t.useRef)();function ne(le){var de=le.touches[0],te=de.screenX,G=de.screenY;R({x:te,y:G}),window.clearInterval(q.current)}function Q(le){if(!!j){le.preventDefault();var de=le.touches[0],te=de.screenX,G=de.screenY;R({x:te,y:G});var ie=te-j.x,fe=G-j.y;u(ie,fe);var me=Date.now();x(me),re(me-W),J({x:ie,y:fe})}}function ae(){if(!!j&&(R(null),J(null),se)){var le=se.x/z,de=se.y/z,te=Math.abs(le),G=Math.abs(de);if(Math.max(te,G)<kr)return;var ie=le,fe=de;q.current=window.setInterval(function(){if(Math.abs(ie)<or&&Math.abs(fe)<or){window.clearInterval(q.current);return}ie*=lr,fe*=lr,u(ie*Et,fe*Et)},Et)}}var k=Object(t.useRef)();function pe(le){var de=le.deltaX,te=le.deltaY,G=0,ie=Math.abs(de),fe=Math.abs(te);ie===fe?G=k.current==="x"?de:te:ie>fe?(G=de,k.current="x"):(G=te,k.current="y"),u(-G,-G)&&le.preventDefault()}var _=Object(t.useRef)(null);_.current={onTouchStart:ne,onTouchMove:Q,onTouchEnd:ae,onWheel:pe},t.useEffect(function(){function le(ie){_.current.onTouchStart(ie)}function de(ie){_.current.onTouchMove(ie)}function te(ie){_.current.onTouchEnd(ie)}function G(ie){_.current.onWheel(ie)}return document.addEventListener("touchmove",de,{passive:!1}),document.addEventListener("touchend",te,{passive:!1}),i.current.addEventListener("touchstart",le,{passive:!1}),i.current.addEventListener("wheel",G),function(){document.removeEventListener("touchmove",de),document.removeEventListener("touchend",te)}},[])}function _r(){var i=Object(t.useRef)(new Map);function u(E){return i.current.has(E)||i.current.set(E,t.createRef()),i.current.get(E)}function g(E){i.current.delete(E)}return[u,g]}function ur(i,u){var g=t.useRef(i),E=t.useState({}),j=Object(V.a)(E,2),R=j[1];function T(A){var W=typeof A=="function"?A(g.current):A;W!==g.current&&u(W,g.current),g.current=W,R({})}return[g.current,T]}var dr=function(u){var g=u.position,E=u.prefixCls,j=u.extra;if(!j)return null;var R,T=j;return g==="right"&&(R=T.right||!T.left&&T||null),g==="left"&&(R=T.left||null),R?t.createElement("div",{className:"".concat(E,"-extra-content")},R):null};function ea(i,u){var g,E=t.useContext(xt),j=E.prefixCls,R=E.tabs,T=i.className,A=i.style,W=i.id,x=i.animated,$=i.activeKey,U=i.rtl,z=i.extra,re=i.editable,H=i.locale,Y=i.tabPosition,se=i.tabBarGutter,J=i.children,q=i.onTabClick,ne=i.onTabScroll,Q=Object(t.useRef)(),ae=Object(t.useRef)(),k=Object(t.useRef)(),pe=Object(t.useRef)(),_=_r(),le=Object(V.a)(_,2),de=le[0],te=le[1],G=Y==="top"||Y==="bottom",ie=ur(0,function(ee,Z){G&&ne&&ne({direction:ee>Z?"left":"right"})}),fe=Object(V.a)(ie,2),me=fe[0],ye=fe[1],Ie=ur(0,function(ee,Z){!G&&ne&&ne({direction:ee>Z?"top":"bottom"})}),he=Object(V.a)(Ie,2),ge=he[0],De=he[1],je=Object(t.useState)(0),Se=Object(V.a)(je,2),Oe=Se[0],Ae=Se[1],Ue=Object(t.useState)(0),we=Object(V.a)(Ue,2),Me=we[0],xe=we[1],Ne=Object(t.useState)(0),yn=Object(V.a)(Ne,2),Qe=yn[0],Ve=yn[1],_e=Object(t.useState)(0),mn=Object(V.a)(_e,2),fn=mn[0],Ee=mn[1],We=Object(t.useState)(null),Ge=Object(V.a)(We,2),Je=Ge[0],Nn=Ge[1],Gn=Object(t.useState)(null),An=Object(V.a)(Gn,2),Ze=An[0],bn=An[1],en=Object(t.useState)(0),On=Object(V.a)(en,2),He=On[0],ke=On[1],Sn=Object(t.useState)(0),tn=Object(V.a)(Sn,2),ze=tn[0],Le=tn[1],Hn=gn(new Map),Yn=Object(V.a)(Hn,2),lt=Yn[0],pn=Yn[1],on=ct(R,lt,Oe),Xn="".concat(j,"-nav-operations-hidden"),hn=0,rn=0;G?U?(hn=0,rn=Math.max(0,Oe-Je)):(hn=Math.min(0,Je-Oe),rn=0):(hn=Math.min(0,Ze-Me),rn=0);function Qn(ee){return ee<hn?hn:ee>rn?rn:ee}var Cn=Object(t.useRef)(),Zn=Object(t.useState)(),nn=Object(V.a)(Zn,2),Rn=nn[0],ce=nn[1];function be(){ce(Date.now())}function Pe(){window.clearTimeout(Cn.current)}qr(Q,function(ee,Z){function ve(Be,qe){Be(function(xn){var _n=Qn(xn+qe);return _n})}if(G){if(Je>=Oe)return!1;ve(ye,ee)}else{if(Ze>=Me)return!1;ve(De,Z)}return Pe(),be(),!0}),Object(t.useEffect)(function(){return Pe(),Rn&&(Cn.current=window.setTimeout(function(){ce(0)},100)),Pe},[Rn]);function Ye(){var ee=arguments.length>0&&arguments[0]!==void 0?arguments[0]:$,Z=on.get(ee)||{width:0,height:0,left:0,right:0,top:0};if(G){var ve=me;U?Z.right<me?ve=Z.right:Z.right+Z.width>me+Je&&(ve=Z.right+Z.width-Je):Z.left<-me?ve=-Z.left:Z.left+Z.width>-me+Je&&(ve=-(Z.left+Z.width-Je)),De(0),ye(Qn(ve))}else{var Be=ge;Z.top<-ge?Be=-Z.top:Z.top+Z.height>-ge+Ze&&(Be=-(Z.top+Z.height-Ze)),ye(0),De(Qn(Be))}}var kn=mt(on,{width:Je,height:Ze,left:me,top:ge},{width:Qe,height:fn},{width:He,height:ze},Object(oe.a)(Object(oe.a)({},i),{},{tabs:R})),jt=Object(V.a)(kn,2),Jt=jt[0],zt=jt[1],Ut=R.map(function(ee){var Z=ee.key;return t.createElement(Mn,{id:W,prefixCls:j,key:Z,rtl:U,tab:ee,closable:ee.closable,editable:re,active:Z===$,tabPosition:Y,tabBarGutter:se,renderWrapper:J,removeAriaLabel:H==null?void 0:H.removeAriaLabel,ref:de(Z),onClick:function(Be){q(Z,Be)},onRemove:function(){te(Z)},onFocus:function(){Ye(Z),be(),U||(Q.current.scrollLeft=0),Q.current.scrollTop=0}})}),ut=Tn(function(){var ee,Z,ve,Be,qe,xn,_n,Ht,Yt,la=((ee=Q.current)===null||ee===void 0?void 0:ee.offsetWidth)||0,ua=((Z=Q.current)===null||Z===void 0?void 0:Z.offsetHeight)||0,hr=((ve=pe.current)===null||ve===void 0?void 0:ve.offsetWidth)||0,vr=((Be=pe.current)===null||Be===void 0?void 0:Be.offsetHeight)||0,da=((qe=k.current)===null||qe===void 0?void 0:qe.offsetWidth)||0,ca=((xn=k.current)===null||xn===void 0?void 0:xn.offsetHeight)||0;Nn(la),bn(ua),ke(hr),Le(vr);var gr=(((_n=ae.current)===null||_n===void 0?void 0:_n.offsetWidth)||0)-hr,yr=(((Ht=ae.current)===null||Ht===void 0?void 0:Ht.offsetHeight)||0)-vr;Ae(gr),xe(yr);var br=(Yt=k.current)===null||Yt===void 0?void 0:Yt.className.includes(Xn);Ve(gr-(br?0:da)),Ee(yr-(br?0:ca)),pn(function(){var Or=new Map;return R.forEach(function(ma){var Sr=ma.key,bt=de(Sr).current;bt&&Or.set(Sr,{width:bt.offsetWidth,height:bt.offsetHeight,left:bt.offsetLeft,top:bt.offsetTop})}),Or})}),Dt=R.slice(0,Jt),ht=R.slice(zt+1),Pt=[].concat(Object(an.a)(Dt),Object(an.a)(ht)),Gt=Object(t.useState)(),Tt=Object(V.a)(Gt,2),Ft=Tt[0],dt=Tt[1],En=on.get($),It=Object(t.useRef)();function Nt(){$e.a.cancel(It.current)}Object(t.useEffect)(function(){var ee={};return En&&(G?(U?ee.right=En.right:ee.left=En.left,ee.width=En.width):(ee.top=En.top,ee.height=En.height)),Nt(),It.current=Object($e.a)(function(){dt(ee)}),Nt},[En,G,U]),Object(t.useEffect)(function(){Ye()},[$,En,on,G]),Object(t.useEffect)(function(){ut()},[U,se,$,R.map(function(ee){return ee.key}).join("_")]);var vt=!!Pt.length,qn="".concat(j,"-nav-wrap"),gt,yt,At,wt;return G?U?(yt=me>0,gt=me+Je<Oe):(gt=me<0,yt=-me+Je<Oe):(At=ge<0,wt=-ge+Ze<Me),t.createElement("div",{ref:u,role:"tablist",className:Re()("".concat(j,"-nav"),T),style:A,onKeyDown:function(){be()}},t.createElement(dr,{position:"left",extra:z,prefixCls:j}),t.createElement(wn.default,{onResize:ut},t.createElement("div",{className:Re()(qn,(g={},Object(ue.a)(g,"".concat(qn,"-ping-left"),gt),Object(ue.a)(g,"".concat(qn,"-ping-right"),yt),Object(ue.a)(g,"".concat(qn,"-ping-top"),At),Object(ue.a)(g,"".concat(qn,"-ping-bottom"),wt),g)),ref:Q},t.createElement(wn.default,{onResize:ut},t.createElement("div",{ref:ae,className:"".concat(j,"-nav-list"),style:{transform:"translate(".concat(me,"px, ").concat(ge,"px)"),transition:Rn?"none":void 0}},Ut,t.createElement(ir,{ref:pe,prefixCls:j,locale:H,editable:re,style:{visibility:vt?"hidden":null}}),t.createElement("div",{className:Re()("".concat(j,"-ink-bar"),Object(ue.a)({},"".concat(j,"-ink-bar-animated"),x.inkBar)),style:Ft}))))),t.createElement(Zr,Object(K.a)({},i,{ref:k,prefixCls:j,tabs:Pt,className:!vt&&Xn})),t.createElement(dr,{position:"right",extra:z,prefixCls:j}))}var cr=t.forwardRef(ea);function na(i){var u=i.id,g=i.activeKey,E=i.animated,j=i.tabPosition,R=i.rtl,T=i.destroyInactiveTabPane,A=t.useContext(xt),W=A.prefixCls,x=A.tabs,$=E.tabPane,U=x.findIndex(function(z){return z.key===g});return t.createElement("div",{className:Re()("".concat(W,"-content-holder"))},t.createElement("div",{className:Re()("".concat(W,"-content"),"".concat(W,"-content-").concat(j),Object(ue.a)({},"".concat(W,"-content-animated"),$)),style:U&&$?Object(ue.a)({},R?"marginRight":"marginLeft","-".concat(U,"00%")):null},x.map(function(z){return t.cloneElement(z.node,{key:z.key,prefixCls:W,tabKey:z.key,id:u,animated:$,active:z.key===g,destroyInactiveTabPane:T})})))}function mr(i){var u=i.prefixCls,g=i.forceRender,E=i.className,j=i.style,R=i.id,T=i.active,A=i.animated,W=i.destroyInactiveTabPane,x=i.tabKey,$=i.children,U=t.useState(g),z=Object(V.a)(U,2),re=z[0],H=z[1];t.useEffect(function(){T?H(!0):W&&H(!1)},[T,W]);var Y={};return T||(A?(Y.visibility="hidden",Y.height=0,Y.overflowY="hidden"):Y.display="none"),t.createElement("div",{id:R&&"".concat(R,"-panel-").concat(x),role:"tabpanel",tabIndex:T?0:-1,"aria-labelledby":R&&"".concat(R,"-tab-").concat(x),"aria-hidden":!T,style:Object(oe.a)(Object(oe.a)({},Y),j),className:Re()("".concat(u,"-tabpane"),T&&"".concat(u,"-tabpane-active"),E)},(T||re||g)&&$)}var fr=0;function ta(i){return Object(Dn.a)(i).map(function(u){if(t.isValidElement(u)){var g=u.key!==void 0?String(u.key):void 0;return Object(oe.a)(Object(oe.a)({key:g},u.props),{},{node:u})}return null}).filter(function(u){return u})}function ra(i,u){var g,E=i.id,j=i.prefixCls,R=j===void 0?"rc-tabs":j,T=i.className,A=i.children,W=i.direction,x=i.activeKey,$=i.defaultActiveKey,U=i.editable,z=i.animated,re=z===void 0?{inkBar:!0,tabPane:!1}:z,H=i.tabPosition,Y=H===void 0?"top":H,se=i.tabBarGutter,J=i.tabBarStyle,q=i.tabBarExtraContent,ne=i.locale,Q=i.moreIcon,ae=i.moreTransitionName,k=i.destroyInactiveTabPane,pe=i.renderTabBar,_=i.onChange,le=i.onTabClick,de=i.onTabScroll,te=Object(Ce.a)(i,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),G=ta(A),ie=W==="rtl",fe;re===!1?fe={inkBar:!1,tabPane:!1}:re===!0?fe={inkBar:!0,tabPane:!0}:fe=Object(oe.a)({inkBar:!0,tabPane:!1},Object(Te.a)(re)==="object"?re:{});var me=Object(t.useState)(!1),ye=Object(V.a)(me,2),Ie=ye[0],he=ye[1];Object(t.useEffect)(function(){he(Object(Pn.a)())},[]);var ge=Object(vn.a)(function(){var Ee;return(Ee=G[0])===null||Ee===void 0?void 0:Ee.key},{value:x,defaultValue:$}),De=Object(V.a)(ge,2),je=De[0],Se=De[1],Oe=Object(t.useState)(function(){return G.findIndex(function(Ee){return Ee.key===je})}),Ae=Object(V.a)(Oe,2),Ue=Ae[0],we=Ae[1];Object(t.useEffect)(function(){var Ee=G.findIndex(function(Ge){return Ge.key===je});if(Ee===-1){var We;Ee=Math.max(0,Math.min(Ue,G.length-1)),Se((We=G[Ee])===null||We===void 0?void 0:We.key)}we(Ee)},[G.map(function(Ee){return Ee.key}).join("_"),je,Ue]);var Me=Object(vn.a)(null,{value:E}),xe=Object(V.a)(Me,2),Ne=xe[0],yn=xe[1],Qe=Y;Ie&&!["left","right"].includes(Y)&&(Qe="top"),Object(t.useEffect)(function(){E||(yn("rc-tabs-".concat(fr)),fr+=1)},[]);function Ve(Ee,We){le==null||le(Ee,We),Se(Ee),_==null||_(Ee)}var _e={id:Ne,activeKey:je,animated:fe,tabPosition:Qe,rtl:ie,mobile:Ie},mn,fn=Object(oe.a)(Object(oe.a)({},_e),{},{editable:U,locale:ne,moreIcon:Q,moreTransitionName:ae,tabBarGutter:se,onTabClick:Ve,onTabScroll:de,extra:q,style:J,panes:A});return pe?mn=pe(fn,cr):mn=t.createElement(cr,fn),t.createElement(xt.Provider,{value:{tabs:G,prefixCls:R}},t.createElement("div",Object(K.a)({ref:u,id:E,className:Re()(R,"".concat(R,"-").concat(Qe),(g={},Object(ue.a)(g,"".concat(R,"-mobile"),Ie),Object(ue.a)(g,"".concat(R,"-editable"),U),Object(ue.a)(g,"".concat(R,"-rtl"),ie),g),T)},te),mn,t.createElement(na,Object(K.a)({destroyInactiveTabPane:k},_e,{animated:fe}))))}var pr=t.forwardRef(ra);pr.TabPane=mr;var aa=pr,sa=aa,$t=e("MZF8"),sn=e("dEAq"),ia=e("ZpkN"),ba=e("TIsu");function Vt(i,u){var g,E=(g=i.match(/\.(\w+)$/))===null||g===void 0?void 0:g[1];return E||(E=u.tsx?"tsx":"jsx"),E}var oa=i=>{var u,g,E,j=Object(t.useRef)(),R=Object(t.useContext)(sn.context),T=R.locale,A=Object(sn.useLocaleProps)(T,i),W=Object(sn.useDemoUrl)(A.identifier),x=A.demoUrl||W,$=($t.a===null||$t.a===void 0?void 0:$t.a.location.hash)==="#".concat(A.identifier),U=Object.keys(A.sources).length===1,z=Object(sn.useCodeSandbox)((u=A.hideActions)!==null&&u!==void 0&&u.includes("CSB")?null:A),re=Object(sn.useRiddle)((g=A.hideActions)!==null&&g!==void 0&&g.includes("RIDDLE")?null:A),H=Object(sn.useMotions)(A.motions||[],j.current),Y=Object(L.default)(H,2),se=Y[0],J=Y[1],q=Object(sn.useCopy)(),ne=Object(L.default)(q,2),Q=ne[0],ae=ne[1],k=Object(t.useState)("_"),pe=Object(L.default)(k,2),_=pe[0],le=pe[1],de=Object(t.useState)(Vt(_,A.sources[_])),te=Object(L.default)(de,2),G=te[0],ie=te[1],fe=Object(t.useState)(Boolean(A.defaultShowCode)),me=Object(L.default)(fe,2),ye=me[0],Ie=me[1],he=Object(t.useState)(Math.random()),ge=Object(L.default)(he,2),De=ge[0],je=ge[1],Se=A.sources[_][G]||A.sources[_].content,Oe=Object(sn.useTSPlaygroundUrl)(T,Se),Ae=Object(t.useRef)(),Ue=Object(sn.usePrefersColor)(),we=Object(L.default)(Ue,1),Me=we[0];Object(t.useEffect)(()=>{je(Math.random())},[Me]);function xe(Ne){le(Ne),ie(Vt(Ne,A.sources[Ne]))}return y.a.createElement("div",{style:A.style,className:[A.className,"__dumi-default-previewer",$?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:A.identifier,"data-debug":A.debug||void 0,"data-iframe":A.iframe||void 0},A.iframe&&y.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),y.a.createElement("div",{ref:j,className:"__dumi-default-previewer-demo",style:{transform:A.transform?"translate(0, 0)":void 0,padding:A.compact||A.iframe&&A.compact!==!1?"0":void 0,background:A.background}},A.iframe?y.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(A.iframe).replace(/(\d)$/,"$1px")},key:De,src:x,ref:Ae}):A.children),y.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":A.title},A.title&&y.a.createElement(sn.AnchorLink,{to:"#".concat(A.identifier)},A.title),A.description&&y.a.createElement("div",{dangerouslySetInnerHTML:{__html:A.description}})),y.a.createElement("div",{className:"__dumi-default-previewer-actions"},z&&y.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:z}),re&&y.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:re}),A.motions&&y.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:J,onClick:()=>se()}),A.iframe&&y.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>je(Math.random())}),!((E=A.hideActions)!==null&&E!==void 0&&E.includes("EXTERNAL"))&&y.a.createElement(sn.Link,{target:"_blank",to:x},y.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),y.a.createElement("span",null),y.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":ae,onClick:()=>Q(Se)}),G==="tsx"&&ye&&y.a.createElement(sn.Link,{target:"_blank",to:Oe},y.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),y.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(ye?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>Ie(!ye)})),ye&&y.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!U&&y.a.createElement(sa,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:_,onChange:xe},Object.keys(A.sources).map(Ne=>y.a.createElement(mr,{tab:Ne==="_"?"index.".concat(Vt(Ne,A.sources[Ne])):Ne,key:Ne}))),y.a.createElement("div",{className:"__dumi-default-previewer-source"},y.a.createElement(ia.a,{code:Se,lang:G,showCopy:!1}))))},Oa=ln.default=oa},"80pN":function(jn,ln,e){"use strict";(function(L){/** @license React v16.14.0
* react-dom-test-utils.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var t=e("MgzW"),y=e("q1tI"),K=e("i8i4"),ue=e("QCnb");function V(n){for(var a="https://reactjs.org/docs/error-decoder.html?invariant="+n,r=1;r<arguments.length;r++)a+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+n+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Te=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Te.hasOwnProperty("ReactCurrentDispatcher")||(Te.ReactCurrentDispatcher={current:null}),Te.hasOwnProperty("ReactCurrentBatchConfig")||(Te.ReactCurrentBatchConfig={suspense:null});function Ce(n){var a=n,r=n;if(n.alternate)for(;a.return;)a=a.return;else{n=a;do a=n,(a.effectTag&1026)!=0&&(r=a.return),n=a.return;while(n)}return a.tag===3?r:null}function oe(n){if(Ce(n)!==n)throw Error(V(188))}function $n(n){var a=n.alternate;if(!a){if(a=Ce(n),a===null)throw Error(V(188));return a!==n?null:n}for(var r=n,v=a;;){var h=r.return;if(h===null)break;var P=h.alternate;if(P===null){if(v=h.return,v!==null){r=v;continue}break}if(h.child===P.child){for(P=h.child;P;){if(P===r)return oe(h),n;if(P===v)return oe(h),a;P=P.sibling}throw Error(V(188))}if(r.return!==v.return)r=h,v=P;else{for(var M=!1,B=h.child;B;){if(B===r){M=!0,r=h,v=P;break}if(B===v){M=!0,v=h,r=P;break}B=B.sibling}if(!M){for(B=P.child;B;){if(B===r){M=!0,r=P,v=h;break}if(B===v){M=!0,v=P,r=h;break}B=B.sibling}if(!M)throw Error(V(189))}}if(r.alternate!==v)throw Error(V(190))}if(r.tag!==3)throw Error(V(188));return r.stateNode.current===r?n:a}function Re(){return!0}function Dn(){return!1}function Pn(n,a,r,v){this.dispatchConfig=n,this._targetInst=a,this.nativeEvent=r,n=this.constructor.Interface;for(var h in n)n.hasOwnProperty(h)&&((a=n[h])?this[h]=a(r):h==="target"?this.target=v:this[h]=r[h]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Re:Dn,this.isPropagationStopped=Dn,this}t(Pn.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Re)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Re)},persist:function(){this.isPersistent=Re},isPersistent:Dn,destructor:function(){var n=this.constructor.Interface,a;for(a in n)this[a]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=Dn,this._dispatchInstances=this._dispatchListeners=null}}),Pn.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},Pn.extend=function(n){function a(){}function r(){return v.apply(this,arguments)}var v=this;a.prototype=v.prototype;var h=new a;return t(h,r.prototype),r.prototype=h,r.prototype.constructor=r,r.Interface=t({},v.Interface,n),r.extend=v.extend,$e(r),r},$e(Pn);function vn(n,a,r,v){if(this.eventPool.length){var h=this.eventPool.pop();return this.call(h,n,a,r,v),h}return new this(n,a,r,v)}function an(n){if(!(n instanceof this))throw Error(V(279));n.destructor(),10>this.eventPool.length&&this.eventPool.push(n)}function $e(n){n.eventPool=[],n.getPooled=vn,n.release=an}var wn=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined");function Tn(n,a){var r={};return r[n.toLowerCase()]=a.toLowerCase(),r["Webkit"+n]="webkit"+a,r["Moz"+n]="moz"+a,r}var gn={animationend:Tn("Animation","AnimationEnd"),animationiteration:Tn("Animation","AnimationIteration"),animationstart:Tn("Animation","AnimationStart"),transitionend:Tn("Transition","TransitionEnd")},Fe={},et={};wn&&(et=document.createElement("div").style,"AnimationEvent"in window||(delete gn.animationend.animation,delete gn.animationiteration.animation,delete gn.animationstart.animation),"TransitionEvent"in window||delete gn.transitionend.transition);function Mn(n){if(Fe[n])return Fe[n];if(!gn[n])return n;var a=gn[n],r;for(r in a)if(a.hasOwnProperty(r)&&r in et)return Fe[n]=a[r];return n}var nt=Mn("animationend"),ct=Mn("animationiteration"),tt=Mn("animationstart"),mt=Mn("transitionend"),Bn=null;function rt(n){if(Bn===null)try{var a=("require"+Math.random()).slice(0,7);Bn=(L&&L[a])("timers").setImmediate}catch(r){Bn=function(v){var h=new MessageChannel;h.port1.onmessage=v,h.port2.postMessage(void 0)}}return Bn(n)}var Vn=K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,ft=Vn[11],Kn=Vn[12],Wn=K.unstable_batchedUpdates,Jn=Te.IsSomeRendererActing,at=typeof ue.unstable_flushAllWithoutAsserting=="function",Fn=ue.unstable_flushAllWithoutAsserting||function(){for(var n=!1;ft();)n=!0;return n};function st(n){try{Fn(),rt(function(){Fn()?st(n):n()})}catch(a){n(a)}}var un=0,it=!1,F=K.findDOMNode,D=K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,I=D[0],c=D[4],s=D[5],p=D[6],b=D[7],O=D[8],o=D[9],f=D[10];function l(){}function w(n,a){if(!n)return[];if(n=$n(n),!n)return[];for(var r=n,v=[];;){if(r.tag===5||r.tag===6||r.tag===1||r.tag===0){var h=r.stateNode;a(h)&&v.push(h)}if(r.child)r.child.return=r,r=r.child;else{if(r===n)return v;for(;!r.sibling;){if(!r.return||r.return===n)return v;r=r.return}r.sibling.return=r.return,r=r.sibling}}}function N(n,a){if(n&&!n._reactInternalFiber){var r=""+n;throw n=Array.isArray(n)?"an array":n&&n.nodeType===1&&n.tagName?"a DOM node":r==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":r,Error(V(286,a,n))}}var S={renderIntoDocument:function(n){var a=document.createElement("div");return K.render(n,a)},isElement:function(n){return y.isValidElement(n)},isElementOfType:function(n,a){return y.isValidElement(n)&&n.type===a},isDOMComponent:function(n){return!(!n||n.nodeType!==1||!n.tagName)},isDOMComponentElement:function(n){return!!(n&&y.isValidElement(n)&&n.tagName)},isCompositeComponent:function(n){return S.isDOMComponent(n)?!1:n!=null&&typeof n.render=="function"&&typeof n.setState=="function"},isCompositeComponentWithType:function(n,a){return S.isCompositeComponent(n)?n._reactInternalFiber.type===a:!1},findAllInRenderedTree:function(n,a){return N(n,"findAllInRenderedTree"),n?w(n._reactInternalFiber,a):[]},scryRenderedDOMComponentsWithClass:function(n,a){return N(n,"scryRenderedDOMComponentsWithClass"),S.findAllInRenderedTree(n,function(r){if(S.isDOMComponent(r)){var v=r.className;typeof v!="string"&&(v=r.getAttribute("class")||"");var h=v.split(/\s+/);if(!Array.isArray(a)){if(a===void 0)throw Error(V(11));a=a.split(/\s+/)}return a.every(function(P){return h.indexOf(P)!==-1})}return!1})},findRenderedDOMComponentWithClass:function(n,a){if(N(n,"findRenderedDOMComponentWithClass"),n=S.scryRenderedDOMComponentsWithClass(n,a),n.length!==1)throw Error("Did not find exactly one match (found: "+n.length+") for class:"+a);return n[0]},scryRenderedDOMComponentsWithTag:function(n,a){return N(n,"scryRenderedDOMComponentsWithTag"),S.findAllInRenderedTree(n,function(r){return S.isDOMComponent(r)&&r.tagName.toUpperCase()===a.toUpperCase()})},findRenderedDOMComponentWithTag:function(n,a){if(N(n,"findRenderedDOMComponentWithTag"),n=S.scryRenderedDOMComponentsWithTag(n,a),n.length!==1)throw Error("Did not find exactly one match (found: "+n.length+") for tag:"+a);return n[0]},scryRenderedComponentsWithType:function(n,a){return N(n,"scryRenderedComponentsWithType"),S.findAllInRenderedTree(n,function(r){return S.isCompositeComponentWithType(r,a)})},findRenderedComponentWithType:function(n,a){if(N(n,"findRenderedComponentWithType"),n=S.scryRenderedComponentsWithType(n,a),n.length!==1)throw Error("Did not find exactly one match (found: "+n.length+") for componentType:"+a);return n[0]},mockComponent:function(n,a){return a=a||n.mockTagName||"div",n.prototype.render.mockImplementation(function(){return y.createElement(a,null,this.props.children)}),this},nativeTouchData:function(n,a){return{touches:[{pageX:n,pageY:a}]}},Simulate:null,SimulateNative:{},act:function(n){function a(){un--,Jn.current=r,Kn.current=v}it===!1&&(it=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected.")),un++;var r=Jn.current,v=Kn.current;Jn.current=!0,Kn.current=!0;try{var h=Wn(n)}catch(P){throw a(),P}if(h!==null&&typeof h=="object"&&typeof h.then=="function")return{then:function(P,M){h.then(function(){1<un||at===!0&&r===!0?(a(),P()):st(function(B){a(),B?M(B):P()})},function(B){a(),M(B)})}};try{un!==1||at!==!1&&r!==!1||Fn(),a()}catch(P){throw a(),P}return{then:function(P){P()}}}};function d(n){return function(a,r){if(y.isValidElement(a))throw Error(V(228));if(S.isCompositeComponent(a))throw Error(V(229));var v=c[n],h=new l;h.target=a,h.type=n.toLowerCase();var P=I(a),M=new Pn(v,P,h,a);M.persist(),t(M,r),v.phasedRegistrationNames?s(M):p(M),K.unstable_batchedUpdates(function(){b(a),f(M)}),O()}}S.Simulate={};for(var C in c)S.Simulate[C]=d(C);function m(n,a){return function(r,v){var h=new l(n);t(h,v),S.isDOMComponent(r)?(r=F(r),h.target=r,o(a,1,document,h)):r.tagName&&(h.target=r,o(a,1,document,h))}}[["abort","abort"],[nt,"animationEnd"],[ct,"animationIteration"],[tt,"animationStart"],["blur","blur"],["canplaythrough","canPlayThrough"],["canplay","canPlay"],["cancel","cancel"],["change","change"],["click","click"],["close","close"],["compositionend","compositionEnd"],["compositionstart","compositionStart"],["compositionupdate","compositionUpdate"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["dragstart","dragStart"],["drag","drag"],["drop","drop"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["focus","focus"],["input","input"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["loadstart","loadStart"],["loadstart","loadStart"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["mousedown","mouseDown"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["playing","playing"],["progress","progress"],["ratechange","rateChange"],["scroll","scroll"],["seeked","seeked"],["seeking","seeking"],["selectionchange","selectionChange"],["stalled","stalled"],["suspend","suspend"],["textInput","textInput"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchmove","touchMove"],["touchstart","touchStart"],[mt,"transitionEnd"],["volumechange","volumeChange"],["waiting","waiting"],["wheel","wheel"]].forEach(function(n){var a=n[1];S.SimulateNative[a]=m(a,n[0])}),L.exports=S.default||S}).call(this,e("hOG+")(jn))},JjdP:function(jn,ln,e){"use strict";e.r(ln);var L=e("9og8"),t=e("WmNS"),y=e.n(t),K=e("LtsZ"),ue=`import React, { useRef } from 'react';
import { CardList, Search, TableContainer, useTable } from 'card-render';
import {
  PlusOutlined,
  EllipsisOutlined,
  SettingOutlined,
  EditOutlined,
} from '@ant-design/icons';
import { Button } from 'antd';
import request from 'umi-request';

// \u53EF\u4EE5\u4F7F\u7528schema\u7F16\u8F91\u5668\u914D\u7F6E https://form-render.github.io/schema-generator/
const schema = {
  type: 'object',
  properties: {
    created_at: {
      title: '\u521B\u5EFA\u65F6\u95F4',
      type: 'string',
      format: 'date',
      width: '25%',
    },
  },
};

// \u914D\u7F6E\u5B8C\u5168\u900F\u4F20antd table
const columns = [
  {
    title: '\u6807\u9898',
    dataIndex: 'title',
  },
  {
    title: '\u72B6\u6001',
    dataIndex: 'state',
    enum: {
      open: '\u672A\u89E3\u51B3',
      closed: '\u5DF2\u89E3\u51B3',
    },
  },
  {
    title: '\u521B\u5EFA\u65F6\u95F4',
    key: 'since',
    dataIndex: 'created_at',
    valueType: 'date',
  },
  {
    title: '\u64CD\u4F5C',
    render: row => (
      <a
        href="https://x-render.gitee.io/form-render/"
        target="_blank"
        rel="noopener noreferrer"
      >
        \u67E5\u770B
      </a>
    ),
  },
];

const searchApi = params => {
  params.pageSize = 2;
  return request
    .get(
      'https://www.fastmock.site/mock/62ab96ff94bc013592db1f67667e9c76/getTableList/api/getCardList',
      { params }
    )
    .then(res => {
      console.log('response:', res);
      if (res && res.data) {
        return {
          rows: res.data,
          total: res.data.length,
          pageSize: res.data.pageSize || 2,
        }; // \u6CE8\u610F\u4E00\u5B9A\u8981\u8FD4\u56DE rows \u548C total
      }
    })
    .catch(e => console.log('Oops, error', e));
};

const searchArr = [
  {
    name: '\u6211\u7684\u6570\u636E',
    api: searchApi,
  },
  {
    name: '\u5168\u90E8\u6570\u636E',
    api: searchApi,
  },
];

// const cardRenderOptions = {
//   type: 'default',
//   header: {
//     title: 'title',
//     extra: (card, index) => (
//       <a
//         onClick={e => {
//           e.stopPropagation();
//         }}
//       >
//         action
//       </a>
//     ),
//   },
//   content: {
//     description: 'description',
//     list: ['creator', 'createTime'],
//     remark: 'remark',
//   },
// };

const cardRenderOptions = {
  type: 'image',
  cover: 'imgUrl',
  // cover: {
  //   dataIndex: 'imgUrl',
  //   width: 100,
  //   height: 100
  // },
  header: {
    title: (card, index) => card.title,
  },
  content: {
    description: (card, index) => card.description,
    // list: ['creator', 'createTime'],
    list: [
      {
        title: '\u521B\u5EFA\u4EBA',
        render: card => card.creator,
      },
      {
        title: '\u521B\u5EFA\u65F6\u95F4',
        dataIndex: 'createTime',
      },
    ],
    remark: 'remark',
  },
  footer: (card, idx) => [
    <SettingOutlined key="setting" />,
    <EditOutlined key="edit" />,
    <EllipsisOutlined key="ellipsis" />,
  ],
};

const Demo = () => {
  const tableRef = useRef();
  return (
    <div style={{ background: 'rgb(245,245,245)' }}>
      <TableContainer ref={tableRef} searchApi={searchArr}>
        <Search schema={schema} />
        <CardList
          // onCardClick={(item, idx) => alert(JSON.stringify(item))}
          cardRender={cardRenderOptions}
          paginationOptions={{ size: 'small' }}
          toolbarRender={() => [
            <Button
              key="primary"
              type="primary"
              onClick={() => alert('table-render\uFF01')}
            >
              <PlusOutlined />
              \u521B\u5EFA
            </Button>,
          ]}
          toolbarAction
        />
      </TableContainer>
    </div>
  );
};

export default Demo;`,V=`import { get, set, cloneDeep } from 'lodash-es';

// window.log1 = value => {
//   console.log('%ccommon:', 'color: #00A7F7; font-weight: 500;', value);
// };

// window.log2 = value => {
//   console.log('%cwarning:', 'color: #f50; font-weight: 500;', value);
// };

// window.log3 = value => {
//   console.log('%csuccess:', 'color: #87d068; font-weight: 500;', value);
// };

// window.log4 = value => {
//   console.log('%cspecial:', 'color: #722ed1; font-weight: 500;', value);
// };

export function isUrl(string) {
  const protocolRE = /^(?:\\w+:)?\\/\\/(\\S+)$/;
  // const domainRE = /^[^\\s\\.]+\\.\\S{2,}$/;
  if (typeof string !== 'string') return false;
  return protocolRE.test(string);
}

export function isCheckBoxType(schema, readOnly) {
  if (readOnly) return false;
  if (schema.widget === 'checkbox') return true;
  if (schema && schema.type === 'boolean') {
    if (schema.enum) return false;
    if (schema.widget === undefined) return true;
    return false;
  }
}

// a[].b.c => a.b.c
function removeBrackets(string) {
  if (typeof string === 'string') {
    return string.replace(/\\[\\]/g, '');
  } else {
    return string;
  }
}

export function getParentPath(path) {
  if (typeof path === 'string') {
    const pathArr = path.split('.');
    if (pathArr.length === 1) {
      return '#';
    }
    pathArr.pop();
    return pathArr.join('.');
  }
  return '#';
}

export function getValueByPath(formData, path) {
  if (path === '#' || !path) {
    return formData || {};
  } else if (typeof path === 'string') {
    return get(formData, path);
  } else {
    console.error('path has to be a string');
  }
}

//  path: 'a.b[1].c[0]' => { id: 'a.b[].c[]'  dataIndex: [1,0] }
export function destructDataPath(path) {
  let id;
  let dataIndex;
  if (path === '#') {
    return { id: '#', dataIndex: [] };
  }
  if (typeof path !== 'string') {
    throw Error(\`path \${path} is not a string!!! Something wrong here\`);
  }
  const pattern = /\\[[0-9]+\\]/g;
  const matchList = path.match(pattern);
  if (!matchList) {
    id = path;
  } else {
    id = path.replace(pattern, '[]');
    // \u8FD9\u4E2A\u662Fmatch\u4E0B\u6765\u7684\u7ED3\u679C\uFF0C\u53EF\u5B89\u5168\u5904\u7406
    dataIndex = matchList.map(item =>
      Number(item.substring(1, item.length - 1))
    );
  }
  return { id, dataIndex };
}

// id: 'a.b[].c[]'  dataIndex: [1,0] =>  'a.b[1].c[0]'
export function getDataPath(id, dataIndex) {
  if (id === '#') {
    return id;
  }
  if (typeof id !== 'string') {
    throw Error(\`id \${id} is not a string!!! Something wrong here\`);
  }
  let _id = id;
  if (Array.isArray(dataIndex)) {
    // const matches = id.match(/\\[\\]/g) || [];
    // const count = matches.length;
    dataIndex.forEach(item => {
      _id = _id.replace(/\\[\\]/, \`[\${item}]\`);
    });
  }
  return removeBrackets(_id);
}

export function isObjType(schema) {
  return (
    schema && schema.type === 'object' && schema.properties && !schema.widget
  );
}

// TODO: to support case that item is not an object
export function isListType(schema) {
  return (
    schema &&
    schema.type === 'array' &&
    isObjType(schema.items) &&
    schema.enum === undefined
  );
}

// TODO: more tests to make sure weird & wrong schema won't crush
export function flattenSchema(_schema = {}, name = '#', parent, result = {}) {
  const schema = clone(_schema);
  let _name = name;
  if (!schema.$id) {
    schema.$id = _name; // path as $id, for easy access to path in schema
  }
  const children = [];
  if (isObjType(schema)) {
    Object.entries(schema.properties).forEach(([key, value]) => {
      const _key = isListType(value) ? key + '[]' : key;
      const uniqueName = _name === '#' ? _key : _name + '.' + _key;
      children.push(uniqueName);
      flattenSchema(value, uniqueName, _name, result);
    });
    schema.properties = {};
  }
  if (isListType(schema)) {
    Object.entries(schema.items.properties).forEach(([key, value]) => {
      const _key = isListType(value) ? key + '[]' : key;
      const uniqueName = _name === '#' ? _key : _name + '.' + _key;
      children.push(uniqueName);
      flattenSchema(value, uniqueName, _name, result);
    });
    schema.items.properties = {};
  }

  if (schema.type) {
    result[_name] = { parent, schema, children };
  }
  return result;
}

export function getSchemaFromFlatten(flatten, path = '#') {
  let schema = {};
  const item = clone(flatten[path]);
  if (item) {
    schema = item.schema;
    // schema.$id && delete schema.$id;
    if (item.children.length > 0) {
      item.children.forEach(child => {
        if (!flatten[child]) return;
        const key = getKeyFromPath(child);
        if (isObjType(schema)) {
          schema.properties[key] = getSchemaFromFlatten(flatten, child);
        }
        if (isListType(schema)) {
          schema.items.properties[key] = getSchemaFromFlatten(flatten, child);
        }
      });
    }
  }
  return schema;
}

function stringContains(str, text) {
  return str.indexOf(text) > -1;
}

export const isObject = a =>
  stringContains(Object.prototype.toString.call(a), 'Object');

export const clone = cloneDeep;

// '3' => true, 3 => true, undefined => false
export function isLooselyNumber(num) {
  if (typeof num === 'number') return true;
  if (typeof num === 'string') {
    return !Number.isNaN(Number(num));
  }
  return false;
}

export function isCssLength(str) {
  if (typeof str !== 'string') return false;
  return str.match(/^([0-9])*(%|px|rem|em)$/i);
}

export function isDeepEqual(param1, param2) {
  if (param1 === undefined && param2 === undefined) return true;
  else if (param1 === undefined || param2 === undefined) return false;
  if (param1 === null && param2 === null) return true;
  else if (param1 === null || param2 === null) return false;
  else if (param1.constructor !== param2.constructor) return false;

  if (param1.constructor === Array) {
    if (param1.length !== param2.length) return false;
    for (let i = 0; i < param1.length; i++) {
      if (param1[i].constructor === Array || param1[i].constructor === Object) {
        if (!isDeepEqual(param1[i], param2[i])) return false;
      } else if (param1[i] !== param2[i]) return false;
    }
  } else if (param1.constructor === Object) {
    if (Object.keys(param1).length !== Object.keys(param2).length) return false;
    for (let i = 0; i < Object.keys(param1).length; i++) {
      const key = Object.keys(param1)[i];
      if (
        param1[key] &&
        typeof param1[key] !== 'number' &&
        (param1[key].constructor === Array ||
          param1[key].constructor === Object)
      ) {
        if (!isDeepEqual(param1[key], param2[key])) return false;
      } else if (param1[key] !== param2[key]) return false;
    }
  } else if (param1.constructor === String || param1.constructor === Number) {
    return param1 === param2;
  }
  return true;
}

export function getFormat(format) {
  let dateFormat;
  switch (format) {
    case 'date':
      dateFormat = 'YYYY-MM-DD';
      break;
    case 'time':
      dateFormat = 'HH:mm:ss';
      break;
    case 'dateTime':
      dateFormat = 'YYYY-MM-DD HH:mm:ss';
      break;
    case 'week':
      dateFormat = 'YYYY-w';
      break;
    case 'year':
      dateFormat = 'YYYY';
      break;
    case 'quarter':
      dateFormat = 'YYYY-Q';
      break;
    case 'month':
      dateFormat = 'YYYY-MM';
      break;
    default:
      // dateTime
      if (typeof format === 'string') {
        dateFormat = format;
      } else {
        dateFormat = 'YYYY-MM-DD';
      }
  }
  return dateFormat;
}

export function hasRepeat(list) {
  return list.find(
    (x, i, self) =>
      i !== self.findIndex(y => JSON.stringify(x) === JSON.stringify(y))
  );
}

export function combineSchema(propsSchema = {}, uiSchema = {}) {
  const propList = getChildren(propsSchema);
  const newList = propList.map(p => {
    const { name } = p;
    const { type, enum: options, properties, items } = p.schema;
    const isObj = type === 'object' && properties;
    const isArr = type === 'array' && items && !options; // enum + array \u4EE3\u8868\u7684\u591A\u9009\u6846\uFF0C\u6CA1\u6709sub
    const ui = name && uiSchema[p.name];
    if (!ui) {
      return p;
    }
    // \u5982\u679C\u662Flist\uFF0C\u9012\u5F52\u5408\u5E76items
    if (isArr) {
      const newItems = combineSchema(items, ui.items || {});
      return { ...p, schema: { ...p.schema, ...ui, items: newItems } };
    }
    // object\u9012\u5F52\u5408\u5E76\u6574\u4E2Aschema
    if (isObj) {
      const newSchema = combineSchema(p.schema, ui);
      return { ...p, schema: newSchema };
    }
    return { ...p, schema: { ...p.schema, ...ui } };
  });

  const newObj = {};
  newList.forEach(s => {
    newObj[s.name] = s.schema;
  });

  const topLevelUi = {};
  Object.keys(uiSchema).forEach(key => {
    if (typeof key === 'string' && key.substring(0, 3) === 'ui:') {
      topLevelUi[key] = uiSchema[key];
    }
  });
  if (isEmpty(newObj)) {
    return { ...propsSchema, ...topLevelUi };
  }
  return { ...propsSchema, ...topLevelUi, properties: newObj };
}

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

function getChildren(schema) {
  if (!schema) return [];
  const {
    // object
    properties,
    // array
    items,
    type,
  } = schema;
  if (!properties && !items) {
    return [];
  }
  let schemaSubs = {};
  if (type === 'object') {
    schemaSubs = properties;
  }
  if (type === 'array') {
    schemaSubs = items;
  }
  return Object.keys(schemaSubs).map(name => ({
    schema: schemaSubs[name],
    name,
  }));
}

export const parseString = string =>
  Function('"use strict";return (' + string + ')')();

export const evaluateString = (string, formData, rootValue) =>
  Function(\`"use strict";
    const rootValue = \${JSON.stringify(rootValue)};
    const formData = \${JSON.stringify(formData)};
    return (\${string})\`)();

export function isExpression(func) {
  // if (typeof func === 'function') {
  //   const funcString = func.toString();
  //   return (
  //     funcString.indexOf('formData') > -1 ||
  //     funcString.indexOf('rootValue') > -1
  //   );
  // }
  if (typeof func !== 'string') return false;
  const pattern = /^{{(.+)}}$/;
  const reg1 = /^{{function\\(.+}}$/;
  // const reg2 = /^{{(.+=>.+)}}$/;
  if (typeof func === 'string' && func.match(pattern) && !func.match(reg1)) {
    return true;
  }
  return false;
}

export const parseRootValueInSchema = (schema, rootValue) => {
  const result = clone(schema);
  if (isObject(schema)) {
    Object.keys(schema).forEach(key => {
      const item = schema[key];
      if (isObject(item)) {
        result[key] = parseRootValueInSchema(item, rootValue);
      } else if (typeof item === 'string') {
        result[key] = parseSingleRootValue(item, rootValue);
      }
    });
  } else {
    console.error('schema is not an object:', schema);
  }
  return result;
};

// handle rootValue inside List
export const parseSingleRootValue = (expression, rootValue = {}) => {
  if (typeof expression === 'string' && expression.indexOf('rootValue') > 0) {
    const funcBody = expression.substring(2, expression.length - 2);
    const str = \`
    return \${funcBody.replace(/rootValue/g, JSON.stringify(rootValue))}\`;

    try {
      return Function(str)();
    } catch (error) {
      console.error(error, 'expression:', expression, 'rootValue:', rootValue);
      return null; // \u5982\u679C\u8BA1\u7B97\u6709\u9519\u8BEF\uFF0Creturn null \u6700\u5408\u9002
    }
  } else {
    return expression;
  }
};

export function parseSingleExpression(func, formData = {}, dataPath) {
  const parentPath = getParentPath(dataPath);
  const parent = getValueByPath(formData, parentPath) || {};
  if (typeof func === 'string') {
    const funcBody = func.substring(2, func.length - 2);
    const str = \`
    return \${funcBody
      .replace(/formData/g, JSON.stringify(formData))
      .replace(/rootValue/g, JSON.stringify(parent))}\`;

    try {
      return Function(str)();
    } catch (error) {
      console.log(error, func, dataPath);
      return null; // \u5982\u679C\u8BA1\u7B97\u6709\u9519\u8BEF\uFF0Creturn null \u6700\u5408\u9002
    }
    // const funcBody = func.substring(2, func.length - 2);
    // //TODO: \u8FD9\u6837\u6709\u95EE\u9898\uFF0C\u4F8B\u5982 a.b.indexOf(), \u4F1A\u628A a.b.indexOf \u5F53\u505A\u503C
    // const match1 = /formData.([a-zA-Z0-9.$_\\[\\]]+)/g;
    // const match2 = /rootValue.([a-zA-Z0-9.$_\\[\\]]+)/g;
    // const str = \`
    // return (\${funcBody
    //   .replaceAll(match1, (v, m1) =>
    //     JSON.stringify(getValueByPath(formData, m1))
    //   )
    //   .replaceAll(match2, (v, m1) =>
    //     JSON.stringify(getValueByPath(parent, m1))
    //   )})\`;
    // try {
    //   return Function(str)();
    // } catch (error) {
    //   console.log(error);
    //   return func;
    // }
  } else return func;
}

export const schemaContainsExpression = schema => {
  if (isObject(schema)) {
    return Object.keys(schema).some(key => {
      const value = schema[key];
      if (typeof value === 'string') {
        return isExpression(value);
      } else if (isObject(value)) {
        return schemaContainsExpression(value);
      } else {
        return false;
      }
    });
  }
  return false;
};

export const parseAllExpression = (_schema, formData, dataPath) => {
  const schema = clone(_schema);
  Object.keys(schema).forEach(key => {
    const value = schema[key];
    if (isObject(value)) {
      schema[key] = parseAllExpression(value, formData, dataPath);
    } else if (isExpression(value)) {
      schema[key] = parseSingleExpression(value, formData, dataPath);
    } else if (
      typeof key === 'string' &&
      key.toLowerCase().indexOf('props') > -1
    ) {
      // \u6709\u53EF\u80FD\u53EB xxxProps
      const propsObj = schema[key];
      if (isObject(propsObj)) {
        Object.keys(propsObj).forEach(k => {
          schema[key][k] = parseSingleExpression(
            propsObj[k],
            formData,
            dataPath
          );
        });
      }
    }
  });
  return schema;
};

export function isFunctionSchema(schema) {
  return Object.keys(schema).some(key => {
    if (typeof schema[key] === 'function') {
      return true;
    } else if (typeof schema[key] === 'string') {
      return isExpression(schema[key]);
    } else if (typeof schema[key] === 'object') {
      return isFunctionSchema(schema[key]);
    } else {
      return false;
    }
  });
}

export const getParentProps = (propName, id, flatten) => {
  try {
    const item = flatten[id];
    if (item.schema[propName] !== undefined) return item.schema[propName];
    if (item && item.parent) {
      const parentSchema = flatten[item.parent].schema;
      if (parentSchema[propName] !== undefined) {
        return parentSchema[propName];
      } else {
        return getParentProps(propName, item.parent, flatten);
      }
    }
  } catch (error) {
    return undefined;
  }
};

export const getSaveNumber = () => {
  const searchStr = localStorage.getItem('SAVES');
  if (searchStr) {
    try {
      const saves = JSON.parse(searchStr);
      const length = saves.length;
      if (length) return length + 1;
    } catch (error) {
      return 1;
    }
  } else {
    return 1;
  }
};

export function looseJsonParse(obj) {
  return Function('"use strict";return (' + obj + ')')();
}

export const isFunctionString = fString => {
  return typeof fString === 'string' && fString.indexOf('function(') === 0;
};

export function parseFunction(fString) {
  if (isFunctionString(fString)) {
    return Function('return ' + fString)();
  }
  return fString;
}

// \u83B7\u5F97propsSchema\u7684children
// function getChildren2(schema) {
//   if (!schema) return [];
//   const {
//     // object
//     properties,
//     // array
//     items,
//     type,
//   } = schema;
//   if (!properties && !items) {
//     return [];
//   }
//   let schemaSubs = {};
//   if (type === 'object') {
//     schemaSubs = properties;
//   }
//   if (type === 'array') {
//     schemaSubs = items.properties;
//   }
//   return Object.keys(schemaSubs).map(name => ({
//     schema: schemaSubs[name],
//     name,
//   }));
// }

export const oldSchemaToNew = schema => {
  if (schema && schema.propsSchema) {
    const { propsSchema, ...rest } = schema;
    return { schema: propsSchema, ...rest };
  }
  return schema;
};

export const newSchemaToOld = setting => {
  if (setting && setting.schema) {
    const { schema, ...rest } = setting;
    return { propsSchema: schema, ...rest };
  }
  return setting;
};

// from FR

export const getEnum = schema => {
  if (!schema) return undefined;
  const itemEnum = schema && schema.items && schema.items.enum;
  const schemaEnum = schema && schema.enum;
  return itemEnum ? itemEnum : schemaEnum;
};

export const getArray = (arr, defaultValue = []) => {
  if (Array.isArray(arr)) return arr;
  return defaultValue;
};

export const isEmail = value => {
  const regex = '^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$';
  if (value && new RegExp(regex).test(value)) {
    return true;
  }
  return false;
};

export function defaultGetValueFromEvent(valuePropName, ...args) {
  const event = args[0];
  if (event && event.target && valuePropName in event.target) {
    return event.target[valuePropName];
  }
  return event;
}

export const getKeyFromPath = (path = '#') => {
  try {
    const arr = path.split('.');
    const last = arr.slice(-1)[0];
    const result = last.replace('[]', '');
    return result;
  } catch (error) {
    console.error(error, 'getKeyFromPath');
    return '';
  }
};

// \u66F4\u591A\u7684\u503C\u83B7\u53D6
export const getDisplayValue = (value, schema) => {
  if (typeof value === 'boolean') {
    return value ? 'yes' : 'no';
  }
  if (isObjType(schema) || isListType(schema)) {
    return '-';
  }
  if (Array.isArray(schema.enum) && Array.isArray(schema.enumNames)) {
    try {
      return schema.enumNames[schema.enum.indexOf(value)];
    } catch (error) {
      return value;
    }
  }
  return value;
};

// \u53BB\u6389\u6570\u7EC4\u91CC\u7684\u7A7A\u5143\u7D20 {a: [null, {x:1}]} => {a: [{x:1}]}
export const removeEmptyItemFromList = formData => {
  let result = {};
  if (isObject(formData)) {
    Object.keys(formData).forEach(key => {
      result[key] = removeEmptyItemFromList(formData[key]);
    });
  } else if (Array.isArray(formData)) {
    result = formData.filter(item => {
      if ([false, 0, ''].indexOf(item) > -1) return true;
      if (item && JSON.stringify(item) !== '{}') {
        return true;
      }
      return false;
    });
  } else {
    result = formData;
  }
  return result;
};

export const getDescriptorFromSchema = ({ schema, isRequired = true }) => {
  let result = {};
  let singleResult = {};
  if (schema.hidden === true) return { validator: () => true };
  if (isObjType(schema)) {
    result.type = 'object';
    if (isRequired && schema.required === true) {
      result.required = true;
    }
    result.fields = {};
    Object.keys(schema.properties).forEach(key => {
      const item = schema.properties[key];
      // \u517C\u5BB9\u65E7\u7684\uFF01
      if (Array.isArray(schema.required) && schema.required.indexOf(key) > -1) {
        item.required = true;
      }
      result.fields[key] = getDescriptorFromSchema({
        schema: item,
        isRequired,
      });
    });
  } else if (isListType(schema)) {
    result.type = 'array';
    if (isRequired && schema.required === true) {
      result.required = true;
    }
    if (typeof schema.min === 'number') {
      result.min = schema.min;
    }
    if (typeof schema.max === 'number') {
      result.max = schema.max;
    }
    result.defaultField = { type: 'object', fields: {} }; // \u76EE\u524D\u5C31\u9ED8\u8BA4\u53EA\u6709object\u7C7B\u578B\u7684 TODO:
    Object.keys(schema.items.properties).forEach(key => {
      const item = schema.items.properties[key];
      // \u517C\u5BB9\u65E7\u7684\uFF01
      if (Array.isArray(schema.required) && schema.required.indexOf(key) > -1) {
        item.required = true;
      }
      result.defaultField.fields[key] = getDescriptorFromSchema({
        schema: item,
        isRequired,
      });
    });
  } else {
    // \u5355\u4E2A\u7684\u903B\u8F91
    const processRule = item => {
      if (schema.type) return { ...item, type: schema.type };
      if (item.pattern && typeof item.pattern === 'string') {
        return { ...item, pattern: new RegExp(item.pattern) };
      }
      return item;
    };
    const { required, ...rest } = schema;

    ['type', 'pattern', 'min', 'max', 'len'].forEach(key => {
      if (Object.keys(rest).indexOf(key) > -1) {
        singleResult[key] = rest[key];
      }
    });

    switch (schema.type) {
      case 'range':
        // \u6682\u65F6\u5148\u53BB\u6389\uFF0C\u5E94\u8BE5\u6CA1\u4E8B\u4E86\uFF0C\u5728range\u7EC4\u4EF6\u7684\u6E90\u5934\u4E0A\u628A\u5947\u602A\u7684case\u5E72\u6389\u4E86
        // const rangeValidator = {
        //   validator: (rule, value) => {
        //     const rangeRequired = schema.required === true && isRequired;
        //     // range\u7EC4\u4EF6\u70B9\u51FBclear\uFF0C\u4F1A\u53D8\u6210 ['','']
        //     // range\u7EC4\u4EF6\u5BF9\u5E94\u7684\u503Cbind\u7684\u65F6\u5019\uFF0C\u4F1A\u53D8\u6210 [undefined,undefined]
        //     const notValid1 = value[0] === '' && value[1] === '';
        //     const notValid2 = value[0] === undefined && value[1] === undefined;
        //     if (rangeRequired) {
        //       if (!value) return false;
        //       if (Array.isArray(value)) {
        //         if (notValid1 || notValid2) {
        //           return false;
        //         }
        //         return true;
        //       }
        //       return true;
        //     } else {
        //       return true;
        //     }
        //   },
        //   type: 'array',
        //   message: '\${title}\u5FC5\u586B',
        // };
        // singleResult = rangeValidator;
        singleResult.type = 'array';
        break;
      case 'html':
        singleResult.type = 'string';
        break;
      default:
        break;
    }
    switch (schema.format) {
      case 'email':
      case 'url':
        singleResult.type = schema.format;
        break;
      default:
        break;
    }

    let requiredRule;
    if (isRequired && schema.required === true) {
      requiredRule = { required: true, type: singleResult.type || 'string' };
    }

    if (schema.rules) {
      if (Array.isArray(schema.rules)) {
        const _rules = [];
        schema.rules.forEach(item => {
          if (item.required === true) {
            if (isRequired) {
              requiredRule = item;
            }
          } else {
            _rules.push(processRule(item));
          }
        });
        result = [singleResult, ..._rules];
      } else if (isObject(schema.rules)) {
        // TODO: \u89C4\u8303\u4E0A\u4E0D\u5141\u8BB8rules\u662Fobject\uFF0C\u7701\u4E00\u70B9\u4E8B\u513F
        result = [singleResult, processRule(schema.rules)];
      } else {
        result = singleResult;
      }
    } else {
      result = singleResult;
    }

    if (requiredRule) {
      if (Array.isArray(result)) {
        result.push(requiredRule);
      } else if (isObject(result)) {
        result = [result, requiredRule];
      }
    }

    if (schema.format === 'image') {
      const imgValidator = {
        validator: (rule, value) => {
          const pattern = /([/|.|w|s|-])*.(jpg|gif|png|bmp|apng|webp|jpeg|json)/;
          if (!value) return true; // \u8FD9\u91CC\u5224\u65AD\u5BBD\u4E00\u70B9\uFF0Cundefined\u3001null\u3001'' \u90FD\u5F53\u505A\u6CA1\u6709\u586B\u5199
          return !!pattern.exec(value) || isUrl(value);
        },
        message: '\${title}\u7684\u7C7B\u578B\u4E0D\u662Fimage',
      };
      if (Array.isArray(result)) {
        result.push(imgValidator);
      } else if (isObject(result)) {
        result = [result, imgValidator];
      }
    }
  }
  return result;
};

// async-validator \u4EA7\u51FA\u7684path\u6CA1\u6CD5\u7528\uFF0C\u8F6C\u4E00\u4E0B
// "list.1.userName" => "list[1].userName"
export const formatPathFromValidator = err => {
  const errArr = err.split('.');
  return errArr
    .map(item => {
      if (isNaN(Number(item))) {
        return item;
      } else {
        return \`[\${item}]\`;
      }
    })
    .reduce((a, b) => {
      if (b[0] === '[' || a === '') {
        return a + b;
      } else {
        return a + '.' + b;
      }
    }, '');
};

// schema = {
//   type: 'object',
//   properties: {
//     x: {
//       type: 'object',
//       properties: {
//         y: {
//           type: 'string',
//           required: true,
//         },
//       },
//     },
//   },
// };
// path = 'x.y'
// return {required: true, message?: 'xxxx'}
export const isPathRequired = (path, schema) => {
  let pathArr = path.split('.');
  while (pathArr.length > 0) {
    let [_path, ...rest] = pathArr;
    _path = _path.split('[')[0];
    let childSchema;
    if (isObjType(schema)) {
      childSchema = schema.properties[_path];
    } else if (isListType(schema)) {
      childSchema = schema.items.properties[_path];
    }
    pathArr = rest;
    if (childSchema) {
      return isPathRequired(rest.join('.'), childSchema);
    }

    // \u5355\u4E2A\u7684\u903B\u8F91
    let result = { required: false };
    if (schema.required === true) {
      result.required = true;
    }
    if (schema.rules) {
      const requiredItem = schema.rules.find(item => item.required);
      if (requiredItem) {
        result = requiredItem;
      }
    }
    return result;
  }
};

// _path \u53EA\u4F9B\u5185\u90E8\u9012\u5F52\u4F7F\u7528
export const generateDataSkeleton = (schema, formData) => {
  let _formData = clone(formData);
  let result = _formData;
  if (isObjType(schema)) {
    if (_formData === undefined || typeof _formData !== 'object') {
      _formData = {};
      result = {};
    }
    Object.keys(schema.properties).forEach(key => {
      const childSchema = schema.properties[key];
      const childData = _formData[key];
      const childResult = generateDataSkeleton(childSchema, childData);
      result[key] = childResult;
    });
  } else if (_formData !== undefined) {
    // result = _formData;
  } else {
    if (schema.default !== undefined) {
      result = clone(schema.default);
    } else if (schema.type === 'boolean' && !schema.widget) {
      // result = false;
      result = undefined;
    } else {
      result = undefined;
    }
  }
  return result;
};

export const translateMessage = (msg, schema) => {
  if (typeof msg !== 'string') {
    return '';
  }
  if (!schema) return msg;
  msg = msg.replace('\${title}', schema.title);
  msg = msg.replace('\${type}', schema.format || schema.type);
  // \u517C\u5BB9\u4EE3\u7801
  if (typeof schema.min === 'number') {
    msg = msg.replace('\${min}', schema.min);
  }
  if (typeof schema.max === 'number') {
    msg = msg.replace('\${max}', schema.max);
  }
  if (schema.rules) {
    const minRule = schema.rules.find(r => r.min !== undefined);
    if (minRule) {
      msg = msg.replace('\${min}', minRule.min);
    }
    const maxRule = schema.rules.find(r => r.max !== undefined);
    if (maxRule) {
      msg = msg.replace('\${max}', maxRule.max);
    }
    const lenRule = schema.rules.find(r => r.len !== undefined);
    if (lenRule) {
      msg = msg.replace('\${len}', lenRule.len);
    }
    const patternRule = schema.rules.find(r => r.pattern !== undefined);
    if (patternRule) {
      msg = msg.replace('\${pattern}', patternRule.pattern);
    }
  }
  return msg;
};

// "objectName": {
//   "title": "\u5BF9\u8C61",
//   "description": "\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",
//   "type": "object",
//   "properties": {

//   }
// }

// "listName": {
//   "title": "\u5BF9\u8C61\u6570\u7EC4",
//   "description": "\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",
//   "type": "array",
//   "items": {
//     "type": "object",
//     "properties": {

//     }
//   }
// }

const changeSchema = (_schema, singleChange) => {
  let schema = clone(_schema);
  schema = singleChange(schema);
  if (isObjType(schema)) {
    let requiredKeys = [];
    if (Array.isArray(schema.required)) {
      requiredKeys = schema.required;
      delete schema.required;
    }
    Object.keys(schema.properties).forEach(key => {
      const item = schema.properties[key];
      if (requiredKeys.indexOf(key) > -1) {
        item.required = true;
      }
      schema.properties[key] = changeSchema(item, singleChange);
    });
  } else if (isListType(schema)) {
    Object.keys(schema.items.properties).forEach(key => {
      const item = schema.items.properties[key];
      schema.items.properties[key] = changeSchema(item, singleChange);
    });
  }
  return schema;
};

export const updateSchemaToNewVersion = schema => {
  return changeSchema(schema, updateSingleSchema);
};

const updateSingleSchema = schema => {
  try {
    schema.rules = schema.rules || [];
    schema.props = schema.props || {};
    if (schema['ui:options']) {
      schema.props = schema['ui:options'];
      delete schema['ui:options'];
    }
    if (schema.pattern) {
      const validItem = { pattern: schema.pattern };
      if (schema.message && schema.message.pattern) {
        validItem.message = schema.message.pattern;
      }
      schema.rules.push(validItem);
      delete schema.pattern;
      delete schema.message;
    }
    // min / max
    if (schema.minLength) {
      schema.min = schema.minLength;
      delete schema.minLength;
    }
    if (schema.maxLength) {
      schema.max = schema.maxLength;
      delete schema.maxLength;
    }
    if (schema.minItems) {
      schema.min = schema.minItems;
      delete schema.minItems;
    }
    if (schema.maxItems) {
      schema.max = schema.maxItems;
      delete schema.maxItems;
    }
    if (schema.step) {
      schema.props.step = schema.step;
      delete schema.step;
    }
    // ui:xxx
    if (schema['ui:className']) {
      schema.className = schema['ui:className'];
      delete schema['ui:className'];
    }
    if (schema['ui:hidden']) {
      schema.hidden = schema['ui:hidden'];
      delete schema['ui:hidden'];
    }
    if (schema['ui:readonly']) {
      schema.readOnly = schema['ui:readonly']; // \u6539\u6210\u9A7C\u5CF0\u4E86
      delete schema['ui:readonly'];
    }
    if (schema['ui:disabled']) {
      schema.disabled = schema['ui:disabled'];
      delete schema['ui:disabled'];
    }
    if (schema['ui:width']) {
      schema.width = schema['ui:width'];
      delete schema['ui:width'];
    }
    if (schema['ui:displayType']) {
      schema.displayType = schema['ui:displayType'];
      delete schema['ui:displayType'];
    }
    if (schema['ui:column']) {
      schema.column = schema['ui:column'];
      delete schema['ui:column'];
    }
    if (schema['ui:widget']) {
      schema.widget = schema['ui:widget'];
      delete schema['ui:widget'];
    }
    if (schema['ui:labelWidth']) {
      schema.labelWidth = schema['ui:labelWidth'];
      delete schema['ui:labelWidth'];
    }
    if (schema.rules && schema.rules.length === 0) {
      delete schema.rules;
    }
    if (
      typeof schema.props === 'function' ||
      (isObject(schema.props) && Object.keys(schema.props).length > 0)
    ) {
    } else {
      delete schema.props;
    }
    return schema;
  } catch (error) {
    console.error('schema\u8F6C\u6362\u5931\u8D25\uFF01', error);
    return schema;
  }
};

// \u68C0\u9A8C\u4E00\u4E2Astring\u662F function\uFF08\u4F20\u7EDF\u6D3B\u7BAD\u5934\u51FD\u6570\uFF09
export const parseFunctionString = string => {
  if (typeof string !== 'string') return false;
  const reg1 = /^{{(function.+)}}$/;
  const reg2 = /^{{(.+=>.+)}}$/;
  if (string.match(reg1)) {
    return string.match(reg1)[1];
  }
  if (string.match(reg2)) {
    return string.match(reg2)[1];
  }
  return false;
};

export const completeSchemaWithTheme = (schema = {}, theme = {}) => {
  let result = {};
  if (isObject(schema)) {
    if (schema.theme && theme[schema.theme]) {
      result = { ...schema, ...theme[schema.theme] };
    }
    Object.keys(schema).forEach(key => {
      result[key] = completeSchemaWithTheme(schema[key], theme);
    });
  } else {
    result = schema;
  }
  return result;
};

export const cleanEmpty = obj => {
  if (Array.isArray(obj)) {
    return obj
      .map(v => (v && isObject(v) ? cleanEmpty(v) : v))
      .filter(v => !(v == undefined));
  } else if (isObject(obj)) {
    return Object.entries(obj)
      .map(([k, v]) => [k, v && isObject(v) ? cleanEmpty(v) : v])
      .reduce((a, [k, v]) => (v == undefined ? a : ((a[k] = v), a)), {});
  } else {
    return obj;
  }
};

export const removeHiddenFromResult = (data, flatten) => {
  Object.keys(flatten).forEach(key => {
    const hidden = flatten[key].schema && flatten[key].schema.hidden === true; // Remark: \u6709\u8868\u8FBE\u5F0F\u7684\u60C5\u51B5, \u6682\u65F6\u4E0D\u53BB\u6389\u4E86\uFF08\u6709\u4E1A\u52A1\u53CD\u800C\u662F\u5E0C\u671B\u7559\u4E0B\u7684\uFF09\uFF0C\u5C31\u53BB\u6389 hidden = true \u7684
    if (get(data, key) !== undefined && hidden) {
      set(data, key, undefined);
    }
  });
  return data;
};

export function msToTime(duration) {
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  return hours + ':' + minutes + ':' + seconds;
}

export function yymmdd(timeStamp) {
  const date_ob = new Date(Number(timeStamp));
  const adjustZero = num => ('0' + num).slice(-2);
  let day = adjustZero(date_ob.getDate());
  let month = adjustZero(date_ob.getMonth());
  let year = date_ob.getFullYear();
  let hours = adjustZero(date_ob.getHours());
  let minutes = adjustZero(date_ob.getMinutes());
  let seconds = adjustZero(date_ob.getSeconds());
  return \`\${year}-\${month}-\${day} \${hours}:\${minutes}:\${seconds}\`;
}`,Te=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = props => {
  const form = useForm();
  return <FormRender form={form} {...props} />;
};

export default Demo;`,Ce=`export const delay = ms => new Promise(res => setTimeout(res, ms));

export const fakeApi = (url, data) => {
  console.group('request:', url);
  console.log('params:', data);
  console.groupEnd();
  return delay(500);
};`,oe=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = ({ schema }) => {
  const form = useForm();
  return (
    <div>
      <FormRender form={form} schema={schema} />
    </div>
  );
};

export default Demo;`,$n=`export const basic = {
  labelWidth: 130,
  type: 'object',
  properties: {
    url: {
      title: 'url\u8F93\u5165\u6846',
      placeholder: '//www.taobao.com',
      type: 'string',
      format: 'url',
      required: true,
    },
    email: {
      title: 'email\u8F93\u5165\u6846',
      type: 'string',
      format: 'email',
    },
    string: {
      title: '\u6B63\u5219\u6821\u9A8C\u5B57\u7B26\u4E32',
      description: 'a-z',
      type: 'string',
      hidden: false,
      disabled: true,
    },
  },
};

export const expression = {
  type: 'object',
  properties: {
    input: {
      title: '{{formData.config.title || "\u8F93\u5165\u6846"}}',
      type: 'string',
      placeholder: '{{formData.config.placeholder}}',
      props: {
        size: '{{formData.config.size}}',
      },
      hidden: '{{formData.config.hidden === true}}',
      readOnly: '{{formData.config.readOnly === true}}',
      disabled: '{{formData.config.disabled === true}}',
    },
    rate: {
      title: 'rate',
      type: 'number',
      widget: 'rate',
    },
    config: {
      title: '\u914D\u7F6E',
      type: 'object',
      properties: {
        title: {
          title: 'title',
          type: 'string',
        },
        placeholder: {
          title: 'placeholder',
          type: 'string',
        },
        size: {
          title: 'input\u5927\u5C0F',
          type: 'string',
          enum: ['large', 'middle', 'small'],
          enumNames: ['\u5927', '\u4E2D', '\u5C0F'],
          widget: 'radio',
        },
        hidden: {
          title: '\u662F\u5426\u9690\u85CF',
          type: 'boolean',
        },
        readOnly: {
          title: '\u662F\u5426\u53EA\u8BFB',
          type: 'boolean',
        },
        disabled: {
          title: '\u662F\u5426\u7F6E\u7070',
          type: 'boolean',
        },
      },
    },
  },
  required: [],
};

export const titleTrick = {
  displayType: 'row',
  type: 'object',
  properties: {
    inputName1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      width: '50%',
    },
    desc: {
      type: 'html',
      bind: false,
      default: "\u8865\u5145\u8BF4\u660E <span style='color:red'>hello<span>",
      width: '50%',
    },
  },
};`,Re=`import React from 'react';
import { Button, message, Input } from 'antd';
import FormRender, { useForm } from 'form-render';

const { TextArea } = Input;

const Demo = () => {
  const form = useForm();

  const schema = {
    type: 'object',
    properties: {
      useSelect: {
        title: '\u8F93\u5165\u6846\u9AD8\u5EA6',
        type: 'number',
      },
      select2: {
        title: '\u8F93\u5165\u6846',
        type: 'string',
        dependencies: ['useSelect'],
        widget: 'MyTextEditor',
      },
    },
  };

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      message.success('\u63D0\u4EA4\u6210\u529F\uFF1A' + JSON.stringify(data));
    }
  };

  return (
    <div>
      <FormRender
        form={form}
        schema={schema}
        widgets={{ MyTextEditor }}
        onFinish={onFinish}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

const MyTextEditor = props => {
  const { addons } = props;
  console.log(addons.dependValues);
  let rows;
  if (addons && addons.dependValues) {
    rows = addons.dependValues[0] || 2;
  }
  return <TextArea rows={rows} />;
};

export default Demo;`,Dn=`import React, { useState, useEffect } from 'react';
import { Button, Input } from 'antd';
import FormRender, { useForm } from 'form-render';

const Test = ({ value, onChange, addons }) => {
  const { dependValues, hideSelf, dataPath } = addons;

  useEffect(() => {
    if (dependValues[0] !== 'a') {
      hideSelf();
    } else {
      hideSelf(false);
    }
  }, [JSON.stringify(dependValues)]);

  return <Input addonAfter="\u4E07" value={value} onChange={onChange} />;
};

const Demo = () => {
  const form = useForm();
  const [schema, setSchema] = useState({});

  const test = {
    type: 'object',
    properties: {
      select1: {
        title: '\u5355\u9009',
        type: 'string',
        enum: ['a', 'b'],
        enumNames: ['\u5C55\u793A', '\u9690\u85CF'],
      },
      input1: {
        title: '\u8F93\u5165\u6846',
        type: 'string',
        widget: 'Test',
        dependencies: ['select1'],
      },
    },
  };

  useEffect(() => {
    setSchema(test);
  }, []);

  const onFinish = (data, errors) => {
    console.log(data, errors);
  };

  return (
    <div>
      <FormRender
        form={form}
        schema={schema}
        widgets={{ Test }}
        onFinish={onFinish}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4\uFF08\u89C1console\uFF09
      </Button>
    </div>
  );
};

export default Demo;`,Pn=`import React, { Component } from 'react';
// import GithubCorner from 'react-github-corner';
import Demo from './main';
import { Radio, Select, Switch, Slider } from 'antd';
import './index.css';

const Option = Select.Option;
class Root extends Component {
  state = {
    schemaName: 'simplest',
    column: 1,
    displayType: 'column',
    readOnly: false,
    labelWidth: 110,
  };

  onColumnNumberChange = value => {
    this.setState({ column: value });
  };

  onDisplayChange = value => {
    this.setState({
      displayType: value,
      showDescIcon: value === 'row',
    });
  };

  onReadOnlyChange = value => this.setState({ readOnly: value });

  onSchemaChange = e => {
    this.setState({ schemaName: e.target.value });
  };

  onLabelWidthChange = value => {
    this.setState({ labelWidth: value });
  };

  render() {
    const { showDescIcon, readOnly, labelWidth } = this.state;
    return (
      <div className="fr-playground">
        {/* <GithubCorner
          href="https://github.com/alibaba/form-render"
          bannerColor="#F6C14F"
          className="absolute top-0 right-0 z-999"
        /> */}
        {/* <a href="/" className="f6 absolute top-1 right-1 z-999">
          \u56DE\u4E3B\u9875
        </a> */}
        <div className="w-100 flex setting-container">
          <Radio.Group
            name="schemaName"
            defaultValue="simplest"
            className="w-50 flex items-center flex-wrap z-999"
            onChange={this.onSchemaChange}
          >
            <Radio value="simplest">\u6700\u7B80\u6837\u4F8B</Radio>
            <Radio value="basic">\u57FA\u7840\u63A7\u4EF6</Radio>
            <Radio value="format">\u6821\u9A8C</Radio>
            <Radio value="new-feature">\u65B0\u529F\u80FD</Radio>
            <Radio value="function">\u590D\u6742\u8054\u52A8</Radio>
            <Radio value="input">\u4E2A\u6027\u8F93\u5165\u6846</Radio>
            <Radio value="select">\u4E2A\u6027\u9009\u62E9\u6846</Radio>
            <Radio value="demo">\u5B8C\u6574\u4F8B\u5B50</Radio>
          </Radio.Group>
          <div className="w-50 flex items-center flex-wrap z-999">
            <Select
              style={{ marginRight: 8, marginLeft: 24 }}
              onChange={this.onColumnNumberChange}
              defaultValue="1"
            >
              <Option value="1">\u4E00\u884C\u4E00\u5217</Option>
              <Option value="2">\u4E00\u884C\u4E8C\u5217</Option>
              <Option value="3">\u4E00\u884C\u4E09\u5217</Option>
            </Select>
            <Select
              style={{ marginRight: 8 }}
              onChange={this.onDisplayChange}
              defaultValue="column"
            >
              <Option value="column">\u4E0A\u4E0B\u6392\u5217</Option>
              <Option value="row">\u5DE6\u53F3\u6392\u5217</Option>
            </Select>
            <Switch
              style={{ marginRight: 8 }}
              checkedChildren="\u7F16\u8F91"
              onChange={this.onReadOnlyChange}
              unCheckedChildren="\u53EA\u8BFB"
              checked={readOnly}
            />
            <div style={{ width: 70 }}>\u6807\u7B7E\u5BBD\u5EA6\uFF1A</div>
            <Slider
              style={{ width: 80 }}
              max={200}
              min={20}
              value={labelWidth}
              onChange={this.onLabelWidthChange}
            />
          </div>
        </div>
        <Demo {...this.state} />
      </div>
    );
  }
}

export default Root;`,vn=`import React, { useState, useEffect } from 'react';
import deepEqual from 'deep-equal';
import parseJson from 'json-parse-better-errors';
import FormRender, { useForm } from 'form-render';
import DefaultSchema from './json/simplest.json';
import { Tabs } from 'antd';
import AsyncSelect from './customized/AsyncSelect';
import CodeBlock from './monaco';
const { TabPane } = Tabs;

// help functions
const schema2str = obj => JSON.stringify(obj, null, 2) || '';

const Demo = ({ schemaName, theme, ...formProps }) => {
  const [schemaStr, set1] = useState(() => schema2str(DefaultSchema.schema));
  const [error, set2] = useState('');

  useEffect(() => {
    const schema = require(\`./json/\${schemaName}.json\`);
    set1(schema2str(schema.schema));
  }, [schemaName]);

  const tryParse = schemaStr => {
    let schema = {};
    try {
      schema = parseJson(schemaStr);
      if (typeof schema !== 'object') {
        set2('schema\u975E\u6B63\u786Ejson');
        return;
      }
      set2('');
      return schema;
    } catch (error) {
      set2(String(error));
    }
  };

  const handleCodeChange = schemaStr => {
    set1(schemaStr);
    tryParse(schemaStr);
  };

  let schema = {};
  try {
    schema = parseJson(schemaStr);
  } catch (error) {
    console.log(error);
  }

  const form = useForm();

  return (
    <div className="flex-auto flex">
      <div className="w-50 h-100 pl2 flex flex-column">
        <Tabs
          defaultActiveKey="1"
          onChange={() => {}}
          className="flex flex-column"
          style={{ overflow: 'auto' }}
        >
          <TabPane tab="Schema" key="1">
            <CodeBlock value={schemaStr} onChange={handleCodeChange} />
          </TabPane>
          <TabPane tab="Data" key="2">
            <CodeBlock value={schema2str(form.getValues())} readOnly />
          </TabPane>
        </Tabs>
      </div>
      <div className="w-50 h-100 flex flex-column pa2">
        <div
          className="h-100 overflow-auto pa3 pt4 flex-auto"
          style={{ borderLeft: '1px solid #ddd' }}
        >
          {error ? (
            <div>{error}</div>
          ) : (
            <FormRender
              form={form}
              schema={schema}
              {...formProps}
              widgets={{ asyncSelect: AsyncSelect }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Demo;`,an=`{
  "schema": {
    "type": "object",
    "properties": {
      "string": {
        "title": "\u5B57\u7B26\u4E32",
        "type": "string",
        "required": true
      },
      "select": {
        "title": "\u5355\u9009",
        "type": "string",
        "enum": ["a", "b", "c"],
        "enumNames": ["\u9009\u98791", "\u9009\u98792", "\u9009\u98793"],
        "widget": "radio"
      }
    }
  }
}`,$e=`import { Select } from 'antd';
import jsonp from 'fetch-jsonp';
import querystring from 'querystring';
const { Option } = Select;

let timeout;
let currentValue;

function fetch(value, callback) {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  currentValue = value;

  function fake() {
    const str = querystring.encode({
      code: 'utf-8',
      q: value,
    });
    jsonp(\`https://suggest.taobao.com/sug?\${str}\`)
      .then(response => response.json())
      .then(d => {
        if (currentValue === value) {
          const { result } = d;
          const data = [];
          result.forEach(r => {
            data.push({
              value: r[0],
              text: r[0],
            });
          });
          callback(data);
        }
      });
  }

  timeout = setTimeout(fake, 300);
}

class SearchInput extends React.Component {
  state = {
    data: [],
  };

  handleSearch = value => {
    if (value) {
      fetch(value, data => this.setState({ data }));
    } else {
      this.setState({ data: [] });
    }
  };

  handleChange = value => {
    const { onChange } = this.props;
    onChange(value);
  };

  render() {
    const { value, ...rest } = this.props;
    const options = this.state.data.map(d => (
      <Option key={d.value}>{d.text}</Option>
    ));
    return (
      <Select
        {...rest}
        style={{ width: '100%' }}
        showSearch
        value={value || undefined}
        defaultActiveFirstOption={false}
        showArrow={false}
        filterOption={false}
        onSearch={this.handleSearch}
        onChange={this.handleChange}
        notFoundContent={null}
      >
        {options}
      </Select>
    );
  }
}

export default SearchInput;`,wn=`import React from 'react';
import Editor from 'react-simple-code-editor';
import { languages, highlight } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import './theme.css';

const Demo = ({ value, onChange }) => {
  return (
    <Editor
      value={value}
      onValueChange={onChange}
      highlight={code => highlight(code, languages.js)}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 16,
      }}
    />
  );
};

export default Demo;`,Tn=`/* PrismJS 1.16.0
https://prismjs.com/download.html#themes=prism&languages=markup+css+clike+javascript+graphql+jsx+regex */
/**
 * prism.js default theme for JavaScript, CSS and HTML
 * Based on dabblet (http://dabblet.com)
 * @author Lea Verou
 */

code[class*='language-'],
pre[class*='language-'] {
  color: black;
  background: none;
  text-shadow: 0 1px white;
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  font-size: 1em;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;

  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

pre[class*='language-']::-moz-selection,
pre[class*='language-'] ::-moz-selection,
code[class*='language-']::-moz-selection,
code[class*='language-'] ::-moz-selection {
  text-shadow: none;
  background: #b3d4fc;
}

pre[class*='language-']::selection,
pre[class*='language-'] ::selection,
code[class*='language-']::selection,
code[class*='language-'] ::selection {
  text-shadow: none;
  background: #b3d4fc;
}

@media print {
  code[class*='language-'],
  pre[class*='language-'] {
    text-shadow: none;
  }
}

/* Code blocks */
pre[class*='language-'] {
  padding: 1em;
  margin: 0.5em 0;
  overflow: auto;
}

:not(pre) > code[class*='language-'],
pre[class*='language-'] {
  background: #f5f2f0;
}

/* Inline code */
:not(pre) > code[class*='language-'] {
  padding: 0.1em;
  border-radius: 0.3em;
  white-space: normal;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: slategray;
}

.token.punctuation {
  color: #999;
}

.namespace {
  opacity: 0.7;
}

.token.property,
.token.tag,
.token.boolean,
.token.number,
.token.constant,
.token.symbol,
.token.deleted {
  color: #905;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
  color: #690;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string {
  color: #9a6e3a;
  background: hsla(0, 0%, 100%, 0.5);
}

.token.atrule,
.token.attr-value,
.token.keyword {
  color: #07a;
}

.token.function,
.token.class-name {
  color: #dd4a68;
}

.token.regex,
.token.important,
.token.variable {
  color: #e90;
}

.token.important,
.token.bold {
  font-weight: bold;
}
.token.italic {
  font-style: italic;
}

.token.entity {
  cursor: help;
}`,gn=`.debug * {
  outline: 1px solid gold;
}

.markdown p {
  color: #454d64 !important;
  font-size: 15px !important;
  line-height: 1.60625 !important;
}

.markdown ol,
.markdown ul {
  list-style: initial !important;
}

.hidden {
  display: none;
}

.npm__react-simple-code-editor__textarea {
  outline: none;
}

.b {
  font-weight: bold;
}

.pa0 {
  padding: 0;
}
.pa1 {
  padding: 0.25rem;
}
.pa2 {
  padding: 0.5rem;
}
.pa3 {
  padding: 1rem;
}
.pa4 {
  padding: 2rem;
}
.pa5 {
  padding: 4rem;
}
.pl0 {
  padding-left: 0;
}
.pt1 {
  padding-top: 0.25rem;
}
.pt2 {
  padding-top: 0.5rem;
}
.pt3 {
  padding-top: 1rem;
}
.pt4 {
  padding-top: 2rem;
}
.pt5 {
  padding-top: 4rem;
}
.pl2 {
  padding-left: 0.5rem;
}
.pb2 {
  padding-bottom: 0.5rem;
}
.overflow-auto {
  overflow: auto;
}
.h-100 {
  height: 100%;
}
.vh-100 {
  height: 100vh;
}
.relative {
  position: relative;
}
.absolute {
  position: absolute;
}
.top-0 {
  top: 0;
}
.right-0 {
  right: 0;
}
.w-50 {
  width: 50%;
}
.w-100 {
  width: 100%;
}
.flex {
  display: flex;
}
.flex-auto {
  flex: 1 1 auto;
  min-width: 0; /* 1 */
  min-height: 0; /* 1 */
}
.flex-column {
  flex-direction: column;
}
.items-center {
  align-items: center;
}
.flex-wrap {
  flex-wrap: wrap;
}
.z-999 {
  z-index: 999;
}

.fr-playground {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 0;
  height: 100vh;
}

.fr-playground .setting-container {
  border-bottom: 1px solid #ccc;
  padding: 0 12px 12px;
}

.__dumi-default-previewer-demo {
  padding: 24px;
}`,Fe=`import React, { Component } from 'react';
// import GithubCorner from 'react-github-corner';
import Demo from './main';
import { Radio, Select, Switch, Slider } from 'antd';
import './index.css';

const Option = Select.Option;
class Root extends Component {
  state = {
    schemaName: 'simplest',
    column: 1,
    displayType: 'column',
    readOnly: false,
    labelWidth: 110,
  };

  onColumnNumberChange = value => {
    this.setState({ column: value });
  };

  onDisplayChange = value => {
    this.setState({
      displayType: value,
      showDescIcon: value === 'row',
    });
  };

  onReadOnlyChange = value => this.setState({ readOnly: value });

  onSchemaChange = e => {
    this.setState({ schemaName: e.target.value });
  };

  onLabelWidthChange = value => {
    this.setState({ labelWidth: value });
  };

  render() {
    const { showDescIcon, readOnly, labelWidth } = this.state;
    return (
      <div className="fr-playground">
        {/* <GithubCorner
          href="https://github.com/alibaba/form-render"
          bannerColor="#F6C14F"
          className="absolute top-0 right-0 z-999"
        /> */}
        {/* <a href="/" className="f6 absolute top-1 right-1 z-999">
          \u56DE\u4E3B\u9875
        </a> */}
        <div className="w-100 flex setting-container">
          <Radio.Group
            name="schemaName"
            defaultValue="simplest"
            className="w-50 flex items-center flex-wrap z-999"
            onChange={this.onSchemaChange}
          >
            <Radio value="simplest">\u6700\u7B80\u6837\u4F8B</Radio>
            <Radio value="basic">\u57FA\u7840\u63A7\u4EF6</Radio>
            <Radio value="format">\u6821\u9A8C</Radio>
            <Radio value="new-feature">\u65B0\u529F\u80FD</Radio>
            <Radio value="function">\u590D\u6742\u8054\u52A8</Radio>
            <Radio value="input">\u4E2A\u6027\u8F93\u5165\u6846</Radio>
            <Radio value="select">\u4E2A\u6027\u9009\u62E9\u6846</Radio>
            <Radio value="demo">\u5B8C\u6574\u4F8B\u5B50</Radio>
          </Radio.Group>
          <div className="w-50 flex items-center flex-wrap z-999">
            <Select
              style={{ marginRight: 8, marginLeft: 24 }}
              onChange={this.onColumnNumberChange}
              defaultValue="1"
            >
              <Option value="1">\u4E00\u884C\u4E00\u5217</Option>
              <Option value="2">\u4E00\u884C\u4E8C\u5217</Option>
              <Option value="3">\u4E00\u884C\u4E09\u5217</Option>
            </Select>
            <Select
              style={{ marginRight: 8 }}
              onChange={this.onDisplayChange}
              defaultValue="column"
            >
              <Option value="column">\u4E0A\u4E0B\u6392\u5217</Option>
              <Option value="row">\u5DE6\u53F3\u6392\u5217</Option>
            </Select>
            <Switch
              style={{ marginRight: 8 }}
              checkedChildren="\u7F16\u8F91"
              onChange={this.onReadOnlyChange}
              unCheckedChildren="\u53EA\u8BFB"
              checked={readOnly}
            />
            <div style={{ width: 70 }}>\u6807\u7B7E\u5BBD\u5EA6\uFF1A</div>
            <Slider
              style={{ width: 80 }}
              max={200}
              min={20}
              value={labelWidth}
              onChange={this.onLabelWidthChange}
            />
          </div>
        </div>
        <Demo {...this.state} />
      </div>
    );
  }
}

export default Root;`,et=`import React, { useState, useEffect } from 'react';
import parseJson from 'json-parse-better-errors';
import FormRender, { useForm } from 'form-render';
import DefaultSchema from './json/simplest.json';
import { Tabs } from 'antd';
import AsyncSelect from './customized/AsyncSelect';
import MonacoEditor from './monaco';
const { TabPane } = Tabs;

// help functions
const schema2str = obj => JSON.stringify(obj, null, 2) || '';

const Demo = ({ schemaName, theme, ...formProps }) => {
  const [schemaStr, set1] = useState(() => schema2str(DefaultSchema.schema));
  const [error, set2] = useState('');

  useEffect(() => {
    const schema = require(\`./json/\${schemaName}.json\`);
    set1(schema2str(schema.schema));
  }, [schemaName]);

  const tryParse = schemaStr => {
    let schema = {};
    try {
      schema = parseJson(schemaStr);
      if (typeof schema !== 'object') {
        set2('schema\u975E\u6B63\u786Ejson');
        return;
      }
      set2('');
      return schema;
    } catch (error) {
      set2(String(error));
    }
  };

  const handleCodeChange = schemaStr => {
    set1(schemaStr);
    tryParse(schemaStr);
  };

  let schema = {};
  try {
    schema = parseJson(schemaStr);
  } catch (error) {
    console.log(error);
  }

  const form = useForm();

  return (
    <div className="flex-auto flex">
      <div className="w-50 h-100 pl2 flex flex-column">
        <Tabs
          defaultActiveKey="1"
          onChange={() => { }}
          className="flex flex-column"
          style={{ overflow: 'auto' }}
        >
          <TabPane tab="Schema" key="1">
            <MonacoEditor
              value={schemaStr}
              onChange={handleCodeChange}
            />
          </TabPane>
          <TabPane tab="Data" key="2">
            <MonacoEditor
              value={schema2str(form.getValues())}
              options={{ readOnly: true }}
            />
          </TabPane>
        </Tabs>
      </div>
      <div className="w-50 h-100 flex flex-column pa2">
        <div
          className="h-100 overflow-auto pa3 pt4 flex-auto"
          style={{ borderLeft: '1px solid #ddd' }}
        >
          {error ? (
            <div>{error}</div>
          ) : (
            <FormRender
              form={form}
              schema={schema}
              {...formProps}
              widgets={{ asyncSelect: AsyncSelect }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Demo;`,Mn=`{
  "schema": {
    "type": "object",
    "properties": {
      "string": {
        "title": "\u5B57\u7B26\u4E32",
        "type": "string",
        "required": true
      },
      "select": {
        "title": "\u5355\u9009",
        "type": "string",
        "enum": ["a", "b", "c"],
        "enumNames": ["\u9009\u98791", "\u9009\u98792", "\u9009\u98793"],
        "widget": "radio"
      }
    }
  }
}`,nt=`import { Select } from 'antd';
import jsonp from 'fetch-jsonp';
import querystring from 'querystring';
const { Option } = Select;

let timeout;
let currentValue;

function fetch(value, callback) {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  currentValue = value;

  function fake() {
    const str = querystring.encode({
      code: 'utf-8',
      q: value,
    });
    jsonp(\`https://suggest.taobao.com/sug?\${str}\`)
      .then(response => response.json())
      .then(d => {
        if (currentValue === value) {
          const { result } = d;
          const data = [];
          result.forEach(r => {
            data.push({
              value: r[0],
              text: r[0],
            });
          });
          callback(data);
        }
      });
  }

  timeout = setTimeout(fake, 300);
}

class SearchInput extends React.Component {
  state = {
    data: [],
  };

  handleSearch = value => {
    if (value) {
      fetch(value, data => this.setState({ data }));
    } else {
      this.setState({ data: [] });
    }
  };

  handleChange = value => {
    const { onChange, name } = this.props;
    onChange(name, value);
  };

  render() {
    const { value, options: uiOptions } = this.props;
    const options = this.state.data.map(d => (
      <Option key={d.value}>{d.text}</Option>
    ));
    return (
      <Select
        {...uiOptions}
        style={{ width: '100%' }}
        showSearch
        value={value || undefined}
        defaultActiveFirstOption={false}
        showArrow={false}
        filterOption={false}
        onSearch={this.handleSearch}
        onChange={this.handleChange}
        notFoundContent={null}
      >
        {options}
      </Select>
    );
  }
}

export default SearchInput;`,ct=`import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import { valueMap, keySuggestions } from './suggestionsMap';

const Demo = ({ value, onChange, options }) => {

  const editorWillMount = (monaco) => {
    monaco.languages.registerCompletionItemProvider('json', {
      provideCompletionItems: (model, position) => {

        // \u5F97\u5230\u5192\u53F7\u4E4B\u524D\u7684\u6587\u672C
        var textUntilPosition = model.getValueInRange({
          startLineNumber: position.lineNumber,
          startColumn: 1,
          endLineNumber: position.lineNumber,
          endColumn: position.column
        });

        const word = model.getWordUntilPosition(position);
        const range = {
          startLineNumber: position.lineNumber,
          endLineNumber: position.lineNumber,
          startColumn: word.startColumn,
          endColumn: word.endColumn
        };

        let propKey = '';
        const match = textUntilPosition.match(/[a-z]+(?=["][:])/)
        if (match && match.length) {
          propKey = match[0];
        }

        const suggestions = propKey ? (valueMap(range)[propKey] || []) : keySuggestions(range)

        return { suggestions }

      },
      triggerCharacters: ['"']
    });
  }

  return (
    <MonacoEditor
      height="800px"
      language="json"
      value={value}
      onChange={onChange}
      editorWillMount={editorWillMount}
      options={options}
    />
  );
};

export default Demo;`,tt=`import { monaco } from 'react-monaco-editor';

const valueMap = range => {
  return {
    widget: [
      {
        label: 'input',
        insertText: 'input',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u8F93\u5165\u6846',
      },
      {
        label: 'textarea',
        insertText: 'textarea',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u591A\u884C\u8F93\u5165\u6846',
      },
      {
        label: 'date',
        insertText: 'date',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u65E5\u671F\u7EC4\u4EF6',
      },
      {
        label: 'time',
        insertText: 'time',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u65F6\u95F4\u7EC4\u4EF6',
      },
      {
        label: 'dateRange',
        insertText: 'dateRange',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u65E5\u671F\u8303\u56F4',
      },
      {
        label: 'timeRange',
        insertText: 'timeRange',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u65F6\u95F4\u8303\u56F4',
      },
      {
        label: 'checkbox',
        insertText: 'checkbox',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u662F\u5426\u9009\u62E9',
      },
      {
        label: 'select',
        insertText: 'select',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u4E0B\u62C9\u5355\u9009',
      },
      {
        label: 'radio',
        insertText: 'radio',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u70B9\u51FB\u5355\u9009',
      },
      {
        label: 'multiSelect',
        insertText: 'multiSelect',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u4E0B\u62C9\u591A\u9009\u6846',
      },
      {
        label: 'checkboxes',
        insertText: 'checkboxes',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u70B9\u51FB\u591A\u9009\u6846',
      },
      {
        label: 'treeSelect',
        insertText: 'treeSelect',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u6811\u5F62\u9009\u62E9',
      },
      {
        label: 'color',
        insertText: 'color',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u989C\u8272\u9009\u62E9',
      },
      {
        label: 'upload',
        insertText: 'upload',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u4E0A\u4F20\u7EC4\u4EF6',
      },
      {
        label: 'html',
        insertText: 'html',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u6587\u672C\uFF08\u53EA\u8BFB\u5C55\u793A\uFF09',
      },
      {
        label: 'slider',
        insertText: 'slider',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u6ED1\u52A8\u8F93\u5165\u6761',
      },
      {
        label: 'rate',
        insertText: 'rate',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u4E94\u661F\u8BC4\u5206',
      },
      {
        label: 'map',
        insertText: 'map',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5BF9\u8C61',
      },
      {
        label: 'cardList',
        insertText: 'cardList',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5217\u8868(\u590D\u6742\u7ED3\u6784\uFF0C\u4F46item\u6570\u91CF\u4E0D\u5927)',
      },
      {
        label: 'simpleList',
        insertText: 'simpleList',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5217\u8868(\u6BCF\u4E2Aitem\u67091-2\u6761\u6570\u636E\uFF0C\u6CA1\u6709\u590D\u6742\u7ED3\u6784)',
      },
      {
        label: 'tableList',
        insertText: 'tableList',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5217\u8868(\u6BCF\u4E2Aitem\u67093-5\u6761\u6570\u636E\uFF0C\u6CA1\u6709\u590D\u6742\u7ED3\u6784)',
      },
      {
        label: 'drawerList',
        insertText: 'drawerList',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5217\u8868(\u6BCF\u4E2Aitem\u6570\u636E\u91CF\u5927\uFF0C\u6216\u8005\u7ED3\u6784\u590D\u6742)',
      },
    ],
    type: [
      {
        label: 'string',
        insertText: 'string',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'string',
      },
      {
        label: 'number',
        insertText: 'number',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'number',
      },
      {
        label: 'boolean',
        insertText: 'boolean',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'boolean',
      },
      {
        label: 'array',
        insertText: 'array',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'array',
      },
      {
        label: 'object',
        insertText: 'object',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'object',
      },
      {
        label: 'range',
        insertText: 'range',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'range',
      },
      {
        label: 'html',
        insertText: 'html',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'html',
      },
    ],
    format: [
      {
        label: 'image',
        insertText: 'image',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'image',
      },
      {
        label: 'textarea',
        insertText: 'textarea',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'textarea',
      },
      {
        label: 'color',
        insertText: 'color',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'color',
      },
      {
        label: 'email',
        insertText: 'email',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'email',
      },
      {
        label: 'url',
        insertText: 'url',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'url',
      },
      {
        label: 'dateTime',
        insertText: 'dateTime',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'dateTime',
      },
      {
        label: 'date',
        insertText: 'date',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'date',
      },
      {
        label: 'time',
        insertText: 'time',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'time',
      },
      {
        label: 'upload',
        insertText: 'upload',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'upload',
      },
    ],
    displayType: [
      {
        label: 'row',
        insertText: 'row',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5E76\u6392\u5C55\u793A',
      },
      {
        label: 'column',
        insertText: 'column',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u4E24\u6392\u5C55\u793A',
      },
    ],
  };
};

const keySuggestions = range => [
  {
    label: 'title',
    insertText: 'title',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u8868\u5355\u7684\u6807\u9898\u4FE1\u606F',
  },
  {
    label: 'description',
    insertText: 'description',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u8868\u5355\u7684\u63CF\u8FF0\u4FE1\u606F',
  },
  {
    label: 'type',
    insertText: 'type',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u7EC4\u4EF6\u503C\u7684\u6570\u636E\u7C7B\u578B',
  },
  {
    label: 'format',
    insertText: 'format',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u8F93\u5165\u6846\u7684\u683C\u5F0F',
  },
  {
    label: 'default',
    insertText: 'default',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u7EC4\u4EF6\u7684\u9ED8\u8BA4\u503C',
  },
  {
    label: 'required',
    insertText: 'required',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u662F\u5426\u5FC5\u586B',
  },
  {
    label: 'placeholder',
    insertText: 'placeholder',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: 'placeholder',
  },
  {
    label: 'bind',
    insertText: 'bind',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: 'bind',
  },
  {
    label: 'min',
    insertText: 'min',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u6700\u5C0F\u503C',
  },
  {
    label: 'max',
    insertText: 'max',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u6700\u5927\u503C',
  },
  {
    label: 'disabled',
    insertText: 'disabled',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u662F\u5426\u7981\u7528',
  },
  {
    label: 'readOnly',
    insertText: 'readOnly',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u662F\u5426\u53EA\u8BFB',
  },
  {
    label: 'hidden',
    insertText: 'hidden',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u662F\u5426\u9690\u85CF',
  },
  {
    label: 'displayType',
    insertText: 'displayType',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u8868\u5355\u5E03\u5C40',
  },
  {
    label: 'width',
    insertText: 'width',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u5355\u4E2A\u5143\u7D20\u7684\u5C55\u793A\u5BBD\u5EA6',
  },
  {
    label: 'labelWidth',
    insertText: 'labelWidth',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: 'label \u7684\u5BBD\u5EA6',
  },
  {
    label: 'className',
    insertText: 'className',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: 'className',
  },
  {
    label: 'widget',
    insertText: 'widget',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u6307\u5B9A\u4F7F\u7528\u54EA\u4E2A\u7EC4\u4EF6\u6E32\u67D3',
  },
  {
    label: 'readOnlyWidget',
    insertText: 'readOnlyWidget',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u6307\u5B9A\u53EA\u8BFB\u6A21\u5F0F\u4E0B\u7528\u54EA\u4E2A\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6E32\u67D3',
  },
  {
    label: 'extra',
    insertText: 'extra',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u5C55\u793A\u66F4\u591A\u8BF4\u660E\u4FE1\u606F',
  },
  {
    label: 'properties',
    insertText: 'properties',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u5305\u88F9\u5BF9\u8C61\u7684\u5B50\u5C5E\u6027(\u53EA\u5728\u5BF9\u8C61\u7EC4\u4EF6\u4E2D\u4F7F\u7528)',
  },
  {
    label: 'items',
    insertText: 'items',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u63CF\u8FF0\u5217\u8868\u4E2D\u6BCF\u4E2Aitem\u7684\u7ED3\u6784(\u53EA\u5728\u5217\u8868\u4E2D\u4F7F\u7528)',
  },
  {
    label: 'enum',
    insertText: 'enum',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u63CF\u8FF0\u679A\u4E3E\u503C\u7684\u503C',
  },
  {
    label: 'enumNames',
    insertText: 'enumNames',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u63CF\u8FF0\u679A\u4E3E\u503C\u7684\u6587\u6848',
  },
  {
    label: 'rules',
    insertText: 'rules',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u6821\u9A8Crules',
  },
  {
    label: 'props',
    insertText: 'enumNames',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u989D\u5916\u7EC4\u4EF6\u5C5E\u6027',
  },
];

export { valueMap, keySuggestions };`,mt=`.markdown p {
  color: #454d64 !important;
  font-size: 15px !important;
  line-height: 1.60625 !important;
}

.markdown ol,
.markdown ul {
  list-style: initial !important;
}

.hidden {
  display: none;
}

.npm__react-simple-code-editor__textarea {
  outline: none;
}

.b {
  font-weight: bold;
}

.pa0 {
  padding: 0;
}
.pa1 {
  padding: 0.25rem;
}
.pa2 {
  padding: 0.5rem;
}
.pa3 {
  padding: 1rem;
}
.pa4 {
  padding: 2rem;
}
.pa5 {
  padding: 4rem;
}
.pl0 {
  padding-left: 0;
}
.pt1 {
  padding-top: 0.25rem;
}
.pt2 {
  padding-top: 0.5rem;
}
.pt3 {
  padding-top: 1rem;
}
.pt4 {
  padding-top: 2rem;
}
.pt5 {
  padding-top: 4rem;
}
.pl2 {
  padding-left: 0.5rem;
}
.pb2 {
  padding-bottom: 0.5rem;
}
.overflow-auto {
  overflow: auto;
}
.h-100 {
  height: 100%;
}
.vh-100 {
  height: 100vh;
}
.relative {
  position: relative;
}
.absolute {
  position: absolute;
}
.top-0 {
  top: 0;
}
.right-0 {
  right: 0;
}
.w-50 {
  width: 50%;
}
.w-100 {
  width: 100%;
}
.flex {
  display: flex;
}
.flex-auto {
  flex: 1 1 auto;
  min-width: 0; /* 1 */
  min-height: 0; /* 1 */
}
.flex-column {
  flex-direction: column;
}
.items-center {
  align-items: center;
}
.flex-wrap {
  flex-wrap: wrap;
}
.z-999 {
  z-index: 999;
}

.fr-playground {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 0;
  height: 100vh;
}

.fr-playground .setting-container {
  border-bottom: 1px solid #ccc;
  padding: 0 12px 12px;
}

.__dumi-default-previewer-demo {
  padding: 24px;
}`,Bn=`import React from 'react';
import { Table, Search, withTable, useTable } from 'table-render';
import { Tag, Space, Menu, message, Tooltip, Button } from 'antd';
import { PlusOutlined, InfoCircleOutlined } from '@ant-design/icons';
import request from 'umi-request';

const schema = {
  type: 'object',
  properties: {
    state: {
      title: '\u9152\u5E97\u72B6\u6001',
      type: 'string',
      enum: ['open', 'closed'],
      enumNames: ['\u8425\u4E1A\u4E2D', '\u5DF2\u6253\u70CA'],
      width: '25%',
      widget: 'select',
    },
    labels: {
      title: '\u9152\u5E97\u661F\u7EA7',
      type: 'string',
      width: '25%',
    },
    created_at: {
      title: '\u6210\u7ACB\u65F6\u95F4',
      type: 'string',
      format: 'date',
      width: '25%',
    },
  },
  'ui:labelWidth': 80,
};

const Demo = () => {
  const { refresh, tableState }: any = useTable();

  const searchApi = (params, sorter) => {
    console.group(sorter);
    return request
      .get(
        'https://www.fastmock.site/mock/62ab96ff94bc013592db1f67667e9c76/getTableList/api/basic',
        { params }
      )
      .then(res => {
        // console.log('response:', res);
        if (res && res.data) {
          return {
            rows: res.data,
            total: res.data.length,
            extraData: res.status,
          }; // \u6CE8\u610F\u4E00\u5B9A\u8981\u8FD4\u56DE rows \u548C total
        }
      })
      .catch(e => console.log('Oops, error', e));
  };

  const searchApi2 = (params, sorter) => {
    return request
      .get(
        'https://www.fastmock.site/mock/62ab96ff94bc013592db1f67667e9c76/getTableList/api/basic',
        { params }
      )
      .then(res => {
        // console.log('response:', res);
        if (res && res.data) {
          return {
            rows: res.data.slice(1),
            total: res.data.length - 1,
            extraData: res.status,
          }; // \u6CE8\u610F\u4E00\u5B9A\u8981\u8FD4\u56DE rows \u548C total
        }
      })
      .catch(e => console.log('Oops, error', e));
  };

  // \u914D\u7F6E\u5B8C\u5168\u900F\u4F20antd table
  const columns = [
    {
      title: '\u9152\u5E97\u540D\u79F0',
      dataIndex: 'title',
      valueType: 'text',
      width: '20%',
    },
    {
      title: '\u9152\u5E97\u5730\u5740',
      dataIndex: 'address',
      ellipsis: true,
      copyable: true,
      valueType: 'text',
      width: '25%',
    },
    {
      title: (
        <>
          \u9152\u5E97\u72B6\u6001
          <Tooltip placement="top" title="\u4F7F\u7528valueType">
            <InfoCircleOutlined style={{ marginLeft: 6 }} />
          </Tooltip>
        </>
      ),
      enum: {
        open: '\u8425\u4E1A\u4E2D',
        closed: '\u5DF2\u6253\u70CA',
      },
      dataIndex: 'state',
    },
    {
      title: '\u9152\u5E97\u661F\u7EA7',
      dataIndex: 'labels',
      render: (_, row) => (
        <Space>
          {row.labels.map(({ name, color }) => (
            <Tag color={color} key={name}>
              {name}
            </Tag>
          ))}
        </Space>
      ),
    },

    {
      title: '\u9152\u5E97GMV',
      key: 'money',
      sorter: true,
      dataIndex: 'money',
      valueType: 'money',
    },
    {
      title: '\u6210\u7ACB\u65F6\u95F4',
      key: 'created_at',
      dataIndex: 'created_at',
      valueType: 'date',
    },
    {
      title: '\u64CD\u4F5C',
      render: row => (
        <Space>
          <a target="_blank" key="1">
            <div
              onClick={() => {
                message.success('\u9884\u8BA2\u6210\u529F');
              }}
            >
              \u9884\u8BA2
            </div>
          </a>
        </Space>
      ),
    },
  ];

  const menu = (
    <Menu>
      <Menu.Item>
        <div onClick={() => message.success('\u590D\u5236\u6210\u529F\uFF01')}>\u590D\u5236</div>
      </Menu.Item>
      <Menu.Item>
        <div onClick={() => message.warning('\u786E\u5B9A\u5220\u9664\u5417\uFF1F')}>\u5220\u9664</div>
      </Menu.Item>
    </Menu>
  );

  const showData = () => {
    refresh(null, { extra: 1 });
  };

  return (
    <div style={{ background: 'rgb(245,245,245)' }}>
      <Search
        schema={schema}
        displayType="row"
        api={[
          {
            name: '\u5168\u90E8\u6570\u636E',
            api: searchApi,
          },
          {
            name: '\u6211\u7684\u6570\u636E',
            api: searchApi2,
          },
        ]}
      />
      <Table
        // size="small"
        pagination={{ pageSize: 4 }}
        columns={columns}
        // headerTitle="\u9AD8\u7EA7\u8868\u5355"
        rowKey="id"
        toolbarRender={() => [
          <Button key="show" onClick={showData}>
            \u67E5\u770B\u65E5\u5FD7
          </Button>,
          <Button key="out" onClick={showData}>
            \u5BFC\u51FA\u6570\u636E
          </Button>,
          <Button
            key="primary"
            type="primary"
            onClick={() => alert('table-render\uFF01')}
          >
            <PlusOutlined />
            \u521B\u5EFA
          </Button>,
        ]}
        toolbarAction
      />
    </div>
  );
};

export default withTable(Demo);`,rt=`import React from 'react';
import { Table, Search, withTable, useTable } from 'table-render';
import { Tag, Space, message, Tooltip, Button } from 'antd';
import { PlusOutlined, InfoCircleOutlined } from '@ant-design/icons';
import request from 'umi-request';

const schema = {
  type: 'object',
  properties: {
    state: {
      title: '\u9152\u5E97\u72B6\u6001',
      type: 'string',
      enum: ['open', 'closed'],
      enumNames: ['\u8425\u4E1A\u4E2D', '\u5DF2\u6253\u70CA'],
      width: '25%',
      widget: 'select',
    },
    labels: {
      title: '\u9152\u5E97\u661F\u7EA7',
      type: 'string',
      width: '25%',
    },
  },
  'ui:labelWidth': 80,
};

const Demo = () => {
  const { refresh, tableState }: any = useTable();

  const searchApi = params => {
    console.log('params >>> ', params);
    return request
      .get(
        'https://www.fastmock.site/mock/62ab96ff94bc013592db1f67667e9c76/getTableList/api/basic',
        { params }
      )
      .then(res => {
        // console.log('response:', res);
        if (res && res.data) {
          return {
            rows: res.data,
            total: res.data.length,
            extraData: res.status,
          }; // \u6CE8\u610F\u4E00\u5B9A\u8981\u8FD4\u56DE rows \u548C total
        }
      })
      .catch(e => console.log('Oops, error', e));
  };

  // \u914D\u7F6E\u5B8C\u5168\u900F\u4F20antd table
  const columns = [
    {
      title: '\u9152\u5E97\u540D\u79F0',
      dataIndex: 'title',
      valueType: 'text',
      width: '20%',
    },
    {
      title: '\u9152\u5E97\u5730\u5740',
      dataIndex: 'address',
      ellipsis: true,
      copyable: true,
      valueType: 'text',
      width: '25%',
    },
    {
      title: (
        <>
          \u9152\u5E97\u72B6\u6001
          <Tooltip placement="top" title="\u4F7F\u7528valueType">
            <InfoCircleOutlined style={{ marginLeft: 6 }} />
          </Tooltip>
        </>
      ),
      enum: {
        open: '\u8425\u4E1A\u4E2D',
        closed: '\u5DF2\u6253\u70CA',
      },
      dataIndex: 'state',
    },
    {
      title: '\u9152\u5E97\u661F\u7EA7',
      dataIndex: 'labels',
      render: (_, row) => (
        <Space>
          {row.labels.map(({ name, color }) => (
            <Tag color={color} key={name}>
              {name}
            </Tag>
          ))}
        </Space>
      ),
    },

    {
      title: '\u9152\u5E97GMV',
      key: 'money',
      dataIndex: 'money',
      valueType: 'money',
    },
    {
      title: '\u64CD\u4F5C',
      render: row => (
        <Space>
          <a target="_blank" key="1">
            <div
              onClick={() => {
                message.success('\u9884\u8BA2\u6210\u529F');
              }}
            >
              \u9884\u8BA2
            </div>
          </a>
        </Space>
      ),
    },
  ];

  const showData = () => {
    refresh(null, { extra: 1 });
  };

  return (
    <div style={{ background: 'rgb(245,245,245)' }}>
      <Search
        hidden
        schema={schema}
        displayType="row"
        onSearch={search => console.log('onSearch', search)}
        afterSearch={params => console.log('afterSearch', params)}
        api={searchApi}
      />
      <Table
        debug
        columns={columns}
        headerTitle="\u9AD8\u7EA7\u8868\u5355"
        rowKey="id"
        toolbarRender={() => [
          <Button key="show" onClick={showData}>
            \u67E5\u770B\u65E5\u5FD7
          </Button>,
          <Button key="out" onClick={showData}>
            \u5BFC\u51FA\u6570\u636E
          </Button>,
          <Button
            key="primary"
            type="primary"
            onClick={() => alert('table-render\uFF01')}
          >
            <PlusOutlined />
            \u521B\u5EFA
          </Button>,
        ]}
        toolbarAction
      />
    </div>
  );
};

export default withTable(Demo);`,Vn=`import React from 'react';
import { Table, Search, withTable, useTable } from 'table-render';
import { Tag, Space, message, Tooltip, Button } from 'antd';
import { PlusOutlined, InfoCircleOutlined } from '@ant-design/icons';
import request from 'umi-request';

const schema = {
  type: 'object',
  properties: {
    state: {
      title: '\u9152\u5E97\u72B6\u6001',
      type: 'string',
      enum: ['open', 'closed'],
      enumNames: ['\u8425\u4E1A\u4E2D', '\u5DF2\u6253\u70CA'],
      width: '25%',
      widget: 'select',
    },
    labels: {
      title: '\u9152\u5E97\u661F\u7EA7',
      type: 'string',
      width: '25%',
    },
  },
  'ui:labelWidth': 80,
};

const Demo = () => {
  const { refresh, tableState }: any = useTable();

  const searchApi = params => {
    console.log('params >>> ', params);
    return request
      .get(
        'https://www.fastmock.site/mock/62ab96ff94bc013592db1f67667e9c76/getTableList/api/basic',
        { params }
      )
      .then(res => {
        // console.log('response:', res);
        if (res && res.data) {
          return {
            rows: res.data,
            total: res.data.length,
            extraData: res.status,
          }; // \u6CE8\u610F\u4E00\u5B9A\u8981\u8FD4\u56DE rows \u548C total
        }
      })
      .catch(e => console.log('Oops, error', e));
  };

  // \u914D\u7F6E\u5B8C\u5168\u900F\u4F20antd table
  const columns = [
    {
      title: '\u9152\u5E97\u540D\u79F0',
      dataIndex: 'title',
      valueType: 'text',
      width: '20%',
    },
    {
      title: '\u9152\u5E97\u5730\u5740',
      dataIndex: 'address',
      ellipsis: true,
      copyable: true,
      valueType: 'text',
      width: '25%',
    },
    {
      title: (
        <>
          \u9152\u5E97\u72B6\u6001
          <Tooltip placement="top" title="\u4F7F\u7528valueType">
            <InfoCircleOutlined style={{ marginLeft: 6 }} />
          </Tooltip>
        </>
      ),
      enum: {
        open: '\u8425\u4E1A\u4E2D',
        closed: '\u5DF2\u6253\u70CA',
      },
      dataIndex: 'state',
    },
    {
      title: '\u9152\u5E97\u661F\u7EA7',
      dataIndex: 'labels',
      render: (_, row) => (
        <Space>
          {row.labels.map(({ name, color }) => (
            <Tag color={color} key={name}>
              {name}
            </Tag>
          ))}
        </Space>
      ),
    },

    {
      title: '\u9152\u5E97GMV',
      key: 'money',
      dataIndex: 'money',
      valueType: 'money',
    },
    {
      title: '\u64CD\u4F5C',
      render: row => (
        <Space>
          <a target="_blank" key="1">
            <div
              onClick={() => {
                message.success('\u9884\u8BA2\u6210\u529F');
              }}
            >
              \u9884\u8BA2
            </div>
          </a>
        </Space>
      ),
    },
  ];

  const showData = () => {
    refresh(null, { extra: 1 });
  };

  return (
    <div style={{ background: 'rgb(245,245,245)' }}>
      <Search
        hidden
        schema={schema}
        displayType="row"
        onSearch={search => console.log('onSearch', search)}
        afterSearch={params => console.log('afterSearch', params)}
        api={searchApi}
      />
      <Table
        columns={columns}
        rowKey="id"
      />
    </div>
  );
};

export default withTable(Demo);`,ft=`import React, { useEffect } from 'react';
import { Table, Search, withTable, useTable } from 'table-render';
import { Tag, Space, message, Tooltip, Button } from 'antd';
import { PlusOutlined, InfoCircleOutlined } from '@ant-design/icons';
import request from 'umi-request';
import { history } from 'umi';

const schema = {
  type: 'object',
  properties: {
    state: {
      title: '\u9152\u5E97\u72B6\u6001',
      type: 'string',
      enum: ['open', 'closed'],
      enumNames: ['\u8425\u4E1A\u4E2D', '\u5DF2\u6253\u70CA'],
      width: '25%',
      widget: 'select',
    },
    labels: {
      title: '\u9152\u5E97\u661F\u7EA7',
      type: 'string',
      width: '25%',
    },
    created_at: {
      title: '\u6210\u7ACB\u65F6\u95F4',
      type: 'string',
      format: 'date',
      width: '25%',
    },
  },
  'ui:labelWidth': 80,
};

const Demo = () => {
  const { refresh, tableState, form }: any = useTable();
  useEffect(() => {
    // \u5B9E\u9645\u4F7F\u7528\u65F6queryParam\u4E3Aurl\u4E0A\u53D6\u4E0B\u6765\u7684\u6709\u6548\u53C2\u6570
    // const queryParam = { state: 'open' };
    const queryParam = history.location.query;
    if (queryParam) {
      // form\u5177\u4F53api\u53C2\u8003form-render\u6587\u6863
      form.setValues(queryParam);
    }
  }, []);

  // \u914D\u7F6E\u5B8C\u5168\u900F\u4F20antd table
  const columns = [
    {
      title: '\u9152\u5E97\u540D\u79F0',
      dataIndex: 'title',
      valueType: 'text',
      width: '20%',
    },
    {
      title: '\u9152\u5E97\u5730\u5740',
      dataIndex: 'address',
      ellipsis: true,
      copyable: true,
      valueType: 'text',
      width: '25%',
    },
    {
      title: (
        <>
          \u9152\u5E97\u72B6\u6001
          <Tooltip placement="top" title="\u4F7F\u7528valueType">
            <InfoCircleOutlined style={{ marginLeft: 6 }} />
          </Tooltip>
        </>
      ),
      enum: {
        open: '\u8425\u4E1A\u4E2D',
        closed: '\u5DF2\u6253\u70CA',
      },
      dataIndex: 'state',
    },
    {
      title: '\u9152\u5E97\u661F\u7EA7',
      dataIndex: 'labels',
      render: (_, row) => (
        <Space>
          {row.labels.map(({ name, color }) => (
            <Tag color={color} key={name}>
              {name}
            </Tag>
          ))}
        </Space>
      ),
    },

    {
      title: '\u9152\u5E97GMV',
      key: 'money',
      dataIndex: 'money',
      valueType: 'money',
    },
    {
      title: '\u6210\u7ACB\u65F6\u95F4',
      key: 'created_at',
      dataIndex: 'created_at',
      valueType: 'date',
    },
    {
      title: '\u64CD\u4F5C',
      render: row => (
        <Space>
          <a target="_blank" key="1">
            <div
              onClick={() => {
                message.success('\u9884\u8BA2\u6210\u529F');
              }}
            >
              \u9884\u8BA2
            </div>
          </a>
        </Space>
      ),
    },
  ];

  const showData = () => {
    refresh(null, { extra: 1 });
  };
  const searchApi = params => {
    console.log('params >>> ', params);
    return request
      .get(
        'https://www.fastmock.site/mock/62ab96ff94bc013592db1f67667e9c76/getTableList/api/basic',
        { params }
      )
      .then(res => {
        // console.log('response:', res);
        if (res && res.data) {
          return {
            rows: res.data,
            total: res.data.length,
            extraData: res.status,
          }; // \u6CE8\u610F\u4E00\u5B9A\u8981\u8FD4\u56DE rows \u548C total
        }
      })
      .catch(e => console.log('Oops, error', e));
  };
  const onSearch = search => {
    console.log('onSearch', search);
  };
  const afterSearch = params => {
    const formData = form.getValues();
    history.replace({
      pathname: '/table-render/demo',
      query: formData,
    });
  };
  return (
    <div style={{ background: 'rgb(245,245,245)' }}>
      <Search
        schema={schema}
        displayType="row"
        onSearch={onSearch}
        afterSearch={afterSearch}
        api={searchApi}
      />
      <Table
        columns={columns}
        headerTitle="url\u5E26\u53C2\u67E5\u8BE2"
        rowKey="id"
        toolbarRender={() => [
          <Button
            key="primary"
            type="primary"
            onClick={() => alert('table-render\uFF01')}
          >
            <PlusOutlined />
            \u521B\u5EFA
          </Button>,
        ]}
        toolbarAction
      />
    </div>
  );
};

export default withTable(Demo);`,Kn=`import React from 'react';
import { Table, Search, withTable } from 'table-render';

const dataSource = [];
for (let i = 0; i < 6; i++) {
  dataSource.push({
    id: i.toString(),
    title: \`\u6807\u9898\${i + 1}\`,
    created_at: new Date().getTime(),
  });
}

// \u8BE6\u7EC6\u53EF\u89C1 form-render \u7684\u4F7F\u7528
const schema = {
  type: 'object',
  properties: {
    title: {
      title: '\u6807\u9898',
      type: 'string',
      width: '30%',
    },
    created_at: {
      title: '\u521B\u5EFA\u65F6\u95F4',
      type: 'string',
      format: 'date',
      width: '30%',
    },
  },
};

// \u914D\u7F6E\u5B8C\u5168\u900F\u4F20 antd table
const columns = [
  {
    title: '\u6807\u9898',
    dataIndex: 'title',
  },
  {
    title: '\u521B\u5EFA\u65F6\u95F4',
    dataIndex: 'created_at',
    valueType: 'date',
  },
  {
    title: '\u64CD\u4F5C',
    render: (row, record) => <a onClick={() => alert(row.title)}>\u7F16\u8F91</a>,
  },
];

const App = () => {
  const searchApi = () => {
    return Promise.resolve({
      rows: dataSource,
      total: dataSource.length,
    });
  };
  return (
    <>
      <Search debug schema={schema} api={searchApi} />
      <Table headerTitle="\u6700\u7B80\u8868\u683C" columns={columns} rowKey="id" />
    </>
  );
};

export default withTable(App);`,Wn=`import React, { useState, useRef } from 'react';
import Generator from 'fr-generator';
import { Button, Modal, Input } from 'antd';
const { TextArea } = Input;

const defaultValue = {
  type: 'object',
  properties: {
    inputName: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
    },
  },
};

const templates = [
  {
    text: '\u6A21\u677F1',
    name: 'something',
    schema: {
      title: '\u5BF9\u8C61',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      properties: {
        inputName: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
        },
        selectName: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
        },
        dateName: {
          title: '\u65F6\u95F4\u9009\u62E9',
          type: 'string',
          format: 'date',
        },
      },
    },
  },
];

const Demo = () => {
  const [show, setShow] = useState(false);
  const [schema, setSchema] = useState(() => defaultValue);
  const genRef = useRef(); // class\u7EC4\u4EF6\u7528 React.createRef()

  const toggle = () => setShow(o => !o);

  const handleOk = () => {
    const value = genRef.current && genRef.current.getValue();
    setSchema(value);
    toggle();
  };

  return (
    <div>
      <Button type="primary" onClick={toggle} style={{ marginBottom: 12 }}>
        \u914D\u7F6Eschema
      </Button>
      <Modal
        visible={show}
        onCancel={toggle}
        onOk={handleOk}
        okText="\u4FDD\u5B58"
        cancelText="\u5173\u95ED"
        width="90%"
        bodyStyle={{ height: '70vh' }}
      >
        <Generator ref={genRef} defaultValue={schema} templates={templates} />
      </Modal>
      <TextArea
        autoSize
        value={JSON.stringify(schema, null, 2)}
        onChange={() => {}}
      />
    </div>
  );
};

export default Demo;`,Jn=`import React from 'react';
import Generator, {
  defaultSettings,
  defaultCommonSettings,
  defaultGlobalSettings,
} from 'fr-generator';

const NewWidget = ({ value = 0, onChange }) => (
  <button onClick={() => onChange(value + 1)}>{value}</button>
);

const Demo = () => {
  console.log(defaultSettings, defaultCommonSettings, defaultGlobalSettings);

  return (
    <div style={{ height: '50vh' }}>
      <Generator
        widgets={{ NewWidget }}
        settings={[
          {
            title: '\u4E2A\u4EBA\u4FE1\u606F',
            widgets: [
              {
                text: '\u8BA1\u6570\u5668',
                name: 'asyncSelect',
                schema: {
                  title: '\u8BA1\u6570\u5668',
                  type: 'number',
                  widget: 'NewWidget',
                },
                setting: {
                  api: { title: 'api', type: 'string' },
                },
              },
              {
                text: '\u59D3\u540D',
                name: 'name',
                schema: {
                  title: '\u8F93\u5165\u6846',
                  type: 'string',
                },
                setting: {
                  maxLength: { title: '\u6700\u957F\u5B57\u6570', type: 'number' },
                },
              },
              {
                text: 'object',
                name: 'object',
                schema: {
                  title: '\u5BF9\u8C61',
                  type: 'object',
                  properties: {},
                },
                setting: {},
              },
              {
                text: 'array',
                name: 'array',
                schema: {
                  title: '\u6570\u7EC4',
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {},
                  },
                },
                setting: {},
              },
            ],
          },
        ]}
        commonSettings={{
          description: {
            title: '\u81EA\u5B9A\u4E49\u5171\u901A\u7528\u7684\u5165\u53C2',
            type: 'string',
          },
        }}
      />
    </div>
  );
};

export default Demo;`,at=`import React from 'react';
import Generator from 'fr-generator';
import './index.less';

const {
  Provider,
  Sidebar,
  Canvas,
  Settings,
} = Generator;

const Demo = () => {
  return (
    <div className="fr-generator-playground" style={{ height: '40vh' }}>
      <Provider
        onChange={data => console.log('data:change', data)}
        onSchemaChange={schema => console.log('schema:change', schema)}
      >
        <div className="fr-generator-container">
          <Settings />
          <Canvas />
          <Sidebar fixedName />
        </div>
      </Provider>
    </div>
  );
};

export default Demo;`,Fn=`.fr-generator-playground {
  margin: 0 -24px;

  .hide-demo {
    display: none;
  }
}`,st=`import React, { useState, useRef } from 'react';
import Generator from 'fr-generator';
import { Button, Modal, Input } from 'antd';
const { TextArea } = Input;

const defaultValue = {
  type: 'object',
  properties: {
    array: {
      key: 'array',
      type: 'array',
      name: 'array',
      title: 'Name',
      'x-component': 'arraytable',
      items: {
        type: 'object',
        properties: {
          aa: {
            key: 'aa',
            type: 'string',
            name: 'aa',
            title: '\u63A7\u5236\u76F8\u90BB\u5B57\u6BB5\u663E\u793A\u9690\u85CF',
            enum: [
              {
                label: '\u663E\u793A',
                value: true,
              },
              {
                label: '\u9690\u85CF',
                value: false,
              },
            ],
            'x-component': 'input',
          },
          bb: {
            key: 'bb',
            type: 'string',
            name: 'bb',
            title: 'BB',
            'x-component': 'input',
          },
        },
      },
    },
    cc: {
      key: 'cc',
      type: 'string',
      name: 'cc',
      title: 'CC',
      'x-component': 'input',
      'x-component-props': { min: 1 },
    },
  },
};

const stringContains = (str, text) => {
  return str.indexOf(text) > -1;
}

const isObject = a =>
  stringContains(Object.prototype.toString.call(a), 'Object');

// \u83B7\u5F97 propsSchema \u7684 children
const getChildren2 = (schema) => {
  if (!schema) return [];
  const {
    // object
    properties,
    // array
    items,
    type,
  } = schema;
  if (!properties && !items) {
    return [];
  }
  let schemaSubs = {};
  if (type === 'object') {
    schemaSubs = properties;
  }
  if (type === 'array') {
    schemaSubs = items.properties;
  }
  return Object.keys(schemaSubs).map(name => ({
    schema: schemaSubs[name],
    name,
  }));
}

// formily Schema => FRG schema
const transformFrom = (mySchema, parent = null) => {
  const isObj = mySchema.type === 'object' && mySchema.properties;
  const isList =
    mySchema.type === 'array' && mySchema.items && mySchema.items.properties;
  const hasChildren = isObj || isList;
  // debugger;
  if (!hasChildren) {
    if (mySchema.enum && Array.isArray(mySchema.enum)) {
      const list = mySchema.enum;
      if (
        isObject(list[0]) &&
        list[0].label !== undefined &&
        list[0].value !== undefined
      ) {
        const _enumNames = list.map(i => i.label);
        const _enum = list.map(i => i.value);
        mySchema.enum = _enum;
        mySchema.enumNames = _enumNames;
      }
    }
  } else {
    const childrenList = getChildren2(mySchema);
    childrenList.map(item => {
      if (isObj) {
        mySchema.properties[item.name] = transformFrom(item.schema, mySchema);
      }
      if (isList) {
        mySchema.items.properties[item.name] = transformFrom(
          item.schema,
          mySchema
        );
      }
    });
  }
  if (mySchema['x-component']) {
    mySchema['widget'] = mySchema['x-component'];
  }
  if (mySchema['x-component-props']) {
    mySchema['props'] = mySchema['x-component-props'];
  }
  if (parent && mySchema.required) {
    if (parent.required && Array.isArray(parent.required)) {
      parent.required.push(mySchema.name);
    } else {
      parent.required = [mySchema.name];
    }
  }
  delete mySchema.key;
  delete mySchema.name;
  delete mySchema.required;
  delete mySchema['x-component'];
  delete mySchema['x-component-props'];
  return mySchema;
};

// FRG schema => formily Schema
const transformTo = (frSchema, parent = null, key = null) => {
  const isObj = frSchema.type === 'object' && frSchema.properties;
  const isList =
    frSchema.type === 'array' && frSchema.items && frSchema.items.properties;
  const hasChildren = isObj || isList;
  // debugger;
  if (!hasChildren) {
    if (
      frSchema.enum &&
      Array.isArray(frSchema.enum) &&
      frSchema.enumNames &&
      Array.isArray(frSchema.enumNames)
    ) {
      const list = frSchema.enum.map((item, idx) => ({
        value: item,
        label: frSchema.enumNames[idx],
      }));
      frSchema.enum = list;
    }
  } else {
    const childrenList = getChildren2(frSchema);
    childrenList.map(item => {
      if (isObj) {
        frSchema.properties[item.name] = transformTo(
          item.schema,
          frSchema,
          item.name
        );
      }
      if (isList) {
        frSchema.items.properties[item.name] = transformTo(
          item.schema,
          frSchema,
          item.name
        );
      }
    });
  }
  if (frSchema['widget']) {
    frSchema['x-component'] = frSchema['widget'];
  }
  if (frSchema['props']) {
    frSchema['x-component-props'] = frSchema['props'];
  }
  delete frSchema['widget'];
  delete frSchema['props'];
  delete frSchema['enumNames'];
  if (key) {
    frSchema.name = key;
    frSchema.key = key;
  }
  if (parent && key && parent.required && Array.isArray(parent.required)) {
    if (parent.required.indexOf(key) > -1) {
      frSchema.required = true;
    }
  }
  return frSchema;
};

const fromFormily = schema =>  transformFrom(schema);
const toFormily = schema => transformTo(schema);

const Demo = () => {
  const [show, setShow] = useState(false);
  const [schema, setSchema] = useState(() => defaultValue);
  const genRef = useRef(); // class\u7EC4\u4EF6\u7528 React.createRef()

  const toggle = () => setShow(o => !o);

  const handleOk = () => {
    const value = genRef.current && genRef.current.getValue();
    setSchema(value);
    toggle();
  };

  return (
    <div>
      <Button type="primary" onClick={toggle} style={{ marginBottom: 12 }}>
        \u914D\u7F6Eschema
      </Button>
      <Modal
        visible={show}
        onCancel={toggle}
        onOk={handleOk}
        okText="\u4FDD\u5B58"
        cancelText="\u5173\u95ED"
        width="90%"
        bodyStyle={{ height: '70vh' }}
      >
        <Generator
          ref={genRef}
          defaultValue={schema}
          transformer={{
            from: fromFormily,
            to: toFormily,
          }}
        />
      </Modal>
      <TextArea
        autoSize
        value={JSON.stringify(schema, null, 2)}
        onChange={() => {}}
      />
    </div>
  );
};

export default Demo;`,un=`import React, { useState, useRef } from 'react';
import { useHistory } from 'umi';
import Generator from 'fr-generator';
import './index.less';

const Demo = () => {
  const ref = useRef();

  const goToFrPlayground = () => {
    ref.current.copyValue();
    window.open('/playground');
  };

  return (
    <div className="fr-generator-playground" style={{ height: '80vh' }}>
      <Generator
        ref={ref}
        extraButtons={[{ text: '\u53BBplayground\u9A8C\u8BC1', onClick: goToFrPlayground }]}
        onChange={data => console.log('data:change', data)}
        onSchemaChange={schema => console.log('schema:change', schema)}
      />
    </div>
  );
};

export default Demo;`,it=ln.default={"guide-card":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){return y.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"oLxE"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:ue}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){var c,s,p,b,O,o,f;return y.a.wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return o=function(S,d){if(!d&&S&&S.__esModule)return S;if(S===null||typeof S!="object"&&typeof S!="function")return{default:S};var C=O(d);if(C&&C.has(S))return C.get(S);var m={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in S)if(a!=="default"&&Object.prototype.hasOwnProperty.call(S,a)){var r=n?Object.getOwnPropertyDescriptor(S,a):null;r&&(r.get||r.set)?Object.defineProperty(m,a,r):m[a]=S[a]}return m.default=S,C&&C.set(S,m),m},O=function(S){if(typeof WeakMap!="function")return null;var d=new WeakMap,C=new WeakMap;return(O=function(n){return n?C:d})(S)},c=e("K+nK"),w.t0=c,w.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return w.t1=w.sent,s=(0,w.t0)(w.t1),w.t2=o,w.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return w.t3=w.sent,p=(0,w.t2)(w.t3),w.next=15,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 15:return b=w.sent,f=function(){var S=(0,p.useState)("Line"),d=(0,s.default)(S,2),C=d[0],m=d[1],n={Line:b.Line,Column:b.Column,PivotTable:b.PivotTable}[C];return p.default.createElement("div",null,p.default.createElement("div",{style:{marginBottom:10}},p.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("Line")}},"\u6298\u7EBF\u56FE"),p.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("Column")}},"\u67F1\u72B6\u56FE"),p.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("PivotTable")}},"\u4EA4\u53C9\u8868")),p.default.createElement(n,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},w.abrupt("return",f);case 18:case"end":return w.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
import { Line, Column, PivotTable } from 'chart-render';

export default () => {
  const [component, setComponent] = useState('Line');
  const ChartRender = { Line, Column, PivotTable }[component];

  return (
    <div>
      <div style={{ marginBottom: 10 }}>
        <button
          style={{ marginRight: 10 }}
          className="ant-btn ant-btn-primary"
          onClick={() => setComponent('Line')}
        >
          \u6298\u7EBF\u56FE
        </button>
        <button
          style={{ marginRight: 10 }}
          className="ant-btn ant-btn-primary"
          onClick={() => setComponent('Column')}
        >
          \u67F1\u72B6\u56FE
        </button>
        <button
          style={{ marginRight: 10 }}
          className="ant-btn ant-btn-primary"
          onClick={() => setComponent('PivotTable')}
        >
          \u4EA4\u53C9\u8868
        </button>
      </div>

      <ChartRender
        meta={[
          { id: 'date', name: '\u65E5\u671F', isDim: true },
          { id: 'pv', name: '\u8BBF\u95EE\u91CF', isDim: false },
          { id: 'uv', name: '\u8BBF\u5BA2\u6570', isDim: false },
        ]}
        data={[
          { date: '20200101', pv: 100, uv: 50 },
          { date: '20200102', pv: 120, uv: 60 },
          { date: '20200103', pv: 140, uv: 70 },
          { date: '20200104', pv: 160, uv: 80 },
        ]}
      />
    </div>
  );
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){var c,s,p,b;return y.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return c=e("K+nK"),o.t0=c,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return p=o.sent,b=function(){return s.default.createElement(p.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},o.abrupt("return",b);case 11:case"end":return o.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[{ pv: 50, uv: 20 }]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){var c,s,p,b;return y.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return c=e("K+nK"),o.t0=c,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return p=o.sent,b=function(){return s.default.createElement(p.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},o.abrupt("return",b);case 11:case"end":return o.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', uv: 20 },
      { ds: '2021-01-01', uv: 21 },
      { ds: '2021-01-02', uv: 15 },
      { ds: '2021-01-03', uv: 40 },
      { ds: '2021-01-04', uv: 31 },
      { ds: '2021-01-05', uv: 32 },
      { ds: '2021-01-06', uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){var c,s,p,b;return y.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return c=e("K+nK"),o.t0=c,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return p=o.sent,b=function(){return s.default.createElement(p.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},o.abrupt("return",b);case 11:case"end":return o.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'page', name: '\u9875\u9762\u540D\u79F0', isDim: true },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', page: '\u767B\u5F55\u9875', uv: 20 },
      { ds: '2020-12-31', page: '\u9996\u9875', uv: 120 },
      { ds: '2021-01-01', page: '\u767B\u5F55\u9875', uv: 21 },
      { ds: '2021-01-01', page: '\u9996\u9875', uv: 121 },
      { ds: '2021-01-02', page: '\u767B\u5F55\u9875', uv: 15 },
      { ds: '2021-01-02', page: '\u9996\u9875', uv: 115 },
      { ds: '2021-01-03', page: '\u767B\u5F55\u9875', uv: 40 },
      { ds: '2021-01-03', page: '\u9996\u9875', uv: 140 },
      { ds: '2021-01-04', page: '\u767B\u5F55\u9875', uv: 31 },
      { ds: '2021-01-04', page: '\u9996\u9875', uv: 131 },
      { ds: '2021-01-05', page: '\u767B\u5F55\u9875', uv: 32 },
      { ds: '2021-01-05', page: '\u9996\u9875', uv: 132 },
      { ds: '2021-01-06', page: '\u767B\u5F55\u9875', uv: 30 },
      { ds: '2021-01-06', page: '\u9996\u9875', uv: 130 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){var c,s,p,b;return y.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return c=e("K+nK"),o.t0=c,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return p=o.sent,b=function(){return s.default.createElement(p.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},o.abrupt("return",b);case 11:case"end":return o.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', pv: 50, uv: 20 },
      { ds: '2021-01-01', pv: 76, uv: 21 },
      { ds: '2021-01-02', pv: 46, uv: 15 },
      { ds: '2021-01-03', pv: 89, uv: 40 },
      { ds: '2021-01-04', pv: 66, uv: 31 },
      { ds: '2021-01-05', pv: 46, uv: 32 },
      { ds: '2021-01-06', pv: 45, uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){var c,s,p,b;return y.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return c=e("K+nK"),o.t0=c,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return p=o.sent,b=function(){return s.default.createElement(p.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},o.abrupt("return",b);case 11:case"end":return o.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    inverted
    label={{
      position: 'middle',
      layout: [
        { type: 'interval-adjust-position' },
        { type: 'interval-hide-overlap' },
        { type: 'adjust-color' },
      ],
    }}
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', pv: 50, uv: 20 },
      { ds: '2021-01-01', pv: 76, uv: 21 },
      { ds: '2021-01-02', pv: 46, uv: 15 },
      { ds: '2021-01-03', pv: 89, uv: 40 },
      { ds: '2021-01-04', pv: 66, uv: 31 },
      { ds: '2021-01-05', pv: 46, uv: 32 },
      { ds: '2021-01-06', pv: 45, uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){var c,s,p,b;return y.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return c=e("K+nK"),o.t0=c,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return p=o.sent,b=function(){return s.default.createElement(p.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},o.abrupt("return",b);case 11:case"end":return o.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', uv: 20 },
      { ds: '2021-01-01', uv: 21 },
      { ds: '2021-01-02', uv: 15 },
      { ds: '2021-01-03', uv: 40 },
      { ds: '2021-01-04', uv: 31 },
      { ds: '2021-01-05', uv: 32 },
      { ds: '2021-01-06', uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){var c,s,p,b;return y.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return c=e("K+nK"),o.t0=c,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return p=o.sent,b=function(){return s.default.createElement(p.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},o.abrupt("return",b);case 11:case"end":return o.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'page', name: '\u9875\u9762\u540D\u79F0', isDim: true },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', page: '\u767B\u5F55\u9875', uv: 20 },
      { ds: '2020-12-31', page: '\u9996\u9875', uv: 120 },
      { ds: '2021-01-01', page: '\u767B\u5F55\u9875', uv: 21 },
      { ds: '2021-01-01', page: '\u9996\u9875', uv: 121 },
      { ds: '2021-01-02', page: '\u767B\u5F55\u9875', uv: 15 },
      { ds: '2021-01-02', page: '\u9996\u9875', uv: 115 },
      { ds: '2021-01-03', page: '\u767B\u5F55\u9875', uv: 40 },
      { ds: '2021-01-03', page: '\u9996\u9875', uv: 140 },
      { ds: '2021-01-04', page: '\u767B\u5F55\u9875', uv: 31 },
      { ds: '2021-01-04', page: '\u9996\u9875', uv: 131 },
      { ds: '2021-01-05', page: '\u767B\u5F55\u9875', uv: 32 },
      { ds: '2021-01-05', page: '\u9996\u9875', uv: 132 },
      { ds: '2021-01-06', page: '\u767B\u5F55\u9875', uv: 30 },
      { ds: '2021-01-06', page: '\u9996\u9875', uv: 130 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){var c,s,p,b;return y.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return c=e("K+nK"),o.t0=c,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return p=o.sent,b=function(){return s.default.createElement(p.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},o.abrupt("return",b);case 11:case"end":return o.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'page', name: '\u9875\u9762\u540D\u79F0', isDim: true },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
    ]}
    data={[
      { ds: '2020-12-31', page: '\u767B\u5F55\u9875', uv: 20, pv: 120 },
      { ds: '2020-12-31', page: '\u9996\u9875', uv: 120, pv: 1120 },
      { ds: '2021-01-01', page: '\u767B\u5F55\u9875', uv: 21, pv: 121 },
      { ds: '2021-01-01', page: '\u9996\u9875', uv: 121, pv: 1121 },
      { ds: '2021-01-02', page: '\u767B\u5F55\u9875', uv: 15, pv: 115 },
      { ds: '2021-01-02', page: '\u9996\u9875', uv: 115, pv: 1115 },
      { ds: '2021-01-03', page: '\u767B\u5F55\u9875', uv: 40, pv: 140 },
      { ds: '2021-01-03', page: '\u9996\u9875', uv: 140, pv: 1140 },
      { ds: '2021-01-04', page: '\u767B\u5F55\u9875', uv: 31, pv: 131 },
      { ds: '2021-01-04', page: '\u9996\u9875', uv: 131, pv: 1131 },
      { ds: '2021-01-05', page: '\u767B\u5F55\u9875', uv: 32, pv: 132 },
      { ds: '2021-01-05', page: '\u9996\u9875', uv: 132, pv: 1132 },
      { ds: '2021-01-06', page: '\u767B\u5F55\u9875', uv: 30, pv: 130 },
      { ds: '2021-01-06', page: '\u9996\u9875', uv: 130, pv: 1130 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){var c,s,p,b;return y.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return c=e("K+nK"),o.t0=c,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return p=o.sent,b=function(){return s.default.createElement(p.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},o.abrupt("return",b);case 11:case"end":return o.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', pv: 50, uv: 20 },
      { ds: '2021-01-01', pv: 76, uv: 21 },
      { ds: '2021-01-02', pv: 46, uv: 15 },
      { ds: '2021-01-03', pv: 89, uv: 40 },
      { ds: '2021-01-04', pv: 66, uv: 31 },
      { ds: '2021-01-05', pv: 46, uv: 32 },
      { ds: '2021-01-06', pv: 45, uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){var c,s,p,b;return y.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return c=e("K+nK"),o.t0=c,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return p=o.sent,b=function(){return s.default.createElement(p.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},o.abrupt("return",b);case 11:case"end":return o.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    withArea // \u5F00\u542F\u9762\u79EF\u56FE
    isStack // \u5806\u53E0\u5C55\u793A
    isPercent // \u767E\u5206\u6BD4\u9762\u79EF\u56FE
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', pv: 50, uv: 20 },
      { ds: '2021-01-01', pv: 76, uv: 21 },
      { ds: '2021-01-02', pv: 46, uv: 15 },
      { ds: '2021-01-03', pv: 89, uv: 40 },
      { ds: '2021-01-04', pv: 66, uv: 31 },
      { ds: '2021-01-05', pv: 46, uv: 32 },
      { ds: '2021-01-06', pv: 45, uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){var c,s,p,b;return y.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return c=e("K+nK"),o.t0=c,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return p=o.sent,b=function(){return s.default.createElement(p.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},o.abrupt("return",b);case 11:case"end":return o.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { PivotTable } from 'chart-render';

export default () => (
  <PivotTable
    style={{ maxHeight: 400, overflow: 'auto' }}
    meta={[
      { id: 'subs', name: '\u5B50\u516C\u53F8', isDim: true, isRate: false },
      { id: 'shop', name: '\u95E8\u5E97', isDim: true, isRate: false },
      { id: 'season', name: '\u5B63\u5EA6', isDim: true, isRate: false },
      { id: 'month', name: '\u6708\u4EFD', isDim: true, isRate: false },
      { id: 'valueA', name: '\u6307\u6807A', isDim: false, isRate: false },
      { id: 'valueB', name: '\u6307\u6807B', isDim: false, isRate: true },
    ]}
    data={[
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-01',
        valueA: 782,
        valueB: 0.566,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-02',
        valueA: 856,
        valueB: 0.403,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-03',
        valueA: 886,
        valueB: 0.555,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-04',
        valueA: 555,
        valueB: 0.444,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-05',
        valueA: 444,
        valueB: 0.333,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-01',
        valueA: 922,
        valueB: 0.778,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-02',
        valueA: 888,
        valueB: 0.887,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-03',
        valueA: 879,
        valueB: 0.87,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-04',
        valueA: 800,
        valueB: 0.723,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-05',
        valueA: 813,
        valueB: 0.789,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-01',
        valueA: 500,
        valueB: 0.463,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-02',
        valueA: 833,
        valueB: 0.456,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-03',
        valueA: 821,
        valueB: 0.442,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-04',
        valueA: 834,
        valueB: 0.456,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-05',
        valueA: 803,
        valueB: 0.7,
      },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){var c,s,p,b;return y.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return c=e("K+nK"),o.t0=c,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return p=o.sent,b=function(){return s.default.createElement(p.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(w,N,S){return s.default.createElement("div",null,s.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),s.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(N).length]}},w),s.default.createElement("p",null,JSON.stringify(N)),s.default.createElement("p",null,JSON.stringify(S)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},o.abrupt("return",b);case 11:case"end":return o.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { PivotTable } from 'chart-render';

export default () => (
  <PivotTable
    style={{ maxHeight: 400, overflow: 'auto' }}
    cellRender={(val, dimRecord, indId) => (
      <div>
        <p>\u53C2\u6570\u8868\uFF1A</p>
        <p
          style={{
            color: ['red', 'orange', 'yellow', 'green', 'blue'][
              Object.keys(dimRecord).length
            ],
          }}
        >
          {val}
        </p>
        <p>{JSON.stringify(dimRecord)}</p>
        <p>{JSON.stringify(indId)}</p>
      </div>
    )}
    meta={[
      { id: 'subs', name: '\u5B50\u516C\u53F8', isDim: true, isRate: false },
      { id: 'shop', name: '\u95E8\u5E97', isDim: true, isRate: false },
      { id: 'season', name: '\u5B63\u5EA6', isDim: true, isRate: false },
      { id: 'month', name: '\u6708\u4EFD', isDim: true, isRate: false },
      { id: 'valueA', name: '\u6307\u6807A', isDim: false, isRate: false },
      { id: 'valueB', name: '\u6307\u6807B', isDim: false, isRate: true },
    ]}
    data={[
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-01',
        valueA: 782,
        valueB: 0.566,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-02',
        valueA: 856,
        valueB: 0.403,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-03',
        valueA: 886,
        valueB: 0.555,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-04',
        valueA: 555,
        valueB: 0.444,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-05',
        valueA: 444,
        valueB: 0.333,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-01',
        valueA: 922,
        valueB: 0.778,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-02',
        valueA: 888,
        valueB: 0.887,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-03',
        valueA: 879,
        valueB: 0.87,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-04',
        valueA: 800,
        valueB: 0.723,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-05',
        valueA: 813,
        valueB: 0.789,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-01',
        valueA: 500,
        valueB: 0.463,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-02',
        valueA: 833,
        valueB: 0.456,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-03',
        valueA: 821,
        valueB: 0.442,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-04',
        valueA: 834,
        valueB: 0.456,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-05',
        valueA: 803,
        valueB: 0.7,
      },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){var c,s,p,b,O,o,f;return y.a.wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return o=function(S,d){if(!d&&S&&S.__esModule)return S;if(S===null||typeof S!="object"&&typeof S!="function")return{default:S};var C=O(d);if(C&&C.has(S))return C.get(S);var m={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in S)if(a!=="default"&&Object.prototype.hasOwnProperty.call(S,a)){var r=n?Object.getOwnPropertyDescriptor(S,a):null;r&&(r.get||r.set)?Object.defineProperty(m,a,r):m[a]=S[a]}return m.default=S,C&&C.set(S,m),m},O=function(S){if(typeof WeakMap!="function")return null;var d=new WeakMap,C=new WeakMap;return(O=function(n){return n?C:d})(S)},c=e("K+nK"),w.t0=c,w.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return w.t1=w.sent,s=(0,w.t0)(w.t1),w.t2=o,w.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return w.t3=w.sent,p=(0,w.t2)(w.t3),w.next=15,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 15:return b=w.sent,f=function(){var S=(0,p.useState)(!1),d=(0,s.default)(S,2),C=d[0],m=d[1];return p.default.createElement(p.default.Fragment,null,p.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",p.default.createElement("input",{type:"checkbox",value:C,onChange:function(){return m(!C)}})),p.default.createElement(b.PivotTable,{leftExpandable:C,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},w.abrupt("return",f);case 18:case"end":return w.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
import { PivotTable } from 'chart-render';

export default () => {
  const [expandable, setExpandable] = useState(false);

  return (
    <>
      <label>
        \u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A
        <input
          type="checkbox"
          value={expandable}
          onChange={() => setExpandable(!expandable)}
        />
      </label>
      <PivotTable
        leftExpandable={expandable}
        showSubtotal={false}
        meta={[
          { id: 'subs', name: '\u5B50\u516C\u53F8', isDim: true, isRate: false },
          { id: 'shop', name: '\u95E8\u5E97', isDim: true, isRate: false },
          { id: 'season', name: '\u5B63\u5EA6', isDim: true, isRate: false },
          { id: 'month', name: '\u6708\u4EFD', isDim: true, isRate: false },
          { id: 'valueA', name: '\u6307\u6807A', isDim: false, isRate: false },
          { id: 'valueB', name: '\u6307\u6807B', isDim: false, isRate: true },
        ]}
        data={[
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-01',
            valueA: 782,
            valueB: 0.566,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-02',
            valueA: 856,
            valueB: 0.403,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-03',
            valueA: 886,
            valueB: 0.555,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
            season: '\u4E8C\u5B63\u5EA6',
            month: '2022-04',
            valueA: 555,
            valueB: 0.444,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
            season: '\u4E8C\u5B63\u5EA6',
            month: '2022-05',
            valueA: 444,
            valueB: 0.333,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-01',
            valueA: 922,
            valueB: 0.778,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-02',
            valueA: 888,
            valueB: 0.887,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-03',
            valueA: 879,
            valueB: 0.87,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
            season: '\u4E8C\u5B63\u5EA6',
            month: '2022-04',
            valueA: 800,
            valueB: 0.723,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
            season: '\u4E8C\u5B63\u5EA6',
            month: '2022-05',
            valueA: 813,
            valueB: 0.789,
          },
          {
            subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
            shop: '\u4EB2\u6A59\u91CC',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-01',
            valueA: 500,
            valueB: 0.463,
          },
          {
            subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
            shop: '\u4EB2\u6A59\u91CC',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-02',
            valueA: 833,
            valueB: 0.456,
          },
          {
            subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
            shop: '\u4EB2\u6A59\u91CC',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-03',
            valueA: 821,
            valueB: 0.442,
          },
          {
            subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
            shop: '\u4EB2\u6A59\u91CC',
            season: '\u4E8C\u5B63\u5EA6',
            month: '2022-04',
            valueA: 834,
            valueB: 0.456,
          },
          {
            subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
            shop: '\u4EB2\u6A59\u91CC',
            season: '\u4E8C\u5B63\u5EA6',
            month: '2022-05',
            valueA: 803,
            valueB: 0.7,
          },
        ]}
      />
    </>
  );
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"OldSchemaTransformer-demo":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){var c,s,p,b,O,o,f,l,w,N,S,d,C;return y.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return w=function(r,v){if(!v&&r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var h=l(v);if(h&&h.has(r))return h.get(r);var P={},M=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var B in r)if(B!=="default"&&Object.prototype.hasOwnProperty.call(r,B)){var X=M?Object.getOwnPropertyDescriptor(r,B):null;X&&(X.get||X.set)?Object.defineProperty(P,B,X):P[B]=r[B]}return P.default=r,h&&h.set(r,P),P},l=function(r){if(typeof WeakMap!="function")return null;var v=new WeakMap,h=new WeakMap;return(l=function(M){return M?h:v})(r)},c=e("K+nK"),n.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return n.t0=c,n.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return n.t1=n.sent,s=(0,n.t0)(n.t1),n.t2=c,n.next=13,Promise.resolve().then(e.bind(null,"tJVT"));case 13:return n.t3=n.sent,p=(0,n.t2)(n.t3),n.next=17,Promise.all([e.e(3),e.e(19)]).then(e.t.bind(null,"cUip",7));case 17:return n.t4=c,n.next=20,Promise.all([e.e(0),e.e(8),e.e(18),e.e(20)]).then(e.t.bind(null,"iJl9",7));case 20:return n.t5=n.sent,b=(0,n.t4)(n.t5),n.t6=w,n.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return n.t7=n.sent,O=(0,n.t6)(n.t7),n.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 29:return o=n.sent,n.next=32,Promise.all([e.e(22),e.e(25)]).then(e.bind(null,"7t+U"));case 32:return f=n.sent,N=b.default.TextArea,S={type:"object",properties:{number:{title:"\u6570\u5B57\u8F93\u5165\u6846",type:"number","ui:disabled":!0},checkbox:{title:"\u662F\u5426\u9009\u62E9",type:"boolean","ui:widget":"switch"}},required:["number"]},d=function(){var r=(0,O.useState)(JSON.stringify(S)),v=(0,p.default)(r,2),h=v[0],P=v[1],M=(0,O.useState)({}),B=(0,p.default)(M,2),X=B[0],Ke=B[1],Xe=function(){try{var cn=(0,f.updateSchemaToNewVersion)(JSON.parse(h));Ke(cn)}catch(Un){console.log(Un)}},dn=function(cn){P(cn.target.value)},In=function(){P(JSON.stringify(JSON.parse(h),null,2))};return O.default.createElement("div",null,O.default.createElement("div",null,"\u586B\u5165\u65E7\u7248schema\uFF1A"),O.default.createElement(N,{style:{minHeight:400,marginTop:12,marginBottom:12},value:h,onChange:dn}),O.default.createElement(s.default,{style:{marginRight:12},onClick:In},"\u683C\u5F0F\u5316\u65E7schema"),O.default.createElement(s.default,{type:"primary",onClick:Xe},"\u751F\u6210\u65B0\u7248schema"),O.default.createElement(N,{style:{minHeight:400,marginTop:12},value:JSON.stringify(X,null,2)}))},C=d,n.abrupt("return",C);case 38:case"end":return n.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { updateSchemaToNewVersion } from '../../packages/form-render/src/utils.js';
const TextArea = Input.TextArea;

const old = {
  type: 'object',
  properties: {
    number: {
      title: '\u6570\u5B57\u8F93\u5165\u6846',
      type: 'number',
      'ui:disabled': true,
    },
    checkbox: {
      title: '\u662F\u5426\u9009\u62E9',
      type: 'boolean',
      'ui:widget': 'switch',
    },
  },
  required: ['number'],
};

const Translator = () => {
  const [oldSchema, setOld] = useState(JSON.stringify(old));
  const [newSchema, setNew] = useState({});

  const handleClick = () => {
    try {
      const _newSchema = updateSchemaToNewVersion(JSON.parse(oldSchema));
      setNew(_newSchema);
    } catch (err) {
      console.log(err);
    }
  };

  const onOldChange = e => {
    setOld(e.target.value);
  };

  const formatOld = () => {
    setOld(JSON.stringify(JSON.parse(oldSchema), null, 2));
  };

  return (
    <div>
      <div>\u586B\u5165\u65E7\u7248schema\uFF1A</div>
      <TextArea
        style={{ minHeight: 400, marginTop: 12, marginBottom: 12 }}
        value={oldSchema}
        onChange={onOldChange}
      />
      <Button style={{ marginRight: 12 }} onClick={formatOld}>
        \u683C\u5F0F\u5316\u65E7schema
      </Button>
      <Button type="primary" onClick={handleClick}>
        \u751F\u6210\u65B0\u7248schema
      </Button>
      <TextArea
        style={{ minHeight: 400, marginTop: 12 }}
        value={JSON.stringify(newSchema, null, 2)}
      />
    </div>
  );
};

export default Translator;`},"packages/form-render/src/utils.js":{import:"../../packages/form-render/src/utils.js",content:V}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"},"lodash-es":{version:"4.17.21"}},identifier:"OldSchemaTransformer-demo"}},"form-render-demo":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){var c,s,p,b,O,o,f,l,w,N;return y.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return f=function(m,n){if(!n&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var a=o(n);if(a&&a.has(m))return a.get(m);var r={},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var h in m)if(h!=="default"&&Object.prototype.hasOwnProperty.call(m,h)){var P=v?Object.getOwnPropertyDescriptor(m,h):null;P&&(P.get||P.set)?Object.defineProperty(r,h,P):r[h]=m[h]}return r.default=m,a&&a.set(m,r),r},o=function(m){if(typeof WeakMap!="function")return null;var n=new WeakMap,a=new WeakMap;return(o=function(v){return v?a:n})(m)},c=e("K+nK"),d.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return d.t0=c,d.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return d.t1=d.sent,s=(0,d.t0)(d.t1),d.t2=c,d.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return d.t3=d.sent,p=(0,d.t2)(d.t3),d.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 17:return b=d.sent,d.t4=f,d.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return d.t5=d.sent,O=(0,d.t4)(d.t5),l={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},w=function(){var m=(0,O.useForm)(),n=function(r,v){console.log("formData:",r,"errors",v)};return p.default.createElement("div",null,p.default.createElement(O.default,{form:m,schema:l,onFinish:n}),p.default.createElement(s.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},N=w,d.abrupt("return",N);case 27:case"end":return d.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    select1: {
      title: '\u5355\u9009',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['\u65E9', '\u4E2D', '\u665A'],
    },
  },
};

const Demo = () => {
  const form = useForm();
  const onFinish = (formData, errors) => {
    console.log('formData:', formData, 'errors', errors);
  };
  return (
    <div>
      <FormRender form={form} schema={schema} onFinish={onFinish} />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.7.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){var c,s,p,b,O,o,f,l,w,N,S,d,C,m;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return S=function(v,h){if(!h&&v&&v.__esModule)return v;if(v===null||typeof v!="object"&&typeof v!="function")return{default:v};var P=N(h);if(P&&P.has(v))return P.get(v);var M={},B=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var X in v)if(X!=="default"&&Object.prototype.hasOwnProperty.call(v,X)){var Ke=B?Object.getOwnPropertyDescriptor(v,X):null;Ke&&(Ke.get||Ke.set)?Object.defineProperty(M,X,Ke):M[X]=v[X]}return M.default=v,P&&P.set(v,M),M},N=function(v){if(typeof WeakMap!="function")return null;var h=new WeakMap,P=new WeakMap;return(N=function(B){return B?P:h})(v)},c=e("K+nK"),a.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return a.t0=c,a.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.t2=c,a.next=13,e.e(86).then(e.bind(null,"fWQN"));case 13:return a.t3=a.sent,p=(0,a.t2)(a.t3),a.t4=c,a.next=18,e.e(87).then(e.bind(null,"mtLc"));case 18:return a.t5=a.sent,b=(0,a.t4)(a.t5),a.t6=c,a.next=23,e.e(78).then(e.bind(null,"yKVA"));case 23:return a.t7=a.sent,O=(0,a.t6)(a.t7),a.t8=c,a.next=28,e.e(77).then(e.bind(null,"879j"));case 28:return a.t9=a.sent,o=(0,a.t8)(a.t9),a.t10=c,a.next=33,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 33:return a.t11=a.sent,f=(0,a.t10)(a.t11),a.next=37,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 37:return l=a.sent,a.t12=S,a.next=41,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 41:return a.t13=a.sent,w=(0,a.t12)(a.t13),d={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},C=function(r){(0,O.default)(h,r);var v=(0,o.default)(h);function h(){var P;(0,p.default)(this,h);for(var M=arguments.length,B=new Array(M),X=0;X<M;X++)B[X]=arguments[X];return P=v.call.apply(v,[this].concat(B)),P.onFinish=function(Ke,Xe){console.log("formData:",Ke,"errors",Xe)},P}return(0,b.default)(h,[{key:"render",value:function(){var M=this.props.form;return f.default.createElement("div",null,f.default.createElement(w.default,{form:M,schema:d,onFinish:this.onFinish}),f.default.createElement(s.default,{type:"primary",onClick:M.submit},"\u63D0\u4EA4"))}}]),h}(f.default.Component),m=(0,w.connectForm)(C),a.abrupt("return",m);case 47:case"end":return a.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button } from 'antd';
import FormRender, { connectForm } from 'form-render';
// import 'antd/dist/antd.css';    \u5982\u679C\u9879\u76EE\u6CA1\u6709\u5BF9antd\u3001less\u505A\u4EFB\u4F55\u914D\u7F6E\u7684\u8BDD\uFF0C\u9700\u8981\u52A0\u4E0A

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    select1: {
      title: '\u5355\u9009',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['\u65E9', '\u4E2D', '\u665A'],
    },
  },
};

class Demo extends React.Component {
  onFinish = (formData, errors) => {
    console.log('formData:', formData, 'errors', errors);
  };

  render() {
    const { form } = this.props;
    return (
      <div>
        <FormRender form={form} schema={schema} onFinish={this.onFinish} />
        <Button type="primary" onClick={form.submit}>
          \u63D0\u4EA4
        </Button>
      </div>
    );
  }
}

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.7.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){var c,s,p,b,O,o,f,l,w,N;return y.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return f=function(m,n){if(!n&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var a=o(n);if(a&&a.has(m))return a.get(m);var r={},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var h in m)if(h!=="default"&&Object.prototype.hasOwnProperty.call(m,h)){var P=v?Object.getOwnPropertyDescriptor(m,h):null;P&&(P.get||P.set)?Object.defineProperty(r,h,P):r[h]=m[h]}return r.default=m,a&&a.set(m,r),r},o=function(m){if(typeof WeakMap!="function")return null;var n=new WeakMap,a=new WeakMap;return(o=function(v){return v?a:n})(m)},c=e("K+nK"),d.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return d.t0=c,d.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return d.t1=d.sent,s=(0,d.t0)(d.t1),d.t2=c,d.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return d.t3=d.sent,p=(0,d.t2)(d.t3),d.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 17:return b=d.sent,d.t4=f,d.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return d.t5=d.sent,O=(0,d.t4)(d.t5),l={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},showSetting:{title:"\u662F\u5426\u5C55\u793A\u7F51\u5740",type:"boolean"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",hidden:"{{formData.showSetting !== true}}",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},w=function(){var m=(0,O.useForm)(),n=function(r,v){v.length>0?alert("errors:"+JSON.stringify(v)):alert("formData:"+JSON.stringify(r,null,2))};return p.default.createElement("div",null,p.default.createElement(O.default,{form:m,schema:l,onFinish:n}),p.default.createElement(s.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},N=w,d.abrupt("return",N);case 27:case"end":return d.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const schema = {
  displayType: 'row',
  labelWidth: 60,
  type: 'object',
  properties: {
    dateRange: {
      bind: ['startDate', 'endDate'],
      title: '\u65E5\u671F',
      type: 'range',
      format: 'date',
    },
    showSetting: {
      title: '\u662F\u5426\u5C55\u793A\u7F51\u5740',
      type: 'boolean',
    },
    siteUrl: {
      title: '\u7F51\u5740',
      type: 'string',
      placeholder: '\u6B64\u5904\u5FC5\u586B',
      hidden: '{{formData.showSetting !== true}}',
      required: true,
      props: {
        addonBefore: 'https://',
        addonAfter: '.com',
      },
    },
  },
};

const Demo = () => {
  const form = useForm();
  const onFinish = (formData, errors) => {
    if (errors.length > 0) {
      alert('errors:' + JSON.stringify(errors));
    } else {
      alert('formData:' + JSON.stringify(formData, null, 2));
    }
  };

  return (
    <div>
      <FormRender form={form} schema={schema} onFinish={onFinish} />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.7.0"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"display-demo":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){var c,s,p,b,O;return y.a.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return c=e("K+nK"),f.t0=c,f.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return f.t1=f.sent,s=(0,f.t0)(f.t1),f.t2=c,f.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return f.t3=f.sent,p=(0,f.t2)(f.t3),b=function(w){return{type:"object",displayType:w,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},O=function(){return s.default.createElement("div",null,s.default.createElement("h2",null,"display: row"),s.default.createElement(p.default,{schema:b("row")}),s.default.createElement("h2",null,"display: column"),s.default.createElement(p.default,{schema:b("column")}))},f.abrupt("return",O);case 14:case"end":return f.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = displayType => ({
  type: 'object',
  displayType: displayType,
  properties: {
    range1: {
      title: '\u65E5\u671F',
      type: 'range',
      format: 'date',
    },
    objectName: {
      title: '\u5BF9\u8C61',
      bind: 'obj',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      properties: {
        input1: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
          required: true,
        },
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
        },
      },
    },
  },
});

export default () => (
  <div>
    <h2>display: row</h2>
    <Form schema={schema('row')} />
    <h2>display: column</h2>
    <Form schema={schema('column')} />
  </div>
);`},"demo/display.js":{import:"../demo/display",content:Te}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.7.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){var c,s,p,b,O;return y.a.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return c=e("K+nK"),f.t0=c,f.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return f.t1=f.sent,s=(0,f.t0)(f.t1),f.t2=c,f.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return f.t3=f.sent,p=(0,f.t2)(f.t3),b={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},O=function(){return s.default.createElement(p.default,{readOnly:!0,schema:b})},f.abrupt("return",O);case 14:case"end":return f.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    aa: {
      title: '\u5BF9\u8C61',
      type: 'object',
      properties: {
        input1: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
          default: 'hello world',
          required: true,
        },
        check: {
          title: 'box',
          type: 'boolean',
          default: true,
        },
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          default: 'a',
        },
      },
    },
  },
};

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:Te}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.7.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){var c,s,p,b,O;return y.a.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return c=e("K+nK"),f.t0=c,f.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return f.t1=f.sent,s=(0,f.t0)(f.t1),f.t2=c,f.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return f.t3=f.sent,p=(0,f.t2)(f.t3),b={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},O=function(){return s.default.createElement(p.default,{labelWidth:"200",schema:b})},f.abrupt("return",O);case 14:case"end":return f.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    aa: {
      title: '\u5BF9\u8C61',
      type: 'object',
      properties: {
        input1: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
          default: 'hello world',
          required: true,
          width: '50%',
        },
        check: {
          title: 'box',
          type: 'boolean',
          default: true,
          width: '50%',
          labelWidth: 6,
        },
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          default: 'a',
        },
      },
    },
  },
};

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:Te}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.7.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){var c,s,p,b,O,o;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return c=e("K+nK"),l.t0=c,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,s=(0,l.t0)(l.t1),l.t2=c,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,p=(0,l.t2)(l.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},O=function(){return s.default.createElement(p.default,{schema:b})},o=O,l.abrupt("return",o);case 15:case"end":return l.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      // widget: 'cardList',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
          obj: {
            title: '\u5BF9\u8C61',
            type: 'object',
            properties: {
              input1: {
                title: '\u7B80\u5355\u8F93\u5165\u6846',
                type: 'string',
                required: true,
              },
              select1: {
                title: '\u5355\u9009',
                type: 'string',
                enum: ['a', 'b', 'c'],
                enumNames: ['\u65E9', '\u4E2D', '\u665A'],
              },
            },
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Te}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.7.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){var c,s,p,b,O,o;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return c=e("K+nK"),l.t0=c,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,s=(0,l.t0)(l.t1),l.t2=c,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,p=(0,l.t2)(l.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"simpleList",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},O=function(){return s.default.createElement(p.default,{schema:b})},o=O,l.abrupt("return",o);case 15:case"end":return l.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'simpleList',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Te}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.7.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){var c,s,p,b,O,o;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return c=e("K+nK"),l.t0=c,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,s=(0,l.t0)(l.t1),l.t2=c,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,p=(0,l.t2)(l.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"tableList",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},O=function(){return s.default.createElement(p.default,{schema:b})},o=O,l.abrupt("return",o);case 15:case"end":return l.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'tableList',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          input2: {
            title: '\u7B80\u5355\u8F93\u5165\u68462',
            type: 'string',
          },
          input3: {
            title: '\u7B80\u5355\u8F93\u5165\u68463',
            type: 'string',
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
            widget: 'select',
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Te}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.7.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){var c,s,p,b,O,o;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return c=e("K+nK"),l.t0=c,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,s=(0,l.t0)(l.t1),l.t2=c,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,p=(0,l.t2)(l.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"drawerList",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"simpleList",props:{hideMove:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},O=function(){return s.default.createElement(p.default,{schema:b})},o=O,l.abrupt("return",o);case 15:case"end":return l.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'drawerList',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
          listName2: {
            title: '\u5BF9\u8C61\u6570\u7EC4',
            description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
            type: 'array',
            widget: 'simpleList',
            props: {
              hideMove: true,
            },
            items: {
              type: 'object',
              properties: {
                input1: {
                  title: '\u7B80\u5355\u8F93\u5165\u6846',
                  type: 'string',
                  required: true,
                },
                select1: {
                  title: '\u5355\u9009',
                  type: 'string',
                  enum: ['a', 'b', 'c'],
                  enumNames: ['\u65E9', '\u4E2D', '\u665A'],
                },
              },
            },
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Te}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.7.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"form-methods-demo":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){var c,s,p,b,O,o,f,l,w,N,S,d,C;return y.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return S=function(r,v){if(!v&&r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var h=N(v);if(h&&h.has(r))return h.get(r);var P={},M=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var B in r)if(B!=="default"&&Object.prototype.hasOwnProperty.call(r,B)){var X=M?Object.getOwnPropertyDescriptor(r,B):null;X&&(X.get||X.set)?Object.defineProperty(P,B,X):P[B]=r[B]}return P.default=r,h&&h.set(r,P),P},N=function(r){if(typeof WeakMap!="function")return null;var v=new WeakMap,h=new WeakMap;return(N=function(M){return M?h:v})(r)},c=e("K+nK"),n.next=5,e.e(23).then(e.t.bind(null,"lfLe",7));case 5:return n.t0=c,n.next=8,e.e(24).then(e.t.bind(null,"Cp9S",7));case 8:return n.t1=n.sent,s=(0,n.t0)(n.t1),n.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return n.t2=c,n.next=15,e.e(8).then(e.t.bind(null,"4IMT",7));case 15:return n.t3=n.sent,p=(0,n.t2)(n.t3),n.next=19,e.e(15).then(e.t.bind(null,"tL+A",7));case 19:return n.t4=c,n.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return n.t5=n.sent,b=(0,n.t4)(n.t5),n.t6=c,n.next=27,Promise.resolve().then(e.bind(null,"tJVT"));case 27:return n.t7=n.sent,O=(0,n.t6)(n.t7),n.t8=S,n.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return n.t9=n.sent,o=(0,n.t8)(n.t9),n.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 36:return f=n.sent,n.t10=S,n.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 40:return n.t11=n.sent,l=(0,n.t10)(n.t11),n.next=44,e.e(16).then(e.bind(null,"OH0R"));case 44:return w=n.sent,d=function(){var r=(0,l.useForm)(),v=(0,o.useState)({}),h=(0,O.default)(v,2),P=h[0],M=h[1],B=function(){(0,w.fakeApi)("xxx/getForm").then(function(Xe){r.setValues({input1:"hello world",select1:"c"})})};(0,o.useEffect)(function(){(0,w.delay)(1e3).then(function(Ke){M({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var X=function(Xe,dn){dn.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(dn.map(function(In){return In.name}))):(0,w.fakeApi)("xxx/submit",Xe).then(function(In){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return o.default.createElement("div",{style:{width:"400px"}},o.default.createElement(l.default,{form:r,schema:P,onFinish:X}),o.default.createElement(s.default,null,o.default.createElement(p.default,{onClick:B},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),o.default.createElement(p.default,{type:"primary",onClick:r.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},C=d,n.abrupt("return",C);case 48:case"end":return n.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
import { Button, Space, message } from 'antd';
import FormRender, { useForm } from 'form-render';
import { fakeApi, delay } from './utils';

const Demo = () => {
  const form = useForm();
  const [schema, setSchema] = useState({});

  const getRemoteData = () => {
    fakeApi('xxx/getForm').then(_ => {
      form.setValues({ input1: 'hello world', select1: 'c' });
    });
  };

  useEffect(() => {
    // \u5F02\u6B65\u52A0\u8F7D\u8868\u5355
    delay(1000).then(_ => {
      setSchema({
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
        },
      });
    });
  }, []);

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      fakeApi('xxx/submit', data).then(_ => message.success('\u63D0\u4EA4\u6210\u529F\uFF01'));
    }
  };

  return (
    <div style={{ width: '400px' }}>
      <FormRender form={form} schema={schema} onFinish={onFinish} />
      <Space>
        <Button onClick={getRemoteData}>\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E</Button>
        <Button type="primary" onClick={form.submit}>
          \u63D0\u4EA4\uFF08\u89C1console\uFF09
        </Button>
      </Space>
    </div>
  );
};

export default Demo;`},"utils/index.js":{import:"./utils",content:Ce}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.7.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){var c,s,p,b,O,o,f,l,w,N,S,d,C;return y.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return N=function(r,v){if(!v&&r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var h=w(v);if(h&&h.has(r))return h.get(r);var P={},M=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var B in r)if(B!=="default"&&Object.prototype.hasOwnProperty.call(r,B)){var X=M?Object.getOwnPropertyDescriptor(r,B):null;X&&(X.get||X.set)?Object.defineProperty(P,B,X):P[B]=r[B]}return P.default=r,h&&h.set(r,P),P},w=function(r){if(typeof WeakMap!="function")return null;var v=new WeakMap,h=new WeakMap;return(w=function(M){return M?h:v})(r)},c=e("K+nK"),n.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return n.t0=c,n.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return n.t1=n.sent,s=(0,n.t0)(n.t1),n.t2=c,n.next=13,Promise.resolve().then(e.bind(null,"PpiC"));case 13:return n.t3=n.sent,p=(0,n.t2)(n.t3),n.next=17,e.e(15).then(e.t.bind(null,"tL+A",7));case 17:return n.t4=c,n.next=20,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 20:return n.t5=n.sent,b=(0,n.t4)(n.t5),n.t6=c,n.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return n.t7=n.sent,O=(0,n.t6)(n.t7),n.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 29:return o=n.sent,n.t8=N,n.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 33:return n.t9=n.sent,f=(0,n.t8)(n.t9),n.next=37,e.e(16).then(e.bind(null,"OH0R"));case 37:return l=n.sent,S={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},d=function(){var r=(0,f.useForm)(),v=function(M,B){B.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(B.map(function(X){return X.name}))):(0,l.fakeApi)("xxx/submit",M).then(function(X){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},h=function(M){var B=M.data,X=M.errors,Ke=M.schema,Xe=(0,p.default)(M,["data","errors","schema"]);return(0,l.fakeApi)("xxx/validation").then(function(dn){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return O.default.createElement("div",{style:{width:"400px"}},O.default.createElement(f.default,{form:r,schema:S,beforeFinish:h,onFinish:v}),O.default.createElement(s.default,{type:"primary",onClick:r.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},C=d,n.abrupt("return",C);case 42:case"end":return n.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button, message } from 'antd';
import FormRender, { useForm } from 'form-render';
import { fakeApi } from './utils';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    select1: {
      title: '\u5355\u9009',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['\u65E9', '\u4E2D', '\u665A'],
    },
  },
};

const Demo = () => {
  const form = useForm();

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      fakeApi('xxx/submit', data).then(_ => message.success('\u63D0\u4EA4\u6210\u529F\uFF01'));
    }
  };

  // \u670D\u52A1\u7AEF\u6821\u9A8C\u5728\u8FD9\u91CC\u505A
  const beforeFinish = ({ data, errors, schema, ...rest }) => {
    return fakeApi('xxx/validation').then(_ => {
      return { name: 'select1', error: ['\u5916\u90E8\u6821\u9A8C\u9519\u8BEF'] };
    });
  };

  return (
    <div style={{ width: '400px' }}>
      <FormRender
        form={form}
        schema={schema}
        beforeFinish={beforeFinish}
        onFinish={onFinish}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4\uFF08\u89C1console\uFF09
      </Button>
    </div>
  );
};

export default Demo;`},"utils/index.js":{import:"./utils",content:Ce}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.7.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){var c,s,p,b,O,o,f,l,w,N,S,d,C;return y.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return N=function(r,v){if(!v&&r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var h=w(v);if(h&&h.has(r))return h.get(r);var P={},M=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var B in r)if(B!=="default"&&Object.prototype.hasOwnProperty.call(r,B)){var X=M?Object.getOwnPropertyDescriptor(r,B):null;X&&(X.get||X.set)?Object.defineProperty(P,B,X):P[B]=r[B]}return P.default=r,h&&h.set(r,P),P},w=function(r){if(typeof WeakMap!="function")return null;var v=new WeakMap,h=new WeakMap;return(w=function(M){return M?h:v})(r)},c=e("K+nK"),n.next=5,e.e(23).then(e.t.bind(null,"lfLe",7));case 5:return n.t0=c,n.next=8,e.e(24).then(e.t.bind(null,"Cp9S",7));case 8:return n.t1=n.sent,s=(0,n.t0)(n.t1),n.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return n.t2=c,n.next=15,e.e(8).then(e.t.bind(null,"4IMT",7));case 15:return n.t3=n.sent,p=(0,n.t2)(n.t3),n.next=19,e.e(15).then(e.t.bind(null,"tL+A",7));case 19:return n.t4=c,n.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return n.t5=n.sent,b=(0,n.t4)(n.t5),n.t6=c,n.next=27,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 27:return n.t7=n.sent,O=(0,n.t6)(n.t7),n.next=31,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 31:return o=n.sent,n.t8=N,n.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 35:return n.t9=n.sent,f=(0,n.t8)(n.t9),n.next=39,e.e(16).then(e.bind(null,"OH0R"));case 39:return l=n.sent,S={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},d=function(){var r=(0,f.useForm)(),v=function(M,B){B.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(B.map(function(X){return X.name}))):(0,l.fakeApi)("xxx/submit",M).then(function(X){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},h=function(){(0,l.fakeApi)("xxx/getForm").then(function(M){r.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return O.default.createElement("div",{style:{width:"400px"}},O.default.createElement(f.default,{form:r,schema:S,onFinish:v}),O.default.createElement(s.default,null,O.default.createElement(p.default,{onClick:h},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),O.default.createElement(p.default,{type:"primary",onClick:r.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},C=d,n.abrupt("return",C);case 44:case"end":return n.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button, message, Space } from 'antd';
import FormRender, { useForm } from 'form-render';
import { fakeApi } from './utils';

const schema = {
  type: 'object',
  properties: {
    dateRange: {
      bind: ['startDate', 'endDate'],
      title: '\u65E5\u671F\u8303\u56F4',
      type: 'range',
      format: 'date',
    },
  },
};

const Demo = () => {
  const form = useForm();

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      fakeApi('xxx/submit', data).then(_ => message.success('\u63D0\u4EA4\u6210\u529F\uFF01'));
    }
  };

  const getRemoteData = () => {
    fakeApi('xxx/getForm').then(_ => {
      form.setValues({ startDate: '2020-04-04', endDate: '2020-04-24' });
    });
  };

  return (
    <div style={{ width: '400px' }}>
      <FormRender form={form} schema={schema} onFinish={onFinish} />
      <Space>
        <Button onClick={getRemoteData}>\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E</Button>
        <Button type="primary" onClick={form.submit}>
          \u63D0\u4EA4\uFF08\u89C1console\uFF09
        </Button>
      </Space>
    </div>
  );
};

export default Demo;`},"utils/index.js":{import:"./utils",content:Ce}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.7.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){var c,s,p,b,O,o,f,l,w,N,S,d;return y.a.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return w=function(a,r){if(!r&&a&&a.__esModule)return a;if(a===null||typeof a!="object"&&typeof a!="function")return{default:a};var v=l(r);if(v&&v.has(a))return v.get(a);var h={},P=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var M in a)if(M!=="default"&&Object.prototype.hasOwnProperty.call(a,M)){var B=P?Object.getOwnPropertyDescriptor(a,M):null;B&&(B.get||B.set)?Object.defineProperty(h,M,B):h[M]=a[M]}return h.default=a,v&&v.set(a,h),h},l=function(a){if(typeof WeakMap!="function")return null;var r=new WeakMap,v=new WeakMap;return(l=function(P){return P?v:r})(a)},c=e("K+nK"),m.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return m.t0=c,m.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return m.t1=m.sent,s=(0,m.t0)(m.t1),m.next=12,e.e(15).then(e.t.bind(null,"tL+A",7));case 12:return m.t2=c,m.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return m.t3=m.sent,p=(0,m.t2)(m.t3),m.t4=w,m.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return m.t5=m.sent,b=(0,m.t4)(m.t5),m.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 24:return O=m.sent,m.t6=w,m.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 28:return m.t7=m.sent,o=(0,m.t6)(m.t7),m.next=32,e.e(16).then(e.bind(null,"OH0R"));case 32:return f=m.sent,N={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},S=function(){var a=(0,o.useForm)(),r=function(){a.setSchemaByPath("obj1.select1",{enum:["east","south","west","north"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},v=function(P,M){M.length>0?p.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(M.map(function(B){return B.name}))):p.default.info(JSON.stringify(P))};return b.default.createElement("div",{style:{width:"400px"}},b.default.createElement(o.default,{form:a,schema:N,onMount:r,onFinish:v}),b.default.createElement(s.default,{type:"primary",onClick:a.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},d=S,m.abrupt("return",d);case 37:case"end":return m.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
import { Button, message } from 'antd';
import FormRender, { useForm } from 'form-render';
import { fakeApi } from './utils';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    obj1: {
      title: '\u5BF9\u8C61',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      properties: {
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          widget: 'select',
        },
      },
    },
  },
};

const Demo = () => {
  const form = useForm();

  const onMount = () => {
    form.setSchemaByPath('obj1.select1', {
      enum: ['east', 'south', 'west', 'north'],
      enumNames: ['\u4E1C', '\u5357', '\u897F', '\u5317'],
    });
  };

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      message.info(JSON.stringify(data));
    }
  };

  return (
    <div style={{ width: '400px' }}>
      <FormRender
        form={form}
        schema={schema}
        onMount={onMount}
        onFinish={onFinish}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4\uFF08\u89C1console\uFF09
      </Button>
    </div>
  );
};

export default Demo;`},"utils/index.js":{import:"./utils",content:Ce}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.7.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){var c,s,p,b,O,o,f,l;return y.a.wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return O=function(d,C){if(!C&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var m=b(C);if(m&&m.has(d))return m.get(d);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in d)if(r!=="default"&&Object.prototype.hasOwnProperty.call(d,r)){var v=a?Object.getOwnPropertyDescriptor(d,r):null;v&&(v.get||v.set)?Object.defineProperty(n,r,v):n[r]=d[r]}return n.default=d,m&&m.set(d,n),n},b=function(d){if(typeof WeakMap!="function")return null;var C=new WeakMap,m=new WeakMap;return(b=function(a){return a?m:C})(d)},c=e("K+nK"),N.t0=c,N.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return N.t1=N.sent,s=(0,N.t0)(N.t1),N.t2=O,N.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 11:return N.t3=N.sent,p=(0,N.t2)(N.t3),o={type:"object",properties:{checkbox1:{title:"\u5C55\u793A\u66F4\u591A\u5185\u5BB9",type:"boolean"},select1:{title:"\u8BF7\u5047\u539F\u56E0",type:"string",enum:["a","b","c"],enumNames:["\u75C5\u5047","\u6709\u4E8B","\u5176\u5B83 (\u9700\u6CE8\u660E\u5177\u4F53\u539F\u56E0)"],hidden:"{{formData.checkbox1 !== true}}",widget:"radio"},input1:{title:"\u5177\u4F53\u539F\u56E0",type:"string",format:"textarea",hidden:'{{rootValue.checkbox1 !== true || formData.select1 !== "c"}}'}}},f=function(){var d=(0,p.useForm)();return s.default.createElement(p.default,{form:d,schema:o})},l=f,N.abrupt("return",l);case 17:case"end":return N.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    checkbox1: {
      title: '\u5C55\u793A\u66F4\u591A\u5185\u5BB9',
      type: 'boolean',
    },
    select1: {
      title: '\u8BF7\u5047\u539F\u56E0',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['\u75C5\u5047', '\u6709\u4E8B', '\u5176\u5B83 (\u9700\u6CE8\u660E\u5177\u4F53\u539F\u56E0)'],
      hidden: '{{formData.checkbox1 !== true}}',
      widget: 'radio',
    },
    input1: {
      title: '\u5177\u4F53\u539F\u56E0',
      type: 'string',
      format: 'textarea',
      hidden: '{{rootValue.checkbox1 !== true || formData.select1 !== "c"}}',
    },
  },
};

const Demo1 = () => {
  const form = useForm();
  return <FormRender form={form} schema={schema} />;
};

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.7.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){var c,s,p,b,O;return y.a.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return c=e("K+nK"),f.t0=c,f.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return f.t1=f.sent,s=(0,f.t0)(f.t1),f.t2=c,f.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return f.t3=f.sent,p=(0,f.t2)(f.t3),f.next=13,e.e(21).then(e.bind(null,"8iYR"));case 13:return b=f.sent,O=function(){return s.default.createElement(p.default,{schema:b.expression})},f.abrupt("return",O);case 16:case"end":return f.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:oe},"json/schema.js":{import:"../json/schema",content:$n}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.7.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){var c,s,p,b,O,o,f,l,w;return y.a.wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return O=function(C,m){if(!m&&C&&C.__esModule)return C;if(C===null||typeof C!="object"&&typeof C!="function")return{default:C};var n=b(m);if(n&&n.has(C))return n.get(C);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in C)if(v!=="default"&&Object.prototype.hasOwnProperty.call(C,v)){var h=r?Object.getOwnPropertyDescriptor(C,v):null;h&&(h.get||h.set)?Object.defineProperty(a,v,h):a[v]=C[v]}return a.default=C,n&&n.set(C,a),a},b=function(C){if(typeof WeakMap!="function")return null;var m=new WeakMap,n=new WeakMap;return(b=function(r){return r?n:m})(C)},S.t0=O,S.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return S.t1=S.sent,c=(0,S.t0)(S.t1),S.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 9:return s=S.sent,S.t2=O,S.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 13:return S.t3=S.sent,p=(0,S.t2)(S.t3),o=function(C){return new Promise(function(m){return setTimeout(m,C)})},f={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u9009\u62E9\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"radio"}}},l=function(){var C=(0,p.useForm)(),m=function(){C.setValues({input1:"hello world"}),o(3e3).then(function(a){C.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return c.default.createElement(p.default,{form:C,schema:f,onMount:m})},w=l,S.abrupt("return",w);case 20:case"end":return S.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const delay = ms => new Promise(res => setTimeout(res, ms));

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    select1: {
      title: '\u9009\u62E9\u6846',
      description: '\u52A0\u8F7D\u4E2D...',
      type: 'string',
      enum: [],
      widget: 'radio',
    },
  },
};

const Demo = () => {
  const form = useForm();

  const onMount = () => {
    form.setValues({ input1: 'hello world' });

    delay(3000).then(_ => {
      form.setSchemaByPath('select1', {
        description: '',
        enum: ['a', 'b', 'c'],
        enumNames: ['\u65E9', '\u4E2D', '\u665A'],
      });
    });
  };

  return <FormRender form={form} schema={schema} onMount={onMount} />;
};

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.7.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"listDisplay-demo":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){var c,s,p,b,O,o;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return c=e("K+nK"),l.t0=c,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,s=(0,l.t0)(l.t1),l.t2=c,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,p=(0,l.t2)(l.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},O=function(){return s.default.createElement(p.default,{schema:b})},o=O,l.abrupt("return",o);case 15:case"end":return l.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      // widget: 'cardList',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
          obj: {
            title: '\u5BF9\u8C61',
            type: 'object',
            properties: {
              input1: {
                title: '\u7B80\u5355\u8F93\u5165\u6846',
                type: 'string',
                required: true,
              },
              select1: {
                title: '\u5355\u9009',
                type: 'string',
                enum: ['a', 'b', 'c'],
                enumNames: ['\u65E9', '\u4E2D', '\u665A'],
              },
            },
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Te}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.7.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo"}},"listDisplay-demo-1":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){var c,s,p,b,O,o;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return c=e("K+nK"),l.t0=c,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,s=(0,l.t0)(l.t1),l.t2=c,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,p=(0,l.t2)(l.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"simpleList",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},O=function(){return s.default.createElement(p.default,{schema:b})},o=O,l.abrupt("return",o);case 15:case"end":return l.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'simpleList',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Te}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.7.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-1"}},"listDisplay-demo-2":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){var c,s,p,b,O,o;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return c=e("K+nK"),l.t0=c,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,s=(0,l.t0)(l.t1),l.t2=c,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,p=(0,l.t2)(l.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"tableList",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},O=function(){return s.default.createElement(p.default,{schema:b})},o=O,l.abrupt("return",o);case 15:case"end":return l.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'tableList',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          input2: {
            title: '\u7B80\u5355\u8F93\u5165\u68462',
            type: 'string',
          },
          input3: {
            title: '\u7B80\u5355\u8F93\u5165\u68463',
            type: 'string',
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
            widget: 'select',
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Te}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.7.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-2"}},"listDisplay-demo-3":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){var c,s,p,b,O,o;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return c=e("K+nK"),l.t0=c,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,s=(0,l.t0)(l.t1),l.t2=c,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,p=(0,l.t2)(l.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"drawerList",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"simpleList",props:{hideMove:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},O=function(){return s.default.createElement(p.default,{schema:b})},o=O,l.abrupt("return",o);case 15:case"end":return l.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'drawerList',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
          listName2: {
            title: '\u5BF9\u8C61\u6570\u7EC4',
            description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
            type: 'array',
            widget: 'simpleList',
            props: {
              hideMove: true,
            },
            items: {
              type: 'object',
              properties: {
                input1: {
                  title: '\u7B80\u5355\u8F93\u5165\u6846',
                  type: 'string',
                  required: true,
                },
                select1: {
                  title: '\u5355\u9009',
                  type: 'string',
                  enum: ['a', 'b', 'c'],
                  enumNames: ['\u65E9', '\u4E2D', '\u665A'],
                },
              },
            },
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Te}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.7.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-3"}},"listDisplay-demo-4":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){var c,s,p,b,O,o;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return c=e("K+nK"),l.t0=c,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,s=(0,l.t0)(l.t1),l.t2=c,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,p=(0,l.t2)(l.t3),window.hello=function(w){var N=w.value;console.log(N)},b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"virtualList",itemProps:{buttons:[{callback:"hello",text:"\u590D\u5236"}]},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},O=function(){return s.default.createElement(p.default,{schema:b})},o=O,l.abrupt("return",o);case 16:case"end":return l.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

window.hello = ({ value }) => {
  console.log(value);
};

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'virtualList',
      itemProps: {
        buttons: [
          {
            callback: 'hello',
            text: '\u590D\u5236',
          },
        ],
      },
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          input2: {
            title: '\u7B80\u5355\u8F93\u5165\u68462',
            type: 'string',
          },
          input3: {
            title: '\u7B80\u5355\u8F93\u5165\u68463',
            type: 'string',
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
            widget: 'select',
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Te}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.7.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-4"}},"mapping-demo":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){var c,s,p,b,O,o,f,l,w,N,S;return y.a.wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return f=function(n,a){if(!a&&n&&n.__esModule)return n;if(n===null||typeof n!="object"&&typeof n!="function")return{default:n};var r=o(a);if(r&&r.has(n))return r.get(n);var v={},h=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var P in n)if(P!=="default"&&Object.prototype.hasOwnProperty.call(n,P)){var M=h?Object.getOwnPropertyDescriptor(n,P):null;M&&(M.get||M.set)?Object.defineProperty(v,P,M):v[P]=n[P]}return v.default=n,r&&r.set(n,v),v},o=function(n){if(typeof WeakMap!="function")return null;var a=new WeakMap,r=new WeakMap;return(o=function(h){return h?r:a})(n)},c=e("K+nK"),C.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return C.t0=c,C.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return C.t1=C.sent,s=(0,C.t0)(C.t1),C.t2=c,C.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return C.t3=C.sent,p=(0,C.t2)(C.t3),C.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 17:return b=C.sent,C.t4=f,C.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return C.t5=C.sent,O=(0,C.t4)(C.t5),l=function(n){var a=n.schema;return a.$id==="#"?p.default.createElement("div",null,n.children):p.default.createElement("div",null,"my custom object:",n.children)},w={type:"object",properties:{object2:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u8F93\u5165\u6846",type:"string"}}}},labelWidth:120,displayType:"row"},N=function(){var n=(0,O.useForm)(),a=function(v,h){console.log("formData:",v,"errors",h)};return p.default.createElement("div",null,p.default.createElement(O.default,{form:n,schema:w,onFinish:a,mapping:{object:"CustomComA"},widgets:{CustomComA:l}}),p.default.createElement(s.default,{type:"primary",onClick:n.submit},"\u63D0\u4EA4"))},S=N,C.abrupt("return",S);case 28:case"end":return C.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const CustomComA = props => {
  const { schema } = props;
  if (schema.$id === '#') {
    return <div>{props.children}</div>;
  }
  return (
    <div>
      my custom object:
      {props.children}
    </div>
  );
};

const schema = {
  type: 'object',
  properties: {
    object2: {
      title: '\u5BF9\u8C61',
      type: 'object',
      properties: {
        input1: {
          title: '\u8F93\u5165\u6846',
          type: 'string',
        },
      },
    },
  },
  labelWidth: 120,
  displayType: 'row',
};

const Demo = () => {
  const form = useForm();
  const onFinish = (formData, errors) => {
    console.log('formData:', formData, 'errors', errors);
  };
  return (
    <div>
      <FormRender
        form={form}
        schema={schema}
        onFinish={onFinish}
        mapping={{ object: 'CustomComA' }}
        widgets={{ CustomComA }}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.7.0"},"react-dom":{version:">=16.8.0"}},identifier:"mapping-demo"}},"watch-demo":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){var c,s,p,b,O,o,f,l;return y.a.wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return O=function(d,C){if(!C&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var m=b(C);if(m&&m.has(d))return m.get(d);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in d)if(r!=="default"&&Object.prototype.hasOwnProperty.call(d,r)){var v=a?Object.getOwnPropertyDescriptor(d,r):null;v&&(v.get||v.set)?Object.defineProperty(n,r,v):n[r]=d[r]}return n.default=d,m&&m.set(d,n),n},b=function(d){if(typeof WeakMap!="function")return null;var C=new WeakMap,m=new WeakMap;return(b=function(a){return a?m:C})(d)},N.t0=O,N.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return N.t1=N.sent,c=(0,N.t0)(N.t1),N.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 9:return s=N.sent,N.t2=O,N.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 13:return N.t3=N.sent,p=(0,N.t2)(N.t3),o={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},f=function(){var d=(0,p.useForm)(),C={"#":function(n){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",n)},input1:function(n){d.setValueByPath("input2",n)}};return c.default.createElement(p.default,{form:d,schema:o,watch:C})},l=f,N.abrupt("return",l);case 19:case"end":return N.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
      placeholder: '\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165',
    },
    input2: {
      title: '\u7B80\u5355\u8F93\u5165\u68462',
      type: 'string',
    },
  },
};

const Demo = () => {
  const form = useForm();

  const watch = {
    // # \u4E3A\u5168\u5C40
    '#': val => {
      console.log('\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A', val);
    },
    input1: val => {
      form.setValueByPath('input2', val);
    },
  };

  return <FormRender form={form} schema={schema} watch={watch} />;
};

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.7.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){var c,s,p,b,O,o,f,l,w,N;return y.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return f=function(m,n){if(!n&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var a=o(n);if(a&&a.has(m))return a.get(m);var r={},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var h in m)if(h!=="default"&&Object.prototype.hasOwnProperty.call(m,h)){var P=v?Object.getOwnPropertyDescriptor(m,h):null;P&&(P.get||P.set)?Object.defineProperty(r,h,P):r[h]=m[h]}return r.default=m,a&&a.set(m,r),r},o=function(m){if(typeof WeakMap!="function")return null;var n=new WeakMap,a=new WeakMap;return(o=function(v){return v?a:n})(m)},c=e("K+nK"),d.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return d.t0=c,d.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return d.t1=d.sent,s=(0,d.t0)(d.t1),d.t2=f,d.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return d.t3=d.sent,p=(0,d.t2)(d.t3),d.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 17:return b=d.sent,d.t4=f,d.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return d.t5=d.sent,O=(0,d.t4)(d.t5),l={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},w=function(){var m=(0,O.useForm)(),n=function(v,h){h.length>0?alert("errorFields:"+JSON.stringify(h)):alert("formData:"+JSON.stringify(v,null,2))},a={input1:function(v){v&&v.length>2?m.setSchemaByPath("obj1.select",function(h){var P=h.enumNames;return{enumNames:P.map(function(M){return M+"a"})}}):m.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return p.default.createElement("div",null,p.default.createElement(O.default,{form:m,schema:l,onFinish:n,watch:a}),p.default.createElement(s.default,{type:"",style:{marginRight:8},onClick:function(){return m.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),p.default.createElement(s.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},N=w,d.abrupt("return",N);case 27:case"end":return d.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
      placeholder: '\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165',
    },
    input2: {
      title: '\u7B80\u5355\u8F93\u5165\u68462',
      type: 'string',
    },
    obj1: {
      title: '\u5BF9\u8C61',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      properties: {
        select: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          widget: 'radio',
        },
      },
    },
  },
};

const Demo = () => {
  const form = useForm();
  const onFinish = (formData, errorFields) => {
    if (errorFields.length > 0) {
      alert('errorFields:' + JSON.stringify(errorFields));
    } else {
      alert('formData:' + JSON.stringify(formData, null, 2));
    }
  };

  const watch = {
    input1: val => {
      if (val && val.length > 2) {
        form.setSchemaByPath('obj1.select', ({ enumNames }) => {
          return {
            enumNames: enumNames.map(item => item + 'a'),
          };
        });
      } else {
        form.setSchemaByPath('obj1.select', { enumNames: ['\u65E9', '\u4E2D', '\u665A'] });
      }
    },
  };

  return (
    <div>
      <FormRender
        form={form}
        schema={schema}
        onFinish={onFinish}
        watch={watch}
      />
      <Button
        type=""
        style={{ marginRight: 8 }}
        onClick={() =>
          form.setSchemaByPath('input2', {
            title: '\u7F16\u8F91\u6846',
            format: 'textarea',
          })
        }
      >
        \u5C06 input \u6539\u4E3A textarea
      </Button>
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.7.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){var c,s,p,b,O,o,f,l,w,N,S,d,C;return y.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return w=function(r,v){if(!v&&r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var h=l(v);if(h&&h.has(r))return h.get(r);var P={},M=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var B in r)if(B!=="default"&&Object.prototype.hasOwnProperty.call(r,B)){var X=M?Object.getOwnPropertyDescriptor(r,B):null;X&&(X.get||X.set)?Object.defineProperty(P,B,X):P[B]=r[B]}return P.default=r,h&&h.set(r,P),P},l=function(r){if(typeof WeakMap!="function")return null;var v=new WeakMap,h=new WeakMap;return(l=function(M){return M?h:v})(r)},c=e("K+nK"),n.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return n.t0=c,n.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return n.t1=n.sent,s=(0,n.t0)(n.t1),n.next=12,Promise.all([e.e(3),e.e(19)]).then(e.t.bind(null,"cUip",7));case 12:return n.t2=c,n.next=15,Promise.all([e.e(0),e.e(8),e.e(18),e.e(20)]).then(e.t.bind(null,"iJl9",7));case 15:return n.t3=n.sent,p=(0,n.t2)(n.t3),n.t4=c,n.next=20,e.e(88).then(e.bind(null,"0Owb"));case 20:return n.t5=n.sent,b=(0,n.t4)(n.t5),n.t6=c,n.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return n.t7=n.sent,O=(0,n.t6)(n.t7),n.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 29:return o=n.sent,n.t8=w,n.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 33:return n.t9=n.sent,f=(0,n.t8)(n.t9),N={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},S=function(r){return console.log("widget props:",r),O.default.createElement(p.default,(0,b.default)({addonBefore:"https://",addonAfter:".com"},r))},d=function(){var r=(0,f.useForm)();return O.default.createElement("div",null,O.default.createElement(f.default,{form:r,schema:N,widgets:{site:S},onFinish:function(h){return alert(JSON.stringify(h,null,2))}}),O.default.createElement(s.default,{type:"primary",onClick:r.submit},"\u63D0\u4EA4"))},C=d,n.abrupt("return",C);case 40:case"end":return n.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Input, Button } from 'antd';
import Form, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    string: {
      title: '\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6',
      type: 'string',
      widget: 'site',
    },
    select: {
      title: '\u5355\u9009',
      type: 'number',
      enum: [1, 2, 3],
      enumNames: ['\u9009\u98791', '\u9009\u98792', '\u9009\u98793'],
    },
  },
};

const SiteInput = props => {
  console.log('widget props:', props);
  return <Input addonBefore="https://" addonAfter=".com" {...props} />;
};

const Demo = () => {
  const form = useForm();
  return (
    <div>
      <Form
        form={form}
        schema={schema}
        widgets={{ site: SiteInput }}
        onFinish={formData => alert(JSON.stringify(formData, null, 2))}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.7.0"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"form-render-dependencies":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){return y.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"ODQR"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:Re}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.7.0"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-dependencies"}},"form-render-hideself":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){return y.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"qCe5"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:Dn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.7.0"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-hideself"}},"measure-demo":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){var c,s,p,b,O,o,f,l,w,N;return y.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return l=function(m,n){if(!n&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var a=f(n);if(a&&a.has(m))return a.get(m);var r={},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var h in m)if(h!=="default"&&Object.prototype.hasOwnProperty.call(m,h)){var P=v?Object.getOwnPropertyDescriptor(m,h):null;P&&(P.get||P.set)?Object.defineProperty(r,h,P):r[h]=m[h]}return r.default=m,a&&a.set(m,r),r},f=function(m){if(typeof WeakMap!="function")return null;var n=new WeakMap,a=new WeakMap;return(f=function(v){return v?a:n})(m)},c=e("K+nK"),d.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return d.t0=c,d.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return d.t1=d.sent,s=(0,d.t0)(d.t1),d.next=12,e.e(15).then(e.t.bind(null,"tL+A",7));case 12:return d.t2=c,d.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return d.t3=d.sent,p=(0,d.t2)(d.t3),d.t4=l,d.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return d.t5=d.sent,b=(0,d.t4)(d.t5),d.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 24:return O=d.sent,d.t6=l,d.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 28:return d.t7=d.sent,o=(0,d.t6)(d.t7),w=function(){var m=(0,o.useForm)({logOnMount:function(v){console.log("onMount",v)},logOnSubmit:function(v){console.log("onSubmit",v)}}),n={type:"object",properties:{input1:{title:"\u8F93\u5165\u6846",required:!0,type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u5DE6","\u4E2D","\u53F3"],widget:"radio"}}},a=function(v,h){h.length>0?p.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(h.map(function(P){return P.name}))):p.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")};return b.default.createElement("div",null,b.default.createElement(o.default,{id:"my-demo-form",form:m,schema:n,onFinish:a}),b.default.createElement(s.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},N=w,d.abrupt("return",N);case 33:case"end":return d.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
import { Button, Space, message } from 'antd';
import FormRender, { useForm } from 'form-render';

const Demo = () => {
  const form = useForm({
    logOnMount: info => {
      console.log('onMount', info);
    },
    logOnSubmit: info => {
      console.log('onSubmit', info);
    },
  });

  const schema = {
    type: 'object',
    properties: {
      input1: {
        title: '\u8F93\u5165\u6846',
        required: true,
        type: 'string',
      },
      select1: {
        title: '\u5355\u9009',
        type: 'string',
        enum: ['a', 'b', 'c'],
        enumNames: ['\u5DE6', '\u4E2D', '\u53F3'],
        widget: 'radio',
      },
    },
  };

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      message.success('\u63D0\u4EA4\u6210\u529F\uFF01');
    }
  };

  return (
    <div>
      <FormRender
        id="my-demo-form"
        form={form}
        schema={schema}
        onFinish={onFinish}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4\uFF08\u89C1console\uFF09
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.7.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"measure-demo"}},"migrate-demo":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){var c,s,p,b,O,o,f,l;return y.a.wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return f=function(){var d=(0,p.useForm)(),C=function(n,a){a.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(a))):alert(JSON.stringify(n))};return s.default.createElement("div",null,s.default.createElement(p.default,{form:d,schema:o,onFinish:C}),s.default.createElement("button",{onClick:d.submit},"\u63D0\u4EA4"))},O=function(d,C){if(!C&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var m=b(C);if(m&&m.has(d))return m.get(d);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in d)if(r!=="default"&&Object.prototype.hasOwnProperty.call(d,r)){var v=a?Object.getOwnPropertyDescriptor(d,r):null;v&&(v.get||v.set)?Object.defineProperty(n,r,v):n[r]=d[r]}return n.default=d,m&&m.set(d,n),n},b=function(d){if(typeof WeakMap!="function")return null;var C=new WeakMap,m=new WeakMap;return(b=function(a){return a?m:C})(d)},c=e("K+nK"),N.t0=c,N.next=7,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 7:return N.t1=N.sent,s=(0,N.t0)(N.t1),N.t2=O,N.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 12:return N.t3=N.sent,p=(0,N.t2)(N.t3),o={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},l=f,N.abrupt("return",l);case 17:case"end":return N.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FormRender, { useForm } from 'form-render'; // 1. \u6539 import

const schema = {
  type: 'object',
  properties: {
    string: {
      title: '\u5B57\u7B26\u4E32',
      type: 'string',
      required: true,
    },
  },
};

function Demo() {
  const form = useForm(); // 2. \u83B7\u53D6 form \u5B9E\u4F8B\uFF0C\u73B0\u5728\u6240\u6709\u8868\u5355\u65B9\u6CD5\u90FD\u6302\u5728\u4E0A\u9762
  // 3 onSubmit \u7684\u5165\u53C2
  const onSubmit = (formData, valid) => {
    if (valid.length > 0) {
      alert(\`\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A\${JSON.stringify(valid)}\`);
    } else {
      alert(JSON.stringify(formData));
    }
  };
  return (
    <div>
      <FormRender
        form={form} // 4 \u8865\u4E0A
        schema={schema}
        onFinish={onSubmit} // 5. \u8865\u4E0A
        // formData={formData} // 6. \u5E72\u6389
        // onChange={setData}
        // onValidate={setValid}
      />
      <button onClick={form.submit}>\u63D0\u4EA4</button>
    </div>
  );
}
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.7.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"migrate-demo-1":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){var c,s,p,b,O,o,f,l,w,N,S,d,C;return y.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return w=function(r,v){if(!v&&r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var h=l(v);if(h&&h.has(r))return h.get(r);var P={},M=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var B in r)if(B!=="default"&&Object.prototype.hasOwnProperty.call(r,B)){var X=M?Object.getOwnPropertyDescriptor(r,B):null;X&&(X.get||X.set)?Object.defineProperty(P,B,X):P[B]=r[B]}return P.default=r,h&&h.set(r,P),P},l=function(r){if(typeof WeakMap!="function")return null;var v=new WeakMap,h=new WeakMap;return(l=function(M){return M?h:v})(r)},c=e("K+nK"),n.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return n.t0=c,n.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return n.t1=n.sent,s=(0,n.t0)(n.t1),n.t2=c,n.next=13,Promise.resolve().then(e.bind(null,"tJVT"));case 13:return n.t3=n.sent,p=(0,n.t2)(n.t3),n.next=17,Promise.all([e.e(3),e.e(19)]).then(e.t.bind(null,"cUip",7));case 17:return n.t4=c,n.next=20,Promise.all([e.e(0),e.e(8),e.e(18),e.e(20)]).then(e.t.bind(null,"iJl9",7));case 20:return n.t5=n.sent,b=(0,n.t4)(n.t5),n.t6=w,n.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return n.t7=n.sent,O=(0,n.t6)(n.t7),n.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 29:return o=n.sent,n.next=32,Promise.all([e.e(22),e.e(25)]).then(e.bind(null,"7t+U"));case 32:return f=n.sent,N=b.default.TextArea,S={type:"object",properties:{number:{title:"\u6570\u5B57\u8F93\u5165\u6846",type:"number","ui:disabled":!0},checkbox:{title:"\u662F\u5426\u9009\u62E9",type:"boolean","ui:widget":"switch"}},required:["number"]},d=function(){var r=(0,O.useState)(JSON.stringify(S)),v=(0,p.default)(r,2),h=v[0],P=v[1],M=(0,O.useState)({}),B=(0,p.default)(M,2),X=B[0],Ke=B[1],Xe=function(){try{var cn=(0,f.updateSchemaToNewVersion)(JSON.parse(h));Ke(cn)}catch(Un){console.log(Un)}},dn=function(cn){P(cn.target.value)},In=function(){P(JSON.stringify(JSON.parse(h),null,2))};return O.default.createElement("div",null,O.default.createElement("div",null,"\u586B\u5165\u65E7\u7248schema\uFF1A"),O.default.createElement(N,{style:{minHeight:400,marginTop:12,marginBottom:12},value:h,onChange:dn}),O.default.createElement(s.default,{style:{marginRight:12},onClick:In},"\u683C\u5F0F\u5316\u65E7schema"),O.default.createElement(s.default,{type:"primary",onClick:Xe},"\u751F\u6210\u65B0\u7248schema"),O.default.createElement(N,{style:{minHeight:400,marginTop:12},value:JSON.stringify(X,null,2)}))},C=d,n.abrupt("return",C);case 38:case"end":return n.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { updateSchemaToNewVersion } from '../../../packages/form-render/src/utils.js';
const TextArea = Input.TextArea;

const old = {
  type: 'object',
  properties: {
    number: {
      title: '\u6570\u5B57\u8F93\u5165\u6846',
      type: 'number',
      'ui:disabled': true,
    },
    checkbox: {
      title: '\u662F\u5426\u9009\u62E9',
      type: 'boolean',
      'ui:widget': 'switch',
    },
  },
  required: ['number'],
};

const Translator = () => {
  const [oldSchema, setOld] = useState(JSON.stringify(old));
  const [newSchema, setNew] = useState({});

  const handleClick = () => {
    try {
      const _newSchema = updateSchemaToNewVersion(JSON.parse(oldSchema));
      setNew(_newSchema);
    } catch (err) {
      console.log(err);
    }
  };

  const onOldChange = e => {
    setOld(e.target.value);
  };

  const formatOld = () => {
    setOld(JSON.stringify(JSON.parse(oldSchema), null, 2));
  };

  return (
    <div>
      <div>\u586B\u5165\u65E7\u7248schema\uFF1A</div>
      <TextArea
        style={{ minHeight: 400, marginTop: 12, marginBottom: 12 }}
        value={oldSchema}
        onChange={onOldChange}
      />
      <Button style={{ marginRight: 12 }} onClick={formatOld}>
        \u683C\u5F0F\u5316\u65E7schema
      </Button>
      <Button type="primary" onClick={handleClick}>
        \u751F\u6210\u65B0\u7248schema
      </Button>
      <TextArea
        style={{ minHeight: 400, marginTop: 12 }}
        value={JSON.stringify(newSchema, null, 2)}
      />
    </div>
  );
};

export default Translator;`},"packages/form-render/src/utils.js":{import:"../../packages/form-render/src/utils.js",content:V}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"},"lodash-es":{version:"4.17.21"}},identifier:"migrate-demo-1"}},"migrate2-demo":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){var c,s,p,b,O,o,f,l,w;return y.a.wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return l=function(){var C=(0,p.useState)({}),m=(0,s.default)(C,2),n=m[0],a=m[1],r=(0,p.useState)([]),v=(0,s.default)(r,2),h=v[0],P=v[1],M=(0,p.useState)(!1),B=(0,s.default)(M,2),X=B[0],Ke=B[1],Xe=(0,b.useForm)({formData:n,onChange:a,onValidate:P,showValidate:X});(0,p.useEffect)(function(){Xe.init()},[]);var dn=function(){Ke(!0),h.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(h))):alert(JSON.stringify(n))};return p.default.createElement("div",null,p.default.createElement(b.default,{form:Xe,schema:f}),p.default.createElement("button",{onClick:dn},"\u63D0\u4EA4"))},o=function(C,m){if(!m&&C&&C.__esModule)return C;if(C===null||typeof C!="object"&&typeof C!="function")return{default:C};var n=O(m);if(n&&n.has(C))return n.get(C);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in C)if(v!=="default"&&Object.prototype.hasOwnProperty.call(C,v)){var h=r?Object.getOwnPropertyDescriptor(C,v):null;h&&(h.get||h.set)?Object.defineProperty(a,v,h):a[v]=C[v]}return a.default=C,n&&n.set(C,a),a},O=function(C){if(typeof WeakMap!="function")return null;var m=new WeakMap,n=new WeakMap;return(O=function(r){return r?n:m})(C)},c=e("K+nK"),S.t0=c,S.next=7,Promise.resolve().then(e.bind(null,"tJVT"));case 7:return S.t1=S.sent,s=(0,S.t0)(S.t1),S.t2=o,S.next=12,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 12:return S.t3=S.sent,p=(0,S.t2)(S.t3),S.t4=o,S.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 17:return S.t5=S.sent,b=(0,S.t4)(S.t5),f={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},w=l,S.abrupt("return",w);case 22:case"end":return S.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
import FormRender, { useForm } from 'form-render'; // 1. \u6539 import

const schema = {
  type: 'object',
  properties: {
    string: {
      title: '\u5B57\u7B26\u4E32',
      type: 'string',
      required: true,
    },
  },
};

function Demo() {
  const [formData, setData] = useState({});
  const [valid, setValid] = useState([]);
  const [showValidate, setShowValidate] = useState(false);

  const form = useForm({
    formData,
    onChange: setData,
    onValidate: setValid,
    showValidate,
  }); // 1. formData\u3001onChange \u548C onValidate \u4F5C\u4E3A useForm \u7684\u5165\u53C2\u4F20\u5165

  useEffect(() => {
    form.init();
  }, []);

  const onSubmit = () => {
    setShowValidate(true);
    if (valid.length > 0) {
      alert(\`\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A\${JSON.stringify(valid)}\`);
    } else {
      alert(JSON.stringify(formData));
    }
  };

  return (
    <div>
      <FormRender
        form={form} // 3. \u8865\u4E0A
        schema={schema}
        // formData={formData} // 4. \u5168\u653E\u5230 useForm \u91CC\u4E86
        // onChange={setData}
        // onValidate={setValid}
        // showValidate={showValidate}
      />
      <button onClick={onSubmit}>\u63D0\u4EA4</button>
    </div>
  );
}
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.7.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate2-demo"}},"schema-demo":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){var c,s,p,b,O;return y.a.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return c=e("K+nK"),f.t0=c,f.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return f.t1=f.sent,s=(0,f.t0)(f.t1),f.t2=c,f.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return f.t3=f.sent,p=(0,f.t2)(f.t3),f.next=13,e.e(21).then(e.bind(null,"8iYR"));case 13:return b=f.sent,O=function(){return s.default.createElement(p.default,{schema:b.basic})},f.abrupt("return",O);case 16:case"end":return f.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:oe},"json/schema.js":{import:"../json/schema",content:$n}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.7.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"schema-demo-1":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){var c,s,p,b,O;return y.a.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return c=e("K+nK"),f.t0=c,f.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return f.t1=f.sent,s=(0,f.t0)(f.t1),f.t2=c,f.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return f.t3=f.sent,p=(0,f.t2)(f.t3),f.next=13,e.e(21).then(e.bind(null,"8iYR"));case 13:return b=f.sent,O=function(){return s.default.createElement(p.default,{schema:b.titleTrick})},f.abrupt("return",O);case 16:case"end":return f.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { titleTrick } from '../json/schema';

export default () => <FR schema={titleTrick} />;`},"demo/FR.jsx":{import:"../demo/FR",content:oe},"json/schema.js":{import:"../json/schema",content:$n}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.7.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo-1"}},"docs-playground":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){return y.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"BASV"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:Pn},"main.js":{import:"./main",content:vn},"json/simplest.json":{import:"./json/simplest.json",content:an},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:$e},"monaco/index.js":{import:"./monaco",content:wn},"theme.css":{import:"./theme.css",content:Tn},"index.css":{import:"./index.css",content:gn}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^16.0.0"},"react-dom":{version:"^16.0.0"},"deep-equal":{version:"2.0.5"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.7.0"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-simple-code-editor":{version:"0.11.0"},prismjs:{version:"1.23.0"}},identifier:"docs-playground"}},"docs-playground1":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){return y.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"Wrpt"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:Fe},"main.js":{import:"./main",content:et},"json/simplest.json":{import:"./json/simplest.json",content:Mn},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:nt},"monaco/index.js":{import:"./monaco",content:ct},"suggestionsMap.js":{import:"./suggestionsMap",content:tt},"index.css":{import:"./index.css",content:mt}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^17.x"},"react-dom":{version:">=16.9.0"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.7.0"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-monaco-editor":{version:"0.44.0"},"@types/react":{version:"^17.x"}},identifier:"docs-playground1"}},"table-render-advanced":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){return y.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"7ZP+"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{tsx:Bn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.5"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-nosearch":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){return y.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"CfUQ"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{tsx:rt}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.5"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-nosearch"}},"table-render-notitle":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){return y.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"/usH"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{tsx:Vn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.5"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-notitle"}},"table-render-paramtable":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){return y.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"48jF"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{tsx:ft}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.5"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},umi:{version:"3.4.19"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-paramtable"}},"table-render-demo":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){var c,s,p,b,O,o,f,l,w;return y.a.wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return c=e("K+nK"),S.t0=c,S.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return S.t1=S.sent,s=(0,S.t0)(S.t1),S.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(73)]).then(e.bind(null,"P2DI"));case 8:for(p=S.sent,b=[],O=0;O<6;O++)b.push({id:O.toString(),title:"\u6807\u9898".concat(O+1),created_at:new Date().getTime()});return o={type:"object",properties:{title:{title:"\u6807\u9898",type:"string",width:"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date",width:"30%"}}},f=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(C,m){return s.default.createElement("a",{onClick:function(){return alert(C.title)}},"\u7F16\u8F91")}}],l=function(){var C=function(){return{rows:b,total:b.length}};return s.default.createElement(s.default.Fragment,null,s.default.createElement(p.Search,{schema:o,api:C}),s.default.createElement(p.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:f,rowKey:"id"}))},w=(0,p.withTable)(l),S.abrupt("return",w);case 16:case"end":return S.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Table, Search, withTable } from 'table-render';

const dataSource = [];
for (let i = 0; i < 6; i++) {
  dataSource.push({
    id: i.toString(),
    title: \`\u6807\u9898\${i + 1}\`,
    created_at: new Date().getTime(),
  });
}

// \u8BE6\u7EC6\u53EF\u89C1 form-render \u7684\u4F7F\u7528
const schema = {
  type: 'object',
  properties: {
    title: {
      title: '\u6807\u9898',
      type: 'string',
      width: '30%',
    },
    created_at: {
      title: '\u521B\u5EFA\u65F6\u95F4',
      type: 'string',
      format: 'date',
      width: '30%',
    },
  },
};

// \u914D\u7F6E\u5B8C\u5168\u900F\u4F20 antd table
const columns = [
  {
    title: '\u6807\u9898',
    dataIndex: 'title',
  },
  {
    title: '\u521B\u5EFA\u65F6\u95F4',
    key: 'since',
    dataIndex: 'created_at',
    valueType: 'date',
  },
  {
    title: '\u64CD\u4F5C',
    render: (row, record) => <a onClick={() => alert(row.title)}>\u7F16\u8F91</a>,
  },
];

const Wrapper = () => {
  const searchApi = () => {
    return {
      rows: dataSource,
      total: dataSource.length,
    };
  };
  return (
    <>
      <Search schema={schema} api={searchApi} />
      <Table headerTitle="\u6700\u7B80\u8868\u683C" columns={columns} rowKey="id" />
    </>
  );
};

export default withTable(Wrapper);`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.5"},antd:{version:"4.x",css:"antd/dist/antd.css"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"table-render-test1":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){return y.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"aMwh"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:Kn}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.5"},antd:{version:"4.x",css:"antd/dist/antd.css"}},identifier:"table-render-test1"}},"generator-demo":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){var c,s,p,b,O,o;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return c=e("K+nK"),l.t0=c,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,s=(0,l.t0)(l.t1),l.t2=c,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(72)]).then(e.bind(null,"nYSz"));case 9:return l.t3=l.sent,p=(0,l.t2)(l.t3),b={type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},O=function(){return s.default.createElement("div",{style:{height:"80vh"}},s.default.createElement(p.default,{defaultValue:b}))},o=O,l.abrupt("return",o);case 15:case"end":return l.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Generator from 'fr-generator';

const defaultValue = {
  type: 'object',
  properties: {
    inputName: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
    },
  },
};

const Demo = () => {
  return (
    <div style={{ height: '80vh' }}>
      <Generator defaultValue={defaultValue} />
    </div>
  );
};

export default Demo;`}},dependencies:{react:{version:">=16.14.0"},"fr-generator":{version:"2.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.14.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){return y.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"PPgD"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:Wn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.5.8"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-settings":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){return y.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"M63W"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:Jn}},dependencies:{react:{version:">=16.14.0"},"fr-generator":{version:"2.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.14.0"}},identifier:"generator-settings"}},"generator-layout":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){return y.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"SOdT"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:at},"index.less":{import:"./index.less",content:Fn}},dependencies:{react:{version:">=16.14.0"},"fr-generator":{version:"2.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.14.0"}},identifier:"generator-layout"}},"generator-transformer":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){return y.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"jktF"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:st}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.5.8"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-playground":{component:Object(K.dynamic)({loader:function(){var F=Object(L.a)(y.a.mark(function I(){return y.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"TYW4"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},I)}));function D(){return F.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:un},"index.less":{import:"./index.less",content:Fn}},dependencies:{react:{version:">=16.14.0"},umi:{version:"3.4.19"},"fr-generator":{version:"2.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.14.0"}},identifier:"generator-playground"}}}},TIsu:function(jn,ln,e){},Zs1V:function(jn){jn.exports=JSON.parse("{}")},p8sG:function(jn,ln,e){"use strict";jn.exports=e("80pN")},ymTJ:function(jn,ln,e){"use strict";e.r(ln);var L=e("q1tI"),t=e.n(L),y=e("dEAq"),K=e.n(y),ue=e("0zqC"),V=e("ZpkN"),Te=e("JjdP"),Ce=t.a.memo(Te.default["measure-demo"].component);ln.default=oe=>(t.a.useEffect(()=>{oe!=null&&oe.location.hash&&y.AnchorLink.scrollToAnchor(decodeURIComponent(oe.location.hash.slice(1)))},[]),t.a.createElement(t.a.Fragment,null,t.a.createElement(t.a.Fragment,null,t.a.createElement("div",{className:"markdown"},t.a.createElement("h1",{id:"\u8868\u5355\u5065\u5EB7\u5EA6--\u63D0\u6548"},t.a.createElement(y.AnchorLink,{to:"#\u8868\u5355\u5065\u5EB7\u5EA6--\u63D0\u6548","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u8868\u5355\u5065\u5EB7\u5EA6 & \u63D0\u6548"),t.a.createElement("p",null,`\u4E1A\u754C\u6709\u53E5\u8BDD\u53EB "You can't improve what you can't measure"\u3002\u5373\u662F\u8BF4\uFF0C\u5982\u679C\u65E0\u6CD5\u5EA6\u91CF\u4E00\u4EF6\u4E8B\uFF0C\u90A3\u6539\u5584\u4E5F\u65E0\u4ECE\u8C08\u8D77\u3002 FormRender \u4F5C\u4E3A\u8868\u5355\u63D0\u6548\u7684\u65B9\u6848\uFF0C\u63D0\u6548\u7684\u540C\u65F6\u4E5F\u9700\u8981\u7ED9\u51FA\u5408\u7406\u7684\u5EA6\u91CF\u6570\u636E\uFF0C\u5E2E\u52A9\u4F7F\u7528\u8005\u66F4\u597D\u5730\u8BA4\u77E5\u548C\u53D1\u73B0\u95EE\u9898\u3002`),t.a.createElement("p",null,"\u76EE\u524D FormRender \u63D0\u4F9B\u4E86\u4E24\u4E2A\u89E6\u53D1\u65F6\u673A\u4EE5\u53CA\u4E00\u7CFB\u5217\u76F8\u5173\u6570\u636E\u4F5C\u4E3A\u5BF9\u5916\u5F00\u653E\u63A5\u53E3\uFF0C\u63A8\u8350\u7528\u6237\u7528\u4E8E\u63A5\u5165\u9002\u5408\u81EA\u5DF1\u9879\u76EE\u7684\u57CB\u70B9 & \u6570\u636E\u76D1\u63A7\u65B9\u6848\u3002"),t.a.createElement("h2",{id:"roadmap"},t.a.createElement(y.AnchorLink,{to:"#roadmap","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"RoadMap"),t.a.createElement("p",null,"\u6570\u636E"),t.a.createElement("ul",null,t.a.createElement("li",null,"\u4E00\u671F\u6211\u4EEC\u7684\u5EA6\u91CF\u4F1A\u662F\u66F4\u4E3A\u6574\u4F53\u7684\u6570\u636E\uFF1A\u4F8B\u5982\u8868\u5355\u7684\u62A5\u9519\u548C\u63D0\u4EA4\u662F\u5426\u6210\u529F\uFF0C\u6574\u4F53\u8868\u5355\u63D0\u4EA4\u65F6\u957F\u7B49\u3002"),t.a.createElement("li",null,"\u4E8C\u671F\u6211\u4EEC\u4F1A\u63D0\u4F9B\u66F4\u4E3A\u7EC6\u81F4\u7684\u6570\u636E\u8FDB\u4E00\u6B65\u627E\u5BFB\u5230\u5982\u679C\u4E00\u4E2A\u8868\u5355\u7684\u7528\u6237\u586B\u5199\u6548\u7387\u4F4E\u4E0B\uFF0C\u662F\u54EA\u4E2A\u8868\u5355\u539F\u4EF6\u548C\u64CD\u4F5C\u9020\u6210\u4E86\u7F13\u6162\uFF0C\u66F4\u8FDB\u4E00\u6B65\u4EE5\u6570\u636E\u7ED9\u51FA\u4F18\u5316\u7684\u6307\u5F15")),t.a.createElement("p",null,"\u65B9\u6848"),t.a.createElement("ul",null,t.a.createElement("li",null,"\u4E00\u671F\u6211\u4EEC\u5BF9\u5916\u63D0\u4F9B\u4E86\u89E6\u53D1\u94A9\u5B50\u4EE5\u53CA\u6570\u636E\uFF0C\u8BA9\u7528\u6237\u81EA\u884C\u9009\u62E9\u76D1\u63A7\u548C\u6570\u636E\u57CB\u70B9\u65B9\u6848"),t.a.createElement("li",null,"\u4E8C\u671F\u6211\u4EEC\u4F1A\u7ED9\u51FA\u5168\u5957\u7684\u670D\u52A1\uFF0C\u53EA\u9700\u8981\u7B80\u5355\u6CE8\u518C\u5373\u53EF\u83B7\u53D6\u8868\u5355\u5065\u5EB7\u4FE1\u606F")),t.a.createElement("h2",{id:"\u4F7F\u7528"},t.a.createElement(y.AnchorLink,{to:"#\u4F7F\u7528","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u4F7F\u7528"),t.a.createElement("p",null,"\u63D0\u4F9B\u4E86 ",t.a.createElement("code",null,"logOnMount")," \u548C ",t.a.createElement("code",null,"logOnSubmit")," \u4E24\u4E2A\u94A9\u5B50\u3002\u5728\u4F7F\u7528 ",t.a.createElement("code",null,"useForm")," \u65F6\u6CE8\u5165\uFF1A"),t.a.createElement(V.a,{code:`const form = useForm({
  logOnMount: info => {
    console.log('onMount', info);
  },
  logOnSubmit: info => {
    console.log('onSubmit', info);
  },
});`,lang:"js"}),t.a.createElement("p",null,"\u6700\u7B80\u4F7F\u7528\u6837\u4F8B\u5982\u4E0B\uFF0C\u6548\u679C\u89C1 console")),t.a.createElement(ue.default,Te.default["measure-demo"].previewerProps,t.a.createElement(Ce,null)),t.a.createElement("div",{className:"markdown"},t.a.createElement("h3",{id:"logonmount"},t.a.createElement(y.AnchorLink,{to:"#logonmount","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"logOnMount"),t.a.createElement("p",null,"\u4F1A\u5728\u8868\u5355\u9996\u6B21\u52A0\u8F7D\u65F6\u89E6\u53D1\uFF0C\u4E00\u822C\u4E5F\u5C31\u662F\u9875\u9762\u9996\u6B21\u52A0\u8F7D\u65F6\u3002\u6837\u4F8B\u7684\u5165\u53C2\u503C\u5982\u4E0B"),t.a.createElement("table",null,t.a.createElement("thead",null,t.a.createElement("tr",null,t.a.createElement("th",null,"\u53C2\u6570"),t.a.createElement("th",null,"\u63CF\u8FF0"))),t.a.createElement("tbody",null,t.a.createElement("tr",null,t.a.createElement("td",null,t.a.createElement("strong",null,"id")),t.a.createElement("td",null,"\u8868\u5355 id\uFF0C\u53EA\u5F53\u7528\u6237\u6CE8\u660E id \u65F6\u624D\u4F1A log")),t.a.createElement("tr",null,t.a.createElement("td",null,t.a.createElement("strong",null,"formData")),t.a.createElement("td",null,"\u8868\u5355\u503C")),t.a.createElement("tr",null,t.a.createElement("td",null,t.a.createElement("strong",null,"schema")),t.a.createElement("td",null,"\u8868\u5355\u534F\u8BAE")),t.a.createElement("tr",null,t.a.createElement("td",null,t.a.createElement("strong",null,"url")),t.a.createElement("td",null,"\u8868\u5355\u52A0\u8F7D\u7684\u9875\u9762\u5730\u5740")),t.a.createElement("tr",null,t.a.createElement("td",null,t.a.createElement("strong",null,"formMount")),t.a.createElement("td",null,"\u8868\u5355\u52A0\u8F7D\u7684\u65F6\u95F4\u70B9")))),t.a.createElement(V.a,{code:`{
  id: "my-demo-form",
  schema: "{type: 'object',properties: {input1: {title: '\u8F93\u5165\u6846',required: true,type: 'string'},select1:{title: '\u5355\u9009',... }",
  url: 'https://x-render.gitee.io/form-render/measure',
  formData: '{}',
  formMount: '2021-07-02 16:03:42',
};`,lang:"js"}),t.a.createElement("h3",{id:"logonsubmit"},t.a.createElement(y.AnchorLink,{to:"#logonsubmit","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"logOnSubmit"),t.a.createElement("p",null,"\u4F1A\u5728\u8868\u5355\u6BCF\u6B21\u63D0\u4EA4\u65F6\u89E6\u53D1\u3002\u6837\u4F8B\u7684\u5165\u53C2\u503C\u5982\u4E0B"),t.a.createElement("table",null,t.a.createElement("thead",null,t.a.createElement("tr",null,t.a.createElement("th",null,"\u53C2\u6570"),t.a.createElement("th",null,"\u63CF\u8FF0"))),t.a.createElement("tbody",null,t.a.createElement("tr",null,t.a.createElement("td",null,t.a.createElement("strong",null,"duration")),t.a.createElement("td",null,"\u8868\u5355\u586B\u5199\u65F6\u957F")),t.a.createElement("tr",null,t.a.createElement("td",null,t.a.createElement("strong",null,"ms")),t.a.createElement("td",null,"duration \u7684\u65F6\u95F4\u6233\u5F62\u5F0F")),t.a.createElement("tr",null,t.a.createElement("td",null,t.a.createElement("strong",null,"numberOfSubmits")),t.a.createElement("td",null,"\u4ECE\u9996\u6B21\u52A0\u8F7D\u5F00\u59CB\u63D0\u4EA4\u4E86\u51E0\u6B21")),t.a.createElement("tr",null,t.a.createElement("td",null,t.a.createElement("strong",null,"failedAttempts")),t.a.createElement("td",null,"\u4ECE\u9996\u6B21\u52A0\u8F7D\u5F00\u59CB\u63D0\u4EA4\u5931\u8D25\u4E86\u51E0\u6B21")),t.a.createElement("tr",null,t.a.createElement("td",null,t.a.createElement("strong",null,"errors")),t.a.createElement("td",null,"\u63D0\u4EA4\u5931\u8D25\u7684\u6821\u9A8C\u4FE1\u606F")))),t.a.createElement(V.a,{code:`{
  id: "my-demo-form", // \u5982\u679C\u6CE8\u660E\u8868\u5355id\uFF0C\u4F1A\u5728\u6B64\u5904\u5C55\u793A
  formMount: '2021-07-02 16:27:28', // \u8868\u5355\u9996\u6B21\u52A0\u8F7D\u7684\u65F6\u95F4\u70B9
  ms: 35598, // duration\u7684\u65F6\u95F4\u6233\u5F62\u5F0F
  duration: '00:00:35', // \u4ECE\u8868\u5355\u52A0\u8F7D/\u4E0A\u6B21\u63D0\u4EA4\u5B8C\u6210\u5F00\u59CB\u8BA1\u65F6\uFF0C\u5230\u672C\u6B21\u63D0\u4EA4\u4F7F\u7528\u7684\u65F6\u95F4
  numberOfSubmits: 1, // \u63D0\u4EA4\u7684\u6B21\u6570\uFF08\u5931\u8D25\u4E0E\u5426\uFF09
  failedAttempts: 0, // \u63D0\u4EA4\u5931\u8D25\u7684\u6B21\u6570\uFF08\u5373\u6709\u6821\u9A8C\u672A\u901A\u8FC7\uFF09
  url: 'https://x-render.gitee.io/form-render/measure', // \u8868\u5355\u5BF9\u5E94\u9875\u9762\u7684url
  formData: "{input1: '3123',select1: 'c'}",
  schema: "{ ... }", // \u8868\u5355\u534F\u8BAE
  errors: "[]", // \u6821\u9A8C\u672A\u901A\u8FC7\u65F6\uFF0C\u5C55\u793A\u62A5\u9519\u6821\u9A8C\u4FE1\u606F
};`,lang:"js"})))))}}]);