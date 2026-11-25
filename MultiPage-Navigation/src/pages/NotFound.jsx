import PillButton from "../components/PillButton";

export default function NotFound() {
  return (
    <section className="hero">
      <h1><span>404</span> Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <PillButton to="/">Back to home</PillButton>
    </section>
  );
}
