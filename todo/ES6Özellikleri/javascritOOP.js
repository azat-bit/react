/*const user1={

    name:"azat",
    age:25,
    showinfos:function(){

    console.log("bilgiler yazılıyor");
   }

};

const user2={

    name:"azim",
    age:23

};

user1.salary=4000;
user1.showinfos();
console.log(user1);

function User(username,userage){

    this.username=username;
    this.userage=userage;

}

const user1 = new User("azat",25);
const user2 = new User("azat",25);

console.log(user1.userage);
console.log(user2);*/

//const object = new object();





// function Person(){


// }

// Person.prototype.test1=function(){

//     console.log("test1")
// }

// Person.prototype.test2=function(){

//     console.log("test2")
// }


// function Employe(name,age){

//     this.name=name;
//     this.age=age;
// }
//  const emp = new  Employe("azat",23);
// ;
//   const person = new Person();

//   console.log(person);




// class employe{

//     constructor(name,age,salary){

//         this.name=name;
//         this.age=age;
//         this.salary=salary;
//     }


//     show(){

//         console.log("isim",this.name,"yas",this.age,"maaş",this.salary);
//     }




// }

// const emp = new employe("mustafa",23,400);

// //console.log(emp);

// emp.show();


// class matematik {

//    static cube(x){

//         console.log(x*x*x);
//     }
// }

// const math = new matematik();

// math.cube(5);

// console.log(math);

// matematik.cube(3);

//miras

class car {

    constructor(brand){

         this.carname=brand;
    }

    sunmak(){

        return "ben sahibim"+this. carname;
    }
   
}

class model extends car{

    constructor(brand,mod){

        super(brand);
        this.model=mod;
    }

    show(){

        return this.sunmak + "modeli"+this.model;
    }
}

let mycar = new model("ford","mustang");


console.log(mycar);