import Header from "./Header.jsx";
import Hero from "./Hero.jsx";
import Articles from "./Articles.jsx";
import About from "./About.jsx";
import Reviews from "./Reviews.jsx";
import Brand from "./Brand";
import Projects from "./Projects.jsx";
import Counter from "./Counter.jsx";
import News from "./News.jsx";
import Join from "./Join.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <>
      <Header name={"header"} />
      <main className="main">
        <Hero name={"hero"} />
        <Articles name={"articles"} />
        <About name={"about"} />
        <Reviews name={"reviews"} />
        <Brand name={"brand"} />
        <Projects name={"projects"} />
        <Counter name={"counter"} />
        <News name={"news"} />
        <Join name={"join"} />
      </main>
      <Footer name={"footer"} />
    </>
  );
}

export default App;
