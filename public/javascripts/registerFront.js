

window.onload = function(){
    let registerForm = document.getElementById("registerForm")
    let inputNombre = document.getElementById("nombre")
    let smallNombre = document.getElementById("smallNombre")
    let inputApellido = document.getElementById("apellido")
    let smallApellido = document.getElementById("smallApellido")
    let inputUsu_Telefono = document.getElementById("usu_Telefono")
    let smallTelefono = document.getElementById("smallTelefono")
    let inputEmail = document.getElementById("email")
    let smallEmail = document.getElementById("smallEmail")
    let inputContraseña = document.getElementById("contraseña")
    let smallContraseña = document.getElementById("smallContraseña")
    let inputContraseña2 = document.getElementById("contraseña2")
    let smallContraseña2 = document.getElementById("smallContraseña2")
    let regexEmail = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/
   

    inputEmail.onblur = function(){
        fetch("//localhost:3000/apiuser/allUsers")
        .then(function(response){
                return response.json()
            })
            .then(function(information) {
                // console.log(information);
                information.forEach(element => {
                    // console.log(element.email)
                    if(inputEmail.value == element.email){
                        inputEmail.classList.add("is-invalid")
                        smallEmail.innerText="El mail ya esta registrado"                            
                    }
                });
            })
            .catch(function(error) {
                console.log("Error: " + error);
            })       

    }

    inputEmail.onfocus = function(){
        smallEmail.innerText=""
    }


    let errores = 'undefined'

    inputEmail.onkeyup = function(){

        let errores = "undefined"

        if(!regexEmail.test(inputEmail.value)){            
            inputEmail.classList.add("is-invalid")
            smallEmail.innerHTML = "Tiene que tener formato Email"
       }else{
           inputEmail.classList.remove("is-invalid")
           inputEmail.classList.add("is-valid") 
           smallEmail.innerHTML = ""
       }
       console.log(errores)
      }


    inputNombre.onkeyup = function(){

        let errores = "undefined"

        if(inputNombre.value.length < 3 ){
            inputNombre.classList.add("is-invalid")
            smallNombre.innerHTML = "Tiene que tener minimo 3 letras"
            errores = true
        }else{
            inputNombre.classList.remove("is-invalid")
            inputNombre.classList.add("is-valid")
            smallNombre.innerHTML = ""
            errores= false
    }
    if( typeof errores == 'undefined' || inputNombre.value == inputApellido.value){
        inputNombre.classList.add("is-invalid")
        smallNombre.innerHTML = "No pueden ser iguales"
        errores = true
        
    }
}

    inputApellido.onkeyup = function(){

        let errores = "undefined"


        if(inputApellido.value.length < 3 ){
            inputApellido.classList.add("is-invalid")
            smallApellido.innerHTML = "Tiene que tener minimo 3 letras"
            errores = true
        }else{
            inputApellido.classList.remove("is-invalid")
            inputApellido.classList.add("is-valid")
            smallApellido.innerHTML = ""
            errores= false
        }

        if( typeof errores == 'undefined' || inputNombre.value == inputApellido.value){
            inputApellido.classList.add("is-invalid")
            smallApellido.innerHTML = "No pueden ser iguales"
            errores = true
            console.log(errores)
        }
    }

    inputUsu_Telefono.onkeyup = function(){

        let errores = "undefined"

        if(inputUsu_Telefono.value.length < 8 ){
            inputUsu_Telefono.classList.add("is-invalid")
            smallTelefono.innerHTML = "Tiene que tener minimo 8 numeros"
            errores = true
        }else{
            inputUsu_Telefono.classList.remove("is-invalid")
            inputUsu_Telefono.classList.add("is-valid")
            smallTelefono.innerHTML = ""
            errores= false
        }
    }



  inputContraseña.onkeyup = function(){

    let errores = "undefined"

    if(inputContraseña.value.length < 6 ||  inputContraseña.value.length > 12 ){
        inputContraseña.classList.add("is-invalid")
        smallContraseña.innerHTML = "Tiene que tener entre 6 y 12 caracteres"
        errores = true
    }else{
        inputContraseña.classList.remove("is-invalid")
        inputContraseña.classList.add("is-valid")
        smallContraseña.innerHTML = ""
        errores= false
    }

  }

  inputContraseña2.onkeyup = function(){

    let errores = "undefined"

    if(inputContraseña2.value !==  inputContraseña.value  ){
        inputContraseña2.classList.add("is-invalid")
        smallContraseña2.innerHTML = "Las dos contraseñas deben coincidir"
        errores = true
    }else{
        inputContraseña2.classList.remove("is-invalid")
        inputContraseña2.classList.add("is-valid")
        smallContraseña2.innerHTML = ""
        errores= false
    }

  }

   registerForm.addEventListener("submit",function(event){
       
    if( errores == "undefined"){
        console.log("No envio el form")
        event.preventDefault()
        inputNombre.classList.add("is-invalid")
        smallNombre.innerHTML = "No puede estar vacio"
        inputApellido.classList.add("is-invalid")
        smallApellido.innerHTML = "No puede estar vacio"
        inputUsu_Telefono.classList.add("is-invalid")
        smallTelefono.innerHTML = "No puede estar vacio"
        inputEmail.classList.add("is-invalid")
        smallEmail.innerHTML = "No puede estar vacio"
        inputContraseña.classList.add("is-invalid")
        smallContraseña.innerHTML = "No puede estar vacio"
        inputContraseña2.classList.add("is-invalid")
        smallContraseña2.innerHTML = "No puede estar vacio"

    }
    if( errores == true){
        console.log("No envio el form")
        event.preventDefault()
    }

})


}