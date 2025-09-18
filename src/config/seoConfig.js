// SEO Configuration for Hamad Law Firm
// مكتب حمد للمحاماة - إعدادات تحسين محركات البحث

export const siteConfig = {
  siteName: "مكتب حمد للمحاماة",
  siteUrl: process.env.REACT_APP_SITE_URL || "https://hamadlawfirm.vercel.app",
  defaultTitle: "مكتب حمد للمحاماة - الثقة والخبرة في خدمة العدالة",
  defaultDescription: "مكتب حمد للمحاماة يقدم خدمات قانونية متميزة ومتخصصة في جميع فروع القانون في المملكة العربية السعودية - الدمام",
  defaultKeywords: "محامي, مكتب محاماة, استشارات قانونية, الدمام, السعودية, قانون, محكمة, دعاوى قضائية, قانون الشركات, قانون العقارات, التمثيل القضائي",
  author: "مكتب حمد للمحاماة",
  locale: "ar_SA",
  defaultImage: "/لوجو-removebg-preview.png",
  twitterHandle: "@hamadlawfirm",
  facebookPage: "https://facebook.com/hamadlawfirm",
  linkedinPage: "https://linkedin.com/company/hamadlawfirm",
  phone: "+966502275726",
  email: "info@HamadLawFirm.co",
  address: {
    street: "طريق الملك فهد بن عبدالعزيز",
    city: "الدمام",
    region: "المنطقة الشرقية",
    country: "SA",
    postalCode: "31441"
  }
};

// Page-specific SEO configurations
export const pageConfigs = {
  home: {
    title: "مكتب حمد للمحاماة - الثقة والخبرة في خدمة العدالة",
    description: "مكتب حمد للمحاماة يقدم خدمات قانونية متميزة ومتخصصة في جميع فروع القانون. أكثر من 15 سنة من الخبرة في المجال القانوني بالمملكة العربية السعودية - الدمام",
    keywords: "مكتب حمد للمحاماة, محامي الدمام, استشارات قانونية, خدمات قانونية, المملكة العربية السعودية",
    url: "/",
    type: "website"
  },
  about: {
    title: "من نحن - مكتب حمد للمحاماة",
    description: "تعرف على مكتب حمد للمحاماة، فريقنا المتخصص، خبرتنا الواسعة في المجال القانوني، ورؤيتنا في تقديم أفضل الخدمات القانونية في المملكة العربية السعودية",
    keywords: "من نحن, فريق العمل, خبرة قانونية, مكتب محاماة متخصص, رؤية ورسالة",
    url: "/about",
    type: "website"
  },
  services: {
    title: "الخدمات القانونية - مكتب حمد للمحاماة",
    description: "اكتشف مجموعة شاملة من الخدمات القانونية المتخصصة: قانون الشركات، العقارات، التمثيل القضائي، الاستشارات القانونية، وأكثر من ذلك بكثير",
    keywords: "خدمات قانونية, قانون الشركات, قانون العقارات, التمثيل القضائي, استشارات قانونية, دعاوى قضائية",
    url: "/services",
    type: "website"
  },
  consultation: {
    title: "طلب استشارة قانونية - مكتب حمد للمحاماة",
    description: "احجز استشارة قانونية مجانية مع خبراء القانون في مكتب حمد للمحاماة. نقدم استشارات متخصصة في جميع فروع القانون بسرية تامة ومهنية عالية",
    keywords: "استشارة قانونية مجانية, حجز موعد, استشارة محامي, خدمة عملاء قانونية, استشارة فورية",
    url: "/consultation",
    type: "website"
  },
  contact: {
    title: "اتصل بنا - مكتب حمد للمحاماة",
    description: "تواصل مع مكتب حمد للمحاماة في الدمام. معلومات الاتصال، العنوان، ساعات العمل، وطرق التواصل المختلفة للحصول على الخدمات القانونية",
    keywords: "اتصل بنا, عنوان المكتب, رقم الهاتف, الدمام, موقع المكتب, ساعات العمل",
    url: "/contact",
    type: "website"
  },
  blog: {
    title: "المدونة القانونية - مكتب حمد للمحاماة",
    description: "اقرأ أحدث المقالات والأخبار القانونية، نصائح قانونية مفيدة، وتحليلات قانونية متخصصة من خبراء مكتب حمد للمحاماة",
    keywords: "مدونة قانونية, مقالات قانونية, أخبار قانونية, نصائح قانونية, تحليلات قانونية, قانون سعودي",
    url: "/blog",
    type: "website"
  }
};

