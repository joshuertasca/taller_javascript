//punto 1

document.querySelector("#punto1").addEventListener("click", ()=> {
    document.querySelector("#escribir_punto1").innerHTML = ``
    var Numero1 = parseInt(document.querySelector("#numero_1").value);
    var Numero2 = parseInt(document.querySelector("#numero_2").value);
    (Numero1<=Numero2)? document.querySelector("#escribir_punto1").innerHTML += `<p class=" fs-3">numero1 no es mayor que numero2 </p>`:"";
    (Numero2>0)? document.querySelector("#escribir_punto1").innerHTML += `<p class=" fs-3"> Numero 2 es positivo </p>`:"";
    (Numero1!=0)? document.querySelector("#escribir_punto1").innerHTML += `<p class=" fs-3"> numero1 es negativo o distinto de cero</p>`:"";
    document.querySelector("#escribir_punto1").innerHTML += `<p class=" fs-3"> La suma entre numero1 y numero2 es ${Numero1+Numero2}</p>`
    document.querySelector("#escribir_punto1").innerHTML += `<p class=" fs-3"> La resta entre numero1 y numero2 es ${Numero1-Numero2}</p>`
    document.querySelector("#escribir_punto1").innerHTML += `<p class=" fs-3"> La multiplicación entre numero1 y numero2 es ${Numero1*Numero2}</p>`
    document.querySelector("#escribir_punto1").innerHTML += `<p class=" fs-3"> La división entre numero1 y numero2 es ${Numero1/Numero2}</p>`
})


//punto 2
let data = ["azul", 2, "colombia", 85, true, "Felipe", "Horacio", false, false, 39, 90, "JS"];
var operacion = [0,0,0,0]
var x=0
data.forEach(element => {
    if (/^-?\d+$/.test(element)){
        if (x==0) {
            operacion=[element,element,element,element]
            x++
        }
        
        operacion[0]= operacion[0]+element
        operacion[1]= operacion[1]-element
        operacion[2]= operacion[2]*element
        operacion[3]= operacion[3]/element   
    }
})
document.querySelector("#punto2").addEventListener("click",()=>{
    document.querySelector("#escribir_punto2").innerHTML = ``
    document.querySelector("#escribir_punto2").innerHTML += `<p class=" fs-3"> La suma entre los numeros es ${operacion[0]}</p>`
    document.querySelector("#escribir_punto2").innerHTML += `<p class=" fs-3"> la resta entre los numeros es ${operacion[1]}</p>`
    document.querySelector("#escribir_punto2").innerHTML += `<p class=" fs-3"> la multiplicacion entre los numeros es ${operacion[2]}</p>`
    document.querySelector("#escribir_punto2").innerHTML += `<p class=" fs-3"> la división entre los numeros es ${operacion[3]}</p>`
})

//punto 3
var textos = [""] 
var NumeroTexto = 0
document.querySelector("#addTexto").addEventListener("click",()=>{
    
    textos[NumeroTexto]= document.querySelector("#textos").value;
    document.querySelector("#textos").value="";
    NumeroTexto++
})
document.querySelector("#cancelarTexto").addEventListener("click",()=>{
    (document.querySelector("#textos").value=="")?"":textos[NumeroTexto]= document.querySelector("#textos").value;
    document.querySelector("#escribir_punto3").innerHTML = ``
    textos.forEach((element,x) => {
        (x==0)?document.querySelector("#escribir_punto3").innerHTML += `${element} `:"";
        (x==0)?"":document.querySelector("#escribir_punto3").innerHTML += ` - ${element} `;
    });
    textos = [""] ;
    NumeroTexto=0
})

//punto 4

document.querySelector("#contarVocales").addEventListener("click",()=>{
    var numerovocales = 0
    var frase = document.querySelector("#frase4").value
    frase=frase.split("",)
    frase.forEach(element => {
        (/^[aeiou]{1}.*/i.test(element))? numerovocales++:"";
    });
    document.querySelector("#escribir_punto4").innerHTML = ` el numero de vocales de la frase es ${numerovocales} `
})

//punto 

document.querySelector("#contarVocales5").addEventListener("click",()=>{
    var numerovocales = [0,0,0,0,0]
    var frase = document.querySelector("#frase5").value
    frase=frase.split("",)
    frase.forEach(element => {
        (element=="a")? numerovocales[0]++:"";
        (element=="e")? numerovocales[1]++:"";
        (element=="i")? numerovocales[2]++:"";
        (element=="o")? numerovocales[3]++:"";
        (element=="u")? numerovocales[4]++:"";
    });
    document.querySelector("#escribir_punto5").innerHTML = `<p> el numero de a en la frase es ${numerovocales[0]} </p>`
    document.querySelector("#escribir_punto5").innerHTML += `<p> el numero de e en la frase es ${numerovocales[1]} </p>`
    document.querySelector("#escribir_punto5").innerHTML += `<p> el numero de i en la frase es ${numerovocales[2]} </p>`
    document.querySelector("#escribir_punto5").innerHTML += `<p> el numero de o en la frase es ${numerovocales[3]} </p>`
    document.querySelector("#escribir_punto5").innerHTML += `<p> el numero de u en la frase es ${numerovocales[4]} </p>`
})



