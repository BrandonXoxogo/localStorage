var saves=document.getElementById("guardar")
var modalEditar=document.getElementById("exampleModal")

var alumnos=new Array();

var nom=document.getElementById("nom")
var paterno=document.getElementById("paterno")
var materno=document.getElementById("materno")
var gru=document.getElementById("gru")
var ca=document.getElementById("ca")

saves.onclick=()=>{
    var nom=document.getElementById("nom").value
    var paterno=document.getElementById("paterno").value
    var materno=document.getElementById("materno").value
    var gru=document.getElementById("gru").value
    var ca=document.getElementById("ca").value
    if(nom.trim()==""||paterno.trim()==""||materno.trim()==""){
        swal.fire({
            title:"Alumnos",
            text: "falta llenar campos",
            icon:"error"
        })
        return

    }
    var alumno={nom,paterno,materno,gru,ca}
    alumnos.push(alumno)
    localStorage.setItem("Alum" , JSON.stringify(alumnos))
   imprimirTabla();
   limpiarForm();
}

const imprimirTabla=()=>{
    var x=JSON.parse(localStorage.getItem("Alum")==null)?[]:JSON.parse(localStorage.getItem("Alum"))
    

    let table=`<table class='table w-50 m-auto'>
    <tr>
    <td>Nombre:</td>
    <td>A.paterno:</td>
    <td>A.materno:</td>
    <td>Grupo:</td>
    <td>Carrera:</td>
    <td>Editar</td>
    <td>Del</td>
    </tr>`;
  
    let index=0
    x.forEach(a => {
    table+=`<tr>
    <td>${a.nom}</td>
    <td>${a.paterno}</td>
    <td>${a.materno}</td>
    <td>${a.gru}</td>
    <td>${a.ca}</td>
    <td><button class="btn btn-outline-info" class="btn btn-primary" data-bs-toggle="modal" onclick="cargarAlumno(${index})" data-bs-target="#exampleModal"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
  </svg></button</td>

    <td><button class="btn btn-outline-danger" onclick="eliminarProducto(${index})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
  </svg></button</td>

    </tr>`
       
    index++
    });
    document.getElementById("tabla").innerHTML=table
}
const limpiarForm=()=>{
    document.getElementById("nom").value=""
    document.getElementById("paterno").value=""
    document.getElementById("materno").value=""
    document.getElementById("gru").selectedIndex=0
    document.getElementById("ca").selectedIndex=0
}

const eliminarProducto=(index)=>{
    Swal.fire({
        title: "Quieres eliminar este producto?",
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: "Si",
        denyButtonText: `No`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("se borro", "", "success");
          alumnos.splice(index,1)
          localStorage.setItem("Alum",JSON.stringify(alumnos));
          imprimirTabla();
        } else if (result.isDenied) {
          Swal.fire("Se cancelo", "", "error");
        }
      });
}


var indiceAlumno; 
const cargarAlumno=(index)=>{
  indiceAlumno=index;
  var alumnos = JSON.parse(localStorage.getItem("Alum"));
  var alumno = alumnos[index];

  document.getElementById("nombre").value = alumno.nom;
  document.getElementById("apa").value = alumno.paterno;
  document.getElementById("ama").value = alumno.materno;
  document.getElementById("gr").value = alumno.gru;
  document.getElementById("c").value = alumno.ca;

 
 
}

const editar=()=>{
  var alumnos = JSON.parse(localStorage.getItem("Alum"));
  var alumno = alumnos[indiceAlumno]; 

  alumno.nom = document.getElementById("nombre").value;
  alumno.paterno = document.getElementById("apa").value;
  alumno.materno = document.getElementById("ama").value;
  alumno.gru = document.getElementById("gr").value;
  alumno.ca = document.getElementById("c").value;

  localStorage.setItem("Alum", JSON.stringify(alumnos));
   
  imprimirTabla()
}
imprimirTabla()
