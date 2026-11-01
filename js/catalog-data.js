// Dayal Store - Catalog Data
// Established 1952, Pratapgarh, Uttar Pradesh
// Pure Catalog: No prices, no checkout. Product availability & Indian realistic photos.

const STORE_INFO = {
  name: "Dayal Store",
  hindiName: "दयाल स्टोर",
  tagline: "शुद्धता और ताज़गी की अटूट परंपरा • 1952 से आपकी सेवा में",
  englishTagline: "Trusted Freshness & Purity Since 1952",
  address: "Dayal Store, Near Tehsil Sadar, Babaganj, Pratapgarh, 230001, Uttar Pradesh",
  googleMapsUrl: "https://maps.app.goo.gl/KrC8X8hDsoMfJ5YN8",
  phones: [
    { number: "+917398283814", display: "+91 73982 83814", raw: "917398283814" },
    { number: "+916391488486", display: "+91 63914 88486", raw: "916391488486" }
  ],
  timing: "सुबह 8:00 बजे से रात्रि 9:30 बजे तक (खुला है / Open All 7 Days)"
};

const CATEGORIES = [
  {
    id: 1,
    name: "डेयरी, खोया व छेना",
    englishName: "Dairy, Khoya & Fresh Chena",
    icon: "🥛",
    image: "assets/images/dairy_products.jpg",
    description: "ताज़ा दूध, शुद्ध देशी पनीर, गाय का खोया, मावा व छेना",
    subcategories: [
      { id: "1.1", name: "दूध, दही, छाछ व क्रीम", englishName: "Milk, Curd, Buttermilk & Cream" },
      { id: "1.2", name: "पनीर, चीज व मक्खन", englishName: "Paneer, Cheese & Table Butter" },
      { id: "1.3", name: "खोया व ताजा छेना", englishName: "Mawa / Khoya & Fresh Chena" }
    ]
  },
  {
    id: 2,
    name: "मिठाइयां",
    englishName: "Sweets",
    icon: "🍬",
    image: "assets/images/sweets_rajbhog.jpg",
    description: "स्पंजी रसगुल्ला, केसरिया राजभोग व शुद्ध काजू कतली",
    subcategories: []
  },
  {
    id: 3,
    name: "फ्रोजन व रेडी-टू-कुक स्नैक्स",
    englishName: "Frozen Snacks, Fries, Tikkis & Dim Sums",
    icon: "🥟",
    image: "assets/images/frozen.jpg",
    description: "आलू टिक्की, हरा भरा कबाब, मोमोज, फ्रेंच फ्राइज व चाप",
    subcategories: [
      { id: "3.1", name: "फ्रोजन स्नैक्स, कबाब व टिक्की", englishName: "Frozen Appetizers, Kababs & Tikkis" },
      { id: "3.2", name: "चांप की किस्में", englishName: "Chaap Varieties" },
      { id: "3.3", name: "फ्रोजन मटर व स्वीट कॉर्न", englishName: "Frozen Peas & Corn" }
    ]
  },
  {
    id: 4,
    name: "अनाज, चावल, दालें व फलियां",
    englishName: "Grains, Rice, Pulses & Legumes",
    icon: "🌾",
    image: "assets/images/anaaj.jpg",
    description: "रेशम बासमती चावल, अरहर, चना, मूंग, उड़द व राजमा",
    subcategories: [
      { id: "4.1", name: "चावल की किस्में", englishName: "Rice Varieties" },
      { id: "4.2", name: "दालें", englishName: "Lentils & Split Pulses" },
      { id: "4.3", name: "साबुत फलियां, चना व राजमा", englishName: "Whole Legumes, Beans & Grams" }
    ]
  },
  {
    id: 5,
    name: "आटा, मैदा, बेसन, सूजी व स्टार्च",
    englishName: "Flours, Semolina & Starches",
    icon: "🥣",
    image: "assets/images/aata besan.jpg",
    description: "गेहूं आटा, डबल गुलाब मैदा, शुद्ध चना बेसन, सूजी व सत्तू",
    subcategories: []
  },
  {
    id: 6,
    name: "ब्रेड, बेकरी, पाव व बिस्कुट",
    englishName: "Breads, Bakery, Buns & Biscuits",
    icon: "🍞",
    image: "assets/images/bread.jpg",
    description: "पाव भाजी पाव, बर्गर बन्स, खारी, टोस्ट, रस्क व पिज्जा बेस",
    subcategories: [
      { id: "6.1", name: "पाव, बर्गर व कुल्चा", englishName: "Buns & Pav" },
      { id: "6.2", name: "ब्रेड, ब्रेड क्रम्स व सोया क्रम्ब्स", englishName: "Loaf Breads & Crumbs" },
      { id: "6.3", name: "बेकरी स्नैक्स, टोस्ट, खारी व बिस्कुट", englishName: "Rusk, Khari & Biscuits" }
    ]
  },
  {
    id: 7,
    name: "मसाले, जड़ी-बूटियां व सीज़निंग",
    englishName: "Spices & Seasonings",
    icon: "🌿",
    image: "assets/images/spices.jpg",
    description: "MDH पिसे मसाले, साबुत गरम मसाले, हींग व स्पेशल ब्लेंड्स",
    subcategories: [
      { id: "7.1", name: "पिसे हुए मसाले", englishName: "Ground Spices" },
      { id: "7.2", name: "साबुत गरम मसाले व बीज", englishName: "Whole Spices / Spice Kada" },
      { id: "7.3", name: "हींग की किस्में", englishName: "Asafoetida / Hing Varieties" },
      { id: "7.4", name: "ब्लेंडेड, करी, चाट व वेस्टर्न मसाले", englishName: "Blended Masalas" },
      { id: "7.5", name: "नमक व स्वाद वर्धक", englishName: "Salts & Flavor Enhancers" }
    ]
  },
  {
    id: 8,
    name: "पास्ता, नूडल्स, सॉस, पेस्ट व सिरका",
    englishName: "Pastas, Noodles, Sauces & Vinegars",
    icon: "🍝",
    image: "assets/images/pasta.jpg",
    description: "पेन्ने, मैकरोनी, हक्का नूडल्स, किसान सॉस, सिरका व ऑलिव्स",
    subcategories: [
      { id: "8.1", name: "पास्ता की किस्में", englishName: "Pasta Varieties" },
      { id: "8.2", name: "नूडल्स", englishName: "Noodles" },
      { id: "8.3", name: "सॉस, पेस्ट व डिप्स", englishName: "Sauces, Pastes & Dips" },
      { id: "8.4", name: "सिरका, ऑलिव्स व जलापेनो", englishName: "Vinegars & Pickled Veggies" }
    ]
  },
  {
    id: 9,
    name: "तेल, घी व वसा",
    englishName: "Cooking Oils, Pure Ghee & Fats",
    icon: "🫒",
    image: "assets/images/oil.jpg",
    description: "कच्ची घानी सरसों तेल, अमूल देशी घी, फॉर्च्यून व रथ घी",
    subcategories: [
      { id: "9.1", name: "खाद्य तेल व पूजा तेल", englishName: "Cooking Oils & Ritual Oils" },
      { id: "9.2", name: "देशी घी व वनस्पति", englishName: "Pure Desi Ghee & Vanaspati" }
    ]
  },
  {
    id: 10,
    name: "मिठास, शर्करा, गुड़ व शहद",
    englishName: "Sugars, Jaggery & Honey",
    icon: "🍯",
    image: "assets/images/honey.jpg",
    description: "ट्रस्ट रिफाइंड चीनी, देशी गुड़, बूरा, मिश्री व डाबर शहद",
    subcategories: [
      { id: "10.1", name: "बल्क चीनी, गुड़ व बूरा", englishName: "Sugars & Jaggery" },
      { id: "10.2", name: "टेबल सुगर", englishName: "Portioned Sugars" },
      { id: "10.3", name: "शहद", englishName: "Pure Honey" }
    ]
  },
  {
    id: 11,
    name: "सूखे मेवे, नट्स, सुपरफूड बीज व नारियल",
    englishName: "Dry Fruits, Nuts & Seeds",
    icon: "🥜",
    image: "assets/images/dry fruits.jpg",
    description: "मामरा बादाम, काजू, पिस्ता, अखरोट, मखाना, किशमिश व केसर",
    subcategories: [
      { id: "11.1", name: "काजू, बादाम, पिस्ता व अखरोट", englishName: "Nuts & Kernels" },
      { id: "11.2", name: "सुपरफूड्स व स्वास्थ्यवर्धक बीज", englishName: "Superfood Seeds" },
      { id: "11.3", name: "किशमिश, खजूर, अंजीर व छुआरा", englishName: "Dried Fruits & Dates" },
      { id: "11.4", name: "मखाना, गोंद व मूंगफली", englishName: "Foxnuts, Edible Gum & Peanuts" },
      { id: "11.5", name: "नारियल उत्पाद", englishName: "Coconut Products" },
      { id: "11.6", name: "केसर, गुलकन्द व पुष्प सामग्री", englishName: "Saffron & Florals" }
    ]
  },
  {
    id: 12,
    name: "हलवाई, बेकरी रसायन, रंग व एसेंस",
    englishName: "Halwai Chemicals, Food Colours & Essences",
    icon: "🧪",
    image: "assets/images/food colour.jpg",
    description: "बेकिंग पाउडर, टाटरी, रंगकाट, बुश रंग, केवड़ा जल व चांदी वर्क",
    subcategories: [
      { id: "12.1", name: "राइजिंग एजेंट्स व यीस्ट", englishName: "Raising Agents & Leavening" },
      { id: "12.2", name: "कस्टर्ड, पुडिंग व कोको पाउडर", englishName: "Dessert Powders" },
      { id: "12.3", name: "शोधक, छेना फाड़क व हलवाई रसायन", englishName: "Clarifiers & Halwai Chemicals" },
      { id: "12.4", name: "खाद्य रंग", englishName: "Food Colours (Bush Company)" },
      { id: "12.5", name: "सुगंध, एसेंस व अर्क", englishName: "Essences, Flavours & Waters" },
      { id: "12.6", name: "चांदी वर्क व खाद्य कपूर", englishName: "Silver Vark & Edible Additives" }
    ]
  },
  {
    id: 13,
    name: "कैफेटेरिया, पेय पदार्थ, मॉकटेल सिरप व क्रश",
    englishName: "Cafeteria, Beverages, Syrups & Crushes",
    icon: "☕",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
    description: "टाटा व ताजमहल चाय, नेसकॉफी, बिसलरी, रूहआबजा व फ्रूट क्रश",
    subcategories: [
      { id: "13.1", name: "चाय की ब्रांड्स व किस्में", englishName: "Tea Brands & Varieties" },
      { id: "13.2", name: "कॉफी व हेल्थ ड्रिंक्स", englishName: "Coffee & Beverage Powders" },
      { id: "13.3", name: "मिनरल वाटर व कार्बोनेटेड ड्रिंक्स", englishName: "Packaged Water & Sodas" },
      { id: "13.4", name: "मॉकटेल व फ्लेवर्ड सिरप्स", englishName: "Mocktail & Flavoured Syrups" },
      { id: "13.5", name: "फ्रूट क्रश", englishName: "Real Fruit Crushes" },
      { id: "13.6", name: "कैफेटेरिया एक्सेसरीज, सिरप व टॉपिंग्स", englishName: "Accessories & Confectionery" }
    ]
  },
  {
    id: 14,
    name: "तैयार नमकीन, पापड़, अचार, पाचक व चाट बेस",
    englishName: "Namkeen, Papad, Pickles & Chaat Bases",
    icon: "🥨",
    image: "assets/images/chaat base.jpg",
    description: "हल्दीराम भुजिया, लिज्जत पापड़, आम अचार, गोलगप्पा व हाजमोला",
    subcategories: [
      { id: "14.1", name: "हल्दीराम नमकीन व स्नैक्स", englishName: "Haldiram Savouries" },
      { id: "14.2", name: "अन्य नमकीन, मठरी व आलू लच्छा", englishName: "Traditional Namkeen & Mathri" },
      { id: "14.3", name: "पापड़, अचार व सलाद", englishName: "Papad, Pickles & Salads" },
      { id: "14.4", name: "चाट, गोलगप्पे व रायता बेस", englishName: "Chaat, Golgappa & Raita Bases" },
      { id: "14.5", name: "पाचक व हाजमा गोलियां", englishName: "Digestive Pellets" }
    ]
  },
  {
    id: 15,
    name: "मिट्टी के बर्तन",
    englishName: "Earthenware / Traditional Clay Pottery",
    icon: "🏺",
    image: "assets/images/mitti bartan.jpg",
    description: "मिट्टी के कुल्हड़, छेना पायस हाण्डी, बनारसी टमाटर चाट कटोरी",
    subcategories: [
      { id: "15.1", name: "मिट्टी के कुल्हड़", englishName: "Clay Kulhads" },
      { id: "15.2", name: "मिट्टी की हांड़ी, कटोरी व कमोरी", englishName: "Clay Handi, Bowls & Matka" }
    ]
  },
  {
    id: 16,
    name: "डिस्पोजल सामग्री",
    englishName: "Disposable Items",
    icon: "📦",
    image: "assets/images/disposal.jpg",
    description: "गन्ना बगास प्लेट्स, दोने, चाय-कॉफी कप, लकड़ी चम्मच व कांटे",
    subcategories: [
      { id: "16.1", name: "डिस्पोजल गिलास व कप", englishName: "Glasses & Cups" },
      { id: "16.2", name: "डिस्पोजल प्लेट्स व थाली", englishName: "Plates & Thalis" },
      { id: "16.3", name: "कटोरी व दोने", englishName: "Bowls & Donas" },
      { id: "16.4", name: "चम्मच व कांटे", englishName: "Cutlery: Spoons & Forks" },
      { id: "16.5", name: "स्ट्रॉ, टूथपिक व कोन", englishName: "Straws, Skewers & Pouches" }
    ]
  },
  {
    id: 17,
    name: "पैकेजिंग, हाइजीन, क्लॉथ व सर्विस सामग्री",
    englishName: "Packaging, Hygiene & Catering Utilities",
    icon: "🧼",
    image: "assets/images/packaging.jpg",
    description: "सिल्वर फॉयल, क्लिंग फिल्म, मिठाई डिब्बे, वेटर ग्लव्स व मलमल",
    subcategories: [
      { id: "17.1", name: "टिशू पेपर, फॉयल व रैपिंग", englishName: "Tissues, Foils & Liners" },
      { id: "17.2", name: "पैकेजिंग थैलियां, डिब्बे व रबर", englishName: "Carry Bags & Fasteners" },
      { id: "17.3", name: "पर्सनल हाइजीन, ग्लव्स व सफाई", englishName: "Gloves, Aprons & Cleaning" },
      { id: "17.4", name: "कपड़ा सामग्री", englishName: "Kitchen & Service Cloths" },
      { id: "17.5", name: "सर्विस यूटिलिटी व हार्डवेयर", englishName: "Chafing Fuels & Hardware Setup" }
    ]
  }
];

// Helper realistic Indian product image mapping (high resolution, authentic Indian grocery photos)
const IMG = {
  milk: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80",
  milk_tetra: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=600&q=80",
  curd: "https://images.unsplash.com/photo-1571212515416-fef01fc43637?auto=format&fit=crop&w=600&q=80",
  paneer: "assets/images/dairy_products.jpg",
  cheese: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=600&q=80",
  butter: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=600&q=80",
  khoya: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=600&q=80",
  rasgulla: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
  rajbhog: "assets/images/sweets_rajbhog.jpg",
  kaju_katli: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80",
  aloo_tikki: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=600&q=80",
  kabab: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
  french_fries: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80",
  momos: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
  spring_roll: "https://images.unsplash.com/photo-1548869206-93b036288d7e?auto=format&fit=crop&w=600&q=80",
  chaap: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
  peas: "https://images.unsplash.com/photo-1587735243615-c03f25aaff15?auto=format&fit=crop&w=600&q=80",
  corn: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=600&q=80",
  basmati_rice: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
  dal_toor: "https://images.unsplash.com/photo-1585996746979-30113c54d193?auto=format&fit=crop&w=600&q=80",
  chana_dal: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
  moong_dal: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=600&q=80",
  urad_dal: "https://images.unsplash.com/photo-1585996746979-30113c54d193?auto=format&fit=crop&w=600&q=80",
  masoor_dal: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
  kabuli_chana: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=600&q=80",
  desi_chana: "https://images.unsplash.com/photo-1585996746979-30113c54d193?auto=format&fit=crop&w=600&q=80",
  rajma: "https://images.unsplash.com/photo-1551462147-37885acc36f1?auto=format&fit=crop&w=600&q=80",
  soya_chunks: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
  sabudana: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
  atta_wheat: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
  besan: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80",
  suji: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=600&q=80",
  pav_buns: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
  bread_loaf: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
  rusk_toast: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=600&q=80",
  pizza_base: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
  turmeric: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80",
  coriander: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
  chilli_powder: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
  cumin: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
  black_pepper: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
  cardamom: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=600&q=80",
  star_anise: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
  red_chillies: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
  cloves: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
  cinnamon: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
  bay_leaf: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
  ajwain: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
  hing: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80",
  kitchen_king: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
  salt: "https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?auto=format&fit=crop&w=600&q=80",
  pasta: "https://images.unsplash.com/photo-1551462147-37885acc36f1?auto=format&fit=crop&w=600&q=80",
  noodles: "https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=600&q=80",
  maggi: "https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=600&q=80",
  sauce_tomato: "https://images.unsplash.com/photo-1589135233689-d56b06380696?auto=format&fit=crop&w=600&q=80",
  sauce_chilli: "https://images.unsplash.com/photo-1589135233689-d56b06380696?auto=format&fit=crop&w=600&q=80",
  mayonnaise: "https://images.unsplash.com/photo-1589135233689-d56b06380696?auto=format&fit=crop&w=600&q=80",
  vinegar: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80",
  refined_oil: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80",
  mustard_oil: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80",
  desi_ghee: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=600&q=80",
  sugar: "https://images.unsplash.com/photo-1587735243615-c03f25aaff15?auto=format&fit=crop&w=600&q=80",
  jaggery: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=600&q=80",
  honey: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80",
  almonds: "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=600&q=80",
  cashews: "https://images.unsplash.com/photo-1567892328224-5d470d0469b6?auto=format&fit=crop&w=600&q=80",
  pista: "https://images.unsplash.com/photo-1528751014936-863e6e7a319c?auto=format&fit=crop&w=600&q=80",
  walnut: "https://images.unsplash.com/photo-1553456558-aff63285bdd1?auto=format&fit=crop&w=600&q=80",
  raisins: "https://images.unsplash.com/photo-1587735243615-c03f25aaff15?auto=format&fit=crop&w=600&q=80",
  dates: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?auto=format&fit=crop&w=600&q=80",
  makhana: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
  coconut: "https://images.unsplash.com/photo-1544378730-8b5104b18790?auto=format&fit=crop&w=600&q=80",
  saffron: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80",
  baking_powder: "https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?auto=format&fit=crop&w=600&q=80",
  tea_leaves: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
  coffee: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80",
  water_bisleri: "https://images.unsplash.com/photo-1559839914-ba2ac6790757?auto=format&fit=crop&w=600&q=80",
  rooh_afza: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
  haldiram_namkeen: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
  bhujia: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
  papad: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
  pickle_mango: "https://images.unsplash.com/photo-1589135233689-d56b06380696?auto=format&fit=crop&w=600&q=80",
  golgappa_puris: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
  hajmola: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
  kulhad: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
  clay_handi: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=600&q=80",
  disposable_cups: "https://images.unsplash.com/photo-1572726729437-3732efed3e8e?auto=format&fit=crop&w=600&q=80",
  bagasse_plates: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=600&q=80",
  wooden_spoons: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=600&q=80",
  tissues_foil: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=600&q=80"
};

