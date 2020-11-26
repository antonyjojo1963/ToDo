let user = document.getElementById("user");
let pass = document.getElementById("pass");


// var obj = [
//     {
//         username:"sam",
//         password:78900
//     },
//     {
//         username:"admin",
//         password:12345
//     },
//     {
//         username:"anto",
//         password:"56789"
//     }
// ]



// function validate(){

//     for(i=0;i<obj.length; i++){
//         if(user==obj[i].username && pass== obj[i].password){
//             return true;
//         }
//         else{
//             alert("Wrong");
//             return false;
//         }
//     }

//     if(user.value==""){
//         alert("Enter Username");
//         return false;
//     }

//     else if(pass.value==""){
//         alert("Enter Password");
//             return false;
//         }

//     else if(pass.value.length<5){
//         alert("Password is too short");
//         return false;
//     }  
//     else{
//         console.log("You are loged In");
//         return true;
        
//     }



    // let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
 
    // if(regexp.test(email.value)){
 
    //     return true;
    // }
    // else{
    //     alert("Email is Invalid");
    //     return false;
    // }

    

// }

// function check(a,b,validate1){
// a = "admin";
// b = 12345;

// validate1();
//     }

// function validate1(){
    
//     if(user.value==a){
//         return true;
//     }
//     if(pass.value==b){
//         return true;
//     }
//     else{
//         alert("Username and Password not Recognised")
//         return false;
//     }
// }

// check(validate1);


function validate(){

    if(user.value=="admin" && pass.value==12345){
        return true;
    }
    else{
        alert("Username or Password not Valid")
        return false;
    }
}