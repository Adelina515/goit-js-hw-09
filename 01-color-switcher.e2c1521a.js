const t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]"),body:document.querySelector("body")};let e=null;t.startBtn.addEventListener("click",(function(n){t.body=e,e=setInterval((function(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),t.stopBtn.addEventListener("click",(function(t){clearInterval(e)}));
//# sourceMappingURL=01-color-switcher.e2c1521a.js.map