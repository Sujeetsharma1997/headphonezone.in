function saveData(e){
    e.preventDefault()
    let userDataArr=JSON.parse(localStorage.getItem("UserData"))||[]
    let form=document.getElementById("form")
    let name=form.name.value;
    let email=form.email.value;
    let password=form.pass.value;
    
    var userData= new UserDataObj(name,email,password)
    let flag=false
    userDataArr.forEach(el => {
      if(el.email==email){
        flag=true
      }
    });
    if(flag==true){
      alert("user already exist !")
    }
    else{
      alert("signup successfully !")
      userDataArr.push(userData)
      localStorage.setItem("UserData",JSON.stringify(userDataArr))
    }
}  
function  UserDataObj(n,e,p){
  this.name=n;
  this.pass=p;
  this.email=e;
}