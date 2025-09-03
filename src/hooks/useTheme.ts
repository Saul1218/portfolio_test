import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const themeClasses = {
    // Background colors
    primaryBg: isDarkMode ? 'bg-slate-900' : 'bg-white',
    secondaryBg: isDarkMode ? 'bg-slate-800' : 'bg-gray-50',
    cardBg: isDarkMode ? 'bg-slate-800' : 'bg-white',
    gradientBg: isDarkMode 
      ? 'bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800' 
      : 'bg-gradient-to-br from-blue-50 via-white to-indigo-50',
    heroGradient: isDarkMode
      ? 'bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-800'
      : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-white',
    
    // Text colors
    primaryText: isDarkMode ? 'text-white' : 'text-gray-900',
    secondaryText: isDarkMode ? 'text-slate-300' : 'text-gray-600',
    accentText: isDarkMode ? 'text-blue-400' : 'text-blue-600',
    mutedText: isDarkMode ? 'text-slate-400' : 'text-gray-500',
    
    // Border colors
    border: isDarkMode ? 'border-slate-600' : 'border-gray-200',
    accentBorder: isDarkMode ? 'border-blue-500/50' : 'border-blue-300',
    
    // Navigation
    navBg: isDarkMode ? 'bg-slate-900/95' : 'bg-white/95',
    navBorder: isDarkMode ? 'border-slate-700' : 'border-gray-200',
    navText: isDarkMode ? 'text-slate-300' : 'text-gray-600',
    navActiveText: isDarkMode ? 'text-blue-400' : 'text-blue-600',
    navHover: isDarkMode ? 'hover:text-blue-400' : 'hover:text-blue-600',
    
    // Cards and components
    cardShadow: isDarkMode ? 'shadow-2xl shadow-black/20' : 'shadow-xl shadow-gray-200/50',
    cardHover: isDarkMode 
      ? 'hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-500/50' 
      : 'hover:shadow-xl hover:shadow-blue-200/50 hover:border-blue-300',
    
    // Buttons
    primaryBtn: isDarkMode 
      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/25' 
      : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/25',
    secondaryBtn: isDarkMode 
      ? 'bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white' 
      : 'bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white',
    
    // Contact cards
    contactCard: isDarkMode 
      ? 'bg-slate-800 border-slate-600 hover:bg-slate-700 hover:shadow-lg hover:shadow-blue-500/10' 
      : 'bg-white border-gray-200 hover:bg-gray-50 hover:shadow-lg hover:shadow-blue-200/20',
  };

  return {
    isDarkMode,
    toggleTheme,
    themeClasses
  };
};