// All catalog products transcribed from the Dayal Stores 13-page document
const PRODUCTS = [
  // 1. डेयरी, खोया व छेना
  {
    id: 101,
    categoryId: 1,
    subcategoryId: "1.1",
    hindiName: "दूध / मिल्क",
    englishName: "Liquid Milk",
    packNote: "30 ली. उपलब्ध",
    image: IMG.milk,
    keywords: "doodh dood liquid milk dairy taza fresh"
  },
  {
    id: 102,
    categoryId: 1,
    subcategoryId: "1.1",
    hindiName: "दूध भैंस का",
    englishName: "Fresh Buffalo Milk",
    packNote: "दुकान पर ताज़ा उपलब्ध",
    image: IMG.milk,
    keywords: "bhains ka doodh buffalo milk pure fresh dairy"
  },
  {
    id: 103,
    categoryId: 1,
    subcategoryId: "1.1",
    hindiName: "दूध गाय का",
    englishName: "Fresh Cow Milk",
    packNote: "दुकान पर ताज़ा उपलब्ध",
    image: IMG.milk,
    keywords: "gay ka doodh cow milk desi pure cow"
  },
  {
    id: 104,
    categoryId: 1,
    subcategoryId: "1.1",
    hindiName: "दूध मिक्स",
    englishName: "Mixed Dairy Milk",
    packNote: "दुकान पर उपलब्ध",
    image: IMG.milk,
    keywords: "mixed dairy milk doodh"
  },
  {
    id: 105,
    categoryId: 1,
    subcategoryId: "1.1",
    hindiName: "अमूल गोल्ड फूल क्रीम दूध (सुबह/शाम)",
    englishName: "Amul Gold Full Cream Milk",
    packNote: "सुबह / शाम ताज़ा उपलब्ध",
    image: IMG.milk_tetra,
    keywords: "amul gold full cream milk packet pouch"
  },
  {
    id: 106,
    categoryId: 1,
    subcategoryId: "1.1",
    hindiName: "अमूल गोल्ड टेट्रा पैक दूध",
    englishName: "Amul Gold Tetra Pak Milk",
    packNote: "10 गत्ता उपलब्ध",
    image: IMG.milk_tetra,
    keywords: "amul gold tetra pak milk carton long life"
  },
  {
    id: 107,
    categoryId: 1,
    subcategoryId: "1.1",
    hindiName: "अमूल दही / दही",
    englishName: "Amul Curd / Dahi",
    packNote: "50 कि.ग्रा. / 30 कि.ग्रा.",
    image: IMG.curd,
    keywords: "amul dahi curd yogurt dahi matka cup"
  },
  {
    id: 108,
    categoryId: 1,
    subcategoryId: "1.1",
    hindiName: "अमूल छाछ",
    englishName: "Amul Spiced / Plain Buttermilk",
    packNote: "मसाला व सादा उपलब्ध",
    image: IMG.curd,
    keywords: "amul chhaas chaas buttermilk spiced plain"
  },
  {
    id: 109,
    categoryId: 1,
    subcategoryId: "1.1",
    hindiName: "अमूल फ्रेश क्रीम / क्रीम",
    englishName: "Amul Fresh Cream",
    packNote: "15 कि.ग्रा. / 10 कि.ग्रा. / 5 किलो",
    image: IMG.curd,
    keywords: "amul fresh cream malai cooking cream"
  },
  {
    id: 110,
    categoryId: 1,
    subcategoryId: "1.1",
    hindiName: "Tropolite क्रीम",
    englishName: "Tropolite Non-Dairy Whipping Cream",
    packNote: "बेकरी व केक हेतु उपलब्ध",
    image: IMG.curd,
    keywords: "tropolite whipping cream cake bakery non-dairy"
  },
  {
    id: 111,
    categoryId: 1,
    subcategoryId: "1.1",
    hindiName: "अमूल मिठाई मेट",
    englishName: "Amul Mithai Mate (Condensed Milk)",
    packNote: "उपलब्ध",
    image: IMG.milk_tetra,
    keywords: "amul mithai mate condensed milk sweet tin"
  },

  // 1.2 पनीर, चीज व मक्खन
  {
    id: 112,
    categoryId: 1,
    subcategoryId: "1.2",
    hindiName: "पनीर / पनीर ताजा",
    englishName: "Fresh Paneer / Cottage Cheese",
    packNote: "150 कि.ग्रा. / 30 कि.ग्रा.",
    image: IMG.paneer,
    keywords: "fresh paneer cottage cheese malai paneer soft"
  },
  {
    id: 113,
    categoryId: 1,
    subcategoryId: "1.2",
    hindiName: "अमूल पनीर",
    englishName: "Amul Packaged Paneer",
    packNote: "उपलब्ध",
    image: IMG.paneer,
    keywords: "amul paneer packaged block"
  },
  {
    id: 114,
    categoryId: 1,
    subcategoryId: "1.2",
    hindiName: "अमूल चीज ब्लॉक",
    englishName: "Amul Processed Cheese Block",
    packNote: "8 कि.ग्रा. उपलब्ध",
    image: IMG.cheese,
    keywords: "amul cheese block processed block"
  },
  {
    id: 115,
    categoryId: 1,
    subcategoryId: "1.2",
    hindiName: "अमूल चीज मोजरेला / मोजरेला चीज",
    englishName: "Mozzarella Cheese (Diced/Shredded)",
    packNote: "12 कि.ग्रा. उपलब्ध",
    image: IMG.cheese,
    keywords: "amul mozzarella cheese pizza cheese diced shredded"
  },
  {
    id: 116,
    categoryId: 1,
    subcategoryId: "1.2",
    hindiName: "अमूल चीज स्लाइसेस / चीज स्लाइस",
    englishName: "Processed Cheese Slices",
    packNote: "उपलब्ध",
    image: IMG.cheese,
    keywords: "cheese slices amul sandwich slice"
  },
  {
    id: 117,
    categoryId: 1,
    subcategoryId: "1.2",
    hindiName: "चीज क्यूब",
    englishName: "Processed Cheese Cubes",
    packNote: "उपलब्ध",
    image: IMG.cheese,
    keywords: "cheese cubes processed cheese"
  },
  {
    id: 118,
    categoryId: 1,
    subcategoryId: "1.2",
    hindiName: "अमूल चीज प्रोसेस",
    englishName: "Amul Cooking Cheese",
    packNote: "उपलब्ध",
    image: IMG.cheese,
    keywords: "amul cooking cheese processed"
  },
  {
    id: 119,
    categoryId: 1,
    subcategoryId: "1.2",
    hindiName: "अमूल चीज स्प्रेड",
    englishName: "Amul Cheese Spread",
    packNote: "उपलब्ध",
    image: IMG.cheese,
    keywords: "amul cheese spread toast spread"
  },
  {
    id: 120,
    categoryId: 1,
    subcategoryId: "1.2",
    hindiName: "अमूल बटर मक्खन / बटर",
    englishName: "Amul Table Butter",
    packNote: "10 कि.ग्रा. / 8 कि.ग्रा. / 5 किलो",
    image: IMG.butter,
    keywords: "amul butter makhan salted table butter"
  },
  {
    id: 121,
    categoryId: 1,
    subcategoryId: "1.2",
    hindiName: "पीनट बटर",
    englishName: "Creamy Peanut Butter",
    packNote: "उपलब्ध",
    image: IMG.butter,
    keywords: "peanut butter creamy spread"
  },

  // 1.3 खोया व ताजा छेना
  {
    id: 122,
    categoryId: 1,
    subcategoryId: "1.3",
    hindiName: "खोया गाय का सादा",
    englishName: "Plain Cow Milk Khoya",
    packNote: "35 किलो उपलब्ध",
    image: IMG.khoya,
    keywords: "khoya cow milk mawa shuddh khoya"
  },
  {
    id: 123,
    categoryId: 1,
    subcategoryId: "1.3",
    hindiName: "खोया चिकना सफेद",
    englishName: "Smooth White Mawa / Khoya",
    packNote: "20 किलो उपलब्ध",
    image: IMG.khoya,
    keywords: "khoya chikna safed smooth white mawa"
  },
  {
    id: 124,
    categoryId: 1,
    subcategoryId: "1.3",
    hindiName: "खोया दानेदार",
    englishName: "Granular Danedar Khoya",
    packNote: "5 किलो उपलब्ध",
    image: IMG.khoya,
    keywords: "khoya danedar kalakand mawa granular"
  },
  {
    id: 125,
    categoryId: 1,
    subcategoryId: "1.3",
    hindiName: "खोया लच्छेदार",
    englishName: "Layered Lachhedar Khoya",
    packNote: "उपलब्ध",
    image: IMG.khoya,
    keywords: "khoya lachhedar layered mawa halwai"
  },
  {
    id: 126,
    categoryId: 1,
    subcategoryId: "1.3",
    hindiName: "ताजा कच्चा छेना",
    englishName: "Fresh Raw Soft Chena",
    packNote: "50 किलो / 15 किलो",
    image: IMG.paneer,
    keywords: "fresh raw soft chena chhena rasgulla base"
  },
  {
    id: 127,
    categoryId: 1,
    subcategoryId: "1.3",
    hindiName: "क्रीम ताजा छेना वाला",
    englishName: "Fresh Cream with Chena",
    packNote: "दुकान पर उपलब्ध",
    image: IMG.paneer,
    keywords: "cream chena fresh malai"
  },
  {
    id: 128,
    categoryId: 1,
    subcategoryId: "1.3",
    hindiName: "दूध पाउडर / दूध पाउडर सागर",
    englishName: "Sagar Brand Milk Powder",
    packNote: "उपलब्ध",
    image: IMG.milk_tetra,
    keywords: "sagar milk powder dry milk dairy whitener"
  },

  // 2. मिठाइयां (Sweets)
  {
    id: 201,
    categoryId: 2,
    subcategoryId: null,
    hindiName: "रसगुल्ला",
    englishName: "Rasgulla",
    packNote: "दुकान पर ताज़ा उपलब्ध",
    image: IMG.rasgulla,
    keywords: "rasgulla roshogolla white sweet bengali chena mithai"
  },
  {
    id: 202,
    categoryId: 2,
    subcategoryId: null,
    hindiName: "राजभोग / सुजला राजभोग",
    englishName: "Rajbhog / Sujla Rajbhog (Tin)",
    packNote: "1 कि.ग्रा. टिन व ताज़ा उपलब्ध",
    image: IMG.rajbhog,
    keywords: "rajbhog sujla tin can kesar saffron big rasgulla sweet mithai royal taste of india"
  },
  {
    id: 203,
    categoryId: 2,
    subcategoryId: null,
    hindiName: "काजू कतली",
    englishName: "Kaju Katli",
    packNote: "प्योर काजू व चांदी वर्क",
    image: IMG.kaju_katli,
    keywords: "kaju katli cashew sweet silver barfi mithai"
  },

  // 3. फ्रोजन व रेडी-टू-कुक स्नैक्स
  {
    id: 301,
    categoryId: 3,
    subcategoryId: "3.1",
    hindiName: "आलू टिक्की",
    englishName: "Crispy Spiced Aloo Tikki",
    packNote: "रेडी टू फ्राई उपलब्ध",
    image: IMG.aloo_tikki,
    keywords: "aloo tikki frozen snacks burger tikki crispy"
  },
  {
    id: 302,
    categoryId: 3,
    subcategoryId: "3.1",
    hindiName: "हरा भरा कबाब",
    englishName: "Hara Bhara Veggie Kabab",
    packNote: "उपलब्ध",
    image: IMG.kabab,
    keywords: "hara bhara kabab veg kebab spinach peas"
  },
  {
    id: 303,
    categoryId: 3,
    subcategoryId: "3.1",
    hindiName: "कबाब",
    englishName: "Frozen Veg Seekh Kabab",
    packNote: "उपलब्ध",
    image: IMG.kabab,
    keywords: "veg seekh kabab frozen ready to eat"
  },
  {
    id: 304,
    categoryId: 3,
    subcategoryId: "3.1",
    hindiName: "मैककेन वेजी फिंगर",
    englishName: "McCain Veggie Fingers",
    packNote: "15 कि.ग्रा. उपलब्ध",
    image: IMG.french_fries,
    keywords: "mccain veggie fingers frozen snacks"
  },
  {
    id: 305,
    categoryId: 3,
    subcategoryId: "3.1",
    hindiName: "मैककेन V क्रिस्पर्स",
    englishName: "McCain V-Crispers French Fries",
    packNote: "15 कि.ग्रा. उपलब्ध",
    image: IMG.french_fries,
    keywords: "mccain v crispers french fries potato cut"
  },
  {
    id: 306,
    categoryId: 3,
    subcategoryId: "3.1",
    hindiName: "फ्रेंच फ्राइज",
    englishName: "Classic French Fries",
    packNote: "उपलब्ध",
    image: IMG.french_fries,
    keywords: "french fries potato finger chips crispy"
  },
  {
    id: 307,
    categoryId: 3,
    subcategoryId: "3.1",
    hindiName: "पोटैटो वाईट्स",
    englishName: "Crispy Potato Bites",
    packNote: "उपलब्ध",
    image: IMG.aloo_tikki,
    keywords: "potato bites potato nuggets crispy"
  },
  {
    id: 308,
    categoryId: 3,
    subcategoryId: "3.1",
    hindiName: "वेज डिमसिम / वेज मोमोज",
    englishName: "Veg Dim Sum / Steamed Momos",
    packNote: "750 पीस उपलब्ध",
    image: IMG.momos,
    keywords: "veg momos dim sum steamed momo frozen"
  },
  {
    id: 309,
    categoryId: 3,
    subcategoryId: "3.1",
    hindiName: "पनीर डिमसिम / पनीर मोमोज",
    englishName: "Paneer Dim Sum / Momos",
    packNote: "750 पीस उपलब्ध",
    image: IMG.momos,
    keywords: "paneer momos dim sum cheese paneer"
  },
  {
    id: 310,
    categoryId: 3,
    subcategoryId: "3.1",
    hindiName: "स्प्रिंग रोल",
    englishName: "Crispy Veg Spring Rolls",
    packNote: "उपलब्ध",
    image: IMG.spring_roll,
    keywords: "spring roll veg crispy rolls"
  },
  {
    id: 311,
    categoryId: 3,
    subcategoryId: "3.1",
    hindiName: "स्प्रिंग रोल शीट",
    englishName: "Spring Roll Wrappers / Sheets",
    packNote: "उपलब्ध",
    image: IMG.spring_roll,
    keywords: "spring roll sheet wrappers patti"
  },
  {
    id: 312,
    categoryId: 3,
    subcategoryId: "3.1",
    hindiName: "चीज स्टिक स्टिक्स",
    englishName: "Mozzarella Cheese Sticks",
    packNote: "उपलब्ध",
    image: IMG.cheese,
    keywords: "cheese sticks mozzarella fingers"
  },
  {
    id: 313,
    categoryId: 3,
    subcategoryId: "3.1",
    hindiName: "चीज बॉल्स",
    englishName: "Melting Cheese Balls",
    packNote: "उपलब्ध",
    image: IMG.cheese,
    keywords: "cheese balls melting cheese frozen"
  },
  {
    id: 314,
    categoryId: 3,
    subcategoryId: "3.1",
    hindiName: "पिज्जा पाव",
    englishName: "Ready Stuffed Pizza Pav",
    packNote: "उपलब्ध",
    image: IMG.pizza_base,
    keywords: "pizza pav stuffed baked"
  },

  // 3.2 चांप की किस्में
  {
    id: 315,
    categoryId: 3,
    subcategoryId: "3.2",
    hindiName: "सोया चाप",
    englishName: "Soya Chaap",
    packNote: "10 कि.ग्रा. उपलब्ध",
    image: IMG.chaap,
    keywords: "soya chaap frozen raw sticks"
  },
  {
    id: 316,
    categoryId: 3,
    subcategoryId: "3.2",
    hindiName: "जींजर चाप",
    englishName: "Ginger Soya Chaap",
    packNote: "3 कि.ग्रा. उपलब्ध",
    image: IMG.chaap,
    keywords: "ginger soya chaap adrak flavored"
  },
  {
    id: 317,
    categoryId: 3,
    subcategoryId: "3.2",
    hindiName: "गार्लिक चाप",
    englishName: "Garlic Soya Chaap",
    packNote: "3 कि.ग्रा. उपलब्ध",
    image: IMG.chaap,
    keywords: "garlic soya chaap lahsun flavored"
  },
  {
    id: 318,
    categoryId: 3,
    subcategoryId: "3.2",
    hindiName: "ग्रीन चिल्ली चाप",
    englishName: "Green Chilli Soya Chaap",
    packNote: "3 कि.ग्रा. उपलब्ध",
    image: IMG.chaap,
    keywords: "green chilli soya chaap spicy"
  },

  // 3.3 फ्रोजन मटर व स्वीट कॉर्न
  {
    id: 319,
    categoryId: 3,
    subcategoryId: "3.3",
    hindiName: "सफल मटर हरा / ग्रीन मैटर",
    englishName: "Safal Frozen Green Peas",
    packNote: "25 किलो उपलब्ध",
    image: IMG.peas,
    keywords: "safal matar frozen green peas hari matar"
  },
  {
    id: 320,
    categoryId: 3,
    subcategoryId: "3.3",
    hindiName: "ग्रीन वैली मटर",
    englishName: "Green Valley Frozen Peas",
    packNote: "10 कि.ग्रा. उपलब्ध",
    image: IMG.peas,
    keywords: "green valley frozen peas matar"
  },
  {
    id: 321,
    categoryId: 3,
    subcategoryId: "3.3",
    hindiName: "स्वीट कॉर्न",
    englishName: "Frozen Sweet Corn",
    packNote: "12 कि.ग्रा. उपलब्ध",
    image: IMG.corn,
    keywords: "sweet corn frozen bhutta makka kernels"
  },

  // 4. अनाज, चावल, दालें व फलियां
  {
    id: 401,
    categoryId: 4,
    subcategoryId: "4.1",
    hindiName: "चावल सादा सादा",
    englishName: "Plain White Polished Rice",
    packNote: "25 किलो / 20 कि.ग्रा.",
    image: IMG.basmati_rice,
    keywords: "chawal sada white rice polished grain"
  },
  {
    id: 402,
    categoryId: 4,
    subcategoryId: "4.1",
    hindiName: "चावल रेशम बासमती",
    englishName: "Premium Resham Long Grain Basmati",
    packNote: "50 किलो उपलब्ध",
    image: IMG.basmati_rice,
    keywords: "resham basmati rice long grain biryani pulao"
  },
  {
    id: 403,
    categoryId: 4,
    subcategoryId: "4.1",
    hindiName: "चावल गोल्डेन सेल्हा",
    englishName: "Golden Sella Parboiled Basmati Rice",
    packNote: "उपलब्ध",
    image: IMG.basmati_rice,
    keywords: "golden sella rice parboiled chawal"
  },
  {
    id: 404,
    categoryId: 4,
    subcategoryId: "4.1",
    hindiName: "चावल सेल्हा महीन",
    englishName: "Fine Slender Sella Rice",
    packNote: "40 किलो उपलब्ध",
    image: IMG.basmati_rice,
    keywords: "sella mahin rice slender rice"
  },

  // 4.2 दालें
  {
    id: 405,
    categoryId: 4,
    subcategoryId: "4.2",
    hindiName: "अरहर दाल (तुअर)",
    englishName: "Pigeon Pea / Toor Dal",
    packNote: "1 बोरी उपलब्ध",
    image: IMG.dal_toor,
    keywords: "arhar dal tuar dal toor split pigeon pea peeli dal"
  },
  {
    id: 406,
    categoryId: 4,
    subcategoryId: "4.2",
    hindiName: "चना दाल",
    englishName: "Split Bengal Gram (Chana Dal)",
    packNote: "12 किलो / 6 कि.ग्रा.",
    image: IMG.chana_dal,
    keywords: "chana dal split bengal gram yellow"
  },
  {
    id: 407,
    categoryId: 4,
    subcategoryId: "4.2",
    hindiName: "मूंग दाल / पीली मूंग दाल",
    englishName: "Split Yellow Moong Dal",
    packNote: "25 कि.ग्रा. / 3 किलो / 2 किलो",
    image: IMG.moong_dal,
    keywords: "moong dal peeli moong split yellow gram"
  },
  {
    id: 408,
    categoryId: 4,
    subcategoryId: "4.2",
    hindiName: "उड़द धुली (धोईया)",
    englishName: "Washed White Urad Dal",
    packNote: "12 किलो / 5 कि.ग्रा.",
    image: IMG.urad_dal,
    keywords: "urad dhuli urad dhoya white urad dal dahi vada"
  },
  {
    id: 409,
    categoryId: 4,
    subcategoryId: "4.2",
    hindiName: "मसूर दाल बिना छिलका",
    englishName: "Red Split Lentils (Skinless Masoor Dal)",
    packNote: "उपलब्ध",
    image: IMG.masoor_dal,
    keywords: "masoor dal red lentils malka masoor"
  },
  {
    id: 410,
    categoryId: 4,
    subcategoryId: "4.2",
    hindiName: "मटर दाल",
    englishName: "Split Yellow Peas Dal",
    packNote: "उपलब्ध",
    image: IMG.chana_dal,
    keywords: "matar dal yellow peas dal"
  },
  {
    id: 411,
    categoryId: 4,
    subcategoryId: "4.2",
    hindiName: "हरा उड़द दाल",
    englishName: "Split Green Urad Dal",
    packNote: "उपलब्ध",
    image: IMG.urad_dal,
    keywords: "hara urad dal chilka urad split"
  },
  {
    id: 412,
    categoryId: 4,
    subcategoryId: "4.2",
    hindiName: "काली उड़द दाल",
    englishName: "Split Black Urad Dal",
    packNote: "उपलब्ध",
    image: IMG.urad_dal,
    keywords: "kali urad dal black split lentils"
  },

  // 4.3 साबुत फलियां, चना व राजमा
  {
    id: 413,
    categoryId: 4,
    subcategoryId: "4.3",
    hindiName: "काबुली चना (छोटा/बड़ा)",
    englishName: "White Chickpeas (Kabuli Chana)",
    packNote: "3 कि.ग्रा. उपलब्ध",
    image: IMG.kabuli_chana,
    keywords: "kabuli chana chhole white chickpeas bada chota"
  },
  {
    id: 414,
    categoryId: 4,
    subcategoryId: "4.3",
    hindiName: "देशी लाल चना",
    englishName: "Desi Brown / Red Chickpeas",
    packNote: "1 किलो उपलब्ध",
    image: IMG.desi_chana,
    keywords: "desi lal chana kala chana brown chickpeas"
  },
  {
    id: 415,
    categoryId: 4,
    subcategoryId: "4.3",
    hindiName: "हरा चना देशी",
    englishName: "Fresh Dried Green Chana",
    packNote: "2 किलो उपलब्ध",
    image: IMG.desi_chana,
    keywords: "hara chana desi dried green chickpeas chholiya"
  },
  {
    id: 416,
    categoryId: 4,
    subcategoryId: "4.3",
    hindiName: "राजमा चित्रा",
    englishName: "Chitra Speckled Kidney Beans",
    packNote: "4 किलो उपलब्ध",
    image: IMG.rajma,
    keywords: "rajma chitra kashmiri speckled kidney beans"
  },
  {
    id: 417,
    categoryId: 4,
    subcategoryId: "4.3",
    hindiName: "राजमा काला",
    englishName: "Black Kidney Beans",
    packNote: "उपलब्ध",
    image: IMG.rajma,
    keywords: "rajma kala black kidney beans"
  },
  {
    id: 418,
    categoryId: 4,
    subcategoryId: "4.3",
    hindiName: "मूंग साबुत / हरा मूंग साबुत",
    englishName: "Whole Green Moong",
    packNote: "3 कि.ग्रा. / 1 किलो",
    image: IMG.moong_dal,
    keywords: "sabut moong whole green moong sprouts"
  },
  {
    id: 419,
    categoryId: 4,
    subcategoryId: "4.3",
    hindiName: "काली उड़द साबुत",
    englishName: "Whole Black Urad Beans",
    packNote: "उपलब्ध",
    image: IMG.urad_dal,
    keywords: "kali urad sabut dal makhani beans black gram"
  },
  {
    id: 420,
    categoryId: 4,
    subcategoryId: "4.3",
    hindiName: "सूखा मटर / सफेद मटर",
    englishName: "Dried Green & White Peas",
    packNote: "15 कि.ग्रा. उपलब्ध",
    image: IMG.peas,
    keywords: "sukha matar safed matar white dry peas chaat matar"
  },
  {
    id: 421,
    categoryId: 4,
    subcategoryId: "4.3",
    hindiName: "लोबिया",
    englishName: "Black Eyed Peas / Cowpeas",
    packNote: "उपलब्ध",
    image: IMG.kabuli_chana,
    keywords: "lobiya cowpeas black eyed peas chawli"
  },
  {
    id: 422,
    categoryId: 4,
    subcategoryId: "4.3",
    hindiName: "सोयाबीन",
    englishName: "Whole Soybean Chunks",
    packNote: "उपलब्ध",
    image: IMG.soya_chunks,
    keywords: "soyabean whole chunks nutri"
  },
  {
    id: 423,
    categoryId: 4,
    subcategoryId: "4.3",
    hindiName: "सोयाबीन चूरा",
    englishName: "Soya Granules / Minced Soya",
    packNote: "उपलब्ध",
    image: IMG.soya_chunks,
    keywords: "soyabean choora granules minced soya"
  },
  {
    id: 424,
    categoryId: 4,
    subcategoryId: "4.3",
    hindiName: "साबूदाना (बड़ा/छोटा)",
    englishName: "Tapioca Pearls / Sago (Bada & Chhota)",
    packNote: "उपलब्ध",
    image: IMG.sabudana,
    keywords: "sabudana sago tapioca pearls vrat fasting"
  },
  {
    id: 425,
    categoryId: 4,
    subcategoryId: "4.3",
    hindiName: "भुना चना बिना छिलका",
    englishName: "Roasted Skinless Bengal Gram",
    packNote: "उपलब्ध",
    image: IMG.desi_chana,
    keywords: "bhuna chana roasted gram without skin snacks"
  },

  // 5. आटा, मैदा, बेसन, सूजी व स्टार्च
  {
    id: 501,
    categoryId: 5,
    subcategoryId: null,
    hindiName: "आटा / आटा महीन",
    englishName: "Whole Wheat Flour",
    packNote: "1 कुन्तल / 100 किलो",
    image: IMG.atta_wheat,
    keywords: "aata atta gehu flour whole wheat chakki"
  },
  {
    id: 502,
    categoryId: 5,
    subcategoryId: null,
    hindiName: "मैदा / मैदा (डबल गुलाब)",
    englishName: "All-Purpose Flour (Double Gulab Brand)",
    packNote: "1 कुन्तल / 10 कि.ग्रा.",
    image: IMG.atta_wheat,
    keywords: "maida double gulab all purpose refined flour"
  },
  {
    id: 503,
    categoryId: 5,
    subcategoryId: null,
    hindiName: "बेसन बारीक / बेसन महीन",
    englishName: "Fine Gram Flour",
    packNote: "15 किलो / 5 कि.ग्रा.",
    image: IMG.besan,
    keywords: "besan fine gram flour chana flour pakoda"
  },
  {
    id: 504,
    categoryId: 5,
    subcategoryId: null,
    hindiName: "बेसन मोटा",
    englishName: "Coarse Gram Flour",
    packNote: "5 कि.ग्रा. उपलब्ध",
    image: IMG.besan,
    keywords: "besan mota coarse gram flour laddu"
  },
  {
    id: 505,
    categoryId: 5,
    subcategoryId: null,
    hindiName: "चना बेसन",
    englishName: "Pure Chana Dal Besan",
    packNote: "5 कि.ग्रा. उपलब्ध",
    image: IMG.besan,
    keywords: "pure chana besan gram flour shuddh"
  },
  {
    id: 506,
    categoryId: 5,
    subcategoryId: null,
    hindiName: "बेसन 0 नं०",
    englishName: "Superfine Besan No. 0",
    packNote: "उपलब्ध",
    image: IMG.besan,
    keywords: "besan zero number superfine halwai"
  },
  {
    id: 507,
    categoryId: 5,
    subcategoryId: null,
    hindiName: "सूजी / सूजी मोटा",
    englishName: "Coarse & Fine Semolina (Suji/Rava)",
    packNote: "10 कि.ग्रा. / 8 किलो",
    image: IMG.suji,
    keywords: "suji rava semolina halwa coarse fine"
  },
  {
    id: 508,
    categoryId: 5,
    subcategoryId: null,
    hindiName: "आरारोट",
    englishName: "Arrowroot Starch Powder",
    packNote: "20 कि.ग्रा. / 5 किलो",
    image: IMG.baking_powder,
    keywords: "ararot arrowroot starch thickening powder"
  },
  {
    id: 509,
    categoryId: 5,
    subcategoryId: null,
    hindiName: "कार्न फ्लावर / कॉर्न फ्लोर पाउडर",
    englishName: "Corn Starch / Corn Flour",
    packNote: "8 कि.ग्रा. उपलब्ध",
    image: IMG.baking_powder,
    keywords: "corn flour corn starch powder"
  },
  {
    id: 510,
    categoryId: 5,
    subcategoryId: null,
    hindiName: "सत्तू पाउडर",
    englishName: "Roasted Gram Sattu Powder",
    packNote: "उपलब्ध",
    image: IMG.besan,
    keywords: "sattu chana sattu sharbat roasted gram"
  },
  {
    id: 511,
    categoryId: 5,
    subcategoryId: null,
    hindiName: "मक्का आटा",
    englishName: "Yellow Maize Flour",
    packNote: "8 किलो उपलब्ध",
    image: IMG.besan,
    keywords: "makka aata maize corn flour yellow roti"
  },
  {
    id: 512,
    categoryId: 5,
    subcategoryId: null,
    hindiName: "बाजरा आटा",
    englishName: "Pearl Millet Flour (Bajra Flour)",
    packNote: "उपलब्ध",
    image: IMG.atta_wheat,
    keywords: "bajra flour pearl millet winter flour"
  },
  {
    id: 513,
    categoryId: 5,
    subcategoryId: null,
    hindiName: "राइस आटा",
    englishName: "Fine Rice Flour",
    packNote: "उपलब्ध",
    image: IMG.atta_wheat,
    keywords: "rice flour chawal ka atta dosa"
  },

  // 6. ब्रेड, बेकरी, पाव व बिस्कुट
  {
    id: 601,
    categoryId: 6,
    subcategoryId: "6.1",
    hindiName: "चौकोर पाव (पाव भाजी)",
    englishName: "Square Pav Bhaji Pav",
    packNote: "1000 पीस उपलब्ध",
    image: IMG.pav_buns,
    keywords: "pav bhaji square pav bread buns fresh"
  },
  {
    id: 602,
    categoryId: 6,
    subcategoryId: "6.1",
    hindiName: "बर्गर पाव गोल / बर्गर",
    englishName: "Round Burger Buns",
    packNote: "उपलब्ध",
    image: IMG.pav_buns,
    keywords: "burger bun round pav burger"
  },
  {
    id: 603,
    categoryId: 6,
    subcategoryId: "6.1",
    hindiName: "कुलचा पाव",
    englishName: "Soft Kulcha Buns / Bread",
    packNote: "उपलब्ध",
    image: IMG.pav_buns,
    keywords: "kulcha bun soft bread chhole kulche"
  },
  {
    id: 604,
    categoryId: 6,
    subcategoryId: "6.2",
    hindiName: "ब्रेड / ब्रेड बड़ा",
    englishName: "Large Sandwich Bread Loaf",
    packNote: "उपलब्ध",
    image: IMG.bread_loaf,
    keywords: "bread sandwich loaf bada bread sliced"
  },
  {
    id: 605,
    categoryId: 6,
    subcategoryId: "6.2",
    hindiName: "ब्रेड सैण्डविच",
    englishName: "Sliced Sandwich Bread",
    packNote: "उपलब्ध",
    image: IMG.bread_loaf,
    keywords: "sandwich bread white bread loaf"
  },
  {
    id: 606,
    categoryId: 6,
    subcategoryId: "6.2",
    hindiName: "गार्लिक ब्रेड",
    englishName: "Garlic Herb Bread Loaf",
    packNote: "उपलब्ध",
    image: IMG.bread_loaf,
    keywords: "garlic bread herb loaf"
  },
  {
    id: 607,
    categoryId: 6,
    subcategoryId: "6.2",
    hindiName: "इटैलियन व्हाइट ब्रेड",
    englishName: "Italian White Bread",
    packNote: "उपलब्ध",
    image: IMG.bread_loaf,
    keywords: "italian white bread bakery"
  },
  {
    id: 608,
    categoryId: 6,
    subcategoryId: "6.2",
    hindiName: "ब्राउन ब्रेड",
    englishName: "Whole Wheat Brown Bread",
    packNote: "उपलब्ध",
    image: IMG.bread_loaf,
    keywords: "brown bread whole wheat healthy"
  },
  {
    id: 609,
    categoryId: 6,
    subcategoryId: "6.2",
    hindiName: "ब्रेड क्रम्स",
    englishName: "Dry Bread Crumbs",
    packNote: "8 किलो उपलब्ध",
    image: IMG.bread_loaf,
    keywords: "bread crumbs coating crumbs"
  },
  {
    id: 610,
    categoryId: 6,
    subcategoryId: "6.2",
    hindiName: "सोयाबीन क्रम्ब्स",
    englishName: "Soya Bread Crumbs / Soyaben Crumb",
    packNote: "उपलब्ध",
    image: IMG.bread_loaf,
    keywords: "soya crumbs soyaben bread crumbs"
  },
  {
    id: 611,
    categoryId: 6,
    subcategoryId: "6.3",
    hindiName: "सूप स्टिक",
    englishName: "Crispy Soup Breadsticks",
    packNote: "उपलब्ध",
    image: IMG.rusk_toast,
    keywords: "soup stick bread sticks crispy"
  },
  {
    id: 612,
    categoryId: 6,
    subcategoryId: "6.3",
    hindiName: "खारी",
    englishName: "Flaky Puff Pastry (Khari Biscuits)",
    packNote: "उपलब्ध",
    image: IMG.rusk_toast,
    keywords: "khari biscuit puff pastry chai khari"
  },
  {
    id: 613,
    categoryId: 6,
    subcategoryId: "6.3",
    hindiName: "टोस्ट",
    englishName: "Crunchy Toast / Rusk",
    packNote: "उपलब्ध",
    image: IMG.rusk_toast,
    keywords: "toast rusk crunchy suji toast chai"
  },
  {
    id: 614,
    categoryId: 6,
    subcategoryId: "6.3",
    hindiName: "बेकरी बिस्किट मीठा",
    englishName: "Sweet Bakery Cookies",
    packNote: "उपलब्ध",
    image: IMG.rusk_toast,
    keywords: "bakery biscuit sweet cookies"
  },
  {
    id: 615,
    categoryId: 6,
    subcategoryId: "6.3",
    hindiName: "बेकरी बिस्किट नमकीन",
    englishName: "Salted Cumin / Butter Cookies",
    packNote: "उपलब्ध",
    image: IMG.rusk_toast,
    keywords: "namkeen biscuit cumin butter cookies jeera"
  },
  {
    id: 616,
    categoryId: 6,
    subcategoryId: "6.3",
    hindiName: "पारले बिस्कुट",
    englishName: "Parle-G Biscuits",
    packNote: "6 पैकेट उपलब्ध",
    image: IMG.rusk_toast,
    keywords: "parle g biscuits glucose biscuit tea"
  },
  {
    id: 617,
    categoryId: 6,
    subcategoryId: "6.3",
    hindiName: "पिज्जा बेस 8 इंच",
    englishName: "8-Inch Ready Pizza Base",
    packNote: "200 पीस उपलब्ध",
    image: IMG.pizza_base,
    keywords: "pizza base 8 inch ready crust bakery"
  },

  // 7. मसाले, जड़ी-बूटियां व सीज़निंग
  {
    id: 701,
    categoryId: 7,
    subcategoryId: "7.1",
    hindiName: "MDH हल्दी पीसी",
    englishName: "MDH Turmeric Powder",
    packNote: "1 किलो उपलब्ध",
    image: IMG.turmeric,
    keywords: "mdh haldi peesi turmeric powder ground pure"
  },
  {
    id: 702,
    categoryId: 7,
    subcategoryId: "7.1",
    hindiName: "MDH धनिया पीसी",
    englishName: "MDH Coriander Powder",
    packNote: "1 किलो उपलब्ध",
    image: IMG.coriander,
    keywords: "mdh dhaniya peesi coriander powder ground"
  },
  {
    id: 703,
    categoryId: 7,
    subcategoryId: "7.1",
    hindiName: "MDH लाल मिर्च पीसी",
    englishName: "MDH Red Chilli Powder",
    packNote: "1.5 किलो उपलब्ध",
    image: IMG.chilli_powder,
    keywords: "mdh lal mirch peesi red chilli powder spicy"
  },
  {
    id: 704,
    categoryId: 7,
    subcategoryId: "7.1",
    hindiName: "MDH लाल मिर्च कुटा",
    englishName: "Crushed Coarse Red Chilli Flakes",
    packNote: "उपलब्ध",
    image: IMG.chilli_powder,
    keywords: "mdh kuta chilli flakes crushed red chilli"
  },
  {
    id: 705,
    categoryId: 7,
    subcategoryId: "7.1",
    hindiName: "MDH पीली मिर्च पिसी",
    englishName: "Ground Yellow Chilli Powder",
    packNote: "उपलब्ध",
    image: IMG.turmeric,
    keywords: "peeli mirch ground yellow chilli powder"
  },
  {
    id: 706,
    categoryId: 7,
    subcategoryId: "7.1",
    hindiName: "MDH जीरा पीसी",
    englishName: "Ground Roasted Cumin Powder",
    packNote: "500 ग्राम उपलब्ध",
    image: IMG.cumin,
    keywords: "mdh jeera peesi ground roasted cumin bhuna jeera"
  },
  {
    id: 707,
    categoryId: 7,
    subcategoryId: "7.1",
    hindiName: "MDH काली मिर्च पीसी",
    englishName: "Ground Black Pepper Powder",
    packNote: "300 ग्राम उपलब्ध",
    image: IMG.black_pepper,
    keywords: "mdh kali mirch ground black pepper powder"
  },
  {
    id: 708,
    categoryId: 7,
    subcategoryId: "7.1",
    hindiName: "MDH सोंठ पीसी",
    englishName: "Dry Ginger Powder (Sonth)",
    packNote: "250 ग्रा. उपलब्ध",
    image: IMG.turmeric,
    keywords: "mdh sonth dry ginger powder peesi"
  },
  {
    id: 709,
    categoryId: 7,
    subcategoryId: "7.1",
    hindiName: "MDH व्हाईट पेपर मसाला पीसी",
    englishName: "White Pepper Powder",
    packNote: "200 ग्राम / 500 ग्रा.",
    image: IMG.baking_powder,
    keywords: "mdh white pepper safed mirch powder"
  },
  {
    id: 710,
    categoryId: 7,
    subcategoryId: "7.1",
    hindiName: "MDH खटाई पीसी",
    englishName: "Dry Mango Powder (Amchur)",
    packNote: "200 ग्राम उपलब्ध",
    image: IMG.turmeric,
    keywords: "mdh khatai amchur dry mango powder"
  },
  {
    id: 711,
    categoryId: 7,
    subcategoryId: "7.1",
    hindiName: "इलायची पीसी",
    englishName: "Pure Green Cardamom Powder",
    packNote: "250 ग्राम उपलब्ध",
    image: IMG.cardamom,
    keywords: "elaichi peesi green cardamom powder pure"
  },
  {
    id: 712,
    categoryId: 7,
    subcategoryId: "7.1",
    hindiName: "सौंफ पीसी / महीन सौंफ पीसी",
    englishName: "Ground Fennel Powder",
    packNote: "500 ग्रा. उपलब्ध",
    image: IMG.coriander,
    keywords: "saunf peesi fennel powder mahin"
  },
  {
    id: 713,
    categoryId: 7,
    subcategoryId: "7.1",
    hindiName: "अनार दाना पाउडर",
    englishName: "Ground Pomegranate Powder",
    packNote: "उपलब्ध",
    image: IMG.chilli_powder,
    keywords: "anar dana powder pomegranate sour"
  },
  {
    id: 714,
    categoryId: 7,
    subcategoryId: "7.1",
    hindiName: "धोइया सूखी पीसी",
    englishName: "Ground Washed Lentil Flour / Masala",
    packNote: "उपलब्ध",
    image: IMG.atta_wheat,
    keywords: "dhoya sukhi peesi dal powder"
  },
  {
    id: 715,
    categoryId: 7,
    subcategoryId: "7.1",
    hindiName: "देगी मिर्च",
    englishName: "MDH Deggi Mirch (Natural Colour)",
    packNote: "2 फाइल / कार्टन",
    image: IMG.chilli_powder,
    keywords: "deggi mirch mdh red colour rich curry"
  },
  {
    id: 716,
    categoryId: 7,
    subcategoryId: "7.1",
    hindiName: "कश्मीरी मिर्च / महाराजा कश्मीरी पाउडर",
    englishName: "Kashmiri Mild Chilli Powder",
    packNote: "5 पैकेट / 2 पैकेट",
    image: IMG.chilli_powder,
    keywords: "kashmiri mirch maharaja powder bright red mild"
  },

  // 7.2 साबुत गरम मसाले व बीज
  {
    id: 717,
    categoryId: 7,
    subcategoryId: "7.2",
    hindiName: "नागकेसर",
    englishName: "Ceylon Ironwood Buds (Naag Kesar)",
    packNote: "उपलब्ध",
    image: IMG.star_anise,
    keywords: "naag kesar nagkesar ayurvedic whole spice"
  },
  {
    id: 718,
    categoryId: 7,
    subcategoryId: "7.2",
    hindiName: "तेजपाल",
    englishName: "Tejpal Leaves / Cinnamon Leaves",
    packNote: "उपलब्ध",
    image: IMG.bay_leaf,
    keywords: "tejpal leaves whole spice cinnamon leaves"
  },
  {
    id: 719,
    categoryId: 7,
    subcategoryId: "7.2",
    hindiName: "बादियान का फूल / चक्र फूल",
    englishName: "Star Anise (Vadiyan Phool)",
    packNote: "25 ग्राम उपलब्ध",
    image: IMG.star_anise,
    keywords: "badiyan phool chakra phool star anise biryani"
  },
  {
    id: 720,
    categoryId: 7,
    subcategoryId: "7.2",
    hindiName: "लाल मिर्च खड़ा / साबुत लहरी",
    englishName: "Whole Dry Red Chillies",
    packNote: "500 ग्रा. / 250 ग्राम",
    image: IMG.red_chillies,
    keywords: "lal mirch khada whole red chilli sukhi mirch"
  },
  {
    id: 721,
    categoryId: 7,
    subcategoryId: "7.2",
    hindiName: "कश्मीरी लाल मिर्च खड़ा",
    englishName: "Whole Dry Kashmiri Red Chillies",
    packNote: "100 ग्राम उपलब्ध",
    image: IMG.red_chillies,
    keywords: "kashmiri lal mirch khada whole dried chillies"
  },
  {
    id: 722,
    categoryId: 7,
    subcategoryId: "7.2",
    hindiName: "पीली मिर्च खड़ा",
    englishName: "Whole Dried Yellow Chillies",
    packNote: "उपलब्ध",
    image: IMG.red_chillies,
    keywords: "peeli mirch khada whole yellow chilli"
  },
  {
    id: 723,
    categoryId: 7,
    subcategoryId: "7.2",
    hindiName: "धनिया सूखा खड़ा",
    englishName: "Whole Coriander Seeds",
    packNote: "150 ग्राम उपलब्ध",
    image: IMG.coriander,
    keywords: "dhaniya sukha khada whole coriander seeds"
  },
  {
    id: 724,
    categoryId: 7,
    subcategoryId: "7.2",
    hindiName: "जीरा खड़ा / साबुत",
    englishName: "Whole Cumin Seeds",
    packNote: "1.5 कि.ग्रा. / 1 किलो",
    image: IMG.cumin,
    keywords: "jeera khada sabut whole cumin seeds tadka"
  },
  {
    id: 725,
    categoryId: 7,
    subcategoryId: "7.2",
    hindiName: "साहजीरा / शाहजीरा",
    englishName: "Caraway Seeds (Shahi Jeera)",
    packNote: "50 ग्राम उपलब्ध",
    image: IMG.cumin,
    keywords: "shahi jeera caraway seeds biryani spice"
  },
  {
    id: 726,
    categoryId: 7,
    subcategoryId: "7.2",
    hindiName: "बड़ी इलायची / बड़ी लाची",
    englishName: "Black Cardamom",
    packNote: "500 ग्राम / 200 ग्रा.",
    image: IMG.cardamom,
    keywords: "badi elaichi lachi black cardamom garam masala"
  },
  {
    id: 727,
    categoryId: 7,
    subcategoryId: "7.2",
    hindiName: "छोटी इलायची / छोटी लाची",
    englishName: "Green Cardamom Pods",
    packNote: "500 ग्राम उपलब्ध",
    image: IMG.cardamom,
    keywords: "chhoti elaichi green cardamom pods aromatic"
  },
  {
    id: 728,
    categoryId: 7,
    subcategoryId: "7.2",
    hindiName: "काली मिर्च साबुत",
    englishName: "Whole Black Peppercorns",
    packNote: "500 ग्राम उपलब्ध",
    image: IMG.black_pepper,
    keywords: "kali mirch sabut whole black peppercorns"
  },
  {
    id: 729,
    categoryId: 7,
    subcategoryId: "7.2",
    hindiName: "लौंग",
    englishName: "Whole Cloves (Long)",
    packNote: "150 ग्राम उपलब्ध",
    image: IMG.cloves,
    keywords: "laung clove whole cloves aromatic"
  },
  {
    id: 730,
    categoryId: 7,
    subcategoryId: "7.2",
    hindiName: "जावित्री",
    englishName: "Whole Mace Flowers",
    packNote: "100 ग्राम उपलब्ध",
    image: IMG.cinnamon,
    keywords: "javitri mace whole flower biryani"
  },
  {
    id: 731,
    categoryId: 7,
    subcategoryId: "7.2",
    hindiName: "जायफल",
    englishName: "Whole Nutmeg (Jaiphal / Jaifar)",
    packNote: "5 पीस उपलब्ध",
    image: IMG.cinnamon,
    keywords: "jaiphal jaifar whole nutmeg pieces"
  },
  {
    id: 732,
    categoryId: 7,
    subcategoryId: "7.2",
    hindiName: "दालचीनी / कल्मी तेज",
    englishName: "Cinnamon Sticks (Dalchini)",
    packNote: "50 ग्राम + 50 ग्राम",
    image: IMG.cinnamon,
    keywords: "dalchini kalmi tej cinnamon sticks true cinnamon"
  },
  {
    id: 733,
    categoryId: 7,
    subcategoryId: "7.2",
    hindiName: "तेज पत्ता",
    englishName: "Indian Bay Leaves",
    packNote: "100 ग्राम उपलब्ध",
    image: IMG.bay_leaf,
    keywords: "tej patta bay leaf dried leaves tadka"
  },
  {
    id: 734,
    categoryId: 7,
    subcategoryId: "7.2",
    hindiName: "कबाब चीनी",
    englishName: "Allspice / Cubeb Berries",
    packNote: "उपलब्ध",
    image: IMG.black_pepper,
    keywords: "kabab cheeni allspice cubeb berries"
  },
  {
    id: 735,
    categoryId: 7,
    subcategoryId: "7.2",
    hindiName: "छड़ीला / छबीला",
    englishName: "Stone Flower / Kalpasi / Chhadila",
    packNote: "उपलब्ध",
    image: IMG.bay_leaf,
    keywords: "chhadila chhabila stone flower kalpasi potli masala"
  },
  {
    id: 736,
    categoryId: 7,
    subcategoryId: "7.2",
    hindiName: "अजवाइन",
    englishName: "Carom Seeds (Ajwain)",
    packNote: "250 ग्रा. उपलब्ध",
    image: IMG.ajwain,
    keywords: "ajwain carom seeds pachak digestive"
  },
  {
    id: 737,
    categoryId: 7,
    subcategoryId: "7.2",
    hindiName: "मंगरैल",
    englishName: "Nigella Seeds (Kalonji)",
    packNote: "100 ग्रा. उपलब्ध",
    image: IMG.cumin,
    keywords: "mangarail kalonji nigella black onion seeds"
  },
  {
    id: 738,
    categoryId: 7,
    subcategoryId: "7.2",
    hindiName: "पंचफोड़न",
    englishName: "Panch Phoron 5-Spice Blend",
    packNote: "200 ग्रा. उपलब्ध",
    image: IMG.cumin,
    keywords: "panch phoron five spices blend bengali tadka"
  },
  {
    id: 739,
    categoryId: 7,
    subcategoryId: "7.2",
    hindiName: "मेथी दाना",
    englishName: "Fenugreek Seeds (Methi)",
    packNote: "उपलब्ध",
    image: IMG.ajwain,
    keywords: "methi dana fenugreek seeds yellow pickle spice"
  },
  {
    id: 740,
    categoryId: 7,
    subcategoryId: "7.2",
    hindiName: "सौंफ हरा (मोटा व महीन)",
    englishName: "Green Fennel Seeds",
    packNote: "200 ग्रा. उपलब्ध",
    image: IMG.coriander,
    keywords: "saunf hara fennel seeds green sweet mota mahin"
  },
  {
    id: 741,
    categoryId: 7,
    subcategoryId: "7.2",
    hindiName: "राई (बनारसी, काली, पीली)",
    englishName: "Mustard Seeds (Banarasi, Black, Yellow)",
    packNote: "100 ग्रा. उपलब्ध",
    image: IMG.cumin,
    keywords: "rai banarasi kali peeli mustard seeds sarson"
  },
  {
    id: 742,
    categoryId: 7,
    subcategoryId: "7.2",
    hindiName: "अनार दाना साबुत",
    englishName: "Whole Dried Pomegranate Seeds",
    packNote: "150 ग्रा. उपलब्ध",
    image: IMG.chilli_powder,
    keywords: "anar dana sabut whole dried seeds"
  },
  {
    id: 743,
    categoryId: 7,
    subcategoryId: "7.2",
    hindiName: "पोस्ता दाना",
    englishName: "Poppy Seeds (Khus Khus)",
    packNote: "उपलब्ध",
    image: IMG.baking_powder,
    keywords: "posta dana khus khus poppy seeds korma gravy"
  },
  {
    id: 744,
    categoryId: 7,
    subcategoryId: "7.2",
    hindiName: "सफेद तिल",
    englishName: "White Sesame Seeds",
    packNote: "500 ग्रा. उपलब्ध",
    image: IMG.baking_powder,
    keywords: "safed til white sesame seeds pooja sweets"
  },
  {
    id: 745,
    categoryId: 7,
    subcategoryId: "7.2",
    hindiName: "कसूरी मेथी",
    englishName: "Dry Kasoori Methi",
    packNote: "5 पैकेट / 1 फाइल",
    image: IMG.bay_leaf,
    keywords: "kasoori methi kasuri dry fenugreek leaves aroma"
  },

  // 7.3 हींग की किस्में
  {
    id: 746,
    categoryId: 7,
    subcategoryId: "7.3",
    hindiName: "हींग",
    englishName: "Pure Lump Asafoetida",
    packNote: "250 ग्रा. उपलब्ध",
    image: IMG.hing,
    keywords: "hing pure lump asafoetida shuddh heeng"
  },
  {
    id: 747,
    categoryId: 7,
    subcategoryId: "7.3",
    hindiName: "हींग पाउडर",
    englishName: "Compounded Hing Powder",
    packNote: "200 ग्रा. उपलब्ध",
    image: IMG.hing,
    keywords: "hing powder compounded asafoetida tadka"
  },
  {
    id: 748,
    categoryId: 7,
    subcategoryId: "7.3",
    hindiName: "हींग रजवाड़ी",
    englishName: "Rajwadi Royal Asafoetida",
    packNote: "उपलब्ध",
    image: IMG.hing,
    keywords: "rajwadi hing royal asafoetida"
  },
  {
    id: 749,
    categoryId: 7,
    subcategoryId: "7.3",
    hindiName: "हींग लीलाधर",
    englishName: "Leeladhar Premium Asafoetida",
    packNote: "उपलब्ध",
    image: IMG.hing,
    keywords: "leeladhar hing premium brand"
  },

  // 7.4 ब्लेंडेड, करी, चाट व वेस्टर्न मसाले
  {
    id: 750,
    categoryId: 7,
    subcategoryId: "7.4",
    hindiName: "किचन किंग (एम.डी.एच)",
    englishName: "MDH Kitchen King",
    packNote: "5 डिब्बा / 2 फाइल",
    image: IMG.kitchen_king,
    keywords: "mdh kitchen king all rounder masala sabji"
  },
  {
    id: 751,
    categoryId: 7,
    subcategoryId: "7.4",
    hindiName: "गरम मसाला (एम.डी.एच)",
    englishName: "MDH Garam Masala",
    packNote: "4 डिब्बा / 1 फाइल",
    image: IMG.kitchen_king,
    keywords: "mdh garam masala blended aromatic"
  },
  {
    id: 752,
    categoryId: 7,
    subcategoryId: "7.4",
    hindiName: "मीट मसाला (एम.डी.एच)",
    englishName: "MDH Meat Masala (Veg Blend)",
    packNote: "4 डिब्बा / 2 फाइल",
    image: IMG.kitchen_king,
    keywords: "mdh meat masala veg blend gravy"
  },
  {
    id: 753,
    categoryId: 7,
    subcategoryId: "7.4",
    hindiName: "चंकी चाट मसाला (एम.डी.एच)",
    englishName: "MDH Chunky Chat Masala",
    packNote: "2 कि.ग्रा. / 10 पै.",
    image: IMG.kitchen_king,
    keywords: "mdh chunky chat masala tangy fruit chaat"
  },
  {
    id: 754,
    categoryId: 7,
    subcategoryId: "7.4",
    hindiName: "छोला मसाला",
    englishName: "MDH Chhole Masala",
    packNote: "4 पैकेट उपलब्ध",
    image: IMG.kitchen_king,
    keywords: "chhole masala mdh chana bhatura"
  },
  {
    id: 755,
    categoryId: 7,
    subcategoryId: "7.4",
    hindiName: "चना मसाला",
    englishName: "Chana Masala",
    packNote: "4 पैकेट / 2 पैकेट",
    image: IMG.kitchen_king,
    keywords: "chana masala spicy gravy"
  },
  {
    id: 756,
    categoryId: 7,
    subcategoryId: "7.4",
    hindiName: "सब्जी मसाला",
    englishName: "MDH Sabji Masala",
    packNote: "उपलब्ध",
    image: IMG.kitchen_king,
    keywords: "sabji masala mdh daily curry"
  },
  {
    id: 757,
    categoryId: 7,
    subcategoryId: "7.4",
    hindiName: "कचौड़ी मसाला",
    englishName: "Special Kachori Masala",
    packNote: "1 किलो उपलब्ध",
    image: IMG.kitchen_king,
    keywords: "kachori masala khasta stuffing"
  },
  {
    id: 758,
    categoryId: 7,
    subcategoryId: "7.4",
    hindiName: "तवा फ्राई मसाला",
    englishName: "Tawa Fry Masala",
    packNote: "5 पैकेट उपलब्ध",
    image: IMG.kitchen_king,
    keywords: "tawa fry masala crisp vegetables"
  },
  {
    id: 759,
    categoryId: 7,
    subcategoryId: "7.4",
    hindiName: "दाल मखनी मसाला",
    englishName: "Dal Makhani Masala",
    packNote: "2 पैकेट उपलब्ध",
    image: IMG.kitchen_king,
    keywords: "dal makhani masala creamy restaurant dal"
  },
  {
    id: 760,
    categoryId: 7,
    subcategoryId: "7.4",
    hindiName: "शाही पनीर मसाला",
    englishName: "Shahi Paneer Masala",
    packNote: "उपलब्ध",
    image: IMG.kitchen_king,
    keywords: "shahi paneer masala rich gravy"
  },
  {
    id: 761,
    categoryId: 7,
    subcategoryId: "7.4",
    hindiName: "कड़ाही पनीर मसाला",
    englishName: "Kadhai Paneer Masala",
    packNote: "उपलब्ध",
    image: IMG.kitchen_king,
    keywords: "kadhai paneer masala capsicum spicy"
  },
  {
    id: 762,
    categoryId: 7,
    subcategoryId: "7.4",
    hindiName: "दम आलू मसाला",
    englishName: "Dum Aloo Masala",
    packNote: "उपलब्ध",
    image: IMG.kitchen_king,
    keywords: "dum aloo masala kashmiri style"
  },
  {
    id: 763,
    categoryId: 7,
    subcategoryId: "7.4",
    hindiName: "राजमा मसाला",
    englishName: "Rajma Masala",
    packNote: "उपलब्ध",
    image: IMG.kitchen_king,
    keywords: "rajma masala punjabi style"
  },
  {
    id: 764,
    categoryId: 7,
    subcategoryId: "7.4",
    hindiName: "पावभाजी मसाला",
    englishName: "Pav Bhaji Masala",
    packNote: "7 पैकेट उपलब्ध",
    image: IMG.kitchen_king,
    keywords: "pav bhaji masala bombay taste"
  },
  {
    id: 765,
    categoryId: 7,
    subcategoryId: "7.4",
    hindiName: "साम्भर मसाला",
    englishName: "Sambar Masala",
    packNote: "7 पैकेट उपलब्ध",
    image: IMG.kitchen_king,
    keywords: "sambar masala south indian idli dosa"
  },
  {
    id: 766,
    categoryId: 7,
    subcategoryId: "7.4",
    hindiName: "तंदूरी टिक्का मसाला",
    englishName: "Tandoori Tikka Masala",
    packNote: "1 कि.ग्रा. उपलब्ध",
    image: IMG.kitchen_king,
    keywords: "tandoori tikka masala paneer tikka"
  },
  {
    id: 767,
    categoryId: 7,
    subcategoryId: "7.4",
    hindiName: "स्टफ पराठा मसाला",
    englishName: "Stuffed Paratha Masala",
    packNote: "उपलब्ध",
    image: IMG.kitchen_king,
    keywords: "stuffed paratha masala aloo paneer paratha"
  },
  {
    id: 768,
    categoryId: 7,
    subcategoryId: "7.4",
    hindiName: "चाऊमीन मसाला",
    englishName: "Chowmein Noodle Seasoning",
    packNote: "उपलब्ध",
    image: IMG.kitchen_king,
    keywords: "chowmein masala noodle seasoning desi chinese"
  },
  {
    id: 769,
    categoryId: 7,
    subcategoryId: "7.4",
    hindiName: "पास्ता मसाला",
    englishName: "Pasta Seasoning Masala",
    packNote: "उपलब्ध",
    image: IMG.kitchen_king,
    keywords: "pasta masala desi pasta seasoning"
  },
  {
    id: 770,
    categoryId: 7,
    subcategoryId: "7.4",
    hindiName: "पिज्जा मसाला",
    englishName: "Pizza Seasoning Spice",
    packNote: "उपलब्ध",
    image: IMG.kitchen_king,
    keywords: "pizza masala spice mix herb"
  },
  {
    id: 771,
    categoryId: 7,
    subcategoryId: "7.4",
    hindiName: "फ्राइज मसाला",
    englishName: "Peri Peri French Fries Masala",
    packNote: "उपलब्ध",
    image: IMG.kitchen_king,
    keywords: "french fries masala peri peri sprinkle"
  },
  {
    id: 772,
    categoryId: 7,
    subcategoryId: "7.4",
    hindiName: "चिकन मसाला (वेज ब्लेन्ड)",
    englishName: "Chicken Style Veg Spice Mix",
    packNote: "उपलब्ध",
    image: IMG.kitchen_king,
    keywords: "chicken style veg spice mix curry"
  },
  {
    id: 773,
    categoryId: 7,
    subcategoryId: "7.4",
    hindiName: "करी मसाला",
    englishName: "Indian Curry Powder",
    packNote: "उपलब्ध",
    image: IMG.kitchen_king,
    keywords: "curry powder curry masala"
  },
  {
    id: 774,
    categoryId: 7,
    subcategoryId: "7.4",
    hindiName: "पेरीपेरी मसाला",
    englishName: "Peri-Peri Dry Seasoning",
    packNote: "1 कि.ग्रा. उपलब्ध",
    image: IMG.chilli_powder,
    keywords: "peri peri seasoning dry spicy"
  },
  {
    id: 775,
    categoryId: 7,
    subcategoryId: "7.4",
    hindiName: "ओरीगेनो",
    englishName: "Dry Oregano Herb",
    packNote: "1 कि.ग्रा. उपलब्ध",
    image: IMG.bay_leaf,
    keywords: "oregano herb dry pizza seasoning"
  },
  {
    id: 776,
    categoryId: 7,
    subcategoryId: "7.4",
    hindiName: "चिली फलैक्स",
    englishName: "Red Chilli Flakes",
    packNote: "1 कि.ग्रा. उपलब्ध",
    image: IMG.chilli_powder,
    keywords: "chilli flakes red pizza topping"
  },
  {
    id: 777,
    categoryId: 7,
    subcategoryId: "7.4",
    hindiName: "रायता मसाला",
    englishName: "Raita Spices",
    packNote: "उपलब्ध",
    image: IMG.cumin,
    keywords: "raita masala boondi curd spice"
  },
  {
    id: 778,
    categoryId: 7,
    subcategoryId: "7.4",
    hindiName: "दही बड़ा मसाला",
    englishName: "Dahi Vada Masala",
    packNote: "उपलब्ध",
    image: IMG.cumin,
    keywords: "dahi vada masala chatpata bhalla"
  },
  {
    id: 779,
    categoryId: 7,
    subcategoryId: "7.4",
    hindiName: "जलजीरा मसाला",
    englishName: "Jaljeera Powder",
    packNote: "10 पैकेट उपलब्ध",
    image: IMG.cumin,
    keywords: "jaljeera masala refreshing summer digestive"
  },
  {
    id: 780,
    categoryId: 7,
    subcategoryId: "7.4",
    hindiName: "टी-मसाला",
    englishName: "Chai Masala",
    packNote: "2 पैकेट उपलब्ध",
    image: IMG.cardamom,
    keywords: "chai masala tea spice elaichi adrak laung"
  },

  // 7.5 नमक व स्वाद वर्धक
  {
    id: 781,
    categoryId: 7,
    subcategoryId: "7.5",
    hindiName: "टाटा नमक / टाटा नमक पीसी",
    englishName: "Tata Iodized Salt",
    packNote: "20 पैकेट / 7 कि.ग्रा.",
    image: IMG.salt,
    keywords: "tata namak iodized salt desh ka namak"
  },
  {
    id: 782,
    categoryId: 7,
    subcategoryId: "7.5",
    hindiName: "काला नमक / काला नमक पीसी",
    englishName: "Black Salt (Kala Namak)",
    packNote: "5 कि.ग्रा. उपलब्ध",
    image: IMG.salt,
    keywords: "kala namak black salt digestive chaat salt"
  },
  {
    id: 783,
    categoryId: 7,
    subcategoryId: "7.5",
    hindiName: "सेंधा नमक पीसी",
    englishName: "Rock Salt (Sendha Namak for Fasting)",
    packNote: "उपलब्ध",
    image: IMG.salt,
    keywords: "sendha namak rock salt vrat fasting salt pure"
  },
  {
    id: 784,
    categoryId: 7,
    subcategoryId: "7.5",
    hindiName: "खड़ा नमक",
    englishName: "Whole Unrefined Crystal Rock Salt",
    packNote: "उपलब्ध",
    image: IMG.salt,
    keywords: "khada namak crystal salt unrefined"
  },
  {
    id: 785,
    categoryId: 7,
    subcategoryId: "7.5",
    hindiName: "अजीनो मोटो",
    englishName: "Ajinomoto (MSG)",
    packNote: "2 कि.ग्रा. / 500 ग्रा. / 200 ग्राम",
    image: IMG.salt,
    keywords: "ajinomoto msg monosodium glutamate flavor enhancer"
  },

  // 8. पास्ता, नूडल्स, सॉस, पेस्ट व सिरका
  {
    id: 801,
    categoryId: 8,
    subcategoryId: "8.1",
    hindiName: "पेन्ने पास्ता इंपोर्टेड",
    englishName: "Imported Penne Rigate Pasta",
    packNote: "15 कि.ग्रा. उपलब्ध",
    image: IMG.pasta,
    keywords: "penne pasta imported rigate italian"
  },
  {
    id: 802,
    categoryId: 8,
    subcategoryId: "8.1",
    hindiName: "फुसली पास्ता इंपोर्टेड",
    englishName: "Imported Fusilli Spiral Pasta",
    packNote: "15 कि.ग्रा. उपलब्ध",
    image: IMG.pasta,
    keywords: "fusilli pasta spiral pasta imported"
  },
  {
    id: 803,
    categoryId: 8,
    subcategoryId: "8.1",
    hindiName: "मैकरोनी पास्ता",
    englishName: "Elbow Macaroni Pasta",
    packNote: "उपलब्ध",
    image: IMG.pasta,
    keywords: "macaroni pasta elbow durum wheat"
  },
  {
    id: 804,
    categoryId: 8,
    subcategoryId: "8.1",
    hindiName: "रिंग पास्ता",
    englishName: "Ring Shaped Pasta",
    packNote: "उपलब्ध",
    image: IMG.pasta,
    keywords: "ring pasta round shape"
  },
  {
    id: 805,
    categoryId: 8,
    subcategoryId: "8.1",
    hindiName: "फारफाले पास्ता",
    englishName: "Farfalle (Bow Tie) Pasta",
    packNote: "उपलब्ध",
    image: IMG.pasta,
    keywords: "farfalle pasta bow tie shape"
  },
  {
    id: 806,
    categoryId: 8,
    subcategoryId: "8.1",
    hindiName: "कोचिग्लिए पास्ता",
    englishName: "Conchiglie (Shell) Pasta",
    packNote: "उपलब्ध",
    image: IMG.pasta,
    keywords: "conchiglie shell pasta"
  },
  {
    id: 807,
    categoryId: 8,
    subcategoryId: "8.1",
    hindiName: "जेमेली पास्ता",
    englishName: "Gemelli Twisted Pasta",
    packNote: "उपलब्ध",
    image: IMG.pasta,
    keywords: "gemelli twisted pasta"
  },
  {
    id: 808,
    categoryId: 8,
    subcategoryId: "8.1",
    hindiName: "स्पैगहेट्टी पास्ता",
    englishName: "Spaghetti Long Pasta",
    packNote: "उपलब्ध",
    image: IMG.pasta,
    keywords: "spaghetti long pasta noodles"
  },

  // 8.2 नूडल्स
  {
    id: 809,
    categoryId: 8,
    subcategoryId: "8.2",
    hindiName: "हक्का नूडल्स / नूडल्स हक्का",
    englishName: "Hakka Noodles",
    packNote: "30 कि.ग्रा. उपलब्ध",
    image: IMG.noodles,
    keywords: "hakka noodles chowmein chinese"
  },
  {
    id: 810,
    categoryId: 8,
    subcategoryId: "8.2",
    hindiName: "नूडल्स बारीक",
    englishName: "Thin Rice / Eggless Noodles",
    packNote: "उपलब्ध",
    image: IMG.noodles,
    keywords: "thin noodles rice eggless noodles"
  },
  {
    id: 811,
    categoryId: 8,
    subcategoryId: "8.2",
    hindiName: "नूडल्स फ्रोजन",
    englishName: "Pre-cooked Frozen Noodles",
    packNote: "उपलब्ध",
    image: IMG.noodles,
    keywords: "frozen noodles pre cooked"
  },
  {
    id: 812,
    categoryId: 8,
    subcategoryId: "8.2",
    hindiName: "व्हाइट शोभा नूडल्स",
    englishName: "White Shobha Noodles",
    packNote: "उपलब्ध",
    image: IMG.noodles,
    keywords: "shobha noodles white dry noodles"
  },
  {
    id: 813,
    categoryId: 8,
    subcategoryId: "8.2",
    hindiName: "ब्लैक शोभा नूडल्स",
    englishName: "Black Soba Buckwheat Noodles",
    packNote: "उपलब्ध",
    image: IMG.noodles,
    keywords: "black soba noodles buckwheat"
  },
  {
    id: 814,
    categoryId: 8,
    subcategoryId: "8.2",
    hindiName: "मैगी",
    englishName: "Nestle Maggi 2-Minute Noodles",
    packNote: "दुकान पर उपलब्ध",
    image: IMG.maggi,
    keywords: "maggi nestle 2 minute masala noodles"
  },

  // 8.3 सॉस, पेस्ट व डिप्स
  {
    id: 815,
    categoryId: 8,
    subcategoryId: "8.3",
    hindiName: "टोमैटो प्यूरी",
    englishName: "Canned Tomato Puree",
    packNote: "20 डिब्बा उपलब्ध",
    image: IMG.sauce_tomato,
    keywords: "tomato puree canned gravy base"
  },
  {
    id: 816,
    categoryId: 8,
    subcategoryId: "8.3",
    hindiName: "किसान टमाटर सॉस",
    englishName: "Kissan Tomato Ketchup",
    packNote: "20 बोतल उपलब्ध",
    image: IMG.sauce_tomato,
    keywords: "kissan tomato sauce ketchup bottle"
  },
  {
    id: 817,
    categoryId: 8,
    subcategoryId: "8.3",
    hindiName: "सोया सॉस",
    englishName: "Dark Soya Sauce",
    packNote: "8 बोतल उपलब्ध",
    image: IMG.vinegar,
    keywords: "soya sauce dark chinese sauce"
  },
  {
    id: 818,
    categoryId: 8,
    subcategoryId: "8.3",
    hindiName: "रेड चिल्ली सॉस",
    englishName: "Red Chilli Sauce",
    packNote: "10 बोतल उपलब्ध",
    image: IMG.sauce_chilli,
    keywords: "red chilli sauce spicy dip"
  },
  {
    id: 819,
    categoryId: 8,
    subcategoryId: "8.3",
    hindiName: "ग्रीन चिल्ली सॉस",
    englishName: "Green Chilli Sauce",
    packNote: "5 बोतल उपलब्ध",
    image: IMG.sauce_chilli,
    keywords: "green chilli sauce tangy spicy"
  },
  {
    id: 820,
    categoryId: 8,
    subcategoryId: "8.3",
    hindiName: "इटैलियन पिज्जा सॉस / पिज्जा टॉपिंग सॉस",
    englishName: "Italian Pizza Sauce",
    packNote: "8 कि.ग्रा. उपलब्ध",
    image: IMG.sauce_tomato,
    keywords: "pizza sauce pasta sauce topping"
  },
  {
    id: 821,
    categoryId: 8,
    subcategoryId: "8.3",
    hindiName: "अैराविटा सॉस",
    englishName: "Arrabbiata Spicy Pasta Sauce",
    packNote: "8 कि.ग्रा. उपलब्ध",
    image: IMG.sauce_tomato,
    keywords: "arrabbiata spicy sauce pasta"
  },
  {
    id: 822,
    categoryId: 8,
    subcategoryId: "8.3",
    hindiName: "ग्रीन पंच सॉस",
    englishName: "Green Punch Sauce",
    packNote: "5 कि.ग्रा. उपलब्ध",
    image: IMG.sauce_chilli,
    keywords: "green punch sauce mocktail"
  },
  {
    id: 823,
    categoryId: 8,
    subcategoryId: "8.3",
    hindiName: "सेजवान सॉस",
    englishName: "Schezwan Spicy Sauce",
    packNote: "उपलब्ध",
    image: IMG.sauce_chilli,
    keywords: "schezwan sauce spicy dip chinese"
  },
  {
    id: 824,
    categoryId: 8,
    subcategoryId: "8.3",
    hindiName: "टोबैस्को / टैबास्को पेपर सॉस",
    englishName: "Tabasco Red Pepper Sauce",
    packNote: "4 बोतल उपलब्ध",
    image: IMG.sauce_chilli,
    keywords: "tabasco sauce pepper sauce hot"
  },
  {
    id: 825,
    categoryId: 8,
    subcategoryId: "8.3",
    hindiName: "कैप्सिको / कैप्सिको रेड पेपर सॉस",
    englishName: "Capsico Chilli Sauce",
    packNote: "4 बोतल उपलब्ध",
    image: IMG.sauce_chilli,
    keywords: "capsico red pepper sauce"
  },
  {
    id: 826,
    categoryId: 8,
    subcategoryId: "8.3",
    hindiName: "पेरी पेरी सॉस",
    englishName: "Peri Peri Liquid Sauce",
    packNote: "उपलब्ध",
    image: IMG.sauce_chilli,
    keywords: "peri peri liquid sauce hot"
  },
  {
    id: 827,
    categoryId: 8,
    subcategoryId: "8.3",
    hindiName: "वोस्टर सॉस",
    englishName: "Worcestershire Sauce",
    packNote: "उपलब्ध",
    image: IMG.vinegar,
    keywords: "worcestershire sauce culinary"
  },
  {
    id: 828,
    categoryId: 8,
    subcategoryId: "8.3",
    hindiName: "ब्लैक बीन सॉस",
    englishName: "Chinese Black Bean Sauce",
    packNote: "उपलब्ध",
    image: IMG.vinegar,
    keywords: "black bean sauce chinese"
  },
  {
    id: 829,
    categoryId: 8,
    subcategoryId: "8.3",
    hindiName: "मेयोनेज / मोयोनेज",
    englishName: "Eggless Mayonnaise",
    packNote: "5 कि.ग्रा. उपलब्ध",
    image: IMG.mayonnaise,
    keywords: "eggless mayonnaise mayo burger spread"
  },
  {
    id: 830,
    categoryId: 8,
    subcategoryId: "8.3",
    hindiName: "रेड करी पेस्ट",
    englishName: "Thai Red Curry Paste",
    packNote: "उपलब्ध",
    image: IMG.sauce_chilli,
    keywords: "thai red curry paste"
  },
  {
    id: 831,
    categoryId: 8,
    subcategoryId: "8.3",
    hindiName: "ग्रीन करी पेस्ट",
    englishName: "Thai Green Curry Paste",
    packNote: "उपलब्ध",
    image: IMG.sauce_chilli,
    keywords: "thai green curry paste"
  },
  {
    id: 832,
    categoryId: 8,
    subcategoryId: "8.3",
    hindiName: "जिंजर पेस्ट",
    englishName: "Ginger Paste",
    packNote: "उपलब्ध",
    image: IMG.turmeric,
    keywords: "ginger paste adrak paste"
  },
  {
    id: 833,
    categoryId: 8,
    subcategoryId: "8.3",
    hindiName: "गार्लिक पेस्ट",
    englishName: "Garlic Paste",
    packNote: "उपलब्ध",
    image: IMG.baking_powder,
    keywords: "garlic paste lahsun paste"
  },

  // 8.4 सिरका, ऑलिव्स व जलापेनो
  {
    id: 834,
    categoryId: 8,
    subcategoryId: "8.4",
    hindiName: "वाइट विनेगर",
    englishName: "Synthetic White Vinegar",
    packNote: "10 बोतल उपलब्ध",
    image: IMG.vinegar,
    keywords: "white vinegar synthetic sirka chinese"
  },
  {
    id: 835,
    categoryId: 8,
    subcategoryId: "8.4",
    hindiName: "गन्ने का सिरका",
    englishName: "Traditional Sugarcane Vinegar",
    packNote: "उपलब्ध",
    image: IMG.vinegar,
    keywords: "ganne ka sirka desi sugarcane vinegar village"
  },
  {
    id: 836,
    categoryId: 8,
    subcategoryId: "8.4",
    hindiName: "ओनियन विनेगर",
    englishName: "Pickled Baby Onion Vinegar",
    packNote: "उपलब्ध",
    image: IMG.vinegar,
    keywords: "sirka pyaz onion vinegar restaurant"
  },
  {
    id: 837,
    categoryId: 8,
    subcategoryId: "8.4",
    hindiName: "कुकिंग वाइन",
    englishName: "Non-Alcoholic Culinary Cooking Wine",
    packNote: "उपलब्ध",
    image: IMG.vinegar,
    keywords: "culinary cooking wine non alcoholic"
  },
  {
    id: 838,
    categoryId: 8,
    subcategoryId: "8.4",
    hindiName: "जेलेपीनो / जलापेनो स्लाइस",
    englishName: "Pickled Jalapeno Slices",
    packNote: "3 बोतल उपलब्ध",
    image: IMG.pickle_mango,
    keywords: "jalapeno slices pickled green pizza"
  },
  {
    id: 839,
    categoryId: 8,
    subcategoryId: "8.4",
    hindiName: "ब्लैक ऑलिव स्लाइस",
    englishName: "Sliced Black Olives",
    packNote: "4 बोतल उपलब्ध",
    image: IMG.pickle_mango,
    keywords: "black olives sliced pizza topping"
  },
  {
    id: 840,
    categoryId: 8,
    subcategoryId: "8.4",
    hindiName: "ग्रीन ओलिव",
    englishName: "Whole / Pitted Green Olives",
    packNote: "उपलब्ध",
    image: IMG.pickle_mango,
    keywords: "green olives whole pitted"
  },

  // 9. तेल, घी व वसा
  {
    id: 901,
    categoryId: 9,
    subcategoryId: "9.1",
    hindiName: "रिफाइन्ड फार्च्यून / रिफाइंड ऑयल",
    englishName: "Fortune Refined Oil",
    packNote: "8 टीन / 3 टीन उपलब्ध",
    image: IMG.refined_oil,
    keywords: "fortune refined oil cooking soyabean tin"
  },
  {
    id: 902,
    categoryId: 9,
    subcategoryId: "9.1",
    hindiName: "सोयाबीन तेल",
    englishName: "Soybean Cooking Oil",
    packNote: "उपलब्ध",
    image: IMG.refined_oil,
    keywords: "soybean oil cooking oil"
  },
  {
    id: 903,
    categoryId: 9,
    subcategoryId: "9.1",
    hindiName: "तेल सरसों",
    englishName: "Pure Mustard Oil (Kacchi Ghani)",
    packNote: "2 टीन उपलब्ध",
    image: IMG.mustard_oil,
    keywords: "sarson tel mustard oil kacchi ghani pure yellow mustard"
  },
  {
    id: 904,
    categoryId: 9,
    subcategoryId: "9.1",
    hindiName: "मूंगफली का तेल",
    englishName: "Groundnut / Peanut Oil",
    packNote: "उपलब्ध",
    image: IMG.refined_oil,
    keywords: "peanut oil groundnut oil mungfali"
  },
  {
    id: 905,
    categoryId: 9,
    subcategoryId: "9.1",
    hindiName: "तेल सनफ्लावर",
    englishName: "Sunflower Refined Oil",
    packNote: "उपलब्ध",
    image: IMG.refined_oil,
    keywords: "sunflower oil refined light cooking"
  },
  {
    id: 906,
    categoryId: 9,
    subcategoryId: "9.1",
    hindiName: "नारियल का तेल",
    englishName: "Coconut Oil (Edible / Pure)",
    packNote: "उपलब्ध",
    image: IMG.refined_oil,
    keywords: "nariyal tel coconut oil edible pure"
  },
  {
    id: 907,
    categoryId: 9,
    subcategoryId: "9.1",
    hindiName: "ऑलिव ऑयल / ओलिव ऑयल",
    englishName: "Extra Virgin & Cooking Olive Oil",
    packNote: "3 बोतल उपलब्ध",
    image: IMG.refined_oil,
    keywords: "olive oil extra virgin cooking jaitun"
  },
  {
    id: 908,
    categoryId: 9,
    subcategoryId: "9.1",
    hindiName: "पाम ऑयल",
    englishName: "Palm Cooking Oil",
    packNote: "उपलब्ध",
    image: IMG.refined_oil,
    keywords: "palm oil cooking"
  },
  {
    id: 909,
    categoryId: 9,
    subcategoryId: "9.1",
    hindiName: "सेसमी आयल",
    englishName: "Toasted Sesame Oil (Til Oil)",
    packNote: "उपलब्ध",
    image: IMG.refined_oil,
    keywords: "sesame oil til oil toasted"
  },
  {
    id: 910,
    categoryId: 9,
    subcategoryId: "9.1",
    hindiName: "पूजा तिल का तेल",
    englishName: "Pooja Sesame Lamp Oil (Ritual Til Oil)",
    packNote: "उपलब्ध",
    image: IMG.refined_oil,
    keywords: "pooja til tel lamp diya ritual deepak"
  },
  {
    id: 911,
    categoryId: 9,
    subcategoryId: "9.2",
    hindiName: "घी देशी / अमूल देशी घी",
    englishName: "Pure Desi Ghee / Amul Ghee",
    packNote: "2 टीन / 1 टीन उपलब्ध",
    image: IMG.desi_ghee,
    keywords: "amul desi ghee shuddh ghee cow milk tin"
  },
  {
    id: 912,
    categoryId: 9,
    subcategoryId: "9.2",
    hindiName: "घी रथ / रथ घी",
    englishName: "Rath Vanaspati Ghee",
    packNote: "1 टीन उपलब्ध",
    image: IMG.desi_ghee,
    keywords: "rath ghee vanaspati hydrogenated"
  },
  {
    id: 913,
    categoryId: 9,
    subcategoryId: "9.2",
    hindiName: "घी डालडा",
    englishName: "Dalda Hydrogenated Vegetable Ghee",
    packNote: "उपलब्ध",
    image: IMG.desi_ghee,
    keywords: "dalda ghee vanaspati halwai cooking"
  },

  // 10. मिठास, शर्करा, गुड़ व शहद
  {
    id: 1001,
    categoryId: 10,
    subcategoryId: "10.1",
    hindiName: "चीनी (Trust) / चीनी सफेद",
    englishName: "Trust Brand Refined Sugar",
    packNote: "2 कुन्तल / 30 कि.ग्रा.",
    image: IMG.sugar,
    keywords: "cheeni trust sugar white refined shakkad"
  },
  {
    id: 1002,
    categoryId: 10,
    subcategoryId: "10.1",
    hindiName: "चीनी रवा (भूरा)",
    englishName: "Brown Bura / Boora Sugar",
    packNote: "10 किलो / 5 कि.ग्रा.",
    image: IMG.sugar,
    keywords: "boora bura sugar rawa laddu sweet sugar"
  },
  {
    id: 1003,
    categoryId: 10,
    subcategoryId: "10.1",
    hindiName: "चीनी पीसी",
    englishName: "Confectioner's Powdered Sugar / Icing Sugar",
    packNote: "उपलब्ध",
    image: IMG.sugar,
    keywords: "icing sugar powdered cheeni peesi baking"
  },
  {
    id: 1004,
    categoryId: 10,
    subcategoryId: "10.1",
    hindiName: "चीनी ब्राउन",
    englishName: "Demerara Brown Sugar",
    packNote: "उपलब्ध",
    image: IMG.sugar,
    keywords: "brown sugar demerara natural"
  },
  {
    id: 1005,
    categoryId: 10,
    subcategoryId: "10.1",
    hindiName: "गुड़",
    englishName: "Pure Sugarcane Jaggery (Gud)",
    packNote: "15 कि.ग्रा. उपलब्ध",
    image: IMG.jaggery,
    keywords: "gud jaggery sugarcane bheli organic desi"
  },
  {
    id: 1006,
    categoryId: 10,
    subcategoryId: "10.1",
    hindiName: "मिश्री दाना / मिश्री",
    englishName: "Rock Sugar Candy (Mishri Dana)",
    packNote: "उपलब्ध",
    image: IMG.sugar,
    keywords: "mishri dana rock sugar prasad mouth freshener"
  },
  {
    id: 1007,
    categoryId: 10,
    subcategoryId: "10.2",
    hindiName: "सुगर पाउच",
    englishName: "White Sugar Sachets",
    packNote: "उपलब्ध",
    image: IMG.sugar,
    keywords: "sugar sachets pouch hotel cafeteria"
  },
  {
    id: 1008,
    categoryId: 10,
    subcategoryId: "10.2",
    hindiName: "ब्राउन सुगर पाउच",
    englishName: "Demerara Brown Sugar Sachets",
    packNote: "उपलब्ध",
    image: IMG.sugar,
    keywords: "brown sugar sachets portioned"
  },
  {
    id: 1009,
    categoryId: 10,
    subcategoryId: "10.2",
    hindiName: "सुगर क्यूब",
    englishName: "Pure Sugar Cubes",
    packNote: "उपलब्ध",
    image: IMG.sugar,
    keywords: "sugar cubes cheeni cube tea coffee"
  },
  {
    id: 1010,
    categoryId: 10,
    subcategoryId: "10.3",
    hindiName: "शहद / डाबर हनी",
    englishName: "Pure Natural Honey / Dabur Honey",
    packNote: "1 कि.ग्रा. उपलब्ध",
    image: IMG.honey,
    keywords: "dabur honey pure natural shahad madhu"
  },

  // 11. सूखे मेवे, नट्स, सुपरफूड बीज व नारियल
  {
    id: 1101,
    categoryId: 11,
    subcategoryId: "11.1",
    hindiName: "मामरा बादाम",
    englishName: "Premium Iranian Mamra Almonds",
    packNote: "प्रीमियम क्वालिटी",
    image: IMG.almonds,
    keywords: "mamra badam iranian almonds high oil brain nutrition"
  },
  {
    id: 1102,
    categoryId: 11,
    subcategoryId: "11.1",
    hindiName: "बादाम गिरी / बादाम",
    englishName: "Regular Almond Kernels",
    packNote: "3 कि.ग्रा. / 3 किलो",
    image: IMG.almonds,
    keywords: "badam giri california almonds whole"
  },
  {
    id: 1103,
    categoryId: 11,
    subcategoryId: "11.1",
    hindiName: "काजू साबुत",
    englishName: "Whole Premium Cashew Nuts",
    packNote: "5 किलो उपलब्ध",
    image: IMG.cashews,
    keywords: "kaju sabut whole cashew w240 w320 premium"
  },
  {
    id: 1104,
    categoryId: 11,
    subcategoryId: "11.1",
    hindiName: "काजू फॉल",
    englishName: "Cashew Halves / Splits (Kaju Split)",
    packNote: "5 किलो / 4 कि.ग्रा.",
    image: IMG.cashews,
    keywords: "kaju split halves sweets halwai"
  },
  {
    id: 1105,
    categoryId: 11,
    subcategoryId: "11.1",
    hindiName: "काजू टुकड़ा",
    englishName: "Broken Cashew Pieces",
    packNote: "5 किलो उपलब्ध",
    image: IMG.cashews,
    keywords: "kaju tukda broken cashew gravy cooking"
  },
  {
    id: 1106,
    categoryId: 11,
    subcategoryId: "11.1",
    hindiName: "पिस्ता हरा बेसावरी",
    englishName: "Green Besawari Pistachios",
    packNote: "2 किलो उपलब्ध",
    image: IMG.pista,
    keywords: "pista hara besawari green pistachio garnish"
  },
  {
    id: 1107,
    categoryId: 11,
    subcategoryId: "11.1",
    hindiName: "पिस्ता बड़ी / पिस्ता",
    englishName: "Large Whole Pistachios",
    packNote: "उपलब्ध",
    image: IMG.pista,
    keywords: "pista bada whole pistachios"
  },
  {
    id: 1108,
    categoryId: 11,
    subcategoryId: "11.1",
    hindiName: "पिस्ता छिलके वाली",
    englishName: "In-shell Roasted Pistachios",
    packNote: "उपलब्ध",
    image: IMG.pista,
    keywords: "pista roasted salted in shell snack"
  },
  {
    id: 1109,
    categoryId: 11,
    subcategoryId: "11.1",
    hindiName: "अखरोट गिरी / अखरोट",
    englishName: "Walnut Kernels (Akhrot Giri)",
    packNote: "उपलब्ध",
    image: IMG.walnut,
    keywords: "akhrot giri kashmiri walnut kernels"
  },
  {
    id: 1110,
    categoryId: 11,
    subcategoryId: "11.1",
    hindiName: "चिरौंजी",
    englishName: "Chironji / Charoli Nuts",
    packNote: "1 किलो उपलब्ध",
    image: IMG.cashews,
    keywords: "chironji charoli kheer sweet topping"
  },
  {
    id: 1111,
    categoryId: 11,
    subcategoryId: "11.1",
    hindiName: "काजू फ्लेवर",
    englishName: "Cashew Essence / Liquid Flavour",
    packNote: "उपलब्ध",
    image: IMG.cashews,
    keywords: "kaju flavor essence sweets"
  },

  // 11.2 सुपरफूड्स व स्वास्थ्यवर्धक बीज
  {
    id: 1112,
    categoryId: 11,
    subcategoryId: "11.2",
    hindiName: "चिया सीड्स",
    englishName: "Chia Seeds",
    packNote: "उपलब्ध",
    image: IMG.cumin,
    keywords: "chia seeds superfood fiber omega"
  },
  {
    id: 1113,
    categoryId: 11,
    subcategoryId: "11.2",
    hindiName: "सबजा के बीज",
    englishName: "Sabja / Basil Seeds (Falooda Seeds)",
    packNote: "उपलब्ध",
    image: IMG.cumin,
    keywords: "sabja beej basil seeds falooda cooling"
  },
  {
    id: 1114,
    categoryId: 11,
    subcategoryId: "11.2",
    hindiName: "सूरजमुखी के बीज",
    englishName: "Sunflower Seeds (Shelled)",
    packNote: "उपलब्ध",
    image: IMG.pista,
    keywords: "sunflower seeds surajmukhi beej"
  },
  {
    id: 1115,
    categoryId: 11,
    subcategoryId: "11.2",
    hindiName: "कद्दू के बीज (पम्पकिन सीड्स)",
    englishName: "Pumpkin Seeds (Pepitas)",
    packNote: "उपलब्ध",
    image: IMG.pista,
    keywords: "kaddu beej pumpkin seeds pepitas"
  },
  {
    id: 1116,
    categoryId: 11,
    subcategoryId: "11.2",
    hindiName: "मिक्स्ड सीड्स",
    englishName: "Assorted Healthy Mixed Seeds",
    packNote: "उपलब्ध",
    image: IMG.pista,
    keywords: "mixed seeds roasted 7 seeds healthy"
  },
  {
    id: 1117,
    categoryId: 11,
    subcategoryId: "11.2",
    hindiName: "मगज मोटा / मगज",
    englishName: "Watermelon Seeds (Charmagaz)",
    packNote: "2 किलो उपलब्ध",
    image: IMG.pista,
    keywords: "magaj mota charmagaz watermelon seeds gravy"
  },
  {
    id: 1118,
    categoryId: 11,
    subcategoryId: "11.2",
    hindiName: "मगज महीन",
    englishName: "Fine Melon Seeds",
    packNote: "उपलब्ध",
    image: IMG.pista,
    keywords: "magaj mahin melon seeds musk melon"
  },

  // 11.3 किशमिश, खजूर, अंजीर व छुआरा
  {
    id: 1119,
    categoryId: 11,
    subcategoryId: "11.3",
    hindiName: "किसमिस हरी",
    englishName: "Green Seedless Raisins",
    packNote: "2 कि.ग्रा. / 1 किलो",
    image: IMG.raisins,
    keywords: "kismis hari green raisins kishmish dakh"
  },
  {
    id: 1120,
    categoryId: 11,
    subcategoryId: "11.3",
    hindiName: "किसमिस काली",
    englishName: "Black Raisins",
    packNote: "उपलब्ध",
    image: IMG.raisins,
    keywords: "kismis kali black raisins munakka"
  },
  {
    id: 1121,
    categoryId: 11,
    subcategoryId: "11.3",
    hindiName: "किसमिस पीली",
    englishName: "Golden Yellow Raisins",
    packNote: "उपलब्ध",
    image: IMG.raisins,
    keywords: "kismis peeli golden raisins"
  },
  {
    id: 1122,
    categoryId: 11,
    subcategoryId: "11.3",
    hindiName: "अंजीर",
    englishName: "Dried Sweet Figs (Anjeer)",
    packNote: "उपलब्ध",
    image: IMG.dates,
    keywords: "anjeer dried figs afghan anjeer garland"
  },
  {
    id: 1123,
    categoryId: 11,
    subcategoryId: "11.3",
    hindiName: "खजूर / खजूर पैकेट वाला",
    englishName: "Packaged Soft Dates",
    packNote: "3 कि.ग्रा. उपलब्ध",
    image: IMG.dates,
    keywords: "khajoor soft dates kimia arabian dates"
  },
  {
    id: 1124,
    categoryId: 11,
    subcategoryId: "11.3",
    hindiName: "छुआरा",
    englishName: "Hard Dry Dates (Chhuhara / Choharav)",
    packNote: "उपलब्ध",
    image: IMG.dates,
    keywords: "chhuhara dry dates pooja kheer"
  },
  {
    id: 1125,
    categoryId: 11,
    subcategoryId: "11.3",
    hindiName: "छुआरा चुपचाप",
    englishName: "Processed Soft Dry Dates (Chupchap)",
    packNote: "उपलब्ध",
    image: IMG.dates,
    keywords: "chhuhara chupchap sweet dry dates"
  },

  // 11.4 मखाना, गोंद व मूंगफली
  {
    id: 1126,
    categoryId: 11,
    subcategoryId: "11.4",
    hindiName: "मखाना लावा / मखाना",
    englishName: "Popped Lotus Seeds / Foxnuts (Phool Makhana)",
    packNote: "दुकान पर उपलब्ध",
    image: IMG.makhana,
    keywords: "makhana phool makhana fox nuts lotus seeds fasting"
  },
  {
    id: 1127,
    categoryId: 11,
    subcategoryId: "11.4",
    hindiName: "बबूल गोंद मीठा",
    englishName: "Edible Babool Gum (Gond)",
    packNote: "उपलब्ध",
    image: IMG.makhana,
    keywords: "gond babool edible gum winter laddu"
  },
  {
    id: 1128,
    categoryId: 11,
    subcategoryId: "11.4",
    hindiName: "मूंगफली सफेद",
    englishName: "Blanched White Peanuts",
    packNote: "उपलब्ध",
    image: IMG.cashews,
    keywords: "mungfali safed blanched peanuts groundnut"
  },
  {
    id: 1129,
    categoryId: 11,
    subcategoryId: "11.4",
    hindiName: "मिक्स ड्राई फ्रूट पैकेट",
    englishName: "Assorted Mixed Dry Fruits Packet",
    packNote: "गिफ्ट व डेली पैक",
    image: IMG.almonds,
    keywords: "mix dry fruit packet assorted nuts"
  },

  // 11.5 नारियल उत्पाद
  {
    id: 1130,
    categoryId: 11,
    subcategoryId: "11.5",
    hindiName: "गरी गोला / गरी",
    englishName: "Whole Dried Coconut (Khopra / Ghari)",
    packNote: "उपलब्ध",
    image: IMG.coconut,
    keywords: "gari gola khopra whole dry coconut"
  },
  {
    id: 1131,
    categoryId: 11,
    subcategoryId: "11.5",
    hindiName: "गरी लच्छा",
    englishName: "Shredded Coconut Flakes (Lachha)",
    packNote: "उपलब्ध",
    image: IMG.coconut,
    keywords: "gari lachha shredded coconut flakes"
  },
  {
    id: 1132,
    categoryId: 11,
    subcategoryId: "11.5",
    hindiName: "गरी बुरादा",
    englishName: "Desiccated Fine Coconut Powder",
    packNote: "500 ग्राम उपलब्ध",
    image: IMG.coconut,
    keywords: "gari burada desiccated coconut powder laddu"
  },

  // 11.6 केसर, गुलकन्द व पुष्प सामग्री
  {
    id: 1133,
    categoryId: 11,
    subcategoryId: "11.6",
    hindiName: "केसर",
    englishName: "Kashmiri Saffron Strands",
    packNote: "15 ग्राम / 5 ग्रा. उपलब्ध",
    image: IMG.saffron,
    keywords: "kesar kashmiri saffron pure mongra strands"
  },
  {
    id: 1134,
    categoryId: 11,
    subcategoryId: "11.6",
    hindiName: "गुलाब सूखी पत्ती",
    englishName: "Sun-dried Rose Petals",
    packNote: "उपलब्ध",
    image: IMG.saffron,
    keywords: "gulab patti dried rose petals gulkand"
  },
  {
    id: 1135,
    categoryId: 11,
    subcategoryId: "11.6",
    hindiName: "गुलकन्द",
    englishName: "Sweet Rose Petal Preserve",
    packNote: "उपलब्ध",
    image: IMG.saffron,
    keywords: "gulkand sweet rose petal preserve paan"
  },

  // 12. हलवाई, बेकरी रसायन, रंग व एसेंस
  {
    id: 1201,
    categoryId: 12,
    subcategoryId: "12.1",
    hindiName: "बेकिंग पाउडर",
    englishName: "Double Acting Baking Powder",
    packNote: "2 किलो / 500 ग्रा.",
    image: IMG.baking_powder,
    keywords: "baking powder cake double acting bakery"
  },
  {
    id: 1202,
    categoryId: 12,
    subcategoryId: "12.1",
    hindiName: "मीठा सोडा",
    englishName: "Baking Soda / Sodium Bicarbonate",
    packNote: "1 किलो / 500 ग्रा.",
    image: IMG.baking_powder,
    keywords: "meetha soda baking soda sodium bicarbonate"
  },
  {
    id: 1203,
    categoryId: 12,
    subcategoryId: "12.1",
    hindiName: "अलमुनियम पाउडर",
    englishName: "Ammonium Bicarbonate (Baking Ammonia)",
    packNote: "200 ग्रा. उपलब्ध",
    image: IMG.baking_powder,
    keywords: "ammonium bicarbonate ammonia baking powder"
  },
  {
    id: 1204,
    categoryId: 12,
    subcategoryId: "12.1",
    hindiName: "इस्ट पाउडर",
    englishName: "Active Dry Yeast Powder",
    packNote: "200 ग्रा. उपलब्ध",
    image: IMG.baking_powder,
    keywords: "yeast powder active dry yeast bread pizza"
  },
  {
    id: 1205,
    categoryId: 12,
    subcategoryId: "12.2",
    hindiName: "कस्टर्ड पाउडर",
    englishName: "Vanilla Custard Powder",
    packNote: "1 किलो उपलब्ध",
    image: IMG.baking_powder,
    keywords: "custard powder vanilla pudding dessert"
  },
  {
    id: 1206,
    categoryId: 12,
    subcategoryId: "12.2",
    hindiName: "वनीला पाउडर",
    englishName: "Vanilla Flavour Powder",
    packNote: "1 डिब्बा उपलब्ध",
    image: IMG.baking_powder,
    keywords: "vanilla powder aroma essence"
  },
  {
    id: 1207,
    categoryId: 12,
    subcategoryId: "12.2",
    hindiName: "चॉकलेटी पाउडर कैडबरी",
    englishName: "Cadbury Cocoa / Chocolate Powder",
    packNote: "उपलब्ध",
    image: IMG.coffee,
    keywords: "cadbury cocoa chocolate powder bakery"
  },
  {
    id: 1208,
    categoryId: 12,
    subcategoryId: "12.2",
    hindiName: "कोको नेट मिक्स पाउडर",
    englishName: "Coconut Drink Premix Powder",
    packNote: "उपलब्ध",
    image: IMG.baking_powder,
    keywords: "coconut drink premix powder"
  },
  {
    id: 1209,
    categoryId: 12,
    subcategoryId: "12.3",
    hindiName: "हाइड्रो",
    englishName: "Hydro (Sodium Hydrosulphite Sugar Bleach)",
    packNote: "150 ग्राम उपलब्ध",
    image: IMG.baking_powder,
    keywords: "hydro halwai sugar clarifier"
  },
  {
    id: 1210,
    categoryId: 12,
    subcategoryId: "12.3",
    hindiName: "सेफोलाईट (रंगकाट)",
    englishName: "Safolite (Rangkat Clarifier)",
    packNote: "50 ग्राम उपलब्ध",
    image: IMG.baking_powder,
    keywords: "safolite rangkat jaggery clarifier"
  },
  {
    id: 1211,
    categoryId: 12,
    subcategoryId: "12.3",
    hindiName: "फिटकरी",
    englishName: "Alum (Fitkari)",
    packNote: "200 ग्राम उपलब्ध",
    image: IMG.salt,
    keywords: "fitkari alum water purifier shuddh"
  },
  {
    id: 1212,
    categoryId: 12,
    subcategoryId: "12.3",
    hindiName: "रीठा",
    englishName: "Soapnut / Reetha (Rasgulla Frothing)",
    packNote: "200 ग्राम उपलब्ध",
    image: IMG.star_anise,
    keywords: "reetha soapnut rasgulla frothing"
  },
  {
    id: 1213,
    categoryId: 12,
    subcategoryId: "12.3",
    hindiName: "समुद्र फेन",
    englishName: "Cuttlefish Bone (Frothing Additive)",
    packNote: "उपलब्ध",
    image: IMG.salt,
    keywords: "samudra phen cuttlefish bone halwai"
  },
  {
    id: 1214,
    categoryId: 12,
    subcategoryId: "12.3",
    hindiName: "साइट्रिक - शिप कं०",
    englishName: "Citric Acid (Ship Brand Tatri)",
    packNote: "1 किलो उपलब्ध",
    image: IMG.salt,
    keywords: "citric acid tatri ship brand sour chena"
  },
  {
    id: 1215,
    categoryId: 12,
    subcategoryId: "12.3",
    hindiName: "टाईट्रिक - शिप कं०",
    englishName: "Tartaric Acid (Ship Brand)",
    packNote: "उपलब्ध",
    image: IMG.salt,
    keywords: "tartaric acid ship brand"
  },
  {
    id: 1216,
    categoryId: 12,
    subcategoryId: "12.4",
    hindiName: "बुश कं० हरा रंग",
    englishName: "Bush Green Food Colour",
    packNote: "2 डिब्बा उपलब्ध",
    image: IMG.turmeric,
    keywords: "bush green food colour edible colour"
  },
  {
    id: 1217,
    categoryId: 12,
    subcategoryId: "12.4",
    hindiName: "बुश कं० पीला रंग",
    englishName: "Bush Yellow Food Colour",
    packNote: "1 डिब्बा उपलब्ध",
    image: IMG.turmeric,
    keywords: "bush yellow food colour"
  },
  {
    id: 1218,
    categoryId: 12,
    subcategoryId: "12.4",
    hindiName: "बुश कं० नारंगी / ऑरेंज रंग",
    englishName: "Bush Orange Food Colour",
    packNote: "3 डिब्बा उपलब्ध",
    image: IMG.turmeric,
    keywords: "bush orange food colour jalebi colour"
  },
  {
    id: 1219,
    categoryId: 12,
    subcategoryId: "12.4",
    hindiName: "बुश कं० चॉकलेटी रंग",
    englishName: "Bush Chocolate Food Colour",
    packNote: "उपलब्ध",
    image: IMG.turmeric,
    keywords: "bush chocolate food colour"
  },
  {
    id: 1220,
    categoryId: 12,
    subcategoryId: "12.4",
    hindiName: "बुश कं० बसंती रंग",
    englishName: "Bush Basanti (Bright Yellow) Colour",
    packNote: "उपलब्ध",
    image: IMG.turmeric,
    keywords: "bush basanti bright yellow food colour laddu"
  },
  {
    id: 1221,
    categoryId: 12,
    subcategoryId: "12.4",
    hindiName: "बुश कं० लाल रंग",
    englishName: "Bush Red Food Colour",
    packNote: "1 डिब्बा उपलब्ध",
    image: IMG.turmeric,
    keywords: "bush red food colour"
  },
  {
    id: 1222,
    categoryId: 12,
    subcategoryId: "12.5",
    hindiName: "केवड़ा सेंट",
    englishName: "Concentrated Kewra Essence",
    packNote: "उपलब्ध",
    image: IMG.vinegar,
    keywords: "kewra scent essence biryani sweet"
  },
  {
    id: 1223,
    categoryId: 12,
    subcategoryId: "12.5",
    hindiName: "गुलाब सेंट",
    englishName: "Rose Essence",
    packNote: "उपलब्ध",
    image: IMG.vinegar,
    keywords: "rose scent essence aroma"
  },
  {
    id: 1224,
    categoryId: 12,
    subcategoryId: "12.5",
    hindiName: "विनेला सेंट",
    englishName: "Vanilla Essence",
    packNote: "उपलब्ध",
    image: IMG.vinegar,
    keywords: "vanilla essence bakery"
  },
  {
    id: 1225,
    categoryId: 12,
    subcategoryId: "12.5",
    hindiName: "ऑरेंज सेंट",
    englishName: "Orange Essence",
    packNote: "उपलब्ध",
    image: IMG.vinegar,
    keywords: "orange essence citrus flavour"
  },
  {
    id: 1226,
    categoryId: 12,
    subcategoryId: "12.5",
    hindiName: "इलायची सेंट",
    englishName: "Cardamom Essence",
    packNote: "उपलब्ध",
    image: IMG.vinegar,
    keywords: "elaichi scent cardamom essence"
  },
  {
    id: 1227,
    categoryId: 12,
    subcategoryId: "12.5",
    hindiName: "चॉकलेट सेंट",
    englishName: "Chocolate Essence",
    packNote: "उपलब्ध",
    image: IMG.vinegar,
    keywords: "chocolate essence"
  },
  {
    id: 1228,
    categoryId: 12,
    subcategoryId: "12.5",
    hindiName: "पिस्ता सेंट",
    englishName: "Pista Essence",
    packNote: "उपलब्ध",
    image: IMG.vinegar,
    keywords: "pista essence flavour"
  },
  {
    id: 1229,
    categoryId: 12,
    subcategoryId: "12.5",
    hindiName: "मैंगो सेंट",
    englishName: "Mango Essence",
    packNote: "उपलब्ध",
    image: IMG.vinegar,
    keywords: "mango essence aam"
  },
  {
    id: 1230,
    categoryId: 12,
    subcategoryId: "12.5",
    hindiName: "खसखस सेंट",
    englishName: "Khus Essence",
    packNote: "उपलब्ध",
    image: IMG.vinegar,
    keywords: "khus scent essence cooling"
  },
  {
    id: 1231,
    categoryId: 12,
    subcategoryId: "12.5",
    hindiName: "केशर सेंट / सुहाग सुन्दर कं०",
    englishName: "Kesar Essence (Suhag Sundar)",
    packNote: "1 शीशी उपलब्ध",
    image: IMG.vinegar,
    keywords: "kesar scent suhag sundar saffron essence"
  },
  {
    id: 1232,
    categoryId: 12,
    subcategoryId: "12.5",
    hindiName: "गुलाब जल",
    englishName: "Pure Rose Water",
    packNote: "1 बॉटल उपलब्ध",
    image: IMG.vinegar,
    keywords: "gulab jal rose water pure"
  },
  {
    id: 1233,
    categoryId: 12,
    subcategoryId: "12.5",
    hindiName: "केवड़ा जल",
    englishName: "Pure Kewra Water",
    packNote: "1 बॉटल उपलब्ध",
    image: IMG.vinegar,
    keywords: "kewra jal pure water flavour"
  },
  {
    id: 1234,
    categoryId: 12,
    subcategoryId: "12.6",
    hindiName: "चांदी वर्क असली",
    englishName: "100% Pure Silver Leaf (Chandi Vark)",
    packNote: "1 गड्डी उपलब्ध",
    image: IMG.kaju_katli,
    keywords: "chandi vark 100% pure silver leaf sweets"
  },
  {
    id: 1235,
    categoryId: 12,
    subcategoryId: "12.6",
    hindiName: "ब्रास",
    englishName: "Edible Camphor (Baras / Bhimsaini Kapur)",
    packNote: "उपलब्ध",
    image: IMG.salt,
    keywords: "baras edible camphor bhimsaini kapoor laddu"
  },

  // 13. कैफेटेरिया, पेय पदार्थ, मॉकटेल सिरप व क्रश
  {
    id: 1301,
    categoryId: 13,
    subcategoryId: "13.1",
    hindiName: "टाटा प्रीमियम चाय",
    englishName: "Tata Premium Tea",
    packNote: "उपलब्ध",
    image: IMG.tea_leaves,
    keywords: "tata premium tea chai patti"
  },
  {
    id: 1302,
    categoryId: 13,
    subcategoryId: "13.1",
    hindiName: "टाटा अग्नि चाय",
    englishName: "Tata Agni Strong Tea",
    packNote: "उपलब्ध",
    image: IMG.tea_leaves,
    keywords: "tata agni chai strong tea"
  },
  {
    id: 1303,
    categoryId: 13,
    subcategoryId: "13.1",
    hindiName: "टाटा गोल्ड चाय",
    englishName: "Tata Gold Tea",
    packNote: "उपलब्ध",
    image: IMG.tea_leaves,
    keywords: "tata gold tea premium blend"
  },
  {
    id: 1304,
    categoryId: 13,
    subcategoryId: "13.1",
    hindiName: "टाटा इलायची चाय",
    englishName: "Tata Elaichi Flavoured Tea",
    packNote: "उपलब्ध",
    image: IMG.tea_leaves,
    keywords: "tata elaichi chai cardamom flavour"
  },
  {
    id: 1305,
    categoryId: 13,
    subcategoryId: "13.1",
    hindiName: "रेड लेबल चाय",
    englishName: "Brooke Bond Red Label Tea",
    packNote: "उपलब्ध",
    image: IMG.tea_leaves,
    keywords: "red label tea brooke bond swad apnepan ka"
  },
  {
    id: 1306,
    categoryId: 13,
    subcategoryId: "13.1",
    hindiName: "ताजमहल चाय",
    englishName: "Taj Mahal Premium Tea Leaves",
    packNote: "उपलब्ध",
    image: IMG.tea_leaves,
    keywords: "taj mahal chai wah taj premium tea"
  },
  {
    id: 1307,
    categoryId: 13,
    subcategoryId: "13.1",
    hindiName: "ताजा चाय",
    englishName: "Brooke Bond Taaza Green Leaf Tea",
    packNote: "उपलब्ध",
    image: IMG.tea_leaves,
    keywords: "taaza chai green leaf tea"
  },
  {
    id: 1308,
    categoryId: 13,
    subcategoryId: "13.1",
    hindiName: "इलायची चाय (अलैची)",
    englishName: "Elaichi Chai Leaves",
    packNote: "उपलब्ध",
    image: IMG.tea_leaves,
    keywords: "elaichi chai leaves flavored tea"
  },
  {
    id: 1309,
    categoryId: 13,
    subcategoryId: "13.1",
    hindiName: "मयूरी चाय",
    englishName: "Mayuri CTC Tea",
    packNote: "उपलब्ध",
    image: IMG.tea_leaves,
    keywords: "mayuri tea ctc"
  },
  {
    id: 1310,
    categoryId: 13,
    subcategoryId: "13.1",
    hindiName: "महारानी चाय",
    englishName: "Maharani Strong Blend Tea",
    packNote: "उपलब्ध",
    image: IMG.tea_leaves,
    keywords: "maharani chai strong blend"
  },
  {
    id: 1311,
    categoryId: 13,
    subcategoryId: "13.1",
    hindiName: "तासती चाय",
    englishName: "Tasati Tea",
    packNote: "उपलब्ध",
    image: IMG.tea_leaves,
    keywords: "tasati chai tea leaves"
  },
  {
    id: 1312,
    categoryId: 13,
    subcategoryId: "13.1",
    hindiName: "लिप्टन ग्रीन टी",
    englishName: "Lipton Pure Green Tea",
    packNote: "उपलब्ध",
    image: IMG.tea_leaves,
    keywords: "lipton green tea healthy"
  },
  {
    id: 1313,
    categoryId: 13,
    subcategoryId: "13.1",
    hindiName: "लिप्टन हनी ग्रीन टी",
    englishName: "Lipton Honey & Lemon Green Tea",
    packNote: "उपलब्ध",
    image: IMG.tea_leaves,
    keywords: "lipton honey lemon green tea"
  },
  {
    id: 1314,
    categoryId: 13,
    subcategoryId: "13.1",
    hindiName: "चाय पत्ती",
    englishName: "CTC Tea Leaves",
    packNote: "1 किलो उपलब्ध",
    image: IMG.tea_leaves,
    keywords: "chai patti ctc tea bulk"
  },
  {
    id: 1315,
    categoryId: 13,
    subcategoryId: "13.1",
    hindiName: "ग्रीन टी बैग",
    englishName: "Green Tea Bags",
    packNote: "उपलब्ध",
    image: IMG.tea_leaves,
    keywords: "green tea bags dip dip"
  },
  {
    id: 1316,
    categoryId: 13,
    subcategoryId: "13.1",
    hindiName: "लेमन टी",
    englishName: "Lemon Tea Premix / Bags",
    packNote: "उपलब्ध",
    image: IMG.tea_leaves,
    keywords: "lemon tea premix sachets"
  },
  {
    id: 1317,
    categoryId: 13,
    subcategoryId: "13.2",
    hindiName: "नेस कॉफी पाउडर",
    englishName: "Nescafe Classic Instant Coffee",
    packNote: "उपलब्ध",
    image: IMG.coffee,
    keywords: "nescafe classic instant coffee jar"
  },
  {
    id: 1318,
    categoryId: 13,
    subcategoryId: "13.2",
    hindiName: "काफी बिंस",
    englishName: "Whole Roasted Coffee Beans",
    packNote: "उपलब्ध",
    image: IMG.coffee,
    keywords: "coffee beans roasted whole"
  },
  {
    id: 1319,
    categoryId: 13,
    subcategoryId: "13.2",
    hindiName: "बोन वीटा",
    englishName: "Cadbury Bournvita",
    packNote: "उपलब्ध",
    image: IMG.coffee,
    keywords: "cadbury bournvita health drink chocolate"
  },
  {
    id: 1320,
    categoryId: 13,
    subcategoryId: "13.3",
    hindiName: "मिनरल वाटर जार",
    englishName: "20 Litre Mineral Water Jars",
    packNote: "50 जार उपलब्ध",
    image: IMG.water_bisleri,
    keywords: "mineral water jar 20 litre drinking water"
  },
  {
    id: 1321,
    categoryId: 13,
    subcategoryId: "13.3",
    hindiName: "बिसलरी 200 M.L. बोतल",
    englishName: "Bisleri 200 ml Bottled Water",
    packNote: "100 पेटी उपलब्ध",
    image: IMG.water_bisleri,
    keywords: "bisleri 200ml bottle water pet"
  },
  {
    id: 1322,
    categoryId: 13,
    subcategoryId: "13.3",
    hindiName: "बिसलरी 250 M.L. बोतल",
    englishName: "Bisleri 250 ml Bottled Water",
    packNote: "उपलब्ध",
    image: IMG.water_bisleri,
    keywords: "bisleri 250ml mineral water"
  },
  {
    id: 1323,
    categoryId: 13,
    subcategoryId: "13.3",
    hindiName: "बिसलरी 200 M.L. गिलास",
    englishName: "Bisleri 200 ml Sealed Cups",
    packNote: "उपलब्ध",
    image: IMG.water_bisleri,
    keywords: "bisleri glass cups 200ml catering sealed"
  },
  {
    id: 1324,
    categoryId: 13,
    subcategoryId: "13.3",
    hindiName: "सोडा सॉफ्ट ड्रिंक",
    englishName: "Carbonated Club Soda",
    packNote: "उपलब्ध",
    image: IMG.water_bisleri,
    keywords: "club soda kinley soda carbonated"
  },
  {
    id: 1325,
    categoryId: 13,
    subcategoryId: "13.3",
    hindiName: "स्प्राईट",
    englishName: "Sprite Soft Drink",
    packNote: "उपलब्ध",
    image: IMG.water_bisleri,
    keywords: "sprite cold drink lemon soda"
  },
  {
    id: 1326,
    categoryId: 13,
    subcategoryId: "13.3",
    hindiName: "थम्स-अप",
    englishName: "Thums Up Cola",
    packNote: "उपलब्ध",
    image: IMG.water_bisleri,
    keywords: "thums up cola cold drink toofani"
  },
  {
    id: 1327,
    categoryId: 13,
    subcategoryId: "13.3",
    hindiName: "फैन्टा",
    englishName: "Fanta Orange Drink",
    packNote: "उपलब्ध",
    image: IMG.water_bisleri,
    keywords: "fanta orange drink cold drink"
  },
  {
    id: 1328,
    categoryId: 13,
    subcategoryId: "13.4",
    hindiName: "रूहआबजा",
    englishName: "Hamdard Rooh Afza Sharbat",
    packNote: "दुकान पर उपलब्ध",
    image: IMG.rooh_afza,
    keywords: "rooh afza hamdard sharbat rose cooling summer drink"
  },
  {
    id: 1329,
    categoryId: 13,
    subcategoryId: "13.4",
    hindiName: "चॉकलेट सिरप",
    englishName: "Hershey's Chocolate Syrup",
    packNote: "उपलब्ध",
    image: IMG.rooh_afza,
    keywords: "hersheys chocolate syrup topping"
  },
  {
    id: 1330,
    categoryId: 13,
    subcategoryId: "13.4",
    hindiName: "ऑरेंज सिरप",
    englishName: "Orange Mocktail Syrup",
    packNote: "उपलब्ध",
    image: IMG.rooh_afza,
    keywords: "orange mocktail syrup"
  },
  {
    id: 1331,
    categoryId: 13,
    subcategoryId: "13.4",
    hindiName: "मैंगो सिरप",
    englishName: "Mango Syrup",
    packNote: "उपलब्ध",
    image: IMG.rooh_afza,
    keywords: "mango syrup mocktail"
  },
  {
    id: 1332,
    categoryId: 13,
    subcategoryId: "13.4",
    hindiName: "पापकॉर्न सिरप",
    englishName: "Popcorn Mocktail Syrup",
    packNote: "उपलब्ध",
    image: IMG.rooh_afza,
    keywords: "popcorn syrup flavour"
  },
  {
    id: 1333,
    categoryId: 13,
    subcategoryId: "13.4",
    hindiName: "रोज सिरप",
    englishName: "Rose Mocktail Syrup",
    packNote: "उपलब्ध",
    image: IMG.rooh_afza,
    keywords: "rose mocktail syrup gulab"
  },
  {
    id: 1334,
    categoryId: 13,
    subcategoryId: "13.4",
    hindiName: "वनीला सिरप",
    englishName: "Vanilla Syrup",
    packNote: "उपलब्ध",
    image: IMG.rooh_afza,
    keywords: "vanilla syrup coffee bar"
  },
  {
    id: 1335,
    categoryId: 13,
    subcategoryId: "13.4",
    hindiName: "ब्लूबेरी सिरप",
    englishName: "Blueberry Mocktail Syrup",
    packNote: "उपलब्ध",
    image: IMG.rooh_afza,
    keywords: "blueberry mocktail syrup"
  },
  {
    id: 1336,
    categoryId: 13,
    subcategoryId: "13.4",
    hindiName: "स्ट्राबेरी सिरप",
    englishName: "Strawberry Syrup",
    packNote: "उपलब्ध",
    image: IMG.rooh_afza,
    keywords: "strawberry syrup"
  },
  {
    id: 1337,
    categoryId: 13,
    subcategoryId: "13.4",
    hindiName: "रेस्पबेरी सिरप",
    englishName: "Raspberry Syrup",
    packNote: "उपलब्ध",
    image: IMG.rooh_afza,
    keywords: "raspberry syrup"
  },
  {
    id: 1338,
    categoryId: 13,
    subcategoryId: "13.4",
    hindiName: "ग्रीन मिन्ट मोजितो",
    englishName: "Green Mint Mojito Syrup",
    packNote: "उपलब्ध",
    image: IMG.rooh_afza,
    keywords: "green mint mojito syrup mocktail mint"
  },
  {
    id: 1339,
    categoryId: 13,
    subcategoryId: "13.4",
    hindiName: "लेमन सिरप",
    englishName: "Lemon Bar Syrup",
    packNote: "उपलब्ध",
    image: IMG.rooh_afza,
    keywords: "lemon bar syrup nimbu"
  },
  {
    id: 1340,
    categoryId: 13,
    subcategoryId: "13.4",
    hindiName: "मोजितो",
    englishName: "Classic Mojito Mint Syrup",
    packNote: "उपलब्ध",
    image: IMG.rooh_afza,
    keywords: "classic mojito mint syrup"
  },
  {
    id: 1341,
    categoryId: 13,
    subcategoryId: "13.4",
    hindiName: "ब्लैक करेंट सिरप",
    englishName: "Blackcurrant Mocktail Syrup",
    packNote: "उपलब्ध",
    image: IMG.rooh_afza,
    keywords: "blackcurrant mocktail syrup"
  },
  {
    id: 1342,
    categoryId: 13,
    subcategoryId: "13.4",
    hindiName: "लीची सिरप",
    englishName: "Litchi Syrup",
    packNote: "उपलब्ध",
    image: IMG.rooh_afza,
    keywords: "litchi syrup lichi"
  },
  {
    id: 1343,
    categoryId: 13,
    subcategoryId: "13.4",
    hindiName: "वाटर मेलन सिरका",
    englishName: "Watermelon Bar Syrup / Vinegar",
    packNote: "उपलब्ध",
    image: IMG.rooh_afza,
    keywords: "watermelon syrup tarbooj"
  },
  {
    id: 1344,
    categoryId: 13,
    subcategoryId: "13.4",
    hindiName: "हरा पुदीना शीशी",
    englishName: "Pudina Extract Syrup",
    packNote: "उपलब्ध",
    image: IMG.rooh_afza,
    keywords: "hara pudina mint extract syrup"
  },
  {
    id: 1345,
    categoryId: 13,
    subcategoryId: "13.5",
    hindiName: "पाइनएप्पल क्रस",
    englishName: "Pineapple Fruit Crush",
    packNote: "उपलब्ध",
    image: IMG.rooh_afza,
    keywords: "pineapple fruit crush ananas real"
  },
  {
    id: 1346,
    categoryId: 13,
    subcategoryId: "13.5",
    hindiName: "ऑरेंज क्रस",
    englishName: "Orange Fruit Crush",
    packNote: "उपलब्ध",
    image: IMG.rooh_afza,
    keywords: "orange fruit crush santra"
  },
  {
    id: 1347,
    categoryId: 13,
    subcategoryId: "13.5",
    hindiName: "मैंगो क्रस",
    englishName: "Mango Fruit Crush",
    packNote: "उपलब्ध",
    image: IMG.rooh_afza,
    keywords: "mango fruit crush aam"
  },
  {
    id: 1348,
    categoryId: 13,
    subcategoryId: "13.5",
    hindiName: "फिच क्रस (पीच क्रश)",
    englishName: "Peach Fruit Crush",
    packNote: "उपलब्ध",
    image: IMG.rooh_afza,
    keywords: "peach crush fruit"
  },
  {
    id: 1349,
    categoryId: 13,
    subcategoryId: "13.5",
    hindiName: "बटर स्काच क्रस",
    englishName: "Butterscotch Dessert Crush",
    packNote: "उपलब्ध",
    image: IMG.rooh_afza,
    keywords: "butterscotch crush dessert"
  },
  {
    id: 1350,
    categoryId: 13,
    subcategoryId: "13.5",
    hindiName: "लीची क्रस",
    englishName: "Litchi Fruit Crush",
    packNote: "उपलब्ध",
    image: IMG.rooh_afza,
    keywords: "litchi fruit crush"
  },
  {
    id: 1351,
    categoryId: 13,
    subcategoryId: "13.5",
    hindiName: "ब्लूबेरी क्रस",
    englishName: "Blueberry Fruit Crush",
    packNote: "उपलब्ध",
    image: IMG.rooh_afza,
    keywords: "blueberry fruit crush"
  },
  {
    id: 1352,
    categoryId: 13,
    subcategoryId: "13.6",
    hindiName: "कॉफ़ी स्टेलर",
    englishName: "Coffee Stirrers",
    packNote: "उपलब्ध",
    image: IMG.wooden_spoons,
    keywords: "coffee stirrers wooden plastic"
  },
  {
    id: 1353,
    categoryId: 13,
    subcategoryId: "13.6",
    hindiName: "स्प्रिंकल्स",
    englishName: "Multi-Coloured Sprinkles",
    packNote: "उपलब्ध",
    image: IMG.sugar,
    keywords: "sprinkles multi coloured cake topping"
  },
  {
    id: 1354,
    categoryId: 13,
    subcategoryId: "13.6",
    hindiName: "मेलटेड चॉकलेट",
    englishName: "Melted Cooking Chocolate Sauce",
    packNote: "उपलब्ध",
    image: IMG.rooh_afza,
    keywords: "melted chocolate cooking sauce"
  },
  {
    id: 1355,
    categoryId: 13,
    subcategoryId: "13.6",
    hindiName: "मिश्राम्बो",
    englishName: "Mishrambu Thandai / Syrup",
    packNote: "उपलब्ध",
    image: IMG.rooh_afza,
    keywords: "mishrambu thandai syrup dry fruit drink"
  },
  {
    id: 1356,
    categoryId: 13,
    subcategoryId: "13.6",
    hindiName: "रसना",
    englishName: "Rasna Concentrate Premix",
    packNote: "उपलब्ध",
    image: IMG.rooh_afza,
    keywords: "rasna concentrate orange drink"
  },
  {
    id: 1357,
    categoryId: 13,
    subcategoryId: "13.6",
    hindiName: "ग्लूकोन-डी / ग्लूकोज डी ओरेल",
    englishName: "Glucon-D Instant Energy Powder",
    packNote: "200 ग्राम उपलब्ध",
    image: IMG.baking_powder,
    keywords: "glucon d glucose instant energy summer"
  },
  {
    id: 1358,
    categoryId: 13,
    subcategoryId: "13.6",
    hindiName: "ईनों",
    englishName: "Eno Fruit Salt Sachet",
    packNote: "उपलब्ध",
    image: IMG.baking_powder,
    keywords: "eno fruit salt acidity relief sachet"
  },

  // 14. तैयार नमकीन, पापड़, अचार, पाचक व चाट बेस
  {
    id: 1401,
    categoryId: 14,
    subcategoryId: "14.1",
    hindiName: "हल्दीराम समोसी",
    englishName: "Haldiram Mini Dry Samosi",
    packNote: "उपलब्ध",
    image: IMG.haldiram_namkeen,
    keywords: "haldiram samosi mini dry samosa snacks"
  },
  {
    id: 1402,
    categoryId: 14,
    subcategoryId: "14.1",
    hindiName: "हल्दीराम नमकीन",
    englishName: "Haldiram Classic Namkeen",
    packNote: "उपलब्ध",
    image: IMG.haldiram_namkeen,
    keywords: "haldiram classic namkeen mix mixture"
  },
  {
    id: 1403,
    categoryId: 14,
    subcategoryId: "14.1",
    hindiName: "हल्दीराम पीला सेव",
    englishName: "Haldiram Yellow Besan Sev",
    packNote: "उपलब्ध",
    image: IMG.bhujia,
    keywords: "haldiram peela sev besan sev nylon"
  },
  {
    id: 1404,
    categoryId: 14,
    subcategoryId: "14.1",
    hindiName: "हल्दीराम हरा सेव",
    englishName: "Haldiram Green Mint Sev",
    packNote: "उपलब्ध",
    image: IMG.bhujia,
    keywords: "haldiram hara sev pudina mint sev"
  },
  {
    id: 1405,
    categoryId: 14,
    subcategoryId: "14.1",
    hindiName: "हल्दीराम बेसन भुजिया",
    englishName: "Haldiram Besan Bhujia",
    packNote: "उपलब्ध",
    image: IMG.bhujia,
    keywords: "haldiram besan bhujia bikaneri"
  },
  {
    id: 1406,
    categoryId: 14,
    subcategoryId: "14.1",
    hindiName: "हल्दीराम आलू भुजिया",
    englishName: "Haldiram Aloo Bhujia",
    packNote: "2 कि.ग्रा. उपलब्ध",
    image: IMG.bhujia,
    keywords: "haldiram aloo bhujia potato spicy sev"
  },
  {
    id: 1407,
    categoryId: 14,
    subcategoryId: "14.1",
    hindiName: "हल्दीराम मूँगफली दाना",
    englishName: "Haldiram Fried Salted Peanuts",
    packNote: "उपलब्ध",
    image: IMG.cashews,
    keywords: "haldiram mungfali dana salted peanuts"
  },
  {
    id: 1408,
    categoryId: 14,
    subcategoryId: "14.1",
    hindiName: "हल्दीराम मिक्स नमकीन",
    englishName: "Haldiram Royal Mix Namkeen",
    packNote: "2 कि.ग्रा. उपलब्ध",
    image: IMG.haldiram_namkeen,
    keywords: "haldiram mix namkeen all in one"
  },
  {
    id: 1409,
    categoryId: 14,
    subcategoryId: "14.2",
    hindiName: "मूंगदाल नमकीन",
    englishName: "Crispy Moong Dal Namkeen",
    packNote: "2 कि.ग्रा. उपलब्ध",
    image: IMG.moong_dal,
    keywords: "moong dal namkeen salted crispy fried"
  },
  {
    id: 1410,
    categoryId: 14,
    subcategoryId: "14.2",
    hindiName: "पीनट सादा नमकीन",
    englishName: "Plain Salted Peanuts",
    packNote: "2 कि.ग्रा. उपलब्ध",
    image: IMG.cashews,
    keywords: "peanut sada namkeen salted peanuts"
  },
  {
    id: 1411,
    categoryId: 14,
    subcategoryId: "14.2",
    hindiName: "छोटी मठरी",
    englishName: "Crisp Small Mathri",
    packNote: "उपलब्ध",
    image: IMG.rusk_toast,
    keywords: "chhoti mathri tea snacks khasta"
  },
  {
    id: 1412,
    categoryId: 14,
    subcategoryId: "14.2",
    hindiName: "आलू लच्छा",
    englishName: "Crispy Potato Lachha (Aloo Lachha)",
    packNote: "उपलब्ध",
    image: IMG.bhujia,
    keywords: "aloo lachha crispy potato sticks fasting"
  },
  {
    id: 1413,
    categoryId: 14,
    subcategoryId: "14.3",
    hindiName: "लिज्जत पापड़",
    englishName: "Lijjat Urad Dal Papad",
    packNote: "15 किलो उपलब्ध",
    image: IMG.papad,
    keywords: "lijjat papad urad dal moong dal spicy"
  },
  {
    id: 1414,
    categoryId: 14,
    subcategoryId: "14.3",
    hindiName: "मानापुरी पापड़",
    englishName: "Manapuri Special Papad",
    packNote: "उपलब्ध",
    image: IMG.papad,
    keywords: "manapuri papad special catering"
  },
  {
    id: 1415,
    categoryId: 14,
    subcategoryId: "14.3",
    hindiName: "आम का अचार",
    englishName: "Traditional Mango Pickle",
    packNote: "1 किलो उपलब्ध",
    image: IMG.pickle_mango,
    keywords: "aam ka achar mango pickle desi mustard oil"
  },
  {
    id: 1416,
    categoryId: 14,
    subcategoryId: "14.3",
    hindiName: "मिक्स अचार",
    englishName: "Mixed Vegetable Pickle",
    packNote: "1 किलो उपलब्ध",
    image: IMG.pickle_mango,
    keywords: "mix achar mixed vegetable pickle pachranga"
  },
  {
    id: 1417,
    categoryId: 14,
    subcategoryId: "14.3",
    hindiName: "अंकुरित सलाद",
    englishName: "Sprouted Bean Salad Mix",
    packNote: "उपलब्ध",
    image: IMG.moong_dal,
    keywords: "sprouted salad bean mix healthy"
  },
  {
    id: 1418,
    categoryId: 14,
    subcategoryId: "14.4",
    hindiName: "फुल्की / पानी पूरी (फुल्की)",
    englishName: "Ready Pani Puri / Golgappa Puris",
    packNote: "2500 पीस उपलब्ध",
    image: IMG.golgappa_puris,
    keywords: "phulki pani puri golgappa puris ready sooji atta"
  },
  {
    id: 1419,
    categoryId: 14,
    subcategoryId: "14.4",
    hindiName: "रायता बूंदी",
    englishName: "Salted / Plain Raita Boondi",
    packNote: "उपलब्ध",
    image: IMG.bhujia,
    keywords: "raita boondi besan boondi curd dahi"
  },
  {
    id: 1420,
    categoryId: 14,
    subcategoryId: "14.4",
    hindiName: "लड्डू दाना 0 नं.",
    englishName: "Sweet Boondi Dana No. 0",
    packNote: "उपलब्ध",
    image: IMG.bhujia,
    keywords: "laddu dana zero no sweet motichoor boondi"
  },
  {
    id: 1421,
    categoryId: 14,
    subcategoryId: "14.4",
    hindiName: "चूरा मोटा (पोहा) / पोहा पतला",
    englishName: "Thick / Thin Flattened Rice",
    packNote: "5 कि.ग्रा. उपलब्ध",
    image: IMG.atta_wheat,
    keywords: "choora poha flattened rice thick thin"
  },
  {
    id: 1422,
    categoryId: 14,
    subcategoryId: "14.4",
    hindiName: "कॉर्नफ्लैक्स",
    englishName: "Breakfast Cornflakes",
    packNote: "उपलब्ध",
    image: IMG.corn,
    keywords: "cornflakes breakfast cereal milk"
  },
  {
    id: 1423,
    categoryId: 14,
    subcategoryId: "14.4",
    hindiName: "पॉपकार्न (मकई)",
    englishName: "Dried Popcorn Maize Kernels",
    packNote: "उपलब्ध",
    image: IMG.corn,
    keywords: "popcorn makai dried maize corn seeds"
  },
  {
    id: 1424,
    categoryId: 14,
    subcategoryId: "14.5",
    hindiName: "हाजमोला बड़ी",
    englishName: "Dabur Hajmola Big",
    packNote: "2 सीसी उपलब्ध",
    image: IMG.hajmola,
    keywords: "dabur hajmola digestive tablets chatpati"
  },
  {
    id: 1425,
    categoryId: 14,
    subcategoryId: "14.5",
    hindiName: "हींग गोली",
    englishName: "Hing Goli Digestive Pellets",
    packNote: "2 सीसी उपलब्ध",
    image: IMG.hajmola,
    keywords: "hing goli digestive pellets heeng"
  },
  {
    id: 1426,
    categoryId: 14,
    subcategoryId: "14.5",
    hindiName: "डाबर हिंगोली",
    englishName: "Dabur Hingoli",
    packNote: "उपलब्ध",
    image: IMG.hajmola,
    keywords: "dabur hingoli digestive"
  },
  {
    id: 1427,
    categoryId: 14,
    subcategoryId: "14.5",
    hindiName: "डाबर हाजमोला",
    englishName: "Dabur Hajmola Regular",
    packNote: "उपलब्ध",
    image: IMG.hajmola,
    keywords: "dabur hajmola regular tablets"
  },

  // 15. मिट्टी के बर्तन
  {
    id: 1501,
    categoryId: 15,
    subcategoryId: "15.1",
    hindiName: "कुल्हड़ बड़ा",
    englishName: "Big Earthen Clay Kulhad",
    packNote: "1500 पीस उपलब्ध",
    image: IMG.kulhad,
    keywords: "kulhad bada earthen clay chai tea cups lassi"
  },
  {
    id: 1502,
    categoryId: 15,
    subcategoryId: "15.1",
    hindiName: "कुल्हड़ छोटा",
    englishName: "Small Earthen Clay Kulhad",
    packNote: "उपलब्ध",
    image: IMG.kulhad,
    keywords: "kulhad chhota small clay tea cup"
  },
  {
    id: 1503,
    categoryId: 15,
    subcategoryId: "15.1",
    hindiName: "कुल्हड़ चाय वाला",
    englishName: "Earthen Tea Kulhad",
    packNote: "उपलब्ध",
    image: IMG.kulhad,
    keywords: "kulhad chai wala traditional terracotta"
  },
  {
    id: 1504,
    categoryId: 15,
    subcategoryId: "15.2",
    hindiName: "छेना पायस हाण्डी",
    englishName: "Clay Handi for Chena Payas",
    packNote: "1500 पीस उपलब्ध",
    image: IMG.clay_handi,
    keywords: "chena payas handi earthen clay pot dessert"
  },
  {
    id: 1505,
    categoryId: 15,
    subcategoryId: "15.2",
    hindiName: "कटोरी टमाटर चाट",
    englishName: "Clay Katori for Banarasi Tamatar Chaat",
    packNote: "1500 पीस उपलब्ध",
    image: IMG.clay_handi,
    keywords: "katori tamatar chaat banarasi clay bowl"
  },
  {
    id: 1506,
    categoryId: 15,
    subcategoryId: "15.2",
    hindiName: "कटोरी",
    englishName: "Standard Clay Katori / Bowl",
    packNote: "उपलब्ध",
    image: IMG.clay_handi,
    keywords: "clay katori mitti ki katori bowl"
  },
  {
    id: 1507,
    categoryId: 15,
    subcategoryId: "15.2",
    hindiName: "प्याली नाव मॉडल",
    englishName: "Boat-Shaped Clay Serving Cup",
    packNote: "उपलब्ध",
    image: IMG.clay_handi,
    keywords: "pyali naav boat shape clay serving"
  },
  {
    id: 1508,
    categoryId: 15,
    subcategoryId: "15.2",
    hindiName: "प्याली चौकोर",
    englishName: "Square Clay Serving Cup",
    packNote: "उपलब्ध",
    image: IMG.clay_handi,
    keywords: "pyali chaukor square clay cup"
  },
  {
    id: 1509,
    categoryId: 15,
    subcategoryId: "15.2",
    hindiName: "प्याली चमचम मॉडल",
    englishName: "Chamcham Model Oval Clay Cup",
    packNote: "उपलब्ध",
    image: IMG.clay_handi,
    keywords: "pyali chamcham oval clay dessert cup"
  },
  {
    id: 1510,
    categoryId: 15,
    subcategoryId: "15.2",
    hindiName: "कमोरी बड़ी साइज",
    englishName: "Large Earthen Bowl / Kamori",
    packNote: "उपलब्ध",
    image: IMG.clay_handi,
    keywords: "kamori badi large earthen bowl matka"
  },

  // 16. डिस्पोजल सामग्री
  {
    id: 1601,
    categoryId: 16,
    subcategoryId: "16.1",
    hindiName: "गिलास पानी",
    englishName: "Disposable Water Glass",
    packNote: "दुकान पर उपलब्ध",
    image: IMG.disposable_cups,
    keywords: "glass paani disposable water glass plastic paper"
  },
  {
    id: 1602,
    categoryId: 16,
    subcategoryId: "16.1",
    hindiName: "गिलास पानी वी.आई.पी.",
    englishName: "Premium VIP Heavy Water Glass",
    packNote: "4000 पीस उपलब्ध",
    image: IMG.disposable_cups,
    keywords: "vip water glass heavy duty catering"
  },
  {
    id: 1603,
    categoryId: 16,
    subcategoryId: "16.1",
    hindiName: "गिलास चाय",
    englishName: "Tea Paper Cups",
    packNote: "उपलब्ध",
    image: IMG.disposable_cups,
    keywords: "tea paper cups chai glass"
  },
  {
    id: 1604,
    categoryId: 16,
    subcategoryId: "16.1",
    hindiName: "गिलास काफी ओरिजनल",
    englishName: "Original Quality Coffee Cups",
    packNote: "2000 पीस उपलब्ध",
    image: IMG.disposable_cups,
    keywords: "coffee cups original quality disposable"
  },
  {
    id: 1605,
    categoryId: 16,
    subcategoryId: "16.1",
    hindiName: "गिलास काफी मोटा वाला",
    englishName: "Thick Heavy Duty Coffee Cups",
    packNote: "उपलब्ध",
    image: IMG.disposable_cups,
    keywords: "thick coffee cups ripple cups"
  },
  {
    id: 1606,
    categoryId: 16,
    subcategoryId: "16.1",
    hindiName: "गिलास फ्रूट जूस",
    englishName: "Fruit Juice Plastic Glasses",
    packNote: "उपलब्ध",
    image: IMG.disposable_cups,
    keywords: "fruit juice glasses plastic transparent"
  },
  {
    id: 1607,
    categoryId: 16,
    subcategoryId: "16.1",
    hindiName: "गिलास मॉकटेल",
    englishName: "Tall Transparent Mocktail Glasses",
    packNote: "उपलब्ध",
    image: IMG.disposable_cups,
    keywords: "mocktail glasses tall glasses party"
  },
  {
    id: 1608,
    categoryId: 16,
    subcategoryId: "16.1",
    hindiName: "गिलास कोल्ड्रिंक",
    englishName: "Cold Drink Glasses",
    packNote: "उपलब्ध",
    image: IMG.disposable_cups,
    keywords: "cold drink glasses plastic"
  },
  {
    id: 1609,
    categoryId: 16,
    subcategoryId: "16.1",
    hindiName: "गिलास गत्ते वाला",
    englishName: "Paperboard / Cardboard Glasses",
    packNote: "उपलब्ध",
    image: IMG.disposable_cups,
    keywords: "cardboard glasses gatte wale eco friendly"
  },
  {
    id: 1610,
    categoryId: 16,
    subcategoryId: "16.1",
    hindiName: "गिलास थर्माकोल",
    englishName: "Thermocol Glasses",
    packNote: "उपलब्ध",
    image: IMG.disposable_cups,
    keywords: "thermocol glasses"
  },
  {
    id: 1611,
    categoryId: 16,
    subcategoryId: "16.1",
    hindiName: "गोल्डेन कप चौकोर",
    englishName: "Golden Square Disposable Cups",
    packNote: "उपलब्ध",
    image: IMG.disposable_cups,
    keywords: "golden square cups catering luxury"
  },
  {
    id: 1612,
    categoryId: 16,
    subcategoryId: "16.1",
    hindiName: "गोल्डेन कप लम्बा",
    englishName: "Golden Tall Cups",
    packNote: "2000 पीस उपलब्ध",
    image: IMG.disposable_cups,
    keywords: "golden tall cups designer"
  },
  {
    id: 1613,
    categoryId: 16,
    subcategoryId: "16.1",
    hindiName: "गोल्डेन कप गोल",
    englishName: "Golden Round Cups",
    packNote: "2000 पीस उपलब्ध",
    image: IMG.disposable_cups,
    keywords: "golden round cups party catering"
  },
  {
    id: 1614,
    categoryId: 16,
    subcategoryId: "16.2",
    hindiName: "प्लेट 6\" गोल गन्ना",
    englishName: "6\" Round Sugarcane Bagasse Plate",
    packNote: "3000 पीस उपलब्ध",
    image: IMG.bagasse_plates,
    keywords: "bagasse plate 6 inch sugarcane round eco friendly"
  },
  {
    id: 1615,
    categoryId: 16,
    subcategoryId: "16.2",
    hindiName: "प्लेट 8\" गोल गन्ना",
    englishName: "8\" Round Sugarcane Bagasse Plate",
    packNote: "उपलब्ध",
    image: IMG.bagasse_plates,
    keywords: "bagasse plate 8 inch round sugarcane"
  },
  {
    id: 1616,
    categoryId: 16,
    subcategoryId: "16.2",
    hindiName: "प्लेट 6\" चौकोर गन्ना",
    englishName: "6\" Square Sugarcane Bagasse Plate",
    packNote: "उपलब्ध",
    image: IMG.bagasse_plates,
    keywords: "bagasse square plate 6 inch"
  },
  {
    id: 1617,
    categoryId: 16,
    subcategoryId: "16.2",
    hindiName: "प्लेट 8\" चौकोर गन्ना",
    englishName: "8\" Square Sugarcane Bagasse Plate",
    packNote: "उपलब्ध",
    image: IMG.bagasse_plates,
    keywords: "bagasse square plate 8 inch"
  },
  {
    id: 1618,
    categoryId: 16,
    subcategoryId: "16.2",
    hindiName: "प्लेट 2 खाना गन्ना",
    englishName: "2-Compartment Bagasse Plate",
    packNote: "उपलब्ध",
    image: IMG.bagasse_plates,
    keywords: "2 khana plate 2 compartment bagasse thali"
  },
  {
    id: 1619,
    categoryId: 16,
    subcategoryId: "16.2",
    hindiName: "प्लेट 3 खाना गन्ना",
    englishName: "3-Compartment Bagasse Plate",
    packNote: "उपलब्ध",
    image: IMG.bagasse_plates,
    keywords: "3 khana plate 3 compartment bagasse thali"
  },
  {
    id: 1620,
    categoryId: 16,
    subcategoryId: "16.2",
    hindiName: "स्नैक्स प्लेट तिकोमिया गन्ना",
    englishName: "Triangular Bagasse Snack Plate",
    packNote: "उपलब्ध",
    image: IMG.bagasse_plates,
    keywords: "triangular bagasse snack plate tikoniya"
  },
  {
    id: 1621,
    categoryId: 16,
    subcategoryId: "16.2",
    hindiName: "स्नैक्स प्लेट तिकोमिया गोल्डेन",
    englishName: "Golden Triangular Designer Plate",
    packNote: "2000 पीस उपलब्ध",
    image: IMG.bagasse_plates,
    keywords: "golden triangular designer plate"
  },
  {
    id: 1622,
    categoryId: 16,
    subcategoryId: "16.2",
    hindiName: "सिल्वर प्लेट छोटी",
    englishName: "Small Silver Paper Plate",
    packNote: "उपलब्ध",
    image: IMG.bagasse_plates,
    keywords: "silver plate choti paper plate"
  },
  {
    id: 1623,
    categoryId: 16,
    subcategoryId: "16.2",
    hindiName: "सिल्वर प्लेट बड़ी",
    englishName: "Large Silver Paper Plate",
    packNote: "उपलब्ध",
    image: IMG.bagasse_plates,
    keywords: "silver plate badi buffet plate"
  },
  {
    id: 1624,
    categoryId: 16,
    subcategoryId: "16.2",
    hindiName: "बफर थाली",
    englishName: "Rigid Buffet Thali Plate",
    packNote: "200 पीस उपलब्ध",
    image: IMG.bagasse_plates,
    keywords: "buffer thali buffet rigid plate 5 compartment"
  },
  {
    id: 1625,
    categoryId: 16,
    subcategoryId: "16.2",
    hindiName: "बफर थाली वी.आई.पी.",
    englishName: "Premium VIP Buffet Thali Plate",
    packNote: "उपलब्ध",
    image: IMG.bagasse_plates,
    keywords: "vip buffer thali heavy duty wedding"
  },
  {
    id: 1626,
    categoryId: 16,
    subcategoryId: "16.3",
    hindiName: "कटोरी फुल्की वाला गन्ना",
    englishName: "Bagasse Golgappa / Phulki Bowl",
    packNote: "उपलब्ध",
    image: IMG.bagasse_plates,
    keywords: "phulki katori bagasse golgappa bowl"
  },
  {
    id: 1627,
    categoryId: 16,
    subcategoryId: "16.3",
    hindiName: "कटोरी 4\" गोल गन्ना",
    englishName: "4\" Round Bagasse Bowl",
    packNote: "उपलब्ध",
    image: IMG.bagasse_plates,
    keywords: "4 inch bagasse bowl round sweet"
  },
  {
    id: 1628,
    categoryId: 16,
    subcategoryId: "16.3",
    hindiName: "कटोरी 6\" गोल गन्ना",
    englishName: "6\" Round Bagasse Bowl",
    packNote: "उपलब्ध",
    image: IMG.bagasse_plates,
    keywords: "6 inch bagasse bowl round soup"
  },
  {
    id: 1629,
    categoryId: 16,
    subcategoryId: "16.3",
    hindiName: "कटोरी छोटी चौकोर गन्ना",
    englishName: "Small Square Bagasse Bowl",
    packNote: "उपलब्ध",
    image: IMG.bagasse_plates,
    keywords: "small square bagasse bowl"
  },
  {
    id: 1630,
    categoryId: 16,
    subcategoryId: "16.3",
    hindiName: "कटोरी बड़ी चौकोर गन्ना",
    englishName: "Large Square Bagasse Bowl",
    packNote: "उपलब्ध",
    image: IMG.bagasse_plates,
    keywords: "large square bagasse bowl"
  },
  {
    id: 1631,
    categoryId: 16,
    subcategoryId: "16.3",
    hindiName: "सिल्वर दोनिया छोटी",
    englishName: "Small Silver Paper Dona",
    packNote: "उपलब्ध",
    image: IMG.bagasse_plates,
    keywords: "silver doniya choti paper dona"
  },
  {
    id: 1632,
    categoryId: 16,
    subcategoryId: "16.3",
    hindiName: "सिल्वर दोनिया बड़ी",
    englishName: "Large Silver Paper Dona",
    packNote: "उपलब्ध",
    image: IMG.bagasse_plates,
    keywords: "silver doniya badi large dona"
  },
  {
    id: 1633,
    categoryId: 16,
    subcategoryId: "16.3",
    hindiName: "फुल्की दोनिया",
    englishName: "Phulki / Golgappa Dona",
    packNote: "उपलब्ध",
    image: IMG.bagasse_plates,
    keywords: "phulki doniya golgappa dona"
  },
  {
    id: 1634,
    categoryId: 16,
    subcategoryId: "16.3",
    hindiName: "सूप बाउल सेट",
    englishName: "Soup Bowl with Base Set",
    packNote: "उपलब्ध",
    image: IMG.bagasse_plates,
    keywords: "soup bowl set with base"
  },
  {
    id: 1635,
    categoryId: 16,
    subcategoryId: "16.3",
    hindiName: "बाउल",
    englishName: "All-Purpose Serving Bowl",
    packNote: "उपलब्ध",
    image: IMG.bagasse_plates,
    keywords: "serving bowl plastic paper"
  },
  {
    id: 1636,
    categoryId: 16,
    subcategoryId: "16.3",
    hindiName: "रसमलाई कटोरी",
    englishName: "Rasmalai Bowl",
    packNote: "उपलब्ध",
    image: IMG.bagasse_plates,
    keywords: "rasmalai katori sweet bowl"
  },
  {
    id: 1637,
    categoryId: 16,
    subcategoryId: "16.3",
    hindiName: "रसगुल्ला कटोरी",
    englishName: "Rasgulla Bowl",
    packNote: "उपलब्ध",
    image: IMG.bagasse_plates,
    keywords: "rasgulla katori sweet bowl"
  },
  {
    id: 1638,
    categoryId: 16,
    subcategoryId: "16.4",
    hindiName: "चम्मच वुडेन छोटी",
    englishName: "Small Wooden Spoon",
    packNote: "8000 पीस उपलब्ध",
    image: IMG.wooden_spoons,
    keywords: "wooden spoon choti eco friendly chamach ice cream"
  },
  {
    id: 1639,
    categoryId: 16,
    subcategoryId: "16.4",
    hindiName: "चम्मच वुडेन बड़ी",
    englishName: "Large Wooden Spoon",
    packNote: "उपलब्ध",
    image: IMG.wooden_spoons,
    keywords: "wooden spoon badi large eco spoon"
  },
  {
    id: 1640,
    categoryId: 16,
    subcategoryId: "16.4",
    hindiName: "चम्मच वुडेन बेल्चा",
    englishName: "Wooden Shovel / Flat Scoop Spoon",
    packNote: "उपलब्ध",
    image: IMG.wooden_spoons,
    keywords: "wooden shovel belcha flat ice cream spoon"
  },
  {
    id: 1641,
    categoryId: 16,
    subcategoryId: "16.4",
    hindiName: "चम्मच वुडेन जनरल",
    englishName: "Standard Wooden Spoon",
    packNote: "उपलब्ध",
    image: IMG.wooden_spoons,
    keywords: "wooden spoon general standard"
  },
  {
    id: 1642,
    categoryId: 16,
    subcategoryId: "16.4",
    hindiName: "चम्मच वुडेन कांटा छोटी",
    englishName: "Small Wooden Fork",
    packNote: "उपलब्ध",
    image: IMG.wooden_spoons,
    keywords: "wooden fork choti kanta fruit fork"
  },
  {
    id: 1643,
    categoryId: 16,
    subcategoryId: "16.4",
    hindiName: "चम्मच वुडेन कांटा बड़ी",
    englishName: "Large Wooden Fork",
    packNote: "उपलब्ध",
    image: IMG.wooden_spoons,
    keywords: "wooden fork badi large fork noodles"
  },
  {
    id: 1644,
    categoryId: 16,
    subcategoryId: "16.4",
    hindiName: "चम्मच प्लास्टिक छोटी",
    englishName: "Small Plastic Spoon",
    packNote: "उपलब्ध",
    image: IMG.wooden_spoons,
    keywords: "plastic spoon choti"
  },
  {
    id: 1645,
    categoryId: 16,
    subcategoryId: "16.4",
    hindiName: "चम्मच प्लास्टिक बड़ी",
    englishName: "Large Plastic Spoon",
    packNote: "उपलब्ध",
    image: IMG.wooden_spoons,
    keywords: "plastic spoon badi"
  },
  {
    id: 1646,
    categoryId: 16,
    subcategoryId: "16.4",
    hindiName: "चम्मच प्लास्टिक कांटा छोटी",
    englishName: "Small Plastic Fork",
    packNote: "3000 पीस उपलब्ध",
    image: IMG.wooden_spoons,
    keywords: "plastic fork kanta choti"
  },
  {
    id: 1647,
    categoryId: 16,
    subcategoryId: "16.4",
    hindiName: "चम्मच प्लास्टिक कांटा बड़ी",
    englishName: "Large Plastic Fork",
    packNote: "उपलब्ध",
    image: IMG.wooden_spoons,
    keywords: "plastic fork kanta badi"
  },
  {
    id: 1648,
    categoryId: 16,
    subcategoryId: "16.5",
    hindiName: "स्ट्रा पाइप फ्रूट",
    englishName: "Straight Fruit Juice Straws",
    packNote: "उपलब्ध",
    image: IMG.disposable_cups,
    keywords: "straw pipe fruit juice drinking straw"
  },
  {
    id: 1649,
    categoryId: 16,
    subcategoryId: "16.5",
    hindiName: "स्ट्रा छतरी",
    englishName: "Cocktail Decorative Umbrella Straws",
    packNote: "उपलब्ध",
    image: IMG.disposable_cups,
    keywords: "straw chhatri cocktail umbrella party"
  },
  {
    id: 1650,
    categoryId: 16,
    subcategoryId: "16.5",
    hindiName: "टूथपिन स्टिक",
    englishName: "Toothpick Sticks",
    packNote: "20 डिब्बा उपलब्ध",
    image: IMG.wooden_spoons,
    keywords: "toothpick sticks wooden teeth cleaning"
  },
  {
    id: 1651,
    categoryId: 16,
    subcategoryId: "16.5",
    hindiName: "टूथपिन 6\"",
    englishName: "6-Inch Wooden Skewers / Toothpicks",
    packNote: "10 पैकेट उपलब्ध",
    image: IMG.wooden_spoons,
    keywords: "toothpin 6 inch wooden skewers tikka"
  },
  {
    id: 1652,
    categoryId: 16,
    subcategoryId: "16.5",
    hindiName: "पापकॉर्न ठोंगा कोन",
    englishName: "Popcorn Paper Cone Pouches",
    packNote: "उपलब्ध",
    image: IMG.disposable_cups,
    keywords: "popcorn thonga cone paper pouch"
  },

  // 17. पैकेजिंग, हाइजीन, क्लॉथ व सर्विस सामग्री
  {
    id: 1701,
    categoryId: 17,
    subcategoryId: "17.1",
    hindiName: "टिश्यू पेपर छोटा",
    englishName: "Small Cocktail Tissue Papers",
    packNote: "2000 पीस उपलब्ध",
    image: IMG.tissues_foil,
    keywords: "tissue paper chota napkin cocktail"
  },
  {
    id: 1702,
    categoryId: 17,
    subcategoryId: "17.1",
    hindiName: "टिश्यू पेपर बड़ा",
    englishName: "Large Dinner Tissue Papers",
    packNote: "1500 पीस उपलब्ध",
    image: IMG.tissues_foil,
    keywords: "tissue paper bada dinner table napkin"
  },
  {
    id: 1703,
    categoryId: 17,
    subcategoryId: "17.1",
    hindiName: "सिल्वर फाईल / फॉयल",
    englishName: "Aluminium Foil Paper Roll",
    packNote: "3 कि.ग्रा. / 2 कि.ग्रा.",
    image: IMG.tissues_foil,
    keywords: "silver foil aluminium foil roll food wrap roti wrap"
  },
  {
    id: 1704,
    categoryId: 17,
    subcategoryId: "17.1",
    hindiName: "फिल्म फाइल / क्लीन फाइल",
    englishName: "Transparent Food Cling Film Roll",
    packNote: "1 रोल / 2 रोल",
    image: IMG.tissues_foil,
    keywords: "cling film roll transparent food wrap"
  },
  {
    id: 1705,
    categoryId: 17,
    subcategoryId: "17.1",
    hindiName: "पेपर रोल सिल्वर",
    englishName: "Silver Laminated Paper Roll",
    packNote: "50 मीटर उपलब्ध",
    image: IMG.tissues_foil,
    keywords: "paper roll silver laminated catering"
  },
  {
    id: 1706,
    categoryId: 17,
    subcategoryId: "17.1",
    hindiName: "बटर पेपर कटी",
    englishName: "Pre-cut Butter Paper Sheets",
    packNote: "उपलब्ध",
    image: IMG.tissues_foil,
    keywords: "butter paper sheets pre cut baking wrapping"
  },
  {
    id: 1707,
    categoryId: 17,
    subcategoryId: "17.2",
    hindiName: "बड़ी पन्नी 25 कि० वाली",
    englishName: "25 kg Heavy Duty Plastic Carry Bag",
    packNote: "1 पैकेट उपलब्ध",
    image: IMG.tissues_foil,
    keywords: "badi panni 25 kg heavy duty carry bag"
  },
  {
    id: 1708,
    categoryId: 17,
    subcategoryId: "17.2",
    hindiName: "लॉकर पन्नी",
    englishName: "Zip-Lock Airtight Pouches",
    packNote: "उपलब्ध",
    image: IMG.tissues_foil,
    keywords: "locker panni zip lock airtight pouches storage"
  },
  {
    id: 1709,
    categoryId: 17,
    subcategoryId: "17.2",
    hindiName: "मीठा डिब्बा बायन",
    englishName: "Sweet Box Packing / Bayana Box",
    packNote: "उपलब्ध",
    image: IMG.tissues_foil,
    keywords: "meetha dibba sweet box bayana packaging wedding"
  },
  {
    id: 1710,
    categoryId: 17,
    subcategoryId: "17.2",
    hindiName: "रबड़",
    englishName: "Elastic Rubber Bands",
    packNote: "उपलब्ध",
    image: IMG.tissues_foil,
    keywords: "rubber band elastic packing"
  },
  {
    id: 1711,
    categoryId: 17,
    subcategoryId: "17.2",
    hindiName: "रिबन",
    englishName: "Packing Decorative Ribbon",
    packNote: "5 पैकेट उपलब्ध",
    image: IMG.tissues_foil,
    keywords: "ribbon packing decorative gift"
  },
  {
    id: 1712,
    categoryId: 17,
    subcategoryId: "17.3",
    hindiName: "सर्विस ग्लफ्स कॉटन",
    englishName: "White Cotton Waiter Service Gloves",
    packNote: "50 जोड़ा उपलब्ध",
    image: IMG.tissues_foil,
    keywords: "service gloves cotton waiter white gloves"
  },
  {
    id: 1713,
    categoryId: 17,
    subcategoryId: "17.3",
    hindiName: "पन्नी ग्लफ्स",
    englishName: "Disposable Plastic Gloves",
    packNote: "1 पैकेट उपलब्ध",
    image: IMG.tissues_foil,
    keywords: "panni gloves plastic disposable food hygiene"
  },
  {
    id: 1714,
    categoryId: 17,
    subcategoryId: "17.3",
    hindiName: "एप्रन",
    englishName: "Kitchen / Service Aprons",
    packNote: "उपलब्ध",
    image: IMG.tissues_foil,
    keywords: "apron kitchen chef service apron"
  },
  {
    id: 1715,
    categoryId: 17,
    subcategoryId: "17.3",
    hindiName: "डिटॉल हैण्डवास",
    englishName: "Dettol Liquid Handwash",
    packNote: "उपलब्ध",
    image: IMG.tissues_foil,
    keywords: "dettol handwash soap liquid hygiene"
  },
  {
    id: 1716,
    categoryId: 17,
    subcategoryId: "17.3",
    hindiName: "कोलिन",
    englishName: "Colin Glass & Surface Cleaner",
    packNote: "उपलब्ध",
    image: IMG.tissues_foil,
    keywords: "colin glass cleaner surface cleaner spray"
  },
  {
    id: 1717,
    categoryId: 17,
    subcategoryId: "17.3",
    hindiName: "झाड़ू तार वाली",
    englishName: "Wire Sweeping Broom",
    packNote: "उपलब्ध",
    image: IMG.tissues_foil,
    keywords: "jhadu tar wali wire broom cleaning"
  },
  {
    id: 1718,
    categoryId: 17,
    subcategoryId: "17.4",
    hindiName: "मारकीन कपड़ा / नया मारकीन कपड़ा",
    englishName: "Straining Muslin Cloth",
    packNote: "10 मीटर उपलब्ध",
    image: IMG.tissues_foil,
    keywords: "markin kapda muslin chena straining cloth halwai"
  },
  {
    id: 1719,
    categoryId: 17,
    subcategoryId: "17.4",
    hindiName: "मलमल सफेद कपड़ा",
    englishName: "Fine White Muslin Cloth",
    packNote: "10 मीटर उपलब्ध",
    image: IMG.tissues_foil,
    keywords: "malmal safed kapda fine muslin white"
  },
  {
    id: 1720,
    categoryId: 17,
    subcategoryId: "17.4",
    hindiName: "सूती धोती",
    englishName: "Pure Cotton Dhoti",
    packNote: "6 पीस उपलब्ध",
    image: IMG.tissues_foil,
    keywords: "suti dhoti pure cotton pooja halwai"
  },
  {
    id: 1721,
    categoryId: 17,
    subcategoryId: "17.4",
    hindiName: "पुरानी धोती सूती",
    englishName: "Washed Soft Cotton Rags / Dhoti",
    packNote: "10 उपलब्ध",
    image: IMG.tissues_foil,
    keywords: "purani dhoti suti soft cleaning cloth"
  },
  {
    id: 1722,
    categoryId: 17,
    subcategoryId: "17.5",
    hindiName: "फ्यूल डिब्बा वाला",
    englishName: "Chafing Dish Buffet Fuel Tin",
    packNote: "30 पीस उपलब्ध",
    image: IMG.tissues_foil,
    keywords: "fuel dibba chafing dish buffet warmer catering"
  },
  {
    id: 1723,
    categoryId: 17,
    subcategoryId: "17.5",
    hindiName: "मोची खीला",
    englishName: "Tack Nails / Cobbler Nails (Tent/Counter Setup)",
    packNote: "200 ग्राम उपलब्ध",
    image: IMG.tissues_foil,
    keywords: "mochi khila tack nails tent counter setup"
  },
  {
    id: 1724,
    categoryId: 17,
    subcategoryId: "17.5",
    hindiName: "पेपर पिन",
    englishName: "Paper Pins",
    packNote: "उपलब्ध",
    image: IMG.tissues_foil,
    keywords: "paper pin stationery office"
  },
  {
    id: 1725,
    categoryId: 17,
    subcategoryId: "17.5",
    hindiName: "अखबार पुराना",
    englishName: "Old Newspaper",
    packNote: "3 किलो उपलब्ध",
    image: IMG.tissues_foil,
    keywords: "akhbar purana old newspaper packaging"
  },
  {
    id: 1726,
    categoryId: 17,
    subcategoryId: "17.5",
    hindiName: "माचिस",
    englishName: "Safety Matchbox",
    packNote: "2 पैकेट उपलब्ध",
    image: IMG.tissues_foil,
    keywords: "machis matchbox safety matches pooja"
  }
];
