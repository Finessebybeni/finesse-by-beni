export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <div className="footer-top">
          <div className="footer-brand">
            <h3>Finesse by Beni</h3>
            <p>
              Luxury beauty services crafted with care, precision, and attention
              to detail.
            </p>
          </div>

          <div className="footer-links">
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/studio">Studio</a>
            <a href="/contact">Contact</a>
          </div>

          <div className="footer-booking">
            <a
              href="https://www.fresha.com/book-now/nails-art-by-beni-o1nmt59t/services?lid=845612&share=true&pId=794989"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-book-btn"
            >
              Book Now
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© Finesse by Beni 2026</p>
          <div className="footer-policies">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms</a>
            <a href="/cookies">Cookies</a>
          </div>
          <p>Designed by Sev</p>
        </div>
      </div>
    </footer>
  );
}