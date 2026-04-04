export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-shell">
          <h1>Contact Us</h1>
          <p>
            Have a question or ready to book? Get in touch or message us directly.
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="contact-shell contact-grid">
          <div className="contact-info">
            <div className="contact-card">
              <h3>Location</h3>
              <p>2 Columbus Road</p>
              <p>Peterborough</p>
              <p>PE2 9FP</p>
            </div>

            <div className="contact-card">
              <h3>Appointments</h3>
              <p>By appointment only.</p>
              <p>Please book in advance or message us before visiting.</p>
            </div>

            <div className="contact-card">
              <h3>Opening Hours</h3>
              <p>Monday – Friday: 9:00 – 18:00</p>
              <p>Saturday: 9:00 – 16:00</p>
              <p>Sunday: Closed</p>
            </div>

            <div className="contact-card">
              <h3>Quick Contact</h3>

              <a
                href="https://wa.me/447477672143"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn whatsapp"
              >
                WhatsApp Us
              </a>

              <a
                href="https://www.fresha.com/book-now/nails-art-by-beni-o1nmt59t/services?lid=845612&share=true&pId=794989"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn book"
              >
                Book Appointment
              </a>
            </div>

            <div className="contact-card">
              <h3>Getting Here</h3>
              <p>Free parking available nearby.</p>
              <p>Bus access from the city centre.</p>
            </div>
          </div>

          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2426.036039297877!2d-0.25007139999999994!3d52.550872999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487831e6cd785f9f%3A0xb82c44ee16ab7012!2sFinesse%20By%20Beni!5e0!3m2!1sen!2suk!4v1775227954566!5m2!1sen!2suk"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}