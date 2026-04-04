"use client";

import { useState } from "react";

export default function StudioPage() {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpen(open === index ? null : index);
  };

  return (
    <main className="studio-page">
      <div className="studio-shell">
        <section className="studio-hero">
          <p className="studio-eyebrow">Finesse Flow</p>
          <h1>Inside Finesse</h1>
          <p className="studio-hero-text">
            A closer look at our work, our space, and the details behind every
            treatment. You can explore some of our work here, and for our latest
            results and daily updates, visit our social pages.
          </p>

          <div className="studio-socials studio-socials-top">
            <a
              href="https://www.instagram.com/finessebybeni"
              target="_blank"
              rel="noopener noreferrer"
              className="studio-social-btn"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" className="studio-social-icon">
                <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3.5A5.5 5.5 0 1 0 17.5 13 5.5 5.5 0 0 0 12 7.5zm0 2A3.5 3.5 0 1 1 8.5 13 3.5 3.5 0 0 1 12 9.5zm4.75-2.75a1 1 0 1 0 1 1 1 1 0 0 0-1-1z" />
              </svg>
              <span>Instagram</span>
            </a>

            <a
              href="https://www.facebook.com/finessebybeni"
              target="_blank"
              rel="noopener noreferrer"
              className="studio-social-btn"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" className="studio-social-icon">
                <path d="M22 12a10 10 0 1 0-11.5 9.88v-6.99h-2.3V12h2.3V9.8c0-2.27 1.35-3.53 3.42-3.53.99 0 2.03.18 2.03.18v2.23h-1.15c-1.13 0-1.48.7-1.48 1.42V12h2.52l-.4 2.89h-2.12v6.99A10 10 0 0 0 22 12z" />
              </svg>
              <span>Facebook</span>
            </a>

            <a
              href="https://www.tiktok.com/@finessebybeni"
              target="_blank"
              rel="noopener noreferrer"
              className="studio-social-btn"
              aria-label="TikTok"
            >
              <svg viewBox="0 0 24 24" className="studio-social-icon">
                <path d="M16 3a5 5 0 0 0 5 5v3a8 8 0 0 1-5-1.66V16a5 5 0 1 1-5-5c.17 0 .34.01.5.03v3.03A2 2 0 1 0 14 16V3h2z" />
              </svg>
              <span>TikTok</span>
            </a>
          </div>
        </section>

        <section className="studio-grid">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="studio-grid-item">
              <img src={`/studio/grid/${i + 1}.jpg`} alt={`Studio work ${i + 1}`} />
            </div>
          ))}
        </section>

        <section className="studio-articles">
          <div className="studio-article">
            <img src="/studio/articles/article-1.jpg" alt="Gel manicure article" />
            <h3>Gel vs Acrylic — What Actually Matters</h3>
            <p className="studio-sub">
              It’s not about trend. It’s about how your nails look and feel after weeks.
            </p>

            <button onClick={() => toggle(1)}>
              {open === 1 ? "Close" : "Read more"}
            </button>

            {open === 1 && (
              <div className="studio-article-content">
                <p>
                  <strong>Most people don’t ask the right question.</strong> They
                  ask which one looks better. The real question is what happens
                  after 2–3 weeks.
                </p>
                <p>
                  Acrylic can give a strong, solid result, but it often comes
                  with heavy structure, strong smell during application, and
                  aggressive filing. Over time, this can weaken the natural
                  nail, especially if it’s not done properly or removed
                  incorrectly.
                </p>
                <p>
                  <strong>Gel works differently.</strong>
                </p>
                <p>
                  Gel is lighter, more flexible, and closer to your natural
                  nail. It moves slightly with your nail instead of sitting on
                  top like a rigid layer. That’s why it feels more comfortable
                  and looks more natural.
                </p>
                <p>
                  There’s no harsh smell, less aggressive preparation, and the
                  finish is cleaner. But the key is not just the product — it’s
                  how it’s applied.
                </p>
                <p>
                  Done properly, gel allows us to build structure without bulk,
                  keep the nail balanced, and avoid unnecessary damage.
                </p>
                <p>
                  <strong>The result is not just how it looks on day one.</strong>
                </p>
                <p>
                  It’s how it holds, how it grows out, and how your natural nail
                  feels underneath.
                </p>
                <p>
                  That’s why we work only with gel. Not because it’s easier —
                  but because, when done right, it gives a better long-term
                  result.
                </p>
                <p>
                  <strong>This is the Finesse standard.</strong>
                </p>
              </div>
            )}
          </div>

          <div className="studio-article">
            <img src="/studio/articles/article-2.jpg" alt="Beauty treatment article" />
            <h3>Why Beauty Treatments Matter More Than You Think</h3>
            <p className="studio-sub">
              It’s not about “extra”. It’s about how you feel day to day.
            </p>

            <button onClick={() => toggle(2)}>
              {open === 2 ? "Close" : "Read more"}
            </button>

            {open === 2 && (
              <div className="studio-article-content">
                <p>
                  <strong>Most women don’t do beauty treatments for others.</strong>{" "}
                  They do them for themselves — even if they don’t say it like
                  that.
                </p>
                <p>
                  It’s about feeling put together without thinking about it every
                  morning. Brows that sit right. Skin that looks fresh. Small
                  details that change how you carry yourself.
                </p>
                <p>
                  <strong>When things are done properly, they simplify your routine.</strong>
                </p>
                <p>
                  You spend less time fixing, covering, adjusting.
                </p>
                <p>
                  A good brow shape, clean lashes, or proper skin treatment
                  doesn’t just improve appearance — it removes stress from your
                  daily routine. You wake up already feeling more “ready”.
                </p>
                <p>
                  <strong>The problem is inconsistency.</strong>
                </p>
                <p>
                  Different places, different standards, rushed appointments —
                  results change every time.
                </p>
                <p>
                  That’s where people lose trust in beauty treatments.
                </p>
                <p>
                  Our approach is simple: do fewer things, but do them properly.
                  Keep the result clean, consistent, and repeatable.
                </p>
                <p>
                  Because the goal is not just one good visit. It’s knowing
                  you’ll get the same standard every time.
                </p>
                <p>
                  <strong>This is the Finesse standard.</strong>
                </p>
              </div>
            )}
          </div>

          <div className="studio-article">
            <img src="/studio/articles/article-3.jpg" alt="Appointment only article" />
            <h3>Walk-In vs Appointment — What’s the Real Difference?</h3>
            <p className="studio-sub">
              Why the way you book affects the whole experience.
            </p>

            <button onClick={() => toggle(3)}>
              {open === 3 ? "Close" : "Read more"}
            </button>

            {open === 3 && (
              <div className="studio-article-content">
                <p>
                  <strong>Walk-in salons are built for speed.</strong> You arrive,
                  wait your turn, and get the service done as quickly as possible.
                </p>
                <p>
                  For some people, that works. If you need something fast and
                  simple, it can be convenient.
                </p>
                <p>
                  But speed comes with trade-offs.
                </p>
                <p>
                  <strong>Walk-in environments are usually busy and unpredictable.</strong>
                </p>
                <p>
                  There’s often noise, constant movement, and pressure to keep
                  things moving.
                </p>
                <p>
                  Time is limited, and attention is divided. The focus is on
                  getting through the day, not perfecting every detail.
                </p>
                <p>
                  That’s why results can feel inconsistent — one visit is good,
                  the next is not the same.
                </p>
                <p>
                  <strong>Appointment-based salons work differently.</strong>
                </p>
                <p>
                  Your time is reserved. The space is prepared. The focus is
                  only on you.
                </p>
                <p>
                  There is no waiting, no rushing, and no pressure to finish
                  quickly for the next client.
                </p>
                <p>
                  This creates a calmer environment, more attention to detail,
                  and a more consistent result every time.
                </p>
                <p>
                  It’s not just about the treatment. It’s about how you feel
                  while you’re there.
                </p>
                <p>
                  A relaxed space, a steady pace, and full attention change the
                  whole experience — and the final result.
                </p>
                <p>
                  <strong>That’s why we work by appointment only.</strong>
                </p>
                <p>
                  <strong>This is the Finesse standard.</strong>
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="studio-slider-section">
          <div className="studio-slider-title">
            <p className="studio-eyebrow">Recent Moments</p>
            <h2>Real work. Real clients. Real atmosphere.</h2>
          </div>

          <div className="studio-slider">
            <div className="studio-slider-track">
              {Array.from({ length: 15 }).map((_, i) => (
                <div key={i} className="studio-slide">
                  <img src={`/studio/slider/story-${i + 1}.jpg`} alt={`Recent moment ${i + 1}`} />
                </div>
              ))}

              {Array.from({ length: 15 }).map((_, i) => (
                <div key={`copy-${i}`} className="studio-slide">
                  <img src={`/studio/slider/story-${i + 1}.jpg`} alt={`Recent moment ${i + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="studio-bottom">
          <h2>Don’t miss our latest work</h2>
          <p>
            Follow our social pages to keep up with fresh results, recent work,
            and new salon updates.
          </p>

          <div className="studio-socials studio-socials-bottom">
            <a
              href="https://www.instagram.com/finessebybeni"
              target="_blank"
              rel="noopener noreferrer"
              className="studio-social-btn primary"
              aria-label="Follow on Instagram"
            >
              <svg viewBox="0 0 24 24" className="studio-social-icon">
                <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3.5A5.5 5.5 0 1 0 17.5 13 5.5 5.5 0 0 0 12 7.5zm0 2A3.5 3.5 0 1 1 8.5 13 3.5 3.5 0 0 1 12 9.5zm4.75-2.75a1 1 0 1 0 1 1 1 1 0 0 0-1-1z" />
              </svg>
              <span>View on Instagram</span>
            </a>

            <a
              href="https://www.facebook.com/finessebybeni"
              target="_blank"
              rel="noopener noreferrer"
              className="studio-social-btn"
              aria-label="Follow on Facebook"
            >
              <svg viewBox="0 0 24 24" className="studio-social-icon">
                <path d="M22 12a10 10 0 1 0-11.5 9.88v-6.99h-2.3V12h2.3V9.8c0-2.27 1.35-3.53 3.42-3.53.99 0 2.03.18 2.03.18v2.23h-1.15c-1.13 0-1.48.7-1.48 1.42V12h2.52l-.4 2.89h-2.12v6.99A10 10 0 0 0 22 12z" />
              </svg>
              <span>Follow on Facebook</span>
            </a>

            <a
              href="https://www.tiktok.com/@finessebybeni"
              target="_blank"
              rel="noopener noreferrer"
              className="studio-social-btn"
              aria-label="Watch on TikTok"
            >
              <svg viewBox="0 0 24 24" className="studio-social-icon">
                <path d="M16 3a5 5 0 0 0 5 5v3a8 8 0 0 1-5-1.66V16a5 5 0 1 1-5-5c.17 0 .34.01.5.03v3.03A2 2 0 1 0 14 16V3h2z" />
              </svg>
              <span>Watch on TikTok</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}