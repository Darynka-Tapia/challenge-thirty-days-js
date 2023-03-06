function validateForm(formData, registeredUsers) {
    // Tú código aquí 👈
    const { name, lastname, email, password } = formData
    if (name && lastname && email && password) {
        const existsEmail = registeredUsers.find(element => element.email === formData.email);
        if(existsEmail) {
            throw new Error(`Ya existe el correo ${existsEmail.email}`)
        };

        registeredUsers.push({name: formData.name, lastname: formData.lastname, email: formData.email});
        return "Tu registro fue exitoso Juan Perez";
    }else{
        const camposFaltantes = []
        if(name === '') { camposFaltantes.push('name') }
        if(lastname === '') { camposFaltantes.push('lastname') }
        if(email === '') { camposFaltantes.push('email') }
        if(password === '') { camposFaltantes.push('password') }
        throw new Error(`Faltan los siguientes campos: ${camposFaltantes.join(', ')}`)
    }
    
}

const formData = {
    name: "Juan",
    lastname: "Perez",
    email: "pedro2@example.com",
    password: ""
  }
  
  const registeredUsers = [
    { name: "Pedro", lastname: "Gomez", email: "pedro@example.com" },
    { name: "Maria", lastname: "Garcia", email: "maria@example.com" },
  ]
  
console.log(validateForm(formData, registeredUsers));
