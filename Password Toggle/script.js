    let eye = document.getElementById("eyeicon");
    let pass = document.getElementById("password");

    eye.onclick = function(){
        if(pass.type == "password"){
            pass.type = "text";
            eye.src = "eye-open.png";
        }
        else{
            pass.type = "password";
            eye.src = "eye-close.png";
        }
    }