"use client";

import { useState } from "react";
import styles from "./services.module.css";

type ServiceItem = {
  id: string;
  name: string;
  short: string;
  details: string;
  link: string;
  icon: string;
  price?: string;
};

type Category = {
  id: string;
  title: string;
  intro: string;
  image: string;
  services: ServiceItem[];
};

type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

const categories: Category[] = [
  {
    id: "nails",
    title: "Nails & Pedicure",
    intro:
      "From polished everyday finishes to sculpted sets and pedicure care, this category brings together treatments designed to keep hands and feet looking refined, neat, and beautifully maintained.",
    image: "/services/nails-pedicure-banner.jpg",
    services: [
      {
        id: "gel-polish-hands",
        name: "Gel Nail Polish Hands",
        short: "Classic gel finish with shaping, cuticle care, and colour.",
        details:
          "This service includes nail filing and shaping, cuticle care, and gel polish application in the colour of your choice, finished with simple salon-style nail art.",
        link: "https://www.fresha.com/book-now/nails-art-by-beni-o1nmt59t/services?lid=845612&eid=2155610&oiid=sv%3A11920013&share=true&pId=794989",
        icon: "/service-icons/gel-nail-polish-hands.png",
        price: "£35",
      },
      {
        id: "infill-gel-polish",
        name: "Infill Gel Polish",
        short: "Refresh grown-out gel polish with a clean, polished finish.",
        details:
          "Begins with removal of existing polish, followed by filing, shaping, cuticle treatment, and fresh gel polish with nail art.",
        link: "https://www.fresha.com/book-now/nails-art-by-beni-o1nmt59t/services?lid=845612&eid=2155610&oiid=sv%3A11920016&share=true&pId=794989",
        icon: "/service-icons/infill-gel-polish.png",
        price: "£35",
      },
      {
        id: "gel-overlays",
        name: "Gel Overlays",
        short: "A strengthening layer applied directly to the natural nail.",
        details:
          "This overlay service skips extensions and enhances durability on the natural nail, including shaping, cuticle care, and gel polish with simple nail art.",
        link: "https://www.fresha.com/book-now/nails-art-by-beni-o1nmt59t/services?lid=845612&eid=2155610&oiid=sv%3A11920012&share=true&pId=794989",
        icon: "/service-icons/gel-overlays.png",
        price: "£40",
      },
      {
        id: "hard-gel-extensions",
        name: "Hard Gel Sculpture / Extensions",
        short: "Sculpted gel extensions built for strength, shine, and length.",
        details:
          "Uses sculpted gel with forms to extend the natural nail without tips, then finished with shaping, cuticle care, and your chosen gel colour and nail art.",
        link: "https://www.fresha.com/book-now/nails-art-by-beni-o1nmt59t/services?lid=845612&eid=2155610&oiid=sv%3A11933138&share=true&pId=794989",
        icon: "/service-icons/hard-gel-sculpture-extensions.png",
        price: "£50",
      },
      {
        id: "infills-nail-extensions",
        name: "Infills Nail Extensions",
        short: "Maintenance treatment to restore extensions after regrowth.",
        details:
          "The re-growth area is rebalanced and refined so the nails look fresh again, then finished with gel polish and nail art.",
        link: "https://www.fresha.com/book-now/nails-art-by-beni-o1nmt59t/services?lid=845612&eid=2155610&oiid=sv%3A11920014&share=true&pId=794989",
        icon: "/service-icons/infills-nail-extensions.png",
        price: "£40",
      },
      {
        id: "gel-polish-removal",
        name: "Gel Nail Polish Removal",
        short: "Safe gel removal with tidy finishing and cuticle care.",
        details:
          "Safe gel removal using an electric nail drill, followed by nail filing to your desired length and gentle cuticle care.",
        link: "https://www.fresha.com/book-now/nails-art-by-beni-o1nmt59t/services?lid=845612&eid=2155610&oiid=sv%3A11933243&share=true&pId=794989",
        icon: "/service-icons/gel-nail-polish-removal.png",
        price: "£15",
      },
      {
        id: "hard-gel-removal",
        name: "Removal Hard Gel / Acrylic Nails",
        short: "Professional removal with shaping and cuticle treatment.",
        details:
          "Removal of hard gel or acrylic using an electric nail drill, followed by nail filing and cuticle treatment.",
        link: "https://www.fresha.com/book-now/nails-art-by-beni-o1nmt59t/services?lid=845612&eid=2155610&oiid=sv%3A11933257&share=true&pId=794989",
        icon: "/service-icons/removal-hard-gel-acrylic-nails.png",
        price: "£15",
      },
      {
        id: "nail-repair",
        name: "Nail Repair",
        short: "Repair for a broken or damaged nail between appointments.",
        details:
          "If a nail is broken or needs repair and it has been a week or longer since your last nail appointment, it can be repaired and restored neatly.",
        link: "https://www.fresha.com/book-now/nails-art-by-beni-o1nmt59t/services?lid=845612&eid=2155610&oiid=sv%3A11933276&share=true&pId=794989",
        icon: "/service-icons/nail-repair.png",
        price: "£3",
      },
      {
        id: "express-pedicure",
        name: "Express Pedicure",
        short: "Quick tidy-up with gel colour and a polished finish.",
        details:
          "Includes nail filing and shaping, cuticle care, and gel polish application in your chosen colour with simple salon-style nail art.",
        link: "https://www.fresha.com/book-now/nails-art-by-beni-o1nmt59t/services?lid=845612&eid=2155610&oiid=sv%3A11920015&share=true&pId=794989",
        icon: "/service-icons/express-pedicure.png",
        price: "£20",
      },
      {
        id: "classic-pedicure",
        name: "Classic Pedicure",
        short: "A well-rounded pedicure with soak, care, massage, and gel finish.",
        details:
          "Includes foot soaking, exfoliation, nail and cuticle work, massage, moisturising, and finishing with gel polish.",
        link: "https://www.fresha.com/book-now/nails-art-by-beni-o1nmt59t/services?lid=845612&eid=5161617&oiid=sv%3A26834569&share=true&pId=794989",
        icon: "/service-icons/classic-pedicure.png",
        price: "£45",
      },
      {
        id: "luxury-spa-pedicure",
        name: "Luxury Spa Pedicure",
        short: "A more indulgent pedicure with extra relaxation and care.",
        details:
          "A relaxing spa pedicure including soak, exfoliation, nail and cuticle work, foot and leg massage, paraffin wax with heated mitts, and gel polish.",
        link: "https://www.fresha.com/book-now/nails-art-by-beni-o1nmt59t/services?lid=845612&eid=5161617&oiid=sv%3A26834586&share=true&pId=794989",
        icon: "/service-icons/luxury-spa-pedicure.png",
        price: "£55",
      },
      {
        id: "callus-softening-pedicure",
        name: "Callus Softening Pedicure",
        short: "Specialised treatment for hard skin with pedicure care included.",
        details:
          "Designed to soften and remove hard skin using a specialised peel softener, combined with a classic pedicure treatment.",
        link: "https://www.fresha.com/book-now/nails-art-by-beni-o1nmt59t/services?lid=845612&eid=5161617&oiid=sv%3A26834625&share=true&pId=794989",
        icon: "/service-icons/callus-softening-pedicure.png",
        price: "£50",
      },
    ],
  },
  {
    id: "waxing",
    title: "Waxing",
    intro:
      "Smooth, simple, and practical hair removal treatments covering smaller detail areas as well as larger body areas. Each treatment is designed to leave the skin neat and comfortable.",
    image: "/services/waxing-banner.jpg",
    services: [
      {
        id: "lip-wax",
        name: "Lip Wax",
        short: "Gentle upper lip hair removal for a smooth finish.",
        details:
          "A quick treatment designed to remove upper lip hair cleanly and leave the skin feeling smooth.",
        link: "https://www.fresha.com/book-now/nails-art-by-beni-o1nmt59t/services?lid=845612&eid=5161617&oiid=sv%3A26834150&share=true&pId=794989",
        icon: "/service-icons/lip-wax.png",
        price: "£6",
      },
      {
        id: "chin-wax",
        name: "Chin Wax",
        short: "Removes unwanted hair from the chin area.",
        details:
          "Designed to leave the chin area soft, neat, and smooth with a clean finish.",
        link: "https://www.fresha.com/book-now/nails-art-by-beni-o1nmt59t/services?lid=845612&eid=5161617&oiid=sv%3A26834174&share=true&pId=794989",
        icon: "/service-icons/chin-wax.png",
        price: "£7",
      },
      {
        id: "lip-and-chin-wax",
        name: "Lip and Chin Wax",
        short: "Combined facial waxing for a smooth, tidy result.",
        details:
          "A combination treatment that covers both areas together for convenient facial waxing and a polished finish.",
        link: "https://www.fresha.com/book-now/nails-art-by-beni-o1nmt59t/services?lid=845612&eid=5161617&oiid=sv%3A26834185&share=true&pId=794989",
        icon: "/service-icons/lip-and-chin-wax.png",
        price: "£12",
      },
      {
        id: "underarm-wax",
        name: "Underarm Wax",
        short: "Professional underarm waxing for long-lasting smoothness.",
        details:
          "A practical hair removal treatment for the underarm area designed to leave the skin smooth and well cared for.",
        link: "https://www.fresha.com/book-now/nails-art-by-beni-o1nmt59t/services?lid=845612&eid=5161617&oiid=sv%3A26834219&share=true&pId=794989",
        icon: "/service-icons/underarm-wax.png",
        price: "£10",
      },
      {
        id: "half-arm-wax",
        name: "Half Arm Wax",
        short: "Hair removal from elbow to wrist.",
        details:
          "A targeted waxing treatment covering the lower arm area for a smooth, neat finish.",
        link: "https://www.fresha.com/book-now/nails-art-by-beni-o1nmt59t/services?lid=845612&eid=5161617&oiid=sv%3A26834231&share=true&pId=794989",
        icon: "/service-icons/half-arm-wax.png",
        price: "£15",
      },
      {
        id: "full-arm-wax",
        name: "Full Arm Wax",
        short: "Complete arm waxing from shoulder to wrist.",
        details:
          "A full arm treatment for smooth skin and a clean, consistent finish across the entire arm.",
        link: "https://www.fresha.com/book-now/nails-art-by-beni-o1nmt59t/services?lid=845612&eid=5161617&oiid=sv%3A26834243&share=true&pId=794989",
        icon: "/service-icons/full-arm-wax.png",
        price: "£20",
      },
      {
        id: "half-leg-wax",
        name: "Half Leg Wax",
        short: "Hair removal from either the upper or lower leg.",
        details:
          "A flexible waxing treatment covering one half of the leg, depending on the area you want treated.",
        link: "https://www.fresha.com/book-now/nails-art-by-beni-o1nmt59t/services?lid=845612&eid=5161617&oiid=sv%3A26834268&share=true&pId=794989",
        icon: "/service-icons/half-leg-wax.png",
        price: "£20",
      },
      {
        id: "full-leg-wax",
        name: "Full Leg Wax",
        short: "Full leg waxing from thigh to ankle.",
        details:
          "A complete lower body waxing treatment designed to leave the legs smooth and neatly finished.",
        link: "https://www.fresha.com/book-now/nails-art-by-beni-o1nmt59t/services?lid=845612&eid=5161617&oiid=sv%3A26834286&share=true&pId=794989",
        icon: "/service-icons/full-leg-wax.png",
        price: "£28",
      },
      {
        id: "bikini-line-wax",
        name: "Bikini Line Wax",
        short: "Removes hair outside the bikini line for a tidy finish.",
        details:
          "A neat maintenance treatment for the bikini line, designed to keep the area clean and smooth.",
        link: "https://www.fresha.com/book-now/nails-art-by-beni-o1nmt59t/services?lid=845612&eid=5161617&oiid=sv%3A26834299&share=true&pId=794989",
        icon: "/service-icons/bikini-line-wax.png",
        price: "£16",
      },
    ],
  },
  {
    id: "brows-lashes",
    title: "Brows & Lashes",
    intro:
      "Subtle treatments designed to define the eyes and frame the face. This category focuses on shape, colour, and gentle enhancement that still feels natural and balanced.",
    image: "/services/brows-lashes-banner.jpg",
    services: [
      {
        id: "brow-sculpt",
        name: "Brow Sculpt",
        short: "Professional brow shaping for a clean and flattering finish.",
        details:
          "Uses waxing techniques to shape the brows neatly and create a result that feels balanced and well defined.",
        link: "https://www.fresha.com/book-now/nails-art-by-beni-o1nmt59t/services?lid=845612&eid=5161617&oiid=sv%3A26833005&share=true&pId=794989",
        icon: "/service-icons/brow-sculpt.png",
        price: "£10",
      },
      {
        id: "brow-tint",
        name: "Brow Tint",
        short: "Semi-permanent colour for fuller, more defined brows.",
        details:
          "A tinting treatment designed to enhance the natural brows and create stronger definition with a soft finish.",
        link: "https://www.fresha.com/book-now/nails-art-by-beni-o1nmt59t/services?lid=845612&eid=5161617&oiid=sv%3A26834092&share=true&pId=794989",
        icon: "/service-icons/brow-tint.png",
        price: "£13",
      },
      {
        id: "brow-sculpt-and-tint",
        name: "Brow Sculpt and Tint",
        short: "Shape and colour combined for a polished brow finish.",
        details:
          "Pairs brow shaping with tinting to create brows that feel balanced, defined, and tailored to your features.",
        link: "https://www.fresha.com/book-now/nails-art-by-beni-o1nmt59t/services?lid=845612&eid=5161617&oiid=sv%3A26834113&share=true&pId=794989",
        icon: "/service-icons/brow-sculpt-and-tint.png",
        price: "£20",
      },
      {
        id: "lash-tint",
        name: "Lash Tint",
        short: "Darkens lashes and enhances natural eye definition.",
        details:
          "A tinting treatment designed to make the lashes appear deeper and more noticeable without adding extensions.",
        link: "https://www.fresha.com/book-now/nails-art-by-beni-o1nmt59t/services?lid=845612&eid=5161617&oiid=sv%3A26834130&share=true&pId=794989",
        icon: "/service-icons/lash-tint.png",
        price: "£10",
      },
      {
        id: "brow-shaping-with-tweezers",
        name: "Brow Shaping with Tweezers",
        short: "Neat shaping using tweezers for controlled definition.",
        details:
          "A precision brow shaping treatment using tweezers to refine the shape and keep the result clean and flattering.",
        link: "https://www.fresha.com/book-now/nails-art-by-beni-o1nmt59t/services?lid=845612&eid=5161617&oiid=sv%3A26832992&share=true&pId=794989",
        icon: "/service-icons/brow-shaping-with-tweezers.png",
        price: "£8",
      },
    ],
  },
  {
    id: "facials",
    title: "Facials & Skin",
    intro:
      "A collection of skin-focused treatments designed to refresh, clarify, hydrate, and support healthier-looking skin. Each facial offers a different focus, depending on what your skin needs most.",
    image: "/services/facials-skin-banner.jpg",
    services: [
      {
        id: "skin-reset-facial",
        name: "Skin Reset Facial",
        short: "A classic facial to cleanse, refresh, and reset the skin.",
        details:
          "Includes cleansing, exfoliation, steamer or hot towels, moisturising, and finishing SPF for a refreshed, balanced result.",
        link: "https://www.fresha.com/book-now/nails-art-by-beni-o1nmt59t/services?lid=845612&eid=5161617&oiid=sv%3A26834377&share=true&pId=794989",
        icon: "/service-icons/skin-reset-facial.png",
        price: "£40",
      },
      {
        id: "glow-renewal-facial",
        name: "Glow Renewal Facial",
        short: "Deep exfoliation for smoother, brighter, fresher-looking skin.",
        details:
          "Focused on minimising enlarged pores through exfoliation, steaming, extractions, and peach fuzz removal for a cleaner glow.",
        link: "https://www.fresha.com/book-now/nails-art-by-beni-o1nmt59t/services?lid=845612&eid=5161617&oiid=sv%3A26834425&share=true&pId=794989",
        icon: "/service-icons/glow-renewal-facial.png",
        price: "£50",
      },
      {
        id: "hydration-boost-facial",
        name: "Hydration Boost Facial",
        short: "Restores moisture and softness to dull or dry skin.",
        details:
          "A nourishing treatment using ingredients such as hyaluronic acid and vitamin C to help improve hydration and skin comfort.",
        link: "https://www.fresha.com/book-now/nails-art-by-beni-o1nmt59t/services?lid=845612&eid=5161617&oiid=sv%3A26834454&share=true&pId=794989",
        icon: "/service-icons/hydration-boost-facial.png",
        price: "£55",
      },
      {
        id: "deep-skin-detox-facial",
        name: "Deep Skin Detox Facial",
        short: "Purifying care to cleanse pores and remove impurities.",
        details:
          "Uses ingredients such as charcoal, clay, or salicylic acid with lymphatic drainage and vitamin support to deeply refresh the skin.",
        link: "https://www.fresha.com/book-now/nails-art-by-beni-o1nmt59t/services?lid=845612&eid=5161617&oiid=sv%3A26834477&share=true&pId=794989",
        icon: "/service-icons/deep-skin-detox-facial.png",
        price: "£55",
      },
      {
        id: "age-defence-facial",
        name: "Age Defence Facial",
        short: "A rejuvenating treatment focused on firmness and smoothness.",
        details:
          "Uses targeted ingredients such as collagen, glycolic acid, vitamins C and E, hyaluronic acid, and retinol to support smoother-looking skin.",
        link: "https://www.fresha.com/book-now/nails-art-by-beni-o1nmt59t/services?lid=845612&eid=5161617&oiid=sv%3A26834489&share=true&pId=794989",
        icon: "/service-icons/age-defence-facial.png",
        price: "£60",
      },
    ],
  },
];

