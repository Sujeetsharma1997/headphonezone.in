let buttons = document.querySelector(".A1");
let imgNum = 0;
let imgArr = [
  "https://cdn.shopify.com/s/files/1/0153/8863/files/Chu_HomepageBanner_Desktop_1400x.jpg?v=1654925610",
  "https://cdn.shopify.com/s/files/1/0153/8863/files/Ananda_HomepageBanner_Desktop2_1400x.jpg?v=1654679048",
  "https://cdn.shopify.com/s/files/1/0153/8863/files/Kublai_Khan_HomepageBanner_Desktop_1400x.jpg?v=1654167888",
];
let img = document.querySelector(".img_-1");
buttons[0].addEventListener("click", function () {
  if (imgNum === 0) {
    imgNum = imgArr.length - 1;
  } else {
    imgNum--;
  }
  img.src = imgArr[imgNum];
});

buttons[1].addEventListener("click", function () {
  if (imgNum === 0) {
    imgNum = imgArr.length - 1;
  } else {
    imgNum--;
  }
  img.src = imgArr[imgNum];
});
buttons[2].addEventListener("click", function () {
  if (imgNum == imgArr.length - 1) {
    imgNum = 0;
  } else {
    imgNum++;
  }
  img.src = imgArr[imgNum];
});

function gotoProduct(){
  window.location.href="product_page.html"
}