function clear(name){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems.clear();
    cartItems = JSON.parse(cartItems);
    console.log(cartItems.name);
    
}

function remove(){
    //var name = $(this).attr("data-name"); 
    var name = document.getElementById('121212');
    var name = name.getAttribute('data-name');
    clear(name);
    displayCart();
}
function removeItem(productContainer) {
    // Removes an element from the document.
    var element = document. getElementById(productContainer);
    element.parentNode.removeChild(item.price);
}
let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null){
        //if i click in aother product it will be undefined and I add new product for one hose clicked 
        if(cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart +=1;
    }
    else{
        product.inCart =1;
        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
    cartite.forEach(item => {
        console.log(item[products.tag]);
        if(element.name != event.target.parentElement.parentElement.children[0].children[0].children[1].textContent){
            products.push(item);
        }
        localStorage.setItem("productsInCart", JSON.stringify(products));
        window.location.reload();
    });
    
const removeItem = document.getElementsByClassName('delete-item');

for(var i=0 ; i<removeItem.length ;i++){
    let removebtn = removeItem[i];
    removebtn.addEventListener('click',() =>{
        let cartite = JSON.parse(localStorage.getItem('productsInCart')); 
        console.log(event.target.parentElement.parentElement.children[0].children[0].children[1].textContent);
        for(item in cartite){
            console.log("f");
            console.log(item.name);
        }
    })
}
