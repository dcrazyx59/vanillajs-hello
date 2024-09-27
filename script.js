window.onload = function() {
    miExcusa();
    musicSound();
};

var musicCounter = 0;

let sujeto = ["Mi pájaro " , "Un soldado ", "El programador genio llamado Adrian ", "Un robot ", "Tu mejor amigo ", "Lucía "];
let verbo = ["se comió ", "destrozó ", "maldijo ", "se meó encima de ", "echó ácido encima de ", "escondió "];
let predicado = ["mis deberes ", "mi ordenador personal ", "mi tio-bisabuelo tercero ", "mi gallina ", "mi coche ", "mi mapa de campaña militar personal contra Francia "];
let tiempo = ["mientras estaba intentando conquistar Francia.", "mientras estaba codeando.",  "justo cuando entró mi madre.", "durante mi sesión de terapia.", "antes de entrar en la academia de 4Geeks.", "mientras bebía mi té."];


function generarExcusa(a, b, c, d) {

    function generarRandom(arr){
        let index = Math.floor(Math.random()* arr.length);
        return arr[index];
    }

    function construccion () {
        let first = generarRandom(a);
        let second = generarRandom(b);
        let third = generarRandom(c);
        let fourth = generarRandom(d);
        return first + second + third + fourth;
    }
    return construccion();
}

let excusa = (generarExcusa(sujeto, verbo, predicado, tiempo));


function miExcusa(){
    let excusa = (generarExcusa(sujeto, verbo, predicado, tiempo));
    document.getElementById("excusa").innerHTML = excusa;
    musicCounter++;
}

var playing = false;
var fading = false;
var volume = 0;

function musicSound() {
    var music = document.getElementById("mySound");
    var interval = 1000;
    music.volume = volume;
    if (musicCounter === 3){
        if (playing == false) {
            music.play();
            playing = true;
        }
        if (fading == false){
            fadein = true;
            var fadein = setInterval (
                function (){
                if (volume >= 0.2) {
                    volume = 0.2;
                    music.volume = volume;
                    clearInterval(interval) ;
                    fadein = false;
                } else {
                    volume += 0.02;
                    music.volume = volume;
                }}, interval);
        }
    }
}

function changeColors () {
    let randomColorArray = ["blue","pink", "red", "blue", "green", "purple", "yellow", "fuchsia", "navy", "aqua", "lime", "orange", "greenyellow", "darkviolet", "crimson", "tomato"];
    let randomColor = "";

    function createRandomColor(arr){
            let index = Math.floor(Math.random()* arr.length);
            return arr[index];
        }
    
    randomColor = createRandomColor(randomColorArray);

    if (musicCounter >= 5){
    document.getElementById("todo").style.backgroundColor = randomColor;
    randomColor = createRandomColor(randomColorArray);
    document.getElementById("buttonActivate").style.backgroundColor = randomColor;
    randomColor = createRandomColor(randomColorArray);
    document.getElementById("textoMedio").style.color = randomColor;
    randomColor = createRandomColor(randomColorArray);
    document.getElementById("buttonDisactivate").style.visibility = "visible";
    document.getElementById("gatoMeme").style.visibility = "visible";
    
    }
}

function paraPorFavor (){
    document.getElementById("todo").style.backgroundColor = "lightgray";
    document.getElementById("buttonActivate").style.backgroundColor = "darkgrey";
    document.getElementById("textoMedio").style.color = "black";
    document.getElementById("buttonDisactivate").style.visibility = "hidden";
    document.getElementById("gatoMeme").style.visibility = "hidden";
    var music = document.getElementById("mySound");
    music.pause();
    music.currentTime = 0;
    playing = false;
    fading = false;
    musicCounter = 0;
    
}

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//              NO FUNCIONAL

// function generarExcusa(arr){
//     var miMejorExcusa = arr.map(function (item, index, array) {
//         index = Math.floor(Math.random()* array.length)
//         return arr[index]
//     })
//     return miMejorExcusa.toString()
// }

// console.log (generarExcusa(sujeto))


// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//              FUNCIONAL

// function generarExcusa(a,b,c,d) {
//     let aSujeto = Math.floor((Math.random()* a.length))
//     let bVerbo = Math.floor((Math.random()* b.length))
//     let cPredicado = Math.floor((Math.random()* c.length))
//     let dTiempo = Math.floor((Math.random()* d.length))

//     return a[aSujeto] + b[bVerbo] + c[cPredicado] + d[dTiempo]
// }

// console.log(generarExcusa(sujeto, verbo, predicado, tiempo))


// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------