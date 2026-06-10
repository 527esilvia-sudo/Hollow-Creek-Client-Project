const card = document.getElementById('row-items');
window.addEventListener("load", () => {
    const splash = document.getElementById("splashScreen");

    setTimeout(() => {
        splash.classList.add("fade-out");
    }, 2000); // time before fade starts
});
storeItems.forEach(item => {
    card.innerHTML += `
    <div class="col-12 col-sm-10 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center">
        <div class="card h-100">
            <img class="card-img-top" src="${item.img}" alt="${item.item}">
            <div class="card-body">
                <h4 class="card-title">${item.item}</h4>
                <p class="card-text">${item.price}</p>
                <p class="card-text">${item.note}</p>
                <p class="card-text">${item.description}</p>
            </div>
        </div>
    </div>`;
});
