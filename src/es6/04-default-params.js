function newUser(name, age, country){
    var name = name || 'Oscar';
    var age = age || 34;
    var country = country || 'CO';
    console.log(name, age, country)
}

newUser();
newUser('Omar', 43, 'MX')

function newAdmin(name = 'Omar', age=29, country='UK'){
    console.log(name, age, country);
}

newAdmin()
newAdmin('Ana', 28, 'PE');