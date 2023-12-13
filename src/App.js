import './app.scss';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projexts from './components/Projexts';
import ScrollUp from './components/ScrollUp';
import Skills from './components/Skills';

function App() {
  return (
    <>
    <Navbar/>
      <main>
        <Home/>
        <About/>
        <Skills/>
        <Projexts/>
        <Contact/>
        <ScrollUp/>
      </main>
    <Footer/>
    </>
  );
}

export default App;
