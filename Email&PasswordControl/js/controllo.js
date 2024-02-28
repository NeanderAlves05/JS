
function controllo(){
    var email=document.getElementById('email').value;
    email=email.trim();
    if(email.length !=0 && !email.includes('@')){
        let index1= email.indexOf('@');
        let emailParts=email.split('@');
        if(emailParts[0].length >=1){
            let domain=emailParts[1].split('.');
            if(domain[0].length >=1){
                let afterDomain=domain[1];
                if(afterDomain.length >= 2){
                    document.getElementById('emailError').innerHTML = 'CORRECT';
                    console.log("EMAIL CORRECT");
                }else{
                    document.getElementById('emailError').innerHTML = 'DOMAIN NOT RIGHT'    
                }
            }else{
                document.getElementById('emailError').innerHTML = 'PREFIX DOMAIN NOT RIGHT';
            }
        }else{
            document.getElementById('emailError').innerHTML = 'LOCAL_PART NOT RIGHT';
        }
    }else{
        document.getElementById('emailError').innerHTML = 'EMPTY FIELD'
    }
    var password = document.getElementById('password').value;
    password=password.trim();
    if(password.length !=0){
        if(password.length >= 6){    
            // Controlli per la password con test che testa se trova corrispondenze nella stringa 
            var hasUpperCase = /[A-Z]/.test(password);
            var hasNumber = /\d/.test(password);
            var hasSpecialChar = /[.,;:-_^*<>£§@$!%*#?&]/.test(password);

            if (hasUpperCase && hasNumber && hasSpecialChar) {
                document.getElementById('passError').innerHTML = 'CORRECT';
                console.log("PASSWORD CORRECT");
            } else {
                var errorMessage = 'PASSWORD MUST INCLUDE ';
                if (!hasUpperCase) errorMessage += 'ONE UPPERCASE LETTER, ';
                if (!hasNumber) errorMessage += 'ONE NUMBER, ';
                if (!hasSpecialChar) errorMessage += 'AND ONE SPECIAL CHARACTER, ';
                // Rimuove l'ultima virgola e spazio
                errorMessage = errorMessage.slice(0, -2);
                document.getElementById('passError').innerHTML = errorMessage;
            }
        }else{
            document.getElementById('passError').innerHTML = 'PASSWORD TOO SHORT';
        }
    }else{
        document.getElementById('passError').innerHTML = 'EMPTY FIELD';
    }
}

