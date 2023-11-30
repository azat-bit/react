const ekle =document.querySelector("#todo-ekle");//document.getElementsByName("todo-ekle");
const formm= document.querySelector(".form-control");
//const liste = document.getElementsByClassName(".list-group");
//const eklemece=document.getElementsByClassName(".btn");
const eklemece = document.querySelector(".btn");
const silmece = document.querySelector(".btn1");
const list=document.querySelector(".list-group")
formm.addEventListener("submit",myfunction);
eklemece.addEventListener("click",myfunction);
silmece.addEventListener("click",silme);


function myfunction(e){
    const yenitodo=ekle.value.trim();
ekleme(yenitodo);
    if(yenitodo==""){

        alert("burası boş")
    }

 
todoekle(yenitodo);
}

//local Stroge ekle

function ekleme(pr1){
p1=ekle.value.trim();
localStorage.setItem("todo",p1);

}
function todoekle(yenitodo){
   

    const listitem = document.createElement("li");
    listitem.className="list-group-item";

    listitem.appendChild(document.createTextNode(yenitodo));

    list.appendChild(listitem);

    console.log(yenitodo);


    
}

function silme(silmetodo){
    silmetodo.remove();


}

