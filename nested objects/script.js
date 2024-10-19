const person = {
    fullname: "Amarjeet Singh",
    age: 32 ,
    isStudent : true,
    hobbies : ["karate","jellyfish","cooking"],
    address: {
        street :"122 conch st.",
        city : "bikini botom",
        country : "international water"
    }
}

// console.log(person.fullname)
// console.log(person.age)
// console.log(person.isStudent)
// console.log(person.hobbies[2])
// console.log(person.address.city)

for(const i in person.address){
    console.log(person.address[i])
}
