// const names = `["amar","ravinder","sandy","rohit"]`;



//  const people = `[{
//     "name":"rahul",
//     "age" : 33,
//     "email":"amarjeetsingh@gmail.com",
//     "isemp" : true,
//     "hobbies": ["singing","cricket","cooking"]
// },
// {
//     "name":"Mohit",
//     "age" : 22,
//     "email":"mohit@gmail.com",
//     "isemp" : true,
//     "hobbies": ["singing","cricket","cooking"]
// },
// {
//     "name":"Komal",
//     "age" : 23,
//     "email":"komal@gmail.com",
//     "isemp" : true,
//     "hobbies": ["singing","cricket","cooking"]
// }]`;

// const parseData = JSON.parse(people);
// console.log(parseData)

// fetch('people.json').then(res => res.json()).then(value=> value.forEach((e)=>{console.log(e)})).catch(error => console.log(error))
     

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// .then(responce => {
//     if(responce.ok === false){
//         throw new Error("Could Not Fetch Resoure")
//     }
//     return responce.json();

// })
// .then(data => console.log(data))
// .catch(error => console.log(error));


fetchData()

async function fetchData (){
    try{

        const pokemon = document.getElementById("pokemonName").value.toLowerCase();

        const responce = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        if(!responce.ok){
            throw new Error(" Could Not Fetch resourses")
        }

        const data = await responce.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

    }catch(error){
        console.log(error)
    }
}



