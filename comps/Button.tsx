import React from "react";

interface ButtonType {
  type: "button" | "submit" | "reset";
  children: React.ReactNode;
  variant: string;
  className?: string;
}
const Button = (props: ButtonType) => {
  const { type, children, variant, className } = props;
  const variantClassName = variant == "primary" ? "btn-primary" : "btn-outline";
  return (
    <button
      type={type}
      className={`border-2 text-base ${variantClassName + " " + className} `}
    >
      {children}
    </button>
  );
};

export default Button;
