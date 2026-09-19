import "./FloatingSocials.css";

function FloatingSocials() {
  return (
    <div className="floating-socials">

      {/* Instagram */}
      <a
        href="https://www.instagram.com/rosh_predicts?stkn=MWd2ZWZ4YjM2d2VlTNA="
        className="floating-social instagram"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        title="Instagram"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="5"
          />

          <circle
            cx="12"
            cy="12"
            r="4"
          />

          <circle
            cx="17.5"
            cy="6.5"
            r="1"
            className="instagram-dot"
          />
        </svg>
      </a>


      {/* YouTube */}
      <a
        href="https://www.youtube.com/@rosh_predicts"
        className="floating-social youtube"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
        title="YouTube"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            d="M21.6 7.2a2.8 2.8 0 0 0-2-2C17.8 4.7 12 4.7 12 4.7s-5.8 0-7.6.5a2.8 2.8 0 0 0-2 2C2 9 2 12 2 12s0 3 .4 4.8a2.8 2.8 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.8 2.8 0 0 0 2-2C22 15 22 12 22 12s0-3-.4-4.8Z"
          />

          <path
            d="m10 9 5 3-5 3V9Z"
            className="youtube-play"
          />
        </svg>
      </a>


      {/* WhatsApp */}
      <a
        href="#"
        className="floating-social whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        title="WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.5 4.1 1.5 5.9L.2 24l6.5-1.7c1.7.9 3.5 1.3 5.4 1.3h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.1-1.2-6.1-3.5-8.3ZM12.1 21.6c-1.7 0-3.4-.5-4.9-1.3l-.4-.2-3.8 1 1-3.7-.2-.4a9.8 9.8 0 1 1 8.3 4.6Zm5.4-7.4c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.3-.6.1-1.6-.8-2.7-1.5-3.8-3.3-.3-.5.3-.5.8-1.6.1-.2.1-.4 0-.6-.1-.2-.7-1.7-.9-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1-1.1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.3 5.1 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.3-.6-.4Z"
          />
        </svg>
      </a>

    </div>
  );
}

export default FloatingSocials;