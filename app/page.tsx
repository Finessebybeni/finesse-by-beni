"use client";
import HomeReviews from "@/components/HomeReviews";
export default function Home() {
  return (
    <main className="home-page">
      <div className="page-shell">
        <section className="hero-card">
          <div className="hero">
            <div className="hero-content">
              <h1>From Passion to Perfection</h1>

<p>
  Luxury nails and beauty treatments with care, precision, and style.
</p>

<ul style={{ marginTop: "10px", fontSize: "15px", opacity: 0.9 }}>
  <li>⭐ 5★ Rated in Peterborough</li>
  <li>📍 Easy parking available</li>
  <li>🕒 Appointment only – calm & private</li>
</ul>

<a
  href="https://www.fresha.com/book-now/nails-art-by-beni-o1nmt59t/services?lid=845612&share=true&pId=794989"
  target="_blank"
  rel="noopener noreferrer"
  className="hero-button"
  onClick={() => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Contact");
    }
  }}
>
  Check Availability Today
</a>
            </div>
          </div>
        </section>

        <section className="brand-strip-wrap">
          <div className="brand-strip">
            <div className="brand-track">
              <div className="brand-box"><img src="/brands/logo1.png" alt="Brand logo 1" /></div>
              <div className="brand-box"><img src="/brands/logo2.png" alt="Brand logo 2" /></div>
              <div className="brand-box"><img src="/brands/logo3.png" alt="Brand logo 3" /></div>
              <div className="brand-box"><img src="/brands/logo4.png" alt="Brand logo 4" /></div>
              <div className="brand-box"><img src="/brands/logo5.png" alt="Brand logo 5" /></div>
              <div className="brand-box"><img src="/brands/logo6.png" alt="Brand logo 6" /></div>
              <div className="brand-box"><img src="/brands/logo7.png" alt="Brand logo 7" /></div>
              <div className="brand-box"><img src="/brands/logo8.png" alt="Brand logo 8" /></div>
              <div className="brand-box"><img src="/brands/logo9.png" alt="Brand logo 9" /></div>

              <div className="brand-box"><img src="/brands/logo1.png" alt="Brand logo 1" /></div>
              <div className="brand-box"><img src="/brands/logo2.png" alt="Brand logo 2" /></div>
              <div className="brand-box"><img src="/brands/logo3.png" alt="Brand logo 3" /></div>
              <div className="brand-box"><img src="/brands/logo4.png" alt="Brand logo 4" /></div>
              <div className="brand-box"><img src="/brands/logo5.png" alt="Brand logo 5" /></div>
              <div className="brand-box"><img src="/brands/logo6.png" alt="Brand logo 6" /></div>
              <div className="brand-box"><img src="/brands/logo7.png" alt="Brand logo 7" /></div>
              <div className="brand-box"><img src="/brands/logo8.png" alt="Brand logo 8" /></div>
              <div className="brand-box"><img src="/brands/logo9.png" alt="Brand logo 9" /></div>
            </div>
          </div>
        </section>

        <section className="intro-section">
          <p>
            Thank you for taking the time to visit our online space. We’ve created
            this as a place where you can explore our work, get a feel for what we
            do, and find something that feels right for you.
          </p>

          <p>
            Every client is different, and if you’re looking for something more
            specific, you’re always welcome to get in touch — we’ll be happy to
            guide you and help you choose what suits you best.
          </p>

          <p>
            At Finesse by Beni, we focus on enhancing natural beauty through
            precision, care, and attention to detail. From nails and brows to
            lashes and skin treatments, every service is tailored to you — your
            features, your style, and the result you want to achieve.
          </p>

          <p className="intro-signoff">
            Take your time, have a look around, and enjoy the experience.
            <br />
            <span>Your time. Your space. Your finesse.</span>
          </p>
        </section>
        <section className="why-choose-us">
  <h2>Why clients choose us</h2>
  <div className="why-grid">
    <div className="why-card">
      <h3>Premium products</h3>
      <p>We use trusted professional products for quality, comfort and lasting results.</p>
    </div>

    <div className="why-card">
      <h3>Calm appointments</h3>
      <p>Enjoy a more private, relaxed experience without the rushed salon feeling.</p>
    </div>

    <div className="why-card">
      <h3>Personal care</h3>
      <p>Each treatment is tailored to suit your features, style and individual needs.</p>
    </div>

    <div className="why-card">
      <h3>Loyal clients</h3>
      <p>Many of our clients return regularly because they value consistency, care and trust.</p>
    </div>
  </div>
