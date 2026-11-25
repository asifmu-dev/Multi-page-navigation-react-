import PillButton from "../components/PillButton";
import ServiceList from "../components/ServiceList";

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>Digital services that <span>move you forward</span></h1>
        <p>Websites, apps and design for growing businesses.</p>
        <PillButton to="/services">Explore services</PillButton>
      </section>
      <section className="section">
        <h2>What we do</h2>
        <ServiceList />
      </section>
    </>
  );
}
