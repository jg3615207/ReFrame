import React, { useState } from 'react';
import Layout from './components/Layout';
import Gallery from './pages/Gallery';
import Studio from './pages/Studio';
import Login from './pages/Login';
import { AuthProvider, useAuth } from './context/AuthProvider';

const AppContent = () => {
  const { user } = useAuth();
  const [currentView, setCurrentView] = useState('gallery');
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const navigateToStudio = (_view, template) => {
    if (!user) {
      alert("Please sign in to use the studio");
      setCurrentView('login');
      return;
    }
    setSelectedTemplate(template);
    setCurrentView('studio');
  };

  const navigateToGallery = () => {
    setSelectedTemplate(null);
    setCurrentView('gallery');
  };

  if (currentView === 'login' && !user) {
    return <Login />;
  }

  // Redirect to gallery if logged in from login page
  if (currentView === 'login' && user) {
    setCurrentView('gallery');
  }

  if (currentView === 'studio' && selectedTemplate && user) {
    return <Studio template={selectedTemplate} onBack={navigateToGallery} />;
  }

  return (
    <Layout>
      <Gallery onNavigate={navigateToStudio} />
    </Layout>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
