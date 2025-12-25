import React, { useEffect, useRef } from "react";

function Modal({ isOpen, onClose, title, children }) {
  const modalRef = useRef(null);

  // بستن با Esc
  useEffect(() => {
    if (!isOpen) return;

    function handleKey(e) {
      if (e.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  // وقتی باز میشه، فوکوس روی مودال (یا اولین input) بذار
  useEffect(() => {
    if (isOpen && modalRef.current) {
      // تلاش می‌کنیم اولین المان قابل فوکوس رو فوکوس کنیم
      const focusable = modalRef.current.querySelector(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable) focusable.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // جلوگیری از بستن وقتی کاربر داخل مودال کلیک میکنه
  function handleInnerClick(e) {
    e.stopPropagation();
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title || "Modal"}
      onClick={onClose} // کلیک روی بک‌دراپ مودال رو می‌بنده
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.4)",
        zIndex: 1000,
      }}
    >
      <div
        ref={modalRef}
        onClick={handleInnerClick}
        style={{
          minWidth: 320,
          maxWidth: "90%",
          background: "#fff",
          borderRadius: 8,
          padding: "1rem",
          boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
        }}
      >
        {title && <h3 style={{ marginTop: 0 }}>{title}</h3>}
        <div>{children}</div>
        {/* footer ساده برای بستن */}
        <div style={{ marginTop: "1rem", textAlign: "right" }}>
          <button onClick={onClose} aria-label="بستن مودال">
            بستن
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
