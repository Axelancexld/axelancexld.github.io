(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{B4h3:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var a=t("2z+b"),r=t("8o2o"),i=t("9Hrx"),o=t("q1tI"),s=t.n(o),l=t("TSYQ"),c=t.n(l),m=t("m/Yd"),u=function(e){function n(){for(var n,t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return(n=e.call.apply(e,[this].concat(a))||this).onRouteChangeStart=function(e){e.detail.isInternal&&n.element.exit()},n}Object(i.a)(n,e);var t=n.prototype;return t.componentDidMount=function(){window.addEventListener("route-change-start",this.onRouteChangeStart)},t.componentWillUnmount=function(){window.removeEventListener("route-change-start",this.onRouteChangeStart)},t.render=function(){var e=this,n=this.props,t=(n.theme,n.classes),a=n.className,i=n.children,o=Object(r.a)(n,["theme","classes","className","children"]);return s.a.createElement(m.a,Object.assign({className:c()(t.root,a),node:"main",ref:function(n){return e.element=n}},o),s.a.createElement("div",{className:t.frame}),s.a.createElement("div",{className:t.content},i))},n}(s.a.Component);u.displayName="Main";var d=t("+IKJ"),p=Object(a.a)((function(e){return{root:{flex:1,position:"relative",display:"flex",margin:[0,"auto"],maxWidth:1e3,width:"100%"},frame:{position:"absolute",zIndex:1,left:10,right:10,top:0,bottom:0,outline:"2px solid "+e.color.background.dark,outlineOffset:2,backgroundColor:Object(d.b)(e.color.background.dark,e.color.alpha)},content:{position:"relative",zIndex:2,flex:1,margin:[10,10,10,20],padding:[0,10,0,0],"& > *:last-child, & > article > *:last-child":{marginBottom:0}},"@media screen and (min-width: 768px)":{root:{minHeight:1},frame:{left:20,right:20,top:0,bottom:0},content:{overflowX:"hidden",overflowY:"auto",margin:[30,40,30,50],padding:[0,10,0,0],"& img":{maxWidth:"80%"}}},"@media screen and (min-width: 1025px)":{content:{margin:[50,60,50,70],padding:[0,10,0,0]}}}}))(u)},LOes:function(e,n,t){"use strict";t.r(n);var a=t("9Hrx"),r=t("q1tI"),i=t.n(r),o=t("2z+b"),s=(t("dntC"),t("B4h3")),l=t("Qs7Y"),c=t("m/Yd"),m=t("CcRw"),u=t("lJYf"),d=t.n(u),p=function(e){function n(){return e.apply(this,arguments)||this}return Object(a.a)(n,e),n.prototype.render=function(){var e=this.props.classes;return i.a.createElement(s.a,{className:e.root},i.a.createElement("article",null,i.a.createElement(m.a,{stagger:!0},i.a.createElement("header",null,i.a.createElement("h1",null,i.a.createElement(l.a,null,"Hakkımda"))),i.a.createElement("p",null,"Sivas‘da doğdum, 2009’un sonlarında İzmir'e taşındım. Hala İzmir’de yaşıyorum. Gezmeyi ve çalışmayı çok seviyorum. Yeni teknoloji ve fikirler beni her zaman heyecanlandırıyor. Üzerinde çalıştığım bir projem var ise, bitirene kadar rahat bir uyku çekemem."),i.a.createElement("p",null,"Sektörde neredeyse 6 senelik bir geçmişim var. Öğrenmeyi seven birisiyim. Open source kültürüne bağlı bağımsız bir hayat sürüyorum."),i.a.createElement("p",null,"Yazılım dili olarak PHP, Python onun yanında Front-end ve Mobil Uygulamalar için Native olarak geliştirmeler yapıyorum. Çalışırken müzik dinlemeye bayılırım."),i.a.createElement(c.a,null,i.a.createElement("img",{src:d.a,alt:"my working environment"})))))},n}(i.a.Component);n.default=Object(o.a)((function(e){return{root:{}}}))(p)},lJYf:function(e,n,t){e.exports=t.p+"static/my_working_environment-0e6037cdf9f61739eccfa531b55ef64a.jpg"},"m/Yd":function(e,n,t){"use strict";t.d(n,"a",(function(){return f}));var a=t("2z+b"),r=t("746C"),i=t("7nfP"),o=t("8o2o"),s=t("9Hrx"),l=t("q1tI"),c=t.n(l),m=t("TSYQ"),u=t.n(m),d=t("EgnG"),p=function(e){function n(){return e.apply(this,arguments)||this}Object(s.a)(n,e);var t=n.prototype;return t.componentWillUnmount=function(){var e=this.props.sounds;this.unanimate(),e.fade&&e.fade.stop()},t.enter=function(){var e=this.props,n=e.energy,t=e.sounds,a=n.duration.enter;t.fade&&t.fade.play(),this.animate({keyframes:[{opacity:1,duration:a/3},{opacity:0,duration:a/5},{opacity:1,duration:a/2}]})},t.exit=function(){var e=this.props,n=e.energy,t=e.sounds,a=n.duration.exit;t.fade&&t.fade.play(),this.animate({keyframes:[{opacity:0,duration:a/3},{opacity:1,duration:a/5},{opacity:0,duration:a/2}]})},t.animate=function(e){this.unanimate(),Object(d.a)(Object.assign({targets:this.element,easing:"easeOutCubic"},e))},t.unanimate=function(){d.a.remove(this.element)},t.render=function(){var e=this,n=this.props,t=(n.theme,n.classes),a=(n.energy,n.audio,n.sounds,n.className),r=n.children,i=n.node,s=Object(o.a)(n,["theme","classes","energy","audio","sounds","className","children","node"]);return c.a.createElement(i,Object.assign({ref:function(n){return e.element=n},className:u()(t.root,a)},s),r)},n}(c.a.PureComponent);p.displayName="Fader",p.defaultProps={node:"span"};var f=Object(r.a)()(Object(a.a)((function(e){return{root:{display:"inline-block",opacity:0}}}))(Object(i.a)()(p)))}}]);