/* 
  Copyright 2021 DolphinBunny
*/

(()=>{
window._TESTWINDOW = window.open("about:blank#Console","Aperture brand super colliding JavaScript super window","width=600,height=500,top=100,left=100");
window._TESTWINDOW.document.write("<div style='font-family:monospace'></div>");
window._TESTWINDOW.document.write("<span style='width:100%;font-family:monospace'><span style='width:5%'>></span><input style='border:none;width:95%;padding-top:10px;padding-bottom:5px;outline:none;border-bottom:1px solid grey;font-family:monospace' spellcheck='false'></span>");

window._TESTWINDOW.document.querySelector("input").focus();
window._TESTWINDOW.document.querySelector("input").addEventListener("keydown", (evt) => {
  if (evt.keyCode == 13 && (window._TESTWINDOW.document.querySelector("input").value != "")){
    try {
      window._CMSG("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style='color:#3ca832'>" + eval(window._TESTWINDOW.document.querySelector("input").value) + "</span><br>");
    window._TESTWINDOW.document.querySelector("input").value = ""
    } catch (e) {
      console.error(e);
      window._TESTWINDOW.document.querySelector("input").value = ""
    }
    window._TESTWINDOW.document.querySelector("input").focus();
    window._TESTWINDOW.scrollTo(0,window._TESTWINDOW.document.body.scrollHeight);
  }
})

window._CMSG = (m) => {
  window._TESTWINDOW.document.querySelector("div").innerHTML += m;
}

if (!window._OLDCLOG) {
  window._OLDCLOG = console.log;
}

console.log = (m)=>{
  window._OLDCLOG(m);
  window._CMSG("[LOG]&nbsp;"+m+"<br>");
}

if (!window._OLDCWARN) { window._OLDCWARN = console.warn }

console.warn = (m)=>{
  window._OLDCWARN(m)
  window._CMSG("[WRN]&nbsp;<span style='color:#a69b00'>"+m+"</span><br>")
}

if (!window._OLDCERROR) { window._OLDCERROR = console.error }

console.error = (e)=>{
  window._OLDCERROR(e)
  window._CMSG("[ERR] <span style='color:#c41818'>"+e+"</span><br>")
}

window.onerror = console.error

if (!window._OLDCINFO) { window._OLDCINFO = console.info }

console.info = (m) => {
  window._OLDCINFO(m)
  window._CMSG("[INF]&nbsp;<span style='color:#1b216b'>"+m+"</span><br>")
}

})()
