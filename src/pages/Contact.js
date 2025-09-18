import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SEO from '../components/SEO';
import { pageConfigs } from '../config/seoConfig';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare,
  Building,
  Globe,
  Calendar,
  Users,
  Award,
  CheckCircle
} from 'lucide-react';

const Contact = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [contactRef, contactInView] = useInView({ threshold: 0.2, triggerOnce: true });

  const contactInfo = [
    {
      title: 'العنوان',
      info: 'المملكة العربية السعودية - الدمام',
      details: 'طريق الملك فهد بن عبدالعزيز',
      icon: MapPin,
      color: 'from-red-500 to-red-700'
    },
    {
      title: 'الهاتف',
      info: '+966502275726',
      details: 'متاح 24/7 للاستشارات العاجلة',
      icon: Phone,
      color: 'from-green-500 to-green-700'
    },
    {
      title: 'البريد الإلكتروني',
      info: 'info@HamadLawFirm.co',
      details: 'نرد خلال ساعات قليلة',
      icon: Mail,
      color: 'from-blue-500 to-blue-700'
    },
    {
      title: 'ساعات العمل',
      info: 'الأحد - الخميس: 8:00 - 18:00',
      details: 'الجمعة - السبت: 9:00 - 15:00',
      icon: Clock,
      color: 'from-purple-500 to-purple-700'
    }
  ];

  const officeFeatures = [
    {
      title: 'موقع متميز',
      description: 'مكتب في قلب العاصمة الرياض بموقع سهل الوصول',
      icon: Building
    },
    {
      title: 'مواقف مجانية',
      description: 'مواقف سيارات مجانية ومتاحة لجميع العملاء',
      icon: MapPin
    },
    {
      title: 'قاعات اجتماعات',
      description: 'قاعات اجتماعات مجهزة بأحدث التقنيات',
      icon: Users
    },
    {
      title: 'خدمة 24/7',
      description: 'خدمة عملاء متاحة على مدار الساعة',
      icon: Clock
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title={pageConfigs.contact.title}
        description={pageConfigs.contact.description}
        keywords={pageConfigs.contact.keywords}
        url={pageConfigs.contact.url}
        type={pageConfigs.contact.type}
      />
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative py-32 overflow-hidden min-h-screen flex items-center"
        style={{
          background: 'linear-gradient(135deg, #142443 0%, #1e3a5f 50%, #2a4f7a 100%)'
        }}
      >
        <div className="container mx-auto px-8 text-center relative z-10">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-8"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Phone className="w-20 h-20 text-logo mx-auto" />
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-shadow">
              اتصل بنا
            </h1>
            
            <motion.p
              className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ y: 50, opacity: 0 }}
              animate={heroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              نحن هنا لخدمتكم ومساعدتكم في جميع احتياجاتكم القانونية. 
              تواصلوا معنا عبر أي من الطرق المتاحة وسنكون سعداء بخدمتكم.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-8 text-logo"
              initial={{ y: 50, opacity: 0 }}
              animate={heroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="flex items-center">
                <Phone className="w-6 h-6 ml-2" />
                <span className="font-medium">+966502275726</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 ml-2" />
                <span className="font-medium">info@HamadLawFirm.co</span>
              </div>
              <div className="flex items-center">
                <MessageSquare className="w-6 h-6 ml-2" />
                <span className="font-medium">واتساب متاح</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-20 text-white/10"
          animate={{ y: [-20, 20, -20], rotate: [0, 180, 360] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <Mail className="w-24 h-24" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 right-20 text-white/10"
          animate={{ y: [20, -20, 20], rotate: [360, 180, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <Building className="w-28 h-28" />
        </motion.div>
      </motion.section>

      {/* Contact Information */}
      <motion.section
        ref={contactRef}
        className="py-20 bg-gradient-to-br from-slate-50 to-slate-100"
      >
        <div className="container mx-auto px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            animate={contactInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-primary mb-6">معلومات التواصل</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              يمكنكم التواصل معنا عبر أي من الطرق التالية، وسنكون سعداء بخدمتكم
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white"
                  initial={{ y: 100, opacity: 0 }}
                  animate={contactInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  whileHover={{ scale: 1.02, y: -10 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${contact.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <div className="relative p-8 text-center">
                    <motion.div
                      className={`inline-block p-4 bg-gradient-to-br ${contact.color} rounded-full mb-6`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <h3 className="text-xl font-bold text-primary mb-3">{contact.title}</h3>
                    <p className="text-logo font-semibold mb-2">{contact.info}</p>
                    <p className="text-gray-600 text-sm">{contact.details}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Map Section */}
      <motion.section className="py-20 bg-white">
        <div className="container mx-auto px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-primary mb-6">موقعنا</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              مكتبنا يقع في موقع متميز في قلب العاصمة الرياض، سهل الوصول ومتاح للجميع
            </p>
          </motion.div>

          <motion.div
            className="relative rounded-3xl overflow-hidden shadow-2xl"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Map Placeholder */}
            <div className="h-96 bg-gradient-to-br from-primary to-logo flex items-center justify-center relative">
              <motion.div
                className="text-center text-white"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MapPin className="w-24 h-24 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">مكتب حمد للمحاماة</h3>
                <p className="text-lg opacity-90">المملكة العربية السعودية - الدمام</p>
                <p className="text-sm opacity-75 mt-2">طريق الملك فهد بن عبدالعزيز</p>
              </motion.div>
              
              {/* Decorative Elements */}
              <motion.div
                className="absolute top-4 left-4 w-4 h-4 bg-white/30 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-4 right-4 w-6 h-6 bg-white/20 rounded-full"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Office Features */}
      <motion.section className="py-20 bg-gradient-to-br from-slate-100 to-slate-200">
        <div className="container mx-auto px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-primary mb-6">مميزات مكتبنا</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نوفر لعملائنا بيئة مريحة ومهنية مع جميع التسهيلات اللازمة
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {officeFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -10 }}
                >
                  <motion.div
                    className="inline-block p-4 bg-gradient-to-br from-primary to-logo rounded-full mb-6"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-primary mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Quick Contact Section */}
      <motion.section className="py-20 bg-white">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-primary mb-6">تواصل سريع</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                للحصول على رد سريع، يمكنكم التواصل معنا عبر الواتساب أو الاتصال المباشر. 
                فريقنا متاح لخدمتكم على مدار الساعة.
              </p>

              <div className="space-y-4">
                {[
                  { label: 'رد سريع خلال دقائق', icon: CheckCircle },
                  { label: 'خدمة عملاء متميزة', icon: Award },
                  { label: 'استشارة مجانية أولى', icon: Users }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      className="flex items-center"
                      initial={{ x: -50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                      viewport={{ once: true }}
                    >
                      <Icon className="w-6 h-6 text-logo ml-3" />
                      <span className="text-gray-700 font-medium">{item.label}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {[
                {
                  title: 'اتصال مباشر',
                  subtitle: '+966502275726',
                  icon: Phone,
                  color: 'from-green-500 to-green-700'
                },
                {
                  title: 'واتساب',
                  subtitle: '+966502275726',
                  icon: MessageSquare,
                  color: 'from-green-600 to-green-800'
                },
                {
                  title: 'بريد إلكتروني',
                  subtitle: 'info@HamadLawFirm.co',
                  icon: Mail,
                  color: 'from-blue-500 to-blue-700'
                },
                {
                  title: 'حجز موعد',
                  subtitle: 'احجز استشارة',
                  icon: Calendar,
                  color: 'from-purple-500 to-purple-700'
                }
              ].map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <motion.div
                    key={index}
                    className="group cursor-pointer"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className={`p-6 rounded-2xl bg-gradient-to-br ${contact.color} text-white shadow-lg hover:shadow-xl transition-all duration-300`}>
                      <Icon className="w-8 h-8 mb-4" />
                      <h3 className="font-bold text-lg mb-2">{contact.title}</h3>
                      <p className="text-sm opacity-90">{contact.subtitle}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 gradient-bg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Globe className="w-16 h-16 text-logo mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">
              نحن في خدمتكم دائماً
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              لا تترددوا في التواصل معنا في أي وقت. فريقنا جاهز لتقديم أفضل الخدمات القانونية
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
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
                اتصل بنا الآن
              </motion.button>
              
              <motion.button
                className="border-2 border-logo text-logo px-8 py-4 rounded-xl font-bold text-lg hover:bg-logo hover:text-primary transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                احجز موعد
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;
