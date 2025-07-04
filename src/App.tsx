import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Admissions from './pages/Admissions';
import Contact from './pages/Contact';
import FeeStructure from './pages/FeeStructure';
import Newsletters from './pages/Newsletters';
import StudentDashboard from './pages/dashboard/StudentDashboard';
import TeacherDashboard from './pages/dashboard/TeacherDashboard';
import AdminDashboard from './pages/dashboard/AdminDashboard';
import NotFound from './pages/NotFound';
// Protected route component
const ProtectedRoute = ({
  children,
  allowedRoles
}) => {
  const {
    user
  } = useAuth();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }
  return children;
};
export function App() {
  return <AuthProvider>
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/fee-structure" element={<FeeStructure />} />
          <Route path="/newsletters" element={<Newsletters />} />
          {/* Protected routes */}
          <Route path="/student-dashboard/*" element={<ProtectedRoute allowedRoles={['student']}>
                <StudentDashboard />
              </ProtectedRoute>} />
          <Route path="/teacher-dashboard/*" element={<ProtectedRoute allowedRoles={['teacher']}>
                <TeacherDashboard />
              </ProtectedRoute>} />
          <Route path="/admin-dashboard/*" element={<ProtectedRoute allowedRoles={['admin']}>
                <AdminDashboard />
              </ProtectedRoute>} />
          {/* 404 route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>;
}