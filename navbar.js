let count=1
function logoSlider(){
    setInterval(function(){
        if(count==4){
            count=1
        }
       let imgDiv=document.getElementById("image")
       imgDiv.innerHTML=null
       let img=document.createElement("img");
       img.src=`./images/55${count}.png`
       imgDiv.append(img)
       count++
    },1000)
}
logoSlider()

// localStorage.clear()

let x=localStorage.getItem("quant");
console.log(x)
if(x!==null)document.getElementById("q").innerText=x

function setitem1(){
    localStorage.removeItem("brand");
    localStorage.setItem("category","earphone")
   window.location.href="product.html";
}
function setitem2(){
 
    localStorage.removeItem("brand");
    localStorage.setItem("category","headphone")
    window.location.href="product.html";}
function setitem3(){
  
    localStorage.removeItem("category");
    localStorage.setItem("brand","1costom")
    window.location.href="product.html";}
function setitem4(){
    localStorage.removeItem("category");

    localStorage.setItem("brand","Bowers&Wilkins")
    window.location.href="product.html";}

    document.getElementById("barnd_header").addEventListener("click",function(){
        window.location.href="index.html"
    })
    function login(){
        console.log("gvggv")
        window.location.href="login.html"
    }