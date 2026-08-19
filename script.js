let cart = [];


function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    localStorage.setItem("vegFoodCart", JSON.stringify(cart));

    alert(name + " added to cart 🛒");

}


function sendMessage(event) {

    event.preventDefault();

    alert("Thank you! Your message has been sent successfully ❤️");

    event.target.reset();

}


function placeOrder(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    const phone = document.getElementById("phone").value;

    const food = document.getElementById("food").value;

    const quantity = document.getElementById("quantity").value;

    alert(
        "Order Placed Successfully! 🎉\n\n" +
        "Customer: " + name + "\n" +
        "Food: " + food + "\n" +
        "Quantity: " + quantity + "\n" +
        "Phone: " + phone
    );

    event.target.reset();

}