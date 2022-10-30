import Hero from './components/Hero';
import ImageSection from './components/ImageSection';
import InfoSection from './components/InfoSection';
import MusicSection from './components/MusicSection';
import Navbar from './components/Navbar';
import TwoColumnSection from './components/TwoColumnSection';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <MusicSection />
      <InfoSection />
      <ImageSection />
      <TwoColumnSection />
    </>
  );
}

export default App;
