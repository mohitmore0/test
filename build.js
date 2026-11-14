/* BUILD.JS - data.js padh kar sitemap.xml, robots.txt, llms.txt, llms-full.txt banata hai.
   Chalane ka tarika (Node.js chahiye):   node build.js
   Product add/remove ke baad ek baar chala do. */
const fs = require('fs'), vm = require('vm');
const ctx = { window: {} }; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(__dirname + '/data.js', 'utf8'), ctx);
const S = ctx.window.SITE, U = S.url, today = new Date().toISOString().slice(0, 10);
const pUrl = p => `${U}/product.html?p=${encodeURIComponent(p.slug)}`;
const w = (f, t) => fs.writeFileSync(__dirname + '/' + f, t);

/* sitemap.xml */
const urls = [['', 1.0], ['products.html', 0.9], ['solutions.html', 0.7], ['support.html', 0.6], ['about.html', 0.6], ['contact.html', 0.6]]
  .map(([p, pr]) => [`${U}/${p}`, pr]).concat(S.products.map(p => [pUrl(p), 0.8]));
w('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls.map(([u, pr]) => `  <url><loc>${u.replace(/&/g, '&amp;')}</loc><lastmod>${today}</lastmod><priority>${pr}</priority></url>`).join('\n') + `\n</urlset>\n`);

/* robots.txt */
w('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${U}/sitemap.xml\n`);

/* llms.txt  (AI tools ke liye short guide) */
const avail = S.products.filter(p => p.status !== 'soon'), soon = S.products.filter(p => p.status === 'soon');
w('llms.txt', `# ${S.name}\n\n> ${S.tagline}. ${S.hero.text}\n\n## Products\n` +
  avail.map(p => `- [${p.name}](${pUrl(p)}): ${p.short}`).join('\n') +
  (soon.length ? `\n\n## Coming soon\n` + soon.map(p => `- ${p.name}`).join('\n') : '') +
  `\n\n## Pages\n- [Home](${U}/)\n- [All products](${U}/products.html)\n- [About](${U}/about.html)\n- [Contact](${U}/contact.html)\n- [Documentation](${S.docsUrl})\n\n## Contact\n- Phone: ${S.phone}\n- Email: ${S.email}\n` +
  S.about.offices.map(o => `- ${o.role}: ${o.address}`).join('\n') + '\n');

/* llms-full.txt (poori detail) */
w('llms-full.txt', `# ${S.name}\n\n> ${S.tagline}\n\n${S.about.text}\n\n` +
  S.products.map(p => `## ${p.name}\nCategory: ${p.category}\nStatus: ${p.status === 'soon' ? 'Coming soon' : 'Available'}\nURL: ${pUrl(p)}\n\n${p.description}\n` +
    (p.features.length ? `\nHighlights:\n${p.features.map(f => '- ' + f).join('\n')}\n` : '') +
    (p.specs.length ? `\nSpecifications:\n${p.specs.map(s => `- ${s[0]}: ${s[1]}`).join('\n')}\n` : '') +
    (p.docs.length ? `\nDocs:\n${p.docs.map(d => `- ${d.label}: ${d.url}`).join('\n')}\n` : '')).join('\n') +
  `\n## Contact\nPhone: ${S.phone}\nEmail: ${S.email}\n`);
console.log(`Done: ${urls.length} URLs in sitemap.xml, plus robots.txt, llms.txt, llms-full.txt`);
