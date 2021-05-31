import './assets/css/style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Header } from './components/header';
import { Hero } from './components/hero';
import { About } from './components/about';
import { Features } from './components/features';
import { FAQ } from './components/faq';
import { Newsletter } from './components/newsletter';
import { Footer } from './components/footer';
import { BackToTop } from './components/back-top';
AOS.init({
  animatedClassName: 'animated',
  mirror: true,
});

function App() {
  return (
    <>
      <BackToTop />
      <Header />
      <Hero />
      <About />
      <Features />
      <FAQ />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;