import React from "react";
import styles from "./styles/inputs.module.css";

export function FieldWrap({ children }) {
  return <div className={styles.formInputWrap}>{children}</div>;
}

export function FieldInput({
  variant,
  id,
  labelText,
  type,
  name,
  value,
  onChange,
  error,
  disabled,
  placeholder,
}) {
  if (variant === "label") {
    return (
      <div className={styles.formInput}>
        <label className={styles.formInputLabel} htmlFor={id}>
          {labelText}
        </label>
        <div
          className={`${styles.formInputField} ${
            disabled ? styles.disabled : ""
          }`}
        >
          <input
            className={styles.formFieldInput}
            placeholder={placeholder}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            disabled={disabled}
          />
        </div>
        {error && (
          <h6
            className={styles.formInputLabel}
            style={{ color: "var(--theme-red)" }}
          >
            {error}
          </h6>
        )}
      </div>
    );
  }
  return (
    <>
      <label htmlFor={id} style={{ display: "none" }}>
        {labelText}
      </label>
      <input
        id={id}
        className={styles.input}
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export function FieldSelect({
  variant,
  id,
  labelText,
  children,
  name,
  value,
  onChange,
  error,
}) {
  if (variant === "label") {
    return (
      <div className={styles.formInput}>
        <label className={styles.formInputLabel} htmlFor={id}>
          {labelText}
        </label>
        <div className={styles.formInputField}>
          <select
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            className={styles.formFieldSelect}
          >
            {children}
          </select>
        </div>
        {error && (
          <h6
            className={styles.formInputLabel}
            style={{ color: "var(--theme-red)" }}
          >
            {error}
          </h6>
        )}
      </div>
    );
  }
  return (
    <>
      <label
        className={styles.formInputLabel}
        htmlFor={id}
        style={{ display: "none" }}
      >
        {labelText}
      </label>
      <div className={styles.formInputField}>
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className={styles.formFieldSelect}
        >
          {children}
        </select>
      </div>
    </>
  );
}
