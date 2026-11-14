SPACE AND TECH ENGINEERING - WEBSITE (kaise edit karein)
========================================================

FILES
  index.html      Home          products.html   Saare products (filter ke saath)
  product.html    Har product ka page (data.js se khud banta hai)
  about.html      About         contact.html    Contact + quote form
  data.js         <<< SAARA CONTENT YAHAN. Sirf isi ko edit karna hai >>>
  style.css       Design / colors         app.js   Pages banane ka code (chhuna nahi)
  build.js        sitemap.xml + llms.txt + robots.txt banata hai
  images/         Apni photos yahan rakho

KAAM KAISE KAREIN (sab data.js me)
  Product add      products list me kisi bhi { ... } block ko copy karo, paste karo,
                   slug (unique, chhote akshar, - se) + name + image badlo. Page khud ban jayega.
  Product remove   uska { ... } block delete karo (comma ka dhyan rakho).
  Product page     har product ka page = product.html?p=<slug>. Alag file nahi banani.
  Image add        image: "images/meri-photo.jpg"  ya  https://... link.
                   Extra photos: gallery: ["images/a.jpg","images/b.jpg"]
  Image remove     us line ko delete karo (gallery me se naam hatao).
  Partner logo     partners list me add/remove.
  Team / Workshop  about.team aur about.gallery me add/remove. Khali [] = section hide.
  Phone/Email      top par phone, whatsapp, email badlo.

HAR BAAR CHANGE KE BAAD
  1) data.js me  url: "https://aapka-domain.com"  sahi rakho
  2) Terminal:   node build.js     (sitemap.xml, robots.txt, llms.txt, llms-full.txt update)
  3) Poora folder hosting par upload karo (Netlify / GitHub Pages / cPanel, sab chalega)
  4) Google Search Console me sitemap.xml submit karo

PREVIEW: index.html ko double-click karke browser me kholo.

V2 NOTES
  solutions.html, support.html   naye pages (apps / faq / process / ticker / manifesto bhi data.js me hain)
  fx.js                          saari animations (canvas, tilt, magnetic buttons, scroll effects)
