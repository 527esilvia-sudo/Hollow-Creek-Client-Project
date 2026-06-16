/* ============================
   SPLASH SCREEN
============================ */
const card = document.getElementById("row-items");
const cart = {};

window.addEventListener("load", () => {
    const splash = document.getElementById("splashScreen");

    if (splash) {
        setTimeout(() => {
            splash.classList.add("fade-out");
        }, 2000);
    }
});

/* ============================
   STORE ITEM CARDS
============================ */
if (card) {
    storeItems.forEach(item => {
        card.innerHTML += `
<div class="col-12 col-sm-10 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center">
    <div class="card h-100 position-relative overflow-hidden">

        <i
            class="bi bi-cart-plus add-cart"
            data-item="${item.item}">
        </i>

        <img
            class="card-img-top modal-card"
            src="${item.img}"
            alt="${item.item}"
            data-item="${item.item}"
            data-title="${item.item}"
            data-description="
                <p><strong>Price:</strong> ${item.price}</p>
                <p>${item.note}</p>
                <p>${item.description}</p>
            "
        >

        <div class="card-overlay">
            <h4>${item.item}</h4>
        </div>

    </div>
</div>`;
    });
}

/* ============================
   CART FUNCTIONS
============================ */
function addToCart(itemName) {
    cart[itemName] = (cart[itemName] || 0) + 1;

    console.log(cart);
}

/* ============================
   MODAL HANDLER
============================ */
function openModal(title, body, itemName) {
    document.getElementById("modalTitle").innerHTML = title;

    document.getElementById("modalBody").innerHTML = `
        ${body}

        <button
            class="btn btn-success mt-3"
            onclick="addToCart('${itemName}')">
            Add to Cart
        </button>
    `;

    const modal = new bootstrap.Modal(
        document.getElementById("genericModal")
    );

    modal.show();
}

/* ============================
   STORE EVENTS
============================ */
document.addEventListener("click", (e) => {

    /* Cart Icon On Product */
    const cartBtn = e.target.closest(".add-cart");

    if (cartBtn) {
        addToCart(cartBtn.dataset.item);
        return;
    }

    /* Product Image */
    const product = e.target.closest(".modal-card");

    if (product) {
        openModal(
            product.dataset.title,
            product.dataset.description,
            product.dataset.item
        );
    }
});

/* ============================
   VIEW CART
============================ */
const cartIcon = document.getElementById("cart-icon");

if (cartIcon) {
    cartIcon.addEventListener("click", () => {

        let output = "";

        for (const item in cart) {
            output += `
                <p>
                    <strong>${item}</strong> × ${cart[item]}
                </p>
            `;
        }

        if (!output) {
            output = "<p>Your cart is empty.</p>";
        }

        document.getElementById("cartContents").innerHTML = output;

        const modal = new bootstrap.Modal(
            document.getElementById("cartModal")
        );

        modal.show();
    });
}