const storeItems = [
   
{
    item: 'Fresh Eggs',
    category: 'Dairy & Eggs',
    price: '$6.00',
    note: 'From the 200-hen flock',
    description: 'Farm-fresh eggs available year-round.',
    img: 'productPhotos/product-fresh-eggs-dozen-carton.png'
},
{
    item: 'Raw Honey',
    category: 'Pantry',
    price: '$12.00',
    note: 'From farm hives',
    description: 'Local raw honey from three on-site hives.',
    img: 'productPhotos/product-raw-honey-jar.png'
},
{
    item: 'Strawberry Preserves',
    category: 'Pantry',
    price: '$9.00',
    note: 'Made in-house',
    description: 'Preserves made with seasonal berries.',
    img: 'productPhotos/product-strawberry-preserves-jar.png'
    
},
{
    item: 'Blueberry Preserves',
    category: 'Pantry',
    price: '$9.00',
    note: 'Made in-house',
    description: 'Small-batch preserves from peak berry season.',
    img: 'productPhotos/product-blueberry-preserves-jar.png'

},
{
    item: 'Fresh Apple Cider',
    category: 'Seasonal',
    price: '$8.50',
    note: 'Available in fall',
    description: 'Fresh cider pressed on-site, sold by the jug.',
    img: 'productPhotos/product-fresh-apple-cider-jug.png'
},
{
    item: 'Sourdough Bread',
    category: 'Baked Goods',
    price: '$7.00',
    note: 'Weekends only',
    description: 'Fresh-baked bread available on weekends.',
    img: 'productPhotos/product-sourdough-bread-loaf.png'
},
{
    item: 'Apple Pie',
    category: 'Baked Goods',
    price: '$18.00',
    note: 'Weekends only',
    description: 'Farm-made pie using seasonal apples.',
    img: 'productPhotos/product-apple-pie-bakery.png'
},
{
    item: 'Seasonal Produce Basket',
    category: 'Produce',
    price: '$25.00',
    note: 'Changes by season',
    description: 'A rotating selection from the farm fields.',
    img: 'productPhotos/product-seasonal-produce-basket.png'
},
{
    item: 'Beeswax Candles',
    category: 'Local Goods',
    price: '$14.00',
    note: 'From farm hives',
    description: 'Handmade candles from Hollow Creek beeswax.',
    img: 'candle.png'
},
{
    item: 'Branded Tote Bag',
    category: 'Merchandise',
    price: '$15.00',
    note: 'HCF merch',
    description: 'Reusable tote featuring the farm brand.',
    img: 'tote-bag.png'
},
{
    item: 'Hollow Creek Farm Hat',
    category: 'Merch',
    price: '$18.00',
    note: 'Embroidered logo',
    description: 'Classic curved-brim cap featuring the Hollow Creek Farm logo stitched on the front.',
    img: 'hat.png'
},
{
    item: 'Hollow Creek Farm Mug',
    category: 'Merch',
    price: '$14.00',
    note: 'Ceramic',
    description: 'Rustic ceramic mug perfect for coffee, tea, or early morning barn chills.',
    img: 'mug.png'
},
{
    item: 'Fresh Strawberries',
    category: 'Produce',
    price: '$5.00',
    note: 'Picked daily',
    description: 'Sweet seasonal strawberries harvested fresh each morning.',
    img: 'strawberries.png'
},
{
    item: 'Sweet Corn',
    category: 'Produce',
    price: '$1.00',
    note: 'Summer favorite',
    description: 'Locally grown corn picked at peak sweetness.',
    img: 'corn.png'
},
{
    item: 'Heirloom Tomatoes',
    category: 'Produce',
    price: '$4.50',
    note: 'Limited harvest',
    description: 'Colorful heirloom tomatoes grown without pesticides.',
    img: 'tomatoes.png'
},
{
    item: 'Fresh Lettuce',
    category: 'Produce',
    price: '$3.00',
    note: 'Greenhouse grown',
    description: 'Crisp leafy greens harvested fresh every morning.',
    img: 'lettuce.png'
},
{
    item: 'Baby Carrots',
    category: 'Produce',
    price: '$4.00',
    note: 'Kid favorite',
    description: 'Naturally sweet carrots cleaned and bundled fresh.',
    img: 'baby.png'
},
{
    item: 'Homemade Pumpkin Butter',
    category: 'Pantry',
    price: '$10.00',
    note: 'Fall special',
    description: 'Smooth pumpkin spread blended with warm spices.',
    img: 'pumpkin-butter.png'
},
{
    item: 'Lavender Soap',
    category: 'Local Goods',
    price: '$7.50',
    note: 'Handcrafted',
    description: 'Small-batch soap infused with farm-grown lavender.',
    img: 'soap.png'
},
{
    item: 'Sunflower Bouquet',
    category: 'Flowers',
    price: '$12.00',
    note: 'Seasonal blooms',
    description: 'Bright hand-cut sunflowers bundled fresh from the field.',
    img: 'sunflower-bouquet.png'
},
{
    item: 'Chocolate Chip Cookies',
    category: 'Baked Goods',
    price: '$6.00',
    note: 'Fresh daily',
    description: 'Soft-baked cookies made with farm butter and brown sugar.',
    img: 'chocolate-chip-cookies.png'
},
{
    item: 'Maple Syrup',
    category: 'Pantry',
    price: '$16.00',
    note: 'Small-batch',
    description: 'Pure maple syrup bottled locally in glass jars.',
    img: 'maple-syrup.png'
}



]

