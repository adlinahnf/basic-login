let dbUsers = [
    {
        username: "Fatin",
        password:"123456",
        name:"Fatin Afiqah",
        email:"afiqah@gmail.com",
    },
    {
        username: "Mai",
        password:"654321",
        name:"Maisarah",
        email:"mai@gmail.com",
    },
    {
        username: "Ying",
        password:"321456",
        name:"Ruying",
        email:"ying@gmail.com",
    },
]


function login (username, password){
    console.log("someone try to login with",username, password)
    let matched = dbUsers.find(element =>
        element.username == username )
    
        if(matched)
    {
        if (matched.password == password)
        {

        return matched
        }
    else
     {
        return "Password not matched"
    }

    }
    else
    {
        return "Username not found"
    }
    
}


//try to login
//console.log(login ("Mai", "789543"))
//console.log(login ("Mai", "654321"))

function register(newusername, newpassword, newname, newemail){
    //TODO: Check if username exist
    let matched = dbUsers.find(element =>
        element.username == newusername )
    
        if(matched){
            return "Username already exist"
        }


else{
    dbUsers.push({
        username: newusername,
        password: newpassword,
        name: newname,
        email: newemail,
    }) //push new element to the array
}
}
//register
console.log(register("Fatin","147207","adlina","adlinahnf@gmail.com"))

