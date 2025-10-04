import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const Header = () => {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navigationItems = [
        {
            label: 'Operations',
            items: [
                {
                    label: 'Real-Time Monitor',
                    path: '/real-time-operations-monitor',
                    icon: 'Activity',
                    description: 'Live operational monitoring'
                },
                {
                    label: 'Inventory Overview',
                    path: '/pharmacy-inventory-overview-dashboard',
                    icon: 'Package',
                    description: 'Comprehensive inventory dashboard'
                }
            ]
        },
        {
            label: 'Compliance',
            items: [
                {
                    label: 'Expiry Management',
                    path: '/expiry-management-compliance-dashboard',
                    icon: 'Calendar',
                    description: 'Regulatory compliance tracking'
                }
            ]
        },
        {
            label: 'Analytics',
            items: [
                {
                    label: 'Supply Chain',
                    path: '/supply-chain-analytics-dashboard',
                    icon: 'TrendingUp',
                    description: 'Strategic procurement insights'
                }
            ]
        }
    ];

    const isActiveSection = (sectionItems) => {
        return sectionItems.some(item => location.pathname === item.path);
    };

    const isActivePath = (path) => {
        return location.pathname === path;
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="fixed top-0 left-0 right-0 bg-white border-b border-[#c3c5c9] z-50 px-4 sm:px-6 py-2 flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-[#2E86AB] rounded flex items-center justify-center">
                    <Icon name="Cross" size={16} color="white" strokeWidth={2.5} />
                </div>
                <div className="flex flex-col">
                    <span className="text-sm font-semibold text-[#2E86AB] font-heading">MedInventory</span>
                    <span className="text-xs text-gray-500 font-caption">Healthcare Solutions</span>
                </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-4">
                {navigationItems.map((section, index) => (
                    <div key={index} className="relative group">
                        <button
                            className={`flex items-center space-x-1 px-3 py-1 text-sm font-medium rounded-md transition-colors duration-200 ${isActiveSection(section.items)
                                ? 'text-[#2E86AB] bg-[#2E86AB]/10'
                                : 'text-gray-600 hover:text-[#2E86AB] hover:bg-[#2E86AB]/5'
                                }`}
                        >
                            <span>{section.label}</span>
                            <Icon name="ChevronDown" size={12} />
                        </button>

                        {/* Dropdown Menu */}
                        <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                            {section.items.map((item, itemIndex) => (
                                <Link
                                    key={itemIndex}
                                    to={item.path}
                                    className={`flex items-center space-x-2 px-4 py-2 text-sm transition-colors duration-200 ${isActivePath(item.path)
                                        ? 'text-[#2E86AB] bg-[#2E86AB]/10'
                                        : 'text-gray-700 hover:text-[#2E86AB] hover:bg-[#2E86AB]/5'
                                        }`}
                                >
                                    <Icon name={item.icon} size={16} />
                                    <span>{item.label}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </nav>

            {/* User Context Panel */}
            <div className="hidden lg:flex items-center space-x-4">
                <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Icon name="MapPin" size={14} />
                    <span>Main Pharmacy</span>
                </div>
                <div className="relative group">
                    <button className="flex items-center space-x-2 px-2 py-1 text-sm text-gray-700 rounded-md hover:bg-gray-100 transition-colors duration-200">
                        <div className="w-6 h-6 bg-[#2E86AB]/10 rounded-full flex items-center justify-center">
                            <Icon name="User" size={12} />
                        </div>
                        <span>Dr. Smith</span>
                        <Icon name="ChevronDown" size={12} />
                    </button>
                    <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <div className="py-1">
                            <button className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                <Icon name="Settings" size={14} />
                                <span>Settings</span>
                            </button>
                            <button className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                <Icon name="LogOut" size={14} />
                                <span>Sign Out</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Button */}
            <button
                onClick={toggleMobileMenu}
                className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors duration-200"
            >
                <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={20} />
            </button>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className="lg:hidden mt-2 w-full bg-white border-t border-gray-200">
                    {navigationItems.map((section, index) => (
                        <div key={index} className="py-2">
                            <div className="px-4 text-sm font-medium text-gray-600">{section.label}</div>
                            {section.items.map((item, itemIndex) => (
                                <Link
                                    key={itemIndex}
                                    to={item.path}
                                    onClick={toggleMobileMenu}
                                    className={`flex items-center space-x-2 px-4 py-2 text-sm rounded-md transition-colors duration-200 ${isActivePath(item.path)
                                        ? 'text-[#2E86AB] bg-[#2E86AB]/10'
                                        : 'text-gray-700 hover:text-[#2E86AB] hover:bg-[#2E86AB]/5'
                                        }`}
                                >
                                    <Icon name={item.icon} size={16} />
                                    <span>{item.label}</span>
                                </Link>
                            ))}
                        </div>
                    ))}
                    <div className="px-4 py-2 border-t border-gray-200">
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <Icon name="MapPin" size={14} />
                            <span>Main Pharmacy</span>
                        </div>
                        <div className="mt-2 flex items-center space-x-2 text-sm text-gray-700">
                            <div className="w-6 h-6 bg-[#2E86AB]/10 rounded-full flex items-center justify-center">
                                <Icon name="User" size={12} />
                            </div>
                            <span>Dr. Smith - Pharmacy Manager</span>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;