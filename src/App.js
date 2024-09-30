import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Sidebar from './components/admin/Layout/Sidebar';
import TopBar from './components/admin/Layout/topbar';
import DirectorTable from './components/admin/Xodimlar/Xodimlar';
import Administrators from './components/admin/Xodimlar/Admin';
import Login from './components/admin/Login/Loogin';
import HomePage from './components/client/Home/HomePage';
import IDPage from './components/admin/id/Idpage';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/admin" element={<Login />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow bg-gray-100 min-h-screen">
          <TopBar />
          <div className="p-6">
            <Routes>
              <Route path="admin/directors" element={<DirectorTable />} />
              <Route path="admin/administrators" element={<Administrators />} />
              <Route path="admin/id" element={<IDPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

