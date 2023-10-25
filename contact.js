//Attach a change event to the Firstname and Lastname and Phone number and Email cotrolars.
//when the position of curser change it will do the function that attech to controlar.
var firstname = document.getElementById('firstname');
firstname.addEventListener("change",check_name,false);

var lastusername = document.getElementById('lastusername');
lastusername.addEventListener("change",check_name,false);

var PhoneNumber = document.getElementById('PhoneNumber');
PhoneNumber.addEventListener("change",check_pnumber,false);

var email = document.getElementById('email');
email.addEventListener("change",check_email,false);

//check function that check first name and last name
function check_name(event){
    
    var name = event.currentTarget;
    var pos = name.value.search(/^[A-Za-z]+$/);
    console.log(pos);
    if(pos !=0){
        alert("please Enter a correct name; beacuse this name "+name.value+"\n have some charcter that is not alphapt charecter,");
        name.value = "";
    }
}

//validate the phone number
function check_pnumber(event){
    var phone  =event.currentTarget;
    var pos = phone.value.search(/^[0-9]{8}/)
    if(pos!=0){
        alert("please enter good number");
        phone.value ="";
    }
}

//validate the email
//the user must be enter his email like this "aaaaaaa@aaaa.aaa"
function check_email(event){
    var email = event.currentTarget;
    var pos = email.value.search(/\S+@\S+\.\S/);
    if(pos!=0){
        alert("111");
        email.value="";
    }
    else{
        alert("222");
    }
}



