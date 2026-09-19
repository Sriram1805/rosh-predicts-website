import "./About.css";

function About() {
  return (
    <main className="about-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="about-hero">

        <div className="about-hero-content">

          <p className="about-eyebrow">
            ABOUT ROSH PREDICTS
          </p>

          <h1>
            A space for
            <br />
            reflection.
          </h1>

          <p>
            Tarot, astrology and guidance for moments
            when you need a little clarity.
          </p>

        </div>


        {/* HERO DECORATION */}

        <div
          className="about-hero-art"
          aria-hidden="true"
        >

          <div className="about-glow about-glow-blue"></div>

          <div className="about-glow about-glow-yellow"></div>

          <div className="about-ring about-ring-one"></div>

          <div className="about-ring about-ring-two"></div>

          <div className="about-orb">
            <span>☾</span>
          </div>

          <span className="about-star about-star-one">
            ✦
          </span>

          <span className="about-star about-star-two">
            ✧
          </span>

        </div>

      </section>


      {/* =====================================================
          PERSON BEHIND THE SPACE
      ===================================================== */}

      <section className="about-profile">

        {/* IMAGE PLACEHOLDER
            Replace this later with the client's image.
        */}

        <div className="about-profile-image">

          <div className="about-image-placeholder">
            <span>☾</span>
          </div>

          <div className="profile-image-accent"></div>

        </div>


        <div className="about-profile-content">

          <p className="section-label">
            THE PERSON BEHIND THE SPACE
          </p>

          <h2>
            Guidance with
            <br />
            a personal touch.
          </h2>

          <p>
            Rosh Predicts was created as a welcoming space
            to pause, reflect and explore life's questions
            from a different perspective.
          </p>

          <p>
            Through tarot, astrology and spiritual guidance,
            each experience is approached with care,
            openness and personal attention.
          </p>

          <p>
            The aim is to create a comfortable space where
            curiosity is welcomed and every journey can
            unfold at its own pace.
          </p>

        </div>

      </section>


      {/* =====================================================
          WHAT WE EXPLORE
      ===================================================== */}

      <section className="about-offer">

        <div className="about-offer-heading">

          <p className="section-label">
            WHAT WE EXPLORE
          </p>

          <h2>
            Different paths,
            <br />
            one welcoming space.
          </h2>

        </div>


        <div className="about-offer-grid">

          {/* TAROT */}

          <article className="about-offer-card">

            <span className="offer-number">
              01
            </span>

            <span className="offer-symbol">
              ✦
            </span>

            <h3>
              Tarot
            </h3>

            <p>
              Explore questions, emotions and situations
              through personalised tarot readings centred
              around what matters to you.
            </p>

          </article>


          {/* ASTROLOGY */}

          <article className="about-offer-card">

            <span className="offer-number">
              02
            </span>

            <span className="offer-symbol">
              ☾
            </span>

            <h3>
              Astrology
            </h3>

            <p>
              Discover your birth chart and explore
              perspectives through the language of
              astrology.
            </p>

          </article>


          {/* GUIDANCE */}

          <article className="about-offer-card">

            <span className="offer-number">
              03
            </span>

            <span className="offer-symbol">
              ✧
            </span>

            <h3>
              Guidance
            </h3>

            <p>
              Take a moment to reflect, reconnect and
              explore your thoughts through a calm and
              supportive experience.
            </p>

          </article>

        </div>

      </section>


      {/* =====================================================
          PHILOSOPHY
      ===================================================== */}

      <section className="about-philosophy">

        <div
          className="philosophy-decoration"
          aria-hidden="true"
        >

          <div className="philosophy-ring-one"></div>

          <div className="philosophy-ring-two"></div>

          <div className="philosophy-moon">
            ☾
          </div>

        </div>


        <div className="about-philosophy-content">

          <p className="section-label">
            A SIMPLE PHILOSOPHY
          </p>

          <h2>
            Pause.
            <br />
            Reflect.
            <br />
            Discover.
          </h2>

          <p>
            Every person arrives with different questions,
            experiences and hopes. Rosh Predicts creates
            space to explore those questions and connect
            with your own perspective.
          </p>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="about-cta">

        <p className="section-label">
          BEGIN YOUR JOURNEY
        </p>

        <h2>
          Curious about
          <br />
          what comes next?
        </h2>

        <p>
          Explore readings, guidance sessions and
          learning experiences.
        </p>

        <a
          href="/services"
          className="about-cta-button"
        >
          Explore Services
          <span>→</span>
        </a>

      </section>

    </main>
  );
}

export default About;