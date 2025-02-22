import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import LandingPage from './pages/LandingPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import ManagerDashboard from './pages/ManagerDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';
import {Home} from './pages/Home';
import KnowYourWaste from './pages/KnowYourWaste';
import Upcycling from './pages/upcycling';
import Hazard from './pages/Hazardous-disposal';
import { Navbar } from './components/Navbar';
import { PhotoDetail } from './components/PhotoDetails';
import { PhotoList } from './components/PhotoList';
import { UploadForm } from './components/UploadForm';
import { Cart } from './components/Cart';
import Components from './pages/Components';

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <AuthProvider>
      <Routes>
        {/* Wrap everything in a Layout that includes Navbar */}
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/dashboard/user"
            element={
              <ProtectedRoute allowedRoles={['user']}>
                <UserDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/admin"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/manager"
            element={
              <ProtectedRoute allowedRoles={['manager']}>
                <ManagerDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/services/know-your-waste"
            element={
              <ProtectedRoute allowedRoles={['user']}>
                <KnowYourWaste />
              </ProtectedRoute>
            }
          />
          <Route
            path="/services/upcycling"
            element={
              <ProtectedRoute allowedRoles={['user']}>
                <Upcycling />
              </ProtectedRoute>
            }
          />
          <Route
            path="/services/dispose-hazard"
            element={
              <ProtectedRoute allowedRoles={['user']}>
                <Hazard />
              </ProtectedRoute>
            }
          />

          {/* Services Section */}
          <Route path="/services/components" element={<Components />}/>
            
            <Route path="/services/upload" element={<UploadForm />} />
            <Route path="/services/photo/:id" element={<PhotoDetail />} />
            <Route path="/services/cart" element={<Cart />} />
         

          {/* Catch-all for unknown routes */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
      <Toaster position="top-right" />
    </AuthProvider>
  );
}

export default App;