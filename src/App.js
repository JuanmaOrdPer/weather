import { WeatherProvider } from './context/WeatherContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WeatherNav from './components/WeatherNav';
import Home from './pages/Home';
import Details from './pages/Details';

function App() {
  return (
    <WeatherProvider>
      <Router>
        <WeatherNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ciudad/:cityName" element={<Details />} />
        </Routes>
      </Router>
    </WeatherProvider>
  );
}

export default App;