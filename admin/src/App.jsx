import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Blog from "./pages/Blog";
import ProtectedRoute from "./components/ProtectedRoute";
import CaseStudies from "./pages/CaseStudies";
import FreeTools from "./pages/FreeTools";
import AdminLayout from "./assets/layouts/AdminLayout";

function App() {
  return (
    <Router>
      <div className="font-sans">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />

          {/* Protected Routes with AdminLayout */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminLayout activeTab="dashboard">
                  <Dashboard />
                </AdminLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/blogs"
            element={
              <ProtectedRoute>
                <AdminLayout activeTab="blog">
                  <Blog />
                </AdminLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/casestudies"
            element={
              <ProtectedRoute>
                <AdminLayout activeTab="casestudies">
                  <CaseStudies />
                </AdminLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/freetools"
            element={
              <ProtectedRoute>
                <AdminLayout activeTab="freetools">
                  <FreeTools />
                </AdminLayout>
              </ProtectedRoute>
            }
          />

          {/* Catch all - redirect to dashboard */}
          <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
