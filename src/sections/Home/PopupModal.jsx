import React, { useEffect, useRef } from "react";

export default function PopupModal({ show, onClose, title, children }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };

    if (show) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      modalRef.current?.focus();
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div
      className="fixed mt-[100px] inset-0 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
    >
      <div
        ref={modalRef}
        className="bg-white inline-block p-2 rounded-lg shadow-lg relative outline-none"
        tabIndex="-1"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-2xl"
          aria-label="Close popup"
        >
          &times;
        </button>

        {title && (
          <h2 className="text-xl text-red-500 text-center font-semibold mb-4">
            {title}
          </h2>
        )}
        <div>{children}</div>
      </div>
    </div>
  );
}
