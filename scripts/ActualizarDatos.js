let Juegos = [];
window.addEventListener('load', function() {
    Juegos = JSON.parse(localStorage.getItem("Games")  || "[]");
    if(Juegos.length < 1){
      Juegos = [{Cover:"https://e.snmc.io/lk/l/x/66fdc53b5c7eb111b423ac695da6afb1/5274919",Id:"ARlNTq",Name:"GTA: San Andreas",Precio:"12000",Puntos:"2",Tematica:"Aventura",Vendidos:0},{Cover:"https://plusgami.com/wp-content/uploads/2020/12/God-of-War-III-Remastered.jpg",Id:"vzj9NS",Name:"God of War III",Precio:"145000",Puntos:"20",Tematica:"Fantasía",Vendidos:0},{Cover:"https://a.espncdn.com/photo/2021/0709/r878390_864x1296_2-3.jpg",Id:"KNt3IL",Name:"FIFA 22",Precio:"250000",Puntos:"38",Tematica:"Aventura",Vendidos:0},{Cover:"https://im.ziffdavisinternational.com/ign_es/screenshot/r/rockstar-hace-publica-la-caratula-de-gta-5/rockstar-hace-publica-la-caratula-de-gta-5_e852.jpg",Id:"yzFz1P",Name:"Grand theft auto V",Precio:"120000",Puntos:"10",Tematica:"Aventura",Vendidos:0},{Cover:"https://www.si.com/.image/t_share/MTgyNDA0MzY4MTMyMjIwMjMy/cover---standard-edition.jpg",Id:"DhAS52",Name:"NBA 2K22",Precio:"180000",Puntos:"30",Tematica:"Aventura",Vendidos:0}];
    }
});

let Usuarios = [];
window.addEventListener('load', function() {
    Usuarios = JSON.parse(localStorage.getItem("Users")  || "[]");
    if(Usuarios.length < 1){
      Usuarios = [{Id:"1023541256",Name:"Princesa",LastName:"Peach",Phone:"3212154265",Email:"sdasda@fasfa.com",Date:"2005-01-01",Nacionalidad:"Argelia",Puntos:0,Juegos: []},{Id:"1023522542",Name:"Crash",LastName:"Bandicot",Phone:"321542256",Email:"lsiv@gmail.com",Date:"2005-01-01",Nacionalidad:"Andorra",Puntos:0,Juegos: []},{Id:"1025412532",Name:"Mario",LastName:"Bros",Phone:"3215422536",Email:"asdas@gmail.com",Date:"2005-01-01",Nacionalidad:"Argelia",Puntos:0,Juegos: []},{Id:"1021542125",Name:"Luigi",LastName:"Bros",Phone:"3214569872",Email:"luigibros46655@gmail.com",Date:"2005-01-01",Nacionalidad:"Bélgica",Puntos:0,Juegos: []}];
    }
});

export function CalcularValores(Precio){
    Precio = parseInt(Precio)
    let Impuesto = Precio * 0.04;
    let Iva = (Precio + Impuesto) * 0.19
    let Total = Precio + Impuesto + Iva
    console.log(Impuesto, Iva, Total)
    return [formatearNumero(Precio), formatearNumero(Impuesto), formatearNumero(Iva), formatearNumero(Total)]
}

export function AsignarJuego(Usuario, Juego){
    for(let i=0; i < Usuarios.length; i++){
        console.log(Usuarios[i].Id, Usuario);
        if(Usuarios[i].Id == Usuario){
            console.log('UsuarioEncontrado')
            for(let y=0; y < Juegos.length; y++){
                if(Juegos[y].Id == Juego){
                    Usuarios[i].Puntos = parseInt(Usuarios[i].Puntos) + parseInt(Juegos[y].Puntos)
                    Usuarios[i].Juegos.push(Juego)
                    console.log(Usuarios[i])
                    break;
                }
            }
            break;
        }
    }
}

function formatearNumero(numero){
    return new Intl.NumberFormat("es-CL").format(numero);
}

export {Juegos}
export {Usuarios}