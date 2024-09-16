function signin(){
    alert(`To signin this app first click the button below to fill the requirment!`);
    }
    
    
    function getGreeting(){
        var username=prompt('Enter your name');
        var age=+prompt('Enter your Age');
        if (age>=18){
            document.getElementById('greeting').innerHTML=
           ` Welcome ${username}!You are eligible to participate!`;
        }
             else if (age<18){
                document.getElementById('greeting').innerHTML=
                `Sorry ${username}!You are too young to join!`;
            }
        
            else{
                document.getElementById('greeting').innerHTML=
                `Sorry! Enter again!`;   
    }
    
    }