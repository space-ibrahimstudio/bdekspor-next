import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./styles/buttons.module.css";

export function Dropdown({ text, iconFallback, onClick }) {
  return (
    <button className={styles.dropdown} onClick={onClick}>
      <img
        className={styles.dropdownIcon}
        src={iconFallback}
        alt={text}
        loading="lazy"
      />
      <b className={styles.dropdownText}>{text}</b>
      <img
        className={styles.chevronDownIcon}
        alt={text}
        src="/svg/chevron-down.svg"
      />
    </button>
  );
}

export function SmallButton({ type, color, text, onClick }) {
  if (type === "hollow") {
    if (color === "yellow") {
      return (
        <button
          className={styles.buttonSm}
          style={{ backgroundColor: "transparent" }}
          onClick={onClick}
        >
          <b
            className={styles.buttonText}
            style={{ color: "var(--theme-yellow)" }}
          >
            {text}
          </b>
        </button>
      );
    }
    if (color === "white") {
      return (
        <button
          className={styles.buttonSm}
          style={{ backgroundColor: "transparent" }}
          onClick={onClick}
        >
          <b
            className={styles.buttonText}
            style={{ color: "var(--theme-white)" }}
          >
            {text}
          </b>
        </button>
      );
    }
    if (color === "dark") {
      return (
        <button
          className={styles.buttonSm}
          style={{ backgroundColor: "transparent" }}
          onClick={onClick}
        >
          <b
            className={styles.buttonText}
            style={{ color: "var(--theme-bluedark)" }}
          >
            {text}
          </b>
        </button>
      );
    }
    return (
      <button
        className={styles.buttonSm}
        style={{ backgroundColor: "transparent" }}
        onClick={onClick}
      >
        <b className={styles.buttonText} style={{ color: "var(--theme-blue)" }}>
          {text}
        </b>
      </button>
    );
  }

  if (type === "hollow-line") {
    if (color === "yellow") {
      return (
        <button
          className={styles.buttonSm}
          style={{
            backgroundColor: "transparent",
            border: "1px solid var(--theme-yellow)",
          }}
          onClick={onClick}
        >
          <b
            className={styles.buttonText}
            style={{ color: "var(--theme-yellow)" }}
          >
            {text}
          </b>
        </button>
      );
    }
    if (color === "white") {
      return (
        <button
          className={styles.buttonSm}
          style={{
            backgroundColor: "transparent",
            border: "1px solid var(--theme-white)",
          }}
          onClick={onClick}
        >
          <b
            className={styles.buttonText}
            style={{ color: "var(--theme-white)" }}
          >
            {text}
          </b>
        </button>
      );
    }
    if (color === "dark") {
      return (
        <button
          className={styles.buttonSm}
          style={{
            backgroundColor: "transparent",
            border: "1px solid var(--theme-bluedark)",
          }}
          onClick={onClick}
        >
          <b
            className={styles.buttonText}
            style={{ color: "var(--theme-bluedark)" }}
          >
            {text}
          </b>
        </button>
      );
    }
    return (
      <button
        className={styles.buttonSm}
        style={{
          backgroundColor: "transparent",
          border: "1px solid var(--theme-blue)",
        }}
        onClick={onClick}
      >
        <b className={styles.buttonText} style={{ color: "var(--theme-blue)" }}>
          {text}
        </b>
      </button>
    );
  }

  if (color === "yellow") {
    return (
      <button
        className={styles.buttonSm}
        style={{ backgroundColor: "var(--theme-yellow)" }}
        onClick={onClick}
      >
        <b
          className={styles.buttonText}
          style={{ color: "var(--theme-bluedark)" }}
        >
          {text}
        </b>
      </button>
    );
  }
  if (color === "white") {
    return (
      <button
        className={styles.buttonSm}
        style={{ backgroundColor: "var(--theme-white)" }}
        onClick={onClick}
      >
        <b
          className={styles.buttonText}
          style={{ color: "var(--theme-bluedark)" }}
        >
          {text}
        </b>
      </button>
    );
  }
  if (color === "dark") {
    return (
      <button
        className={styles.buttonSm}
        style={{ backgroundColor: "var(--theme-bluedark)" }}
        onClick={onClick}
      >
        <b
          className={styles.buttonText}
          style={{ color: "var(--theme-purewhite)" }}
        >
          {text}
        </b>
      </button>
    );
  }
  return (
    <button className={styles.buttonSm} onClick={onClick}>
      <b className={styles.buttonText}>{text}</b>
    </button>
  );
}