// ============================
// SEASONAL EVENTS DATA
// ============================
// AI ASSISTED: Added date ranges to enable seasonal availability validation
// Date format: startMonth (1-12), startDay (1-31), endMonth (1-12), endDay (1-31)
// Purpose: The isEventAvailable() function checks if today's date falls within the event's active period
// This determines whether the \"Book Event\" button is enabled or shows \"Coming Soon\"
// Features: Supports year-spanning date ranges (e.g., Dec-Jan for winter events)
// Implementation: Each event object includes optional date properties for booking validation

const springEvents = [
{
    item: 'Sunflower Field',
    category: 'Spring',
    note: 'Mid-May through June',
    description: 'Walk through the farm’s first sunflower bloom of the year.',
    img: 'Events/sunflower-event.png',
    season: 'Spring'
},
{
    item: 'U-Pick Strawberries & Asparagus',
    category: 'Spring',
    note: 'Weekends Only',
    description: 'Pick fresh strawberries and asparagus directly from the fields.',
    img: 'Events/strawberry-event.png',
    season: 'Spring'
},
{
    item: 'Baby Animal Barn',
    category: 'Spring',
    note: 'Family Favorite',
    description: 'Meet chicks, ducklings, and baby goats in the barn.',
    img: 'Events/animals-event.png',
    season: 'Spring'
},
{
    item: 'Garden Seedlings & Produce',
    category: 'Spring',
    note: 'Freshly Grown',
    description: 'Shop spring produce, seedlings, and transplants for your home garden.',
    img: 'Events/seedlings-event.png',
    season: 'Spring'
},
{
    item: 'Farm Animal Petting Day',
    category: 'Spring',
    note: 'Saturdays',
    description: 'Interact with friendly farm animals up close.',
    img: 'Events/animals-event.png',
    season: 'Spring'
},
{
    item: 'Spring Flower Festival',
    category: 'Spring',
    note: 'April Weekend Event',
    description: 'Celebrate blooming flowers with music and food vendors.',
    img: 'Events/festival-event.png',
    season: 'Spring'
},
{
    item: 'Butterfly Garden Walk',
    category: 'Spring',
    note: 'Seasonal Exhibit',
    description: 'Walk through a blooming garden filled with butterflies.',
    img: 'Events/butterfly-event.png',
    season: 'Spring'

},
{
    item: 'Farm Workshops',
    category: 'Spring',
    note: 'Weekly Classes',
    description: 'Learn gardening and sustainable farming skills.',
    img: 'Events/workshop-event.png',
    season: 'Spring'
}
];
const summerEvents = [
{
    item: 'Blueberry Picking',
    category: 'Summer',
    note: 'July through Early August',
    description: 'Visit the berry fields and pick fresh blueberries.',
    img: 'Events/blueberry-event.png',
    startMonth: 7, startDay: 1,
    endMonth: 8, endDay: 15,
    season: 'Summer'
},
{
    item: 'Farm-to-Table Dinner',
    category: 'Summer',
    note: 'Select Saturday Evenings',
    description: 'Enjoy a ticketed dinner featuring fresh ingredients from the farm.',
    img: 'Events/table-event.png',
    startMonth: 6, startDay: 21,
    endMonth: 8, endDay: 31,
    season: 'Summer'
},
{
    item: 'Sunflower U-Pick',
    category: 'Summer',
    note: 'Late July Bloom',
    description: 'Walk the rows and cut your own sunflower bouquet.',
    img: 'Events/sunflower-event.png',
    startMonth: 7, startDay: 15,
    endMonth: 8, endDay: 15,
    season: 'Summer'
},
{
    item: 'Sweet Corn Harvest',
    category: 'Summer',
    note: 'Fresh Daily',
    description: 'Pick up freshly harvested sweet corn from the farm market.',
    img: 'Events/corn-event.png',
    startMonth: 7, startDay: 1,
    endMonth: 9, endDay: 15,
    season: 'Summer'
},
{
    item: 'Summer Picnic Days',
    category: 'Summer',
    note: 'Weekends',
    description: 'Relax outdoors with picnic areas and farm views.',
    img: 'Events/picnic-event.png',
    startMonth: 6, startDay: 21,
    endMonth: 9, endDay: 22,
    season: 'Summer'
},
{
    item: 'Farm Camp Activities',
    category: 'Summer',
    note: 'Family Fun',
    description: 'Hands-on activities, games, and educational farm experiences.',
    img: 'Events/camp-event.png',
    startMonth: 7, startDay: 1,
    endMonth: 8, endDay: 31,
    season: 'Summer'
},
{
    item: 'Garden Tours',
    category: 'Summer',
    note: 'Guided Walks',
    description: 'Explore seasonal flowers, vegetables, and growing techniques.',
    img: 'Events/garden-event.png',
    startMonth: 6, startDay: 21,
    endMonth: 9, endDay: 22,
    season: 'Summer'
},
{
    item: 'Goat Yoga',
    category: 'Summer',
    note: 'Special Event',
    description: 'Enjoy local ice cream and live entertainment on the farm.',
    img: 'Events/yoga-event.png',
    startMonth: 7, startDay: 15,
    endMonth: 8, endDay: 31,
    season: 'Summer'
}
];

