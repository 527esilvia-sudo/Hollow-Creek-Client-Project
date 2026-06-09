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
function getSeason() {
    const now = new Date();
    const month = now.getMonth(); // 0 = Jan, 11 = Dec

    // Northern Hemisphere Logic
    if (month >= 2 && month <= 4) {
        return "Spring"; // Mar, Apr, May
    } else if (month >= 5 && month <= 7) {
        return "Summer"; // Jun, Jul, Aug
    } else if (month >= 8 && month <= 10) {
        return "Autumn"; // Sep, Oct, Nov
    } else {
        return "Winter"; // Dec, Jan, Feb
    }
}

console.log(`The current season is: ${getSeason()}`);