
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

function renderEventCards(list) {
    if (!Array.isArray(list)) return;
    events.innerHTML = '';
    list.forEach(item => {
        events.innerHTML += `
    <div class="col-12 col-sm-10 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center">
        <div class="card h-100">
            <img
                class="card-img-top modal-card"
                src="${item.img}"
                alt="${item.item}"
                data-title="${item.item}"
                data-description="
                    <p>${item.note}</p>
                    <p>${item.description}</p>
                "
            >

            <div class="card-body">
                <h4 class="card-title">${item.item}</h4>
                <p class="card-text">${item.note}</p>
                <p class="card-text">${item.description}</p>
            </div>
        </div>
    </div>`;
    });
}

if (seasons() === 'Summer') {
    renderEventCards(springEvents);
}
if (seasons() === 'Spring') {
    renderEventCards(summerEvents);
}
if (seasons() === 'Fall') {
    renderEventCards(fallEvents);
}
if (seasons() === 'Winter') {
    renderEventCards(winterEvents);
}
seasons()