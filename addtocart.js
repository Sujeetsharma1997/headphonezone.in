let productPreLS=[
    {name:"SONY - WF-C500",brand:"SONY",category:"Truly Wireless Earbuds With IPX4 Rating",price:4990,MRP:8990,image_url:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1605329044/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/8967279411230.png/mxw_1440,f_auto",
    short_url1:"https://www.sony.co.in/image/d7b7a583061ec800dfa74bea7bc37941?fmt=pjpeg&wid=660&bgcolor=F1F5F9&bgc=F1F5F9",
    short_url2:"https://i.insider.com/5d1bccf8a17d6c3b2b5aa10d?width=1136&format=jpeg",
    short_url3:"https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Sony-WF-C500-Black-3_600x.jpg?v=1642057995"}
]
let p = JSON.parse(localStorage.getItem("cart")) || [];
  displayProduct(productPreLS);

  function displayProduct(data) {
    data.map(function (elem, index) {
     
      document.querySelector("#smlmdl").innerHTML =p.brand;
     
      document.querySelector(".b").innerHTML = p.brand;
      
      document.querySelector(".n").innerHTML = p.info
      document.querySelector(".c").innerHTML = p.category;
      document.querySelector(".a").src = p.image;
      document.querySelector(".pr").innerHTML = "₹" + p.price;
      document.querySelector(".stpr").innerHTML ="₹ MRP" + elem.MRP;
      document.querySelector(".d").src = elem.short_url1;
      document.querySelector(".e").src = elem.short_url3;
      document.querySelector(".f").src = elem.short_url2;
      document.querySelector(".g").src = elem.short_url1;
      document.querySelector(".h").src = elem.short_url3;
      document.querySelector(".smlico").src = elem.image_url;
     
    });
  }
  document.querySelector("button").addEventListener("click", cartPage);
  function cartPage() {
    let arr=[]
    arr.push(p)
    localStorage.setItem("cart_data", JSON.stringify(arr));
    window.location.href = "cart.html";
  }