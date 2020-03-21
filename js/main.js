function bold(){
    var textarea=document.getElementById("text");
    textarea.style.fontWeight="bold";
}
function italic(){
    var textarea=document.getElementById("text");
    textarea.style.fontStyle="italic";

}
function underline(){
    var textarea=document.getElementById("text");
    textarea.style.textDecoration="underline";
}

function changesize(){
var textarea = document.getElementById("text");
var e = document.getElementById("hello");
var strUser = e.options[e.selectedIndex].value;
textarea.style.fontSize=strUser;
}
function parafont(){
    var textarea = document.getElementById("text");
    var e = document.getElementById("changefont");
    var strUser = e.options[e.selectedIndex].value;
    textarea.style.fontFamily=strUser;
    }