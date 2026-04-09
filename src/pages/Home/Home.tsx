import './scss/Home.scss';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import AboutMe from '../About/AboutMe';
import Intro from './components/Intro';
import HeroBackground from '../../components/hero/HeroBackground';

const Home = () => {
  return (
    <div className="pullInner mainPullInner">
      <HeroBackground />
      <div className="mainInner">
        <section id="intro">
          <Intro />
        </section>

        <section id="aboutme">
          <AboutMe />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="project">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default Home;
