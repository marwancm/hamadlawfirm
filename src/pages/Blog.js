import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  BookOpen, 
  Calendar, 
  User, 
  ArrowLeft,
  Tag,
  Clock,
  Eye,
  Share2,
  Search,
  TrendingUp,
  Award,
  Scale
} from 'lucide-react';

const Blog = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [postsRef, postsInView] = useInView({ threshold: 0.2, triggerOnce: true });

  const blogPosts = [
    {
      id: 1,
      title: 'التطورات الجديدة في قانون الشركات السعودي',
      excerpt: 'نظرة شاملة على أحدث التعديلات في قانون الشركات وتأثيرها على الأعمال التجارية في المملكة العربية السعودية.',
      author: 'المحامي حمد العلي',
      date: '2024-01-15',
      readTime: '5 دقائق',
      views: '1,234',
      category: 'قانون الشركات',
      image: '/api/placeholder/400/250',
      featured: true
    },
    {
      id: 2,
      title: 'حقوق المستأجر والمؤجر في النظام السعودي',
      excerpt: 'دليل شامل لحقوق وواجبات كل من المستأجر والمؤجر وفقاً لأحدث الأنظمة واللوائح في المملكة.',
      author: 'المحامية سارة أحمد',
      date: '2024-01-10',
      readTime: '7 دقائق',
      views: '2,156',
      category: 'العقارات',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 3,
      title: 'التحكيم التجاري: البديل الأمثل لحل النزاعات',
      excerpt: 'كيف يمكن للتحكيم التجاري أن يوفر حلولاً سريعة وفعالة للنزاعات التجارية مقارنة بالتقاضي التقليدي.',
      author: 'المحامي محمد الخالد',
      date: '2024-01-05',
      readTime: '6 دقائق',
      views: '987',
      category: 'التحكيم',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 4,
      title: 'الملكية الفكرية في العصر الرقمي',
      excerpt: 'التحديات والفرص في حماية الملكية الفكرية مع تطور التكنولوجيا والتجارة الإلكترونية.',
      author: 'المحامي حمد العلي',
      date: '2023-12-28',
      readTime: '8 دقائق',
      views: '1,567',
      category: 'الملكية الفكرية',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 5,
      title: 'قانون العمل الجديد وحقوق الموظفين',
      excerpt: 'استعراض شامل للتعديلات الجديدة في قانون العمل وما تعنيه للموظفين وأصحاب العمل.',
      author: 'المحامية سارة أحمد',
      date: '2023-12-20',
      readTime: '9 دقائق',
      views: '3,421',
      category: 'قانون العمل',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 6,
      title: 'الاستثمار الأجنبي في المملكة: الفرص والتحديات',
      excerpt: 'نظرة على القوانين المنظمة للاستثمار الأجنبي والفرص المتاحة للمستثمرين الدوليين.',
      author: 'المحامي محمد الخالد',
      date: '2023-12-15',
      readTime: '10 دقائق',
      views: '2,789',
      category: 'الاستثمار',
      image: '/api/placeholder/400/250',
      featured: false
    }
  ];

  const categories = [
    'جميع المقالات',
    'قانون الشركات',
    'العقارات',
    'التحكيم',
    'الملكية الفكرية',
    'قانون العمل',
    'الاستثمار'
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('جميع المقالات');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'جميع المقالات' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

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
              <BookOpen className="w-20 h-20 text-logo mx-auto" />
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-shadow">
              المدونة القانونية
            </h1>
            
            <motion.p
              className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ y: 50, opacity: 0 }}
              animate={heroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              اكتشف أحدث المقالات والتحليلات القانونية من خبراء مكتب حمد للمحاماة. 
              نقدم لك محتوى قانوني متخصص ومفيد لمواكبة التطورات في عالم القانون.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-8 text-logo"
              initial={{ y: 50, opacity: 0 }}
              animate={heroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="flex items-center">
                <TrendingUp className="w-6 h-6 ml-2" />
                <span className="font-medium">محتوى محدث باستمرار</span>
              </div>
              <div className="flex items-center">
                <Award className="w-6 h-6 ml-2" />
                <span className="font-medium">من خبراء القانون</span>
              </div>
              <div className="flex items-center">
                <Scale className="w-6 h-6 ml-2" />
                <span className="font-medium">تحليلات قانونية عميقة</span>
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
          <BookOpen className="w-24 h-24" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 right-20 text-white/10"
          animate={{ y: [20, -20, 20], rotate: [360, 180, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <Scale className="w-28 h-28" />
        </motion.div>
      </motion.section>

      {/* Search and Filter Section */}
      <motion.section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-8">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
            {/* Search Bar */}
            <motion.div
              className="relative flex-1 max-w-md"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="ابحث في المقالات..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-4 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:border-logo focus:outline-none transition-colors duration-300"
              />
            </motion.div>

            {/* Category Filter */}
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-logo text-primary shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === 'جميع المقالات' && !searchTerm && (
        <motion.section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="container mx-auto px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-primary mb-4">المقال المميز</h2>
              <p className="text-xl text-gray-600">أحدث وأهم المقالات القانونية</p>
            </motion.div>

            <motion.div
              className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -10 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image */}
                <div className="relative h-64 lg:h-auto bg-gradient-to-br from-primary to-logo">
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <BookOpen className="w-24 h-24 text-white/50" />
                  </motion.div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-logo text-primary px-3 py-1 rounded-full text-sm font-bold">
                      مميز
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 ml-1" />
                      {new Date(featuredPost.date).toLocaleDateString('ar-SA')}
                    </div>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="w-4 h-4 ml-1" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 ml-1" />
                        {featuredPost.readTime}
                      </div>
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 ml-1" />
                        {featuredPost.views}
                      </div>
                    </div>

                    <motion.button
                      className="flex items-center text-logo font-semibold hover:text-primary transition-colors duration-300"
                      whileHover={{ x: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      اقرأ المزيد
                      <ArrowLeft className="w-4 h-4 mr-2" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* Blog Posts Grid */}
      <motion.section
        ref={postsRef}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            animate={postsInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-primary mb-6">
              {selectedCategory === 'جميع المقالات' ? 'أحدث المقالات' : `مقالات ${selectedCategory}`}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {filteredPosts.length > 0 
                ? `${filteredPosts.length} مقال متاح`
                : 'لا توجد مقالات تطابق البحث'
              }
            </p>
          </motion.div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
                  initial={{ y: 100, opacity: 0 }}
                  animate={postsInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  whileHover={{ scale: 1.02, y: -10 }}
                >
                  {/* Image */}
                  <div className="relative h-48 bg-gradient-to-br from-primary to-logo overflow-hidden">
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <BookOpen className="w-16 h-16 text-white/50" />
                    </motion.div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 ml-1" />
                        {new Date(post.date).toLocaleDateString('ar-SA')}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 ml-1" />
                        {post.readTime}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-primary mb-3 leading-tight group-hover:text-logo transition-colors duration-300">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-sm text-gray-500">
                        <div className="flex items-center">
                          <User className="w-4 h-4 ml-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Eye className="w-4 h-4 ml-1" />
                          {post.views}
                        </div>
                      </div>

                      <motion.button
                        className="flex items-center text-logo font-semibold hover:text-primary transition-colors duration-300"
                        whileHover={{ x: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        اقرأ
                        <ArrowLeft className="w-4 h-4 mr-2" />
                      </motion.button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <BookOpen className="w-24 h-24 text-gray-300 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-400 mb-4">لا توجد مقالات</h3>
              <p className="text-gray-500">جرب تغيير فلتر البحث أو الفئة</p>
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* Newsletter Section */}
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
            <Share2 className="w-16 h-16 text-logo mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">
              اشترك في النشرة القانونية
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              احصل على أحدث المقالات والتحليلات القانونية مباشرة في بريدك الإلكتروني
            </p>
            
            <motion.div
              className="max-w-md mx-auto flex gap-4"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="flex-1 px-4 py-3 rounded-xl border-0 focus:outline-none text-primary"
              />
              <motion.button
                className="bg-logo text-primary px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                اشترك
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Blog;
