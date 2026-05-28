const card = document.getElementById('card-container');
card.innerHTML += `
<div class="row">
<div class="card col-4 ms-4">
    <img class="card-img-top" src="holder.js/100x180/" alt="${storeItems.item}" />
    <div class="card-body">
        <h4 class="card-title">${storeItems.item}</h4> 
        <p class="card-text">${storeItems.price}</p> <br>
              <p class="card-text">${storeItems.note}</p> <br>
        <p class="card-text">${storeItems.description}</p>
    </div>
</div>
</div>`