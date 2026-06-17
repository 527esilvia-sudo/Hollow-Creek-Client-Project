/* ============================
   GLOBAL ELEMENTS
============================ */
const cardContainer = document.getElementById("row-items");
const seasonalTrack = document.getElementById("seasonalTrack");
const cart = {};

/* ============================
   UTIL
============================ */
function makeId(name) {
    return (name || "")
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "");
}

/* ============================
   SPLASH SCREEN
============================ */
window.addEventListener("load", () => {
    const splash = document.getElementById("splashScreen");

    if (splash) {
        setTimeout(() => {
            splash.classList.add("fade-out");
        }, 2000);
    }

    updateCartIconBadge();

    /* Event booking autofill */
    const bookedEvent = sessionStorage.getItem("bookedEvent");

    if (bookedEvent) {
        const input = document.getElementById("eventName");

        if (input) {
            input.value = bookedEvent;
        }

        sessionStorage.removeItem("bookedEvent");
    }
});

/* ============================
   STORE PAGE CARDS
============================ */
if (cardContainer && typeof storeItems !== "undefined") {

    storeItems.forEach(item => {

        cardContainer.innerHTML += `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">

            <div class="card h-100 position-relative overflow-hidden">

                <i class="bi bi-cart-plus add-cart"
                   data-item="${item.item}"></i>

                <div class="cart-badge"
                     id="badge-${makeId(item.item)}">0</div>

                <img
                    class="card-img-top modal-card"
                    src="${item.img}"
                    alt="${item.item}"
                    data-title="${item.item}"
                    data-item="${item.item}"
                    data-page="store"
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
   SEASONAL FAVORITES
============================ */
if (seasonalTrack && typeof storeItems !== "undefined") {

    const featuredItems = storeItems.slice(0, 8);

    const doubled = [...featuredItems, ...featuredItems];

    doubled.forEach(item => {

        seasonalTrack.innerHTML += `
        <div class="seasonal-card">

            <div class="card">

                <img
                    src="${item.img}"
                    alt="${item.item}"
                    class="modal-card"
                    data-title="${item.item}"
                    data-item="${item.item}"
                    data-page="store"
                    data-description="
                        <p><strong>Price:</strong> ${item.price}</p>
                        <p>${item.note}</p>
                        <p>${item.description}</p>
                    "
                >

                <div class="card-overlay">
                    <h5>${item.item}</h5>
                </div>

            </div>

        </div>`;
    });
}

/* ============================
   CART SYSTEM
============================ */
function addToCart(name) {

    cart[name] = (cart[name] || 0) + 1;

    updateBadge(name);
    updateCartIconBadge();
}

function updateBadge(name) {

    const badge =
        document.getElementById(`badge-${makeId(name)}`);

    if (!badge) return;

    badge.textContent = cart[name];

    badge.classList.add("show");

    badge.classList.remove("pop");
    void badge.offsetWidth;
    badge.classList.add("pop");
}

function updateCartIconBadge() {

    const badge = document.getElementById("cart-badge");

    if (!badge) return;

    let total = 0;

    for (let item in cart) {
        total += cart[item];
    }

    badge.textContent = total;

    badge.classList.toggle(
        "d-none",
        total === 0
    );

    badge.classList.toggle(
        "d-inline-block",
        total > 0
    );
}

/* ============================
   MODAL
============================ */
function openModal(title, body, pageType = "store", name = "") {

    const modalTitle =
        document.getElementById("modalTitle");

    const modalBody =
        document.getElementById("modalBody");

    if (!modalTitle || !modalBody) return;

    modalTitle.innerHTML = title;

    let buttonHTML = "";

    if (pageType === "about") {

        buttonHTML = `
            <button
                class="btn btn-danger mt-3"
                data-bs-dismiss="modal">
                Close
            </button>`;
    }

    else if (pageType === "event") {

        buttonHTML = `
            <button
                class="btn btn-success mt-3"
                onclick="bookEvent('${name}')">
                Book Event
            </button>`;
    }

    else {

        buttonHTML = `
            <button
                class="btn btn-success mt-3"
                onclick="addToCart('${name}')">
                Add to Cart
            </button>`;
    }

    modalBody.innerHTML = `
        ${body}
        ${buttonHTML}
    `;

    new bootstrap.Modal(
        document.getElementById("genericModal")
    ).show();
}

/* ============================
   CARD CLICK HANDLER
============================ */
document.addEventListener("click", (e) => {

    const card =
        e.target.closest(".modal-card");

    if (!card) return;

    openModal(
        card.dataset.title || "Item",
        card.dataset.description || "",
        card.dataset.page || "store",
        card.dataset.item || card.dataset.title
    );
});

/* ============================
   QUICK ADD CART ICON
============================ */
document.addEventListener("click", (e) => {

    const cartBtn =
        e.target.closest(".add-cart");

    if (!cartBtn) return;

    addToCart(cartBtn.dataset.item);
});

/* ============================
   CART MODAL
============================ */
const cartIcon =
    document.getElementById("cart-icon");

if (cartIcon) {

    cartIcon.addEventListener("click", () => {

        let output = "";

        for (let item in cart) {

            output += `
            <p>
                <strong>${item}</strong>
                × ${cart[item]}
            </p>`;
        }

        const contents =
            document.getElementById("cartContents");

        if (contents) {
            contents.innerHTML =
                output || "<p>Your cart is empty.</p>";
        }

        new bootstrap.Modal(
            document.getElementById("cartModal")
        ).show();
    });
}

/* ============================
   BOOK EVENT
============================ */
function bookEvent(name) {

    sessionStorage.setItem(
        "bookedEvent",
        name
    );

    window.location.href =
        "contact.html#event-booking";
}

/* ============================
   FARM MAP HOTSPOTS
============================ */
const hotspots =
    document.querySelectorAll(".hotspot");

/* Tooltip */
hotspots.forEach(h => {

    h.addEventListener("mouseenter", () => {

        if (h.querySelector(".tooltip")) return;

        const tip =
            document.createElement("div");

        tip.className = "tooltip";
        tip.textContent =
            h.dataset.info || "";

        h.appendChild(tip);
    });

    h.addEventListener("mouseleave", () => {

        const tip =
            h.querySelector(".tooltip");

        if (tip) tip.remove();
    });
});

/* Click hotspot → modal */
hotspots.forEach(h => {
    h.addEventListener("click", () => {

        const title = h.dataset.title || "Farm Area";
        const info = h.dataset.info || "";
        const img = h.dataset.img || "";

        openModal(
            title,
            `
            ${img ? `<img src="${img}" class="img-fluid rounded mb-3">` : ""}
            <p>${info}</p>
            `,
            "about",
            title
        );
    });
});