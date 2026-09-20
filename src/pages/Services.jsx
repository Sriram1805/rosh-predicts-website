import { Link } from "react-router-dom";
import "./Services.css";

function Services() {
  return (
    <main className="services-page">

      {/* =====================================================
          PAGE HERO
      ===================================================== */}

      <section className="services-page-hero">

        <div className="services-page-hero-content">

          <p className="services-eyebrow">
            ROSH PREDICTS
          </p>

          <h1>
            Services
          </h1>

          <p>
            Explore personalised readings and guidance created
            to bring clarity, reflection and a deeper perspective
            to your journey.
          </p>

        </div>

        {/* Small celestial decoration */}

        <div className="services-hero-decoration" aria-hidden="true">

          <div className="services-hero-ring ring-one"></div>

          <div className="services-hero-ring ring-two"></div>

          <div className="services-hero-orb">
            <span>☾</span>
          </div>

          <span className="services-star star-one">
            ✦
          </span>

          <span className="services-star star-two">
            ✦
          </span>

        </div>

      </section>


      {/* =====================================================
          SERVICES CATALOGUE
      ===================================================== */}

      <section className="services-catalogue">


        {/* ===================================================
            TAROT READINGS
        =================================================== */}

        <div className="service-group">

          <div className="service-group-heading">

            <div>
              <p className="service-group-label">
                01 · TAROT
              </p>

              <h2>
                Tarot Readings
              </h2>
            </div>

            <p>
              Personalised sessions using tarot as a tool for
              reflection, exploration and perspective.
            </p>

          </div>


          <div className="services-card-grid">

            <article className="service-product-card">

              <div className="service-card-art art-tarot-one">
                <span>✦</span>
              </div>

              <div className="service-card-content">

                <span className="service-type">
                  TAROT · PERSONAL
                </span>

                <h3>
                  Personal Tarot Reading
                </h3>

                <p>
                  A personalised reading centred around the
                  questions and themes you would like to explore.
                </p>

                <Link to="/contact">
                  Enquire →
                </Link>

              </div>

            </article>


            <article className="service-product-card">

              <div className="service-card-art art-tarot-two">
                <span>☾</span>
              </div>

              <div className="service-card-content">

                <span className="service-type">
                  TAROT · FOCUSED
                </span>

                <h3>
                  Focused Tarot Session
                </h3>

                <p>
                  A focused session for one particular question,
                  situation or area of reflection.
                </p>

                <Link to="/contact">
                  Enquire →
                </Link>

              </div>

            </article>


            <article className="service-product-card">

              <div className="service-card-art art-tarot-three">
                <span>✧</span>
              </div>

              <div className="service-card-content">

                <span className="service-type">
                  TAROT · EXTENDED
                </span>

                <h3>
                  In-Depth Reading
                </h3>

                <p>
                  More time to explore multiple questions and
                  themes through a detailed tarot session.
                </p>

                <Link to="/contact">
                  Enquire →
                </Link>

              </div>

            </article>

          </div>

        </div>


        {/* ===================================================
            ASTROLOGY
        =================================================== */}

        <div className="service-group astrology-group">

          <div className="service-group-heading">

            <div>
              <p className="service-group-label">
                02 · ASTROLOGY
              </p>

              <h2>
                Astrology
              </h2>
            </div>

            <p>
              Explore your birth chart and discover perspectives
              through the language of astrology.
            </p>

          </div>


          <div className="services-card-grid">

            <article className="service-product-card">

              <div className="service-card-art art-astro-one">
                <span>◌</span>
              </div>

              <div className="service-card-content">

                <span className="service-type">
                  ASTROLOGY · BIRTH CHART
                </span>

                <h3>
                  Birth Chart Reading
                </h3>

                <p>
                  Explore the key elements of your natal chart
                  and the themes reflected within it.
                </p>

                <Link to="/contact">
                  Enquire →
                </Link>

              </div>

            </article>


            <article className="service-product-card">

              <div className="service-card-art art-astro-two">
                <span>✦</span>
              </div>

              <div className="service-card-content">

                <span className="service-type">
                  ASTROLOGY · GUIDANCE
                </span>

                <h3>
                  Astrology Guidance
                </h3>

                <p>
                  A reflective session focused on the areas
                  you would like to understand more deeply.
                </p>

                <Link to="/contact">
                  Enquire →
                </Link>

              </div>

            </article>

          </div>

        </div>


        {/* ===================================================
            SPIRITUAL GUIDANCE
        =================================================== */}

        <div className="service-group guidance-group">

          <div className="service-group-heading">

            <div>
              <p className="service-group-label">
                03 · GUIDANCE
              </p>

              <h2>
                Spiritual Guidance
              </h2>
            </div>

            <p>
              A calm space for reflection, conversation and
              looking at things from a different perspective.
            </p>

          </div>


          <div className="services-card-grid">

            <article className="service-product-card">

              <div className="service-card-art art-guidance-one">
                <span>☾</span>
              </div>

              <div className="service-card-content">

                <span className="service-type">
                  GUIDANCE · PERSONAL
                </span>

                <h3>
                  Reflective Guidance
                </h3>

                <p>
                  A thoughtful session designed around what
                  you are currently navigating or exploring.
                </p>

                <Link to="/contact">
                  Enquire →
                </Link>

              </div>

            </article>


            <article className="service-product-card">

              <div className="service-card-art art-guidance-two">
                <span>✧</span>
              </div>

              <div className="service-card-content">

                <span className="service-type">
                  GUIDANCE · CONVERSATION
                </span>

                <h3>
                  Clarity Session
                </h3>

                <p>
                  Create space to pause, reflect and approach
                  a situation with a fresh perspective.
                </p>

                <Link to="/contact">
                  Enquire →
                </Link>

              </div>

            </article>

          </div>

        </div>


      </section>


      {/* =====================================================
          SIMPLE BOTTOM CTA
      ===================================================== */}

      <section className="services-bottom">

        <span className="services-bottom-star" aria-hidden="true">
          ✦
        </span>

        <p>
          NOT SURE WHICH SESSION TO CHOOSE?
        </p>

        <h2>
          Let's find the right
          <br />
          place to begin.
        </h2>

        <Link to="/contact">
          Get in Touch →
        </Link>

      </section>

    </main>
  );
}

export default Services;