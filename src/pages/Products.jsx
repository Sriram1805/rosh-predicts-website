import { Link } from "react-router-dom";
import "./Products.css";

function Products() {
  return (
    <main className="products-page">

      {/* Hero */}
      <section className="products-hero">
        <div className="products-hero-content">
          <p className="products-eyebrow">ROSH PREDICTS SHOP</p>

          <h1>
            Little things
            <br />
            for your journey.
          </h1>

          <p>
            Explore products created to complement your tarot,
            astrology and spiritual learning journey.
          </p>
        </div>

        <div className="products-hero-art" aria-hidden="true">
          <div className="products-glow"></div>
          <div className="products-ring products-ring-one"></div>
          <div className="products-ring products-ring-two"></div>

          <div className="products-orb">
            <span>✦</span>
          </div>

          <span className="products-star products-star-one">✧</span>
          <span className="products-star products-star-two">✦</span>
        </div>
      </section>

      {/* Products */}
      <section className="products-section">

        <div className="products-heading">
          <p className="section-label">EXPLORE PRODUCTS</p>

          <h2>
            Find something
            <br />
            that speaks to you.
          </h2>

          <p>
            Browse the available products below. More products can be
            added as the collection grows.
          </p>
        </div>

        <div className="products-grid">

          {/* Product 1 */}
          <article className="product-card">
            <div className="product-image product-image-blue">
              <span>☾</span>
            </div>

            <div className="product-card-content">
              <p className="product-category">TAROT</p>

              <h3>Tarot Journal</h3>

              <p>
                A simple space to record your tarot readings,
                thoughts and reflections.
              </p>

              <div className="product-bottom">
                <span className="product-price">₹ Price</span>

                <Link to="/contact" className="product-button">
                  Enquire <span>→</span>
                </Link>
              </div>
            </div>
          </article>

          {/* Product 2 */}
          <article className="product-card">
            <div className="product-image product-image-rose">
              <span>✦</span>
            </div>

            <div className="product-card-content">
              <p className="product-category">SPIRITUAL</p>

              <h3>Guidance Cards</h3>

              <p>
                A thoughtfully designed card collection for
                reflection and everyday guidance.
              </p>

              <div className="product-bottom">
                <span className="product-price">₹ Price</span>

                <Link to="/contact" className="product-button">
                  Enquire <span>→</span>
                </Link>
              </div>
            </div>
          </article>

          {/* Product 3 */}
          <article className="product-card">
            <div className="product-image product-image-yellow">
              <span>✧</span>
            </div>

            <div className="product-card-content">
              <p className="product-category">ASTROLOGY</p>

              <h3>Astrology Workbook</h3>

              <p>
                A practical workbook for exploring astrology concepts,
                charts and personal observations.
              </p>

              <div className="product-bottom">
                <span className="product-price">₹ Price</span>

                <Link to="/contact" className="product-button">
                  Enquire <span>→</span>
                </Link>
              </div>
            </div>
          </article>

          {/* Product 4 */}
          <article className="product-card">
            <div className="product-image product-image-mauve">
              <span>☽</span>
            </div>

            <div className="product-card-content">
              <p className="product-category">LEARNING</p>

              <h3>Learning Kit</h3>

              <p>
                A curated collection of learning resources for
                anyone beginning their spiritual journey.
              </p>

              <div className="product-bottom">
                <span className="product-price">₹ Price</span>

                <Link to="/contact" className="product-button">
                  Enquire <span>→</span>
                </Link>
              </div>
            </div>
          </article>

        </div>
      </section>

      {/* How it works */}
      <section className="products-process">

        <div className="products-process-heading">
          <p className="section-label">HOW IT WORKS</p>

          <h2>
            Choose.
            <br />
            Connect.
            <br />
            Receive.
          </h2>
        </div>

        <div className="products-process-steps">

          <div className="process-step">
            <span>01</span>
            <h3>Choose a product</h3>
            <p>
              Browse the available products and select what
              interests you.
            </p>
          </div>

          <div className="process-step">
            <span>02</span>
            <h3>Contact us</h3>
            <p>
              Send an enquiry through WhatsApp to check availability
              and details.
            </p>
          </div>

          <div className="process-step">
            <span>03</span>
            <h3>Complete your order</h3>
            <p>
              Payment and delivery details can be confirmed directly
              before your order is completed.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="products-cta">
        <p className="section-label">HAVE A QUESTION?</p>

        <h2>
          Not sure what
          <br />
          to choose?
        </h2>

        <p>
          Send us a message and we'll be happy to help you
          explore the available options.
        </p>

        <Link to="/contact" className="products-cta-button">
          Contact on WhatsApp <span>→</span>
        </Link>
      </section>

    </main>
  );
}

export default Products;