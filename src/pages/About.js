import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SEO from '../components/SEO';
import { pageConfigs } from '../config/seoConfig';
import { 
  Users, 
  Award, 
  Target, 
  Eye, 
  Heart,
  Scale,
  BookOpen,
  Trophy,
  Star,
  CheckCircle
} from 'lucide-react';

const About = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [valuesRef, valuesInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [teamRef, teamInView] = useInView({ threshold: 0.2, triggerOnce: true });

  const values = [
    {
      title: 'النزاهة والشفافية',
      description: 'نلتزم بأعلى معايير النزاهة والشفافية في جميع تعاملاتنا',
      icon: Scale,
      color: 'from-blue-500 to-blue-700'
    },
    {
      title: 'الخبرة والكفاءة',
      description: 'فريق من المحامين ذوي الخبرة العالية والتخصص الدقيق',
      icon: Award,
      color: 'from-green-500 to-green-700'
    },
    {
      title: 'الالتزام بالمواعيد',
      description: 'نحترم وقت عملائنا ونلتزم بالمواعيد المحددة',
      icon: Target,
      color: 'from-purple-500 to-purple-700'
    },
    {
      title: 'السرية التامة',
      description: 'نضمن الحفاظ على سرية معلومات عملائنا بأعلى درجات الأمان',
      icon: Eye,
      color: 'from-red-500 to-red-700'
    }
  ];

  const achievements = [
    { number: '500+', label: 'قضية ناجحة', icon: Trophy },
    { number: '15+', label: 'سنة خبرة', icon: Award },
    { number: '200+', label: 'عميل راضٍ', icon: Users },
    { number: '98%', label: 'معدل النجاح', icon: Star }
  ];

  const teamMembers = [
    {
      name: 'المحامي حمد العلي',
      position: 'الشريك المؤسس',
      experience: '15+ سنة خبرة',
      specialization: 'قانون الشركات والعقارات',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'المحامية سارة أحمد',
      position: 'شريك أول',
      experience: '12+ سنة خبرة',
      specialization: 'القانون المدني والتجاري',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'المحامي محمد الخالد',
      position: 'محامي أول',
      experience: '10+ سنة خبرة',
      specialization: 'القانون الجنائي والإداري',
      image: '/api/placeholder/300/300'
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title={pageConfigs.about.title}
        description={pageConfigs.about.description}
        keywords={pageConfigs.about.keywords}
        url={pageConfigs.about.url}
        type={pageConfigs.about.type}
      />
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative py-32 overflow-hidden min-h-screen flex items-center"
        style={{
          background: 'linear-gradient(135deg, #142443 0%, #1e3a5f 50%, #2a4f7a 100%)'
        }}
      >
        <div className="container mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={heroInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-block mb-8"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Users className="w-20 h-20 text-logo" />
              </motion.div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-shadow">
                من نحن
              </h1>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                مكتب حمد للمحاماة هو مكتب قانوني رائد يقدم خدمات قانونية متميزة 
                ومتخصصة منذ أكثر من 15 عاماً، بفريق من المحامين ذوي الخبرة والكفاءة العالية.
              </p>

              <motion.div
                className="flex items-center space-x-6 space-x-reverse"
                initial={{ y: 50, opacity: 0 }}
                animate={heroInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-logo">15+</div>
                  <div className="text-white/80">سنة خبرة</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-logo">500+</div>
                  <div className="text-white/80">قضية ناجحة</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-logo">98%</div>
                  <div className="text-white/80">معدل النجاح</div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ x: 100, opacity: 0 }}
              animate={heroInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Scale className="w-32 h-32 text-logo mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">رؤيتنا</h3>
                  <p className="text-white/90 leading-relaxed">
                    أن نكون المكتب القانوني الرائد في المنطقة، نقدم خدمات قانونية 
                    متميزة تحقق العدالة وتحمي حقوق عملائنا بأعلى معايير المهنية والنزاهة.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-20 text-white/10"
          animate={{ y: [-20, 20, -20], rotate: [0, 180, 360] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <BookOpen className="w-24 h-24" />
        </motion.div>
      </motion.section>

      {/* Mission & Vision */}
      <motion.section className="py-20 bg-white">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-8 shadow-lg"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <motion.div
                className="inline-block p-4 bg-primary rounded-full mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Target className="w-8 h-8 text-white" />
              </motion.div>
              <h2 className="text-3xl font-bold text-primary mb-6">رسالتنا</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                نسعى لتقديم خدمات قانونية متميزة ومتخصصة تلبي احتياجات عملائنا 
                وتحقق أهدافهم القانونية بأعلى معايير الجودة والمهنية، من خلال فريق 
                من المحامين المؤهلين والمتخصصين في مختلف فروع القانون.
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-logo/10 to-primary/10 rounded-3xl p-8 shadow-lg"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <motion.div
                className="inline-block p-4 bg-logo rounded-full mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Eye className="w-8 h-8 text-primary" />
              </motion.div>
              <h2 className="text-3xl font-bold text-primary mb-6">رؤيتنا</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                أن نكون المكتب القانوني الرائد والموثوق في المنطقة، نساهم في 
                تطوير البيئة القانونية ونحقق العدالة من خلال تقديم حلول قانونية 
                مبتكرة وفعالة تواكب التطورات المحلية والدولية.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        ref={valuesRef}
        className="py-20 bg-gradient-to-br from-slate-100 to-slate-200"
      >
        <div className="container mx-auto px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            animate={valuesInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-primary mb-6">قيمنا ومبادئنا</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نؤمن بمجموعة من القيم والمبادئ التي توجه عملنا وتحدد طريقة تعاملنا مع عملائنا
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white"
                  initial={{ y: 100, opacity: 0 }}
                  animate={valuesInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  whileHover={{ scale: 1.02, y: -10 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <div className="relative p-8">
                    <motion.div
                      className="flex items-center mb-6"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div
                        className={`p-4 bg-gradient-to-br ${value.color} rounded-full ml-4`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-primary">{value.title}</h3>
                    </motion.div>
                    
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Achievements Section */}
      <motion.section className="py-20 bg-white">
        <div className="container mx-auto px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-primary mb-6">إنجازاتنا</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نفتخر بما حققناه من إنجازات ونجاحات على مدار سنوات عملنا
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ y: 100, opacity: 0, scale: 0.8 }}
                  whileInView={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -10 }}
                >
                  <motion.div
                    className="inline-block p-4 bg-gradient-to-br from-logo to-primary rounded-full mb-6"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <motion.h3
                    className="text-4xl font-bold text-primary mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 + 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    {achievement.number}
                  </motion.h3>
                  
                  <p className="text-gray-600 font-medium text-lg">{achievement.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        ref={teamRef}
        className="py-20 bg-gradient-to-br from-slate-100 to-slate-200"
      >
        <div className="container mx-auto px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            animate={teamInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-primary mb-6">فريق العمل</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              فريق من المحامين المتخصصين والمؤهلين بخبرات متنوعة في مختلف فروع القانون
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                initial={{ y: 100, opacity: 0 }}
                animate={teamInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                whileHover={{ scale: 1.02, y: -10 }}
              >
                {/* Profile Image Placeholder */}
                <div className="relative h-64 bg-gradient-to-br from-primary to-logo overflow-hidden">
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Users className="w-24 h-24 text-white/50" />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-2">{member.name}</h3>
                  <p className="text-logo font-semibold mb-2">{member.position}</p>
                  <p className="text-gray-600 mb-3">{member.experience}</p>
                  <p className="text-gray-700 leading-relaxed">{member.specialization}</p>
                  
                  <motion.div
                    className="mt-4 flex items-center text-primary"
                    initial={{ x: -20, opacity: 0 }}
                    whileHover={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle className="w-5 h-5 ml-2" />
                    <span className="font-medium">محامي معتمد</span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
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
            <Heart className="w-16 h-16 text-logo mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">
              نحن هنا لخدمتكم
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              فريقنا المتخصص جاهز لتقديم أفضل الخدمات القانونية والاستشارات المهنية
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
              تواصل معنا الآن
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