const faqItems: FaqItem[] = [
  {
    id: "faq-1",
    question: "Where do I complete my booking?",
    answer:
      "All appointments are finalised through Fresha. Once you select your treatment and click the booking button, you’ll be redirected there to complete it securely.",
  },
  {
    id: "faq-2",
    question: "Can I contact you before booking?",
    answer:
      "Yes. If you’d like a bit of guidance or want help choosing the right treatment, you’re always welcome to get in touch first.",
  },
  {
    id: "faq-3",
    question: "Do I need to know exactly what to book?",
    answer:
      "Not always. If you know the result you want but are unsure which treatment fits best, feel free to message first and we’ll help guide you.",
  },
  {
    id: "faq-4",
    question: "Are all services listed here?",
    answer:
      "These are the current service categories and treatments available now. If you can’t see what you’re looking for, get in touch and we’ll be happy to advise.",
  },
  {
    id: "faq-5",
    question: "Do you offer tailored recommendations?",
    answer:
      "Yes. Treatments are selected with your features, preferences, and desired result in mind, so the experience feels more personal and considered.",
  },
  {
    id: "faq-6",
    question: "Will I be taken away from the website to book?",
    answer:
      "Yes, but only when you’re ready. The website helps you explore everything first, and the final booking step happens on Fresha.",
  },
];

