import { Usuarios } from "./ActualizarDatos.js"
import { Juegos } from "./ActualizarDatos.js"
import { CalcularValores } from "./ActualizarDatos.js"
import { AsignarJuego } from "./ActualizarDatos.js"

//LLAMADO BOTONES Y SELECTORES
const SltUsuario = document.getElementById('Usuario')
const SltJuego = document.getElementById('Juego')
const btnGenerar = document.getElementById('GenerarFactura')
const btnComprar = document.getElementById('ComprarJuego')

//LLAMADO CAMPOS DE INFO
const IfIdUsuario = document.getElementById('IdComprador');
const IfNombre = document.getElementById('NombreComprador');
const IfCorreo = document.getElementById('CorreoComprador');
const IfTelefono = document.getElementById('TelefonoComprador');
const IfPuntosU = document.getElementById('PuntosUsuario');
const IfIdJuego = document.getElementById('IdJuego');
const IfJuego = document.getElementById('NombreJuego');
const IfTematica = document.getElementById('TematicaJuego');
const IfPuntosG = document.getElementById('PuntosJuego');
const IfNeto = document.getElementById('Neto')
const IfImpuesto = document.getElementById('Impuesto')
const IfIva = document.getElementById('Iva')
const IfTotal = document.getElementById('Total')

window.addEventListener('load', function(){
    Usuarios.forEach(function(User){
        SltUsuario.innerHTML += `<option value=${User.Id}>${User.Id} - ${User.Name.toUpperCase()} ${User.LastName.toUpperCase()}</option>`;
    })
    Juegos.forEach(function(Game){
        SltJuego.innerHTML += `<option value=${Game.Id}>${Game.Id.toUpperCase()} - ${Game.Name.toUpperCase()}</option>`;
    })
})

let Valores = 0;
let Precio = 0;
btnGenerar.addEventListener('click', function(){
    Usuarios.forEach(function(User){
        if(User.Id == SltUsuario.value){
            IfIdUsuario.innerHTML = `ID: ${User.Id}`
            IfNombre.innerHTML = `Usuario: ${User.Name} ${User.LastName}`
            IfCorreo.innerHTML = `Correo: ${User.Email}`
            IfTelefono.innerHTML = `Telefono: ${User.Phone}`
            IfPuntosU.innerHTML = `Puntos Adquiridos: ${User.Puntos}`
        }
    });
    Juegos.forEach(function(Game){
        if(Game.Id == SltJuego.value){
            IfIdJuego.innerHTML = `ID: ${Game.Id}`
            IfJuego.innerHTML = `Juego: ${Game.Name}`
            IfTematica.innerHTML = `Tematica: ${Game.Tematica}`
            IfPuntosG.innerHTML = `Puntos a Otorgar: ${Game.Puntos}`
            Precio = Game.Precio
        }
    });
    Valores = CalcularValores(Precio);
    IfNeto.innerHTML = `Valor Licencia = $${Valores[0]}`
    IfImpuesto.innerHTML = `Impuesto = $${Valores[1]}`
    IfIva.innerHTML = `IVA = $${Valores[2]}`
    IfTotal.innerHTML = `Valor Total = $${Valores[3]}`
});

btnComprar.addEventListener('click', function(){
    Usuarios.forEach(function(User){
        if(User.Id == SltUsuario.value){
            if(User.Juegos.includes(SltJuego.value)){
                alert('USUARIO YA CUENTA CON ESTA LICENCIA')
            }else{
                if(confirm(`CONFIRMAR COMPRA\n\n\tID Usuario: ${SltUsuario.value}\n\tID Juego: ${SltJuego.value}\n\tValor Total: $${Valores[3]} `))
                AsignarJuego(SltUsuario.value, SltJuego.value);
                localStorage.setItem("Users", JSON.stringify(Usuarios));
            }
        }
    })
})
