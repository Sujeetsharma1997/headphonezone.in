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

let pHov=document.getElementById("box_hover1")
pHov.addEventListener("click", boxHover)
function boxHover(){
    console.log("hii")
}