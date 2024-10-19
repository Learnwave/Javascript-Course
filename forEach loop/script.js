const person1 = {
    firstname : "Amarjeet",
    lastname   : "Singh",
    age : 30 ,
    isEmp : true,
    sayHello : function (){
        console.log(`Hi There im ${this.firstname} ${this.lastname}`)
    }

}

const person2 = {
    firstname : "ravinder",
    lastname   : "kour",
    age : 30 ,
    isEmp : true
}

person1.sayHello()