const ALL_SERVICES_FRESHA =
  "https://www.fresha.com/book-now/nails-art-by-beni-o1nmt59t/services?lid=845612&share=true&pId=794989";

export default function ServicesPage() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const toggleService = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  const toggleFaq = (id: string) => {
    setOpenFaqId((current) => (current === id ? null : id));
  };

  return (
    <main className={styles.servicesPage}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Services</p>
          <h1>Explore our treatments at your own pace</h1>
          <p className={styles.heroText}>
            Thank you for taking the time to visit our service space. We’ve
            designed this page to help you explore each category clearly, get a
            feel for what we offer, and find the treatment that feels right for
            you.
          </p>
          <p className={styles.heroText}>
            All appointments are completed through our trusted booking partner,
            Fresha. You can browse everything here first, then head over there
            only when you’re ready to book.
          </p>

          <a
            href={ALL_SERVICES_FRESHA}
            target="_blank"
            rel="noreferrer"
            className={styles.mainBookButton}
          >
            Book Now
          </a>
          <p className={styles.bookNote}>You’ll be redirected to Fresha.</p>
        </div>
      </section>

      <section className={styles.grid}>
        {categories.map((category) => (
          <article
            key={category.id}
            id={category.id}
            className={styles.categoryCard}
          >
            <div className={styles.categoryImage}>
              <img src={category.image} alt={category.title} />
            </div>

            <div className={styles.categoryContent}>
              <h2>{category.title}</h2>
              <p className={styles.categoryIntro}>{category.intro}</p>

              <div className={styles.serviceList}>
                {category.services.map((service) => {
                  const isOpen = openId === service.id;

                  return (
                    <div
                      key={service.id}
                      className={`${styles.serviceItem} ${
                        isOpen ? styles.serviceItemOpen : ""
                      }`}
                    >
                      <button
                        type="button"
                        className={styles.serviceToggle}
                        onClick={() => toggleService(service.id)}
                        aria-expanded={isOpen}
                      >
                        <div className={styles.serviceIcon}>
                          <img src={service.icon} alt={service.name} />
                        </div>

                        <div className={styles.serviceSummary}>
                          <h3>{service.name}</h3>
                          <p>{service.short}</p>
                        </div>

                        <div className={styles.expandMark}>{isOpen ? "−" : "+"}</div>
                      </button>

                      {isOpen && (
                        <div className={styles.serviceDetails}>
  <p>{service.details}</p>

  <div className={styles.serviceBottomRow}>
  <div className={styles.leftSide}>
    <a
      href={service.link}
      target="_blank"
      rel="noreferrer"
      className={styles.serviceBookButton}
    >
      Book on Fresha
    </a>
  </div>

  {service.price && (
    <div className={styles.rightSide}>
      <span className={styles.serviceExpandedPrice}>
        {service.price}
      </span>
    </div>
  )}
</div>
</div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className={styles.faqSection}>
        <div className={styles.faqHeading}>
          <p className={styles.faqEyebrow}>FAQ</p>
          <h2>Common questions</h2>
          <p>
            Quick answers to the things visitors are most likely to want to know
            before booking.
          </p>
        </div>

        <div className={styles.faqGrid}>
          {faqItems.map((item) => {
            const isOpen = openFaqId === item.id;

            return (
              <div
                key={item.id}
                className={`${styles.faqCard} ${
                  isOpen ? styles.faqCardOpen : ""
                }`}
              >
                <button
                  type="button"
                  className={styles.faqToggle}
                  onClick={() => toggleFaq(item.id)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <span className={styles.faqPlus}>{isOpen ? "×" : "+"}</span>
                </button>

                {isOpen && <p className={styles.faqAnswer}>{item.answer}</p>}
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}