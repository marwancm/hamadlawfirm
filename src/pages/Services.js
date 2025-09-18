import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Building2, 
  Home, 
  FileText, 
  Scale, 
  Users, 
  Briefcase,
  Calculator,
  Globe,
  Shield,
  BookOpen,
  Gavel,
  TrendingUp,
  Award,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.2, triggerOnce: true });

  const services = [
    {
      category: 'خدمات الشركات',
      icon: Building2,
      color: 'from-blue-600 to-blue-800',
      services: [
        'الشركات',
        'حوكمة الشركات', 
        'التصفية والإفلاس',
        'المنصات و التجارة الإلكترونية'
      ]
    },
    {
      category: 'الخدمات العقارية',
      icon: Home,
      color: 'from-green-600 to-green-800',
      services: [
        'العقارات',
        'قسمة التركات',
        'الأوقاف والكيانات الوقفية الاستثمارية'
      ]
    },
    {
      category: 'الخدمات القضائية',
      icon: Scale,
      color: 'from-purple-600 to-purple-800',
      services: [
        'الوساطة و التحكيم',
        'التمثيل القضائي',
        'القضايا العمالية',
        'القضايا الادارية'
      ]
    },
    {
      category: 'الاستشارات والعقود',
      icon: FileText,
      color: 'from-orange-600 to-orange-800',
      services: [
        'الاستشارات القانونية',
        'صياغة العقود والاتفاقيات وتدقيقها',
        'التوثيق الخاص'
      ]
    },
    {
      category: 'الخدمات المالية والضريبية',
      icon: Calculator,
      color: 'from-red-600 to-red-800',
      services: [
        'المصرفية والتمويل',
        'الاستشارات الضريبية والزكوية',
        'الاستثمار الأجنبي'
      ]
    },
    {
      category: 'الخدمات الحكومية والملكية الفكرية',
      icon: Shield,
      color: 'from-indigo-600 to-indigo-800',
      services: [
        'الاعتمادات الحكومية',
        'الملكية الفكرية'
      ]
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'الاستشارة الأولية',
      description: 'نقوم بدراسة حالتكم وتقديم الاستشارة المناسبة',
      icon: Users
    },
    {
      step: '02', 
      title: 'وضع الخطة القانونية',
      description: 'نضع استراتيجية قانونية محكمة لحل قضيتكم',
      icon: BookOpen
    },
    {
      step: '03',
      title: 'التنفيذ والمتابعة',
      description: 'نتابع تنفيذ الخطة بدقة ومهنية عالية',
      icon: Gavel
    },
    {
      step: '04',
      title: 'النتائج والمتابعة',
      description: 'نضمن تحقيق أفضل النتائج ونتابع ما بعد الخدمة',
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen">
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
              <Briefcase className="w-20 h-20 text-logo mx-auto" />
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-shadow">
              خدماتنا القانونية
            </h1>
            
            <motion.p
              className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ y: 50, opacity: 0 }}
              animate={heroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              نقدم مجموعة شاملة ومتكاملة من الخدمات القانونية المتخصصة 
              في جميع فروع القانون بأعلى معايير الجودة والمهنية
            </motion.p>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-20 text-white/10"
          animate={{ y: [-20, 20, -20], rotate: [0, 180, 360] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <Scale className="w-24 h-24" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 right-20 text-white/10"
          animate={{ y: [20, -20, 20], rotate: [360, 180, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <Gavel className="w-28 h-28" />
        </motion.div>
      </motion.section>

      {/* Services Grid */}
      <motion.section
        ref={servicesRef}
        className="py-20 bg-gradient-to-br from-slate-50 to-slate-100"
      >
        <div className="container mx-auto px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            animate={servicesInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-primary mb-6">مجالات خبرتنا</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نتخصص في تقديم الخدمات القانونية في مختلف المجالات بخبرة تزيد عن 15 عاماً
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white"
                  initial={{ y: 100, opacity: 0 }}
                  animate={servicesInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  whileHover={{ scale: 1.02, y: -10 }}
                >
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                    <motion.div
                      className="flex items-center mb-4"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="w-10 h-10 ml-4" />
                      <h3 className="text-xl font-bold">{category.category}</h3>
                    </motion.div>
                  </div>

                  {/* Services List */}
                  <div className="p-6">
                    <ul className="space-y-3">
                      {category.services.map((service, serviceIndex) => (
                        <motion.li
                          key={serviceIndex}
                          className="flex items-center text-gray-700 hover:text-primary transition-colors duration-300"
                          initial={{ x: -20, opacity: 0 }}
                          animate={servicesInView ? { x: 0, opacity: 1 } : {}}
                          transition={{ duration: 0.5, delay: 0.1 * index + 0.1 * serviceIndex }}
                          whileHover={{ x: 10 }}
                        >
                          <CheckCircle className="w-5 h-5 text-logo ml-3 flex-shrink-0" />
                          <span className="font-medium">{service}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Hover Effect Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-logo/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section className="py-20 bg-white">
        <div className="container mx-auto px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-primary mb-6">كيف نعمل</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نتبع منهجية علمية ومدروسة في التعامل مع جميع القضايا والاستشارات القانونية
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  className="relative text-center"
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  {/* Connection Line */}
                  {index < processSteps.length - 1 && (
                    <motion.div
                      className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-logo to-primary z-0"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.5 + 0.1 * index }}
                      viewport={{ once: true }}
                    />
                  )}

                  <motion.div
                    className="relative z-10 bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -10 }}
                  >
                    {/* Step Number */}
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-logo to-primary rounded-full flex items-center justify-center mb-6 text-white font-bold text-xl"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {step.step}
                    </motion.div>

                    {/* Icon */}
                    <motion.div
                      className="inline-block p-4 bg-gradient-to-br from-primary/10 to-logo/10 rounded-full mb-4"
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="w-8 h-8 text-primary" />
                    </motion.div>

                    <h3 className="text-xl font-bold text-primary mb-4">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </motion.div>
                </motion.div>
              );
            })}
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
            <h2 className="text-4xl font-bold text-white mb-6">
              هل تحتاج إلى استشارة قانونية؟
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              لا تتردد في التواصل معنا للحصول على استشارة قانونية مجانية من فريق الخبراء لدينا
            </p>
            
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
              احجز استشارة مجانية الآن
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Services;
