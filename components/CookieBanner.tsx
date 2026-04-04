"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookie-consent");

    if (!accepted) {
      setTimeout(() => {
        setVisible(true);
        document.body.classList.add("cookie-lock");
      }, 1200);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    document.body.classList.remove("cookie-lock");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-overlay">
      <div className="cookie-modal">
        <h3>Cookies & Privacy</h3>

        <p>
          We use cookies to improve your experience, analyse traffic, and support
          booking functionality. By clicking accept, you agree to our use of cookies.
        </p>

        <div className="cookie-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms</a>
          <a href="/cookies">Cookies</a>
        </div>

        <button onClick={acceptCookies} className="cookie-btn">
          Accept
        </button>
      </div>
    </div>
  );
}