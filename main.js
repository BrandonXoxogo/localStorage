var gu=document.getElementById("guardar")
var clear=document.getElementById("clear")

gu.onclick=()=>{
    var Key=document.getElementById("key").value
    var valor=document.getElementById("value").value

    localStorage.setItem(Key , valor)
}
clear.onclick=()=>{
    localStorage.clear();
}