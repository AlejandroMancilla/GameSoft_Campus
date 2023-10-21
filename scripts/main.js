import { CrearUsuario } from "./usuarios.js";
import { paises } from "./usuarios.js";

//LLAMAR BOTONES E INPUTS - USUARIOS
const btnAddUser = document.getElementById('AddUser');
const btnModifyUser = document.getElementById('ModifyUser');
const btnDeleteUser = document.getElementById('DeleteUser');
const btnEnviar = document.getElementById('EnviarDatos');
const ShowUSers = document.getElementById('container-usuarios');
const Title = document.getElementById('NameForm');
const TextDiv = document.getElementById('TextList');
const Formulario = document.getElementById('Formulario');
const inpNacion = document.getElementById('Nacionalidad');

let OpcUser = 0;

btnAddUser.addEventListener('click', function(){
    CrearFormulario();
    OpcUser = 1;
});

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
    }
    
    Title.textContent = '';
    TextDiv.textContent = 'Seleccione una opción del menú superior';
    btnEnviar.textContent = '';
    Formulario.classList = 'login-box hide';
});

function CrearFormulario(){
    Formulario.classList = 'login-box';
    Title.textContent = 'Registrar Usuario';
    TextDiv.textContent = 'Ingrese los siguientes datos'
    btnEnviar.textContent = 'Registrar';
    for(let i=0; i<paises.length; i++){
        inpNacion.innerHTML += `'<option value ='${paises[i]}'>${paises[i]}</option>`;
    }

};

window.onload = function(){
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector("#btn");
    const searchBtn = document.querySelector(".bx-search")

    closeBtn.addEventListener("click",function(){
        sidebar.classList.toggle("open")
        menuBtnChange()
    })

    searchBtn.addEventListener("click",function(){
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


