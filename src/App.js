import Navigation from './components/Navigation';
import Header from './components/Header';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Awards from './components/Awards';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main>
        <Header />
        <Experience />
        <Projects />
        <Education />
        <Awards />
      </main>
      <Footer />
    </div>
  );
}

export default App;
