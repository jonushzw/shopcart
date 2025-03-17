import './globals.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import DesignPage from './pages/design';

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Link to="/design">Go to Design Page</Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/design" element={<DesignPage />} />
      </Routes>
    </Router>
  );
}

export default App;