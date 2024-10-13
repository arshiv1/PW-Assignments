function login(username, password){
    try{
        if(username===""){
            throw new Error("Username is require");
        }
        if(password === ""){
            throw new Error("Password is required");
        }
        if(username==="invalidUser" || password==="invalidPassword"){
            throw new Error("Invalid username or password");
        }
    }catch(error){
        console.error(error.message)
    }
}


try{
    login("user123", "password123");
    login("", "password123");
    login("user123", "");
    login("invlaidUser", "invalidPassword");
}catch(error){
    console.error(error.message)
}