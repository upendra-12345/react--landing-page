import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ThreeBackground from './components/ThreeBackground';

function App() {
  return (
    <div className="App">
      <ThreeBackground />
      <Navbar />
      <main>
        <Hero />
        {/* You can add more sections like 'About' or 'Features' here */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
