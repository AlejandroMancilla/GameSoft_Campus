import { Juegos } from "./ActualizarDatos.js"

//LLAMAR ELEMENTOS - JUEGOS
const btnAddGame = document.getElementById('AddGame');
const btnDeleteGame = document.getElementById('DeleteGame');
const btnEnviar = document.getElementById('EnviarDatos');
const Title = document.getElementById('NameForm');
const TextDiv = document.getElementById('TextList');
const Formulario = document.getElementById('Formulario');
const Listado = document.getElementById('ListGames');

//LLAMAR INPUTS FORMULARIO
const inpName = document.getElementById('Game');
const inpPrecio = document.getElementById('Precio');
const inpPuntos = document.getElementById('Puntos');
const inpTema = document.getElementById('Tematica');
const inpCover = document.getElementById('Cover');

//BOTONES ORDENAR
const btnOrdID = document.getElementById('OrdGame');
btnOrdID.addEventListener('click', function(){
    OrdenarUsuarios(1);
});
const btnOrdName = document.getElementById('OrdPrecio');
btnOrdName.addEventListener('click', function(){
    OrdenarUsuarios(2);
});
const btnOrdEmail = document.getElementById('OrdTema');
btnOrdEmail.addEventListener('click', function(){
    OrdenarUsuarios(3);
});
const btnInvertir = document.getElementById('OrdInverter');
btnInvertir.addEventListener('click', function(){
    OrdenarUsuarios(4);
});

//CONSTANTES Y VARIABLES DE PAGINA
let OpcGame = 0;
const TbUsers = document.getElementById('ListGames');
let JuegoSeleccionado = 0;
let Ids = [];
const Tematicas = ['Aventura', 'Ciencia Ficción', 'Fantasía', 'Terror'];

//FUNCIONES PARA GESTIÓN DE JUEGOS
btnAddGame.addEventListener('click', function(){
    CrearFormulario('Registrar', "Ingrese los siguientes datos");
    OpcGame = 1;
});

btnDeleteGame.addEventListener('click', function(){
    CrearFormulario('Eliminar', "Seleccione un Juego de la lista");
    OpcGame = 2;
})

function CrearFormulario(text, parrafo){
    Formulario.classList = 'login-box';
    Title.textContent = text + ' VideoJuego';
    TextDiv.textContent = parrafo;
    btnEnviar.textContent = text;
    for(let i=0; i<Tematicas.length; i++){
        inpTema.innerHTML += `'<option value ='${Tematicas[i]}'>${Tematicas[i]}</option>`;
    }
};

btnEnviar.addEventListener('click', function(){
    switch(OpcGame){
        case 1:
            CrearJuego();
            break;
        case 2:
            EliminarJuego();
            break;
    }
    Title.textContent = '';
    TextDiv.textContent = 'Seleccione una opción del menú superior';
    btnEnviar.textContent = '';
    Formulario.classList = 'login-box hide';
});

//CREAR UN NUEVO JUEGO VALIDANDO ENTRADAS
function CrearJuego(){
    let Game = {
        Cover : inpCover.value.trim(),
        Id : makeRandomId(),
        Name : inpName.value.trim(),
        Precio : inpPrecio.value.trim(),
        Puntos : inpPuntos.value.trim(),
        Tematica : inpTema.value,
        Vendidos : 0
    };
    Juegos.push(Game);
    alert('Juego Añadido Exitosamente');
    console.log(Juegos);
    alert('juego creado');
    inpName.value = '';
    inpPrecio.value = '';
    inpPuntos.value = '';
    ActualizarLista();
    localStorage.setItem("Games", JSON.stringify(Juegos));
};

//BORRAR JUEGO SELECCIONADO DE LA LISTA
function EliminarJuego(){
    let Pos = 0;
    let Eliminar
    Juegos.forEach(function(x){
        if(x.Id == JuegoSeleccionado){
            Eliminar = Pos;
        }
        Pos++;
    })
    if(confirm('CONFIRMACIÓN\n\t¿Desea Eliminar el Juego Seleccionado?') == true){
        Juegos.splice(Eliminar, 1);
        ActualizarLista();
        localStorage.setItem("Games", JSON.stringify(Juegos));
    }
}
    
//ORDENAR ARRAY POR VALOR SOLICITADO
function OrdenarUsuarios(N){
    switch (N) {
        case 1:
          Juegos.sort(function(x,y){
            if(x.Name < y.Name){
              return -1;
            }else if(x.Name > y.Name){
              return 1;
            }else{
              return 0;
            }
          });
          break;
        case 2:
          Juegos.sort(function(x,y){
            if(x.Precio < y.Precio){
              return -1;
            }else if(x.Precio > y.Precio){
              return 1;
            }else{
              return 0;
            }
          });
          break;
        case 3:
          Juegos.sort(function(x,y){
            if(x.Tematica < y.Tematica){
              return -1;
            }else if(x.Tematica > y.Tematica){
              return 1;
            }else{
              return 0;
            }
          });
          break;
        case 4:
          Juegos.reverse();
        break;
      }
      ActualizarLista();
};

//CREACIÓN DE CARTAS
function ActualizarLista(){
    Listado.innerHTML = '';
    Juegos.forEach(function(x){
        const Carta = document.createElement('div');
        Carta.className = "card";
        const Front = document.createElement('div');
        Front.className = "front";
        const ImgCover = document.createElement('img');
        ImgCover.className = 'Cover';
        ImgCover.src = x.Cover;
        Front.appendChild(ImgCover);
        const Back = document.createElement('div');
        const JuegoName = document.createElement('h3')
        JuegoName.textContent = x.Name.toUpperCase();
        Back.appendChild(JuegoName);
        Back.innerHTML += `<p><em>Tematica:</em> ${x.Tematica}</p>`
        Back.innerHTML += `<p><em>Precio:</em> $${x.Precio}</p>`
        Back.innerHTML += `<p><em>Puntos:</em> ${x.Puntos}</p>`
        Back.className = "back";
        Carta.appendChild(Front);
        Carta.appendChild(Back);
        Carta.addEventListener('click', function(){
            JuegoSeleccionado = x.Id;
            inpName.value = x.Name;
            inpPrecio.value = x.Precio;
            inpPuntos.value = x.Puntos;
            inpCover.value = x.Cover;
            inpTema.value = x.Tematica;
        })
        Listado.appendChild(Carta);
    })
};


//GENERAR ID RANDOM
const makeRandomId= () => {
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < 6; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
   }
   
   if(Ids.includes(result) == true){
    makeRandomId();
   }else{
    return result;
   }
};

window.addEventListener('load', function(){
  ActualizarLista();
})