</section>

        <section className="services-preview">
          <div className="section-heading">
            <h2>Featured Services</h2>
            <p>A closer look at some of the treatments our clients love most.</p>
          </div>

          <div className="services-grid">
            <article className="service-card">
              <div className="service-image service-image-1"></div>
              <div className="service-card-body">
                <h3>Nails</h3>
                <p className="service-short">
                  Elegant finishes tailored to your style.
                </p>
                <p className="service-text">
                  From fresh sets to refined maintenance, every appointment is
                  focused on detail, balance, and a result that feels polished and
                  lasting.
                </p>
                <a href="/services#nails" className="service-btn">
                  View Service
                </a>
              </div>
            </article>

            <article className="service-card">
              <div className="service-image service-image-2"></div>
              <div className="service-card-body">
                <h3>Brows &amp; Lashes</h3>
                <p className="service-short">
                  Soft definition with natural-looking results.
                </p>
                <p className="service-text">
                  Treatments designed to frame your features beautifully while
                  keeping the look balanced, flattering, and true to you.
                </p>
                <a href="/services#brows-lashes" className="service-btn">
                  View Service
                </a>
              </div>
            </article>

            <article className="service-card">
              <div className="service-image service-image-3"></div>
              <div className="service-card-body">
                <h3>Beauty Treatments</h3>
                <p className="service-short">
                  Precision, care, and confidence in every detail.
                </p>
                <p className="service-text">
                  Thoughtfully delivered treatments created to enhance your natural
                  beauty in a calm, refined, and welcoming environment.
                </p>
                <a href="/services#facials" className="service-btn">
                  View Service
                </a>
              </div>
            </article>
          </div>
        </section>

  <HomeReviews />

        <section className="social-section">
          <div className="section-heading">
            <h2>See More of Our Work</h2>
            <p>
              Follow Finesse by Beni for recent work, updates, and moments from the
              salon.
            </p>
          </div>

          <div className="social-links">
            <a
              href="https://www.instagram.com/finessebybeni"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" className="social-svg">
  <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3.5A5.5 5.5 0 1 0 17.5 13 5.5 5.5 0 0 0 12 7.5zm0 2A3.5 3.5 0 1 1 8.5 13 3.5 3.5 0 0 1 12 9.5zm4.75-2.75a1 1 0 1 0 1 1 1 1 0 0 0-1-1z"/>
</svg>
            </a>

            <a
              href="https://www.facebook.com/finessebybeni"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" className="social-svg">
  <path d="M22 12a10 10 0 1 0-11.5 9.88v-6.99h-2.3V12h2.3V9.8c0-2.27 1.35-3.53 3.42-3.53.99 0 2.03.18 2.03.18v2.23h-1.15c-1.13 0-1.48.7-1.48 1.42V12h2.52l-.4 2.89h-2.12v6.99A10 10 0 0 0 22 12z"/>
</svg>
            </a>

            <a
              href="https://www.tiktok.com/@finessebybeni"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
              aria-label="TikTok"
            >
              <svg viewBox="0 0 24 24" className="social-svg">
  <path d="M16 3a5 5 0 0 0 5 5v3a8 8 0 0 1-5-1.66V16a5 5 0 1 1-5-5c.17 0 .34.01.5.03v3.03A2 2 0 1 0 14 16V3h2z"/>
</svg>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}