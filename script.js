/* ============================
   GLOBAL STATE
============================ */
const card = document.getElementById("row-items");
const seasonalTrack = document.getElementById("seasonalTrack");
const cart = {};

/* ============================
   SPLASH SCREEN
============================ */
window.addEventListener("load", () => {
    const splash = document.getElementById("splashScreen");

    if (splash) {
        setTimeout(() => splash.classList.add("fade-out"), 2000);
    }

    updateCartIconBadge();
});

/* ============================
   UTIL
============================ */
function makeId(name) {
    return (name || "").toLowerCase().replace(/\s+/g, "-");
}

/* ============================
   STORE ITEM CARDS
============================ */
if (card && typeof storeItems !== "undefined") {
    storeItems.forEach(item => {
        card.innerHTML += `
<div class="col-12 col-sm-10 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center">
    <div class="card h-100 position-relative overflow-hidden">

        <i class="bi bi-cart-plus add-cart"
           data-item="${item.item}"></i>

        <div class="cart-badge" id="badge-${makeId(item.item)}">0</div>

        <img class="card-img-top modal-card"
            src="${item.img}"
            alt="${item.item}"
            data-item="${item.item}"
            data-title="${item.item}"
            data-description="
                <p><strong>Price:</strong> ${item.price}</p>
                <p>${item.note}</p>
                <p>${item.description}</p>
            ">

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
    updateBadge(itemName);
    updateCartIconBadge();
}

function updateCartIconBadge() {
    const cartBadge = document.getElementById("cart-badge");
    if (!cartBadge) return;

    let total = 0;
    for (const item in cart) total += cart[item];

    cartBadge.textContent = total;
    cartBadge.classList.toggle("d-none", total === 0);
    cartBadge.classList.toggle("d-inline-block", total > 0);
}

function updateBadge(itemName) {
    const badge = document.getElementById(`badge-${makeId(itemName)}`);
    if (!badge) return;

    const count = cart[itemName];

    badge.textContent = count;
    badge.classList.add("show");

    badge.classList.remove("pop");
    void badge.offsetWidth;
    badge.classList.add("pop");
}

/* ============================
   MODAL HANDLER
============================ */
function openModal(title, body, itemName, itemType, item) {
    document.getElementById("modalTitle").innerHTML = title || "Details";

    const isEvent = itemType === "event";

    const available =
        item && item.startMonth ? isEventAvailable(item) : true;

    const actionLabel = isEvent ? "Book Event" : "Add to Cart";

    let buttonHTML = "";

    if (isEvent) {
        buttonHTML = available
            ? `<button class="btn btn-success mt-3"
                    onclick="bookEvent('${itemName}')">
                    ${actionLabel}
               </button>`
            : `<button class="btn btn-secondary mt-3" disabled>
                    Coming Soon
               </button>`;
    } else {
        buttonHTML = `
            <button class="btn btn-success mt-3"
                onclick="addToCart('${itemName}')">
                ${actionLabel}
            </button>`;
    }

   document.getElementById("modalBody").innerHTML = `
    ${body || ""}
    ${buttonHTML}
`;

    new bootstrap.Modal(document.getElementById("genericModal")).show();
}

/* ============================
   AI FIX: MODAL DATA SAFETY LAYER
   Purpose: Prevent undefined modal content when cards lack dataset fields
============================ */
document.addEventListener("click", (e) => {
    const product = e.target.closest(".modal-card");

    if (!product) return;

    const itemName =
        product.dataset.item ||
        product.dataset.title ||
        product.querySelector("h3, h4, .card-title")?.innerText ||
        "Item";

    const itemType = product.dataset.type || "product";

    let itemObj = null;

    /* AI PURPOSE:
       Some cards (seasonal/staff/family) are not in event arrays.
       This prevents null lookup crashes and keeps modal stable.
    */
    if (itemType === "event" && typeof springEvents !== "undefined") {
        const allEvents = [
            ...springEvents,
            ...summerEvents,
            ...fallEvents,
            ...winterEvents
        ];

        itemObj = allEvents.find(e =>
            (e.item || "").trim() === (itemName || "").trim()
        );
    }
const title =
    product.dataset.title ||
    product.querySelector("h3, h4, .card-title")?.innerText ||
    itemName ||
    "Item";

const description =
    product.dataset.description ||
    product.querySelector("p")?.innerHTML ||
    "";

openModal(
    title,
    description,
    itemName,
    itemType,
    itemObj
);
});

/* ============================
   CART CLICK
============================ */
document.addEventListener("click", (e) => {
    const cartBtn = e.target.closest(".add-cart");
    if (!cartBtn) return;

    addToCart(cartBtn.dataset.item);
});

/* ============================
   CART MODAL
============================ */
const cartIcon = document.getElementById("cart-icon");

if (cartIcon) {
    cartIcon.addEventListener("click", () => {
        let output = "";

        for (const item in cart) {
            output += `<p><strong>${item}</strong> × ${cart[item]}</p>`;
        }

        document.getElementById("cartContents").innerHTML =
            output || "<p>Your cart is empty.</p>";

        new bootstrap.Modal(document.getElementById("cartModal")).show();
    });
}

/* ============================
   EVENT AVAILABILITY
============================ */
function isEventAvailable(item) {
    if (!item) return true;
    if (!item.startMonth || !item.endMonth) return true;

    const today = new Date();
    const m = today.getMonth() + 1;
    const d = today.getDate();

    if (item.startMonth > item.endMonth) {
        return (
            (m === item.startMonth && d >= item.startDay) ||
            m > item.startMonth ||
            (m === item.endMonth && d <= item.endDay) ||
            m < item.endMonth
        );
    }

    return (
        !(m < item.startMonth ||
        m > item.endMonth ||
        (m === item.startMonth && d < item.startDay) ||
        (m === item.endMonth && d > item.endDay))
    );
}

/* ============================
   SEASONAL PREVIEW (UNCHANGED LOGIC)
============================ */
function createCard(item) {
    const wrapper = document.createElement("div");
    wrapper.className = "seasonal-card";

    wrapper.innerHTML = `
        <div class="card h-100 shadow-sm modal-card">
            <img src="${item.img}" alt="${item.item}" class="card-img-top">
            <div class="card-body text-center">
                <h5 class="card-title mb-0">${item.item}</h5>
            </div>
        </div>
    `;
    return wrapper;
}

function loadSeasonalPreview(items) {
    const seasonalItems = items.slice(0, 8);
    seasonalTrack.innerHTML = "";

    seasonalItems.forEach(i => seasonalTrack.appendChild(createCard(i)));
    seasonalItems.forEach(i => seasonalTrack.appendChild(createCard(i)));
}

if (seasonalTrack && typeof storeItems !== "undefined") {
    loadSeasonalPreview(storeItems);
}

/* ============================
   SEASON ICON
============================ */
function setSeasonIcon() {
    const icon = document.getElementById("seasonIcon");
    if (!icon) return;

    const m = new Date().getMonth() + 1;

    if (m === 12 || m <= 2) icon.textContent = "❄️";
    else if (m <= 5) icon.textContent = "🌸";
    else if (m <= 8) icon.textContent = "☀️";
    else icon.textContent = "🍂";
}

setSeasonIcon();

const genericModalEl = document.getElementById("genericModal");

if (genericModalEl) {
    genericModalEl.addEventListener("hide.bs.modal", () => {
        if (document.activeElement) {
            document.activeElement.blur();
        }
    });
}