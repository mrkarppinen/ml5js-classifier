(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports=n.p+"static/media/loading.7aa9d0ff.svg"},19:function(e,t,n){e.exports=n(32)},25:function(e,t,n){},26:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(3),c=n.n(r),o=(n(25),n(10)),l=n(11),u=n(17),s=n(12),m=n(16),f=n(1),d=(n(26),n(2)),g=n(13),h=n.n(g),b=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("img",{src:h.a}))},p=function(e){var t=e.image,n=e.classifier,r=Object(a.useState)(null),c=Object(d.a)(r,2),o=c[0],l=c[1],u=Object(a.useState)(!1),s=Object(d.a)(u,2),m=s[0],f=s[1];return Object(a.useEffect)(function(){if(t){f(!0);var e=document.createElement("img");e.src=t,e.addEventListener("load",function(){n.predict(e,function(e,t){if(f(!1),!e){var n=t.map(function(e){return"".concat(e.className,":").concat(e.probability.toFixed(4))}).join("</br>");l(n)}})})}},[t]),i.a.createElement("div",null,i.a.createElement("div",{id:"result",dangerouslySetInnerHTML:{__html:o}}),m&&i.a.createElement(b,null))},v=n(5),E=n(6);function w(){var e=Object(v.a)(["\n    display: none;\n"]);return w=function(){return e},e}function j(){var e=Object(v.a)(["\n    border: none;\n    background: url(","/Camera-icon.png);\n    background-size: contain;\n    width: 100px;\n    height: 100px;\n    cursor: pointer;\n\n    &:focus {\n        outline: none;\n    }\n"]);return j=function(){return e},e}var O=E.a.button(j(),"/ml5js-classifier"),y=E.a.input.attrs({type:"file"})(w()),k=function(e){var t=e.imageSelected,n=function(e,t,n){return new Promise(function(a,i){var r=document.createElement("img");r.src=e,r.onload=function(){var e=document.createElement("canvas");e.width=r.width*n,e.height=r.height*n,e.getContext("2d").drawImage(r,0,0,e.width,e.height),a(e.toDataURL(t))}})};return i.a.createElement("div",null,i.a.createElement(y,{accept:"image/*",onChange:function(e){if(e.target.files&&e.target.files.length>0){var a=e.target.files[0],i=new FileReader;i.onload=function(e){a.size<1e5?t(e.target.result):n(e.target.result,a.type,1e5/a.size).then(function(e){return t(e)})},i.readAsDataURL(a)}}}),i.a.createElement(O,{type:"button",onClick:function(){document.querySelector('input[type="file"]').click()}}))},S=function(e){var t=e.image,n=Object(a.useState)(!1),r=Object(d.a)(n,2),c=r[0],o=r[1];return Object(a.useEffect)(function(){t&&(o(!0),document.querySelector("#image").src=t)},[t]),i.a.createElement("div",null,i.a.createElement("img",{id:"image",style:{width:"400px"}}),!c&&i.a.createElement("p",{style:{color:"#666"}},"Select image..."))},x=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).setImage=e.setImage.bind(Object(f.a)(Object(f.a)(e))),e.state={image:null},e.classifier=window.ml5.imageClassifier("MobileNet",function(){}),e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"setImage",value:function(e){this.setState({image:e})}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("main",null,i.a.createElement(k,{imageSelected:this.setImage}),i.a.createElement(S,{image:this.state.image}),i.a.createElement(p,{image:this.state.image,classifier:this.classifier})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.91e1d7d1.chunk.js.map