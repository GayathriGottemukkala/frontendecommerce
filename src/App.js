import logo from './logo.svg';
import './App.css';
import HomePage from './components/homepage';
import MainContent from './components/MainContent';
import About from './components/About';
import Services from './components/Services';
import Content from './components/Content';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFound from './components/Notfound';
import LoginPage from './components/login';
import Register from './components/register';
function App() {
  return (
  //  <div>
  //   <HomePage/>
  //  </div>
    <Router>
    <Navbar />
  
      <Routes>
        <Route exact path="/" element={<MainContent />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/content" element={<Content />} />
        <Route path="login" element={<LoginPage/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/*" element={<NotFound />} />
      </Routes>
 
    <Footer />
  </Router>
  );
}

export default App;
