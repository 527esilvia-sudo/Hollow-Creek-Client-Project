const card = document.getElementById('row-items');
window.addEventListener("load", () => {
    const splash = document.getElementById("splashScreen");
    console.log(splash);
    setTimeout(() => {
        splash.classList.add("fade-out");
    }, 2000); // time before fade starts
});
storeItems.forEach(item => {
    card.innerHTML += `
    <div class="col-12 col-sm-10 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center">
        <div class="card h-100">
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

            <div class="card-body">
                <h4 class="card-title">${item.item}</h4>
                <p class="card-text">${item.price}</p>
                <p class="card-text">${item.note}</p>
                <p class="card-text">${item.description}</p>
            </div>
        </div>
    </div>`;
});

function openModal(title, body) {
    document.getElementById("modalTitle").innerHTML = title;
    document.getElementById("modalBody").innerHTML = body;

    const modal = new bootstrap.Modal(
        document.getElementById("genericModal")
    );

    modal.show();
}

document.addEventListener("click", (e) => {
    const card = e.target.closest(".modal-card");

    if (!card) return;

    openModal(
        card.dataset.title,
        card.dataset.description
    );
});