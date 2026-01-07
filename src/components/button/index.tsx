import React, { type FC } from "react";

interface IProp {
  text: string;
  name?: string; // opsiyonel
  designs?: string;
  disabled?: boolean;
  type: "button" | "reset" | "submit";
  fn?: () => void; // fonksiyon
}

const Button: FC<IProp> = ({ text, name, designs, disabled, type, fn }) => {
  return (
    <button
      type={type}
      name={name}
      className={`${designs} custom-btn`}
      disabled={disabled}
      onClick={fn}
    >
      {text}
    </button>
  );
};

export default Button;
