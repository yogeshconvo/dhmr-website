import React from "react";

const ViewMoreButton = ({
  onClick,
  href,
  label = "View More",
  className = "",
  target = "_blank",
}) => {
  const baseClasses =
    "mt-2 mb-4 px-6 py-2 bg-[#F04E30] text-white rounded font-semibold transition hover:bg-[#d13d22]";

  if (href) {
    return (
      <a
        href={href}
        className={`${baseClasses} ${className}`}
        target={target}
        rel="noopener noreferrer"
      >
        {label}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${className}`}>
      {label}
    </button>
  );
};

export default ViewMoreButton;
