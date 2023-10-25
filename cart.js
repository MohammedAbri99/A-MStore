let carts = document.querySelectorAll('.add-cart'); //this for anchors when we click to add to cart.
localStorage.setItem("DiscountCode",0);

//array of all product that we hav it in store page
let products = [
    {
        name: 'paint',
        code: '001',
        price:1.0,
        inCart:0
    },
    {
        name: 'JOTUN piant L',
        code: '002',
        price:1.5,
        inCart:0
    },
    {
        name: 'JOTUN piant S',
        code: '003',
        price:2.0,
        inCart:0
    },
    {
        name: 'reinforcement',
        code: '004',
        price:2.5,
        inCart:0
    },
    {
        name: 'secrum driver',
        code: '005',
        price:3.0,
        inCart:0
    },
    {
        name: 'Wood-piece',
        code: '006',
        price:3.5,
        inCart:0
    },
    {
        name: 'Wood-package',
        code: '007',
        price:4.0,
        inCart:0
    },
    {
        name: 'ceramic-a',
        code: '008',
        price:4.5,
        inCart:0
    },
    {
        name: 'ceramic-b',
        code: '009',
        price:5.0,
        inCart:0
    },
    {
        name: 'ceramic-c',
        code: '010',
        price:5.5,
        inCart:0
    },
    {
        name: 'ceramic-d',
        code: '011',
        price:6.0,
        inCart:0
    },
    {
        name: 'hummer',
        code: '016',
        price:6.5,
        inCart:0
    }
];
//array of codes that we have it in ouer website
let codess = [
    {
        cod: 'abc',
        discount_percintage: 0.05 // 5% 
    },
    {
        cod: 'cde',
        discount_percintage: 0.04 // 4% 
    },
    {
        cod: 'efg',
        discount_percintage: 0.02 // 2% 
    }
];

// since carts is an array have many contents we do loop to minpulate for each content
for(let i=0; i<carts.length ; i++){
    // when i click to putton i need to add it to cart
    carts[i].addEventListener('click', () => { 
        cartNumber(products[i]);
        totalPrice(products[i]);
    })
}

function cartNumber(product) {
    //to store the cart ; when we refresh page item will still in cart
    let productNumbers = localStorage.getItem('cartNumber');

    productNumbers = parseInt(productNumbers);

    //to check if ther is a product in cart or not
    if (productNumbers){
        localStorage.setItem('cartNumber',productNumbers+1);
    }
    else{
        localStorage.setItem('cartNumber',1);
    }
    setItems(product);
}

function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    //convert it from JSON object into javascript object.
    cartItems = JSON.parse(cartItems);

    if(cartItems != null){
        //if i click in aother product it will be undefined and I add new product for one hose clicked 
        if(cartItems[product.code] == undefined){
            cartItems = {
                ...cartItems,
                [product.code]: product
            }
        }
        cartItems[product.code].inCart +=1;
    }
    else{
        product.inCart =1;
        cartItems = {
            [product.code]: product
        }
    }
    //when user select item it will make as an object
    //and to put the object in localStorage it need to put ot in JSON object not javascript object .
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}
function totalPrice(product){
    //console.log("the clicked product price is:",product.price);

    let cartPrice = localStorage.getItem('totalPrice');
    console.log("my cartprice is", cartPrice);
    console.log(typeof cartPrice);

    if(cartPrice != null){ //that mean if ther is a product in cart
        cartPrice = parseFloat(cartPrice);
        localStorage.setItem("totalPrice",product.price + cartPrice);
    }
    else{
        //if there is no item in cart
        localStorage.setItem("totalPrice",product.price); //to save the price when we refresh page
    }
}
//this to diplay a product in cart page
function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    let totalPrice = localStorage.getItem("totalPrice");
    let shipping = localStorage.getItem("shipping");
    let Discountcode = localStorage.getItem("DiscountCode");
    //convert it from JSON object into javascript object.
    cartItems = JSON.parse(cartItems);

    
    let productContainer = document.querySelector(".bur-table");
    //this to check that the productContainer and cartitems is not null
    if (cartItems && productContainer){
        //this to put the cart is empty when load page
        productContainer.innerHTML = `
            <tr>
                <th>product</th>
                <th>price</th>
                <th>quantity</th>
                <th>Total</th>
                <th></th>
            </tr>
        `;
        
        //this to loop inner the object which is in lacalstorege
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
                    <tr>
                        <td>
                            <div class="bur-info">
                                <img src="./imge/${item.code}.jpg" width="100%" alt="" />
                                <p>${item.name}</p>
                            </div>
                        </td>
                        <td> 
                            ${item.price} RO
                        </td>
                        <td>
                            <input type="number" min="1" " value="${item.inCart}">
                        </td>
                        <td>
                            ${item.price * item.inCart} RO
                        </td>
                        <td>
                            <button data-name="${item.name}" class="delete-item">remove</button>
                        </td>
                    </tr>
                </table>
            </div>
            `;
        });
        //html code for bill 
        let bill = document.querySelector(".bill");
        bill.innerHTML=``;
        bill.innerHTML +=`
        
            <table >
                <tr style="background-color: lightslategray;">
                    <th>Bill</th>
                    <th></th>
                </tr>
                <tr>
                    <th>Total</th>
                    <td>${totalPrice} RO</td>
                </tr>
                <tr>
                    <th>Discount Code</th>
                    <td>
                        <input type="text" name="disc" id="discountCode"><br />
                        <button onclick="discount()">check</button>
                    </td>
                </tr>
                <tr>
                    <th>Total</th>
                    <td>${totalPrice - (totalPrice*Discountcode)} RO</td>
                </tr>
            </table>
            <a href="./payment.html">
                <div class="checkout">
                    buy now
                </div>
            </a>
        `;
    }
}
displayCart(); // to diplay a product when we refresh cart  immediatlly

//this a function for discount 
function discount(){
    let dicCode = document.getElementById("discountCode").value;
    for(let i=0 ; i<codess.length ; i++){
        if(codess[i].cod == dicCode){
            let parcantage = codess[i].discount_percintage;
            localStorage.setItem("DiscountCode",parcantage);
            alert("congratulations! \n You get a Discount");
        }
        else{
        }
    }
    displayCart();
}



//alert when client select item from store
function ATC(){
    alert("Successfully Added to cart");
}