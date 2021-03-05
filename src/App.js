import './assets/css/style.css';

import { Header } from './components/header';
import { Hero } from './components/hero';
import { About } from './components/about';
import { Features } from './components/features';
import { FAQ } from './components/faq';


function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Features />
      <FAQ />
    </>
  );
}

export default App;