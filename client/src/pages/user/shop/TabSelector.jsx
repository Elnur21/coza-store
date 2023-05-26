import * as React from "react";
import "../../../assets/style/shop.css";

export const TabSelector = ({
  isActive,
  children,
  onClick,
}) => (
  <span
    className={`${
      isActive
        ? "text-dark border border-0 border-bottom border-dark shop-category"
        : "text-muted shop-category"
    }`}
    onClick={onClick}
  >
    {children}
  </span>
);