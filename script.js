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
            <img class="card-img-top" src="${item.img}" alt="${item.item}">
            <div class="card-body">
                <h4 class="card-title">${item.item}</h4>
                <p class="card-text">${item.price}</p>
                <p class="card-text">${item.note}</p>
                <p class="card-text">${item.description}</p>
            </div>
               <button id='modal'
                    class="btn btn-primary view-dossier-btn mt-4 w-100"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#characterModal"
                onclick="openModal('${item.item}', '${item.item}')"
                  >
                    More Info
                  </button>
        </div>
    </div>`;
});
function openModal( ) {
    const modal = document.getElementById('modal');
modal.innerHTML = `
<div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="characterModalLabel">${item.item}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <img src="${item.img}" alt="${item.item}" class="img-fluid mb-3">
            <p><strong>Price:</strong> ${item.price}</p>
}`
}

