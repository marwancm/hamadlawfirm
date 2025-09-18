import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Home, 
  Users, 
  Briefcase, 
  MessageSquare, 
  Phone, 
  BookOpen,
  Scale,
  Building,
  FileText
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState(null);

  const menuItems = [
    { path: '/', label: 'الرئيسية', icon: Home },
    { path: '/about', label: 'من نحن', icon: Users },
    { path: '/services', label: 'الخدمات القانونية', icon: Briefcase },
    { path: '/consultation', label: 'طلب استشارة', icon: MessageSquare },
    { path: '/contact', label: 'اتصل بنا', icon: Phone },
    { path: '/blog', label: 'مدونة', icon: BookOpen },
  ];

  const sidebarVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.1, duration: 0.5 }
    })
  };

  return (
    <motion.div
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
      className="fixed right-0 top-0 h-full w-80 gradient-bg shadow-2xl z-50"
    >
      {/* Logo Section */}
      <motion.div 
        className="p-8 border-b border-white/20"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div className="flex items-center justify-center mb-4">
          <motion.div
            className="relative"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src="لوجو-removebg-preview.png" alt="مكتب حمد للمحاماة" className="w-40 h-32" />
            <motion.div
              className="absolute -top-2 -right-2 w-6 h-6 bg-logo rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </div>
        <h1 className="text-2xl font-bold text-white text-center mb-2">
          مكتب حمد للمحاماة
        </h1>
        <p className="text-logo text-center text-sm font-medium">
          الثقة والخبرة في خدمتكم
        </p>
      </motion.div>

      {/* Navigation Menu */}
      <nav className="p-6">
        <ul className="space-y-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <motion.li
                key={item.path}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                custom={index}
              >
                <Link
                  to={item.path}
                  className={`
                    flex items-center p-4 rounded-xl transition-all duration-300 group
                    ${isActive 
                      ? 'bg-logo text-primary shadow-lg' 
                      : 'text-white hover:bg-white/10 hover:text-logo'
                    }
                  `}
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <motion.div
                    className="ml-4"
                    animate={{ 
                      rotate: hoveredItem === index ? 360 : 0,
                      scale: hoveredItem === index ? 1.2 : 1
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>
                  <span className="font-medium text-lg">{item.label}</span>
                  
                  {hoveredItem === index && (
                    <motion.div
                      className="mr-auto"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="w-2 h-2 bg-current rounded-full" />
                    </motion.div>
                  )}
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </nav>


      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 opacity-10">
        <Building className="w-32 h-32 text-white" />
      </div>
      <div className="absolute bottom-32 right-4 opacity-10">
        <FileText className="w-24 h-24 text-white" />
      </div>
    </motion.div>
  );
};

export default Sidebar;
