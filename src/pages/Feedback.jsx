import "./Feedback.css";

function Feedback() {
  return (
    <main className="feedback-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="feedback-hero">

        <div className="feedback-hero-content">

          <p className="feedback-eyebrow">
            FEEDBACK
          </p>

          <h1>
            Words from
            <br />
            the community.
          </h1>

          <p>
            A collection of thoughts and experiences shared
            by people who have explored the space with us.
          </p>

        </div>

        <div className="feedback-hero-art" aria-hidden="true">

          <div className="feedback-ring feedback-ring-one"></div>
          <div className="feedback-ring feedback-ring-two"></div>

          <div className="feedback-orb">
            <span>✦</span>
          </div>

          <span className="feedback-star feedback-star-one">
            ✦
          </span>

          <span className="feedback-star feedback-star-two">
            ✧
          </span>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="feedback-intro">

        <p className="section-label">
          SHARED EXPERIENCES
        </p>

        <h2>
          Every experience is personal.
        </h2>

        <p>
          Read what members of the community have shared
          about their readings, learning experiences and
          time with Rosh Predicts.
        </p>

      </section>


      {/* =====================================================
          READING FEEDBACK
      ===================================================== */}

      <section className="feedback-category">

        <div className="feedback-category-heading">

          <div>
            <p className="section-label">
              01 · READINGS
            </p>

            <h2>
              Reading Feedback
            </h2>
          </div>

          <p>
            Reflections from people who have experienced
            tarot, astrology and personal guidance sessions.
          </p>

        </div>


        <div className="feedback-grid">

          <article className="feedback-card">

            <span className="feedback-quote">
              “
            </span>

            <p>
              The session gave me a new perspective and
              helped me look at my situation with more
              clarity.
            </p>

            <span className="feedback-author">
              — Reading Feedback
            </span>

          </article>


          <article className="feedback-card">

            <span className="feedback-quote">
              “
            </span>

            <p>
              The reading felt thoughtful and easy to
              understand. I appreciated the calm and
              personal approach.
            </p>

            <span className="feedback-author">
              — Reading Feedback
            </span>

          </article>


          <article className="feedback-card">

            <span className="feedback-quote">
              “
            </span>

            <p>
              A meaningful experience that encouraged me
              to pause, reflect and think differently.
            </p>

            <span className="feedback-author">
              — Reading Feedback
            </span>

          </article>

        </div>

      </section>


      {/* =====================================================
          STUDENT FEEDBACK
      ===================================================== */}

      <section className="feedback-category student-feedback">

        <div className="feedback-category-heading">

          <div>
            <p className="section-label">
              02 · LEARNING
            </p>

            <h2>
              Student Feedback
            </h2>
          </div>

          <p>
            Thoughts from learners who have taken part in
            tarot classes and guided learning experiences.
          </p>

        </div>


        <div className="feedback-grid">

          <article className="feedback-card">

            <span className="feedback-quote">
              “
            </span>

            <p>
              The classes made tarot feel approachable and
              gave me a good foundation to continue learning.
            </p>

            <span className="feedback-author">
              — Student Feedback
            </span>

          </article>


          <article className="feedback-card">

            <span className="feedback-quote">
              “
            </span>

            <p>
              I enjoyed learning at my own pace and
              understanding the meaning behind the cards.
            </p>

            <span className="feedback-author">
              — Student Feedback
            </span>

          </article>


          <article className="feedback-card">

            <span className="feedback-quote">
              “
            </span>

            <p>
              The sessions were clear, engaging and gave me
              more confidence in practising readings.
            </p>

            <span className="feedback-author">
              — Student Feedback
            </span>

          </article>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="feedback-cta">

        <p className="section-label">
          YOUR EXPERIENCE MATTERS
        </p>

        <h2>
          Have something
          <br />
          to share?
        </h2>

        <p>
          We'd love to hear about your experience and
          welcome your thoughts to the community.
        </p>

        <a
          href="/contact"
          className="feedback-cta-button"
        >
          Share Your Feedback
          <span>→</span>
        </a>

      </section>

    </main>
  );
}

export default Feedback;