const t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]"),body:document.querySelector("body")};let e;t.startBtn.addEventListener("click",(function(){e=setInterval((()=>{const e=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;t.body.style.backgroundColor=e}),1e3),t.stopBtn.disabled=!1,t.startBtn.disabled=!0})),t.stopBtn.addEventListener("click",(function(n){clearInterval(e),t.stopBtn.disabled=!0,t.startBtn.disabled=!1}));
//# sourceMappingURL=01-color-switcher.52f5242f.js.map
