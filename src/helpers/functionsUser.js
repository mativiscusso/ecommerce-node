module.exports = {
    getUsers : () => {
        let userContent = fs.readFileSync(usersPath, "utf8")
        return userContent != '' ? JSON.parse(userContent) : []
    },
    getUser : () => {
        let usuarios = getUsers();
        return usuarios.find(user => user.id == id)
    },
    getUserByEmail : () => {
        let usuarios = getUsers();
        return usuarios.find(user => user.email == email)
    },
    generateId : () => {
        let usuarios = getUsers();
        if(usuarios.length){
            let ids = usuarios.map((user) => user.id); // [1,2,3,4,5....]
            return Math.max(...ids) + 1;  // Math.max(1,2,3) -> 3 + 1 -> 4 
        } else {
            return 1;
        }
    },
    guardarUsuario : () => {
        let usuarios = getUsers()
        usuarios.push(usuario)
        fs.writeFileSync(usersPath,JSON.stringify(usuarios,null,' '))
    }
}