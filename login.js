function signIn(e){
    e.preventDefault()

    let userDataArr=JSON.parse(localStorage.getItem("UserData"))||[]
    let form=document.getElementById("form")
    let em=form.email.value;
    let p=form.pass.value;
    if(p=="" && em==""){
        alert("Firstly Fill Your All Informetion")
    }
    else{
        let count=0;
        userDataArr.forEach( function(el,i) {
        if(el.email==em && el.pass==p){
            count=i
            }
        
        });
        if( userDataArr[count].email==em && userDataArr[count].pass==p){
            let UserName=userDataArr[count].name
            localStorage.setItem("UserName",UserName)
            console.log(UserName)
            alert("LogIN Successful")
            window.location.href="index.html"
        }
        else if( userDataArr[count].email != em || userDataArr[count].pass != p){
            alert("Fill All Informetion Correctly")
        }
       
    }
   
}