const fallEvents = [
{
    item: 'Corn Maze',
    category: 'Fall',
    note: 'Labor Day through November',
    description: 'Navigate a 5-acre maze with a new design each year.',
    img: 'Events/maze-event.png',
    startMonth: 9, startDay: 1,
    endMonth: 11, endDay: 15,
    season: 'Fall'
},
{
    item: 'Pumpkin Patch',
    category: 'Fall',
    note: 'September through November',
    description: 'Choose from more than 20 varieties of pumpkins.',
    img: 'Events/pumpkin-event.png',
    startMonth: 9, startDay: 15,
    endMonth: 11, endDay: 30,
    season: 'Fall'
},
{
    item: 'Hayrides',
    category: 'Fall',
    note: 'Weekends through October',
    description: 'Enjoy tractor-pulled wagon rides around the farm.',
    img: 'Events/hayride-event.png',
    startMonth: 9, startDay: 23,
    endMonth: 10, endDay: 31,
    season: 'Fall'
},
{
    item: 'Apple Cider Pressing',
    category: 'Fall',
    note: 'September through November',
    description: 'Watch fresh cider being made and take a jug home.',
    img: 'Events/cider-event.png',
    startMonth: 9, startDay: 1,
    endMonth: 11, endDay: 30,
    season: 'Fall'
},
{
    item: 'Fall Harvest Festival',
    category: 'Fall',
    note: 'Last Two Weekends of October',
    description: 'Enjoy food vendors, live music, crafts, and farm fun.',
    img: 'Events/festival-event.png',
    startMonth: 10, startDay: 15,
    endMonth: 10, endDay: 31,
    season: 'Fall'
},
{
    item: 'Pumpkin Decorating',
    category: 'Fall',
    note: 'Family Activity',
    description: 'Decorate pumpkins with paints, markers, and seasonal designs.',
    img: 'Events/decorating-event.png',
    startMonth: 9, startDay: 15,
    endMonth: 11, endDay: 30,
    season: 'Fall'
},
{
    item: 'Scarecrow Workshop',
    category: 'Fall',
    note: 'Weekend Event',
    description: 'Build and customize your own scarecrow to take home.',
    img: 'Events/scarecrow-event.png',
    startMonth: 9, startDay: 23,
    endMonth: 10, endDay: 31,
    season: 'Fall'
},
{
    item: 'Autumn Photo Days',
    category: 'Fall',
    note: 'Seasonal Favorite',
    description: 'Capture family photos among colorful fall displays.',
    img: 'Events/autumn-event.png',
    startMonth: 9, startDay: 23,
    endMonth: 11, endDay: 15
}
];

