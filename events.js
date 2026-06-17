const events = document.getElementById("event-list");

/* ============================
DATE + SEASON
============================ */
const today = new Date();
const month = today.getMonth();

function seasons() {
    if (month >= 2 && month <= 4) return "Spring";
    if (month >= 5 && month <= 7) return "Summer";
    if (month >= 8 && month <= 10) return "Fall";
    return "Winter";
}

/* ============================
SEASON ICONS
============================ */
// AI ASSISTED: Provides seasonal icons for event card headers
// Purpose: Display visually distinct icon badges for each season
function getSeasonIcon(season) {
    switch (season) {
        case "Spring":
            return '<i class="bi bi-flower1 text-success"></i>';
        case "Summer":
            return '<i class="bi bi-sun-fill text-warning"></i>';
        case "Fall":
            return '<i class="bi bi-leaf-fill text-warning"></i>';
        case "Winter":
            return '<i class="bi bi-snow text-info"></i>';
        case "All Seasons":
            return '<i class="bi bi-calendar3 text-secondary"></i>';
        default:
            return "";
    }
}

/* ============================
CARD RENDERING
============================ */
// AI ASSISTED: Main function to render event cards dynamically
// Purpose: Display filtered event data with season icons, hover dimming, and booking metadata
function renderEventCards(list, season) {
    if (!events) return;

    const seasonIcon = getSeasonIcon(season);

    events.innerHTML = "";

    list.forEach(item => {
        events.innerHTML += `
        <div class="col-12 col-md-6 d-flex justify-content-center">
            <div class="card h-100 position-relative overflow-hidden">

                <div class="season-icon bg-white bg-opacity-75 shadow-sm">
                    ${seasonIcon}
                </div>

                <img
                    class="card-img-top modal-card event-card-img"
                    src="${item.img}"
                    alt="${item.item}"
                    data-item="${item.item}"
                    data-type="event"
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

/* ============================
LOAD CURRENT SEASON
============================ */
// AI ASSISTED: Automatically load and display current season events on page load
// Purpose: Default page behavior showing events relevant to the current calendar season
function checkSeason() {
    const season = seasons();

    switch (season) {
        case "Spring":
            renderEventCards(springEvents, season);
            break;
        case "Summer":
            renderEventCards(summerEvents, season);
            break;
        case "Fall":
            renderEventCards(fallEvents, season);
            break;
        case "Winter":
            renderEventCards(winterEvents, season);
            break;
    }
}

/* ============================
BUTTONS
============================ */
// AI ASSISTED: Season filter button click handlers
// Purpose: Allow users to manually select which season's events to view
function clickSpringBtn() {
    renderEventCards(springEvents, "Spring");
}

function clickSummerBtn() {
    renderEventCards(summerEvents, "Summer");
}

function clickFallBtn() {
    renderEventCards(fallEvents, "Fall");
}

function clickWinterBtn() {
    renderEventCards(winterEvents, "Winter");
}

// AI ASSISTED: Display all events from all seasons
// Purpose: Allow users to see complete event catalog across the entire year
function clickAllEvents() {
    const allEvents = [...springEvents, ...summerEvents, ...fallEvents, ...winterEvents];
    renderEventCards(allEvents, "All Seasons");
}

/* ============================
HIDE CURRENT SEASON BUTTON
============================ */
// AI ASSISTED: Hide the button for the current season since it's already the default
// Purpose: Reduce redundancy and improve UX by not showing the default filter button


/* ============================
INITIALIZATION
============================ */
// AI ASSISTED: Initialize events page on load
// Purpose: Display current season events by default and hide redundant filter button
window.addEventListener("load", () => {

    checkSeason();
});
/* ============================
   SEASON ICON
============================ */
function setSeasonIcon() {
    const icon = document.getElementById("seasonIcon");
    if (!icon) return;

    const m = new Date().getMonth() + 1;

    if (m <= 2) icon.textContent = "❄️";
    else if (m <= 5) icon.textContent = "🌸";
    else if (m <= 8) icon.textContent = "☀️";
    else icon.textContent = "🍂";
}

setSeasonIcon();


function toggleSeasonButtons() {
    const filters = document.getElementById("seasonFilters");
    const btn = document.getElementById("seasonToggleBtn");

    filters.classList.toggle("show");

    if (filters.classList.contains("show")) {
        btn.textContent = "Hide Seasons";
    } else {
        btn.textContent = "Seasonal Events";
    }
}