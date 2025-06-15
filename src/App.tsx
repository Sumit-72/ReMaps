import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LocationDetailPage from './pages/LocationDetailPage';
import { SearchProvider } from './contexts/SearchContext';

function App() {
  return (
    <Router>
      <SearchProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/location/:id" element={<LocationDetailPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </SearchProvider>
    </Router>
  );
}

export default App;