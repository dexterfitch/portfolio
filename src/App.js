import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Videos from './components/teach/Videos';
import Articles from './components/teach/Articles';
import VisualAids from './components/teach/VisualAids';
import Fullstack from './components/code/Fullstack';
import Frontend from './components/code/Frontend';
import Wordpress from './components/code/Wordpress';
import Graphics from './components/draw/Graphics';
import Illustration from './components/draw/Illustration';
import Advertisements from './components/draw/Advertisements';
import Write from './components/Write';
import About from './components/About';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <Nav />
          </div>
          <div className="col-9">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/visualaids" element={<VisualAids />} />
              <Route path="/fullstack" element={<Fullstack />} />
              <Route path="/frontend" element={<Frontend />} />
              <Route path="/wordpress" element={<Wordpress />} />
              <Route path="/graphics" element={<Graphics />} />
              <Route path="/illustration" element={<Illustration />} />
              <Route path="/ads" element={<Advertisements />} />
              <Route path="/write" element={<Write />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
