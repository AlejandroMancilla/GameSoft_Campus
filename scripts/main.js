import { CrearUsuario } from "./usuarios.js";
import { ModificarUsuario } from "./usuarios.js";
import { BorrarUsuario } from "./usuarios.js";
import { paises } from "./usuarios.js";

//LLAMAR ELEMENTOS - USUARIOS
const btnAddUser = document.getElementById('AddUser');
const btnModifyUser = document.getElementById('ModifyUser');
const btnDeleteUser = document.getElementById('DeleteUser');
const btnEnviar = document.getElementById('EnviarDatos');
const Title = document.getElementById('NameForm');
const TextDiv = document.getElementById('TextList');
const Formulario = document.getElementById('Formulario');
const inpNacion = document.getElementById('Nacionalidad');

//LLAMAR ELEMENTOS - VIDEOJUEGOS


let OpcUser = 0;


//FUNCIONES PARA GESTIÓN DE USUARIOS
btnAddUser.addEventListener('click', function(){
    CrearFormulario('Registrar', "Ingrese los siguientes datos");
    OpcUser = 1;
});

btnModifyUser.addEventListener('click', function(){
    CrearFormulario('Modificar', "Seleccione un Usuario de la lista");
    OpcUser = 2;
})

btnDeleteUser.addEventListener('click', function(){
    CrearFormulario('Eliminar', "Seleccione un Usuario de la lista");
    OpcUser = 3;
})

btnEnviar.addEventListener('click', function(){
    switch(OpcUser){
        case 1:
            CrearUsuario();
            break;
        case 2:
            ModificarUsuario();
            break;
        case 3:
            BorrarUsuario();
            break;
    }
    Title.textContent = '';
    TextDiv.textContent = 'Seleccione una opción del menú superior';
    btnEnviar.textContent = '';
    Formulario.classList = 'login-box hide';
});

function CrearFormulario(text, parrafo){
    Formulario.classList = 'login-box';
    Title.textContent = text + ' Usuario';
    TextDiv.textContent = parrafo;
    btnEnviar.textContent = text;
    for(let i=0; i<paises.length; i++){
        inpNacion.innerHTML += `'<option value ='${paises[i]}'>${paises[i]}</option>`;
    }
};

//FUNCIONES PARA GESTIÓN DE VIDEOJUEGOS


//FUNCIÓN ABRIR/CERRAR MENÚ LATERAL
window.onload = function(){
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector("#btn");

    closeBtn.addEventListener("click",function(){
        sidebar.classList.toggle("open")
        menuBtnChange()
    })

    function menuBtnChange(){
        if(sidebar.classList.contains("open")){
            closeBtn.classList.replace("bx-menu","bx-menu-alt-right")
        }else{
            closeBtn.classList.replace("bx-menu-alt-right","bx-menu")
        }
    }
}

