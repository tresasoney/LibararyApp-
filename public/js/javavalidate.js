let email = document.getElementById('email');
let error = document.getElementById('error');
let pwd = document.getElementById('pwd');






function  validate() {
    // let message[];
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    //  let validate=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

let validate=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d].{8,}$/

    
if(regexp.test(email.value)&&validate.test(pwd.value)){
 error.innerHTML="valid";
     error.style.color="green";

    //   message.push("must contain @,number,com ");
    //    document.getElementById("erroremail")="hai"
// alert("haii");
    return true;
}
else if(email.value=="admin"&&pwd.value=="12345"){
    error.innerHTML="Valid";
    error.style.color="green";
    return true;

}
else{
     error.innerHTML="invalid";
     error.style.color="red";
    // alert("heke9");
    return false;
}
}

function passwordChanged() {
    var strength = document.getElementById('strength');
    var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    var enoughRegex = new RegExp("(?=.{6,}).*", "g");
    var pwd = document.getElementById("pwd");
    if (pwd.value.length == 0) {
        strength.innerHTML = 'Type Password';
    } else if (false == enoughRegex.test(pwd.value)) {
        strength.innerHTML = 'More Characters';
    } else if (strongRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:green">Strong!</span>';
    } else if (mediumRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:orange">Medium!</span>';
    } else {
        strength.innerHTML = '<span style="color:red">Weak!</span>';
    }
}