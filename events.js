
const events = document.getElementById('event-list');
const today = new Date();

const day = today.getDate();
const month = today.getMonth();
const year = today.getFullYear();

function seasons() {
    if (month >= 2 && month <= 4) {
               console.log('Spring');
        return 'Spring';
     
    } else if (month >= 5 && month <= 7) {
        console.log('Summer');
        return 'Summer';
    }   else if (month >= 8 && month <= 10) {
        return 'Fall';
    } else {
        return 'Winter';
    }
}

if (seasons() === 'Summer') {
   events.innerHTML = `
    <div class="card col-3 ms-5 me-5 mt-5 mb-5">
        <img class="card-img-top" src="${item.img}" alt="${item.item}" />
        <div class="card-body">
            <h4 class="card-title">${item.item}</h4>
            <p class="card-text">${item.note}</p>
            <p class="card-text">${item.description}</p>
        </div>
    </div>
    `;

springEvents.forEach(item => {
    events.innerHTML += `
    <div class="card col-3 ms-5 me-5 mt-5 mb-5">
        <img class="card-img-top" src="${item.img}" alt="${item.item}" />
        <div class="card-body">
            <h4 class="card-title">${item.item}</h4>
            <p class="card-text">${item.note}</p>
            <p class="card-text">${item.description}</p>
        </div>
    </div>
    `;
});
}
if (seasons() === 'Spring') {
    events.innerHTML += `
    <div class="card col-3 ms-5 me-5 mt-5 mb-5">
        <img class="card-img-top" src="${item.img}" alt="${item.item}" />
        <div class="card-body">
            <h4 class="card-title">${item.item}</h4>
            <p class="card-text">${item.note}</p>
            <p class="card-text">${item.description}</p>
        </div>
    </div>
    `;

    summerEvents.forEach(item => {
        events.innerHTML += `
        <div class="card col-3 ms-5 me-5 mt-5 mb-5">
            <img class="card-img-top" src="${item.img}" alt="${item.item}" />
            <div class="card-body">
                <h4 class="card-title">${item.item}</h4>
                <p class="card-text">${item.note}</p>
                <p class="card-text">${item.description}</p>
            </div>
        </div>
        `;
    });
}
if (seasons() === 'Fall') {
    events.innerHTML = "";

    fallEvents.forEach(item => {
        events.innerHTML += `
        <div class="card col-3 ms-5 me-5 mt-5 mb-5">
            <img class="card-img-top" src="${item.img}" alt="${item.item}" />
            <div class="card-body">
                <h4 class="card-title">${item.item}</h4>
                <p class="card-text">${item.note}</p>
                <p class="card-text">${item.description}</p>
            </div>
        </div>
        `;
    });
}
if (seasons() === 'Winter') {
    events.innerHTML = "";

    winterEvents.forEach(item => {
        events.innerHTML += `
        <div class="card col-3 ms-5 me-5 mt-5 mb-5">
            <img class="card-img-top" src="${item.img}" alt="${item.item}" />
            <div class="card-body">
                <h4 class="card-title">${item.item}</h4>
                <p class="card-text">${item.note}</p>
                <p class="card-text">${item.description}</p>
            </div>
        </div>
        `;
    });
}
seasons()