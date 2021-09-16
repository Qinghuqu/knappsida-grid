const delbutton = document.getElementById("delete");
const alert = document.getElementById("container");
const ok = document.getElementById("ok");
const cancel = document.getElementById("cancel");
const xbutton = document.getElementById("X");

delbutton.addEventListener("click", function(){
  delbutton.style="display: none";
  alert.style="display: flex";
});
ok.addEventListener("click", function(){
  window.open("http://hmpg.net", "_self");
});
cancel.addEventListener("click", function(){
  delbutton.style="display: block";
  alert.style="display: none";
});
xbutton.addEventListener("click", function(){
  delbutton.style="display: block";
  alert.style="display: none";
});
