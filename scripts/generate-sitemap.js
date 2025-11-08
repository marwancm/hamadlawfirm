const fs = require('fs');
const path = require('path');

// Configuration
const baseUrl = 'https://hamadlawfirm.vercel.app';
const currentDate = new Date().toISOString().split('T')[0];

// Define all routes with their properties
const routes = [
  {
    url: '/',
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: '1.0'
  },
  {
    url: '/about',
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: '0.9'
  },
  {
    url: '/about.html',
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: '0.9'
  },
  {
    url: '/services',
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: '0.9'
  },
  {
    url: '/services.html',
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: '0.9'
  },
  {
    url: '/consultation',
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: '0.9'
  },
  {
    url: '/contact',
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    url: '/blog',
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: '0.7'
  }
];

// Generate sitemap XML
function generateSitemap() {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  routes.forEach(route => {
    sitemap += `
  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  });

  sitemap += `
</urlset>`;

  return sitemap;
}

// Write sitemap to public directory
function writeSitemap() {
  const sitemapContent = generateSitemap();
  const publicDir = path.join(__dirname, '..', 'public');
  const sitemapPath = path.join(publicDir, 'sitemap.xml');

  try {
    fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
    console.log('✅ Sitemap generated successfully at:', sitemapPath);
    console.log(`📍 Total URLs: ${routes.length}`);
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
}

// Generate robots.txt with sitemap reference
function generateRobotsTxt() {
  const robotsContent = `# Robots.txt for Hamad Law Firm Website
# مكتب حمد للمحاماة

User-agent: *
Allow: /

# Allow all major search engines
User-agent: Googlebot
Allow: /
Crawl-delay: 1

User-agent: Bingbot
Allow: /
Crawl-delay: 1

User-agent: Slurp
Allow: /
Crawl-delay: 1

User-agent: DuckDuckBot
Allow: /

User-agent: Baiduspider
Allow: /

User-agent: YandexBot
Allow: /

# Disallow unnecessary files and directories
Disallow: /admin/
Disallow: /private/
Disallow: /*.json$
Disallow: /api/
Disallow: /build/
Disallow: /node_modules/
Disallow: /.git/
Disallow: /src/

# Allow important directories
Allow: /static/
Allow: /images/
Allow: /css/
Allow: /js/
Allow: /*.png$
Allow: /*.jpg$
Allow: /*.jpeg$
Allow: /*.gif$
Allow: /*.webp$
Allow: /*.svg$

# Sitemap location
Sitemap: ${baseUrl}/sitemap.xml

# Additional crawling instructions
User-agent: *
Crawl-delay: 2

# Priority pages for crawling
Allow: /about.html
Allow: /services.html
Allow: /consultation
Allow: /contact
Allow: /blog
`;

  const publicDir = path.join(__dirname, '..', 'public');
  const robotsPath = path.join(publicDir, 'robots.txt');

  try {
    fs.writeFileSync(robotsPath, robotsContent, 'utf8');
    console.log('✅ Robots.txt updated successfully');
  } catch (error) {
    console.error('❌ Error updating robots.txt:', error);
  }
}

// Main execution
console.log('🚀 Generating SEO files...');
writeSitemap();
generateRobotsTxt();
console.log('✨ SEO files generation completed!');