export function PrimButton({ variant, type, color, text, loading, onClick }) {
  if (variant === "hollow") {
    if (color === "yellow") {
      return (
        <button
          type={type}
          className={styles.button}
          style={{ backgroundColor: "transparent" }}
          onClick={onClick}
        >
          <b
            className={styles.buttonText}
            style={{ color: "var(--theme-yellow)" }}
          >
            {loading ? "Please wait ..." : text}
          </b>
        </button>
      );
    }
    if (color === "white") {
      return (
        <button
          type={type}
          className={styles.button}
          style={{ backgroundColor: "transparent" }}
          onClick={onClick}
        >
          <b
            className={styles.buttonText}
            style={{ color: "var(--theme-white)" }}
          >
            {loading ? "Please wait ..." : text}
          </b>
        </button>
      );
    }
    if (color === "dark") {
      return (
        <button
          type={type}
          className={styles.button}
          style={{ backgroundColor: "transparent" }}
          onClick={onClick}
        >
          <b
            className={styles.buttonText}
            style={{ color: "var(--theme-bluedark)" }}
          >
            {loading ? "Please wait ..." : text}
          </b>
        </button>
      );
    }
    return (
      <button
        type={type}
        className={styles.button}
        style={{ backgroundColor: "transparent" }}
        onClick={onClick}
      >
        <b className={styles.buttonText} style={{ color: "var(--theme-blue)" }}>
          {loading ? "Please wait ..." : text}
        </b>
      </button>
    );
  }

  if (variant === "hollow-line") {
    if (color === "yellow") {
      return (
        <button
          type={type}
          className={styles.button}
          style={{
            backgroundColor: "transparent",
            border: "1px solid var(--theme-yellow)",
          }}
          onClick={onClick}
        >
          <b
            className={styles.buttonText}
            style={{ color: "var(--theme-yellow)" }}
          >
            {loading ? "Please wait ..." : text}
          </b>
        </button>
      );
    }
    if (color === "white") {
      return (
        <button
          type={type}
          className={styles.button}
          style={{
            backgroundColor: "transparent",
            border: "1px solid var(--theme-white)",
          }}
          onClick={onClick}
        >
          <b
            className={styles.buttonText}
            style={{ color: "var(--theme-white)" }}
          >
            {loading ? "Please wait ..." : text}
          </b>
        </button>
      );
    }
    if (color === "dark") {
      return (
        <button
          type={type}
          className={styles.button}
          style={{
            backgroundColor: "transparent",
            border: "1px solid var(--theme-bluedark)",
          }}
          onClick={onClick}
        >
          <b
            className={styles.buttonText}
            style={{ color: "var(--theme-bluedark)" }}
          >
            {loading ? "Please wait ..." : text}
          </b>
        </button>
      );
    }
    return (
      <button
        type={type}
        className={styles.button}
        style={{
          backgroundColor: "transparent",
          border: "1px solid var(--theme-blue)",
        }}
        onClick={onClick}
      >
        <b className={styles.buttonText} style={{ color: "var(--theme-blue)" }}>
          {loading ? "Please wait ..." : text}
        </b>
      </button>
    );
  }

  if (color === "yellow") {
    return (
      <button
        type={type}
        className={styles.button}
        style={{ backgroundColor: "var(--theme-yellow" }}
        onClick={onClick}
      >
        <b
          className={styles.buttonText}
          style={{ color: "var(--theme-bluedark)" }}
        >
          {loading ? "Please wait ..." : text}
        </b>
      </button>
    );
  }
  if (color === "white") {
    return (
      <button
        type={type}
        className={styles.button}
        style={{ backgroundColor: "var(--theme-white" }}
        onClick={onClick}
      >
        <b
          className={styles.buttonText}
          style={{ color: "var(--theme-bluedark)" }}
        >
          {loading ? "Please wait ..." : text}
        </b>
      </button>
    );
  }
  if (color === "dark") {
    return (
      <button
        type={type}
        className={styles.button}
        style={{ backgroundColor: "var(--theme-bluedark" }}
        onClick={onClick}
      >
        <b
          className={styles.buttonText}
          style={{ color: "var(--theme-purewhite)" }}
        >
          {loading ? "Please wait ..." : text}
        </b>
      </button>
    );
  }
  return (
    <button type={type} className={styles.button} onClick={onClick}>
      <b className={styles.buttonText}>{loading ? "Please wait ..." : text}</b>
    </button>
  );
}

PrimButton.propTypes = {
  type: PropTypes.oneOf(["hollow", "hollow-line"]),
  color: PropTypes.oneOf(["yellow", "white", "dark"]),
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export function TabButton({ text, currentRoute, onClick }) {
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    const currentPath = window.location.pathname;
    setActiveLink((prevActiveLink) => {
      return prevActiveLink === currentPath ? prevActiveLink : currentPath;
    });
  }, []);

  return (
    <button
      className={styles.buttonSm}
      style={
        activeLink === currentRoute
          ? { backgroundColor: "var(--theme-bluedark-50)" }
          : { backgroundColor: "transparent" }
      }
      onClick={onClick}
    >
      <b
        className={styles.buttonText}
        style={{ color: "var(--theme-purewhite)" }}
      >
        {text}
      </b>
    </button>
  );
}
