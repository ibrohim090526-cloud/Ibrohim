//Oson daraja
//1.
let tugma = document.getElementById("btnClick")

tugma.addEventListener("click", function(){
    tugma.textContent = "Bosildi!"
})

//2.
let  rasm = document.getElementById("myImage");

rasm.addEventListener("click", function(){
    if(rasm.style.width ==="300px"){
        rasm.style.width = "200px"
    }else{
        rasm.style.width = "300px"
    }
})

//3.
let parolInp = document.getElementById("passwordInp")
let checkbox = document.getElementById("showPassword")

checkbox.addEventListener("change", function(){
    if(checkbox.checked){
        parolInp.type = "text"
    }else{
        parolInp.type = "password"
    }
})
