import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import Doctors from '../pages/Doctors';
import Services from '../pages/Services';
import ServiceDetail from '../pages/ServiceDetail';
import Gallery from '../pages/Gallery';
import Blog from '../pages/Blog';
import BlogPost from '../pages/BlogPost';
import Contact from '../pages/Contact';
import Appointment from '../pages/Appointment';
import Offers from '../pages/Offers';
import Testimonials from '../pages/Testimonials';
import AIConsultation from '../pages/AIConsultation';
import NotFound from '../pages/NotFound';

// Admin Pages
import AdminLogin from '../pages/admin/Login';
import AdminDashboard from '../pages/admin/Dashboard';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'doctors',
        element: <Doctors />,
      },
      {
        path: 'services',
        element: <Services />,
      },
      {
        path: 'services/:slug',
        element: <ServiceDetail />,
      },
      {
        path: 'gallery',
        element: <Gallery />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
      {
        path: 'blog/:slug',
        element: <BlogPost />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'appointment',
        element: <Appointment />,
      },
      {
        path: 'offers',
        element: <Offers />,
      },
      {
        path: 'testimonials',
        element: <Testimonials />,
      },
      {
        path: 'ai-consultation',
        element: <AIConsultation />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
  // Admin Routes (without Layout)
  {
    path: '/admin/login',
    element: <AdminLogin />,
  },
  {
    path: '/admin/dashboard',
    element: <AdminDashboard />,
  },
]);

// Made with Bob
