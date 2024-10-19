function walkDog(){

    return new Promise((resolve,reject)=>{
            setTimeout(() => {
                const dogwalked = true ;
                if (dogwalked) {
                    resolve("You Walk The Dog 🐕‍🦺")
                } else {
                    reject("You Did't walked the dog ")
                }
            }, 1500);
    })
   
}

function cleanKitchen(){

    return new Promise((resolve,reject)=>{
            setTimeout(() => {
               const kitchen = true;
               if (kitchen) {
                resolve("You Clean the kitchen")
               } else {
                reject("you did't clean the kitchen")
               }
            }, 2500);
    })
   
}

function takeOutTrash(){

    return new Promise((resolve,reject)=>{
            setTimeout(() => {
                const trash = true;
               if(trash){
                resolve("You Take out the trash")
               }else{
                reject("You Did't take out the trash")
               }
            }, 500);
    })
   
}

// walkDog().then(value => {console.log(value); return cleanKitchen()}).then(value=>{ console.log(value); return takeOutTrash()}).then(value=>console.log(value))
//             .catch(error => console.log(error));

async function doChores (){
   try{
    const walkdogresult = await walkDog();
    console.log(walkdogresult);

    const kitchenResult = await cleanKitchen();
    console.log(kitchenResult)

    const trashResult  = await takeOutTrash();
    console.log(trashResult);

    console.log("you finished the all chores")

   }
   catch(error){
        console.error(error);
   }
}

doChores();