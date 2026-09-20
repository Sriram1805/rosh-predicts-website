import { Link } from "react-router-dom";
import "./Contact.css";

function Contact() {
  return (
    <main className="contact-page">

      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <p className="contact-eyebrow">GET IN TOUCH</p>

          <h1>
            Let’s start a
            <br />
            conversation.
          </h1>

          <p className="contact-hero-text">
            Have a question about a reading, class or guidance session?
            Reach out and let’s connect.
          </p>
        </div>

        <div className="contact-hero-art" aria-hidden="true">
          <div className="contact-glow contact-glow-blue"></div>
          <div className="contact-glow contact-glow-yellow"></div>

          <div className="contact-ring contact-ring-one"></div>
          <div className="contact-ring contact-ring-two"></div>

          <div className="contact-orb">
            <span>✦</span>
          </div>

          <span className="contact-star contact-star-one">✧</span>
          <span className="contact-star contact-star-two">✦</span>
          <span className="contact-star contact-star-three">✧</span>
        </div>
      </section>

      {/* Contact Options */}
      <section className="contact-options">
        <div className="contact-section-heading">
          <p className="section-label">CONNECT WITH US</p>

          <h2>
            Choose what
            <br />
            works for you.
          </h2>

          <p>
            For bookings, questions or class enquiries, you can reach
            Rosh Predicts through the available contact channels.
          </p>
        </div>

        <div className="contact-cards">

          <article className="contact-card">
            <div className="contact-card-icon">◎</div>

            <p className="contact-card-label">INSTAGRAM</p>

            <h3>Follow & Message</h3>

            <p>
              Stay connected with updates, readings, announcements
              and new offerings.
            </p>

            <a
              href="https://www.instagram.com/rosh_predicts?stkn=MWd2ZWZ4YjM2d2VlTNA="
              className="contact-card-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Instagram <span>↗</span>
            </a>
          </article>

          <article className="contact-card contact-card-highlight">
            <div className="contact-card-icon">◌</div>

            <p className="contact-card-label">WHATSAPP</p>

            <h3>Chat With Us</h3>

            <p>
              Send a message for bookings, enquiries or more
              information about the available services.
            </p>

            <a href="#" className="contact-card-link">
              Start a Conversation <span>→</span>
            </a>
          </article>

          <article className="contact-card">
            <div className="contact-card-icon">✉</div>

            <p className="contact-card-label">GENERAL ENQUIRIES</p>

            <h3>Ask a Question</h3>

            <p>
              Not sure which service or class is right for you?
              Feel free to get in touch.
            </p>

            <a href="#" className="contact-card-link">
              Send an Enquiry <span>→</span>
            </a>
          </article>

        </div>
      </section>

      {/* Message Section */}
      <section className="contact-message">
        <div className="contact-message-decoration" aria-hidden="true">
          <div className="message-circle message-circle-one"></div>
          <div className="message-circle message-circle-two"></div>
          <span>☾</span>
        </div>

        <div className="contact-message-content">
          <p className="section-label">A LITTLE NOTE</p>

          <h2>
            Your questions
            <br />
            are welcome.
          </h2>

          <p>
            Whether you are exploring tarot for the first time,
            interested in learning astrology or simply looking for
            some guidance, you are welcome to reach out.
          </p>

          <p>
            Share what you are looking for and we can take it from there.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="contact-cta">
        <p className="section-label">READY WHEN YOU ARE</p>

        <h2>
          Take the next
          <br />
          little step.
        </h2>

        <p>
          Explore the services and learning experiences available
          at Rosh Predicts.
        </p>

        <Link to="/services" className="contact-cta-button">
          Explore Services <span>→</span>
        </Link>
      </section>

    </main>
  );
}

export default Contact;