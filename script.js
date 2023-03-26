const submitbtn=document.querySelector(".button")
submitbtn.onclick=()=>{
    const fname=document.getElementById("fname").value;
    const lname=document.getElementById("lname").value;
    const email=document.getElementById("email").value;
    const pass=document.getElementById("pass").value;
    const cpass=document.getElementById("cpass").value;


localStorage.setItem("FirstName", fname);
localStorage.setItem("LastName", lname);
localStorage.setItem("emailId", email);
localStorage.setItem("password", pass);
localStorage.setItem("Cpassword", cpass);

if(fname == "" && lname=="" && email=="" && pass == "" && cpass ==""){
    alert("Input fiels is empty")
}
else{
    if(pass!==cpass){
        alert("password not matched");        
    }else{
        alert("registration completed successfully")
    }
}

}