const winterEvents = [
{
    item: 'Holiday Market',
    category: 'Winter',
    note: 'First Three Weekends of December',
    description: 'Shop artisan goods, wreaths, gifts, and seasonal treats.',
    img: 'Events/winter-event.png',
    startMonth: 12, startDay: 1,
    endMonth: 12, endDay: 21,
    season: 'Winter'
},
{
    item: 'Wreath Making Workshop',
    category: 'Winter',
    note: 'December Weekends',
    description: 'Create a festive wreath using fresh greenery.',
    img: 'Events/wreath-event.png',
    startMonth: 12, startDay: 1,
    endMonth: 12, endDay: 24,
    season: 'Winter'
},
{
    item: 'Holiday Lights Display',
    category: 'Winter',
    note: 'Evenings',
    description: 'Walk through the farm decorated with seasonal lights.',
    img: 'Events/lights-event.png',
    startMonth: 12, startDay: 1,
    endMonth: 1, endDay: 15,
    season: 'Winter'
},
{
    item: 'Hot Cocoa Nights',
    category: 'Winter',
    note: 'Family Event',
    description: 'Warm up with hot cocoa and holiday treats.',
    img: 'Events/cocoa-event.png',
    startMonth: 12, startDay: 15,
    endMonth: 1, endDay: 15,
    season: 'Winter'
},
{
    item: 'Christmas Tree Sales',
    category: 'Winter',
    note: 'Seasonal',
    description: 'Choose a fresh-cut tree for your holiday celebrations.',
    img: 'Events/christmas-event.png',
    startMonth: 11, startDay: 15,
    endMonth: 12, endDay: 25,
    season: 'Winter'
},
{
    item: 'Winter Farm Market',
    category: 'Winter',
    note: 'Limited Seasonal Produce',
    description: 'Shop winter vegetables, baked goods, and preserves.',
    img: 'Events/winter-event.png',
    startMonth: 12, startDay: 1,
    endMonth: 2, endDay: 28,
    season: 'Winter'
},
{
    item: 'Holiday Craft Fair',
    category: 'Winter',
    note: 'Local Vendors',
    description: 'Browse handmade crafts and unique gift items.',
    img: 'Events/craft-event.png',
    startMonth: 12, startDay: 1,
    endMonth: 12, endDay: 24,
    season: 'Winter'
},
{
    item: 'Santa Visits the Farm',
    category: 'Winter',
    note: 'December Special Event',
    description: 'Meet Santa and take photos with family and friends.',
    img: 'Events/santa-event.png',
    startMonth: 12, startDay: 1,
    endMonth: 12, endDay: 24,
    season: 'Winter'
}
];