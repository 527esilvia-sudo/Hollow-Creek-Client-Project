const card = document.getElementById('row-items');
storeItems.forEach(item => {
card.innerHTML += `

<div class="card col-3 ms-5 me-5 mt-5 mb-5">
    <img class="card-img-top" src="${item.img}" alt="${storeItems.item}" />
    <div class="card-body">
        <h4 class="card-title">${item.item}</h4> 
        <p class="card-text">${item.price}</p> <br>
              <p class="card-text">${item.note}</p> <br>
        <p class="card-text">${item.description}</p>
    </div>
</div>`
})