import NavBar from './components/nav/nav';
import HeroSection from './components/hero/hero';
import AboutSection from './components/about/about';
import ServicesOffered from './components/services/services';
import ContactForm from './components/contact/contact';
import FooterSection from './components/footer/footer';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ServicesOffered />
      <ContactForm />
      <FooterSection />
    </div>
  );
}

export default App;
