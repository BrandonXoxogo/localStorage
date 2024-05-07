var guardar = document.getElementById("agregar");
var borrar = document.getElementById("borrar");

var alumnos= new Array();

var nombre = document.getElementById("nombre");
var ap = document.getElementById("ap");
var am = document.getElementById("am");
var g = document.getElementById("g");
var c = document.getElementById("c");

let divRes= document.querySelector("#res");

var addAlumnos=document.getElementById("agregar");

guardar.onclick=()=>{
var nombre = document.getElementById("nombre").value;
var ap = document.getElementById("ap").value;
var am = document.getElementById("am").value;
var g = document.getElementById("g").value;
var c = document.getElementById("c").value;

if(nombre.trim()=="" ||ap.trim()==""||am.trim()==""){
  Swal.fire({
    title:"Alumnos",
    text:"Tienes campos vacíos, ingresa valores válidos",
    icon:"error"
  });
  return;
}

let alumno={nombre,ap,am,g,c};
alumnos.push(alumno);
  localStorage.setItem("alumnos", JSON.stringify(alumnos));
  imprimirAlumnos();
  limpiarForm();
  
}

const imprimirAlumnos = () =>{
  var x=(JSON.parse(localStorage.getItem("alumnos"))==null)?[]:JSON.parse(localStorage.getItem("alumnos"));
  let tablaHTML=
  `<table class="table table-dark table-striped">
      <tr>
      <td>Nombre</td>
      <td>Apellido Paterno</td>
      <td>Apellido Materno</td>
      <td>Grupo</td>
      <td>Carrera</td>
      <td>DEL</td>
      <td>Editar</td>
      </tr>
      `;     
      let index=0;       
  x.forEach(a=>{
    tablaHTML+=`
    <tr>
    <td>${a.nombre}</td>
    <td>${a.ap}</td>
    <td>${a.am}</td>
    <td>${a.g}</td>
    <td>${a.c}</td>
    <td><button class="btn btn-danger"  onclick="delAlumnos(${index})"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
<path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
</svg></button></td>
<td><button class="btn btn-info" data-bs-toggle="modal"  onclick="mostrarAlumnos(${index})" data-bs-toggle="modal" data-bs-target="#actualizar2" >
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-pencil-fill" viewBox="0 0 16 16">
<path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
</svg></button></td>
    </tr>
    `
    index++;
   })
  
 divRes.innerHTML=tablaHTML;
  
} 


const limpiarForm=()=>{
  document.getElementById("nombre").value="";
  document.getElementById("ap").value="";
  document.getElementById("am").value="";
  document.getElementById("c").selectedIndex=0;
  document.getElementById("g").selectedIndex=0;

}

/*borrar.onclick=()=>{
  localStorage.clear();
  nombre.value="";
  ap.value="";
  am.value="";
  g.selectedIndex=0;
  c.selectedIndex=0;
  divRes.innerHTML="";
}*/


delAlumnos=(index)=>{
  
    Swal.fire({
      title: "¿Estás seguro de eliminar a este alumno?",
      showDenyButton: true,
      confirmButtonText: "Si, eliminar",
      denyButtonText: "No estoy seguro"
    }).then((result) => {
    
      if (result.isConfirmed) { 
       alumnos.splice(index, 1);
       localStorage.setItem("alumnos", JSON.stringify(alumnos)); 
       imprimirAlumnos(); 
       
        Swal.fire("El alumno se eliminó exitosamente", "", "success");
      }
    });
    
  }


  var indiceAlumno; 
  function mostrarAlumnos(index) {
    indiceAlumno=index;
      var alumnos = JSON.parse(localStorage.getItem("alumnos"));
      var alumno = alumnos[index];
  
      document.getElementById("nom").value = alumno.nombre;
      document.getElementById("apa").value = alumno.ap;
      document.getElementById("ama").value = alumno.am;
      document.getElementById("g").value = alumno.g;
      document.getElementById("c").value = alumno.c;
      
      document.getElementById("actualizarR").style.display = "block"; 
  }

 var actualizar= document.querySelector("#actualizar");
  
  
  actualizar.onclick = () => {
      var alumnos = JSON.parse(localStorage.getItem("alumnos"));
      var alumno = alumnos[indiceAlumno]; 

      alumno.nombre = document.getElementById("nom").value;
      alumno.ap = document.getElementById("apa").value;
      alumno.am = document.getElementById("ama").value;
      alumno.g = document.getElementById("gr").value;
      alumno.c = document.getElementById("ca").value;
  
      localStorage.setItem("alumnos", JSON.stringify(alumnos));
      imprimirAlumnos();
  }