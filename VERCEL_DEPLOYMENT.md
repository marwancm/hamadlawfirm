# دليل النشر على Vercel - مكتب حمد للمحاماة
## Vercel Deployment Guide - Hamad Law Firm

### 🚀 خطوات النشر / Deployment Steps

#### 1. إعداد المشروع / Project Setup
```bash
# تأكد من أن جميع التبعيات مثبتة
npm install

# اختبار البناء محلياً
npm run build
```

#### 2. النشر على Vercel / Deploy to Vercel

##### الطريقة الأولى: Vercel CLI
```bash
# تثبيت Vercel CLI
npm i -g vercel

# تسجيل الدخول
vercel login

# النشر
vercel --prod
```

##### الطريقة الثانية: GitHub Integration
1. ارفع المشروع على GitHub
2. اذهب إلى [vercel.com](https://vercel.com)
3. اربط حساب GitHub
4. اختر المستودع
5. اضغط Deploy

### ⚙️ إعدادات Vercel / Vercel Configuration

#### متغيرات البيئة / Environment Variables
```
REACT_APP_SITE_URL=https://your-domain.vercel.app
```

#### إعدادات البناء / Build Settings
- **Framework Preset**: Create React App
- **Build Command**: `npm run build`
- **Output Directory**: `build`
- **Install Command**: `npm install`

### 📁 الملفات المطلوبة / Required Files

#### ✅ تم إنشاؤها
- `vercel.json` - إعدادات Vercel الرئيسية
- `public/robots.txt` - محدث للدومين الجديد
- `public/sitemap.xml` - محدث للدومين الجديد
- `src/config/seoConfig.js` - محدث للدومين المتغير

### 🔧 إعدادات vercel.json

```json
{
  "version": 2,
  "name": "hamad-law-firm",
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "build"
      }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

### 🌐 إعدادات الدومين المخصص / Custom Domain Setup

#### 1. إضافة دومين مخصص
1. اذهب إلى لوحة تحكم Vercel
2. اختر المشروع
3. اذهب إلى Settings > Domains
4. أضف الدومين المخصص

#### 2. تحديث DNS
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com

Type: A
Name: @
Value: 76.76.19.61
```

#### 3. تحديث الإعدادات بعد الدومين المخصص
```javascript
// في src/config/seoConfig.js
siteUrl: "https://hamadlawfirm.co"
```

### 📊 مراقبة الأداء / Performance Monitoring

#### Vercel Analytics
```bash
# تثبيت Vercel Analytics
npm install @vercel/analytics

# إضافة إلى App.js
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      {/* باقي المكونات */}
      <Analytics />
    </>
  );
}
```

#### Web Vitals
```bash
# تثبيت Web Vitals
npm install @vercel/speed-insights

# إضافة إلى App.js
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  return (
    <>
      {/* باقي المكونات */}
      <SpeedInsights />
    </>
  );
}
```

### 🔒 إعدادات الأمان / Security Settings

#### Headers الأمان (في vercel.json)
```json
"headers": [
  {
    "source": "/(.*)",
    "headers": [
      {
        "key": "X-Content-Type-Options",
        "value": "nosniff"
      },
      {
        "key": "X-Frame-Options",
        "value": "DENY"
      },
      {
        "key": "X-XSS-Protection",
        "value": "1; mode=block"
      }
    ]
  }
]
```

### 🚀 تحسينات الأداء / Performance Optimizations

#### 1. تحسين الصور
```bash
# تحويل الصور إلى WebP
npm install imagemin imagemin-webp
```

#### 2. Code Splitting
```javascript
// استخدام React.lazy للتحميل الكسول
const About = React.lazy(() => import('./pages/About'));
const Services = React.lazy(() => import('./pages/Services'));
```

#### 3. تحسين Bundle
```bash
# تحليل Bundle
npm install --save-dev webpack-bundle-analyzer
```

### 📈 SEO بعد النشر / Post-Deployment SEO

#### 1. Google Search Console
1. اذهب إلى [Google Search Console](https://search.google.com/search-console)
2. أضف الموقع الجديد
3. تحقق من الملكية
4. أرسل sitemap.xml

#### 2. Google Analytics
```javascript
// إضافة Google Analytics
// في public/index.html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

#### 3. فحص SEO
- استخدم [PageSpeed Insights](https://pagespeed.web.dev/)
- فحص [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- تحقق من [Rich Results Test](https://search.google.com/test/rich-results)

### 🔄 التحديثات المستقبلية / Future Updates

#### النشر التلقائي
- كل push إلى main branch سينشر تلقائياً
- يمكن إعداد Preview deployments للفروع الأخرى

#### مراقبة الأخطاء
```bash
# إضافة Sentry للمراقبة
npm install @sentry/react @sentry/tracing
```

### 📞 الدعم / Support

#### روابط مفيدة
- [Vercel Documentation](https://vercel.com/docs)
- [React Deployment Guide](https://create-react-app.dev/docs/deployment/)
- [Vercel Community](https://github.com/vercel/vercel/discussions)

#### معلومات الاتصال
- **الهاتف**: +966502275726
- **البريد الإلكتروني**: info@HamadLawFirm.co

---

### ✅ Checklist قبل النشر

- [ ] تم تثبيت جميع التبعيات
- [ ] تم اختبار البناء محلياً
- [ ] تم تحديث متغيرات البيئة
- [ ] تم فحص vercel.json
- [ ] تم تحديث robots.txt و sitemap.xml
- [ ] تم اختبار جميع الصفحات
- [ ] تم فحص SEO meta tags
- [ ] تم التأكد من عمل الروابط

🎉 **الموقع جاهز للنشر على Vercel!**
