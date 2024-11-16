import Nav from "../../components/Nav/";
import Hero from "../../components/Hero/";
import backgroundImageHero from "../../assets/bank-tree.jpeg";
import "./Home.scss";

function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero backgroundImage={backgroundImageHero} />
      </main>
    </>
  );
}

export default Home;
