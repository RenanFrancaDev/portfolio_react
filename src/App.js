import './App.css';
import Footer from './components/section/Footer';
import Navbar from './components/section/Navbar'
import Presentation from './components/section/Presentation';
import Projects from './components/section/Projects';
import Skills from './components/section/Skills.';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Presentation/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
