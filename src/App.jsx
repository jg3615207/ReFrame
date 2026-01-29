import React, { useState } from 'react';
import Layout from './components/Layout';
import Gallery from './pages/Gallery';
import Studio from './pages/Studio';

function App() {
  const [currentView, setCurrentView] = useState('gallery');
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const navigateToStudio = (_view, template) => {
    setSelectedTemplate(template);
    setCurrentView('studio');
  };

  const navigateToGallery = () => {
    setSelectedTemplate(null);
    setCurrentView('gallery');
  };

  // Studio takes over the full screen, bypassing the default Layout
  if (currentView === 'studio' && selectedTemplate) {
    return <Studio template={selectedTemplate} onBack={navigateToGallery} />;
  }

  return (
    <Layout>
      <Gallery onNavigate={navigateToStudio} />
    </Layout>
  );
}

export default App;
