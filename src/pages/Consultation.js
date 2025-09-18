import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  MessageSquare, 
  User, 
  Mail, 
  Phone, 
  FileText, 
  Calendar,
  Clock,
  CheckCircle,
  Send,
  Shield,
  Award,
  Users
} from 'lucide-react';

const Consultation = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [formRef, formInView] = useInView({ threshold: 0.2, triggerOnce: true });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    consultationType: '',
    message: '',
    preferredDate: '',
    preferredTime: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const consultationTypes = [
    'استشارة قانونية عامة',
    'قانون الشركات',
    'العقارات',
    'القضايا المدنية',
    'القضايا التجارية',
    'القضايا العمالية',
    'الملكية الفكرية',
    'التحكيم والوساطة',
    'أخرى'
  ];

  const benefits = [
    {
      title: 'استشارة مجانية',
      description: 'الاستشارة الأولى مجانية تماماً لجميع العملاء الجدد',
      icon: Award,
      color: 'from-green-500 to-green-700'
    },
    {
      title: 'سرية تامة',
      description: 'نضمن الحفاظ على سرية جميع المعلومات والبيانات',
      icon: Shield,
      color: 'from-blue-500 to-blue-700'
    },
    {
      title: 'خبراء متخصصون',
      description: 'فريق من المحامين المتخصصين في مختلف المجالات',
      icon: Users,
      color: 'from-purple-500 to-purple-700'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        consultationType: '',
        message: '',
        preferredDate: '',
        preferredTime: ''
      });
    }, 3000);
  };

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
              <MessageSquare className="w-20 h-20 text-logo mx-auto" />
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-shadow">
              طلب استشارة قانونية
            </h1>
            
            <motion.p
              className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ y: 50, opacity: 0 }}
              animate={heroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              احصل على استشارة قانونية مجانية من فريق الخبراء لدينا. 
              نحن هنا لمساعدتك في حل جميع مشاكلك القانونية بأفضل الطرق الممكنة.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-8 text-logo"
              initial={{ y: 50, opacity: 0 }}
              animate={heroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="flex items-center">
                <Clock className="w-6 h-6 ml-2" />
                <span className="font-medium">رد سريع خلال 24 ساعة</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-6 h-6 ml-2" />
                <span className="font-medium">سرية تامة مضمونة</span>
              </div>
              <div className="flex items-center">
                <Award className="w-6 h-6 ml-2" />
                <span className="font-medium">استشارة مجانية</span>
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
          <FileText className="w-24 h-24" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 right-20 text-white/10"
          animate={{ y: [20, -20, 20], rotate: [360, 180, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <Calendar className="w-28 h-28" />
        </motion.div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section className="py-20 bg-white">
        <div className="container mx-auto px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-primary mb-6">مميزات الاستشارة معنا</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم لك أفضل الخدمات الاستشارية بمعايير عالية من الجودة والمهنية
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white border border-gray-100"
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -10 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <div className="relative p-8 text-center">
                    <motion.div
                      className={`inline-block p-4 bg-gradient-to-br ${benefit.color} rounded-full mb-6`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-primary mb-4">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Consultation Form */}
      <motion.section
        ref={formRef}
        className="py-20 bg-gradient-to-br from-slate-50 to-slate-100"
      >
        <div className="container mx-auto px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            animate={formInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-primary mb-6">احجز استشارتك المجانية</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              املأ النموذج أدناه وسيتواصل معك أحد خبرائنا القانونيين خلال 24 ساعة
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
              initial={{ y: 100, opacity: 0 }}
              animate={formInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="p-8 md:p-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Name Field */}
                    <motion.div
                      initial={{ x: -50, opacity: 0 }}
                      animate={formInView ? { x: 0, opacity: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <label className="block text-primary font-semibold mb-3 text-lg">
                        <User className="inline w-5 h-5 ml-2" />
                        الاسم الكامل *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-logo focus:outline-none transition-colors duration-300 text-lg"
                        placeholder="أدخل اسمك الكامل"
                      />
                    </motion.div>

                    {/* Email Field */}
                    <motion.div
                      initial={{ x: 50, opacity: 0 }}
                      animate={formInView ? { x: 0, opacity: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <label className="block text-primary font-semibold mb-3 text-lg">
                        <Mail className="inline w-5 h-5 ml-2" />
                        البريد الإلكتروني *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-logo focus:outline-none transition-colors duration-300 text-lg"
                        placeholder="example@email.com"
                      />
                    </motion.div>

                    {/* Phone Field */}
                    <motion.div
                      initial={{ x: -50, opacity: 0 }}
                      animate={formInView ? { x: 0, opacity: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      <label className="block text-primary font-semibold mb-3 text-lg">
                        <Phone className="inline w-5 h-5 ml-2" />
                        رقم الهاتف *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-logo focus:outline-none transition-colors duration-300 text-lg"
                        placeholder="+966502275726"
                      />
                    </motion.div>

                    {/* Consultation Type */}
                    <motion.div
                      initial={{ x: 50, opacity: 0 }}
                      animate={formInView ? { x: 0, opacity: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      <label className="block text-primary font-semibold mb-3 text-lg">
                        <FileText className="inline w-5 h-5 ml-2" />
                        نوع الاستشارة *
                      </label>
                      <select
                        name="consultationType"
                        value={formData.consultationType}
                        onChange={handleInputChange}
                        required
                        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-logo focus:outline-none transition-colors duration-300 text-lg"
                      >
                        <option value="">اختر نوع الاستشارة</option>
                        {consultationTypes.map((type, index) => (
                          <option key={index} value={type}>{type}</option>
                        ))}
                      </select>
                    </motion.div>

                    {/* Preferred Date */}
                    <motion.div
                      initial={{ x: -50, opacity: 0 }}
                      animate={formInView ? { x: 0, opacity: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.7 }}
                    >
                      <label className="block text-primary font-semibold mb-3 text-lg">
                        <Calendar className="inline w-5 h-5 ml-2" />
                        التاريخ المفضل
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-logo focus:outline-none transition-colors duration-300 text-lg"
                      />
                    </motion.div>

                    {/* Preferred Time */}
                    <motion.div
                      initial={{ x: 50, opacity: 0 }}
                      animate={formInView ? { x: 0, opacity: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      <label className="block text-primary font-semibold mb-3 text-lg">
                        <Clock className="inline w-5 h-5 ml-2" />
                        الوقت المفضل
                      </label>
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-logo focus:outline-none transition-colors duration-300 text-lg"
                      >
                        <option value="">اختر الوقت المفضل</option>
                        <option value="morning">صباحاً (9:00 - 12:00)</option>
                        <option value="afternoon">بعد الظهر (12:00 - 17:00)</option>
                        <option value="evening">مساءً (17:00 - 20:00)</option>
                      </select>
                    </motion.div>
                  </div>

                  {/* Message Field */}
                  <motion.div
                    className="mt-8"
                    initial={{ y: 50, opacity: 0 }}
                    animate={formInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    <label className="block text-primary font-semibold mb-3 text-lg">
                      <MessageSquare className="inline w-5 h-5 ml-2" />
                      تفاصيل الاستشارة *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="6"
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-logo focus:outline-none transition-colors duration-300 text-lg resize-none"
                      placeholder="اشرح لنا تفاصيل المسألة القانونية التي تحتاج استشارة بشأنها..."
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div
                    className="mt-8 text-center"
                    initial={{ y: 50, opacity: 0 }}
                    animate={formInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 1.0 }}
                  >
                    <motion.button
                      type="submit"
                      className="bg-gradient-to-r from-logo to-primary text-white px-12 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
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
                      <Send className="inline w-5 h-5 ml-2" />
                      إرسال طلب الاستشارة
                    </motion.button>
                  </motion.div>
                </form>
              ) : (
                <motion.div
                  className="p-12 text-center"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div
                    className="inline-block p-6 bg-green-100 rounded-full mb-6"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <CheckCircle className="w-16 h-16 text-green-600" />
                  </motion.div>
                  
                  <h3 className="text-3xl font-bold text-primary mb-4">
                    تم إرسال طلبك بنجاح!
                  </h3>
                  <p className="text-xl text-gray-600 mb-6">
                    شكراً لك على ثقتك بنا. سيتواصل معك أحد خبرائنا القانونيين خلال 24 ساعة.
                  </p>
                  <div className="text-logo font-semibold">
                    رقم الطلب: #CS{Date.now().toString().slice(-6)}
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Info Section */}
      <motion.section className="py-20 bg-white">
        <div className="container mx-auto px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-primary mb-6">طرق التواصل الأخرى</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              يمكنك التواصل معنا مباشرة عبر الطرق التالية للحصول على استشارة فورية
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'الهاتف',
                info: '+966502275726',
                description: 'متاح 24/7 للاستشارات العاجلة',
                icon: Phone,
                color: 'from-green-500 to-green-700'
              },
              {
                title: 'البريد الإلكتروني',
                info: 'info@HamadLawFirm.co',
                description: 'رد خلال ساعات قليلة',
                icon: Mail,
                color: 'from-blue-500 to-blue-700'
              },
              {
                title: 'الواتساب',
                info: '+966502275726',
                description: 'تواصل سريع ومباشر',
                icon: MessageSquare,
                color: 'from-green-600 to-green-800'
              }
            ].map((contact, index) => {
              const Icon = contact.icon;
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
                    className={`inline-block p-4 bg-gradient-to-br ${contact.color} rounded-full mb-6`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-primary mb-2">{contact.title}</h3>
                  <p className="text-logo font-semibold text-lg mb-2">{contact.info}</p>
                  <p className="text-gray-600">{contact.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Consultation;
