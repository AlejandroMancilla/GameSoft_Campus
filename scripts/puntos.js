import { Usuarios } from "./ActualizarDatos.js"
import { Juegos } from "./ActualizarDatos.js"

//LLAMADO ELEMENTOS HTML
const TbUsers = document.getElementById('ListUsers');
const LblUser = document.getElementById('Usuario');
const LblPuntos = document.getElementById('Puntos');
const ListaJuegos = document.getElementById('ListaJuegos');

//Botones Ordenar
const btnOrdID = document.getElementById('OrdId');
btnOrdID.addEventListener('click', function(){
    OrdenarUsuarios(1);
});
const btnOrdName = document.getElementById('OrdName');
btnOrdName.addEventListener('click', function(){
    OrdenarUsuarios(2);
});
const btnOrdPuntos = document.getElementById('OrdPuntos');
btnOrdPuntos.addEventListener('click', function(){
    OrdenarUsuarios(3);
});
const btnInvertir = document.getElementById('OrdInverter');
btnInvertir.addEventListener('click', function(){
    OrdenarUsuarios(5);
});

function ActualizarLista(){
    TbUsers.innerHTML = '';
    const TblHead = document.createElement('thead');
    const TblBody = document.createElement('tbody');
    var Encabezado = document.createElement('tr');
    var Enc1 = document.createElement('th');
    Enc1.style.width = '20%';
    var TxtEnc1 = document.createTextNode('ID');
    var Enc2 = document.createElement('th');
    Enc2.style.width = '30%';
    var TxtEnc2 = document.createTextNode('NOMBRE');
    var Enc3 = document.createElement('th');
    Enc3.style.width = '30%';
    var TxtEnc3 = document.createTextNode('APELLIDOS');
    var Enc4 = document.createElement('th');
    Enc4.style.width = '20%';
    var TxtEnc4 = document.createTextNode('PUNTOS');
    Enc1.appendChild(TxtEnc1);
    Enc2.appendChild(TxtEnc2);
    Enc3.appendChild(TxtEnc3);
    Enc4.appendChild(TxtEnc4);
    Encabezado.appendChild(Enc1);
    Encabezado.appendChild(Enc2);
    Encabezado.appendChild(Enc3);
    Encabezado.appendChild(Enc4);
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
            LblUser.value = '';
            LblPuntos.value = '';
            ListaJuegos.innerHTML = '';
            LblUser.value = x.Name + ' ' + x.LastName;
            LblPuntos.value = x.Puntos;
            x.Juegos.forEach(function(Juego){
                console.log(Juego);
                let Item = document.createElement('li');
                Juegos.forEach(function(x){
                    if(x.Id == Juego){
                        Item.textContent = x.Name;
                        ListaJuegos.appendChild(Item)
                    }
                })
                
            })
        });
        var CeldaId = document.createElement('td');
        var TxtId = document.createTextNode(x.Id);
        CeldaId.style.textAlign = 'center';

        var CeldaName = document.createElement('td');
        var TxtName = document.createTextNode(x.Name);

        var CeldaLastName = document.createElement('td');
        var TxtLastName = document.createTextNode(x.LastName);

        var CeldaPuntos = document.createElement('td');
        var TxtPuntos = document.createTextNode(x.Puntos);
        CeldaPuntos.style.textAlign = 'center';


        CeldaId.appendChild(TxtId);
        CeldaName.appendChild(TxtName);
        CeldaLastName.appendChild(TxtLastName);
        CeldaPuntos.appendChild(TxtPuntos);

        Fila.appendChild(CeldaId);
        Fila.appendChild(CeldaName);
        Fila.appendChild(CeldaLastName);
        Fila.appendChild(CeldaPuntos);

        TblBody.appendChild(Fila);
        Cont++;
    });
    TbUsers.appendChild(TblHead);
    TbUsers.appendChild(TblBody);
}

window.addEventListener('load', function(){
    ActualizarLista();
})

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
        if(x.Puntos < y.Puntos){
            return -1;
        }else if(x.Puntos > y.Puntos){
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