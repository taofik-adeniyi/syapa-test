import React from "react";

interface InputProps {
  label?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  value?: string;
  placeholder?: string;
  error?: string;
  className?: string;
  extraClass?: string;
  style?: {};
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
}
const Input = (props: InputProps) => {
  const {
    label,
    name,
    onChange,
    onBlur,
    type,
    value,
    error,
    className,
    extraClass,
    placeholder = "Input Details",
    style,
    suffix,
    prefix,
  } = props;
  return (
    <div className={`relative ${extraClass}`}>
      {label && (
        <label
          htmlFor={name}
          className=" bg-transparent capitalize font-display text-xs"
        >
          {label}
        </label>
      )}
      <div
        className="flex items-center rounded-[4px] bg-[#F9F9F9] w-[367px]"
        style={{ padding: "4px 20px" }}
      >
        {prefix && prefix}
        <input
          onChange={onChange}
          name={name}
          type={type}
          value={value}
          onBlur={onBlur}
          className={`input-tag ml-3  placeholder-syarpasecondaryarsh`}
          placeholder={placeholder}
          style={style}
        />
        {suffix && suffix}
      </div>
      {error && (
        <div className="text-red-500 text-xs font-display">{error}</div>
      )}
    </div>
  );
};

export default Input;
