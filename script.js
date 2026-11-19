// Cart items stored as an array of objects
let cartItems = [
    { name: "Notebook", price: 120, qty: 1 },
    { name: "Pen Pack", price: 50, qty: 1 },
    { name: "Water Bottle", price: 350, qty: 1 }
];

function displayCart() {
    const cart = document.getElementById("cart-items");
    cart.innerHTML = "";

    let subtotal = 0;

    for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        const itemTotal = item.price * item.qty;
        subtotal += itemTotal;

        cart.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>Rs. ${item.price}</td>
                <td>
                    <div class="quantity-controls">
                        <button type="button" onclick="changeQty(${i}, -1)" aria-label="Decrease ${item.name} quantity">−</button>
                        <span class="quantity">${item.qty}</span>
                        <button type="button" onclick="changeQty(${i}, 1)" aria-label="Increase ${item.name} quantity">+</button>
                    </div>
                </td>
                <td>Rs. ${itemTotal}</td>
                <td>
                    <button type="button" class="remove-button" onclick="removeItem(${i})">Remove</button>
                </td>
            </tr>
        `;
    }

    const discount = subtotal >= 1000 ? subtotal * 0.10 : 0;
    const finalAmount = subtotal - discount;

    document.getElementById("subtotal").innerText = subtotal;
    document.getElementById("discount").innerText = discount;
    document.getElementById("final-amount").innerText = finalAmount;

    if (cartItems.length === 0) {
        cart.innerHTML = `
            <tr>
                <td colspan="5" class="empty-cart">Your cart is empty</td>
            </tr>
        `;
    }
}

function changeQty(index, change) {
    if (cartItems[index].qty + change >= 1) {
        cartItems[index].qty += change;
        displayCart();
    }
}

function removeItem(index) {
    cartItems.splice(index, 1);
    displayCart();
}

displayCart();
