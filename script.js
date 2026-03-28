let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* ADD */
function addToCart(name, price){
let item = cart.find(p => p.name === name);

if(item){
item.qty += 1;
}else{
cart.push({name, price, qty:1});
}

localStorage.setItem("cart", JSON.stringify(cart));
alert("Added to cart");
}

/* SHOW CART */
function showCart(){
let div = document.getElementById("cartItems");
let total = 0;
div.innerHTML = "";

cart.forEach((item,i)=>{
div.innerHTML += `
<p>
${item.name} (x${item.qty}) - ₹${item.price * item.qty}
<button onclick="removeItem(${i})">❌</button>
</p>
`;
total += item.price * item.qty;
});

document.getElementById("total").innerText = "Total ₹" + total;
}

/* REMOVE */
function removeItem(i){
cart.splice(i,1);
localStorage.setItem("cart", JSON.stringify(cart));
showCart();
}

/* FILTER */
function filter(cat){
let items = document.querySelectorAll(".card");

items.forEach(item=>{
if(cat === "all" || item.classList.contains(cat)){
item.style.display = "block";
}else{
item.style.display = "none";
}
});
}

/* WHATSAPP ORDER */
function orderWhatsApp(){
let text = "Order Details:%0A";

cart.forEach(item=>{
text += item.name + " x" + item.qty + "%0A";
});

window.open("https://wa.me/919876543210?text=" + text);
}

/* ORDERS */
function showOrders(){
let orders = JSON.parse(localStorage.getItem("orders")) || [];
let div = document.getElementById("orders");

orders.forEach((o,i)=>{
div.innerHTML += "<h3>Order "+(i+1)+"</h3>";
});
}
