import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skill";

export const metadata = {
  title: "Home | Portfolio | Tayyab.dev",
};

function Home() {
  return (
    <div className="homepage">
      <Hero />
      <About />
      <WorkExperience />
      <Skills />
    </div>
  );
}

export default Home;