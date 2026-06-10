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
    img: 'productPhotos/product-beeswax-candles.png'
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
    item: 'Fresh Strawberries',
    category: 'Produce',
    price: '$5.00',
    note: 'Picked daily',
    description: 'Sweet seasonal strawberries harvested fresh each morning.',
    img: 'productPhotos/product-fresh-strawberries-basket.png'
},
{
    item: 'Sweet Corn',
    category: 'Produce',
    price: '$1.00',
    note: 'Summer favorite',
    description: 'Locally grown corn picked at peak sweetness.',
    img: 'images/sweet-corn.jpg'
},
{
    item: 'Heirloom Tomatoes',
    category: 'Produce',
    price: '$4.50',
    note: 'Limited harvest',
    description: 'Colorful heirloom tomatoes grown without pesticides.',
    img: ''
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
    img: 'images/baby-carrots.jpg'
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
},
{
    item: 'Hollow Creek Hoodie',
    category: 'Merch',
    price: '30.00',
    note: 'Show off HC pride',
    description: 'Comfy cozy hoodie perfect for the fall season.',
    img: 'sweatshirt.png'
}


]
const springEvents = [
{
    item: 'Sunflower Field',
    category: 'Spring',
    note: 'Mid-May through June',
    description: 'Walk through the farm’s first sunflower bloom of the year.',
    img: 'seasonPhotos/spring-sunflowers.jpg'
},
{
    item: 'U-Pick Strawberries & Asparagus',
    category: 'Spring',
    note: 'Weekends Only',
    description: 'Pick fresh strawberries and asparagus directly from the fields.',
    img: 'seasonPhotos/strawberries-asparagus.jpg'
},
{
    item: 'Baby Animal Barn',
    category: 'Spring',
    note: 'Family Favorite',
    description: 'Meet chicks, ducklings, and baby goats in the barn.',
    img: 'seasonPhotos/baby-animals.jpg'
},
{
    item: 'Garden Seedlings & Produce',
    category: 'Spring',
    note: 'Freshly Grown',
    description: 'Shop spring produce, seedlings, and transplants for your home garden.',
    img: 'seasonPhotos/spring-produce.jpg'
},
{
    item: 'Farm Animal Petting Day',
    category: 'Spring',
    note: 'Saturdays',
    description: 'Interact with friendly farm animals up close.',
    img: 'seasonPhotos/petting-zoo.jpg'
},
{
    item: 'Spring Flower Festival',
    category: 'Spring',
    note: 'April Weekend Event',
    description: 'Celebrate blooming flowers with music and food vendors.',
    img: 'seasonPhotos/flower-festival.jpg'
},
{
    item: 'Butterfly Garden Walk',
    category: 'Spring',
    note: 'Seasonal Exhibit',
    description: 'Walk through a blooming garden filled with butterflies.',
    img: 'seasonPhotos/butterfly-garden.jpg'
},
{
    item: 'Farm Workshops',
    category: 'Spring',
    note: 'Weekly Classes',
    description: 'Learn gardening and sustainable farming skills.',
    img: 'seasonPhotos/workshops.jpg'
}
];