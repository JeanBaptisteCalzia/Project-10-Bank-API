import Nav from "../../components/Nav/";
import Hero from "../../components/Hero/";
import Features from "../../components/Features/";
import backgroundImageHero from "../../assets/bank-tree.jpeg";
import "./Home.scss";

function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero backgroundImage={backgroundImageHero} />
        <Features />
      </main>
    </>
  );
}

export default Home;
