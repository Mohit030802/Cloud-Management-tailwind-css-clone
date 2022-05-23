
import About from './components/About';
import AllinOne from './components/AllinOne';
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import NewHero from './components/NewHero';
import Pricing from './components/Pricing';
import Support from './components/Support';

function App() {
  return (
    <>
     <Navbar/>

    <NewHero />
    <About />
    <Support />
    <AllinOne />
    <Pricing />
    <Footer />
    </>
  );
}

export default App;
