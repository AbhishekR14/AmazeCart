const products = [
    {
        id: "dhbd55151-sub52136-wiuib845-apn-5326gdv",
        image: 'Pictures/Products/sweatshirt1.jpg',
        name: 'Adults Plain Black Cotton Sweatshirt',
        ratings:{
            stars: 4.5,
            number: 56
        },
        cost: 633
    },
    {
        id: "qpwon2103-mnbj5646-jhsfvj84-sgvfsh42",
        image: 'Pictures/Products/round-sunglasses-black.jpg',
        name: 'Round Sunglasses',
        ratings:{
            stars: 4,
            number: 30
        },
        cost: 1250
    },
    {
        id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        image: "Pictures/Products/athletic-cotton-socks-6-pairs.jpg",
        name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
        ratings: {
          stars: 4.5,
          number: 87
        },
        cost: 1090,
        keywords: [
          "socks",
          "sports",
          "apparel"
        ]
    },
    {
        id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        image: "Pictures/Products/intermediate-composite-basketball.jpg",
        name: "Intermediate Size Basketball",
        ratings: {
          stars: 4,
          number: 127
        },
        cost: 2095,
        keywords: [
          "sports",
          "basketballs"
        ]
    },
    {
        id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
        image: "Pictures/Products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
        name: "Adults Plain Cotton T-Shirt - 2 Pack",
        ratings: {
          stars: 4.5,
          number: 56
        },
        cost: 799,
        keywords: [
          "tshirts",
          "apparel",
          "mens"
        ],
        type: "clothing",
        sizeChartLink: "images/clothing-size-chart.png"
    },
    {
        id: "54e0eccd-8f36-462b-b68a-8182611d9add",
        image: "Pictures/Products/black-2-slot-toaster.jpg",
        name: "2 Slot Toaster - Black",
        ratings: {
          stars: 5,
          number: 2197
        },
        cost: 1899,
        keywords: [
          "toaster",
          "kitchen",
          "appliances"
        ]
    },
    {
        id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
        image: "Pictures/Products/6-piece-white-dinner-plate-set.jpg",
        name: "6 Piece White Dinner Plate Set",
        ratings: {
          stars: 4,
          number: 37
        },
        cost: 2067,
        keywords: [
          "plates",
          "kitchen",
          "dining"
        ]
    },
    {
        id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
        image: "Pictures/Products/6-piece-non-stick-baking-set.webp",
        name: "6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set",
        ratings: {
          stars: 4.5,
          number: 175
        },
        cost: 3499,
        keywords: [
          "kitchen",
          "cookware"
        ]
    },
    {
        id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
        image: "Pictures/Products/plain-hooded-fleece-sweatshirt-yellow.jpg",
        name: "Plain Hooded Fleece Sweatshirt",
        ratings: {
          stars: 4.5,
          number: 317
        },
        cost: 2400,
        keywords: [
          "hoodies",
          "sweaters",
          "apparel"
        ]
    },
    {
        id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
        image: "Pictures/Products/luxury-tower-set-6-piece.jpg",
        name: "Luxury Towel Set - Graphite Gray",
        ratings: {
          stars: 4.5,
          number: 144
        },
        cost: 3599,
        keywords: [
          "bathroom",
          "washroom",
          "restroom",
          "towels",
          "bath towels"
        ]
    },
    {
        id: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
        image: "Pictures/Products/liquid-laundry-detergent-plain.jpg",
        name: "Liquid Laundry Detergent, 110 Loads, 82.5 Fl Oz",
        ratings: {
          stars: 4.5,
          number: 305
        },
        cost: 2899,
        keywords: [
          "bathroom",
          "cleaning"
        ]
    },
    {
        id: "58b4fc92-e98c-42aa-8c55-b6b79996769a",
        image: "Pictures/Products/knit-athletic-sneakers-gray.jpg",
        name: "Waterproof Knit Athletic Sneakers - Gray",
        ratings: {
          stars: 4,
          number: 89
        },
        cost: 3390,
        keywords: [
          "shoes",
          "running shoes",
          "footwear"
        ]
    },
    {
        id: "5968897c-4d27-4872-89f6-5bcb052746d7",
        image: "Pictures/Products/women-chiffon-beachwear-coverup-black.jpg",
        name: "Women's Chiffon Beachwear Cover Up - Black",
        ratings: {
          stars: 4.5,
          number: 235
        },
        cost: 2070,
        keywords: [
          "robe",
          "swimsuit",
          "swimming",
          "bathing",
          "apparel"
        ],
        type: "clothing",
        sizeChartLink: "images/clothing-size-chart.png"
    },
    {
        id: "04701903-bc79-49c6-bc11-1af7e3651358",
        image: "Pictures/Products/women-beach-sandals.jpg",
        name: "Women's Two Strap Buckle Sandals - Tan",
        ratings: {
          stars: 4.5,
          number: 562
        },
        cost: 2499,
        keywords: [
          "footwear",
          "sandals",
          "womens",
          "beach",
          "summer"
        ]
    },
    {
        id: "901eb2ca-386d-432e-82f0-6fb1ee7bf969",
        image: "Pictures/Products/blackout-curtain-set-beige.webp",
        name: "Blackout Curtains Set 4-Pack - Beige",
        ratings: {
          stars: 4.5,
          number: 232
        },
        cost: 4599,
        keywords: [
          "bedroom",
          "curtains",
          "home"
        ]
    },
    {
        id: "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",
        image: "Pictures/Products/men-slim-fit-summer-shorts-gray.jpg",
        name: "Men's Slim-Fit Summer Shorts",
        ratings: {
          stars: 4,
          number: 160
        },
        cost: 1699,
        keywords: [
          "shorts",
          "apparel",
          "mens"
        ]
    },
    {
        id: "c2a82c5e-aff4-435f-9975-517cfaba2ece",
        image: "Pictures/Products/electric-glass-and-steel-hot-water-kettle.webp",
        name: "Electric Glass and Steel Hot Tea Water Kettle - 1.7-Liter",
        ratings: {
          stars: 5,
          number: 846
        },
        cost: 3074,
        keywords: [
          "water boiler",
          "appliances",
          "kitchen"
        ]
    },
    {
        id: "6b07d4e7-f540-454e-8a1e-363f25dbae7d",
        image: "Pictures/Products/facial-tissue-2-ply-18-boxes.jpg",
        name: "Ultra Soft Tissue 2-Ply - 18 Box",
        ratings: {
          stars: 4,
          number: 99
        },
        cost: 2374,
        keywords: [
          "kleenex",
          "tissues",
          "kitchen",
          "tissues box",
          "napkins"
        ]
    },
    {
        id: "a82c6bac-3067-4e68-a5ba-d827ac0be010",
        image: "Pictures/Products/straw-sunhat.webp",
        name: "Straw Lifeguard Sun Hat",
        ratings: {
          stars: 4,
          number: 215
        },
        cost: 2200,
        keywords: [
          "hats",
          "straw hats",
          "summer",
          "apparel"
        ]
    },
    {
        id: "e4f64a65-1377-42bc-89a5-e572d19252e2",
        image: "Pictures/Products/sky-flower-stud-earrings.webp",
        name: "Sterling Silver Sky Flower Stud Earrings",
        ratings: {
          stars: 4.5,
          number: 52
        },
        cost: 1799,
        keywords: [
          "jewelry",
          "accessories",
          "womens"
        ]
    },
    {
        id: "b0f17cc5-8b40-4ca5-9142-b61fe3d98c85",
        image: "Pictures/Products/women-stretch-popover-hoodie-black.jpg",
        name: "Women's Stretch Popover Hoodie",
        ratings: {
          stars: 4.5,
          number: 2465
        },
        cost: 1374,
        keywords: [
          "hooded",
          "hoodies",
          "sweaters",
          "womens",
          "apparel"
        ],
        type: "clothing",
        sizeChartLink: "images/clothing-size-chart.png"
    },
    {
        id: "a93a101d-79ef-4cf3-a6cf-6dbe532a1b4a",
        image: "Pictures/Products/bathroom-rug.jpg",
        name: "Bathroom Bath Rug Mat 20 x 31 Inch - Grey",
        ratings: {
          stars: 4.5,
          number: 119
        },
        cost: 1250,
        keywords: [
          "bathmat",
          "bathroom",
          "home"
        ]
    },
    {
        id: "4f4fbcc2-4e72-45cc-935c-9e13d79cc57f",
        image: "Pictures/Products/women-knit-ballet-flat-black.jpg",
        name: "Women's Knit Ballet Flat",
        ratings: {
          stars: 4,
          number: 326
        },
        cost: 2640,
        keywords: [
          "shoes",
          "flats",
          "womens",
          "footwear"
        ]
    },
    {
        id: "8b5a2ee1-6055-422a-a666-b34ba28b76d4",
        image: "Pictures/Products/men-golf-polo-t-shirt-blue.jpg",
        name: "Men's Regular-Fit Quick-Dry Golf Polo Shirt",
        ratings: {
          stars: 4.5,
          number: 2556
        },
        cost: 1599,
        keywords: [
          "tshirts",
          "shirts",
          "apparel",
          "mens"
        ],
        type: "clothing",
        sizeChartLink: "images/clothing-size-chart.png"
    },
    {
        id: "b86ddc8b-3501-4b17-9889-a3bad6fb585f",
        image: "Pictures/Products/trash-can-with-foot-pedal-50-liter.jpg",
        name: "Trash Can with Foot Pedal - Brushed Stainless Steel",
        ratings: {
          stars: 4.5,
          number: 2286
        },
        cost: 8300,
        keywords: [
          "garbage",
          "bins",
          "cans",
          "kitchen"
        ]
    },
    {
        id: "19c6a64a-5463-4d45-9af8-e41140a4100c",
        image: "Pictures/Products/duvet-cover-set-blue-twin.jpg",
        name: "Duvet Cover Set with Zipper Closure",
        ratings: {
          stars: 4,
          number: 456
        },
        cost: 2399,
        keywords: [
          "bedroom",
          "bed sheets",
          "sheets",
          "covers",
          "home"
        ]
    },
    {
        id: "d2785924-743d-49b3-8f03-ec258e640503",
        image: "Pictures/Products/women-chunky-beanie-gray.webp",
        name: "Women's Chunky Cable Beanie - Gray",
        ratings: {
          stars: 5,
          number: 83
        },
        cost: 1250,
        keywords: [
          "hats",
          "winter hats",
          "beanies",
          "tuques",
          "apparel",
          "womens"
        ]
    },
    {
        id: "ee1f7c56-f977-40a4-9642-12ba5072e2b0",
        image: "Pictures/Products/men-chino-pants-beige.jpg",
        name: "Men's Classic-fit Pleated Chino Pants",
        ratings: {
          stars: 4.5,
          number: 9017
        },
        cost: 2290,
        keywords: [
          "pants",
          "apparel",
          "mens"
        ]
    },
    {
        id: "1c079479-8586-494f-ab53-219325432536",
        image: "Pictures/Products/men-athletic-shoes-green.jpg",
        name: "Men's Athletic Sneaker",
        ratings: {
          stars: 4,
          number: 229
        },
        cost: 3890,
        keywords: [
          "shoes",
          "running shoes",
          "footwear",
          "mens"
        ]
    },
    {
        id: "4df68c27-fd59-4a6a-bbd1-e754ddb6d53c",
        image: "Pictures/Products/men-navigator-sunglasses-brown.jpg",
        name: "Men's Navigator Sunglasses Pilot",
        ratings: {
          stars: 3.5,
          number: 42
        },
        cost: 1690,
        keywords: [
          "sunglasses",
          "glasses",
          "accessories",
          "shades"
        ]
    },
    {
        id: "4e37dd03-3b23-4bc6-9ff8-44e112a92c64",
        image: "Pictures/Products/non-stick-cooking-set-15-pieces.webp",
        name: "Non-Stick Cookware Set, Pots, Pans and Utensils - 15 Pieces",
        ratings: {
          stars: 4.5,
          number: 511
        },
        cost: 6797,
        keywords: [
          "cooking set",
          "kitchen"
        ]
    },
    {
        id: "a434b69f-1bc1-482d-9ce7-cd7f4a66ce8d",
        image: "Pictures/Products/vanity-mirror-silver.jpg",
        name: "Vanity Mirror with Heavy Base - Chrome",
        ratings: {
          stars: 4.5,
          number: 130
        },
        cost: 1649,
        keywords: [
          "bathroom",
          "washroom",
          "mirrors",
          "home"
        ]
    },
    {
        id: "a45cfa0a-66d6-4dc7-9475-e2b01595f7d7",
        image: "Pictures/Products/women-french-terry-fleece-jogger-camo.jpg",
        name: "Women's Fleece Jogger Sweatpant",
        ratings: {
          stars: 4.5,
          number: 248
        },
        cost: 2400,
        keywords: [
          "pants",
          "sweatpants",
          "jogging",
          "apparel",
          "womens"
        ]
    },
    {
        id: "d339adf3-e004-4c20-a120-40e8874c66cb",
        image: "Pictures/Products/double-elongated-twist-french-wire-earrings.webp",
        name: "Double Oval Twist French Wire Earrings - Gold",
        ratings: {
          stars: 4.5,
          number: 117
        },
        cost: 2400,
        keywords: [
          "accessories",
          "womens"
        ]
    },
    {
        id: "0d7f9afa-2efe-4fd9-b0fd-ba5663e0a524",
        image: "Pictures/Products/coffeemaker-with-glass-carafe-black.jpg",
        name: "Coffeemaker with Glass Carafe and Reusable Filter - 25 Oz, Black",
        ratings: {
          stars: 4.5,
          number: 1211
        },
        cost: 2250,
        keywords: [
          "coffeemakers",
          "kitchen",
          "appliances"
        ]
    },
    {
        id: "02e3a47e-dd68-467e-9f71-8bf6f723fdae",
        image: "Pictures/Products/blackout-curtains-black.jpg",
        name: "Blackout Curtains Set 42 x 84-Inch - Black, 2 Panels",
        ratings: {
          stars: 4.5,
          number: 363
        },
        cost: 3099,
        keywords: [
          "bedroom",
          "home"
        ]
    },
    {
        id: "8a53b080-6d40-4a65-ab26-b24ecf700bce",
        image: "Pictures/Products/cotton-bath-towels-teal.webp",
        name: "100% Cotton Bath Towels - 2 Pack, Light Teal",
        ratings: {
          stars: 4.5,
          number: 93
        },
        cost: 2110,
        keywords: [
          "bathroom",
          "home",
          "towels"
        ]
    },
    {
        id: "10ed8504-57db-433c-b0a3-fc71a35c88a1",
        image: "Pictures/Products/knit-athletic-sneakers-pink.webp",
        name: "Waterproof Knit Athletic Sneakers - Pink",
        ratings: {
          stars: 4,
          number: 89
        },
        cost: 3390,
        keywords: [
          "shoes",
          "running shoes",
          "footwear",
          "womens"
        ]
    },
    {
        id: "36c64692-677f-4f58-b5ec-0dc2cf109e27",
        image: "Pictures/Products/floral-mixing-bowl-set.jpg",
        name: "10-Piece Mixing Bowl Set with Lids - Floral",
        ratings: {
          stars: 5,
          number: 679
        },
        cost: 3899,
        keywords: [
          "mixing bowls",
          "baking",
          "cookware",
          "kitchen"
        ]
    },
    {
        id: "aaa65ef3-8d6f-4eb3-bc9b-a6ea49047d8f",
        image: "Pictures/Products/kitchen-paper-towels-30-pack.jpg",
        name: "2-Ply Kitchen Paper Towels - 30 Pack",
        ratings: {
          stars: 4.5,
          number: 1045
        },
        cost: 5799,
        keywords: [
          "kitchen",
          "kitchen towels",
          "tissues"
        ]
    },
    {
        id: "bc2847e9-5323-403f-b7cf-57fde044a955",
        image: "Pictures/Products/men-cozy-fleece-zip-up-hoodie-red.jpg",
        name: "Men's Full-Zip Hooded Fleece Sweatshirt",
        ratings: {
          stars: 4.5,
          number: 3157
        },
        cost: 2400,
        keywords: [
          "sweaters",
          "hoodies",
          "apparel",
          "mens"
        ]
    }
];