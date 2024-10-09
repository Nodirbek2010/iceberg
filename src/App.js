import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/admin/Layout/Sidebar';
import TopBar from './components/admin/Layout/topbar';
import DirectorTable from './components/admin/Xodimlar/Xodimlar';
import Administrators from './components/admin/Xodimlar/Admin';
import Login from './components/admin/Login/Loogin';
import HomePage from './components/client/Home/HomePage';
import IDPage from './components/admin/id/Idpage';
import Qabul from './components/admin/Qabul/qabul';
import Tolovlar from './components/admin/Tolovlar/Tolovlar';
import StudentIDPage from './components/admin/Tolovlar/TolovlarIdPage'; 

// Admin Layout Component
function AdminLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow bg-gray-100 min-h-screen">
        <TopBar />
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page Route */}
        <Route path="/" element={<HomePage />} />

        {/* Login Page Route */}
        <Route path="/admin" element={<Login />} />

        {/* Admin Routes */}
        <Route
          path="/admin/*"
          element={
            <AdminLayout>
              <Routes>
                <Route path="directors" element={<DirectorTable />} />
                <Route path="administrators" element={<Administrators />} />
                <Route path="id" element={<IDPage />} />
                <Route path="qabul" element={<Qabul />} />
                <Route path="Tolovlar" element={<Tolovlar />} />
                <Route path="student/:id" element={<StudentIDPage />} /> {/* Route for StudentIDPage */}
              </Routes>
            </AdminLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
