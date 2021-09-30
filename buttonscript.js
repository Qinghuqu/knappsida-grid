const deleteButton = document.querySelector("#deleteButton");
const alert = document.getElementById("container");
const okButton = document.getElementById("okButton");
const cancelButton = document.getElementById("cancelButton");
const xButton = document.getElementById("xButton");
const dimmer = document.getElementById("dimmer");

deleteButton.addEventListener("click", () =>
{//function(){
  deleteButton.style="display: none";
  deleteButton.style.display = "none";
  alert.style="display: grid";
  dimmer.style="display: block";
});
okButton.addEventListener("click", function(){
  window.open("http://hmpg.net", "_self");
});
cancelButton.addEventListener("click", function(){
  deleteButton.style="display: block";
  alert.style="display: none";
  dimmer.style="display: none";
});
xButton.addEventListener("click", function(){
  deleteButton.style="display: block";
  alert.style="display: none";
  dimmer.style="display: none";
});
