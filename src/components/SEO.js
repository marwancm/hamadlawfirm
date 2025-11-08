import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = "مكتب حمد للمحاماة - الثقة والخبرة في خدمة العدالة",
  description = "مكتب حمد للمحاماة يقدم خدمات قانونية متميزة ومتخصصة في جميع فروع القانون في المملكة العربية السعودية - الدمام",
  keywords = "محامي, مكتب محاماة, استشارات قانونية, الدمام, السعودية, قانون, محكمة, دعاوى قضائية",
  image = "/لوجو-removebg-preview.png",
  url = "/",
  type = "website",
  author = "مكتب حمد للمحاماة",
  locale = "ar_SA",
  siteName = "مكتب حمد للمحاماة"
}) => {
  const baseUrl = "https://hamadlawfirm.vercel.app";
  const fullTitle = title.includes("مكتب حمد للمحاماة") ? title : `${title} - مكتب حمد للمحاماة`;
  const fullUrl = url.startsWith('http') ? url : `${baseUrl}${url}`;
  const fullImage = image.startsWith('http') ? image : `${baseUrl}${image}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "مكتب حمد للمحاماة",
    "alternateName": "Hamad Law Firm",
    "description": description,
    "url": baseUrl,
    "logo": fullImage,
    "image": fullImage,
    "telephone": "+966502275726",
    "email": "info@HamadLawFirm.co",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "طريق الملك فهد بن عبدالعزيز",
      "addressLocality": "الدمام",
      "addressCountry": "SA",
      "addressRegion": "المنطقة الشرقية",
      "postalCode": "31441"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "26.4207",
      "longitude": "50.0888"
    },
    "openingHours": [
      "Mo-Th 08:00-18:00",
      "Su 08:00-18:00",
      "Fr 09:00-15:00",
      "Sa 09:00-15:00"
    ],
    "priceRange": "$$",
    "serviceArea": {
      "@type": "Country",
      "name": "Saudi Arabia"
    },
    "legalName": "مكتب حمد للمحاماة",
    "foundingDate": "2008",
    "areaServed": "Saudi Arabia",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Legal Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "استشارات قانونية",
            "description": "استشارات قانونية متخصصة في جميع المجالات"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "التمثيل القضائي",
            "description": "تمثيل قانوني محترف أمام المحاكم"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "قانون الشركات",
            "description": "خدمات قانونية شاملة للشركات وحوكمة الأعمال"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "قانون العقارات",
            "description": "استشارات وخدمات قانونية في مجال العقارات"
          }
        }
      ]
    },
    "sameAs": [
      "https://twitter.com/hamadlawfirm",
      "https://linkedin.com/company/hamadlawfirm",
      "https://facebook.com/hamadlawfirm"
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Arabic" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta httpEquiv="Content-Language" content="ar" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:alt" content="مكتب حمد للمحاماة - شعار المكتب" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:image:alt" content="مكتب حمد للمحاماة - شعار المكتب" />
      <meta name="twitter:site" content="@hamadlawfirm" />
      <meta name="twitter:creator" content="@hamadlawfirm" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#142443" />
      <meta name="msapplication-TileColor" content="#142443" />
      <meta name="application-name" content="مكتب حمد للمحاماة" />
      <meta name="apple-mobile-web-app-title" content="مكتب حمد للمحاماة" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Enhanced SEO for better crawling */}
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow" />
      <meta name="slurp" content="index, follow" />
      <meta name="geo.region" content="SA-04" />
      <meta name="geo.placename" content="الدمام" />
      <meta name="geo.position" content="26.4207;50.0888" />
      <meta name="ICBM" content="26.4207, 50.0888" />
      <meta name="DC.title" content={fullTitle} />
      <meta name="DC.creator" content="مكتب حمد للمحاماة" />
      <meta name="DC.subject" content={keywords} />
      <meta name="DC.description" content={description} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Alternate Language Links */}
      <link rel="alternate" hrefLang="ar" href={fullUrl} />
      <link rel="alternate" hrefLang="x-default" href={fullUrl} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
    </Helmet>
  );
};

export default SEO;
