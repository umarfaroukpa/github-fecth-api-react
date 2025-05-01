import { useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './components/HomePage.jsx';
import RepoPage from './components/RepoPage.jsx';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [activeRepoId, setActiveRepoId] = useState(null);
  
  const navigateToRepo = (repoId) => {
    setActiveRepoId(repoId);
    setActivePage('repo');
  };
  
  const navigateToHome = () => {
    setActivePage('home');
  };
  
  return (
    <div className="min-h-screen bg-purple-100">
      <Header navigateToHome={navigateToHome} />
      
      <main className="container mx-auto px-4 py-8">
        {activePage === 'home' && (
          <HomePage navigateToRepo={navigateToRepo} />
        )}
        
        {activePage === 'repo' && (
          <RepoPage repoId={activeRepoId} navigateToHome={navigateToHome} />
        )}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;