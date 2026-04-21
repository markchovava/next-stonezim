"use client"
import { useState, useEffect, useCallback } from "react";


interface BackToTopProps {
  /** Scroll distance (px) before button appears. Default: 300 */
  threshold?: number;
  /** Smooth or instant scroll. Default: "smooth" */
  behavior?: ScrollBehavior;
  /** Button label for screen-readers. Default: "Back to top" */
  label?: string;
}


export default function BackToTopButton({
  threshold = 300,
  behavior = "smooth",
  label = "Back to top",
}: BackToTopProps) {
  const [visible, setVisible] = useState(false);

  const handleScroll = useCallback(() => {
    setVisible(window.scrollY > threshold);
  }, [threshold]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior });
  };

  return (
    <>
      <button
        onClick={scrollToTop}
        aria-label={label}
        title={label}
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          zIndex: 999,
          display: "grid",
          placeItems: "center",
          width: "2.75rem",
          height: "2.75rem",
          borderRadius: "50%",
          border: "none",
          background: "#111",
          color: "#fff",
          cursor: "pointer",
          boxShadow: "0 4px 14px rgba(0,0,0,0.25)",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(1rem)",
          transition: "opacity 0.25s ease, transform 0.25s ease",
          pointerEvents: visible ? "auto" : "none",
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </>
  );
}