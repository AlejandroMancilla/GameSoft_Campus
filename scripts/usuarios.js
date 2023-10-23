import { Usuarios } from "./ActualizarDatos.js"

//LLAMAR ELEMENTOS - USUARIOS
const btnAddUser = document.getElementById('AddUser');
const btnModifyUser = document.getElementById('ModifyUser');
const btnDeleteUser = document.getElementById('DeleteUser');
const btnEnviar = document.getElementById('EnviarDatos');
const Title = document.getElementById('NameForm');
const TextDiv = document.getElementById('TextList');
const Formulario = document.getElementById('Formulario');

//Llamado Inputs de Formulario
const inpId = document.getElementById('Id');
const inpName = document.getElementById('Name');
const inpLastName = document.getElementById('LastName');
const inpEmail = document.getElementById('Email');
const inpPhone = document.getElementById('Phone');
const inpDate = document.getElementById('Date');
const inpNacion = document.getElementById('Nacionalidad');

//Botones Ordenar
const btnOrdID = document.getElementById('OrdId');
btnOrdID.addEventListener('click', function(){
    OrdenarUsuarios(1);
});
const btnOrdName = document.getElementById('OrdName');
btnOrdName.addEventListener('click', function(){
    OrdenarUsuarios(2);
});
const btnOrdEmail = document.getElementById('OrdEmail');
btnOrdEmail.addEventListener('click', function(){
    OrdenarUsuarios(3);
});
const btnOrdNacion = document.getElementById('OrdNacion');
btnOrdNacion.addEventListener('click', function(){
    OrdenarUsuarios(4);
});
const btnInvertir = document.getElementById('OrdInverter');
btnInvertir.addEventListener('click', function(){
    OrdenarUsuarios(5);
});

//CONSTANTES Y VARIABLES DE PAGINA
let OpcUser = 0;
const TbUsers = document.getElementById('ListUsers');
const paises = ["Afganistán","Albania","Alemania","Andorra","Angola","Antigua y Barbuda","Arabia Saudita","Argelia","Argentina","Armenia","Australia","Austria","Azerbaiyán","Bahamas","Bangladés","Barbados","Baréin","Bélgica","Belice","Benín","Bielorrusia","Birmania","Bolivia","Bosnia y Herzegovina","Botsuana","Brasil","Brunéi","Bulgaria","Burkina Faso","Burundi","Bután","Cabo Verde","Camboya","Camerún","Canadá","Catar","Chad","Chile","China","Chipre","Ciudad del Vaticano","Colombia","Comoras","Corea del Norte","Corea del Sur","Costa de Marfil","Costa Rica","Croacia","Cuba","Dinamarca","Dominica","Ecuador","Egipto","El Salvador","Emiratos Árabes Unidos","Eritrea","Eslovaquia","Eslovenia","España","Estados Unidos","Estonia","Etiopía","Filipinas","Finlandia","Fiyi","Francia","Gabón","Gambia","Georgia","Ghana","Granada","Grecia","Guatemala","Guyana","Guinea","Guinea ecuatorial","Guinea-Bisáu","Haití","Honduras","Hungría","India","Indonesia","Irak","Irán","Irlanda","Islandia","Islas Marshall","Islas Salomón","Israel","Italia","Jamaica","Japón","Jordania","Kazajistán","Kenia","Kirguistán","Kiribati","Kuwait","Laos","Lesoto","Letonia","Líbano","Liberia","Libia","Liechtenstein","Lituania","Luxemburgo","Madagascar","Malasia","Malaui","Maldivas","Malí","Malta","Marruecos","Mauricio","Mauritania","México","Micronesia","Moldavia","Mónaco","Mongolia","Montenegro","Mozambique","Namibia","Nauru","Nepal","Nicaragua","Níger","Nigeria","Noruega","Nueva Zelanda","Omán","Países Bajos","Pakistán","Palaos","Palestina","Panamá","Papúa Nueva Guinea","Paraguay","Perú","Polonia","Portugal","Reino Unido","República Centroafricana","República Checa","República de Macedonia","República del Congo","República Democrática del Congo","República Dominicana","República Sudafricana","Ruanda","Rumanía","Rusia","Samoa","San Cristóbal y Nieves","San Marino","San Vicente y las Granadinas","Santa Lucía","Santo Tomé y Príncipe","Senegal","Serbia","Seychelles","Sierra Leona","Singapur","Siria","Somalia","Sri Lanka","Suazilandia","Sudán","Sudán del Sur","Suecia","Suiza","Surinam","Tailandia","Tanzania","Tayikistán","Timor Oriental","Togo","Tonga","Trinidad y Tobago","Túnez","Turkmenistán","Turquía","Tuvalu","Ucrania","Uganda","Uruguay","Uzbekistán","Vanuatu","Venezuela","Vietnam","Yemen","Yibuti","Zambia","Zimbabue"];
let FilaSeleccionada = 0;

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


