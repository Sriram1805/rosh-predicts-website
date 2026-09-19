import "./Home.css";

function Home() {
  return (
    <main className="home">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="hero">

        <div className="hero-content">

          <p className="hero-brand">
            ROSH PREDICTS
          </p>

          <p className="hero-tagline">
            TAROT • ASTROLOGY • GUIDANCE
          </p>

          <h1>
            Discover the
            <br />
            wisdom
            <br />
            within you
          </h1>

          <p className="hero-description">
            Explore tarot, astrology, intuitive guidance and learning
            experiences designed to help you understand yourself and
            your journey with greater clarity.
          </p>

          <div className="hero-buttons">

            <a
              href="/services"
              className="primary-button"
            >
              Explore Services
              <span aria-hidden="true">→</span>
            </a>

            <a
              href="/classes"
              className="secondary-button"
            >
              Explore Classes
              <span aria-hidden="true">→</span>
            </a>

          </div>

        </div>


        {/* =================================================
            RIGHT CELESTIAL ARTWORK
        ================================================= */}

        <div className="hero-decoration">

          <div
            className="art-glow art-glow-blue"
            aria-hidden="true"
          ></div>

          <div
            className="art-glow art-glow-yellow"
            aria-hidden="true"
          ></div>

          <div
            className="art-glow art-glow-mauve"
            aria-hidden="true"
          ></div>


          <div
            className="celestial-ring ring-one"
            aria-hidden="true"
          ></div>

          <div
            className="celestial-ring ring-two"
            aria-hidden="true"
          ></div>


          <div
            className="hero-circle circle-blue"
            aria-hidden="true"
          ></div>

          <div
            className="hero-circle circle-yellow"
            aria-hidden="true"
          ></div>

          <div
            className="hero-circle circle-mauve"
            aria-hidden="true"
          ></div>


          <div
            className="sun-rays ray-one"
            aria-hidden="true"
          ></div>

          <div
            className="sun-rays ray-two"
            aria-hidden="true"
          ></div>

          <div
            className="sun-rays ray-three"
            aria-hidden="true"
          ></div>

          <div
            className="sun-rays ray-four"
            aria-hidden="true"
          ></div>


          <div
            className="hero-spark spark-one"
            aria-hidden="true"
          >
            ✦
          </div>

          <div
            className="hero-spark spark-two"
            aria-hidden="true"
          >
            ✦
          </div>

          <div
            className="hero-spark spark-three"
            aria-hidden="true"
          >
            ✦
          </div>

          <div
            className="hero-spark spark-four"
            aria-hidden="true"
          >
            ✦
          </div>


          {/* =================================================
              ROSH PREDICTS CENTER
          ================================================= */}

          <div className="hero-brand-center">

            <div className="center-moon">
              ☾
            </div>

            <div className="center-brand-name">
              <span>ROSH </span>
              <span>PREDICTS</span>
            </div>

            <div
              className="center-divider"
              aria-hidden="true"
            >
              ✦
            </div>

            <div className="center-tagline">
              TAROT • ASTROLOGY • GUIDANCE
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="intro-section">

        <p className="section-label">
          A SPACE FOR GUIDANCE
        </p>

        <h2>
          Learn, explore & connect
          <br />
          with your inner world.
        </h2>

        <p className="section-text">
          Rosh Predicts brings together spiritual guidance,
          personalised readings and thoughtfully created learning
          experiences in one welcoming space.
        </p>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="preview-section services-preview">

        <div className="preview-heading">

          <p className="section-label">
            SERVICES
          </p>

          <h2>
            Personal guidance
            <br />
            for your journey
          </h2>

        </div>


        <div className="preview-grid">

          <div className="preview-card">

            <span>
              01
            </span>

            <h3>
              Tarot Readings
            </h3>

            <p>
              Personalised tarot sessions created around your
              questions and areas of focus.
            </p>

            <a href="/services">
              Learn More →
            </a>

          </div>


          <div className="preview-card">

            <span>
              02
            </span>

            <h3>
              Astrology
            </h3>

            <p>
              Explore your birth chart and discover deeper
              perspectives through astrology.
            </p>

            <a href="/services">
              Learn More →
            </a>

          </div>


          <div className="preview-card">

            <span>
              03
            </span>

            <h3>
              Spiritual Guidance
            </h3>

            <p>
              Thoughtful sessions designed to provide reflection,
              clarity and direction.
            </p>

            <a href="/services">
              Learn More →
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          CLASSES & WORKSHOPS
      ===================================================== */}

      <section className="classes-preview">

        <div className="classes-content">

          <p className="section-label">
            CLASSES & WORKSHOPS
          </p>

          <h2>
            Learn the art,
            <br />
            not just the cards.
          </h2>

          <p>
            Discover upcoming workshops, tarot learning experiences
            and other classes created for curious minds and
            aspiring learners.
          </p>

          <a
            href="/classes"
            className="primary-button"
          >
            View Classes
            <span aria-hidden="true">→</span>
          </a>

        </div>


        <div className="classes-art">

          <div
            className="art-orbit orbit-one"
            aria-hidden="true"
          ></div>

          <div
            className="art-orbit orbit-two"
            aria-hidden="true"
          ></div>

          <div
            className="class-circle class-blue"
            aria-hidden="true"
          ></div>

          <div
            className="class-circle class-yellow"
            aria-hidden="true"
          ></div>

          <div
            className="art-moon"
            aria-hidden="true"
          >
            ☾
          </div>

        </div>

      </section>


      {/* =====================================================
          FEEDBACK
      ===================================================== */}

      <section className="feedback-preview">

        <p className="section-label">
          FEEDBACK
        </p>

        <h2>
          Words from the community
        </h2>


        <div className="quote-card">

          <div
            className="quote-mark"
            aria-hidden="true"
          >
            “
          </div>

          <p>
            Every session felt warm, thoughtful and easy to
            understand. The guidance helped me look at things
            from a completely different perspective.
          </p>

          <span>
            —  Feedback
          </span>

        </div>


        <a
          href="/feedback"
          className="text-link"
        >
          View all feedback →
        </a>

      </section>


      {/* =====================================================
          CONTACT / CTA
      ===================================================== */}

      <section className="home-cta">

        <p className="section-label">
          LET'S CONNECT
        </p>

        <h2>
          Have a question?
          <br />
          Let's talk.
        </h2>

        <p>
          For service enquiries, classes and availability,
          get in touch directly through Instagram or WhatsApp.
        </p>


        <div className="cta-buttons">

          <a
            href="https://www.instagram.com/rosh_predicts?stkn=MWd2ZWZ4YjM2d2VtNA=="
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button"
          >
            Instagram
            <span aria-hidden="true">→</span>
          </a>

          <a
            href="#"
            className="secondary-button"
          >
            WhatsApp
            <span aria-hidden="true">→</span>
          </a>

        </div>

      </section>

    </main>
  );
}

export default Home;