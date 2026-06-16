/* ============================
   SPLASH SCREEN
============================ */
const card = document.getElementById('row-items');

window.addEventListener("load", () => {
    const splash = document.getElementById("splashScreen");
    setTimeout(() => {
        splash.classList.add("fade-out");
    }, 2000);
});

/* ============================
   STORE ITEM CARDS
============================ */
if (card) {
    storeItems.forEach(item => {
      card.innerHTML += `
<div class="col-12 col-sm-10 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center">
    <div class="card h-100 position-relative overflow-hidden">

        <img
            class="card-img-top modal-card"
            src="${item.img}"
            alt="${item.item}"
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
   MODAL HANDLER
============================ */
function openModal(title, body) {
    document.getElementById("modalTitle").innerHTML = title;
    document.getElementById("modalBody").innerHTML = body;

    const modal = new bootstrap.Modal(
        document.getElementById("genericModal")
    );
    modal.show();
}

/* ============================
   STORE CARD CLICK → MODAL
============================ */
document.addEventListener("click", (e) => {
    const card = e.target.closest(".modal-card");
    if (card) {
        openModal(
            card.dataset.title,
            card.dataset.description
        );
    }
});

/* ============================
   INTERACTIVE MAP HOTSPOTS
============================ */
const hotspots = document.querySelectorAll('.hotspot');

/* Tooltip on hover */
hotspots.forEach(h => {
    h.addEventListener('mouseenter', () => {
        if (h.querySelector('.tooltip')) return;

        const info = document.createElement('div');
        info.className = 'tooltip';
        info.textContent = h.dataset.info;
        h.appendChild(info);
    });

    h.addEventListener('mouseleave', () => {
        const tip = h.querySelector('.tooltip');
        if (tip) tip.remove();
    });
});

/* ============================
   HOTSPOT CLICK → MODAL
============================ */
hotspots.forEach(h => {
    h.addEventListener('click', () => {
        const title = h.dataset.title || "Farm Area";
        const info = h.dataset.info || "More information coming soon.";

        openModal(title, `<p>${info}</p>`);
    });
});
const seasonalTrack = document.getElementById("seasonalTrack");


function createCard(item) {
    const wrapper = document.createElement("div");
    wrapper.className = "seasonal-card";

    wrapper.innerHTML = `
        <div class="card h-100 shadow-sm modal-card">

            <img
                src="${item.img}"
                alt="${item.item}"
                class="card-img-top"
                data-title="${item.item}"
                data-description="
                    <p><strong>Price:</strong> ${item.price}</p>
                    <p>${item.note}</p>
                    <p>${item.description}</p>
                "
            >

            <div class="card-body text-center">
                <h5 class="card-title mb-0">${item.item}</h5>
            </div>

        </div>
    `;

    return wrapper;
}
function loadSeasonalPreview(items) {
    const seasonalItems = items.slice(0, 8); // pick featured ones

    seasonalTrack.innerHTML = "";

    // first set
    seasonalItems.forEach(item => {
        seasonalTrack.appendChild(createCard(item));
    });

    // duplicate set (for seamless loop)
    seasonalItems.forEach(item => {
        seasonalTrack.appendChild(createCard(item));
    });
}
if (seasonalTrack && typeof storeItems !== "undefined") {
    loadSeasonalPreview(storeItems);
}