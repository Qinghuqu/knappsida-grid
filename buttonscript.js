const delbutton = document.getElementById("delete");
const alert = document.getElementById("container");
const ok = document.getElementById("ok");
const cancel = document.getElementById("cancel");
const xbutton = document.getElementById("X");
const dimmer = document.getElementById("dimmer");

delbutton.addEventListener("click", function(){
  delbutton.style="display: none";
  alert.style="display: grid";
  dimmer.style="display: block"
});
ok.addEventListener("click", function(){
  window.open("http://hmpg.net", "_self");
});
cancel.addEventListener("click", function(){
  delbutton.style="display: block";
  alert.style="display: none";
  dimmer.style="display: none";
});
xbutton.addEventListener("click", function(){
  delbutton.style="display: block";
  alert.style="display: none";
  dimmer.style="display: none";
});
