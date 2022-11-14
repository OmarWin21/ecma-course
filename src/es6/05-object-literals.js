// enhaced object literals

function newUser(user, age, country, uId){
    return{
        user,
        age,
        country,
        id: uId
    }
}

console.log(newUser("ozlnx", 29, "CO", 1));