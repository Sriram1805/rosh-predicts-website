import "./Classes.css";

function Classes() {
  return (
    <main className="classes-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="classes-hero">

        <div className="classes-hero-content">

          <p className="classes-eyebrow">
            CLASSES & WORKSHOPS
          </p>

          <h1>
            Learn the art
            <br />
            of tarot & guidance.
          </h1>

          <p>
            Explore simple, thoughtful learning experiences
            designed for curious minds and aspiring readers.
          </p>

        </div>

        <div className="classes-hero-art" aria-hidden="true">

          <div className="classes-ring classes-ring-one"></div>
          <div className="classes-ring classes-ring-two"></div>

          <div className="classes-orb">
            <span>☾</span>
          </div>

          <span className="classes-star classes-star-one">✦</span>
          <span className="classes-star classes-star-two">✧</span>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="classes-intro">

        <p className="section-label">
          LEARNING EXPERIENCES
        </p>

        <h2>
          Learn at your own pace.
        </h2>

        <p>
          From tarot foundations to deeper intuitive practices,
          each class is created to make learning approachable,
          practical and meaningful.
        </p>

      </section>


      {/* =====================================================
          CLASSES
      ===================================================== */}

      <section className="classes-catalogue">

        <div className="classes-heading">

          <div>
            <p className="section-label">
              AVAILABLE CLASSES
            </p>

            <h2>
              Explore the classes.
            </h2>
          </div>

          <p>
            Choose a learning experience that matches your
            interests and current level.
          </p>

        </div>


        <div className="classes-grid">

          {/* CLASS 01 */}

          <article className="class-card">

            <div className="class-card-art class-art-one">

              <div className="class-art-ring"></div>

              <span>✦</span>

            </div>

            <div className="class-card-content">

              <span className="class-number">
                01
              </span>

              <h3>
                Tarot Foundations
              </h3>

              <p>
                Learn the basics of tarot, understand the
                cards and develop confidence in your readings.
              </p>

              <div className="class-card-footer">
                <span>Beginner</span>
                <a href="/contact">
                  Enquire →
                </a>
              </div>

            </div>

          </article>


          {/* CLASS 02 */}

          <article className="class-card">

            <div className="class-card-art class-art-two">

              <div className="class-art-ring"></div>

              <span>☾</span>

            </div>

            <div className="class-card-content">

              <span className="class-number">
                02
              </span>

              <h3>
                Reading with Intuition
              </h3>

              <p>
                Explore intuitive reading techniques and learn
                how to connect the cards with deeper meaning.
              </p>

              <div className="class-card-footer">
                <span>Intermediate</span>
                <a href="/contact">
                  Enquire →
                </a>
              </div>

            </div>

          </article>


          {/* CLASS 03 */}

          <article className="class-card">

            <div className="class-card-art class-art-three">

              <div className="class-art-ring"></div>

              <span>✧</span>

            </div>

            <div className="class-card-content">

              <span className="class-number">
                03
              </span>

              <h3>
                Tarot & Symbolism
              </h3>

              <p>
                Discover the symbolism behind the cards and
                develop a richer understanding of tarot imagery.
              </p>

              <div className="class-card-footer">
                <span>Intermediate</span>
                <a href="/contact">
                  Enquire →
                </a>
              </div>

            </div>

          </article>


          {/* CLASS 04 */}

          <article className="class-card">

            <div className="class-card-art class-art-four">

              <div className="class-art-ring"></div>

              <span>✦</span>

            </div>

            <div className="class-card-content">

              <span className="class-number">
                04
              </span>

              <h3>
                Personal Tarot Practice
              </h3>

              <p>
                Build a personal reading practice with guided
                exercises, reflection and practical techniques.
              </p>

              <div className="class-card-footer">
                <span>All Levels</span>
                <a href="/contact">
                  Enquire →
                </a>
              </div>

            </div>

          </article>


          {/* CLASS 05 */}

          <article className="class-card">

            <div className="class-card-art class-art-five">

              <div className="class-art-ring"></div>

              <span>☽</span>

            </div>

            <div className="class-card-content">

              <span className="class-number">
                05
              </span>

              <h3>
                Guided Tarot Workshop
              </h3>

              <p>
                A focused workshop for practising spreads,
                interpretation and reading with confidence.
              </p>

              <div className="class-card-footer">
                <span>Workshop</span>
                <a href="/contact">
                  Enquire →
                </a>
              </div>

            </div>

          </article>


          {/* CLASS 06 */}

          <article className="class-card">

            <div className="class-card-art class-art-six">

              <div className="class-art-ring"></div>

              <span>✧</span>

            </div>

            <div className="class-card-content">

              <span className="class-number">
                06
              </span>

              <h3>
                Special Workshops
              </h3>

              <p>
                Seasonal and focused sessions created around
                specific tarot, astrology and spiritual themes.
              </p>

              <div className="class-card-footer">
                <span>Limited Sessions</span>
                <a href="/contact">
                  Enquire →
                </a>
              </div>

            </div>

          </article>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="classes-cta">

        <p className="section-label">
          READY TO LEARN?
        </p>

        <h2>
          Start with curiosity.
        </h2>

        <p>
          Have a question about a class or workshop?
          Get in touch and find the right place to begin.
        </p>

        <a
          href="/contact"
          className="classes-cta-button"
        >
          Get in Touch
          <span>→</span>
        </a>

      </section>

    </main>
  );
}

export default Classes;