import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiCalendar,
  FiMail,
  FiUsers,
  FiStar,
  FiLogOut,
  FiMenu,
  FiX,
} from 'react-icons/fi';

interface Stats {
  appointments: number;
  contacts: number;
  reviews: number;
  blogs: number;
}

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [stats, setStats] = useState<Stats>({
    appointments: 0,
    contacts: 0,
    reviews: 0,
    blogs: 0,
  });
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('dashboard');

  useEffect(() => {
    // Check authentication
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
      return;
    }

    // Fetch stats
    fetchStats();
  }, [navigate]);

  const fetchStats = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      
      // Fetch all stats in parallel
      const [appointments, contacts, reviews, blogs] = await Promise.all([
        fetch('http://localhost:5000/api/appointments', {
          headers: { Authorization: `Bearer ${token}` },
        }).then((r) => r.json()),
        fetch('http://localhost:5000/api/contact', {
          headers: { Authorization: `Bearer ${token}` },
        }).then((r) => r.json()),
        fetch('http://localhost:5000/api/reviews', {
          headers: { Authorization: `Bearer ${token}` },
        }).then((r) => r.json()),
        fetch('http://localhost:5000/api/blogs', {
          headers: { Authorization: `Bearer ${token}` },
        }).then((r) => r.json()),
      ]);

      setStats({
        appointments: appointments.total || 0,
        contacts: contacts.total || 0,
        reviews: reviews.count || 0,
        blogs: blogs.count || 0,
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    navigate('/admin/login');
  };

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: FiMenu },
    { id: 'appointments', label: 'Appointments', icon: FiCalendar },
    { id: 'contacts', label: 'Messages', icon: FiMail },
    { id: 'reviews', label: 'Reviews', icon: FiStar },
    { id: 'users', label: 'Users', icon: FiUsers },
  ];

  const statCards = [
    {
      title: 'Total Appointments',
      value: stats.appointments,
      icon: FiCalendar,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Messages',
      value: stats.contacts,
      icon: FiMail,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
    },
    {
      title: 'Reviews',
      value: stats.reviews,
      icon: FiStar,
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50',
    },
    {
      title: 'Blog Posts',
      value: stats.blogs,
      icon: FiUsers,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white shadow-lg transition-all duration-300 z-50 ${
          sidebarOpen ? 'w-64' : 'w-20'
        }`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            {sidebarOpen && (
              <h1 className="font-playfair text-2xl font-bold text-gold-600">
                Elegant Glow
              </h1>
            )}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              {sidebarOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>

        {/* Menu Items */}
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeSection === item.id
                  ? 'bg-gold-50 text-gold-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <item.icon size={20} />
              {sidebarOpen && <span className="font-medium">{item.label}</span>}
            </button>
          ))}
        </nav>

        {/* Logout Button */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <FiLogOut size={20} />
            {sidebarOpen && <span className="font-medium">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={`transition-all duration-300 ${
          sidebarOpen ? 'ml-64' : 'ml-20'
        }`}
      >
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
              <p className="text-gray-600 mt-1">
                Welcome back! Here's what's happening today.
              </p>
            </div>
            <button
              onClick={() => navigate('/')}
              className="px-4 py-2 text-gold-600 hover:bg-gold-50 rounded-lg transition-colors"
            >
              View Website
            </button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {statCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`${card.bgColor} rounded-xl p-6 shadow-sm`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`p-3 bg-gradient-to-r ${card.color} rounded-lg`}
                  >
                    <card.icon className="text-white" size={24} />
                  </div>
                </div>
                <h3 className="text-gray-600 text-sm font-medium mb-1">
                  {card.title}
                </h3>
                <p className="text-3xl font-bold text-gray-900">{card.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Quick Actions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button
                onClick={() => setActiveSection('appointments')}
                className="p-4 border-2 border-gray-200 rounded-lg hover:border-gold-500 hover:bg-gold-50 transition-all text-left"
              >
                <FiCalendar className="text-gold-600 mb-2" size={24} />
                <h4 className="font-semibold text-gray-900">
                  Manage Appointments
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  View and manage all appointments
                </p>
              </button>

              <button
                onClick={() => setActiveSection('contacts')}
                className="p-4 border-2 border-gray-200 rounded-lg hover:border-gold-500 hover:bg-gold-50 transition-all text-left"
              >
                <FiMail className="text-gold-600 mb-2" size={24} />
                <h4 className="font-semibold text-gray-900">View Messages</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Check customer inquiries
                </p>
              </button>

              <button
                onClick={() => setActiveSection('reviews')}
                className="p-4 border-2 border-gray-200 rounded-lg hover:border-gold-500 hover:bg-gold-50 transition-all text-left"
              >
                <FiStar className="text-gold-600 mb-2" size={24} />
                <h4 className="font-semibold text-gray-900">
                  Moderate Reviews
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  Approve or reject reviews
                </p>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Made with Bob
