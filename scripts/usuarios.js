//Llamado Inputs de Formulario
const inpId = document.getElementById('Id');
const inpName = document.getElementById('Name');
const inpLastName = document.getElementById('LastName');
const inpEmail = document.getElementById('Email');
const inpPhone = document.getElementById('Phone');
const inpDate = document.getElementById('Date');
const inpNacion = document.getElementById('Nacionalidad');

const TbUsers = document.getElementById('ListUsers');

const paises = ["Afganistán","Albania","Alemania","Andorra","Angola","Antigua y Barbuda","Arabia Saudita","Argelia","Argentina","Armenia","Australia","Austria","Azerbaiyán","Bahamas","Bangladés","Barbados","Baréin","Bélgica","Belice","Benín","Bielorrusia","Birmania","Bolivia","Bosnia y Herzegovina","Botsuana","Brasil","Brunéi","Bulgaria","Burkina Faso","Burundi","Bután","Cabo Verde","Camboya","Camerún","Canadá","Catar","Chad","Chile","China","Chipre","Ciudad del Vaticano","Colombia","Comoras","Corea del Norte","Corea del Sur","Costa de Marfil","Costa Rica","Croacia","Cuba","Dinamarca","Dominica","Ecuador","Egipto","El Salvador","Emiratos Árabes Unidos","Eritrea","Eslovaquia","Eslovenia","España","Estados Unidos","Estonia","Etiopía","Filipinas","Finlandia","Fiyi","Francia","Gabón","Gambia","Georgia","Ghana","Granada","Grecia","Guatemala","Guyana","Guinea","Guinea ecuatorial","Guinea-Bisáu","Haití","Honduras","Hungría","India","Indonesia","Irak","Irán","Irlanda","Islandia","Islas Marshall","Islas Salomón","Israel","Italia","Jamaica","Japón","Jordania","Kazajistán","Kenia","Kirguistán","Kiribati","Kuwait","Laos","Lesoto","Letonia","Líbano","Liberia","Libia","Liechtenstein","Lituania","Luxemburgo","Madagascar","Malasia","Malaui","Maldivas","Malí","Malta","Marruecos","Mauricio","Mauritania","México","Micronesia","Moldavia","Mónaco","Mongolia","Montenegro","Mozambique","Namibia","Nauru","Nepal","Nicaragua","Níger","Nigeria","Noruega","Nueva Zelanda","Omán","Países Bajos","Pakistán","Palaos","Palestina","Panamá","Papúa Nueva Guinea","Paraguay","Perú","Polonia","Portugal","Reino Unido","República Centroafricana","República Checa","República de Macedonia","República del Congo","República Democrática del Congo","República Dominicana","República Sudafricana","Ruanda","Rumanía","Rusia","Samoa","San Cristóbal y Nieves","San Marino","San Vicente y las Granadinas","Santa Lucía","Santo Tomé y Príncipe","Senegal","Serbia","Seychelles","Sierra Leona","Singapur","Siria","Somalia","Sri Lanka","Suazilandia","Sudán","Sudán del Sur","Suecia","Suiza","Surinam","Tailandia","Tanzania","Tayikistán","Timor Oriental","Togo","Tonga","Trinidad y Tobago","Túnez","Turkmenistán","Turquía","Tuvalu","Ucrania","Uganda","Uruguay","Uzbekistán","Vanuatu","Venezuela","Vietnam","Yemen","Yibuti","Zambia","Zimbabue"];


let Usuarios = []

function CrearUsuario(){

    let User = {
        Id : inpId.value.trim(),
        Name : inpName.value.trim(),
        LastName : inpLastName.value.trim(),
        Phone : inpPhone.value.trim(),
        Email : inpEmail.value.trim(),
        Date : inpDate.value.trim(),
        Nacionalidad : inpNacion.value
    };
    
    if(Usuarios.length == 0){
        Usuarios.push(User);
            alert('Usuario Registrado Exitosamente');
            console.log(Usuarios);
    }else{
        Usuarios.forEach(function(x){
            if(x.Id == inpId.value.trim()){
                alert('El Usuario ya está registrado');
            }else{
                Usuarios.push(User);
                alert('Usuario Registrado Exitosamente');
                console.log(Usuarios);
            }
        });
    }
    
    inpId.value = '';
    inpName.value = '';
    inpLastName.value = '';
    inpEmail.value = '';
    inpPhone.value = '';
    inpDate.value = '2005-01-01';
    ActualizarLista();
};

function ActualizarLista(){
    TbUsers.innerHTML = '';
    const TblHead = document.createElement('thead');
    const TblBody = document.createElement('tbody');
    var Encabezado = document.createElement('tr');
    var Enc1 = document.createElement('th');
    Enc1.style.width = '11%';
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
    Enc5.style.width = '15%';
    var TxtEnc5 = document.createTextNode('CORREO');
    var Enc6 = document.createElement('th');
    Enc6.style.width = '10%';
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
    InputSearch.setAttribute("style", "width: 70%");
    InputSearch.addEventListener('keyup', function(){
    let texto = InputSearch.value.toLowerCase();
        var r=0;
        while(row = TblBody.rows[r++])
        {
        if (row.innerText.toLowerCase().indexOf(texto) !== -1 )
            row.style.display = null;
        else
            row.style.display = 'none';
        }
    });
    Search.appendChild(InputSearch);
    RowSearch.appendChild(Search);
    TblHead.appendChild(RowSearch);

    var Cont = 0
    Usuarios.forEach(function(x) {
        var Fila = document.createElement('tr');
        Fila.id = Cont;
        Fila.addEventListener('click', function(){
            
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

window.onload = function(){
    
};

export {CrearUsuario}
export {paises}