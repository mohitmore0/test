/* =====================================================================
   DATA.JS  -  Poori website ka content yahin se aata hai.
   Is file ko edit karo, save karo, browser refresh karo. Bas.

   IMAGE ADD KARNA:  "images/photo.jpg" (apni file images/ folder me rakho)
                     ya koi bhi https://... link likho.
   PRODUCT ADD KARNA: products list me ek { ... } block copy-paste karo
                     aur slug unique rakho. Uska page khud ban jayega.
   PRODUCT REMOVE:   uska { ... } block delete karo.
   Last me terminal me:  node build.js   (sitemap.xml + llms.txt update)
   ===================================================================== */
window.SITE = {
  name: "Space and Tech Engineering LLP",
  short: "Space and Tech Engineering",
  tagline: "Made in India drone components",
  url: "https://www.spaceandtechengineerings.com",   // <-- apna final domain (end me / nahi)
  phone: "+91 96657 17903",
  whatsapp: "919665717903",                          // country code ke saath, + ke bina
  email: "arup@spaceandtech-engineerings.com",
  year: 2025,
  social: [
    { label: "LinkedIn",  url: "https://in.linkedin.com/company/space-and-tech-engineering" },
    { label: "Instagram", url: "https://www.instagram.com/spaceandtechengg" }
  ],
  docsUrl: "https://spaceandtech-engineerings.gitbook.io/space-and-tech-engineerings-docs",
  careersUrl: "https://www.spaceandtechengineerings.com/careers",

  /* ---------- HOME PAGE ---------- */
  hero: {
    title: "Drone electronics, made in India",
    text: "Flight controllers, AM32 ESCs and GPS modules for UAV and FPV builders. Designed in Mumbai and Nashik.",
    image: "https://static.wixstatic.com/media/e688f6_10c2110744d94fc980962c8b7d6fc872~mv2.png"
  },
  stats: [   // n = number, s = suffix
    { n: 2000, s: "+", l: "Drone components manufactured" },
    { n: 5,    s: "+", l: "Product categories" },
    { n: 3,    s: "+", l: "Years of innovation" },
    { n: 20,   s: "+", l: "Industry partnerships" }
  ],

  /* ---------- PRODUCTS ----------
     status: "available" ya "soon"   |  featured:true => home page par dikhega
     image  : main photo             |  gallery: extra photos (optional)
     specs  : [["Naam","Value"], ...] (khali chhodo to table hide ho jayegi)
     docs   : [{label,url}]          |  buyUrl: store link (optional)        */
  categories: ["Flight controllers", "ESCs", "GPS", "Development kits", "Transmitters"],
  products: [
    {
      slug: "aazmuth-flight-controller", name: "Aazmuth flight controller", category: "Flight controllers",
      status: "available", featured: true,
      image: "https://static.wixstatic.com/media/e688f6_4ef9d2c2ab6a43a5ab35ac564c0604cc~mv2.jpg",
      gallery: [],
      short: "Modular, triple-redundant flight controller with isolated sensors.",
      description: "Separate IMU modules connect over 20-pin Aazmuth Bus connectors, with each sensor on its own isolated bus. Built for defense, industry, agriculture, startups and universities.",
      features: ["Isolated sensors, triple redundancy", "Modular IMU boards on 20-pin Aazmuth Bus", "For defense, industry, agriculture, startups and universities"],
      specs: [["Microcontroller","STM32 H7, Cortex-M7"],["Clock speed","Up to 480 MHz"],["Memory","2 MB flash, 1 MB RAM"],["Redundancy","3 IMUs, 2 barometers"],["Size","92 x 54 x 14.6 mm"],["Weight","63 g"]],
      docs: [
        { label: "Overview",    url: "https://spaceandtech-engineerings.gitbook.io/space-and-tech-engineerings-docs/flight-controller/aazmuth/overview" },
        { label: "Pinout",      url: "https://spaceandtech-engineerings.gitbook.io/space-and-tech-engineerings-docs/flight-controller/aazmuth/pinout-diagram" },
        { label: "Calibration", url: "https://spaceandtech-engineerings.gitbook.io/space-and-tech-engineerings-docs/flight-controller/aazmuth/basic-configuration-and-calibration" },
        { label: "Sensors",     url: "https://spaceandtech-engineerings.gitbook.io/space-and-tech-engineerings-docs/flight-controller/aazmuth/sensor-integration-and-peripheral-hardware-connection" },
        { label: "Dimensions",  url: "https://spaceandtech-engineerings.gitbook.io/space-and-tech-engineerings-docs/flight-controller/aazmuth/dimensions" }
      ],
      buyUrl: "https://www.spaceandtechengineerings.com/aazumth-flight-controller"
    },
    {
      slug: "exelr8-fpv-flight-controller-f7", name: "Exelr8 FPV flight controller F7", category: "Flight controllers",
      status: "available", featured: true,
      image: "https://static.wixstatic.com/media/e688f6_7ed082c4ce4c4d01baea626a1683544f~mv2.jpg", gallery: [],
      short: "F7 flight controller for FPV builds.",
      description: "Flight controller for FPV drones.",
      features: [], specs: [], docs: [],
      buyUrl: "https://www.spaceandtechengineerings.com/exeler8-fpv-flight-controller-f7"
    },
    {
      slug: "skydrive-am32-60a", name: "Skydrive AM32 60A 3-6S", category: "ESCs",
      status: "available", featured: true,
      image: "https://static.wixstatic.com/media/e688f6_f41fedc59ef8475a8a40bf6cc0885654~mv2.jpg", gallery: [],
      short: "60A AM32 speed controller for 3-6S batteries.",
      description: "AM32 firmware ESC for 3-6S builds.",
      features: ["AM32 firmware", "3-6S input"], specs: [["Current","60 A"],["Battery","3-6S"],["Firmware","AM32"]], docs: [],
      buyUrl: "https://www.spaceandtechengineerings.com/skydrive-4-in-1-esc-for-fpv-drones"
    },
    {
      slug: "skydrive-am32-40a", name: "Skydrive AM32 40A 3-6S", category: "ESCs",
      status: "available", featured: false,
      image: "https://static.wixstatic.com/media/e688f6_f41fedc59ef8475a8a40bf6cc0885654~mv2.jpg", gallery: [],
      short: "40A AM32 speed controller for 3-6S batteries.",
      description: "AM32 firmware ESC for 3-6S builds.",
      features: ["AM32 firmware", "3-6S input"], specs: [["Current","40 A"],["Battery","3-6S"],["Firmware","AM32"]], docs: []
    },
    {
      slug: "skydrive-55a-am32-4-in-1", name: "Skydrive 55A AM32 4-in-1", category: "ESCs",
      status: "available", featured: false,
      image: "https://static.wixstatic.com/media/e688f6_f41fedc59ef8475a8a40bf6cc0885654~mv2.jpg", gallery: [],
      short: "4-in-1 AM32 ESC for FPV drones.",
      description: "Four ESCs on one board for FPV builds.",
      features: ["AM32 firmware", "4-in-1 board"], specs: [["Current","55 A"],["Type","4-in-1"],["Firmware","AM32"]], docs: [],
      buyUrl: "https://www.spaceandtechengineerings.com/skydrive-4-in-1-esc-for-fpv-drones"
    },
    {
      slug: "navsate-gps-for-uavs", name: "NAVSATE GPS for UAVs", category: "GPS",
      status: "available", featured: true,
      image: "https://static.wixstatic.com/media/e688f6_64ebb40d939447eb83457bcc81170048~mv2.jpg", gallery: [],
      short: "GPS module tuned for UAVs.",
      description: "A GPS module tuned for UAVs and tested on long flights.",
      features: [], specs: [], docs: [],
      buyUrl: "https://www.spaceandtechengineerings.com/navsate-gps-for-uavs"
    },
    {
      slug: "navsate-mini-gps", name: "NAVSATE mini for FPV drones", category: "GPS",
      status: "available", featured: false,
      image: "https://static.wixstatic.com/media/e688f6_64ebb40d939447eb83457bcc81170048~mv2.jpg", gallery: [],
      short: "Compact GPS for FPV drones.",
      description: "Small GPS module for FPV builds.",
      features: [], specs: [], docs: []
    },
    {
      slug: "dev-kit-1", name: "Dev Kit 1", category: "Development kits", status: "soon", featured: false,
      image: "https://static.wixstatic.com/media/e688f6_c9645f8cf58b4468be911911ded63735~mv2.jpg", gallery: [],
      short: "Development kit. Coming soon.", description: "Details will be added soon.", features: [], specs: [], docs: []
    },
    {
      slug: "dev-kit-2", name: "Dev Kit 2", category: "Development kits", status: "soon", featured: false,
      image: "https://static.wixstatic.com/media/e688f6_c9645f8cf58b4468be911911ded63735~mv2.jpg", gallery: [],
      short: "Development kit. Coming soon.", description: "Details will be added soon.", features: [], specs: [], docs: []
    },
    {
      slug: "trx-5km", name: "TRX 5 km", category: "Transmitters", status: "soon", featured: false,
      image: "https://static.wixstatic.com/media/e688f6_c9645f8cf58b4468be911911ded63735~mv2.jpg", gallery: [],
      short: "5 km transmitter. Coming soon.", description: "Details will be added soon.", features: [], specs: [], docs: []
    },
    {
      slug: "trx-10km", name: "TRX 10 km", category: "Transmitters", status: "soon", featured: false,
      image: "https://static.wixstatic.com/media/e688f6_c9645f8cf58b4468be911911ded63735~mv2.jpg", gallery: [],
      short: "10 km transmitter. Coming soon.", description: "Details will be added soon.", features: [], specs: [], docs: []
    }
  ],

  /* ---------- PARTNERS (logo add/remove) ---------- */
  partners: [
    { name: "Garuda Aerospace", logo: "https://static.wixstatic.com/media/e688f6_d3ee757659cc417aad9bb72c682c689f~mv2.png" },
    { name: "DA3", logo: "https://static.wixstatic.com/media/6d90dc_a5da0d88ad12431ba5e9c54e63df72a9~mv2.png" },
    { name: "NEC", logo: "https://static.wixstatic.com/media/6d90dc_3dd5e5ebaee041adab5fd2cc8b6da442~mv2.png" },
    { name: "Known Aero", logo: "https://static.wixstatic.com/media/6d90dc_6b2f7c345be44924b5dcf8815cf5bb8f~mv2.png" },
    { name: "Nitiraj Engineers", logo: "https://static.wixstatic.com/media/6d90dc_670757edf25448788beded63433e1867~mv2.png" },
    { name: "Faradic", logo: "https://static.wixstatic.com/media/6d90dc_72fb15a8ee064522bdce9e8847f92c3c~mv2.png" },
    { name: "Riddl", logo: "https://static.wixstatic.com/media/6d90dc_cf66406c88d7461693812da1930b6bd5~mv2.png" },
    { name: "Sandip University", logo: "https://static.wixstatic.com/media/6d90dc_75caab3639a34eef92d6dc0154a4608b~mv2.png" },
    { name: "Rotorize Aviation", logo: "https://static.wixstatic.com/media/6d90dc_c34d727a13a24f1e86c07c676c491c0c~mv2.png" },
    { name: "Flylab Solutions", logo: "https://static.wixstatic.com/media/6d90dc_2643795abf4c44b3971c111bd4bd011f~mv2.png" },
    { name: "Greventek", logo: "https://static.wixstatic.com/media/6d90dc_1407130ef82344e78a8920eb1d16beb2~mv2.png" },
    { name: "MSINS", logo: "https://static.wixstatic.com/media/6d90dc_632a942e250946649aaac5083453e028~mv2.png" },
    { name: "GGSF", logo: "https://static.wixstatic.com/media/6d90dc_8129da0665d746f89b3120d47318336f~mv2.png" }
  ],

  /* ---------- ABOUT PAGE ---------- */
  about: {
    title: "Built in Nashik. Flown everywhere.",
    mission: "Make dependable flight electronics in India, with open docs and support that builders can actually reach.",   // <-- apna mission likho
    vision: "An Indian drone industry that flies on locally designed, locally supported hardware.",                         // <-- apna vision likho
    text: "We are a small team of hardware and firmware engineers making flight controllers, ESCs and GPS modules that Indian builders can actually get support for.",
    image: "",   // optional: about page ki badi photo
    timeline: [
      { year: "2022", title: "The first board", text: "Two engineers, one soldering station and a flight controller that finally held a hover." },
      { year: "2023", title: "Skydrive ESCs", text: "AM32 speed controllers go into small batches and onto builders' benches." },
      { year: "2024", title: "NAVSATE GPS", text: "A GPS module tuned for UAVs, tested on long, boring, wonderful flights." },
      { year: "2025", title: "Aazmuth", text: "Our modular, triple-redundant flagship controller leaves the lab." }
    ],
    values: [
      { title: "Test everything", text: "Every batch gets bench time and flight time before it ships." },
      { title: "Write it down", text: "Public docs, pinouts and changelogs, so you are never guessing." },
      { title: "Make it here", text: "Designed in Mumbai and Nashik, so a fix is a phone call away." }
    ],
    /* photo khali ho to initials wala avatar dikhega. Team hatani ho to list khali [] kar do. */
    team: [],
    /* workshop photos: image add/remove yahin. Khali [] = section hide. */
    gallery: [
      // { src: "images/workshop-1.jpg", caption: "PCB layout review" },
    ],
    offices: [
      { city: "Mumbai", role: "Registered office", address: "Unit 37A, Patel Industrial Estate, Vivekananda Rd, Yadav Nagar, Dahisar East, Mumbai 400068" },
      { city: "Nashik", role: "Product development centre", address: "Vinayak Bungalow, Shradha Nagar, Suyog Colony, Parijat Nagar, Nashik 422005" }
    ]
  },

  /* ---------- EXTRA CONTENT (home, solutions, support) ---------- */
  ticker: ["Flight controllers", "AM32 ESCs", "GPS modules", "Dev kits", "Transmitters", "Made in India"],
  manifesto: "We design the electronics, write the firmware and fly every batch ourselves. When something needs fixing, you call the people who built it.",
  apps: [
    { t: "Agriculture", x: "Spraying and crop-mapping drones need a steady hover and long, GPS-locked runs.", p: ["aazmuth-flight-controller", "navsate-gps-for-uavs", "skydrive-am32-60a"] },
    { t: "Survey and mapping", x: "Redundant sensors and a reliable GPS keep survey lines straight.", p: ["aazmuth-flight-controller", "navsate-gps-for-uavs"] },
    { t: "Defense and security", x: "Triple-redundant sensing for missions where a failure is not an option.", p: ["aazmuth-flight-controller", "navsate-gps-for-uavs"] },
    { t: "FPV racing and freestyle", x: "Light, fast F7 control and 4-in-1 ESCs for tight, punchy builds.", p: ["exelr8-fpv-flight-controller-f7", "skydrive-55a-am32-4-in-1", "navsate-mini-gps"] },
    { t: "Education and research", x: "Modular boards and open docs that students can open up and learn from.", p: ["aazmuth-flight-controller", "dev-kit-1"] },
    { t: "Startups and prototypes", x: "Small batches, direct support and parts that match your build.", p: ["skydrive-am32-40a", "skydrive-am32-60a", "exelr8-fpv-flight-controller-f7"] }
  ],
  process: [
    { t: "Design", x: "Schematics, PCBs and firmware drawn in Mumbai and Nashik." },
    { t: "Bench test", x: "Every board is powered, loaded and measured before it leaves the bench." },
    { t: "Fly test", x: "Real flights, real logs, real fixes." },
    { t: "Ship and support", x: "Public docs, and a phone number that gets answered." }
  ],
  faq: [
    { q: "Which firmware do your ESCs run?", a: "Skydrive ESCs run AM32 firmware, so you can configure and update them with the usual AM32 tools." },
    { q: "Can I buy in bulk or for a company project?", a: "Yes. Send quantity and use case through the quote form, or call us, and we will reply with the right parts." },
    { q: "Where are the pinouts and setup guides?", a: "In our public documentation. Each product page links to its own docs, where they exist." },
    { q: "Which flight controller should I pick?", a: "Aazmuth for redundancy and professional work, Exelr8 F7 for FPV builds. Tell us your build and we will confirm." },
    { q: "When will the coming-soon products launch?", a: "Use Ask about launch on the product page and we will tell you as soon as there is a date." },
    { q: "Do you ship across India?", a: "Call or WhatsApp us with your pincode and quantity and we will confirm shipping." }
  ]
};
