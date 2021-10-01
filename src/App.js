import { initializeApp } from 'firebase/app';
import ContactSection from './components/contact/contactforms';
import FooterSection from './components/footer/footer';
import HeroSection from './components/hero/hero';
import ValuesSection from './components/values/values';

const firebaseConfig = {
  apiKey: 'AIzaSyAxlqGvWCTrSu9h0Ji6JA4_xN7EpuAGmAc',
  authDomain: 'tjfj-ecf08.firebaseapp.com',
  projectId: 'tjfj-ecf08',
  storageBucket: 'tjfj-ecf08.appspot.com',
  messagingSenderId: '253334396702',
  appId: '1:253334396702:web:421f6123030db5aab3330f',
  measurementId: 'G-T3DM4T4XNT',
};

const app = initializeApp(firebaseConfig);

function App() {
  return (
    <div className='App'>
      <HeroSection />
      <ValuesSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}

export default App;
