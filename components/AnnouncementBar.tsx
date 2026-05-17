"use client";

import { useEffect, useState } from "react";

const showAnnouncementBar = true;

const messages = [
  "New massage treatments now available – 20% off listed prices",
  "Appointment only – calm, private experience",
  "15% off listed prices on selected beauty treatments",
];

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 10) {
        setVisible(true);
      } else if (currentScrollY < lastScrollY) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  if (!showAnnouncementBar) return null;

  return (
    <div className={`announcementBar ${visible ? "show" : "hide"}`}>
      <div className="announcementTrack">
        <div className="announcementGroup">
          {messages.map((message, index) => (
            <span key={`a-${index}`} className="announcementItem">
              {message}
            </span>
          ))}
        </div>

        <div className="announcementGroup">
          {messages.map((message, index) => (
            <span key={`b-${index}`} className="announcementItem">
              {message}
            </span>
          ))}
        </div>

        <div className="announcementGroup">
          {messages.map((message, index) => (
            <span key={`c-${index}`} className="announcementItem">
              {message}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}