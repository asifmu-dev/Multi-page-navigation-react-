import { Link } from "react-router-dom";
import { services } from "../data/services";

export default function ServiceList() {
  return (
    <div className="card-grid">
      {services.map((service) => (
        <Link key={service.id} to={`/services/${service.id}`} className="card">
          <h3>{service.title}</h3>
          <p>{service.summary}</p>
          <div>View details →</div>
        </Link>
      ))}
    </div>
  );
}
