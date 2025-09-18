import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SEO from '../components/SEO';
import { pageConfigs } from '../config/seoConfig';
import { 
  Scale, 
  Shield, 
  Award, 
  Users, 
  BookOpen, 
  Building2,
  ArrowLeft,
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [statsRef, statsInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.3, triggerOnce: true });

  const stats = [
    { number: '500+', label: 'قضية ناجحة', icon: Scale },
    { number: '15+', label: 'سنة خبرة', icon: Award },
    { number: '200+', label: 'عميل راضٍ', icon: Users },
    { number: '50+', label: 'شراكة قانونية', icon: Building2 }
  ];

  const mainServices = [
    {
      title: 'الشركات',
      description: 'خدمات قانونية شاملة للشركات وحوكمة الأعمال',
      icon: Building2,
      color: 'from-blue-500 to-blue-700'
    },
    {
      title: 'العقارات',
      description: 'استشارات وخدمات قانونية في مجال العقارات',
      icon: BookOpen,
      color: 'from-green-500 to-green-700'
    },
    {
      title: 'التمثيل القضائي',
      description: 'تمثيل قانوني محترف أمام المحاكم',
      icon: Scale,
      color: 'from-purple-500 to-purple-700'
    },
    {
      title: 'الاستشارات القانونية',
      description: 'استشارات قانونية متخصصة في جميع المجالات',
      icon: Shield,
      color: 'from-orange-500 to-orange-700'
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title={pageConfigs.home.title}
        description={pageConfigs.home.description}
        keywords={pageConfigs.home.keywords}
        url={pageConfigs.home.url}
        type={pageConfigs.home.type}
      />
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #142443 0%, #1e3a5f 50%, #2a4f7a 100%)'
        }}
      >
        {/* Parallax Background Elements */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />

        <div className="container mx-auto px-8 text-center relative z-10">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <motion.div
              className="inline-block mb-6"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <img src="لوجو-removebg-preview.png" alt="مكتب حمد للمحاماة" className="w-32 h-24 mx-auto" />
            </motion.div>
            
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 text-shadow">
              مكتب حمد للمحاماة
            </h1>
            
            <motion.p
              className="text-2xl text-logo mb-8 font-medium"
              initial={{ y: 50, opacity: 0 }}
              animate={heroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              الثقة والخبرة في خدمة العدالة
            </motion.p>
            
            <motion.p
              className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ y: 50, opacity: 0 }}
              animate={heroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              نقدم خدمات قانونية متميزة ومتخصصة في جميع فروع القانون، 
              بفريق من المحامين ذوي الخبرة والكفاءة العالية
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ y: 100, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link to="/consultation">
              <motion.button
                className="bg-logo text-primary px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                animate={{ 
                  boxShadow: [
                    "0 0 0 0 rgba(228, 179, 104, 0.4)",
                    "0 0 0 20px rgba(228, 179, 104, 0)",
                  ]
                }}
                transition={{ 
                  boxShadow: { duration: 2, repeat: Infinity },
                  scale: { type: "spring", stiffness: 300 }
                }}
              >
                احجز استشارة مجانية
              </motion.button>
            </Link>
            
            <Link to="/services">
              <motion.button
                className="border-2 border-logo text-logo px-8 py-4 rounded-xl font-bold text-lg hover:bg-logo hover:text-primary transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                تصفح خدماتنا
                <ArrowLeft className="inline-block w-5 h-5 mr-2" />
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-20 text-white/20"
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <BookOpen className="w-16 h-16" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 right-20 text-white/20"
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Building2 className="w-20 h-20" />
        </motion.div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        ref={statsRef}
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        animate={statsInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-8">
          <motion.h2
            className="text-4xl font-bold text-primary text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            animate={statsInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            إنجازاتنا بالأرقام
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ y: 100, opacity: 0 }}
                  animate={statsInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05, y: -10 }}
                >
                  <motion.div
                    className="inline-block p-4 bg-gradient-to-br from-primary to-blue-800 rounded-full mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <motion.h3
                    className="text-3xl font-bold text-primary mb-2"
                    initial={{ scale: 0 }}
                    animate={statsInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + 0.1 * index }}
                  >
                    {stat.number}
                  </motion.h3>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Services Preview Section */}
      <motion.section
        ref={servicesRef}
        className="py-20 bg-gradient-to-br from-slate-100 to-slate-200"
      >
        <div className="container mx-auto px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            animate={servicesInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-primary mb-6">خدماتنا الرئيسية</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم مجموعة شاملة من الخدمات القانونية المتخصصة لتلبية جميع احتياجاتكم القانونية
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
                  initial={{ y: 100, opacity: 0 }}
                  animate={servicesInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-90`} />
                  <div className="relative p-8 text-white">
                    <motion.div
                      className="flex items-center mb-4"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="w-12 h-12 ml-4" />
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                    </motion.div>
                    <p className="text-lg leading-relaxed mb-6 opacity-90">
                      {service.description}
                    </p>
                    <motion.div
                      className="flex items-center text-sm font-medium"
                      initial={{ x: -20, opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span>اعرف المزيد</span>
                      <ArrowLeft className="w-4 h-4 mr-2" />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ y: 50, opacity: 0 }}
            animate={servicesInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/services">
              <motion.button
                className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                عرض جميع الخدمات
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section className="py-20 bg-white">
        <div className="container mx-auto px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-primary mb-6">لماذا تختار مكتب حمد؟</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نتميز بالخبرة والمهنية في تقديم الخدمات القانونية
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'خبرة متميزة',
                description: 'أكثر من 15 سنة من الخبرة في المجال القانوني',
                icon: Award
              },
              {
                title: 'فريق متخصص',
                description: 'محامون مؤهلون ومتخصصون في مختلف فروع القانون',
                icon: Users
              },
              {
                title: 'نتائج مضمونة',
                description: 'سجل حافل بالنجاحات والقضايا المكسوبة',
                icon: CheckCircle
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -10 }}
                >
                  <motion.div
                    className="inline-block p-4 bg-logo rounded-full mb-6"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-primary mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
