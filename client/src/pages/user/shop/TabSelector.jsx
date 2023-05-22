import * as React from "react";

export const TabSelector = ({
  isActive,
  children,
  onClick,
}) => (
  <span
    className={` ${
      isActive
        ? "text-dark border border-0 border-bottom border-dark "
        : "text-muted"
    }`}
    onClick={onClick}
  >
    {children}
  </span>
);