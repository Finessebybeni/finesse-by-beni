"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setTimeout(() => setVisible(true), 1200);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    window.dispatchEvent(new Event("finesse-consent-changed"));
    setVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <p className="cookie-banner-text">
        We use cookies to improve your experience, analyse traffic, and support
        booking functionality. Read our{" "}
        <a href="/cookies">Cookies Policy</a>.
      </p>

      <div className="cookie-banner-actions">
        <button onClick={rejectCookies} className="cookie-btn cookie-btn-secondary">
          Reject
        </button>
        <button onClick={acceptCookies} className="cookie-btn">
          Accept
        </button>
      </div>
    </div>
  );
}
