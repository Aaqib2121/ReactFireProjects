import React, { useState } from 'react';
import styled from 'styled-components';
// import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Qualification from './components/Qualification';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';


const AppContainer = styled.div`
  display: flex;
`;

const ContentContainer = styled.div`
  flex: 1;
`;

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <AppContainer>
      {/* <Sidebar isOpen={sidebarOpen} onClose={toggleSidebar} /> */}
      <ContentContainer>
        {/* Your content components go here */}
        <Navbar />
        <Home />
        <About />
        <Qualification />
        <Skills />
        <Projects />
        <Services />
        <Contact />
        <Footer />
      </ContentContainer>
    </AppContainer>
  );
}

export default App;