// Service-specific SEO configurations
export const serviceConfigs = {
  corporateLaw: {
    title: "قانون الشركات - مكتب حمد للمحاماة",
    description: "خدمات قانونية شاملة للشركات: تأسيس الشركات، حوكمة الأعمال، العقود التجارية، الاندماج والاستحواذ، والامتثال القانوني",
    keywords: "قانون الشركات, تأسيس شركات, حوكمة الأعمال, عقود تجارية, اندماج واستحواذ, امتثال قانوني"
  },
  realEstate: {
    title: "قانون العقارات - مكتب حمد للمحاماة",
    description: "خدمات قانونية متخصصة في العقارات: بيع وشراء العقارات، عقود الإيجار، النزاعات العقارية، والاستشارات العقارية",
    keywords: "قانون العقارات, بيع وشراء عقارات, عقود إيجار, نزاعات عقارية, استشارات عقارية"
  },
  litigation: {
    title: "التمثيل القضائي - مكتب حمد للمحاماة",
    description: "تمثيل قانوني محترف أمام المحاكم السعودية في جميع أنواع القضايا المدنية والتجارية والإدارية مع فريق من المحامين المتخصصين",
    keywords: "التمثيل القضائي, محاكم سعودية, قضايا مدنية, قضايا تجارية, قضايا إدارية, محامي متخصص"
  },
  consultation: {
    title: "الاستشارات القانونية - مكتب حمد للمحاماة",
    description: "استشارات قانونية متخصصة في جميع المجالات القانونية مع ضمان السرية التامة والمهنية العالية من خبراء القانون",
    keywords: "استشارات قانونية, خبراء قانون, سرية تامة, مهنية عالية, جميع المجالات القانونية"
  }
};

// Generate structured data for different page types
export const generateStructuredData = (pageType, customData = {}) => {
  const baseData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": siteConfig.siteName,
    "url": siteConfig.siteUrl,
    "logo": `${siteConfig.siteUrl}${siteConfig.defaultImage}`,
    "telephone": siteConfig.phone,
    "email": siteConfig.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.address.street,
      "addressLocality": siteConfig.address.city,
      "addressRegion": siteConfig.address.region,
      "addressCountry": siteConfig.address.country,
      "postalCode": siteConfig.address.postalCode
    }
  };

  switch (pageType) {
    case 'home':
      return {
        ...baseData,
        "@type": "LegalService",
        "description": pageConfigs.home.description,
        "areaServed": "Saudi Arabia",
        "serviceType": "Legal Services"
      };
    
    case 'service':
      return {
        ...baseData,
        "@type": "Service",
        "serviceType": customData.serviceType || "Legal Service",
        "description": customData.description,
        "provider": {
          "@type": "LegalService",
          "name": siteConfig.siteName
        }
      };
    
    case 'article':
      return {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": customData.title,
        "description": customData.description,
        "author": {
          "@type": "Organization",
          "name": siteConfig.siteName
        },
        "publisher": {
          "@type": "Organization",
          "name": siteConfig.siteName,
          "logo": {
            "@type": "ImageObject",
            "url": `${siteConfig.siteUrl}${siteConfig.defaultImage}`
          }
        },
        "datePublished": customData.datePublished,
        "dateModified": customData.dateModified || customData.datePublished
      };
    
    default:
      return baseData;
  }
};

export default siteConfig;
