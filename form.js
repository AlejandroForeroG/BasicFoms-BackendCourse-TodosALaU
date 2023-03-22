function mostrar(){
    console.log("Mostrar")}

//agregar event listener a otro boton 
let boton = document.getElementById("boton2")
boton.addEventListener(onclick,()=>{
    console.log("boton2")
})