const flimİd=document.getElementById("flim-id");

const FlimAdı=document.querySelector("#flim-ad");

const  yonetmeb = document.querySelector("#yonetmen");
const afis= document.querySelector("#afis");

//const ui = new Sinif();

EventListener();


function EventListener(){

     flimİd.addEventListener("submit",addflim)
}

function  addflim(e){

    const title = FlimAdı.value;
    const yon=yonetmeb.value;

    const url = afis.value;
    

    if(title=== " " | yon === " " | url ===" "){


    }

    else{
      
        const flim =new flimler(title,yon,url);

        console.log(flim)
    }

e.preventDefault();
}