// CREAR UN NUEVO USUARIO VALIDANDO ENTRADAS
function CrearUsuario(){
    let Cont = 0;
    let Edad = calcularEdad(inpDate.value);
    if(Edad < 18){
        alert('ERROR DE REGISTRO\n\tUsuario menor de 18 Años')
    }else{
        let User = {
            Id : inpId.value.trim(),
            Name : inpName.value.trim(),
            LastName : inpLastName.value.trim(),
            Phone : inpPhone.value.trim(),
            Email : inpEmail.value.trim(),
            Date : inpDate.value.trim(),
            Nacionalidad : inpNacion.value,
            Puntos: 0,
            Juegos : []
        };
        
        if(Usuarios.length == 0){
            Usuarios.push(User);
            alert('Usuario Registrado Exitosamente');
            console.log(Usuarios);
            Cont++;
        }else{
            Usuarios.forEach(function(x){
                if(x.Id == inpId.value.trim()){
                    alert('ERROR DE REGISTRO\n\tEl Usuario ya está registrado');
                    Cont++;
                }else{
                    
                }
            });
        }
    
        if(Cont == 0){
            Usuarios.push(User);
            alert('Usuario Registrado Exitosamente');
            console.log(Usuarios);
        }
        inpId.value = '';
        inpName.value = '';
        inpLastName.value = '';
        inpEmail.value = '';
        inpPhone.value = '';
        inpDate.value = '2005-01-01';
        ActualizarLista();
        localStorage.setItem("Users", JSON.stringify(Usuarios));
    }
};

//MODIFICAR USUARIO SELECCIONADO DE LA LISTA
function ModificarUsuario(){
    let User = {
        Id : inpId.value.trim(),
        Name : inpName.value.trim(),
        LastName : inpLastName.value.trim(),
        Phone : inpPhone.value.trim(),
        Email : inpEmail.value.trim(),
        Date : inpDate.value.trim(),
        Nacionalidad : inpNacion.value,
        Puntos : Usuarios[FilaSeleccionada].Puntos,
        Juegos : Usuarios[FilaSeleccionada].Juegos
    };
    Usuarios[FilaSeleccionada] = User;
    ActualizarLista();
    localStorage.setItem("Users", JSON.stringify(Usuarios));
    inpId.value = '';
    inpName.value = '';
    inpLastName.value = '';
    inpEmail.value = '';
    inpPhone.value = '';
    inpDate.value = '2005-01-01';
}

//BORRAR USUARIO SELECCIONADO DE LA LISTA
function BorrarUsuario(){
    if(confirm('CONFIRMACIÓN\n\t¿Desea Eliminar al Usuario Seleccionado?') == true){
        Usuarios.splice(FilaSeleccionada, 1);
        ActualizarLista();
        localStorage.setItem("Users", JSON.stringify(Usuarios));
    }
};

//CALCULAR EDAD DEL USUARIO A INGRESAR
function calcularEdad(fecha) {
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    return edad;
}

//ORDENAR ARRAY POR VALOR SOLICITADO
function OrdenarUsuarios(N){
    switch (N) {
        case 1:
          Usuarios.sort(function(x,y){
            if(x.Id < y.Id){
              return -1;
            }else if(x.Id > y.Id){
              return 1;
            }else{
              return 0;
            }
          });
          break;
        case 2:
          Usuarios.sort(function(x,y){
            if(x.Name < y.Name){
              return -1;
            }else if(x.Name > y.Name){
              return 1;
            }else{
                if(x.LastName < y.LastName){
                    return -1;
                }else if(x.LastName > y.LastName){
                    return 1;
                }else{
                    return 0;
                }
            }
          });
          break;
        case 3:
          Usuarios.sort(function(x,y){
            if(x.Email < y.Email){
              return -1;
            }else if(x.Email > y.Email){
              return 1;
            }else{
              return 0;
            }
          });
          break;
        case 4:
          Usuarios.sort(function(x,y){
            if(x.Nacionalidad < y.Nacionalidad){
              return -1;
            }else if(x.Nacionalidad > y.Nacionalidad){
              return 1;
            }else{
              return 0;
            }
          });
          break;
        case 5:
          Usuarios.reverse();
        break;
      }
      ActualizarLista();
};

