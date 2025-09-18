import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  Users, 
  Briefcase, 
  MessageSquare, 
  Phone, 
  BookOpen,
  Scale,
  Menu,
  X
} from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { path: '/', label: 'الرئيسية', icon: Home },
    { path: '/about', label: 'من نحن', icon: Users },
    { path: '/services', label: 'الخدمات القانونية', icon: Briefcase },
    { path: '/consultation', label: 'طلب استشارة', icon: MessageSquare },
    { path: '/contact', label: 'اتصل بنا', icon: Phone },
    { path: '/blog', label: 'مدونة', icon: BookOpen },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 gradient-bg shadow-lg"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <motion.div
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img src="/لوجو-removebg-preview.png" alt="مكتب حمد للمحاماة" className="w-10 h-10 ml-3" />
                <div>
                  <h1 className="text-xl font-bold text-white">مكتب حمد للمحاماة</h1>
                  <p className="text-logo text-sm">الثقة والخبرة في خدمتكم</p>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 space-x-reverse">
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`
                      flex items-center px-4 py-2 rounded-lg transition-all duration-300
                      ${isActive 
                        ? 'bg-logo text-primary shadow-md' 
                        : 'text-white hover:bg-white/10 hover:text-logo'
                      }
                    `}
                  >
                    <Icon className="w-5 h-5 ml-2" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden text-white p-2"
              onClick={toggleMobileMenu}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/50"
              onClick={toggleMobileMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            
            {/* Menu Panel */}
            <motion.div
              className="absolute top-0 right-0 h-full w-80 gradient-bg shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Header */}
              <div className="p-6 border-b border-white/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img src="/لوجو-removebg-preview.png" alt="مكتب حمد للمحاماة" className="w-8 h-8 ml-3" />
                    <div>
                      <h2 className="text-lg font-bold text-white">مكتب حمد للمحاماة</h2>
                      <p className="text-logo text-sm">الثقة والخبرة في خدمتكم</p>
                    </div>
                  </div>
                  <button
                    onClick={toggleMobileMenu}
                    className="text-white p-2 hover:bg-white/10 rounded-lg"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Navigation */}
              <nav className="p-6">
                <ul className="space-y-2">
                  {menuItems.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.path;
                    
                    return (
                      <motion.li
                        key={item.path}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                      >
                        <Link
                          to={item.path}
                          onClick={toggleMobileMenu}
                          className={`
                            flex items-center p-4 rounded-xl transition-all duration-300
                            ${isActive 
                              ? 'bg-logo text-primary shadow-lg' 
                              : 'text-white hover:bg-white/10 hover:text-logo'
                            }
                          `}
                        >
                          <Icon className="w-6 h-6 ml-4" />
                          <span className="font-medium text-lg">{item.label}</span>
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
