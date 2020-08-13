import React from 'react';
import Header from './component/header/headerCompnent.jsx';
import Home from './component/home/homeComponent';
import About from './component/about/aboutmeComponent.jsx';
import Projects from './component/projects/projectComponents.jsx';
import Contact from './component/contact/contactComponent.jsx';
import Footer from './component/footer/footerComponent.jsx';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home  />
      <About  />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;