//CREACIÓN DE TABLA CON METODOS DE FILAS Y BUSCADOR
function ActualizarLista(){
    TbUsers.innerHTML = '';
    const TblHead = document.createElement('thead');
    const TblBody = document.createElement('tbody');
    var Encabezado = document.createElement('tr');
    var Enc1 = document.createElement('th');
    Enc1.style.width = '10%';
    var TxtEnc1 = document.createTextNode('ID');
    var Enc2 = document.createElement('th');
    Enc2.style.width = '22%';
    var TxtEnc2 = document.createTextNode('NOMBRES');
    var Enc3 = document.createElement('th');
    Enc3.style.width = '22%';
    var TxtEnc3 = document.createTextNode('APELLIDOS');
    var Enc4 = document.createElement('th');
    Enc4.style.width = '10%';
    var TxtEnc4 = document.createTextNode('TELEFONO');
    var Enc5 = document.createElement('th');
    Enc5.style.width = '10%';
    var TxtEnc5 = document.createTextNode('CORREO');
    var Enc6 = document.createElement('th');
    Enc6.style.width = '16%';
    var TxtEnc6 = document.createTextNode('FECHA NACIMIENTO');
    var Enc7 = document.createElement('th');
    Enc7.style.width = '10%';
    var TxtEnc7 = document.createTextNode('NACIONALIDAD');
    Enc1.appendChild(TxtEnc1);
    Enc2.appendChild(TxtEnc2);
    Enc3.appendChild(TxtEnc3);
    Enc4.appendChild(TxtEnc4);
    Enc5.appendChild(TxtEnc5);
    Enc6.appendChild(TxtEnc6);
    Enc7.appendChild(TxtEnc7);
    Encabezado.appendChild(Enc1);
    Encabezado.appendChild(Enc2);
    Encabezado.appendChild(Enc3);
    Encabezado.appendChild(Enc4);
    Encabezado.appendChild(Enc5);
    Encabezado.appendChild(Enc6);
    Encabezado.appendChild(Enc7);
    TblHead.appendChild(Encabezado);
    var RowSearch = document.createElement('tr');
    var Search = document.createElement('td');
    Search.colSpan = 7;
    var InputSearch = document.createElement('input');
    InputSearch.type = 'text';
    InputSearch.placeholder = 'Digite texto para filtrar';
    InputSearch.setAttribute("style", "width: 100%; padding-left: 25px");

    InputSearch.addEventListener('keyup', function(){
        let texto = InputSearch.value.toString().toLowerCase();
        var r=0;
        let row = 0;
        while(row = TblBody.rows[r++]){
            if (row.innerText.toLowerCase().indexOf(texto) !== -1 )
                row.style.display = null;
            else
                row.style.display = 'none';
            }
    });
    Search.appendChild(InputSearch);
    RowSearch.appendChild(Search);
    TblHead.appendChild(RowSearch);

    var Cont = 0;
    Usuarios.forEach(function(x) {
        var Fila = document.createElement('tr');
        Fila.id = Cont;
        Fila.addEventListener('click', function(){
            inpId.value = x.Id;
            inpName.value = x.Name;
            inpLastName.value = x.LastName;
            inpPhone.value = x.Phone;
            inpEmail.value = x.Email;
            inpDate.value = x.Date;
            inpNacion.value = x.Nacionalidad;
            FilaSeleccionada = Fila.id;
        });
        var CeldaId = document.createElement('td');
        var TxtId = document.createTextNode(x.Id);

        var CeldaName = document.createElement('td');
        var TxtName = document.createTextNode(x.Name);

        var CeldaLastName = document.createElement('td');
        var TxtLastName = document.createTextNode(x.LastName);

        var CeldaPhone = document.createElement('td');
        var TxtPhone = document.createTextNode(x.Phone);

        var CeldaEmail = document.createElement('td');
        var TxtEmail = document.createTextNode(x.Email);

        var CeldaDate = document.createElement('td');
        var TxtDate = document.createTextNode(x.Date);

        var CeldaNacion = document.createElement('td');
        var TxtNacion = document.createTextNode(x.Nacionalidad);

        CeldaId.appendChild(TxtId);
        CeldaName.appendChild(TxtName);
        CeldaLastName.appendChild(TxtLastName);
        CeldaPhone.appendChild(TxtPhone);
        CeldaEmail.appendChild(TxtEmail);
        CeldaDate.appendChild(TxtDate);
        CeldaNacion.appendChild(TxtNacion);
        Fila.appendChild(CeldaId);
        Fila.appendChild(CeldaName);
        Fila.appendChild(CeldaLastName);
        Fila.appendChild(CeldaPhone);
        Fila.appendChild(CeldaEmail);
        Fila.appendChild(CeldaDate);
        Fila.appendChild(CeldaNacion);

        TblBody.appendChild(Fila);
        Cont++;
    });
    TbUsers.appendChild(TblHead);
    TbUsers.appendChild(TblBody);
}

//CARGAR DATOS DE LOCAL STORAGE
window.addEventListener('load', function() {
    ActualizarLista();
});

export { Usuarios }