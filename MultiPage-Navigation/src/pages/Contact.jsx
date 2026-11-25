import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); 
    event.target.reset();
    setSent(true);
  };

  return (
    <section className="section">
      <h1>Contact</h1>
      <p>Tell us about your project. This is a demo form, so nothing is sent.</p>
      <form className="contact-form" onSubmit={handleSubmit} onChange={() => setSent(false)}>
        <input name="name" placeholder="Your name" aria-label="Your name" required />
        <input name="email" type="email" placeholder="Email" required />
        <textarea name="message" rows="5" placeholder="Message" required />
        <button type="submit">Send message</button>
        {sent && <div role="status">Form submitted (demo only).</div>}
      </form>
    </section>
  );
}
