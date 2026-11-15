//1.
let taskInp = document.getElementById("taskInp");
let addBtn = document.getElementById("addBtn")
let taskList = document.getElementById("taskList")

addBtn.addEventListener("click", function(){
    if(taskInp.value !== ""){
        taskList.innerHTML += "<li>" + taskInp.value + "</li>"
        taskInp.value = "";
    }
})

taskInp.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && taskInput.value !== "") {
        taskList.innerHTML += "<li>" + taskInput.value + "</li>";
        taskInput.value = "";
    }
})

//2.
let nameInp = document.getElementById("nameInp")
let ageInp = document.getElementById("ageInp")
let checkBtn = document.getElementById("checkBtn");
let natija = document.getElementById("natija")

checkBtn.addEventListener("click", function(){
    let name = nameInp.value;
    let age = ageInp.value;

    if(name === "" || age ===""){
        natija.textContent = "Xato: Bosh maydon bo'lmasin!"
    }else if (Number(age) > 18){
        natija.textContent = name + ", Xush kelibsiz"
    }else {
        natija.textContent = "Kechirasiz, hali yoshsiz"
    }
})

//3.
let likeBtn = document.getElementById("likeBtn");
let liked = false;
let count = 0;

likeBtn.addEventListener("click", function(){
    if(liked === false){
        liked = true;
        count = count + 1;
        likeBtn.textContent = "Liked (" + count + ")"
    }else{
        liked = false;
        count = count - 1;
        likeBtn.textContent = "Like (" + count + ")"
    }
})
