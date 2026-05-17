export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-shell">
          <div className="about-hero-content">
            <p className="about-eyebrow">About Finesse by Beni</p>
            <h1>Built on Passion. Refined Through Experience.</h1>
            <p className="about-hero-text">
              Finesse by Beni is a beauty space built around care, precision,
              and a personal approach to every client. From a small home studio
              to a growing salon in Peterborough, everything we do is focused on
              quality, comfort, and results that last.
            </p>
            <p className="about-hero-proof">
              Over <strong>5,000 treatments delivered in the past 3 years</strong>,
              with a strong base of loyal returning clients.
            </p>

            <div className="about-hero-actions">
              <a href="/services" className="about-primary-btn">
                Explore Our Services
              </a>
              <a href="/contact" className="about-secondary-btn">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="about-story-section">
        <div className="about-shell">
          <div className="about-section-heading">
            <p className="about-eyebrow">Our Story</p>
            <h2>A journey shaped by care, growth, and real client trust</h2>
          </div>

          <div className="about-story-grid">
            <div className="about-story-text">
              <p>
                Years ago, Beni built her first experience in the beauty
                industry in Bulgaria, working in a small salon focused on skill,
                creativity, and care.
              </p>

              <p>
                After moving to the UK in 2014, life took her in a different
                direction for a while. But after becoming a mum, she made the
                decision to return to her true passion — nail artistry.
              </p>

              <p>
                Starting from home, she rebuilt everything step by step. During
                the lockdown years, while many things paused, she used that time
                to complete advanced courses, refine her techniques, and raise
                her standards even further.
              </p>

              <p>
                As life reopened, so did new opportunities. Word of mouth spread
                quickly. Loyal clients kept returning, new ones followed, and
                what began as a home-based setup grew into a trusted name in
                Peterborough.
              </p>

              <p>
                In 2024, Beni was awarded{" "}
                <strong>Best Nail Salon in Cambridgeshire</strong> at the
                England Business Awards. Today, that journey has evolved into{" "}
                <strong>Finesse by Beni</strong> — a brand built not only on
                beautiful results, but on trust, consistency, and the kind of
                experience clients genuinely enjoy returning to.
              </p>
            </div>

            <div className="about-story-visual">
              <div className="about-image-card about-image-large">
                <div className="about-image-inner">
                  <img src="/about/about-story-main.jpg" alt="Finesse by Beni salon story" />
                </div>
              </div>

              <div className="about-image-row">
                <div className="about-image-card">
                  <div className="about-image-inner">
                    <img src="/about/about-award.jpg" alt="Award and recognition" />
                  </div>
                </div>

                <div className="about-image-card">
                  <div className="about-image-inner">
                    <img src="/about/about-story-work.jpg" alt="Work in progress at Finesse by Beni" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-founder-section">
        <div className="about-shell">
          <div className="about-section-heading">
            <p className="about-eyebrow">Meet Beni</p>
            <h2>The heart behind the brand</h2>
          </div>

          <div className="about-founder-grid">
            <div className="about-founder-gallery">
              <div className="about-image-card about-founder-main">
                <div className="about-image-inner">
                  <img src="/about/beni-portrait.jpg" alt="Beni portrait" />
                </div>
              </div>

              <div className="about-image-row">
                <div className="about-image-card">
                  <div className="about-image-inner">
                    <img src="/about/beni-work-1.jpg" alt="Beni at work" />
                  </div>
                </div>

                <div className="about-image-card">
                  <div className="about-image-inner">
                    <img src="/about/beni-work-2.jpg" alt="Beni nail detail work" />
                  </div>
                </div>
              </div>
            </div>

            <div className="about-founder-text">
              <p className="about-role">Nail Technician • 13+ Years Experience</p>

              <p>
                Beni is the foundation of everything behind Finesse by Beni.
                Her work is known for its precision, creativity, and attention
                to detail. Every set is approached individually, with a focus on
                clean finish, balance, and long-lasting results.
              </p>

              <p>
                She works exclusively with <strong>gel products</strong> — never
                acrylic. The reason is simple: gel is kinder to the natural nail,
                lighter to wear, free from harsh smells, and allows for a more
                refined result without the aggressive finish often associated
                with acrylic systems.
              </p>

              <p>
                Her approach is just as important as the products she uses:
                no rushing, no shortcuts, and no compromise on quality.
                Every appointment is designed to feel calm, personal, and done
                properly from start to finish.
              </p>

              <ul className="about-points">
                <li>Creative, detail-focused nail artistry</li>
                <li>Gel-only approach for a cleaner, kinder finish</li>
                <li>Built on consistency, trust, and personal client care</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="about-team-section">
        <div className="about-shell">
          <div className="about-section-heading">
            <p className="about-eyebrow">Meet the Team</p>
            <h2>Growing with the same standards clients already trust</h2>
          </div>

          <div className="about-team-grid">
            <article className="about-team-card">
              <div className="about-image-card about-team-portrait">
                <div className="about-image-inner">
                  <img src="/about/team-beni.jpg" alt="Beni team portrait" />
                </div>
              </div>

              <div className="about-team-content">
                <h3>Beni</h3>
                <p className="about-role">Founder • Manicure/Pedicure Expert</p>
                <p>
                  With a passion for nail artistry since 2013, Albena has built a trusted reputation as an experienced nail expert, specialising in luxury manicures and pedicures. Known for her gentle touch, exceptional precision, artistic creativity, and natural eye for beauty, she takes pride in creating elegant, highly detailed designs that reflect both skill and individuality while delivering a premium, personalised experience.
                </p>
              </div>
            </article>

            <article className="about-team-card">
              <div className="about-image-card about-team-portrait">
                <div className="about-image-inner">
                  <img src="/about/team-lucy.jpg" alt="Britney team portrait" />
                </div>
              </div>

              <div className="about-team-content">
                <h3>Lucy</h3>
                <p className="about-role">Beauty Therapist</p>
                <p>
                  Lucy brings over three years of professional beauty and spa experience, combining advanced treatment skills with a calm, client-focused approach. Her expertise, attention to detail, and passion for delivering high-quality care support the continued growth of the salon’s beauty services.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="about-growth-section">
        <div className="about-shell">
          <div className="about-growth-box">
            <div>
              <p className="about-eyebrow">Why We Expanded</p>
              <h2>
                Growth was never about doing more. It was about doing more — the
                right way.
              </h2>
            </div>

            <div className="about-growth-text">
              <p>
                Finesse by Beni did not grow by chasing trends. It grew because
                clients kept returning — and asking for more.
              </p>

              <p>
                Over time, we listened carefully to the treatments clients loved,
                the services they were going elsewhere for, and the kind of
                beauty experience they wanted under one roof.
              </p>

              <p>
                Expansion allowed us to bring those services in through the same
                Finesse standards: attention to detail, high-quality products,
                appointment-based care, and the personal style our clients
                already trust.
              </p>

              <p className="about-growth-note">
                By appointment only. No walk-ins. No rushed turnover. Just focused,
                quality-led care.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-proof-section">
        <div className="about-shell">
          <div className="about-section-heading">
            <p className="about-eyebrow">Trusted by Clients</p>
            <h2>Built through real work, word of mouth, and consistent standards</h2>
          </div>

          <div className="about-proof-grid">
            <div className="about-proof-card">
              <strong>5,000+</strong>
              <span>Treatments — Last 3 Years</span>
            </div>

            <div className="about-proof-card">
              <strong>2024</strong>
              <span>Best Nail Salon — Cambridgeshire</span>
            </div>

            <div className="about-proof-card">
              <strong>93%+</strong>
              <span>Occupancy Rate</span>
            </div>

            <div className="about-proof-card">
              <strong>97%</strong>
              <span>Returning Clients</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta-section">
        <div className="about-shell">
          <div className="about-cta-box">
            <h2>Ready to experience it yourself?</h2>
            <p>
              Explore our services and discover the treatments behind the
              Finesse by Beni experience.
            </p>

            <div className="about-hero-actions">
              <a href="/services" className="about-primary-btn">
                View Services
              </a>
              <a href="/contact" className="about-secondary-btn">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}