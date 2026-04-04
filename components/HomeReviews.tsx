"use client";
import { useState, useEffect } from "react";

const reviews = [
  {
    name: "Finola M",
    text: "I have been coming to Beni for over a year now and I wouldn’t go to anyone else. Her attention to detail is second to none.",
    source: "Google",
  },
  {
    name: "Kate B",
    text: "Warm, welcoming and her selection of colours are plentiful. My nails always last with no lifting or breaking.",
    source: "Google",
  },
  {
    name: "Chantal M",
    text: "A beautiful salon, lovely service, and stunning nails. Beni’s work is really fabulous.",
    source: "Google",
  },
  {
    name: "Lucy O",
    text: "My nails always look amazing and everything is painted by hand. Highly recommend.",
    source: "Google",
  },
  {
    name: "Andreea D",
    text: "Had a facial today and I’m honestly obsessed. My skin feels so clean and glowing already.",
    source: "Fresha",
  },
  {
    name: "Sam F",
    text: "Friendly and knowledgeable. The salon is clean and offers a relaxing space.",
    source: "Fresha",
  },
];

export default function HomeReviews() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const visibleReviews = [
    reviews[index],
    reviews[(index + 1) % reviews.length],
    reviews[(index + 2) % reviews.length],
  ];

  return (
    <section className="testimonials-section">
      <div className="section-heading">
        <h2>What Our Clients Say</h2>
        <p>
          Professional service, a warm atmosphere, and results that speak for themselves.
        </p>
      </div>

      <div className="reviews-slider">
        <div className="reviews-grid">
          {visibleReviews.map((review, i) => (
            <div key={i} className="testimonial-card testimonial-card-live">
              <div className="stars">★★★★★</div>
              <p>{review.text}</p>
              <div className="review-meta">
                <strong>{review.name}</strong>
                <span>{review.source}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="reviews-dots">
          {reviews.map((_, i) => (
            <button
              key={i}
              className={`reviews-dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}