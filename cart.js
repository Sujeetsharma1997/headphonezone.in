let data = JSON.parse(localStorage.getItem("cart_data")) || [];

for (a = 0; a < data.length; a++) {
  if (data[a].quantity == undefined) {
    data[a].quantity = 1;
  } else {
    data[a].quantity = data[a].quantity;
  }

  data[a].original_price = data[a].price;
}

function myfun(arr) {
  if (arr.length === 0) {
    document.getElementById("cart").innerHTML = null;
    document.getElementById("bottam").innerHTML = null;
    document.getElementById("checkout_btn").innerHTML = null;
    document.getElementById("totalquant").innerText = "cart";
    let p = document.createElement("h3");
    p.setAttribute("id", "empty_p");
    p.innerText = "your cart is empty";

    let butt = document.createElement("button");
    butt.setAttribute("id", "empty_btn");
    butt.innerText = "start shopping";
    butt.addEventListener("click", function () {
      window.location.href = "index.html";
    });
    let div = document.createElement("div");
    div.setAttribute("id", "empty_div");
    div.append(p, butt);
    document.getElementById("cart").append(div);
  } else {
    document.getElementById("cart").innerHTML = null;
    document.getElementById("totalquant").innerText =
      totalquant(arr) + " " + "items";
    document.getElementById("check_tab").innerText =
      "checkout . ₹" + sumall(arr);
    arr.forEach(function (el, index) {
      let div = document.createElement("div");
      let img = document.createElement("img");
      img.src = el.image;
      let childiv = document.createElement("div");
      let title = document.createElement("h3");
      title.innerText = el.title;
      let price = document.createElement("span");
      price.innerText = "₹" + " " + el.price;

      let quant = document.createElement("div");
      let plus = document.createElement("span");
      plus.innerText = "+";
      // plus.setAttribute("class", "val");
      plus.addEventListener("click", function () {
        add(index);
      });

      let value = document.createElement("span");
      value.setAttribute("id", "quant");
      value.innerText = el.quantity;

      let minus = document.createElement("span");
      minus.innerText = "-";
      minus.addEventListener("click", function () {
        subtract(index);
      });
      title.append(price);
      quant.append(plus, value, minus);
      childiv.append(title, quant);
      div.append(img, childiv);
      document.getElementById("cart").append(div);
    });
  }
}
myfun(data);

// function to increase cart quantity
function add(index) {
  console.log(index);
  data[index].quantity++;
  data[index].price = data[index].price + data[index].original_price;
  localStorage.setItem("cart_data", JSON.stringify(data));
  myfun(data);
  // window.location.reload();
}
// function to decrease cart quantity
function subtract(index) {
  if (data[index].quantity === 1) {
    data.splice(index, 1);
    localStorage.setItem("cart_data", JSON.stringify(data));
    myfun(data);
  } else {
    console.log(index);
    data[index].quantity--;
    data[index].price = data[index].price - data[index].original_price;
    localStorage.setItem("cart_data", JSON.stringify(data));
    myfun(data);
    // window.location.reload();
  }
}
// total quantity at top showing n items
function totalquant(arr) {
  let x = arr.reduce(function (acc, el) {
    return acc + el.quantity;
  }, 0);
  return x;
}
// sum of cart showing on checkout button
function sumall(arr) {
  let x = arr.reduce(function (acc, el) {
    return acc + el.price;
  }, 0);
  return x;
}
// checkout button eventlistener
document.getElementById("check_tab").addEventListener("click", function () {
  window.location.href = "checkout.html";
});