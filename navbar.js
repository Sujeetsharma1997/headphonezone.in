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

localStorage.clear()

function setitem1(){
    localStorage.clear()
    localStorage.setItem("category","earphone")
   window.location.href="product.html";
}
function setitem2(){
    localStorage.clear()
    localStorage.setItem("category","headphone")
    window.location.href="product.html";}
function setitem3(){
    localStorage.clear()
    localStorage.setItem("brand","1costom")
    window.location.href="product.html";}
function setitem4(){
    localStorage.clear()
    localStorage.setItem("brand","Bowers&Wilkins")
    window.location.href="product.html";}
