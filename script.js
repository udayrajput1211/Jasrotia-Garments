function orderProduct(product){

document.getElementById("productName").value = product;

document.getElementById("checkout").scrollIntoView({
behavior:"smooth"
})

}


function goToPayment(){

let name=document.getElementById("name").value

let product=document.getElementById("productName").value

document.getElementById("finalName").value=name

document.getElementById("finalProduct").value=product

document.getElementById("payment").style.display="block"

document.getElementById("payment").scrollIntoView({
behavior:"smooth"
})

}
