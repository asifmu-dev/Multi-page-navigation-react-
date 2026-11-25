import { Link, useParams } from "react-router-dom";
import { services } from "../data/services";
import PillButton from "../components/PillButton";
import NotFound from "./NotFound";

export default function ServiceDetails() {
  const { serviceId } = useParams();
  const service = services.find((item) => item.id === serviceId);

  if (!service) return <NotFound />;

  return (
    <section className="section">
      <Link to="/services" className="back-link">← All services</Link>
      <h1>{service.title}</h1>
      <p>{service.description}</p>
      <ul>
        {service.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <PillButton to="/contact">Get in touch</PillButton>
    </section>
  );
}
